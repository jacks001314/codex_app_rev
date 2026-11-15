;(() => {
  "use strict"
  let e, t, r, n, i, o, a, s, l, u
  var c,
    d,
    f = {}
  ;((f.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e
    return (f.d(t, { a: t }), t)
  }),
    (f.d = (e, t, r) => {
      var n = (t, r) => {
        for (var n in t) f.o(t, n) && !f.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, [r]: t[n] })
      }
      ;(n(t, "get"), n(r, "value"))
    }),
    (f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)))
  let p = require("node:path")
  function h(e) {
    let t = Object.values(e).filter((e) => "number" == typeof e)
    return Object.entries(e)
      .filter(([e, r]) => -1 === t.indexOf(+e))
      .map(([e, t]) => t)
  }
  function m(e, t = "|") {
    return e.map((e) => N(e)).join(t)
  }
  function y(e, t) {
    return "bigint" == typeof t ? t.toString() : t
  }
  class g {
    constructor(e) {
      ;((this._getter = e), (this._value = void 0))
    }
    get value() {
      let e = this._getter
      return (void 0 !== e && ((this._value = e()), (this._getter = void 0)), this._value)
    }
  }
  function v(e) {
    let t = +!!e.startsWith("^"),
      r = e.endsWith("$") ? e.length - 1 : e.length
    return e.slice(t, r)
  }
  function _(e, t, r) {
    Object.defineProperty(e, t, { value: r, writable: !0, enumerable: !0, configurable: !0 })
  }
  function b(e) {
    let t = Object.getOwnPropertyDescriptor(e, "shape")
    return t?.get ? t.get.raw : t?.value
  }
  function w(e) {
    return b(e._zod.def) ?? e._zod.def.shape
  }
  function z(e, t, r) {
    Object.defineProperty(e, t, {
      get() {
        let e = r()
        return (_(this, t, e), e)
      },
      enumerable: !0,
      configurable: !0,
    })
  }
  function k(e, t, r) {
    t in e ? _(e, t, r) : (e[t] = r)
  }
  function $(e, t, r, n) {
    let i = w(t)
    for (let o of r) {
      let r = Object.getOwnPropertyDescriptor(i, o)
      r.enumerable &&
        (r.get
          ? z(e, o, () => {
              let e = t._zod.def.shape[o]
              return n ? n(e, o) : e
            })
          : k(e, o, n ? n(r.value, o) : r.value))
    }
  }
  function O(...e) {
    let t = {}
    for (let r of e) Object.assign(t, Object.getOwnPropertyDescriptors(r))
    return Object.defineProperties({}, t)
  }
  let S = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {}
  function x(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e)
  }
  let j = new g(() => {
    if (ea.jitless || ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare"))) return !1
    try {
      return (Function(""), !0)
    } catch (e) {
      return !1
    }
  })
  function P(e) {
    if (!1 === x(e)) return !1
    let t = e.constructor
    if (void 0 === t || "function" != typeof t) return !0
    let r = t.prototype
    return !1 !== x(r) && !1 !== Object.prototype.hasOwnProperty.call(r, "isPrototypeOf")
  }
  function E(e) {
    return P(e)
      ? { ...e }
      : Array.isArray(e)
        ? [...e]
        : e instanceof Map
          ? new Map(e)
          : e instanceof Set
            ? new Set(e)
            : e
  }
  let Z = new Set(["string", "number", "symbol"])
  function A(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }
  function T(e, t, r) {
    let n = new e._zod.constr(t ?? e._zod.def)
    return ((!t || r?.parent) && (n._zod.parent = e), n)
  }
  function I(e) {
    if (!e) return {}
    if ("string" == typeof e) return { error: () => e }
    if (e?.message !== void 0) {
      if (e?.error !== void 0) throw Error("Cannot specify both `message` and `error` params")
      e.error = e.message
    }
    return (delete e.message, "string" == typeof e.error) ? { ...e, error: () => e.error } : e
  }
  function N(e) {
    return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`
  }
  let F = {
      safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
      int32: [-0x80000000, 0x7fffffff],
      uint32: [0, 0xffffffff],
      float32: [-34028234663852886e22, 34028234663852886e22],
      float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
    },
    D = {
      int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
      uint64: [BigInt(0), BigInt("18446744073709551615")],
    }
  function R(e, t) {
    let r = w(e),
      n = []
    for (let e of Reflect.ownKeys(t)) {
      if (!Object.getOwnPropertyDescriptor(r, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`)
      t[e] && n.push(e)
    }
    return n
  }
  function J(e, t) {
    let r = {}
    $(r, e, Reflect.ownKeys(w(e)))
    for (let e of Reflect.ownKeys(t)) {
      let n = Object.getOwnPropertyDescriptor(t, e)
      n.enumerable && (n.get ? z(r, e, () => t[e]) : k(r, e, n.value))
    }
    return r
  }
  function C(e, t, r, n = "partial") {
    let i = t._zod.def.checks
    if (i && i.length > 0) throw Error(`.${n}() cannot be used on object schemas containing refinements`)
    let o = r ? new Set(R(t, r)) : void 0,
      a = {}
    return (
      $(a, t, Reflect.ownKeys(w(t)), e && ((t, r) => (o && !o.has(r) ? t : new e({ type: "optional", innerType: t })))),
      T(t, O(t._zod.def, { shape: a, checks: [] }))
    )
  }
  function U(e, t = 0) {
    if (!0 === e.aborted) return !0
    for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue !== !0) return !0
    return !1
  }
  function M(e, t) {
    return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t))
  }
  function L(e) {
    return "string" == typeof e ? e : e?.message
  }
  function W(e) {
    let t = []
    for (let r of e ?? []) {
      let e = r._zod.def
      if (!/_(length|size)$|_equals$/.test(e.check)) break
      let n = e.maximum ?? e.length ?? e.size
      n >= 0 && t.push([n, r])
    }
    return t
  }
  function K(e, t, r) {
    var n
    for (let i = t; i < e.length; i++) (n = e[i]).schema ?? (n.schema = r)
  }
  function V(e, t, r) {
    let n = e.inst?._zod?.traits
    n?.has("$ZodType") && (n.has("$ZodCheck") ? (e.schema ?? (e.schema = e.inst)) : (e.schema = e.inst))
    let i = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
      o = e.message
        ? e.message
        : (L(e.inst?._zod.def?.error?.(e)) ??
          L(i?.(e)) ??
          L(t?.error?.(e)) ??
          L(r.customError?.(e)) ??
          L(r.localeError?.(e)) ??
          "Invalid input"),
      a = {}
    for (let t of Object.keys(e))
      "inst" !== t && "schema" !== t && "continue" !== t && "input" !== t && "__proto__" !== t && (a[t] = e[t])
    return (a.path ?? (a.path = []), (a.message = o), t?.reportInput && (a.input = e.input), a)
  }
  let B = /[\uD800-\uDBFF]/
  function q(e) {
    let t = e.length
    if (!B.test(e)) return t
    let r = t
    for (let n = 0; n < t - 1; n++)
      (64512 & e.charCodeAt(n)) == 55296 && (64512 & e.charCodeAt(n + 1)) == 56320 && (r--, n++)
    return r
  }
  function X(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown"
  }
  function G(...e) {
    let [t, r, n] = e
    return "string" == typeof t ? { message: t, code: "custom", input: r, inst: n } : { ...t }
  }
  function H(e, t, r, n = !0) {
    return (Object.defineProperty(e, t, { configurable: !0, writable: !0, enumerable: n, value: r }), r)
  }
  let Y = !1,
    Q = {
      configurable: !0,
      get() {
        Y = !0
      },
    }
  function ee(t, r, n) {
    let i = Object.getPrototypeOf(t._zod)
    if (r in i && e !== t._zod) {
      e = void 0
      return
    }
    ;((e = t._zod),
      Object.defineProperty(i, r, {
        configurable: !0,
        get() {
          Object.defineProperty(this, r, Q)
          let e = Y
          Y = !1
          try {
            let t = n(this)
            return (
              Y ? delete this[r] : Object.defineProperty(this, r, { configurable: !0, writable: !0, value: t }),
              (Y = Y || e),
              t
            )
          } catch (t) {
            throw (delete this[r], (Y = Y || e), t)
          }
        },
        set(e) {
          Object.defineProperty(this, r, { configurable: !0, writable: !0, value: e })
        },
      }))
  }
  let et = { value: void 0, enumerable: !1 },
    er = "captureStackTrace" in Error ? Error : null
  function en(e, t, r, n) {
    function i(e) {
      ;((this.def = e), (this.constr = u), (this.traits = new Set()))
    }
    i.prototype = {}
    let o = r && new WeakSet()
    function a(n, a) {
      if (n._zod) {
        if (n._zod.traits.has(e)) return
      } else {
        et.value = new i(a)
        try {
          Object.defineProperty(n, "_zod", et)
        } finally {
          et.value = void 0
        }
      }
      if ((n._zod.traits.add(e), t(n, a), o)) {
        let e = Object.getPrototypeOf(n),
          t = n._zod.constr.prototype,
          i = e
        for (; i && i !== t;) i = Object.getPrototypeOf(i)
        let a = i ?? e
        if (!o.has(a)) {
          o.add(a)
          for (let e in r) {
            let t = Object.getOwnPropertyDescriptor(r, e)
            t.get
              ? Object.defineProperty(a, e, { ...t, enumerable: !1 })
              : (function (e, t, r) {
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get() {
                      return this == null ? r : H(this, t, r.bind(this))
                    },
                    set(e) {
                      H(this, t, e)
                    },
                  })
                })(a, e, t.value)
          }
        }
      }
      let s = u.prototype
      for (let e in s) Object.prototype.hasOwnProperty.call(s, e) && (e in n || (n[e] = s[e].bind(n)))
    }
    let s = n?.Parent ?? Object
    class l extends s {}
    function u(e) {
      let t = n?.Parent
        ? (function (e) {
            let t = er
            if (t) {
              let r = t.stackTraceLimit
              if ("number" == typeof r) {
                try {
                  t.stackTraceLimit = 0
                } catch {
                  return ((er = null), new e())
                }
                try {
                  return new e()
                } finally {
                  t.stackTraceLimit = r
                }
              }
            }
            return new e()
          })(l)
        : this
      a(t, e)
      let r = t._zod.deferred
      if (r) {
        for (let e of r) e()
        t._zod.deferred = void 0
      }
      let i = globalThis.__zod_globalConfig?.postProcessor
      return (i && i(t), t)
    }
    return (
      Object.defineProperty(l, "name", { value: e }),
      Object.defineProperty(u, "init", { value: a }),
      Object.defineProperty(u, Symbol.hasInstance, {
        value: (t) => (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
      }),
      Object.defineProperty(u, "name", { value: e }),
      u
    )
  }
  class ei extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
    }
  }
  class eo extends Error {
    constructor(e) {
      ;(super(`Encountered unidirectional transform during encode: ${e}`), (this.name = "ZodEncodeError"))
    }
  }
  ;(c = globalThis).__zod_globalConfig ?? (c.__zod_globalConfig = {})
  let ea = globalThis.__zod_globalConfig
  function es(e) {
    return (e && Object.assign(ea, e), ea)
  }
  class el extends Error {
    constructor() {
      ;(super("Cannot parse a reference cycle that closes through a transform"), (this.name = "ZodCyclicError"))
    }
  }
  let eu = "~memo",
    ec = []
  function ed(e) {
    return null !== e && "object" == typeof e
  }
  function ef(e) {
    return e.map((e) => (e.path ? { ...e, path: e.path.slice() } : { ...e }))
  }
  let ep = new WeakMap(),
    eh = [],
    em = {
      alloc(e, r, n) {
        let i = t
        if (!i) return n
        t = void 0
        let o = { value: n, issues: null }
        return (i.set(r.value, o), eh.push(o), n)
      },
      guard(e) {
        var t
        ;((t = e._zod).deferred ?? (t.deferred = []),
          e._zod.deferred.push(() => {
            let t = e._zod.parse,
              r = (e, r) => {
                var n, i
                let o
                if (
                  "backward" !== r.direction &&
                  ((n = r), (i = e.value), void 0 !== (o = n[eu]?.backEdges) && ed(i) && o.has(i))
                )
                  throw new el()
                return t(e, r)
              }
            ;((e._zod.parse = r), e._zod.run === t && (e._zod.run = r))
          }))
      },
      attach(e) {
        var r
        let n,
          i,
          o,
          a = !1
        ;((r = e._zod).deferred ?? (r.deferred = []),
          e._zod.deferred.push(() => {
            let r = e._zod.parse,
              s = (l, u) => {
                let c
                if (void 0 === n) {
                  let t = (function e(t, r, n) {
                    var i, o
                    let a = ep.get(t)
                    if (void 0 !== a) return 2 * !!a
                    if (r.has(t)) return 2
                    r.add(t)
                    let s = 0,
                      l = (t) => {
                        if (2 !== s && t?._zod) {
                          let i = e(t, r, n)
                          i > s && (s = i)
                        }
                      },
                      u = (e) => {
                        e > s && (s = e)
                      },
                      c = t._zod.def
                    switch (c.type) {
                      case "object": {
                        let t = b(c)
                        ;(u(
                          t
                            ? ((t, i) => {
                                let o = 0
                                for (let a of Reflect.ownKeys(t)) {
                                  let s = Object.getOwnPropertyDescriptor(t, a)
                                  if (i && !s.enumerable) continue
                                  let l = s.get ? 1 : s.value?._zod ? e(s.value, r, n) : 0
                                  l > o && (o = l)
                                }
                                return o
                              })(t, !0)
                            : 1,
                        ),
                          l(c.catchall))
                        break
                      }
                      case "array":
                        l(c.element)
                        break
                      case "tuple":
                        for (let e of c.items) l(e)
                        l(c.rest)
                        break
                      case "record":
                      case "map":
                        ;(l(c.keyType), l(c.valueType))
                        break
                      case "set":
                        l(c.valueType)
                        break
                      case "union":
                        for (let e of c.options) l(e)
                        break
                      case "intersection":
                        ;(l(c.left), l(c.right))
                        break
                      case "optional":
                      case "nullable":
                      case "default":
                      case "prefault":
                      case "catch":
                      case "readonly":
                      case "nonoptional":
                      case "promise":
                      case "success":
                        l(c.innerType)
                        break
                      case "pipe":
                        ;(l(c.in), l(c.out))
                        break
                      case "function":
                        ;(l(c.input), l(c.output))
                        break
                      case "lazy": {
                        let i = c._cachedInner ?? (n ? t._zod.innerType : void 0)
                        u(i ? e(i, r, !1) : 1)
                        break
                      }
                      case "template_literal":
                      case "string":
                      case "number":
                      case "int":
                      case "boolean":
                      case "bigint":
                      case "symbol":
                      case "undefined":
                      case "null":
                      case "void":
                      case "never":
                      case "any":
                      case "unknown":
                      case "date":
                      case "nan":
                      case "enum":
                      case "literal":
                      case "file":
                      case "transform":
                      case "custom":
                        break
                      default:
                        for (let e in c) {
                          let t = Object.getOwnPropertyDescriptor(c, e)
                          if (!t || t.get) continue
                          let r = t.value
                          if (r && "object" == typeof r) {
                            if (r._zod) l(r)
                            else if (Array.isArray(r)) for (let e of r) l(e)
                          }
                        }
                    }
                    return (r.delete(t), (i = t), 1 !== (o = s) && ep.set(i, 2 === o), o)
                  })(e, new Set(), !1)
                  if (0 === t) return ((e._zod.parse = r), e._zod.run === s && (e._zod.run = r), r(l, u))
                  2 === t || a ? (n = !0) : (a = !0)
                }
                let d = l.value
                if (!ed(d)) return r(l, u)
                let f = u[eu]
                if ((f || ((f = { buckets: new WeakMap(), backEdges: void 0 }), (u[eu] = f)), i === u)) c = o
                else {
                  var p
                  let t
                  ;((t = (p = f).buckets.get(e)) || ((t = new WeakMap()), p.buckets.set(e, t)),
                    (c = t),
                    (i = u),
                    (o = c))
                }
                let h = c.get(d)
                if (h)
                  return (
                    (l.value = h.value),
                    h.issues
                      ? h.issues.length && l.issues.push(...ef(h.issues))
                      : ((l.memo = !0), f.backEdges ?? (f.backEdges = new WeakSet()), f.backEdges.add(h.value)),
                    l
                  )
                t = c
                let m = eh.length,
                  y = r(l, u)
                t = void 0
                let g = eh.length > m ? eh.pop() : void 0
                return y instanceof Promise
                  ? y.then((e) => (g && (g.issues = e.issues.length ? ef(e.issues) : ec), e))
                  : (g && (g.issues = y.issues.length ? ef(y.issues) : ec), y)
              }
            ;((e._zod.parse = s), e._zod.run === r && (e._zod.run = s))
          }))
      },
    },
    ey = /^[cC][0-9a-z]{6,}$/,
    eg = /^[0-9a-z]+$/,
    ev = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
    e_ = /^[0-9a-vA-V]{20}$/,
    eb = /^[A-Za-z0-9]{27}$/,
    ew = /^[a-zA-Z0-9_-]{21}$/,
    ez = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    ek = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    e$ = (e) =>
      e
        ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
        : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    eO = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    eS =
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ex =
      /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    ej =
      /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    eP =
      /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    eE = /^https?$/,
    eZ = /^\+[1-9]\d{6,14}$/,
    eA =
      "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    eT = RegExp(`^${eA}$`)
  function eI(e) {
    let t = "(?:[01]\\d|2[0-3]):[0-5]\\d"
    return "number" == typeof e.precision
      ? -1 === e.precision
        ? `${t}`
        : 0 === e.precision
          ? `${t}:[0-5]\\d`
          : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
      : e.seconds
        ? `${t}:[0-5]\\d(?:\\.\\d+)?`
        : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`
  }
  let eN = /^[\s\S]{0,}$/,
    eF = /^[^A-Z]*$/,
    eD = /^[^a-z]*$/,
    eR = en("$ZodCheck", (e, t) => {
      var r
      ;(e._zod ?? (e._zod = {}), (e._zod.def = t), (r = e._zod).onattach ?? (r.onattach = []))
    }),
    eJ = (e) => {
      let t = e.value
      return null != t && void 0 !== t.length
    },
    eC = en("$ZodCheckMaxLength", (e, t) => {
      var r
      ;(eR.init(e, t),
        (r = e._zod.def).when ?? (r.when = eJ),
        (e._zod.check = (r) => {
          let n = r.value,
            i = n.length
          if (("string" == typeof n && i > t.maximum ? q(n) : i) <= t.maximum) return
          let o = X(n)
          r.issues.push({
            origin: o,
            code: "too_big",
            maximum: t.maximum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !t.abort,
          })
        }))
    }),
    eU = en("$ZodCheckMinLength", (e, t) => {
      var r
      ;(eR.init(e, t),
        (r = e._zod.def).when ?? (r.when = eJ),
        (e._zod.check = (r) => {
          let n = r.value,
            i = n.length
          if (("string" == typeof n && i >= t.minimum && i < 2 * t.minimum ? q(n) : i) >= t.minimum) return
          let o = X(n)
          r.issues.push({
            origin: o,
            code: "too_small",
            minimum: t.minimum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !t.abort,
          })
        }))
    }),
    eM = en("$ZodCheckLengthEquals", (e, t) => {
      var r
      ;(eR.init(e, t),
        (r = e._zod.def).when ?? (r.when = eJ),
        (e._zod.check = (r) => {
          let n = r.value,
            i = n.length,
            o = "string" == typeof n && i >= t.length && i <= 2 * t.length ? q(n) : i
          if (o === t.length) return
          let a = X(n),
            s = o > t.length
          r.issues.push({
            origin: a,
            ...(s ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
            inclusive: !0,
            exact: !0,
            input: r.value,
            inst: e,
            continue: !t.abort,
          })
        }))
    }),
    eL = en("$ZodCheckStringFormat", (e, t) => {
      var r, n
      ;(eR.init(e, t),
        t.pattern
          ? ((r = e._zod).check ??
            (r.check = (r) => {
              ;((t.pattern.lastIndex = 0),
                t.pattern.test(r.value) ||
                  r.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: t.format,
                    input: r.value,
                    ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                    inst: e,
                    continue: !t.abort,
                  }))
            }))
          : ((n = e._zod).check ?? (n.check = () => {})))
    }),
    eW = en("$ZodCheckRegex", (e, t) => {
      ;(eL.init(e, t),
        (e._zod.check = (r) => {
          ;((t.pattern.lastIndex = 0),
            t.pattern.test(r.value) ||
              r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "regex",
                input: r.value,
                pattern: t.pattern.toString(),
                inst: e,
                continue: !t.abort,
              }))
        }))
    }),
    eK = en("$ZodCheckLowerCase", (e, t) => {
      ;(t.pattern ?? (t.pattern = eF), eL.init(e, t))
    }),
    eV = en("$ZodCheckUpperCase", (e, t) => {
      ;(t.pattern ?? (t.pattern = eD), eL.init(e, t))
    }),
    eB = en("$ZodCheckIncludes", (e, t) => {
      eR.init(e, t)
      let r = A(t.includes),
        n = new RegExp("number" == typeof t.position ? `^.{${t.position},}${r}` : r)
      ;((t.pattern = n),
        (e._zod.check = (r) => {
          r.value.includes(t.includes, t.position) ||
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "includes",
              includes: t.includes,
              input: r.value,
              inst: e,
              continue: !t.abort,
            })
        }))
    }),
    eq = en("$ZodCheckStartsWith", (e, t) => {
      eR.init(e, t)
      let r = RegExp(`^${A(t.prefix)}.*`)
      ;(t.pattern ?? (t.pattern = r),
        (e._zod.check = (r) => {
          r.value.startsWith(t.prefix) ||
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "starts_with",
              prefix: t.prefix,
              input: r.value,
              inst: e,
              continue: !t.abort,
            })
        }))
    }),
    eX = en("$ZodCheckEndsWith", (e, t) => {
      eR.init(e, t)
      let r = RegExp(`.*${A(t.suffix)}$`)
      ;(t.pattern ?? (t.pattern = r),
        (e._zod.check = (r) => {
          r.value.endsWith(t.suffix) ||
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "ends_with",
              suffix: t.suffix,
              input: r.value,
              inst: e,
              continue: !t.abort,
            })
        }))
    }),
    eG = en("$ZodCheckOverwrite", (e, t) => {
      ;(eR.init(e, t),
        (e._zod.check = (e) => {
          e.value = t.tx(e.value)
        }))
    })
  class eH {
    constructor(e = [], t = {}) {
      ;((this.content = []), (this.indent = 0), (this.args = e), (this.closed = t))
    }
    indented(e) {
      this.indent += 1
      try {
        e(this)
      } finally {
        this.indent -= 1
      }
    }
    write(e) {
      if ("function" == typeof e) {
        ;(e(this, { execution: "sync" }), e(this, { execution: "async" }))
        return
      }
      let t = e.split("\n").filter((e) => e),
        r = Math.min(...t.map((e) => e.length - e.trimStart().length))
      for (let e of t.map((e) => e.slice(r)).map((e) => " ".repeat(2 * this.indent) + e)) this.content.push(e)
    }
    compile() {
      let e = Function,
        t = this?.content ?? [""]
      return new e(
        ...Object.keys(this.closed),
        `return function (${this.args.join(", ")}) {
${t.join("\n")}
};`,
      )(...Object.values(this.closed))
    }
  }
  let eY = { major: 4, minor: 6, patch: 7 },
    eQ = en(
      "$ZodType",
      (e, t) => {
        var r
        ;(e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = eY))
        let n = e._zod.def.checks,
          i = e._zod.traits.has("$ZodCheck") ? [e, ...(n ?? [])] : n?.length ? [...n] : []
        for (let t of i) for (let r of t._zod.onattach) r(e)
        if (0 === i.length)
          ((r = e._zod).deferred ?? (r.deferred = []),
            e._zod.deferred?.push(() => {
              e._zod.run = e._zod.parse
            }))
        else {
          let t = (t, r, n) => {
              let i
              if (t.memo) return t
              let o = U(t)
              for (let a of r) {
                if (a._zod.def.when) {
                  if (
                    (function (e, t = 0) {
                      if (!0 === e.aborted) return !0
                      for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue === !1) return !0
                      return !1
                    })(t) ||
                    !a._zod.def.when(t)
                  )
                    continue
                } else if (o) continue
                let r = t.issues.length,
                  s = a._zod.check(t)
                if (s instanceof Promise && n?.async === !1) throw new ei()
                if (i || s instanceof Promise)
                  i = (i ?? Promise.resolve()).then(async () => {
                    ;(await s, t.issues.length !== r && (K(t.issues, r, e), o || (o = U(t, r))))
                  })
                else {
                  if (t.issues.length === r) continue
                  ;(K(t.issues, r, e), o || (o = U(t, r)))
                }
              }
              return i ? i.then(() => t) : t
            },
            r = (r, n, o) => {
              if (U(r)) return ((r.aborted = !0), r)
              let a = t(n, i, o)
              if (a instanceof Promise) {
                if (!1 === o.async) throw new ei()
                return a.then((t) => e._zod.parse(t, o))
              }
              return e._zod.parse(a, o)
            }
          e._zod.run = (n, o) => {
            if (o.skipChecks) return e._zod.parse(n, o)
            if ("backward" === o.direction) {
              let t = e._zod.parse({ value: n.value, issues: [] }, { ...o, skipChecks: !0 })
              return t instanceof Promise ? t.then((e) => r(e, n, o)) : r(t, n, o)
            }
            let a = e._zod.parse(n, o)
            if (a instanceof Promise) {
              if (!1 === o.async) throw new ei()
              return a.then((e) => t(e, i, o))
            }
            return t(a, i, o)
          }
        }
      },
      {
        get "~standard"() {
          return H(this, "~standard", e1(this), !1)
        },
        set "~standard"(e) {
          H(this, "~standard", e)
        },
      },
    ),
    e0 = (e, t) => (e.issues.length ? { issues: e.issues.map((e) => V(e, t, es())) } : { value: e.value })
  function e1(e) {
    return {
      validate: (t) => {
        let r = { async: !1 }
        try {
          let n = e._zod.run({ value: t, issues: [] }, r)
          if (!(n instanceof Promise)) return e0(n, r)
        } catch (e) {}
        return (async function (e, t) {
          let r = { async: !0 }
          return e0(await e._zod.run({ value: t, issues: [] }, r), r)
        })(e, t)
      },
      vendor: "zod",
      version: 1,
    }
  }
  let e4 = en("$ZodString", (e, t) => {
      ;(eQ.init(e, t),
        (e._zod.pattern = t.pattern ?? eN),
        (e._zod.parse = (r, n) => {
          if (t.coerce)
            try {
              r.value = String(r.value)
            } catch (e) {}
          return (
            "string" == typeof r.value ||
              r.issues.push({ expected: "string", code: "invalid_type", input: r.value, inst: e }),
            r
          )
        }))
    }),
    e9 = en("$ZodStringFormat", (e, t) => {
      ;(eL.init(e, t), e4.init(e, t))
    }),
    e2 = en("$ZodGUID", (e, t) => {
      ;(t.pattern ?? (t.pattern = ek), e9.init(e, t))
    }),
    e6 = en("$ZodUUID", (e, t) => {
      if (t.version) {
        let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version]
        if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`)
        t.pattern ?? (t.pattern = e$(e))
      } else t.pattern ?? (t.pattern = e$())
      e9.init(e, t)
    }),
    e3 = en("$ZodEmail", (e, t) => {
      ;(t.pattern ?? (t.pattern = eO), e9.init(e, t))
    })
  function e5(e) {
    try {
      if ("u" > typeof URL && "function" == typeof URL.canParse) return URL.canParse(e)
      return (new URL(e), !0)
    } catch {
      return !1
    }
  }
  let e8 = /[\t\n\r]/g
  function e7(e) {
    return e.replace(e8, "")
  }
  let te = en("$ZodURL", (e, t) => {
      ;(e9.init(e, t),
        (e._zod.check = (r) => {
          try {
            var n, i
            let o = r.value.trim(),
              a =
                "normalize" in t || "hostname" in t || "protocol" in t
                  ? (function (e, t) {
                      if (!t.normalize && t.protocol?.source === eE.source && !/^https?:\/\//i.test(e)) return 1
                      try {
                        if ("u" > typeof URL) {
                          let t = URL
                          if ("function" == typeof t.parse) return t.parse(e) ?? 2
                        }
                        return new URL(e)
                      } catch {
                        return 2
                      }
                    })(o, t)
                  : e5(o) || 2
            if (1 === a)
              return void r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid URL format",
                input: r.value,
                inst: e,
                continue: !t.abort,
              })
            if (2 === a)
              return void r.issues.push({
                code: "invalid_format",
                format: "url",
                input: r.value,
                inst: e,
                continue: !t.abort,
              })
            if (!0 === a) {
              r.value = e7(o)
              return
            }
            ;(t.hostname &&
              (((n = t.hostname).lastIndex = 0), !n.test(a.hostname)) &&
              r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: t.hostname.source,
                input: r.value,
                inst: e,
                continue: !t.abort,
              }),
              t.protocol &&
                (((i = t.protocol).lastIndex = 0),
                !i.test(a.protocol.endsWith(":") ? a.protocol.slice(0, -1) : a.protocol)) &&
                r.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: t.protocol.source,
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                }),
              (r.value = t.normalize ? a.href : e7(o)))
            return
          } catch (n) {
            r.issues.push({ code: "invalid_format", format: "url", input: r.value, inst: e, continue: !t.abort })
          }
        }))
    }),
    tt = en("$ZodEmoji", (e, t) => {
      ;(t.pattern ??
        (t.pattern = RegExp(
          "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$",
          "u",
        )),
        e9.init(e, t))
    }),
    tr = en("$ZodNanoID", (e, t) => {
      var r
      if (void 0 !== t.length && (!Number.isInteger(t.length) || t.length < 1))
        throw Error(`Invalid nanoid length: ${t.length}`)
      ;(t.pattern ?? (t.pattern = void 0 === t.length ? ew : ((r = t.length), RegExp(`^[a-zA-Z0-9_-]{${r}}$`))),
        e9.init(e, t))
    }),
    tn = en("$ZodCUID", (e, t) => {
      ;(t.pattern ?? (t.pattern = ey), e9.init(e, t))
    }),
    ti = en("$ZodCUID2", (e, t) => {
      ;(t.pattern ?? (t.pattern = eg), e9.init(e, t))
    }),
    to = en("$ZodULID", (e, t) => {
      ;(t.pattern ?? (t.pattern = ev), e9.init(e, t))
    }),
    ta = en("$ZodXID", (e, t) => {
      ;(t.pattern ?? (t.pattern = e_), e9.init(e, t))
    }),
    ts = en("$ZodKSUID", (e, t) => {
      ;(t.pattern ?? (t.pattern = eb), e9.init(e, t))
    }),
    tl = en("$ZodISODateTime", (e, t) => {
      let r, n, i
      ;(t.pattern ??
        ((r = ["Z"]),
        t.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"),
        (n = `${eI({ precision: t.precision, seconds: !0 })}(?:${r.join("|")})`),
        (i = t.local ? `${n}|${eI({ precision: t.precision })}` : n),
        (t.pattern = RegExp(`^${eA}T(?:${i})$`))),
        e9.init(e, t))
    }),
    tu = en("$ZodISODate", (e, t) => {
      ;(t.pattern ?? (t.pattern = eT), e9.init(e, t))
    }),
    tc = en("$ZodISOTime", (e, t) => {
      ;(t.pattern ?? (t.pattern = RegExp(`^${eI(t)}$`)), e9.init(e, t))
    }),
    td = en("$ZodISODuration", (e, t) => {
      ;(t.pattern ?? (t.pattern = ez), e9.init(e, t))
    }),
    tf = en("$ZodIPv4", (e, t) => {
      ;(t.pattern ?? (t.pattern = eS), e9.init(e, t))
    }),
    tp = /^[0-9a-fA-F:.]+$/
  function th(e) {
    return !!tp.test(e) && e5(`http://[${e}]`)
  }
  let tm = en("$ZodIPv6", (e, t) => {
      ;(t.pattern ?? (t.pattern = ex),
        e9.init(e, t),
        (e._zod.check = (r) => {
          th(r.value) ||
            r.issues.push({ code: "invalid_format", format: "ipv6", input: r.value, inst: e, continue: !t.abort })
        }))
    }),
    ty = en("$ZodCIDRv4", (e, t) => {
      ;(t.pattern ?? (t.pattern = ej), e9.init(e, t))
    }),
    tg = en("$ZodCIDRv6", (e, t) => {
      ;(t.pattern ?? (t.pattern = eP),
        e9.init(e, t),
        (e._zod.check = (r) => {
          !(function (e) {
            let t = e.split("/")
            if (2 !== t.length) return !1
            let [r, n] = t
            if (!n) return !1
            let i = Number(n)
            return `${i}` === n && !(i < 0) && !(i > 128) && th(r)
          })(r.value) &&
            r.issues.push({ code: "invalid_format", format: "cidrv6", input: r.value, inst: e, continue: !t.abort })
        }))
    })
  function tv(e) {
    if ("" === e) return !0
    if (/\s/.test(e) || e.length % 4 != 0) return !1
    try {
      return (atob(e), !0)
    } catch {
      return !1
    }
  }
  let t_ = /^[0-9a-zA-Z+/]*={0,2}$/,
    tb = en("$ZodBase64", (e, t) => {
      ;(t.pattern ?? (t.pattern = t_),
        e9.init(e, t),
        (e._zod.check = (r) => {
          tv(r.value) ||
            r.issues.push({ code: "invalid_format", format: "base64", input: r.value, inst: e, continue: !t.abort })
        }))
    }),
    tw = /^[A-Za-z0-9_-]*$/,
    tz = en("$ZodBase64URL", (e, t) => {
      ;(t.pattern ?? (t.pattern = tw),
        e9.init(e, t),
        (e._zod.check = (r) => {
          !(function (e) {
            if (!tw.test(e)) return !1
            let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"))
            return tv(t.padEnd(4 * Math.ceil(t.length / 4), "="))
          })(r.value) &&
            r.issues.push({ code: "invalid_format", format: "base64url", input: r.value, inst: e, continue: !t.abort })
        }))
    }),
    tk = en("$ZodE164", (e, t) => {
      ;(t.pattern ?? (t.pattern = eZ), e9.init(e, t))
    }),
    t$ = en("$ZodJWT", (e, t) => {
      ;(e9.init(e, t),
        (e._zod.check = (r) => {
          !(function (e, t = null) {
            try {
              let r = e.split(".")
              if (3 !== r.length) return !1
              let [n] = r
              if (!n) return !1
              let i = JSON.parse(atob(n))
              if (("typ" in i && i?.typ !== "JWT") || !i.alg || (t && (!("alg" in i) || i.alg !== t))) return !1
              return !0
            } catch {
              return !1
            }
          })(r.value, t.alg) &&
            r.issues.push({ code: "invalid_format", format: "jwt", input: r.value, inst: e, continue: !t.abort })
        }))
    }),
    tO = en("$ZodUnknown", (e, t) => {
      ;(eQ.init(e, t), (e._zod.parse = (e) => e))
    }),
    tS = en("$ZodNever", (e, t) => {
      ;(eQ.init(e, t),
        (e._zod.parse = (t, r) => (
          t.issues.push({ expected: "never", code: "invalid_type", input: t.value, inst: e }),
          t
        )))
    }),
    tx = (e) => (Array.isArray(e) ? e.length : -1)
  function tj(e, t, r) {
    ;(e.issues.length && t.issues.push(...M(r, e.issues)), (t.value[r] = e.value))
  }
  let tP = en("$ZodArray", (e, t) => {
    eQ.init(e, t)
    let r = ea.memoizer
    ;(r?.attach(e),
      (e._zod.parse = (n, i) => {
        let o = n.value
        if (!Array.isArray(o)) return (n.issues.push({ expected: "array", code: "invalid_type", input: o, inst: e }), n)
        n.value = r ? r.alloc(e, n, Array(o.length), i) : Array(o.length)
        let a = [],
          s = i?.abortEarly
        for (let e = 0; e < o.length; e++) {
          let r = o[e],
            l = t.element._zod.run({ value: r, issues: [] }, i)
          if (l instanceof Promise) a.push(l.then((t) => tj(t, n, e)))
          else if ((tj(l, n, e), s && 0 !== l.issues.length && U(l))) break
        }
        return a.length ? Promise.all(a).then(() => n) : n
      }),
      (function (e, t) {
        let r = W(e._zod.def.checks)
        if (!r.length) return
        let n = Math.min(...r.map((e) => e[0])),
          i = e._zod.parse
        e._zod.parse = (r, o) => {
          let a = t(r.value)
          if (a > n && !o?.skipChecks && o?.direction !== "backward") {
            for (let [t, n] of W(e._zod.def.checks))
              if (a > t && n._zod.def.when(r)) {
                let t = r.issues.length
                return (n._zod.check(r), (r.issues[t].continue = !1), K(r.issues, t, e), r)
              }
          }
          return i(r, o)
        }
      })(e, tx))
  })
  function tE(e, t, r, n, i, o) {
    let a = r in n,
      s = "optional" === o
    if (a || !s || "optional" !== i) {
      if (e.issues.length) {
        if (void 0 !== i && s && !a) return
        t.issues.push(...M(r, e.issues))
      }
      if (!a && void 0 === i) {
        e.issues.length || t.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [r] })
        return
      }
      void 0 === e.value ? (a || ("defaulted" === i && !s)) && (t.value[r] = void 0) : (t.value[r] = e.value)
    }
  }
  let tZ = []
  function tA(e) {
    var t
    let r = Object.keys(e.shape),
      n = Object.getOwnPropertySymbols(e.shape),
      i = n.length ? n : tZ,
      o = i.length ? [...r, ...i] : r
    for (let t of o)
      if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
        throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`)
    let a = Object.keys((t = e.shape)).filter((e) => void 0 !== t[e]._zod.optin && "optional" === t[e]._zod.optout)
    return { ...e, allKeys: o, symbolKeys: i, keySet: new Set(r), numKeys: r.length, optionalKeys: new Set(a) }
  }
  function tT(e, t, r, n, i, o, a) {
    let s = [],
      l = i.keySet,
      u = i.catchall._zod,
      c = u.def.type,
      d = u.optin,
      f = u.optout,
      p = 0
    for (let i in t) {
      if (a && r.issues.length !== p) {
        if (U(r, p)) break
        p = r.issues.length
      }
      if (l.has(i)) continue
      if ("__proto__" === i) {
        "never" === c && s.push(i)
        continue
      }
      if ("never" === c) {
        s.push(i)
        continue
      }
      let o = u.run({ value: t[i], issues: [] }, n)
      o instanceof Promise ? e.push(o.then((e) => tE(e, r, i, t, d, f))) : tE(o, r, i, t, d, f)
    }
    return (s.length && r.issues.push({ code: "unrecognized_keys", keys: s, input: t, inst: o, continue: !0 }),
    e.length)
      ? Promise.all(e).then(() => r)
      : r
  }
  let tI = en("$ZodObject", (e, t) => {
      let r
      eQ.init(e, t)
      let n = Object.getOwnPropertyDescriptor(t, "shape"),
        i = n?.get ? n.get.raw : (t.shape ?? {})
      if (i) {
        let e = () => {
          let r = { ...i }
          return (Object.defineProperty(t, "shape", { value: r }), (e.raw = r), r)
        }
        ;((e.raw = i), Object.defineProperty(t, "shape", { get: e }))
      }
      let o = new g(() => tA(t))
      ee(e, "propValues", (e) => {
        let t = e.def.shape,
          r = {}
        for (let e in t) {
          let n = t[e]._zod
          if (n.values) {
            for (let t of (Object.prototype.hasOwnProperty.call(r, e) || _(r, e, new Set()), n.values)) r[e].add(t)
            void 0 !== n.optin && r[e].add(void 0)
          }
        }
        return r
      })
      let a = t.catchall,
        s = ea.memoizer
      ;(s?.attach(e),
        (e._zod.parse = (t, n) => {
          r ?? (r = o.value)
          let i = t.value
          if (!x(i)) return (t.issues.push({ expected: "object", code: "invalid_type", input: i, inst: e }), t)
          t.value = s ? s.alloc(e, t, {}, n) : {}
          let l = [],
            u = r.shape,
            c = n?.abortEarly,
            d = t.issues.length
          for (let e of r.allKeys) {
            if (c && t.issues.length !== d) {
              if (U(t, d)) break
              d = t.issues.length
            }
            if ("__proto__" === e) continue
            let r = u[e],
              o = r._zod.optin,
              a = r._zod.optout,
              s = r._zod.run({ value: i[e], issues: [] }, n)
            s instanceof Promise ? l.push(s.then((r) => tE(r, t, e, i, o, a))) : tE(s, t, e, i, o, a)
          }
          return a ? tT(l, i, t, n, o.value, e, !0 === c) : l.length ? Promise.all(l).then(() => t) : t
        }))
    }),
    tN = en("$ZodObjectJIT", (e, t) => {
      let r, n
      tI.init(e, t)
      let i = e._zod.parse,
        o = new g(() => tA(t)),
        a = ea.memoizer,
        s = !ea.jitless,
        l = s && j.value,
        u = t.catchall
      e._zod.parse = (c, d) => {
        n ?? (n = o.value)
        let f = c.value
        return x(f)
          ? s && l && d?.async === !1 && !0 !== d.jitless
            ? (r ||
                (r = ((t) => {
                  let r = o.value,
                    n = r.symbolKeys,
                    i = new eH(["payload", "ctx"], { shape: t, inst: e, memo: a, syms: n }),
                    s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,
                    l = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`
                  i.write("const input = payload.value;")
                  let u = Object.create(null),
                    c = 0
                  for (let e of r.allKeys) u[e] = `key_${c++}`
                  for (let e of (i.write(
                    a ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};",
                  ),
                  r.allKeys)) {
                    if ("__proto__" === e) continue
                    let r = u[e],
                      o = "symbol" == typeof e ? `syms[${n.indexOf(e)}]` : JSON.stringify(e),
                      a = `${o} in input`,
                      c = t[e],
                      d = c?._zod?.optin,
                      f = void 0 !== d,
                      p = c?._zod?.optout === "optional"
                    if ((i.write(`const ${r} = ${s(o)};`), f && p)) {
                      let e = "optional" === d ? `${r}_present` : `${r}.value !== undefined || ${r}_present`
                      i.write(`
        const ${r}_present = ${a};
        if (!${r}.issues.length || ${r}_present) {
          if (${r}.issues.length) {${l(r, o)}
          }

          if (${e}) {
            newResult[${o}] = ${r}.value;
          }
        }

      `)
                    } else
                      f
                        ? (i.write(`
        if (${r}.issues.length) {${l(r, o)}
        }
      `),
                          "defaulted" === d
                            ? i.write(`newResult[${o}] = ${r}.value;`)
                            : i.write(`
        if (${r}.value !== undefined || ${a}) {
          newResult[${o}] = ${r}.value;
        }
      `))
                        : i.write(`
        const ${r}_present = ${a};
        if (${r}.issues.length) {${l(r, o)}
        }
        if (!${r}_present && !${r}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${r}_present) {
          newResult[${o}] = ${r}.value;
        }

      `)
                  }
                  return (i.write("payload.value = newResult;"), i.write("return payload;"), i.compile())
                })(t.shape)),
              (c = r(c, d)),
              u)
              ? tT([], f, c, d, n, e, d?.abortEarly === !0)
              : c
            : i(c, d)
          : (c.issues.push({ expected: "object", code: "invalid_type", input: f, inst: e }), c)
      }
    })
  function tF(e, t, r, n) {
    for (let r of e) if (0 === r.issues.length) return ((t.value = r.value), t)
    let i = e.filter((e) => !U(e))
    return 1 === i.length
      ? ((t.value = i[0].value), i[0])
      : (t.issues.push({
          code: "invalid_union",
          input: t.value,
          inst: r,
          errors: e.map((e) => e.issues.map((e) => V(e, n, es()))),
        }),
        t)
  }
  let tD = en("$ZodUnion", (e, t) => {
      ;(eQ.init(e, t),
        ee(e, "optin", (e) =>
          e.def.options.some((e) => "defaulted" === e._zod.optin)
            ? "defaulted"
            : e.def.options.some((e) => void 0 !== e._zod.optin)
              ? "optional"
              : void 0,
        ),
        ee(e, "optout", (e) => (e.def.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0)),
        ee(e, "values", (e) => {
          if (e.def.options.every((e) => e._zod.values))
            return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)))
        }),
        ee(e, "pattern", (e) => {
          if (e.def.options.every((e) => e._zod.pattern)) {
            let t = e.def.options.map((e) => e._zod.pattern)
            return RegExp(`^(${t.map((e) => v(e.source)).join("|")})$`)
          }
        }))
      let r = 1 === t.options.length ? t.options[0]._zod.run : null
      e._zod.parse = (n, i) => {
        if (r) return r(n, i)
        let o = !1,
          a = []
        for (let e of t.options) {
          let t = e._zod.run({ value: n.value, issues: [] }, i)
          if (t instanceof Promise) (a.push(t), (o = !0))
          else {
            if (0 === t.issues.length) return t
            a.push(t)
          }
        }
        return o ? Promise.all(a).then((t) => tF(t, n, e, i)) : tF(a, n, e, i)
      }
    }),
    tR = en("$ZodIntersection", (e, t) => {
      ;(eQ.init(e, t),
        (e._zod.parse = (e, r) => {
          let n = e.value,
            i = t.left._zod.run({ value: n, issues: [] }, r),
            o = t.right._zod.run({ value: n, issues: [] }, r)
          return i instanceof Promise || o instanceof Promise
            ? Promise.all([i, o]).then(([t, r]) => tJ(e, t, r))
            : tJ(e, i, o)
        }))
    })
  function tJ(e, t, r) {
    let n,
      i = new Map(),
      o = new Map(),
      a = (e, t) => {
        let r
        if ("unrecognized_keys" !== e.code || e.path?.length)
          if ("invalid_key" !== e.code || "record" !== e.origin || e.path?.length !== 1) return !1
          else {
            let t = String(e.path[0])
            ;(o.has(t) || o.set(t, e), (r = [t]))
          }
        else (n ?? (n = e), (r = e.keys))
        for (let e of r) (i.has(e) || i.set(e, {}), (i.get(e)[t] = !0))
        return !0
      }
    for (let r of t.issues) a(r, "l") || e.issues.push(r)
    for (let t of r.issues) a(t, "r") || e.issues.push(t)
    let s = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e)
    if (s.length) {
      let t = n ? s.filter((e) => n.keys.includes(e)) : []
      for (let r of (t.length && e.issues.push({ ...n, keys: t }), s))
        !t.includes(r) && o.has(r) && e.issues.push(o.get(r))
    }
    let l = (function e(t, r) {
      if (t === r || (t instanceof Date && r instanceof Date && +t == +r)) return { valid: !0, data: t }
      if (P(t) && P(r)) {
        let n = Object.keys(r),
          i = Object.keys(t).filter((e) => -1 !== n.indexOf(e)),
          o = { ...t, ...r }
        for (let n of (Object.prototype.hasOwnProperty.call(o, "__proto__") && delete o.__proto__, i)) {
          if ("__proto__" === n) continue
          let i = e(t[n], r[n])
          if (!i.valid) return { valid: !1, mergeErrorPath: [n, ...i.mergeErrorPath] }
          o[n] = i.data
        }
        return { valid: !0, data: o }
      }
      if (Array.isArray(t) && Array.isArray(r)) {
        if (t.length !== r.length) return { valid: !1, mergeErrorPath: [] }
        let n = []
        for (let i = 0; i < t.length; i++) {
          let o = e(t[i], r[i])
          if (!o.valid) return { valid: !1, mergeErrorPath: [i, ...o.mergeErrorPath] }
          n.push(o.data)
        }
        return { valid: !0, data: n }
      }
      return { valid: !1, mergeErrorPath: [] }
    })(t.value, r.value)
    if (!l.valid) {
      if (U(e)) return e
      throw Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`)
    }
    return ((e.value = l.data), e)
  }
  let tC = en("$ZodEnum", (e, t) => {
      eQ.init(e, t)
      let r = h(t.entries),
        n = new Set(r)
      ;((e._zod.values = n),
        ee(e, "pattern", (e) => {
          let t = h(e.def.entries).filter((e) => Z.has(typeof e))
          return new RegExp(t.length ? `^(${t.map((e) => A(e.toString())).join("|")})$` : "^[^\\s\\S]$")
        }),
        (e._zod.parse = (t, i) => {
          let o = t.value
          return (n.has(o) || t.issues.push({ code: "invalid_value", values: r, input: o, inst: e }), t)
        }))
    }),
    tU = en("$ZodLiteral", (e, t) => {
      eQ.init(e, t)
      let r = new Set(t.values)
      ;((e._zod.values = r),
        ee(e, "pattern", (e) => {
          let t = e.def.values
          return new RegExp(
            t.length
              ? `^(${t.map((e) => ("string" == typeof e ? A(e) : e ? A(e.toString()) : String(e))).join("|")})$`
              : "^[^\\s\\S]$",
          )
        }),
        (e._zod.parse = (n, i) => {
          let o = n.value
          return (r.has(o) || n.issues.push({ code: "invalid_value", values: t.values, input: o, inst: e }), n)
        }))
    }),
    tM = en("$ZodTransform", (e, t) => {
      ;(eQ.init(e, t),
        (e._zod.optin = "optional"),
        ea.memoizer?.guard(e),
        (e._zod.parse = (r, n) => {
          if ("backward" === n.direction) throw new eo(e.constructor.name)
          let i = t.transform(r.value, r)
          if (n.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => ((r.value = e), r))
          if (i instanceof Promise) throw new ei()
          return ((r.value = i), r)
        }))
    })
  function tL(e, t) {
    return ((e.value = t.issues.length ? void 0 : t.value), e)
  }
  let tW = en("$ZodOptional", (e, t) => {
      ;(eQ.init(e, t),
        ee(e, "optin", (e) => ("defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional")),
        (e._zod.optout = "optional"),
        ee(e, "values", (e) => {
          let t = e.def.innerType._zod.values
          return t ? new Set([...t, void 0]) : void 0
        }),
        ee(e, "pattern", (e) => {
          let t = e.def.innerType._zod.pattern
          return t ? RegExp(`^(${v(t.source)})?$`) : void 0
        }),
        (e._zod.parse = (e, r) => {
          if (void 0 === e.value) {
            if ("defaulted" !== t.innerType._zod.optin) return e
            let n = t.innerType._zod.run({ value: e.value, issues: [] }, r)
            return n instanceof Promise ? n.then((t) => tL(e, t)) : tL(e, n)
          }
          return t.innerType._zod.run(e, r)
        }))
    }),
    tK = en("$ZodExactOptional", (e, t) => {
      ;(tW.init(e, t),
        ee(e, "values", (e) => e.def.innerType._zod.values),
        ee(e, "pattern", (e) => e.def.innerType._zod.pattern),
        (e._zod.parse = (e, r) => t.innerType._zod.run(e, r)))
    }),
    tV = en("$ZodNullable", (e, t) => {
      ;(eQ.init(e, t),
        ee(e, "optin", (e) => e.def.innerType._zod.optin),
        ee(e, "optout", (e) => e.def.innerType._zod.optout),
        ee(e, "pattern", (e) => {
          let t = e.def.innerType._zod.pattern
          return t ? RegExp(`^(${v(t.source)}|null)$`) : void 0
        }),
        ee(e, "values", (e) =>
          e.def.innerType._zod.values ? new Set([...e.def.innerType._zod.values, null]) : void 0,
        ),
        (e._zod.parse = (e, r) => (null === e.value ? e : t.innerType._zod.run(e, r))))
    }),
    tB = en("$ZodDefault", (e, t) => {
      ;(eQ.init(e, t),
        (e._zod.optin = "defaulted"),
        ee(e, "values", (e) => e.def.innerType._zod.values),
        (e._zod.parse = (e, r) => {
          if ("backward" === r.direction) return t.innerType._zod.run(e, r)
          if (void 0 === e.value) return ((e.value = t.defaultValue), e)
          let n = t.innerType._zod.run(e, r)
          return n instanceof Promise ? n.then((e) => tq(e, t)) : tq(n, t)
        }))
    })
  function tq(e, t) {
    return (void 0 === e.value && (e.value = t.defaultValue), e)
  }
  let tX = en("$ZodPrefault", (e, t) => {
      ;(eQ.init(e, t),
        (e._zod.optin = "defaulted"),
        ee(e, "values", (e) => e.def.innerType._zod.values),
        (e._zod.parse = (e, r) => (
          "backward" === r.direction || (void 0 === e.value && (e.value = t.defaultValue)),
          t.innerType._zod.run(e, r)
        )))
    }),
    tG = en("$ZodNonOptional", (e, t) => {
      ;(eQ.init(e, t),
        ee(e, "values", (e) => {
          let t = e.def.innerType._zod.values
          return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0
        }),
        (e._zod.parse = (r, n) => {
          let i = t.innerType._zod.run(r, n)
          return i instanceof Promise ? i.then((t) => tH(t, e)) : tH(i, e)
        }))
    })
  function tH(e, t) {
    return (
      e.issues.length ||
        void 0 !== e.value ||
        e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }),
      e
    )
  }
  function tY(e, t, r, n) {
    return (
      t.issues.length
        ? (e.value = r.catchValue({
            ...t,
            value: e.value,
            error: { issues: t.issues.map((e) => V(e, n, es())) },
            input: e.value,
          }))
        : ((e.value = t.value), t.memo && (e.memo = !0)),
      e
    )
  }
  let tQ = en("$ZodCatch", (e, t) => {
      ;(eQ.init(e, t),
        ee(e, "optin", (e) => ("defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional")),
        ee(e, "optout", (e) => e.def.innerType._zod.optout),
        ee(e, "values", (e) => e.def.innerType._zod.values),
        (e._zod.parse = (e, r) => {
          if ("backward" === r.direction) return t.innerType._zod.run(e, r)
          let n = t.innerType._zod.run({ value: e.value, issues: [] }, r)
          return n instanceof Promise ? n.then((n) => tY(e, n, t, r)) : tY(e, n, t, r)
        }))
    }),
    t0 = en("$ZodPipe", (e, t) => {
      ;(eQ.init(e, t),
        ee(e, "values", (e) => e.def.in._zod.values),
        ee(e, "optin", (e) => e.def.in._zod.optin),
        ee(e, "optout", (e) => e.def.out._zod.optout),
        ee(e, "propValues", (e) => e.def.in._zod.propValues),
        (e._zod.parse = (e, r) => {
          if ("backward" === r.direction) {
            let n = t.out._zod.run(e, r)
            return n instanceof Promise ? n.then((e) => t1(e, t.in, r)) : t1(n, t.in, r)
          }
          let n = t.in._zod.run(e, r)
          return n instanceof Promise ? n.then((e) => t1(e, t.out, r)) : t1(n, t.out, r)
        }))
    })
  function t1(e, t, r) {
    return e.issues.some((e) => "unrecognized_keys" !== e.code)
      ? ((e.aborted = !0), e)
      : t._zod.run({ value: e.value, issues: e.issues }, r)
  }
  let t4 = en("$ZodReadonly", (e, t) => {
    ;(eQ.init(e, t),
      ee(e, "propValues", (e) => e.def.innerType._zod.propValues),
      ee(e, "values", (e) => e.def.innerType._zod.values),
      ee(e, "optin", (e) => e.def.innerType?._zod?.optin),
      ee(e, "optout", (e) => e.def.innerType?._zod?.optout),
      (e._zod.parse = (e, r) => {
        if ("backward" === r.direction) return t.innerType._zod.run(e, r)
        let n = t.innerType._zod.run(e, r)
        return n instanceof Promise ? n.then(t9) : t9(n)
      }))
  })
  function t9(e) {
    return (e.memo || (e.value = Object.freeze(e.value)), e)
  }
  let t2 = en("$ZodCustom", (e, t) => {
    ;(eR.init(e, t),
      eQ.init(e, t),
      (e._zod.parse = (e, t) => e),
      (e._zod.check = (r) => {
        let n = r.value,
          i = t.fn(n)
        if (i instanceof Promise) return i.then((t) => t6(t, r, n, e))
        t6(i, r, n, e)
      }))
  })
  function t6(e, t, r, n) {
    if (!e) {
      let e = { code: "custom", input: r, inst: n, path: [...(n._zod.def.path ?? [])], continue: !n._zod.def.abort }
      ;(n._zod.def.params && (e.params = n._zod.def.params), t.issues.push(G(e)))
    }
  }
  ;(d = globalThis).__zod_globalRegistry ??
    (d.__zod_globalRegistry = new (class e {
      constructor() {
        ;((this._map = new WeakMap()), (this._idmap = new Map()))
      }
      add(e, ...t) {
        let r = t[0]
        return (this._map.set(e, r), r && "object" == typeof r && "id" in r && this._idmap.set(r.id, e), this)
      }
      clear() {
        return ((this._map = new WeakMap()), (this._idmap = new Map()), this)
      }
      remove(e) {
        let t = this._map.get(e)
        return (t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this)
      }
      get(e) {
        let t = e._zod.parent
        if (t) {
          let r = { ...(this.get(t) ?? {}) }
          delete r.id
          let n = { ...r, ...this._map.get(e) }
          return Object.keys(n).length ? n : void 0
        }
        return this._map.get(e)
      }
      has(e) {
        return this._map.has(e)
      }
    })())
  let t3 = globalThis.__zod_globalRegistry
  function t5(e, t) {
    return new eC({ check: "max_length", ...I(t), maximum: e })
  }
  function t8(e, t) {
    return new eU({ check: "min_length", ...I(t), minimum: e })
  }
  function t7(e, t) {
    return new eM({ check: "length_equals", ...I(t), length: e })
  }
  function re(e) {
    return new eG({ check: "overwrite", tx: e })
  }
  function rt(e, ...t) {
    for (let r of t) for (let t of Reflect.ownKeys(r)) Object.prototype.propertyIsEnumerable.call(r, t) && _(e, t, r[t])
    return e
  }
  function rr(e) {
    let t = e?.target ?? "draft-2020-12"
    return (
      "draft-4" === t && (t = "draft-04"),
      "draft-7" === t && (t = "draft-07"),
      {
        processors: e.processors ?? {},
        metadataRegistry: e?.metadata ?? t3,
        target: t,
        unrepresentable: e?.unrepresentable ?? "throw",
        override: e?.override ?? (() => {}),
        io: e?.io ?? "output",
        counter: 0,
        seen: new Map(),
        sharedDefsExtractedFor: void 0,
        sharedEmitDoneFor: void 0,
        cycles: e?.cycles ?? "ref",
        reused: e?.reused ?? "inline",
        intersections: [],
        deferred: [],
        external: e?.external ?? void 0,
      }
    )
  }
  function rn(e, t, r, n, i) {
    let o =
      "function" == typeof t.unrepresentable
        ? t.unrepresentable({ zodSchema: e, path: n.path, message: i })
        : t.unrepresentable
    if ("any" === o) return !1
    if (void 0 === o || "throw" === o) throw Error(i)
    return (Object.assign(r, o), !0)
  }
  function ri(e, t, r = { path: [], schemaPath: [] }) {
    var n
    let i = e._zod.def,
      o = t.seen.get(e)
    if (o) return (o.count++, r.schemaPath.includes(e) && (o.cycle = r.path), o.schema)
    let a = { schema: {}, count: 1, cycle: void 0, path: r.path }
    ;(t.seen.set(e, a), (t.sharedDefsExtractedFor = void 0), (t.sharedEmitDoneFor = void 0))
    let s = e._zod.toJSONSchema?.()
    if (s) a.schema = s
    else {
      let n = { ...r, schemaPath: [...r.schemaPath, e], path: r.path }
      if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, a.schema, n)
      else {
        let r = a.schema,
          o = t.processors[i.type]
        if (!o) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`)
        o(e, t, r, n)
      }
      let o = e._zod.parent
      o && (a.ref || (a.ref = o), ri(o, t, n), (t.seen.get(o).isParent = !0))
    }
    let l = t.metadataRegistry.get(e)
    return (
      l && rt(a.schema, l),
      "input" === t.io &&
        (function e(t, r) {
          let n = r ?? { seen: new Set() }
          if (n.seen.has(t)) return !1
          n.seen.add(t)
          let i = t._zod.def
          if ("transform" === i.type) return !0
          if ("array" === i.type) return e(i.element, n)
          if ("set" === i.type) return e(i.valueType, n)
          if ("lazy" === i.type) return e(i.getter(), n)
          if (
            "promise" === i.type ||
            "optional" === i.type ||
            "nonoptional" === i.type ||
            "nullable" === i.type ||
            "readonly" === i.type ||
            "default" === i.type ||
            "prefault" === i.type ||
            "catch" === i.type
          )
            return e(i.innerType, n)
          if ("intersection" === i.type) return e(i.left, n) || e(i.right, n)
          if ("record" === i.type || "map" === i.type) return e(i.keyType, n) || e(i.valueType, n)
          if ("pipe" === i.type) return !!t._zod.traits.has("$ZodCodec") || e(i.in, n) || e(i.out, n)
          if ("object" === i.type) {
            for (let t in i.shape) if (e(i.shape[t], n)) return !0
            return !1
          }
          if ("union" === i.type) {
            for (let t of i.options) if (e(t, n)) return !0
            return !1
          }
          if ("tuple" === i.type) {
            for (let t of i.items) if (e(t, n)) return !0
            if (i.rest && e(i.rest, n)) return !0
          }
          return !1
        })(e) &&
        (delete a.schema.examples, delete a.schema.default),
      "input" === t.io && "_prefault" in a.schema && ((n = a.schema).default ?? (n.default = a.schema._prefault)),
      delete a.schema._prefault,
      t.seen.get(e).schema
    )
  }
  function ro(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1")
  }
  function ra(e, t) {
    let r = e.seen.get(t)
    if (!r) throw Error("Unprocessed schema. This is a bug in Zod.")
    if (e.external && e.sharedDefsExtractedFor === e.external) return
    let n = new Map()
    for (let t of e.seen.entries()) {
      let r = e.metadataRegistry.get(t[0])?.id
      if (r) {
        let e = n.get(r)
        if (e && e !== t[0])
          throw Error(
            `Duplicate schema id "${r}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
          )
        n.set(r, t[0])
      }
    }
    let i = (t) => {
      if (t[1].schema.$ref) return
      let n = t[1],
        { ref: i, defId: o } = ((t) => {
          let n = "draft-2020-12" === e.target ? "$defs" : "definitions"
          if (e.external) {
            let r = e.external.registry.get(t[0])?.id,
              i = e.external.uri ?? ((e) => e)
            if (r) return { ref: i(r) }
            let o = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`
            return ((t[1].defId = o), { defId: o, ref: `${i("__shared")}#/${n}/${ro(o)}` })
          }
          let i = `#/${n}/`
          if (t[1] === r && !t[1].schema.id) return { ref: "#" }
          let o = t[1].schema.id ?? `__schema${e.counter++}`
          return { defId: o, ref: i + ro(o) }
        })(t)
      ;((n.def = { ...n.schema }), o && (n.defId = o))
      let a = n.schema
      for (let e in a) delete a[e]
      a.$ref = i
    }
    if ("throw" === e.cycles)
      for (let t of e.seen.entries()) {
        let e = t[1]
        if (e.cycle)
          throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)
      }
    for (let r of e.seen.entries()) {
      let n = r[1]
      if (t === r[0]) {
        i(r)
        continue
      }
      if (e.external) {
        let n = e.external.registry.get(r[0])?.id
        if (t !== r[0] && n) {
          i(r)
          continue
        }
      }
      if (e.metadataRegistry.get(r[0])?.id || n.cycle) {
        i(r)
        continue
      }
      n.count > 1 && "ref" === e.reused && i(r)
    }
    e.external && (e.sharedDefsExtractedFor = e.external)
  }
  let rs = new Set(["type", "properties", "required", "additionalProperties"]),
    rl = ["oneOf", "anyOf"]
  function ru(e) {
    let t = e.additionalProperties
    return void 0 === t || !1 === t || "object" != typeof t || null === t ? null : Object.keys(t).length ? t : null
  }
  function rc(e) {
    let t = []
    for (let r of e) {
      if ("object" != typeof r || "object" !== r.type) return null
      for (let e in r) if (!rs.has(e)) return null
      t.push(r)
    }
    let r = {},
      n = new Set()
    for (let e of t) {
      for (let n in e.properties) {
        if (Object.prototype.hasOwnProperty.call(r, n)) continue
        let e = []
        for (let r of t) {
          let t = r.properties?.[n] ?? ru(r)
          null != t && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t))
        }
        _(r, n, 1 === e.length ? e[0] : (rc(e) ?? { allOf: e }))
      }
      for (let t of e.required ?? []) n.add(t)
    }
    let i = { type: "object", properties: r }
    if ((n.size && (i.required = [...n]), t.every((e) => !1 === e.additionalProperties))) i.additionalProperties = !1
    else {
      let e = []
      for (let r of t) {
        let t = ru(r)
        t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t)
      }
      1 === e.length ? (i.additionalProperties = e[0]) : e.length > 1 && (i.additionalProperties = { allOf: e })
    }
    return i
  }
  function rd(e, t) {
    let r = e.seen.get(t)
    if (!r) throw Error("Unprocessed schema. This is a bug in Zod.")
    let n = (t) => {
      let r = e.seen.get(t)
      if (null === r.ref) return
      let i = r.def ?? r.schema,
        o = { ...i },
        a = r.ref
      if (((r.ref = null), a)) {
        n(a)
        let r = e.seen.get(a),
          s = r.schema
        if (
          (s.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target)
            ? ((i.allOf = i.allOf ?? []), i.allOf.push(s))
            : rt(i, s),
          rt(i, o),
          t._zod.parent === a)
        )
          for (let e in i) "$ref" !== e && "allOf" !== e && (e in o || delete i[e])
        if (s.$ref && r.def)
          for (let e in i)
            "$ref" !== e &&
              "allOf" !== e &&
              e in r.def &&
              JSON.stringify(i[e]) === JSON.stringify(r.def[e]) &&
              delete i[e]
      }
      let s = t._zod.parent
      if (s && s !== a) {
        n(s)
        let t = e.seen.get(s)
        if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
          for (let e in i)
            "$ref" !== e &&
              "allOf" !== e &&
              e in t.def &&
              JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
              delete i[e]
      }
      e.override({ zodSchema: t, jsonSchema: i, path: r.path ?? [] })
    }
    if (!e.external || e.sharedEmitDoneFor !== e.external) {
      for (let t of [...e.seen.entries()].reverse()) n(t[0])
      if ("openapi-3.0" !== e.target)
        for (let t of e.seen.entries())
          !(function e(t) {
            let r = t.anyOf
            if (!Array.isArray(r) || 0 === r.length || void 0 !== t.type) return
            let n = []
            for (let t of r) {
              if (!t || "object" != typeof t) return
              e(t)
              let r = Object.keys(t)
              if (1 !== r.length || "type" !== r[0]) return
              let i = t.type
              for (let e of Array.isArray(i) ? i : [i]) {
                if ("string" != typeof e) return
                n.includes(e) || n.push(e)
              }
            }
            ;(delete t.anyOf, (t.type = 1 === n.length ? n[0] : n))
          })(t[1].def ?? t[1].schema)
      for (let t of e.deferred) t()
      if (e.intersections.length) {
        let t = new Map()
        for (let r of e.seen.values())
          for (let e of [r.schema, r.def]) {
            let r = e?.allOf
            if (!Array.isArray(r)) continue
            let n = t.get(r)
            n ? n.push(e) : t.set(r, [e])
          }
        for (let r of e.intersections)
          for (let e of t.get(r) ?? [])
            !(function (e) {
              let t = e.allOf
              if (!Array.isArray(t) || t.length < 2) return
              for (let t of rs) if (t in e) return
              let r = t.filter((e) => rl.some((t) => Array.isArray(e[t]))),
                n = null
              if (r.length) {
                let e = r[0],
                  i = rl.find((t) => Array.isArray(e[t]))
                if (1 !== Object.keys(e).length) return
                let o = t.filter((t) => t !== e),
                  a = e[i].map((e) => rc([...o, e]))
                if (a.some((e) => !e)) return
                n = { [i]: a }
              } else n = rc(t)
              n && (delete e.allOf, rt(e, n))
            })(e)
      }
    }
    let i = {}
    if (
      ("draft-2020-12" === e.target
        ? (i.$schema = "https://json-schema.org/draft/2020-12/schema")
        : "draft-07" === e.target
          ? (i.$schema = "http://json-schema.org/draft-07/schema#")
          : "draft-04" === e.target
            ? (i.$schema = "http://json-schema.org/draft-04/schema#")
            : e.target,
      e.external?.uri)
    ) {
      let r = e.external.registry.get(t)?.id
      if (!r) throw Error("Schema is missing an `id` property")
      i.$id = e.external.uri(r)
    }
    rt(i, r.defId ? r.schema : (r.def ?? r.schema))
    let o = e.metadataRegistry.get(t)?.id
    void 0 !== o && i.id === o && delete i.id
    let a = e.external?.defs ?? {}
    if (!e.external || e.sharedEmitDoneFor !== e.external)
      for (let t of e.seen.entries()) {
        let e = t[1]
        e.def && e.defId && (e.def.id === e.defId && delete e.def.id, _(a, e.defId, e.def))
      }
    ;(e.external && (e.sharedEmitDoneFor = e.external),
      e.external || (Object.keys(a).length > 0 && ("draft-2020-12" === e.target ? (i.$defs = a) : (i.definitions = a))))
    try {
      let r = JSON.parse(JSON.stringify(i))
      return (
        Object.defineProperty(r, "~standard", {
          value: {
            ...t["~standard"],
            jsonSchema: { input: rf(t, "input", e.processors), output: rf(t, "output", e.processors) },
          },
          enumerable: !1,
          writable: !1,
        }),
        r
      )
    } catch (e) {
      throw Error("Error converting schema to JSON.")
    }
  }
  let rf =
      (e, t, r = {}) =>
      (n) => {
        let { libraryOptions: i, target: o } = n ?? {},
          a = rr({ ...(i ?? {}), target: o, io: t, processors: r })
        return (ri(e, a), ra(a, e), rd(a, e))
      },
    rp = (e, t, r) => {
      ;(void 0 === e[t] || r > e[t]) && (e[t] = r)
    },
    rh = (e, t, r) => {
      ;(void 0 === e[t] || r < e[t]) && (e[t] = r)
    },
    rm = (e, t) => {
      ;(rp(e, "minimum", t), rh(e, "maximum", t))
    },
    ry = (e, t) => {
      ;(e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t))
    },
    rg = (e, t) => {
      ;(e.patterns ?? (e.patterns = new Set()), e.patterns.add(t))
    },
    rv = (e, t) => {
      e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t]
    },
    r_ = (e, t) => {
      ;((e.format = t), t.includes("int") && (e.isInt = !0))
    },
    rb = (e, t) => rp(e, "minimum", t.minimum),
    rw = (e, t) => rh(e, "maximum", t.maximum),
    rz = (e) => (t, r) => {
      r_(t, r.format)
      let [n, i] = e[r.format]
      ;(rp(t, "minimum", n), rh(t, "maximum", i))
    },
    rk = {
      greater_than: (e, t) => rp(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
      less_than: (e, t) => rh(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
      multiple_of: (e, t) => ry(e, t.value),
      number_format: rz(F),
      bigint_format: rz(D),
      min_length: rb,
      max_length: rw,
      length_equals: (e, t) => rm(e, t.length),
      min_size: rb,
      max_size: rw,
      size_equals: (e, t) => rm(e, t.size),
      string_format: (e, t) => {
        ;(r_(e, t.format),
          t.pattern && rg(e, t.pattern),
          ("base64" === t.format || "base64url" === t.format) && (e.contentEncoding = t.format),
          (t.local || -1 === t.precision) && (e.laxFormat = !0))
      },
      mime_type: (e, t) => rv(e, t.mime),
    }
  function r$(e) {
    let t = {},
      r = e._zod.def
    for (let n of e._zod.traits.has("$ZodCheck") ? [e, ...(r.checks ?? [])] : (r.checks ?? []))
      rk[n._zod.def.check]?.(t, n._zod.def)
    let n = e._zod.bag
    for (let e of (void 0 !== n.minimum && rp(t, "minimum", n.minimum),
    void 0 !== n.exclusiveMinimum && rp(t, "exclusiveMinimum", n.exclusiveMinimum),
    void 0 !== n.maximum && rh(t, "maximum", n.maximum),
    void 0 !== n.exclusiveMaximum && rh(t, "exclusiveMaximum", n.exclusiveMaximum),
    void 0 !== n.multipleOf && ry(t, n.multipleOf),
    void 0 !== n.format && (t.format ?? (t.format = n.format), n.format.includes("int") && (t.isInt = !0)),
    n.mime && rv(t, n.mime),
    n.patterns ?? []))
      rg(t, e)
    return t
  }
  let rO = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
    rS = new Map([
      [t_, /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/],
      [tw, /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/],
    ]),
    rx = (e) => rS.get(e) ?? e
  new WeakMap()
  let rj = Symbol()
  function rP(e, t, r, n, i) {
    let o = !1,
      a = JSON.stringify(e, (e, t) => ("bigint" != typeof t ? t : ((o = !0), null)))
    return o ? (rn(t, r, n, i, "BigInt defaults cannot be represented in JSON Schema"), rj) : JSON.parse(a)
  }
  let rE = (e, t, r, n) => {
      let i = e._zod.def
      ;(ri(i.innerType, t, n), (t.seen.get(e).ref = i.innerType))
    },
    rZ = {
      get: function () {
        let e = this._zod
        return (e.message ?? (e.message = JSON.stringify(e.def, y, 2)), e.message)
      },
      set: function (e) {
        this._zod.message = e
      },
      enumerable: !0,
      configurable: !0,
    },
    rA = { value: void 0, enumerable: !1 },
    rT = new WeakSet([Object.prototype, Error.prototype]),
    rI = (e, t) => {
      ;((e.name = "$ZodError"),
        (rA.value = t),
        Object.defineProperty(e, "issues", rA),
        (rA.value = void 0),
        Object.defineProperty(e, "message", rZ))
      let r = Object.getPrototypeOf(e)
      rT.has(r) ||
        (rT.add(r),
        Object.defineProperty(r, "toString", {
          configurable: !0,
          enumerable: !1,
          get() {
            let e = () => this.message
            return (Object.defineProperty(this, "toString", { value: e, configurable: !0, writable: !0 }), e)
          },
          set(e) {
            Object.defineProperty(this, "toString", { value: e, configurable: !0, writable: !0 })
          },
        }))
    },
    rN = en("$ZodError", rI)
  function rF(e, t) {
    return { callee: t?.callee ?? e, Err: t?.Err }
  }
  en("$ZodError", rI, void 0, { Parent: Error })
  let rD = (e) => {
      let t = (r, n, i, o) => {
        let a = i ? { ...i, async: !1 } : { async: !1 },
          s = r._zod.run({ value: n, issues: [] }, a)
        if (s instanceof Promise) throw new ei()
        if (s.issues.length) {
          let r = new (o?.Err ?? e)(s.issues.map((e) => V(e, a, es())))
          throw (S(r, o?.callee ?? t), r)
        }
        return s.value
      }
      return t
    },
    rR = (e) => {
      let t = async (r, n, i, o) => {
        let a = i ? { ...i, async: !0 } : { async: !0 },
          s = r._zod.run({ value: n, issues: [] }, a)
        if ((s instanceof Promise && (s = await s), s.issues.length)) {
          let r = new (o?.Err ?? e)(s.issues.map((e) => V(e, a, es())))
          throw (S(r, o?.callee ?? t), r)
        }
        return s.value
      }
      return t
    },
    rJ = (e) => (t, r, n) => {
      let i = n ? { ...n, async: !1 } : { async: !1 },
        o = t._zod.run({ value: r, issues: [] }, i)
      if (o instanceof Promise) throw new ei()
      return o.issues.length ? rC(e, o.issues, i) : { success: !0, data: o.value }
    }
  function rC(e, t, r) {
    let n
    return {
      success: !1,
      get error() {
        return (n || ((n = new e(t.map((e) => V(e, r, es())))), (t = void 0), (r = void 0)), n)
      },
      set error(e) {
        ;((n = e), (t = void 0), (r = void 0))
      },
    }
  }
  let rU = (e) => async (t, r, n) => {
      let i = n ? { ...n, async: !0 } : { async: !0 },
        o = t._zod.run({ value: r, issues: [] }, i)
      return (
        o instanceof Promise && (o = await o),
        o.issues.length ? rC(e, o.issues, i) : { success: !0, data: o.value }
      )
    },
    rM = Symbol.for("zod.compile.invalid"),
    rL = Symbol.for("zod.compile.fallback"),
    rW = new WeakSet([Object.prototype, Error.prototype])
  function rK(e, t, r) {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      get() {
        let e = r(this)
        return (Object.defineProperty(this, t, { value: e, configurable: !0, writable: !0 }), e)
      },
      set(e) {
        Object.defineProperty(this, t, { value: e, configurable: !0, writable: !0 })
      },
    })
  }
  let rV = en(
      "ZodError",
      (e, t) => {
        ;(rN.init(e, t), (e.name = "ZodError"))
        let r = Object.getPrototypeOf(e)
        rW.has(r) ||
          (rW.add(r),
          rK(
            r,
            "format",
            (e) => (t) =>
              (function (e, t = (e) => e.message) {
                let r = { _errors: [] },
                  n = (e, i = []) => {
                    for (let o of e.issues)
                      if ("invalid_union" === o.code && o.errors.length)
                        o.errors.map((e) => n({ issues: e }, [...i, ...o.path]))
                      else if ("invalid_key" === o.code) n({ issues: o.issues }, [...i, ...o.path])
                      else if ("invalid_element" === o.code) n({ issues: o.issues }, [...i, ...o.path])
                      else {
                        let e = [...i, ...o.path]
                        if (0 === e.length) r._errors.push(t(o))
                        else {
                          let n = r,
                            i = 0
                          for (; i < e.length;) {
                            let r = e[i],
                              a = i === e.length - 1
                            if ("_errors" === r) {
                              ;(a && n._errors.push(t(o)), i++)
                              continue
                            }
                            Object.prototype.hasOwnProperty.call(n, r) ||
                              Object.defineProperty(n, r, {
                                value: { _errors: [] },
                                enumerable: !0,
                                writable: !0,
                                configurable: !0,
                              })
                            let s = n[r]
                            ;(a && s._errors.push(t(o)), (n = s), i++)
                          }
                        }
                      }
                  }
                return (n(e), r)
              })(e, t),
          ),
          rK(
            r,
            "flatten",
            (e) => (t) =>
              (function (e, t = (e) => e.message) {
                let r = {},
                  n = []
                for (let a of e.issues)
                  if (a.path.length > 0) {
                    var i, o
                    ;((i = a.path[0]),
                    (o = () => []),
                    !Object.prototype.hasOwnProperty.call(r, i) &&
                      ("__proto__" === i
                        ? Object.defineProperty(r, i, { value: o(), writable: !0, enumerable: !0, configurable: !0 })
                        : (r[i] = o())),
                    r[i]).push(t(a))
                  } else n.push(t(a))
                return { formErrors: n, fieldErrors: r }
              })(e, t),
          ),
          rK(r, "addIssue", (e) => (t) => {
            ;(e.issues.push(t), (e.message = JSON.stringify(e.issues, y, 2)))
          }),
          rK(r, "addIssues", (e) => (t) => {
            ;(e.issues.push(...t), (e.message = JSON.stringify(e.issues, y, 2)))
          }),
          Object.defineProperty(r, "isEmpty", {
            configurable: !0,
            enumerable: !1,
            get() {
              return 0 === this.issues.length
            },
          }))
      },
      void 0,
      { Parent: Error },
    ),
    rB = rD(rV),
    rq = rR(rV),
    rX = rJ(rV),
    rG = rU(rV),
    rH =
      ((r = rD(rV)),
      (n = (e, t, i, o) => r(e, t, i ? { ...i, direction: "backward" } : { direction: "backward" }, rF(n, o)))),
    rY = ((i = rD(rV)), (o = (e, t, r, n) => i(e, t, r, rF(o, n)))),
    rQ =
      ((a = rR(rV)),
      (s = async (e, t, r, n) => {
        let i = r ? { ...r, direction: "backward" } : { direction: "backward" }
        return await a(e, t, i, rF(s, n))
      })),
    r0 = ((l = rR(rV)), (u = async (e, t, r, n) => await l(e, t, r, rF(u, n)))),
    r1 = (e, t, r) => {
      let n = r ? { ...r, direction: "backward" } : { direction: "backward" }
      return rJ(rV)(e, t, n)
    },
    r4 = (e, t, r) => rJ(rV)(e, t, r),
    r9 = async (e, t, r) => {
      let n = r ? { ...r, direction: "backward" } : { direction: "backward" }
      return rU(rV)(e, t, n)
    },
    r2 = async (e, t, r) => rU(rV)(e, t, r)
  function r6() {
    ea.memoizer || es({ memoizer: em })
  }
  let r3 = en(
      "ZodType",
      (e, t) => (
        ea.localeError ||
          es({
            localeError: (() => {
              let e = {
                  string: { unit: "characters", verb: "to have" },
                  file: { unit: "bytes", verb: "to have" },
                  array: { unit: "items", verb: "to have" },
                  set: { unit: "items", verb: "to have" },
                  map: { unit: "entries", verb: "to have" },
                },
                t = {
                  regex: "input",
                  email: "email address",
                  url: "URL",
                  emoji: "emoji",
                  uuid: "UUID",
                  uuidv4: "UUIDv4",
                  uuidv6: "UUIDv6",
                  nanoid: "nanoid",
                  guid: "GUID",
                  cuid: "cuid",
                  cuid2: "cuid2",
                  ulid: "ULID",
                  xid: "XID",
                  ksuid: "KSUID",
                  datetime: "ISO datetime",
                  date: "ISO date",
                  time: "ISO time",
                  duration: "ISO duration",
                  ipv4: "IPv4 address",
                  ipv6: "IPv6 address",
                  mac: "MAC address",
                  cidrv4: "IPv4 range",
                  cidrv6: "IPv6 range",
                  base64: "base64-encoded string",
                  base64url: "base64url-encoded string",
                  json_string: "JSON string",
                  e164: "E.164 number",
                  currency_code: "currency code",
                  credit_card: "credit card number",
                  iban: "IBAN",
                  jwt: "JWT",
                  template_literal: "input",
                },
                r = { nan: "NaN" }
              function n(e, t) {
                return "number" !== e || "number" != typeof t || Number.isFinite(t) ? (r[e] ?? e) : String(t)
              }
              return (r) => {
                switch (r.code) {
                  case "invalid_type": {
                    let e = n(r.expected),
                      t = n(
                        (function (e) {
                          let t = typeof e
                          switch (t) {
                            case "number":
                              return Number.isNaN(e) ? "nan" : "number"
                            case "object":
                              if (null === e) return "null"
                              if (Array.isArray(e)) return "array"
                              if (
                                e &&
                                Object.getPrototypeOf(e) !== Object.prototype &&
                                "constructor" in e &&
                                e.constructor
                              )
                                return e.constructor.name
                          }
                          return t
                        })(r.input),
                        r.input,
                      )
                    return `Invalid input: expected ${e}, received ${t}`
                  }
                  case "invalid_value":
                    if (1 === r.values.length) return `Invalid input: expected ${N(r.values[0])}`
                    return `Invalid option: expected one of ${m(r.values, "|")}`
                  case "too_big": {
                    let t = r.exact ? "exactly " : r.inclusive ? "<=" : "<",
                      n = e[r.origin] ?? null
                    if (n)
                      return `Too big: expected ${r.origin ?? "value"} to have ${t}${r.maximum.toString()} ${n.unit ?? "elements"}`
                    return `Too big: expected ${r.origin ?? "value"} to be ${t}${r.maximum.toString()}`
                  }
                  case "too_small": {
                    let t = r.exact ? "exactly " : r.inclusive ? ">=" : ">",
                      n = e[r.origin] ?? null
                    if (n) return `Too small: expected ${r.origin} to have ${t}${r.minimum.toString()} ${n.unit}`
                    return `Too small: expected ${r.origin} to be ${t}${r.minimum.toString()}`
                  }
                  case "invalid_format":
                    if ("starts_with" === r.format) return `Invalid string: must start with "${r.prefix}"`
                    if ("ends_with" === r.format) return `Invalid string: must end with "${r.suffix}"`
                    if ("includes" === r.format) return `Invalid string: must include "${r.includes}"`
                    if ("regex" === r.format) return `Invalid string: must match pattern ${r.pattern}`
                    return `Invalid ${t[r.format] ?? r.format}`
                  case "not_multiple_of":
                    return `Invalid number: must be a multiple of ${r.divisor}`
                  case "unrecognized_keys":
                    return `Unrecognized key${r.keys.length > 1 ? "s" : ""}: ${m(r.keys, ", ")}`
                  case "invalid_key":
                    return `Invalid key in ${r.origin}`
                  case "invalid_union":
                    if (r.options && Array.isArray(r.options) && r.options.length > 0) {
                      let e = r.options.map((e) => `'${e}'`).join(" | ")
                      return `Invalid discriminator value. Expected ${e}`
                    }
                    if (!1 === r.inclusive) return "Invalid input: more than one option matched"
                    return "Invalid input"
                  case "invalid_element":
                    return `Invalid value in ${r.origin}`
                  default:
                    return "Invalid input"
                }
              }
            })(),
          }),
        eQ.init(e, t),
        (e.def = t),
        (e.type = t.type),
        e
      ),
      {
        check(...e) {
          let t = this.def
          return this.clone(
            O(t, {
              checks: [
                ...(t.checks ?? []),
                ...e.map((e) =>
                  "function" == typeof e ? { _zod: { check: e, def: { check: "custom" }, onattach: [] } } : e,
                ),
              ],
            }),
            { parent: !0 },
          )
        },
        with(...e) {
          return this.check(...e)
        },
        clone(e, t) {
          return T(this, e, t)
        },
        brand() {
          return this
        },
        register(e, t) {
          return (e.add(this, t), this)
        },
        refine(e, t) {
          return this.check(
            (function (e, t = {}) {
              return new nB({ type: "custom", check: "custom", fn: e, ...I(t) })
            })(e, t),
          )
        },
        superRefine(e, t) {
          return this.check(
            (function (e, t) {
              var r
              let n, i
              return (
                (r = (t) => (
                  (t.addIssue = (e) => {
                    "string" == typeof e
                      ? t.issues.push(G(e, t.value, n._zod.def))
                      : (e.fatal && (e.continue = !1),
                        e.code ?? (e.code = "custom"),
                        "input" in e || (e.input = t.value),
                        e.inst ?? (e.inst = n),
                        e.continue ?? (e.continue = !n._zod.def.abort),
                        t.issues.push(G(e)))
                  }),
                  e(t.value, t)
                )),
                ((i = new eR({ check: "custom", ...I(t) }))._zod.check = r),
                (n = i)
              )
            })(e, t),
          )
        },
        overwrite(e) {
          return this.check(re(e))
        },
        optional() {
          return nF(this)
        },
        exactOptional() {
          var e
          return ((e = this), new nD({ type: "optional", innerType: e }))
        },
        nullable() {
          return nJ(this)
        },
        nullish() {
          return nF(nJ(this))
        },
        nonoptional(e) {
          var t
          return ((t = this), new nM({ type: "nonoptional", innerType: t, ...I(e) }))
        },
        array() {
          return (function (e) {
            return new nx({ type: "array", element: e, ...I(void 0) })
          })(this)
        },
        or(e) {
          return new nE({ type: "union", options: [this, e], ...I(void 0) })
        },
        and(e) {
          var t
          return ((t = this), new nZ({ type: "intersection", left: t, right: e }))
        },
        transform(e) {
          return nK(this, new nI({ type: "transform", transform: e }))
        },
        default(e) {
          var t, r
          return (
            (t = this),
            (r = e),
            new nC({
              type: "default",
              innerType: t,
              get defaultValue() {
                return "function" == typeof r ? r() : E(r)
              },
            })
          )
        },
        prefault(e) {
          var t, r
          return (
            (t = this),
            (r = e),
            new nU({
              type: "prefault",
              innerType: t,
              get defaultValue() {
                return "function" == typeof r ? r() : E(r)
              },
            })
          )
        },
        catch(e) {
          return (function (e, t) {
            let r
            return new nL({
              type: "catch",
              innerType: e,
              catchValue: "function" == typeof t ? t : (((r = () => t)["~constantCatch"] = !0), r),
            })
          })(this, e)
        },
        pipe(e) {
          return nK(this, e)
        },
        readonly() {
          var e
          return ((e = this), new nV({ type: "readonly", innerType: e }))
        },
        describe(e) {
          let t = this.clone()
          return (t3.add(t, { description: e }), t)
        },
        meta(...e) {
          if (0 === e.length) return t3.get(this)
          let t = this.clone()
          return (t3.add(t, e[0]), t)
        },
        isOptional() {
          return this.safeParse(void 0).success
        },
        isNullable() {
          return this.safeParse(null).success
        },
        apply(e, ...t) {
          return 0 === t.length ? e(this) : e(this, ...t)
        },
        get "~standard"() {
          return H(
            this,
            "~standard",
            { ...e1(this), jsonSchema: { input: rf(this, "input"), output: rf(this, "output") } },
            !1,
          )
        },
        set "~standard"(e) {
          H(this, "~standard", e)
        },
        parse: function e(t, r) {
          return rB(this, t, r, { callee: e })
        },
        parseAsync: async function e(t, r) {
          return await rq(this, t, r, { callee: e })
        },
        safeParse(e, t) {
          return rX(this, e, t)
        },
        async safeParseAsync(e, t) {
          return rG(this, e, t)
        },
        get spa() {
          return this?.safeParseAsync
        },
        set spa(e) {
          H(this, "spa", e)
        },
        validate(e, t) {
          let r = this._zod.bag.validator
          if (void 0 !== r) {
            if (r(e) !== rM) return !0
            if (!0 === r.definite && void 0 === t) return !1
          }
          return (function (e, t, r) {
            let n,
              i = r ? { ...r, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 },
              o = e._zod.bag.fallbackRun
            if (
              (o ? ((i[rL] = !0), (n = o({ value: t, issues: [] }, i))) : (n = e._zod.run({ value: t, issues: [] }, i)),
              n instanceof Promise)
            )
              throw new ei()
            return 0 === n.issues.length
          })(this, e, t)
        },
        validateAsync(e, t) {
          return (async (e, t, r) => {
            let n = r ? { ...r, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 },
              i = e._zod.run({ value: t, issues: [] }, n)
            return (i instanceof Promise && (i = await i), 0 === i.issues.length)
          })(this, e, t)
        },
        encode: function e(t, r) {
          return rH(this, t, r, { callee: e })
        },
        decode: function e(t, r) {
          return rY(this, t, r, { callee: e })
        },
        encodeAsync: async function e(t, r) {
          return await rQ(this, t, r, { callee: e })
        },
        decodeAsync: async function e(t, r) {
          return await r0(this, t, r, { callee: e })
        },
        safeEncode(e, t) {
          return r1(this, e, t)
        },
        safeDecode(e, t) {
          return r4(this, e, t)
        },
        async safeEncodeAsync(e, t) {
          return r9(this, e, t)
        },
        async safeDecodeAsync(e, t) {
          return r2(this, e, t)
        },
        toJSONSchema(e) {
          return (
            (e, t = {}) =>
            (r) => {
              let n = rr({ ...r, processors: t })
              return (ri(e, n), ra(n, e), rd(n, e))
            }
          )(
            this,
            {},
          )(e)
        },
        get description() {
          return t3.get(this)?.description
        },
        get _def() {
          return this._zod.def
        },
      },
    ),
    r5 = en(
      "_ZodString",
      (e, t) => {
        ;(e4.init(e, t),
          r3.init(e, t),
          (e._zod.processJSONSchema = (t, r, n) =>
            ((e, t, r) => {
              r.type = "string"
              let { minimum: n, maximum: i, format: o, patterns: a, contentEncoding: s, laxFormat: l } = r$(e)
              if (
                ("number" == typeof n && (r.minLength = n),
                "number" == typeof i && (r.maxLength = i),
                o &&
                  ((r.format = rO[o] ?? o), "" === r.format && delete r.format, ("time" === o || l) && delete r.format),
                s && (r.contentEncoding = s),
                a && a.size > 0)
              ) {
                let e = [...a].map(rx)
                1 === e.length
                  ? (r.pattern = e[0].source)
                  : e.length > 1 &&
                    (r.allOf = [
                      ...e.map((e) => ({
                        ...("draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target
                          ? { type: "string" }
                          : {}),
                        pattern: e.source,
                      })),
                    ])
              }
            })(e, t, r)))
      },
      (function (e, t) {
        for (let r in e) {
          let n = e[r]
          Object.defineProperty(t, r, {
            configurable: !0,
            enumerable: !0,
            get() {
              return H(this, r, n(this))
            },
            set(e) {
              H(this, r, e)
            },
          })
        }
        return t
      })(
        {
          format: (e) => r$(e).format ?? null,
          minLength: (e) => r$(e).minimum ?? null,
          maxLength: (e) => r$(e).maximum ?? null,
        },
        {
          regex(...e) {
            return this.check(
              (function (e, t) {
                return new eW({ check: "string_format", format: "regex", ...I(t), pattern: e })
              })(...e),
            )
          },
          includes(...e) {
            return this.check(
              (function (e, t) {
                return new eB({ check: "string_format", format: "includes", ...I(t), includes: e })
              })(...e),
            )
          },
          startsWith(...e) {
            return this.check(
              (function (e, t) {
                return new eq({ check: "string_format", format: "starts_with", ...I(t), prefix: e })
              })(...e),
            )
          },
          endsWith(...e) {
            return this.check(
              (function (e, t) {
                return new eX({ check: "string_format", format: "ends_with", ...I(t), suffix: e })
              })(...e),
            )
          },
          min(...e) {
            return this.check(t8(...e))
          },
          max(...e) {
            return this.check(t5(...e))
          },
          length(...e) {
            return this.check(t7(...e))
          },
          nonempty(...e) {
            return this.check(t8(1, ...e))
          },
          lowercase(e) {
            return this.check(new eK({ check: "string_format", format: "lowercase", ...I(e) }))
          },
          uppercase(e) {
            return this.check(new eV({ check: "string_format", format: "uppercase", ...I(e) }))
          },
          trim() {
            return this.check(re((e) => e.trim()))
          },
          normalize(...e) {
            return this.check(
              (function (e) {
                return re((t) => t.normalize(e))
              })(...e),
            )
          },
          toLowerCase() {
            return this.check(re((e) => e.toLowerCase()))
          },
          toUpperCase() {
            return this.check(re((e) => e.toUpperCase()))
          },
          slugify() {
            return this.check(
              re((e) =>
                e
                  .toLowerCase()
                  .trim()
                  .replace(/[^\w\s-]/g, "")
                  .replace(/[\s_-]+/g, "-")
                  .replace(/^-+|-+$/g, ""),
              ),
            )
          },
        },
      ),
    ),
    r8 = en(
      "ZodString",
      (e, t) => {
        ;(e4.init(e, t), r5.init(e, t))
      },
      {
        email(e) {
          return this.check(new no({ type: "string", format: "email", check: "string_format", abort: !1, ...I(e) }))
        },
        url(e) {
          return this.check(new nl({ type: "string", format: "url", check: "string_format", abort: !1, ...I(e) }))
        },
        jwt(e) {
          return this.check(new nk({ type: "string", format: "jwt", check: "string_format", abort: !1, ...I(e) }))
        },
        emoji(e) {
          return this.check(new nu({ type: "string", format: "emoji", check: "string_format", abort: !1, ...I(e) }))
        },
        guid(e) {
          return this.check(new na({ type: "string", format: "guid", check: "string_format", abort: !1, ...I(e) }))
        },
        uuid(e) {
          return this.check(new ns({ type: "string", format: "uuid", check: "string_format", abort: !1, ...I(e) }))
        },
        uuidv4(e) {
          return this.check(
            new ns({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...I(e) }),
          )
        },
        uuidv6(e) {
          return this.check(
            new ns({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...I(e) }),
          )
        },
        uuidv7(e) {
          return this.check(
            new ns({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...I(e) }),
          )
        },
        nanoid(e) {
          return this.check(new nc({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...I(e) }))
        },
        cuid(e) {
          return this.check(new nd({ type: "string", format: "cuid", check: "string_format", abort: !1, ...I(e) }))
        },
        cuid2(e) {
          return this.check(new nf({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...I(e) }))
        },
        ulid(e) {
          return this.check(new np({ type: "string", format: "ulid", check: "string_format", abort: !1, ...I(e) }))
        },
        base64(e) {
          return this.check(new nb({ type: "string", format: "base64", check: "string_format", abort: !1, ...I(e) }))
        },
        base64url(e) {
          return this.check(new nw({ type: "string", format: "base64url", check: "string_format", abort: !1, ...I(e) }))
        },
        xid(e) {
          return this.check(new nh({ type: "string", format: "xid", check: "string_format", abort: !1, ...I(e) }))
        },
        ksuid(e) {
          return this.check(new nm({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...I(e) }))
        },
        ipv4(e) {
          return this.check(new ny({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...I(e) }))
        },
        ipv6(e) {
          return this.check(new ng({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...I(e) }))
        },
        cidrv4(e) {
          return this.check(new nv({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...I(e) }))
        },
        cidrv6(e) {
          return this.check(new n_({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...I(e) }))
        },
        e164(e) {
          return this.check(new nz({ type: "string", format: "e164", check: "string_format", abort: !1, ...I(e) }))
        },
        datetime(e) {
          return this.check(
            new nt({
              type: "string",
              format: "datetime",
              check: "string_format",
              offset: !1,
              local: !1,
              precision: null,
              ...I(e),
            }),
          )
        },
        date(e) {
          return this.check(new nr({ type: "string", format: "date", check: "string_format", ...I(e) }))
        },
        time(e) {
          return this.check(
            new nn({ type: "string", format: "time", check: "string_format", precision: null, ...I(e) }),
          )
        },
        duration(e) {
          return this.check(new ni({ type: "string", format: "duration", check: "string_format", ...I(e) }))
        },
      },
    )
  function r7(e) {
    var t
    return new r8(((t = { type: "string", ...I(e) }).checks && (t.checks = [...t.checks]), t))
  }
  let ne = en("ZodStringFormat", (e, t) => {
      ;(e9.init(e, t), r5.init(e, t))
    }),
    nt = en("ZodISODateTime", (e, t) => {
      ;(tl.init(e, t), ne.init(e, t))
    }),
    nr = en("ZodISODate", (e, t) => {
      ;(tu.init(e, t), ne.init(e, t))
    }),
    nn = en("ZodISOTime", (e, t) => {
      ;(tc.init(e, t), ne.init(e, t))
    }),
    ni = en("ZodISODuration", (e, t) => {
      ;(td.init(e, t), ne.init(e, t))
    }),
    no = en("ZodEmail", (e, t) => {
      ;(e3.init(e, t), ne.init(e, t))
    }),
    na = en("ZodGUID", (e, t) => {
      ;(e2.init(e, t), ne.init(e, t))
    }),
    ns = en("ZodUUID", (e, t) => {
      ;(e6.init(e, t), ne.init(e, t))
    }),
    nl = en("ZodURL", (e, t) => {
      ;(te.init(e, t), ne.init(e, t))
    }),
    nu = en("ZodEmoji", (e, t) => {
      ;(tt.init(e, t), ne.init(e, t))
    }),
    nc = en("ZodNanoID", (e, t) => {
      ;(tr.init(e, t), ne.init(e, t))
    }),
    nd = en("ZodCUID", (e, t) => {
      ;(tn.init(e, t), ne.init(e, t))
    }),
    nf = en("ZodCUID2", (e, t) => {
      ;(ti.init(e, t), ne.init(e, t))
    }),
    np = en("ZodULID", (e, t) => {
      ;(to.init(e, t), ne.init(e, t))
    }),
    nh = en("ZodXID", (e, t) => {
      ;(ta.init(e, t), ne.init(e, t))
    }),
    nm = en("ZodKSUID", (e, t) => {
      ;(ts.init(e, t), ne.init(e, t))
    }),
    ny = en("ZodIPv4", (e, t) => {
      ;(tf.init(e, t), ne.init(e, t))
    }),
    ng = en("ZodIPv6", (e, t) => {
      ;(tm.init(e, t), ne.init(e, t))
    }),
    nv = en("ZodCIDRv4", (e, t) => {
      ;(ty.init(e, t), ne.init(e, t))
    }),
    n_ = en("ZodCIDRv6", (e, t) => {
      ;(tg.init(e, t), ne.init(e, t))
    }),
    nb = en("ZodBase64", (e, t) => {
      ;(tb.init(e, t), ne.init(e, t))
    }),
    nw = en("ZodBase64URL", (e, t) => {
      ;(tz.init(e, t), ne.init(e, t))
    }),
    nz = en("ZodE164", (e, t) => {
      ;(tk.init(e, t), ne.init(e, t))
    }),
    nk = en("ZodJWT", (e, t) => {
      ;(t$.init(e, t), ne.init(e, t))
    }),
    n$ = en("ZodUnknown", (e, t) => {
      ;(tO.init(e, t), r3.init(e, t), (e._zod.processJSONSchema = (e, t, r) => void 0))
    })
  function nO() {
    return new n$({ type: "unknown" })
  }
  let nS = en("ZodNever", (e, t) => {
      ;(tS.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (e, t, r) => {
          t.not = {}
        }))
    }),
    nx = en(
      "ZodArray",
      (e, t) => {
        ;(r6(),
          tP.init(e, t),
          r3.init(e, t),
          (e._zod.processJSONSchema = (t, r, n) =>
            ((e, t, r, n) => {
              let i = e._zod.def,
                { minimum: o, maximum: a } = r$(e)
              ;("number" == typeof o && (r.minItems = o),
                "number" == typeof a && (r.maxItems = a),
                (r.type = "array"),
                (r.items = ri(i.element, t, { ...n, path: [...n.path, "items"] })))
            })(e, t, r, n)),
          (e.element = t.element))
      },
      {
        min(e, t) {
          return this.check(t8(e, t))
        },
        nonempty(e) {
          return this.check(t8(1, e))
        },
        max(e, t) {
          return this.check(t5(e, t))
        },
        length(e, t) {
          return this.check(t7(e, t))
        },
        unwrap() {
          return this.element
        },
      },
    ),
    nj = en(
      "ZodObject",
      (e, t) => {
        var r
        let n, i
        ;(r6(),
          tN.init(e, t),
          r3.init(e, t),
          (e._zod.processJSONSchema = (t, r, n) =>
            ((e, t, r, n) => {
              let i = e._zod.def,
                o = i.shape
              if (
                Object.getOwnPropertySymbols(o).length &&
                rn(e, t, r, n, "Symbol keys cannot be represented in JSON Schema")
              )
                return
              for (let e in ((r.type = "object"), (r.properties = {}), o))
                _(r.properties, e, ri(o[e], t, { ...n, path: [...n.path, "properties", e] }))
              let a = []
              for (let e of Object.keys(o)) {
                let r = i.shape[e]
                ;("input" === t.io
                  ? void 0 ===
                    (function e(t) {
                      let r = t._zod.def
                      return "pipe" === r.type && r.in._zod.traits.has("$ZodTransform")
                        ? e(r.out)
                        : "catch" === r.type
                          ? e(r.innerType)
                          : t._zod.optin
                    })(r)
                  : void 0 === r._zod.optout) && a.push(e)
              }
              ;(a.length > 0 && (r.required = a),
                i.catchall?._zod.def.type === "never"
                  ? (r.additionalProperties = !1)
                  : i.catchall
                    ? i.catchall &&
                      (r.additionalProperties = ri(i.catchall, t, { ...n, path: [...n.path, "additionalProperties"] }))
                    : "output" === t.io && (r.additionalProperties = !1))
            })(e, t, r, n)),
          (r = "shape"),
          (i = r in (n = Object.getPrototypeOf(e)) ? void 0 : n) &&
            Object.defineProperty(i, r, {
              configurable: !0,
              get() {
                let e = { configurable: !0, writable: !0, enumerable: !1, value: void 0 }
                return (
                  Object.defineProperty(this, r, e),
                  (e.value = ((e) => e._zod.def.shape)(this)),
                  Object.defineProperty(this, r, e),
                  e.value
                )
              },
              set(e) {
                Object.defineProperty(this, r, { configurable: !0, writable: !0, enumerable: !1, value: e })
              },
            }))
      },
      {
        keyof() {
          var e
          return new nA({
            type: "enum",
            entries: Array.isArray((e = Object.keys(this._zod.def.shape)))
              ? Object.fromEntries(e.map((e) => [e, e]))
              : e,
            ...I(void 0),
          })
        },
        catchall(e) {
          return this.clone(O(this._zod.def, { catchall: e }))
        },
        passthrough() {
          return this.clone(O(this._zod.def, { catchall: nO() }))
        },
        loose() {
          return this.clone(O(this._zod.def, { catchall: nO() }))
        },
        strict() {
          return this.clone(O(this._zod.def, { catchall: new nS({ type: "never", ...I(void 0) }) }))
        },
        strip() {
          return this.clone(O(this._zod.def, { catchall: void 0 }))
        },
        extend(e) {
          if (!P(e)) throw Error("Invalid input to extend: expected a plain object")
          let t = this._zod.def.checks
          if (t && t.length > 0) {
            let t = w(this)
            for (let r of Reflect.ownKeys(e))
              if (void 0 !== Object.getOwnPropertyDescriptor(t, r))
                throw Error(
                  "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                )
          }
          return T(this, O(this._zod.def, { shape: J(this, e) }))
        },
        safeExtend(e) {
          if (!P(e)) throw Error("Invalid input to safeExtend: expected a plain object")
          return T(this, O(this._zod.def, { shape: J(this, e) }))
        },
        merge(e) {
          if (!e?._zod?.def)
            throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.")
          if (this._zod.def.checks?.length)
            throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.")
          let t = {}
          return (
            $(t, this, Reflect.ownKeys(w(this))),
            $(t, e, Reflect.ownKeys(w(e))),
            T(
              this,
              O(this._zod.def, {
                shape: t,
                get catchall() {
                  return e._zod.def.catchall
                },
                checks: e._zod.def.checks ?? [],
              }),
            )
          )
        },
        pick(e) {
          return (function (e, t) {
            let r = e._zod.def,
              n = r.checks
            if (n && n.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements")
            let i = {}
            return ($(i, e, R(e, t)), T(e, O(r, { shape: i, checks: [] })))
          })(this, e)
        },
        omit(e) {
          return (function (e, t) {
            let r = e._zod.def,
              n = r.checks
            if (n && n.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements")
            let i = new Set(R(e, t)),
              o = {}
            return (
              $(
                o,
                e,
                Reflect.ownKeys(w(e)).filter((e) => !i.has(e)),
              ),
              T(e, O(r, { shape: o, checks: [] }))
            )
          })(this, e)
        },
        partial(...e) {
          return C(nN, this, e[0])
        },
        exactPartial(...e) {
          return C(nD, this, e[0], "exactPartial")
        },
        required(...e) {
          var t
          let r, n
          return (
            (r = (t = e[0]) ? new Set(R(this, t)) : void 0),
            $((n = {}), this, Reflect.ownKeys(w(this)), (e, t) =>
              r && !r.has(t) ? e : new nM({ type: "nonoptional", innerType: e }),
            ),
            T(this, O(this._zod.def, { shape: n }))
          )
        },
      },
    )
  function nP(e, t) {
    return new nj({ type: "object", shape: e ?? {}, ...I(t) })
  }
  let nE = en("ZodUnion", (e, t) => {
      ;(tD.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, o, a
          return (
            (o = !1 === (i = e._zod.def).inclusive),
            (a = i.options.map((e, r) => ri(e, t, { ...n, path: [...n.path, o ? "oneOf" : "anyOf", r] }))),
            void (o ? (r.oneOf = a) : (r.anyOf = a))
          )
        }),
        (e.options = t.options))
    }),
    nZ = en("ZodIntersection", (e, t) => {
      ;(tR.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, o, a, s, l
          return (
            (o = ri((i = e._zod.def).left, t, { ...n, path: [...n.path, "allOf", 0] })),
            (a = ri(i.right, t, { ...n, path: [...n.path, "allOf", 1] })),
            void ((r.allOf = l =
              [
                ...((s = (e) => "allOf" in e && 1 === Object.keys(e).length)(o) ? o.allOf : [o]),
                ...(s(a) ? a.allOf : [a]),
              ]),
            t.intersections.push(l))
          )
        }))
    }),
    nA = en("ZodEnum", (e, t) => {
      ;(tC.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) =>
          ((e, t) => {
            let r = h(e._zod.def.entries)
            if (0 === r.length) {
              t.not = {}
              return
            }
            ;(r.every((e) => "number" == typeof e) && (t.type = "number"),
              r.every((e) => "string" == typeof e) && (t.type = "string"),
              (t.enum = r))
          })(e, r)),
        (e.enum = t.entries),
        (e.options = [...e._zod.values]))
      let r = new Set(Object.keys(t.entries))
      ;((e.extract = (e, n) => {
        let i = {}
        for (let n of e)
          if (r.has(n)) i[n] = t.entries[n]
          else throw Error(`Key ${n} not found in enum`)
        return new nA({ ...t, checks: [], ...I(n), entries: i })
      }),
        (e.exclude = (e, n) => {
          let i = { ...t.entries }
          for (let t of e)
            if (r.has(t)) delete i[t]
            else throw Error(`Key ${t} not found in enum`)
          return new nA({ ...t, checks: [], ...I(n), entries: i })
        }))
    }),
    nT = en("ZodLiteral", (e, t) => {
      ;(tU.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) =>
          ((e, t, r, n) => {
            let i = e._zod.def
            if (0 === i.values.length) {
              r.not = {}
              return
            }
            let o = []
            for (let a of i.values)
              if (void 0 === a) {
                if (rn(e, t, r, n, "Literal `undefined` cannot be represented in JSON Schema")) return
              } else if ("bigint" == typeof a) {
                if (rn(e, t, r, n, "BigInt literals cannot be represented in JSON Schema")) return
                o.push(Number(a))
              } else o.push(a)
            if (0 === o.length);
            else if (1 === o.length) {
              let e = o[0]
              ;((r.type = null === e ? "null" : typeof e),
                "draft-04" === t.target || "openapi-3.0" === t.target ? (r.enum = [e]) : (r.const = e))
            } else
              (o.every((e) => "number" == typeof e) && (r.type = "number"),
                o.every((e) => "string" == typeof e) && (r.type = "string"),
                o.every((e) => "boolean" == typeof e) && (r.type = "boolean"),
                o.every((e) => null === e) && (r.type = "null"),
                (r.enum = o))
          })(e, t, r, n)),
        (e.values = new Set(t.values)),
        Object.defineProperty(e, "value", {
          get() {
            if (t.values.length > 1)
              throw Error("This schema contains multiple valid literal values. Use `.values` instead.")
            return t.values[0]
          },
        }))
    }),
    nI = en("ZodTransform", (e, t) => {
      ;(r6(),
        tM.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          rn(e, t, r, n, "Transforms cannot be represented in JSON Schema")
        }),
        (e._zod.parse = (r, n) => {
          if ("backward" === n.direction) throw new eo(e.constructor.name)
          r.addIssue = (n) => {
            "string" == typeof n
              ? r.issues.push(G(n, r.value, t))
              : (n.fatal && (n.continue = !1),
                n.code ?? (n.code = "custom"),
                "input" in n || (n.input = r.value),
                n.inst ?? (n.inst = e),
                r.issues.push(G(n)))
          }
          let i = t.transform(r.value, r)
          return i instanceof Promise ? i.then((e) => ((r.value = e), r)) : ((r.value = i), r)
        }))
    }),
    nN = en("ZodOptional", (e, t) => {
      ;(tW.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => rE(e, t, r, n)),
        (e.unwrap = () => e._zod.def.innerType))
    })
  function nF(e) {
    return new nN({ type: "optional", innerType: e })
  }
  let nD = en("ZodExactOptional", (e, t) => {
      ;(tK.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => rE(e, t, r, n)),
        (e.unwrap = () => e._zod.def.innerType))
    }),
    nR = en("ZodNullable", (e, t) => {
      ;(tV.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, o, a
          return (
            (o = ri((i = e._zod.def).innerType, t, n)),
            (a = t.seen.get(e)),
            void ("openapi-3.0" === t.target
              ? ((a.ref = i.innerType), (r.nullable = !0))
              : (r.anyOf = [o, { type: "null" }]))
          )
        }),
        (e.unwrap = () => e._zod.def.innerType))
    })
  function nJ(e) {
    return new nR({ type: "nullable", innerType: e })
  }
  let nC = en("ZodDefault", (e, t) => {
      ;(tB.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, o
          return (
            ri((i = e._zod.def).innerType, t, n),
            (t.seen.get(e).ref = i.innerType),
            void ((o = rP(i.defaultValue, e, t, r, n)) !== rj && (r.default = o))
          )
        }),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap))
    }),
    nU = en("ZodPrefault", (e, t) => {
      ;(tX.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) =>
          ((e, t, r, n) => {
            let i = e._zod.def
            if ((ri(i.innerType, t, n), (t.seen.get(e).ref = i.innerType), "input" !== t.io)) return
            let o = rP(i.defaultValue, e, t, r, n)
            o !== rj && (r._prefault = o)
          })(e, t, r, n)),
        (e.unwrap = () => e._zod.def.innerType))
    }),
    nM = en("ZodNonOptional", (e, t) => {
      ;(tG.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i
          ;(ri((i = e._zod.def).innerType, t, n), (t.seen.get(e).ref = i.innerType))
        }),
        (e.unwrap = () => e._zod.def.innerType))
    }),
    nL = en("ZodCatch", (e, t) => {
      ;(tQ.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) =>
          ((e, t, r, n) => {
            let i,
              o = e._zod.def
            ;(ri(o.innerType, t, n), (t.seen.get(e).ref = o.innerType))
            try {
              i = o.catchValue(void 0)
            } catch {
              rn(e, t, r, n, "Dynamic catch values are not supported in JSON Schema")
              return
            }
            r.default = i
          })(e, t, r, n)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap))
    }),
    nW = en("ZodPipe", (e, t) => {
      ;(t0.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, o, a
          return (
            (o = (i = e._zod.def).in._zod.traits.has("$ZodTransform")),
            void (ri((a = "input" === t.io ? (o ? i.out : i.in) : i.out), t, n), (t.seen.get(e).ref = a))
          )
        }),
        (e.in = t.in),
        (e.out = t.out))
    })
  function nK(e, t) {
    return new nW({ type: "pipe", in: e, out: t })
  }
  let nV = en("ZodReadonly", (e, t) => {
      ;(t4.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i
          ;(ri((i = e._zod.def).innerType, t, n), (t.seen.get(e).ref = i.innerType), (r.readOnly = !0))
        }),
        (e.unwrap = () => e._zod.def.innerType))
    }),
    nB = en("ZodCustom", (e, t) => {
      ;(t2.init(e, t),
        r3.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          rn(e, t, r, n, "Custom types cannot be represented in JSON Schema")
        }))
    }),
    nq = require("node:crypto"),
    nX = require("node:fs"),
    nG = require("node:fs/promises")
  var nH = f.n(nG)
  let nY = ".codex-desktop-live.json",
    nQ = nP({
      version: new nT({ type: "literal", values: Array.isArray(1) ? 1 : [1], ...I(void 0) }),
      sourceVersion: r7().min(1),
    })
  async function n0(e) {
    let t = (0, p.join)(e, nY)
    try {
      let e = await nH().lstat(t)
      if (!e.isFile()) return !1
      let r = await nH().open(
        t,
        nX.constants.O_RDONLY | (nX.constants.O_NOFOLLOW ?? 0) | (nX.constants.O_NONBLOCK ?? 0),
      )
      try {
        if (!n1(e, await r.stat())) return !1
        return nQ.safeParse(JSON.parse(await r.readFile("utf8"))).success
      } finally {
        await r.close()
      }
    } catch (e) {
      if (n4(e) || e instanceof SyntaxError) return !1
      throw e
    }
  }
  function n1(e, t) {
    return e.dev === t.dev && e.ino === t.ino && e.birthtimeMs === t.birthtimeMs
  }
  function n4(e) {
    return e instanceof Error && "code" in e && ("ENOENT" === e.code || "ENOTDIR" === e.code || "ELOOP" === e.code)
  }
  ;((async () => {
    let e = nP({ codexHome: r7().refine(p.isAbsolute) }).parse(JSON.parse(process.argv[2] ?? "null")),
      t = !1
    ;((t =
      (await (async function (e) {
        let t = process.cwd(),
          r = !1
        try {
          for (let t of await (async function (e) {
            let t = (0, p.join)(e, "plugins/cache/openai-curated-remote/visualize")
            try {
              if ("" !== (0, p.relative)(t, await nH().realpath(t))) return []
              let e = await nH().readdir(t, { withFileTypes: !0 })
              return (
                await Promise.all(
                  e
                    .filter((e) => e.isDirectory() && /^[a-zA-Z0-9][a-zA-Z0-9_+.-]*$/.test(e.name))
                    .map(async ({ name: e }) => {
                      let r = (0, p.join)(t, e, "skills"),
                        n = (0, p.join)(r, "live")
                      try {
                        if (
                          "" === (0, p.relative)(n, await nH().realpath(n)) &&
                          (await nH().lstat((0, p.join)(n, nY))).isFile()
                        )
                          return r
                      } catch (e) {
                        if (!n4(e)) throw e
                      }
                      return null
                    }),
                )
              ).filter((e) => null != e)
            } catch (e) {
              if (n4(e)) return []
              throw e
            }
          })(e))
            try {
              r =
                (await (async function (e) {
                  let t = await nH().lstat(e)
                  if (
                    !t.isDirectory() ||
                    "" !== (0, p.relative)(e, await nH().realpath(e)) ||
                    (process.chdir(e), !n1(t, await nH().lstat(".")))
                  )
                    return !1
                  let r = await nH().lstat("live")
                  if (!r.isDirectory() || !(await n0("live"))) return !1
                  let n = (0, p.join)("..", `.codex-desktop-live-retired-${(0, nq.randomUUID)()}`)
                  return (
                    !!n1(r, await nH().lstat("live")) &&
                    ((await nH().rename("live", n), n1(r, await nH().lstat(n)) && (await n0(n)))
                      ? (await nH().rm(n, { recursive: !0 }), !0)
                      : ((await nH()
                          .lstat("live")
                          .catch((e) => {
                            if (n4(e)) return null
                            throw e
                          })) || (await nH().rename(n, "live")),
                        !1))
                  )
                })(t)) || r
            } catch (e) {
              if (!n4(e)) throw e
            }
          return r
        } finally {
          process.chdir(t)
        }
      })(e.codexHome)) || t),
      process.stdout.write(`${JSON.stringify({ changed: t })}
`))
  })().catch((e) => {
    ;(process.stderr.write(`${e instanceof Error ? (e.stack ?? e.message) : String(e)}
`),
      (process.exitCode = 1))
  }),
    (module.exports = {}))
})()
//# sourceMappingURL=visualize-cache-worker.js.map
