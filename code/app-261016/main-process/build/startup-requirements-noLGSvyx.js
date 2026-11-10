const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./zod-C7Kk26Xx.js"),
  n = require("./src-CSKkIr_z.js"),
  r = require("./mcp-app-attachment-DQQzodzc.js"),
  i = require("./application-network-startup-BG13czUt.js"),
  a = require("./path-browserify-win32-DubphUXU.js"),
  o = require("./logger-Bfbyn6HA.js"),
  s = require("./desktop-open-path-queue-BRLR7DdW.js");
let c = require("node:crypto"),
  l = require("node:fs"),
  u = require("node:path"),
  d = require("electron"),
  f = require("node:fs/promises"),
  p = require("node:timers/promises");
function m(e, t) {
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
var h = { es: `es-419`, fr: `fr-FR`, pt: `pt-BR`, zh: `zh-CN` },
  g = `TOML-backed settings cannot contain null inside arrays`,
  ee = `TOML-backed settings cannot contain null in dynamic object fields`;
function _(e, t) {
  return ne(v(e), t);
}
function te(e, t) {
  return re(v(e), t);
}
function ne(e, n) {
  if (n == null) return null;
  if (typeof n == `boolean` || typeof n == `number` || typeof n == `string`) return n;
  if (Array.isArray(n)) {
    if (n.some((e) => e == null)) throw Error(g);
    let r = e instanceof t.a ? v(e.element) : void 0;
    return n.map((e) => ne(r, e));
  }
  if (!ie(n)) throw Error(`TOML-backed settings must be JSON-compatible`);
  if (e instanceof t.u)
    return Object.fromEntries(
      Object.entries(n).map(([t, n]) => {
        if (n == null) throw Error(ee);
        return [t, ne(v(e.valueType), n)];
      }),
    );
  let r = e instanceof t.c ? e : null;
  return Object.fromEntries(
    Object.entries(n).flatMap(([e, t]) => {
      if (t === void 0) return [];
      let n = r?.shape[e];
      if (t == null) {
        if (n == null) throw Error(ee);
        return [];
      }
      return [[e, ne(n == null ? void 0 : v(n), t)]];
    }),
  );
}
function re(e, n) {
  if (Array.isArray(n)) {
    let r = e instanceof t.a ? v(e.element) : void 0;
    return n.map((e) => re(r, e));
  }
  if (!ie(n)) return n;
  if (e instanceof t.u)
    return Object.fromEntries(Object.entries(n).map(([t, n]) => [t, re(v(e.valueType), n)]));
  if (!(e instanceof t.c)) return n;
  let r = Object.fromEntries(
    Object.entries(n).map(([t, n]) => [t, re(e.shape[t] == null ? void 0 : v(e.shape[t]), n)]),
  );
  for (let [t, n] of Object.entries(e.shape))
    !Object.prototype.hasOwnProperty.call(r, t) && n.isNullable() && (r[t] = null);
  return r;
}
function v(e) {
  return e instanceof t.o || e instanceof t.s || e instanceof t.l ? v(e.unwrap()) : e;
}
function ie(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
var ae = `CODEX_ELECTRON_RESOURCES_PATH`;
function oe({ env: e, isPackaged: t, resourcesPath: n }) {
  return t ? n : e[ae]?.trim() || n;
}
var se = e.a(r.at()),
  ce = Symbol(`workers-module`);
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
var y = globalThis[ce],
  b = y ? y.RpcTarget : class {},
  le = async function () {}.constructor,
  ue = typeof Buffer < `u` ? Buffer.prototype : void 0;
function x(e) {
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
    case le.prototype:
      return `function`;
    case Array.prototype:
      return `array`;
    case Date.prototype:
      return `date`;
    case Uint8Array.prototype:
    case ue:
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
    case D.prototype:
      return `stub`;
    case O.prototype:
      return `rpc-promise`;
    default:
      if (y) {
        if (t == y.RpcStub.prototype || e instanceof y.ServiceStub) return `rpc-target`;
        if (t == y.RpcPromise.prototype || t == y.RpcProperty.prototype) return `rpc-thenable`;
      }
      return e instanceof b ? `rpc-target` : e instanceof Error ? `error` : `unsupported`;
  }
}
function de() {
  throw Error(`RPC map() implementation was not loaded.`);
}
var S = { applyMap: de, sendMap: de };
function fe() {
  throw Error(`Stream implementation was not loaded.`);
}
var C = { createWritableStreamHook: fe, createWritableStreamFromHook: fe, createReadableStreamHook: fe },
  w = class {
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
  T = class extends w {
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
  pe = new T(Error(`Attempted to use RPC stub after it has been disposed.`)),
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
var E = Symbol(`realStub`),
  ge = {
    apply(e, t, n) {
      let r = e.raw;
      return new O(me(r.hook, r.pathIfPromise || [], k.fromAppParams(n)), []);
    },
    get(e, t, n) {
      let r = e.raw;
      if (t === E) return r;
      if (t in O.prototype) return r[t];
      if (typeof t == `string`) return new O(r.hook, r.pathIfPromise ? [...r.pathIfPromise, t] : [t]);
      if (t === Symbol.dispose && (!r.pathIfPromise || r.pathIfPromise.length == 0))
        return () => {
          (r.hook.dispose(), (r.hook = pe));
        };
    },
    has(e, t) {
      let n = e.raw;
      return t === E
        ? !0
        : t in O.prototype
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
  D = class e extends b {
    constructor(e, t) {
      if ((super(), !(e instanceof w))) {
        let n = e;
        if (
          ((e = n instanceof b || n instanceof Function ? j.create(n, void 0) : new A(k.fromAppReturn(n))), t)
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
      let t = this[E];
      return t.pathIfPromise ? new e(t.hook.get(t.pathIfPromise)) : new e(t.hook.dup());
    }
    onRpcBroken(e) {
      this[E].hook.onBroken(e);
    }
    map(e) {
      let { hook: t, pathIfPromise: n } = this[E];
      return S.sendMap(t, n || [], e);
    }
    toString() {
      return `[object RpcStub]`;
    }
  },
  O = class extends D {
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
  let { hook: t, pathIfPromise: n } = e[E];
  return n && n.length > 0 ? t.get(n) : t;
}
function ve(e) {
  let { hook: t, pathIfPromise: n } = e[E];
  return n ? t.get(n) : t.dup();
}
function ye(e) {
  let { hook: t, pathIfPromise: n } = e[E];
  if (!(n && n.length > 0)) return t;
}
function be(e) {
  return e[E].hook;
}
function xe(e) {
  return e[E];
}
async function Se(e) {
  let { hook: t, pathIfPromise: n } = e[E];
  return (n.length > 0 && (t = t.get(n)), (await t.pull()).deliverResolve());
}
var k = class e {
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
      return j.create(e, t);
    }
    if (this.source === `return`) {
      let r = this.rpcTargets?.get(e);
      return r
        ? n
          ? r.dup()
          : (this.rpcTargets?.delete(e), r)
        : ((r = j.create(e, t)),
          n ? ((this.rpcTargets ||= new Map()), this.rpcTargets.set(e, r), r.dup()) : r);
    }
    throw Error(`owned payload shouldn't contain raw RpcTargets`);
  }
  getHookForWritableStream(e, t, n = !0) {
    if (this.source === `params`) return C.createWritableStreamHook(e);
    if (this.source === `return`) {
      let t = this.rpcTargets?.get(e);
      return t
        ? n
          ? t.dup()
          : (this.rpcTargets?.delete(e), t)
        : ((t = C.createWritableStreamHook(e)),
          n ? ((this.rpcTargets ||= new Map()), this.rpcTargets.set(e, t), t.dup()) : t);
    }
    throw Error(`owned payload shouldn't contain raw WritableStreams`);
  }
  getHookForReadableStream(e, t, n = !0) {
    if (this.source === `params`) return C.createReadableStreamHook(e);
    if (this.source === `return`) {
      let t = this.rpcTargets?.get(e);
      return t
        ? n
          ? t.dup()
          : (this.rpcTargets?.delete(e), t)
        : ((t = C.createReadableStreamHook(e)),
          n ? ((this.rpcTargets ||= new Map()), this.rpcTargets.set(e, t), t.dup()) : t);
    }
    throw Error(`owned payload shouldn't contain raw ReadableStreams`);
  }
  deepCopy(e, t, n, r, i, a) {
    switch (x(e)) {
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
        if (((a = i ? ve(t) : _e(t)), t instanceof O)) {
          let e = new O(a, []);
          return (this.promises.push({ parent: r, property: n, promise: e }), e);
        }
        return (this.hooks.push(a), new D(a));
      }
      case `function`:
      case `rpc-target`: {
        let n = e,
          r;
        return ((r = a ? a.getHookForRpcTarget(n, t, i) : j.create(n, t)), this.hooks.push(r), new D(r));
      }
      case `rpc-thenable`: {
        let o = e,
          s;
        return (
          (s = a ? new O(a.getHookForRpcTarget(o, t, i), []) : new O(j.create(o, t), [])),
          this.promises.push({ parent: r, property: n, promise: s }),
          s
        );
      }
      case `writable`: {
        let n = e,
          r;
        return (
          (r = a ? a.getHookForWritableStream(n, t, i) : C.createWritableStreamHook(n)),
          this.hooks.push(r),
          n
        );
      }
      case `readable`: {
        let n = e,
          r;
        return (
          (r = a ? a.getHookForReadableStream(n, t, i) : C.createReadableStreamHook(n)),
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
    if ((this.ensureDeepCopied(), this.value instanceof O)) e.deliverRpcPromiseTo(this.value, t, n, r);
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
      return i instanceof O ? e.fromAppReturn(i) : e.fromAppReturn(await i);
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
      (this.hooks.forEach((e) => e.dispose()), this.promises.forEach((e) => e.promise[Symbol.dispose]()));
    else if (
      this.source === `return` &&
      (this.disposeImpl(this.value, void 0), this.rpcTargets && this.rpcTargets.size > 0)
    )
      throw Error(`Not all rpcTargets were accounted for in disposeImpl()?`);
    ((this.source = `owned`), (this.hooks = []), (this.promises = []));
  }
  disposeImpl(e, t) {
    switch (x(e)) {
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
        (n ? this.rpcTargets.delete(t) : (n = C.createWritableStreamHook(t)), n.dispose());
        return;
      }
      case `readable`: {
        let t = e,
          n = this.rpcTargets?.get(t);
        (n ? this.rpcTargets.delete(t) : (n = C.createReadableStreamHook(t)), n.dispose());
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
    switch (x(e)) {
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
    switch (x(e)) {
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
          throw TypeError(`'${e}' is not a serializable type, so property ${t} cannot be accessed.`);
        }
      default:
        throw TypeError(`unreachable`);
    }
  }
  if (e instanceof O) {
    let { hook: t, pathIfPromise: n } = xe(e);
    return { hook: t, remainingPath: n || [] };
  }
  return { value: e, parent: t, owner: r };
}
var we = class extends w {
    call(e, t) {
      try {
        let { value: n, owner: r } = this.getValue(),
          i = Ce(n, void 0, e, r);
        if (i.hook) return i.hook.call(i.remainingPath, t);
        if (typeof i.value != `function`) throw TypeError(`'${e.join(`.`)}' is not a function.`);
        return new Ee(t.deliverCall(i.value, i.parent).then((e) => new A(e)));
      } catch (e) {
        return new T(e);
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
        return r.hook ? r.hook.map(r.remainingPath, t, n) : S.applyMap(r.value, r.parent, r.owner, t, n);
      } catch (e) {
        return new T(e);
      }
    }
    get(e) {
      try {
        let { value: t, owner: n } = this.getValue();
        if (e.length === 0 && n === null) throw Error(`Can't dup an RpcTarget stub as a promise.`);
        let r = Ce(t, void 0, e, n);
        return r.hook ? r.hook.get(r.remainingPath) : new A(k.deepCopyFrom(r.value, r.parent, r.owner));
      } catch (e) {
        return new T(e);
      }
    }
  },
  A = class e extends we {
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
      return new e(k.deepCopyFrom(t.value, void 0, t));
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
      this.payload && this.payload.value instanceof D && this.payload.value.onRpcBroken(e);
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
var j = class e extends we {
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
        ? Promise.resolve(e).then((e) => k.fromAppReturn(e))
        : Promise.reject(Error(`Tried to resolve a non-promise stub.`));
    }
    ignoreUnhandledRejections() {}
    dispose() {
      this.target &&= (this.refcount && --this.refcount.count == 0 && Te(this.target), void 0);
    }
    onBroken(e) {}
  },
  Ee = class e extends w {
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
  De = { maxBigIntDigits: 16384, maxDepth: 256, maxMessageSize: 33554432 },
  Oe = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1,
  ke = [
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
function Ae(e) {
  return ke.includes(e);
}
var je = {
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
  Me = {
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
  Ne = new Map();
for (let e of Object.keys(Me)) Ne.set(Me[e], e);
function Pe(e, t) {
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
var Fe = new (class {
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
async function Ie(e, t) {
  let n = await new Response(e).blob();
  return n.type === t ? n : n.slice(0, n.size, t);
}
var Le = {
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
  M = class e {
    exporter;
    source;
    encodingLevel;
    constructor(e, t, n) {
      ((this.exporter = e), (this.source = t), (this.encodingLevel = n));
    }
    static devaluate(t, n, r = Fe, i, a = `string`) {
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
        throw Error(`Serialization exceeded maximum allowed depth. (Does the message contain cycles?)`);
      switch (x(e)) {
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
          let t = Ne.get(Object.getPrototypeOf(e)),
            n;
          if (t === `ArrayBuffer`) n = new Uint8Array(e);
          else if (t === void 0) n = e;
          else {
            let r = e;
            n = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
            let i = je[t];
            !Oe && i && ((n = n.slice()), Pe(n, i));
          }
          if (this.encodingLevel === `structuredClonable` || this.encodingLevel === `jsonCompatibleWithBytes`)
            return t === void 0 ? [`bytes`, n] : [`bytes`, n, t];
          let r;
          if (n.toBase64) r = n.toBase64({ omitPadding: !0 });
          else if (typeof Buffer < `u`)
            r = (n instanceof Buffer ? n : Buffer.from(n.buffer, n.byteOffset, n.byteLength)).toString(
              `base64`,
            );
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
          else if (t.body === void 0 && ![`GET`, `HEAD`, `OPTIONS`, `TRACE`, `DELETE`].includes(t.method)) {
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
              i = C.createReadableStreamHook(n);
            ((r.body = [`readable`, this.exporter.createPipe(n, i)]), (r.duplex = t.duplex || `half`));
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
          (t.status !== 200 && (i.status = t.status), t.statusText && (i.statusText = t.statusText));
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
            r = C.createReadableStreamHook(n),
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
          for (let e of Object.keys(t)) e !== `name` && e !== `message` && e !== `stack` && o(e, i[e]);
          (`cause` in t && o(`cause`, i.cause), t instanceof AggregateError && o(`errors`, t.errors));
          let s = [`error`, t.name, t.message];
          return (
            a ? (s.push(r && r.stack ? r.stack : null), s.push(a)) : r && r.stack && s.push(r.stack),
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
function Re(e) {
  return JSON.stringify(M.devaluate(e));
}
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
    return De;
  }
})();
function ze(e, t) {
  return new O(
    new Ee(
      new Response(t).arrayBuffer().then((t) => {
        let n = new Uint8Array(t),
          r = new Request(e, { body: n });
        return new A(k.fromAppReturn(r));
      }),
    ),
    [],
  );
}
function Be(e, t) {
  return new O(new Ee(Ie(e, t).then((e) => new A(k.fromAppReturn(e)))), []);
}
var N = class e {
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
      let n = k.forEvaluate(this.hooks, this.promises);
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
      if (i >= a) throw TypeError(`Deserialization exceeded maximum allowed message depth of ${a}.`);
      if (this.encodingLevel === `structuredClonable` && (t instanceof Date || typeof t == `bigint`))
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
              if (e.length > n) throw TypeError(`Deserialized bigint exceeds maximum length of ${n} digits.`);
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
            if (typeof t[2] != `string`) throw TypeError(`Unknown bytes type marker type: ${typeof t[2]}`);
            if (!Ae(t[2])) {
              let e = t[2].slice(0, 64);
              throw TypeError(`Unknown bytes type marker: ${e}`);
            }
            let n = t[2],
              r = je[n];
            if (r !== void 0 && e.byteLength % r !== 0)
              throw TypeError(`Invalid byte length ${e.byteLength} for ${n}; expected a multiple of ${r}`);
            let i = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
            switch ((!Oe && r !== void 0 && Pe(new Uint8Array(i), r), n)) {
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
              let e = Le[t[1]] || Error,
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
              let e = ze(o, a.body);
              return (this.promises.push({ promise: e, parent: n, property: r }), e);
            }
            return o;
          }
          case `response`: {
            if (t.length !== 3) break;
            let e = this.evaluateImpl(t[1], n, r, i + 1);
            if (!(
              e === null ||
              typeof e == `string` ||
              e instanceof Uint8Array ||
              e instanceof ReadableStream
            ))
              throw TypeError(`Response body must be of type ReadableStream.`);
            let a = t[2];
            if (typeof a != `object` || !a) break;
            if (a.webSocket) throw TypeError(`Can't deserialize a Response containing a webSocket.`);
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
            let o = Be(a, e);
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
                  let t = new O(e, []);
                  return (this.promises.push({ promise: t, parent: n, property: r }), t);
                }
                return (this.hooks.push(e), new O(e, []));
              };
            if (t.length == 2) return s(o ? a.get([]) : a.dup());
            let c = t[2];
            if (!(c instanceof Array) || !c.every((e) => typeof e == `string` || typeof e == `number`)) break;
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
              s = new O(e.map(i, a, o), []);
            return (this.promises.push({ promise: s, parent: n, property: r }), s);
          }
          case `export`:
          case `promise`:
            if (typeof t[1] == `number`) {
              if (t[0] == `promise`) {
                let e = new O(this.importer.importPromise(t[1]), []);
                return (this.promises.push({ parent: n, property: r, promise: e }), e);
              }
              {
                let e = this.importer.importStub(t[1]);
                return (this.hooks.push(e), new D(e));
              }
            }
            break;
          case `writable`:
            if (typeof t[1] == `number`) {
              let e = this.importer.importStub(t[1]),
                n = C.createWritableStreamFromHook(e);
              return (this.hooks.push(e), n);
            }
            break;
          case `readable`:
            if (typeof t[1] == `number`) {
              let e = this.importer.getPipeReadable(t[1]),
                n = C.createReadableStreamHook(e);
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
  Ve = 16,
  P = 8,
  He = 16,
  Ue = 64;
function F(e) {
  return 2 + e.length * 3;
}
function We(e, t, n = 0) {
  if (n >= Ue) return P;
  switch (typeof e) {
    case `string`:
      return F(e);
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
      if (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) return He + e.byteLength;
      if (typeof Blob < `u` && e instanceof Blob) return He + e.size;
      if (e instanceof Date) return 16;
      if (((t ??= new WeakSet()), t.has(e))) return P;
      if ((t.add(e), e instanceof Array)) {
        let r = Ve;
        for (let i of e) r += P + We(i, t, n + 1);
        return r;
      }
      if (e instanceof Error) {
        let r = Ve + F(e.name) + F(e.message) + F(e.stack ?? ``);
        for (let i of Object.keys(e)) r += P + F(i) + We(e[i], t, n + 1);
        return r;
      }
      let r = Ve;
      for (let i of Object.keys(e)) r += P + F(i) + We(e[i], t, n + 1);
      return r;
    }
    default:
      return 16;
  }
}
var I = class {
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
        : (this.abort(Error(`RPC was canceled because the RpcPromise was disposed.`)), this.sendRelease());
    }
    abort(e) {
      this.resolution ||
        ((this.resolution = new T(e)),
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
  L = class e extends w {
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
  Ge = class extends L {
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
  Ke = class {
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
        (this.limits = { ...De, ...n.limits }),
        this.exports.push({ hook: t, refcount: 1 }),
        this.imports.push(new I(this, 0, !1)),
        this.readLoop().catch((e) => this.abort(e)));
    }
    getMainImport() {
      return new Ge(this.imports[0]);
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
        n.refcount === 0 && (delete this.exports[e], this.reverseExports.delete(n.hook), n.hook.dispose()));
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
              if (t.value instanceof D) {
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
                let n = M.devaluate(t.value, void 0, this, t, this.encodingLevel);
                (this.send([`resolve`, e, n]), r && this.releaseExport(e, 1));
              },
              (t) => {
                (this.send([`reject`, e, M.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
                  r && this.releaseExport(e, 1));
              },
            )
            .catch((t) => {
              try {
                (this.send([`reject`, e, M.devaluate(t, void 0, this, void 0, this.encodingLevel)]),
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
      if (e instanceof L && e.entry && e.entry.session === this) return e.entry.importId;
    }
    importStub(e) {
      if (this.abortReason) throw this.abortReason;
      let t = this.imports[e];
      return (t || ((t = new I(this, e, !1)), (this.imports[e] = t)), new L(!1, t));
    }
    importPromise(e) {
      if (this.abortReason) throw this.abortReason;
      if (this.imports[e])
        return new T(Error(`Bug in RPC system: The peer sent a promise reusing an existing export ID.`));
      let t = new I(this, e, !0);
      return ((this.imports[e] = t), new L(!0, t));
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
        r = new I(this, n, !1);
      this.imports.push(r);
      let i = new L(!1, r),
        a = C.createWritableStreamFromHook(i);
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
        let e = M.devaluate(n.value, void 0, this, n, this.encodingLevel);
        r.push(e[0]);
      }
      this.send([`push`, r]);
      let i = new I(this, this.imports.length, !1);
      return (this.imports.push(i), new L(!0, i));
    }
    sendStream(e, t, n) {
      if (this.abortReason) throw this.abortReason;
      let r = [`pipeline`, e, t],
        i = M.devaluate(n.value, void 0, this, n, this.encodingLevel);
      r.push(i[0]);
      let a = [`stream`, r],
        o = this.send(a);
      o === void 0 && (o = We(a));
      let s = this.imports.length,
        c = new I(this, s, !0);
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
      let a = new I(this, this.imports.length, !1);
      return (this.imports.push(a), new L(!0, a));
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
            let t = [`abort`, M.devaluate(e, void 0, this, void 0, this.encodingLevel)];
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
                let e = new A(new N(this, this.encodingLevel).evaluate(n[1]));
                (e.ignoreUnhandledRejections(), this.exports.push({ hook: e, refcount: 1 }));
                continue;
              }
              break;
            case `stream`:
              if (n.length > 1) {
                let e = new A(new N(this, this.encodingLevel).evaluate(n[1]));
                e.ignoreUnhandledRejections();
                let t = this.exports.length;
                (this.exports.push({ hook: e, refcount: 1, autoRelease: !0 }), this.ensureResolvingExport(t));
                continue;
              }
              break;
            case `pipe`: {
              let { readable: e, writable: t } = new TransformStream(),
                n = C.createWritableStreamHook(t);
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
                  if (n[0] == `resolve`) t.resolve(new A(new N(this, this.encodingLevel).evaluate(n[2])));
                  else {
                    let e = new N(this, this.encodingLevel).evaluate(n[2]);
                    (e.dispose(), t.resolve(new T(e.value)));
                  }
                } else n[0] == `resolve` && new N(this, this.encodingLevel).evaluate(n[2]).dispose();
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
              let e = new N(this, this.encodingLevel).evaluate(n[1]);
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
  qe = class {
    #e;
    #t;
    constructor(e, t, n = {}) {
      let r;
      ((r = t ? new A(k.fromAppReturn(t)) : new T(Error(`This connection has no main object.`))),
        (this.#e = new Ke(e, r, n)),
        (this.#t = new D(this.#e.getMainImport())));
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
function Je(e, t, n) {
  return new qe(new Ye(e), t, n).getRemoteMain();
}
var Ye = class {
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
  R,
  Xe = class {
    context;
    captureMap = new Map();
    instructions = [];
    constructor(e, t) {
      ((this.context = R
        ? { parent: R, captures: [], subject: R.capture(e), path: t }
        : { parent: void 0, captures: [], subject: e, path: t }),
        (R = this));
    }
    unregister() {
      R = this.context.parent;
    }
    makeInput() {
      return new B(this, 0);
    }
    makeOutput(e) {
      let t;
      try {
        t = M.devaluate(e.value, void 0, this, e);
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
            new B(this.context.parent, this.context.parent.instructions.length))
          : this.context.subject.map(this.context.path, this.context.captures, this.instructions)
      );
    }
    pushCall(e, t, n) {
      let r = M.devaluate(n.value, void 0, this, n);
      r = r[0];
      let i = this.capture(e.dup());
      return (this.instructions.push([`pipeline`, i, t, r]), new B(this, this.instructions.length));
    }
    pushGet(e, t) {
      let n = this.capture(e.dup());
      return (this.instructions.push([`pipeline`, n, t]), new B(this, this.instructions.length));
    }
    capture(e) {
      if (e instanceof B && e.mapper === this) return e.idx;
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
S.sendMap = (e, t, n) => {
  let r = new Xe(e, t),
    i;
  try {
    i = k.fromAppReturn(he(r.pushCall.bind(r), () => n(new O(r.makeInput(), []))));
  } finally {
    r.unregister();
  }
  if (i instanceof Promise) throw (i.catch((e) => {}), Error(`RPC map() callbacks cannot be async.`));
  return new O(r.makeOutput(i), []);
};
function z() {
  throw Error(
    `Attempted to use an abstract placeholder from a mapper function. Please make sure your map function has no side effects.`,
  );
}
var B = class extends w {
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
      if (R) return R.pushGet(this, e);
      z();
    }
    call(e, t) {
      z();
    }
    map(e, t, n) {
      z();
    }
    pull() {
      z();
    }
    ignoreUnhandledRejections() {}
    onBroken(e) {
      z();
    }
  },
  Ze = class {
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
          let e = new N(this).evaluateCopy(t);
          if (e.value instanceof D) {
            let t = ye(e.value);
            if (t) {
              this.variables.push(t);
              continue;
            }
          }
          this.variables.push(new A(e));
        }
        return new N(this).evaluateCopy(e[e.length - 1]);
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
      return De;
    }
  };
function Qe(e, t, n, r, i) {
  let a = new Ze(r, new A(k.deepCopyFrom(e, t, n)));
  try {
    return a.apply(i);
  } finally {
    a.dispose();
  }
}
S.applyMap = (e, t, n, r, i) => {
  try {
    let a;
    if (e instanceof O) throw Error(`applyMap() can't be called on RpcPromise`);
    if (e instanceof Array) {
      let t = [];
      try {
        for (let a of e) t.push(Qe(a, e, n, r, i));
      } catch (e) {
        for (let e of t) e.dispose();
        throw e;
      }
      a = k.fromArray(t);
    } else a = e == null ? k.fromAppReturn(e) : Qe(e, t, n, r, i);
    return new A(a);
  } finally {
    for (let e of r) e.dispose();
  }
};
var $e = class e extends w {
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
          new Ee(
            (r === `write` ? t.deliverStreamWrite(n.writer) : t.deliverCall(n.writer[r], n.writer)).then(
              (e) => new A(e),
            ),
          )
        );
      } catch (e) {
        return new T(e);
      }
    }
    map(e, t, n) {
      for (let e of t) e.dispose();
      return new T(Error(`Cannot use map() on a WritableStream`));
    }
    get(e) {
      return new T(Error(`Cannot access properties on a WritableStream stub`));
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
  et = 262144,
  tt = 1073741824,
  nt = 65536,
  rt = 2,
  it = 1.25,
  at = 0.9,
  ot = 3,
  st = class {
    now;
    window = et;
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
          o = this.inStartupPhase ? rt : it,
          s = a * this.minRtt * o;
        ((s = Math.min(s, e.windowAtSend * o)),
          (s = e.windowFullAtSend ? Math.max(s, e.windowAtSend * at) : Math.max(s, this.window)),
          (this.window = Math.max(Math.min(s, tt), nt)),
          this.inStartupPhase &&
            e.sentTime >= this.roundStartTime &&
            (this.window > this.lastRoundWindow * it
              ? (this.roundsWithoutIncrease = 0)
              : ++this.roundsWithoutIncrease >= ot && (this.inStartupPhase = !1),
            (this.roundStartTime = t),
            (this.lastRoundWindow = this.window)));
      }
      return this.bytesInFlight < this.window;
    }
  };
function ct(e) {
  let t,
    n = !1,
    r = new st(() => performance.now()),
    i,
    a,
    o = () => {
      n || ((n = !0), e.dispose());
    };
  return new WritableStream({
    write(n, s) {
      if (t !== void 0) throw t;
      let c = k.fromAppParams([n]),
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
      let { promise: n } = e.stream([`close`], k.fromAppParams([]));
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
      let { promise: r } = e.stream([`abort`], k.fromAppParams([n]));
      r.then(
        () => o(),
        () => o(),
      );
    },
  });
}
var lt = class e extends w {
  state;
  static create(t) {
    return new e({ refcount: 1, stream: t, canceled: !1 });
  }
  constructor(e, t) {
    (super(), (this.state = e), t && ++e.refcount);
  }
  call(e, t) {
    return (t.dispose(), new T(Error(`Cannot call methods on a ReadableStream stub`)));
  }
  map(e, t, n) {
    for (let e of t) e.dispose();
    return new T(Error(`Cannot use map() on a ReadableStream`));
  }
  get(e) {
    return new T(Error(`Cannot access properties on a ReadableStream stub`));
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
((C.createWritableStreamHook = $e.create),
  (C.createWritableStreamFromHook = ct),
  (C.createReadableStreamHook = lt.create));
var ut = D,
  dt = qe,
  ft = b,
  pt = Je,
  V = t.N().min(1).max(256),
  mt = t.M({ userId: V, accountId: V, hostId: V, conversationId: V, challengeId: V }),
  ht = t.M({
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
  gt = t.M({ context: mt, operation: ht, finishedAtMs: t.D().nonnegative().optional() }),
  _t = t.M({ entries: t.h(gt) }),
  vt = class extends ft {
    #e;
    constructor(e) {
      (super(), (this.#e = e));
    }
    async read(e) {
      let t = JSON.stringify(mt.parse(e));
      return this.#e((e) => {
        let n = yt(e);
        return {
          value: n,
          result: n.entries.find((e) => JSON.stringify(e.context) === t)?.operation ?? null,
        };
      });
    }
    async claim(e, t) {
      let n = mt.parse(e),
        r = ht.parse(t),
        i = JSON.stringify(n);
      return this.#e((e) => {
        let t = yt(e),
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
      let n = JSON.stringify(mt.parse(e)),
        r = ht.parse(t);
      return this.#e((e) => ({
        value: {
          entries: yt(e).entries.map((e) => {
            if (JSON.stringify(e.context) !== n || e.operation.operationId !== r.operationId) return e;
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
function yt(e) {
  return e == null ? { entries: [] } : _t.parse(e);
}
var bt = new Set(
    `_.PATH.HOME.PWD.OLDPWD.SHELL.SHLVL.IFS.ENV.BASH_ENV.BASHOPTS.SHELLOPTS.CDPATH.FUNCNAME.GLOBIGNORE.HISTCMD.NODE_OPTIONS.OPTIND.CODEX_ACCESS_TOKEN.CODEX_HOME.CODEX_PROXY_CERT.CODEX_ENVIRONMENT_ID.CODEX_EXEC_SERVER_REMOTE_BASE_URL.CODEX_PRIMARY_RUNTIME.CODEX_PRIMARY_RUNTIME_BUNDLE_VERSION.CODEX_PRIMARY_RUNTIME_ROOT.CODEX_PRIMARY_RUNTIME_NODE.CODEX_PRIMARY_RUNTIME_NODE_MODULES.CODEX_PRIMARY_RUNTIME_PYTHON.RUST_LOG.HTTP_PROXY.HTTPS_PROXY.ALL_PROXY.NO_PROXY.REQUESTS_CA_BUNDLE.CURL_CA_BUNDLE.NODE_EXTRA_CA_CERTS.UID.EUID.PPID.GROUPS.DIRSTACK.PIPESTATUS.RANDOM.SRANDOM.SECONDS.LINENO.EPOCHREALTIME.EPOCHSECONDS`.split(
      `.`,
    ),
  ),
  xt = [`OAI_`, `IDENTITY_`, `AZURE_`, `MSI_`, `LD_`, `DYLD_`, `PYTHON`, `SSL_`, `GIT_CONFIG`, `BASH`];
function St(e) {
  if (e.length === 0) return `missing-key`;
  if (e.length > 256 || !/^[A-Za-z_][A-Za-z0-9_]*$/.test(e)) return `invalid-key`;
  let t = e.toUpperCase();
  return bt.has(t) || xt.some((e) => t.startsWith(e)) ? `reserved-key` : null;
}
var Ct = t.O({ connection_id: t.N(), alias: t.N() }),
  wt = t
    .N()
    .min(5)
    .max(255)
    .regex(/^oic_[A-Za-z0-9_-]+$/),
  Tt = t
    .h(t.M({ connection_id: wt, alias: t.N().regex(/^[A-Z][A-Z0-9_]{0,63}$/) }))
    .max(16)
    .refine(
      (e) =>
        new Set(e.map(({ connection_id: e }) => e)).size === e.length &&
        new Set(e.map(({ alias: e }) => e)).size === e.length,
    ),
  Et = t.O({ accountId: t.N().min(1), userId: t.N().min(1) }),
  Dt = new Set([
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
  Ot = new Set([`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`]),
  kt = `oai:v1:oic:{connection_id}`,
  At = t
    .N()
    .min(1)
    .max(512)
    .refine((e) => e === e.trim() && Gt(e) <= 512 && !/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e) && Wt(e) != null),
  jt = t
    .M({
      display_name: t.N().trim().min(1).max(200),
      subject_template: At.refine((e) => e === kt || e.startsWith(`${kt}:`)),
      additional_claims: t
        .j(
          t
            .N()
            .max(64)
            .regex(/^[A-Za-z][A-Za-z0-9_.-]*$/)
            .refine((e) => !/^oai_/i.test(e) && !Ot.has(e.toLowerCase())),
          At,
        )
        .refine((e) => Object.keys(e).length <= 16),
      include_actor_email: t._(),
    })
    .refine(
      ({ include_actor_email: e, subject_template: t, additional_claims: n }) =>
        e || [t, ...Object.values(n)].every((e) => !Wt(e)?.includes(`actor_email`)),
    ),
  Mt = t.I([
    jt.safeExtend({ azure_tenant_id: t.z(), azure_client_id: t.z() }),
    jt.safeExtend({
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
  Nt = t.y(`method`, [
    Et.extend({ method: t.w(`POST`), body: Mt }),
    Et.extend({ method: t.w(`GET`), connectionId: wt }),
    Et.extend({
      method: t.w(`PATCH`),
      connectionId: wt,
      body: jt.safeExtend({ configuration_version: t.D().int().positive() }),
    }),
  ]),
  H = t.N().refine((e) => e.trim().length > 0),
  Pt = t.M({ provider_kind: t.w(`azure`), tenant_id: H.max(64), client_id: H.max(64) }),
  Ft = { connection_id: wt, display_name: t.N(), can_edit: t._().nullish() },
  It = t
    .O({ ...Ft, provider_kind: t.w(`azure`), target: Pt.optional(), azure_tenant_id: H, azure_client_id: H })
    .refine(
      ({ target: e, azure_tenant_id: t, azure_client_id: n }) =>
        e == null || (e.tenant_id === t && e.client_id === n),
    ),
  Lt = t.O({
    ...Ft,
    provider_kind: t.w(`aws`),
    target: t.M({ provider_kind: t.w(`aws`), role_arn: H.max(2048), region: H.max(64) }),
    azure_tenant_id: t.E().optional(),
    azure_client_id: t.E().optional(),
  }),
  Rt = t.O({
    ...Ft,
    provider_kind: t.w(`gcp`),
    target: t.M({
      provider_kind: t.w(`gcp`),
      workload_identity_provider: H.max(256),
      service_account_email: H.max(254),
    }),
    azure_tenant_id: t.E().optional(),
    azure_client_id: t.E().optional(),
  }),
  zt = t.y(`provider_kind`, [It, Lt, Rt]),
  Bt = {
    issuer: t.R().nullable(),
    audience: t.N().regex(/\S/u).nullable(),
    subject_template: t.N(),
    subject: t.N().min(1).nullable(),
    additional_claims: t.j(t.N(), t.N()),
    include_actor_email: t._(),
    enabled: t._(),
    configuration_version: t.D().int().positive(),
  },
  Vt = t.y(`provider_kind`, [It.safeExtend(Bt), Lt.safeExtend(Bt), Rt.safeExtend(Bt)]),
  Ht = Et.extend({ configId: t.N().regex(/^[A-Za-z0-9_~-]+$/) }),
  Ut = t.O({
    capabilities: t.O({ attachment_provider_kinds: t.h(t.N()) }).optional(),
    items: t.h(zt).refine((e) => new Set(e.map(({ connection_id: e }) => e)).size === e.length),
    cursor: t.N().nullable(),
  });
function Wt(e) {
  let t = [];
  for (let [n, r] of e.matchAll(/{{|}}|{([a-z_]+):?}|[{}]/g))
    if (n !== `{{` && n !== `}}`) {
      if (r == null || !Dt.has(r)) return;
      t.push(r);
    }
  return t;
}
function Gt(e) {
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
var Kt = `environment-setup-server-configs-v1`,
  qt = t.O({
    repository_id: t.N().min(1),
    ref: t.N().min(1),
    depth: t.D().int().min(1).max(2147483647).optional(),
  }),
  Jt = t.y(`type`, [
    t.O({ type: t.w(`disabled`) }),
    t.O({ type: t.w(`unrestricted`) }),
    t.O({
      type: t.w(`restricted`),
      presets: t.h(t.d([`package_managers`])).optional(),
      egress_rules: t.h(t.O({ host: t.N().min(1) })),
    }),
  ]),
  Yt = t.O({ ip_ranges: t.h(t.N().min(1)), domains: t.h(t.N().min(1)) }),
  Xt = t.I([
    t.M({ environment_variable: t.N(), allowed_domains: t.h(t.N()).optional() }),
    t.M({ http_header: t.M({ header_name: t.N(), allowed_domains: t.h(t.N()) }) }),
  ]),
  Zt = t.O({
    id: t.N().optional(),
    name: t.N().min(1),
    source: t.d([`environment`, `user_provided`]),
    optional: t._().optional(),
    error: t.O({ code: t.N() }).optional(),
    target: Xt,
  }),
  Qt = t.O({
    source: t.y(`type`, [
      t.O({ type: t.w(`vault_secret`), id: t.N().min(1) }),
      t.O({ type: t.w(`user_provided`) }),
    ]),
    optional: t._(),
    delivery: t.O({ type: t.w(`direct_environment_variable`), variable_name: t.N().min(1) }),
    error: t.O({ code: t.N() }).optional(),
  }),
  $t = Qt.pick({ delivery: !0 }).extend({
    source: t.O({ type: t.w(`environment`) }),
    suggested_value: t.N().nullish(),
  }),
  U = t.O({
    name: t.N().min(1),
    repositories: t.h(qt),
    install_script: t.N().optional(),
    cwd: t.N().startsWith(`/`).optional(),
    start_skill: t.N().optional(),
    network_policy: Jt,
    share_settings: t.d([`private`, `workspace`]),
  }),
  en = U.pick({ name: !0, share_settings: !0 })
    .partial()
    .strict()
    .refine((e) => e.name != null || e.share_settings != null),
  tn = t
    .O({
      base_version_id: t.N().min(1),
      expected_revision: t.D().int().nonnegative().optional(),
      vpn_connection_id: t.N().optional(),
      repositories: t.h(qt).optional(),
      install_script: t.N().optional(),
      cwd: t.N().startsWith(`/`).optional(),
      start_skill: t.N().optional(),
      network_policy: Jt.optional(),
      runtime_requirements: t.h(Qt.omit({ error: !0 }).strict()).optional(),
      pending_runtime_requirements: t.h($t.strict()).optional(),
      outbound_identity_requirements: Tt.optional(),
      secrets: t
        .h(
          Zt.omit({ error: !0 })
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
  nn = U.extend({
    id: t.N().min(1),
    is_owner: t._().optional(),
    version_id: t.N().min(1),
    vpn_connection_id: t.N().min(1).nullish(),
    tcp_network_access: Yt.nullish(),
    status: t.N(),
    version_revision: t.D().int().positive().optional(),
    latest_ready_version_id: t.N().nullish(),
    environment_id: t.N().min(1).nullish(),
    thread_id: t.N().min(1).nullish(),
    onboarding_skill: t.N().min(1).nullish(),
    secrets: t.h(Zt).optional(),
    runtime_requirements: t.h(Qt).optional(),
    outbound_identity_requirements: t.h(Ct).optional(),
    draft: t
      .O({
        id: t.N().min(1),
        base_version_id: t.N().min(1),
        vpn_connection_id: t.N().min(1).nullish(),
        tcp_network_access: Yt.nullish(),
        revision: t.D().int().nonnegative(),
        repositories: t.h(qt),
        install_script: t.N().optional(),
        cwd: t.N().startsWith(`/`).optional(),
        start_skill: t.N().optional(),
        network_policy: Jt,
        secrets: t.h(Zt),
        runtime_requirements: t.h(Qt).optional(),
        pending_runtime_requirements: t.h($t).optional(),
        outbound_identity_requirements: t.h(Ct).optional(),
      })
      .nullish(),
  }),
  rn = t
    .O({
      data: t.h(
        t.O({
          id: t.N().min(1),
          name: t.N(),
          is_owner: t._().optional(),
          share_settings: U.shape.share_settings,
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
    }));
t.O({
  id: t.N(),
  name: t.N(),
  isOwner: t._().optional(),
  shareSettings: U.shape.share_settings,
  repositories: t.h(t.O({ repositoryId: t.N(), ref: t.N() })),
  versionId: t.N(),
  threadId: t.N().nullish(),
  versionRevision: t.D().optional(),
  status: t.N(),
  latestReadyVersionId: t.N().nullable(),
});
var an = t.O({ id: t.N().min(1), name: t.N(), repositories: t.h(t.O({ repositoryId: t.N() })) }),
  on = t
    .O({
      data: t.h(t.O({ id: t.N().min(1), name: t.N(), repository_ids: t.h(t.N()) })),
      next_cursor: t.N().nullable(),
    })
    .transform((e) => ({
      data: e.data.map((e) => ({
        id: e.id,
        name: e.name,
        repositories: e.repository_ids.map((e) => ({ repositoryId: e })),
      })),
      nextCursor: e.next_cursor,
    })),
  sn = t.O({
    accountId: t.N(),
    userId: t.N(),
    data: t.h(an).optional(),
    refreshedAt: t.D(),
    reconciledAt: t.D(),
    revision: t.D(),
    retryAt: t.D(),
    failures: t.D(),
  }),
  W = t.N().regex(/^[A-Za-z0-9_~-]+$/),
  cn = t.O({ accountId: t.N().min(1), userId: t.N().min(1), configId: W, method: t.w(`DELETE`) }),
  ln = t.I([
    t.O({
      accountId: t.N().min(1),
      method: t.w(`POST`),
      userId: t.N().min(1).optional(),
      body: t.I([
        t.M({ legacy_environment_id: t.N().min(1), start_onboarding: t.w(!0) }),
        U.extend({ start_onboarding: t._().optional() }),
      ]),
    }),
    t.O({
      accountId: t.N().min(1),
      method: t.w(`POST`),
      configId: W,
      draftId: W.optional(),
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
      configId: W,
      draftId: W.optional(),
    }),
    t
      .O({
        accountId: t.N().min(1),
        method: t.w(`PATCH`),
        userId: t.N().min(1).optional(),
        configId: W,
        draftId: W.optional(),
        body: t.I([tn, en]),
      })
      .refine((e) => e.draftId == null || !(`base_version_id` in e.body) || e.body.expected_revision != null),
  ]),
  un = t.O({
    accountId: t.N().min(1),
    userId: t.N().min(1),
    configId: W,
    method: t.w(`POST`),
    body: t.M({ start_thread: t._() }).optional(),
  }),
  dn = t.O({ draft_id: W, environment_id: t.N().min(1), thread_id: t.N().min(1).nullable() }),
  fn = t.O({
    accountId: t.N().min(1),
    userId: t.N().min(1),
    configId: W,
    draftId: W.optional(),
    method: t.w(`POST`),
    body: t.M({ expected_revision: t.D().int().nonnegative(), idempotency_key: t.N().min(1).max(128) }),
  }),
  pn = t.O({ accountId: t.N().min(1), userId: t.N().min(1), operationId: t.N().min(1) }),
  mn = t.O({
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
  hn = t.O({
    type: t.d([`env-var`, `network-secret`]),
    name: t
      .N()
      .max(256)
      .regex(/^[A-Za-z_][A-Za-z0-9_]*$/),
  }),
  G = t.y(`type`, [
    t.O({ type: t.w(`all_environment_configs`) }),
    t.O({ type: t.w(`environment_config_ids`), ids: t.h(t.N().min(1)).min(1).max(100) }),
  ]),
  gn = t.y(`method`, [
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
              t.M({ env_var: t.N().min(1), target: G.optional(), name: t.N().min(1), value: t.N().min(1) }),
              t
                .M({
                  id: t.N().min(1),
                  name: t.N().min(1).optional(),
                  value: t.N().min(1).optional(),
                  env_var: t.N().min(1).optional(),
                  target: G.optional(),
                })
                .refine(
                  (e) => (e.name != null || e.value != null) && (e.target == null || e.env_var != null),
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
      body: t.O({ namespace: t.d([`sensitive`, `not_sensitive`]).optional(), ids: t.h(t.N().min(1)).min(1) }),
    }),
  ]),
  _n = t.O({ id: t.N().min(1), name: t.N(), env_var: t.N().nullish(), target: G.nullish() }),
  vn = t.O({ secrets: t.h(_n), next_cursor: t.N().nullable() }),
  yn = t.O({
    secrets: t.h(
      t
        .O({
          id: t.N().min(1).optional(),
          name: t.N(),
          env_var: t.N().nullish(),
          target: G.nullish(),
          error: t.O({ code: t.N() }).optional(),
        })
        .refine((e) => e.id != null || e.error != null),
    ),
  }),
  bn = t.M({ accountId: t.N().min(1), userId: t.N().min(1), id: t.N().regex(/^assec_[A-Za-z0-9_~-]+$/) }),
  xn = t.O({ value: t.N() }),
  Sn = t.O({
    accountId: t.N().min(1),
    userId: t.N().min(1),
    namespace: t.d([`sensitive`, `not_sensitive`]),
    names: t
      .h(t.N().refine((e) => St(e) == null))
      .min(1)
      .max(100),
    target: G,
  }),
  Cn = t.O({
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
  wn = t.O({ id: t.N().min(1), name: t.N() }),
  Tn = t.y(`method`, [
    t.O({
      accountId: t.N().min(1),
      userId: t.N().min(1),
      configId: W,
      draftId: t.N().min(1).optional(),
      method: t.w(`GET`),
    }),
    t.O({
      accountId: t.N().min(1),
      userId: t.N().min(1),
      configId: W,
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
  En = t.O({
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
  Dn = t.y(`outcome`, [
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
({ ...t.j(t.N(), t.S()).parse(t.U(Dn)) });
var On = `electron-conversational-onboarding-completions-v1`,
  kn = t.h(
    t.O({
      accountId: t.N().min(1),
      userId: t.N().min(1),
      hostId: t.w(`local`),
      conversationId: t.N().min(1),
      selectedTask: t.N().min(1),
      isRevert: t._().optional(),
      completion: Dn.nullable(),
    }),
  ),
  An = e.t((e, t) => {
    function n(e, t, n) {
      return (e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e);
    }
    t.exports = n;
  }),
  jn = e.t((e, t) => {
    var n = An(),
      r = a.r();
    function i(e, t, i) {
      return (
        i === void 0 && ((i = t), (t = void 0)),
        i !== void 0 && ((i = r(i)), (i = i === i ? i : 0)),
        t !== void 0 && ((t = r(t)), (t = t === t ? t : 0)),
        n(r(e), t, i)
      );
    }
    t.exports = i;
  }),
  Mn = e.a(jn()),
  Nn = [
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
  Pn = [
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
  Fn = t.D().min(0).max(1),
  In = t.O({ x: t.I([Fn, t.d(Nn)]), y: t.I([Fn, t.d(Pn)]) });
function Ln(e, t) {
  let n = Rn(e, t);
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
function Rn(e, t) {
  return { x: e.x + (e.width - t.width) / 2, y: e.y + e.height / 4, width: t.width, height: e.height / 2 };
}
function zn(e, t, n) {
  let r = Un(e.x, t.x, n.x, t);
  return { x: r === 0 || r === 4 ? 2 : r, y: Un(e.y, t.y, n.y, t) };
}
function Bn(e, t) {
  return { x: e.x, y: e.y, width: Math.max(0, e.width - t.width), height: Math.max(0, e.height - t.height) };
}
function Vn(e, t, n) {
  return { x: Nn[n.x] ?? Wn(e.x, t.x, t.width), y: Pn[n.y] ?? Wn(e.y, t.y, t.height) };
}
function Hn(e, t, n) {
  return {
    x: (0, Mn.default)(
      typeof e.x == `number` ? t.x + e.x * t.width : n.x[Nn.indexOf(e.x)],
      t.x,
      t.x + t.width,
    ),
    y: (0, Mn.default)(
      typeof e.y == `number` ? t.y + e.y * t.height : n.y[Pn.indexOf(e.y)],
      t.y,
      t.y + t.height,
    ),
  };
}
function Un(e, t, n, r) {
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
function Wn(e, t, n) {
  return n === 0 ? 0.5 : Math.max(0, Math.min(1, (e - t) / n));
}
var Gn = `electron-managed-worktree-archives`,
  Kn = {
    id: t.N(),
    owner: t.N(),
    hostId: t.N(),
    phase: t.d([`detaching`, `queued`, `running`, `reattaching`, `failed`, `completed`]),
  },
  qn = t.h(
    t.I([
      t.O({
        ...Kn,
        kind: t.w(`attached`).default(`attached`),
        threadId: t.N(),
        root: t.N().transform(n.In),
        cwd: t.N(),
        fromModel: t.w(!0).optional(),
        archivedWithThread: t.w(!0).optional(),
        silent: t._().optional(),
        outcome: t.d([`archived`, `retained`, `unsupported`, `failed`]).optional(),
        notified: t.w(!0).optional(),
        pullRequestIdentityKeys: t.h(t.N()),
      }),
      t.O({
        ...Kn,
        kind: t.w(`thread`),
        threadId: t.N(),
        cwd: t.N(),
        notBefore: t.D(),
        silent: t._().optional(),
      }),
      t.O({ ...Kn, kind: t.w(`automatic`), revision: t.D() }),
    ]),
  ),
  Jn = `electron-mini-orbit-onboarding-account-ids`,
  Yn = { [Jn]: t.t.array(t.t.string()) },
  Xn = `electron-thread-read-state-v1`,
  Zn = `unread-thread-ids-by-host-v1`,
  Qn = t.j(t.N(), t.h(t.N().min(1))),
  $n = t.O({
    version: t.w(1),
    unreadByIdentity: t.j(t.N(), Qn),
    legacyMigration: t
      .O({
        identityKey: t.N(),
        unreadThreadIdsByHostId: Qn,
        adoptedHostIds: t.j(t.N(), t.N()),
        cleared: t._().optional(),
      })
      .optional(),
  }),
  K = `electron-persisted-atom-state`,
  er = `electron-browser-auth-operations`,
  tr = `electron-initial-follow-up-queue-mode`,
  nr = `electron-custom-runtime-state`,
  rr = `electron-custom-runtime-outbox-state`,
  ir = `electron-worktree-cleanup-buffer-start-ms`,
  ar = `electron-avatar-overlay-open`,
  or = `electron-avatar-overlay-bounds`,
  sr = `electron-remote-hosted-pip-content-max-display-size`,
  cr = `electron-remote-hosted-pip-task-visibility-state`,
  lr = `electron-remote-control-client-enrollments`,
  ur = `electron-local-remote-control-environment-id`,
  dr = `electron-local-remote-control-installation-id`,
  fr = `electron-automations-installation-id`,
  pr = `electron-automations-habitat-migration-state`,
  mr = `electron-chrome-extension-sync-managed-plugin-ids`,
  hr = `electron-browser-extension-recently-used`,
  gr = `electron-mac-push-deregistration-token`,
  _r = `electron-internal-update-cdn-enabled`,
  vr = `electron-prefer-mxc-enabled`,
  yr = `electron-windows-core-runtime-frameworks-enabled`,
  br = `electron-windows-primary-runtime-frameworks-enabled`,
  xr = `electron-legacy-chrome-policy-fallback-owner`,
  Sr = `electron-desktop-otraces-sample-rate`,
  Cr = `electron-browser-download-history`,
  wr = `electron-completed-local-data-migration-ids`,
  Tr = `electron-remote-control-config-migration-completed`,
  Er = `electron-codex-app-config-applied-remote-declarations`,
  Dr = 500,
  Or = `environment-catalog-cache-v2`,
  kr = [100, 200, 400],
  Ar = o.a(`global-state`),
  jr = t.t.object({
    left: t.t.number(),
    top: t.t.number(),
    width: t.t.number().positive(),
    height: t.t.number().positive(),
  }),
  Mr = t.t.object({
    x: t.t.number(),
    y: t.t.number(),
    width: t.t.number().positive(),
    height: t.t.number().positive(),
  }),
  Nr = t.t.enum([`top-start`, `top-end`, `bottom-start`, `bottom-end`]),
  Pr = t.t.enum([`shown`, `hidden`]),
  Fr = t.t
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
  Ir = t.t.union([Fr, t.t.object({ downloads: Fr, version: t.t.literal(1) })]),
  Lr = t.t.object({
    isFreelyPositioned: t.t.boolean().optional(),
    snapPosition: t.t
      .enum([`top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`])
      .nullable()
      .optional(),
    x: t.t.number(),
    y: t.t.number(),
    width: t.t.number().positive().optional(),
    height: t.t.number().positive().optional(),
    anchor: Mr.optional(),
    displayBounds: Mr.optional(),
    displayId: t.t.number().optional(),
    mascot: jr.optional(),
    placement: Nr.optional(),
    tray: jr.nullable().optional(),
  }),
  Rr = zr({
    "latex-project-main-files": t.t
      .array(t.t.object({ root: t.t.string(), mainFile: t.t.string() }))
      .max(100),
    "hotkey-window-home-placement": In,
    [On]: kn,
    [Xn]: $n,
    [Gn]: qn,
    "electron-main-window-bounds": t.t.object({
      x: t.t.number(),
      y: t.t.number(),
      width: t.t.number(),
      height: t.t.number(),
      isMaximized: t.t.boolean().optional(),
    }),
    [ar]: t.t.boolean(),
    ...Yn,
    [or]: Lr.extend({
      byDisplayId: t.t.record(t.t.string(), Lr).optional(),
      byResolution: t.t.record(t.t.string(), Lr).optional(),
    }),
    [sr]: t.t.number().positive(),
    [cr]: t.t.record(t.t.string(), Pr),
    [K]: t.t.record(t.t.string(), t.t.unknown()),
    [Or]: sn,
    [tr]: t.t.enum([`queue`, `steer`]),
    [nr]: t.t.unknown(),
    [rr]: t.t.array(
      t.t.object({
        callId: t.t.string(),
        conversationId: t.t.string().transform(n.Cs),
        message: t.t.string(),
        sentAtMs: t.t.number(),
        turnId: t.t.string(),
      }),
    ),
    [lr]: t.t.record(
      t.t.string(),
      t.t.object({
        accountUserId: t.t.string(),
        algorithm: t.t.literal(`ecdsa_p256_sha256`),
        clientId: t.t.string(),
        keyId: t.t.string(),
        protectionClass: t.t.enum([`hardware_secure_enclave`, `hardware_tpm`, `os_protected_nonextractable`]),
        publicKeySpkiDerBase64: t.t.string(),
      }),
    ),
    [ur]: t.t.string(),
    [dr]: t.t.string(),
    [fr]: t.t.uuid(),
    [pr]: t.t.record(t.t.string(), t.t.enum([`declined`, `in_progress`, `complete`])),
    [mr]: t.t.array(t.t.string()),
    [hr]: t.t.record(t.t.string(), t.t.array(t.t.string())),
    [gr]: t.t.union([
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
    [_r]: t.t.boolean(),
    [vr]: t.t.boolean(),
    [yr]: t.t.boolean(),
    [br]: t.t.boolean(),
    [xr]: t.t.object({ accountId: t.t.string(), userId: t.t.string() }),
    [Sr]: t.t.number().min(0).max(1),
    [Cr]: Ir,
    [wr]: t.t.array(t.t.string()),
    [Tr]: t.t.boolean(),
    [Er]: t.t.record(t.t.string(), t.t.array(t.t.string())),
    [ir]: t.t.number(),
    [er]: _t,
  });
function zr(e) {
  let t = Object.entries(e).map(([e, t]) => [e, t.optional()]);
  return Object.fromEntries(t);
}
var Br = class {
    logger = o.a(`global-state`);
    state;
    changeListeners = new Map();
    filePath;
    persistDebounced;
    persistScheduledForAtoms = !1;
    persistScheduledForCustomRuntime = !1;
    persistScheduled = !1;
    persistQueued = Promise.resolve();
    archivesPersisted = !1;
    constructor(e) {
      ((this.filePath = e),
        (this.state = Ur(this.filePath)),
        (this.persistDebounced = m(() => {
          this.persistScheduledForAtoms &&
            ((this.persistScheduledForAtoms = !1), this.queueGlobalStatePersistence());
        }, Dr)));
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
      return t !== void 0 && t != null ? t : (n.bs(e) ?? null);
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
            let n = this.getStored(e),
              r = t(n ?? null),
              i = e === Gn;
            if (i && this.archivesPersisted && (0, se.default)(n, r)) return;
            i && (this.archivesPersisted = !1);
            let a = new Map(this.state);
            r === void 0 ? a.delete(e) : a.set(e, r);
            let o = Gr(a);
            (Yr(this.filePath, o), r === void 0 ? this.state.delete(e) : this.state.set(e, r));
            try {
              (Yr(`${this.filePath}.bak`, o), i && (this.archivesPersisted = !0));
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
      (this.state.delete(e), this.persistForKey(e), this.changeListeners.get(e)?.forEach((e) => e()));
    }
    flush() {
      return this.flushWith(Kr);
    }
    flushOrThrow() {
      return this.flushWith(qr);
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
      if (
        (e === `electron-managed-worktree-archives` && (this.archivesPersisted = !1),
        e === `electron-persisted-atom-state`)
      ) {
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
          .then(() => ((this.persistScheduled = !1), Kr(this.filePath, this.state)))));
    }
  },
  Vr = new Set(Object.keys(Rr));
function Hr(e) {
  return Vr.has(e);
}
function Ur(e) {
  if (!(0, l.existsSync)(e)) return new Map();
  let t = Wr(e);
  if (t != null) return t;
  let n = Wr(`${e}.bak`);
  return n == null
    ? new Map()
    : (Ar().warning(`Loaded global state from backup`, { safe: {}, sensitive: {} }), n);
}
function Wr(e) {
  if (!(0, l.existsSync)(e)) return null;
  try {
    let t = (0, l.readFileSync)(e, `utf8`),
      n = JSON.parse(t);
    if (!n || typeof n != `object`) throw Error(`Expected global state to be a JSON object`);
    let r = [];
    for (let [e, t] of Object.entries(n)) {
      if (Hr(e) && Rr[e]?.safeParse(t).success === !1) {
        Ar().warning(`Dropping invalid global state for key`, { safe: { key: e }, sensitive: {} });
        continue;
      }
      r.push([e, t]);
    }
    return new Map(r);
  } catch (e) {
    return (Ar().warning(`Failed to load global state`, { safe: {}, sensitive: { error: e } }), null);
  }
}
function Gr(e) {
  let t = {};
  for (let [n, r] of e.entries()) r !== void 0 && (t[n] = r);
  return JSON.stringify(t);
}
async function Kr(e, t) {
  try {
    await qr(e, t);
  } catch (e) {
    Ar().warning(`Failed to persist global state`, { safe: {}, sensitive: { error: e } });
  }
}
async function qr(e, t) {
  let n = Gr(t);
  (await Xr(e, n), await Xr(`${e}.bak`, n));
}
function Jr(e) {
  return (0, u.join)((0, u.dirname)(e), `.${(0, u.basename)(e)}.tmp-${Date.now()}-${(0, c.randomUUID)()}`);
}
function Yr(e, t) {
  let n = Jr(e);
  try {
    ((0, l.writeFileSync)(n, t, `utf8`), (0, l.renameSync)(n, e));
  } catch (e) {
    throw ((0, l.rmSync)(n, { force: !0 }), e);
  }
}
async function Xr(e, t) {
  let n = Jr(e);
  try {
    await (0, f.writeFile)(n, t, `utf8`);
    for (let t = 0; ; t += 1)
      try {
        await (0, f.rename)(n, e);
        return;
      } catch (e) {
        let n = kr[t];
        if (
          process.platform !== `win32` ||
          n == null ||
          !(e instanceof Error) ||
          !(`code` in e) ||
          (e.code !== `EPERM` && e.code !== `EACCES` && e.code !== `EBUSY`)
        )
          throw e;
        await (0, p.setTimeout)(n);
      }
  } catch (e) {
    throw (await (0, f.rm)(n, { force: !0 }), e);
  }
}
var Zr = `local`,
  Qr = { id: Zr, display_name: `Local`, kind: `local` },
  $r = t.j(t.N(), t.N()),
  q = null,
  ei = 0;
async function ti(e, t) {
  let n = ++ei,
    r = t;
  try {
    if (((r ??= d.app.getLocale()), q?.repoRoot === e && q.locale === r)) return;
    let t = await ri.load(e, r);
    if (n !== ei) return;
    let i = q?.nativeIntl;
    (i?.replaceMessagesFrom(t), (q = { repoRoot: e, locale: r, nativeIntl: i ?? t }));
  } catch {
    if (n !== ei) return;
    let e = ri.createDefault(),
      t = q?.nativeIntl;
    (t?.replaceMessagesFrom(e), (q = { repoRoot: null, locale: r ?? `en`, nativeIntl: t ?? e }));
  }
}
function ni() {
  if (q == null) throw Error(`NativeIntl has not been configured.`);
  return q.nativeIntl;
}
var ri = class e {
    messages;
    constructor(e) {
      this.messages = e;
    }
    static async load(t, n = d.app.getLocale()) {
      let r = n.trim().replace(/_/g, `-`),
        [i, a] = r.toLowerCase().split(`-`),
        o = a == null ? i : `${i}-${a.toUpperCase()}`,
        s = i ? new Intl.Locale(i).maximize().region : void 0,
        c = d.app.isPackaged
          ? (0, u.join)(d.app.getAppPath(), `native-menu-locales`)
          : (0, u.join)(t, `webview`, `src`, `locales`),
        l = Array.from(new Set([r, o, h[i], s == null ? void 0 : `${i}-${s}`, i]))
          .filter((e) => e != null)
          .map((e) => (0, u.join)(c, `${e}.json`)),
        p = await Promise.all(
          l.map(async (e) => {
            try {
              return $r.parse(JSON.parse(await (0, f.readFile)(e, `utf-8`)));
            } catch (e) {
              if (e instanceof Error && `code` in e && e.code === `ENOENT`) return null;
              throw e;
            }
          }),
        );
      return new e(p.find((e) => e != null) ?? null);
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
  ii = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i,
  ai = class e extends Date {
    #e = !1;
    #t = !1;
    #n = null;
    constructor(e) {
      let t = !0,
        n = !0,
        r = `Z`;
      if (typeof e == `string`) {
        let i = e.match(ii);
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
function oi(e, t) {
  let n = e.slice(0, t).split(/\r\n|\n|\r/g);
  return [n.length, n.pop().length + 1];
}
function si(e, t, n) {
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
var J = class extends Error {
    line;
    column;
    codeblock;
    constructor(e, t) {
      let [n, r] = oi(t.toml, t.ptr),
        i = si(t.toml, n, r);
      (super(`Invalid TOML document: ${e}\n\n${i}`, t),
        (this.line = n),
        (this.column = r),
        (this.codeblock = i));
    }
  },
  ci = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
  li = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
  ui = /^[+-]?0[0-9_]/;
function di(e, t) {
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
      throw new J(`control characters are not allowed in strings`, { toml: e, ptr: l });
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
          if (r < 0) throw new J(`invalid non-hex character in unicode escape`, { toml: e, ptr: l + 1 });
          t = (t << 4) | r;
        }
        if (t < 0 || t > 1114111 || (t >= 55296 && t <= 57343))
          throw new J(`invalid unicode escape`, { toml: e, ptr: l });
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
        else throw new J(`unrecognized escape sequence`, { toml: e, ptr: l });
        ((s = l + 1), (c = 0));
      }
    } else if (n !== ` ` && n !== `	`) {
      if (c === 2)
        throw new J(`invalid escape: only line-ending whitespace may be escaped`, { toml: e, ptr: s });
      ((c = +(!i && n === `\\`)), (s = l));
    }
  throw new J(`unfinished string`, { toml: e, ptr: t });
}
function fi(e, t, n, r) {
  if (e === `true`) return !0;
  if (e === `false`) return !1;
  if (e === `-inf`) return -1 / 0;
  if (e === `inf` || e === `+inf`) return 1 / 0;
  if (e === `nan` || e === `+nan` || e === `-nan`) return NaN;
  if (e === `-0`) return r ? 0n : 0;
  let i = ci.test(e);
  if (i || li.test(e)) {
    if (ui.test(e)) throw new J(`leading zeroes are not allowed`, { toml: t, ptr: n });
    e = e.replace(/_/g, ``);
    let a = +e;
    if (isNaN(a)) throw new J(`invalid number`, { toml: t, ptr: n });
    if (i) {
      if ((i = !Number.isSafeInteger(a)) && !r)
        throw new J(`integer value cannot be represented losslessly`, { toml: t, ptr: n });
      (i || r === !0) && (a = BigInt(e));
    }
    return a;
  }
  let a = new ai(e);
  if (!a.isValid()) throw new J(`invalid value`, { toml: t, ptr: n });
  return a;
}
function pi(e, t = 0, n = e.length) {
  let r = e.indexOf(
    `
`,
    t,
  );
  return (e[r - 1] === `\r` && r--, r <= n ? r : -1);
}
function mi(e, t) {
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
      throw new J(`control characters are not allowed in comments`, { toml: e, ptr: t });
  }
  return e.length;
}
function Y(e, t, n, r) {
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
    t = mi(e, t);
  }
  return t;
}
function hi(e, t, n, r, i = !1) {
  if (!r) return ((t = pi(e, t)), t < 0 ? e.length : t);
  for (let a = t; a < e.length; a++) {
    let t = e[a];
    if (t === `#`) a = pi(e, a);
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
  throw new J(`cannot find end of structure`, { toml: e, ptr: t });
}
function gi(e, t, n) {
  let r = e.slice(t, n),
    i = r.indexOf(`#`);
  return (i > -1 && (mi(e, i), (r = r.slice(0, i))), [r.trimEnd(), i]);
}
function _i(e, t, n, r, i) {
  if (r === 0) throw new J(`document contains excessively nested structures. aborting.`, { toml: e, ptr: t });
  let a = e[t];
  if (a === `[` || a === `{`) {
    let [o, s] = a === `[` ? xi(e, t, r, i) : bi(e, t, r, i);
    if (n) {
      if (((s = Y(e, s)), e[s] === `,`)) s++;
      else if (e[s] !== n) throw new J(`expected comma or end of structure`, { toml: e, ptr: s });
    }
    return [o, s];
  }
  if (a === `"` || a === `'`) {
    let [r, i] = di(e, t);
    if (n) {
      if (
        ((i = Y(e, i)),
        e[i] &&
          e[i] !== `,` &&
          e[i] !== n &&
          e[i] !==
            `
` &&
          e[i] !== `\r`)
      )
        throw new J(`unexpected character encountered`, { toml: e, ptr: i });
      e[i] === `,` && i++;
    }
    return [r, i];
  }
  let o = hi(e, t, `,`, n),
    s = gi(e, t, o - +(e[o - 1] === `,`));
  if (!s[0]) throw new J(`incomplete key-value declaration: no value specified`, { toml: e, ptr: t });
  return (n && s[1] > -1 && ((o = Y(e, t + s[1])), e[o] === `,` && o++), [fi(s[0], e, t, i), o]);
}
var vi = /^[a-zA-Z0-9-_]+[ \t]*$/;
function yi(e, t, n = `=`) {
  let r = t - 1,
    i = [],
    a = e.indexOf(n, t);
  if (a < 0) throw new J(`incomplete key-value: cannot find end of key`, { toml: e, ptr: t });
  do {
    let o = e[(t = ++r)];
    if (o !== ` ` && o !== `	`) {
      if (o === `"` || o === `'`) {
        if (o === e[t + 1] && o === e[t + 2])
          throw new J(`multiline strings are not allowed in keys`, { toml: e, ptr: t });
        let [s, c] = di(e, t);
        r = e.indexOf(`.`, c);
        let l = e.slice(c, r < 0 || r > a ? a : r),
          u = pi(l);
        if (u > -1) throw new J(`newlines are not allowed in keys`, { toml: e, ptr: t + r + u });
        if (l.trimStart()) throw new J(`found extra tokens after the string part`, { toml: e, ptr: c });
        if (a < c && ((a = e.indexOf(n, c)), a < 0))
          throw new J(`incomplete key-value: cannot find end of key`, { toml: e, ptr: t });
        i.push(s);
      } else {
        r = e.indexOf(`.`, t);
        let n = e.slice(t, r < 0 || r > a ? a : r);
        if (!vi.test(n))
          throw new J(`only letter, numbers, dashes and underscores are allowed in keys`, {
            toml: e,
            ptr: t,
          });
        i.push(n.trimEnd());
      }
    }
  } while (r + 1 && r < a);
  return [i, Y(e, a + 1, !0, !0)];
}
function bi(e, t, n, r) {
  let i = {},
    a = new Set(),
    o;
  for (t++; (o = e[t++]) !== `}` && o;)
    if (o === `,`) throw new J(`expected value, found comma`, { toml: e, ptr: t - 1 });
    else if (o === `#`) t = mi(e, t);
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
        [l, u] = yi(e, t - 1);
      for (let n = 0; n < l.length; n++) {
        if (
          (n && (s = c ? s[o] : (s[o] = {})),
          (o = l[n]),
          (c = Object.hasOwn(s, o)) && (typeof s[o] != `object` || a.has(s[o])))
        )
          throw new J(`trying to redefine an already defined value`, { toml: e, ptr: t });
        !c &&
          o === `__proto__` &&
          Object.defineProperty(s, o, { enumerable: !0, configurable: !0, writable: !0 });
      }
      if (c) throw new J(`trying to redefine an already defined value`, { toml: e, ptr: t });
      let [d, f] = _i(e, u, `}`, n - 1, r);
      (a.add(d), (s[o] = d), (t = f));
    }
  if (!o) throw new J(`unfinished table encountered`, { toml: e, ptr: t });
  return [i, t];
}
function xi(e, t, n, r) {
  let i = [],
    a;
  for (t++; (a = e[t++]) !== `]` && a;)
    if (a === `,`) throw new J(`expected value, found comma`, { toml: e, ptr: t - 1 });
    else if (a === `#`) t = mi(e, t);
    else if (
      a !== ` ` &&
      a !== `	` &&
      a !==
        `
` &&
      a !== `\r`
    ) {
      let a = _i(e, t - 1, `]`, n - 1, r);
      (i.push(a[0]), (t = a[1]));
    }
  if (!a) throw new J(`unfinished array encountered`, { toml: e, ptr: t });
  return [i, t];
}
function Si(e, t, n, r) {
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
function Ci(e, { maxDepth: t = 1e3, integersAsBigInt: n } = {}) {
  let r = {},
    i = {},
    a = r,
    o = i;
  for (let s = Y(e, 0); s < e.length;) {
    if (e[s] === `[`) {
      let t = e[++s] === `[`,
        n = yi(e, (s += +t), `]`);
      if (t) {
        if (e[n[1] - 1] !== `]`) throw new J(`expected end of table declaration`, { toml: e, ptr: n[1] - 1 });
        n[1]++;
      }
      let c = Si(n[0], r, i, t ? 2 : 1);
      if (!c) throw new J(`trying to redefine an already defined table or value`, { toml: e, ptr: s });
      ((o = c[2]), (a = c[1]), (s = n[1]));
    } else {
      let r = yi(e, s),
        i = Si(r[0], a, o, 0);
      if (!i) throw new J(`trying to redefine an already defined table or value`, { toml: e, ptr: s });
      let c = _i(e, r[1], void 0, t, n);
      ((i[1][i[0]] = c[0]), (s = c[1]));
    }
    if (
      ((s = Y(e, s, !0)),
      e[s] &&
        e[s] !==
          `
` &&
        e[s] !== `\r`)
    )
      throw new J(`each key-value declaration must be followed by an end-of-line`, { toml: e, ptr: s });
    s = Y(e, s);
  }
  return r;
}
var X = o.a(`settings-store`),
  wi = `enter-behavior`,
  Ti = `electron:onboarding-projectless-completed`,
  Ei = t.t.lazy(() =>
    t.t.union([
      t.t.string(),
      t.t.number(),
      t.t.boolean(),
      t.t.null(),
      t.t.array(Ei),
      t.t.record(t.t.string(), Ei),
    ]),
  ),
  Di = t.t.object({ desktop: t.t.record(t.t.string(), t.t.unknown()).optional() }).loose(),
  Oi = class {
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
        (this.desktopConfig = Ai(this.filePath)),
        (this.state = Mi(this.desktopConfig)),
        ki(this.state, this.pendingLegacyMigrations, this.globalState));
    }
    getStateFilePath() {
      return this.filePath;
    }
    getDesktopConfig() {
      return this.desktopConfig;
    }
    async captureInitialFollowUpQueueMode() {
      let e = this.globalState.getStored(tr);
      if (e != null) return e;
      let t = this.globalState.getStored(K)?.[Ti] === !0,
        r = Object.keys(this.globalState.getStored(n.ys.LOCAL_PROJECTS) ?? {}).length > 0,
        i = t || r ? `queue` : `steer`;
      return (this.globalState.set(tr, i), await this.globalState.flush(), i);
    }
    async initialize(e) {
      let t = await this.captureInitialFollowUpQueueMode(),
        r = new Map([...this.changeListeners.keys()].map((e) => [e, this.get(e)]));
      ((this.configClient = e), (this.desktopConfig = e.config.desktop ?? {}));
      let i = Mi(this.desktopConfig),
        a = new Set();
      for (let e of n.I)
        if (!this.pendingWrites.has(e.key)) {
          if (i.has(e.key)) {
            (this.state.set(e.key, i.get(e.key)), this.pendingLegacyMigrations.delete(e.key) && a.add(e.key));
            continue;
          }
          this.pendingLegacyMigrations.has(e.key) || this.state.delete(e.key);
        }
      this.initializeFollowUpQueueMode(t);
      for (let [e, t] of r) Object.is(t, this.get(e)) || this.notifyChangeListeners(e);
      (Pi(a, this.globalState), await this.persistPendingSettings());
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
      return this.get(e) ?? n.M(e).default;
    }
    set(e, t) {
      let r = this.get(e),
        i = n.N(e).parse(t);
      (this.state.set(e, i),
        (this.desktopConfig[e] = _(n.N(e), i)),
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
      let t = n.H.followUpQueueMode.key;
      this.state.has(t) ||
        (this.state.set(t, e), (this.desktopConfig[t] = _(n.N(t), e)), this.pendingWrites.set(t, e));
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
                      let r = _(n.N(e), t);
                      return { keyPath: `desktop.${e}`, mergeStrategy: `replace`, value: r };
                    }),
                  });
                  for (let [e, n] of t)
                    this.pendingLegacyMigrations.get(e) === n && this.pendingLegacyMigrations.delete(e);
                  for (let [e, t] of r) this.pendingWrites.get(e) === t && this.pendingWrites.delete(e);
                  Pi(new Set(t.keys()), this.globalState);
                } catch (e) {
                  X().warning(`Failed to persist desktop settings`, { safe: {}, sensitive: { error: e } });
                }
            })),
        this.persistQueued
      );
    }
  };
function ki(e, t, r) {
  let i = r.getStored(K);
  for (let a of n.I) {
    if (e.has(a.key)) continue;
    let o = Ni(a, r, i);
    if (o === void 0) continue;
    let s = n.N(a.key).safeParse(o);
    if (!s.success) {
      X().warning(`Dropping invalid migrated setting`, { safe: { key: a.key }, sensitive: {} });
      continue;
    }
    (e.set(a.key, s.data), t.set(a.key, s.data));
  }
}
function Ai(e) {
  if (!(0, l.existsSync)(e)) return {};
  try {
    return ji(Di.parse(Ci((0, l.readFileSync)(e, `utf8`))).desktop ?? {});
  } catch (e) {
    return (
      X().warning(`Failed to load desktop settings from config.toml`, { safe: {}, sensitive: { error: e } }),
      {}
    );
  }
}
function ji(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    let e = Ei.safeParse(r);
    if (!e.success) {
      X().warning(`Dropping unsupported desktop config value`, { safe: { key: n }, sensitive: {} });
      continue;
    }
    t[n] = e.data;
  }
  return t;
}
function Mi(e) {
  let t = new Map();
  for (let [r, i] of Object.entries(e)) {
    let e = n.M(r);
    if (e == null) continue;
    let a = n.N(e.key).safeParse(te(n.N(e.key), i));
    if (!a.success) {
      X().warning(`Dropping invalid desktop setting`, { safe: { key: r }, sensitive: {} });
      continue;
    }
    t.set(e.key, a.data);
  }
  return t;
}
function Ni(e, t, r) {
  let { hostStorage: i } = e;
  switch (i.kind) {
    case `configuration`: {
      let a = t.getStored(i.key);
      return a === void 0
        ? e.key === n.H.composerEnterBehavior.key && r != null && Object.prototype.hasOwnProperty.call(r, wi)
          ? r[wi]
          : e.key === n.H.keepRemoteControlAwakeWhilePluggedIn.key
            ? t.getStored(n.H.preventSleepWhileRunning.key)
            : void 0
        : a;
    }
    case `global-state`:
      return t.getStored(i.key);
    case `persisted-atom`:
      return r == null || !Object.prototype.hasOwnProperty.call(r, i.key)
        ? void 0
        : e.key === n.z.defaultServiceTier.key
          ? n.tt(r)
          : r[i.key];
  }
}
function Pi(e, t) {
  if (e.size === 0) return;
  let r = t.getStored(K),
    i = r ? { ...r } : null,
    a = !1;
  for (let r of e) {
    let e = n.M(r);
    switch (
      (r === n.H.composerEnterBehavior.key &&
        i != null &&
        Object.prototype.hasOwnProperty.call(i, wi) &&
        (delete i[wi], (a = !0)),
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
  a && t.set(K, Object.keys(i ?? {}).length === 0 ? void 0 : (i ?? void 0));
}
var Fi = new Set(
    [
      `Your access token could not be refreshed because your refresh token has expired. Please log out and sign in again.`,
      `Your access token could not be refreshed because your refresh token was already used. Please log out and sign in again.`,
      `Your access token could not be refreshed because your refresh token was revoked. Please log out and sign in again.`,
      `Your access token could not be refreshed. Please log out and sign in again.`,
    ].map((e) => `failed to read configuration layers: ${e}`),
  ),
  Ii = t.O({ message: t.N() });
function Li(e) {
  let t = Ii.safeParse(e);
  return (
    n.xr(e) ||
    (e instanceof i.n && e.reason === `auth`) ||
    (t.success && Fi.has(t.data.message)) ||
    (e instanceof Error && e.cause != null && Li(e.cause))
  );
}
var Ri = new Set([
    `INIT_CWD`,
    `npm_command`,
    `npm_execpath`,
    `npm_node_execpath`,
    `PNPM_PACKAGE_NAME`,
    `PNPM_SCRIPT_SRC_DIR`,
  ]),
  zi = [`npm_config_`, `npm_lifecycle_`, `npm_package_`];
function Bi(e) {
  for (let t of Object.keys(e)) {
    let n = t.toLowerCase();
    (Ri.has(t) || zi.some((e) => n.startsWith(e))) && delete e[t];
  }
}
var Vi = 5e3,
  Hi = process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() ? process.env.CODEX_HOME : void 0,
  Z = null,
  Ui = null,
  Q = null;
async function Wi() {
  return Gi({ caller: `startup`, retryFailed: !1 });
}
async function Gi({ caller: e = `startup`, retryFailed: t = !0, timeoutMs: n = Vi } = {}) {
  if (Q?.status === `loaded` || (Q != null && !t)) return Yi(Q, e);
  if (Z != null && Ui != null && Ui >= n) return Z.then((t) => ({ ...t, caller: e }));
  let r = Ki(e, n);
  ((Z = r), (Ui = n));
  try {
    let e = await r;
    return (Xi(e), e);
  } finally {
    Z === r && ((Z = null), (Ui = null));
  }
}
async function Ki(e, t) {
  let r = Date.now();
  d.app.isPackaged || Bi(process.env);
  let a = new AbortController(),
    s = null,
    c = await Promise.race([
      i
        .Q({ interactive: !0, extraEnv: { [n.D]: `1` }, signal: a.signal })
        .then((e) => ({ status: `loaded`, userEnv: e }))
        .catch((e) => ({ status: `failed`, error: e })),
      new Promise((e) => {
        ((s = setTimeout(() => {
          (a.abort(), e({ status: `timed_out` }));
        }, t)),
          s.unref());
      }),
    ]).finally(() => {
      s != null && clearTimeout(s);
    });
  if (c.status === `loaded`)
    return (
      Object.assign(process.env, c.userEnv),
      Hi != null && (process.env.CODEX_HOME = Hi),
      d.app.isPackaged || Bi(process.env),
      { status: `loaded`, path: process.env.PATH ?? null, ...qi(r, e, t) }
    );
  let l =
    c.status === `timed_out`
      ? `Timed out after ${t}ms.`
      : c.error instanceof Error
        ? c.error.message
        : String(c.error);
  return (
    o
      .r()
      .warning(`Failed to load shell env`, {
        safe: {
          caller: e,
          durationMs: Date.now() - r,
          pathEntryCount: Ji(process.env.PATH ?? null),
          resultSource: `load`,
          status: c.status,
          timeoutMs: t,
        },
        sensitive: { detail: l, path: process.env.PATH ?? null },
      }),
    { status: c.status, detail: l, path: process.env.PATH ?? null, ...qi(r, e, t) }
  );
}
function qi(e, t, n) {
  let r = process.env.PATH ?? null;
  return { caller: t, durationMs: Date.now() - e, pathEntryCount: Ji(r), resultSource: `load`, timeoutMs: n };
}
function Ji(e) {
  return e == null || e === `` ? 0 : e.split(u.delimiter).length;
}
function Yi(e, t) {
  return { ...e, caller: t, resultSource: `cache` };
}
function Xi(e) {
  (Q?.status !== `loaded` || e.status === `loaded`) && (Q = e);
}
async function Zi() {
  let e = i.lt();
  if ((await (0, f.mkdir)(e, { recursive: !0 })) !== void 0)
    try {
      await (0, f.writeFile)((0, u.join)(e, `.desktop-created`), ``, { flag: `wx` });
    } catch (e) {
      if (e instanceof Error && `code` in e && e.code === `EEXIST`) return;
      o.r().warning(`Failed to record Windows desktop home ownership`, { safe: {}, sensitive: { error: e } });
    }
}
var Qi = `codex-node-network-restricted`,
  $i =
    /^--(?:permission|allow-(?:net|ipc|fs-read|fs-write|addons|child-process|worker|inspector|wasi))(?:=|$)/;
function ea(e) {
  if (process.versions.electron == null) return !0;
  let t = d.app.commandLine.hasSwitch(Qi);
  if (e.kind === `unrestricted` && !t) return !0;
  if (e.kind === `restricted` && t) return (ta(e), !0);
  let n = process.argv.slice(1).filter((e) => e !== `--${Qi}` && !$i.test(e));
  return (
    e.kind === `restricted` &&
      (n.unshift(
        `--${Qi}`,
        `--permission`,
        `--allow-fs-read=*`,
        `--allow-fs-write=*`,
        `--allow-addons`,
        `--allow-child-process`,
        `--allow-worker`,
        ...na().map((e) => `--allow-ipc=${e}`),
      ),
      delete process.env.NODE_OPTIONS),
    s.r(),
    d.app.relaunch({ args: n }),
    d.app.exit(0),
    !1
  );
}
function ta(e) {
  if (
    e.kind === `restricted` &&
    process.versions.electron != null &&
    (process.permission?.has(`net`) !== !1 || !na().every((e) => process.permission?.has(`ipc`, e)))
  )
    throw Error(`Owl did not activate the required Node network permissions.`);
}
function na() {
  return process.platform === `win32`
    ? [i.u()]
    : [i.u(), i.f(), (0, u.join)(i.lt(), `app-server-control`, `app-server-control.sock`)];
}
var ra = `0.154.0-alpha.1`,
  ia = t.O({
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
function aa(e, t) {
  let r = ia.safeParse(t);
  if (!r.success)
    throw Error(
      `Application network requirements are invalid or unavailable. Update the app server to a version that exposes application requirements.`,
    );
  if (
    r.data.requirements != null &&
    r.data.requirements.application === void 0 &&
    !(e != null && n.aa(e) && n.ia(e, `0.141.0`) >= 0 && n.ia(e, ra) < 0)
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
function oa(e, t) {
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
    configTitle: {
      messageId: `desktop.workspacePolicyRecovery.configTitle`,
      defaultMessage: `ChatGPT configuration could not be loaded`,
    },
    configDetailWithLocation: {
      messageId: `desktop.workspacePolicyRecovery.configDetailWithLocation`,
      defaultMessage: `ChatGPT cannot start until its configuration is fixed. Open the file below, fix the reported issue, save it, then choose Retry. If your organization manages this file, contact your IT administrator.{paragraphBreak}{location}{lineBreak}{detail}`,
    },
    configDetailWithoutLocation: {
      messageId: `desktop.workspacePolicyRecovery.configDetailWithoutLocation`,
      defaultMessage: `ChatGPT cannot start until its configuration is fixed. Check config.toml in the app’s configuration folder for the issue below, save your changes, then choose Retry. If you cannot find the setting or your organization manages it, contact your IT administrator.{paragraphBreak}{detail}`,
    },
    retry: { messageId: `desktop.workspacePolicyRecovery.retry`, defaultMessage: `Retry` },
    signOut: { messageId: `desktop.workspacePolicyRecovery.signOut`, defaultMessage: `Sign out` },
    quit: { messageId: `desktop.workspacePolicyRecovery.quit`, defaultMessage: `Quit` },
  },
  sa = e.r({ getStartupApplicationNetworkPolicy: () => la, initializeNodeNetworkPermissions: () => ua }),
  ca = null;
function la() {
  return ca;
}
async function ua() {
  ((ca = null),
    await Wi(),
    process.env.CODEX_HOME != null && (process.env.CODEX_HOME = (0, u.resolve)(process.env.CODEX_HOME)));
  let e = !1,
    t = !1,
    r = !1,
    a = 0,
    s = null,
    c = null;
  for (;;) {
    a += 1;
    let l = `home-creation`;
    try {
      ((t ||=
        (process.platform === `win32` && d.app.isPackaged
          ? await Zi()
          : await (0, f.mkdir)(i.lt(), { recursive: !0 }),
        !0)),
        (l = `preparation`),
        (c ??= Promise.resolve()
          .then(async () => {
            let e = !1;
            if (process.platform === `win32`) {
              let t = i.lt();
              e =
                new Oi(
                  (0, u.join)(t, `config.toml`),
                  new Br((0, u.join)(t, `.codex-global-state.json`)),
                ).getEffective(n.H.runCodexInWsl.key) === !0 && (await i.ht()) != null;
            }
            return i.i({
              hostConfig: Qr,
              spawnInsideWsl: e,
              repoRoot: (0, u.join)(d.app.getAppPath(), `..`),
              resourcesPath: oe({
                isPackaged: d.app.isPackaged,
                env: process.env,
                resourcesPath: process.resourcesPath,
              }),
            });
          })
          .catch((e) => {
            throw ((c = null), e);
          })));
      let a = await da(c);
      ((l = `policy-read`), (s ??= performance.now() + 6e4), (r ||= e));
      let { appServerVersion: o, response: p } = await i.a(a, d.app.getVersion(), {
        signOut: e,
        timeoutMs: Math.max(1, Math.min(3e4, s - performance.now())),
      });
      l = `policy-validation`;
      let m = aa(o, p);
      return ((l = `node-permissions`), ea(m) ? ((ca = m), !0) : !1);
    } catch (t) {
      if (!r && Li(t)) {
        ((e = !0), (a = 0), (s = null));
        continue;
      }
      let n = t instanceof i.n ? t.reason : l,
        f = 1e3 * 2 ** (a - 1),
        p =
          l === `policy-read` &&
          s != null &&
          !e &&
          t instanceof i.n &&
          t.retryable &&
          a < 3 &&
          performance.now() + f < s;
      if (
        (o
          .r()
          .warning(`Desktop startup policy read failed`, {
            safe: { reason: n, phase: l, attempt: a, retrying: p },
          }),
        p)
      ) {
        await new Promise((e) => setTimeout(e, f));
        continue;
      }
      (await d.app.whenReady(), await ti((0, u.join)(d.app.getAppPath(), `..`)));
      let m = ni(),
        h = t instanceof i.t ? t.configError : null,
        g = [m.formatMessage($.retry)];
      (h ?? g.push(m.formatMessage($.signOut)), g.push(m.formatMessage($.quit)));
      let ee = g.length - 1,
        _;
      _ =
        h == null
          ? m.formatMessage($.detail)
          : h.filePath == null
            ? m.formatMessage({
                ...$.configDetailWithoutLocation,
                values: {
                  detail: h.detail,
                  paragraphBreak: `

`,
                },
              })
            : m.formatMessage({
                ...$.configDetailWithLocation,
                values: {
                  location: [h.filePath, h.line, h.column].filter((e) => e != null).join(`:`),
                  detail: h.detail,
                  paragraphBreak: `

`,
                  lineBreak: `
`,
                },
              });
      let { response: te } = await d.dialog.showMessageBox({
        type: `warning`,
        message: h == null ? m.formatMessage($.title) : m.formatMessage($.configTitle),
        detail: _,
        buttons: g,
        defaultId: 0,
        cancelId: ee,
        noLink: !0,
      });
      if (te === ee) return (d.app.exit(0), !1);
      ((e = h == null && te === 1), (a = 0), (s = null), l !== `preparation` && (c = null));
    }
  }
}
async function da(e) {
  let t = 12e4,
    n = performance.now(),
    r;
  try {
    let a = await Promise.race([
      e,
      new Promise((e, n) => {
        r = setTimeout(() => {
          n(new i.n(`timeout`));
        }, t);
      }),
    ]);
    if (performance.now() - n >= t) throw new i.n(`timeout`);
    return a;
  } finally {
    clearTimeout(r);
  }
}
(Object.defineProperty(exports, "$", {
  enumerable: !0,
  get: function () {
    return Vn;
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
      return vt;
    },
  }),
  Object.defineProperty(exports, "B", {
    enumerable: !0,
    get: function () {
      return yr;
    },
  }),
  Object.defineProperty(exports, "C", {
    enumerable: !0,
    get: function () {
      return Er;
    },
  }),
  Object.defineProperty(exports, "Ct", {
    enumerable: !0,
    get: function () {
      return yn;
    },
  }),
  Object.defineProperty(exports, "D", {
    enumerable: !0,
    get: function () {
      return Br;
    },
  }),
  Object.defineProperty(exports, "Dt", {
    enumerable: !0,
    get: function () {
      return Nt;
    },
  }),
  Object.defineProperty(exports, "E", {
    enumerable: !0,
    get: function () {
      return Or;
    },
  }),
  Object.defineProperty(exports, "Et", {
    enumerable: !0,
    get: function () {
      return Ut;
    },
  }),
  Object.defineProperty(exports, "F", {
    enumerable: !0,
    get: function () {
      return vr;
    },
  }),
  Object.defineProperty(exports, "Ft", {
    enumerable: !0,
    get: function () {
      return Re;
    },
  }),
  Object.defineProperty(exports, "G", {
    enumerable: !0,
    get: function () {
      return Qn;
    },
  }),
  Object.defineProperty(exports, "H", {
    enumerable: !0,
    get: function () {
      return ir;
    },
  }),
  Object.defineProperty(exports, "I", {
    enumerable: !0,
    get: function () {
      return lr;
    },
  }),
  Object.defineProperty(exports, "It", {
    enumerable: !0,
    get: function () {
      return ae;
    },
  }),
  Object.defineProperty(exports, "J", {
    enumerable: !0,
    get: function () {
      return Rn;
    },
  }),
  Object.defineProperty(exports, "K", {
    enumerable: !0,
    get: function () {
      return Jn;
    },
  }),
  Object.defineProperty(exports, "L", {
    enumerable: !0,
    get: function () {
      return Tr;
    },
  }),
  Object.defineProperty(exports, "Lt", {
    enumerable: !0,
    get: function () {
      return oe;
    },
  }),
  Object.defineProperty(exports, "M", {
    enumerable: !0,
    get: function () {
      return dr;
    },
  }),
  Object.defineProperty(exports, "Mt", {
    enumerable: !0,
    get: function () {
      return ut;
    },
  }),
  Object.defineProperty(exports, "N", {
    enumerable: !0,
    get: function () {
      return gr;
    },
  }),
  Object.defineProperty(exports, "Nt", {
    enumerable: !0,
    get: function () {
      return ft;
    },
  }),
  Object.defineProperty(exports, "O", {
    enumerable: !0,
    get: function () {
      return _r;
    },
  }),
  Object.defineProperty(exports, "Ot", {
    enumerable: !0,
    get: function () {
      return Vt;
    },
  }),
  Object.defineProperty(exports, "P", {
    enumerable: !0,
    get: function () {
      return K;
    },
  }),
  Object.defineProperty(exports, "Pt", {
    enumerable: !0,
    get: function () {
      return pt;
    },
  }),
  Object.defineProperty(exports, "Q", {
    enumerable: !0,
    get: function () {
      return Hn;
    },
  }),
  Object.defineProperty(exports, "R", {
    enumerable: !0,
    get: function () {
      return sr;
    },
  }),
  Object.defineProperty(exports, "S", {
    enumerable: !0,
    get: function () {
      return mr;
    },
  }),
  Object.defineProperty(exports, "St", {
    enumerable: !0,
    get: function () {
      return gn;
    },
  }),
  Object.defineProperty(exports, "T", {
    enumerable: !0,
    get: function () {
      return Sr;
    },
  }),
  Object.defineProperty(exports, "Tt", {
    enumerable: !0,
    get: function () {
      return Ht;
    },
  }),
  Object.defineProperty(exports, "U", {
    enumerable: !0,
    get: function () {
      return Zn;
    },
  }),
  Object.defineProperty(exports, "V", {
    enumerable: !0,
    get: function () {
      return br;
    },
  }),
  Object.defineProperty(exports, "W", {
    enumerable: !0,
    get: function () {
      return Xn;
    },
  }),
  Object.defineProperty(exports, "X", {
    enumerable: !0,
    get: function () {
      return zn;
    },
  }),
  Object.defineProperty(exports, "Y", {
    enumerable: !0,
    get: function () {
      return Bn;
    },
  }),
  Object.defineProperty(exports, "Z", {
    enumerable: !0,
    get: function () {
      return Ln;
    },
  }),
  Object.defineProperty(exports, "_", {
    enumerable: !0,
    get: function () {
      return fr;
    },
  }),
  Object.defineProperty(exports, "_t", {
    enumerable: !0,
    get: function () {
      return En;
    },
  }),
  Object.defineProperty(exports, "a", {
    enumerable: !0,
    get: function () {
      return ea;
    },
  }),
  Object.defineProperty(exports, "at", {
    enumerable: !0,
    get: function () {
      return cn;
    },
  }),
  Object.defineProperty(exports, "b", {
    enumerable: !0,
    get: function () {
      return er;
    },
  }),
  Object.defineProperty(exports, "bt", {
    enumerable: !0,
    get: function () {
      return xn;
    },
  }),
  Object.defineProperty(exports, "c", {
    enumerable: !0,
    get: function () {
      return Li;
    },
  }),
  Object.defineProperty(exports, "ct", {
    enumerable: !0,
    get: function () {
      return nn;
    },
  }),
  Object.defineProperty(exports, "d", {
    enumerable: !0,
    get: function () {
      return ri;
    },
  }),
  Object.defineProperty(exports, "dt", {
    enumerable: !0,
    get: function () {
      return pn;
    },
  }),
  Object.defineProperty(exports, "et", {
    enumerable: !0,
    get: function () {
      return jn;
    },
  }),
  Object.defineProperty(exports, "f", {
    enumerable: !0,
    get: function () {
      return ti;
    },
  }),
  Object.defineProperty(exports, "ft", {
    enumerable: !0,
    get: function () {
      return mn;
    },
  }),
  Object.defineProperty(exports, "g", {
    enumerable: !0,
    get: function () {
      return pr;
    },
  }),
  Object.defineProperty(exports, "gt", {
    enumerable: !0,
    get: function () {
      return Tn;
    },
  }),
  Object.defineProperty(exports, "h", {
    enumerable: !0,
    get: function () {
      return Zr;
    },
  }),
  Object.defineProperty(exports, "ht", {
    enumerable: !0,
    get: function () {
      return wn;
    },
  }),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return aa;
    },
  }),
  Object.defineProperty(exports, "it", {
    enumerable: !0,
    get: function () {
      return fn;
    },
  }),
  Object.defineProperty(exports, "j", {
    enumerable: !0,
    get: function () {
      return ur;
    },
  }),
  Object.defineProperty(exports, "jt", {
    enumerable: !0,
    get: function () {
      return dt;
    },
  }),
  Object.defineProperty(exports, "k", {
    enumerable: !0,
    get: function () {
      return Cr;
    },
  }),
  Object.defineProperty(exports, "kt", {
    enumerable: !0,
    get: function () {
      return St;
    },
  }),
  Object.defineProperty(exports, "l", {
    enumerable: !0,
    get: function () {
      return Oi;
    },
  }),
  Object.defineProperty(exports, "lt", {
    enumerable: !0,
    get: function () {
      return un;
    },
  }),
  Object.defineProperty(exports, "m", {
    enumerable: !0,
    get: function () {
      return Qr;
    },
  }),
  Object.defineProperty(exports, "mt", {
    enumerable: !0,
    get: function () {
      return Cn;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return sa;
    },
  }),
  Object.defineProperty(exports, "nt", {
    enumerable: !0,
    get: function () {
      return Dn;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return Wi;
    },
  }),
  Object.defineProperty(exports, "ot", {
    enumerable: !0,
    get: function () {
      return rn;
    },
  }),
  Object.defineProperty(exports, "p", {
    enumerable: !0,
    get: function () {
      return ni;
    },
  }),
  Object.defineProperty(exports, "pt", {
    enumerable: !0,
    get: function () {
      return on;
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
      return oa;
    },
  }),
  Object.defineProperty(exports, "rt", {
    enumerable: !0,
    get: function () {
      return Kt;
    },
  }),
  Object.defineProperty(exports, "s", {
    enumerable: !0,
    get: function () {
      return Gi;
    },
  }),
  Object.defineProperty(exports, "st", {
    enumerable: !0,
    get: function () {
      return ln;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return la;
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
      return Ci;
    },
  }),
  Object.defineProperty(exports, "ut", {
    enumerable: !0,
    get: function () {
      return dn;
    },
  }),
  Object.defineProperty(exports, "v", {
    enumerable: !0,
    get: function () {
      return or;
    },
  }),
  Object.defineProperty(exports, "vt", {
    enumerable: !0,
    get: function () {
      return Sn;
    },
  }),
  Object.defineProperty(exports, "w", {
    enumerable: !0,
    get: function () {
      return wr;
    },
  }),
  Object.defineProperty(exports, "wt", {
    enumerable: !0,
    get: function () {
      return hn;
    },
  }),
  Object.defineProperty(exports, "x", {
    enumerable: !0,
    get: function () {
      return hr;
    },
  }),
  Object.defineProperty(exports, "xt", {
    enumerable: !0,
    get: function () {
      return vn;
    },
  }),
  Object.defineProperty(exports, "y", {
    enumerable: !0,
    get: function () {
      return ar;
    },
  }),
  Object.defineProperty(exports, "yt", {
    enumerable: !0,
    get: function () {
      return bn;
    },
  }),
  Object.defineProperty(exports, "z", {
    enumerable: !0,
    get: function () {
      return cr;
    },
  }));
//# sourceMappingURL=startup-requirements-noLGSvyx.js.map
