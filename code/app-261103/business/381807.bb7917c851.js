/*! LICENSE: 381807.bb7917c851.js.LICENSE.txt */
export const __rspack_esm_ids = [381807]
export const __webpack_modules__ = {
  hXDn(e, i, s) {
    !(function () {
      "use strict"
      var i = "input is invalid type",
        t = "object" == typeof window,
        n = t ? window : {}
      n.JS_SHA256_NO_WINDOW && (t = !1)
      var r = !t && "object" == typeof self,
        a =
          !n.JS_SHA256_NO_NODE_JS &&
          "object" == typeof process &&
          process.versions &&
          process.versions.node &&
          "renderer" != process.type
      a ? (n = s.g) : r && (n = self)
      var l = !n.JS_SHA256_NO_COMMON_JS && e.exports,
        o = "function" == typeof define && define.amd,
        c = !n.JS_SHA256_NO_ARRAY_BUFFER && "u" > typeof ArrayBuffer,
        d = "0123456789abcdef".split(""),
        u = [-0x80000000, 8388608, 32768, 128],
        f = [24, 16, 8, 0],
        h = [
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
          0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
          0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
          0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
          0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
          0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
          0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
          0xc67178f2,
        ],
        p = ["hex", "array", "digest", "arrayBuffer"],
        m = []
      ;((n.JS_SHA256_NO_NODE_JS || !Array.isArray) &&
        (Array.isArray = function (e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        }),
        c &&
          (n.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
          (ArrayBuffer.isView = function (e) {
            return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
          }))
      var b = function (e, i) {
          return function (s) {
            return new w(i, !0).update(s)[e]()
          }
        },
        g = function (e) {
          var i = b("hex", e)
          ;(a && (i = x(i, e)),
            (i.create = function () {
              return new w(e)
            }),
            (i.update = function (e) {
              return i.create().update(e)
            }))
          for (var s = 0; s < p.length; ++s) {
            var t = p[s]
            i[t] = b(t, e)
          }
          return i
        },
        x = function (e, t) {
          var r,
            a = s("ilEt"),
            l = s("NtJ1").Buffer,
            o = t ? "sha224" : "sha256"
          return (
            (r =
              l.from && !n.JS_SHA256_NO_BUFFER_FROM
                ? l.from
                : function (e) {
                    return new l(e)
                  }),
            function (s) {
              if ("string" == typeof s) return a.createHash(o).update(s, "utf8").digest("hex")
              if (null == s) throw Error(i)
              return (
                s.constructor === ArrayBuffer && (s = new Uint8Array(s)),
                Array.isArray(s) || ArrayBuffer.isView(s) || s.constructor === l
                  ? a.createHash(o).update(r(s)).digest("hex")
                  : e(s)
              )
            }
          )
        },
        y = function (e, i) {
          return function (s, t) {
            return new _(s, i, !0).update(t)[e]()
          }
        },
        v = function (e) {
          var i = y("hex", e)
          ;((i.create = function (i) {
            return new _(i, e)
          }),
            (i.update = function (e, s) {
              return i.create(e).update(s)
            }))
          for (var s = 0; s < p.length; ++s) {
            var t = p[s]
            i[t] = y(t, e)
          }
          return i
        }
      function w(e, i) {
        ;(i
          ? ((m[0] =
              m[16] =
              m[1] =
              m[2] =
              m[3] =
              m[4] =
              m[5] =
              m[6] =
              m[7] =
              m[8] =
              m[9] =
              m[10] =
              m[11] =
              m[12] =
              m[13] =
              m[14] =
              m[15] =
                0),
            (this.blocks = m))
          : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          e
            ? ((this.h0 = 0xc1059ed8),
              (this.h1 = 0x367cd507),
              (this.h2 = 0x3070dd17),
              (this.h3 = 0xf70e5939),
              (this.h4 = 0xffc00b31),
              (this.h5 = 0x68581511),
              (this.h6 = 0x64f98fa7),
              (this.h7 = 0xbefa4fa4))
            : ((this.h0 = 0x6a09e667),
              (this.h1 = 0xbb67ae85),
              (this.h2 = 0x3c6ef372),
              (this.h3 = 0xa54ff53a),
              (this.h4 = 0x510e527f),
              (this.h5 = 0x9b05688c),
              (this.h6 = 0x1f83d9ab),
              (this.h7 = 0x5be0cd19)),
          (this.block = this.start = this.bytes = this.hBytes = 0),
          (this.finalized = this.hashed = !1),
          (this.first = !0),
          (this.is224 = e))
      }
      function _(e, s, t) {
        var n,
          r = typeof e
        if ("string" === r) {
          var a,
            l = [],
            o = e.length,
            d = 0
          for (n = 0; n < o; ++n)
            (a = e.charCodeAt(n)) < 128
              ? (l[d++] = a)
              : (a < 2048
                  ? (l[d++] = 192 | (a >>> 6))
                  : (a < 55296 || a >= 57344
                      ? (l[d++] = 224 | (a >>> 12))
                      : ((a = 65536 + (((1023 & a) << 10) | (1023 & e.charCodeAt(++n)))),
                        (l[d++] = 240 | (a >>> 18)),
                        (l[d++] = 128 | ((a >>> 12) & 63))),
                    (l[d++] = 128 | ((a >>> 6) & 63))),
                (l[d++] = 128 | (63 & a)))
          e = l
        } else if ("object" === r) {
          if (null === e) throw Error(i)
          else if (c && e.constructor === ArrayBuffer) e = new Uint8Array(e)
          else if (!Array.isArray(e) && (!c || !ArrayBuffer.isView(e))) throw Error(i)
        } else throw Error(i)
        e.length > 64 && (e = new w(s, !0).update(e).array())
        var u = [],
          f = []
        for (n = 0; n < 64; ++n) {
          var h = e[n] || 0
          ;((u[n] = 92 ^ h), (f[n] = 54 ^ h))
        }
        ;(w.call(this, s, t), this.update(f), (this.oKeyPad = u), (this.inner = !0), (this.sharedMemory = t))
      }
      ;((w.prototype.update = function (e) {
        if (!this.finalized) {
          var s,
            t = typeof e
          if ("string" !== t) {
            if ("object" === t) {
              if (null === e) throw Error(i)
              else if (c && e.constructor === ArrayBuffer) e = new Uint8Array(e)
              else if (!Array.isArray(e) && (!c || !ArrayBuffer.isView(e))) throw Error(i)
            } else throw Error(i)
            s = !0
          }
          for (var n, r, a = 0, l = e.length, o = this.blocks; a < l;) {
            if (
              (this.hashed &&
                ((this.hashed = !1),
                (o[0] = this.block),
                (this.block =
                  o[16] =
                  o[1] =
                  o[2] =
                  o[3] =
                  o[4] =
                  o[5] =
                  o[6] =
                  o[7] =
                  o[8] =
                  o[9] =
                  o[10] =
                  o[11] =
                  o[12] =
                  o[13] =
                  o[14] =
                  o[15] =
                    0)),
              s)
            )
              for (r = this.start; a < l && r < 64; ++a) o[r >>> 2] |= e[a] << f[3 & r++]
            else
              for (r = this.start; a < l && r < 64; ++a)
                (n = e.charCodeAt(a)) < 128
                  ? (o[r >>> 2] |= n << f[3 & r++])
                  : (n < 2048
                      ? (o[r >>> 2] |= (192 | (n >>> 6)) << f[3 & r++])
                      : (n < 55296 || n >= 57344
                          ? (o[r >>> 2] |= (224 | (n >>> 12)) << f[3 & r++])
                          : ((n = 65536 + (((1023 & n) << 10) | (1023 & e.charCodeAt(++a)))),
                            (o[r >>> 2] |= (240 | (n >>> 18)) << f[3 & r++]),
                            (o[r >>> 2] |= (128 | ((n >>> 12) & 63)) << f[3 & r++])),
                        (o[r >>> 2] |= (128 | ((n >>> 6) & 63)) << f[3 & r++])),
                    (o[r >>> 2] |= (128 | (63 & n)) << f[3 & r++]))
            ;((this.lastByteIndex = r),
              (this.bytes += r - this.start),
              r >= 64
                ? ((this.block = o[16]), (this.start = r - 64), this.hash(), (this.hashed = !0))
                : (this.start = r))
          }
          return (
            this.bytes > 0xffffffff &&
              ((this.hBytes += (this.bytes / 0x100000000) | 0), (this.bytes = this.bytes % 0x100000000)),
            this
          )
        }
      }),
        (w.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0
            var e = this.blocks,
              i = this.lastByteIndex
            ;((e[16] = this.block),
              (e[i >>> 2] |= u[3 & i]),
              (this.block = e[16]),
              i >= 56 &&
                (this.hashed || this.hash(),
                (e[0] = this.block),
                (e[16] =
                  e[1] =
                  e[2] =
                  e[3] =
                  e[4] =
                  e[5] =
                  e[6] =
                  e[7] =
                  e[8] =
                  e[9] =
                  e[10] =
                  e[11] =
                  e[12] =
                  e[13] =
                  e[14] =
                  e[15] =
                    0)),
              (e[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
              (e[15] = this.bytes << 3),
              this.hash())
          }
        }),
        (w.prototype.hash = function () {
          var e,
            i,
            s,
            t,
            n,
            r,
            a,
            l,
            o,
            c,
            d = this.h0,
            u = this.h1,
            f = this.h2,
            p = this.h3,
            m = this.h4,
            b = this.h5,
            g = this.h6,
            x = this.h7,
            y = this.blocks
          for (e = 16; e < 64; ++e)
            ((i = (((n = y[e - 15]) >>> 7) | (n << 25)) ^ ((n >>> 18) | (n << 14)) ^ (n >>> 3)),
              (s = (((n = y[e - 2]) >>> 17) | (n << 15)) ^ ((n >>> 19) | (n << 13)) ^ (n >>> 10)),
              (y[e] = (y[e - 16] + i + y[e - 7] + s) | 0))
          for (c = u & f, e = 0; e < 64; e += 4)
            (this.first
              ? (this.is224
                  ? ((a = 300032), (x = ((n = y[0] - 0x543c9a5b) - 0x8f1a6c7) | 0), (p = (n + 0x170e9b5) | 0))
                  : ((a = 0x2a01a605), (x = ((n = y[0] - 0xc881298) - 0x5ab00ac6) | 0), (p = (n + 0x8909ae5) | 0)),
                (this.first = !1))
              : ((i = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10))),
                (s = ((m >>> 6) | (m << 26)) ^ ((m >>> 11) | (m << 21)) ^ ((m >>> 25) | (m << 7))),
                (t = (a = d & u) ^ (d & f) ^ c),
                (n = x + s + ((m & b) ^ (~m & g)) + h[e] + y[e]),
                (r = i + t),
                (x = (p + n) | 0),
                (p = (n + r) | 0)),
              (i = ((p >>> 2) | (p << 30)) ^ ((p >>> 13) | (p << 19)) ^ ((p >>> 22) | (p << 10))),
              (s = ((x >>> 6) | (x << 26)) ^ ((x >>> 11) | (x << 21)) ^ ((x >>> 25) | (x << 7))),
              (t = (l = p & d) ^ (p & u) ^ a),
              (n = g + s + ((x & m) ^ (~x & b)) + h[e + 1] + y[e + 1]),
              (r = i + t),
              (g = (f + n) | 0),
              (i = (((f = (n + r) | 0) >>> 2) | (f << 30)) ^ ((f >>> 13) | (f << 19)) ^ ((f >>> 22) | (f << 10))),
              (s = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7))),
              (t = (o = f & p) ^ (f & d) ^ l),
              (n = b + s + ((g & x) ^ (~g & m)) + h[e + 2] + y[e + 2]),
              (r = i + t),
              (b = (u + n) | 0),
              (i = (((u = (n + r) | 0) >>> 2) | (u << 30)) ^ ((u >>> 13) | (u << 19)) ^ ((u >>> 22) | (u << 10))),
              (s = ((b >>> 6) | (b << 26)) ^ ((b >>> 11) | (b << 21)) ^ ((b >>> 25) | (b << 7))),
              (t = (c = u & f) ^ (u & p) ^ o),
              (n = m + s + ((b & g) ^ (~b & x)) + h[e + 3] + y[e + 3]),
              (r = i + t),
              (m = (d + n) | 0),
              (d = (n + r) | 0),
              (this.chromeBugWorkAround = !0))
          ;((this.h0 = (this.h0 + d) | 0),
            (this.h1 = (this.h1 + u) | 0),
            (this.h2 = (this.h2 + f) | 0),
            (this.h3 = (this.h3 + p) | 0),
            (this.h4 = (this.h4 + m) | 0),
            (this.h5 = (this.h5 + b) | 0),
            (this.h6 = (this.h6 + g) | 0),
            (this.h7 = (this.h7 + x) | 0))
        }),
        (w.prototype.hex = function () {
          this.finalize()
          var e = this.h0,
            i = this.h1,
            s = this.h2,
            t = this.h3,
            n = this.h4,
            r = this.h5,
            a = this.h6,
            l = this.h7,
            o =
              d[(e >>> 28) & 15] +
              d[(e >>> 24) & 15] +
              d[(e >>> 20) & 15] +
              d[(e >>> 16) & 15] +
              d[(e >>> 12) & 15] +
              d[(e >>> 8) & 15] +
              d[(e >>> 4) & 15] +
              d[15 & e] +
              d[(i >>> 28) & 15] +
              d[(i >>> 24) & 15] +
              d[(i >>> 20) & 15] +
              d[(i >>> 16) & 15] +
              d[(i >>> 12) & 15] +
              d[(i >>> 8) & 15] +
              d[(i >>> 4) & 15] +
              d[15 & i] +
              d[(s >>> 28) & 15] +
              d[(s >>> 24) & 15] +
              d[(s >>> 20) & 15] +
              d[(s >>> 16) & 15] +
              d[(s >>> 12) & 15] +
              d[(s >>> 8) & 15] +
              d[(s >>> 4) & 15] +
              d[15 & s] +
              d[(t >>> 28) & 15] +
              d[(t >>> 24) & 15] +
              d[(t >>> 20) & 15] +
              d[(t >>> 16) & 15] +
              d[(t >>> 12) & 15] +
              d[(t >>> 8) & 15] +
              d[(t >>> 4) & 15] +
              d[15 & t] +
              d[(n >>> 28) & 15] +
              d[(n >>> 24) & 15] +
              d[(n >>> 20) & 15] +
              d[(n >>> 16) & 15] +
              d[(n >>> 12) & 15] +
              d[(n >>> 8) & 15] +
              d[(n >>> 4) & 15] +
              d[15 & n] +
              d[(r >>> 28) & 15] +
              d[(r >>> 24) & 15] +
              d[(r >>> 20) & 15] +
              d[(r >>> 16) & 15] +
              d[(r >>> 12) & 15] +
              d[(r >>> 8) & 15] +
              d[(r >>> 4) & 15] +
              d[15 & r] +
              d[(a >>> 28) & 15] +
              d[(a >>> 24) & 15] +
              d[(a >>> 20) & 15] +
              d[(a >>> 16) & 15] +
              d[(a >>> 12) & 15] +
              d[(a >>> 8) & 15] +
              d[(a >>> 4) & 15] +
              d[15 & a]
          return (
            this.is224 ||
              (o +=
                d[(l >>> 28) & 15] +
                d[(l >>> 24) & 15] +
                d[(l >>> 20) & 15] +
                d[(l >>> 16) & 15] +
                d[(l >>> 12) & 15] +
                d[(l >>> 8) & 15] +
                d[(l >>> 4) & 15] +
                d[15 & l]),
            o
          )
        }),
        (w.prototype.toString = w.prototype.hex),
        (w.prototype.digest = function () {
          this.finalize()
          var e = this.h0,
            i = this.h1,
            s = this.h2,
            t = this.h3,
            n = this.h4,
            r = this.h5,
            a = this.h6,
            l = this.h7,
            o = [
              (e >>> 24) & 255,
              (e >>> 16) & 255,
              (e >>> 8) & 255,
              255 & e,
              (i >>> 24) & 255,
              (i >>> 16) & 255,
              (i >>> 8) & 255,
              255 & i,
              (s >>> 24) & 255,
              (s >>> 16) & 255,
              (s >>> 8) & 255,
              255 & s,
              (t >>> 24) & 255,
              (t >>> 16) & 255,
              (t >>> 8) & 255,
              255 & t,
              (n >>> 24) & 255,
              (n >>> 16) & 255,
              (n >>> 8) & 255,
              255 & n,
              (r >>> 24) & 255,
              (r >>> 16) & 255,
              (r >>> 8) & 255,
              255 & r,
              (a >>> 24) & 255,
              (a >>> 16) & 255,
              (a >>> 8) & 255,
              255 & a,
            ]
          return (this.is224 || o.push((l >>> 24) & 255, (l >>> 16) & 255, (l >>> 8) & 255, 255 & l), o)
        }),
        (w.prototype.array = w.prototype.digest),
        (w.prototype.arrayBuffer = function () {
          this.finalize()
          var e = new ArrayBuffer(this.is224 ? 28 : 32),
            i = new DataView(e)
          return (
            i.setUint32(0, this.h0),
            i.setUint32(4, this.h1),
            i.setUint32(8, this.h2),
            i.setUint32(12, this.h3),
            i.setUint32(16, this.h4),
            i.setUint32(20, this.h5),
            i.setUint32(24, this.h6),
            this.is224 || i.setUint32(28, this.h7),
            e
          )
        }),
        (_.prototype = new w()),
        (_.prototype.finalize = function () {
          if ((w.prototype.finalize.call(this), this.inner)) {
            this.inner = !1
            var e = this.array()
            ;(w.call(this, this.is224, this.sharedMemory),
              this.update(this.oKeyPad),
              this.update(e),
              w.prototype.finalize.call(this))
          }
        }))
      var C = g()
      ;((C.sha256 = C),
        (C.sha224 = g(!0)),
        (C.sha256.hmac = v()),
        (C.sha224.hmac = v(!0)),
        l
          ? (e.exports = C)
          : ((n.sha256 = C.sha256),
            (n.sha224 = C.sha224),
            o &&
              define(function () {
                return C
              })))
    })()
  },
  zJJi(e, i, s) {
    e.exports = s.p + "assets/onboarding-hero-desktop.380c8cfe43.png"
  },
  AVh7(e, i, s) {
    e.exports = s.p + "assets/onboarding-hero-mobile.b8661b56e2.png"
  },
  Lx2J(e, i, s) {
    var t = s("ABep"),
      n = s("QosV"),
      r = s("on57"),
      a = s("Lhpx"),
      l = s("HRxJ")
    s.d(
      i,
      {},
      {
        W: function (e) {
          let i,
            s,
            o,
            c,
            d,
            u,
            f,
            h,
            p = (0, n.c)(16)
          p[0] !== e
            ? (({ className: i, density: o, padded: c, variant: d, width: u, ...s } = e),
              (p[0] = e),
              (p[1] = i),
              (p[2] = s),
              (p[3] = o),
              (p[4] = c),
              (p[5] = d),
              (p[6] = u))
            : ((i = p[1]), (s = p[2]), (o = p[3]), (c = p[4]), (d = p[5]), (u = p[6]))
          let m = void 0 === o ? "default" : o,
            b = void 0 === c || c,
            g = void 0 === d ? "default" : d
          return (
            p[7] !== i || p[8] !== m || p[9] !== b || p[10] !== g || p[11] !== u
              ? ((f = (0, r.A)(
                  "flex flex-col overflow-hidden",
                  "search" === g &&
                    "select-none rounded-2xl border border-default bg-surface-elevated-secondary p-3 shadow-lg",
                  "floating" === g
                    ? ["select-none", (0, a.MX)("menu")]
                    : "default" === g && [
                        "border-default bg-surface-elevated-secondary relative w-full rounded-[var(--radius-suggestion-menu,var(--radius-2xl))] border-(length:--suggestion-menu-border-width,1px) shadow-(--suggestion-menu-shadow,none) text-sm",
                        b && l.A.suggestionMenu,
                      ],
                  (0, a.xk)(u),
                  "compact" === m && l.A.compactSuggestionMenu,
                  i,
                )),
                (p[7] = i),
                (p[8] = m),
                (p[9] = b),
                (p[10] = g),
                (p[11] = u),
                (p[12] = f))
              : (f = p[12]),
            p[13] !== s || p[14] !== f
              ? ((h = (0, t.jsx)("div", { className: f, ...s })), (p[13] = s), (p[14] = f), (p[15] = h))
              : (h = p[15]),
            h
          )
        },
        t: function (e) {
          let i,
            s,
            a,
            l,
            o,
            c,
            d = (0, n.c)(12)
          d[0] !== e
            ? (({ className: i, highlighted: s, variant: l, ...a } = e),
              (d[0] = e),
              (d[1] = i),
              (d[2] = s),
              (d[3] = a),
              (d[4] = l))
            : ((i = d[1]), (s = d[2]), (a = d[3]), (l = d[4]))
          let u =
              "search" === (void 0 === l ? "default" : l)
                ? "min-h-9 gap-1.5 rounded-[10px] px-2.5 py-1.5 text-[13px] leading-[18px] font-[510] tracking-[-0.08px] hover:bg-primary-ghost-hover"
                : "min-h-[var(--app-menu-item-height,0px)] rounded-[var(--suggestion-menu-item-radius,var(--radius-xl))] p-[var(--suggestion-menu-item-padding,var(--app-menu-item-padding,var(--padding-row-y)_var(--padding-row-x)))] text-sm",
            f = s ? "bg-primary-ghost-hover opacity-100" : "menu-row-opacity"
          return (
            d[5] !== i || d[6] !== u || d[7] !== f
              ? ((o = (0, r.A)(
                  "text-default outline-hidden focus:bg-primary-ghost-hover cursor-interaction flex w-full shrink-0 items-center overflow-hidden text-start",
                  u,
                  "[content-visibility:auto] [contain-intrinsic-block-size:auto_1lh]",
                  f,
                  i,
                )),
                (d[5] = i),
                (d[6] = u),
                (d[7] = f),
                (d[8] = o))
              : (o = d[8]),
            d[9] !== a || d[10] !== o
              ? ((c = (0, t.jsx)("button", { className: o, type: "button", ...a })),
                (d[9] = a),
                (d[10] = o),
                (d[11] = c))
              : (c = d[11]),
            c
          )
        },
      },
    )
  },
  UF7O(e, i, s) {
    var t = s("TJEh")
    s.d(
      i,
      {},
      {
        q: function (e, i) {
          return { ...i, name: e.display_name, businessType: "local", photoUrl: i && ((0, t.Pz)(i) ?? void 0) }
        },
        s: function (e, i) {
          return {
            name: e.display_name,
            photoUrl: null == i ? void 0 : ((0, t.Pz)(i) ?? void 0),
            businessType: "local" === e.business_type || "ecommerce" === e.business_type ? e.business_type : null,
            address: e.display_address,
            website_url: e.website_url,
          }
        },
      },
    )
  },
  X08k(e, i, s) {
    s.d(i, { i: () => I })
    var t = s("ABep"),
      n = s("QosV"),
      r = s("zTeN"),
      a = s("zd8w"),
      l = s("SPnB"),
      o = s("EOo5"),
      c = s("g2p6"),
      d = s("JNtf"),
      u = s("uXTt"),
      f = s("OWtl"),
      h = s("WFY2"),
      p = s("QF5E"),
      m = s("lIWc"),
      b = s("LpAl"),
      g = s("oyxz"),
      x = s("ygO2"),
      y = s("mUDD"),
      v = s("HOLv"),
      w = s("RNul"),
      _ = s("zJJi"),
      C = s("AVh7")
    function j(e) {
      let i,
        s,
        r = (0, n.c)(7),
        { businessName: a, loading: l, onContinue: o } = e,
        c = void 0 !== l && l,
        u = c ? "full" : "viewport"
      return (
        r[0] !== a || r[1] !== c || r[2] !== o
          ? ((i = c
              ? (0, t.jsxs)("div", {
                  className:
                    "flex h-full flex-col items-center justify-center gap-6 bg-surface-card p-8 text-center text-default select-none",
                  children: [
                    (0, t.jsx)(d.L3, {
                      className: "text-heading-lg font-semibold",
                      children: (0, t.jsx)(g.A, {
                        id: "businessProfiles.claimOnboarding.loadingTitle",
                        defaultMessage: "Claim profile",
                        description: "Title while loading first-time business profile claim information",
                      }),
                    }),
                    (0, t.jsx)(w.y, {}),
                  ],
                })
              : (0, t.jsxs)("div", {
                  className: "flex flex-col gap-4 text-default select-none",
                  children: [
                    (0, t.jsxs)("picture", {
                      children: [
                        (0, t.jsx)("source", { media: "(max-width: 639px)", srcSet: C }),
                        (0, t.jsx)("img", { alt: "", className: "aspect-2/1 w-full object-cover", src: _ }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex flex-col gap-6 px-6 pb-6 sm:px-8 sm:pb-10",
                      children: [
                        (0, t.jsx)(d.L3, {
                          className: "text-center text-heading-md leading-7 font-semibold sm:text-heading-lg",
                          children: (0, t.jsx)(g.A, {
                            id: "businessProfiles.claimOnboarding.title",
                            defaultMessage: "Claim {businessName}’s profile on ChatGPT",
                            description:
                              "First-time business claim dialog title; businessName is the business being claimed",
                            values: { businessName: a },
                          }),
                        }),
                        (0, t.jsxs)("ul", {
                          className: "flex flex-col gap-4",
                          children: [
                            (0, t.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, t.jsx)(v.I, { asset: p.w, className: "shrink-0" }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 text-base leading-5",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "font-semibold",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.engagementTitle",
                                        defaultMessage: "See how customers engage",
                                        description:
                                          "Business claim onboarding benefit heading for profile engagement analytics",
                                      }),
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-secondary",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.engagementDescription",
                                        defaultMessage:
                                          "Understand how often your business profile is seen and clicked",
                                        description:
                                          "Business claim onboarding explanation of profile engagement analytics",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, t.jsx)(v.I, { asset: m.T, className: "shrink-0" }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 text-base leading-5",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "font-semibold",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.discoverTitle",
                                        defaultMessage: "Help customers discover what you offer",
                                        description:
                                          "Business claim onboarding benefit heading for adding business details",
                                      }),
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-secondary",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.discoverDescription",
                                        defaultMessage:
                                          "Add photos, products and other key details so ChatGPT can answer questions more accurately",
                                        description:
                                          "Business claim onboarding explanation of the benefit of adding business details",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, t.jsx)(v.I, { asset: b.G, className: "shrink-0" }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 text-base leading-5",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "font-semibold",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.verifiedTitle",
                                        defaultMessage: "Get a blue checkmark",
                                        description:
                                          "Business claim onboarding benefit heading for a verified business checkmark",
                                      }),
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-secondary",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.verifiedDescription",
                                        defaultMessage:
                                          "Reassure customers that your profile is managed by the actual business",
                                        description:
                                          "Business claim onboarding explanation of the verified business checkmark",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)(d.rr, {
                          className: "text-center text-sm text-secondary",
                          children: (0, t.jsx)(g.A, {
                            id: "businessProfiles.claimOnboarding.verificationNotice",
                            defaultMessage: "You’ll need to verify that you’re authorized to manage this profile",
                            description:
                              "Business claim onboarding notice that the user must verify authority to manage the business",
                          }),
                        }),
                        (0, t.jsx)(x.$, {
                          className: "w-full",
                          size: "formAction",
                          color: "primary",
                          onClick: o,
                          children: (0, t.jsx)(g.A, {
                            id: "businessProfiles.claimOnboarding.claim",
                            defaultMessage: "Claim profile",
                            description: "Continue from business claim onboarding to ownership verification",
                          }),
                        }),
                      ],
                    }),
                  ],
                })),
            (r[0] = a),
            (r[1] = c),
            (r[2] = o),
            (r[3] = i))
          : (i = r[3]),
        r[4] !== u || r[5] !== i
          ? ((s = (0, t.jsx)(y.R4, { size: u, variant: "chatgpt", children: i })), (r[4] = u), (r[5] = i), (r[6] = s))
          : (s = r[6]),
        s
      )
    }
    var A = s("pBYO")
    let S = "oai/apps/hasSeenBusinessProfileClaimOnboarding"
    function k(e) {
      try {
        h.v.warning("Business profile claim onboarding unavailable", { safe: { reason: e } })
      } catch {}
    }
    function I(e) {
      let i,
        s,
        a,
        o,
        c = (0, n.c)(9)
      ;(c[0] !== e ? (({ required: s, ...i } = e), (c[0] = e), (c[1] = i), (c[2] = s)) : ((i = c[1]), (s = c[2])),
        c[3] !== s ? ((a = { enabled: s }), (c[3] = s), (c[4] = a)) : (a = c[4]))
      let d = (0, r.Ul)(l.o8, a)
      return (
        c[5] !== i || c[6] !== d || c[7] !== s
          ? ((o = s ? (0, t.jsx)(P, { ...i }, String(d)) : (0, t.jsx)(t.Fragment, { children: i.children })),
            (c[5] = i),
            (c[6] = d),
            (c[7] = s),
            (c[8] = o))
          : (o = c[8]),
        o
      )
    }
    function P(e) {
      let i,
        s,
        h,
        p,
        m,
        b,
        g,
        x,
        y,
        v,
        w,
        _,
        C,
        I,
        P,
        N,
        E,
        D,
        M,
        T,
        L,
        R,
        O,
        B,
        W = (0, n.c)(63),
        { businessName: F, children: q, onClose: U, telemetryJourney: z } = e,
        V = (0, r.gh)(f.u),
        { accountId: H } = (0, o.As)(),
        G = (0, r.Ul)(c.Sk),
        $ = (0, r.Ul)(l.o8),
        J = null != H && G === H && null != $
      W[0] !== J ? ((i = { enabled: J }), (W[0] = J), (W[1] = i)) : (i = W[1])
      let { data: K, isError: Q } = (0, r.Ul)(c.s6, i),
        [Z, X] = (0, a.useState)(!1),
        [Y, ee] = (0, a.useState)(null)
      !Z && Q && null == Y && ee("settings_read")
      let ei = !J || null == K,
        es = (0, a.useRef)(null),
        et = (0, a.useRef)(null),
        en = (0, a.useRef)(!1),
        er = null != Y || (J && (Z || (Q && null == K) || K?.seenAnnouncements?.[S] != null))
      ;(W[2] !== er || W[3] !== ei || W[4] !== V || W[5] !== z
        ? ((s = () => (er ? void 0 : (0, A.fY)(V, z, ei ? "entry" : "onboarding"))),
          (h = [V, z, ei, er]),
          (W[2] = er),
          (W[3] = ei),
          (W[4] = V),
          (W[5] = z),
          (W[6] = s),
          (W[7] = h))
        : ((s = W[6]), (h = W[7])),
        (0, a.useEffect)(s, h),
        W[8] !== Y || W[9] !== V || W[10] !== z
          ? ((p = () => {
              if (null != Y) {
                let e = (0, A.x$)(V, z, "entry", "load")
                ;(0, A.BR)(V, z, e, "failed", "settings_timeout" === Y ? "timeout" : "unavailable")
              }
            }),
            (m = [V, z, Y]),
            (W[8] = Y),
            (W[9] = V),
            (W[10] = z),
            (W[11] = p),
            (W[12] = m))
          : ((p = W[11]), (m = W[12])),
        (0, a.useEffect)(p, m),
        W[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = () => () => es.current?.abort()), (g = []), (W[13] = b), (W[14] = g))
          : ((b = W[13]), (g = W[14])),
        (0, a.useEffect)(b, g),
        W[15] !== Y
          ? ((x = () => {
              null != Y && "render" !== Y && k(Y)
            }),
            (y = [Y]),
            (W[15] = Y),
            (W[16] = x),
            (W[17] = y))
          : ((x = W[16]), (y = W[17])),
        (0, a.useEffect)(x, y),
        W[18] !== Y || W[19] !== Z || W[20] !== ei
          ? ((v = () => {
              if (Z || null != Y || !ei) return
              let e = setTimeout(() => {
                ee("settings_timeout")
              }, 3e3)
              return () => clearTimeout(e)
            }),
            (w = [Y, Z, ei]),
            (W[18] = Y),
            (W[19] = Z),
            (W[20] = ei),
            (W[21] = v),
            (W[22] = w))
          : ((v = W[21]), (w = W[22])),
        (0, a.useEffect)(v, w),
        W[23] !== U || W[24] !== V || W[25] !== z
          ? ((_ = () => {
              ;((0, A.wj)(V, z), (en.current = !0), es.current?.abort(), U())
            }),
            (W[23] = U),
            (W[24] = V),
            (W[25] = z),
            (W[26] = _))
          : (_ = W[26]))
      let ea = _
      W[27] !== H || W[28] !== J || W[29] !== $ || W[30] !== V || W[31] !== K || W[32] !== z
        ? ((C = async () => {
            if (!J || !K || null != es.current) return
            let e = new AbortController()
            es.current = e
            let i = (0, A.x$)(V, z, "onboarding", "continue")
            ;(X(!0), (0, A.BR)(V, z, i, "succeeded"))
            try {
              ;(await (0, c.hs)(V, H, S, { userId: $, signal: e.signal })) || k("acknowledgement_unpersisted")
            } catch {
              e.signal.aborted || k("acknowledgement_write")
            }
          }),
          (W[27] = H),
          (W[28] = J),
          (W[29] = $),
          (W[30] = V),
          (W[31] = K),
          (W[32] = z),
          (W[33] = C))
        : (C = W[33])
      let el = C
      if (er) {
        let e
        return (
          W[34] !== q ? ((e = (0, t.jsx)(t.Fragment, { children: q })), (W[34] = q), (W[35] = e)) : (e = W[35]),
          e
        )
      }
      ;(W[36] !== q ? ((I = (0, t.jsx)(t.Fragment, { children: q })), (W[36] = q), (W[37] = I)) : (I = W[37]),
        W[38] === Symbol.for("react.memo_cache_sentinel") ? ((P = () => ee("render")), (W[38] = P)) : (P = W[38]))
      let eo = ei ? void 0 : "edgeToEdgeSheet",
        ec = ei ? void 0 : "promotional"
      return (
        W[39] !== ei ? ((N = ei ? { "aria-describedby": void 0 } : {}), (W[39] = ei), (W[40] = N)) : (N = W[40]),
        W[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = () => {
              et.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
            }),
            (D = (e) => {
              ;(e.preventDefault(), en.current && et.current?.isConnected && et.current.focus({ preventScroll: !0 }))
            }),
            (W[41] = E),
            (W[42] = D))
          : ((E = W[41]), (D = W[42])),
        W[43] !== N ? ((M = { ...N, onOpenAutoFocus: E, onCloseAutoFocus: D }), (W[43] = N), (W[44] = M)) : (M = W[44]),
        W[45] !== ea
          ? ((T = (e) => {
              e || ea()
            }),
            (W[45] = ea),
            (W[46] = T))
          : (T = W[46]),
        W[47] !== el ? ((L = () => void el()), (W[47] = el), (W[48] = L)) : (L = W[48]),
        W[49] !== F || W[50] !== ei || W[51] !== L
          ? ((R = (0, t.jsx)(j, { businessName: F, loading: ei, onContinue: L })),
            (W[49] = F),
            (W[50] = ei),
            (W[51] = L),
            (W[52] = R))
          : (R = W[52]),
        W[53] !== ei || W[54] !== eo || W[55] !== ec || W[56] !== M || W[57] !== T || W[58] !== R
          ? ((O = (0, t.jsx)(d.lG, {
              open: !0,
              size: eo,
              variant: ec,
              unstyledContent: ei,
              viewportSized: ei,
              closeButtonSize: "large",
              contentProps: M,
              onOpenChange: T,
              children: R,
            })),
            (W[53] = ei),
            (W[54] = eo),
            (W[55] = ec),
            (W[56] = M),
            (W[57] = T),
            (W[58] = R),
            (W[59] = O))
          : (O = W[59]),
        W[60] !== I || W[61] !== O
          ? ((B = (0, t.jsx)(u.t, { name: "BusinessProfileClaimOnboarding", fallback: I, onError: P, children: O })),
            (W[60] = I),
            (W[61] = O),
            (W[62] = B))
          : (B = W[62]),
        B
      )
    }
  },
  yCR6(e, i, s) {
    s.d(i, { BusinessProfilesSearchView: () => iR })
    var t = s("ABep"),
      n = s("QosV"),
      r = s("nkTT")
    let a = (0, r.a)({
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
    var l = s("zTeN"),
      o = s("DBCl"),
      c = s("zd8w"),
      d = s("v7qY"),
      u = s("Wf1j"),
      f = s("oyxz"),
      h = s("HZfM"),
      p = s("SPnB"),
      m = s("EOo5"),
      b = s("Ghh3"),
      g = s("g2p6"),
      x = s("ygO2"),
      y = s("HOLv"),
      v = s("GO7r"),
      w = s("okCa"),
      _ = s("PkPj"),
      C = s("Lx2J"),
      j = s("OWtl"),
      A = s("OMIV"),
      S = s("WFY2"),
      k = s("iC84"),
      I = s("QF5E"),
      P = s("lIWc"),
      N = s("LpAl"),
      E = s("JNtf"),
      D = s("mUDD"),
      M = s("zJJi"),
      T = s("AVh7")
    function L(e) {
      let i,
        s,
        r,
        a,
        l,
        o,
        c,
        d,
        u,
        h,
        p,
        m,
        b,
        g,
        v,
        w,
        _,
        C,
        j = (0, n.c)(31),
        { creationEnabled: A, open: S, onClose: k, onContinue: L, onReturnFocus: R } = e,
        O = void 0 !== A && A
      ;(j[0] !== R
        ? ((i = {
            "aria-describedby": void 0,
            onCloseAutoFocus: (e) => {
              ;(e.preventDefault(), R())
            },
          }),
          (j[0] = R),
          (j[1] = i))
        : (i = j[1]),
        j[2] !== k
          ? ((s = (e) => {
              e || k()
            }),
            (j[2] = k),
            (j[3] = s))
          : (s = j[3]),
        j[4] !== O || j[5] !== L
          ? ((r = (e) => {
              ;(e.preventDefault(), O && L())
            }),
            (j[4] = O),
            (j[5] = L),
            (j[6] = r))
          : (r = j[6]),
        j[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsxs)("picture", {
              children: [
                (0, t.jsx)("source", { media: "(max-width: 639px)", srcSet: T }),
                (0, t.jsx)("img", { alt: "", className: "aspect-2/1 w-full object-cover", src: M }),
              ],
            })),
            (j[7] = a))
          : (a = j[7]),
        j[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, t.jsx)(E.L3, {
              className: "text-center text-heading-md leading-7 font-semibold sm:text-heading-lg",
              children: (0, t.jsx)(f.A, {
                id: "businessProfiles.creationOnboarding.addBusiness.title",
                defaultMessage: "Add your business to ChatGPT",
                description:
                  "Heading of the introduction shown when a business owner selects Create from business search in ChatGPT. Invites them to add their business to ChatGPT. This centered heading may wrap; no profile has been created yet.",
              }),
            })),
            (j[8] = l))
          : (l = j[8]),
        j[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)(y.I, { asset: I.w, className: "shrink-0" })), (j[9] = o))
          : (o = j[9]),
        j[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, t.jsx)("h3", {
              className: "font-medium sm:text-onboarding-label sm:font-semibold",
              children: (0, t.jsx)(f.A, {
                id: "businessProfiles.creationOnboarding.mentions.title",
                defaultMessage: "See how your business shows up",
                description:
                  "First benefit heading in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Refers to how their business is mentioned in ChatGPT conversations. Short heading with no placeholders.",
              }),
            })),
            (j[10] = c))
          : (c = j[10]),
        j[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsxs)("li", {
              className: "flex items-start gap-3",
              children: [
                o,
                (0, t.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-0.5 text-base leading-5.25",
                  children: [
                    c,
                    (0, t.jsx)("p", {
                      className: "text-secondary",
                      children: (0, t.jsx)(f.A, {
                        id: "businessProfiles.creationOnboarding.mentions.description",
                        defaultMessage: "Track how often your business is mentioned in ChatGPT conversations.",
                        description:
                          "Supporting text for the first benefit in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Describes tracking mentions of their business in conversations, rather than profile views or clicks. Multiline body text with no placeholders.",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (j[11] = d))
          : (d = j[11]),
        j[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)(y.I, { asset: P.T, className: "shrink-0" })), (j[12] = u))
          : (u = j[12]),
        j[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, t.jsx)("h3", {
              className: "font-medium sm:text-onboarding-label sm:font-semibold",
              children: (0, t.jsx)(f.A, {
                id: "businessProfiles.creationOnboarding.offerings.title",
                defaultMessage: "Show customers what you offer",
                description:
                  "Second benefit heading in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Invites owners to show customers their products and business information. Short heading with no placeholders.",
              }),
            })),
            (j[13] = h))
          : (h = j[13]),
        j[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, t.jsxs)("li", {
              className: "flex items-start gap-3",
              children: [
                u,
                (0, t.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-0.5 text-base leading-5.25",
                  children: [
                    h,
                    (0, t.jsx)("p", {
                      className: "text-secondary",
                      children: (0, t.jsx)(f.A, {
                        id: "businessProfiles.creationOnboarding.offerings.description",
                        defaultMessage: "Share your latest products and keep your business info up to date.",
                        description:
                          "Supporting text for the second benefit in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Encourages owners to share current products and maintain accurate business information. Multiline body text with no placeholders.",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (j[14] = p))
          : (p = j[14]),
        j[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, t.jsx)(y.I, { asset: N.G, className: "shrink-0" })), (j[15] = m))
          : (m = j[15]),
        j[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, t.jsx)("h3", {
              className: "font-medium sm:text-onboarding-label sm:font-semibold",
              children: (0, t.jsx)(f.A, {
                id: "businessProfiles.creationOnboarding.agent.title",
                defaultMessage: "Help customers choose with confidence",
                description:
                  "Third benefit heading in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Describes helping customers make informed choices about the business offerings. Short heading with no placeholders.",
              }),
            })),
            (j[16] = b))
          : (b = j[16]),
        j[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, t.jsxs)("div", {
              className: "flex flex-col gap-6 sm:gap-4",
              children: [
                l,
                (0, t.jsxs)("ul", {
                  className: "flex flex-col gap-4",
                  children: [
                    d,
                    p,
                    (0, t.jsxs)("li", {
                      className: "flex items-start gap-3",
                      children: [
                        m,
                        (0, t.jsxs)("div", {
                          className: "flex min-w-0 flex-col gap-0.5 text-base leading-5.25",
                          children: [
                            b,
                            (0, t.jsx)("p", {
                              className: "text-secondary",
                              children: (0, t.jsx)(f.A, {
                                id: "businessProfiles.creationOnboarding.agent.description",
                                defaultMessage: "Build your business agent to answer questions about what you offer.",
                                description:
                                  "Supporting text for the third benefit in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. A business agent is an AI assistant that answers customer questions about the business offerings. Multiline body text with no placeholders.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
            (j[17] = g))
          : (g = j[17]))
      let B = !O
      return (
        j[18] !== O
          ? ((v = O
              ? (0, t.jsx)(f.A, {
                  id: "businessProfiles.creationOnboarding.continue.label",
                  defaultMessage: "Get started",
                  description:
                    "Primary button in ChatGPT's business profile creation introduction. Starts a draft so the owner can enter business details. Does not create or verify a business. Short action label with no placeholders.",
                })
              : (0, t.jsx)(f.A, {
                  id: "businessProfiles.creationOnboarding.comingSoon.label",
                  defaultMessage: "Coming soon",
                  description:
                    "Disabled action in the business profile creation introduction when the creation pilot is not available to this owner.",
                })),
            (j[18] = O),
            (j[19] = v))
          : (v = j[19]),
        j[20] !== B || j[21] !== v
          ? ((w = (0, t.jsxs)("div", {
              className: "flex flex-col text-default select-none",
              children: [
                a,
                (0, t.jsxs)("div", {
                  className: "flex flex-col gap-6 p-6 sm:px-8 sm:pt-4 sm:pb-10",
                  children: [
                    g,
                    (0, t.jsx)(x.$, {
                      className: "w-full",
                      disabled: B,
                      type: "submit",
                      size: "formAction",
                      color: "primary",
                      children: v,
                    }),
                  ],
                }),
              ],
            })),
            (j[20] = B),
            (j[21] = v),
            (j[22] = w))
          : (w = j[22]),
        j[23] !== w || j[24] !== r
          ? ((_ = (0, t.jsx)(D.R4, { as: "form", size: "viewport", variant: "chatgpt", onSubmit: r, children: w })),
            (j[23] = w),
            (j[24] = r),
            (j[25] = _))
          : (_ = j[25]),
        j[26] !== S || j[27] !== _ || j[28] !== i || j[29] !== s
          ? ((C = (0, t.jsx)(E.lG, {
              open: S,
              size: "responsiveSheet",
              variant: "promotional",
              closeButtonSize: "large",
              contentProps: i,
              onOpenChange: s,
              children: _,
            })),
            (j[26] = S),
            (j[27] = _),
            (j[28] = i),
            (j[29] = s),
            (j[30] = C))
          : (C = j[30]),
        C
      )
    }
    var R = s("v7Fs")
    function O(e, i) {
      if (e?.shopify_available !== !0 || !e.myshopify_domain) return null
      try {
        return new URL(e.website).href === new URL(i).href ? e : null
      } catch {
        return null
      }
    }
    let B = (0, r.a)({
        name: "multicolor-shopping-bag-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 2.882813, y: 2, width: 18.234375, height: 20 },
          visualBounds: { x: 2.882813, y: 2, width: 18.234375, height: 20 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#DEC5FF",
              bounds: { x: 2.882813, y: 6, width: 18.234375, height: 16 },
              wideGamut: "color(display-p3 0.8706 0.7725 1.0000)",
            },
            {
              role: "fixed",
              color: "#A25BFF",
              bounds: { x: 2.882813, y: 2, width: 18.234375, height: 20 },
              wideGamut: "color(display-p3 0.6353 0.3569 1.0000)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.882813, y: 2, width: 18.234375, height: 20 },
          center: { x: 12.000001, y: 12 },
          insets: { top: 2, right: 2.882812, bottom: 2, left: 2.882813 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 12.000001, y: 12 } },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2754 6C16.7048 6.00008 17.0805 6.00176 17.3965 6.02637C17.7612 6.05479 18.1233 6.11829 18.4785 6.28516C19.0123 6.53598 19.4604 6.93833 19.7666 7.44238C19.9704 7.77783 20.0716 8.13151 20.1387 8.49121C20.2035 8.83867 20.2483 9.2632 20.3008 9.75293L20.9248 15.582C21.0215 16.4841 21.102 17.2232 21.1152 17.8242C21.1287 18.4357 21.0771 19.0041 20.8506 19.5449C20.5018 20.3778 19.8818 21.0684 19.0908 21.5039C18.5772 21.7867 18.0177 21.8984 17.4082 21.9502C16.8091 22.0011 16.0656 22 15.1582 22H8.84181C7.9344 22 7.19088 22.0011 6.59181 21.9502C5.98237 21.8984 5.42283 21.7867 4.90919 21.5039C4.11821 21.0683 3.49822 20.3778 3.14943 19.5449C2.92298 19.0041 2.87137 18.4357 2.88478 17.8242C2.89798 17.2232 2.97856 16.4841 3.07521 15.582L3.69923 9.75293C3.7517 9.2632 3.79653 8.83866 3.86134 8.49121C3.92846 8.13152 4.02961 7.77783 4.23341 7.44238C4.53965 6.93833 4.98771 6.53598 5.5215 6.28516C5.87668 6.11828 6.23881 6.05479 6.60353 6.02637C6.87038 6.00558 7.1799 6.0019 7.52833 6.00098L16.2754 6.00195V6Z" fill="#DEC5FF"/> <path d="M12 2C14.2091 2 16 3.79086 16 6V8C16 8.55228 15.5523 9 15 9C14.4477 8.99999 14 8.55228 14 8H13.9961V6H14C14 5.97512 13.997 5.95044 13.9961 5.92578V5.90625C13.9471 4.84526 13.0731 4 12 4C10.9269 4.00001 10.0539 4.84527 10.0049 5.90625H10.0029V5.94434C10.0024 5.96285 10 5.98136 10 6H10.0029V8H10C10 8.55228 9.55228 9 9 9C8.44773 8.99999 8 8.55228 8 8V6C8 3.79087 9.79087 2.00001 12 2Z" fill="#A25BFF"/> <path d="M21.0664 17C21.0916 17.2999 21.1098 17.574 21.1152 17.8242C21.1287 18.4357 21.0771 19.0041 20.8506 19.5449C20.5018 20.3778 19.8818 21.0684 19.0908 21.5039C18.5772 21.7867 18.0177 21.8984 17.4082 21.9502C16.8091 22.0011 16.0656 22 15.1582 22H8.84181C7.93441 22 7.19088 22.0011 6.59181 21.9502C5.98238 21.8984 5.42283 21.7867 4.90919 21.5039C4.11822 21.0683 3.49822 20.3778 3.14943 19.5449C2.92298 19.0041 2.87137 18.4357 2.88478 17.8242C2.89028 17.574 2.90845 17.2999 2.93361 17H21.0664Z" fill="#A25BFF"/>',
      }),
      W = (0, r.a)({
        name: "multicolor-store-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 2.039307, y: 2, width: 19.847412, height: 19 },
          visualBounds: { x: 2.039307, y: 2, width: 19.847412, height: 19 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#DFDFDF",
              bounds: { x: 3.001953, y: 7.557617, width: 18, height: 13.442383 },
              wideGamut: "color(display-p3 0.8733 0.8733 0.8733)",
            },
            {
              role: "fixed",
              color: "#E8465A",
              bounds: { x: 2.039307, y: 2, width: 19.847412, height: 9.46582 },
              wideGamut: "color(display-p3 0.9098 0.2745 0.3529)",
            },
            {
              role: "fixed",
              color: "#FF94A6",
              bounds: { x: 7.939453, y: 2, width: 8.125977, height: 9.46582 },
              wideGamut: "color(display-p3 1.0000 0.5804 0.6510)",
            },
            {
              role: "fixed",
              color: "#04BB9F",
              bounds: { x: 9.001953, y: 13.5, width: 6, height: 6 },
              wideGamut: "color(display-p3 0.0157 0.7333 0.6235)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.039307, y: 2, width: 19.847412, height: 19 },
          center: { x: 11.963013, y: 11.5 },
          insets: { top: 2, right: 2.113281, bottom: 3, left: 2.039307 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 11.963013, y: 11.5 } },
        },
        capabilities: ["icon"],
        body: '<path d="M20.002 7.55762C20.5542 7.55762 21.002 8.00533 21.002 8.55762V17.2002C21.0018 19.2986 19.3006 20.9999 17.2021 21H6.80176C4.70329 20.9999 3.00215 19.2986 3.00195 17.2002V8.55762C3.00195 8.00533 3.44967 7.55762 4.00195 7.55762H20.002Z" fill="#DFDFDF"/> <path d="M18.0623 2C19.3521 2 20.4975 2.82482 20.907 4.04785L21.6834 6.36621C22.523 8.87343 20.6575 11.4658 18.0135 11.4658C16.0745 11.4658 14.435 10.0312 14.1776 8.10938L13.5106 3.13281C13.4723 2.84717 13.5592 2.55877 13.7488 2.3418C13.9387 2.1248 14.2134 2.00002 14.5018 2H18.0623Z" fill="#E8465A"/> <path d="M9.50205 2C9.79028 2.00011 10.0652 2.12487 10.255 2.3418C10.4446 2.55875 10.5315 2.8472 10.4933 3.13281L9.81064 8.22949C9.55603 10.1305 7.85307 11.4654 5.94443 11.4658C3.40692 11.4658 1.3989 9.11929 2.22958 6.6377L3.11533 3.99219C3.52435 2.77088 4.70562 2 5.97275 2H9.50205Z" fill="#E8465A"/> <path d="M16.0288 6.86426C16.3551 9.30024 14.4601 11.4656 12.0025 11.4658C9.54455 11.4658 7.64979 9.30041 7.97609 6.86426L8.62746 2H15.3775L16.0288 6.86426Z" fill="#FF94A6"/> <path d="M9.00195 16.5C9.00195 14.8431 10.3451 13.5 12.002 13.5C13.6588 13.5 15.002 14.8431 15.002 16.5V19.5H9.00195V16.5Z" fill="#04BB9F"/>',
      })
    var F = s("irkb"),
      q = s("D7Ms"),
      U = s("fxCc"),
      z = s("T0Rc"),
      V = s("pmIL"),
      H = s("ZEx5"),
      G = s("NeEy"),
      $ = s("kIbj"),
      J = s("T70E"),
      K = s("py8O"),
      Q = s("nBtg"),
      Z = s("B1u2"),
      X = s("oFFd"),
      Y = s("ZtSy")
    function ee(e) {
      let i,
        s,
        r,
        a,
        l,
        o,
        c = (0, n.c)(10),
        { inDialog: d } = e,
        u = void 0 !== d && d,
        h = u ? "external-browser" : void 0
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, t.jsx)(f.A, {
            id: "businessProfiles.legal.termsOfUse",
            defaultMessage: "Terms of use",
            description:
              "Footer link to OpenAI's terms of use on the business profile search page and business-type selection screen",
          })),
          (c[0] = i))
        : (i = c[0]),
        c[1] !== h
          ? ((s = (0, t.jsx)(Y.G, {
              appearance: "secondary",
              href: "https://openai.com/policies/terms-of-use/",
              initiator: "open_in_browser_bridge",
              openTarget: h,
              underline: "always",
              children: i,
            })),
            (c[1] = h),
            (c[2] = s))
          : (s = c[2]),
        c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsx)("span", { "aria-hidden": "true", className: "text-tertiary before:content-['·']" })),
            (c[3] = r))
          : (r = c[3]))
      let p = u ? "external-browser" : void 0
      return (
        c[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsx)(f.A, {
              id: "businessProfiles.legal.privacyPolicy",
              defaultMessage: "Privacy policy",
              description:
                "Footer link to OpenAI's privacy policy on the business profile search page and business-type selection screen",
            })),
            (c[4] = a))
          : (a = c[4]),
        c[5] !== p
          ? ((l = (0, t.jsx)(Y.G, {
              appearance: "secondary",
              href: "https://openai.com/policies/privacy-policy/",
              initiator: "open_in_browser_bridge",
              openTarget: p,
              underline: "always",
              children: a,
            })),
            (c[5] = p),
            (c[6] = l))
          : (l = c[6]),
        c[7] !== s || c[8] !== l
          ? ((o = (0, t.jsxs)("footer", {
              className:
                "flex shrink-0 flex-wrap items-center justify-center gap-2 text-sm leading-5.5 text-secondary select-none",
              children: [s, r, l],
            })),
            (c[7] = s),
            (c[8] = l),
            (c[9] = o))
          : (o = c[9]),
        o
      )
    }
    var ei = s("cvkI"),
      es = s("RER9"),
      et = s("Md9P"),
      en = s("munQ"),
      er = s("AW7I"),
      ea = s("fi0l"),
      el = s("OAFn"),
      eo = s("Cr32"),
      ec = s("Fo5J"),
      ed = s("CU6j"),
      eu = s("XcNx"),
      ef = s("eShZ"),
      eh = s("UF7O"),
      ep = s("UvKE"),
      em = s("Ls9F"),
      eb = s("uAf3")
    function eg(e) {
      let i,
        s,
        r,
        a,
        l,
        d,
        h,
        p,
        g,
        y,
        v,
        w,
        _,
        C,
        j,
        A,
        S = (0, n.c)(49),
        {
          accountId: k,
          profiles: I,
          places: P,
          matchedAddress: N,
          allowDispute: D,
          onClose: M,
          onCloseAfterApproval: T,
          onContinueCreation: L,
          onClaimApproved: R,
        } = e,
        O = (0, u.A)(),
        B = (0, m.As)(),
        W = [...I.map(ey), ...P.map(ex)].slice(0, 3),
        F = 1 === W.length ? W[0] : void 0,
        [q, U] = (0, c.useState)(W[0]?.id ?? ""),
        [V, H] = (0, c.useState)(!1),
        G = F ?? W.find((e) => e.id === q),
        $ = G?.profile,
        J = G?.place,
        {
          data: K,
          error: Q,
          isLoading: Z,
        } = (0, z.I)({
          queryKey: ["business-profile-creation-match-details", k, B.userId, G?.id, O.locale],
          enabled: (null != J || $?.business_type === "local") && B.accountId === k && null != B.userId,
          retry: !1,
          staleTime: 1 / 0,
          gcTime: 0,
          queryFn: async (e) => {
            let { signal: i } = e
            if (null != J)
              return (0, em.KQ)(J.entity_lookup_id, {
                accountId: k,
                locale: O.locale,
                signal: AbortSignal.any([i, AbortSignal.timeout(3e3)]),
              })
            if (null == $) return null
            let s = await b.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
              additionalHeaders: { "ChatGPT-Account-ID": k, [o.zBc]: k, "x-openai-use-sheep": "1" },
              signal: i,
              requestBody: { business_profile_id: $.business_profile_id },
              expectedErrorStatuses: [400, 403, 404, 409, 422],
            })
            return (i.throwIfAborted(),
            s.business_profile_id === $.business_profile_id &&
              s.entity_lookup_id?.startsWith("lbe1_") &&
              s.ownership_state_enabled &&
              s.ownership?.available_action === $.ownership.available_action &&
              s.ownership?.current_request == null)
              ? (0, em.KQ)(s.entity_lookup_id, { accountId: k, locale: O.locale, signal: i })
              : null
          },
        })
      if (V && null != G)
        return (0, t.jsx)(en.CanonicalProfileClaim, {
          accountId: k,
          telemetryEntryPoint: "creation_duplicate",
          ...(G.place ? { place: G.place } : { profileId: G.profile.business_profile_id }),
          onCreationClaimUnavailable: null != G.place ? () => L("unavailable") : void 0,
          onCreationClaimApproved: R,
          onCloseAfterApproval: T,
          allowCreationDispute: D,
          waitingForPlaceDetails: null != J && Z,
          publicDetails: K ?? void 0,
          readRegisteredPlace:
            null != J && Q instanceof ef.fk && 404 === Q.status
              ? (e) => (0, em.KQ)(J.entity_lookup_id, { accountId: k, locale: O.locale, signal: e })
              : void 0,
          onClose: M,
        })
      let X = $ ? (0, eh.s)($, K ?? void 0) : J && (0, eh.q)(J, K ?? void 0)
      S[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, eu.x)({ browser: !0 })), (S[0] = i)) : (i = S[0])
      let Y = !i
      ;(S[1] !== O
        ? ((s = O.formatMessage({
            id: "businessProfiles.creation.match.cancel",
            defaultMessage: "Cancel",
            description:
              "Closes the optional existing-business suggestion while keeping the creation session recoverable.",
          })),
          (S[1] = O),
          (S[2] = s))
        : (s = S[2]),
        S[3] !== X || S[4] !== K || S[5] !== $?.is_verified
          ? ((r =
              X &&
              (0, t.jsx)(ep.P, {
                business: X,
                children: (0, t.jsx)(en.g, {
                  business: X,
                  details: K ?? void 0,
                  claimLayout: !0,
                  verified: $?.is_verified ?? !1,
                }),
              })),
            (S[3] = X),
            (S[4] = K),
            (S[5] = $?.is_verified),
            (S[6] = r))
          : (r = S[6]),
        S[7] !== G || S[8] !== q || S[9] !== L || S[10] !== H
          ? ((a = (e) => {
              ;(e.preventDefault(), "no" === q ? L("declined") : null != G && H(!0))
            }),
            (S[7] = G),
            (S[8] = q),
            (S[9] = L),
            (S[10] = H),
            (S[11] = a))
          : (a = S[11]),
        S[12] !== F
          ? ((l = (0, t.jsx)(E.L3, {
              className: "text-heading-app leading-tight font-normal",
              children: F
                ? (0, t.jsx)(f.A, {
                    id: "businessProfiles.creation.match.choiceTitle",
                    defaultMessage: "Is this your business?",
                    description:
                      "Optional existing-profile suggestion during business creation. The creator can claim this profile or continue creating a different business.",
                  })
                : (0, t.jsx)(f.A, {
                    id: "businessProfiles.creation.match.addressChoices",
                    defaultMessage: "Is one of these businesses yours?",
                    description: "Asks the creator to choose from businesses found at the same address.",
                  }),
            })),
            (S[12] = F),
            (S[13] = l))
          : (l = S[13]))
      let ee = F ? void 0 : "rounded-2xl border border-default"
      ;(S[14] !== O
        ? ((d = O.formatMessage({
            id: "businessProfiles.creation.match.choiceLabel",
            defaultMessage: "Existing business",
            description: "Accessible label for the optional Yes or No existing-business choice during creation.",
          })),
          (S[14] = O),
          (S[15] = d))
        : (d = S[15]),
        S[16] !== N || S[17] !== W || S[18] !== F
          ? ((h = F
              ? (0, t.jsx)(ed.z.Item, {
                  value: F.id,
                  block: !0,
                  children: (0, t.jsxs)("span", {
                    className: "flex min-w-0 flex-col text-base",
                    children: [
                      (0, t.jsx)(f.A, {
                        id: "businessProfiles.creation.match.yes",
                        defaultMessage: "Yes, this is my business",
                        description:
                          "Selects the suggested existing business for its ordinary claim verification flow. Does not grant ownership.",
                      }),
                      (0, t.jsx)("span", {
                        className: "text-sm text-secondary",
                        children:
                          F.profile?.ownership.available_action === "dispute"
                            ? (0, t.jsx)(f.A, {
                                id: "businessProfiles.creation.match.disputeDescription",
                                defaultMessage: "Request access to this claimed business",
                                description: "Explains how to proceed when the matched business has an owner.",
                              })
                            : (0, t.jsx)(f.A, {
                                id: "businessProfiles.creation.match.yesDescription",
                                defaultMessage: "Switch to claiming this existing business",
                                description:
                                  "Explains the Yes option in the optional existing-business suggestion. Claim verification is still required.",
                              }),
                      }),
                    ],
                  }),
                })
              : W.map((e) =>
                  (0, t.jsx)(
                    ed.z.Item,
                    {
                      value: e.id,
                      block: !0,
                      children: (0, t.jsxs)("span", {
                        className: "flex min-w-0 flex-col text-base",
                        children: [
                          (0, t.jsx)("bdi", { children: e.name }),
                          (0, t.jsx)("bdi", { className: "text-sm text-secondary", children: N || e.address }),
                        ],
                      }),
                    },
                    e.id,
                  ),
                )),
            (S[16] = N),
            (S[17] = W),
            (S[18] = F),
            (S[19] = h))
          : (h = S[19]),
        S[20] !== F
          ? ((p = F
              ? (0, t.jsx)(f.A, {
                  id: "businessProfiles.creation.match.no",
                  defaultMessage: "No, this isn’t my business",
                  description:
                    "Declines the optional existing-business suggestion and keeps the entered creation details.",
                })
              : (0, t.jsx)(f.A, {
                  id: "businessProfiles.creation.match.none",
                  defaultMessage: "None of these is my business",
                  description: "Continues creation without choosing any listed business.",
                })),
            (S[20] = F),
            (S[21] = p))
          : (p = S[21]),
        S[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, t.jsx)("span", {
              className: "text-sm text-secondary",
              children: (0, t.jsx)(f.A, {
                id: "businessProfiles.creation.match.noDescription",
                defaultMessage: "Continue manually creating a new business",
                description:
                  "Explains that choosing No continues the ordinary business creation flow with the saved details.",
              }),
            })),
            (S[22] = g))
          : (g = S[22]),
        S[23] !== p
          ? ((y = (0, t.jsx)(ed.z.Item, {
              value: "no",
              block: !0,
              children: (0, t.jsxs)("span", { className: "flex min-w-0 flex-col text-base", children: [p, g] }),
            })),
            (S[23] = p),
            (S[24] = y))
          : (y = S[24]),
        S[25] !== q || S[26] !== U || S[27] !== h || S[28] !== y || S[29] !== ee || S[30] !== d
          ? ((v = (0, t.jsxs)(ed.z, {
              value: q,
              onChange: U,
              variant: "list",
              className: ee,
              "aria-label": d,
              children: [h, y],
            })),
            (S[25] = q),
            (S[26] = U),
            (S[27] = h),
            (S[28] = y),
            (S[29] = ee),
            (S[30] = d),
            (S[31] = v))
          : (v = S[31]))
      let ei = !q
      return (
        S[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, t.jsx)(f.A, {
              id: "businessProfiles.creation.match.continue",
              defaultMessage: "Continue",
              description:
                "Continues with the selected optional existing-business choice. Yes opens Claim verification; No continues creation.",
            })),
            (S[32] = w))
          : (w = S[32]),
        S[33] !== ei
          ? ((_ = (0, t.jsx)(x.$, {
              type: "submit",
              disabled: ei,
              size: "formAction",
              radius: "full",
              className: "self-start",
              children: w,
            })),
            (S[33] = ei),
            (S[34] = _))
          : (_ = S[34]),
        S[35] !== v || S[36] !== _ || S[37] !== a || S[38] !== l
          ? ((C = (0, t.jsxs)("form", {
              className: "flex w-full max-w-125 flex-col gap-6",
              onSubmit: a,
              children: [l, v, _],
            })),
            (S[35] = v),
            (S[36] = _),
            (S[37] = a),
            (S[38] = l),
            (S[39] = C))
          : (C = S[39]),
        S[40] !== M || S[41] !== C || S[42] !== s || S[43] !== r
          ? ((j = (0, t.jsx)("div", {
              className: "relative h-full overflow-y-auto bg-surface text-base text-default",
              children: (0, t.jsx)(eb.Y, {
                backLabel: s,
                onBack: M,
                busy: !1,
                contentFirstOnMobile: !0,
                preview: r,
                content: C,
              }),
            })),
            (S[40] = M),
            (S[41] = C),
            (S[42] = s),
            (S[43] = r),
            (S[44] = j))
          : (j = S[44]),
        S[45] !== M || S[46] !== j || S[47] !== Y
          ? ((A = (0, t.jsx)(eb.d, { modal: Y, personaActive: !1, closeDisabled: !1, onClose: M, children: j })),
            (S[45] = M),
            (S[46] = j),
            (S[47] = Y),
            (S[48] = A))
          : (A = S[48]),
        A
      )
    }
    function ex(e) {
      return { id: e.entity_lookup_id, name: e.display_name, place: e }
    }
    function ey(e) {
      return { id: e.business_profile_id, name: e.display_name, address: e.display_address, profile: e }
    }
    var ev = s("Ga5b"),
      ew = s("QS9J"),
      e_ = s("a7dB"),
      eC = s("on57"),
      ej = s("xNuN"),
      eA = s("zKCW"),
      eS = s("T1PX"),
      ek = s("JB4k"),
      eI = s("Qsgo"),
      eP = s("UeZw"),
      eN = s("l4He"),
      eE = s("j5hv")
    function eD(e) {
      let i,
        s,
        r,
        a,
        l,
        o,
        d,
        h,
        p,
        m,
        b,
        g,
        w = (0, n.c)(56),
        {
          manager: _,
          stepKey: C,
          title: j,
          description: A,
          leading: S,
          header: k,
          children: I,
          footer: P,
          onCancel: N,
          cancelButtonRef: D,
          showPreview: M,
          busy: T,
          isDraft: L,
          personaActive: R,
          previewNotice: O,
          pendingVerification: B,
          showHeading: W,
          outcome: F,
          contentLayout: q,
        } = e,
        U = void 0 === M || M,
        z = void 0 !== T && T,
        V = void 0 === L || L,
        H = void 0 !== R && R,
        G = void 0 !== B && B,
        $ = void 0 === W || W,
        J = void 0 !== F && F,
        K = void 0 === q ? "form" : q,
        Q = "complete" === C,
        Z = (0, u.A)(),
        [X, Y] = (0, c.useState)(!1),
        [ee, ei] = (0, c.useState)(null),
        es = (0, c.useRef)(null),
        et = (0, eS.I)()
      ;(w[0] !== et
        ? ((i = () => {
            if (!et && null != es.current) return (0, ew.E)(es.current, ej.i)
          }),
          (w[0] = et),
          (w[1] = i))
        : (i = w[1]),
        w[2] !== ee || w[3] !== J || w[4] !== G || w[5] !== et || w[6] !== C
          ? ((s = [ee, J, G, et, C]), (w[2] = ee), (w[3] = J), (w[4] = G), (w[5] = et), (w[6] = C), (w[7] = s))
          : (s = w[7]),
        (0, c.useLayoutEffect)(i, s))
      let en = (0, c.useRef)(null),
        er = (0, c.useRef)(null)
      ;(w[8] !== C
        ? ((r = () => {
            ;("code" !== C && (en.current ?? er.current?.querySelector("h1, h2"))?.focus({ preventScroll: !0 }),
              null != er.current && (er.current.scrollTop = 0))
          }),
          (w[8] = C),
          (w[9] = r))
        : (r = w[9]),
        w[10] !== ee || w[11] !== J || w[12] !== G || w[13] !== C
          ? ((a = [ee, G, J, C]), (w[10] = ee), (w[11] = J), (w[12] = G), (w[13] = C), (w[14] = a))
          : (a = w[14]),
        (0, c.useLayoutEffect)(r, a),
        w[15] !== ee
          ? ((l = () => {
              let e = ee?.closest('[role="dialog"]')
              if (e instanceof HTMLElement) return (0, eI.$)(e)
            }),
            (o = [ee]),
            (w[15] = ee),
            (w[16] = l),
            (w[17] = o))
          : ((l = w[16]), (o = w[17])),
        (0, c.useLayoutEffect)(l, o),
        w[18] !== V || w[19] !== _ || w[20] !== O
          ? ((d = function (e) {
              return (0, t.jsxs)(t.Fragment, {
                children: [
                  null != O ? (0, t.jsx)(eA.l, { variant: "embedded", content: O }) : null,
                  (0, t.jsx)(eP.G, { manager: _, isDraft: V, inDialog: void 0 !== e && e, showMediaPlaceholder: !0 }),
                ],
              })
            }),
            (w[18] = V),
            (w[19] = _),
            (w[20] = O),
            (w[21] = d))
          : (d = w[21]))
      let ea = d
      w[22] !== z
        ? ((h = {
            onEscapeKeyDown: (e) => {
              z && e.preventDefault()
            },
            onOpenAutoFocus: eT,
            onCloseAutoFocus: eM,
          }),
          (w[22] = z),
          (w[23] = h))
        : (h = w[23])
      let el = J ? "bg-surface" : "bg-surface-card",
        eo = Q && eE.A.confirmationSky
      return (
        w[24] !== el || w[25] !== eo
          ? ((p = (0, eC.A)(
              "@container/business-creation flex h-full min-h-0 min-w-0 flex-1 overflow-hidden text-default",
              el,
              eo,
            )),
            (w[24] = el),
            (w[25] = eo),
            (w[26] = p))
          : (p = w[26]),
        w[27] !== z ||
        w[28] !== D ||
        w[29] !== I ||
        w[30] !== Q ||
        w[31] !== K ||
        w[32] !== A ||
        w[33] !== P ||
        w[34] !== k ||
        w[35] !== Z ||
        w[36] !== V ||
        w[37] !== S ||
        w[38] !== N ||
        w[39] !== J ||
        w[40] !== G ||
        w[41] !== X ||
        w[42] !== ea ||
        w[43] !== $ ||
        w[44] !== U ||
        w[45] !== j
          ? ((m =
              G || J
                ? (0, t.jsx)("div", {
                    ref: er,
                    className: "relative h-full w-full overflow-y-auto text-base",
                    children: (0, t.jsx)(eb.Y, {
                      mobileConfirmation: Q,
                      backButtonRef: D,
                      backLabel: Z.formatMessage(eN.W.close),
                      onBack: N,
                      busy: z,
                      previewLabel: Z.formatMessage(eN.W.preview),
                      preview: (0, t.jsx)("div", {
                        className: (0, eC.A)(
                          "w-full max-w-sm overflow-hidden rounded-3xl",
                          J ? "bg-surface" : "bg-surface-card",
                        ),
                        children: ea(),
                      }),
                      content: (0, t.jsxs)("div", {
                        className: (0, eC.A)(
                          "flex w-full flex-col gap-6",
                          J && null == k ? "max-w-125" : "max-w-lg",
                          Q && "max-md:min-h-[calc(100dvh-7rem)] max-md:pt-[clamp(1rem,12vh,8rem)]",
                        ),
                        children: [
                          k ??
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                null != S ? (0, t.jsx)(ek.k, { order: 0, children: S }) : null,
                                $ &&
                                  (0, t.jsxs)(ek.k, {
                                    className: "flex flex-col gap-1.5",
                                    order: 0,
                                    children: [
                                      (0, t.jsx)(E.L3, {
                                        asChild: !0,
                                        children: (0, t.jsx)("h1", {
                                          ref: en,
                                          tabIndex: -1,
                                          className: "text-heading-app leading-tight font-normal outline-none",
                                          children: j,
                                        }),
                                      }),
                                      A,
                                    ],
                                  }),
                              ],
                            }),
                          I,
                        ],
                      }),
                    }),
                  })
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)("div", {
                        ref: er,
                        className: "relative flex min-w-0 flex-1 flex-col overflow-y-auto",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex items-center justify-between p-3 sm:absolute sm:inset-x-0 sm:top-0",
                            children: [
                              (0, t.jsxs)(x.$, {
                                ref: D,
                                type: "button",
                                disabled: z,
                                color: "ghostActive",
                                size: "dialogGhost",
                                className: "gap-x-1 font-normal",
                                "aria-label": Z.formatMessage(eN.W.close),
                                onClick: N,
                                children: [
                                  (0, t.jsx)(y.I, { asset: e_.Y, className: "shrink-0" }),
                                  (0, t.jsx)(f.A, {
                                    id: "businessProfiles.creation.chatNavigation",
                                    defaultMessage: "ChatGPT",
                                    description:
                                      "Product name beside the back chevron in business profile creation headers.",
                                  }),
                                ],
                              }),
                              U
                                ? (0, t.jsx)(E.lG, {
                                    open: X,
                                    onOpenChange: Y,
                                    triggerContent: (0, t.jsx)(x.$, {
                                      type: "button",
                                      color: "ghostActive",
                                      size: "dialogGhost",
                                      className: "@5xl/business-creation:hidden",
                                      "aria-label": Z.formatMessage(eN.W.preview),
                                      children: (0, t.jsx)(v.Q1h, {}),
                                    }),
                                    showDialogClose: !1,
                                    unstyledContent: !0,
                                    viewportSized: !0,
                                    contentProps: { "aria-describedby": void 0 },
                                    children: (0, t.jsxs)("div", {
                                      className: "flex h-full min-h-0 flex-col bg-surface-card text-default",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className: "flex items-center gap-3 p-3 select-none",
                                          children: [
                                            (0, t.jsxs)(x.$, {
                                              type: "button",
                                              color: "ghostActive",
                                              size: "dialogGhost",
                                              className: "gap-x-1 font-normal",
                                              onClick: () => Y(!1),
                                              children: [
                                                (0, t.jsx)(y.I, { asset: e_.Y, className: "shrink-0" }),
                                                (0, t.jsx)(f.A, {
                                                  id: "businessProfiles.creation.chatNavigation",
                                                  defaultMessage: "ChatGPT",
                                                  description:
                                                    "Product name beside the back chevron in business profile creation headers.",
                                                }),
                                              ],
                                            }),
                                            (0, t.jsx)(E.L3, {
                                              className: "text-base font-medium",
                                              children: (0, t.jsx)(f.A, { ...eN.W.preview }),
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("div", {
                                          className: "min-h-0 flex-1 overflow-y-auto",
                                          children: ea(!0),
                                        }),
                                      ],
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            ref: es,
                            className: (0, eC.A)(
                              "mx-auto flex w-full max-w-lg flex-1 flex-col px-6 pt-20 pb-8 sm:my-auto sm:max-w-xl sm:flex-none sm:px-8 sm:py-16",
                              "summary" === K ? "gap-8" : "gap-6",
                              !V && "text-center",
                            ),
                            children: [
                              S,
                              $ &&
                                (0, t.jsxs)("div", {
                                  className: (0, eC.A)("flex flex-col", "summary" === K ? "gap-3" : "gap-1.5"),
                                  children: [
                                    (0, t.jsx)(E.L3, {
                                      asChild: !0,
                                      children: (0, t.jsx)("h1", {
                                        ref: en,
                                        tabIndex: -1,
                                        className:
                                          "text-heading-lg leading-7 font-normal text-balance outline-none sm:text-heading-app sm:leading-8.5",
                                        children: j,
                                      }),
                                    }),
                                    A,
                                  ],
                                }),
                              I,
                            ],
                          }),
                          null != P ? (0, t.jsx)("div", { className: "shrink-0 px-6 pb-6", children: P }) : null,
                        ],
                      }),
                      U
                        ? (0, t.jsx)("aside", {
                            className: (0, eC.A)(
                              "hidden min-h-0 overflow-y-auto @5xl/business-creation:flex",
                              V
                                ? "my-4 me-4 w-105 shrink-0 flex-col rounded-2xl border border-default bg-surface-card shadow-card"
                                : "w-1/2 shrink-0 items-center justify-center bg-surface-tertiary p-12",
                            ),
                            "aria-label": Z.formatMessage(eN.W.preview),
                            children: (0, t.jsx)("div", {
                              className: V ? void 0 : "w-full max-w-sm overflow-hidden rounded-2xl bg-surface-card",
                              children: ea(),
                            }),
                          })
                        : null,
                    ],
                  })),
            (w[27] = z),
            (w[28] = D),
            (w[29] = I),
            (w[30] = Q),
            (w[31] = K),
            (w[32] = A),
            (w[33] = P),
            (w[34] = k),
            (w[35] = Z),
            (w[36] = V),
            (w[37] = S),
            (w[38] = N),
            (w[39] = J),
            (w[40] = G),
            (w[41] = X),
            (w[42] = ea),
            (w[43] = $),
            (w[44] = U),
            (w[45] = j),
            (w[46] = m))
          : (m = w[46]),
        w[47] !== p || w[48] !== m
          ? ((b = (0, t.jsx)("main", { ref: ei, className: p, children: m })), (w[47] = p), (w[48] = m), (w[49] = b))
          : (b = w[49]),
        w[50] !== z || w[51] !== N || w[52] !== H || w[53] !== h || w[54] !== b
          ? ((g = (0, t.jsx)(eb.d, {
              modal: !1,
              personaActive: H,
              closeDisabled: z,
              onClose: N,
              contentProps: h,
              children: b,
            })),
            (w[50] = z),
            (w[51] = N),
            (w[52] = H),
            (w[53] = h),
            (w[54] = b),
            (w[55] = g))
          : (g = w[55]),
        g
      )
    }
    function eM(e) {
      return e.preventDefault()
    }
    function eT(e) {
      return e.preventDefault()
    }
    var eL = s("qHOU"),
      eR = s("IVLR"),
      eO = s("cteK"),
      eB = s("hXDn"),
      eW = s("SZCv"),
      eF = s.n(eW),
      eq = s("ASxG"),
      eU = s("OHD8")
    function ez(e) {
      return e?.session ?? e?.name_first_session ?? void 0
    }
    function eV(e, i) {
      if (null == e || ("pending" !== e.status && "expired" !== e.status)) return !1
      try {
        return new URL(e.website).href === new URL(i).href
      } catch {
        return !1
      }
    }
    let eH = eq
      .object({
        stepOrderVersion: eq.number().optional(),
        attemptKey: eq.string().optional(),
        draft: eq.object({
          name: eq.string(),
          businessType: eq.enum(["local_business", "ecommerce"]).nullable(),
          values: eq.record(eq.string(), eq.string().nullable()),
          verifiedPhone: eq.object({ phone: eq.string(), verificationId: eq.string() }).nullable().optional(),
          profileId: eq.string().optional(),
          contactVerificationRequired: eq.boolean().optional(),
        }),
        step: eq
          .enum([
            "type",
            "website",
            "import",
            "category",
            "hours",
            "address",
            "phone",
            "delivery_method",
            "code",
            "delivery",
            "returns",
            "description",
            "review",
          ])
          .transform((e) => ("description" === e ? "category" : "delivery_method" === e || "code" === e ? "phone" : e)),
      })
      .transform(
        ({ stepOrderVersion: e, ...i }) => (
          null == e &&
            ("hours" === i.step ||
              (!1 !== i.draft.contactVerificationRequired && ("delivery" === i.step || "returns" === i.step))) &&
            (i.step = "phone"),
          i
        ),
      )
    function eG(e, i, s) {
      let t
      if (null == e) return !1
      if (
        ((t = "name" === i ? e.details.name : "business_type" === i ? e.details.business_type : e.details.values[i]),
        !e.accepted_fields.includes(i))
      )
        return (
          (["description", "website", "email"].includes(i) ||
            ("phone" === i && "ecommerce" === e.details.business_type)) &&
          !t?.trim() &&
          !s?.trim()
        )
      if ("phone" === i || "email" === i) return (0, ec.Re)(i, t ?? "") === (0, ec.Re)(i, s ?? "")
      if ("website" === i) {
        if (!t || !s) return !t && !s
        try {
          return new URL((0, ec.DX)(t)).href === new URL((0, ec.DX)(s)).href
        } catch {
          return !1
        }
      }
      if ("address" === i) {
        let e = Q.Tq.strict(),
          [i, n] = [t, s].map((i) => (0, Q.oR)(i ?? null, e))
        if (null != i && null != n)
          return (
            i.country_code === n.country_code &&
            ["line1", "line2", "city", "region", "postal_code"].every((e) => i[e].trim() === n[e].trim())
          )
      }
      if ("hours" === i) {
        let e = (0, Q.Cd)(t ?? null),
          i = (0, Q.Cd)(s)
        if (null != e && null != i) return eF()(e, i)
      }
      if (["address", "hours", "delivery_policy", "returns_policy"].includes(i))
        try {
          return eF()(JSON.parse(t ?? "null"), JSON.parse(s ?? "null"))
        } catch {}
      return (t ?? "").trim() === (s ?? "").trim()
    }
    let e$ = eq.object({
      key: eq.string(),
      businessType: eq.enum(["local_business", "ecommerce"]).nullable(),
      sessionId: eq.string().optional(),
      declinedDuplicates: eq
        .object({
          address: eq.string().length(64).optional(),
          phone: eq.string().length(64).optional(),
          website: eq.string().length(64).optional(),
        })
        .optional(),
      submitting: eq.boolean().optional(),
      expectedAcceptedRevision: eq.string().optional(),
      profileId: eq.string().optional(),
      attempts: eq
        .record(
          eq.string(),
          eq.preprocess(
            (e) => ("string" == typeof e ? { key: e } : e),
            eq.object({
              key: eq.string(),
              challengeId: eq.string().optional(),
              testDomain: eq
                .object({
                  hostname: eq.string(),
                  record_name: eq.string().nullish(),
                  record_value: eq.string().nullish(),
                })
                .nullish(),
            }),
          ),
        )
        .optional(),
    })
    function eJ(e) {
      return e instanceof ef.fk && 409 === e.status && "business_profile_creation_revision_mismatch" === e.errorCode
    }
    function eK(e, i) {
      let s,
        t = `business-profile-creation-session:${JSON.stringify([e, i])}`,
        n = new AbortController(),
        r = !1,
        a = 0,
        l = new Map(),
        o = (0, eR.Kf)({ accountId: e, subjectId: t, flowId: "creation", revision: "contact-send" })
      function c() {
        return e$.safeParse(JSON.parse(sessionStorage.getItem(t) ?? "null")).data
      }
      function d() {
        if (!r) {
          r = !0
          try {
            s = c()
          } catch {}
        }
      }
      function u() {
        try {
          null == s ? sessionStorage.removeItem(t) : sessionStorage.setItem(t, JSON.stringify(s))
        } catch {}
      }
      function f(t, r) {
        let a = s?.key,
          l = "start_session" === t.action ? void 0 : s?.sessionId,
          o = null == r ? n.signal : AbortSignal.any([n.signal, r]),
          c = "send_session_contact_otp" === t.action && "email" === t.field && !!t.idempotency_key
        function d() {
          if ((o.throwIfAborted(), s?.key !== a || (null != l && s?.sessionId !== l)))
            throw new DOMException("Creation session changed", "AbortError")
        }
        d()
        let u = (s) => (
          d(),
          b.Request.safePost("/chat/frontend/v1/business-profiles/creation", {
            additionalHeaders: {
              "ChatGPT-Account-ID": e,
              "X-OpenAI-Expected-Account-Id": e,
              "x-openai-use-sheep": "1",
            },
            requestBody: t,
            signal: s,
            expectedIdentity: { accountId: e, userId: i },
            assertRequestCurrent: () => {
              ;(s.throwIfAborted(), d())
            },
            retry: !c && void 0,
            expectedErrorStatuses: [400, 401, 403, 404, 409, 410, 422, 429, 503],
          })
        )
        return (
          "send_session_contact_otp" === t.action || "verify_session_contact_otp" === t.action
            ? (0, eO.cA)({
                signal: o,
                run: c
                  ? (e) => (0, eO.bT)(e, u, (e) => (e instanceof ef.fk && (0, eU.$)(e) ? (e.retryAtMs ?? 0) : void 0))
                  : u,
              })
            : u(o)
        ).finally(d)
      }
      function h(e) {
        let i = 0
        for (let [s, t] of l) s.key === e.key && (i += t)
        return i
      }
      function p(e = !1) {
        return Object.entries(s?.attempts ?? {}).filter(
          ([i, s]) => i.startsWith('["website",') && (e || !!s.challengeId) && 0 === h(s),
        )
      }
      function m(e, i, t, n) {
        let r = e.session,
          a = r?.shopify_verification
        if (
          null == t ||
          s?.key !== i ||
          s?.sessionId !== t ||
          r?.session_id !== t ||
          null != r.website_verification ||
          null == a ||
          !["pending", "expired", "cancelled"].includes(a.status) ||
          !a.id.trim() ||
          !Number.isFinite(Date.parse(a.expires_at)) ||
          ("expired" === a.status && Date.parse(a.expires_at) > Date.now())
        )
          return !1
        let l = !1
        for (let [e, i] of n) s.attempts?.[e] === i && 0 === h(i) && (delete s.attempts[e], (l = !0))
        return l
      }
      async function g(e, i, t, r = !1) {
        if (null == s) throw Error("Start a creation session first")
        let o = s.key,
          c = s.attempts?.[e],
          d = r || ("start_session_website_dns" === i.action && c?.challengeId != null && null != c.testDomain),
          b = "start_session_website_shopify" === i.action ? p(!0) : [],
          x = i.field ?? "website"
        "discover_session_website" === i.action
          ? (x = "website-discovery")
          : "start_session_website_shopify" === i.action && (x = "website-shopify")
        let y = `[${JSON.stringify(x)},`,
          v = Object.fromEntries(Object.entries(s.attempts ?? {}).filter(([e]) => e.startsWith(y)))
        s.attempts = Object.fromEntries(Object.entries(s.attempts ?? {}).filter(([i]) => i === e || !i.startsWith(y)))
        let w = { ...(!d && s.attempts?.[e] ? s.attempts[e] : { key: crypto.randomUUID(), testDomain: void i.action }) }
        ;((s.attempts = { ...s.attempts, [e]: w }), u(), "send_session_contact_otp" === i.action && a++)
        let _ = n.signal,
          C = f({ ...i, idempotency_key: w.key, ...(i.action, {}) }, t).catch((n) => {
            let r =
              "start_session_website_dns" === i.action &&
              n instanceof ef.fk &&
              ((403 === n.status && (null == w.challengeId || null != w.testDomain)) ||
                (409 === n.status &&
                  409 === n.explicitResponseStatus &&
                  "http_response" === n.failureOrigin &&
                  "network" !== n.errorKind &&
                  !eJ(n) &&
                  !_.aborted &&
                  t?.aborted !== !0 &&
                  1 === h(w)))
            if (
              n instanceof ef.fk &&
              ([400, 422].includes(n.status) || r) &&
              s?.key === o &&
              s.sessionId === i.session_id &&
              s.attempts?.[e] === w
            ) {
              for (let [i, t] of (delete s.attempts[e], Object.entries(v))) (r && i === e) || (s.attempts[i] = t)
              u()
            }
            throw n
          })
        "start_session_website_dns" === i.action && l.set(w, (l.get(w) ?? 0) + 1)
        let j = await C.finally(() => {
          let e = l.get(w) ?? 0
          e > 1 ? l.set(w, e - 1) : l.delete(w)
        })
        if (s?.key !== o || s.sessionId !== i.session_id)
          throw new DOMException("Creation session changed", "AbortError")
        if (s.attempts?.[e] === w) {
          let t = j.session?.website_verification,
            n = j.session?.shopify_verification,
            r =
              "start_session_website_dns" === i.action &&
              null != t &&
              new URL((0, ec.DX)(t.website)).href === new URL((0, ec.DX)(i.session_value ?? "")).href
                ? t
                : j.session?.contact_verifications.find(
                    (e) =>
                      e.field === i.field &&
                      (0, ec.Re)(e.field, e.target) === (0, ec.Re)(e.field, i.session_value ?? ""),
                  )
          ;("start_session_website_shopify" === i.action && n?.status === "pending"
            ? ((s.attempts[e] = { ...w, challengeId: n.id }), m(j, o, i.session_id, b))
            : r?.status === "pending"
              ? (s.attempts[e] = { ...w, challengeId: r.challenge_id ?? void 0 })
              : delete s.attempts[e],
            u())
        }
        return j
      }
      async function x(e, i) {
        let t = y(),
          r = s?.key,
          l = Object.entries(s?.attempts ?? {}),
          o = p(),
          c = a,
          d = await (0, eO.ck)({
            signal: e ?? n.signal,
            maxAttempts: i,
            timeoutMs: 3e4,
            read: (e) => {
              if (s?.key !== r || s?.sessionId !== t || c !== a)
                throw new DOMException("Creation session changed", "AbortError")
              return f({ action: "get_session", session_id: t }, e)
            },
            isTransient: eQ,
          })
        if (s?.key !== r || s?.sessionId !== t || c !== a)
          throw new DOMException("Creation session changed", "AbortError")
        if (d.session?.session_id === t) {
          for (let [e, i] of (m(d, r, t, o), l))
            s.attempts?.[e] === i &&
              null != i.challengeId &&
              ([...d.session.contact_verifications, d.session.website_verification].some(
                (e) => null != e && e.challenge_id === i.challengeId && "pending" !== e.status,
              ) ||
                (d.session.shopify_verification?.id === i.challengeId &&
                  "pending" !== d.session.shopify_verification.status)) &&
              delete s.attempts[e]
          u()
        }
        return d
      }
      function y() {
        if (s?.sessionId == null) throw Error("Start a creation session first")
        return s.sessionId
      }
      async function v(e, i) {
        if (
          (d(),
          null != i && s?.sessionId === i && ((s = { key: crypto.randomUUID(), businessType: e }), u()),
          null != s && null == s.businessType && null != s.sessionId)
        )
          return null == e
            ? x()
            : f({
                action: "accept_session_field",
                session_id: s.sessionId,
                session_field: "business_type",
                session_value: e,
              })
        ;(null == s || s.businessType !== e) && ((s = { key: crypto.randomUUID(), businessType: e }), u())
        let t = s.key,
          n = await f({ action: "start_session", business_type: e ?? void 0, idempotency_key: t })
        if (s?.key !== t) throw new DOMException("Creation session changed", "AbortError")
        let r = ez(n)
        if (null == r) throw Error("Creation session is unavailable")
        return ((s = { ...s, sessionId: r.session_id }), u(), n)
      }
      async function w(e) {
        let i = y()
        if (null == s) throw Error("Creation session is unavailable")
        let t = s.key
        ;((s = {
          ...s,
          expectedAcceptedRevision: s.submitting ? s.expectedAcceptedRevision : (e ?? void 0),
          submitting: !0,
        }),
          u())
        let n = await f({
          action: "submit",
          session_id: i,
          expected_accepted_revision: s.expectedAcceptedRevision,
        }).catch(async (e) => {
          if (s?.key !== t || s.sessionId !== i) throw new DOMException("Creation session changed", "AbortError")
          if (eJ(e)) {
            let e = await f({ action: "get", business_profile_id: i }).catch((e) => {
              if (!(e instanceof ef.fk) || 404 !== e.status) throw e
            })
            if (e?.creation?.business_profile_id === i && !1 === e.creation.is_draft) return e
          }
          throw (
            ((e instanceof ef.fk && [400, 422].includes(e.status)) || eJ(e)) && ((s = { ...s, submitting: !1 }), u()),
            e
          )
        })
        if (s?.key !== t || s.sessionId !== i) throw new DOMException("Creation session changed", "AbortError")
        if (null == n.creation) throw Error("Submission is unavailable")
        return ((s = { ...s, submitting: !1, profileId: n.creation.business_profile_id }), u(), n)
      }
      return {
        attach: () => {
          n.signal.aborted && (n = new AbortController())
          let e = n
          return () => e.abort()
        },
        throwIfAborted: () => n.signal.throwIfAborted(),
        hasPendingStart: () => null != s && null == s.sessionId,
        hasPendingSubmission: () => s?.submitting === !0,
        hasRecoverableSubmission: () => (d(), s?.profileId != null || (s?.submitting === !0 && null != s.sessionId)),
        pendingPhoneDelivery: (e) => {
          let i = (0, ec.Re)("phone", e),
            t = ["sms", "phone_voice_call"].filter((e) => s?.attempts?.[JSON.stringify(["phone", i, e])] != null)
          return 1 === t.length ? t[0] : void 0
        },
        isNameFirst: () => null != s && null == s.businessType,
        start: v,
        restore: async () => {
          if ((d(), null != s))
            return null != s.profileId
              ? f({ action: "get", business_profile_id: s.profileId })
              : s.submitting && null != s.sessionId
                ? w()
                : null == s.sessionId
                  ? v(s.businessType)
                  : x()
        },
        read: x,
        checkDuplicate: async (e, i, t, n) => {
          let r = y(),
            a =
              "website" === e || null == n
                ? []
                : [n.name.trim(), n.values.address, n.values.website, (0, ec.Re)("phone", n.values.phone ?? "")],
            l = (0, eB.sha256)(JSON.stringify([r, e, i.trim(), ...a]))
          if ("website" !== e && s?.declinedDuplicates?.[e] === l) return null
          let o = (await f({ action: "check_session_duplicate", session_id: r, session_field: e, session_value: i }, t))
            .duplicate_lookup
          if (o?.status !== "match") return null
          let c = "website" !== e ? (o.place_candidates ?? []) : [],
            d = o.target_id ? [o.target_id] : [],
            h = "website" !== e && null != o.target_ids ? [...new Set(o.target_ids)] : d
          return 0 === h.length && 0 === c.length
            ? null
            : {
                targetIds: h,
                places: c,
                decline: () => {
                  s?.sessionId === r && ((s.declinedDuplicates = { ...s.declinedDuplicates, [e]: l }), u())
                },
              }
        },
        accept: (e, i) => f({ action: "accept_session_field", session_id: y(), session_field: e, session_value: i }),
        send: (e, i, t) => {
          let r = JSON.stringify([s?.key, y(), (0, ec.Re)(e, i)])
          return o.execute({
            selection: {
              checkKey: e,
              target: r,
              channel: "phone" === e ? t : "email",
              challengeId: null,
              challengeStatus: null,
            },
            operation: "send_session_contact_otp",
            signal: n.signal,
            coalesce: !0,
            run: ({ signal: n }) =>
              (async function (e, i, t, n) {
                let r = y(),
                  a = s?.key,
                  l = (0, ec.Re)(e, i),
                  o = JSON.stringify([e, l, "phone" === e ? t : void 0]),
                  c = s?.attempts?.[o] != null,
                  d = {
                    action: "send_session_contact_otp",
                    session_id: r,
                    field: e,
                    session_value: i,
                    channel: "phone" === e ? t : void 0,
                  },
                  u = await (0, eR.sA)({
                    recovering: c,
                    send: (e) => g(o, d, n, e),
                    throwIfStale: () => {
                      if ((n.throwIfAborted(), s?.key !== a || s?.sessionId !== r))
                        throw new DOMException("Creation session changed", "AbortError")
                    },
                    getRetryDeadline: (i) => {
                      let s = i.session?.contact_verifications.find(
                        (i) => i.field === e && (0, ec.Re)(e, i.target) === l,
                      )
                      return i.session?.session_id === r && s?.status === "pending" && null != s.challenge_id
                        ? s.resend_available_at
                        : void 0
                    },
                  }),
                  f = u.session?.contact_verifications.find((i) => i.field === e && (0, ec.Re)(e, i.target) === l)
                if (f?.status !== "pending") return u
                let h = f.challenge_id,
                  p = u,
                  m = "email" === e ? (0, ev.K)((e) => x(e, 1)) : (e) => x(e)
                try {
                  let i = await (0, eO.re)({
                    signal: n,
                    initial: u,
                    maxReads: 30,
                    timeoutMs: 3e4,
                    intervalMs: 1e3,
                    isPending: (i) =>
                      i.session?.contact_verifications.some(
                        (i) =>
                          i.field === e &&
                          (0, ec.Re)(e, i.target) === l &&
                          i.challenge_id === h &&
                          "pending" === i.status,
                      ) ?? !1,
                    read: async (e) => {
                      if (s?.key !== a || s?.sessionId !== r)
                        throw new DOMException("Creation session changed", "AbortError")
                      return (p = await m(e, p))
                    },
                  })
                  if ((n.throwIfAborted(), s?.key !== a || s?.sessionId !== r))
                    throw new DOMException("Creation session changed", "AbortError")
                  return i.value
                } catch (i) {
                  if ((n.throwIfAborted(), s?.key !== a || s?.sessionId !== r))
                    throw new DOMException("Creation session changed", "AbortError")
                  if ("email" === e || !eQ(i)) throw i
                  return p
                }
              })(e, i, t, n),
            onSettled: () => {
              a++
            },
          })
        },
        verify: (e, i, s) =>
          f({ action: "verify_session_contact_otp", session_id: y(), field: e, challenge_id: i, code: s }),
        discoverWebsite: (e, i) =>
          g(
            JSON.stringify(["website-discovery", (0, ec.DX)(e)]),
            { action: "discover_session_website", session_id: y(), session_value: (0, ec.DX)(e) },
            AbortSignal.any([i, AbortSignal.timeout(12e3)]),
          ),
        startShopify: (e, i) =>
          g(
            JSON.stringify(["website-shopify", e]),
            { action: "start_session_website_shopify", session_id: y(), challenge_id: e },
            i,
          ),
        cancelShopify: (e, i) => {
          let t = y(),
            n = s?.key,
            r = p(),
            a = `[${JSON.stringify("website-shopify")},`,
            l = Object.entries(s?.attempts ?? {}).filter(
              ([i, s]) => i.startsWith(a) && (null == s.challengeId || s.challengeId === e),
            )
          return f({ action: "cancel_session_website_shopify", session_id: t, challenge_id: e }, i).then((i) => {
            if (s?.key !== n || s?.sessionId !== t) throw new DOMException("Creation session changed", "AbortError")
            if (
              i.session?.session_id === t &&
              i.session.shopify_verification?.id === e &&
              "cancelled" === i.session.shopify_verification.status
            ) {
              let e = m(i, n, t, r)
              for (let [i, t] of l) s.attempts?.[i] === t && (delete s.attempts[i], (e = !0))
              e && u()
            }
            return i
          })
        },
        startWebsite: (e) =>
          g(JSON.stringify(["website", e]), { action: "start_session_website_dns", session_id: y(), session_value: e }),
        checkWebsite: async (e) => {
          let i = await f({ action: "check_session_website_dns", session_id: y(), challenge_id: e }),
            t = i.session?.website_verification
          if (t?.challenge_id === e && "pending" !== t.status) {
            for (let [i, t] of Object.entries(s?.attempts ?? {})) t.challengeId === e && delete s?.attempts?.[i]
            u()
          }
          return i
        },
        submit: w,
        preserveWebsiteHandoff: (e) => {
          if (s?.sessionId == null) throw Error("Start a creation session first")
          let i = JSON.stringify(s),
            n = JSON.stringify({ draft: e, step: "website", attemptKey: s.key })
          if (
            (sessionStorage.setItem(t, i),
            sessionStorage.setItem(`${t}:pending`, n),
            sessionStorage.getItem(t) !== i || sessionStorage.getItem(`${t}:pending`) !== n)
          )
            throw Error("Creation session could not be saved")
        },
        savePending: (e, i) => {
          try {
            sessionStorage.setItem(
              `${t}:pending`,
              JSON.stringify({ draft: e, step: i, attemptKey: s?.key, stepOrderVersion: 2 }),
            )
          } catch {}
        },
        pending: () => {
          d()
          try {
            let e = eH.safeParse(JSON.parse(sessionStorage.getItem(`${t}:pending`) ?? "null")).data
            return null != e && e.attemptKey === s?.key ? e : null
          } catch {
            return null
          }
        },
        clear: (e) => {
          if (null != e && s?.sessionId !== e) return
          let i = s?.key
          s = void 0
          try {
            if (null != e && c()?.key !== i) return
            ;(sessionStorage.removeItem(t), sessionStorage.removeItem(`${t}:pending`))
          } catch {}
        },
      }
    }
    function eQ(e) {
      return (
        ((e instanceof Error || e instanceof DOMException) && "TimeoutError" === e.name) ||
        (e instanceof ef.fk && ("network" === e.errorKind || 408 === e.status || (e.status >= 500 && e.status < 600)))
      )
    }
    function eZ(e) {
      if (e instanceof ef.fk) {
        if (503 === e.status && "business_profile_persona_configuration_error" === e.errorCode)
          return "personaConfiguration"
        if (410 === e.status && "business_profile_creation_session_expired" === e.errorCode) return "expired"
        if (400 === e.status || 422 === e.status) return "invalid"
      }
      return "error"
    }
    var eX = s("z2PK")
    function eY(e) {
      let i,
        s,
        r,
        a,
        l,
        o,
        d,
        h,
        p,
        m,
        b,
        g,
        y,
        v,
        w,
        _,
        C,
        j,
        A,
        S,
        k,
        I,
        P,
        N,
        E,
        D,
        M,
        T,
        L,
        R,
        B,
        W,
        F,
        q,
        U = (0, n.c)(99)
      U[0] !== e
        ? (({
            accountId: s,
            acceptedSession: i,
            onDiscover: a,
            onStartShopify: l,
            onCancelShopify: r,
            renderStep: o,
            ...d
          } = e),
          (U[0] = e),
          (U[1] = i),
          (U[2] = s),
          (U[3] = r),
          (U[4] = a),
          (U[5] = l),
          (U[6] = o),
          (U[7] = d))
        : ((i = U[1]), (s = U[2]), (r = U[3]), (a = U[4]), (l = U[5]), (o = U[6]), (d = U[7]))
      let V = (0, u.A)(),
        { website: H, busy: G, onBack: $ } = d,
        [J, K] = (0, c.useState)("shopify")
      U[8] !== H || U[9] !== d.verification
        ? ((h = () => eV(d.verification, H)), (U[8] = H), (U[9] = d.verification), (U[10] = h))
        : (h = U[10])
      let [Q, Z] = (0, c.useState)(h),
        [X, Y] = (0, c.useState)(!1),
        [ee, ei] = (0, c.useState)(!1),
        es = (0, c.useRef)(null)
      ;(U[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = () => () => es.current?.abort()), (m = []), (U[11] = p), (U[12] = m))
        : ((p = U[11]), (m = U[12])),
        (0, c.useEffect)(p, m))
      let et =
          i?.shopify_verification?.status === "pending" && e2(i.shopify_verification.website, H)
            ? i.shopify_verification
            : null,
        en = i?.session_id
      ;(U[13] !== s || U[14] !== en || U[15] !== H
        ? ((b = ["business-profiles", s, "creation-website-discovery", en, H]),
          (U[13] = s),
          (U[14] = en),
          (U[15] = H),
          (U[16] = b))
        : (b = U[16]),
        U[17] !== a
          ? ((g = (e) => {
              let { signal: i } = e
              return a(i)
            }),
            (U[17] = a),
            (U[18] = g))
          : (g = U[18]))
      let er = null == et && !X
      U[19] !== b || U[20] !== g || U[21] !== er
        ? ((y = {
            queryKey: b,
            queryFn: g,
            enabled: er,
            retry: !1,
            staleTime: 1 / 0,
            gcTime: 0,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
          }),
          (U[19] = b),
          (U[20] = g),
          (U[21] = er),
          (U[22] = y))
        : (y = U[22])
      let { data: ea, isFetching: el, refetch: eo } = (0, z.I)(y),
        ec = ea?.website_discovery
      U[23] !== ec || U[24] !== H ? ((v = O(ec, H)), (U[23] = ec), (U[24] = H), (U[25] = v)) : (v = U[25])
      let eu = v,
        ef = null != et || null != eu,
        eh = G || X
      U[26] !== G ||
      U[27] !== eu?.id ||
      U[28] !== J ||
      U[29] !== $ ||
      U[30] !== r ||
      U[31] !== l ||
      U[32] !== et ||
      U[33] !== eo ||
      U[34] !== H ||
      U[35] !== d
        ? ((w = async function (e) {
            let i = void 0 !== e && e
            if (null != es.current || G) return
            let s = new AbortController()
            return (
              (es.current = s),
              Y(!0),
              ei(!1),
              (async function () {
                if (i || "website" === J)
                  (null != et && (await r(et.id, s.signal)),
                    s.signal.throwIfAborted(),
                    i ? $() : (eV(d.verification, H) || (await d.onStart()), s.signal.throwIfAborted(), Z(!0)))
                else {
                  let e = et?.id ?? eu?.id
                  if (null == e) throw Error("Shopify verification is unavailable")
                  await l(e, s.signal)
                }
              })()
                .catch(() => {
                  s.signal.aborted || (ei(!0), eo())
                })
                .finally(() => {
                  ;(es.current === s && (es.current = null), s.signal.aborted || Y(!1))
                })
            )
          }),
          (U[26] = G),
          (U[27] = eu?.id),
          (U[28] = J),
          (U[29] = $),
          (U[30] = r),
          (U[31] = l),
          (U[32] = et),
          (U[33] = eo),
          (U[34] = H),
          (U[35] = d),
          (U[36] = w))
        : (w = U[36])
      let ep = w
      if (el && null == et && !Q) {
        let e, i, s, n
        return (
          U[37] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("p", {
                role: "status",
                children: (0, t.jsx)(f.A, {
                  id: "businessProfiles.creation.website.methods.loading",
                  defaultMessage: "Checking verification methods",
                  description:
                    "Status while checking which ownership verification methods are available for the website entered during business profile creation.",
                }),
              })),
              (U[37] = e))
            : (e = U[37]),
          U[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, t.jsx)(f.A, { ...eN.W.back })), (U[38] = i))
            : (i = U[38]),
          U[39] !== $
            ? ((s = (0, t.jsxs)("div", {
                className: "flex flex-col gap-4 select-none",
                children: [
                  e,
                  (0, t.jsx)(x.$, {
                    type: "button",
                    color: "outlineGhost",
                    size: "formAction",
                    onClick: $,
                    children: i,
                  }),
                ],
              })),
              (U[39] = $),
              (U[40] = s))
            : (s = U[40]),
          U[41] !== o || U[42] !== s ? ((n = o(s)), (U[41] = o), (U[42] = s), (U[43] = n)) : (n = U[43]),
          n
        )
      }
      if (!ef || Q) {
        let e, i, s
        return (
          U[44] !== ef || U[45] !== $ || U[46] !== eo
            ? ((e = ef
                ? () => {
                    ;(Z(!1), eo())
                  }
                : $),
              (U[44] = ef),
              (U[45] = $),
              (U[46] = eo),
              (U[47] = e))
            : (e = U[47]),
          U[48] !== e || U[49] !== d
            ? ((i = (0, t.jsx)(e1, { ...d, onBack: e })), (U[48] = e), (U[49] = d), (U[50] = i))
            : (i = U[50]),
          U[51] !== o || U[52] !== i ? ((s = o(i, !0)), (U[51] = o), (U[52] = i), (U[53] = s)) : (s = U[53]),
          s
        )
      }
      ;(U[54] !== H
        ? ((_ = (0, t.jsx)("p", {
            children: (0, t.jsx)(f.A, {
              id: "businessProfiles.creation.website.methods",
              defaultMessage: "Choose how to verify ownership of {website}",
              description:
                "Instructions above ownership verification choices for a website authoritatively recognized as a Shopify store during business profile creation. Website is the address entered by the owner.",
              values: { website: (0, t.jsx)("bdi", { children: H }, "website") },
            }),
          })),
          (U[54] = H),
          (U[55] = _))
        : (_ = U[55]),
        U[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (e) => {
              ;(K(e), ei(!1))
            }),
            (U[56] = C))
          : (C = U[56]),
        U[57] !== V
          ? ((j = V.formatMessage({
              id: "businessProfiles.creation.website.methods.label",
              defaultMessage: "Verification method",
              description:
                "Accessible group label for website ownership verification choices during business profile creation.",
            })),
            (U[57] = V),
            (U[58] = j))
          : (j = U[58]),
        U[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, t.jsx)(f.A, {
              id: "businessProfiles.creation.website.methods.shopify",
              defaultMessage: "Shopify",
              description: "Ownership verification option that signs the owner in to Shopify. Keep Shopify unchanged.",
            })),
            (U[59] = A))
          : (A = U[59]))
      let em = et?.myshopify_domain ?? eu?.myshopify_domain
      return (
        U[60] !== em
          ? ((S = (0, t.jsxs)("span", {
              className: "flex flex-col text-base",
              children: [
                A,
                (0, t.jsx)("span", {
                  className: "text-sm text-secondary",
                  children: (0, t.jsx)(f.A, {
                    id: "businessProfiles.creation.website.methods.shopify.description",
                    defaultMessage: "Sign in to Shopify to verify {shop}",
                    description:
                      "Description of Shopify ownership verification during business profile creation. Shop is the authoritative myshopify.com store domain returned by the server.",
                    values: { shop: em },
                  }),
                }),
              ],
            })),
            (U[60] = em),
            (U[61] = S))
          : (S = U[61]),
        U[62] !== eh || U[63] !== S
          ? ((k = (0, t.jsx)(ed.z.Item, { value: "shopify", disabled: eh, block: !0, children: S })),
            (U[62] = eh),
            (U[63] = S),
            (U[64] = k))
          : (k = U[64]),
        U[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, t.jsx)(f.A, {
              id: "businessProfiles.creation.website.methods.website",
              defaultMessage: "Website domain",
              description: "Ownership verification option that uses the existing website DNS verification process.",
            })),
            (U[65] = I))
          : (I = U[65]),
        U[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, t.jsxs)("span", {
              className: "flex flex-col text-base",
              children: [
                I,
                (0, t.jsx)("span", {
                  className: "text-sm text-secondary",
                  children: (0, t.jsx)(f.A, {
                    id: "businessProfiles.creation.website.methods.website.description",
                    defaultMessage: "Add a DNS TXT record for your website",
                    description:
                      "Description of the website ownership verification choice during business profile creation. DNS TXT is the verification record type.",
                  }),
                }),
              ],
            })),
            (U[66] = P))
          : (P = U[66]),
        U[67] !== eh
          ? ((N = (0, t.jsx)(ed.z.Item, { value: "website", disabled: eh, block: !0, children: P })),
            (U[67] = eh),
            (U[68] = N))
          : (N = U[68]),
        U[69] !== J || U[70] !== j || U[71] !== k || U[72] !== N
          ? ((E = (0, t.jsxs)(ed.z, { value: J, onChange: C, direction: "col", "aria-label": j, children: [k, N] })),
            (U[69] = J),
            (U[70] = j),
            (U[71] = k),
            (U[72] = N),
            (U[73] = E))
          : (E = U[73]),
        U[74] !== ep ? ((D = () => void ep()), (U[74] = ep), (U[75] = D)) : (D = U[75]),
        U[76] !== J
          ? ((M =
              "shopify" === J
                ? (0, t.jsx)(f.A, {
                    id: "businessProfiles.creation.website.shopify.start",
                    defaultMessage: "Verify with Shopify",
                    description:
                      "Starts or resumes Shopify ownership verification for the entered website during business profile creation.",
                  })
                : (0, t.jsx)(f.A, { ...eN.W.continue })),
            (U[76] = J),
            (U[77] = M))
          : (M = U[77]),
        U[78] !== eh || U[79] !== D || U[80] !== M
          ? ((T = (0, t.jsx)(x.$, { type: "button", size: "formAction", disabled: eh, onClick: D, children: M })),
            (U[78] = eh),
            (U[79] = D),
            (U[80] = M),
            (U[81] = T))
          : (T = U[81]),
        U[82] !== ee
          ? ((L =
              ee &&
              (0, t.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, t.jsx)(f.A, { ...eN.W.error }),
              })),
            (U[82] = ee),
            (U[83] = L))
          : (L = U[83]),
        U[84] !== ep ? ((R = () => void ep(!0)), (U[84] = ep), (U[85] = R)) : (R = U[85]),
        U[86] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, t.jsx)(f.A, { ...eN.W.back })), (U[86] = B))
          : (B = U[86]),
        U[87] !== eh || U[88] !== R
          ? ((W = (0, t.jsx)(x.$, {
              type: "button",
              color: "outlineGhost",
              size: "formAction",
              disabled: eh,
              onClick: R,
              children: B,
            })),
            (U[87] = eh),
            (U[88] = R),
            (U[89] = W))
          : (W = U[89]),
        U[90] !== _ || U[91] !== E || U[92] !== T || U[93] !== L || U[94] !== W
          ? ((F = (0, t.jsxs)("div", { className: "flex flex-col gap-4 select-none", children: [_, E, T, L, W] })),
            (U[90] = _),
            (U[91] = E),
            (U[92] = T),
            (U[93] = L),
            (U[94] = W),
            (U[95] = F))
          : (F = U[95]),
        U[96] !== o || U[97] !== F ? ((q = o(F)), (U[96] = o), (U[97] = F), (U[98] = q)) : (q = U[98]),
        q
      )
    }
    function e1(e) {
      let i,
        s,
        r,
        a,
        l,
        o = (0, n.c)(18),
        { website: d, verification: u, busy: h, onStart: p, onCheck: m, onBack: b } = e,
        [g, x] = (0, c.useState)(),
        y = null != u && e2(u.website, d) ? u : null,
        v = y?.test_override && 1 ? null : y,
        w = y?.hostname
      return (
        o[0] !== y?.test_override
          ? ((i =
              y?.test_override &&
              (0, t.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, t.jsx)(f.A, {
                  id: "businessProfiles.creation.website.testOverride",
                  defaultMessage:
                    "Internal DNS test: this uses a real DNS lookup but does not prove business ownership. Clear the DNS override and verify the real website before submitting this profile.",
                  description:
                    "Notice when an employee tests DNS verification during Business Profile creation. The server marks the challenge as test evidence, including after refresh. Test evidence cannot be used to submit a profile; the employee must clear the debug override and verify the actual website first.",
                }),
              })),
            (o[0] = y?.test_override),
            (o[1] = i))
          : (i = o[1]),
        o[2] !== y || o[3] !== m
          ? ((s = y ? async () => (await m(y.challenge_id), { pendingChallengeId: y.challenge_id }) : void 0),
            (o[2] = y),
            (o[3] = m),
            (o[4] = s))
          : (s = o[4]),
        o[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsx)(f.A, { ...eN.W.back })), (o[5] = r))
          : (r = o[5]),
        o[6] !== h || o[7] !== b
          ? ((a = (0, t.jsx)(eX.U, { type: "button", color: "outlineGhost", disabled: h, onClick: b, children: r })),
            (o[6] = h),
            (o[7] = b),
            (o[8] = a))
          : (a = o[8]),
        o[9] !== h ||
        o[10] !== g ||
        o[11] !== p ||
        o[12] !== v ||
        o[13] !== w ||
        o[14] !== i ||
        o[15] !== s ||
        o[16] !== a
          ? ((l = (0, t.jsx)(eX.B, {
              lastCheck: g,
              onChecked: x,
              challenge: v,
              domain: w,
              busy: h,
              headingRef: e0,
              beforeRecord: i,
              onStart: p,
              onCheck: s,
              secondaryAction: a,
            })),
            (o[9] = h),
            (o[10] = g),
            (o[11] = p),
            (o[12] = v),
            (o[13] = w),
            (o[14] = i),
            (o[15] = s),
            (o[16] = a),
            (o[17] = l))
          : (l = o[17]),
        l
      )
    }
    function e0(e) {
      e?.focus({ preventScroll: !0 })
    }
    function e2(e, i) {
      try {
        return new URL(e).href === new URL(i).href
      } catch {
        return !1
      }
    }
    let e5 = {
        website: ["website"],
        category: ["category", "description"],
        hours: ["hours"],
        address: ["address"],
        delivery: ["delivery_policy"],
        returns: ["returns_policy"],
      },
      e3 = {
        onMouseDown(e) {
          document.activeElement?.id === "business-description" && e.preventDefault()
        },
        onClickCapture(e) {
          document.activeElement?.id === "business-description" && e.currentTarget.focus()
        },
      }
    function e4(e) {
      let i,
        s,
        r,
        a,
        l,
        o,
        d,
        h,
        p,
        b,
        g,
        w,
        _,
        C,
        j,
        A,
        S,
        k,
        I,
        P,
        N,
        E,
        D,
        M,
        T,
        L,
        Y,
        ed,
        eu,
        ef,
        eh,
        ep,
        em,
        eb = (0, n.c)(132),
        {
          accountId: ex,
          contactVerificationEnabled: ey,
          name: ew,
          onCancel: e_,
          onReview: eC,
          initialDraft: ej,
          initialStep: eA,
          submitting: eS,
          allowNavigation: ek,
          services: eI,
          temporarySession: eP,
          initialSession: eE,
          onExpired: eM,
          onSessionDeadline: eT,
        } = e,
        eR = void 0 !== ey && ey,
        eO = void 0 === eA ? "type" : eA,
        eB = void 0 !== eS && eS,
        eW = (0, u.A)(),
        { userId: eF } = (0, m.As)(),
        eq = (0, F.jE)()
      eb[0] !== ex ? ((i = () => (null == ex ? null : (0, eL.Y)(ex))), (eb[0] = ex), (eb[1] = i)) : (i = eb[1])
      let [eU] = (0, c.useState)(i)
      ;(eb[2] !== eU
        ? ((s = () => eU?.attach()), (r = [eU]), (eb[2] = eU), (eb[3] = s), (eb[4] = r))
        : ((s = eb[3]), (r = eb[4])),
        (0, c.useEffect)(s, r))
      let [eH, e$] = (0, c.useState)(),
        [eK, eQ] = (0, c.useState)(),
        [eX, e1] = (0, c.useState)(eE),
        [e0, e2] = (0, c.useState)()
      eb[5] !== eR || eb[6] !== ej || eb[7] !== ew
        ? ((a = () =>
            null == ej
              ? (0, ec.vm)(ew, eR)
              : { ...ej, contactVerificationRequired: (null == ej.profileId && eR) || ej.contactVerificationRequired }),
          (eb[5] = eR),
          (eb[6] = ej),
          (eb[7] = ew),
          (eb[8] = a))
        : (a = eb[8])
      let [e4, e9] = (0, c.useState)(a)
      eb[9] !== e4 || eb[10] !== eO
        ? ((l = () => (0, ec.B)(e4, eO)), (eb[9] = e4), (eb[10] = eO), (eb[11] = l))
        : (l = eb[11])
      let [ie, ii] = (0, c.useState)(l),
        is = (0, c.useId)(),
        [it, ir] = (0, c.useState)(null),
        [ia, il] = (0, c.useState)(!0),
        [io, ic] = (0, c.useState)(!1),
        [id, iu] = (0, c.useState)(!1),
        [ih, ip] = (0, c.useState)(),
        im = null != ih,
        ib = id || im,
        ig = "website" === ie && "ecommerce" === e4.businessType && null != eP && null != ex,
        ix = eB || io || im,
        iy = ih?.profileId,
        iv = ih?.websiteClaimAttempt
      eb[12] !== ex || eb[13] !== eW.locale || eb[14] !== iv || eb[15] !== iy || eb[16] !== eF
        ? ((o = ["creation-website-claim", ex, eF, eW.locale, iy, iv]),
          (eb[12] = ex),
          (eb[13] = eW.locale),
          (eb[14] = iv),
          (eb[15] = iy),
          (eb[16] = eF),
          (eb[17] = o))
        : (o = eb[17])
      let iw = o
      eb[18] !== im || eb[19] !== iw
        ? ((d = { queries: im ? [{ queryKey: iw, queryFn: q.hT, gcTime: 0 }] : [] }),
          (eb[18] = im),
          (eb[19] = iw),
          (eb[20] = d))
        : (d = eb[20])
      let [i_] = (0, U.E)(d),
        [iC, ij] = (0, c.useState)(),
        iA = (0, c.useRef)(null)
      ;(eb[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = () => () => iA.current?.abort()), (p = []), (eb[21] = h), (eb[22] = p))
        : ((h = eb[21]), (p = eb[22])),
        (0, c.useEffect)(h, p))
      let [iS, ik] = (0, c.useState)(null),
        [iI, iP] = (0, c.useState)(),
        [iN, iE] = (0, c.useState)(null),
        iD = (0, c.useRef)(!1)
      eb[23] !== iS
        ? ((b =
            "error" === iS
              ? (0, t.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, t.jsx)(f.A, { ...eN.W.error }),
                })
              : null),
          (eb[23] = iS),
          (eb[24] = b))
        : (b = eb[24])
      let iM = b
      eb[25] !== e4.values || eb[26] !== eX
        ? ((g = ["phone", "email"].find((e) => e4.values[e]?.trim() && !eG(eX, e, e4.values[e] ?? null))),
          (eb[25] = e4.values),
          (eb[26] = eX),
          (eb[27] = g))
        : (g = eb[27])
      let iT = g
      eb[28] !== e4.values.website || eb[29] !== eE || eb[30] !== ie || eb[31] !== eP
        ? ((w = () => {
            let e = eE?.shopify_verification ?? eE?.website_verification,
              i = e4.values.website
            if (null == eP || "website" !== ie || null == e || !i?.trim() || eG(eE, "website", i)) return !1
            try {
              return new URL(e.website).href === new URL((0, ec.DX)(i)).href
            } catch {
              return !1
            }
          }),
          (eb[28] = e4.values.website),
          (eb[29] = eE),
          (eb[30] = ie),
          (eb[31] = eP),
          (eb[32] = w))
        : (w = eb[32])
      let [iL, iR] = (0, c.useState)(w)
      eb[33] !== e4.values || eb[34] !== eE?.contact_verifications || eb[35] !== iT || eb[36] !== ie || eb[37] !== eP
        ? ((_ = () =>
            null != eP &&
            "phone" === ie &&
            (eE?.contact_verifications.some(
              (e) =>
                e.field === iT && "verified" !== e.status && e.target === (0, ec.Re)(e.field, e4.values[e.field] ?? ""),
            ) ??
              !1)),
          (eb[33] = e4.values),
          (eb[34] = eE?.contact_verifications),
          (eb[35] = iT),
          (eb[36] = ie),
          (eb[37] = eP),
          (eb[38] = _))
        : (_ = eb[38])
      let [iO, iB] = (0, c.useState)(_),
        [iW, iF] = (0, c.useState)()
      eb[39] !== e4.values ||
      eb[40] !== eX?.contact_verifications ||
      eb[41] !== iT ||
      eb[42] !== ie ||
      eb[43] !== eP ||
      eb[44] !== iO
        ? ((C =
            null != eP && "phone" === ie && iO
              ? eX?.contact_verifications.find(
                  (e) =>
                    e.field === iT &&
                    e.target === (0, ec.Re)(e.field, e4.values[e.field] ?? "") &&
                    "pending" === e.status,
                )
              : void 0),
          (eb[39] = e4.values),
          (eb[40] = eX?.contact_verifications),
          (eb[41] = iT),
          (eb[42] = ie),
          (eb[43] = eP),
          (eb[44] = iO),
          (eb[45] = C))
        : (C = eb[45])
      let iq = C,
        iU = iq?.field === "email" && null != iW && iq.target === iW.target && iq.challenge_id === iW.challenge_id,
        iz = eX?.session_id,
        iV = iq?.field,
        iH = iq?.target,
        iG = iq?.challenge_id,
        i$ = eX?.accepted_revision
      ;(eb[46] !== ex || eb[47] !== iz || eb[48] !== iV || eb[49] !== iH || eb[50] !== iG || eb[51] !== i$
        ? ((j = ["business-profiles", ex, "creation-contact-delivery", iz, iV, iH, iG, i$]),
          (eb[46] = ex),
          (eb[47] = iz),
          (eb[48] = iV),
          (eb[49] = iH),
          (eb[50] = iG),
          (eb[51] = i$),
          (eb[52] = j))
        : (j = eb[52]),
        eb[53] !== iq || eb[54] !== eP
          ? ((A =
              null == eP || null == iq
                ? q.hT
                : (e) => {
                    let { signal: i } = e
                    return eP.read(i)
                  }),
            (eb[53] = iq),
            (eb[54] = eP),
            (eb[55] = A))
          : (A = eb[55]))
      let iJ = null != iq && !iU && !ix && null == iN
      ;(eb[56] !== iq
        ? ((S = (e) =>
            !!(
              null != iq &&
              "error" !== e.state.status &&
              e.state.dataUpdateCount < 30 &&
              ez(e.state.data)?.contact_verifications.some(
                (e) =>
                  e.field === iq.field &&
                  e.target === iq.target &&
                  e.challenge_id === iq.challenge_id &&
                  "pending" === e.status,
              )
            ) && 1e3),
          (eb[56] = iq),
          (eb[57] = S))
        : (S = eb[57]),
        eb[58] !== j || eb[59] !== A || eb[60] !== iJ || eb[61] !== S
          ? ((k = {
              queryKey: j,
              queryFn: A,
              enabled: iJ,
              retry: !1,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              staleTime: 0,
              gcTime: 0,
              refetchInterval: S,
            }),
            (eb[58] = j),
            (eb[59] = A),
            (eb[60] = iJ),
            (eb[61] = S),
            (eb[62] = k))
          : (k = eb[62]))
      let iK = ez((0, z.I)(k).data),
        iQ =
          null != iq &&
          iK?.session_id === eX?.session_id &&
          iK?.contact_verifications.some(
            (e) => e.field === iq.field && e.target === iq.target && e.challenge_id === iq.challenge_id,
          )
            ? iK
            : eX,
        iZ = (0, ec.Cu)(e4),
        iX = iZ[iZ.indexOf("import" === ie ? "website" : ie) + 1] ?? "type",
        iY = ie === iZ.at(-1),
        i1 = "import" === ie && null != it && ia ? (0, ec.Uh)(e4, it) : e4,
        i0 = (0, ec.Gk)(i1, null == eP ? void 0 : (iQ?.details ?? null)),
        i2 = e4.values.category,
        i5 = !!i2 && (null != eP ? eG(iQ, "category", i2) : ej?.profileId != null && i2 === ej.values.category),
        i3 = function (e) {
          return (0, ec.J5)(e, e4, i5)
        },
        i4 = i3(ie),
        i6 = null != eP ? iQ?.contact_verifications : eH?.contact_verifications,
        [i8, i7] = (0, c.useState)(),
        i9 = null == i8 ? i6 : [i8],
        se =
          i8?.field ??
          ["phone", "email"].find((e) => {
            let i = e4.values[e]?.trim()
            return (
              i &&
              !(null != eP
                ? eG(iQ, e, i)
                : eH?.contact_verifications?.some(
                    (s) => s.field === e && "verified" === s.status && s.target === (0, ec.Re)(e, i),
                  ))
            )
          })
      eb[63] !== eT || eb[64] !== eP
        ? ((I = function (e) {
            eP?.throwIfAborted()
            let i = ez(e)
            if (null == i) throw Error("Creation session is unavailable")
            return (e1(i), eT?.(i.expires_at), i)
          }),
          (eb[63] = eT),
          (eb[64] = eP),
          (eb[65] = I))
        : (I = eb[65])
      let si = I
      eb[66] !== eM
        ? ((P = function (e) {
            let i = eZ(e)
            "expired" === i ? eM?.() : ik(i)
          }),
          (eb[66] = eM),
          (eb[67] = P))
        : (P = eb[67])
      let ss = P,
        st = function (e) {
          ;(iA.current?.abort(), e9(e), eP?.savePending(e, ie))
        }
      eb[68] !== si || eb[69] !== eU || eb[70] !== eP
        ? ((N = function (e) {
            if (null != eP) return void si(e)
            if ((eU?.throwIfAborted(), null == e.creation)) throw Error("The draft was not saved")
            let i = e.creation,
              s = i.contact_verifications?.find(e7)?.resend_available_at
            ;(eQ((e) =>
              null != s
                ? { profileId: i.business_profile_id, resendAvailableAt: s }
                : e?.profileId === i.business_profile_id
                  ? e
                  : void 0,
            ),
              e$(i),
              e9((i) => ({ ...i, profileId: e.creation?.business_profile_id })))
          }),
          (eb[68] = si),
          (eb[69] = eU),
          (eb[70] = eP),
          (eb[71] = N))
        : (N = eb[71])
      let sn = N
      eb[72] !== sn || eb[73] !== e4 || eb[74] !== ss || eb[75] !== eU || eb[76] !== eP
        ? ((E = function (e, i) {
            return ("email" === e && iP(void 0),
            "phone" === e && e2({ target: (0, ec.Re)("phone", e4.values.phone ?? ""), channel: i }),
            null != eP)
              ? (ic(!0),
                eP
                  .send(e, e4.values[e] ?? "", i)
                  .then((i) => {
                    ;(sn(i),
                      "email" === e &&
                        iF(
                          ez(i)?.contact_verifications.find(
                            (e) =>
                              "email" === e.field &&
                              "pending" === e.status &&
                              e.target === (0, ec.Re)("email", e4.values.email ?? ""),
                          ),
                        ))
                  })
                  .catch((e) => {
                    throw (ss(e), e)
                  })
                  .finally(() => ic(!1)))
              : null == eU
                ? Promise.reject(Error("Contact verification is unavailable"))
                : (ic(!0),
                  eU
                    .save(e4)
                    .then((s) => {
                      if ((sn(s), null == s.creation)) throw Error("The draft was not saved")
                      return eU.send(s.creation.business_profile_id, e, i)
                    })
                    .then(sn)
                    .catch(async (e) => {
                      throw (null != e4.profileId && sn(await eU.read(e4.profileId)), e)
                    })
                    .finally(() => ic(!1)))
          }),
          (eb[72] = sn),
          (eb[73] = e4),
          (eb[74] = ss),
          (eb[75] = eU),
          (eb[76] = eP),
          (eb[77] = E))
        : (E = eb[77])
      let sr = E
      eb[78] !== e4 || eb[79] !== eP
        ? ((D = function (e, i) {
            let s = void 0 === i ? e4 : i
            ;(ik(null), ii(e), eP?.savePending(s, e))
          }),
          (eb[78] = e4),
          (eb[79] = eP),
          (eb[80] = D))
        : (D = eb[80])
      let sa = D
      eb[81] !== e4.values.email || eb[82] !== ss || eb[83] !== sr
        ? ((M = async function (e, i) {
            let s = e4.values.email ?? ""
            ;(0, R.g)(e, (0, ec.Re)("email", s), i) &&
              (await sr("email", "sms").catch((e) => {
                ;(iP({ target: s, error: e }), ss(e))
              }))
          }),
          (eb[81] = e4.values.email),
          (eb[82] = ss),
          (eb[83] = sr),
          (eb[84] = M))
        : (M = eb[84])
      let sl = M,
        so = async function (e, i) {
          sn(e)
          let s = (i) =>
              null != eP
                ? eG(ez(e), i, e4.values[i] ?? null)
                : (e.creation?.contact_verifications?.some(
                    (e) => e.field === i && "verified" === e.status && e.target === (0, ec.Re)(i, e4.values[i] ?? ""),
                  ) ?? !1),
            t = s(i)
          return (
            t &&
              (ik(null),
              "phone" === ie &&
                ["phone", "email"].every((e) => !e4.values[e]?.trim() || s(e)) &&
                (iB(!1), sa(iZ[iZ.indexOf(ie) + 1] ?? ie))),
            t &&
              "phone" === i &&
              e4.values.email?.trim() &&
              !s("email") &&
              (i7(i9?.find((e) => "phone" === e.field && e.target === (0, ec.Re)("phone", e4.values.phone ?? ""))),
              await sl("email", ez(e)?.contact_verifications ?? e.creation?.contact_verifications).finally(() =>
                i7(void 0),
              )),
            t
          )
        },
        sc = function (e, i) {
          let s = i9?.find((i) => i.field === e && i.target === (0, ec.Re)(e, e4.values[e] ?? ""))
          if (null != eP)
            return s?.challenge_id == null
              ? Promise.resolve(!1)
              : (ic(!0),
                eP
                  .verify(e, s.challenge_id, i)
                  .then((i) => so(i, e))
                  .catch(async (i) => {
                    if ((ss(i), "expired" !== eZ(i) && (await so(await eP.read(), e)))) return !0
                    throw i
                  })
                  .finally(() => ic(!1)))
          let t = e4.profileId
          return null == eU || null == t || s?.challenge_id == null
            ? Promise.resolve(!1)
            : (ic(!0),
              eU
                .verify(t, e, s.challenge_id, i)
                .then((i) => so(i, e))
                .catch(async (i) => {
                  if (await so(await eU.read(t), e)) return !0
                  throw i
                })
                .finally(() => ic(!1)))
        },
        sd = function (e, i) {
          ;(st("name" === e ? { ...e4, name: i } : { ...e4, values: { ...e4.values, [e]: i } }),
            ik(null),
            iB(!1),
            iR(!1))
        },
        su = function (e, i) {
          null == i || sd(e, "clear" === i.operation ? "" : (i.value ?? ""))
        },
        sf = function () {
          if ((iA.current?.abort(), iL)) return void iR(!1)
          if (iO) {
            ;(e1(iQ), iB(!1))
            return
          }
          "import" === ie ? sa("website") : sa(iZ[Math.max(0, iZ.indexOf(ie) - 1)] ?? "type")
        },
        sh = async function (e) {
          if (ix) return !1
          ;(ic(!0), ik(null))
          try {
            if (null != eP) {
              let e = iQ?.shopify_verification
              ;(e?.status === "pending" && si(await eP.cancelShopify(e.id)), eP.clear())
            } else if (null != e4.profileId) {
              let e = await eU?.cancel(e4.profileId)
              if (e?.creation?.status !== "cancelled") return (ik("error"), ic(!1), !1)
              eq.invalidateQueries({ queryKey: ["business-profiles", ex, "creations"] })
            }
          } catch {
            return (ik("error"), ic(!1), !1)
          }
          return (ic(!1), (iD.current = !0), (void 0 === e || e) && e_(), !0)
        }
      eb[85] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (e, i) {
            let s = e?.website_verification
            return eG(e, "website", i) && !(s?.test_override && eG(e, "website", s.website) && 1)
          }),
          (eb[85] = T))
        : (T = eb[85])
      let sp = T,
        sm = async function (e) {
          let i = (0, ec.DX)(e4.values.website ?? ""),
            s = { ...e4, values: { ...e4.values, website: i } }
          ;(iR(!1), e9(s))
          let t = i && eI?.importWebsite != null ? await eI.importWebsite(i) : null
          ;(e?.throwIfAborted(), eP?.throwIfAborted(), ir(t), il(!0), sa(null == t ? iX : "import", s))
        },
        sb = async function (e) {
          if (null == eP) throw Error("Website verification is unavailable")
          let i = (0, ec.DX)(e4.values.website ?? ""),
            s = await eP.startWebsite(i)
          e?.throwIfAborted()
          let t = ez(s),
            n = sp(t, i)
          if (!n && !eV(t?.website_verification, i)) throw Error("Website verification is unavailable")
          return (sn(s), n && (await sm(e)), n)
        },
        sg = async function (e) {
          let i = void 0 !== e && e
          if (ix || null != iA.current) return
          if (!i4) return void ik("invalid")
          ;(ik(null), ic(!0), iu(ig && !i && !!e4.values.website?.trim()))
          let s = new AbortController()
          ;((iA.current = s),
            await (async function (e, i) {
              let s = iQ,
                t = e4
              if (null != eP) {
                if ((e1(s), null == e4.businessType)) throw Error("A business type is required")
                if (
                  ((null == s || s.details.business_type !== e4.businessType) &&
                    (s = si(await eP.start(e4.businessType))),
                  !eG(s, "name", e4.name))
                )
                  try {
                    s = si(await eP.accept("name", e4.name))
                  } catch (e) {
                    throw (sa("type"), e)
                  }
                if (
                  !e &&
                  null != ex &&
                  (("website" === ie && "ecommerce" === e4.businessType) ||
                    ("phone" === ie && "local_business" === e4.businessType))
                ) {
                  let e = e4.values[ie]
                  if (e?.trim()) {
                    let t = AbortSignal.any([i, AbortSignal.timeout(8e3)])
                    try {
                      let i = await eP.checkDuplicate(ie, e, t, e4)
                      if (null != i) {
                        let e = i.targetIds[0]
                        if (null != e && "website" === ie)
                          return void ip({
                            profileId: e,
                            sessionId: s.session_id,
                            websiteClaimAttempt: crypto.randomUUID(),
                          })
                        let n = "website" !== ie,
                          r = await Promise.allSettled(
                            i.targetIds.map((e) =>
                              (0, er.readProfileClaimPreparation)(e, { accountId: ex, getAbortSignal: () => t }),
                            ),
                          )
                        t.throwIfAborted()
                        let a = r.flatMap((e) =>
                          "fulfilled" === e.status &&
                          ((0, er.canSuggestProfileClaim)(e.value, n) ||
                            ("local" === e.value.business_type &&
                              (e.value.can_manage || null != e.value.ownership.current_request)))
                            ? [e.value]
                            : [],
                        )
                        if (a.length > 0 || i.places.length > 0)
                          return void ij({
                            profiles: a,
                            places: i.places,
                            allowDispute: n,
                            sessionId: s.session_id,
                            decline: i.decline,
                          })
                      }
                    } catch {
                      ;(i.throwIfAborted(), eP.throwIfAborted())
                    }
                    iu(!1)
                  }
                }
                if ("website" === ie && e4.values.website?.trim() && !sp(s, e4.values.website)) {
                  let e = (0, ec.DX)(e4.values.website),
                    t = s.shopify_verification
                  if (
                    !eV(s.website_verification, e) &&
                    (t?.status !== "pending" || new URL(t.website).href !== new URL(e).href)
                  ) {
                    let t = await eq
                      .fetchQuery({
                        queryKey: ["business-profiles", ex, "creation-website-discovery", s.session_id, e],
                        queryFn: (s) => {
                          let { signal: t } = s
                          return eP.discoverWebsite(e, AbortSignal.any([i, t]))
                        },
                        retry: !1,
                        staleTime: 1 / 0,
                      })
                      .catch(e8)
                    if ((i.throwIfAborted(), eP.throwIfAborted(), !O(t?.website_discovery, e))) {
                      let e = await sb(i)
                      if ((i.throwIfAborted(), e)) return
                    }
                  }
                  iR(!0)
                  return
                }
                if ("phone" === ie) {
                  for (let e of ["phone", "email"])
                    e4.values[e]?.trim() || eG(s, e, null) || (s = si(await eP.accept(e, null)))
                  let e = ["phone", "email"].find((e) => e4.values[e]?.trim() && !eG(s, e, e4.values[e] ?? null))
                  if (null != e) {
                    ;(await sl(e, s?.contact_verifications), iB(!0))
                    return
                  }
                  iB(!1)
                }
                if ("address" === ie && s.accepted_revision) {
                  let e = e4.values.address ?? null,
                    t = (0, Q.oR)(e, Q.Tq.strict()),
                    n = eG(s, "address", e) ? s.details.coordinates : null,
                    r = null == t ? null : await (0, es.WZ)(eq, t, null != n)
                  if (
                    (i.throwIfAborted(),
                    eP.throwIfAborted(),
                    null != t &&
                      r?.featureId &&
                      r.featureId.length <= 512 &&
                      (r.latitude !== n?.latitude || r.longitude !== n?.longitude) &&
                      ((s = si(
                        await eP
                          .accept(
                            "address",
                            JSON.stringify({
                              ...t,
                              proposed_location: {
                                source: "mapbox",
                                feature_id: r.featureId,
                                latitude: r.latitude,
                                longitude: r.longitude,
                                address: t,
                                expected_revision: s.accepted_revision,
                              },
                            }),
                          )
                          .catch(async (e) => {
                            throw (eJ(e) && si(await eP.read(i)), e)
                          }),
                      )),
                      i.throwIfAborted(),
                      !eG(s, "address", e)))
                  )
                    throw Error("The creation address was not accepted")
                }
                if ("type" !== ie && "import" !== ie && "phone" !== ie)
                  for (let e of e5[ie]) {
                    let i = e4.values[e] || null
                    eG(s, e, i) || (s = si(await ("website" === e ? eP.accept(e, null) : eP.accept(e, i))))
                  }
              }
              if (null == eP && "phone" === ie && e4.contactVerificationRequired) {
                if (null == eU) throw Error("Contact verification is unavailable")
                let e = await eU.save(e4)
                ;(sn(e), (t = { ...e4, profileId: e.creation?.business_profile_id }))
                let i = ["phone", "email"].find(
                  (i) =>
                    e4.values[i]?.trim() &&
                    !e.creation?.contact_verifications?.some((e) => e.field === i && "verified" === e.status),
                )
                if (i) {
                  ;(await sl(i, e.creation?.contact_verifications), iB(!0))
                  return
                }
                iB(!1)
              }
              if (iY) {
                if (null != eP) {
                  s = si(await eP.read())
                  let e = iZ.find((e) =>
                    "type" === e
                      ? !eG(s, "name", e4.name) || s?.details.business_type !== e4.businessType
                      : "import" !== e &&
                        ("phone" === e
                          ? !eG(s, "phone", e4.values.phone ?? null) || !eG(s, "email", e4.values.email ?? null)
                          : e5[e].some((e) => !eG(s, e, e4.values[e] ?? null))),
                  )
                  if (null != e) {
                    ;(sa(e), ik("invalid"))
                    return
                  }
                }
                let e = iZ.find((e) => !i3(e))
                if (null != e) {
                  ;(sa(e), ik("invalid"))
                  return
                }
                ;(null != eP ||
                  null == eU ||
                  ("phone" === ie && e4.contactVerificationRequired) ||
                  null == e4.profileId ||
                  sn(await eU.save(e4)),
                  eC(
                    null == s
                      ? t
                      : {
                          name: s.details.name,
                          businessType: s.details.business_type,
                          values: s.details.values,
                          contactVerificationRequired: !0,
                        },
                    s?.accepted_revision,
                  ))
                return
              }
              if ("website" === ie) return void (await sm(i))
              if ("import" === ie) {
                let e = ia && null != it ? (0, ec.Uh)(e4, it) : e4
                ;(st(e), sa(iX, e))
                return
              }
              sa(iX)
            })(i, s.signal)
              .catch((e) => {
                s.signal.aborted || ss(e)
              })
              .finally(() => {
                ;((iA.current = null), iu(!1), ic(!1))
              }))
        }
      eb[86] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { address: "address", hours: "hours", delivery: "delivery_policy", returns: "returns_policy" }),
          (eb[86] = L))
        : (L = eb[86])
      let sx = L
      eb[87] !== ie ? ((Y = (e) => e.field_key === sx[ie]), (eb[87] = ie), (eb[88] = Y)) : (Y = eb[88])
      let sy = i0.fields.find(Y)
      eb[89] !== ie
        ? ((ed = ["category", "phone"].includes(ie) ? ie : "website"), (eb[89] = ie), (eb[90] = ed))
        : (ed = eb[90])
      let sv = ed,
        sw = i9?.find((e) => "email" === e.field && e.target === (0, ec.Re)("email", e4.values.email ?? ""))?.status,
        s_ = (0, ev.a)(sw),
        sC = iO && "email" === se,
        sj = i9?.find((e) => "phone" === e.field && e.target === (0, ec.Re)("phone", e4.values.phone ?? ""))?.status,
        sA = eN.W.delivery_method
      "sent" === sj ? (sA = eN.W.code) : "pending" === sj && (sA = eN.W.verifyContactTarget)
      let sS = eN.W[ie]
      if ((sC ? (sS = eN.W.verifyContactTarget) : iO && "phone" === se && (sS = sA), eb[91] !== e4.values.phone)) {
        let e = (0, V.l)(e4.values.phone ?? "", "US")
        ;((eu = e?.countryCallingCode === "1" ? e.formatNational() : (e?.formatInternational() ?? e4.values.phone)),
          (eb[91] = e4.values.phone),
          (eb[92] = eu))
      } else eu = eb[92]
      let sk = eu,
        sI = "phone" === se && sA === eN.W.delivery_method,
        sP = iO && "phone" === se && sA === eN.W.verifyContactTarget,
        sN = sI || sP || (sC && "code" !== s_)
      eb[93] !== e4.values.phone || eb[94] !== e0 || eb[95] !== eP
        ? ((ef =
            e0?.target === (0, ec.Re)("phone", e4.values.phone ?? "")
              ? e0.channel
              : eP?.pendingPhoneDelivery(e4.values.phone ?? "")),
          (eb[93] = e4.values.phone),
          (eb[94] = e0),
          (eb[95] = eP),
          (eb[96] = ef))
        : (ef = eb[96])
      let sE = ef,
        sD = iY ? eN.W.submit : eN.W.continue
      eb[97] !== sv || eb[98] !== ie
        ? ((eh = (e) =>
            e.field_key === sv ||
            ("category" === ie && "description" === e.field_key) ||
            ("phone" === ie && "email" === e.field_key)),
          (eb[97] = sv),
          (eb[98] = ie),
          (eb[99] = eh))
        : (eh = eb[99])
      let sM = { ...i0, fields: i0.fields.filter(eh) }
      eb[100] !== ex || eb[101] !== e_ || eb[102] !== ih || eb[103] !== eP || eb[104] !== iw
        ? ((ep =
            null != ih && null != ex
              ? (0, t.jsx)(
                  en.CanonicalProfileClaim,
                  {
                    accountId: ex,
                    profileId: ih.profileId,
                    selectionQueryKey: iw,
                    showLoadingDialog: !1,
                    telemetryEntryPoint: "creation_duplicate",
                    onCreationClaimApproved: () => eP?.clear(ih.sessionId),
                    onCloseAfterApproval: e_,
                    onClose: () => ip(void 0),
                  },
                  `${ih.sessionId}:${ih.profileId}`,
                )
              : null),
          (eb[100] = ex),
          (eb[101] = e_),
          (eb[102] = ih),
          (eb[103] = eP),
          (eb[104] = iw),
          (eb[105] = ep))
        : (ep = eb[105])
      let sT = ep
      if (null != iC && null != ex) {
        let e, i, s, n, r, a
        if (eb[106] !== e4.values.address || eb[107] !== iC.places || eb[108] !== iC.profiles) {
          let t = (0, Q.oR)(e4.values.address ?? null, Q.Tq)
          ;((e = eg),
            (i = iC.profiles),
            (s = iC.places),
            (n = t ? (0, Q.dT)(t) : void 0),
            (eb[106] = e4.values.address),
            (eb[107] = iC.places),
            (eb[108] = iC.profiles),
            (eb[109] = e),
            (eb[110] = i),
            (eb[111] = s),
            (eb[112] = n))
        } else ((e = eb[109]), (i = eb[110]), (s = eb[111]), (n = eb[112]))
        return (
          eb[113] !== iC.sessionId || eb[114] !== eP
            ? ((r = () => eP?.clear(iC.sessionId)), (eb[113] = iC.sessionId), (eb[114] = eP), (eb[115] = r))
            : (r = eb[115]),
          eb[116] === Symbol.for("react.memo_cache_sentinel") ? ((a = () => ij(void 0)), (eb[116] = a)) : (a = eb[116]),
          (0, t.jsx)(e, {
            profiles: i,
            places: s,
            matchedAddress: n,
            allowDispute: iC.allowDispute,
            accountId: ex,
            onClaimApproved: r,
            onClose: a,
            onCloseAfterApproval: e_,
            onContinueCreation: (e) => {
              ;("declined" === e && iC.decline(), ij(void 0), sg(!0))
            },
          })
        )
      }
      let sL = ie
      iL
        ? (sL = "website-verification")
        : sC
          ? (sL = "code" === s_ ? "code" : `email-${s_}`)
          : iO && "phone" === se && (sL = sA === eN.W.code ? "code" : sA.id)
      let sR = (e, i) => {
        let s = void 0 !== i && i
        return (0, t.jsxs)(eD, {
          manager: i0,
          stepKey: s ? "website-dns" : sL,
          showHeading: !s,
          busy: ix,
          pendingVerification: sP,
          title:
            sC && "code" === s_
              ? (0, t.jsx)(ea.k, { step: s_, destination: e4.values.email ?? void 0 })
              : (0, t.jsx)(f.A, {
                  ...sS,
                  values: {
                    name: (0, t.jsx)("bdi", { children: e4.name }),
                    target: (0, t.jsx)(
                      "bdi",
                      { className: "wrap-anywhere", children: sC ? e4.values.email : sk },
                      "target",
                    ),
                    phone: (0, t.jsx)(
                      "bdi",
                      { className: sS === eN.W.code ? "block whitespace-nowrap" : "whitespace-nowrap", children: sk },
                      "phone",
                    ),
                  },
                }),
          onCancel: () => {
            ix || iE("draft")
          },
          showPreview: "type" !== ie,
          footer: "type" === ie ? (0, t.jsx)(ee, { inDialog: !0 }) : null,
          previewNotice:
            null != eP
              ? (0, t.jsx)(f.A, {
                  id: "businessProfiles.creation.session.previewNotice",
                  defaultMessage: "Preview shows saved details. Changes appear here after all required checks pass.",
                  description:
                    "Explains that pending edits remain in the form while the preview shows only business details accepted by the server.",
                })
              : null,
          children: [
            (0, t.jsx)(X.L, {
              discardCreation: !0,
              busy: ix,
              dirty: !0,
              onDiscard: () => sh(!1),
              errorMessage: iM,
              allowNavigation: () => iD.current || !!ek?.(),
              blockSearchChanges: !0,
            }),
            "type" !== ie || null == eP || eP.isNameFirst()
              ? null
              : (0, t.jsx)(G.c, {
                  draftOnly: !0,
                  manager: { ...i0, fields: i0.fields.filter(e6) },
                  drafts: {},
                  onDraftChange: su,
                }),
            "type" === ie && eP?.isNameFirst() && null != iS
              ? (0, t.jsx)(x.$, {
                  color: "secondary",
                  disabled: ix,
                  onClick: () => {
                    sh()
                  },
                  children: (0, t.jsx)(f.A, { ...eN.W.changeName }),
                })
              : null,
            "type" === ie
              ? (0, t.jsx)(H.t, {
                  variant: "outlined",
                  dividers: !1,
                  children: ["local_business", "ecommerce"].map((e) =>
                    (0, t.jsxs)(
                      "button",
                      {
                        type: "button",
                        disabled: ix || (null != eP && !e4.name.trim()),
                        className:
                          "relative flex w-full items-center gap-4 px-4 py-4 text-start after:pointer-events-none after:absolute after:start-14 after:end-4 after:bottom-0 after:h-px after:bg-border-subtle last:after:hidden hover:bg-primary-ghost-hover disabled:cursor-default disabled:opacity-50",
                        onClick: () => {
                          let i = { ...e4, businessType: e }
                          if ((st(i), null != eP)) {
                            ;(ic(!0), ik(null))
                            let s = eP.start(eP.isNameFirst() ? null : e)
                            ;(eP.savePending(i, "type"),
                              s
                                .then(async (s) => {
                                  let t = si(s)
                                  if (
                                    eP.isNameFirst() &&
                                    null != t.details.business_type &&
                                    t.details.business_type !== e
                                  ) {
                                    let e = eP.start(null, t.session_id)
                                    ;(eP.savePending(i, "type"), (t = si(await e)))
                                  }
                                  ;(eG(t, "name", i.name) || si(await eP.accept("name", i.name)),
                                    null == t.details.business_type && si(await eP.start(e)),
                                    ii("website"),
                                    eP.savePending(i, "website"))
                                })
                                .catch(ss)
                                .finally(() => ic(!1)))
                          } else sa("website")
                        },
                        children: [
                          "local_business" === e && (0, t.jsx)(y.I, { asset: W }),
                          "ecommerce" === e && (0, t.jsx)(y.I, { asset: B }),
                          (0, t.jsxs)("span", {
                            className: "flex min-w-0 flex-1 flex-col",
                            children: [
                              (0, t.jsx)("span", {
                                className: "text-base",
                                children: (0, t.jsx)(f.A, {
                                  id: "businessProfiles.creation.type.option.label",
                                  defaultMessage:
                                    "{type, select, local_business {At a physical location} ecommerce {Through an online store} other {Through a service}}",
                                  description:
                                    "Business profile creation type options. Physical location is for customers visiting the business; online store is for online retail; service is for visiting customers or remote work.",
                                  values: { type: e },
                                }),
                              }),
                              (0, t.jsx)("span", {
                                className: "text-sm text-secondary",
                                children: (0, t.jsx)(f.A, {
                                  id: "businessProfiles.creation.type.option.description",
                                  defaultMessage:
                                    "{type, select, local_business {Customers visit a store, restaurant, office, or other location.} ecommerce {Customers buy from your website or marketplace.} other {You visit customers or provide services remotely.}}",
                                  description:
                                    "Supporting descriptions under the three business profile creation type choices. Type selects the relevant explanation.",
                                  values: { type: e },
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)(v.uM3, {}),
                        ],
                      },
                      e,
                    ),
                  ),
                })
              : null,
            "type" === ie && null != iS
              ? (0, t.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, t.jsx)(f.A, { ...eN.W[iS] }),
                })
              : null,
            e,
            "type" !== ie && iO && null != se
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(
                      eo.a,
                      {
                        field: se,
                        showInstructions: !1,
                        target: e4.values[se] ?? "",
                        resendAvailableAt:
                          i9?.find((e) => e.field === se)?.resend_available_at ??
                          ("phone" === se && eK?.profileId === eH?.business_profile_id
                            ? eK?.resendAvailableAt
                            : void 0),
                        verification: i9?.find(
                          (e) => e.field === se && e.target === (0, ec.Re)(se, e4.values[se] ?? ""),
                        ),
                        busy: ix,
                        initialSendError: "email" === se && iI?.target === e4.values.email ? iI?.error : void 0,
                        onSend: (e) => sr(se, e),
                        onBack: sN ? sf : void 0,
                        retryChannel: sE,
                        onVerify: (e) => sc(se, e),
                        onCheck: () =>
                          null != eP
                            ? (ic(!0),
                              eP
                                .read()
                                .then(sn)
                                .catch((e) => {
                                  throw (ss(e), e)
                                })
                                .finally(() => ic(!1)))
                            : null == eU || null == e4.profileId
                              ? Promise.resolve()
                              : (ic(!0),
                                eU
                                  .read(e4.profileId)
                                  .then(sn)
                                  .finally(() => ic(!1))),
                      },
                      `${se}:${e4.values[se]}:${i9?.find((e) => e.field === se)?.challenge_id ?? "new"}:${i9?.find((e) => e.field === se)?.resend_available_at ?? ""}`,
                    ),
                    sN
                      ? null
                      : (0, t.jsx)(x.$, {
                          type: "button",
                          color: "outlineGhost",
                          className: "self-start",
                          size: "formAction",
                          disabled: ix,
                          onClick: sf,
                          children: (0, t.jsx)(f.A, { ...eN.W.back }),
                        }),
                  ],
                })
              : null,
            "type" === ie || iL || (iO && null != se)
              ? null
              : (0, t.jsxs)("form", {
                  noValidate: !0,
                  className: "flex flex-1 flex-col gap-6 sm:flex-none",
                  onSubmit: (e) => {
                    ;(e.preventDefault(), sg())
                  },
                  children: [
                    (0, t.jsxs)("fieldset", {
                      disabled: ix && !ib,
                      className: "m-0 flex min-w-0 flex-col gap-6 border-0 p-0",
                      children: [
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            "website" === ie || "phone" === ie
                              ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)(J.Z, {
                                      draftOnly: !0,
                                      manager: sM,
                                      drafts: {},
                                      onDraftChange: su,
                                      websiteReadOnly: ib,
                                      websiteError:
                                        "website" === ie && e4.values.website?.trim() && !i4
                                          ? (0, t.jsx)(f.A, { ...K.f.invalidWebsite })
                                          : void 0,
                                    }),
                                    "phone" === ie && "ecommerce" === e4.businessType
                                      ? (0, t.jsx)("p", {
                                          children: (0, t.jsx)(f.A, {
                                            id: "businessProfiles.creation.contact.optional",
                                            defaultMessage:
                                              "Phone and email are optional. Verify any contact information you add before continuing to Persona",
                                            description:
                                              "Online stores may omit both contacts, but each supplied business contact must be verified before Persona.",
                                          }),
                                        })
                                      : null,
                                  ],
                                })
                              : null,
                            "category" === ie
                              ? (0, t.jsx)(G.c, {
                                  draftOnly: !0,
                                  manager: sM,
                                  drafts: {},
                                  onDraftChange: su,
                                  creationSuggestions: { accountId: ex, scope: is, draft: e4 },
                                })
                              : null,
                            "hours" === ie && null != sy
                              ? (0, t.jsx)(Z.O, {
                                  draftOnly: !0,
                                  profileId: "",
                                  field: sy,
                                  timezone: i0.timezone,
                                  draft: void 0,
                                  onDraftChange: (e) => su("hours", e),
                                })
                              : null,
                            "address" === ie && null != sy
                              ? (0, t.jsx)(ei.g, {
                                  draftOnly: !0,
                                  profileId: "",
                                  field: sy,
                                  draft: void 0,
                                  onDraftChange: (e) => su("address", e),
                                })
                              : null,
                            ("delivery" === ie || "returns" === ie) && null != sy
                              ? (0, t.jsx)(et.B, {
                                  draftOnly: !0,
                                  profileId: "",
                                  field: sy,
                                  currency: i0.policy_currency,
                                  draft: void 0,
                                  onDraftChange: (e) => su(sy.field_key, e),
                                })
                              : null,
                          ],
                        }),
                        "import" === ie
                          ? (0, t.jsxs)(H.t, {
                              variant: "outlined",
                              children: [
                                (0, t.jsx)($.t, {
                                  value: "yes",
                                  id: "creation-import-yes",
                                  name: "creation-import",
                                  checked: ia,
                                  onChange: () => il(!0),
                                  ariaLabel: eW.formatMessage(eN.W.importYes),
                                  label: (0, t.jsx)(f.A, { ...eN.W.importYes }),
                                  description: (0, t.jsx)(f.A, {
                                    id: "businessProfiles.creation.import.help",
                                    defaultMessage: "We’ll use these details to help set up your business profile.",
                                    description:
                                      "Explanation beneath the option to accept website-imported business details during creation.",
                                  }),
                                }),
                                (0, t.jsx)($.t, {
                                  value: "no",
                                  id: "creation-import-no",
                                  name: "creation-import",
                                  checked: !ia,
                                  onChange: () => il(!1),
                                  ariaLabel: eW.formatMessage(eN.W.importNo),
                                  label: (0, t.jsx)(f.A, { ...eN.W.importNo }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    null != iS
                      ? (0, t.jsx)("p", {
                          role: "alert",
                          className: "text-sm text-danger",
                          children: (0, t.jsx)(f.A, { ...eN.W[iS] }),
                        })
                      : null,
                    null == eP && "error" === iS && "website" === ie
                      ? (0, t.jsx)(x.$, {
                          type: "button",
                          color: "secondary",
                          disabled: ix,
                          onClick: () => sa(iX),
                          children: (0, t.jsx)(f.A, {
                            id: "businessProfiles.creation.import.manual.label",
                            defaultMessage: "Set up manually",
                            description:
                              "Recovery action after an optional website import fails during business profile creation. Keeps the entered website and continues to manual business details.",
                          }),
                        })
                      : null,
                    (0, t.jsxs)("div", {
                      className:
                        "sticky bottom-0 mt-auto flex flex-col gap-3 bg-surface-card pt-6 sm:static sm:mt-0 sm:flex-row sm:items-start sm:gap-2 sm:pt-0",
                      children: [
                        (0, t.jsx)(x.$, {
                          ...e3,
                          type: "button",
                          color: "outlineGhost",
                          size: "formAction",
                          disabled: eB || io,
                          onClick: (e) => {
                            im ? (ip(void 0), e.currentTarget.form?.querySelector("#business-website")?.focus()) : sf()
                          },
                          children: (0, t.jsx)(f.A, { ...eN.W.back }),
                        }),
                        (0, t.jsx)(x.$, {
                          ...e3,
                          type: "submit",
                          size: "formAction",
                          disabled: ix || !i4,
                          disabledAppearance: ib ? "unchanged" : "dimmed",
                          loading: ix,
                          sizingLabels: ig ? eW.formatMessage(sD) : void 0,
                          "aria-busy": ix,
                          "aria-label": eW.formatMessage(sD),
                          children: (0, t.jsx)(f.A, { ...sD }),
                        }),
                      ],
                    }),
                  ],
                }),
            null != iN
              ? (0, t.jsx)(el.C, {
                  kind: "discard",
                  busy: ix,
                  onClose: () => iE(null),
                  onConfirm: () => void sh(),
                  errorMessage: iM,
                })
              : null,
          ],
        })
      }
      if ("website" === ie && iL && null != eP) {
        let e,
          i,
          s,
          n,
          r = e4.values.website ?? ""
        eb[117] !== r ? ((e = (0, ec.DX)(r)), (eb[117] = r), (eb[118] = e)) : (e = eb[118])
        let a = e4.values.website ?? ""
        return (
          eb[119] !== a ? ((i = (0, ec.DX)(a)), (eb[119] = a), (eb[120] = i)) : (i = eb[120]),
          eb[121] !== e4.values.website || eb[122] !== ss || eb[123] !== eP
            ? ((s = (e) =>
                eP.discoverWebsite((0, ec.DX)(e4.values.website ?? ""), e).catch((e) => {
                  throw ("expired" === eZ(e) && ss(e), e)
                })),
              (eb[121] = e4.values.website),
              (eb[122] = ss),
              (eb[123] = eP),
              (eb[124] = s))
            : (s = eb[124]),
          eb[125] !== si || eb[126] !== ss || eb[127] !== eP
            ? ((n = (e, i) => (
                ic(!0),
                eP
                  .cancelShopify(e, i)
                  .then((e) => {
                    si(e)
                  })
                  .catch((e) => {
                    throw (ss(e), e)
                  })
                  .finally(() => ic(!1))
              )),
              (eb[125] = si),
              (eb[126] = ss),
              (eb[127] = eP),
              (eb[128] = n))
            : (n = eb[128]),
          (0, t.jsx)(
            eY,
            {
              accountId: ex,
              acceptedSession: iQ,
              renderStep: sR,
              website: i,
              verification: iQ?.website_verification,
              busy: ix,
              onDiscover: s,
              onStartShopify: async (e, i) => {
                if (null == iQ) throw Error("Creation session is unavailable")
                return (
                  ic(!0),
                  (async () => {
                    eP.preserveWebsiteHandoff(e4)
                    let s = await eP.startShopify(e, i),
                      t = (function (e, i, s) {
                        let t = e.session ?? e.name_first_session,
                          n = t?.shopify_verification
                        if (
                          t?.session_id !== i ||
                          n?.status !== "pending" ||
                          new URL(n.website).href !== new URL(s).href ||
                          !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.myshopify\.com$/.test(n.myshopify_domain) ||
                          !Number.isFinite(Date.parse(n.expires_at)) ||
                          Date.parse(n.expires_at) <= Date.now() ||
                          null == e.oauth_url ||
                          e.oauth_url.length > 8192
                        )
                          throw Error("Shopify verification changed")
                        let r = new URL(e.oauth_url)
                        if (
                          ![
                            "https://connect.ads.openai.com",
                            "https://ads-manager-shopify.gateway.unified-0s.internal.api.openai.org",
                          ].includes(r.origin) ||
                          "/auth/business-profile/start" !== r.pathname ||
                          r.username ||
                          r.password ||
                          r.hash ||
                          1 !== r.searchParams.getAll("flow_id").length ||
                          r.searchParams.get("flow_id") !== n.id ||
                          1 !== r.searchParams.getAll("shop").length ||
                          r.searchParams.get("shop") !== n.myshopify_domain
                        )
                          throw Error("Shopify verification cannot start")
                        return r.href
                      })(s, iQ.session_id, (0, ec.DX)(e4.values.website ?? ""))
                    ;(si(s),
                      eP.preserveWebsiteHandoff(e4),
                      i.throwIfAborted(),
                      eP.throwIfAborted(),
                      window.location.assign(t))
                  })()
                    .catch(async (e) => {
                      if (!i.aborted) {
                        try {
                          si(await eP.read(i))
                        } catch {}
                        ss(e)
                      }
                      throw e
                    })
                    .finally(() => ic(!1))
                )
              },
              onCancelShopify: n,
              onStart: async () => {
                ;(ic(!0),
                  await sb()
                    .catch((e) => {
                      throw (ss(e), e)
                    })
                    .finally(() => ic(!1)))
              },
              onCheck: (e) => {
                ic(!0)
                let i = (i) => {
                  let s = ez(i)?.website_verification
                  if (s?.challenge_id !== e) throw Error("DNS challenge changed")
                  let t = si(i)
                  return "verified" === s.status && eG(t, "website", s.website) && sp(t, e4.values.website ?? "")
                }
                return eP
                  .checkWebsite(e)
                  .then(i)
                  .catch(async (e) => {
                    try {
                      if (i(await eP.read())) return !0
                    } catch {}
                    throw e
                  })
                  .then(async (e) => {
                    e && (await sm())
                  })
                  .catch((e) => {
                    throw (ss(e), e)
                  })
                  .finally(() => ic(!1))
              },
              onBack: sf,
            },
            `${iQ?.session_id}:${e}`,
          )
        )
      }
      let sO = null == sT || i_?.isPending ? sR() : null
      return (
        eb[129] !== sT || eb[130] !== sO
          ? ((em = (0, t.jsxs)(t.Fragment, { children: [sO, sT] })), (eb[129] = sT), (eb[130] = sO), (eb[131] = em))
          : (em = eb[131]),
        em
      )
    }
    function e6(e) {
      return "name" === e.field_key
    }
    function e8(e) {
      if ("expired" === eZ(e)) throw e
    }
    function e7(e) {
      return "phone" === e.field
    }
    var e9 = s("RNul"),
      ie = s("zCGz"),
      ii = s("f0dk"),
      is = s("u9lE"),
      it = s("mRB3")
    function ir(e) {
      let i,
        s,
        r,
        a = (0, n.c)(15),
        { draft: l, status: o, onComplete: c, onCancelSubmission: d, onCheckStatus: u, onExit: h, busy: p } = e
      return (
        a[0] !== p || a[1] !== l || a[2] !== d || a[3] !== o
          ? ((i =
              "under_review" === o
                ? (0, t.jsx)(ek.k, {
                    order: 1,
                    children: (0, t.jsx)(is.hp, {
                      receivedTitle: (0, t.jsx)(f.A, {
                        id: "businessProfiles.creation.pending.received.title",
                        defaultMessage: "Submission received",
                        description: "First completed status in a confirmed pending business profile creation review.",
                      }),
                      receivedDescription:
                        null == d
                          ? (0, t.jsx)(f.A, {
                              id: "businessProfiles.creation.pending.received.description",
                              defaultMessage: "We received your submission for {name}.",
                              description:
                                "Acknowledgement shown only after the creation service confirms receipt. Name is the submitted business name.",
                              values: { name: l.name },
                            })
                          : (0, t.jsx)(is.Vj, { kind: "submission", name: l.name, onWithdraw: d, disabled: p }),
                      reviewTitle: (0, t.jsx)(f.A, {
                        id: "businessProfiles.creation.pending.review.title",
                        defaultMessage: "Review in progress",
                        description: "Current status while a submitted business profile is awaiting a decision.",
                      }),
                      reviewDescription: (0, t.jsx)(f.A, {
                        id: "businessProfiles.creation.pending.review.description",
                        defaultMessage: "We’re checking the business information you provided.",
                        description:
                          "Explanation of pending review for a submitted business profile; the profile is not approved yet.",
                      }),
                      decisionTitle: (0, t.jsx)(f.A, {
                        id: "businessProfiles.creation.pending.decision.title",
                        defaultMessage: "Decision reached",
                        description: "Future, incomplete status in the business profile creation review checklist.",
                      }),
                      decisionDescription: (0, t.jsx)(f.A, {
                        id: "businessProfiles.creation.pending.decision.privateDescription",
                        defaultMessage: "We’ll update your verification status here. Your profile stays private.",
                        description:
                          "Explains where to find the server-owned review result and that the creation pilot does not publish the business profile.",
                      }),
                    }),
                  })
                : null),
            (a[0] = p),
            (a[1] = l),
            (a[2] = d),
            (a[3] = o),
            (a[4] = i))
          : (i = a[4]),
        a[5] !== p || a[6] !== l || a[7] !== u || a[8] !== c || a[9] !== h || a[10] !== o
          ? ((s =
              "approved" === o && null != c
                ? (0, t.jsxs)(is.Um, {
                    manageLabel: (0, t.jsx)(f.A, { ...eN.W.manage }),
                    onManage: () => c(),
                    children: [
                      (0, t.jsx)(is.xK, {
                        onClick: () => c("ecommerce" === l.businessType ? "products" : "edit/hours"),
                        label: (0, t.jsx)(f.A, {
                          id: "businessProfiles.creation.approved.next.label",
                          defaultMessage: "{online, select, yes {Add products} other {Confirm business hours}}",
                          description:
                            "First recommendation after confirmed business creation approval. Online retailers can open product feeds when enabled; local businesses can check opening hours.",
                          values: { online: "ecommerce" === l.businessType ? "yes" : "no" },
                        }),
                        description: (0, t.jsx)(f.A, {
                          id: "businessProfiles.creation.approved.next.description",
                          defaultMessage:
                            "{online, select, yes {Show customers what you sell} other {Show customers what to expect}}",
                          description:
                            "Supporting copy for the first recommended action after business creation approval, selected by whether the business is an online retailer.",
                          values: { online: "ecommerce" === l.businessType ? "yes" : "no" },
                        }),
                      }),
                      (0, t.jsx)(is.xK, {
                        onClick: () => c("edit/about"),
                        label: (0, t.jsx)(f.A, {
                          id: "businessProfiles.creation.approved.about.label",
                          defaultMessage: "Edit your business description",
                          description:
                            "Recommendation after confirmed business creation approval that opens the existing About editor.",
                        }),
                        description: (0, t.jsx)(f.A, {
                          id: "businessProfiles.creation.approved.about.description",
                          defaultMessage: "Tell customers what makes {name} unique",
                          description:
                            "Supporting copy for the description-editing recommendation after confirmed approval. Name is the business name.",
                          values: { name: l.name },
                        }),
                      }),
                    ],
                  })
                : (0, t.jsxs)(ek.k, {
                    className: "flex flex-wrap gap-2",
                    order: 3,
                    children: [
                      "approved" === o
                        ? (0, t.jsx)(x.$, {
                            type: "button",
                            size: "formAction",
                            radius: "full",
                            onClick: h,
                            children: (0, t.jsx)(f.A, { ...eN.W.backToChat }),
                          })
                        : null,
                      "under_review" === o && null != u
                        ? (0, t.jsx)(x.$, {
                            type: "button",
                            color: "secondary",
                            size: "formAction",
                            radius: "full",
                            disabled: p,
                            onClick: u,
                            children: (0, t.jsx)(f.A, { ...eN.W.checkStatus }),
                          })
                        : null,
                    ],
                  })),
            (a[5] = p),
            (a[6] = l),
            (a[7] = u),
            (a[8] = c),
            (a[9] = h),
            (a[10] = o),
            (a[11] = s))
          : (s = a[11]),
        a[12] !== i || a[13] !== s
          ? ((r = (0, t.jsxs)(t.Fragment, { children: [i, s] })), (a[12] = i), (a[13] = s), (a[14] = r))
          : (r = a[14]),
        r
      )
    }
    function ia(e) {
      let i,
        s,
        r,
        a,
        l,
        o,
        d,
        u,
        p,
        m,
        b,
        g,
        y,
        v,
        w,
        _,
        C,
        j,
        A,
        S,
        k,
        I,
        P = (0, n.c)(172),
        {
          accountId: N,
          contactVerificationEnabled: E,
          userId: D,
          profileId: M,
          draft: T,
          onPersist: L,
          onCancel: R,
          onEdit: O,
          onComplete: B,
          completedCreation: W,
        } = e,
        U = (0, F.jE)(),
        [V, H] = (0, c.useState)(W),
        [G, $] = (0, c.useState)(null),
        [J, K] = (0, h.ok)()
      P[0] !== N ? ((i = () => (0, eL.Y)(N)), (P[0] = N), (P[1] = i)) : (i = P[1])
      let [Q] = (0, c.useState)(i)
      ;(P[2] !== Q ? ((s = () => Q.attach()), (r = [Q]), (P[2] = Q), (P[3] = s), (P[4] = r)) : ((s = P[3]), (r = P[4])),
        (0, c.useEffect)(s, r))
      let [Z, Y] = (0, c.useState)(),
        ee = (0, c.useRef)(M ?? T?.profileId),
        ei = (0, c.useRef)(!1),
        es = M ?? Z?.creation?.business_profile_id ?? T?.profileId,
        [et, en] = (0, c.useState)(!1),
        [er, ea] = (0, c.useState)(!1),
        [ed, eu] = (0, c.useState)(!1),
        [eh, ep] = (0, c.useState)(null),
        [em, eb] = (0, c.useState)(null),
        eg = null != T && null == (0, ec.Rw)(T, void 0, E)
      P[5] !== et || P[6] !== em || P[7] !== J
        ? ((a = (e) =>
            !!(
              "1" !== J.get("created") &&
              !et &&
              null == em &&
              "error" !== e.state.status &&
              e.state.data?.creation?.is_draft !== !0 &&
              (e.state.data?.creation?.status !== "under_review" ||
                e.state.data?.creation?.canonical_target?.disposition !== "existing_profile") &&
              ["pending", "under_review"].includes(e.state.data?.creation?.status ?? "")
            ) && 5e3),
          (P[5] = et),
          (P[6] = em),
          (P[7] = J),
          (P[8] = a))
        : (a = P[8])
      let {
          data: ex,
          isError: ey,
          isFetchedAfterMount: ev,
          refetch: ew,
        } = (0, z.I)({
          queryKey: ["business-profiles", N, "creation", D, es ?? Q.submissionKey],
          queryFn:
            null != es || eg
              ? async (e) => {
                  let { signal: i } = e
                  if (null != T && null == Z) {
                    if (null != es) {
                      let e = await Q.read(es, i)
                      if (null != e.creation && (!0 !== e.creation.is_draft || "pending" !== e.creation.status))
                        return (eW(e, !0), e)
                      if (null != (0, ec.Rw)(T, e.creation, E)) return e
                    }
                    return eF(T)
                  }
                  if (null == es) throw Error("A business profile is required")
                  return Q.read(es, i)
                }
              : q.hT,
          initialData: Z?.creation?.business_profile_id === es ? Z : void 0,
          enabled: null == V,
          retry: !1,
          staleTime: 0,
          refetchInterval: a,
        }),
        e_ = ex?.creation ?? Z?.creation,
        eC = "1" === J.get("created")
      P[9] !== e_ || P[10] !== es || P[11] !== ey || P[12] !== ev || P[13] !== eC || P[14] !== V
        ? ((l =
            V ??
            (eC && ev && !ey && null != e_ && e_.business_profile_id === es && null != (0, it.jp)(e_) ? e_ : void 0)),
          (P[9] = e_),
          (P[10] = es),
          (P[11] = ey),
          (P[12] = ev),
          (P[13] = eC),
          (P[14] = V),
          (P[15] = l))
        : (l = P[15])
      let ej = l,
        eA = e_?.status === "rejected" ? e_.rejection_reason : null,
        eS =
          "persona_declined" === eA || "persona_failed" === eA || "persona_expired" === eA || "content_rejected" === eA,
        ek = e_?.status === "approved" ? e_.business_profile_id : null
      ;(P[16] !== N || P[17] !== ek || P[18] !== U
        ? ((o = () => {
            null != ek && U.invalidateQueries({ queryKey: ["business-profiles", N] })
          }),
          (d = [N, ek, U]),
          (P[16] = N),
          (P[17] = ek),
          (P[18] = U),
          (P[19] = o),
          (P[20] = d))
        : ((o = P[19]), (d = P[20])),
        (0, c.useEffect)(o, d))
      let eI =
          G ??
          T ??
          (null == e_
            ? null
            : {
                name: e_.details.name,
                profileId: e_.business_profile_id,
                contactVerificationRequired: e_.contact_verification_required,
                businessType: e_.details.business_type,
                values: e_.details.values,
              }),
        eP = null == e_ || !0 === e_.is_draft,
        eE = eP || e_?.status === "pending",
        eM =
          null != e_
            ? !0 === e_.contact_verification_required
            : eI?.contactVerificationRequired === !0 || (eI?.profileId == null && E),
        eT = null == eI ? void 0 : (0, ec.Rw)(eI, e_, E),
        eR = e_?.contact_verifications?.find(
          (e) => e.field === eT && e.target === (0, ec.Re)(e.field, eI?.values[e.field] ?? ""),
        ),
        eO = et || (eE && er),
        eB = (null != T || null != G) && (null == e_ || (!0 === e_.is_draft && "pending" === e_.status)) && null == eT
      function eW(e, i) {
        if ((Q.throwIfAborted(), Y(e), null == e.creation)) return
        let s = e.creation.business_profile_id
        ;((ee.current = s),
          U.setQueryData(["business-profiles", N, "creation", D, s], e),
          U.invalidateQueries({ queryKey: ["business-profiles", N, "creations", D] }),
          void 0 !== i && i && null != (0, it.jp)(e.creation) ? ((ei.current = !0), H(e.creation), L(s, !0)) : L(s))
      }
      function eF(e) {
        return (
          eu(!0),
          en(!0),
          ep(null),
          Q.launchLegacy(e, ee.current ?? e.profileId, "defer_persona")
            .then((e) => {
              if (null == e.creation) throw Error("The business profile was not created")
              return (eW(e, !0), e)
            })
            .catch((e) => {
              throw (e instanceof ef.fk && [400, 422].includes(e.status) && eu(!1), ep(iu(e)), e)
            })
            .finally(() => en(!1))
        )
      }
      let eq = async function (e) {
          let { afterPersona: i } = void 0 === e ? {} : e,
            s = ee.current ?? es
          null != s && (((void 0 !== i && i) || !eP) && (await Q.resume(s)), await ew({ throwOnError: !0 }))
        },
        eU = function () {
          ;(en(!0),
            ep(null),
            eq()
              .catch((e) => ep(iu(e)))
              .finally(() => en(!1)))
        },
        ez = async function () {
          if (null == eI) throw Error("A business draft is required")
          let e = await Q.save(eI, ee.current ?? es)
          if ((eW(e), null == e.creation)) throw Error("The draft was not saved")
          return e.creation.business_profile_id
        },
        eV = function (e, i) {
          return (
            en(!0),
            ep(null),
            (eP ? ez() : Promise.resolve(ee.current ?? es))
              .then((s) => {
                if (null == s) throw Error("A business draft is required")
                return Q.send(s, e, i)
              })
              .then(eW)
              .catch(async (e) => {
                throw (null != ee.current && eW(await Q.read(ee.current)), e)
              })
              .finally(() => en(!1))
          )
        },
        eH = function (e, i) {
          let s = e_?.contact_verifications?.find((i) => i.field === e),
            t = ee.current ?? es
          return null == t || s?.challenge_id == null
            ? Promise.resolve(!1)
            : (en(!0),
              Q.verify(t, e, s.challenge_id, i)
                .then(async (i) => {
                  eW(i)
                  let s = i.creation?.contact_verifications?.some((i) => i.field === e && "verified" === i.status) ?? !1
                  return (
                    s &&
                      null != eI &&
                      null == (0, ec.Rw)(eI, i.creation, E) &&
                      (await eF({ ...eI, profileId: t }).catch(id)),
                    s
                  )
                })
                .catch(async (e) => {
                  throw (eW(await Q.read(t)), e)
                })
                .finally(() => en(!1)))
        },
        eG = function (e) {
          return null == eI || eO || (eE && null != eT)
            ? Promise.resolve(!1)
            : (eu(!0),
              en(!0),
              ep(null),
              (eP && eM ? ez().then((e) => Q.launch(e, !0)) : Q.launchLegacy(eI, ee.current ?? es))
                .then(async (i) =>
                  (eW(i), null == i.launch_url)
                    ? (i.creation?.status === "pending" && ep("error"), !1)
                    : (await e(i.launch_url), !0),
                )
                .catch(async (e) => {
                  e instanceof ef.fk && [400, 422].includes(e.status) && eu(!1)
                  let i = iu(e)
                  if ((ep(i), "error" !== i)) return !1
                  throw (null != ee.current && eW(await Q.read(ee.current)), e)
                })
                .finally(() => en(!1)))
        },
        e$ = function () {
          return eO
            ? Promise.resolve(!1)
            : (en(!0),
              ep(null),
              Q.recoverPendingSubmission()
                .then(async (e) => {
                  let i = e?.creation?.business_profile_id
                  if (null != e && null == i) throw Error("The pending submission could not be recovered")
                  if (null != i) {
                    let e = await Q.cancel(i)
                    if (e.creation?.status !== "cancelled") throw Error("The pending submission was not cancelled")
                    U.invalidateQueries({ queryKey: ["business-profiles", N], refetchType: "none" })
                  }
                  return (Q.throwIfAborted(), (ei.current = !0), !0)
                })
                .catch((e) => (ep(iu(e)), !1))
                .finally(() => en(!1)))
        },
        eJ = function () {
          if (eO || null == eI) return
          if ("discard" === em)
            return void e$().then((e) => {
              e && R()
            })
          let e = ee.current ?? es
          null != e &&
            (en(!0),
            ep(null),
            U.cancelQueries({ queryKey: ["business-profiles", N, "creation", D, e] })
              .then(() => Q.cancel(e))
              .then((e) => {
                ;(eW(e), e.creation?.status === "cancelled" && R())
              })
              .catch(() => ep("error"))
              .finally(() => {
                ;(en(!1), eb(null))
              }))
        }
      if (null != ej) {
        let e,
          i,
          s,
          n,
          r,
          a,
          l,
          o = "approved" !== ej.status
        P[21] !== ej.details.business_type || P[22] !== ej.details.name || P[23] !== ej.details.values
          ? ((e = (0, ec.Gk)({
              name: ej.details.name,
              businessType: ej.details.business_type,
              values: ej.details.values,
            })),
            (P[21] = ej.details.business_type),
            (P[22] = ej.details.name),
            (P[23] = ej.details.values),
            (P[24] = e))
          : (e = P[24])
        let c = e
        return (
          P[25] !== ej.details.name
            ? ((i = (0, t.jsx)(f.A, {
                id: "businessProfiles.creation.completed.title",
                defaultMessage: "You’ve created {name}",
                description: "Heading confirming that the business profile was created. The name is the business name.",
                values: { name: ej.details.name },
              })),
              (P[25] = ej.details.name),
              (P[26] = i))
            : (i = P[26]),
          P[27] !== o
            ? ((s =
                o &&
                (0, t.jsx)(f.A, {
                  id: "businessProfiles.creation.completed.draftVerificationDescription",
                  defaultMessage:
                    "It’s saved as a draft for now. Go to your business overview to continue verification or check its status.",
                  description:
                    "Tells the creator their profile is a draft and where to continue verification or check its status.",
                })),
              (P[27] = o),
              (P[28] = s))
            : (s = P[28]),
          P[29] !== i || P[30] !== s
            ? ((n = (0, t.jsx)(ii.B, { title: i, description: s })), (P[29] = i), (P[30] = s), (P[31] = n))
            : (n = P[31]),
          P[32] !== ej.business_profile_id || P[33] !== B
            ? ((r = (e) => B(ej.business_profile_id, e)), (P[32] = ej.business_profile_id), (P[33] = B), (P[34] = r))
            : (r = P[34]),
          P[35] !== o || P[36] !== r
            ? ((a = (0, t.jsx)(ii.U, { pendingCreation: o, onManageProfile: r })),
              (P[35] = o),
              (P[36] = r),
              (P[37] = a))
            : (a = P[37]),
          P[38] !== c || P[39] !== R || P[40] !== o || P[41] !== n || P[42] !== a
            ? ((l = (0, t.jsx)(eD, {
                manager: c,
                stepKey: "complete",
                title: null,
                outcome: !0,
                isDraft: o,
                onCancel: R,
                header: n,
                children: a,
              })),
              (P[38] = c),
              (P[39] = R),
              (P[40] = o),
              (P[41] = n),
              (P[42] = a),
              (P[43] = l))
            : (l = P[43]),
          l
        )
      }
      if (null == eI || (eC && !ev)) {
        let e, i, s, n
        return (
          P[44] !== ey || P[45] !== ew
            ? ((e = ey
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("p", { role: "alert", children: (0, t.jsx)(f.A, { ...eN.W.error }) }),
                      (0, t.jsx)(x.$, {
                        size: "formAction",
                        onClick: () => void ew(),
                        children: (0, t.jsx)(f.A, { ...eN.W.retry }),
                      }),
                    ],
                  })
                : (0, t.jsx)(e9.y, {})),
              (P[44] = ey),
              (P[45] = ew),
              (P[46] = e))
            : (e = P[46]),
          P[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, t.jsx)(f.A, { ...eN.W.backToChat })), (P[47] = i))
            : (i = P[47]),
          P[48] !== R
            ? ((s = (0, t.jsx)(x.$, { size: "formAction", color: "outlineGhost", onClick: R, children: i })),
              (P[48] = R),
              (P[49] = s))
            : (s = P[49]),
          P[50] !== e || P[51] !== s
            ? ((n = (0, t.jsxs)("div", { className: "m-auto flex flex-col items-center gap-4", children: [e, s] })),
              (P[50] = e),
              (P[51] = s),
              (P[52] = n))
            : (n = P[52]),
          n
        )
      }
      if (e_?.is_draft === !0 && null == T && null == G)
        return (0, t.jsx)(e4, {
          accountId: N,
          contactVerificationEnabled: eM,
          name: eI.name,
          initialDraft: eI,
          initialStep: "phone",
          onCancel: R,
          onReview: (e) => {
            ;($(e), eF(e).catch(ic))
          },
        })
      if (eB && null == eh && !ey) {
        let e
        return (
          P[53] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => ei.current), (P[53] = e)) : (e = P[53]),
          (0, t.jsx)(e4, {
            accountId: N,
            contactVerificationEnabled: eM,
            name: eI.name,
            initialDraft: eI,
            initialStep: (0, ec.Cu)(eI).at(-1),
            submitting: !0,
            allowNavigation: e,
            onCancel: R,
            onReview: (e) => {
              eF(e).catch(io)
            },
          })
        )
      }
      let eK = (0, ec.Gk)(eI),
        eQ = e_?.status === "approved",
        eZ =
          e_?.status === "under_review" && e_.canonical_target?.disposition === "existing_profile"
            ? e_.canonical_target.target_business_profile_id
            : null,
        eX = null != eZ,
        eY = eE && !eX && null == eT,
        e1 = eX ? "matched_existing" : (e_?.status ?? "verify")
      eQ &&
        (eK.profile = {
          ...eK.profile,
          business_profile_id: e_.business_profile_id,
          relationship: "owner",
          can_manage: !0,
        })
      let e0 = eB ? eN.W.submitFailureTitle : eN.W.verifyTitle
      if (
        (eX && (e0 = eN.W.matchedTitle),
        eX || e_?.status !== "under_review" || (e0 = eN.W.pendingTitle),
        e_?.status === "approved" && (e0 = eN.W.approvedTitle),
        e_?.status === "cancelled" && (e0 = eN.W.cancelledTitle),
        eX)
      ) {
        let e
        ;(P[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("p", { children: (0, t.jsx)(f.A, { ...eN.W.matchedDescription }) })), (P[54] = e))
          : (e = P[54]),
          (u = e))
      } else if (eQ) {
        let e
        ;(P[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("p", {
              className: "text-secondary",
              children: (0, t.jsx)(f.A, { ...eN.W.approvedDescription }),
            })),
            (P[55] = e))
          : (e = P[55]),
          (u = e))
      } else if (e_?.status === "rejected" || e_?.status === "cancelled") {
        let e
        ;(P[56] !== eS || P[57] !== eA
          ? ((e = (0, t.jsx)("p", {
              className: "text-secondary",
              children: eS
                ? (0, t.jsx)(f.A, { ...eN.W.outcomeDescription, values: { reason: eA } })
                : (0, t.jsx)(f.A, { ...eN.W.rejectedDescription }),
            })),
            (P[56] = eS),
            (P[57] = eA),
            (P[58] = e))
          : (e = P[58]),
          (u = e))
      } else if (eE && !eB) {
        let e, i, s
        ;(P[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("p", {
              className: "text-secondary",
              children: (0, t.jsx)(f.A, { ...eN.W.verifyDescription }),
            })),
            (P[59] = e))
          : (e = P[59]),
          P[60] !== eY
            ? ((i = eY
                ? (0, t.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, t.jsx)(f.A, { ...eN.W.privateDescription }),
                  })
                : null),
              (P[60] = eY),
              (P[61] = i))
            : (i = P[61]),
          P[62] !== i
            ? ((s = (0, t.jsxs)("div", { className: "flex flex-col gap-3", children: [e, i] })),
              (P[62] = i),
              (P[63] = s))
            : (s = P[63]),
          (u = s))
      }
      let e2 = e_?.is_draft === !0 ? "draft" : e1,
        e5 = !eQ,
        e3 = (e_?.status === "under_review" && !eX) || eQ,
        e6 = eE && er,
        e8 = eY ? "summary" : "form"
      ;(P[64] !== e_?.status || P[65] !== eI || P[66] !== eA || P[67] !== e0
        ? ((p =
            e_?.status === "rejected"
              ? (0, t.jsx)(f.A, { ...eN.W.outcomeTitle, values: { reason: eA ?? "unknown" } })
              : (0, t.jsx)(f.A, { ...e0, values: { name: (0, t.jsx)("bdi", { children: eI.name }) } })),
          (P[64] = e_?.status),
          (P[65] = eI),
          (P[66] = eA),
          (P[67] = e0),
          (P[68] = p))
        : (p = P[68]),
        P[69] !== eQ ? ((m = eQ ? (0, t.jsx)(is.EQ, {}) : void 0), (P[69] = eQ), (P[70] = m)) : (m = P[70]),
        P[71] !== eO || P[72] !== e_ || P[73] !== R || P[74] !== eb
          ? ((b = () => {
              eO || (null == e_ ? eb("discard") : R())
            }),
            (P[71] = eO),
            (P[72] = e_),
            (P[73] = R),
            (P[74] = eb),
            (P[75] = b))
          : (b = P[75]))
      let e7 = null == e_
      return (
        P[76] === Symbol.for("react.memo_cache_sentinel") ? ((g = () => ei.current), (P[76] = g)) : (g = P[76]),
        P[77] !== eh
          ? ((y = null != eh ? (0, t.jsx)(f.A, { ...eN.W[eh] }) : void 0), (P[77] = eh), (P[78] = y))
          : (y = P[78]),
        P[79] !== eO || P[80] !== e$ || P[81] !== e7 || P[82] !== y
          ? ((v = (0, t.jsx)(X.L, {
              discardCreation: !0,
              dirty: e7,
              busy: eO,
              onDiscard: e$,
              allowNavigation: g,
              errorMessage: y,
            })),
            (P[79] = eO),
            (P[80] = e$),
            (P[81] = e7),
            (P[82] = y),
            (P[83] = v))
          : (v = P[83]),
        P[84] !== eW ||
        P[85] !== N ||
        P[86] !== eO ||
        P[87] !== ed ||
        P[88] !== et ||
        P[89] !== eT ||
        P[90] !== eR ||
        P[91] !== e_?.is_draft ||
        P[92] !== eI ||
        P[93] !== ee ||
        P[94] !== eP ||
        P[95] !== eh ||
        P[96] !== es ||
        P[97] !== eG ||
        P[98] !== eB ||
        P[99] !== O ||
        P[100] !== eq ||
        P[101] !== eV ||
        P[102] !== Q ||
        P[103] !== en ||
        P[104] !== eb ||
        P[105] !== ea ||
        P[106] !== eY ||
        P[107] !== eF ||
        P[108] !== eH ||
        P[109] !== eE
          ? ((w = eE
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    eY
                      ? null
                      : (0, t.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, t.jsx)(f.A, { ...eN.W.privateDescription }),
                        }),
                    eE && null != eT
                      ? (0, t.jsx)(
                          eo.a,
                          {
                            field: eT,
                            target: eI.values[eT] ?? "",
                            verification: eR,
                            busy: et,
                            onSend: (e) => eV(eT, e),
                            onVerify: (e) => eH(eT, e),
                            onCheck: () =>
                              null == es
                                ? Promise.resolve()
                                : (en(!0),
                                  Q.read(es)
                                    .then(eW)
                                    .finally(() => en(!1))),
                          },
                          `${eT}:${eI.values[eT]}:${eR?.challenge_id ?? "new"}:${eR?.resend_available_at ?? ""}`,
                        )
                      : null,
                    (0, t.jsxs)("div", {
                      className: eY
                        ? "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
                        : "flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-2",
                      children: [
                        eB && et ? (0, t.jsx)(e9.y, {}) : null,
                        eB && !et
                          ? (0, t.jsx)(x.$, {
                              size: "formAction",
                              onClick: () => void eF(eI).catch(il),
                              children: (0, t.jsx)(f.A, { ...eN.W.retry }),
                            })
                          : null,
                        eB || null != eT
                          ? null
                          : (0, t.jsx)(
                              ie.t,
                              {
                                variant: "onboarding",
                                verificationUrl: "",
                                disabled: et || "personaConfiguration" === eh,
                                onLaunch: eG,
                                onActiveChange: ea,
                                onComplete: () => eq({ afterPersona: !0 }),
                              },
                              N,
                            ),
                        eP
                          ? (0, t.jsx)(x.$, {
                              size: "formAction",
                              color: "outlineGhost",
                              disabled: eO || (ed && e_?.is_draft !== !0),
                              onClick: () =>
                                O({ ...eI, profileId: ee.current ?? es }, (0, ec.Cu)(eI).at(-1) ?? "category"),
                              children: (0, t.jsx)(f.A, { ...eN.W.back }),
                            })
                          : (0, t.jsx)(x.$, {
                              size: "formAction",
                              color: "secondary",
                              disabled: eO,
                              onClick: () => eb("cancel"),
                              children: (0, t.jsx)(f.A, { ...eN.W.cancelSubmission }),
                            }),
                      ],
                    }),
                  ],
                })
              : null),
            (P[84] = eW),
            (P[85] = N),
            (P[86] = eO),
            (P[87] = ed),
            (P[88] = et),
            (P[89] = eT),
            (P[90] = eR),
            (P[91] = e_?.is_draft),
            (P[92] = eI),
            (P[93] = ee),
            (P[94] = eP),
            (P[95] = eh),
            (P[96] = es),
            (P[97] = eG),
            (P[98] = eB),
            (P[99] = O),
            (P[100] = eq),
            (P[101] = eV),
            (P[102] = Q),
            (P[103] = en),
            (P[104] = eb),
            (P[105] = ea),
            (P[106] = eY),
            (P[107] = eF),
            (P[108] = eH),
            (P[109] = eE),
            (P[110] = w))
          : (w = P[110]),
        P[111] !== eX || P[112] !== eZ || P[113] !== K
          ? ((_ = eX
              ? (0, t.jsx)(t.Fragment, {
                  children: (0, t.jsx)(x.$, {
                    size: "formAction",
                    disabled: null == eZ,
                    onClick: () => {
                      null != eZ &&
                        K((e) => {
                          let i = new URLSearchParams(e)
                          return (i.set("claim", eZ), i)
                        })
                    },
                    children: (0, t.jsx)(f.A, { ...eN.W.matchedContinue }),
                  }),
                })
              : null),
            (P[111] = eX),
            (P[112] = eZ),
            (P[113] = K),
            (P[114] = _))
          : (_ = P[114]),
        P[115] !== eO ||
        P[116] !== eQ ||
        P[117] !== eU ||
        P[118] !== e_ ||
        P[119] !== eI ||
        P[120] !== eX ||
        P[121] !== R ||
        P[122] !== B ||
        P[123] !== eb
          ? ((C =
              null != e_ && (("under_review" === e_.status && !eX) || eQ)
                ? (0, t.jsx)(ir, {
                    draft: eI,
                    status: eQ ? "approved" : "under_review",
                    busy: eO,
                    onExit: R,
                    onComplete: eQ ? (e) => B(e_.business_profile_id, e) : void 0,
                    onCancelSubmission: eQ ? void 0 : () => eb("cancel"),
                    onCheckStatus: eQ ? void 0 : eU,
                  })
                : null),
            (P[115] = eO),
            (P[116] = eQ),
            (P[117] = eU),
            (P[118] = e_),
            (P[119] = eI),
            (P[120] = eX),
            (P[121] = R),
            (P[122] = B),
            (P[123] = eb),
            (P[124] = C))
          : (C = P[124]),
        P[125] !== E || P[126] !== e_ || P[127] !== eI || P[128] !== eS || P[129] !== R || P[130] !== O
          ? ((j =
              null != e_ && ("rejected" === e_.status || "cancelled" === e_.status)
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      eS
                        ? (0, t.jsx)("p", {
                            className: "text-secondary",
                            children: (0, t.jsx)(f.A, { ...eN.W.rejectedDescription }),
                          })
                        : null,
                      (0, t.jsx)(x.$, {
                        size: "formAction",
                        onClick: () => O({ ...eI, profileId: void 0, contactVerificationRequired: E }, "category"),
                        children: (0, t.jsx)(f.A, { ...eN.W.reviewAgain }),
                      }),
                      (0, t.jsx)(x.$, {
                        size: "formAction",
                        color: "secondary",
                        onClick: R,
                        children: (0, t.jsx)(f.A, { ...eN.W.backToChat }),
                      }),
                    ],
                  })
                : null),
            (P[125] = E),
            (P[126] = e_),
            (P[127] = eI),
            (P[128] = eS),
            (P[129] = R),
            (P[130] = O),
            (P[131] = j))
          : (j = P[131]),
        P[132] !== eQ ||
        P[133] !== et ||
        P[134] !== eU ||
        P[135] !== e_ ||
        P[136] !== eh ||
        P[137] !== ey ||
        P[138] !== eX ||
        P[139] !== eB ||
        P[140] !== er ||
        P[141] !== eE
          ? ((A =
              null == e_ || eB || eQ || eX || "under_review" === e_.status || (null == eh && !ey) || (eE && er)
                ? null
                : (0, t.jsx)(x.$, {
                    size: "formAction",
                    color: "ghostActive",
                    className: eE ? "self-start" : void 0,
                    disabled: et,
                    onClick: eU,
                    children: (0, t.jsx)(f.A, { ...eN.W.retry }),
                  })),
            (P[132] = eQ),
            (P[133] = et),
            (P[134] = eU),
            (P[135] = e_),
            (P[136] = eh),
            (P[137] = ey),
            (P[138] = eX),
            (P[139] = eB),
            (P[140] = er),
            (P[141] = eE),
            (P[142] = A))
          : (A = P[142]),
        P[143] !== eh || P[144] !== ey
          ? ((S =
              null != eh || ey
                ? (0, t.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, t.jsx)(f.A, { ...eN.W[eh ?? "error"] }),
                  })
                : null),
            (P[143] = eh),
            (P[144] = ey),
            (P[145] = S))
          : (S = P[145]),
        P[146] !== eO || P[147] !== eJ || P[148] !== em || P[149] !== eh || P[150] !== eb
          ? ((k =
              null != em
                ? (0, t.jsx)(el.C, {
                    kind: em,
                    busy: eO,
                    onConfirm: eJ,
                    onClose: () => eb(null),
                    errorMessage: null != eh ? (0, t.jsx)(f.A, { ...eN.W[eh] }) : void 0,
                  })
                : null),
            (P[146] = eO),
            (P[147] = eJ),
            (P[148] = em),
            (P[149] = eh),
            (P[150] = eb),
            (P[151] = k))
          : (k = P[151]),
        P[152] !== eO ||
        P[153] !== u ||
        P[154] !== eK ||
        P[155] !== e2 ||
        P[156] !== e5 ||
        P[157] !== e3 ||
        P[158] !== e6 ||
        P[159] !== e8 ||
        P[160] !== p ||
        P[161] !== m ||
        P[162] !== b ||
        P[163] !== v ||
        P[164] !== w ||
        P[165] !== _ ||
        P[166] !== C ||
        P[167] !== j ||
        P[168] !== A ||
        P[169] !== S ||
        P[170] !== k
          ? ((I = (0, t.jsxs)(eD, {
              manager: eK,
              stepKey: e2,
              isDraft: e5,
              outcome: e3,
              busy: eO,
              personaActive: e6,
              contentLayout: e8,
              title: p,
              description: u,
              leading: m,
              onCancel: b,
              children: [v, w, _, C, j, A, S, k],
            })),
            (P[152] = eO),
            (P[153] = u),
            (P[154] = eK),
            (P[155] = e2),
            (P[156] = e5),
            (P[157] = e3),
            (P[158] = e6),
            (P[159] = e8),
            (P[160] = p),
            (P[161] = m),
            (P[162] = b),
            (P[163] = v),
            (P[164] = w),
            (P[165] = _),
            (P[166] = C),
            (P[167] = j),
            (P[168] = A),
            (P[169] = S),
            (P[170] = k),
            (P[171] = I))
          : (I = P[171]),
        I
      )
    }
    function il() {}
    function io() {}
    function ic() {}
    function id() {}
    function iu(e) {
      if (!(e instanceof ef.fk)) return "error"
      if (422 === e.status && "business_profile_persona_account_identity_required" === e.errorCode)
        return "accountIdentityRequired"
      if (503 === e.status) {
        if ("business_profile_persona_temporarily_unavailable" === e.errorCode) return "personaUnavailable"
        if ("business_profile_persona_configuration_error" === e.errorCode) return "personaConfiguration"
      }
      return "error"
    }
    var ih = s("Oklx")
    function ip(e) {
      let i,
        s,
        r,
        a,
        o,
        d,
        u,
        h,
        p,
        m,
        b,
        g,
        y,
        v = (0, n.c)(115),
        {
          accountId: w,
          userId: _,
          name: C,
          initialDraft: j,
          initialStep: S,
          onCancel: k,
          onPersist: I,
          onComplete: P,
        } = e,
        N = void 0 === S ? "type" : S,
        M = (0, l._U)(A.JW, "4046009702"),
        T = (0, F.jE)()
      v[0] !== w || v[1] !== _ ? ((i = () => eK(w, _)), (v[0] = w), (v[1] = _), (v[2] = i)) : (i = v[2])
      let [L] = (0, c.useState)(i)
      ;(v[3] !== L ? ((s = () => L.attach()), (r = [L]), (v[3] = L), (v[4] = s), (v[5] = r)) : ((s = v[4]), (r = v[5])),
        (0, c.useEffect)(s, r))
      let [R, O] = (0, c.useState)(0),
        [B, W] = (0, c.useState)(null),
        [q, U] = (0, c.useState)(null),
        [V, H] = (0, c.useState)(),
        [G, $] = (0, c.useState)(!1),
        J = (0, c.useRef)(!1),
        [K, Q] = (0, c.useState)(!1),
        Z = (0, c.useRef)(null),
        [Y, ee] = (0, c.useState)(null),
        ei = (0, z.I)({
          queryKey: ["business-profiles", w, "temporary-creation", _, R],
          queryFn: async () => {
            if (0 === R && null != j) {
              L.clear()
              let e = { ...j, profileId: void 0, contactVerificationRequired: !0 }
              return (L.savePending(e, N), { response: void 0, draft: e, step: N })
            }
            let e = !1,
              i = await L.restore().catch((i) => {
                if (!eJ(i)) throw i
                return ((e = !0), L.read())
              })
            if (null == i && M) {
              let e = L.pending()?.draft ?? (0, ec.vm)(C, !0),
                s = L.start(null)
              ;(L.savePending(e, "type"), (i = await s))
            }
            if (i?.name_first_session != null) {
              let e = L.pending()?.draft.name ?? (i.name_first_session.details.name || C)
              eG(i.name_first_session, "name", e) || (i = await L.accept("name", e))
            }
            L.throwIfAborted()
            let s = L.pending(),
              t = s?.step === "review" ? void 0 : s?.draft,
              n = ez(i),
              r =
                null == n
                  ? (s?.draft ?? (0, ec.vm)(C, !0))
                  : {
                      name: t?.name ?? n.details.name,
                      businessType: n.details.business_type,
                      values: { ...n.details.values, ...t?.values },
                      contactVerificationRequired: !0,
                    },
              a = s?.step !== "review" || (0, ec.J5)("website", r) ? (0, ec.B)(r, s?.step) : "website"
            if ((L.savePending(r, a), i?.creation != null)) eb(i)
            else if ("review" === a && !e) {
              let e = n?.accepted_revision
              ;(W({ draft: r, acceptedRevision: e }), await eg(e))
            }
            return { response: i, draft: r, step: a, revisionChanged: e }
          },
          retry: !1,
          staleTime: 1 / 0,
          gcTime: 0,
          refetchOnWindowFocus: !1,
          refetchOnReconnect: !1,
        }),
        es = V?.creation ?? ei.data?.response?.creation
      v[6] !== ei.error || v[7] !== ei.isError
        ? ((a = ei.isError ? eZ(ei.error) : null), (v[6] = ei.error), (v[7] = ei.isError), (v[8] = a))
        : (a = v[8])
      let et = a,
        en = "expired" === Y || "expired" === et,
        [er, ea] = (0, c.useState)()
      v[9] !== es || v[10] !== er || v[11] !== ei.data?.response
        ? ((o = null == es ? (er ?? ez(ei.data?.response)?.expires_at) : void 0),
          (v[9] = es),
          (v[10] = er),
          (v[11] = ei.data?.response),
          (v[12] = o))
        : (o = v[12])
      let eo = o,
        [ed, eu] = (0, c.useState)()
      ;(v[13] !== eo || v[14] !== L
        ? ((d = () => {
            if (null == eo) return
            let e = window.setTimeout(
              () => {
                L.hasPendingStart() || eu(eo)
              },
              Math.max(0, Date.parse(eo) - Date.now()),
            )
            return () => window.clearTimeout(e)
          }),
          (u = [eo, L]),
          (v[13] = eo),
          (v[14] = L),
          (v[15] = d),
          (v[16] = u))
        : ((d = v[15]), (u = v[16])),
        (0, c.useEffect)(d, u))
      let ef = q?.draft ?? ei.data?.draft,
        eh =
          B ??
          (null == q && ei.data?.step === "review" && null != ef
            ? { draft: ef, acceptedRevision: ei.data.response?.session?.accepted_revision }
            : null),
        ep = eh?.draft,
        em = null != Y || (null == B && ei.data?.revisionChanged)
      function eb(e) {
        L.throwIfAborted()
        let i = e.creation
        if (null != i) {
          let s = i.business_profile_id
          ;(T.setQueryData(["business-profiles", w, "creation", _, s], e),
            T.invalidateQueries({ queryKey: ["business-profiles", w, "creations", _] }),
            (J.current = !0),
            null == (0, it.jp)(i) && (L.clear(), I(s)))
        }
      }
      function eg(e) {
        return G
          ? Promise.resolve()
          : ($(!0),
            L.submit(e)
              .then((e) => {
                ;(eb(e), H(e))
              })
              .catch(async (e) => {
                if (eJ(e))
                  try {
                    let e = await L.read()
                    if ((L.throwIfAborted(), null == e.session)) return void ee("error")
                    let i = e.session,
                      s = {
                        name: i.details.name,
                        businessType: i.details.business_type,
                        values: i.details.values,
                        contactVerificationRequired: !0,
                      }
                    ;(L.savePending(s, "review"),
                      W({ draft: s, acceptedRevision: i.accepted_revision }),
                      ee("reviewChanged"))
                  } catch (e) {
                    ee(eZ(e))
                  }
                else ee(eZ(e))
              })
              .finally(() => $(!1)))
      }
      v[17] !== G || v[18] !== k || v[19] !== L
        ? ((h = function (e) {
            return !G && (L.hasPendingSubmission() || L.clear(), (J.current = !0), (void 0 === e || e) && k(), !0)
          }),
          (v[17] = G),
          (v[18] = k),
          (v[19] = L),
          (v[20] = h))
        : (h = v[20])
      let ex = h
      if (null != es) {
        let e, i, s, n, r
        return (
          v[21] !== es ? ((e = null != (0, it.jp)(es) ? es : void 0), (v[21] = es), (v[22] = e)) : (e = v[22]),
          v[23] !== k || v[24] !== L
            ? ((i = () => {
                ;(L.clear(), k())
              }),
              (v[23] = k),
              (v[24] = L),
              (v[25] = i))
            : (i = v[25]),
          v[26] !== P || v[27] !== L
            ? ((s = (e, i) => {
                ;(L.clear(), P(e, i))
              }),
              (v[26] = P),
              (v[27] = L),
              (v[28] = s))
            : (s = v[28]),
          v[29] !== L || v[30] !== ea
            ? ((n = (e, i) => {
                ;(L.clear(),
                  L.savePending({ ...e, profileId: void 0 }, i),
                  H(void 0),
                  ea(void 0),
                  U({ draft: { ...e, profileId: void 0 }, step: i }),
                  O(im))
              }),
              (v[29] = L),
              (v[30] = ea),
              (v[31] = n))
            : (n = v[31]),
          v[32] !== w ||
          v[33] !== es.business_profile_id ||
          v[34] !== I ||
          v[35] !== e ||
          v[36] !== i ||
          v[37] !== s ||
          v[38] !== n ||
          v[39] !== _
            ? ((r = (0, t.jsx)(ia, {
                accountId: w,
                userId: _,
                profileId: es.business_profile_id,
                completedCreation: e,
                draft: null,
                contactVerificationEnabled: !0,
                onPersist: I,
                onCancel: i,
                onComplete: s,
                onEdit: n,
              })),
              (v[32] = w),
              (v[33] = es.business_profile_id),
              (v[34] = I),
              (v[35] = e),
              (v[36] = i),
              (v[37] = s),
              (v[38] = n),
              (v[39] = _),
              (v[40] = r))
            : (r = v[40]),
          r
        )
      }
      if (en || (null != eo && ed === eo)) {
        let e, i, s, n, r
        return (
          v[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(D.c7, {
                title: (0, t.jsx)(E.L3, { children: (0, t.jsx)(f.A, { ...eN.W.sessionExpired }) }),
              })),
              (v[41] = e))
            : (e = v[41]),
          v[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, t.jsxs)(D.OO, {
                children: [e, (0, t.jsx)(E.rr, { children: (0, t.jsx)(f.A, { ...eN.W.reloadHelp }) })],
              })),
              (v[42] = i))
            : (i = v[42]),
          v[43] !== en || v[44] !== C || v[45] !== L
            ? ((s = () => {
                if (en || !L.hasRecoverableSubmission()) {
                  let e = L.pending()?.draft.name || C
                  ;(L.clear(), L.savePending((0, ec.vm)(e, !0), "type"))
                }
                window.location.reload()
              }),
              (v[43] = en),
              (v[44] = C),
              (v[45] = L),
              (v[46] = s))
            : (s = v[46]),
          v[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, t.jsx)(f.A, { ...eN.W.reloadPage })), (v[47] = n))
            : (n = v[47]),
          v[48] !== s
            ? ((r = (0, t.jsx)(E.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                children: (0, t.jsxs)(D.R4, {
                  children: [i, (0, t.jsx)(D.Es, { children: (0, t.jsx)(x.$, { onClick: s, children: n }) })],
                }),
              })),
              (v[48] = s),
              (v[49] = r))
            : (r = v[49]),
          r
        )
      }
      if (null != ep && em) {
        let e, i, s, n, r, a, l, o, c, d, u
        ;(v[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(f.A, { ...eN.W.submitFailureTitle })), (v[50] = e))
          : (e = v[50]),
          v[51] !== G || v[52] !== ex || v[53] !== L
            ? ((i = () => {
                G || (L.hasPendingSubmission() ? ex() : Q(!0))
              }),
              (v[51] = G),
              (v[52] = ex),
              (v[53] = L),
              (v[54] = i))
            : (i = v[54]),
          v[55] !== G || v[56] !== L
            ? ((s = G || !L.hasPendingSubmission()), (v[55] = G), (v[56] = L), (v[57] = s))
            : (s = v[57]),
          v[58] === Symbol.for("react.memo_cache_sentinel") ? ((n = () => J.current), (v[58] = n)) : (n = v[58]),
          v[59] !== ex ? ((r = () => ex(!1)), (v[59] = ex), (v[60] = r)) : (r = v[60]),
          v[61] !== G || v[62] !== s || v[63] !== r
            ? ((a = (0, t.jsx)(X.L, {
                discardCreation: !0,
                dirty: s,
                busy: G,
                blockSearchChanges: !0,
                allowNavigation: n,
                onDiscard: r,
              })),
              (v[61] = G),
              (v[62] = s),
              (v[63] = r),
              (v[64] = a))
            : (a = v[64]))
        let h = eN.W[Y ?? "reviewChanged"]
        return (
          v[65] !== h
            ? ((l = (0, t.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, t.jsx)(f.A, { ...h }),
              })),
              (v[65] = h),
              (v[66] = l))
            : (l = v[66]),
          v[67] !== G || v[68] !== L
            ? ((o = G || L.hasPendingSubmission()), (v[67] = G), (v[68] = L), (v[69] = o))
            : (o = v[69]),
          v[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, t.jsx)(f.A, { ...eN.W.back })), (v[70] = c))
            : (c = v[70]),
          v[71] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, t.jsx)(f.A, { ...eN.W.retry })), (v[71] = d))
            : (d = v[71]),
          v[72] !== G || v[73] !== K || v[74] !== ex
            ? ((u = K
                ? (0, t.jsx)(el.C, {
                    kind: "discard",
                    busy: G,
                    onClose: () => Q(!1),
                    onConfirm: () => ex(),
                    contentProps: {
                      onCloseAutoFocus: (e) => {
                        null != Z.current && (e.preventDefault(), Z.current.focus({ preventScroll: !0 }))
                      },
                    },
                  })
                : null),
              (v[72] = G),
              (v[73] = K),
              (v[74] = ex),
              (v[75] = u))
            : (u = v[75]),
          (0, t.jsxs)(eD, {
            manager: (0, ec.Gk)(ep),
            stepKey: "verify",
            contentLayout: "summary",
            cancelButtonRef: Z,
            busy: G,
            title: e,
            onCancel: i,
            children: [
              a,
              l,
              (0, t.jsxs)("div", {
                className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
                children: [
                  (0, t.jsx)(x.$, {
                    color: "outlineGhost",
                    size: "formAction",
                    disabled: o,
                    onClick: () => {
                      let e = (0, ec.Cu)(ep).at(-1) ?? "category"
                      ;(L.savePending(ep, e), U({ draft: ep, step: e }), W(null), ee(null))
                    },
                    children: c,
                  }),
                  (0, t.jsx)(x.$, {
                    size: "formAction",
                    loading: G,
                    disabled: G || "personaConfiguration" === Y,
                    onClick: () => void eg(eh?.acceptedRevision),
                    children: d,
                  }),
                ],
              }),
              u,
            ],
          })
        )
      }
      let ey = ep ?? ef
      if (null == ey) {
        let e,
          i,
          s,
          n,
          r,
          a,
          l = "personaConfiguration" === et ? eN.W.personaConfiguration : eN.W.error
        v[76] !== ei.isError || v[77] !== L
          ? ((e = ei.isError && L.isNameFirst() && !L.hasPendingSubmission()),
            (v[76] = ei.isError),
            (v[77] = L),
            (v[78] = e))
          : (e = v[78])
        let o = e
        ;(v[79] !== ei || v[80] !== et || v[81] !== l
          ? ((i = ei.isError
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("p", { role: "alert", children: (0, t.jsx)(f.A, { ...l }) }),
                    (0, t.jsx)(x.$, {
                      disabled: "personaConfiguration" === et,
                      onClick: () => void ei.refetch(),
                      children: (0, t.jsx)(f.A, { ...eN.W.retry }),
                    }),
                  ],
                })
              : (0, t.jsx)(ih.Bz, { variant: "form" })),
            (v[79] = ei),
            (v[80] = et),
            (v[81] = l),
            (v[82] = i))
          : (i = v[82]),
          v[83] !== o || v[84] !== k || v[85] !== L
            ? ((s = () => {
                ;(o && L.clear(), k())
              }),
              (v[83] = o),
              (v[84] = k),
              (v[85] = L),
              (v[86] = s))
            : (s = v[86]))
        let c = o ? eN.W.changeName : eN.W.backToChat
        return (
          v[87] !== c ? ((n = (0, t.jsx)(f.A, { ...c })), (v[87] = c), (v[88] = n)) : (n = v[88]),
          v[89] !== s || v[90] !== n
            ? ((r = (0, t.jsx)(x.$, { color: "secondary", onClick: s, children: n })),
              (v[89] = s),
              (v[90] = n),
              (v[91] = r))
            : (r = v[91]),
          v[92] !== i || v[93] !== r
            ? ((a = (0, t.jsxs)("div", {
                className: "mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-5 py-8",
                children: [i, r],
              })),
              (v[92] = i),
              (v[93] = r),
              (v[94] = a))
            : (a = v[94]),
          a
        )
      }
      let ev = ey.name
      v[95] === Symbol.for("react.memo_cache_sentinel") ? ((p = () => J.current), (v[95] = p)) : (p = v[95])
      let ew = q?.step ?? (null != ep || ei.data?.step === "review" ? (0, ec.Cu)(ey).at(-1) : ei.data?.step),
        e_ = ei.data?.response
      return (
        v[96] !== e_ ? ((m = ez(e_)), (v[96] = e_), (v[97] = m)) : (m = v[97]),
        v[98] === Symbol.for("react.memo_cache_sentinel") ? ((b = () => ee("expired")), (v[98] = b)) : (b = v[98]),
        v[99] !== L || v[100] !== eg
          ? ((g = (e, i) => {
              ;(L.savePending(e, "review"), W({ draft: e, acceptedRevision: i }), U(null), eg(i))
            }),
            (v[99] = L),
            (v[100] = eg),
            (v[101] = g))
          : (g = v[101]),
        v[102] !== e4 ||
        v[103] !== w ||
        v[104] !== G ||
        v[105] !== ey ||
        v[106] !== R ||
        v[107] !== k ||
        v[108] !== L ||
        v[109] !== ea ||
        v[110] !== p ||
        v[111] !== ew ||
        v[112] !== m ||
        v[113] !== g
          ? ((y = (0, t.jsx)(
              e4,
              {
                accountId: w,
                contactVerificationEnabled: !0,
                name: ev,
                submitting: G,
                allowNavigation: p,
                initialDraft: ey,
                initialStep: ew,
                temporarySession: L,
                initialSession: m,
                onSessionDeadline: ea,
                onExpired: b,
                onCancel: k,
                onReview: g,
              },
              R,
            )),
            (v[102] = e4),
            (v[103] = w),
            (v[104] = G),
            (v[105] = ey),
            (v[106] = R),
            (v[107] = k),
            (v[108] = L),
            (v[109] = ea),
            (v[110] = p),
            (v[111] = ew),
            (v[112] = m),
            (v[113] = g),
            (v[114] = y))
          : (y = v[114]),
        y
      )
    }
    function im(e) {
      return e + 1
    }
    function ib(e) {
      let i,
        s = (0, n.c)(33),
        { accountId: r, userId: a, name: o, profileId: d, onCancel: u, onPersist: f, onRestart: h, onComplete: p } = e,
        m = (0, l._U)(A.JW, "4046009702"),
        [b, g] = (0, c.useState)(null),
        [x, y] = (0, c.useState)(null),
        [v, w] = (0, c.useState)(null)
      if ((m || eK(r, a).hasRecoverableSubmission()) && null == d && b?.draft.profileId == null) {
        let e,
          i = `${r}:${a}`,
          n = b?.draft,
          l = b?.step
        return (
          s[0] !== r ||
          s[1] !== o ||
          s[2] !== u ||
          s[3] !== p ||
          s[4] !== f ||
          s[5] !== i ||
          s[6] !== n ||
          s[7] !== l ||
          s[8] !== a
            ? ((e = (0, t.jsx)(
                ip,
                {
                  accountId: r,
                  userId: a,
                  name: o,
                  initialDraft: n,
                  initialStep: l,
                  onCancel: u,
                  onPersist: f,
                  onComplete: p,
                },
                i,
              )),
              (s[0] = r),
              (s[1] = o),
              (s[2] = u),
              (s[3] = p),
              (s[4] = f),
              (s[5] = i),
              (s[6] = n),
              (s[7] = l),
              (s[8] = a),
              (s[9] = e))
            : (e = s[9]),
          e
        )
      }
      let _ = null != x && (null == d || d === v)
      if (null != d || null != x) {
        let e,
          i,
          n,
          l = _ ? "local" : d,
          o = _ ? x : null
        return (
          s[10] !== _ || s[11] !== f
            ? ((e = (e, i) => {
                ;(_ && w(e), f(e, i))
              }),
              (s[10] = _),
              (s[11] = f),
              (s[12] = e))
            : (e = s[12]),
          s[13] !== h
            ? ((i = (e, i) => {
                ;(g({ draft: e, step: i }), y(null), h(e.name))
              }),
              (s[13] = h),
              (s[14] = i))
            : (i = s[14]),
          s[15] !== r ||
          s[16] !== m ||
          s[17] !== u ||
          s[18] !== p ||
          s[19] !== d ||
          s[20] !== l ||
          s[21] !== o ||
          s[22] !== e ||
          s[23] !== i ||
          s[24] !== a
            ? ((n = (0, t.jsx)(
                ia,
                {
                  accountId: r,
                  contactVerificationEnabled: m,
                  userId: a,
                  profileId: d,
                  draft: o,
                  onPersist: e,
                  onCancel: u,
                  onComplete: p,
                  onEdit: i,
                },
                l,
              )),
              (s[15] = r),
              (s[16] = m),
              (s[17] = u),
              (s[18] = p),
              (s[19] = d),
              (s[20] = l),
              (s[21] = o),
              (s[22] = e),
              (s[23] = i),
              (s[24] = a),
              (s[25] = n))
            : (n = s[25]),
          n
        )
      }
      let C = b?.draft,
        j = b?.step
      return (
        s[26] !== r || s[27] !== m || s[28] !== o || s[29] !== u || s[30] !== C || s[31] !== j
          ? ((i = (0, t.jsx)(e4, {
              accountId: r,
              contactVerificationEnabled: m,
              name: o,
              initialDraft: C,
              initialStep: j,
              onCancel: u,
              onReview: y,
            })),
            (s[26] = r),
            (s[27] = m),
            (s[28] = o),
            (s[29] = u),
            (s[30] = C),
            (s[31] = j),
            (s[32] = i))
          : (i = s[32]),
        i
      )
    }
    var ig = s("Gnfq"),
      ix = s.p + "assets/bag.584fd57493.png",
      iy = s.p + "assets/banknote.b0c319bfd7.png",
      iv = s.p + "assets/cloche.18e5b9d343.png",
      iw = s.p + "assets/map.633fee247d.png",
      i_ = s.p + "assets/toolbox.1835df7375.png"
    function iC() {
      let e,
        i,
        r,
        a,
        l,
        o = (0, n.c)(7),
        d = (0, c.useRef)(null),
        u = (0, c.useRef)(null),
        [f, h] = (0, c.useState)(!1),
        [p, m] = (0, c.useState)(!1)
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = () => {
              let e,
                i = d.current,
                t = u.current
              if (!i || !t) return
              let n = window.matchMedia("(prefers-reduced-motion: reduce)"),
                r = !1,
                a = !1,
                l = !1,
                o = !1,
                c = function () {
                  return o && !document.hidden && !n.matches && !a
                },
                f = function () {
                  ;((a = !0), e?.dispose(), (e = void 0), r || (h(!1), m(!1)))
                },
                p = function () {
                  ;((l = !0),
                    Promise.all([s.e(910996), s.e(980972), s.e(700657)])
                      .then(s.bind(s, "RCaN"))
                      .then(({ createArtworkRenderer: e }) => e)
                      .then((i) => {
                        t &&
                          !r &&
                          c() &&
                          (e = i(
                            t,
                            () => {
                              r || h(!0)
                            },
                            f,
                          )).setPlaying(c())
                      })
                      .catch(f)
                      .finally(() => {
                        l = !1
                      }))
                },
                b = function () {
                  let i = c()
                  ;(m(i), e?.setPlaying(i), !i || e || l || p())
                },
                g = new IntersectionObserver((e) => {
                  let [i] = e
                  ;((o = i?.isIntersecting ?? !1), b())
                })
              return (
                g.observe(i),
                document.addEventListener("visibilitychange", b),
                n.addEventListener("change", b),
                () => {
                  ;((r = !0),
                    g.disconnect(),
                    document.removeEventListener("visibilitychange", b),
                    n.removeEventListener("change", b),
                    e?.dispose())
                }
              )
            }),
            (i = []),
            (o[0] = e),
            (o[1] = i))
          : ((e = o[0]), (i = o[1])),
        (0, c.useEffect)(e, i),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsxs)("div", {
              className: "staticArc-a9ikAv",
              children: [
                (0, t.jsx)("img", { alt: "", className: "bag-5N6uL6", src: ix }),
                (0, t.jsx)("img", { alt: "", className: "toolbox-gDwhtZ", src: i_ }),
                (0, t.jsx)("img", { alt: "", className: "cloche-E0O1Nc", src: iv }),
                (0, t.jsx)("img", { alt: "", className: "map-xfvMa6", src: iw }),
                (0, t.jsx)("img", { alt: "", className: "banknote-yl6aWq", src: iy }),
              ],
            })),
            (a = (0, t.jsx)("canvas", { ref: u, className: "animatedArc-frWWcS" })),
            (o[2] = r),
            (o[3] = a))
          : ((r = o[2]), (a = o[3])),
        o[4] !== p || o[5] !== f
          ? ((l = (0, t.jsxs)("div", {
              ref: d,
              className: "artwork-JC7Ncc",
              "aria-hidden": !0,
              "data-ready": f,
              "data-playing": p,
              children: [r, a],
            })),
            (o[4] = p),
            (o[5] = f),
            (o[6] = l))
          : (l = o[6]),
        l
      )
    }
    function ij(e) {
      return null != e.businessProfileId ? "profile:" + e.businessProfileId : "local:" + e.place.entity_lookup_id
    }
    var iA = s("IQaS")
    let iS = (0, r.a)({
      name: "multicolor-verified-checkmark-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
        visualBounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#00B1FF",
            bounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
            wideGamut: "color(display-p3 0.0000 0.6941 1.0000)",
          },
          { role: "fixed", color: "#FFFFFF", bounds: { x: 5.279785, y: 5.384766, width: 5.358887, height: 5.230957 } },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
        center: { x: 7.999757, y: 8 },
        insets: { top: 1.332031, right: 1.78955, bottom: 1.332031, left: 1.789063 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999757, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.99997 1.33203C9.23724 1.33206 10.3126 2.02323 10.8625 3.04027C12.0186 3.00749 13.1556 3.594 13.7745 4.66593C14.3932 5.73765 14.3324 7.0151 13.7262 7.99984C14.3324 8.98464 14.3932 10.262 13.7745 11.3338C13.1556 12.4057 12.0186 12.9916 10.8624 12.9588C10.3127 13.9762 9.23737 14.6677 7.9999 14.6678C6.7623 14.6678 5.68652 13.9763 5.1368 12.9589C3.98084 12.9915 2.84417 12.4056 2.2254 11.3338C1.6067 10.2622 1.66702 8.9847 2.27306 7.9999C1.66704 7.01517 1.60672 5.73766 2.22544 4.666C2.84422 3.59421 3.9809 3.00771 5.13686 3.0403C5.68667 2.02313 6.76264 1.33204 7.99997 1.33203Z" fill="#00B1FF"/> <path d="M9.4087 5.69472C9.6057 5.38372 10.0176 5.29132 10.3286 5.48834C10.6396 5.68538 10.732 6.09724 10.535 6.40826L8.1847 10.1186C8.15963 10.1582 8.11783 10.2256 8.0747 10.282C8.0285 10.3423 7.93456 10.454 7.7785 10.5306C7.59363 10.6213 7.3815 10.6403 7.18343 10.584C7.01603 10.5364 6.9037 10.4431 6.8475 10.392C6.79483 10.344 6.74117 10.2852 6.7095 10.2507L5.45556 8.8881C5.20633 8.61716 5.22443 8.1953 5.49527 7.94603C5.76624 7.69676 6.18806 7.7141 6.43733 7.9851L7.3377 8.96356L9.4087 5.69472Z" fill="white"/>',
    })
    var ik = s("suje"),
      iI = "suggestions-nrhhAz",
      iP = "menu-F6kN1t"
    function iN(e) {
      let i,
        s,
        r,
        a,
        l,
        o,
        d,
        h,
        p,
        m,
        b,
        g = (0, n.c)(44),
        { query: v, configuration: w, onSelect: _, createAction: j, open: A } = e,
        S = (0, u.A)(),
        { adapter: k, accountId: I } = w,
        [P] = (0, c.useState)(iE),
        N = w.revision ?? 0
      ;(g[0] !== I || g[1] !== v || g[2] !== N
        ? ((i = ["business-profile-name-search", I, v, N]), (g[0] = I), (g[1] = v), (g[2] = N), (g[3] = i))
        : (i = g[3]),
        g[4] !== I || g[5] !== k || g[6] !== v
          ? ((s = async (e) => {
              let { signal: i } = e,
                s = await k.search({ query: v, accountId: I, signal: i }),
                t = new Set()
              return s.filter((e) => {
                let i = ij(e)
                return !t.has(i) && (t.add(i), !0)
              })
            }),
            (g[4] = I),
            (g[5] = k),
            (g[6] = v),
            (g[7] = s))
          : (s = g[7]),
        g[8] !== v ? ((r = v.trim()), (g[8] = v), (g[9] = r)) : (r = g[9]))
      let E = !!r
      g[10] !== i || g[11] !== s || g[12] !== E
        ? ((a = { queryKey: i, queryFn: s, enabled: E, staleTime: 0, gcTime: 0, retry: !1, refetchOnWindowFocus: !1 }),
          (g[10] = i),
          (g[11] = s),
          (g[12] = E),
          (g[13] = a))
        : (a = g[13])
      let { data: D, isFetching: M, isError: T, refetch: L } = (0, z.I)(a, P)
      if (!v.trim()) return null
      let R = !A,
        O = T ? null : j,
        B =
          !M && (T || (null != D && D.length > 0))
            ? "sr-only"
            : "px-2.5 py-1.5 text-[13px] leading-[18px] text-secondary"
      return (
        g[14] !== M
          ? ((l = M
              ? (0, t.jsx)(f.A, {
                  id: "businessProfiles.search.results.loading",
                  defaultMessage: "Searching businesses…",
                  description:
                    "Status below the Business Profile name search field while matching existing business profiles are being loaded. This searches business names only.",
                })
              : null),
            (g[14] = M),
            (g[15] = l))
          : (l = g[15]),
        g[16] !== T || g[17] !== M || g[18] !== D
          ? ((o =
              M || T || null == D
                ? null
                : (0, t.jsx)(f.A, {
                    id: "businessProfiles.search.results.count",
                    defaultMessage:
                      "{count, plural, =0 {No matching business} one {# matching business} other {# matching businesses}}",
                    description:
                      "Status below the Business Profile name search field after a successful search. {count} is the number of matching existing profiles. Zero means the search succeeded without matches, not that it failed.",
                    values: { count: D.length },
                  })),
            (g[16] = T),
            (g[17] = M),
            (g[18] = D),
            (g[19] = o))
          : (o = g[19]),
        g[20] !== l || g[21] !== o || g[22] !== B
          ? ((d = (0, t.jsxs)("p", { role: "status", className: B, children: [l, o] })),
            (g[20] = l),
            (g[21] = o),
            (g[22] = B),
            (g[23] = d))
          : (d = g[23]),
        g[24] !== T || g[25] !== M || g[26] !== L
          ? ((h =
              !M && T
                ? (0, t.jsxs)("div", {
                    className: "flex min-h-30 flex-col items-center justify-center gap-3 px-2.5 py-3 text-center",
                    children: [
                      (0, t.jsx)("p", {
                        role: "alert",
                        className: "text-sm",
                        children: (0, t.jsx)(f.A, {
                          id: "businessProfiles.search.results.loadError",
                          defaultMessage: "Something went wrong",
                          description:
                            "Error below the Business Profile name search field when matching profiles could not be loaded. Retrying repeats the search; this does not mean no businesses matched.",
                        }),
                      }),
                      (0, t.jsxs)(x.$, {
                        type: "button",
                        color: "outlineGhost",
                        size: "dialog",
                        onClick: () => void L(),
                        children: [
                          (0, t.jsx)(y.I, { asset: iA.E, "aria-hidden": "true" }),
                          (0, t.jsx)(f.A, {
                            id: "businessProfiles.search.results.retry",
                            defaultMessage: "Try again",
                            description:
                              "Button in the business suggestions dropdown after a search fails. Repeats the search with the same business name.",
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (g[24] = T),
            (g[25] = M),
            (g[26] = L),
            (g[27] = h))
          : (h = g[27]),
        g[28] !== S || g[29] !== T || g[30] !== M || g[31] !== _ || g[32] !== D || g[33] !== L
          ? ((p =
              M || T || null == D || !(D.length > 0)
                ? null
                : (0, t.jsx)("ul", {
                    className: "results-Yrnd1r",
                    "aria-label": S.formatMessage({
                      id: "businessProfiles.search.results.label",
                      defaultMessage: "Matching businesses",
                      description:
                        "Accessible label for the list of existing Business Profiles matching a business-name search. Selecting a result opens its business details, where available actions depend on the profile’s ownership status.",
                    }),
                    children: D.map((e) =>
                      (0, t.jsxs)(
                        "li",
                        {
                          children: [
                            "unavailable" === e.ownership
                              ? (0, t.jsx)("div", {
                                  className:
                                    "flex min-h-9 items-center gap-1.5 px-2.5 py-1.5 text-[13px] leading-[18px]",
                                  children: (0, t.jsx)(iD, { profile: e }),
                                })
                              : (0, t.jsx)(C.t, {
                                  highlighted: !1,
                                  variant: "search",
                                  type: "button",
                                  "data-business-profile-result": e.canonicalId ?? ij(e),
                                  "data-business-profile-option": !0,
                                  onClick: (i) => _?.(e, i.currentTarget),
                                  children: (0, t.jsx)(iD, { profile: e }),
                                }),
                            "unavailable" === e.ownership
                              ? (0, t.jsxs)("div", {
                                  className: "flex flex-col items-start gap-2 px-2.5 pb-1.5",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "text-sm text-secondary",
                                      children: (0, t.jsx)(f.A, {
                                        id: "businessProfiles.search.results.unavailable",
                                        defaultMessage:
                                          "This profile is no longer available. Refresh the results to try again.",
                                        description:
                                          "Explanation for an unavailable or stale Business Profile search result. The owner cannot claim or manage this result and can refresh the current name search.",
                                      }),
                                    }),
                                    (0, t.jsx)(x.$, {
                                      type: "button",
                                      color: "secondary",
                                      onClick: () => void L(),
                                      children: (0, t.jsx)(f.A, {
                                        id: "businessProfiles.search.results.refresh",
                                        defaultMessage: "Refresh results",
                                        description:
                                          "Button on an unavailable Business Profile search result. Repeats the same name search to retrieve current profiles.",
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        },
                        ij(e),
                      ),
                    ),
                  })),
            (g[28] = S),
            (g[29] = T),
            (g[30] = M),
            (g[31] = _),
            (g[32] = D),
            (g[33] = L),
            (g[34] = p))
          : (p = g[34]),
        g[35] !== d || g[36] !== h || g[37] !== p || g[38] !== O
          ? ((m = (0, t.jsxs)(C.W, { className: iP, variant: "search", children: [O, d, h, p] })),
            (g[35] = d),
            (g[36] = h),
            (g[37] = p),
            (g[38] = O),
            (g[39] = m))
          : (m = g[39]),
        g[40] !== M || g[41] !== m || g[42] !== R
          ? ((b = (0, t.jsx)("section", { className: iI, hidden: R, "aria-busy": M, children: m })),
            (g[40] = M),
            (g[41] = m),
            (g[42] = R),
            (g[43] = b))
          : (b = g[43]),
        b
      )
    }
    function iE() {
      return new ik.E()
    }
    function iD(e) {
      let i,
        s,
        r,
        a,
        l,
        o,
        c,
        d,
        f = (0, n.c)(22),
        { profile: h } = e,
        p = (0, u.A)()
      f[0] !== h.address || f[1] !== h.website
        ? ((i = h.address?.trim() || h.website?.trim()), (f[0] = h.address), (f[1] = h.website), (f[2] = i))
        : (i = f[2])
      let m = i
      return (
        f[3] !== h.name
          ? ((s = (0, t.jsx)("bdi", { className: "min-w-0 break-words", children: h.name })),
            (f[3] = h.name),
            (f[4] = s))
          : (s = f[4]),
        f[5] !== p || f[6] !== h.ownership
          ? ((r =
              "manageable" === h.ownership || "claimed" === h.ownership
                ? (0, t.jsx)(y.I, {
                    asset: iS,
                    className: "shrink-0",
                    label: p.formatMessage({
                      id: "businessProfiles.search.results.claimedBadge",
                      defaultMessage: "Claimed",
                      description:
                        "Accessible label for the blue verification check beside an existing business name in the Business Profile search dropdown. Indicates that an owner or authorized representative has claimed this profile; it may belong to the current account or another account. Short status label, not an action.",
                    }),
                  })
                : null),
            (f[5] = p),
            (f[6] = h.ownership),
            (f[7] = r))
          : (r = f[7]),
        f[8] !== s || f[9] !== r
          ? ((a = (0, t.jsxs)("span", { className: "flex min-w-0 items-center gap-1 font-normal", children: [s, r] })),
            (f[8] = s),
            (f[9] = r),
            (f[10] = a))
          : (a = f[10]),
        f[11] !== m || f[12] !== h.address
          ? ((l = m
              ? (0, t.jsx)("span", {
                  className: h.address?.trim() ? "break-words text-tertiary" : "truncate text-tertiary",
                  title: m,
                  children: (0, t.jsx)("bdi", { children: m }),
                })
              : null),
            (f[11] = m),
            (f[12] = h.address),
            (f[13] = l))
          : (l = f[13]),
        f[14] !== a || f[15] !== l
          ? ((o = (0, t.jsxs)("span", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [a, l] })),
            (f[14] = a),
            (f[15] = l),
            (f[16] = o))
          : (o = f[16]),
        f[17] !== h.logoUrl
          ? ((c = (0, t.jsx)(iM, { src: h.logoUrl }, h.logoUrl)), (f[17] = h.logoUrl), (f[18] = c))
          : (c = f[18]),
        f[19] !== o || f[20] !== c
          ? ((d = (0, t.jsxs)(t.Fragment, { children: [o, c] })), (f[19] = o), (f[20] = c), (f[21] = d))
          : (d = f[21]),
        d
      )
    }
    function iM(e) {
      let i,
        s,
        r = (0, n.c)(5),
        { src: a } = e,
        [l, o] = (0, c.useState)(!1)
      return (
        r[0] !== l || r[1] !== a
          ? ((i =
              a && !l
                ? (0, t.jsx)("img", {
                    alt: "",
                    className: "size-full rounded-full object-contain",
                    src: a,
                    onError: () => o(!0),
                  })
                : null),
            (r[0] = l),
            (r[1] = a),
            (r[2] = i))
          : (i = r[2]),
        r[3] !== i
          ? ((s = (0, t.jsx)("span", { className: "size-6 shrink-0", children: i })), (r[3] = i), (r[4] = s))
          : (s = r[4]),
        s
      )
    }
    let iT = "oai/apps/hasSeenBusinessProfileCreationOnboarding",
      iL = {
        async search({ query: e, accountId: i, signal: s }) {
          s.throwIfAborted()
          let t = await b.Request.safeGet("/chat/frontend/v1/business-profiles/search", {
            additionalHeaders: { "x-openai-use-sheep": "1", "ChatGPT-Account-ID": i, [o.zBc]: i },
            signal: s,
            parameters: { query: { query: e, limit: 16, include_local: !0 } },
          })
          return (
            s.throwIfAborted(),
            (function (e, i, s) {
              let t = (e) => e.trim().replace(/\s+/g, " ").toLowerCase(),
                n = t(e),
                r = i.filter((e) => t(e.name) === n),
                a = i.filter((e) => t(e.name) !== n),
                l = new Set(i.map((e) => e.businessProfileId)),
                o = s.filter((e) => null == e.businessProfileId || !l.has(e.businessProfileId)),
                c = [...r]
              for (let e = 0; e < Math.max(a.length, o.length); e++) {
                let i = a[e],
                  s = o[e]
                ;(null != i && c.push(i), null != s && c.push(s))
              }
              let d = new Set()
              return c
                .filter((e) => {
                  let i = ij(e)
                  return !d.has(i) && (d.add(i), !0)
                })
                .slice(0, 16)
            })(
              e,
              t.results.map((e) => ({
                canonicalId: e.canonical_id,
                businessProfileId: e.business_profile_id,
                name: e.display_name,
                kind: e.kind,
                address: e.display_address ?? void 0,
                website: e.website_url ?? void 0,
                logoUrl: e.logo_url ?? void 0,
              })),
              (t.local_results ?? []).map((e) => {
                let i = {
                  name: e.display_name,
                  businessType: "local",
                  address: e.display_address ?? void 0,
                  website: e.website_url ?? void 0,
                  logoUrl: e.logo_url ?? void 0,
                }
                return null != e.business_profile_id
                  ? { ...i, businessProfileId: e.business_profile_id }
                  : { ...i, place: e }
              }),
            )
          )
        },
      }
    function iR(e) {
      let i,
        s,
        r,
        a = (0, n.c)(16),
        { accountId: o, userId: c } = (0, m.As)(),
        d = (0, l._U)(A.JW, k.lX),
        u = (0, l._U)(A.JW, k.eA)
      a[0] !== o || a[1] !== e.search || a[2] !== e.useCanonicalSearch || a[3] !== c
        ? ((i = e.search ?? (e.useCanonicalSearch && null != o && null != c ? { adapter: iL, accountId: o } : void 0)),
          (a[0] = o),
          (a[1] = e.search),
          (a[2] = e.useCanonicalSearch),
          (a[3] = c),
          (a[4] = i))
        : (i = a[4])
      let f = i,
        h = `${o}:${c}:${e.search?.accountId}`
      return (
        a[5] !== o || a[6] !== u || a[7] !== e || a[8] !== d || a[9] !== c
          ? ((s = (i, s) =>
              (0, t.jsx)(
                iO,
                { ...e, search: i, onSelect: s, accountId: o, userId: c, searchEnabled: d, creationEnabled: u },
                `${u}`,
              )),
            (a[5] = o),
            (a[6] = u),
            (a[7] = e),
            (a[8] = d),
            (a[9] = c),
            (a[10] = s))
          : (s = a[10]),
        a[11] !== o || a[12] !== f || a[13] !== h || a[14] !== s
          ? ((r = (0, t.jsx)(en.F, { accountId: o, search: f, children: s }, h)),
            (a[11] = o),
            (a[12] = f),
            (a[13] = h),
            (a[14] = s),
            (a[15] = r))
          : (r = a[15]),
        r
      )
    }
    function iO(e) {
      let i,
        s,
        r,
        o,
        m,
        b,
        k,
        I,
        P,
        N,
        E,
        D,
        M,
        T,
        R,
        O,
        B,
        W,
        F,
        q,
        U,
        z = (0, n.c)(80),
        {
          canGoBack: V,
          search: H,
          onSelect: G,
          useCanonicalSearch: $,
          accountId: J,
          userId: K,
          searchEnabled: Q,
          creationEnabled: Z,
        } = e,
        X = void 0 !== $ && $,
        Y = (0, l.gh)(j.u),
        ei = (0, u.A)()
      z[0] !== Z ? ((i = { enabled: Z }), (z[0] = Z), (z[1] = i)) : (i = z[1])
      let es = (0, l.Ul)(g.Sk, i)
      z[2] !== Z ? ((s = { enabled: Z }), (z[2] = Z), (z[3] = s)) : (s = z[3])
      let et = (0, l.Ul)(p.o8, s),
        en = null != J && es === J && null != et,
        er = Z && en
      z[4] !== er ? ((r = { enabled: er }), (z[4] = er), (z[5] = r)) : (r = z[5])
      let { data: ea, isError: el } = (0, l.Ul)(g.s6, r),
        [eo, ec] = (0, c.useState)(!1),
        ed = Z && (!en || null == ea) && !el && !eo
      ;(z[6] !== ed
        ? ((o = () => {
            if (!ed) return
            let e = setTimeout(() => ec(!0), 3e3)
            return () => clearTimeout(e)
          }),
          (m = [ed]),
          (z[6] = ed),
          (z[7] = o),
          (z[8] = m))
        : ((o = z[7]), (m = z[8])),
        (0, c.useEffect)(o, m))
      let eu = (0, h.Zp)()
      z[9] !== ei
        ? ((b = ei.formatMessage({
            id: "businessProfiles.search.input.label",
            defaultMessage: "Search business",
            description:
              "Label and placeholder for the business search field on the page for finding or creating a business profile in ChatGPT.",
          })),
          (z[9] = ei),
          (z[10] = b))
        : (b = z[10])
      let ef = b,
        [eh, ep] = (0, h.ok)(),
        [em, eb] = (0, c.useState)(""),
        [eg, ex] = (0, c.useState)(null),
        [ey, ev] = (0, c.useState)(!1),
        [ew, e_] = (0, c.useState)(!1),
        eC = (0, c.useRef)(null),
        ej = (0, c.useRef)(null)
      ;(z[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = () => () => ej.current?.abort()), (k = []), (z[11] = k), (z[12] = I))
        : ((k = z[11]), (I = z[12])),
        (0, c.useEffect)(I, k))
      let eA = (0, l._U)(A.JW, "4046009702")
      z[13] !== eh ? ((P = eh.get("creation")), (z[13] = eh), (z[14] = P)) : (P = z[14])
      let eS = P
      z[15] !== eh || z[16] !== ep || z[17] !== eA
        ? ((N = function (e) {
            ex(e)
            let i = new URLSearchParams(eh)
            ;(i.delete("claim"), i.set("create", "1"), eA && i.set("creation_session", "1"), ep(i, { replace: !0 }))
          }),
          (z[15] = eh),
          (z[16] = ep),
          (z[17] = eA),
          (z[18] = N))
        : (N = z[18])
      let ek = N
      if (
        Z &&
        null != J &&
        null != K &&
        (null != eg ||
          null != eS ||
          ("1" === eh.get("creation_session") && (eA || eK(J, K).hasRecoverableSubmission())))
      ) {
        let e,
          i,
          s,
          n,
          r,
          a = eg ?? ""
        return (
          z[19] !== eh || z[20] !== ep
            ? ((e = () => {
                ;(0, d.flushSync)(() => ex(null))
                let e = new URLSearchParams(eh)
                ;(e.delete("creation"),
                  e.delete("created"),
                  e.delete("claim"),
                  e.delete("creation_session"),
                  ep(e, { replace: !0 }),
                  eC.current?.focus({ preventScroll: !0 }))
              }),
              (i = (e, i) => {
                let s = new URLSearchParams(eh)
                ;(s.set("create", "1"),
                  s.set("creation", e),
                  i && s.set("created", "1"),
                  s.delete("creation_session"),
                  ep(s, { replace: !0 }))
              }),
              (s = (e) => {
                ex(e)
                let i = new URLSearchParams(eh)
                ;(i.delete("creation"), i.delete("created"), ep(i, { replace: !0 }))
              }),
              (z[19] = eh),
              (z[20] = ep),
              (z[21] = e),
              (z[22] = i),
              (z[23] = s))
            : ((e = z[21]), (i = z[22]), (s = z[23])),
          z[24] !== eu
            ? ((n = (e, i) => {
                eu((0, ig.Ds)(e, i))
              }),
              (z[24] = eu),
              (z[25] = n))
            : (n = z[25]),
          z[26] !== J ||
          z[27] !== eS ||
          z[28] !== a ||
          z[29] !== e ||
          z[30] !== i ||
          z[31] !== s ||
          z[32] !== n ||
          z[33] !== K
            ? ((r = (0, t.jsx)(ib, {
                accountId: J,
                userId: K,
                name: a,
                profileId: eS,
                onCancel: e,
                onPersist: i,
                onRestart: s,
                onComplete: n,
              })),
              (z[26] = J),
              (z[27] = eS),
              (z[28] = a),
              (z[29] = e),
              (z[30] = i),
              (z[31] = s),
              (z[32] = n),
              (z[33] = K),
              (z[34] = r))
            : (r = z[34]),
          r
        )
      }
      z[35] !== ek ||
      z[36] !== Z ||
      z[37] !== en ||
      z[38] !== eh ||
      z[39] !== em ||
      z[40] !== ep ||
      z[41] !== ea ||
      z[42] !== el ||
      z[43] !== ed
        ? ((E = Z
            ? (0, t.jsxs)(C.t, {
                highlighted: !1,
                "data-business-profile-option": !0,
                type: "button",
                disabled: ed,
                "aria-busy": ed,
                onClick: () => {
                  if ((e_(!1), !en || null == ea || el || ea.seenAnnouncements?.[iT] != null)) ek(em.trim())
                  else {
                    let e = new URLSearchParams(eh)
                    ;(e.delete("claim"), e.set("create", "1"), ep(e, { replace: !0 }), ev(!0))
                  }
                },
                variant: "search",
                onPointerDown: iB,
                children: [
                  (0, t.jsx)("span", {
                    className: "min-w-0 flex-1 truncate",
                    children: (0, t.jsx)(f.A, {
                      id: "businessProfiles.search.createOption",
                      defaultMessage: "Create ‘{name}’",
                      description:
                        "Action below the Business Profile search field for an owner to create a business with the name they typed. {name} is the business name entered by the user and must not be translated. The short label may be truncated on narrow screens. Selecting it opens an introduction to creating a business profile.",
                      values: { name: (0, t.jsx)("bdi", { children: em.trim() }) },
                    }),
                  }),
                  (0, t.jsx)(v.sqn, {}),
                ],
              })
            : null),
          (z[35] = ek),
          (z[36] = Z),
          (z[37] = en),
          (z[38] = eh),
          (z[39] = em),
          (z[40] = ep),
          (z[41] = ea),
          (z[42] = el),
          (z[43] = ed),
          (z[44] = E))
        : (E = z[44])
      let eI = E
      return (
        z[45] !== V || z[46] !== eh || z[47] !== ep
          ? ((D = V
              ? (0, t.jsx)("div", {
                  className: "flex p-3",
                  children: (0, t.jsxs)(x.$, {
                    color: "ghostActive",
                    size: "pageAction",
                    onClick: () => {
                      let e = new URLSearchParams(eh)
                      ;(e.delete("create"), e.delete("claim"), e.delete("creation_session"), ep(e))
                    },
                    children: [
                      (0, t.jsx)(y.I, { asset: a, className: "shrink-0" }),
                      (0, t.jsx)(f.A, {
                        id: "businessProfiles.search.back",
                        defaultMessage: "Back to businesses",
                        description:
                          "Button on the business search and creation page that returns an owner to their existing business profiles.",
                      }),
                    ],
                  }),
                })
              : void 0),
            (z[45] = V),
            (z[46] = eh),
            (z[47] = ep),
            (z[48] = D))
          : (D = z[48]),
        z[49] === Symbol.for("react.memo_cache_sentinel") ? ((M = (0, t.jsx)(iC, {})), (z[49] = M)) : (M = z[49]),
        z[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, t.jsx)("h1", {
              className:
                "text-center text-[22px] leading-7 font-normal tracking-[-0.26px] text-balance text-default md:text-heading-app md:leading-8.5 md:tracking-[0.38px]",
              children: (0, t.jsx)(f.A, {
                id: "businessProfiles.search.title",
                defaultMessage: "Reach new customers and grow your business with ChatGPT",
                description:
                  "Headline on the business search and creation page, inviting owners to add a profile so customers can discover their business in ChatGPT.",
              }),
            })),
            (z[50] = T))
          : (T = z[50]),
        z[51] !== eI ||
        z[52] !== Z ||
        z[53] !== G ||
        z[54] !== em ||
        z[55] !== H ||
        z[56] !== Q ||
        z[57] !== ef ||
        z[58] !== ew ||
        z[59] !== X
          ? ((R = (0, t.jsx)("div", {
              className: "stage-UZymPJ",
              children: (0, t.jsxs)("div", {
                className: "mx-auto flex w-full max-w-lg flex-col gap-6",
                children: [
                  M,
                  T,
                  Q || Z
                    ? (0, t.jsx)("form", {
                        role: "search",
                        onFocusCapture: () => e_(!0),
                        onBlurCapture: (e) => {
                          e.currentTarget.contains(e.relatedTarget) || e_(!1)
                        },
                        onKeyDown: (e) => {
                          if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            let i = e.target === eC.current
                            i && !ew && (0, d.flushSync)(() => e_(!0))
                            let s = Array.from(
                                e.currentTarget.querySelectorAll("[data-business-profile-option]:not(:disabled)"),
                              ),
                              t = s.findIndex((i) => i === e.target),
                              n = s[t + ("ArrowDown" === e.key ? 1 : -1)]
                            ;(i && (n = "ArrowDown" === e.key ? s[0] : s.at(-1)),
                              n
                                ? (e.preventDefault(), n.focus())
                                : 0 === t && "ArrowUp" === e.key && (e.preventDefault(), eC.current?.focus()))
                          }
                          "Escape" === e.key && ew && (e.preventDefault(), eC.current?.focus(), e_(!1))
                        },
                        onSubmit: (e) => {
                          ;(e.preventDefault(), em.trim() && (eC.current?.focus(), e_(!0)))
                        },
                        children: (0, t.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, t.jsx)(w.s, {
                              id: "business-profile-search",
                              inputRef: eC,
                              inputRole: "searchbox",
                              label: ef,
                              placeholder: ef,
                              searchQuery: em,
                              variant: "discovery",
                              isClearable: !1,
                              className: "shadow-[0_4px_16px_rgba(0,0,0,0.05)]",
                              onSearchQueryChange: (e) => {
                                ;(eb(e), e_(!0))
                              },
                            }),
                            Q && H
                              ? (0, t.jsx)(
                                  iN,
                                  { query: em, configuration: H, onSelect: G, open: ew, createAction: eI },
                                  H.accountId,
                                )
                              : null,
                            Z && (!Q || (!H && !X)) && em.trim() && ew
                              ? (0, t.jsx)("div", {
                                  className: iI,
                                  children: (0, t.jsx)(C.W, { className: iP, variant: "search", children: eI }),
                                })
                              : null,
                          ],
                        }),
                      })
                    : (0, t.jsx)("p", {
                        className: "text-center text-sm text-secondary",
                        children: (0, t.jsx)(f.A, {
                          id: "businessProfiles.search.comingSoon",
                          defaultMessage: "Business search and profile creation are coming soon",
                          description:
                            "Informational message on the Business Profile discovery page for business owners whose account does not yet have access to finding or creating a profile. Replaces the search field and Create action while that feature is unavailable.",
                        }),
                      }),
                ],
              }),
            })),
            (z[51] = eI),
            (z[52] = Z),
            (z[53] = G),
            (z[54] = em),
            (z[55] = H),
            (z[56] = Q),
            (z[57] = ef),
            (z[58] = ew),
            (z[59] = X),
            (z[60] = R))
          : (R = z[60]),
        z[61] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, t.jsx)("div", { className: "shrink-0 pb-5", children: (0, t.jsx)(ee, {}) })), (z[61] = O))
          : (O = z[61]),
        z[62] === Symbol.for("react.memo_cache_sentinel") ? ((B = () => ev(!1)), (z[62] = B)) : (B = z[62]),
        z[63] !== J || z[64] !== ek || z[65] !== Z || z[66] !== en || z[67] !== em || z[68] !== et || z[69] !== Y
          ? ((W = () => {
              if (Z) {
                if (en) {
                  ej.current?.abort()
                  let e = new AbortController()
                  ;((ej.current = e),
                    (0, g.hs)(Y, J, iT, { userId: et, signal: e.signal }).catch(() => {
                      e.signal.aborted || S.v.warning("Business profile creation onboarding acknowledgement failed")
                    }))
                }
                ;(ev(!1), ek(em.trim()))
              }
            }),
            (z[63] = J),
            (z[64] = ek),
            (z[65] = Z),
            (z[66] = en),
            (z[67] = em),
            (z[68] = et),
            (z[69] = Y),
            (z[70] = W))
          : (W = z[70]),
        z[71] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = () => eC.current?.focus({ preventScroll: !0 })), (z[71] = F))
          : (F = z[71]),
        z[72] !== Z || z[73] !== ey || z[74] !== W
          ? ((q = (0, t.jsx)(L, { creationEnabled: Z, open: ey, onClose: B, onContinue: W, onReturnFocus: F })),
            (z[72] = Z),
            (z[73] = ey),
            (z[74] = W),
            (z[75] = q))
          : (q = z[75]),
        z[76] !== D || z[77] !== R || z[78] !== q
          ? ((U = (0, t.jsxs)(_.Ql, {
              contentWidth: "profile",
              contentInset: !1,
              contentClassName: "pb-0!",
              balanceScrollbarGutter: !0,
              headerPlacement: "none",
              bannerPlacement: "edge",
              banner: D,
              title: null,
              children: [R, O, q],
            })),
            (z[76] = D),
            (z[77] = R),
            (z[78] = q),
            (z[79] = U))
          : (U = z[79]),
        U
      )
    }
    function iB(e) {
      return e.preventDefault()
    }
  },
  munQ(e, i, s) {
    var t = s("ABep"),
      n = s("QosV"),
      r = s("T0Rc"),
      a = s("zTeN"),
      l = s("DBCl"),
      o = s("zd8w"),
      c = s("oyxz"),
      d = s("Wf1j"),
      u = s("HZfM"),
      f = s("EOo5"),
      h = s("Ghh3"),
      p = s("F0X3"),
      m = s("ygO2"),
      b = s("JNtf"),
      g = s("mUDD"),
      x = s("ZtSy"),
      y = s("RNul"),
      v = s("XcNx"),
      w = s("OWtl"),
      _ = s("UF7O"),
      C = s("UvKE"),
      j = s("X08k"),
      A = s("pBYO"),
      S = s("XpF1"),
      k = s("Ls9F"),
      I = s("Gnfq"),
      P = s("AW7I")
    function N(e) {
      let i,
        s,
        r = (0, n.c)(9),
        { business: a, details: l, claimLayout: o, verified: c } = e,
        d = a.address ?? l?.address,
        u = a.website_url ?? l?.website_url
      r[0] !== a || r[1] !== l || r[2] !== d || r[3] !== u
        ? ((i = { ...l, ...a, address: d, website_url: u }), (r[0] = a), (r[1] = l), (r[2] = d), (r[3] = u), (r[4] = i))
        : (i = r[4])
      let f = "ecommerce" !== a.businessType && o ? "claim-preview" : "sidebar"
      return (
        r[5] !== i || r[6] !== f || r[7] !== c
          ? ((s = (0, t.jsx)(p.ChatGptLocalBusinessMetadata, { business: i, layout: f, verified: c, readOnly: !0 })),
            (r[5] = i),
            (r[6] = f),
            (r[7] = c),
            (r[8] = s))
          : (s = r[8]),
        s
      )
    }
    function E(e) {
      let i = new URLSearchParams(e)
      return (i.delete("claim"), i)
    }
    function D(e) {
      return e + 1
    }
    function M(e) {
      let i,
        s,
        p,
        g,
        E,
        D,
        M,
        R,
        O,
        B,
        W,
        F,
        q,
        U,
        z,
        V,
        H,
        G,
        $,
        J,
        K,
        Q,
        Z,
        X,
        Y,
        ee,
        ei,
        es = (0, n.c)(150),
        {
          profileId: et,
          place: en,
          accountId: er,
          entityLookupId: ea,
          onClose: el,
          onCloseAfterApproval: eo,
          onManageProfile: ec,
          closeLabel: ed,
          selectionQueryKey: eu,
          showLoadingDialog: ef,
          showOnboarding: eh,
          telemetryEntryPoint: ep,
          initialBusiness: em,
          initialFlowType: eb,
          onCreationClaimUnavailable: eg,
          onCreationClaimApproved: ex,
          allowCreationDispute: ey,
          waitingForPlaceDetails: ev,
          publicDetails: ew,
          readRegisteredPlace: e_,
        } = e,
        eC = void 0 === ef || ef,
        ej = void 0 !== eh && eh,
        eA = void 0 !== ey && ey,
        eS = (0, a.gh)(w.u),
        ek = null != eg,
        eI = ep ?? (ej ? "sidebar" : "hub_search"),
        eP = (0, d.A)(),
        eN = eb ?? "claim"
      es[0] !== eI || es[1] !== et || es[2] !== eb
        ? ((i = () => ({ journey: "claim" === eb ? (0, A.Iw)(eI, et) : void 0, selectionQualified: "claim" === eb })),
          (es[0] = eI),
          (es[1] = et),
          (es[2] = eb),
          (es[3] = i))
        : (i = es[3])
      let [eE, eD] = (0, o.useState)(i),
        eM = eE.journey
      es[4] !== ed
        ? ((s =
            ed ??
            (0, t.jsx)(c.A, {
              id: "businessProfiles.canonicalClaim.close",
              defaultMessage: "Close",
              description:
                "Button closing business profile claim preparation or unavailable-profile details and returning to the business sidebar. Does not withdraw an existing claim. Short button label.",
            })),
          (es[4] = ed),
          (es[5] = s))
        : (s = es[5])
      let eT = s,
        eL = (0, u.Zp)(),
        eR = (0, f.As)(),
        { email: eO } = eR,
        eB = (0, o.useRef)(eR)
      ;(es[6] !== eR
        ? ((p = () => {
            eB.current = eR
          }),
          (g = [eR]),
          (es[6] = eR),
          (es[7] = p),
          (es[8] = g))
        : ((p = es[7]), (g = es[8])),
        (0, o.useLayoutEffect)(p, g))
      let eW = (0, o.useId)()
      es[9] === Symbol.for("react.memo_cache_sentinel") ? ((E = new AbortController()), (es[9] = E)) : (E = es[9])
      let eF = (0, o.useRef)(E),
        eq = (0, o.useRef)(null),
        eU = (0, o.useRef)(null)
      es[10] !== eo || es[11] !== ex
        ? ((D = () => {
            ;(ex?.(), eo?.())
          }),
          (es[10] = eo),
          (es[11] = ex),
          (es[12] = D))
        : (D = es[12])
      let ez = (0, o.useEffectEvent)(D)
      es[13] !== er || es[14] !== eL || es[15] !== ec || es[16] !== eS.queryClient
        ? ((M = (e, i) => {
            let s = void 0 === i ? "insights" : i
            null != ec
              ? ec(s)
              : ((0, S.xz)(eS.queryClient, er, e),
                eS.queryClient.invalidateQueries({ queryKey: ["business-profiles", er] }),
                eL((0, I.Ds)(e, s)))
          }),
          (es[13] = er),
          (es[14] = eL),
          (es[15] = ec),
          (es[16] = eS.queryClient),
          (es[17] = M))
        : (M = es[17])
      let eV = M
      es[18] !== er ||
      es[19] !== eR.accountId ||
      es[20] !== eR.authMethod ||
      es[21] !== eR.isLoading ||
      es[22] !== eR.userId ||
      es[23] !== eI ||
      es[24] !== ex ||
      es[25] !== en?.entity_key ||
      es[26] !== et
        ? ((R = (e, i, s, t, n) => {
            let r = eR.userId,
              a =
                (0, v.x)({ browser: !0 }) &&
                !eR.isLoading &&
                "chatgpt" === eR.authMethod &&
                eR.accountId === er &&
                null != r
                  ? {
                      accountId: er,
                      userId: r,
                      getAbortSignal: s,
                      assertCurrentActor: () => {
                        let e = eB.current
                        if (
                          (s().throwIfAborted(),
                          e.isLoading || "chatgpt" !== e.authMethod || e.accountId !== er || e.userId !== r)
                        )
                          throw Error("Shopify verification account changed")
                      },
                    }
                  : void 0
            return (0, P.createClaimVerification)(void 0 === n ? null : n, {
              flowType: e,
              shopifyActor: a,
              businessProfileId: et,
              entityKey: en?.entity_key,
              accountId: er,
              getAbortSignal: s,
              currentRequest: t,
              onApproved: ex,
              telemetryJourney: i,
              telemetryEntryPoint: eI,
              isTelemetryActorCurrent: () => {
                let e = eB.current
                return !eF.current.signal.aborted && !e.isLoading && e.accountId === er && e.userId === r
              },
            })
          }),
          (es[18] = er),
          (es[19] = eR.accountId),
          (es[20] = eR.authMethod),
          (es[21] = eR.isLoading),
          (es[22] = eR.userId),
          (es[23] = eI),
          (es[24] = ex),
          (es[25] = en?.entity_key),
          (es[26] = et),
          (es[27] = R))
        : (R = es[27])
      let eH = R
      ;(es[28] !== er ||
      es[29] !== eR.userId ||
      es[30] !== ea ||
      es[31] !== eW ||
      es[32] !== eP ||
      es[33] !== en?.entity_lookup_id ||
      es[34] !== et ||
      es[35] !== eu
        ? ((O = eu ?? ["business-profile-search-claim", er, eR.userId, eP.locale, et, ea ?? en?.entity_lookup_id, eW]),
          (es[28] = er),
          (es[29] = eR.userId),
          (es[30] = ea),
          (es[31] = eW),
          (es[32] = eP),
          (es[33] = en?.entity_lookup_id),
          (es[34] = et),
          (es[35] = eu),
          (es[36] = O))
        : (O = es[36]),
        es[37] !== eH || es[38] !== em || es[39] !== eN || es[40] !== eM
          ? ((B =
              null == em
                ? void 0
                : () => ({
                    business: em,
                    verification: eH(eN, eM, () => eF.current.signal),
                    action: eN,
                    flowType: eN,
                  })),
            (es[37] = eH),
            (es[38] = em),
            (es[39] = eN),
            (es[40] = eM),
            (es[41] = B))
          : (B = es[41]))
      let {
          data: eG,
          isError: e$,
          refetch: eJ,
        } = (0, r.I)({
          enabled: !(void 0 !== ev && ev),
          queryKey: O,
          initialData: B,
          staleTime: 1 / 0,
          gcTime: 0,
          retry: !1,
          refetchOnMount: !1,
          refetchOnWindowFocus: !1,
          refetchOnReconnect: !1,
          queryFn: async function (e) {
            let { signal: i } = e
            eq.current?.abort()
            let s = new AbortController()
            eq.current = s
            let t = AbortSignal.any([i, s.signal]),
              n = null == en ? void 0 : window.setTimeout(() => s.abort(), 3e3),
              r = eM,
              a = (0, A.x$)(eS, eM, "selection", "load")
            try {
              let e = await (async () => {
                let e, i
                if (null != en) {
                  if (ek && null == ew && !e_) throw Error("Could not load details for the selected place")
                  let e = () => {
                      let e = eB.current
                      if (e.isLoading || e.accountId !== er || !eR.userId || e.userId !== eR.userId)
                        throw Error("Business claim account changed")
                      return t
                    },
                    i = eH("claim", r, e, void 0, en.entity_lookup_id),
                    s = await i.prepareNewPlaceClaim(),
                    n = ew ?? (await e_?.(e()))
                  return (
                    e().throwIfAborted(),
                    null == r && eD({ journey: (r = i.telemetryJourney), selectionQualified: !1 }),
                    {
                      business: (0, _.q)(en, n),
                      verification: i,
                      action: "claim",
                      flowType: "claim",
                      initialPreparation:
                        s.eligibleMethods || n?.phone || s.claimDomain || s.shopifyShopDomain ? s : void 0,
                    }
                  )
                }
                let s = await (0, P.readProfileClaimPreparation)(et, { accountId: er, getAbortSignal: () => t })
                if ((t.throwIfAborted(), ek && !(0, P.canSuggestProfileClaim)(s, eA)))
                  throw Error("This business is no longer available to claim")
                let n = s.ownership.current_request?.kind ?? s.ownership.available_action,
                  o = "dispute" === n ? "dispute" : "claim",
                  c =
                    "claim" === o &&
                    null == s.ownership.current_request &&
                    "local" === s.business_type &&
                    !(s.eligible_methods.includes("phone") && s.eligible_methods.includes("domain")),
                  d = c ? (ea ?? null) : null,
                  u = "local" === s.business_type ? ea : null
                if (
                  "local" === s.business_type &&
                  "claim" === o &&
                  "claim" === n &&
                  null == s.ownership.current_request &&
                  !s.can_manage &&
                  null == u
                )
                  try {
                    let i = await h.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                      additionalHeaders: { "x-openai-use-sheep": "1", "ChatGPT-Account-ID": er, [l.zBc]: er },
                      signal: t,
                      requestBody: { business_profile_id: et },
                      expectedErrorStatuses: [400, 403, 404, 409, 422],
                    })
                    t.throwIfAborted()
                    let n = i.eligible_verification_methods
                    i.business_profile_id === et &&
                      i.entity_lookup_id?.startsWith("lbe1_") &&
                      i.ownership_state_enabled &&
                      i.ownership?.available_action === "claim" &&
                      null == i.ownership.current_request &&
                      ((u = i.entity_lookup_id),
                      c &&
                        s.eligible_methods.every(T) &&
                        null != n &&
                        n.length > 0 &&
                        ((d = i.entity_lookup_id),
                        (e = {
                          ...s,
                          eligible_methods: [
                            ...n,
                            ...(s.eligible_methods.includes("persona") || !0 === i.persona_verification_available
                              ? ["persona"]
                              : []),
                          ],
                          claim_domain: i.claim_domain ?? null,
                        })))
                  } catch {
                    t.throwIfAborted()
                  }
                let f = !s.can_manage && "claim" === n,
                  p = f && s.ownership.current_request?.kind === "claim"
                f && null == r && eD({ journey: (r = (0, A.Iw)(eI, s.business_profile_id)), selectionQualified: p })
                let m = ew
                if (null == m && null != u && !s.can_manage)
                  try {
                    m = await (0, k.KQ)(u, { accountId: er, locale: eP.locale, signal: t })
                  } catch {
                    t.throwIfAborted()
                  }
                let b = eH(o, f ? r : void 0, () => t, s.ownership.current_request, d),
                  g = e?.eligible_methods,
                  x =
                    null == g
                      ? b
                      : {
                          ...b,
                          prepare: async () => {
                            let e = await b.prepare()
                            return (
                              t.throwIfAborted(),
                              "method" === e.step
                                ? { ...e, eligibleMethods: [...(null != e.shopifyShopDomain ? ["shopify"] : []), ...g] }
                                : e
                            )
                          },
                        }
                return (
                  ek && "claim" === o
                    ? (i = await b.prepareProfileMethods(e ?? s))
                    : p
                      ? (null == a && (a = (0, A.x$)(eS, r, "selection", "prepare")), (i = await b.prepare()))
                      : s.can_manage ||
                        s.ownership.current_request?.kind !== "dispute" ||
                        (i = { step: b.initialStep }),
                  t.throwIfAborted(),
                  {
                    profile: s,
                    business: {
                      ...m,
                      ...(0, _.s)(s, m),
                      name: m?.name ?? s.display_name,
                      address: m?.address ?? s.display_address,
                      website_url: m?.website_url ?? s.website_url,
                    },
                    verification: x,
                    initialPreparation: i,
                    action: n,
                    flowType: o,
                  }
                )
              })().finally(() => window.clearTimeout(n))
              return ((0, A.BR)(eS, r, a, "succeeded"), e)
            } catch (n) {
              let e = (0, A._3)(n)
              ;(0, A.BR)(eS, r, a, e.outcome, e.errorCategory)
              let t = eB.current
              throw (
                !eg ||
                  eq.current !== s ||
                  i.aborted ||
                  eF.current.signal.aborted ||
                  t.isLoading ||
                  t.accountId !== er ||
                  null == t.userId ||
                  t.userId !== eR.userId ||
                  t.authMethod !== eR.authMethod ||
                  eg(),
                n
              )
            }
          },
        }),
        eK = eE.selectionQualified && eG?.business == null && (eC || e$)
      ;(es[42] !== eM
        ? ((W = () => (0, A.nn)(eM)), (F = [eM]), (es[42] = eM), (es[43] = W), (es[44] = F))
        : ((W = es[43]), (F = es[44])),
        (0, o.useLayoutEffect)(W, F),
        es[45] !== eS || es[46] !== eK || es[47] !== eM
          ? ((q = () => (eK ? (0, A.fY)(eS, eM, "selection") : void 0)),
            (U = [eS, eM, eK]),
            (es[45] = eS),
            (es[46] = eK),
            (es[47] = eM),
            (es[48] = q),
            (es[49] = U))
          : ((q = es[48]), (U = es[49])),
        (0, o.useEffect)(q, U),
        es[50] !== e$ || es[51] !== eS || es[52] !== eE.selectionQualified || es[53] !== eM
          ? ((z = () =>
              (0, A.dA)(eS, eM, "selection", eE.selectionQualified && e$ ? (eM?.lastError ?? "unknown") : void 0)),
            (V = [eS, eM, eE.selectionQualified, e$]),
            (es[50] = e$),
            (es[51] = eS),
            (es[52] = eE.selectionQualified),
            (es[53] = eM),
            (es[54] = z),
            (es[55] = V))
          : ((z = es[54]), (V = es[55])),
        (0, o.useEffect)(z, V),
        es[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = () => {
              let e = new AbortController()
              return (
                (eF.current = e),
                () => {
                  ;(e.abort(), eq.current?.abort())
                }
              )
            }),
            (G = []),
            (es[56] = H),
            (es[57] = G))
          : ((H = es[56]), (G = es[57])),
        (0, o.useLayoutEffect)(H, G),
        es[58] !== er ||
        es[59] !== ez ||
        es[60] !== eL ||
        es[61] !== ec ||
        es[62] !== et ||
        es[63] !== eS.queryClient ||
        es[64] !== eG
          ? (($ = () => {
              if (!(!et || !eG?.profile?.can_manage || eq.current?.signal.aborted) && eU.current !== eG) {
                if (((eU.current = eG), ez(), null != ec)) return void ec("insights")
                ;((0, S.xz)(eS.queryClient, er, et),
                  eS.queryClient.invalidateQueries({ queryKey: ["business-profiles", er] }),
                  eL((0, I.Ds)(et)))
              }
            }),
            (es[58] = er),
            (es[59] = ez),
            (es[60] = eL),
            (es[61] = ec),
            (es[62] = et),
            (es[63] = eS.queryClient),
            (es[64] = eG),
            (es[65] = $))
          : ($ = es[65]),
        es[66] !== er || es[67] !== eL || es[68] !== ec || es[69] !== et || es[70] !== eS.queryClient || es[71] !== eG
          ? ((J = [eG, er, et, eL, eS.queryClient, ec]),
            (es[66] = er),
            (es[67] = eL),
            (es[68] = ec),
            (es[69] = et),
            (es[70] = eS.queryClient),
            (es[71] = eG),
            (es[72] = J))
          : (J = es[72]),
        (0, o.useEffect)($, J),
        es[73] !== el || es[74] !== eo || es[75] !== eS || es[76] !== eG?.verification || es[77] !== eM
          ? ((K = () => {
              let e = eG?.verification.getApprovedProfileId() != null
              ;((0, A.wj)(eS, eM), eF.current.abort(), eq.current?.abort(), e && eo ? eo() : el())
            }),
            (es[73] = el),
            (es[74] = eo),
            (es[75] = eS),
            (es[76] = eG?.verification),
            (es[77] = eM),
            (es[78] = K))
          : (K = es[78]))
      let eQ = K
      if (eG?.business == null || eG.profile?.can_manage) {
        let e, i, s, n
        return eC || e$
          ? (es[79] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(b.L3, {
                  children: (0, t.jsx)(c.A, {
                    id: "businessProfiles.searchClaim.loading.title",
                    defaultMessage: "Business profile",
                    description: "Title while loading the selected business profile's claim preparation",
                  }),
                })),
                (es[79] = e))
              : (e = es[79]),
            es[80] !== e$ || es[81] !== eJ
              ? ((i = e$
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("p", {
                          role: "alert",
                          children: (0, t.jsx)(c.A, {
                            id: "businessProfiles.searchClaim.preparation.error",
                            defaultMessage: "Couldn’t load this business profile. Try again",
                            description:
                              "Error when checking the selected business profile's details and claim eligibility",
                          }),
                        }),
                        (0, t.jsx)(m.$, {
                          onClick: () => void eJ(),
                          children: (0, t.jsx)(c.A, {
                            id: "businessProfiles.searchClaim.preparation.retry",
                            defaultMessage: "Try again",
                            description: "Retries loading the selected business profile",
                          }),
                        }),
                      ],
                    })
                  : (0, t.jsx)(y.y, {})),
                (es[80] = e$),
                (es[81] = eJ),
                (es[82] = i))
              : (i = es[82]),
            es[83] !== eQ || es[84] !== eT
              ? ((s = (0, t.jsx)(m.$, { color: "secondary", onClick: eQ, children: eT })),
                (es[83] = eQ),
                (es[84] = eT),
                (es[85] = s))
              : (s = es[85]),
            es[86] !== eQ || es[87] !== ej || es[88] !== i || es[89] !== s
              ? ((n = (0, t.jsxs)(L, { onClose: eQ, fullScreen: ej, children: [e, i, s] })),
                (es[86] = eQ),
                (es[87] = ej),
                (es[88] = i),
                (es[89] = s),
                (es[90] = n))
              : (n = es[90]),
            n)
          : null
      }
      let { profile: eZ, business: eX, verification: eY, initialPreparation: e1, action: e0, flowType: e2 } = eG
      es[91] !== e0 || es[92] !== eX || es[93] !== ew
        ? ((Q = (e) =>
            (0, t.jsx)(N, { business: eX, details: ew, claimLayout: "claim" === e0 || "dispute" === e0, verified: e })),
          (es[91] = e0),
          (es[92] = eX),
          (es[93] = ew),
          (es[94] = Q))
        : (Q = es[94])
      let e5 = Q
      if ("claim" !== e0 && "dispute" !== e0) {
        let e, i, s, n, r, a
        es[95] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(b.L3, {
              children: (0, t.jsx)(c.A, {
                id: "businessProfiles.searchClaim.details.title",
                defaultMessage: "Business profile",
                description: "Title of the selected business profile's read-only details dialog",
              }),
            })),
            (es[95] = e))
          : (e = es[95])
        let l = eZ?.is_verified ?? !1
        return (
          es[96] !== e5 || es[97] !== l ? ((i = e5(l)), (es[96] = e5), (es[97] = l), (es[98] = i)) : (i = es[98]),
          es[99] !== eZ?.is_verified
            ? ((s = (0, t.jsx)(b.rr, {
                children: eZ?.is_verified
                  ? (0, t.jsx)(c.A, {
                      id: "businessProfiles.searchClaim.claimed.ownerDescription",
                      defaultMessage: "This business profile is managed by another account",
                      description:
                        "Explanation in read-only details for an already-claimed business selected in Business Profile search. Ownership belongs to another account and no claim, dispute or access-request action is offered.",
                    })
                  : (0, t.jsx)(c.A, {
                      id: "businessProfiles.searchClaim.unavailable.description",
                      defaultMessage: "This business profile isn’t available to claim",
                      description:
                        "Status when server preparation does not allow the current account to claim a business profile",
                    }),
              })),
              (n =
                eZ?.is_verified &&
                (0, t.jsx)(x.G, {
                  appearance: "button",
                  href: "https://help.openai.com/",
                  initiator: "external_link",
                  openTarget: "external-browser",
                  children: (0, t.jsx)(c.A, {
                    id: "businessProfiles.searchClaim.contactSupport",
                    defaultMessage: "Contact support",
                    description:
                      "Open the OpenAI Help Center when a claimed business profile has no available claim or dispute action.",
                  }),
                })),
              (es[99] = eZ?.is_verified),
              (es[100] = s),
              (es[101] = n))
            : ((s = es[100]), (n = es[101])),
          es[102] !== eQ || es[103] !== eT
            ? ((r = (0, t.jsx)(m.$, { color: "secondary", onClick: eQ, children: eT })),
              (es[102] = eQ),
              (es[103] = eT),
              (es[104] = r))
            : (r = es[104]),
          es[105] !== eQ || es[106] !== i || es[107] !== s || es[108] !== n || es[109] !== r
            ? ((a = (0, t.jsxs)(L, { onClose: eQ, children: [e, i, s, n, r] })),
              (es[105] = eQ),
              (es[106] = i),
              (es[107] = s),
              (es[108] = n),
              (es[109] = r),
              (es[110] = a))
            : (a = es[110]),
          a
        )
      }
      let e3 = "claim" === e2 ? eM : void 0,
        e4 = ej && "claim" === e2 && eZ?.ownership.current_request == null,
        e6 = "claim" === e2 ? eM : void 0
      es[111] !== eX || es[112] !== eZ || es[113] !== ew
        ? ((Z = null != eZ && null != ew ? (0, _.s)(eZ, ew) : eX),
          (es[111] = eX),
          (es[112] = eZ),
          (es[113] = ew),
          (es[114] = Z))
        : (Z = es[114])
      let e8 = eZ?.phone_destination,
        e7 = e1?.step ?? "account",
        e9 =
          "dispute" === e2 && eZ?.ownership.current_request == null && eZ?.dispute_access_verification_enabled === !1
            ? void 0
            : eY.prepare
      return (
        es[115] !== eV || es[116] !== et || es[117] !== eY
          ? ((X = (e) => {
              let i = eY.getApprovedProfileId()
              i && (null == et || i === et) && eV(i, e)
            }),
            (es[115] = eV),
            (es[116] = et),
            (es[117] = eY),
            (es[118] = X))
          : (X = es[118]),
        es[119] !== eO ||
        es[120] !== e9 ||
        es[121] !== X ||
        es[122] !== eY.cancel ||
        es[123] !== eY.check ||
        es[124] !== eY.checkDomain ||
        es[125] !== eY.resend ||
        es[126] !== eY.resume ||
        es[127] !== eY.send ||
        es[128] !== eY.sendEmail ||
        es[129] !== eY.start ||
        es[130] !== eY.startEmail ||
        es[131] !== eY.verify
          ? ((Y = {
              email: eO,
              onPrepareVerification: e9,
              onStartVerification: eY.start,
              onStartEmailVerification: eY.startEmail,
              onSendEmailCode: eY.sendEmail,
              onSendCode: eY.send,
              onResendCode: eY.resend,
              onVerifyCode: eY.verify,
              onCheckDomain: eY.checkDomain,
              onCheckClaim: eY.check,
              onResumeClaim: eY.resume,
              onCancelClaim: eY.cancel,
              onManageProfile: X,
            }),
            (es[119] = eO),
            (es[120] = e9),
            (es[121] = X),
            (es[122] = eY.cancel),
            (es[123] = eY.check),
            (es[124] = eY.checkDomain),
            (es[125] = eY.resend),
            (es[126] = eY.resume),
            (es[127] = eY.send),
            (es[128] = eY.sendEmail),
            (es[129] = eY.start),
            (es[130] = eY.startEmail),
            (es[131] = eY.verify),
            (es[132] = Y))
          : (Y = es[132]),
        es[133] !== eQ ||
        es[134] !== e2 ||
        es[135] !== e1 ||
        es[136] !== ek ||
        es[137] !== e5 ||
        es[138] !== e6 ||
        es[139] !== Z ||
        es[140] !== e8 ||
        es[141] !== e7 ||
        es[142] !== Y
          ? ((ee = (0, t.jsx)(C.BusinessClaimFlow, {
              telemetryJourney: e6,
              flowType: e2,
              hideUnavailableMethods: ek,
              business: Z,
              verificationPhoneHint: e8,
              businessPreview: e5,
              initialStep: e7,
              initialPreparation: e1,
              actions: Y,
              onClose: eQ,
            })),
            (es[133] = eQ),
            (es[134] = e2),
            (es[135] = e1),
            (es[136] = ek),
            (es[137] = e5),
            (es[138] = e6),
            (es[139] = Z),
            (es[140] = e8),
            (es[141] = e7),
            (es[142] = Y),
            (es[143] = ee))
          : (ee = es[143]),
        es[144] !== eX.name || es[145] !== eQ || es[146] !== e3 || es[147] !== e4 || es[148] !== ee
          ? ((ei = (0, t.jsx)(j.i, {
              telemetryJourney: e3,
              required: e4,
              businessName: eX.name,
              onClose: eQ,
              children: ee,
            })),
            (es[144] = eX.name),
            (es[145] = eQ),
            (es[146] = e3),
            (es[147] = e4),
            (es[148] = ee),
            (es[149] = ei))
          : (ei = es[149]),
        ei
      )
    }
    function T(e) {
      return "persona" === e
    }
    function L(e) {
      let i,
        s,
        r,
        a,
        l = (0, n.c)(13),
        { children: o, onClose: c, fullScreen: d } = e,
        u = void 0 !== d && d
      l[0] !== c
        ? ((i = (e) => {
            e || c()
          }),
          (l[0] = c),
          (l[1] = i))
        : (i = l[1])
      let f = u ? "full" : void 0,
        h = u ? "chatgpt" : void 0,
        p = u
          ? "flex h-full flex-col items-center justify-center gap-4 bg-surface-card text-base text-default select-none"
          : "flex flex-col gap-4"
      return (
        l[2] !== o || l[3] !== p
          ? ((s = (0, t.jsx)("div", { className: p, children: o })), (l[2] = o), (l[3] = p), (l[4] = s))
          : (s = l[4]),
        l[5] !== f || l[6] !== h || l[7] !== s
          ? ((r = (0, t.jsx)(g.R4, { size: f, variant: h, children: s })),
            (l[5] = f),
            (l[6] = h),
            (l[7] = s),
            (l[8] = r))
          : (r = l[8]),
        l[9] !== u || l[10] !== i || l[11] !== r
          ? ((a = (0, t.jsx)(b.lG, { open: !0, unstyledContent: u, viewportSized: u, onOpenChange: i, children: r })),
            (l[9] = u),
            (l[10] = i),
            (l[11] = r),
            (l[12] = a))
          : (a = l[12]),
        a
      )
    }
    s.d(
      i,
      {},
      {
        CanonicalProfileClaim: M,
        F: function (e) {
          let i,
            s,
            r,
            l,
            d,
            h,
            p = (0, n.c)(37),
            { accountId: m, search: b, children: g } = e,
            x = (0, a.gh)(w.u),
            { userId: y } = (0, f.As)(),
            [v, _] = (0, u.ok)(),
            [C, j] = (0, o.useState)(0),
            [A, S] = (0, o.useState)()
          p[0] !== m || p[1] !== v
            ? ((i = null != m ? v.get("claim") : null), (p[0] = m), (p[1] = v), (p[2] = i))
            : (i = p[2])
          let k = i,
            [I, P] = (0, o.useState)(null),
            N = null == k && I?.accountId === m && I.userId === y ? I.place : null,
            T = null
          if (null != k) {
            let e
            ;(p[3] !== k ? ((e = { profileId: k }), (p[3] = k), (p[4] = e)) : (e = p[4]), (T = e))
          } else if (null != N) {
            let e
            ;(p[5] !== N ? ((e = { place: N }), (p[5] = N), (p[6] = e)) : (e = p[6]), (T = e))
          }
          p[7] !== m || p[8] !== x.queryClient
            ? ((s = () => {
                ;(x.queryClient.invalidateQueries({ queryKey: ["business-profiles", m] }), j(D))
              }),
              (p[7] = m),
              (p[8] = x.queryClient),
              (p[9] = s))
            : (s = p[9])
          let L = s
          p[10] !== L || p[11] !== _ || p[12] !== A
            ? ((r = () => {
                ;(P(null),
                  _(E, { replace: !0 }),
                  L(),
                  A?.isConnected
                    ? A.focus({ preventScroll: !0 })
                    : document.querySelector('input[role="searchbox"]')?.focus())
              }),
              (p[10] = L),
              (p[11] = _),
              (p[12] = A),
              (p[13] = r))
            : (r = p[13])
          let R = r
          if (p[14] !== m || p[15] !== g || p[16] !== C || p[17] !== b || p[18] !== _ || p[19] !== y) {
            let e
            ;(p[21] !== m || p[22] !== b?.accountId || p[23] !== _ || p[24] !== y
              ? ((e = (e, i) => {
                  null != m &&
                    m === b?.accountId &&
                    null != y &&
                    (S(i),
                    P(
                      null != e.place
                        ? {
                            accountId: m,
                            userId: y,
                            place: e.place,
                            publicDetails: {
                              name: e.name,
                              address: e.address,
                              website_url: e.website,
                              image_url: e.logoUrl,
                            },
                          }
                        : null,
                    ),
                    _((i) => {
                      let s = new URLSearchParams(i)
                      return (null != e.businessProfileId ? s.set("claim", e.businessProfileId) : s.delete("claim"), s)
                    }))
                }),
                (p[21] = m),
                (p[22] = b?.accountId),
                (p[23] = _),
                (p[24] = y),
                (p[25] = e))
              : (e = p[25]),
              (l = g(null == b ? void 0 : { ...b, revision: (b.revision ?? 0) + C }, e)),
              (p[14] = m),
              (p[15] = g),
              (p[16] = C),
              (p[17] = b),
              (p[18] = _),
              (p[19] = y),
              (p[20] = l))
          } else l = p[20]
          return (
            p[26] !== m ||
            p[27] !== T ||
            p[28] !== R ||
            p[29] !== I?.publicDetails ||
            p[30] !== k ||
            p[31] !== N ||
            p[32] !== y
              ? ((d =
                  null != T &&
                  null != m &&
                  (0, t.jsx)(
                    M,
                    {
                      ...T,
                      publicDetails: null != N ? I?.publicDetails : void 0,
                      accountId: m,
                      initialFlowType: null != N ? "claim" : void 0,
                      onClose: R,
                      showLoadingDialog: !1,
                      closeLabel: (0, t.jsx)(c.A, {
                        id: "businessProfiles.searchClaim.claimed.back",
                        defaultMessage: "Back to search",
                        description:
                          "Button closing read-only details of a Business Profile managed by another account. Returns to the existing search query and its results.",
                      }),
                    },
                    m + ":" + y + ":" + (N?.entity_lookup_id ?? k),
                  )),
                (p[26] = m),
                (p[27] = T),
                (p[28] = R),
                (p[29] = I?.publicDetails),
                (p[30] = k),
                (p[31] = N),
                (p[32] = y),
                (p[33] = d))
              : (d = p[33]),
            p[34] !== l || p[35] !== d
              ? ((h = (0, t.jsxs)(t.Fragment, { children: [l, d] })), (p[34] = l), (p[35] = d), (p[36] = h))
              : (h = p[36]),
            h
          )
        },
        g: N,
      },
    )
  },
  NtJ1() {},
  ilEt() {},
  IQaS(e, i, s) {
    let t = (0, s("nkTT").a)({
      name: "arrow-rotate-clockwise-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
        visualBounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
        center: { x: 8.000244, y: 7.999512 },
        insets: { top: 1.641113, right: 1.641357, bottom: 1.64209, left: 1.641846 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000244, y: 7.999512 }, foreground: { x: 8.000244, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00024 1.64111C10.2192 1.64122 12.1707 2.77917 13.3079 4.50049V3.13916C13.3079 2.84921 13.5433 2.61377 13.8333 2.61377C14.1232 2.61379 14.3586 2.84922 14.3586 3.13916V6.05615C14.3585 6.34594 14.1231 6.58055 13.8333 6.58057H11.2405C10.9507 6.58047 10.7162 6.34589 10.7161 6.05615C10.7161 5.76626 10.9506 5.53086 11.2405 5.53076H12.6975C11.808 3.84247 10.039 2.69201 8.00024 2.69189C5.06864 2.69189 2.69183 5.06795 2.69165 7.99951C2.69165 10.9312 5.06853 13.3081 8.00024 13.3081C10.5257 13.308 12.6406 11.5439 13.177 9.18018C13.2412 8.89744 13.5222 8.71957 13.8049 8.78369C14.0877 8.84785 14.2646 9.12984 14.2004 9.4126C13.5578 12.244 11.0266 14.3578 8.00024 14.3579C4.48863 14.3579 1.64185 11.5111 1.64185 7.99951C1.64202 4.48805 4.48874 1.64111 8.00024 1.64111Z" fill="currentColor"/>',
    })
    s.d(i, {}, { E: t })
  },
  QF5E(e, i, s) {
    let t = (0, s("nkTT").a)({
      name: "bar-chart-regular-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2, y: 2, width: 20, height: 20 },
        visualBounds: { x: 2, y: 2, width: 20, height: 20 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2, y: 2, width: 20, height: 20 },
        center: { x: 12, y: 12 },
        insets: { top: 2, right: 2, bottom: 2, left: 2 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13.4961 2C14.8768 2 15.9961 3.11929 15.9961 4.5V6.47461H19.5C20.8807 6.47461 22 7.5939 22 8.97461V18.9746C22 20.6315 20.6569 21.9746 19 21.9746H15.2168C15.1457 21.9906 15.072 22 14.9961 22C14.9202 22 14.8465 21.9906 14.7754 21.9746H9.2168C9.14573 21.9906 9.072 22 8.99609 22C8.92019 22 8.84646 21.9906 8.77539 21.9746H5C3.34315 21.9746 2 20.6315 2 18.9746V13.4746C2 12.0939 3.11929 10.9746 4.5 10.9746H7.99609V4.5C7.99609 3.11929 9.11538 2 10.4961 2H13.4961ZM15.9961 19.9746H19C19.5523 19.9746 20 19.5269 20 18.9746V8.97461C20 8.69847 19.7761 8.47461 19.5 8.47461H15.9961V19.9746ZM10.4961 4C10.22 4 9.99609 4.22386 9.99609 4.5V19.9746H13.9961V4.5C13.9961 4.22386 13.7722 4 13.4961 4H10.4961ZM4.5 12.9746C4.22386 12.9746 4 13.1985 4 13.4746V18.9746C4 19.5269 4.44772 19.9746 5 19.9746H7.99609V12.9746H4.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(i, {}, { w: t })
  },
  lIWc(e, i, s) {
    let t = (0, s("nkTT").a)({
      name: "list-star-regular-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 1.287598, y: 2.386719, width: 20.712402, height: 19.241211 },
        visualBounds: { x: 1.287598, y: 2.386719, width: 20.712402, height: 19.241211 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.287598, y: 2.386719, width: 20.712402, height: 19.241211 },
        center: { x: 11.643799, y: 12.007325 },
        insets: { top: 2.386719, right: 2, bottom: 2.37207, left: 1.287598 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 11.643799, y: 12.007325 },
          foreground: { x: 11.643799, y: 12.007325 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M4.97371 12.9403C5.51883 12.2243 6.61307 12.2244 7.15828 12.9403L7.26667 13.1044L8.09089 14.5672L9.73933 14.9003C10.7908 15.113 11.2065 16.3935 10.4805 17.1835L9.34285 18.4208L9.53621 20.0897C9.65934 21.1557 8.56966 21.9471 7.59382 21.5008L6.0655 20.8016L4.53816 21.5008C3.56223 21.9474 2.47353 21.1559 2.59675 20.0897L2.78914 18.4208L1.65242 17.1835C0.926028 16.3933 1.34154 15.1126 2.39363 14.9003L4.04109 14.5672L4.86628 13.1044L4.97371 12.9403ZM5.64363 15.7987C5.44711 16.1473 5.10811 16.3932 4.71589 16.4725L3.87117 16.6424L4.45417 17.2772C4.72485 17.5718 4.85447 17.9696 4.80867 18.3671L4.70906 19.2225L5.49324 18.8651L5.63191 18.8104C5.91394 18.7167 6.21905 18.7166 6.50105 18.8104L6.63972 18.8651L7.42292 19.2225L7.32429 18.3671C7.27846 17.9694 7.40788 17.5719 7.67878 17.2772L8.26082 16.6424L7.41707 16.4725C7.02473 16.3934 6.68598 16.1473 6.48933 15.7987L6.06648 15.0477L5.64363 15.7987Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M21.0001 16.0145C21.5524 16.0145 22.0001 16.4622 22.0001 17.0145C22.0001 17.5668 21.5524 18.0145 21.0001 18.0145H13.0001C12.4478 18.0145 12.0001 17.5668 12.0001 17.0145C12.0001 16.4622 12.4478 16.0145 13.0001 16.0145H21.0001Z" fill="currentColor"/> <path d="M4.97371 2.9237C5.51883 2.20768 6.61307 2.20778 7.15828 2.9237L7.26667 3.08776L8.09089 4.55065L9.73933 4.88366C10.7908 5.09638 11.2065 6.37687 10.4805 7.16686L9.34285 8.40416L9.53621 10.0731C9.65934 11.1391 8.56966 11.9305 7.59382 11.4842L6.0655 10.785L4.53816 11.4842C3.56223 11.9308 2.47353 11.1393 2.59675 10.0731L2.78914 8.40416L1.65242 7.16686C0.926028 6.37671 1.34154 5.09597 2.39363 4.88366L4.04109 4.55065L4.86628 3.08776L4.97371 2.9237ZM5.64363 5.78209C5.44711 6.13069 5.10811 6.37661 4.71589 6.45592L3.87117 6.62584L4.45417 7.26061C4.72485 7.55524 4.85447 7.95299 4.80867 8.35045L4.70906 9.20592L5.49324 8.8485L5.63191 8.79381C5.91394 8.70014 6.21905 8.7 6.50105 8.79381L6.63972 8.8485L7.42292 9.20592L7.32429 8.35045C7.27846 7.95282 7.40788 7.55529 7.67878 7.26061L8.26082 6.62584L7.41707 6.45592C7.02473 6.37676 6.68598 6.13067 6.48933 5.78209L6.06648 5.03112L5.64363 5.78209Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M21.0001 5.99791C21.5524 5.99791 22.0001 6.44563 22.0001 6.99791C22.0001 7.5502 21.5524 7.99791 21.0001 7.99791H13.0001C12.4478 7.99791 12.0001 7.5502 12.0001 6.99791C12.0001 6.44563 12.4478 5.99791 13.0001 5.99791H21.0001Z" fill="currentColor"/>',
    })
    s.d(i, {}, { T: t })
  },
  LpAl(e, i, s) {
    let t = (0, s("nkTT").a)({
      name: "verified-checkmark-regular-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 1.578613, y: 1.578125, width: 20.843079, height: 20.876343 },
        visualBounds: { x: 1.578613, y: 1.578125, width: 20.843079, height: 20.876343 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.578613, y: 1.578125, width: 20.843079, height: 20.876343 },
        center: { x: 12.000153, y: 12.016297 },
        insets: { top: 1.578125, right: 1.578308, bottom: 1.545532, left: 1.578613 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 12.000153, y: 12.016297 },
          foreground: { x: 12.000153, y: 12.016297 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M14.5628 8.46268C14.8702 8.00419 15.4918 7.88116 15.9505 8.18827C16.4092 8.4958 16.5314 9.11724 16.2239 9.57596L12.0686 15.7752C11.6202 16.444 10.6658 16.5201 10.1165 15.9314L7.8743 13.5291C7.49791 13.1254 7.51979 12.4927 7.92313 12.116C8.32691 11.7393 8.96043 11.7612 9.33719 12.1648L10.9329 13.8758L14.5628 8.46268Z" fill="currentColor"/> <path d="M9.87821 2.45682C11.0497 1.28521 12.9499 1.28524 14.1214 2.45682L15.1966 3.53202C15.3841 3.71923 15.6387 3.82401 15.9036 3.82401H17.1751C18.8317 3.82418 20.1748 5.16749 20.1751 6.82401V8.09647C20.1752 8.36148 20.2807 8.61612 20.4681 8.8035L21.5432 9.87772C22.7145 11.0492 22.7146 12.9494 21.5432 14.1209L20.4681 15.1961C20.2805 15.3836 20.1751 15.638 20.1751 15.9031V17.2478C20.1748 18.9043 18.8317 20.2477 17.1751 20.2478H15.889C15.6606 20.2479 15.4405 20.326 15.264 20.4676L15.1907 20.532L14.096 21.6014C12.9306 22.7389 11.0701 22.7387 9.90458 21.6014L8.79422 20.5174C8.61187 20.3394 8.36825 20.2378 8.11356 20.2332L6.77176 20.2098C5.13602 20.1807 3.82461 18.8457 3.8245 17.2098V15.9031C3.8245 15.6382 3.71971 15.3836 3.53251 15.1961L2.45731 14.1209C1.2857 12.9493 1.28573 11.0492 2.45731 9.87772L3.53251 8.8035C3.71987 8.61611 3.82433 8.36145 3.8245 8.09647V6.82401C3.82476 5.16754 5.16802 3.82427 6.8245 3.82401H8.09696C8.36194 3.82385 8.6166 3.71939 8.80399 3.53202L9.87821 2.45682ZM12.7073 3.87088C12.3169 3.48043 11.6837 3.48052 11.2932 3.87088L10.2181 4.94608C9.65559 5.50852 8.89237 5.82385 8.09696 5.82401H6.8245C6.27259 5.82427 5.82476 6.2721 5.8245 6.82401V8.09647C5.82433 8.89188 5.50901 9.6551 4.94657 10.2176L3.87137 11.2928C3.481 11.6832 3.48092 12.3164 3.87137 12.7068L4.94657 13.782C5.50882 14.3446 5.8245 15.1077 5.8245 15.9031V17.2098C5.82461 17.755 6.26189 18.1999 6.80692 18.2098L8.14969 18.2332C8.91403 18.247 9.64469 18.5527 10.1917 19.0867L11.3011 20.1697C11.6896 20.5488 12.3101 20.5489 12.6985 20.1697L13.7932 19.1014L14.013 18.907C14.543 18.4821 15.2041 18.2479 15.889 18.2478H17.1751C17.7271 18.2477 18.1748 17.7998 18.1751 17.2478V15.9031C18.1751 15.1075 18.4914 14.3446 19.054 13.782L20.1282 12.7068C20.5186 12.3164 20.5185 11.6833 20.1282 11.2928L19.054 10.2176C18.4915 9.65508 18.1752 8.89189 18.1751 8.09647V6.82401C18.1748 6.27204 17.7271 5.82418 17.1751 5.82401H15.9036C15.1082 5.82401 14.3451 5.50833 13.7825 4.94608L12.7073 3.87088Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(i, {}, { G: t })
  },
}
//# sourceMappingURL=381807.bb7917c851.js.map
