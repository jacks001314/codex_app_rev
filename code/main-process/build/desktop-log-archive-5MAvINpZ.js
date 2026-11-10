const e = require("./src-KMpTO78a.js"),
  t = require("./src-B6LqG3ek.js"),
  n = require("./logger-DkO6GWbX.js"),
  r = require("./file-based-logger-BEXzjhGa.js"),
  i = require("./electron-resources-path-BDLw2lp0.js");
let a = require("path");
a = e.o(a, 1);
let o = require("node:os"),
  s = require("node:path"),
  c = e.o(s, 1);
s = e.o(s);
let l = require("node:util"),
  u = require("node:crypto"),
  d = require("node:fs");
d = e.o(d, 1);
let f = require("node:fs/promises");
f = e.o(f, 1);
let p = require("fs");
p = e.o(p, 1);
let m = require("assert");
m = e.o(m, 1);
let h = require("events");
h = e.o(h, 1);
let ee = require("buffer"),
  g = require("node:stream");
g = e.o(g, 1);
let te = require("node:stream/promises"),
  _ = require("zlib");
_ = e.o(_, 1);
let ne = require("node:events"),
  re = require("node:string_decoder"),
  ie = require("node:module"),
  ae = require("node:zlib"),
  oe = require("node:assert");
oe = e.o(oe, 1);
var v = { marketplaceKinds: [`local`] },
  se = `.bundle-id`,
  ce = [
    `openai-bundled-agent`,
    `openai-bundled-alpha`,
    `openai-bundled-beta`,
    `openai-bundled-dev`,
    `openai-bundled-nightly`,
    `openai-bundled-owl`,
  ],
  le = `CODEX_USE_INTERNAL_CHROME_PLUGIN`,
  ue = (e) => e[le] === `1`,
  de = (e, t = process.env) => e === r.i.Dev && !ue(t),
  fe = (e, t = process.env) => {
    switch (e) {
      case r.i.Dev:
        return ue(t);
      case r.i.InternalAlpha:
      case r.i.Nightly:
        return !0;
      case r.i.Agent:
      case r.i.Prod:
      case r.i.PublicBeta:
        return !1;
    }
  },
  pe = (e) => e === r.i.PublicBeta || e === r.i.Prod,
  me = (e, t = process.env) =>
    de(e, t) ? `dev` : fe(e, t) ? `internal` : pe(e) ? `production` : null,
  he = `HKCU\\`,
  ge = (0, ie.createRequire)(__filename),
  _e;
