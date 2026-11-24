export const __rspack_esm_ids = [59817]
export const __webpack_modules__ = {
  I2MU(e, t, n) {
    var r = n("ToFj"),
      s = n("kK7d")
    n.d(
      t,
      {},
      {
        y: async function ({ pageId: e, checkpointId: t, streamKind: n, signal: o }) {
          for (let a = 0; a < 2; a += 1) {
            o.throwIfAborted()
            let i = await s.CodexRequest.safeGet("/pages/{page_id}/versions/{checkpoint_id}/checkpoint-bootstrap", {
              parameters: {
                path: { page_id: e, checkpoint_id: t },
                query: { stream_kind: n, prefer_lite_checkpoint: !0 },
              },
              signal: o,
            })
            if (i.page_id !== e || i.checkpoint?.checkpoint_id !== t)
              throw Error("The requested Page checkpoint is unavailable")
            let l = await (0, r.readPageCheckpointBootstrap)(i, o, a > 0, n)
            o.throwIfAborted()
            let c = null == l ? void 0 : (0, r.getVerifiedPageCheckpoint)(l)
            if (null != c) return c.update
            if (Date.parse(i.checkpoint.expires_at) > Date.now()) break
          }
          throw Error("The Page checkpoint could not be verified")
        },
      },
    )
  },
  LoQl(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      o = n("slpy"),
      a = n("i5ac"),
      i = n.n(a),
      l = n("qmMi"),
      c = n("zd8w"),
      d = n("oyxz"),
      u = n("Yn57"),
      p = n("Sm6l"),
      m = n("RbH1"),
      h = n("rTPf"),
      g = n("uAks")
    function f(e) {
      return JSON.stringify([e.actor_type, e.account_user_id, "agent" === e.actor_type && "o" === e.agent_kind])
    }
    function x(e) {
      let t,
        n,
        o,
        a = (0, s.c)(26),
        { actor: i, names: c, compact: p } = e,
        f = (0, l._U)(h.ik, i.account_user_id ?? "")
      if (a[0] !== i.account_user_id || a[1] !== f || a[2] !== c) {
        let e = null == i.account_user_id ? null : c.get(i.account_user_id)
        ;((t = e?.trim() && e !== i.account_user_id ? e : f),
          (a[0] = i.account_user_id),
          (a[1] = f),
          (a[2] = c),
          (a[3] = t))
      } else t = a[3]
      let x = t
      if ("agent" === i.actor_type && "o" === i.agent_kind) {
        let e, t, n
        a[4] !== x ? ((e = x?.trim().split(/\s+/u)[0]), (a[4] = x), (a[5] = e)) : (e = a[5])
        let s = e
        return (
          a[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)("img", {
                className: "block size-4 shrink-0 object-contain",
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                src: u,
              })),
              (a[6] = t))
            : (t = a[6]),
          a[7] !== p || a[8] !== s || a[9] !== x
            ? ((n = (0, r.jsxs)("span", {
                className: "inline-flex max-w-full items-center gap-1",
                children: [
                  t,
                  (0, r.jsx)("span", {
                    className: "truncate",
                    children: p
                      ? (0, r.jsx)(g._, { ownerName: x ?? void 0 })
                      : (0, r.jsx)(d.A, {
                          id: "codex.page.versions.editedByDot.productName",
                          defaultMessage: "Edited by {hasOwner, select, true {{name}\u2019s {dot}} other {a {dot}}}",
                          values: { hasOwner: !!s, name: s, dot: "dot" },
                        }),
                  }),
                ],
              })),
              (a[7] = p),
              (a[8] = s),
              (a[9] = x),
              (a[10] = n))
            : (n = a[10]),
          n
        )
      }
      if (p) {
        let e, t
        if ("agent" === i.actor_type && null != x) {
          let e
          return (
            a[11] !== x
              ? ((e = (0, r.jsx)(d.A, { ...m.P.authorizedAgent, values: { name: x } })), (a[11] = x), (a[12] = e))
              : (e = a[12]),
            e
          )
        }
        return (
          a[13] !== i.actor_type || a[14] !== x
            ? ((e =
                "user" === i.actor_type && null != x
                  ? x
                  : (0, r.jsx)(d.A, { ...m.P.actor, values: { type: i.actor_type } })),
              (a[13] = i.actor_type),
              (a[14] = x),
              (a[15] = e))
            : (e = a[15]),
          a[16] !== e ? ((t = (0, r.jsx)(r.Fragment, { children: e })), (a[16] = e), (a[17] = t)) : (t = a[17]),
          t
        )
      }
      if ("user" === i.actor_type && null != x) {
        let e
        ;(a[18] !== x
          ? ((e = (0, r.jsx)(d.A, {
              id: "codex.page.versions.editedByPerson",
              defaultMessage: "Edited by {name}",
              values: { name: x },
            })),
            (a[18] = x),
            (a[19] = e))
          : (e = a[19]),
          (n = e))
      } else if ("agent" === i.actor_type && null != x) {
        let e
        ;(a[20] !== x
          ? ((e = (0, r.jsx)(d.A, {
              id: "codex.page.versions.editedByAuthorizedAgent",
              defaultMessage: "Edited by {name}\u2019s ChatGPT",
              values: { name: x },
            })),
            (a[20] = x),
            (a[21] = e))
          : (e = a[21]),
          (n = e))
      } else {
        let e
        ;(a[22] !== i.actor_type
          ? ((e = (0, r.jsx)(d.A, {
              id: "codex.page.versions.editedByActor",
              defaultMessage:
                "{type, select, agent {Edited by ChatGPT} system {Edited by System} user {Edited by a collaborator} other {Edited by another contributor}}",
              values: { type: i.actor_type },
            })),
            (a[22] = i.actor_type),
            (a[23] = e))
          : (e = a[23]),
          (n = e))
      }
      return (a[24] !== n ? ((o = (0, r.jsx)(r.Fragment, { children: n })), (a[24] = n), (a[25] = o)) : (o = a[25]), o)
    }
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            a,
            l,
            u,
            m = (0, s.c)(41),
            { summary: h, names: g, current: v, compact: y } = e,
            b = void 0 !== v && v,
            j = void 0 !== y && y,
            [_, k] = (0, c.useState)(!1),
            w = h?.editor_summary_version === 1
          if (m[0] !== j || m[1] !== _ || m[2] !== w || m[3] !== g || m[4] !== h) {
            if (((t = w ? i()(h.actor_summaries, f) : []), w))
              if (0 === t.length) {
                let e
                ;(m[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)("span", {
                      children: (0, r.jsx)(d.A, {
                        id: "codex.page.versions.editorsEmpty",
                        defaultMessage: "No recorded editors",
                      }),
                    })),
                    (m[8] = e))
                  : (e = m[8]),
                  (n = e))
              } else {
                let e
                ;(m[9] !== g
                  ? ((e = (e) =>
                      (0, r.jsx)(
                        "span",
                        { children: (0, r.jsx)(x, { actor: e, names: g, compact: !1 }) },
                        JSON.stringify([
                          e.actor_type,
                          e.account_user_id,
                          "agent" === e.actor_type && "o" === e.agent_kind,
                        ]),
                      )),
                    (m[9] = g),
                    (m[10] = e))
                  : (e = m[10]),
                  (n = (j || _ ? t : t.slice(0, 3)).map(e)))
              }
            else {
              let e
              ;(m[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)("span", {
                    children: (0, r.jsx)(d.A, {
                      id: "codex.page.versions.editorsUnknown",
                      defaultMessage: "Editor details unavailable",
                    }),
                  })),
                  (m[7] = e))
                : (e = m[7]),
                (n = e))
            }
            ;((m[0] = j), (m[1] = _), (m[2] = w), (m[3] = g), (m[4] = h), (m[5] = t), (m[6] = n))
          } else ((t = m[5]), (n = m[6]))
          m[11] !== b
            ? ((a = b
                ? (0, r.jsx)("span", {
                    children: (0, r.jsx)(d.A, {
                      id: "codex.page.versions.currentEditors",
                      defaultMessage: "Recorded editors since last saved checkpoint",
                    }),
                  })
                : null),
              (m[11] = b),
              (m[12] = a))
            : (a = m[12])
          let S = a
          if (j) {
            let e, s, a, i, l, c, u
            m[13] !== n || m[14] !== S
              ? ((e = (0, r.jsxs)("span", { className: "flex flex-col items-start gap-1", children: [S, n] })),
                (m[13] = n),
                (m[14] = S),
                (m[15] = e))
              : (e = m[15])
            let p = e
            if (0 === t.length) {
              let e
              return (
                m[16] !== p
                  ? ((e = (0, r.jsx)("span", { className: "sr-only", children: p })), (m[16] = p), (m[17] = e))
                  : (e = m[17]),
                e
              )
            }
            return (
              m[18] !== t[0] || m[19] !== g
                ? ((s = null != t[0] ? (0, r.jsx)(x, { actor: t[0], names: g, compact: !0 }) : null),
                  (m[18] = t[0]),
                  (m[19] = g),
                  (m[20] = s))
                : (s = m[20]),
              m[21] !== s
                ? ((a = (0, r.jsx)("span", { "aria-hidden": !0, className: "truncate", children: s })),
                  (m[21] = s),
                  (m[22] = a))
                : (a = m[22]),
              m[23] !== t.length
                ? ((i =
                    t.length > 1
                      ? (0, r.jsx)("span", {
                          "aria-hidden": !0,
                          className: "shrink-0",
                          children: (0, r.jsx)(d.A, {
                            id: "codex.page.versions.additionalEditorsCompact",
                            defaultMessage: "+{count}",
                            values: { count: t.length - 1 },
                          }),
                        })
                      : null),
                  (m[23] = t.length),
                  (m[24] = i))
                : (i = m[24]),
              m[25] !== p
                ? ((l = (0, r.jsx)("span", { className: "sr-only", children: p })), (m[25] = p), (m[26] = l))
                : (l = m[26]),
              m[27] !== a || m[28] !== i || m[29] !== l
                ? ((c = (0, r.jsxs)("span", {
                    className:
                      "pointer-events-auto inline-flex max-w-32 min-w-0 items-center gap-1 text-xs text-codex-description",
                    children: [a, i, l],
                  })),
                  (m[27] = a),
                  (m[28] = i),
                  (m[29] = l),
                  (m[30] = c))
                : (c = m[30]),
              m[31] !== p || m[32] !== c
                ? ((u = (0, r.jsx)(o.m, { content: p, children: c })), (m[31] = p), (m[32] = c), (m[33] = u))
                : (u = m[33]),
              u
            )
          }
          return (
            m[34] !== t.length || m[35] !== _
              ? ((l =
                  t.length > 3
                    ? (0, r.jsx)(p.$, {
                        className: "pointer-events-auto",
                        size: "compact",
                        color: "ghost",
                        onClick: () => k(!_),
                        children: _
                          ? (0, r.jsx)(d.A, {
                              id: "codex.page.versions.fewerEditors",
                              defaultMessage: "Show fewer editors",
                            })
                          : (0, r.jsx)(d.A, {
                              id: "codex.page.versions.moreEditors",
                              defaultMessage: "Show {count} more {count, plural, one {editor} other {editors}}",
                              values: { count: t.length - 3 },
                            }),
                      })
                    : null),
                (m[34] = t.length),
                (m[35] = _),
                (m[36] = l))
              : (l = m[36]),
            m[37] !== n || m[38] !== S || m[39] !== l
              ? ((u = (0, r.jsxs)("span", {
                  className: "flex flex-col items-start gap-1 text-sm text-codex-description",
                  children: [S, n, l],
                })),
                (m[37] = n),
                (m[38] = S),
                (m[39] = l),
                (m[40] = u))
              : (u = m[40]),
            u
          )
        },
      },
    )
  },
  Emas(e, t, n) {
    n.d(t, { PageVersionHistory: () => e_ })
    var r = n("ABep"),
      s = n("QosV"),
      o = n("wTzC"),
      a = n("uris"),
      i = n("T0Rc"),
      l = n("on57"),
      c = n("qmMi"),
      d = n("zd8w"),
      u = n("Wf1j"),
      p = n("oyxz"),
      m = n("eKNk"),
      h = n("SPnB"),
      g = n("Sm6l"),
      f = n("uXTt"),
      x = n("ElEl"),
      v = n("mNPx"),
      y = n("NraH"),
      b = n("tWTn"),
      j = n("JGY2"),
      _ = n("tv8P"),
      k = n("yGJW"),
      w = n("OWtl"),
      S = n("rvFo"),
      M = n("kK7d"),
      C = n("eShZ"),
      A = n("NDpU"),
      I = n("HRnU"),
      N = n("zkPp"),
      E = n("X3K1")
    function D() {
      let e,
        t,
        n = (0, s.c)(2)
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("span", {
              className: "sr-only",
              children: (0, r.jsx)(p.A, {
                id: "codex.page.versions.loadingHistory",
                defaultMessage: "Loading history\u2026",
              }),
            })),
            (n[0] = e))
          : (e = n[0]),
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsxs)("div", {
              className: "-mx-[var(--padding-row-x)]",
              role: "status",
              children: [e, (0, r.jsx)("div", { "aria-hidden": !0, inert: !0, children: [1, 2, 3, 4, 5].map(L) })],
            })),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function L(e) {
      return (0, r.jsx)(
        N.fy,
        {
          compactSecondLine: !0,
          density: "row",
          hasInteractiveContent: !0,
          buttonProps: { disabled: !0 },
          isSelected: !1,
          title: (0, r.jsx)(E.X, { as: "span", className: "block w-16", size: "sm" }),
          rightText: (0, r.jsx)(E.X, { as: "span", className: "block w-24", size: "sm" }),
        },
        e,
      )
    }
    var $ = n("slpy"),
      T = n("wD9O"),
      P = n("bVeK"),
      R = n("v0Gf"),
      q = n("RNul"),
      z = n("UxN3"),
      F = n("AclY"),
      K = n("dN0a"),
      V = n("j9wQ"),
      O = n("TYpa"),
      B = n("LoQl")
    function U(e) {
      let t,
        n,
        o,
        a,
        i,
        c,
        u,
        m,
        h,
        f,
        x,
        v,
        y,
        b,
        j = (0, s.c)(49),
        {
          endpoint: _,
          index: k,
          minIndex: w,
          maxIndex: S,
          timeline: M,
          label: C,
          pressed: A,
          previewLabel: I,
          previewMethod: N,
          onChoose: E,
          onPreview: D,
          onCommit: L,
          onCancel: T,
        } = e,
        P = (0, d.useRef)(null),
        R = (0, d.useRef)(!1)
      ;(j[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => P.current?.()), (n = []), (j[0] = t), (j[1] = n))
        : ((t = j[0]), (n = j[1])),
        (0, d.useEffect)(t, n),
        j[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(p.A, {
              id: "codex.page.versions.timelineHandleHint",
              defaultMessage: "Click or drag to change version",
            })),
            (j[2] = o))
          : (o = j[2]))
      let q = A ? "open" : void 0
      ;(j[3] !== E
        ? ((a = (e) => {
            ;((R.current && 0 !== e.detail) || E(e.currentTarget, e.detail > 0), (R.current = !1))
          }),
          (j[3] = E),
          (j[4] = a))
        : (a = j[4]),
        j[5] !== T || j[6] !== N
          ? ((i = () => {
              "keyboard" === N && T(!1)
            }),
            (j[5] = T),
            (j[6] = N),
            (j[7] = i))
          : (i = j[7]),
        j[8] !== k ||
        j[9] !== S ||
        j[10] !== w ||
        j[11] !== T ||
        j[12] !== L ||
        j[13] !== D ||
        j[14] !== N ||
        j[15] !== M
          ? ((c = (e) => {
              if ("Tab" === e.key && "keyboard" === N) T(!1)
              else if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                ;(e.preventDefault(), e.stopPropagation())
                let t = M.current?.querySelectorAll("[data-version-history-index]")
                if (null == t || 0 === t.length) return
                let n = Math.max(w, Math.min(S, k + ("ArrowUp" === e.key ? -1 : 1)))
                ;(D(n, "keyboard", e.currentTarget), t[n]?.scrollIntoView({ block: "nearest" }))
              } else
                ("Enter" === e.key || " " === e.key) &&
                  "keyboard" === N &&
                  (e.preventDefault(), e.stopPropagation(), L(k, !1))
            }),
            (j[8] = k),
            (j[9] = S),
            (j[10] = w),
            (j[11] = T),
            (j[12] = L),
            (j[13] = D),
            (j[14] = N),
            (j[15] = M),
            (j[16] = c))
          : (c = j[16]),
        j[17] !== k || j[18] !== S || j[19] !== w || j[20] !== T || j[21] !== L || j[22] !== D || j[23] !== M
          ? ((u = (e) => {
              if (0 !== e.button || !1 === e.isPrimary || null != P.current) return
              let t = M.current,
                n = t?.closest('[role="region"]'),
                r = e.currentTarget,
                s = r.ownerDocument,
                o = s.defaultView
              if (null == t || null == n || null == o) return
              ;(r.focus({ preventScroll: !0 }), (R.current = !1))
              let a = n.getBoundingClientRect(),
                i = 0,
                l = 1,
                c = [],
                d = !1,
                u = (e) => {
                  ;((a = e),
                    (i = Number.parseFloat(o.getComputedStyle(n).scrollPaddingBottom) || 0),
                    (l = n.offsetHeight > 0 ? a.height / n.offsetHeight : 1),
                    (c = Array.from(t.querySelectorAll("[data-version-history-index]"), (e) => {
                      let t = e.getBoundingClientRect()
                      return {
                        index: Number(e.dataset.versionHistoryIndex),
                        center: t.top + t.height / 2 + n.scrollTop * l,
                      }
                    })),
                    (d = !1))
                }
              if ((u(a), 0 === c.length)) return
              let p = new AbortController(),
                m = e.pointerId,
                h = e.clientX,
                g = e.clientY,
                f = g,
                x = !1,
                v = k,
                y = !1,
                b = 0,
                j = 0,
                _ = () => {
                  ;(p.abort(),
                    E.disconnect(),
                    o.cancelAnimationFrame(b),
                    (P.current = null),
                    r.hasPointerCapture?.(m) && r.releasePointerCapture(m))
                },
                C = () => {
                  ;(_(), x && T())
                },
                A = () => {
                  let e = f + n.scrollTop * l,
                    t = Math.max(
                      w,
                      Math.min(S, c.reduce((t, n) => (Math.abs(n.center - e) < Math.abs(t.center - e) ? n : t)).index),
                    )
                  ;(y && v === t) || ((y = !0), D((v = t), "pointer", r))
                },
                I = (e) => {
                  b = 0
                  let t = n.getBoundingClientRect()
                  ;(d || a.top !== t.top || a.width !== t.width || a.height !== t.height) && u(t)
                  let r = t.top + 32 * l,
                    s = t.bottom - (32 + i) * l,
                    c = 0
                  ;(f < r && (c = f - r), f > s && (c = f - s))
                  let p = Math.max(-1, Math.min(1, c / (32 * l))) * Math.min(e - (j || e - 16), 32) * 0.5,
                    m = n.scrollTop
                  ;(0 !== p && (n.scrollTop = n.scrollTop + p),
                    A(),
                    n.scrollTop !== m ? ((j = e), (b = o.requestAnimationFrame(I))) : (j = 0))
                },
                N = () => {
                  ;((d = !0), x && 0 === b && (b = o.requestAnimationFrame(I)))
                },
                E = new ResizeObserver(N)
              ;(E.observe(t),
                E.observe(n),
                o.addEventListener("resize", N, { signal: p.signal }),
                (P.current = _),
                r.setPointerCapture?.(m),
                s.addEventListener(
                  "pointermove",
                  (e) => {
                    if (e.pointerId === m) {
                      if (((f = e.clientY), !x)) {
                        if (4 > Math.hypot(e.clientX - h, f - g)) return
                        ;((x = !0), (R.current = !0))
                      }
                      ;(e.preventDefault(), 0 === b && (b = o.requestAnimationFrame(I)))
                    }
                  },
                  { capture: !0, signal: p.signal },
                ),
                n.addEventListener(
                  "scroll",
                  () => {
                    x && 0 === b && (b = o.requestAnimationFrame(I))
                  },
                  { passive: !0, signal: p.signal },
                ),
                s.addEventListener(
                  "pointerup",
                  (e) => {
                    e.pointerId === m && (x && ((f = e.clientY), u(n.getBoundingClientRect()), A()), _(), x && L(v, !0))
                  },
                  { capture: !0, signal: p.signal },
                ),
                r.addEventListener("lostpointercapture", C, { signal: p.signal }),
                s.addEventListener(
                  "pointercancel",
                  (e) => {
                    e.pointerId === m && C()
                  },
                  { signal: p.signal },
                ),
                s.addEventListener(
                  "keydown",
                  (e) => {
                    "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), _(), T())
                  },
                  { capture: !0, signal: p.signal },
                ),
                o.addEventListener("blur", C, { signal: p.signal }))
            }),
            (j[17] = k),
            (j[18] = S),
            (j[19] = w),
            (j[20] = T),
            (j[21] = L),
            (j[22] = D),
            (j[23] = M),
            (j[24] = u))
          : (u = j[24]))
      let z = "from" === _ && "border border-strong"
      ;(j[25] !== z
        ? ((m = (0, l.A)(
            "relative size-4 rounded-full bg-surface-elevated-secondary shadow-sm transition-transform duration-basic ease-enter-snappy group-hover/endpoint:scale-110 group-focus-visible/endpoint:scale-110 group-data-[state=open]/endpoint:scale-110 group-active/endpoint:scale-95 motion-reduce:transition-none",
            z,
          )),
          (j[25] = z),
          (j[26] = m))
        : (m = j[26]),
        j[27] !== _
          ? ((h =
              "to" === _ ? (0, r.jsx)("span", { className: "absolute inset-0 rounded-full bg-text-secondary" }) : null),
            (j[27] = _),
            (j[28] = h))
          : (h = j[28]),
        j[29] !== m || j[30] !== h
          ? ((f = (0, r.jsx)("span", { "aria-hidden": !0, className: m, children: h })),
            (j[29] = m),
            (j[30] = h),
            (j[31] = f))
          : (f = j[31]),
        j[32] !== C ||
        j[33] !== A ||
        j[34] !== f ||
        j[35] !== q ||
        j[36] !== a ||
        j[37] !== i ||
        j[38] !== c ||
        j[39] !== u
          ? ((x = (0, r.jsx)(g.$, {
              className: "group/endpoint touch-none hover:cursor-grab active:cursor-grabbing",
              color: "ghostMuted",
              size: "dragHandle",
              radius: "full",
              "data-state": q,
              "aria-label": C,
              "aria-pressed": A,
              onClick: a,
              onBlur: i,
              onKeyDown: c,
              onPointerDown: u,
              children: f,
            })),
            (j[32] = C),
            (j[33] = A),
            (j[34] = f),
            (j[35] = q),
            (j[36] = a),
            (j[37] = i),
            (j[38] = c),
            (j[39] = u),
            (j[40] = x))
          : (x = j[40]),
        j[41] !== A || j[42] !== x
          ? ((v = (0, r.jsx)($.m, { content: o, disabled: A, side: "right", children: x })),
            (j[41] = A),
            (j[42] = x),
            (j[43] = v))
          : (v = j[43]))
      let F = "keyboard" === N ? I : null
      return (
        j[44] !== F
          ? ((y = (0, r.jsx)("span", { className: "sr-only", role: "status", "aria-atomic": "true", children: F })),
            (j[44] = F),
            (j[45] = y))
          : (y = j[45]),
        j[46] !== v || j[47] !== y
          ? ((b = (0, r.jsxs)(r.Fragment, { children: [v, y] })), (j[46] = v), (j[47] = y), (j[48] = b))
          : (b = j[48]),
        b
      )
    }
    function H(e, t) {
      let n = new Map()
      return new Map(
        e
          .map((e) => {
            let r = t.formatTime(e.created_at, { hour: "numeric", minute: "2-digit" }),
              s = JSON.stringify([t.formatDate(e.created_at, { year: "numeric", month: "2-digit", day: "2-digit" }), r])
            return (n.set(s, (n.get(s) ?? 0) + 1), { version: e, label: r, minute: s })
          })
          .map(({ version: e, label: r, minute: s }) => [
            e.checkpoint_id,
            (n.get(s) ?? 0) > 1
              ? t.formatTime(e.created_at, { hour: "numeric", minute: "2-digit", second: "2-digit" })
              : r,
          ]),
      )
    }
    function Y(e) {
      let t,
        n,
        o,
        a,
        i,
        l,
        m,
        h,
        f,
        x,
        v,
        b,
        j,
        _,
        k,
        w,
        S,
        M,
        C,
        A,
        I,
        E,
        D,
        L,
        Y,
        Q,
        X,
        ee,
        et,
        en,
        er,
        es,
        eo,
        ea,
        ei,
        el,
        ec,
        ed,
        eu,
        ep,
        em,
        eh,
        eg,
        ef,
        ex,
        ev,
        ey,
        eb,
        ej,
        e_,
        ek,
        ew = (0, s.c)(184),
        {
          pageId: eS,
          realtimeSession: eM,
          visible: eC,
          showHeader: eA,
          selectedId: eI,
          baselineId: eN,
          showChanges: eE,
          versions: eD,
          names: eL,
          currentSummary: e$,
          renderControls: eT,
          restoreAction: eP,
          children: eR,
          onLoadMore: eq,
          isLoadingMore: ez,
          isLoadMoreError: eF,
          loadMoreError: eK,
          onSelect: eV,
          onSelectEnd: eO,
          onBaselineChange: eB,
          onClose: eU,
        } = e,
        eH = void 0 === eA || eA,
        eY = void 0 !== ez && ez,
        eG = void 0 !== eF && eF,
        eJ = (0, u.A)(),
        eW = (0, d.useId)(),
        [eZ, eQ] = (0, d.useState)(null),
        [eX, e1] = (0, d.useState)(null),
        e0 = (0, d.useRef)(null),
        e2 = (0, d.useRef)(null),
        e3 = (0, d.useRef)(null),
        e4 = (0, d.useRef)(!1),
        e5 = (0, d.useRef)(null),
        [e6, e9] = (0, d.useState)(!0),
        e7 = (0, c.Ul)(K.LT),
        e8 = (0, T.dz)(),
        te = (0, d.useSyncExternalStore)(F.sD, Z, W)
      ew[0] !== e7 || ew[1] !== te || ew[2] !== e8
        ? ((t = e7 > 0 ? (0, T.Ud)(te, e8) : 0), (ew[0] = e7), (ew[1] = te), (ew[2] = e8), (ew[3] = t))
        : (t = ew[3])
      let tt = Math.max(e7, t, K.w3)
      ;(ew[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => {
            e4.current &&
              null != e3.current &&
              (e3.current.scrollTop = e3.current.scrollHeight - e3.current.clientHeight)
          }),
          (ew[4] = n))
        : (n = ew[4]),
        ew[5] !== tt ? ((o = [tt]), (ew[5] = tt), (ew[6] = o)) : (o = ew[6]),
        (0, d.useLayoutEffect)(n, o),
        ew[7] !== eJ || ew[8] !== eD ? ((a = H(eD, eJ)), (ew[7] = eJ), (ew[8] = eD), (ew[9] = a)) : (a = ew[9]))
      let tn = a,
        tr = null === eN
      if (ew[10] !== eN || ew[11] !== eD) {
        let e
        ;(ew[13] !== eN ? ((e = (e) => e.checkpoint_id === eN), (ew[13] = eN), (ew[14] = e)) : (e = ew[14]),
          (i = eD.find(e)),
          (ew[10] = eN),
          (ew[11] = eD),
          (ew[12] = i))
      } else i = ew[12]
      let ts = i
      if (ew[15] !== eI || ew[16] !== eD) {
        let e
        ;(ew[18] !== eI ? ((e = (e) => e.checkpoint_id === eI), (ew[18] = eI), (ew[19] = e)) : (e = ew[19]),
          (l = eD.find(e)),
          (ew[15] = eI),
          (ew[16] = eD),
          (ew[17] = l))
      } else l = ew[17]
      let to = l,
        ta = eE ? eN : eI,
        ti = null === ta
      ;(ew[20] !== eD.length
        ? ((m = () => {
            let e = e5.current
            if (null == e || eD.length <= e.count) return
            e5.current = null
            let { activeElement: t } = e.trigger.ownerDocument
            if (t !== e.trigger && (e.trigger.isConnected || t !== document.body)) return
            let n =
              e2.current?.querySelector(
                `[data-version-history-index="${e.count + 1}"] [aria-current]:is(button, [role="button"]):not(:disabled):not([aria-disabled="true"])`,
              ) ??
              e2.current?.querySelector(
                '[aria-current="true"]:is(button, [role="button"]):not(:disabled):not([aria-disabled="true"])',
              )
            ;(n?.focus({ preventScroll: !0 }), n?.scrollIntoView({ block: "nearest" }))
          }),
          (ew[20] = eD.length),
          (ew[21] = m))
        : (m = ew[21]),
        ew[22] !== eD ? ((h = [eD]), (ew[22] = eD), (ew[23] = h)) : (h = ew[23]),
        (0, d.useLayoutEffect)(m, h),
        ew[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(p.A, {
              id: "codex.page.versions.currentCaptureDetail",
              defaultMessage:
                "Captured when history opened; may include unsaved changes and does not update with live edits",
            })),
            (ew[24] = f))
          : (f = ew[24]))
      let tl = f
      ew[25] !== eZ || ew[26] !== eW || ew[27] !== eX?.method
        ? ((x = function (e, t) {
            let n = void 0 === e ? (eZ ?? void 0) : e
            ;((void 0 === t || t) &&
              (e0.current?.focus({ preventScroll: !0 }),
              null != n &&
                e2.current
                  ?.querySelector(
                    "from" === n
                      ? `[aria-describedby~="${eW}-comparison-start"]`
                      : `[aria-describedby~="${eW}-viewing"]`,
                  )
                  ?.scrollIntoView({ block: "nearest" })),
              e9(eX?.method !== "keyboard"),
              e1(null),
              eQ(null))
          }),
          (ew[25] = eZ),
          (ew[26] = eW),
          (ew[27] = eX?.method),
          (ew[28] = x))
        : (x = ew[28])
      let tc = x
      ew[29] !== eN ||
      ew[30] !== eZ ||
      ew[31] !== eW ||
      ew[32] !== eB ||
      ew[33] !== eV ||
      ew[34] !== eO ||
      ew[35] !== eI
        ? ((v = function (e, t, n) {
            let r = void 0 === n ? (eZ ?? void 0) : n
            if ((e9(t), null != r)) {
              let t = "from" === r ? eI : eN,
                n = e0.current
              ;((e?.checkpoint_id ?? null) === t &&
                (n = e2.current?.querySelector(
                  "from" === r ? `[aria-describedby~="${eW}-viewing"]` : `[aria-describedby~="${eW}-comparison-start"]`,
                )),
                n?.focus({ preventScroll: !0 }))
            }
            ;("from" === r ? eB(e?.checkpoint_id ?? null) : "to" === r ? eO(e) : eV(e), e1(null), eQ(null))
          }),
          (ew[29] = eN),
          (ew[30] = eZ),
          (ew[31] = eW),
          (ew[32] = eB),
          (ew[33] = eV),
          (ew[34] = eO),
          (ew[35] = eI),
          (ew[36] = v))
        : (v = ew[36])
      let td = v
      ew[37] !== ts || ew[38] !== eZ || ew[39] !== tr || ew[40] !== to || ew[41] !== eE
        ? ((b = function (e) {
            return (
              !!eE &&
              ("to" !== eZ
                ? null != to && (null == e || e.through_sequence > to.through_sequence)
                : null != e && (tr || (null != ts && e.through_sequence < ts.through_sequence)))
            )
          }),
          (ew[37] = ts),
          (ew[38] = eZ),
          (ew[39] = tr),
          (ew[40] = to),
          (ew[41] = eE),
          (ew[42] = b))
        : (b = ew[42])
      let tu = b
      ew[43] !== eJ
        ? ((j = function (e, t) {
            return null == e
              ? eJ.formatMessage(
                  {
                    id: "codex.page.versions.selectCurrentComparisonNode",
                    defaultMessage:
                      "{endpoint, select, from {Use current version for comparison} other {Select current version}}",
                  },
                  { endpoint: t },
                )
              : eJ.formatMessage(
                  {
                    id: "codex.page.versions.selectComparisonNode",
                    defaultMessage:
                      "{endpoint, select, from {Use {date} for comparison} other {Select version from {date}}}",
                  },
                  { endpoint: t, date: eJ.formatDate(e.created_at, { dateStyle: "full", timeStyle: "medium" }) },
                )
          }),
          (ew[43] = eJ),
          (ew[44] = j))
        : (j = ew[44])
      let tp = j
      ew[45] !== eZ || ew[46] !== tu || ew[47] !== tp || ew[48] !== td
        ? ((_ = function (e) {
            if (null == eZ || tu(e)) return null
            let t = tp(e, eZ)
            return (0, r.jsx)($.m, {
              content: t,
              children: (0, r.jsx)(g.$, {
                unstyled: !0,
                className: "group/node flex h-7 w-6 shrink-0 items-center justify-center rounded-full",
                "aria-label": t,
                onClick: (t) => td(e, t.detail > 0),
                children: (0, r.jsx)("span", {
                  "aria-hidden": !0,
                  className:
                    "relative size-1.5 rounded-full bg-surface transition-transform duration-basic ease-enter-snappy group-hover/node:scale-150 group-focus-visible/node:scale-150 group-active/node:scale-125 motion-reduce:transition-none",
                  children: (0, r.jsx)("span", { className: "absolute inset-0 rounded-full bg-text-tertiary" }),
                }),
              }),
            })
          }),
          (ew[45] = eZ),
          (ew[46] = tu),
          (ew[47] = tp),
          (ew[48] = td),
          (ew[49] = _))
        : (_ = ew[49])
      let tm = _
      ew[50] !== eD
        ? ((k = function (e) {
            let t = e2.current?.querySelector(`[data-version-history-index="${e}"]`)
            if (null != t) return 0 === e ? null : eD.find((e) => e.checkpoint_id === t.dataset.versionHistoryKey)
          }),
          (ew[50] = eD),
          (ew[51] = k))
        : (k = ew[51])
      let th = k
      ew[52] !== eN ||
      ew[53] !== tc ||
      ew[54] !== eZ ||
      ew[55] !== eJ ||
      ew[56] !== tp ||
      ew[57] !== eX ||
      ew[58] !== td ||
      ew[59] !== eI ||
      ew[60] !== th ||
      ew[61] !== eD
        ? ((w = function (e, t) {
            let n = null != eZ && eZ !== e,
              s = "from" === e ? eN : eI,
              o = null == s ? null : eD.find((e) => e.checkpoint_id === s),
              a = "from" === e ? eI : eN,
              i = null == a ? 0 : eD.findIndex((e) => e.checkpoint_id === a) + 1,
              l =
                "from" === e
                  ? eJ.formatMessage({
                      id: "codex.page.versions.adjustComparisonStart",
                      defaultMessage: "Adjust comparison start",
                    })
                  : eJ.formatMessage({
                      id: "codex.page.versions.adjustComparisonEnd",
                      defaultMessage: "Adjust comparison end",
                    }),
              c = eX?.endpoint === e ? eX : null,
              d = null
            return (
              null != c &&
                (d =
                  null == c.version
                    ? eJ.formatMessage({ id: "codex.page.versions.current", defaultMessage: "Current version" })
                    : eJ.formatDate(c.version.created_at, {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                      })),
              (0, r.jsx)(U, {
                endpoint: e,
                index: t,
                minIndex: "from" === e ? i : 0,
                maxIndex: "to" === e ? i : eD.length,
                timeline: e2,
                label: n ? tp(o ?? null, eZ) : l,
                pressed: eZ === e,
                previewLabel: d,
                previewMethod: c?.method ?? null,
                onChoose: (t, r) => {
                  n ? td(o ?? null, r) : ((e0.current = t), e1(null), eQ(eZ === e ? null : e))
                },
                onPreview: (t, n, r) => {
                  let s = th(t)
                  void 0 !== s &&
                    ((e0.current = r),
                    e9(!1),
                    eQ(e),
                    e1((t) =>
                      t?.endpoint === e && t.version === s && t.method === n
                        ? t
                        : { endpoint: e, version: s, method: n },
                    ))
                },
                onCommit: (t, n) => {
                  let r = th(t)
                  void 0 !== r && td(r, n, e)
                },
                onCancel: (t) => tc(e, t),
              })
            )
          }),
          (ew[52] = eN),
          (ew[53] = tc),
          (ew[54] = eZ),
          (ew[55] = eJ),
          (ew[56] = tp),
          (ew[57] = eX),
          (ew[58] = td),
          (ew[59] = eI),
          (ew[60] = th),
          (ew[61] = eD),
          (ew[62] = w))
        : (w = ew[62])
      let tg = w
      ;(ew[63] !== tt ? ((S = { paddingBottom: tt }), (ew[63] = tt), (ew[64] = S)) : (S = ew[64]),
        ew[65] !== tc || ew[66] !== eZ || ew[67] !== eU || ew[68] !== eX
          ? ((M = (e) => {
              "Escape" !== e.key ||
                e.defaultPrevented ||
                (e.stopPropagation(), null != eZ || null != eX ? tc(eX?.endpoint ?? eZ ?? void 0) : eU())
            }),
            (ew[65] = tc),
            (ew[66] = eZ),
            (ew[67] = eU),
            (ew[68] = eX),
            (ew[69] = M))
          : (M = ew[69]),
        ew[70] !== eW || ew[71] !== eJ || ew[72] !== eU || ew[73] !== eH
          ? ((C = eH
              ? (0, r.jsx)(V.Yi, {
                  density: "surface",
                  leading: [
                    {
                      id: "title",
                      content: (0, r.jsx)("h2", {
                        id: `${eW}-title`,
                        className: "truncate text-sm font-medium select-none",
                        children: (0, r.jsx)(p.A, {
                          id: "codex.page.versions.title",
                          defaultMessage: "Version history",
                        }),
                      }),
                    },
                  ],
                  trailing: [
                    {
                      id: "close",
                      content: (0, r.jsx)(V.DW, {
                        "aria-label": eJ.formatMessage({
                          id: "codex.page.versions.closeHistory",
                          defaultMessage: "Close version history",
                        }),
                        uniform: !0,
                        onClick: eU,
                        children: (0, r.jsx)(z.b5, { icon: { 16: P.Gmf, 20: P.pgK } }),
                      }),
                    },
                  ],
                })
              : (0, r.jsx)("h2", {
                  id: `${eW}-title`,
                  className: "sr-only",
                  children: (0, r.jsx)(p.A, { id: "codex.page.versions.title", defaultMessage: "Version history" }),
                })),
            (ew[70] = eW),
            (ew[71] = eJ),
            (ew[72] = eU),
            (ew[73] = eH),
            (ew[74] = C))
          : (C = ew[74]))
      let tf = `${eW}-read-only`
      ;(ew[75] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, r.jsx)(p.A, {
            id: "codex.page.versions.readOnlyDescription",
            defaultMessage: "History previews are read only",
          })),
          (ew[75] = A))
        : (A = ew[75]),
        ew[76] !== tf
          ? ((I = (0, r.jsx)("span", { id: tf, className: "sr-only", children: A })), (ew[76] = tf), (ew[77] = I))
          : (I = ew[77]))
      let tx = `${eW}-comparison-start`
      ;(ew[78] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (0, r.jsx)(p.A, {
            id: "codex.page.versions.comparisonVersionDescription",
            defaultMessage: "Version used for comparison",
          })),
          (ew[78] = E))
        : (E = ew[78]),
        ew[79] !== tx
          ? ((D = (0, r.jsx)("span", { id: tx, hidden: !0, children: E })), (ew[79] = tx), (ew[80] = D))
          : (D = ew[80]))
      let tv = `${eW}-viewing`
      ;(ew[81] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = (0, r.jsx)(p.A, {
            id: "codex.page.versions.viewingDescription",
            defaultMessage: "Version shown in the document",
          })),
          (ew[81] = L))
        : (L = ew[81]),
        ew[82] !== tv
          ? ((Y = (0, r.jsx)("span", { id: tv, hidden: !0, children: L })), (ew[82] = tv), (ew[83] = Y))
          : (Y = ew[83]),
        ew[84] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (e) => {
              ;(e9(e.detail > 0), e1(null), eQ(null))
            }),
            (ew[84] = Q))
          : (Q = ew[84]),
        ew[85] !== tc || ew[86] !== eZ || ew[87] !== eX
          ? ((X =
              null != eZ || null != eX
                ? (0, r.jsxs)("div", {
                    className: "flex min-h-8 items-center justify-between gap-2",
                    children: [
                      (0, r.jsxs)("span", {
                        className: "text-xs text-secondary",
                        role: "status",
                        children: [
                          eX?.method === "keyboard"
                            ? (0, r.jsx)(p.A, {
                                id: "codex.page.versions.confirmKeyboardRange",
                                defaultMessage: "Arrow keys to adjust \xb7 Enter to compare",
                              })
                            : null,
                          eX?.method === "pointer"
                            ? (0, r.jsx)(p.A, {
                                id: "codex.page.versions.confirmDraggedRange",
                                defaultMessage: "Release to compare",
                              })
                            : null,
                          null == eX && "from" === eZ
                            ? (0, r.jsx)(p.A, {
                                id: "codex.page.versions.chooseComparisonRow",
                                defaultMessage: "Choose a comparison version",
                              })
                            : null,
                          null == eX && "to" === eZ
                            ? (0, r.jsx)(p.A, {
                                id: "codex.page.versions.chooseSelectedVersion",
                                defaultMessage: "Choose the selected version",
                              })
                            : null,
                        ],
                      }),
                      eX?.method === "pointer"
                        ? (0, r.jsx)("span", {
                            className: "text-xs text-secondary select-none",
                            children: (0, r.jsx)(p.A, {
                              id: "codex.page.versions.cancelDraggedRange",
                              defaultMessage: "Esc to cancel",
                            }),
                          })
                        : (0, r.jsx)(g.$, {
                            color: "ghostSecondary",
                            size: "compact",
                            onClick: () => tc(),
                            children: (0, r.jsx)(p.A, {
                              id: "codex.page.versions.cancelEndpointSelection",
                              defaultMessage: "Cancel",
                            }),
                          }),
                    ],
                  })
                : void 0),
            (ew[85] = tc),
            (ew[86] = eZ),
            (ew[87] = eX),
            (ew[88] = X))
          : (X = ew[88]),
        ew[89] !== eT || ew[90] !== X ? ((ee = eT(X)), (ew[89] = eT), (ew[90] = X), (ew[91] = ee)) : (ee = ew[91]),
        ew[92] !== ee
          ? ((et = (0, r.jsx)("div", {
              className: "shrink-0 px-toolbar pt-3",
              role: "presentation",
              onClick: Q,
              children: ee,
            })),
            (ew[92] = ee),
            (ew[93] = et))
          : (et = ew[93]))
      let ty = `${eW}-title`,
        tb = `${eW}-read-only`
      ;(ew[94] === Symbol.for("react.memo_cache_sentinel")
        ? ((en = (e) => {
            let { scrollTop: t, scrollHeight: n, clientHeight: r } = e.currentTarget
            e4.current = n - r - t <= 1
          }),
          (ew[94] = en))
        : (en = ew[94]),
        ew[95] !== ty || ew[96] !== tb
          ? ((er = {
              ref: e3,
              "aria-labelledby": ty,
              "aria-describedby": tb,
              role: "region",
              tabIndex: 0,
              onScroll: en,
            }),
            (ew[95] = ty),
            (ew[96] = tb),
            (ew[97] = er))
          : (er = ew[97]))
      let tj = `${eW}-timeline`
      ew[98] !== eJ
        ? ((es = eJ.formatMessage({ id: "codex.page.versions.listLabel", defaultMessage: "Page versions" })),
          (ew[98] = eJ),
          (ew[99] = es))
        : (es = ew[99])
      let t_ = eX?.endpoint === "from" ? (eX.version?.checkpoint_id ?? null) : eN,
        tk = eX?.endpoint === "to" ? (eX.version?.checkpoint_id ?? null) : eI,
        tw = eX?.endpoint ?? (eN === eI ? "from" : void 0)
      ;(ew[100] !== tg
        ? ((eo = (e) => tg("from", e)), (ea = (e) => tg("to", e)), (ew[100] = tg), (ew[101] = eo), (ew[102] = ea))
        : ((eo = ew[101]), (ea = ew[102])),
        ew[103] !== e6 ||
        ew[104] !== tm ||
        ew[105] !== eE ||
        ew[106] !== t_ ||
        ew[107] !== tk ||
        ew[108] !== tw ||
        ew[109] !== eo ||
        ew[110] !== ea
          ? ((ei = {
              showChanges: eE,
              animate: e6,
              fromKey: t_,
              toKey: tk,
              activeEndpoint: tw,
              fromControl: eo,
              toControl: ea,
              renderNodeControl: tm,
            }),
            (ew[103] = e6),
            (ew[104] = tm),
            (ew[105] = eE),
            (ew[106] = t_),
            (ew[107] = tk),
            (ew[108] = tw),
            (ew[109] = eo),
            (ew[110] = ea),
            (ew[111] = ei))
          : (ei = ew[111]),
        ew[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (0, r.jsx)(p.A, {
              id: "codex.page.versions.currentCaptureTooltip",
              defaultMessage: "Captured on opening. May include unsaved edits",
            })),
            (ew[112] = el))
          : (el = ew[112]),
        ew[113] !== eJ
          ? ((ec = eJ.formatMessage({ id: "codex.page.versions.current", defaultMessage: "Current version" })),
            (ew[113] = eJ),
            (ew[114] = ec))
          : (ec = ew[114]))
      let tS = `${eW}-current ${eW}-current-editors${eE && tr ? ` ${eW}-comparison-start` : ""}${eE && null == eI ? ` ${eW}-viewing` : ""}`,
        tM = tu(null)
      ew[115] !== td ? ((ed = (e) => td(null, e.detail > 0)), (ew[115] = td), (ew[116] = ed)) : (ed = ew[116])
      let tC = ti ? "font-medium" : void 0
      ;(ew[117] === Symbol.for("react.memo_cache_sentinel")
        ? ((eu = (0, r.jsx)(p.A, { id: "codex.page.versions.current", defaultMessage: "Current version" })),
          (ew[117] = eu))
        : (eu = ew[117]),
        ew[118] !== tC
          ? ((ep = (0, r.jsx)("span", { className: tC, children: eu })), (ew[118] = tC), (ew[119] = ep))
          : (ep = ew[119]))
      let tA = `${eW}-current-editors`
      ;(ew[120] !== e$ || ew[121] !== eL
        ? ((em = (0, r.jsx)(B.D, { compact: !0, current: !0, summary: e$, names: eL })),
          (ew[120] = e$),
          (ew[121] = eL),
          (ew[122] = em))
        : (em = ew[122]),
        ew[123] !== tA || ew[124] !== em
          ? ((eh = (0, r.jsx)("span", { id: tA, className: "max-w-40 min-w-0", children: em })),
            (ew[123] = tA),
            (ew[124] = em),
            (ew[125] = eh))
          : (eh = ew[125]),
        ew[126] !== ti ||
        ew[127] !== ec ||
        ew[128] !== tS ||
        ew[129] !== tM ||
        ew[130] !== ed ||
        ew[131] !== ep ||
        ew[132] !== eh
          ? ((eg = (0, r.jsx)($.m, {
              content: el,
              side: "bottom",
              align: "start",
              children: (0, r.jsx)("div", {
                children: (0, r.jsx)(N.fy, {
                  ariaCurrent: ti,
                  ariaLabel: ec,
                  ariaDescribedBy: tS,
                  compactSecondLine: !0,
                  density: "row",
                  isSelected: ti,
                  isDisabled: tM,
                  onSelect: ed,
                  title: ep,
                  secondLine: eh,
                }),
              }),
            })),
            (ew[126] = ti),
            (ew[127] = ec),
            (ew[128] = tS),
            (ew[129] = tM),
            (ew[130] = ed),
            (ew[131] = ep),
            (ew[132] = eh),
            (ew[133] = eg))
          : (eg = ew[133]))
      let tI = `${eW}-current`
      return (
        ew[134] !== tI
          ? ((ef = (0, r.jsx)("span", { id: tI, className: "sr-only", children: tl })), (ew[134] = tI), (ew[135] = ef))
          : (ef = ew[135]),
        ew[136] !== eg || ew[137] !== ef
          ? ((ex = (0, r.jsxs)(r.Fragment, { children: [eg, ef] })), (ew[136] = eg), (ew[137] = ef), (ew[138] = ex))
          : (ex = ew[138]),
        ew[139] !== eN ||
        ew[140] !== ta ||
        ew[141] !== eW ||
        ew[142] !== eJ ||
        ew[143] !== tu ||
        ew[144] !== eL ||
        ew[145] !== eP ||
        ew[146] !== td ||
        ew[147] !== eI ||
        ew[148] !== eE ||
        ew[149] !== tn
          ? ((ev = (e) =>
              (0, r.jsx)(N.fy, {
                ariaCurrent: ta === e.checkpoint_id,
                ariaLabel: eJ.formatDate(e.created_at, { dateStyle: "full", timeStyle: "medium" }),
                ariaDescribedBy: `${eW}-${e.checkpoint_id}${eE && e.checkpoint_id === eN ? ` ${eW}-comparison-start` : ""}${eE && e.checkpoint_id === eI ? ` ${eW}-viewing` : ""}`,
                buttonProps: { id: `${eW}-${e.checkpoint_id}-trigger`, onClick: (t) => td(e, t.detail > 0) },
                compactSecondLine: !0,
                density: "row",
                hasInteractiveContent: !0,
                isSelected: ta === e.checkpoint_id,
                isDisabled: tu(e),
                title: (0, r.jsx)("span", {
                  className: ta === e.checkpoint_id ? "font-medium" : void 0,
                  children: tn.get(e.checkpoint_id),
                }),
                rightText:
                  ta === e.checkpoint_id && null != eP
                    ? (0, r.jsx)("span", { className: "pointer-events-auto", children: eP })
                    : null,
                rightTextPosition: "center",
                secondLine: (0, r.jsx)("label", {
                  id: `${eW}-${e.checkpoint_id}`,
                  className: "max-w-40 min-w-0",
                  htmlFor: `${eW}-${e.checkpoint_id}-trigger`,
                  children: (0, r.jsx)(B.D, { compact: !0, summary: e, names: eL }),
                }),
              })),
            (ew[139] = eN),
            (ew[140] = ta),
            (ew[141] = eW),
            (ew[142] = eJ),
            (ew[143] = tu),
            (ew[144] = eL),
            (ew[145] = eP),
            (ew[146] = td),
            (ew[147] = eI),
            (ew[148] = eE),
            (ew[149] = tn),
            (ew[150] = ev))
          : (ev = ew[150]),
        ew[151] !== eW ||
        ew[152] !== eG ||
        ew[153] !== eY ||
        ew[154] !== eK ||
        ew[155] !== eq ||
        ew[156] !== eS ||
        ew[157] !== eM ||
        ew[158] !== eD.length ||
        ew[159] !== eC
          ? ((ey =
              null != eq
                ? (0, r.jsxs)(g.$, {
                    className: "w-full shrink-0 justify-center",
                    color: "ghost",
                    size: "compact",
                    "aria-labelledby": `${eW}-load-older`,
                    "aria-busy": eY,
                    "aria-disabled": eY,
                    onBlur: () => {
                      e5.current = null
                    },
                    onClick: (e) => {
                      eY || ((e5.current = { trigger: e.currentTarget, count: eD.length }), eq())
                    },
                    children: [
                      eY ? (0, r.jsx)(q.y, { className: "icon-xxs" }) : null,
                      (0, r.jsx)("span", {
                        id: `${eW}-load-older`,
                        role: "status",
                        children: eG
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(y.It, {
                                  pageId: eS,
                                  session: eM,
                                  visible: eC,
                                  operation: "pages.version.history",
                                  error: eK,
                                  kind: "load",
                                  recoveryUi: "notice",
                                }),
                                (0, r.jsx)(p.A, {
                                  id: "codex.page.versions.retryOlder",
                                  defaultMessage: "Retry loading older versions",
                                }),
                              ],
                            })
                          : (0, r.jsx)(p.A, {
                              id: "codex.page.versions.loadOlder",
                              defaultMessage: "Load older versions",
                            }),
                      }),
                    ],
                  })
                : null),
            (ew[151] = eW),
            (ew[152] = eG),
            (ew[153] = eY),
            (ew[154] = eK),
            (ew[155] = eq),
            (ew[156] = eS),
            (ew[157] = eM),
            (ew[158] = eD.length),
            (ew[159] = eC),
            (ew[160] = ey))
          : (ey = ew[160]),
        ew[161] !== es || ew[162] !== ei || ew[163] !== ex || ew[164] !== ev || ew[165] !== ey || ew[166] !== eD
          ? ((eb = (0, r.jsx)(O.t, {
              label: es,
              items: eD,
              getDate: J,
              getKey: G,
              comparison: ei,
              current: ex,
              renderItem: ev,
              continuation: ey,
            })),
            (ew[161] = es),
            (ew[162] = ei),
            (ew[163] = ex),
            (ew[164] = ev),
            (ew[165] = ey),
            (ew[166] = eD),
            (ew[167] = eb))
          : (eb = ew[167]),
        ew[168] !== eR || ew[169] !== tj || ew[170] !== eb
          ? ((ej = (0, r.jsxs)("div", { id: tj, ref: e2, children: [eb, eR] })),
            (ew[168] = eR),
            (ew[169] = tj),
            (ew[170] = eb),
            (ew[171] = ej))
          : (ej = ew[171]),
        ew[172] !== er || ew[173] !== ej
          ? ((e_ = (0, r.jsx)(R.Q, {
              className: "relative grid min-h-0 flex-1 overflow-hidden",
              fade: "mask",
              scrollClassName:
                "min-h-0 overflow-y-auto overscroll-contain px-toolbar py-3 focus-visible:outline-2 focus-visible:outline-ring",
              scrollProps: er,
              children: ej,
            })),
            (ew[172] = er),
            (ew[173] = ej),
            (ew[174] = e_))
          : (e_ = ew[174]),
        ew[175] !== S ||
        ew[176] !== M ||
        ew[177] !== C ||
        ew[178] !== I ||
        ew[179] !== D ||
        ew[180] !== Y ||
        ew[181] !== et ||
        ew[182] !== e_
          ? ((ek = (0, r.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col",
              style: S,
              role: "presentation",
              onKeyDown: M,
              children: [C, I, D, Y, et, e_],
            })),
            (ew[175] = S),
            (ew[176] = M),
            (ew[177] = C),
            (ew[178] = I),
            (ew[179] = D),
            (ew[180] = Y),
            (ew[181] = et),
            (ew[182] = e_),
            (ew[183] = ek))
          : (ek = ew[183]),
        ek
      )
    }
    function G(e) {
      return e.checkpoint_id
    }
    function J(e) {
      return e.created_at
    }
    function W() {
      return 0
    }
    function Z() {
      return (0, F.L9)().reduce((e, t) => Math.max(e, window.innerHeight - t.top), 0)
    }
    var Q = n("JNtf"),
      X = n("mUDD"),
      ee = n("I2MU")
    function et(e) {
      let t,
        n,
        o,
        a,
        i,
        l,
        h,
        f,
        x,
        b,
        j,
        _,
        S,
        M,
        C,
        A,
        I,
        N,
        E,
        D,
        L,
        $,
        T = (0, s.c)(60),
        {
          pageId: P,
          realtimeSession: R,
          visible: q,
          streamKind: z,
          version: F,
          ready: K,
          signal: V,
          onRestore: O,
          onRestored: B,
        } = e,
        U = (0, c.gh)(w.u),
        H = (0, u.A)()
      T[0] !== H || T[1] !== F.created_at
        ? ((t = H.formatMessage(
            { id: "codex.page.versions.restore.target", defaultMessage: "Restore version from {date}" },
            { date: H.formatDate(F.created_at, { dateStyle: "medium", timeStyle: "medium" }) },
          )),
          (T[0] = H),
          (T[1] = F.created_at),
          (T[2] = t))
        : (t = T[2])
      let Y = t,
        [G, J] = (0, d.useState)(!1),
        [W, Z] = (0, d.useState)(!1),
        [et, er] = (0, d.useState)(null),
        es = et?.result ?? null,
        eo = "unsupported" !== es && "limit_exceeded" !== es,
        ea = (0, d.useRef)(null)
      ;(T[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => () => ea.current?.abort()), (o = []), (T[3] = n), (T[4] = o))
        : ((n = T[3]), (o = T[4])),
        (0, d.useEffect)(n, o),
        T[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = () => {
              ;(ea.current?.abort(), (ea.current = null), Z(!1), J(!1))
            }),
            (T[5] = a))
          : (a = T[5]))
      let ei = a
      T[6] !== eo ||
      T[7] !== O ||
      T[8] !== B ||
      T[9] !== P ||
      T[10] !== U ||
      T[11] !== V ||
      T[12] !== z ||
      T[13] !== F.checkpoint_id
        ? ((i = async () => {
            if (!eo || null != ea.current || V.aborted) return
            let e = new AbortController()
            ea.current = e
            let t = AbortSignal.any([V, e.signal]),
              n = (0, m.l)(U, "version_restore", { stream_kind: z }, t)
            ;(Z(!0), er(null))
            try {
              let e = await (0, ee.y)({ pageId: P, checkpointId: F.checkpoint_id, streamKind: z, signal: t })
              t.throwIfAborted()
              let r = await O(e, t)
              ;(t.throwIfAborted(), n(r), "restored" === r ? B() : er({ result: r }))
            } catch (e) {
              ;(n(t.aborted ? "canceled" : "failure"),
                t.aborted ||
                  ((0, v.ZD)(U.get(k.YV), "pages.version.restore", e), er({ result: "unavailable", cause: e })))
            }
            ea.current === e && ((ea.current = null), Z(!1))
          }),
          (T[6] = eo),
          (T[7] = O),
          (T[8] = B),
          (T[9] = P),
          (T[10] = U),
          (T[11] = V),
          (T[12] = z),
          (T[13] = F.checkpoint_id),
          (T[14] = i))
        : (i = T[14])
      let el = i
      T[15] === Symbol.for("react.memo_cache_sentinel") ? ((l = { onEscapeKeyDown: en }), (T[15] = l)) : (l = T[15])
      let ec = !K
      return (
        T[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, r.jsx)(p.A, { id: "codex.page.versions.restore.open", defaultMessage: "Restore" })), (T[16] = h))
          : (h = T[16]),
        T[17] !== Y || T[18] !== ec
          ? ((f = (0, r.jsx)(g.$, {
              color: "ghostSecondary",
              size: "actionSm",
              radius: "full",
              disabled: ec,
              "aria-label": Y,
              children: h,
            })),
            (T[17] = Y),
            (T[18] = ec),
            (T[19] = f))
          : (f = T[19]),
        T[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (e) => {
              e ? (er(null), J(!0)) : ei()
            }),
            (T[20] = x))
          : (x = T[20]),
        T[21] !== el
          ? ((b = (e) => {
              ;(e.preventDefault(), el())
            }),
            (T[21] = el),
            (T[22] = b))
          : (b = T[22]),
        T[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, r.jsx)(Q.L3, {
              className: "contents",
              children: (0, r.jsx)(p.A, {
                id: "codex.page.versions.restore.title",
                defaultMessage: "Restore this version?",
              }),
            })),
            (T[23] = j))
          : (j = T[23]),
        T[24] !== H || T[25] !== F.created_at
          ? ((_ = H.formatDate(F.created_at, { dateStyle: "long", timeStyle: "medium" })),
            (T[24] = H),
            (T[25] = F.created_at),
            (T[26] = _))
          : (_ = T[26]),
        T[27] !== _
          ? ((S = (0, r.jsx)(X.c7, {
              subtitleTone: "secondary",
              title: j,
              subtitle: (0, r.jsx)(Q.rr, {
                className: "contents",
                children: (0, r.jsx)(p.A, {
                  id: "codex.page.versions.restore.description",
                  defaultMessage:
                    "Replace the current page content with the version from {date}. Current comments will be kept.",
                  values: { date: _ },
                }),
              }),
            })),
            (T[27] = _),
            (T[28] = S))
          : (S = T[28]),
        T[29] !== es || T[30] !== et?.cause || T[31] !== G || T[32] !== P || T[33] !== R || T[34] !== q
          ? ((M =
              null != es
                ? (0, r.jsxs)("p", {
                    role: "alert",
                    className: "text-sm text-secondary",
                    children: [
                      (0, r.jsx)(y.It, {
                        pageId: P,
                        session: R,
                        visible: !1 !== q && G,
                        operation: "pages.version.restore",
                        error: et?.cause,
                        pagesErrorCode: es,
                        kind: "sync",
                        recoveryUi: "dialog",
                      }),
                      "unsupported" === es
                        ? (0, r.jsx)(p.A, {
                            id: "codex.page.versions.restore.unsupported",
                            defaultMessage:
                              "This version includes changes that can\u2019t be restored. Choose another version",
                          })
                        : null,
                      "limit_exceeded" === es
                        ? (0, r.jsx)(p.A, {
                            id: "codex.page.versions.restore.limitExceeded",
                            defaultMessage: "This version is too large to restore in one edit. Choose another version",
                          })
                        : null,
                      "unavailable" === es
                        ? (0, r.jsx)(p.A, {
                            id: "codex.page.versions.restore.error",
                            defaultMessage:
                              "Could not restore this version. Check your connection and editing access, then try again",
                          })
                        : null,
                    ],
                  })
                : null),
            (T[29] = es),
            (T[30] = et?.cause),
            (T[31] = G),
            (T[32] = P),
            (T[33] = R),
            (T[34] = q),
            (T[35] = M))
          : (M = T[35]),
        T[36] !== W
          ? ((C = W
              ? (0, r.jsx)(p.A, {
                  id: "codex.page.versions.restore.pending",
                  defaultMessage: "Restoring version\u2026",
                })
              : null),
            (T[36] = W),
            (T[37] = C))
          : (C = T[37]),
        T[38] !== C
          ? ((A = (0, r.jsx)("p", {
              role: "status",
              "aria-atomic": !0,
              className: "text-sm text-secondary",
              children: C,
            })),
            (T[38] = C),
            (T[39] = A))
          : (A = T[39]),
        T[40] !== S || T[41] !== M || T[42] !== A
          ? ((I = (0, r.jsxs)(X.OO, { children: [S, M, A] })), (T[40] = S), (T[41] = M), (T[42] = A), (T[43] = I))
          : (I = T[43]),
        T[44] !== eo
          ? ((N = eo
              ? (0, r.jsx)(g.$, {
                  color: "secondary",
                  type: "button",
                  onClick: ei,
                  children: (0, r.jsx)(p.A, { id: "codex.page.versions.restore.cancel", defaultMessage: "Cancel" }),
                })
              : null),
            (T[44] = eo),
            (T[45] = N))
          : (N = T[45]),
        T[46] !== eo || T[47] !== W
          ? ((E = eo
              ? (0, r.jsx)(g.$, {
                  color: "primary",
                  type: "submit",
                  loading: W,
                  children: (0, r.jsx)(p.A, {
                    id: "codex.page.versions.restore.confirm",
                    defaultMessage: "Restore version",
                  }),
                })
              : (0, r.jsx)(g.$, {
                  color: "primary",
                  type: "button",
                  onClick: ei,
                  children: (0, r.jsx)(p.A, {
                    id: "codex.page.versions.restore.chooseAnother",
                    defaultMessage: "Choose another version",
                  }),
                })),
            (T[46] = eo),
            (T[47] = W),
            (T[48] = E))
          : (E = T[48]),
        T[49] !== N || T[50] !== E
          ? ((D = (0, r.jsx)(X.OO, { children: (0, r.jsxs)(X.Es, { children: [N, E] }) })),
            (T[49] = N),
            (T[50] = E),
            (T[51] = D))
          : (D = T[51]),
        T[52] !== b || T[53] !== I || T[54] !== D
          ? ((L = (0, r.jsxs)(X.R4, { as: "form", onSubmit: b, children: [I, D] })),
            (T[52] = b),
            (T[53] = I),
            (T[54] = D),
            (T[55] = L))
          : (L = T[55]),
        T[56] !== G || T[57] !== L || T[58] !== f
          ? (($ = (0, r.jsx)(Q.lG, {
              open: G,
              size: "compact",
              contentProps: l,
              triggerContent: f,
              onOpenChange: x,
              children: L,
            })),
            (T[56] = G),
            (T[57] = L),
            (T[58] = f),
            (T[59] = $))
          : ($ = T[59]),
        $
      )
    }
    function en(e) {
      return e.stopPropagation()
    }
    var er = n("m9m6"),
      es = n("EfgF"),
      eo = n("VpTR"),
      ea = n("TBQJ")
    function ei(e) {
      return e.reason instanceof Error ? e.reason : new DOMException("Aborted", "AbortError")
    }
    function el(e) {
      let t = 128 + 2 * e.title.length
      for (let { id: n, unit: r } of e.blocks) {
        for (let e of ((t +=
          256 +
          (n.length + r.markdown.length) * 2 +
          (r.codeWrap?.length ?? 0) * 8 +
          (r.tableHeaders?.length ?? 0) * 64),
        r.tableWidths ?? []))
          t += 32 + 8 * e.length
        t +=
          (r.image?.file_id.length ?? 0) * 2 +
          (r.image?.blurhash?.length ?? 0) * 2 +
          (r.image?.blurhashAlpha?.length ?? 0) * 2 +
          (r.video?.url.length ?? 0) * 2 +
          (r.video?.blurhash?.length ?? 0) * 2 +
          (r.video?.blurhashAlpha?.length ?? 0) * 2 +
          (r.visualization?.file_id.length ?? 0) * 2
      }
      return t
    }
    var ec = n("yLY7"),
      ed = n("HOLv"),
      eu = n("F0xz"),
      ep = n("HFi9"),
      em = n.n(ep),
      eh = n("ZZgR"),
      eg = n("bqtn"),
      ef = n("KIKs")
    function ex(e) {
      let t,
        n,
        o,
        a,
        i,
        l,
        c = (0, s.c)(22),
        { version: d, timeLabel: m, pickerOpen: h } = e,
        g = void 0 !== h && h,
        f = (0, u.A)(),
        x = (0, ef.wv)()
      c[0] !== f || c[1] !== d.created_at
        ? ((t = f.formatDate(d.created_at, { dateStyle: "full", timeStyle: "medium" })),
          (c[0] = f),
          (c[1] = d.created_at),
          (c[2] = t))
        : (t = c[2])
      let v = t,
        y = d.created_at
      return (
        c[3] !== f || c[4] !== x || c[5] !== d.created_at
          ? ((n = f.formatDate(d.created_at, {
              month: "short",
              day: "numeric",
              year:
                f.formatDate(d.created_at, { year: "numeric" }) === f.formatDate(x, { year: "numeric" })
                  ? void 0
                  : "numeric",
            })),
            (c[3] = f),
            (c[4] = x),
            (c[5] = d.created_at),
            (c[6] = n))
          : (n = c[6]),
        c[7] !== f || c[8] !== m || c[9] !== d.created_at
          ? ((o = m ?? f.formatDate(d.created_at, { timeStyle: "medium" })),
            (c[7] = f),
            (c[8] = m),
            (c[9] = d.created_at),
            (c[10] = o))
          : (o = c[10]),
        c[11] !== n || c[12] !== o
          ? ((a = (0, r.jsx)(p.A, {
              id: "codex.page.versions.timestamp.compact",
              defaultMessage: "{date} \xb7 {time}",
              values: { date: n, time: o },
            })),
            (c[11] = n),
            (c[12] = o),
            (c[13] = a))
          : (a = c[13]),
        c[14] !== v || c[15] !== a || c[16] !== d.created_at
          ? ((i = (0, r.jsx)("time", {
              className: "block min-w-0 truncate text-start text-sm tabular-nums",
              "aria-label": v,
              dateTime: y,
              children: a,
            })),
            (c[14] = v),
            (c[15] = a),
            (c[16] = d.created_at),
            (c[17] = i))
          : (i = c[17]),
        c[18] !== v || c[19] !== g || c[20] !== i
          ? ((l = (0, r.jsx)($.m, { content: v, disabled: g, children: i })),
            (c[18] = v),
            (c[19] = g),
            (c[20] = i),
            (c[21] = l))
          : (l = c[21]),
        l
      )
    }
    function ev(e) {
      let t,
        n,
        o,
        a,
        i,
        l,
        c,
        m,
        h,
        g,
        f,
        x,
        v,
        b,
        j,
        _,
        k,
        w,
        S,
        M,
        C,
        A = (0, s.c)(101),
        {
          pageId: I,
          realtimeSession: N,
          visible: E,
          versions: D,
          selectedId: L,
          endpoint: $,
          allowCurrent: T,
          onSelect: R,
          onLoadMore: q,
          isLoadingMore: z,
          isLoadMoreError: F,
          loadMoreError: K,
        } = e,
        O = void 0 !== z && z,
        B = void 0 !== F && F,
        U = (0, u.A)(),
        Y = (0, ef.wv)(),
        [G, J] = (0, d.useState)(!1),
        [W, Z] = (0, d.useState)(""),
        Q = (0, d.useId)(),
        X = null == L && void 0 !== L
      if (
        A[0] !== T ||
        A[1] !== $ ||
        A[2] !== U ||
        A[3] !== X ||
        A[4] !== Y ||
        A[5] !== R ||
        A[6] !== G ||
        A[7] !== W ||
        A[8] !== L ||
        A[9] !== Q ||
        A[10] !== D
      ) {
        let e, s, u, y, k, w, S, M, C, I, N, E
        A[27] !== L ? ((e = (e) => e.checkpoint_id === L), (A[27] = L), (A[28] = e)) : (e = A[28])
        let q = D.find(e)
        A[29] !== U || A[30] !== Y
          ? ((s = U.formatDate(Y, { year: "numeric" })), (A[29] = U), (A[30] = Y), (A[31] = s))
          : (s = A[31])
        let z = s
        A[32] !== U || A[33] !== G || A[34] !== D || A[35] !== z
          ? ((y = H(D, U)),
            (u = G
              ? D.map((e) => {
                  let t = U.formatDate(e.created_at, {
                      month: "long",
                      day: "numeric",
                      year: U.formatDate(e.created_at, { year: "numeric" }) === z ? void 0 : "numeric",
                    }),
                    n = U.formatDate(e.created_at, { dateStyle: "full", timeStyle: "medium" }),
                    r = y.get(e.checkpoint_id),
                    s = [
                      n,
                      U.formatDate(e.created_at, { dateStyle: "medium" }),
                      `${t} ${r}`,
                      `${U.formatDate(e.created_at, { month: "short", day: "numeric" })} ${r}`,
                    ]
                      .join(" ")
                      .replace(/\s+/g, " ")
                      .toLocaleLowerCase(U.locale)
                  return { version: e, date: t, fullDate: n, timeLabel: r, searchable: s }
                })
              : []),
            (A[32] = U),
            (A[33] = G),
            (A[34] = D),
            (A[35] = z),
            (A[36] = u),
            (A[37] = y))
          : ((u = A[36]), (y = A[37]))
        let F = u
        A[38] !== F || A[39] !== y
          ? ((k = { timeLabels: y, options: F }), (A[38] = F), (A[39] = y), (A[40] = k))
          : (k = A[40])
        let { timeLabels: K, options: O } = k
        ;((i = W.trim().replace(/\s+/g, " ").toLocaleLowerCase(U.locale)),
          (a = em()(
            O.filter((e) => e.searchable.includes(i)),
            eb,
          )),
          A[41] !== $ || A[42] !== U
            ? ((w =
                "from" === $
                  ? U.formatMessage({
                      id: "codex.page.versions.toolbar.chooseStartVersion",
                      defaultMessage: "Choose start version",
                    })
                  : U.formatMessage({
                      id: "codex.page.versions.toolbar.chooseEndVersion",
                      defaultMessage: "Choose end version",
                    })),
              (A[41] = $),
              (A[42] = U),
              (A[43] = w))
            : (w = A[43]))
        let B = w
        ;((o = eh.A),
          (b = G),
          A[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = (e) => {
                ;(Z(""), J(e))
              }),
              (A[44] = j))
            : (j = A[44]),
          (_ = "end"),
          (l = "panel"),
          (c = "list"),
          (m = ey),
          A[45] !== L
            ? ((S =
                void 0 === L
                  ? (0, r.jsx)(p.A, {
                      id: "codex.page.versions.toolbar.chooseVersion",
                      defaultMessage: "Choose version",
                    })
                  : null),
              (A[45] = L),
              (A[46] = S))
            : (S = A[46]))
        let ee = null != q ? (0, r.jsx)(ex, { version: q, timeLabel: K.get(q.checkpoint_id), pickerOpen: G }) : null
        ;(A[47] !== X
          ? ((M = X ? (0, r.jsx)(p.A, { id: "codex.page.versions.current", defaultMessage: "Current version" }) : null),
            (A[47] = X),
            (A[48] = M))
          : (M = A[48]),
          A[49] !== L || A[50] !== q
            ? ((C =
                null != L && null == q
                  ? (0, r.jsx)(p.A, {
                      id: "codex.page.versions.toolbar.chosenVersion",
                      defaultMessage: "Chosen version",
                    })
                  : null),
              (A[49] = L),
              (A[50] = q),
              (A[51] = C))
            : (C = A[51]),
          A[52] !== S || A[53] !== ee || A[54] !== M || A[55] !== C || A[56] !== Q
            ? ((I = (0, r.jsxs)("span", {
                id: Q,
                className: "min-w-0 flex-1 truncate text-start",
                children: [S, ee, M, C],
              })),
              (A[52] = S),
              (A[53] = ee),
              (A[54] = M),
              (A[55] = C),
              (A[56] = Q),
              (A[57] = I))
            : (I = A[57]),
          A[58] === Symbol.for("react.memo_cache_sentinel") ? ((N = (0, r.jsx)(P.Awc, {})), (A[58] = N)) : (N = A[58]),
          A[59] !== B || A[60] !== I || A[61] !== Q
            ? ((h = (0, r.jsxs)(V.DW, {
                className: "max-w-full min-w-0",
                variant: "dropdown",
                "aria-label": B,
                "aria-describedby": Q,
                children: [I, N],
              })),
              (A[59] = B),
              (A[60] = I),
              (A[61] = Q),
              (A[62] = h))
            : (h = A[62]),
          (n = eh.G.Root),
          (x = B),
          A[63] !== U
            ? ((E = U.formatMessage({
                id: "codex.page.versions.baseline.search",
                defaultMessage: "Find a date or time\u2026",
              })),
              (A[63] = U),
              (A[64] = E))
            : (E = A[64]),
          A[65] !== W || A[66] !== E
            ? ((v = (0, r.jsx)(eh.G.Input, { placeholder: E, value: W, onValueChange: Z })),
              (A[65] = W),
              (A[66] = E),
              (A[67] = v))
            : (v = A[67]),
          (t = eh.G.List),
          (g =
            T && "" === i
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(eh.G.Item, {
                      value: "current",
                      "aria-current": !!X || void 0,
                      rightIcon: X ? (0, r.jsx)(P.ALZ, {}) : void 0,
                      onSelect: () => {
                        ;(R(null), J(!1))
                      },
                      children: (0, r.jsx)(p.A, {
                        id: "codex.page.versions.current",
                        defaultMessage: "Current version",
                      }),
                    }),
                    (0, r.jsx)(eg.ms.Separator, {}),
                  ],
                })
              : null),
          (f = Object.entries(a).map((e) => {
            let [t, n] = e
            return (0, r.jsxs)(
              d.Fragment,
              {
                children: [
                  (0, r.jsx)(eg.ms.SectionLabel, { children: t }),
                  n.map((e) => {
                    let { version: t, fullDate: n, timeLabel: s } = e
                    return (0, r.jsx)(
                      eh.G.Item,
                      {
                        value: t.checkpoint_id,
                        "aria-label": n,
                        "aria-current": t.checkpoint_id === L || void 0,
                        tooltipText: n,
                        rightIcon: t.checkpoint_id === L ? (0, r.jsx)(P.ALZ, {}) : void 0,
                        onSelect: () => {
                          ;(R(t), J(!1))
                        },
                        children: (0, r.jsx)("span", { className: "tabular-nums", children: s }),
                      },
                      t.checkpoint_id,
                    )
                  }),
                ],
              },
              t,
            )
          })),
          (A[0] = T),
          (A[1] = $),
          (A[2] = U),
          (A[3] = X),
          (A[4] = Y),
          (A[5] = R),
          (A[6] = G),
          (A[7] = W),
          (A[8] = L),
          (A[9] = Q),
          (A[10] = D),
          (A[11] = t),
          (A[12] = n),
          (A[13] = o),
          (A[14] = a),
          (A[15] = i),
          (A[16] = l),
          (A[17] = c),
          (A[18] = m),
          (A[19] = h),
          (A[20] = g),
          (A[21] = f),
          (A[22] = x),
          (A[23] = v),
          (A[24] = b),
          (A[25] = j),
          (A[26] = _))
      } else
        ((t = A[11]),
          (n = A[12]),
          (o = A[13]),
          (a = A[14]),
          (i = A[15]),
          (l = A[16]),
          (c = A[17]),
          (m = A[18]),
          (h = A[19]),
          (g = A[20]),
          (f = A[21]),
          (x = A[22]),
          (v = A[23]),
          (b = A[24]),
          (j = A[25]),
          (_ = A[26]))
      return (
        A[68] !== a || A[69] !== i
          ? ((k =
              "" !== i && 0 === Object.keys(a).length
                ? (0, r.jsx)(eg.ms.Message, {
                    compact: !0,
                    children: (0, r.jsx)(p.A, {
                      id: "codex.page.versions.baseline.empty",
                      defaultMessage: "No matching versions",
                    }),
                  })
                : null),
            (A[68] = a),
            (A[69] = i),
            (A[70] = k))
          : (k = A[70]),
        A[71] !== B ||
        A[72] !== O ||
        A[73] !== K ||
        A[74] !== q ||
        A[75] !== G ||
        A[76] !== I ||
        A[77] !== N ||
        A[78] !== E
          ? ((w =
              null != q
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(eg.ms.Separator, {}),
                      B && !O
                        ? (0, r.jsxs)(eg.ms.Message, {
                            compact: !0,
                            children: [
                              (0, r.jsx)(y.It, {
                                pageId: I,
                                session: N,
                                visible: !1 !== E && G,
                                operation: "pages.version.history",
                                error: K,
                                kind: "load",
                                recoveryUi: "notice",
                              }),
                              (0, r.jsx)(p.A, {
                                id: "codex.page.versions.baseline.loadMoreError",
                                defaultMessage: "Couldn\u2019t load older versions",
                              }),
                            ],
                          })
                        : null,
                      (0, r.jsx)(eh.G.Item, {
                        value: "load-older",
                        disabled: O,
                        onSelect: q,
                        children: O
                          ? (0, r.jsx)(p.A, {
                              id: "codex.page.versions.baseline.loadingMore",
                              defaultMessage: "Loading older versions\u2026",
                            })
                          : (0, r.jsx)(p.A, {
                              id: "codex.page.versions.baseline.loadMore",
                              defaultMessage: "Load older versions",
                            }),
                      }),
                    ],
                  })
                : null),
            (A[71] = B),
            (A[72] = O),
            (A[73] = K),
            (A[74] = q),
            (A[75] = G),
            (A[76] = I),
            (A[77] = N),
            (A[78] = E),
            (A[79] = w))
          : (w = A[79]),
        A[80] !== t || A[81] !== k || A[82] !== w || A[83] !== g || A[84] !== f
          ? ((S = (0, r.jsxs)(t, { children: [g, f, k, w] })),
            (A[80] = t),
            (A[81] = k),
            (A[82] = w),
            (A[83] = g),
            (A[84] = f),
            (A[85] = S))
          : (S = A[85]),
        A[86] !== n || A[87] !== S || A[88] !== x || A[89] !== v
          ? ((M = (0, r.jsxs)(n, { label: x, children: [v, S] })),
            (A[86] = n),
            (A[87] = S),
            (A[88] = x),
            (A[89] = v),
            (A[90] = M))
          : (M = A[90]),
        A[91] !== o ||
        A[92] !== l ||
        A[93] !== c ||
        A[94] !== m ||
        A[95] !== h ||
        A[96] !== M ||
        A[97] !== b ||
        A[98] !== j ||
        A[99] !== _
          ? ((C = (0, r.jsx)(o, {
              open: b,
              onOpenChange: j,
              align: _,
              contentWidth: l,
              contentMaxHeight: c,
              onEscapeKeyDown: m,
              triggerButton: h,
              children: M,
            })),
            (A[91] = o),
            (A[92] = l),
            (A[93] = c),
            (A[94] = m),
            (A[95] = h),
            (A[96] = M),
            (A[97] = b),
            (A[98] = j),
            (A[99] = _),
            (A[100] = C))
          : (C = A[100]),
        C
      )
    }
    function ey(e) {
      return e.stopPropagation()
    }
    function eb(e) {
      return e.date
    }
    function ej(e) {
      let t,
        n,
        o,
        a,
        i,
        c,
        m,
        h,
        g = (0, s.c)(44),
        {
          pageId: f,
          realtimeSession: x,
          visible: v,
          showChanges: y,
          onShowChangesChange: b,
          versions: j,
          selectedVersion: _,
          previousVersion: k,
          baselineSelection: w,
          onBaselineChange: S,
          onLoadMore: M,
          isLoadingMore: C,
          isLoadMoreError: A,
          loadMoreError: I,
          activeChange: N,
          changeCount: E,
          onNavigateChange: D,
          onSelectVersion: L,
          comparisonStatus: $,
          selectionControls: T,
        } = e,
        R = (0, u.A)(),
        q = (0, d.useId)(),
        z = "ready" === $ && null != E && E > 0
      if (
        (g[0] !== w.checkpointId || g[1] !== w.kind || g[2] !== k?.checkpoint_id
          ? ((t = k?.checkpoint_id),
            "checkpoint" === w.kind ? (t = w.checkpointId) : "current" === w.kind && (t = null),
            (g[0] = w.checkpointId),
            (g[1] = w.kind),
            (g[2] = k?.checkpoint_id),
            (g[3] = t))
          : (t = g[3]),
        g[4] !== t || g[5] !== j)
      ) {
        let e
        ;(g[7] !== t ? ((e = (e) => e.checkpoint_id === t), (g[7] = t), (g[8] = e)) : (e = g[8]),
          (n = j.find(e)),
          (g[4] = t),
          (g[5] = j),
          (g[6] = n))
      } else n = g[6]
      let F = n
      return (
        g[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(p.A, { id: "codex.page.versions.toolbar.showChanges", defaultMessage: "Show changes" })),
            (g[9] = o))
          : (o = g[9]),
        g[10] !== q
          ? ((a = (0, r.jsx)("label", { className: "text-sm", htmlFor: q, children: o })), (g[10] = q), (g[11] = a))
          : (a = g[11]),
        g[12] !== b || g[13] !== y || g[14] !== q
          ? ((i = (0, r.jsx)(eu.l, { id: q, checked: y, onChange: b })),
            (g[12] = b),
            (g[13] = y),
            (g[14] = q),
            (g[15] = i))
          : (i = g[15]),
        g[16] !== a || g[17] !== i
          ? ((c = (0, r.jsxs)("div", { className: "flex min-h-8 items-center justify-end gap-2", children: [a, i] })),
            (g[16] = a),
            (g[17] = i),
            (g[18] = c))
          : (c = g[18]),
        g[19] !== N ||
        g[20] !== t ||
        g[21] !== F ||
        g[22] !== z ||
        g[23] !== E ||
        g[24] !== $ ||
        g[25] !== R ||
        g[26] !== A ||
        g[27] !== C ||
        g[28] !== I ||
        g[29] !== S ||
        g[30] !== M ||
        g[31] !== D ||
        g[32] !== L ||
        g[33] !== f ||
        g[34] !== x ||
        g[35] !== _ ||
        g[36] !== T ||
        g[37] !== y ||
        g[38] !== j ||
        g[39] !== v
          ? ((m = y
              ? (0, r.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-2",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-xs text-secondary",
                          children: (0, r.jsx)(p.A, { id: "codex.page.versions.fromLabel", defaultMessage: "From" }),
                        }),
                        (0, r.jsx)("div", {
                          className: "flex min-h-7 min-w-0 items-center",
                          children: (0, r.jsx)(ev, {
                            pageId: f,
                            realtimeSession: x,
                            visible: v,
                            endpoint: "from",
                            versions: j.filter((e) => null == _ || e.through_sequence <= _.through_sequence),
                            selectedId: t,
                            allowCurrent: null == _,
                            onSelect: (e) =>
                              S(
                                null == e ? { kind: "current" } : { kind: "checkpoint", checkpointId: e.checkpoint_id },
                              ),
                            onLoadMore: M,
                            isLoadingMore: C,
                            isLoadMoreError: A,
                            loadMoreError: I,
                          }),
                        }),
                        (0, r.jsx)("span", {
                          className: "text-xs text-secondary",
                          children: (0, r.jsx)(p.A, { id: "codex.page.versions.toLabel", defaultMessage: "To" }),
                        }),
                        (0, r.jsx)("div", {
                          className: "flex min-h-7 min-w-0 items-center",
                          children: (0, r.jsx)(ev, {
                            pageId: f,
                            realtimeSession: x,
                            visible: v,
                            endpoint: "to",
                            versions: j.filter(
                              (e) => void 0 === t || (null != F && e.through_sequence >= F.through_sequence),
                            ),
                            selectedId: _?.checkpoint_id ?? null,
                            allowCurrent: !0,
                            onSelect: L,
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "grid",
                      children: [
                        (0, r.jsxs)("div", {
                          className: (0, l.A)(
                            "col-start-1 row-start-1 flex min-h-8 min-w-0 items-center justify-between gap-2",
                            null != T && "invisible",
                          ),
                          inert: null != T,
                          "aria-hidden": null != T,
                          children: [
                            (0, r.jsxs)("span", {
                              className: "flex min-w-0 items-center gap-2 text-xs text-secondary tabular-nums",
                              role: "status",
                              "aria-atomic": !0,
                              children: [
                                "loading" === $ || "pending" === $
                                  ? (0, r.jsx)(p.A, {
                                      id: "codex.page.versions.toolbar.comparing",
                                      defaultMessage: "Comparing\u2026",
                                    })
                                  : null,
                                "error" === $
                                  ? (0, r.jsx)(p.A, {
                                      id: "codex.page.versions.toolbar.comparisonError",
                                      defaultMessage: "Comparison unavailable",
                                    })
                                  : null,
                                "ready" === $ && null == E
                                  ? (0, r.jsx)(p.A, {
                                      id: "codex.page.versions.toolbar.chooseComparison",
                                      defaultMessage: "Choose a comparison version",
                                    })
                                  : null,
                                "unavailable" === $
                                  ? (0, r.jsx)(p.A, {
                                      id: "codex.page.versions.toolbar.noEarlierComparison",
                                      defaultMessage: "No earlier version to compare",
                                    })
                                  : null,
                                "ready" === $ && 0 === E
                                  ? (0, r.jsx)(p.A, {
                                      id: "codex.page.versions.toolbar.noChanges",
                                      defaultMessage: "No changes",
                                    })
                                  : null,
                                "same" === $
                                  ? (0, r.jsx)(p.A, {
                                      id: "codex.page.versions.toolbar.sameVersion",
                                      defaultMessage: "Same version selected",
                                    })
                                  : null,
                                z && null == N
                                  ? (0, r.jsx)(p.A, {
                                      id: "codex.page.versions.toolbar.changeCount",
                                      defaultMessage: "{count, plural, one {# change} other {# changes}}",
                                      values: { count: E },
                                    })
                                  : null,
                                z && null != N
                                  ? (0, r.jsx)(p.A, {
                                      id: "codex.page.versions.toolbar.changePosition",
                                      defaultMessage: "{position} of {count}",
                                      values: { position: N + 1, count: E },
                                    })
                                  : null,
                              ],
                            }),
                            (0, r.jsxs)(V.J5, {
                              label: R.formatMessage({
                                id: "codex.page.versions.toolbar.navigateChanges",
                                defaultMessage: "Navigate changes",
                              }),
                              children: [
                                (0, r.jsx)(V.K8, {
                                  uniform: !0,
                                  disabled: !z || null == N || 0 === N,
                                  "aria-label": R.formatMessage({
                                    id: "codex.page.versions.toolbar.previousChange",
                                    defaultMessage: "Previous change",
                                  }),
                                  onClick: () => {
                                    null != N && D(N - 1)
                                  },
                                  children: (0, r.jsx)(ed.I, { asset: ec.V }),
                                }),
                                (0, r.jsx)(V.K8, {
                                  uniform: !0,
                                  disabled: !z || (null != N && null != E && N >= E - 1),
                                  "aria-label": R.formatMessage({
                                    id: "codex.page.versions.toolbar.nextChange",
                                    defaultMessage: "Next change",
                                  }),
                                  onClick: () => D((N ?? -1) + 1),
                                  children: (0, r.jsx)(P.Aq_, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                        null != T
                          ? (0, r.jsx)("div", { className: "col-start-1 row-start-1 grid items-center", children: T })
                          : null,
                      ],
                    }),
                  ],
                })
              : null),
            (g[19] = N),
            (g[20] = t),
            (g[21] = F),
            (g[22] = z),
            (g[23] = E),
            (g[24] = $),
            (g[25] = R),
            (g[26] = A),
            (g[27] = C),
            (g[28] = I),
            (g[29] = S),
            (g[30] = M),
            (g[31] = D),
            (g[32] = L),
            (g[33] = f),
            (g[34] = x),
            (g[35] = _),
            (g[36] = T),
            (g[37] = y),
            (g[38] = j),
            (g[39] = v),
            (g[40] = m))
          : (m = g[40]),
        g[41] !== c || g[42] !== m
          ? ((h = (0, r.jsxs)("div", { className: "flex flex-col gap-3 select-none", children: [c, m] })),
            (g[41] = c),
            (g[42] = m),
            (g[43] = h))
          : (h = g[43]),
        h
      )
    }
    function e_(e) {
      let t,
        n = (0, s.c)(4),
        o = (0, c.Ul)(_.spaceAccountId$),
        a = (0, c.Ul)(h.chatGptAuthenticatedUserId$)
      return (
        n[0] !== o || n[1] !== e || n[2] !== a
          ? ((t =
              null == o
                ? (0, r.jsx)(eE, {
                    pageId: e.pageId,
                    realtimeSession: e.realtimeSession,
                    visible: e.visible,
                    onClose: e.onClose,
                  })
                : (0, r.jsx)(ek, { ...e, accountId: o, userId: a }, JSON.stringify([o, a, e.pageId, e.streamKind]))),
            (n[0] = o),
            (n[1] = e),
            (n[2] = a),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    function ek(e) {
      let t,
        n,
        o,
        a,
        i = (0, s.c)(15),
        l = (0, c.gh)(w.u),
        p = (0, u.A)()
      i[0] !== p.formatMessage ||
      i[1] !== e.accountId ||
      i[2] !== e.pageId ||
      i[3] !== e.streamKind ||
      i[4] !== e.userId ||
      i[5] !== l
        ? ((t = () =>
            (function ({ scope: e, accountId: t, userId: n, pageId: r, streamKind: s, markdown: o }) {
              let a,
                i = null,
                l = new Map(),
                c = (function ({ scope: e, accountId: t, userId: n, pageId: r, streamKind: s }) {
                  let o,
                    a = new eo.q({ max: 12, maxSize: 8388608, sizeCalculation: el }),
                    i = new Map(),
                    l = new Set(),
                    c = new Set(),
                    d = new AbortController(),
                    u = !1,
                    p = !1,
                    h = 0
                  function g() {
                    if (null != o || u) return
                    let a = (0, _.watchSpaceAccount)(e, t, n),
                      i = (0, j.Xw)((n, o, a, i, l) => {
                        ;(n.chain.get(w.u.id) ?? n.node) === (e.chain.get(w.u.id) ?? e.node) &&
                          o === t &&
                          a === r &&
                          (l?.streamKind ?? "content") === s &&
                          x()
                      })
                    ;((o = () => {
                      ;(a.stop(), i(), a.signal.removeEventListener("abort", x))
                    }),
                      a.signal.addEventListener("abort", x, { once: !0 }),
                      a.signal.aborted && x())
                  }
                  function f() {
                    for (let e of ((u = !0), d.abort(), o?.(), (o = void 0), a.clear(), i.values())) y(e)
                  }
                  function x() {
                    if (!u) for (let e of ((p = !0), f(), c)) e()
                  }
                  function y(e) {
                    for (let t of (e.controller.abort(), e.subscribers)) t.reject(ei(e.controller.signal))
                    i.delete(e.checkpointId)
                  }
                  function b(e, t) {
                    let n = {
                      checkpointId: e,
                      controller: new AbortController(),
                      subscribers: new Set(),
                      prefetch: t,
                      started: !1,
                    }
                    return (i.set(e, n), n)
                  }
                  function S() {
                    for (; !u && l.size < 2;) {
                      let t = [...i.values()].filter((e) => !e.started),
                        n =
                          t.find((e) => !e.prefetch) ??
                          ([...l].some((e) => e.prefetch) ? void 0 : t.find((e) => e.prefetch))
                      if (null == n) return
                      ;((n.started = !0),
                        l.add(n),
                        (async function (t) {
                          let n = (0, m.l)(
                            e,
                            "version_snapshot",
                            { stream_kind: s, source: t.prefetch ? "prefetch" : "requested" },
                            t.controller.signal,
                          )
                          try {
                            let e = await (0, ee.y)({
                              pageId: r,
                              checkpointId: t.checkpointId,
                              streamKind: s,
                              signal: t.controller.signal,
                            })
                            t.controller.signal.throwIfAborted()
                            let o = (0, ea.g)(e)
                            if (null == o) throw Error("The Page checkpoint contains an invalid document")
                            for (let e of (a.set(t.checkpointId, o), n("success"), t.subscribers)) e.resolve(o)
                          } catch (s) {
                            ;(t.controller.signal.aborted ||
                              (s instanceof C.FetchError && [401, 403, 404].includes(s.status)) ||
                              (0, v.ZD)(e.get(k.YV), "pages.version.load", s),
                              n(t.controller.signal.aborted ? "canceled" : "failure"),
                              !t.controller.signal.aborted &&
                                s instanceof C.FetchError &&
                                (401 === s.status || 403 === s.status) &&
                                x())
                            let r = s instanceof Error ? s : Error("The Page version could not be loaded", { cause: s })
                            for (let e of t.subscribers) e.reject(r)
                          } finally {
                            ;(i.get(t.checkpointId) === t && i.delete(t.checkpointId), l.delete(t), S())
                          }
                        })(n))
                    }
                  }
                  return {
                    signal: d.signal,
                    retain: () => (
                      (h += 1),
                      g(),
                      () => {
                        ;((h -= 1),
                          queueMicrotask(() => {
                            0 === h && f()
                          }))
                      }
                    ),
                    subscribeInvalidation: (e) => (
                      c.add(e),
                      g(),
                      () => {
                        c.delete(e)
                      }
                    ),
                    getInvalidated: () => p,
                    peek: (e) => a.get(e),
                    read(e, t) {
                      if ((g(), u || t.aborted)) return Promise.reject(ei(t))
                      let n = a.get(e)
                      if (null != n) return Promise.resolve(n)
                      let r = i.get(e)
                      if (
                        (null == r || (!r.started && r.prefetch)) &&
                        [...i.values()].filter((e) => !e.started && !e.prefetch).length >= 2
                      )
                        return Promise.reject(new DOMException("Page version request superseded", "AbortError"))
                      let s = r ?? b(e, !1)
                      return (
                        (s.prefetch = !1),
                        new Promise((e, n) => {
                          let r = {
                              resolve: (t) => {
                                ;(o(), e(t))
                              },
                              reject: (e) => {
                                ;(o(), n(e))
                              },
                            },
                            o = () => {
                              ;(t.removeEventListener("abort", a), s.subscribers.delete(r))
                            },
                            a = () => {
                              ;(r.reject(ei(t)), 0 !== s.subscribers.size || s.prefetch || y(s))
                            }
                          ;(s.subscribers.add(r), t.addEventListener("abort", a, { once: !0 }), S())
                        })
                      )
                    },
                    prefetch(e) {
                      if ((g(), u)) return
                      let t = new Set(e.slice(0, 2))
                      for (let e of i.values()) e.prefetch && !t.has(e.checkpointId) && y(e)
                      for (let e of t) a.has(e) || i.has(e) || b(e, !0)
                      S()
                    },
                    dispose: f,
                  }
                })({ scope: e, accountId: t, userId: n, pageId: r, streamKind: s })
              function d(e) {
                let t = l.get(e)
                return (null != t && (l.delete(e), l.set(e, t)), t)
              }
              return (
                c.signal.addEventListener(
                  "abort",
                  () => {
                    ;((i = null), (a = void 0), l.clear())
                  },
                  { once: !0 },
                ),
                {
                  loader: c,
                  peekSnapshot(e) {
                    if (void 0 !== e) return null == e ? a : c.peek(e)
                  },
                  peekComparison: d,
                  readCurrent: (t) =>
                    null != i
                      ? i
                      : (i = Promise.resolve()
                          .then(async () => {
                            if ((c.signal.throwIfAborted(), null == t)) throw Error("The current Page is not available")
                            let e = await t()
                            c.signal.throwIfAborted()
                            let n = (0, ea.g)(e)
                            if (null == n) throw Error("The current Page snapshot is invalid")
                            return ((a = n), n)
                          })
                          .catch((n) => {
                            throw (
                              c.signal.aborted || null == t || (0, v.ZD)(e.get(k.YV), "pages.version.snapshot", n),
                              (i = null),
                              n
                            )
                          })),
                  async prepare(t, n, r, s) {
                    let a = AbortSignal.any([s, c.signal])
                    a.throwIfAborted()
                    let i = d(r)
                    if (null != i) return i
                    try {
                      let e = await (0, es.a)({ snapshot: n, baseline: t, markdown: o, signal: a })
                      a.throwIfAborted()
                      let s = t === n ? 0 : (0, er.N)(t, o).document.nodeSize
                      if (e.document.nodeSize + s <= 25e4)
                        for (l.set(r, e); l.size > 4;) {
                          let e = l.keys().next().value
                          null != e && l.delete(e)
                        }
                      return e
                    } catch (t) {
                      throw (a.aborted || (0, v.ZD)(e.get(k.YV), "pages.version.compare", t), t)
                    }
                  },
                }
              )
            })({
              scope: l,
              accountId: e.accountId,
              userId: e.userId,
              pageId: e.pageId,
              streamKind: e.streamKind,
              markdown: (0, x.Je)(p.formatMessage),
            })),
          (i[0] = p.formatMessage),
          (i[1] = e.accountId),
          (i[2] = e.pageId),
          (i[3] = e.streamKind),
          (i[4] = e.userId),
          (i[5] = l),
          (i[6] = t))
        : (t = i[6])
      let [h] = (0, d.useState)(t)
      ;(i[7] !== h.loader ? ((n = () => h.loader.retain()), (i[7] = h.loader), (i[8] = n)) : (n = i[8]),
        i[9] !== h ? ((o = [h]), (i[9] = h), (i[10] = o)) : (o = i[10]),
        (0, d.useEffect)(n, o))
      let g = (0, d.useSyncExternalStore)(
        h.loader.subscribeInvalidation,
        h.loader.getInvalidated,
        h.loader.getInvalidated,
      )
      return (
        i[11] !== g || i[12] !== e || i[13] !== h
          ? ((a = g
              ? (0, r.jsx)(eE, {
                  pageId: e.pageId,
                  realtimeSession: e.realtimeSession,
                  visible: e.visible,
                  onClose: e.onClose,
                })
              : (0, r.jsx)(ew, { ...e, session: h })),
            (i[11] = g),
            (i[12] = e),
            (i[13] = h),
            (i[14] = a))
          : (a = i[14]),
        a
      )
    }
    function ew(e) {
      let t,
        n,
        h,
        g,
        x,
        y,
        _,
        N,
        E,
        L,
        $,
        T,
        P,
        R,
        q,
        z,
        F,
        K,
        V,
        O,
        B,
        U,
        H,
        G,
        J,
        W,
        Z,
        Q,
        X,
        ee = (0, s.c)(174),
        {
          realtimeSession: en,
          visible: er,
          accountId: es,
          userId: eo,
          pageId: ea,
          streamKind: ei,
          getCurrentUpdate: el,
          isPanelOpen: ec,
          renderPanel: ed,
          onClose: eu,
          onRestore: ep,
          session: em,
        } = e,
        eh = (0, c.gh)(w.u),
        eg = (0, u.A)(),
        ef = (0, d.useId)(),
        { loader: ex, readCurrent: ev, prepare: ey } = em,
        [eb, e_] = (0, d.useState)(null),
        [ek, ew] = (0, d.useState)(null)
      ee[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { kind: "previous" }), (ee[0] = t)) : (t = ee[0])
      let [eC, eE] = (0, d.useState)(t),
        [eL, e$] = (0, d.useState)(!1),
        eT = eL ? ek : eb,
        eP = eT?.checkpoint_id ?? null,
        [eR, eq] = (0, d.useState)(null)
      ;(ee[1] !== es || ee[2] !== ea || ee[3] !== ei || ee[4] !== eo
        ? ((n = ["space", "page-version-history", es, ea, ei, eo]),
          (ee[1] = es),
          (ee[2] = ea),
          (ee[3] = ei),
          (ee[4] = eo),
          (ee[5] = n))
        : (n = ee[5]),
        ee[6] !== es || ee[7] !== ex || ee[8] !== ea || ee[9] !== eh || ee[10] !== ei
          ? ((h = async (e) => {
              let { pageParam: t, signal: n } = e,
                r = (0, m.l)(
                  eh,
                  "version_history",
                  { stream_kind: ei, page: t ? "older" : "initial" },
                  AbortSignal.any([n, ex.signal]),
                )
              try {
                let e = await M.CodexRequest.safeGet("/pages/{page_id}/versions", {
                  parameters: { path: { page_id: ea }, query: { cursor: t || void 0, limit: 20, stream_kind: ei } },
                  signal: AbortSignal.any([n, ex.signal]),
                })
                return (r("success"), e)
              } catch (e) {
                throw (
                  n.aborted ||
                    ex.signal.aborted ||
                    (e instanceof C.FetchError && [401, 403, 404].includes(e.status)) ||
                    (0, v.ZD)(eh.get(k.YV), "pages.version.history", e),
                  r(n.aborted || ex.signal.aborted ? "canceled" : "failure"),
                  !n.aborted &&
                    !ex.signal.aborted &&
                    e instanceof C.FetchError &&
                    (401 === e.status || 403 === e.status) &&
                    (0, j.F1)(eh, es, ea, "page_read_forbidden", { definitive: !0, streamKind: ei, error: e }),
                  e
                )
              }
            }),
            (ee[6] = es),
            (ee[7] = ex),
            (ee[8] = ea),
            (ee[9] = eh),
            (ee[10] = ei),
            (ee[11] = h))
          : (h = ee[11]),
        ee[12] !== n || ee[13] !== h
          ? ((g = {
              queryKey: n,
              initialPageParam: "",
              getNextPageParam: eN,
              queryFn: h,
              staleTime: S.D.THIRTY_SECONDS,
              refetchOnMount: "always",
              refetchOnWindowFocus: !1,
              retry: !1,
            }),
            (ee[12] = n),
            (ee[13] = h),
            (ee[14] = g))
          : (g = ee[14]))
      let {
          data: ez,
          fetchNextPage: eF,
          hasNextPage: eK,
          isFetchingNextPage: eV,
          isFetchNextPageError: eO,
          isPending: eB,
          isError: eU,
          error: eH,
          refetch: eY,
        } = (0, a.q)(g),
        eG = ez?.pages.flatMap(eI).sort(eA),
        eJ = eG?.findIndex((e) => e.checkpoint_id === eP) ?? -1,
        eW = eG?.[0]
      null != eP && (eW = eJ < 0 ? void 0 : eG?.[eJ + 1])
      let eZ = eW?.checkpoint_id
      "current" === eC.kind ? (eZ = null) : "checkpoint" === eC.kind && (eZ = eC.checkpointId)
      let eQ = null != eP && eJ >= 0 && null == eW && eK
      ee[15] !== ez?.pages || ee[16] !== ez?.pages.flatMap
        ? ((x = new Map(ez?.pages.flatMap(eM))), (ee[15] = ez?.pages), (ee[16] = ez?.pages.flatMap), (ee[17] = x))
        : (x = ee[17])
      let eX = x,
        e1 = ["space", "page-version-review", es, eo, ea, ei, ef]
      ee[18] !== eP || ee[19] !== em
        ? ((y = () => em.peekSnapshot(eP)), (ee[18] = eP), (ee[19] = em), (ee[20] = y))
        : (y = ee[20])
      let {
          data: e0,
          isError: e2,
          error: e3,
          refetch: e4,
        } = (0, i.I)({
          enabled: null != eP || null != el,
          initialData: y,
          queryKey: [...e1, "snapshot", { checkpointId: eP }],
          queryFn: async (e) => {
            let { signal: t } = e,
              n = null == eP ? await ev(el) : await ex.read(eP, t)
            return (
              t.throwIfAborted(),
              ex.signal.throwIfAborted(),
              ex.prefetch([eW?.checkpoint_id, eG?.[eJ - 1]?.checkpoint_id].filter(eS)),
              n
            )
          },
          staleTime: 1 / 0,
          gcTime: 0,
          retry: !1,
        }),
        {
          data: e5,
          isError: e6,
          error: e9,
          refetch: e7,
        } = (0, i.I)({
          enabled: eL && void 0 !== eZ && ("current" !== eC.kind || null != el),
          initialData: () => em.peekSnapshot(eZ),
          queryKey: [...e1, "snapshot", { checkpointId: eZ }],
          queryFn: async (e) => {
            let { signal: t } = e
            if (void 0 === eZ) throw Error("No comparison version selected")
            let n = null == eZ ? await ev(el) : await ex.read(eZ, t)
            return (t.throwIfAborted(), ex.signal.throwIfAborted(), n)
          },
          staleTime: 1 / 0,
          gcTime: 0,
          retry: !1,
        }),
        e8 = JSON.stringify({ selectedId: eP, baseline: eZ })
      ee[21] !== e0 ? ((_ = (e) => (e?.snapshot === e0 ? e : void 0)), (ee[21] = e0), (ee[22] = _)) : (_ = ee[22])
      let {
        data: te,
        isPlaceholderData: tt,
        isError: tn,
        error: tr,
        refetch: ts,
      } = (0, i.I)({
        enabled: eL && void 0 !== eZ && null != e0 && null != e5,
        initialData: () => em.peekComparison(e8),
        queryKey: [...e1, "comparison", { selectedId: eP, baseline: eZ }],
        queryFn: (e) => {
          let { signal: t } = e
          if (null == e0 || null == e5) throw Error("The comparison snapshots are unavailable")
          return ey(e5, e0, e8, t)
        },
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        placeholderData: _,
      })
      ee[23] !== ey || ee[24] !== eP || ee[25] !== e0
        ? ((N = (e) => {
            let { signal: t } = e
            if (null == e0) throw Error("No Page snapshot loaded")
            return ey(e0, e0, JSON.stringify([eP]), t)
          }),
          (ee[23] = ey),
          (ee[24] = eP),
          (ee[25] = e0),
          (ee[26] = N))
        : (N = ee[26])
      let {
          data: to,
          isError: ta,
          error: ti,
          refetch: tl,
        } = (0, i.I)({
          enabled:
            null != e0 &&
            null == te &&
            (!eL || e6 || tn || (void 0 === eZ && !eQ && !eB) || ("previous" === eC.kind && eQ && eU)),
          initialData: () => em.peekComparison(e8) ?? em.peekComparison(JSON.stringify([eP])),
          queryKey: [...e1, "document", eP],
          queryFn: N,
          staleTime: 1 / 0,
          gcTime: 0,
          retry: !1,
        }),
        tc = tt ? void 0 : te,
        td = eR?.pair === e8 ? eR.index : null,
        tu = null == tc ? "pending" : "ready"
      ;(null == tc && (null == e0 || null == e5) && (tu = "loading"),
        e2 || ta || e6 || tn || ("previous" === eC.kind && eQ && eU)
          ? (tu = "error")
          : void 0 !== eZ || eQ || eB
            ? null != tc && eP === eZ && (tu = "same")
            : (tu = "unavailable"))
      let tp = eL && ("loading" === tu || "pending" === tu),
        tm = tc ?? (tp ? te : void 0),
        [th, tg] = (0, d.useState)(),
        tf = th?.snapshot === e0 ? th : void 0,
        tx = tf ?? to ?? tc
      ;(eL && null != tm ? (tx = tm) : tp && (tx = tf), th !== tx && tg(tx))
      let tv = !e2 && !ta && (null == tx || tp)
      ee[27] !== eu
        ? ((E = (e) => {
            "Escape" !== e.key || e.defaultPrevented || (e.stopPropagation(), eu())
          }),
          (ee[27] = eu),
          (ee[28] = E))
        : (E = ee[28])
      let ty = E
      ee[29] !== ek || ee[30] !== eL
        ? ((L = (e) => {
            ;(eE(null == e ? { kind: "current" } : { kind: "checkpoint", checkpointId: e.checkpoint_id }),
              !eL && (e_(e), null != ek && (null == e || e.through_sequence > ek.through_sequence) && ew(null)))
          }),
          (ee[29] = ek),
          (ee[30] = eL),
          (ee[31] = L))
        : (L = ee[31])
      let tb = L,
        tj = function (e) {
          ;("previous" === eC.kind &&
            void 0 !== eZ &&
            eE(null == eZ ? { kind: "current" } : { kind: "checkpoint", checkpointId: eZ }),
            ew(e),
            void 0 === eZ && null != e && e === eG?.at(-1) && eK && eF())
        },
        t_ = eL ? eG?.find((e) => e.checkpoint_id === eZ) : eT,
        tk = eL ? null != e5 && !e6 : null != e0 && !e2,
        tw = !1 !== er && ec
      ee[32] !== eG ? (($ = eG ?? []), (ee[32] = eG), (ee[33] = $)) : ($ = ee[33])
      let tS = ez?.pages[0]?.current_editor_summary
      ;(ee[34] !== eF || ee[35] !== eK
        ? ((T = eK
            ? () => {
                eF()
              }
            : void 0),
          (ee[34] = eF),
          (ee[35] = eK),
          (ee[36] = T))
        : (T = ee[36]),
        ee[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (e) => eE(null == e ? { kind: "current" } : { kind: "checkpoint", checkpointId: e })), (ee[37] = P))
          : (P = ee[37]),
        ee[38] !== tv ||
        ee[39] !== ex ||
        ee[40] !== eu ||
        ee[41] !== ep ||
        ee[42] !== ea ||
        ee[43] !== en ||
        ee[44] !== tk ||
        ee[45] !== t_ ||
        ee[46] !== ei ||
        ee[47] !== er
          ? ((R =
              null != t_ && null != ep
                ? (0, r.jsx)(
                    et,
                    {
                      realtimeSession: en,
                      visible: er,
                      pageId: ea,
                      streamKind: ei,
                      version: t_,
                      ready: tk && !tv,
                      signal: ex.signal,
                      onRestore: ep,
                      onRestored: eu,
                    },
                    t_.checkpoint_id,
                  )
                : null),
            (ee[38] = tv),
            (ee[39] = ex),
            (ee[40] = eu),
            (ee[41] = ep),
            (ee[42] = ea),
            (ee[43] = en),
            (ee[44] = tk),
            (ee[45] = t_),
            (ee[46] = ei),
            (ee[47] = er),
            (ee[48] = R))
          : (R = ee[48]),
        ee[49] !== td ||
        ee[50] !== eC ||
        ee[51] !== tc?.changes.length ||
        ee[52] !== tu ||
        ee[53] !== eF ||
        ee[54] !== eK ||
        ee[55] !== eH ||
        ee[56] !== eO ||
        ee[57] !== eV ||
        ee[58] !== ec ||
        ee[59] !== eQ ||
        ee[60] !== ea ||
        ee[61] !== e8 ||
        ee[62] !== eb ||
        ee[63] !== eW ||
        ee[64] !== en ||
        ee[65] !== t_ ||
        ee[66] !== tj ||
        ee[67] !== eT ||
        ee[68] !== eL ||
        ee[69] !== eG ||
        ee[70] !== er
          ? ((q = (e) =>
              (0, r.jsx)(ej, {
                pageId: ea,
                realtimeSession: en,
                visible: !1 !== er && ec,
                selectionControls: e,
                versions: eG ?? [],
                selectedVersion: eT,
                previousVersion: eW,
                showChanges: eL,
                onShowChangesChange: (e) => {
                  ;(e ? null != eb && eE({ kind: "checkpoint", checkpointId: eb.checkpoint_id }) : e_(t_ ?? null),
                    e$(e),
                    e && "previous" === eC.kind && eQ && eF())
                },
                baselineSelection: eC,
                onLoadMore: eK
                  ? () => {
                      eF()
                    }
                  : void 0,
                isLoadingMore: eV,
                isLoadMoreError: eO,
                loadMoreError: eH,
                onBaselineChange: (e) => {
                  ;(eE(e), "previous" === e.kind && eQ && eF())
                },
                activeChange: td,
                changeCount: tc?.changes.length ?? null,
                onNavigateChange: (e) => eq({ pair: e8, index: e }),
                onSelectVersion: tj,
                comparisonStatus: tu,
              })),
            (ee[49] = td),
            (ee[50] = eC),
            (ee[51] = tc?.changes.length),
            (ee[52] = tu),
            (ee[53] = eF),
            (ee[54] = eK),
            (ee[55] = eH),
            (ee[56] = eO),
            (ee[57] = eV),
            (ee[58] = ec),
            (ee[59] = eQ),
            (ee[60] = ea),
            (ee[61] = e8),
            (ee[62] = eb),
            (ee[63] = eW),
            (ee[64] = en),
            (ee[65] = t_),
            (ee[66] = tj),
            (ee[67] = eT),
            (ee[68] = eL),
            (ee[69] = eG),
            (ee[70] = er),
            (ee[71] = q))
          : (q = ee[71]),
        ee[72] !== eB ? ((z = eB ? (0, r.jsx)(D, {}) : null), (ee[72] = eB), (ee[73] = z)) : (z = ee[73]),
        ee[74] !== eU ||
        ee[75] !== eH ||
        ee[76] !== eO ||
        ee[77] !== ec ||
        ee[78] !== ea ||
        ee[79] !== en ||
        ee[80] !== eY ||
        ee[81] !== er
          ? ((F =
              eU && !eO
                ? (0, r.jsx)(eD, {
                    pageId: ea,
                    realtimeSession: en,
                    visible: !1 !== er && ec,
                    kind: "history",
                    error: eH,
                    onRetry: () => {
                      eY()
                    },
                  })
                : null),
            (ee[74] = eU),
            (ee[75] = eH),
            (ee[76] = eO),
            (ee[77] = ec),
            (ee[78] = ea),
            (ee[79] = en),
            (ee[80] = eY),
            (ee[81] = er),
            (ee[82] = F))
          : (F = ee[82]),
        ee[83] !== eG?.length
          ? ((K =
              eG?.length === 0
                ? (0, r.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(p.A, {
                      id: "codex.page.versions.noSavedVersions",
                      defaultMessage: "No saved versions yet",
                    }),
                  })
                : null),
            (ee[83] = eG?.length),
            (ee[84] = K))
          : (K = ee[84]),
        ee[85] !== eZ ||
        ee[86] !== eH ||
        ee[87] !== eO ||
        ee[88] !== eV ||
        ee[89] !== eX ||
        ee[90] !== eu ||
        ee[91] !== ea ||
        ee[92] !== en ||
        ee[93] !== tj ||
        ee[94] !== tb ||
        ee[95] !== eP ||
        ee[96] !== eL ||
        ee[97] !== tw ||
        ee[98] !== $ ||
        ee[99] !== tS ||
        ee[100] !== T ||
        ee[101] !== R ||
        ee[102] !== q ||
        ee[103] !== z ||
        ee[104] !== F ||
        ee[105] !== K
          ? ((V = (0, r.jsxs)(Y, {
              pageId: ea,
              realtimeSession: en,
              visible: tw,
              showHeader: !1,
              selectedId: eP,
              baselineId: eZ,
              showChanges: eL,
              versions: $,
              names: eX,
              currentSummary: tS,
              onLoadMore: T,
              isLoadingMore: eV,
              isLoadMoreError: eO,
              loadMoreError: eH,
              onBaselineChange: P,
              onSelect: tb,
              onSelectEnd: tj,
              onClose: eu,
              restoreAction: R,
              renderControls: q,
              children: [z, F, K],
            })),
            (ee[85] = eZ),
            (ee[86] = eH),
            (ee[87] = eO),
            (ee[88] = eV),
            (ee[89] = eX),
            (ee[90] = eu),
            (ee[91] = ea),
            (ee[92] = en),
            (ee[93] = tj),
            (ee[94] = tb),
            (ee[95] = eP),
            (ee[96] = eL),
            (ee[97] = tw),
            (ee[98] = $),
            (ee[99] = tS),
            (ee[100] = T),
            (ee[101] = R),
            (ee[102] = q),
            (ee[103] = z),
            (ee[104] = F),
            (ee[105] = K),
            (ee[106] = V))
          : (V = ee[106]))
      let tM = V,
        tC = eL && ((e6 && eZ !== eP) || tn || ("previous" === eC.kind && eQ && eU)),
        tA = e2 || ta
      ;(ee[107] !== eg
        ? ((O = eg.formatMessage({ id: "codex.page.versions.workspaceLabel", defaultMessage: "Page version history" })),
          (ee[107] = eg),
          (ee[108] = O))
        : (O = ee[108]),
        ee[109] !== e6 ||
        ee[110] !== e9 ||
        ee[111] !== ti ||
        ee[112] !== tn ||
        ee[113] !== tC ||
        ee[114] !== tr ||
        ee[115] !== tA ||
        ee[116] !== eF ||
        ee[117] !== eH ||
        ee[118] !== eQ ||
        ee[119] !== ea ||
        ee[120] !== en ||
        ee[121] !== e7 ||
        ee[122] !== tl ||
        ee[123] !== ts ||
        ee[124] !== e4 ||
        ee[125] !== e2 ||
        ee[126] !== e3 ||
        ee[127] !== er
          ? ((B =
              tC || tA
                ? (0, r.jsxs)("div", {
                    className: "pt-[var(--page-header-clearance,0px)]",
                    children: [
                      tC
                        ? (0, r.jsx)(eD, {
                            pageId: ea,
                            realtimeSession: en,
                            visible: er,
                            kind: "comparison",
                            error: e9 ?? tr ?? eH,
                            onRetry: () => {
                              ;(e6 ? e7() : tn && ts(), eQ && eF())
                            },
                          })
                        : null,
                      tA
                        ? (0, r.jsx)(eD, {
                            pageId: ea,
                            realtimeSession: en,
                            visible: er,
                            error: e3 ?? ti,
                            onRetry: () => {
                              e2 ? e4() : tl()
                            },
                          })
                        : null,
                    ],
                  })
                : null),
            (ee[109] = e6),
            (ee[110] = e9),
            (ee[111] = ti),
            (ee[112] = tn),
            (ee[113] = tC),
            (ee[114] = tr),
            (ee[115] = tA),
            (ee[116] = eF),
            (ee[117] = eH),
            (ee[118] = eQ),
            (ee[119] = ea),
            (ee[120] = en),
            (ee[121] = e7),
            (ee[122] = tl),
            (ee[123] = ts),
            (ee[124] = e4),
            (ee[125] = e2),
            (ee[126] = e3),
            (ee[127] = er),
            (ee[128] = B))
          : (B = ee[128]))
      let tI = (tC || tA) && "[--page-header-clearance:0px]"
      ee[129] !== tI
        ? ((U = (0, l.A)("relative flex min-h-0 flex-1 flex-col", tI)), (ee[129] = tI), (ee[130] = U))
        : (U = ee[130])
      let tN = `flex min-h-0 flex-1 flex-col${tp ? " invisible" : ""}`,
        tE = tp || void 0
      return (
        ee[131] !== td ||
        ee[132] !== eZ ||
        ee[133] !== ta ||
        ee[134] !== tc ||
        ee[135] !== tp ||
        ee[136] !== tx ||
        ee[137] !== tm ||
        ee[138] !== ea ||
        ee[139] !== en ||
        ee[140] !== eP ||
        ee[141] !== eT?.created_at ||
        ee[142] !== eL ||
        ee[143] !== e2 ||
        ee[144] !== eG ||
        ee[145] !== er
          ? ((H =
              e2 || ta || null == tx
                ? null
                : (0, r.jsx)(
                    f.t,
                    {
                      name: "PageVersionComparison",
                      fallback: (e) =>
                        (0, r.jsx)("div", {
                          className: "pt-[var(--page-header-clearance,0px)]",
                          children: (0, r.jsx)(eD, {
                            pageId: ea,
                            realtimeSession: en,
                            visible: !1 !== er && !tp,
                            errorUiType: o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_RENDER_ERROR,
                            error: e.error,
                            onRetry: () => e.resetError(),
                          }),
                        }),
                      children: (0, r.jsx)(A.M, {
                        pageId: ea,
                        comparison: tx,
                        baselineDate:
                          null == eZ
                            ? eZ
                            : eG?.find((e) => {
                                let { checkpoint_id: t } = e
                                return t === eZ
                              })?.created_at,
                        selectedDate: eT?.created_at ?? null,
                        showChanges: eL && null != tm,
                        activeChangeId: null == td ? null : (tc?.changes[td]?.id ?? null),
                      }),
                    },
                    eP,
                  )),
            (ee[131] = td),
            (ee[132] = eZ),
            (ee[133] = ta),
            (ee[134] = tc),
            (ee[135] = tp),
            (ee[136] = tx),
            (ee[137] = tm),
            (ee[138] = ea),
            (ee[139] = en),
            (ee[140] = eP),
            (ee[141] = eT?.created_at),
            (ee[142] = eL),
            (ee[143] = e2),
            (ee[144] = eG),
            (ee[145] = er),
            (ee[146] = H))
          : (H = ee[146]),
        ee[147] !== tp || ee[148] !== tN || ee[149] !== tE || ee[150] !== H
          ? ((G = (0, r.jsx)("div", { className: tN, "aria-hidden": tE, inert: tp, children: H })),
            (ee[147] = tp),
            (ee[148] = tN),
            (ee[149] = tE),
            (ee[150] = H),
            (ee[151] = G))
          : (G = ee[151]),
        ee[152] !== tp || ee[153] !== tv
          ? ((J = tv
              ? (0, r.jsx)("div", {
                  className: "absolute inset-0 flex flex-col pt-[var(--page-header-clearance,0px)]",
                  children: (0, r.jsx)(I.f, { comparison: tp }),
                })
              : null),
            (ee[152] = tp),
            (ee[153] = tv),
            (ee[154] = J))
          : (J = ee[154]),
        ee[155] !== tv || ee[156] !== U || ee[157] !== G || ee[158] !== J
          ? ((W = (0, r.jsxs)("div", { className: U, "aria-busy": tv, children: [G, J] })),
            (ee[155] = tv),
            (ee[156] = U),
            (ee[157] = G),
            (ee[158] = J),
            (ee[159] = W))
          : (W = ee[159]),
        ee[160] !== ty || ee[161] !== O || ee[162] !== B || ee[163] !== W
          ? ((Z = (0, r.jsxs)("section", {
              className: "flex min-h-0 min-w-0 flex-1 flex-col",
              "aria-label": O,
              "data-page-version-history": !0,
              onKeyDown: ty,
              children: [B, W],
            })),
            (ee[160] = ty),
            (ee[161] = O),
            (ee[162] = B),
            (ee[163] = W),
            (ee[164] = Z))
          : (Z = ee[164]),
        ee[165] !== ec || ee[166] !== eu || ee[167] !== ea || ee[168] !== ed || ee[169] !== tM
          ? ((Q =
              null == ed
                ? (0, r.jsx)(b.D, {
                    open: ec,
                    pageId: ea,
                    view: "versions",
                    canViewEdits: !1,
                    canViewHistory: !1,
                    onClose: eu,
                    versions: tM,
                  })
                : ed(tM)),
            (ee[165] = ec),
            (ee[166] = eu),
            (ee[167] = ea),
            (ee[168] = ed),
            (ee[169] = tM),
            (ee[170] = Q))
          : (Q = ee[170]),
        ee[171] !== Z || ee[172] !== Q
          ? ((X = (0, r.jsxs)("div", {
              className: "@container/page-activity relative flex min-h-0 flex-1",
              children: [Z, Q],
            })),
            (ee[171] = Z),
            (ee[172] = Q),
            (ee[173] = X))
          : (X = ee[173]),
        X
      )
    }
    function eS(e) {
      return null != e
    }
    function eM(e) {
      return e.actor_displays?.map(eC) ?? []
    }
    function eC(e) {
      return [e.account_user_id, e.display_name]
    }
    function eA(e, t) {
      return t.through_sequence - e.through_sequence
    }
    function eI(e) {
      return e.items
    }
    function eN(e) {
      return e.next_cursor ?? void 0
    }
    function eE(e) {
      let t,
        n,
        o,
        a,
        i,
        l = (0, s.c)(11),
        { pageId: c, realtimeSession: d, visible: u, onClose: m } = e
      return (
        l[0] !== c || l[1] !== d || l[2] !== u
          ? ((t = (0, r.jsx)(y.It, {
              pageId: c,
              session: d,
              visible: u,
              operation: "pages.version.history",
              kind: "access",
              recoveryUi: "notice",
            })),
            (l[0] = c),
            (l[1] = d),
            (l[2] = u),
            (l[3] = t))
          : (t = l[3]),
        l[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(p.A, {
              id: "codex.page.versions.sessionUnavailable",
              defaultMessage: "Version history is no longer available. Your account or Page access may have changed",
            })),
            (l[4] = n))
          : (n = l[4]),
        l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(p.A, { id: "codex.space.page.activity.close", defaultMessage: "Close page activity" })),
            (l[5] = o))
          : (o = l[5]),
        l[6] !== m
          ? ((a = (0, r.jsx)(g.$, { autoFocus: !0, color: "secondary", size: "compact", onClick: m, children: o })),
            (l[6] = m),
            (l[7] = a))
          : (a = l[7]),
        l[8] !== t || l[9] !== a
          ? ((i = (0, r.jsxs)("div", {
              className:
                "mt-[var(--page-header-clearance,0px)] flex items-center justify-between gap-3 p-panel text-sm text-secondary select-none",
              role: "alert",
              children: [t, n, a],
            })),
            (l[8] = t),
            (l[9] = a),
            (l[10] = i))
          : (i = l[10]),
        i
      )
    }
    function eD(e) {
      let t,
        n,
        o,
        a,
        i,
        l,
        c,
        d = (0, s.c)(22),
        { pageId: u, realtimeSession: m, visible: h, kind: f, error: x, errorUiType: v, onRetry: b } = e,
        j = void 0 === f ? "preview" : f,
        _ = "pages.version.load"
      return (
        "history" === j && (_ = "pages.version.history"),
        "comparison" === j && (_ = "pages.version.compare"),
        d[0] !== x || d[1] !== v || d[2] !== _ || d[3] !== u || d[4] !== m || d[5] !== h
          ? ((t = (0, r.jsx)(y.It, {
              pageId: u,
              session: m,
              visible: h,
              operation: _,
              error: x,
              errorUiType: v,
              kind: "load",
              recoveryUi: "notice",
            })),
            (d[0] = x),
            (d[1] = v),
            (d[2] = _),
            (d[3] = u),
            (d[4] = m),
            (d[5] = h),
            (d[6] = t))
          : (t = d[6]),
        d[7] !== j
          ? ((n =
              "history" === j
                ? (0, r.jsx)(p.A, {
                    id: "codex.page.versions.historyError",
                    defaultMessage: "Could not load version history",
                  })
                : null),
            (d[7] = j),
            (d[8] = n))
          : (n = d[8]),
        d[9] !== j
          ? ((o =
              "comparison" === j
                ? (0, r.jsx)(p.A, {
                    id: "codex.page.versions.comparisonError",
                    defaultMessage: "Could not compare these versions",
                  })
                : null),
            (d[9] = j),
            (d[10] = o))
          : (o = d[10]),
        d[11] !== j
          ? ((a =
              "preview" === j
                ? (0, r.jsx)(p.A, {
                    id: "codex.page.versions.previewError",
                    defaultMessage: "Could not load this version",
                  })
                : null),
            (d[11] = j),
            (d[12] = a))
          : (a = d[12]),
        d[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(p.A, { id: "codex.page.versions.retry", defaultMessage: "Try again" })), (d[13] = i))
          : (i = d[13]),
        d[14] !== b
          ? ((l = (0, r.jsx)(g.$, { color: "secondary", size: "compact", onClick: b, children: i })),
            (d[14] = b),
            (d[15] = l))
          : (l = d[15]),
        d[16] !== t || d[17] !== n || d[18] !== o || d[19] !== a || d[20] !== l
          ? ((c = (0, r.jsxs)("div", {
              className: "flex items-center justify-between gap-3 p-panel text-sm text-secondary",
              role: "alert",
              children: [t, n, o, a, l],
            })),
            (d[16] = t),
            (d[17] = n),
            (d[18] = o),
            (d[19] = a),
            (d[20] = l),
            (d[21] = c))
          : (c = d[21]),
        c
      )
    }
  },
  TYpa(e, t, n) {
    n.d(t, { t: () => u })
    var r = n("ABep"),
      s = n("QosV"),
      o = n("on57"),
      a = n("Qgfj"),
      i = n("oyxz"),
      l = n("KIKs"),
      c = n("zd8w")
    function d(e) {
      let t,
        n,
        o,
        a,
        i = (0, s.c)(15),
        { animate: l, fromIndex: d, toIndex: u, fromControl: p, toControl: m, activeEndpoint: h } = e,
        g = (0, c.useRef)(null),
        [f, x] = (0, c.useState)(null)
      ;(i[0] !== d || i[1] !== u
        ? ((t = () => {
            let e = g.current?.parentElement
            if (null == e) return
            let t = e.querySelector(`[data-version-history-index="${d}"]`),
              n = e.querySelector(`[data-version-history-index="${u}"]`)
            if (null == t || null == n) return
            let r = () => {
              let r = e.getBoundingClientRect(),
                s = t.getBoundingClientRect(),
                o = n.getBoundingClientRect(),
                a = e.offsetWidth > 0 ? r.width / e.offsetWidth : 1,
                i = { from: (s.top + s.height / 2 - r.top) / a, to: (o.top + o.height / 2 - r.top) / a }
              x((e) => (e?.from === i.from && e.to === i.to ? e : i))
            }
            r()
            let s = new ResizeObserver(r)
            return (s.observe(e), s.observe(t), s.observe(n), () => s.disconnect())
          }),
          (n = [d, u]),
          (i[0] = d),
          (i[1] = u),
          (i[2] = t),
          (i[3] = n))
        : ((t = i[2]), (n = i[3])),
        (0, c.useLayoutEffect)(t, n))
      let v = `translateY(${f?.from ?? 0}px)`,
        y = `translateY(${f?.to ?? 0}px)`,
        b = d === u
      return (
        i[4] !== h || i[5] !== p || i[6] !== v || i[7] !== f || i[8] !== b || i[9] !== m || i[10] !== y
          ? ((o =
              null != f
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        "aria-hidden": !0,
                        className:
                          "absolute top-0 left-1/2 h-px w-px origin-top -translate-x-1/2 bg-text-secondary opacity-50 transition-transform duration-basic ease-enter-snappy group-data-[animate=false]/timeline:transition-none motion-reduce:transition-none",
                        style: { transform: `translateY(${f.from}px) scaleY(${f.to - f.from})` },
                      }),
                      (0, r.jsx)("div", {
                        className: `absolute top-0 z-10 flex w-full justify-center transition-transform duration-basic ease-enter-snappy group-data-[animate=false]/timeline:transition-none motion-reduce:transition-none ${b && "from" !== h ? "invisible" : ""}`,
                        style: { transform: v },
                        children: (0, r.jsx)("div", { className: "pointer-events-auto -translate-y-1/2", children: p }),
                      }),
                      (0, r.jsx)("div", {
                        className: `absolute top-0 z-10 flex w-full justify-center transition-transform duration-basic ease-enter-snappy group-data-[animate=false]/timeline:transition-none motion-reduce:transition-none ${b && "from" === h ? "invisible" : ""}`,
                        style: { transform: y },
                        children: (0, r.jsx)("div", { className: "pointer-events-auto -translate-y-1/2", children: m }),
                      }),
                    ],
                  })
                : null),
            (i[4] = h),
            (i[5] = p),
            (i[6] = v),
            (i[7] = f),
            (i[8] = b),
            (i[9] = m),
            (i[10] = y),
            (i[11] = o))
          : (o = i[11]),
        i[12] !== l || i[13] !== o
          ? ((a = (0, r.jsx)("div", {
              ref: g,
              className: "group/timeline pointer-events-none absolute inset-y-0 end-0 w-6",
              "data-animate": l,
              children: o,
            })),
            (i[12] = l),
            (i[13] = o),
            (i[14] = a))
          : (a = i[14]),
        a
      )
    }
    function u(e) {
      let t,
        n,
        c = (0, s.c)(31),
        { items: u, getDate: f, getKey: x, renderItem: v, label: y, current: b, comparison: j, continuation: _ } = e,
        k = (0, l.wv)()
      if (
        c[0] !== j ||
        c[1] !== _ ||
        c[2] !== b ||
        c[3] !== f ||
        c[4] !== x ||
        c[5] !== u ||
        c[6] !== y ||
        c[7] !== k ||
        c[8] !== v
      ) {
        n = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            s,
            l,
            w,
            S,
            M,
            C = new Date(k)
          if ((C.setDate(C.getDate() - 1), c[11] !== f || c[12] !== u)) {
            for (let t of ((e = new Map()), u)) {
              let n = new Date(f(t)),
                r = n.toDateString(),
                s = e.get(r)
              null == s ? e.set(r, { date: n, items: [t] }) : s.items.push(t)
            }
            ;((c[11] = f), (c[12] = u), (c[13] = e))
          } else e = c[13]
          c[14] !== e ? ((s = Array.from(e)), (c[14] = e), (c[15] = s)) : (s = c[15])
          let A = s,
            I = null != b,
            N = null != j
          c[16] !== x || c[17] !== A || c[18] !== N || c[19] !== I
            ? ((l = N
                ? new Map(
                    [
                      ...(I ? [null] : []),
                      ...A.flatMap((e) => {
                        let [, t] = e
                        return t.items.map(x)
                      }),
                    ].map(p),
                  )
                : void 0),
              (c[16] = x),
              (c[17] = A),
              (c[18] = N),
              (c[19] = I),
              (c[20] = l))
            : (l = c[20])
          let E = l,
            D = j?.renderNodeControl
          c[21] !== x || c[22] !== I || c[23] !== u || c[24] !== D
            ? ((w = null == D ? void 0 : new Map([[null, I ? D(null) : void 0], ...u.map((e) => [x(e), D(e)])])),
              (c[21] = x),
              (c[22] = I),
              (c[23] = u),
              (c[24] = D),
              (c[25] = w))
            : (w = c[25])
          let L = w,
            $ = j?.showChanges
              ? { fromIndex: void 0 === j.fromKey ? -1 : (E?.get(j.fromKey) ?? -1), toIndex: E?.get(j.toKey) ?? -1 }
              : void 0,
            T = null == j && "gap-3"
          ;(c[26] !== T
            ? ((S = (0, o.A)("group/version-history flex flex-col select-none", T)), (c[26] = T), (c[27] = S))
            : (S = c[27]),
            c[28] !== j || c[29] !== _
              ? ((M =
                  null != _
                    ? (0, r.jsxs)("li", {
                        className: "flex min-w-0 flex-row-reverse gap-1",
                        children: [
                          null != j ? (0, r.jsx)(g, {}) : null,
                          (0, r.jsx)("div", { className: "min-w-0 flex-1 pt-2", children: _ }),
                        ],
                      })
                    : null),
                (c[28] = j),
                (c[29] = _),
                (c[30] = M))
              : (M = c[30]))
          let P = (0, r.jsxs)("ol", {
            "aria-label": y,
            className: S,
            "data-show-rail": j?.showChanges,
            children: [
              null == b
                ? null
                : (0, r.jsx)(h, {
                    reserveGutter: null != j,
                    index: 0,
                    control: $?.fromIndex === 0 || $?.toIndex === 0 ? void 0 : L?.get(null),
                    children: b,
                  }),
              A.map((e, t) => {
                let [n, s] = e,
                  o = (0, r.jsx)(a.XU, {
                    value: s.date,
                    month: "long",
                    day: "numeric",
                    year: s.date.getFullYear() === k.getFullYear() ? void 0 : "numeric",
                  })
                n === k.toDateString()
                  ? (o = (0, r.jsx)(i.A, { id: "codex.versionHistory.today", defaultMessage: "Today" }))
                  : n === C.toDateString() &&
                    (o = (0, r.jsx)(i.A, { id: "codex.versionHistory.yesterday", defaultMessage: "Yesterday" }))
                let l = (0, r.jsx)("h3", {
                  className: `text-sm font-medium text-secondary ${null == j ? "px-3 py-2" : "px-row-x py-1"}`,
                  children: o,
                })
                return (0, r.jsxs)(
                  "li",
                  {
                    children: [
                      null == j
                        ? l
                        : (0, r.jsxs)("div", {
                            className: "flex min-w-0 flex-row-reverse gap-1",
                            children: [
                              (0, r.jsx)(g, {}),
                              (0, r.jsx)("div", {
                                className: `min-w-0 flex-1 ${I || t > 0 ? "pt-2" : ""}`,
                                children: l,
                              }),
                            ],
                          }),
                      (0, r.jsx)("ol", {
                        children: s.items.map((e) => {
                          let t = E?.get(x(e)) ?? -1
                          return (0, r.jsx)(
                            h,
                            {
                              reserveGutter: null != j,
                              index: t,
                              itemKey: x(e),
                              control: $?.fromIndex === t || $?.toIndex === t ? void 0 : L?.get(x(e)),
                              children: (0, r.jsx)(m, { item: e, renderItem: v }),
                            },
                            x(e),
                          )
                        }),
                      }),
                    ],
                  },
                  n,
                )
              }),
              M,
            ],
          })
          if (null == j) {
            n = P
            break e
          }
          t = (0, r.jsxs)("div", {
            className: "relative -mx-[var(--padding-row-x)]",
            children: [
              P,
              null != $ && $.fromIndex >= 0 && $.toIndex >= 0
                ? (0, r.jsx)(d, {
                    animate: j.animate ?? !0,
                    fromIndex: $.fromIndex,
                    toIndex: $.toIndex,
                    activeEndpoint: j.activeEndpoint,
                    fromControl: j.fromControl?.($.fromIndex),
                    toControl: j.toControl?.($.toIndex),
                  })
                : null,
            ],
          })
        }
        ;((c[0] = j),
          (c[1] = _),
          (c[2] = b),
          (c[3] = f),
          (c[4] = x),
          (c[5] = u),
          (c[6] = y),
          (c[7] = k),
          (c[8] = v),
          (c[9] = t),
          (c[10] = n))
      } else ((t = c[9]), (n = c[10]))
      return n !== Symbol.for("react.early_return_sentinel") ? n : t
    }
    function p(e, t) {
      return [e, t]
    }
    function m(e) {
      let t,
        n,
        o = (0, s.c)(5),
        { item: a, renderItem: i } = e
      return (
        o[0] !== a || o[1] !== i ? ((t = i(a)), (o[0] = a), (o[1] = i), (o[2] = t)) : (t = o[2]),
        o[3] !== t ? ((n = (0, r.jsx)(r.Fragment, { children: t })), (o[3] = t), (o[4] = n)) : (n = o[4]),
        n
      )
    }
    function h(e) {
      let t,
        n,
        o,
        a = (0, s.c)(11),
        { reserveGutter: i, index: l, itemKey: c, children: d, control: u } = e
      if (!i) {
        let e
        return (a[0] !== d ? ((e = (0, r.jsx)("li", { children: d })), (a[0] = d), (a[1] = e)) : (e = a[1]), e)
      }
      return (
        a[2] !== u ? ((t = (0, r.jsx)(g, { control: u })), (a[2] = u), (a[3] = t)) : (t = a[3]),
        a[4] !== d
          ? ((n = (0, r.jsx)("div", { className: "min-w-0 flex-1", children: d })), (a[4] = d), (a[5] = n))
          : (n = a[5]),
        a[6] !== l || a[7] !== c || a[8] !== t || a[9] !== n
          ? ((o = (0, r.jsx)("li", {
              children: (0, r.jsxs)("div", {
                className: "flex min-w-0 flex-row-reverse gap-1",
                "data-version-history-index": l,
                "data-version-history-key": c,
                children: [t, n],
              }),
            })),
            (a[6] = l),
            (a[7] = c),
            (a[8] = t),
            (a[9] = n),
            (a[10] = o))
          : (o = a[10]),
        o
      )
    }
    function g(e) {
      let t,
        n,
        o = (0, s.c)(4),
        { control: a } = e
      return (
        o[0] !== a
          ? ((t =
              null != a
                ? (0, r.jsx)("span", {
                    className: "absolute inset-0 z-10 flex items-center justify-center",
                    children: a,
                  })
                : null),
            (o[0] = a),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== t
          ? ((n = (0, r.jsx)("span", {
              className:
                "relative flex w-6 shrink-0 items-center justify-center group-data-[show-rail=false]/version-history:hidden",
              children: t,
            })),
            (o[2] = t),
            (o[3] = n))
          : (n = o[3]),
        n
      )
    }
  },
  yLY7(e, t, n) {
    let r = (0, n("ESTr").a)({
      name: "chevron-up-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.475098, y: 4.946289, width: 9.049683, height: 4.911621 },
        visualBounds: { x: 3.475098, y: 4.946289, width: 9.049683, height: 4.911621 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.475098, y: 4.946289, width: 9.049683, height: 4.911621 },
        center: { x: 7.99994, y: 7.4021 },
        insets: { top: 4.946289, right: 3.475219, bottom: 6.14209, left: 3.475098 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.99994, y: 7.4021 }, foreground: { x: 7.99994, y: 7.4021 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.6289 9.70417C11.8339 9.9092 12.166 9.9092 12.3711 9.70417C12.5761 9.49915 12.5761 9.16701 12.3711 8.96199L8.60641 5.19734C8.27129 4.86261 7.72863 4.86261 7.39352 5.19734L3.62887 8.96199C3.42384 9.16701 3.42384 9.49915 3.62887 9.70417C3.83389 9.9092 4.16603 9.9092 4.37105 9.70417L7.99996 6.07527L11.6289 9.70417Z" fill="currentColor"/>',
    })
    n.d(t, {}, { V: r })
  },
}
//# sourceMappingURL=59817.d7c56b9e00.js.map
