export const __rspack_esm_ids = [678412]
export const __webpack_modules__ = {
  WI8D(e, i, t) {
    function n(e, i) {
      return (
        e.checkKey === i.checkKey &&
        e.target === i.target &&
        e.channel === i.channel &&
        e.challengeId === i.challengeId &&
        e.challengeStatus === i.challengeStatus
      )
    }
    t.d(
      i,
      {},
      {
        a: function (e, i = () => crypto.randomUUID()) {
          let t = Object.freeze({ ...e }),
            r = new Map()
          function o(e) {
            return r.get(e.selection.checkKey) === e
          }
          return {
            begin(e, o = {}) {
              let s = r.get(e.checkKey),
                a = null != s && n(s.selection, e),
                l = Object.freeze({
                  scope: t,
                  selection: Object.freeze({ ...e }),
                  idempotencyKey: !o.newAttempt && a ? s.idempotencyKey : i(),
                })
              return (r.set(e.checkKey, l), l)
            },
            isCurrent: o,
            reconcile: (e, i) =>
              !!o(e) && ("uncertain" === i || "pending" === i || (r.delete(e.selection.checkKey), !0)),
            clear(e) {
              null == e ? r.clear() : r.delete(e)
            },
          }
        },
        f: n,
      },
    )
  },
  XmbV(e, i, t) {
    t.d(
      i,
      {},
      {
        h: function (e, i, t) {
          if (422 === e)
            switch (i) {
              case "Contact verification send limit reached":
                return "sendLimit"
              case "Contact verification code limit reached":
              case "Contact verification code limit reached for this draft":
                return "codeLimit"
              case "Wait 30 seconds before requesting another code":
                return "cooldown"
              case "The verification code was not accepted":
              case "Invalid phone verification code":
              case "Invalid email verification code":
                return "verify" === t ? "incorrectCode" : "sendError"
              case "Verification expired; request a new code":
                return "expired"
            }
          return 429 === e ? "cooldown" : "send" === t ? "sendError" : "verifyError"
        },
      },
    )
  },
  IVLR(e, i, t) {
    var n = t("WI8D"),
      r = t("Z5jE")
    function o(e, i) {
      if (null == e) return { status: "missing", delayMs: null }
      let t = Date.parse(e)
      if (!Number.isFinite(t) || !Number.isFinite(i)) return { status: "invalid", delayMs: null }
      let n = t - i
      return n <= 0 ? { status: "elapsed", delayMs: 0 } : { status: "waiting", delayMs: Math.min(n, 0x7fffffff) }
    }
    t.d(
      i,
      {},
      {
        Kf: function (e) {
          let i = (0, n.a)(e),
            t = new Map(),
            o = !1
          function s(e) {
            for (let n of null == e ? [...t.keys()] : [e]) {
              let e = t.get(n)
              ;(e?.owner.cancel(), e?.settle(), t.get(n) === e && (t.delete(n), i.clear(n)))
            }
          }
          return {
            execute(s) {
              if (o) return Promise.reject(new DOMException("Verification controller disposed", "AbortError"))
              if (s.signal?.aborted) return Promise.reject(s.signal.reason)
              let { selection: a, operation: l, run: d, accept: c, recover: u, shouldRecover: f, outcome: _ } = s,
                p = s.response ?? null,
                h = t.get(a.checkKey)
              if (
                s.coalesce &&
                h?.promise != null &&
                !h.signal.aborted &&
                h.operation === l &&
                h.response === p &&
                (0, n.f)(h.selection, a)
              )
                return h.promise
              let m = h?.owner ?? (0, r.u)(e),
                y = m.begin(),
                v = i.begin(a, { newAttempt: h?.operation !== l || h?.response !== p }),
                b = !1,
                E = () => {
                  y.isCurrent() && (m.cancel(), I())
                },
                I = () => {
                  ;(s.signal?.removeEventListener("abort", E),
                    b || t.get(a.checkKey) !== g || ((b = !0), (g.promise = void 0), s.onSettled?.()))
                },
                g = { owner: m, selection: v.selection, operation: l, response: p, signal: y.signal, settle: I }
              ;(t.set(a.checkKey, g), s.signal?.addEventListener("abort", E, { once: !0 }))
              let w = (async () => {
                ;(u?.(!1), y.throwIfStale())
                try {
                  let e = await d({ signal: y.signal, idempotencyKey: v.idempotencyKey })
                  y.throwIfStale()
                  let t = _?.(e) ?? "completed"
                  ;(y.throwIfStale(), i.reconcile(v, t))
                  let n = c?.(e) ?? !0
                  return (y.throwIfStale(), u?.(!n), y.throwIfStale(), e)
                } catch (e) {
                  throw (y.throwIfStale(), f?.(e) && (y.throwIfStale(), u?.(!0)), y.throwIfStale(), e)
                }
              })().finally(I)
              return ((g.promise = w), w)
            },
            isRunning(e) {
              let i = t.get(e)
              return i?.promise != null && !i.signal.aborted
            },
            matches(e, i) {
              let r = t.get(e.checkKey)
              return null != r && r.operation === i && (0, n.f)(r.selection, e)
            },
            cancel: s,
            dispose() {
              ;((o = !0), s())
            },
          }
        },
        P$: function (e, i) {
          let t = o(e, i)
          return {
            available: "missing" === t.status || "elapsed" === t.status,
            seconds: "waiting" === t.status && null != e ? Math.ceil((Date.parse(e) - i) / 1e3) : 0,
            delayMs: t.delayMs,
          }
        },
        sA: async function ({ recovering: e, send: i, getRetryDeadline: t, throwIfStale: n }) {
          n()
          let r = await i(!1)
          return (n(), e && "elapsed" === o(t(r), Date.now()).status && (n(), (r = await i(!0)), n()), r)
        },
      },
    )
  },
  v7Fs(e, i, t) {
    var n = t("IVLR")
    t.d(
      i,
      {},
      {
        g: function (e, i, t) {
          if ("email" !== e || !i) return !1
          let r = t?.find((e) => "email" === e.field)
          return r?.target !== i && (0, n.P$)(r?.resend_available_at, Date.now()).available
        },
        x: function (e, i) {
          let t,
            r = "u" < typeof document ? null : document,
            o = !0
          function s() {
            if (!o || r?.hidden) return
            let a = (0, n.P$)(e, Date.now())
            ;(i(a),
              null == a.delayMs || a.delayMs <= 0
                ? l()
                : o && !r?.hidden && (t = setTimeout(s, Math.min(1e3, a.delayMs))))
          }
          function a() {
            ;(clearTimeout(t), o && !r?.hidden && (t = setTimeout(s, 0)))
          }
          function l() {
            ;((o = !1), clearTimeout(t), r?.removeEventListener("visibilitychange", a))
          }
          return (a(), r?.addEventListener("visibilitychange", a), l)
        },
      },
    )
  },
  cteK(e, i, t) {
    function n(e, i) {
      return (
        i.throwIfAborted(),
        new Promise((t, n) => {
          let r = () => {
              ;(clearTimeout(o), i.removeEventListener("abort", r), n(i.reason))
            },
            o = setTimeout(() => {
              ;(i.removeEventListener("abort", r), t())
            }, e)
          i.addEventListener("abort", r, { once: !0 })
        })
      )
    }
    async function r({ signal: e, run: i, timeoutMs: t = 3e4 }) {
      if (!Number.isFinite(t) || t < 0 || t > 0x7fffffff)
        throw RangeError("Verification requires a timer-safe request deadline")
      return (
        e?.throwIfAborted(),
        new Promise((n, r) => {
          let o = new AbortController(),
            s = !1,
            a = () => {
              ;(clearTimeout(c), e?.removeEventListener("abort", d))
            },
            l = (e) => {
              s || ((s = !0), a(), o.abort(e), r(e))
            },
            d = () => l(e?.reason),
            c = setTimeout(() => l(new DOMException("Verification request timed out", "TimeoutError")), t)
          e?.addEventListener("abort", d, { once: !0 })
          try {
            Promise.resolve(i(o.signal)).then(
              (e) => {
                s || ((s = !0), a(), n(e))
              },
              (e) => {
                s || ((s = !0), a(), r(e))
              },
            )
          } catch (e) {
            ;((s = !0), a(), r(e))
          }
        })
      )
    }
    async function o({
      signal: e,
      run: i,
      lease: t,
      isTransient: s,
      maxAttempts: a = 3,
      intervalMs: l = 500,
      timeoutMs: d,
    }) {
      if (!Number.isSafeInteger(a) || a < 1 || !Number.isFinite(l) || l < 0 || l > 0x7fffffff)
        throw RangeError("Verification reads require a positive budget and timer-safe interval")
      let c = t?.signal ?? e ?? new AbortController().signal,
        u = () => {
          ;(t?.throwIfStale(), c.throwIfAborted())
        }
      for (let e = 1; ; e++) {
        u()
        try {
          let e = null == d ? await i(c) : await r({ signal: c, run: i, timeoutMs: d })
          return (u(), e)
        } catch (i) {
          if ((u(), e >= a || !s(i))) throw i
          await n(l, c)
        }
      }
    }
    t.d(
      i,
      {},
      {
        KC: function (e, i) {
          let t = 0
          return async (n, r) => {
            if ((n.throwIfAborted(), Date.now() < t)) return r
            try {
              return await e(n)
            } catch (o) {
              if ((n.throwIfAborted(), (o instanceof Error || o instanceof DOMException) && "TimeoutError" === o.name))
                return r
              let e = i(o)
              if (null == e) throw o
              return ((t = e), r)
            }
          }
        },
        bT: function (e, i, t) {
          return o({
            signal: e,
            run: i,
            intervalMs: 7500,
            maxAttempts: 3,
            isTransient: (e) => {
              let i = t(e)
              return null != i && i <= Date.now() + 7500
            },
          })
        },
        cA: r,
        ck: function ({ read: e, ...i }) {
          return o({ ...i, run: e })
        },
        re: async function ({
          initial: e,
          lease: i,
          signal: t,
          isPending: o,
          read: s,
          intervalMs: a,
          maxReads: l,
          immediateFirstRead: d = !1,
          wait: c = n,
          timeoutMs: u,
        }) {
          let f
          if (!Number.isFinite(a) || a < 0 || !Number.isSafeInteger(l) || l < 0)
            throw RangeError("Polling requires a nonnegative interval and read count")
          let _ = e,
            p = 0,
            h = i?.signal ?? t
          if (null == h) throw TypeError("Verification polling requires a lease or cancellation signal")
          let m = () => {
            null != i ? i.throwIfStale() : h.throwIfAborted()
          }
          m()
          let y = () => ({ value: _, status: o(_) ? "pending" : "settled", reads: p }),
            v = async (e) => {
              for (; o(_) && p < l;) {
                ;(d || (await c(a, e)), m(), e.throwIfAborted())
                let i = await s(e, _)
                ;(m(), e.throwIfAborted(), (_ = i), p++, d && o(_) && (await c(a, e)))
              }
              return y()
            }
          if (null == u) return v(h)
          try {
            return await r({ signal: h, timeoutMs: u, run: (e) => ((f = e), v(e)) })
          } catch (e) {
            if ((m(), f?.aborted && f.reason === e && e instanceof DOMException && "TimeoutError" === e.name))
              return y()
            throw e
          }
        },
      },
    )
  },
  Z5jE(e, i, t) {
    t.d(
      i,
      {},
      {
        u: function (e) {
          let i,
            t = Object.freeze({ ...e }),
            n = !1
          return {
            begin() {
              if (n) throw new DOMException("Verification scope disposed", "AbortError")
              i?.abort()
              let e = new AbortController()
              return (
                (i = e),
                Object.freeze({
                  scope: t,
                  signal: e.signal,
                  isCurrent: () => !e.signal.aborted,
                  throwIfStale: () => e.signal.throwIfAborted(),
                })
              )
            },
            cancel() {
              i?.abort()
            },
            dispose() {
              ;((n = !0), i?.abort())
            },
          }
        },
      },
    )
  },
  CU6j(e, i, t) {
    t.d(i, { z: () => l })
    var n = t("ABep"),
      r = t("on57"),
      o = t("Hg3i"),
      s = t("zd8w")
    let a = (0, s.createContext)(null),
      l = ({
        onChange: e,
        children: i,
        className: t,
        direction: l = "row",
        variant: d = "default",
        disabled: c = !1,
        __isWidget: u,
        ...f
      }) => {
        let _ = (0, s.useMemo)(() => ({ disabled: c, direction: l, variant: d }), [c, l, d])
        return (0, n.jsx)(a, {
          value: _,
          children: (0, n.jsx)(o.Root, {
            className: (0, r.A)("RadioGroup-AnBMnD", t),
            "data-direction": l,
            "data-variant": d,
            orientation: "list" === d ? "vertical" : void 0,
            "data-w-component": u ? "radio-group" : void 0,
            onValueChange: e,
            disabled: c,
            ...f,
            children: i,
          }),
        })
      }
    l.Item = ({ value: e, disabled: i = !1, id: t, required: l, children: d, className: c, block: u = !1, ...f }) => {
      let { disabled: _, variant: p } = (() => {
          let e = (0, s.use)(a)
          if (!e) throw Error("RadioGroup components must be wrapped in <RadioGroup />")
          return e
        })(),
        h = _ || i,
        m = (0, s.useId)(),
        y = t ?? `${e}-${m}`
      return (0, n.jsx)("div", {
        className: "RadioOptionWrapper-fuOiEo",
        "data-variant": p,
        ...f,
        children: (0, n.jsxs)("label", {
          htmlFor: y,
          className: (0, r.A)("RadioLabel-_p8Tfj", c),
          "data-disabled": h ? "" : void 0,
          "data-block": u ? "" : void 0,
          "data-variant": p,
          onMouseDown: (e) => {
            !e.defaultPrevented && e.detail > 1 && e.preventDefault()
          },
          children: [
            (0, n.jsx)("div", {
              className: "RadioIndicatorWrapper-FaQXWm",
              children: (0, n.jsx)(o.Item, {
                id: y,
                value: e,
                disabled: h,
                required: l,
                className: "RadioItem-lUmfRO",
                children: (0, n.jsx)(o.Indicator, { className: "RadioIndicator-IruaLl" }),
              }),
            }),
            d,
          ],
        }),
      })
    }
  },
  BaOq(e, i, t) {
    let n = /^\+[1-9][0-9]{7,14}$/
    t.d(
      i,
      {},
      {
        Pr: function () {
          if ("u" > typeof window)
            try {
              var e
              let i = JSON.parse(
                window.sessionStorage.getItem("business-profile-verification-debug-override") ?? "null",
              )
              if (
                null == i ||
                "object" != typeof i ||
                !("phoneNumber" in i) ||
                "string" != typeof i.phoneNumber ||
                ((e = i.phoneNumber), !n.test(e)) ||
                !("channel" in i) ||
                ("sms" !== i.channel && "phone_voice_call" !== i.channel)
              )
                return
              return { phoneNumber: i.phoneNumber, channel: i.channel }
            } catch {
              return
            }
        },
      },
    )
  },
  zCGz(e, i, t) {
    var n = t("ABep"),
      r = t("QosV"),
      o = t("on57"),
      s = t("zd8w"),
      a = t("v7qY"),
      l = t("oyxz"),
      d = t("ygO2"),
      c = t("ZtSy"),
      u = t("Ot7V"),
      f = t("XcNx"),
      _ = t("WFY2")
    function p(e) {
      try {
        e()
      } catch {}
    }
    t.d(
      i,
      {},
      {
        t: function (e) {
          let i,
            h,
            m,
            y,
            v,
            b,
            E,
            I,
            g,
            w = (0, r.c)(45),
            {
              verificationUrl: S,
              label: A,
              variant: C,
              size: O,
              radius: x,
              fullWidth: N,
              endIcon: R,
              disabled: P,
              onClick: D,
              onLaunch: L,
              onLaunchStart: T,
              onComplete: M,
              onActiveChange: j,
              onCancel: B,
            } = e,
            k = void 0 === C ? "default" : C
          w[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, f.x)({ browser: !0 })), (w[0] = i)) : (i = w[0])
          let U = i,
            [F, q] = (0, s.useState)(!1),
            [X, K] = (0, s.useState)(!1),
            V = (0, s.useRef)(null),
            G = (0, s.useRef)(null)
          ;(w[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = () => () => {
                ;(V.current?.(), (V.current = null), p(() => G.current?.()), (G.current = null))
              }),
              (m = []),
              (w[1] = h),
              (w[2] = m))
            : ((h = w[1]), (m = w[2])),
            (0, s.useEffect)(h, m),
            w[3] !== j || w[4] !== B || w[5] !== D || w[6] !== M || w[7] !== L || w[8] !== T || w[9] !== S
              ? ((y = async function (e) {
                  let i, n
                  if (V.current) return
                  ;(p(() => G.current?.()), (G.current = null))
                  let r = !1,
                    o = "prepare",
                    s = () => {
                      ;((r = !0), clearTimeout(d), i?.destroy(), (i = void 0))
                    },
                    l = async (i, t) => {
                      if (r) return
                      ;(null != t && p(() => n?.onFailed(t)), s(), j?.(!1))
                      let l = null != t
                      try {
                        void 0 !== i && i && ((o = "complete"), await M())
                      } catch {
                        l = !0
                      }
                      if (l)
                        try {
                          _.v.warning("Business profile Persona launch failed", { safe: { stage: o } })
                        } catch {}
                      V.current === s &&
                        ((V.current = null),
                        (0, a.flushSync)(() => {
                          ;(q(!1), K(l))
                        }),
                        l &&
                          e.isConnected &&
                          !V.current &&
                          p(() => {
                            let e = n?.onErrorPresented(t ?? "unknown")
                            G.current = "function" == typeof e ? e : null
                          }),
                        requestAnimationFrame(() => {
                          e.isConnected && !V.current && e.focus()
                        }))
                    },
                    d = setTimeout(() => void l(!1, "timeout"), 5e4)
                  ;((V.current = s),
                    q(!0),
                    K(!1),
                    p(() => {
                      n = T?.()
                    }),
                    j?.(!0),
                    D?.())
                  let c = async function (e) {
                    if (r) return
                    if ((clearTimeout(d), (d = setTimeout(() => void l(!1, "timeout"), 3e4)), !U)) {
                      if (!(0, u.Rh)({ href: e, initiator: "markdown_link_click", openTarget: "external-browser" }))
                        throw Error("Could not open verification")
                      ;(p(() => n?.onUnconfirmed()), await l())
                      return
                    }
                    o = "sdk_load"
                    let s = await t
                      .e(891564)
                      .then(t.t.bind(t, "Iv8T", 23))
                      .then(({ default: e }) => e.Client)
                    if (r) return
                    let a = new URL(e).searchParams,
                      c = a.get("inquiry-id")
                    c
                      ? ((o = "sdk_open"),
                        (i = new s({
                          inquiryId: c,
                          sessionToken: a.get("session-token") ?? void 0,
                          parent: document.body,
                          onReady: () => {
                            r || (clearTimeout(d), p(() => n?.onReady()))
                          },
                          onCancel: () => {
                            r || (p(() => n?.onCancelled()), l(), B?.())
                          },
                          onComplete: () => {
                            r || (p(() => n?.onSdkCompleted()), p(() => n?.onUnconfirmed()), l(!0))
                          },
                          onError: () => void l(!1, "unknown"),
                        })),
                        r ? i.destroy() : i.open())
                      : l(!1, "unknown")
                  }
                  try {
                    L
                      ? (await L(c, () => {
                          r || V.current !== s || p(() => n?.onFailed("unknown"))
                        })) || (r || p(() => n?.onUnconfirmed()), l())
                      : S
                        ? await c(S)
                        : l(!1, "unknown")
                  } catch {
                    l(!1, "unknown")
                  }
                }),
                (w[3] = j),
                (w[4] = B),
                (w[5] = D),
                (w[6] = M),
                (w[7] = L),
                (w[8] = T),
                (w[9] = S),
                (w[10] = y))
              : (y = w[10]))
          let z = y
          w[11] !== A
            ? ((v =
                A ??
                (0, n.jsx)(l.A, {
                  id: "businessProfiles.persona.continue",
                  defaultMessage: "Continue with Persona",
                  description:
                    "Button opening business identity verification. Persona is a brand name; do not translate it.",
                })),
              (w[11] = A),
              (w[12] = v))
            : (v = w[12])
          let J = v
          if (!U && S && !L) {
            let e,
              i,
              t,
              r = "detailAction" === O || "formAction" === O,
              s = r ? "button" : void 0
            ;(w[13] !== r || w[14] !== O
              ? ((e = r
                  ? (0, o.A)(
                      "inline-flex cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-primary-solid px-4 font-medium whitespace-nowrap text-primary-solid select-none no-drag hover:bg-text/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      "formAction" === O ? "min-h-10.5 shrink-0 py-2 text-sm leading-5" : "min-h-10 text-base",
                    )
                  : void 0),
                (w[13] = r),
                (w[14] = O),
                (w[15] = e))
              : (e = w[15]),
              w[16] !== D || w[17] !== T
                ? ((i = () => {
                    let e
                    ;(p(() => {
                      e = T?.()
                    }),
                      D?.(),
                      p(() => e?.onUnconfirmed()))
                  }),
                  (w[16] = D),
                  (w[17] = T),
                  (w[18] = i))
                : (i = w[18]))
            let a = r ? "none" : "always"
            return (
              w[19] !== J || w[20] !== R || w[21] !== i || w[22] !== a || w[23] !== s || w[24] !== e || w[25] !== S
                ? ((t = (0, n.jsxs)(c.G, {
                    appearance: s,
                    className: e,
                    href: S,
                    onClick: i,
                    initiator: "markdown_link_click",
                    openTarget: "external-browser",
                    underline: a,
                    children: [J, R],
                  })),
                  (w[19] = J),
                  (w[20] = R),
                  (w[21] = i),
                  (w[22] = a),
                  (w[23] = s),
                  (w[24] = e),
                  (w[25] = S),
                  (w[26] = t))
                : (t = w[26]),
              t
            )
          }
          let Y = void 0 !== N && N ? "flex w-full flex-col items-stretch gap-3" : "flex flex-col items-start gap-3",
            H = O ?? ("onboarding" === k ? "responsiveBeaconAction" : void 0),
            W = "onboarding" === k ? "w-full sm:w-auto" : void 0
          return (
            w[27] !== z ? ((b = (e) => void z(e.currentTarget)), (w[27] = z), (w[28] = b)) : (b = w[28]),
            w[29] !== J ||
            w[30] !== P ||
            w[31] !== R ||
            w[32] !== F ||
            w[33] !== x ||
            w[34] !== W ||
            w[35] !== b ||
            w[36] !== H
              ? ((E = (0, n.jsxs)(d.$, {
                  size: H,
                  className: W,
                  radius: x,
                  type: "button",
                  loading: F,
                  disabled: P,
                  onClick: b,
                  children: [J, R],
                })),
                (w[29] = J),
                (w[30] = P),
                (w[31] = R),
                (w[32] = F),
                (w[33] = x),
                (w[34] = W),
                (w[35] = b),
                (w[36] = H),
                (w[37] = E))
              : (E = w[37]),
            w[38] !== X || w[39] !== A
              ? ((I =
                  X &&
                  (0, n.jsx)("p", {
                    role: "alert",
                    children:
                      null == A
                        ? (0, n.jsx)(l.A, {
                            id: "businessProfiles.persona.retry",
                            defaultMessage:
                              "We couldn’t open or update verification. Select Continue with Persona to try again.",
                            description:
                              "Retryable error beneath business verification. The existing claim or edit is preserved. Persona is a brand name.",
                          })
                        : (0, n.jsx)(l.A, {
                            id: "businessProfiles.persona.retryCustomLabel",
                            defaultMessage: "We couldn’t open or update verification. Please try again",
                            description:
                              "Retryable error beneath business identity verification when the launch button has a custom label. The existing ownership request is preserved.",
                          }),
                  })),
                (w[38] = X),
                (w[39] = A),
                (w[40] = I))
              : (I = w[40]),
            w[41] !== E || w[42] !== I || w[43] !== Y
              ? ((g = (0, n.jsxs)("div", { className: Y, children: [E, I] })),
                (w[41] = E),
                (w[42] = I),
                (w[43] = Y),
                (w[44] = g))
              : (g = w[44]),
            g
          )
        },
      },
    )
  },
  pBYO(e, i, t) {
    t.d(i, {
      yX: () => m,
      x$: () => E,
      IP: () => g,
      Ic: () => y,
      _3: () => A,
      wj: () => S,
      Iw: () => h,
      BR: () => I,
      dA: () => w,
      fY: () => b,
      nn: () => v,
    })
    var n = t("ozm1")
    let r = { $type: "protobuf_analytics_events.v1.CodexBusinessProfileClaimJourney" }
    var o = t("yGJW"),
      s = t("eShZ")
    let a = {
        entry: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_ENTRY",
        onboarding: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_ONBOARDING",
        selection: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_SELECTION",
        account: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_ACCOUNT",
        method: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_METHOD",
        delivery: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_DELIVERY",
        delivery_pending: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_DELIVERY_PENDING",
        code: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_CODE",
        domain: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_DOMAIN",
        web_verification: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_WEB_VERIFICATION",
        persona: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_PERSONA",
        pending: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_PENDING",
        in_progress: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_IN_PROGRESS",
        needs_information: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_NEEDS_INFORMATION",
        review: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_REVIEW",
        success: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_SUCCESS",
        cancelled: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_CANCELLED",
        failed: "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_FAILED",
      },
      l = {
        load: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_LOAD",
        select_account: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SELECT_ACCOUNT",
        select_profile: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SELECT_PROFILE",
        select_method: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SELECT_METHOD",
        prepare: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_PREPARE",
        send: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SEND",
        resend: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_RESEND",
        verify_code: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_VERIFY_CODE",
        verify_domain: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_VERIFY_DOMAIN",
        open_web_verification: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_OPEN_WEB_VERIFICATION",
        open_persona: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_OPEN_PERSONA",
        connect_shopify: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CONNECT_SHOPIFY",
        review: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_REVIEW",
        cancel: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CANCEL",
        retry: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_RETRY",
        continue: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CONTINUE",
        resume: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_RESUME",
        submit: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SUBMIT",
        close: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CLOSE",
      },
      d = {
        phone: "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_PHONE",
        email: "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_EMAIL",
        domain: "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_DOMAIN",
        persona: "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_PERSONA",
        shopify: "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_SHOPIFY",
      },
      c = {
        network: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_NETWORK",
        timeout: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_TIMEOUT",
        authentication: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_AUTHENTICATION",
        authorization: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_AUTHORIZATION",
        validation: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_VALIDATION",
        rate_limited: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_RATE_LIMITED",
        conflict: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_CONFLICT",
        expired: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_EXPIRED",
        server: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_SERVER",
        unavailable: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_UNAVAILABLE",
        unknown: "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_UNKNOWN",
      },
      u = {
        succeeded: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_SUCCEEDED",
        failed: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_FAILED",
        cancelled: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_CANCELLED",
        unknown: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_UNKNOWN",
      },
      f = {
        sidebar: "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_SIDEBAR",
        hub_search: "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_HUB_SEARCH",
        pending_resume: "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_PENDING_RESUME",
        creation_duplicate: "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_CREATION_DUPLICATE",
      },
      _ = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      p = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    function h(e, i) {
      return {
        telemetryJourneyId: void 0,
        correlationState: "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNSPECIFIED",
        entryPoint: f[e],
        businessProfileId: i,
        started: !1,
        active: !0,
        closed: !1,
        attemptIndex: 0,
      }
    }
    function m(e, i, t) {
      if (i) {
        if (null == t) {
          i.correlationState = "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_LEGACY_UNLINKED"
          return
        }
        if (!p.test(t)) {
          i.correlationState = "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNKNOWN"
          return
        }
        ;(i.telemetryJourneyId !== t &&
          (i.started && (i.previousTelemetryJourneyId = i.telemetryJourneyId), (i.telemetryJourneyId = t)),
          (i.correlationState = "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_SERVER_LINKED"),
          null != e &&
            null != i.previousTelemetryJourneyId &&
            O(e, i, { eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED" }))
      }
    }
    function y(e, i) {
      null != e && x(e)
      let t = e?.telemetryJourneyId
      return null != t && _.test(t) && _.test(i) ? `bp-claim-journey-v1:${t}:${i}` : i
    }
    function v(e) {
      return (
        e && (e.active = !0),
        () => {
          e && (e.active = !1)
        }
      )
    }
    function b(e, i, t, n) {
      let r = () => {
        "visible" === document.visibilityState &&
          (function (e, i, t, n) {
            if (!i || !i.active || i.closed) return
            if (i.currentStep === t) {
              null != i.previousTelemetryJourneyId &&
                O(e, i, { eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED" })
              return
            }
            C(e, i, t)
            let r = i.currentStep
            ;((i.currentStep = t),
              O(e, i, {
                eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_STEP_VIEWED",
                step: a[t],
                previousStep: null == r ? void 0 : a[r],
                method: null == n ? void 0 : d[n],
              }))
          })(e, i, t, n)
      }
      return (
        r(),
        document.addEventListener("visibilitychange", r),
        () => document.removeEventListener("visibilitychange", r)
      )
    }
    function E(e, i, t, r, o) {
      if (!i || !i.active || i.closed) return
      ;(C(e, i, t),
        (i.lastError = void 0),
        (i.presentedError = void 0),
        (i.attemptIndex = Math.min(i.attemptIndex + 1, 0x7fffffff)))
      let s = {
        action: l[r],
        step: a[t],
        method: null == o ? void 0 : d[o],
        id: N(),
        index: i.attemptIndex,
        finished: !1,
      }
      return (
        O(e, i, {
          eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ACTION_STARTED",
          step: s.step,
          action: s.action,
          method: s.method,
          outcome: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_STARTED",
          actionAttemptId: s.id,
          attemptIndex: (0, n.At)(s.index),
        }),
        s
      )
    }
    function I(e, i, t, r, o) {
      i &&
        i.active &&
        !i.closed &&
        t &&
        !t.finished &&
        ((t.finished = !0),
        (i.lastError = o),
        O(e, i, {
          eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ACTION_FINISHED",
          step: t.step,
          action: t.action,
          method: t.method,
          outcome: u[r],
          errorCategory: null == o ? void 0 : c[o],
          actionAttemptId: t.id,
          attemptIndex: (0, n.At)(t.index),
        }))
    }
    function g(e, i, t) {
      i &&
        t &&
        O(e, i, {
          eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_PERSONA_SDK_COMPLETED",
          step: t.step,
          action: t.action,
          method: t.method,
          outcome: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_SUCCEEDED",
          actionAttemptId: t.id,
          attemptIndex: (0, n.At)(t.index),
        })
    }
    function w(e, i, t, n) {
      if (null == n) return (i && (i.presentedError = void 0), () => {})
      let r = () => {
        "visible" === document.visibilityState &&
          i &&
          i.active &&
          !i.closed &&
          (i.presentedError?.step !== t || i.presentedError.category !== n) &&
          ((i.presentedError = { step: t, category: n }),
          O(e, i, {
            eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ERROR_PRESENTED",
            step: a[t],
            errorCategory: c[n],
          }))
      }
      return (
        r(),
        document.addEventListener("visibilitychange", r),
        () => document.removeEventListener("visibilitychange", r)
      )
    }
    function S(e, i) {
      i &&
        !i.closed &&
        (C(e, i, i.currentStep ?? "entry"),
        O(e, i, {
          eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_CLOSED",
          step: a[i.currentStep ?? "entry"],
          action: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CLOSE",
          outcome: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_DISMISSED",
        }),
        (i.closed = !0))
    }
    function A(e) {
      if (e instanceof DOMException && "AbortError" === e.name) return { outcome: "cancelled" }
      if (e instanceof DOMException && "TimeoutError" === e.name) return { outcome: "failed", errorCategory: "timeout" }
      if (e instanceof s.fk) {
        let i
        if ("network" === e.errorKind) return { outcome: "failed", errorCategory: "network" }
        let t = e.status
        switch (t) {
          case 401:
            i = "authentication"
            break
          case 403:
            i = "authorization"
            break
          case 408:
          case 504:
            i = "timeout"
            break
          case 409:
            i = "conflict"
            break
          case 410:
            i = "expired"
            break
          case 429:
            i = "rate_limited"
            break
          case 400:
          case 422:
            i = "validation"
            break
          case 404:
            i = "unavailable"
            break
          default:
            i = null != t && t >= 500 ? "server" : "unknown"
        }
        return { outcome: "failed", errorCategory: i }
      }
      return { outcome: "failed", errorCategory: "unknown" }
    }
    function C(e, i, t) {
      ;(x(i),
        i.started ||
          ((i.started = !0),
          O(e, i, { eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_STARTED", step: a[t] })))
    }
    function O(e, i, t) {
      if (i.active)
        try {
          if (i.isCurrentActor?.() === !1) return
          x(i)
          let n = {
            telemetryJourneyId: i.telemetryJourneyId,
            correlationState: i.correlationState,
            entryPoint: i.entryPoint,
            businessProfileId: i.businessProfileId,
          }
          if (
            null != i.previousTelemetryJourneyId &&
            ((0, o.yy)(e, r, {
              ...n,
              eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED",
              previousTelemetryJourneyId: i.previousTelemetryJourneyId,
            }),
            (i.previousTelemetryJourneyId = void 0),
            "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED" === t.eventKind)
          )
            return
          ;(0, o.yy)(e, r, { ...n, ...t })
        } catch {}
    }
    function x(e) {
      null == e.telemetryJourneyId &&
        ((e.telemetryJourneyId = N()),
        "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNSPECIFIED" === e.correlationState &&
          (e.correlationState =
            null == e.telemetryJourneyId
              ? "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNKNOWN"
              : "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_CLIENT_ONLY"))
    }
    function N() {
      try {
        return crypto.randomUUID()
      } catch {
        return
      }
    }
  },
  Qsgo(e, i, t) {
    t.d(
      i,
      {},
      {
        $: function (e) {
          let i = []
          for (let t = e; t?.parentElement; t = t.parentElement) {
            for (let e of t.parentElement.children)
              e instanceof HTMLElement && e !== t && !e.inert && (e.setAttribute("inert", ""), i.push(e))
            if (t.parentElement === document.body) break
          }
          return () => {
            for (let e of i) e.removeAttribute("inert")
          }
        },
      },
    )
  },
  py8O(e, i, t) {
    var n = t("Qgfj")
    let r = (0, n.YK)({
        content_rejected: {
          id: "businessProfiles.failure.contentRejected",
          defaultMessage: "This change wasn’t approved. Edit it and try again",
          description:
            "A business edit was rejected; the owner can change it and retry while the current profile stays unchanged.",
        },
        verification_failed: {
          id: "businessProfiles.failure.verificationFailed",
          defaultMessage: "Couldn’t verify this change. Try again",
          description:
            "Ownership or identity verification of a business edit failed; the current profile stays unchanged.",
        },
        verification_unavailable: {
          id: "businessProfiles.failure.verificationUnavailable",
          defaultMessage: "Verification unavailable",
          description: "Automatic checks could not complete; the business profile remains unchanged",
        },
      }),
      o = (0, n.YK)({
        invalidWebsite: {
          id: "businessProfiles.creation.website.invalidTarget",
          defaultMessage:
            "Enter an HTTPS website with a domain you can verify, such as example.com. Local addresses and IP addresses cannot be verified.",
          description:
            "Inline validation guidance beneath the optional website input during Business Profile creation. A business owner sees this when the entered website cannot support the required DNS TXT ownership check. The owner can correct or clear the website. HTTPS, IP, and example.com are technical terms or a literal example domain; retain them. Calm plain text may wrap and has no placeholders.",
        },
        rejected: {
          id: "businessProfiles.creation.phoneCode.incorrect",
          defaultMessage: "That code doesn’t match. Try again.",
          description:
            "Inline error below the phone or email verification code when the submitted code is not accepted. Also the fallback for unsuccessful code verification in the business profile editor. The owner can edit the code and try again. Use explicit expiry copy instead when that signal is available.",
        },
        expired: {
          id: "businessProfiles.creation.contact.expired",
          defaultMessage: "Expired code. Try again.",
          description:
            "Inline error when the server explicitly reports that a phone or email verification code has expired. The owner can request a new code using the existing controls.",
        },
        limitReached: {
          id: "businessProfiles.verification.attemptLimitReached",
          defaultMessage: "Too many attempts. Try again later",
          description:
            "Inline error when the server confirms a phone or email code request or verification limit, or a DNS verification limit. Does not specify a waiting duration or promise that the current verification attempt will reset.",
        },
      })
    t.d(
      i,
      {},
      {
        J: function (e) {
          return e.verification_unavailable ? r.verification_unavailable : r[e.reason_code]
        },
        f: o,
      },
    )
  },
  AW7I(e, i, t) {
    ;(t.r(i),
      t.d(i, {
        canSuggestProfileClaim: () => h,
        createClaimVerification: () => y,
        isTransientRequestError: () => b,
        readProfileClaimPreparation: () => m,
      }))
    var n = t("Z5jE"),
      r = t("WI8D"),
      o = t("cteK"),
      s = t("DBCl"),
      a = t("ASxG"),
      l = t("Ghh3"),
      d = t("BaOq"),
      c = t("eShZ"),
      u = t("pBYO")
    function f(e) {
      return "dispute" === e.flow_type && "business_presence_dispute_access_v1" === e.policy_version
    }
    function _(e) {
      return f(e) && e.checks.some((e) => "business_access" === e.check_key && null != e.satisfied_by_verification_id)
    }
    var p = t("VUft")
    function h(e, i) {
      let t = e.ownership.available_action
      return (
        !e.can_manage &&
        null == e.ownership.current_request &&
        ("claim" === t || (i && "local" === e.business_type && "dispute" === t))
      )
    }
    async function m(e, i) {
      let t = i.getAbortSignal?.()
      t?.throwIfAborted()
      let n = await l.Request.safeGet("/chat/frontend/v1/business-profiles/{business_profile_id}/claim-preparation", {
        parameters: { path: { business_profile_id: e } },
        additionalHeaders: {
          "x-openai-use-sheep": "1",
          ...(null != i.accountId ? { "ChatGPT-Account-ID": i.accountId, [s.zBc]: i.accountId } : {}),
        },
        signal: t,
      })
      if ((t?.throwIfAborted(), n.business_profile_id !== e)) throw Error("Business profile identity mismatch")
      let r = n.ownership.current_request
      if (null != r && (r.business_profile_id !== e || !r.verification_workflow_id))
        throw Error("Saved verification does not match the selected Business Profile")
      return n
    }
    let y = (e, i) => {
      let t,
        h,
        y,
        E,
        I,
        g,
        w,
        S,
        A,
        C,
        O,
        x = { "x-openai-use-sheep": "1" }
      i?.accountId != null && ((x["ChatGPT-Account-ID"] = i.accountId), (x[s.zBc] = i.accountId))
      let N = i?.flowType ?? "claim",
        R = i?.currentRequest,
        P =
          R?.kind === "claim" &&
          R.verification_workflow_id &&
          (i?.businessProfileId == null || i.businessProfileId === R.business_profile_id)
            ? (R.business_profile_id ?? void 0)
            : void 0,
        D = "claim" === N ? (i?.telemetryJourney ?? (0, u.Iw)(i?.telemetryEntryPoint ?? "sidebar", P)) : void 0
      D && i?.isTelemetryActorCurrent && (D.isCurrentActor = i.isTelemetryActorCurrent)
      let L = i?.businessProfileId,
        T = !1
      if (null != L && i?.entityKey != null) throw Error("Choose one Business Profile identity")
      let M = () => ({
          accountId: i?.accountId ?? "",
          subjectId: L ?? X?.business_profile_id ?? i?.entityKey ?? e ?? "",
          flowId: C?.id ?? X?.verification_workflow_id ?? "",
          revision: N,
        }),
        j =
          (e) =>
          async (...t) => {
            h?.dispose()
            let r = (0, n.u)(M())
            h = r
            let o = r.begin(),
              s = i?.getAbortSignal?.(),
              a = () => r.cancel()
            s?.addEventListener("abort", a, { once: !0 })
            try {
              s?.throwIfAborted()
              let i = await e(o, ...t)
              return (o.throwIfStale(), i)
            } finally {
              ;(s?.removeEventListener("abort", a), r.dispose())
            }
          },
        B = (e) => (i?.getAbortSignal?.().throwIfAborted(), e.throwIfStale(), e.signal),
        k = (e, t) => {
          if ((B(t), null != L && e.business_profile_id !== L))
            throw Error("Verification does not match the selected Business Profile")
          return (
            "dispute" === N && (T = f(e)) && (L = e.business_profile_id),
            "claim" === N && "claim" === e.flow_type && D && (D.businessProfileId = e.business_profile_id),
            (0, u.yX)(void 0, D, e.telemetry_journey_id),
            "approved" === e.status && e.business_profile_id && i?.onApproved?.(),
            e
          )
        },
        U = null,
        F = !1,
        q = async (t) => {
          let n
          if (F || ("claim" !== N && !T) || !i?.shopifyActor) return
          if (null != L) n = { actor: i.shopifyActor, businessProfileId: L }
          else {
            if (null == e) return
            n = { actor: i.shopifyActor, businessEntityId: e, entityKey: i.entityKey }
          }
          let r = await (0, p.K5)(n)
          ;(B(t), (U = r), i.shopifyActor.assertCurrentActor(), (F = !0))
        },
        X = i?.currentRequest,
        K = X?.kind === "claim" && "under_review" === X.status,
        V = (0, r.a)({
          accountId: i?.accountId ?? "",
          subjectId: L ?? i?.entityKey ?? e ?? "",
          flowId: "",
          revision: N,
        }),
        G = !1,
        z = () => {
          G || ((S = void 0), (G = !0))
        },
        J = 0,
        Y = () => {
          if (i?.shopifyActor) {
            if (null != C && "shopify" === v(C)) {
              let e = (0, p.TY)({ actor: i.shopifyActor, flowId: C.id, profileId: C.business_profile_id })
              if (void 0 !== e) return e
            }
            return U?.shopDomain
          }
        },
        H = async (e) => {
          let i = C?.business_profile_id ?? X?.business_profile_id,
            t = C?.id ?? X?.verification_workflow_id
          if (!i || !t) throw Error("Verification has not started")
          if (null != L && i !== L) throw Error("Verification does not match the selected Business Profile")
          return await (0, o.ck)({
            lease: e,
            isTransient: b,
            read: async () => (
              f(
                (C = k(
                  (
                    await ((null != C && "shopify" === v(C)) || X?.shopify_verification === !0
                      ? l.Request.safePost(
                          "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/shopify-challenge",
                          {
                            additionalHeaders: x,
                            signal: B(e),
                            parameters: { path: { business_profile_id: i, flow_id: t } },
                            requestBody: { action: "read" },
                          },
                        )
                      : l.Request.safeGet(
                          "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}",
                          {
                            additionalHeaders: x,
                            signal: B(e),
                            parameters: { path: { business_profile_id: i, flow_id: t } },
                          },
                        ))
                  ).flow,
                  e,
                )),
              ) &&
                "shopify" === v(C) &&
                !_(C) &&
                ["pending", "in_progress", "needs_information"].includes(C.status) &&
                null == Y() &&
                (await q(e), B(e)),
              C
            ),
          })
        },
        W = (e) => {
          if ((B(e), !C)) throw Error("Verification has not started")
          switch (C.status) {
            case "approved":
              return "success"
            case "cancelled":
            case "withdrawn":
              return "cancelled"
            case "rejected":
            case "conflicted":
            case "expired":
            case "superseded":
            case "partially_approved":
              return "failed"
            case "pending":
            case "in_progress":
            case "needs_information":
              return C.status
            case "under_review":
              return "review"
          }
        },
        $ = async (e) => {
          try {
            let { value: i } = await (0, o.re)({
              initial: await H(e),
              lease: e,
              isPending: (e) =>
                !(
                  ("dispute" === N
                    ? e.persona_verification?.verification_url != null
                    : null != e.persona_verification) ||
                  e.action_required ||
                  null != e.verification_issue ||
                  !["pending", "in_progress", "needs_information", "under_review"].includes(e.status) ||
                  "under_review" === e.status ||
                  null != e.phone_verification_outcome ||
                  e.verifications.some(
                    (i) =>
                      i.originating_flow_id === e.id &&
                      "phone" === i.target_kind &&
                      ["passed", "failed", "inconclusive", "cancelled"].includes(i.status),
                  )
                ),
              read: () => H(e),
              intervalMs: 500,
              maxReads: 19,
            })
            return i
          } catch (i) {
            if ((B(e), !(i instanceof c.fk) || !C)) throw i
            return C
          }
        },
        Q = (e) => {
          B(e)
          let i = C?.verifications.find((e) =>
              A ? e.id === A.verificationId : e.originating_flow_id === C?.id && "phone" === e.target_kind,
            ),
            t = C?.action_required,
            n = t?.verification_method ?? i?.verification_type,
            r = A?.confirmation?.delivery
          return (
            null == r && ("sms_otp" === n ? (r = "sms") : "phone_vc_otp" === n && (r = "call")),
            {
              telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
              step: "delivery_pending",
              destination: t?.masked_destination ?? i?.masked_destination ?? void 0,
              delivery: r,
              resendAvailableAt: i?.otp_resend_available_at ?? void 0,
            }
          )
        },
        Z = (e) => {
          let i = ((e) => {
            B(e)
            let i = W(e)
            if (!C || ["success", "cancelled", "failed", "review"].includes(i))
              return ((A = void 0), { telemetryJourneyId: C?.telemetry_journey_id ?? void 0, step: i })
            if (_(C))
              return ((A = void 0), null != C.verification_issue)
                ? { step: "needs_information", verificationIssue: C.verification_issue }
                : { step: "persona", personaVerification: C.persona_verification }
            if (f(C) && null != C.phone_verification_outcome)
              return (
                (A = void 0),
                { step: "needs_information", verificationIssue: "additional_verification_required" }
              )
            if ("shopify" === v(C))
              return {
                telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
                step: "web_verification",
                shopifyShopDomain: Y(),
                ...(void 0 !== O
                  ? {
                      shopifyStartConflict:
                        C.id === O && ["pending", "in_progress", "needs_information"].includes(C.status),
                    }
                  : {}),
              }
            if ("domain" === v(C))
              return {
                telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
                step: "domain",
                domainVerification: C.domain_verification,
              }
            let t = C.verification_issue
            if (null != t && ("send_limit_reached" !== t || C.action_required?.type !== "submit_otp"))
              return (
                (A = void 0),
                {
                  telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
                  step: "needs_information",
                  verificationIssue: t,
                }
              )
            if (("send_limit_reached" === t && (A = void 0), null != C.persona_verification && !f(C)))
              return (
                (A = void 0),
                {
                  telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
                  step: "persona",
                  method: "persona" === v(C) ? "persona" : void 0,
                  personaVerification: C.persona_verification,
                }
              )
            if ("email" === v(C)) {
              let e = C.verifications.find((e) => e.originating_flow_id === C?.id && "email" === e.target_kind),
                n = C.action_required,
                r = I?.flowId === C.id && I.verificationId === n?.verification_id,
                o = i
              return (
                r
                  ? (o = "pending")
                  : n?.type === "confirm_verification_destination"
                    ? (o = "delivery")
                    : n?.type === "submit_otp"
                      ? (o = "code")
                      : n?.type === "retry_otp_delivery" && (o = "delivery_pending"),
                {
                  telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
                  step: o,
                  method: "email",
                  destination: n?.masked_destination ?? e?.masked_destination ?? void 0,
                  resendAvailableAt: e?.otp_resend_available_at ?? void 0,
                  verificationIssue: t,
                }
              )
            }
            let n = C.verifications.find((e) => e.originating_flow_id === C?.id && "phone" === e.target_kind)
            if (
              null != C.phone_verification_outcome ||
              (n && ["failed", "inconclusive", "cancelled"].includes(n.status))
            )
              return (
                (A = void 0),
                {
                  telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
                  step: "delivery",
                  destination: n?.masked_destination ?? void 0,
                  availableDeliveries: [],
                  phoneAttemptUnavailable: !0,
                }
              )
            if (n?.status === "passed")
              return ((A = void 0), { telemetryJourneyId: C?.telemetry_journey_id ?? void 0, step: i })
            let r = C.action_required
            if (A) {
              let i = C.verifications.find((e) => e.id === A?.verificationId)
              if (!(
                r?.type === "submit_otp" &&
                r.verification_id === A.verificationId &&
                (null != A.confirmation || (i?.otp_send_count ?? 0) > A.baselineSendCount)
              ))
                return Q(e)
              A = void 0
            }
            if (r?.type === "submit_otp" && I?.flowId === C.id && I.verificationId === r.verification_id)
              return { telemetryJourneyId: C?.telemetry_journey_id ?? void 0, step: "pending" }
            if (!r) return { telemetryJourneyId: C?.telemetry_journey_id ?? void 0, step: i }
            if ("submit_otp" === r.type) {
              if ("sms_otp" !== r.verification_method && "phone_vc_otp" !== r.verification_method)
                throw Error("Unsupported verification method")
              return {
                telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
                step: "code",
                destination: r.masked_destination,
                delivery: "sms_otp" === r.verification_method ? "sms" : "call",
                resendAvailableAt: n?.otp_resend_available_at ?? void 0,
                verificationIssue: t,
              }
            }
            if ("retry_otp_delivery" === r.type) {
              if ("sms_otp" !== r.verification_method && "phone_vc_otp" !== r.verification_method)
                throw Error("Unsupported verification method")
              let i = "sms_otp" === r.verification_method ? "sms" : "call"
              return { telemetryJourneyId: C?.telemetry_journey_id ?? void 0, ...Q(e), availableDeliveries: [i] }
            }
            let o = []
            for (let e of r.destination_channels ?? [])
              "sms" === e ? o.push("sms") : "phone_voice_call" === e && o.push("call")
            let s = "phone_voice_call" === (0, d.Pr)()?.channel ? "call" : "sms",
              a = o.includes(s) ? s : o[0]
            if (!a) throw Error("No phone verification channel available")
            return {
              telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
              step: "delivery",
              destination: r.masked_destination,
              delivery: a,
              availableDeliveries: o,
            }
          })(e)
          return C && f(C) ? { ...i, disputeAccessVerification: _(C) ? "verified" : "required" } : i
        },
        ee = async (e, i) => {
          if ((B(i), !C)) throw Error("Verification has not started")
          ;("start" === e && z(), w !== C.id && (g?.clear(), (g = (0, r.a)(M())), (w = C.id)))
          let t =
              "start" === e
                ? g?.begin({
                    checkKey: "domain-start",
                    target: S?.hostname ?? C.domain_verification?.domain ?? C.business_profile_id,
                    channel: "dns",
                    challengeId: C.domain_verification?.challenge_id ?? null,
                    challengeStatus: C.domain_verification?.status ?? null,
                  })
                : void 0,
            n = t?.idempotencyKey ?? crypto.randomUUID()
          return (
            (C = k(
              (
                await l.Request.safePost(
                  "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/domain-challenge",
                  {
                    additionalHeaders: x,
                    signal: B(i),
                    parameters: { path: { business_profile_id: C.business_profile_id, flow_id: C.id } },
                    requestBody: {
                      action: e,
                      idempotency_key: n,
                      test_domain: "start" === e ? S : void 0,
                      challenge_id: "check" === e ? C.domain_verification?.challenge_id : void 0,
                    },
                  },
                )
              ).flow,
              i,
            )),
            "start" === e && (t && g?.reconcile(t, "completed"), (S = void 0), (G = !1)),
            Z(i)
          )
        },
        ei = async (e) => {
          let i = Q(e),
            t = async () => {
              try {
                await H(e)
              } catch (i) {
                if ((B(e), i instanceof Error && "AbortError" === i.name)) throw i
                return null
              }
              return (i = Z(e))
            },
            { value: n } = await (0, o.re)({
              initial: await t(),
              lease: e,
              isPending: (e) =>
                null != e &&
                (["delivery_pending", "pending", "in_progress"].includes(e.step) ||
                  !!e.phoneAttemptUnavailable ||
                  ("persona" === e.step && !e.personaVerification?.verification_url)),
              read: t,
              intervalMs: 500,
              maxReads: 19,
            })
          return n ?? i
        },
        et = async (e, i, t, n) => {
          let r = e.action_required
          if (r?.type !== "confirm_verification_destination") throw Error("No verification destination available")
          let o = A
          A = {
            verificationId: r.verification_id,
            baselineSendCount: e.verifications.find((e) => e.id === r.verification_id)?.otp_send_count ?? 0,
            confirmation: { delivery: i, testPhoneNumber: t },
          }
          try {
            let o = await l.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/verifications/{verification_id}/destination-confirmation",
              {
                additionalHeaders: x,
                signal: B(n),
                parameters: {
                  path: {
                    business_profile_id: e.business_profile_id,
                    flow_id: e.id,
                    verification_id: r.verification_id,
                  },
                },
                requestBody: {
                  confirmed: !0,
                  destination_channel: "sms" === i ? "sms" : "phone_voice_call",
                  test_phone_number: t,
                },
              },
            )
            if ((B(n), !o.accepted)) throw Error("Destination confirmation not accepted")
          } catch (e) {
            if ((B(n), !b(e))) throw ((A = o), e)
          }
          return ei(n)
        },
        en = async (n, r) => {
          if ((B(r), null == e && null == L)) throw Error("A business entity is required to start a claim")
          if (null != L && ((null == e && "claim" === N) || T) && !t?.includes(n))
            throw Error("This verification method is unavailable for the selected Business Profile")
          !y && ("claim" === N || T) && "domain" === n && z()
          let o = V.begin({
            checkKey: "claim-create",
            target: L ?? i?.entityKey ?? e ?? "",
            channel: y ?? n,
            challengeId: null,
            challengeStatus: null,
          })
          ;((y = y ?? n),
            E?.original !== o.idempotencyKey &&
              (E = { original: o.idempotencyKey, encoded: (0, u.Ic)(D, o.idempotencyKey) }))
          let s = E.encoded
          if ("shopify" === y) {
            let t
            if (("claim" !== N && !T) || !i?.shopifyActor || null == U)
              throw Error("Shopify could not be identified for this business")
            if (null != L)
              t = { actor: i.shopifyActor, businessProfileId: L, flowType: N, routing: U, idempotencyKey: s }
            else if (null != e)
              t = { actor: i.shopifyActor, businessEntityId: e, entityKey: i.entityKey, routing: U, idempotencyKey: s }
            else throw Error("A business entity is required to start a claim")
            let n = k(await (0, p.Pu)(t), r)
            return (V.reconcile(o, "completed"), n)
          }
          let a = k(
            (
              await l.Request.safePost("/chat/frontend/v1/business-profiles/verification-flows", {
                additionalHeaders: x,
                signal: B(r),
                requestBody: {
                  ...(null != L ? { business_profile_id: L } : {}),
                  ...(null != e
                    ? {
                        business_entity_id: e,
                        ...(null == L ? { entity_key: i?.entityKey } : {}),
                        entity_category: "local_business",
                      }
                    : {}),
                  flow_type: N,
                  verification_method: "claim" === N || T ? y : void 0,
                  ...(T ? { require_business_access: !0 } : {}),
                  idempotency_key: s,
                },
              })
            ).flow,
            r,
          )
          return (V.reconcile(o, "completed"), a)
        },
        er = (e) =>
          (_(e) || ("shopify" !== v(e) && "domain" !== v(e))) &&
          ["pending", "in_progress", "needs_information", "under_review"].includes(e.status),
        eo = async (i) => {
          let t = C && er(C) ? C : await H(i)
          return (
            (B(i), er(t))
              ? ((C = k(
                  (
                    await l.Request.safePost(
                      "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/resume",
                      {
                        additionalHeaders: x,
                        signal: B(i),
                        parameters: { path: { business_profile_id: t.business_profile_id, flow_id: t.id } },
                        requestBody: null != L ? {} : { business_entity_id: e },
                      },
                    )
                  ).flow,
                  i,
                )),
                (K = !1),
                (null == C.persona_verification || "preparing" === C.persona_verification.status) &&
                  "dispute" === N &&
                  ["pending", "in_progress", "needs_information"].includes(C.status) &&
                  (await $(i)))
              : (K = !1),
            Z(i)
          )
        },
        es = async (e, i) => {
          ;(await q(i), B(i))
          let n = null == t && null != U
          return (
            (t = [...(null != U ? ["shopify"] : []), ...e.eligible_methods.filter((e) => !T || "persona" !== e)]),
            {
              telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
              step: "method",
              ...(T ? { disputeAccessVerification: "required" } : {}),
              eligibleMethods: t,
              ...(n ? { method: "shopify" } : {}),
              shopifyShopDomain: U?.shopDomain,
              destination: e.phone_destination ?? void 0,
              emailDestination: e.email_destination ?? void 0,
              claimDomain: e.claim_domain,
            }
          )
        },
        ea = async (n, r = !1) => {
          if (null != L && (null == e || "dispute" === N)) {
            let e = await m(L, { ...i, getAbortSignal: () => B(n) })
            B(n)
            let t = e.ownership.current_request
            if (t?.kind === N)
              return (
                (X = t),
                "claim" === N && null != D && (D.businessProfileId = t.business_profile_id ?? void 0),
                eo(n)
              )
            if (e.ownership.available_action !== N || null != t) throw Error("Business is not available to claim")
            return ("claim" === N && null != D && (D.businessProfileId = e.business_profile_id),
            (T = "dispute" === N && !0 === e.dispute_access_verification_enabled),
            "dispute" !== N || T)
              ? es(e, n)
              : { step: "persona" }
          }
          if (null == e) throw Error("A business entity is required to start a claim")
          let o = await l.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
            additionalHeaders: x,
            signal: B(n),
            requestBody: {
              provider: "chatgpt-local-business-entity-lookup",
              provider_business_id: e,
              ...(null == L ? { entity_key: i?.entityKey } : {}),
            },
          })
          if (
            (B(n),
            null != L &&
              ((null != o.business_profile_id && o.business_profile_id !== L) ||
                (o.ownership?.current_request != null && o.ownership.current_request.business_profile_id !== L)))
          )
            throw Error("Business profile identity mismatch")
          if (!o.ownership_state_enabled) throw Error("Business claiming is unavailable")
          if (!r && o.ownership?.current_request?.kind === N)
            return (
              (X = o.ownership.current_request),
              "claim" === N && null != D && (D.businessProfileId = X.business_profile_id ?? void 0),
              eo(n)
            )
          if (o.ownership?.available_action !== N || null != o.ownership.current_request)
            throw Error("Business is not available to claim")
          if (
            ("claim" === N &&
              null != D &&
              null != o.business_profile_id &&
              (D.businessProfileId = o.business_profile_id),
            "dispute" === N)
          )
            return o.dispute_business_profile_id ? ((L = o.dispute_business_profile_id), ea(n)) : { step: "persona" }
          ;(await q(n), B(n))
          let s = !0 === o.persona_verification_available
          t = s ? [...(null != U ? ["shopify"] : []), ...(o.eligible_verification_methods ?? []), "persona"] : void 0
          let a = {
              telemetryJourneyId: C?.telemetry_journey_id ?? void 0,
              step: "method",
              ...(s ? { eligibleMethods: t } : {}),
              claimDomain: o.claim_domain,
              shopifyShopDomain: U?.shopDomain,
            },
            d = o.eligible_verification_methods
          if (
            r &&
            null != d &&
            ((a.eligibleMethods = [
              ...(null != U ? ["shopify"] : []),
              ...d.filter((e) => "domain" !== e || !!o.claim_domain),
              ...(s ? ["persona"] : []),
            ]),
            0 === a.eligibleMethods.length)
          )
            throw Error("No verification methods are available for this place")
          return a
        },
        el = async (e, t) => {
          let n = ++J
          if (((O = void 0), "shopify" === e)) {
            if (!i?.shopifyActor) throw Error("Shopify verification requires browser web")
            null == L && (await q(t))
          }
          if (X) {
            let i = await eo(t)
            if ("shopify" !== e || null == C || "shopify" !== v(C)) return i
          }
          if (!C) {
            let i = await ea(t),
              n = (B(t), C)
            if (n && ("shopify" !== e || "shopify" !== v(n))) return i
            y !== e && (V.clear(), (y = void 0), (G = !1), (S = void 0))
          }
          if (!C) {
            let i = null != y
            try {
              if (((C = k(await en(e, t), t)), i && ["cancelled", "failed"].includes(W(t)))) {
                C = void 0
                let i = await ea(t)
                if ((B(t), C)) return i
                ;(V.clear(), (y = void 0), (C = k(await en(e, t), t)))
              }
            } catch (i) {
              if ((B(t), !(i instanceof c.fk) || 409 !== i.status)) throw i
              let e = await ea(t)
              if (C) return e
              throw i
            }
          }
          if ("dispute" === N && !f(C)) return (await $(t), Z(t))
          if (_(C)) return Z(t)
          if ("shopify" === v(C)) {
            let r
            if ("shopify" !== e || ["success", "failed", "cancelled", "review"].includes(W(t))) return Z(t)
            let o = Y()
            if (!i?.shopifyActor || void 0 === o) throw Error("Start Shopify verification in this browser tab")
            let s = C.id
            try {
              r = await (0, p.iW)({ actor: i.shopifyActor, flow: C, shopHint: o })
            } catch (e) {
              throw (
                t.isCurrent() &&
                  n === J &&
                  e instanceof c.fk &&
                  409 === e.status &&
                  (B(t),
                  i.shopifyActor.assertCurrentActor(),
                  i.shopifyActor.getAbortSignal().throwIfAborted(),
                  (O = s)),
                e
              )
            }
            return (
              B(t),
              i.shopifyActor.assertCurrentActor(),
              i.shopifyActor.getAbortSignal().throwIfAborted(),
              window.location.assign(r),
              { ...Z(t), shopifyRedirecting: !0 }
            )
          }
          if (v(C) !== e) throw Error("Cancel the existing claim before changing verification method")
          return "domain" === v(C)
            ? C.domain_verification?.status === "not_started" &&
              ["pending", "in_progress", "needs_information"].includes(C.status)
              ? ee("start", t)
              : Z(t)
            : (await $(t), Z(t))
        },
        ed = async (e, i, t) => {
          if (null == C || "email" !== v(C)) throw Error("Email verification is not available")
          let n = C.action_required
          "submit" === e && null != n && (I = { flowId: C.id, verificationId: n.verification_id })
          try {
            let n = await l.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/email-challenge",
              {
                parameters: { path: { business_profile_id: C.business_profile_id, flow_id: C.id } },
                additionalHeaders: x,
                signal: B(i),
                requestBody: { action: e, code: t },
              },
            )
            C = k(n.flow, i)
          } catch (e) {
            if ((B(i), !b(e))) throw ((I = void 0), e)
            await H(i)
          }
          return Z(i)
        },
        ec = i?.currentRequest?.status ?? "account"
      return {
        telemetryJourney: D,
        initialStep: "under_review" === ec ? "review" : ec,
        getApprovedProfileId: () => (C?.status === "approved" ? C.business_profile_id : void 0),
        resume: j(eo),
        prepareNewPlaceClaim: j((e) => ea(e, !0)),
        prepareProfileMethods: (e) => j((i) => es(e, i))(),
        prepare: j(async (e) =>
          (X?.shopify_verification && (await q(e)), X) ? eo(e) : C ? (await H(e), Z(e)) : ea(e),
        ),
        checkDomain: j(async (e) => {
          if ((await H(e), !C || !["pending", "in_progress", "needs_information"].includes(C.status))) return Z(e)
          let i = C.domain_verification,
            t = i?.status === "pending" || i?.status === "passed" ? "check" : "start"
          try {
            return await ee(t, e)
          } catch (i) {
            if (
              "check" !== t ||
              !(function (e) {
                if (!(e instanceof c.fk) || 409 !== e.status) return !1
                try {
                  return a
                    .object({ error: a.object({ message: a.literal("Wait 30 seconds between DNS checks") }) })
                    .safeParse(JSON.parse(e.message)).success
                } catch {
                  return !1
                }
              })(i)
            )
              throw i
            return (await H(e), { ...Z(e), domainCheckSkipped: !0 })
          }
        }),
        start: j((e, i = "phone") => el(i, e)),
        startEmail: j((e) => el("email", e)),
        sendEmail: j(async (e) => (await H(e), "delivery" === Z(e).step ? ed("start", e) : Z(e))),
        send: j(async (e, i, t) => {
          let n = await H(e)
          B(e)
          let r = Z(e)
          return "delivery" !== r.step || r.phoneAttemptUnavailable
            ? "delivery_pending" === r.step
              ? ei(e)
              : r
            : et(n, i, t, e)
        }),
        resend: j(async (e) => {
          let i = await H(e)
          if ((B(e), "email" === v(i))) return ["code", "delivery_pending"].includes(Z(e).step) ? ed("resend", e) : Z(e)
          let t = null != A,
            n = Z(e)
          if (
            null != n.verificationIssue ||
            (t && "delivery_pending" !== n.step) ||
            !["code", "delivery_pending"].includes(n.step)
          )
            return n
          let r = i.action_required
          if (
            r?.type === "confirm_verification_destination" &&
            A?.verificationId === r.verification_id &&
            A.confirmation
          )
            return et(i, A.confirmation.delivery, A.confirmation.testPhoneNumber, e)
          if (r?.type !== "submit_otp" && r?.type !== "retry_otp_delivery") return ei(e)
          let o = A
          A = {
            verificationId: r.verification_id,
            baselineSendCount: i.verifications.find((e) => e.id === r.verification_id)?.otp_send_count ?? 0,
          }
          try {
            let t = await l.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/verifications/{verification_id}/resend",
              {
                additionalHeaders: x,
                signal: B(e),
                parameters: {
                  path: {
                    business_profile_id: i.business_profile_id,
                    flow_id: i.id,
                    verification_id: r.verification_id,
                  },
                },
                requestBody: {},
              },
            )
            if ((B(e), !t.accepted)) throw Error("OTP resend not accepted")
          } catch (i) {
            if ((B(e), !b(i))) throw ((A = o), i)
          }
          return ei(e)
        }),
        verify: j(async (e, i) => {
          let t = await H(e)
          B(e)
          let n = Z(e)
          if ("email" === v(t)) return "code" === n.step ? ed("submit", e, i) : n
          if ("code" !== n.step) return n
          let r = t.action_required
          if (r?.type !== "submit_otp") throw Error("OTP submission is not available")
          I = { flowId: t.id, verificationId: r.verification_id }
          try {
            let n = await l.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/verifications/{verification_id}/phone-otp",
              {
                additionalHeaders: x,
                signal: B(e),
                parameters: {
                  path: {
                    business_profile_id: t.business_profile_id,
                    flow_id: t.id,
                    verification_id: r.verification_id,
                  },
                },
                requestBody: { code: i },
              },
            )
            if ((B(e), !n.accepted)) throw Error("OTP not accepted")
          } catch (i) {
            if ((B(e), !b(i))) throw ((I = void 0), i)
          }
          try {
            await H(e)
          } catch (i) {
            if ((B(e), !(i instanceof c.fk))) throw i
            return { step: "pending" }
          }
          return Z(e)
        }),
        check: j(async (e) => {
          let i
          if (!C && !X && null != y) return ea(e)
          try {
            ;((i = await H(e)), B(e))
          } catch (i) {
            throw (e.isCurrent() && (B(e), (O = void 0)), i)
          }
          if (K && "under_review" === i.status && "business_presence_profile_claim_v1" === i.policy_version)
            return eo(e)
          let t = Z(e)
          return void 0 !== O && !0 !== t.shopifyStartConflict ? ((O = void 0), { ...t, shopifyStartConflict: !1 }) : t
        }),
        cancel: j(async (e) => {
          ;(++J, (O = void 0))
          let i = await H(e)
          if (
            (B(e),
            (C = k(
              ("shopify" === v(i)
                ? await l.Request.safePost(
                    "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/shopify-challenge",
                    {
                      additionalHeaders: x,
                      signal: B(e),
                      parameters: { path: { business_profile_id: i.business_profile_id, flow_id: i.id } },
                      requestBody: { action: "cancel" },
                    },
                  )
                : await l.Request.safePost(
                    "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/cancel",
                    {
                      additionalHeaders: x,
                      signal: B(e),
                      parameters: { path: { business_profile_id: i.business_profile_id, flow_id: i.id } },
                      requestBody: {},
                    },
                  )
              ).flow,
              e,
            )),
            "cancelled" !== W(e))
          )
            throw Error("Claim was not cancelled")
        }),
      }
    }
    function v(e) {
      return "shopify" === e.claim_verification_method
        ? "shopify"
        : (("selected_claim_verification_method" in e ? e.selected_claim_verification_method : void 0) ??
            e.claim_verification_method ??
            "phone")
    }
    function b(e) {
      return (
        e instanceof c.fk &&
        "AbortError" !== e.name &&
        ("network" === e.errorKind || 408 === e.status || (e.status >= 500 && e.status < 600))
      )
    }
  },
  kSYk(e, i, t) {
    t.d(i, { A: () => f })
    var n = t("ABep"),
      r = t("QosV"),
      o = t("zd8w"),
      s = t("oyxz"),
      a = t("M05Q"),
      l = t("LtFi"),
      d = t("CNZc")
    function c(e) {
      let i,
        t,
        s,
        c,
        u,
        f,
        _ = (0, r.c)(45),
        {
          phase: p,
          busy: h,
          disabled: m,
          codeDisabled: y,
          canResend: v,
          cooldownSeconds: b,
          code: E,
          onCodeChange: I,
          onVerify: g,
          invalid: w,
          retryLabel: S,
          error: A,
          onResend: C,
          onCheck: O,
          checkDisabled: x,
          hidePendingActions: N,
          hidePendingStatus: R,
          hideProgress: P,
          backAction: D,
          standaloneCodeForm: L,
        } = e,
        T = void 0 !== y && y,
        M = h || (void 0 !== m && m),
        j = M || !v || b > 0,
        B = (0, o.useRef)(!1)
      _[0] !== T || _[1] !== M || _[2] !== g
        ? ((i = async function (e) {
            if (!M && !T && !B.current && /^\d{6}$/.test(e)) {
              B.current = !0
              try {
                await g(e)
              } catch (e) {
                throw ((B.current = !1), e)
              }
              B.current = !1
            }
          }),
          (_[0] = T),
          (_[1] = M),
          (_[2] = g),
          (_[3] = i))
        : (i = _[3])
      let k = i,
        U = "code" === p && L,
        F = U ? "form" : "div"
      return (
        _[4] !== E || _[5] !== w || _[6] !== S || _[7] !== U || _[8] !== k
          ? ((t = U
              ? (e) => {
                  ;(e.preventDefault(), (w && null == S) || k(E))
                }
              : void 0),
            (_[4] = E),
            (_[5] = w),
            (_[6] = S),
            (_[7] = U),
            (_[8] = k),
            (_[9] = t))
          : (t = _[9]),
        _[10] !== E || _[11] !== w || _[12] !== p || _[13] !== S || _[14] !== k
          ? ((s = (e) => {
              "code" === p &&
                "Enter" === e.key &&
                !e.nativeEvent.isComposing &&
                e.target instanceof HTMLInputElement &&
                (e.preventDefault(), (w && null == S) || k(E))
            }),
            (_[10] = E),
            (_[11] = w),
            (_[12] = p),
            (_[13] = S),
            (_[14] = k),
            (_[15] = s))
          : (s = _[15]),
        _[16] !== D ||
        _[17] !== h ||
        _[18] !== x ||
        _[19] !== E ||
        _[20] !== T ||
        _[21] !== b ||
        _[22] !== A ||
        _[23] !== N ||
        _[24] !== R ||
        _[25] !== M ||
        _[26] !== w ||
        _[27] !== O ||
        _[28] !== I ||
        _[29] !== C ||
        _[30] !== p ||
        _[31] !== j ||
        _[32] !== S ||
        _[33] !== k
          ? ((c =
              "code" === p
                ? (0, n.jsx)(l.I, {
                    code: E,
                    disabled: M || T,
                    pending: h,
                    invalid: w,
                    error: A,
                    retryLabel: S,
                    actionSize: "formAction",
                    resendDisabled: j,
                    cooldownSeconds: b,
                    onChange: I,
                    onVerify: (e) => void k(e),
                    onResend: C,
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      !R && (0, n.jsx)(a.rm, {}),
                      null != A && (0, n.jsx)("p", { role: "alert", className: "text-sm text-danger", children: A }),
                      !N &&
                        (0, n.jsx)("div", {
                          className: "flex flex-wrap gap-2",
                          children: (0, n.jsx)(a.MN, {
                            checkDisabled: M || !0 === x,
                            retryDisabled: j || null == C,
                            onCheck: O,
                            onRetry: () => C?.(),
                            backAction: D,
                          }),
                        }),
                      b > 0 &&
                        (0, n.jsx)("p", {
                          role: "status",
                          className: "text-sm text-secondary",
                          children: (0, n.jsx)(d.j, { seconds: b }),
                        }),
                    ],
                  })),
            (_[16] = D),
            (_[17] = h),
            (_[18] = x),
            (_[19] = E),
            (_[20] = T),
            (_[21] = b),
            (_[22] = A),
            (_[23] = N),
            (_[24] = R),
            (_[25] = M),
            (_[26] = w),
            (_[27] = O),
            (_[28] = I),
            (_[29] = C),
            (_[30] = p),
            (_[31] = j),
            (_[32] = S),
            (_[33] = k),
            (_[34] = c))
          : (c = _[34]),
        _[35] !== h || _[36] !== P
          ? ((u = h && !P && (0, n.jsx)(a.gv, {})), (_[35] = h), (_[36] = P), (_[37] = u))
          : (u = _[37]),
        _[38] !== F || _[39] !== h || _[40] !== t || _[41] !== s || _[42] !== c || _[43] !== u
          ? ((f = (0, n.jsxs)(F, {
              className: "flex flex-col gap-4",
              "aria-busy": h,
              onSubmit: t,
              onKeyDown: s,
              children: [c, u],
            })),
            (_[38] = F),
            (_[39] = h),
            (_[40] = t),
            (_[41] = s),
            (_[42] = c),
            (_[43] = u),
            (_[44] = f))
          : (f = _[44]),
        f
      )
    }
    var u = t("wODv")
    function f(e) {
      let i,
        t,
        l,
        f,
        _,
        p,
        h,
        m,
        y,
        v,
        b,
        E,
        I,
        g,
        w,
        S,
        A,
        C,
        O,
        x,
        N,
        R,
        P,
        D = (0, r.c)(72)
      D[0] !== e
        ? (({
            phase: v,
            delivery: l,
            availableDeliveries: i,
            onDeliveryChange: h,
            onSend: y,
            onResend: m,
            retryable: b,
            deliveryDisabled: _,
            deliveryContinueAction: f,
            retryingDelivery: E,
            sendDisabled: I,
            inForm: p,
            ...t
          } = e),
          (D[0] = e),
          (D[1] = i),
          (D[2] = t),
          (D[3] = l),
          (D[4] = f),
          (D[5] = _),
          (D[6] = p),
          (D[7] = h),
          (D[8] = m),
          (D[9] = y),
          (D[10] = v),
          (D[11] = b),
          (D[12] = E),
          (D[13] = I))
        : ((i = D[1]),
          (t = D[2]),
          (l = D[3]),
          (f = D[4]),
          (_ = D[5]),
          (p = D[6]),
          (h = D[7]),
          (m = D[8]),
          (y = D[9]),
          (v = D[10]),
          (b = D[11]),
          (E = D[12]),
          (I = D[13]))
      let [L, T] = (0, o.useState)(!1),
        [M, j] = (0, o.useState)(!1),
        B = (0, o.useRef)(!1),
        k = t.busy || !0 === t.disabled,
        U = !k && t.canResend && 0 === t.cooldownSeconds && !I,
        F = "delivery" === v || L
      D[14] !== U
        ? ((g = async function (e, i) {
            if (U && !B.current) {
              ;((B.current = !0), j(i))
              try {
                ;(await e(), T(!1))
              } catch {}
              ;((B.current = !1), j(!1))
            }
          }),
          (D[14] = U),
          (D[15] = g))
        : (g = D[15])
      let q = g
      D[16] !== i || D[17] !== U || D[18] !== l || D[19] !== y || D[20] !== q || D[21] !== M
        ? ((w = function () {
            U && !M && (!i || i.includes(l)) && q(() => y(l), !0)
          }),
          (D[16] = i),
          (D[17] = U),
          (D[18] = l),
          (D[19] = y),
          (D[20] = q),
          (D[21] = M),
          (D[22] = w))
        : (w = D[22])
      let X = w
      D[23] !== U || D[24] !== m || D[25] !== q
        ? ((S = function () {
            if (U) {
              if (null == m) return void T(!0)
              q(m, !1)
            }
          }),
          (D[23] = U),
          (D[24] = m),
          (D[25] = q),
          (D[26] = S))
        : (S = D[26])
      let K = S
      D[27] !== t || D[28] !== L || D[29] !== p || D[30] !== v || D[31] !== K || D[32] !== b || D[33] !== F
        ? ((A =
            "code" !== v && F
              ? null
              : (0, n.jsx)(c, {
                  ...t,
                  phase: v,
                  standaloneCodeForm: !p,
                  hideProgress: !0,
                  retryLabel:
                    b && !L
                      ? (0, n.jsx)(s.A, {
                          id: "businessProfiles.creation.phoneCode.retry",
                          defaultMessage: "Try again",
                          description:
                            "Retries verification of the entered phone code after a temporary request failure.",
                        })
                      : void 0,
                  onResend: "code" === v && L ? void 0 : K,
                })),
          (D[27] = t),
          (D[28] = L),
          (D[29] = p),
          (D[30] = v),
          (D[31] = K),
          (D[32] = b),
          (D[33] = F),
          (D[34] = A))
        : (A = D[34])
      let V = A
      D[35] !== i ||
      D[36] !== U ||
      D[37] !== t.backAction ||
      D[38] !== t.busy ||
      D[39] !== l ||
      D[40] !== f ||
      D[41] !== _ ||
      D[42] !== p ||
      D[43] !== k ||
      D[44] !== h ||
      D[45] !== v ||
      D[46] !== E ||
      D[47] !== X ||
      D[48] !== M ||
      D[49] !== F
        ? ((C = F
            ? (0, n.jsx)(u.P, {
                delivery: l,
                availableDeliveries: i,
                disabled: k || !0 === _,
                pending: M || (p && "delivery" === v && t.busy),
                sendDisabled: !U || M,
                actionSize: "formAction",
                retrying: E,
                onChange: h,
                onSend: p ? X : void 0,
                continueAction: "delivery" === v ? f : void 0,
                backAction: t.backAction,
              })
            : null),
          (D[35] = i),
          (D[36] = U),
          (D[37] = t.backAction),
          (D[38] = t.busy),
          (D[39] = l),
          (D[40] = f),
          (D[41] = _),
          (D[42] = p),
          (D[43] = k),
          (D[44] = h),
          (D[45] = v),
          (D[46] = E),
          (D[47] = X),
          (D[48] = M),
          (D[49] = F),
          (D[50] = C))
        : (C = D[50])
      let G = C
      return (
        D[51] !== t.error || D[52] !== V
          ? ((O =
              null == V &&
              null != t.error &&
              (0, n.jsx)("p", { role: "alert", className: "text-sm text-danger", children: t.error })),
            (D[51] = t.error),
            (D[52] = V),
            (D[53] = O))
          : (O = D[53]),
        D[54] !== p || D[55] !== G || D[56] !== X
          ? ((x =
              null == G || p
                ? G
                : (0, n.jsx)("form", {
                    onSubmit: (e) => {
                      ;(e.preventDefault(), X())
                    },
                    children: G,
                  })),
            (D[54] = p),
            (D[55] = G),
            (D[56] = X),
            (D[57] = x))
          : (x = D[57]),
        D[58] !== t.cooldownSeconds || D[59] !== V
          ? ((N =
              null == V &&
              t.cooldownSeconds > 0 &&
              (0, n.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, n.jsx)(d.j, { seconds: t.cooldownSeconds }),
              })),
            (D[58] = t.cooldownSeconds),
            (D[59] = V),
            (D[60] = N))
          : (N = D[60]),
        D[61] !== t.busy || D[62] !== t.hideProgress || D[63] !== M
          ? ((R = t.busy && !t.hideProgress && (0, n.jsx)(a.gv, { visuallyHidden: M })),
            (D[61] = t.busy),
            (D[62] = t.hideProgress),
            (D[63] = M),
            (D[64] = R))
          : (R = D[64]),
        D[65] !== t.busy || D[66] !== V || D[67] !== O || D[68] !== x || D[69] !== N || D[70] !== R
          ? ((P = (0, n.jsxs)("div", {
              className: "flex flex-col gap-4",
              "aria-busy": t.busy,
              children: [V, O, x, N, R],
            })),
            (D[65] = t.busy),
            (D[66] = V),
            (D[67] = O),
            (D[68] = x),
            (D[69] = N),
            (D[70] = R),
            (D[71] = P))
          : (P = D[71]),
        P
      )
    }
  },
  VUft(e, i, t) {
    var n = t("DBCl"),
      r = t("Ghh3"),
      o = t("XcNx")
    let s = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.myshopify\.com$/,
      a = /^gid:\/\/shopify\/Shop\/[1-9][0-9]{0,19}$/,
      l = "business-profile-shopify-attempt:"
    function d(e) {
      if (!(0, o.x)({ browser: !0 })) throw Error("Shopify verification requires browser web")
      ;(e.getAbortSignal().throwIfAborted(), e.assertCurrentActor())
    }
    function c(e) {
      return (
        d(e),
        {
          additionalHeaders: { "ChatGPT-Account-ID": e.accountId, [n.zBc]: e.accountId, "x-openai-use-sheep": "1" },
          expectedIdentity: { accountId: e.accountId, userId: e.userId },
          assertRequestCurrent: () => d(e),
          signal: e.getAbortSignal(),
          retry: "never",
          expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 426],
        }
      )
    }
    t.d(
      i,
      {},
      {
        Ip: async function (e) {
          if (
            (d(e.actor),
            0 === e.businessProfileId.length ||
              e.businessProfileId.length > 2304 ||
              e.routing.testOverride ||
              !a.test(e.routing.shopGid) ||
              !s.test(e.routing.shopDomain))
          )
            throw Error("Shopify could not be identified for this business")
          let i = await r.Request.safePost("/business-profiles/shopify/connect", {
            ...c(e.actor),
            additionalHeaders: { "ChatGPT-Account-ID": e.actor.accountId, [n.zBc]: e.actor.accountId },
            requestBody: {
              action: "create_products",
              business_profile_id: e.businessProfileId,
              shopify_shop_gid: e.routing.shopGid,
              idempotency_key: e.idempotencyKey,
              shop_hint: e.routing.shopDomain,
            },
          })
          if (
            (d(e.actor),
            i.flow.business_profile_id !== e.businessProfileId ||
              "shopify" !== i.flow.claim_verification_method ||
              0 === i.flow.id.length ||
              i.flow.id.length > 2304 ||
              null == i.oauth_url)
          )
            throw Error("Shopify verification changed")
          let t = new URL(i.oauth_url)
          if (
            ![
              "https://connect.ads.openai.com",
              "https://ads-manager-shopify.gateway.unified-0s.internal.api.openai.org",
            ].includes(t.origin) ||
            "/auth/business-profile/start" !== t.pathname ||
            t.username ||
            t.password ||
            t.hash ||
            i.oauth_url.length > 8192 ||
            1 !== t.searchParams.getAll("flow_id").length ||
            t.searchParams.get("flow_id") !== i.flow.id ||
            1 !== t.searchParams.getAll("shop").length ||
            t.searchParams.get("shop") !== e.routing.shopDomain ||
            1 !== t.searchParams.getAll("proof_purpose").length ||
            "products" !== t.searchParams.get("proof_purpose") ||
            1 !== t.searchParams.getAll("shop_gid").length ||
            t.searchParams.get("shop_gid") !== e.routing.shopGid ||
            1 !== t.searchParams.getAll("challenge").length ||
            !/^[A-Za-z0-9_-]{32,256}$/.test(t.searchParams.get("challenge") ?? "") ||
            1 !== t.searchParams.getAll("environment").length ||
            t.searchParams.get("environment") !==
              ("https://connect.ads.openai.com" === t.origin ? "production" : "staging") ||
            Array.from(t.searchParams.keys()).some(
              (e) => !["flow_id", "shop", "shop_gid", "challenge", "environment", "proof_purpose"].includes(e),
            )
          )
            throw Error("Shopify verification cannot start")
          return t.href
        },
        K5: async function (e) {
          if (
            (d(e.actor),
            (null != e.businessProfileId) == (null != e.businessEntityId) ||
              (null != e.businessProfileId && null != e.entityKey))
          )
            throw Error("Choose one Business Profile identity")
          try {
            let i = await r.Request.safePost("/chat/frontend/v1/business-profiles/shopify/discovery", {
              ...c(e.actor),
              signal: AbortSignal.any([e.actor.getAbortSignal(), AbortSignal.timeout(12e3)]),
              requestBody:
                null != e.businessProfileId
                  ? { business_profile_id: e.businessProfileId }
                  : { business_entity_id: e.businessEntityId, entity_key: e.entityKey ?? void 0 },
            })
            if (
              (d(e.actor),
              null == i.shop_gid || !a.test(i.shop_gid) || null == i.myshopify_domain || !s.test(i.myshopify_domain))
            )
              return null
            return { shopGid: i.shop_gid, shopDomain: i.myshopify_domain, testOverride: !1 }
          } catch {
            return (d(e.actor), null)
          }
        },
        Pu: async function (e) {
          if (
            (d(e.actor),
            (null != e.businessProfileId) == (null != e.businessEntityId) ||
              (null != e.businessProfileId && null != e.entityKey))
          )
            throw Error("Choose one Business Profile identity")
          if (!a.test(e.routing.shopGid) || !s.test(e.routing.shopDomain))
            throw Error("Shopify could not be identified for this business")
          if ("dispute" === e.flowType && null == e.businessProfileId)
            throw Error("Disputes require a Business Profile")
          let i = await r.Request.safePost("/chat/frontend/v1/business-profiles/shopify/connect", {
            ...c(e.actor),
            requestBody: {
              action: "dispute" === e.flowType ? "create_dispute" : "create_claim",
              ...(null != e.businessProfileId
                ? { business_profile_id: e.businessProfileId }
                : {
                    business_entity_id: e.businessEntityId,
                    entity_key: e.entityKey,
                    entity_category: "local_business",
                  }),
              shopify_shop_gid: e.routing.shopGid,
              shopify_test_override: e.routing.testOverride,
              idempotency_key: e.idempotencyKey,
            },
          })
          if (
            (d(e.actor),
            i.flow.flow_type !== (e.flowType ?? "claim") ||
              "shopify" !== i.flow.claim_verification_method ||
              (null != e.businessProfileId && i.flow.business_profile_id !== e.businessProfileId))
          )
            throw Error("Shopify verification changed")
          return i.flow
        },
        TY: function (e) {
          d(e.actor)
          try {
            let i = JSON.parse(window.sessionStorage.getItem(l + e.flowId) ?? "null")
            if (
              null == i ||
              "object" != typeof i ||
              !("accountId" in i) ||
              i.accountId !== e.actor.accountId ||
              !("userId" in i) ||
              i.userId !== e.actor.userId ||
              !("profileId" in i) ||
              i.profileId !== e.profileId ||
              !("flowId" in i) ||
              i.flowId !== e.flowId ||
              !("shopHint" in i) ||
              "string" != typeof i.shopHint ||
              !s.test(i.shopHint) ||
              !("expiresAt" in i) ||
              "number" != typeof i.expiresAt ||
              !Number.isFinite(i.expiresAt) ||
              i.expiresAt <= Date.now() ||
              i.expiresAt > Date.now() + 6e5
            )
              return
            return i.shopHint
          } catch {
            return
          }
        },
        iW: async function (e) {
          return (async function (e) {
            if (
              (d(e.actor),
              ("claim" !== e.flow.flow_type && "dispute" !== e.flow.flow_type) ||
                ("shopify" !== e.flow.claim_verification_method &&
                  (!("selected_claim_verification_method" in e.flow) ||
                    "shopify" !== e.flow.selected_claim_verification_method)) ||
                !s.test(e.shopHint) ||
                0 === e.flow.id.length ||
                e.flow.id.length > 2304 ||
                0 === e.flow.business_profile_id.length ||
                e.flow.business_profile_id.length > 2304)
            )
              throw Error("Shopify verification cannot start")
            let i = await r.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/shopify-challenge",
              {
                ...c(e.actor),
                parameters: { path: { business_profile_id: e.flow.business_profile_id, flow_id: e.flow.id } },
                requestBody: { action: "start", shop_hint: e.shopHint },
              },
            )
            if (
              (d(e.actor),
              i.flow.flow_type !== e.flow.flow_type ||
                i.flow.id !== e.flow.id ||
                i.flow.business_profile_id !== e.flow.business_profile_id ||
                "shopify" !== i.flow.claim_verification_method ||
                null == i.oauth_url)
            )
              throw Error("Shopify verification changed")
            let t = new URL(i.oauth_url)
            if (
              ![
                "https://connect.ads.openai.com",
                "https://ads-manager-shopify.gateway.unified-0s.internal.api.openai.org",
              ].includes(t.origin) ||
              "/auth/business-profile/start" !== t.pathname ||
              t.username ||
              t.password ||
              t.hash ||
              1 !== t.searchParams.getAll("flow_id").length ||
              t.searchParams.get("flow_id") !== e.flow.id ||
              1 !== t.searchParams.getAll("shop").length ||
              t.searchParams.get("shop") !== e.shopHint ||
              i.oauth_url.length > 8192
            )
              throw Error("Shopify verification cannot start")
            return (
              d(e.actor),
              window.sessionStorage.setItem(
                l + e.flow.id,
                JSON.stringify({
                  accountId: e.actor.accountId,
                  userId: e.actor.userId,
                  profileId: e.flow.business_profile_id,
                  flowId: e.flow.id,
                  shopHint: e.shopHint,
                  expiresAt: Date.now() + 6e5,
                }),
              ),
              d(e.actor),
              t.href
            )
          })(e)
        },
      },
    )
  },
  M05Q(e, i, t) {
    var n = t("ABep"),
      r = t("QosV"),
      o = t("oyxz"),
      s = t("ygO2"),
      a = t("RNul")
    function l() {
      let e,
        i = (0, r.c)(1)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(o.A, {
              id: "chatgpt.localBusiness.claim.delivery.retrySending",
              defaultMessage: "Retry sending",
              description:
                "Explicitly requests another business verification code when the previous delivery has not been confirmed",
            })),
            (i[0] = e))
          : (e = i[0]),
        e
      )
    }
    t.d(
      i,
      {},
      {
        MN: function (e) {
          let i,
            t,
            a,
            d,
            c,
            u = (0, r.c)(14),
            { checkDisabled: f, retryDisabled: _, onCheck: p, onRetry: h, backAction: m } = e,
            y = null == p ? "primary" : "outlineGhost"
          ;(u[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, n.jsx)(l, {})), (u[0] = i)) : (i = u[0]),
            u[1] !== h || u[2] !== _ || u[3] !== y
              ? ((t = (0, n.jsx)(s.$, {
                  type: "button",
                  size: "formAction",
                  radius: "full",
                  color: y,
                  disabled: _,
                  onClick: h,
                  children: i,
                })),
                (u[1] = h),
                (u[2] = _),
                (u[3] = y),
                (u[4] = t))
              : (t = u[4]))
          let v = t
          return (
            u[5] !== f || u[6] !== p
              ? ((a =
                  null != p
                    ? (0, n.jsx)(s.$, {
                        type: "button",
                        size: "formAction",
                        radius: "full",
                        color: "primary",
                        disabled: f,
                        onClick: p,
                        children: (0, n.jsx)(o.A, {
                          id: "chatgpt.localBusiness.claim.delivery.checkStatus",
                          defaultMessage: "Check status",
                          description:
                            "Reads the existing business phone verification status without sending another code",
                        }),
                      })
                    : null),
                (u[5] = f),
                (u[6] = p),
                (u[7] = a))
              : (a = u[7]),
            u[8] !== m || u[9] !== v
              ? ((d =
                  null == m
                    ? v
                    : (0, n.jsxs)("div", {
                        className: "flex max-w-full flex-wrap items-center gap-2",
                        children: [v, m],
                      })),
                (u[8] = m),
                (u[9] = v),
                (u[10] = d))
              : (d = u[10]),
            u[11] !== a || u[12] !== d
              ? ((c = (0, n.jsxs)(n.Fragment, { children: [a, d] })), (u[11] = a), (u[12] = d), (u[13] = c))
              : (c = u[13]),
            c
          )
        },
        gv: function (e) {
          let i,
            t,
            s,
            l,
            d = (0, r.c)(9),
            { visuallyHidden: c } = e,
            u = void 0 !== c && c,
            f = u ? "sr-only" : void 0
          d[0] !== u ? ((i = !u && (0, n.jsx)(a.y, {})), (d[0] = u), (d[1] = i)) : (i = d[1])
          let _ = u ? void 0 : "sr-only"
          return (
            d[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(o.A, {
                  id: "chatgpt.localBusiness.claim.pending",
                  defaultMessage: "Working…",
                  description: "Accessible pending state while a business verification action completes",
                })),
                (d[2] = t))
              : (t = d[2]),
            d[3] !== _ ? ((s = (0, n.jsx)("span", { className: _, children: t })), (d[3] = _), (d[4] = s)) : (s = d[4]),
            d[5] !== f || d[6] !== i || d[7] !== s
              ? ((l = (0, n.jsxs)("div", { className: f, role: "status", children: [i, s] })),
                (d[5] = f),
                (d[6] = i),
                (d[7] = s),
                (d[8] = l))
              : (l = d[8]),
            l
          )
        },
        rm: function () {
          let e,
            i = (0, r.c)(1)
          return (
            i[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)("p", {
                  role: "status",
                  className: "text-secondary",
                  children: (0, n.jsx)(o.A, {
                    id: "chatgpt.localBusiness.claim.status.deliveryPending",
                    defaultMessage:
                      "Your code may still be on its way. Check its status to continue, or request another code if it hasn’t arrived.",
                    description:
                      "Delivery has not yet been confirmed by the server. The user can check the existing verification without sending another code, or deliberately request another code.",
                  }),
                })),
                (i[0] = e))
              : (e = i[0]),
            e
          )
        },
        wn: l,
      },
    )
  },
  B5UP(e, i, t) {
    t.d(i, { m: () => y })
    var n = t("ABep"),
      r = t("QosV"),
      o = t("Wf1j"),
      s = t("oyxz"),
      a = t("ZEx5"),
      l = t("slpy"),
      d = t("zd8w"),
      c = t("ygO2"),
      u = t("uuN8"),
      f = t("GO7r"),
      _ = t("nzx4"),
      p = t("AWNZ"),
      h = t("aepO")
    function m(e) {
      let i,
        t,
        s,
        a,
        m,
        y,
        v,
        b = (0, r.c)(20),
        { label: E, value: I, help: g, copyLabel: w } = e,
        S = (0, o.A)(),
        A = (0, d.useId)()
      b[0] !== g || b[1] !== A || b[2] !== E
        ? ((i =
            null == g
              ? E
              : (0, n.jsxs)("span", {
                  className: "inline-flex items-center gap-1",
                  children: [
                    E,
                    (0, n.jsxs)(_.AM, {
                      children: [
                        (0, n.jsx)(_.Wv, {
                          asChild: !0,
                          children: (0, n.jsx)(l.m, {
                            content: (0, n.jsx)("div", {
                              className: "text-start text-sm leading-5 font-normal",
                              children: g.content,
                            }),
                            children: (0, n.jsx)(c.$, {
                              "aria-label": g.label,
                              color: "ghostTertiary",
                              size: "inline",
                              children: (0, n.jsx)(f.ehD, {}),
                            }),
                          }),
                        }),
                        (0, n.jsx)(_.hl, {
                          "aria-label": g.label,
                          "aria-describedby": A,
                          size: "large",
                          variant: "menu",
                          children: (0, n.jsx)("div", { id: A, className: "text-sm select-text", children: g.content }),
                        }),
                      ],
                    }),
                  ],
                })),
          (b[0] = g),
          (b[1] = A),
          (b[2] = E),
          (b[3] = i))
        : (i = b[3])
      let C = i
      return (
        b[4] !== C
          ? ((t = (0, n.jsx)("span", { className: "text-xs leading-4 text-secondary", children: C })),
            (b[4] = C),
            (b[5] = t))
          : (t = b[5]),
        b[6] !== I
          ? ((s = (0, n.jsx)("span", {
              className: "block text-base leading-6 break-all text-default select-text",
              children: I,
            })),
            (b[6] = I),
            (b[7] = s))
          : (s = b[7]),
        b[8] !== w || b[9] !== S
          ? ((a =
              w ??
              S.formatMessage({
                id: "businessProfiles.verification.copyDns",
                defaultMessage: "Copy DNS record detail",
                description: "Copy one DNS record detail to the clipboard",
              })),
            (b[8] = w),
            (b[9] = S),
            (b[10] = a))
          : (a = b[10]),
        b[11] !== I ? ((m = (e) => (0, h.E)(I, e)), (b[11] = I), (b[12] = m)) : (m = b[12]),
        b[13] !== a || b[14] !== m
          ? ((y = (0, n.jsx)(u.i, { iconOnly: !0, variant: "codeBlock", ariaLabel: a, onCopy: m })),
            (b[13] = a),
            (b[14] = m),
            (b[15] = y))
          : (y = b[15]),
        b[16] !== t || b[17] !== s || b[18] !== y
          ? ((v = (0, n.jsx)(p.ic, {
              variant: "featured",
              labelWeight: "normal",
              controlSizing: "content",
              label: t,
              description: s,
              control: y,
            })),
            (b[16] = t),
            (b[17] = s),
            (b[18] = y),
            (b[19] = v))
          : (v = b[19]),
        v
      )
    }
    function y(e) {
      let i,
        t,
        l = (0, r.c)(9),
        { recordType: d, recordName: c, recordValue: u, variant: f, nameHelp: _, valueHelp: p } = e,
        h = void 0 === d ? "TXT" : d,
        y = void 0 === f ? "challenge" : f,
        v = (0, o.A)()
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(s.A, {
              id: "businessProfiles.verification.dnsType",
              defaultMessage: "Type",
              description: "DNS record type label",
            })),
            (l[0] = i))
          : (i = l[0]),
        l[1] !== v || l[2] !== _ || l[3] !== c || l[4] !== h || l[5] !== u || l[6] !== p || l[7] !== y
          ? ((t = (0, n.jsx)(a.t, {
              children: [
                { key: "type", value: h, help: void 0, label: i },
                {
                  key: "name",
                  value: c,
                  help: _,
                  label: (0, n.jsx)(s.A, {
                    id: "businessProfiles.verification.dnsHost",
                    defaultMessage: "Name or host",
                    description: "DNS record name or host label",
                  }),
                },
                {
                  key: "value",
                  value: u,
                  help: p,
                  label: (0, n.jsx)(s.A, {
                    id: "businessProfiles.verification.dnsValue",
                    defaultMessage: "Value or content",
                    description:
                      "Label for the DNS verification token the business owner copies into their provider's value or content field",
                  }),
                },
              ].map((e) => {
                let { key: i, value: t, help: r, label: o } = e
                return (0, n.jsx)(
                  m,
                  {
                    label: o,
                    value: t,
                    help: r,
                    copyLabel:
                      "manager" === y
                        ? void 0
                        : v.formatMessage(
                            {
                              id: "businessProfiles.verification.dns.copy",
                              defaultMessage:
                                "{field, select, type {Copy DNS record type} name {Copy DNS record name} other {Copy DNS record value}}",
                              description:
                                "Accessible copy-button label identifying one DNS record detail. Field is type, name, or value.",
                            },
                            { field: i },
                          ),
                  },
                  i,
                )
              }),
            })),
            (l[1] = v),
            (l[2] = _),
            (l[3] = c),
            (l[4] = h),
            (l[5] = u),
            (l[6] = p),
            (l[7] = y),
            (l[8] = t))
          : (t = l[8]),
        t
      )
    }
  },
  fi0l(e, i, t) {
    var n = t("ABep"),
      r = t("QosV"),
      o = t("oyxz"),
      s = t("M05Q"),
      a = t("LtFi"),
      l = t("CNZc")
    t.d(
      i,
      {},
      {
        S: function (e) {
          let i,
            t,
            d,
            c,
            u,
            f,
            _,
            p,
            h,
            m = (0, r.c)(52),
            {
              step: y,
              code: v,
              disabled: b,
              pending: E,
              invalid: I,
              error: g,
              description: w,
              resendDisabled: S,
              cooldownSeconds: A,
              checkDisabled: C,
              backAction: O,
              onChange: x,
              onVerify: N,
              onSend: R,
              onCheck: P,
            } = e
          return (
            m[0] !== w
              ? ((i = null != w ? (0, n.jsx)("p", { className: "text-secondary", children: w }) : null),
                (m[0] = w),
                (m[1] = i))
              : (i = m[1]),
            m[2] !== v ||
            m[3] !== A ||
            m[4] !== b ||
            m[5] !== g ||
            m[6] !== I ||
            m[7] !== x ||
            m[8] !== R ||
            m[9] !== N ||
            m[10] !== E ||
            m[11] !== S ||
            m[12] !== y
              ? ((t =
                  "code" === y
                    ? (0, n.jsx)(a.I, {
                        code: v,
                        disabled: b,
                        pending: E,
                        invalid: I,
                        error: g,
                        retryLabel:
                          null == g || b
                            ? void 0
                            : (0, n.jsx)(o.A, {
                                id: "chatgpt.localBusiness.claim.code.verify",
                                defaultMessage: "Verify",
                                description: "Checks the entered business verification code",
                              }),
                        actionSize: "formAction",
                        resendDisabled: b || S,
                        cooldownSeconds: A,
                        onChange: x,
                        onVerify: N,
                        onResend: R,
                      })
                    : null),
                (m[2] = v),
                (m[3] = A),
                (m[4] = b),
                (m[5] = g),
                (m[6] = I),
                (m[7] = x),
                (m[8] = R),
                (m[9] = N),
                (m[10] = E),
                (m[11] = S),
                (m[12] = y),
                (m[13] = t))
              : (t = m[13]),
            m[14] !== O ||
            m[15] !== C ||
            m[16] !== A ||
            m[17] !== b ||
            m[18] !== P ||
            m[19] !== R ||
            m[20] !== S ||
            m[21] !== y
              ? ((d =
                  "delivery_pending" === y
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(s.rm, {}),
                          (0, n.jsx)("div", {
                            className: "flex flex-wrap gap-2",
                            children: (0, n.jsx)(s.MN, {
                              checkDisabled: b || C,
                              retryDisabled: b || S || A > 0,
                              onCheck: P,
                              onRetry: R,
                              backAction: O,
                            }),
                          }),
                        ],
                      })
                    : null),
                (m[14] = O),
                (m[15] = C),
                (m[16] = A),
                (m[17] = b),
                (m[18] = P),
                (m[19] = R),
                (m[20] = S),
                (m[21] = y),
                (m[22] = d))
              : (d = m[22]),
            m[23] !== A || m[24] !== y
              ? ((c =
                  "code" !== y && A > 0
                    ? (0, n.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary",
                        children: (0, n.jsx)(l.j, { seconds: A }),
                      })
                    : null),
                (m[23] = A),
                (m[24] = y),
                (m[25] = c))
              : (c = m[25]),
            m[26] !== g || m[27] !== y
              ? ((u =
                  "code" !== y && null != g
                    ? (0, n.jsx)("p", { role: "alert", className: "text-sm text-danger", children: g })
                    : null),
                (m[26] = g),
                (m[27] = y),
                (m[28] = u))
              : (u = m[28]),
            m[29] !== E || m[30] !== y
              ? ((f =
                  "request" === y && E
                    ? (0, n.jsx)("p", {
                        role: "status",
                        className: "text-secondary",
                        children: (0, n.jsx)(o.A, {
                          id: "businessProfiles.creation.contact.sendingCode",
                          defaultMessage: "Sending your code…",
                          description:
                            "Status while requesting a business email verification code during profile creation.",
                        }),
                      })
                    : null),
                (m[29] = E),
                (m[30] = y),
                (m[31] = f))
              : (f = m[31]),
            m[32] !== O || m[33] !== A || m[34] !== b || m[35] !== R || m[36] !== S || m[37] !== y
              ? ((_ =
                  "request" === y
                    ? (0, n.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: (0, n.jsx)(s.MN, {
                          checkDisabled: !0,
                          retryDisabled: b || S || A > 0,
                          onRetry: R,
                          backAction: O,
                        }),
                      })
                    : null),
                (m[32] = O),
                (m[33] = A),
                (m[34] = b),
                (m[35] = R),
                (m[36] = S),
                (m[37] = y),
                (m[38] = _))
              : (_ = m[38]),
            m[39] !== E || m[40] !== y
              ? ((p = E && "request" !== y ? (0, n.jsx)(s.gv, {}) : null), (m[39] = E), (m[40] = y), (m[41] = p))
              : (p = m[41]),
            m[42] !== E ||
            m[43] !== i ||
            m[44] !== t ||
            m[45] !== d ||
            m[46] !== c ||
            m[47] !== u ||
            m[48] !== f ||
            m[49] !== _ ||
            m[50] !== p
              ? ((h = (0, n.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  "aria-busy": E,
                  children: [i, t, d, c, u, f, _, p],
                })),
                (m[42] = E),
                (m[43] = i),
                (m[44] = t),
                (m[45] = d),
                (m[46] = c),
                (m[47] = u),
                (m[48] = f),
                (m[49] = _),
                (m[50] = p),
                (m[51] = h))
              : (h = m[51]),
            h
          )
        },
        k: function (e) {
          let i,
            t = (0, r.c)(3),
            { step: s, destination: a } = e
          if ("code" === s) {
            let e
            return (
              t[0] !== a
                ? ((e = (0, n.jsx)(o.A, {
                    id: "chatgpt.localBusiness.claim.email.code.title",
                    defaultMessage: "Enter the verification code sent to {email}",
                    description:
                      "Heading above the six-digit business email verification input after a code is sent. {email} is the business email selected by the flow and may be masked.",
                    values: { email: (0, n.jsx)("bdi", { className: "wrap-anywhere", children: a }, "email") },
                  })),
                  (t[0] = a),
                  (t[1] = e))
                : (e = t[1]),
              e
            )
          }
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(o.A, {
                  id: "businessProfiles.verification.email.deliveryPending.title",
                  defaultMessage: "Checking email code delivery",
                  description:
                    "Heading while delivery of a business email verification code is not yet confirmed. The owner can check the status or request another code after the waiting period; this does not imply that delivery succeeded or failed.",
                })),
                (t[2] = i))
              : (i = t[2]),
            i
          )
        },
      },
    )
  },
  uAf3(e, i, t) {
    var n = t("ABep"),
      r = t("QosV"),
      o = t("a7dB"),
      s = t("oyxz"),
      a = t("ygO2"),
      l = t("JNtf"),
      d = t("HOLv"),
      c = t("GO7r")
    function u(e) {
      return e.preventDefault()
    }
    t.d(
      i,
      {},
      {
        Y: function (e) {
          let i,
            t,
            l,
            u,
            f,
            _,
            p,
            h,
            m,
            y = (0, r.c)(30),
            {
              backButtonRef: v,
              backLabel: b,
              onBack: E,
              busy: I,
              preview: g,
              previewLabel: w,
              content: S,
              contentFirstOnMobile: A,
              mobileConfirmation: C,
              hidePreviewOnMobile: O,
            } = e,
            x = void 0 !== A && A,
            N = void 0 !== C && C,
            R = void 0 === O ? N : O,
            P = null == w ? "div" : "aside",
            D = `flex items-center justify-center bg-surface-tertiary px-6 py-20 md:order-2 md:px-12 ${R ? "max-md:hidden" : ""}`
          y[0] !== P || y[1] !== g || y[2] !== w || y[3] !== D
            ? ((i = (0, n.jsx)(P, { className: D, "aria-label": w, children: g }, "preview")),
              (y[0] = P),
              (y[1] = g),
              (y[2] = w),
              (y[3] = D),
              (y[4] = i))
            : (i = y[4])
          let L = i,
            T = `flex items-center justify-center px-6 py-12 md:order-1 md:px-12 lg:px-20 ${N ? "max-md:pt-20 max-md:pb-6" : ""}`
          y[5] !== S || y[6] !== T
            ? ((t = (0, n.jsx)("div", { className: T, children: S }, "content")), (y[5] = S), (y[6] = T), (y[7] = t))
            : (t = y[7])
          let M = t
          y[8] !== b || y[9] !== N || y[10] !== E
            ? ((l =
                N &&
                (0, n.jsx)(a.$, {
                  size: "iconCircle",
                  color: "secondary",
                  className: "size-11 rounded-full bg-surface/80 md:hidden",
                  "aria-label": b,
                  onClick: E,
                  children: (0, n.jsx)(c.pgK, {}),
                })),
              (y[8] = b),
              (y[9] = N),
              (y[10] = E),
              (y[11] = l))
            : (l = y[11])
          let j = `text-sm leading-5 font-normal ${N ? "max-md:hidden" : ""}`
          return (
            y[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, n.jsx)(d.I, { asset: o.Y, className: "shrink-0" })),
                (f = (0, n.jsx)(s.A, {
                  id: "chatgpt.localBusiness.claim.chatgpt",
                  defaultMessage: "ChatGPT",
                  description: "Product name beside the back chevron in the business claim page header",
                })),
                (y[12] = u),
                (y[13] = f))
              : ((u = y[12]), (f = y[13])),
            y[14] !== v || y[15] !== b || y[16] !== I || y[17] !== E || y[18] !== j
              ? ((_ = (0, n.jsxs)(a.$, {
                  ref: v,
                  type: "button",
                  size: "inline",
                  className: j,
                  color: "ghostActive",
                  disabled: I,
                  onClick: E,
                  "aria-label": b,
                  children: [u, f],
                })),
                (y[14] = v),
                (y[15] = b),
                (y[16] = I),
                (y[17] = E),
                (y[18] = j),
                (y[19] = _))
              : (_ = y[19]),
            y[20] !== _ || y[21] !== l
              ? ((p = (0, n.jsxs)("div", { className: "absolute start-6 top-6 z-10", children: [l, _] })),
                (y[20] = _),
                (y[21] = l),
                (y[22] = p))
              : (p = y[22]),
            y[23] !== x || y[24] !== M || y[25] !== L
              ? ((h = (0, n.jsx)("div", {
                  className: "grid min-h-full grid-cols-1 md:grid-cols-2",
                  children: x ? [M, L] : [L, M],
                })),
                (y[23] = x),
                (y[24] = M),
                (y[25] = L),
                (y[26] = h))
              : (h = y[26]),
            y[27] !== p || y[28] !== h
              ? ((m = (0, n.jsxs)(n.Fragment, { children: [p, h] })), (y[27] = p), (y[28] = h), (y[29] = m))
              : (m = y[29]),
            m
          )
        },
        d: function (e) {
          let i,
            t,
            o,
            s = (0, r.c)(12),
            { children: a, modal: d, personaActive: c, closeDisabled: f, onClose: _, contentProps: p } = e,
            h = !c,
            m = !!c || void 0
          return (
            s[0] !== p || s[1] !== h || s[2] !== m
              ? ((i = { ...p, "aria-describedby": void 0, "aria-modal": h, inert: m, onInteractOutside: u }),
                (s[0] = p),
                (s[1] = h),
                (s[2] = m),
                (s[3] = i))
              : (i = s[3]),
            s[4] !== f || s[5] !== _
              ? ((t = (e) => {
                  e || f || _()
                }),
                (s[4] = f),
                (s[5] = _),
                (s[6] = t))
              : (t = s[6]),
            s[7] !== a || s[8] !== d || s[9] !== i || s[10] !== t
              ? ((o = (0, n.jsx)(l.lG, {
                  open: !0,
                  modal: d,
                  unstyledContent: !0,
                  viewportSized: !0,
                  showDialogClose: !1,
                  contentProps: i,
                  onOpenChange: t,
                  children: a,
                })),
                (s[7] = a),
                (s[8] = d),
                (s[9] = i),
                (s[10] = t),
                (s[11] = o))
              : (o = s[11]),
            o
          )
        },
      },
    )
  },
  LtFi(e, i, t) {
    t.d(i, { I: () => _ })
    var n = t("ABep"),
      r = t("QosV"),
      o = t("zd8w"),
      s = t("Wf1j"),
      a = t("oyxz"),
      l = t("ygO2"),
      d = t("on57"),
      c = t("zLIa")
    function u(e) {
      let i,
        t,
        s,
        a,
        l,
        u,
        f = (0, r.c)(29),
        { id: _, variant: p, value: h, disabled: m, invalid: y, pending: v, label: b, describedBy: E, onChange: I } = e,
        [g, w] = (0, o.useState)(0),
        S = void 0 !== v && v ? null : Math.min(g, h.length, 5)
      if ("field" === p) {
        let e, i
        return (
          f[0] !== I ? ((e = (e) => I(e.target.value)), (f[0] = I), (f[1] = e)) : (e = f[1]),
          f[2] !== E || f[3] !== m || f[4] !== _ || f[5] !== y || f[6] !== b || f[7] !== e || f[8] !== h
            ? ((i = (0, n.jsx)(c.pd, {
                id: _,
                variant: "onboarding",
                type: "text",
                inputMode: "numeric",
                autoComplete: "one-time-code",
                pattern: "[0-9]{6}",
                maxLength: 6,
                required: !0,
                value: h,
                disabled: m,
                "aria-invalid": y,
                "aria-label": b,
                "aria-describedby": E,
                onChange: e,
              })),
              (f[2] = E),
              (f[3] = m),
              (f[4] = _),
              (f[5] = y),
              (f[6] = b),
              (f[7] = e),
              (f[8] = h),
              (f[9] = i))
            : (i = f[9]),
          i
        )
      }
      return (
        f[10] === Symbol.for("react.memo_cache_sentinel") ? ((i = [0, 1]), (f[10] = i)) : (i = f[10]),
        f[11] !== S || f[12] !== y || f[13] !== h
          ? ((t = (0, n.jsx)("div", {
              "aria-hidden": "true",
              className: "flex items-center gap-3",
              children: i.map((e) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className: "flex items-center gap-3",
                    children: [
                      1 === e && (0, n.jsx)("span", { className: "size-1 rounded-full bg-primary-solid" }),
                      (0, n.jsx)("div", {
                        className: (0, d.A)(
                          "flex divide-x overflow-hidden rounded-lg border",
                          y ? "divide-text-danger border-text-danger" : "divide-border border-default",
                        ),
                        children: [0, 1, 2].map((i) =>
                          (0, n.jsx)(
                            "span",
                            {
                              className: (0, d.A)(
                                "flex h-12 w-10 items-center justify-center text-lg first:rounded-l-lg last:rounded-r-lg sm:w-12",
                                3 * e + i === S &&
                                  "group-focus-within/verification-code:ring-2 group-focus-within/verification-code:ring-inset",
                                y
                                  ? "group-focus-within/verification-code:ring-text-danger"
                                  : "group-focus-within/verification-code:ring-ring",
                              ),
                              children:
                                h[3 * e + i] ??
                                (3 * e + i === S &&
                                  (0, n.jsx)("span", {
                                    className: "hidden h-6 w-px bg-current group-focus-within/verification-code:block",
                                  })),
                            },
                            i,
                          ),
                        ),
                      }),
                    ],
                  },
                  e,
                ),
              ),
            })),
            (f[11] = S),
            (f[12] = y),
            (f[13] = h),
            (f[14] = t))
          : (t = f[14]),
        f[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (e) => w(e.currentTarget.selectionStart ?? 0)), (f[15] = s))
          : (s = f[15]),
        f[16] !== I ? ((a = (e) => I(e.target.value)), (f[16] = I), (f[17] = a)) : (a = f[17]),
        f[18] !== E || f[19] !== m || f[20] !== _ || f[21] !== y || f[22] !== b || f[23] !== a || f[24] !== h
          ? ((l = (0, n.jsx)("input", {
              id: _,
              className:
                "absolute inset-0 size-full rounded-lg bg-transparent text-transparent caret-transparent opacity-0 outline-none",
              autoFocus: !0,
              type: "text",
              inputMode: "numeric",
              autoComplete: "one-time-code",
              maxLength: 6,
              value: h,
              disabled: m,
              "aria-invalid": y,
              "aria-describedby": E,
              "aria-label": b,
              onSelect: s,
              onChange: a,
            })),
            (f[18] = E),
            (f[19] = m),
            (f[20] = _),
            (f[21] = y),
            (f[22] = b),
            (f[23] = a),
            (f[24] = h),
            (f[25] = l))
          : (l = f[25]),
        f[26] !== t || f[27] !== l
          ? ((u = (0, n.jsxs)("div", {
              className: "group/verification-code relative w-fit max-w-full",
              dir: "ltr",
              children: [t, l],
            })),
            (f[26] = t),
            (f[27] = l),
            (f[28] = u))
          : (u = f[28]),
        u
      )
    }
    var f = t("CNZc")
    function _(e) {
      let i,
        t,
        d,
        c,
        _,
        p,
        h,
        m = (0, r.c)(32),
        {
          code: y,
          disabled: v,
          pending: b,
          invalid: E,
          error: I,
          retryLabel: g,
          actionSize: w,
          resendDisabled: S,
          cooldownSeconds: A,
          onChange: C,
          onVerify: O,
          onResend: x,
        } = e,
        N = void 0 === w ? "formAction" : w,
        R = (0, s.A)(),
        P = (0, o.useId)(),
        D = null != I ? P : void 0
      return (
        m[0] !== R
          ? ((i = R.formatMessage({
              id: "businessProfiles.verification.phoneCode.label",
              defaultMessage: "Six-digit verification code",
              description: "Accessible label for the business verification code input",
            })),
            (m[0] = R),
            (m[1] = i))
          : (i = m[1]),
        m[2] !== v || m[3] !== C || m[4] !== O
          ? ((t = (e) => {
              let i = e.replace(/\D/g, "").slice(0, 6)
              ;(C(i), v || 6 !== i.length || O(i))
            }),
            (m[2] = v),
            (m[3] = C),
            (m[4] = O),
            (m[5] = t))
          : (t = m[5]),
        m[6] !== y || m[7] !== v || m[8] !== E || m[9] !== b || m[10] !== D || m[11] !== i || m[12] !== t
          ? ((d = (0, n.jsx)(u, {
              variant: "grouped",
              value: y,
              disabled: v,
              pending: b,
              invalid: E,
              describedBy: D,
              label: i,
              onChange: t,
            })),
            (m[6] = y),
            (m[7] = v),
            (m[8] = E),
            (m[9] = b),
            (m[10] = D),
            (m[11] = i),
            (m[12] = t),
            (m[13] = d))
          : (d = m[13]),
        m[14] !== I || m[15] !== P
          ? ((c =
              null != I
                ? (0, n.jsx)("p", { id: P, role: "alert", className: "text-sm text-danger", children: I })
                : null),
            (m[14] = I),
            (m[15] = P),
            (m[16] = c))
          : (c = m[16]),
        m[17] !== A || m[18] !== x || m[19] !== S
          ? ((_ =
              null != x
                ? (0, n.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-1 text-sm text-secondary",
                    children: [
                      (0, n.jsx)(a.A, {
                        id: "businessProfiles.verification.phoneCode.resendPrompt",
                        defaultMessage: "Didn’t receive your code?",
                        description: "Prompt preceding the resend action under the business verification digit boxes",
                      }),
                      (0, n.jsx)(f.l, { variant: "inline", disabled: S, cooldownSeconds: A, onResend: x }),
                    ],
                  })
                : null),
            (m[17] = A),
            (m[18] = x),
            (m[19] = S),
            (m[20] = _))
          : (_ = m[20]),
        m[21] !== N || m[22] !== y || m[23] !== v || m[24] !== O || m[25] !== g
          ? ((p =
              null != g
                ? (0, n.jsx)(l.$, {
                    className: "self-start",
                    type: "button",
                    size: N,
                    radius: "full",
                    color: "primary",
                    disabled: v || !/^\d{6}$/.test(y),
                    onClick: () => O(y),
                    children: g,
                  })
                : null),
            (m[21] = N),
            (m[22] = y),
            (m[23] = v),
            (m[24] = O),
            (m[25] = g),
            (m[26] = p))
          : (p = m[26]),
        m[27] !== d || m[28] !== c || m[29] !== _ || m[30] !== p
          ? ((h = (0, n.jsxs)("div", { className: "flex flex-col gap-4", children: [d, c, _, p] })),
            (m[27] = d),
            (m[28] = c),
            (m[29] = _),
            (m[30] = p),
            (m[31] = h))
          : (h = m[31]),
        h
      )
    }
  },
  wODv(e, i, t) {
    var n = t("ABep"),
      r = t("QosV"),
      o = t("CU6j"),
      s = t("Wf1j"),
      a = t("oyxz"),
      l = t("M05Q"),
      d = t("nhlW")
    function c(e) {
      let i,
        t,
        l,
        d,
        c,
        u,
        f,
        _,
        p,
        h,
        m,
        y = (0, r.c)(23),
        { delivery: v, availableDeliveries: b, disabled: E, onChange: I } = e
      y[0] !== b ? ((i = void 0 === b ? ["sms", "call"] : b), (y[0] = b), (y[1] = i)) : (i = y[1])
      let g = i,
        w = (0, s.A)()
      ;(y[2] !== w
        ? ((t = w.formatMessage({
            id: "businessProfiles.verification.phoneDelivery.label",
            defaultMessage: "Code delivery method",
            description: "Accessible group label for text or phone call business verification delivery",
          })),
          (y[2] = w),
          (y[3] = t))
        : (t = y[3]),
        y[4] !== g ? ((l = g.includes("sms")), (y[4] = g), (y[5] = l)) : (l = y[5]))
      let S = !l
      ;(y[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (0, n.jsx)(a.A, {
            id: "businessProfiles.verification.phoneDelivery.sms",
            defaultMessage: "Text message",
            description: "Option to receive a business verification code by text message",
          })),
          (y[6] = d))
        : (d = y[6]),
        y[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsxs)("span", {
              className: "flex min-w-0 flex-col text-base",
              children: [
                d,
                (0, n.jsx)("span", {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(a.A, {
                    id: "businessProfiles.verification.phoneDelivery.smsDescription",
                    defaultMessage: "Get a code by SMS",
                    description:
                      "Helper text for text-message delivery of a business verification code; WhatsApp is not supported",
                  }),
                }),
              ],
            })),
            (y[7] = c))
          : (c = y[7]),
        y[8] !== S
          ? ((u = (0, n.jsx)(o.z.Item, { value: "sms", disabled: S, block: !0, children: c })), (y[8] = S), (y[9] = u))
          : (u = y[9]),
        y[10] !== g ? ((f = g.includes("call")), (y[10] = g), (y[11] = f)) : (f = y[11]))
      let A = !f
      return (
        y[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, n.jsx)(a.A, {
              id: "businessProfiles.verification.phoneDelivery.call",
              defaultMessage: "Phone call",
              description: "Option to receive a business verification code in an automated phone call",
            })),
            (y[12] = _))
          : (_ = y[12]),
        y[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsxs)("span", {
              className: "flex min-w-0 flex-col text-base",
              children: [
                _,
                (0, n.jsx)("span", {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(a.A, {
                    id: "businessProfiles.verification.phoneDelivery.callDescription",
                    defaultMessage: "Get a code through an automated phone call",
                    description: "Helper text for automated voice-call delivery of a business verification code",
                  }),
                }),
              ],
            })),
            (y[13] = p))
          : (p = y[13]),
        y[14] !== A
          ? ((h = (0, n.jsx)(o.z.Item, { value: "call", disabled: A, block: !0, children: p })),
            (y[14] = A),
            (y[15] = h))
          : (h = y[15]),
        y[16] !== v || y[17] !== E || y[18] !== I || y[19] !== h || y[20] !== t || y[21] !== u
          ? ((m = (0, n.jsx)("div", {
              className: "rounded-2xl border border-default",
              children: (0, n.jsxs)(o.z, {
                value: v,
                onChange: I,
                disabled: E,
                variant: "list",
                "aria-label": t,
                children: [u, h],
              }),
            })),
            (y[16] = v),
            (y[17] = E),
            (y[18] = I),
            (y[19] = h),
            (y[20] = t),
            (y[21] = u),
            (y[22] = m))
          : (m = y[22]),
        m
      )
    }
    t.d(
      i,
      {},
      {
        F: c,
        P: function (e) {
          let i,
            t,
            o,
            s,
            u,
            f = (0, r.c)(26),
            {
              delivery: _,
              availableDeliveries: p,
              disabled: h,
              pending: m,
              sendDisabled: y,
              actionSize: v,
              retrying: b,
              onChange: E,
              onSend: I,
              backAction: g,
              continueAction: w,
              progress: S,
            } = e
          f[0] !== p ? ((i = void 0 === p ? ["sms", "call"] : p), (f[0] = p), (f[1] = i)) : (i = f[1])
          let A = i,
            C = void 0 === y ? h : y,
            O = void 0 === v ? "formAction" : v,
            x = void 0 !== b && b,
            N = "flex flex-col"
          ;(x ? (N = "flex flex-wrap items-center gap-2") : null != g && (N = "flex gap-2"),
            f[2] !== A || f[3] !== _ || f[4] !== h || f[5] !== E
              ? ((t = (0, n.jsx)(c, { delivery: _, availableDeliveries: A, disabled: h, onChange: E })),
                (f[2] = A),
                (f[3] = _),
                (f[4] = h),
                (f[5] = E),
                (f[6] = t))
              : (t = f[6]))
          let R = x ? null : g
          f[7] !== O ||
          f[8] !== A ||
          f[9] !== w ||
          f[10] !== _ ||
          f[11] !== h ||
          f[12] !== I ||
          f[13] !== m ||
          f[14] !== x ||
          f[15] !== C
            ? ((o =
                w ??
                (0, n.jsx)(d.C, {
                  type: null == I ? "submit" : "button",
                  onClick: I,
                  size: O,
                  radius: "full",
                  color: "primary",
                  pending: m,
                  disabled: h || C || !A.includes(_),
                  children: x
                    ? (0, n.jsx)(l.wn, {})
                    : (0, n.jsx)(a.A, {
                        id: "businessProfiles.verification.phoneDelivery.send",
                        defaultMessage: "Get code",
                        description: "Sends a business verification code using the selected phone delivery method",
                      }),
                })),
              (f[7] = O),
              (f[8] = A),
              (f[9] = w),
              (f[10] = _),
              (f[11] = h),
              (f[12] = I),
              (f[13] = m),
              (f[14] = x),
              (f[15] = C),
              (f[16] = o))
            : (o = f[16])
          let P = x ? g : null
          return (
            f[17] !== N || f[18] !== R || f[19] !== o || f[20] !== P
              ? ((s = (0, n.jsxs)("div", { className: N, children: [R, o, P] })),
                (f[17] = N),
                (f[18] = R),
                (f[19] = o),
                (f[20] = P),
                (f[21] = s))
              : (s = f[21]),
            f[22] !== S || f[23] !== s || f[24] !== t
              ? ((u = (0, n.jsxs)("div", { className: "flex flex-col gap-4", children: [t, S, s] })),
                (f[22] = S),
                (f[23] = s),
                (f[24] = t),
                (f[25] = u))
              : (u = f[25]),
            u
          )
        },
      },
    )
  },
  CNZc(e, i, t) {
    var n = t("ABep"),
      r = t("QosV"),
      o = t("oyxz"),
      s = t("ygO2")
    function a(e) {
      let i,
        t = (0, r.c)(2),
        { seconds: s } = e
      return (
        t[0] !== s
          ? ((i = (0, n.jsx)(o.A, {
              id: "businessProfiles.verification.resend.label",
              defaultMessage: "{seconds, plural, =0 {Resend code} one {Resend code in #s} other {Resend code in #s}}",
              description:
                "Resend action for business phone or email verification in claiming, creation, and editing. The countdown disables sending until the server allows another code; zero enables Resend code. {seconds} is the remaining number of seconds.",
              values: { seconds: s },
            })),
            (t[0] = s),
            (t[1] = i))
          : (i = t[1]),
        i
      )
    }
    t.d(
      i,
      {},
      {
        j: a,
        l: function (e) {
          let i,
            t,
            o = (0, r.c)(10),
            { variant: l, disabled: d, loading: c, cooldownSeconds: u, onResend: f } = e,
            _ = void 0 === u ? 0 : u,
            p = _ > 0,
            h = "inline" === l ? "underline underline-offset-4" : void 0,
            m = "inline" === l ? "inline" : "formAction",
            y = "inline" === l ? "ghostSecondary" : "secondary",
            v = d || p
          return (
            o[0] !== _ ? ((i = (0, n.jsx)(a, { seconds: _ })), (o[0] = _), (o[1] = i)) : (i = o[1]),
            o[2] !== c || o[3] !== f || o[4] !== h || o[5] !== m || o[6] !== y || o[7] !== v || o[8] !== i
              ? ((t = (0, n.jsx)(s.$, {
                  className: h,
                  size: m,
                  type: "button",
                  color: y,
                  loading: c,
                  disabled: v,
                  onClick: f,
                  children: i,
                })),
                (o[2] = c),
                (o[3] = f),
                (o[4] = h),
                (o[5] = m),
                (o[6] = y),
                (o[7] = v),
                (o[8] = i),
                (o[9] = t))
              : (t = o[9]),
            t
          )
        },
      },
    )
  },
  nhlW(e, i, t) {
    var n = t("ABep"),
      r = t("QosV"),
      o = t("on57"),
      s = t("ygO2"),
      a = t("RNul")
    t.d(
      i,
      {},
      {
        C: function (e) {
          let i,
            t,
            l,
            d,
            c,
            u,
            f,
            _,
            p,
            h = (0, r.c)(20)
          h[0] !== e
            ? (({ className: t, children: i, disabled: l, pending: c, ...d } = e),
              (h[0] = e),
              (h[1] = i),
              (h[2] = t),
              (h[3] = l),
              (h[4] = d),
              (h[5] = c))
            : ((i = h[1]), (t = h[2]), (l = h[3]), (d = h[4]), (c = h[5]))
          let m = void 0 !== c && c
          h[6] !== t ? ((u = (0, o.A)("relative", t)), (h[6] = t), (h[7] = u)) : (u = h[7])
          let y = l || m,
            v = m ? "opacity-0" : void 0
          return (
            h[8] !== i || h[9] !== v
              ? ((f = (0, n.jsx)("span", { className: v, children: i })), (h[8] = i), (h[9] = v), (h[10] = f))
              : (f = h[10]),
            h[11] !== m
              ? ((_ =
                  m &&
                  (0, n.jsx)("span", {
                    className: "absolute inset-0 flex items-center justify-center",
                    "aria-hidden": !0,
                    children: (0, n.jsx)(a.y, { as: "span", className: "icon-sm" }),
                  })),
                (h[11] = m),
                (h[12] = _))
              : (_ = h[12]),
            h[13] !== m || h[14] !== d || h[15] !== u || h[16] !== y || h[17] !== f || h[18] !== _
              ? ((p = (0, n.jsxs)(s.$, { ...d, className: u, "aria-busy": m, disabled: y, children: [f, _] })),
                (h[13] = m),
                (h[14] = d),
                (h[15] = u),
                (h[16] = y),
                (h[17] = f),
                (h[18] = _),
                (h[19] = p))
              : (p = h[19]),
            p
          )
        },
      },
    )
  },
}
//# sourceMappingURL=678412.6ba379eee2.js.map
