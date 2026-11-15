export const __rspack_esm_ids = [678412]
export const __webpack_modules__ = {
  pvU7(e, i) {
    i.A = {
      legacyMobileTitle: "legacyMobileTitle-X3TqkR",
      verificationDialog: "verificationDialog-dqESK8",
      confirmationSky: "confirmationSky-NjhlUP",
      creationAbout: "creationAbout-n51ytj",
      creationContact: "creationContact-lJThqj",
    }
  },
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
              let { selection: a, operation: l, run: _, accept: c, recover: d, shouldRecover: E, outcome: u } = s,
                I = s.response ?? null,
                f = t.get(a.checkKey)
              if (
                s.coalesce &&
                f?.promise != null &&
                !f.signal.aborted &&
                f.operation === l &&
                f.response === I &&
                (0, n.f)(f.selection, a)
              )
                return f.promise
              let S = f?.owner ?? (0, r.u)(e),
                p = S.begin(),
                O = i.begin(a, { newAttempt: f?.operation !== l || f?.response !== I }),
                C = !1,
                h = () => {
                  p.isCurrent() && (S.cancel(), m())
                },
                m = () => {
                  ;(s.signal?.removeEventListener("abort", h),
                    C || t.get(a.checkKey) !== N || ((C = !0), (N.promise = void 0), s.onSettled?.()))
                },
                N = { owner: S, selection: O.selection, operation: l, response: I, signal: p.signal, settle: m }
              ;(t.set(a.checkKey, N), s.signal?.addEventListener("abort", h, { once: !0 }))
              let A = (async () => {
                ;(d?.(!1), p.throwIfStale())
                try {
                  let e = await _({ signal: p.signal, idempotencyKey: O.idempotencyKey })
                  p.throwIfStale()
                  let t = u?.(e) ?? "completed"
                  ;(p.throwIfStale(), i.reconcile(O, t))
                  let n = c?.(e) ?? !0
                  return (p.throwIfStale(), d?.(!n), p.throwIfStale(), e)
                } catch (e) {
                  throw (p.throwIfStale(), E?.(e) && (p.throwIfStale(), d?.(!0)), p.throwIfStale(), e)
                }
              })().finally(m)
              return ((N.promise = A), A)
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
              ;(clearTimeout(c), e?.removeEventListener("abort", _))
            },
            l = (e) => {
              s || ((s = !0), a(), o.abort(e), r(e))
            },
            _ = () => l(e?.reason),
            c = setTimeout(() => l(new DOMException("Verification request timed out", "TimeoutError")), t)
          e?.addEventListener("abort", _, { once: !0 })
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
    function o({ read: e, ...i }) {
      return s({ ...i, run: e })
    }
    async function s({
      signal: e,
      run: i,
      lease: t,
      isTransient: o,
      maxAttempts: a = 3,
      intervalMs: l = 500,
      timeoutMs: _,
    }) {
      if (!Number.isSafeInteger(a) || a < 1 || !Number.isFinite(l) || l < 0 || l > 0x7fffffff)
        throw RangeError("Verification reads require a positive budget and timer-safe interval")
      let c = t?.signal ?? e ?? new AbortController().signal,
        d = () => {
          ;(t?.throwIfStale(), c.throwIfAborted())
        }
      for (let e = 1; ; e++) {
        d()
        try {
          let e = null == _ ? await i(c) : await r({ signal: c, run: i, timeoutMs: _ })
          return (d(), e)
        } catch (i) {
          if ((d(), e >= a || !o(i))) throw i
          await n(l, c)
        }
      }
    }
    t.d(
      i,
      {},
      {
        A6: function ({ signal: e, isTransient: i, lookup: t }) {
          return r({
            signal: e,
            timeoutMs: 1e4,
            run: (e) => t((t) => o({ signal: e, read: t, isTransient: i, maxAttempts: 2 })),
          })
        },
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
          return s({
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
        ck: o,
        re: async function ({
          initial: e,
          lease: i,
          signal: t,
          isPending: o,
          read: s,
          intervalMs: a,
          maxReads: l,
          immediateFirstRead: _ = !1,
          wait: c = n,
          timeoutMs: d,
        }) {
          let E
          if (!Number.isFinite(a) || a < 0 || !Number.isSafeInteger(l) || l < 0)
            throw RangeError("Polling requires a nonnegative interval and read count")
          let u = e,
            I = 0,
            f = i?.signal ?? t
          if (null == f) throw TypeError("Verification polling requires a lease or cancellation signal")
          let S = () => {
            null != i ? i.throwIfStale() : f.throwIfAborted()
          }
          S()
          let p = () => ({ value: u, status: o(u) ? "pending" : "settled", reads: I }),
            O = async (e) => {
              for (; o(u) && I < l;) {
                ;(_ || (await c(a, e)), S(), e.throwIfAborted())
                let i = await s(e, u)
                ;(S(), e.throwIfAborted(), (u = i), I++, _ && o(u) && (await c(a, e)))
              }
              return p()
            }
          if (null == d) return O(f)
          try {
            return await r({ signal: f, timeoutMs: d, run: (e) => ((E = e), O(e)) })
          } catch (e) {
            if ((S(), E?.aborted && E.reason === e && e instanceof DOMException && "TimeoutError" === e.name))
              return p()
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
  Lghe(e, i, t) {
    var n,
      r,
      o,
      s,
      a,
      l,
      _,
      c,
      d,
      E,
      u =
        (((n = {}).CODEX_BUSINESS_PROFILE_CLAIM_STAGE_UNSPECIFIED = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_UNSPECIFIED"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_ENTRY = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_ENTRY"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_ONBOARDING = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_ONBOARDING"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_SELECTION = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_SELECTION"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_ACCOUNT = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_ACCOUNT"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_METHOD = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_METHOD"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_DELIVERY = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_DELIVERY"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_DELIVERY_PENDING = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_DELIVERY_PENDING"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_CODE = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_CODE"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_DOMAIN = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_DOMAIN"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_WEB_VERIFICATION = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_WEB_VERIFICATION"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_PERSONA = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_PERSONA"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_PENDING = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_PENDING"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_IN_PROGRESS = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_IN_PROGRESS"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_NEEDS_INFORMATION =
          "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_NEEDS_INFORMATION"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_REVIEW = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_REVIEW"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_SUCCESS = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_SUCCESS"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_CANCELLED = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_CANCELLED"),
        (n.CODEX_BUSINESS_PROFILE_CLAIM_STAGE_FAILED = "CODEX_BUSINESS_PROFILE_CLAIM_STAGE_FAILED"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n),
      I =
        (((r = {}).CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_UNSPECIFIED =
          "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_UNSPECIFIED"),
        (r.CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_STARTED =
          "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_STARTED"),
        (r.CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_STEP_VIEWED = "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_STEP_VIEWED"),
        (r.CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ACTION_STARTED =
          "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ACTION_STARTED"),
        (r.CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ACTION_FINISHED =
          "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ACTION_FINISHED"),
        (r.CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_CLOSED =
          "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_CLOSED"),
        (r.CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ERROR_PRESENTED =
          "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ERROR_PRESENTED"),
        (r.CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED =
          "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED"),
        (r.CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_PERSONA_SDK_COMPLETED =
          "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_PERSONA_SDK_COMPLETED"),
        (r.UNRECOGNIZED = "UNRECOGNIZED"),
        r),
      f =
        (((o = {}).CODEX_BUSINESS_PROFILE_CLAIM_ACTION_UNSPECIFIED = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_UNSPECIFIED"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_LOAD = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_LOAD"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SELECT_ACCOUNT = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SELECT_ACCOUNT"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SELECT_PROFILE = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SELECT_PROFILE"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SELECT_METHOD = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SELECT_METHOD"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_PREPARE = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_PREPARE"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SEND = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SEND"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_RESEND = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_RESEND"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_VERIFY_CODE = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_VERIFY_CODE"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_VERIFY_DOMAIN = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_VERIFY_DOMAIN"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_OPEN_WEB_VERIFICATION =
          "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_OPEN_WEB_VERIFICATION"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_OPEN_PERSONA = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_OPEN_PERSONA"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CONNECT_SHOPIFY = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CONNECT_SHOPIFY"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_REVIEW = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_REVIEW"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CANCEL = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CANCEL"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_RETRY = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_RETRY"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CONTINUE = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CONTINUE"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_RESUME = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_RESUME"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SUBMIT = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_SUBMIT"),
        (o.CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CLOSE = "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CLOSE"),
        (o.UNRECOGNIZED = "UNRECOGNIZED"),
        o),
      S =
        (((s = {}).CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_UNSPECIFIED =
          "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_UNSPECIFIED"),
        (s.CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_STARTED = "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_STARTED"),
        (s.CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_SUCCEEDED = "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_SUCCEEDED"),
        (s.CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_FAILED = "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_FAILED"),
        (s.CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_CANCELLED = "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_CANCELLED"),
        (s.CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_UNKNOWN = "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_UNKNOWN"),
        (s.CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_DISMISSED = "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_DISMISSED"),
        (s.UNRECOGNIZED = "UNRECOGNIZED"),
        s),
      p =
        (((a = {}).CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_UNSPECIFIED =
          "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_UNSPECIFIED"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_NETWORK = "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_NETWORK"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_TIMEOUT = "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_TIMEOUT"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_AUTHENTICATION =
          "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_AUTHENTICATION"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_AUTHORIZATION =
          "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_AUTHORIZATION"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_VALIDATION =
          "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_VALIDATION"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_RATE_LIMITED =
          "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_RATE_LIMITED"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_CONFLICT =
          "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_CONFLICT"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_EXPIRED = "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_EXPIRED"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_SERVER = "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_SERVER"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_UNAVAILABLE =
          "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_UNAVAILABLE"),
        (a.CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_UNKNOWN = "CODEX_BUSINESS_PROFILE_CLAIM_ERROR_CATEGORY_UNKNOWN"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a),
      O =
        (((l = {}).CODEX_BUSINESS_PROFILE_CLAIM_METHOD_UNSPECIFIED = "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_UNSPECIFIED"),
        (l.CODEX_BUSINESS_PROFILE_CLAIM_METHOD_PHONE = "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_PHONE"),
        (l.CODEX_BUSINESS_PROFILE_CLAIM_METHOD_EMAIL = "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_EMAIL"),
        (l.CODEX_BUSINESS_PROFILE_CLAIM_METHOD_DOMAIN = "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_DOMAIN"),
        (l.CODEX_BUSINESS_PROFILE_CLAIM_METHOD_WEB = "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_WEB"),
        (l.CODEX_BUSINESS_PROFILE_CLAIM_METHOD_PERSONA = "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_PERSONA"),
        (l.CODEX_BUSINESS_PROFILE_CLAIM_METHOD_SHOPIFY = "CODEX_BUSINESS_PROFILE_CLAIM_METHOD_SHOPIFY"),
        (l.UNRECOGNIZED = "UNRECOGNIZED"),
        l),
      C =
        (((_ = {}).CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_UNSPECIFIED =
          "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_UNSPECIFIED"),
        (_.CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_SIDEBAR = "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_SIDEBAR"),
        (_.CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_HUB_SEARCH = "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_HUB_SEARCH"),
        (_.CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_PENDING_RESUME =
          "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_PENDING_RESUME"),
        (_.CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_CREATION_DUPLICATE =
          "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_CREATION_DUPLICATE"),
        (_.UNRECOGNIZED = "UNRECOGNIZED"),
        _),
      h =
        (((c = {}).CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNSPECIFIED =
          "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNSPECIFIED"),
        (c.CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_CLIENT_ONLY =
          "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_CLIENT_ONLY"),
        (c.CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_SERVER_LINKED =
          "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_SERVER_LINKED"),
        (c.CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_LEGACY_UNLINKED =
          "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_LEGACY_UNLINKED"),
        (c.CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNKNOWN =
          "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNKNOWN"),
        (c.UNRECOGNIZED = "UNRECOGNIZED"),
        c),
      m =
        (((d = {}).CODEX_BUSINESS_PROFILE_SUGGESTION_UNSPECIFIED = "CODEX_BUSINESS_PROFILE_SUGGESTION_UNSPECIFIED"),
        (d.CODEX_BUSINESS_PROFILE_SUGGESTION_AGENT = "CODEX_BUSINESS_PROFILE_SUGGESTION_AGENT"),
        (d.CODEX_BUSINESS_PROFILE_SUGGESTION_CATALOG = "CODEX_BUSINESS_PROFILE_SUGGESTION_CATALOG"),
        (d.CODEX_BUSINESS_PROFILE_SUGGESTION_ADS = "CODEX_BUSINESS_PROFILE_SUGGESTION_ADS"),
        (d.CODEX_BUSINESS_PROFILE_SUGGESTION_PROMOTE = "CODEX_BUSINESS_PROFILE_SUGGESTION_PROMOTE"),
        (d.CODEX_BUSINESS_PROFILE_SUGGESTION_TEAM = "CODEX_BUSINESS_PROFILE_SUGGESTION_TEAM"),
        (d.CODEX_BUSINESS_PROFILE_SUGGESTION_PLAN = "CODEX_BUSINESS_PROFILE_SUGGESTION_PLAN"),
        (d.CODEX_BUSINESS_PROFILE_SUGGESTION_CATEGORY = "CODEX_BUSINESS_PROFILE_SUGGESTION_CATEGORY"),
        (d.CODEX_BUSINESS_PROFILE_SUGGESTION_ADDRESS = "CODEX_BUSINESS_PROFILE_SUGGESTION_ADDRESS"),
        (d.UNRECOGNIZED = "UNRECOGNIZED"),
        d),
      N =
        (((E = {}).CODEX_BUSINESS_PROFILE_SUGGESTION_ACTION_UNSPECIFIED =
          "CODEX_BUSINESS_PROFILE_SUGGESTION_ACTION_UNSPECIFIED"),
        (E.CODEX_BUSINESS_PROFILE_SUGGESTION_ACTION_SHOWN = "CODEX_BUSINESS_PROFILE_SUGGESTION_ACTION_SHOWN"),
        (E.CODEX_BUSINESS_PROFILE_SUGGESTION_ACTION_OPENED = "CODEX_BUSINESS_PROFILE_SUGGESTION_ACTION_OPENED"),
        (E.CODEX_BUSINESS_PROFILE_SUGGESTION_ACTION_DISMISSED = "CODEX_BUSINESS_PROFILE_SUGGESTION_ACTION_DISMISSED"),
        (E.UNRECOGNIZED = "UNRECOGNIZED"),
        E)
    t.d(
      i,
      {},
      {
        $7: p,
        Fm: u,
        Gi: h,
        JS: { $type: "protobuf_analytics_events.v1.CodexBusinessProfileSuggestionInteraction" },
        Nt: m,
        PV: N,
        QX: O,
        Xm: S,
        Zn: C,
        hX: f,
        lE: I,
        nY: { $type: "protobuf_analytics_events.v1.CodexBusinessProfileClaimJourney" },
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
        variant: _ = "default",
        disabled: c = !1,
        __isWidget: d,
        ...E
      }) => {
        let u = (0, s.useMemo)(() => ({ disabled: c, direction: l, variant: _ }), [c, l, _])
        return (0, n.jsx)(a, {
          value: u,
          children: (0, n.jsx)(o.Root, {
            className: (0, r.A)("RadioGroup-AnBMnD", t),
            "data-direction": l,
            "data-variant": _,
            orientation: "list" === _ ? "vertical" : void 0,
            "data-w-component": d ? "radio-group" : void 0,
            onValueChange: e,
            disabled: c,
            ...E,
            children: i,
          }),
        })
      }
    l.Item = ({ value: e, disabled: i = !1, id: t, required: l, children: _, className: c, block: d = !1, ...E }) => {
      let { disabled: u, variant: I } = (() => {
          let e = (0, s.use)(a)
          if (!e) throw Error("RadioGroup components must be wrapped in <RadioGroup />")
          return e
        })(),
        f = u || i,
        S = (0, s.useId)(),
        p = t ?? `${e}-${S}`
      return (0, n.jsx)("div", {
        className: "RadioOptionWrapper-fuOiEo",
        "data-variant": I,
        ...E,
        children: (0, n.jsxs)("label", {
          htmlFor: p,
          className: (0, r.A)("RadioLabel-_p8Tfj", c),
          "data-disabled": f ? "" : void 0,
          "data-block": d ? "" : void 0,
          "data-variant": I,
          onMouseDown: (e) => {
            !e.defaultPrevented && e.detail > 1 && e.preventDefault()
          },
          children: [
            (0, n.jsx)("div", {
              className: "RadioIndicatorWrapper-FaQXWm",
              children: (0, n.jsx)(o.Item, {
                id: p,
                value: e,
                disabled: f,
                required: l,
                className: "RadioItem-lUmfRO",
                children: (0, n.jsx)(o.Indicator, { className: "RadioIndicator-IruaLl" }),
              }),
            }),
            _,
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
  oR5x(e, i, t) {
    t.d(i, { M: () => _ })
    var n = t("ABep"),
      r = t("QosV"),
      o = t("P56J")
    let s = (0, t("iJY0").a)({
      name: "chevron-left-md-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 7.957275, y: 5.25, width: 7.292725, height: 13.5 },
        visualBounds: { x: 7.957275, y: 5.25, width: 7.292725, height: 13.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 7.957275, y: 5.25, width: 7.292725, height: 13.5 },
        center: { x: 11.603638, y: 12 },
        insets: { top: 5.25, right: 8.75, bottom: 5.25, left: 7.957275 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 11.603638, y: 12 }, foreground: { x: 11.603638, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M15.0304 17.4697C15.3233 17.7626 15.3233 18.2373 15.0304 18.5302C14.7375 18.8231 14.2627 18.8231 13.9698 18.5302L8.32335 12.8837C7.83525 12.3956 7.83525 11.6043 8.32335 11.1162L13.9698 5.46967C14.2627 5.17678 14.7375 5.17678 15.0304 5.46967C15.3233 5.76256 15.3233 6.23732 15.0304 6.53022L9.56066 11.9999L15.0304 17.4697Z" fill="currentColor"/>',
    })
    var a = t("oyxz"),
      l = t("HOLv")
    function _(e) {
      let i,
        t,
        _,
        c = (0, r.c)(7),
        { variant: d } = e,
        E = "createEntry" === d ? s : o.Y
      return (
        c[0] !== E
          ? ((i = (0, n.jsx)(l.I, { asset: E, className: "shrink-0 rtl:rotate-180" })), (c[0] = E), (c[1] = i))
          : (i = c[1]),
        c[2] !== d
          ? ((t =
              "edit" === d
                ? (0, n.jsx)(a.A, {
                    id: "businessProfiles.editor.back",
                    defaultMessage: "Back",
                    description: "Return from the preview to the editor, or from the editor to the business dashboard",
                  })
                : (0, n.jsx)(a.A, {
                    id: "chatgpt.localBusiness.claim.chatgpt",
                    defaultMessage: "ChatGPT",
                    description: "Product name beside the back chevron in the business claim page header",
                  })),
            (c[2] = d),
            (c[3] = t))
          : (t = c[3]),
        c[4] !== i || c[5] !== t
          ? ((_ = (0, n.jsxs)("span", { className: "inline-flex items-center gap-1", children: [i, t] })),
            (c[4] = i),
            (c[5] = t),
            (c[6] = _))
          : (_ = c[6]),
        _
      )
    }
  },
  zCGz(e, i, t) {
    var n = t("ABep"),
      r = t("QosV"),
      o = t("on57"),
      s = t("lkCH"),
      a = t("zd8w"),
      l = t("v7qY"),
      _ = t("oyxz"),
      c = t("Sm6l"),
      d = t("ZtSy"),
      E = t("Ot7V"),
      u = t("XcNx"),
      I = t("WFY2"),
      f = t("nhlW")
    function S(e) {
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
            p,
            O,
            C,
            h,
            m,
            N,
            A,
            v,
            y,
            R = (0, r.c)(50),
            {
              verificationUrl: L,
              label: b,
              variant: D,
              size: T,
              radius: P,
              fullWidth: g,
              waitForPersonaReady: w,
              endIcon: U,
              disabled: M,
              onClick: B,
              onLaunch: F,
              onLaunchStart: x,
              onComplete: X,
              onActiveChange: G,
              onCancel: j,
            } = e,
            k = void 0 === D ? "default" : D
          R[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, u.x)({ browser: !0 })), (R[0] = i)) : (i = R[0])
          let K = i,
            V = void 0 !== w && w && K,
            [Y, q] = (0, a.useState)(!1),
            [H, z] = (0, a.useState)(!1),
            W = (0, a.useRef)(null),
            J = (0, a.useRef)(null)
          ;(R[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = () => () => {
                ;(W.current?.(), (W.current = null), S(() => J.current?.()), (J.current = null))
              }),
              (O = []),
              (R[1] = p),
              (R[2] = O))
            : ((p = R[1]), (O = R[2])),
            (0, a.useEffect)(p, O),
            R[3] !== V ||
            R[4] !== G ||
            R[5] !== j ||
            R[6] !== B ||
            R[7] !== X ||
            R[8] !== F ||
            R[9] !== x ||
            R[10] !== L
              ? ((C = async function (e) {
                  let i, n
                  if (W.current) return
                  ;(S(() => J.current?.()), (J.current = null))
                  let r = V ? (0, s.u)() : void 0,
                    o = !1,
                    a = "prepare",
                    _ = () => {
                      ;((o = !0), r?.resolve(void 0), clearTimeout(d), i?.destroy(), (i = void 0))
                    },
                    c = async (i, t) => {
                      if (o) return
                      ;(null != t && S(() => n?.onFailed(t)), _(), G?.(!1))
                      let r = null != t
                      try {
                        void 0 !== i && i && ((a = "complete"), await X())
                      } catch {
                        r = !0
                      }
                      if (r)
                        try {
                          I.v.warning("Business profile Persona launch failed", { safe: { stage: a } })
                        } catch {}
                      W.current === _ &&
                        ((W.current = null),
                        (0, l.flushSync)(() => {
                          ;(q(!1), z(r))
                        }),
                        r &&
                          e.isConnected &&
                          !W.current &&
                          S(() => {
                            let e = n?.onErrorPresented(t ?? "unknown")
                            J.current = "function" == typeof e ? e : null
                          }),
                        requestAnimationFrame(() => {
                          e.isConnected && !W.current && e.focus()
                        }))
                    },
                    d = setTimeout(() => void c(!1, "timeout"), 5e4)
                  ;((W.current = _),
                    q(!0),
                    z(!1),
                    S(() => {
                      n = x?.()
                    }),
                    V || G?.(!0),
                    B?.())
                  let u = async function (e) {
                    if (o) return
                    if ((clearTimeout(d), (d = setTimeout(() => void c(!1, "timeout"), 3e4)), !K)) {
                      if (!(0, E.Rh)({ href: e, initiator: "markdown_link_click", openTarget: "external-browser" }))
                        throw Error("Could not open verification")
                      ;(S(() => n?.onUnconfirmed()), await c())
                      return
                    }
                    a = "sdk_load"
                    let s = await t
                      .e(891564)
                      .then(t.t.bind(t, "Iv8T", 23))
                      .then(({ default: e }) => e.Client)
                    if (o) return
                    let l = new URL(e).searchParams,
                      _ = l.get("inquiry-id")
                    if (!_) return void c(!1, "unknown")
                    if (
                      ((a = "sdk_open"),
                      (i = new s({
                        inquiryId: _,
                        sessionToken: l.get("session-token") ?? void 0,
                        parent: document.body,
                        onReady: () => {
                          o || (clearTimeout(d), r?.resolve(void 0), S(() => n?.onReady()))
                        },
                        onCancel: () => {
                          o || (S(() => n?.onCancelled()), c(), j?.())
                        },
                        onComplete: () => {
                          o || (S(() => n?.onSdkCompleted()), S(() => n?.onUnconfirmed()), c(!0))
                        },
                        onError: () => void c(!1, "unknown"),
                      })),
                      o)
                    )
                      return void i.destroy()
                    if (null != r) {
                      if ((await r.promise, o)) return
                      G?.(!0)
                    }
                    i.open()
                  }
                  try {
                    F
                      ? (await F(u, () => {
                          o || W.current !== _ || S(() => n?.onFailed("unknown"))
                        })) || (o || S(() => n?.onUnconfirmed()), c())
                      : L
                        ? await u(L)
                        : c(!1, "unknown")
                  } catch {
                    c(!1, "unknown")
                  }
                }),
                (R[3] = V),
                (R[4] = G),
                (R[5] = j),
                (R[6] = B),
                (R[7] = X),
                (R[8] = F),
                (R[9] = x),
                (R[10] = L),
                (R[11] = C))
              : (C = R[11]))
          let Z = C
          R[12] !== b
            ? ((h =
                b ??
                (0, n.jsx)(_.A, {
                  id: "businessProfiles.persona.continue",
                  defaultMessage: "Continue with Persona",
                  description:
                    "Button opening business identity verification. Persona is a brand name; do not translate it.",
                })),
              (R[12] = b),
              (R[13] = h))
            : (h = R[13])
          let $ = h
          if (!K && L && !F) {
            let e,
              i,
              t,
              r = "detailAction" === T || "formAction" === T,
              s = r ? "button" : void 0
            ;(R[14] !== r || R[15] !== T
              ? ((e = r
                  ? (0, o.A)(
                      "inline-flex cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-primary-solid px-4 font-medium whitespace-nowrap text-primary-solid select-none no-drag hover:bg-primary-solid-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      "formAction" === T ? "min-h-10.5 shrink-0 py-2 text-sm leading-5" : "min-h-10 text-base",
                    )
                  : void 0),
                (R[14] = r),
                (R[15] = T),
                (R[16] = e))
              : (e = R[16]),
              R[17] !== B || R[18] !== x
                ? ((i = () => {
                    let e
                    ;(S(() => {
                      e = x?.()
                    }),
                      B?.(),
                      S(() => e?.onUnconfirmed()))
                  }),
                  (R[17] = B),
                  (R[18] = x),
                  (R[19] = i))
                : (i = R[19]))
            let a = r ? "none" : "always"
            return (
              R[20] !== $ || R[21] !== U || R[22] !== e || R[23] !== i || R[24] !== a || R[25] !== s || R[26] !== L
                ? ((t = (0, n.jsxs)(d.G, {
                    appearance: s,
                    className: e,
                    href: L,
                    onClick: i,
                    initiator: "markdown_link_click",
                    openTarget: "external-browser",
                    underline: a,
                    children: [$, U],
                  })),
                  (R[20] = $),
                  (R[21] = U),
                  (R[22] = e),
                  (R[23] = i),
                  (R[24] = a),
                  (R[25] = s),
                  (R[26] = L),
                  (R[27] = t))
                : (t = R[27]),
              t
            )
          }
          let Q = V ? f.C : c.$,
            ee = void 0 !== g && g ? "flex w-full flex-col items-stretch gap-3" : "flex flex-col items-start gap-3",
            ei = T ?? ("onboarding" === k ? "responsiveBeaconAction" : void 0),
            et = "onboarding" === k ? "w-full sm:w-auto" : void 0
          return (
            R[28] !== V || R[29] !== Y
              ? ((m = V ? { pending: Y } : { loading: Y }), (R[28] = V), (R[29] = Y), (R[30] = m))
              : (m = R[30]),
            R[31] !== Z ? ((N = (e) => void Z(e.currentTarget)), (R[31] = Z), (R[32] = N)) : (N = R[32]),
            R[33] !== Q ||
            R[34] !== $ ||
            R[35] !== M ||
            R[36] !== U ||
            R[37] !== P ||
            R[38] !== ei ||
            R[39] !== et ||
            R[40] !== m ||
            R[41] !== N
              ? ((A = (0, n.jsxs)(Q, {
                  size: ei,
                  className: et,
                  radius: P,
                  type: "button",
                  ...m,
                  disabled: M,
                  onClick: N,
                  children: [$, U],
                })),
                (R[33] = Q),
                (R[34] = $),
                (R[35] = M),
                (R[36] = U),
                (R[37] = P),
                (R[38] = ei),
                (R[39] = et),
                (R[40] = m),
                (R[41] = N),
                (R[42] = A))
              : (A = R[42]),
            R[43] !== H || R[44] !== b
              ? ((v =
                  H &&
                  (0, n.jsx)("p", {
                    role: "alert",
                    children:
                      null == b
                        ? (0, n.jsx)(_.A, {
                            id: "businessProfiles.persona.retry",
                            defaultMessage:
                              "We couldn’t open or update verification. Select Continue with Persona to try again.",
                            description:
                              "Retryable error beneath business verification. The existing claim or edit is preserved. Persona is a brand name.",
                          })
                        : (0, n.jsx)(_.A, {
                            id: "businessProfiles.persona.retryCustomLabel",
                            defaultMessage: "We couldn’t open or update verification. Please try again",
                            description:
                              "Retryable error beneath business identity verification when the launch button has a custom label. The existing ownership request is preserved.",
                          }),
                  })),
                (R[43] = H),
                (R[44] = b),
                (R[45] = v))
              : (v = R[45]),
            R[46] !== A || R[47] !== v || R[48] !== ee
              ? ((y = (0, n.jsxs)("div", { className: ee, children: [A, v] })),
                (R[46] = A),
                (R[47] = v),
                (R[48] = ee),
                (R[49] = y))
              : (y = R[49]),
            y
          )
        },
      },
    )
  },
  R8Ag(e, i, t) {
    var n = t("ozm1"),
      r = t("Lghe"),
      o = t("yGJW"),
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
      _ = {
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
      d = {
        succeeded: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_SUCCEEDED",
        failed: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_FAILED",
        cancelled: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_CANCELLED",
        unknown: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_UNKNOWN",
      },
      E = {
        sidebar: "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_SIDEBAR",
        hub_search: "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_HUB_SEARCH",
        pending_resume: "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_PENDING_RESUME",
        creation_duplicate: "CODEX_BUSINESS_PROFILE_CLAIM_ENTRY_POINT_CREATION_DUPLICATE",
      },
      u = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      I = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    function f(e, i, t) {
      ;(p(i),
        i.started ||
          ((i.started = !0),
          S(e, i, { eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_STARTED", step: a[t] })))
    }
    function S(e, i, t) {
      if (i.active)
        try {
          if (i.isCurrentActor?.() === !1) return
          p(i)
          let n = {
            telemetryJourneyId: i.telemetryJourneyId,
            correlationState: i.correlationState,
            entryPoint: i.entryPoint,
            businessProfileId: i.businessProfileId,
          }
          if (
            null != i.previousTelemetryJourneyId &&
            ((0, o.yy)(e, r.nY, {
              ...n,
              eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED",
              previousTelemetryJourneyId: i.previousTelemetryJourneyId,
            }),
            (i.previousTelemetryJourneyId = void 0),
            "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED" === t.eventKind)
          )
            return
          ;(0, o.yy)(e, r.nY, { ...n, ...t })
        } catch {}
    }
    function p(e) {
      null == e.telemetryJourneyId &&
        ((e.telemetryJourneyId = O()),
        "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNSPECIFIED" === e.correlationState &&
          (e.correlationState =
            null == e.telemetryJourneyId
              ? "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNKNOWN"
              : "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_CLIENT_ONLY"))
    }
    function O() {
      try {
        return crypto.randomUUID()
      } catch {
        return
      }
    }
    t.d(
      i,
      {},
      {
        BR: function (e, i, t, r, o) {
          i &&
            i.active &&
            !i.closed &&
            t &&
            !t.finished &&
            ((t.finished = !0),
            (i.lastError = o),
            S(e, i, {
              eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_ACTION_FINISHED",
              step: t.step,
              action: t.action,
              method: t.method,
              outcome: d[r],
              errorCategory: null == o ? void 0 : c[o],
              actionAttemptId: t.id,
              attemptIndex: (0, n.At)(t.index),
            }))
        },
        IP: function (e, i, t) {
          i &&
            t &&
            S(e, i, {
              eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_PERSONA_SDK_COMPLETED",
              step: t.step,
              action: t.action,
              method: t.method,
              outcome: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_SUCCEEDED",
              actionAttemptId: t.id,
              attemptIndex: (0, n.At)(t.index),
            })
        },
        Ic: function (e, i) {
          null != e && p(e)
          let t = e?.telemetryJourneyId
          return null != t && u.test(t) && u.test(i) ? `bp-claim-journey-v1:${t}:${i}` : i
        },
        Iw: function (e, i) {
          return {
            telemetryJourneyId: void 0,
            correlationState: "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNSPECIFIED",
            entryPoint: E[e],
            businessProfileId: i,
            started: !1,
            active: !0,
            closed: !1,
            attemptIndex: 0,
          }
        },
        _3: function (e) {
          if (e instanceof DOMException && "AbortError" === e.name) return { outcome: "cancelled" }
          if (e instanceof DOMException && "TimeoutError" === e.name)
            return { outcome: "failed", errorCategory: "timeout" }
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
        },
        dA: function (e, i, t, n) {
          if (null == n) return (i && (i.presentedError = void 0), () => {})
          let r = () => {
            "visible" === document.visibilityState &&
              i &&
              i.active &&
              !i.closed &&
              (i.presentedError?.step !== t || i.presentedError.category !== n) &&
              ((i.presentedError = { step: t, category: n }),
              S(e, i, {
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
        },
        fY: function (e, i, t, n) {
          let r = () => {
            "visible" === document.visibilityState &&
              (function (e, i, t, n) {
                if (!i || !i.active || i.closed) return
                if (i.currentStep === t) {
                  null != i.previousTelemetryJourneyId &&
                    S(e, i, { eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED" })
                  return
                }
                f(e, i, t)
                let r = i.currentStep
                ;((i.currentStep = t),
                  S(e, i, {
                    eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_STEP_VIEWED",
                    step: a[t],
                    previousStep: null == r ? void 0 : a[r],
                    method: null == n ? void 0 : _[n],
                  }))
              })(e, i, t, n)
          }
          return (
            r(),
            document.addEventListener("visibilitychange", r),
            () => document.removeEventListener("visibilitychange", r)
          )
        },
        nn: function (e) {
          return (
            e && (e.active = !0),
            () => {
              e && (e.active = !1)
            }
          )
        },
        wj: function (e, i) {
          i &&
            !i.closed &&
            (f(e, i, i.currentStep ?? "entry"),
            S(e, i, {
              eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_CLOSED",
              step: a[i.currentStep ?? "entry"],
              action: "CODEX_BUSINESS_PROFILE_CLAIM_ACTION_CLOSE",
              outcome: "CODEX_BUSINESS_PROFILE_CLAIM_OUTCOME_DISMISSED",
            }),
            (i.closed = !0))
        },
        x$: function (e, i, t, r, o) {
          if (!i || !i.active || i.closed) return
          ;(f(e, i, t),
            (i.lastError = void 0),
            (i.presentedError = void 0),
            (i.attemptIndex = Math.min(i.attemptIndex + 1, 0x7fffffff)))
          let s = {
            action: l[r],
            step: a[t],
            method: null == o ? void 0 : _[o],
            id: O(),
            index: i.attemptIndex,
            finished: !1,
          }
          return (
            S(e, i, {
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
        },
        yX: function (e, i, t) {
          if (i) {
            if (null == t) {
              i.correlationState = "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_LEGACY_UNLINKED"
              return
            }
            if (!I.test(t)) {
              i.correlationState = "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_UNKNOWN"
              return
            }
            ;(i.telemetryJourneyId !== t &&
              (i.started && (i.previousTelemetryJourneyId = i.telemetryJourneyId), (i.telemetryJourneyId = t)),
              (i.correlationState = "CODEX_BUSINESS_PROFILE_CLAIM_CORRELATION_STATE_SERVER_LINKED"),
              null != e &&
                null != i.previousTelemetryJourneyId &&
                S(e, i, { eventKind: "CODEX_BUSINESS_PROFILE_CLAIM_EVENT_KIND_JOURNEY_ASSOCIATED" }))
          }
        },
      },
    )
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
        ExistingPlaceRequestError: () => f,
        canSuggestProfileClaim: () => S,
        createClaimVerification: () => C,
        isTransientRequestError: () => m,
        preparedClaimNavigationKey: () => p,
        readProfileClaimPreparation: () => O,
      }))
    var n = t("Z5jE"),
      r = t("WI8D"),
      o = t("cteK"),
      s = t("DBCl"),
      a = t("ASxG"),
      l = t("Ghh3"),
      _ = t("BaOq"),
      c = t("eShZ"),
      d = t("R8Ag")
    function E(e) {
      return "dispute" === e.flow_type && "business_presence_dispute_access_v1" === e.policy_version
    }
    function u(e) {
      return E(e) && e.checks.some((e) => "business_access" === e.check_key && null != e.satisfied_by_verification_id)
    }
    var I = t("VUft")
    class f extends Error {
      profileId
      constructor(e) {
        ;(super("This place already has an ownership request"), (this.profileId = e))
      }
    }
    function S(e, i) {
      let t = e.ownership.available_action
      return (
        !e.can_manage &&
        null == e.ownership.current_request &&
        ("claim" === t || (i && "local" === e.business_type && "dispute" === t))
      )
    }
    function p(e, i, t, n) {
      return ["prepared-business-profile-claim", e, i, t, n]
    }
    async function O(e, i) {
      let t = i.getAbortSignal?.()
      t?.throwIfAborted()
      let n = await l.Request.safeGet("/chat/frontend/v1/business-profiles/{business_profile_id}/claim-preparation", {
        parameters: {
          path: { business_profile_id: e },
          ...(null != i.grantId ? { query: { grant_id: i.grantId } } : {}),
        },
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
    let C = (e, i) => {
      let t,
        S,
        p,
        C,
        N,
        A,
        v,
        y,
        R,
        L,
        b,
        D,
        T = { "x-openai-use-sheep": "1" }
      i?.accountId != null && ((T["ChatGPT-Account-ID"] = i.accountId), (T[s.zBc] = i.accountId))
      let P = i?.flowType ?? "claim",
        g = i?.currentRequest,
        w =
          g?.kind === "claim" &&
          g.verification_workflow_id &&
          (i?.businessProfileId == null || i.businessProfileId === g.business_profile_id)
            ? (g.business_profile_id ?? void 0)
            : void 0,
        U = "claim" === P ? (i?.telemetryJourney ?? (0, d.Iw)(i?.telemetryEntryPoint ?? "sidebar", w)) : void 0
      U && i?.isTelemetryActorCurrent && (U.isCurrentActor = i.isTelemetryActorCurrent)
      let M = e,
        B = i?.businessProfileId,
        F = !1
      if (null != B && i?.entityKey != null) throw Error("Choose one Business Profile identity")
      let x = () => ({
          accountId: i?.accountId ?? "",
          subjectId: B ?? q?.business_profile_id ?? i?.entityKey ?? M ?? "",
          flowId: b?.id ?? q?.verification_workflow_id ?? "",
          revision: P,
        }),
        X =
          (e) =>
          async (...t) => {
            S?.dispose()
            let r = (0, n.u)(x())
            S = r
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
        G = (e) => (i?.getAbortSignal?.().throwIfAborted(), e.throwIfStale(), e.signal),
        j = (e, t) => {
          if ((G(t), null != B && e.business_profile_id !== B))
            throw Error("Verification does not match the selected Business Profile")
          return (
            "dispute" === P && (F = E(e)) && (B = e.business_profile_id),
            "claim" === P && "claim" === e.flow_type && U && (U.businessProfileId = e.business_profile_id),
            (0, d.yX)(void 0, U, e.telemetry_journey_id),
            e.business_profile_id &&
              e.id &&
              i?.onVerificationFlow?.({ businessProfileId: e.business_profile_id, claimFlowId: e.id }),
            "approved" === e.status && e.business_profile_id && i?.onApproved?.(),
            e
          )
        },
        k = null,
        K = !1,
        V = !1,
        Y = async (e) => {
          let t
          if (K || ("claim" !== P && !F) || !i?.shopifyActor) return
          if (null != B) t = { actor: i.shopifyActor, businessProfileId: B }
          else {
            if (null == M) return
            t = { actor: i.shopifyActor, businessEntityId: M, entityKey: i.entityKey }
          }
          let n = await (0, I.K5)(t)
          ;(G(e),
            null == n &&
              "claim" === P &&
              null != B &&
              null != M &&
              ((t = { actor: i.shopifyActor, businessEntityId: M }), (n = await (0, I.K5)(t))),
            G(e),
            (k = n),
            (V = null != t.businessEntityId),
            i.shopifyActor.assertCurrentActor(),
            (K = !0))
        },
        q = i?.currentRequest,
        H = q?.kind === "claim" && "under_review" === q.status,
        z = (0, r.a)({
          accountId: i?.accountId ?? "",
          subjectId: B ?? i?.entityKey ?? M ?? "",
          flowId: "",
          revision: P,
        }),
        W = !1,
        J = () => {
          W || ((R = void 0), (W = !0))
        },
        Z = 0,
        $ = () => {
          if (i?.shopifyActor) {
            if (null != b && "shopify" === h(b)) {
              let e = (0, I.TY)({ actor: i.shopifyActor, flowId: b.id, profileId: b.business_profile_id })
              if (void 0 !== e) return e
            }
            return k?.shopDomain
          }
        },
        Q = async (e) => {
          let i = b?.business_profile_id ?? q?.business_profile_id,
            t = b?.id ?? q?.verification_workflow_id
          if (!i || !t) throw Error("Verification has not started")
          if (null != B && i !== B) throw Error("Verification does not match the selected Business Profile")
          return await (0, o.ck)({
            lease: e,
            isTransient: m,
            read: async () => (
              (b = j(
                (
                  await ((null != b && "shopify" === h(b)) || q?.shopify_verification === !0
                    ? l.Request.safePost(
                        "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/shopify-challenge",
                        {
                          additionalHeaders: T,
                          signal: G(e),
                          parameters: { path: { business_profile_id: i, flow_id: t } },
                          requestBody: { action: "read" },
                        },
                      )
                    : l.Request.safeGet(
                        "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}",
                        {
                          additionalHeaders: T,
                          signal: G(e),
                          parameters: { path: { business_profile_id: i, flow_id: t } },
                        },
                      ))
                ).flow,
                e,
              )),
              "shopify" === h(b) &&
                ("claim" === P || (E(b) && !u(b))) &&
                ["pending", "in_progress", "needs_information"].includes(b.status) &&
                null == $() &&
                (await Y(e), G(e)),
              b
            ),
          })
        },
        ee = (e) => {
          if ((G(e), !b)) throw Error("Verification has not started")
          switch (b.status) {
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
              return b.status
            case "under_review":
              return "review"
          }
        },
        ei = async (e) => {
          try {
            let { value: i } = await (0, o.re)({
              initial: await Q(e),
              lease: e,
              isPending: (e) =>
                !(
                  ("dispute" === P
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
              read: () => Q(e),
              intervalMs: 500,
              maxReads: 19,
            })
            return i
          } catch (i) {
            if ((G(e), !(i instanceof c.fk) || !b)) throw i
            return b
          }
        },
        et = (e) => {
          G(e)
          let i = b?.verifications.find((e) =>
              L ? e.id === L.verificationId : e.originating_flow_id === b?.id && "phone" === e.target_kind,
            ),
            t = b?.action_required,
            n = t?.verification_method ?? i?.verification_type,
            r = L?.confirmation?.delivery
          return (
            null == r && ("sms_otp" === n ? (r = "sms") : "phone_vc_otp" === n && (r = "call")),
            {
              telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
              step: "delivery_pending",
              destination: t?.masked_destination ?? i?.masked_destination ?? void 0,
              delivery: r,
              resendAvailableAt: i?.otp_resend_available_at ?? void 0,
            }
          )
        },
        en = (e) => {
          let i = ((e) => {
            G(e)
            let i = ee(e)
            if (!b || ["success", "cancelled", "failed", "review"].includes(i))
              return ((L = void 0), { telemetryJourneyId: b?.telemetry_journey_id ?? void 0, step: i })
            if (u(b))
              return ((L = void 0), null != b.verification_issue)
                ? { step: "needs_information", verificationIssue: b.verification_issue }
                : { step: "persona", personaVerification: b.persona_verification }
            if (E(b) && null != b.phone_verification_outcome)
              return (
                (L = void 0),
                { step: "needs_information", verificationIssue: "additional_verification_required" }
              )
            if ("shopify" === h(b))
              return {
                telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
                step: "web_verification",
                shopifyShopDomain: $(),
                ...(void 0 !== D
                  ? {
                      shopifyStartConflict:
                        b.id === D && ["pending", "in_progress", "needs_information"].includes(b.status),
                    }
                  : {}),
              }
            if ("domain" === h(b))
              return {
                telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
                ...(y === b.id ? { step: "review" } : { step: "domain", domainVerification: b.domain_verification }),
              }
            let t = b.verification_issue
            if (null != t && ("send_limit_reached" !== t || b.action_required?.type !== "submit_otp"))
              return (
                (L = void 0),
                {
                  telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
                  step: "needs_information",
                  verificationIssue: t,
                }
              )
            if (("send_limit_reached" === t && (L = void 0), null != b.persona_verification && !E(b)))
              return (
                (L = void 0),
                {
                  telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
                  step: "persona",
                  method: "persona" === h(b) ? "persona" : void 0,
                  personaVerification: b.persona_verification,
                }
              )
            if ("email" === h(b)) {
              let e = b.verifications.find((e) => e.originating_flow_id === b?.id && "email" === e.target_kind)
              if ("claim" === P && null != b.phone_verification_outcome)
                return {
                  step: "needs_information",
                  method: "email",
                  verificationIssue: "additional_verification_required",
                }
              let n = b.action_required,
                r = N?.flowId === b.id && N.verificationId === n?.verification_id,
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
                  telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
                  step: o,
                  method: "email",
                  destination: n?.masked_destination ?? e?.masked_destination ?? void 0,
                  resendAvailableAt: e?.otp_resend_available_at ?? void 0,
                  verificationIssue: t,
                }
              )
            }
            let n = b.verifications.find((e) => e.originating_flow_id === b?.id && "phone" === e.target_kind)
            if (
              null != b.phone_verification_outcome ||
              (n && ["failed", "inconclusive", "cancelled"].includes(n.status))
            )
              return (
                (L = void 0),
                {
                  telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
                  step: "delivery",
                  destination: n?.masked_destination ?? void 0,
                  availableDeliveries: [],
                  phoneAttemptUnavailable: !0,
                }
              )
            if (n?.status === "passed")
              return ((L = void 0), { telemetryJourneyId: b?.telemetry_journey_id ?? void 0, step: i })
            let r = b.action_required
            if (L) {
              let i = b.verifications.find((e) => e.id === L?.verificationId)
              if (!(
                r?.type === "submit_otp" &&
                r.verification_id === L.verificationId &&
                (null != L.confirmation || (i?.otp_send_count ?? 0) > L.baselineSendCount)
              ))
                return et(e)
              L = void 0
            }
            if (r?.type === "submit_otp" && N?.flowId === b.id && N.verificationId === r.verification_id)
              return { telemetryJourneyId: b?.telemetry_journey_id ?? void 0, step: "pending" }
            if (!r) return { telemetryJourneyId: b?.telemetry_journey_id ?? void 0, step: i }
            if ("submit_otp" === r.type) {
              if ("sms_otp" !== r.verification_method && "phone_vc_otp" !== r.verification_method)
                throw Error("Unsupported verification method")
              return {
                telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
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
              return { telemetryJourneyId: b?.telemetry_journey_id ?? void 0, ...et(e), availableDeliveries: [i] }
            }
            let o = []
            for (let e of r.destination_channels ?? [])
              "sms" === e ? o.push("sms") : "phone_voice_call" === e && o.push("call")
            let s = "phone_voice_call" === (0, _.Pr)()?.channel ? "call" : "sms",
              a = o.includes(s) ? s : o[0]
            if (!a) throw Error("No phone verification channel available")
            return {
              telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
              step: "delivery",
              destination: r.masked_destination,
              delivery: a,
              availableDeliveries: o,
            }
          })(e)
          return b && E(b) ? { ...i, disputeAccessVerification: u(b) ? "verified" : "required" } : i
        },
        er = async (e, i) => {
          if ((G(i), !b)) throw Error("Verification has not started")
          ;("start" === e && J(), v !== b.id && (A?.clear(), (A = (0, r.a)(x())), (v = b.id)))
          let t =
              "start" === e
                ? A?.begin({
                    checkKey: "domain-start",
                    target: R?.hostname ?? b.domain_verification?.domain ?? b.business_profile_id,
                    channel: "dns",
                    challengeId: b.domain_verification?.challenge_id ?? null,
                    challengeStatus: b.domain_verification?.status ?? null,
                  })
                : void 0,
            n = t?.idempotencyKey ?? crypto.randomUUID()
          return (
            (b = j(
              (
                await l.Request.safePost(
                  "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/domain-challenge",
                  {
                    additionalHeaders: T,
                    signal: G(i),
                    parameters: { path: { business_profile_id: b.business_profile_id, flow_id: b.id } },
                    requestBody: {
                      action: e,
                      idempotency_key: n,
                      test_domain: "start" === e ? R : void 0,
                      challenge_id: "check" === e ? b.domain_verification?.challenge_id : void 0,
                    },
                  },
                )
              ).flow,
              i,
            )),
            "start" === e
              ? (t && A?.reconcile(t, "completed"), (R = void 0), (W = !1))
              : "claim" === b.flow_type && b.domain_verification?.status === "passed" && (y = b.id),
            en(i)
          )
        },
        eo = async (e) => {
          let i = et(e),
            t = async () => {
              try {
                await Q(e)
              } catch (i) {
                if ((G(e), i instanceof Error && "AbortError" === i.name)) throw i
                return null
              }
              return (i = en(e))
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
        es = async (e, i, t, n) => {
          let r = e.action_required
          if (r?.type !== "confirm_verification_destination") throw Error("No verification destination available")
          let o = L
          L = {
            verificationId: r.verification_id,
            baselineSendCount: e.verifications.find((e) => e.id === r.verification_id)?.otp_send_count ?? 0,
            confirmation: { delivery: i, testPhoneNumber: t },
          }
          try {
            let o = await l.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/verifications/{verification_id}/destination-confirmation",
              {
                additionalHeaders: T,
                signal: G(n),
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
            if ((G(n), !o.accepted)) throw Error("Destination confirmation not accepted")
          } catch (e) {
            if ((G(n), !m(e))) throw ((L = o), e)
          }
          return eo(n)
        },
        ea = async (e, n) => {
          if ((G(n), null == M && null == B)) throw Error("A business entity is required to start a claim")
          if (null != B && ((null == M && "claim" === P) || F) && !t?.includes(e))
            throw Error("This verification method is unavailable for the selected Business Profile")
          !p && ("claim" === P || F) && "domain" === e && J()
          let r = z.begin({
            checkKey: "claim-create",
            target: B ?? i?.entityKey ?? M ?? "",
            channel: p ?? e,
            challengeId: null,
            challengeStatus: null,
          })
          ;((p = p ?? e),
            C?.original !== r.idempotencyKey &&
              (C = { original: r.idempotencyKey, encoded: (0, d.Ic)(U, r.idempotencyKey) }))
          let o = C.encoded
          if ("shopify" === p) {
            let e
            if (("claim" !== P && !F) || !i?.shopifyActor || null == k)
              throw Error("Shopify could not be identified for this business")
            if (null != M && (null == B || ("claim" === P && V)))
              e = {
                actor: i.shopifyActor,
                businessEntityId: M,
                entityKey: null == B ? i.entityKey : void 0,
                routing: k,
                idempotencyKey: o,
              }
            else if (null != B)
              e = { actor: i.shopifyActor, businessProfileId: B, flowType: P, routing: k, idempotencyKey: o }
            else throw Error("A business entity is required to start a claim")
            let t = j(await (0, I.Pu)(e), n)
            return (z.reconcile(r, "completed"), t)
          }
          let s = j(
            (
              await l.Request.safePost("/chat/frontend/v1/business-profiles/verification-flows", {
                additionalHeaders: T,
                signal: G(n),
                requestBody: {
                  ...(null != B ? { business_profile_id: B } : {}),
                  ...(null != M
                    ? {
                        business_entity_id: M,
                        ...(null == B ? { entity_key: i?.entityKey } : {}),
                        entity_category: "local_business",
                      }
                    : {}),
                  flow_type: P,
                  verification_method: "claim" === P || F ? p : void 0,
                  ...(F ? { require_business_access: !0 } : {}),
                  idempotency_key: o,
                },
              })
            ).flow,
            n,
          )
          return (z.reconcile(r, "completed"), s)
        },
        el = (e) =>
          (u(e) || ("shopify" !== h(e) && "domain" !== h(e))) &&
          ["pending", "in_progress", "needs_information", "under_review"].includes(e.status),
        e_ = async (e) => {
          let i = b && el(b) ? b : await Q(e)
          return (
            (G(e), el(i))
              ? ((b = j(
                  (
                    await l.Request.safePost(
                      "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/resume",
                      {
                        additionalHeaders: T,
                        signal: G(e),
                        parameters: { path: { business_profile_id: i.business_profile_id, flow_id: i.id } },
                        requestBody: null != B ? {} : { business_entity_id: M },
                      },
                    )
                  ).flow,
                  e,
                )),
                (H = !1),
                (null == b.persona_verification || "preparing" === b.persona_verification.status) &&
                  "dispute" === P &&
                  ["pending", "in_progress", "needs_information"].includes(b.status) &&
                  (await ei(e)))
              : (H = !1),
            en(e)
          )
        },
        ec = async (e, i) => {
          if ("claim" === P && null != e.local_entity_lookup_id) return ((M = e.local_entity_lookup_id), ed(i))
          ;(await Y(i), G(i))
          let n = null == t && null != k
          return (
            (t = [
              ...(null != k ? ["shopify"] : []),
              ...e.eligible_methods.filter((e) => "persona" !== e || (!F && ("claim" !== P || null == k))),
            ]),
            {
              telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
              step: "method",
              ...(F ? { disputeAccessVerification: "required" } : {}),
              eligibleMethods: t,
              ...(n ? { method: "shopify" } : {}),
              shopifyShopDomain: k?.shopDomain,
              destination: e.phone_destination ?? void 0,
              emailDestination: e.email_destination ?? void 0,
              claimDomain: e.claim_domain,
            }
          )
        },
        ed = async (e, n = !1) => {
          if (null != B && (null == M || "dispute" === P)) {
            let t = await O(B, { ...i, getAbortSignal: () => G(e) })
            G(e)
            let n = t.ownership.current_request
            if (n?.kind === P)
              return (
                (q = n),
                "claim" === P && null != U && (U.businessProfileId = n.business_profile_id ?? void 0),
                e_(e)
              )
            if (t.ownership.available_action !== P || null != n) throw Error("Business is not available to claim")
            return ("claim" === P && null != U && (U.businessProfileId = t.business_profile_id),
            (F = "dispute" === P && !0 === t.dispute_access_verification_enabled),
            "dispute" !== P || F)
              ? ec(t, e)
              : { step: "persona" }
          }
          if (null == M) throw Error("A business entity is required to start a claim")
          let r = await l.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
            additionalHeaders: T,
            signal: G(e),
            requestBody: {
              provider: "chatgpt-local-business-entity-lookup",
              provider_business_id: M,
              ...(null == B ? { entity_key: i?.entityKey } : {}),
            },
          })
          if (
            (G(e),
            null != B &&
              ((null != r.business_profile_id && r.business_profile_id !== B) ||
                (r.ownership?.current_request != null && r.ownership.current_request.business_profile_id !== B)))
          )
            throw Error("Business profile identity mismatch")
          if (!r.ownership_state_enabled) throw Error("Business claiming is unavailable")
          let o = r.ownership?.current_request?.business_profile_id
          if (n && null != o && o === r.business_profile_id) throw new f(o)
          if (!n && r.ownership?.current_request?.kind === P)
            return (
              (q = r.ownership.current_request),
              "claim" === P && null != U && (U.businessProfileId = q.business_profile_id ?? void 0),
              e_(e)
            )
          if (r.ownership?.available_action !== P || null != r.ownership.current_request)
            throw Error("Business is not available to claim")
          if (
            ("claim" === P &&
              null != U &&
              null != r.business_profile_id &&
              (U.businessProfileId = r.business_profile_id),
            "dispute" === P)
          )
            return r.dispute_business_profile_id ? ((B = r.dispute_business_profile_id), ed(e)) : { step: "persona" }
          if (null != r.claim_preparation_business_profile_id)
            return ((B = r.claim_preparation_business_profile_id), (M = null), ed(e, n))
          ;(await Y(e), G(e))
          let s = !0 === r.persona_verification_available
          t =
            s || (!1 === r.persona_verification_available && null != r.eligible_verification_methods)
              ? [
                  ...(null != k ? ["shopify"] : []),
                  ...(r.eligible_verification_methods ?? []),
                  ...(s && null == k ? ["persona"] : []),
                ]
              : void 0
          let a = {
              telemetryJourneyId: b?.telemetry_journey_id ?? void 0,
              step: "method",
              ...(null != t ? { eligibleMethods: t } : {}),
              claimDomain: r.claim_domain,
              shopifyShopDomain: k?.shopDomain,
            },
            _ = r.eligible_verification_methods
          if (
            (n || i?.entityKey != null) &&
            null != _ &&
            ((a.eligibleMethods = [
              ...(null != k ? ["shopify"] : []),
              ..._.filter((e) => "domain" !== e || !!r.claim_domain),
              ...(s && null == k ? ["persona"] : []),
            ]),
            0 === a.eligibleMethods.length)
          )
            throw Error("No verification methods are available for this place")
          return a
        },
        eE = async (e, t) => {
          let n = ++Z
          if (((D = void 0), "shopify" === e)) {
            if (!i?.shopifyActor) throw Error("Shopify verification requires browser web")
            null == B && (await Y(t))
          }
          if (q) {
            let i = await e_(t)
            if ("shopify" !== e || null == b || "shopify" !== h(b)) return i
          }
          if (!b) {
            let i = await ed(t),
              n = (G(t), b)
            if (n && ("shopify" !== e || "shopify" !== h(n))) return i
            p !== e && (z.clear(), (p = void 0), (W = !1), (R = void 0))
          }
          if (!b) {
            let i = null != p
            try {
              if (((b = j(await ea(e, t), t)), i && ["cancelled", "failed"].includes(ee(t)))) {
                b = void 0
                let i = await ed(t)
                if ((G(t), b)) return i
                ;(z.clear(), (p = void 0), (b = j(await ea(e, t), t)))
              }
            } catch (i) {
              if ((G(t), !(i instanceof c.fk) || 409 !== i.status)) throw i
              let e = await ed(t)
              if (b) return e
              throw i
            }
          }
          if ("dispute" === P && !E(b)) return (await ei(t), en(t))
          if (u(b)) return en(t)
          if ("shopify" === h(b)) {
            let r
            if ("shopify" !== e || ["success", "failed", "cancelled", "review"].includes(ee(t))) return en(t)
            let o = $()
            if (!i?.shopifyActor || void 0 === o) throw Error("Start Shopify verification in this browser tab")
            let s = b.id
            try {
              r = await (0, I.iW)({ actor: i.shopifyActor, flow: b, shopHint: o })
            } catch (e) {
              throw (
                t.isCurrent() &&
                  n === Z &&
                  e instanceof c.fk &&
                  409 === e.status &&
                  (G(t),
                  i.shopifyActor.assertCurrentActor(),
                  i.shopifyActor.getAbortSignal().throwIfAborted(),
                  (D = s)),
                e
              )
            }
            return (
              G(t),
              i.shopifyActor.assertCurrentActor(),
              i.shopifyActor.getAbortSignal().throwIfAborted(),
              window.location.assign(r),
              { ...en(t), shopifyRedirecting: !0 }
            )
          }
          if (h(b) !== e) throw Error("Cancel the existing claim before changing verification method")
          return "domain" === h(b)
            ? b.domain_verification?.status === "not_started" &&
              ["pending", "in_progress", "needs_information"].includes(b.status)
              ? er("start", t)
              : en(t)
            : (await ei(t), en(t))
        },
        eu = async (e, i, t) => {
          if (null == b || "email" !== h(b)) throw Error("Email verification is not available")
          let n = b.action_required
          "submit" === e && null != n && (N = { flowId: b.id, verificationId: n.verification_id })
          try {
            let n = await l.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/email-challenge",
              {
                parameters: { path: { business_profile_id: b.business_profile_id, flow_id: b.id } },
                additionalHeaders: T,
                signal: G(i),
                requestBody: { action: e, code: t },
              },
            )
            b = j(n.flow, i)
          } catch (e) {
            if ((G(i), !m(e))) throw ((N = void 0), e)
            await Q(i)
          }
          return en(i)
        },
        eI = i?.currentRequest?.status ?? "account"
      return {
        telemetryJourney: U,
        initialStep: "under_review" === eI ? "review" : eI,
        getApprovedProfileId: () => (b?.status === "approved" ? b.business_profile_id : void 0),
        getActiveRequestProfileId: () =>
          null == b
            ? (q?.business_profile_id ?? void 0)
            : ["pending", "in_progress", "needs_information", "under_review"].includes(b.status)
              ? b.business_profile_id
              : void 0,
        resume: X(e_),
        prepareNewPlaceClaim: X((e) => ed(e, !0)),
        prepareProfileMethods: (e) => X((i) => ec(e, i))(),
        prepare: X(async (e) =>
          (q?.shopify_verification && (await Y(e)), q) ? e_(e) : b ? (await Q(e), en(e)) : ed(e),
        ),
        checkDomain: X(async (e) => {
          if ((await Q(e), !b || !["pending", "in_progress", "needs_information"].includes(b.status))) return en(e)
          let i = b.domain_verification,
            t = i?.status === "pending" || i?.status === "passed" ? "check" : "start"
          try {
            return await er(t, e)
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
            return (await Q(e), { ...en(e), domainCheckSkipped: !0 })
          }
        }),
        start: X((e, i = "phone") => eE(i, e)),
        startEmail: X((e) => eE("email", e)),
        sendEmail: X(async (e) => (await Q(e), "delivery" === en(e).step ? eu("start", e) : en(e))),
        send: X(async (e, i, t) => {
          let n = await Q(e)
          G(e)
          let r = en(e)
          return "delivery" !== r.step || r.phoneAttemptUnavailable
            ? "delivery_pending" === r.step
              ? eo(e)
              : r
            : es(n, i, t, e)
        }),
        resend: X(async (e) => {
          let i = await Q(e)
          if ((G(e), "email" === h(i)))
            return ["code", "delivery_pending"].includes(en(e).step) ? eu("resend", e) : en(e)
          let t = null != L,
            n = en(e)
          if (
            null != n.verificationIssue ||
            (t && "delivery_pending" !== n.step) ||
            !["code", "delivery_pending"].includes(n.step)
          )
            return n
          let r = i.action_required
          if (
            r?.type === "confirm_verification_destination" &&
            L?.verificationId === r.verification_id &&
            L.confirmation
          )
            return es(i, L.confirmation.delivery, L.confirmation.testPhoneNumber, e)
          if (r?.type !== "submit_otp" && r?.type !== "retry_otp_delivery") return eo(e)
          let o = L
          L = {
            verificationId: r.verification_id,
            baselineSendCount: i.verifications.find((e) => e.id === r.verification_id)?.otp_send_count ?? 0,
          }
          try {
            let t = await l.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/verifications/{verification_id}/resend",
              {
                additionalHeaders: T,
                signal: G(e),
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
            if ((G(e), !t.accepted)) throw Error("OTP resend not accepted")
          } catch (i) {
            if ((G(e), !m(i))) throw ((L = o), i)
          }
          return eo(e)
        }),
        verify: X(async (e, i) => {
          let t = await Q(e)
          G(e)
          let n = en(e)
          if ("email" === h(t)) return "code" === n.step ? eu("submit", e, i) : n
          if ("code" !== n.step) return n
          let r = t.action_required
          if (r?.type !== "submit_otp") throw Error("OTP submission is not available")
          N = { flowId: t.id, verificationId: r.verification_id }
          try {
            let n = await l.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/verifications/{verification_id}/phone-otp",
              {
                additionalHeaders: T,
                signal: G(e),
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
            if ((G(e), !n.accepted)) throw Error("OTP not accepted")
          } catch (i) {
            if ((G(e), !m(i))) throw ((N = void 0), i)
          }
          try {
            await Q(e)
          } catch (i) {
            if ((G(e), !(i instanceof c.fk))) throw i
            return { step: "pending" }
          }
          return en(e)
        }),
        check: X(async (e) => {
          let i
          if (!b && !q && null != p) return ed(e)
          try {
            ;((i = await Q(e)), G(e))
          } catch (i) {
            throw (e.isCurrent() && (G(e), (D = void 0)), i)
          }
          if (H && "under_review" === i.status && "business_presence_profile_claim_v1" === i.policy_version)
            return e_(e)
          let t = en(e)
          return void 0 !== D && !0 !== t.shopifyStartConflict ? ((D = void 0), { ...t, shopifyStartConflict: !1 }) : t
        }),
        cancel: X(async (e) => {
          ;(++Z, (D = void 0))
          let i = await Q(e)
          if (
            (G(e),
            (b = j(
              ("shopify" === h(i)
                ? await l.Request.safePost(
                    "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/shopify-challenge",
                    {
                      additionalHeaders: T,
                      signal: G(e),
                      parameters: { path: { business_profile_id: i.business_profile_id, flow_id: i.id } },
                      requestBody: { action: "cancel" },
                    },
                  )
                : await l.Request.safePost(
                    "/chat/frontend/v1/business-profiles/{business_profile_id}/verification-flows/{flow_id}/cancel",
                    {
                      additionalHeaders: T,
                      signal: G(e),
                      parameters: { path: { business_profile_id: i.business_profile_id, flow_id: i.id } },
                      requestBody: {},
                    },
                  )
              ).flow,
              e,
            )),
            "cancelled" !== ee(e))
          )
            throw Error("Claim was not cancelled")
        }),
      }
    }
    function h(e) {
      return "shopify" === e.claim_verification_method
        ? "shopify"
        : (("selected_claim_verification_method" in e ? e.selected_claim_verification_method : void 0) ??
            e.claim_verification_method ??
            "phone")
    }
    function m(e) {
      return (
        e instanceof c.fk &&
        "AbortError" !== e.name &&
        ("network" === e.errorKind || 408 === e.status || (e.status >= 500 && e.status < 600))
      )
    }
  },
  kSYk(e, i, t) {
    t.d(i, { A: () => E })
    var n = t("ABep"),
      r = t("QosV"),
      o = t("zd8w"),
      s = t("oyxz"),
      a = t("M05Q"),
      l = t("LtFi"),
      _ = t("CNZc")
    function c(e) {
      let i,
        t,
        s,
        c,
        d,
        E,
        u = (0, r.c)(45),
        {
          phase: I,
          busy: f,
          disabled: S,
          codeDisabled: p,
          canResend: O,
          cooldownSeconds: C,
          code: h,
          onCodeChange: m,
          onVerify: N,
          invalid: A,
          retryLabel: v,
          error: y,
          onResend: R,
          onCheck: L,
          checkDisabled: b,
          hidePendingActions: D,
          hidePendingStatus: T,
          hideProgress: P,
          backAction: g,
          standaloneCodeForm: w,
        } = e,
        U = void 0 !== p && p,
        M = f || (void 0 !== S && S),
        B = M || !O || C > 0,
        F = (0, o.useRef)(!1)
      u[0] !== U || u[1] !== M || u[2] !== N
        ? ((i = async function (e) {
            if (!M && !U && !F.current && /^\d{6}$/.test(e)) {
              F.current = !0
              try {
                await N(e)
              } catch (e) {
                throw ((F.current = !1), e)
              }
              F.current = !1
            }
          }),
          (u[0] = U),
          (u[1] = M),
          (u[2] = N),
          (u[3] = i))
        : (i = u[3])
      let x = i,
        X = "code" === I && w,
        G = X ? "form" : "div"
      return (
        u[4] !== h || u[5] !== A || u[6] !== v || u[7] !== X || u[8] !== x
          ? ((t = X
              ? (e) => {
                  ;(e.preventDefault(), (A && null == v) || x(h))
                }
              : void 0),
            (u[4] = h),
            (u[5] = A),
            (u[6] = v),
            (u[7] = X),
            (u[8] = x),
            (u[9] = t))
          : (t = u[9]),
        u[10] !== h || u[11] !== A || u[12] !== I || u[13] !== v || u[14] !== x
          ? ((s = (e) => {
              "code" === I &&
                "Enter" === e.key &&
                !e.nativeEvent.isComposing &&
                e.target instanceof HTMLInputElement &&
                (e.preventDefault(), (A && null == v) || x(h))
            }),
            (u[10] = h),
            (u[11] = A),
            (u[12] = I),
            (u[13] = v),
            (u[14] = x),
            (u[15] = s))
          : (s = u[15]),
        u[16] !== g ||
        u[17] !== f ||
        u[18] !== b ||
        u[19] !== h ||
        u[20] !== U ||
        u[21] !== C ||
        u[22] !== y ||
        u[23] !== D ||
        u[24] !== T ||
        u[25] !== M ||
        u[26] !== A ||
        u[27] !== L ||
        u[28] !== m ||
        u[29] !== R ||
        u[30] !== I ||
        u[31] !== B ||
        u[32] !== v ||
        u[33] !== x
          ? ((c =
              "code" === I
                ? (0, n.jsx)(l.I, {
                    backAction: g,
                    code: h,
                    disabled: M || U,
                    pending: f,
                    invalid: A,
                    error: y,
                    retryLabel: v,
                    actionSize: "formAction",
                    resendDisabled: B,
                    cooldownSeconds: C,
                    onChange: m,
                    onVerify: (e) => void x(e),
                    onResend: R,
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      !T && (0, n.jsx)(a.rm, {}),
                      null != y && (0, n.jsx)("p", { role: "alert", className: "text-sm text-danger", children: y }),
                      !D &&
                        (0, n.jsx)("div", {
                          className: "flex flex-wrap gap-2",
                          children: (0, n.jsx)(a.MN, {
                            checkDisabled: M || !0 === b,
                            retryDisabled: B || null == R,
                            onCheck: L,
                            onRetry: () => R?.(),
                            backAction: g,
                          }),
                        }),
                      C > 0 &&
                        (0, n.jsx)("p", {
                          role: "status",
                          className: "text-sm text-secondary",
                          children: (0, n.jsx)(_.j, { seconds: C }),
                        }),
                    ],
                  })),
            (u[16] = g),
            (u[17] = f),
            (u[18] = b),
            (u[19] = h),
            (u[20] = U),
            (u[21] = C),
            (u[22] = y),
            (u[23] = D),
            (u[24] = T),
            (u[25] = M),
            (u[26] = A),
            (u[27] = L),
            (u[28] = m),
            (u[29] = R),
            (u[30] = I),
            (u[31] = B),
            (u[32] = v),
            (u[33] = x),
            (u[34] = c))
          : (c = u[34]),
        u[35] !== f || u[36] !== P
          ? ((d = f && !P && (0, n.jsx)(a.gv, {})), (u[35] = f), (u[36] = P), (u[37] = d))
          : (d = u[37]),
        u[38] !== G || u[39] !== f || u[40] !== t || u[41] !== s || u[42] !== c || u[43] !== d
          ? ((E = (0, n.jsxs)(G, {
              className: "flex flex-col gap-4",
              "aria-busy": f,
              onSubmit: t,
              onKeyDown: s,
              children: [c, d],
            })),
            (u[38] = G),
            (u[39] = f),
            (u[40] = t),
            (u[41] = s),
            (u[42] = c),
            (u[43] = d),
            (u[44] = E))
          : (E = u[44]),
        E
      )
    }
    var d = t("wODv")
    function E(e) {
      let i,
        t,
        l,
        E,
        u,
        I,
        f,
        S,
        p,
        O,
        C,
        h,
        m,
        N,
        A,
        v,
        y,
        R,
        L,
        b,
        D,
        T,
        P,
        g = (0, r.c)(73)
      g[0] !== e
        ? (({
            phase: O,
            delivery: l,
            availableDeliveries: i,
            onDeliveryChange: f,
            onSend: p,
            onResend: S,
            retryable: C,
            deliveryDisabled: u,
            deliveryContinueAction: E,
            retryingDelivery: h,
            sendDisabled: m,
            inForm: I,
            ...t
          } = e),
          (g[0] = e),
          (g[1] = i),
          (g[2] = t),
          (g[3] = l),
          (g[4] = E),
          (g[5] = u),
          (g[6] = I),
          (g[7] = f),
          (g[8] = S),
          (g[9] = p),
          (g[10] = O),
          (g[11] = C),
          (g[12] = h),
          (g[13] = m))
        : ((i = g[1]),
          (t = g[2]),
          (l = g[3]),
          (E = g[4]),
          (u = g[5]),
          (I = g[6]),
          (f = g[7]),
          (S = g[8]),
          (p = g[9]),
          (O = g[10]),
          (C = g[11]),
          (h = g[12]),
          (m = g[13]))
      let [w, U] = (0, o.useState)(!1),
        [M, B] = (0, o.useState)(!1),
        F = (0, o.useRef)(!1),
        x = t.busy || !0 === t.disabled,
        X = !x && t.canResend && 0 === t.cooldownSeconds && !m,
        G = "delivery" === O || w
      g[14] !== X
        ? ((N = async function (e, i) {
            if (X && !F.current) {
              ;((F.current = !0), B(i))
              try {
                ;(await e(), U(!1))
              } catch {}
              ;((F.current = !1), B(!1))
            }
          }),
          (g[14] = X),
          (g[15] = N))
        : (N = g[15])
      let j = N
      g[16] !== i || g[17] !== X || g[18] !== l || g[19] !== p || g[20] !== j || g[21] !== M
        ? ((A = function () {
            X && !M && (!i || i.includes(l)) && j(() => p(l), !0)
          }),
          (g[16] = i),
          (g[17] = X),
          (g[18] = l),
          (g[19] = p),
          (g[20] = j),
          (g[21] = M),
          (g[22] = A))
        : (A = g[22])
      let k = A
      g[23] !== X || g[24] !== S || g[25] !== j
        ? ((v = function () {
            if (X) {
              if (null == S) return void U(!0)
              j(S, !1)
            }
          }),
          (g[23] = X),
          (g[24] = S),
          (g[25] = j),
          (g[26] = v))
        : (v = g[26])
      let K = v
      g[27] !== t || g[28] !== w || g[29] !== I || g[30] !== O || g[31] !== K || g[32] !== C || g[33] !== G
        ? ((y =
            "code" !== O && G
              ? null
              : (0, n.jsx)(c, {
                  ...t,
                  backAction: G ? void 0 : t.backAction,
                  phase: O,
                  standaloneCodeForm: !I,
                  hideProgress: !0,
                  retryLabel:
                    C && !w
                      ? (0, n.jsx)(s.A, {
                          id: "businessProfiles.creation.phoneCode.retry",
                          defaultMessage: "Try again",
                          description:
                            "Retries verification of the entered phone code after a temporary request failure.",
                        })
                      : void 0,
                  onResend: "code" === O && w ? void 0 : K,
                })),
          (g[27] = t),
          (g[28] = w),
          (g[29] = I),
          (g[30] = O),
          (g[31] = K),
          (g[32] = C),
          (g[33] = G),
          (g[34] = y))
        : (y = g[34])
      let V = y
      g[35] !== i ||
      g[36] !== X ||
      g[37] !== t.backAction ||
      g[38] !== t.busy ||
      g[39] !== l ||
      g[40] !== E ||
      g[41] !== u ||
      g[42] !== I ||
      g[43] !== x ||
      g[44] !== f ||
      g[45] !== O ||
      g[46] !== h ||
      g[47] !== k ||
      g[48] !== M ||
      g[49] !== G
        ? ((R = G
            ? (0, n.jsx)(d.P, {
                delivery: l,
                availableDeliveries: i,
                disabled: x || !0 === u,
                pending: M || (I && "delivery" === O && t.busy),
                sendDisabled: !X || M,
                actionSize: "formAction",
                retrying: h,
                onChange: f,
                onSend: I ? k : void 0,
                continueAction: "delivery" === O ? E : void 0,
                backAction: t.backAction,
              })
            : null),
          (g[35] = i),
          (g[36] = X),
          (g[37] = t.backAction),
          (g[38] = t.busy),
          (g[39] = l),
          (g[40] = E),
          (g[41] = u),
          (g[42] = I),
          (g[43] = x),
          (g[44] = f),
          (g[45] = O),
          (g[46] = h),
          (g[47] = k),
          (g[48] = M),
          (g[49] = G),
          (g[50] = R))
        : (R = g[50])
      let Y = R
      return (
        g[51] !== t.error || g[52] !== V
          ? ((L =
              null == V &&
              null != t.error &&
              (0, n.jsx)("p", { role: "alert", className: "text-sm text-danger", children: t.error })),
            (g[51] = t.error),
            (g[52] = V),
            (g[53] = L))
          : (L = g[53]),
        g[54] !== I || g[55] !== Y || g[56] !== k
          ? ((b =
              null == Y || I
                ? Y
                : (0, n.jsx)("form", {
                    onSubmit: (e) => {
                      ;(e.preventDefault(), k())
                    },
                    children: Y,
                  })),
            (g[54] = I),
            (g[55] = Y),
            (g[56] = k),
            (g[57] = b))
          : (b = g[57]),
        g[58] !== t.cooldownSeconds || g[59] !== V
          ? ((D =
              null == V &&
              t.cooldownSeconds > 0 &&
              (0, n.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, n.jsx)(_.j, { seconds: t.cooldownSeconds }),
              })),
            (g[58] = t.cooldownSeconds),
            (g[59] = V),
            (g[60] = D))
          : (D = g[60]),
        g[61] !== t.busy || g[62] !== t.hideProgress || g[63] !== O || g[64] !== M
          ? ((T = t.busy && !t.hideProgress && (0, n.jsx)(a.gv, { visuallyHidden: M || "delivery" === O })),
            (g[61] = t.busy),
            (g[62] = t.hideProgress),
            (g[63] = O),
            (g[64] = M),
            (g[65] = T))
          : (T = g[65]),
        g[66] !== t.busy || g[67] !== V || g[68] !== L || g[69] !== b || g[70] !== D || g[71] !== T
          ? ((P = (0, n.jsxs)("div", {
              className: "flex flex-col gap-4",
              "aria-busy": t.busy,
              children: [V, L, b, D, T],
            })),
            (g[66] = t.busy),
            (g[67] = V),
            (g[68] = L),
            (g[69] = b),
            (g[70] = D),
            (g[71] = T),
            (g[72] = P))
          : (P = g[72]),
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
    function _(e) {
      if (!(0, o.x)({ browser: !0 })) throw Error("Shopify verification requires browser web")
      ;(e.getAbortSignal().throwIfAborted(), e.assertCurrentActor())
    }
    function c(e) {
      return (
        _(e),
        {
          additionalHeaders: { "ChatGPT-Account-ID": e.accountId, [n.zBc]: e.accountId, "x-openai-use-sheep": "1" },
          expectedIdentity: { accountId: e.accountId, userId: e.userId },
          assertRequestCurrent: () => _(e),
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
            (_(e.actor),
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
            (_(e.actor),
            null == i.flow ||
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
              "https://connect.ads.openai-staging.com",
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
            (_(e.actor),
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
              (_(e.actor),
              null == i.shop_gid || !a.test(i.shop_gid) || null == i.myshopify_domain || !s.test(i.myshopify_domain))
            )
              return null
            return { shopGid: i.shop_gid, shopDomain: i.myshopify_domain, testOverride: !1 }
          } catch {
            return (_(e.actor), null)
          }
        },
        Pu: async function (e) {
          if (
            (_(e.actor),
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
            (_(e.actor),
            null == i.flow ||
              i.flow.flow_type !== (e.flowType ?? "claim") ||
              "shopify" !== i.flow.claim_verification_method ||
              (null != e.businessProfileId && i.flow.business_profile_id !== e.businessProfileId))
          )
            throw Error("Shopify verification changed")
          return i.flow
        },
        TY: function (e) {
          _(e.actor)
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
              (_(e.actor),
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
              (_(e.actor),
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
                "https://connect.ads.openai-staging.com",
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
              _(e.actor),
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
              _(e.actor),
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
      s = t("Sm6l"),
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
            _,
            c = (0, r.c)(13),
            { checkDisabled: d, retryDisabled: E, onCheck: u, onRetry: I, backAction: f } = e,
            S = null == u && f,
            p = null == u ? "primary" : "outlineGhost"
          ;(c[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, n.jsx)(l, {})), (c[0] = i)) : (i = c[0]),
            c[1] !== I || c[2] !== E || c[3] !== p
              ? ((t = (0, n.jsx)(s.$, {
                  type: "button",
                  size: "formAction",
                  radius: "full",
                  color: p,
                  disabled: E,
                  onClick: I,
                  children: i,
                })),
                (c[1] = I),
                (c[2] = E),
                (c[3] = p),
                (c[4] = t))
              : (t = c[4]))
          let O = null != u && f
          return (
            c[5] !== d || c[6] !== u
              ? ((a =
                  null != u
                    ? (0, n.jsx)(s.$, {
                        type: "button",
                        size: "formAction",
                        radius: "full",
                        color: "primary",
                        disabled: d,
                        onClick: u,
                        children: (0, n.jsx)(o.A, {
                          id: "chatgpt.localBusiness.claim.delivery.checkStatus",
                          defaultMessage: "Check status",
                          description:
                            "Reads the existing business phone verification status without sending another code",
                        }),
                      })
                    : null),
                (c[5] = d),
                (c[6] = u),
                (c[7] = a))
              : (a = c[7]),
            c[8] !== S || c[9] !== t || c[10] !== O || c[11] !== a
              ? ((_ = (0, n.jsxs)(n.Fragment, { children: [S, t, O, a] })),
                (c[8] = S),
                (c[9] = t),
                (c[10] = O),
                (c[11] = a),
                (c[12] = _))
              : (_ = c[12]),
            _
          )
        },
        gv: function (e) {
          let i,
            t,
            s,
            l,
            _ = (0, r.c)(9),
            { visuallyHidden: c } = e,
            d = void 0 !== c && c,
            E = d ? "sr-only" : void 0
          _[0] !== d ? ((i = !d && (0, n.jsx)(a.y, {})), (_[0] = d), (_[1] = i)) : (i = _[1])
          let u = d ? void 0 : "sr-only"
          return (
            _[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(o.A, {
                  id: "chatgpt.localBusiness.claim.pending",
                  defaultMessage: "Working…",
                  description: "Accessible pending state while a business verification action completes",
                })),
                (_[2] = t))
              : (t = _[2]),
            _[3] !== u ? ((s = (0, n.jsx)("span", { className: u, children: t })), (_[3] = u), (_[4] = s)) : (s = _[4]),
            _[5] !== E || _[6] !== i || _[7] !== s
              ? ((l = (0, n.jsxs)("div", { className: E, role: "status", children: [i, s] })),
                (_[5] = E),
                (_[6] = i),
                (_[7] = s),
                (_[8] = l))
              : (l = _[8]),
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
    t.d(i, { m: () => p })
    var n = t("ABep"),
      r = t("QosV"),
      o = t("Wf1j"),
      s = t("oyxz"),
      a = t("ZEx5"),
      l = t("slpy"),
      _ = t("zd8w"),
      c = t("Sm6l"),
      d = t("uuN8"),
      E = t("bVeK"),
      u = t("nzx4"),
      I = t("AWNZ"),
      f = t("aepO")
    function S(e) {
      let i,
        t,
        s,
        a,
        S,
        p,
        O,
        C,
        h,
        m = (0, r.c)(23),
        { label: N, value: A, help: v, copyLabel: y } = e,
        R = (0, o.A)(),
        L = (0, _.useId)()
      m[0] !== v || m[1] !== L || m[2] !== N
        ? ((i =
            null == v
              ? N
              : (0, n.jsxs)("span", {
                  className: "flex items-center gap-1",
                  children: [
                    N,
                    (0, n.jsxs)(u.AM, {
                      children: [
                        (0, n.jsx)(u.Wv, {
                          asChild: !0,
                          children: (0, n.jsx)(l.m, {
                            content: (0, n.jsx)("div", {
                              className: "text-start text-sm leading-5 font-normal",
                              children: v.content,
                            }),
                            children: (0, n.jsx)(c.$, {
                              "aria-label": v.label,
                              color: "ghostTertiary",
                              size: "inline",
                              children: (0, n.jsx)(E.ehD, {}),
                            }),
                          }),
                        }),
                        (0, n.jsx)(u.hl, {
                          "aria-label": v.label,
                          "aria-describedby": L,
                          size: "large",
                          variant: "menu",
                          children: (0, n.jsx)("div", { id: L, className: "text-sm select-text", children: v.content }),
                        }),
                      ],
                    }),
                  ],
                })),
          (m[0] = v),
          (m[1] = L),
          (m[2] = N),
          (m[3] = i))
        : (i = m[3])
      let b = i
      return (
        m[4] !== b
          ? ((t = (0, n.jsx)("dt", { className: "text-xs leading-4 text-secondary", children: b })),
            (m[4] = b),
            (m[5] = t))
          : (t = m[5]),
        m[6] !== A
          ? ((s = (0, n.jsx)("dd", {
              className: "text-base leading-6.5 break-all text-default select-text",
              children: A,
            })),
            (m[6] = A),
            (m[7] = s))
          : (s = m[7]),
        m[8] !== t || m[9] !== s
          ? ((a = (0, n.jsxs)("dl", { children: [t, s] })), (m[8] = t), (m[9] = s), (m[10] = a))
          : (a = m[10]),
        m[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = { copy: (0, n.jsx)(E.Gn, {}), copied: (0, n.jsx)(E.jFs, {}) }), (m[11] = S))
          : (S = m[11]),
        m[12] !== y || m[13] !== R
          ? ((p =
              y ??
              R.formatMessage({
                id: "businessProfiles.verification.copyDns",
                defaultMessage: "Copy DNS record detail",
                description: "Copy one DNS record detail to the clipboard",
              })),
            (m[12] = y),
            (m[13] = R),
            (m[14] = p))
          : (p = m[14]),
        m[15] !== A ? ((O = (e) => (0, f.E)(A, e)), (m[15] = A), (m[16] = O)) : (O = m[16]),
        m[17] !== p || m[18] !== O
          ? ((C = (0, n.jsx)(d.i, { iconOnly: !0, variant: "codeBlock", icons: S, ariaLabel: p, onCopy: O })),
            (m[17] = p),
            (m[18] = O),
            (m[19] = C))
          : (C = m[19]),
        m[20] !== a || m[21] !== C
          ? ((h = (0, n.jsx)(I.ic, {
              variant: "featured",
              labelWeight: "normal",
              controlSizing: "content",
              label: a,
              control: C,
            })),
            (m[20] = a),
            (m[21] = C),
            (m[22] = h))
          : (h = m[22]),
        h
      )
    }
    function p(e) {
      let i,
        t,
        l = (0, r.c)(9),
        { recordType: _, recordName: c, recordValue: d, variant: E, nameHelp: u, valueHelp: I } = e,
        f = void 0 === _ ? "TXT" : _,
        p = void 0 === E ? "challenge" : E,
        O = (0, o.A)()
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(s.A, {
              id: "businessProfiles.verification.dnsType",
              defaultMessage: "Type",
              description: "DNS record type label",
            })),
            (l[0] = i))
          : (i = l[0]),
        l[1] !== O || l[2] !== u || l[3] !== c || l[4] !== f || l[5] !== d || l[6] !== I || l[7] !== p
          ? ((t = (0, n.jsx)(a.t, {
              variant: "form",
              children: [
                { key: "type", value: f, help: void 0, label: i },
                {
                  key: "name",
                  value: c,
                  help: u,
                  label: (0, n.jsx)(s.A, {
                    id: "businessProfiles.verification.dnsHost",
                    defaultMessage: "Name or host",
                    description: "DNS record name or host label",
                  }),
                },
                {
                  key: "value",
                  value: d,
                  help: I,
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
                  S,
                  {
                    label: o,
                    value: t,
                    help: r,
                    copyLabel:
                      "manager" === p
                        ? void 0
                        : O.formatMessage(
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
            (l[1] = O),
            (l[2] = u),
            (l[3] = c),
            (l[4] = f),
            (l[5] = d),
            (l[6] = I),
            (l[7] = p),
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
            _,
            c,
            d,
            E,
            u,
            I,
            f,
            S = (0, r.c)(53),
            {
              step: p,
              code: O,
              disabled: C,
              pending: h,
              invalid: m,
              error: N,
              description: A,
              resendDisabled: v,
              cooldownSeconds: y,
              checkDisabled: R,
              backAction: L,
              onChange: b,
              onVerify: D,
              onSend: T,
              onCheck: P,
            } = e
          return (
            S[0] !== A
              ? ((i = null != A ? (0, n.jsx)("p", { className: "text-secondary", children: A }) : null),
                (S[0] = A),
                (S[1] = i))
              : (i = S[1]),
            S[2] !== L ||
            S[3] !== O ||
            S[4] !== y ||
            S[5] !== C ||
            S[6] !== N ||
            S[7] !== m ||
            S[8] !== b ||
            S[9] !== T ||
            S[10] !== D ||
            S[11] !== h ||
            S[12] !== v ||
            S[13] !== p
              ? ((t =
                  "code" === p
                    ? (0, n.jsx)(a.I, {
                        backAction: L,
                        code: O,
                        disabled: C,
                        pending: h,
                        invalid: m,
                        error: N,
                        retryLabel:
                          null == N || C
                            ? void 0
                            : (0, n.jsx)(o.A, {
                                id: "chatgpt.localBusiness.claim.code.verify",
                                defaultMessage: "Verify",
                                description: "Checks the entered business verification code",
                              }),
                        actionSize: "formAction",
                        resendDisabled: C || v,
                        cooldownSeconds: y,
                        onChange: b,
                        onVerify: D,
                        onResend: T,
                      })
                    : null),
                (S[2] = L),
                (S[3] = O),
                (S[4] = y),
                (S[5] = C),
                (S[6] = N),
                (S[7] = m),
                (S[8] = b),
                (S[9] = T),
                (S[10] = D),
                (S[11] = h),
                (S[12] = v),
                (S[13] = p),
                (S[14] = t))
              : (t = S[14]),
            S[15] !== L ||
            S[16] !== R ||
            S[17] !== y ||
            S[18] !== C ||
            S[19] !== P ||
            S[20] !== T ||
            S[21] !== v ||
            S[22] !== p
              ? ((_ =
                  "delivery_pending" === p
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(s.rm, {}),
                          (0, n.jsx)("div", {
                            className: "flex flex-wrap gap-2",
                            children: (0, n.jsx)(s.MN, {
                              checkDisabled: C || R,
                              retryDisabled: C || v || y > 0,
                              onCheck: P,
                              onRetry: T,
                              backAction: L,
                            }),
                          }),
                        ],
                      })
                    : null),
                (S[15] = L),
                (S[16] = R),
                (S[17] = y),
                (S[18] = C),
                (S[19] = P),
                (S[20] = T),
                (S[21] = v),
                (S[22] = p),
                (S[23] = _))
              : (_ = S[23]),
            S[24] !== y || S[25] !== p
              ? ((c =
                  "code" !== p && y > 0
                    ? (0, n.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary",
                        children: (0, n.jsx)(l.j, { seconds: y }),
                      })
                    : null),
                (S[24] = y),
                (S[25] = p),
                (S[26] = c))
              : (c = S[26]),
            S[27] !== N || S[28] !== p
              ? ((d =
                  "code" !== p && null != N
                    ? (0, n.jsx)("p", { role: "alert", className: "text-sm text-danger", children: N })
                    : null),
                (S[27] = N),
                (S[28] = p),
                (S[29] = d))
              : (d = S[29]),
            S[30] !== h || S[31] !== p
              ? ((E =
                  "request" === p && h
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
                (S[30] = h),
                (S[31] = p),
                (S[32] = E))
              : (E = S[32]),
            S[33] !== L || S[34] !== y || S[35] !== C || S[36] !== T || S[37] !== v || S[38] !== p
              ? ((u =
                  "request" === p
                    ? (0, n.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: (0, n.jsx)(s.MN, {
                          checkDisabled: !0,
                          retryDisabled: C || v || y > 0,
                          onRetry: T,
                          backAction: L,
                        }),
                      })
                    : null),
                (S[33] = L),
                (S[34] = y),
                (S[35] = C),
                (S[36] = T),
                (S[37] = v),
                (S[38] = p),
                (S[39] = u))
              : (u = S[39]),
            S[40] !== h || S[41] !== p
              ? ((I = h && "request" !== p ? (0, n.jsx)(s.gv, {}) : null), (S[40] = h), (S[41] = p), (S[42] = I))
              : (I = S[42]),
            S[43] !== h ||
            S[44] !== i ||
            S[45] !== t ||
            S[46] !== _ ||
            S[47] !== c ||
            S[48] !== d ||
            S[49] !== E ||
            S[50] !== u ||
            S[51] !== I
              ? ((f = (0, n.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  "aria-busy": h,
                  children: [i, t, _, c, d, E, u, I],
                })),
                (S[43] = h),
                (S[44] = i),
                (S[45] = t),
                (S[46] = _),
                (S[47] = c),
                (S[48] = d),
                (S[49] = E),
                (S[50] = u),
                (S[51] = I),
                (S[52] = f))
              : (f = S[52]),
            f
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
      o = t("Sm6l"),
      s = t("JNtf"),
      a = t("bVeK"),
      l = t("oR5x"),
      _ = t("pvU7")
    function c(e) {
      return e.preventDefault()
    }
    t.d(
      i,
      {},
      {
        Y: function (e) {
          let i,
            t,
            s,
            _,
            c,
            d,
            E,
            u,
            I = (0, r.c)(29),
            {
              backButtonRef: f,
              backLabel: S,
              onBack: p,
              busy: O,
              preview: C,
              previewLabel: h,
              content: m,
              contentFirstOnMobile: N,
              mobileConfirmation: A,
              hidePreviewOnMobile: v,
            } = e,
            y = void 0 !== N && N,
            R = void 0 !== A && A,
            L = void 0 === v ? R : v,
            b = null == h ? "div" : "aside",
            D = `flex items-center justify-center bg-surface-tertiary px-6 py-20 md:order-2 md:px-12 ${L ? "max-md:hidden" : ""}`
          I[0] !== b || I[1] !== C || I[2] !== h || I[3] !== D
            ? ((i = (0, n.jsx)(b, { className: D, "aria-label": h, children: C }, "preview")),
              (I[0] = b),
              (I[1] = C),
              (I[2] = h),
              (I[3] = D),
              (I[4] = i))
            : (i = I[4])
          let T = i,
            P = `flex items-center justify-center px-6 py-12 md:order-1 md:px-12 lg:px-20 ${R ? "max-md:pt-20 max-md:pb-6" : ""}`
          I[5] !== m || I[6] !== P
            ? ((t = (0, n.jsx)("div", { className: P, children: m }, "content")), (I[5] = m), (I[6] = P), (I[7] = t))
            : (t = I[7])
          let g = t
          I[8] !== S || I[9] !== R || I[10] !== p
            ? ((s =
                R &&
                (0, n.jsx)(o.$, {
                  size: "iconCircle",
                  color: "secondary",
                  className: "size-11 rounded-full bg-surface/80 md:hidden",
                  "aria-label": S,
                  onClick: p,
                  children: (0, n.jsx)(a.pgK, {}),
                })),
              (I[8] = S),
              (I[9] = R),
              (I[10] = p),
              (I[11] = s))
            : (s = I[11])
          let w = `text-sm leading-5 font-normal ${R ? "max-md:hidden" : ""}`
          return (
            I[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = (0, n.jsx)(l.M, { variant: "createOrClaim" })), (I[12] = _))
              : (_ = I[12]),
            I[13] !== f || I[14] !== S || I[15] !== O || I[16] !== p || I[17] !== w
              ? ((c = (0, n.jsx)(o.$, {
                  ref: f,
                  type: "button",
                  size: "inline",
                  className: w,
                  color: "ghostActive",
                  disabled: O,
                  onClick: p,
                  "aria-label": S,
                  children: _,
                })),
                (I[13] = f),
                (I[14] = S),
                (I[15] = O),
                (I[16] = p),
                (I[17] = w),
                (I[18] = c))
              : (c = I[18]),
            I[19] !== c || I[20] !== s
              ? ((d = (0, n.jsxs)("div", { className: "absolute start-6 top-6 z-10", children: [s, c] })),
                (I[19] = c),
                (I[20] = s),
                (I[21] = d))
              : (d = I[21]),
            I[22] !== y || I[23] !== g || I[24] !== T
              ? ((E = (0, n.jsx)("div", {
                  className: "grid min-h-full grid-cols-1 md:grid-cols-2",
                  children: y ? [g, T] : [T, g],
                })),
                (I[22] = y),
                (I[23] = g),
                (I[24] = T),
                (I[25] = E))
              : (E = I[25]),
            I[26] !== d || I[27] !== E
              ? ((u = (0, n.jsxs)(n.Fragment, { children: [d, E] })), (I[26] = d), (I[27] = E), (I[28] = u))
              : (u = I[28]),
            u
          )
        },
        d: function (e) {
          let i,
            t,
            o,
            a = (0, r.c)(12),
            { children: l, modal: d, personaActive: E, closeDisabled: u, onClose: I, contentProps: f } = e,
            S = !E,
            p = !!E || void 0
          return (
            a[0] !== f || a[1] !== S || a[2] !== p
              ? ((i = { ...f, "aria-describedby": void 0, "aria-modal": S, inert: p, onInteractOutside: c }),
                (a[0] = f),
                (a[1] = S),
                (a[2] = p),
                (a[3] = i))
              : (i = a[3]),
            a[4] !== u || a[5] !== I
              ? ((t = (e) => {
                  e || u || I()
                }),
                (a[4] = u),
                (a[5] = I),
                (a[6] = t))
              : (t = a[6]),
            a[7] !== l || a[8] !== d || a[9] !== i || a[10] !== t
              ? ((o = (0, n.jsx)(s.lG, {
                  open: !0,
                  modal: d,
                  unstyledContent: !0,
                  contentClassName: _.A.verificationDialog,
                  viewportSized: !0,
                  showDialogClose: !1,
                  contentProps: i,
                  onOpenChange: t,
                  children: l,
                })),
                (a[7] = l),
                (a[8] = d),
                (a[9] = i),
                (a[10] = t),
                (a[11] = o))
              : (o = a[11]),
            o
          )
        },
      },
    )
  },
  LtFi(e, i, t) {
    t.d(i, { I: () => u })
    var n = t("ABep"),
      r = t("QosV"),
      o = t("zd8w"),
      s = t("Wf1j"),
      a = t("oyxz"),
      l = t("Sm6l"),
      _ = t("on57"),
      c = t("zLIa")
    function d(e) {
      let i,
        t,
        s,
        a,
        l,
        d,
        E = (0, r.c)(29),
        { id: u, variant: I, value: f, disabled: S, invalid: p, pending: O, label: C, describedBy: h, onChange: m } = e,
        [N, A] = (0, o.useState)(0),
        v = void 0 !== O && O ? null : Math.min(N, f.length, 5)
      if ("field" === I) {
        let e, i
        return (
          E[0] !== m ? ((e = (e) => m(e.target.value)), (E[0] = m), (E[1] = e)) : (e = E[1]),
          E[2] !== h || E[3] !== S || E[4] !== u || E[5] !== p || E[6] !== C || E[7] !== e || E[8] !== f
            ? ((i = (0, n.jsx)(c.pd, {
                id: u,
                variant: "onboarding",
                type: "text",
                inputMode: "numeric",
                autoComplete: "one-time-code",
                pattern: "[0-9]{6}",
                maxLength: 6,
                required: !0,
                value: f,
                disabled: S,
                "aria-invalid": p,
                "aria-label": C,
                "aria-describedby": h,
                onChange: e,
              })),
              (E[2] = h),
              (E[3] = S),
              (E[4] = u),
              (E[5] = p),
              (E[6] = C),
              (E[7] = e),
              (E[8] = f),
              (E[9] = i))
            : (i = E[9]),
          i
        )
      }
      return (
        E[10] === Symbol.for("react.memo_cache_sentinel") ? ((i = [0, 1]), (E[10] = i)) : (i = E[10]),
        E[11] !== v || E[12] !== p || E[13] !== f
          ? ((t = (0, n.jsx)("div", {
              "aria-hidden": "true",
              className: "flex items-center gap-3",
              children: i.map((e) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className: "flex items-center gap-3",
                    children: [
                      1 === e && (0, n.jsx)("span", { className: "size-1 rounded-full bg-neutral-solid" }),
                      (0, n.jsx)("div", {
                        className: (0, _.A)(
                          "flex divide-x overflow-hidden rounded-lg border",
                          p ? "divide-text-danger border-text-danger" : "divide-border border-default",
                        ),
                        children: [0, 1, 2].map((i) =>
                          (0, n.jsx)(
                            "span",
                            {
                              className: (0, _.A)(
                                "flex h-12 w-10 items-center justify-center text-lg first:rounded-l-lg last:rounded-r-lg sm:w-12",
                                3 * e + i === v &&
                                  "group-focus-within/verification-code:ring-2 group-focus-within/verification-code:ring-inset",
                                p
                                  ? "group-focus-within/verification-code:ring-text-danger"
                                  : "group-focus-within/verification-code:ring-ring",
                              ),
                              children:
                                f[3 * e + i] ??
                                (3 * e + i === v &&
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
            (E[11] = v),
            (E[12] = p),
            (E[13] = f),
            (E[14] = t))
          : (t = E[14]),
        E[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (e) => A(e.currentTarget.selectionStart ?? 0)), (E[15] = s))
          : (s = E[15]),
        E[16] !== m ? ((a = (e) => m(e.target.value)), (E[16] = m), (E[17] = a)) : (a = E[17]),
        E[18] !== h || E[19] !== S || E[20] !== u || E[21] !== p || E[22] !== C || E[23] !== a || E[24] !== f
          ? ((l = (0, n.jsx)("input", {
              id: u,
              className:
                "absolute inset-0 size-full rounded-lg bg-transparent text-transparent caret-transparent opacity-0 outline-none",
              autoFocus: !0,
              type: "text",
              inputMode: "numeric",
              autoComplete: "one-time-code",
              maxLength: 6,
              value: f,
              disabled: S,
              "aria-invalid": p,
              "aria-describedby": h,
              "aria-label": C,
              onSelect: s,
              onChange: a,
            })),
            (E[18] = h),
            (E[19] = S),
            (E[20] = u),
            (E[21] = p),
            (E[22] = C),
            (E[23] = a),
            (E[24] = f),
            (E[25] = l))
          : (l = E[25]),
        E[26] !== t || E[27] !== l
          ? ((d = (0, n.jsxs)("div", {
              className: "group/verification-code relative w-fit max-w-full",
              dir: "ltr",
              children: [t, l],
            })),
            (E[26] = t),
            (E[27] = l),
            (E[28] = d))
          : (d = E[28]),
        d
      )
    }
    var E = t("CNZc")
    function u(e) {
      let i,
        t,
        _,
        c,
        u,
        I,
        f,
        S = (0, r.c)(33),
        {
          code: p,
          disabled: O,
          pending: C,
          invalid: h,
          error: m,
          retryLabel: N,
          backAction: A,
          actionSize: v,
          resendDisabled: y,
          cooldownSeconds: R,
          onChange: L,
          onVerify: b,
          onResend: D,
        } = e,
        T = void 0 === v ? "formAction" : v,
        P = (0, s.A)(),
        g = (0, o.useId)(),
        w = null != m ? g : void 0
      return (
        S[0] !== P
          ? ((i = P.formatMessage({
              id: "businessProfiles.verification.phoneCode.label",
              defaultMessage: "Six-digit verification code",
              description: "Accessible label for the business verification code input",
            })),
            (S[0] = P),
            (S[1] = i))
          : (i = S[1]),
        S[2] !== O || S[3] !== L || S[4] !== b
          ? ((t = (e) => {
              let i = e.replace(/\D/g, "").slice(0, 6)
              ;(L(i), O || 6 !== i.length || b(i))
            }),
            (S[2] = O),
            (S[3] = L),
            (S[4] = b),
            (S[5] = t))
          : (t = S[5]),
        S[6] !== p || S[7] !== O || S[8] !== h || S[9] !== C || S[10] !== w || S[11] !== i || S[12] !== t
          ? ((_ = (0, n.jsx)(d, {
              variant: "grouped",
              value: p,
              disabled: O,
              pending: C,
              invalid: h,
              describedBy: w,
              label: i,
              onChange: t,
            })),
            (S[6] = p),
            (S[7] = O),
            (S[8] = h),
            (S[9] = C),
            (S[10] = w),
            (S[11] = i),
            (S[12] = t),
            (S[13] = _))
          : (_ = S[13]),
        S[14] !== m || S[15] !== g
          ? ((c =
              null != m
                ? (0, n.jsx)("p", { id: g, role: "alert", className: "text-sm text-danger", children: m })
                : null),
            (S[14] = m),
            (S[15] = g),
            (S[16] = c))
          : (c = S[16]),
        S[17] !== R || S[18] !== D || S[19] !== y
          ? ((u =
              null != D
                ? (0, n.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-1 text-sm text-secondary",
                    children: [
                      (0, n.jsx)(a.A, {
                        id: "businessProfiles.verification.phoneCode.resendPrompt",
                        defaultMessage: "Didn’t receive your code?",
                        description: "Prompt preceding the resend action under the business verification digit boxes",
                      }),
                      (0, n.jsx)(E.l, { variant: "inline", disabled: y, cooldownSeconds: R, onResend: D }),
                    ],
                  })
                : null),
            (S[17] = R),
            (S[18] = D),
            (S[19] = y),
            (S[20] = u))
          : (u = S[20]),
        S[21] !== T || S[22] !== A || S[23] !== p || S[24] !== O || S[25] !== b || S[26] !== N
          ? ((I =
              null != A || null != N
                ? (0, n.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                      A,
                      null != N
                        ? (0, n.jsx)(l.$, {
                            type: "button",
                            size: T,
                            radius: "full",
                            color: "primary",
                            disabled: O || !/^\d{6}$/.test(p),
                            onClick: () => b(p),
                            children: N,
                          })
                        : null,
                    ],
                  })
                : null),
            (S[21] = T),
            (S[22] = A),
            (S[23] = p),
            (S[24] = O),
            (S[25] = b),
            (S[26] = N),
            (S[27] = I))
          : (I = S[27]),
        S[28] !== _ || S[29] !== c || S[30] !== u || S[31] !== I
          ? ((f = (0, n.jsxs)("div", { className: "flex flex-col gap-4", children: [_, c, u, I] })),
            (S[28] = _),
            (S[29] = c),
            (S[30] = u),
            (S[31] = I),
            (S[32] = f))
          : (f = S[32]),
        f
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
      _ = t("nhlW")
    function c(e) {
      let i,
        t,
        l,
        _,
        c,
        d,
        E,
        u,
        I,
        f,
        S,
        p = (0, r.c)(23),
        { delivery: O, availableDeliveries: C, disabled: h, onChange: m } = e
      p[0] !== C ? ((i = void 0 === C ? ["sms", "call"] : C), (p[0] = C), (p[1] = i)) : (i = p[1])
      let N = i,
        A = (0, s.A)()
      ;(p[2] !== A
        ? ((t = A.formatMessage({
            id: "businessProfiles.verification.phoneDelivery.label",
            defaultMessage: "Code delivery method",
            description: "Accessible group label for text or phone call business verification delivery",
          })),
          (p[2] = A),
          (p[3] = t))
        : (t = p[3]),
        p[4] !== N ? ((l = N.includes("sms")), (p[4] = N), (p[5] = l)) : (l = p[5]))
      let v = !l
      ;(p[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (0, n.jsx)(a.A, {
            id: "businessProfiles.verification.phoneDelivery.sms",
            defaultMessage: "Text message",
            description: "Option to receive a business verification code by text message",
          })),
          (p[6] = _))
        : (_ = p[6]),
        p[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsxs)("span", {
              className: "flex min-w-0 flex-col text-base",
              children: [
                _,
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
            (p[7] = c))
          : (c = p[7]),
        p[8] !== v
          ? ((d = (0, n.jsx)(o.z.Item, { value: "sms", disabled: v, block: !0, children: c })), (p[8] = v), (p[9] = d))
          : (d = p[9]),
        p[10] !== N ? ((E = N.includes("call")), (p[10] = N), (p[11] = E)) : (E = p[11]))
      let y = !E
      return (
        p[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(a.A, {
              id: "businessProfiles.verification.phoneDelivery.call",
              defaultMessage: "Phone call",
              description: "Option to receive a business verification code in an automated phone call",
            })),
            (p[12] = u))
          : (u = p[12]),
        p[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, n.jsxs)("span", {
              className: "flex min-w-0 flex-col text-base",
              children: [
                u,
                (0, n.jsx)("span", {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(a.A, {
                    id: "businessProfiles.verification.phoneDelivery.callDescription",
                    defaultMessage: "Get a code through an automated phone call.",
                    description: "Helper text for automated voice-call delivery of a business verification code",
                  }),
                }),
              ],
            })),
            (p[13] = I))
          : (I = p[13]),
        p[14] !== y
          ? ((f = (0, n.jsx)(o.z.Item, { value: "call", disabled: y, block: !0, children: I })),
            (p[14] = y),
            (p[15] = f))
          : (f = p[15]),
        p[16] !== O || p[17] !== h || p[18] !== m || p[19] !== f || p[20] !== t || p[21] !== d
          ? ((S = (0, n.jsx)("div", {
              className: "rounded-2xl border border-default",
              children: (0, n.jsxs)(o.z, {
                value: O,
                onChange: m,
                disabled: h,
                variant: "list",
                "aria-label": t,
                children: [d, f],
              }),
            })),
            (p[16] = O),
            (p[17] = h),
            (p[18] = m),
            (p[19] = f),
            (p[20] = t),
            (p[21] = d),
            (p[22] = S))
          : (S = p[22]),
        S
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
            d,
            E = (0, r.c)(25),
            {
              delivery: u,
              availableDeliveries: I,
              disabled: f,
              pending: S,
              sendDisabled: p,
              actionSize: O,
              retrying: C,
              onChange: h,
              onSend: m,
              backAction: N,
              continueAction: A,
              progress: v,
            } = e
          E[0] !== I ? ((i = void 0 === I ? ["sms", "call"] : I), (E[0] = I), (E[1] = i)) : (i = E[1])
          let y = i,
            R = void 0 === p ? f : p,
            L = void 0 === O ? "formAction" : O,
            b = void 0 !== C && C
          E[2] !== y || E[3] !== u || E[4] !== f || E[5] !== h
            ? ((t = (0, n.jsx)(c, { delivery: u, availableDeliveries: y, disabled: f, onChange: h })),
              (E[2] = y),
              (E[3] = u),
              (E[4] = f),
              (E[5] = h),
              (E[6] = t))
            : (t = E[6])
          let D = b || null != N ? "flex flex-wrap items-center gap-2" : "flex flex-col"
          return (
            E[7] !== L ||
            E[8] !== y ||
            E[9] !== A ||
            E[10] !== u ||
            E[11] !== f ||
            E[12] !== m ||
            E[13] !== S ||
            E[14] !== b ||
            E[15] !== R
              ? ((o =
                  A ??
                  (0, n.jsx)(_.C, {
                    type: null == m ? "submit" : "button",
                    onClick: m,
                    size: L,
                    radius: "full",
                    color: "primary",
                    pending: S,
                    disabled: f || R || !y.includes(u),
                    children: b
                      ? (0, n.jsx)(l.wn, {})
                      : (0, n.jsx)(a.A, {
                          id: "businessProfiles.verification.phoneDelivery.send",
                          defaultMessage: "Get code",
                          description: "Sends a business verification code using the selected phone delivery method",
                        }),
                  })),
                (E[7] = L),
                (E[8] = y),
                (E[9] = A),
                (E[10] = u),
                (E[11] = f),
                (E[12] = m),
                (E[13] = S),
                (E[14] = b),
                (E[15] = R),
                (E[16] = o))
              : (o = E[16]),
            E[17] !== N || E[18] !== D || E[19] !== o
              ? ((s = (0, n.jsxs)("div", { className: D, children: [N, o] })),
                (E[17] = N),
                (E[18] = D),
                (E[19] = o),
                (E[20] = s))
              : (s = E[20]),
            E[21] !== v || E[22] !== t || E[23] !== s
              ? ((d = (0, n.jsxs)("div", { className: "flex flex-col gap-4", children: [t, v, s] })),
                (E[21] = v),
                (E[22] = t),
                (E[23] = s),
                (E[24] = d))
              : (d = E[24]),
            d
          )
        },
      },
    )
  },
  CNZc(e, i, t) {
    var n = t("ABep"),
      r = t("QosV"),
      o = t("oyxz"),
      s = t("Sm6l")
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
            { variant: l, disabled: _, loading: c, cooldownSeconds: d, onResend: E } = e,
            u = void 0 === d ? 0 : d,
            I = u > 0,
            f = "inline" === l ? "underline underline-offset-4" : void 0,
            S = "inline" === l ? "inline" : "formAction",
            p = "inline" === l ? "ghostSecondary" : "secondary",
            O = _ || I
          return (
            o[0] !== u ? ((i = (0, n.jsx)(a, { seconds: u })), (o[0] = u), (o[1] = i)) : (i = o[1]),
            o[2] !== c || o[3] !== E || o[4] !== f || o[5] !== S || o[6] !== p || o[7] !== O || o[8] !== i
              ? ((t = (0, n.jsx)(s.$, {
                  className: f,
                  size: S,
                  type: "button",
                  color: p,
                  loading: c,
                  disabled: O,
                  onClick: E,
                  children: i,
                })),
                (o[2] = c),
                (o[3] = E),
                (o[4] = f),
                (o[5] = S),
                (o[6] = p),
                (o[7] = O),
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
      s = t("Sm6l"),
      a = t("RNul")
    t.d(
      i,
      {},
      {
        C: function (e) {
          let i,
            t,
            l,
            _,
            c,
            d,
            E,
            u,
            I,
            f = (0, r.c)(20)
          f[0] !== e
            ? (({ className: t, children: i, disabled: l, pending: c, ..._ } = e),
              (f[0] = e),
              (f[1] = i),
              (f[2] = t),
              (f[3] = l),
              (f[4] = _),
              (f[5] = c))
            : ((i = f[1]), (t = f[2]), (l = f[3]), (_ = f[4]), (c = f[5]))
          let S = void 0 !== c && c
          f[6] !== t ? ((d = (0, o.A)("relative", t)), (f[6] = t), (f[7] = d)) : (d = f[7])
          let p = l || S,
            O = S ? "opacity-0" : void 0
          return (
            f[8] !== i || f[9] !== O
              ? ((E = (0, n.jsx)("span", { className: O, children: i })), (f[8] = i), (f[9] = O), (f[10] = E))
              : (E = f[10]),
            f[11] !== S
              ? ((u =
                  S &&
                  (0, n.jsx)("span", {
                    className: "absolute inset-0 flex items-center justify-center",
                    "aria-hidden": !0,
                    children: (0, n.jsx)(a.y, { as: "span", className: "icon-sm" }),
                  })),
                (f[11] = S),
                (f[12] = u))
              : (u = f[12]),
            f[13] !== S || f[14] !== _ || f[15] !== d || f[16] !== p || f[17] !== E || f[18] !== u
              ? ((I = (0, n.jsxs)(s.$, { ..._, className: d, "aria-busy": S, disabled: p, children: [E, u] })),
                (f[13] = S),
                (f[14] = _),
                (f[15] = d),
                (f[16] = p),
                (f[17] = E),
                (f[18] = u),
                (f[19] = I))
              : (I = f[19]),
            I
          )
        },
      },
    )
  },
}
//# sourceMappingURL=678412.d29c999f7d.js.map
