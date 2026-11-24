;(() => {
  "use strict"
  let e,
    t = Symbol("workers-module")
  ;(Symbol.dispose || (Symbol.dispose = Symbol.for("dispose")),
    Symbol.asyncDispose || (Symbol.asyncDispose = Symbol.for("asyncDispose")),
    Promise.withResolvers ||
      (Promise.withResolvers = function () {
        let e, t
        return {
          promise: new Promise((r, s) => {
            ;((e = r), (t = s))
          }),
          resolve: e,
          reject: t,
        }
      }))
  let r = globalThis[t],
    s = r ? r.RpcTarget : class {},
    o = async function () {}.constructor,
    i = "u" > typeof Buffer ? Buffer.prototype : void 0
  function n(e) {
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
      case o.prototype:
        return "function"
      case Array.prototype:
        return "array"
      case Date.prototype:
        return "date"
      case Uint8Array.prototype:
      case i:
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
      case b.prototype:
        return "stub"
      case g.prototype:
        return "rpc-promise"
      default:
        if (r) {
          if (t == r.RpcStub.prototype || e instanceof r.ServiceStub) return "rpc-target"
          else if (t == r.RpcPromise.prototype || t == r.RpcProperty.prototype) return "rpc-thenable"
        }
        if (e instanceof s) return "rpc-target"
        if (e instanceof Error) return "error"
        return "unsupported"
    }
  }
  function a() {
    throw Error("RPC map() implementation was not loaded.")
  }
  let l = { applyMap: a, sendMap: a }
  function h() {
    throw Error("Stream implementation was not loaded.")
  }
  let c = { createWritableStreamHook: h, createWritableStreamFromHook: h, createReadableStreamHook: h }
  var p = class {
      stream(e, t) {
        let r,
          s = this.call(e, t).pull()
        return (
          s instanceof Promise
            ? (r = s.then((e) => {
                e.dispose()
              }))
            : (s.dispose(), (r = Promise.resolve())),
          { promise: r }
        )
      }
    },
    u = class extends p {
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
  let d = new u(Error("Attempted to use RPC stub after it has been disposed.")),
    f = (e, t, r) => e.call(t, r),
    m = Symbol("realStub"),
    y = {
      apply(e, t, r) {
        let s = e.raw
        return new g(f(s.hook, s.pathIfPromise || [], R.fromAppParams(r)), [])
      },
      get(e, t, r) {
        let s = e.raw
        return t === m
          ? s
          : t in g.prototype
            ? s[t]
            : "string" == typeof t
              ? new g(s.hook, s.pathIfPromise ? [...s.pathIfPromise, t] : [t])
              : t !== Symbol.dispose || (s.pathIfPromise && 0 != s.pathIfPromise.length)
                ? void 0
                : () => {
                    ;(s.hook.dispose(), (s.hook = d))
                  }
      },
      has(e, t) {
        let r = e.raw
        return (
          t === m ||
          (t in g.prototype
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
      set(e, t, r, s) {
        throw Error("Can't assign properties on RPC stubs.")
      },
      setPrototypeOf(e, t) {
        throw Error("Can't override prototype of RPC stubs.")
      },
    }
  var b = class e extends s {
      static setMessagePortServiceName(t, r) {
        if (!(t instanceof e)) return
        let s = w(t)
        if (!(s instanceof z) || !s.entry) return
        let o = s.entry
        ;(null != r && (o.session.hasMessagePortServices = !0),
          void 0 === o.messagePortService
            ? (o.messagePortService = null != r ? { service: r } : null)
            : o.messagePortService?.service !== r && (o.messagePortService = null))
      }
      constructor(e, t) {
        if ((super(), !(e instanceof p))) {
          let r = e
          if (((e = r instanceof s || r instanceof Function ? A.create(r, void 0) : new S(R.fromAppReturn(r))), t))
            throw TypeError("RpcStub constructor expected one argument, received two.")
        }
        ;((this.hook = e), (this.pathIfPromise = t))
        let r = () => {}
        return ((r.raw = this), new Proxy(r, y))
      }
      hook
      pathIfPromise
      dup() {
        let t = this[m]
        return new e(t.pathIfPromise ? t.hook.get(t.pathIfPromise) : t.hook.dup())
      }
      onRpcBroken(e) {
        this[m].hook.onBroken(e)
      }
      map(e) {
        let { hook: t, pathIfPromise: r } = this[m]
        return l.sendMap(t, r || [], e)
      }
      toString() {
        return "[object RpcStub]"
      }
    },
    g = class extends b {
      constructor(e, t) {
        super(e, t)
      }
      then(e, t) {
        return v(this).then(...arguments)
      }
      catch(e) {
        return v(this).catch(...arguments)
      }
      finally(e) {
        return v(this).finally(...arguments)
      }
      toString() {
        return "[object RpcPromise]"
      }
    }
  function w(e) {
    let { hook: t, pathIfPromise: r } = e[m]
    if (!r || !(r.length > 0)) return t
  }
  async function v(e) {
    let { hook: t, pathIfPromise: r } = e[m]
    return (r.length > 0 && (t = t.get(r)), (await t.pull()).deliverResolve())
  }
  var R = class e {
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
        s = [],
        o = []
      for (let e of t) {
        for (let t of (e.ensureDeepCopied(), e.hooks)) r.push(t)
        for (let t of e.promises)
          (t.parent === e && (t = { parent: o, property: o.length, promise: t.promise }), s.push(t))
        o.push(e.value)
      }
      return new e(o, "owned", r, s)
    }
    static forEvaluate(t, r) {
      return new e(null, "owned", t, r)
    }
    static deepCopyFrom(t, r, s) {
      let o = new e(null, "owned", [], [])
      return ((o.value = o.deepCopy(t, r, "value", o, !0, s)), o)
    }
    constructor(e, t, r, s) {
      ;((this.value = e), (this.source = t), (this.hooks = r), (this.promises = s))
    }
    rpcTargets
    getHookForRpcTarget(e, t, r = !0) {
      if ("params" === this.source) {
        if (r) {
          let t = e
          "function" == typeof t.dup && (e = t.dup())
        }
        return A.create(e, t)
      }
      if ("return" === this.source) {
        let s = this.rpcTargets?.get(e)
        if (s)
          if (r) return s.dup()
          else return (this.rpcTargets?.delete(e), s)
        return ((s = A.create(e, t)), r)
          ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, s), s.dup())
          : s
      }
      throw Error("owned payload shouldn't contain raw RpcTargets")
    }
    getHookForWritableStream(e, t, r = !0) {
      if ("params" === this.source) return c.createWritableStreamHook(e)
      if ("return" === this.source) {
        let t = this.rpcTargets?.get(e)
        if (t)
          if (r) return t.dup()
          else return (this.rpcTargets?.delete(e), t)
        return ((t = c.createWritableStreamHook(e)), r)
          ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, t), t.dup())
          : t
      }
      throw Error("owned payload shouldn't contain raw WritableStreams")
    }
    getHookForReadableStream(e, t, r = !0) {
      if ("params" === this.source) return c.createReadableStreamHook(e)
      if ("return" === this.source) {
        let t = this.rpcTargets?.get(e)
        if (t)
          if (r) return t.dup()
          else return (this.rpcTargets?.delete(e), t)
        return ((t = c.createReadableStreamHook(e)), r)
          ? (this.rpcTargets || (this.rpcTargets = new Map()), this.rpcTargets.set(e, t), t.dup())
          : t
      }
      throw Error("owned payload shouldn't contain raw ReadableStreams")
    }
    deepCopy(e, t, r, s, o, i) {
      switch (n(e)) {
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
          for (let s = 0; s < t; s++) r[s] = this.deepCopy(e[s], e, s, r, o, i)
          return r
        }
        case "object": {
          let t = {}
          for (let r in e) t[r] = this.deepCopy(e[r], e, r, t, o, i)
          return t
        }
        case "stub":
        case "rpc-promise": {
          let t
          if (
            ((t = o
              ? (function (e) {
                  let { hook: t, pathIfPromise: r } = e[m]
                  return r ? t.get(r) : t.dup()
                })(e)
              : (function (e) {
                  let { hook: t, pathIfPromise: r } = e[m]
                  return r && r.length > 0 ? t.get(r) : t
                })(e)),
            !(e instanceof g))
          )
            return (this.hooks.push(t), new b(t))
          {
            let e = new g(t, [])
            return (this.promises.push({ parent: s, property: r, promise: e }), e)
          }
        }
        case "function":
        case "rpc-target": {
          let r
          return ((r = i ? i.getHookForRpcTarget(e, t, o) : A.create(e, t)), this.hooks.push(r), new b(r))
        }
        case "rpc-thenable": {
          let n
          return (
            (n = i ? new g(i.getHookForRpcTarget(e, t, o), []) : new g(A.create(e, t), [])),
            this.promises.push({ parent: s, property: r, promise: n }),
            n
          )
        }
        case "writable": {
          let r
          return ((r = i ? i.getHookForWritableStream(e, t, o) : c.createWritableStreamHook(e)), this.hooks.push(r), e)
        }
        case "readable": {
          let r
          return ((r = i ? i.getHookForReadableStream(e, t, o) : c.createReadableStreamHook(e)), this.hooks.push(r), e)
        }
        case "headers":
          return new Headers(e)
        case "request":
          return (e.body && this.deepCopy(e.body, e, "body", e, o, i), new Request(e))
        case "response":
          return (e.body && this.deepCopy(e.body, e, "body", e, o, i), new Response(e.body, e))
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
    deliverTo(t, r, s) {
      if ((this.ensureDeepCopied(), this.value instanceof g)) e.deliverRpcPromiseTo(this.value, t, r, s)
      else for (let o of ((t[r] = this.value), this.promises)) e.deliverRpcPromiseTo(o.promise, o.parent, o.property, s)
    }
    static deliverRpcPromiseTo(t, r, s, o) {
      let i = w(t)
      if (!i) throw Error("property promises should have been resolved earlier")
      let n = i.pull()
      n instanceof e
        ? n.deliverTo(r, s, o)
        : o.push(
            n.then((e) => {
              let t = []
              if ((e.deliverTo(r, s, t), t.length > 0)) return Promise.all(t)
            }),
          )
    }
    async deliverCall(t, r) {
      try {
        let s = []
        ;(this.deliverTo(this, "value", s), s.length > 0 && (await Promise.all(s)))
        let o = Function.prototype.apply.call(t, r, this.value)
        if (o instanceof g) return e.fromAppReturn(o)
        return e.fromAppReturn(await o)
      } finally {
        this.dispose()
      }
    }
    async deliverStreamWrite(t) {
      try {
        let r = []
        ;(this.deliverTo(this, "value", r), r.length > 0 && (await Promise.all(r)))
        let s = this.value[0]
        if ((this.hooks.length > 0 || this.promises.length > 0) && s instanceof Object)
          return (
            Symbol.dispose in s ||
              Object.defineProperty(s, Symbol.dispose, {
                value: () => this.dispose(),
                writable: !0,
                enumerable: !1,
                configurable: !0,
              }),
            await t.write(s),
            e.fromAppReturn(void 0)
          )
        return (await t.write(s), this.dispose(), e.fromAppReturn(void 0))
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
      switch (n(e)) {
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
          let t = w(e)
          t && t.dispose()
          return
        }
        case "function":
        case "rpc-target": {
          let t = this.rpcTargets?.get(e)
          t ? (t.dispose(), this.rpcTargets.delete(e)) : x(e)
          return
        }
        case "request":
        case "response":
          e.body && this.disposeImpl(e.body, e)
          return
        case "writable": {
          let t = this.rpcTargets?.get(e)
          ;(t ? this.rpcTargets.delete(e) : (t = c.createWritableStreamHook(e)), t.dispose())
          return
        }
        case "readable": {
          let t = this.rpcTargets?.get(e)
          ;(t ? this.rpcTargets.delete(e) : (t = c.createReadableStreamHook(e)), t.dispose())
          return
        }
      }
    }
    ignoreUnhandledRejections() {
      this.hooks
        ? (this.hooks.forEach((e) => {
            e.ignoreUnhandledRejections()
          }),
          this.promises.forEach((e) => e.promise[m].hook.ignoreUnhandledRejections()))
        : this.ignoreUnhandledRejectionsImpl(this.value)
    }
    ignoreUnhandledRejectionsImpl(e) {
      switch (n(e)) {
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
          e[m].hook.ignoreUnhandledRejections()
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
  function k(e, t, r, s) {
    for (let o = 0; o < r.length; o++) {
      t = e
      let i = r[o]
      if (i in Object.prototype) {
        e = void 0
        continue
      }
      switch (n(e)) {
        case "object":
        case "function":
          e = Object.hasOwn(e, i) ? e[i] : void 0
          break
        case "array":
          e = Number.isInteger(i) && i >= 0 ? e[i] : void 0
          break
        case "rpc-target":
        case "rpc-thenable":
          if (Object.hasOwn(e, i))
            throw TypeError(
              `Attempted to access property '${i}', which is an instance property of the RpcTarget. To avoid leaking private internals, instance properties cannot be accessed over RPC. If you want to make this property available over RPC, define it as a method or getter on the class, instead of an instance property.`,
            )
          ;((e = e[i]), (s = null))
          break
        case "stub":
        case "rpc-promise": {
          let { hook: t, pathIfPromise: s } = e[m]
          return { hook: t, remainingPath: s ? s.concat(r.slice(o)) : r.slice(o) }
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
          e = e[i]
          break
        case "unsupported":
          if (0 === o) throw TypeError("RPC stub points at a non-serializable type.")
          {
            let e = r.slice(0, o).join("."),
              t = r.slice(0, o).join(".")
            throw TypeError(`'${e}' is not a serializable type, so property ${t} cannot be accessed.`)
          }
        default:
          throw TypeError("unreachable")
      }
    }
    if (e instanceof g) {
      let { hook: t, pathIfPromise: r } = e[m]
      return { hook: t, remainingPath: r || [] }
    }
    return { value: e, parent: t, owner: s }
  }
  var E = class extends p {
      call(e, t) {
        try {
          let { value: r, owner: s } = this.getValue(),
            o = k(r, void 0, e, s)
          if (o.hook) return o.hook.call(o.remainingPath, t)
          if ("function" != typeof o.value) throw TypeError(`'${e.join(".")}' is not a function.`)
          return new P(t.deliverCall(o.value, o.parent).then((e) => new S(e)))
        } catch (e) {
          return new u(e)
        }
      }
      map(e, t, r) {
        try {
          let s
          try {
            let { value: t, owner: r } = this.getValue()
            s = k(t, void 0, e, r)
          } catch (e) {
            for (let e of t) e.dispose()
            throw e
          }
          if (s.hook) return s.hook.map(s.remainingPath, t, r)
          return l.applyMap(s.value, s.parent, s.owner, t, r)
        } catch (e) {
          return new u(e)
        }
      }
      get(e) {
        try {
          let { value: t, owner: r } = this.getValue()
          if (0 === e.length && null === r) throw Error("Can't dup an RpcTarget stub as a promise.")
          let s = k(t, void 0, e, r)
          if (s.hook) return s.hook.get(s.remainingPath)
          return new S(R.deepCopyFrom(s.value, s.parent, s.owner))
        } catch (e) {
          return new u(e)
        }
      }
    },
    S = class e extends E {
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
        return new e(R.deepCopyFrom(t.value, void 0, t))
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
        this.payload && this.payload.value instanceof b && this.payload.value.onRpcBroken(e)
      }
    }
  function x(e) {
    if (Symbol.dispose in e)
      try {
        e[Symbol.dispose]()
      } catch (e) {
        Promise.reject(e)
      }
  }
  var A = class e extends E {
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
          ? Promise.resolve(e).then((e) => R.fromAppReturn(e))
          : Promise.reject(Error("Tried to resolve a non-promise stub."))
      }
      ignoreUnhandledRejections() {}
      dispose() {
        this.target && (this.refcount && 0 == --this.refcount.count && x(this.target), (this.target = void 0))
      }
      onBroken(e) {}
    },
    P = class e extends p {
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
      map(t, r, s) {
        return new e(
          this.promise.then(
            (e) => e.map(t, r, s),
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
  let C = { maxBigIntDigits: 16384, maxDepth: 256, maxMessageSize: 0x2000000 },
    T = 1 === new Uint8Array(new Uint16Array([1]).buffer)[0],
    I = [
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
    B = {
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
    j = {
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
    U = new Map()
  for (let e of Object.keys(j)) U.set(j[e], e)
  function O(e, t) {
    if (2 !== t && 4 !== t && 8 !== t) throw RangeError(`Unsupported element size: ${t}`)
    let r = new DataView(e.buffer, e.byteOffset, e.byteLength)
    for (let s = 0; s < e.byteLength; s += t)
      switch (t) {
        case 2:
          r.setUint16(s, r.getUint16(s, !1), !0)
          break
        case 4:
          r.setUint32(s, r.getUint32(s, !1), !0)
          break
        case 8:
          r.setBigUint64(s, r.getBigUint64(s, !1), !0)
      }
  }
  let L = new (class {
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
    D = {
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
  var F = class e {
      exporter
      source
      encodingLevel
      constructor(e, t, r) {
        ;((this.exporter = e), (this.source = t), (this.encodingLevel = r))
      }
      static devaluate(t, r, s = L, o, i = "string", n) {
        let a = new e(s, o, i)
        a.messageOrigin = n
        try {
          return a.devaluateImpl(t, r, 0)
        } catch (e) {
          if (a.exports)
            try {
              s.unexport(a.exports)
            } catch (e) {}
          throw e
        }
      }
      exports
      devaluateImpl(e, t, r) {
        if (r >= 256) throw Error("Serialization exceeded maximum allowed depth. (Does the message contain cycles?)")
        switch (n(e)) {
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
            for (let s in e) t[s] = this.devaluateImpl(e[s], e, r + 1)
            return t
          }
          case "array": {
            let t = e.length,
              s = Array(t)
            for (let o = 0; o < t; o++) s[o] = this.devaluateImpl(e[o], e, r + 1)
            return [s]
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
              s = U.get(Object.getPrototypeOf(e))
            if ("ArrayBuffer" === s) t = new Uint8Array(e)
            else if (void 0 === s) t = e
            else {
              t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
              let r = B[s]
              !T && r && O((t = t.slice()), r)
            }
            if ("structuredClonable" === this.encodingLevel || "jsonCompatibleWithBytes" === this.encodingLevel)
              return void 0 === s ? ["bytes", t] : ["bytes", t, s]
            if (t.toBase64) r = t.toBase64({ omitPadding: !0 })
            else if ("u" > typeof Buffer)
              r = (t instanceof Buffer ? t : Buffer.from(t.buffer, t.byteOffset, t.byteLength)).toString("base64")
            else {
              let e = ""
              for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r])
              r = btoa(e)
            }
            return ((r = r.replace(/=+$/, "")), void 0 === s ? ["bytes", r] : ["bytes", r, s])
          }
          case "url":
            return ["url", e.href]
          case "headers":
            return ["headers", [...e]]
          case "request": {
            let t = {}
            "GET" !== e.method && (t.method = e.method)
            let s = [...e.headers]
            if ((s.length > 0 && (t.headers = s), e.body))
              ((t.body = this.devaluateImpl(e.body, e, r + 1)), (t.duplex = e.duplex || "half"))
            else if (void 0 === e.body && !["GET", "HEAD", "OPTIONS", "TRACE", "DELETE"].includes(e.method)) {
              let r = e.arrayBuffer(),
                s = new ReadableStream({
                  async start(e) {
                    try {
                      ;(e.enqueue(new Uint8Array(await r)), e.close())
                    } catch (t) {
                      e.error(t)
                    }
                  },
                }),
                o = c.createReadableStreamHook(s)
              ;((t.body = ["readable", this.exporter.createPipe(s, o)]), (t.duplex = e.duplex || "half"))
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
              s = {}
            ;(200 !== e.status && (s.status = e.status), e.statusText && (s.statusText = e.statusText))
            let o = [...e.headers]
            if (
              (o.length > 0 && (s.headers = o),
              e.cf && (s.cf = e.cf),
              e.encodeBody && "automatic" !== e.encodeBody && (s.encodeBody = e.encodeBody),
              e.webSocket)
            )
              throw TypeError("Can't serialize a Response containing a webSocket.")
            return ["response", t, s]
          }
          case "blob": {
            let t = e.stream(),
              r = c.createReadableStreamHook(t),
              s = this.exporter.createPipe(t, r)
            return ["blob", e.type, ["readable", s]]
          }
          case "error": {
            let t,
              s = e,
              o = this.exporter.onSendError(s)
            o && (s = o)
            let i = s,
              n = (e, o) => {
                let i = this.exports?.length ?? 0
                try {
                  let i = this.devaluateImpl(o, s, r + 1)
                  ;(t || (t = {}), (t[e] = i))
                } catch (e) {
                  if (this.exports && this.exports.length > i) {
                    let e = this.exports.splice(i)
                    try {
                      this.exporter.unexport(e)
                    } catch (e) {}
                  }
                }
              }
            for (let e of Object.keys(s)) "name" !== e && "message" !== e && "stack" !== e && n(e, i[e])
            ;("cause" in s && n("cause", i.cause), s instanceof AggregateError && n("errors", s.errors))
            let a = ["error", s.name, s.message]
            return (t ? (a.push(o && o.stack ? o.stack : null), a.push(t)) : o && o.stack && a.push(o.stack), a)
          }
          case "undefined":
            if ("structuredClonable" === this.encodingLevel) return
            return ["undefined"]
          case "stub":
          case "rpc-promise": {
            if (!this.source) throw Error("Can't serialize RPC stubs in this context.")
            let { hook: t, pathIfPromise: r } = e[m],
              s = this.exporter.getImport(t)
            if (void 0 !== s)
              if (!r) return ["import", s]
              else if (r.length > 0) return ["pipeline", s, r]
              else return ["pipeline", s]
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
    H = class e {
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
        let r = R.forEvaluate(this.hooks, this.promises)
        try {
          return ((r.value = this.evaluateImpl(e, r, "value", t)), r)
        } catch (e) {
          throw (r.dispose(), e)
        }
      }
      evaluateCopy(e) {
        return this.evaluate(structuredClone(e))
      }
      evaluateImpl(t, r, s, o) {
        let i = this.limits.maxDepth
        if (o >= i) throw TypeError(`Deserialization exceeded maximum allowed message depth of ${i}.`)
        if ("structuredClonable" === this.encodingLevel && (t instanceof Date || "bigint" == typeof t)) return t
        if (t instanceof Array) {
          var n
          if (1 == t.length && t[0] instanceof Array) {
            let e = t[0]
            for (let t = 0; t < e.length; t++) e[t] = this.evaluateImpl(e[t], e, t, o + 1)
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
                    s = r.length
                  e = new Uint8Array(s)
                  for (let t = 0; t < s; t++) e[t] = r.charCodeAt(t)
                }
              else break
              if (2 === t.length) return e
              if ("string" != typeof t[2]) throw TypeError(`Unknown bytes type marker type: ${typeof t[2]}`)
              if (((n = t[2]), !I.includes(n))) {
                let e = t[2].slice(0, 64)
                throw TypeError(`Unknown bytes type marker: ${e}`)
              }
              let r = t[2],
                s = B[r]
              if (void 0 !== s && e.byteLength % s != 0)
                throw TypeError(`Invalid byte length ${e.byteLength} for ${r}; expected a multiple of ${s}`)
              let o = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
              switch ((!T && void 0 !== s && O(new Uint8Array(o), s), r)) {
                case "ArrayBuffer":
                  return o
                case "DataView":
                  return new DataView(o)
                case "Int8Array":
                  return new Int8Array(o)
                case "Uint8Array":
                  return new Uint8Array(o)
                case "Uint8ClampedArray":
                  return new Uint8ClampedArray(o)
                case "Int16Array":
                  return new Int16Array(o)
                case "Uint16Array":
                  return new Uint16Array(o)
                case "Int32Array":
                  return new Int32Array(o)
                case "Uint32Array":
                  return new Uint32Array(o)
                case "BigInt64Array":
                  return new BigInt64Array(o)
                case "BigUint64Array":
                  return new BigUint64Array(o)
                case "Float32Array":
                  return new Float32Array(o)
                case "Float64Array":
                  return new Float64Array(o)
              }
            }
            case "error":
              if (t.length >= 3 && "string" == typeof t[1] && "string" == typeof t[2]) {
                let e = D[t[1]] || Error,
                  r = e === AggregateError ? new e([], t[2]) : new e(t[2])
                if (("string" == typeof t[3] && (r.stack = t[3]), t.length >= 5)) {
                  let e = t[4]
                  if (!e || "object" != typeof e || Array.isArray(e)) break
                  for (let t of Object.keys(e))
                    if ("name" !== t && "message" !== t && "stack" !== t) {
                      if (t in Object.prototype || "toJSON" === t) {
                        this.evaluateImpl(e[t], r, t, o + 1)
                        continue
                      }
                      r[t] = this.evaluateImpl(e[t], r, t, o + 1)
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
                i = t[2]
              if ("object" != typeof i || null === i) break
              if (i.body)
                if (
                  ((i.body = this.evaluateImpl(i.body, i, "body", o + 1)),
                  null === i.body ||
                    "string" == typeof i.body ||
                    i.body instanceof Uint8Array ||
                    i.body instanceof ReadableStream)
                );
                else throw TypeError("Request body must be of type ReadableStream.")
              if (
                i.signal &&
                ((i.signal = this.evaluateImpl(i.signal, i, "signal", o + 1)), !(i.signal instanceof AbortSignal))
              )
                throw TypeError("Request siganl must be of type AbortSignal.")
              if (i.headers && !(i.headers instanceof Array))
                throw TypeError("Request headers must be serialized as an array of pairs.")
              let n = new Request(e, i)
              if (!(i.body instanceof ReadableStream) || void 0 !== n.body) return n
              {
                let e = new g(
                  new P(
                    new Response(i.body).arrayBuffer().then((e) => {
                      let t = new Request(n, { body: new Uint8Array(e) })
                      return new S(R.fromAppReturn(t))
                    }),
                  ),
                  [],
                )
                return (this.promises.push({ promise: e, parent: r, property: s }), e)
              }
            }
            case "response": {
              if (3 !== t.length) break
              let e = this.evaluateImpl(t[1], r, s, o + 1)
              if (null === e || "string" == typeof e || e instanceof Uint8Array || e instanceof ReadableStream);
              else throw TypeError("Response body must be of type ReadableStream.")
              let i = t[2]
              if ("object" != typeof i || null === i) break
              if (i.webSocket) throw TypeError("Can't deserialize a Response containing a webSocket.")
              if (i.headers && !(i.headers instanceof Array))
                throw TypeError("Request headers must be serialized as an array of pairs.")
              return new Response(e, i)
            }
            case "blob": {
              if (3 !== t.length || "string" != typeof t[1]) break
              let e = t[1],
                i = this.evaluateImpl(t[2], r, s, o + 1)
              if (!(i instanceof ReadableStream))
                throw TypeError("Blob content must be serialized as a ReadableStream.")
              let n = new g(
                new P(
                  (async function (e, t) {
                    let r = await new Response(e).blob()
                    return r.type === t ? r : r.slice(0, r.size, t)
                  })(i, e).then((e) => new S(R.fromAppReturn(e))),
                ),
                [],
              )
              return (this.promises.push({ promise: n, parent: r, property: s }), n)
            }
            case "import":
            case "pipeline": {
              if (t.length < 2 || t.length > 4 || "number" != typeof t[1]) break
              let i = this.importer.getExport(t[1])
              if (!i) throw Error(`no such entry on exports table: ${t[1]}`)
              let n = "pipeline" == t[0],
                a = (e) => {
                  if (!n) return (this.hooks.push(e), new g(e, []))
                  {
                    let t = new g(e, [])
                    return (this.promises.push({ promise: t, parent: r, property: s }), t)
                  }
                }
              if (2 == t.length)
                if (n) return a(i.get([]))
                else return a(i.dup())
              let l = t[2]
              if (!(l instanceof Array) || !l.every((e) => "string" == typeof e || "number" == typeof e)) break
              if (3 == t.length) return a(i.get(l))
              let h = t[3]
              if (!(h instanceof Array)) break
              return ((h = new e(this.importer).evaluateWithDepth([h], o)), a(i.call(l, h)))
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
              let o = t[2]
              if (!o.every((e) => "string" == typeof e || "number" == typeof e)) break
              let i = t[3].map((e) => {
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
                n = t[4],
                a = new g(e.map(o, i, n), [])
              return (this.promises.push({ promise: a, parent: r, property: s }), a)
            }
            case "export":
            case "promise":
              if ("number" == typeof t[1])
                if ("promise" == t[0]) {
                  let e = new g(this.importer.importPromise(t[1]), [])
                  return (this.promises.push({ parent: r, property: s, promise: e }), e)
                } else {
                  let e = this.importer.importStub(t[1])
                  return (this.hooks.push(e), new b(e))
                }
              break
            case "writable":
              if ("number" == typeof t[1]) {
                let e = this.importer.importStub(t[1]),
                  r = c.createWritableStreamFromHook(e)
                return (this.hooks.push(e), r)
              }
              break
            case "readable":
              if ("number" == typeof t[1]) {
                let e = this.importer.getPipeReadable(t[1], this.messageOrigin),
                  r = c.createReadableStreamHook(e)
                return (this.hooks.push(r), e)
              }
          }
          throw TypeError(`unknown special value: ${JSON.stringify(t)}`)
        }
        if (!(t instanceof Object)) return t
        for (let e in t)
          e in Object.prototype || "toJSON" === e
            ? (this.evaluateImpl(t[e], t, e, o + 1), delete t[e])
            : (t[e] = this.evaluateImpl(t[e], t, e, o + 1))
        return t
      }
    }
  function M(e) {
    return 2 + 3 * e.length
  }
  var W = class {
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
            let { callback: r, index: s } = t,
              o = this.session.onBrokenCallbacks.length
            e.onBroken(r)
            let i = this.session.onBrokenCallbacks[o]
            i?.callback === r
              ? ((i.index = s), (this.session.onBrokenCallbacks[s] = i), delete this.session.onBrokenCallbacks[o])
              : delete this.session.onBrokenCallbacks[s]
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
          ((this.resolution = new u(e)),
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
    z = class e extends p {
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
        let s
        try {
          s = this.getEntry()
        } catch (e) {
          for (let e of t) e.dispose()
          throw e
        }
        return s.resolution ? s.resolution.map(e, t, r) : s.session.sendMap(s.importId, e, t, r)
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
    $ = class extends z {
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
    q = class {
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
        let s = "string"
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
            s = t
          }
        }
        ;((this.encodingLevel = s),
          (this.limits = { ...C, ...r.limits }),
          this.exports.push({ hook: t, refcount: 1 }),
          this.imports.push(new W(this, 0, !1)),
          this.readLoop().catch((e) => this.abort(e)))
      }
      getMainImport() {
        return new $(this.imports[0])
      }
      shutdown() {
        this.abort(Error("RPC session was shut down by disposing the main stub"), !1)
      }
      exportStub(e, t) {
        if (this.abortReason) throw this.abortReason
        let r = this.reverseExports.get(e)
        if (void 0 !== r) {
          let e = this.exports[r],
            s = e.messageOrigin
          return (
            s && s.service !== t?.service
              ? (e.messageOrigin = void 0)
              : s?.method !== void 0 && s.method !== t?.method && (e.messageOrigin = { service: s.service }),
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
                if (t.value instanceof b) {
                  let { hook: r, pathIfPromise: s } = t.value[m]
                  if (s && 0 == s.length && void 0 === this.getImport(e)) {
                    e = r
                    continue
                  }
                }
                return t
              }
            },
            s = t.autoRelease
          ;(++this.pullCount,
            (t.pull = r()
              .then(
                (t) => {
                  let r = F.devaluate(t.value, void 0, this, t, this.encodingLevel)
                  ;(this.send(["resolve", e, r]), s && this.releaseExport(e, 1))
                },
                (t) => {
                  ;(this.send(["reject", e, F.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                    s && this.releaseExport(e, 1))
                },
              )
              .catch((t) => {
                try {
                  ;(this.send(["reject", e, F.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                    s && this.releaseExport(e, 1))
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
        return e instanceof z && e.entry && e.entry.session === this ? e.entry.importId : void 0
      }
      importStub(e) {
        if (this.abortReason) throw this.abortReason
        let t = this.imports[e]
        return (t || ((t = new W(this, e, !1)), (this.imports[e] = t)), new z(!1, t))
      }
      importPromise(e) {
        if (this.abortReason) throw this.abortReason
        if (this.imports[e])
          return new u(Error("Bug in RPC system: The peer sent a promise reusing an existing export ID."))
        let t = new W(this, e, !0)
        return ((this.imports[e] = t), new z(!0, t))
      }
      getExport(e) {
        return this.exports[e]?.hook
      }
      getPipeReadable(e, t) {
        let r = this.exports[e]
        if (!r || !r.pipeReadable) throw Error(`Export ${e} is not a pipe or its readable end was already consumed.`)
        t && (r.messageOrigin = t)
        let s = r.pipeReadable
        return ((r.pipeReadable = void 0), s)
      }
      getLimits() {
        return this.limits
      }
      createPipe(e, t) {
        if (this.abortReason) throw this.abortReason
        this.send(["pipe"])
        let r = this.imports.length,
          s = new W(this, r, !1)
        this.imports.push(s)
        let o = new z(!1, s),
          i = c.createWritableStreamFromHook(o)
        return (
          e
            .pipeTo(i)
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
        let s = this.imports[e]?.messagePortService,
          o =
            s && this.options.onMessagePortRead && 1 === t.length && this.options.messagePortReadMethods?.has(t[0])
              ? { service: s.service, method: t[0] }
              : s,
          i = ["pipeline", e, t]
        if (r) {
          let e = F.devaluate(r.value, void 0, this, r, this.encodingLevel, o)
          i.push(e[0])
        }
        this.send(["push", i])
        let n = new W(this, this.imports.length, !1)
        return (o && (n.messageOrigin = o), this.imports.push(n), new z(!0, n))
      }
      sendStream(e, t, r) {
        if (this.abortReason) throw this.abortReason
        let s = ["pipeline", e, t],
          o = F.devaluate(r.value, void 0, this, r, this.encodingLevel)
        s.push(o[0])
        let i = ["stream", s],
          n = this.send(i)
        void 0 === n &&
          (n = (function e(t, r, s = 0) {
            if (s >= 64) return 8
            switch (typeof t) {
              case "string":
                return M(t)
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
                  let o = 16
                  for (let i of t) o += 8 + e(i, r, s + 1)
                  return o
                }
                if (t instanceof Error) {
                  let o = 16 + M(t.name) + M(t.message) + M(t.stack ?? "")
                  for (let i of Object.keys(t)) o += 8 + M(i) + e(t[i], r, s + 1)
                  return o
                }
                let o = 16
                for (let i of Object.keys(t)) o += 8 + M(i) + e(t[i], r, s + 1)
                return o
              }
            }
          })(i))
        let a = this.imports.length,
          l = new W(this, a, !0)
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
            size: n,
          }
        )
      }
      sendMap(e, t, r, s) {
        if (this.abortReason) {
          for (let e of r) e.dispose()
          throw this.abortReason
        }
        let o = [
          "remap",
          e,
          t,
          r.map((e) => {
            let t = this.getImport(e)
            return void 0 !== t ? ["import", t] : ["export", this.exportStub(e)]
          }),
          s,
        ]
        this.send(["push", o])
        let i = new W(this, this.imports.length, !1)
        return (this.imports.push(i), new z(!0, i))
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
              let t = ["abort", F.devaluate(e, void 0, this, void 0, this.encodingLevel)]
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
                  let e = new S(new H(this, this.encodingLevel).evaluate(r[1]))
                  ;(e.ignoreUnhandledRejections(), this.exports.push({ hook: e, refcount: 1 }))
                  continue
                }
                break
              case "stream":
                if (r.length > 1) {
                  let e = new S(new H(this, this.encodingLevel).evaluate(r[1]))
                  e.ignoreUnhandledRejections()
                  let t = this.exports.length
                  ;(this.exports.push({ hook: e, refcount: 1, autoRelease: !0 }), this.ensureResolvingExport(t))
                  continue
                }
                break
              case "pipe": {
                let { readable: e, writable: t } = new TransformStream(),
                  r = c.createWritableStreamHook(t)
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
                      let e = new H(this, this.encodingLevel, t.messageOrigin).evaluate(r[2])
                      ;(this.hasMessagePortServices &&
                        Array.isArray(r[2]) &&
                        "export" === r[2][0] &&
                        b.setMessagePortServiceName(e.value, t.messageOrigin?.service ?? null),
                        t.resolve(new S(e)))
                    } else {
                      let e = new H(this, this.encodingLevel).evaluate(r[2])
                      ;(e.dispose(), t.resolve(new u(e.value)))
                    }
                  else "resolve" == r[0] && new H(this, this.encodingLevel).evaluate(r[2]).dispose()
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
                let e = new H(this, this.encodingLevel).evaluate(r[1])
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
    N = class {
      #e
      #t
      constructor(e, t, r = {}) {
        let s
        ;((s = t ? new S(R.fromAppReturn(t)) : new u(Error("This connection has no main object."))),
          (this.#e = new q(e, s, r)),
          (this.#t = new b(this.#e.getMainImport())))
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
    V = class {
      encodingLevel = "structuredClonable"
      constructor(e, t) {
        ;((this.#r = e),
          e.start(),
          e.addEventListener("message", (e) => {
            if (this.#s) return
            let r = t?.onMessagePortRead,
              s = r ? performance.now() : 0,
              o = e.data,
              i = r ? performance.now() : 0
            ;(null === o
              ? this.#o(Error("Peer closed MessagePort connection."))
              : this.#i
                ? (this.#i(o), (this.#i = void 0), (this.#n = void 0))
                : this.#a.push(o),
              r?.(o, s, i, this.readOrigin(o)))
          }),
          e.addEventListener("messageerror", (e) => {
            this.#o(Error("MessagePort message error."))
          }))
      }
      #r
      #i
      #n
      #a = []
      #s
      send(e) {
        if (this.#s) throw this.#s
        this.#r.postMessage(e)
      }
      async receive() {
        if (this.#a.length > 0) return this.#a.shift()
        if (!this.#s)
          return new Promise((e, t) => {
            ;((this.#i = e), (this.#n = t))
          })
        throw this.#s
      }
      abort(e) {
        try {
          this.#r.postMessage(null)
        } catch (e) {}
        ;(this.#r.close(), this.#s || (this.#s = e))
      }
      #o(e) {
        !this.#s && ((this.#s = e), this.#n && (this.#n(e), (this.#i = void 0), (this.#n = void 0)))
      }
    },
    _ = class {
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
        return new G(this, 0)
      }
      makeOutput(e) {
        let t
        try {
          t = F.devaluate(e.value, void 0, this, e)
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
            new G(this.context.parent, this.context.parent.instructions.length))
          : this.context.subject.map(this.context.path, this.context.captures, this.instructions)
      }
      pushCall(e, t, r) {
        let s = F.devaluate(r.value, void 0, this, r)
        s = s[0]
        let o = this.capture(e.dup())
        return (this.instructions.push(["pipeline", o, t, s]), new G(this, this.instructions.length))
      }
      pushGet(e, t) {
        let r = this.capture(e.dup())
        return (this.instructions.push(["pipeline", r, t]), new G(this, this.instructions.length))
      }
      capture(e) {
        if (e instanceof G && e.mapper === this) return e.idx
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
  function J() {
    throw Error(
      "Attempted to use an abstract placeholder from a mapper function. Please make sure your map function has no side effects.",
    )
  }
  l.sendMap = (e, t, r) => {
    let s,
      o = new _(e, t)
    try {
      s = R.fromAppReturn(
        (function (e, t) {
          let r = f
          f = e
          try {
            return t()
          } finally {
            f = r
          }
        })(o.pushCall.bind(o), () => r(new g(o.makeInput(), []))),
      )
    } finally {
      o.unregister()
    }
    if (s instanceof Promise) throw (s.catch((e) => {}), Error("RPC map() callbacks cannot be async."))
    return new g(o.makeOutput(s), [])
  }
  var G = class extends p {
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
        return 0 == t.length ? this : e ? e.pushGet(this, t) : void J()
      }
      call(e, t) {
        J()
      }
      map(e, t, r) {
        J()
      }
      pull() {
        J()
      }
      ignoreUnhandledRejections() {}
      onBroken(e) {
        J()
      }
    },
    Q = class {
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
            let e = new H(this).evaluateCopy(t)
            if (e.value instanceof b) {
              let t = w(e.value)
              if (t) {
                this.variables.push(t)
                continue
              }
            }
            this.variables.push(new S(e))
          }
          return new H(this).evaluateCopy(e[e.length - 1])
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
        return C
      }
    }
  function K(e, t, r, s, o) {
    let i = new Q(s, new S(R.deepCopyFrom(e, t, r)))
    try {
      return i.apply(o)
    } finally {
      i.dispose()
    }
  }
  l.applyMap = (e, t, r, s, o) => {
    try {
      let i
      if (e instanceof g) throw Error("applyMap() can't be called on RpcPromise")
      if (e instanceof Array) {
        let t = []
        try {
          for (let i of e) t.push(K(i, e, r, s, o))
        } catch (e) {
          for (let e of t) e.dispose()
          throw e
        }
        i = R.fromArray(t)
      } else i = null == e ? R.fromAppReturn(e) : K(e, t, r, s, o)
      return new S(i)
    } finally {
      for (let e of s) e.dispose()
    }
  }
  var X = class {
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
          let r, s
          0 === e.deliveredTimeAtSend
            ? ((r = this.firstAckTime), (s = this.firstAckDelivered))
            : ((r = e.deliveredTimeAtSend), (s = e.deliveredAtSend))
          let o = t - r,
            i = (this.delivered - s) / o,
            n = this.inStartupPhase ? 2 : 1.25,
            a = i * this.minRtt * n
          ;((a = Math.min(a, e.windowAtSend * n)),
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
    Y = class e extends p {
      state
      static create(t) {
        return new e({ refcount: 1, stream: t, canceled: !1 })
      }
      constructor(e, t) {
        ;(super(), (this.state = e), t && ++e.refcount)
      }
      call(e, t) {
        return (t.dispose(), new u(Error("Cannot call methods on a ReadableStream stub")))
      }
      map(e, t, r) {
        for (let e of t) e.dispose()
        return new u(Error("Cannot use map() on a ReadableStream"))
      }
      get(e) {
        return new u(Error("Cannot access properties on a ReadableStream stub"))
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
  ;((c.createWritableStreamHook = class e extends p {
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
        let s = e[0]
        if ("write" !== s && "close" !== s && "abort" !== s)
          throw (t.dispose(), Error(`Unknown WritableStream method: ${s}`))
        return (
          ("close" === s || "abort" === s) && (r.closed = !0),
          new P(
            ("write" === s ? t.deliverStreamWrite(r.writer) : t.deliverCall(r.writer[s], r.writer)).then(
              (e) => new S(e),
            ),
          )
        )
      } catch (e) {
        return new u(e)
      }
    }
    map(e, t, r) {
      for (let e of t) e.dispose()
      return new u(Error("Cannot use map() on a WritableStream"))
    }
    get(e) {
      return new u(Error("Cannot access properties on a WritableStream stub"))
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
    (c.createWritableStreamFromHook = function (e) {
      let t,
        r,
        s,
        o = !1,
        i = new X(() => performance.now()),
        n = () => {
          o || ((o = !0), e.dispose())
        }
      return new WritableStream({
        write(o, a) {
          if (void 0 !== s) throw s
          let l = R.fromAppParams([o]),
            { promise: h, size: c } = e.stream(["write"], l)
          if (void 0 === c)
            return h.catch((e) => {
              throw (void 0 === s && (s = e), e)
            })
          {
            let { token: e, shouldBlock: o } = i.onSend(c)
            if (
              (h.then(
                () => {
                  i.onAck(e) && t && (t(), (t = void 0), (r = void 0))
                },
                (o) => {
                  ;(i.onError(e), void 0 === s && ((s = o), a.error(o), n()), r && (r(o), (t = void 0), (r = void 0)))
                },
              ),
              o)
            )
              return new Promise((e, s) => {
                ;((t = e), (r = s))
              })
          }
        },
        async close() {
          if (void 0 !== s) throw (n(), s)
          let { promise: t } = e.stream(["close"], R.fromAppParams([]))
          try {
            await t
          } catch (e) {
            throw s ?? e
          } finally {
            n()
          }
        },
        abort(o) {
          if (void 0 !== s) return
          ;((s = o ?? Error("WritableStream was aborted")), r && (r(s), (t = void 0), (r = void 0)))
          let { promise: i } = e.stream(["abort"], R.fromAppParams([o]))
          i.then(
            () => n(),
            () => n(),
          )
        },
      })
    }),
    (c.createReadableStreamHook = Y.create))
  let Z = s,
    ee = function (e, t, r) {
      let s = new V(e, r),
        o = new N(s, t, r)
      return (r && (s.readOrigin = (e) => o.messagePortReadOrigin(e)), o.getRemoteMain())
    },
    et = require("electron")
  class er extends Z {
    connect(e, t) {
      return new es(e, t)
    }
  }
  class es extends Z {
    options
    #l
    #h
    constructor(e, t) {
      ;(super(),
        (this.options = e),
        (this.#l = new WebSocket(e.url, e.protocols)),
        (this.#h = t.dup()),
        this.#h.onRpcBroken(() => this[Symbol.dispose]()),
        this.#l.addEventListener("open", () => this.#c({ type: "open" })),
        this.#l.addEventListener("message", (t) => {
          if ("string" != typeof t.data) return void this.#l.close(1e3, "unsupported_frame")
          let r = new TextEncoder().encode(t.data).byteLength
          r > e.maxIncomingBytes
            ? this.#l.close(1e3, "frame_too_large")
            : this.#c({ type: "message", data: t.data, messageBytes: r })
        }),
        this.#l.addEventListener("error", () => this.#c({ type: "error" })),
        this.#l.addEventListener("close", (e) => {
          ;(this.#c({ type: "close", code: e.code, reason: e.reason, wasClean: e.wasClean }), this[Symbol.dispose]())
        }))
    }
    send(e) {
      if (
        this.#l.readyState !== WebSocket.OPEN ||
        "string" != typeof e ||
        e.length > this.options.maxOutgoingBytes ||
        (3 * e.length > this.options.maxOutgoingBytes &&
          new TextEncoder().encode(e).byteLength > this.options.maxOutgoingBytes)
      )
        throw Error("invalid_websocket_frame")
      this.#l.send(e)
    }
    close(e, t) {
      this.#l.close(e, t)
    }
    [Symbol.dispose]() {
      null != this.#h && (this.#h[Symbol.dispose](), (this.#h = null), this.#l.close())
    }
    #c(e) {
      let t = { stack: [], error: void 0, hasError: !1 }
      try {
        !(function (e, t, r) {
          if (null != t) {
            var s, o
            if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.")
            if (r) {
              if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.")
              s = t[Symbol.asyncDispose]
            }
            if (void 0 === s) {
              if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.")
              ;((s = t[Symbol.dispose]), r && (o = s))
            }
            if ("function" != typeof s) throw TypeError("Object not disposable.")
            ;(o &&
              (s = function () {
                try {
                  o.call(this)
                } catch (e) {
                  return Promise.reject(e)
                }
              }),
              e.stack.push({ value: t, dispose: s, async: r }))
          } else r && e.stack.push({ async: !0 })
        })(t, this.#h?.(e), !1)
      } catch (e) {
        ;((t.error = e), (t.hasError = !0))
      } finally {
        var r = t
        function s(e) {
          ;((r.error = r.hasError ? new _SuppressedError(e, r.error, "An error was suppressed during disposal.") : e),
            (r.hasError = !0))
        }
        var o,
          i = 0
        !(function e() {
          for (; (o = r.stack.pop());)
            try {
              if (!o.async && 1 === i) return ((i = 0), r.stack.push(o), Promise.resolve().then(e))
              if (o.dispose) {
                var t = o.dispose.call(o.value)
                if (o.async)
                  return (
                    (i |= 2),
                    Promise.resolve(t).then(e, function (t) {
                      return (s(t), e())
                    })
                  )
              } else i |= 1
            } catch (e) {
              s(e)
            }
          if (1 === i) return r.hasError ? Promise.reject(r.error) : Promise.resolve()
          if (r.hasError) throw r.error
        })()
      }
    }
  }
  ;(et.ipcRenderer.once("codex:application-websocket", (e) => {
    let [t] = e.ports
    null != t && ee(t, new er())
  }),
    (module.exports = {}))
})()
//# sourceMappingURL=application-websocket-preload.js.map
