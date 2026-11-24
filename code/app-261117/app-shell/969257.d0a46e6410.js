export const __rspack_esm_ids = [969257]
export const __webpack_modules__ = {
  pWYp(e, l, r) {
    function a(e) {
      let l = new Map(),
        r = (e) => {
          ;(l.set(e.id, e), e.children?.forEach(r))
        }
      return (e.forEach(r), l)
    }
    r.d(
      l,
      {},
      {
        eD: function (e) {
          try {
            let l = new URL(e)
            return "http:" === l.protocol || "https:" === l.protocol ? l.href : null
          } catch {
            return null
          }
        },
        wH: function (e, l, r) {
          let t = a(e),
            o = t.get(l),
            n = t.get(r.parentId)
          if (null == o) return { ok: !1, reason: "missing-bookmark" }
          if (n?.children == null) return { ok: !1, reason: "missing-folder" }
          if (!o.editable || null == o.parentId || !t.get(o.parentId)?.childrenEditable || !n.childrenEditable)
            return { ok: !1, reason: "not-editable" }
          for (let e = n; e;) {
            if (e.id === l) return { ok: !1, reason: "invalid-destination" }
            e = null == e.parentId ? void 0 : t.get(e.parentId)
          }
          let s = null == r.beforeId ? n.children.length : n.children.findIndex((e) => e.id === r.beforeId)
          if (s < 0) return { ok: !1, reason: "invalid-destination" }
          let i = n.children.findIndex((e) => e.id === l)
          return i >= 0 && (s === i || s === i + 1)
            ? { ok: !0, value: null }
            : { ok: !0, value: { parentId: n.id, index: s } }
        },
        xF: a,
      },
    )
  },
  Nb8b(e, l, r) {
    var a = r("RFUB")
    r.d(
      l,
      {},
      {
        r: async function (e, l) {
          switch (l.type) {
            case "save":
              return (0, a.KA)(e, l)
            case "update":
              return (0, a.ED)(e, l.id, { title: l.title, folderId: l.folderId })
            case "move":
              return (0, a.wz)(e, l.id, { parentId: l.parentId, beforeId: l.beforeId })
            case "remove":
              return (0, a.XO)(e, l.id)
            case "create-folder":
              return (0, a.p9)(e, l.title)
            case "rename-folder":
              return (0, a.Bc)(e, l.id, l.title)
            case "remove-folder":
              return (0, a.Pw)(e, l.id)
          }
        },
      },
    )
  },
  NoIA(e, l, r) {
    var a = r("pWYp")
    function t(e) {
      return "mobile" === e.folderType && e.children?.length === 0
    }
    r.d(
      l,
      {},
      {
        aB: function e(l, r) {
          for (let a of l) {
            if (r(a)) return a
            let l = e(a.children ?? [], r)
            if (null != l) return l
          }
        },
        ge: function (e, l, r) {
          let t = (0, a.eD)(e)
          return null != t && l.available && (l.defaultFolderChildrenEditable || r(t))
        },
        gm: function (e) {
          let l = e.tree.flatMap((e) => ("root" === e.folderType ? (e.children ?? []) : e)).filter(t)
          return e.folders.filter((e) => !l.some((l) => l.id === e.id))
        },
        vI: function e(l) {
          return l
            .filter((e) => !t(e))
            .flatMap((l) =>
              "root" === l.folderType || ("bookmarks-bar" === l.folderType && "local" === l.storage)
                ? e(l.children ?? [])
                : l,
            )
        },
        zk: function (e, l, r) {
          let a = new Map([...l, ...r].map((e) => [e.id, e]))
          return e.flatMap((e) => {
            let l = a.get(e.id)
            return null == l ? [] : [l]
          })
        },
      },
    )
  },
  gPgj(e, l, r) {
    let a = (0, r("Qgfj").YK)({
      moveError: { id: "browser.bookmarks.moveError", defaultMessage: "Could not move bookmark \u2014 try again" },
      dragStarted: { id: "browser.bookmarks.dragStarted", defaultMessage: "Moving bookmark. Press Escape to cancel" },
      dragEnded: { id: "browser.bookmarks.dragEnded", defaultMessage: "Bookmark drag ended" },
      dragCancelled: { id: "browser.bookmarks.dragCancelled", defaultMessage: "Bookmark move cancelled" },
      menu: { id: "browser.bookmarks.menu", defaultMessage: "Bookmarks" },
      bookmarkTab: { id: "browser.bookmarks.bookmarkTab", defaultMessage: "Bookmark this tab\u2026" },
      showBar: { id: "browser.bookmarks.showBar", defaultMessage: "Show bookmarks bar" },
      bar: { id: "browser.bookmarks.bar", defaultMessage: "Bookmarks bar" },
      overflow: { id: "browser.bookmarks.overflow", defaultMessage: "More bookmarks" },
      empty: { id: "browser.bookmarks.empty", defaultMessage: "No bookmarks" },
      loading: { id: "browser.bookmarks.loading", defaultMessage: "Loading bookmarks\u2026" },
      unavailable: { id: "browser.bookmarks.libraryUnavailable", defaultMessage: "Bookmarks are unavailable" },
      unsupported: {
        id: "browser.bookmarks.unsupportedUrl",
        defaultMessage: "This bookmark\u2019s URL cannot be opened here",
      },
      open: { id: "browser.bookmarks.open", defaultMessage: "Open" },
      openNewTab: { id: "browser.bookmarks.openNewTab", defaultMessage: "Open in new tab" },
      edit: { id: "browser.bookmarks.editEntry", defaultMessage: "Edit bookmark\u2026" },
    })
    r.d(l, {}, { D: a })
  },
  pKMN(e, l, r) {
    var a = r("ABep"),
      t = r("QosV"),
      o = r("zd8w"),
      n = r("Wf1j"),
      s = r("oyxz"),
      i = r("Sm6l"),
      d = r("bqtn"),
      u = r("bVeK"),
      c = r("nzx4"),
      b = r("zLIa"),
      m = r("i7fz"),
      f = r("Y3Vu"),
      k = r("t4Rm")
    function g(e) {
      return e.target.select()
    }
    function h(e) {
      let l,
        r,
        n,
        i,
        d,
        u,
        c,
        k,
        g,
        h,
        x,
        j,
        y,
        w,
        I,
        M = (0, t.c)(46),
        { folder: S, available: A, defaultFolderChildrenEditable: _, onAction: C, onSaved: E, onCancel: F } = e,
        N = (0, o.useId)(),
        [T, D] = (0, o.useState)(S?.title ?? ""),
        [B, z] = (0, o.useState)(!1),
        [P, R] = (0, o.useState)(null),
        O = S?.editable ?? _
      M[0] !== A || M[1] !== O || M[2] !== S || M[3] !== C || M[4] !== E || M[5] !== B || M[6] !== T
        ? ((l = async function () {
            if (!B && A && O && "" !== T.trim()) {
              ;(z(!0), R(null))
              try {
                let e = await C(
                  null == S ? { type: "create-folder", title: T } : { type: "rename-folder", id: S.id, title: T },
                )
                e.ok && e.value?.kind === "folder" ? E(e.value) : R(e.ok ? "storage-unavailable" : e.reason)
              } catch {
                R("storage-unavailable")
              }
              z(!1)
            }
          }),
          (M[0] = A),
          (M[1] = O),
          (M[2] = S),
          (M[3] = C),
          (M[4] = E),
          (M[5] = B),
          (M[6] = T),
          (M[7] = l))
        : (l = M[7])
      let U = l
      ;(M[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, a.jsx)(s.A, { id: "browser.bookmarks.folderName", defaultMessage: "Folder name" })), (M[8] = r))
        : (r = M[8]),
        M[9] !== N
          ? ((n = (0, a.jsx)("label", { htmlFor: N, className: "text-xs text-secondary", children: r })),
            (M[9] = N),
            (M[10] = n))
          : (n = M[10]),
        M[11] !== F || M[12] !== B || M[13] !== U
          ? ((i = (e) => {
              !(0, m.X)(e.nativeEvent) &&
                ("Enter" === e.key && (e.preventDefault(), e.stopPropagation(), U()),
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), B || F()))
            }),
            (M[11] = F),
            (M[12] = B),
            (M[13] = U),
            (M[14] = i))
          : (i = M[14]))
      let W = B || !A || !O
      return (
        M[15] === Symbol.for("react.memo_cache_sentinel") ? ((d = (e) => D(e.target.value)), (M[15] = d)) : (d = M[15]),
        M[16] !== N || M[17] !== i || M[18] !== W || M[19] !== T
          ? ((u = (0, a.jsx)(b.pd, {
              id: N,
              variant: "outlined",
              onKeyDown: i,
              autoFocus: !0,
              value: T,
              disabled: W,
              onChange: d,
              onFocus: p,
            })),
            (M[16] = N),
            (M[17] = i),
            (M[18] = W),
            (M[19] = T),
            (M[20] = u))
          : (u = M[20]),
        M[21] !== P ? ((c = null != P ? (0, a.jsx)(v, { reason: P }) : null), (M[21] = P), (M[22] = c)) : (c = M[22]),
        M[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, a.jsx)(s.A, { id: "browser.bookmarks.cancelFolder", defaultMessage: "Cancel" })), (M[23] = k))
          : (k = M[23]),
        M[24] !== F || M[25] !== B
          ? ((g = (0, a.jsx)(f.DW, {
              type: "button",
              disabled: B,
              "data-bookmark-folder-cancel": "",
              onClick: F,
              children: k,
            })),
            (M[24] = F),
            (M[25] = B),
            (M[26] = g))
          : (g = M[26]),
        M[27] !== A || M[28] !== O || M[29] !== B || M[30] !== T
          ? ((h = B || !A || !O || "" === T.trim()), (M[27] = A), (M[28] = O), (M[29] = B), (M[30] = T), (M[31] = h))
          : (h = M[31]),
        M[32] !== U ? ((x = () => void U()), (M[32] = U), (M[33] = x)) : (x = M[33]),
        M[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(s.A, { id: "browser.bookmarks.saveFolder", defaultMessage: "Save folder" })), (M[34] = j))
          : (j = M[34]),
        M[35] !== h || M[36] !== x
          ? ((y = (0, a.jsx)(f.DW, { type: "button", variant: "primary", disabled: h, onClick: x, children: j })),
            (M[35] = h),
            (M[36] = x),
            (M[37] = y))
          : (y = M[37]),
        M[38] !== g || M[39] !== y
          ? ((w = (0, a.jsxs)("div", { className: "flex justify-end gap-2", children: [g, y] })),
            (M[38] = g),
            (M[39] = y),
            (M[40] = w))
          : (w = M[40]),
        M[41] !== w || M[42] !== n || M[43] !== u || M[44] !== c
          ? ((I = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [n, u, c, w] })),
            (M[41] = w),
            (M[42] = n),
            (M[43] = u),
            (M[44] = c),
            (M[45] = I))
          : (I = M[45]),
        I
      )
    }
    function p(e) {
      return e.target.select()
    }
    function x(e, l) {
      let r = [e.title],
        a = new Set([e.id]),
        t = e.folderId
      for (; null != t && !a.has(t);) {
        a.add(t)
        let e = l.find((e) => e.id === t)
        if (null == e) break
        ;(r.unshift(e.title), (t = e.folderId))
      }
      return r.join(" / ")
    }
    function v(e) {
      let l,
        r,
        o = (0, t.c)(6),
        { reason: n } = e
      if ("missing-bookmark" === n) {
        let e
        ;(o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(s.A, {
              id: "browser.bookmarks.missingBookmark",
              defaultMessage: "This bookmark no longer exists",
            })),
            (o[0] = e))
          : (e = o[0]),
          (l = e))
      } else if ("missing-folder" === n) {
        let e
        ;(o[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(s.A, {
              id: "browser.bookmarks.missingFolder",
              defaultMessage: "This folder is unavailable \u2014 choose another folder",
            })),
            (o[1] = e))
          : (e = o[1]),
          (l = e))
      } else if ("not-editable" === n) {
        let e
        ;(o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(s.A, {
              id: "browser.bookmarks.editNotAllowed",
              defaultMessage: "These changes are not allowed",
            })),
            (o[2] = e))
          : (e = o[2]),
          (l = e))
      } else {
        let e
        ;(o[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(s.A, {
              id: "browser.bookmarks.saveError",
              defaultMessage: "Changes could not be saved \u2014 try again",
            })),
            (o[3] = e))
          : (e = o[3]),
          (l = e))
      }
      return (
        o[4] !== l
          ? ((r = (0, a.jsx)("p", { role: "alert", className: "text-xs text-danger", children: l })),
            (o[4] = l),
            (o[5] = r))
          : (r = o[5]),
        r
      )
    }
    r.d(
      l,
      {},
      {
        c: h,
        y: function (e) {
          let l,
            r,
            m,
            p,
            j,
            y,
            w,
            I,
            M,
            S,
            A,
            _,
            C,
            E,
            F,
            N,
            T,
            D,
            B,
            z,
            P,
            R,
            O,
            U,
            W,
            Y,
            K,
            L,
            H,
            V,
            q,
            G,
            $,
            X,
            Q,
            Z,
            J,
            ee,
            el,
            er,
            ea,
            et,
            eo,
            en,
            es,
            ei,
            ed,
            eu,
            ec,
            eb = (0, t.c)(162),
            {
              bookmark: em,
              url: ef,
              title: ek,
              folders: eg,
              available: eh,
              defaultFolderChildrenEditable: ep,
              onAction: ex,
              onClose: ev,
              initialError: ej,
              presentation: ey,
            } = e,
            ew = void 0 === ey ? "popover" : ey,
            eI = (0, n.A)(),
            eM = (0, o.useId)(),
            eS = (0, o.useId)(),
            [eA, e_] = (0, o.useState)(em),
            [eC, eE] = (0, o.useState)(em?.title ?? ek),
            [eF, eN] = (0, o.useState)(em?.folderId ?? null),
            [eT, eD] = (0, o.useState)(null),
            [eB, ez] = (0, o.useState)(!1),
            [eP, eR] = (0, o.useState)(void 0 !== ej && ej ? "storage-unavailable" : null)
          if (
            eb[0] !== eh ||
            eb[1] !== ep ||
            eb[2] !== eT ||
            eb[3] !== eF ||
            eb[4] !== eS ||
            eb[5] !== eg ||
            eb[6] !== eM ||
            eb[7] !== ex ||
            eb[8] !== ev ||
            eb[9] !== eB ||
            eb[10] !== ew ||
            eb[11] !== eA ||
            eb[12] !== eC ||
            eb[13] !== ef
          ) {
            let e, t, o, n, d, u, f
            ;(eb[36] !== eF ? ((e = (e) => e.id === eF), (eb[36] = eF), (eb[37] = e)) : (e = eb[37]),
              (w = eg.find(e)),
              (j = eA?.editable ?? !0),
              (p = null == eF ? ep : (w?.childrenEditable ?? !0)),
              (y = w?.folderId == null ? ep : (eg.find((e) => e.id === w.folderId)?.childrenEditable ?? !1)),
              eb[38] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = async function (e) {
                    ;(ez(!0), eR(null))
                    let l = !1
                    try {
                      let r = await e()
                      ;((l = r.ok), r.ok || eR(r.reason))
                    } catch {
                      eR("storage-unavailable")
                    }
                    return (ez(!1), l)
                  }),
                  (eb[38] = t))
                : (t = eb[38]),
              (m = t))
            let h = async function () {
              eB ||
                null != eT ||
                (j
                  ? eh &&
                    p &&
                    (await m(async () => {
                      let e = eA
                      if (null == e) {
                        let l = await ex({ type: "save", url: ef, title: eC, folderId: eF ?? void 0 })
                        if (!l.ok) return l
                        if (l.value?.kind !== "bookmark") return { ok: !1, reason: "storage-unavailable" }
                        e_((e = l.value))
                      }
                      return ex({ type: "update", id: e.id, title: eC, folderId: eF })
                    })) &&
                    ev()
                  : ev())
            }
            ;((_ = "flex flex-col gap-3 p-2 text-sm select-none"),
              eb[39] !== h
                ? ((C = (e) => {
                    ;(e.preventDefault(), h())
                  }),
                  (eb[39] = h),
                  (eb[40] = C))
                : (C = eb[40]),
              eb[41] !== ew
                ? ((E =
                    "popover" === ew
                      ? (0, a.jsx)(c.eO, {
                          children: (0, a.jsx)(s.A, {
                            id: "browser.bookmarks.editor.title",
                            defaultMessage: "Bookmark",
                          }),
                        })
                      : null),
                  (eb[41] = ew),
                  (eb[42] = E))
                : (E = eb[42]),
              eb[43] === Symbol.for("react.memo_cache_sentinel")
                ? ((o = (0, a.jsx)(s.A, { id: "browser.bookmarks.editor.name", defaultMessage: "Name" })), (eb[43] = o))
                : (o = eb[43]),
              eb[44] !== eM
                ? ((n = (0, a.jsx)("label", { className: "text-xs text-secondary", htmlFor: eM, children: o })),
                  (eb[44] = eM),
                  (eb[45] = n))
                : (n = eb[45]))
            let v = eB || !eh || !j
            ;(eb[46] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (e) => eE(e.target.value)), (eb[46] = d))
              : (d = eb[46]),
              eb[47] !== eM || eb[48] !== v || eb[49] !== eC
                ? ((u = (0, a.jsx)(b.pd, {
                    id: eM,
                    variant: "outlined",
                    autoFocus: !0,
                    required: !0,
                    value: eC,
                    disabled: v,
                    onChange: d,
                    onFocus: g,
                  })),
                  (eb[47] = eM),
                  (eb[48] = v),
                  (eb[49] = eC),
                  (eb[50] = u))
                : (u = eb[50]),
              eb[51] !== n || eb[52] !== u
                ? ((F = (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [n, u] })),
                  (eb[51] = n),
                  (eb[52] = u),
                  (eb[53] = F))
                : (F = eb[53]),
              (S = "flex flex-col gap-1"),
              eb[54] === Symbol.for("react.memo_cache_sentinel")
                ? ((f = (0, a.jsx)(s.A, { id: "browser.bookmarks.editor.folder", defaultMessage: "Folder" })),
                  (eb[54] = f))
                : (f = eb[54]),
              eb[55] !== eS
                ? ((A = (0, a.jsx)("span", { id: eS, className: "text-xs text-secondary", children: f })),
                  (eb[55] = eS),
                  (eb[56] = A))
                : (A = eb[56]),
              (r = k.OZ),
              (I = !0),
              eb[57] !== eT
                ? ((M = (e) => {
                    null != eT && e.preventDefault()
                  }),
                  (eb[57] = eT),
                  (eb[58] = M))
                : (M = eb[58]),
              (l = i.$),
              (D = "button"),
              (B = "outlineSurface"),
              (z = "formField"),
              (P = eB || !eh || !j || null != eT),
              (R = eS),
              (N = "min-w-0 flex-1 truncate text-start"),
              (T =
                (null == w ? void 0 : x(w, eg)) ??
                (null != eF
                  ? (0, a.jsx)(s.A, { id: "browser.bookmarks.folderUnavailable", defaultMessage: "Folder unavailable" })
                  : (0, a.jsx)(s.A, { id: "browser.bookmarks.all", defaultMessage: "All bookmarks" }))),
              (eb[0] = eh),
              (eb[1] = ep),
              (eb[2] = eT),
              (eb[3] = eF),
              (eb[4] = eS),
              (eb[5] = eg),
              (eb[6] = eM),
              (eb[7] = ex),
              (eb[8] = ev),
              (eb[9] = eB),
              (eb[10] = ew),
              (eb[11] = eA),
              (eb[12] = eC),
              (eb[13] = ef),
              (eb[14] = l),
              (eb[15] = r),
              (eb[16] = m),
              (eb[17] = p),
              (eb[18] = j),
              (eb[19] = y),
              (eb[20] = w),
              (eb[21] = I),
              (eb[22] = M),
              (eb[23] = S),
              (eb[24] = A),
              (eb[25] = _),
              (eb[26] = C),
              (eb[27] = E),
              (eb[28] = F),
              (eb[29] = N),
              (eb[30] = T),
              (eb[31] = D),
              (eb[32] = B),
              (eb[33] = z),
              (eb[34] = P),
              (eb[35] = R))
          } else
            ((l = eb[14]),
              (r = eb[15]),
              (m = eb[16]),
              (p = eb[17]),
              (j = eb[18]),
              (y = eb[19]),
              (w = eb[20]),
              (I = eb[21]),
              (M = eb[22]),
              (S = eb[23]),
              (A = eb[24]),
              (_ = eb[25]),
              (C = eb[26]),
              (E = eb[27]),
              (F = eb[28]),
              (N = eb[29]),
              (T = eb[30]),
              (D = eb[31]),
              (B = eb[32]),
              (z = eb[33]),
              (P = eb[34]),
              (R = eb[35]))
          ;(eb[59] !== N || eb[60] !== T
            ? ((O = (0, a.jsx)("span", { className: N, children: T })), (eb[59] = N), (eb[60] = T), (eb[61] = O))
            : (O = eb[61]),
            eb[62] === Symbol.for("react.memo_cache_sentinel")
              ? ((U = (0, a.jsx)(u.Aq_, {})), (eb[62] = U))
              : (U = eb[62]),
            eb[63] !== l || eb[64] !== O || eb[65] !== D || eb[66] !== B || eb[67] !== z || eb[68] !== P || eb[69] !== R
              ? ((W = (0, a.jsxs)(l, {
                  type: D,
                  color: B,
                  size: z,
                  disabled: P,
                  "aria-labelledby": R,
                  children: [O, U],
                })),
                (eb[63] = l),
                (eb[64] = O),
                (eb[65] = D),
                (eb[66] = B),
                (eb[67] = z),
                (eb[68] = P),
                (eb[69] = R),
                (eb[70] = W))
              : (W = eb[70]))
          let eO = eF ?? ""
          eb[71] === Symbol.for("react.memo_cache_sentinel") ? ((Y = (e) => eN(e || null)), (eb[71] = Y)) : (Y = eb[71])
          let eU = !ep
          ;(eb[72] === Symbol.for("react.memo_cache_sentinel")
            ? ((K = (0, a.jsx)(s.A, { id: "browser.bookmarks.all", defaultMessage: "All bookmarks" })), (eb[72] = K))
            : (K = eb[72]),
            eb[73] !== eU
              ? ((L = (0, a.jsx)(d.ms.RadioItem, { value: "", disabled: eU, children: K })),
                (eb[73] = eU),
                (eb[74] = L))
              : (L = eb[74]),
            eb[75] !== eg
              ? ((H = eg.map((e) =>
                  (0, a.jsx)(d.ms.RadioItem, { value: e.id, disabled: !e.childrenEditable, children: x(e, eg) }, e.id),
                )),
                (eb[75] = eg),
                (eb[76] = H))
              : (H = eb[76]),
            eb[77] !== eO || eb[78] !== L || eb[79] !== H
              ? ((V = (0, a.jsxs)(d.ms.RadioGroup, { value: eO, onValueChange: Y, children: [L, H] })),
                (eb[77] = eO),
                (eb[78] = L),
                (eb[79] = H),
                (eb[80] = V))
              : (V = eb[80]),
            eb[81] === Symbol.for("react.memo_cache_sentinel")
              ? ((q = (0, a.jsx)(d.ms.Separator, {})), (eb[81] = q))
              : (q = eb[81]))
          let eW = eB || !eh || !ep
          return (
            eb[82] === Symbol.for("react.memo_cache_sentinel")
              ? ((G = () => eD("new")),
                ($ = (0, a.jsx)(s.A, { id: "browser.bookmarks.newFolder", defaultMessage: "New folder" })),
                (eb[82] = G),
                (eb[83] = $))
              : ((G = eb[82]), ($ = eb[83])),
            eb[84] !== eW
              ? ((X = (0, a.jsx)(d.ms.Item, { disabled: eW, onSelect: G, children: $ })), (eb[84] = eW), (eb[85] = X))
              : (X = eb[85]),
            eb[86] !== m || eb[87] !== eh || eb[88] !== ex || eb[89] !== eB || eb[90] !== y || eb[91] !== w
              ? ((Q = w?.editable
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(d.ms.Item, {
                          disabled: eB || !eh,
                          onSelect: () => eD(w),
                          children: (0, a.jsx)(s.A, {
                            id: "browser.bookmarks.renameFolder",
                            defaultMessage: "Rename folder",
                          }),
                        }),
                        (0, a.jsx)(d.ms.Item, {
                          tone: "destructive",
                          tooltipText: (0, a.jsx)(s.A, {
                            id: "browser.bookmarks.removeFolderHelp",
                            defaultMessage: "Removing a folder moves its bookmarks and subfolders to its parent folder",
                          }),
                          disabled: eB || !eh || !y,
                          onSelect: () => {
                            m(() => ex({ type: "remove-folder", id: w.id })).then((e) => {
                              e && eN(w.folderId ?? null)
                            })
                          },
                          children: (0, a.jsx)(s.A, {
                            id: "browser.bookmarks.removeFolder",
                            defaultMessage: "Remove folder",
                          }),
                        }),
                      ],
                    })
                  : null),
                (eb[86] = m),
                (eb[87] = eh),
                (eb[88] = ex),
                (eb[89] = eB),
                (eb[90] = y),
                (eb[91] = w),
                (eb[92] = Q))
              : (Q = eb[92]),
            eb[93] !== r || eb[94] !== I || eb[95] !== M || eb[96] !== W || eb[97] !== V || eb[98] !== X || eb[99] !== Q
              ? ((Z = (0, a.jsxs)(r, {
                  matchTriggerWidth: I,
                  onCloseAutoFocus: M,
                  triggerButton: W,
                  children: [V, q, X, Q],
                })),
                (eb[93] = r),
                (eb[94] = I),
                (eb[95] = M),
                (eb[96] = W),
                (eb[97] = V),
                (eb[98] = X),
                (eb[99] = Q),
                (eb[100] = Z))
              : (Z = eb[100]),
            eb[101] !== S || eb[102] !== A || eb[103] !== Z
              ? ((J = (0, a.jsxs)("div", { className: S, children: [A, Z] })),
                (eb[101] = S),
                (eb[102] = A),
                (eb[103] = Z),
                (eb[104] = J))
              : (J = eb[104]),
            eb[105] !== eh || eb[106] !== ep || eb[107] !== eT || eb[108] !== ex
              ? ((ee =
                  null != eT
                    ? (0, a.jsx)(
                        h,
                        {
                          folder: "new" === eT ? null : eT,
                          available: eh,
                          defaultFolderChildrenEditable: ep,
                          onAction: ex,
                          onCancel: () => eD(null),
                          onSaved: (e) => {
                            ;(eN(e.id), eD(null))
                          },
                        },
                        "new" === eT ? "new" : eT.id,
                      )
                    : null),
                (eb[105] = eh),
                (eb[106] = ep),
                (eb[107] = eT),
                (eb[108] = ex),
                (eb[109] = ee))
              : (ee = eb[109]),
            eb[110] !== j
              ? ((el = j
                  ? null
                  : (0, a.jsx)("p", {
                      className: "text-xs text-secondary",
                      children: (0, a.jsx)(s.A, {
                        id: "browser.bookmarks.readOnly",
                        defaultMessage: "This bookmark cannot be edited",
                      }),
                    })),
                (eb[110] = j),
                (eb[111] = el))
              : (el = eb[111]),
            eb[112] !== eh || eb[113] !== eP
              ? ((er = eh && null == eP ? null : (0, a.jsx)(v, { reason: eh ? eP : "storage-unavailable" })),
                (eb[112] = eh),
                (eb[113] = eP),
                (eb[114] = er))
              : (er = eb[114]),
            eb[115] !== m ||
            eb[116] !== eh ||
            eb[117] !== j ||
            eb[118] !== eT ||
            eb[119] !== ex ||
            eb[120] !== ev ||
            eb[121] !== eB ||
            eb[122] !== eA
              ? ((ea =
                  null != eA && j
                    ? (0, a.jsx)(i.$, {
                        type: "button",
                        color: "ghostDanger",
                        size: "dialog",
                        disabled: eB || !eh || null != eT,
                        onClick: () => {
                          m(() => ex({ type: "remove", id: eA.id })).then((e) => {
                            e && ev()
                          })
                        },
                        children: (0, a.jsx)(s.A, { id: "browser.bookmarks.remove", defaultMessage: "Remove" }),
                      })
                    : (0, a.jsx)("span", {})),
                (eb[115] = m),
                (eb[116] = eh),
                (eb[117] = j),
                (eb[118] = eT),
                (eb[119] = ex),
                (eb[120] = ev),
                (eb[121] = eB),
                (eb[122] = eA),
                (eb[123] = ea))
              : (ea = eb[123]),
            eb[124] !== j || eb[125] !== eT || eb[126] !== eI || eb[127] !== ev || eb[128] !== eB
              ? ((et = j
                  ? (0, a.jsx)(f.DW, {
                      type: "button",
                      disabled: eB || null != eT,
                      onClick: ev,
                      "aria-label": eI.formatMessage({
                        id: "browser.bookmarks.cancelChanges",
                        defaultMessage: "Cancel bookmark changes",
                      }),
                      children: (0, a.jsx)(s.A, { id: "browser.bookmarks.cancel", defaultMessage: "Cancel" }),
                    })
                  : null),
                (eb[124] = j),
                (eb[125] = eT),
                (eb[126] = eI),
                (eb[127] = ev),
                (eb[128] = eB),
                (eb[129] = et))
              : (et = eb[129]),
            eb[130] !== eh || eb[131] !== p || eb[132] !== j || eb[133] !== eT || eb[134] !== eB || eb[135] !== eC
              ? ((eo = eB || (j && (!eh || !p || "" === eC.trim())) || null != eT),
                (eb[130] = eh),
                (eb[131] = p),
                (eb[132] = j),
                (eb[133] = eT),
                (eb[134] = eB),
                (eb[135] = eC),
                (eb[136] = eo))
              : (eo = eb[136]),
            eb[137] !== j || eb[138] !== eI
              ? ((en = j
                  ? eI.formatMessage({ id: "browser.bookmarks.saveChanges", defaultMessage: "Save bookmark changes" })
                  : eI.formatMessage({ id: "browser.bookmarks.closeEditor", defaultMessage: "Close bookmark editor" })),
                (eb[137] = j),
                (eb[138] = eI),
                (eb[139] = en))
              : (en = eb[139]),
            eb[140] !== j
              ? ((es = j
                  ? (0, a.jsx)(s.A, { id: "browser.bookmarks.save", defaultMessage: "Save" })
                  : (0, a.jsx)(s.A, { id: "browser.bookmarks.close", defaultMessage: "Close" })),
                (eb[140] = j),
                (eb[141] = es))
              : (es = eb[141]),
            eb[142] !== eo || eb[143] !== en || eb[144] !== es
              ? ((ei = (0, a.jsx)(f.DW, {
                  type: "submit",
                  variant: "primary",
                  disabled: eo,
                  "aria-label": en,
                  children: es,
                })),
                (eb[142] = eo),
                (eb[143] = en),
                (eb[144] = es),
                (eb[145] = ei))
              : (ei = eb[145]),
            eb[146] !== et || eb[147] !== ei
              ? ((ed = (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [et, ei] })),
                (eb[146] = et),
                (eb[147] = ei),
                (eb[148] = ed))
              : (ed = eb[148]),
            eb[149] !== ea || eb[150] !== ed
              ? ((eu = (0, a.jsxs)("div", {
                  className: "flex items-center justify-between gap-2",
                  children: [ea, ed],
                })),
                (eb[149] = ea),
                (eb[150] = ed),
                (eb[151] = eu))
              : (eu = eb[151]),
            eb[152] !== _ ||
            eb[153] !== C ||
            eb[154] !== E ||
            eb[155] !== F ||
            eb[156] !== J ||
            eb[157] !== ee ||
            eb[158] !== el ||
            eb[159] !== er ||
            eb[160] !== eu
              ? ((ec = (0, a.jsxs)("form", { className: _, onSubmit: C, children: [E, F, J, ee, el, er, eu] })),
                (eb[152] = _),
                (eb[153] = C),
                (eb[154] = E),
                (eb[155] = F),
                (eb[156] = J),
                (eb[157] = ee),
                (eb[158] = el),
                (eb[159] = er),
                (eb[160] = eu),
                (eb[161] = ec))
              : (ec = eb[161]),
            ec
          )
        },
      },
    )
  },
  wKYj(e, l, r) {
    r.d(l, { BrowserBookmarkManager: () => ex })
    var a = r("ABep"),
      t = r("QosV"),
      o = r("qmMi"),
      n = r("pWYp"),
      s = r("zd8w"),
      i = r("Wf1j"),
      d = r("oyxz"),
      u = r("Ywss"),
      c = r("TTaH"),
      b = r("Sm6l"),
      m = r("FkTw"),
      f = r("Ot7V"),
      k = r("bVeK"),
      g = r("f38C"),
      h = r("okCa"),
      p = r("nzx4"),
      x = r("UtcH"),
      v = r("tSEg"),
      j = r("GPpd"),
      y = r("jxU8"),
      w = r("Oo0n"),
      I = r("odCE"),
      M = r("AWNZ"),
      S = r("ZEx5"),
      A = r("Nb8b"),
      _ = r("gPgj"),
      C = r("lGpa"),
      E = r("HYVK"),
      F = r("slpy"),
      N = r("on57"),
      T = r("ASxG"),
      D = r("tAMX"),
      B = r("so0T"),
      z = r("Fyf8"),
      P = r("T1PX"),
      R = r("TL6G"),
      O = r("OWtl"),
      U = r("bIvi"),
      W = r("Y3Vu"),
      Y = r("NJr7"),
      K = r("GaA7")
    let L = (0, o.vU)(O.u, (e) => ({
      queryKey: ["bookmark-manager-favicon", e],
      queryFn: async () =>
        (await K.appServices?.browsingHistory?.getFavicon(e, { size: 16, allowNetwork: !1 })) ?? null,
      staleTime: ({ state: e }) => (null == e.data ? 0 : 1 / 0),
      refetchOnWindowFocus: !1,
      retry: !1,
    }))
    function H(e) {
      let l,
        r,
        n = (0, t.c)(4),
        { url: s } = e,
        { data: i } = (0, o._U)(L, s)
      return (
        n[0] !== i ? ((l = i?.startsWith("data:image/") ? i : null), (n[0] = i), (n[1] = l)) : (l = n[1]),
        n[2] !== l
          ? ((r = (0, a.jsx)(Y.d, { faviconUrl: l, isLoading: !1, isWaitingForResponse: !1 })), (n[2] = l), (n[3] = r))
          : (r = n[3]),
        r
      )
    }
    let V = T.Ikc({
        kind: T.k5n(["item", "container"]),
        ownerId: T.YjP(),
        nodeId: T.YjP(),
        parentId: T.YjP().optional(),
        nextId: T.YjP().optional(),
        folder: T.zMY(),
        horizontal: T.zMY(),
        reorder: T.zMY(),
      }),
      q = (0, o.z8)("BookmarkDragScope", { parent: O.u, key: ({ surfaceId: e }) => e }),
      G = (0, o.vP)(q, () => null),
      $ = (0, o.vP)(q, () => null),
      X = (0, o.vP)(q, !1),
      Q = (0, o.vP)(q, () => "return"),
      Z = (0, o.un)(q, ({ scope: e }) => (0, n.xF)(e.value.tree)),
      J = (0, o.un)(q, ({ get: e }) => {
        let l = new Map()
        for (let r of e(Z).values()) r.children?.forEach((e, r, a) => l.set(e.id, a[r + 1]?.id))
        return l
      }),
      ee = (0, o.un)(q, ({ get: e, scope: l }) => {
        let r = e(G)
        return { nodes: e(Z), nextSiblingIds: e(J), activeId: r, disabled: !l.value.available || e(X) }
      }),
      el = (0, o.un)(q, ({ get: e, scope: l }) => {
        let r = e(G),
          a = e($)
        if (null == r || null == a) return null
        let t = (0, n.wH)(l.value.tree, r, a)
        return t.ok && null != t.value ? a : null
      }),
      er = (0, o.i1)(q, (e, { get: l }) => {
        let r = l(el)
        return r?.ownerId === e ? r.placement : null
      }),
      ea = (0, o.i1)(q, (e, { get: l }) => l($)?.ownerId === e)
    function et(e) {
      let l,
        r,
        n,
        i,
        d,
        u,
        c = (0, t.c)(13)
      c[0] !== e
        ? (({ tree: n, available: l, ...r } = e), (c[0] = e), (c[1] = l), (c[2] = r), (c[3] = n))
        : ((l = c[1]), (r = c[2]), (n = c[3]))
      let b = (0, s.useId)()
      return (
        c[4] !== l || c[5] !== b || c[6] !== n
          ? ((i = { surfaceId: b, tree: n, available: l }), (c[4] = l), (c[5] = b), (c[6] = n), (c[7] = i))
          : (i = c[7]),
        c[8] !== r ? ((d = (0, a.jsx)(ei, { ...r })), (c[8] = r), (c[9] = d)) : (d = c[9]),
        c[10] !== i || c[11] !== d
          ? ((u = (0, a.jsx)(o.Ui, { scope: q, value: i, children: d })), (c[10] = i), (c[11] = d), (c[12] = u))
          : (u = c[12]),
        u
      )
    }
    function eo(e) {
      let l,
        r = (0, t.c)(3),
        n = (0, o.Ul)(G),
        s = e.disabled || null != n
      return (
        r[0] !== e || r[1] !== s
          ? ((l = (0, a.jsx)(F.m, { ...e, disabled: s })), (r[0] = e), (r[1] = s), (r[2] = l))
          : (l = r[2]),
        l
      )
    }
    function en(e) {
      let l,
        r = (0, t.c)(2)
      return (
        r[0] !== e
          ? ((l = !1 === e.enabled ? (0, a.jsx)(a.Fragment, { children: e.children }) : (0, a.jsx)(ec, { ...e })),
            (r[0] = e),
            (r[1] = l))
          : (l = r[1]),
        l
      )
    }
    function es(e) {
      let l,
        r = (0, t.c)(2)
      return (
        r[0] !== e
          ? ((l = !1 === e.enabled ? (0, a.jsx)(a.Fragment, { children: e.children }) : (0, a.jsx)(eu, { ...e })),
            (r[0] = e),
            (r[1] = l))
          : (l = r[1]),
        l
      )
    }
    function ei(e) {
      let l,
        r,
        d,
        u,
        c,
        b,
        m,
        f,
        g,
        h,
        p,
        x,
        v,
        j,
        y,
        w,
        I,
        M,
        S,
        A,
        E,
        F = (0, t.c)(60),
        { onAction: N, onMoveError: T, children: z } = e,
        O = (0, o.gh)(q),
        Y = (0, i.A)(),
        K = (0, o.Ul)(ee),
        L = (0, P.I)(),
        V = (0, o.Ul)(Q)
      F[0] !== O ? ((l = () => "fade" === O.get(Q)), (F[0] = O), (F[1] = l)) : (l = F[1])
      let Z = (0, U.K)(l)
      F[2] !== L || F[3] !== Z ? ((r = (0, D.R)(Z, L)), (F[2] = L), (F[3] = Z), (F[4] = r)) : (r = F[4])
      let J = r
      ;(F[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { activationConstraint: { distance: 6 } }), (F[5] = d))
        : (d = F[5]),
        F[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = { activationConstraint: { delay: 250, tolerance: 5 } }), (F[6] = u))
          : (u = F[6]))
      let el = (0, C.FR)((0, C.MS)(ef, d), (0, C.MS)(C.IG, u))
      F[7] !== K.activeId || F[8] !== K.nodes
        ? ((c = null == K.activeId ? void 0 : K.nodes.get(K.activeId)),
          (F[7] = K.activeId),
          (F[8] = K.nodes),
          (F[9] = c))
        : (c = F[9])
      let er = c
      F[10] === Symbol.for("react.memo_cache_sentinel") ? ((b = (0, a.jsx)(k.IYP, {})), (F[10] = b)) : (b = F[10])
      let ea = b
      if (er?.children != null) {
        let e
        ;(F[11] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(k.efV, {})), (F[11] = e)) : (e = F[11]),
          (ea = e))
      } else if (er?.url != null) {
        let e
        ;(F[12] !== er.url ? ((e = (0, a.jsx)(H, { url: er.url })), (F[12] = er.url), (F[13] = e)) : (e = F[13]),
          (ea = e))
      }
      F[14] !== O
        ? ((m = () => {
            ;(O.set(G, null), O.set($, null))
          }),
          (F[14] = O),
          (F[15] = m))
        : (m = F[15])
      let et = m
      ;(F[16] !== K.activeId || F[17] !== O
        ? ((f = () => {
            if (null != K.activeId)
              return R.O1.subscribe("electron-window-focus-changed", (e) => {
                let { isFocused: l, isVisible: r } = e
                ;(l && !1 !== r) || (O.set(Q, "none"), O.set(G, null), O.set($, null))
              })
          }),
          (g = [K.activeId, O]),
          (F[16] = K.activeId),
          (F[17] = O),
          (F[18] = f),
          (F[19] = g))
        : ((f = F[18]), (g = F[19])),
        (0, s.useEffect)(f, g),
        F[20] !== O
          ? ((h = (e) => {
              if (null == O.get(G)) return
              let l = eb(e.collisions)
              O.set($, (e) =>
                e?.ownerId === l?.ownerId &&
                e?.placement === l?.placement &&
                e?.parentId === l?.parentId &&
                e?.beforeId === l?.beforeId
                  ? e
                  : l,
              )
            }),
            (F[20] = O),
            (F[21] = h))
          : (h = F[21]))
      let eo = h
      F[22] !== N || F[23] !== T || F[24] !== O
        ? ((p = (e, l) => {
            ;(O.set(X, !0),
              Promise.resolve()
                .then(() => N({ type: "move", id: e, parentId: l.parentId, beforeId: l.beforeId }))
                .then((e) => {
                  e.ok || T()
                })
                .catch(T)
                .finally(() => O.set(X, !1)))
          }),
          (F[22] = N),
          (F[23] = T),
          (F[24] = O),
          (F[25] = p))
        : (p = F[25])
      let en = p,
        es = null != K.activeId
      ;(F[26] !== O ? ((x = () => null == O.get(G)), (F[26] = O), (F[27] = x)) : (x = F[27]),
        F[28] !== Y ? ((v = () => Y.formatMessage(_.D.dragStarted)), (F[28] = Y), (F[29] = v)) : (v = F[29]),
        F[30] !== Y
          ? ((j = () => Y.formatMessage(_.D.dragEnded)),
            (y = () => Y.formatMessage(_.D.dragCancelled)),
            (F[30] = Y),
            (F[31] = j),
            (F[32] = y))
          : ((j = F[31]), (y = F[32])),
        F[33] !== v || F[34] !== j || F[35] !== y
          ? ((w = { announcements: { onDragStart: v, onDragOver: ed, onDragEnd: j, onDragCancel: y } }),
            (F[33] = v),
            (F[34] = j),
            (F[35] = y),
            (F[36] = w))
          : (w = F[36]),
        F[37] !== O
          ? ((I = (e) => {
              var l
              let r,
                { active: a } = e
              ;(O.set(Q, "return"), O.set(G, ((l = a), "string" == typeof (r = l.data.current?.bookmarkId) ? r : null)))
            }),
            (F[37] = O),
            (F[38] = I))
          : (I = F[38]),
        F[39] !== en || F[40] !== et || F[41] !== O
          ? ((M = (e) => {
              let { collisions: l } = e,
                r = O.get(G),
                a = eb(l)
              if ((et(), !O.value.available || O.get(X) || null == r || null == a)) return
              let t = (0, n.wH)(O.value.tree, r, a)
              t.ok && null != t.value && (O.set(Q, "fade"), en(r, a))
            }),
            (F[39] = en),
            (F[40] = et),
            (F[41] = O),
            (F[42] = M))
          : (M = F[42]))
      let ei = "none" === V ? null : J
      return (
        F[43] !== er || F[44] !== ea
          ? ((S =
              null == er
                ? null
                : (0, a.jsxs)(W.DW, {
                    density: "compactToolbar",
                    children: [
                      (0, a.jsx)("span", {
                        className: "icon-xs relative flex shrink-0 items-center justify-center overflow-visible",
                        children: ea,
                      }),
                      (0, a.jsx)("span", { className: "truncate", children: er.title || er.url }),
                    ],
                  })),
            (F[43] = er),
            (F[44] = ea),
            (F[45] = S))
          : (S = F[45]),
        F[46] !== ei || F[47] !== S
          ? ((A = (0, a.jsx)(B.y, { dropAnimation: ei, children: S })), (F[46] = ei), (F[47] = S), (F[48] = A))
          : (A = F[48]),
        F[49] !== z ||
        F[50] !== et ||
        F[51] !== el ||
        F[52] !== es ||
        F[53] !== x ||
        F[54] !== w ||
        F[55] !== I ||
        F[56] !== M ||
        F[57] !== A ||
        F[58] !== eo
          ? ((E = (0, a.jsxs)(C.Mp, {
              sensors: el,
              modifiers: ek,
              autoScroll: es,
              collisionDetection: em,
              cancelDrop: x,
              accessibility: w,
              onDragStart: I,
              onDragMove: eo,
              onDragOver: eo,
              onDragCancel: et,
              onDragEnd: M,
              children: [z, A],
            })),
            (F[49] = z),
            (F[50] = et),
            (F[51] = el),
            (F[52] = es),
            (F[53] = x),
            (F[54] = w),
            (F[55] = I),
            (F[56] = M),
            (F[57] = A),
            (F[58] = eo),
            (F[59] = E))
          : (E = F[59]),
        E
      )
    }
    function ed() {}
    function eu(e) {
      let l,
        r,
        n,
        i,
        d,
        u,
        c = (0, t.c)(19),
        { parentId: b, children: m, disabled: f, onOpen: k, as: g } = e,
        h = void 0 === g ? "div" : g,
        p = (0, o.Ul)(ee),
        x = (0, s.useId)()
      c[0] !== x || c[1] !== b
        ? ((l = { kind: "container", nodeId: b, ownerId: x, folder: !0, horizontal: !1, reorder: !1 }),
          (c[0] = x),
          (c[1] = b),
          (c[2] = l))
        : (l = c[2])
      let v = l,
        j = (void 0 !== f && f) || p.disabled || null == p.activeId
      c[3] !== v || c[4] !== x || c[5] !== j
        ? ((r = { id: x, data: v, disabled: j }), (c[3] = v), (c[4] = x), (c[5] = j), (c[6] = r))
        : (r = c[6])
      let { setNodeRef: y } = (0, C.zM)(r),
        w = (0, o._U)(ea, x),
        I = (0, o._U)(er, x)
      ;(c[7] !== p.activeId || c[8] !== w || c[9] !== k
        ? ((n = () => {
            if (null == p.activeId || !w || null == k) return
            let e = setTimeout(k, 200)
            return () => clearTimeout(e)
          }),
          (i = [p.activeId, w, k]),
          (c[7] = p.activeId),
          (c[8] = w),
          (c[9] = k),
          (c[10] = n),
          (c[11] = i))
        : ((n = c[10]), (i = c[11])),
        (0, s.useEffect)(n, i))
      let M = null != I && "bg-text-accent/10 ring-2 ring-inset ring-ring"
      return (
        c[12] !== M ? ((d = (0, N.A)("relative block", M)), (c[12] = M), (c[13] = d)) : (d = c[13]),
        c[14] !== h || c[15] !== m || c[16] !== y || c[17] !== d
          ? ((u = (0, a.jsx)(h, { ref: y, className: d, children: m })),
            (c[14] = h),
            (c[15] = m),
            (c[16] = y),
            (c[17] = d),
            (c[18] = u))
          : (u = c[18]),
        u
      )
    }
    function ec(e) {
      let l,
        r,
        n,
        i,
        d,
        u,
        c,
        b,
        m,
        f,
        k,
        g,
        h = (0, t.c)(55),
        { id: p, horizontal: x, disabled: v, reorder: j, variant: y, children: w } = e,
        I = void 0 !== x && x,
        M = void 0 !== v && v,
        S = void 0 === j || j,
        A = (0, o.Ul)(ee),
        _ = (0, s.useId)()
      h[0] !== A.nodes || h[1] !== p
        ? ((l = A.nodes.get(p)),
          (r = l?.parentId == null ? void 0 : A.nodes.get(l.parentId)),
          (h[0] = A.nodes),
          (h[1] = p),
          (h[2] = l),
          (h[3] = r))
        : ((l = h[2]), (r = h[3]))
      let E = r
      h[4] !== p ? ((n = { bookmarkId: p }), (h[4] = p), (h[5] = n)) : (n = h[5])
      let F = M || A.disabled || !l?.editable || !E?.childrenEditable
      h[6] !== _ || h[7] !== n || h[8] !== F
        ? ((i = { id: _, data: n, disabled: F }), (h[6] = _), (h[7] = n), (h[8] = F), (h[9] = i))
        : (i = h[9])
      let { setNodeRef: T, listeners: D, isDragging: B } = (0, C.PM)(i),
        P = l?.parentId
      h[10] !== A.nextSiblingIds || h[11] !== p
        ? ((d = A.nextSiblingIds.get(p)), (h[10] = A.nextSiblingIds), (h[11] = p), (h[12] = d))
        : (d = h[12])
      let R = l?.children != null
      h[13] !== I || h[14] !== p || h[15] !== _ || h[16] !== S || h[17] !== R || h[18] !== P || h[19] !== d
        ? ((u = { kind: "item", nodeId: p, parentId: P, nextId: d, ownerId: _, folder: R, horizontal: I, reorder: S }),
          (h[13] = I),
          (h[14] = p),
          (h[15] = _),
          (h[16] = S),
          (h[17] = R),
          (h[18] = P),
          (h[19] = d),
          (h[20] = u))
        : (u = h[20])
      let O = u,
        U = M || A.disabled || null == A.activeId
      h[21] !== O || h[22] !== _ || h[23] !== U
        ? ((c = { id: _, data: O, disabled: U }), (h[21] = O), (h[22] = _), (h[23] = U), (h[24] = c))
        : (c = h[24])
      let { setNodeRef: W } = (0, C.zM)(c),
        Y = (0, o._U)(er, _),
        K = null
      if ("inside" === Y) {
        if ("manager" !== y) {
          let e,
            l,
            r = I && "rounded-full"
          ;(h[25] !== r
            ? ((e = (0, N.A)("pointer-events-none absolute inset-0 bg-text-accent/10 ring-2 ring-inset ring-ring", r)),
              (h[25] = r),
              (h[26] = e))
            : (e = h[26]),
            h[27] !== e
              ? ((l = (0, a.jsx)("span", { "aria-hidden": !0, className: e })), (h[27] = e), (h[28] = l))
              : (l = h[28]),
            (K = l))
        }
      } else if (null != Y) {
        let e,
          l,
          r,
          t = "before" === Y ? "top-0" : "bottom-0"
        I && (t = "before" === Y ? "left-0" : "right-0")
        let o = I ? "inset-y-0" : "inset-x-0"
        h[29] !== t || h[30] !== o
          ? ((e = (0, N.A)("pointer-events-none absolute", o, t)), (h[29] = t), (h[30] = o), (h[31] = e))
          : (e = h[31])
        let n = "manager" !== y,
          s = I ? "vertical" : "horizontal"
        ;(h[32] !== n || h[33] !== s
          ? ((l = (0, a.jsx)(z.M, { startMarker: n, orientation: s })), (h[32] = n), (h[33] = s), (h[34] = l))
          : (l = h[34]),
          h[35] !== e || h[36] !== l
            ? ((r = (0, a.jsx)("span", { className: e, children: l })), (h[35] = e), (h[36] = l), (h[37] = r))
            : (r = h[37]),
          (K = r))
      }
      h[38] !== T || h[39] !== W
        ? ((b = (e) => {
            ;(T(e), W(e))
          }),
          (h[38] = T),
          (h[39] = W),
          (h[40] = b))
        : (b = h[40])
      let L = "manager" === y && "-mx-3 px-3",
        H = "manager" === y && "inside" === Y && "sidebar-item bg-secondary-ghost-hover",
        V = B && A.activeId === p && ("manager" === y ? "opacity-20" : "opacity-0")
      return (
        h[41] !== L || h[42] !== H || h[43] !== V
          ? ((m = (0, N.A)("relative block", L, H, V)), (h[41] = L), (h[42] = H), (h[43] = V), (h[44] = m))
          : (m = h[44]),
        h[45] !== D
          ? ((f = (e) => {
              e.target instanceof Element &&
                e.currentTarget.contains(e.target) &&
                null == e.target.closest("[data-bookmark-drag-block]") &&
                D?.onPointerDown?.(e)
            }),
            (k = (e) => {
              e.target instanceof Element &&
                e.currentTarget.contains(e.target) &&
                null == e.target.closest("[data-bookmark-drag-block]") &&
                D?.onTouchStart?.(e)
            }),
            (h[45] = D),
            (h[46] = f),
            (h[47] = k))
          : ((f = h[46]), (k = h[47])),
        h[48] !== w || h[49] !== K || h[50] !== b || h[51] !== m || h[52] !== f || h[53] !== k
          ? ((g = (0, a.jsxs)("div", {
              ref: b,
              className: m,
              onPointerDownCapture: f,
              onTouchStartCapture: k,
              children: [w, K],
            })),
            (h[48] = w),
            (h[49] = K),
            (h[50] = b),
            (h[51] = m),
            (h[52] = f),
            (h[53] = k),
            (h[54] = g))
          : (g = h[54]),
        g
      )
    }
    function eb(e) {
      let l,
        r = e?.[0]?.data?.pointerCoordinates
      if (null == r) return null
      let a = document.elementFromPoint(r.x, r.y),
        t = (e ?? []).filter((e) => {
          let l = e.data?.droppableContainer.node.current
          return l?.contains(a)
        }),
        o = t.find((e) => e.data?.droppableContainer.data.current?.kind === "item") ?? t[0]
      if (null == o) return null
      let n = V.safeParse(o.data?.droppableContainer.data.current),
        s = o.data?.droppableContainer.rect.current
      if (!n.success || null == s) return null
      let i = n.data
      if (!i.reorder && !i.folder) return null
      let d = i.horizontal ? (r.x - s.left) / s.width : (r.y - s.top) / s.height,
        u = "inside"
      "item" === i.kind &&
        i.reorder &&
        (i.folder ? (d < 0.25 ? (u = "before") : d > 0.75 && (u = "after")) : (u = d < 0.5 ? "before" : "after"))
      let c = "inside" === u ? i.nodeId : i.parentId
      return null == c
        ? null
        : ("before" === u ? (l = i.nodeId) : "after" === u && (l = i.nextId),
          { ownerId: i.ownerId, placement: u, parentId: c, beforeId: l })
    }
    let em = (e) => {
      let l = (0, C.TT)(e)
      for (let r of e.droppableContainers)
        r.data.current?.kind !== "container" ||
          l.some((e) => e.id === r.id) ||
          l.push({ id: r.id, data: { droppableContainer: r } })
      return l.map((l) => ({ ...l, data: { ...l.data, pointerCoordinates: e.pointerCoordinates } }))
    }
    class ef extends C.AN {
      static activators = C.AN.activators.map((e) => ({
        ...e,
        handler: (l, r) => "touch" !== l.nativeEvent.pointerType && e.handler(l, r),
      }))
    }
    let ek = [
      ({ activatorEvent: e, activeNodeRect: l, transform: r }) => {
        let a = null == e ? null : (0, E.e_)(e)
        return null == a || null == l ? r : { ...r, x: r.x + a.x - l.left, y: r.y + a.y - l.top }
      },
    ]
    var eg = r("pKMN"),
      eh = r("RFUB")
    function ep(e, l) {
      let r = [],
        a = e.get(l)
      for (; null != a;) (r.push(a), (a = null == a.parentId ? void 0 : e.get(a.parentId)))
      return r.reverse()
    }
    function ex() {
      let e,
        l,
        r,
        s = (0, t.c)(10),
        i = (0, o.gh)(v.GD),
        d = (0, o.Ul)(eh.p8),
        b = (0, u.Zp)()
      if ("disabled" === d.status) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.C5, { to: "/settings/browser-use", replace: !0 })), (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      s[1] !== b || s[2] !== i
        ? ((e = (e, l, r) => {
            let a = void 0 !== r && r
            if (null == (0, n.eD)(e) || "ready" !== i.get(eh.p8).status) return
            let t = (0, j.Ez)(i.get(j.IB))
            null != t &&
            (0, c.p)({
              conversationId: t.conversationId,
              url: e,
              source: "manual",
              initiator: "open_in_browser_bridge",
              newTab: a || l?.metaKey === !0 || l?.ctrlKey === !0 || l?.button === 1,
            })
              ? b(t.path)
              : null != l
                ? (0, f.PQ)({ event: l, href: e, initiator: "open_in_browser_bridge", openTarget: "in-app-browser" })
                : (0, f.E0)({
                    disposition: a ? "new-tab" : "current-tab",
                    href: e,
                    initiator: "open_in_browser_bridge",
                    openTarget: "in-app-browser",
                  })
          }),
          (s[1] = b),
          (s[2] = i),
          (s[3] = e))
        : (e = s[3])
      let m = e
      return (
        s[4] !== i ? ((l = (e) => (0, A.r)(i, e)), (s[4] = i), (s[5] = l)) : (l = s[5]),
        s[6] !== m || s[7] !== d || s[8] !== l
          ? ((r = (0, a.jsx)(ev, { state: d, onAction: l, onOpen: m })), (s[6] = m), (s[7] = d), (s[8] = l), (s[9] = r))
          : (r = s[9]),
        r
      )
    }
    function ev(e) {
      let l,
        r,
        o,
        c,
        f,
        g,
        p,
        v,
        j,
        M,
        A,
        C,
        E,
        F,
        N,
        T,
        D,
        B,
        z = (0, t.c)(33),
        { state: P, onAction: R, onOpen: O } = e,
        U = (0, i.A)(),
        [W, Y] = (0, s.useState)(!1),
        [K, L] = (0, u.ok)(),
        H = P.library
      z[0] !== H?.tree ? ((l = H?.tree ?? []), (z[0] = H?.tree), (z[1] = l)) : (l = z[1])
      let V = (0, n.xF)(l)
      ;(z[2] !== H?.bookmarks ? ((r = H?.bookmarks ?? []), (z[2] = H?.bookmarks), (z[3] = r)) : (r = z[3]),
        z[4] !== H?.folders ? ((o = H?.folders ?? []), (z[4] = H?.folders), (z[5] = o)) : (o = z[5]),
        z[6] !== r || z[7] !== o
          ? ((c = new Map([...r, ...o].map(ey))), (z[6] = r), (z[7] = o), (z[8] = c))
          : (c = z[8]))
      let q = c,
        G = K.get("q") ?? "",
        $ = K.has("folder") ? K.get("folder") || null : (H?.defaultFolderId ?? null),
        X = (0, s.useRef)(null),
        Q = (0, s.useId)()
      z[9] === Symbol.for("react.memo_cache_sentinel") ? ((f = () => X.current?.focus()), (z[9] = f)) : (f = z[9])
      let Z = f
      z[10] !== K || z[11] !== L
        ? ((g = (e) => {
            let l = new URLSearchParams(K)
            ;("" === e ? l.delete("q") : l.set("q", e), L(l, { replace: !0 }))
          }),
          (z[10] = K),
          (z[11] = L),
          (z[12] = g))
        : (g = z[12])
      let J = g,
        ee = null == H || null == $ ? [] : ep(V, $).filter(ej),
        el = ee.at(-1),
        er =
          null == H
            ? []
            : "" !== (B = G.trim().toLocaleLowerCase())
              ? H.bookmarks
                  .filter((e) => e.title.toLocaleLowerCase().includes(B) || e.url.toLocaleLowerCase().includes(B))
                  .flatMap((e) => {
                    let l = V.get(e.id)
                    return null == l ? [] : [l]
                  })
              : null == $
                ? H.tree.flatMap((e) => ("root" === e.folderType ? (e.children ?? []) : [e]))
                : (V.get($)?.children ?? []),
        ea = "" !== G.trim()
      z[13] !== U
        ? ((p = U.formatMessage({ id: "browser.bookmarks.manager.title", defaultMessage: "Bookmarks" })),
          (z[13] = U),
          (z[14] = p))
        : (p = z[14])
      let eo = p
      z[15] !== U
        ? ((v = U.formatMessage({ id: "browser.bookmarks.manager.search", defaultMessage: "Search bookmarks" })),
          (z[15] = U),
          (z[16] = v))
        : (v = z[16])
      let ei = v
      z[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, a.jsx)(d.A, { id: "browser.bookmarks.manager.allBookmarks", defaultMessage: "All bookmarks" })),
          (z[17] = j))
        : (j = z[17])
      let ed = j
      z[18] !== L
        ? ((M = (e) => {
            ;(L({ folder: e ?? "" }), X.current?.focus())
          }),
          (z[18] = L),
          (z[19] = M))
        : (M = z[19])
      let eu = M
      return (
        z[20] !== H?.tree ? ((A = H?.tree ?? []), (z[20] = H?.tree), (z[21] = A)) : (A = z[21]),
        z[22] !== R ? ((C = (e) => (Y(!1), R(e))), (z[22] = R), (z[23] = C)) : (C = z[23]),
        z[24] === Symbol.for("react.memo_cache_sentinel") ? ((E = () => Y(!0)), (z[24] = E)) : (E = z[24]),
        z[25] !== eo ? ((F = (0, a.jsx)(w.I, { current: eo })), (z[25] = eo), (z[26] = F)) : (F = z[26]),
        z[27] !== W
          ? ((N = W
              ? (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-xs text-danger",
                  children: (0, a.jsx)(d.A, { ..._.D.moveError }),
                })
              : null),
            (z[27] = W),
            (z[28] = N))
          : (N = z[28]),
        z[29] !== P.status
          ? ((T =
              "loading" === P.status
                ? (0, a.jsx)(I.j, {
                    children: (0, a.jsx)(d.A, {
                      id: "browser.bookmarks.manager.loading",
                      defaultMessage: "Loading bookmarks",
                    }),
                  })
                : null),
            (z[29] = P.status),
            (z[30] = T))
          : (T = z[30]),
        z[31] !== P.status
          ? ((D =
              "unavailable" === P.status
                ? (0, a.jsx)(S.t, {
                    children: (0, a.jsx)(m.i, {
                      icon: (0, a.jsx)(k.YXT, {}),
                      title: (0, a.jsx)(d.A, {
                        id: "browser.bookmarks.manager.unavailable",
                        defaultMessage: "Bookmarks unavailable",
                      }),
                      description: (0, a.jsx)(d.A, {
                        id: "browser.bookmarks.manager.unavailableHelp",
                        defaultMessage: "Reopen this page to try again",
                      }),
                    }),
                  })
                : null),
            (z[31] = P.status),
            (z[32] = D))
          : (D = z[32]),
        (0, a.jsx)(et, {
          tree: A,
          available: "ready" === P.status,
          onAction: C,
          onMoveError: E,
          children: (0, a.jsxs)(y.P, {
            title: eo,
            scrollResetKey: `${$ ?? "root"}:${ea}`,
            backSlot: F,
            action:
              H?.defaultFolderChildrenEditable && (null == $ || $ === H.defaultFolderId)
                ? (0, a.jsx)(eS, { library: H, onAction: R, onSaved: (e) => eu(e.id), restoreFocus: Z })
                : void 0,
            stickyControls: (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, a.jsx)(h.s, {
                  id: Q,
                  inputRef: X,
                  label: ei,
                  placeholder: ei,
                  searchQuery: G,
                  onSearchQueryChange: J,
                }),
                null != H
                  ? (0, a.jsx)(x.V, {
                      ancestors:
                        0 === ee.length
                          ? []
                          : [
                              {
                                id: "bookmarks",
                                label: (0, a.jsx)(es, {
                                  as: "span",
                                  parentId: H.tree[0]?.id ?? "",
                                  onOpen: () => eu(null),
                                  children: ed,
                                }),
                                onClick: () => eu(null),
                              },
                              ...ee
                                .slice(0, -1)
                                .map((e) => ({
                                  id: e.id,
                                  label: (0, a.jsx)(es, {
                                    as: "span",
                                    parentId: e.id,
                                    onOpen: () => eu(e.id),
                                    children: e.title,
                                  }),
                                  onClick: () => eu(e.id),
                                })),
                            ],
                      current: null == el ? ed : (0, a.jsx)(es, { as: "span", parentId: el.id, children: el.title }),
                      textSm: !0,
                    })
                  : null,
                N,
              ],
            }),
            children: [
              T,
              D,
              null != H
                ? (0, a.jsx)(S.t, {
                    children:
                      null == $ || null != el || ea
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              null != el &&
                                !el.childrenEditable &&
                                (0, a.jsx)("p", {
                                  className: "px-4 py-3 text-sm text-secondary",
                                  children: (0, a.jsx)(d.A, {
                                    id: "browser.bookmarks.manager.managed",
                                    defaultMessage: "This folder is read-only",
                                  }),
                                }),
                              0 === er.length
                                ? (0, a.jsx)(m.i, {
                                    icon: (0, a.jsx)(k.YXT, {}),
                                    title: ea
                                      ? (0, a.jsx)(d.A, {
                                          id: "browser.bookmarks.manager.noResults",
                                          defaultMessage: "No matching bookmarks",
                                        })
                                      : (0, a.jsx)(d.A, {
                                          id: "browser.bookmarks.manager.empty",
                                          defaultMessage: "No bookmarks in this folder",
                                        }),
                                    description: ea
                                      ? (0, a.jsx)(d.A, {
                                          id: "browser.bookmarks.manager.trySearch",
                                          defaultMessage: "Try a different name or address",
                                        })
                                      : (0, a.jsx)(d.A, {
                                          id: "browser.bookmarks.manager.saveHelp",
                                          defaultMessage: "Use the star in the address bar to save a page",
                                        }),
                                  })
                                : null,
                              (0, a.jsx)("ul", {
                                "aria-label": eo,
                                children: er.map((e) =>
                                  (0, a.jsx)(
                                    "li",
                                    {
                                      children: (0, a.jsx)(en, {
                                        id: e.id,
                                        variant: "manager",
                                        reorder: !ea,
                                        children: (0, a.jsx)(ew, {
                                          node: e,
                                          nodes: V,
                                          entry: q.get(e.id),
                                          library: H,
                                          searching: ea,
                                          onBrowse: eu,
                                          onOpen: O,
                                          onAction: R,
                                          restoreFocus: Z,
                                        }),
                                      }),
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                            ],
                          })
                        : (0, a.jsx)(m.i, {
                            icon: (0, a.jsx)(k.YXT, {}),
                            title: (0, a.jsx)(d.A, {
                              id: "browser.bookmarks.manager.folderMissing",
                              defaultMessage: "This folder no longer exists",
                            }),
                            description: (0, a.jsx)(b.$, {
                              color: "secondary",
                              size: "toolbar",
                              onClick: () => eu(null),
                              children: (0, a.jsx)(d.A, {
                                id: "browser.bookmarks.manager.back",
                                defaultMessage: "Back to bookmarks",
                              }),
                            }),
                          }),
                  })
                : null,
            ],
          }),
        })
      )
    }
    function ej(e) {
      return "root" !== e.folderType
    }
    function ey(e) {
      return [e.id, e]
    }
    function ew(e) {
      let l,
        r,
        o,
        u,
        c,
        m,
        f,
        h,
        x,
        v,
        j,
        y,
        w = (0, t.c)(51),
        {
          node: I,
          nodes: S,
          entry: A,
          library: _,
          restoreFocus: C,
          searching: E,
          onBrowse: F,
          onOpen: N,
          onAction: T,
        } = e,
        D = (0, i.A)(),
        [B, z] = (0, s.useState)(!1),
        [P, R] = (0, s.useState)(!1),
        O = (0, s.useRef)(null)
      w[0] !== T
        ? ((l = (e) => (
            R(!0),
            Promise.resolve()
              .then(() => T(e))
              .finally(() => R(!1))
          )),
          (w[0] = T),
          (w[1] = l))
        : (l = w[1])
      let U = l,
        W = (0, s.useRef)(null),
        Y = A?.kind === "bookmark" ? A : void 0,
        K = A?.kind === "folder" ? A : void 0
      w[2] !== I.url ? ((r = null == I.url ? null : (0, n.eD)(I.url)), (w[2] = I.url), (w[3] = r)) : (r = w[3])
      let L = r
      w[4] !== I.id || w[5] !== S || w[6] !== E
        ? ((o = E ? ep(S, I.id).slice(0, -1).filter(eM).map(eI).join(" / ") : ""),
          (w[4] = I.id),
          (w[5] = S),
          (w[6] = E),
          (w[7] = o))
        : (o = w[7])
      let V = o
      w[8] !== N || w[9] !== L
        ? ((u = (e) => {
            ;(e.preventDefault(), null != L && N(L, e))
          }),
          (w[8] = N),
          (w[9] = L),
          (w[10] = u))
        : (u = w[10])
      let q = u
      return (
        w[11] !== I.url
          ? ((c = null == I.url ? (0, a.jsx)(k.efV, {}) : (0, a.jsx)(H, { url: I.url })), (w[11] = I.url), (w[12] = c))
          : (c = w[12]),
        w[13] !== q || w[14] !== I.id || w[15] !== I.title || w[16] !== I.url || w[17] !== F || w[18] !== L
          ? ((m =
              null == I.url
                ? (0, a.jsx)("button", {
                    type: "button",
                    className: "w-full cursor-interaction truncate text-start",
                    onClick: () => F(I.id),
                    children: I.title,
                  })
                : (0, a.jsx)(eo, {
                    content: I.title || I.url,
                    children: (0, a.jsx)("a", {
                      href: L ?? void 0,
                      draggable: !1,
                      "aria-disabled": null == L,
                      onClick: q,
                      onAuxClick: (e) => {
                        1 === e.button && q(e)
                      },
                      className: "block truncate",
                      children: I.title || I.url,
                    }),
                  })),
            (w[13] = q),
            (w[14] = I.id),
            (w[15] = I.title),
            (w[16] = I.url),
            (w[17] = F),
            (w[18] = L),
            (w[19] = m))
          : (m = w[19]),
        w[20] !== I.url
          ? ((f = (0, a.jsx)("span", { className: "block truncate", children: I.url })), (w[20] = I.url), (w[21] = f))
          : (f = w[21]),
        w[22] !== V || w[23] !== E
          ? ((h = E ? (0, a.jsx)("span", { className: "block truncate", children: V }) : null),
            (w[22] = V),
            (w[23] = E),
            (w[24] = h))
          : (h = w[24]),
        w[25] !== I.childrenEditable || w[26] !== I.editable
          ? ((x =
              I.editable || I.childrenEditable
                ? null
                : (0, a.jsx)(d.A, { id: "browser.bookmarks.manager.readOnly", defaultMessage: "Read-only" })),
            (w[25] = I.childrenEditable),
            (w[26] = I.editable),
            (w[27] = x))
          : (x = w[27]),
        w[28] !== f || w[29] !== h || w[30] !== x
          ? ((v = (0, a.jsxs)(a.Fragment, { children: [f, h, x] })), (w[28] = f), (w[29] = h), (w[30] = x), (w[31] = v))
          : (v = w[31]),
        w[32] !== Y ||
        w[33] !== B ||
        w[34] !== K ||
        w[35] !== D ||
        w[36] !== _ ||
        w[37] !== U ||
        w[38] !== I.title ||
        w[39] !== I.url ||
        w[40] !== S ||
        w[41] !== N ||
        w[42] !== P ||
        w[43] !== C ||
        w[44] !== L
          ? ((j =
              null != Y || K?.editable
                ? (0, a.jsxs)(p.AM, {
                    open: B,
                    onOpenChange: (e) => {
                      P || z(e)
                    },
                    children: [
                      (0, a.jsx)(p.Wv, {
                        asChild: !0,
                        children: (0, a.jsx)(g.p, {
                          "data-bookmark-drag-block": !0,
                          ref: W,
                          label: D.formatMessage(
                            { id: "browser.bookmarks.manager.actions", defaultMessage: "Manage {title}" },
                            { title: I.title || I.url },
                          ),
                        }),
                      }),
                      (0, a.jsxs)(p.hl, {
                        ref: O,
                        onEscapeKeyDown: (e) => {
                          let l = O.current?.querySelector("[data-bookmark-folder-cancel]")
                          null != l && (e.preventDefault(), e.stopPropagation(), l.click())
                        },
                        size: "large",
                        align: "end",
                        onCloseAutoFocus: (e) => {
                          W.current?.isConnected || (e.preventDefault(), C())
                        },
                        children: [
                          null != Y && null != L
                            ? (0, a.jsx)(b.$, {
                                color: "ghost",
                                size: "toolbar",
                                disabled: P,
                                onClick: () => {
                                  ;(z(!1), N(L, void 0, !0))
                                },
                                children: (0, a.jsx)(d.A, {
                                  id: "browser.bookmarks.manager.openNewTab",
                                  defaultMessage: "Open in new tab",
                                }),
                              })
                            : null,
                          null != Y
                            ? (0, a.jsx)(
                                eg.y,
                                {
                                  bookmark: Y,
                                  url: Y.url,
                                  title: Y.title,
                                  folders: _.folders,
                                  available: !0,
                                  defaultFolderChildrenEditable: _.defaultFolderChildrenEditable,
                                  onAction: U,
                                  onClose: () => z(!1),
                                },
                                `${Y.id}:${Y.editable}`,
                              )
                            : null != K &&
                              (0, a.jsx)(eA, {
                                folder: K,
                                nodes: S,
                                library: _,
                                pending: P,
                                onAction: U,
                                onClose: () => z(!1),
                              }),
                        ],
                      }),
                    ],
                  })
                : null),
            (w[32] = Y),
            (w[33] = B),
            (w[34] = K),
            (w[35] = D),
            (w[36] = _),
            (w[37] = U),
            (w[38] = I.title),
            (w[39] = I.url),
            (w[40] = S),
            (w[41] = N),
            (w[42] = P),
            (w[43] = C),
            (w[44] = L),
            (w[45] = j))
          : (j = w[45]),
        w[46] !== v || w[47] !== j || w[48] !== c || w[49] !== m
          ? ((y = (0, a.jsx)(M.ic, { icon: c, label: m, description: v, control: j })),
            (w[46] = v),
            (w[47] = j),
            (w[48] = c),
            (w[49] = m),
            (w[50] = y))
          : (y = w[50]),
        y
      )
    }
    function eI(e) {
      return e.title
    }
    function eM(e) {
      return "root" !== e.folderType
    }
    function eS(e) {
      let l,
        r,
        o,
        n,
        i,
        u,
        c,
        m,
        f,
        k,
        g = (0, t.c)(22),
        { library: h, onAction: x, onSaved: v, restoreFocus: j } = e,
        [y, w] = (0, s.useState)(!1),
        [I, M] = (0, s.useState)(!1),
        S = (0, s.useRef)(null)
      g[0] !== x
        ? ((l = (e) => (
            M(!0),
            Promise.resolve()
              .then(() => x(e))
              .finally(() => M(!1))
          )),
          (g[0] = x),
          (g[1] = l))
        : (l = g[1])
      let A = l
      return (
        g[2] !== I
          ? ((r = (e) => {
              I || w(e)
            }),
            (g[2] = I),
            (g[3] = r))
          : (r = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(p.Wv, {
              asChild: !0,
              children: (0, a.jsx)(b.$, {
                ref: S,
                color: "secondary",
                size: "toolbar",
                children: (0, a.jsx)(d.A, { id: "browser.bookmarks.newFolder", defaultMessage: "New folder" }),
              }),
            })),
            (g[4] = o))
          : (o = g[4]),
        g[5] !== j
          ? ((n = (e) => {
              S.current?.isConnected || (e.preventDefault(), j())
            }),
            (g[5] = j),
            (g[6] = n))
          : (n = g[6]),
        g[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(p.eO, {
              children: (0, a.jsx)(d.A, { id: "browser.bookmarks.newFolder", defaultMessage: "New folder" }),
            })),
            (g[7] = i))
          : (i = g[7]),
        g[8] !== v
          ? ((u = (e) => {
              ;(w(!1), v(e))
            }),
            (g[8] = v),
            (g[9] = u))
          : (u = g[9]),
        g[10] === Symbol.for("react.memo_cache_sentinel") ? ((c = () => w(!1)), (g[10] = c)) : (c = g[10]),
        g[11] !== A || g[12] !== h.defaultFolderChildrenEditable || g[13] !== u
          ? ((m = (0, a.jsx)(eg.c, {
              folder: null,
              available: !0,
              defaultFolderChildrenEditable: h.defaultFolderChildrenEditable,
              onAction: A,
              onSaved: u,
              onCancel: c,
            })),
            (g[11] = A),
            (g[12] = h.defaultFolderChildrenEditable),
            (g[13] = u),
            (g[14] = m))
          : (m = g[14]),
        g[15] !== n || g[16] !== m
          ? ((f = (0, a.jsxs)(p.hl, { size: "large", align: "end", onCloseAutoFocus: n, children: [i, m] })),
            (g[15] = n),
            (g[16] = m),
            (g[17] = f))
          : (f = g[17]),
        g[18] !== y || g[19] !== r || g[20] !== f
          ? ((k = (0, a.jsxs)(p.AM, { open: y, onOpenChange: r, children: [o, f] })),
            (g[18] = y),
            (g[19] = r),
            (g[20] = f),
            (g[21] = k))
          : (k = g[21]),
        k
      )
    }
    function eA(e) {
      let l,
        r,
        o,
        n,
        i,
        u,
        c,
        m,
        f,
        k,
        g = (0, t.c)(32),
        { folder: h, nodes: x, library: v, pending: j, onAction: y, onClose: w } = e,
        [I, M] = (0, s.useState)(!1)
      g[0] !== h.id || g[1] !== x ? ((l = ep(x, h.id).at(-2)), (g[0] = h.id), (g[1] = x), (g[2] = l)) : (l = g[2])
      let S = l
      g[3] !== h.editable || g[4] !== h.id || g[5] !== y || g[6] !== w || g[7] !== S?.childrenEditable || g[8] !== j
        ? ((r = async function () {
            if (!j && h.editable && S?.childrenEditable) {
              M(!1)
              try {
                ;(await y({ type: "remove-folder", id: h.id })).ok ? w() : M(!0)
              } catch {
                M(!0)
              }
            }
          }),
          (g[3] = h.editable),
          (g[4] = h.id),
          (g[5] = y),
          (g[6] = w),
          (g[7] = S?.childrenEditable),
          (g[8] = j),
          (g[9] = r))
        : (r = g[9])
      let A = r
      g[10] !== h.title ? ((o = (0, a.jsx)(p.eO, { children: h.title })), (g[10] = h.title), (g[11] = o)) : (o = g[11])
      let _ = !j
      ;(g[12] !== h || g[13] !== v.defaultFolderChildrenEditable || g[14] !== y || g[15] !== w || g[16] !== _
        ? ((n = (0, a.jsx)(eg.c, {
            folder: h,
            available: _,
            defaultFolderChildrenEditable: v.defaultFolderChildrenEditable,
            onAction: y,
            onSaved: w,
            onCancel: w,
          })),
          (g[12] = h),
          (g[13] = v.defaultFolderChildrenEditable),
          (g[14] = y),
          (g[15] = w),
          (g[16] = _),
          (g[17] = n))
        : (n = g[17]),
        g[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, a.jsx)(d.A, {
                id: "browser.bookmarks.removeFolderHelp",
                defaultMessage: "Removing a folder moves its bookmarks and subfolders to its parent folder",
              }),
            })),
            (g[18] = i))
          : (i = g[18]),
        g[19] !== I
          ? ((u = I
              ? (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-xs text-danger",
                  children: (0, a.jsx)(d.A, {
                    id: "browser.bookmarks.manager.removeFailed",
                    defaultMessage: "The folder could not be removed \u2014 try again",
                  }),
                })
              : null),
            (g[19] = I),
            (g[20] = u))
          : (u = g[20]))
      let C = j || !S?.childrenEditable
      return (
        g[21] !== A ? ((c = () => void A()), (g[21] = A), (g[22] = c)) : (c = g[22]),
        g[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(d.A, { id: "browser.bookmarks.removeFolder", defaultMessage: "Remove folder" })),
            (g[23] = m))
          : (m = g[23]),
        g[24] !== C || g[25] !== c
          ? ((f = (0, a.jsx)(b.$, { color: "ghostDanger", size: "dialog", disabled: C, onClick: c, children: m })),
            (g[24] = C),
            (g[25] = c),
            (g[26] = f))
          : (f = g[26]),
        g[27] !== f || g[28] !== o || g[29] !== n || g[30] !== u
          ? ((k = (0, a.jsxs)("div", { className: "flex flex-col gap-3 p-2", children: [o, n, i, u, f] })),
            (g[27] = f),
            (g[28] = o),
            (g[29] = n),
            (g[30] = u),
            (g[31] = k))
          : (k = g[31]),
        k
      )
    }
  },
  RFUB(e, l, r) {
    var a = r("SRbQ"),
      t = r("ZG9f"),
      o = r("Hl6a"),
      n = r("pWYp"),
      s = r("GaA7"),
      i = r("OWtl"),
      d = r("NoIA"),
      u = r("mAE2")
    let c = [],
      b = [],
      m = [],
      f = (0, o.SZ)(i.u, { status: "disabled", library: null }, ({ get: e, set: l }) => {
        let r = { stack: [], error: void 0, hasError: !1 }
        try {
          let o
          if (!e(u.P)) return void l({ status: "disabled", library: null })
          let n = s.appServices?.browserBookmarks
          if (null == n) return void l({ status: "unavailable", library: null })
          l({ status: "loading", library: null })
          let i = !0,
            d = (0, a.mS)(
              r,
              new t.AX((e) => {
                i && l(null == e ? { status: "unavailable", library: null } : { status: "ready", library: e })
              }),
              !1,
            ),
            c = n.subscribe(d)
          return (
            c.then(
              (e) => {
                i ? ((o = e), null == e && l({ status: "unavailable", library: null })) : e?.[Symbol.dispose]()
              },
              () => {
                i && l({ status: "unavailable", library: null })
              },
            ),
            () => {
              ;((i = !1), c[Symbol.dispose](), o?.[Symbol.dispose]())
            }
          )
        } catch (e) {
          ;((r.error = e), (r.hasError = !0))
        } finally {
          ;(0, a.hk)(r)
        }
      }),
      k = (0, o.un)(i.u, ({ get: e }) => "ready" === e(f).status),
      g = (0, o.un)(i.u, ({ get: e }) => e(f).library?.bookmarks ?? c),
      h = (0, o.un)(i.u, ({ get: e }) => {
        let l = e(f).library
        return null == l ? b : (0, d.gm)(l)
      }),
      p = (0, o.un)(i.u, ({ get: e }) => e(f).library?.tree ?? m),
      x = (0, o.un)(i.u, ({ get: e }) => {
        let l = e(f).library
        return l?.defaultFolderId == null
          ? null
          : (function e(l, r) {
              for (let a of l) {
                if (a.id === r) return a
                let l = e(a.children ?? m, r)
                if (null != l) return l
              }
              return null
            })(l.tree, l.defaultFolderId)
      }),
      v = (0, o.i1)(i.u, (e, { get: l }) => {
        let r = (0, n.eD)(e) ?? e
        return l(g).find((e) => e.url === r) ?? null
      })
    async function j(e, l) {
      if (!e.get(u.P)) return { ok: !1, reason: "disabled" }
      let r = s.appServices?.browserBookmarks
      if (null == r) return { ok: !1, reason: "storage-unavailable" }
      try {
        let e = { stack: [], error: void 0, hasError: !1 }
        try {
          let t = (0, a.mS)(e, l(r), !1)
          return (0, a.mS)(e, await t, !1)
        } catch (l) {
          ;((e.error = l), (e.hasError = !0))
        } finally {
          ;(0, a.hk)(e)
        }
      } catch {
        return { ok: !1, reason: "storage-unavailable" }
      }
    }
    r.d(
      l,
      {},
      {
        Bc: function (e, l, r) {
          return j(e, (e) => e.renameFolder(l, r))
        },
        ED: function (e, l, r) {
          return j(e, (e) => e.updateBookmark(l, r))
        },
        KA: function (e, l) {
          return j(e, (e) => e.saveBookmark(l))
        },
        Pw: function (e, l) {
          return j(e, (e) => e.removeFolder(l))
        },
        Wu: h,
        XO: function (e, l) {
          return j(e, (e) => e.removeBookmark(l))
        },
        eW: g,
        jn: k,
        p8: f,
        p9: function (e, l) {
          return j(e, (e) => e.createFolder(l))
        },
        pg: v,
        rR: p,
        st: x,
        wz: function (e, l, r) {
          return j(e, (e) => e.moveBookmark(l, r))
        },
      },
    )
  },
}
//# sourceMappingURL=969257.d0a46e6410.js.map
