"use strict"
;((exports.ids = [818]),
  (exports.modules = {
    32297(t, e, i) {
      i.d(e, { WslTransport: () => ri })
      var s = i(85816),
        r = i(19229),
        h = i(78335),
        n = i(58027)
      i(37119)
      var o = i(89477),
        a = i(42524),
        l = i(86697),
        d = i(26238)
      i(22949)
      var u = i(66261),
        c = i(94383),
        f = i(93351),
        m = i(32892),
        p = i(62003),
        y = i(64770),
        b = i(1158),
        g = i(33925),
        E = i.t(g, 2),
        w = i(52420),
        _ = Object.defineProperty,
        R = "object" == typeof process && process ? process : { stdout: null, stderr: null },
        S = (t) => !!t && "object" == typeof t && (t instanceof to || t instanceof d || v(t) || O(t)),
        v = (t) =>
          !!t &&
          "object" == typeof t &&
          t instanceof f.EventEmitter &&
          "function" == typeof t.pipe &&
          t.pipe !== d.Writable.prototype.pipe,
        O = (t) =>
          !!t &&
          "object" == typeof t &&
          t instanceof f.EventEmitter &&
          "function" == typeof t.write &&
          "function" == typeof t.end,
        T = Symbol("EOF"),
        L = Symbol("maybeEmitEnd"),
        k = Symbol("emittedEnd"),
        x = Symbol("emittingEnd"),
        A = Symbol("emittedError"),
        D = Symbol("closed"),
        I = Symbol("read"),
        N = Symbol("flush"),
        C = Symbol("flushChunk"),
        M = Symbol("encoding"),
        B = Symbol("decoder"),
        P = Symbol("flowing"),
        F = Symbol("paused"),
        z = Symbol("resume"),
        U = Symbol("buffer"),
        j = Symbol("pipes"),
        H = Symbol("bufferLength"),
        $ = Symbol("bufferPush"),
        Z = Symbol("bufferShift"),
        W = Symbol("objectMode"),
        G = Symbol("destroyed"),
        Y = Symbol("error"),
        V = Symbol("emitData"),
        X = Symbol("emitEnd"),
        K = Symbol("emitEnd2"),
        q = Symbol("async"),
        Q = Symbol("abort"),
        J = Symbol("aborted"),
        tt = Symbol("signal"),
        te = Symbol("dataListeners"),
        ti = Symbol("discarded"),
        ts = (t) => Promise.resolve().then(t),
        tr = (t) => t(),
        th = class {
          src
          dest
          opts
          ondrain
          constructor(t, e, i) {
            ;((this.src = t),
              (this.dest = e),
              (this.opts = i),
              (this.ondrain = () => t[z]()),
              this.dest.on("drain", this.ondrain))
          }
          unpipe() {
            this.dest.removeListener("drain", this.ondrain)
          }
          proxyErrors(t) {}
          end() {
            ;(this.unpipe(), this.opts.end && this.dest.end())
          }
        },
        tn = class extends th {
          unpipe() {
            ;(this.src.removeListener("error", this.proxyErrors), super.unpipe())
          }
          constructor(t, e, i) {
            ;(super(t, e, i), (this.proxyErrors = (t) => this.dest.emit("error", t)), t.on("error", this.proxyErrors))
          }
        },
        to = class extends f.EventEmitter {
          [P] = !1;
          [F] = !1;
          [j] = [];
          [U] = [];
          [W];
          [M];
          [q];
          [B];
          [T] = !1;
          [k] = !1;
          [x] = !1;
          [D] = !1;
          [A] = null;
          [H] = 0;
          [G] = !1;
          [tt];
          [J] = !1;
          [te] = 0;
          [ti] = !1
          writable = !0
          readable = !0
          constructor(...t) {
            let e = t[0] || {}
            if ((super(), e.objectMode && "string" == typeof e.encoding))
              throw TypeError("Encoding and objectMode may not be used together")
            ;(e.objectMode
              ? ((this[W] = !0), (this[M] = null))
              : !e.objectMode && e.encoding && "buffer" !== e.encoding
                ? ((this[M] = e.encoding), (this[W] = !1))
                : ((this[W] = !1), (this[M] = null)),
              (this[q] = !!e.async),
              (this[B] = this[M] ? new m.StringDecoder(this[M]) : null),
              e && !0 === e.debugExposeBuffer && Object.defineProperty(this, "buffer", { get: () => this[U] }),
              e && !0 === e.debugExposePipes && Object.defineProperty(this, "pipes", { get: () => this[j] }))
            let { signal: i } = e
            i && ((this[tt] = i), i.aborted ? this[Q]() : i.addEventListener("abort", () => this[Q]()))
          }
          get bufferLength() {
            return this[H]
          }
          get encoding() {
            return this[M]
          }
          set encoding(t) {
            throw Error("Encoding must be set at instantiation time")
          }
          setEncoding(t) {
            throw Error("Encoding must be set at instantiation time")
          }
          get objectMode() {
            return this[W]
          }
          set objectMode(t) {
            throw Error("objectMode must be set at instantiation time")
          }
          get async() {
            return this[q]
          }
          set async(t) {
            this[q] = this[q] || !!t
          }
          [Q]() {
            ;((this[J] = !0), this.emit("abort", this[tt]?.reason), this.destroy(this[tt]?.reason))
          }
          get aborted() {
            return this[J]
          }
          set aborted(t) {}
          write(t, e, i) {
            if (this[J]) return !1
            if (this[T]) throw Error("write after end")
            if (this[G])
              return (
                this.emit(
                  "error",
                  Object.assign(Error("Cannot call write after a stream was destroyed"), {
                    code: "ERR_STREAM_DESTROYED",
                  }),
                ),
                !0
              )
            ;("function" == typeof e && ((i = e), (e = "utf8")), e || (e = "utf8"))
            let s = this[q] ? ts : tr
            if (!this[W] && !Buffer.isBuffer(t)) {
              let e
              if (((e = t), !Buffer.isBuffer(e) && ArrayBuffer.isView(e)))
                t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)
              else {
                let e
                if (
                  (e = t) instanceof ArrayBuffer ||
                  (e &&
                    "object" == typeof e &&
                    e.constructor &&
                    "ArrayBuffer" === e.constructor.name &&
                    e.byteLength >= 0)
                )
                  t = Buffer.from(t)
                else if ("string" != typeof t) throw Error("Non-contiguous data written to non-objectMode stream")
              }
            }
            return (
              this[W]
                ? (this[P] && 0 !== this[H] && this[N](!0), this[P] ? this.emit("data", t) : this[$](t))
                : t.length &&
                  ("string" == typeof t && (e !== this[M] || this[B]?.lastNeed) && (t = Buffer.from(t, e)),
                  Buffer.isBuffer(t) && this[M] && (t = this[B].write(t)),
                  this[P] && 0 !== this[H] && this[N](!0),
                  this[P] ? this.emit("data", t) : this[$](t)),
              0 !== this[H] && this.emit("readable"),
              i && s(i),
              this[P]
            )
          }
          read(t) {
            if (this[G]) return null
            if (((this[ti] = !1), 0 === this[H] || 0 === t || (t && t > this[H]))) return (this[L](), null)
            ;(this[W] && (t = null),
              this[U].length > 1 &&
                !this[W] &&
                (this[U] = [this[M] ? this[U].join("") : Buffer.concat(this[U], this[H])]))
            let e = this[I](t || null, this[U][0])
            return (this[L](), e)
          }
          [I](t, e) {
            if (this[W]) this[Z]()
            else {
              let i = e
              t === i.length || null === t
                ? this[Z]()
                : ("string" == typeof i
                    ? ((this[U][0] = i.slice(t)), (e = i.slice(0, t)))
                    : ((this[U][0] = i.subarray(t)), (e = i.subarray(0, t))),
                  (this[H] -= t))
            }
            return (this.emit("data", e), this[U].length || this[T] || this.emit("drain"), e)
          }
          end(t, e, i) {
            return (
              "function" == typeof t && ((i = t), (t = void 0)),
              "function" == typeof e && ((i = e), (e = "utf8")),
              void 0 !== t && this.write(t, e),
              i && this.once("end", i),
              (this[T] = !0),
              (this.writable = !1),
              (this[P] || !this[F]) && this[L](),
              this
            )
          }
          [z]() {
            this[G] ||
              (this[te] || this[j].length || (this[ti] = !0),
              (this[F] = !1),
              (this[P] = !0),
              this.emit("resume"),
              this[U].length ? this[N]() : this[T] ? this[L]() : this.emit("drain"))
          }
          resume() {
            return this[z]()
          }
          pause() {
            ;((this[P] = !1), (this[F] = !0), (this[ti] = !1))
          }
          get destroyed() {
            return this[G]
          }
          get flowing() {
            return this[P]
          }
          get paused() {
            return this[F]
          }
          [$](t) {
            ;(this[W] ? (this[H] += 1) : (this[H] += t.length), this[U].push(t))
          }
          [Z]() {
            return (this[W] ? (this[H] -= 1) : (this[H] -= this[U][0].length), this[U].shift())
          }
          [N](t = !1) {
            do;
            while (this[C](this[Z]()) && this[U].length)
            t || this[U].length || this[T] || this.emit("drain")
          }
          [C](t) {
            return (this.emit("data", t), this[P])
          }
          pipe(t, e) {
            if (this[G]) return t
            this[ti] = !1
            let i = this[k]
            return (
              (e = e || {}),
              t === R.stdout || t === R.stderr ? (e.end = !1) : (e.end = !1 !== e.end),
              (e.proxyErrors = !!e.proxyErrors),
              i
                ? e.end && t.end()
                : (this[j].push(e.proxyErrors ? new tn(this, t, e) : new th(this, t, e)),
                  this[q] ? ts(() => this[z]()) : this[z]()),
              t
            )
          }
          unpipe(t) {
            let e = this[j].find((e) => e.dest === t)
            e &&
              (1 === this[j].length
                ? (this[P] && 0 === this[te] && (this[P] = !1), (this[j] = []))
                : this[j].splice(this[j].indexOf(e), 1),
              e.unpipe())
          }
          addListener(t, e) {
            return this.on(t, e)
          }
          on(t, e) {
            let i = super.on(t, e)
            if ("data" === t) ((this[ti] = !1), this[te]++, this[j].length || this[P] || this[z]())
            else if ("readable" === t && 0 !== this[H]) super.emit("readable")
            else
              ("end" === t || "finish" === t || "prefinish" === t) && this[k]
                ? (super.emit(t), this.removeAllListeners(t))
                : "error" === t && this[A] && (this[q] ? ts(() => e.call(this, this[A])) : e.call(this, this[A]))
            return i
          }
          removeListener(t, e) {
            return this.off(t, e)
          }
          off(t, e) {
            let i = super.off(t, e)
            return (
              "data" === t &&
                ((this[te] = this.listeners("data").length),
                0 !== this[te] || this[ti] || this[j].length || (this[P] = !1)),
              i
            )
          }
          removeAllListeners(t) {
            let e = super.removeAllListeners(t)
            return (("data" === t || void 0 === t) && ((this[te] = 0), this[ti] || this[j].length || (this[P] = !1)), e)
          }
          get emittedEnd() {
            return this[k]
          }
          [L]() {
            this[x] ||
              this[k] ||
              this[G] ||
              0 !== this[U].length ||
              !this[T] ||
              ((this[x] = !0),
              this.emit("end"),
              this.emit("prefinish"),
              this.emit("finish"),
              this[D] && this.emit("close"),
              (this[x] = !1))
          }
          emit(t, ...e) {
            let i = e[0]
            if ("error" !== t && "close" !== t && t !== G && this[G]) return !1
            if ("data" === t) return (!!this[W] || !!i) && (this[q] ? (ts(() => this[V](i)), !0) : this[V](i))
            if ("end" === t) return this[X]()
            if ("close" === t) {
              if (((this[D] = !0), !this[k] && !this[G])) return !1
              let t = super.emit("close")
              return (this.removeAllListeners("close"), t)
            }
            if ("error" === t) {
              ;((this[A] = i), super.emit(Y, i))
              let t = (!this[tt] || !!this.listeners("error").length) && super.emit("error", i)
              return (this[L](), t)
            }
            if ("resume" === t) {
              let t = super.emit("resume")
              return (this[L](), t)
            }
            if ("finish" === t || "prefinish" === t) {
              let e = super.emit(t)
              return (this.removeAllListeners(t), e)
            }
            let s = super.emit(t, ...e)
            return (this[L](), s)
          }
          [V](t) {
            for (let e of this[j]) !1 === e.dest.write(t) && this.pause()
            let e = !this[ti] && super.emit("data", t)
            return (this[L](), e)
          }
          [X]() {
            return !this[k] && ((this[k] = !0), (this.readable = !1), this[q] ? (ts(() => this[K]()), !0) : this[K]())
          }
          [K]() {
            if (this[B]) {
              let t = this[B].end()
              if (t) {
                for (let e of this[j]) e.dest.write(t)
                this[ti] || super.emit("data", t)
              }
            }
            for (let t of this[j]) t.end()
            let t = super.emit("end")
            return (this.removeAllListeners("end"), t)
          }
          async collect() {
            let t = Object.assign([], { dataLength: 0 })
            this[W] || (t.dataLength = 0)
            let e = this.promise()
            return (
              this.on("data", (e) => {
                ;(t.push(e), this[W] || (t.dataLength += e.length))
              }),
              await e,
              t
            )
          }
          async concat() {
            if (this[W]) throw Error("cannot concat in objectMode")
            let t = await this.collect()
            return this[M] ? t.join("") : Buffer.concat(t, t.dataLength)
          }
          async promise() {
            return new Promise((t, e) => {
              ;(this.on(G, () => e(Error("stream destroyed"))),
                this.on("error", (t) => e(t)),
                this.on("end", () => t()))
            })
          }
          [Symbol.asyncIterator]() {
            this[ti] = !1
            let t = !1,
              e = async () => (this.pause(), (t = !0), { value: void 0, done: !0 })
            return {
              next: () => {
                if (t) return e()
                let i = this.read()
                if (null !== i) return Promise.resolve({ done: !1, value: i })
                if (this[T]) return e()
                let s,
                  r,
                  h = (t) => {
                    ;(this.off("data", n), this.off("end", o), this.off(G, a), e(), r(t))
                  },
                  n = (t) => {
                    ;(this.off("error", h),
                      this.off("end", o),
                      this.off(G, a),
                      this.pause(),
                      s({ value: t, done: !!this[T] }))
                  },
                  o = () => {
                    ;(this.off("error", h), this.off("data", n), this.off(G, a), e(), s({ done: !0, value: void 0 }))
                  },
                  a = () => h(Error("stream destroyed"))
                return new Promise((t, e) => {
                  ;((r = e), (s = t), this.once(G, a), this.once("error", h), this.once("end", o), this.once("data", n))
                })
              },
              throw: e,
              return: e,
              [Symbol.asyncIterator]() {
                return this
              },
              [Symbol.asyncDispose]: async () => {},
            }
          }
          [Symbol.iterator]() {
            this[ti] = !1
            let t = !1,
              e = () => (
                this.pause(),
                this.off(Y, e),
                this.off(G, e),
                this.off("end", e),
                (t = !0),
                { done: !0, value: void 0 }
              ),
              i = () => {
                if (t) return e()
                let i = this.read()
                return null === i ? e() : { done: !1, value: i }
              }
            return (
              this.once("end", e),
              this.once(Y, e),
              this.once(G, e),
              {
                next: i,
                throw: e,
                return: e,
                [Symbol.iterator]() {
                  return this
                },
                [Symbol.dispose]: () => {},
              }
            )
          }
          destroy(t) {
            return (
              this[G] ||
                ((this[G] = !0),
                (this[ti] = !0),
                (this[U].length = 0),
                (this[H] = 0),
                "function" != typeof this.close || this[D] || this.close()),
              t ? this.emit("error", t) : this.emit(G),
              this
            )
          }
          static get isStream() {
            return S
          }
        },
        ta = c.writev,
        tl = Symbol("_autoClose"),
        td = Symbol("_close"),
        tu = Symbol("_ended"),
        tc = Symbol("_fd"),
        tf = Symbol("_finished"),
        tm = Symbol("_flags"),
        tp = Symbol("_flush"),
        ty = Symbol("_handleChunk"),
        tb = Symbol("_makeBuf"),
        tg = Symbol("_mode"),
        tE = Symbol("_needDrain"),
        tw = Symbol("_onerror"),
        t_ = Symbol("_onopen"),
        tR = Symbol("_onread"),
        tS = Symbol("_onwrite"),
        tv = Symbol("_open"),
        tO = Symbol("_path"),
        tT = Symbol("_pos"),
        tL = Symbol("_queue"),
        tk = Symbol("_read"),
        tx = Symbol("_readSize"),
        tA = Symbol("_reading"),
        tD = Symbol("_remain"),
        tI = Symbol("_size"),
        tN = Symbol("_write"),
        tC = Symbol("_writing"),
        tM = Symbol("_defaultFlag"),
        tB = Symbol("_errored"),
        tP = class extends to {
          [tB] = !1;
          [tc];
          [tO];
          [tx];
          [tA] = !1;
          [tI];
          [tD];
          [tl]
          constructor(t, e) {
            if ((super((e = e || {})), (this.readable = !0), (this.writable = !1), "string" != typeof t))
              throw TypeError("path must be a string")
            ;((this[tB] = !1),
              (this[tc] = "number" == typeof e.fd ? e.fd : void 0),
              (this[tO] = t),
              (this[tx] = e.readSize || 0x1000000),
              (this[tA] = !1),
              (this[tI] = "number" == typeof e.size ? e.size : 1 / 0),
              (this[tD] = this[tI]),
              (this[tl] = "boolean" != typeof e.autoClose || e.autoClose),
              "number" == typeof this[tc] ? this[tk]() : this[tv]())
          }
          get fd() {
            return this[tc]
          }
          get path() {
            return this[tO]
          }
          write() {
            throw TypeError("this is a readable stream")
          }
          end() {
            throw TypeError("this is a readable stream")
          }
          [tv]() {
            c.open(this[tO], "r", (t, e) => this[t_](t, e))
          }
          [t_](t, e) {
            t ? this[tw](t) : ((this[tc] = e), this.emit("open", e), this[tk]())
          }
          [tb]() {
            return Buffer.allocUnsafe(Math.min(this[tx], this[tD]))
          }
          [tk]() {
            if (!this[tA]) {
              this[tA] = !0
              let t = this[tb]()
              if (0 === t.length) return process.nextTick(() => this[tR](null, 0, t))
              c.read(this[tc], t, 0, t.length, null, (t, e, i) => this[tR](t, e, i))
            }
          }
          [tR](t, e, i) {
            ;((this[tA] = !1), t ? this[tw](t) : this[ty](e, i) && this[tk]())
          }
          [td]() {
            if (this[tl] && "number" == typeof this[tc]) {
              let t = this[tc]
              ;((this[tc] = void 0), c.close(t, (t) => (t ? this.emit("error", t) : this.emit("close"))))
            }
          }
          [tw](t) {
            ;((this[tA] = !0), this[td](), this.emit("error", t))
          }
          [ty](t, e) {
            let i = !1
            return (
              (this[tD] -= t),
              t > 0 && (i = super.write(t < e.length ? e.subarray(0, t) : e)),
              (0 === t || this[tD] <= 0) && ((i = !1), this[td](), super.end()),
              i
            )
          }
          emit(t, ...e) {
            switch (t) {
              case "prefinish":
              case "finish":
                return !1
              case "drain":
                return ("number" == typeof this[tc] && this[tk](), !1)
              case "error":
                return !this[tB] && ((this[tB] = !0), super.emit(t, ...e))
              default:
                return super.emit(t, ...e)
            }
          }
        },
        tF = class extends tP {
          [tv]() {
            let t = !0
            try {
              ;(this[t_](null, c.openSync(this[tO], "r")), (t = !1))
            } finally {
              t && this[td]()
            }
          }
          [tk]() {
            let t = !0
            try {
              if (!this[tA]) {
                for (this[tA] = !0; ;) {
                  let t = this[tb](),
                    e = 0 === t.length ? 0 : c.readSync(this[tc], t, 0, t.length, null)
                  if (!this[ty](e, t)) break
                }
                this[tA] = !1
              }
              t = !1
            } finally {
              t && this[td]()
            }
          }
          [td]() {
            if (this[tl] && "number" == typeof this[tc]) {
              let t = this[tc]
              ;((this[tc] = void 0), c.closeSync(t), this.emit("close"))
            }
          }
        },
        tz = class extends u {
          readable = !1
          writable = !0;
          [tB] = !1;
          [tC] = !1;
          [tu] = !1;
          [tL] = [];
          [tE] = !1;
          [tO];
          [tg];
          [tl];
          [tc];
          [tM];
          [tm];
          [tf] = !1;
          [tT]
          constructor(t, e) {
            ;(super((e = e || {})),
              (this[tO] = t),
              (this[tc] = "number" == typeof e.fd ? e.fd : void 0),
              (this[tg] = void 0 === e.mode ? 438 : e.mode),
              (this[tT] = "number" == typeof e.start ? e.start : void 0),
              (this[tl] = "boolean" != typeof e.autoClose || e.autoClose))
            let i = void 0 !== this[tT] ? "r+" : "w"
            ;((this[tM] = void 0 === e.flags),
              (this[tm] = void 0 === e.flags ? i : e.flags),
              void 0 === this[tc] && this[tv]())
          }
          emit(t, ...e) {
            if ("error" === t) {
              if (this[tB]) return !1
              this[tB] = !0
            }
            return super.emit(t, ...e)
          }
          get fd() {
            return this[tc]
          }
          get path() {
            return this[tO]
          }
          [tw](t) {
            ;(this[td](), (this[tC] = !0), this.emit("error", t))
          }
          [tv]() {
            c.open(this[tO], this[tm], this[tg], (t, e) => this[t_](t, e))
          }
          [t_](t, e) {
            this[tM] && "r+" === this[tm] && t && "ENOENT" === t.code
              ? ((this[tm] = "w"), this[tv]())
              : t
                ? this[tw](t)
                : ((this[tc] = e), this.emit("open", e), this[tC] || this[tp]())
          }
          end(t, e) {
            return (
              t && this.write(t, e),
              (this[tu] = !0),
              this[tC] || this[tL].length || "number" != typeof this[tc] || this[tS](null, 0),
              this
            )
          }
          write(t, e) {
            return (
              "string" == typeof t && (t = Buffer.from(t, e)),
              this[tu]
                ? (this.emit("error", Error("write() after end()")), !1)
                : void 0 === this[tc] || this[tC] || this[tL].length
                  ? (this[tL].push(t), (this[tE] = !0), !1)
                  : ((this[tC] = !0), this[tN](t), !0)
            )
          }
          [tN](t) {
            c.write(this[tc], t, 0, t.length, this[tT], (t, e) => this[tS](t, e))
          }
          [tS](t, e) {
            t
              ? this[tw](t)
              : (void 0 !== this[tT] && "number" == typeof e && (this[tT] += e),
                this[tL].length
                  ? this[tp]()
                  : ((this[tC] = !1),
                    this[tu] && !this[tf]
                      ? ((this[tf] = !0), this[td](), this.emit("finish"))
                      : this[tE] && ((this[tE] = !1), this.emit("drain"))))
          }
          [tp]() {
            if (0 === this[tL].length) this[tu] && this[tS](null, 0)
            else if (1 === this[tL].length) this[tN](this[tL].pop())
            else {
              let t = this[tL]
              ;((this[tL] = []), ta(this[tc], t, this[tT], (t, e) => this[tS](t, e)))
            }
          }
          [td]() {
            if (this[tl] && "number" == typeof this[tc]) {
              let t = this[tc]
              ;((this[tc] = void 0), c.close(t, (t) => (t ? this.emit("error", t) : this.emit("close"))))
            }
          }
        },
        tU = class extends tz {
          [tv]() {
            let t
            if (this[tM] && "r+" === this[tm])
              try {
                t = c.openSync(this[tO], this[tm], this[tg])
              } catch (t) {
                if (t?.code === "ENOENT") return ((this[tm] = "w"), this[tv]())
                throw t
              }
            else t = c.openSync(this[tO], this[tm], this[tg])
            this[t_](null, t)
          }
          [td]() {
            if (this[tl] && "number" == typeof this[tc]) {
              let t = this[tc]
              ;((this[tc] = void 0), c.closeSync(t), this.emit("close"))
            }
          }
          [tN](t) {
            let e = !0
            try {
              ;(this[tS](null, c.writeSync(this[tc], t, 0, t.length, this[tT])), (e = !1))
            } finally {
              if (e)
                try {
                  this[td]()
                } catch {}
            }
          }
        },
        tj = new Map([
          ["C", "cwd"],
          ["f", "file"],
          ["z", "gzip"],
          ["P", "preservePaths"],
          ["U", "unlink"],
          ["strip-components", "strip"],
          ["stripComponents", "strip"],
          ["keep-newer", "newer"],
          ["keepNewer", "newer"],
          ["keep-newer-files", "newer"],
          ["keepNewerFiles", "newer"],
          ["k", "keep"],
          ["keep-existing", "keep"],
          ["keepExisting", "keep"],
          ["m", "noMtime"],
          ["no-mtime", "noMtime"],
          ["p", "preserveOwner"],
          ["L", "follow"],
          ["h", "follow"],
          ["onentry", "onReadEntry"],
        ]),
        tH = (t) => tj.get(t) || t,
        t$ = (t = {}) => {
          if (!t) return {}
          let e = {}
          for (let [i, s] of Object.entries(t)) e[tH(i)] = s
          return (void 0 === e.chmod && !1 === e.noChmod && (e.chmod = !0), delete e.noChmod, e)
        },
        tZ = (t, e, i, s, r) =>
          Object.assign(
            (h = [], n, o) => {
              ;(Array.isArray(h) && ((n = h), (h = {})),
                "function" == typeof n && ((o = n), (n = void 0)),
                (n = n ? Array.from(n) : []))
              let a = t$(h)
              if ((r?.(a, n), a.sync && a.file)) {
                if ("function" == typeof o) throw TypeError("callback not supported for sync tar functions")
                return t(a, n)
              }
              if (a.sync || !a.file)
                if (!a.sync || a.file) {
                  if (!a.sync && !a.file) {
                    if ("function" == typeof o) throw TypeError("callback only supported with file option")
                    return s(a, n)
                  }
                } else {
                  if ("function" == typeof o) throw TypeError("callback not supported for sync tar functions")
                  return i(a, n)
                }
              else {
                let t = e(a, n)
                return o ? t.then(() => o(), o) : t
              }
              throw Error("impossible options??")
            },
            { syncFile: t, asyncFile: e, syncNoFile: i, asyncNoFile: s, validate: r },
          ),
        tW = g.constants || { ZLIB_VERNUM: 4736 },
        tG = Object.freeze(
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
            tW,
          ),
        ),
        tY = b.Buffer.concat,
        tV = Object.getOwnPropertyDescriptor(b.Buffer, "concat"),
        tX = (t) => t,
        tK =
          tV?.writable === !0 || tV?.set !== void 0
            ? (t) => {
                b.Buffer.concat = t ? tX : tY
              }
            : (t) => {},
        tq = Symbol("_superWrite"),
        tQ = class extends Error {
          code
          errno
          constructor(t, e) {
            ;(super("zlib: " + t.message, { cause: t }),
              (this.code = t.code),
              (this.errno = t.errno),
              this.code || (this.code = "ZLIB_ERROR"),
              (this.message = "zlib: " + t.message),
              Error.captureStackTrace(this, e ?? this.constructor))
          }
          get name() {
            return "ZlibError"
          }
        },
        tJ = Symbol("flushFlag"),
        t0 = class extends to {
          #t = !1
          #e = !1
          #i
          #s
          #r
          #h
          #n
          get sawError() {
            return this.#t
          }
          get handle() {
            return this.#h
          }
          get flushFlag() {
            return this.#i
          }
          constructor(t, e) {
            if (!t || "object" != typeof t) throw TypeError("invalid options for ZlibBase constructor")
            if (
              (super(t),
              (this.#i = t.flush ?? 0),
              (this.#s = t.finishFlush ?? 0),
              (this.#r = t.fullFlushFlag ?? 0),
              "function" != typeof E[e])
            )
              throw TypeError("Compression method not supported: " + e)
            try {
              this.#h = new E[e](t)
            } catch (t) {
              throw new tQ(t, this.constructor)
            }
            ;((this.#n = (t) => {
              this.#t || ((this.#t = !0), this.close(), this.emit("error", t))
            }),
              this.#h?.on("error", (t) => this.#n(new tQ(t))),
              this.once("end", () => this.close))
          }
          close() {
            this.#h && (this.#h.close(), (this.#h = void 0), this.emit("close"))
          }
          reset() {
            if (!this.#t) return (y(this.#h, "zlib binding closed"), this.#h.reset?.())
          }
          flush(t) {
            this.ended ||
              ("number" != typeof t && (t = this.#r), this.write(Object.assign(b.Buffer.alloc(0), { [tJ]: t })))
          }
          end(t, e, i) {
            return (
              "function" == typeof t && ((i = t), (e = void 0), (t = void 0)),
              "function" == typeof e && ((i = e), (e = void 0)),
              t && (e ? this.write(t, e) : this.write(t)),
              this.flush(this.#s),
              (this.#e = !0),
              super.end(i)
            )
          }
          get ended() {
            return this.#e
          }
          [tq](t) {
            return super.write(t)
          }
          write(t, e, i) {
            let s, r
            if (
              ("function" == typeof e && ((i = e), (e = "utf8")),
              "string" == typeof t && (t = b.Buffer.from(t, e)),
              this.#t)
            )
              return
            y(this.#h, "zlib binding closed")
            let h = this.#h._handle,
              n = h.close
            h.close = () => {}
            let o = this.#h.close
            ;((this.#h.close = () => {}), tK(!0))
            try {
              let e = "number" == typeof t[tJ] ? t[tJ] : this.#i
              ;((s = this.#h._processChunk(t, e)), tK(!1))
            } catch (t) {
              ;(tK(!1), this.#n(new tQ(t, this.write)))
            } finally {
              this.#h &&
                ((this.#h._handle = h), (h.close = n), (this.#h.close = o), this.#h.removeAllListeners("error"))
            }
            if ((this.#h && this.#h.on("error", (t) => this.#n(new tQ(t, this.write))), s))
              if (Array.isArray(s) && s.length > 0) {
                let t = s[0]
                r = this[tq](b.Buffer.from(t))
                for (let t = 1; t < s.length; t++) r = this[tq](s[t])
              } else r = this[tq](b.Buffer.from(s))
            return (i && i(), r)
          }
        },
        t1 = class extends t0 {
          #t
          #e
          constructor(t, e) {
            ;(((t = t || {}).flush = t.flush || tG.Z_NO_FLUSH),
              (t.finishFlush = t.finishFlush || tG.Z_FINISH),
              (t.fullFlushFlag = tG.Z_FULL_FLUSH),
              super(t, e),
              (this.#t = t.level),
              (this.#e = t.strategy))
          }
          params(t, e) {
            if (!this.sawError) {
              if (!this.handle) throw Error("cannot switch params when binding is closed")
              if (!this.handle.params) throw Error("not supported in this implementation")
              if (this.#t !== t || this.#e !== e) {
                ;(this.flush(tG.Z_SYNC_FLUSH), y(this.handle, "zlib binding closed"))
                let i = this.handle.flush
                this.handle.flush = (t, e) => {
                  ;("function" == typeof t && ((e = t), (t = this.flushFlag)), this.flush(t), e?.())
                }
                try {
                  this.handle.params(t, e)
                } finally {
                  this.handle.flush = i
                }
                this.handle && ((this.#t = t), (this.#e = e))
              }
            }
          }
        },
        t2 = class extends t1 {
          #t
          constructor(t) {
            ;(super(t, "Gzip"), (this.#t = t && !!t.portable))
          }
          [tq](t) {
            return (this.#t && ((this.#t = !1), (t[9] = 255)), super[tq](t))
          }
        },
        t5 = class extends t1 {
          constructor(t) {
            super(t, "Unzip")
          }
        },
        t3 = class extends t0 {
          constructor(t, e) {
            ;(((t = t || {}).flush = t.flush || tG.BROTLI_OPERATION_PROCESS),
              (t.finishFlush = t.finishFlush || tG.BROTLI_OPERATION_FINISH),
              (t.fullFlushFlag = tG.BROTLI_OPERATION_FLUSH),
              super(t, e))
          }
        },
        t8 = class extends t3 {
          constructor(t) {
            super(t, "BrotliCompress")
          }
        },
        t4 = class extends t3 {
          constructor(t) {
            super(t, "BrotliDecompress")
          }
        },
        t6 = class extends t0 {
          constructor(t, e) {
            ;(((t = t || {}).flush = t.flush || tG.ZSTD_e_continue),
              (t.finishFlush = t.finishFlush || tG.ZSTD_e_end),
              (t.fullFlushFlag = tG.ZSTD_e_flush),
              super(t, e))
          }
        },
        t9 = class extends t6 {
          constructor(t) {
            super(t, "ZstdCompress")
          }
        },
        t7 = class extends t6 {
          constructor(t) {
            super(t, "ZstdDecompress")
          }
        },
        et = (t) => (255 ^ t) & 255,
        ee = (t) => ((255 ^ t) + 1) & 255,
        ei = {},
        es = { code: () => el, isCode: () => eh, isName: () => en, name: () => ea, normalFsTypes: () => eo }
      for (var er in es) _(ei, er, { get: es[er], enumerable: !0 })
      var eh = (t) => ea.has(t),
        en = (t) => el.has(t),
        eo = new Set(["0", "", "1", "2", "3", "4", "5", "6", "7", "D"]),
        ea = new Map([
          ["0", "File"],
          ["", "OldFile"],
          ["1", "Link"],
          ["2", "SymbolicLink"],
          ["3", "CharacterDevice"],
          ["4", "BlockDevice"],
          ["5", "Directory"],
          ["6", "FIFO"],
          ["7", "ContiguousFile"],
          ["g", "GlobalExtendedHeader"],
          ["x", "ExtendedHeader"],
          ["A", "SolarisACL"],
          ["D", "GNUDumpDir"],
          ["I", "Inode"],
          ["K", "NextFileHasLongLinkpath"],
          ["L", "NextFileHasLongPath"],
          ["M", "ContinuationFile"],
          ["N", "OldGnuLongPath"],
          ["S", "SparseFile"],
          ["V", "TapeVolumeHeader"],
          ["X", "OldExtendedHeader"],
        ]),
        el = new Map(Array.from(ea).map((t) => [t[1], t[0]])),
        ed = class {
          cksumValid = !1
          needPax = !1
          nullBlock = !1
          block
          path
          mode
          uid
          gid
          size
          cksum
          #t = "Unsupported"
          linkpath
          uname
          gname
          devmaj = 0
          devmin = 0
          atime
          ctime
          mtime
          charset
          comment
          constructor(t, e = 0, i, s) {
            Buffer.isBuffer(t) ? this.decode(t, e || 0, i, s) : t && this.#e(t)
          }
          decode(t, e, i, s) {
            if ((e || (e = 0), !t || !(t.length >= e + 512))) throw Error("need 512 bytes for header")
            let r = ec(t, e + 156, 1),
              h = eo.has(r),
              n = h ? i : void 0,
              o = h ? s : void 0
            if (
              ((this.path = n?.path ?? ec(t, e, 100)),
              (this.mode = n?.mode ?? o?.mode ?? ep(t, e + 100, 8)),
              (this.uid = n?.uid ?? o?.uid ?? ep(t, e + 108, 8)),
              (this.gid = n?.gid ?? o?.gid ?? ep(t, e + 116, 8)),
              (this.size = n?.size ?? o?.size ?? ep(t, e + 124, 12)),
              (this.mtime = n?.mtime ?? o?.mtime ?? ef(t, e + 136, 12)),
              (this.cksum = ep(t, e + 148, 12)),
              o && this.#e(o, !0),
              n && this.#e(n),
              eh(r) && (this.#t = r || "0"),
              "0" === this.#t && "/" === this.path.slice(-1) && (this.#t = "5"),
              "5" === this.#t && (this.size = 0),
              (this.linkpath = ec(t, e + 157, 100)),
              "ustar\x0000" === t.subarray(e + 257, e + 265).toString())
            )
              if (
                ((this.uname = n?.uname ?? o?.uname ?? ec(t, e + 265, 32)),
                (this.gname = n?.gname ?? o?.gname ?? ec(t, e + 297, 32)),
                (this.devmaj = n?.devmaj ?? o?.devmaj ?? ep(t, e + 329, 8) ?? 0),
                (this.devmin = n?.devmin ?? o?.devmin ?? ep(t, e + 337, 8) ?? 0),
                0 !== t[e + 475])
              ) {
                let i = ec(t, e + 345, 155)
                this.path = i + "/" + this.path
              } else {
                let r = ec(t, e + 345, 130)
                ;(r && (this.path = r + "/" + this.path),
                  (this.atime = i?.atime ?? s?.atime ?? ef(t, e + 476, 12)),
                  (this.ctime = i?.ctime ?? s?.ctime ?? ef(t, e + 488, 12)))
              }
            let a = 256
            for (let i = e; i < e + 148; i++) a += t[i]
            for (let i = e + 156; i < e + 512; i++) a += t[i]
            ;((this.cksumValid = a === this.cksum), void 0 === this.cksum && 256 === a && (this.nullBlock = !0))
          }
          #e(t, e = !1) {
            Object.assign(
              this,
              Object.fromEntries(
                Object.entries(t).filter(
                  ([t, i]) => !(null == i || ("path" === t && e) || ("linkpath" === t && e) || "global" === t),
                ),
              ),
            )
          }
          encode(t, e = 0) {
            if (
              (t || (t = this.block = Buffer.alloc(512)),
              "Unsupported" === this.#t && (this.#t = "0"),
              !(t.length >= e + 512))
            )
              throw Error("need 512 bytes for header")
            let i = this.ctime || this.atime ? 130 : 155,
              s = eu(this.path || "", i),
              r = s[0],
              h = s[1]
            ;((this.needPax = !!s[2]),
              (this.needPax = ev(t, e, 100, r) || this.needPax),
              (this.needPax = eg(t, e + 100, 8, this.mode) || this.needPax),
              (this.needPax = eg(t, e + 108, 8, this.uid) || this.needPax),
              (this.needPax = eg(t, e + 116, 8, this.gid) || this.needPax),
              (this.needPax = eg(t, e + 124, 12, this.size) || this.needPax),
              (this.needPax = eR(t, e + 136, 12, this.mtime) || this.needPax),
              (t[e + 156] = Number(this.#t.codePointAt(0))),
              (this.needPax = ev(t, e + 157, 100, this.linkpath) || this.needPax),
              t.write("ustar\x0000", e + 257, 8),
              (this.needPax = ev(t, e + 265, 32, this.uname) || this.needPax),
              (this.needPax = ev(t, e + 297, 32, this.gname) || this.needPax),
              (this.needPax = eg(t, e + 329, 8, this.devmaj) || this.needPax),
              (this.needPax = eg(t, e + 337, 8, this.devmin) || this.needPax),
              (this.needPax = ev(t, e + 345, i, h) || this.needPax),
              0 !== t[e + 475]
                ? (this.needPax = ev(t, e + 345, 155, h) || this.needPax)
                : ((this.needPax = ev(t, e + 345, 130, h) || this.needPax),
                  (this.needPax = eR(t, e + 476, 12, this.atime) || this.needPax),
                  (this.needPax = eR(t, e + 488, 12, this.ctime) || this.needPax)))
            let n = 256
            for (let i = e; i < e + 148; i++) n += t[i]
            for (let i = e + 156; i < e + 512; i++) n += t[i]
            return ((this.cksum = n), eg(t, e + 148, 8, this.cksum), (this.cksumValid = !0), this.needPax)
          }
          get type() {
            return "Unsupported" === this.#t ? this.#t : ea.get(this.#t)
          }
          get typeKey() {
            return this.#t
          }
          set type(t) {
            let e = String(el.get(t))
            if (eh(e) || "Unsupported" === e) this.#t = e
            else if (eh(t)) this.#t = t
            else throw TypeError("invalid entry type: " + t)
          }
        },
        eu = (t, e) => {
          let i = t,
            s = "",
            r,
            h = l.posix.parse(t).root || "."
          if (100 > Buffer.byteLength(i)) r = [i, s, !1]
          else {
            ;((s = l.posix.dirname(i)), (i = l.posix.basename(i)))
            do
              100 >= Buffer.byteLength(i) && Buffer.byteLength(s) <= e
                ? (r = [i, s, !1])
                : Buffer.byteLength(i) > 100 && Buffer.byteLength(s) <= e
                  ? (r = [i.slice(0, 99), s, !0])
                  : ((i = l.posix.join(l.posix.basename(s), i)), (s = l.posix.dirname(s)))
            while (s !== h && void 0 === r)
            r || (r = [t.slice(0, 99), "", !0])
          }
          return r
        },
        ec = (t, e, i) =>
          t
            .subarray(e, e + i)
            .toString("utf8")
            .replace(/\0.*/, ""),
        ef = (t, e, i) => em(ep(t, e, i)),
        em = (t) => (void 0 === t ? void 0 : new Date(1e3 * t)),
        ep = (t, e, i) =>
          128 & Number(t[e])
            ? ((t) => {
                let e = t[0],
                  i =
                    128 === e
                      ? ((t) => {
                          for (var e = t.length, i = 0, s = e - 1; s > -1; s--) {
                            var r = Number(t[s])
                            0 !== r && (i += r * Math.pow(256, e - s - 1))
                          }
                          return i
                        })(t.subarray(1, t.length))
                      : 255 === e
                        ? ((t) => {
                            for (var e = t.length, i = 0, s = !1, r = e - 1; r > -1; r--) {
                              var h,
                                n = Number(t[r])
                              ;(s ? (h = et(n)) : 0 === n ? (h = n) : ((s = !0), (h = ee(n))),
                                0 !== h && (i -= h * Math.pow(256, e - r - 1)))
                            }
                            return i
                          })(t)
                        : null
                if (null === i) throw Error("invalid base256 encoding")
                if (!Number.isSafeInteger(i)) throw Error("parsed number outside of javascript safe integer range")
                return i
              })(t.subarray(e, e + i))
            : ey(t, e, i),
        ey = (t, e, i) => {
          let s
          return isNaN(
            (s = parseInt(
              t
                .subarray(e, e + i)
                .toString("utf8")
                .replace(/\0.*$/, "")
                .trim(),
              8,
            )),
          )
            ? void 0
            : s
        },
        eb = { 12: 0x1ffffffff, 8: 2097151 },
        eg = (t, e, i, s) =>
          void 0 !== s &&
          (s > eb[i] || s < 0
            ? (((t, e) => {
                if (Number.isSafeInteger(t))
                  t < 0
                    ? ((t, e) => {
                        e[0] = 255
                        var i = !1
                        t *= -1
                        for (var s = e.length; s > 1; s--) {
                          var r = 255 & t
                          ;((t = Math.floor(t / 256)),
                            i ? (e[s - 1] = et(r)) : 0 === r ? (e[s - 1] = 0) : ((i = !0), (e[s - 1] = ee(r))))
                        }
                      })(t, e)
                    : ((t, e) => {
                        e[0] = 128
                        for (var i = e.length; i > 1; i--) ((e[i - 1] = 255 & t), (t = Math.floor(t / 256)))
                      })(t, e)
                else throw Error("cannot encode number outside of javascript safe integer range")
              })(s, t.subarray(e, e + i)),
              !0)
            : (eE(t, e, i, s), !1)),
        eE = (t, e, i, s) => t.write(ew(s, i), e, i, "ascii"),
        ew = (t, e) => e_(Math.floor(t).toString(8), e),
        e_ = (t, e) => (t.length === e - 1 ? t : Array(e - t.length - 1).join("0") + t + " ") + "\0",
        eR = (t, e, i, s) => void 0 !== s && eg(t, e, i, s.getTime() / 1e3),
        eS = Array(156).join("\0"),
        ev = (t, e, i, s) =>
          void 0 !== s && (t.write(s + eS, e, i, "utf8"), s.length !== Buffer.byteLength(s) || s.length > i),
        eO = class t {
          atime
          mtime
          ctime
          charset
          comment
          gid
          uid
          gname
          uname
          linkpath
          dev
          ino
          nlink
          path
          size
          mode
          global
          constructor(t, e = !1) {
            ;((this.atime = t.atime),
              (this.charset = t.charset),
              (this.comment = t.comment),
              (this.ctime = t.ctime),
              (this.dev = t.dev),
              (this.gid = t.gid),
              (this.global = e),
              (this.gname = t.gname),
              (this.ino = t.ino),
              (this.linkpath = t.linkpath),
              (this.mtime = t.mtime),
              (this.nlink = t.nlink),
              (this.path = t.path),
              (this.size = t.size),
              (this.uid = t.uid),
              (this.uname = t.uname))
          }
          encode() {
            let t = this.encodeBody()
            if ("" === t) return Buffer.allocUnsafe(0)
            let e = Buffer.byteLength(t),
              i = 512 * Math.ceil(1 + e / 512),
              s = Buffer.allocUnsafe(i)
            for (let t = 0; t < 512; t++) s[t] = 0
            ;(new ed({
              path: ("PaxHeader/" + (0, l.basename)(this.path ?? "")).slice(0, 99),
              mode: this.mode || 420,
              uid: this.uid,
              gid: this.gid,
              size: e,
              mtime: this.mtime,
              type: this.global ? "GlobalExtendedHeader" : "ExtendedHeader",
              linkpath: "",
              uname: this.uname || "",
              gname: this.gname || "",
              devmaj: 0,
              devmin: 0,
              atime: this.atime,
              ctime: this.ctime,
            }).encode(s),
              s.write(t, 512, e, "utf8"))
            for (let t = e + 512; t < s.length; t++) s[t] = 0
            return s
          }
          encodeBody() {
            return (
              this.encodeField("path") +
              this.encodeField("ctime") +
              this.encodeField("atime") +
              this.encodeField("dev") +
              this.encodeField("ino") +
              this.encodeField("nlink") +
              this.encodeField("charset") +
              this.encodeField("comment") +
              this.encodeField("gid") +
              this.encodeField("gname") +
              this.encodeField("linkpath") +
              this.encodeField("mtime") +
              this.encodeField("size") +
              this.encodeField("uid") +
              this.encodeField("uname")
            )
          }
          encodeField(t) {
            if (void 0 === this[t]) return ""
            let e = this[t],
              i =
                " " +
                ("dev" === t || "ino" === t || "nlink" === t ? "SCHILY." : "") +
                t +
                "=" +
                (e instanceof Date ? e.getTime() / 1e3 : e) +
                `
`,
              s = Buffer.byteLength(i),
              r = Math.floor(Math.log(s) / Math.log(10)) + 1
            return (s + r >= Math.pow(10, r) && (r += 1), r + s + i)
          }
          static parse(e, i, s = !1) {
            return new t(eT(eL(e), i), s)
          }
        },
        eT = (t, e) => (e ? Object.assign({}, e, t) : t),
        eL = (t) =>
          t
            .replace(/\n$/, "")
            .split(
              `
`,
            )
            .reduce(ek, Object.create(null)),
        ek = (t, e) => {
          let i = parseInt(e, 10)
          if (i !== Buffer.byteLength(e) + 1) return t
          let s = (e = e.slice((i + " ").length)).split("="),
            r = s.shift()
          if (!r) return t
          let h = r.replace(/^SCHILY\.(dev|ino|nlink)/, "$1"),
            n = s.join("=")
          return (
            (t[h] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(h)
              ? new Date(1e3 * Number(n))
              : /^[0-9]+$/.test(n)
                ? +n
                : n),
            t
          )
        },
        ex =
          "win32" !== (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform)
            ? (t) => t
            : (t) => t && t.replaceAll(/\\/g, "/"),
        eA = class extends to {
          extended
          globalExtended
          header
          startBlockSize
          blockRemain
          remain
          type
          meta = !1
          ignore = !1
          path
          mode
          uid
          gid
          uname
          gname
          size = 0
          mtime
          atime
          ctime
          linkpath
          dev
          ino
          nlink
          invalid = !1
          absolute
          unsupported = !1
          constructor(t, e, i) {
            switch (
              (super({}),
              this.pause(),
              (this.extended = e),
              (this.globalExtended = i),
              (this.header = t),
              (this.remain = t.size ?? 0),
              (this.startBlockSize = 512 * Math.ceil(this.remain / 512)),
              (this.blockRemain = this.startBlockSize),
              (this.type = t.type),
              this.type)
            ) {
              case "File":
              case "OldFile":
              case "Link":
              case "SymbolicLink":
              case "CharacterDevice":
              case "BlockDevice":
              case "Directory":
              case "FIFO":
              case "ContiguousFile":
              case "GNUDumpDir":
                break
              case "NextFileHasLongLinkpath":
              case "NextFileHasLongPath":
              case "OldGnuLongPath":
              case "GlobalExtendedHeader":
              case "ExtendedHeader":
              case "OldExtendedHeader":
                this.meta = !0
                break
              default:
                this.ignore = !0
            }
            if (!t.path) throw Error("no path provided for tar.ReadEntry")
            ;((this.path = ex(t.path)),
              (this.mode = t.mode),
              this.mode && (this.mode = 4095 & this.mode),
              (this.uid = t.uid),
              (this.gid = t.gid),
              (this.uname = t.uname),
              (this.gname = t.gname),
              (this.size = this.remain),
              (this.mtime = t.mtime),
              (this.atime = t.atime),
              (this.ctime = t.ctime),
              (this.linkpath = t.linkpath ? ex(t.linkpath) : void 0),
              (this.uname = t.uname),
              (this.gname = t.gname),
              e && this.#t(e),
              i && this.#t(i, !0))
          }
          write(t) {
            let e = t.length
            if (e > this.blockRemain) throw Error("writing more to entry than is appropriate")
            let i = this.remain,
              s = this.blockRemain
            return (
              (this.remain = Math.max(0, i - e)),
              (this.blockRemain = Math.max(0, s - e)),
              !!this.ignore || (i >= e ? super.write(t) : super.write(t.subarray(0, i)))
            )
          }
          #t(t, e = !1) {
            ;(t.path && (t.path = ex(t.path)),
              t.linkpath && (t.linkpath = ex(t.linkpath)),
              Object.assign(
                this,
                Object.fromEntries(Object.entries(t).filter(([t, i]) => !(null == i || ("path" === t && e)))),
              ))
          }
        },
        eD = (t, e, i, s = {}) => {
          ;(t.file && (s.file = t.file),
            t.cwd && (s.cwd = t.cwd),
            (s.code = (i instanceof Error && i.code) || e),
            (s.tarCode = e),
            t.strict || !1 === s.recoverable
              ? i instanceof Error
                ? t.emit("error", Object.assign(i, s))
                : t.emit("error", Object.assign(Error(`${e}: ${i}`), s))
              : (i instanceof Error && ((s = Object.assign(i, s)), (i = i.message)), t.emit("warn", e, i, s)))
        },
        eI = Buffer.from([31, 139]),
        eN = Buffer.from([40, 181, 47, 253]),
        eC = Math.max(eI.length, eN.length),
        eM = Symbol("state"),
        eB = Symbol("writeEntry"),
        eP = Symbol("readEntry"),
        eF = Symbol("nextEntry"),
        ez = Symbol("processEntry"),
        eU = Symbol("extendedHeader"),
        ej = Symbol("globalExtendedHeader"),
        eH = Symbol("meta"),
        e$ = Symbol("emitMeta"),
        eZ = Symbol("buffer"),
        eW = Symbol("queue"),
        eG = Symbol("ended"),
        eY = Symbol("emittedEnd"),
        eV = Symbol("emit"),
        eX = Symbol("unzip"),
        eK = Symbol("consumeChunk"),
        eq = Symbol("consumeChunkSub"),
        eQ = Symbol("consumeBody"),
        eJ = Symbol("consumeMeta"),
        e0 = Symbol("consumeHeader"),
        e1 = Symbol("consuming"),
        e2 = Symbol("bufferConcat"),
        e5 = Symbol("maybeEnd"),
        e3 = Symbol("writing"),
        e8 = Symbol("aborted"),
        e4 = Symbol("onDone"),
        e6 = Symbol("sawValidEntry"),
        e9 = Symbol("sawNullBlock"),
        e7 = Symbol("sawEOF"),
        it = Symbol("closeStream"),
        ie = () => !0,
        ii = class extends u.EventEmitter {
          file
          strict
          maxMetaEntrySize
          filter
          brotli
          zstd
          writable = !0
          readable = !1;
          [eW] = [];
          [eZ];
          [eP];
          [eB];
          [eM] = "begin";
          [eH] = "";
          [eU];
          [ej];
          [eG] = !1;
          [eX];
          [e8] = !1;
          [e6];
          [e9] = !1;
          [e7] = !1;
          [e3] = !1;
          [e1] = !1;
          [eY] = !1
          constructor(t = {}) {
            ;(super(),
              (this.file = t.file || ""),
              this.on(e4, () => {
                ;("begin" === this[eM] || !1 === this[e6]) &&
                  this.warn("TAR_BAD_ARCHIVE", "Unrecognized archive format")
              }),
              t.ondone
                ? this.on(e4, t.ondone)
                : this.on(e4, () => {
                    ;(this.emit("prefinish"), this.emit("finish"), this.emit("end"))
                  }),
              (this.strict = !!t.strict),
              (this.maxMetaEntrySize = t.maxMetaEntrySize || 1048576),
              (this.filter = "function" == typeof t.filter ? t.filter : ie))
            let e = t.file && (t.file.endsWith(".tar.br") || t.file.endsWith(".tbr"))
            this.brotli = t.gzip || t.zstd || void 0 === t.brotli ? !!e && void 0 : t.brotli
            let i = t.file && (t.file.endsWith(".tar.zst") || t.file.endsWith(".tzst"))
            ;((this.zstd = t.gzip || t.brotli || void 0 === t.zstd ? !!i || void 0 : t.zstd),
              this.on("end", () => this[it]()),
              "function" == typeof t.onwarn && this.on("warn", t.onwarn),
              "function" == typeof t.onReadEntry && this.on("entry", t.onReadEntry))
          }
          warn(t, e, i = {}) {
            eD(this, t, e, i)
          }
          [e0](t, e) {
            let i
            void 0 === this[e6] && (this[e6] = !1)
            try {
              i = new ed(t, e, this[eU], this[ej])
            } catch (t) {
              return this.warn("TAR_ENTRY_INVALID", t)
            }
            if (i.nullBlock)
              this[e9]
                ? ((this[e7] = !0), "begin" === this[eM] && (this[eM] = "header"), this[eV]("eof"))
                : ((this[e9] = !0), this[eV]("nullBlock"))
            else if (((this[e9] = !1), i.cksumValid))
              if (i.path) {
                let t = i.type
                if (/^(Symbolic)?Link$/.test(t) && !i.linkpath)
                  this.warn("TAR_ENTRY_INVALID", "linkpath required", { header: i })
                else if (/^(Symbolic)?Link$/.test(t) || /^(Global)?ExtendedHeader$/.test(t) || !i.linkpath) {
                  let t = (this[eB] = new eA(i, this[eU], this[ej]))
                  if (!this[e6])
                    if (t.remain) {
                      let e = () => {
                        t.invalid || (this[e6] = !0)
                      }
                      t.on("end", e)
                    } else this[e6] = !0
                  t.meta
                    ? t.size > this.maxMetaEntrySize
                      ? ((t.ignore = !0), this[eV]("ignoredEntry", t), (this[eM] = "ignore"), t.resume())
                      : t.size > 0 && ((this[eH] = ""), t.on("data", (t) => (this[eH] += t)), (this[eM] = "meta"))
                    : ((this[eU] = void 0),
                      (t.ignore = t.ignore || !this.filter(t.path, t)),
                      t.ignore
                        ? (this[eV]("ignoredEntry", t), (this[eM] = t.remain ? "ignore" : "header"), t.resume())
                        : (t.remain ? (this[eM] = "body") : ((this[eM] = "header"), t.end()),
                          this[eP] ? this[eW].push(t) : (this[eW].push(t), this[eF]())))
                } else this.warn("TAR_ENTRY_INVALID", "linkpath forbidden", { header: i })
              } else this.warn("TAR_ENTRY_INVALID", "path is required", { header: i })
            else this.warn("TAR_ENTRY_INVALID", "checksum failure", { header: i })
          }
          [it]() {
            queueMicrotask(() => this.emit("close"))
          }
          [ez](t) {
            let e = !0
            if (t)
              if (Array.isArray(t)) {
                let [e, ...i] = t
                this.emit(e, ...i)
              } else ((this[eP] = t), this.emit("entry", t), t.emittedEnd || (t.on("end", () => this[eF]()), (e = !1)))
            else ((this[eP] = void 0), (e = !1))
            return e
          }
          [eF]() {
            do;
            while (this[ez](this[eW].shift()))
            if (0 === this[eW].length) {
              let t = this[eP]
              !t || t.flowing || t.size === t.remain
                ? this[e3] || this.emit("drain")
                : t.once("drain", () => this.emit("drain"))
            }
          }
          [eQ](t, e) {
            let i = this[eB]
            if (!i) throw Error("attempt to consume body without entry??")
            let s = i.blockRemain ?? 0,
              r = s >= t.length && 0 === e ? t : t.subarray(e, e + s)
            return (i.write(r), i.blockRemain || ((this[eM] = "header"), (this[eB] = void 0), i.end()), r.length)
          }
          [eJ](t, e) {
            let i = this[eB],
              s = this[eQ](t, e)
            return (!this[eB] && i && this[e$](i), s)
          }
          [eV](t, e, i) {
            0 !== this[eW].length || this[eP] ? this[eW].push([t, e, i]) : this.emit(t, e, i)
          }
          [e$](t) {
            switch ((this[eV]("meta", this[eH]), t.type)) {
              case "ExtendedHeader":
              case "OldExtendedHeader":
                this[eU] = eO.parse(this[eH], this[eU], !1)
                break
              case "GlobalExtendedHeader":
                this[ej] = eO.parse(this[eH], this[ej], !0)
                break
              case "NextFileHasLongPath":
              case "OldGnuLongPath": {
                let t = this[eU] ?? Object.create(null)
                ;((this[eU] = t), (t.path = this[eH].replace(/\0.*/, "")))
                break
              }
              case "NextFileHasLongLinkpath": {
                let t = this[eU] || Object.create(null)
                ;((this[eU] = t), (t.linkpath = this[eH].replace(/\0.*/, "")))
                break
              }
              default:
                throw Error("unknown meta: " + t.type)
            }
          }
          abort(t) {
            ;((this[e8] = !0), this.emit("abort", t), this.warn("TAR_ABORT", t, { recoverable: !1 }))
          }
          write(t, e, i) {
            if (
              ("function" == typeof e && ((i = e), (e = void 0)),
              "string" == typeof t && (t = Buffer.from(t, "string" == typeof e ? e : "utf8")),
              this[e8])
            )
              return (i?.(), !1)
            if ((void 0 === this[eX] || (void 0 === this.brotli && !1 === this[eX])) && t) {
              if ((this[eZ] && ((t = Buffer.concat([this[eZ], t])), (this[eZ] = void 0)), t.length < eC))
                return ((this[eZ] = t), i?.(), !0)
              for (let e = 0; void 0 === this[eX] && e < eI.length; e++) t[e] !== eI[e] && (this[eX] = !1)
              let e = !1
              if (!1 === this[eX] && !1 !== this.zstd) {
                e = !0
                for (let i = 0; i < eN.length; i++)
                  if (t[i] !== eN[i]) {
                    e = !1
                    break
                  }
              }
              let s = void 0 === this.brotli && !e
              if (!1 === this[eX] && s)
                if (t.length < 512)
                  if (!this[eG]) return ((this[eZ] = t), i?.(), !0)
                  else this.brotli = !0
                else
                  try {
                    ;(new ed(t.subarray(0, 512)), (this.brotli = !1))
                  } catch {
                    this.brotli = !0
                  }
              if (void 0 === this[eX] || (!1 === this[eX] && (this.brotli || e))) {
                let s = this[eG]
                ;((this[eG] = !1),
                  (this[eX] = void 0 === this[eX] ? new t5({}) : e ? new t7({}) : new t4({})),
                  this[eX].on("data", (t) => this[eK](t)),
                  this[eX].on("error", (t) => this.abort(t)),
                  this[eX].on("end", () => {
                    ;((this[eG] = !0), this[eK]())
                  }),
                  (this[e3] = !0))
                let r = !!this[eX][s ? "end" : "write"](t)
                return ((this[e3] = !1), i?.(), r)
              }
            }
            ;((this[e3] = !0), this[eX] ? this[eX].write(t) : this[eK](t), (this[e3] = !1))
            let s = !(this[eW].length > 0) && (!this[eP] || this[eP].flowing)
            return (s || 0 !== this[eW].length || this[eP]?.once("drain", () => this.emit("drain")), i?.(), s)
          }
          [e2](t) {
            t && !this[e8] && (this[eZ] = this[eZ] ? Buffer.concat([this[eZ], t]) : t)
          }
          [e5]() {
            if (this[eG] && !this[eY] && !this[e8] && !this[e1]) {
              this[eY] = !0
              let t = this[eB]
              if (t && t.blockRemain) {
                let e = this[eZ] ? this[eZ].length : 0
                ;(this.warn(
                  "TAR_BAD_ARCHIVE",
                  `Truncated input (needed ${t.blockRemain} more bytes, only ${e} available)`,
                  { entry: t },
                ),
                  this[eZ] && t.write(this[eZ]),
                  t.end())
              }
              this[eV](e4)
            }
          }
          [eK](t) {
            if (this[e1] && t) this[e2](t)
            else if (t || this[eZ]) {
              if (t) {
                if (((this[e1] = !0), this[eZ])) {
                  this[e2](t)
                  let e = this[eZ]
                  ;((this[eZ] = void 0), this[eq](e))
                } else this[eq](t)
                for (; this[eZ] && this[eZ]?.length >= 512 && !this[e8] && !this[e7];) {
                  let t = this[eZ]
                  ;((this[eZ] = void 0), this[eq](t))
                }
                this[e1] = !1
              }
            } else this[e5]()
            ;(!this[eZ] || this[eG]) && this[e5]()
          }
          [eq](t) {
            let e = 0,
              i = t.length
            for (; e + 512 <= i && !this[e8] && !this[e7];)
              switch (this[eM]) {
                case "begin":
                case "header":
                  ;(this[e0](t, e), (e += 512))
                  break
                case "ignore":
                case "body":
                  e += this[eQ](t, e)
                  break
                case "meta":
                  e += this[eJ](t, e)
                  break
                default:
                  throw Error("invalid state: " + this[eM])
              }
            e < i && (this[eZ] = this[eZ] ? Buffer.concat([t.subarray(e), this[eZ]]) : t.subarray(e))
          }
          end(t, e, i) {
            return (
              "function" == typeof t && ((i = t), (e = void 0), (t = void 0)),
              "function" == typeof e && ((i = e), (e = void 0)),
              "string" == typeof t && (t = Buffer.from(t, e)),
              i && this.once("finish", i),
              this[e8] ||
                (this[eX]
                  ? (t && this[eX].write(t), this[eX].end())
                  : ((this[eG] = !0),
                    (void 0 === this.brotli || void 0 === this.zstd) && (t = t || Buffer.alloc(0)),
                    t && this.write(t),
                    this[e5]())),
              this
            )
          }
        },
        is = (t) => {
          let e = t.length - 1,
            i = -1
          for (; e > -1 && "/" === t.charAt(e);) ((i = e), e--)
          return -1 === i ? t : t.slice(0, i)
        },
        ir = (t, e) => {
          let i = new Map(e.map((t) => [is(t), !0])),
            s = t.filter,
            r = (t, e = "") => {
              let s = e || (0, p.parse)(t).root || ".",
                h
              if (t === s) h = !1
              else {
                let e = i.get(t)
                h = void 0 !== e ? e : r((0, p.dirname)(t), s)
              }
              return (i.set(t, h), h)
            }
          t.filter = s ? (t, e) => s(t, e) && r(is(t)) : (t) => r(is(t))
        },
        ih = tZ(
          (t) => {
            let e = new ii(t),
              i = t.file,
              s
            try {
              s = o.openSync(i, "r")
              let r = o.fstatSync(s),
                h = t.maxReadSize || 0x1000000
              if (r.size < h) {
                let t = Buffer.allocUnsafe(r.size),
                  i = o.readSync(s, t, 0, r.size, 0)
                e.end(i === t.byteLength ? t : t.subarray(0, i))
              } else {
                let t = 0,
                  i = Buffer.allocUnsafe(h)
                for (; t < r.size;) {
                  let r = o.readSync(s, i, 0, h, t)
                  if (0 === r) break
                  ;((t += r), e.write(i.subarray(0, r)))
                }
                e.end()
              }
            } finally {
              if ("number" == typeof s)
                try {
                  o.closeSync(s)
                } catch {}
            }
          },
          (t, e) => {
            let i = new ii(t),
              s = t.maxReadSize || 0x1000000,
              r = t.file
            return new Promise((t, e) => {
              ;(i.on("error", e),
                i.on("end", t),
                o.stat(r, (t, h) => {
                  if (t) e(t)
                  else {
                    let t = new tP(r, { readSize: s, size: h.size })
                    ;(t.on("error", e), t.pipe(i))
                  }
                }))
            })
          },
          (t) => new ii(t),
          (t) => new ii(t),
          (t, e) => {
            let i
            ;(e?.length && ir(t, e),
              t.noResume ||
                ((i = t.onReadEntry),
                (t.onReadEntry = i
                  ? (t) => {
                      ;(i(t), t.resume())
                    }
                  : (t) => t.resume())))
          },
        ),
        io = (t, e, i) => (
          (t &= 4095),
          i && (t = (384 | t) & -19),
          e && (256 & t && (t |= 64), 32 & t && (t |= 8), 4 & t && (t |= 1)),
          t
        ),
        { isAbsolute: ia, parse: il } = l.win32,
        id = (t) => {
          let e = "",
            i = il(t)
          for (; ia(t) || i.root;) {
            let s = "/" === t.charAt(0) && "//?/" !== t.slice(0, 4) ? "/" : i.root
            ;((t = t.slice(s.length)), (e += s), (i = il(t)))
          }
          return [e, t]
        },
        iu = ["|", "<", ">", "?", ":"],
        ic = iu.map((t) => String.fromCodePoint(61440 + Number(t.codePointAt(0)))),
        im = new Map(iu.map((t, e) => [t, ic[e]])),
        ip = new Map(ic.map((t, e) => [t, iu[e]])),
        iy = (t) => iu.reduce((t, e) => t.split(e).join(im.get(e)), t),
        ib = (t, e) => (e ? ((t = ex(t).replace(/^\.(\/|$)/, "")), is(e) + "/" + t) : ex(t)),
        ig = Symbol("process"),
        iE = Symbol("file"),
        iw = Symbol("directory"),
        i_ = Symbol("symlink"),
        iR = Symbol("hardlink"),
        iS = Symbol("header"),
        iv = Symbol("read"),
        iO = Symbol("lstat"),
        iT = Symbol("onlstat"),
        iL = Symbol("onread"),
        ik = Symbol("onreadlink"),
        ix = Symbol("openfile"),
        iA = Symbol("onopenfile"),
        iD = Symbol("close"),
        iI = Symbol("mode"),
        iN = Symbol("awaitDrain"),
        iC = Symbol("ondrain"),
        iM = Symbol("prefix"),
        iB = class extends to {
          path
          portable
          myuid = (process.getuid && process.getuid()) || 0
          myuser = process.env.USER || ""
          maxReadSize
          linkCache
          statCache
          preservePaths
          cwd
          strict
          mtime
          noPax
          noMtime
          prefix
          fd
          blockLen = 0
          blockRemain = 0
          buf
          pos = 0
          remain = 0
          length = 0
          offset = 0
          win32
          absolute
          header
          type
          linkpath
          stat
          onWriteEntry
          #t = !1
          constructor(t, e = {}) {
            let i,
              s = t$(e)
            ;(super(),
              (this.path = ex(t)),
              (this.portable = !!s.portable),
              (this.maxReadSize = s.maxReadSize || 0x1000000),
              (this.linkCache = s.linkCache || new Map()),
              (this.statCache = s.statCache || new Map()),
              (this.preservePaths = !!s.preservePaths),
              (this.cwd = ex(s.cwd || process.cwd())),
              (this.strict = !!s.strict),
              (this.noPax = !!s.noPax),
              (this.noMtime = !!s.noMtime),
              (this.mtime = s.mtime),
              (this.prefix = s.prefix ? ex(s.prefix) : void 0),
              (this.onWriteEntry = s.onWriteEntry),
              "function" == typeof s.onwarn && this.on("warn", s.onwarn))
            let r = !1
            if (!this.preservePaths) {
              let [t, e] = id(this.path)
              t && "string" == typeof e && ((this.path = e), (r = t))
            }
            ;((this.win32 = !!s.win32 || "win32" === process.platform),
              this.win32 &&
                ((this.path =
                  ((i = this.path.replaceAll(/\\/g, "/")), ic.reduce((t, e) => t.split(e).join(ip.get(e)), i))),
                (t = t.replaceAll(/\\/g, "/"))),
              (this.absolute = ex(s.absolute || p.resolve(this.cwd, t))),
              "" === this.path && (this.path = "./"),
              r &&
                this.warn("TAR_ENTRY_INFO", `stripping ${r} from absolute path`, { entry: this, path: r + this.path }))
            let h = this.statCache.get(this.absolute)
            h ? this[iT](h) : this[iO]()
          }
          warn(t, e, i = {}) {
            return eD(this, t, e, i)
          }
          emit(t, ...e) {
            return ("error" === t && (this.#t = !0), super.emit(t, ...e))
          }
          [iO]() {
            c.lstat(this.absolute, (t, e) => {
              if (t) return this.emit("error", t)
              this[iT](e)
            })
          }
          [iT](t) {
            ;(this.statCache.set(this.absolute, t),
              (this.stat = t),
              t.isFile() || (t.size = 0),
              (this.type = iz(t)),
              this.emit("stat", t),
              this[ig]())
          }
          [ig]() {
            switch (this.type) {
              case "File":
                return this[iE]()
              case "Directory":
                return this[iw]()
              case "SymbolicLink":
                return this[i_]()
              default:
                return this.end()
            }
          }
          [iI](t) {
            return io(t, "Directory" === this.type, this.portable)
          }
          [iM](t) {
            return ib(t, this.prefix)
          }
          [iS]() {
            if (!this.stat) throw Error("cannot write header before stat")
            ;("Directory" === this.type && this.portable && (this.noMtime = !0),
              this.onWriteEntry?.(this),
              (this.header = new ed({
                path: this[iM](this.path),
                linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[iM](this.linkpath) : this.linkpath,
                mode: this[iI](this.stat.mode),
                uid: this.portable ? void 0 : this.stat.uid,
                gid: this.portable ? void 0 : this.stat.gid,
                size: this.stat.size,
                mtime: this.noMtime ? void 0 : this.mtime || this.stat.mtime,
                type: "Unsupported" === this.type ? void 0 : this.type,
                uname: this.portable ? void 0 : this.stat.uid === this.myuid ? this.myuser : "",
                atime: this.portable ? void 0 : this.stat.atime,
                ctime: this.portable ? void 0 : this.stat.ctime,
              })),
              this.header.encode() &&
                !this.noPax &&
                super.write(
                  new eO({
                    atime: this.portable ? void 0 : this.header.atime,
                    ctime: this.portable ? void 0 : this.header.ctime,
                    gid: this.portable ? void 0 : this.header.gid,
                    mtime: this.noMtime ? void 0 : this.mtime || this.header.mtime,
                    path: this[iM](this.path),
                    linkpath:
                      "Link" === this.type && void 0 !== this.linkpath ? this[iM](this.linkpath) : this.linkpath,
                    size: this.header.size,
                    uid: this.portable ? void 0 : this.header.uid,
                    uname: this.portable ? void 0 : this.header.uname,
                    dev: this.portable ? void 0 : this.stat.dev,
                    ino: this.portable ? void 0 : this.stat.ino,
                    nlink: this.portable ? void 0 : this.stat.nlink,
                  }).encode(),
                ))
            let t = this.header?.block
            if (!t) throw Error("failed to encode header")
            super.write(t)
          }
          [iw]() {
            if (!this.stat) throw Error("cannot create directory entry without stat")
            ;("/" !== this.path.slice(-1) && (this.path += "/"), (this.stat.size = 0), this[iS](), this.end())
          }
          [i_]() {
            c.readlink(this.absolute, (t, e) => {
              if (t) return this.emit("error", t)
              this[ik](e)
            })
          }
          [ik](t) {
            ;((this.linkpath = ex(t)), this[iS](), this.end())
          }
          [iR](t) {
            if (!this.stat) throw Error("cannot create link entry without stat")
            ;((this.type = "Link"),
              (this.linkpath = ex(p.relative(this.cwd, t))),
              (this.stat.size = 0),
              this[iS](),
              this.end())
          }
          [iE]() {
            if (!this.stat) throw Error("cannot create file entry without stat")
            if (this.stat.nlink > 1) {
              let t = `${this.stat.dev}:${this.stat.ino}`,
                e = this.linkCache.get(t)
              if (e?.indexOf(this.cwd) === 0) return this[iR](e)
              this.linkCache.set(t, this.absolute)
            }
            if ((this[iS](), 0 === this.stat.size)) return this.end()
            this[ix]()
          }
          [ix]() {
            c.open(this.absolute, "r", (t, e) => {
              if (t) return this.emit("error", t)
              this[iA](e)
            })
          }
          [iA](t) {
            if (((this.fd = t), this.#t)) return this[iD]()
            if (!this.stat) throw Error("should stat before calling onopenfile")
            ;((this.blockLen = 512 * Math.ceil(this.stat.size / 512)), (this.blockRemain = this.blockLen))
            let e = Math.min(this.blockLen, this.maxReadSize)
            ;((this.buf = Buffer.allocUnsafe(e)),
              (this.offset = 0),
              (this.pos = 0),
              (this.remain = this.stat.size),
              (this.length = this.buf.length),
              this[iv]())
          }
          [iv]() {
            let { fd: t, buf: e, offset: i, length: s, pos: r } = this
            if (void 0 === t || void 0 === e) throw Error("cannot read file without first opening")
            c.read(t, e, i, s, r, (t, e) => {
              if (t) return this[iD](() => this.emit("error", t))
              this[iL](e)
            })
          }
          [iD](t = () => {}) {
            void 0 !== this.fd && c.close(this.fd, t)
          }
          [iL](t) {
            if (t <= 0 && this.remain > 0) {
              let t = Object.assign(Error("encountered unexpected EOF"), {
                path: this.absolute,
                syscall: "read",
                code: "EOF",
              })
              return this[iD](() => this.emit("error", t))
            }
            if (t > this.remain) {
              let t = Object.assign(Error("did not encounter expected EOF"), {
                path: this.absolute,
                syscall: "read",
                code: "EOF",
              })
              return this[iD](() => this.emit("error", t))
            }
            if (!this.buf) throw Error("should have created buffer prior to reading")
            if (t === this.remain)
              for (let e = t; e < this.length && t < this.blockRemain; e++)
                ((this.buf[e + this.offset] = 0), t++, this.remain++)
            let e =
              0 === this.offset && t === this.buf.length ? this.buf : this.buf.subarray(this.offset, this.offset + t)
            this.write(e) ? this[iC]() : this[iN](() => this[iC]())
          }
          [iN](t) {
            this.once("drain", t)
          }
          write(t, e, i) {
            if (
              ("function" == typeof e && ((i = e), (e = void 0)),
              "string" == typeof t && (t = Buffer.from(t, "string" == typeof e ? e : "utf8")),
              this.blockRemain < t.length)
            ) {
              let t = Object.assign(Error("writing more data than expected"), { path: this.absolute })
              return this.emit("error", t)
            }
            return (
              (this.remain -= t.length),
              (this.blockRemain -= t.length),
              (this.pos += t.length),
              (this.offset += t.length),
              super.write(t, null, i)
            )
          }
          [iC]() {
            if (!this.remain)
              return (
                this.blockRemain && super.write(Buffer.alloc(this.blockRemain)),
                this[iD]((t) => (t ? this.emit("error", t) : this.end()))
              )
            if (!this.buf) throw Error("buffer lost somehow in ONDRAIN")
            ;(this.offset >= this.length &&
              ((this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length))), (this.offset = 0)),
              (this.length = this.buf.length - this.offset),
              this[iv]())
          }
        },
        iP = class extends iB {
          sync = !0;
          [iO]() {
            this[iT](c.lstatSync(this.absolute))
          }
          [i_]() {
            this[ik](c.readlinkSync(this.absolute))
          }
          [ix]() {
            this[iA](c.openSync(this.absolute, "r"))
          }
          [iv]() {
            let t = !0
            try {
              let { fd: e, buf: i, offset: s, length: r, pos: h } = this
              if (void 0 === e || void 0 === i) throw Error("fd and buf must be set in READ method")
              let n = c.readSync(e, i, s, r, h)
              ;(this[iL](n), (t = !1))
            } finally {
              if (t)
                try {
                  this[iD](() => {})
                } catch {}
            }
          }
          [iN](t) {
            t()
          }
          [iD](t = () => {}) {
            ;(void 0 !== this.fd && c.closeSync(this.fd), t())
          }
        },
        iF = class extends to {
          blockLen = 0
          blockRemain = 0
          buf = 0
          pos = 0
          remain = 0
          length = 0
          preservePaths
          portable
          strict
          noPax
          noMtime
          readEntry
          type
          prefix
          path
          mode
          uid
          gid
          uname
          gname
          header
          mtime
          atime
          ctime
          linkpath
          size
          onWriteEntry
          warn(t, e, i = {}) {
            return eD(this, t, e, i)
          }
          constructor(t, e = {}) {
            let i = t$(e)
            ;(super(),
              (this.preservePaths = !!i.preservePaths),
              (this.portable = !!i.portable),
              (this.strict = !!i.strict),
              (this.noPax = !!i.noPax),
              (this.noMtime = !!i.noMtime),
              (this.onWriteEntry = i.onWriteEntry),
              (this.readEntry = t))
            let { type: s } = t
            if ("Unsupported" === s) throw Error("writing entry that should be ignored")
            ;((this.type = s),
              "Directory" === this.type && this.portable && (this.noMtime = !0),
              (this.prefix = i.prefix),
              (this.path = ex(t.path)),
              (this.mode = void 0 !== t.mode ? this[iI](t.mode) : void 0),
              (this.uid = this.portable ? void 0 : t.uid),
              (this.gid = this.portable ? void 0 : t.gid),
              (this.uname = this.portable ? void 0 : t.uname),
              (this.gname = this.portable ? void 0 : t.gname),
              (this.size = t.size),
              (this.mtime = this.noMtime ? void 0 : i.mtime || t.mtime),
              (this.atime = this.portable ? void 0 : t.atime),
              (this.ctime = this.portable ? void 0 : t.ctime),
              (this.linkpath = void 0 !== t.linkpath ? ex(t.linkpath) : void 0),
              "function" == typeof i.onwarn && this.on("warn", i.onwarn))
            let r = !1
            if (!this.preservePaths) {
              let [t, e] = id(this.path)
              t && "string" == typeof e && ((this.path = e), (r = t))
            }
            ;((this.remain = t.size),
              (this.blockRemain = t.startBlockSize),
              this.onWriteEntry?.(this),
              (this.header = new ed({
                path: this[iM](this.path),
                linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[iM](this.linkpath) : this.linkpath,
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
              r &&
                this.warn("TAR_ENTRY_INFO", `stripping ${r} from absolute path`, { entry: this, path: r + this.path }),
              this.header.encode() &&
                !this.noPax &&
                super.write(
                  new eO({
                    atime: this.portable ? void 0 : this.atime,
                    ctime: this.portable ? void 0 : this.ctime,
                    gid: this.portable ? void 0 : this.gid,
                    mtime: this.noMtime ? void 0 : this.mtime,
                    path: this[iM](this.path),
                    linkpath:
                      "Link" === this.type && void 0 !== this.linkpath ? this[iM](this.linkpath) : this.linkpath,
                    size: this.size,
                    uid: this.portable ? void 0 : this.uid,
                    uname: this.portable ? void 0 : this.uname,
                    dev: this.portable ? void 0 : this.readEntry.dev,
                    ino: this.portable ? void 0 : this.readEntry.ino,
                    nlink: this.portable ? void 0 : this.readEntry.nlink,
                  }).encode(),
                ))
            let h = this.header?.block
            if (!h) throw Error("failed to encode header")
            ;(super.write(h), t.pipe(this))
          }
          [iM](t) {
            return ib(t, this.prefix)
          }
          [iI](t) {
            return io(t, "Directory" === this.type, this.portable)
          }
          write(t, e, i) {
            ;("function" == typeof e && ((i = e), (e = void 0)),
              "string" == typeof t && (t = Buffer.from(t, "string" == typeof e ? e : "utf8")))
            let s = t.length
            if (s > this.blockRemain) throw Error("writing more to entry than is appropriate")
            return ((this.blockRemain -= s), super.write(t, i))
          }
          end(t, e, i) {
            return (
              this.blockRemain && super.write(Buffer.alloc(this.blockRemain)),
              "function" == typeof t && ((i = t), (e = void 0), (t = void 0)),
              "function" == typeof e && ((i = e), (e = void 0)),
              "string" == typeof t && (t = Buffer.from(t, e ?? "utf8")),
              i && this.once("finish", i),
              t ? super.end(t, i) : super.end(i),
              this
            )
          }
        },
        iz = (t) =>
          t.isFile() ? "File" : t.isDirectory() ? "Directory" : t.isSymbolicLink() ? "SymbolicLink" : "Unsupported",
        iU = class t {
          tail
          head
          length = 0
          static create(e = []) {
            return new t(e)
          }
          constructor(t = []) {
            for (let e of t) this.push(e)
          }
          *[Symbol.iterator]() {
            for (let t = this.head; t; t = t.next) yield t.value
          }
          removeNode(t) {
            if (t.list !== this) throw Error("removing node which does not belong to this list")
            let e = t.next,
              i = t.prev
            return (
              e && (e.prev = i),
              i && (i.next = e),
              t === this.head && (this.head = e),
              t === this.tail && (this.tail = i),
              this.length--,
              (t.next = void 0),
              (t.prev = void 0),
              (t.list = void 0),
              e
            )
          }
          unshiftNode(t) {
            if (t === this.head) return
            t.list && t.list.removeNode(t)
            let e = this.head
            ;((t.list = this),
              (t.next = e),
              e && (e.prev = t),
              (this.head = t),
              this.tail || (this.tail = t),
              this.length++)
          }
          pushNode(t) {
            if (t === this.tail) return
            t.list && t.list.removeNode(t)
            let e = this.tail
            ;((t.list = this),
              (t.prev = e),
              e && (e.next = t),
              (this.tail = t),
              this.head || (this.head = t),
              this.length++)
          }
          push(...t) {
            for (let i = 0, s = t.length; i < s; i++) {
              var e
              ;((e = this), (e.tail = new ij(t[i], e.tail, void 0, e)), e.head || (e.head = e.tail), e.length++)
            }
            return this.length
          }
          unshift(...t) {
            for (var e, i = 0, s = t.length; i < s; i++) {
              ;((e = this), (e.head = new ij(t[i], void 0, e.head, e)), e.tail || (e.tail = e.head), e.length++)
            }
            return this.length
          }
          pop() {
            if (!this.tail) return
            let t = this.tail.value,
              e = this.tail
            return (
              (this.tail = this.tail.prev),
              this.tail ? (this.tail.next = void 0) : (this.head = void 0),
              (e.list = void 0),
              this.length--,
              t
            )
          }
          shift() {
            if (!this.head) return
            let t = this.head.value,
              e = this.head
            return (
              (this.head = this.head.next),
              this.head ? (this.head.prev = void 0) : (this.tail = void 0),
              (e.list = void 0),
              this.length--,
              t
            )
          }
          forEach(t, e) {
            e = e || this
            for (let i = this.head, s = 0; i; s++) (t.call(e, i.value, s, this), (i = i.next))
          }
          forEachReverse(t, e) {
            e = e || this
            for (let i = this.tail, s = this.length - 1; i; s--) (t.call(e, i.value, s, this), (i = i.prev))
          }
          get(t) {
            let e = 0,
              i = this.head
            for (; i && e < t; e++) i = i.next
            if (e === t && i) return i.value
          }
          getReverse(t) {
            let e = 0,
              i = this.tail
            for (; i && e < t; e++) i = i.prev
            if (e === t && i) return i.value
          }
          map(e, i) {
            i = i || this
            let s = new t()
            for (let t = this.head; t;) (s.push(e.call(i, t.value, this)), (t = t.next))
            return s
          }
          mapReverse(e, i) {
            i = i || this
            var s = new t()
            for (let t = this.tail; t;) (s.push(e.call(i, t.value, this)), (t = t.prev))
            return s
          }
          reduce(t, e) {
            let i,
              s = this.head
            if (arguments.length > 1) i = e
            else if (this.head) ((s = this.head.next), (i = this.head.value))
            else throw TypeError("Reduce of empty list with no initial value")
            for (var r = 0; s; r++) ((i = t(i, s.value, r)), (s = s.next))
            return i
          }
          reduceReverse(t, e) {
            let i,
              s = this.tail
            if (arguments.length > 1) i = e
            else if (this.tail) ((s = this.tail.prev), (i = this.tail.value))
            else throw TypeError("Reduce of empty list with no initial value")
            for (let e = this.length - 1; s; e--) ((i = t(i, s.value, e)), (s = s.prev))
            return i
          }
          toArray() {
            let t = Array(this.length)
            for (let e = 0, i = this.head; i; e++) ((t[e] = i.value), (i = i.next))
            return t
          }
          toArrayReverse() {
            let t = Array(this.length)
            for (let e = 0, i = this.tail; i; e++) ((t[e] = i.value), (i = i.prev))
            return t
          }
          slice(e = 0, i = this.length) {
            ;(i < 0 && (i += this.length), e < 0 && (e += this.length))
            let s = new t()
            if (i < e || i < 0) return s
            ;(e < 0 && (e = 0), i > this.length && (i = this.length))
            let r = this.head,
              h = 0
            for (h = 0; r && h < e; h++) r = r.next
            for (; r && h < i; h++, r = r.next) s.push(r.value)
            return s
          }
          sliceReverse(e = 0, i = this.length) {
            ;(i < 0 && (i += this.length), e < 0 && (e += this.length))
            let s = new t()
            if (i < e || i < 0) return s
            ;(e < 0 && (e = 0), i > this.length && (i = this.length))
            let r = this.length,
              h = this.tail
            for (; h && r > i; r--) h = h.prev
            for (; h && r > e; r--, h = h.prev) s.push(h.value)
            return s
          }
          splice(t, e = 0, ...i) {
            ;(t > this.length && (t = this.length - 1), t < 0 && (t = this.length + t))
            let s = this.head
            for (let e = 0; s && e < t; e++) s = s.next
            let r = []
            for (let t = 0; s && t < e; t++) (r.push(s.value), (s = this.removeNode(s)))
            for (let t of (s ? s !== this.tail && (s = s.prev) : (s = this.tail), i))
              s = (function (t, e, i) {
                let s = e ? e.next : t.head,
                  r = new ij(i, e, s, t)
                return (void 0 === r.next && (t.tail = r), void 0 === r.prev && (t.head = r), t.length++, r)
              })(this, s, t)
            return r
          }
          reverse() {
            let t = this.head,
              e = this.tail
            for (let e = t; e; e = e.prev) {
              let t = e.prev
              ;((e.prev = e.next), (e.next = t))
            }
            return ((this.head = e), (this.tail = t), this)
          }
        },
        ij = class {
          list
          next
          prev
          value
          constructor(t, e, i, s) {
            ;((this.list = s),
              (this.value = t),
              e ? ((e.next = this), (this.prev = e)) : (this.prev = void 0),
              i ? ((i.prev = this), (this.next = i)) : (this.next = void 0))
          }
        },
        iH = class {
          path
          absolute
          entry
          stat
          readdir
          pending = !1
          pendingLink = !1
          ignore = !1
          piped = !1
          constructor(t, e) {
            ;((this.path = t || "./"), (this.absolute = e))
          }
        },
        i$ = Buffer.alloc(1024),
        iZ = Symbol("onStat"),
        iW = Symbol("ended"),
        iG = Symbol("queue"),
        iY = Symbol("pendingLinks"),
        iV = Symbol("current"),
        iX = Symbol("process"),
        iK = Symbol("processing"),
        iq = Symbol("processJob"),
        iQ = Symbol("jobs"),
        iJ = Symbol("jobDone"),
        i0 = Symbol("addFSEntry"),
        i1 = Symbol("addTarEntry"),
        i2 = Symbol("stat"),
        i5 = Symbol("readdir"),
        i3 = Symbol("onreaddir"),
        i8 = Symbol("pipe"),
        i4 = Symbol("entry"),
        i6 = Symbol("entryOpt"),
        i9 = Symbol("writeEntryClass"),
        i7 = Symbol("write"),
        st = Symbol("ondrain"),
        se = class extends to {
          sync = !1
          opt
          cwd
          maxReadSize
          preservePaths
          strict
          noPax
          prefix
          linkCache
          statCache
          file
          portable
          zip
          readdirCache
          noDirRecurse
          follow
          noMtime
          mtime
          filter
          jobs;
          [i9]
          onWriteEntry;
          [iG];
          [iY] = new Map();
          [iQ] = 0;
          [iK] = !1;
          [iW] = !1
          constructor(t = {}) {
            if (
              (super(),
              (this.opt = t),
              (this.file = t.file || ""),
              (this.cwd = t.cwd || process.cwd()),
              (this.maxReadSize = t.maxReadSize),
              (this.preservePaths = !!t.preservePaths),
              (this.strict = !!t.strict),
              (this.noPax = !!t.noPax),
              (this.prefix = ex(t.prefix || "")),
              (this.linkCache = t.linkCache || new Map()),
              (this.statCache = t.statCache || new Map()),
              (this.readdirCache = t.readdirCache || new Map()),
              (this.onWriteEntry = t.onWriteEntry),
              (this[i9] = iB),
              "function" == typeof t.onwarn && this.on("warn", t.onwarn),
              (this.portable = !!t.portable),
              t.gzip || t.brotli || t.zstd)
            ) {
              if (+!!t.gzip + +!!t.brotli + +!!t.zstd > 1) throw TypeError("gzip, brotli, zstd are mutually exclusive")
              if (
                (t.gzip &&
                  ("object" != typeof t.gzip && (t.gzip = {}),
                  this.portable && (t.gzip.portable = !0),
                  (this.zip = new t2(t.gzip))),
                t.brotli && ("object" != typeof t.brotli && (t.brotli = {}), (this.zip = new t8(t.brotli))),
                t.zstd && ("object" != typeof t.zstd && (t.zstd = {}), (this.zip = new t9(t.zstd))),
                !this.zip)
              )
                throw Error("impossible")
              let e = this.zip
              ;(e.on("data", (t) => super.write(t)),
                e.on("end", () => super.end()),
                e.on("drain", () => this[st]()),
                this.on("resume", () => e.resume()))
            } else this.on("drain", this[st])
            ;((this.noDirRecurse = !!t.noDirRecurse),
              (this.follow = !!t.follow),
              (this.noMtime = !!t.noMtime),
              t.mtime && (this.mtime = t.mtime),
              (this.filter = "function" == typeof t.filter ? t.filter : () => !0),
              (this[iG] = new iU()),
              (this[iQ] = 0),
              (this.jobs = Number(t.jobs) || 4),
              (this[iK] = !1),
              (this[iW] = !1))
          }
          [i7](t) {
            return super.write(t)
          }
          add(t) {
            return (this.write(t), this)
          }
          end(t, e, i) {
            return (
              "function" == typeof t && ((i = t), (t = void 0)),
              "function" == typeof e && ((i = e), (e = void 0)),
              t && this.add(t),
              (this[iW] = !0),
              this[iX](),
              i && i(),
              this
            )
          }
          write(t) {
            if (this[iW]) throw Error("write after end")
            return ("string" == typeof t ? this[i0](t) : this[i1](t), this.flowing)
          }
          [i1](t) {
            let e = ex(p.resolve(this.cwd, t.path))
            if (this.filter(t.path, t)) {
              let i = new iH(t.path, e)
              ;((i.entry = new iF(t, this[i6](i))),
                i.entry.on("end", () => this[iJ](i)),
                (this[iQ] += 1),
                this[iG].push(i))
            } else t.resume()
            this[iX]()
          }
          [i0](t) {
            let e = ex(p.resolve(this.cwd, t))
            ;(this[iG].push(new iH(t, e)), this[iX]())
          }
          [i2](t) {
            ;((t.pending = !0),
              (this[iQ] += 1),
              c[this.follow ? "stat" : "lstat"](t.absolute, (e, i) => {
                ;((t.pending = !1), (this[iQ] -= 1), e ? this.emit("error", e) : this[iZ](t, i))
              }))
          }
          [iZ](t, e) {
            if ((this.statCache.set(t.absolute, e), (t.stat = e), this.filter(t.path, e))) {
              if (e.isFile() && e.nlink > 1 && !this.linkCache.get(`${e.dev}:${e.ino}`) && !this.sync)
                if (t === this[iV]) this[iq](t)
                else {
                  let i = `${e.dev}:${e.ino}`,
                    s = this[iY].get(i)
                  ;(s ? s.push(t) : this[iY].set(i, [t]), (t.pendingLink = !0), (t.pending = !0))
                }
            } else t.ignore = !0
            this[iX]()
          }
          [i5](t) {
            ;((t.pending = !0),
              (this[iQ] += 1),
              c.readdir(t.absolute, (e, i) => {
                if (((t.pending = !1), (this[iQ] -= 1), e)) return this.emit("error", e)
                this[i3](t, i)
              }))
          }
          [i3](t, e) {
            ;(this.readdirCache.set(t.absolute, e), (t.readdir = e), this[iX]())
          }
          [iX]() {
            if (!this[iK]) {
              this[iK] = !0
              for (let t = this[iG].head; t && this[iQ] < this.jobs; t = t.next)
                if ((this[iq](t.value), t.value.ignore)) {
                  let e = t.next
                  ;(this[iG].removeNode(t), (t.next = e))
                }
              ;((this[iK] = !1),
                this[iW] &&
                  0 === this[iG].length &&
                  0 === this[iQ] &&
                  (this.zip ? this.zip.end(i$) : (super.write(i$), super.end())))
            }
          }
          get [iV]() {
            return this[iG] && this[iG].head && this[iG].head.value
          }
          [iJ](t) {
            ;(this[iG].shift(), (this[iQ] -= 1))
            let { stat: e } = t
            if (e && e.isFile() && e.nlink > 1) {
              let t = `${e.dev}:${e.ino}`,
                i = this[iY].get(t)
              if (i) for (let e of (this[iY].delete(t), i)) ((e.pending = !1), this[iq](e))
            }
            this[iX]()
          }
          [iq](t) {
            if (
              (t.pending && t.pendingLink && t === this[iV] && ((t.pending = !1), (t.pendingLink = !1)), !t.pending)
            ) {
              if (t.entry) {
                t !== this[iV] || t.piped || this[i8](t)
                return
              }
              if (!t.stat) {
                let e = this.statCache.get(t.absolute)
                e ? this[iZ](t, e) : this[i2](t)
              }
              if (t.stat && !t.ignore) {
                if (!this.noDirRecurse && t.stat.isDirectory() && !t.readdir) {
                  let e = this.readdirCache.get(t.absolute)
                  if ((e ? this[i3](t, e) : this[i5](t), !t.readdir)) return
                }
                if (((t.entry = this[i4](t)), !t.entry)) {
                  t.ignore = !0
                  return
                }
                t !== this[iV] || t.piped || this[i8](t)
              }
            }
          }
          [i6](t) {
            return {
              onwarn: (t, e, i) => this.warn(t, e, i),
              noPax: this.noPax,
              cwd: this.cwd,
              absolute: t.absolute,
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
            }
          }
          [i4](t) {
            this[iQ] += 1
            try {
              return new this[i9](t.path, this[i6](t))
                .on("end", () => this[iJ](t))
                .on("error", (t) => this.emit("error", t))
            } catch (t) {
              this.emit("error", t)
            }
          }
          [st]() {
            this[iV] && this[iV].entry && this[iV].entry.resume()
          }
          [i8](t) {
            ;((t.piped = !0),
              t.readdir &&
                t.readdir.forEach((e) => {
                  let i = t.path,
                    s = "./" === i ? "" : i.replace(/\/*$/, "/")
                  this[i0](s + e)
                }))
            let e = t.entry,
              i = this.zip
            if (!e) throw Error("cannot pipe without source")
            i
              ? e.on("data", (t) => {
                  i.write(t) || e.pause()
                })
              : e.on("data", (t) => {
                  super.write(t) || e.pause()
                })
          }
          pause() {
            return (this.zip && this.zip.pause(), super.pause())
          }
          warn(t, e, i = {}) {
            eD(this, t, e, i)
          }
        },
        si = class extends se {
          sync = !0
          constructor(t) {
            ;(super(t), (this[i9] = iP))
          }
          pause() {}
          resume() {}
          [i2](t) {
            let e = this.follow ? "statSync" : "lstatSync"
            this[iZ](t, c[e](t.absolute))
          }
          [i5](t) {
            this[i3](t, c.readdirSync(t.absolute))
          }
          [i8](t) {
            let e = t.entry,
              i = this.zip
            if (
              (t.readdir &&
                t.readdir.forEach((e) => {
                  let i = t.path,
                    s = "./" === i ? "" : i.replace(/\/*$/, "/")
                  this[i0](s + e)
                }),
              !e)
            )
              throw Error("Cannot pipe without source")
            i
              ? e.on("data", (t) => {
                  i.write(t)
                })
              : e.on("data", (t) => {
                  super[i7](t)
                })
          }
        },
        ss = (t, e) => {
          ;(e.forEach((e) => {
            "@" === e.charAt(0)
              ? ih({ file: l.resolve(t.cwd, e.slice(1)), sync: !0, noResume: !0, onReadEntry: (e) => t.add(e) })
              : t.add(e)
          }),
            t.end())
        },
        sr = async (t, e) => {
          for (let i of e)
            "@" === i.charAt(0)
              ? await ih({
                  file: l.resolve(String(t.cwd), i.slice(1)),
                  noResume: !0,
                  onReadEntry: (e) => {
                    t.add(e)
                  },
                })
              : t.add(i)
          t.end()
        }
      tZ(
        (t, e) => {
          let i = new si(t),
            s = new tU(t.file, { mode: t.mode || 438 })
          ;(i.pipe(s), ss(i, e))
        },
        (t, e) => {
          let i = new se(t),
            s = new tz(t.file, { mode: t.mode || 438 })
          i.pipe(s)
          let r = new Promise((t, e) => {
            ;(s.on("error", e), s.on("close", t), i.on("error", e))
          })
          return (sr(i, e).catch((t) => i.emit("error", t)), r)
        },
        (t, e) => {
          let i = new si(t)
          return (ss(i, e), i)
        },
        (t, e) => {
          let i = new se(t)
          return (sr(i, e).catch((t) => i.emit("error", t)), i)
        },
        (t, e) => {
          if (!e?.length) throw TypeError("no paths specified to add to archive")
        },
      )
      var sh = "win32" === (process.env.__FAKE_PLATFORM__ || process.platform),
        { O_CREAT: sn, O_NOFOLLOW: so, O_TRUNC: sa, O_WRONLY: sl } = c.constants,
        sd = Number(process.env.__FAKE_FS_O_FILENAME__) || c.constants.UV_FS_O_FILEMAP || 0,
        su = sd | sa | sn | sl,
        sc = sh || "number" != typeof so ? null : so | sa | sn | sl,
        sf = null !== sc ? () => sc : sh && sd ? (t) => (t < 524288 ? su : "w") : () => "w",
        sm = (t, e, i) => {
          try {
            return o.lchownSync(t, e, i)
          } catch (t) {
            if (t?.code !== "ENOENT") throw t
          }
        },
        sp = (t, e, i, s) => {
          o.lchown(t, e, i, (t) => {
            s(t && t?.code !== "ENOENT" ? t : null)
          })
        },
        sy = (t, e, i, s, r) => {
          e.isDirectory()
            ? sb(l.resolve(t, e.name), i, s, (h) => {
                if (h) return r(h)
                sp(l.resolve(t, e.name), i, s, r)
              })
            : sp(l.resolve(t, e.name), i, s, r)
        },
        sb = (t, e, i, s) => {
          o.readdir(t, { withFileTypes: !0 }, (r, h) => {
            if (r) {
              if ("ENOENT" === r.code) return s()
              if ("ENOTDIR" !== r.code && "ENOTSUP" !== r.code) return s(r)
            }
            if (r || !h.length) return sp(t, e, i, s)
            let n = h.length,
              o = null,
              a = (r) => {
                if (!o) {
                  if (r) return s((o = r))
                  if (0 == --n) return sp(t, e, i, s)
                }
              }
            for (let s of h) sy(t, s, e, i, a)
          })
        },
        sg = (t, e, i, s) => {
          ;(e.isDirectory() && sE(l.resolve(t, e.name), i, s), sm(l.resolve(t, e.name), i, s))
        },
        sE = (t, e, i) => {
          let s
          try {
            s = o.readdirSync(t, { withFileTypes: !0 })
          } catch (s) {
            if (s?.code === "ENOENT") return
            if (s?.code === "ENOTDIR" || s?.code === "ENOTSUP") return sm(t, e, i)
            throw s
          }
          for (let r of s) sg(t, r, e, i)
          return sm(t, e, i)
        },
        sw = class extends Error {
          path
          code
          syscall = "chdir"
          constructor(t, e) {
            ;(super(`${e}: Cannot cd into '${t}'`), (this.path = t), (this.code = e))
          }
          get name() {
            return "CwdError"
          }
        },
        s_ = class extends Error {
          path
          symlink
          syscall = "symlink"
          code = "TAR_SYMLINK_ERROR"
          constructor(t, e) {
            ;(super("TAR_SYMLINK_ERROR: Cannot extract through symbolic link"), (this.symlink = t), (this.path = e))
          }
          get name() {
            return "SymlinkError"
          }
        },
        sR = (t, e, i, s, r, h, n) => {
          if (0 === e.length) return n(null, h)
          let a = e.shift(),
            d = ex(l.resolve(t + "/" + a))
          o.mkdir(d, i, sS(d, e, i, s, r, h, n))
        },
        sS = (t, e, i, s, r, h, n) => (a) => {
          a
            ? o.lstat(t, (l, d) => {
                if (l) ((l.path = l.path && ex(l.path)), n(l))
                else if (d.isDirectory()) sR(t, e, i, s, r, h, n)
                else if (s)
                  o.unlink(t, (a) => {
                    if (a) return n(a)
                    o.mkdir(t, i, sS(t, e, i, s, r, h, n))
                  })
                else {
                  if (d.isSymbolicLink()) return n(new s_(t, t + "/" + e.join("/")))
                  n(a)
                }
              })
            : ((h = h || t), sR(t, e, i, s, r, h, n))
        },
        sv = Object.create(null),
        sO = new Set(),
        sT = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform),
        sL = class {
          #t = new Map()
          #e = new Map()
          #i = new Set()
          reserve(t, e) {
            let i = new Set(
              (t = sT
                ? ["win32 parallelization disabled"]
                : t.map((t) =>
                    is(
                      (0, l.join)(
                        ((t) => {
                          ;(sO.has(t)
                            ? sO.delete(t)
                            : (sv[t] = t.normalize("NFD").toLocaleLowerCase("en").toLocaleUpperCase("en")),
                            sO.add(t))
                          let e = sv[t],
                            i = sO.size - 1e4
                          if (i > 1e3) {
                            for (let t of sO) if ((sO.delete(t), delete sv[t], --i <= 0)) break
                          }
                          return e
                        })(t),
                      ),
                    ),
                  ))
                .map((t) =>
                  t
                    .split("/")
                    .slice(0, -1)
                    .reduce((t, e) => {
                      let i = t.at(-1)
                      return (void 0 !== i && (e = (0, l.join)(i, e)), t.push(e || "/"), t)
                    }, []),
                )
                .reduce((t, e) => t.concat(e)),
            )
            for (let s of (this.#e.set(e, { dirs: i, paths: t }), t)) {
              let t = this.#t.get(s)
              t ? t.push(e) : this.#t.set(s, [e])
            }
            for (let t of i) {
              let i = this.#t.get(t)
              if (i) {
                let t = i.at(-1)
                t instanceof Set ? t.add(e) : i.push(new Set([e]))
              } else this.#t.set(t, [new Set([e])])
            }
            return this.#r(e)
          }
          #s(t) {
            let e = this.#e.get(t)
            if (!e) throw Error("function does not have any path reservations")
            return { paths: e.paths.map((t) => this.#t.get(t)), dirs: [...e.dirs].map((t) => this.#t.get(t)) }
          }
          check(t) {
            let { paths: e, dirs: i } = this.#s(t)
            return e.every((e) => e && e[0] === t) && i.every((e) => e && e[0] instanceof Set && e[0].has(t))
          }
          #r(t) {
            return !this.#i.has(t) && !!this.check(t) && (this.#i.add(t), t(() => this.#h(t)), !0)
          }
          #h(t) {
            if (!this.#i.has(t)) return !1
            let e = this.#e.get(t)
            if (!e) throw Error("invalid reservation")
            let { paths: i, dirs: s } = e,
              r = new Set()
            for (let e of i) {
              let i = this.#t.get(e)
              if (!i || i?.[0] !== t) continue
              let s = i[1]
              if (!s) {
                this.#t.delete(e)
                continue
              }
              if ((i.shift(), "function" == typeof s)) r.add(s)
              else for (let t of s) r.add(t)
            }
            for (let e of s) {
              let i = this.#t.get(e),
                s = i?.[0]
              if (!(!i || !(s instanceof Set)))
                if (1 === s.size && 1 === i.length) {
                  this.#t.delete(e)
                  continue
                } else if (1 === s.size) {
                  i.shift()
                  let t = i[0]
                  "function" == typeof t && r.add(t)
                } else s.delete(t)
            }
            return (this.#i.delete(t), r.forEach((t) => this.#r(t)), !0)
          }
        },
        sk = Symbol("onEntry"),
        sx = Symbol("checkFs"),
        sA = Symbol("checkFs2"),
        sD = Symbol("isReusable"),
        sI = Symbol("makeFs"),
        sN = Symbol("file"),
        sC = Symbol("directory"),
        sM = Symbol("link"),
        sB = Symbol("symlink"),
        sP = Symbol("hardlink"),
        sF = Symbol("ensureNoSymlink"),
        sz = Symbol("unsupported"),
        sU = Symbol("checkPath"),
        sj = Symbol("stripAbsolutePath"),
        sH = Symbol("mkdir"),
        s$ = Symbol("onError"),
        sZ = Symbol("pending"),
        sW = Symbol("pend"),
        sG = Symbol("unpend"),
        sY = Symbol("ended"),
        sV = Symbol("maybeClose"),
        sX = Symbol("skip"),
        sK = Symbol("doChown"),
        sq = Symbol("uid"),
        sQ = Symbol("gid"),
        sJ = Symbol("checkedCwd"),
        s0 = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform),
        s1 = (t, e, i) => (void 0 !== t && t === t >>> 0 ? t : void 0 !== e && e === e >>> 0 ? e : i),
        s2 = class extends ii {
          [sY] = !1;
          [sJ] = !1;
          [sZ] = 0
          reservations = new sL()
          transform
          writable = !0
          readable = !1
          uid
          gid
          setOwner
          preserveOwner
          processGid
          processUid
          maxDepth
          forceChown
          win32
          newer
          keep
          noMtime
          preservePaths
          unlink
          cwd
          strip
          processUmask
          umask
          dmode
          fmode
          chmod
          constructor(t = {}) {
            if (
              ((t.ondone = () => {
                ;((this[sY] = !0), this[sV]())
              }),
              super(t),
              (this.transform = t.transform),
              (this.chmod = !!t.chmod),
              "number" == typeof t.uid || "number" == typeof t.gid)
            ) {
              if ("number" != typeof t.uid || "number" != typeof t.gid)
                throw TypeError("cannot set owner without number uid and gid")
              if (t.preserveOwner) throw TypeError("cannot preserve owner in archive and also set owner explicitly")
              ;((this.uid = t.uid), (this.gid = t.gid), (this.setOwner = !0))
            } else ((this.uid = void 0), (this.gid = void 0), (this.setOwner = !1))
            ;((this.preserveOwner =
              void 0 === t.preserveOwner && "number" != typeof t.uid
                ? !!(process.getuid && 0 === process.getuid())
                : !!t.preserveOwner),
              (this.processUid = (this.preserveOwner || this.setOwner) && process.getuid ? process.getuid() : void 0),
              (this.processGid = (this.preserveOwner || this.setOwner) && process.getgid ? process.getgid() : void 0),
              (this.maxDepth = "number" == typeof t.maxDepth ? t.maxDepth : 1024),
              (this.forceChown = !0 === t.forceChown),
              (this.win32 = !!t.win32 || s0),
              (this.newer = !!t.newer),
              (this.keep = !!t.keep),
              (this.noMtime = !!t.noMtime),
              (this.preservePaths = !!t.preservePaths),
              (this.unlink = !!t.unlink),
              (this.cwd = ex(l.resolve(t.cwd || process.cwd()))),
              (this.strip = Number(t.strip) || 0),
              (this.processUmask = this.chmod
                ? "number" == typeof t.processUmask
                  ? t.processUmask
                  : process.umask()
                : 0),
              (this.umask = "number" == typeof t.umask ? t.umask : this.processUmask),
              (this.dmode = t.dmode || 511 & ~this.umask),
              (this.fmode = t.fmode || 438 & ~this.umask),
              this.on("entry", (t) => this[sk](t)))
          }
          warn(t, e, i = {}) {
            return (("TAR_BAD_ARCHIVE" === t || "TAR_ABORT" === t) && (i.recoverable = !1), super.warn(t, e, i))
          }
          [sV]() {
            this[sY] && 0 === this[sZ] && (this.emit("prefinish"), this.emit("finish"), this.emit("end"))
          }
          [sj](t, e) {
            let i = t[e],
              { type: s } = t
            if (!i || this.preservePaths) return !0
            let [r, h] = id(i),
              n = h.replaceAll(/\\/g, "/").split("/")
            if (n.includes("..") || (s0 && /^[a-z]:\.\.$/i.test(n[0] ?? ""))) {
              if ("path" === e || "Link" === s)
                return (this.warn("TAR_ENTRY_ERROR", `${e} contains '..'`, { entry: t, [e]: i }), !1)
              let r = l.posix.dirname(t.path),
                h = l.posix.normalize(l.posix.join(r, n.join("/")))
              if (h.startsWith("../") || ".." === h)
                return (this.warn("TAR_ENTRY_ERROR", `${e} escapes extraction directory`, { entry: t, [e]: i }), !1)
            }
            return (
              r &&
                ((t[e] = String(h)),
                this.warn("TAR_ENTRY_INFO", `stripping ${r} from absolute ${e}`, { entry: t, [e]: i })),
              !0
            )
          }
          [sU](t) {
            let e = ex(t.path),
              i = e.split("/")
            if (this.strip) {
              if (i.length < this.strip) return !1
              if ("Link" === t.type) {
                let e = ex(String(t.linkpath)).split("/")
                if (!(e.length >= this.strip)) return !1
                t.linkpath = e.slice(this.strip).join("/")
              }
              ;(i.splice(0, this.strip), (t.path = i.join("/")))
            }
            if (isFinite(this.maxDepth) && i.length > this.maxDepth)
              return (
                this.warn("TAR_ENTRY_ERROR", "path excessively deep", {
                  entry: t,
                  path: e,
                  depth: i.length,
                  maxDepth: this.maxDepth,
                }),
                !1
              )
            if (!this[sj](t, "path") || !this[sj](t, "linkpath")) return !1
            if (
              ((t.absolute = l.isAbsolute(t.path) ? ex(l.resolve(t.path)) : ex(l.resolve(this.cwd, t.path))),
              !this.preservePaths &&
                "string" == typeof t.absolute &&
                0 !== t.absolute.indexOf(this.cwd + "/") &&
                t.absolute !== this.cwd)
            )
              return (
                this.warn("TAR_ENTRY_ERROR", "path escaped extraction target", {
                  entry: t,
                  path: ex(t.path),
                  resolvedPath: t.absolute,
                  cwd: this.cwd,
                }),
                !1
              )
            if (t.absolute === this.cwd && "Directory" !== t.type && "GNUDumpDir" !== t.type) return !1
            if (this.win32) {
              let { root: e } = l.win32.parse(String(t.absolute))
              t.absolute = e + iy(String(t.absolute).slice(e.length))
              let { root: i } = l.win32.parse(t.path)
              t.path = i + iy(t.path.slice(i.length))
            }
            return !0
          }
          [sk](t) {
            if (!this[sU](t)) return t.resume()
            switch ((w.equal(typeof t.absolute, "string"), t.type)) {
              case "Directory":
              case "GNUDumpDir":
                t.mode && (t.mode = 448 | t.mode)
              case "File":
              case "OldFile":
              case "ContiguousFile":
              case "Link":
              case "SymbolicLink":
                return this[sx](t)
              default:
                return this[sz](t)
            }
          }
          [s$](t, e) {
            "CwdError" === t.name
              ? this.emit("error", t)
              : (this.warn("TAR_ENTRY_ERROR", t, { entry: e }), this[sG](), e.resume())
          }
          [sH](t, e, i) {
            ;((t, e, i) => {
              t = ex(t)
              let s = e.umask ?? 18,
                r = 448 | e.mode,
                h = (r & s) != 0,
                n = e.uid,
                d = e.gid,
                u = "number" == typeof n && "number" == typeof d && (n !== e.processUid || d !== e.processGid),
                c = e.preserve,
                f = e.unlink,
                m = ex(e.cwd),
                p = (e, s) => {
                  e ? i(e) : s && u ? sb(s, n, d, (t) => p(t)) : h ? o.chmod(t, r, i) : i()
                }
              if (t === m) {
                var y
                return (
                  (y = t),
                  o.stat(y, (t, e) => {
                    ;((t || !e.isDirectory()) && (t = new sw(y, t?.code || "ENOTDIR")), p(t))
                  })
                )
              }
              if (c) return a.mkdir(t, { mode: r, recursive: !0 }).then((t) => p(null, t ?? void 0), p)
              let b = ex(l.relative(m, t)).split("/")
              sR(m, b, r, f, m, void 0, p)
            })(
              ex(t),
              {
                uid: this.uid,
                gid: this.gid,
                processUid: this.processUid,
                processGid: this.processGid,
                umask: this.processUmask,
                preserve: this.preservePaths,
                unlink: this.unlink,
                cwd: this.cwd,
                mode: e,
              },
              i,
            )
          }
          [sK](t) {
            return (
              this.forceChown ||
              (this.preserveOwner &&
                (("number" == typeof t.uid && t.uid !== this.processUid) ||
                  ("number" == typeof t.gid && t.gid !== this.processGid))) ||
              ("number" == typeof this.uid && this.uid !== this.processUid) ||
              ("number" == typeof this.gid && this.gid !== this.processGid)
            )
          }
          [sq](t) {
            return s1(this.uid, t.uid, this.processUid)
          }
          [sQ](t) {
            return s1(this.gid, t.gid, this.processGid)
          }
          [sN](t, e) {
            let i = "number" == typeof t.mode ? 4095 & t.mode : this.fmode,
              s = new tz(String(t.absolute), { flags: sf(t.size), mode: i, autoClose: !1 })
            s.on("error", (i) => {
              ;(s.fd && o.close(s.fd, () => {}), (s.write = () => !0), this[s$](i, t), e())
            })
            let r = 1,
              h = (i) => {
                if (i) {
                  ;(s.fd && o.close(s.fd, () => {}), this[s$](i, t), e())
                  return
                }
                0 == --r &&
                  void 0 !== s.fd &&
                  o.close(s.fd, (i) => {
                    ;(i ? this[s$](i, t) : this[sG](), e())
                  })
              }
            s.on("finish", () => {
              let e = String(t.absolute),
                i = s.fd
              if ("number" == typeof i && t.mtime && !this.noMtime) {
                r++
                let s = t.atime || new Date(),
                  n = t.mtime
                o.futimes(i, s, n, (t) => (t ? o.utimes(e, s, n, (e) => h(e && t)) : h()))
              }
              if ("number" == typeof i && this[sK](t)) {
                r++
                let s = this[sq](t),
                  n = this[sQ](t)
                "number" == typeof s &&
                  "number" == typeof n &&
                  o.fchown(i, s, n, (t) => (t ? o.chown(e, s, n, (e) => h(e && t)) : h()))
              }
              h()
            })
            let n = (this.transform && this.transform(t)) || t
            ;(n !== t &&
              (n.on("error", (i) => {
                ;(this[s$](i, t), e())
              }),
              t.pipe(n)),
              n.pipe(s))
          }
          [sC](t, e) {
            let i = "number" == typeof t.mode ? 4095 & t.mode : this.dmode
            this[sH](String(t.absolute), i, (i) => {
              if (i) {
                ;(this[s$](i, t), e())
                return
              }
              let s = 1,
                r = () => {
                  0 == --s && (e(), this[sG](), t.resume())
                }
              ;(t.mtime && !this.noMtime && (s++, o.utimes(String(t.absolute), t.atime || new Date(), t.mtime, r)),
                this[sK](t) && (s++, o.chown(String(t.absolute), Number(this[sq](t)), Number(this[sQ](t)), r)),
                r())
            })
          }
          [sz](t) {
            ;((t.unsupported = !0),
              this.warn("TAR_ENTRY_UNSUPPORTED", `unsupported entry type: ${t.type}`, { entry: t }),
              t.resume())
          }
          [sB](t, e) {
            let i = ex(l.relative(this.cwd, l.resolve(l.dirname(String(t.absolute)), String(t.linkpath)))).split("/")
            this[sF](
              t,
              this.cwd,
              i,
              () => this[sM](t, String(t.linkpath), "symlink", e),
              (i) => {
                ;(this[s$](i, t), e())
              },
            )
          }
          [sP](t, e) {
            let i = ex(l.resolve(this.cwd, String(t.linkpath))),
              s = ex(String(t.linkpath)).split("/")
            this[sF](
              t,
              this.cwd,
              s,
              () => this[sM](t, i, "link", e),
              (i) => {
                ;(this[s$](i, t), e())
              },
            )
          }
          [sF](t, e, i, s, r) {
            let h = i.shift()
            if (this.preservePaths || void 0 === h) return s()
            let n = l.resolve(e, h)
            o.lstat(n, (e, h) =>
              e ? s() : h?.isSymbolicLink() ? r(new s_(n, l.resolve(n, i.join("/")))) : void this[sF](t, n, i, s, r),
            )
          }
          [sW]() {
            this[sZ]++
          }
          [sG]() {
            ;(this[sZ]--, this[sV]())
          }
          [sX](t) {
            ;(this[sG](), t.resume())
          }
          [sD](t, e) {
            return "File" === t.type && !this.unlink && e.isFile() && e.nlink <= 1 && !s0
          }
          [sx](t) {
            this[sW]()
            let e = [t.path]
            ;(t.linkpath && e.push(t.linkpath), this.reservations.reserve(e, (e) => this[sA](t, e)))
          }
          [sA](t, e) {
            let i = (t) => {
                e(t)
              },
              s = () => {
                this[sH](this.cwd, this.dmode, (e) => {
                  if (e) {
                    ;(this[s$](e, t), i())
                    return
                  }
                  ;((this[sJ] = !0), r())
                })
              },
              r = () => {
                if (t.absolute !== this.cwd) {
                  let e = ex(l.dirname(String(t.absolute)))
                  if (e !== this.cwd)
                    return this[sH](e, this.dmode, (e) => {
                      if (e) {
                        ;(this[s$](e, t), i())
                        return
                      }
                      n()
                    })
                }
                n()
              },
              n = () => {
                o.lstat(String(t.absolute), (e, s) => {
                  if (s && (this.keep || (this.newer && s.mtime > (t.mtime ?? s.mtime)))) {
                    ;(this[sX](t), i())
                    return
                  }
                  if (e || this[sD](t, s)) return this[sI](null, t, i)
                  if (s.isDirectory()) {
                    if ("Directory" === t.type) {
                      let e = this.chmod && t.mode && (4095 & s.mode) !== t.mode,
                        r = (e) => this[sI](e ?? null, t, i)
                      return e ? o.chmod(String(t.absolute), Number(t.mode), r) : r()
                    }
                    if (t.absolute !== this.cwd) return o.rmdir(String(t.absolute), (e) => this[sI](e ?? null, t, i))
                  }
                  if (t.absolute === this.cwd) return this[sI](null, t, i)
                  ;((t, e) => {
                    if (!s0) return o.unlink(t, e)
                    let i = t + ".DELETE." + (0, h.randomBytes)(16).toString("hex")
                    o.rename(t, i, (t) => {
                      if (t) return e(t)
                      o.unlink(i, e)
                    })
                  })(String(t.absolute), (e) => this[sI](e ?? null, t, i))
                })
              }
            this[sJ] ? r() : s()
          }
          [sI](t, e, i) {
            if (t) {
              ;(this[s$](t, e), i())
              return
            }
            switch (e.type) {
              case "File":
              case "OldFile":
              case "ContiguousFile":
                return this[sN](e, i)
              case "Link":
                return this[sP](e, i)
              case "SymbolicLink":
                return this[sB](e, i)
              case "Directory":
              case "GNUDumpDir":
                return this[sC](e, i)
            }
          }
          [sM](t, e, i, s) {
            o[i](e, String(t.absolute), (e) => {
              ;(e ? this[s$](e, t) : (this[sG](), t.resume()), s())
            })
          }
        },
        s5 = (t) => {
          try {
            return [null, t()]
          } catch (t) {
            return [t, null]
          }
        },
        s3 = class extends s2 {
          sync = !0;
          [sI](t, e) {
            return super[sI](t, e, () => {})
          }
          [sx](t) {
            if (!this[sJ]) {
              let e = this[sH](this.cwd, this.dmode)
              if (e) return this[s$](e, t)
              this[sJ] = !0
            }
            if (t.absolute !== this.cwd) {
              let e = ex(l.dirname(String(t.absolute)))
              if (e !== this.cwd) {
                let i = this[sH](e, this.dmode)
                if (i) return this[s$](i, t)
              }
            }
            let [e, i] = s5(() => o.lstatSync(String(t.absolute)))
            if (i && (this.keep || (this.newer && i.mtime > (t.mtime ?? i.mtime)))) return this[sX](t)
            if (e || this[sD](t, i)) return this[sI](null, t)
            if (i.isDirectory()) {
              if ("Directory" === t.type) {
                let [e] =
                  this.chmod && t.mode && (4095 & i.mode) !== t.mode
                    ? s5(() => {
                        o.chmodSync(String(t.absolute), Number(t.mode))
                      })
                    : []
                return this[sI](e, t)
              }
              let [e] = s5(() => o.rmdirSync(String(t.absolute)))
              this[sI](e, t)
            }
            let [s] =
              t.absolute === this.cwd
                ? []
                : s5(() =>
                    ((t) => {
                      if (!s0) return o.unlinkSync(t)
                      let e = t + ".DELETE." + (0, h.randomBytes)(16).toString("hex")
                      ;(o.renameSync(t, e), o.unlinkSync(e))
                    })(String(t.absolute)),
                  )
            this[sI](s, t)
          }
          [sN](t, e) {
            let i = "number" == typeof t.mode ? 4095 & t.mode : this.fmode,
              s = (i) => {
                let s
                try {
                  o.closeSync(r)
                } catch (t) {
                  s = t
                }
                ;((i || s) && this[s$](i || s, t), e())
              },
              r
            try {
              r = o.openSync(String(t.absolute), sf(t.size), i)
            } catch (t) {
              return s(t)
            }
            let h = (this.transform && this.transform(t)) || t
            ;(h !== t && (h.on("error", (e) => this[s$](e, t)), t.pipe(h)),
              h.on("data", (t) => {
                try {
                  o.writeSync(r, t, 0, t.length)
                } catch (t) {
                  s(t)
                }
              }),
              h.on("end", () => {
                let e = null
                if (t.mtime && !this.noMtime) {
                  let i = t.atime || new Date(),
                    s = t.mtime
                  try {
                    o.futimesSync(r, i, s)
                  } catch (r) {
                    try {
                      o.utimesSync(String(t.absolute), i, s)
                    } catch {
                      e = r
                    }
                  }
                }
                if (this[sK](t)) {
                  let i = this[sq](t),
                    s = this[sQ](t)
                  try {
                    o.fchownSync(r, Number(i), Number(s))
                  } catch (r) {
                    try {
                      o.chownSync(String(t.absolute), Number(i), Number(s))
                    } catch {
                      e = e || r
                    }
                  }
                }
                s(e)
              }))
          }
          [sC](t, e) {
            let i = "number" == typeof t.mode ? 4095 & t.mode : this.dmode,
              s = this[sH](String(t.absolute), i)
            if (s) {
              ;(this[s$](s, t), e())
              return
            }
            if (t.mtime && !this.noMtime)
              try {
                o.utimesSync(String(t.absolute), t.atime || new Date(), t.mtime)
              } catch {}
            if (this[sK](t))
              try {
                o.chownSync(String(t.absolute), Number(this[sq](t)), Number(this[sQ](t)))
              } catch {}
            ;(e(), t.resume())
          }
          [sH](t, e) {
            try {
              return ((t, e) => {
                t = ex(t)
                let i = e.umask ?? 18,
                  s = 448 | e.mode,
                  r = (s & i) != 0,
                  h = e.uid,
                  n = e.gid,
                  a = "number" == typeof h && "number" == typeof n && (h !== e.processUid || n !== e.processGid),
                  d = e.preserve,
                  u = e.unlink,
                  c = ex(e.cwd),
                  f = (e) => {
                    ;(e && a && sE(e, h, n), r && o.chmodSync(t, s))
                  }
                if (t === c)
                  return (
                    ((t) => {
                      let e = !1,
                        i
                      try {
                        e = o.statSync(t).isDirectory()
                      } catch (t) {
                        i = t?.code
                      } finally {
                        if (!e) throw new sw(t, i ?? "ENOTDIR")
                      }
                    })(c),
                    f()
                  )
                if (d) return f(o.mkdirSync(t, { mode: s, recursive: !0 }) ?? void 0)
                let m = ex(l.relative(c, t)).split("/"),
                  p
                for (let t = m.shift(), e = c; t && (e += "/" + t); t = m.shift()) {
                  e = ex(l.resolve(e))
                  try {
                    ;(o.mkdirSync(e, s), (p = p || e))
                  } catch {
                    let t = o.lstatSync(e)
                    if (t.isDirectory()) continue
                    if (u) {
                      ;(o.unlinkSync(e), o.mkdirSync(e, s), (p = p || e))
                      continue
                    }
                    if (t.isSymbolicLink()) return new s_(e, e + "/" + m.join("/"))
                  }
                }
                return f(p)
              })(ex(t), {
                uid: this.uid,
                gid: this.gid,
                processUid: this.processUid,
                processGid: this.processGid,
                umask: this.processUmask,
                preserve: this.preservePaths,
                unlink: this.unlink,
                cwd: this.cwd,
                mode: e,
              })
            } catch (t) {
              return t
            }
          }
          [sF](t, e, i, s, r) {
            if (this.preservePaths || 0 === i.length) return s()
            let h = e
            for (let t of i) {
              h = l.resolve(h, t)
              let [n, a] = s5(() => o.lstatSync(h))
              if (n) return s()
              if (a.isSymbolicLink()) return r(new s_(h, l.resolve(e, i.join("/"))))
            }
            s()
          }
          [sM](t, e, i, s) {
            let r = `${i}Sync`
            try {
              ;(o[r](e, String(t.absolute)), s(), t.resume())
            } catch (e) {
              return this[s$](e, t)
            }
          }
        }
      tZ(
        (t) => {
          let e = new s3(t),
            i = t.file,
            s = o.statSync(i)
          new tF(i, { readSize: t.maxReadSize || 0x1000000, size: s.size }).pipe(e)
        },
        (t, e) => {
          let i = new s2(t),
            s = t.maxReadSize || 0x1000000,
            r = t.file
          return new Promise((t, e) => {
            ;(i.on("error", e),
              i.on("close", t),
              o.stat(r, (t, h) => {
                if (t) e(t)
                else {
                  let t = new tP(r, { readSize: s, size: h.size })
                  ;(t.on("error", e), t.pipe(i))
                }
              }))
          })
        },
        (t) => new s3(t),
        (t) => new s2(t),
        (t, e) => {
          e?.length && ir(t, e)
        },
      )
      var s8 = (t, e) => {
          ;(e.forEach((e) => {
            "@" === e.charAt(0)
              ? ih({ file: l.resolve(t.cwd, e.slice(1)), sync: !0, noResume: !0, onReadEntry: (e) => t.add(e) })
              : t.add(e)
          }),
            t.end())
        },
        s4 = tZ(
          (t, e) => {
            let i = new si(t),
              s = !0,
              r,
              h
            try {
              var n, a, l, d, u
              let c
              try {
                r = o.openSync(t.file, "r+")
              } catch (e) {
                if (e?.code === "ENOENT") r = o.openSync(t.file, "w+")
                else throw e
              }
              let f = o.fstatSync(r),
                m = Buffer.alloc(512)
              t: for (h = 0; h < f.size; h += 512) {
                for (let t = 0, e = 0; t < 512; t += e) {
                  if (((e = o.readSync(r, m, t, m.length - t, h + t)), 0 === h && 31 === m[0] && 139 === m[1]))
                    throw Error("cannot append to compressed archives")
                  if (!e) break t
                }
                let e = new ed(m)
                if (!e.cksumValid) break
                let i = 512 * Math.ceil((e.size || 0) / 512)
                if (h + i + 512 > f.size) break
                ;((h += i), t.mtimeCache && e.mtime && t.mtimeCache.set(String(e.path), e.mtime))
              }
              ;((s = !1),
                (n = t),
                (a = i),
                (l = h),
                (d = r),
                (u = e),
                (c = new tU(n.file, { fd: d, start: l })),
                a.pipe(c),
                s8(a, u))
            } finally {
              if (s)
                try {
                  o.closeSync(r)
                } catch {}
            }
          },
          (t, e) => {
            e = Array.from(e)
            let i = new se(t)
            return new Promise((s, r) => {
              i.on("error", r)
              let h = "r+",
                n = (a, d) =>
                  a && "ENOENT" === a.code && "r+" === h
                    ? ((h = "w+"), o.open(t.file, h, n))
                    : a || !d
                      ? r(a)
                      : void o.fstat(d, (h, n) => {
                          if (h) return o.close(d, () => r(h))
                          ;((e, i, s) => {
                            let r = (t, i) => {
                                t ? o.close(e, (e) => s(t)) : s(null, i)
                              },
                              h = 0
                            if (0 === i) return r(null, 0)
                            let n = 0,
                              a = Buffer.alloc(512),
                              l = (s, d) => {
                                if (s || void 0 === d) return r(s)
                                if ((n += d) < 512 && d) return o.read(e, a, n, a.length - n, h + n, l)
                                if (0 === h && 31 === a[0] && 139 === a[1])
                                  return r(Error("cannot append to compressed archives"))
                                if (n < 512) return r(null, h)
                                let u = new ed(a)
                                if (!u.cksumValid) return r(null, h)
                                let c = 512 * Math.ceil((u.size ?? 0) / 512)
                                if (h + c + 512 > i || (h += c + 512) >= i) return r(null, h)
                                ;(t.mtimeCache && u.mtime && t.mtimeCache.set(String(u.path), u.mtime),
                                  (n = 0),
                                  o.read(e, a, 0, 512, h, l))
                              }
                            o.read(e, a, 0, 512, h, l)
                          })(d, n.size, (h, n) => {
                            if (h) return r(h)
                            let o = new tz(t.file, { fd: d, start: n })
                            ;(i.pipe(o),
                              o.on("error", r),
                              o.on("close", s),
                              (async (t, e) => {
                                for (let i of e)
                                  "@" === i.charAt(0)
                                    ? await ih({
                                        file: l.resolve(String(t.cwd), i.slice(1)),
                                        noResume: !0,
                                        onReadEntry: (e) => t.add(e),
                                      })
                                    : t.add(i)
                                t.end()
                              })(i, e))
                          })
                        })
              o.open(t.file, h, n)
            })
          },
          () => {
            throw TypeError("file is required")
          },
          () => {
            throw TypeError("file is required")
          },
          (t, e) => {
            if (!t.file) throw TypeError("file is required")
            if (t.gzip || t.brotli || t.zstd || t.file.endsWith(".br") || t.file.endsWith(".tbr"))
              throw TypeError("cannot append to compressed archives")
            if (!e?.length) throw TypeError("no paths specified to add/replace")
          },
        )
      tZ(s4.syncFile, s4.asyncFile, s4.syncNoFile, s4.asyncNoFile, (t, e = []) => {
        ;(s4.validate?.(t, e), s6(t))
      })
      var s6 = (t) => {
          let e = t.filter
          ;(t.mtimeCache || (t.mtimeCache = new Map()),
            (t.filter = e
              ? (i, s) => e(i, s) && !((t.mtimeCache?.get(i) ?? s.mtime ?? 0) > (s.mtime ?? 0))
              : (e, i) => !((t.mtimeCache?.get(e) ?? i.mtime ?? 0) > (i.mtime ?? 0))))
        },
        s9 = i(40893)
      ;(s9.Ikc({
        tag_name: s9.YjP(),
        assets: s9.YOg(s9.Ikc({ name: s9.YjP(), digest: s9.YjP().nullish(), browser_download_url: s9.YjP() })),
      }),
        s9.Ikc({
          layoutVersion: s9.euz(1),
          version: s9.YjP(),
          target: s9.YjP(),
          variant: s9.euz("codex"),
          entrypoint: s9.euz("bin/codex"),
          execServer: s9.euz("bin/codex-exec-server"),
          resourcesDir: s9.euz("codex-resources"),
          pathDir: s9.euz("codex-path"),
        }))
      var s7 = i(18176)
      let rt = "$HOME/.local/share/codex/desktop-cli/public",
        re = `PATH="${rt}/current:$\{CODEX_INSTALL_DIR:-$HOME/.local/bin}:$PATH"; export PATH`
      class ri {
        options
        kind = "stdio"
        stdioTransport
        installedCodexVersion
        constructor(t) {
          ;((this.options = t), (this.stdioTransport = new r.Lu0(t)))
        }
        supportsReconnect() {
          return !0
        }
        async connect() {
          ;((this.installedCodexVersion = void 0),
            (this.installedCodexVersion = await this.options.ensureCodexVersion()))
          let t = this.installedCodexVersion
          if (null != t && !(0, s.dlm)(t)) throw Error(s.qck + t)
          return this.stdioTransport.connect()
        }
        async getInstalledCodexVersion() {
          return (
            void 0 !== this.installedCodexVersion ||
              (this.installedCodexVersion = await (async function (t) {
                var e, i
                let h,
                  o,
                  a,
                  l,
                  {
                    code: d,
                    stdout: u,
                    stderr: c,
                  } = await (0, r.sZG)({
                    args:
                      ((e = t),
                      (i = ["--version"]),
                      (h = (0, n.hD)((0, s7.e2)())),
                      (o = `if ! command -v ${h} >/dev/null 2>&1; then printf '%s\\n' ${(0, n.hD)("Codex CLI was not found in this WSL distribution. Install Codex in WSL, add it to your shell PATH, or set CODEX_INSTALL_DIR.")} >&2; exit 127; fi; exec ${[h, ...i].join(" ")}`),
                      (l =
                        null == (a = (0, r.oyH)(e))
                          ? re
                          : `PATH="${rt}/current:$\{CODEX_INSTALL_DIR:-$HOME/.local/bin}":${(0, n.hD)(a)}; export PATH`),
                      ["wsl.exe", "-d", e, "--exec", "/usr/bin/bash", "-lc", `${l}; ${o}`]),
                    spawnInsideWsl: !1,
                    windowsHide: !0,
                    signal: AbortSignal.timeout(1e4),
                  }).wait()
                return 0 === d ? (0, s.jZe)(u || c) : null
              })(this.options.hostConfig.distro)),
            this.installedCodexVersion
          )
        }
        getIoStatsSnapshot() {
          return this.stdioTransport.getIoStatsSnapshot()
        }
      }
    },
    37119(t, e, i) {
      var s = i(42524),
        r = i(86697),
        h = i(4482),
        n = i(85816),
        o = i(40893)
      let a = o.g1P(o.YjP(), o.YjP()),
        l = null,
        d = 0,
        u = new Set()
      class c {
        messages
        constructor(t) {
          this.messages = t
        }
        static async load(t, e = h.app.getLocale(), i) {
          let o = e.trim().replace(/_/g, "-"),
            [l, d] = o.toLowerCase().split("-"),
            u = null == d ? l : `${l}-${d.toUpperCase()}`,
            f = l ? new Intl.Locale(l).maximize().region : void 0,
            m =
              i ??
              (h.app.isPackaged
                ? (0, r.join)(h.app.getAppPath(), "native-menu-locales")
                : (0, r.join)(t, "webview", "src", "locales")),
            p = Array.from(new Set([o, u, n.oeH[l], null == f ? void 0 : `${l}-${f}`, l]))
              .filter((t) => null != t)
              .map((t) => (0, r.join)(m, `${t}.json`))
          return new c(
            (
              await Promise.all(
                p.map(async (t) => {
                  try {
                    return a.parse(JSON.parse(await (0, s.readFile)(t, "utf-8")))
                  } catch (t) {
                    if (t instanceof Error && "code" in t && "ENOENT" === t.code) return null
                    throw t
                  }
                }),
              )
            ).find((t) => null != t) ?? null,
          )
        }
        static createDefault() {
          return new c(null)
        }
        replaceMessagesFrom(t) {
          this.messages = t.messages
        }
        formatMessage({ messageId: t, defaultMessage: e, values: i }) {
          return (this.messages?.[t] ?? e).replace(/\{(\w+)\}/g, (t, e) => i?.[e] ?? t)
        }
      }
      i.d(
        e,
        {},
        {
          F$: function () {
            if (null == l) throw Error("NativeIntl has not been configured.")
            return l.nativeIntl
          },
          configureNativeIntl: async function (t, e, i) {
            let s = ++d,
              r = e
            try {
              if (((r = r ?? h.app.getLocale()), l?.repoRoot === t && l.locale === r)) return
              let e = await c.load(t, r, i)
              if (s !== d) return
              let n = l?.nativeIntl
              ;(n?.replaceMessagesFrom(e), (l = { repoRoot: t, locale: r, nativeIntl: n ?? e }))
            } catch {
              if (s !== d) return
              let t = c.createDefault(),
                e = l?.nativeIntl
              ;(e?.replaceMessagesFrom(t), (l = { repoRoot: null, locale: r ?? "en", nativeIntl: e ?? t }))
            }
            for (let t of u) t()
          },
        },
      )
    },
    18176(t, e, i) {
      function s(t) {
        return `'${t.replace(/'/g, "'\\''")}'`
      }
      i.d(
        e,
        {},
        {
          e2: function () {
            let t
            return (
              (null ==
                (t = (function () {
                  let t = process.env.CODEX_CLI_PATH
                  if (null == t) return null
                  let e = t.trim()
                  return 0 === e.length ? null : e
                })()) ||
              /[\\/]/.test(t) ||
              /^[a-zA-Z]:/.test(t)
                ? null
                : t) ?? "codex"
            )
          },
          x2: function (t, e) {
            let i = `PATH="$\{CODEX_INSTALL_DIR:-$HOME/.local/bin}:$PATH"; export PATH; ${t}`,
              r =
                null == e
                  ? i
                  : `printf '%b' ${s(Array.from(e, (t) => `\\${t.toString(8).padStart(3, "0")}`).join(""))}; ${i}`,
              h = 'exec /bin/sh -c "$CODEX_REMOTE_PAYLOAD"',
              n = [
                "set loginsh=1",
                "if ( -r /etc/csh.login ) source /etc/csh.login",
                "if ( -r ~/.login ) source ~/.login",
                h,
              ].join("; "),
              o = `CODEX_HOME="$\{CODEX_HOME:-$HOME/.codex}"; export CODEX_HOME; ${h}`,
              a = `if [ -z "$SHELL" ] || [ ! -x "$SHELL" ]; then echo "Codex remote SSH requires SHELL to point to an executable login shell" >&2; exit 127; fi; CODEX_REMOTE_PAYLOAD="$1"; export CODEX_REMOTE_PAYLOAD; case "$\{SHELL##*/}" in csh|tcsh) exec "$SHELL" -i -c ${s(n)} ;; nu) exec "$SHELL" -l -i -c ${s("exec /bin/sh -c $env.CODEX_REMOTE_PAYLOAD")} ;; fish|xonsh) exec "$SHELL" -l -i -c ${s(h)} ;; *) exec "$SHELL" -l -i -c ${s(o)} ;; esac`
            return `sh -c ${s(a)} sh ${s(r)}`
          },
        },
      )
    },
  }))
//# sourceMappingURL=app-server-host-818-fbf466624f6b1f72.js.map
