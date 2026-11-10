export const __rspack_esm_ids = [59817]
export const __webpack_modules__ = {
  I2MU(e, t, n) {
    var r = n("ToFj"),
      i = n("HFSu")
    n.d(
      t,
      {},
      {
        y: async function ({ pageId: e, checkpointId: t, streamKind: n, signal: o }) {
          for (let s = 0; s < 2; s += 1) {
            o.throwIfAborted()
            let a = await i.CodexRequest.safeGet("/pages/{page_id}/versions/{checkpoint_id}/checkpoint-bootstrap", {
              parameters: {
                path: { page_id: e, checkpoint_id: t },
                query: { stream_kind: n, prefer_lite_checkpoint: !0 },
              },
              signal: o,
            })
            if (a.page_id !== e || a.checkpoint?.checkpoint_id !== t)
              throw Error("The requested Page checkpoint is unavailable")
            let l = await (0, r.readPageCheckpointBootstrap)(a, o, s > 0, n)
            o.throwIfAborted()
            let c = null == l ? void 0 : (0, r.getVerifiedPageCheckpoint)(l)
            if (null != c) return c.update
            if (Date.parse(a.checkpoint.expires_at) > Date.now()) break
          }
          throw Error("The Page checkpoint could not be verified")
        },
      },
    )
  },
  LoQl(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      o = n("slpy"),
      s = n("i5ac"),
      a = n.n(s),
      l = n("zTeN"),
      c = n("zd8w"),
      d = n("oyxz"),
      u = n("Yn57"),
      h = n("ygO2"),
      p = n("RbH1"),
      g = n("rTPf"),
      m = n("uAks")
    function f(e) {
      return JSON.stringify([e.actor_type, e.account_user_id, "agent" === e.actor_type && "o" === e.agent_kind])
    }
    function v(e) {
      let t,
        n,
        o,
        s,
        a = (0, i.c)(26),
        { actor: c, names: h, compact: f } = e,
        v = (0, l._U)(g.ik, c.account_user_id ?? "")
      if (
        a[0] !== c.account_user_id ||
        a[1] !== c.actor_type ||
        a[2] !== c.agent_kind ||
        a[3] !== v ||
        a[4] !== f ||
        a[5] !== h
      ) {
        n = Symbol.for("react.early_return_sentinel")
        e: {
          let e = null == c.account_user_id ? null : h.get(c.account_user_id)
          if (((t = e?.trim() && e !== c.account_user_id ? e : v), "agent" === c.actor_type && "o" === c.agent_kind)) {
            let e,
              i,
              o = t?.trim().split(/\s+/u)[0]
            a[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)("img", {
                  className: "block size-4 shrink-0 object-contain",
                  alt: "",
                  "aria-hidden": !0,
                  draggable: !1,
                  src: u,
                })),
                (a[8] = e))
              : (e = a[8])
            let s = f
              ? (0, r.jsx)(m._, { ownerName: t ?? void 0 })
              : (0, r.jsx)(d.A, {
                  id: "codex.page.versions.editedByDot.productName",
                  defaultMessage: "Edited by {hasOwner, select, true {{name}’s {dot}} other {a {dot}}}",
                  description:
                    "A dot, an always-on agent, edited this Page during the checkpoint interval. Use the responsible person's first name, never the agent's private nickname. dot is a common noun for the agent and must remain untranslated.",
                  values: { hasOwner: !!o, name: o, dot: "dot" },
                })
            ;(a[9] !== s
              ? ((i = (0, r.jsxs)("span", {
                  className: "inline-flex max-w-full items-center gap-1",
                  children: [e, (0, r.jsx)("span", { className: "truncate", children: s })],
                })),
                (a[9] = s),
                (a[10] = i))
              : (i = a[10]),
              (n = i))
            break e
          }
        }
        ;((a[0] = c.account_user_id),
          (a[1] = c.actor_type),
          (a[2] = c.agent_kind),
          (a[3] = v),
          (a[4] = f),
          (a[5] = h),
          (a[6] = t),
          (a[7] = n))
      } else ((t = a[6]), (n = a[7]))
      if (n !== Symbol.for("react.early_return_sentinel")) return n
      if (f) {
        let e, n
        if ("agent" === c.actor_type && null != t) {
          let e
          return (
            a[11] !== t
              ? ((e = (0, r.jsx)(d.A, { ...p.P.authorizedAgent, values: { name: t } })), (a[11] = t), (a[12] = e))
              : (e = a[12]),
            e
          )
        }
        return (
          a[13] !== c.actor_type || a[14] !== t
            ? ((e =
                "user" === c.actor_type && null != t
                  ? t
                  : (0, r.jsx)(d.A, { ...p.P.actor, values: { type: c.actor_type } })),
              (a[13] = c.actor_type),
              (a[14] = t),
              (a[15] = e))
            : (e = a[15]),
          a[16] !== e ? ((n = (0, r.jsx)(r.Fragment, { children: e })), (a[16] = e), (a[17] = n)) : (n = a[17]),
          n
        )
      }
      if ("user" === c.actor_type && null != t) {
        let e
        ;(a[18] !== t
          ? ((e = (0, r.jsx)(d.A, {
              id: "codex.page.versions.editedByPerson",
              defaultMessage: "Edited by {name}",
              description: "A human who edited this Page during the checkpoint interval",
              values: { name: t },
            })),
            (a[18] = t),
            (a[19] = e))
          : (e = a[19]),
          (o = e))
      } else if ("agent" === c.actor_type && null != t) {
        let e
        ;(a[20] !== t
          ? ((e = (0, r.jsx)(d.A, {
              id: "codex.page.versions.editedByAuthorizedAgent",
              defaultMessage: "Edited by {name}’s ChatGPT",
              description:
                "ChatGPT edited this Page during the checkpoint interval; the named person authorized the agent and is not necessarily a direct editor",
              values: { name: t },
            })),
            (a[20] = t),
            (a[21] = e))
          : (e = a[21]),
          (o = e))
      } else {
        let e
        ;(a[22] !== c.actor_type
          ? ((e = (0, r.jsx)(d.A, {
              id: "codex.page.versions.editedByActor",
              defaultMessage:
                "{type, select, agent {Edited by ChatGPT} system {Edited by System} user {Edited by a collaborator} other {Edited by another contributor}}",
              description:
                "Editor of a Page checkpoint interval when no human name is available; system actors are never labeled with an associated account owner's name",
              values: { type: c.actor_type },
            })),
            (a[22] = c.actor_type),
            (a[23] = e))
          : (e = a[23]),
          (o = e))
      }
      return (a[24] !== o ? ((s = (0, r.jsx)(r.Fragment, { children: o })), (a[24] = o), (a[25] = s)) : (s = a[25]), s)
    }
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            s,
            l,
            u,
            p = (0, i.c)(41),
            { summary: g, names: m, current: x, compact: y } = e,
            b = void 0 !== x && x,
            j = void 0 !== y && y,
            [w, _] = (0, c.useState)(!1),
            k = g?.editor_summary_version === 1
          if (p[0] !== j || p[1] !== w || p[2] !== k || p[3] !== m || p[4] !== g) {
            if (((t = k ? a()(g.actor_summaries, f) : []), k))
              if (0 === t.length) {
                let e
                ;(p[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)("span", {
                      children: (0, r.jsx)(d.A, {
                        id: "codex.page.versions.editorsEmpty",
                        defaultMessage: "No recorded editors",
                        description: "Shown when a complete Page checkpoint interval summary contains no editors",
                      }),
                    })),
                    (p[8] = e))
                  : (e = p[8]),
                  (n = e))
              } else {
                let e
                ;(p[9] !== m
                  ? ((e = (e) =>
                      (0, r.jsx)(
                        "span",
                        { children: (0, r.jsx)(v, { actor: e, names: m, compact: !1 }) },
                        JSON.stringify([
                          e.actor_type,
                          e.account_user_id,
                          "agent" === e.actor_type && "o" === e.agent_kind,
                        ]),
                      )),
                    (p[9] = m),
                    (p[10] = e))
                  : (e = p[10]),
                  (n = (j || w ? t : t.slice(0, 3)).map(e)))
              }
            else {
              let e
              ;(p[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)("span", {
                    children: (0, r.jsx)(d.A, {
                      id: "codex.page.versions.editorsUnknown",
                      defaultMessage: "Editor details unavailable",
                      description:
                        "Shown for older Page checkpoints or current history that does not have an editor summary; does not imply that nobody edited it",
                    }),
                  })),
                  (p[7] = e))
                : (e = p[7]),
                (n = e))
            }
            ;((p[0] = j), (p[1] = w), (p[2] = k), (p[3] = m), (p[4] = g), (p[5] = t), (p[6] = n))
          } else ((t = p[5]), (n = p[6]))
          p[11] !== b
            ? ((s = b
                ? (0, r.jsx)("span", {
                    children: (0, r.jsx)(d.A, {
                      id: "codex.page.versions.currentEditors",
                      defaultMessage: "Recorded editors since last saved checkpoint",
                      description:
                        "Heading for the server-recorded editors of the current Page since its last saved checkpoint; local unsaved changes may not yet be included",
                    }),
                  })
                : null),
              (p[11] = b),
              (p[12] = s))
            : (s = p[12])
          let S = s
          if (j) {
            let e, i, s, a, l, c, u
            p[13] !== n || p[14] !== S
              ? ((e = (0, r.jsxs)("span", { className: "flex flex-col items-start gap-1", children: [S, n] })),
                (p[13] = n),
                (p[14] = S),
                (p[15] = e))
              : (e = p[15])
            let h = e
            if (0 === t.length) {
              let e
              return (
                p[16] !== h
                  ? ((e = (0, r.jsx)("span", { className: "sr-only", children: h })), (p[16] = h), (p[17] = e))
                  : (e = p[17]),
                e
              )
            }
            return (
              p[18] !== t[0] || p[19] !== m
                ? ((i = null != t[0] ? (0, r.jsx)(v, { actor: t[0], names: m, compact: !0 }) : null),
                  (p[18] = t[0]),
                  (p[19] = m),
                  (p[20] = i))
                : (i = p[20]),
              p[21] !== i
                ? ((s = (0, r.jsx)("span", { "aria-hidden": !0, className: "truncate", children: i })),
                  (p[21] = i),
                  (p[22] = s))
                : (s = p[22]),
              p[23] !== t.length
                ? ((a =
                    t.length > 1
                      ? (0, r.jsx)("span", {
                          "aria-hidden": !0,
                          className: "shrink-0",
                          children: (0, r.jsx)(d.A, {
                            id: "codex.page.versions.additionalEditorsCompact",
                            defaultMessage: "+{count}",
                            description:
                              "Compact count of additional distinct recorded Page editors after the first displayed contributor; the full contributor list is available in the tooltip and accessible description",
                            values: { count: t.length - 1 },
                          }),
                        })
                      : null),
                  (p[23] = t.length),
                  (p[24] = a))
                : (a = p[24]),
              p[25] !== h
                ? ((l = (0, r.jsx)("span", { className: "sr-only", children: h })), (p[25] = h), (p[26] = l))
                : (l = p[26]),
              p[27] !== s || p[28] !== a || p[29] !== l
                ? ((c = (0, r.jsxs)("span", {
                    className:
                      "pointer-events-auto inline-flex max-w-32 min-w-0 items-center gap-1 text-xs text-codex-description",
                    children: [s, a, l],
                  })),
                  (p[27] = s),
                  (p[28] = a),
                  (p[29] = l),
                  (p[30] = c))
                : (c = p[30]),
              p[31] !== h || p[32] !== c
                ? ((u = (0, r.jsx)(o.m, { content: h, children: c })), (p[31] = h), (p[32] = c), (p[33] = u))
                : (u = p[33]),
              u
            )
          }
          return (
            p[34] !== t.length || p[35] !== w
              ? ((l =
                  t.length > 3
                    ? (0, r.jsx)(h.$, {
                        className: "pointer-events-auto",
                        size: "compact",
                        color: "ghost",
                        onClick: () => _(!w),
                        children: w
                          ? (0, r.jsx)(d.A, {
                              id: "codex.page.versions.fewerEditors",
                              defaultMessage: "Show fewer editors",
                              description: "Collapse the list of editors in a Page checkpoint interval",
                            })
                          : (0, r.jsx)(d.A, {
                              id: "codex.page.versions.moreEditors",
                              defaultMessage: "Show {count} more {count, plural, one {editor} other {editors}}",
                              description: "Expand the remaining distinct editors of a Page checkpoint interval",
                              values: { count: t.length - 3 },
                            }),
                      })
                    : null),
                (p[34] = t.length),
                (p[35] = w),
                (p[36] = l))
              : (l = p[36]),
            p[37] !== n || p[38] !== S || p[39] !== l
              ? ((u = (0, r.jsxs)("span", {
                  className: "flex flex-col items-start gap-1 text-sm text-codex-description",
                  children: [S, n, l],
                })),
                (p[37] = n),
                (p[38] = S),
                (p[39] = l),
                (p[40] = u))
              : (u = p[40]),
            u
          )
        },
      },
    )
  },
  Emas(e, t, n) {
    n.d(t, { PageVersionHistory: () => ew })
    var r = n("ABep"),
      i = n("QosV"),
      o = n("wTzC"),
      s = n("uris"),
      a = n("T0Rc"),
      l = n("on57"),
      c = n("zTeN"),
      d = n("zd8w"),
      u = n("Wf1j"),
      h = n("oyxz"),
      p = n("eKNk"),
      g = n("SPnB"),
      m = n("ygO2"),
      f = n("uXTt"),
      v = n("iIsU"),
      x = n("mNPx"),
      y = n("NraH"),
      b = n("tWTn"),
      j = n("JGY2"),
      w = n("pyoT"),
      _ = n("yGJW"),
      k = n("OWtl"),
      S = n("rvFo"),
      C = n("HFSu"),
      M = n("eShZ"),
      A = n("NDpU"),
      I = n("HRnU"),
      P = n("zkPp"),
      N = n("X3K1")
    function E() {
      let e,
        t,
        n = (0, i.c)(2)
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("span", {
              className: "sr-only",
              children: (0, r.jsx)(h.A, {
                id: "codex.page.versions.loadingHistory",
                defaultMessage: "Loading history…",
                description: "Status while the list of saved Page versions loads",
              }),
            })),
            (n[0] = e))
          : (e = n[0]),
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsxs)("div", {
              className: "-mx-[var(--padding-row-x)]",
              role: "status",
              children: [e, (0, r.jsx)("div", { "aria-hidden": !0, inert: !0, children: [1, 2, 3, 4, 5].map(D) })],
            })),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function D(e) {
      return (0, r.jsx)(
        P.fy,
        {
          compactSecondLine: !0,
          density: "row",
          hasInteractiveContent: !0,
          buttonProps: { disabled: !0 },
          isSelected: !1,
          title: (0, r.jsx)(N.X, { as: "span", className: "block w-16", size: "sm" }),
          rightText: (0, r.jsx)(N.X, { as: "span", className: "block w-24", size: "sm" }),
        },
        e,
      )
    }
    var T = n("slpy"),
      L = n("wD9O"),
      $ = n("GO7r"),
      R = n("v0Gf"),
      q = n("RNul"),
      z = n("UxN3"),
      O = n("AclY"),
      F = n("dN0a"),
      V = n("pZQ9"),
      K = n("TYpa"),
      H = n("LoQl")
    function B(e) {
      let t,
        n,
        o,
        s,
        a,
        c,
        u,
        p,
        g,
        f,
        v,
        x,
        y,
        b,
        j = (0, i.c)(49),
        {
          endpoint: w,
          index: _,
          minIndex: k,
          maxIndex: S,
          timeline: C,
          label: M,
          pressed: A,
          previewLabel: I,
          previewMethod: P,
          onChoose: N,
          onPreview: E,
          onCommit: D,
          onCancel: L,
        } = e,
        $ = (0, d.useRef)(null),
        R = (0, d.useRef)(!1)
      ;(j[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => $.current?.()), (n = []), (j[0] = t), (j[1] = n))
        : ((t = j[0]), (n = j[1])),
        (0, d.useEffect)(t, n),
        j[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(h.A, {
              id: "codex.page.versions.timelineHandleHint",
              defaultMessage: "Click or drag to change version",
              description:
                "Tooltip for a Page version comparison handle; clicking lets the user choose a version from the list, and dragging moves the comparison endpoint",
            })),
            (j[2] = o))
          : (o = j[2]))
      let q = A ? "open" : void 0
      ;(j[3] !== N
        ? ((s = (e) => {
            ;((R.current && 0 !== e.detail) || N(e.currentTarget, e.detail > 0), (R.current = !1))
          }),
          (j[3] = N),
          (j[4] = s))
        : (s = j[4]),
        j[5] !== L || j[6] !== P
          ? ((a = () => {
              "keyboard" === P && L(!1)
            }),
            (j[5] = L),
            (j[6] = P),
            (j[7] = a))
          : (a = j[7]),
        j[8] !== _ ||
        j[9] !== S ||
        j[10] !== k ||
        j[11] !== L ||
        j[12] !== D ||
        j[13] !== E ||
        j[14] !== P ||
        j[15] !== C
          ? ((c = (e) => {
              if ("Tab" === e.key && "keyboard" === P) L(!1)
              else if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                ;(e.preventDefault(), e.stopPropagation())
                let t = C.current?.querySelectorAll("[data-version-history-index]")
                if (null == t || 0 === t.length) return
                let n = Math.max(k, Math.min(S, _ + ("ArrowUp" === e.key ? -1 : 1)))
                ;(E(n, "keyboard", e.currentTarget), t[n]?.scrollIntoView({ block: "nearest" }))
              } else
                ("Enter" === e.key || " " === e.key) &&
                  "keyboard" === P &&
                  (e.preventDefault(), e.stopPropagation(), D(_, !1))
            }),
            (j[8] = _),
            (j[9] = S),
            (j[10] = k),
            (j[11] = L),
            (j[12] = D),
            (j[13] = E),
            (j[14] = P),
            (j[15] = C),
            (j[16] = c))
          : (c = j[16]),
        j[17] !== _ || j[18] !== S || j[19] !== k || j[20] !== L || j[21] !== D || j[22] !== E || j[23] !== C
          ? ((u = (e) => {
              if (0 !== e.button || !1 === e.isPrimary || null != $.current) return
              let t = C.current,
                n = t?.closest('[role="region"]'),
                r = e.currentTarget,
                i = r.ownerDocument,
                o = i.defaultView
              if (null == t || null == n || null == o) return
              ;(r.focus({ preventScroll: !0 }), (R.current = !1))
              let s = n.getBoundingClientRect(),
                a = 0,
                l = 1,
                c = [],
                d = !1,
                u = (e) => {
                  ;((s = e),
                    (a = Number.parseFloat(o.getComputedStyle(n).scrollPaddingBottom) || 0),
                    (l = n.offsetHeight > 0 ? s.height / n.offsetHeight : 1),
                    (c = Array.from(t.querySelectorAll("[data-version-history-index]"), (e) => {
                      let t = e.getBoundingClientRect()
                      return {
                        index: Number(e.dataset.versionHistoryIndex),
                        center: t.top + t.height / 2 + n.scrollTop * l,
                      }
                    })),
                    (d = !1))
                }
              if ((u(s), 0 === c.length)) return
              let h = new AbortController(),
                p = e.pointerId,
                g = e.clientX,
                m = e.clientY,
                f = m,
                v = !1,
                x = _,
                y = !1,
                b = 0,
                j = 0,
                w = () => {
                  ;(h.abort(),
                    N.disconnect(),
                    o.cancelAnimationFrame(b),
                    ($.current = null),
                    r.hasPointerCapture?.(p) && r.releasePointerCapture(p))
                },
                M = () => {
                  ;(w(), v && L())
                },
                A = () => {
                  let e = f + n.scrollTop * l,
                    t = Math.max(
                      k,
                      Math.min(S, c.reduce((t, n) => (Math.abs(n.center - e) < Math.abs(t.center - e) ? n : t)).index),
                    )
                  ;(y && x === t) || ((y = !0), E((x = t), "pointer", r))
                },
                I = (e) => {
                  b = 0
                  let t = n.getBoundingClientRect()
                  ;(d || s.top !== t.top || s.width !== t.width || s.height !== t.height) && u(t)
                  let r = t.top + 32 * l,
                    i = t.bottom - (32 + a) * l,
                    c = 0
                  ;(f < r && (c = f - r), f > i && (c = f - i))
                  let h = Math.max(-1, Math.min(1, c / (32 * l))) * Math.min(e - (j || e - 16), 32) * 0.5,
                    p = n.scrollTop
                  ;(0 !== h && (n.scrollTop = n.scrollTop + h),
                    A(),
                    n.scrollTop !== p ? ((j = e), (b = o.requestAnimationFrame(I))) : (j = 0))
                },
                P = () => {
                  ;((d = !0), v && 0 === b && (b = o.requestAnimationFrame(I)))
                },
                N = new ResizeObserver(P)
              ;(N.observe(t),
                N.observe(n),
                o.addEventListener("resize", P, { signal: h.signal }),
                ($.current = w),
                r.setPointerCapture?.(p),
                i.addEventListener(
                  "pointermove",
                  (e) => {
                    if (e.pointerId === p) {
                      if (((f = e.clientY), !v)) {
                        if (4 > Math.hypot(e.clientX - g, f - m)) return
                        ;((v = !0), (R.current = !0))
                      }
                      ;(e.preventDefault(), 0 === b && (b = o.requestAnimationFrame(I)))
                    }
                  },
                  { capture: !0, signal: h.signal },
                ),
                n.addEventListener(
                  "scroll",
                  () => {
                    v && 0 === b && (b = o.requestAnimationFrame(I))
                  },
                  { passive: !0, signal: h.signal },
                ),
                i.addEventListener(
                  "pointerup",
                  (e) => {
                    e.pointerId === p && (v && ((f = e.clientY), u(n.getBoundingClientRect()), A()), w(), v && D(x, !0))
                  },
                  { capture: !0, signal: h.signal },
                ),
                r.addEventListener("lostpointercapture", M, { signal: h.signal }),
                i.addEventListener(
                  "pointercancel",
                  (e) => {
                    e.pointerId === p && M()
                  },
                  { signal: h.signal },
                ),
                i.addEventListener(
                  "keydown",
                  (e) => {
                    "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), w(), L())
                  },
                  { capture: !0, signal: h.signal },
                ),
                o.addEventListener("blur", M, { signal: h.signal }))
            }),
            (j[17] = _),
            (j[18] = S),
            (j[19] = k),
            (j[20] = L),
            (j[21] = D),
            (j[22] = E),
            (j[23] = C),
            (j[24] = u))
          : (u = j[24]))
      let z = "from" === w && "border border-strong"
      ;(j[25] !== z
        ? ((p = (0, l.A)(
            "relative size-4 rounded-full bg-surface-elevated-secondary shadow-sm transition-transform duration-basic ease-enter-snappy group-hover/endpoint:scale-110 group-focus-visible/endpoint:scale-110 group-data-[state=open]/endpoint:scale-110 group-active/endpoint:scale-95 motion-reduce:transition-none",
            z,
          )),
          (j[25] = z),
          (j[26] = p))
        : (p = j[26]),
        j[27] !== w
          ? ((g =
              "to" === w ? (0, r.jsx)("span", { className: "absolute inset-0 rounded-full bg-text-secondary" }) : null),
            (j[27] = w),
            (j[28] = g))
          : (g = j[28]),
        j[29] !== p || j[30] !== g
          ? ((f = (0, r.jsx)("span", { "aria-hidden": !0, className: p, children: g })),
            (j[29] = p),
            (j[30] = g),
            (j[31] = f))
          : (f = j[31]),
        j[32] !== M ||
        j[33] !== A ||
        j[34] !== f ||
        j[35] !== q ||
        j[36] !== s ||
        j[37] !== a ||
        j[38] !== c ||
        j[39] !== u
          ? ((v = (0, r.jsx)(m.$, {
              className: "group/endpoint touch-none hover:cursor-grab active:cursor-grabbing",
              color: "ghostMuted",
              size: "dragHandle",
              radius: "full",
              "data-state": q,
              "aria-label": M,
              "aria-pressed": A,
              onClick: s,
              onBlur: a,
              onKeyDown: c,
              onPointerDown: u,
              children: f,
            })),
            (j[32] = M),
            (j[33] = A),
            (j[34] = f),
            (j[35] = q),
            (j[36] = s),
            (j[37] = a),
            (j[38] = c),
            (j[39] = u),
            (j[40] = v))
          : (v = j[40]),
        j[41] !== A || j[42] !== v
          ? ((x = (0, r.jsx)(T.m, { content: o, disabled: A, side: "right", children: v })),
            (j[41] = A),
            (j[42] = v),
            (j[43] = x))
          : (x = j[43]))
      let O = "keyboard" === P ? I : null
      return (
        j[44] !== O
          ? ((y = (0, r.jsx)("span", { className: "sr-only", role: "status", "aria-atomic": "true", children: O })),
            (j[44] = O),
            (j[45] = y))
          : (y = j[45]),
        j[46] !== x || j[47] !== y
          ? ((b = (0, r.jsxs)(r.Fragment, { children: [x, y] })), (j[46] = x), (j[47] = y), (j[48] = b))
          : (b = j[48]),
        b
      )
    }
    function U(e, t) {
      let n = new Map()
      return new Map(
        e
          .map((e) => {
            let r = t.formatTime(e.created_at, { hour: "numeric", minute: "2-digit" }),
              i = JSON.stringify([t.formatDate(e.created_at, { year: "numeric", month: "2-digit", day: "2-digit" }), r])
            return (n.set(i, (n.get(i) ?? 0) + 1), { version: e, label: r, minute: i })
          })
          .map(({ version: e, label: r, minute: i }) => [
            e.checkpoint_id,
            (n.get(i) ?? 0) > 1
              ? t.formatTime(e.created_at, { hour: "numeric", minute: "2-digit", second: "2-digit" })
              : r,
          ]),
      )
    }
    function Y(e) {
      let t,
        n,
        o,
        s,
        a,
        l,
        p,
        g,
        f,
        v,
        x,
        b,
        j,
        w,
        _,
        k,
        S,
        C,
        M,
        A,
        I,
        N,
        E,
        D,
        Y,
        Q,
        X,
        ee,
        et,
        en,
        er,
        ei,
        eo,
        es,
        ea,
        el,
        ec,
        ed,
        eu,
        eh,
        ep,
        eg,
        em,
        ef,
        ev,
        ex,
        ey,
        eb,
        ej,
        ew,
        e_,
        ek = (0, i.c)(184),
        {
          pageId: eS,
          realtimeSession: eC,
          visible: eM,
          showHeader: eA,
          selectedId: eI,
          baselineId: eP,
          showChanges: eN,
          versions: eE,
          names: eD,
          currentSummary: eT,
          renderControls: eL,
          restoreAction: e$,
          children: eR,
          onLoadMore: eq,
          isLoadingMore: ez,
          isLoadMoreError: eO,
          loadMoreError: eF,
          onSelect: eV,
          onSelectEnd: eK,
          onBaselineChange: eH,
          onClose: eB,
        } = e,
        eU = void 0 === eA || eA,
        eY = void 0 !== ez && ez,
        eG = void 0 !== eO && eO,
        eJ = (0, u.A)(),
        eW = (0, d.useId)(),
        [eZ, eQ] = (0, d.useState)(null),
        [eX, e1] = (0, d.useState)(null),
        e0 = (0, d.useRef)(null),
        e2 = (0, d.useRef)(null),
        e3 = (0, d.useRef)(null),
        e4 = (0, d.useRef)(!1),
        e5 = (0, d.useRef)(null),
        [e6, e7] = (0, d.useState)(!0),
        e9 = (0, c.Ul)(F.LT),
        e8 = (0, L.dz)(),
        te = (0, d.useSyncExternalStore)(O.sD, Z, W)
      ek[0] !== e9 || ek[1] !== te || ek[2] !== e8
        ? ((t = e9 > 0 ? (0, L.Ud)(te, e8) : 0), (ek[0] = e9), (ek[1] = te), (ek[2] = e8), (ek[3] = t))
        : (t = ek[3])
      let tt = Math.max(e9, t, F.w3)
      ;(ek[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => {
            e4.current &&
              null != e3.current &&
              (e3.current.scrollTop = e3.current.scrollHeight - e3.current.clientHeight)
          }),
          (ek[4] = n))
        : (n = ek[4]),
        ek[5] !== tt ? ((o = [tt]), (ek[5] = tt), (ek[6] = o)) : (o = ek[6]),
        (0, d.useLayoutEffect)(n, o),
        ek[7] !== eJ || ek[8] !== eE ? ((s = U(eE, eJ)), (ek[7] = eJ), (ek[8] = eE), (ek[9] = s)) : (s = ek[9]))
      let tn = s,
        tr = null === eP
      if (ek[10] !== eP || ek[11] !== eE) {
        let e
        ;(ek[13] !== eP ? ((e = (e) => e.checkpoint_id === eP), (ek[13] = eP), (ek[14] = e)) : (e = ek[14]),
          (a = eE.find(e)),
          (ek[10] = eP),
          (ek[11] = eE),
          (ek[12] = a))
      } else a = ek[12]
      let ti = a
      if (ek[15] !== eI || ek[16] !== eE) {
        let e
        ;(ek[18] !== eI ? ((e = (e) => e.checkpoint_id === eI), (ek[18] = eI), (ek[19] = e)) : (e = ek[19]),
          (l = eE.find(e)),
          (ek[15] = eI),
          (ek[16] = eE),
          (ek[17] = l))
      } else l = ek[17]
      let to = l,
        ts = eN ? eP : eI,
        ta = null === ts
      ;(ek[20] !== eE.length
        ? ((p = () => {
            let e = e5.current
            if (null == e || eE.length <= e.count) return
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
          (ek[20] = eE.length),
          (ek[21] = p))
        : (p = ek[21]),
        ek[22] !== eE ? ((g = [eE]), (ek[22] = eE), (ek[23] = g)) : (g = ek[23]),
        (0, d.useLayoutEffect)(p, g),
        ek[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(h.A, {
              id: "codex.page.versions.currentCaptureDetail",
              defaultMessage:
                "Captured when history opened; may include unsaved changes and does not update with live edits",
              description:
                "Tooltip and accessible description for the current Page version captured when history was opened; it may contain local edits that have not been saved",
            })),
            (ek[24] = f))
          : (f = ek[24]))
      let tl = f
      ek[25] !== eZ || ek[26] !== eW || ek[27] !== eX?.method
        ? ((v = function (e, t) {
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
              e7(eX?.method !== "keyboard"),
              e1(null),
              eQ(null))
          }),
          (ek[25] = eZ),
          (ek[26] = eW),
          (ek[27] = eX?.method),
          (ek[28] = v))
        : (v = ek[28])
      let tc = v
      ek[29] !== eP ||
      ek[30] !== eZ ||
      ek[31] !== eW ||
      ek[32] !== eH ||
      ek[33] !== eV ||
      ek[34] !== eK ||
      ek[35] !== eI
        ? ((x = function (e, t, n) {
            let r = void 0 === n ? (eZ ?? void 0) : n
            if ((e7(t), null != r)) {
              let t = "from" === r ? eI : eP,
                n = e0.current
              ;((e?.checkpoint_id ?? null) === t &&
                (n = e2.current?.querySelector(
                  "from" === r ? `[aria-describedby~="${eW}-viewing"]` : `[aria-describedby~="${eW}-comparison-start"]`,
                )),
                n?.focus({ preventScroll: !0 }))
            }
            ;("from" === r ? eH(e?.checkpoint_id ?? null) : "to" === r ? eK(e) : eV(e), e1(null), eQ(null))
          }),
          (ek[29] = eP),
          (ek[30] = eZ),
          (ek[31] = eW),
          (ek[32] = eH),
          (ek[33] = eV),
          (ek[34] = eK),
          (ek[35] = eI),
          (ek[36] = x))
        : (x = ek[36])
      let td = x
      ek[37] !== ti || ek[38] !== eZ || ek[39] !== tr || ek[40] !== to || ek[41] !== eN
        ? ((b = function (e) {
            return (
              !!eN &&
              ("to" !== eZ
                ? null != to && (null == e || e.through_sequence > to.through_sequence)
                : null != e && (tr || (null != ti && e.through_sequence < ti.through_sequence)))
            )
          }),
          (ek[37] = ti),
          (ek[38] = eZ),
          (ek[39] = tr),
          (ek[40] = to),
          (ek[41] = eN),
          (ek[42] = b))
        : (b = ek[42])
      let tu = b
      ek[43] !== eJ
        ? ((j = function (e, t) {
            return null == e
              ? eJ.formatMessage(
                  {
                    id: "codex.page.versions.selectCurrentComparisonNode",
                    defaultMessage:
                      "{endpoint, select, from {Use current version for comparison} other {Select current version}}",
                    description:
                      "Choose the frozen Current snapshot using its timeline node, either as the comparison version or the selected version",
                  },
                  { endpoint: t },
                )
              : eJ.formatMessage(
                  {
                    id: "codex.page.versions.selectComparisonNode",
                    defaultMessage:
                      "{endpoint, select, from {Use {date} for comparison} other {Select version from {date}}}",
                    description:
                      "Accessible label for a timeline node when moving a comparison endpoint; date is the full checkpoint date and time",
                  },
                  { endpoint: t, date: eJ.formatDate(e.created_at, { dateStyle: "full", timeStyle: "medium" }) },
                )
          }),
          (ek[43] = eJ),
          (ek[44] = j))
        : (j = ek[44])
      let th = j
      ek[45] !== eZ || ek[46] !== tu || ek[47] !== th || ek[48] !== td
        ? ((w = function (e) {
            if (null == eZ || tu(e)) return null
            let t = th(e, eZ)
            return (0, r.jsx)(T.m, {
              content: t,
              children: (0, r.jsx)(m.$, {
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
          (ek[45] = eZ),
          (ek[46] = tu),
          (ek[47] = th),
          (ek[48] = td),
          (ek[49] = w))
        : (w = ek[49])
      let tp = w
      ek[50] !== eE
        ? ((_ = function (e) {
            let t = e2.current?.querySelector(`[data-version-history-index="${e}"]`)
            if (null != t) return 0 === e ? null : eE.find((e) => e.checkpoint_id === t.dataset.versionHistoryKey)
          }),
          (ek[50] = eE),
          (ek[51] = _))
        : (_ = ek[51])
      let tg = _
      ek[52] !== eP ||
      ek[53] !== tc ||
      ek[54] !== eZ ||
      ek[55] !== eJ ||
      ek[56] !== th ||
      ek[57] !== eX ||
      ek[58] !== td ||
      ek[59] !== eI ||
      ek[60] !== tg ||
      ek[61] !== eE
        ? ((k = function (e, t) {
            let n = null != eZ && eZ !== e,
              i = "from" === e ? eP : eI,
              o = null == i ? null : eE.find((e) => e.checkpoint_id === i),
              s = "from" === e ? eI : eP,
              a = null == s ? 0 : eE.findIndex((e) => e.checkpoint_id === s) + 1,
              l =
                "from" === e
                  ? eJ.formatMessage({
                      id: "codex.page.versions.adjustComparisonStart",
                      defaultMessage: "Adjust comparison start",
                      description:
                        "Accessible label and tooltip for the outlined comparison timeline handle; click then choose a version, drag, or use arrow keys and Enter to change the earlier version",
                    })
                  : eJ.formatMessage({
                      id: "codex.page.versions.adjustComparisonEnd",
                      defaultMessage: "Adjust comparison end",
                      description:
                        "Accessible label and tooltip for the filled comparison timeline handle; click then choose a version, drag, or use arrow keys and Enter to change the later displayed version",
                    }),
              c = eX?.endpoint === e ? eX : null,
              d = null
            return (
              null != c &&
                (d =
                  null == c.version
                    ? eJ.formatMessage({
                        id: "codex.page.versions.current",
                        defaultMessage: "Current version",
                        description: "The current live Page document captured when its version preview was opened",
                      })
                    : eJ.formatDate(c.version.created_at, {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                      })),
              (0, r.jsx)(B, {
                endpoint: e,
                index: t,
                minIndex: "from" === e ? a : 0,
                maxIndex: "to" === e ? a : eE.length,
                timeline: e2,
                label: n ? th(o ?? null, eZ) : l,
                pressed: eZ === e,
                previewLabel: d,
                previewMethod: c?.method ?? null,
                onChoose: (t, r) => {
                  n ? td(o ?? null, r) : ((e0.current = t), e1(null), eQ(eZ === e ? null : e))
                },
                onPreview: (t, n, r) => {
                  let i = tg(t)
                  void 0 !== i &&
                    ((e0.current = r),
                    e7(!1),
                    eQ(e),
                    e1((t) =>
                      t?.endpoint === e && t.version === i && t.method === n
                        ? t
                        : { endpoint: e, version: i, method: n },
                    ))
                },
                onCommit: (t, n) => {
                  let r = tg(t)
                  void 0 !== r && td(r, n, e)
                },
                onCancel: (t) => tc(e, t),
              })
            )
          }),
          (ek[52] = eP),
          (ek[53] = tc),
          (ek[54] = eZ),
          (ek[55] = eJ),
          (ek[56] = th),
          (ek[57] = eX),
          (ek[58] = td),
          (ek[59] = eI),
          (ek[60] = tg),
          (ek[61] = eE),
          (ek[62] = k))
        : (k = ek[62])
      let tm = k
      ;(ek[63] !== tt ? ((S = { paddingBottom: tt }), (ek[63] = tt), (ek[64] = S)) : (S = ek[64]),
        ek[65] !== tc || ek[66] !== eZ || ek[67] !== eB || ek[68] !== eX
          ? ((C = (e) => {
              "Escape" !== e.key ||
                e.defaultPrevented ||
                (e.stopPropagation(), null != eZ || null != eX ? tc(eX?.endpoint ?? eZ ?? void 0) : eB())
            }),
            (ek[65] = tc),
            (ek[66] = eZ),
            (ek[67] = eB),
            (ek[68] = eX),
            (ek[69] = C))
          : (C = ek[69]),
        ek[70] !== eW || ek[71] !== eJ || ek[72] !== eB || ek[73] !== eU
          ? ((M = eU
              ? (0, r.jsx)(V.Yi, {
                  density: "surface",
                  leading: [
                    {
                      id: "title",
                      content: (0, r.jsx)("h2", {
                        id: `${eW}-title`,
                        className: "truncate text-sm font-medium select-none",
                        children: (0, r.jsx)(h.A, {
                          id: "codex.page.versions.title",
                          defaultMessage: "Version history",
                          description: "Title of the Page side panel listing saved checkpoints",
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
                          description: "Close version history and show the document's current contents",
                        }),
                        uniform: !0,
                        onClick: eB,
                        children: (0, r.jsx)(z.b5, { icon: { 16: $.Gmf, 20: $.pgK } }),
                      }),
                    },
                  ],
                })
              : (0, r.jsx)("h2", {
                  id: `${eW}-title`,
                  className: "sr-only",
                  children: (0, r.jsx)(h.A, {
                    id: "codex.page.versions.title",
                    defaultMessage: "Version history",
                    description: "Title of the Page side panel listing saved checkpoints",
                  }),
                })),
            (ek[70] = eW),
            (ek[71] = eJ),
            (ek[72] = eB),
            (ek[73] = eU),
            (ek[74] = M))
          : (M = ek[74]))
      let tf = `${eW}-read-only`
      ;(ek[75] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, r.jsx)(h.A, {
            id: "codex.page.versions.readOnlyDescription",
            defaultMessage: "History previews are read only",
            description:
              "Accessible description of the Page version history region, which previews versions without editing the live document",
          })),
          (ek[75] = A))
        : (A = ek[75]),
        ek[76] !== tf
          ? ((I = (0, r.jsx)("span", { id: tf, className: "sr-only", children: A })), (ek[76] = tf), (ek[77] = I))
          : (I = ek[77]))
      let tv = `${eW}-comparison-start`
      ;(ek[78] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = (0, r.jsx)(h.A, {
            id: "codex.page.versions.comparisonVersionDescription",
            defaultMessage: "Version used for comparison",
            description:
              "Accessible description identifying the Page version used as the baseline for comparison highlights",
          })),
          (ek[78] = N))
        : (N = ek[78]),
        ek[79] !== tv
          ? ((E = (0, r.jsx)("span", { id: tv, hidden: !0, children: N })), (ek[79] = tv), (ek[80] = E))
          : (E = ek[80]))
      let tx = `${eW}-viewing`
      ;(ek[81] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = (0, r.jsx)(h.A, {
            id: "codex.page.versions.viewingDescription",
            defaultMessage: "Version shown in the document",
            description:
              "Accessible description identifying the selected Page version displayed in the document canvas",
          })),
          (ek[81] = D))
        : (D = ek[81]),
        ek[82] !== tx
          ? ((Y = (0, r.jsx)("span", { id: tx, hidden: !0, children: D })), (ek[82] = tx), (ek[83] = Y))
          : (Y = ek[83]),
        ek[84] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (e) => {
              ;(e7(e.detail > 0), e1(null), eQ(null))
            }),
            (ek[84] = Q))
          : (Q = ek[84]),
        ek[85] !== tc || ek[86] !== eZ || ek[87] !== eX
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
                            ? (0, r.jsx)(h.A, {
                                id: "codex.page.versions.confirmKeyboardRange",
                                defaultMessage: "Arrow keys to adjust · Enter to compare",
                                description:
                                  "Instruction while a timeline endpoint is being adjusted with the keyboard; Enter confirms and loads the comparison",
                              })
                            : null,
                          eX?.method === "pointer"
                            ? (0, r.jsx)(h.A, {
                                id: "codex.page.versions.confirmDraggedRange",
                                defaultMessage: "Release to compare",
                                description:
                                  "Instruction while dragging a comparison endpoint along the Page revision timeline",
                              })
                            : null,
                          null == eX && "from" === eZ
                            ? (0, r.jsx)(h.A, {
                                id: "codex.page.versions.chooseComparisonRow",
                                defaultMessage: "Choose a comparison version",
                                description:
                                  "Instruction while choosing a new comparison version directly in the Page history timeline",
                              })
                            : null,
                          null == eX && "to" === eZ
                            ? (0, r.jsx)(h.A, {
                                id: "codex.page.versions.chooseSelectedVersion",
                                defaultMessage: "Choose the selected version",
                                description:
                                  "Instruction while choosing which Page version to show directly in the history timeline",
                              })
                            : null,
                        ],
                      }),
                      eX?.method === "pointer"
                        ? (0, r.jsx)("span", {
                            className: "text-xs text-secondary select-none",
                            children: (0, r.jsx)(h.A, {
                              id: "codex.page.versions.cancelDraggedRange",
                              defaultMessage: "Esc to cancel",
                              description:
                                "Keyboard hint while dragging a Page comparison timeline endpoint: press Escape to discard the drag and keep the previous comparison",
                            }),
                          })
                        : (0, r.jsx)(m.$, {
                            color: "ghostSecondary",
                            size: "compact",
                            onClick: () => tc(),
                            children: (0, r.jsx)(h.A, {
                              id: "codex.page.versions.cancelEndpointSelection",
                              defaultMessage: "Cancel",
                              description:
                                "Cancel changing a Page comparison timeline endpoint without changing either selected version",
                            }),
                          }),
                    ],
                  })
                : void 0),
            (ek[85] = tc),
            (ek[86] = eZ),
            (ek[87] = eX),
            (ek[88] = X))
          : (X = ek[88]),
        ek[89] !== eL || ek[90] !== X ? ((ee = eL(X)), (ek[89] = eL), (ek[90] = X), (ek[91] = ee)) : (ee = ek[91]),
        ek[92] !== ee
          ? ((et = (0, r.jsx)("div", {
              className: "shrink-0 px-toolbar pt-3",
              role: "presentation",
              onClick: Q,
              children: ee,
            })),
            (ek[92] = ee),
            (ek[93] = et))
          : (et = ek[93]))
      let ty = `${eW}-title`,
        tb = `${eW}-read-only`
      ;(ek[94] === Symbol.for("react.memo_cache_sentinel")
        ? ((en = (e) => {
            let { scrollTop: t, scrollHeight: n, clientHeight: r } = e.currentTarget
            e4.current = n - r - t <= 1
          }),
          (ek[94] = en))
        : (en = ek[94]),
        ek[95] !== ty || ek[96] !== tb
          ? ((er = {
              ref: e3,
              "aria-labelledby": ty,
              "aria-describedby": tb,
              role: "region",
              tabIndex: 0,
              onScroll: en,
            }),
            (ek[95] = ty),
            (ek[96] = tb),
            (ek[97] = er))
          : (er = ek[97]))
      let tj = `${eW}-timeline`
      ek[98] !== eJ
        ? ((ei = eJ.formatMessage({
            id: "codex.page.versions.listLabel",
            defaultMessage: "Page versions",
            description: "Accessible label for the current Page and its saved checkpoints grouped by date",
          })),
          (ek[98] = eJ),
          (ek[99] = ei))
        : (ei = ek[99])
      let tw = eX?.endpoint === "from" ? (eX.version?.checkpoint_id ?? null) : eP,
        t_ = eX?.endpoint === "to" ? (eX.version?.checkpoint_id ?? null) : eI,
        tk = eX?.endpoint ?? (eP === eI ? "from" : void 0)
      ;(ek[100] !== tm
        ? ((eo = (e) => tm("from", e)), (es = (e) => tm("to", e)), (ek[100] = tm), (ek[101] = eo), (ek[102] = es))
        : ((eo = ek[101]), (es = ek[102])),
        ek[103] !== e6 ||
        ek[104] !== tp ||
        ek[105] !== eN ||
        ek[106] !== tw ||
        ek[107] !== t_ ||
        ek[108] !== tk ||
        ek[109] !== eo ||
        ek[110] !== es
          ? ((ea = {
              showChanges: eN,
              animate: e6,
              fromKey: tw,
              toKey: t_,
              activeEndpoint: tk,
              fromControl: eo,
              toControl: es,
              renderNodeControl: tp,
            }),
            (ek[103] = e6),
            (ek[104] = tp),
            (ek[105] = eN),
            (ek[106] = tw),
            (ek[107] = t_),
            (ek[108] = tk),
            (ek[109] = eo),
            (ek[110] = es),
            (ek[111] = ea))
          : (ea = ek[111]),
        ek[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (0, r.jsx)(h.A, {
              id: "codex.page.versions.currentCaptureTooltip",
              defaultMessage: "Captured on opening. May include unsaved edits",
              description: "Brief tooltip for the frozen current Page snapshot, captured when version history opened",
            })),
            (ek[112] = el))
          : (el = ek[112]),
        ek[113] !== eJ
          ? ((ec = eJ.formatMessage({
              id: "codex.page.versions.current",
              defaultMessage: "Current version",
              description: "The current live Page document captured when its version preview was opened",
            })),
            (ek[113] = eJ),
            (ek[114] = ec))
          : (ec = ek[114]))
      let tS = `${eW}-current ${eW}-current-editors${eN && tr ? ` ${eW}-comparison-start` : ""}${eN && null == eI ? ` ${eW}-viewing` : ""}`,
        tC = tu(null)
      ek[115] !== td ? ((ed = (e) => td(null, e.detail > 0)), (ek[115] = td), (ek[116] = ed)) : (ed = ek[116])
      let tM = ta ? "font-medium" : void 0
      ;(ek[117] === Symbol.for("react.memo_cache_sentinel")
        ? ((eu = (0, r.jsx)(h.A, {
            id: "codex.page.versions.current",
            defaultMessage: "Current version",
            description: "The current live Page document captured when its version preview was opened",
          })),
          (ek[117] = eu))
        : (eu = ek[117]),
        ek[118] !== tM
          ? ((eh = (0, r.jsx)("span", { className: tM, children: eu })), (ek[118] = tM), (ek[119] = eh))
          : (eh = ek[119]))
      let tA = `${eW}-current-editors`
      ;(ek[120] !== eT || ek[121] !== eD
        ? ((ep = (0, r.jsx)(H.D, { compact: !0, current: !0, summary: eT, names: eD })),
          (ek[120] = eT),
          (ek[121] = eD),
          (ek[122] = ep))
        : (ep = ek[122]),
        ek[123] !== tA || ek[124] !== ep
          ? ((eg = (0, r.jsx)("span", { id: tA, className: "max-w-40 min-w-0", children: ep })),
            (ek[123] = tA),
            (ek[124] = ep),
            (ek[125] = eg))
          : (eg = ek[125]),
        ek[126] !== ta ||
        ek[127] !== ec ||
        ek[128] !== tS ||
        ek[129] !== tC ||
        ek[130] !== ed ||
        ek[131] !== eh ||
        ek[132] !== eg
          ? ((em = (0, r.jsx)(T.m, {
              content: el,
              side: "bottom",
              align: "start",
              children: (0, r.jsx)("div", {
                children: (0, r.jsx)(P.fy, {
                  ariaCurrent: ta,
                  ariaLabel: ec,
                  ariaDescribedBy: tS,
                  compactSecondLine: !0,
                  density: "row",
                  isSelected: ta,
                  isDisabled: tC,
                  onSelect: ed,
                  title: eh,
                  secondLine: eg,
                }),
              }),
            })),
            (ek[126] = ta),
            (ek[127] = ec),
            (ek[128] = tS),
            (ek[129] = tC),
            (ek[130] = ed),
            (ek[131] = eh),
            (ek[132] = eg),
            (ek[133] = em))
          : (em = ek[133]))
      let tI = `${eW}-current`
      return (
        ek[134] !== tI
          ? ((ef = (0, r.jsx)("span", { id: tI, className: "sr-only", children: tl })), (ek[134] = tI), (ek[135] = ef))
          : (ef = ek[135]),
        ek[136] !== em || ek[137] !== ef
          ? ((ev = (0, r.jsxs)(r.Fragment, { children: [em, ef] })), (ek[136] = em), (ek[137] = ef), (ek[138] = ev))
          : (ev = ek[138]),
        ek[139] !== eP ||
        ek[140] !== ts ||
        ek[141] !== eW ||
        ek[142] !== eJ ||
        ek[143] !== tu ||
        ek[144] !== eD ||
        ek[145] !== e$ ||
        ek[146] !== td ||
        ek[147] !== eI ||
        ek[148] !== eN ||
        ek[149] !== tn
          ? ((ex = (e) =>
              (0, r.jsx)(P.fy, {
                ariaCurrent: ts === e.checkpoint_id,
                ariaLabel: eJ.formatDate(e.created_at, { dateStyle: "full", timeStyle: "medium" }),
                ariaDescribedBy: `${eW}-${e.checkpoint_id}${eN && e.checkpoint_id === eP ? ` ${eW}-comparison-start` : ""}${eN && e.checkpoint_id === eI ? ` ${eW}-viewing` : ""}`,
                buttonProps: { id: `${eW}-${e.checkpoint_id}-trigger`, onClick: (t) => td(e, t.detail > 0) },
                compactSecondLine: !0,
                density: "row",
                hasInteractiveContent: !0,
                isSelected: ts === e.checkpoint_id,
                isDisabled: tu(e),
                title: (0, r.jsx)("span", {
                  className: ts === e.checkpoint_id ? "font-medium" : void 0,
                  children: tn.get(e.checkpoint_id),
                }),
                rightText:
                  ts === e.checkpoint_id && null != e$
                    ? (0, r.jsx)("span", { className: "pointer-events-auto", children: e$ })
                    : null,
                rightTextPosition: "center",
                secondLine: (0, r.jsx)("label", {
                  id: `${eW}-${e.checkpoint_id}`,
                  className: "max-w-40 min-w-0",
                  htmlFor: `${eW}-${e.checkpoint_id}-trigger`,
                  children: (0, r.jsx)(H.D, { compact: !0, summary: e, names: eD }),
                }),
              })),
            (ek[139] = eP),
            (ek[140] = ts),
            (ek[141] = eW),
            (ek[142] = eJ),
            (ek[143] = tu),
            (ek[144] = eD),
            (ek[145] = e$),
            (ek[146] = td),
            (ek[147] = eI),
            (ek[148] = eN),
            (ek[149] = tn),
            (ek[150] = ex))
          : (ex = ek[150]),
        ek[151] !== eW ||
        ek[152] !== eG ||
        ek[153] !== eY ||
        ek[154] !== eF ||
        ek[155] !== eq ||
        ek[156] !== eS ||
        ek[157] !== eC ||
        ek[158] !== eE.length ||
        ek[159] !== eM
          ? ((ey =
              null != eq
                ? (0, r.jsxs)(m.$, {
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
                      eY || ((e5.current = { trigger: e.currentTarget, count: eE.length }), eq())
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
                                  session: eC,
                                  visible: eM,
                                  operation: "pages.version.history",
                                  error: eF,
                                  kind: "load",
                                  recoveryUi: "notice",
                                }),
                                (0, r.jsx)(h.A, {
                                  id: "codex.page.versions.retryOlder",
                                  defaultMessage: "Retry loading older versions",
                                  description: "Retry action after loading older Page versions failed",
                                }),
                              ],
                            })
                          : (0, r.jsx)(h.A, {
                              id: "codex.page.versions.loadOlder",
                              defaultMessage: "Load older versions",
                              description: "Load older checkpoints in the Page version history panel",
                            }),
                      }),
                    ],
                  })
                : null),
            (ek[151] = eW),
            (ek[152] = eG),
            (ek[153] = eY),
            (ek[154] = eF),
            (ek[155] = eq),
            (ek[156] = eS),
            (ek[157] = eC),
            (ek[158] = eE.length),
            (ek[159] = eM),
            (ek[160] = ey))
          : (ey = ek[160]),
        ek[161] !== ei || ek[162] !== ea || ek[163] !== ev || ek[164] !== ex || ek[165] !== ey || ek[166] !== eE
          ? ((eb = (0, r.jsx)(K.t, {
              label: ei,
              items: eE,
              getDate: J,
              getKey: G,
              comparison: ea,
              current: ev,
              renderItem: ex,
              continuation: ey,
            })),
            (ek[161] = ei),
            (ek[162] = ea),
            (ek[163] = ev),
            (ek[164] = ex),
            (ek[165] = ey),
            (ek[166] = eE),
            (ek[167] = eb))
          : (eb = ek[167]),
        ek[168] !== eR || ek[169] !== tj || ek[170] !== eb
          ? ((ej = (0, r.jsxs)("div", { id: tj, ref: e2, children: [eb, eR] })),
            (ek[168] = eR),
            (ek[169] = tj),
            (ek[170] = eb),
            (ek[171] = ej))
          : (ej = ek[171]),
        ek[172] !== er || ek[173] !== ej
          ? ((ew = (0, r.jsx)(R.Q, {
              className: "relative grid min-h-0 flex-1 overflow-hidden",
              fade: "mask",
              scrollClassName:
                "min-h-0 overflow-y-auto overscroll-contain px-toolbar py-3 focus-visible:outline-2 focus-visible:outline-ring",
              scrollProps: er,
              children: ej,
            })),
            (ek[172] = er),
            (ek[173] = ej),
            (ek[174] = ew))
          : (ew = ek[174]),
        ek[175] !== S ||
        ek[176] !== C ||
        ek[177] !== M ||
        ek[178] !== I ||
        ek[179] !== E ||
        ek[180] !== Y ||
        ek[181] !== et ||
        ek[182] !== ew
          ? ((e_ = (0, r.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col",
              style: S,
              role: "presentation",
              onKeyDown: C,
              children: [M, I, E, Y, et, ew],
            })),
            (ek[175] = S),
            (ek[176] = C),
            (ek[177] = M),
            (ek[178] = I),
            (ek[179] = E),
            (ek[180] = Y),
            (ek[181] = et),
            (ek[182] = ew),
            (ek[183] = e_))
          : (e_ = ek[183]),
        e_
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
      return (0, O.L9)().reduce((e, t) => Math.max(e, window.innerHeight - t.top), 0)
    }
    var Q = n("JNtf"),
      X = n("mUDD"),
      ee = n("I2MU")
    function et(e) {
      let t,
        n,
        o,
        s,
        a,
        l,
        g,
        f,
        v,
        b,
        j,
        w,
        S,
        C,
        M,
        A,
        I,
        P,
        N,
        E,
        D,
        T,
        L = (0, i.c)(60),
        {
          pageId: $,
          realtimeSession: R,
          visible: q,
          streamKind: z,
          version: O,
          ready: F,
          signal: V,
          onRestore: K,
          onRestored: H,
        } = e,
        B = (0, c.gh)(k.u),
        U = (0, u.A)()
      L[0] !== U || L[1] !== O.created_at
        ? ((t = U.formatMessage(
            {
              id: "codex.page.versions.restore.target",
              defaultMessage: "Restore version from {date}",
              description:
                "Accessible label identifying the exact saved Page version that the Restore button will restore",
            },
            { date: U.formatDate(O.created_at, { dateStyle: "medium", timeStyle: "medium" }) },
          )),
          (L[0] = U),
          (L[1] = O.created_at),
          (L[2] = t))
        : (t = L[2])
      let Y = t,
        [G, J] = (0, d.useState)(!1),
        [W, Z] = (0, d.useState)(!1),
        [et, er] = (0, d.useState)(null),
        ei = et?.result ?? null,
        eo = "unsupported" !== ei && "limit_exceeded" !== ei,
        es = (0, d.useRef)(null)
      ;(L[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => () => es.current?.abort()), (o = []), (L[3] = n), (L[4] = o))
        : ((n = L[3]), (o = L[4])),
        (0, d.useEffect)(n, o),
        L[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = () => {
              ;(es.current?.abort(), (es.current = null), Z(!1), J(!1))
            }),
            (L[5] = s))
          : (s = L[5]))
      let ea = s
      L[6] !== eo ||
      L[7] !== K ||
      L[8] !== H ||
      L[9] !== $ ||
      L[10] !== B ||
      L[11] !== V ||
      L[12] !== z ||
      L[13] !== O.checkpoint_id
        ? ((a = async () => {
            if (!eo || null != es.current || V.aborted) return
            let e = new AbortController()
            es.current = e
            let t = AbortSignal.any([V, e.signal]),
              n = (0, p.l)(B, "version_restore", { stream_kind: z }, t)
            ;(Z(!0), er(null))
            try {
              let e = await (0, ee.y)({ pageId: $, checkpointId: O.checkpoint_id, streamKind: z, signal: t })
              t.throwIfAborted()
              let r = await K(e, t)
              ;(t.throwIfAborted(), n(r), "restored" === r ? H() : er({ result: r }))
            } catch (e) {
              ;(n(t.aborted ? "canceled" : "failure"),
                t.aborted ||
                  ((0, x.ZD)(B.get(_.YV), "pages.version.restore", e), er({ result: "unavailable", cause: e })))
            }
            es.current === e && ((es.current = null), Z(!1))
          }),
          (L[6] = eo),
          (L[7] = K),
          (L[8] = H),
          (L[9] = $),
          (L[10] = B),
          (L[11] = V),
          (L[12] = z),
          (L[13] = O.checkpoint_id),
          (L[14] = a))
        : (a = L[14])
      let el = a
      L[15] === Symbol.for("react.memo_cache_sentinel") ? ((l = { onEscapeKeyDown: en }), (L[15] = l)) : (l = L[15])
      let ec = !F
      return (
        L[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, r.jsx)(h.A, {
              id: "codex.page.versions.restore.open",
              defaultMessage: "Restore",
              description: "Open confirmation to restore the saved Page version beside this button",
            })),
            (L[16] = g))
          : (g = L[16]),
        L[17] !== Y || L[18] !== ec
          ? ((f = (0, r.jsx)(m.$, {
              color: "ghostSecondary",
              size: "actionSm",
              radius: "full",
              disabled: ec,
              "aria-label": Y,
              children: g,
            })),
            (L[17] = Y),
            (L[18] = ec),
            (L[19] = f))
          : (f = L[19]),
        L[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (e) => {
              e ? (er(null), J(!0)) : ea()
            }),
            (L[20] = v))
          : (v = L[20]),
        L[21] !== el
          ? ((b = (e) => {
              ;(e.preventDefault(), el())
            }),
            (L[21] = el),
            (L[22] = b))
          : (b = L[22]),
        L[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, r.jsx)(Q.L3, {
              className: "contents",
              children: (0, r.jsx)(h.A, {
                id: "codex.page.versions.restore.title",
                defaultMessage: "Restore this version?",
                description: "Confirmation title before restoring a historical Page version",
              }),
            })),
            (L[23] = j))
          : (j = L[23]),
        L[24] !== U || L[25] !== O.created_at
          ? ((w = U.formatDate(O.created_at, { dateStyle: "long", timeStyle: "medium" })),
            (L[24] = U),
            (L[25] = O.created_at),
            (L[26] = w))
          : (w = L[26]),
        L[27] !== w
          ? ((S = (0, r.jsx)(X.c7, {
              subtitleTone: "secondary",
              title: j,
              subtitle: (0, r.jsx)(Q.rr, {
                className: "contents",
                children: (0, r.jsx)(h.A, {
                  id: "codex.page.versions.restore.description",
                  defaultMessage:
                    "Replace the current page content with the version from {date}. Current comments will be kept.",
                  description:
                    "Confirmation explaining which historical Page version will replace the current content, while preserving current comments",
                  values: { date: w },
                }),
              }),
            })),
            (L[27] = w),
            (L[28] = S))
          : (S = L[28]),
        L[29] !== ei || L[30] !== et?.cause || L[31] !== G || L[32] !== $ || L[33] !== R || L[34] !== q
          ? ((C =
              null != ei
                ? (0, r.jsxs)("p", {
                    role: "alert",
                    className: "text-sm text-secondary",
                    children: [
                      (0, r.jsx)(y.It, {
                        pageId: $,
                        session: R,
                        visible: !1 !== q && G,
                        operation: "pages.version.restore",
                        error: et?.cause,
                        pagesErrorCode: ei,
                        kind: "sync",
                        recoveryUi: "dialog",
                      }),
                      "unsupported" === ei
                        ? (0, r.jsx)(h.A, {
                            id: "codex.page.versions.restore.unsupported",
                            defaultMessage:
                              "This version includes changes that can’t be restored. Choose another version",
                            description:
                              "Error when a historical Page version cannot be restored because its changes conflict with protected document content or current editing capabilities",
                          })
                        : null,
                      "limit_exceeded" === ei
                        ? (0, r.jsx)(h.A, {
                            id: "codex.page.versions.restore.limitExceeded",
                            defaultMessage: "This version is too large to restore in one edit. Choose another version",
                            description:
                              "Error when restoring a historical Page version would exceed the document update size limit",
                          })
                        : null,
                      "unavailable" === ei
                        ? (0, r.jsx)(h.A, {
                            id: "codex.page.versions.restore.error",
                            defaultMessage:
                              "Could not restore this version. Check your connection and editing access, then try again",
                            description:
                              "Error when downloading or applying a historical Page version fails; the dialog remains open for retry",
                          })
                        : null,
                    ],
                  })
                : null),
            (L[29] = ei),
            (L[30] = et?.cause),
            (L[31] = G),
            (L[32] = $),
            (L[33] = R),
            (L[34] = q),
            (L[35] = C))
          : (C = L[35]),
        L[36] !== W
          ? ((M = W
              ? (0, r.jsx)(h.A, {
                  id: "codex.page.versions.restore.pending",
                  defaultMessage: "Restoring version…",
                  description: "Status while preparing and applying the selected historical Page version",
                })
              : null),
            (L[36] = W),
            (L[37] = M))
          : (M = L[37]),
        L[38] !== M
          ? ((A = (0, r.jsx)("p", {
              role: "status",
              "aria-atomic": !0,
              className: "text-sm text-secondary",
              children: M,
            })),
            (L[38] = M),
            (L[39] = A))
          : (A = L[39]),
        L[40] !== S || L[41] !== C || L[42] !== A
          ? ((I = (0, r.jsxs)(X.OO, { children: [S, C, A] })), (L[40] = S), (L[41] = C), (L[42] = A), (L[43] = I))
          : (I = L[43]),
        L[44] !== eo
          ? ((P = eo
              ? (0, r.jsx)(m.$, {
                  color: "secondary",
                  type: "button",
                  onClick: ea,
                  children: (0, r.jsx)(h.A, {
                    id: "codex.page.versions.restore.cancel",
                    defaultMessage: "Cancel",
                    description: "Cancel restoring a historical Page version",
                  }),
                })
              : null),
            (L[44] = eo),
            (L[45] = P))
          : (P = L[45]),
        L[46] !== eo || L[47] !== W
          ? ((N = eo
              ? (0, r.jsx)(m.$, {
                  color: "primary",
                  type: "submit",
                  loading: W,
                  children: (0, r.jsx)(h.A, {
                    id: "codex.page.versions.restore.confirm",
                    defaultMessage: "Restore version",
                    description: "Confirm replacing the current Page content with the selected historical version",
                  }),
                })
              : (0, r.jsx)(m.$, {
                  color: "primary",
                  type: "button",
                  onClick: ea,
                  children: (0, r.jsx)(h.A, {
                    id: "codex.page.versions.restore.chooseAnother",
                    defaultMessage: "Choose another version",
                    description: "Return to Page version history after the selected version cannot be restored",
                  }),
                })),
            (L[46] = eo),
            (L[47] = W),
            (L[48] = N))
          : (N = L[48]),
        L[49] !== P || L[50] !== N
          ? ((E = (0, r.jsx)(X.OO, { children: (0, r.jsxs)(X.Es, { children: [P, N] }) })),
            (L[49] = P),
            (L[50] = N),
            (L[51] = E))
          : (E = L[51]),
        L[52] !== b || L[53] !== I || L[54] !== E
          ? ((D = (0, r.jsxs)(X.R4, { as: "form", onSubmit: b, children: [I, E] })),
            (L[52] = b),
            (L[53] = I),
            (L[54] = E),
            (L[55] = D))
          : (D = L[55]),
        L[56] !== G || L[57] !== D || L[58] !== f
          ? ((T = (0, r.jsx)(Q.lG, {
              open: G,
              size: "compact",
              contentProps: l,
              triggerContent: f,
              onOpenChange: v,
              children: D,
            })),
            (L[56] = G),
            (L[57] = D),
            (L[58] = f),
            (L[59] = T))
          : (T = L[59]),
        T
      )
    }
    function en(e) {
      return e.stopPropagation()
    }
    var er = n("m9m6"),
      ei = n("EfgF"),
      eo = n("VpTR"),
      es = n("TBQJ")
    function ea(e) {
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
    var ec = n("NqYl"),
      ed = n("HOLv"),
      eu = n("F0xz"),
      eh = n("HFi9"),
      ep = n.n(eh),
      eg = n("ZZgR"),
      em = n("bqtn"),
      ef = n("KIKs")
    function ev(e) {
      let t,
        n,
        o,
        s,
        a,
        l,
        c = (0, i.c)(22),
        { version: d, timeLabel: p, pickerOpen: g } = e,
        m = void 0 !== g && g,
        f = (0, u.A)(),
        v = (0, ef.wv)()
      c[0] !== f || c[1] !== d.created_at
        ? ((t = f.formatDate(d.created_at, { dateStyle: "full", timeStyle: "medium" })),
          (c[0] = f),
          (c[1] = d.created_at),
          (c[2] = t))
        : (t = c[2])
      let x = t,
        y = d.created_at
      return (
        c[3] !== f || c[4] !== v || c[5] !== d.created_at
          ? ((n = f.formatDate(d.created_at, {
              month: "short",
              day: "numeric",
              year:
                f.formatDate(d.created_at, { year: "numeric" }) === f.formatDate(v, { year: "numeric" })
                  ? void 0
                  : "numeric",
            })),
            (c[3] = f),
            (c[4] = v),
            (c[5] = d.created_at),
            (c[6] = n))
          : (n = c[6]),
        c[7] !== f || c[8] !== p || c[9] !== d.created_at
          ? ((o = p ?? f.formatDate(d.created_at, { timeStyle: "medium" })),
            (c[7] = f),
            (c[8] = p),
            (c[9] = d.created_at),
            (c[10] = o))
          : (o = c[10]),
        c[11] !== n || c[12] !== o
          ? ((s = (0, r.jsx)(h.A, {
              id: "codex.page.versions.timestamp.compact",
              defaultMessage: "{date} · {time}",
              description:
                "Compact date and time identifying one saved Page version; time may include seconds to distinguish versions saved within the same minute",
              values: { date: n, time: o },
            })),
            (c[11] = n),
            (c[12] = o),
            (c[13] = s))
          : (s = c[13]),
        c[14] !== x || c[15] !== s || c[16] !== d.created_at
          ? ((a = (0, r.jsx)("time", {
              className: "block min-w-0 truncate text-start text-sm tabular-nums",
              "aria-label": x,
              dateTime: y,
              children: s,
            })),
            (c[14] = x),
            (c[15] = s),
            (c[16] = d.created_at),
            (c[17] = a))
          : (a = c[17]),
        c[18] !== x || c[19] !== m || c[20] !== a
          ? ((l = (0, r.jsx)(T.m, { content: x, disabled: m, children: a })),
            (c[18] = x),
            (c[19] = m),
            (c[20] = a),
            (c[21] = l))
          : (l = c[21]),
        l
      )
    }
    function ex(e) {
      let t,
        n,
        o,
        s,
        a,
        l,
        c,
        p,
        g,
        m,
        f,
        v,
        x,
        b,
        j,
        w,
        _,
        k,
        S,
        C,
        M,
        A = (0, i.c)(101),
        {
          pageId: I,
          realtimeSession: P,
          visible: N,
          versions: E,
          selectedId: D,
          endpoint: T,
          allowCurrent: L,
          onSelect: R,
          onLoadMore: q,
          isLoadingMore: z,
          isLoadMoreError: O,
          loadMoreError: F,
        } = e,
        K = void 0 !== z && z,
        H = void 0 !== O && O,
        B = (0, u.A)(),
        Y = (0, ef.wv)(),
        [G, J] = (0, d.useState)(!1),
        [W, Z] = (0, d.useState)(""),
        Q = (0, d.useId)(),
        X = null == D && void 0 !== D
      if (
        A[0] !== L ||
        A[1] !== T ||
        A[2] !== B ||
        A[3] !== X ||
        A[4] !== Y ||
        A[5] !== R ||
        A[6] !== G ||
        A[7] !== W ||
        A[8] !== D ||
        A[9] !== Q ||
        A[10] !== E
      ) {
        let e, i, u, y, _, k, S, C, M, I, P, N
        A[27] !== D ? ((e = (e) => e.checkpoint_id === D), (A[27] = D), (A[28] = e)) : (e = A[28])
        let q = E.find(e)
        A[29] !== B || A[30] !== Y
          ? ((i = B.formatDate(Y, { year: "numeric" })), (A[29] = B), (A[30] = Y), (A[31] = i))
          : (i = A[31])
        let z = i
        A[32] !== B || A[33] !== G || A[34] !== E || A[35] !== z
          ? ((y = U(E, B)),
            (u = G
              ? E.map((e) => {
                  let t = B.formatDate(e.created_at, {
                      month: "long",
                      day: "numeric",
                      year: B.formatDate(e.created_at, { year: "numeric" }) === z ? void 0 : "numeric",
                    }),
                    n = B.formatDate(e.created_at, { dateStyle: "full", timeStyle: "medium" }),
                    r = y.get(e.checkpoint_id),
                    i = [
                      n,
                      B.formatDate(e.created_at, { dateStyle: "medium" }),
                      `${t} ${r}`,
                      `${B.formatDate(e.created_at, { month: "short", day: "numeric" })} ${r}`,
                    ]
                      .join(" ")
                      .replace(/\s+/g, " ")
                      .toLocaleLowerCase(B.locale)
                  return { version: e, date: t, fullDate: n, timeLabel: r, searchable: i }
                })
              : []),
            (A[32] = B),
            (A[33] = G),
            (A[34] = E),
            (A[35] = z),
            (A[36] = u),
            (A[37] = y))
          : ((u = A[36]), (y = A[37]))
        let O = u
        A[38] !== O || A[39] !== y
          ? ((_ = { timeLabels: y, options: O }), (A[38] = O), (A[39] = y), (A[40] = _))
          : (_ = A[40])
        let { timeLabels: F, options: K } = _
        ;((a = W.trim().replace(/\s+/g, " ").toLocaleLowerCase(B.locale)),
          (s = ep()(
            K.filter((e) => e.searchable.includes(a)),
            eb,
          )),
          A[41] !== T || A[42] !== B
            ? ((k =
                "from" === T
                  ? B.formatMessage({
                      id: "codex.page.versions.toolbar.chooseStartVersion",
                      defaultMessage: "Choose start version",
                      description: "Open the menu to choose the earlier Page version at the start of a comparison",
                    })
                  : B.formatMessage({
                      id: "codex.page.versions.toolbar.chooseEndVersion",
                      defaultMessage: "Choose end version",
                      description: "Open the menu to choose the later Page version at the end of a comparison",
                    })),
              (A[41] = T),
              (A[42] = B),
              (A[43] = k))
            : (k = A[43]))
        let H = k
        ;((o = eg.A),
          (b = G),
          A[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = (e) => {
                ;(Z(""), J(e))
              }),
              (A[44] = j))
            : (j = A[44]),
          (w = "end"),
          (l = "panel"),
          (c = "list"),
          (p = ey),
          A[45] !== D
            ? ((S =
                void 0 === D
                  ? (0, r.jsx)(h.A, {
                      id: "codex.page.versions.toolbar.chooseVersion",
                      defaultMessage: "Choose version",
                      description: "Placeholder for a Page comparison endpoint before a version is selected",
                    })
                  : null),
              (A[45] = D),
              (A[46] = S))
            : (S = A[46]))
        let ee = null != q ? (0, r.jsx)(ev, { version: q, timeLabel: F.get(q.checkpoint_id), pickerOpen: G }) : null
        ;(A[47] !== X
          ? ((C = X
              ? (0, r.jsx)(h.A, {
                  id: "codex.page.versions.current",
                  defaultMessage: "Current version",
                  description: "The current live Page document captured when its version preview was opened",
                })
              : null),
            (A[47] = X),
            (A[48] = C))
          : (C = A[48]),
          A[49] !== D || A[50] !== q
            ? ((M =
                null != D && null == q
                  ? (0, r.jsx)(h.A, {
                      id: "codex.page.versions.toolbar.chosenVersion",
                      defaultMessage: "Chosen version",
                      description:
                        "Comparison endpoint selector when the chosen version is outside the loaded version history",
                    })
                  : null),
              (A[49] = D),
              (A[50] = q),
              (A[51] = M))
            : (M = A[51]),
          A[52] !== S || A[53] !== ee || A[54] !== C || A[55] !== M || A[56] !== Q
            ? ((I = (0, r.jsxs)("span", {
                id: Q,
                className: "min-w-0 flex-1 truncate text-start",
                children: [S, ee, C, M],
              })),
              (A[52] = S),
              (A[53] = ee),
              (A[54] = C),
              (A[55] = M),
              (A[56] = Q),
              (A[57] = I))
            : (I = A[57]),
          A[58] === Symbol.for("react.memo_cache_sentinel") ? ((P = (0, r.jsx)($.Awc, {})), (A[58] = P)) : (P = A[58]),
          A[59] !== H || A[60] !== I || A[61] !== Q
            ? ((g = (0, r.jsxs)(V.DW, {
                className: "max-w-full min-w-0",
                variant: "dropdown",
                "aria-label": H,
                "aria-describedby": Q,
                children: [I, P],
              })),
              (A[59] = H),
              (A[60] = I),
              (A[61] = Q),
              (A[62] = g))
            : (g = A[62]),
          (n = eg.G.Root),
          (v = H),
          A[63] !== B
            ? ((N = B.formatMessage({
                id: "codex.page.versions.baseline.search",
                defaultMessage: "Find a date or time…",
                description: "Placeholder for filtering the loaded Page version history by its local date or time",
              })),
              (A[63] = B),
              (A[64] = N))
            : (N = A[64]),
          A[65] !== W || A[66] !== N
            ? ((x = (0, r.jsx)(eg.G.Input, { placeholder: N, value: W, onValueChange: Z })),
              (A[65] = W),
              (A[66] = N),
              (A[67] = x))
            : (x = A[67]),
          (t = eg.G.List),
          (m =
            L && "" === a
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(eg.G.Item, {
                      value: "current",
                      "aria-current": !!X || void 0,
                      rightIcon: X ? (0, r.jsx)($.ALZ, {}) : void 0,
                      onSelect: () => {
                        ;(R(null), J(!1))
                      },
                      children: (0, r.jsx)(h.A, {
                        id: "codex.page.versions.current",
                        defaultMessage: "Current version",
                        description: "The current live Page document captured when its version preview was opened",
                      }),
                    }),
                    (0, r.jsx)(em.ms.Separator, {}),
                  ],
                })
              : null),
          (f = Object.entries(s).map((e) => {
            let [t, n] = e
            return (0, r.jsxs)(
              d.Fragment,
              {
                children: [
                  (0, r.jsx)(em.ms.SectionLabel, { children: t }),
                  n.map((e) => {
                    let { version: t, fullDate: n, timeLabel: i } = e
                    return (0, r.jsx)(
                      eg.G.Item,
                      {
                        value: t.checkpoint_id,
                        "aria-label": n,
                        "aria-current": t.checkpoint_id === D || void 0,
                        tooltipText: n,
                        rightIcon: t.checkpoint_id === D ? (0, r.jsx)($.ALZ, {}) : void 0,
                        onSelect: () => {
                          ;(R(t), J(!1))
                        },
                        children: (0, r.jsx)("span", { className: "tabular-nums", children: i }),
                      },
                      t.checkpoint_id,
                    )
                  }),
                ],
              },
              t,
            )
          })),
          (A[0] = L),
          (A[1] = T),
          (A[2] = B),
          (A[3] = X),
          (A[4] = Y),
          (A[5] = R),
          (A[6] = G),
          (A[7] = W),
          (A[8] = D),
          (A[9] = Q),
          (A[10] = E),
          (A[11] = t),
          (A[12] = n),
          (A[13] = o),
          (A[14] = s),
          (A[15] = a),
          (A[16] = l),
          (A[17] = c),
          (A[18] = p),
          (A[19] = g),
          (A[20] = m),
          (A[21] = f),
          (A[22] = v),
          (A[23] = x),
          (A[24] = b),
          (A[25] = j),
          (A[26] = w))
      } else
        ((t = A[11]),
          (n = A[12]),
          (o = A[13]),
          (s = A[14]),
          (a = A[15]),
          (l = A[16]),
          (c = A[17]),
          (p = A[18]),
          (g = A[19]),
          (m = A[20]),
          (f = A[21]),
          (v = A[22]),
          (x = A[23]),
          (b = A[24]),
          (j = A[25]),
          (w = A[26]))
      return (
        A[68] !== s || A[69] !== a
          ? ((_ =
              "" !== a && 0 === Object.keys(s).length
                ? (0, r.jsx)(em.ms.Message, {
                    compact: !0,
                    children: (0, r.jsx)(h.A, {
                      id: "codex.page.versions.baseline.empty",
                      defaultMessage: "No matching versions",
                      description: "Empty state when no loaded saved Page versions match the entered date or time",
                    }),
                  })
                : null),
            (A[68] = s),
            (A[69] = a),
            (A[70] = _))
          : (_ = A[70]),
        A[71] !== H ||
        A[72] !== K ||
        A[73] !== F ||
        A[74] !== q ||
        A[75] !== G ||
        A[76] !== I ||
        A[77] !== P ||
        A[78] !== N
          ? ((k =
              null != q
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(em.ms.Separator, {}),
                      H && !K
                        ? (0, r.jsxs)(em.ms.Message, {
                            compact: !0,
                            children: [
                              (0, r.jsx)(y.It, {
                                pageId: I,
                                session: P,
                                visible: !1 !== N && G,
                                operation: "pages.version.history",
                                error: F,
                                kind: "load",
                                recoveryUi: "notice",
                              }),
                              (0, r.jsx)(h.A, {
                                id: "codex.page.versions.baseline.loadMoreError",
                                defaultMessage: "Couldn’t load older versions",
                                description:
                                  "Error in the comparison picker when fetching another page of revision metadata failed; the action below retries the request",
                              }),
                            ],
                          })
                        : null,
                      (0, r.jsx)(eg.G.Item, {
                        value: "load-older",
                        disabled: K,
                        onSelect: q,
                        children: K
                          ? (0, r.jsx)(h.A, {
                              id: "codex.page.versions.baseline.loadingMore",
                              defaultMessage: "Loading older versions…",
                              description: "Status while fetching another page of older saved Page revision metadata",
                            })
                          : (0, r.jsx)(h.A, {
                              id: "codex.page.versions.baseline.loadMore",
                              defaultMessage: "Load older versions",
                              description:
                                "Fetch earlier saved Page revisions to browse or search in the comparison picker",
                            }),
                      }),
                    ],
                  })
                : null),
            (A[71] = H),
            (A[72] = K),
            (A[73] = F),
            (A[74] = q),
            (A[75] = G),
            (A[76] = I),
            (A[77] = P),
            (A[78] = N),
            (A[79] = k))
          : (k = A[79]),
        A[80] !== t || A[81] !== _ || A[82] !== k || A[83] !== m || A[84] !== f
          ? ((S = (0, r.jsxs)(t, { children: [m, f, _, k] })),
            (A[80] = t),
            (A[81] = _),
            (A[82] = k),
            (A[83] = m),
            (A[84] = f),
            (A[85] = S))
          : (S = A[85]),
        A[86] !== n || A[87] !== S || A[88] !== v || A[89] !== x
          ? ((C = (0, r.jsxs)(n, { label: v, children: [x, S] })),
            (A[86] = n),
            (A[87] = S),
            (A[88] = v),
            (A[89] = x),
            (A[90] = C))
          : (C = A[90]),
        A[91] !== o ||
        A[92] !== l ||
        A[93] !== c ||
        A[94] !== p ||
        A[95] !== g ||
        A[96] !== C ||
        A[97] !== b ||
        A[98] !== j ||
        A[99] !== w
          ? ((M = (0, r.jsx)(o, {
              open: b,
              onOpenChange: j,
              align: w,
              contentWidth: l,
              contentMaxHeight: c,
              onEscapeKeyDown: p,
              triggerButton: g,
              children: C,
            })),
            (A[91] = o),
            (A[92] = l),
            (A[93] = c),
            (A[94] = p),
            (A[95] = g),
            (A[96] = C),
            (A[97] = b),
            (A[98] = j),
            (A[99] = w),
            (A[100] = M))
          : (M = A[100]),
        M
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
        s,
        a,
        c,
        p,
        g,
        m = (0, i.c)(44),
        {
          pageId: f,
          realtimeSession: v,
          visible: x,
          showChanges: y,
          onShowChangesChange: b,
          versions: j,
          selectedVersion: w,
          previousVersion: _,
          baselineSelection: k,
          onBaselineChange: S,
          onLoadMore: C,
          isLoadingMore: M,
          isLoadMoreError: A,
          loadMoreError: I,
          activeChange: P,
          changeCount: N,
          onNavigateChange: E,
          onSelectVersion: D,
          comparisonStatus: T,
          selectionControls: L,
        } = e,
        R = (0, u.A)(),
        q = (0, d.useId)(),
        z = "ready" === T && null != N && N > 0
      if (
        (m[0] !== k.checkpointId || m[1] !== k.kind || m[2] !== _?.checkpoint_id
          ? ((t = _?.checkpoint_id),
            "checkpoint" === k.kind ? (t = k.checkpointId) : "current" === k.kind && (t = null),
            (m[0] = k.checkpointId),
            (m[1] = k.kind),
            (m[2] = _?.checkpoint_id),
            (m[3] = t))
          : (t = m[3]),
        m[4] !== t || m[5] !== j)
      ) {
        let e
        ;(m[7] !== t ? ((e = (e) => e.checkpoint_id === t), (m[7] = t), (m[8] = e)) : (e = m[8]),
          (n = j.find(e)),
          (m[4] = t),
          (m[5] = j),
          (m[6] = n))
      } else n = m[6]
      let O = n
      return (
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(h.A, {
              id: "codex.page.versions.toolbar.showChanges",
              defaultMessage: "Show changes",
              description: "Toggle comparison highlights on the selected historical Page version",
            })),
            (m[9] = o))
          : (o = m[9]),
        m[10] !== q
          ? ((s = (0, r.jsx)("label", { className: "text-sm", htmlFor: q, children: o })), (m[10] = q), (m[11] = s))
          : (s = m[11]),
        m[12] !== b || m[13] !== y || m[14] !== q
          ? ((a = (0, r.jsx)(eu.l, { id: q, checked: y, onChange: b })),
            (m[12] = b),
            (m[13] = y),
            (m[14] = q),
            (m[15] = a))
          : (a = m[15]),
        m[16] !== s || m[17] !== a
          ? ((c = (0, r.jsxs)("div", { className: "flex min-h-8 items-center justify-end gap-2", children: [s, a] })),
            (m[16] = s),
            (m[17] = a),
            (m[18] = c))
          : (c = m[18]),
        m[19] !== P ||
        m[20] !== t ||
        m[21] !== O ||
        m[22] !== z ||
        m[23] !== N ||
        m[24] !== T ||
        m[25] !== R ||
        m[26] !== A ||
        m[27] !== M ||
        m[28] !== I ||
        m[29] !== S ||
        m[30] !== C ||
        m[31] !== E ||
        m[32] !== D ||
        m[33] !== f ||
        m[34] !== v ||
        m[35] !== w ||
        m[36] !== L ||
        m[37] !== y ||
        m[38] !== j ||
        m[39] !== x
          ? ((p = y
              ? (0, r.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-2",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-xs text-secondary",
                          children: (0, r.jsx)(h.A, {
                            id: "codex.page.versions.fromLabel",
                            defaultMessage: "From",
                            description: "Label for the earlier endpoint of a Page version comparison",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "flex min-h-7 min-w-0 items-center",
                          children: (0, r.jsx)(ex, {
                            pageId: f,
                            realtimeSession: v,
                            visible: x,
                            endpoint: "from",
                            versions: j.filter((e) => null == w || e.through_sequence <= w.through_sequence),
                            selectedId: t,
                            allowCurrent: null == w,
                            onSelect: (e) =>
                              S(
                                null == e ? { kind: "current" } : { kind: "checkpoint", checkpointId: e.checkpoint_id },
                              ),
                            onLoadMore: C,
                            isLoadingMore: M,
                            isLoadMoreError: A,
                            loadMoreError: I,
                          }),
                        }),
                        (0, r.jsx)("span", {
                          className: "text-xs text-secondary",
                          children: (0, r.jsx)(h.A, {
                            id: "codex.page.versions.toLabel",
                            defaultMessage: "To",
                            description:
                              "Label for the later endpoint of a Page version comparison, which is displayed in the document",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "flex min-h-7 min-w-0 items-center",
                          children: (0, r.jsx)(ex, {
                            pageId: f,
                            realtimeSession: v,
                            visible: x,
                            endpoint: "to",
                            versions: j.filter(
                              (e) => void 0 === t || (null != O && e.through_sequence >= O.through_sequence),
                            ),
                            selectedId: w?.checkpoint_id ?? null,
                            allowCurrent: !0,
                            onSelect: D,
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
                            null != L && "invisible",
                          ),
                          inert: null != L,
                          "aria-hidden": null != L,
                          children: [
                            (0, r.jsxs)("span", {
                              className: "flex min-w-0 items-center gap-2 text-xs text-secondary tabular-nums",
                              role: "status",
                              "aria-atomic": !0,
                              children: [
                                "loading" === T || "pending" === T
                                  ? (0, r.jsx)(h.A, {
                                      id: "codex.page.versions.toolbar.comparing",
                                      defaultMessage: "Comparing…",
                                      description:
                                        "Status while fetching Page versions and computing the differences between them",
                                    })
                                  : null,
                                "error" === T
                                  ? (0, r.jsx)(h.A, {
                                      id: "codex.page.versions.toolbar.comparisonError",
                                      defaultMessage: "Comparison unavailable",
                                      description:
                                        "Status when a Page comparison failed; detailed error and retry controls appear in the document area",
                                    })
                                  : null,
                                "ready" === T && null == N
                                  ? (0, r.jsx)(h.A, {
                                      id: "codex.page.versions.toolbar.chooseComparison",
                                      defaultMessage: "Choose a comparison version",
                                      description:
                                        "Status when no valid baseline is available for the selected Page version",
                                    })
                                  : null,
                                "unavailable" === T
                                  ? (0, r.jsx)(h.A, {
                                      id: "codex.page.versions.toolbar.noEarlierComparison",
                                      defaultMessage: "No earlier version to compare",
                                      description:
                                        "Status when automatic Page comparison has no earlier saved version; this does not mean the document has no changes",
                                    })
                                  : null,
                                "ready" === T && 0 === N
                                  ? (0, r.jsx)(h.A, {
                                      id: "codex.page.versions.toolbar.noChanges",
                                      defaultMessage: "No changes",
                                      description:
                                        "Status when two compared Page versions have identical document content",
                                    })
                                  : null,
                                "same" === T
                                  ? (0, r.jsx)(h.A, {
                                      id: "codex.page.versions.toolbar.sameVersion",
                                      defaultMessage: "Same version selected",
                                      description:
                                        "Status when the viewed Page version and the comparison version are identical",
                                    })
                                  : null,
                                z && null == P
                                  ? (0, r.jsx)(h.A, {
                                      id: "codex.page.versions.toolbar.changeCount",
                                      defaultMessage: "{count, plural, one {# change} other {# changes}}",
                                      description:
                                        "Number of changed sections between two Page versions before navigating to a particular change",
                                      values: { count: N },
                                    })
                                  : null,
                                z && null != P
                                  ? (0, r.jsx)(h.A, {
                                      id: "codex.page.versions.toolbar.changePosition",
                                      defaultMessage: "{position} of {count}",
                                      description: "Position of the active changed section within the Page comparison",
                                      values: { position: P + 1, count: N },
                                    })
                                  : null,
                              ],
                            }),
                            (0, r.jsxs)(V.J5, {
                              label: R.formatMessage({
                                id: "codex.page.versions.toolbar.navigateChanges",
                                defaultMessage: "Navigate changes",
                                description:
                                  "Accessible label for the previous and next change controls in Page version history",
                              }),
                              children: [
                                (0, r.jsx)(V.K8, {
                                  uniform: !0,
                                  disabled: !z || null == P || 0 === P,
                                  "aria-label": R.formatMessage({
                                    id: "codex.page.versions.toolbar.previousChange",
                                    defaultMessage: "Previous change",
                                    description:
                                      "Navigate to the preceding changed section in the formatted Page comparison",
                                  }),
                                  onClick: () => {
                                    null != P && E(P - 1)
                                  },
                                  children: (0, r.jsx)(ed.I, { asset: ec.V }),
                                }),
                                (0, r.jsx)(V.K8, {
                                  uniform: !0,
                                  disabled: !z || (null != P && null != N && P >= N - 1),
                                  "aria-label": R.formatMessage({
                                    id: "codex.page.versions.toolbar.nextChange",
                                    defaultMessage: "Next change",
                                    description:
                                      "Navigate to the next changed section in the formatted Page comparison",
                                  }),
                                  onClick: () => E((P ?? -1) + 1),
                                  children: (0, r.jsx)($.Aq_, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                        null != L
                          ? (0, r.jsx)("div", { className: "col-start-1 row-start-1 grid items-center", children: L })
                          : null,
                      ],
                    }),
                  ],
                })
              : null),
            (m[19] = P),
            (m[20] = t),
            (m[21] = O),
            (m[22] = z),
            (m[23] = N),
            (m[24] = T),
            (m[25] = R),
            (m[26] = A),
            (m[27] = M),
            (m[28] = I),
            (m[29] = S),
            (m[30] = C),
            (m[31] = E),
            (m[32] = D),
            (m[33] = f),
            (m[34] = v),
            (m[35] = w),
            (m[36] = L),
            (m[37] = y),
            (m[38] = j),
            (m[39] = x),
            (m[40] = p))
          : (p = m[40]),
        m[41] !== c || m[42] !== p
          ? ((g = (0, r.jsxs)("div", { className: "flex flex-col gap-3 select-none", children: [c, p] })),
            (m[41] = c),
            (m[42] = p),
            (m[43] = g))
          : (g = m[43]),
        g
      )
    }
    function ew(e) {
      let t,
        n = (0, i.c)(4),
        o = (0, c.Ul)(w.spaceAccountId$),
        s = (0, c.Ul)(g.chatGptAuthenticatedUserId$)
      return (
        n[0] !== o || n[1] !== e || n[2] !== s
          ? ((t =
              null == o
                ? (0, r.jsx)(eN, {
                    pageId: e.pageId,
                    realtimeSession: e.realtimeSession,
                    visible: e.visible,
                    onClose: e.onClose,
                  })
                : (0, r.jsx)(e_, { ...e, accountId: o, userId: s }, JSON.stringify([o, s, e.pageId, e.streamKind]))),
            (n[0] = o),
            (n[1] = e),
            (n[2] = s),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    function e_(e) {
      let t,
        n,
        o,
        s,
        a = (0, i.c)(15),
        l = (0, c.gh)(k.u),
        h = (0, u.A)()
      a[0] !== h.formatMessage ||
      a[1] !== e.accountId ||
      a[2] !== e.pageId ||
      a[3] !== e.streamKind ||
      a[4] !== e.userId ||
      a[5] !== l
        ? ((t = () =>
            (function ({ scope: e, accountId: t, userId: n, pageId: r, streamKind: i, markdown: o }) {
              let s,
                a = null,
                l = new Map(),
                c = (function ({ scope: e, accountId: t, userId: n, pageId: r, streamKind: i }) {
                  let o,
                    s = new eo.q({ max: 12, maxSize: 8388608, sizeCalculation: el }),
                    a = new Map(),
                    l = new Set(),
                    c = new Set(),
                    d = new AbortController(),
                    u = !1,
                    h = !1,
                    g = 0
                  function m() {
                    if (null != o || u) return
                    let s = (0, w.watchSpaceAccount)(e, t, n),
                      a = (0, j.Xw)((n, o, s, a, l) => {
                        ;(n.chain.get(k.u.id) ?? n.node) === (e.chain.get(k.u.id) ?? e.node) &&
                          o === t &&
                          s === r &&
                          (l?.streamKind ?? "content") === i &&
                          v()
                      })
                    ;((o = () => {
                      ;(s.stop(), a(), s.signal.removeEventListener("abort", v))
                    }),
                      s.signal.addEventListener("abort", v, { once: !0 }),
                      s.signal.aborted && v())
                  }
                  function f() {
                    for (let e of ((u = !0), d.abort(), o?.(), (o = void 0), s.clear(), a.values())) y(e)
                  }
                  function v() {
                    if (!u) for (let e of ((h = !0), f(), c)) e()
                  }
                  function y(e) {
                    for (let t of (e.controller.abort(), e.subscribers)) t.reject(ea(e.controller.signal))
                    a.delete(e.checkpointId)
                  }
                  function b(e, t) {
                    let n = {
                      checkpointId: e,
                      controller: new AbortController(),
                      subscribers: new Set(),
                      prefetch: t,
                      started: !1,
                    }
                    return (a.set(e, n), n)
                  }
                  function S() {
                    for (; !u && l.size < 2;) {
                      let t = [...a.values()].filter((e) => !e.started),
                        n =
                          t.find((e) => !e.prefetch) ??
                          ([...l].some((e) => e.prefetch) ? void 0 : t.find((e) => e.prefetch))
                      if (null == n) return
                      ;((n.started = !0),
                        l.add(n),
                        (async function (t) {
                          let n = (0, p.l)(
                            e,
                            "version_snapshot",
                            { stream_kind: i, source: t.prefetch ? "prefetch" : "requested" },
                            t.controller.signal,
                          )
                          try {
                            let e = await (0, ee.y)({
                              pageId: r,
                              checkpointId: t.checkpointId,
                              streamKind: i,
                              signal: t.controller.signal,
                            })
                            t.controller.signal.throwIfAborted()
                            let o = (0, es.g)(e)
                            if (null == o) throw Error("The Page checkpoint contains an invalid document")
                            for (let e of (s.set(t.checkpointId, o), n("success"), t.subscribers)) e.resolve(o)
                          } catch (i) {
                            ;(t.controller.signal.aborted ||
                              (i instanceof M.fk && [401, 403, 404].includes(i.status)) ||
                              (0, x.ZD)(e.get(_.YV), "pages.version.load", i),
                              n(t.controller.signal.aborted ? "canceled" : "failure"),
                              !t.controller.signal.aborted &&
                                i instanceof M.fk &&
                                (401 === i.status || 403 === i.status) &&
                                v())
                            let r = i instanceof Error ? i : Error("The Page version could not be loaded", { cause: i })
                            for (let e of t.subscribers) e.reject(r)
                          } finally {
                            ;(a.get(t.checkpointId) === t && a.delete(t.checkpointId), l.delete(t), S())
                          }
                        })(n))
                    }
                  }
                  return {
                    signal: d.signal,
                    retain: () => (
                      (g += 1),
                      m(),
                      () => {
                        ;((g -= 1),
                          queueMicrotask(() => {
                            0 === g && f()
                          }))
                      }
                    ),
                    subscribeInvalidation: (e) => (
                      c.add(e),
                      m(),
                      () => {
                        c.delete(e)
                      }
                    ),
                    getInvalidated: () => h,
                    peek: (e) => s.get(e),
                    read(e, t) {
                      if ((m(), u || t.aborted)) return Promise.reject(ea(t))
                      let n = s.get(e)
                      if (null != n) return Promise.resolve(n)
                      let r = a.get(e)
                      if (
                        (null == r || (!r.started && r.prefetch)) &&
                        [...a.values()].filter((e) => !e.started && !e.prefetch).length >= 2
                      )
                        return Promise.reject(new DOMException("Page version request superseded", "AbortError"))
                      let i = r ?? b(e, !1)
                      return (
                        (i.prefetch = !1),
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
                              ;(t.removeEventListener("abort", s), i.subscribers.delete(r))
                            },
                            s = () => {
                              ;(r.reject(ea(t)), 0 !== i.subscribers.size || i.prefetch || y(i))
                            }
                          ;(i.subscribers.add(r), t.addEventListener("abort", s, { once: !0 }), S())
                        })
                      )
                    },
                    prefetch(e) {
                      if ((m(), u)) return
                      let t = new Set(e.slice(0, 2))
                      for (let e of a.values()) e.prefetch && !t.has(e.checkpointId) && y(e)
                      for (let e of t) s.has(e) || a.has(e) || b(e, !0)
                      S()
                    },
                    dispose: f,
                  }
                })({ scope: e, accountId: t, userId: n, pageId: r, streamKind: i })
              function d(e) {
                let t = l.get(e)
                return (null != t && (l.delete(e), l.set(e, t)), t)
              }
              return (
                c.signal.addEventListener(
                  "abort",
                  () => {
                    ;((a = null), (s = void 0), l.clear())
                  },
                  { once: !0 },
                ),
                {
                  loader: c,
                  peekSnapshot(e) {
                    if (void 0 !== e) return null == e ? s : c.peek(e)
                  },
                  peekComparison: d,
                  readCurrent: (t) =>
                    null != a
                      ? a
                      : (a = Promise.resolve()
                          .then(async () => {
                            if ((c.signal.throwIfAborted(), null == t)) throw Error("The current Page is not available")
                            let e = await t()
                            c.signal.throwIfAborted()
                            let n = (0, es.g)(e)
                            if (null == n) throw Error("The current Page snapshot is invalid")
                            return ((s = n), n)
                          })
                          .catch((n) => {
                            throw (
                              c.signal.aborted || null == t || (0, x.ZD)(e.get(_.YV), "pages.version.snapshot", n),
                              (a = null),
                              n
                            )
                          })),
                  async prepare(t, n, r, i) {
                    let s = AbortSignal.any([i, c.signal])
                    s.throwIfAborted()
                    let a = d(r)
                    if (null != a) return a
                    try {
                      let e = await (0, ei.a)({ snapshot: n, baseline: t, markdown: o, signal: s })
                      s.throwIfAborted()
                      let i = t === n ? 0 : (0, er.N)(t, o).document.nodeSize
                      if (e.document.nodeSize + i <= 25e4)
                        for (l.set(r, e); l.size > 4;) {
                          let e = l.keys().next().value
                          null != e && l.delete(e)
                        }
                      return e
                    } catch (t) {
                      throw (s.aborted || (0, x.ZD)(e.get(_.YV), "pages.version.compare", t), t)
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
              markdown: (0, v.Je)(h.formatMessage),
            })),
          (a[0] = h.formatMessage),
          (a[1] = e.accountId),
          (a[2] = e.pageId),
          (a[3] = e.streamKind),
          (a[4] = e.userId),
          (a[5] = l),
          (a[6] = t))
        : (t = a[6])
      let [g] = (0, d.useState)(t)
      ;(a[7] !== g.loader ? ((n = () => g.loader.retain()), (a[7] = g.loader), (a[8] = n)) : (n = a[8]),
        a[9] !== g ? ((o = [g]), (a[9] = g), (a[10] = o)) : (o = a[10]),
        (0, d.useEffect)(n, o))
      let m = (0, d.useSyncExternalStore)(
        g.loader.subscribeInvalidation,
        g.loader.getInvalidated,
        g.loader.getInvalidated,
      )
      return (
        a[11] !== m || a[12] !== e || a[13] !== g
          ? ((s = m
              ? (0, r.jsx)(eN, {
                  pageId: e.pageId,
                  realtimeSession: e.realtimeSession,
                  visible: e.visible,
                  onClose: e.onClose,
                })
              : (0, r.jsx)(ek, { ...e, session: g })),
            (a[11] = m),
            (a[12] = e),
            (a[13] = g),
            (a[14] = s))
          : (s = a[14]),
        s
      )
    }
    function ek(e) {
      let t,
        n,
        g,
        m,
        v,
        y,
        w,
        P,
        N,
        D,
        T,
        L,
        $,
        R,
        q,
        z,
        O,
        F,
        V,
        K,
        H,
        B,
        U,
        G,
        J,
        W,
        Z,
        Q,
        X,
        ee = (0, i.c)(173),
        {
          realtimeSession: en,
          visible: er,
          accountId: ei,
          userId: eo,
          pageId: es,
          streamKind: ea,
          getCurrentUpdate: el,
          isPanelOpen: ec,
          renderPanel: ed,
          onClose: eu,
          onRestore: eh,
          session: ep,
        } = e,
        eg = (0, c.gh)(k.u),
        em = (0, u.A)(),
        ef = (0, d.useId)(),
        { loader: ev, readCurrent: ex, prepare: ey } = ep,
        [eb, ew] = (0, d.useState)(null),
        [e_, ek] = (0, d.useState)(null)
      ee[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { kind: "previous" }), (ee[0] = t)) : (t = ee[0])
      let [eM, eN] = (0, d.useState)(t),
        [eD, eT] = (0, d.useState)(!1),
        eL = eD ? e_ : eb,
        e$ = eL?.checkpoint_id ?? null,
        [eR, eq] = (0, d.useState)(null)
      ;(ee[1] !== ei || ee[2] !== es || ee[3] !== ea || ee[4] !== eo
        ? ((n = ["space", "page-version-history", ei, es, ea, eo]),
          (ee[1] = ei),
          (ee[2] = es),
          (ee[3] = ea),
          (ee[4] = eo),
          (ee[5] = n))
        : (n = ee[5]),
        ee[6] !== ei || ee[7] !== ev || ee[8] !== es || ee[9] !== eg || ee[10] !== ea
          ? ((g = async (e) => {
              let { pageParam: t, signal: n } = e,
                r = (0, p.l)(
                  eg,
                  "version_history",
                  { stream_kind: ea, page: t ? "older" : "initial" },
                  AbortSignal.any([n, ev.signal]),
                )
              try {
                let e = await C.CodexRequest.safeGet("/pages/{page_id}/versions", {
                  parameters: { path: { page_id: es }, query: { cursor: t || void 0, limit: 20, stream_kind: ea } },
                  signal: AbortSignal.any([n, ev.signal]),
                })
                return (r("success"), e)
              } catch (e) {
                throw (
                  n.aborted ||
                    ev.signal.aborted ||
                    (e instanceof M.fk && [401, 403, 404].includes(e.status)) ||
                    (0, x.ZD)(eg.get(_.YV), "pages.version.history", e),
                  r(n.aborted || ev.signal.aborted ? "canceled" : "failure"),
                  !n.aborted &&
                    !ev.signal.aborted &&
                    e instanceof M.fk &&
                    (401 === e.status || 403 === e.status) &&
                    (0, j.F1)(eg, ei, es, "page_read_forbidden", { definitive: !0, streamKind: ea, error: e }),
                  e
                )
              }
            }),
            (ee[6] = ei),
            (ee[7] = ev),
            (ee[8] = es),
            (ee[9] = eg),
            (ee[10] = ea),
            (ee[11] = g))
          : (g = ee[11]),
        ee[12] !== n || ee[13] !== g
          ? ((m = {
              queryKey: n,
              initialPageParam: "",
              getNextPageParam: eP,
              queryFn: g,
              staleTime: S.D.THIRTY_SECONDS,
              refetchOnMount: "always",
              refetchOnWindowFocus: !1,
              retry: !1,
            }),
            (ee[12] = n),
            (ee[13] = g),
            (ee[14] = m))
          : (m = ee[14]))
      let {
          data: ez,
          fetchNextPage: eO,
          hasNextPage: eF,
          isFetchingNextPage: eV,
          isFetchNextPageError: eK,
          isPending: eH,
          isError: eB,
          error: eU,
          refetch: eY,
        } = (0, s.q)(m),
        eG = ez?.pages.flatMap(eI).sort(eA),
        eJ = eG?.findIndex((e) => e.checkpoint_id === e$) ?? -1,
        eW = eG?.[0]
      null != e$ && (eW = eJ < 0 ? void 0 : eG?.[eJ + 1])
      let eZ = eW?.checkpoint_id
      "current" === eM.kind ? (eZ = null) : "checkpoint" === eM.kind && (eZ = eM.checkpointId)
      let eQ = null != e$ && eJ >= 0 && null == eW && eF
      ee[15] !== ez?.pages ? ((v = new Map(ez?.pages.flatMap(eC))), (ee[15] = ez?.pages), (ee[16] = v)) : (v = ee[16])
      let eX = v,
        e1 = ["space", "page-version-review", ei, eo, es, ea, ef]
      ee[17] !== e$ || ee[18] !== ep
        ? ((y = () => ep.peekSnapshot(e$)), (ee[17] = e$), (ee[18] = ep), (ee[19] = y))
        : (y = ee[19])
      let {
          data: e0,
          isError: e2,
          error: e3,
          refetch: e4,
        } = (0, a.I)({
          enabled: null != e$ || null != el,
          initialData: y,
          queryKey: [...e1, "snapshot", { checkpointId: e$ }],
          queryFn: async (e) => {
            let { signal: t } = e,
              n = null == e$ ? await ex(el) : await ev.read(e$, t)
            return (
              t.throwIfAborted(),
              ev.signal.throwIfAborted(),
              ev.prefetch([eW?.checkpoint_id, eG?.[eJ - 1]?.checkpoint_id].filter(eS)),
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
          error: e7,
          refetch: e9,
        } = (0, a.I)({
          enabled: eD && void 0 !== eZ && ("current" !== eM.kind || null != el),
          initialData: () => ep.peekSnapshot(eZ),
          queryKey: [...e1, "snapshot", { checkpointId: eZ }],
          queryFn: async (e) => {
            let { signal: t } = e
            if (void 0 === eZ) throw Error("No comparison version selected")
            let n = null == eZ ? await ex(el) : await ev.read(eZ, t)
            return (t.throwIfAborted(), ev.signal.throwIfAborted(), n)
          },
          staleTime: 1 / 0,
          gcTime: 0,
          retry: !1,
        }),
        e8 = JSON.stringify({ selectedId: e$, baseline: eZ })
      ee[20] !== e0 ? ((w = (e) => (e?.snapshot === e0 ? e : void 0)), (ee[20] = e0), (ee[21] = w)) : (w = ee[21])
      let {
        data: te,
        isPlaceholderData: tt,
        isError: tn,
        error: tr,
        refetch: ti,
      } = (0, a.I)({
        enabled: eD && void 0 !== eZ && null != e0 && null != e5,
        initialData: () => ep.peekComparison(e8),
        queryKey: [...e1, "comparison", { selectedId: e$, baseline: eZ }],
        queryFn: (e) => {
          let { signal: t } = e
          if (null == e0 || null == e5) throw Error("The comparison snapshots are unavailable")
          return ey(e5, e0, e8, t)
        },
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        placeholderData: w,
      })
      ee[22] !== ey || ee[23] !== e$ || ee[24] !== e0
        ? ((P = (e) => {
            let { signal: t } = e
            if (null == e0) throw Error("No Page snapshot loaded")
            return ey(e0, e0, JSON.stringify([e$]), t)
          }),
          (ee[22] = ey),
          (ee[23] = e$),
          (ee[24] = e0),
          (ee[25] = P))
        : (P = ee[25])
      let {
          data: to,
          isError: ts,
          error: ta,
          refetch: tl,
        } = (0, a.I)({
          enabled:
            null != e0 &&
            null == te &&
            (!eD || e6 || tn || (void 0 === eZ && !eQ && !eH) || ("previous" === eM.kind && eQ && eB)),
          initialData: () => ep.peekComparison(e8) ?? ep.peekComparison(JSON.stringify([e$])),
          queryKey: [...e1, "document", e$],
          queryFn: P,
          staleTime: 1 / 0,
          gcTime: 0,
          retry: !1,
        }),
        tc = tt ? void 0 : te,
        td = eR?.pair === e8 ? eR.index : null,
        tu = null == tc ? "pending" : "ready"
      ;(null == tc && (null == e0 || null == e5) && (tu = "loading"),
        e2 || ts || e6 || tn || ("previous" === eM.kind && eQ && eB)
          ? (tu = "error")
          : void 0 !== eZ || eQ || eH
            ? null != tc && e$ === eZ && (tu = "same")
            : (tu = "unavailable"))
      let th = eD && ("loading" === tu || "pending" === tu),
        tp = tc ?? (th ? te : void 0),
        [tg, tm] = (0, d.useState)(),
        tf = tg?.snapshot === e0 ? tg : void 0,
        tv = tf ?? to ?? tc
      ;(eD && null != tp ? (tv = tp) : th && (tv = tf), tg !== tv && tm(tv))
      let tx = !e2 && !ts && (null == tv || th)
      ee[26] !== eu
        ? ((N = (e) => {
            "Escape" !== e.key || e.defaultPrevented || (e.stopPropagation(), eu())
          }),
          (ee[26] = eu),
          (ee[27] = N))
        : (N = ee[27])
      let ty = N
      ee[28] !== e_ || ee[29] !== eD
        ? ((D = (e) => {
            ;(eN(null == e ? { kind: "current" } : { kind: "checkpoint", checkpointId: e.checkpoint_id }),
              !eD && (ew(e), null != e_ && (null == e || e.through_sequence > e_.through_sequence) && ek(null)))
          }),
          (ee[28] = e_),
          (ee[29] = eD),
          (ee[30] = D))
        : (D = ee[30])
      let tb = D,
        tj = function (e) {
          ;("previous" === eM.kind &&
            void 0 !== eZ &&
            eN(null == eZ ? { kind: "current" } : { kind: "checkpoint", checkpointId: eZ }),
            ek(e),
            void 0 === eZ && null != e && e === eG?.at(-1) && eF && eO())
        },
        tw = eD ? eG?.find((e) => e.checkpoint_id === eZ) : eL,
        t_ = eD ? null != e5 && !e6 : null != e0 && !e2,
        tk = !1 !== er && ec
      ee[31] !== eG ? ((T = eG ?? []), (ee[31] = eG), (ee[32] = T)) : (T = ee[32])
      let tS = ez?.pages[0]?.current_editor_summary
      ;(ee[33] !== eO || ee[34] !== eF
        ? ((L = eF
            ? () => {
                eO()
              }
            : void 0),
          (ee[33] = eO),
          (ee[34] = eF),
          (ee[35] = L))
        : (L = ee[35]),
        ee[36] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (e) => eN(null == e ? { kind: "current" } : { kind: "checkpoint", checkpointId: e })), (ee[36] = $))
          : ($ = ee[36]),
        ee[37] !== tx ||
        ee[38] !== ev ||
        ee[39] !== eu ||
        ee[40] !== eh ||
        ee[41] !== es ||
        ee[42] !== en ||
        ee[43] !== t_ ||
        ee[44] !== tw ||
        ee[45] !== ea ||
        ee[46] !== er
          ? ((R =
              null != tw && null != eh
                ? (0, r.jsx)(
                    et,
                    {
                      realtimeSession: en,
                      visible: er,
                      pageId: es,
                      streamKind: ea,
                      version: tw,
                      ready: t_ && !tx,
                      signal: ev.signal,
                      onRestore: eh,
                      onRestored: eu,
                    },
                    tw.checkpoint_id,
                  )
                : null),
            (ee[37] = tx),
            (ee[38] = ev),
            (ee[39] = eu),
            (ee[40] = eh),
            (ee[41] = es),
            (ee[42] = en),
            (ee[43] = t_),
            (ee[44] = tw),
            (ee[45] = ea),
            (ee[46] = er),
            (ee[47] = R))
          : (R = ee[47]),
        ee[48] !== td ||
        ee[49] !== eM ||
        ee[50] !== tc?.changes.length ||
        ee[51] !== tu ||
        ee[52] !== eO ||
        ee[53] !== eF ||
        ee[54] !== eU ||
        ee[55] !== eK ||
        ee[56] !== eV ||
        ee[57] !== ec ||
        ee[58] !== eQ ||
        ee[59] !== es ||
        ee[60] !== e8 ||
        ee[61] !== eb ||
        ee[62] !== eW ||
        ee[63] !== en ||
        ee[64] !== tw ||
        ee[65] !== tj ||
        ee[66] !== eL ||
        ee[67] !== eD ||
        ee[68] !== eG ||
        ee[69] !== er
          ? ((q = (e) =>
              (0, r.jsx)(ej, {
                pageId: es,
                realtimeSession: en,
                visible: !1 !== er && ec,
                selectionControls: e,
                versions: eG ?? [],
                selectedVersion: eL,
                previousVersion: eW,
                showChanges: eD,
                onShowChangesChange: (e) => {
                  ;(e ? null != eb && eN({ kind: "checkpoint", checkpointId: eb.checkpoint_id }) : ew(tw ?? null),
                    eT(e),
                    e && "previous" === eM.kind && eQ && eO())
                },
                baselineSelection: eM,
                onLoadMore: eF
                  ? () => {
                      eO()
                    }
                  : void 0,
                isLoadingMore: eV,
                isLoadMoreError: eK,
                loadMoreError: eU,
                onBaselineChange: (e) => {
                  ;(eN(e), "previous" === e.kind && eQ && eO())
                },
                activeChange: td,
                changeCount: tc?.changes.length ?? null,
                onNavigateChange: (e) => eq({ pair: e8, index: e }),
                onSelectVersion: tj,
                comparisonStatus: tu,
              })),
            (ee[48] = td),
            (ee[49] = eM),
            (ee[50] = tc?.changes.length),
            (ee[51] = tu),
            (ee[52] = eO),
            (ee[53] = eF),
            (ee[54] = eU),
            (ee[55] = eK),
            (ee[56] = eV),
            (ee[57] = ec),
            (ee[58] = eQ),
            (ee[59] = es),
            (ee[60] = e8),
            (ee[61] = eb),
            (ee[62] = eW),
            (ee[63] = en),
            (ee[64] = tw),
            (ee[65] = tj),
            (ee[66] = eL),
            (ee[67] = eD),
            (ee[68] = eG),
            (ee[69] = er),
            (ee[70] = q))
          : (q = ee[70]),
        ee[71] !== eH ? ((z = eH ? (0, r.jsx)(E, {}) : null), (ee[71] = eH), (ee[72] = z)) : (z = ee[72]),
        ee[73] !== eB ||
        ee[74] !== eU ||
        ee[75] !== eK ||
        ee[76] !== ec ||
        ee[77] !== es ||
        ee[78] !== en ||
        ee[79] !== eY ||
        ee[80] !== er
          ? ((O =
              eB && !eK
                ? (0, r.jsx)(eE, {
                    pageId: es,
                    realtimeSession: en,
                    visible: !1 !== er && ec,
                    kind: "history",
                    error: eU,
                    onRetry: () => {
                      eY()
                    },
                  })
                : null),
            (ee[73] = eB),
            (ee[74] = eU),
            (ee[75] = eK),
            (ee[76] = ec),
            (ee[77] = es),
            (ee[78] = en),
            (ee[79] = eY),
            (ee[80] = er),
            (ee[81] = O))
          : (O = ee[81]),
        ee[82] !== eG?.length
          ? ((F =
              eG?.length === 0
                ? (0, r.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(h.A, {
                      id: "codex.page.versions.noSavedVersions",
                      defaultMessage: "No saved versions yet",
                      description: "Empty state when a Page has no stored historical checkpoints",
                    }),
                  })
                : null),
            (ee[82] = eG?.length),
            (ee[83] = F))
          : (F = ee[83]),
        ee[84] !== eZ ||
        ee[85] !== eU ||
        ee[86] !== eK ||
        ee[87] !== eV ||
        ee[88] !== eX ||
        ee[89] !== eu ||
        ee[90] !== es ||
        ee[91] !== en ||
        ee[92] !== tj ||
        ee[93] !== tb ||
        ee[94] !== e$ ||
        ee[95] !== eD ||
        ee[96] !== tk ||
        ee[97] !== T ||
        ee[98] !== tS ||
        ee[99] !== L ||
        ee[100] !== R ||
        ee[101] !== q ||
        ee[102] !== z ||
        ee[103] !== O ||
        ee[104] !== F
          ? ((V = (0, r.jsxs)(Y, {
              pageId: es,
              realtimeSession: en,
              visible: tk,
              showHeader: !1,
              selectedId: e$,
              baselineId: eZ,
              showChanges: eD,
              versions: T,
              names: eX,
              currentSummary: tS,
              onLoadMore: L,
              isLoadingMore: eV,
              isLoadMoreError: eK,
              loadMoreError: eU,
              onBaselineChange: $,
              onSelect: tb,
              onSelectEnd: tj,
              onClose: eu,
              restoreAction: R,
              renderControls: q,
              children: [z, O, F],
            })),
            (ee[84] = eZ),
            (ee[85] = eU),
            (ee[86] = eK),
            (ee[87] = eV),
            (ee[88] = eX),
            (ee[89] = eu),
            (ee[90] = es),
            (ee[91] = en),
            (ee[92] = tj),
            (ee[93] = tb),
            (ee[94] = e$),
            (ee[95] = eD),
            (ee[96] = tk),
            (ee[97] = T),
            (ee[98] = tS),
            (ee[99] = L),
            (ee[100] = R),
            (ee[101] = q),
            (ee[102] = z),
            (ee[103] = O),
            (ee[104] = F),
            (ee[105] = V))
          : (V = ee[105]))
      let tC = V,
        tM = eD && ((e6 && eZ !== e$) || tn || ("previous" === eM.kind && eQ && eB)),
        tA = e2 || ts
      ;(ee[106] !== em
        ? ((K = em.formatMessage({
            id: "codex.page.versions.workspaceLabel",
            defaultMessage: "Page version history",
            description: "Accessible label for the read-only Page history and comparison workspace",
          })),
          (ee[106] = em),
          (ee[107] = K))
        : (K = ee[107]),
        ee[108] !== e6 ||
        ee[109] !== e7 ||
        ee[110] !== ta ||
        ee[111] !== tn ||
        ee[112] !== tM ||
        ee[113] !== tr ||
        ee[114] !== tA ||
        ee[115] !== eO ||
        ee[116] !== eU ||
        ee[117] !== eQ ||
        ee[118] !== es ||
        ee[119] !== en ||
        ee[120] !== e9 ||
        ee[121] !== tl ||
        ee[122] !== ti ||
        ee[123] !== e4 ||
        ee[124] !== e2 ||
        ee[125] !== e3 ||
        ee[126] !== er
          ? ((H =
              tM || tA
                ? (0, r.jsxs)("div", {
                    className: "pt-[var(--page-header-clearance,0px)]",
                    children: [
                      tM
                        ? (0, r.jsx)(eE, {
                            pageId: es,
                            realtimeSession: en,
                            visible: er,
                            kind: "comparison",
                            error: e7 ?? tr ?? eU,
                            onRetry: () => {
                              ;(e6 ? e9() : tn && ti(), eQ && eO())
                            },
                          })
                        : null,
                      tA
                        ? (0, r.jsx)(eE, {
                            pageId: es,
                            realtimeSession: en,
                            visible: er,
                            error: e3 ?? ta,
                            onRetry: () => {
                              e2 ? e4() : tl()
                            },
                          })
                        : null,
                    ],
                  })
                : null),
            (ee[108] = e6),
            (ee[109] = e7),
            (ee[110] = ta),
            (ee[111] = tn),
            (ee[112] = tM),
            (ee[113] = tr),
            (ee[114] = tA),
            (ee[115] = eO),
            (ee[116] = eU),
            (ee[117] = eQ),
            (ee[118] = es),
            (ee[119] = en),
            (ee[120] = e9),
            (ee[121] = tl),
            (ee[122] = ti),
            (ee[123] = e4),
            (ee[124] = e2),
            (ee[125] = e3),
            (ee[126] = er),
            (ee[127] = H))
          : (H = ee[127]))
      let tI = (tM || tA) && "[--page-header-clearance:0px]"
      ee[128] !== tI
        ? ((B = (0, l.A)("relative flex min-h-0 flex-1 flex-col", tI)), (ee[128] = tI), (ee[129] = B))
        : (B = ee[129])
      let tP = `flex min-h-0 flex-1 flex-col${th ? " invisible" : ""}`,
        tN = th || void 0
      return (
        ee[130] !== td ||
        ee[131] !== eZ ||
        ee[132] !== ts ||
        ee[133] !== tc?.changes ||
        ee[134] !== th ||
        ee[135] !== tv ||
        ee[136] !== tp ||
        ee[137] !== es ||
        ee[138] !== en ||
        ee[139] !== e$ ||
        ee[140] !== eL?.created_at ||
        ee[141] !== eD ||
        ee[142] !== e2 ||
        ee[143] !== eG ||
        ee[144] !== er
          ? ((U =
              e2 || ts || null == tv
                ? null
                : (0, r.jsx)(
                    f.t,
                    {
                      name: "PageVersionComparison",
                      fallback: (e) =>
                        (0, r.jsx)("div", {
                          className: "pt-[var(--page-header-clearance,0px)]",
                          children: (0, r.jsx)(eE, {
                            pageId: es,
                            realtimeSession: en,
                            visible: !1 !== er && !th,
                            errorUiType: o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_RENDER_ERROR,
                            error: e.error,
                            onRetry: () => e.resetError(),
                          }),
                        }),
                      children: (0, r.jsx)(A.M, {
                        pageId: es,
                        comparison: tv,
                        baselineDate:
                          null == eZ
                            ? eZ
                            : eG?.find((e) => {
                                let { checkpoint_id: t } = e
                                return t === eZ
                              })?.created_at,
                        selectedDate: eL?.created_at ?? null,
                        showChanges: eD && null != tp,
                        activeChangeId: null == td ? null : (tc?.changes[td]?.id ?? null),
                      }),
                    },
                    e$,
                  )),
            (ee[130] = td),
            (ee[131] = eZ),
            (ee[132] = ts),
            (ee[133] = tc?.changes),
            (ee[134] = th),
            (ee[135] = tv),
            (ee[136] = tp),
            (ee[137] = es),
            (ee[138] = en),
            (ee[139] = e$),
            (ee[140] = eL?.created_at),
            (ee[141] = eD),
            (ee[142] = e2),
            (ee[143] = eG),
            (ee[144] = er),
            (ee[145] = U))
          : (U = ee[145]),
        ee[146] !== th || ee[147] !== tP || ee[148] !== tN || ee[149] !== U
          ? ((G = (0, r.jsx)("div", { className: tP, "aria-hidden": tN, inert: th, children: U })),
            (ee[146] = th),
            (ee[147] = tP),
            (ee[148] = tN),
            (ee[149] = U),
            (ee[150] = G))
          : (G = ee[150]),
        ee[151] !== th || ee[152] !== tx
          ? ((J = tx
              ? (0, r.jsx)("div", {
                  className: "absolute inset-0 flex flex-col pt-[var(--page-header-clearance,0px)]",
                  children: (0, r.jsx)(I.f, { comparison: th }),
                })
              : null),
            (ee[151] = th),
            (ee[152] = tx),
            (ee[153] = J))
          : (J = ee[153]),
        ee[154] !== tx || ee[155] !== B || ee[156] !== G || ee[157] !== J
          ? ((W = (0, r.jsxs)("div", { className: B, "aria-busy": tx, children: [G, J] })),
            (ee[154] = tx),
            (ee[155] = B),
            (ee[156] = G),
            (ee[157] = J),
            (ee[158] = W))
          : (W = ee[158]),
        ee[159] !== ty || ee[160] !== K || ee[161] !== H || ee[162] !== W
          ? ((Z = (0, r.jsxs)("section", {
              className: "flex min-h-0 min-w-0 flex-1 flex-col",
              "aria-label": K,
              "data-page-version-history": !0,
              onKeyDown: ty,
              children: [H, W],
            })),
            (ee[159] = ty),
            (ee[160] = K),
            (ee[161] = H),
            (ee[162] = W),
            (ee[163] = Z))
          : (Z = ee[163]),
        ee[164] !== ec || ee[165] !== eu || ee[166] !== es || ee[167] !== ed || ee[168] !== tC
          ? ((Q =
              null == ed
                ? (0, r.jsx)(b.D, {
                    open: ec,
                    pageId: es,
                    view: "versions",
                    canViewEdits: !1,
                    canViewHistory: !1,
                    onClose: eu,
                    versions: tC,
                  })
                : ed(tC)),
            (ee[164] = ec),
            (ee[165] = eu),
            (ee[166] = es),
            (ee[167] = ed),
            (ee[168] = tC),
            (ee[169] = Q))
          : (Q = ee[169]),
        ee[170] !== Z || ee[171] !== Q
          ? ((X = (0, r.jsxs)("div", {
              className: "@container/page-activity relative flex min-h-0 flex-1",
              children: [Z, Q],
            })),
            (ee[170] = Z),
            (ee[171] = Q),
            (ee[172] = X))
          : (X = ee[172]),
        X
      )
    }
    function eS(e) {
      return null != e
    }
    function eC(e) {
      return e.actor_displays?.map(eM) ?? []
    }
    function eM(e) {
      return [e.account_user_id, e.display_name]
    }
    function eA(e, t) {
      return t.through_sequence - e.through_sequence
    }
    function eI(e) {
      return e.items
    }
    function eP(e) {
      return e.next_cursor ?? void 0
    }
    function eN(e) {
      let t,
        n,
        o,
        s,
        a,
        l = (0, i.c)(11),
        { pageId: c, realtimeSession: d, visible: u, onClose: p } = e
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
          ? ((n = (0, r.jsx)(h.A, {
              id: "codex.page.versions.sessionUnavailable",
              defaultMessage: "Version history is no longer available. Your account or Page access may have changed",
              description:
                "Shown when Page version history loses its account context or authorization, requiring the user to leave the history session",
            })),
            (l[4] = n))
          : (n = l[4]),
        l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(h.A, {
              id: "codex.space.page.activity.close",
              defaultMessage: "Close page activity",
              description: "Accessible label for closing the Page activity side panel",
            })),
            (l[5] = o))
          : (o = l[5]),
        l[6] !== p
          ? ((s = (0, r.jsx)(m.$, { autoFocus: !0, color: "secondary", size: "compact", onClick: p, children: o })),
            (l[6] = p),
            (l[7] = s))
          : (s = l[7]),
        l[8] !== t || l[9] !== s
          ? ((a = (0, r.jsxs)("div", {
              className:
                "mt-[var(--page-header-clearance,0px)] flex items-center justify-between gap-3 p-panel text-sm text-secondary select-none",
              role: "alert",
              children: [t, n, s],
            })),
            (l[8] = t),
            (l[9] = s),
            (l[10] = a))
          : (a = l[10]),
        a
      )
    }
    function eE(e) {
      let t,
        n,
        o,
        s,
        a,
        l,
        c,
        d = (0, i.c)(22),
        { pageId: u, realtimeSession: p, visible: g, kind: f, error: v, errorUiType: x, onRetry: b } = e,
        j = void 0 === f ? "preview" : f,
        w = "pages.version.load"
      return (
        "history" === j && (w = "pages.version.history"),
        "comparison" === j && (w = "pages.version.compare"),
        d[0] !== v || d[1] !== x || d[2] !== w || d[3] !== u || d[4] !== p || d[5] !== g
          ? ((t = (0, r.jsx)(y.It, {
              pageId: u,
              session: p,
              visible: g,
              operation: w,
              error: v,
              errorUiType: x,
              kind: "load",
              recoveryUi: "notice",
            })),
            (d[0] = v),
            (d[1] = x),
            (d[2] = w),
            (d[3] = u),
            (d[4] = p),
            (d[5] = g),
            (d[6] = t))
          : (t = d[6]),
        d[7] !== j
          ? ((n =
              "history" === j
                ? (0, r.jsx)(h.A, {
                    id: "codex.page.versions.historyError",
                    defaultMessage: "Could not load version history",
                    description:
                      "Error when the list of saved Page versions could not be loaded; the adjacent action retries",
                  })
                : null),
            (d[7] = j),
            (d[8] = n))
          : (n = d[8]),
        d[9] !== j
          ? ((o =
              "comparison" === j
                ? (0, r.jsx)(h.A, {
                    id: "codex.page.versions.comparisonError",
                    defaultMessage: "Could not compare these versions",
                    description: "Error when loading or comparing Page versions failed; the adjacent action retries",
                  })
                : null),
            (d[9] = j),
            (d[10] = o))
          : (o = d[10]),
        d[11] !== j
          ? ((s =
              "preview" === j
                ? (0, r.jsx)(h.A, {
                    id: "codex.page.versions.previewError",
                    defaultMessage: "Could not load this version",
                    description: "Error when a saved Page checkpoint is unavailable or cannot be verified",
                  })
                : null),
            (d[11] = j),
            (d[12] = s))
          : (s = d[12]),
        d[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(h.A, {
              id: "codex.page.versions.retry",
              defaultMessage: "Try again",
              description: "Retry loading Page version history or a historical checkpoint after a failure",
            })),
            (d[13] = a))
          : (a = d[13]),
        d[14] !== b
          ? ((l = (0, r.jsx)(m.$, { color: "secondary", size: "compact", onClick: b, children: a })),
            (d[14] = b),
            (d[15] = l))
          : (l = d[15]),
        d[16] !== t || d[17] !== n || d[18] !== o || d[19] !== s || d[20] !== l
          ? ((c = (0, r.jsxs)("div", {
              className: "flex items-center justify-between gap-3 p-panel text-sm text-secondary",
              role: "alert",
              children: [t, n, o, s, l],
            })),
            (d[16] = t),
            (d[17] = n),
            (d[18] = o),
            (d[19] = s),
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
      i = n("QosV"),
      o = n("on57"),
      s = n("Qgfj"),
      a = n("oyxz"),
      l = n("KIKs"),
      c = n("zd8w")
    function d(e) {
      let t,
        n,
        o,
        s,
        a = (0, i.c)(15),
        { animate: l, fromIndex: d, toIndex: u, fromControl: h, toControl: p, activeEndpoint: g } = e,
        m = (0, c.useRef)(null),
        [f, v] = (0, c.useState)(null)
      ;(a[0] !== d || a[1] !== u
        ? ((t = () => {
            let e = m.current?.parentElement
            if (null == e) return
            let t = e.querySelector(`[data-version-history-index="${d}"]`),
              n = e.querySelector(`[data-version-history-index="${u}"]`)
            if (null == t || null == n) return
            let r = () => {
              let r = e.getBoundingClientRect(),
                i = t.getBoundingClientRect(),
                o = n.getBoundingClientRect(),
                s = e.offsetWidth > 0 ? r.width / e.offsetWidth : 1,
                a = { from: (i.top + i.height / 2 - r.top) / s, to: (o.top + o.height / 2 - r.top) / s }
              v((e) => (e?.from === a.from && e.to === a.to ? e : a))
            }
            r()
            let i = new ResizeObserver(r)
            return (i.observe(e), i.observe(t), i.observe(n), () => i.disconnect())
          }),
          (n = [d, u]),
          (a[0] = d),
          (a[1] = u),
          (a[2] = t),
          (a[3] = n))
        : ((t = a[2]), (n = a[3])),
        (0, c.useLayoutEffect)(t, n))
      let x = `translateY(${f?.from ?? 0}px)`,
        y = `translateY(${f?.to ?? 0}px)`,
        b = d === u
      return (
        a[4] !== g || a[5] !== h || a[6] !== x || a[7] !== f || a[8] !== b || a[9] !== p || a[10] !== y
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
                        className: `absolute top-0 z-10 flex w-full justify-center transition-transform duration-basic ease-enter-snappy group-data-[animate=false]/timeline:transition-none motion-reduce:transition-none ${b && "from" !== g ? "invisible" : ""}`,
                        style: { transform: x },
                        children: (0, r.jsx)("div", { className: "pointer-events-auto -translate-y-1/2", children: h }),
                      }),
                      (0, r.jsx)("div", {
                        className: `absolute top-0 z-10 flex w-full justify-center transition-transform duration-basic ease-enter-snappy group-data-[animate=false]/timeline:transition-none motion-reduce:transition-none ${b && "from" === g ? "invisible" : ""}`,
                        style: { transform: y },
                        children: (0, r.jsx)("div", { className: "pointer-events-auto -translate-y-1/2", children: p }),
                      }),
                    ],
                  })
                : null),
            (a[4] = g),
            (a[5] = h),
            (a[6] = x),
            (a[7] = f),
            (a[8] = b),
            (a[9] = p),
            (a[10] = y),
            (a[11] = o))
          : (o = a[11]),
        a[12] !== l || a[13] !== o
          ? ((s = (0, r.jsx)("div", {
              ref: m,
              className: "group/timeline pointer-events-none absolute inset-y-0 end-0 w-6",
              "data-animate": l,
              children: o,
            })),
            (a[12] = l),
            (a[13] = o),
            (a[14] = s))
          : (s = a[14]),
        s
      )
    }
    function u(e) {
      let t,
        n,
        c = (0, i.c)(31),
        { items: u, getDate: f, getKey: v, renderItem: x, label: y, current: b, comparison: j, continuation: w } = e,
        _ = (0, l.wv)()
      if (
        c[0] !== j ||
        c[1] !== w ||
        c[2] !== b ||
        c[3] !== f ||
        c[4] !== v ||
        c[5] !== u ||
        c[6] !== y ||
        c[7] !== _ ||
        c[8] !== x
      ) {
        n = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            i,
            l,
            k,
            S,
            C,
            M = new Date(_)
          if ((M.setDate(M.getDate() - 1), c[11] !== f || c[12] !== u)) {
            for (let t of ((e = new Map()), u)) {
              let n = new Date(f(t)),
                r = n.toDateString(),
                i = e.get(r)
              null == i ? e.set(r, { date: n, items: [t] }) : i.items.push(t)
            }
            ;((c[11] = f), (c[12] = u), (c[13] = e))
          } else e = c[13]
          c[14] !== e ? ((i = Array.from(e)), (c[14] = e), (c[15] = i)) : (i = c[15])
          let A = i,
            I = null != b,
            P = null != j
          c[16] !== v || c[17] !== A || c[18] !== P || c[19] !== I
            ? ((l = P
                ? new Map(
                    [
                      ...(I ? [null] : []),
                      ...A.flatMap((e) => {
                        let [, t] = e
                        return t.items.map(v)
                      }),
                    ].map(h),
                  )
                : void 0),
              (c[16] = v),
              (c[17] = A),
              (c[18] = P),
              (c[19] = I),
              (c[20] = l))
            : (l = c[20])
          let N = l,
            E = j?.renderNodeControl
          c[21] !== v || c[22] !== I || c[23] !== u || c[24] !== E
            ? ((k = null == E ? void 0 : new Map([[null, I ? E(null) : void 0], ...u.map((e) => [v(e), E(e)])])),
              (c[21] = v),
              (c[22] = I),
              (c[23] = u),
              (c[24] = E),
              (c[25] = k))
            : (k = c[25])
          let D = k,
            T = j?.showChanges
              ? { fromIndex: void 0 === j.fromKey ? -1 : (N?.get(j.fromKey) ?? -1), toIndex: N?.get(j.toKey) ?? -1 }
              : void 0,
            L = null == j && "gap-3"
          ;(c[26] !== L
            ? ((S = (0, o.A)("group/version-history flex flex-col select-none", L)), (c[26] = L), (c[27] = S))
            : (S = c[27]),
            c[28] !== j || c[29] !== w
              ? ((C =
                  null != w
                    ? (0, r.jsxs)("li", {
                        className: "flex min-w-0 flex-row-reverse gap-1",
                        children: [
                          null != j ? (0, r.jsx)(m, {}) : null,
                          (0, r.jsx)("div", { className: "min-w-0 flex-1 pt-2", children: w }),
                        ],
                      })
                    : null),
                (c[28] = j),
                (c[29] = w),
                (c[30] = C))
              : (C = c[30]))
          let $ = (0, r.jsxs)("ol", {
            "aria-label": y,
            className: S,
            "data-show-rail": j?.showChanges,
            children: [
              null == b
                ? null
                : (0, r.jsx)(g, {
                    reserveGutter: null != j,
                    index: 0,
                    control: T?.fromIndex === 0 || T?.toIndex === 0 ? void 0 : D?.get(null),
                    children: b,
                  }),
              A.map((e, t) => {
                let [n, i] = e,
                  o = (0, r.jsx)(s.XU, {
                    value: i.date,
                    month: "long",
                    day: "numeric",
                    year: i.date.getFullYear() === _.getFullYear() ? void 0 : "numeric",
                  })
                n === _.toDateString()
                  ? (o = (0, r.jsx)(a.A, {
                      id: "codex.versionHistory.today",
                      defaultMessage: "Today",
                      description: "Heading grouping document versions saved today",
                    }))
                  : n === M.toDateString() &&
                    (o = (0, r.jsx)(a.A, {
                      id: "codex.versionHistory.yesterday",
                      defaultMessage: "Yesterday",
                      description: "Heading grouping document versions saved yesterday",
                    }))
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
                              (0, r.jsx)(m, {}),
                              (0, r.jsx)("div", {
                                className: `min-w-0 flex-1 ${I || t > 0 ? "pt-2" : ""}`,
                                children: l,
                              }),
                            ],
                          }),
                      (0, r.jsx)("ol", {
                        children: i.items.map((e) => {
                          let t = N?.get(v(e)) ?? -1
                          return (0, r.jsx)(
                            g,
                            {
                              reserveGutter: null != j,
                              index: t,
                              itemKey: v(e),
                              control: T?.fromIndex === t || T?.toIndex === t ? void 0 : D?.get(v(e)),
                              children: (0, r.jsx)(p, { item: e, renderItem: x }),
                            },
                            v(e),
                          )
                        }),
                      }),
                    ],
                  },
                  n,
                )
              }),
              C,
            ],
          })
          if (null == j) {
            n = $
            break e
          }
          t = (0, r.jsxs)("div", {
            className: "relative -mx-[var(--padding-row-x)]",
            children: [
              $,
              null != T && T.fromIndex >= 0 && T.toIndex >= 0
                ? (0, r.jsx)(d, {
                    animate: j.animate ?? !0,
                    fromIndex: T.fromIndex,
                    toIndex: T.toIndex,
                    activeEndpoint: j.activeEndpoint,
                    fromControl: j.fromControl?.(T.fromIndex),
                    toControl: j.toControl?.(T.toIndex),
                  })
                : null,
            ],
          })
        }
        ;((c[0] = j),
          (c[1] = w),
          (c[2] = b),
          (c[3] = f),
          (c[4] = v),
          (c[5] = u),
          (c[6] = y),
          (c[7] = _),
          (c[8] = x),
          (c[9] = t),
          (c[10] = n))
      } else ((t = c[9]), (n = c[10]))
      return n !== Symbol.for("react.early_return_sentinel") ? n : t
    }
    function h(e, t) {
      return [e, t]
    }
    function p(e) {
      let t,
        n,
        o = (0, i.c)(5),
        { item: s, renderItem: a } = e
      return (
        o[0] !== s || o[1] !== a ? ((t = a(s)), (o[0] = s), (o[1] = a), (o[2] = t)) : (t = o[2]),
        o[3] !== t ? ((n = (0, r.jsx)(r.Fragment, { children: t })), (o[3] = t), (o[4] = n)) : (n = o[4]),
        n
      )
    }
    function g(e) {
      let t,
        n,
        o,
        s = (0, i.c)(11),
        { reserveGutter: a, index: l, itemKey: c, children: d, control: u } = e
      if (!a) {
        let e
        return (s[0] !== d ? ((e = (0, r.jsx)("li", { children: d })), (s[0] = d), (s[1] = e)) : (e = s[1]), e)
      }
      return (
        s[2] !== u ? ((t = (0, r.jsx)(m, { control: u })), (s[2] = u), (s[3] = t)) : (t = s[3]),
        s[4] !== d
          ? ((n = (0, r.jsx)("div", { className: "min-w-0 flex-1", children: d })), (s[4] = d), (s[5] = n))
          : (n = s[5]),
        s[6] !== l || s[7] !== c || s[8] !== t || s[9] !== n
          ? ((o = (0, r.jsx)("li", {
              children: (0, r.jsxs)("div", {
                className: "flex min-w-0 flex-row-reverse gap-1",
                "data-version-history-index": l,
                "data-version-history-key": c,
                children: [t, n],
              }),
            })),
            (s[6] = l),
            (s[7] = c),
            (s[8] = t),
            (s[9] = n),
            (s[10] = o))
          : (o = s[10]),
        o
      )
    }
    function m(e) {
      let t,
        n,
        o = (0, i.c)(4),
        { control: s } = e
      return (
        o[0] !== s
          ? ((t =
              null != s
                ? (0, r.jsx)("span", {
                    className: "absolute inset-0 z-10 flex items-center justify-center",
                    children: s,
                  })
                : null),
            (o[0] = s),
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
  NqYl(e, t, n) {
    let r = (0, n("nkTT").a)({
      name: "chevron-up-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.475098, y: 4.946289, width: 9.049805, height: 4.911621 },
        visualBounds: { x: 3.475098, y: 4.946289, width: 9.049805, height: 4.911621 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.475098, y: 4.946289, width: 9.049805, height: 4.911621 },
        center: { x: 8, y: 7.4021 },
        insets: { top: 4.946289, right: 3.475097, bottom: 6.14209, left: 3.475098 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.4021 }, foreground: { x: 8, y: 7.4021 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.6289 9.70417C11.8339 9.9092 12.166 9.9092 12.3711 9.70417C12.5761 9.49915 12.5761 9.16701 12.3711 8.96199L8.60641 5.19734C8.27129 4.86261 7.72863 4.86261 7.39352 5.19734L3.62887 8.96199C3.42384 9.16701 3.42384 9.49915 3.62887 9.70417C3.83389 9.9092 4.16603 9.9092 4.37105 9.70417L7.99996 6.07527L11.6289 9.70417Z" fill="currentColor"/>',
    })
    n.d(t, {}, { V: r })
  },
}
//# sourceMappingURL=59817.40ca0302bd.js.map