function ve({ loadAddon: e = Te, platform: t = process.platform } = {}) {
  if (t !== `win32`) return `unknown`;
  try {
    let t = e();
    return t == null
      ? `unknown`
      : t.isCurrentAccountAdministratorCapable()
        ? `administrator`
        : `standard`;
  } catch {
    return `unknown`;
  }
}
function ye({ loadAddon: e = Te, platform: t = process.platform } = {}) {
  if (t !== `win32`) return null;
  try {
    return e()?.getSystemPerformanceSnapshot?.() ?? null;
  } catch {
    return null;
  }
}
async function be(e) {
  if (process.platform !== `win32`) return !0;
  try {
    return (await Te()?.supportsPersistentAcls?.(e)) ?? !0;
  } catch {
    return !0;
  }
}
function xe(e) {
  return Te()?.isNetworkDrive?.(e) === !0;
}
function Se({ key: e, name: t, loadAddon: n = Te, platform: r = process.platform }) {
  if (r !== `win32`) return null;
  let i = we(e);
  return n()?.readCurrentUserRegistryStringValue?.(i, t) ?? null;
}
function Ce({ loadAddon: e = Te, platform: n = process.platform } = {}) {
  n === `win32` &&
    t.mn({
      async listProcesses(t) {
        return e()?.listProcesses?.(t) ?? [];
      },
    });
}
function we(e) {
  if (!e.startsWith(he) || e.length === 5) throw Error(`Registry key must be under HKCU`);
  return e.slice(5);
}
function Te() {
  if (_e != null) return _e;
  let e = i.t({ env: process.env, resourcesPath: process.resourcesPath });
  if (e == null) return null;
  let t = s.default.join(e, `native`, `windows-account.node`);
  return (0, d.existsSync)(t) ? ((_e = ge(t)), _e) : null;
}
var Ee = Object.defineProperty,
  De = (e, t) => {
    for (var n in t) Ee(e, n, { get: t[n], enumerable: !0 });
  },
  Oe = typeof process == `object` && process ? process : { stdout: null, stderr: null },
  ke = (e) =>
    !!e && typeof e == `object` && (e instanceof ot || e instanceof g.default || Ae(e) || je(e)),
  Ae = (e) =>
    !!e &&
    typeof e == `object` &&
    e instanceof ne.EventEmitter &&
    typeof e.pipe == `function` &&
    e.pipe !== g.default.Writable.prototype.pipe,
  je = (e) =>
    !!e &&
    typeof e == `object` &&
    e instanceof ne.EventEmitter &&
    typeof e.write == `function` &&
    typeof e.end == `function`,
  y = Symbol(`EOF`),
  b = Symbol(`maybeEmitEnd`),
  x = Symbol(`emittedEnd`),
  Me = Symbol(`emittingEnd`),
  Ne = Symbol(`emittedError`),
  Pe = Symbol(`closed`),
  Fe = Symbol(`read`),
  Ie = Symbol(`flush`),
  Le = Symbol(`flushChunk`),
  S = Symbol(`encoding`),
  Re = Symbol(`decoder`),
  C = Symbol(`flowing`),
  ze = Symbol(`paused`),
  Be = Symbol(`resume`),
  w = Symbol(`buffer`),
  T = Symbol(`pipes`),
  E = Symbol(`bufferLength`),
  Ve = Symbol(`bufferPush`),
  He = Symbol(`bufferShift`),
  D = Symbol(`objectMode`),
  O = Symbol(`destroyed`),
  Ue = Symbol(`error`),
  We = Symbol(`emitData`),
  Ge = Symbol(`emitEnd`),
  Ke = Symbol(`emitEnd2`),
  k = Symbol(`async`),
  qe = Symbol(`abort`),
  Je = Symbol(`aborted`),
  Ye = Symbol(`signal`),
  Xe = Symbol(`dataListeners`),
  A = Symbol(`discarded`),
  Ze = (e) => Promise.resolve().then(e),
  Qe = (e) => e(),
  $e = (e) => e === `end` || e === `finish` || e === `prefinish`,
  et = (e) =>
    e instanceof ArrayBuffer ||
    (!!e &&
      typeof e == `object` &&
      e.constructor &&
      e.constructor.name === `ArrayBuffer` &&
      e.byteLength >= 0),
  tt = (e) => !Buffer.isBuffer(e) && ArrayBuffer.isView(e),
  nt = class {
    src;
    dest;
    opts;
    ondrain;
    constructor(e, t, n) {
      ((this.src = e),
        (this.dest = t),
        (this.opts = n),
        (this.ondrain = () => e[Be]()),
        this.dest.on(`drain`, this.ondrain));
    }
    unpipe() {
      this.dest.removeListener(`drain`, this.ondrain);
    }
    proxyErrors(e) {}
    end() {
      (this.unpipe(), this.opts.end && this.dest.end());
    }
  },
  rt = class extends nt {
    unpipe() {
      (this.src.removeListener(`error`, this.proxyErrors), super.unpipe());
    }
    constructor(e, t, n) {
      (super(e, t, n),
        (this.proxyErrors = (e) => this.dest.emit(`error`, e)),
        e.on(`error`, this.proxyErrors));
    }
  },
  it = (e) => !!e.objectMode,
  at = (e) => !e.objectMode && !!e.encoding && e.encoding !== `buffer`,
  ot = class extends ne.EventEmitter {
    [C] = !1;
    [ze] = !1;
    [T] = [];
    [w] = [];
    [D];
    [S];
    [k];
    [Re];
    [y] = !1;
    [x] = !1;
    [Me] = !1;
    [Pe] = !1;
    [Ne] = null;
    [E] = 0;
    [O] = !1;
    [Ye];
    [Je] = !1;
    [Xe] = 0;
    [A] = !1;
    writable = !0;
    readable = !0;
    constructor(...e) {
      let t = e[0] || {};
      if ((super(), t.objectMode && typeof t.encoding == `string`))
        throw TypeError(`Encoding and objectMode may not be used together`);
      (it(t)
        ? ((this[D] = !0), (this[S] = null))
        : at(t)
          ? ((this[S] = t.encoding), (this[D] = !1))
          : ((this[D] = !1), (this[S] = null)),
        (this[k] = !!t.async),
        (this[Re] = this[S] ? new re.StringDecoder(this[S]) : null),
        t &&
          t.debugExposeBuffer === !0 &&
          Object.defineProperty(this, "buffer", { get: () => this[w] }),
        t &&
          t.debugExposePipes === !0 &&
          Object.defineProperty(this, "pipes", { get: () => this[T] }));
      let { signal: n } = t;
      n && ((this[Ye] = n), n.aborted ? this[qe]() : n.addEventListener(`abort`, () => this[qe]()));
    }
    get bufferLength() {
      return this[E];
    }
    get encoding() {
      return this[S];
    }
    set encoding(e) {
      throw Error(`Encoding must be set at instantiation time`);
    }
    setEncoding(e) {
      throw Error(`Encoding must be set at instantiation time`);
    }
    get objectMode() {
      return this[D];
    }
    set objectMode(e) {
      throw Error(`objectMode must be set at instantiation time`);
    }
    get async() {
      return this[k];
    }
    set async(e) {
      this[k] = this[k] || !!e;
    }
    [qe]() {
      ((this[Je] = !0), this.emit(`abort`, this[Ye]?.reason), this.destroy(this[Ye]?.reason));
    }
    get aborted() {
      return this[Je];
    }
    set aborted(e) {}
    write(e, t, n) {
      if (this[Je]) return !1;
      if (this[y]) throw Error(`write after end`);
      if (this[O])
        return (
          this.emit(
            `error`,
            Object.assign(Error(`Cannot call write after a stream was destroyed`), {
              code: `ERR_STREAM_DESTROYED`,
            }),
          ),
          !0
        );
      (typeof t == `function` && ((n = t), (t = `utf8`)), (t ||= `utf8`));
      let r = this[k] ? Ze : Qe;
      if (!this[D] && !Buffer.isBuffer(e)) {
        if (tt(e)) e = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
        else if (et(e)) e = Buffer.from(e);
        else if (typeof e != `string`)
          throw Error(`Non-contiguous data written to non-objectMode stream`);
      }
      return this[D]
        ? (this[C] && this[E] !== 0 && this[Ie](!0),
          this[C] ? this.emit(`data`, e) : this[Ve](e),
          this[E] !== 0 && this.emit(`readable`),
          n && r(n),
          this[C])
        : e.length
          ? (typeof e == `string` &&
              !(t === this[S] && !this[Re]?.lastNeed) &&
              (e = Buffer.from(e, t)),
            Buffer.isBuffer(e) && this[S] && (e = this[Re].write(e)),
            this[C] && this[E] !== 0 && this[Ie](!0),
            this[C] ? this.emit(`data`, e) : this[Ve](e),
            this[E] !== 0 && this.emit(`readable`),
            n && r(n),
            this[C])
          : (this[E] !== 0 && this.emit(`readable`), n && r(n), this[C]);
    }
    read(e) {
      if (this[O]) return null;
      if (((this[A] = !1), this[E] === 0 || e === 0 || (e && e > this[E])))
        return (this[b](), null);
      (this[D] && (e = null),
        this[w].length > 1 &&
          !this[D] &&
          (this[w] = [this[S] ? this[w].join(``) : Buffer.concat(this[w], this[E])]));
      let t = this[Fe](e || null, this[w][0]);
      return (this[b](), t);
    }
    [Fe](e, t) {
      if (this[D]) this[He]();
      else {
        let n = t;
        e === n.length || e === null
          ? this[He]()
          : typeof n == `string`
            ? ((this[w][0] = n.slice(e)), (t = n.slice(0, e)), (this[E] -= e))
            : ((this[w][0] = n.subarray(e)), (t = n.subarray(0, e)), (this[E] -= e));
      }
      return (this.emit(`data`, t), !this[w].length && !this[y] && this.emit(`drain`), t);
    }
    end(e, t, n) {
      return (
        typeof e == `function` && ((n = e), (e = void 0)),
        typeof t == `function` && ((n = t), (t = `utf8`)),
        e !== void 0 && this.write(e, t),
        n && this.once(`end`, n),
        (this[y] = !0),
        (this.writable = !1),
        (this[C] || !this[ze]) && this[b](),
        this
      );
    }
    [Be]() {
      this[O] ||
        (!this[Xe] && !this[T].length && (this[A] = !0),
        (this[ze] = !1),
        (this[C] = !0),
        this.emit(`resume`),
        this[w].length ? this[Ie]() : this[y] ? this[b]() : this.emit(`drain`));
    }
    resume() {
      return this[Be]();
    }
    pause() {
      ((this[C] = !1), (this[ze] = !0), (this[A] = !1));
    }
    get destroyed() {
      return this[O];
    }
    get flowing() {
      return this[C];
    }
    get paused() {
      return this[ze];
    }
    [Ve](e) {
      (this[D] ? (this[E] += 1) : (this[E] += e.length), this[w].push(e));
    }
    [He]() {
      return (this[D] ? --this[E] : (this[E] -= this[w][0].length), this[w].shift());
    }
    [Ie](e = !1) {
      do;
      while (this[Le](this[He]()) && this[w].length);
      !e && !this[w].length && !this[y] && this.emit(`drain`);
    }
    [Le](e) {
      return (this.emit(`data`, e), this[C]);
    }
    pipe(e, t) {
      if (this[O]) return e;
      this[A] = !1;
      let n = this[x];
      return (
        (t ||= {}),
        e === Oe.stdout || e === Oe.stderr ? (t.end = !1) : (t.end = t.end !== !1),
        (t.proxyErrors = !!t.proxyErrors),
        n
          ? t.end && e.end()
          : (this[T].push(t.proxyErrors ? new rt(this, e, t) : new nt(this, e, t)),
            this[k] ? Ze(() => this[Be]()) : this[Be]()),
        e
      );
    }
    unpipe(e) {
      let t = this[T].find((t) => t.dest === e);
      t &&
        (this[T].length === 1
          ? (this[C] && this[Xe] === 0 && (this[C] = !1), (this[T] = []))
          : this[T].splice(this[T].indexOf(t), 1),
        t.unpipe());
    }
    addListener(e, t) {
      return this.on(e, t);
    }
    on(e, t) {
      let n = super.on(e, t);
      if (e === `data`) ((this[A] = !1), this[Xe]++, !this[T].length && !this[C] && this[Be]());
      else if (e === `readable` && this[E] !== 0) super.emit(`readable`);
      else if ($e(e) && this[x]) (super.emit(e), this.removeAllListeners(e));
      else if (e === `error` && this[Ne]) {
        let e = t;
        this[k] ? Ze(() => e.call(this, this[Ne])) : e.call(this, this[Ne]);
      }
      return n;
    }
    removeListener(e, t) {
      return this.off(e, t);
    }
    off(e, t) {
      let n = super.off(e, t);
      return (
        e === `data` &&
          ((this[Xe] = this.listeners(`data`).length),
          this[Xe] === 0 && !this[A] && !this[T].length && (this[C] = !1)),
        n
      );
    }
    removeAllListeners(e) {
      let t = super.removeAllListeners(e);
      return (
        (e === `data` || e === void 0) &&
          ((this[Xe] = 0), !this[A] && !this[T].length && (this[C] = !1)),
        t
      );
    }
    get emittedEnd() {
      return this[x];
    }
    [b]() {
      !this[Me] &&
        !this[x] &&
        !this[O] &&
        this[w].length === 0 &&
        this[y] &&
        ((this[Me] = !0),
        this.emit(`end`),
        this.emit(`prefinish`),
        this.emit(`finish`),
        this[Pe] && this.emit(`close`),
        (this[Me] = !1));
    }
    emit(e, ...t) {
      let n = t[0];
      if (e !== `error` && e !== `close` && e !== O && this[O]) return !1;
      if (e === `data`)
        return !this[D] && !n ? !1 : this[k] ? (Ze(() => this[We](n)), !0) : this[We](n);
      if (e === `end`) return this[Ge]();
      if (e === `close`) {
        if (((this[Pe] = !0), !this[x] && !this[O])) return !1;
        let e = super.emit(`close`);
        return (this.removeAllListeners(`close`), e);
      } else if (e === `error`) {
        ((this[Ne] = n), super.emit(Ue, n));
        let e = !this[Ye] || this.listeners(`error`).length ? super.emit(`error`, n) : !1;
        return (this[b](), e);
      } else if (e === `resume`) {
        let e = super.emit(`resume`);
        return (this[b](), e);
      } else if (e === `finish` || e === `prefinish`) {
        let t = super.emit(e);
        return (this.removeAllListeners(e), t);
      }
      let r = super.emit(e, ...t);
      return (this[b](), r);
    }
    [We](e) {
      for (let t of this[T]) t.dest.write(e) === !1 && this.pause();
      let t = !this[A] && super.emit(`data`, e);
      return (this[b](), t);
    }
    [Ge]() {
      return this[x]
        ? !1
        : ((this[x] = !0), (this.readable = !1), this[k] ? (Ze(() => this[Ke]()), !0) : this[Ke]());
    }
    [Ke]() {
      if (this[Re]) {
        let e = this[Re].end();
        if (e) {
          for (let t of this[T]) t.dest.write(e);
          this[A] || super.emit(`data`, e);
        }
      }
      for (let e of this[T]) e.end();
      let e = super.emit(`end`);
      return (this.removeAllListeners(`end`), e);
    }
    async collect() {
      let e = Object.assign([], { dataLength: 0 });
      this[D] || (e.dataLength = 0);
      let t = this.promise();
      return (
        this.on(`data`, (t) => {
          (e.push(t), this[D] || (e.dataLength += t.length));
        }),
        await t,
        e
      );
    }
    async concat() {
      if (this[D]) throw Error(`cannot concat in objectMode`);
      let e = await this.collect();
      return this[S] ? e.join(``) : Buffer.concat(e, e.dataLength);
    }
    async promise() {
      return new Promise((e, t) => {
        (this.on(O, () => t(Error(`stream destroyed`))),
          this.on(`error`, (e) => t(e)),
          this.on(`end`, () => e()));
      });
    }
    [Symbol.asyncIterator]() {
      this[A] = !1;
      let e = !1,
        t = async () => (this.pause(), (e = !0), { value: void 0, done: !0 });
      return {
        next: () => {
          if (e) return t();
          let n = this.read();
          if (n !== null) return Promise.resolve({ done: !1, value: n });
          if (this[y]) return t();
          let r,
            i,
            a = (e) => {
              (this.off(`data`, o), this.off(`end`, s), this.off(O, c), t(), i(e));
            },
            o = (e) => {
              (this.off(`error`, a),
                this.off(`end`, s),
                this.off(O, c),
                this.pause(),
                r({ value: e, done: !!this[y] }));
            },
            s = () => {
              (this.off(`error`, a),
                this.off(`data`, o),
                this.off(O, c),
                t(),
                r({ done: !0, value: void 0 }));
            },
            c = () => a(Error(`stream destroyed`));
          return new Promise((e, t) => {
            ((i = t),
              (r = e),
              this.once(O, c),
              this.once(`error`, a),
              this.once(`end`, s),
              this.once(`data`, o));
          });
        },
        throw: t,
        return: t,
        [Symbol.asyncIterator]() {
          return this;
        },
        [Symbol.asyncDispose]: async () => {},
      };
    }
    [Symbol.iterator]() {
      this[A] = !1;
      let e = !1,
        t = () => (
          this.pause(),
          this.off(Ue, t),
          this.off(O, t),
          this.off(`end`, t),
          (e = !0),
          { done: !0, value: void 0 }
        );
      return (
        this.once(`end`, t),
        this.once(Ue, t),
        this.once(O, t),
        {
          next: () => {
            if (e) return t();
            let n = this.read();
            return n === null ? t() : { done: !1, value: n };
          },
          throw: t,
          return: t,
          [Symbol.iterator]() {
            return this;
          },
          [Symbol.dispose]: () => {},
        }
      );
    }
    destroy(e) {
      if (this[O]) return (e ? this.emit(`error`, e) : this.emit(O), this);
      ((this[O] = !0), (this[A] = !0), (this[w].length = 0), (this[E] = 0));
      let t = this;
      return (
        typeof t.close == `function` && !this[Pe] && t.close(),
        e ? this.emit(`error`, e) : this.emit(O),
        this
      );
    }
    static get isStream() {
      return ke;
    }
  },
  st = p.default.writev,
  ct = Symbol(`_autoClose`),
  j = Symbol(`_close`),
  lt = Symbol(`_ended`),
  M = Symbol(`_fd`),
  ut = Symbol(`_finished`),
  N = Symbol(`_flags`),
  dt = Symbol(`_flush`),
  ft = Symbol(`_handleChunk`),
  pt = Symbol(`_makeBuf`),
  mt = Symbol(`_mode`),
  ht = Symbol(`_needDrain`),
  gt = Symbol(`_onerror`),
  _t = Symbol(`_onopen`),
  vt = Symbol(`_onread`),
  yt = Symbol(`_onwrite`),
  P = Symbol(`_open`),
  F = Symbol(`_path`),
  I = Symbol(`_pos`),
  L = Symbol(`_queue`),
  bt = Symbol(`_read`),
  xt = Symbol(`_readSize`),
  R = Symbol(`_reading`),
  St = Symbol(`_remain`),
  Ct = Symbol(`_size`),
  wt = Symbol(`_write`),
  Tt = Symbol(`_writing`),
  Et = Symbol(`_defaultFlag`),
  Dt = Symbol(`_errored`),
  Ot = class extends ot {
    [Dt] = !1;
    [M];
    [F];
    [xt];
    [R] = !1;
    [Ct];
    [St];
    [ct];
    constructor(e, t) {
      if (((t ||= {}), super(t), (this.readable = !0), (this.writable = !1), typeof e != `string`))
        throw TypeError(`path must be a string`);
      ((this[Dt] = !1),
        (this[M] = typeof t.fd == `number` ? t.fd : void 0),
        (this[F] = e),
        (this[xt] = t.readSize || 16 * 1024 * 1024),
        (this[R] = !1),
        (this[Ct] = typeof t.size == `number` ? t.size : 1 / 0),
        (this[St] = this[Ct]),
        (this[ct] = typeof t.autoClose != `boolean` || t.autoClose),
        typeof this[M] == `number` ? this[bt]() : this[P]());
    }
    get fd() {
      return this[M];
    }
    get path() {
      return this[F];
    }
    write() {
      throw TypeError(`this is a readable stream`);
    }
    end() {
      throw TypeError(`this is a readable stream`);
    }
    [P]() {
      p.default.open(this[F], `r`, (e, t) => this[_t](e, t));
    }
    [_t](e, t) {
      e ? this[gt](e) : ((this[M] = t), this.emit(`open`, t), this[bt]());
    }
    [pt]() {
      return Buffer.allocUnsafe(Math.min(this[xt], this[St]));
    }
    [bt]() {
      if (!this[R]) {
        this[R] = !0;
        let e = this[pt]();
        if (e.length === 0) return process.nextTick(() => this[vt](null, 0, e));
        p.default.read(this[M], e, 0, e.length, null, (e, t, n) => this[vt](e, t, n));
      }
    }
    [vt](e, t, n) {
      ((this[R] = !1), e ? this[gt](e) : this[ft](t, n) && this[bt]());
    }
    [j]() {
      if (this[ct] && typeof this[M] == `number`) {
        let e = this[M];
        ((this[M] = void 0),
          p.default.close(e, (e) => (e ? this.emit(`error`, e) : this.emit(`close`))));
      }
    }
    [gt](e) {
      ((this[R] = !0), this[j](), this.emit(`error`, e));
    }
    [ft](e, t) {
      let n = !1;
      return (
        (this[St] -= e),
        e > 0 && (n = super.write(e < t.length ? t.subarray(0, e) : t)),
        (e === 0 || this[St] <= 0) && ((n = !1), this[j](), super.end()),
        n
      );
    }
    emit(e, ...t) {
      switch (e) {
        case `prefinish`:
        case `finish`:
          return !1;
        case `drain`:
          return (typeof this[M] == `number` && this[bt](), !1);
        case `error`:
          return this[Dt] ? !1 : ((this[Dt] = !0), super.emit(e, ...t));
        default:
          return super.emit(e, ...t);
      }
    }
  },
  kt = class extends Ot {
    [P]() {
      let e = !0;
      try {
        (this[_t](null, p.default.openSync(this[F], `r`)), (e = !1));
      } finally {
        e && this[j]();
      }
    }
    [bt]() {
      let e = !0;
      try {
        if (!this[R]) {
          this[R] = !0;
          do {
            let e = this[pt](),
              t = e.length === 0 ? 0 : p.default.readSync(this[M], e, 0, e.length, null);
            if (!this[ft](t, e)) break;
          } while (!0);
          this[R] = !1;
        }
        e = !1;
      } finally {
        e && this[j]();
      }
    }
    [j]() {
      if (this[ct] && typeof this[M] == `number`) {
        let e = this[M];
        ((this[M] = void 0), p.default.closeSync(e), this.emit(`close`));
      }
    }
  },
  At = class extends h.default {
    readable = !1;
    writable = !0;
    [Dt] = !1;
    [Tt] = !1;
    [lt] = !1;
    [L] = [];
    [ht] = !1;
    [F];
    [mt];
    [ct];
    [M];
    [Et];
    [N];
    [ut] = !1;
    [I];
    constructor(e, t) {
      ((t ||= {}),
        super(t),
        (this[F] = e),
        (this[M] = typeof t.fd == `number` ? t.fd : void 0),
        (this[mt] = t.mode === void 0 ? 438 : t.mode),
        (this[I] = typeof t.start == `number` ? t.start : void 0),
        (this[ct] = typeof t.autoClose != `boolean` || t.autoClose));
      let n = this[I] === void 0 ? `w` : `r+`;
      ((this[Et] = t.flags === void 0),
        (this[N] = t.flags === void 0 ? n : t.flags),
        this[M] === void 0 && this[P]());
    }
    emit(e, ...t) {
      if (e === `error`) {
        if (this[Dt]) return !1;
        this[Dt] = !0;
      }
      return super.emit(e, ...t);
    }
    get fd() {
      return this[M];
    }
    get path() {
      return this[F];
    }
    [gt](e) {
      (this[j](), (this[Tt] = !0), this.emit(`error`, e));
    }
    [P]() {
      p.default.open(this[F], this[N], this[mt], (e, t) => this[_t](e, t));
    }
    [_t](e, t) {
      this[Et] && this[N] === `r+` && e && e.code === `ENOENT`
        ? ((this[N] = `w`), this[P]())
        : e
          ? this[gt](e)
          : ((this[M] = t), this.emit(`open`, t), this[Tt] || this[dt]());
    }
    end(e, t) {
      return (
        e && this.write(e, t),
        (this[lt] = !0),
        !this[Tt] && !this[L].length && typeof this[M] == `number` && this[yt](null, 0),
        this
      );
    }
    write(e, t) {
      return (
        typeof e == `string` && (e = Buffer.from(e, t)),
        this[lt]
          ? (this.emit(`error`, Error(`write() after end()`)), !1)
          : this[M] === void 0 || this[Tt] || this[L].length
            ? (this[L].push(e), (this[ht] = !0), !1)
            : ((this[Tt] = !0), this[wt](e), !0)
      );
    }
    [wt](e) {
      p.default.write(this[M], e, 0, e.length, this[I], (e, t) => this[yt](e, t));
    }
    [yt](e, t) {
      e
        ? this[gt](e)
        : (this[I] !== void 0 && typeof t == `number` && (this[I] += t),
          this[L].length
            ? this[dt]()
            : ((this[Tt] = !1),
              this[lt] && !this[ut]
                ? ((this[ut] = !0), this[j](), this.emit(`finish`))
                : this[ht] && ((this[ht] = !1), this.emit(`drain`))));
    }
    [dt]() {
      if (this[L].length === 0) this[lt] && this[yt](null, 0);
      else if (this[L].length === 1) this[wt](this[L].pop());
      else {
        let e = this[L];
        ((this[L] = []), st(this[M], e, this[I], (e, t) => this[yt](e, t)));
      }
    }
    [j]() {
      if (this[ct] && typeof this[M] == `number`) {
        let e = this[M];
        ((this[M] = void 0),
          p.default.close(e, (e) => (e ? this.emit(`error`, e) : this.emit(`close`))));
      }
    }
  },
  jt = class extends At {
    [P]() {
      let e;
      if (this[Et] && this[N] === `r+`)
        try {
          e = p.default.openSync(this[F], this[N], this[mt]);
        } catch (e) {
          if (e?.code === `ENOENT`) return ((this[N] = `w`), this[P]());
          throw e;
        }
      else e = p.default.openSync(this[F], this[N], this[mt]);
      this[_t](null, e);
    }
    [j]() {
      if (this[ct] && typeof this[M] == `number`) {
        let e = this[M];
        ((this[M] = void 0), p.default.closeSync(e), this.emit(`close`));
      }
    }
    [wt](e) {
      let t = !0;
      try {
        (this[yt](null, p.default.writeSync(this[M], e, 0, e.length, this[I])), (t = !1));
      } finally {
        if (t)
          try {
            this[j]();
          } catch {}
      }
    }
  },
  Mt = new Map([
    [`C`, `cwd`],
    [`f`, `file`],
    [`z`, `gzip`],
    [`P`, `preservePaths`],
    [`U`, `unlink`],
    [`strip-components`, `strip`],
    [`stripComponents`, `strip`],
    [`keep-newer`, `newer`],
    [`keepNewer`, `newer`],
    [`keep-newer-files`, `newer`],
    [`keepNewerFiles`, `newer`],
    [`k`, `keep`],
    [`keep-existing`, `keep`],
    [`keepExisting`, `keep`],
    [`m`, `noMtime`],
    [`no-mtime`, `noMtime`],
    [`p`, `preserveOwner`],
    [`L`, `follow`],
    [`h`, `follow`],
    [`onentry`, `onReadEntry`],
  ]),
  Nt = (e) => !!e.sync && !!e.file,
  Pt = (e) => !e.sync && !!e.file,
  Ft = (e) => !!e.sync && !e.file,
  It = (e) => !e.sync && !e.file,
  Lt = (e) => !!e.file,
  Rt = (e) => Mt.get(e) || e,
  zt = (e = {}) => {
    if (!e) return {};
    let t = {};
    for (let [n, r] of Object.entries(e)) {
      let e = Rt(n);
      t[e] = r;
    }
    return (t.chmod === void 0 && t.noChmod === !1 && (t.chmod = !0), delete t.noChmod, t);
  },
  Bt = (e, t, n, r, i) =>
    Object.assign(
      (a = [], o, s) => {
        (Array.isArray(a) && ((o = a), (a = {})),
          typeof o == `function` && ((s = o), (o = void 0)),
          (o = o ? Array.from(o) : []));
        let c = zt(a);
        if ((i?.(c, o), Nt(c))) {
          if (typeof s == `function`)
            throw TypeError(`callback not supported for sync tar functions`);
          return e(c, o);
        } else if (Pt(c)) {
          let e = t(c, o);
          return s ? e.then(() => s(), s) : e;
        } else if (Ft(c)) {
          if (typeof s == `function`)
            throw TypeError(`callback not supported for sync tar functions`);
          return n(c, o);
        } else if (It(c)) {
          if (typeof s == `function`) throw TypeError(`callback only supported with file option`);
          return r(c, o);
        }
        throw Error(`impossible options??`);
      },
      { syncFile: e, asyncFile: t, syncNoFile: n, asyncNoFile: r, validate: i },
    ),
  Vt = _.default.constants || { ZLIB_VERNUM: 4736 },
  z = Object.freeze(
    Object.assign(
      Object.create(null),
      {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_VERSION_ERROR: -6,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        DEFLATE: 1,
        INFLATE: 2,
        GZIP: 3,
        GUNZIP: 4,
        DEFLATERAW: 5,
        INFLATERAW: 6,
        UNZIP: 7,
        BROTLI_DECODE: 8,
        BROTLI_ENCODE: 9,
        Z_MIN_WINDOWBITS: 8,
        Z_MAX_WINDOWBITS: 15,
        Z_DEFAULT_WINDOWBITS: 15,
        Z_MIN_CHUNK: 64,
        Z_MAX_CHUNK: 1 / 0,
        Z_DEFAULT_CHUNK: 16384,
        Z_MIN_MEMLEVEL: 1,
        Z_MAX_MEMLEVEL: 9,
        Z_DEFAULT_MEMLEVEL: 8,
        Z_MIN_LEVEL: -1,
        Z_MAX_LEVEL: 9,
        Z_DEFAULT_LEVEL: -1,
        BROTLI_OPERATION_PROCESS: 0,
        BROTLI_OPERATION_FLUSH: 1,
        BROTLI_OPERATION_FINISH: 2,
        BROTLI_OPERATION_EMIT_METADATA: 3,
        BROTLI_MODE_GENERIC: 0,
        BROTLI_MODE_TEXT: 1,
        BROTLI_MODE_FONT: 2,
        BROTLI_DEFAULT_MODE: 0,
        BROTLI_MIN_QUALITY: 0,
        BROTLI_MAX_QUALITY: 11,
        BROTLI_DEFAULT_QUALITY: 11,
        BROTLI_MIN_WINDOW_BITS: 10,
        BROTLI_MAX_WINDOW_BITS: 24,
        BROTLI_LARGE_MAX_WINDOW_BITS: 30,
        BROTLI_DEFAULT_WINDOW: 22,
        BROTLI_MIN_INPUT_BLOCK_BITS: 16,
        BROTLI_MAX_INPUT_BLOCK_BITS: 24,
        BROTLI_PARAM_MODE: 0,
        BROTLI_PARAM_QUALITY: 1,
        BROTLI_PARAM_LGWIN: 2,
        BROTLI_PARAM_LGBLOCK: 3,
        BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
        BROTLI_PARAM_SIZE_HINT: 5,
        BROTLI_PARAM_LARGE_WINDOW: 6,
        BROTLI_PARAM_NPOSTFIX: 7,
        BROTLI_PARAM_NDIRECT: 8,
        BROTLI_DECODER_RESULT_ERROR: 0,
        BROTLI_DECODER_RESULT_SUCCESS: 1,
        BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
        BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
        BROTLI_DECODER_NO_ERROR: 0,
        BROTLI_DECODER_SUCCESS: 1,
        BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
        BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
        BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
        BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
        BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
        BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
        BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
        BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
        BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
        BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
        BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
        BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
        BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
        BROTLI_DECODER_ERROR_UNREACHABLE: -31,
      },
      Vt,
    ),
  ),
  Ht = ee.Buffer.concat,
  Ut = Object.getOwnPropertyDescriptor(ee.Buffer, `concat`),
  Wt = (e) => e,
  Gt =
    Ut?.writable === !0 || Ut?.set !== void 0
      ? (e) => {
          ee.Buffer.concat = e ? Wt : Ht;
        }
      : (e) => {},
  Kt = Symbol(`_superWrite`),
  qt = class extends Error {
    code;
    errno;
    constructor(e, t) {
      (super(`zlib: ` + e.message, { cause: e }),
        (this.code = e.code),
        (this.errno = e.errno),
        (this.code ||= `ZLIB_ERROR`),
        (this.message = `zlib: ` + e.message),
        Error.captureStackTrace(this, t ?? this.constructor));
    }
    get name() {
      return `ZlibError`;
    }
  },
  Jt = Symbol(`flushFlag`),
  Yt = class extends ot {
    #e = !1;
    #t = !1;
    #n;
    #r;
    #i;
    #a;
    #o;
    get sawError() {
      return this.#e;
    }
    get handle() {
      return this.#a;
    }
    get flushFlag() {
      return this.#n;
    }
    constructor(e, t) {
      if (!e || typeof e != `object`) throw TypeError(`invalid options for ZlibBase constructor`);
      if (
        (super(e),
        (this.#n = e.flush ?? 0),
        (this.#r = e.finishFlush ?? 0),
        (this.#i = e.fullFlushFlag ?? 0),
        typeof _[t] != `function`)
      )
        throw TypeError(`Compression method not supported: ` + t);
      try {
        this.#a = new _[t](e);
      } catch (e) {
        throw new qt(e, this.constructor);
      }
      ((this.#o = (e) => {
        this.#e || ((this.#e = !0), this.close(), this.emit(`error`, e));
      }),
        this.#a?.on(`error`, (e) => this.#o(new qt(e))),
        this.once(`end`, () => this.close));
    }
    close() {
      this.#a && (this.#a.close(), (this.#a = void 0), this.emit(`close`));
    }
    reset() {
      if (!this.#e) return ((0, m.default)(this.#a, `zlib binding closed`), this.#a.reset?.());
    }
    flush(e) {
      this.ended ||
        (typeof e != `number` && (e = this.#i),
        this.write(Object.assign(ee.Buffer.alloc(0), { [Jt]: e })));
    }
    end(e, t, n) {
      return (
        typeof e == `function` && ((n = e), (t = void 0), (e = void 0)),
        typeof t == `function` && ((n = t), (t = void 0)),
        e && (t ? this.write(e, t) : this.write(e)),
        this.flush(this.#r),
        (this.#t = !0),
        super.end(n)
      );
    }
    get ended() {
      return this.#t;
    }
    [Kt](e) {
      return super.write(e);
    }
    write(e, t, n) {
      if (
        (typeof t == `function` && ((n = t), (t = `utf8`)),
        typeof e == `string` && (e = ee.Buffer.from(e, t)),
        this.#e)
      )
        return;
      (0, m.default)(this.#a, `zlib binding closed`);
      let r = this.#a._handle,
        i = r.close;
      r.close = () => {};
      let a = this.#a.close;
      ((this.#a.close = () => {}), Gt(!0));
      let o;
      try {
        let t = typeof e[Jt] == `number` ? e[Jt] : this.#n;
        ((o = this.#a._processChunk(e, t)), Gt(!1));
      } catch (e) {
        (Gt(!1), this.#o(new qt(e, this.write)));
      } finally {
        this.#a &&
          ((this.#a._handle = r),
          (r.close = i),
          (this.#a.close = a),
          this.#a.removeAllListeners(`error`));
      }
      this.#a && this.#a.on(`error`, (e) => this.#o(new qt(e, this.write)));
      let s;
      if (o)
        if (Array.isArray(o) && o.length > 0) {
          let e = o[0];
          s = this[Kt](ee.Buffer.from(e));
          for (let e = 1; e < o.length; e++) s = this[Kt](o[e]);
        } else s = this[Kt](ee.Buffer.from(o));
      return (n && n(), s);
    }
  },
  Xt = class extends Yt {
    #e;
    #t;
    constructor(e, t) {
      ((e ||= {}),
        (e.flush = e.flush || z.Z_NO_FLUSH),
        (e.finishFlush = e.finishFlush || z.Z_FINISH),
        (e.fullFlushFlag = z.Z_FULL_FLUSH),
        super(e, t),
        (this.#e = e.level),
        (this.#t = e.strategy));
    }
    params(e, t) {
      if (!this.sawError) {
        if (!this.handle) throw Error(`cannot switch params when binding is closed`);
        if (!this.handle.params) throw Error(`not supported in this implementation`);
        if (this.#e !== e || this.#t !== t) {
          (this.flush(z.Z_SYNC_FLUSH), (0, m.default)(this.handle, `zlib binding closed`));
          let n = this.handle.flush;
          this.handle.flush = (e, t) => {
            (typeof e == `function` && ((t = e), (e = this.flushFlag)), this.flush(e), t?.());
          };
          try {
            this.handle.params(e, t);
          } finally {
            this.handle.flush = n;
          }
          this.handle && ((this.#e = e), (this.#t = t));
        }
      }
    }
  },
  Zt = class extends Xt {
    #e;
    constructor(e) {
      (super(e, `Gzip`), (this.#e = e && !!e.portable));
    }
    [Kt](e) {
      return this.#e ? ((this.#e = !1), (e[9] = 255), super[Kt](e)) : super[Kt](e);
    }
  },
  Qt = class extends Xt {
    constructor(e) {
      super(e, `Unzip`);
    }
  },
  $t = class extends Yt {
    constructor(e, t) {
      ((e ||= {}),
        (e.flush = e.flush || z.BROTLI_OPERATION_PROCESS),
        (e.finishFlush = e.finishFlush || z.BROTLI_OPERATION_FINISH),
        (e.fullFlushFlag = z.BROTLI_OPERATION_FLUSH),
        super(e, t));
    }
  },
  en = class extends $t {
    constructor(e) {
      super(e, `BrotliCompress`);
    }
  },
  tn = class extends $t {
    constructor(e) {
      super(e, `BrotliDecompress`);
    }
  },
  nn = class extends Yt {
    constructor(e, t) {
      ((e ||= {}),
        (e.flush = e.flush || z.ZSTD_e_continue),
        (e.finishFlush = e.finishFlush || z.ZSTD_e_end),
        (e.fullFlushFlag = z.ZSTD_e_flush),
        super(e, t));
    }
  },
  rn = class extends nn {
    constructor(e) {
      super(e, `ZstdCompress`);
    }
  },
  an = class extends nn {
    constructor(e) {
      super(e, `ZstdDecompress`);
    }
  },
  on = (e, t) => {
    if (Number.isSafeInteger(e)) e < 0 ? cn(e, t) : sn(e, t);
    else throw Error(`cannot encode number outside of javascript safe integer range`);
    return t;
  },
  sn = (e, t) => {
    t[0] = 128;
    for (var n = t.length; n > 1; n--) ((t[n - 1] = e & 255), (e = Math.floor(e / 256)));
  },
  cn = (e, t) => {
    t[0] = 255;
    var n = !1;
    e *= -1;
    for (var r = t.length; r > 1; r--) {
      var i = e & 255;
      ((e = Math.floor(e / 256)),
        n ? (t[r - 1] = fn(i)) : i === 0 ? (t[r - 1] = 0) : ((n = !0), (t[r - 1] = pn(i))));
    }
  },
  ln = (e) => {
    let t = e[0],
      n = t === 128 ? dn(e.subarray(1, e.length)) : t === 255 ? un(e) : null;
    if (n === null) throw Error(`invalid base256 encoding`);
    if (!Number.isSafeInteger(n))
      throw Error(`parsed number outside of javascript safe integer range`);
    return n;
  },
  un = (e) => {
    for (var t = e.length, n = 0, r = !1, i = t - 1; i > -1; i--) {
      var a = Number(e[i]),
        o;
      (r ? (o = fn(a)) : a === 0 ? (o = a) : ((r = !0), (o = pn(a))),
        o !== 0 && (n -= o * 256 ** (t - i - 1)));
    }
    return n;
  },
  dn = (e) => {
    for (var t = e.length, n = 0, r = t - 1; r > -1; r--) {
      var i = Number(e[r]);
      i !== 0 && (n += i * 256 ** (t - r - 1));
    }
    return n;
  },
  fn = (e) => (255 ^ e) & 255,
  pn = (e) => ((255 ^ e) + 1) & 255;
De(
  {},
  { code: () => vn, isCode: () => mn, isName: () => hn, name: () => _n, normalFsTypes: () => gn },
);
var mn = (e) => _n.has(e),
  hn = (e) => vn.has(e),
  gn = new Set([`0`, ``, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `D`]),
  _n = new Map([
    [`0`, `File`],
    [``, `OldFile`],
    [`1`, `Link`],
    [`2`, `SymbolicLink`],
    [`3`, `CharacterDevice`],
    [`4`, `BlockDevice`],
    [`5`, `Directory`],
    [`6`, `FIFO`],
    [`7`, `ContiguousFile`],
    [`g`, `GlobalExtendedHeader`],
    [`x`, `ExtendedHeader`],
    [`A`, `SolarisACL`],
    [`D`, `GNUDumpDir`],
    [`I`, `Inode`],
    [`K`, `NextFileHasLongLinkpath`],
    [`L`, `NextFileHasLongPath`],
    [`M`, `ContinuationFile`],
    [`N`, `OldGnuLongPath`],
    [`S`, `SparseFile`],
    [`V`, `TapeVolumeHeader`],
    [`X`, `OldExtendedHeader`],
  ]),
  vn = new Map(Array.from(_n).map((e) => [e[1], e[0]])),
  B = class {
    cksumValid = !1;
    needPax = !1;
    nullBlock = !1;
    block;
    path;
    mode;
    uid;
    gid;
    size;
    cksum;
    #e = `Unsupported`;
    linkpath;
    uname;
    gname;
    devmaj = 0;
    devmin = 0;
    atime;
    ctime;
    mtime;
    charset;
    comment;
    constructor(e, t = 0, n, r) {
      Buffer.isBuffer(e) ? this.decode(e, t || 0, n, r) : e && this.#t(e);
    }
    decode(e, t, n, r) {
      if (((t ||= 0), !e || !(e.length >= t + 512))) throw Error(`need 512 bytes for header`);
      let i = bn(e, t + 156, 1),
        a = gn.has(i),
        o = a ? n : void 0,
        s = a ? r : void 0;
      if (
        ((this.path = o?.path ?? bn(e, t, 100)),
        (this.mode = o?.mode ?? s?.mode ?? V(e, t + 100, 8)),
        (this.uid = o?.uid ?? s?.uid ?? V(e, t + 108, 8)),
        (this.gid = o?.gid ?? s?.gid ?? V(e, t + 116, 8)),
        (this.size = o?.size ?? s?.size ?? V(e, t + 124, 12)),
        (this.mtime = o?.mtime ?? s?.mtime ?? xn(e, t + 136, 12)),
        (this.cksum = V(e, t + 148, 12)),
        s && this.#t(s, !0),
        o && this.#t(o),
        mn(i) && (this.#e = i || `0`),
        this.#e === `0` && this.path.slice(-1) === `/` && (this.#e = `5`),
        this.#e === `5` && (this.size = 0),
        (this.linkpath = bn(e, t + 157, 100)),
        e.subarray(t + 257, t + 265).toString() === `ustar\x0000`)
      )
        if (
          ((this.uname = o?.uname ?? s?.uname ?? bn(e, t + 265, 32)),
          (this.gname = o?.gname ?? s?.gname ?? bn(e, t + 297, 32)),
          (this.devmaj = o?.devmaj ?? s?.devmaj ?? V(e, t + 329, 8) ?? 0),
          (this.devmin = o?.devmin ?? s?.devmin ?? V(e, t + 337, 8) ?? 0),
          e[t + 475] !== 0)
        ) {
          let n = bn(e, t + 345, 155);
          this.path = n + `/` + this.path;
        } else {
          let i = bn(e, t + 345, 130);
          (i && (this.path = i + `/` + this.path),
            (this.atime = n?.atime ?? r?.atime ?? xn(e, t + 476, 12)),
            (this.ctime = n?.ctime ?? r?.ctime ?? xn(e, t + 488, 12)));
        }
      let c = 256;
      for (let n = t; n < t + 148; n++) c += e[n];
      for (let n = t + 156; n < t + 512; n++) c += e[n];
      ((this.cksumValid = c === this.cksum),
        this.cksum === void 0 && c === 256 && (this.nullBlock = !0));
    }
    #t(e, t = !1) {
      Object.assign(
        this,
        Object.fromEntries(
          Object.entries(e).filter(
            ([e, n]) =>
              !(n == null || (e === `path` && t) || (e === `linkpath` && t) || e === `global`),
          ),
        ),
      );
    }
    encode(e, t = 0) {
      if (
        ((e ||= this.block = Buffer.alloc(512)),
        this.#e === `Unsupported` && (this.#e = `0`),
        !(e.length >= t + 512))
      )
        throw Error(`need 512 bytes for header`);
      let n = this.ctime || this.atime ? 130 : 155,
        r = yn(this.path || ``, n),
        i = r[0],
        a = r[1];
      ((this.needPax = !!r[2]),
        (this.needPax = Mn(e, t, 100, i) || this.needPax),
        (this.needPax = En(e, t + 100, 8, this.mode) || this.needPax),
        (this.needPax = En(e, t + 108, 8, this.uid) || this.needPax),
        (this.needPax = En(e, t + 116, 8, this.gid) || this.needPax),
        (this.needPax = En(e, t + 124, 12, this.size) || this.needPax),
        (this.needPax = An(e, t + 136, 12, this.mtime) || this.needPax),
        (e[t + 156] = Number(this.#e.codePointAt(0))),
        (this.needPax = Mn(e, t + 157, 100, this.linkpath) || this.needPax),
        e.write(`ustar\x0000`, t + 257, 8),
        (this.needPax = Mn(e, t + 265, 32, this.uname) || this.needPax),
        (this.needPax = Mn(e, t + 297, 32, this.gname) || this.needPax),
        (this.needPax = En(e, t + 329, 8, this.devmaj) || this.needPax),
        (this.needPax = En(e, t + 337, 8, this.devmin) || this.needPax),
        (this.needPax = Mn(e, t + 345, n, a) || this.needPax),
        e[t + 475] === 0
          ? ((this.needPax = Mn(e, t + 345, 130, a) || this.needPax),
            (this.needPax = An(e, t + 476, 12, this.atime) || this.needPax),
            (this.needPax = An(e, t + 488, 12, this.ctime) || this.needPax))
          : (this.needPax = Mn(e, t + 345, 155, a) || this.needPax));
      let o = 256;
      for (let n = t; n < t + 148; n++) o += e[n];
      for (let n = t + 156; n < t + 512; n++) o += e[n];
      return (
        (this.cksum = o), En(e, t + 148, 8, this.cksum), (this.cksumValid = !0), this.needPax
      );
    }
    get type() {
      return this.#e === `Unsupported` ? this.#e : _n.get(this.#e);
    }
    get typeKey() {
      return this.#e;
    }
    set type(e) {
      let t = String(vn.get(e));
      if (mn(t) || t === `Unsupported`) this.#e = t;
      else if (mn(e)) this.#e = e;
      else throw TypeError(`invalid entry type: ` + e);
    }
  },
  yn = (e, t) => {
    let n = e,
      r = ``,
      i,
      a = c.posix.parse(e).root || `.`;
    if (Buffer.byteLength(n) < 100) i = [n, r, !1];
    else {
      ((r = c.posix.dirname(n)), (n = c.posix.basename(n)));
      do
        Buffer.byteLength(n) <= 100 && Buffer.byteLength(r) <= t
          ? (i = [n, r, !1])
          : Buffer.byteLength(n) > 100 && Buffer.byteLength(r) <= t
            ? (i = [n.slice(0, 99), r, !0])
            : ((n = c.posix.join(c.posix.basename(r), n)), (r = c.posix.dirname(r)));
      while (r !== a && i === void 0);
      i ||= [e.slice(0, 99), ``, !0];
    }
    return i;
  },
  bn = (e, t, n) =>
    e
      .subarray(t, t + n)
      .toString(`utf8`)
      .replace(/\0.*/, ``),
  xn = (e, t, n) => Sn(V(e, t, n)),
  Sn = (e) => (e === void 0 ? void 0 : new Date(e * 1e3)),
  V = (e, t, n) => (Number(e[t]) & 128 ? ln(e.subarray(t, t + n)) : wn(e, t, n)),
  Cn = (e) => (isNaN(e) ? void 0 : e),
  wn = (e, t, n) =>
    Cn(
      parseInt(
        e
          .subarray(t, t + n)
          .toString(`utf8`)
          .replace(/\0.*$/, ``)
          .trim(),
        8,
      ),
    ),
  Tn = { 12: 8589934591, 8: 2097151 },
  En = (e, t, n, r) =>
    r === void 0
      ? !1
      : r > Tn[n] || r < 0
        ? (on(r, e.subarray(t, t + n)), !0)
        : (Dn(e, t, n, r), !1),
  Dn = (e, t, n, r) => e.write(On(r, n), t, n, `ascii`),
  On = (e, t) => kn(Math.floor(e).toString(8), t),
  kn = (e, t) => (e.length === t - 1 ? e : Array(t - e.length - 1).join(`0`) + e + ` `) + `\0`,
  An = (e, t, n, r) => r !== void 0 && En(e, t, n, r.getTime() / 1e3),
  jn = Array(156).join(`\0`),
  Mn = (e, t, n, r) =>
    r === void 0
      ? !1
      : (e.write(r + jn, t, n, `utf8`), r.length !== Buffer.byteLength(r) || r.length > n),
  Nn = class e {
    atime;
    mtime;
    ctime;
    charset;
    comment;
    gid;
    uid;
    gname;
    uname;
    linkpath;
    dev;
    ino;
    nlink;
    path;
    size;
    mode;
    global;
    constructor(e, t = !1) {
      ((this.atime = e.atime),
        (this.charset = e.charset),
        (this.comment = e.comment),
        (this.ctime = e.ctime),
        (this.dev = e.dev),
        (this.gid = e.gid),
        (this.global = t),
        (this.gname = e.gname),
        (this.ino = e.ino),
        (this.linkpath = e.linkpath),
        (this.mtime = e.mtime),
        (this.nlink = e.nlink),
        (this.path = e.path),
        (this.size = e.size),
        (this.uid = e.uid),
        (this.uname = e.uname));
    }
    encode() {
      let e = this.encodeBody();
      if (e === ``) return Buffer.allocUnsafe(0);
      let t = Buffer.byteLength(e),
        n = 512 * Math.ceil(1 + t / 512),
        r = Buffer.allocUnsafe(n);
      for (let e = 0; e < 512; e++) r[e] = 0;
      (new B({
        path: (`PaxHeader/` + (0, c.basename)(this.path ?? ``)).slice(0, 99),
        mode: this.mode || 420,
        uid: this.uid,
        gid: this.gid,
        size: t,
        mtime: this.mtime,
        type: this.global ? `GlobalExtendedHeader` : `ExtendedHeader`,
        linkpath: ``,
        uname: this.uname || ``,
        gname: this.gname || ``,
        devmaj: 0,
        devmin: 0,
        atime: this.atime,
        ctime: this.ctime,
      }).encode(r),
        r.write(e, 512, t, `utf8`));
      for (let e = t + 512; e < r.length; e++) r[e] = 0;
      return r;
    }
    encodeBody() {
      return (
        this.encodeField(`path`) +
        this.encodeField(`ctime`) +
        this.encodeField(`atime`) +
        this.encodeField(`dev`) +
        this.encodeField(`ino`) +
        this.encodeField(`nlink`) +
        this.encodeField(`charset`) +
        this.encodeField(`comment`) +
        this.encodeField(`gid`) +
        this.encodeField(`gname`) +
        this.encodeField(`linkpath`) +
        this.encodeField(`mtime`) +
        this.encodeField(`size`) +
        this.encodeField(`uid`) +
        this.encodeField(`uname`)
      );
    }
    encodeField(e) {
      if (this[e] === void 0) return ``;
      let t = this[e],
        n = t instanceof Date ? t.getTime() / 1e3 : t,
        r =
          ` ` +
          (e === `dev` || e === `ino` || e === `nlink` ? `SCHILY.` : ``) +
          e +
          `=` +
          n +
          `
`,
        i = Buffer.byteLength(r),
        a = Math.floor(Math.log(i) / Math.log(10)) + 1;
      return (i + a >= 10 ** a && (a += 1), a + i + r);
    }
    static parse(t, n, r = !1) {
      return new e(Pn(Fn(t), n), r);
    }
  },
  Pn = (e, t) => (t ? Object.assign({}, t, e) : e),
  Fn = (e) =>
    e
      .replace(/\n$/, ``)
      .split(
        `
`,
      )
      .reduce(In, Object.create(null)),
  In = (e, t) => {
    let n = parseInt(t, 10);
    if (n !== Buffer.byteLength(t) + 1) return e;
    t = t.slice((n + ` `).length);
    let r = t.split(`=`),
      i = r.shift();
    if (!i) return e;
    let a = i.replace(/^SCHILY\.(dev|ino|nlink)/, `$1`),
      o = r.join(`=`);
    return (
      (e[a] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(a)
        ? new Date(Number(o) * 1e3)
        : /^[0-9]+$/.test(o)
          ? +o
          : o),
      e
    );
  },
  H =
    (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform) === `win32`
      ? (e) => e && e.replaceAll(/\\/g, `/`)
      : (e) => e,
  Ln = class extends ot {
    extended;
    globalExtended;
    header;
    startBlockSize;
    blockRemain;
    remain;
    type;
    meta = !1;
    ignore = !1;
    path;
    mode;
    uid;
    gid;
    uname;
    gname;
    size = 0;
    mtime;
    atime;
    ctime;
    linkpath;
    dev;
    ino;
    nlink;
    invalid = !1;
    absolute;
    unsupported = !1;
    constructor(e, t, n) {
      switch (
        (super({}),
        this.pause(),
        (this.extended = t),
        (this.globalExtended = n),
        (this.header = e),
        (this.remain = e.size ?? 0),
        (this.startBlockSize = 512 * Math.ceil(this.remain / 512)),
        (this.blockRemain = this.startBlockSize),
        (this.type = e.type),
        this.type)
      ) {
        case `File`:
        case `OldFile`:
        case `Link`:
        case `SymbolicLink`:
        case `CharacterDevice`:
        case `BlockDevice`:
        case `Directory`:
        case `FIFO`:
        case `ContiguousFile`:
        case `GNUDumpDir`:
          break;
        case `NextFileHasLongLinkpath`:
        case `NextFileHasLongPath`:
        case `OldGnuLongPath`:
        case `GlobalExtendedHeader`:
        case `ExtendedHeader`:
        case `OldExtendedHeader`:
          this.meta = !0;
          break;
        default:
          this.ignore = !0;
      }
      if (!e.path) throw Error(`no path provided for tar.ReadEntry`);
      ((this.path = H(e.path)),
        (this.mode = e.mode),
        this.mode && (this.mode &= 4095),
        (this.uid = e.uid),
        (this.gid = e.gid),
        (this.uname = e.uname),
        (this.gname = e.gname),
        (this.size = this.remain),
        (this.mtime = e.mtime),
        (this.atime = e.atime),
        (this.ctime = e.ctime),
        (this.linkpath = e.linkpath ? H(e.linkpath) : void 0),
        (this.uname = e.uname),
        (this.gname = e.gname),
        t && this.#e(t),
        n && this.#e(n, !0));
    }
    write(e) {
      let t = e.length;
      if (t > this.blockRemain) throw Error(`writing more to entry than is appropriate`);
      let n = this.remain,
        r = this.blockRemain;
      return (
        (this.remain = Math.max(0, n - t)),
        (this.blockRemain = Math.max(0, r - t)),
        this.ignore ? !0 : n >= t ? super.write(e) : super.write(e.subarray(0, n))
      );
    }
    #e(e, t = !1) {
      ((e.path &&= H(e.path)),
        (e.linkpath &&= H(e.linkpath)),
        Object.assign(
          this,
          Object.fromEntries(
            Object.entries(e).filter(([e, n]) => !(n == null || (e === `path` && t))),
          ),
        ));
    }
  },
  Rn = (e, t, n, r = {}) => {
    (e.file && (r.file = e.file),
      e.cwd && (r.cwd = e.cwd),
      (r.code = (n instanceof Error && n.code) || t),
      (r.tarCode = t),
      !e.strict && r.recoverable !== !1
        ? (n instanceof Error && ((r = Object.assign(n, r)), (n = n.message)),
          e.emit(`warn`, t, n, r))
        : n instanceof Error
          ? e.emit(`error`, Object.assign(n, r))
          : e.emit(`error`, Object.assign(Error(`${t}: ${n}`), r)));
  },
  zn = 1024 * 1024,
  Bn = Buffer.from([31, 139]),
  Vn = Buffer.from([40, 181, 47, 253]),
  Hn = Math.max(Bn.length, Vn.length),
  U = Symbol(`state`),
  Un = Symbol(`writeEntry`),
  W = Symbol(`readEntry`),
  Wn = Symbol(`nextEntry`),
  Gn = Symbol(`processEntry`),
  G = Symbol(`extendedHeader`),
  Kn = Symbol(`globalExtendedHeader`),
  qn = Symbol(`meta`),
  Jn = Symbol(`emitMeta`),
  K = Symbol(`buffer`),
  q = Symbol(`queue`),
  Yn = Symbol(`ended`),
  Xn = Symbol(`emittedEnd`),
  Zn = Symbol(`emit`),
  J = Symbol(`unzip`),
  Qn = Symbol(`consumeChunk`),
  $n = Symbol(`consumeChunkSub`),
  er = Symbol(`consumeBody`),
  tr = Symbol(`consumeMeta`),
  nr = Symbol(`consumeHeader`),
  rr = Symbol(`consuming`),
  ir = Symbol(`bufferConcat`),
  ar = Symbol(`maybeEnd`),
  or = Symbol(`writing`),
  sr = Symbol(`aborted`),
  cr = Symbol(`onDone`),
  lr = Symbol(`sawValidEntry`),
  ur = Symbol(`sawNullBlock`),
  dr = Symbol(`sawEOF`),
  fr = Symbol(`closeStream`),
  pr = () => !0,
  mr = class extends h.EventEmitter {
    file;
    strict;
    maxMetaEntrySize;
    filter;
    brotli;
    zstd;
    writable = !0;
    readable = !1;
    [q] = [];
    [K];
    [W];
    [Un];
    [U] = `begin`;
    [qn] = ``;
    [G];
    [Kn];
    [Yn] = !1;
    [J];
    [sr] = !1;
    [lr];
    [ur] = !1;
    [dr] = !1;
    [or] = !1;
    [rr] = !1;
    [Xn] = !1;
    constructor(e = {}) {
      (super(),
        (this.file = e.file || ``),
        this.on(cr, () => {
          (this[U] === `begin` || this[lr] === !1) &&
            this.warn(`TAR_BAD_ARCHIVE`, `Unrecognized archive format`);
        }),
        e.ondone
          ? this.on(cr, e.ondone)
          : this.on(cr, () => {
              (this.emit(`prefinish`), this.emit(`finish`), this.emit(`end`));
            }),
        (this.strict = !!e.strict),
        (this.maxMetaEntrySize = e.maxMetaEntrySize || zn),
        (this.filter = typeof e.filter == `function` ? e.filter : pr));
      let t = e.file && (e.file.endsWith(`.tar.br`) || e.file.endsWith(`.tbr`));
      this.brotli = !(e.gzip || e.zstd) && e.brotli !== void 0 ? e.brotli : t ? void 0 : !1;
      let n = e.file && (e.file.endsWith(`.tar.zst`) || e.file.endsWith(`.tzst`));
      ((this.zstd = !(e.gzip || e.brotli) && e.zstd !== void 0 ? e.zstd : n ? !0 : void 0),
        this.on(`end`, () => this[fr]()),
        typeof e.onwarn == `function` && this.on(`warn`, e.onwarn),
        typeof e.onReadEntry == `function` && this.on(`entry`, e.onReadEntry));
    }
    warn(e, t, n = {}) {
      Rn(this, e, t, n);
    }
    [nr](e, t) {
      this[lr] === void 0 && (this[lr] = !1);
      let n;
      try {
        n = new B(e, t, this[G], this[Kn]);
      } catch (e) {
        return this.warn(`TAR_ENTRY_INVALID`, e);
      }
      if (n.nullBlock)
        this[ur]
          ? ((this[dr] = !0), this[U] === `begin` && (this[U] = `header`), this[Zn](`eof`))
          : ((this[ur] = !0), this[Zn](`nullBlock`));
      else if (((this[ur] = !1), !n.cksumValid))
        this.warn(`TAR_ENTRY_INVALID`, `checksum failure`, { header: n });
      else if (!n.path) this.warn(`TAR_ENTRY_INVALID`, `path is required`, { header: n });
      else {
        let e = n.type;
        if (/^(Symbolic)?Link$/.test(e) && !n.linkpath)
          this.warn(`TAR_ENTRY_INVALID`, `linkpath required`, { header: n });
        else if (!/^(Symbolic)?Link$/.test(e) && !/^(Global)?ExtendedHeader$/.test(e) && n.linkpath)
          this.warn(`TAR_ENTRY_INVALID`, `linkpath forbidden`, { header: n });
        else {
          let e = (this[Un] = new Ln(n, this[G], this[Kn]));
          (this[lr] ||
            (e.remain
              ? e.on(`end`, () => {
                  e.invalid || (this[lr] = !0);
                })
              : (this[lr] = !0)),
            e.meta
              ? e.size > this.maxMetaEntrySize
                ? ((e.ignore = !0), this[Zn](`ignoredEntry`, e), (this[U] = `ignore`), e.resume())
                : e.size > 0 &&
                  ((this[qn] = ``), e.on(`data`, (e) => (this[qn] += e)), (this[U] = `meta`))
              : ((this[G] = void 0),
                (e.ignore = e.ignore || !this.filter(e.path, e)),
                e.ignore
                  ? (this[Zn](`ignoredEntry`, e),
                    (this[U] = e.remain ? `ignore` : `header`),
                    e.resume())
                  : (e.remain ? (this[U] = `body`) : ((this[U] = `header`), e.end()),
                    this[W] ? this[q].push(e) : (this[q].push(e), this[Wn]()))));
        }
      }
    }
    [fr]() {
      queueMicrotask(() => this.emit(`close`));
    }
    [Gn](e) {
      let t = !0;
      if (!e) ((this[W] = void 0), (t = !1));
      else if (Array.isArray(e)) {
        let [t, ...n] = e;
        this.emit(t, ...n);
      } else
        ((this[W] = e),
          this.emit(`entry`, e),
          e.emittedEnd || (e.on(`end`, () => this[Wn]()), (t = !1)));
      return t;
    }
    [Wn]() {
      do;
      while (this[Gn](this[q].shift()));
      if (this[q].length === 0) {
        let e = this[W];
        !e || e.flowing || e.size === e.remain
          ? this[or] || this.emit(`drain`)
          : e.once(`drain`, () => this.emit(`drain`));
      }
    }
    [er](e, t) {
      let n = this[Un];
      if (!n) throw Error(`attempt to consume body without entry??`);
      let r = n.blockRemain ?? 0,
        i = r >= e.length && t === 0 ? e : e.subarray(t, t + r);
      return (
        n.write(i), n.blockRemain || ((this[U] = `header`), (this[Un] = void 0), n.end()), i.length
      );
    }
    [tr](e, t) {
      let n = this[Un],
        r = this[er](e, t);
      return (!this[Un] && n && this[Jn](n), r);
    }
    [Zn](e, t, n) {
      this[q].length === 0 && !this[W] ? this.emit(e, t, n) : this[q].push([e, t, n]);
    }
    [Jn](e) {
      switch ((this[Zn](`meta`, this[qn]), e.type)) {
        case `ExtendedHeader`:
        case `OldExtendedHeader`:
          this[G] = Nn.parse(this[qn], this[G], !1);
          break;
        case `GlobalExtendedHeader`:
          this[Kn] = Nn.parse(this[qn], this[Kn], !0);
          break;
        case `NextFileHasLongPath`:
        case `OldGnuLongPath`: {
          let e = this[G] ?? Object.create(null);
          ((this[G] = e), (e.path = this[qn].replace(/\0.*/, ``)));
          break;
        }
        case `NextFileHasLongLinkpath`: {
          let e = this[G] || Object.create(null);
          ((this[G] = e), (e.linkpath = this[qn].replace(/\0.*/, ``)));
          break;
        }
        default:
          throw Error(`unknown meta: ` + e.type);
      }
    }
    abort(e) {
      ((this[sr] = !0), this.emit(`abort`, e), this.warn(`TAR_ABORT`, e, { recoverable: !1 }));
    }
    write(e, t, n) {
      if (
        (typeof t == `function` && ((n = t), (t = void 0)),
        typeof e == `string` && (e = Buffer.from(e, typeof t == `string` ? t : `utf8`)),
        this[sr])
      )
        return (n?.(), !1);
      if ((this[J] === void 0 || (this.brotli === void 0 && this[J] === !1)) && e) {
        if ((this[K] && ((e = Buffer.concat([this[K], e])), (this[K] = void 0)), e.length < Hn))
          return ((this[K] = e), n?.(), !0);
        for (let t = 0; this[J] === void 0 && t < Bn.length; t++) e[t] !== Bn[t] && (this[J] = !1);
        let t = !1;
        if (this[J] === !1 && this.zstd !== !1) {
          t = !0;
          for (let n = 0; n < Vn.length; n++)
            if (e[n] !== Vn[n]) {
              t = !1;
              break;
            }
        }
        let r = this.brotli === void 0 && !t;
        if (this[J] === !1 && r)
          if (e.length < 512)
            if (this[Yn]) this.brotli = !0;
            else return ((this[K] = e), n?.(), !0);
          else
            try {
              (new B(e.subarray(0, 512)), (this.brotli = !1));
            } catch {
              this.brotli = !0;
            }
        if (this[J] === void 0 || (this[J] === !1 && (this.brotli || t))) {
          let r = this[Yn];
          ((this[Yn] = !1),
            (this[J] = this[J] === void 0 ? new Qt({}) : t ? new an({}) : new tn({})),
            this[J].on(`data`, (e) => this[Qn](e)),
            this[J].on(`error`, (e) => this.abort(e)),
            this[J].on(`end`, () => {
              ((this[Yn] = !0), this[Qn]());
            }),
            (this[or] = !0));
          let i = !!this[J][r ? `end` : `write`](e);
          return ((this[or] = !1), n?.(), i);
        }
      }
      ((this[or] = !0), this[J] ? this[J].write(e) : this[Qn](e), (this[or] = !1));
      let r = this[q].length > 0 ? !1 : !this[W] || this[W].flowing;
      return (
        !r && this[q].length === 0 && this[W]?.once(`drain`, () => this.emit(`drain`)), n?.(), r
      );
    }
    [ir](e) {
      e && !this[sr] && (this[K] = this[K] ? Buffer.concat([this[K], e]) : e);
    }
    [ar]() {
      if (this[Yn] && !this[Xn] && !this[sr] && !this[rr]) {
        this[Xn] = !0;
        let e = this[Un];
        if (e && e.blockRemain) {
          let t = this[K] ? this[K].length : 0;
          (this.warn(
            `TAR_BAD_ARCHIVE`,
            `Truncated input (needed ${e.blockRemain} more bytes, only ${t} available)`,
            { entry: e },
          ),
            this[K] && e.write(this[K]),
            e.end());
        }
        this[Zn](cr);
      }
    }
    [Qn](e) {
      if (this[rr] && e) this[ir](e);
      else if (!e && !this[K]) this[ar]();
      else if (e) {
        if (((this[rr] = !0), this[K])) {
          this[ir](e);
          let t = this[K];
          ((this[K] = void 0), this[$n](t));
        } else this[$n](e);
        for (; this[K] && this[K]?.length >= 512 && !this[sr] && !this[dr];) {
          let e = this[K];
          ((this[K] = void 0), this[$n](e));
        }
        this[rr] = !1;
      }
      (!this[K] || this[Yn]) && this[ar]();
    }
    [$n](e) {
      let t = 0,
        n = e.length;
      for (; t + 512 <= n && !this[sr] && !this[dr];)
        switch (this[U]) {
          case `begin`:
          case `header`:
            (this[nr](e, t), (t += 512));
            break;
          case `ignore`:
          case `body`:
            t += this[er](e, t);
            break;
          case `meta`:
            t += this[tr](e, t);
            break;
          default:
            throw Error(`invalid state: ` + this[U]);
        }
      t < n && (this[K] = this[K] ? Buffer.concat([e.subarray(t), this[K]]) : e.subarray(t));
    }
    end(e, t, n) {
      return (
        typeof e == `function` && ((n = e), (t = void 0), (e = void 0)),
        typeof t == `function` && ((n = t), (t = void 0)),
        typeof e == `string` && (e = Buffer.from(e, t)),
        n && this.once(`finish`, n),
        this[sr] ||
          (this[J]
            ? (e && this[J].write(e), this[J].end())
            : ((this[Yn] = !0),
              (this.brotli === void 0 || this.zstd === void 0) && (e ||= Buffer.alloc(0)),
              e && this.write(e),
              this[ar]())),
        this
      );
    }
  },
  hr = (e) => {
    let t = e.length - 1,
      n = -1;
    for (; t > -1 && e.charAt(t) === `/`;) ((n = t), t--);
    return n === -1 ? e : e.slice(0, n);
  },
  gr = (e) => {
    let t = e.onReadEntry;
    e.onReadEntry = t
      ? (e) => {
          (t(e), e.resume());
        }
      : (e) => e.resume();
  },
  _r = (e, t) => {
    let n = new Map(t.map((e) => [hr(e), !0])),
      r = e.filter,
      i = (e, t = ``) => {
        let r = t || (0, a.parse)(e).root || `.`,
          o;
        if (e === r) o = !1;
        else {
          let t = n.get(e);
          o = t === void 0 ? i((0, a.dirname)(e), r) : t;
        }
        return (n.set(e, o), o);
      };
    e.filter = r ? (e, t) => r(e, t) && i(hr(e)) : (e) => i(hr(e));
  },
  vr = Bt(
    (e) => {
      let t = new mr(e),
        n = e.file,
        r;
      try {
        r = d.default.openSync(n, `r`);
        let i = d.default.fstatSync(r),
          a = e.maxReadSize || 16 * 1024 * 1024;
        if (i.size < a) {
          let e = Buffer.allocUnsafe(i.size),
            n = d.default.readSync(r, e, 0, i.size, 0);
          t.end(n === e.byteLength ? e : e.subarray(0, n));
        } else {
          let e = 0,
            n = Buffer.allocUnsafe(a);
          for (; e < i.size;) {
            let i = d.default.readSync(r, n, 0, a, e);
            if (i === 0) break;
            ((e += i), t.write(n.subarray(0, i)));
          }
          t.end();
        }
      } finally {
        if (typeof r == `number`)
          try {
            d.default.closeSync(r);
          } catch {}
      }
    },
    (e, t) => {
      let n = new mr(e),
        r = e.maxReadSize || 16 * 1024 * 1024,
        i = e.file;
      return new Promise((e, t) => {
        (n.on(`error`, t),
          n.on(`end`, e),
          d.default.stat(i, (e, a) => {
            if (e) t(e);
            else {
              let e = new Ot(i, { readSize: r, size: a.size });
              (e.on(`error`, t), e.pipe(n));
            }
          }));
      });
    },
    (e) => new mr(e),
    (e) => new mr(e),
    (e, t) => {
      (t?.length && _r(e, t), e.noResume || gr(e));
    },
  ),
  yr = (e, t, n) => (
    (e &= 4095),
    n && (e = (e | 384) & -19),
    t && (e & 256 && (e |= 64), e & 32 && (e |= 8), e & 4 && (e |= 1)),
    e
  ),
  { isAbsolute: br, parse: xr } = c.win32,
  Sr = (e) => {
    let t = ``,
      n = xr(e);
    for (; br(e) || n.root;) {
      let r = e.charAt(0) === `/` && e.slice(0, 4) !== `//?/` ? `/` : n.root;
      ((e = e.slice(r.length)), (t += r), (n = xr(e)));
    }
    return [t, e];
  },
  Cr = [`|`, `<`, `>`, `?`, `:`],
  wr = Cr.map((e) => String.fromCodePoint(61440 + Number(e.codePointAt(0)))),
  Tr = new Map(Cr.map((e, t) => [e, wr[t]])),
  Er = new Map(wr.map((e, t) => [e, Cr[t]])),
  Dr = (e) => Cr.reduce((e, t) => e.split(t).join(Tr.get(t)), e),
  Or = (e) => wr.reduce((e, t) => e.split(t).join(Er.get(t)), e),
  kr = (e, t) => (t ? ((e = H(e).replace(/^\.(\/|$)/, ``)), hr(t) + `/` + e) : H(e)),
  Ar = 16 * 1024 * 1024,
  jr = Symbol(`process`),
  Mr = Symbol(`file`),
  Nr = Symbol(`directory`),
  Pr = Symbol(`symlink`),
  Fr = Symbol(`hardlink`),
  Ir = Symbol(`header`),
  Lr = Symbol(`read`),
  Rr = Symbol(`lstat`),
  zr = Symbol(`onlstat`),
  Br = Symbol(`onread`),
  Vr = Symbol(`onreadlink`),
  Hr = Symbol(`openfile`),
  Ur = Symbol(`onopenfile`),
  Wr = Symbol(`close`),
  Gr = Symbol(`mode`),
  Kr = Symbol(`awaitDrain`),
  qr = Symbol(`ondrain`),
  Y = Symbol(`prefix`),
  Jr = class extends ot {
    path;
    portable;
    myuid = (process.getuid && process.getuid()) || 0;
    myuser = process.env.USER || ``;
    maxReadSize;
    linkCache;
    statCache;
    preservePaths;
    cwd;
    strict;
    mtime;
    noPax;
    noMtime;
    prefix;
    fd;
    blockLen = 0;
    blockRemain = 0;
    buf;
    pos = 0;
    remain = 0;
    length = 0;
    offset = 0;
    win32;
    absolute;
    header;
    type;
    linkpath;
    stat;
    onWriteEntry;
    #e = !1;
    constructor(e, t = {}) {
      let n = zt(t);
      (super(),
        (this.path = H(e)),
        (this.portable = !!n.portable),
        (this.maxReadSize = n.maxReadSize || Ar),
        (this.linkCache = n.linkCache || new Map()),
        (this.statCache = n.statCache || new Map()),
        (this.preservePaths = !!n.preservePaths),
        (this.cwd = H(n.cwd || process.cwd())),
        (this.strict = !!n.strict),
        (this.noPax = !!n.noPax),
        (this.noMtime = !!n.noMtime),
        (this.mtime = n.mtime),
        (this.prefix = n.prefix ? H(n.prefix) : void 0),
        (this.onWriteEntry = n.onWriteEntry),
        typeof n.onwarn == `function` && this.on(`warn`, n.onwarn));
      let r = !1;
      if (!this.preservePaths) {
        let [e, t] = Sr(this.path);
        e && typeof t == `string` && ((this.path = t), (r = e));
      }
      ((this.win32 = !!n.win32 || process.platform === `win32`),
        this.win32 &&
          ((this.path = Or(this.path.replaceAll(/\\/g, `/`))), (e = e.replaceAll(/\\/g, `/`))),
        (this.absolute = H(n.absolute || a.default.resolve(this.cwd, e))),
        this.path === `` && (this.path = `./`),
        r &&
          this.warn(`TAR_ENTRY_INFO`, `stripping ${r} from absolute path`, {
            entry: this,
            path: r + this.path,
          }));
      let i = this.statCache.get(this.absolute);
      i ? this[zr](i) : this[Rr]();
    }
    warn(e, t, n = {}) {
      return Rn(this, e, t, n);
    }
    emit(e, ...t) {
      return (e === `error` && (this.#e = !0), super.emit(e, ...t));
    }
    [Rr]() {
      p.default.lstat(this.absolute, (e, t) => {
        if (e) return this.emit(`error`, e);
        this[zr](t);
      });
    }
    [zr](e) {
      (this.statCache.set(this.absolute, e),
        (this.stat = e),
        e.isFile() || (e.size = 0),
        (this.type = Zr(e)),
        this.emit(`stat`, e),
        this[jr]());
    }
    [jr]() {
      switch (this.type) {
        case `File`:
          return this[Mr]();
        case `Directory`:
          return this[Nr]();
        case `SymbolicLink`:
          return this[Pr]();
        default:
          return this.end();
      }
    }
    [Gr](e) {
      return yr(e, this.type === `Directory`, this.portable);
    }
    [Y](e) {
      return kr(e, this.prefix);
    }
    [Ir]() {
      if (!this.stat) throw Error(`cannot write header before stat`);
      (this.type === `Directory` && this.portable && (this.noMtime = !0),
        this.onWriteEntry?.(this),
        (this.header = new B({
          path: this[Y](this.path),
          linkpath:
            this.type === `Link` && this.linkpath !== void 0
              ? this[Y](this.linkpath)
              : this.linkpath,
          mode: this[Gr](this.stat.mode),
          uid: this.portable ? void 0 : this.stat.uid,
          gid: this.portable ? void 0 : this.stat.gid,
          size: this.stat.size,
          mtime: this.noMtime ? void 0 : this.mtime || this.stat.mtime,
          type: this.type === `Unsupported` ? void 0 : this.type,
          uname: this.portable ? void 0 : this.stat.uid === this.myuid ? this.myuser : ``,
          atime: this.portable ? void 0 : this.stat.atime,
          ctime: this.portable ? void 0 : this.stat.ctime,
        })),
        this.header.encode() &&
          !this.noPax &&
          super.write(
            new Nn({
              atime: this.portable ? void 0 : this.header.atime,
              ctime: this.portable ? void 0 : this.header.ctime,
              gid: this.portable ? void 0 : this.header.gid,
              mtime: this.noMtime ? void 0 : this.mtime || this.header.mtime,
              path: this[Y](this.path),
              linkpath:
                this.type === `Link` && this.linkpath !== void 0
                  ? this[Y](this.linkpath)
                  : this.linkpath,
              size: this.header.size,
              uid: this.portable ? void 0 : this.header.uid,
              uname: this.portable ? void 0 : this.header.uname,
              dev: this.portable ? void 0 : this.stat.dev,
              ino: this.portable ? void 0 : this.stat.ino,
              nlink: this.portable ? void 0 : this.stat.nlink,
            }).encode(),
          ));
      let e = this.header?.block;
      if (!e) throw Error(`failed to encode header`);
      super.write(e);
    }
    [Nr]() {
      if (!this.stat) throw Error(`cannot create directory entry without stat`);
      (this.path.slice(-1) !== `/` && (this.path += `/`),
        (this.stat.size = 0),
        this[Ir](),
        this.end());
    }
    [Pr]() {
      p.default.readlink(this.absolute, (e, t) => {
        if (e) return this.emit(`error`, e);
        this[Vr](t);
      });
    }
    [Vr](e) {
      ((this.linkpath = H(e)), this[Ir](), this.end());
    }
    [Fr](e) {
      if (!this.stat) throw Error(`cannot create link entry without stat`);
      ((this.type = `Link`),
        (this.linkpath = H(a.default.relative(this.cwd, e))),
        (this.stat.size = 0),
        this[Ir](),
        this.end());
    }
    [Mr]() {
      if (!this.stat) throw Error(`cannot create file entry without stat`);
      if (this.stat.nlink > 1) {
        let e = `${this.stat.dev}:${this.stat.ino}`,
          t = this.linkCache.get(e);
        if (t?.indexOf(this.cwd) === 0) return this[Fr](t);
        this.linkCache.set(e, this.absolute);
      }
      if ((this[Ir](), this.stat.size === 0)) return this.end();
      this[Hr]();
    }
    [Hr]() {
      p.default.open(this.absolute, `r`, (e, t) => {
        if (e) return this.emit(`error`, e);
        this[Ur](t);
      });
    }
    [Ur](e) {
      if (((this.fd = e), this.#e)) return this[Wr]();
      if (!this.stat) throw Error(`should stat before calling onopenfile`);
      ((this.blockLen = 512 * Math.ceil(this.stat.size / 512)), (this.blockRemain = this.blockLen));
      let t = Math.min(this.blockLen, this.maxReadSize);
      ((this.buf = Buffer.allocUnsafe(t)),
        (this.offset = 0),
        (this.pos = 0),
        (this.remain = this.stat.size),
        (this.length = this.buf.length),
        this[Lr]());
    }
    [Lr]() {
      let { fd: e, buf: t, offset: n, length: r, pos: i } = this;
      if (e === void 0 || t === void 0) throw Error(`cannot read file without first opening`);
      p.default.read(e, t, n, r, i, (e, t) => {
        if (e) return this[Wr](() => this.emit(`error`, e));
        this[Br](t);
      });
    }
    [Wr](e = () => {}) {
      this.fd !== void 0 && p.default.close(this.fd, e);
    }
    [Br](e) {
      if (e <= 0 && this.remain > 0) {
        let e = Object.assign(Error(`encountered unexpected EOF`), {
          path: this.absolute,
          syscall: `read`,
          code: `EOF`,
        });
        return this[Wr](() => this.emit(`error`, e));
      }
      if (e > this.remain) {
        let e = Object.assign(Error(`did not encounter expected EOF`), {
          path: this.absolute,
          syscall: `read`,
          code: `EOF`,
        });
        return this[Wr](() => this.emit(`error`, e));
      }
      if (!this.buf) throw Error(`should have created buffer prior to reading`);
      if (e === this.remain)
        for (let t = e; t < this.length && e < this.blockRemain; t++)
          ((this.buf[t + this.offset] = 0), e++, this.remain++);
      let t =
        this.offset === 0 && e === this.buf.length
          ? this.buf
          : this.buf.subarray(this.offset, this.offset + e);
      this.write(t) ? this[qr]() : this[Kr](() => this[qr]());
    }
    [Kr](e) {
      this.once(`drain`, e);
    }
    write(e, t, n) {
      if (
        (typeof t == `function` && ((n = t), (t = void 0)),
        typeof e == `string` && (e = Buffer.from(e, typeof t == `string` ? t : `utf8`)),
        this.blockRemain < e.length)
      ) {
        let e = Object.assign(Error(`writing more data than expected`), { path: this.absolute });
        return this.emit(`error`, e);
      }
      return (
        (this.remain -= e.length),
        (this.blockRemain -= e.length),
        (this.pos += e.length),
        (this.offset += e.length),
        super.write(e, null, n)
      );
    }
    [qr]() {
      if (!this.remain)
        return (
          this.blockRemain && super.write(Buffer.alloc(this.blockRemain)),
          this[Wr]((e) => (e ? this.emit(`error`, e) : this.end()))
        );
      if (!this.buf) throw Error(`buffer lost somehow in ONDRAIN`);
      (this.offset >= this.length &&
        ((this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length))),
        (this.offset = 0)),
        (this.length = this.buf.length - this.offset),
        this[Lr]());
    }
  },
  Yr = class extends Jr {
    sync = !0;
    [Rr]() {
      this[zr](p.default.lstatSync(this.absolute));
    }
    [Pr]() {
      this[Vr](p.default.readlinkSync(this.absolute));
    }
    [Hr]() {
      this[Ur](p.default.openSync(this.absolute, `r`));
    }
    [Lr]() {
      let e = !0;
      try {
        let { fd: t, buf: n, offset: r, length: i, pos: a } = this;
        if (t === void 0 || n === void 0) throw Error(`fd and buf must be set in READ method`);
        let o = p.default.readSync(t, n, r, i, a);
        (this[Br](o), (e = !1));
      } finally {
        if (e)
          try {
            this[Wr](() => {});
          } catch {}
      }
    }
    [Kr](e) {
      e();
    }
    [Wr](e = () => {}) {
      (this.fd !== void 0 && p.default.closeSync(this.fd), e());
    }
  },
  Xr = class extends ot {
    blockLen = 0;
    blockRemain = 0;
    buf = 0;
    pos = 0;
    remain = 0;
    length = 0;
    preservePaths;
    portable;
    strict;
    noPax;
    noMtime;
    readEntry;
    type;
    prefix;
    path;
    mode;
    uid;
    gid;
    uname;
    gname;
    header;
    mtime;
    atime;
    ctime;
    linkpath;
    size;
    onWriteEntry;
    warn(e, t, n = {}) {
      return Rn(this, e, t, n);
    }
    constructor(e, t = {}) {
      let n = zt(t);
      (super(),
        (this.preservePaths = !!n.preservePaths),
        (this.portable = !!n.portable),
        (this.strict = !!n.strict),
        (this.noPax = !!n.noPax),
        (this.noMtime = !!n.noMtime),
        (this.onWriteEntry = n.onWriteEntry),
        (this.readEntry = e));
      let { type: r } = e;
      if (r === `Unsupported`) throw Error(`writing entry that should be ignored`);
      ((this.type = r),
        this.type === `Directory` && this.portable && (this.noMtime = !0),
        (this.prefix = n.prefix),
        (this.path = H(e.path)),
        (this.mode = e.mode === void 0 ? void 0 : this[Gr](e.mode)),
        (this.uid = this.portable ? void 0 : e.uid),
        (this.gid = this.portable ? void 0 : e.gid),
        (this.uname = this.portable ? void 0 : e.uname),
        (this.gname = this.portable ? void 0 : e.gname),
        (this.size = e.size),
        (this.mtime = this.noMtime ? void 0 : n.mtime || e.mtime),
        (this.atime = this.portable ? void 0 : e.atime),
        (this.ctime = this.portable ? void 0 : e.ctime),
        (this.linkpath = e.linkpath === void 0 ? void 0 : H(e.linkpath)),
        typeof n.onwarn == `function` && this.on(`warn`, n.onwarn));
      let i = !1;
      if (!this.preservePaths) {
        let [e, t] = Sr(this.path);
        e && typeof t == `string` && ((this.path = t), (i = e));
      }
      ((this.remain = e.size),
        (this.blockRemain = e.startBlockSize),
        this.onWriteEntry?.(this),
        (this.header = new B({
          path: this[Y](this.path),
          linkpath:
            this.type === `Link` && this.linkpath !== void 0
              ? this[Y](this.linkpath)
              : this.linkpath,
          mode: this.mode,
          uid: this.portable ? void 0 : this.uid,
          gid: this.portable ? void 0 : this.gid,
          size: this.size,
          mtime: this.noMtime ? void 0 : this.mtime,
          type: this.type,
          uname: this.portable ? void 0 : this.uname,
          atime: this.portable ? void 0 : this.atime,
          ctime: this.portable ? void 0 : this.ctime,
        })),
        i &&
          this.warn(`TAR_ENTRY_INFO`, `stripping ${i} from absolute path`, {
            entry: this,
            path: i + this.path,
          }),
        this.header.encode() &&
          !this.noPax &&
          super.write(
            new Nn({
              atime: this.portable ? void 0 : this.atime,
              ctime: this.portable ? void 0 : this.ctime,
              gid: this.portable ? void 0 : this.gid,
              mtime: this.noMtime ? void 0 : this.mtime,
              path: this[Y](this.path),
              linkpath:
                this.type === `Link` && this.linkpath !== void 0
                  ? this[Y](this.linkpath)
                  : this.linkpath,
              size: this.size,
              uid: this.portable ? void 0 : this.uid,
              uname: this.portable ? void 0 : this.uname,
              dev: this.portable ? void 0 : this.readEntry.dev,
              ino: this.portable ? void 0 : this.readEntry.ino,
              nlink: this.portable ? void 0 : this.readEntry.nlink,
            }).encode(),
          ));
      let a = this.header?.block;
      if (!a) throw Error(`failed to encode header`);
      (super.write(a), e.pipe(this));
    }
    [Y](e) {
      return kr(e, this.prefix);
    }
    [Gr](e) {
      return yr(e, this.type === `Directory`, this.portable);
    }
    write(e, t, n) {
      (typeof t == `function` && ((n = t), (t = void 0)),
        typeof e == `string` && (e = Buffer.from(e, typeof t == `string` ? t : `utf8`)));
      let r = e.length;
      if (r > this.blockRemain) throw Error(`writing more to entry than is appropriate`);
      return ((this.blockRemain -= r), super.write(e, n));
    }
    end(e, t, n) {
      return (
        this.blockRemain && super.write(Buffer.alloc(this.blockRemain)),
        typeof e == `function` && ((n = e), (t = void 0), (e = void 0)),
        typeof t == `function` && ((n = t), (t = void 0)),
        typeof e == `string` && (e = Buffer.from(e, t ?? `utf8`)),
        n && this.once(`finish`, n),
        e ? super.end(e, n) : super.end(n),
        this
      );
    }
  },
  Zr = (e) =>
    e.isFile()
      ? `File`
      : e.isDirectory()
        ? `Directory`
        : e.isSymbolicLink()
          ? `SymbolicLink`
          : `Unsupported`,
  Qr = class e {
    tail;
    head;
    length = 0;
    static create(t = []) {
      return new e(t);
    }
    constructor(e = []) {
      for (let t of e) this.push(t);
    }
    *[Symbol.iterator]() {
      for (let e = this.head; e; e = e.next) yield e.value;
    }
    removeNode(e) {
      if (e.list !== this) throw Error(`removing node which does not belong to this list`);
      let t = e.next,
        n = e.prev;
      return (
        t && (t.prev = n),
        n && (n.next = t),
        e === this.head && (this.head = t),
        e === this.tail && (this.tail = n),
        this.length--,
        (e.next = void 0),
        (e.prev = void 0),
        (e.list = void 0),
        t
      );
    }
    unshiftNode(e) {
      if (e === this.head) return;
      e.list && e.list.removeNode(e);
      let t = this.head;
      ((e.list = this),
        (e.next = t),
        t && (t.prev = e),
        (this.head = e),
        (this.tail ||= e),
        this.length++);
    }
    pushNode(e) {
      if (e === this.tail) return;
      e.list && e.list.removeNode(e);
      let t = this.tail;
      ((e.list = this),
        (e.prev = t),
        t && (t.next = e),
        (this.tail = e),
        (this.head ||= e),
        this.length++);
    }
    push(...e) {
      for (let t = 0, n = e.length; t < n; t++) ei(this, e[t]);
      return this.length;
    }
    unshift(...e) {
      for (var t = 0, n = e.length; t < n; t++) ti(this, e[t]);
      return this.length;
    }
    pop() {
      if (!this.tail) return;
      let e = this.tail.value,
        t = this.tail;
      return (
        (this.tail = this.tail.prev),
        this.tail ? (this.tail.next = void 0) : (this.head = void 0),
        (t.list = void 0),
        this.length--,
        e
      );
    }
    shift() {
      if (!this.head) return;
      let e = this.head.value,
        t = this.head;
      return (
        (this.head = this.head.next),
        this.head ? (this.head.prev = void 0) : (this.tail = void 0),
        (t.list = void 0),
        this.length--,
        e
      );
    }
    forEach(e, t) {
      t ||= this;
      for (let n = this.head, r = 0; n; r++) (e.call(t, n.value, r, this), (n = n.next));
    }
    forEachReverse(e, t) {
      t ||= this;
      for (let n = this.tail, r = this.length - 1; n; r--)
        (e.call(t, n.value, r, this), (n = n.prev));
    }
    get(e) {
      let t = 0,
        n = this.head;
      for (; n && t < e; t++) n = n.next;
      if (t === e && n) return n.value;
    }
    getReverse(e) {
      let t = 0,
        n = this.tail;
      for (; n && t < e; t++) n = n.prev;
      if (t === e && n) return n.value;
    }
    map(t, n) {
      n ||= this;
      let r = new e();
      for (let e = this.head; e;) (r.push(t.call(n, e.value, this)), (e = e.next));
      return r;
    }
    mapReverse(t, n) {
      n ||= this;
      var r = new e();
      for (let e = this.tail; e;) (r.push(t.call(n, e.value, this)), (e = e.prev));
      return r;
    }
    reduce(e, t) {
      let n,
        r = this.head;
      if (arguments.length > 1) n = t;
      else if (this.head) ((r = this.head.next), (n = this.head.value));
      else throw TypeError(`Reduce of empty list with no initial value`);
      for (var i = 0; r; i++) ((n = e(n, r.value, i)), (r = r.next));
      return n;
    }
    reduceReverse(e, t) {
      let n,
        r = this.tail;
      if (arguments.length > 1) n = t;
      else if (this.tail) ((r = this.tail.prev), (n = this.tail.value));
      else throw TypeError(`Reduce of empty list with no initial value`);
      for (let t = this.length - 1; r; t--) ((n = e(n, r.value, t)), (r = r.prev));
      return n;
    }
    toArray() {
      let e = Array(this.length);
      for (let t = 0, n = this.head; n; t++) ((e[t] = n.value), (n = n.next));
      return e;
    }
    toArrayReverse() {
      let e = Array(this.length);
      for (let t = 0, n = this.tail; n; t++) ((e[t] = n.value), (n = n.prev));
      return e;
    }
    slice(t = 0, n = this.length) {
      (n < 0 && (n += this.length), t < 0 && (t += this.length));
      let r = new e();
      if (n < t || n < 0) return r;
      (t < 0 && (t = 0), n > this.length && (n = this.length));
      let i = this.head,
        a = 0;
      for (a = 0; i && a < t; a++) i = i.next;
      for (; i && a < n; a++, i = i.next) r.push(i.value);
      return r;
    }
    sliceReverse(t = 0, n = this.length) {
      (n < 0 && (n += this.length), t < 0 && (t += this.length));
      let r = new e();
      if (n < t || n < 0) return r;
      (t < 0 && (t = 0), n > this.length && (n = this.length));
      let i = this.length,
        a = this.tail;
      for (; a && i > n; i--) a = a.prev;
      for (; a && i > t; i--, a = a.prev) r.push(a.value);
      return r;
    }
    splice(e, t = 0, ...n) {
      (e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e));
      let r = this.head;
      for (let t = 0; r && t < e; t++) r = r.next;
      let i = [];
      for (let e = 0; r && e < t; e++) (i.push(r.value), (r = this.removeNode(r)));
      r ? r !== this.tail && (r = r.prev) : (r = this.tail);
      for (let e of n) r = $r(this, r, e);
      return i;
    }
    reverse() {
      let e = this.head,
        t = this.tail;
      for (let t = e; t; t = t.prev) {
        let e = t.prev;
        ((t.prev = t.next), (t.next = e));
      }
      return ((this.head = t), (this.tail = e), this);
    }
  };
function $r(e, t, n) {
  let r = new ni(n, t, t ? t.next : e.head, e);
  return (r.next === void 0 && (e.tail = r), r.prev === void 0 && (e.head = r), e.length++, r);
}
function ei(e, t) {
  ((e.tail = new ni(t, e.tail, void 0, e)), (e.head ||= e.tail), e.length++);
}
function ti(e, t) {
  ((e.head = new ni(t, void 0, e.head, e)), (e.tail ||= e.head), e.length++);
}
var ni = class {
    list;
    next;
    prev;
    value;
    constructor(e, t, n, r) {
      ((this.list = r),
        (this.value = e),
        t ? ((t.next = this), (this.prev = t)) : (this.prev = void 0),
        n ? ((n.prev = this), (this.next = n)) : (this.next = void 0));
    }
  },
  ri = class {
    path;
    absolute;
    entry;
    stat;
    readdir;
    pending = !1;
    pendingLink = !1;
    ignore = !1;
    piped = !1;
    constructor(e, t) {
      ((this.path = e || `./`), (this.absolute = t));
    }
  },
  ii = Buffer.alloc(1024),
  ai = Symbol(`onStat`),
  oi = Symbol(`ended`),
  X = Symbol(`queue`),
  si = Symbol(`pendingLinks`),
  ci = Symbol(`current`),
  li = Symbol(`process`),
  ui = Symbol(`processing`),
  di = Symbol(`processJob`),
  Z = Symbol(`jobs`),
  fi = Symbol(`jobDone`),
  pi = Symbol(`addFSEntry`),
  mi = Symbol(`addTarEntry`),
  hi = Symbol(`stat`),
  gi = Symbol(`readdir`),
  _i = Symbol(`onreaddir`),
  vi = Symbol(`pipe`),
  yi = Symbol(`entry`),
  bi = Symbol(`entryOpt`),
  xi = Symbol(`writeEntryClass`),
  Si = Symbol(`write`),
  Ci = Symbol(`ondrain`),
  wi = class extends ot {
    sync = !1;
    opt;
    cwd;
    maxReadSize;
    preservePaths;
    strict;
    noPax;
    prefix;
    linkCache;
    statCache;
    file;
    portable;
    zip;
    readdirCache;
    noDirRecurse;
    follow;
    noMtime;
    mtime;
    filter;
    jobs;
    [xi];
    onWriteEntry;
    [X];
    [si] = new Map();
    [Z] = 0;
    [ui] = !1;
    [oi] = !1;
    constructor(e = {}) {
      if (
        (super(),
        (this.opt = e),
        (this.file = e.file || ``),
        (this.cwd = e.cwd || process.cwd()),
        (this.maxReadSize = e.maxReadSize),
        (this.preservePaths = !!e.preservePaths),
        (this.strict = !!e.strict),
        (this.noPax = !!e.noPax),
        (this.prefix = H(e.prefix || ``)),
        (this.linkCache = e.linkCache || new Map()),
        (this.statCache = e.statCache || new Map()),
        (this.readdirCache = e.readdirCache || new Map()),
        (this.onWriteEntry = e.onWriteEntry),
        (this[xi] = Jr),
        typeof e.onwarn == `function` && this.on(`warn`, e.onwarn),
        (this.portable = !!e.portable),
        e.gzip || e.brotli || e.zstd)
      ) {
        if (+!!e.gzip + +!!e.brotli + +!!e.zstd > 1)
          throw TypeError(`gzip, brotli, zstd are mutually exclusive`);
        if (
          (e.gzip &&
            (typeof e.gzip != `object` && (e.gzip = {}),
            this.portable && (e.gzip.portable = !0),
            (this.zip = new Zt(e.gzip))),
          e.brotli &&
            (typeof e.brotli != `object` && (e.brotli = {}), (this.zip = new en(e.brotli))),
          e.zstd && (typeof e.zstd != `object` && (e.zstd = {}), (this.zip = new rn(e.zstd))),
          !this.zip)
        )
          throw Error(`impossible`);
        let t = this.zip;
        (t.on(`data`, (e) => super.write(e)),
          t.on(`end`, () => super.end()),
          t.on(`drain`, () => this[Ci]()),
          this.on(`resume`, () => t.resume()));
      } else this.on(`drain`, this[Ci]);
      ((this.noDirRecurse = !!e.noDirRecurse),
        (this.follow = !!e.follow),
        (this.noMtime = !!e.noMtime),
        e.mtime && (this.mtime = e.mtime),
        (this.filter = typeof e.filter == `function` ? e.filter : () => !0),
        (this[X] = new Qr()),
        (this[Z] = 0),
        (this.jobs = Number(e.jobs) || 4),
        (this[ui] = !1),
        (this[oi] = !1));
    }
    [Si](e) {
      return super.write(e);
    }
    add(e) {
      return (this.write(e), this);
    }
    end(e, t, n) {
      return (
        typeof e == `function` && ((n = e), (e = void 0)),
        typeof t == `function` && ((n = t), (t = void 0)),
        e && this.add(e),
        (this[oi] = !0),
        this[li](),
        n && n(),
        this
      );
    }
    write(e) {
      if (this[oi]) throw Error(`write after end`);
      return (typeof e == `string` ? this[pi](e) : this[mi](e), this.flowing);
    }
    [mi](e) {
      let t = H(a.default.resolve(this.cwd, e.path));
      if (!this.filter(e.path, e)) e.resume();
      else {
        let n = new ri(e.path, t);
        ((n.entry = new Xr(e, this[bi](n))),
          n.entry.on(`end`, () => this[fi](n)),
          (this[Z] += 1),
          this[X].push(n));
      }
      this[li]();
    }
    [pi](e) {
      let t = H(a.default.resolve(this.cwd, e));
      (this[X].push(new ri(e, t)), this[li]());
    }
    [hi](e) {
      ((e.pending = !0),
        (this[Z] += 1),
        p.default[this.follow ? `stat` : `lstat`](e.absolute, (t, n) => {
          ((e.pending = !1), --this[Z], t ? this.emit(`error`, t) : this[ai](e, n));
        }));
    }
    [ai](e, t) {
      if ((this.statCache.set(e.absolute, t), (e.stat = t), !this.filter(e.path, t))) e.ignore = !0;
      else if (t.isFile() && t.nlink > 1 && !this.linkCache.get(`${t.dev}:${t.ino}`) && !this.sync)
        if (e === this[ci]) this[di](e);
        else {
          let n = `${t.dev}:${t.ino}`,
            r = this[si].get(n);
          (r ? r.push(e) : this[si].set(n, [e]), (e.pendingLink = !0), (e.pending = !0));
        }
      this[li]();
    }
    [gi](e) {
      ((e.pending = !0),
        (this[Z] += 1),
        p.default.readdir(e.absolute, (t, n) => {
          if (((e.pending = !1), --this[Z], t)) return this.emit(`error`, t);
          this[_i](e, n);
        }));
    }
    [_i](e, t) {
      (this.readdirCache.set(e.absolute, t), (e.readdir = t), this[li]());
    }
    [li]() {
      if (!this[ui]) {
        this[ui] = !0;
        for (let e = this[X].head; e && this[Z] < this.jobs; e = e.next)
          if ((this[di](e.value), e.value.ignore)) {
            let t = e.next;
            (this[X].removeNode(e), (e.next = t));
          }
        ((this[ui] = !1),
          this[oi] &&
            this[X].length === 0 &&
            this[Z] === 0 &&
            (this.zip ? this.zip.end(ii) : (super.write(ii), super.end())));
      }
    }
    get [ci]() {
      return this[X] && this[X].head && this[X].head.value;
    }
    [fi](e) {
      (this[X].shift(), --this[Z]);
      let { stat: t } = e;
      if (t && t.isFile() && t.nlink > 1) {
        let e = `${t.dev}:${t.ino}`,
          n = this[si].get(e);
        if (n) {
          this[si].delete(e);
          for (let e of n) ((e.pending = !1), this[di](e));
        }
      }
      this[li]();
    }
    [di](e) {
      if (
        (e.pending && e.pendingLink && e === this[ci] && ((e.pending = !1), (e.pendingLink = !1)),
        !e.pending)
      ) {
        if (e.entry) {
          e === this[ci] && !e.piped && this[vi](e);
          return;
        }
        if (!e.stat) {
          let t = this.statCache.get(e.absolute);
          t ? this[ai](e, t) : this[hi](e);
        }
        if (e.stat && !e.ignore) {
          if (!this.noDirRecurse && e.stat.isDirectory() && !e.readdir) {
            let t = this.readdirCache.get(e.absolute);
            if ((t ? this[_i](e, t) : this[gi](e), !e.readdir)) return;
          }
          if (((e.entry = this[yi](e)), !e.entry)) {
            e.ignore = !0;
            return;
          }
          e === this[ci] && !e.piped && this[vi](e);
        }
      }
    }
    [bi](e) {
      return {
        onwarn: (e, t, n) => this.warn(e, t, n),
        noPax: this.noPax,
        cwd: this.cwd,
        absolute: e.absolute,
        preservePaths: this.preservePaths,
        maxReadSize: this.maxReadSize,
        strict: this.strict,
        portable: this.portable,
        linkCache: this.linkCache,
        statCache: this.statCache,
        noMtime: this.noMtime,
        mtime: this.mtime,
        prefix: this.prefix,
        onWriteEntry: this.onWriteEntry,
      };
    }
    [yi](e) {
      this[Z] += 1;
      try {
        return new this[xi](e.path, this[bi](e))
          .on(`end`, () => this[fi](e))
          .on(`error`, (e) => this.emit(`error`, e));
      } catch (e) {
        this.emit(`error`, e);
      }
    }
    [Ci]() {
      this[ci] && this[ci].entry && this[ci].entry.resume();
    }
    [vi](e) {
      ((e.piped = !0),
        e.readdir &&
          e.readdir.forEach((t) => {
            let n = e.path,
              r = n === `./` ? `` : n.replace(/\/*$/, `/`);
            this[pi](r + t);
          }));
      let t = e.entry,
        n = this.zip;
      if (!t) throw Error(`cannot pipe without source`);
      n
        ? t.on(`data`, (e) => {
            n.write(e) || t.pause();
          })
        : t.on(`data`, (e) => {
            super.write(e) || t.pause();
          });
    }
    pause() {
      return (this.zip && this.zip.pause(), super.pause());
    }
    warn(e, t, n = {}) {
      Rn(this, e, t, n);
    }
  },
  Ti = class extends wi {
    sync = !0;
    constructor(e) {
      (super(e), (this[xi] = Yr));
    }
    pause() {}
    resume() {}
    [hi](e) {
      let t = this.follow ? `statSync` : `lstatSync`;
      this[ai](e, p.default[t](e.absolute));
    }
    [gi](e) {
      this[_i](e, p.default.readdirSync(e.absolute));
    }
    [vi](e) {
      let t = e.entry,
        n = this.zip;
      if (
        (e.readdir &&
          e.readdir.forEach((t) => {
            let n = e.path,
              r = n === `./` ? `` : n.replace(/\/*$/, `/`);
            this[pi](r + t);
          }),
        !t)
      )
        throw Error(`Cannot pipe without source`);
      n
        ? t.on(`data`, (e) => {
            n.write(e);
          })
        : t.on(`data`, (e) => {
            super[Si](e);
          });
    }
  },
  Ei = (e, t) => {
    let n = new Ti(e),
      r = new jt(e.file, { mode: e.mode || 438 });
    (n.pipe(r), Oi(n, t));
  },
  Di = (e, t) => {
    let n = new wi(e),
      r = new At(e.file, { mode: e.mode || 438 });
    n.pipe(r);
    let i = new Promise((e, t) => {
      (r.on(`error`, t), r.on(`close`, e), n.on(`error`, t));
    });
    return (ki(n, t).catch((e) => n.emit(`error`, e)), i);
  },
  Oi = (e, t) => {
    (t.forEach((t) => {
      t.charAt(0) === `@`
        ? vr({
            file: c.default.resolve(e.cwd, t.slice(1)),
            sync: !0,
            noResume: !0,
            onReadEntry: (t) => e.add(t),
          })
        : e.add(t);
    }),
      e.end());
  },
  ki = async (e, t) => {
    for (let n of t)
      n.charAt(0) === `@`
        ? await vr({
            file: c.default.resolve(String(e.cwd), n.slice(1)),
            noResume: !0,
            onReadEntry: (t) => {
              e.add(t);
            },
          })
        : e.add(n);
    e.end();
  };
Bt(
  Ei,
  Di,
  (e, t) => {
    let n = new Ti(e);
    return (Oi(n, t), n);
  },
  (e, t) => {
    let n = new wi(e);
    return (ki(n, t).catch((e) => n.emit(`error`, e)), n);
  },
  (e, t) => {
    if (!t?.length) throw TypeError(`no paths specified to add to archive`);
  },
);
var Ai = (process.env.__FAKE_PLATFORM__ || process.platform) === `win32`,
  { O_CREAT: ji, O_NOFOLLOW: Mi, O_TRUNC: Ni, O_WRONLY: Pi } = p.default.constants,
  Fi = Number(process.env.__FAKE_FS_O_FILENAME__) || p.default.constants.UV_FS_O_FILEMAP || 0,
  Ii = Ai && !!Fi,
  Li = 512 * 1024,
  Ri = Fi | Ni | ji | Pi,
  zi = !Ai && typeof Mi == `number` ? Mi | Ni | ji | Pi : null,
  Bi = zi === null ? (Ii ? (e) => (e < Li ? Ri : `w`) : () => `w`) : () => zi,
  Vi = (e, t, n) => {
    try {
      return d.default.lchownSync(e, t, n);
    } catch (e) {
      if (e?.code !== `ENOENT`) throw e;
    }
  },
  Hi = (e, t, n, r) => {
    d.default.lchown(e, t, n, (e) => {
      r(e && e?.code !== `ENOENT` ? e : null);
    });
  },
  Ui = (e, t, n, r, i) => {
    t.isDirectory()
      ? Wi(c.default.resolve(e, t.name), n, r, (a) => {
          if (a) return i(a);
          Hi(c.default.resolve(e, t.name), n, r, i);
        })
      : Hi(c.default.resolve(e, t.name), n, r, i);
  },
  Wi = (e, t, n, r) => {
    d.default.readdir(e, { withFileTypes: !0 }, (i, a) => {
      if (i) {
        if (i.code === `ENOENT`) return r();
        if (i.code !== `ENOTDIR` && i.code !== `ENOTSUP`) return r(i);
      }
      if (i || !a.length) return Hi(e, t, n, r);
      let o = a.length,
        s = null,
        c = (i) => {
          if (!s) {
            if (i) return r((s = i));
            if (--o === 0) return Hi(e, t, n, r);
          }
        };
      for (let r of a) Ui(e, r, t, n, c);
    });
  },
  Gi = (e, t, n, r) => {
    (t.isDirectory() && Ki(c.default.resolve(e, t.name), n, r),
      Vi(c.default.resolve(e, t.name), n, r));
  },
  Ki = (e, t, n) => {
    let r;
    try {
      r = d.default.readdirSync(e, { withFileTypes: !0 });
    } catch (r) {
      let i = r;
      if (i?.code === `ENOENT`) return;
      if (i?.code === `ENOTDIR` || i?.code === `ENOTSUP`) return Vi(e, t, n);
      throw i;
    }
    for (let i of r) Gi(e, i, t, n);
    return Vi(e, t, n);
  },
  qi = class extends Error {
    path;
    code;
    syscall = `chdir`;
    constructor(e, t) {
      (super(`${t}: Cannot cd into '${e}'`), (this.path = e), (this.code = t));
    }
    get name() {
      return `CwdError`;
    }
  },
  Ji = class extends Error {
    path;
    symlink;
    syscall = `symlink`;
    code = `TAR_SYMLINK_ERROR`;
    constructor(e, t) {
      (super(`TAR_SYMLINK_ERROR: Cannot extract through symbolic link`),
        (this.symlink = e),
        (this.path = t));
    }
    get name() {
      return `SymlinkError`;
    }
  },
  Yi = (e, t) => {
    d.default.stat(e, (n, r) => {
      ((n || !r.isDirectory()) && (n = new qi(e, n?.code || `ENOTDIR`)), t(n));
    });
  },
  Xi = (e, t, n) => {
    e = H(e);
    let r = t.umask ?? 18,
      i = t.mode | 448,
      a = (i & r) !== 0,
      o = t.uid,
      s = t.gid,
      l =
        typeof o == `number` && typeof s == `number` && (o !== t.processUid || s !== t.processGid),
      u = t.preserve,
      p = t.unlink,
      m = H(t.cwd),
      h = (t, r) => {
        t ? n(t) : r && l ? Wi(r, o, s, (e) => h(e)) : a ? d.default.chmod(e, i, n) : n();
      };
    if (e === m) return Yi(e, h);
    if (u)
      return f.default.mkdir(e, { mode: i, recursive: !0 }).then((e) => h(null, e ?? void 0), h);
    Zi(m, H(c.default.relative(m, e)).split(`/`), i, p, m, void 0, h);
  },
  Zi = (e, t, n, r, i, a, o) => {
    if (t.length === 0) return o(null, a);
    let s = t.shift(),
      l = H(c.default.resolve(e + `/` + s));
    d.default.mkdir(l, n, Qi(l, t, n, r, i, a, o));
  },
  Qi = (e, t, n, r, i, a, o) => (s) => {
    s
      ? d.default.lstat(e, (c, l) => {
          if (c) ((c.path = c.path && H(c.path)), o(c));
          else if (l.isDirectory()) Zi(e, t, n, r, i, a, o);
          else if (r)
            d.default.unlink(e, (s) => {
              if (s) return o(s);
              d.default.mkdir(e, n, Qi(e, t, n, r, i, a, o));
            });
          else {
            if (l.isSymbolicLink()) return o(new Ji(e, e + `/` + t.join(`/`)));
            o(s);
          }
        })
      : ((a ||= e), Zi(e, t, n, r, i, a, o));
  },
  $i = (e) => {
    let t = !1,
      n;
    try {
      t = d.default.statSync(e).isDirectory();
    } catch (e) {
      n = e?.code;
    } finally {
      if (!t) throw new qi(e, n ?? `ENOTDIR`);
    }
  },
  ea = (e, t) => {
    e = H(e);
    let n = t.umask ?? 18,
      r = t.mode | 448,
      i = (r & n) !== 0,
      a = t.uid,
      o = t.gid,
      s =
        typeof a == `number` && typeof o == `number` && (a !== t.processUid || o !== t.processGid),
      l = t.preserve,
      u = t.unlink,
      f = H(t.cwd),
      p = (t) => {
        (t && s && Ki(t, a, o), i && d.default.chmodSync(e, r));
      };
    if (e === f) return ($i(f), p());
    if (l) return p(d.default.mkdirSync(e, { mode: r, recursive: !0 }) ?? void 0);
    let m = H(c.default.relative(f, e)).split(`/`),
      h;
    for (let e = m.shift(), t = f; e && (t += `/` + e); e = m.shift()) {
      t = H(c.default.resolve(t));
      try {
        (d.default.mkdirSync(t, r), (h ||= t));
      } catch {
        let e = d.default.lstatSync(t);
        if (e.isDirectory()) continue;
        if (u) {
          (d.default.unlinkSync(t), d.default.mkdirSync(t, r), (h ||= t));
          continue;
        } else if (e.isSymbolicLink()) return new Ji(t, t + `/` + m.join(`/`));
      }
    }
    return p(h);
  },
  ta = Object.create(null),
  na = 1e4,
  ra = new Set(),
  ia = (e) => {
    (ra.has(e)
      ? ra.delete(e)
      : (ta[e] = e.normalize(`NFD`).toLocaleLowerCase(`en`).toLocaleUpperCase(`en`)),
      ra.add(e));
    let t = ta[e],
      n = ra.size - na;
    if (n > na / 10) {
      for (let e of ra) if ((ra.delete(e), delete ta[e], --n <= 0)) break;
    }
    return t;
  },
  aa = (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform) === `win32`,
  oa = (e) =>
    e
      .split(`/`)
      .slice(0, -1)
      .reduce((e, t) => {
        let n = e.at(-1);
        return (n !== void 0 && (t = (0, c.join)(n, t)), e.push(t || `/`), e);
      }, []),
  sa = class {
    #e = new Map();
    #t = new Map();
    #n = new Set();
    reserve(e, t) {
      e = aa ? [`win32 parallelization disabled`] : e.map((e) => hr((0, c.join)(ia(e))));
      let n = new Set(e.map((e) => oa(e)).reduce((e, t) => e.concat(t)));
      this.#t.set(t, { dirs: n, paths: e });
      for (let n of e) {
        let e = this.#e.get(n);
        e ? e.push(t) : this.#e.set(n, [t]);
      }
      for (let e of n) {
        let n = this.#e.get(e);
        if (!n) this.#e.set(e, [new Set([t])]);
        else {
          let e = n.at(-1);
          e instanceof Set ? e.add(t) : n.push(new Set([t]));
        }
      }
      return this.#i(t);
    }
    #r(e) {
      let t = this.#t.get(e);
      if (!t) throw Error(`function does not have any path reservations`);
      return {
        paths: t.paths.map((e) => this.#e.get(e)),
        dirs: [...t.dirs].map((e) => this.#e.get(e)),
      };
    }
    check(e) {
      let { paths: t, dirs: n } = this.#r(e);
      return (
        t.every((t) => t && t[0] === e) && n.every((t) => t && t[0] instanceof Set && t[0].has(e))
      );
    }
    #i(e) {
      return this.#n.has(e) || !this.check(e) ? !1 : (this.#n.add(e), e(() => this.#a(e)), !0);
    }
    #a(e) {
      if (!this.#n.has(e)) return !1;
      let t = this.#t.get(e);
      if (!t) throw Error(`invalid reservation`);
      let { paths: n, dirs: r } = t,
        i = new Set();
      for (let t of n) {
        let n = this.#e.get(t);
        if (!n || n?.[0] !== e) continue;
        let r = n[1];
        if (!r) {
          this.#e.delete(t);
          continue;
        }
        if ((n.shift(), typeof r == `function`)) i.add(r);
        else for (let e of r) i.add(e);
      }
      for (let t of r) {
        let n = this.#e.get(t),
          r = n?.[0];
        if (!(!n || !(r instanceof Set)))
          if (r.size === 1 && n.length === 1) {
            this.#e.delete(t);
            continue;
          } else if (r.size === 1) {
            n.shift();
            let e = n[0];
            typeof e == `function` && i.add(e);
          } else r.delete(e);
      }
      return (this.#n.delete(e), i.forEach((e) => this.#i(e)), !0);
    }
  },
  ca = () => process.umask(),
  la = Symbol(`onEntry`),
  ua = Symbol(`checkFs`),
  da = Symbol(`checkFs2`),
  fa = Symbol(`isReusable`),
  Q = Symbol(`makeFs`),
  pa = Symbol(`file`),
  ma = Symbol(`directory`),
  ha = Symbol(`link`),
  ga = Symbol(`symlink`),
  _a = Symbol(`hardlink`),
  va = Symbol(`ensureNoSymlink`),
  ya = Symbol(`unsupported`),
  ba = Symbol(`checkPath`),
  xa = Symbol(`stripAbsolutePath`),
  Sa = Symbol(`mkdir`),
  $ = Symbol(`onError`),
  Ca = Symbol(`pending`),
  wa = Symbol(`pend`),
  Ta = Symbol(`unpend`),
  Ea = Symbol(`ended`),
  Da = Symbol(`maybeClose`),
  Oa = Symbol(`skip`),
  ka = Symbol(`doChown`),
  Aa = Symbol(`uid`),
  ja = Symbol(`gid`),
  Ma = Symbol(`checkedCwd`),
  Na = (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform) === `win32`,
  Pa = 1024,
  Fa = (e, t) => {
    if (!Na) return d.default.unlink(e, t);
    let n = e + `.DELETE.` + (0, u.randomBytes)(16).toString(`hex`);
    d.default.rename(e, n, (e) => {
      if (e) return t(e);
      d.default.unlink(n, t);
    });
  },
  Ia = (e) => {
    if (!Na) return d.default.unlinkSync(e);
    let t = e + `.DELETE.` + (0, u.randomBytes)(16).toString(`hex`);
    (d.default.renameSync(e, t), d.default.unlinkSync(t));
  },
  La = (e, t, n) => (e !== void 0 && e === e >>> 0 ? e : t !== void 0 && t === t >>> 0 ? t : n),
  Ra = class extends mr {
    [Ea] = !1;
    [Ma] = !1;
    [Ca] = 0;
    reservations = new sa();
    transform;
    writable = !0;
    readable = !1;
    uid;
    gid;
    setOwner;
    preserveOwner;
    processGid;
    processUid;
    maxDepth;
    forceChown;
    win32;
    newer;
    keep;
    noMtime;
    preservePaths;
    unlink;
    cwd;
    strip;
    processUmask;
    umask;
    dmode;
    fmode;
    chmod;
    constructor(e = {}) {
      if (
        ((e.ondone = () => {
          ((this[Ea] = !0), this[Da]());
        }),
        super(e),
        (this.transform = e.transform),
        (this.chmod = !!e.chmod),
        typeof e.uid == `number` || typeof e.gid == `number`)
      ) {
        if (typeof e.uid != `number` || typeof e.gid != `number`)
          throw TypeError(`cannot set owner without number uid and gid`);
        if (e.preserveOwner)
          throw TypeError(`cannot preserve owner in archive and also set owner explicitly`);
        ((this.uid = e.uid), (this.gid = e.gid), (this.setOwner = !0));
      } else ((this.uid = void 0), (this.gid = void 0), (this.setOwner = !1));
      ((this.preserveOwner =
        e.preserveOwner === void 0 && typeof e.uid != `number`
          ? !!(process.getuid && process.getuid() === 0)
          : !!e.preserveOwner),
        (this.processUid =
          (this.preserveOwner || this.setOwner) && process.getuid ? process.getuid() : void 0),
        (this.processGid =
          (this.preserveOwner || this.setOwner) && process.getgid ? process.getgid() : void 0),
        (this.maxDepth = typeof e.maxDepth == `number` ? e.maxDepth : Pa),
        (this.forceChown = e.forceChown === !0),
        (this.win32 = !!e.win32 || Na),
        (this.newer = !!e.newer),
        (this.keep = !!e.keep),
        (this.noMtime = !!e.noMtime),
        (this.preservePaths = !!e.preservePaths),
        (this.unlink = !!e.unlink),
        (this.cwd = H(c.default.resolve(e.cwd || process.cwd()))),
        (this.strip = Number(e.strip) || 0),
        (this.processUmask = this.chmod
          ? typeof e.processUmask == `number`
            ? e.processUmask
            : ca()
          : 0),
        (this.umask = typeof e.umask == `number` ? e.umask : this.processUmask),
        (this.dmode = e.dmode || 511 & ~this.umask),
        (this.fmode = e.fmode || 438 & ~this.umask),
        this.on(`entry`, (e) => this[la](e)));
    }
    warn(e, t, n = {}) {
      return (
        (e === `TAR_BAD_ARCHIVE` || e === `TAR_ABORT`) && (n.recoverable = !1), super.warn(e, t, n)
      );
    }
    [Da]() {
      this[Ea] && this[Ca] === 0 && (this.emit(`prefinish`), this.emit(`finish`), this.emit(`end`));
    }
    [xa](e, t) {
      let n = e[t],
        { type: r } = e;
      if (!n || this.preservePaths) return !0;
      let [i, a] = Sr(n),
        o = a.replaceAll(/\\/g, `/`).split(`/`);
      if (o.includes(`..`) || (Na && /^[a-z]:\.\.$/i.test(o[0] ?? ``))) {
        if (t === `path` || r === `Link`)
          return (this.warn(`TAR_ENTRY_ERROR`, `${t} contains '..'`, { entry: e, [t]: n }), !1);
        let i = c.default.posix.dirname(e.path),
          a = c.default.posix.normalize(c.default.posix.join(i, o.join(`/`)));
        if (a.startsWith(`../`) || a === `..`)
          return (
            this.warn(`TAR_ENTRY_ERROR`, `${t} escapes extraction directory`, { entry: e, [t]: n }),
            !1
          );
      }
      return (
        i &&
          ((e[t] = String(a)),
          this.warn(`TAR_ENTRY_INFO`, `stripping ${i} from absolute ${t}`, { entry: e, [t]: n })),
        !0
      );
    }
    [ba](e) {
      let t = H(e.path),
        n = t.split(`/`);
      if (this.strip) {
        if (n.length < this.strip) return !1;
        if (e.type === `Link`) {
          let t = H(String(e.linkpath)).split(`/`);
          if (t.length >= this.strip) e.linkpath = t.slice(this.strip).join(`/`);
          else return !1;
        }
        (n.splice(0, this.strip), (e.path = n.join(`/`)));
      }
      if (isFinite(this.maxDepth) && n.length > this.maxDepth)
        return (
          this.warn(`TAR_ENTRY_ERROR`, `path excessively deep`, {
            entry: e,
            path: t,
            depth: n.length,
            maxDepth: this.maxDepth,
          }),
          !1
        );
      if (!this[xa](e, `path`) || !this[xa](e, `linkpath`)) return !1;
      if (
        ((e.absolute = c.default.isAbsolute(e.path)
          ? H(c.default.resolve(e.path))
          : H(c.default.resolve(this.cwd, e.path))),
        !this.preservePaths &&
          typeof e.absolute == `string` &&
          e.absolute.indexOf(this.cwd + `/`) !== 0 &&
          e.absolute !== this.cwd)
      )
        return (
          this.warn(`TAR_ENTRY_ERROR`, `path escaped extraction target`, {
            entry: e,
            path: H(e.path),
            resolvedPath: e.absolute,
            cwd: this.cwd,
          }),
          !1
        );
      if (e.absolute === this.cwd && e.type !== `Directory` && e.type !== `GNUDumpDir`) return !1;
      if (this.win32) {
        let { root: t } = c.default.win32.parse(String(e.absolute));
        e.absolute = t + Dr(String(e.absolute).slice(t.length));
        let { root: n } = c.default.win32.parse(e.path);
        e.path = n + Dr(e.path.slice(n.length));
      }
      return !0;
    }
    [la](e) {
      if (!this[ba](e)) return e.resume();
      switch ((oe.default.equal(typeof e.absolute, `string`), e.type)) {
        case `Directory`:
        case `GNUDumpDir`:
          e.mode && (e.mode |= 448);
        case `File`:
        case `OldFile`:
        case `ContiguousFile`:
        case `Link`:
        case `SymbolicLink`:
          return this[ua](e);
        default:
          return this[ya](e);
      }
    }
    [$](e, t) {
      e.name === `CwdError`
        ? this.emit(`error`, e)
        : (this.warn(`TAR_ENTRY_ERROR`, e, { entry: t }), this[Ta](), t.resume());
    }
    [Sa](e, t, n) {
      Xi(
        H(e),
        {
          uid: this.uid,
          gid: this.gid,
          processUid: this.processUid,
          processGid: this.processGid,
          umask: this.processUmask,
          preserve: this.preservePaths,
          unlink: this.unlink,
          cwd: this.cwd,
          mode: t,
        },
        n,
      );
    }
    [ka](e) {
      return (
        this.forceChown ||
        (this.preserveOwner &&
          ((typeof e.uid == `number` && e.uid !== this.processUid) ||
            (typeof e.gid == `number` && e.gid !== this.processGid))) ||
        (typeof this.uid == `number` && this.uid !== this.processUid) ||
        (typeof this.gid == `number` && this.gid !== this.processGid)
      );
    }
    [Aa](e) {
      return La(this.uid, e.uid, this.processUid);
    }
    [ja](e) {
      return La(this.gid, e.gid, this.processGid);
    }
    [pa](e, t) {
      let n = typeof e.mode == `number` ? e.mode & 4095 : this.fmode,
        r = new At(String(e.absolute), { flags: Bi(e.size), mode: n, autoClose: !1 });
      r.on(`error`, (n) => {
        (r.fd && d.default.close(r.fd, () => {}), (r.write = () => !0), this[$](n, e), t());
      });
      let i = 1,
        a = (n) => {
          if (n) {
            (r.fd && d.default.close(r.fd, () => {}), this[$](n, e), t());
            return;
          }
          --i === 0 &&
            r.fd !== void 0 &&
            d.default.close(r.fd, (n) => {
              (n ? this[$](n, e) : this[Ta](), t());
            });
        };
      r.on(`finish`, () => {
        let t = String(e.absolute),
          n = r.fd;
        if (typeof n == `number` && e.mtime && !this.noMtime) {
          i++;
          let r = e.atime || new Date(),
            o = e.mtime;
          d.default.futimes(n, r, o, (e) =>
            e ? d.default.utimes(t, r, o, (t) => a(t && e)) : a(),
          );
        }
        if (typeof n == `number` && this[ka](e)) {
          i++;
          let r = this[Aa](e),
            o = this[ja](e);
          typeof r == `number` &&
            typeof o == `number` &&
            d.default.fchown(n, r, o, (e) =>
              e ? d.default.chown(t, r, o, (t) => a(t && e)) : a(),
            );
        }
        a();
      });
      let o = (this.transform && this.transform(e)) || e;
      (o !== e &&
        (o.on(`error`, (n) => {
          (this[$](n, e), t());
        }),
        e.pipe(o)),
        o.pipe(r));
    }
    [ma](e, t) {
      let n = typeof e.mode == `number` ? e.mode & 4095 : this.dmode;
      this[Sa](String(e.absolute), n, (n) => {
        if (n) {
          (this[$](n, e), t());
          return;
        }
        let r = 1,
          i = () => {
            --r === 0 && (t(), this[Ta](), e.resume());
          };
        (e.mtime &&
          !this.noMtime &&
          (r++, d.default.utimes(String(e.absolute), e.atime || new Date(), e.mtime, i)),
          this[ka](e) &&
            (r++, d.default.chown(String(e.absolute), Number(this[Aa](e)), Number(this[ja](e)), i)),
          i());
      });
    }
    [ya](e) {
      ((e.unsupported = !0),
        this.warn(`TAR_ENTRY_UNSUPPORTED`, `unsupported entry type: ${e.type}`, { entry: e }),
        e.resume());
    }
    [ga](e, t) {
      let n = H(
        c.default.relative(
          this.cwd,
          c.default.resolve(c.default.dirname(String(e.absolute)), String(e.linkpath)),
        ),
      ).split(`/`);
      this[va](
        e,
        this.cwd,
        n,
        () => this[ha](e, String(e.linkpath), `symlink`, t),
        (n) => {
          (this[$](n, e), t());
        },
      );
    }
    [_a](e, t) {
      let n = H(c.default.resolve(this.cwd, String(e.linkpath))),
        r = H(String(e.linkpath)).split(`/`);
      this[va](
        e,
        this.cwd,
        r,
        () => this[ha](e, n, `link`, t),
        (n) => {
          (this[$](n, e), t());
        },
      );
    }
    [va](e, t, n, r, i) {
      let a = n.shift();
      if (this.preservePaths || a === void 0) return r();
      let o = c.default.resolve(t, a);
      d.default.lstat(o, (t, a) => {
        if (t) return r();
        if (a?.isSymbolicLink()) return i(new Ji(o, c.default.resolve(o, n.join(`/`))));
        this[va](e, o, n, r, i);
      });
    }
    [wa]() {
      this[Ca]++;
    }
    [Ta]() {
      (this[Ca]--, this[Da]());
    }
    [Oa](e) {
      (this[Ta](), e.resume());
    }
    [fa](e, t) {
      return e.type === `File` && !this.unlink && t.isFile() && t.nlink <= 1 && !Na;
    }
    [ua](e) {
      this[wa]();
      let t = [e.path];
      (e.linkpath && t.push(e.linkpath), this.reservations.reserve(t, (t) => this[da](e, t)));
    }
    [da](e, t) {
      let n = (e) => {
          t(e);
        },
        r = () => {
          this[Sa](this.cwd, this.dmode, (t) => {
            if (t) {
              (this[$](t, e), n());
              return;
            }
            ((this[Ma] = !0), i());
          });
        },
        i = () => {
          if (e.absolute !== this.cwd) {
            let t = H(c.default.dirname(String(e.absolute)));
            if (t !== this.cwd)
              return this[Sa](t, this.dmode, (t) => {
                if (t) {
                  (this[$](t, e), n());
                  return;
                }
                a();
              });
          }
          a();
        },
        a = () => {
          d.default.lstat(String(e.absolute), (t, r) => {
            if (r && (this.keep || (this.newer && r.mtime > (e.mtime ?? r.mtime)))) {
              (this[Oa](e), n());
              return;
            }
            if (t || this[fa](e, r)) return this[Q](null, e, n);
            if (r.isDirectory()) {
              if (e.type === `Directory`) {
                let t = this.chmod && e.mode && (r.mode & 4095) !== e.mode,
                  i = (t) => this[Q](t ?? null, e, n);
                return t ? d.default.chmod(String(e.absolute), Number(e.mode), i) : i();
              }
              if (e.absolute !== this.cwd)
                return d.default.rmdir(String(e.absolute), (t) => this[Q](t ?? null, e, n));
            }
            if (e.absolute === this.cwd) return this[Q](null, e, n);
            Fa(String(e.absolute), (t) => this[Q](t ?? null, e, n));
          });
        };
      this[Ma] ? i() : r();
    }
    [Q](e, t, n) {
      if (e) {
        (this[$](e, t), n());
        return;
      }
      switch (t.type) {
        case `File`:
        case `OldFile`:
        case `ContiguousFile`:
          return this[pa](t, n);
        case `Link`:
          return this[_a](t, n);
        case `SymbolicLink`:
          return this[ga](t, n);
        case `Directory`:
        case `GNUDumpDir`:
          return this[ma](t, n);
      }
    }
    [ha](e, t, n, r) {
      d.default[n](t, String(e.absolute), (t) => {
        (t ? this[$](t, e) : (this[Ta](), e.resume()), r());
      });
    }
  },
  za = (e) => {
    try {
      return [null, e()];
    } catch (e) {
      return [e, null];
    }
  },
  Ba = class extends Ra {
    sync = !0;
    [Q](e, t) {
      return super[Q](e, t, () => {});
    }
    [ua](e) {
      if (!this[Ma]) {
        let t = this[Sa](this.cwd, this.dmode);
        if (t) return this[$](t, e);
        this[Ma] = !0;
      }
      if (e.absolute !== this.cwd) {
        let t = H(c.default.dirname(String(e.absolute)));
        if (t !== this.cwd) {
          let n = this[Sa](t, this.dmode);
          if (n) return this[$](n, e);
        }
      }
      let [t, n] = za(() => d.default.lstatSync(String(e.absolute)));
      if (n && (this.keep || (this.newer && n.mtime > (e.mtime ?? n.mtime)))) return this[Oa](e);
      if (t || this[fa](e, n)) return this[Q](null, e);
      if (n.isDirectory()) {
        if (e.type === `Directory`) {
          let [t] =
            this.chmod && e.mode && (n.mode & 4095) !== e.mode
              ? za(() => {
                  d.default.chmodSync(String(e.absolute), Number(e.mode));
                })
              : [];
          return this[Q](t, e);
        }
        let [t] = za(() => d.default.rmdirSync(String(e.absolute)));
        this[Q](t, e);
      }
      let [r] = e.absolute === this.cwd ? [] : za(() => Ia(String(e.absolute)));
      this[Q](r, e);
    }
    [pa](e, t) {
      let n = typeof e.mode == `number` ? e.mode & 4095 : this.fmode,
        r = (n) => {
          let r;
          try {
            d.default.closeSync(i);
          } catch (e) {
            r = e;
          }
          ((n || r) && this[$](n || r, e), t());
        },
        i;
      try {
        i = d.default.openSync(String(e.absolute), Bi(e.size), n);
      } catch (e) {
        return r(e);
      }
      let a = (this.transform && this.transform(e)) || e;
      (a !== e && (a.on(`error`, (t) => this[$](t, e)), e.pipe(a)),
        a.on(`data`, (e) => {
          try {
            d.default.writeSync(i, e, 0, e.length);
          } catch (e) {
            r(e);
          }
        }),
        a.on(`end`, () => {
          let t = null;
          if (e.mtime && !this.noMtime) {
            let n = e.atime || new Date(),
              r = e.mtime;
            try {
              d.default.futimesSync(i, n, r);
            } catch (i) {
              try {
                d.default.utimesSync(String(e.absolute), n, r);
              } catch {
                t = i;
              }
            }
          }
          if (this[ka](e)) {
            let n = this[Aa](e),
              r = this[ja](e);
            try {
              d.default.fchownSync(i, Number(n), Number(r));
            } catch (i) {
              try {
                d.default.chownSync(String(e.absolute), Number(n), Number(r));
              } catch {
                t ||= i;
              }
            }
          }
          r(t);
        }));
    }
    [ma](e, t) {
      let n = typeof e.mode == `number` ? e.mode & 4095 : this.dmode,
        r = this[Sa](String(e.absolute), n);
      if (r) {
        (this[$](r, e), t());
        return;
      }
      if (e.mtime && !this.noMtime)
        try {
          d.default.utimesSync(String(e.absolute), e.atime || new Date(), e.mtime);
        } catch {}
      if (this[ka](e))
        try {
          d.default.chownSync(String(e.absolute), Number(this[Aa](e)), Number(this[ja](e)));
        } catch {}
      (t(), e.resume());
    }
    [Sa](e, t) {
      try {
        return ea(H(e), {
          uid: this.uid,
          gid: this.gid,
          processUid: this.processUid,
          processGid: this.processGid,
          umask: this.processUmask,
          preserve: this.preservePaths,
          unlink: this.unlink,
          cwd: this.cwd,
          mode: t,
        });
      } catch (e) {
        return e;
      }
    }
    [va](e, t, n, r, i) {
      if (this.preservePaths || n.length === 0) return r();
      let a = t;
      for (let e of n) {
        a = c.default.resolve(a, e);
        let [o, s] = za(() => d.default.lstatSync(a));
        if (o) return r();
        if (s.isSymbolicLink()) return i(new Ji(a, c.default.resolve(t, n.join(`/`))));
      }
      r();
    }
    [ha](e, t, n, r) {
      let i = `${n}Sync`;
      try {
        (d.default[i](t, String(e.absolute)), r(), e.resume());
      } catch (t) {
        return this[$](t, e);
      }
    }
  },
  Va = Bt(
    (e) => {
      let t = new Ba(e),
        n = e.file,
        r = d.default.statSync(n);
      new kt(n, { readSize: e.maxReadSize || 16 * 1024 * 1024, size: r.size }).pipe(t);
    },
    (e, t) => {
      let n = new Ra(e),
        r = e.maxReadSize || 16 * 1024 * 1024,
        i = e.file;
      return new Promise((e, t) => {
        (n.on(`error`, t),
          n.on(`close`, e),
          d.default.stat(i, (e, a) => {
            if (e) t(e);
            else {
              let e = new Ot(i, { readSize: r, size: a.size });
              (e.on(`error`, t), e.pipe(n));
            }
          }));
      });
    },
    (e) => new Ba(e),
    (e) => new Ra(e),
    (e, t) => {
      t?.length && _r(e, t);
    },
  ),
  Ha = (e, t) => {
    let n = new Ti(e),
      r = !0,
      i,
      a;
    try {
      try {
        i = d.default.openSync(e.file, `r+`);
      } catch (t) {
        if (t?.code === `ENOENT`) i = d.default.openSync(e.file, `w+`);
        else throw t;
      }
      let o = d.default.fstatSync(i),
        s = Buffer.alloc(512);
      t: for (a = 0; a < o.size; a += 512) {
        for (let e = 0, t = 0; e < 512; e += t) {
          if (
            ((t = d.default.readSync(i, s, e, s.length - e, a + e)),
            a === 0 && s[0] === 31 && s[1] === 139)
          )
            throw Error(`cannot append to compressed archives`);
          if (!t) break t;
        }
        let t = new B(s);
        if (!t.cksumValid) break;
        let n = 512 * Math.ceil((t.size || 0) / 512);
        if (a + n + 512 > o.size) break;
        ((a += n), e.mtimeCache && t.mtime && e.mtimeCache.set(String(t.path), t.mtime));
      }
      ((r = !1), Ua(e, n, a, i, t));
    } finally {
      if (r)
        try {
          d.default.closeSync(i);
        } catch {}
    }
  },
  Ua = (e, t, n, r, i) => {
    let a = new jt(e.file, { fd: r, start: n });
    (t.pipe(a), Ga(t, i));
  },
  Wa = (e, t) => {
    t = Array.from(t);
    let n = new wi(e),
      r = (t, n, r) => {
        let i = (e, n) => {
            e ? d.default.close(t, (t) => r(e)) : r(null, n);
          },
          a = 0;
        if (n === 0) return i(null, 0);
        let o = 0,
          s = Buffer.alloc(512),
          c = (r, l) => {
            if (r || l === void 0) return i(r);
            if (((o += l), o < 512 && l)) return d.default.read(t, s, o, s.length - o, a + o, c);
            if (a === 0 && s[0] === 31 && s[1] === 139)
              return i(Error(`cannot append to compressed archives`));
            if (o < 512) return i(null, a);
            let u = new B(s);
            if (!u.cksumValid) return i(null, a);
            let f = 512 * Math.ceil((u.size ?? 0) / 512);
            if (a + f + 512 > n || ((a += f + 512), a >= n)) return i(null, a);
            (e.mtimeCache && u.mtime && e.mtimeCache.set(String(u.path), u.mtime),
              (o = 0),
              d.default.read(t, s, 0, 512, a, c));
          };
        d.default.read(t, s, 0, 512, a, c);
      };
    return new Promise((i, a) => {
      n.on(`error`, a);
      let o = `r+`,
        s = (c, l) => {
          if (c && c.code === `ENOENT` && o === `r+`)
            return ((o = `w+`), d.default.open(e.file, o, s));
          if (c || !l) return a(c);
          d.default.fstat(l, (o, s) => {
            if (o) return d.default.close(l, () => a(o));
            r(l, s.size, (r, o) => {
              if (r) return a(r);
              let s = new At(e.file, { fd: l, start: o });
              (n.pipe(s), s.on(`error`, a), s.on(`close`, i), Ka(n, t));
            });
          });
        };
      d.default.open(e.file, o, s);
    });
  },
  Ga = (e, t) => {
    (t.forEach((t) => {
      t.charAt(0) === `@`
        ? vr({
            file: c.default.resolve(e.cwd, t.slice(1)),
            sync: !0,
            noResume: !0,
            onReadEntry: (t) => e.add(t),
          })
        : e.add(t);
    }),
      e.end());
  },
  Ka = async (e, t) => {
    for (let n of t)
      n.charAt(0) === `@`
        ? await vr({
            file: c.default.resolve(String(e.cwd), n.slice(1)),
            noResume: !0,
            onReadEntry: (t) => e.add(t),
          })
        : e.add(n);
    e.end();
  },
  qa = Bt(
    Ha,
    Wa,
    () => {
      throw TypeError(`file is required`);
    },
    () => {
      throw TypeError(`file is required`);
    },
    (e, t) => {
      if (!Lt(e)) throw TypeError(`file is required`);
      if (e.gzip || e.brotli || e.zstd || e.file.endsWith(`.br`) || e.file.endsWith(`.tbr`))
        throw TypeError(`cannot append to compressed archives`);
      if (!t?.length) throw TypeError(`no paths specified to add/replace`);
    },
  );
Bt(qa.syncFile, qa.asyncFile, qa.syncNoFile, qa.asyncNoFile, (e, t = []) => {
  (qa.validate?.(e, t), Ja(e));
});
var Ja = (e) => {
    let t = e.filter;
    ((e.mtimeCache ||= new Map()),
      (e.filter = t
        ? (n, r) => t(n, r) && !((e.mtimeCache?.get(n) ?? r.mtime ?? 0) > (r.mtime ?? 0))
        : (t, n) => !((e.mtimeCache?.get(t) ?? n.mtime ?? 0) > (n.mtime ?? 0))));
  },
  Ya = 1024 * 1024,
  Xa = 100,
  Za = t.ru({ path: t.su().trim().min(1) }),
  Qa = t.ru({ entries: t.Yl(t.uu()) }),
  $a = t.ru({
    nativeHostNames: t.Yl(t.su().trim().min(1)),
    paths: t.ru({
      browserClientPath: t.su().trim().min(1).optional(),
      extensionHostPath: t.su().trim().min(1),
    }),
  });
async function eo(e) {
  let n = t.ci(),
    r = uo(e),
    i = r == null ? null : t.nn(r),
    [a, o] = await Promise.all([to(t.rn({ codexHome: n })), to(i == null ? [] : t.tn(i))]),
    s = [a, o].filter((e) => e != null);
  if (s.length === 0) return { pathsReport: null, snapshots: s };
  let c = ro(o),
    l = c.nativeHostPath,
    u = l == null ? null : ao(l),
    d = io(a),
    [f, p, m] = await Promise.all([
      l == null ? null : co(l),
      so(u),
      Promise.all(
        d.entries.map(
          async ({ nativeHostNames: e, browserClientPath: t, extensionHostPath: n }) => {
            let [r, i] = await Promise.all([t == null ? null : co(t), co(n)]);
            return {
              nativeHostNames: e,
              browserClientPath: t,
              unfurledBrowserClientPath: r?.path ?? null,
              unfurledBrowserClientPathErrorCode: r?.errorCode ?? null,
              extensionHostPath: n,
              unfurledExtensionHostPath: i.path,
              unfurledExtensionHostPathErrorCode: i.errorCode,
            };
          },
        ),
      ),
    ]);
  return {
    pathsReport: {
      manifest:
        o == null
          ? null
          : {
              path: o.sourcePath,
              parseErrorCode: c.parseErrorCode,
              nativeHostPath: l,
              unfurledNativeHostPath: f?.path ?? null,
              unfurledNativeHostPathErrorCode: f?.errorCode ?? null,
              chromePluginCachePath: u,
              cachedChromePluginPaths: p.paths,
              cachedChromePluginPathsTruncated: p.truncated,
              chromePluginCacheErrorCode: p.errorCode,
            },
      chromeNativeHostsV2:
        a == null
          ? null
          : {
              path: a.sourcePath,
              parseErrorCode: d.parseErrorCode,
              invalidEntryCount: d.invalidEntryCount,
              entries: m,
            },
    },
    snapshots: s,
  };
}
async function to(e) {
  return (await Promise.all(e.map((e) => no(e)))).find((e) => e != null) ?? null;
}
async function no(e) {
  try {
    let t = await (0, f.lstat)(e);
    if (!t.isFile() || t.size > Ya) return null;
    let n = await (0, f.open)(e, process.platform === `win32` ? `r` : d.constants.O_NOFOLLOW);
    try {
      let r = await n.stat();
      if (!r.isFile() || r.size > Ya || r.dev !== t.dev || r.ino !== t.ino) return null;
      let i = Buffer.alloc(r.size),
        a = 0;
      for (; a < i.length;) {
        let { bytesRead: e } = await n.read(i, a, i.length - a, a);
        if (e === 0) return null;
        a += e;
      }
      return (await n.stat()).size === r.size
        ? { contents: i, name: (0, s.basename)(e), sourcePath: e }
        : null;
    } finally {
      await n.close();
    }
  } catch {
    return null;
  }
}
function ro(e) {
  if (e == null) return { nativeHostPath: null, parseErrorCode: null };
  try {
    let t = Za.safeParse(JSON.parse(e.contents.toString(`utf8`)));
    return t.success
      ? { nativeHostPath: t.data.path, parseErrorCode: null }
      : { nativeHostPath: null, parseErrorCode: `INVALID_STRUCTURE` };
  } catch {
    return { nativeHostPath: null, parseErrorCode: `INVALID_JSON` };
  }
}
function io(e) {
  if (e == null) return { entries: [], invalidEntryCount: 0, parseErrorCode: null };
  try {
    let t = Qa.safeParse(JSON.parse(e.contents.toString(`utf8`)));
    if (!t.success)
      return { entries: [], invalidEntryCount: 0, parseErrorCode: `INVALID_STRUCTURE` };
    let n = t.data.entries.flatMap((e) => {
      let t = $a.safeParse(e);
      return t.success
        ? [
            {
              nativeHostNames: t.data.nativeHostNames,
              browserClientPath: t.data.paths.browserClientPath ?? null,
              extensionHostPath: t.data.paths.extensionHostPath,
            },
          ]
        : [];
    });
    return {
      entries: n,
      invalidEntryCount: t.data.entries.length - n.length,
      parseErrorCode: null,
    };
  } catch {
    return { entries: [], invalidEntryCount: 0, parseErrorCode: `INVALID_JSON` };
  }
}
function ao(e) {
  if (!(0, s.isAbsolute)(e)) return null;
  let t = (0, s.dirname)(e);
  for (; t !== (0, s.dirname)(t);) {
    if ((0, s.basename)(t) === `extension-host`) {
      let e = (0, s.dirname)((0, s.dirname)(t));
      if (oo(e)) return e;
    }
    t = (0, s.dirname)(t);
  }
  return null;
}
function oo(e) {
  let t = (0, s.basename)(e);
  return (
    (t === `chrome-dev` || t === `chrome-internal` || t === `chrome`) &&
    (0, s.basename)((0, s.dirname)(e)) === `openai-bundled` &&
    (0, s.basename)((0, s.dirname)((0, s.dirname)(e))) === `cache` &&
    (0, s.basename)((0, s.dirname)((0, s.dirname)((0, s.dirname)(e)))) === `plugins`
  );
}
async function so(e) {
  if (e == null) return { paths: [], truncated: !1, errorCode: null };
  try {
    if (!(await (0, f.lstat)(e)).isDirectory())
      return { paths: [], truncated: !1, errorCode: `NOT_DIRECTORY` };
    let n = await (0, f.realpath)(e),
      r = (0, s.join)(
        await (0, f.realpath)((0, s.dirname)((0, s.dirname)((0, s.dirname)((0, s.dirname)(e))))),
        `plugins`,
        `cache`,
        t.pc,
        (0, s.basename)(e),
      );
    if (
      (process.platform === `win32` ? n.toLowerCase() : n) !==
      (process.platform === `win32` ? r.toLowerCase() : r)
    )
      return { paths: [], truncated: !1, errorCode: `UNEXPECTED_REALPATH` };
    let i = (await (0, f.readdir)(n, { withFileTypes: !0 }))
      .filter((e) => e.name !== `latest` && e.isDirectory())
      .sort((e, t) => e.name.localeCompare(t.name));
    return {
      paths: i.slice(0, Xa).map((t) => (0, s.join)(e, t.name)),
      truncated: i.length > Xa,
      errorCode: null,
    };
  } catch (e) {
    return { paths: [], truncated: !1, errorCode: lo(e) };
  }
}
async function co(e) {
  try {
    return { path: await (0, f.realpath)(e), errorCode: null };
  } catch (e) {
    return { path: null, errorCode: lo(e) };
  }
}
function lo(e) {
  return typeof e == `object` && e && `code` in e && typeof e.code == `string` ? e.code : `UNKNOWN`;
}
function uo(e) {
  return de(e) ? t.nc : fe(e) ? t.rc : pe(e) ? t.ic : null;
}
async function fo(e) {
  return mo(await po(e));
}
async function po(e) {
  let n = await t.pn(),
    r = new Map();
  for (let { parentPid: e, pid: t } of n) {
    let n = r.get(e);
    n == null ? r.set(e, [t]) : n.push(t);
  }
  let i = new Map([[process.pid, 0]]),
    a = [process.pid];
  for (; a.length > 0;) {
    let e = a.pop();
    if (e == null) continue;
    let t = i.get(e);
    if (t != null) for (let n of r.get(e) ?? []) i.has(n) || (i.set(n, t + 1), a.push(n));
  }
  let c = n
      .map(({ ageSeconds: e, command: t, cpuPercent: n, parentPid: r, pid: a, rssKb: o }) => ({
        pid: a,
        ppid: r,
        command: (0, s.basename)(t),
        rssBytes: o == null ? null : o * 1024,
        rssMiB: o == null ? null : Math.round((o / 1024) * 10) / 10,
        cpuPercent: n,
        ageSeconds: e,
        codexProcessDepth: i.get(a) ?? null,
      }))
      .sort((e, t) =>
        e.rssBytes === t.rssBytes ? e.pid - t.pid : (t.rssBytes ?? -1) - (e.rssBytes ?? -1),
      ),
    l = c.filter((e) => e.codexProcessDepth != null);
  return {
    schemaVersion: 1,
    capturedAt: e.toISOString(),
    platform: process.platform,
    architecture: process.arch,
    codexMainProcessPid: process.pid,
    system: {
      totalMemoryBytes: (0, o.totalmem)(),
      freeMemoryBytes: (0, o.freemem)(),
      processCount: c.length,
      summedProcessRssBytes: c.reduce((e, t) => e + (t.rssBytes ?? 0), 0),
    },
    codex: {
      processCount: l.length,
      summedProcessRssBytes: l.reduce((e, t) => e + (t.rssBytes ?? 0), 0),
    },
    rssNote: `RSS can count shared memory in multiple processes; summed RSS does not represent unique physical memory usage.`,
    processes: c,
  };
}
function mo(e) {
  return Buffer.from(`${JSON.stringify(e, null, 2)}\n`);
}
var ho = (0, l.promisify)(ae.gzip),
  go = n.i(`feedback-desktop-log-archive`),
  _o = 512,
  vo = 2,
  yo = 3,
  bo = 32 * 1024 * 1024,
  xo = new Map();
async function So(e = new Date(), t = [], { includeDesktopLogs: n = !0 } = {}) {
  let r = await Co(e, t, {
    includeDesktopLogs: n,
    includeNativeHostDiagnostics: !1,
    includeWindowsSystemDiagnostics: !1,
  });
  return r.archiveId == null || r.archivePath == null
    ? null
    : { archiveId: r.archiveId, archivePath: r.archivePath };
}
async function Co(
  e = new Date(),
  t = [],
  {
    buildFlavor: n = r.i.resolve(),
    getAppServerDiagnostics: i,
    includeDesktopLogs: a = !0,
    includeNativeHostDiagnostics: c,
    includeProcessMemoryDiagnostics: l = !1,
    includeWindowsSystemDiagnostics: d = !0,
  },
) {
  let p = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())),
    m = r.n(),
    h = a && d && process.platform === `win32` ? ye() : null,
    [ee, g, te, _] = await Promise.all([
      a
        ? Promise.all(
            Array.from({ length: yo }, async (e, t) => {
              let n = new Date(p);
              n.setUTCDate(n.getUTCDate() - t);
              let r = Do(m, n);
              return (await To(r))
                .filter((e) => e.startsWith(`codex-desktop-`) && e.endsWith(`.log`))
                .map((e) => (0, s.join)(r, e));
            }),
          ).then((e) => e.flat())
        : [],
      a && c ? eo(n) : { pathsReport: null, snapshots: [] },
      a && l
        ? fo(e).catch(
            (e) => (
              go().warning(`Failed to collect feedback process memory diagnostics.`, {
                safe: {},
                sensitive: { error: e },
              }),
              null
            ),
          )
        : null,
      a && l && i != null
        ? i().catch(
            (e) => (
              go().warning(`Failed to collect app-server diagnostics.`, {
                safe: {},
                sensitive: { error: e },
              }),
              null
            ),
          )
        : null,
    ]),
    ne = await Promise.all(
      ee.map(async (e) => ({
        path: e,
        info: await (0, f.stat)(e),
        currentSession: (0, s.basename)(e).startsWith(`codex-desktop-${r.o}-`),
      })),
    );
  ne.sort(
    (e, t) =>
      Number(t.currentSession) - Number(e.currentSession) || t.info.mtimeMs - e.info.mtimeMs,
  );
  let re = [
      ...t,
      ...ne.map(({ path: e, info: t }) => ({ name: (0, s.relative)(m, e), path: e, size: t.size })),
    ],
    ie = await ho(Buffer.alloc(_o * vo)),
    ae = [],
    oe = bo - ie.byteLength;
  for (let t of re) {
    if (oe === 0) break;
    let n = await Eo(t, e, oe);
    n != null && (ae.push(n), (oe -= n.byteLength));
  }
  if (ae.length === 0 && g.snapshots.length === 0 && te == null && _ == null && h == null)
    return { archiveId: null, archivePath: null, extraLogFiles: [] };
  let v = await (0, f.mkdtemp)((0, s.join)((0, o.tmpdir)(), `codex-feedback-desktop-log-archive-`)),
    se = ae.length === 0 ? null : (0, s.join)(v, `codex-desktop-app-logs-${Oo(p)}.tar.gz`),
    ce = g.snapshots.map((e) => (0, s.join)(v, e.name)),
    le = g.pathsReport == null ? null : (0, s.join)(v, `chrome-native-host-paths.json`),
    ue = te == null ? null : (0, s.join)(v, `process-memory-diagnostics.json`),
    de = _ == null ? null : (0, s.join)(v, `app-server-diagnostics.json`),
    fe = h == null ? null : (0, s.join)(v, `windows-system-diagnostics.json`);
  try {
    await Promise.all([
      ...(se == null ? [] : [(0, f.writeFile)(se, Buffer.concat([...ae, ie]))]),
      ...g.snapshots.map((e) => (0, f.writeFile)((0, s.join)(v, e.name), e.contents)),
      ...(le == null ? [] : [(0, f.writeFile)(le, `${JSON.stringify(g.pathsReport, null, 2)}\n`)]),
      ...(ue == null || te == null ? [] : [(0, f.writeFile)(ue, te)]),
      ...(de == null ? [] : [(0, f.writeFile)(de, `${JSON.stringify(_, null, 2)}\n`)]),
      ...(fe == null ? [] : [(0, f.writeFile)(fe, `${JSON.stringify(h, null, 2)}\n`)]),
    ]);
  } catch (e) {
    throw (await (0, f.rm)(v, { force: !0, recursive: !0 }), e);
  }
  let pe = (0, u.randomUUID)();
  return (
    xo.set(pe, v),
    {
      archiveId: pe,
      archivePath: se,
      extraLogFiles: [
        ...ce,
        ...(le == null ? [] : [le]),
        ...(ue == null ? [] : [ue]),
        ...(de == null ? [] : [de]),
        ...(fe == null ? [] : [fe]),
      ],
    }
  );
}
async function wo(e) {
  let t = xo.get(e);
  if (t == null) return !1;
  xo.delete(e);
  try {
    return (await (0, f.rm)(t, { force: !0, recursive: !0 }), !0);
  } catch (e) {
    return (
      go().warning(`Failed to remove feedback desktop log archive.`, {
        safe: {},
        sensitive: { archiveDir: t, error: e },
      }),
      !1
    );
  }
}
async function To(e) {
  try {
    return (await (0, f.readdir)(e, { withFileTypes: !0 }))
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .sort();
  } catch (e) {
    if (e.code === `ENOENT`) return [];
    throw e;
  }
}
async function Eo(e, t, n) {
  let r = `contents` in e ? e.contents.byteLength : e.size,
    i = Buffer.alloc(_o);
  new B({
    path: e.name.replace(/\\/g, `/`).replace(/^\/+/, ``),
    mode: 420,
    uid: 0,
    gid: 0,
    size: r,
    mtime: t,
    type: `File`,
  }).encode(i);
  let a = new AbortController(),
    o = [],
    s = 0,
    c = !1;
  try {
    await (0, te.pipeline)(
      async function* () {
        if ((yield i, `contents` in e)) yield e.contents;
        else if (r > 0) {
          let t = (0, d.createReadStream)(e.path, { end: r - 1 }),
            n = 0;
          for await (let e of t) ((n += e.byteLength), yield e);
          c = n !== r;
        }
        let t = (_o - (r % _o)) % _o;
        t > 0 && (yield Buffer.alloc(t));
      },
      (0, ae.createGzip)(),
      async (e) => {
        for await (let t of e) {
          if (((s += t.byteLength), s > n)) {
            a.abort();
            return;
          }
          o.push(t);
        }
      },
      { signal: a.signal },
    );
  } catch (e) {
    if (!a.signal.aborted) throw e;
  }
  return a.signal.aborted || c
    ? (go().warning(`Skipping feedback archive entry.`, {
        safe: { compressedBytes: s, maxBytes: n, fileChanged: c },
        sensitive: { name: e.name },
      }),
      null)
    : Buffer.concat(o);
}
function Do(e, t) {
  return (0, s.join)(
    e,
    t.getUTCFullYear().toString(),
    String(t.getUTCMonth() + 1).padStart(2, `0`),
    String(t.getUTCDate()).padStart(2, `0`),
  );
}
function Oo(e) {
  return `${e.getUTCFullYear()}${String(e.getUTCMonth() + 1).padStart(2, `0`)}${String(e.getUTCDate()).padStart(2, `0`)}`;
}
(Object.defineProperty(exports, "_", {
  enumerable: !0,
  get: function () {
    return ce;
  },
}),
  Object.defineProperty(exports, "a", {
    enumerable: !0,
    get: function () {
      return Ce;
    },
  }),
  Object.defineProperty(exports, "c", {
    enumerable: !0,
    get: function () {
      return xe;
    },
  }),
  Object.defineProperty(exports, "d", {
    enumerable: !0,
    get: function () {
      return me;
    },
  }),
  Object.defineProperty(exports, "f", {
    enumerable: !0,
    get: function () {
      return de;
    },
  }),
  Object.defineProperty(exports, "g", {
    enumerable: !0,
    get: function () {
      return v;
    },
  }),
  Object.defineProperty(exports, "h", {
    enumerable: !0,
    get: function () {
      return se;
    },
  }),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return Va;
    },
  }),
  Object.defineProperty(exports, "l", {
    enumerable: !0,
    get: function () {
      return Se;
    },
  }),
  Object.defineProperty(exports, "m", {
    enumerable: !0,
    get: function () {
      return pe;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return Co;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return ve;
    },
  }),
  Object.defineProperty(exports, "p", {
    enumerable: !0,
    get: function () {
      return fe;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return wo;
    },
  }),
  Object.defineProperty(exports, "s", {
    enumerable: !0,
    get: function () {
      return ye;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return So;
    },
  }),
  Object.defineProperty(exports, "u", {
    enumerable: !0,
    get: function () {
      return be;
    },
  }));
//# sourceMappingURL=desktop-log-archive-5MAvINpZ.js.map
