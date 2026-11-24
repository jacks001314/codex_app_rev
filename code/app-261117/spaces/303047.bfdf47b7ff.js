export const __rspack_esm_ids = [303047]
export const __webpack_modules__ = {
  piij(e, t, n) {
    e.exports = n.p + "assets/space-recovery.105d9c61fe.png"
  },
  Y1D1(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("X3K1")
    n.d(
      t,
      {},
      {
        T: function () {
          let e,
            t = (0, l.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("span", {
                  className: "inline-flex size-6 shrink-0 overflow-hidden rounded-full",
                  "aria-hidden": !0,
                  children: (0, a.jsx)(i.X, { as: "span", size: "fill" }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  KQH2(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("slpy"),
      s = n("on57")
    n.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            n,
            r,
            o,
            d = (0, l.c)(16),
            {
              ariaLabel: c,
              borderClassName: u,
              children: p,
              disabled: g,
              muted: m,
              onClick: h,
              renderTooltip: x,
              tooltip: f,
            } = e,
            v = void 0 === u ? "border-transparent" : u
          d[0] !== c || d[1] !== v || d[2] !== p || d[3] !== g || d[4] !== h || d[5] !== f
            ? ((t =
                null != h
                  ? (0, a.jsx)("button", {
                      "aria-label": c ?? f,
                      className: (0, s.A)("relative inline-flex cursor-interaction rounded-full border p-px", v),
                      disabled: g,
                      type: "button",
                      onClick: h,
                      children: p,
                    })
                  : (0, a.jsx)("span", {
                      "aria-label": c ?? f,
                      className: (0, s.A)("relative inline-flex rounded-full border p-px align-top", v),
                      children: p,
                    })),
              (d[0] = c),
              (d[1] = v),
              (d[2] = p),
              (d[3] = g),
              (d[4] = h),
              (d[5] = f),
              (d[6] = t))
            : (t = d[6])
          let b = t,
            j = void 0 !== m && m ? "opacity-40" : "opacity-100"
          return (
            d[7] !== j
              ? ((n = (0, s.A)("inline-flex transition-opacity duration-basic motion-reduce:transition-none", j)),
                (d[7] = j),
                (d[8] = n))
              : (n = d[8]),
            d[9] !== x || d[10] !== f || d[11] !== b
              ? ((r = x?.(b) ?? (0, a.jsx)(i.m, { content: f, children: b })),
                (d[9] = x),
                (d[10] = f),
                (d[11] = b),
                (d[12] = r))
              : (r = d[12]),
            d[13] !== n || d[14] !== r
              ? ((o = (0, a.jsx)("span", {
                  className: "inline-flex rounded-full bg-surface [[data-mask-avatar-overlap]_&]:bg-transparent",
                  children: (0, a.jsx)("span", { className: n, children: r }),
                })),
                (d[13] = n),
                (d[14] = r),
                (d[15] = o))
              : (o = d[15]),
            o
          )
        },
      },
    )
  },
  B4pj(e, t, n) {
    n.d(t, { g: () => m })
    var a = n("ABep"),
      l = n("QosV"),
      i = n("slpy"),
      s = n("on57"),
      r = n("K4Cx"),
      o = n("zd8w"),
      d = n("v7qY"),
      c = n("Wf1j"),
      u = n("oyxz"),
      p = n("T1PX"),
      g = n("V8uZ")
    function m(e) {
      let t,
        n,
        m,
        f,
        v,
        b,
        j,
        y,
        _,
        w,
        I,
        S,
        A,
        C,
        P,
        k,
        M,
        N,
        T,
        E,
        D = (0, l.c)(69),
        {
          deferInitialFit: O,
          interactive: R,
          maskOverlap: U,
          overflowSideOffset: F,
          people: W,
          totalCount: L,
          placeholder: B,
          front: z,
          size: $,
        } = e,
        Q = void 0 !== O && O,
        K = void 0 === R || R,
        V = void 0 !== U && U,
        q = void 0 === z ? "first" : z,
        H = void 0 === $ ? "md" : $,
        G = (0, c.A)(),
        X = (0, p.I)(),
        Y = void 0 === L ? W.length : L
      D[0] !== W ? ((t = W.slice(0, 4)), (D[0] = W), (D[1] = t)) : (t = D[1])
      let J = t,
        [Z, ee] = (0, o.useState)(J.length),
        [et, en] = (0, o.useState)(null),
        ea = K ? "button" : "span",
        el = null == Y ? null : Y - Math.min(Z, J.length)
      D[2] !== J.length || D[3] !== Q || D[4] !== Y
        ? ((n = (e) => {
            let t = e?.firstElementChild,
              n = e?.lastElementChild
            if (null == e || !(t instanceof HTMLElement) || !(n instanceof HTMLElement)) return
            n.style.minWidth = ""
            let a = 0,
              l = null == Y || Y > J.length,
              i = () => {
                ;((a = Math.max(a, n.offsetWidth)), (n.style.minWidth = `${a}px`))
                let i = Number.parseFloat(getComputedStyle(n).paddingInlineStart),
                  s = a - i
                t.style.paddingInlineEnd = l ? `${s}px` : ""
                let r = !l && t.clientWidth <= e.clientWidth,
                  o = r ? e.clientWidth : e.clientWidth - s,
                  d = "rtl" === getComputedStyle(e).direction,
                  c = 0,
                  u = 0
                for (let e of t.querySelectorAll("[data-page-facepile-avatar]")) {
                  if (!(e instanceof HTMLElement)) continue
                  let n = d ? t.clientWidth - e.offsetLeft : e.offsetLeft + e.offsetWidth
                  ;(r || n <= o) && ((c += 1), (u = n))
                }
                ;((n.style.insetInlineStart = `${Math.max(0, u - i)}px`), ee(c))
              },
              s = Q,
              r = new ResizeObserver(() => {
                s ? ((s = !1), (0, d.flushSync)(i)) : i()
              })
            return (r.observe(e), r.observe(t), r.observe(n), Q || i(), () => r.disconnect())
          }),
          (D[2] = J.length),
          (D[3] = Q),
          (D[4] = Y),
          (D[5] = n))
        : (n = D[5])
      let ei = n,
        es = "sm" === H ? "max-w-28" : "max-w-32"
      D[6] !== es
        ? ((m = (0, s.A)("relative inline-flex min-w-0 items-center overflow-hidden select-none", es)),
          (D[6] = es),
          (D[7] = m))
        : (m = D[7])
      let er = V || void 0,
        eo = "sm" === H ? "-space-x-1.5" : "-space-x-2"
      ;(D[8] !== eo
        ? ((f = (0, s.A)("pointer-events-none relative isolate z-10 flex shrink-0 items-center", eo)),
          (D[8] = eo),
          (D[9] = f))
        : (f = D[9]),
        D[10] !== J || D[11] !== q || D[12] !== V || D[13] !== B || D[14] !== X || D[15] !== H || D[16] !== Z
          ? ((v =
              0 === J.length && null != B
                ? (0, a.jsx)("span", {
                    className: "pointer-events-auto relative inline-flex shrink-0",
                    "data-page-facepile-avatar": !0,
                    children: B,
                  })
                : J.map((e, t) =>
                    (0, a.jsx)(
                      r.P.span,
                      {
                        className: (0, s.A)(
                          "pointer-events-auto relative inline-flex shrink-0",
                          V &&
                            ("first" === q
                              ? t > 0 && "cutStart-XX_bX3"
                              : t < Math.min(Z, J.length) - 1 && "cutEnd-MlOAQC"),
                          V && "sm" === H && "small-xt5bKt",
                        ),
                        "data-page-facepile-avatar": !0,
                        initial: null == B && { opacity: X ? 1 : 0.9 },
                        animate: 0 === t ? "first" : "rest",
                        variants: { first: { opacity: X ? 1 : [0.9, 1] }, rest: { opacity: 1 } },
                        transition: { type: "tween", duration: 0.15 * !X, ease: g.Wu },
                        style: { visibility: t < Z ? void 0 : "hidden", zIndex: "first" === q ? J.length - t : t },
                        "aria-hidden": t >= Z || void 0,
                        inert: t >= Z,
                        children: e.avatar,
                      },
                      e.id,
                    ),
                  )),
            (D[10] = J),
            (D[11] = q),
            (D[12] = V),
            (D[13] = B),
            (D[14] = X),
            (D[15] = H),
            (D[16] = Z),
            (D[17] = v))
          : (v = D[17]),
        D[18] !== f || D[19] !== v
          ? ((b = (0, a.jsx)("span", { className: f, children: v })), (D[18] = f), (D[19] = v), (D[20] = b))
          : (b = D[20]))
      let ed = 0 !== el && null != et
      ;(D[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (e) => en(e ? "hover" : null)), (D[21] = j))
        : (j = D[21]),
        D[22] !== K
          ? ((y = K
              ? (e) => {
                  ;(e.preventDefault(), e.stopPropagation(), en(x))
                }
              : void 0),
            (D[22] = K),
            (D[23] = y))
          : (y = D[23]))
      let ec = K ? "button" : void 0,
        eu = "sm" === H ? "h-6 min-w-6 ps-1 pe-0.5" : "h-7 min-w-7 ps-1.5 pe-1"
      ;(D[24] !== eu
        ? ((_ = (0, s.A)(
            "pointer-events-auto absolute z-0 inline-flex cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-xs text-secondary",
            eu,
          )),
          (D[24] = eu),
          (D[25] = _))
        : (_ = D[25]),
        D[26] !== K
          ? ((w = (e) => {
              K && ("Enter" === e.key || " " === e.key) && e.stopPropagation()
            }),
            (D[26] = K),
            (D[27] = w))
          : (w = D[27]),
        D[28] !== el || D[29] !== G
          ? ((I =
              null == el
                ? G.formatMessage({
                    id: "collaboratorFacepile.moreCollaborators",
                    defaultMessage: "More collaborators",
                  })
                : G.formatMessage(
                    {
                      id: "collaboratorFacepile.morePeople",
                      defaultMessage: "{count, plural, one {# more person} other {# more people}}",
                    },
                    { count: el },
                  )),
            (D[28] = el),
            (D[29] = G),
            (D[30] = I))
          : (I = D[30]))
      let ep = 0 !== el ? void 0 : "hidden"
      D[31] !== ep ? ((S = { visibility: ep }), (D[31] = ep), (D[32] = S)) : (S = D[32])
      let eg = 0 === el || void 0,
        em = K && 0 !== el ? 0 : void 0
      ;(D[33] !== el || D[34] !== Y
        ? ((A =
            null == el
              ? (0, a.jsx)(u.A, { id: "collaboratorFacepile.unknownOverflow", defaultMessage: "\u2026" })
              : (0, a.jsx)(u.A, {
                  id: "collaboratorFacepile.overflow",
                  defaultMessage: "+{count}",
                  values: { count: el || Y },
                })),
          (D[33] = el),
          (D[34] = Y),
          (D[35] = A))
        : (A = D[35]),
        D[36] !== ea ||
        D[37] !== ec ||
        D[38] !== _ ||
        D[39] !== w ||
        D[40] !== I ||
        D[41] !== S ||
        D[42] !== eg ||
        D[43] !== em ||
        D[44] !== A
          ? ((C = (0, a.jsx)(ea, {
              type: ec,
              className: _,
              onKeyDown: w,
              "aria-label": I,
              style: S,
              "aria-hidden": eg,
              tabIndex: em,
              children: A,
            })),
            (D[36] = ea),
            (D[37] = ec),
            (D[38] = _),
            (D[39] = w),
            (D[40] = I),
            (D[41] = S),
            (D[42] = eg),
            (D[43] = em),
            (D[44] = A),
            (D[45] = C))
          : (C = D[45]),
        D[46] !== y || D[47] !== C
          ? ((P = (0, a.jsx)(i.m.Trigger, { onClick: y, children: C })), (D[46] = y), (D[47] = C), (D[48] = P))
          : (P = D[48]))
      let eh = K ? 0 : void 0
      return (
        D[49] !== W || D[50] !== Z ? ((k = W.slice(Z).map(h)), (D[49] = W), (D[50] = Z), (D[51] = k)) : (k = D[51]),
        D[52] !== eh || D[53] !== k
          ? ((M = (0, a.jsx)("div", {
              className: "flex max-h-64 flex-col gap-2 overflow-y-auto p-2",
              tabIndex: eh,
              children: k,
            })),
            (D[52] = eh),
            (D[53] = k),
            (D[54] = M))
          : (M = D[54]),
        D[55] !== F || D[56] !== M
          ? ((N = (0, a.jsx)(i.m.Content, { side: "bottom", sideOffset: F, align: "end", children: M })),
            (D[55] = F),
            (D[56] = M),
            (D[57] = N))
          : (N = D[57]),
        D[58] !== K || D[59] !== ed || D[60] !== P || D[61] !== N
          ? ((T = (0, a.jsxs)(i.m.Root, { open: ed, onOpenChange: j, interactive: K, children: [P, N] })),
            (D[58] = K),
            (D[59] = ed),
            (D[60] = P),
            (D[61] = N),
            (D[62] = T))
          : (T = D[62]),
        D[63] !== ei || D[64] !== er || D[65] !== b || D[66] !== T || D[67] !== m
          ? ((E = (0, a.jsxs)("span", {
              ref: ei,
              className: m,
              "data-page-facepile": !0,
              "data-mask-avatar-overlap": er,
              children: [b, T],
            })),
            (D[63] = ei),
            (D[64] = er),
            (D[65] = b),
            (D[66] = T),
            (D[67] = m),
            (D[68] = E))
          : (E = D[68]),
        E
      )
    }
    function h(e) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex items-center gap-2",
          children: [e.avatar, (0, a.jsx)("span", { className: "text-sm text-default", children: e.label ?? e.name })],
        },
        e.id,
      )
    }
    function x(e) {
      return "click" === e ? null : "click"
    }
  },
  wJMo(e, t, n) {
    var a = n("l8z4"),
      l = n("yGJW")
    n.d(
      t,
      {},
      {
        N: function (e, { type: t, taskId: n, suggestionId: i, interactionEntryPoint: s }) {
          ;(0, l.yy)(e, a.AS, {
            type: t,
            source: "CHATGPT_TASKS_INTERACTION_SOURCE_SPACE_SCHEDULES_PANEL",
            taskId: n,
            suggestionId: i,
            interactionEntryPoint: s,
          })
        },
      },
    )
  },
  TIbG(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("slpy"),
      s = n("on57"),
      r = n("qmMi"),
      o = n("Wf1j"),
      d = n("oyxz"),
      c = n("Qgfj"),
      u = n("bVeK"),
      p = n("UxN3"),
      g = n("K0Cv"),
      m = n("e1xH"),
      h = n("OWtl"),
      x = n("wJMo"),
      f = n("IGL9")
    function v(e) {
      let t,
        n,
        o,
        d,
        c,
        m,
        v,
        b,
        j,
        y,
        _,
        w,
        I = (0, l.c)(30)
      I[0] !== e
        ? (({ attachmentCount: t, className: n, label: o, onClick: d, pageId: c, ...m } = e),
          (I[0] = e),
          (I[1] = t),
          (I[2] = n),
          (I[3] = o),
          (I[4] = d),
          (I[5] = c),
          (I[6] = m))
        : ((t = I[1]), (n = I[2]), (o = I[3]), (d = I[4]), (c = I[5]), (m = I[6]))
      let S = (0, r.gh)(h.u),
        { data: A, refetch: C } = (0, r._U)(null == c || m.disabled ? null : f.DU, c ?? "") ?? {},
        P = (A?.length ?? t ?? 0) > 0,
        k = !0 === m["aria-expanded"],
        M = k || "true" === m["aria-expanded"],
        N = k && "[--color-accent:var(--color-blue)] [--color-text-accent:var(--color-blue)]"
      ;(I[7] !== n || I[8] !== N ? ((v = (0, s.A)(n, N)), (I[7] = n), (I[8] = N), (I[9] = v)) : (v = I[9]),
        I[10] !== k || I[11] !== d || I[12] !== m || I[13] !== C || I[14] !== S
          ? ((b = (e) => {
              ;(!1 === m["aria-expanded"] &&
                null != d &&
                (0, x.N)(S, { type: "CHATGPT_TASKS_EVENT_TYPE_SCHEDULES_PANEL_OPENED" }),
                k || C?.({ cancelRefetch: !1 }),
                d?.(e))
            }),
            (I[10] = k),
            (I[11] = d),
            (I[12] = m),
            (I[13] = C),
            (I[14] = S),
            (I[15] = b))
          : (b = I[15]))
      let T = k || P ? "text-blue" : void 0
      return (
        I[16] === Symbol.for("react.memo_cache_sentinel") ? ((j = { 16: u.QC9, 20: u.JZN }), (I[16] = j)) : (j = I[16]),
        I[17] !== T ? ((y = (0, a.jsx)(p.b5, { className: T, icon: j })), (I[17] = T), (I[18] = y)) : (y = I[18]),
        I[19] !== k || I[20] !== o || I[21] !== m || I[22] !== v || I[23] !== b || I[24] !== y
          ? ((_ = (0, a.jsx)(g.u, {
              ...m,
              "data-page-automation-control": !0,
              uniform: !0,
              selected: k,
              className: v,
              "aria-label": o,
              onClick: b,
              children: y,
            })),
            (I[19] = k),
            (I[20] = o),
            (I[21] = m),
            (I[22] = v),
            (I[23] = b),
            (I[24] = y),
            (I[25] = _))
          : (_ = I[25]),
        I[26] !== o || I[27] !== M || I[28] !== _
          ? ((w = (0, a.jsx)(i.m, { side: "bottom", disabled: M, content: o, children: _ })),
            (I[26] = o),
            (I[27] = M),
            (I[28] = _),
            (I[29] = w))
          : (w = I[29]),
        w
      )
    }
    let b = (0, c.YK)({ panelButton: { id: "codex.pages.automations.panelButton", defaultMessage: "Scheduled" } })
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            s,
            c,
            h,
            x,
            f,
            j,
            y,
            _ = (0, l.c)(28)
          _[0] !== e
            ? (({ attachmentCount: t, pageId: n, ...s } = e), (_[0] = e), (_[1] = t), (_[2] = n), (_[3] = s))
            : ((t = _[1]), (n = _[2]), (s = _[3]))
          let w = (0, o.A)()
          if ((0, r.Ul)(m.SF)) {
            let e, l
            return (
              _[4] !== w ? ((e = w.formatMessage(b.panelButton)), (_[4] = w), (_[5] = e)) : (e = _[5]),
              _[6] !== t || _[7] !== n || _[8] !== s || _[9] !== e
                ? ((l = (0, a.jsx)(v, { ...s, attachmentCount: t, label: e, pageId: n })),
                  (_[6] = t),
                  (_[7] = n),
                  (_[8] = s),
                  (_[9] = e),
                  (_[10] = l))
                : (l = _[10]),
              l
            )
          }
          let I = null != t && t > 0,
            S = !0 === s["aria-expanded"] || "true" === s["aria-expanded"]
          _[11] !== t || _[12] !== I
            ? ((c = I
                ? (0, a.jsx)(d.A, {
                    id: "codex.pages.automations.scheduleCount",
                    defaultMessage: "{count, plural, one {# schedule} other {# schedules}}",
                    values: { count: t },
                  })
                : (0, a.jsx)(d.A, {
                    id: "codex.pages.automations.scheduleUpdates",
                    defaultMessage: "Schedule updates to this page",
                  })),
              (_[11] = t),
              (_[12] = I),
              (_[13] = c))
            : (c = _[13])
          let A = "browse" === s.presentation && !0 === s["aria-expanded"]
          _[14] !== w
            ? ((h = w.formatMessage({ id: "codex.pages.automations.button", defaultMessage: "Page automations" })),
              (_[14] = w),
              (_[15] = h))
            : (h = _[15])
          let C = I ? "text-blue" : void 0
          return (
            _[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = { 16: u.QC9, 20: u.JZN }), (_[16] = x))
              : (x = _[16]),
            _[17] !== C ? ((f = (0, a.jsx)(p.b5, { className: C, icon: x })), (_[17] = C), (_[18] = f)) : (f = _[18]),
            _[19] !== s || _[20] !== A || _[21] !== h || _[22] !== f
              ? ((j = (0, a.jsx)(g.u, {
                  ...s,
                  "data-page-automation-control": !0,
                  uniform: !0,
                  selected: A,
                  "aria-label": h,
                  children: f,
                })),
                (_[19] = s),
                (_[20] = A),
                (_[21] = h),
                (_[22] = f),
                (_[23] = j))
              : (j = _[23]),
            _[24] !== S || _[25] !== c || _[26] !== j
              ? ((y = (0, a.jsx)(i.m, { side: "bottom", disabled: S, content: c, children: j })),
                (_[24] = S),
                (_[25] = c),
                (_[26] = j),
                (_[27] = y))
              : (y = _[27]),
            y
          )
        },
      },
    )
  },
  IGL9(e, t, n) {
    var a = n("SZCv"),
      l = n.n(a),
      i = n("qmMi"),
      s = n("ChYf"),
      r = n("SPnB"),
      o = n("Ro2M"),
      d = n("Kwur"),
      c = n("e1xH"),
      u = n("tv8P"),
      p = n("OWtl"),
      g = n("rvFo"),
      m = n("GDNt")
    let h = (0, i.un)(p.u, ({ get: e }) =>
        JSON.stringify([e(u.spaceAccountId$), e(r.chatGptAuthenticatedUserId$), e(r.Kw)]),
      ),
      x = (0, i.bD)(p.u, (e) => null),
      f = (0, i.vU)(p.u, (e, { get: t }) => {
        let n = "string" == typeof e ? e : e.pageId,
          a = t(u.spaceAccountId$),
          l = t(r.chatGptAuthenticatedUserId$),
          i = "string" == typeof e && t(c.SF)
        return {
          queryKey: ["cloud-automations", "page-automation-attachments", a, l, n],
          queryFn: ({ signal: e }) =>
            d.Request.safeGet("/pages/{page_id}/automation-attachments", {
              parameters: { path: { page_id: n } },
              signal: e,
              expectedErrorStatuses: [403, 404, 503],
            }),
          enabled: null != a && null != l && t(c.pagesEnabled$),
          refetchInterval: (e) => y(e.state.error, (!i || e.state.data?.length !== 0) && g.D.THIRTY_SECONDS),
          retry: !1,
          staleTime: g.D.THIRTY_SECONDS,
        }
      }),
      v = (0, i.vU)(p.u, (e, { get: t }) => ({
        ...(0, o.XZ)(e, t(o.H)),
        refetchInterval: (e) => null != e.state.error && y(e.state.error, g.D.THIRTY_SECONDS),
      })),
      b = (0, i.vU)(p.u, (e, { get: t }) => {
        let n = t(u.spaceAccountId$),
          a = t(r.chatGptAuthenticatedUserId$),
          l = t(r.Kw),
          i = ["cloud-automations", "page-latest-run", n, a, l, e]
        return {
          queryKey: i,
          enabled: null != n && null != a && null != l,
          queryFn: async ({ client: t, signal: a }) => {
            let l = t.getQueryData(i),
              [s] = await Promise.all([
                d.Request.safeGet("/automation/{automation_id}/runs/latest", {
                  parameters: { path: { automation_id: e } },
                  signal: a,
                  expectedErrorStatuses: [403, 404, 503],
                }),
                null == l ? void 0 : t.invalidateQueries({ queryKey: (0, o.XZ)(e, n).queryKey }),
              ])
            a.throwIfAborted()
            let r =
              null != l &&
              (l.result.last_run?.id !== s.last_run?.id || l.result.last_run?.status !== s.last_run?.status)
            return { result: s, refreshUntil: r ? Date.now() + 6e4 : (l?.refreshUntil ?? 0) }
          },
          refetchInterval: (e) => {
            let t = Date.now(),
              n = e.state.data?.result.last_run,
              a = e.state.data?.result.latest_update,
              l =
                n?.status === "in_progress" ||
                (null != n && a?.run.id === n.id && a.latest_update?.metadata.automation_requires_user_action === !0)
            return y(e.state.error, l || t < (e.state.data?.refreshUntil ?? 0) ? g.D.FIVE_SECONDS : g.D.THIRTY_SECONDS)
          },
          retry: !1,
          staleTime: g.D.FIVE_SECONDS,
        }
      }),
      j = (0, i.i1)(
        p.u,
        (e, { get: t }) => {
          let n = t(u.spaceAccountId$),
            a = t(r.chatGptAuthenticatedUserId$),
            l = t(r.Kw)
          if (
            !t(c.pagesEnabled$) ||
            !t(s.G, { name: "automations.cloud" }).isCapable ||
            null == n ||
            null == a ||
            null == l ||
            t(o.H) !== n
          )
            return { status: "unavailable", tasks: [] }
          let i = t(r.MS) ? a.split("__")[0] : l,
            d = t(f, e)
          if (null != d.error) return { status: "error", tasks: [] }
          if (null == d.data) return { status: "loading", tasks: [] }
          let p = "ready",
            g = d.data.flatMap((n) => {
              if (
                n.creator_account_user_id !== i ||
                "cloud" !== n.runtime ||
                null != t(x, { identity: t(h), pageId: e, automationId: n.automation_id })
              )
                return []
              let a = t(v, n.automation_id)
              if (null != a.error) return ((p = "error"), [])
              let l = a.data?.automation
              if (null == l) return ("error" !== p && (p = "loading"), [])
              if (
                a.data?.teamId != null ||
                null != l.team_id ||
                "local" === l.executor ||
                (l.current_user_role ?? "owner") !== "owner"
              )
                return []
              let s = t(b, l.id),
                r = null == s.error ? (s.data?.result.last_run ?? null) : null,
                o = s.data?.result.latest_update,
                d = "ready"
              return (
                null != s.error ? (d = "error") : null == s.data && (d = "loading"),
                [
                  {
                    automationId: l.id,
                    title: l.display_title?.trim() || l.title,
                    conversationId: l.conversation_id,
                    lastPublishedRunAt: l.last_run_time,
                    status: d,
                    lastRun: r,
                    needsAttention:
                      null != r &&
                      o?.run.id === r.id &&
                      o.latest_update?.metadata.automation_requires_user_action === !0,
                  },
                ]
              )
            })
          return { status: p, tasks: g }
        },
        { autoDispose: !0, isEqual: l() },
      )
    function y(e, t) {
      return null == e ? t : (!(e instanceof m.fk) || !(e.status >= 400) || !(e.status < 500)) && g.D.THIRTY_SECONDS
    }
    n.d(t, {}, { $T: j, DU: f, Wq: h, d2: x })
  },
  idBd(e, t, n) {
    var a = n("qmMi"),
      l = n("OWtl"),
      i = n("OMIV")
    let s = (0, a.un)(l.u, ({ get: e }) => e(i.JW, "2560869814"))
    function r(e, t) {
      let n = e?.getExperiment("2555478962", t).value,
        a = n?.show_recipient_checkbox === !0
      return { showRecipientCheckbox: a, enableSlidesSideChats: a && n?.enable_slides_side_chats === !0 }
    }
    let o = (0, a.A4)(
        l.u,
        (e, { get: t }) => r(t(i.M9), { disableExposureLog: !0 }),
        (e, { get: t, set: n }) => {
          let a = t(i.M9)
          if (null == a) return
          let l = () => n(r(a, e))
          return (e.disableExposureLog || l(), a.on("values_updated", l), () => a.off("values_updated", l))
        },
      ),
      d = (0, a.i1)(l.u, (e, { get: t }) => t(o, e).showRecipientCheckbox),
      c = (0, a.i1)(l.u, (e, { get: t }) => t(o, e).enableSlidesSideChats)
    n.d(t, {}, { Lr: c, U_: d, _A: s })
  },
  yo35(e, t, n) {
    n.d(t, { J: () => T, q: () => E })
    var a = n("ABep"),
      l = n("QosV"),
      i = n("wTzC"),
      s = n("qmMi"),
      r = n("zd8w"),
      o = n("Wf1j"),
      d = n("oyxz"),
      c = n("jguW"),
      u = n("HdXD"),
      p = n("Sm6l"),
      g = n("la9L"),
      m = n("bVeK"),
      h = n("X6Vn"),
      x = n("ZiSI"),
      f = n("v7qY"),
      v = n("SPnB"),
      b = n("OWtl"),
      j = n("YCKz")
    function y(e) {
      let t,
        n = (0, l.c)(3),
        { children: i } = e,
        s = (0, r.useContext)(j.Qi)
      return (
        n[0] !== i || n[1] !== s
          ? ((t = null == s ? i : (0, f.createPortal)((0, a.jsx)("div", { className: "p-4", children: i }), s)),
            (n[0] = i),
            (n[1] = s),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function _(e) {
      let t,
        n,
        a = (0, l.c)(5),
        { pageId: i } = e,
        o = (0, s.gh)(b.u),
        d = (0, r.useContext)(j.HE)
      return (
        a[0] !== d || a[1] !== i || a[2] !== o
          ? ((t = () => {
              let e = o.get(v.chatGptAuthenticatedAccountId$),
                t = o.get(v.o8)
              if (null == d || null == e || null == t) return
              let n = { accountId: e, userId: t, pageId: i, mountId: d },
                a = { sequence: 0, failed: !0 }
              return (
                o.set(j.IL, n, a),
                () => {
                  o.get(j.IL, n) === a && o.set(j.IL, n, null)
                }
              )
            }),
            (n = [d, i, o]),
            (a[0] = d),
            (a[1] = i),
            (a[2] = o),
            (a[3] = t),
            (a[4] = n))
          : ((t = a[3]), (n = a[4])),
        (0, r.useLayoutEffect)(t, n),
        null
      )
    }
    var w = n("NraH"),
      I = n("udTg"),
      S = n("ShyJ"),
      A = n("tv8P"),
      C = n("zHUD"),
      P = n("piij"),
      k = n("r7I2"),
      M = n("Ky5X"),
      N = n("gaGc")
    function T(e) {
      let t,
        n,
        s,
        c,
        h,
        f,
        v,
        b,
        j = (0, l.c)(43),
        I = (0, o.A)(),
        [S, A] = (0, r.useState)(null)
      j[0] !== e.errorCode || j[1] !== e.session
        ? ((t = "page_room_full" === e.errorCode || e.session?.getSnapshot().errorCode === "page_room_full"),
          (j[0] = e.errorCode),
          (j[1] = e.session),
          (j[2] = t))
        : (t = j[2])
      let C = t
      j[3] !== e.onBack || j[4] !== e.onRetry
        ? ((n = (0, a.jsx)(M._, { onRetry: e.onRetry, onBack: e.onBack })),
          (j[3] = e.onBack),
          (j[4] = e.onRetry),
          (j[5] = n))
        : (n = j[5])
      let k = n
      if (C && null != e.session && !1 !== e.visible) {
        let t
        ;(j[6] !== e.onBack || j[7] !== e.onRetry || j[8] !== e.session
          ? ((t = (0, a.jsx)(O, { session: e.session, onRetry: e.onRetry, onBack: e.onBack })),
            (j[6] = e.onBack),
            (j[7] = e.onRetry),
            (j[8] = e.session),
            (j[9] = t))
          : (t = j[9]),
          (k = t))
      }
      ;(j[10] !== e.pageId || j[11] !== C
        ? ((s = !C && (0, a.jsx)(_, { pageId: e.pageId })), (j[10] = e.pageId), (j[11] = C), (j[12] = s))
        : (s = j[12]),
        j[13] !== e.experience || j[14] !== e.kind || j[15] !== e.visible
          ? ((c = !1 !== e.visible && (0, a.jsx)(u.vw, { tracker: e.experience, kind: e.kind ?? "load" })),
            (j[13] = e.experience),
            (j[14] = e.kind),
            (j[15] = e.visible),
            (j[16] = c))
          : (c = j[16]))
      let N = e.notice?.reason,
        T = e.kind ?? "load"
      j[17] !== e.errorCode || j[18] !== e.notice || j[19] !== e.session
        ? ((h = e.notice ? e.notice.pagesErrorCode : (e.errorCode ?? e.session?.getSnapshot().errorCode ?? void 0)),
          (j[17] = e.errorCode),
          (j[18] = e.notice),
          (j[19] = e.session),
          (j[20] = h))
        : (h = j[20])
      let E = e.recoveryUi ?? ("sync" === e.kind ? "notice" : "screen")
      return (
        j[21] !== e.documentType ||
        j[22] !== e.error ||
        j[23] !== e.experience ||
        j[24] !== e.pageId ||
        j[25] !== e.session ||
        j[26] !== e.visible ||
        j[27] !== N ||
        j[28] !== T ||
        j[29] !== h ||
        j[30] !== E
          ? ((f = (0, a.jsx)(w.It, {
              noticeReason: N,
              pageId: e.pageId,
              visible: e.visible,
              tracker: e.experience,
              kind: T,
              operation: "pages.realtime.notice",
              errorUiType: i.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_CONNECTION_ERROR,
              documentType: e.documentType,
              session: e.session,
              error: e.error,
              pagesErrorCode: h,
              recoveryUi: E,
            })),
            (j[21] = e.documentType),
            (j[22] = e.error),
            (j[23] = e.experience),
            (j[24] = e.pageId),
            (j[25] = e.session),
            (j[26] = e.visible),
            (j[27] = N),
            (j[28] = T),
            (j[29] = h),
            (j[30] = E),
            (j[31] = f))
          : (f = j[31]),
        j[32] !== S || j[33] !== I || j[34] !== e || j[35] !== C || j[36] !== k
          ? ((v = C
              ? (0, a.jsx)(y, { children: k })
              : (0, a.jsx)(x.X, {
                  compact: "sync" === e.kind,
                  embedded: !0,
                  illustration: P,
                  title: (0, a.jsx)(d.A, {
                    id: "codex.space.page.connectionFailed.byDocumentType",
                    values: { documentType: e.documentType ?? "page" },
                    defaultMessage:
                      "{documentType, select, granola_presentation {We\u2019re having trouble loading this slide} granola_workbook {We\u2019re having trouble loading this sheet} other {We\u2019re having trouble loading this page}}",
                  }),
                  description: (0, a.jsx)("p", {
                    className: "text-base text-secondary",
                    children: (0, a.jsx)(d.A, {
                      id: "codex.space.page.connectionHelp",
                      defaultMessage: "Check your connection and try again",
                    }),
                  }),
                  actions: (0, a.jsxs)(a.Fragment, {
                    children: [
                      e.actions ??
                        (0, a.jsx)(p.$, {
                          size: "large",
                          onClick: () => {
                            let t = e.experience?.startRetry()
                            ;(e.onRetry(), t?.requestCompleted())
                          },
                          children: (0, a.jsx)(d.A, {
                            id: "codex.space.page.connectionTryAgain",
                            defaultMessage: "Try again",
                          }),
                        }),
                      !1,
                    ],
                  }),
                  details: (0, a.jsxs)("details", {
                    className: "group w-full max-w-md text-start",
                    onToggle: (t) => {
                      let n = e.session?.getConnectionEndpoint() ?? null
                      A(
                        t.currentTarget.open
                          ? JSON.stringify(
                              {
                                protocol: null == n ? "unknown" : "WebSocket",
                                endpoint: n,
                                page_id: e.pageId,
                                captured_at: new Date().toISOString(),
                                error_code:
                                  e.session?.getSnapshot().errorCode ?? e.errorCode ?? "page_connection_failed",
                              },
                              null,
                              2,
                            )
                          : null,
                      )
                    },
                    children: [
                      (0, a.jsxs)("summary", {
                        className:
                          "mx-auto flex w-fit cursor-interaction items-center gap-1 text-xs font-medium text-tertiary select-none",
                        children: [
                          (0, a.jsx)(d.A, {
                            id: "codex.space.page.connectionItDetails",
                            defaultMessage: "Details for IT",
                          }),
                          (0, a.jsx)(m.HIf, { className: "-rotate-90 group-open:rotate-0" }),
                        ],
                      }),
                      null != S &&
                        (0, a.jsxs)("div", {
                          className: "mt-4 flex min-w-0 flex-col gap-3",
                          role: "region",
                          "aria-label": I.formatMessage(
                            {
                              id: "codex.space.page.connectionDiagnostics.byDocumentType",
                              defaultMessage:
                                "{documentType, select, granola_presentation {Slide connection diagnostics} granola_workbook {Sheet connection diagnostics} other {Page connection diagnostics}}",
                            },
                            { documentType: e.documentType ?? "page" },
                          ),
                          children: [
                            (0, a.jsx)("p", {
                              className: "text-sm text-secondary",
                              children: (0, a.jsx)(d.A, {
                                id: "codex.space.page.connectionItGuidance",
                                defaultMessage:
                                  "If this keeps happening, your IT team may need to check your network settings. Share these details with them.",
                              }),
                            }),
                            (0, a.jsx)(g.CodeSnippet, {
                              content: S,
                              language: "json",
                              shouldWrapCode: !0,
                              title: (0, a.jsx)(d.A, {
                                id: "codex.space.page.connectionDetailsTitle",
                                defaultMessage: "Connection details",
                              }),
                              copyButtonText: I.formatMessage({
                                id: "codex.space.page.connectionCopyDetails",
                                defaultMessage: "Copy details",
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                })),
            (j[32] = S),
            (j[33] = I),
            (j[34] = e),
            (j[35] = C),
            (j[36] = k),
            (j[37] = v))
          : (v = j[37]),
        j[38] !== s || j[39] !== c || j[40] !== f || j[41] !== v
          ? ((b = (0, a.jsxs)(a.Fragment, { children: [s, c, f, v] })),
            (j[38] = s),
            (j[39] = c),
            (j[40] = f),
            (j[41] = v),
            (j[42] = b))
          : (b = j[42]),
        b
      )
    }
    function E(e) {
      let t,
        n,
        i,
        o,
        c,
        u,
        g,
        m,
        x,
        f,
        v,
        b,
        j = (0, l.c)(43)
      j[0] !== e
        ? (({
            children: t,
            loading: u,
            failed: g,
            keepContent: m,
            loadingClock: i,
            pendingHost: c,
            onRetry: o,
            allowReload: x,
            ...n
          } = e),
          (j[0] = e),
          (j[1] = t),
          (j[2] = n),
          (j[3] = i),
          (j[4] = o),
          (j[5] = c),
          (j[6] = u),
          (j[7] = g),
          (j[8] = m),
          (j[9] = x))
        : ((t = j[1]), (n = j[2]), (i = j[3]), (o = j[4]), (c = j[5]), (u = j[6]), (g = j[7]), (m = j[8]), (x = j[9]))
      let y = void 0 === u || u,
        _ = void 0 !== g && g,
        w = void 0 !== m && m,
        S = void 0 !== x && x
      j[10] === Symbol.for("react.memo_cache_sentinel") ? ((f = { enabled: !1 }), (j[10] = f)) : (f = j[10])
      let P = (0, s._U)(y && !_ ? A.spacePageQuery$ : null, e.pageId, f),
        M = (0, h.LL)(C.G),
        { stalled: E, restart: O } = (0, N.D)(y && !_, i),
        [R, U] = (0, r.useState)(!1)
      if (y && !_ && ((0, I.zO)(P?.failureReason) || (0, I.zO)(e.session?.getSnapshot().loadError))) {
        let e
        return (
          j[11] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(k.O, {})), (j[11] = e)) : (e = j[11]),
          e
        )
      }
      j[12] !== o || j[13] !== O
        ? ((v = () => {
            ;(O(), null != o ? (U(!0), o()) : window.location.reload())
          }),
          (j[12] = o),
          (j[13] = O),
          (j[14] = v))
        : (v = j[14])
      let F = v,
        W = c?.Pending
      if (null != W && null != c && y && !_ && !M) {
        let n,
          l,
          i = !E && t,
          s = E ? F : void 0
        return (
          j[15] !== W || j[16] !== c || j[17] !== e.pageId || j[18] !== e.session || j[19] !== e.visible || j[20] !== s
            ? ((n = (0, a.jsx)(W, {
                host: c,
                pageId: e.pageId,
                session: e.session,
                visible: e.visible,
                documentType: "page",
                onRetry: s,
              })),
              (j[15] = W),
              (j[16] = c),
              (j[17] = e.pageId),
              (j[18] = e.session),
              (j[19] = e.visible),
              (j[20] = s),
              (j[21] = n))
            : (n = j[21]),
          j[22] !== i || j[23] !== n
            ? ((l = (0, a.jsxs)(a.Fragment, { children: [i, n] })), (j[22] = i), (j[23] = n), (j[24] = l))
            : (l = j[24]),
          l
        )
      }
      if (!y || (!_ && !E) || M) {
        let e
        return (
          j[25] !== t ? ((e = (0, a.jsx)(a.Fragment, { children: t })), (j[25] = t), (j[26] = e)) : (e = j[26]),
          e
        )
      }
      let L = n.actions
      if (null == L && S && (null == o || R)) {
        let t
        ;(j[27] !== e.session || j[28] !== e.visible
          ? ((t = (0, a.jsx)(D, { session: e.session, visible: e.visible })),
            (j[27] = e.session),
            (j[28] = e.visible),
            (j[29] = t))
          : (t = j[29]),
          (L = t))
      }
      if (w && !_) {
        let e, n, l
        return (
          j[30] !== L || j[31] !== F
            ? ((e =
                L ??
                (0, a.jsx)(p.$, {
                  onClick: F,
                  children: (0, a.jsx)(d.A, { id: "codex.space.page.connectionTryAgain", defaultMessage: "Try again" }),
                })),
              (j[30] = L),
              (j[31] = F),
              (j[32] = e))
            : (e = j[32]),
          j[33] !== e
            ? ((n = (0, a.jsx)("div", { className: "flex justify-center p-2", children: e })), (j[33] = e), (j[34] = n))
            : (n = j[34]),
          j[35] !== t || j[36] !== n
            ? ((l = (0, a.jsxs)(a.Fragment, { children: [t, n] })), (j[35] = t), (j[36] = n), (j[37] = l))
            : (l = j[37]),
          l
        )
      }
      let B = e.errorCode ?? (_ ? "page_load_failed" : "page_load_timeout")
      return (
        j[38] !== L || j[39] !== n || j[40] !== F || j[41] !== B
          ? ((b = (0, a.jsx)("div", {
              className: "flex min-h-0 flex-1 items-center justify-center p-4",
              children: (0, a.jsx)(T, { ...n, actions: L, errorCode: B, onRetry: F }),
            })),
            (j[38] = L),
            (j[39] = n),
            (j[40] = F),
            (j[41] = B),
            (j[42] = b))
          : (b = j[42]),
        b
      )
    }
    function D(e) {
      let t,
        n,
        s,
        o,
        c,
        u,
        g = (0, l.c)(18),
        [m, h] = (0, r.useState)("idle"),
        [x, f] = (0, r.useState)()
      g[0] !== e.session || g[1] !== m
        ? ((t = async () => {
            if ("saving" !== m) {
              h("saving")
              try {
                ;(null != e.session && (await (0, S.y)(e.session)), window.location.reload())
              } catch (e) {
                ;(f(e), h("failed"))
              }
            }
          }),
          (g[0] = e.session),
          (g[1] = m),
          (g[2] = t))
        : (t = g[2])
      let v = t,
        b = "saving" === m,
        j = "saving" === m
      return (
        g[3] !== v ? ((n = () => void v()), (g[3] = v), (g[4] = n)) : (n = g[4]),
        g[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(d.A, { id: "codex.space.page.loading.reload", defaultMessage: "Reload" })), (g[5] = s))
          : (s = g[5]),
        g[6] !== b || g[7] !== j || g[8] !== n
          ? ((o = (0, a.jsx)(p.$, { size: "large", disabled: b, loading: j, onClick: n, children: s })),
            (g[6] = b),
            (g[7] = j),
            (g[8] = n),
            (g[9] = o))
          : (o = g[9]),
        g[10] !== x || g[11] !== e.session || g[12] !== e.visible || g[13] !== m
          ? ((c =
              "failed" === m &&
              (0, a.jsxs)("div", {
                role: "alert",
                className: "text-sm text-secondary",
                children: [
                  (0, a.jsx)(w.O, {
                    visible: e.visible,
                    errorUiPresentation: "connection_help",
                    operation: "pages.cache.flush",
                    errorUiType: i.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_LOCAL_SAVE_FAILED,
                    error: x,
                    session: e.session,
                  }),
                  (0, a.jsx)(d.A, { ...S.F }),
                ],
              })),
            (g[10] = x),
            (g[11] = e.session),
            (g[12] = e.visible),
            (g[13] = m),
            (g[14] = c))
          : (c = g[14]),
        g[15] !== o || g[16] !== c
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [o, c] })), (g[15] = o), (g[16] = c), (g[17] = u))
          : (u = g[17]),
        u
      )
    }
    function O(e) {
      let t,
        n,
        i = (0, l.c)(6)
      i[0] !== e.session.hasDeferredLocalEdits
        ? ((t = (t) => t.pendingUpdates > 0 || e.session.hasDeferredLocalEdits),
          (i[0] = e.session.hasDeferredLocalEdits),
          (i[1] = t))
        : (t = i[1])
      let s = (0, c.useSyncExternalStoreWithSelector)(
        e.session.subscribe,
        e.session.getSnapshot,
        e.session.getServerSnapshot,
        t,
      )
      return (
        i[2] !== s || i[3] !== e.onBack || i[4] !== e.onRetry
          ? ((n = (0, a.jsx)(M._, { onRetry: e.onRetry, onBack: e.onBack, keepOpen: s })),
            (i[2] = s),
            (i[3] = e.onBack),
            (i[4] = e.onRetry),
            (i[5] = n))
          : (n = i[5]),
        n
      )
    }
  },
  r7I2(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("oyxz"),
      s = n("FrrB")
    n.d(
      t,
      {},
      {
        O: function () {
          let e,
            t = (0, l.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(s.A, {
                  layout: "page",
                  title: (0, a.jsx)("span", {
                    role: "status",
                    children: (0, a.jsx)(i.A, {
                      id: "pages.document.movePending",
                      defaultMessage: "This page is being moved",
                    }),
                  }),
                  description: (0, a.jsx)(i.A, {
                    id: "pages.document.movePendingRetry",
                    defaultMessage: "We\u2019ll try again automatically",
                  }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  Ky5X(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("oyxz"),
      s = n("Ywss"),
      r = n("MM0V"),
      o = n("Sm6l")
    n.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            n,
            d,
            c,
            u,
            p,
            g,
            m,
            h,
            x,
            f,
            v = (0, l.c)(22),
            { onRetry: b, onBack: j, keepOpen: y } = e,
            _ = void 0 !== y && y,
            w = (0, s.Zp)()
          return (
            v[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(i.A, { id: "pages.roomFull.title", defaultMessage: "This page is busy" })),
                (n = (0, a.jsx)(i.A, {
                  id: "pages.roomFull.message",
                  defaultMessage:
                    "Editing and live updates are paused. We\u2019ll reconnect automatically when a spot opens.",
                })),
                (v[0] = t),
                (v[1] = n))
              : ((t = v[0]), (n = v[1])),
            v[2] !== _
              ? ((d =
                  _ &&
                  (0, a.jsx)("p", {
                    className: "mt-2 text-sm text-secondary",
                    children: (0, a.jsx)(i.A, {
                      id: "pages.roomFull.pending",
                      defaultMessage:
                        "Your unsaved changes are kept in this tab. Keep it open until they\u2019re saved.",
                    }),
                  })),
                (v[2] = _),
                (v[3] = d))
              : (d = v[3]),
            v[4] !== d ? ((c = (0, a.jsxs)("div", { children: [n, d] })), (v[4] = d), (v[5] = c)) : (c = v[5]),
            v[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, a.jsx)(i.A, { id: "pages.roomFull.retry", defaultMessage: "Try again" })), (v[6] = u))
              : (u = v[6]),
            v[7] !== b
              ? ((p = (0, a.jsx)(o.$, { color: "secondary", size: "recoveryAction", onClick: b, children: u })),
                (v[7] = b),
                (v[8] = p))
              : (p = v[8]),
            v[9] !== w || v[10] !== j
              ? ((g = j ?? (() => void w(-1))), (v[9] = w), (v[10] = j), (v[11] = g))
              : (g = v[11]),
            v[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, a.jsx)(i.A, { id: "pages.roomFull.back", defaultMessage: "Back" })), (v[12] = m))
              : (m = v[12]),
            v[13] !== _ || v[14] !== g
              ? ((h = (0, a.jsx)(o.$, {
                  color: "ghost",
                  size: "recoveryAction",
                  disabled: _,
                  onClick: g,
                  children: m,
                })),
                (v[13] = _),
                (v[14] = g),
                (v[15] = h))
              : (h = v[15]),
            v[16] !== h || v[17] !== p
              ? ((x = (0, a.jsxs)(a.Fragment, { children: [p, h] })), (v[16] = h), (v[17] = p), (v[18] = x))
              : (x = v[18]),
            v[19] !== x || v[20] !== c
              ? ((f = (0, a.jsx)(r.l, { stackOnNarrow: !0, type: "normal", title: t, content: c, customCtas: x })),
                (v[19] = x),
                (v[20] = c),
                (v[21] = f))
              : (f = v[21]),
            f
          )
        },
      },
    )
  },
  K0Cv(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("pIbZ"),
      s = n("j9wQ")
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            n,
            r,
            o,
            d = (0, l.c)(8)
          d[0] !== e
            ? (({ presentation: n, selected: r, ...t } = e), (d[0] = e), (d[1] = t), (d[2] = n), (d[3] = r))
            : ((t = d[1]), (n = d[2]), (r = d[3]))
          let c = void 0 === n ? "viewer" : n,
            u = void 0 !== r && r
          return (
            d[4] !== c || d[5] !== t || d[6] !== u
              ? ((o =
                  "browse" === c
                    ? (0, a.jsx)(i.p, { ...t, color: "secondary", variant: "ghost", selected: u })
                    : (0, a.jsx)(s.DW, { ...t, variant: u ? "selected" : "default" })),
                (d[4] = c),
                (d[5] = t),
                (d[6] = u),
                (d[7] = o))
              : (o = d[7]),
            o
          )
        },
      },
    )
  },
  zz9z(e, t, n) {
    n.d(t, { V: () => eh })
    var a = n("ABep"),
      l = n("QosV"),
      i = n("on57"),
      s = n("i5ac"),
      r = n.n(s),
      o = n("qmMi"),
      d = n("zd8w"),
      c = n("oyxz"),
      u = n("Wf1j"),
      p = n("Ywss"),
      g = n("TjgH"),
      m = n("Sm6l"),
      h = n("bqtn"),
      x = n("bVeK"),
      f = n("UxN3"),
      v = n("HFg1"),
      b = n("Wj4L"),
      j = n("e1xH"),
      y = n("jAir"),
      _ = n("sx3Q"),
      w = n("hZSj"),
      I = n("I0Cl"),
      S = n("Gmh8"),
      A = n("t6WW"),
      C = n("hiu4"),
      P = n("vpOl"),
      k = n("tv8P"),
      M = n("I0MT"),
      N = n("nDmq"),
      T = n("NnV7"),
      E = n("Zr80"),
      D = n("rwQ5"),
      O = n("eShZ"),
      R = n("YJkW"),
      U = n("OWtl")
    let F = (0, o.z8)("BreadcrumbMenus", { parent: U.u }),
      W = (0, o.vP)(F, () => null),
      L = (0, o.i1)(F, (e, { get: t }) => t(W)?.id === e)
    function B(e) {
      let t,
        n,
        i = (0, l.c)(5),
        { children: s } = e,
        r = (0, d.useId)()
      return (
        i[0] !== r ? ((t = { id: r }), (i[0] = r), (i[1] = t)) : (t = i[1]),
        i[2] !== s || i[3] !== t
          ? ((n = (0, a.jsx)(o.Ui, { scope: F, value: t, children: s })), (i[2] = s), (i[3] = t), (i[4] = n))
          : (n = i[4]),
        n
      )
    }
    function z(e) {
      let t,
        n,
        i,
        s,
        r,
        c,
        u,
        p,
        g,
        x,
        f,
        v,
        b,
        j = (0, l.c)(37),
        { id: y, children: _, enabled: w, triggerButton: I } = e,
        S = void 0 === w || w,
        A = (0, o.gh)(F),
        C = (0, d.useId)(),
        P = y ?? C,
        k = (0, o._U)(L, P),
        M = (0, d.useRef)(null),
        N = (0, d.useRef)(null),
        T = (0, d.useRef)(null),
        E = (0, d.useRef)(null),
        D = (0, d.useRef)(!1),
        O = S && k
      j[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = function () {
            ;(T.current?.(),
              (T.current = null),
              null != E.current && (window.clearTimeout(E.current), (E.current = null)))
          }),
          (j[0] = t))
        : (t = j[0])
      let U = t
      j[1] !== P || j[2] !== A
        ? ((n = function () {
            ;(U(), (D.current = !0), A.set(W, (e) => (e?.id === P ? null : e)))
          }),
          (j[1] = P),
          (j[2] = A),
          (j[3] = n))
        : (n = j[3])
      let B = n
      j[4] !== B || j[5] !== A
        ? ((i = function (e) {
            if ("mouse" !== e.pointerType || A.get(W)?.interaction === "explicit") return
            U()
            let t = M.current,
              n = N.current
            if (null == t || null == n || null == e.relatedTarget) return void B()
            let a = [n]
            for (let e of a) {
              let t = e.querySelector('[role="menuitem"][aria-expanded="true"]')?.getAttribute("aria-controls"),
                n = null == t ? null : e.ownerDocument.getElementById(t)
              null == n || a.includes(n) || a.push(n)
            }
            let l = e.relatedTarget
            if (l instanceof Node && [t, ...a].some((e) => e.contains(l))) return
            let i = n
            e.currentTarget === t
              ? (i = t)
              : e.target instanceof Element && (i = e.target.closest('[role="menu"]') ?? n)
            let s = i.getBoundingClientRect()
            for (let n of i === t ? a.slice(0, 1) : [...a, t]) {
              let a
              if (n === i) continue
              let l = n.getBoundingClientRect()
              if (
                (l.left >= s.right && e.clientX >= s.right
                  ? (a = "right")
                  : l.right <= s.left && e.clientX <= s.left
                    ? (a = "left")
                    : l.top >= s.bottom && (i === t || e.clientY >= s.bottom)
                      ? (a = "bottom")
                      : l.bottom <= s.top && (i === t || e.clientY <= s.top) && (a = "top"),
                null == a)
              )
                continue
              let r = () => {
                ;(null != E.current && window.clearTimeout(E.current), (E.current = window.setTimeout(B, 100)))
              }
              ;((T.current = (0, R.A)({
                destinationElement: n,
                destinationSide: a,
                onEnterDestination: U,
                onMoveInsideTriangle: r,
                onMoveOutsideTriangle: B,
                pointer: { x: e.clientX, y: e.clientY },
                sourceElement: i,
              })),
                r())
              return
            }
            B()
          }),
          (j[4] = B),
          (j[5] = A),
          (j[6] = i))
        : (i = j[6])
      let z = i
      ;(j[7] !== P || j[8] !== A
        ? ((s = (e) => {
            ;(U(),
              e
                ? ((D.current = !1), A.set(W, { id: P, interaction: "explicit" }))
                : A.set(W, (e) => (e?.id === P ? null : e)))
          }),
          (j[7] = P),
          (j[8] = A),
          (j[9] = s))
        : (s = j[9]),
        j[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (e) => (
              (N.current = e),
              () => {
                ;((N.current = null), U())
              }
            )),
            (j[10] = r))
          : (r = j[10]),
        j[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (e) => {
              let t = e.detail.originalEvent.target
              t instanceof Node && M.current?.contains(t) && e.preventDefault()
            }),
            (u = () => {
              D.current = !1
            }),
            (p = (e) => {
              D.current && e.preventDefault()
            }),
            (j[11] = c),
            (j[12] = u),
            (j[13] = p))
          : ((c = j[11]), (u = j[12]), (p = j[13])),
        j[14] !== B
          ? ((g = (e) => {
              if (((M.current = e), null == e)) return
              let t = new ResizeObserver(() => {
                0 === e.getClientRects().length && B()
              })
              return (
                t.observe(e),
                () => {
                  ;(t.disconnect(), U())
                }
              )
            }),
            (j[14] = B),
            (j[15] = g))
          : (g = j[15]),
        j[16] !== S || j[17] !== P || j[18] !== A
          ? ((x = (e) => {
              if (S && "mouse" === e.pointerType) {
                U()
                let e = A.get(W)
                ;(e?.id !== P || "explicit" !== e.interaction) &&
                  ((D.current = !0), A.set(W, { id: P, interaction: "hover" }))
              }
            }),
            (j[16] = S),
            (j[17] = P),
            (j[18] = A),
            (j[19] = x))
          : (x = j[19]),
        j[20] !== P || j[21] !== O || j[22] !== A || j[23] !== I.props
          ? ((f = (e) => {
              ;(I.props.onPointerDown?.(e),
                e.defaultPrevented ||
                  0 !== e.button ||
                  e.ctrlKey ||
                  !O ||
                  A.get(W)?.interaction !== "hover" ||
                  (e.preventDefault(), U(), (D.current = !1), A.set(W, { id: P, interaction: "explicit" })))
            }),
            (j[20] = P),
            (j[21] = O),
            (j[22] = A),
            (j[23] = I.props),
            (j[24] = f))
          : (f = j[24]),
        j[25] !== z || j[26] !== g || j[27] !== x || j[28] !== f || j[29] !== I.props
          ? ((v = (0, a.jsx)(m.$, { ...I.props, ref: g, onPointerEnter: x, onPointerDown: f, onPointerLeave: z })),
            (j[25] = z),
            (j[26] = g),
            (j[27] = x),
            (j[28] = f),
            (j[29] = I.props),
            (j[30] = v))
          : (v = j[30]))
      let Q = O && _
      return (
        j[31] !== z || j[32] !== O || j[33] !== v || j[34] !== Q || j[35] !== s
          ? ((b = (0, a.jsx)(h.Ab, {
              align: "start",
              contentWidth: "menuWide",
              contentMaxHeight: "tall",
              open: O,
              onOpenChange: s,
              contentRef: r,
              onContentFocus: $,
              onContentPointerEnter: U,
              onContentPointerLeave: z,
              onInteractOutside: c,
              onEscapeKeyDown: u,
              onCloseAutoFocus: p,
              triggerButton: v,
              children: Q,
            })),
            (j[31] = z),
            (j[32] = O),
            (j[33] = v),
            (j[34] = Q),
            (j[35] = s),
            (j[36] = b))
          : (b = j[36]),
        b
      )
    }
    function $(e) {
      e.target === e.currentTarget &&
        e.currentTarget
          .querySelector("[data-breadcrumb-highlighted]")
          ?.closest('[role="menuitem"]')
          ?.focus({ preventScroll: !0 })
    }
    function Q(e) {
      let t,
        n,
        i = (0, l.c)(5),
        { children: s, icon: r } = e
      return (
        i[0] !== s
          ? ((t = (0, a.jsx)("span", {
              ref: K,
              className:
                "block w-full min-w-0 overflow-hidden whitespace-nowrap data-[overflowing=true]:text-fade-truncate",
              children: (0, a.jsx)("span", { className: "inline-block", children: s }),
            })),
            (i[0] = s),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== r || i[3] !== t
          ? ((n = (0, a.jsxs)("span", { className: "flex max-w-full min-w-0 items-center gap-1", children: [r, t] })),
            (i[2] = r),
            (i[3] = t),
            (i[4] = n))
          : (n = i[4]),
        n
      )
    }
    function K(e) {
      if (null == e) return
      let t = e.firstElementChild
      if (null == t) return
      let n = 0,
        a = 0,
        l = new ResizeObserver((t) => {
          for (let l of t) l.target === e ? (n = l.contentRect.width) : (a = l.contentRect.width)
          let l = String(Math.round(a) > Math.round(n))
          e.dataset.overflowing !== l && (e.dataset.overflowing = l)
        })
      return (l.observe(e), l.observe(t), () => l.disconnect())
    }
    var V = n("slpy"),
      q = n("E8Sp"),
      H = n("QcW8"),
      G = n("n5iL"),
      X = n("EFj1"),
      Y = n("yf2D"),
      J = n("tnQ4"),
      Z = n("jDEJ"),
      ee = n("rpnz"),
      et = n("NobM"),
      en = n("M14h"),
      ea = n("GtHB"),
      el = n("sX33"),
      ei = n("tSEg"),
      es = n("OMIV"),
      er = n("sqqv"),
      eo = n("HgLj"),
      ed = n("j9wQ"),
      ec = n("oP6N")
    let eu = (0, o.i1)(
      U.u,
      (e, { get: t }) => t(es.JW, "889208228") && t(k.loadedSpacePageMetadata$, e)?.namespace === "skill",
    )
    function ep({
      alwaysShowTitle: e = !1,
      inTitlebar: t = !1,
      items: n,
      hierarchyChildren: l,
      submenuChildren: i,
      titleIcon: s,
      template: r,
      onOpenPage: p,
      title: g,
      pageId: m,
      menu: v,
      triggerButton: b,
      explorer: j,
      onShowContent: y,
      space: _,
    }) {
      let w = (0, o.gh)(ei.GD),
        I = (0, o._U)(eu, m),
        S = (0, o._U)(el.og, m),
        P = (0, u.A)(),
        M = (0, d.useId)(),
        N = (0, d.isValidElement)(b) ? b : null,
        D = N?.props.id ?? M,
        O = (0, d.useRef)(null),
        R = (0, d.useRef)(!1),
        U = (0, d.useRef)(!1),
        F = (0, o._U)(G.X1, "toggleFileTreePanel"),
        W = (0, o.Ul)(k.spaceAccountId$),
        L = (0, o.Ul)(k.pinnedSpacePageIds$),
        B = (0, o.Ul)(k.pinnedSpaceIds$),
        z = (0, o._U)(k.spacePageContext$, m, { enabled: !1 }),
        $ = (0, C.Nq)(z, _) ?? void 0,
        Q = (0, o._U)(en.Xw, m),
        [K, V] = (0, d.useState)(!1),
        es = $?.root_page_id === m ? $ : void 0,
        er = null != es && B.includes(es.id) ? es : void 0,
        em = L.includes(m) || null != er,
        eh = null == es ? $ : void 0,
        ex = null != j || null != y,
        ef = (null != eh && null == l) || ex,
        ev = (0, ee.sD)(m),
        eb = (null == v ? !ev : null != v.editorMenuItems || null != v.actions) && !v?.actionsStartWithSeparator,
        ej = n.at(-1),
        ey = (0, o.Ul)(H.sY),
        e_ = e || !ey?.isVisible
      function ew() {
        ;(V(!1), v?.onOpenChange?.(!1))
      }
      function eI() {
        ;(v?.anchorExplorer && j?.open && null == y && j.onToggle(), V(!0), v?.onOpenChange?.(!0))
      }
      function eS() {
        ;((U.current = !0), ew())
      }
      ;(0, X.K)("toggleFileTreePanel", eS, {
        enabled: ex && (v?.open ?? K),
        isActive: () => {
          let e = O.current
          return e?.contains(e.ownerDocument.activeElement) ?? !1
        },
      })
      let eA =
          null == r
            ? void 0
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  e_ &&
                    (0, a.jsx)("span", {
                      className: "contents",
                      "data-viewer-header-collapsible": !0,
                      children: r.badge,
                    }),
                  (0, a.jsx)("span", {
                    className: ec.A.compactTemplateIcon,
                    "aria-hidden": "true",
                    children: (0, a.jsx)(f.b5, { icon: r.icon }),
                  }),
                ],
              }),
        eC = t
          ? (0, a.jsxs)("span", {
              className: "flex min-w-0 items-center gap-1.5",
              children: [
                eA ?? s,
                (0, a.jsx)("span", { className: "truncate", children: ej?.label }),
                S && (0, a.jsx)(ea.Y, { className: "icon-xs text-secondary" }),
              ],
            })
          : (0, a.jsxs)(ed.C5, {
              badge: eA,
              icon: s ?? v?.icon ?? (0, a.jsx)(f.b5, { icon: { 16: x.oQS, 20: x.hXV } }),
              children: [
                e_ &&
                  (0, a.jsx)("span", {
                    className: "flex max-w-42 min-w-0",
                    "data-viewer-header-collapsible": !e || null == l || void 0,
                    children: (0, a.jsx)(Y.E, { animateOnGroupHover: !0, children: ej?.label }),
                  }),
                S && (0, a.jsx)(ea.Y, { className: "icon-xs text-secondary" }),
              ],
            }),
        eP =
          null == r
            ? void 0
            : P.formatMessage(
                {
                  id: "pages.templates.editor.filenameMenu",
                  defaultMessage: "{kind, select, slides {Slides template} other {Page template}} \u2014 {title}",
                },
                { kind: r.kind, title: g?.trim() || (0, T.S8)(P, g) },
              ),
        ek = (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(h.ms.Item, {
              isActive: !0,
              "aria-current": "page",
              LeftIcon: x.oQS,
              textOverflow: "fade",
              onSelect: () => p(m),
              children: ej?.label,
            }),
            (0, a.jsx)(h.ms.IndentedGroup, { children: l }),
          ],
        }),
        eM = (0, d.useContext)(E.n),
        eN = (null != l || v?.anchorExplorer) && null == y ? j?.setDropdownAnchor : void 0,
        eT = eM ? void 0 : (eN ?? j?.triggerRef),
        eE = (0, d.useMemo)(() => (0, eo.P)(v?.triggerRef, eT), [v?.triggerRef, eT]),
        eD = N?.props.ref,
        eO = (0, d.useMemo)(() => (0, eo.P)(eD, eE), [eD, eE]),
        eR = {
          selected: I,
          id: D,
          ref: eE,
          className: "group max-w-full min-w-0 select-none",
          "aria-label": eP ?? v?.ariaLabel ?? (0, T.S8)(P, g),
          onPointerDown: () => {
            R.current = !0
          },
          onKeyDown: () => {
            R.current = !1
          },
        }
      return null != l && null != j && null == y
        ? (0, a.jsx)(eg, {
            ...eR,
            inTitlebar: t,
            "aria-haspopup": "dialog",
            plain: !1,
            menuOpen: j.open,
            tooltipContent: ej?.label,
            "aria-expanded": j.open,
            onClick: j.onToggle,
            onKeyDown: (e) => {
              "ArrowDown" !== e.key || j.open || (e.preventDefault(), j.onToggle())
            },
            children: eC,
          })
        : (0, a.jsx)(ed.OZ, {
            open: v?.open ?? K,
            onOpenChange: (e) => (e ? eI() : ew()),
            triggerButton:
              null != N
                ? (0, d.cloneElement)(N, {
                    ref: eO,
                    "aria-label": eP ?? N.props["aria-label"],
                    children:
                      null == r
                        ? N.props.children
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("span", { className: "me-1.5 shrink-0", children: r.badge }),
                              N.props.children,
                            ],
                          }),
                    onPointerDown: (e) => {
                      ;((R.current = !0), N.props.onPointerDown?.(e), 0 !== e.button || e.ctrlKey || e.preventDefault())
                    },
                    onClick: (e) => {
                      ;(N.props.onClick?.(e),
                        (e.ctrlKey && (0, Z.Z)()) ||
                          (e.detail <= 1 && (0 === e.detail || !(v?.open ?? K)) ? eI() : ew()))
                    },
                    onKeyDown: (e) => {
                      ;((R.current = !1),
                        N.props.onKeyDown?.(e),
                        e.defaultPrevented ||
                          ("Enter" !== e.key && " " !== e.key) ||
                          (e.preventDefault(), e.currentTarget.click()))
                    },
                  })
                : (0, a.jsx)(eg, {
                    ...eR,
                    inTitlebar: t,
                    plain: null == v && null == l,
                    menuOpen: v?.open ?? K,
                    tooltipContent: ej?.label,
                    children: eC,
                  }),
            contentRef: O,
            contentRole: "menu",
            contentAriaLabelledBy: D,
            align: null == l ? void 0 : "start",
            alignOffset: null == l ? void 0 : 0,
            contentWidth: null == l ? "menu" : "menuReadout",
            contentClassName:
              null == l
                ? void 0
                : "[--app-menu-gutter:6px] [--app-menu-item-height:28px] [--app-menu-item-padding:4px_8px]",
            contentMaxHeight: "available",
            scrollPeek: !0,
            onCloseAutoFocus: (e) => {
              if ((v?.onCloseAutoFocus?.(e), U.current)) {
                ;((U.current = !1), e.preventDefault(), null != y ? y() : j?.onToggle())
                return
              }
              R.current && e.preventDefault()
            },
            onContentPointerDownCapture: () => {
              R.current = !0
            },
            onContentKeyDownCapture: () => {
              R.current = !1
            },
            children: (0, a.jsxs)(a.Fragment, {
              children: [
                v?.beforeNavigation,
                v?.separateBeforeNavigation && (ef || eb) && (0, a.jsx)(h.ms.Separator, {}),
                null != l && ek,
                ef &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      null != l && (0, a.jsx)(h.ms.Separator, {}),
                      null != eh &&
                        (null == l || null != y) &&
                        (0, a.jsx)(h.ms.Item, {
                          leftIcon: (0, a.jsx)(A.O, { spaceId: eh.id, size: "leading" }),
                          onClick: () => {
                            w.get(k.spaceAccountId$) === W &&
                              ((0, q.oo)(w, `/spaces/${eh.id}`, {
                                state: { sidebarArea: "space", spaceSidebarAccountId: W },
                              }),
                              ew())
                          },
                          children: eh.name,
                        }),
                      null != i &&
                        (0, a.jsx)(ed.Gs, {
                          label: (0, a.jsx)(c.A, { id: "codex.pageExplorer.heading", defaultMessage: "Pages" }),
                          leftIcon: (0, a.jsx)(f.b5, { icon: { 16: x.gYX, 20: x.pXz } }),
                          contentWidth: "panel",
                          children: i,
                        }),
                      ex &&
                        null == i &&
                        (0, a.jsx)(h.ms.Item, {
                          keyboardShortcut: F,
                          leftIcon: (0, a.jsx)(f.b5, { icon: { 16: x.gYX, 20: x.pXz } }),
                          onClick: eS,
                          children:
                            null == y && j?.open
                              ? (0, a.jsx)(c.A, {
                                  id: "codex.space.page.navigation.hidePages",
                                  defaultMessage: "Hide pages",
                                })
                              : (0, a.jsx)(c.A, {
                                  id: "codex.space.page.navigation.showPages",
                                  defaultMessage: "Show pages",
                                }),
                        }),
                      null == l && eb && (0, a.jsx)(h.ms.Separator, {}),
                    ],
                  }),
                null == l &&
                  null == v &&
                  !ev &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(h.ms.Item, {
                        onClick: () => {
                          w.get(k.spaceAccountId$) === W &&
                            (null != er && (0, k.setSpacePinned)(w, er.id, !1),
                            (0, k.setSpacePagePinned)(w, m, !em),
                            ew())
                        },
                        children: (0, a.jsx)(J.s, {
                          leftIcon: em ? (0, a.jsx)(x.ASU, {}) : (0, a.jsx)(x.P0k, {}),
                          children: em
                            ? (0, a.jsx)(c.A, {
                                id: "codex.space.page.navigation.unpinPage",
                                defaultMessage: "Unpin from sidebar",
                              })
                            : (0, a.jsx)(c.A, {
                                id: "codex.space.page.navigation.pinPage",
                                defaultMessage: "Pin to sidebar",
                              }),
                        }),
                      }),
                      (0, a.jsx)(h.ms.Item, {
                        onClick: () => {
                          ;((0, en.LE)(w, Q, void 0, { spaceId: es?.id }), ew())
                        },
                        children: (0, a.jsx)(J.s, {
                          leftIcon: (0, a.jsx)(x.ibM, {}),
                          children: (0, a.jsx)(c.A, { ...et.Nh.copyLink }),
                        }),
                      }),
                    ],
                  }),
                v?.editorMenuItems,
                v?.actions,
              ],
            }),
          })
    }
    function eg(e) {
      let t,
        n,
        i,
        s,
        r,
        o,
        c,
        u,
        p,
        g = (0, l.c)(27)
      if (
        (g[0] !== e
          ? (({ selected: o, plain: s, inTitlebar: n, menuOpen: i, tooltipContent: c, children: t, ...r } = e),
            (g[0] = e),
            (g[1] = t),
            (g[2] = n),
            (g[3] = i),
            (g[4] = s),
            (g[5] = r),
            (g[6] = o),
            (g[7] = c))
          : ((t = g[1]), (n = g[2]), (i = g[3]), (s = g[4]), (r = g[5]), (o = g[6]), (c = g[7])),
        (0, d.useContext)(E.n) && null != r["aria-label"])
      ) {
        let e,
          t = r["aria-label"]
        ;(g[8] !== r || g[9] !== o || g[10] !== t
          ? ((e = (0, a.jsx)(D.s, { ...r, selected: o, label: t })), (g[8] = r), (g[9] = o), (g[10] = t), (g[11] = e))
          : (e = g[11]),
          (u = e))
      } else if (n) {
        let e
        ;(g[12] !== t || g[13] !== r
          ? ((e = (0, a.jsx)(er.x, { ...r, title: t })), (g[12] = t), (g[13] = r), (g[14] = e))
          : (e = g[14]),
          (u = e))
      } else if (s) {
        let e,
          n = o ? "accentSubtle" : "ghost"
        ;(g[15] !== t || g[16] !== r || g[17] !== n
          ? ((e = (0, a.jsx)(m.$, { ...r, color: n, focusRing: "inset", size: "toolbar", children: t })),
            (g[15] = t),
            (g[16] = r),
            (g[17] = n),
            (g[18] = e))
          : (e = g[18]),
          (u = e))
      } else {
        let e
        ;(g[19] !== t || g[20] !== r || g[21] !== o
          ? ((e = (0, a.jsx)(ed.DW, { ...r, selected: o, variant: "dropdown", children: t })),
            (g[19] = t),
            (g[20] = r),
            (g[21] = o),
            (g[22] = e))
          : (e = g[22]),
          (u = e))
      }
      return (
        g[23] !== u || g[24] !== i || g[25] !== c
          ? ((p = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsx)(V.m, { side: "bottom", disabled: i, content: c, children: u }),
                }),
                null,
              ],
            })),
            (g[23] = u),
            (g[24] = i),
            (g[25] = c),
            (g[26] = p))
          : (p = g[26]),
        p
      )
    }
    let em = "[&>[data-menu-row-content]]:ps-(--page-menu-indent) [overflow-wrap:anywhere]"
    function eh(e) {
      let t,
        n,
        i,
        s,
        r,
        u,
        h,
        y,
        _,
        I,
        S,
        P,
        O,
        R,
        U = (0, l.c)(152),
        {
          alwaysShowTitle: F,
          inTitlebar: W,
          hierarchyMenu: L,
          documentType: B,
          isLeaf: z,
          initialParent: $,
          loadAncestry: K,
          onOpenPage: V,
          onShowContent: q,
          pageId: H,
          space: G,
          title: X,
          menu: Y,
          triggerButton: J,
          explorer: Z,
        } = e,
        ee = void 0 !== L && L,
        et = void 0 !== z && z,
        en = void 0 === K || K,
        ea = (0, p.RQ)("/space/:pageId"),
        el = (0, d.useContext)(E.n),
        ei = (0, o.Ul)(j.pagesEnabled$),
        es = (0, o.Ul)(k.spaceAccountId$)
      U[0] !== en ? ((t = { enabled: en }), (U[0] = en), (U[1] = t)) : (t = U[1])
      let er = (0, o._U)(k.spacePageContext$, H, t),
        eo = (0, o._U)(M.pL, H),
        ed = (B ?? eo?.document_type) === "granola_presentation" ? "slides" : "page"
      U[2] !== ed
        ? ((n = "slides" === ed ? v.Q.presentation : { 16: x.oQS, 20: x.hXV }), (U[2] = ed), (U[3] = n))
        : (n = U[3])
      let eu = n
      U[4] !== eo?.namespace
        ? ((i =
            eo?.namespace === "template"
              ? (0, a.jsx)(g.E, {
                  variant: "promotion",
                  className: ec.A.templateLabel,
                  children: (0, a.jsx)(c.A, { id: "pages.templates.editor.badge", defaultMessage: "Template" }),
                })
              : null),
          (U[4] = eo?.namespace),
          (U[5] = i))
        : (i = U[5])
      let eg = i,
        em = er.missingAncestorPageId === H ? $ : void 0
      U[6] !== en ? ((s = { enabled: en }), (U[6] = en), (U[7] = s)) : (s = U[7])
      let eh = (0, o._U)(k.spacePageContext$, em?.page_id ?? null, s)
      U[8] !== er.ancestorPages || U[9] !== em || U[10] !== eh
        ? ((r = null == em ? er.ancestorPages : [...eh.ancestorPages, em]),
          (U[8] = er.ancestorPages),
          (U[9] = em),
          (U[10] = eh),
          (U[11] = r))
        : (r = U[11])
      let e_ = r,
        ew = null == em ? er : eh
      U[12] !== ew || U[13] !== G
        ? ((u = (0, C.Nq)(ew, G) ?? void 0), (U[12] = ew), (U[13] = G), (U[14] = u))
        : (u = U[14])
      let eI = u,
        eA = G?.root_page_id === H || eI?.root_page_id === H,
        eC = en && !eA && null != ew.missingAncestorPageId
      U[15] !== eC ? ((h = { enabled: eC }), (U[15] = eC), (U[16] = h)) : (h = U[16])
      let {
        isError: eP,
        isFetching: eM,
        refetch: eN,
      } = (0, o._U)(k.spacePageAncestryQuery$, ew.missingAncestorPageId ?? H, h)
      U[17] !== eP || U[18] !== ew.missingAncestorPageId || U[19] !== eo || U[20] !== eN || U[21] !== eM
        ? ((y =
            eP && null != ew.missingAncestorPageId && eo?.access.can_read === !0
              ? (0, a.jsx)(m.$, {
                  color: "ghost",
                  size: "toolbar",
                  disabled: eM,
                  onClick: () => void eN({ cancelRefetch: !1 }),
                  children: (0, a.jsx)(c.A, {
                    id: "toolbarBreadcrumb.retryNavigation",
                    defaultMessage: "Retry navigation",
                  }),
                })
              : null),
          (U[17] = eP),
          (U[18] = ew.missingAncestorPageId),
          (U[19] = eo),
          (U[20] = eN),
          (U[21] = eM),
          (U[22] = y))
        : (y = U[22])
      let eT = y
      if (!ee && null == Y && ea?.params.pageId === H && (0, w.x)(ea.pattern.path)) {
        let e, t
        return (
          U[23] !== eI
            ? ((e =
                null == eI ? null : (0, a.jsx)(Q, { icon: (0, a.jsx)(A.O, { spaceId: eI.id }), children: eI.name })),
              (U[23] = eI),
              (U[24] = e))
            : (e = U[24]),
          U[25] !== eT || U[26] !== e || U[27] !== eg
            ? ((t = (0, a.jsxs)(a.Fragment, { children: [eg, e, eT] })),
              (U[25] = eT),
              (U[26] = e),
              (U[27] = eg),
              (U[28] = t))
            : (t = U[28]),
          t
        )
      }
      if (
        (U[29] !== eP ||
        U[30] !== ew.hierarchyStatus ||
        U[31] !== ew.missingAncestorPageId ||
        U[32] !== eA ||
        U[33] !== eI
          ? ((_ = ew.hierarchyStatus),
            null != ew.missingAncestorPageId && eP
              ? (_ = "unavailable")
              : eA
                ? (_ = "ready")
                : "loading" === _ && null != eI && null == ew.missingAncestorPageId && (_ = "ready"),
            (U[29] = eP),
            (U[30] = ew.hierarchyStatus),
            (U[31] = ew.missingAncestorPageId),
            (U[32] = eA),
            (U[33] = eI),
            (U[34] = _))
          : (_ = U[34]),
        ei && !et)
      ) {
        let e, t, n, l, i, s, r, o, d
        if (
          U[35] !== e_ ||
          U[36] !== X ||
          U[37] !== B ||
          U[38] !== Z ||
          U[39] !== ee ||
          U[40] !== eA ||
          U[41] !== en ||
          U[42] !== Y ||
          U[43] !== eo?.document_type ||
          U[44] !== eo?.namespace ||
          U[45] !== eo?.symbol ||
          U[46] !== V ||
          U[47] !== q ||
          U[48] !== H ||
          U[49] !== eI
        ) {
          let i,
            s = e_.filter(ej)
          if (null != Y || ee) {
            let e
            ;(U[54] !== X ||
            U[55] !== B ||
            U[56] !== eA ||
            U[57] !== en ||
            U[58] !== Y?.icon ||
            U[59] !== eo?.document_type ||
            U[60] !== eo?.namespace ||
            U[61] !== eo?.symbol ||
            U[62] !== H ||
            U[63] !== eI
              ? ((e =
                  eA && null != eI
                    ? (0, a.jsx)(A.O, { loadMissingAppearance: en, spaceId: eI.id, size: "leading" })
                    : (0, a.jsx)(N.s, {
                        pageId: H,
                        documentType: B ?? eo?.document_type,
                        namespace: eo?.namespace,
                        symbol: eo?.symbol,
                        fallbackIcon: (0, a.jsx)("span", {
                          className: "contents",
                          children: Y?.icon ?? (0, a.jsx)(f.b5, { icon: { 16: x.oQS, 20: x.hXV } }),
                        }),
                        title: X ?? "",
                        children: eb,
                      })),
                (U[54] = X),
                (U[55] = B),
                (U[56] = eA),
                (U[57] = en),
                (U[58] = Y?.icon),
                (U[59] = eo?.document_type),
                (U[60] = eo?.namespace),
                (U[61] = eo?.symbol),
                (U[62] = H),
                (U[63] = eI),
                (U[64] = e))
              : (e = U[64]),
              (l = e))
          }
          ;((t = Y?.anchorExplorer && null != Z && null == q),
            U[65] !== X || U[66] !== B || U[67] !== H
              ? ((i =
                  void 0 === X
                    ? (0, a.jsx)(c.A, { id: "codex.space.page.loadingTitle", defaultMessage: "Loading page\u2026" })
                    : (0, a.jsx)(eE, { documentType: B, pageId: H, showIcon: !1, title: X, truncate: !1 })),
                (U[65] = X),
                (U[66] = B),
                (U[67] = H),
                (U[68] = i))
              : (i = U[68]),
            (e = [
              ...s.map((e, n) => ({
                id: e.page_id,
                parentId: s[n - 1]?.page_id,
                icon: t
                  ? (0, a.jsx)(N.s, {
                      documentType: (0, b.mW)(e),
                      pageId: e.page_id,
                      symbol: "symbol" in e ? e.symbol : void 0,
                      title: e.title ?? "",
                      children: ev,
                    })
                  : void 0,
                label: (0, a.jsx)(eE, {
                  documentType: (0, b.mW)(e),
                  pageId: e.page_id,
                  showIcon: !1,
                  title: e.title,
                  truncate: !1,
                }),
              })),
              { id: H, parentId: s.at(-1)?.page_id, icon: t ? l : void 0, label: i },
            ]),
            (n = ee
              ? (0, a.jsx)(ek, {
                  rows: "links",
                  open: !0,
                  space: eI,
                  parentId: H,
                  pageId: H,
                  highlightedPageId: H,
                  visited: [...s.map(ef), H],
                  onOpenPage: V,
                  children: ex,
                })
              : void 0),
            (U[35] = e_),
            (U[36] = X),
            (U[37] = B),
            (U[38] = Z),
            (U[39] = ee),
            (U[40] = eA),
            (U[41] = en),
            (U[42] = Y),
            (U[43] = eo?.document_type),
            (U[44] = eo?.namespace),
            (U[45] = eo?.symbol),
            (U[46] = V),
            (U[47] = q),
            (U[48] = H),
            (U[49] = eI),
            (U[50] = e),
            (U[51] = t),
            (U[52] = n),
            (U[53] = l))
        } else ((e = U[50]), (t = U[51]), (n = U[52]), (l = U[53]))
        let u = n,
          p = `${es}:${H}`
        return (
          U[69] !== Y || U[70] !== el || U[71] !== J
            ? ((i = J ?? (el && Y?.ariaLabel != null ? (0, a.jsx)(D.s, { label: Y.ariaLabel }) : void 0)),
              (U[69] = Y),
              (U[70] = el),
              (U[71] = J),
              (U[72] = i))
            : (i = U[72]),
          U[73] !== eg || U[74] !== eu || U[75] !== ed
            ? ((s = null == eg ? void 0 : { badge: eg, kind: ed, icon: eu }),
              (U[73] = eg),
              (U[74] = eu),
              (U[75] = ed),
              (U[76] = s))
            : (s = U[76]),
          U[77] !== e || U[78] !== V || U[79] !== H || U[80] !== t || U[81] !== eI
            ? ((r = t ? (0, a.jsx)(eS, { path: e, index: 0, pageId: H, space: eI, onOpenPage: V }) : void 0),
              (U[77] = e),
              (U[78] = V),
              (U[79] = H),
              (U[80] = t),
              (U[81] = eI),
              (U[82] = r))
            : (r = U[82]),
          U[83] !== F ||
          U[84] !== u ||
          U[85] !== X ||
          U[86] !== Z ||
          U[87] !== W ||
          U[88] !== e ||
          U[89] !== Y ||
          U[90] !== V ||
          U[91] !== q ||
          U[92] !== H ||
          U[93] !== eI ||
          U[94] !== p ||
          U[95] !== i ||
          U[96] !== s ||
          U[97] !== r ||
          U[98] !== l
            ? ((o = (0, a.jsx)(
                ep,
                {
                  alwaysShowTitle: F,
                  inTitlebar: W,
                  menu: Y,
                  triggerButton: i,
                  template: s,
                  titleIcon: l,
                  submenuChildren: r,
                  hierarchyChildren: u,
                  title: X,
                  items: e,
                  onOpenPage: V,
                  pageId: H,
                  explorer: Z,
                  onShowContent: q,
                  space: eI,
                },
                p,
              )),
              (U[83] = F),
              (U[84] = u),
              (U[85] = X),
              (U[86] = Z),
              (U[87] = W),
              (U[88] = e),
              (U[89] = Y),
              (U[90] = V),
              (U[91] = q),
              (U[92] = H),
              (U[93] = eI),
              (U[94] = p),
              (U[95] = i),
              (U[96] = s),
              (U[97] = r),
              (U[98] = l),
              (U[99] = o))
            : (o = U[99]),
          U[100] !== eT || U[101] !== o
            ? ((d = (0, a.jsxs)(a.Fragment, { children: [o, eT] })), (U[100] = eT), (U[101] = o), (U[102] = d))
            : (d = U[102]),
          d
        )
      }
      if (
        U[103] !== e_ ||
        U[104] !== X ||
        U[105] !== B ||
        U[106] !== et ||
        U[107] !== eA ||
        U[108] !== H ||
        U[109] !== eI ||
        U[110] !== G?.name
      ) {
        let e
        if (((I = []), null != eI)) {
          let e,
            t,
            n,
            l = eA ? H : eI.root_page_id
          U[112] !== eI.id ? ((e = (0, a.jsx)(A.O, { spaceId: eI.id })), (U[112] = eI.id), (U[113] = e)) : (e = U[113])
          let i = (eA && X) || eI.name
          ;(U[114] !== i ? ((t = (0, a.jsx)(Q, { children: i })), (U[114] = i), (U[115] = t)) : (t = U[115]),
            U[116] !== l || U[117] !== e || U[118] !== t
              ? ((n = { id: l, parentId: void 0, icon: e, label: t }),
                (U[116] = l),
                (U[117] = e),
                (U[118] = t),
                (U[119] = n))
              : (n = U[119]),
            I.push(n))
        }
        for (let t of (U[120] !== e_ || U[121] !== eA
          ? ((e = eA ? [] : e_), (U[120] = e_), (U[121] = eA), (U[122] = e))
          : (e = U[122]),
        e))
          t.page_id !== eI?.root_page_id &&
            I.push({
              id: t.page_id,
              isLeaf: (0, b.qt)(t),
              parentId: I.at(-1)?.id,
              label: (0, a.jsx)(eE, { documentType: (0, b.mW)(t), pageId: t.page_id, title: t.title }),
            })
        if (!eA || null == eI) {
          let e, t
          ;(U[123] !== eA ? ((e = eA ? (0, a.jsx)(A.O, {}) : void 0), (U[123] = eA), (U[124] = e)) : (e = U[124]),
            U[125] !== X || U[126] !== B || U[127] !== eA || U[128] !== H || U[129] !== G?.name
              ? ((t = eA
                  ? (0, a.jsx)(Q, { children: X || G?.name })
                  : (0, a.jsx)(eE, { documentType: B, pageId: H, title: X })),
                (U[125] = X),
                (U[126] = B),
                (U[127] = eA),
                (U[128] = H),
                (U[129] = G?.name),
                (U[130] = t))
              : (t = U[130]),
            I.push({ id: H, isLeaf: et, parentId: I.at(-1)?.id, icon: e, label: t }))
        }
        ;((U[103] = e_),
          (U[104] = X),
          (U[105] = B),
          (U[106] = et),
          (U[107] = eA),
          (U[108] = H),
          (U[109] = eI),
          (U[110] = G?.name),
          (U[111] = I))
      } else I = U[111]
      let eD = eo?.namespace,
        eO = eo?.symbol
      U[131] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, a.jsx)(f.b5, { icon: { 16: x.oQS, 20: x.hXV } })), (U[131] = S))
        : (S = U[131])
      let eR = X ?? ""
      return (
        U[132] !== X ||
        U[133] !== B ||
        U[134] !== _ ||
        U[135] !== eA ||
        U[136] !== I ||
        U[137] !== V ||
        U[138] !== H ||
        U[139] !== eI
          ? ((P = (e) =>
              (0, a.jsx)(ey, {
                items: I,
                space: eI,
                pageId: H,
                status: void 0 === X && "ready" === _ ? "loading" : _,
                pageIcon: I.at(-1)?.icon ?? e.icon,
                pageLabel: eA
                  ? I.at(-1)?.label
                  : (0, a.jsx)(Q, {
                      children:
                        "granola_whiteboard" === B || X?.trim()
                          ? e.title.trim()
                          : (0, a.jsx)(c.A, { ...T.cl.untitled }),
                    }),
                onOpenPage: V,
              })),
            (U[132] = X),
            (U[133] = B),
            (U[134] = _),
            (U[135] = eA),
            (U[136] = I),
            (U[137] = V),
            (U[138] = H),
            (U[139] = eI),
            (U[140] = P))
          : (P = U[140]),
        U[141] !== B || U[142] !== H || U[143] !== eD || U[144] !== eO || U[145] !== eR || U[146] !== P
          ? ((O = (0, a.jsx)(N.s, {
              pageId: H,
              documentType: B,
              namespace: eD,
              symbol: eO,
              fallbackIcon: S,
              title: eR,
              children: P,
            })),
            (U[141] = B),
            (U[142] = H),
            (U[143] = eD),
            (U[144] = eO),
            (U[145] = eR),
            (U[146] = P),
            (U[147] = O))
          : (O = U[147]),
        U[148] !== eT || U[149] !== O || U[150] !== eg
          ? ((R = (0, a.jsxs)(a.Fragment, { children: [eg, O, eT] })),
            (U[148] = eT),
            (U[149] = O),
            (U[150] = eg),
            (U[151] = R))
          : (R = U[151]),
        R
      )
    }
    function ex(e) {
      return (0, a.jsx)(a.Fragment, { children: e })
    }
    function ef(e) {
      return e.page_id
    }
    function ev(e) {
      let { icon: t } = e
      return t
    }
    function eb(e) {
      let { icon: t } = e
      return t
    }
    function ej(e) {
      return !("access" in e) || (e.access.can_read && null == e.deleted_at)
    }
    function ey(e) {
      let t,
        n,
        s,
        r,
        o,
        p,
        g,
        h,
        f,
        v = (0, l.c)(35),
        { items: b, space: j, pageId: y, pageIcon: _, pageLabel: w, onOpenPage: I, status: S } = e,
        A = void 0 === S ? "ready" : S,
        C = (0, u.A)()
      v[0] !== b ? ((t = b.at(-1)), (v[0] = b), (v[1] = t)) : (t = v[1])
      let P = t,
        k = b[0]
      v[2] !== b || v[3] !== k?.icon
        ? ((n = b.slice(+(k?.icon != null), -1)), (v[2] = b), (v[3] = k?.icon), (v[4] = n))
        : (n = v[4])
      let M = n,
        [N, T] = (0, d.useState)(!1),
        E = (0, d.useRef)(null)
      v[5] !== b ? ((s = JSON.stringify(b.map(e_))), (v[5] = b), (v[6] = s)) : (s = v[6])
      let D = s,
        O = N && M.length > 0
      v[7] !== N || v[8] !== P || v[9] !== b || v[10] !== k
        ? ((r = N ? b.filter((e) => e === P || (e === k && null != e.icon)) : b),
          (v[7] = N),
          (v[8] = P),
          (v[9] = b),
          (v[10] = k),
          (v[11] = r))
        : (r = v[11])
      let R = r
      ;(v[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => {
            let e = E.current
            if (null == e) return
            let t = () => {
                T(e.scrollWidth > e.clientWidth + 1)
              },
              n = new ResizeObserver(t)
            for (let t of (n.observe(e), e.children)) n.observe(t)
            return (t(), () => n.disconnect())
          }),
          (v[12] = o))
        : (o = v[12]),
        v[13] !== D || v[14] !== A ? ((p = [D, A]), (v[13] = D), (v[14] = A), (v[15] = p)) : (p = v[15]),
        (0, d.useLayoutEffect)(o, p),
        v[16] !== C
          ? ((g = C.formatMessage({ id: "toolbarBreadcrumb.label", defaultMessage: "Breadcrumb" })),
            (v[16] = C),
            (v[17] = g))
          : (g = v[17]))
      let U = "loading" === A
      return (
        v[18] !== N ||
        v[19] !== P ||
        v[20] !== M ||
        v[21] !== b ||
        v[22] !== I ||
        v[23] !== _ ||
        v[24] !== y ||
        v[25] !== w ||
        v[26] !== O ||
        v[27] !== j ||
        v[28] !== A ||
        v[29] !== R
          ? ((h =
              "loading" === A
                ? (0, a.jsxs)("div", {
                    role: "status",
                    children: [
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        children: (0, a.jsx)(c.A, {
                          id: "toolbarBreadcrumb.loading",
                          defaultMessage: "Loading page navigation\u2026",
                        }),
                      }),
                      P?.isLeaf
                        ? (0, a.jsx)("span", {
                            className: "block max-w-full min-w-0",
                            "aria-current": "page",
                            children: w,
                          })
                        : (0, a.jsx)(m.$, {
                            color: "ghost",
                            size: "toolbar",
                            disabled: !0,
                            "aria-hidden": !0,
                            children: (0, a.jsx)("span", {
                              className: "inline-block h-4 w-12 rounded bg-text/10 align-middle select-none",
                            }),
                          }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: "unavailable" === A ? void 0 : "hidden @max-md/page-toolbar:block",
                        children: P?.isLeaf
                          ? (0, a.jsxs)("div", {
                              className: "flex min-w-0 items-center gap-1",
                              children: [
                                b.length > 1 && (0, a.jsx)(ew, { items: b.slice(0, -1), onOpenPage: I }),
                                (0, a.jsx)("span", {
                                  className: "max-w-full min-w-0",
                                  "aria-current": "page",
                                  children: w,
                                }),
                              ],
                            })
                          : (0, a.jsx)(ew, {
                              items: b.length > 1 ? b.slice(0, -1) : b,
                              onOpenPage: I,
                              icon: _,
                              label: w,
                            }),
                      }),
                      "unavailable" !== A &&
                        (0, a.jsx)("div", {
                          className: "flex min-w-0 items-center gap-1 @max-md/page-toolbar:hidden",
                          children: R.map((e, t) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: (0, i.A)(
                                  "flex max-w-full items-center gap-1 overflow-hidden",
                                  N || e === P ? "min-w-0" : "min-w-20",
                                  ((!N && e === P) || (N && e !== P)) && "shrink-0",
                                ),
                                children: [
                                  O && e === P && (0, a.jsx)(ew, { items: M, onOpenPage: I }),
                                  t > 0 && !(O && e === P) && (0, a.jsx)(x.uM3, {}),
                                  (0, a.jsx)(eI, {
                                    item: e,
                                    space: j,
                                    pageId: y,
                                    onOpenPage: I,
                                    compact: N && e !== P,
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      (0, a.jsx)("div", {
                        ref: E,
                        className: "invisible absolute inset-x-0 top-0 flex w-full min-w-0 items-center gap-1",
                        "aria-hidden": !0,
                        inert: !0,
                        children: b.map((e, t) =>
                          (0, a.jsxs)(
                            d.Fragment,
                            {
                              children: [
                                t > 0 && (0, a.jsx)(x.uM3, {}),
                                (0, a.jsx)(eI, {
                                  item: e,
                                  space: j,
                                  pageId: y,
                                  onOpenPage: I,
                                  minimumWidth: !0,
                                  enabled: !1,
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  })),
            (v[18] = N),
            (v[19] = P),
            (v[20] = M),
            (v[21] = b),
            (v[22] = I),
            (v[23] = _),
            (v[24] = y),
            (v[25] = w),
            (v[26] = O),
            (v[27] = j),
            (v[28] = A),
            (v[29] = R),
            (v[30] = h))
          : (h = v[30]),
        v[31] !== h || v[32] !== g || v[33] !== U
          ? ((f = (0, a.jsx)(B, {
              children: (0, a.jsx)("nav", {
                "aria-label": g,
                className: "relative w-full min-w-0 overflow-hidden text-base text-tertiary select-none",
                "aria-busy": U,
                children: h,
              }),
            })),
            (v[31] = h),
            (v[32] = g),
            (v[33] = U),
            (v[34] = f))
          : (f = v[34]),
        f
      )
    }
    function e_(e) {
      return [e.id, null != e.icon]
    }
    function ew(e) {
      let t,
        n,
        s,
        r,
        o,
        d,
        c,
        p = (0, l.c)(23),
        { items: g, onOpenPage: x, icon: f, label: v } = e,
        b = (0, u.A)(),
        j = null == v && "shrink-0"
      p[0] !== j ? ((t = (0, i.A)("max-w-full min-w-0", j)), (p[0] = j), (p[1] = t)) : (t = p[1])
      let y = null == v
      if (
        (p[2] !== f || p[3] !== b
          ? ((n =
              null != f
                ? b.formatMessage({ id: "codex.space.page.navigation", defaultMessage: "Page navigation" })
                : b.formatMessage({
                    id: "codex.space.page.navigation.hiddenAncestors",
                    defaultMessage: "Show hidden parent pages",
                  })),
            (p[2] = f),
            (p[3] = b),
            (p[4] = n))
          : (n = p[4]),
        p[5] !== f
          ? ((s = f ?? (0, a.jsx)("span", { "aria-hidden": !0, children: "\xbb" })), (p[5] = f), (p[6] = s))
          : (s = p[6]),
        p[7] !== v
          ? ((r = null != v && (0, a.jsx)("span", { className: "flex min-w-0 text-default", children: v })),
            (p[7] = v),
            (p[8] = r))
          : (r = p[8]),
        p[9] !== t || p[10] !== y || p[11] !== n || p[12] !== s || p[13] !== r
          ? ((o = (0, a.jsxs)(m.$, {
              className: t,
              color: "ghost",
              focusRing: "inset",
              size: "toolbar",
              uniform: y,
              "aria-label": n,
              children: [s, r],
            })),
            (p[9] = t),
            (p[10] = y),
            (p[11] = n),
            (p[12] = s),
            (p[13] = r),
            (p[14] = o))
          : (o = p[14]),
        p[15] !== g || p[16] !== x)
      ) {
        let e
        ;(p[18] !== x
          ? ((e = (e) =>
              (0, a.jsx)(
                h.ms.Item,
                {
                  onSelect: () => x(e.id),
                  children: (0, a.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-1",
                    children: [e.icon, e.label],
                  }),
                },
                e.id,
              )),
            (p[18] = x),
            (p[19] = e))
          : (e = p[19]),
          (d = g.map(e)),
          (p[15] = g),
          (p[16] = x),
          (p[17] = d))
      } else d = p[17]
      return (
        p[20] !== o || p[21] !== d
          ? ((c = (0, a.jsx)(z, { triggerButton: o, children: d })), (p[20] = o), (p[21] = d), (p[22] = c))
          : (c = p[22]),
        c
      )
    }
    function eI(e) {
      let t,
        n,
        s,
        r,
        c,
        p,
        g,
        x,
        f = (0, l.c)(48),
        { item: v, space: b, pageId: j, onOpenPage: y, compact: _, minimumWidth: w, enabled: I } = e,
        S = void 0 !== _ && _,
        A = void 0 !== w && w,
        C = void 0 === I || I,
        P = (0, d.useId)(),
        k = (0, o._U)(L, P),
        M = (0, u.A)()
      if (v.isLeaf && v.id === j) {
        let e
        return (
          f[0] !== v.label
            ? ((e = (0, a.jsx)("span", { className: "max-w-full min-w-0", "aria-current": "page", children: v.label })),
              (f[0] = v.label),
              (f[1] = e))
            : (e = f[1]),
          e
        )
      }
      let N = A && v.id !== j ? "min-w-20" : "min-w-0",
        T = A && v.id === j && "shrink-0"
      f[2] !== N || f[3] !== T ? ((t = (0, i.A)("max-w-full", N, T)), (f[2] = N), (f[3] = T), (f[4] = t)) : (t = f[4])
      let E = v.id === j ? "page" : void 0
      ;(f[5] !== S || f[6] !== M
        ? ((n = S ? M.formatMessage({ id: "codex.space.page.navigation", defaultMessage: "Page navigation" }) : void 0),
          (f[5] = S),
          (f[6] = M),
          (f[7] = n))
        : (n = f[7]),
        f[8] !== v.id || f[9] !== y || f[10] !== j
          ? ((s = v.id === j ? void 0 : () => y(v.id)), (f[8] = v.id), (f[9] = y), (f[10] = j), (f[11] = s))
          : (s = f[11]),
        f[12] !== S || f[13] !== v.id || f[14] !== v.label || f[15] !== j
          ? ((r =
              !S &&
              (0, a.jsx)("span", {
                className: (0, i.A)("flex min-w-0 overflow-hidden", v.id === j && "text-default"),
                children: v.label,
              })),
            (f[12] = S),
            (f[13] = v.id),
            (f[14] = v.label),
            (f[15] = j),
            (f[16] = r))
          : (r = f[16]),
        f[17] !== S || f[18] !== v.icon || f[19] !== r || f[20] !== t || f[21] !== E || f[22] !== n || f[23] !== s
          ? ((c = (0, a.jsxs)(m.$, {
              className: t,
              color: "ghost",
              focusRing: "inset",
              uniform: S,
              size: "toolbar",
              "aria-current": E,
              "aria-label": n,
              onClick: s,
              children: [v.icon, r],
            })),
            (f[17] = S),
            (f[18] = v.icon),
            (f[19] = r),
            (f[20] = t),
            (f[21] = E),
            (f[22] = n),
            (f[23] = s),
            (f[24] = c))
          : (c = f[24]))
      let D = c
      if (v.isLeaf) return D
      let O = v.parentId ?? v.id,
        R = null == v.parentId,
        U = v.parentId ?? v.id
      return (
        f[25] !== U ? ((p = [U]), (f[25] = U), (f[26] = p)) : (p = f[26]),
        f[27] !== C ||
        f[28] !== v.icon ||
        f[29] !== v.id ||
        f[30] !== v.label ||
        f[31] !== v.parentId ||
        f[32] !== P ||
        f[33] !== y ||
        f[34] !== j ||
        f[35] !== D
          ? ((g = (e) =>
              (0, a.jsxs)(z, {
                id: P,
                enabled: C,
                triggerButton: D,
                children: [
                  null == v.parentId &&
                    (0, a.jsx)(h.ms.Item, {
                      "data-breadcrumb-highlighted": "",
                      onSelect: () => y(v.id),
                      "aria-current": v.id === j ? "page" : void 0,
                      children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1",
                        children: [v.icon, v.label],
                      }),
                    }),
                  e,
                ],
              })),
            (f[27] = C),
            (f[28] = v.icon),
            (f[29] = v.id),
            (f[30] = v.label),
            (f[31] = v.parentId),
            (f[32] = P),
            (f[33] = y),
            (f[34] = j),
            (f[35] = D),
            (f[36] = g))
          : (g = f[36]),
        f[37] !== C ||
        f[38] !== v.id ||
        f[39] !== y ||
        f[40] !== k ||
        f[41] !== j ||
        f[42] !== b ||
        f[43] !== O ||
        f[44] !== R ||
        f[45] !== p ||
        f[46] !== g
          ? ((x = (0, a.jsx)(ek, {
              open: k,
              space: b,
              parentId: O,
              pageId: j,
              highlightedPageId: v.id,
              onOpenPage: y,
              showSeparator: R,
              visited: p,
              enabled: C,
              children: g,
            })),
            (f[37] = C),
            (f[38] = v.id),
            (f[39] = y),
            (f[40] = k),
            (f[41] = j),
            (f[42] = b),
            (f[43] = O),
            (f[44] = R),
            (f[45] = p),
            (f[46] = g),
            (f[47] = x))
          : (x = f[47]),
        x
      )
    }
    function eS(e) {
      let t,
        n,
        i,
        s,
        r,
        o,
        d,
        c,
        u = (0, l.c)(35),
        { path: p, index: g, pageId: m, space: f, onOpenPage: v } = e,
        b = p[g]
      if (null == b) return null
      let j = p[g + 1],
        y = b.id === m
      u[0] !== g ? ((t = eP(g)), (u[0] = g), (u[1] = t)) : (t = u[1])
      let _ = y ? "page" : void 0
      ;(u[2] !== b.icon ? ((n = b.icon ?? (0, a.jsx)(x.oQS, {})), (u[2] = b.icon), (u[3] = n)) : (n = u[3]),
        u[4] !== b.id || u[5] !== v ? ((i = () => v(b.id)), (u[4] = b.id), (u[5] = v), (u[6] = i)) : (i = u[6]),
        u[7] !== b.label || u[8] !== y || u[9] !== t || u[10] !== _ || u[11] !== n || u[12] !== i
          ? ((s = (0, a.jsx)(h.ms.Item, {
              className: em,
              style: t,
              isActive: y,
              "aria-current": _,
              leftIcon: n,
              allowWrap: !0,
              onSelect: i,
              children: b.label,
            })),
            (u[7] = b.label),
            (u[8] = y),
            (u[9] = t),
            (u[10] = _),
            (u[11] = n),
            (u[12] = i),
            (u[13] = s))
          : (s = u[13]))
      let w = b.id
      ;(u[14] !== g || u[15] !== p
        ? ((r = p.slice(0, g + 1).map(eC)), (u[14] = g), (u[15] = p), (u[16] = r))
        : (r = u[16]),
        u[17] !== g || u[18] !== j || u[19] !== v || u[20] !== m || u[21] !== p || u[22] !== f
          ? ((o =
              null == j
                ? void 0
                : { id: j.id, row: (0, a.jsx)(eS, { path: p, index: g + 1, pageId: m, space: f, onOpenPage: v }) }),
            (u[17] = g),
            (u[18] = j),
            (u[19] = v),
            (u[20] = m),
            (u[21] = p),
            (u[22] = f),
            (u[23] = o))
          : (o = u[23]))
      let I = g + 1
      return (
        u[24] !== b.id || u[25] !== v || u[26] !== m || u[27] !== f || u[28] !== r || u[29] !== o || u[30] !== I
          ? ((d = (0, a.jsx)(ek, {
              open: !0,
              space: f,
              parentId: w,
              pageId: m,
              highlightedPageId: m,
              visited: r,
              onOpenPage: v,
              expandedChild: o,
              rows: "tree",
              depth: I,
              children: eA,
            })),
            (u[24] = b.id),
            (u[25] = v),
            (u[26] = m),
            (u[27] = f),
            (u[28] = r),
            (u[29] = o),
            (u[30] = I),
            (u[31] = d))
          : (d = u[31]),
        u[32] !== d || u[33] !== s
          ? ((c = (0, a.jsxs)(a.Fragment, { children: [s, d] })), (u[32] = d), (u[33] = s), (u[34] = c))
          : (c = u[34]),
        c
      )
    }
    function eA(e) {
      return (0, a.jsx)(a.Fragment, { children: e })
    }
    function eC(e) {
      return e.id
    }
    function eP(e) {
      return { "--page-menu-indent": `min(${16 * e}px, 25%)` }
    }
    function ek(e) {
      let t,
        n,
        i,
        s,
        u,
        p,
        g,
        m,
        f,
        v,
        _,
        w,
        I,
        A,
        C,
        M = (0, l.c)(72),
        {
          rows: N,
          expandedChild: T,
          depth: E,
          space: D,
          open: R,
          enabled: U,
          children: F,
          parentId: W,
          pageId: L,
          highlightedPageId: B,
          onOpenPage: z,
          showSeparator: $,
          visited: Q,
        } = e,
        K = void 0 === N ? "flyouts" : N,
        V = void 0 === E ? 0 : E,
        q = void 0 !== $ && $,
        H = D?.backing_type === "drive" && D.root_page_id === W,
        G = (0, o.uO)(k.spaceCollectionQuery$, H ? D.id : null),
        X = (0, o.uO)(S.Hk, W),
        Y = H ? G : X
      M[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (M[0] = t)) : (t = M[0])
      let { isFetched: J } = (0, o.Ul)(Y, t),
        Z = (void 0 === U || U) && (R || !J)
      M[1] !== Z ? ((n = { enabled: Z }), (M[1] = Z), (M[2] = n)) : (n = M[2])
      let { data: ee, isPending: et, error: en, refetch: ea } = (0, o.Ul)(Y, n),
        el = (0, o._U)(H ? k.pendingSpaceCollection$ : null, D?.id ?? ""),
        ei = (0, o._U)(H ? null : S.K, W),
        es = H ? el?.items : ei,
        er = null != ee && "pages" in ee ? ee.pages.items : ee?.items,
        eo = (0, o.Ul)(j.bd),
        ed = (0, o.Ul)(k.visibleSpacePages$)
      if (
        M[3] !== V ||
        M[4] !== en ||
        M[5] !== er ||
        M[6] !== W ||
        M[7] !== es ||
        M[8] !== K ||
        M[9] !== ed?.items ||
        M[10] !== ed?.items.filter
      ) {
        let e,
          t,
          n = ed?.items.filter((e) => null != e.parent && "page_id" in e.parent && e.parent.page_id === W)
        ;((p = (s = "tree" === K) ? em : void 0),
          M[16] !== V || M[17] !== s ? ((e = s ? eP(V) : void 0), (M[16] = V), (M[17] = s), (M[18] = e)) : (e = M[18]),
          (g = e),
          M[19] !== en || M[20] !== s
            ? ((t = s && en instanceof O.FetchError && [403, 404, 410].includes(en.status)),
              (M[19] = en),
              (M[20] = s),
              (M[21] = t))
            : (t = M[21]),
          (i = t),
          (u = er ?? n),
          null != es && (s ? (u = (0, y.l)(u ?? [], es)) : null == er && (u = r()([...es, ...(n ?? [])], "page_id"))),
          (M[3] = V),
          (M[4] = en),
          (M[5] = er),
          (M[6] = W),
          (M[7] = es),
          (M[8] = K),
          (M[9] = ed?.items),
          (M[10] = ed?.items.filter),
          (M[11] = i),
          (M[12] = s),
          (M[13] = u),
          (M[14] = p),
          (M[15] = g))
      } else ((i = M[11]), (s = M[12]), (u = M[13]), (p = M[14]), (g = M[15]))
      if (
        (i && (u = void 0),
        M[22] !== F ||
          M[23] !== i ||
          M[24] !== V ||
          M[25] !== en ||
          M[26] !== T ||
          M[27] !== B ||
          M[28] !== s ||
          M[29] !== et ||
          M[30] !== er ||
          M[31] !== z ||
          M[32] !== L ||
          M[33] !== u ||
          M[34] !== W ||
          M[35] !== ea ||
          M[36] !== p ||
          M[37] !== g ||
          M[38] !== K ||
          M[39] !== q ||
          M[40] !== eo ||
          M[41] !== Q)
      ) {
        let e = u
            ?.filter(
              (e) =>
                e.access.can_read &&
                null == e.deleted_at &&
                (!s || eo || null == e.site_project_id) &&
                null != e.parent &&
                "page_id" in e.parent &&
                e.parent.page_id === W &&
                !Q.includes(e.page_id),
            )
            .sort(P.i3),
          t = et && (null == e || 0 === e.length)
        ;((_ = F),
          (w = q && (t || null != en || !!e?.length) && (0, a.jsx)(h.ms.Separator, {})),
          M[48] !== p || M[49] !== g || M[50] !== t
            ? ((I =
                t &&
                (0, a.jsx)(h.ms.Item, {
                  className: p,
                  style: g,
                  disabled: !0,
                  children: (0, a.jsx)(c.A, {
                    id: "codex.space.page.navigation.loading",
                    defaultMessage: "Loading pages\u2026",
                  }),
                })),
              (M[48] = p),
              (M[49] = g),
              (M[50] = t),
              (M[51] = I))
            : (I = M[51]),
          M[52] !== i || M[53] !== en || M[54] !== s || M[55] !== ea || M[56] !== p || M[57] !== g
            ? ((m =
                null != en &&
                (0, a.jsx)(h.ms.Item, {
                  className: p,
                  style: g,
                  disabled: !s || i,
                  onSelect:
                    s && !i
                      ? (e) => {
                          ;(e.preventDefault(), ea())
                        }
                      : void 0,
                  children: (0, a.jsx)(c.A, {
                    id: "codex.space.page.navigation.failed",
                    defaultMessage: "Couldn\u2019t load pages",
                  }),
                })),
              (M[52] = i),
              (M[53] = en),
              (M[54] = s),
              (M[55] = ea),
              (M[56] = p),
              (M[57] = g),
              (M[58] = m))
            : (m = M[58]),
          M[59] !== i || M[60] !== T || M[61] !== u
            ? ((f = null != T && !i && !u?.some((e) => e.page_id === T.id) && T.row),
              (M[59] = i),
              (M[60] = T),
              (M[61] = u),
              (M[62] = f))
            : (f = M[62]),
          (v = e?.map((e, t) =>
            T?.id === e.page_id
              ? (0, a.jsx)(d.Fragment, { children: T.row }, e.page_id)
              : s
                ? (0, a.jsx)(
                    eM,
                    { page: e, depth: V, pageId: L, highlightedPageId: B, onOpenPage: z, visited: Q },
                    e.page_id,
                  )
                : "links" === K
                  ? (0, a.jsx)(
                      h.ms.Item,
                      {
                        LeftIcon: x.oQS,
                        textOverflow: "fade",
                        onSelect: () => z(e.page_id),
                        children: (0, a.jsx)(eE, {
                          pageId: e.page_id,
                          documentType: (0, b.mW)(e),
                          title: e.title,
                          truncate: !1,
                        }),
                      },
                      e.page_id,
                    )
                  : (0, a.jsx)(
                      eT,
                      {
                        page: e,
                        preloadChildren: null != er && t < 6,
                        pageId: L,
                        highlightedPageId: B,
                        onOpenPage: z,
                        visited: Q,
                      },
                      e.page_id,
                    ),
          )),
          (M[22] = F),
          (M[23] = i),
          (M[24] = V),
          (M[25] = en),
          (M[26] = T),
          (M[27] = B),
          (M[28] = s),
          (M[29] = et),
          (M[30] = er),
          (M[31] = z),
          (M[32] = L),
          (M[33] = u),
          (M[34] = W),
          (M[35] = ea),
          (M[36] = p),
          (M[37] = g),
          (M[38] = K),
          (M[39] = q),
          (M[40] = eo),
          (M[41] = Q),
          (M[42] = m),
          (M[43] = f),
          (M[44] = v),
          (M[45] = _),
          (M[46] = w),
          (M[47] = I))
      } else ((m = M[42]), (f = M[43]), (v = M[44]), (_ = M[45]), (w = M[46]), (I = M[47]))
      return (
        M[63] !== m || M[64] !== f || M[65] !== v || M[66] !== w || M[67] !== I
          ? ((A = (0, a.jsxs)(a.Fragment, { children: [w, I, m, f, v] })),
            (M[63] = m),
            (M[64] = f),
            (M[65] = v),
            (M[66] = w),
            (M[67] = I),
            (M[68] = A))
          : (A = M[68]),
        M[69] !== _ || M[70] !== A ? ((C = _(A)), (M[69] = _), (M[70] = A), (M[71] = C)) : (C = M[71]),
        C
      )
    }
    function eM(e) {
      let t,
        n,
        i,
        s,
        r,
        u,
        p = (0, l.c)(29),
        { page: g, depth: m, pageId: x, highlightedPageId: f, onOpenPage: v, visited: j } = e,
        [y, w] = (0, d.useState)(!1),
        S = (0, o._U)(I.R, g.page_id)
      p[0] !== g ? ((t = g.has_children && !(0, b.qt)(g)), (p[0] = g), (p[1] = t)) : (t = p[1])
      let A = t,
        C = g.page_id
      p[2] !== g ? ((n = (0, b.mW)(g)), (p[2] = g), (p[3] = n)) : (n = p[3])
      let P = (g.access.can_write ? S?.title : void 0) ?? g.title ?? ""
      return (
        p[4] !== m || p[5] !== y || p[6] !== A || p[7] !== v || p[8] !== g.page_id
          ? ((i = (e) => {
              let { icon: t, title: n } = e
              return (0, a.jsx)(h.ms.Item, {
                "aria-expanded": A ? y : void 0,
                className: em,
                style: eP(m),
                leftIcon: t,
                rightIcon: A
                  ? (0, a.jsx)("span", {
                      "aria-hidden": "true",
                      className: "rounded-md p-1 hover:bg-primary-ghost-hover",
                      "data-page-menu-disclosure": "",
                      children: (0, a.jsx)(_.y, { className: "rtl:-scale-x-100", expanded: y }),
                    })
                  : void 0,
                allowWrap: !0,
                onSelect: () => v(g.page_id),
                onClick: (e) => {
                  A &&
                    e.target instanceof Element &&
                    null != e.target.closest("[data-page-menu-disclosure]") &&
                    (e.preventDefault(), w(!y))
                },
                onKeyDown: (e) => {
                  if (!A) return
                  let t = e.currentTarget.closest('[role="menu"]')?.getAttribute("dir") === "rtl",
                    n = t ? "ArrowLeft" : "ArrowRight"
                  ;(e.key === n || (y && e.key === (t ? "ArrowRight" : "ArrowLeft"))) &&
                    (e.preventDefault(), e.stopPropagation(), w(e.key === n))
                },
                children: n.trim() || (0, a.jsx)(c.A, { ...T.cl.untitled }),
              })
            }),
            (p[4] = m),
            (p[5] = y),
            (p[6] = A),
            (p[7] = v),
            (p[8] = g.page_id),
            (p[9] = i))
          : (i = p[9]),
        p[10] !== g.namespace || p[11] !== g.page_id || p[12] !== g.symbol || p[13] !== n || p[14] !== P || p[15] !== i
          ? ((s = (0, a.jsx)(N.s, {
              pageId: C,
              documentType: n,
              namespace: g.namespace,
              symbol: g.symbol,
              title: P,
              children: i,
            })),
            (p[10] = g.namespace),
            (p[11] = g.page_id),
            (p[12] = g.symbol),
            (p[13] = n),
            (p[14] = P),
            (p[15] = i),
            (p[16] = s))
          : (s = p[16]),
        p[17] !== m ||
        p[18] !== y ||
        p[19] !== A ||
        p[20] !== f ||
        p[21] !== v ||
        p[22] !== g.page_id ||
        p[23] !== x ||
        p[24] !== j
          ? ((r =
              A &&
              y &&
              (0, a.jsx)(ek, {
                open: !0,
                rows: "tree",
                depth: m + 1,
                parentId: g.page_id,
                pageId: x,
                highlightedPageId: f,
                onOpenPage: v,
                visited: [...j, g.page_id],
                children: eN,
              })),
            (p[17] = m),
            (p[18] = y),
            (p[19] = A),
            (p[20] = f),
            (p[21] = v),
            (p[22] = g.page_id),
            (p[23] = x),
            (p[24] = j),
            (p[25] = r))
          : (r = p[25]),
        p[26] !== s || p[27] !== r
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [s, r] })), (p[26] = s), (p[27] = r), (p[28] = u))
          : (u = p[28]),
        u
      )
    }
    function eN(e) {
      return (0, a.jsx)(a.Fragment, { children: e })
    }
    function eT(e) {
      let t,
        n,
        s,
        r,
        o,
        c,
        u,
        p,
        g,
        m = (0, l.c)(37),
        { page: x, preloadChildren: f, pageId: v, highlightedPageId: j, onOpenPage: y, visited: _ } = e,
        [w, I] = (0, d.useState)(!1),
        S = x.page_id === j ? "" : void 0,
        A = x.page_id === v ? "page" : void 0,
        C = x.page_id === v && "text-accent"
      ;(m[0] !== C ? ((t = (0, i.A)("flex min-w-0", C)), (m[0] = C), (m[1] = t)) : (t = m[1]),
        m[2] !== x ? ((n = (0, b.mW)(x)), (m[2] = x), (m[3] = n)) : (n = m[3]),
        m[4] !== x.page_id || m[5] !== x.symbol || m[6] !== x.title || m[7] !== n
          ? ((s = (0, a.jsx)(eE, { documentType: n, pageId: x.page_id, symbol: x.symbol, title: x.title })),
            (m[4] = x.page_id),
            (m[5] = x.symbol),
            (m[6] = x.title),
            (m[7] = n),
            (m[8] = s))
          : (s = m[8]),
        m[9] !== S || m[10] !== A || m[11] !== t || m[12] !== s
          ? ((r = (0, a.jsx)("span", {
              "data-breadcrumb-highlighted": S,
              "aria-current": A,
              className: t,
              children: s,
            })),
            (m[9] = S),
            (m[10] = A),
            (m[11] = t),
            (m[12] = s),
            (m[13] = r))
          : (r = m[13]))
      let P = r,
        k = x.page_id === v ? "page" : void 0
      ;(m[14] !== y || m[15] !== x.page_id
        ? ((o = () => y(x.page_id)), (m[14] = y), (m[15] = x.page_id), (m[16] = o))
        : (o = m[16]),
        m[17] !== P || m[18] !== k || m[19] !== o
          ? ((c = (0, a.jsx)(h.ms.Item, { "aria-current": k, onSelect: o, children: P })),
            (m[17] = P),
            (m[18] = k),
            (m[19] = o),
            (m[20] = c))
          : (c = m[20]))
      let M = c
      if ((0, b.qt)(x) || !x.has_children) return M
      m[21] !== x.page_id || m[22] !== _
        ? ((u = [..._, x.page_id]), (m[21] = x.page_id), (m[22] = _), (m[23] = u))
        : (u = m[23])
      let N = w || f
      return (
        m[24] !== P || m[25] !== y || m[26] !== x.page_id
          ? ((p = (e) =>
              (0, a.jsx)(h.ms.FlyoutSubmenuItem, {
                label: P,
                onSelect: () => y(x.page_id),
                onOpenChange: I,
                contentWidth: "menuWide",
                children: e,
              })),
            (m[24] = P),
            (m[25] = y),
            (m[26] = x.page_id),
            (m[27] = p))
          : (p = m[27]),
        m[28] !== j ||
        m[29] !== y ||
        m[30] !== w ||
        m[31] !== x.page_id ||
        m[32] !== v ||
        m[33] !== u ||
        m[34] !== N ||
        m[35] !== p
          ? ((g = (0, a.jsx)(ek, {
              open: w,
              parentId: x.page_id,
              pageId: v,
              highlightedPageId: j,
              onOpenPage: y,
              visited: u,
              enabled: N,
              children: p,
            })),
            (m[28] = j),
            (m[29] = y),
            (m[30] = w),
            (m[31] = x.page_id),
            (m[32] = v),
            (m[33] = u),
            (m[34] = N),
            (m[35] = p),
            (m[36] = g))
          : (g = m[36]),
        g
      )
    }
    function eE(e) {
      let t,
        n,
        i,
        s = (0, l.c)(13),
        { documentType: r, pageId: d, symbol: u, showIcon: p, title: g, truncate: m } = e,
        h = void 0 === m || m
      s[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (s[0] = t)) : (t = s[0])
      let x = (0, o._U)(k.loadedSpacePageMetadata$, d, t),
        f = x?.namespace,
        v = null == x ? u : x.symbol,
        b = g ?? ""
      return (
        s[1] !== r || s[2] !== p || s[3] !== g || s[4] !== h
          ? ((n = (e) => {
              let t =
                "granola_whiteboard" === r ||
                "granola_workbook" === r ||
                "granola_presentation" === r ||
                "granola_document" === r
                  ? e.title
                  : g?.trim() || (0, a.jsx)(c.A, { ...T.cl.untitled })
              return h
                ? (0, a.jsx)(Q, {
                    icon:
                      (p ??
                      ("granola_whiteboard" === r ||
                        "granola_workbook" === r ||
                        "granola_presentation" === r ||
                        "granola_document" === r))
                        ? e.icon
                        : void 0,
                    children: t,
                  })
                : (0, a.jsx)(a.Fragment, { children: t })
            }),
            (s[1] = r),
            (s[2] = p),
            (s[3] = g),
            (s[4] = h),
            (s[5] = n))
          : (n = s[5]),
        s[6] !== r || s[7] !== d || s[8] !== f || s[9] !== v || s[10] !== b || s[11] !== n
          ? ((i = (0, a.jsx)(N.s, { pageId: d, documentType: r, namespace: f, symbol: v, title: b, children: n })),
            (s[6] = r),
            (s[7] = d),
            (s[8] = f),
            (s[9] = v),
            (s[10] = b),
            (s[11] = n),
            (s[12] = i))
          : (i = s[12]),
        i
      )
    }
  },
  zTDg(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("slpy"),
      s = n("Wf1j"),
      r = n("Sm6l"),
      o = n("j9wQ")
    n.d(
      t,
      {},
      {
        K: function (e) {
          let t,
            n,
            i,
            r,
            d = (0, l.c)(9)
          d[0] !== e ? (({ children: t, ...n } = e), (d[0] = e), (d[1] = t), (d[2] = n)) : ((t = d[1]), (n = d[2]))
          let c = (0, s.A)()
          return (
            d[3] !== c
              ? ((i = c.formatMessage({
                  id: "codex.space.page.header.editingTools",
                  defaultMessage: "Page editing tools",
                })),
                (d[3] = c),
                (d[4] = i))
              : (i = d[4]),
            d[5] !== t || d[6] !== n || d[7] !== i
              ? ((r = (0, a.jsx)(o.J5, { ...n, label: i, children: t })),
                (d[5] = t),
                (d[6] = n),
                (d[7] = i),
                (d[8] = r))
              : (r = d[8]),
            r
          )
        },
        p: function (e) {
          let t,
            n,
            s,
            d,
            c,
            u,
            p = (0, l.c)(14)
          p[0] !== e
            ? (({ label: t, appearance: s, color: d, ...n } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = n),
              (p[3] = s),
              (p[4] = d))
            : ((t = p[1]), (n = p[2]), (s = p[3]), (d = p[4]))
          let g = void 0 === s ? "toolbar" : s,
            m = void 0 === d ? "ghostActive" : d,
            h = !0 === n["aria-expanded"]
          return (
            p[5] !== g || p[6] !== m || p[7] !== t || p[8] !== n
              ? ((c =
                  "viewer" === g
                    ? (0, a.jsx)(o.K8, { ...n, "aria-label": t, uniform: !0 })
                    : (0, a.jsx)(r.$, { ...n, "aria-label": t, color: m, size: "toolbar", uniform: !0 })),
                (p[5] = g),
                (p[6] = m),
                (p[7] = t),
                (p[8] = n),
                (p[9] = c))
              : (c = p[9]),
            p[10] !== t || p[11] !== h || p[12] !== c
              ? ((u = (0, a.jsx)(i.m, { content: t, disabled: h, children: c })),
                (p[10] = t),
                (p[11] = h),
                (p[12] = c),
                (p[13] = u))
              : (u = p[13]),
            u
          )
        },
      },
    )
  },
  U90K(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("zd8w"),
      s = n("I7bK"),
      r = n("cXiB"),
      o = n("Zr80"),
      d = n("JyrC")
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            c,
            u,
            p,
            g,
            m = (0, l.c)(13)
          m[0] !== e
            ? (({ titleActions: c, useTitleActions: u, navigation: t, ...n } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = n),
              (m[3] = c),
              (m[4] = u))
            : ((t = m[1]), (n = m[2]), (c = m[3]), (u = m[4]))
          let h = (0, i.useContext)(s.f$)?.hasPageSurface,
            x = (0, r.xV)(n.tabId),
            f = h || x,
            v = !f && u && c ? c : t
          m[5] !== f || m[6] !== c
            ? ((p = f ? (0, a.jsx)(o.n, { value: !0, children: c }) : null), (m[5] = f), (m[6] = c), (m[7] = p))
            : (p = m[7])
          let b = f || u ? null : c
          return (
            m[8] !== n || m[9] !== v || m[10] !== p || m[11] !== b
              ? ((g = (0, a.jsx)(d.s8, { ...n, navigation: v, toolsMenu: p, overflow: b })),
                (m[8] = n),
                (m[9] = v),
                (m[10] = p),
                (m[11] = b),
                (m[12] = g))
              : (g = m[12]),
            g
          )
        },
      },
    )
  },
  JyrC(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("slpy"),
      s = n("on57"),
      r = n("v7qY"),
      o = n("Wf1j"),
      d = n("jNL7"),
      c = n("va0r"),
      u = n("bUax"),
      p = n("hZSj"),
      g = n("AQ4m"),
      m = n("cXiB"),
      h = n("j9wQ"),
      x = n("Wj4L"),
      f = n("zTDg")
    function v(e) {
      let t,
        n,
        d,
        c,
        p,
        x,
        v,
        b,
        j,
        y,
        _,
        w,
        I,
        S,
        A,
        C,
        P,
        k,
        M,
        N,
        T,
        E = (0, l.c)(75),
        D = (0, o.A)(),
        O = (0, m.xV)(e.tabId),
        {
          inset: R,
          contentFade: U,
          density: F,
          navigation: W,
          titlePlacement: L,
          actions: B,
          documentControlsContainers: z,
          download: $,
          toolsMenu: Q,
          saveStatus: K,
          people: V,
          automations: q,
          requestEditAccess: H,
          comments: G,
          meeting: X,
          supplementalActions: Y,
          connectionStatus: J,
          onClose: Z,
          tabId: ee,
          sharing: et,
        } = e,
        en = void 0 !== R && R,
        ea = void 0 !== U && U,
        el = void 0 === F ? "surface" : F,
        ei = void 0 === L ? "toolbar" : L
      E[0] !== B || E[1] !== e.actionsGrouped
        ? ((t = e.actionsGrouped || null == B ? B : (0, a.jsx)(f.K, { children: B })),
          (E[0] = B),
          (E[1] = e.actionsGrouped),
          (E[2] = t))
        : (t = E[2])
      let es = t
      if (null != z) {
        let t
        return (
          E[3] !== q ||
          E[4] !== G ||
          E[5] !== z.trailing ||
          E[6] !== X ||
          E[7] !== e.overflow ||
          E[8] !== Y ||
          E[9] !== Q
            ? ((t =
                null == z.trailing
                  ? null
                  : (0, r.createPortal)(
                      (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-0.5",
                        children: [Y, G, q, Q ?? e.overflow, X],
                      }),
                      z.trailing,
                    )),
              (E[3] = q),
              (E[4] = G),
              (E[5] = z.trailing),
              (E[6] = X),
              (E[7] = e.overflow),
              (E[8] = Y),
              (E[9] = Q),
              (E[10] = t))
            : (t = E[10]),
          t
        )
      }
      E[11] !== q || E[12] !== G || E[13] !== $ || E[14] !== D || E[15] !== Q
        ? ((n =
            Q || G || q || $
              ? (0, a.jsx)(h.J5, {
                  hideWhenEmpty: !0,
                  label: D.formatMessage({ id: "codex.space.page.header.tools", defaultMessage: "Page tools" }),
                  children: (0, a.jsxs)(i.m.DefaultsProvider, { side: "bottom", children: [G, q, $, Q] }),
                })
              : null),
          (E[11] = q),
          (E[12] = G),
          (E[13] = $),
          (E[14] = D),
          (E[15] = Q),
          (E[16] = n))
        : (n = E[16])
      let er = n,
        eo = "toolbar" !== ei,
        ed =
          !en &&
          !eo &&
          "ps-[var(--window-titlebar-inset-left,0px)] pe-[var(--window-titlebar-inset-right,0px)] rtl:ps-[var(--window-titlebar-inset-right,0px)] rtl:pe-[var(--window-titlebar-inset-left,0px)]"
      E[17] !== ed ? ((d = (0, s.A)(ed, "@container/page-toolbar w-full")), (E[17] = ed), (E[18] = d)) : (d = E[18])
      let ec = ea && !eo,
        eu = eo ? "compact" : el,
        ep = eo || "compact" !== el ? void 0 : "wrap-leading",
        eg = en && !eo,
        em = ea && !eo ? "overlay" : void 0,
        eh = O ? null : W
      return (
        E[19] !== eh
          ? ((c = { id: "title", content: eh, allowShrink: !0, collapsePriority: 1 }), (E[19] = eh), (E[20] = c))
          : (c = E[20]),
        E[21] !== es
          ? ((p = { id: "editing", content: es, collapsePriority: 2 }), (E[21] = es), (E[22] = p))
          : (p = E[22]),
        E[23] !== K ? ((x = { id: "save-status", content: K }), (E[23] = K), (E[24] = x)) : (x = E[24]),
        E[25] !== c || E[26] !== p || E[27] !== x
          ? ((v = [c, p, x]), (E[25] = c), (E[26] = p), (E[27] = x), (E[28] = v))
          : (v = E[28]),
        E[29] !== H ? ((b = { id: "request-edit-access", content: H }), (E[29] = H), (E[30] = b)) : (b = E[30]),
        E[31] !== J
          ? ((j = { id: "connection-status", content: J, hidePriority: 3 }), (E[31] = J), (E[32] = j))
          : (j = E[32]),
        E[33] !== Y
          ? ((y = { id: "supplemental", content: Y, hidePriority: 3 }), (E[33] = Y), (E[34] = y))
          : (y = E[34]),
        E[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = [{ priority: 5, selector: "[data-page-automation-control]" }]), (E[35] = _))
          : (_ = E[35]),
        E[36] !== er
          ? ((w = { id: "page-tools", collapseSteps: _, content: er }), (E[36] = er), (E[37] = w))
          : (w = E[37]),
        E[38] !== X
          ? ((I = { id: "meeting", content: X, collapsePriority: 3 }), (E[38] = X), (E[39] = I))
          : (I = E[39]),
        E[40] !== e.persistentActions
          ? ((S = { id: "artifact-actions", content: e.persistentActions }), (E[40] = e.persistentActions), (E[41] = S))
          : (S = E[41]),
        E[42] !== D || E[43] !== V || E[44] !== et
          ? ((A =
              null == et && null == V
                ? null
                : (0, a.jsxs)(h.J5, {
                    hideWhenEmpty: !0,
                    label: D.formatMessage({ id: "codex.space.page.header.sharing", defaultMessage: "Sharing" }),
                    children: [V, et],
                  })),
            (E[42] = D),
            (E[43] = V),
            (E[44] = et),
            (E[45] = A))
          : (A = E[45]),
        E[46] !== A
          ? ((C = { id: "sharing", content: A, collapsePriority: 4 }), (E[46] = A), (E[47] = C))
          : (C = E[47]),
        E[48] !== e.overflow
          ? ((P = { id: "overflow", content: e.overflow }), (E[48] = e.overflow), (E[49] = P))
          : (P = E[49]),
        E[50] !== Z || E[51] !== ee
          ? ((k = { id: "window-controls", content: (0, a.jsx)(u.j, { tabId: ee, onClose: Z }) }),
            (E[50] = Z),
            (E[51] = ee),
            (E[52] = k))
          : (k = E[52]),
        E[53] !== b ||
        E[54] !== j ||
        E[55] !== y ||
        E[56] !== w ||
        E[57] !== I ||
        E[58] !== S ||
        E[59] !== C ||
        E[60] !== P ||
        E[61] !== k
          ? ((M = [b, j, y, w, I, S, C, P, k]),
            (E[53] = b),
            (E[54] = j),
            (E[55] = y),
            (E[56] = w),
            (E[57] = I),
            (E[58] = S),
            (E[59] = C),
            (E[60] = P),
            (E[61] = k),
            (E[62] = M))
          : (M = E[62]),
        E[63] !== ep ||
        E[64] !== eg ||
        E[65] !== em ||
        E[66] !== v ||
        E[67] !== M ||
        E[68] !== d ||
        E[69] !== ec ||
        E[70] !== eu
          ? ((N = (0, a.jsx)(h.Yi, {
              "data-page-toolbar": !0,
              className: d,
              contentFade: ec,
              density: eu,
              layout: ep,
              inset: eg,
              placement: em,
              leading: v,
              trailing: M,
            })),
            (E[63] = ep),
            (E[64] = eg),
            (E[65] = em),
            (E[66] = v),
            (E[67] = M),
            (E[68] = d),
            (E[69] = ec),
            (E[70] = eu),
            (E[71] = N))
          : (N = E[71]),
        E[72] !== N || E[73] !== ei
          ? ((T = (0, a.jsx)(g.M, { placement: ei, children: N })), (E[72] = N), (E[73] = ei), (E[74] = T))
          : (T = E[74]),
        T
      )
    }
    function b(e) {
      let t,
        n,
        i,
        r = (0, l.c)(18),
        { children: o, hostedControls: c, contentFade: u, separator: g, surface: m, overlay: h, titlePlacement: x } = e,
        f = void 0 !== u && u
      if ((void 0 !== c && c) || "inline" === m) {
        let e
        return (r[0] !== o ? ((e = (0, a.jsx)(a.Fragment, { children: o })), (r[0] = o), (r[1] = e)) : (e = r[1]), e)
      }
      let v = h ?? "side-panel" === m
      if ("window" === m || ("side-panel" !== m && (0, p.x)("/space/:pageId"))) {
        let e
        return (
          r[2] !== o || r[3] !== f || r[4] !== g
            ? ((e = (0, a.jsx)(d.G.Header, { contentFade: f, separator: g, children: o })),
              (r[2] = o),
              (r[3] = f),
              (r[4] = g),
              (r[5] = e))
            : (e = r[5]),
          e
        )
      }
      if ("side-panel" === m || "route-titlebar" === (void 0 === x ? "toolbar" : x)) {
        let e,
          t,
          n = v ? "absolute inset-x-0 top-0" : "relative"
        return (
          r[6] !== n ? ((e = (0, s.A)("pointer-events-none z-30 shrink-0", n)), (r[6] = n), (r[7] = e)) : (e = r[7]),
          r[8] !== o || r[9] !== e
            ? ((t = (0, a.jsx)("div", { className: e, children: o })), (r[8] = o), (r[9] = e), (r[10] = t))
            : (t = r[10]),
          t
        )
      }
      r[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(d.G.MainContentLayout, { layout: "custom-titlebar" })), (r[11] = t))
        : (t = r[11])
      let b = v ? "absolute inset-x-0 top-0" : "relative"
      return (
        r[12] !== b
          ? ((n = (0, s.A)(
              "pointer-events-none z-30 shrink-0 [--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]",
              b,
            )),
            (r[12] = b),
            (r[13] = n))
          : (n = r[13]),
        r[14] !== o || r[15] !== g || r[16] !== n
          ? ((i = (0, a.jsxs)(a.Fragment, {
              children: [t, (0, a.jsx)(d.G.Header, { className: n, inline: !0, separator: g, children: o })],
            })),
            (r[14] = o),
            (r[15] = g),
            (r[16] = n),
            (r[17] = i))
          : (i = r[17]),
        i
      )
    }
    n.d(
      t,
      {},
      {
        Ix: b,
        bJ: function (e) {
          let t,
            n,
            i,
            s,
            r,
            o,
            d,
            c,
            u,
            g = (0, l.c)(20)
          g[0] !== e
            ? (({ surface: i, contentFade: s, separator: r, overlay: n, onClose: t, ...o } = e),
              (g[0] = e),
              (g[1] = t),
              (g[2] = n),
              (g[3] = i),
              (g[4] = s),
              (g[5] = r),
              (g[6] = o))
            : ((t = g[1]), (n = g[2]), (i = g[3]), (s = g[4]), (r = g[5]), (o = g[6]))
          let m = void 0 !== s && s,
            h = void 0 === r || r
          g[7] !== i
            ? ((d = "window" === i || ("side-panel" !== i && (0, p.x)("/space/:pageId"))), (g[7] = i), (g[8] = d))
            : (d = g[8])
          let x = d,
            f = m && !x,
            j = !x,
            y = x ? void 0 : t
          return (
            g[9] !== f || g[10] !== j || g[11] !== y || g[12] !== o
              ? ((c = (0, a.jsx)(v, { ...o, contentFade: f, inset: j, onClose: y })),
                (g[9] = f),
                (g[10] = j),
                (g[11] = y),
                (g[12] = o),
                (g[13] = c))
              : (c = g[13]),
            g[14] !== n || g[15] !== h || g[16] !== i || g[17] !== c || g[18] !== o.titlePlacement
              ? ((u = (0, a.jsx)(b, {
                  surface: i,
                  separator: h,
                  overlay: n,
                  titlePlacement: o.titlePlacement,
                  children: c,
                })),
                (g[14] = n),
                (g[15] = h),
                (g[16] = i),
                (g[17] = c),
                (g[18] = o.titlePlacement),
                (g[19] = u))
              : (u = g[19]),
            u
          )
        },
        s8: v,
        zl: function (e) {
          let t,
            n,
            i = (0, l.c)(6),
            { children: s, documentType: r, editor: o } = e
          i[0] !== r || i[1] !== o
            ? ((t =
                null != r &&
                "page" !== r &&
                !(0, x.g_)(r) &&
                "inline" !== o.surface &&
                !1 !== o.isActive &&
                !1 !== o.isVisible),
              (i[0] = r),
              (i[1] = o),
              (i[2] = t))
            : (t = i[2])
          let d = t
          return (
            i[3] !== s || i[4] !== d
              ? ((n = (0, a.jsx)(c.bn, { enabled: d, contentInset: "default", children: s })),
                (i[3] = s),
                (i[4] = d),
                (i[5] = n))
              : (n = i[5]),
            n
          )
        },
      },
    )
  },
  UMbd(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("M3ZP"),
      s = n("XTT8"),
      r = n("jGmw"),
      o = n("Qv93"),
      d = n("on57"),
      c = n("Wf1j"),
      u = n("Qgfj"),
      p = n("bVeK"),
      g = n("UxN3"),
      m = n("zTDg")
    let h = {
        text: { 16: p.K95, 20: p.T8H },
        image: { 16: p.UJ6, 20: p.pYT },
        table: { assets: { 16: r.a, 20: o.h } },
        insert: { assets: { 16: i.D, 20: s.w } },
      },
      x = (0, u.YK)({
        text: { id: "codex.space.page.header.text", defaultMessage: "Text" },
        image: { id: "codex.space.page.header.image", defaultMessage: "Image" },
        table: { id: "codex.space.page.header.table", defaultMessage: "Table" },
        insert: { id: "codex.space.page.header.insert", defaultMessage: "Insert" },
      })
    n.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            n,
            i,
            s,
            r,
            o,
            u,
            p = (0, l.c)(17)
          p[0] !== e
            ? (({ action: t, className: n, ...i } = e), (p[0] = e), (p[1] = t), (p[2] = n), (p[3] = i))
            : ((t = p[1]), (n = p[2]), (i = p[3]))
          let f = (0, c.A)(),
            v = "text" === t && "-me-0.5"
          ;(p[4] !== n || p[5] !== v ? ((s = (0, d.A)(n, v)), (p[4] = n), (p[5] = v), (p[6] = s)) : (s = p[6]),
            p[7] !== t || p[8] !== f ? ((r = f.formatMessage(x[t])), (p[7] = t), (p[8] = f), (p[9] = r)) : (r = p[9]))
          let b = h[t]
          return (
            p[10] !== b ? ((o = (0, a.jsx)(g.b5, { icon: b })), (p[10] = b), (p[11] = o)) : (o = p[11]),
            p[12] !== i || p[13] !== s || p[14] !== r || p[15] !== o
              ? ((u = (0, a.jsx)(m.p, { ...i, className: s, appearance: "viewer", label: r, children: o })),
                (p[12] = i),
                (p[13] = s),
                (p[14] = r),
                (p[15] = o),
                (p[16] = u))
              : (u = p[16]),
            u
          )
        },
      },
    )
  },
  gaGc(e, t, n) {
    var a = n("QosV"),
      l = n("qmMi"),
      i = n("zd8w"),
      s = n("OWtl")
    n.d(
      t,
      {},
      {
        D: function (e, t) {
          let n,
            r,
            o,
            d,
            c,
            u = (0, a.c)(15),
            p = (0, l.gh)(s.u),
            g = (0, l.Ul)(e ? t : void 0)
          u[0] !== t || u[1] !== e
            ? ((n = () => ({ waiting: e, startedAt: null == t ? Date.now() : 0 })), (u[0] = t), (u[1] = e), (u[2] = n))
            : (n = u[2])
          let [m, h] = (0, i.useState)(n)
          e !== m.waiting && h({ waiting: e })
          let [x, f] = (0, i.useState)()
          ;(u[3] !== m || u[4] !== g || u[5] !== e
            ? ((r = () => {
                let t
                if (!e) return
                let n = Math.max(g ?? 0, m.startedAt ?? Date.now()),
                  a = () => {
                    clearTimeout(t)
                    let e = n + 3e4 - Date.now()
                    e <= 0 ? f({ local: m, openedAt: g }) : (t = setTimeout(a, e))
                  }
                return (
                  a(),
                  document.addEventListener("visibilitychange", a),
                  document.addEventListener("resume", a),
                  window.addEventListener("pageshow", a),
                  () => {
                    ;(clearTimeout(t),
                      document.removeEventListener("visibilitychange", a),
                      document.removeEventListener("resume", a),
                      window.removeEventListener("pageshow", a))
                  }
                )
              }),
              (o = [e, m, g]),
              (u[3] = m),
              (u[4] = g),
              (u[5] = e),
              (u[6] = r),
              (u[7] = o))
            : ((r = u[6]), (o = u[7])),
            (0, i.useEffect)(r, o))
          let v = e && x?.local === m && x.openedAt === g
          return (
            u[8] !== t || u[9] !== p || u[10] !== e
              ? ((d = () => {
                  let n = Date.now()
                  ;(null != t && p.set(t, n), h({ waiting: e, startedAt: n }))
                }),
                (u[8] = t),
                (u[9] = p),
                (u[10] = e),
                (u[11] = d))
              : (d = u[11]),
            u[12] !== v || u[13] !== d
              ? ((c = { stalled: v, restart: d }), (u[12] = v), (u[13] = d), (u[14] = c))
              : (c = u[14]),
            c
          )
        },
      },
    )
  },
  s1gj(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("on57"),
      s = n("K4Cx")
    n.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            n,
            r,
            o,
            d,
            c = (0, l.c)(10)
          c[0] !== e
            ? (({ reserveSpace: r, className: t, ...n } = e), (c[0] = e), (c[1] = t), (c[2] = n), (c[3] = r))
            : ((t = c[1]), (n = c[2]), (r = c[3]))
          let u =
            void 0 !== r && r
              ? "w-[calc(var(--page-explorer-width)*var(--page-explorer-progress))]"
              : "w-[var(--page-explorer-width)]"
          return (
            c[4] !== t || c[5] !== u
              ? ((o = (0, i.A)(
                  "[--page-explorer-width:min(calc(var(--spacing)*78+var(--viewer-header-start-inset,0px)*var(--viewer-panel-header-inset-scale,0)),100%)]",
                  u,
                  t,
                )),
                (c[4] = t),
                (c[5] = u),
                (c[6] = o))
              : (o = c[6]),
            c[7] !== n || c[8] !== o
              ? ((d = (0, a.jsx)(s.P.div, { ...n, className: o })), (c[7] = n), (c[8] = o), (c[9] = d))
              : (d = c[9]),
            d
          )
        },
      },
    )
  },
  QJmH(e, t, n) {
    n.d(t, { w: () => g })
    var a = n("ABep"),
      l = n("QosV"),
      i = n("suct"),
      s = n("iodE"),
      r = n("qmMi"),
      o = n("I7bK"),
      d = n("eGPX"),
      c = n("s1gj")
    let u = { "--page-explorer-progress": 0, opacity: 0 }
    function p() {
      let e,
        t,
        n,
        i = (0, l.c)(7),
        p = (0, r.Ul)(d.x),
        g = (0, s.tF)()
      ;(i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = { "--page-explorer-progress": 1, opacity: 1 }), (i[0] = e))
        : (e = i[0]),
        i[1] !== p ? ((t = p ? { duration: 0 } : o.IH), (i[1] = p), (i[2] = t)) : (t = i[2]))
      let m = !g,
        h = !g
      return (
        i[3] !== t || i[4] !== m || i[5] !== h
          ? ((n = (0, a.jsx)(c.i, {
              reserveSpace: !0,
              "data-page-explorer-column": !0,
              className: "hidden min-h-0 shrink-0 @3xl/page-explorer:block",
              style: u,
              animate: e,
              exit: u,
              transition: t,
              "aria-hidden": m,
              inert: h,
            })),
            (i[3] = t),
            (i[4] = m),
            (i[5] = h),
            (i[6] = n))
          : (n = i[6]),
        n
      )
    }
    function g(e) {
      let t,
        n,
        s,
        r,
        o,
        d = (0, l.c)(15),
        { children: c, explorer: u, renderContent: g } = e
      d[0] !== c || d[1] !== g ? ((t = null == g ? c : g(c)), (d[0] = c), (d[1] = g), (d[2] = t)) : (t = d[2])
      let m = t
      if (null == u) {
        let e
        return (d[3] !== m ? ((e = (0, a.jsx)(a.Fragment, { children: m })), (d[3] = m), (d[4] = e)) : (e = d[4]), e)
      }
      return (
        d[5] !== u.dropdown || d[6] !== u.open
          ? ((n = u.open && !u.dropdown ? (0, a.jsx)(p, {}, "page-explorer") : null),
            (d[5] = u.dropdown),
            (d[6] = u.open),
            (d[7] = n))
          : (n = d[7]),
        d[8] !== n ? ((s = (0, a.jsx)(i.N, { initial: !1, children: n })), (d[8] = n), (d[9] = s)) : (s = d[9]),
        d[10] !== m
          ? ((r = (0, a.jsx)("div", { className: "relative flex min-h-0 min-w-0 flex-1 flex-col", children: m })),
            (d[10] = m),
            (d[11] = r))
          : (r = d[11]),
        d[12] !== s || d[13] !== r
          ? ((o = (0, a.jsxs)("div", {
              className: "relative flex min-h-0 min-w-0 flex-1 overflow-hidden",
              "data-page-explorer-content": !0,
              children: [s, r],
            })),
            (d[12] = s),
            (d[13] = r),
            (d[14] = o))
          : (o = d[14]),
        o
      )
    }
  },
  BuCo(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("qmMi"),
      s = n("Wf1j"),
      r = n("Sm6l"),
      o = n("bVeK"),
      d = n("e1xH"),
      c = n("nDmq")
    n.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            n,
            u,
            p,
            g,
            m = (0, l.c)(22),
            {
              title: h,
              pageId: x,
              symbol: f,
              documentType: v,
              namespace: b,
              navigation: j,
              people: y,
              overflow: _,
              onExpand: w,
              onSelect: I,
            } = e,
            S = (0, s.A)(),
            A = (0, i.Ul)(d.pagesEnabled$),
            C = I ? "button" : "div"
          return (
            m[0] !== C ||
            m[1] !== v ||
            m[2] !== b ||
            m[3] !== j ||
            m[4] !== I ||
            m[5] !== x ||
            m[6] !== A ||
            m[7] !== f ||
            m[8] !== h
              ? ((t =
                  A && null != j && null == I
                    ? j
                    : (0, a.jsx)(c.s, {
                        pageId: x,
                        documentType: v,
                        namespace: b,
                        symbol: f,
                        title: h,
                        children: (e) => {
                          let { icon: t, title: n } = e
                          return (0, a.jsxs)(C, {
                            type: I ? "button" : void 0,
                            className: "flex min-w-0 items-center gap-2 text-sm font-medium",
                            "data-popcorn-element-handle": I ? "" : void 0,
                            onClick: I,
                            children: [t, (0, a.jsx)("span", { className: "truncate", children: n })],
                          })
                        },
                      })),
                (m[0] = C),
                (m[1] = v),
                (m[2] = b),
                (m[3] = j),
                (m[4] = I),
                (m[5] = x),
                (m[6] = A),
                (m[7] = f),
                (m[8] = h),
                (m[9] = t))
              : (t = m[9]),
            m[10] !== t
              ? ((n = (0, a.jsx)("div", { className: "min-w-0 flex-1", children: t })), (m[10] = t), (m[11] = n))
              : (n = m[11]),
            m[12] !== S || m[13] !== w
              ? ((u =
                  null != w &&
                  (0, a.jsx)(r.$, {
                    color: "ghost",
                    size: "toolbar",
                    uniform: !0,
                    onClick: w,
                    "aria-label": S.formatMessage({
                      id: "codex.page.inline.expand",
                      defaultMessage: "Open in side panel",
                    }),
                    children: (0, a.jsx)(o.Zji, {}),
                  })),
                (m[12] = S),
                (m[13] = w),
                (m[14] = u))
              : (u = m[14]),
            m[15] !== _ || m[16] !== y || m[17] !== u
              ? ((p = (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [y, _, u] })),
                (m[15] = _),
                (m[16] = y),
                (m[17] = u),
                (m[18] = p))
              : (p = m[18]),
            m[19] !== n || m[20] !== p
              ? ((g = (0, a.jsxs)("div", {
                  className:
                    "flex h-toolbar shrink-0 items-center justify-between gap-3 border-b border-subtle px-4 select-none",
                  children: [n, p],
                })),
                (m[19] = n),
                (m[20] = p),
                (m[21] = g))
              : (g = m[21]),
            g
          )
        },
      },
    )
  },
  CNwL(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("qmMi"),
      s = n("Wf1j"),
      r = n("wD9O"),
      o = n("KQH2"),
      d = n("Y1D1"),
      c = n("B4pj"),
      u = n("X6Vn"),
      p = n("NRR1"),
      g = n("rpnz"),
      m = n("rH0R"),
      h = n("tv8P"),
      x = n("OWtl"),
      f = n("UOwN"),
      v = n("rTPf")
    function b() {
      return null
    }
    function j(e) {
      let { metadata: t } = e
      return t.access.can_share ? t.page_id : null
    }
    function y(e) {
      let t,
        n,
        r,
        d,
        c,
        u = (0, l.c)(18),
        { accountUserId: p, decorative: g, onClick: m } = e,
        h = (0, s.A)(),
        x = (0, i._U)(v.ik, p)
      u[0] !== h
        ? ((t = h.formatMessage({ id: "codex.space.page.collaborator.draftCreator", defaultMessage: "You" })),
          (u[0] = h),
          (u[1] = t))
        : (t = u[1])
      let b = t,
        j = x ?? b
      u[2] !== p || u[3] !== j
        ? ((n = (0, a.jsx)(f.Y, { accountUserId: p, name: j })), (u[2] = p), (u[3] = j), (u[4] = n))
        : (n = u[4])
      let y = n
      if (g) {
        let e
        return (
          u[5] !== y
            ? ((e = (0, a.jsx)("span", {
                className: "inline-flex rounded-full border border-transparent p-px",
                children: y,
              })),
              (u[5] = y),
              (u[6] = e))
            : (e = u[6]),
          e
        )
      }
      return (
        u[7] !== h
          ? ((r = h.formatMessage({ id: "codex.space.page.draftCreator.share", defaultMessage: "Share page" })),
            (u[7] = h),
            (u[8] = r))
          : (r = u[8]),
        u[9] !== h || u[10] !== b || u[11] !== x
          ? ((d =
              null == x
                ? b
                : h.formatMessage(
                    { id: "codex.space.page.collaborator.localAccessTooltip", defaultMessage: "{name} (you)" },
                    { name: x },
                  )),
            (u[9] = h),
            (u[10] = b),
            (u[11] = x),
            (u[12] = d))
          : (d = u[12]),
        u[13] !== y || u[14] !== m || u[15] !== r || u[16] !== d
          ? ((c = (0, a.jsx)(o.e, { ariaLabel: r, onClick: m, tooltip: d, children: y })),
            (u[13] = y),
            (u[14] = m),
            (u[15] = r),
            (u[16] = d),
            (u[17] = c))
          : (c = u[17]),
        c
      )
    }
    function _() {
      let e,
        t,
        n,
        i = (0, l.c)(5),
        r = (0, s.A)()
      return (
        i[0] !== r
          ? ((e = r.formatMessage({
              id: "codex.space.page.collaborator.loading",
              defaultMessage: "Loading collaborators",
            })),
            (i[0] = r),
            (i[1] = e))
          : (e = i[1]),
        i[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(d.T, {})), (i[2] = t)) : (t = i[2]),
        i[3] !== e ? ((n = (0, a.jsx)(o.e, { tooltip: e, children: t })), (i[3] = e), (i[4] = n)) : (n = i[4]),
        n
      )
    }
    n.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            n,
            o,
            f,
            v = (0, l.c)(24),
            { pageId: w, collapsible: I, decorative: S, people: A, showPlaceholder: C } = e,
            P = void 0 !== S && S,
            k = void 0 !== C && C,
            M = (0, i.gh)(x.u),
            N = (0, s.A)(),
            T = (0, r.dz)(),
            E = (0, i._U)(h.loadedSpacePageMetadata$, w ?? null),
            D = null != w && (0, g.sD)(w),
            O = (0, i._U)(k && D && 0 === A.length ? h.spacePageCreation$ : null, w ?? ""),
            R = O?.startedAsBlankPage && null == O.serverPageId,
            U = (0, i.Ul)(R ? p.jv : null)
          if (0 === A.length && !k) return null
          let F = R && null != U
          if (F) {
            let e, n
            ;(v[0] !== O || v[1] !== M
              ? ((e = () => {
                  let e = O.retry().then(j, b)
                  ;(0, u.qf)(M, m.DN, { savedPageId: e })
                }),
                (v[0] = O),
                (v[1] = M),
                (v[2] = e))
              : (e = v[2]),
              v[3] !== U || v[4] !== P || v[5] !== e
                ? ((n = (0, a.jsx)(y, { accountUserId: U, decorative: P, onClick: e })),
                  (v[3] = U),
                  (v[4] = P),
                  (v[5] = e),
                  (v[6] = n))
                : (n = v[6]),
              (t = n))
          } else if (k && (!D || 0 === A.length)) {
            let e
            ;(v[7] !== P
              ? ((e = P
                  ? (0, a.jsx)("span", {
                      className: "inline-flex rounded-full border border-transparent p-px",
                      children: (0, a.jsx)(d.T, {}),
                    })
                  : (0, a.jsx)(_, {})),
                (v[7] = P),
                (v[8] = e))
              : (e = v[8]),
              (t = e))
          }
          let W = !P,
            L = 8 * T
          v[9] !== A || v[10] !== t || v[11] !== W || v[12] !== L
            ? ((n = (0, a.jsx)(c.g, {
                deferInitialFit: !0,
                interactive: W,
                maskOverlap: !0,
                overflowSideOffset: L,
                people: A,
                placeholder: t,
              })),
              (v[9] = A),
              (v[10] = t),
              (v[11] = W),
              (v[12] = L),
              (v[13] = n))
            : (n = v[13])
          let B = n
          if (P) {
            let e
            return (
              v[14] !== B
                ? ((e = (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    inert: !0,
                    className: "inline-flex min-w-0 items-center",
                    "data-page-share-facepile": !0,
                    "data-viewer-header-collapsible": !0,
                    children: B,
                  })),
                  (v[14] = B),
                  (v[15] = e))
                : (e = v[15]),
              e
            )
          }
          v[16] !== N || v[17] !== E?.document_type
            ? ((o = N.formatMessage(
                {
                  id: "codex.space.page.collaborator.groupLabel.byDocumentType",
                  defaultMessage:
                    "{documentType, select, granola_presentation {Slide collaborators} granola_workbook {Sheet collaborators} other {Page collaborators}}",
                },
                { documentType: E?.document_type ?? "page" },
              )),
              (v[16] = N),
              (v[17] = E?.document_type),
              (v[18] = o))
            : (o = v[18])
          let z = (0 === A.length && !F) || void 0,
            $ = void 0 === I || I || void 0
          return (
            v[19] !== B || v[20] !== o || v[21] !== z || v[22] !== $
              ? ((f = (0, a.jsx)("div", {
                  className: "flex min-w-0 items-center select-none",
                  "aria-label": o,
                  "aria-busy": z,
                  "data-viewer-header-collapsible": $,
                  role: "group",
                  children: B,
                })),
                (v[19] = B),
                (v[20] = o),
                (v[21] = z),
                (v[22] = $),
                (v[23] = f))
              : (f = v[23]),
            f
          )
        },
      },
    )
  },
  ShyJ(e, t, n) {
    let a = (0, n("Qgfj").zR)({
      id: "codex.space.page.reloadRequired.saveFailed",
      defaultMessage: "Couldn't save your changes on this device. Keep this page open and try again.",
    })
    n.d(
      t,
      {},
      {
        F: a,
        y: async function (e, t = !1) {
          let n = e.getSnapshot()
          ;(t ||
            n.pendingUpdates > 0 ||
            n.recoveryDrafts.length > 0 ||
            e.hasDeferredLocalEdits ||
            "pending" === n.localSave.status ||
            ("blocked" === n.localSave.status && n.localSave.hasUnsavedEdits)) &&
            (await e.flush({ waitFor: "local" }))
        },
      },
    )
  },
  I0MT(e, t, n) {
    var a = n("qmMi"),
      l = n("SPnB"),
      i = n("SGsN"),
      s = n("svjy"),
      r = n("NRR1"),
      o = n("EqWS"),
      d = n("kq7t"),
      c = n("tv8P"),
      u = n("OWtl"),
      p = n("kK7d"),
      g = n("mJtW")
    let m = (0, a.i1)(u.u, (e, { get: t }) => {
        var n
        let a =
          t(c.spacePageQuery$, e, { enabled: !1 }).data?.metadata ??
          t(c.spacePageAncestryQuery$, e, { enabled: !1 }).data?.metadata
        return null != a &&
          ((n = t(c.spacePageContext$, e)),
          a.access.can_write &&
            null == a.deleted_at &&
            null == a.site_project_id &&
            (null == a.namespace || "template" === a.namespace) &&
            (null == a.document_type || "page" === a.document_type || "granola_presentation" === a.document_type) &&
            !1 === n.isSpaceRoot &&
            void 0 !== n.space)
          ? "template" === a.namespace
          : null
      }),
      h = (0, a.c4)(u.u, (e, { scope: t, get: n }) => {
        let a = n(r.DO),
          u = n(l.chatGptAuthenticatedUserId$),
          m = n(l.o8)
        return {
          mutationKey: ["space", "mark-template", a, u, e],
          retry: !1,
          mutationFn: async (n) => {
            if (null == a) return
            let l = (0, r.hI)(t, a, u)
            try {
              let i
              try {
                i = await p.CodexRequest.safePatch("/pages/{page_id}/metadata", {
                  parameters: { path: { page_id: e } },
                  requestBody: { template: { enabled: n } },
                  signal: l.signal,
                })
              } catch {
                ;(l.signal.throwIfAborted(),
                  (i = await (0, c.fetchSpacePageMetadata)(t, e, { accountId: a, userId: u, signal: l.signal })))
              }
              l.signal.throwIfAborted()
              let { metadata: s } = i
              if (
                ((0, d.applyPageRealtimeMetadata)(t, s),
                (0, o.oC)(
                  t,
                  a,
                  (t) =>
                    t.page_id === e
                      ? {
                          ...t,
                          namespace: s.namespace,
                          namespace_properties: s.namespace_properties,
                          namespace_properties_revision: s.namespace_properties_revision,
                          namespace_properties_schema_version: s.namespace_properties_schema_version,
                        }
                      : t,
                  void 0,
                ),
                ("template" === s.namespace) !== n)
              )
                throw Error("Template status did not change")
              null != m && (0, g.n)(t.queryClient, [a, m], n ? void 0 : e)
            } catch {
              l.signal.aborted ||
                t
                  .get(i.Id)
                  .danger(
                    t
                      .get(s.g)
                      .formatMessage({
                        id: "codex.pages.templates.markFailed",
                        defaultMessage: "Couldn\u2019t update template status",
                        description: "Error when marking or unmarking a file as a template",
                      }),
                    { errorAnalytics: { toastId: "codex.pages.templates.markFailed" } },
                  )
            } finally {
              l.stop()
            }
          },
        }
      }),
      x = (0, a.i1)(u.u, (e, { get: t }) => {
        let n = t(c.loadedSpacePageMetadata$, e, { enabled: !1 })
        if (null == n) return n
        let a = t(h, e)
        return a.isPending && null != a.variables ? { ...n, namespace: a.variables ? "template" : null } : n
      })
    n.d(t, {}, { ZQ: m, kS: h, pL: x })
  },
  sqqv(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("slpy"),
      s = n("Wf1j"),
      r = n("oyxz"),
      o = n("Sm6l"),
      d = n("bVeK"),
      c = n("mphG"),
      u = n("ABl9"),
      p = n("Zt82")
    n.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            n,
            g,
            m,
            h,
            x,
            f,
            v,
            b,
            j,
            y,
            _,
            w = (0, l.c)(26)
          w[0] !== e
            ? (({ title: m, project: n, onActivate: t, ...g } = e),
              (w[0] = e),
              (w[1] = t),
              (w[2] = n),
              (w[3] = g),
              (w[4] = m))
            : ((t = w[1]), (n = w[2]), (g = w[3]), (m = w[4]))
          let I = (0, s.A)(),
            S = n?.name
          return (
            w[5] !== I || w[6] !== S ? ((h = (0, p.V)(I, S)), (w[5] = I), (w[6] = S), (w[7] = h)) : (h = w[7]),
            w[8] !== t || w[9] !== g
              ? ((x = (e) => {
                  ;(g.onClick?.(e), t?.())
                }),
                (f = (e) => {
                  ;(g.onKeyDown?.(e), e.defaultPrevented && !e.repeat && ("Enter" === e.key || " " === e.key) && t?.())
                }),
                (w[8] = t),
                (w[9] = g),
                (w[10] = x),
                (w[11] = f))
              : ((x = w[10]), (f = w[11])),
            w[12] !== n
              ? ((v =
                  null == n
                    ? null
                    : (0, a.jsx)(i.m, {
                        content: n.name,
                        children: (0, a.jsx)("span", {
                          "aria-hidden": "true",
                          className: "flex shrink-0 items-center",
                          children: n.icon,
                        }),
                      })),
                (w[12] = n),
                (w[13] = v))
              : (v = w[13]),
            w[14] !== m
              ? ((b =
                  "string" == typeof m
                    ? (0, u.io)(m)
                    : (m ??
                      (0, a.jsx)(r.A, { id: "threadWorkspace.chatTitlebar.fallbackTitle", defaultMessage: "Chat" }))),
                (w[14] = m),
                (w[15] = b))
              : (b = w[15]),
            w[16] !== b
              ? ((j = (0, a.jsx)(c.w, { className: "min-w-0 truncate", children: b })), (w[16] = b), (w[17] = j))
              : (j = w[17]),
            w[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, a.jsx)("span", {
                  className: "grid size-3.5 shrink-0 place-items-center",
                  children: (0, a.jsx)(d.Awc, {}),
                })),
                (w[18] = y))
              : (y = w[18]),
            w[19] !== g || w[20] !== h || w[21] !== x || w[22] !== f || w[23] !== v || w[24] !== j
              ? ((_ = (0, a.jsxs)(o.$, {
                  "aria-description": h,
                  ...g,
                  onClick: x,
                  onKeyDown: f,
                  className: "conversation-header-control max-w-full min-w-0 select-none",
                  color: "ghostActive",
                  size: "conversationTitle",
                  children: [v, j, y],
                })),
                (w[19] = g),
                (w[20] = h),
                (w[21] = x),
                (w[22] = f),
                (w[23] = v),
                (w[24] = j),
                (w[25] = _))
              : (_ = w[25]),
            _
          )
        },
      },
    )
  },
  RiLw(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("oyxz"),
      s = n("bVeK"),
      r = n("UxN3"),
      o = n("Y3Vu"),
      d = n("oP6N")
    let c = (0, a.jsx)(r.b5, { className: d.A.shareIcon, icon: { 16: s.T7p, 20: s._Ui } })
    n.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            n,
            s,
            r,
            d,
            u,
            p = (0, l.c)(11)
          p[0] !== e
            ? (({ children: t, facepile: n, leading: r, ...s } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = n),
              (p[3] = s),
              (p[4] = r))
            : ((t = p[1]), (n = p[2]), (s = p[3]), (r = p[4]))
          let g = void 0 === r ? c : r
          return (
            p[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, a.jsx)("span", {
                  "data-page-share-label": !0,
                  "data-tooltip-visibility-target": !0,
                  "data-tooltip-enablement-target": !0,
                  "data-viewer-header-collapsible": !0,
                  className: "overflow-hidden whitespace-nowrap",
                  children: (0, a.jsx)(i.A, { id: "artifactViewer.share", defaultMessage: "Share" }),
                })),
                (p[5] = d))
              : (d = p[5]),
            p[6] !== t || p[7] !== n || p[8] !== g || p[9] !== s
              ? ((u = (0, a.jsxs)(o.DW, { focusRing: "inset", ...s, children: [g, n, d, t] })),
                (p[6] = t),
                (p[7] = n),
                (p[8] = g),
                (p[9] = s),
                (p[10] = u))
              : (u = p[10]),
            u
          )
        },
      },
    )
  },
}
//# sourceMappingURL=303047.bfdf47b7ff.js.map
