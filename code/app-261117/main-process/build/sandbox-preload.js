;(() => {
  "use strict"
  let e,
    t,
    r,
    n,
    i,
    s,
    o,
    a,
    l,
    u,
    c,
    p = require("electron"),
    d = [
      "navigate",
      "notifyMcpAppsHostContext",
      "notifyMcpAppsToolCancelled",
      "notifyMcpAppsToolInput",
      "notifyMcpAppsToolResult",
      "requestMcpAppsResourceTeardown",
      "runWidgetCode",
      "setAdditionalGlobals",
      "setSafeArea",
      "setTheme",
      "setWidgetData",
      "setWidgetView",
    ],
    h = [
      ...d,
      "applyAutofillCandidate",
      "getCurrentPath",
      "notifyMcpAppsMcpNotification",
      "prepareEnvironment",
      "runUserCode",
      "screenshot",
      "stop",
    ]
  function f(e) {
    if (null == e) return null
    try {
      return new URL(e)
    } catch {
      return null
    }
  }
  let m = Symbol("workers-module")
  ;(Symbol.dispose || (Symbol.dispose = Symbol.for("dispose")),
    Symbol.asyncDispose || (Symbol.asyncDispose = Symbol.for("asyncDispose")),
    Promise.withResolvers ||
      (Promise.withResolvers = function () {
        let e, t
        return {
          promise: new Promise((r, n) => {
            ;((e = r), (t = n))
          }),
          resolve: e,
          reject: t,
        }
      }))
  let y = globalThis[m],
    g = y ? y.RpcTarget : class {},
    b = async function () {}.constructor,
    v = "u" > typeof Buffer ? Buffer.prototype : void 0
  function w(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
        return "primitive"
      case "undefined":
        return "undefined"
      case "object":
      case "function":
        break
      case "bigint":
        return "bigint"
      default:
        return "unsupported"
    }
    if (null === e) return "primitive"
    let t = Object.getPrototypeOf(e)
    switch (t) {
      case Object.prototype:
        return "object"
      case Function.prototype:
      case b.prototype:
        return "function"
      case Array.prototype:
        return "array"
      case Date.prototype:
        return "date"
      case Uint8Array.prototype:
      case v:
      case ArrayBuffer.prototype:
      case DataView.prototype:
      case Int8Array.prototype:
      case Uint8ClampedArray.prototype:
      case Int16Array.prototype:
      case Uint16Array.prototype:
      case Int32Array.prototype:
      case Uint32Array.prototype:
      case BigInt64Array.prototype:
      case BigUint64Array.prototype:
      case Float32Array.prototype:
      case Float64Array.prototype:
        return "bytes"
      case WritableStream.prototype:
        return "writable"
      case ReadableStream.prototype:
        return "readable"
      case URL.prototype:
        return "url"
      case Headers.prototype:
        return "headers"
      case Request.prototype:
        return "request"
      case Response.prototype:
        return "response"
      case Blob.prototype:
        return "blob"
      case $.prototype:
        return "stub"
      case I.prototype:
        return "rpc-promise"
      default:
        if (y) {
          if (t == y.RpcStub.prototype || e instanceof y.ServiceStub) return "rpc-target"
          else if (t == y.RpcPromise.prototype || t == y.RpcProperty.prototype) return "rpc-thenable"
        }
        if (e instanceof g) return "rpc-target"
        if (e instanceof Error) return "error"
        return "unsupported"
    }
  }
  function _() {
    throw Error("RPC map() implementation was not loaded.")
  }
  let k = { applyMap: _, sendMap: _ }
  function z() {
    throw Error("Stream implementation was not loaded.")
  }
  let S = { createWritableStreamHook: z, createWritableStreamFromHook: z, createReadableStreamHook: z }
  var x,
    P,
    R = class {
      stream(e, t) {
        let r,
          n = this.call(e, t).pull()
        return (
          n instanceof Promise
            ? (r = n.then((e) => {
                e.dispose()
              }))
            : (n.dispose(), (r = Promise.resolve())),
          { promise: r }
        )
      }
    },
    E = class extends R {
      error
      constructor(e) {
        ;(super(), (this.error = e))
      }
      call(e, t) {
        return this
      }
      map(e, t, r) {
        return this
      }
      get(e) {
        return this
      }
      dup() {
        return this
      }
      pull() {
        return Promise.reject(this.error)
      }
      ignoreUnhandledRejections() {}
      dispose() {}
      onBroken(e) {
        try {
          e(this.error)
        } catch (e) {
          Promise.resolve(e)
        }
      }
    }
  let O = new E(Error("Attempted to use RPC stub after it has been disposed.")),
    A = (e, t, r) => e.call(t, r),
    T = Symbol("realStub"),
    j = {
      apply(e, t, r) {
        let n = e.raw
        return new I(A(n.hook, n.pathIfPromise || [], B.fromAppParams(r)), [])
      },
      get(e, t, r) {
        let n = e.raw
        return t === T
          ? n
          : t in I.prototype
            ? n[t]
            : "string" == typeof t
              ? new I(n.hook, n.pathIfPromise ? [...n.pathIfPromise, t] : [t])
              : t !== Symbol.dispose || (n.pathIfPromise && 0 != n.pathIfPromise.length)
                ? void 0
                : () => {
                    ;(n.hook.dispose(), (n.hook = O))
                  }
      },
      has(e, t) {
        let r = e.raw
        return (
          t === T ||
          (t in I.prototype
            ? t in r
            : "string" == typeof t || (t === Symbol.dispose && (!r.pathIfPromise || 0 == r.pathIfPromise.length)) || !1)
        )
      },
      construct(e, t) {
        throw Error("An RPC stub cannot be used as a constructor.")
      },
      defineProperty(e, t, r) {
        throw Error("Can't define properties on RPC stubs.")
      },
      deleteProperty(e, t) {
        throw Error("Can't delete properties on RPC stubs.")
      },
      getOwnPropertyDescriptor(e, t) {},
      getPrototypeOf: (e) => Object.getPrototypeOf(e.raw),
      isExtensible: (e) => !1,
      ownKeys: (e) => [],
      preventExtensions: (e) => !0,
      set(e, t, r, n) {
        throw Error("Can't assign properties on RPC stubs.")
      },
      setPrototypeOf(e, t) {
        throw Error("Can't override prototype of RPC stubs.")
      },
    }
  var $ = class e extends g {
      static setMessagePortServiceName(t, r) {
        if (!(t instanceof e)) return
        let n = C(t)
        if (!(n instanceof en) || !n.entry) return
        let i = n.entry
        ;(null != r && (i.session.hasMessagePortServices = !0),
          void 0 === i.messagePortService
            ? (i.messagePortService = null != r ? { service: r } : null)
            : i.messagePortService?.service !== r && (i.messagePortService = null))
      }
      constructor(e, t) {
        if ((super(), !(e instanceof R))) {
          let r = e
          if (((e = r instanceof g || r instanceof Function ? F.create(r, void 0) : new D(B.fromAppReturn(r))), t))
            throw TypeError("RpcStub constructor expected one argument, received two.")
        }
        ;((this.hook = e), (this.pathIfPromise = t))
        let r = () => {}
        return ((r.raw = this), new Proxy(r, j))
      }
      hook
      pathIfPromise
      dup() {
        let t = this[T]
        return new e(t.pathIfPromise ? t.hook.get(t.pathIfPromise) : t.hook.dup())
      }
      onRpcBroken(e) {
        this[T].hook.onBroken(e)
      }
      map(e) {
        let { hook: t, pathIfPromise: r } = this[T]
        return k.sendMap(t, r || [], e)
      }
      toString() {
        return "[object RpcStub]"
      }
    },
    I = class extends $ {
      constructor(e, t) {
        super(e, t)
      }
      then(e, t) {
        return U(this).then(...arguments)
      }
      catch(e) {
        return U(this).catch(...arguments)
      }
      finally(e) {
        return U(this).finally(...arguments)
      }
      toString() {
        return "[object RpcPromise]"
      }
    }
  function C(e) {
    let { hook: t, pathIfPromise: r } = e[T]
    if (!r || !(r.length > 0)) return t
  }
  async function U(e) {
    let { hook: t, pathIfPromise: r } = e[T]
    return (r.length > 0 && (t = t.get(r)), (await t.pull()).deliverResolve())
  }
  var B = class e {
    value
    source
    hooks
    promises
    static fromAppParams(t) {
      return new e(t, "params")
    }
    static fromAppReturn(t) {
      return new e(t, "return")
    }
    static fromArray(t) {
      let r = [],
        n = [],
        i = []
      for (let e of t) {
        for (let t of (e.ensureDeepCopied(), e.hooks)) r.push(t)
        for (let t of e.promises)
          (t.parent === e && (t = { parent: i, property: i.length, promise: t.promise }), n.push(t))
        i.push(e.value)
      }
      return new e(i, "owned", r, n)
    }
    static forEvaluate(t, r) {
      return new e(null, "owned", t, r)
    }
    static deepCopyFrom(t, r, n) {
      let i = new e(null, "owned", [], [])
      return ((i.value = i.deepCopy(t, r, "value", i, !0, n)), i)
    }
    constructor(e, t, r, n) {
      ;((this.value = e), (this.source = t), (this.hooks = r), (this.promises = n))
    }
    rpcTargets
    getHookForRpcTarget(e, t, r = !0) {
      if ("params" === this.source) {
        if (r) {
          let t = e
          "function" == typeof t.dup && (e = t.dup())
        }
        return F.create(e, t)
      }
      if ("return" === this.source) {
        let n = this.rpcTargets?.get(e)
        if (n)
          if (r) return n.dup()
          else return (this.rpcTargets?.delete(e), n)
        return ((n = F.create(e, t)), r)
          ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, n), n.dup())
          : n
      }
      throw Error("owned payload shouldn't contain raw RpcTargets")
    }
    getHookForWritableStream(e, t, r = !0) {
      if ("params" === this.source) return S.createWritableStreamHook(e)
      if ("return" === this.source) {
        let t = this.rpcTargets?.get(e)
        if (t)
          if (r) return t.dup()
          else return (this.rpcTargets?.delete(e), t)
        return ((t = S.createWritableStreamHook(e)), r)
          ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, t), t.dup())
          : t
      }
      throw Error("owned payload shouldn't contain raw WritableStreams")
    }
    getHookForReadableStream(e, t, r = !0) {
      if ("params" === this.source) return S.createReadableStreamHook(e)
      if ("return" === this.source) {
        let t = this.rpcTargets?.get(e)
        if (t)
          if (r) return t.dup()
          else return (this.rpcTargets?.delete(e), t)
        return ((t = S.createReadableStreamHook(e)), r)
          ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, t), t.dup())
          : t
      }
      throw Error("owned payload shouldn't contain raw ReadableStreams")
    }
    deepCopy(e, t, r, n, i, s) {
      switch (w(e)) {
        case "unsupported":
        case "primitive":
        case "bigint":
        case "date":
        case "bytes":
        case "blob":
        case "url":
        case "error":
        case "undefined":
          return e
        case "array": {
          let t = e.length,
            r = Array(t)
          for (let n = 0; n < t; n++) r[n] = this.deepCopy(e[n], e, n, r, i, s)
          return r
        }
        case "object": {
          let t = {}
          for (let r in e) t[r] = this.deepCopy(e[r], e, r, t, i, s)
          return t
        }
        case "stub":
        case "rpc-promise": {
          let t
          if (
            ((t = i
              ? (function (e) {
                  let { hook: t, pathIfPromise: r } = e[T]
                  return r ? t.get(r) : t.dup()
                })(e)
              : (function (e) {
                  let { hook: t, pathIfPromise: r } = e[T]
                  return r && r.length > 0 ? t.get(r) : t
                })(e)),
            !(e instanceof I))
          )
            return (this.hooks.push(t), new $(t))
          {
            let e = new I(t, [])
            return (this.promises.push({ parent: n, property: r, promise: e }), e)
          }
        }
        case "function":
        case "rpc-target": {
          let r
          return ((r = s ? s.getHookForRpcTarget(e, t, i) : F.create(e, t)), this.hooks.push(r), new $(r))
        }
        case "rpc-thenable": {
          let o
          return (
            (o = s ? new I(s.getHookForRpcTarget(e, t, i), []) : new I(F.create(e, t), [])),
            this.promises.push({ parent: n, property: r, promise: o }),
            o
          )
        }
        case "writable": {
          let r
          return ((r = s ? s.getHookForWritableStream(e, t, i) : S.createWritableStreamHook(e)), this.hooks.push(r), e)
        }
        case "readable": {
          let r
          return ((r = s ? s.getHookForReadableStream(e, t, i) : S.createReadableStreamHook(e)), this.hooks.push(r), e)
        }
        case "headers":
          return new Headers(e)
        case "request":
          return (e.body && this.deepCopy(e.body, e, "body", e, i, s), new Request(e))
        case "response":
          return (e.body && this.deepCopy(e.body, e, "body", e, i, s), new Response(e.body, e))
        default:
          throw Error("unreachable")
      }
    }
    ensureDeepCopied() {
      if ("owned" !== this.source) {
        let e = "params" === this.source
        ;((this.hooks = []), (this.promises = []))
        try {
          this.value = this.deepCopy(this.value, void 0, "value", this, e, this)
        } catch (e) {
          throw ((this.hooks = void 0), (this.promises = void 0), e)
        }
        if (((this.source = "owned"), this.rpcTargets && this.rpcTargets.size > 0))
          throw Error("Not all rpcTargets were accounted for in deep-copy?")
        this.rpcTargets = void 0
      }
    }
    deliverTo(t, r, n) {
      if ((this.ensureDeepCopied(), this.value instanceof I)) e.deliverRpcPromiseTo(this.value, t, r, n)
      else for (let i of ((t[r] = this.value), this.promises)) e.deliverRpcPromiseTo(i.promise, i.parent, i.property, n)
    }
    static deliverRpcPromiseTo(t, r, n, i) {
      let s = C(t)
      if (!s) throw Error("property promises should have been resolved earlier")
      let o = s.pull()
      o instanceof e
        ? o.deliverTo(r, n, i)
        : i.push(
            o.then((e) => {
              let t = []
              if ((e.deliverTo(r, n, t), t.length > 0)) return Promise.all(t)
            }),
          )
    }
    async deliverCall(t, r) {
      try {
        let n = []
        ;(this.deliverTo(this, "value", n), n.length > 0 && (await Promise.all(n)))
        let i = Function.prototype.apply.call(t, r, this.value)
        if (i instanceof I) return e.fromAppReturn(i)
        return e.fromAppReturn(await i)
      } finally {
        this.dispose()
      }
    }
    async deliverStreamWrite(t) {
      try {
        let r = []
        ;(this.deliverTo(this, "value", r), r.length > 0 && (await Promise.all(r)))
        let n = this.value[0]
        if ((this.hooks.length > 0 || this.promises.length > 0) && n instanceof Object)
          return (
            Symbol.dispose in n ||
              Object.defineProperty(n, Symbol.dispose, {
                value: () => this.dispose(),
                writable: !0,
                enumerable: !1,
                configurable: !0,
              }),
            await t.write(n),
            e.fromAppReturn(void 0)
          )
        return (await t.write(n), this.dispose(), e.fromAppReturn(void 0))
      } catch (e) {
        throw (this.dispose(), e)
      }
    }
    async deliverResolve() {
      try {
        let e = []
        ;(this.deliverTo(this, "value", e), e.length > 0 && (await Promise.all(e)))
        let t = this.value
        return (
          t instanceof Object &&
            !(Symbol.dispose in t) &&
            Object.defineProperty(t, Symbol.dispose, {
              value: () => this.dispose(),
              writable: !0,
              enumerable: !1,
              configurable: !0,
            }),
          t
        )
      } catch (e) {
        throw (this.dispose(), e)
      }
    }
    dispose() {
      if ("owned" === this.source)
        (this.hooks.forEach((e) => e.dispose()), this.promises.forEach((e) => e.promise[Symbol.dispose]()))
      else if (
        "return" === this.source &&
        (this.disposeImpl(this.value, void 0), this.rpcTargets && this.rpcTargets.size > 0)
      )
        throw Error("Not all rpcTargets were accounted for in disposeImpl()?")
      ;((this.source = "owned"), (this.hooks = []), (this.promises = []))
    }
    disposeImpl(e, t) {
      switch (w(e)) {
        case "unsupported":
        case "primitive":
        case "bigint":
        case "bytes":
        case "blob":
        case "date":
        case "url":
        case "error":
        case "undefined":
        case "rpc-thenable":
        case "headers":
        default:
          return
        case "array": {
          let t = e.length
          for (let r = 0; r < t; r++) this.disposeImpl(e[r], e)
          return
        }
        case "object":
          for (let t in e) this.disposeImpl(e[t], e)
          return
        case "stub":
        case "rpc-promise": {
          let t = C(e)
          t && t.dispose()
          return
        }
        case "function":
        case "rpc-target": {
          let t = this.rpcTargets?.get(e)
          t ? (t.dispose(), this.rpcTargets.delete(e)) : L(e)
          return
        }
        case "request":
        case "response":
          e.body && this.disposeImpl(e.body, e)
          return
        case "writable": {
          let t = this.rpcTargets?.get(e)
          ;(t ? this.rpcTargets.delete(e) : (t = S.createWritableStreamHook(e)), t.dispose())
          return
        }
        case "readable": {
          let t = this.rpcTargets?.get(e)
          ;(t ? this.rpcTargets.delete(e) : (t = S.createReadableStreamHook(e)), t.dispose())
          return
        }
      }
    }
    ignoreUnhandledRejections() {
      this.hooks
        ? (this.hooks.forEach((e) => {
            e.ignoreUnhandledRejections()
          }),
          this.promises.forEach((e) => e.promise[T].hook.ignoreUnhandledRejections()))
        : this.ignoreUnhandledRejectionsImpl(this.value)
    }
    ignoreUnhandledRejectionsImpl(e) {
      switch (w(e)) {
        case "unsupported":
        case "primitive":
        case "bigint":
        case "bytes":
        case "blob":
        case "date":
        case "error":
        case "undefined":
        case "function":
        case "rpc-target":
        case "writable":
        case "readable":
        case "url":
        case "headers":
        case "request":
        case "response":
        default:
          return
        case "array": {
          let t = e.length
          for (let r = 0; r < t; r++) this.ignoreUnhandledRejectionsImpl(e[r])
          return
        }
        case "object":
          for (let t in e) this.ignoreUnhandledRejectionsImpl(e[t])
          return
        case "stub":
        case "rpc-promise":
          e[T].hook.ignoreUnhandledRejections()
          return
        case "rpc-thenable":
          e.then(
            (e) => {},
            (e) => {},
          )
          return
      }
    }
  }
  function M(e, t, r, n) {
    for (let i = 0; i < r.length; i++) {
      t = e
      let s = r[i]
      if (s in Object.prototype) {
        e = void 0
        continue
      }
      switch (w(e)) {
        case "object":
        case "function":
          e = Object.hasOwn(e, s) ? e[s] : void 0
          break
        case "array":
          e = Number.isInteger(s) && s >= 0 ? e[s] : void 0
          break
        case "rpc-target":
        case "rpc-thenable":
          if (Object.hasOwn(e, s))
            throw TypeError(
              `Attempted to access property '${s}', which is an instance property of the RpcTarget. To avoid leaking private internals, instance properties cannot be accessed over RPC. If you want to make this property available over RPC, define it as a method or getter on the class, instead of an instance property.`,
            )
          ;((e = e[s]), (n = null))
          break
        case "stub":
        case "rpc-promise": {
          let { hook: t, pathIfPromise: n } = e[T]
          return { hook: t, remainingPath: n ? n.concat(r.slice(i)) : r.slice(i) }
        }
        case "writable":
        case "readable":
        case "primitive":
        case "bigint":
        case "bytes":
        case "blob":
        case "date":
        case "error":
        case "url":
        case "headers":
        case "request":
        case "response":
          e = void 0
          break
        case "undefined":
          e = e[s]
          break
        case "unsupported":
          if (0 === i) throw TypeError("RPC stub points at a non-serializable type.")
          {
            let e = r.slice(0, i).join("."),
              t = r.slice(0, i).join(".")
            throw TypeError(`'${e}' is not a serializable type, so property ${t} cannot be accessed.`)
          }
        default:
          throw TypeError("unreachable")
      }
    }
    if (e instanceof I) {
      let { hook: t, pathIfPromise: r } = e[T]
      return { hook: t, remainingPath: r || [] }
    }
    return { value: e, parent: t, owner: n }
  }
  var N = class extends R {
      call(e, t) {
        try {
          let { value: r, owner: n } = this.getValue(),
            i = M(r, void 0, e, n)
          if (i.hook) return i.hook.call(i.remainingPath, t)
          if ("function" != typeof i.value) throw TypeError(`'${e.join(".")}' is not a function.`)
          return new Z(t.deliverCall(i.value, i.parent).then((e) => new D(e)))
        } catch (e) {
          return new E(e)
        }
      }
      map(e, t, r) {
        try {
          let n
          try {
            let { value: t, owner: r } = this.getValue()
            n = M(t, void 0, e, r)
          } catch (e) {
            for (let e of t) e.dispose()
            throw e
          }
          if (n.hook) return n.hook.map(n.remainingPath, t, r)
          return k.applyMap(n.value, n.parent, n.owner, t, r)
        } catch (e) {
          return new E(e)
        }
      }
      get(e) {
        try {
          let { value: t, owner: r } = this.getValue()
          if (0 === e.length && null === r) throw Error("Can't dup an RpcTarget stub as a promise.")
          let n = M(t, void 0, e, r)
          if (n.hook) return n.hook.get(n.remainingPath)
          return new D(B.deepCopyFrom(n.value, n.parent, n.owner))
        } catch (e) {
          return new E(e)
        }
      }
    },
    D = class e extends N {
      constructor(e) {
        ;(super(), (this.payload = e))
      }
      payload
      getPayload() {
        if (this.payload) return this.payload
        throw Error("Attempted to use an RPC StubHook after it was disposed.")
      }
      getValue() {
        let e = this.getPayload()
        return { value: e.value, owner: e }
      }
      dup() {
        let t = this.getPayload()
        return new e(B.deepCopyFrom(t.value, void 0, t))
      }
      pull() {
        return this.getPayload()
      }
      ignoreUnhandledRejections() {
        this.payload && this.payload.ignoreUnhandledRejections()
      }
      dispose() {
        this.payload && (this.payload.dispose(), (this.payload = void 0))
      }
      onBroken(e) {
        this.payload && this.payload.value instanceof $ && this.payload.value.onRpcBroken(e)
      }
    }
  function L(e) {
    if (Symbol.dispose in e)
      try {
        e[Symbol.dispose]()
      } catch (e) {
        Promise.reject(e)
      }
  }
  var F = class e extends N {
      static create(t, r) {
        return ("function" != typeof t && (r = void 0), new e(t, r))
      }
      constructor(e, t, r) {
        ;(super(),
          (this.target = e),
          (this.parent = t),
          r
            ? r.refcount && ((this.refcount = r.refcount), ++this.refcount.count)
            : Symbol.dispose in e && (this.refcount = { count: 1 }))
      }
      target
      parent
      refcount
      getTarget() {
        if (this.target) return this.target
        throw Error("Attempted to use an RPC StubHook after it was disposed.")
      }
      getValue() {
        return { value: this.getTarget(), owner: null }
      }
      dup() {
        return new e(this.getTarget(), this.parent, this)
      }
      pull() {
        let e = this.getTarget()
        return "then" in e
          ? Promise.resolve(e).then((e) => B.fromAppReturn(e))
          : Promise.reject(Error("Tried to resolve a non-promise stub."))
      }
      ignoreUnhandledRejections() {}
      dispose() {
        this.target && (this.refcount && 0 == --this.refcount.count && L(this.target), (this.target = void 0))
      }
      onBroken(e) {}
    },
    Z = class e extends R {
      promise
      resolution
      constructor(e) {
        ;(super(), (this.promise = e.then((e) => ((this.resolution = e), e))))
      }
      call(t, r) {
        return (r.ensureDeepCopied(), new e(this.promise.then((e) => e.call(t, r))))
      }
      stream(e, t) {
        return (t.ensureDeepCopied(), { promise: this.promise.then((r) => r.stream(e, t).promise) })
      }
      map(t, r, n) {
        return new e(
          this.promise.then(
            (e) => e.map(t, r, n),
            (e) => {
              for (let e of r) e.dispose()
              throw e
            },
          ),
        )
      }
      get(t) {
        return new e(this.promise.then((e) => e.get(t)))
      }
      dup() {
        return this.resolution ? this.resolution.dup() : new e(this.promise.then((e) => e.dup()))
      }
      pull() {
        return this.resolution ? this.resolution.pull() : this.promise.then((e) => e.pull())
      }
      ignoreUnhandledRejections() {
        this.resolution
          ? this.resolution.ignoreUnhandledRejections()
          : this.promise.then(
              (e) => {
                e.ignoreUnhandledRejections()
              },
              (e) => {},
            )
      }
      dispose() {
        this.resolution
          ? this.resolution.dispose()
          : this.promise.then(
              (e) => {
                e.dispose()
              },
              (e) => {},
            )
      }
      onBroken(e) {
        this.resolution
          ? this.resolution.onBroken(e)
          : this.promise.then((t) => {
              t.onBroken(e)
            }, e)
      }
    }
  let J = { maxBigIntDigits: 16384, maxDepth: 256, maxMessageSize: 0x2000000 },
    W = 1 === new Uint8Array(new Uint16Array([1]).buffer)[0],
    H = [
      "ArrayBuffer",
      "DataView",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Float32Array",
      "Float64Array",
    ],
    V = {
      ArrayBuffer: void 0,
      DataView: void 0,
      Int8Array: void 0,
      Uint8Array: void 0,
      Uint8ClampedArray: void 0,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      BigInt64Array: 8,
      BigUint64Array: 8,
      Float32Array: 4,
      Float64Array: 8,
    },
    q = {
      ArrayBuffer: ArrayBuffer.prototype,
      DataView: DataView.prototype,
      Int8Array: Int8Array.prototype,
      Uint8ClampedArray: Uint8ClampedArray.prototype,
      Int16Array: Int16Array.prototype,
      Uint16Array: Uint16Array.prototype,
      Int32Array: Int32Array.prototype,
      Uint32Array: Uint32Array.prototype,
      BigInt64Array: BigInt64Array.prototype,
      BigUint64Array: BigUint64Array.prototype,
      Float32Array: Float32Array.prototype,
      Float64Array: Float64Array.prototype,
    },
    K = new Map()
  for (let e of Object.keys(q)) K.set(q[e], e)
  function G(e, t) {
    if (2 !== t && 4 !== t && 8 !== t) throw RangeError(`Unsupported element size: ${t}`)
    let r = new DataView(e.buffer, e.byteOffset, e.byteLength)
    for (let n = 0; n < e.byteLength; n += t)
      switch (t) {
        case 2:
          r.setUint16(n, r.getUint16(n, !1), !0)
          break
        case 4:
          r.setUint32(n, r.getUint32(n, !1), !0)
          break
        case 8:
          r.setBigUint64(n, r.getBigUint64(n, !1), !0)
      }
  }
  let Q = new (class {
      exportStub(e) {
        throw Error("Cannot serialize RPC stubs without an RPC session.")
      }
      exportPromise(e) {
        throw Error("Cannot serialize RPC stubs without an RPC session.")
      }
      getImport(e) {}
      unexport(e) {}
      createPipe(e) {
        throw Error("Cannot create pipes without an RPC session.")
      }
      onSendError(e) {}
    })(),
    X = {
      __proto__: null,
      Error,
      EvalError,
      RangeError,
      ReferenceError,
      SyntaxError,
      TypeError,
      URIError,
      AggregateError,
    }
  var Y = class e {
      exporter
      source
      encodingLevel
      constructor(e, t, r) {
        ;((this.exporter = e), (this.source = t), (this.encodingLevel = r))
      }
      static devaluate(t, r, n = Q, i, s = "string", o) {
        let a = new e(n, i, s)
        a.messageOrigin = o
        try {
          return a.devaluateImpl(t, r, 0)
        } catch (e) {
          if (a.exports)
            try {
              n.unexport(a.exports)
            } catch (e) {}
          throw e
        }
      }
      exports
      devaluateImpl(e, t, r) {
        if (r >= 256) throw Error("Serialization exceeded maximum allowed depth. (Does the message contain cycles?)")
        switch (w(e)) {
          case "unsupported": {
            let t
            try {
              t = `Cannot serialize value: ${e}`
            } catch (e) {
              t = "Cannot serialize value: (couldn't stringify value)"
            }
            throw TypeError(t)
          }
          case "primitive":
            if ("number" != typeof e || isFinite(e) || "structuredClonable" === this.encodingLevel) return e
            if (1 / 0 === e) return ["inf"]
            if (-1 / 0 === e) return ["-inf"]
            return ["nan"]
          case "object": {
            let t = {}
            for (let n in e) t[n] = this.devaluateImpl(e[n], e, r + 1)
            return t
          }
          case "array": {
            let t = e.length,
              n = Array(t)
            for (let i = 0; i < t; i++) n[i] = this.devaluateImpl(e[i], e, r + 1)
            return [n]
          }
          case "bigint":
            if ("structuredClonable" === this.encodingLevel) return e
            return ["bigint", e.toString()]
          case "date": {
            if ("structuredClonable" === this.encodingLevel) return e
            let t = e.getTime()
            return ["date", Number.isNaN(t) ? null : t]
          }
          case "bytes": {
            let t,
              r,
              n = K.get(Object.getPrototypeOf(e))
            if ("ArrayBuffer" === n) t = new Uint8Array(e)
            else if (void 0 === n) t = e
            else {
              t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
              let r = V[n]
              !W && r && G((t = t.slice()), r)
            }
            if ("structuredClonable" === this.encodingLevel || "jsonCompatibleWithBytes" === this.encodingLevel)
              return void 0 === n ? ["bytes", t] : ["bytes", t, n]
            if (t.toBase64) r = t.toBase64({ omitPadding: !0 })
            else if ("u" > typeof Buffer)
              r = (t instanceof Buffer ? t : Buffer.from(t.buffer, t.byteOffset, t.byteLength)).toString("base64")
            else {
              let e = ""
              for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r])
              r = btoa(e)
            }
            return ((r = r.replace(/=+$/, "")), void 0 === n ? ["bytes", r] : ["bytes", r, n])
          }
          case "url":
            return ["url", e.href]
          case "headers":
            return ["headers", [...e]]
          case "request": {
            let t = {}
            "GET" !== e.method && (t.method = e.method)
            let n = [...e.headers]
            if ((n.length > 0 && (t.headers = n), e.body))
              ((t.body = this.devaluateImpl(e.body, e, r + 1)), (t.duplex = e.duplex || "half"))
            else if (void 0 === e.body && !["GET", "HEAD", "OPTIONS", "TRACE", "DELETE"].includes(e.method)) {
              let r = e.arrayBuffer(),
                n = new ReadableStream({
                  async start(e) {
                    try {
                      ;(e.enqueue(new Uint8Array(await r)), e.close())
                    } catch (t) {
                      e.error(t)
                    }
                  },
                }),
                i = S.createReadableStreamHook(n)
              ;((t.body = ["readable", this.exporter.createPipe(n, i)]), (t.duplex = e.duplex || "half"))
            }
            return (
              e.cache && "default" !== e.cache && (t.cache = e.cache),
              "follow" !== e.redirect && (t.redirect = e.redirect),
              e.integrity && (t.integrity = e.integrity),
              e.mode && "cors" !== e.mode && (t.mode = e.mode),
              e.credentials && "same-origin" !== e.credentials && (t.credentials = e.credentials),
              e.referrer && "about:client" !== e.referrer && (t.referrer = e.referrer),
              e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
              e.keepalive && (t.keepalive = e.keepalive),
              e.cf && (t.cf = e.cf),
              e.encodeResponseBody &&
                "automatic" !== e.encodeResponseBody &&
                (t.encodeResponseBody = e.encodeResponseBody),
              ["request", e.url, t]
            )
          }
          case "response": {
            let t = this.devaluateImpl(e.body, e, r + 1),
              n = {}
            ;(200 !== e.status && (n.status = e.status), e.statusText && (n.statusText = e.statusText))
            let i = [...e.headers]
            if (
              (i.length > 0 && (n.headers = i),
              e.cf && (n.cf = e.cf),
              e.encodeBody && "automatic" !== e.encodeBody && (n.encodeBody = e.encodeBody),
              e.webSocket)
            )
              throw TypeError("Can't serialize a Response containing a webSocket.")
            return ["response", t, n]
          }
          case "blob": {
            let t = e.stream(),
              r = S.createReadableStreamHook(t),
              n = this.exporter.createPipe(t, r)
            return ["blob", e.type, ["readable", n]]
          }
          case "error": {
            let t,
              n = e,
              i = this.exporter.onSendError(n)
            i && (n = i)
            let s = n,
              o = (e, i) => {
                let s = this.exports?.length ?? 0
                try {
                  let s = this.devaluateImpl(i, n, r + 1)
                  ;(t || (t = {}), (t[e] = s))
                } catch (e) {
                  if (this.exports && this.exports.length > s) {
                    let e = this.exports.splice(s)
                    try {
                      this.exporter.unexport(e)
                    } catch (e) {}
                  }
                }
              }
            for (let e of Object.keys(n)) "name" !== e && "message" !== e && "stack" !== e && o(e, s[e])
            ;("cause" in n && o("cause", s.cause), n instanceof AggregateError && o("errors", n.errors))
            let a = ["error", n.name, n.message]
            return (t ? (a.push(i && i.stack ? i.stack : null), a.push(t)) : i && i.stack && a.push(i.stack), a)
          }
          case "undefined":
            if ("structuredClonable" === this.encodingLevel) return
            return ["undefined"]
          case "stub":
          case "rpc-promise": {
            if (!this.source) throw Error("Can't serialize RPC stubs in this context.")
            let { hook: t, pathIfPromise: r } = e[T],
              n = this.exporter.getImport(t)
            if (void 0 !== n)
              if (!r) return ["import", n]
              else if (r.length > 0) return ["pipeline", n, r]
              else return ["pipeline", n]
            return ((t = r ? t.get(r) : t.dup()), this.devaluateHook(r ? "promise" : "export", t))
          }
          case "function":
          case "rpc-target": {
            if (!this.source) throw Error("Can't serialize RPC stubs in this context.")
            let r = this.source.getHookForRpcTarget(e, t)
            return this.devaluateHook("export", r)
          }
          case "rpc-thenable": {
            if (!this.source) throw Error("Can't serialize RPC stubs in this context.")
            let r = this.source.getHookForRpcTarget(e, t)
            return this.devaluateHook("promise", r)
          }
          case "writable": {
            if (!this.source) throw Error("Can't serialize WritableStream in this context.")
            let r = this.source.getHookForWritableStream(e, t)
            return this.devaluateHook("writable", r)
          }
          case "readable": {
            if (!this.source) throw Error("Can't serialize ReadableStream in this context.")
            let r = this.source.getHookForReadableStream(e, t)
            return ["readable", this.exporter.createPipe(e, r)]
          }
          default:
            throw Error("unreachable")
        }
      }
      devaluateHook(e, t) {
        this.exports || (this.exports = [])
        let r = "promise" === e ? this.exporter.exportPromise(t) : this.exporter.exportStub(t, this.messageOrigin)
        return (this.exports.push(r), [e, r])
      }
    },
    ee = class e {
      importer
      encodingLevel
      limits
      constructor(e, t = "string", r) {
        ;((this.messageOrigin = r), (this.importer = e), (this.encodingLevel = t), (this.limits = e.getLimits()))
      }
      hooks = []
      promises = []
      evaluate(e) {
        return this.evaluateWithDepth(e, 0)
      }
      evaluateWithDepth(e, t) {
        let r = B.forEvaluate(this.hooks, this.promises)
        try {
          return ((r.value = this.evaluateImpl(e, r, "value", t)), r)
        } catch (e) {
          throw (r.dispose(), e)
        }
      }
      evaluateCopy(e) {
        return this.evaluate(structuredClone(e))
      }
      evaluateImpl(t, r, n, i) {
        let s = this.limits.maxDepth
        if (i >= s) throw TypeError(`Deserialization exceeded maximum allowed message depth of ${s}.`)
        if ("structuredClonable" === this.encodingLevel && (t instanceof Date || "bigint" == typeof t)) return t
        if (t instanceof Array) {
          var o
          if (1 == t.length && t[0] instanceof Array) {
            let e = t[0]
            for (let t = 0; t < e.length; t++) e[t] = this.evaluateImpl(e[t], e, t, i + 1)
            return e
          }
          switch (t[0]) {
            case "bigint":
              if ("string" == typeof t[1]) {
                let e = t[1],
                  r = this.limits.maxBigIntDigits
                if (e.length > r) throw TypeError(`Deserialized bigint exceeds maximum length of ${r} digits.`)
                return BigInt(e)
              }
              break
            case "date":
              if (null === t[1]) return new Date(0 / 0)
              if ("number" == typeof t[1]) return new Date(t[1])
              break
            case "bytes": {
              let e
              if (t[1] instanceof Uint8Array) e = t[1]
              else if ("string" == typeof t[1])
                if ("u" > typeof Buffer) e = Buffer.from(t[1], "base64")
                else if (Uint8Array.fromBase64) e = Uint8Array.fromBase64(t[1])
                else {
                  let r = atob(t[1]),
                    n = r.length
                  e = new Uint8Array(n)
                  for (let t = 0; t < n; t++) e[t] = r.charCodeAt(t)
                }
              else break
              if (2 === t.length) return e
              if ("string" != typeof t[2]) throw TypeError(`Unknown bytes type marker type: ${typeof t[2]}`)
              if (((o = t[2]), !H.includes(o))) {
                let e = t[2].slice(0, 64)
                throw TypeError(`Unknown bytes type marker: ${e}`)
              }
              let r = t[2],
                n = V[r]
              if (void 0 !== n && e.byteLength % n != 0)
                throw TypeError(`Invalid byte length ${e.byteLength} for ${r}; expected a multiple of ${n}`)
              let i = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
              switch ((!W && void 0 !== n && G(new Uint8Array(i), n), r)) {
                case "ArrayBuffer":
                  return i
                case "DataView":
                  return new DataView(i)
                case "Int8Array":
                  return new Int8Array(i)
                case "Uint8Array":
                  return new Uint8Array(i)
                case "Uint8ClampedArray":
                  return new Uint8ClampedArray(i)
                case "Int16Array":
                  return new Int16Array(i)
                case "Uint16Array":
                  return new Uint16Array(i)
                case "Int32Array":
                  return new Int32Array(i)
                case "Uint32Array":
                  return new Uint32Array(i)
                case "BigInt64Array":
                  return new BigInt64Array(i)
                case "BigUint64Array":
                  return new BigUint64Array(i)
                case "Float32Array":
                  return new Float32Array(i)
                case "Float64Array":
                  return new Float64Array(i)
              }
            }
            case "error":
              if (t.length >= 3 && "string" == typeof t[1] && "string" == typeof t[2]) {
                let e = X[t[1]] || Error,
                  r = e === AggregateError ? new e([], t[2]) : new e(t[2])
                if (("string" == typeof t[3] && (r.stack = t[3]), t.length >= 5)) {
                  let e = t[4]
                  if (!e || "object" != typeof e || Array.isArray(e)) break
                  for (let t of Object.keys(e))
                    if ("name" !== t && "message" !== t && "stack" !== t) {
                      if (t in Object.prototype || "toJSON" === t) {
                        this.evaluateImpl(e[t], r, t, i + 1)
                        continue
                      }
                      r[t] = this.evaluateImpl(e[t], r, t, i + 1)
                    }
                }
                return r
              }
              break
            case "undefined":
              if (1 === t.length) return
              break
            case "inf":
              return 1 / 0
            case "-inf":
              return -1 / 0
            case "nan":
              return 0 / 0
            case "url":
              if (2 === t.length && "string" == typeof t[1]) return new URL(t[1])
              break
            case "headers":
              if (2 === t.length && t[1] instanceof Array) return new Headers(t[1])
              break
            case "request": {
              if (3 !== t.length || "string" != typeof t[1]) break
              let e = t[1],
                s = t[2]
              if ("object" != typeof s || null === s) break
              if (s.body)
                if (
                  ((s.body = this.evaluateImpl(s.body, s, "body", i + 1)),
                  null === s.body ||
                    "string" == typeof s.body ||
                    s.body instanceof Uint8Array ||
                    s.body instanceof ReadableStream)
                );
                else throw TypeError("Request body must be of type ReadableStream.")
              if (
                s.signal &&
                ((s.signal = this.evaluateImpl(s.signal, s, "signal", i + 1)), !(s.signal instanceof AbortSignal))
              )
                throw TypeError("Request siganl must be of type AbortSignal.")
              if (s.headers && !(s.headers instanceof Array))
                throw TypeError("Request headers must be serialized as an array of pairs.")
              let o = new Request(e, s)
              if (!(s.body instanceof ReadableStream) || void 0 !== o.body) return o
              {
                let e = new I(
                  new Z(
                    new Response(s.body).arrayBuffer().then((e) => {
                      let t = new Request(o, { body: new Uint8Array(e) })
                      return new D(B.fromAppReturn(t))
                    }),
                  ),
                  [],
                )
                return (this.promises.push({ promise: e, parent: r, property: n }), e)
              }
            }
            case "response": {
              if (3 !== t.length) break
              let e = this.evaluateImpl(t[1], r, n, i + 1)
              if (null === e || "string" == typeof e || e instanceof Uint8Array || e instanceof ReadableStream);
              else throw TypeError("Response body must be of type ReadableStream.")
              let s = t[2]
              if ("object" != typeof s || null === s) break
              if (s.webSocket) throw TypeError("Can't deserialize a Response containing a webSocket.")
              if (s.headers && !(s.headers instanceof Array))
                throw TypeError("Request headers must be serialized as an array of pairs.")
              return new Response(e, s)
            }
            case "blob": {
              if (3 !== t.length || "string" != typeof t[1]) break
              let e = t[1],
                s = this.evaluateImpl(t[2], r, n, i + 1)
              if (!(s instanceof ReadableStream))
                throw TypeError("Blob content must be serialized as a ReadableStream.")
              let o = new I(
                new Z(
                  (async function (e, t) {
                    let r = await new Response(e).blob()
                    return r.type === t ? r : r.slice(0, r.size, t)
                  })(s, e).then((e) => new D(B.fromAppReturn(e))),
                ),
                [],
              )
              return (this.promises.push({ promise: o, parent: r, property: n }), o)
            }
            case "import":
            case "pipeline": {
              if (t.length < 2 || t.length > 4 || "number" != typeof t[1]) break
              let s = this.importer.getExport(t[1])
              if (!s) throw Error(`no such entry on exports table: ${t[1]}`)
              let o = "pipeline" == t[0],
                a = (e) => {
                  if (!o) return (this.hooks.push(e), new I(e, []))
                  {
                    let t = new I(e, [])
                    return (this.promises.push({ promise: t, parent: r, property: n }), t)
                  }
                }
              if (2 == t.length)
                if (o) return a(s.get([]))
                else return a(s.dup())
              let l = t[2]
              if (!(l instanceof Array) || !l.every((e) => "string" == typeof e || "number" == typeof e)) break
              if (3 == t.length) return a(s.get(l))
              let u = t[3]
              if (!(u instanceof Array)) break
              return ((u = new e(this.importer).evaluateWithDepth([u], i)), a(s.call(l, u)))
            }
            case "remap": {
              if (
                5 !== t.length ||
                "number" != typeof t[1] ||
                !(t[2] instanceof Array) ||
                !(t[3] instanceof Array) ||
                !(t[4] instanceof Array)
              )
                break
              let e = this.importer.getExport(t[1])
              if (!e) throw Error(`no such entry on exports table: ${t[1]}`)
              let i = t[2]
              if (!i.every((e) => "string" == typeof e || "number" == typeof e)) break
              let s = t[3].map((e) => {
                  if (
                    !(e instanceof Array) ||
                    2 !== e.length ||
                    ("import" !== e[0] && "export" !== e[0]) ||
                    "number" != typeof e[1]
                  )
                    throw TypeError(`unknown map capture: ${JSON.stringify(e)}`)
                  if ("export" === e[0]) return this.importer.importStub(e[1])
                  {
                    let t = this.importer.getExport(e[1])
                    if (!t) throw Error(`no such entry on exports table: ${e[1]}`)
                    return t.dup()
                  }
                }),
                o = t[4],
                a = new I(e.map(i, s, o), [])
              return (this.promises.push({ promise: a, parent: r, property: n }), a)
            }
            case "export":
            case "promise":
              if ("number" == typeof t[1])
                if ("promise" == t[0]) {
                  let e = new I(this.importer.importPromise(t[1]), [])
                  return (this.promises.push({ parent: r, property: n, promise: e }), e)
                } else {
                  let e = this.importer.importStub(t[1])
                  return (this.hooks.push(e), new $(e))
                }
              break
            case "writable":
              if ("number" == typeof t[1]) {
                let e = this.importer.importStub(t[1]),
                  r = S.createWritableStreamFromHook(e)
                return (this.hooks.push(e), r)
              }
              break
            case "readable":
              if ("number" == typeof t[1]) {
                let e = this.importer.getPipeReadable(t[1], this.messageOrigin),
                  r = S.createReadableStreamHook(e)
                return (this.hooks.push(r), e)
              }
          }
          throw TypeError(`unknown special value: ${JSON.stringify(t)}`)
        }
        if (!(t instanceof Object)) return t
        for (let e in t)
          e in Object.prototype || "toJSON" === e
            ? (this.evaluateImpl(t[e], t, e, i + 1), delete t[e])
            : (t[e] = this.evaluateImpl(t[e], t, e, i + 1))
        return t
      }
    }
  function et(e) {
    return 2 + 3 * e.length
  }
  var er = class {
      session
      importId
      constructor(e, t, r) {
        ;((this.session = e), (this.importId = t), r && (this.activePull = Promise.withResolvers()))
      }
      localRefcount = 0
      remoteRefcount = 1
      activePull
      resolution
      onBrokenRegistrations
      resolve(e) {
        if (0 == this.localRefcount) return void e.dispose()
        if (((this.resolution = e), this.sendRelease(), this.onBrokenRegistrations)) {
          for (let t of this.onBrokenRegistrations) {
            let { callback: r, index: n } = t,
              i = this.session.onBrokenCallbacks.length
            e.onBroken(r)
            let s = this.session.onBrokenCallbacks[i]
            s?.callback === r
              ? ((s.index = n), (this.session.onBrokenCallbacks[n] = s), delete this.session.onBrokenCallbacks[i])
              : delete this.session.onBrokenCallbacks[n]
          }
          this.onBrokenRegistrations = void 0
        }
        this.activePull && (this.activePull.resolve(), (this.activePull = void 0))
      }
      async awaitResolution() {
        return (
          this.activePull || (this.session.sendPull(this.importId), (this.activePull = Promise.withResolvers())),
          await this.activePull.promise,
          this.resolution.pull()
        )
      }
      dispose() {
        this.resolution
          ? this.resolution.dispose()
          : (this.abort(Error("RPC was canceled because the RpcPromise was disposed.")), this.sendRelease())
      }
      abort(e) {
        if (
          !this.resolution &&
          ((this.resolution = new E(e)),
          this.activePull && (this.activePull.reject(e), (this.activePull = void 0)),
          this.onBrokenRegistrations)
        ) {
          for (let e of this.onBrokenRegistrations) delete this.session.onBrokenCallbacks[e.index]
          this.onBrokenRegistrations = void 0
        }
      }
      onBroken(e) {
        if (this.resolution) this.resolution.onBroken(e)
        else {
          let t = { callback: e, index: this.session.onBrokenCallbacks.length }
          ;(this.session.onBrokenCallbacks.push(t),
            this.onBrokenRegistrations || (this.onBrokenRegistrations = []),
            this.onBrokenRegistrations.push(t))
        }
      }
      sendRelease() {
        this.remoteRefcount > 0 &&
          (this.session.sendRelease(this.importId, this.remoteRefcount), (this.remoteRefcount = 0))
      }
    },
    en = class e extends R {
      isPromise
      entry
      constructor(e, t) {
        ;(super(), (this.isPromise = e), ++t.localRefcount, (this.entry = t))
      }
      collectPath(e) {
        return this
      }
      getEntry() {
        if (this.entry) return this.entry
        throw Error("This RpcImportHook was already disposed.")
      }
      call(e, t) {
        let r = this.getEntry()
        return r.resolution ? r.resolution.call(e, t) : r.session.sendCall(r.importId, e, t)
      }
      stream(e, t) {
        let r = this.getEntry()
        return r.resolution ? r.resolution.stream(e, t) : r.session.sendStream(r.importId, e, t)
      }
      map(e, t, r) {
        let n
        try {
          n = this.getEntry()
        } catch (e) {
          for (let e of t) e.dispose()
          throw e
        }
        return n.resolution ? n.resolution.map(e, t, r) : n.session.sendMap(n.importId, e, t, r)
      }
      get(e) {
        let t = this.getEntry()
        return t.resolution ? t.resolution.get(e) : t.session.sendCall(t.importId, e)
      }
      dup() {
        return new e(!1, this.getEntry())
      }
      pull() {
        let e = this.getEntry()
        if (!this.isPromise) throw Error("Can't pull this hook because it's not a promise hook.")
        return e.resolution ? e.resolution.pull() : e.awaitResolution()
      }
      ignoreUnhandledRejections() {}
      dispose() {
        let e = this.entry
        ;((this.entry = void 0), e && 0 == --e.localRefcount && e.dispose())
      }
      onBroken(e) {
        this.entry && this.entry.onBroken(e)
      }
    },
    ei = class extends en {
      session
      constructor(e) {
        ;(super(!1, e), (this.session = e.session))
      }
      dispose() {
        if (this.session) {
          let e = this.session
          ;((this.session = void 0), e.shutdown())
        }
      }
    },
    es = class {
      transport
      options
      exports = []
      reverseExports = new Map()
      imports = []
      abortReason
      cancelReadLoop
      nextExportId = -1
      onBatchDone
      pullCount = 0
      onBrokenCallbacks = []
      encodingLevel
      limits
      constructor(e, t, r) {
        ;((this.transport = e), (this.options = r))
        let n = "string"
        if ("encodingLevel" in e) {
          let t = e.encodingLevel
          if (void 0 !== t) {
            if (
              "string" !== t &&
              "jsonCompatible" !== t &&
              "jsonCompatibleWithBytes" !== t &&
              "structuredClonable" !== t
            )
              throw TypeError(`Unknown transport encodingLevel: ${String(t)}`)
            n = t
          }
        }
        ;((this.encodingLevel = n),
          (this.limits = { ...J, ...r.limits }),
          this.exports.push({ hook: t, refcount: 1 }),
          this.imports.push(new er(this, 0, !1)),
          this.readLoop().catch((e) => this.abort(e)))
      }
      getMainImport() {
        return new ei(this.imports[0])
      }
      shutdown() {
        this.abort(Error("RPC session was shut down by disposing the main stub"), !1)
      }
      exportStub(e, t) {
        if (this.abortReason) throw this.abortReason
        let r = this.reverseExports.get(e)
        if (void 0 !== r) {
          let e = this.exports[r],
            n = e.messageOrigin
          return (
            n && n.service !== t?.service
              ? (e.messageOrigin = void 0)
              : n?.method !== void 0 && n.method !== t?.method && (e.messageOrigin = { service: n.service }),
            ++e.refcount,
            r
          )
        }
        {
          let r = this.nextExportId--
          return (
            (this.exports[r] = { hook: e, refcount: 1 }),
            t && (this.exports[r].messageOrigin = t),
            this.reverseExports.set(e, r),
            r
          )
        }
      }
      exportPromise(e) {
        if (this.abortReason) throw this.abortReason
        let t = this.nextExportId--
        return (
          (this.exports[t] = { hook: e, refcount: 1 }),
          this.reverseExports.set(e, t),
          this.ensureResolvingExport(t),
          t
        )
      }
      unexport(e) {
        for (let t of e) this.releaseExport(t, 1)
      }
      releaseExport(e, t) {
        let r = this.exports[e]
        if (!r) throw Error(`no such export ID: ${e}`)
        if (r.refcount < t) throw Error(`refcount would go negative: ${r.refcount} < ${t}`)
        ;((r.refcount -= t),
          0 === r.refcount && (delete this.exports[e], this.reverseExports.delete(r.hook), r.hook.dispose()))
      }
      onSendError(e) {
        if (this.options.onSendError) return this.options.onSendError(e)
      }
      ensureResolvingExport(e) {
        let t = this.exports[e]
        if (!t) throw Error(`no such export ID: ${e}`)
        if (!t.pull) {
          let r = async () => {
              let e = t.hook
              for (;;) {
                let t = await e.pull()
                if (t.value instanceof $) {
                  let { hook: r, pathIfPromise: n } = t.value[T]
                  if (n && 0 == n.length && void 0 === this.getImport(e)) {
                    e = r
                    continue
                  }
                }
                return t
              }
            },
            n = t.autoRelease
          ;(++this.pullCount,
            (t.pull = r()
              .then(
                (t) => {
                  let r = Y.devaluate(t.value, void 0, this, t, this.encodingLevel)
                  ;(this.send(["resolve", e, r]), n && this.releaseExport(e, 1))
                },
                (t) => {
                  ;(this.send(["reject", e, Y.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                    n && this.releaseExport(e, 1))
                },
              )
              .catch((t) => {
                try {
                  ;(this.send(["reject", e, Y.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                    n && this.releaseExport(e, 1))
                } catch (e) {
                  this.abort(e)
                }
              })
              .finally(() => {
                0 == --this.pullCount && this.onBatchDone && this.onBatchDone.resolve()
              })))
        }
      }
      getImport(e) {
        return e instanceof en && e.entry && e.entry.session === this ? e.entry.importId : void 0
      }
      importStub(e) {
        if (this.abortReason) throw this.abortReason
        let t = this.imports[e]
        return (t || ((t = new er(this, e, !1)), (this.imports[e] = t)), new en(!1, t))
      }
      importPromise(e) {
        if (this.abortReason) throw this.abortReason
        if (this.imports[e])
          return new E(Error("Bug in RPC system: The peer sent a promise reusing an existing export ID."))
        let t = new er(this, e, !0)
        return ((this.imports[e] = t), new en(!0, t))
      }
      getExport(e) {
        return this.exports[e]?.hook
      }
      getPipeReadable(e, t) {
        let r = this.exports[e]
        if (!r || !r.pipeReadable) throw Error(`Export ${e} is not a pipe or its readable end was already consumed.`)
        t && (r.messageOrigin = t)
        let n = r.pipeReadable
        return ((r.pipeReadable = void 0), n)
      }
      getLimits() {
        return this.limits
      }
      createPipe(e, t) {
        if (this.abortReason) throw this.abortReason
        this.send(["pipe"])
        let r = this.imports.length,
          n = new er(this, r, !1)
        this.imports.push(n)
        let i = new en(!1, n),
          s = S.createWritableStreamFromHook(i)
        return (
          e
            .pipeTo(s)
            .catch(() => {})
            .finally(() => t.dispose()),
          r
        )
      }
      send(e) {
        if (void 0 !== this.abortReason) return 0
        if ("string" === this.encodingLevel) {
          let t
          try {
            t = JSON.stringify(e)
          } catch (e) {
            try {
              this.abort(e)
            } catch (e) {}
            throw e
          }
          try {
            let e = this.transport.send(t)
            void 0 !== e && "function" == typeof e.catch && e.catch((e) => this.abort(e, !1))
          } catch (e) {
            queueMicrotask(() => this.abort(e, !1))
          }
          return t.length
        }
        try {
          let t = this.transport.send(e)
          if ("number" == typeof t) return t
          t && "function" == typeof t.then && Promise.resolve(t).catch((e) => this.abort(e, !1))
          return
        } catch (e) {
          queueMicrotask(() => this.abort(e, !1))
          return
        }
      }
      sendCall(e, t, r) {
        if (this.abortReason) throw this.abortReason
        let n = this.imports[e]?.messagePortService,
          i =
            n && this.options.onMessagePortRead && 1 === t.length && this.options.messagePortReadMethods?.has(t[0])
              ? { service: n.service, method: t[0] }
              : n,
          s = ["pipeline", e, t]
        if (r) {
          let e = Y.devaluate(r.value, void 0, this, r, this.encodingLevel, i)
          s.push(e[0])
        }
        this.send(["push", s])
        let o = new er(this, this.imports.length, !1)
        return (i && (o.messageOrigin = i), this.imports.push(o), new en(!0, o))
      }
      sendStream(e, t, r) {
        if (this.abortReason) throw this.abortReason
        let n = ["pipeline", e, t],
          i = Y.devaluate(r.value, void 0, this, r, this.encodingLevel)
        n.push(i[0])
        let s = ["stream", n],
          o = this.send(s)
        void 0 === o &&
          (o = (function e(t, r, n = 0) {
            if (n >= 64) return 8
            switch (typeof t) {
              case "string":
                return et(t)
              case "number":
              case "bigint":
              case "undefined":
              default:
                return 16
              case "boolean":
                return 8
              case "object": {
                if (null === t) return 8
                if (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) return 16 + t.byteLength
                if ("u" > typeof Blob && t instanceof Blob) return 16 + t.size
                if (t instanceof Date) return 16
                if ((r ??= new WeakSet()).has(t)) return 8
                if ((r.add(t), t instanceof Array)) {
                  let i = 16
                  for (let s of t) i += 8 + e(s, r, n + 1)
                  return i
                }
                if (t instanceof Error) {
                  let i = 16 + et(t.name) + et(t.message) + et(t.stack ?? "")
                  for (let s of Object.keys(t)) i += 8 + et(s) + e(t[s], r, n + 1)
                  return i
                }
                let i = 16
                for (let s of Object.keys(t)) i += 8 + et(s) + e(t[s], r, n + 1)
                return i
              }
            }
          })(s))
        let a = this.imports.length,
          l = new er(this, a, !0)
        return (
          (l.remoteRefcount = 0),
          (l.localRefcount = 1),
          this.imports.push(l),
          {
            promise: l.awaitResolution().then(
              (e) => {
                ;(e.dispose(), delete this.imports[a])
              },
              (e) => {
                throw (delete this.imports[a], e)
              },
            ),
            size: o,
          }
        )
      }
      sendMap(e, t, r, n) {
        if (this.abortReason) {
          for (let e of r) e.dispose()
          throw this.abortReason
        }
        let i = [
          "remap",
          e,
          t,
          r.map((e) => {
            let t = this.getImport(e)
            return void 0 !== t ? ["import", t] : ["export", this.exportStub(e)]
          }),
          n,
        ]
        this.send(["push", i])
        let s = new er(this, this.imports.length, !1)
        return (this.imports.push(s), new en(!0, s))
      }
      sendPull(e) {
        if (this.abortReason) throw this.abortReason
        this.send(["pull", e])
      }
      sendRelease(e, t) {
        this.abortReason || (this.send(["release", e, t]), delete this.imports[e])
      }
      abort(e, t = !0) {
        if (void 0 === this.abortReason) {
          if ((this.cancelReadLoop?.(e), (this.cancelReadLoop = void 0), t))
            try {
              let t = ["abort", Y.devaluate(e, void 0, this, void 0, this.encodingLevel)]
              if ("string" === this.encodingLevel) {
                let e = this.transport.send(JSON.stringify(t))
                void 0 !== e && "function" == typeof e.catch && e.catch((e) => {})
              } else {
                let e = this.transport.send(t)
                e && "function" == typeof e.then && Promise.resolve(e).catch((e) => {})
              }
            } catch (e) {}
          if (
            (void 0 === e && (e = "undefined"),
            (this.abortReason = e),
            this.onBatchDone && this.onBatchDone.reject(e),
            this.transport.abort)
          )
            try {
              this.transport.abort(e)
            } catch (e) {
              Promise.resolve(e)
            }
          for (let t of Object.values(this.onBrokenCallbacks))
            try {
              t.callback(e)
            } catch (e) {
              Promise.resolve(e)
            }
          for (let t in this.imports) this.imports[t].abort(e)
          for (let e in this.exports) this.exports[e].hook.dispose()
        }
      }
      async readLoop() {
        for (; !this.abortReason;) {
          let e,
            t = Promise.withResolvers()
          this.cancelReadLoop = t.reject
          try {
            e = await Promise.race([this.transport.receive(), t.promise])
          } finally {
            this.cancelReadLoop === t.reject && (this.cancelReadLoop = void 0)
          }
          if ("string" === this.encodingLevel && e.length > this.limits.maxMessageSize)
            throw TypeError(`Incoming message exceeds maximum size of ${this.limits.maxMessageSize} UTF-16 code units.`)
          if (this.abortReason) break
          let r = "string" === this.encodingLevel ? JSON.parse(e) : e
          if (r instanceof Array)
            switch (r[0]) {
              case "push":
                if (r.length > 1) {
                  let e = new D(new ee(this, this.encodingLevel).evaluate(r[1]))
                  ;(e.ignoreUnhandledRejections(), this.exports.push({ hook: e, refcount: 1 }))
                  continue
                }
                break
              case "stream":
                if (r.length > 1) {
                  let e = new D(new ee(this, this.encodingLevel).evaluate(r[1]))
                  e.ignoreUnhandledRejections()
                  let t = this.exports.length
                  ;(this.exports.push({ hook: e, refcount: 1, autoRelease: !0 }), this.ensureResolvingExport(t))
                  continue
                }
                break
              case "pipe": {
                let { readable: e, writable: t } = new TransformStream(),
                  r = S.createWritableStreamHook(t)
                this.exports.push({ hook: r, refcount: 1, pipeReadable: e })
                continue
              }
              case "pull": {
                let e = r[1]
                if ("number" == typeof e) {
                  this.ensureResolvingExport(e)
                  continue
                }
                break
              }
              case "resolve":
              case "reject": {
                let e = r[1]
                if ("number" == typeof e && r.length > 2) {
                  let t = this.imports[e]
                  if (t)
                    if ("resolve" == r[0]) {
                      let e = new ee(this, this.encodingLevel, t.messageOrigin).evaluate(r[2])
                      ;(this.hasMessagePortServices &&
                        Array.isArray(r[2]) &&
                        "export" === r[2][0] &&
                        $.setMessagePortServiceName(e.value, t.messageOrigin?.service ?? null),
                        t.resolve(new D(e)))
                    } else {
                      let e = new ee(this, this.encodingLevel).evaluate(r[2])
                      ;(e.dispose(), t.resolve(new E(e.value)))
                    }
                  else "resolve" == r[0] && new ee(this, this.encodingLevel).evaluate(r[2]).dispose()
                  continue
                }
                break
              }
              case "release": {
                let e = r[1],
                  t = r[2]
                if ("number" == typeof e && "number" == typeof t) {
                  this.releaseExport(e, t)
                  continue
                }
                break
              }
              case "abort": {
                let e = new ee(this, this.encodingLevel).evaluate(r[1])
                ;(e.dispose(), this.abort(e.value, !1))
              }
            }
          throw Error(`bad RPC message: ${JSON.stringify(r)}`)
        }
      }
      async drain() {
        if (this.abortReason) throw this.abortReason
        if (this.pullCount > 0) {
          let { promise: e, resolve: t, reject: r } = Promise.withResolvers()
          ;((this.onBatchDone = { resolve: t, reject: r }), await e)
        }
      }
      getStats() {
        let e = { imports: 0, exports: 0 }
        for (let t in this.imports) ++e.imports
        for (let t in this.exports) ++e.exports
        return e
      }
    },
    eo = class {
      #e
      #t
      constructor(e, t, r = {}) {
        let n
        ;((n = t ? new D(B.fromAppReturn(t)) : new E(Error("This connection has no main object."))),
          (this.#e = new es(e, n, r)),
          (this.#t = new $(this.#e.getMainImport())))
      }
      messagePortReadOrigin(e) {
        if (Array.isArray(e)) {
          if (("resolve" === e[0] || "reject" === e[0]) && "number" == typeof e[1])
            return this.#e.imports[e[1]]?.messageOrigin
          if (("pull" === e[0] || "release" === e[0]) && "number" == typeof e[1])
            return this.#e.exports[e[1]]?.messageOrigin
          if (
            ("push" === e[0] || "stream" === e[0]) &&
            Array.isArray(e[1]) &&
            "pipeline" === e[1][0] &&
            "number" == typeof e[1][1]
          )
            return this.#e.exports[e[1][1]]?.messageOrigin
        }
      }
      getRemoteMain() {
        return this.#t
      }
      getStats() {
        return this.#e.getStats()
      }
      drain() {
        return this.#e.drain()
      }
    },
    ea = class {
      encodingLevel = "structuredClonable"
      constructor(e, t) {
        ;((this.#r = e),
          e.start(),
          e.addEventListener("message", (e) => {
            if (this.#n) return
            let r = t?.onMessagePortRead,
              n = r ? performance.now() : 0,
              i = e.data,
              s = r ? performance.now() : 0
            ;(null === i
              ? this.#i(Error("Peer closed MessagePort connection."))
              : this.#s
                ? (this.#s(i), (this.#s = void 0), (this.#o = void 0))
                : this.#a.push(i),
              r?.(i, n, s, this.readOrigin(i)))
          }),
          e.addEventListener("messageerror", (e) => {
            this.#i(Error("MessagePort message error."))
          }))
      }
      #r
      #s
      #o
      #a = []
      #n
      send(e) {
        if (this.#n) throw this.#n
        this.#r.postMessage(e)
      }
      async receive() {
        if (this.#a.length > 0) return this.#a.shift()
        if (!this.#n)
          return new Promise((e, t) => {
            ;((this.#s = e), (this.#o = t))
          })
        throw this.#n
      }
      abort(e) {
        try {
          this.#r.postMessage(null)
        } catch (e) {}
        ;(this.#r.close(), this.#n || (this.#n = e))
      }
      #i(e) {
        !this.#n && ((this.#n = e), this.#o && (this.#o(e), (this.#s = void 0), (this.#o = void 0)))
      }
    },
    el = class {
      context
      captureMap = new Map()
      instructions = []
      constructor(t, r) {
        ;(e
          ? (this.context = { parent: e, captures: [], subject: e.capture(t), path: r })
          : (this.context = { parent: void 0, captures: [], subject: t, path: r }),
          (e = this))
      }
      unregister() {
        e = this.context.parent
      }
      makeInput() {
        return new ec(this, 0)
      }
      makeOutput(e) {
        let t
        try {
          t = Y.devaluate(e.value, void 0, this, e)
        } finally {
          e.dispose()
        }
        return (this.instructions.push(t), this.context.parent)
          ? (this.context.parent.instructions.push([
              "remap",
              this.context.subject,
              this.context.path,
              this.context.captures.map((e) => ["import", e]),
              this.instructions,
            ]),
            new ec(this.context.parent, this.context.parent.instructions.length))
          : this.context.subject.map(this.context.path, this.context.captures, this.instructions)
      }
      pushCall(e, t, r) {
        let n = Y.devaluate(r.value, void 0, this, r)
        n = n[0]
        let i = this.capture(e.dup())
        return (this.instructions.push(["pipeline", i, t, n]), new ec(this, this.instructions.length))
      }
      pushGet(e, t) {
        let r = this.capture(e.dup())
        return (this.instructions.push(["pipeline", r, t]), new ec(this, this.instructions.length))
      }
      capture(e) {
        if (e instanceof ec && e.mapper === this) return e.idx
        let t = this.captureMap.get(e)
        if (void 0 === t) {
          if (this.context.parent) {
            let t = this.context.parent.capture(e)
            this.context.captures.push(t)
          } else this.context.captures.push(e)
          ;((t = -this.context.captures.length), this.captureMap.set(e, t))
        }
        return t
      }
      exportStub(e) {
        throw Error(
          "Can't construct an RpcTarget or RPC callback inside a mapper function. Try creating a new RpcStub outside the callback first, then using it inside the callback.",
        )
      }
      exportPromise(e) {
        return this.exportStub(e)
      }
      getImport(e) {
        return this.capture(e)
      }
      unexport(e) {}
      createPipe(e) {
        throw Error("Cannot send ReadableStream inside a mapper function.")
      }
      onSendError(e) {}
    }
  function eu() {
    throw Error(
      "Attempted to use an abstract placeholder from a mapper function. Please make sure your map function has no side effects.",
    )
  }
  k.sendMap = (e, t, r) => {
    let n,
      i = new el(e, t)
    try {
      n = B.fromAppReturn(
        (function (e, t) {
          let r = A
          A = e
          try {
            return t()
          } finally {
            A = r
          }
        })(i.pushCall.bind(i), () => r(new I(i.makeInput(), []))),
      )
    } finally {
      i.unregister()
    }
    if (n instanceof Promise) throw (n.catch((e) => {}), Error("RPC map() callbacks cannot be async."))
    return new I(i.makeOutput(n), [])
  }
  var ec = class extends R {
      mapper
      idx
      constructor(e, t) {
        ;(super(), (this.mapper = e), (this.idx = t))
      }
      dup() {
        return this
      }
      dispose() {}
      get(t) {
        return 0 == t.length ? this : e ? e.pushGet(this, t) : void eu()
      }
      call(e, t) {
        eu()
      }
      map(e, t, r) {
        eu()
      }
      pull() {
        eu()
      }
      ignoreUnhandledRejections() {}
      onBroken(e) {
        eu()
      }
    },
    ep = class {
      captures
      variables
      constructor(e, t) {
        ;((this.captures = e), (this.variables = [t]))
      }
      dispose() {
        for (let e of this.variables) e.dispose()
      }
      apply(e) {
        try {
          if (e.length < 1) throw Error("Invalid empty mapper function.")
          for (let t of e.slice(0, -1)) {
            let e = new ee(this).evaluateCopy(t)
            if (e.value instanceof $) {
              let t = C(e.value)
              if (t) {
                this.variables.push(t)
                continue
              }
            }
            this.variables.push(new D(e))
          }
          return new ee(this).evaluateCopy(e[e.length - 1])
        } finally {
          for (let e of this.variables) e.dispose()
        }
      }
      importStub(e) {
        throw Error("A mapper function cannot refer to exports.")
      }
      importPromise(e) {
        return this.importStub(e)
      }
      getExport(e) {
        return e < 0 ? this.captures[-e - 1] : this.variables[e]
      }
      getPipeReadable(e) {
        throw Error("A mapper function cannot use pipe readables.")
      }
      getLimits() {
        return J
      }
    }
  function ed(e, t, r, n, i) {
    let s = new ep(n, new D(B.deepCopyFrom(e, t, r)))
    try {
      return s.apply(i)
    } finally {
      s.dispose()
    }
  }
  k.applyMap = (e, t, r, n, i) => {
    try {
      let s
      if (e instanceof I) throw Error("applyMap() can't be called on RpcPromise")
      if (e instanceof Array) {
        let t = []
        try {
          for (let s of e) t.push(ed(s, e, r, n, i))
        } catch (e) {
          for (let e of t) e.dispose()
          throw e
        }
        s = B.fromArray(t)
      } else s = null == e ? B.fromAppReturn(e) : ed(e, t, r, n, i)
      return new D(s)
    } finally {
      for (let e of n) e.dispose()
    }
  }
  var eh = class {
      now
      window = 262144
      bytesInFlight = 0
      inStartupPhase = !0
      delivered = 0
      deliveredTime = 0
      firstAckTime = 0
      firstAckDelivered = 0
      minRtt = 1 / 0
      roundsWithoutIncrease = 0
      lastRoundWindow = 0
      roundStartTime = 0
      constructor(e) {
        this.now = e
      }
      onSend(e) {
        this.bytesInFlight += e
        let t = {
          sentTime: this.now(),
          size: e,
          deliveredAtSend: this.delivered,
          deliveredTimeAtSend: this.deliveredTime,
          windowAtSend: this.window,
          windowFullAtSend: this.bytesInFlight >= this.window,
        }
        return { token: t, shouldBlock: t.windowFullAtSend }
      }
      onError(e) {
        this.bytesInFlight -= e.size
      }
      onAck(e) {
        let t = this.now()
        ;((this.delivered += e.size), (this.deliveredTime = t), (this.bytesInFlight -= e.size))
        let r = t - e.sentTime
        if (((this.minRtt = Math.min(this.minRtt, r)), 0 === this.firstAckTime))
          ((this.firstAckTime = t), (this.firstAckDelivered = this.delivered))
        else {
          let r, n
          0 === e.deliveredTimeAtSend
            ? ((r = this.firstAckTime), (n = this.firstAckDelivered))
            : ((r = e.deliveredTimeAtSend), (n = e.deliveredAtSend))
          let i = t - r,
            s = (this.delivered - n) / i,
            o = this.inStartupPhase ? 2 : 1.25,
            a = s * this.minRtt * o
          ;((a = Math.min(a, e.windowAtSend * o)),
            (a = e.windowFullAtSend ? Math.max(a, 0.9 * e.windowAtSend) : Math.max(a, this.window)),
            (this.window = Math.max(Math.min(a, 0x40000000), 65536)),
            this.inStartupPhase &&
              e.sentTime >= this.roundStartTime &&
              (this.window > 1.25 * this.lastRoundWindow
                ? (this.roundsWithoutIncrease = 0)
                : ++this.roundsWithoutIncrease >= 3 && (this.inStartupPhase = !1),
              (this.roundStartTime = t),
              (this.lastRoundWindow = this.window)))
        }
        return this.bytesInFlight < this.window
      }
    },
    ef = class e extends R {
      state
      static create(t) {
        return new e({ refcount: 1, stream: t, canceled: !1 })
      }
      constructor(e, t) {
        ;(super(), (this.state = e), t && ++e.refcount)
      }
      call(e, t) {
        return (t.dispose(), new E(Error("Cannot call methods on a ReadableStream stub")))
      }
      map(e, t, r) {
        for (let e of t) e.dispose()
        return new E(Error("Cannot use map() on a ReadableStream"))
      }
      get(e) {
        return new E(Error("Cannot access properties on a ReadableStream stub"))
      }
      dup() {
        let t = this.state
        if (!t) throw Error("Attempted to dup a ReadableStreamStubHook after it was disposed.")
        return new e(t, this)
      }
      pull() {
        return Promise.reject(Error("Cannot pull a ReadableStream stub"))
      }
      ignoreUnhandledRejections() {}
      dispose() {
        let e = this.state
        ;((this.state = void 0),
          e &&
            0 == --e.refcount &&
            !e.canceled &&
            ((e.canceled = !0),
            e.stream.locked ||
              e.stream.cancel(Error("ReadableStream RPC stub was disposed without being consumed")).catch(() => {})))
      }
      onBroken(e) {}
    }
  ;((S.createWritableStreamHook = class e extends R {
    state
    static create(t) {
      return new e({ refcount: 1, writer: t.getWriter(), closed: !1 })
    }
    constructor(e, t) {
      ;(super(), (this.state = e), t && ++e.refcount)
    }
    getState() {
      if (this.state) return this.state
      throw Error("Attempted to use a WritableStreamStubHook after it was disposed.")
    }
    call(e, t) {
      try {
        let r = this.getState()
        if (1 !== e.length || "string" != typeof e[0])
          throw Error("WritableStream stub only supports direct method calls")
        let n = e[0]
        if ("write" !== n && "close" !== n && "abort" !== n)
          throw (t.dispose(), Error(`Unknown WritableStream method: ${n}`))
        return (
          ("close" === n || "abort" === n) && (r.closed = !0),
          new Z(
            ("write" === n ? t.deliverStreamWrite(r.writer) : t.deliverCall(r.writer[n], r.writer)).then(
              (e) => new D(e),
            ),
          )
        )
      } catch (e) {
        return new E(e)
      }
    }
    map(e, t, r) {
      for (let e of t) e.dispose()
      return new E(Error("Cannot use map() on a WritableStream"))
    }
    get(e) {
      return new E(Error("Cannot access properties on a WritableStream stub"))
    }
    dup() {
      return new e(this.getState(), this)
    }
    pull() {
      return Promise.reject(Error("Cannot pull a WritableStream stub"))
    }
    ignoreUnhandledRejections() {}
    dispose() {
      let e = this.state
      ;((this.state = void 0),
        e &&
          0 == --e.refcount &&
          (e.closed ||
            e.writer.abort(Error("WritableStream RPC stub was disposed without calling close()")).catch(() => {}),
          e.writer.releaseLock()))
    }
    onBroken(e) {}
  }.create),
    (S.createWritableStreamFromHook = function (e) {
      let t,
        r,
        n,
        i = !1,
        s = new eh(() => performance.now()),
        o = () => {
          i || ((i = !0), e.dispose())
        }
      return new WritableStream({
        write(i, a) {
          if (void 0 !== n) throw n
          let l = B.fromAppParams([i]),
            { promise: u, size: c } = e.stream(["write"], l)
          if (void 0 === c)
            return u.catch((e) => {
              throw (void 0 === n && (n = e), e)
            })
          {
            let { token: e, shouldBlock: i } = s.onSend(c)
            if (
              (u.then(
                () => {
                  s.onAck(e) && t && (t(), (t = void 0), (r = void 0))
                },
                (i) => {
                  ;(s.onError(e), void 0 === n && ((n = i), a.error(i), o()), r && (r(i), (t = void 0), (r = void 0)))
                },
              ),
              i)
            )
              return new Promise((e, n) => {
                ;((t = e), (r = n))
              })
          }
        },
        async close() {
          if (void 0 !== n) throw (o(), n)
          let { promise: t } = e.stream(["close"], B.fromAppParams([]))
          try {
            await t
          } catch (e) {
            throw n ?? e
          } finally {
            o()
          }
        },
        abort(i) {
          if (void 0 !== n) return
          ;((n = i ?? Error("WritableStream was aborted")), r && (r(n), (t = void 0), (r = void 0)))
          let { promise: s } = e.stream(["abort"], B.fromAppParams([i]))
          s.then(
            () => o(),
            () => o(),
          )
        },
      })
    }),
    (S.createReadableStreamHook = ef.create))
  let em = function (e, t, r) {
    let n = new ea(e, r),
      i = new eo(n, t, r)
    return (r && (n.readOrigin = (e) => i.messagePortReadOrigin(e)), i.getRemoteMain())
  }
  function ey(e) {
    let t = Object.values(e).filter((e) => "number" == typeof e)
    return Object.entries(e)
      .filter(([e, r]) => -1 === t.indexOf(+e))
      .map(([e, t]) => t)
  }
  function eg(e, t = "|") {
    return e.map((e) => eU(e)).join(t)
  }
  function eb(e, t) {
    return "bigint" == typeof t ? t.toString() : t
  }
  class ev {
    constructor(e) {
      ;((this._getter = e), (this._value = void 0))
    }
    get value() {
      let e = this._getter
      return (void 0 !== e && ((this._value = e()), (this._getter = void 0)), this._value)
    }
  }
  function ew(e) {
    let t = +!!e.startsWith("^"),
      r = e.endsWith("$") ? e.length - 1 : e.length
    return e.slice(t, r)
  }
  function e_(e, t, r) {
    Object.defineProperty(e, t, { value: r, writable: !0, enumerable: !0, configurable: !0 })
  }
  function ek(e) {
    let t = Object.getOwnPropertyDescriptor(e, "shape")
    return t?.get ? t.get.raw : t?.value
  }
  function ez(e) {
    return ek(e._zod.def) ?? e._zod.def.shape
  }
  function eS(e, t, r) {
    Object.defineProperty(e, t, {
      get() {
        let e = r()
        return (e_(this, t, e), e)
      },
      enumerable: !0,
      configurable: !0,
    })
  }
  function ex(e, t, r) {
    t in e ? e_(e, t, r) : (e[t] = r)
  }
  function eP(e, t, r, n) {
    let i = ez(t)
    for (let s of r) {
      let r = Object.getOwnPropertyDescriptor(i, s)
      r.enumerable &&
        (r.get
          ? eS(e, s, () => {
              let e = t._zod.def.shape[s]
              return n ? n(e, s) : e
            })
          : ex(e, s, n ? n(r.value, s) : r.value))
    }
  }
  function eR(...e) {
    let t = {}
    for (let r of e) Object.assign(t, Object.getOwnPropertyDescriptors(r))
    return Object.defineProperties({}, t)
  }
  let eE = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {}
  function eO(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e)
  }
  let eA = new ev(() => {
    if (e5.jitless || ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare"))) return !1
    try {
      return (Function(""), !0)
    } catch (e) {
      return !1
    }
  })
  function eT(e) {
    if (!1 === eO(e)) return !1
    let t = e.constructor
    if (void 0 === t || "function" != typeof t) return !0
    let r = t.prototype
    return !1 !== eO(r) && !1 !== Object.prototype.hasOwnProperty.call(r, "isPrototypeOf")
  }
  function ej(e) {
    return eT(e)
      ? { ...e }
      : Array.isArray(e)
        ? [...e]
        : e instanceof Map
          ? new Map(e)
          : e instanceof Set
            ? new Set(e)
            : e
  }
  let e$ = new Set(["string", "number", "symbol"])
  function eI(e, t, r) {
    let n = new e._zod.constr(t ?? e._zod.def)
    return ((!t || r?.parent) && (n._zod.parent = e), n)
  }
  function eC(e) {
    if (!e) return {}
    if ("string" == typeof e) return { error: () => e }
    if (e?.message !== void 0) {
      if (e?.error !== void 0) throw Error("Cannot specify both `message` and `error` params")
      e.error = e.message
    }
    return (delete e.message, "string" == typeof e.error) ? { ...e, error: () => e.error } : e
  }
  function eU(e) {
    return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`
  }
  let eB = {
      safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
      int32: [-0x80000000, 0x7fffffff],
      uint32: [0, 0xffffffff],
      float32: [-34028234663852886e22, 34028234663852886e22],
      float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
    },
    eM = {
      int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
      uint64: [BigInt(0), BigInt("18446744073709551615")],
    }
  function eN(e, t) {
    let r = ez(e),
      n = []
    for (let e of Reflect.ownKeys(t)) {
      if (!Object.getOwnPropertyDescriptor(r, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`)
      t[e] && n.push(e)
    }
    return n
  }
  function eD(e, t) {
    let r = {}
    eP(r, e, Reflect.ownKeys(ez(e)))
    for (let e of Reflect.ownKeys(t)) {
      let n = Object.getOwnPropertyDescriptor(t, e)
      n.enumerable && (n.get ? eS(r, e, () => t[e]) : ex(r, e, n.value))
    }
    return r
  }
  function eL(e, t, r, n = "partial") {
    let i = t._zod.def.checks
    if (i && i.length > 0) throw Error(`.${n}() cannot be used on object schemas containing refinements`)
    let s = r ? new Set(eN(t, r)) : void 0,
      o = {}
    return (
      eP(
        o,
        t,
        Reflect.ownKeys(ez(t)),
        e && ((t, r) => (s && !s.has(r) ? t : new e({ type: "optional", innerType: t }))),
      ),
      eI(t, eR(t._zod.def, { shape: o, checks: [] }))
    )
  }
  function eF(e, t = 0) {
    if (!0 === e.aborted) return !0
    for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue !== !0) return !0
    return !1
  }
  function eZ(e, t) {
    return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t))
  }
  function eJ(e) {
    return "string" == typeof e ? e : e?.message
  }
  function eW(e) {
    let t = []
    for (let r of e ?? []) {
      let e = r._zod.def
      if (!/_(length|size)$|_equals$/.test(e.check)) break
      let n = e.maximum ?? e.length ?? e.size
      n >= 0 && t.push([n, r])
    }
    return t
  }
  function eH(e, t, r) {
    var n
    for (let i = t; i < e.length; i++) (n = e[i]).schema ?? (n.schema = r)
  }
  function eV(e, t, r) {
    let n = e.inst?._zod?.traits
    n?.has("$ZodType") && (n.has("$ZodCheck") ? (e.schema ?? (e.schema = e.inst)) : (e.schema = e.inst))
    let i = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
      s = e.message
        ? e.message
        : (eJ(e.inst?._zod.def?.error?.(e)) ??
          eJ(i?.(e)) ??
          eJ(t?.error?.(e)) ??
          eJ(r.customError?.(e)) ??
          eJ(r.localeError?.(e)) ??
          "Invalid input"),
      o = {}
    for (let t of Object.keys(e))
      "inst" !== t && "schema" !== t && "continue" !== t && "input" !== t && "__proto__" !== t && (o[t] = e[t])
    return (o.path ?? (o.path = []), (o.message = s), t?.reportInput && (o.input = e.input), o)
  }
  let eq = /[\uD800-\uDBFF]/
  function eK(e) {
    let t = e.length
    if (!eq.test(e)) return t
    let r = t
    for (let n = 0; n < t - 1; n++)
      (64512 & e.charCodeAt(n)) == 55296 && (64512 & e.charCodeAt(n + 1)) == 56320 && (r--, n++)
    return r
  }
  function eG(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown"
  }
  function eQ(...e) {
    let [t, r, n] = e
    return "string" == typeof t ? { message: t, code: "custom", input: r, inst: n } : { ...t }
  }
  function eX(e, t, r, n = !0) {
    return (Object.defineProperty(e, t, { configurable: !0, writable: !0, enumerable: n, value: r }), r)
  }
  let eY = !1,
    e0 = {
      configurable: !0,
      get() {
        eY = !0
      },
    }
  function e1(e, r, n) {
    let i = Object.getPrototypeOf(e._zod)
    if (r in i && t !== e._zod) {
      t = void 0
      return
    }
    ;((t = e._zod),
      Object.defineProperty(i, r, {
        configurable: !0,
        get() {
          Object.defineProperty(this, r, e0)
          let e = eY
          eY = !1
          try {
            let t = n(this)
            return (
              eY ? delete this[r] : Object.defineProperty(this, r, { configurable: !0, writable: !0, value: t }),
              (eY = eY || e),
              t
            )
          } catch (t) {
            throw (delete this[r], (eY = eY || e), t)
          }
        },
        set(e) {
          Object.defineProperty(this, r, { configurable: !0, writable: !0, value: e })
        },
      }))
  }
  let e2 = { value: void 0, enumerable: !1 },
    e6 = "captureStackTrace" in Error ? Error : null
  function e4(e, t, r, n) {
    function i(e) {
      ;((this.def = e), (this.constr = u), (this.traits = new Set()))
    }
    i.prototype = {}
    let s = r && new WeakSet()
    function o(n, o) {
      if (n._zod) {
        if (n._zod.traits.has(e)) return
      } else {
        e2.value = new i(o)
        try {
          Object.defineProperty(n, "_zod", e2)
        } finally {
          e2.value = void 0
        }
      }
      if ((n._zod.traits.add(e), t(n, o), s)) {
        let e = Object.getPrototypeOf(n),
          t = n._zod.constr.prototype,
          i = e
        for (; i && i !== t;) i = Object.getPrototypeOf(i)
        let o = i ?? e
        if (!s.has(o)) {
          s.add(o)
          for (let e in r) {
            let t = Object.getOwnPropertyDescriptor(r, e)
            t.get
              ? Object.defineProperty(o, e, { ...t, enumerable: !1 })
              : (function (e, t, r) {
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get() {
                      return this == null ? r : eX(this, t, r.bind(this))
                    },
                    set(e) {
                      eX(this, t, e)
                    },
                  })
                })(o, e, t.value)
          }
        }
      }
      let a = u.prototype
      for (let e in a) Object.prototype.hasOwnProperty.call(a, e) && (e in n || (n[e] = a[e].bind(n)))
    }
    let a = n?.Parent ?? Object
    class l extends a {}
    function u(e) {
      let t = n?.Parent
        ? (function (e) {
            let t = e6
            if (t) {
              let r = t.stackTraceLimit
              if ("number" == typeof r) {
                try {
                  t.stackTraceLimit = 0
                } catch {
                  return ((e6 = null), new e())
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
      o(t, e)
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
      Object.defineProperty(u, "init", { value: o }),
      Object.defineProperty(u, Symbol.hasInstance, {
        value: (t) => (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
      }),
      Object.defineProperty(u, "name", { value: e }),
      u
    )
  }
  class e8 extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
    }
  }
  class e3 extends Error {
    constructor(e) {
      ;(super(`Encountered unidirectional transform during encode: ${e}`), (this.name = "ZodEncodeError"))
    }
  }
  ;(x = globalThis).__zod_globalConfig ?? (x.__zod_globalConfig = {})
  let e5 = globalThis.__zod_globalConfig
  function e7(e) {
    return (e && Object.assign(e5, e), e5)
  }
  class e9 extends Error {
    constructor() {
      ;(super("Cannot parse a reference cycle that closes through a transform"), (this.name = "ZodCyclicError"))
    }
  }
  let te = "~memo",
    tt = []
  function tr(e) {
    return null !== e && "object" == typeof e
  }
  function tn(e) {
    return e.map((e) => (e.path ? { ...e, path: e.path.slice() } : { ...e }))
  }
  let ti = new WeakMap(),
    ts = [],
    to = {
      alloc(e, t, n) {
        let i = r
        if (!i) return n
        r = void 0
        let s = { value: n, issues: null }
        return (i.set(t.value, s), ts.push(s), n)
      },
      guard(e) {
        var t
        ;((t = e._zod).deferred ?? (t.deferred = []),
          e._zod.deferred.push(() => {
            let t = e._zod.parse,
              r = (e, r) => {
                var n, i
                let s
                if (
                  "backward" !== r.direction &&
                  ((n = r), (i = e.value), void 0 !== (s = n[te]?.backEdges) && tr(i) && s.has(i))
                )
                  throw new e9()
                return t(e, r)
              }
            ;((e._zod.parse = r), e._zod.run === t && (e._zod.run = r))
          }))
      },
      attach(e) {
        var t
        let n,
          i,
          s,
          o = !1
        ;((t = e._zod).deferred ?? (t.deferred = []),
          e._zod.deferred.push(() => {
            let t = e._zod.parse,
              a = (l, u) => {
                let c
                if (void 0 === n) {
                  let r = (function e(t, r, n) {
                    var i, s
                    let o = ti.get(t)
                    if (void 0 !== o) return 2 * !!o
                    if (r.has(t)) return 2
                    r.add(t)
                    let a = 0,
                      l = (t) => {
                        if (2 !== a && t?._zod) {
                          let i = e(t, r, n)
                          i > a && (a = i)
                        }
                      },
                      u = (e) => {
                        e > a && (a = e)
                      },
                      c = t._zod.def
                    switch (c.type) {
                      case "object": {
                        let t = ek(c)
                        ;(u(
                          t
                            ? ((t, i) => {
                                let s = 0
                                for (let o of Reflect.ownKeys(t)) {
                                  let a = Object.getOwnPropertyDescriptor(t, o)
                                  if (i && !a.enumerable) continue
                                  let l = a.get ? 1 : a.value?._zod ? e(a.value, r, n) : 0
                                  l > s && (s = l)
                                }
                                return s
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
                    return (r.delete(t), (i = t), 1 !== (s = a) && ti.set(i, 2 === s), s)
                  })(e, new Set(), !1)
                  if (0 === r) return ((e._zod.parse = t), e._zod.run === a && (e._zod.run = t), t(l, u))
                  2 === r || o ? (n = !0) : (o = !0)
                }
                let p = l.value
                if (!tr(p)) return t(l, u)
                let d = u[te]
                if ((d || ((d = { buckets: new WeakMap(), backEdges: void 0 }), (u[te] = d)), i === u)) c = s
                else {
                  var h
                  let t
                  ;((t = (h = d).buckets.get(e)) || ((t = new WeakMap()), h.buckets.set(e, t)),
                    (c = t),
                    (i = u),
                    (s = c))
                }
                let f = c.get(p)
                if (f)
                  return (
                    (l.value = f.value),
                    f.issues
                      ? f.issues.length && l.issues.push(...tn(f.issues))
                      : ((l.memo = !0), d.backEdges ?? (d.backEdges = new WeakSet()), d.backEdges.add(f.value)),
                    l
                  )
                r = c
                let m = ts.length,
                  y = t(l, u)
                r = void 0
                let g = ts.length > m ? ts.pop() : void 0
                return y instanceof Promise
                  ? y.then((e) => (g && (g.issues = e.issues.length ? tn(e.issues) : tt), e))
                  : (g && (g.issues = y.issues.length ? tn(y.issues) : tt), y)
              }
            ;((e._zod.parse = a), e._zod.run === t && (e._zod.run = a))
          }))
      },
    },
    ta = e4("$ZodCheck", (e, t) => {
      var r
      ;(e._zod ?? (e._zod = {}), (e._zod.def = t), (r = e._zod).onattach ?? (r.onattach = []))
    }),
    tl = (e) => {
      let t = e.value
      return null != t && void 0 !== t.length
    },
    tu = e4("$ZodCheckMaxLength", (e, t) => {
      var r
      ;(ta.init(e, t),
        (r = e._zod.def).when ?? (r.when = tl),
        (e._zod.check = (r) => {
          let n = r.value,
            i = n.length
          if (("string" == typeof n && i > t.maximum ? eK(n) : i) <= t.maximum) return
          let s = eG(n)
          r.issues.push({
            origin: s,
            code: "too_big",
            maximum: t.maximum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !t.abort,
          })
        }))
    }),
    tc = e4("$ZodCheckMinLength", (e, t) => {
      var r
      ;(ta.init(e, t),
        (r = e._zod.def).when ?? (r.when = tl),
        (e._zod.check = (r) => {
          let n = r.value,
            i = n.length
          if (("string" == typeof n && i >= t.minimum && i < 2 * t.minimum ? eK(n) : i) >= t.minimum) return
          let s = eG(n)
          r.issues.push({
            origin: s,
            code: "too_small",
            minimum: t.minimum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !t.abort,
          })
        }))
    }),
    tp = e4("$ZodCheckLengthEquals", (e, t) => {
      var r
      ;(ta.init(e, t),
        (r = e._zod.def).when ?? (r.when = tl),
        (e._zod.check = (r) => {
          let n = r.value,
            i = n.length,
            s = "string" == typeof n && i >= t.length && i <= 2 * t.length ? eK(n) : i
          if (s === t.length) return
          let o = eG(n),
            a = s > t.length
          r.issues.push({
            origin: o,
            ...(a ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
            inclusive: !0,
            exact: !0,
            input: r.value,
            inst: e,
            continue: !t.abort,
          })
        }))
    }),
    td = e4("$ZodCheckOverwrite", (e, t) => {
      ;(ta.init(e, t),
        (e._zod.check = (e) => {
          e.value = t.tx(e.value)
        }))
    })
  class th {
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
  let tf = { major: 4, minor: 6, patch: 7 },
    tm = e4(
      "$ZodType",
      (e, t) => {
        var r
        ;(e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = tf))
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
              let s = eF(t)
              for (let o of r) {
                if (o._zod.def.when) {
                  if (
                    (function (e, t = 0) {
                      if (!0 === e.aborted) return !0
                      for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue === !1) return !0
                      return !1
                    })(t) ||
                    !o._zod.def.when(t)
                  )
                    continue
                } else if (s) continue
                let r = t.issues.length,
                  a = o._zod.check(t)
                if (a instanceof Promise && n?.async === !1) throw new e8()
                if (i || a instanceof Promise)
                  i = (i ?? Promise.resolve()).then(async () => {
                    ;(await a, t.issues.length !== r && (eH(t.issues, r, e), s || (s = eF(t, r))))
                  })
                else {
                  if (t.issues.length === r) continue
                  ;(eH(t.issues, r, e), s || (s = eF(t, r)))
                }
              }
              return i ? i.then(() => t) : t
            },
            r = (r, n, s) => {
              if (eF(r)) return ((r.aborted = !0), r)
              let o = t(n, i, s)
              if (o instanceof Promise) {
                if (!1 === s.async) throw new e8()
                return o.then((t) => e._zod.parse(t, s))
              }
              return e._zod.parse(o, s)
            }
          e._zod.run = (n, s) => {
            if (s.skipChecks) return e._zod.parse(n, s)
            if ("backward" === s.direction) {
              let t = e._zod.parse({ value: n.value, issues: [] }, { ...s, skipChecks: !0 })
              return t instanceof Promise ? t.then((e) => r(e, n, s)) : r(t, n, s)
            }
            let o = e._zod.parse(n, s)
            if (o instanceof Promise) {
              if (!1 === s.async) throw new e8()
              return o.then((e) => t(e, i, s))
            }
            return t(o, i, s)
          }
        }
      },
      {
        get "~standard"() {
          return eX(this, "~standard", tg(this), !1)
        },
        set "~standard"(e) {
          eX(this, "~standard", e)
        },
      },
    ),
    ty = (e, t) => (e.issues.length ? { issues: e.issues.map((e) => eV(e, t, e7())) } : { value: e.value })
  function tg(e) {
    return {
      validate: (t) => {
        let r = { async: !1 }
        try {
          let n = e._zod.run({ value: t, issues: [] }, r)
          if (!(n instanceof Promise)) return ty(n, r)
        } catch (e) {}
        return (async function (e, t) {
          let r = { async: !0 }
          return ty(await e._zod.run({ value: t, issues: [] }, r), r)
        })(e, t)
      },
      vendor: "zod",
      version: 1,
    }
  }
  let tb = e4("$ZodUnknown", (e, t) => {
      ;(tm.init(e, t), (e._zod.parse = (e) => e))
    }),
    tv = e4("$ZodNever", (e, t) => {
      ;(tm.init(e, t),
        (e._zod.parse = (t, r) => (
          t.issues.push({ expected: "never", code: "invalid_type", input: t.value, inst: e }),
          t
        )))
    }),
    tw = (e) => (Array.isArray(e) ? e.length : -1)
  function t_(e, t, r) {
    ;(e.issues.length && t.issues.push(...eZ(r, e.issues)), (t.value[r] = e.value))
  }
  let tk = e4("$ZodArray", (e, t) => {
    tm.init(e, t)
    let r = e5.memoizer
    ;(r?.attach(e),
      (e._zod.parse = (n, i) => {
        let s = n.value
        if (!Array.isArray(s)) return (n.issues.push({ expected: "array", code: "invalid_type", input: s, inst: e }), n)
        n.value = r ? r.alloc(e, n, Array(s.length), i) : Array(s.length)
        let o = [],
          a = i?.abortEarly
        for (let e = 0; e < s.length; e++) {
          let r = s[e],
            l = t.element._zod.run({ value: r, issues: [] }, i)
          if (l instanceof Promise) o.push(l.then((t) => t_(t, n, e)))
          else if ((t_(l, n, e), a && 0 !== l.issues.length && eF(l))) break
        }
        return o.length ? Promise.all(o).then(() => n) : n
      }),
      (function (e, t) {
        let r = eW(e._zod.def.checks)
        if (!r.length) return
        let n = Math.min(...r.map((e) => e[0])),
          i = e._zod.parse
        e._zod.parse = (r, s) => {
          let o = t(r.value)
          if (o > n && !s?.skipChecks && s?.direction !== "backward") {
            for (let [t, n] of eW(e._zod.def.checks))
              if (o > t && n._zod.def.when(r)) {
                let t = r.issues.length
                return (n._zod.check(r), (r.issues[t].continue = !1), eH(r.issues, t, e), r)
              }
          }
          return i(r, s)
        }
      })(e, tw))
  })
  function tz(e, t, r, n, i, s) {
    let o = r in n,
      a = "optional" === s
    if (o || !a || "optional" !== i) {
      if (e.issues.length) {
        if (void 0 !== i && a && !o) return
        t.issues.push(...eZ(r, e.issues))
      }
      if (!o && void 0 === i) {
        e.issues.length || t.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [r] })
        return
      }
      void 0 === e.value ? (o || ("defaulted" === i && !a)) && (t.value[r] = void 0) : (t.value[r] = e.value)
    }
  }
  let tS = []
  function tx(e) {
    var t
    let r = Object.keys(e.shape),
      n = Object.getOwnPropertySymbols(e.shape),
      i = n.length ? n : tS,
      s = i.length ? [...r, ...i] : r
    for (let t of s)
      if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
        throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`)
    let o = Object.keys((t = e.shape)).filter((e) => void 0 !== t[e]._zod.optin && "optional" === t[e]._zod.optout)
    return { ...e, allKeys: s, symbolKeys: i, keySet: new Set(r), numKeys: r.length, optionalKeys: new Set(o) }
  }
  function tP(e, t, r, n, i, s, o) {
    let a = [],
      l = i.keySet,
      u = i.catchall._zod,
      c = u.def.type,
      p = u.optin,
      d = u.optout,
      h = 0
    for (let i in t) {
      if (o && r.issues.length !== h) {
        if (eF(r, h)) break
        h = r.issues.length
      }
      if (l.has(i)) continue
      if ("__proto__" === i) {
        "never" === c && a.push(i)
        continue
      }
      if ("never" === c) {
        a.push(i)
        continue
      }
      let s = u.run({ value: t[i], issues: [] }, n)
      s instanceof Promise ? e.push(s.then((e) => tz(e, r, i, t, p, d))) : tz(s, r, i, t, p, d)
    }
    return (a.length && r.issues.push({ code: "unrecognized_keys", keys: a, input: t, inst: s, continue: !0 }),
    e.length)
      ? Promise.all(e).then(() => r)
      : r
  }
  let tR = e4("$ZodObject", (e, t) => {
      let r
      tm.init(e, t)
      let n = Object.getOwnPropertyDescriptor(t, "shape"),
        i = n?.get ? n.get.raw : (t.shape ?? {})
      if (i) {
        let e = () => {
          let r = { ...i }
          return (Object.defineProperty(t, "shape", { value: r }), (e.raw = r), r)
        }
        ;((e.raw = i), Object.defineProperty(t, "shape", { get: e }))
      }
      let s = new ev(() => tx(t))
      e1(e, "propValues", (e) => {
        let t = e.def.shape,
          r = {}
        for (let e in t) {
          let n = t[e]._zod
          if (n.values) {
            for (let t of (Object.prototype.hasOwnProperty.call(r, e) || e_(r, e, new Set()), n.values)) r[e].add(t)
            void 0 !== n.optin && r[e].add(void 0)
          }
        }
        return r
      })
      let o = t.catchall,
        a = e5.memoizer
      ;(a?.attach(e),
        (e._zod.parse = (t, n) => {
          r ?? (r = s.value)
          let i = t.value
          if (!eO(i)) return (t.issues.push({ expected: "object", code: "invalid_type", input: i, inst: e }), t)
          t.value = a ? a.alloc(e, t, {}, n) : {}
          let l = [],
            u = r.shape,
            c = n?.abortEarly,
            p = t.issues.length
          for (let e of r.allKeys) {
            if (c && t.issues.length !== p) {
              if (eF(t, p)) break
              p = t.issues.length
            }
            if ("__proto__" === e) continue
            let r = u[e],
              s = r._zod.optin,
              o = r._zod.optout,
              a = r._zod.run({ value: i[e], issues: [] }, n)
            a instanceof Promise ? l.push(a.then((r) => tz(r, t, e, i, s, o))) : tz(a, t, e, i, s, o)
          }
          return o ? tP(l, i, t, n, s.value, e, !0 === c) : l.length ? Promise.all(l).then(() => t) : t
        }))
    }),
    tE = e4("$ZodObjectJIT", (e, t) => {
      let r, n
      tR.init(e, t)
      let i = e._zod.parse,
        s = new ev(() => tx(t)),
        o = e5.memoizer,
        a = !e5.jitless,
        l = a && eA.value,
        u = t.catchall
      e._zod.parse = (c, p) => {
        n ?? (n = s.value)
        let d = c.value
        return eO(d)
          ? a && l && p?.async === !1 && !0 !== p.jitless
            ? (r ||
                (r = ((t) => {
                  let r = s.value,
                    n = r.symbolKeys,
                    i = new th(["payload", "ctx"], { shape: t, inst: e, memo: o, syms: n }),
                    a = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,
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
                    o ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};",
                  ),
                  r.allKeys)) {
                    if ("__proto__" === e) continue
                    let r = u[e],
                      s = "symbol" == typeof e ? `syms[${n.indexOf(e)}]` : JSON.stringify(e),
                      o = `${s} in input`,
                      c = t[e],
                      p = c?._zod?.optin,
                      d = void 0 !== p,
                      h = c?._zod?.optout === "optional"
                    if ((i.write(`const ${r} = ${a(s)};`), d && h)) {
                      let e = "optional" === p ? `${r}_present` : `${r}.value !== undefined || ${r}_present`
                      i.write(`
        const ${r}_present = ${o};
        if (!${r}.issues.length || ${r}_present) {
          if (${r}.issues.length) {${l(r, s)}
          }

          if (${e}) {
            newResult[${s}] = ${r}.value;
          }
        }

      `)
                    } else
                      d
                        ? (i.write(`
        if (${r}.issues.length) {${l(r, s)}
        }
      `),
                          "defaulted" === p
                            ? i.write(`newResult[${s}] = ${r}.value;`)
                            : i.write(`
        if (${r}.value !== undefined || ${o}) {
          newResult[${s}] = ${r}.value;
        }
      `))
                        : i.write(`
        const ${r}_present = ${o};
        if (${r}.issues.length) {${l(r, s)}
        }
        if (!${r}_present && !${r}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${s}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${r}_present) {
          newResult[${s}] = ${r}.value;
        }

      `)
                  }
                  return (i.write("payload.value = newResult;"), i.write("return payload;"), i.compile())
                })(t.shape)),
              (c = r(c, p)),
              u)
              ? tP([], d, c, p, n, e, p?.abortEarly === !0)
              : c
            : i(c, p)
          : (c.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e }), c)
      }
    })
  function tO(e, t, r, n) {
    for (let r of e) if (0 === r.issues.length) return ((t.value = r.value), t)
    let i = e.filter((e) => !eF(e))
    return 1 === i.length
      ? ((t.value = i[0].value), i[0])
      : (t.issues.push({
          code: "invalid_union",
          input: t.value,
          inst: r,
          errors: e.map((e) => e.issues.map((e) => eV(e, n, e7()))),
        }),
        t)
  }
  let tA = e4("$ZodUnion", (e, t) => {
      ;(tm.init(e, t),
        e1(e, "optin", (e) =>
          e.def.options.some((e) => "defaulted" === e._zod.optin)
            ? "defaulted"
            : e.def.options.some((e) => void 0 !== e._zod.optin)
              ? "optional"
              : void 0,
        ),
        e1(e, "optout", (e) => (e.def.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0)),
        e1(e, "values", (e) => {
          if (e.def.options.every((e) => e._zod.values))
            return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)))
        }),
        e1(e, "pattern", (e) => {
          if (e.def.options.every((e) => e._zod.pattern)) {
            let t = e.def.options.map((e) => e._zod.pattern)
            return RegExp(`^(${t.map((e) => ew(e.source)).join("|")})$`)
          }
        }))
      let r = 1 === t.options.length ? t.options[0]._zod.run : null
      e._zod.parse = (n, i) => {
        if (r) return r(n, i)
        let s = !1,
          o = []
        for (let e of t.options) {
          let t = e._zod.run({ value: n.value, issues: [] }, i)
          if (t instanceof Promise) (o.push(t), (s = !0))
          else {
            if (0 === t.issues.length) return t
            o.push(t)
          }
        }
        return s ? Promise.all(o).then((t) => tO(t, n, e, i)) : tO(o, n, e, i)
      }
    }),
    tT = e4("$ZodIntersection", (e, t) => {
      ;(tm.init(e, t),
        (e._zod.parse = (e, r) => {
          let n = e.value,
            i = t.left._zod.run({ value: n, issues: [] }, r),
            s = t.right._zod.run({ value: n, issues: [] }, r)
          return i instanceof Promise || s instanceof Promise
            ? Promise.all([i, s]).then(([t, r]) => tj(e, t, r))
            : tj(e, i, s)
        }))
    })
  function tj(e, t, r) {
    let n,
      i = new Map(),
      s = new Map(),
      o = (e, t) => {
        let r
        if ("unrecognized_keys" !== e.code || e.path?.length)
          if ("invalid_key" !== e.code || "record" !== e.origin || e.path?.length !== 1) return !1
          else {
            let t = String(e.path[0])
            ;(s.has(t) || s.set(t, e), (r = [t]))
          }
        else (n ?? (n = e), (r = e.keys))
        for (let e of r) (i.has(e) || i.set(e, {}), (i.get(e)[t] = !0))
        return !0
      }
    for (let r of t.issues) o(r, "l") || e.issues.push(r)
    for (let t of r.issues) o(t, "r") || e.issues.push(t)
    let a = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e)
    if (a.length) {
      let t = n ? a.filter((e) => n.keys.includes(e)) : []
      for (let r of (t.length && e.issues.push({ ...n, keys: t }), a))
        !t.includes(r) && s.has(r) && e.issues.push(s.get(r))
    }
    let l = (function e(t, r) {
      if (t === r || (t instanceof Date && r instanceof Date && +t == +r)) return { valid: !0, data: t }
      if (eT(t) && eT(r)) {
        let n = Object.keys(r),
          i = Object.keys(t).filter((e) => -1 !== n.indexOf(e)),
          s = { ...t, ...r }
        for (let n of (Object.prototype.hasOwnProperty.call(s, "__proto__") && delete s.__proto__, i)) {
          if ("__proto__" === n) continue
          let i = e(t[n], r[n])
          if (!i.valid) return { valid: !1, mergeErrorPath: [n, ...i.mergeErrorPath] }
          s[n] = i.data
        }
        return { valid: !0, data: s }
      }
      if (Array.isArray(t) && Array.isArray(r)) {
        if (t.length !== r.length) return { valid: !1, mergeErrorPath: [] }
        let n = []
        for (let i = 0; i < t.length; i++) {
          let s = e(t[i], r[i])
          if (!s.valid) return { valid: !1, mergeErrorPath: [i, ...s.mergeErrorPath] }
          n.push(s.data)
        }
        return { valid: !0, data: n }
      }
      return { valid: !1, mergeErrorPath: [] }
    })(t.value, r.value)
    if (!l.valid) {
      if (eF(e)) return e
      throw Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`)
    }
    return ((e.value = l.data), e)
  }
  let t$ = e4("$ZodEnum", (e, t) => {
      tm.init(e, t)
      let r = ey(t.entries),
        n = new Set(r)
      ;((e._zod.values = n),
        e1(e, "pattern", (e) => {
          let t = ey(e.def.entries).filter((e) => e$.has(typeof e))
          return new RegExp(
            t.length
              ? `^(${t.map((e) => e.toString().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})$`
              : "^[^\\s\\S]$",
          )
        }),
        (e._zod.parse = (t, i) => {
          let s = t.value
          return (n.has(s) || t.issues.push({ code: "invalid_value", values: r, input: s, inst: e }), t)
        }))
    }),
    tI = e4("$ZodTransform", (e, t) => {
      ;(tm.init(e, t),
        (e._zod.optin = "optional"),
        e5.memoizer?.guard(e),
        (e._zod.parse = (r, n) => {
          if ("backward" === n.direction) throw new e3(e.constructor.name)
          let i = t.transform(r.value, r)
          if (n.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => ((r.value = e), r))
          if (i instanceof Promise) throw new e8()
          return ((r.value = i), r)
        }))
    })
  function tC(e, t) {
    return ((e.value = t.issues.length ? void 0 : t.value), e)
  }
  let tU = e4("$ZodOptional", (e, t) => {
      ;(tm.init(e, t),
        e1(e, "optin", (e) => ("defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional")),
        (e._zod.optout = "optional"),
        e1(e, "values", (e) => {
          let t = e.def.innerType._zod.values
          return t ? new Set([...t, void 0]) : void 0
        }),
        e1(e, "pattern", (e) => {
          let t = e.def.innerType._zod.pattern
          return t ? RegExp(`^(${ew(t.source)})?$`) : void 0
        }),
        (e._zod.parse = (e, r) => {
          if (void 0 === e.value) {
            if ("defaulted" !== t.innerType._zod.optin) return e
            let n = t.innerType._zod.run({ value: e.value, issues: [] }, r)
            return n instanceof Promise ? n.then((t) => tC(e, t)) : tC(e, n)
          }
          return t.innerType._zod.run(e, r)
        }))
    }),
    tB = e4("$ZodExactOptional", (e, t) => {
      ;(tU.init(e, t),
        e1(e, "values", (e) => e.def.innerType._zod.values),
        e1(e, "pattern", (e) => e.def.innerType._zod.pattern),
        (e._zod.parse = (e, r) => t.innerType._zod.run(e, r)))
    }),
    tM = e4("$ZodNullable", (e, t) => {
      ;(tm.init(e, t),
        e1(e, "optin", (e) => e.def.innerType._zod.optin),
        e1(e, "optout", (e) => e.def.innerType._zod.optout),
        e1(e, "pattern", (e) => {
          let t = e.def.innerType._zod.pattern
          return t ? RegExp(`^(${ew(t.source)}|null)$`) : void 0
        }),
        e1(e, "values", (e) =>
          e.def.innerType._zod.values ? new Set([...e.def.innerType._zod.values, null]) : void 0,
        ),
        (e._zod.parse = (e, r) => (null === e.value ? e : t.innerType._zod.run(e, r))))
    }),
    tN = e4("$ZodDefault", (e, t) => {
      ;(tm.init(e, t),
        (e._zod.optin = "defaulted"),
        e1(e, "values", (e) => e.def.innerType._zod.values),
        (e._zod.parse = (e, r) => {
          if ("backward" === r.direction) return t.innerType._zod.run(e, r)
          if (void 0 === e.value) return ((e.value = t.defaultValue), e)
          let n = t.innerType._zod.run(e, r)
          return n instanceof Promise ? n.then((e) => tD(e, t)) : tD(n, t)
        }))
    })
  function tD(e, t) {
    return (void 0 === e.value && (e.value = t.defaultValue), e)
  }
  let tL = e4("$ZodPrefault", (e, t) => {
      ;(tm.init(e, t),
        (e._zod.optin = "defaulted"),
        e1(e, "values", (e) => e.def.innerType._zod.values),
        (e._zod.parse = (e, r) => (
          "backward" === r.direction || (void 0 === e.value && (e.value = t.defaultValue)),
          t.innerType._zod.run(e, r)
        )))
    }),
    tF = e4("$ZodNonOptional", (e, t) => {
      ;(tm.init(e, t),
        e1(e, "values", (e) => {
          let t = e.def.innerType._zod.values
          return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0
        }),
        (e._zod.parse = (r, n) => {
          let i = t.innerType._zod.run(r, n)
          return i instanceof Promise ? i.then((t) => tZ(t, e)) : tZ(i, e)
        }))
    })
  function tZ(e, t) {
    return (
      e.issues.length ||
        void 0 !== e.value ||
        e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }),
      e
    )
  }
  function tJ(e, t, r, n) {
    return (
      t.issues.length
        ? (e.value = r.catchValue({
            ...t,
            value: e.value,
            error: { issues: t.issues.map((e) => eV(e, n, e7())) },
            input: e.value,
          }))
        : ((e.value = t.value), t.memo && (e.memo = !0)),
      e
    )
  }
  let tW = e4("$ZodCatch", (e, t) => {
      ;(tm.init(e, t),
        e1(e, "optin", (e) => ("defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional")),
        e1(e, "optout", (e) => e.def.innerType._zod.optout),
        e1(e, "values", (e) => e.def.innerType._zod.values),
        (e._zod.parse = (e, r) => {
          if ("backward" === r.direction) return t.innerType._zod.run(e, r)
          let n = t.innerType._zod.run({ value: e.value, issues: [] }, r)
          return n instanceof Promise ? n.then((n) => tJ(e, n, t, r)) : tJ(e, n, t, r)
        }))
    }),
    tH = e4("$ZodPipe", (e, t) => {
      ;(tm.init(e, t),
        e1(e, "values", (e) => e.def.in._zod.values),
        e1(e, "optin", (e) => e.def.in._zod.optin),
        e1(e, "optout", (e) => e.def.out._zod.optout),
        e1(e, "propValues", (e) => e.def.in._zod.propValues),
        (e._zod.parse = (e, r) => {
          if ("backward" === r.direction) {
            let n = t.out._zod.run(e, r)
            return n instanceof Promise ? n.then((e) => tV(e, t.in, r)) : tV(n, t.in, r)
          }
          let n = t.in._zod.run(e, r)
          return n instanceof Promise ? n.then((e) => tV(e, t.out, r)) : tV(n, t.out, r)
        }))
    })
  function tV(e, t, r) {
    return e.issues.some((e) => "unrecognized_keys" !== e.code)
      ? ((e.aborted = !0), e)
      : t._zod.run({ value: e.value, issues: e.issues }, r)
  }
  let tq = e4("$ZodReadonly", (e, t) => {
    ;(tm.init(e, t),
      e1(e, "propValues", (e) => e.def.innerType._zod.propValues),
      e1(e, "values", (e) => e.def.innerType._zod.values),
      e1(e, "optin", (e) => e.def.innerType?._zod?.optin),
      e1(e, "optout", (e) => e.def.innerType?._zod?.optout),
      (e._zod.parse = (e, r) => {
        if ("backward" === r.direction) return t.innerType._zod.run(e, r)
        let n = t.innerType._zod.run(e, r)
        return n instanceof Promise ? n.then(tK) : tK(n)
      }))
  })
  function tK(e) {
    return (e.memo || (e.value = Object.freeze(e.value)), e)
  }
  let tG = e4("$ZodCustom", (e, t) => {
    ;(ta.init(e, t),
      tm.init(e, t),
      (e._zod.parse = (e, t) => e),
      (e._zod.check = (r) => {
        let n = r.value,
          i = t.fn(n)
        if (i instanceof Promise) return i.then((t) => tQ(t, r, n, e))
        tQ(i, r, n, e)
      }))
  })
  function tQ(e, t, r, n) {
    if (!e) {
      let e = { code: "custom", input: r, inst: n, path: [...(n._zod.def.path ?? [])], continue: !n._zod.def.abort }
      ;(n._zod.def.params && (e.params = n._zod.def.params), t.issues.push(eQ(e)))
    }
  }
  ;(P = globalThis).__zod_globalRegistry ??
    (P.__zod_globalRegistry = new (class e {
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
  let tX = globalThis.__zod_globalRegistry
  function tY(e, t) {
    return new tc({ check: "min_length", ...eC(t), minimum: e })
  }
  function t0(e, ...t) {
    for (let r of t)
      for (let t of Reflect.ownKeys(r)) Object.prototype.propertyIsEnumerable.call(r, t) && e_(e, t, r[t])
    return e
  }
  function t1(e) {
    let t = e?.target ?? "draft-2020-12"
    return (
      "draft-4" === t && (t = "draft-04"),
      "draft-7" === t && (t = "draft-07"),
      {
        processors: e.processors ?? {},
        metadataRegistry: e?.metadata ?? tX,
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
  function t2(e, t, r, n, i) {
    let s =
      "function" == typeof t.unrepresentable
        ? t.unrepresentable({ zodSchema: e, path: n.path, message: i })
        : t.unrepresentable
    if ("any" === s) return !1
    if (void 0 === s || "throw" === s) throw Error(i)
    return (Object.assign(r, s), !0)
  }
  function t6(e, t, r = { path: [], schemaPath: [] }) {
    var n
    let i = e._zod.def,
      s = t.seen.get(e)
    if (s) return (s.count++, r.schemaPath.includes(e) && (s.cycle = r.path), s.schema)
    let o = { schema: {}, count: 1, cycle: void 0, path: r.path }
    ;(t.seen.set(e, o), (t.sharedDefsExtractedFor = void 0), (t.sharedEmitDoneFor = void 0))
    let a = e._zod.toJSONSchema?.()
    if (a) o.schema = a
    else {
      let n = { ...r, schemaPath: [...r.schemaPath, e], path: r.path }
      if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, n)
      else {
        let r = o.schema,
          s = t.processors[i.type]
        if (!s) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`)
        s(e, t, r, n)
      }
      let s = e._zod.parent
      s && (o.ref || (o.ref = s), t6(s, t, n), (t.seen.get(s).isParent = !0))
    }
    let l = t.metadataRegistry.get(e)
    return (
      l && t0(o.schema, l),
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
        (delete o.schema.examples, delete o.schema.default),
      "input" === t.io && "_prefault" in o.schema && ((n = o.schema).default ?? (n.default = o.schema._prefault)),
      delete o.schema._prefault,
      t.seen.get(e).schema
    )
  }
  function t4(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1")
  }
  function t8(e, t) {
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
        { ref: i, defId: s } = ((t) => {
          let n = "draft-2020-12" === e.target ? "$defs" : "definitions"
          if (e.external) {
            let r = e.external.registry.get(t[0])?.id,
              i = e.external.uri ?? ((e) => e)
            if (r) return { ref: i(r) }
            let s = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`
            return ((t[1].defId = s), { defId: s, ref: `${i("__shared")}#/${n}/${t4(s)}` })
          }
          let i = `#/${n}/`
          if (t[1] === r && !t[1].schema.id) return { ref: "#" }
          let s = t[1].schema.id ?? `__schema${e.counter++}`
          return { defId: s, ref: i + t4(s) }
        })(t)
      ;((n.def = { ...n.schema }), s && (n.defId = s))
      let o = n.schema
      for (let e in o) delete o[e]
      o.$ref = i
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
  let t3 = new Set(["type", "properties", "required", "additionalProperties"]),
    t5 = ["oneOf", "anyOf"]
  function t7(e) {
    let t = e.additionalProperties
    return void 0 === t || !1 === t || "object" != typeof t || null === t ? null : Object.keys(t).length ? t : null
  }
  function t9(e) {
    let t = []
    for (let r of e) {
      if ("object" != typeof r || "object" !== r.type) return null
      for (let e in r) if (!t3.has(e)) return null
      t.push(r)
    }
    let r = {},
      n = new Set()
    for (let e of t) {
      for (let n in e.properties) {
        if (Object.prototype.hasOwnProperty.call(r, n)) continue
        let e = []
        for (let r of t) {
          let t = r.properties?.[n] ?? t7(r)
          null != t && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t))
        }
        e_(r, n, 1 === e.length ? e[0] : (t9(e) ?? { allOf: e }))
      }
      for (let t of e.required ?? []) n.add(t)
    }
    let i = { type: "object", properties: r }
    if ((n.size && (i.required = [...n]), t.every((e) => !1 === e.additionalProperties))) i.additionalProperties = !1
    else {
      let e = []
      for (let r of t) {
        let t = t7(r)
        t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t)
      }
      1 === e.length ? (i.additionalProperties = e[0]) : e.length > 1 && (i.additionalProperties = { allOf: e })
    }
    return i
  }
  function re(e, t) {
    let r = e.seen.get(t)
    if (!r) throw Error("Unprocessed schema. This is a bug in Zod.")
    let n = (t) => {
      let r = e.seen.get(t)
      if (null === r.ref) return
      let i = r.def ?? r.schema,
        s = { ...i },
        o = r.ref
      if (((r.ref = null), o)) {
        n(o)
        let r = e.seen.get(o),
          a = r.schema
        if (
          (a.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target)
            ? ((i.allOf = i.allOf ?? []), i.allOf.push(a))
            : t0(i, a),
          t0(i, s),
          t._zod.parent === o)
        )
          for (let e in i) "$ref" !== e && "allOf" !== e && (e in s || delete i[e])
        if (a.$ref && r.def)
          for (let e in i)
            "$ref" !== e &&
              "allOf" !== e &&
              e in r.def &&
              JSON.stringify(i[e]) === JSON.stringify(r.def[e]) &&
              delete i[e]
      }
      let a = t._zod.parent
      if (a && a !== o) {
        n(a)
        let t = e.seen.get(a)
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
              for (let t of t3) if (t in e) return
              let r = t.filter((e) => t5.some((t) => Array.isArray(e[t]))),
                n = null
              if (r.length) {
                let e = r[0],
                  i = t5.find((t) => Array.isArray(e[t]))
                if (1 !== Object.keys(e).length) return
                let s = t.filter((t) => t !== e),
                  o = e[i].map((e) => t9([...s, e]))
                if (o.some((e) => !e)) return
                n = { [i]: o }
              } else n = t9(t)
              n && (delete e.allOf, t0(e, n))
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
    t0(i, r.defId ? r.schema : (r.def ?? r.schema))
    let s = e.metadataRegistry.get(t)?.id
    void 0 !== s && i.id === s && delete i.id
    let o = e.external?.defs ?? {}
    if (!e.external || e.sharedEmitDoneFor !== e.external)
      for (let t of e.seen.entries()) {
        let e = t[1]
        e.def && e.defId && (e.def.id === e.defId && delete e.def.id, e_(o, e.defId, e.def))
      }
    ;(e.external && (e.sharedEmitDoneFor = e.external),
      e.external || (Object.keys(o).length > 0 && ("draft-2020-12" === e.target ? (i.$defs = o) : (i.definitions = o))))
    try {
      let r = JSON.parse(JSON.stringify(i))
      return (
        Object.defineProperty(r, "~standard", {
          value: {
            ...t["~standard"],
            jsonSchema: { input: rt(t, "input", e.processors), output: rt(t, "output", e.processors) },
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
  let rt =
      (e, t, r = {}) =>
      (n) => {
        let { libraryOptions: i, target: s } = n ?? {},
          o = t1({ ...(i ?? {}), target: s, io: t, processors: r })
        return (t6(e, o), t8(o, e), re(o, e))
      },
    rr = (e, t, r) => {
      ;(void 0 === e[t] || r > e[t]) && (e[t] = r)
    },
    rn = (e, t, r) => {
      ;(void 0 === e[t] || r < e[t]) && (e[t] = r)
    },
    ri = (e, t) => {
      ;(rr(e, "minimum", t), rn(e, "maximum", t))
    },
    rs = (e, t) => {
      ;(e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t))
    },
    ro = (e, t) => {
      ;(e.patterns ?? (e.patterns = new Set()), e.patterns.add(t))
    },
    ra = (e, t) => {
      e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t]
    },
    rl = (e, t) => {
      ;((e.format = t), t.includes("int") && (e.isInt = !0))
    },
    ru = (e, t) => rr(e, "minimum", t.minimum),
    rc = (e, t) => rn(e, "maximum", t.maximum),
    rp = (e) => (t, r) => {
      rl(t, r.format)
      let [n, i] = e[r.format]
      ;(rr(t, "minimum", n), rn(t, "maximum", i))
    },
    rd = {
      greater_than: (e, t) => rr(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
      less_than: (e, t) => rn(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
      multiple_of: (e, t) => rs(e, t.value),
      number_format: rp(eB),
      bigint_format: rp(eM),
      min_length: ru,
      max_length: rc,
      length_equals: (e, t) => ri(e, t.length),
      min_size: ru,
      max_size: rc,
      size_equals: (e, t) => ri(e, t.size),
      string_format: (e, t) => {
        ;(rl(e, t.format),
          t.pattern && ro(e, t.pattern),
          ("base64" === t.format || "base64url" === t.format) && (e.contentEncoding = t.format),
          (t.local || -1 === t.precision) && (e.laxFormat = !0))
      },
      mime_type: (e, t) => ra(e, t.mime),
    }
  new WeakMap()
  let rh = Symbol()
  function rf(e, t, r, n, i) {
    let s = !1,
      o = JSON.stringify(e, (e, t) => ("bigint" != typeof t ? t : ((s = !0), null)))
    return s ? (t2(t, r, n, i, "BigInt defaults cannot be represented in JSON Schema"), rh) : JSON.parse(o)
  }
  let rm = (e, t, r, n) => {
      let i = e._zod.def
      ;(t6(i.innerType, t, n), (t.seen.get(e).ref = i.innerType))
    },
    ry = {
      get: function () {
        let e = this._zod
        return (e.message ?? (e.message = JSON.stringify(e.def, eb, 2)), e.message)
      },
      set: function (e) {
        this._zod.message = e
      },
      enumerable: !0,
      configurable: !0,
    },
    rg = { value: void 0, enumerable: !1 },
    rb = new WeakSet([Object.prototype, Error.prototype]),
    rv = (e, t) => {
      ;((e.name = "$ZodError"),
        (rg.value = t),
        Object.defineProperty(e, "issues", rg),
        (rg.value = void 0),
        Object.defineProperty(e, "message", ry))
      let r = Object.getPrototypeOf(e)
      rb.has(r) ||
        (rb.add(r),
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
    rw = e4("$ZodError", rv)
  function r_(e, t) {
    return { callee: t?.callee ?? e, Err: t?.Err }
  }
  e4("$ZodError", rv, void 0, { Parent: Error })
  let rk = (e) => {
      let t = (r, n, i, s) => {
        let o = i ? { ...i, async: !1 } : { async: !1 },
          a = r._zod.run({ value: n, issues: [] }, o)
        if (a instanceof Promise) throw new e8()
        if (a.issues.length) {
          let r = new (s?.Err ?? e)(a.issues.map((e) => eV(e, o, e7())))
          throw (eE(r, s?.callee ?? t), r)
        }
        return a.value
      }
      return t
    },
    rz = (e) => {
      let t = async (r, n, i, s) => {
        let o = i ? { ...i, async: !0 } : { async: !0 },
          a = r._zod.run({ value: n, issues: [] }, o)
        if ((a instanceof Promise && (a = await a), a.issues.length)) {
          let r = new (s?.Err ?? e)(a.issues.map((e) => eV(e, o, e7())))
          throw (eE(r, s?.callee ?? t), r)
        }
        return a.value
      }
      return t
    },
    rS = (e) => (t, r, n) => {
      let i = n ? { ...n, async: !1 } : { async: !1 },
        s = t._zod.run({ value: r, issues: [] }, i)
      if (s instanceof Promise) throw new e8()
      return s.issues.length ? rx(e, s.issues, i) : { success: !0, data: s.value }
    }
  function rx(e, t, r) {
    let n
    return {
      success: !1,
      get error() {
        return (n || ((n = new e(t.map((e) => eV(e, r, e7())))), (t = void 0), (r = void 0)), n)
      },
      set error(e) {
        ;((n = e), (t = void 0), (r = void 0))
      },
    }
  }
  let rP = (e) => async (t, r, n) => {
      let i = n ? { ...n, async: !0 } : { async: !0 },
        s = t._zod.run({ value: r, issues: [] }, i)
      return (
        s instanceof Promise && (s = await s),
        s.issues.length ? rx(e, s.issues, i) : { success: !0, data: s.value }
      )
    },
    rR = Symbol.for("zod.compile.invalid"),
    rE = Symbol.for("zod.compile.fallback"),
    rO = new WeakSet([Object.prototype, Error.prototype])
  function rA(e, t, r) {
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
  let rT = e4(
      "ZodError",
      (e, t) => {
        ;(rw.init(e, t), (e.name = "ZodError"))
        let r = Object.getPrototypeOf(e)
        rO.has(r) ||
          (rO.add(r),
          rA(
            r,
            "format",
            (e) => (t) =>
              (function (e, t = (e) => e.message) {
                let r = { _errors: [] },
                  n = (e, i = []) => {
                    for (let s of e.issues)
                      if ("invalid_union" === s.code && s.errors.length)
                        s.errors.map((e) => n({ issues: e }, [...i, ...s.path]))
                      else if ("invalid_key" === s.code) n({ issues: s.issues }, [...i, ...s.path])
                      else if ("invalid_element" === s.code) n({ issues: s.issues }, [...i, ...s.path])
                      else {
                        let e = [...i, ...s.path]
                        if (0 === e.length) r._errors.push(t(s))
                        else {
                          let n = r,
                            i = 0
                          for (; i < e.length;) {
                            let r = e[i],
                              o = i === e.length - 1
                            if ("_errors" === r) {
                              ;(o && n._errors.push(t(s)), i++)
                              continue
                            }
                            Object.prototype.hasOwnProperty.call(n, r) ||
                              Object.defineProperty(n, r, {
                                value: { _errors: [] },
                                enumerable: !0,
                                writable: !0,
                                configurable: !0,
                              })
                            let a = n[r]
                            ;(o && a._errors.push(t(s)), (n = a), i++)
                          }
                        }
                      }
                  }
                return (n(e), r)
              })(e, t),
          ),
          rA(
            r,
            "flatten",
            (e) => (t) =>
              (function (e, t = (e) => e.message) {
                let r = {},
                  n = []
                for (let o of e.issues)
                  if (o.path.length > 0) {
                    var i, s
                    ;((i = o.path[0]),
                    (s = () => []),
                    !Object.prototype.hasOwnProperty.call(r, i) &&
                      ("__proto__" === i
                        ? Object.defineProperty(r, i, { value: s(), writable: !0, enumerable: !0, configurable: !0 })
                        : (r[i] = s())),
                    r[i]).push(t(o))
                  } else n.push(t(o))
                return { formErrors: n, fieldErrors: r }
              })(e, t),
          ),
          rA(r, "addIssue", (e) => (t) => {
            ;(e.issues.push(t), (e.message = JSON.stringify(e.issues, eb, 2)))
          }),
          rA(r, "addIssues", (e) => (t) => {
            ;(e.issues.push(...t), (e.message = JSON.stringify(e.issues, eb, 2)))
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
    rj = rk(rT),
    r$ = rz(rT),
    rI = rS(rT),
    rC = rP(rT),
    rU =
      ((n = rk(rT)),
      (i = (e, t, r, s) => n(e, t, r ? { ...r, direction: "backward" } : { direction: "backward" }, r_(i, s)))),
    rB = ((s = rk(rT)), (o = (e, t, r, n) => s(e, t, r, r_(o, n)))),
    rM =
      ((a = rz(rT)),
      (l = async (e, t, r, n) => {
        let i = r ? { ...r, direction: "backward" } : { direction: "backward" }
        return await a(e, t, i, r_(l, n))
      })),
    rN = ((u = rz(rT)), (c = async (e, t, r, n) => await u(e, t, r, r_(c, n)))),
    rD = (e, t, r) => {
      let n = r ? { ...r, direction: "backward" } : { direction: "backward" }
      return rS(rT)(e, t, n)
    },
    rL = (e, t, r) => rS(rT)(e, t, r),
    rF = async (e, t, r) => {
      let n = r ? { ...r, direction: "backward" } : { direction: "backward" }
      return rP(rT)(e, t, n)
    },
    rZ = async (e, t, r) => rP(rT)(e, t, r)
  function rJ() {
    e5.memoizer || e7({ memoizer: to })
  }
  let rW = e4(
      "ZodType",
      (e, t) => (
        e5.localeError ||
          e7({
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
                    if (1 === r.values.length) return `Invalid input: expected ${eU(r.values[0])}`
                    return `Invalid option: expected one of ${eg(r.values, "|")}`
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
                    return `Unrecognized key${r.keys.length > 1 ? "s" : ""}: ${eg(r.keys, ", ")}`
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
        tm.init(e, t),
        (e.def = t),
        (e.type = t.type),
        e
      ),
      {
        check(...e) {
          let t = this.def
          return this.clone(
            eR(t, {
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
          return eI(this, e, t)
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
              return new ns({ type: "custom", check: "custom", fn: e, ...eC(t) })
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
                      ? t.issues.push(eQ(e, t.value, n._zod.def))
                      : (e.fatal && (e.continue = !1),
                        e.code ?? (e.code = "custom"),
                        "input" in e || (e.input = t.value),
                        e.inst ?? (e.inst = n),
                        e.continue ?? (e.continue = !n._zod.def.abort),
                        t.issues.push(eQ(e)))
                  }),
                  e(t.value, t)
                )),
                ((i = new ta({ check: "custom", ...eC(t) }))._zod.check = r),
                (n = i)
              )
            })(e, t),
          )
        },
        overwrite(e) {
          return this.check(new td({ check: "overwrite", tx: e }))
        },
        optional() {
          return r4(this)
        },
        exactOptional() {
          var e
          return ((e = this), new r8({ type: "optional", innerType: e }))
        },
        nullable() {
          return r5(this)
        },
        nullish() {
          return r4(r5(this))
        },
        nonoptional(e) {
          var t
          return ((t = this), new ne({ type: "nonoptional", innerType: t, ...eC(e) }))
        },
        array() {
          return (function (e) {
            return new rG({ type: "array", element: e, ...eC(void 0) })
          })(this)
        },
        or(e) {
          return new rX({ type: "union", options: [this, e], ...eC(void 0) })
        },
        and(e) {
          var t
          return ((t = this), new rY({ type: "intersection", left: t, right: e }))
        },
        transform(e) {
          return nn(this, new r2({ type: "transform", transform: e }))
        },
        default(e) {
          var t, r
          return (
            (t = this),
            (r = e),
            new r7({
              type: "default",
              innerType: t,
              get defaultValue() {
                return "function" == typeof r ? r() : ej(r)
              },
            })
          )
        },
        prefault(e) {
          var t, r
          return (
            (t = this),
            (r = e),
            new r9({
              type: "prefault",
              innerType: t,
              get defaultValue() {
                return "function" == typeof r ? r() : ej(r)
              },
            })
          )
        },
        catch(e) {
          return (function (e, t) {
            let r
            return new nt({
              type: "catch",
              innerType: e,
              catchValue: "function" == typeof t ? t : (((r = () => t)["~constantCatch"] = !0), r),
            })
          })(this, e)
        },
        pipe(e) {
          return nn(this, e)
        },
        readonly() {
          var e
          return ((e = this), new ni({ type: "readonly", innerType: e }))
        },
        describe(e) {
          let t = this.clone()
          return (tX.add(t, { description: e }), t)
        },
        meta(...e) {
          if (0 === e.length) return tX.get(this)
          let t = this.clone()
          return (tX.add(t, e[0]), t)
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
          return eX(
            this,
            "~standard",
            { ...tg(this), jsonSchema: { input: rt(this, "input"), output: rt(this, "output") } },
            !1,
          )
        },
        set "~standard"(e) {
          eX(this, "~standard", e)
        },
        parse: function e(t, r) {
          return rj(this, t, r, { callee: e })
        },
        parseAsync: async function e(t, r) {
          return await r$(this, t, r, { callee: e })
        },
        safeParse(e, t) {
          return rI(this, e, t)
        },
        async safeParseAsync(e, t) {
          return rC(this, e, t)
        },
        get spa() {
          return this?.safeParseAsync
        },
        set spa(e) {
          eX(this, "spa", e)
        },
        validate(e, t) {
          let r = this._zod.bag.validator
          if (void 0 !== r) {
            if (r(e) !== rR) return !0
            if (!0 === r.definite && void 0 === t) return !1
          }
          return (function (e, t, r) {
            let n,
              i = r ? { ...r, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 },
              s = e._zod.bag.fallbackRun
            if (
              (s ? ((i[rE] = !0), (n = s({ value: t, issues: [] }, i))) : (n = e._zod.run({ value: t, issues: [] }, i)),
              n instanceof Promise)
            )
              throw new e8()
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
          return rU(this, t, r, { callee: e })
        },
        decode: function e(t, r) {
          return rB(this, t, r, { callee: e })
        },
        encodeAsync: async function e(t, r) {
          return await rM(this, t, r, { callee: e })
        },
        decodeAsync: async function e(t, r) {
          return await rN(this, t, r, { callee: e })
        },
        safeEncode(e, t) {
          return rD(this, e, t)
        },
        safeDecode(e, t) {
          return rL(this, e, t)
        },
        async safeEncodeAsync(e, t) {
          return rF(this, e, t)
        },
        async safeDecodeAsync(e, t) {
          return rZ(this, e, t)
        },
        toJSONSchema(e) {
          return (
            (e, t = {}) =>
            (r) => {
              let n = t1({ ...r, processors: t })
              return (t6(e, n), t8(n, e), re(n, e))
            }
          )(
            this,
            {},
          )(e)
        },
        get description() {
          return tX.get(this)?.description
        },
        get _def() {
          return this._zod.def
        },
      },
    ),
    rH = e4("ZodUnknown", (e, t) => {
      ;(tb.init(e, t), rW.init(e, t), (e._zod.processJSONSchema = (e, t, r) => void 0))
    })
  function rV() {
    return new rH({ type: "unknown" })
  }
  let rq = e4("ZodNever", (e, t) => {
    ;(tv.init(e, t),
      rW.init(e, t),
      (e._zod.processJSONSchema = (e, t, r) => {
        t.not = {}
      }))
  })
  function rK(e) {
    return new rq({ type: "never", ...eC(e) })
  }
  let rG = e4(
      "ZodArray",
      (e, t) => {
        ;(rJ(),
          tk.init(e, t),
          rW.init(e, t),
          (e._zod.processJSONSchema = (t, r, n) =>
            ((e, t, r, n) => {
              let i = e._zod.def,
                { minimum: s, maximum: o } = (function (e) {
                  let t = {},
                    r = e._zod.def
                  for (let n of e._zod.traits.has("$ZodCheck") ? [e, ...(r.checks ?? [])] : (r.checks ?? []))
                    rd[n._zod.def.check]?.(t, n._zod.def)
                  let n = e._zod.bag
                  for (let e of (void 0 !== n.minimum && rr(t, "minimum", n.minimum),
                  void 0 !== n.exclusiveMinimum && rr(t, "exclusiveMinimum", n.exclusiveMinimum),
                  void 0 !== n.maximum && rn(t, "maximum", n.maximum),
                  void 0 !== n.exclusiveMaximum && rn(t, "exclusiveMaximum", n.exclusiveMaximum),
                  void 0 !== n.multipleOf && rs(t, n.multipleOf),
                  void 0 !== n.format &&
                    (t.format ?? (t.format = n.format), n.format.includes("int") && (t.isInt = !0)),
                  n.mime && ra(t, n.mime),
                  n.patterns ?? []))
                    ro(t, e)
                  return t
                })(e)
              ;("number" == typeof s && (r.minItems = s),
                "number" == typeof o && (r.maxItems = o),
                (r.type = "array"),
                (r.items = t6(i.element, t, { ...n, path: [...n.path, "items"] })))
            })(e, t, r, n)),
          (e.element = t.element))
      },
      {
        min(e, t) {
          return this.check(tY(e, t))
        },
        nonempty(e) {
          return this.check(tY(1, e))
        },
        max(e, t) {
          return this.check(new tu({ check: "max_length", ...eC(t), maximum: e }))
        },
        length(e, t) {
          return this.check(new tp({ check: "length_equals", ...eC(t), length: e }))
        },
        unwrap() {
          return this.element
        },
      },
    ),
    rQ = e4(
      "ZodObject",
      (e, t) => {
        var r
        let n, i
        ;(rJ(),
          tE.init(e, t),
          rW.init(e, t),
          (e._zod.processJSONSchema = (t, r, n) =>
            ((e, t, r, n) => {
              let i = e._zod.def,
                s = i.shape
              if (
                Object.getOwnPropertySymbols(s).length &&
                t2(e, t, r, n, "Symbol keys cannot be represented in JSON Schema")
              )
                return
              for (let e in ((r.type = "object"), (r.properties = {}), s))
                e_(r.properties, e, t6(s[e], t, { ...n, path: [...n.path, "properties", e] }))
              let o = []
              for (let e of Object.keys(s)) {
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
                  : void 0 === r._zod.optout) && o.push(e)
              }
              ;(o.length > 0 && (r.required = o),
                i.catchall?._zod.def.type === "never"
                  ? (r.additionalProperties = !1)
                  : i.catchall
                    ? i.catchall &&
                      (r.additionalProperties = t6(i.catchall, t, { ...n, path: [...n.path, "additionalProperties"] }))
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
          return r1(Object.keys(this._zod.def.shape))
        },
        catchall(e) {
          return this.clone(eR(this._zod.def, { catchall: e }))
        },
        passthrough() {
          return this.clone(eR(this._zod.def, { catchall: rV() }))
        },
        loose() {
          return this.clone(eR(this._zod.def, { catchall: rV() }))
        },
        strict() {
          return this.clone(eR(this._zod.def, { catchall: rK() }))
        },
        strip() {
          return this.clone(eR(this._zod.def, { catchall: void 0 }))
        },
        extend(e) {
          if (!eT(e)) throw Error("Invalid input to extend: expected a plain object")
          let t = this._zod.def.checks
          if (t && t.length > 0) {
            let t = ez(this)
            for (let r of Reflect.ownKeys(e))
              if (void 0 !== Object.getOwnPropertyDescriptor(t, r))
                throw Error(
                  "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                )
          }
          return eI(this, eR(this._zod.def, { shape: eD(this, e) }))
        },
        safeExtend(e) {
          if (!eT(e)) throw Error("Invalid input to safeExtend: expected a plain object")
          return eI(this, eR(this._zod.def, { shape: eD(this, e) }))
        },
        merge(e) {
          if (!e?._zod?.def)
            throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.")
          if (this._zod.def.checks?.length)
            throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.")
          let t = {}
          return (
            eP(t, this, Reflect.ownKeys(ez(this))),
            eP(t, e, Reflect.ownKeys(ez(e))),
            eI(
              this,
              eR(this._zod.def, {
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
            return (eP(i, e, eN(e, t)), eI(e, eR(r, { shape: i, checks: [] })))
          })(this, e)
        },
        omit(e) {
          return (function (e, t) {
            let r = e._zod.def,
              n = r.checks
            if (n && n.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements")
            let i = new Set(eN(e, t)),
              s = {}
            return (
              eP(
                s,
                e,
                Reflect.ownKeys(ez(e)).filter((e) => !i.has(e)),
              ),
              eI(e, eR(r, { shape: s, checks: [] }))
            )
          })(this, e)
        },
        partial(...e) {
          return eL(r6, this, e[0])
        },
        exactPartial(...e) {
          return eL(r8, this, e[0], "exactPartial")
        },
        required(...e) {
          var t
          let r, n
          return (
            (r = (t = e[0]) ? new Set(eN(this, t)) : void 0),
            eP((n = {}), this, Reflect.ownKeys(ez(this)), (e, t) =>
              r && !r.has(t) ? e : new ne({ type: "nonoptional", innerType: e }),
            ),
            eI(this, eR(this._zod.def, { shape: n }))
          )
        },
      },
    ),
    rX = e4("ZodUnion", (e, t) => {
      ;(tA.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, s, o
          ;((s = !1 === (i = e._zod.def).inclusive),
            (o = i.options.map((e, r) => t6(e, t, { ...n, path: [...n.path, s ? "oneOf" : "anyOf", r] }))),
            s ? (r.oneOf = o) : (r.anyOf = o))
        }),
        (e.options = t.options))
    }),
    rY = e4("ZodIntersection", (e, t) => {
      ;(tT.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, s, o, a, l
          ;((s = t6((i = e._zod.def).left, t, { ...n, path: [...n.path, "allOf", 0] })),
            (o = t6(i.right, t, { ...n, path: [...n.path, "allOf", 1] })),
            (r.allOf = l =
              [
                ...((a = (e) => "allOf" in e && 1 === Object.keys(e).length)(s) ? s.allOf : [s]),
                ...(a(o) ? o.allOf : [o]),
              ]),
            t.intersections.push(l))
        }))
    }),
    r0 = e4("ZodEnum", (e, t) => {
      ;(t$.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) =>
          ((e, t) => {
            let r = ey(e._zod.def.entries)
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
        return new r0({ ...t, checks: [], ...eC(n), entries: i })
      }),
        (e.exclude = (e, n) => {
          let i = { ...t.entries }
          for (let t of e)
            if (r.has(t)) delete i[t]
            else throw Error(`Key ${t} not found in enum`)
          return new r0({ ...t, checks: [], ...eC(n), entries: i })
        }))
    })
  function r1(e, t) {
    return new r0({ type: "enum", entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e, ...eC(t) })
  }
  let r2 = e4("ZodTransform", (e, t) => {
      ;(rJ(),
        tI.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          t2(e, t, r, n, "Transforms cannot be represented in JSON Schema")
        }),
        (e._zod.parse = (r, n) => {
          if ("backward" === n.direction) throw new e3(e.constructor.name)
          r.addIssue = (n) => {
            "string" == typeof n
              ? r.issues.push(eQ(n, r.value, t))
              : (n.fatal && (n.continue = !1),
                n.code ?? (n.code = "custom"),
                "input" in n || (n.input = r.value),
                n.inst ?? (n.inst = e),
                r.issues.push(eQ(n)))
          }
          let i = t.transform(r.value, r)
          return i instanceof Promise ? i.then((e) => ((r.value = e), r)) : ((r.value = i), r)
        }))
    }),
    r6 = e4("ZodOptional", (e, t) => {
      ;(tU.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => rm(e, t, r, n)),
        (e.unwrap = () => e._zod.def.innerType))
    })
  function r4(e) {
    return new r6({ type: "optional", innerType: e })
  }
  let r8 = e4("ZodExactOptional", (e, t) => {
      ;(tB.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => rm(e, t, r, n)),
        (e.unwrap = () => e._zod.def.innerType))
    }),
    r3 = e4("ZodNullable", (e, t) => {
      ;(tM.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, s, o
          ;((s = t6((i = e._zod.def).innerType, t, n)),
            (o = t.seen.get(e)),
            "openapi-3.0" === t.target ? ((o.ref = i.innerType), (r.nullable = !0)) : (r.anyOf = [s, { type: "null" }]))
        }),
        (e.unwrap = () => e._zod.def.innerType))
    })
  function r5(e) {
    return new r3({ type: "nullable", innerType: e })
  }
  let r7 = e4("ZodDefault", (e, t) => {
      ;(tN.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, s
          ;(t6((i = e._zod.def).innerType, t, n),
            (t.seen.get(e).ref = i.innerType),
            (s = rf(i.defaultValue, e, t, r, n)) !== rh && (r.default = s))
        }),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap))
    }),
    r9 = e4("ZodPrefault", (e, t) => {
      ;(tL.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) =>
          ((e, t, r, n) => {
            let i = e._zod.def
            if ((t6(i.innerType, t, n), (t.seen.get(e).ref = i.innerType), "input" !== t.io)) return
            let s = rf(i.defaultValue, e, t, r, n)
            s !== rh && (r._prefault = s)
          })(e, t, r, n)),
        (e.unwrap = () => e._zod.def.innerType))
    }),
    ne = e4("ZodNonOptional", (e, t) => {
      ;(tF.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i
          ;(t6((i = e._zod.def).innerType, t, n), (t.seen.get(e).ref = i.innerType))
        }),
        (e.unwrap = () => e._zod.def.innerType))
    }),
    nt = e4("ZodCatch", (e, t) => {
      ;(tW.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) =>
          ((e, t, r, n) => {
            let i,
              s = e._zod.def
            ;(t6(s.innerType, t, n), (t.seen.get(e).ref = s.innerType))
            try {
              i = s.catchValue(void 0)
            } catch {
              t2(e, t, r, n, "Dynamic catch values are not supported in JSON Schema")
              return
            }
            r.default = i
          })(e, t, r, n)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap))
    }),
    nr = e4("ZodPipe", (e, t) => {
      ;(tH.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i, s, o
          ;((s = (i = e._zod.def).in._zod.traits.has("$ZodTransform")),
            t6((o = "input" === t.io ? (s ? i.out : i.in) : i.out), t, n),
            (t.seen.get(e).ref = o))
        }),
        (e.in = t.in),
        (e.out = t.out))
    })
  function nn(e, t) {
    return new nr({ type: "pipe", in: e, out: t })
  }
  let ni = e4("ZodReadonly", (e, t) => {
      ;(tq.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          let i
          ;(t6((i = e._zod.def).innerType, t, n), (t.seen.get(e).ref = i.innerType), (r.readOnly = !0))
        }),
        (e.unwrap = () => e._zod.def.innerType))
    }),
    ns = e4("ZodCustom", (e, t) => {
      ;(tG.init(e, t),
        rW.init(e, t),
        (e._zod.processJSONSchema = (t, r, n) => {
          t2(e, t, r, n, "Custom types cannot be represented in JSON Schema")
        }))
    }),
    no = new rQ({ type: "object", shape: { type: r1(["pull", "close"]) }, catchall: rK(), ...eC(void 0) }),
    na = !1
  function nl(e) {
    return null != e && "object" == typeof e && "function" == typeof e.postMessage && "function" == typeof e.start
  }
  ;(window.addEventListener("message", (e) => {
    let t
    if (
      e.source !== window ||
      (function (e, { requireSkybridge: t = !1, allowStaging: r } = {}) {
        let n = (function (e, { allowStaging: t } = {}) {
          let r = f(e)
          return null == r ||
            ("https:" !== r.protocol && "codex-sandbox:" !== r.protocol) ||
            "" !== r.port ||
            "" !== r.username ||
            "" !== r.password ||
            !(function (e, { allowStaging: t = !1 } = {}) {
              let r = ["web-sandbox.oaiusercontent.com"]
              return (
                t && r.push("staging-web-sandbox.oaiusercontent.com"),
                r.some((t) => e === t || e.endsWith(`.${t}`))
              )
            })(r.hostname, { allowStaging: t })
            ? null
            : r
        })(e, { allowStaging: r })
        return null == n || (t && ("/" !== n.pathname || "skybridge" !== n.searchParams.get("app")))
          ? null
          : `${n.protocol}//${n.host}`
      })(window.location.href, { requireSkybridge: !0 }) !== window.location.origin ||
      null == e.data ||
      "object" != typeof e.data ||
      "init" !== Reflect.get(e.data, "type")
    )
      return
    let r = e.data.ports,
      n = e.data.replyPort
    if (null == r || "object" != typeof r || !nl(n) || na) return
    let i = (function (e) {
      let t = f(e)
      if (null == t || 0 === t.hash.length) return null
      let r = new URLSearchParams(t.hash.slice(1)).get("initId")
      return null != r && /^[A-Za-z0-9_-]{1,128}$/.test(r) ? r : null
    })(window.location.href)
    if (null == i) return
    let s = h.filter((e) => nl(Reflect.get(r, e)))
    if (d.filter((e) => !nl(Reflect.get(r, e))).length > 0) return
    let o = s.map((e) =>
      (function (e, t) {
        let r = Reflect.get(e, t)
        if (!nl(r)) throw Error(`Missing required MCP sandbox frame port: ${t}`)
        return r
      })(r, e),
    )
    ;((na = !0),
      p.ipcRenderer.on("codex-shared-texture-create", (e) => {
        !(async function (e) {
          let [r, ...n] = e.ports
          if (r)
            try {
              if (n.length !== +!t) throw Error("Shared textures are unavailable.")
              if (!t) {
                let e = n.shift()
                if (!e) throw Error("Shared texture control port missing.")
                t = (function (e) {
                  let t = new Map(),
                    r = (e) => {
                      let r = t.get(e)
                      null != r && (t.delete(e), r.postMessage({ type: "close" }), r.close())
                    },
                    n = em(e, r),
                    i = !1,
                    s = () => {
                      if (!i) {
                        for (let e of ((i = !0), t.keys())) r(e)
                        n[Symbol.dispose]()
                      }
                    },
                    o = (e) => {
                      t.has(e) && (r(e), n.closeReceiver(e).catch(s))
                    }
                  n.onRpcBroken(s)
                  try {
                    p.sharedTexture.setSharedTextureReceiver(({ importedSharedTexture: e }, r) => {
                      let n
                      try {
                        if (!i && "string" == typeof r) {
                          let i = t.get(r)
                          i && ((n = e.getVideoFrame()), i.postMessage({ type: "frame", frame: n }, [n]))
                        }
                      } catch (e) {
                        ;(console.warn("Shared texture frame delivery failed", e), "string" == typeof r && o(r))
                      } finally {
                        ;(n?.close(), e.release())
                      }
                      return Promise.resolve()
                    })
                  } catch (e) {
                    throw (console.warn("Shared texture callback registration failed", e), s(), e)
                  }
                  return async (e) => {
                    if (i) throw Error("MCP App closed.")
                    let { receiverId: r, connectionToken: a } = await n.createReceiver()
                    if (i) throw Error("MCP App closed.")
                    let { port1: l, port2: u } = new MessageChannel()
                    ;(t.set(r, l),
                      (l.onmessage = (e) => {
                        let t = no.safeParse(e.data)
                        t.success && "close" !== t.data.type ? n.pull(r).catch(s) : o(r)
                      }),
                      l.addEventListener("close", () => o(r)),
                      (l.onmessageerror = () => o(r)))
                    try {
                      e.postMessage(["RESOLVE", { connectionToken: a, port: u }], [u])
                    } catch (e) {
                      throw (u.close(), o(r), e)
                    }
                  }
                })(e)
              }
              await t(r)
            } catch {
              r.postMessage(["REJECT", { message: "Cannot create shared texture receiver." }])
            } finally {
              for (let e of (r.close(), n)) e.close()
            }
        })(e)
      }),
      p.ipcRenderer.postMessage(
        "codex_desktop:mcp-app-sandbox-guest-message",
        { origin: window.location.origin, initId: i, portNames: s, type: "init" },
        [...o, n],
      ))
  }),
    (module.exports = {}))
})()
//# sourceMappingURL=sandbox-preload.js.map
