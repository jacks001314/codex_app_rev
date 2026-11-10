const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./zod-ClKgiFhi.js"),
  n = require("./src-ghAWefM3.js"),
  r = require("./application-network-startup-D74LEWDz.js"),
  i = require("./path-browserify-win32-DubphUXU.js"),
  a = require("./logger-CUwSCKgw.js"),
  o = require("./desktop-open-path-queue-BHXvnlW9.js");
let s = require("electron"),
  c = require("node:fs"),
  l = require("node:fs/promises"),
  u = require("node:path"),
  d = require("node:crypto"),
  f = require("node:timers/promises");
function ee(e, t) {
  let n = null,
    r = null,
    i = (...i) => {
      ((r = i),
        n && clearTimeout(n),
        (n = setTimeout(() => {
          n = null;
          let t = r;
          ((r = null), t && e(...t));
        }, t)));
    };
  return (
    (i.cancel = () => {
      ((n &&= (clearTimeout(n), null)), (r = null));
    }),
    i
  );
}
var te = { es: `es-419`, fr: `fr-FR`, pt: `pt-BR`, zh: `zh-CN` },
  ne = `TOML-backed settings cannot contain null inside arrays`,
  re = `TOML-backed settings cannot contain null in dynamic object fields`;
function ie(e, t) {
  return p(h(e), t);
}
function ae(e, t) {
  return m(h(e), t);
}
function p(e, n) {
  if (n == null) return null;
  if (typeof n == `boolean` || typeof n == `number` || typeof n == `string`) return n;
  if (Array.isArray(n)) {
    if (n.some((e) => e == null)) throw Error(ne);
    let r = e instanceof t.a ? h(e.element) : void 0;
    return n.map((e) => p(r, e));
  }
  if (!oe(n)) throw Error(`TOML-backed settings must be JSON-compatible`);
  if (e instanceof t.u)
    return Object.fromEntries(
      Object.entries(n).map(([t, n]) => {
        if (n == null) throw Error(re);
        return [t, p(h(e.valueType), n)];
      }),
    );
  let r = e instanceof t.c ? e : null;
  return Object.fromEntries(
    Object.entries(n).flatMap(([e, t]) => {
      if (t === void 0) return [];
      let n = r?.shape[e];
      if (t == null) {
        if (n == null) throw Error(re);
        return [];
      }
      return [[e, p(n == null ? void 0 : h(n), t)]];
    }),
  );
}
function m(e, n) {
  if (Array.isArray(n)) {
    let r = e instanceof t.a ? h(e.element) : void 0;
    return n.map((e) => m(r, e));
  }
  if (!oe(n)) return n;
  if (e instanceof t.u)
    return Object.fromEntries(Object.entries(n).map(([t, n]) => [t, m(h(e.valueType), n)]));
  if (!(e instanceof t.c)) return n;
  let r = Object.fromEntries(
    Object.entries(n).map(([t, n]) => [t, m(e.shape[t] == null ? void 0 : h(e.shape[t]), n)]),
  );
  for (let [t, n] of Object.entries(e.shape))
    !Object.prototype.hasOwnProperty.call(r, t) && n.isNullable() && (r[t] = null);
  return r;
}
function h(e) {
  return e instanceof t.o || e instanceof t.s || e instanceof t.l ? h(e.unwrap()) : e;
}
function oe(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
var se = Symbol(`workers-module`);
(Symbol.dispose || (Symbol.dispose = Symbol.for(`dispose`)),
  Symbol.asyncDispose || (Symbol.asyncDispose = Symbol.for(`asyncDispose`)),
  Promise.withResolvers ||
    (Promise.withResolvers = function () {
      let e, t;
      return {
        promise: new Promise((n, r) => {
          ((e = n), (t = r));
        }),
        resolve: e,
        reject: t,
      };
    }));
var g = globalThis[se],
  _ = g ? g.RpcTarget : class {},
  ce = async function () {}.constructor,
  le = typeof Buffer < `u` ? Buffer.prototype : void 0;
function v(e) {
  switch (typeof e) {
    case `boolean`:
    case `number`:
    case `string`:
      return `primitive`;
    case `undefined`:
      return `undefined`;
    case `object`:
    case `function`:
      break;
    case `bigint`:
      return `bigint`;
    default:
      return `unsupported`;
  }
  if (e === null) return `primitive`;
  let t = Object.getPrototypeOf(e);
  switch (t) {
    case Object.prototype:
      return `object`;
    case Function.prototype:
    case ce.prototype:
      return `function`;
    case Array.prototype:
      return `array`;
    case Date.prototype:
      return `date`;
    case Uint8Array.prototype:
    case le:
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
      return `bytes`;
    case WritableStream.prototype:
      return `writable`;
    case ReadableStream.prototype:
      return `readable`;
    case URL.prototype:
      return `url`;
    case Headers.prototype:
      return `headers`;
    case Request.prototype:
      return `request`;
    case Response.prototype:
      return `response`;
    case Blob.prototype:
      return `blob`;
    case C.prototype:
      return `stub`;
    case w.prototype:
      return `rpc-promise`;
    default:
      if (g) {
        if (t == g.RpcStub.prototype || e instanceof g.ServiceStub) return `rpc-target`;
        if (t == g.RpcPromise.prototype || t == g.RpcProperty.prototype) return `rpc-thenable`;
      }
      return e instanceof _ ? `rpc-target` : e instanceof Error ? `error` : `unsupported`;
  }
}
function ue() {
  throw Error(`RPC map() implementation was not loaded.`);
}
var de = { applyMap: ue, sendMap: ue };
function fe() {
  throw Error(`Stream implementation was not loaded.`);
}
var y = {
    createWritableStreamHook: fe,
    createWritableStreamFromHook: fe,
    createReadableStreamHook: fe,
  },
  b = class {
    stream(e, t) {
      let n = this.call(e, t).pull(),
        r;
      return (
        n instanceof Promise
          ? (r = n.then((e) => {
              e.dispose();
            }))
          : (n.dispose(), (r = Promise.resolve())),
        { promise: r }
      );
    }
  },
  x = class extends b {
    error;
    constructor(e) {
      (super(), (this.error = e));
    }
    call(e, t) {
      return this;
    }
    map(e, t, n) {
      return this;
    }
    get(e) {
      return this;
    }
    dup() {
      return this;
    }
    pull() {
      return Promise.reject(this.error);
    }
    ignoreUnhandledRejections() {}
    dispose() {}
    onBroken(e) {
      try {
        e(this.error);
      } catch (e) {
        Promise.resolve(e);
      }
    }
  },
  pe = new x(Error(`Attempted to use RPC stub after it has been disposed.`)),
  me = (e, t, n) => e.call(t, n);
function he(e, t) {
  let n = me;
  me = e;
  try {
    return t();
  } finally {
    me = n;
  }
}
var S = Symbol(`realStub`),
  ge = {
    apply(e, t, n) {
      let r = e.raw;
      return new w(me(r.hook, r.pathIfPromise || [], T.fromAppParams(n)), []);
    },
    get(e, t, n) {
      let r = e.raw;
      if (t === S) return r;
      if (t in w.prototype) return r[t];
      if (typeof t == `string`)
        return new w(r.hook, r.pathIfPromise ? [...r.pathIfPromise, t] : [t]);
      if (t === Symbol.dispose && (!r.pathIfPromise || r.pathIfPromise.length == 0))
        return () => {
          (r.hook.dispose(), (r.hook = pe));
        };
    },
    has(e, t) {
      let n = e.raw;
      return t === S
        ? !0
        : t in w.prototype
          ? t in n
          : typeof t == `string` ||
            !(t !== Symbol.dispose || (n.pathIfPromise && n.pathIfPromise.length != 0));
    },
    construct(e, t) {
      throw Error(`An RPC stub cannot be used as a constructor.`);
    },
    defineProperty(e, t, n) {
      throw Error(`Can't define properties on RPC stubs.`);
    },
    deleteProperty(e, t) {
      throw Error(`Can't delete properties on RPC stubs.`);
    },
    getOwnPropertyDescriptor(e, t) {},
    getPrototypeOf(e) {
      return Object.getPrototypeOf(e.raw);
    },
    isExtensible(e) {
      return !1;
    },
    ownKeys(e) {
      return [];
    },
    preventExtensions(e) {
      return !0;
    },
    set(e, t, n, r) {
      throw Error(`Can't assign properties on RPC stubs.`);
    },
    setPrototypeOf(e, t) {
      throw Error(`Can't override prototype of RPC stubs.`);
    },
  },
  C = class e extends _ {
    constructor(e, t) {
      if ((super(), !(e instanceof b))) {
        let n = e;
        if (
          ((e =
            n instanceof _ || n instanceof Function
              ? D.create(n, void 0)
              : new E(T.fromAppReturn(n))),
          t)
        )
          throw TypeError(`RpcStub constructor expected one argument, received two.`);
      }
      ((this.hook = e), (this.pathIfPromise = t));
      let n = () => {};
      return ((n.raw = this), new Proxy(n, ge));
    }
    hook;
    pathIfPromise;
    dup() {
      let t = this[S];
      return t.pathIfPromise ? new e(t.hook.get(t.pathIfPromise)) : new e(t.hook.dup());
    }
    onRpcBroken(e) {
      this[S].hook.onBroken(e);
    }
    map(e) {
      let { hook: t, pathIfPromise: n } = this[S];
      return de.sendMap(t, n || [], e);
    }
    toString() {
      return `[object RpcStub]`;
    }
  },
  w = class extends C {
    constructor(e, t) {
      super(e, t);
    }
    then(e, t) {
      return Se(this).then(...arguments);
    }
    catch(e) {
      return Se(this).catch(...arguments);
    }
    finally(e) {
      return Se(this).finally(...arguments);
    }
    toString() {
      return `[object RpcPromise]`;
    }
  };
function _e(e) {
  let { hook: t, pathIfPromise: n } = e[S];
  return n && n.length > 0 ? t.get(n) : t;
}
function ve(e) {
  let { hook: t, pathIfPromise: n } = e[S];
  return n ? t.get(n) : t.dup();
}
function ye(e) {
  let { hook: t, pathIfPromise: n } = e[S];
  if (!(n && n.length > 0)) return t;
}
function be(e) {
  return e[S].hook;
}
function xe(e) {
  return e[S];
}
async function Se(e) {
  let { hook: t, pathIfPromise: n } = e[S];
  return (n.length > 0 && (t = t.get(n)), (await t.pull()).deliverResolve());
}
var T = class e {
  value;
  source;
  hooks;
  promises;
  static fromAppParams(t) {
    return new e(t, `params`);
  }
  static fromAppReturn(t) {
    return new e(t, `return`);
  }
  static fromArray(t) {
    let n = [],
      r = [],
      i = [];
    for (let e of t) {
      e.ensureDeepCopied();
      for (let t of e.hooks) n.push(t);
      for (let t of e.promises)
        (t.parent === e && (t = { parent: i, property: i.length, promise: t.promise }), r.push(t));
      i.push(e.value);
    }
    return new e(i, `owned`, n, r);
  }
  static forEvaluate(t, n) {
    return new e(null, `owned`, t, n);
  }
  static deepCopyFrom(t, n, r) {
    let i = new e(null, `owned`, [], []);
    return ((i.value = i.deepCopy(t, n, `value`, i, !0, r)), i);
  }
  constructor(e, t, n, r) {
    ((this.value = e), (this.source = t), (this.hooks = n), (this.promises = r));
  }
  rpcTargets;
  getHookForRpcTarget(e, t, n = !0) {
    if (this.source === `params`) {
      if (n) {
        let t = e;
        typeof t.dup == `function` && (e = t.dup());
      }
      return D.create(e, t);
    }
    if (this.source === `return`) {
      let r = this.rpcTargets?.get(e);
      return r
        ? n
          ? r.dup()
          : (this.rpcTargets?.delete(e), r)
        : ((r = D.create(e, t)),
          n ? ((this.rpcTargets ||= new Map()), this.rpcTargets.set(e, r), r.dup()) : r);
    }
    throw Error(`owned payload shouldn't contain raw RpcTargets`);
  }
  getHookForWritableStream(e, t, n = !0) {
    if (this.source === `params`) return y.createWritableStreamHook(e);
    if (this.source === `return`) {
      let t = this.rpcTargets?.get(e);
      return t
        ? n
          ? t.dup()
          : (this.rpcTargets?.delete(e), t)
        : ((t = y.createWritableStreamHook(e)),
          n ? ((this.rpcTargets ||= new Map()), this.rpcTargets.set(e, t), t.dup()) : t);
    }
    throw Error(`owned payload shouldn't contain raw WritableStreams`);
  }
  getHookForReadableStream(e, t, n = !0) {
    if (this.source === `params`) return y.createReadableStreamHook(e);
    if (this.source === `return`) {
      let t = this.rpcTargets?.get(e);
      return t
        ? n
          ? t.dup()
          : (this.rpcTargets?.delete(e), t)
        : ((t = y.createReadableStreamHook(e)),
          n ? ((this.rpcTargets ||= new Map()), this.rpcTargets.set(e, t), t.dup()) : t);
    }
    throw Error(`owned payload shouldn't contain raw ReadableStreams`);
  }
  deepCopy(e, t, n, r, i, a) {
    switch (v(e)) {
      case `unsupported`:
        return e;
      case `primitive`:
      case `bigint`:
      case `date`:
      case `bytes`:
      case `blob`:
      case `url`:
      case `error`:
      case `undefined`:
        return e;
      case `array`: {
        let t = e,
          n = t.length,
          r = Array(n);
        for (let e = 0; e < n; e++) r[e] = this.deepCopy(t[e], t, e, r, i, a);
        return r;
      }
      case `object`: {
        let t = {},
          n = e;
        for (let e in n) t[e] = this.deepCopy(n[e], n, e, t, i, a);
        return t;
      }
      case `stub`:
      case `rpc-promise`: {
        let t = e,
          a;
        if (((a = i ? ve(t) : _e(t)), t instanceof w)) {
          let e = new w(a, []);
          return (this.promises.push({ parent: r, property: n, promise: e }), e);
        }
        return (this.hooks.push(a), new C(a));
      }
      case `function`:
      case `rpc-target`: {
        let n = e,
          r;
        return (
          (r = a ? a.getHookForRpcTarget(n, t, i) : D.create(n, t)), this.hooks.push(r), new C(r)
        );
      }
      case `rpc-thenable`: {
        let o = e,
          s;
        return (
          (s = a ? new w(a.getHookForRpcTarget(o, t, i), []) : new w(D.create(o, t), [])),
          this.promises.push({ parent: r, property: n, promise: s }),
          s
        );
      }
      case `writable`: {
        let n = e,
          r;
        return (
          (r = a ? a.getHookForWritableStream(n, t, i) : y.createWritableStreamHook(n)),
          this.hooks.push(r),
          n
        );
      }
      case `readable`: {
        let n = e,
          r;
        return (
          (r = a ? a.getHookForReadableStream(n, t, i) : y.createReadableStreamHook(n)),
          this.hooks.push(r),
          n
        );
      }
      case `headers`:
        return new Headers(e);
      case `request`: {
        let t = e;
        return (t.body && this.deepCopy(t.body, t, `body`, t, i, a), new Request(t));
      }
      case `response`: {
        let t = e;
        return (t.body && this.deepCopy(t.body, t, `body`, t, i, a), new Response(t.body, t));
      }
      default:
        throw Error(`unreachable`);
    }
  }
  ensureDeepCopied() {
    if (this.source !== `owned`) {
      let e = this.source === `params`;
      ((this.hooks = []), (this.promises = []));
      try {
        this.value = this.deepCopy(this.value, void 0, `value`, this, e, this);
      } catch (e) {
        throw ((this.hooks = void 0), (this.promises = void 0), e);
      }
      if (((this.source = `owned`), this.rpcTargets && this.rpcTargets.size > 0))
        throw Error(`Not all rpcTargets were accounted for in deep-copy?`);
      this.rpcTargets = void 0;
    }
  }
  deliverTo(t, n, r) {
    if ((this.ensureDeepCopied(), this.value instanceof w))
      e.deliverRpcPromiseTo(this.value, t, n, r);
    else {
      t[n] = this.value;
      for (let t of this.promises) e.deliverRpcPromiseTo(t.promise, t.parent, t.property, r);
    }
  }
  static deliverRpcPromiseTo(t, n, r, i) {
    let a = ye(t);
    if (!a) throw Error(`property promises should have been resolved earlier`);
    let o = a.pull();
    o instanceof e
      ? o.deliverTo(n, r, i)
      : i.push(
          o.then((e) => {
            let t = [];
            if ((e.deliverTo(n, r, t), t.length > 0)) return Promise.all(t);
          }),
        );
  }
  async deliverCall(t, n) {
    try {
      let r = [];
      (this.deliverTo(this, `value`, r), r.length > 0 && (await Promise.all(r)));
      let i = Function.prototype.apply.call(t, n, this.value);
      return i instanceof w ? e.fromAppReturn(i) : e.fromAppReturn(await i);
    } finally {
      this.dispose();
    }
  }
  async deliverStreamWrite(t) {
    try {
      let n = [];
      (this.deliverTo(this, `value`, n), n.length > 0 && (await Promise.all(n)));
      let r = this.value[0];
      return (this.hooks.length > 0 || this.promises.length > 0) && r instanceof Object
        ? (Symbol.dispose in r ||
            Object.defineProperty(r, Symbol.dispose, {
              value: () => this.dispose(),
              writable: !0,
              enumerable: !1,
              configurable: !0,
            }),
          await t.write(r),
          e.fromAppReturn(void 0))
        : (await t.write(r), this.dispose(), e.fromAppReturn(void 0));
    } catch (e) {
      throw (this.dispose(), e);
    }
  }
  async deliverResolve() {
    try {
      let e = [];
      (this.deliverTo(this, `value`, e), e.length > 0 && (await Promise.all(e)));
      let t = this.value;
      return (
        t instanceof Object &&
          (Symbol.dispose in t ||
            Object.defineProperty(t, Symbol.dispose, {
              value: () => this.dispose(),
              writable: !0,
              enumerable: !1,
              configurable: !0,
            })),
        t
      );
    } catch (e) {
      throw (this.dispose(), e);
    }
  }
  dispose() {
    if (this.source === `owned`)
      (this.hooks.forEach((e) => e.dispose()),
        this.promises.forEach((e) => e.promise[Symbol.dispose]()));
    else if (
      this.source === `return` &&
      (this.disposeImpl(this.value, void 0), this.rpcTargets && this.rpcTargets.size > 0)
    )
      throw Error(`Not all rpcTargets were accounted for in disposeImpl()?`);
    ((this.source = `owned`), (this.hooks = []), (this.promises = []));
  }
  disposeImpl(e, t) {
    switch (v(e)) {
      case `unsupported`:
      case `primitive`:
      case `bigint`:
      case `bytes`:
      case `blob`:
      case `date`:
      case `url`:
      case `error`:
      case `undefined`:
        return;
      case `array`: {
        let t = e,
          n = t.length;
        for (let e = 0; e < n; e++) this.disposeImpl(t[e], t);
        return;
      }
      case `object`: {
        let t = e;
        for (let e in t) this.disposeImpl(t[e], t);
        return;
      }
      case `stub`:
      case `rpc-promise`: {
        let t = ye(e);
        t && t.dispose();
        return;
      }
      case `function`:
      case `rpc-target`: {
        let t = e,
          n = this.rpcTargets?.get(t);
        n ? (n.dispose(), this.rpcTargets.delete(t)) : Te(t);
        return;
      }
      case `rpc-thenable`:
        return;
      case `headers`:
        return;
      case `request`: {
        let t = e;
        t.body && this.disposeImpl(t.body, t);
        return;
      }
      case `response`: {
        let t = e;
        t.body && this.disposeImpl(t.body, t);
        return;
      }
      case `writable`: {
        let t = e,
          n = this.rpcTargets?.get(t);
        (n ? this.rpcTargets.delete(t) : (n = y.createWritableStreamHook(t)), n.dispose());
        return;
      }
      case `readable`: {
        let t = e,
          n = this.rpcTargets?.get(t);
        (n ? this.rpcTargets.delete(t) : (n = y.createReadableStreamHook(t)), n.dispose());
        return;
      }
      default:
        return;
    }
  }
  ignoreUnhandledRejections() {
    this.hooks
      ? (this.hooks.forEach((e) => {
          e.ignoreUnhandledRejections();
        }),
        this.promises.forEach((e) => be(e.promise).ignoreUnhandledRejections()))
      : this.ignoreUnhandledRejectionsImpl(this.value);
  }
  ignoreUnhandledRejectionsImpl(e) {
    switch (v(e)) {
      case `unsupported`:
      case `primitive`:
      case `bigint`:
      case `bytes`:
      case `blob`:
      case `date`:
      case `error`:
      case `undefined`:
      case `function`:
      case `rpc-target`:
      case `writable`:
      case `readable`:
      case `url`:
      case `headers`:
      case `request`:
      case `response`:
        return;
      case `array`: {
        let t = e,
          n = t.length;
        for (let e = 0; e < n; e++) this.ignoreUnhandledRejectionsImpl(t[e]);
        return;
      }
      case `object`: {
        let t = e;
        for (let e in t) this.ignoreUnhandledRejectionsImpl(t[e]);
        return;
      }
      case `stub`:
      case `rpc-promise`:
        be(e).ignoreUnhandledRejections();
        return;
      case `rpc-thenable`:
        e.then(
          (e) => {},
          (e) => {},
        );
        return;
      default:
        return;
    }
  }
};
function Ce(e, t, n, r) {
  for (let i = 0; i < n.length; i++) {
    t = e;
    let a = n[i];
    if (a in Object.prototype) {
      e = void 0;
      continue;
    }
    switch (v(e)) {
      case `object`:
      case `function`:
        e = Object.hasOwn(e, a) ? e[a] : void 0;
        break;
      case `array`:
        e = Number.isInteger(a) && a >= 0 ? e[a] : void 0;
        break;
      case `rpc-target`:
      case `rpc-thenable`:
        if (Object.hasOwn(e, a))
          throw TypeError(
            `Attempted to access property '${a}', which is an instance property of the RpcTarget. To avoid leaking private internals, instance properties cannot be accessed over RPC. If you want to make this property available over RPC, define it as a method or getter on the class, instead of an instance property.`,
          );
        ((e = e[a]), (r = null));
        break;
      case `stub`:
      case `rpc-promise`: {
        let { hook: t, pathIfPromise: r } = xe(e);
        return { hook: t, remainingPath: r ? r.concat(n.slice(i)) : n.slice(i) };
      }
      case `writable`:
        e = void 0;
        break;
      case `readable`:
        e = void 0;
        break;
      case `primitive`:
      case `bigint`:
      case `bytes`:
      case `blob`:
      case `date`:
      case `error`:
      case `url`:
      case `headers`:
      case `request`:
      case `response`:
        e = void 0;
        break;
      case `undefined`:
        e = e[a];
        break;
      case `unsupported`:
        if (i === 0) throw TypeError(`RPC stub points at a non-serializable type.`);
        {
          let e = n.slice(0, i).join(`.`),
            t = n.slice(0, i).join(`.`);
          throw TypeError(
            `'${e}' is not a serializable type, so property ${t} cannot be accessed.`,
          );
        }
      default:
        throw TypeError(`unreachable`);
    }
  }
  if (e instanceof w) {
    let { hook: t, pathIfPromise: n } = xe(e);
    return { hook: t, remainingPath: n || [] };
  }
  return { value: e, parent: t, owner: r };
}
var we = class extends b {
    call(e, t) {
      try {
        let { value: n, owner: r } = this.getValue(),
          i = Ce(n, void 0, e, r);
        if (i.hook) return i.hook.call(i.remainingPath, t);
        if (typeof i.value != `function`) throw TypeError(`'${e.join(`.`)}' is not a function.`);
        return new O(t.deliverCall(i.value, i.parent).then((e) => new E(e)));
      } catch (e) {
        return new x(e);
      }
    }
    map(e, t, n) {
      try {
        let r;
        try {
          let { value: t, owner: n } = this.getValue();
          r = Ce(t, void 0, e, n);
        } catch (e) {
          for (let e of t) e.dispose();
          throw e;
        }
        return r.hook
          ? r.hook.map(r.remainingPath, t, n)
          : de.applyMap(r.value, r.parent, r.owner, t, n);
      } catch (e) {
        return new x(e);
      }
    }
    get(e) {
      try {
        let { value: t, owner: n } = this.getValue();
        if (e.length === 0 && n === null) throw Error(`Can't dup an RpcTarget stub as a promise.`);
        let r = Ce(t, void 0, e, n);
        return r.hook
          ? r.hook.get(r.remainingPath)
          : new E(T.deepCopyFrom(r.value, r.parent, r.owner));
      } catch (e) {
        return new x(e);
      }
    }
  },
  E = class e extends we {
    constructor(e) {
      (super(), (this.payload = e));
    }
    payload;
    getPayload() {
      if (this.payload) return this.payload;
      throw Error(`Attempted to use an RPC StubHook after it was disposed.`);
    }
    getValue() {
      let e = this.getPayload();
      return { value: e.value, owner: e };
    }
    dup() {
      let t = this.getPayload();
      return new e(T.deepCopyFrom(t.value, void 0, t));
    }
    pull() {
      return this.getPayload();
    }
    ignoreUnhandledRejections() {
      this.payload && this.payload.ignoreUnhandledRejections();
    }
    dispose() {
      this.payload &&= (this.payload.dispose(), void 0);
    }
    onBroken(e) {
      this.payload && this.payload.value instanceof C && this.payload.value.onRpcBroken(e);
    }
  };
function Te(e) {
  if (Symbol.dispose in e)
    try {
      e[Symbol.dispose]();
    } catch (e) {
      Promise.reject(e);
    }
}
var D = class e extends we {
    static create(t, n) {
      return (typeof t != `function` && (n = void 0), new e(t, n));
    }
    constructor(e, t, n) {
      (super(),
        (this.target = e),
        (this.parent = t),
        n
          ? n.refcount && ((this.refcount = n.refcount), ++this.refcount.count)
          : Symbol.dispose in e && (this.refcount = { count: 1 }));
    }
    target;
    parent;
    refcount;
    getTarget() {
      if (this.target) return this.target;
      throw Error(`Attempted to use an RPC StubHook after it was disposed.`);
    }
    getValue() {
      return { value: this.getTarget(), owner: null };
    }
    dup() {
      return new e(this.getTarget(), this.parent, this);
    }
    pull() {
      let e = this.getTarget();
      return `then` in e
        ? Promise.resolve(e).then((e) => T.fromAppReturn(e))
        : Promise.reject(Error(`Tried to resolve a non-promise stub.`));
    }
    ignoreUnhandledRejections() {}
    dispose() {
      this.target &&= (this.refcount && --this.refcount.count == 0 && Te(this.target), void 0);
    }
    onBroken(e) {}
  },
  O = class e extends b {
    promise;
    resolution;
    constructor(e) {
      (super(), (this.promise = e.then((e) => ((this.resolution = e), e))));
    }
    call(t, n) {
      return (n.ensureDeepCopied(), new e(this.promise.then((e) => e.call(t, n))));
    }
    stream(e, t) {
      return (t.ensureDeepCopied(), { promise: this.promise.then((n) => n.stream(e, t).promise) });
    }
    map(t, n, r) {
      return new e(
        this.promise.then(
          (e) => e.map(t, n, r),
          (e) => {
            for (let e of n) e.dispose();
            throw e;
          },
        ),
      );
    }
    get(t) {
      return new e(this.promise.then((e) => e.get(t)));
    }
    dup() {
      return this.resolution ? this.resolution.dup() : new e(this.promise.then((e) => e.dup()));
    }
    pull() {
      return this.resolution ? this.resolution.pull() : this.promise.then((e) => e.pull());
    }
    ignoreUnhandledRejections() {
      this.resolution
        ? this.resolution.ignoreUnhandledRejections()
        : this.promise.then(
            (e) => {
              e.ignoreUnhandledRejections();
            },
            (e) => {},
          );
    }
    dispose() {
      this.resolution
        ? this.resolution.dispose()
        : this.promise.then(
            (e) => {
              e.dispose();
            },
            (e) => {},
          );
    }
    onBroken(e) {
      this.resolution
        ? this.resolution.onBroken(e)
        : this.promise.then((t) => {
            t.onBroken(e);
          }, e);
    }
  },
  Ee = { maxBigIntDigits: 16384, maxDepth: 256, maxMessageSize: 33554432 },
  De = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1,
  Oe = [
    `ArrayBuffer`,
    `DataView`,
    `Int8Array`,
    `Uint8Array`,
    `Uint8ClampedArray`,
    `Int16Array`,
    `Uint16Array`,
    `Int32Array`,
    `Uint32Array`,
    `BigInt64Array`,
    `BigUint64Array`,
    `Float32Array`,
    `Float64Array`,
  ];
function ke(e) {
  return Oe.includes(e);
}
var Ae = {
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
  je = {
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
  Me = new Map();
for (let e of Object.keys(je)) Me.set(je[e], e);
function Ne(e, t) {
  if (t !== 2 && t !== 4 && t !== 8) throw RangeError(`Unsupported element size: ${t}`);
  let n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  for (let r = 0; r < e.byteLength; r += t)
    switch (t) {
      case 2:
        n.setUint16(r, n.getUint16(r, !1), !0);
        break;
      case 4:
        n.setUint32(r, n.getUint32(r, !1), !0);
        break;
      case 8:
        n.setBigUint64(r, n.getBigUint64(r, !1), !0);
    }
}
var Pe = new (class {
  exportStub(e) {
    throw Error(`Cannot serialize RPC stubs without an RPC session.`);
  }
  exportPromise(e) {
    throw Error(`Cannot serialize RPC stubs without an RPC session.`);
  }
  getImport(e) {}
  unexport(e) {}
  createPipe(e) {
    throw Error(`Cannot create pipes without an RPC session.`);
  }
  onSendError(e) {}
})();
async function Fe(e, t) {
  let n = await new Response(e).blob();
  return n.type === t ? n : n.slice(0, n.size, t);
}
var Ie = {
    __proto__: null,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    AggregateError,
  },
  k = class e {
    exporter;
    source;
    encodingLevel;
    constructor(e, t, n) {
      ((this.exporter = e), (this.source = t), (this.encodingLevel = n));
    }
    static devaluate(t, n, r = Pe, i, a = `string`) {
      let o = new e(r, i, a);
      try {
        return o.devaluateImpl(t, n, 0);
      } catch (e) {
        if (o.exports)
          try {
            r.unexport(o.exports);
          } catch {}
        throw e;
      }
    }
    exports;
    devaluateImpl(e, t, n) {
      if (n >= 256)
        throw Error(
          `Serialization exceeded maximum allowed depth. (Does the message contain cycles?)`,
        );
      switch (v(e)) {
        case `unsupported`: {
          let t;
          try {
            t = `Cannot serialize value: ${e}`;
          } catch {
            t = `Cannot serialize value: (couldn't stringify value)`;
          }
          throw TypeError(t);
        }
        case `primitive`:
          return typeof e == `number` && !isFinite(e)
            ? this.encodingLevel === `structuredClonable`
              ? e
              : e === 1 / 0
                ? [`inf`]
                : e === -1 / 0
                  ? [`-inf`]
                  : [`nan`]
            : e;
        case `object`: {
          let t = e,
            r = {};
          for (let e in t) r[e] = this.devaluateImpl(t[e], t, n + 1);
          return r;
        }
        case `array`: {
          let t = e,
            r = t.length,
            i = Array(r);
          for (let e = 0; e < r; e++) i[e] = this.devaluateImpl(t[e], t, n + 1);
          return [i];
        }
        case `bigint`:
          return this.encodingLevel === `structuredClonable` ? e : [`bigint`, e.toString()];
        case `date`: {
          if (this.encodingLevel === `structuredClonable`) return e;
          let t = e.getTime();
          return [`date`, Number.isNaN(t) ? null : t];
        }
        case `bytes`: {
          let t = Me.get(Object.getPrototypeOf(e)),
            n;
          if (t === `ArrayBuffer`) n = new Uint8Array(e);
          else if (t === void 0) n = e;
          else {
            let r = e;
            n = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
            let i = Ae[t];
            !De && i && ((n = n.slice()), Ne(n, i));
          }
          if (
            this.encodingLevel === `structuredClonable` ||
            this.encodingLevel === `jsonCompatibleWithBytes`
          )
            return t === void 0 ? [`bytes`, n] : [`bytes`, n, t];
          let r;
          if (n.toBase64) r = n.toBase64({ omitPadding: !0 });
          else if (typeof Buffer < `u`)
            r = (
              n instanceof Buffer ? n : Buffer.from(n.buffer, n.byteOffset, n.byteLength)
            ).toString(`base64`);
          else {
            let e = ``;
            for (let t = 0; t < n.length; t++) e += String.fromCharCode(n[t]);
            r = btoa(e);
          }
          return ((r = r.replace(/=+$/, ``)), t === void 0 ? [`bytes`, r] : [`bytes`, r, t]);
        }
        case `url`:
          return [`url`, e.href];
        case `headers`:
          return [`headers`, [...e]];
        case `request`: {
          let t = e,
            r = {};
          t.method !== `GET` && (r.method = t.method);
          let i = [...t.headers];
          if ((i.length > 0 && (r.headers = i), t.body))
            ((r.body = this.devaluateImpl(t.body, t, n + 1)), (r.duplex = t.duplex || `half`));
          else if (
            t.body === void 0 &&
            ![`GET`, `HEAD`, `OPTIONS`, `TRACE`, `DELETE`].includes(t.method)
          ) {
            let e = t.arrayBuffer(),
              n = new ReadableStream({
                async start(t) {
                  try {
                    (t.enqueue(new Uint8Array(await e)), t.close());
                  } catch (e) {
                    t.error(e);
                  }
                },
              }),
              i = y.createReadableStreamHook(n);
            ((r.body = [`readable`, this.exporter.createPipe(n, i)]),
              (r.duplex = t.duplex || `half`));
          }
          (t.cache && t.cache !== "default" && (r.cache = t.cache),
            t.redirect !== `follow` && (r.redirect = t.redirect),
            t.integrity && (r.integrity = t.integrity),
            t.mode && t.mode !== `cors` && (r.mode = t.mode),
            t.credentials && t.credentials !== `same-origin` && (r.credentials = t.credentials),
            t.referrer && t.referrer !== `about:client` && (r.referrer = t.referrer),
            t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy),
            t.keepalive && (r.keepalive = t.keepalive));
          let a = t;
          return (
            a.cf && (r.cf = a.cf),
            a.encodeResponseBody &&
              a.encodeResponseBody !== `automatic` &&
              (r.encodeResponseBody = a.encodeResponseBody),
            [`request`, t.url, r]
          );
        }
        case `response`: {
          let t = e,
            r = this.devaluateImpl(t.body, t, n + 1),
            i = {};
          (t.status !== 200 && (i.status = t.status),
            t.statusText && (i.statusText = t.statusText));
          let a = [...t.headers];
          a.length > 0 && (i.headers = a);
          let o = t;
          if (
            (o.cf && (i.cf = o.cf),
            o.encodeBody && o.encodeBody !== `automatic` && (i.encodeBody = o.encodeBody),
            o.webSocket)
          )
            throw TypeError(`Can't serialize a Response containing a webSocket.`);
          return [`response`, r, i];
        }
        case `blob`: {
          let t = e,
            n = t.stream(),
            r = y.createReadableStreamHook(n),
            i = this.exporter.createPipe(n, r);
          return [`blob`, t.type, [`readable`, i]];
        }
        case `error`: {
          let t = e,
            r = this.exporter.onSendError(t);
          r && (t = r);
          let i = t,
            a,
            o = (e, r) => {
              let i = this.exports?.length ?? 0;
              try {
                let i = this.devaluateImpl(r, t, n + 1);
                ((a ||= {}), (a[e] = i));
              } catch {
                if (this.exports && this.exports.length > i) {
                  let e = this.exports.splice(i);
                  try {
                    this.exporter.unexport(e);
                  } catch {}
                }
              }
            };
          for (let e of Object.keys(t))
            e !== `name` && e !== `message` && e !== `stack` && o(e, i[e]);
          (`cause` in t && o(`cause`, i.cause),
            t instanceof AggregateError && o(`errors`, t.errors));
          let s = [`error`, t.name, t.message];
          return (
            a
              ? (s.push(r && r.stack ? r.stack : null), s.push(a))
              : r && r.stack && s.push(r.stack),
            s
          );
        }
        case `undefined`:
          return this.encodingLevel === `structuredClonable` ? void 0 : [`undefined`];
        case `stub`:
        case `rpc-promise`: {
          if (!this.source) throw Error(`Can't serialize RPC stubs in this context.`);
          let { hook: t, pathIfPromise: n } = xe(e),
            r = this.exporter.getImport(t);
          return r === void 0
            ? ((t = n ? t.get(n) : t.dup()), this.devaluateHook(n ? `promise` : `export`, t))
            : n
              ? n.length > 0
                ? [`pipeline`, r, n]
                : [`pipeline`, r]
              : [`import`, r];
        }
        case `function`:
        case `rpc-target`: {
          if (!this.source) throw Error(`Can't serialize RPC stubs in this context.`);
          let n = this.source.getHookForRpcTarget(e, t);
          return this.devaluateHook(`export`, n);
        }
        case `rpc-thenable`: {
          if (!this.source) throw Error(`Can't serialize RPC stubs in this context.`);
          let n = this.source.getHookForRpcTarget(e, t);
          return this.devaluateHook(`promise`, n);
        }
        case `writable`: {
          if (!this.source) throw Error(`Can't serialize WritableStream in this context.`);
          let n = this.source.getHookForWritableStream(e, t);
          return this.devaluateHook(`writable`, n);
        }
        case `readable`: {
          if (!this.source) throw Error(`Can't serialize ReadableStream in this context.`);
          let n = e,
            r = this.source.getHookForReadableStream(n, t);
          return [`readable`, this.exporter.createPipe(n, r)];
        }
        default:
          throw Error(`unreachable`);
      }
    }
    devaluateHook(e, t) {
      this.exports ||= [];
      let n = e === `promise` ? this.exporter.exportPromise(t) : this.exporter.exportStub(t);
      return (this.exports.push(n), [e, n]);
    }
  };
new (class {
  importStub(e) {
    throw Error(`Cannot deserialize RPC stubs without an RPC session.`);
  }
  importPromise(e) {
    throw Error(`Cannot deserialize RPC stubs without an RPC session.`);
  }
  getExport(e) {}
  getPipeReadable(e) {
    throw Error(`Cannot retrieve pipe readable without an RPC session.`);
  }
  getLimits() {
    return Ee;
  }
})();
function Le(e, t) {
  return new w(
    new O(
      new Response(t).arrayBuffer().then((t) => {
        let n = new Uint8Array(t),
          r = new Request(e, { body: n });
        return new E(T.fromAppReturn(r));
      }),
    ),
    [],
  );
}
function Re(e, t) {
  return new w(new O(Fe(e, t).then((e) => new E(T.fromAppReturn(e)))), []);
}
var A = class e {
    importer;
    encodingLevel;
    limits;
    constructor(e, t = `string`) {
      ((this.importer = e), (this.encodingLevel = t), (this.limits = e.getLimits()));
    }
    hooks = [];
    promises = [];
    evaluate(e) {
      return this.evaluateWithDepth(e, 0);
    }
    evaluateWithDepth(e, t) {
      let n = T.forEvaluate(this.hooks, this.promises);
      try {
        return ((n.value = this.evaluateImpl(e, n, `value`, t)), n);
      } catch (e) {
        throw (n.dispose(), e);
      }
    }
    evaluateCopy(e) {
      return this.evaluate(structuredClone(e));
    }
    evaluateImpl(t, n, r, i) {
      let a = this.limits.maxDepth;
      if (i >= a)
        throw TypeError(`Deserialization exceeded maximum allowed message depth of ${a}.`);
      if (
        this.encodingLevel === `structuredClonable` &&
        (t instanceof Date || typeof t == `bigint`)
      )
        return t;
      if (t instanceof Array) {
        if (t.length == 1 && t[0] instanceof Array) {
          let e = t[0];
          for (let t = 0; t < e.length; t++) e[t] = this.evaluateImpl(e[t], e, t, i + 1);
          return e;
        }
        switch (t[0]) {
          case `bigint`:
            if (typeof t[1] == `string`) {
              let e = t[1],
                n = this.limits.maxBigIntDigits;
              if (e.length > n)
                throw TypeError(`Deserialized bigint exceeds maximum length of ${n} digits.`);
              return BigInt(e);
            }
            break;
          case `date`:
            if (t[1] === null) return new Date(NaN);
            if (typeof t[1] == `number`) return new Date(t[1]);
            break;
          case `bytes`: {
            let e;
            if (t[1] instanceof Uint8Array) e = t[1];
            else if (typeof t[1] == `string`) {
              if (typeof Buffer < `u`) e = Buffer.from(t[1], `base64`);
              else if (Uint8Array.fromBase64) e = Uint8Array.fromBase64(t[1]);
              else {
                let n = atob(t[1]),
                  r = n.length;
                e = new Uint8Array(r);
                for (let t = 0; t < r; t++) e[t] = n.charCodeAt(t);
              }
            } else break;
            if (t.length === 2) return e;
            if (typeof t[2] != `string`)
              throw TypeError(`Unknown bytes type marker type: ${typeof t[2]}`);
            if (!ke(t[2])) {
              let e = t[2].slice(0, 64);
              throw TypeError(`Unknown bytes type marker: ${e}`);
            }
            let n = t[2],
              r = Ae[n];
            if (r !== void 0 && e.byteLength % r !== 0)
              throw TypeError(
                `Invalid byte length ${e.byteLength} for ${n}; expected a multiple of ${r}`,
              );
            let i = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
            switch ((!De && r !== void 0 && Ne(new Uint8Array(i), r), n)) {
              case `ArrayBuffer`:
                return i;
              case `DataView`:
                return new DataView(i);
              case `Int8Array`:
                return new Int8Array(i);
              case `Uint8Array`:
                return new Uint8Array(i);
              case `Uint8ClampedArray`:
                return new Uint8ClampedArray(i);
              case `Int16Array`:
                return new Int16Array(i);
              case `Uint16Array`:
                return new Uint16Array(i);
              case `Int32Array`:
                return new Int32Array(i);
              case `Uint32Array`:
                return new Uint32Array(i);
              case `BigInt64Array`:
                return new BigInt64Array(i);
              case `BigUint64Array`:
                return new BigUint64Array(i);
              case `Float32Array`:
                return new Float32Array(i);
              case `Float64Array`:
                return new Float64Array(i);
            }
          }
          case `error`:
            if (t.length >= 3 && typeof t[1] == `string` && typeof t[2] == `string`) {
              let e = Ie[t[1]] || Error,
                n = e === AggregateError ? new e([], t[2]) : new e(t[2]);
              if ((typeof t[3] == `string` && (n.stack = t[3]), t.length >= 5)) {
                let e = t[4];
                if (!e || typeof e != `object` || Array.isArray(e)) break;
                let r = n,
                  a = e;
                for (let e of Object.keys(a))
                  if (e !== `name` && e !== `message` && e !== `stack`) {
                    if (e in Object.prototype || e === `toJSON`) {
                      this.evaluateImpl(a[e], n, e, i + 1);
                      continue;
                    }
                    r[e] = this.evaluateImpl(a[e], n, e, i + 1);
                  }
              }
              return n;
            }
            break;
          case `undefined`:
            if (t.length === 1) return;
            break;
          case `inf`:
            return 1 / 0;
          case `-inf`:
            return -1 / 0;
          case `nan`:
            return NaN;
          case `url`:
            if (t.length === 2 && typeof t[1] == `string`) return new URL(t[1]);
            break;
          case `headers`:
            if (t.length === 2 && t[1] instanceof Array) return new Headers(t[1]);
            break;
          case `request`: {
            if (t.length !== 3 || typeof t[1] != `string`) break;
            let e = t[1],
              a = t[2];
            if (typeof a != `object` || !a) break;
            if (
              a.body &&
              ((a.body = this.evaluateImpl(a.body, a, `body`, i + 1)),
              !(
                a.body === null ||
                typeof a.body == `string` ||
                a.body instanceof Uint8Array ||
                a.body instanceof ReadableStream
              ))
            )
              throw TypeError(`Request body must be of type ReadableStream.`);
            if (
              a.signal &&
              ((a.signal = this.evaluateImpl(a.signal, a, `signal`, i + 1)),
              !(a.signal instanceof AbortSignal))
            )
              throw TypeError(`Request siganl must be of type AbortSignal.`);
            if (a.headers && !(a.headers instanceof Array))
              throw TypeError(`Request headers must be serialized as an array of pairs.`);
            let o = new Request(e, a);
            if (a.body instanceof ReadableStream && o.body === void 0) {
              let e = Le(o, a.body);
              return (this.promises.push({ promise: e, parent: n, property: r }), e);
            }
            return o;
          }
          case `response`: {
            if (t.length !== 3) break;
            let e = this.evaluateImpl(t[1], n, r, i + 1);
            if (
              !(
                e === null ||
                typeof e == `string` ||
                e instanceof Uint8Array ||
                e instanceof ReadableStream
              )
            )
              throw TypeError(`Response body must be of type ReadableStream.`);
            let a = t[2];
            if (typeof a != `object` || !a) break;
            if (a.webSocket)
              throw TypeError(`Can't deserialize a Response containing a webSocket.`);
            if (a.headers && !(a.headers instanceof Array))
              throw TypeError(`Request headers must be serialized as an array of pairs.`);
            return new Response(e, a);
          }
          case `blob`: {
            if (t.length !== 3 || typeof t[1] != `string`) break;
            let e = t[1],
              a = this.evaluateImpl(t[2], n, r, i + 1);
            if (!(a instanceof ReadableStream))
              throw TypeError(`Blob content must be serialized as a ReadableStream.`);
            let o = Re(a, e);
            return (this.promises.push({ promise: o, parent: n, property: r }), o);
          }
          case `import`:
          case `pipeline`: {
            if (t.length < 2 || t.length > 4 || typeof t[1] != `number`) break;
            let a = this.importer.getExport(t[1]);
            if (!a) throw Error(`no such entry on exports table: ${t[1]}`);
            let o = t[0] == `pipeline`,
              s = (e) => {
                if (o) {
                  let t = new w(e, []);
                  return (this.promises.push({ promise: t, parent: n, property: r }), t);
                }
                return (this.hooks.push(e), new w(e, []));
              };
            if (t.length == 2) return s(o ? a.get([]) : a.dup());
            let c = t[2];
            if (
              !(c instanceof Array) ||
              !c.every((e) => typeof e == `string` || typeof e == `number`)
            )
              break;
            if (t.length == 3) return s(a.get(c));
            let l = t[3];
            if (!(l instanceof Array)) break;
            return ((l = new e(this.importer).evaluateWithDepth([l], i)), s(a.call(c, l)));
          }
          case `remap`: {
            if (
              t.length !== 5 ||
              typeof t[1] != `number` ||
              !(t[2] instanceof Array) ||
              !(t[3] instanceof Array) ||
              !(t[4] instanceof Array)
            )
              break;
            let e = this.importer.getExport(t[1]);
            if (!e) throw Error(`no such entry on exports table: ${t[1]}`);
            let i = t[2];
            if (!i.every((e) => typeof e == `string` || typeof e == `number`)) break;
            let a = t[3].map((e) => {
                if (
                  !(e instanceof Array) ||
                  e.length !== 2 ||
                  (e[0] !== `import` && e[0] !== `export`) ||
                  typeof e[1] != `number`
                )
                  throw TypeError(`unknown map capture: ${JSON.stringify(e)}`);
                if (e[0] === `export`) return this.importer.importStub(e[1]);
                {
                  let t = this.importer.getExport(e[1]);
                  if (!t) throw Error(`no such entry on exports table: ${e[1]}`);
                  return t.dup();
                }
              }),
              o = t[4],
              s = new w(e.map(i, a, o), []);
            return (this.promises.push({ promise: s, parent: n, property: r }), s);
          }
          case `export`:
          case `promise`:
            if (typeof t[1] == `number`) {
              if (t[0] == `promise`) {
                let e = new w(this.importer.importPromise(t[1]), []);
                return (this.promises.push({ parent: n, property: r, promise: e }), e);
              }
              {
                let e = this.importer.importStub(t[1]);
                return (this.hooks.push(e), new C(e));
              }
            }
            break;
          case `writable`:
            if (typeof t[1] == `number`) {
              let e = this.importer.importStub(t[1]),
                n = y.createWritableStreamFromHook(e);
              return (this.hooks.push(e), n);
            }
            break;
          case `readable`:
            if (typeof t[1] == `number`) {
              let e = this.importer.getPipeReadable(t[1]),
                n = y.createReadableStreamHook(e);
              return (this.hooks.push(n), e);
            }
        }
        throw TypeError(`unknown special value: ${JSON.stringify(t)}`);
      }
      if (t instanceof Object) {
        let e = t;
        for (let t in e)
          t in Object.prototype || t === `toJSON`
            ? (this.evaluateImpl(e[t], e, t, i + 1), delete e[t])
            : (e[t] = this.evaluateImpl(e[t], e, t, i + 1));
        return e;
      }
      return t;
    }
  },
  ze = 16,
  j = 8,
  Be = 16,
  Ve = 64;
function M(e) {
  return 2 + e.length * 3;
}
function N(e, t, n = 0) {
  if (n >= Ve) return j;
  switch (typeof e) {
    case `string`:
      return M(e);
    case `number`:
      return 16;
    case `bigint`:
      return 16;
    case `boolean`:
      return 8;
    case `undefined`:
      return 16;
    case `object`: {
      if (e === null) return 8;
      if (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) return Be + e.byteLength;
      if (typeof Blob < `u` && e instanceof Blob) return Be + e.size;
      if (e instanceof Date) return 16;
      if (((t ??= new WeakSet()), t.has(e))) return j;
      if ((t.add(e), e instanceof Array)) {
        let r = ze;
        for (let i of e) r += j + N(i, t, n + 1);
        return r;
      }
      if (e instanceof Error) {
        let r = ze + M(e.name) + M(e.message) + M(e.stack ?? ``);
        for (let i of Object.keys(e)) r += j + M(i) + N(e[i], t, n + 1);
        return r;
      }
      let r = ze;
      for (let i of Object.keys(e)) r += j + M(i) + N(e[i], t, n + 1);
      return r;
    }
    default:
      return 16;
  }
}
var P = class {
    session;
    importId;
    constructor(e, t, n) {
      ((this.session = e), (this.importId = t), n && (this.activePull = Promise.withResolvers()));
    }
    localRefcount = 0;
    remoteRefcount = 1;
    activePull;
    resolution;
    onBrokenRegistrations;
    resolve(e) {
      if (this.localRefcount == 0) {
        e.dispose();
        return;
      }
      if (((this.resolution = e), this.sendRelease(), this.onBrokenRegistrations)) {
        for (let t of this.onBrokenRegistrations) {
          let n = this.session.onBrokenCallbacks[t],
            r = this.session.onBrokenCallbacks.length;
          (e.onBroken(n),
            this.session.onBrokenCallbacks[r] === n
              ? delete this.session.onBrokenCallbacks[r]
              : delete this.session.onBrokenCallbacks[t]);
        }
        this.onBrokenRegistrations = void 0;
      }
      this.activePull &&= (this.activePull.resolve(), void 0);
    }
    async awaitResolution() {
      return (
        (this.activePull ||= (this.session.sendPull(this.importId), Promise.withResolvers())),
        await this.activePull.promise,
        this.resolution.pull()
      );
    }
    dispose() {
      this.resolution
        ? this.resolution.dispose()
        : (this.abort(Error(`RPC was canceled because the RpcPromise was disposed.`)),
          this.sendRelease());
    }
    abort(e) {
      this.resolution ||
        ((this.resolution = new x(e)),
        (this.activePull &&= (this.activePull.reject(e), void 0)),
        (this.onBrokenRegistrations = void 0));
    }
    onBroken(e) {
      if (this.resolution) this.resolution.onBroken(e);
      else {
        let t = this.session.onBrokenCallbacks.length;
        (this.session.onBrokenCallbacks.push(e),
          (this.onBrokenRegistrations ||= []),
          this.onBrokenRegistrations.push(t));
      }
    }
    sendRelease() {
      this.remoteRefcount > 0 &&
        (this.session.sendRelease(this.importId, this.remoteRefcount), (this.remoteRefcount = 0));
    }
  },
  F = class e extends b {
    isPromise;
    entry;
    constructor(e, t) {
      (super(), (this.isPromise = e), ++t.localRefcount, (this.entry = t));
    }
    collectPath(e) {
      return this;
    }
    getEntry() {
      if (this.entry) return this.entry;
      throw Error(`This RpcImportHook was already disposed.`);
    }
    call(e, t) {
      let n = this.getEntry();
      return n.resolution ? n.resolution.call(e, t) : n.session.sendCall(n.importId, e, t);
    }
    stream(e, t) {
      let n = this.getEntry();
      return n.resolution ? n.resolution.stream(e, t) : n.session.sendStream(n.importId, e, t);
    }
    map(e, t, n) {
      let r;
      try {
        r = this.getEntry();
      } catch (e) {
        for (let e of t) e.dispose();
        throw e;
      }
      return r.resolution ? r.resolution.map(e, t, n) : r.session.sendMap(r.importId, e, t, n);
    }
    get(e) {
      let t = this.getEntry();
      return t.resolution ? t.resolution.get(e) : t.session.sendCall(t.importId, e);
    }
    dup() {
      return new e(!1, this.getEntry());
    }
    pull() {
      let e = this.getEntry();
      if (!this.isPromise) throw Error(`Can't pull this hook because it's not a promise hook.`);
      return e.resolution ? e.resolution.pull() : e.awaitResolution();
    }
    ignoreUnhandledRejections() {}
    dispose() {
      let e = this.entry;
      ((this.entry = void 0), e && --e.localRefcount === 0 && e.dispose());
    }
    onBroken(e) {
      this.entry && this.entry.onBroken(e);
    }
  },
  He = class extends F {
    session;
    constructor(e) {
      (super(!1, e), (this.session = e.session));
    }
    dispose() {
      if (this.session) {
        let e = this.session;
        ((this.session = void 0), e.shutdown());
      }
    }
  },
  Ue = class {
    transport;
    options;
    exports = [];
    reverseExports = new Map();
    imports = [];
    abortReason;
    cancelReadLoop;
    nextExportId = -1;
    onBatchDone;
    pullCount = 0;
    onBrokenCallbacks = [];
    encodingLevel;
    limits;
    constructor(e, t, n) {
      ((this.transport = e), (this.options = n));
      let r = `string`;
      if (`encodingLevel` in e) {
        let t = e.encodingLevel;
        if (t !== void 0) {
          if (
            t !== `string` &&
            t !== `jsonCompatible` &&
            t !== `jsonCompatibleWithBytes` &&
            t !== `structuredClonable`
          )
            throw TypeError(`Unknown transport encodingLevel: ${String(t)}`);
          r = t;
        }
      }
      ((this.encodingLevel = r),
        (this.limits = { ...Ee, ...n.limits }),
        this.exports.push({ hook: t, refcount: 1 }),
        this.imports.push(new P(this, 0, !1)),
        this.readLoop().catch((e) => this.abort(e)));
    }
    getMainImport() {
      return new He(this.imports[0]);
    }
    shutdown() {
      this.abort(Error(`RPC session was shut down by disposing the main stub`), !1);
    }
    exportStub(e) {
      if (this.abortReason) throw this.abortReason;
      let t = this.reverseExports.get(e);
      if (t !== void 0) return (++this.exports[t].refcount, t);
      {
        let t = this.nextExportId--;
        return ((this.exports[t] = { hook: e, refcount: 1 }), this.reverseExports.set(e, t), t);
      }
    }
    exportPromise(e) {
      if (this.abortReason) throw this.abortReason;
      let t = this.nextExportId--;
      return (
        (this.exports[t] = { hook: e, refcount: 1 }),
        this.reverseExports.set(e, t),
        this.ensureResolvingExport(t),
        t
      );
    }
    unexport(e) {
      for (let t of e) this.releaseExport(t, 1);
    }
    releaseExport(e, t) {
      let n = this.exports[e];
      if (!n) throw Error(`no such export ID: ${e}`);
      if (n.refcount < t) throw Error(`refcount would go negative: ${n.refcount} < ${t}`);
      ((n.refcount -= t),
        n.refcount === 0 &&
          (delete this.exports[e], this.reverseExports.delete(n.hook), n.hook.dispose()));
    }
    onSendError(e) {
      if (this.options.onSendError) return this.options.onSendError(e);
    }
    ensureResolvingExport(e) {
      let t = this.exports[e];
      if (!t) throw Error(`no such export ID: ${e}`);
      if (!t.pull) {
        let n = async () => {
            let e = t.hook;
            for (;;) {
              let t = await e.pull();
              if (t.value instanceof C) {
                let { hook: n, pathIfPromise: r } = xe(t.value);
                if (r && r.length == 0 && this.getImport(e) === void 0) {
                  e = n;
                  continue;
                }
              }
              return t;
            }
          },
          r = t.autoRelease;
        (++this.pullCount,
          (t.pull = n()
            .then(
              (t) => {
                let n = k.devaluate(t.value, void 0, this, t, this.encodingLevel);
                (this.send([`resolve`, e, n]), r && this.releaseExport(e, 1));
              },
              (t) => {
                (this.send([`reject`, e, k.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                  r && this.releaseExport(e, 1));
              },
            )
            .catch((t) => {
              try {
                (this.send([`reject`, e, k.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                  r && this.releaseExport(e, 1));
              } catch (e) {
                this.abort(e);
              }
            })
            .finally(() => {
              --this.pullCount === 0 && this.onBatchDone && this.onBatchDone.resolve();
            })));
      }
    }
    getImport(e) {
      if (e instanceof F && e.entry && e.entry.session === this) return e.entry.importId;
    }
    importStub(e) {
      if (this.abortReason) throw this.abortReason;
      let t = this.imports[e];
      return (t || ((t = new P(this, e, !1)), (this.imports[e] = t)), new F(!1, t));
    }
    importPromise(e) {
      if (this.abortReason) throw this.abortReason;
      if (this.imports[e])
        return new x(
          Error(`Bug in RPC system: The peer sent a promise reusing an existing export ID.`),
        );
      let t = new P(this, e, !0);
      return ((this.imports[e] = t), new F(!0, t));
    }
    getExport(e) {
      return this.exports[e]?.hook;
    }
    getPipeReadable(e) {
      let t = this.exports[e];
      if (!t || !t.pipeReadable)
        throw Error(`Export ${e} is not a pipe or its readable end was already consumed.`);
      let n = t.pipeReadable;
      return ((t.pipeReadable = void 0), n);
    }
    getLimits() {
      return this.limits;
    }
    createPipe(e, t) {
      if (this.abortReason) throw this.abortReason;
      this.send([`pipe`]);
      let n = this.imports.length,
        r = new P(this, n, !1);
      this.imports.push(r);
      let i = new F(!1, r),
        a = y.createWritableStreamFromHook(i);
      return (
        e
          .pipeTo(a)
          .catch(() => {})
          .finally(() => t.dispose()),
        n
      );
    }
    send(e) {
      if (this.abortReason !== void 0) return 0;
      if (this.encodingLevel === `string`) {
        let t;
        try {
          t = JSON.stringify(e);
        } catch (e) {
          try {
            this.abort(e);
          } catch {}
          throw e;
        }
        try {
          let e = this.transport.send(t);
          e !== void 0 && typeof e.catch == `function` && e.catch((e) => this.abort(e, !1));
        } catch (e) {
          queueMicrotask(() => this.abort(e, !1));
        }
        return t.length;
      }
      try {
        let t = this.transport.send(e);
        if (typeof t == `number`) return t;
        let n = t;
        n && typeof n.then == `function` && Promise.resolve(n).catch((e) => this.abort(e, !1));
        return;
      } catch (e) {
        queueMicrotask(() => this.abort(e, !1));
        return;
      }
    }
    sendCall(e, t, n) {
      if (this.abortReason) throw this.abortReason;
      let r = [`pipeline`, e, t];
      if (n) {
        let e = k.devaluate(n.value, void 0, this, n, this.encodingLevel);
        r.push(e[0]);
      }
      this.send([`push`, r]);
      let i = new P(this, this.imports.length, !1);
      return (this.imports.push(i), new F(!0, i));
    }
    sendStream(e, t, n) {
      if (this.abortReason) throw this.abortReason;
      let r = [`pipeline`, e, t],
        i = k.devaluate(n.value, void 0, this, n, this.encodingLevel);
      r.push(i[0]);
      let a = [`stream`, r],
        o = this.send(a);
      o === void 0 && (o = N(a));
      let s = this.imports.length,
        c = new P(this, s, !0);
      return (
        (c.remoteRefcount = 0),
        (c.localRefcount = 1),
        this.imports.push(c),
        {
          promise: c.awaitResolution().then(
            (e) => {
              (e.dispose(), delete this.imports[s]);
            },
            (e) => {
              throw (delete this.imports[s], e);
            },
          ),
          size: o,
        }
      );
    }
    sendMap(e, t, n, r) {
      if (this.abortReason) {
        for (let e of n) e.dispose();
        throw this.abortReason;
      }
      let i = [
        `remap`,
        e,
        t,
        n.map((e) => {
          let t = this.getImport(e);
          return t === void 0 ? [`export`, this.exportStub(e)] : [`import`, t];
        }),
        r,
      ];
      this.send([`push`, i]);
      let a = new P(this, this.imports.length, !1);
      return (this.imports.push(a), new F(!0, a));
    }
    sendPull(e) {
      if (this.abortReason) throw this.abortReason;
      this.send([`pull`, e]);
    }
    sendRelease(e, t) {
      this.abortReason || (this.send([`release`, e, t]), delete this.imports[e]);
    }
    abort(e, t = !0) {
      if (this.abortReason === void 0) {
        if ((this.cancelReadLoop?.(e), (this.cancelReadLoop = void 0), t))
          try {
            let t = [`abort`, k.devaluate(e, void 0, this, void 0, this.encodingLevel)];
            if (this.encodingLevel === `string`) {
              let e = this.transport.send(JSON.stringify(t));
              e !== void 0 && typeof e.catch == `function` && e.catch((e) => {});
            } else {
              let e = this.transport.send(t);
              e && typeof e.then == `function` && Promise.resolve(e).catch((e) => {});
            }
          } catch {}
        if (
          (e === void 0 && (e = `undefined`),
          (this.abortReason = e),
          this.onBatchDone && this.onBatchDone.reject(e),
          this.transport.abort)
        )
          try {
            this.transport.abort(e);
          } catch (e) {
            Promise.resolve(e);
          }
        for (let t in this.onBrokenCallbacks)
          try {
            this.onBrokenCallbacks[t](e);
          } catch (e) {
            Promise.resolve(e);
          }
        for (let t in this.imports) this.imports[t].abort(e);
        for (let e in this.exports) this.exports[e].hook.dispose();
      }
    }
    async readLoop() {
      for (; !this.abortReason;) {
        let e = Promise.withResolvers();
        this.cancelReadLoop = e.reject;
        let t;
        try {
          t = await Promise.race([this.transport.receive(), e.promise]);
        } finally {
          this.cancelReadLoop === e.reject && (this.cancelReadLoop = void 0);
        }
        if (this.encodingLevel === `string` && t.length > this.limits.maxMessageSize)
          throw TypeError(
            `Incoming message exceeds maximum size of ${this.limits.maxMessageSize} UTF-16 code units.`,
          );
        if (this.abortReason) break;
        let n = this.encodingLevel === `string` ? JSON.parse(t) : t;
        if (n instanceof Array)
          switch (n[0]) {
            case `push`:
              if (n.length > 1) {
                let e = new E(new A(this, this.encodingLevel).evaluate(n[1]));
                (e.ignoreUnhandledRejections(), this.exports.push({ hook: e, refcount: 1 }));
                continue;
              }
              break;
            case `stream`:
              if (n.length > 1) {
                let e = new E(new A(this, this.encodingLevel).evaluate(n[1]));
                e.ignoreUnhandledRejections();
                let t = this.exports.length;
                (this.exports.push({ hook: e, refcount: 1, autoRelease: !0 }),
                  this.ensureResolvingExport(t));
                continue;
              }
              break;
            case `pipe`: {
              let { readable: e, writable: t } = new TransformStream(),
                n = y.createWritableStreamHook(t);
              this.exports.push({ hook: n, refcount: 1, pipeReadable: e });
              continue;
            }
            case `pull`: {
              let e = n[1];
              if (typeof e == `number`) {
                this.ensureResolvingExport(e);
                continue;
              }
              break;
            }
            case `resolve`:
            case `reject`: {
              let e = n[1];
              if (typeof e == `number` && n.length > 2) {
                let t = this.imports[e];
                if (t) {
                  if (n[0] == `resolve`)
                    t.resolve(new E(new A(this, this.encodingLevel).evaluate(n[2])));
                  else {
                    let e = new A(this, this.encodingLevel).evaluate(n[2]);
                    (e.dispose(), t.resolve(new x(e.value)));
                  }
                } else
                  n[0] == `resolve` && new A(this, this.encodingLevel).evaluate(n[2]).dispose();
                continue;
              }
              break;
            }
            case `release`: {
              let e = n[1],
                t = n[2];
              if (typeof e == `number` && typeof t == `number`) {
                this.releaseExport(e, t);
                continue;
              }
              break;
            }
            case `abort`: {
              let e = new A(this, this.encodingLevel).evaluate(n[1]);
              (e.dispose(), this.abort(e.value, !1));
              break;
            }
          }
        throw Error(`bad RPC message: ${JSON.stringify(n)}`);
      }
    }
    async drain() {
      if (this.abortReason) throw this.abortReason;
      if (this.pullCount > 0) {
        let { promise: e, resolve: t, reject: n } = Promise.withResolvers();
        ((this.onBatchDone = { resolve: t, reject: n }), await e);
      }
    }
    getStats() {
      let e = { imports: 0, exports: 0 };
      for (let t in this.imports) ++e.imports;
      for (let t in this.exports) ++e.exports;
      return e;
    }
  },
  We = class {
    #e;
    #t;
    constructor(e, t, n = {}) {
      let r;
      ((r = t ? new E(T.fromAppReturn(t)) : new x(Error(`This connection has no main object.`))),
        (this.#e = new Ue(e, r, n)),
        (this.#t = new C(this.#e.getMainImport())));
    }
    getRemoteMain() {
      return this.#t;
    }
    getStats() {
      return this.#e.getStats();
    }
    drain() {
      return this.#e.drain();
    }
  };
function Ge(e, t, n) {
  return new We(new Ke(e), t, n).getRemoteMain();
}
var Ke = class {
    encodingLevel = `structuredClonable`;
    constructor(e) {
      ((this.#e = e),
        e.start(),
        e.addEventListener(`message`, (e) => {
          this.#i ||
            (e.data === null
              ? this.#a(Error(`Peer closed MessagePort connection.`))
              : this.#t
                ? (this.#t(e.data), (this.#t = void 0), (this.#n = void 0))
                : this.#r.push(e.data));
        }),
        e.addEventListener(`messageerror`, (e) => {
          this.#a(Error(`MessagePort message error.`));
        }));
    }
    #e;
    #t;
    #n;
    #r = [];
    #i;
    send(e) {
      if (this.#i) throw this.#i;
      this.#e.postMessage(e);
    }
    async receive() {
      if (this.#r.length > 0) return this.#r.shift();
      if (this.#i) throw this.#i;
      return new Promise((e, t) => {
        ((this.#t = e), (this.#n = t));
      });
    }
    abort(e) {
      try {
        this.#e.postMessage(null);
      } catch {}
      (this.#e.close(), (this.#i ||= e));
    }
    #a(e) {
      this.#i || ((this.#i = e), (this.#n &&= (this.#n(e), (this.#t = void 0), void 0)));
    }
  },
  I,
  qe = class {
    context;
    captureMap = new Map();
    instructions = [];
    constructor(e, t) {
      ((this.context = I
        ? { parent: I, captures: [], subject: I.capture(e), path: t }
        : { parent: void 0, captures: [], subject: e, path: t }),
        (I = this));
    }
    unregister() {
      I = this.context.parent;
    }
    makeInput() {
      return new R(this, 0);
    }
    makeOutput(e) {
      let t;
      try {
        t = k.devaluate(e.value, void 0, this, e);
      } finally {
        e.dispose();
      }
      return (
        this.instructions.push(t),
        this.context.parent
          ? (this.context.parent.instructions.push([
              `remap`,
              this.context.subject,
              this.context.path,
              this.context.captures.map((e) => [`import`, e]),
              this.instructions,
            ]),
            new R(this.context.parent, this.context.parent.instructions.length))
          : this.context.subject.map(this.context.path, this.context.captures, this.instructions)
      );
    }
    pushCall(e, t, n) {
      let r = k.devaluate(n.value, void 0, this, n);
      r = r[0];
      let i = this.capture(e.dup());
      return (this.instructions.push([`pipeline`, i, t, r]), new R(this, this.instructions.length));
    }
    pushGet(e, t) {
      let n = this.capture(e.dup());
      return (this.instructions.push([`pipeline`, n, t]), new R(this, this.instructions.length));
    }
    capture(e) {
      if (e instanceof R && e.mapper === this) return e.idx;
      let t = this.captureMap.get(e);
      if (t === void 0) {
        if (this.context.parent) {
          let t = this.context.parent.capture(e);
          this.context.captures.push(t);
        } else this.context.captures.push(e);
        ((t = -this.context.captures.length), this.captureMap.set(e, t));
      }
      return t;
    }
    exportStub(e) {
      throw Error(
        `Can't construct an RpcTarget or RPC callback inside a mapper function. Try creating a new RpcStub outside the callback first, then using it inside the callback.`,
      );
    }
    exportPromise(e) {
      return this.exportStub(e);
    }
    getImport(e) {
      return this.capture(e);
    }
    unexport(e) {}
    createPipe(e) {
      throw Error(`Cannot send ReadableStream inside a mapper function.`);
    }
    onSendError(e) {}
  };
de.sendMap = (e, t, n) => {
  let r = new qe(e, t),
    i;
  try {
    i = T.fromAppReturn(he(r.pushCall.bind(r), () => n(new w(r.makeInput(), []))));
  } finally {
    r.unregister();
  }
  if (i instanceof Promise)
    throw (i.catch((e) => {}), Error(`RPC map() callbacks cannot be async.`));
  return new w(r.makeOutput(i), []);
};
function L() {
  throw Error(
    `Attempted to use an abstract placeholder from a mapper function. Please make sure your map function has no side effects.`,
  );
}
var R = class extends b {
    mapper;
    idx;
    constructor(e, t) {
      (super(), (this.mapper = e), (this.idx = t));
    }
    dup() {
      return this;
    }
    dispose() {}
    get(e) {
      if (e.length == 0) return this;
      if (I) return I.pushGet(this, e);
      L();
    }
    call(e, t) {
      L();
    }
    map(e, t, n) {
      L();
    }
    pull() {
      L();
    }
    ignoreUnhandledRejections() {}
    onBroken(e) {
      L();
    }
  },
  Je = class {
    captures;
    variables;
    constructor(e, t) {
      ((this.captures = e), (this.variables = [t]));
    }
    dispose() {
      for (let e of this.variables) e.dispose();
    }
    apply(e) {
      try {
        if (e.length < 1) throw Error(`Invalid empty mapper function.`);
        for (let t of e.slice(0, -1)) {
          let e = new A(this).evaluateCopy(t);
          if (e.value instanceof C) {
            let t = ye(e.value);
            if (t) {
              this.variables.push(t);
              continue;
            }
          }
          this.variables.push(new E(e));
        }
        return new A(this).evaluateCopy(e[e.length - 1]);
      } finally {
        for (let e of this.variables) e.dispose();
      }
    }
    importStub(e) {
      throw Error(`A mapper function cannot refer to exports.`);
    }
    importPromise(e) {
      return this.importStub(e);
    }
    getExport(e) {
      return e < 0 ? this.captures[-e - 1] : this.variables[e];
    }
    getPipeReadable(e) {
      throw Error(`A mapper function cannot use pipe readables.`);
    }
    getLimits() {
      return Ee;
    }
  };
function Ye(e, t, n, r, i) {
  let a = new Je(r, new E(T.deepCopyFrom(e, t, n)));
  try {
    return a.apply(i);
  } finally {
    a.dispose();
  }
}
de.applyMap = (e, t, n, r, i) => {
  try {
    let a;
    if (e instanceof w) throw Error(`applyMap() can't be called on RpcPromise`);
    if (e instanceof Array) {
      let t = [];
      try {
        for (let a of e) t.push(Ye(a, e, n, r, i));
      } catch (e) {
        for (let e of t) e.dispose();
        throw e;
      }
      a = T.fromArray(t);
    } else a = e == null ? T.fromAppReturn(e) : Ye(e, t, n, r, i);
    return new E(a);
  } finally {
    for (let e of r) e.dispose();
  }
};
var Xe = class e extends b {
    state;
    static create(t) {
      return new e({ refcount: 1, writer: t.getWriter(), closed: !1 });
    }
    constructor(e, t) {
      (super(), (this.state = e), t && ++e.refcount);
    }
    getState() {
      if (this.state) return this.state;
      throw Error(`Attempted to use a WritableStreamStubHook after it was disposed.`);
    }
    call(e, t) {
      try {
        let n = this.getState();
        if (e.length !== 1 || typeof e[0] != `string`)
          throw Error(`WritableStream stub only supports direct method calls`);
        let r = e[0];
        if (r !== `write` && r !== `close` && r !== `abort`)
          throw (t.dispose(), Error(`Unknown WritableStream method: ${r}`));
        return (
          (r === `close` || r === `abort`) && (n.closed = !0),
          new O(
            (r === `write`
              ? t.deliverStreamWrite(n.writer)
              : t.deliverCall(n.writer[r], n.writer)
            ).then((e) => new E(e)),
          )
        );
      } catch (e) {
        return new x(e);
      }
    }
    map(e, t, n) {
      for (let e of t) e.dispose();
      return new x(Error(`Cannot use map() on a WritableStream`));
    }
    get(e) {
      return new x(Error(`Cannot access properties on a WritableStream stub`));
    }
    dup() {
      return new e(this.getState(), this);
    }
    pull() {
      return Promise.reject(Error(`Cannot pull a WritableStream stub`));
    }
    ignoreUnhandledRejections() {}
    dispose() {
      let e = this.state;
      ((this.state = void 0),
        e &&
          --e.refcount === 0 &&
          (e.closed ||
            e.writer
              .abort(Error(`WritableStream RPC stub was disposed without calling close()`))
              .catch(() => {}),
          e.writer.releaseLock()));
    }
    onBroken(e) {}
  },
  Ze = 262144,
  Qe = 1073741824,
  $e = 65536,
  et = 2,
  tt = 1.25,
  nt = 0.9,
  rt = 3,
  it = class {
    now;
    window = Ze;
    bytesInFlight = 0;
    inStartupPhase = !0;
    delivered = 0;
    deliveredTime = 0;
    firstAckTime = 0;
    firstAckDelivered = 0;
    minRtt = 1 / 0;
    roundsWithoutIncrease = 0;
    lastRoundWindow = 0;
    roundStartTime = 0;
    constructor(e) {
      this.now = e;
    }
    onSend(e) {
      this.bytesInFlight += e;
      let t = {
        sentTime: this.now(),
        size: e,
        deliveredAtSend: this.delivered,
        deliveredTimeAtSend: this.deliveredTime,
        windowAtSend: this.window,
        windowFullAtSend: this.bytesInFlight >= this.window,
      };
      return { token: t, shouldBlock: t.windowFullAtSend };
    }
    onError(e) {
      this.bytesInFlight -= e.size;
    }
    onAck(e) {
      let t = this.now();
      ((this.delivered += e.size), (this.deliveredTime = t), (this.bytesInFlight -= e.size));
      let n = t - e.sentTime;
      if (((this.minRtt = Math.min(this.minRtt, n)), this.firstAckTime === 0))
        ((this.firstAckTime = t), (this.firstAckDelivered = this.delivered));
      else {
        let n, r;
        e.deliveredTimeAtSend === 0
          ? ((n = this.firstAckTime), (r = this.firstAckDelivered))
          : ((n = e.deliveredTimeAtSend), (r = e.deliveredAtSend));
        let i = t - n,
          a = (this.delivered - r) / i,
          o = this.inStartupPhase ? et : tt,
          s = a * this.minRtt * o;
        ((s = Math.min(s, e.windowAtSend * o)),
          (s = e.windowFullAtSend ? Math.max(s, e.windowAtSend * nt) : Math.max(s, this.window)),
          (this.window = Math.max(Math.min(s, Qe), $e)),
          this.inStartupPhase &&
            e.sentTime >= this.roundStartTime &&
            (this.window > this.lastRoundWindow * tt
              ? (this.roundsWithoutIncrease = 0)
              : ++this.roundsWithoutIncrease >= rt && (this.inStartupPhase = !1),
            (this.roundStartTime = t),
            (this.lastRoundWindow = this.window)));
      }
      return this.bytesInFlight < this.window;
    }
  };
function at(e) {
  let t,
    n = !1,
    r = new it(() => performance.now()),
    i,
    a,
    o = () => {
      n || ((n = !0), e.dispose());
    };
  return new WritableStream({
    write(n, s) {
      if (t !== void 0) throw t;
      let c = T.fromAppParams([n]),
        { promise: l, size: u } = e.stream([`write`], c);
      if (u === void 0)
        return l.catch((e) => {
          throw (t === void 0 && (t = e), e);
        });
      {
        let { token: e, shouldBlock: n } = r.onSend(u);
        if (
          (l.then(
            () => {
              r.onAck(e) && i && (i(), (i = void 0), (a = void 0));
            },
            (n) => {
              (r.onError(e),
                t === void 0 && ((t = n), s.error(n), o()),
                (a &&= (a(n), (i = void 0), void 0)));
            },
          ),
          n)
        )
          return new Promise((e, t) => {
            ((i = e), (a = t));
          });
      }
    },
    async close() {
      if (t !== void 0) throw (o(), t);
      let { promise: n } = e.stream([`close`], T.fromAppParams([]));
      try {
        await n;
      } catch (e) {
        throw t ?? e;
      } finally {
        o();
      }
    },
    abort(n) {
      if (t !== void 0) return;
      ((t = n ?? Error(`WritableStream was aborted`)), (a &&= (a(t), (i = void 0), void 0)));
      let { promise: r } = e.stream([`abort`], T.fromAppParams([n]));
      r.then(
        () => o(),
        () => o(),
      );
    },
  });
}
var ot = class e extends b {
  state;
  static create(t) {
    return new e({ refcount: 1, stream: t, canceled: !1 });
  }
  constructor(e, t) {
    (super(), (this.state = e), t && ++e.refcount);
  }
  call(e, t) {
    return (t.dispose(), new x(Error(`Cannot call methods on a ReadableStream stub`)));
  }
  map(e, t, n) {
    for (let e of t) e.dispose();
    return new x(Error(`Cannot use map() on a ReadableStream`));
  }
  get(e) {
    return new x(Error(`Cannot access properties on a ReadableStream stub`));
  }
  dup() {
    let t = this.state;
    if (!t) throw Error(`Attempted to dup a ReadableStreamStubHook after it was disposed.`);
    return new e(t, this);
  }
  pull() {
    return Promise.reject(Error(`Cannot pull a ReadableStream stub`));
  }
  ignoreUnhandledRejections() {}
  dispose() {
    let e = this.state;
    ((this.state = void 0),
      e &&
        --e.refcount === 0 &&
        (e.canceled ||
          ((e.canceled = !0),
          e.stream.locked ||
            e.stream
              .cancel(Error(`ReadableStream RPC stub was disposed without being consumed`))
              .catch(() => {}))));
  }
  onBroken(e) {}
};
((y.createWritableStreamHook = Xe.create),
  (y.createWritableStreamFromHook = at),
  (y.createReadableStreamHook = ot.create));
var st = C,
  ct = We,
  lt = _,
  ut = Ge,
  z = t.N().min(1).max(256),
  dt = t.M({ userId: z, accountId: z, hostId: z, conversationId: z, challengeId: z }),
  ft = t.M({
    operationId: t.z(),
    fillStatus: t.d([
      `unknown`,
      `submitted`,
      `declined`,
      `cancelled`,
      `unavailable`,
      `expired`,
      `origin_changed`,
      `page_changed`,
      `locator_invalid`,
      `submission_failed`,
    ]),
    saveStatus: t.d([`not_requested`, `saved`, `failed`, `unknown`]),
    statusAvailable: t._(),
    selectionId: t.z().optional(),
  }),
  pt = t.M({ context: dt, operation: ft, finishedAtMs: t.D().nonnegative().optional() }),
  mt = t.M({ entries: t.h(pt) }),
  ht = class extends lt {
    #e;
    constructor(e) {
      (super(), (this.#e = e));
    }
    async read(e) {
      let t = JSON.stringify(dt.parse(e));
      return this.#e((e) => {
        let n = gt(e);
        return {
          value: n,
          result: n.entries.find((e) => JSON.stringify(e.context) === t)?.operation ?? null,
        };
      });
    }
    async claim(e, t) {
      let n = dt.parse(e),
        r = ft.parse(t),
        i = JSON.stringify(n);
      return this.#e((e) => {
        let t = gt(e),
          a = t.entries.find((e) => JSON.stringify(e.context) === i);
        if (a != null) return { value: t, result: { created: !1, operation: a.operation } };
        let o = Date.now() - 864e5;
        return {
          value: {
            entries: [
              ...t.entries.filter((e) => e.finishedAtMs == null || e.finishedAtMs > o),
              { context: n, operation: r },
            ],
          },
          result: { created: !0, operation: r },
        };
      });
    }
    async settle(e, t) {
      let n = JSON.stringify(dt.parse(e)),
        r = ft.parse(t);
      return this.#e((e) => ({
        value: {
          entries: gt(e).entries.map((e) => {
            if (JSON.stringify(e.context) !== n || e.operation.operationId !== r.operationId)
              return e;
            let t = {
              ...e.operation,
              fillStatus: r.fillStatus === `unknown` ? e.operation.fillStatus : r.fillStatus,
              saveStatus: r.saveStatus === `unknown` ? e.operation.saveStatus : r.saveStatus,
            };
            return {
              ...e,
              operation: t,
              finishedAtMs:
                t.fillStatus !== `unknown` && t.saveStatus !== `unknown`
                  ? (e.finishedAtMs ?? Date.now())
                  : void 0,
            };
          }),
        },
        result: void 0,
      }));
    }
  };
function gt(e) {
  return e == null ? { entries: [] } : mt.parse(e);
}
var _t = new Set(
    `_.PATH.HOME.PWD.OLDPWD.SHELL.SHLVL.IFS.ENV.BASH_ENV.BASHOPTS.SHELLOPTS.CDPATH.FUNCNAME.GLOBIGNORE.HISTCMD.NODE_OPTIONS.OPTIND.CODEX_ACCESS_TOKEN.CODEX_HOME.CODEX_PROXY_CERT.CODEX_ENVIRONMENT_ID.CODEX_EXEC_SERVER_REMOTE_BASE_URL.CODEX_PRIMARY_RUNTIME.CODEX_PRIMARY_RUNTIME_BUNDLE_VERSION.CODEX_PRIMARY_RUNTIME_ROOT.CODEX_PRIMARY_RUNTIME_NODE.CODEX_PRIMARY_RUNTIME_NODE_MODULES.CODEX_PRIMARY_RUNTIME_PYTHON.RUST_LOG.HTTP_PROXY.HTTPS_PROXY.ALL_PROXY.NO_PROXY.REQUESTS_CA_BUNDLE.CURL_CA_BUNDLE.NODE_EXTRA_CA_CERTS.UID.EUID.PPID.GROUPS.DIRSTACK.PIPESTATUS.RANDOM.SRANDOM.SECONDS.LINENO.EPOCHREALTIME.EPOCHSECONDS`.split(
      `.`,
    ),
  ),
  vt = [
    `OAI_`,
    `IDENTITY_`,
    `AZURE_`,
    `MSI_`,
    `LD_`,
    `DYLD_`,
    `PYTHON`,
    `SSL_`,
    `GIT_CONFIG`,
    `BASH`,
  ];
function yt(e) {
  if (e.length === 0) return `missing-key`;
  if (e.length > 256 || !/^[A-Za-z_][A-Za-z0-9_]*$/.test(e)) return `invalid-key`;
  let t = e.toUpperCase();
  return _t.has(t) || vt.some((e) => t.startsWith(e)) ? `reserved-key` : null;
}
var bt = t.O({ connection_id: t.N(), alias: t.N() }),
  xt = t
    .N()
    .min(5)
    .max(255)
    .regex(/^oic_[A-Za-z0-9_-]+$/),
  St = t
    .h(t.M({ connection_id: xt, alias: t.N().regex(/^[A-Z][A-Z0-9_]{0,63}$/) }))
    .max(16)
    .refine(
      (e) =>
        new Set(e.map(({ connection_id: e }) => e)).size === e.length &&
        new Set(e.map(({ alias: e }) => e)).size === e.length,
    ),
  Ct = t.O({ accountId: t.N().min(1), userId: t.N().min(1) }),
  wt = new Set([
    `connection_id`,
    `creation_scope_id`,
    `home_workspace_id`,
    `provider_kind`,
    `azure_tenant_id`,
    `azure_client_id`,
    `actor_id`,
    `actor_user_id`,
    `actor_account_user_id`,
    `environment_id`,
    `configuration_key`,
    `actor_email`,
    `workspace_id`,
    `tenant_id`,
  ]),
  Tt = new Set([`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`]),
  Et = `oai:v1:oic:{connection_id}`,
  Dt = t
    .N()
    .min(1)
    .max(512)
    .refine(
      (e) =>
        e === e.trim() && Ht(e) <= 512 && !/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e) && Vt(e) != null,
    ),
  Ot = t
    .M({
      display_name: t.N().trim().min(1).max(200),
      subject_template: Dt.refine((e) => e === Et || e.startsWith(`${Et}:`)),
      additional_claims: t
        .j(
          t
            .N()
            .max(64)
            .regex(/^[A-Za-z][A-Za-z0-9_.-]*$/)
            .refine((e) => !/^oai_/i.test(e) && !Tt.has(e.toLowerCase())),
          Dt,
        )
        .refine((e) => Object.keys(e).length <= 16),
      include_actor_email: t._(),
    })
    .refine(
      ({ include_actor_email: e, subject_template: t, additional_claims: n }) =>
        e || [t, ...Object.values(n)].every((e) => !Vt(e)?.includes(`actor_email`)),
    ),
  kt = t.I([
    Ot.safeExtend({ azure_tenant_id: t.z(), azure_client_id: t.z() }),
    Ot.safeExtend({
      target: t.y(`provider_kind`, [
        t.M({
          provider_kind: t.w(`aws`),
          role_arn: t.N().trim().min(1).max(2048),
          region: t.N().trim().min(1).max(64),
        }),
        t.M({
          provider_kind: t.w(`gcp`),
          workload_identity_provider: t.N().trim().min(1).max(256),
          service_account_email: t.N().trim().min(1).max(254),
        }),
      ]),
    }),
  ]),
  At = t.y(`method`, [
    Ct.extend({ method: t.w(`POST`), body: kt }),
    Ct.extend({ method: t.w(`GET`), connectionId: xt }),
    Ct.extend({
      method: t.w(`PATCH`),
      connectionId: xt,
      body: Ot.safeExtend({ configuration_version: t.D().int().positive() }),
    }),
  ]),
  B = t.N().refine((e) => e.trim().length > 0),
  jt = t.M({ provider_kind: t.w(`azure`), tenant_id: B.max(64), client_id: B.max(64) }),
  Mt = { connection_id: xt, display_name: t.N(), can_edit: t._().nullish() },
  Nt = t
    .O({
      ...Mt,
      provider_kind: t.w(`azure`),
      target: jt.optional(),
      azure_tenant_id: B,
      azure_client_id: B,
    })
    .refine(
      ({ target: e, azure_tenant_id: t, azure_client_id: n }) =>
        e == null || (e.tenant_id === t && e.client_id === n),
    ),
  Pt = t.O({
    ...Mt,
    provider_kind: t.w(`aws`),
    target: t.M({ provider_kind: t.w(`aws`), role_arn: B.max(2048), region: B.max(64) }),
    azure_tenant_id: t.E().optional(),
    azure_client_id: t.E().optional(),
  }),
  Ft = t.O({
    ...Mt,
    provider_kind: t.w(`gcp`),
    target: t.M({
      provider_kind: t.w(`gcp`),
      workload_identity_provider: B.max(256),
      service_account_email: B.max(254),
    }),
    azure_tenant_id: t.E().optional(),
    azure_client_id: t.E().optional(),
  }),
  It = t.y(`provider_kind`, [Nt, Pt, Ft]),
  Lt = {
    issuer: t.R().nullable(),
    audience: t.N().regex(/\S/u).nullable(),
    subject_template: t.N(),
    subject: t.N().min(1).nullable(),
    additional_claims: t.j(t.N(), t.N()),
    include_actor_email: t._(),
    enabled: t._(),
    configuration_version: t.D().int().positive(),
  },
  Rt = t.y(`provider_kind`, [Nt.safeExtend(Lt), Pt.safeExtend(Lt), Ft.safeExtend(Lt)]),
  zt = Ct.extend({ configId: t.N().regex(/^[A-Za-z0-9_~-]+$/) }),
  Bt = t.O({
    capabilities: t.O({ attachment_provider_kinds: t.h(t.N()) }).optional(),
    items: t.h(It).refine((e) => new Set(e.map(({ connection_id: e }) => e)).size === e.length),
    cursor: t.N().nullable(),
  });
function Vt(e) {
  let t = [];
  for (let [n, r] of e.matchAll(/{{|}}|{([a-z_]+):?}|[{}]/g))
    if (n !== `{{` && n !== `}}`) {
      if (r == null || !wt.has(r)) return;
      t.push(r);
    }
  return t;
}
function Ht(e) {
  let t = 0;
  for (let n of e)
    n.length === 2
      ? (t += 4)
      : n.charCodeAt(0) < 128
        ? (t += 1)
        : n.charCodeAt(0) < 2048
          ? (t += 2)
          : (t += 3);
  return t;
}
var Ut = `environment-setup-server-configs-v1`,
  Wt = t.O({
    repository_id: t.N().min(1),
    ref: t.N().min(1),
    depth: t.D().int().min(1).max(2147483647).optional(),
  }),
  Gt = t.y(`type`, [
    t.O({ type: t.w(`disabled`) }),
    t.O({ type: t.w(`unrestricted`) }),
    t.O({
      type: t.w(`restricted`),
      presets: t.h(t.d([`package_managers`])).optional(),
      egress_rules: t.h(t.O({ host: t.N().min(1) })),
    }),
  ]),
  Kt = t.O({ ip_ranges: t.h(t.N().min(1)), domains: t.h(t.N().min(1)) }),
  qt = t.I([
    t.M({ environment_variable: t.N(), allowed_domains: t.h(t.N()).optional() }),
    t.M({ http_header: t.M({ header_name: t.N(), allowed_domains: t.h(t.N()) }) }),
  ]),
  Jt = t.O({
    id: t.N().optional(),
    name: t.N().min(1),
    source: t.d([`environment`, `user_provided`]),
    optional: t._().optional(),
    error: t.O({ code: t.N() }).optional(),
    target: qt,
  }),
  Yt = t.O({
    source: t.y(`type`, [
      t.O({ type: t.w(`vault_secret`), id: t.N().min(1) }),
      t.O({ type: t.w(`user_provided`) }),
    ]),
    optional: t._(),
    delivery: t.O({ type: t.w(`direct_environment_variable`), variable_name: t.N().min(1) }),
    error: t.O({ code: t.N() }).optional(),
  }),
  Xt = Yt.pick({ delivery: !0 }).extend({
    source: t.O({ type: t.w(`environment`) }),
    suggested_value: t.N().nullish(),
  }),
  V = t.O({
    name: t.N().min(1),
    repositories: t.h(Wt),
    install_script: t.N().optional(),
    cwd: t.N().startsWith(`/`).optional(),
    start_skill: t.N().optional(),
    network_policy: Gt,
    share_settings: t.d([`private`, `workspace`]),
  }),
  Zt = V.pick({ name: !0, share_settings: !0 })
    .partial()
    .strict()
    .refine((e) => e.name != null || e.share_settings != null),
  Qt = t
    .O({
      base_version_id: t.N().min(1),
      expected_revision: t.D().int().nonnegative().optional(),
      vpn_connection_id: t.N().optional(),
      repositories: t.h(Wt).optional(),
      install_script: t.N().optional(),
      cwd: t.N().startsWith(`/`).optional(),
      start_skill: t.N().optional(),
      network_policy: Gt.optional(),
      runtime_requirements: t.h(Yt.omit({ error: !0 }).strict()).optional(),
      pending_runtime_requirements: t.h(Xt.strict()).optional(),
      outbound_identity_requirements: St.optional(),
      secrets: t
        .h(
          Jt.omit({ error: !0 })
            .strict()
            .refine((e) => e.source !== `user_provided` || e.id == null),
        )
        .optional(),
    })
    .strict()
    .refine(
      (e) =>
        e.repositories != null ||
        e.install_script != null ||
        e.cwd != null ||
        e.start_skill != null ||
        e.network_policy != null ||
        e.runtime_requirements != null ||
        e.pending_runtime_requirements != null ||
        e.secrets != null ||
        e.outbound_identity_requirements != null ||
        e.vpn_connection_id != null,
    ),
  $t = V.extend({
    id: t.N().min(1),
    is_owner: t._().optional(),
    version_id: t.N().min(1),
    vpn_connection_id: t.N().min(1).nullish(),
    tcp_network_access: Kt.nullish(),
    status: t.N(),
    version_revision: t.D().int().positive().optional(),
    latest_ready_version_id: t.N().nullish(),
    environment_id: t.N().min(1).nullish(),
    thread_id: t.N().min(1).nullish(),
    onboarding_skill: t.N().min(1).nullish(),
    secrets: t.h(Jt).optional(),
    runtime_requirements: t.h(Yt).optional(),
    outbound_identity_requirements: t.h(bt).optional(),
    draft: t
      .O({
        id: t.N().min(1),
        base_version_id: t.N().min(1),
        vpn_connection_id: t.N().min(1).nullish(),
        tcp_network_access: Kt.nullish(),
        revision: t.D().int().nonnegative(),
        repositories: t.h(Wt),
        install_script: t.N().optional(),
        cwd: t.N().startsWith(`/`).optional(),
        start_skill: t.N().optional(),
        network_policy: Gt,
        secrets: t.h(Jt),
        runtime_requirements: t.h(Yt).optional(),
        pending_runtime_requirements: t.h(Xt).optional(),
        outbound_identity_requirements: t.h(bt).optional(),
      })
      .nullish(),
  }),
  en = t
    .O({
      data: t.h(
        t.O({
          id: t.N().min(1),
          name: t.N(),
          is_owner: t._().optional(),
          share_settings: V.shape.share_settings,
          repositories: t.h(t.O({ repository_id: t.N(), ref: t.N() })),
          version_id: t.N().min(1),
          thread_id: t.N().min(1).nullish(),
          version_revision: t.D().int().positive().optional(),
        }),
      ),
      next_cursor: t.N().nullable(),
    })
    .transform((e) => ({
      data: e.data.map((e) => ({
        id: e.id,
        name: e.name,
        isOwner: e.is_owner,
        shareSettings: e.share_settings,
        repositories: e.repositories.map((e) => ({ repositoryId: e.repository_id, ref: e.ref })),
        versionId: e.version_id,
        threadId: e.thread_id,
        versionRevision: e.version_revision,
        status: `ready`,
        latestReadyVersionId: e.version_id,
      })),
      nextCursor: e.next_cursor,
    })),
  tn = t.O({
    id: t.N(),
    name: t.N(),
    isOwner: t._().optional(),
    shareSettings: V.shape.share_settings,
    repositories: t.h(t.O({ repositoryId: t.N(), ref: t.N() })),
    versionId: t.N(),
    threadId: t.N().nullish(),
    versionRevision: t.D().optional(),
    status: t.N(),
    latestReadyVersionId: t.N().nullable(),
  }),
  nn = t.O({ data: t.h(tn), cursor: t.N().optional(), done: t._() }),
  rn = t.O({
    accountId: t.N(),
    userId: t.N(),
    user: t.h(tn).optional(),
    workspace: t.h(tn).optional(),
    refreshedAt: t.D(),
    reconciledAt: t.D(),
    revision: t.D(),
    retryAt: t.D(),
    failures: t.D(),
    scan: t.O({ full: t._(), user: nn, workspace: nn }).optional(),
  }),
  H = t.N().regex(/^[A-Za-z0-9_~-]+$/),
  an = t.O({ accountId: t.N().min(1), userId: t.N().min(1), configId: H, method: t.w(`DELETE`) }),
  on = t.I([
    t.O({
      accountId: t.N().min(1),
      method: t.w(`POST`),
      userId: t.N().min(1).optional(),
      body: t.I([
        t.M({ legacy_environment_id: t.N().min(1), start_onboarding: t.w(!0) }),
        V.extend({ start_onboarding: t._().optional() }),
      ]),
    }),
    t.O({
      accountId: t.N().min(1),
      method: t.w(`POST`),
      configId: H,
      draftId: H.optional(),
      userId: t.N().min(1).optional(),
      body: t.I([
        t.M({ expected_revision: t.D().int().nonnegative() }),
        t.M({ operation_id: t.N().min(1), thread_id: t.N().min(1).optional() }),
      ]),
    }),
    t.O({
      accountId: t.N().min(1),
      method: t.w(`GET`),
      userId: t.N().min(1).optional(),
      configId: H,
      draftId: H.optional(),
    }),
    t
      .O({
        accountId: t.N().min(1),
        method: t.w(`PATCH`),
        userId: t.N().min(1).optional(),
        configId: H,
        draftId: H.optional(),
        body: t.I([Qt, Zt]),
      })
      .refine(
        (e) =>
          e.draftId == null || !(`base_version_id` in e.body) || e.body.expected_revision != null,
      ),
  ]),
  sn = t.O({
    accountId: t.N().min(1),
    userId: t.N().min(1),
    configId: H,
    method: t.w(`POST`),
    body: t.M({ start_thread: t._() }).optional(),
  }),
  cn = t.O({ draft_id: H, environment_id: t.N().min(1), thread_id: t.N().min(1).nullable() }),
  ln = t.O({
    accountId: t.N().min(1),
    userId: t.N().min(1),
    configId: H,
    draftId: H.optional(),
    method: t.w(`POST`),
    body: t.M({
      expected_revision: t.D().int().nonnegative(),
      idempotency_key: t.N().min(1).max(128),
    }),
  }),
  un = t.O({ accountId: t.N().min(1), userId: t.N().min(1), operationId: t.N().min(1) }),
  dn = t.O({
    id: t.N().min(1),
    kind: t.N().min(1),
    environment_id: t.N().min(1),
    state: t.d([`PENDING`, `RUNNING`, `SUCCEEDED`, `FAILED`]),
    failure: t
      .O({
        code: t.N(),
        message: t.N(),
        vpn_failure_stage: t
          .d([`setup`, `daemon_start`, `tailscale_up`])
          .optional()
          .catch(void 0),
        vpn_failure_class: t
          .d([
            `socket_timeout`,
            `tun_permission`,
            `tun_unavailable`,
            `route_permission`,
            `daemon_exited`,
            `daemon_unavailable`,
            `auth_key_file_unavailable`,
            `auth_rejected`,
            `approval_required`,
            `dns_failure`,
            `network_unreachable`,
            `timeout`,
            `unsupported_option`,
            `permission_denied`,
            `backend_error`,
            `unknown`,
          ])
          .optional()
          .catch(void 0),
      })
      .optional(),
  }),
  fn = t.O({
    type: t.d([`env-var`, `network-secret`]),
    name: t
      .N()
      .max(256)
      .regex(/^[A-Za-z_][A-Za-z0-9_]*$/),
  }),
  U = t.y(`type`, [
    t.O({ type: t.w(`all_environment_configs`) }),
    t.O({ type: t.w(`environment_config_ids`), ids: t.h(t.N().min(1)).min(1).max(100) }),
  ]),
  pn = t.y(`method`, [
    t.O({
      accountId: t.N().min(1),
      userId: t.N().min(1),
      method: t.w(`GET`),
      cursor: t.N().optional(),
      namespace: t.d([`sensitive`, `not_sensitive`]).optional(),
    }),
    t.O({
      accountId: t.N().min(1),
      userId: t.N().min(1),
      method: t.w(`POST`),
      body: t.O({
        namespace: t.d([`sensitive`, `not_sensitive`]).optional(),
        secrets: t
          .h(
            t.I([
              t.M({
                env_var: t.N().min(1),
                target: U.optional(),
                name: t.N().min(1),
                value: t.N().min(1),
              }),
              t
                .M({
                  id: t.N().min(1),
                  name: t.N().min(1).optional(),
                  value: t.N().min(1).optional(),
                  env_var: t.N().min(1).optional(),
                  target: U.optional(),
                })
                .refine(
                  (e) =>
                    (e.name != null || e.value != null) && (e.target == null || e.env_var != null),
                ),
            ]),
          )
          .min(1),
      }),
    }),
    t.O({
      accountId: t.N().min(1),
      userId: t.N().min(1),
      method: t.w(`DELETE`),
      body: t.O({
        namespace: t.d([`sensitive`, `not_sensitive`]).optional(),
        ids: t.h(t.N().min(1)).min(1),
      }),
    }),
  ]),
  mn = t.O({ id: t.N().min(1), name: t.N(), env_var: t.N().nullish(), target: U.nullish() }),
  hn = t.O({ secrets: t.h(mn), next_cursor: t.N().nullable() }),
  gn = t.O({
    secrets: t.h(
      t
        .O({
          id: t.N().min(1).optional(),
          name: t.N(),
          env_var: t.N().nullish(),
          target: U.nullish(),
          error: t.O({ code: t.N() }).optional(),
        })
        .refine((e) => e.id != null || e.error != null),
    ),
  }),
  _n = t.M({
    accountId: t.N().min(1),
    userId: t.N().min(1),
    id: t.N().regex(/^assec_[A-Za-z0-9_~-]+$/),
  }),
  vn = t.O({ value: t.N() }),
  yn = t.O({
    accountId: t.N().min(1),
    userId: t.N().min(1),
    namespace: t.d([`sensitive`, `not_sensitive`]),
    names: t
      .h(t.N().refine((e) => yt(e) == null))
      .min(1)
      .max(100),
    target: U,
  }),
  bn = t.O({
    accountId: t.N().min(1),
    userId: t.N().min(1),
    method: t.w(`POST`),
    body: t.M({
      id: t.N().trim().min(1).optional(),
      namespace: t.d([`proxy`, `runtime`]),
      name: t.N().min(1),
      value: t.N().min(1),
    }),
  }),
  xn = t.O({ id: t.N().min(1), name: t.N() }),
  Sn = t.y(`method`, [
    t.O({
      accountId: t.N().min(1),
      userId: t.N().min(1),
      configId: H,
      draftId: t.N().min(1).optional(),
      method: t.w(`GET`),
    }),
    t.O({
      accountId: t.N().min(1),
      userId: t.N().min(1),
      configId: H,
      draftId: t.N().min(1).optional(),
      method: t.w(`POST`),
      body: t.M({
        draft_id: t.N().min(1).optional(),
        provider: t.w(`tailscale`),
        auth_method: t.w(`auth_key`),
        connection_id: t.N().min(1).optional(),
        expected_etag: t.N().min(1).optional(),
        auth_key: t.N().min(1).max(4096).optional(),
        base_version_id: t.N().min(1),
        expected_draft_revision: t.D().int().nonnegative().optional(),
      }),
    }),
  ]),
  Cn = t.O({
    draft_id: t.N().min(1).optional(),
    connection: t
      .O({
        id: t.N().min(1),
        provider: t.d([`tailscale`, `wireguard`, `openvpn`]),
        auth_method: t.d([`auth_key`, `oauth`]),
        etag: t.N().min(1),
        configured: t._(),
      })
      .nullable(),
    capabilities: t.h(
      t.O({
        provider: t.d([`tailscale`, `wireguard`, `openvpn`]),
        auth_methods: t.h(t.d([`auth_key`, `oauth`])),
      }),
    ),
    base_version_id: t.N().min(1),
    draft_revision: t.D().int().nonnegative().nullable(),
  }),
  wn = t.y(`outcome`, [
    t.M({
      outcome: t.w(`completed`),
      output: t
        .N()
        .trim()
        .min(1)
        .describe(
          `A concise, user-facing summary of the completed result. Follow any task-specific output instructions.`,
        ),
      url: t.R().describe(`The URL of the created or affected resource.`),
    }),
    t.M({
      outcome: t.w(`not_completed`),
      output: t
        .N()
        .trim()
        .min(1)
        .describe(
          `A friendly, first-person, user-facing sentence explaining that the goal could not be completed. Omit technical details, tool names, raw constraints, time zones, and error text.`,
        ),
    }),
  ]);
({ ...t.j(t.N(), t.S()).parse(t.U(wn)) });
var Tn = `electron-conversational-onboarding-completions-v1`,
  En = t.h(
    t.O({
      accountId: t.N().min(1),
      userId: t.N().min(1),
      hostId: t.w(`local`),
      conversationId: t.N().min(1),
      selectedTask: t.N().min(1),
      isRevert: t._().optional(),
      completion: wn.nullable(),
    }),
  ),
  Dn = e.t((e, t) => {
    function n(e, t, n) {
      return (
        e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
      );
    }
    t.exports = n;
  }),
  On = e.t((e, t) => {
    var n = Dn(),
      r = i.r();
    function a(e, t, i) {
      return (
        i === void 0 && ((i = t), (t = void 0)),
        i !== void 0 && ((i = r(i)), (i = i === i ? i : 0)),
        t !== void 0 && ((t = r(t)), (t = t === t ? t : 0)),
        n(r(e), t, i)
      );
    }
    t.exports = a;
  }),
  kn = e.a(On()),
  An = [
    `one-third`,
    `two-thirds`,
    `center`,
    `one-third-end`,
    `two-thirds-end`,
    `first-segment-center`,
    `third-segment-center`,
    `first-guide-center`,
    `second-guide-center`,
  ],
  jn = [
    `one-third`,
    `two-thirds`,
    `bottom`,
    `one-third-end`,
    `two-thirds-end`,
    `first-segment-center`,
    `center`,
    `third-segment-center`,
    `first-guide-center`,
    `second-guide-center`,
  ],
  Mn = t.D().min(0).max(1),
  Nn = t.O({ x: t.I([Mn, t.d(An)]), y: t.I([Mn, t.d(jn)]) });
function Pn(e, t) {
  let n = Fn(e, t);
  return {
    x: [
      n.x,
      n.x + n.width,
      e.x + e.width / 2 - t.width / 2,
      n.x - t.width,
      n.x + n.width - t.width,
      Math.max(e.x, (e.x + n.x - t.width) / 2),
      Math.min(e.x + e.width - t.width, (n.x + n.width + e.x + e.width - t.width) / 2),
      n.x - t.width / 2,
      n.x + n.width - t.width / 2,
    ],
    y: [
      e.y + e.height / 4,
      e.y + (e.height * 3) / 4,
      e.y + e.height - 16 - t.height,
      e.y + e.height / 4 - t.height,
      e.y + (e.height * 3) / 4 - t.height,
      Math.max(e.y, e.y + e.height / 8 - t.height / 2),
      e.y + e.height / 2 - t.height / 2,
      Math.min(e.y + e.height - t.height, e.y + (e.height * 7) / 8 - t.height / 2),
      n.y - t.height / 2,
      n.y + n.height - t.height / 2,
    ],
    captureDistance: 12,
    releaseDistance: 20,
  };
}
function Fn(e, t) {
  return {
    x: e.x + (e.width - t.width) / 2,
    y: e.y + e.height / 4,
    width: t.width,
    height: e.height / 2,
  };
}
function In(e, t, n) {
  let r = Bn(e.x, t.x, n.x, t);
  return { x: r === 0 || r === 4 ? 2 : r, y: Bn(e.y, t.y, n.y, t) };
}
function Ln(e, t) {
  return {
    x: e.x,
    y: e.y,
    width: Math.max(0, e.width - t.width),
    height: Math.max(0, e.height - t.height),
  };
}
function Rn(e, t, n) {
  return { x: An[n.x] ?? Vn(e.x, t.x, t.width), y: jn[n.y] ?? Vn(e.y, t.y, t.height) };
}
function zn(e, t, n) {
  return {
    x: (0, kn.default)(
      typeof e.x == `number` ? t.x + e.x * t.width : n.x[An.indexOf(e.x)],
      t.x,
      t.x + t.width,
    ),
    y: (0, kn.default)(
      typeof e.y == `number` ? t.y + e.y * t.height : n.y[jn.indexOf(e.y)],
      t.y,
      t.y + t.height,
    ),
  };
}
function Bn(e, t, n, r) {
  let i = -1,
    a = r.captureDistance;
  for (let [n, r] of t.entries()) {
    let t = Math.abs(e - r);
    t <= a && ((i = n), (a = t));
  }
  let o = Math.abs(e - t[n]),
    s = i !== n && a <= 4 && o > a + 4;
  return n >= 0 && o <= r.releaseDistance && !s ? n : i;
}
function Vn(e, t, n) {
  return n === 0 ? 0.5 : Math.max(0, Math.min(1, (e - t) / n));
}
var Hn = `electron-managed-worktree-archives`,
  Un = {
    id: t.N(),
    owner: t.N(),
    hostId: t.N(),
    phase: t.d([`detaching`, `queued`, `running`, `reattaching`, `failed`, `completed`]),
  },
  Wn = t.h(
    t.I([
      t.O({
        ...Un,
        kind: t.w(`attached`).default(`attached`),
        threadId: t.N(),
        root: t.N().transform(n.Kn),
        cwd: t.N(),
        fromModel: t.w(!0).optional(),
        archivedWithThread: t.w(!0).optional(),
        outcome: t.d([`archived`, `retained`, `unsupported`, `failed`]).optional(),
        notified: t.w(!0).optional(),
        pullRequestIdentityKeys: t.h(t.N()),
      }),
      t.O({ ...Un, kind: t.w(`thread`), threadId: t.N(), cwd: t.N(), notBefore: t.D() }),
      t.O({ ...Un, kind: t.w(`automatic`), revision: t.D() }),
    ]),
  ),
  Gn = `electron-mini-orbit-onboarding-account-ids`,
  Kn = { [Gn]: t.t.array(t.t.string()) },
  qn = `electron-thread-read-state-v1`,
  Jn = `unread-thread-ids-by-host-v1`,
  Yn = t.j(t.N(), t.h(t.N().min(1))),
  Xn = t.O({
    version: t.w(1),
    unreadByIdentity: t.j(t.N(), Yn),
    legacyMigration: t
      .O({
        identityKey: t.N(),
        unreadThreadIdsByHostId: Yn,
        adoptedHostIds: t.j(t.N(), t.N()),
        cleared: t._().optional(),
      })
      .optional(),
  }),
  W = `electron-persisted-atom-state`,
  Zn = `electron-browser-auth-operations`,
  Qn = `electron-initial-follow-up-queue-mode`,
  $n = `electron-custom-runtime-state`,
  er = `electron-custom-runtime-outbox-state`,
  tr = `electron-worktree-cleanup-buffer-start-ms`,
  nr = `electron-avatar-overlay-open`,
  rr = `electron-avatar-overlay-bounds`,
  ir = `electron-remote-hosted-pip-content-max-display-size`,
  ar = `electron-remote-hosted-pip-task-visibility-state`,
  or = `electron-remote-control-client-enrollments`,
  sr = `electron-local-remote-control-environment-id`,
  cr = `electron-local-remote-control-installation-id`,
  lr = `electron-automations-installation-id`,
  ur = `electron-automations-habitat-migration-state`,
  dr = `electron-chrome-extension-sync-managed-plugin-ids`,
  fr = `electron-browser-extension-recently-used`,
  pr = `electron-integrity-state-envelope`,
  mr = `electron-mac-push-deregistration-token`,
  hr = `electron-internal-update-cdn-enabled`,
  gr = `electron-prefer-mxc-enabled`,
  _r = `electron-windows-core-runtime-frameworks-enabled`,
  vr = `electron-windows-primary-runtime-frameworks-enabled`,
  yr = `electron-legacy-chrome-policy-fallback-owner`,
  br = `electron-desktop-otraces-sample-rate`,
  xr = `electron-browser-download-history`,
  Sr = `electron-completed-local-data-migration-ids`,
  Cr = `electron-remote-control-config-migration-completed`,
  wr = `electron-codex-app-config-applied-remote-declarations`,
  Tr = 500,
  Er = `environment-catalog-cache-v1`,
  Dr = [100, 200, 400],
  Or = a.i(`global-state`),
  kr = t.t.object({
    left: t.t.number(),
    top: t.t.number(),
    width: t.t.number().positive(),
    height: t.t.number().positive(),
  }),
  Ar = t.t.object({
    x: t.t.number(),
    y: t.t.number(),
    width: t.t.number().positive(),
    height: t.t.number().positive(),
  }),
  jr = t.t.enum([`top-start`, `top-end`, `bottom-start`, `bottom-end`]),
  Mr = t.t.enum([`shown`, `hidden`]),
  Nr = t.t
    .array(
      t.t.object({
        canCancel: t.t.boolean(),
        canPause: t.t.boolean(),
        canResume: t.t.boolean(),
        conversationId: t.t.string().nullable(),
        exists: t.t.boolean(),
        filename: t.t.string(),
        id: t.t.string(),
        path: t.t.string(),
        receivedBytes: t.t.number(),
        source: t.t.enum([`agent`, `user`]),
        startedAtMs: t.t.number(),
        status: t.t.enum([`started`, `in_progress`, `paused`, `failed`, `canceled`, `complete`]),
        totalBytes: t.t.number(),
        updatedAtMs: t.t.number(),
        url: t.t.string(),
      }),
    )
    .max(200),
  Pr = t.t.union([Nr, t.t.object({ downloads: Nr, version: t.t.literal(1) })]),
  Fr = t.t.object({
    isFreelyPositioned: t.t.boolean().optional(),
    snapPosition: t.t
      .enum([`top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`])
      .nullable()
      .optional(),
    x: t.t.number(),
    y: t.t.number(),
    width: t.t.number().positive().optional(),
    height: t.t.number().positive().optional(),
    anchor: Ar.optional(),
    displayBounds: Ar.optional(),
    displayId: t.t.number().optional(),
    mascot: kr.optional(),
    placement: jr.optional(),
    tray: kr.nullable().optional(),
  }),
  Ir = Lr({
    "hotkey-window-home-placement": Nn,
    [Tn]: En,
    [qn]: Xn,
    [Hn]: Wn,
    "electron-main-window-bounds": t.t.object({
      x: t.t.number(),
      y: t.t.number(),
      width: t.t.number(),
      height: t.t.number(),
      isMaximized: t.t.boolean().optional(),
    }),
    [nr]: t.t.boolean(),
    ...Kn,
    [rr]: Fr.extend({
      byDisplayId: t.t.record(t.t.string(), Fr).optional(),
      byResolution: t.t.record(t.t.string(), Fr).optional(),
    }),
    [ir]: t.t.number().positive(),
    [ar]: t.t.record(t.t.string(), Mr),
    [W]: t.t.record(t.t.string(), t.t.unknown()),
    [Er]: rn,
    [Qn]: t.t.enum([`queue`, `steer`]),
    [$n]: t.t.unknown(),
    [er]: t.t.array(
      t.t.object({
        callId: t.t.string(),
        conversationId: t.t.string().transform(n.es),
        message: t.t.string(),
        sentAtMs: t.t.number(),
        turnId: t.t.string(),
      }),
    ),
    [or]: t.t.record(
      t.t.string(),
      t.t.object({
        accountUserId: t.t.string(),
        algorithm: t.t.literal(`ecdsa_p256_sha256`),
        clientId: t.t.string(),
        keyId: t.t.string(),
        protectionClass: t.t.enum([
          `hardware_secure_enclave`,
          `hardware_tpm`,
          `os_protected_nonextractable`,
        ]),
        publicKeySpkiDerBase64: t.t.string(),
      }),
    ),
    [sr]: t.t.string(),
    [cr]: t.t.string(),
    [lr]: t.t.uuid(),
    [ur]: t.t.record(t.t.string(), t.t.enum([`declined`, `in_progress`, `complete`])),
    [dr]: t.t.array(t.t.string()),
    [fr]: t.t.record(t.t.string(), t.t.array(t.t.string())),
    [pr]: t.t.string(),
    [mr]: t.t.union([
      t.t.string(),
      t.t.strictObject({ token: t.t.string(), isFedramp: t.t.literal(!0) }),
      t.t.object({
        kind: t.t.literal(`workspace`),
        token: t.t.string(),
        isFedramp: t.t.boolean(),
        backendOrigin: t.t.string().refine((e) => {
          let t = URL.parse(e);
          return t?.protocol === `https:` && t.origin === e;
        }),
        accountRoutingOverride: t.t.enum([`NO_CONSTRAINT`, `us`, `us_cr`]),
      }),
    ]),
    [hr]: t.t.boolean(),
    [gr]: t.t.boolean(),
    [_r]: t.t.boolean(),
    [vr]: t.t.boolean(),
    [yr]: t.t.object({ accountId: t.t.string(), userId: t.t.string() }),
    [br]: t.t.number().min(0).max(1),
    [xr]: Pr,
    [Sr]: t.t.array(t.t.string()),
    [Cr]: t.t.boolean(),
    [wr]: t.t.record(t.t.string(), t.t.array(t.t.string())),
    [tr]: t.t.number(),
    [Zn]: mt,
  });
function Lr(e) {
  let t = Object.entries(e).map(([e, t]) => [e, t.optional()]);
  return Object.fromEntries(t);
}
var Rr = class {
    logger = a.i(`global-state`);
    state;
    changeListeners = new Map();
    filePath;
    persistDebounced;
    persistScheduledForAtoms = !1;
    persistScheduledForCustomRuntime = !1;
    persistScheduled = !1;
    persistQueued = Promise.resolve();
    constructor(e) {
      ((this.filePath = e),
        (this.state = Vr(this.filePath)),
        (this.persistDebounced = ee(() => {
          this.persistScheduledForAtoms &&
            ((this.persistScheduledForAtoms = !1), this.queueGlobalStatePersistence());
        }, Tr)));
    }
    getStateFilePath() {
      return this.filePath;
    }
    onDidChange(e, t) {
      let n = this.changeListeners.get(e) ?? new Set();
      return (
        n.add(t),
        this.changeListeners.set(e, n),
        () => {
          (n.delete(t), n.size === 0 && this.changeListeners.delete(e));
        }
      );
    }
    get(e) {
      let t = this.state.get(e);
      return t !== void 0 && t != null ? t : (n.Zo(e) ?? null);
    }
    getStored(e) {
      return this.state.get(e);
    }
    set(e, t) {
      (t === void 0 ? this.state.delete(e) : this.state.set(e, t),
        this.persistForKey(e),
        this.changeListeners.get(e)?.forEach((e) => e()));
    }
    update(e, t) {
      let n = t(this.state.has(e) ? this.state.get(e) : null);
      (n === void 0 ? this.state.delete(e) : this.state.set(e, n),
        this.persistForKey(e),
        this.changeListeners.get(e)?.forEach((e) => e()));
    }
    updateAndPersist(e, t) {
      return (
        (this.persistQueued = this.persistQueued
          .catch(() => void 0)
          .then(() => {
            let n = t(this.getStored(e) ?? null),
              r = new Map(this.state);
            n === void 0 ? r.delete(e) : r.set(e, n);
            let i = Ur(r);
            (qr(this.filePath, i), n === void 0 ? this.state.delete(e) : this.state.set(e, n));
            try {
              qr(`${this.filePath}.bak`, i);
            } catch (t) {
              this.logger().warning(`Failed to back up committed global state`, {
                safe: { key: e },
                sensitive: { error: t },
              });
            }
            this.changeListeners.get(e)?.forEach((t) => {
              try {
                t();
              } catch (t) {
                this.logger().warning(`Failed to notify committed global state`, {
                  safe: { key: e },
                  sensitive: { error: t },
                });
              }
            });
          })),
        this.persistQueued
      );
    }
    delete(e) {
      (this.state.delete(e),
        this.persistForKey(e),
        this.changeListeners.get(e)?.forEach((e) => e()));
    }
    flush() {
      return this.flushWith(Wr);
    }
    flushOrThrow() {
      return this.flushWith(Gr);
    }
    flushWith(e) {
      return (
        (this.persistScheduledForCustomRuntime = !1),
        (this.persistScheduledForAtoms &&= (this.persistDebounced.cancel(), !1)),
        (this.persistQueued = this.persistQueued
          .catch(() => void 0)
          .then(() => e(this.filePath, this.state))),
        this.persistQueued
      );
    }
    persistForKey(e) {
      if (e === `electron-persisted-atom-state`) {
        ((this.persistScheduledForAtoms = !0), this.persistDebounced());
        return;
      }
      if (e === `electron-custom-runtime-state` || e === `electron-custom-runtime-outbox-state`) {
        this.persistScheduledForCustomRuntime ||
          ((this.persistScheduledForCustomRuntime = !0),
          queueMicrotask(() => {
            this.persistScheduledForCustomRuntime &&
              ((this.persistScheduledForCustomRuntime = !1), this.queueGlobalStatePersistence());
          }));
        return;
      }
      this.queueGlobalStatePersistence();
    }
    queueGlobalStatePersistence() {
      this.persistScheduled ||
        ((this.persistScheduled = !0),
        (this.persistQueued = this.persistQueued
          .catch(() => void 0)
          .then(() => ((this.persistScheduled = !1), Wr(this.filePath, this.state)))));
    }
  },
  zr = new Set(Object.keys(Ir));
function Br(e) {
  return zr.has(e);
}
function Vr(e) {
  if (!(0, c.existsSync)(e)) return new Map();
  let t = Hr(e);
  if (t != null) return t;
  let n = Hr(`${e}.bak`);
  return n == null
    ? new Map()
    : (Or().warning(`Loaded global state from backup`, { safe: {}, sensitive: {} }), n);
}
function Hr(e) {
  if (!(0, c.existsSync)(e)) return null;
  try {
    let t = (0, c.readFileSync)(e, `utf8`),
      n = JSON.parse(t);
    if (!n || typeof n != `object`) throw Error(`Expected global state to be a JSON object`);
    let r = [];
    for (let [e, t] of Object.entries(n)) {
      if (Br(e) && Ir[e]?.safeParse(t).success === !1) {
        Or().warning(`Dropping invalid global state for key`, { safe: { key: e }, sensitive: {} });
        continue;
      }
      r.push([e, t]);
    }
    return new Map(r);
  } catch (e) {
    return (
      Or().warning(`Failed to load global state`, { safe: {}, sensitive: { error: e } }), null
    );
  }
}
function Ur(e) {
  let t = {};
  for (let [n, r] of e.entries()) r !== void 0 && (t[n] = r);
  return JSON.stringify(t);
}
async function Wr(e, t) {
  try {
    await Gr(e, t);
  } catch (e) {
    Or().warning(`Failed to persist global state`, { safe: {}, sensitive: { error: e } });
  }
}
async function Gr(e, t) {
  let n = Ur(t);
  (await Jr(e, n), await Jr(`${e}.bak`, n));
}
function Kr(e) {
  return (0, u.join)(
    (0, u.dirname)(e),
    `.${(0, u.basename)(e)}.tmp-${Date.now()}-${(0, d.randomUUID)()}`,
  );
}
function qr(e, t) {
  let n = Kr(e);
  try {
    ((0, c.writeFileSync)(n, t, `utf8`), (0, c.renameSync)(n, e));
  } catch (e) {
    throw ((0, c.rmSync)(n, { force: !0 }), e);
  }
}
async function Jr(e, t) {
  let n = Kr(e);
  try {
    await (0, l.writeFile)(n, t, `utf8`);
    for (let t = 0; ; t += 1)
      try {
        await (0, l.rename)(n, e);
        return;
      } catch (e) {
        let n = Dr[t];
        if (
          process.platform !== `win32` ||
          n == null ||
          !(e instanceof Error) ||
          !(`code` in e) ||
          (e.code !== `EPERM` && e.code !== `EACCES` && e.code !== `EBUSY`)
        )
          throw e;
        await (0, f.setTimeout)(n);
      }
  } catch (e) {
    throw (await (0, l.rm)(n, { force: !0 }), e);
  }
}
var Yr = `local`,
  Xr = { id: Yr, display_name: `Local`, kind: `local` },
  Zr = t.j(t.N(), t.N()),
  G = null,
  Qr = 0;
async function $r(e, t) {
  let n = ++Qr,
    r = t;
  try {
    if (((r ??= s.app.getLocale()), G?.repoRoot === e && G.locale === r)) return;
    let t = await ei.load(e, r);
    if (n !== Qr) return;
    let i = G?.nativeIntl;
    (i?.replaceMessagesFrom(t), (G = { repoRoot: e, locale: r, nativeIntl: i ?? t }));
  } catch {
    if (n !== Qr) return;
    let e = ei.createDefault(),
      t = G?.nativeIntl;
    (t?.replaceMessagesFrom(e), (G = { repoRoot: null, locale: r ?? `en`, nativeIntl: t ?? e }));
  }
}
function K() {
  if (G == null) throw Error(`NativeIntl has not been configured.`);
  return G.nativeIntl;
}
var ei = class e {
    messages;
    constructor(e) {
      this.messages = e;
    }
    static async load(t, n = s.app.getLocale()) {
      let r = n.trim().replace(/_/g, `-`),
        [i, a] = r.toLowerCase().split(`-`),
        o = a == null ? i : `${i}-${a.toUpperCase()}`,
        c = i ? new Intl.Locale(i).maximize().region : void 0,
        d = s.app.isPackaged
          ? (0, u.join)(s.app.getAppPath(), `native-menu-locales`)
          : (0, u.join)(t, `webview`, `src`, `locales`),
        f = Array.from(new Set([r, o, te[i], c == null ? void 0 : `${i}-${c}`, i]))
          .filter((e) => e != null)
          .map((e) => (0, u.join)(d, `${e}.json`)),
        ee = await Promise.all(
          f.map(async (e) => {
            try {
              return Zr.parse(JSON.parse(await (0, l.readFile)(e, `utf-8`)));
            } catch (e) {
              if (e instanceof Error && `code` in e && e.code === `ENOENT`) return null;
              throw e;
            }
          }),
        );
      return new e(ee.find((e) => e != null) ?? null);
    }
    static createDefault() {
      return new e(null);
    }
    replaceMessagesFrom(e) {
      this.messages = e.messages;
    }
    formatMessage({ messageId: e, defaultMessage: t, values: n }) {
      return (this.messages?.[e] ?? t).replace(/\{(\w+)\}/g, (e, t) => n?.[t] ?? e);
    }
  },
  ti = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i,
  ni = class e extends Date {
    #e = !1;
    #t = !1;
    #n = null;
    constructor(e) {
      let t = !0,
        n = !0,
        r = `Z`;
      if (typeof e == `string`) {
        let i = e.match(ti);
        i
          ? (i[1] || ((t = !1), (e = `0000-01-01T${e}`)),
            (n = !!i[2]),
            n && e[10] === ` ` && (e = e.replace(` `, `T`)),
            i[2] && +i[2] > 23
              ? (e = ``)
              : ((r = i[3] || null), (e = e.toUpperCase()), !r && n && (e += `Z`)))
          : (e = ``);
      }
      (super(e), isNaN(this.getTime()) || ((this.#e = t), (this.#t = n), (this.#n = r)));
    }
    isDateTime() {
      return this.#e && this.#t;
    }
    isLocal() {
      return !this.#e || !this.#t || !this.#n;
    }
    isDate() {
      return this.#e && !this.#t;
    }
    isTime() {
      return this.#t && !this.#e;
    }
    isValid() {
      return this.#e || this.#t;
    }
    toISOString() {
      let e = super.toISOString();
      if (this.isDate()) return e.slice(0, 10);
      if (this.isTime()) return e.slice(11, 23);
      if (this.#n === null) return e.slice(0, -1);
      if (this.#n === `Z`) return e;
      let t = this.#n.slice(1, 3) * 60 + +this.#n.slice(4, 6);
      return (
        (t = this.#n[0] === `-` ? t : -t),
        new Date(this.getTime() - t * 6e4).toISOString().slice(0, -1) + this.#n
      );
    }
    static wrapAsOffsetDateTime(t, n = `Z`) {
      let r = new e(t);
      return ((r.#n = n), r);
    }
    static wrapAsLocalDateTime(t) {
      let n = new e(t);
      return ((n.#n = null), n);
    }
    static wrapAsLocalDate(t) {
      let n = new e(t);
      return ((n.#t = !1), (n.#n = null), n);
    }
    static wrapAsLocalTime(t) {
      let n = new e(t);
      return ((n.#e = !1), (n.#n = null), n);
    }
  };
function ri(e, t) {
  let n = e.slice(0, t).split(/\r\n|\n|\r/g);
  return [n.length, n.pop().length + 1];
}
function ii(e, t, n) {
  let r = e.split(/\r\n|\n|\r/g),
    i = ``,
    a = (Math.log10(t + 1) | 0) + 1;
  for (let e = t - 1; e <= t + 1; e++) {
    let o = r[e - 1];
    o &&
      ((i += e.toString().padEnd(a, ` `)),
      (i += `:  `),
      (i += o),
      (i += `
`),
      e === t &&
        ((i += ` `.repeat(a + n + 2)),
        (i += `^
`)));
  }
  return i;
}
var q = class extends Error {
    line;
    column;
    codeblock;
    constructor(e, t) {
      let [n, r] = ri(t.toml, t.ptr),
        i = ii(t.toml, n, r);
      (super(`Invalid TOML document: ${e}\n\n${i}`, t),
        (this.line = n),
        (this.column = r),
        (this.codeblock = i));
    }
  },
  ai = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
  oi = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
  si = /^[+-]?0[0-9_]/;
function ci(e, t) {
  let n = e[t++],
    r = n,
    i = n === `'`,
    a = n === e[t] && n === e[t + 1];
  a &&
    (e[(t += 2)] ===
    `
`
      ? t++
      : e[t] === `\r` &&
        e[t + 1] ===
          `
` &&
        (t += 2));
  let o = ``,
    s = t,
    c = 0;
  for (let l = t; l < e.length; l++)
    if (
      ((n = e[l]),
      a &&
        (n ===
          `
` ||
          (n === `\r` &&
            e[l + 1] ===
              `
`)))
    )
      c &&= 3;
    else if ((n < ` ` && n !== `	`) || n === ``)
      throw new q(`control characters are not allowed in strings`, { toml: e, ptr: l });
    else if ((!c || c === 3) && n === r && (!a || (e[l + 1] === r && e[l + 2] === r)))
      return (
        a && (e[l + 3] === r && l++, e[l + 3] === r && l++),
        [c ? o : o + e.slice(s, l), l + (a ? 3 : 1)]
      );
    else if (!c) !i && n === `\\` && ((o += e.slice(s, (s = l))), (c = 1));
    else if (c === 1) {
      if (n === `x` || n === `u` || n === `U`) {
        let t = 0,
          r = n === `x` ? 2 : n === `u` ? 4 : 8;
        for (let n = 0; n < r; n++, l++) {
          let n = e.charCodeAt(l + 1),
            r =
              n >= 48 && n <= 57
                ? n - 48
                : n >= 65 && n <= 70
                  ? n - 65 + 10
                  : n >= 97 && n <= 102
                    ? n - 97 + 10
                    : -1;
          if (r < 0)
            throw new q(`invalid non-hex character in unicode escape`, { toml: e, ptr: l + 1 });
          t = (t << 4) | r;
        }
        if (t < 0 || t > 1114111 || (t >= 55296 && t <= 57343))
          throw new q(`invalid unicode escape`, { toml: e, ptr: l });
        ((o += String.fromCodePoint(t)), (s = l + 1), (c = 0));
      } else if (n === ` ` || n === `	`) c = 2;
      else {
        if (n === `b`) o += `\b`;
        else if (n === `t`) o += `	`;
        else if (n === `n`)
          o += `
`;
        else if (n === `f`) o += `\f`;
        else if (n === `r`) o += `\r`;
        else if (n === `e`) o += `\x1B`;
        else if (n === `"`) o += `"`;
        else if (n === `\\`) o += `\\`;
        else throw new q(`unrecognized escape sequence`, { toml: e, ptr: l });
        ((s = l + 1), (c = 0));
      }
    } else if (n !== ` ` && n !== `	`) {
      if (c === 2)
        throw new q(`invalid escape: only line-ending whitespace may be escaped`, {
          toml: e,
          ptr: s,
        });
      ((c = +(!i && n === `\\`)), (s = l));
    }
  throw new q(`unfinished string`, { toml: e, ptr: t });
}
function li(e, t, n, r) {
  if (e === `true`) return !0;
  if (e === `false`) return !1;
  if (e === `-inf`) return -1 / 0;
  if (e === `inf` || e === `+inf`) return 1 / 0;
  if (e === `nan` || e === `+nan` || e === `-nan`) return NaN;
  if (e === `-0`) return r ? 0n : 0;
  let i = ai.test(e);
  if (i || oi.test(e)) {
    if (si.test(e)) throw new q(`leading zeroes are not allowed`, { toml: t, ptr: n });
    e = e.replace(/_/g, ``);
    let a = +e;
    if (isNaN(a)) throw new q(`invalid number`, { toml: t, ptr: n });
    if (i) {
      if ((i = !Number.isSafeInteger(a)) && !r)
        throw new q(`integer value cannot be represented losslessly`, { toml: t, ptr: n });
      (i || r === !0) && (a = BigInt(e));
    }
    return a;
  }
  let a = new ni(e);
  if (!a.isValid()) throw new q(`invalid value`, { toml: t, ptr: n });
  return a;
}
function ui(e, t = 0, n = e.length) {
  let r = e.indexOf(
    `
`,
    t,
  );
  return (e[r - 1] === `\r` && r--, r <= n ? r : -1);
}
function di(e, t) {
  for (let n = t; n < e.length; n++) {
    let r = e[n];
    if (
      r ===
      `
`
    )
      return n;
    if (
      r === `\r` &&
      e[n + 1] ===
        `
`
    )
      return n + 1;
    if ((r < ` ` && r !== `	`) || r === ``)
      throw new q(`control characters are not allowed in comments`, { toml: e, ptr: t });
  }
  return e.length;
}
function J(e, t, n, r) {
  let i;
  for (;;) {
    for (
      ;
      (i = e[t]) === ` ` ||
      i === `	` ||
      (!n &&
        (i ===
          `
` ||
          (i === `\r` &&
            e[t + 1] ===
              `
`)));
    )
      t++;
    if (r || i !== `#`) break;
    t = di(e, t);
  }
  return t;
}
function fi(e, t, n, r, i = !1) {
  if (!r) return ((t = ui(e, t)), t < 0 ? e.length : t);
  for (let a = t; a < e.length; a++) {
    let t = e[a];
    if (t === `#`) a = ui(e, a);
    else if (t === n) return a + 1;
    else if (
      t === r ||
      (i &&
        (t ===
          `
` ||
          (t === `\r` &&
            e[a + 1] ===
              `
`)))
    )
      return a;
  }
  throw new q(`cannot find end of structure`, { toml: e, ptr: t });
}
function pi(e, t, n) {
  let r = e.slice(t, n),
    i = r.indexOf(`#`);
  return (i > -1 && (di(e, i), (r = r.slice(0, i))), [r.trimEnd(), i]);
}
function mi(e, t, n, r, i) {
  if (r === 0)
    throw new q(`document contains excessively nested structures. aborting.`, { toml: e, ptr: t });
  let a = e[t];
  if (a === `[` || a === `{`) {
    let [o, s] = a === `[` ? vi(e, t, r, i) : _i(e, t, r, i);
    if (n) {
      if (((s = J(e, s)), e[s] === `,`)) s++;
      else if (e[s] !== n) throw new q(`expected comma or end of structure`, { toml: e, ptr: s });
    }
    return [o, s];
  }
  if (a === `"` || a === `'`) {
    let [r, i] = ci(e, t);
    if (n) {
      if (
        ((i = J(e, i)),
        e[i] &&
          e[i] !== `,` &&
          e[i] !== n &&
          e[i] !==
            `
` &&
          e[i] !== `\r`)
      )
        throw new q(`unexpected character encountered`, { toml: e, ptr: i });
      e[i] === `,` && i++;
    }
    return [r, i];
  }
  let o = fi(e, t, `,`, n),
    s = pi(e, t, o - +(e[o - 1] === `,`));
  if (!s[0])
    throw new q(`incomplete key-value declaration: no value specified`, { toml: e, ptr: t });
  return (n && s[1] > -1 && ((o = J(e, t + s[1])), e[o] === `,` && o++), [li(s[0], e, t, i), o]);
}
var hi = /^[a-zA-Z0-9-_]+[ \t]*$/;
function gi(e, t, n = `=`) {
  let r = t - 1,
    i = [],
    a = e.indexOf(n, t);
  if (a < 0) throw new q(`incomplete key-value: cannot find end of key`, { toml: e, ptr: t });
  do {
    let o = e[(t = ++r)];
    if (o !== ` ` && o !== `	`) {
      if (o === `"` || o === `'`) {
        if (o === e[t + 1] && o === e[t + 2])
          throw new q(`multiline strings are not allowed in keys`, { toml: e, ptr: t });
        let [s, c] = ci(e, t);
        r = e.indexOf(`.`, c);
        let l = e.slice(c, r < 0 || r > a ? a : r),
          u = ui(l);
        if (u > -1) throw new q(`newlines are not allowed in keys`, { toml: e, ptr: t + r + u });
        if (l.trimStart())
          throw new q(`found extra tokens after the string part`, { toml: e, ptr: c });
        if (a < c && ((a = e.indexOf(n, c)), a < 0))
          throw new q(`incomplete key-value: cannot find end of key`, { toml: e, ptr: t });
        i.push(s);
      } else {
        r = e.indexOf(`.`, t);
        let n = e.slice(t, r < 0 || r > a ? a : r);
        if (!hi.test(n))
          throw new q(`only letter, numbers, dashes and underscores are allowed in keys`, {
            toml: e,
            ptr: t,
          });
        i.push(n.trimEnd());
      }
    }
  } while (r + 1 && r < a);
  return [i, J(e, a + 1, !0, !0)];
}
function _i(e, t, n, r) {
  let i = {},
    a = new Set(),
    o;
  for (t++; (o = e[t++]) !== `}` && o;)
    if (o === `,`) throw new q(`expected value, found comma`, { toml: e, ptr: t - 1 });
    else if (o === `#`) t = di(e, t);
    else if (
      o !== ` ` &&
      o !== `	` &&
      o !==
        `
` &&
      o !== `\r`
    ) {
      let o,
        s = i,
        c = !1,
        [l, u] = gi(e, t - 1);
      for (let n = 0; n < l.length; n++) {
        if (
          (n && (s = c ? s[o] : (s[o] = {})),
          (o = l[n]),
          (c = Object.hasOwn(s, o)) && (typeof s[o] != `object` || a.has(s[o])))
        )
          throw new q(`trying to redefine an already defined value`, { toml: e, ptr: t });
        !c &&
          o === `__proto__` &&
          Object.defineProperty(s, o, { enumerable: !0, configurable: !0, writable: !0 });
      }
      if (c) throw new q(`trying to redefine an already defined value`, { toml: e, ptr: t });
      let [d, f] = mi(e, u, `}`, n - 1, r);
      (a.add(d), (s[o] = d), (t = f));
    }
  if (!o) throw new q(`unfinished table encountered`, { toml: e, ptr: t });
  return [i, t];
}
function vi(e, t, n, r) {
  let i = [],
    a;
  for (t++; (a = e[t++]) !== `]` && a;)
    if (a === `,`) throw new q(`expected value, found comma`, { toml: e, ptr: t - 1 });
    else if (a === `#`) t = di(e, t);
    else if (
      a !== ` ` &&
      a !== `	` &&
      a !==
        `
` &&
      a !== `\r`
    ) {
      let a = mi(e, t - 1, `]`, n - 1, r);
      (i.push(a[0]), (t = a[1]));
    }
  if (!a) throw new q(`unfinished array encountered`, { toml: e, ptr: t });
  return [i, t];
}
function yi(e, t, n, r) {
  let i = t,
    a = n,
    o,
    s = !1,
    c;
  for (let t = 0; t < e.length; t++) {
    if (t) {
      if (((i = s ? i[o] : (i[o] = {})), (a = (c = a[o]).c), r === 0 && (c.t === 1 || c.t === 2)))
        return null;
      if (c.t === 2) {
        let e = i.length - 1;
        ((i = i[e]), (a = a[e].c));
      }
    }
    if (((o = e[t]), (s = Object.hasOwn(i, o)) && a[o]?.t === 0 && a[o]?.d)) return null;
    s ||
      (o === `__proto__` &&
        (Object.defineProperty(i, o, { enumerable: !0, configurable: !0, writable: !0 }),
        Object.defineProperty(a, o, { enumerable: !0, configurable: !0, writable: !0 })),
      (a[o] = { t: t < e.length - 1 && r === 2 ? 3 : r, d: !1, i: 0, c: {} }));
  }
  if (
    ((c = a[o]),
    (c.t !== r && (r !== 1 || c.t !== 3)) ||
      (r === 2 &&
        (c.d || ((c.d = !0), (i[o] = [])),
        i[o].push((i = {})),
        (c.c[c.i++] = c = { t: 1, d: !1, i: 0, c: {} })),
      c.d))
  )
    return null;
  if (((c.d = !0), r === 1)) i = s ? i[o] : (i[o] = {});
  else if (r === 0 && s) return null;
  return [o, i, c.c];
}
function bi(e, { maxDepth: t = 1e3, integersAsBigInt: n } = {}) {
  let r = {},
    i = {},
    a = r,
    o = i;
  for (let s = J(e, 0); s < e.length;) {
    if (e[s] === `[`) {
      let t = e[++s] === `[`,
        n = gi(e, (s += +t), `]`);
      if (t) {
        if (e[n[1] - 1] !== `]`)
          throw new q(`expected end of table declaration`, { toml: e, ptr: n[1] - 1 });
        n[1]++;
      }
      let c = yi(n[0], r, i, t ? 2 : 1);
      if (!c)
        throw new q(`trying to redefine an already defined table or value`, { toml: e, ptr: s });
      ((o = c[2]), (a = c[1]), (s = n[1]));
    } else {
      let r = gi(e, s),
        i = yi(r[0], a, o, 0);
      if (!i)
        throw new q(`trying to redefine an already defined table or value`, { toml: e, ptr: s });
      let c = mi(e, r[1], void 0, t, n);
      ((i[1][i[0]] = c[0]), (s = c[1]));
    }
    if (
      ((s = J(e, s, !0)),
      e[s] &&
        e[s] !==
          `
` &&
        e[s] !== `\r`)
    )
      throw new q(`each key-value declaration must be followed by an end-of-line`, {
        toml: e,
        ptr: s,
      });
    s = J(e, s);
  }
  return r;
}
var Y = a.i(`settings-store`),
  xi = `enter-behavior`,
  Si = `electron:onboarding-projectless-completed`,
  Ci = t.t.lazy(() =>
    t.t.union([
      t.t.string(),
      t.t.number(),
      t.t.boolean(),
      t.t.null(),
      t.t.array(Ci),
      t.t.record(t.t.string(), Ci),
    ]),
  ),
  wi = t.t.object({ desktop: t.t.record(t.t.string(), t.t.unknown()).optional() }).loose(),
  Ti = class {
    filePath;
    globalState;
    state;
    changeListeners = new Map();
    pendingLegacyMigrations = new Map();
    pendingWrites = new Map();
    desktopConfig;
    configClient = null;
    persistQueued = Promise.resolve();
    constructor(e, t) {
      ((this.filePath = e),
        (this.globalState = t),
        (this.desktopConfig = Di(this.filePath)),
        (this.state = ki(this.desktopConfig)),
        Ei(this.state, this.pendingLegacyMigrations, this.globalState));
    }
    getStateFilePath() {
      return this.filePath;
    }
    getDesktopConfig() {
      return this.desktopConfig;
    }
    async captureInitialFollowUpQueueMode() {
      let e = this.globalState.getStored(Qn);
      if (e != null) return e;
      let t = this.globalState.getStored(W)?.[Si] === !0,
        r = Object.keys(this.globalState.getStored(n.Xo.LOCAL_PROJECTS) ?? {}).length > 0,
        i = t || r ? `queue` : `steer`;
      return (this.globalState.set(Qn, i), await this.globalState.flush(), i);
    }
    async initialize(e) {
      let t = await this.captureInitialFollowUpQueueMode(),
        r = new Map([...this.changeListeners.keys()].map((e) => [e, this.get(e)]));
      ((this.configClient = e), (this.desktopConfig = e.config.desktop ?? {}));
      let i = ki(this.desktopConfig),
        a = new Set();
      for (let e of n.L)
        if (!this.pendingWrites.has(e.key)) {
          if (i.has(e.key)) {
            (this.state.set(e.key, i.get(e.key)),
              this.pendingLegacyMigrations.delete(e.key) && a.add(e.key));
            continue;
          }
          this.pendingLegacyMigrations.has(e.key) || this.state.delete(e.key);
        }
      this.initializeFollowUpQueueMode(t);
      for (let [e, t] of r) Object.is(t, this.get(e)) || this.notifyChangeListeners(e);
      (ji(a, this.globalState), await this.persistPendingSettings());
    }
    onDidChange(e, t) {
      let n = this.changeListeners.get(e) ?? new Set();
      return (
        n.add(t),
        this.changeListeners.set(e, n),
        () => {
          (n.delete(t), n.size === 0 && this.changeListeners.delete(e));
        }
      );
    }
    get(e) {
      return this.state.get(e);
    }
    getEffective(e) {
      return this.get(e) ?? n.P(e).default;
    }
    set(e, t) {
      let r = this.get(e),
        i = n.F(e).parse(t);
      (this.state.set(e, i),
        (this.desktopConfig[e] = ie(n.F(e), i)),
        this.pendingWrites.set(e, i),
        Object.is(r, i) || this.notifyChangeListeners(e),
        this.persistPendingSettings());
    }
    flush() {
      return this.persistQueued.then(() => this.persistPendingSettings());
    }
    notifyChangeListeners(e) {
      for (let t of this.changeListeners.get(e) ?? []) t();
    }
    initializeFollowUpQueueMode(e) {
      let t = n.W.followUpQueueMode.key;
      this.state.has(t) ||
        (this.state.set(t, e),
        (this.desktopConfig[t] = ie(n.F(t), e)),
        this.pendingWrites.set(t, e));
    }
    persistPendingSettings() {
      let e = this.configClient;
      return (
        e == null ||
          (this.persistQueued = this.persistQueued
            .catch(() => void 0)
            .then(async () => {
              let t = new Map(this.pendingLegacyMigrations),
                r = new Map(this.pendingWrites),
                i = new Map(t);
              for (let [e, t] of r) i.set(e, t);
              if (i.size !== 0)
                try {
                  await e.batchWriteConfigValues({
                    edits: [...i.entries()].map(([e, t]) => {
                      let r = ie(n.F(e), t);
                      return { keyPath: `desktop.${e}`, mergeStrategy: `replace`, value: r };
                    }),
                  });
                  for (let [e, n] of t)
                    this.pendingLegacyMigrations.get(e) === n &&
                      this.pendingLegacyMigrations.delete(e);
                  for (let [e, t] of r)
                    this.pendingWrites.get(e) === t && this.pendingWrites.delete(e);
                  ji(new Set(t.keys()), this.globalState);
                } catch (e) {
                  Y().warning(`Failed to persist desktop settings`, {
                    safe: {},
                    sensitive: { error: e },
                  });
                }
            })),
        this.persistQueued
      );
    }
  };
function Ei(e, t, r) {
  let i = r.getStored(W);
  for (let a of n.L) {
    if (e.has(a.key)) continue;
    let o = Ai(a, r, i);
    if (o === void 0) continue;
    let s = n.F(a.key).safeParse(o);
    if (!s.success) {
      Y().warning(`Dropping invalid migrated setting`, { safe: { key: a.key }, sensitive: {} });
      continue;
    }
    (e.set(a.key, s.data), t.set(a.key, s.data));
  }
}
function Di(e) {
  if (!(0, c.existsSync)(e)) return {};
  try {
    return Oi(wi.parse(bi((0, c.readFileSync)(e, `utf8`))).desktop ?? {});
  } catch (e) {
    return (
      Y().warning(`Failed to load desktop settings from config.toml`, {
        safe: {},
        sensitive: { error: e },
      }),
      {}
    );
  }
}
function Oi(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    let e = Ci.safeParse(r);
    if (!e.success) {
      Y().warning(`Dropping unsupported desktop config value`, { safe: { key: n }, sensitive: {} });
      continue;
    }
    t[n] = e.data;
  }
  return t;
}
function ki(e) {
  let t = new Map();
  for (let [r, i] of Object.entries(e)) {
    let e = n.P(r);
    if (e == null) continue;
    let a = n.F(e.key).safeParse(ae(n.F(e.key), i));
    if (!a.success) {
      Y().warning(`Dropping invalid desktop setting`, { safe: { key: r }, sensitive: {} });
      continue;
    }
    t.set(e.key, a.data);
  }
  return t;
}
function Ai(e, t, r) {
  let { hostStorage: i } = e;
  switch (i.kind) {
    case `configuration`: {
      let a = t.getStored(i.key);
      return a === void 0
        ? e.key === n.W.composerEnterBehavior.key &&
          r != null &&
          Object.prototype.hasOwnProperty.call(r, xi)
          ? r[xi]
          : e.key === n.W.keepRemoteControlAwakeWhilePluggedIn.key
            ? t.getStored(n.W.preventSleepWhileRunning.key)
            : void 0
        : a;
    }
    case `global-state`:
      return t.getStored(i.key);
    case `persisted-atom`:
      return r == null || !Object.prototype.hasOwnProperty.call(r, i.key)
        ? void 0
        : e.key === n.V.defaultServiceTier.key
          ? n.et(r)
          : r[i.key];
  }
}
function ji(e, t) {
  if (e.size === 0) return;
  let r = t.getStored(W),
    i = r ? { ...r } : null,
    a = !1;
  for (let r of e) {
    let e = n.P(r);
    switch (
      (r === n.W.composerEnterBehavior.key &&
        i != null &&
        Object.prototype.hasOwnProperty.call(i, xi) &&
        (delete i[xi], (a = !0)),
      e.hostStorage.kind)
    ) {
      case `configuration`:
      case `global-state`:
        t.delete(e.hostStorage.key);
        break;
      case `persisted-atom`:
        i != null &&
          Object.prototype.hasOwnProperty.call(i, e.hostStorage.key) &&
          (delete i[e.hostStorage.key], (a = !0));
    }
  }
  a && t.set(W, Object.keys(i ?? {}).length === 0 ? void 0 : (i ?? void 0));
}
var Mi = new Set(
    [
      `Your access token could not be refreshed because your refresh token has expired. Please log out and sign in again.`,
      `Your access token could not be refreshed because your refresh token was already used. Please log out and sign in again.`,
      `Your access token could not be refreshed because your refresh token was revoked. Please log out and sign in again.`,
      `Your access token could not be refreshed. Please log out and sign in again.`,
    ].map((e) => `failed to read configuration layers: ${e}`),
  ),
  Ni = t.O({ message: t.N() });
function Pi(e) {
  let t = Ni.safeParse(e);
  return (
    n.kr(e) ||
    (e instanceof r.t && e.reason === `auth`) ||
    (t.success && Mi.has(t.data.message)) ||
    (e instanceof Error && e.cause != null && Pi(e.cause))
  );
}
var Fi = new Set([
    `INIT_CWD`,
    `npm_command`,
    `npm_execpath`,
    `npm_node_execpath`,
    `PNPM_PACKAGE_NAME`,
    `PNPM_SCRIPT_SRC_DIR`,
  ]),
  Ii = [`npm_config_`, `npm_lifecycle_`, `npm_package_`];
function Li(e) {
  for (let t of Object.keys(e)) {
    let n = t.toLowerCase();
    (Fi.has(t) || Ii.some((e) => n.startsWith(e))) && delete e[t];
  }
}
var Ri = 5e3,
  zi = process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() ? process.env.CODEX_HOME : void 0,
  X = null,
  Z = null,
  Q = null;
async function Bi() {
  return Vi({ caller: `startup`, retryFailed: !1 });
}
async function Vi({ caller: e = `startup`, retryFailed: t = !0, timeoutMs: n = Ri } = {}) {
  if (Q?.status === `loaded` || (Q != null && !t)) return Gi(Q, e);
  if (X != null && Z != null && Z >= n) return X.then((t) => ({ ...t, caller: e }));
  let r = Hi(e, n);
  ((X = r), (Z = n));
  try {
    let e = await r;
    return (Ki(e), e);
  } finally {
    X === r && ((X = null), (Z = null));
  }
}
async function Hi(e, t) {
  let i = Date.now();
  s.app.isPackaged || Li(process.env);
  let o = new AbortController(),
    c = null,
    l = await Promise.race([
      r
        .Pt({ interactive: !0, extraEnv: { [n.k]: `1` }, signal: o.signal })
        .then((e) => ({ status: `loaded`, userEnv: e }))
        .catch((e) => ({ status: `failed`, error: e })),
      new Promise((e) => {
        ((c = setTimeout(() => {
          (o.abort(), e({ status: `timed_out` }));
        }, t)),
          c.unref());
      }),
    ]).finally(() => {
      c != null && clearTimeout(c);
    });
  if (l.status === `loaded`)
    return (
      Object.assign(process.env, l.userEnv),
      zi != null && (process.env.CODEX_HOME = zi),
      s.app.isPackaged || Li(process.env),
      { status: `loaded`, path: process.env.PATH ?? null, ...Ui(i, e, t) }
    );
  let u =
    l.status === `timed_out`
      ? `Timed out after ${t}ms.`
      : l.error instanceof Error
        ? l.error.message
        : String(l.error);
  return (
    a.n().warning(`Failed to load shell env`, {
      safe: {
        caller: e,
        durationMs: Date.now() - i,
        pathEntryCount: Wi(process.env.PATH ?? null),
        resultSource: `load`,
        status: l.status,
        timeoutMs: t,
      },
      sensitive: { detail: u, path: process.env.PATH ?? null },
    }),
    { status: l.status, detail: u, path: process.env.PATH ?? null, ...Ui(i, e, t) }
  );
}
function Ui(e, t, n) {
  let r = process.env.PATH ?? null;
  return {
    caller: t,
    durationMs: Date.now() - e,
    pathEntryCount: Wi(r),
    resultSource: `load`,
    timeoutMs: n,
  };
}
function Wi(e) {
  return e == null || e === `` ? 0 : e.split(u.delimiter).length;
}
function Gi(e, t) {
  return { ...e, caller: t, resultSource: `cache` };
}
function Ki(e) {
  (Q?.status !== `loaded` || e.status === `loaded`) && (Q = e);
}
async function qi() {
  try {
    let e = r.rt();
    if ((await (0, l.mkdir)(e, { recursive: !0 })) === void 0) return;
    await (0, l.writeFile)((0, u.join)(e, `.desktop-created`), ``, { flag: `wx` });
  } catch (e) {
    if (e instanceof Error && `code` in e && e.code === `EEXIST`) return;
    a.n().warning(`Failed to record Windows desktop home ownership`, {
      safe: {},
      sensitive: { error: e },
    });
  }
}
var Ji = `codex-node-network-restricted`,
  Yi =
    /^--(?:permission|allow-(?:net|ipc|fs-read|fs-write|addons|child-process|worker|inspector|wasi))(?:=|$)/;
function Xi(e) {
  if (process.versions.electron == null) return !0;
  let t = s.app.commandLine.hasSwitch(Ji);
  if (e.kind === `unrestricted` && !t) return !0;
  if (e.kind === `restricted` && t) return (Zi(e), !0);
  let n = process.argv.slice(1).filter((e) => e !== `--${Ji}` && !Yi.test(e));
  return (
    e.kind === `restricted` &&
      (n.unshift(
        `--${Ji}`,
        `--permission`,
        `--allow-fs-read=*`,
        `--allow-fs-write=*`,
        `--allow-addons`,
        `--allow-child-process`,
        `--allow-worker`,
        ...Qi().map((e) => `--allow-ipc=${e}`),
      ),
      delete process.env.NODE_OPTIONS),
    o.n(),
    s.app.relaunch({ args: n }),
    s.app.exit(0),
    !1
  );
}
function Zi(e) {
  if (
    e.kind === `restricted` &&
    process.versions.electron != null &&
    (process.permission?.has(`net`) !== !1 || !Qi().every((e) => process.permission?.has(`ipc`, e)))
  )
    throw Error(`Owl did not activate the required Node network permissions.`);
}
function Qi() {
  return process.platform === `win32`
    ? [r.c()]
    : [r.c(), r.u(), (0, u.join)(r.rt(), `app-server-control`, `app-server-control.sock`)];
}
var $i = `0.154.0-alpha.1`,
  ea = t.O({
    requirements: t
      .O({
        application: t
          .O({
            network: t
              .O({
                enabled: t._(),
                domains: t.j(
                  t
                    .N()
                    .max(253)
                    .regex(
                      /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/,
                    ),
                  t.d([`allow`, `deny`]),
                ),
              })
              .nullable(),
          })
          .nullable()
          .optional(),
      })
      .nullable(),
  });
function ta(e, t) {
  let r = ea.safeParse(t);
  if (!r.success)
    throw Error(
      `Application network requirements are invalid or unavailable. Update the app server to a version that exposes application requirements.`,
    );
  if (
    r.data.requirements != null &&
    r.data.requirements.application === void 0 &&
    !(e != null && n.Li(e) && n.Ii(e, `0.141.0`) >= 0 && n.Ii(e, $i) < 0)
  )
    throw Error(`This app server did not provide application network requirements.`);
  let i = r.data.requirements?.application?.network;
  return i?.enabled === !0
    ? {
        kind: `restricted`,
        allowedDomains: new Set(
          Object.entries(i.domains)
            .filter(([, e]) => e === `allow`)
            .map(([e]) => e),
        ),
      }
    : { kind: `unrestricted` };
}
function na(e, t) {
  let n;
  try {
    n = typeof t == `string` ? new URL(t) : t;
  } catch {
    return !1;
  }
  return [`app:`, `codex-sandbox:`, `data:`, `blob:`, `file:`, `about:`].includes(n.protocol)
    ? !0
    : e == null
      ? !1
      : e.kind === `unrestricted` ||
        ((n.protocol === `https:` || n.protocol === `wss:`) &&
          e.allowedDomains.has(n.hostname.replace(/\.$/, ``)));
}
var $ = {
    title: {
      messageId: `desktop.workspacePolicyRecovery.title`,
      defaultMessage: `Organization settings could not be loaded`,
    },
    detail: {
      messageId: `desktop.workspacePolicyRecovery.detail`,
      defaultMessage: `The app is paused until your organization settings can be loaded safely. A network connection, proxy, or firewall may be preventing access. Check your connection and try again, or sign out to use another account. If the problem continues, contact your IT administrator`,
    },
    retry: { messageId: `desktop.workspacePolicyRecovery.retry`, defaultMessage: `Retry` },
    signOut: { messageId: `desktop.workspacePolicyRecovery.signOut`, defaultMessage: `Sign out` },
    quit: { messageId: `desktop.workspacePolicyRecovery.quit`, defaultMessage: `Quit` },
  },
  ra = e.r({
    getStartupApplicationNetworkPolicy: () => aa,
    initializeNodeNetworkPermissions: () => oa,
  }),
  ia = null;
function aa() {
  return ia;
}
async function oa() {
  ((ia = null),
    await Bi(),
    process.env.CODEX_HOME != null &&
      (process.env.CODEX_HOME = (0, u.resolve)(process.env.CODEX_HOME)),
    process.platform === `win32` && s.app.isPackaged && (await qi()));
  let e = !1;
  if (process.platform === `win32`) {
    let t = r.rt();
    e =
      new Ti(
        (0, u.join)(t, `config.toml`),
        new Rr((0, u.join)(t, `.codex-global-state.json`)),
      ).getEffective(n.W.runCodexInWsl.key) === !0 && (await r.lt()) != null;
  }
  let t = !1,
    i = !1,
    o = 0,
    c = performance.now() + 6e4;
  for (;;) {
    o += 1;
    let n = `policy-read`;
    try {
      i ||= t;
      let { appServerVersion: a, response: o } = await r.r(
        {
          hostConfig: Xr,
          spawnInsideWsl: e,
          repoRoot: (0, u.join)(s.app.getAppPath(), `..`),
          resourcesPath: process.resourcesPath,
        },
        s.app.getVersion(),
        { signOut: t, timeoutMs: Math.max(1, Math.min(3e4, c - performance.now())) },
      );
      n = `policy-validation`;
      let l = ta(a, o);
      return ((n = `node-permissions`), Xi(l) ? ((ia = l), !0) : !1);
    } catch (e) {
      if (!i && Pi(e)) {
        ((t = !0), (o = 0), (c = performance.now() + 6e4));
        continue;
      }
      let l = e instanceof r.t ? e.reason : n,
        d = 1e3 * 2 ** (o - 1),
        f = !t && e instanceof r.t && e.retryable && o < 3 && performance.now() + d < c;
      if (
        (a.n().warning(`Desktop startup policy read failed`, {
          safe: { reason: l, phase: n, attempt: o, retrying: f },
        }),
        f)
      ) {
        await new Promise((e) => setTimeout(e, d));
        continue;
      }
      (await s.app.whenReady(), await $r((0, u.join)(s.app.getAppPath(), `..`)));
      let { response: ee } = await s.dialog.showMessageBox({
        type: `warning`,
        message: K().formatMessage($.title),
        detail: K().formatMessage($.detail),
        buttons: [
          K().formatMessage($.retry),
          K().formatMessage($.signOut),
          K().formatMessage($.quit),
        ],
        defaultId: 0,
        cancelId: 2,
        noLink: !0,
      });
      if (ee === 2) return (s.app.exit(0), !1);
      ((t = ee === 1), (o = 0), (c = performance.now() + 6e4));
    }
  }
}
(Object.defineProperty(exports, "$", {
  enumerable: !0,
  get: function () {
    return zn;
  },
}),
  Object.defineProperty(exports, "A", {
    enumerable: !0,
    get: function () {
      return xr;
    },
  }),
  Object.defineProperty(exports, "At", {
    enumerable: !0,
    get: function () {
      return ht;
    },
  }),
  Object.defineProperty(exports, "B", {
    enumerable: !0,
    get: function () {
      return ar;
    },
  }),
  Object.defineProperty(exports, "C", {
    enumerable: !0,
    get: function () {
      return wr;
    },
  }),
  Object.defineProperty(exports, "Ct", {
    enumerable: !0,
    get: function () {
      return gn;
    },
  }),
  Object.defineProperty(exports, "D", {
    enumerable: !0,
    get: function () {
      return Rr;
    },
  }),
  Object.defineProperty(exports, "Dt", {
    enumerable: !0,
    get: function () {
      return At;
    },
  }),
  Object.defineProperty(exports, "E", {
    enumerable: !0,
    get: function () {
      return Er;
    },
  }),
  Object.defineProperty(exports, "Et", {
    enumerable: !0,
    get: function () {
      return Bt;
    },
  }),
  Object.defineProperty(exports, "F", {
    enumerable: !0,
    get: function () {
      return W;
    },
  }),
  Object.defineProperty(exports, "G", {
    enumerable: !0,
    get: function () {
      return qn;
    },
  }),
  Object.defineProperty(exports, "H", {
    enumerable: !0,
    get: function () {
      return vr;
    },
  }),
  Object.defineProperty(exports, "I", {
    enumerable: !0,
    get: function () {
      return gr;
    },
  }),
  Object.defineProperty(exports, "J", {
    enumerable: !0,
    get: function () {
      return Hn;
    },
  }),
  Object.defineProperty(exports, "K", {
    enumerable: !0,
    get: function () {
      return Yn;
    },
  }),
  Object.defineProperty(exports, "L", {
    enumerable: !0,
    get: function () {
      return or;
    },
  }),
  Object.defineProperty(exports, "M", {
    enumerable: !0,
    get: function () {
      return sr;
    },
  }),
  Object.defineProperty(exports, "Mt", {
    enumerable: !0,
    get: function () {
      return st;
    },
  }),
  Object.defineProperty(exports, "N", {
    enumerable: !0,
    get: function () {
      return cr;
    },
  }),
  Object.defineProperty(exports, "Nt", {
    enumerable: !0,
    get: function () {
      return lt;
    },
  }),
  Object.defineProperty(exports, "O", {
    enumerable: !0,
    get: function () {
      return pr;
    },
  }),
  Object.defineProperty(exports, "Ot", {
    enumerable: !0,
    get: function () {
      return Rt;
    },
  }),
  Object.defineProperty(exports, "P", {
    enumerable: !0,
    get: function () {
      return mr;
    },
  }),
  Object.defineProperty(exports, "Pt", {
    enumerable: !0,
    get: function () {
      return ut;
    },
  }),
  Object.defineProperty(exports, "Q", {
    enumerable: !0,
    get: function () {
      return Pn;
    },
  }),
  Object.defineProperty(exports, "R", {
    enumerable: !0,
    get: function () {
      return Cr;
    },
  }),
  Object.defineProperty(exports, "S", {
    enumerable: !0,
    get: function () {
      return dr;
    },
  }),
  Object.defineProperty(exports, "St", {
    enumerable: !0,
    get: function () {
      return pn;
    },
  }),
  Object.defineProperty(exports, "T", {
    enumerable: !0,
    get: function () {
      return br;
    },
  }),
  Object.defineProperty(exports, "Tt", {
    enumerable: !0,
    get: function () {
      return zt;
    },
  }),
  Object.defineProperty(exports, "U", {
    enumerable: !0,
    get: function () {
      return tr;
    },
  }),
  Object.defineProperty(exports, "V", {
    enumerable: !0,
    get: function () {
      return _r;
    },
  }),
  Object.defineProperty(exports, "W", {
    enumerable: !0,
    get: function () {
      return Jn;
    },
  }),
  Object.defineProperty(exports, "X", {
    enumerable: !0,
    get: function () {
      return Ln;
    },
  }),
  Object.defineProperty(exports, "Y", {
    enumerable: !0,
    get: function () {
      return Fn;
    },
  }),
  Object.defineProperty(exports, "Z", {
    enumerable: !0,
    get: function () {
      return In;
    },
  }),
  Object.defineProperty(exports, "_", {
    enumerable: !0,
    get: function () {
      return lr;
    },
  }),
  Object.defineProperty(exports, "_t", {
    enumerable: !0,
    get: function () {
      return Cn;
    },
  }),
  Object.defineProperty(exports, "a", {
    enumerable: !0,
    get: function () {
      return Zi;
    },
  }),
  Object.defineProperty(exports, "at", {
    enumerable: !0,
    get: function () {
      return ln;
    },
  }),
  Object.defineProperty(exports, "b", {
    enumerable: !0,
    get: function () {
      return Zn;
    },
  }),
  Object.defineProperty(exports, "bt", {
    enumerable: !0,
    get: function () {
      return vn;
    },
  }),
  Object.defineProperty(exports, "c", {
    enumerable: !0,
    get: function () {
      return Pi;
    },
  }),
  Object.defineProperty(exports, "ct", {
    enumerable: !0,
    get: function () {
      return on;
    },
  }),
  Object.defineProperty(exports, "d", {
    enumerable: !0,
    get: function () {
      return ei;
    },
  }),
  Object.defineProperty(exports, "dt", {
    enumerable: !0,
    get: function () {
      return cn;
    },
  }),
  Object.defineProperty(exports, "et", {
    enumerable: !0,
    get: function () {
      return Rn;
    },
  }),
  Object.defineProperty(exports, "f", {
    enumerable: !0,
    get: function () {
      return $r;
    },
  }),
  Object.defineProperty(exports, "ft", {
    enumerable: !0,
    get: function () {
      return un;
    },
  }),
  Object.defineProperty(exports, "g", {
    enumerable: !0,
    get: function () {
      return ur;
    },
  }),
  Object.defineProperty(exports, "gt", {
    enumerable: !0,
    get: function () {
      return Sn;
    },
  }),
  Object.defineProperty(exports, "h", {
    enumerable: !0,
    get: function () {
      return Yr;
    },
  }),
  Object.defineProperty(exports, "ht", {
    enumerable: !0,
    get: function () {
      return xn;
    },
  }),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return ta;
    },
  }),
  Object.defineProperty(exports, "it", {
    enumerable: !0,
    get: function () {
      return Ut;
    },
  }),
  Object.defineProperty(exports, "j", {
    enumerable: !0,
    get: function () {
      return yr;
    },
  }),
  Object.defineProperty(exports, "jt", {
    enumerable: !0,
    get: function () {
      return ct;
    },
  }),
  Object.defineProperty(exports, "k", {
    enumerable: !0,
    get: function () {
      return hr;
    },
  }),
  Object.defineProperty(exports, "kt", {
    enumerable: !0,
    get: function () {
      return yt;
    },
  }),
  Object.defineProperty(exports, "l", {
    enumerable: !0,
    get: function () {
      return Ti;
    },
  }),
  Object.defineProperty(exports, "lt", {
    enumerable: !0,
    get: function () {
      return $t;
    },
  }),
  Object.defineProperty(exports, "m", {
    enumerable: !0,
    get: function () {
      return Xr;
    },
  }),
  Object.defineProperty(exports, "mt", {
    enumerable: !0,
    get: function () {
      return bn;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return ra;
    },
  }),
  Object.defineProperty(exports, "nt", {
    enumerable: !0,
    get: function () {
      return Tn;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return Bi;
    },
  }),
  Object.defineProperty(exports, "ot", {
    enumerable: !0,
    get: function () {
      return an;
    },
  }),
  Object.defineProperty(exports, "p", {
    enumerable: !0,
    get: function () {
      return K;
    },
  }),
  Object.defineProperty(exports, "pt", {
    enumerable: !0,
    get: function () {
      return dn;
    },
  }),
  Object.defineProperty(exports, "q", {
    enumerable: !0,
    get: function () {
      return Gn;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return na;
    },
  }),
  Object.defineProperty(exports, "rt", {
    enumerable: !0,
    get: function () {
      return wn;
    },
  }),
  Object.defineProperty(exports, "s", {
    enumerable: !0,
    get: function () {
      return Vi;
    },
  }),
  Object.defineProperty(exports, "st", {
    enumerable: !0,
    get: function () {
      return en;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return aa;
    },
  }),
  Object.defineProperty(exports, "tt", {
    enumerable: !0,
    get: function () {
      return On;
    },
  }),
  Object.defineProperty(exports, "u", {
    enumerable: !0,
    get: function () {
      return bi;
    },
  }),
  Object.defineProperty(exports, "ut", {
    enumerable: !0,
    get: function () {
      return sn;
    },
  }),
  Object.defineProperty(exports, "v", {
    enumerable: !0,
    get: function () {
      return rr;
    },
  }),
  Object.defineProperty(exports, "vt", {
    enumerable: !0,
    get: function () {
      return yn;
    },
  }),
  Object.defineProperty(exports, "w", {
    enumerable: !0,
    get: function () {
      return Sr;
    },
  }),
  Object.defineProperty(exports, "wt", {
    enumerable: !0,
    get: function () {
      return fn;
    },
  }),
  Object.defineProperty(exports, "x", {
    enumerable: !0,
    get: function () {
      return fr;
    },
  }),
  Object.defineProperty(exports, "xt", {
    enumerable: !0,
    get: function () {
      return hn;
    },
  }),
  Object.defineProperty(exports, "y", {
    enumerable: !0,
    get: function () {
      return nr;
    },
  }),
  Object.defineProperty(exports, "yt", {
    enumerable: !0,
    get: function () {
      return _n;
    },
  }),
  Object.defineProperty(exports, "z", {
    enumerable: !0,
    get: function () {
      return ir;
    },
  }));
//# sourceMappingURL=startup-requirements-Da3KfG8r.js.map
