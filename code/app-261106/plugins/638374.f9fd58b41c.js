/*! LICENSE: 638374.f9fd58b41c.js.LICENSE.txt */
export const __rspack_esm_ids = [638374]
export const __webpack_modules__ = {
  bygE(e) {
    function t(e) {
      var t = Error("Cannot find module '" + e + "'")
      throw ((t.code = "MODULE_NOT_FOUND"), t)
    }
    ;((t.keys = () => []), (t.resolve = t), (t.id = "bygE"), (e.exports = t))
  },
  XbWW(e, t, i) {
    e.exports = (function e(t, r, n) {
      function s(o, l) {
        if (!r[o]) {
          if (!t[o]) {
            var u = i("bygE")
            if (!l && u) return u(o, !0)
            if (a) return a(o, !0)
            var d = Error("Cannot find module '" + o + "'")
            throw ((d.code = "MODULE_NOT_FOUND"), d)
          }
          var c = (r[o] = { exports: {} })
          t[o][0].call(
            c.exports,
            function (e) {
              return s(t[o][1][e] || e)
            },
            c,
            c.exports,
            e,
            t,
            r,
            n,
          )
        }
        return r[o].exports
      }
      for (var a = i("bygE"), o = 0; o < n.length; o++) s(n[o])
      return s
    })(
      {
        1: [
          function (e, t, i) {
            "use strict"
            var r = e("./utils"),
              n = e("./support"),
              s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            ;((i.encode = function (e) {
              for (
                var t, i, n, a, o, l, u, d = [], c = 0, h = e.length, f = h, p = "string" !== r.getTypeOf(e);
                c < e.length;
              )
                ((f = h - c),
                  (n = p
                    ? ((t = e[c++]), (i = c < h ? e[c++] : 0), c < h ? e[c++] : 0)
                    : ((t = e.charCodeAt(c++)), (i = c < h ? e.charCodeAt(c++) : 0), c < h ? e.charCodeAt(c++) : 0)),
                  (a = t >> 2),
                  (o = ((3 & t) << 4) | (i >> 4)),
                  (l = 1 < f ? ((15 & i) << 2) | (n >> 6) : 64),
                  (u = 2 < f ? 63 & n : 64),
                  d.push(s.charAt(a) + s.charAt(o) + s.charAt(l) + s.charAt(u)))
              return d.join("")
            }),
              (i.decode = function (e) {
                var t,
                  i,
                  r,
                  a,
                  o,
                  l,
                  u = 0,
                  d = 0,
                  c = "data:"
                if (e.substr(0, c.length) === c) throw Error("Invalid base64 input, it looks like a data url.")
                var h,
                  f = (3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length) / 4
                if (
                  (e.charAt(e.length - 1) === s.charAt(64) && f--,
                  e.charAt(e.length - 2) === s.charAt(64) && f--,
                  f % 1 != 0)
                )
                  throw Error("Invalid base64 input, bad content length.")
                for (h = n.uint8array ? new Uint8Array(0 | f) : Array(0 | f); u < e.length;)
                  ((t = (s.indexOf(e.charAt(u++)) << 2) | ((a = s.indexOf(e.charAt(u++))) >> 4)),
                    (i = ((15 & a) << 4) | ((o = s.indexOf(e.charAt(u++))) >> 2)),
                    (r = ((3 & o) << 6) | (l = s.indexOf(e.charAt(u++)))),
                    (h[d++] = t),
                    64 !== o && (h[d++] = i),
                    64 !== l && (h[d++] = r))
                return h
              }))
          },
          { "./support": 30, "./utils": 32 },
        ],
        2: [
          function (e, t, i) {
            "use strict"
            var r = e("./external"),
              n = e("./stream/DataWorker"),
              s = e("./stream/Crc32Probe"),
              a = e("./stream/DataLengthProbe")
            function o(e, t, i, r, n) {
              ;((this.compressedSize = e),
                (this.uncompressedSize = t),
                (this.crc32 = i),
                (this.compression = r),
                (this.compressedContent = n))
            }
            ;((o.prototype = {
              getContentWorker: function () {
                var e = new n(r.Promise.resolve(this.compressedContent))
                    .pipe(this.compression.uncompressWorker())
                    .pipe(new a("data_length")),
                  t = this
                return (
                  e.on("end", function () {
                    if (this.streamInfo.data_length !== t.uncompressedSize)
                      throw Error("Bug : uncompressed data size mismatch")
                  }),
                  e
                )
              },
              getCompressedWorker: function () {
                return new n(r.Promise.resolve(this.compressedContent))
                  .withStreamInfo("compressedSize", this.compressedSize)
                  .withStreamInfo("uncompressedSize", this.uncompressedSize)
                  .withStreamInfo("crc32", this.crc32)
                  .withStreamInfo("compression", this.compression)
              },
            }),
              (o.createWorkerFrom = function (e, t, i) {
                return e
                  .pipe(new s())
                  .pipe(new a("uncompressedSize"))
                  .pipe(t.compressWorker(i))
                  .pipe(new a("compressedSize"))
                  .withStreamInfo("compression", t)
              }),
              (t.exports = o))
          },
          { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 },
        ],
        3: [
          function (e, t, i) {
            "use strict"
            var r = e("./stream/GenericWorker")
            ;((i.STORE = {
              magic: "\0\0",
              compressWorker: function () {
                return new r("STORE compression")
              },
              uncompressWorker: function () {
                return new r("STORE decompression")
              },
            }),
              (i.DEFLATE = e("./flate")))
          },
          { "./flate": 7, "./stream/GenericWorker": 28 },
        ],
        4: [
          function (e, t, i) {
            "use strict"
            var r = e("./utils"),
              n = (function () {
                for (var e, t = [], i = 0; i < 256; i++) {
                  e = i
                  for (var r = 0; r < 8; r++) e = 1 & e ? 0xedb88320 ^ (e >>> 1) : e >>> 1
                  t[i] = e
                }
                return t
              })()
            t.exports = function (e, t) {
              return void 0 !== e && e.length
                ? "string" !== r.getTypeOf(e)
                  ? (function (e, t, i) {
                      var r = 0 + i
                      e ^= -1
                      for (var s = 0; s < r; s++) e = (e >>> 8) ^ n[255 & (e ^ t[s])]
                      return -1 ^ e
                    })(0 | t, e, e.length)
                  : (function (e, t, i) {
                      var r = 0 + i
                      e ^= -1
                      for (var s = 0; s < r; s++) e = (e >>> 8) ^ n[255 & (e ^ t.charCodeAt(s))]
                      return -1 ^ e
                    })(0 | t, e, e.length)
                : 0
            }
          },
          { "./utils": 32 },
        ],
        5: [
          function (e, t, i) {
            "use strict"
            ;((i.base64 = !1),
              (i.binary = !1),
              (i.dir = !1),
              (i.createFolders = !0),
              (i.date = null),
              (i.compression = null),
              (i.compressionOptions = null),
              (i.comment = null),
              (i.unixPermissions = null),
              (i.dosPermissions = null))
          },
          {},
        ],
        6: [
          function (e, t, i) {
            "use strict"
            t.exports = { Promise: "u" > typeof Promise ? Promise : e("lie") }
          },
          { lie: 37 },
        ],
        7: [
          function (e, t, i) {
            "use strict"
            var r = "u" > typeof Uint8Array && "u" > typeof Uint16Array && "u" > typeof Uint32Array,
              n = e("pako"),
              s = e("./utils"),
              a = e("./stream/GenericWorker"),
              o = r ? "uint8array" : "array"
            function l(e, t) {
              ;(a.call(this, "FlateWorker/" + e),
                (this._pako = null),
                (this._pakoAction = e),
                (this._pakoOptions = t),
                (this.meta = {}))
            }
            ;((i.magic = "\b\0"),
              s.inherits(l, a),
              (l.prototype.processChunk = function (e) {
                ;((this.meta = e.meta),
                  null === this._pako && this._createPako(),
                  this._pako.push(s.transformTo(o, e.data), !1))
              }),
              (l.prototype.flush = function () {
                ;(a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0))
              }),
              (l.prototype.cleanUp = function () {
                ;(a.prototype.cleanUp.call(this), (this._pako = null))
              }),
              (l.prototype._createPako = function () {
                this._pako = new n[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 })
                var e = this
                this._pako.onData = function (t) {
                  e.push({ data: t, meta: e.meta })
                }
              }),
              (i.compressWorker = function (e) {
                return new l("Deflate", e)
              }),
              (i.uncompressWorker = function () {
                return new l("Inflate", {})
              }))
          },
          { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
        ],
        8: [
          function (e, t, i) {
            "use strict"
            function r(e, t) {
              var i,
                r = ""
              for (i = 0; i < t; i++) ((r += String.fromCharCode(255 & e)), (e >>>= 8))
              return r
            }
            function n(e, t, i, n, a, d) {
              var c,
                h,
                f,
                p,
                m = e.file,
                g = e.compression,
                b = d !== o.utf8encode,
                _ = s.transformTo("string", d(m.name)),
                y = s.transformTo("string", o.utf8encode(m.name)),
                v = m.comment,
                x = s.transformTo("string", d(v)),
                w = s.transformTo("string", o.utf8encode(v)),
                k = y.length !== m.name.length,
                C = w.length !== v.length,
                S = "",
                j = "",
                A = "",
                E = m.dir,
                z = m.date,
                I = { crc32: 0, compressedSize: 0, uncompressedSize: 0 }
              ;(t && !i) ||
                ((I.crc32 = e.crc32), (I.compressedSize = e.compressedSize), (I.uncompressedSize = e.uncompressedSize))
              var N = 0
              ;(t && (N |= 8), !b && (k || C) && (N |= 2048))
              var F = 0,
                T = 0
              ;(E && (F |= 16),
                "UNIX" === a
                  ? ((T = 798),
                    (F |= ((c = m.unixPermissions), (h = c), c || (h = E ? 16893 : 33204), (65535 & h) << 16)))
                  : ((T = 20), (F |= 63 & (m.dosPermissions || 0))),
                (f = (((z.getUTCHours() << 6) | z.getUTCMinutes()) << 5) | (z.getUTCSeconds() / 2)),
                (p = ((((z.getUTCFullYear() - 1980) << 4) | (z.getUTCMonth() + 1)) << 5) | z.getUTCDate()),
                k && ((j = r(1, 1) + r(l(_), 4) + y), (S += "up" + r(j.length, 2) + j)),
                C && ((A = r(1, 1) + r(l(x), 4) + w), (S += "uc" + r(A.length, 2) + A)))
              var D = ""
              return (
                (D += "\n\0"),
                (D += r(N, 2)),
                (D += g.magic),
                (D += r(f, 2)),
                (D += r(p, 2)),
                (D += r(I.crc32, 4)),
                (D += r(I.compressedSize, 4)),
                (D += r(I.uncompressedSize, 4)),
                (D += r(_.length, 2)),
                (D += r(S.length, 2)),
                {
                  fileRecord: u.LOCAL_FILE_HEADER + D + _ + S,
                  dirRecord:
                    u.CENTRAL_FILE_HEADER + r(T, 2) + D + r(x.length, 2) + "\0\0\0\0" + r(F, 4) + r(n, 4) + _ + S + x,
                }
              )
            }
            var s = e("../utils"),
              a = e("../stream/GenericWorker"),
              o = e("../utf8"),
              l = e("../crc32"),
              u = e("../signature")
            function d(e, t, i, r) {
              ;(a.call(this, "ZipFileWorker"),
                (this.bytesWritten = 0),
                (this.zipComment = t),
                (this.zipPlatform = i),
                (this.encodeFileName = r),
                (this.streamFiles = e),
                (this.accumulate = !1),
                (this.contentBuffer = []),
                (this.dirRecords = []),
                (this.currentSourceOffset = 0),
                (this.entriesCount = 0),
                (this.currentFile = null),
                (this._sources = []))
            }
            ;(s.inherits(d, a),
              (d.prototype.push = function (e) {
                var t = e.meta.percent || 0,
                  i = this.entriesCount,
                  r = this._sources.length
                this.accumulate
                  ? this.contentBuffer.push(e)
                  : ((this.bytesWritten += e.data.length),
                    a.prototype.push.call(this, {
                      data: e.data,
                      meta: { currentFile: this.currentFile, percent: i ? (t + 100 * (i - r - 1)) / i : 100 },
                    }))
              }),
              (d.prototype.openedSource = function (e) {
                ;((this.currentSourceOffset = this.bytesWritten), (this.currentFile = e.file.name))
                var t = this.streamFiles && !e.file.dir
                if (t) {
                  var i = n(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName)
                  this.push({ data: i.fileRecord, meta: { percent: 0 } })
                } else this.accumulate = !0
              }),
              (d.prototype.closedSource = function (e) {
                this.accumulate = !1
                var t = this.streamFiles && !e.file.dir,
                  i = n(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName)
                if ((this.dirRecords.push(i.dirRecord), t))
                  this.push({
                    data: u.DATA_DESCRIPTOR + r(e.crc32, 4) + r(e.compressedSize, 4) + r(e.uncompressedSize, 4),
                    meta: { percent: 100 },
                  })
                else
                  for (this.push({ data: i.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length;)
                    this.push(this.contentBuffer.shift())
                this.currentFile = null
              }),
              (d.prototype.flush = function () {
                for (var e, t, i, n, a = this.bytesWritten, o = 0; o < this.dirRecords.length; o++)
                  this.push({ data: this.dirRecords[o], meta: { percent: 100 } })
                var l = this.bytesWritten - a,
                  d =
                    ((e = this.dirRecords.length),
                    (t = this.zipComment),
                    (i = this.encodeFileName),
                    (n = s.transformTo("string", i(t))),
                    u.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(e, 2) + r(e, 2) + r(l, 4) + r(a, 4) + r(n.length, 2) + n)
                this.push({ data: d, meta: { percent: 100 } })
              }),
              (d.prototype.prepareNextSource = function () {
                ;((this.previous = this._sources.shift()),
                  this.openedSource(this.previous.streamInfo),
                  this.isPaused ? this.previous.pause() : this.previous.resume())
              }),
              (d.prototype.registerPrevious = function (e) {
                this._sources.push(e)
                var t = this
                return (
                  e.on("data", function (e) {
                    t.processChunk(e)
                  }),
                  e.on("end", function () {
                    ;(t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end())
                  }),
                  e.on("error", function (e) {
                    t.error(e)
                  }),
                  this
                )
              }),
              (d.prototype.resume = function () {
                return (
                  !!a.prototype.resume.call(this) &&
                  (!this.previous && this._sources.length
                    ? (this.prepareNextSource(), !0)
                    : this.previous || this._sources.length || this.generatedError
                      ? void 0
                      : (this.end(), !0))
                )
              }),
              (d.prototype.error = function (e) {
                var t = this._sources
                if (!a.prototype.error.call(this, e)) return !1
                for (var i = 0; i < t.length; i++)
                  try {
                    t[i].error(e)
                  } catch (e) {}
                return !0
              }),
              (d.prototype.lock = function () {
                a.prototype.lock.call(this)
                for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock()
              }),
              (t.exports = d))
          },
          { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 },
        ],
        9: [
          function (e, t, i) {
            "use strict"
            var r = e("../compressions"),
              n = e("./ZipFileWorker")
            i.generateWorker = function (e, t, i) {
              var s = new n(t.streamFiles, i, t.platform, t.encodeFileName),
                a = 0
              try {
                ;(e.forEach(function (e, i) {
                  a++
                  var n = (function (e, t) {
                      var i = e || t,
                        n = r[i]
                      if (!n) throw Error(i + " is not a valid compression method !")
                      return n
                    })(i.options.compression, t.compression),
                    o = i.options.compressionOptions || t.compressionOptions || {},
                    l = i.dir,
                    u = i.date
                  i._compressWorker(n, o)
                    .withStreamInfo("file", {
                      name: e,
                      dir: l,
                      date: u,
                      comment: i.comment || "",
                      unixPermissions: i.unixPermissions,
                      dosPermissions: i.dosPermissions,
                    })
                    .pipe(s)
                }),
                  (s.entriesCount = a))
              } catch (e) {
                s.error(e)
              }
              return s
            }
          },
          { "../compressions": 3, "./ZipFileWorker": 8 },
        ],
        10: [
          function (e, t, i) {
            "use strict"
            function r() {
              if (!(this instanceof r)) return new r()
              if (arguments.length)
                throw Error(
                  "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.",
                )
              ;((this.files = Object.create(null)),
                (this.comment = null),
                (this.root = ""),
                (this.clone = function () {
                  var e = new r()
                  for (var t in this) "function" != typeof this[t] && (e[t] = this[t])
                  return e
                }))
            }
            ;(((r.prototype = e("./object")).loadAsync = e("./load")),
              (r.support = e("./support")),
              (r.defaults = e("./defaults")),
              (r.version = "3.10.1"),
              (r.loadAsync = function (e, t) {
                return new r().loadAsync(e, t)
              }),
              (r.external = e("./external")),
              (t.exports = r))
          },
          { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 },
        ],
        11: [
          function (e, t, i) {
            "use strict"
            var r = e("./utils"),
              n = e("./external"),
              s = e("./utf8"),
              a = e("./zipEntries"),
              o = e("./stream/Crc32Probe"),
              l = e("./nodejsUtils")
            t.exports = function (e, t) {
              var i = this
              return (
                (t = r.extend(t || {}, {
                  base64: !1,
                  checkCRC32: !1,
                  optimizedBinaryString: !1,
                  createFolders: !1,
                  decodeFileName: s.utf8decode,
                })),
                l.isNode && l.isStream(e)
                  ? n.Promise.reject(Error("JSZip can't accept a stream when loading a zip file."))
                  : r
                      .prepareContent("the loaded zip file", e, !0, t.optimizedBinaryString, t.base64)
                      .then(function (e) {
                        var i = new a(t)
                        return (i.load(e), i)
                      })
                      .then(function (e) {
                        var i = [n.Promise.resolve(e)],
                          r = e.files
                        if (t.checkCRC32)
                          for (var s = 0; s < r.length; s++)
                            i.push(
                              (function (e) {
                                return new n.Promise(function (t, i) {
                                  var r = e.decompressed.getContentWorker().pipe(new o())
                                  r.on("error", function (e) {
                                    i(e)
                                  })
                                    .on("end", function () {
                                      r.streamInfo.crc32 !== e.decompressed.crc32
                                        ? i(Error("Corrupted zip : CRC32 mismatch"))
                                        : t()
                                    })
                                    .resume()
                                })
                              })(r[s]),
                            )
                        return n.Promise.all(i)
                      })
                      .then(function (e) {
                        for (var n = e.shift(), s = n.files, a = 0; a < s.length; a++) {
                          var o = s[a],
                            l = o.fileNameStr,
                            u = r.resolve(o.fileNameStr)
                          ;(i.file(u, o.decompressed, {
                            binary: !0,
                            optimizedBinaryString: !0,
                            date: o.date,
                            dir: o.dir,
                            comment: o.fileCommentStr.length ? o.fileCommentStr : null,
                            unixPermissions: o.unixPermissions,
                            dosPermissions: o.dosPermissions,
                            createFolders: t.createFolders,
                          }),
                            o.dir || (i.file(u).unsafeOriginalName = l))
                        }
                        return (n.zipComment.length && (i.comment = n.zipComment), i)
                      })
              )
            }
          },
          {
            "./external": 6,
            "./nodejsUtils": 14,
            "./stream/Crc32Probe": 25,
            "./utf8": 31,
            "./utils": 32,
            "./zipEntries": 33,
          },
        ],
        12: [
          function (e, t, i) {
            "use strict"
            var r = e("../utils"),
              n = e("../stream/GenericWorker")
            function s(e, t) {
              ;(n.call(this, "Nodejs stream input adapter for " + e), (this._upstreamEnded = !1), this._bindStream(t))
            }
            ;(r.inherits(s, n),
              (s.prototype._bindStream = function (e) {
                var t = this
                ;((this._stream = e).pause(),
                  e
                    .on("data", function (e) {
                      t.push({ data: e, meta: { percent: 0 } })
                    })
                    .on("error", function (e) {
                      t.isPaused ? (this.generatedError = e) : t.error(e)
                    })
                    .on("end", function () {
                      t.isPaused ? (t._upstreamEnded = !0) : t.end()
                    }))
              }),
              (s.prototype.pause = function () {
                return !!n.prototype.pause.call(this) && (this._stream.pause(), !0)
              }),
              (s.prototype.resume = function () {
                return !!n.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
              }),
              (t.exports = s))
          },
          { "../stream/GenericWorker": 28, "../utils": 32 },
        ],
        13: [
          function (e, t, i) {
            "use strict"
            var r = e("readable-stream").Readable
            function n(e, t, i) {
              ;(r.call(this, t), (this._helper = e))
              var n = this
              e.on("data", function (e, t) {
                ;(n.push(e) || n._helper.pause(), i && i(t))
              })
                .on("error", function (e) {
                  n.emit("error", e)
                })
                .on("end", function () {
                  n.push(null)
                })
            }
            ;(e("../utils").inherits(n, r),
              (n.prototype._read = function () {
                this._helper.resume()
              }),
              (t.exports = n))
          },
          { "../utils": 32, "readable-stream": 16 },
        ],
        14: [
          function (e, t, i) {
            "use strict"
            t.exports = {
              isNode: "u" > typeof Buffer,
              newBufferFrom: function (e, t) {
                if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t)
                if ("number" == typeof e) throw Error('The "data" argument must not be a number')
                return new Buffer(e, t)
              },
              allocBuffer: function (e) {
                if (Buffer.alloc) return Buffer.alloc(e)
                var t = new Buffer(e)
                return (t.fill(0), t)
              },
              isBuffer: function (e) {
                return Buffer.isBuffer(e)
              },
              isStream: function (e) {
                return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume
              },
            }
          },
          {},
        ],
        15: [
          function (e, t, i) {
            "use strict"
            function r(e, t, i) {
              var r,
                n = s.getTypeOf(t),
                o = s.extend(i || {}, l)
              ;((o.date = o.date || new Date()),
                null !== o.compression && (o.compression = o.compression.toUpperCase()),
                "string" == typeof o.unixPermissions && (o.unixPermissions = parseInt(o.unixPermissions, 8)),
                o.unixPermissions && 16384 & o.unixPermissions && (o.dir = !0),
                o.dosPermissions && 16 & o.dosPermissions && (o.dir = !0),
                o.dir && (e = m(e)),
                o.createFolders && (r = p(e)) && g.call(this, r, !0))
              var c = "string" === n && !1 === o.binary && !1 === o.base64
              ;((i && void 0 !== i.binary) || (o.binary = !c),
                ((t instanceof u && 0 === t.uncompressedSize) || o.dir || !t || 0 === t.length) &&
                  ((o.base64 = !1), (o.binary = !0), (t = ""), (o.compression = "STORE"), (n = "string")))
              var b = null
              b =
                t instanceof u || t instanceof a
                  ? t
                  : h.isNode && h.isStream(t)
                    ? new f(e, t)
                    : s.prepareContent(e, t, o.binary, o.optimizedBinaryString, o.base64)
              var _ = new d(e, b, o)
              this.files[e] = _
            }
            var n = e("./utf8"),
              s = e("./utils"),
              a = e("./stream/GenericWorker"),
              o = e("./stream/StreamHelper"),
              l = e("./defaults"),
              u = e("./compressedObject"),
              d = e("./zipObject"),
              c = e("./generate"),
              h = e("./nodejsUtils"),
              f = e("./nodejs/NodejsStreamInputAdapter"),
              p = function (e) {
                "/" === e.slice(-1) && (e = e.substring(0, e.length - 1))
                var t = e.lastIndexOf("/")
                return 0 < t ? e.substring(0, t) : ""
              },
              m = function (e) {
                return ("/" !== e.slice(-1) && (e += "/"), e)
              },
              g = function (e, t) {
                return (
                  (t = void 0 !== t ? t : l.createFolders),
                  (e = m(e)),
                  this.files[e] || r.call(this, e, null, { dir: !0, createFolders: t }),
                  this.files[e]
                )
              }
            function b(e) {
              return "[object RegExp]" === Object.prototype.toString.call(e)
            }
            t.exports = {
              load: function () {
                throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
              },
              forEach: function (e) {
                var t, i, r
                for (t in this.files)
                  ((r = this.files[t]),
                    (i = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(i, r))
              },
              filter: function (e) {
                var t = []
                return (
                  this.forEach(function (i, r) {
                    e(i, r) && t.push(r)
                  }),
                  t
                )
              },
              file: function (e, t, i) {
                if (1 != arguments.length) return ((e = this.root + e), r.call(this, e, t, i), this)
                if (b(e)) {
                  var n = e
                  return this.filter(function (e, t) {
                    return !t.dir && n.test(e)
                  })
                }
                var s = this.files[this.root + e]
                return s && !s.dir ? s : null
              },
              folder: function (e) {
                if (!e) return this
                if (b(e))
                  return this.filter(function (t, i) {
                    return i.dir && e.test(t)
                  })
                var t = this.root + e,
                  i = g.call(this, t),
                  r = this.clone()
                return ((r.root = i.name), r)
              },
              remove: function (e) {
                e = this.root + e
                var t = this.files[e]
                if ((t || ("/" !== e.slice(-1) && (e += "/"), (t = this.files[e])), t && !t.dir)) delete this.files[e]
                else
                  for (
                    var i = this.filter(function (t, i) {
                        return i.name.slice(0, e.length) === e
                      }),
                      r = 0;
                    r < i.length;
                    r++
                  )
                    delete this.files[i[r].name]
                return this
              },
              generate: function () {
                throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
              },
              generateInternalStream: function (e) {
                var t,
                  i = {}
                try {
                  if (
                    (((i = s.extend(e || {}, {
                      streamFiles: !1,
                      compression: "STORE",
                      compressionOptions: null,
                      type: "",
                      platform: "DOS",
                      comment: null,
                      mimeType: "application/zip",
                      encodeFileName: n.utf8encode,
                    })).type = i.type.toLowerCase()),
                    (i.compression = i.compression.toUpperCase()),
                    "binarystring" === i.type && (i.type = "string"),
                    !i.type)
                  )
                    throw Error("No output type specified.")
                  ;(s.checkSupport(i.type),
                    ("darwin" !== i.platform &&
                      "freebsd" !== i.platform &&
                      "linux" !== i.platform &&
                      "sunos" !== i.platform) ||
                      (i.platform = "UNIX"),
                    "win32" === i.platform && (i.platform = "DOS"))
                  var r = i.comment || this.comment || ""
                  t = c.generateWorker(this, i, r)
                } catch (e) {
                  ;(t = new a("error")).error(e)
                }
                return new o(t, i.type || "string", i.mimeType)
              },
              generateAsync: function (e, t) {
                return this.generateInternalStream(e).accumulate(t)
              },
              generateNodeStream: function (e, t) {
                return ((e = e || {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t))
              },
            }
          },
          {
            "./compressedObject": 2,
            "./defaults": 5,
            "./generate": 9,
            "./nodejs/NodejsStreamInputAdapter": 12,
            "./nodejsUtils": 14,
            "./stream/GenericWorker": 28,
            "./stream/StreamHelper": 29,
            "./utf8": 31,
            "./utils": 32,
            "./zipObject": 35,
          },
        ],
        16: [
          function (e, t, i) {
            "use strict"
            t.exports = e("stream")
          },
          { stream: void 0 },
        ],
        17: [
          function (e, t, i) {
            "use strict"
            var r = e("./DataReader")
            function n(e) {
              r.call(this, e)
              for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t]
            }
            ;(e("../utils").inherits(n, r),
              (n.prototype.byteAt = function (e) {
                return this.data[this.zero + e]
              }),
              (n.prototype.lastIndexOfSignature = function (e) {
                for (
                  var t = e.charCodeAt(0),
                    i = e.charCodeAt(1),
                    r = e.charCodeAt(2),
                    n = e.charCodeAt(3),
                    s = this.length - 4;
                  0 <= s;
                  --s
                )
                  if (this.data[s] === t && this.data[s + 1] === i && this.data[s + 2] === r && this.data[s + 3] === n)
                    return s - this.zero
                return -1
              }),
              (n.prototype.readAndCheckSignature = function (e) {
                var t = e.charCodeAt(0),
                  i = e.charCodeAt(1),
                  r = e.charCodeAt(2),
                  n = e.charCodeAt(3),
                  s = this.readData(4)
                return t === s[0] && i === s[1] && r === s[2] && n === s[3]
              }),
              (n.prototype.readData = function (e) {
                if ((this.checkOffset(e), 0 === e)) return []
                var t = this.data.slice(this.zero + this.index, this.zero + this.index + e)
                return ((this.index += e), t)
              }),
              (t.exports = n))
          },
          { "../utils": 32, "./DataReader": 18 },
        ],
        18: [
          function (e, t, i) {
            "use strict"
            var r = e("../utils")
            function n(e) {
              ;((this.data = e), (this.length = e.length), (this.index = 0), (this.zero = 0))
            }
            ;((n.prototype = {
              checkOffset: function (e) {
                this.checkIndex(this.index + e)
              },
              checkIndex: function (e) {
                if (this.length < this.zero + e || e < 0)
                  throw Error(
                    "End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?",
                  )
              },
              setIndex: function (e) {
                ;(this.checkIndex(e), (this.index = e))
              },
              skip: function (e) {
                this.setIndex(this.index + e)
              },
              byteAt: function () {},
              readInt: function (e) {
                var t,
                  i = 0
                for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) i = (i << 8) + this.byteAt(t)
                return ((this.index += e), i)
              },
              readString: function (e) {
                return r.transformTo("string", this.readData(e))
              },
              readData: function () {},
              lastIndexOfSignature: function () {},
              readAndCheckSignature: function () {},
              readDate: function () {
                var e = this.readInt(4)
                return new Date(
                  Date.UTC(
                    1980 + ((e >> 25) & 127),
                    ((e >> 21) & 15) - 1,
                    (e >> 16) & 31,
                    (e >> 11) & 31,
                    (e >> 5) & 63,
                    (31 & e) << 1,
                  ),
                )
              },
            }),
              (t.exports = n))
          },
          { "../utils": 32 },
        ],
        19: [
          function (e, t, i) {
            "use strict"
            var r = e("./Uint8ArrayReader")
            function n(e) {
              r.call(this, e)
            }
            ;(e("../utils").inherits(n, r),
              (n.prototype.readData = function (e) {
                this.checkOffset(e)
                var t = this.data.slice(this.zero + this.index, this.zero + this.index + e)
                return ((this.index += e), t)
              }),
              (t.exports = n))
          },
          { "../utils": 32, "./Uint8ArrayReader": 21 },
        ],
        20: [
          function (e, t, i) {
            "use strict"
            var r = e("./DataReader")
            function n(e) {
              r.call(this, e)
            }
            ;(e("../utils").inherits(n, r),
              (n.prototype.byteAt = function (e) {
                return this.data.charCodeAt(this.zero + e)
              }),
              (n.prototype.lastIndexOfSignature = function (e) {
                return this.data.lastIndexOf(e) - this.zero
              }),
              (n.prototype.readAndCheckSignature = function (e) {
                return e === this.readData(4)
              }),
              (n.prototype.readData = function (e) {
                this.checkOffset(e)
                var t = this.data.slice(this.zero + this.index, this.zero + this.index + e)
                return ((this.index += e), t)
              }),
              (t.exports = n))
          },
          { "../utils": 32, "./DataReader": 18 },
        ],
        21: [
          function (e, t, i) {
            "use strict"
            var r = e("./ArrayReader")
            function n(e) {
              r.call(this, e)
            }
            ;(e("../utils").inherits(n, r),
              (n.prototype.readData = function (e) {
                if ((this.checkOffset(e), 0 === e)) return new Uint8Array(0)
                var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e)
                return ((this.index += e), t)
              }),
              (t.exports = n))
          },
          { "../utils": 32, "./ArrayReader": 17 },
        ],
        22: [
          function (e, t, i) {
            "use strict"
            var r = e("../utils"),
              n = e("../support"),
              s = e("./ArrayReader"),
              a = e("./StringReader"),
              o = e("./NodeBufferReader"),
              l = e("./Uint8ArrayReader")
            t.exports = function (e) {
              var t = r.getTypeOf(e)
              return (
                r.checkSupport(t),
                "string" !== t || n.uint8array
                  ? "nodebuffer" === t
                    ? new o(e)
                    : n.uint8array
                      ? new l(r.transformTo("uint8array", e))
                      : new s(r.transformTo("array", e))
                  : new a(e)
              )
            }
          },
          {
            "../support": 30,
            "../utils": 32,
            "./ArrayReader": 17,
            "./NodeBufferReader": 19,
            "./StringReader": 20,
            "./Uint8ArrayReader": 21,
          },
        ],
        23: [
          function (e, t, i) {
            "use strict"
            ;((i.LOCAL_FILE_HEADER = "PK\x03\x04"),
              (i.CENTRAL_FILE_HEADER = "PK\x01\x02"),
              (i.CENTRAL_DIRECTORY_END = "PK\x05\x06"),
              (i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07"),
              (i.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06"),
              (i.DATA_DESCRIPTOR = "PK\x07\b"))
          },
          {},
        ],
        24: [
          function (e, t, i) {
            "use strict"
            var r = e("./GenericWorker"),
              n = e("../utils")
            function s(e) {
              ;(r.call(this, "ConvertWorker to " + e), (this.destType = e))
            }
            ;(n.inherits(s, r),
              (s.prototype.processChunk = function (e) {
                this.push({ data: n.transformTo(this.destType, e.data), meta: e.meta })
              }),
              (t.exports = s))
          },
          { "../utils": 32, "./GenericWorker": 28 },
        ],
        25: [
          function (e, t, i) {
            "use strict"
            var r = e("./GenericWorker"),
              n = e("../crc32")
            function s() {
              ;(r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0))
            }
            ;(e("../utils").inherits(s, r),
              (s.prototype.processChunk = function (e) {
                ;((this.streamInfo.crc32 = n(e.data, this.streamInfo.crc32 || 0)), this.push(e))
              }),
              (t.exports = s))
          },
          { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
        ],
        26: [
          function (e, t, i) {
            "use strict"
            var r = e("../utils"),
              n = e("./GenericWorker")
            function s(e) {
              ;(n.call(this, "DataLengthProbe for " + e), (this.propName = e), this.withStreamInfo(e, 0))
            }
            ;(r.inherits(s, n),
              (s.prototype.processChunk = function (e) {
                if (e) {
                  var t = this.streamInfo[this.propName] || 0
                  this.streamInfo[this.propName] = t + e.data.length
                }
                n.prototype.processChunk.call(this, e)
              }),
              (t.exports = s))
          },
          { "../utils": 32, "./GenericWorker": 28 },
        ],
        27: [
          function (e, t, i) {
            "use strict"
            var r = e("../utils"),
              n = e("./GenericWorker")
            function s(e) {
              n.call(this, "DataWorker")
              var t = this
              ;((this.dataIsReady = !1),
                (this.index = 0),
                (this.max = 0),
                (this.data = null),
                (this.type = ""),
                (this._tickScheduled = !1),
                e.then(
                  function (e) {
                    ;((t.dataIsReady = !0),
                      (t.data = e),
                      (t.max = (e && e.length) || 0),
                      (t.type = r.getTypeOf(e)),
                      t.isPaused || t._tickAndRepeat())
                  },
                  function (e) {
                    t.error(e)
                  },
                ))
            }
            ;(r.inherits(s, n),
              (s.prototype.cleanUp = function () {
                ;(n.prototype.cleanUp.call(this), (this.data = null))
              }),
              (s.prototype.resume = function () {
                return (
                  !!n.prototype.resume.call(this) &&
                  (!this._tickScheduled &&
                    this.dataIsReady &&
                    ((this._tickScheduled = !0), r.delay(this._tickAndRepeat, [], this)),
                  !0)
                )
              }),
              (s.prototype._tickAndRepeat = function () {
                ;((this._tickScheduled = !1),
                  this.isPaused ||
                    this.isFinished ||
                    (this._tick(),
                    this.isFinished || (r.delay(this._tickAndRepeat, [], this), (this._tickScheduled = !0))))
              }),
              (s.prototype._tick = function () {
                if (this.isPaused || this.isFinished) return !1
                var e = null,
                  t = Math.min(this.max, this.index + 16384)
                if (this.index >= this.max) return this.end()
                switch (this.type) {
                  case "string":
                    e = this.data.substring(this.index, t)
                    break
                  case "uint8array":
                    e = this.data.subarray(this.index, t)
                    break
                  case "array":
                  case "nodebuffer":
                    e = this.data.slice(this.index, t)
                }
                return (
                  (this.index = t),
                  this.push({ data: e, meta: { percent: this.max ? (this.index / this.max) * 100 : 0 } })
                )
              }),
              (t.exports = s))
          },
          { "../utils": 32, "./GenericWorker": 28 },
        ],
        28: [
          function (e, t, i) {
            "use strict"
            function r(e) {
              ;((this.name = e || "default"),
                (this.streamInfo = {}),
                (this.generatedError = null),
                (this.extraStreamInfo = {}),
                (this.isPaused = !0),
                (this.isFinished = !1),
                (this.isLocked = !1),
                (this._listeners = { data: [], end: [], error: [] }),
                (this.previous = null))
            }
            ;((r.prototype = {
              push: function (e) {
                this.emit("data", e)
              },
              end: function () {
                if (this.isFinished) return !1
                this.flush()
                try {
                  ;(this.emit("end"), this.cleanUp(), (this.isFinished = !0))
                } catch (e) {
                  this.emit("error", e)
                }
                return !0
              },
              error: function (e) {
                return (
                  !this.isFinished &&
                  (this.isPaused
                    ? (this.generatedError = e)
                    : ((this.isFinished = !0),
                      this.emit("error", e),
                      this.previous && this.previous.error(e),
                      this.cleanUp()),
                  !0)
                )
              },
              on: function (e, t) {
                return (this._listeners[e].push(t), this)
              },
              cleanUp: function () {
                ;((this.streamInfo = this.generatedError = this.extraStreamInfo = null), (this._listeners = []))
              },
              emit: function (e, t) {
                if (this._listeners[e])
                  for (var i = 0; i < this._listeners[e].length; i++) this._listeners[e][i].call(this, t)
              },
              pipe: function (e) {
                return e.registerPrevious(this)
              },
              registerPrevious: function (e) {
                if (this.isLocked) throw Error("The stream '" + this + "' has already been used.")
                ;((this.streamInfo = e.streamInfo), this.mergeStreamInfo(), (this.previous = e))
                var t = this
                return (
                  e.on("data", function (e) {
                    t.processChunk(e)
                  }),
                  e.on("end", function () {
                    t.end()
                  }),
                  e.on("error", function (e) {
                    t.error(e)
                  }),
                  this
                )
              },
              pause: function () {
                return (
                  !this.isPaused &&
                  !this.isFinished &&
                  ((this.isPaused = !0), this.previous && this.previous.pause(), !0)
                )
              },
              resume: function () {
                if (!this.isPaused || this.isFinished) return !1
                var e = (this.isPaused = !1)
                return (
                  this.generatedError && (this.error(this.generatedError), (e = !0)),
                  this.previous && this.previous.resume(),
                  !e
                )
              },
              flush: function () {},
              processChunk: function (e) {
                this.push(e)
              },
              withStreamInfo: function (e, t) {
                return ((this.extraStreamInfo[e] = t), this.mergeStreamInfo(), this)
              },
              mergeStreamInfo: function () {
                for (var e in this.extraStreamInfo)
                  Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) &&
                    (this.streamInfo[e] = this.extraStreamInfo[e])
              },
              lock: function () {
                if (this.isLocked) throw Error("The stream '" + this + "' has already been used.")
                ;((this.isLocked = !0), this.previous && this.previous.lock())
              },
              toString: function () {
                var e = "Worker " + this.name
                return this.previous ? this.previous + " -> " + e : e
              },
            }),
              (t.exports = r))
          },
          {},
        ],
        29: [
          function (e, t, i) {
            "use strict"
            var r = e("../utils"),
              n = e("./ConvertWorker"),
              s = e("./GenericWorker"),
              a = e("../base64"),
              o = e("../support"),
              l = e("../external"),
              u = null
            if (o.nodestream)
              try {
                u = e("../nodejs/NodejsStreamOutputAdapter")
              } catch (e) {}
            function d(e, t, i) {
              var a = t
              switch (t) {
                case "blob":
                case "arraybuffer":
                  a = "uint8array"
                  break
                case "base64":
                  a = "string"
              }
              try {
                ;((this._internalType = a),
                  (this._outputType = t),
                  (this._mimeType = i),
                  r.checkSupport(a),
                  (this._worker = e.pipe(new n(a))),
                  e.lock())
              } catch (e) {
                ;((this._worker = new s("error")), this._worker.error(e))
              }
            }
            ;((d.prototype = {
              accumulate: function (e) {
                var t
                return (
                  (t = this),
                  new l.Promise(function (i, n) {
                    var s = [],
                      o = t._internalType,
                      l = t._outputType,
                      u = t._mimeType
                    t.on("data", function (t, i) {
                      ;(s.push(t), e && e(i))
                    })
                      .on("error", function (e) {
                        ;((s = []), n(e))
                      })
                      .on("end", function () {
                        try {
                          var e = (function (e, t, i) {
                            switch (e) {
                              case "blob":
                                return r.newBlob(r.transformTo("arraybuffer", t), i)
                              case "base64":
                                return a.encode(t)
                              default:
                                return r.transformTo(e, t)
                            }
                          })(
                            l,
                            (function (e, t) {
                              var i,
                                r = 0,
                                n = null,
                                s = 0
                              for (i = 0; i < t.length; i++) s += t[i].length
                              switch (e) {
                                case "string":
                                  return t.join("")
                                case "array":
                                  return Array.prototype.concat.apply([], t)
                                case "uint8array":
                                  for (n = new Uint8Array(s), i = 0; i < t.length; i++)
                                    (n.set(t[i], r), (r += t[i].length))
                                  return n
                                case "nodebuffer":
                                  return Buffer.concat(t)
                                default:
                                  throw Error("concat : unsupported type '" + e + "'")
                              }
                            })(o, s),
                            u,
                          )
                          i(e)
                        } catch (e) {
                          n(e)
                        }
                        s = []
                      })
                      .resume()
                  })
                )
              },
              on: function (e, t) {
                var i = this
                return (
                  "data" === e
                    ? this._worker.on(e, function (e) {
                        t.call(i, e.data, e.meta)
                      })
                    : this._worker.on(e, function () {
                        r.delay(t, arguments, i)
                      }),
                  this
                )
              },
              resume: function () {
                return (r.delay(this._worker.resume, [], this._worker), this)
              },
              pause: function () {
                return (this._worker.pause(), this)
              },
              toNodejsStream: function (e) {
                if ((r.checkSupport("nodestream"), "nodebuffer" !== this._outputType))
                  throw Error(this._outputType + " is not supported by this method")
                return new u(this, { objectMode: "nodebuffer" !== this._outputType }, e)
              },
            }),
              (t.exports = d))
          },
          {
            "../base64": 1,
            "../external": 6,
            "../nodejs/NodejsStreamOutputAdapter": 13,
            "../support": 30,
            "../utils": 32,
            "./ConvertWorker": 24,
            "./GenericWorker": 28,
          },
        ],
        30: [
          function (e, t, i) {
            "use strict"
            if (
              ((i.base64 = !0),
              (i.array = !0),
              (i.string = !0),
              (i.arraybuffer = "u" > typeof ArrayBuffer && "u" > typeof Uint8Array),
              (i.nodebuffer = "u" > typeof Buffer),
              (i.uint8array = "u" > typeof Uint8Array),
              "u" < typeof ArrayBuffer)
            )
              i.blob = !1
            else {
              var r = new ArrayBuffer(0)
              try {
                i.blob = 0 === new Blob([r], { type: "application/zip" }).size
              } catch (e) {
                try {
                  var n = new (
                    self.BlobBuilder ||
                    self.WebKitBlobBuilder ||
                    self.MozBlobBuilder ||
                    self.MSBlobBuilder
                  )()
                  ;(n.append(r), (i.blob = 0 === n.getBlob("application/zip").size))
                } catch (e) {
                  i.blob = !1
                }
              }
            }
            try {
              i.nodestream = !!e("readable-stream").Readable
            } catch (e) {
              i.nodestream = !1
            }
          },
          { "readable-stream": 16 },
        ],
        31: [
          function (e, t, i) {
            "use strict"
            for (
              var r = e("./utils"),
                n = e("./support"),
                s = e("./nodejsUtils"),
                a = e("./stream/GenericWorker"),
                o = Array(256),
                l = 0;
              l < 256;
              l++
            )
              o[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1
            function u() {
              ;(a.call(this, "utf-8 decode"), (this.leftOver = null))
            }
            function d() {
              a.call(this, "utf-8 encode")
            }
            ;((o[254] = o[254] = 1),
              (i.utf8encode = function (e) {
                return n.nodebuffer
                  ? s.newBufferFrom(e, "utf-8")
                  : (function (e) {
                      var t,
                        i,
                        r,
                        s,
                        a,
                        o = e.length,
                        l = 0
                      for (s = 0; s < o; s++)
                        (55296 == (64512 & (i = e.charCodeAt(s))) &&
                          s + 1 < o &&
                          56320 == (64512 & (r = e.charCodeAt(s + 1))) &&
                          ((i = 65536 + ((i - 55296) << 10) + (r - 56320)), s++),
                          (l += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4))
                      for (t = n.uint8array ? new Uint8Array(l) : Array(l), s = a = 0; a < l; s++)
                        (55296 == (64512 & (i = e.charCodeAt(s))) &&
                          s + 1 < o &&
                          56320 == (64512 & (r = e.charCodeAt(s + 1))) &&
                          ((i = 65536 + ((i - 55296) << 10) + (r - 56320)), s++),
                          i < 128
                            ? (t[a++] = i)
                            : (i < 2048
                                ? (t[a++] = 192 | (i >>> 6))
                                : (i < 65536
                                    ? (t[a++] = 224 | (i >>> 12))
                                    : ((t[a++] = 240 | (i >>> 18)), (t[a++] = 128 | ((i >>> 12) & 63))),
                                  (t[a++] = 128 | ((i >>> 6) & 63))),
                              (t[a++] = 128 | (63 & i))))
                      return t
                    })(e)
              }),
              (i.utf8decode = function (e) {
                return n.nodebuffer
                  ? r.transformTo("nodebuffer", e).toString("utf-8")
                  : (function (e) {
                      var t,
                        i,
                        n,
                        s,
                        a = e.length,
                        l = Array(2 * a)
                      for (t = i = 0; t < a;)
                        if ((n = e[t++]) < 128) l[i++] = n
                        else if (4 < (s = o[n])) ((l[i++] = 65533), (t += s - 1))
                        else {
                          for (n &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && t < a;)
                            ((n = (n << 6) | (63 & e[t++])), s--)
                          1 < s
                            ? (l[i++] = 65533)
                            : n < 65536
                              ? (l[i++] = n)
                              : ((n -= 65536), (l[i++] = 55296 | ((n >> 10) & 1023)), (l[i++] = 56320 | (1023 & n)))
                        }
                      return (
                        l.length !== i && (l.subarray ? (l = l.subarray(0, i)) : (l.length = i)),
                        r.applyFromCharCode(l)
                      )
                    })((e = r.transformTo(n.uint8array ? "uint8array" : "array", e)))
              }),
              r.inherits(u, a),
              (u.prototype.processChunk = function (e) {
                var t = r.transformTo(n.uint8array ? "uint8array" : "array", e.data)
                if (this.leftOver && this.leftOver.length) {
                  if (n.uint8array) {
                    var s = t
                    ;((t = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0),
                      t.set(s, this.leftOver.length))
                  } else t = this.leftOver.concat(t)
                  this.leftOver = null
                }
                var a = (function (e, t) {
                    var i
                    for ((t = t || e.length) > e.length && (t = e.length), i = t - 1; 0 <= i && 128 == (192 & e[i]);)
                      i--
                    return i < 0 || 0 === i ? t : i + o[e[i]] > t ? i : t
                  })(t),
                  l = t
                ;(a !== t.length &&
                  (n.uint8array
                    ? ((l = t.subarray(0, a)), (this.leftOver = t.subarray(a, t.length)))
                    : ((l = t.slice(0, a)), (this.leftOver = t.slice(a, t.length)))),
                  this.push({ data: i.utf8decode(l), meta: e.meta }))
              }),
              (u.prototype.flush = function () {
                this.leftOver &&
                  this.leftOver.length &&
                  (this.push({ data: i.utf8decode(this.leftOver), meta: {} }), (this.leftOver = null))
              }),
              (i.Utf8DecodeWorker = u),
              r.inherits(d, a),
              (d.prototype.processChunk = function (e) {
                this.push({ data: i.utf8encode(e.data), meta: e.meta })
              }),
              (i.Utf8EncodeWorker = d))
          },
          { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 },
        ],
        32: [
          function (e, t, i) {
            "use strict"
            var r = e("./support"),
              n = e("./base64"),
              s = e("./nodejsUtils"),
              a = e("./external")
            function o(e) {
              return e
            }
            function l(e, t) {
              for (var i = 0; i < e.length; ++i) t[i] = 255 & e.charCodeAt(i)
              return t
            }
            ;(e("setimmediate"),
              (i.newBlob = function (e, t) {
                i.checkSupport("blob")
                try {
                  return new Blob([e], { type: t })
                } catch (i) {
                  try {
                    var r = new (
                      self.BlobBuilder ||
                      self.WebKitBlobBuilder ||
                      self.MozBlobBuilder ||
                      self.MSBlobBuilder
                    )()
                    return (r.append(e), r.getBlob(t))
                  } catch (e) {
                    throw Error("Bug : can't construct the Blob.")
                  }
                }
              }))
            var u = {
              stringifyByChunk: function (e, t, i) {
                var r = [],
                  n = 0,
                  s = e.length
                if (s <= i) return String.fromCharCode.apply(null, e)
                for (; n < s;)
                  ("array" === t || "nodebuffer" === t
                    ? r.push(String.fromCharCode.apply(null, e.slice(n, Math.min(n + i, s))))
                    : r.push(String.fromCharCode.apply(null, e.subarray(n, Math.min(n + i, s)))),
                    (n += i))
                return r.join("")
              },
              stringifyByChar: function (e) {
                for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(e[i])
                return t
              },
              applyCanBeUsed: {
                uint8array: (function () {
                  try {
                    return r.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length
                  } catch (e) {
                    return !1
                  }
                })(),
                nodebuffer: (function () {
                  try {
                    return r.nodebuffer && 1 === String.fromCharCode.apply(null, s.allocBuffer(1)).length
                  } catch (e) {
                    return !1
                  }
                })(),
              },
            }
            function d(e) {
              var t = 65536,
                r = i.getTypeOf(e),
                n = !0
              if (
                ("uint8array" === r
                  ? (n = u.applyCanBeUsed.uint8array)
                  : "nodebuffer" === r && (n = u.applyCanBeUsed.nodebuffer),
                n)
              )
                for (; 1 < t;)
                  try {
                    return u.stringifyByChunk(e, r, t)
                  } catch (e) {
                    t = Math.floor(t / 2)
                  }
              return u.stringifyByChar(e)
            }
            function c(e, t) {
              for (var i = 0; i < e.length; i++) t[i] = e[i]
              return t
            }
            i.applyFromCharCode = d
            var h = {}
            ;((h.string = {
              string: o,
              array: function (e) {
                return l(e, Array(e.length))
              },
              arraybuffer: function (e) {
                return h.string.uint8array(e).buffer
              },
              uint8array: function (e) {
                return l(e, new Uint8Array(e.length))
              },
              nodebuffer: function (e) {
                return l(e, s.allocBuffer(e.length))
              },
            }),
              (h.array = {
                string: d,
                array: o,
                arraybuffer: function (e) {
                  return new Uint8Array(e).buffer
                },
                uint8array: function (e) {
                  return new Uint8Array(e)
                },
                nodebuffer: function (e) {
                  return s.newBufferFrom(e)
                },
              }),
              (h.arraybuffer = {
                string: function (e) {
                  return d(new Uint8Array(e))
                },
                array: function (e) {
                  return c(new Uint8Array(e), Array(e.byteLength))
                },
                arraybuffer: o,
                uint8array: function (e) {
                  return new Uint8Array(e)
                },
                nodebuffer: function (e) {
                  return s.newBufferFrom(new Uint8Array(e))
                },
              }),
              (h.uint8array = {
                string: d,
                array: function (e) {
                  return c(e, Array(e.length))
                },
                arraybuffer: function (e) {
                  return e.buffer
                },
                uint8array: o,
                nodebuffer: function (e) {
                  return s.newBufferFrom(e)
                },
              }),
              (h.nodebuffer = {
                string: d,
                array: function (e) {
                  return c(e, Array(e.length))
                },
                arraybuffer: function (e) {
                  return h.nodebuffer.uint8array(e).buffer
                },
                uint8array: function (e) {
                  return c(e, new Uint8Array(e.length))
                },
                nodebuffer: o,
              }),
              (i.transformTo = function (e, t) {
                return ((t = t || ""), e) ? (i.checkSupport(e), h[i.getTypeOf(t)][e](t)) : t
              }),
              (i.resolve = function (e) {
                for (var t = e.split("/"), i = [], r = 0; r < t.length; r++) {
                  var n = t[r]
                  "." === n || ("" === n && 0 !== r && r !== t.length - 1) || (".." === n ? i.pop() : i.push(n))
                }
                return i.join("/")
              }),
              (i.getTypeOf = function (e) {
                return "string" == typeof e
                  ? "string"
                  : "[object Array]" === Object.prototype.toString.call(e)
                    ? "array"
                    : r.nodebuffer && s.isBuffer(e)
                      ? "nodebuffer"
                      : r.uint8array && e instanceof Uint8Array
                        ? "uint8array"
                        : r.arraybuffer && e instanceof ArrayBuffer
                          ? "arraybuffer"
                          : void 0
              }),
              (i.checkSupport = function (e) {
                if (!r[e.toLowerCase()]) throw Error(e + " is not supported by this platform")
              }),
              (i.MAX_VALUE_16BITS = 65535),
              (i.MAX_VALUE_32BITS = -1),
              (i.pretty = function (e) {
                var t,
                  i,
                  r = ""
                for (i = 0; i < (e || "").length; i++)
                  r += "\\x" + ((t = e.charCodeAt(i)) < 16 ? "0" : "") + t.toString(16).toUpperCase()
                return r
              }),
              (i.delay = function (e, t, i) {
                setImmediate(function () {
                  e.apply(i || null, t || [])
                })
              }),
              (i.inherits = function (e, t) {
                function i() {}
                ;((i.prototype = t.prototype), (e.prototype = new i()))
              }),
              (i.extend = function () {
                var e,
                  t,
                  i = {}
                for (e = 0; e < arguments.length; e++)
                  for (t in arguments[e])
                    Object.prototype.hasOwnProperty.call(arguments[e], t) && void 0 === i[t] && (i[t] = arguments[e][t])
                return i
              }),
              (i.prepareContent = function (e, t, s, o, u) {
                return a.Promise.resolve(t)
                  .then(function (e) {
                    return r.blob &&
                      (e instanceof Blob ||
                        -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e))) &&
                      "u" > typeof FileReader
                      ? new a.Promise(function (t, i) {
                          var r = new FileReader()
                          ;((r.onload = function (e) {
                            t(e.target.result)
                          }),
                            (r.onerror = function (e) {
                              i(e.target.error)
                            }),
                            r.readAsArrayBuffer(e))
                        })
                      : e
                  })
                  .then(function (t) {
                    var d,
                      c = i.getTypeOf(t)
                    return c
                      ? ("arraybuffer" === c
                          ? (t = i.transformTo("uint8array", t))
                          : "string" === c &&
                            (u
                              ? (t = n.decode(t))
                              : s &&
                                !0 !== o &&
                                (t = l((d = t), r.uint8array ? new Uint8Array(d.length) : Array(d.length)))),
                        t)
                      : a.Promise.reject(
                          Error(
                            "Can't read the data of '" +
                              e +
                              "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?",
                          ),
                        )
                  })
              }))
          },
          { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 },
        ],
        33: [
          function (e, t, i) {
            "use strict"
            var r = e("./reader/readerFor"),
              n = e("./utils"),
              s = e("./signature"),
              a = e("./zipEntry"),
              o = e("./support")
            function l(e) {
              ;((this.files = []), (this.loadOptions = e))
            }
            ;((l.prototype = {
              checkSignature: function (e) {
                if (!this.reader.readAndCheckSignature(e)) {
                  this.reader.index -= 4
                  var t = this.reader.readString(4)
                  throw Error(
                    "Corrupted zip or bug: unexpected signature (" + n.pretty(t) + ", expected " + n.pretty(e) + ")",
                  )
                }
              },
              isSignature: function (e, t) {
                var i = this.reader.index
                this.reader.setIndex(e)
                var r = this.reader.readString(4) === t
                return (this.reader.setIndex(i), r)
              },
              readBlockEndOfCentral: function () {
                ;((this.diskNumber = this.reader.readInt(2)),
                  (this.diskWithCentralDirStart = this.reader.readInt(2)),
                  (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                  (this.centralDirRecords = this.reader.readInt(2)),
                  (this.centralDirSize = this.reader.readInt(4)),
                  (this.centralDirOffset = this.reader.readInt(4)),
                  (this.zipCommentLength = this.reader.readInt(2)))
                var e = this.reader.readData(this.zipCommentLength),
                  t = o.uint8array ? "uint8array" : "array",
                  i = n.transformTo(t, e)
                this.zipComment = this.loadOptions.decodeFileName(i)
              },
              readBlockZip64EndOfCentral: function () {
                ;((this.zip64EndOfCentralSize = this.reader.readInt(8)),
                  this.reader.skip(4),
                  (this.diskNumber = this.reader.readInt(4)),
                  (this.diskWithCentralDirStart = this.reader.readInt(4)),
                  (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                  (this.centralDirRecords = this.reader.readInt(8)),
                  (this.centralDirSize = this.reader.readInt(8)),
                  (this.centralDirOffset = this.reader.readInt(8)),
                  (this.zip64ExtensibleData = {}))
                for (var e, t, i, r = this.zip64EndOfCentralSize - 44; 0 < r;)
                  ((e = this.reader.readInt(2)),
                    (t = this.reader.readInt(4)),
                    (i = this.reader.readData(t)),
                    (this.zip64ExtensibleData[e] = { id: e, length: t, value: i }))
              },
              readBlockZip64EndOfCentralLocator: function () {
                if (
                  ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                  (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8)),
                  (this.disksCount = this.reader.readInt(4)),
                  1 < this.disksCount)
                )
                  throw Error("Multi-volumes zip are not supported")
              },
              readLocalFiles: function () {
                var e, t
                for (e = 0; e < this.files.length; e++)
                  ((t = this.files[e]),
                    this.reader.setIndex(t.localHeaderOffset),
                    this.checkSignature(s.LOCAL_FILE_HEADER),
                    t.readLocalPart(this.reader),
                    t.handleUTF8(),
                    t.processAttributes())
              },
              readCentralDir: function () {
                var e
                for (
                  this.reader.setIndex(this.centralDirOffset);
                  this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);
                )
                  ((e = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader),
                    this.files.push(e))
                if (
                  this.centralDirRecords !== this.files.length &&
                  0 !== this.centralDirRecords &&
                  0 === this.files.length
                )
                  throw Error(
                    "Corrupted zip or bug: expected " +
                      this.centralDirRecords +
                      " records in central dir, got " +
                      this.files.length,
                  )
              },
              readEndOfCentral: function () {
                var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END)
                if (e < 0)
                  throw this.isSignature(0, s.LOCAL_FILE_HEADER)
                    ? Error("Corrupted zip: can't find end of central directory")
                    : Error(
                        "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html",
                      )
                this.reader.setIndex(e)
                var t = e
                if (
                  (this.checkSignature(s.CENTRAL_DIRECTORY_END),
                  this.readBlockEndOfCentral(),
                  this.diskNumber === n.MAX_VALUE_16BITS ||
                    this.diskWithCentralDirStart === n.MAX_VALUE_16BITS ||
                    this.centralDirRecordsOnThisDisk === n.MAX_VALUE_16BITS ||
                    this.centralDirRecords === n.MAX_VALUE_16BITS ||
                    this.centralDirSize === n.MAX_VALUE_32BITS ||
                    this.centralDirOffset === n.MAX_VALUE_32BITS)
                ) {
                  if (
                    ((this.zip64 = !0), (e = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
                  )
                    throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator")
                  if (
                    (this.reader.setIndex(e),
                    this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                    this.readBlockZip64EndOfCentralLocator(),
                    !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) &&
                      ((this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(
                        s.ZIP64_CENTRAL_DIRECTORY_END,
                      )),
                      this.relativeOffsetEndOfZip64CentralDir < 0))
                  )
                    throw Error("Corrupted zip: can't find the ZIP64 end of central directory")
                  ;(this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                    this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),
                    this.readBlockZip64EndOfCentral())
                }
                var i = this.centralDirOffset + this.centralDirSize
                this.zip64 && ((i += 20), (i += 12 + this.zip64EndOfCentralSize))
                var r = t - i
                if (0 < r) this.isSignature(t, s.CENTRAL_FILE_HEADER) || (this.reader.zero = r)
                else if (r < 0) throw Error("Corrupted zip: missing " + Math.abs(r) + " bytes.")
              },
              prepareReader: function (e) {
                this.reader = r(e)
              },
              load: function (e) {
                ;(this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles())
              },
            }),
              (t.exports = l))
          },
          { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 },
        ],
        34: [
          function (e, t, i) {
            "use strict"
            var r = e("./reader/readerFor"),
              n = e("./utils"),
              s = e("./compressedObject"),
              a = e("./crc32"),
              o = e("./utf8"),
              l = e("./compressions"),
              u = e("./support")
            function d(e, t) {
              ;((this.options = e), (this.loadOptions = t))
            }
            ;((d.prototype = {
              isEncrypted: function () {
                return 1 == (1 & this.bitFlag)
              },
              useUTF8: function () {
                return 2048 == (2048 & this.bitFlag)
              },
              readLocalPart: function (e) {
                var t, i
                if (
                  (e.skip(22),
                  (this.fileNameLength = e.readInt(2)),
                  (i = e.readInt(2)),
                  (this.fileName = e.readData(this.fileNameLength)),
                  e.skip(i),
                  -1 === this.compressedSize || -1 === this.uncompressedSize)
                )
                  throw Error(
                    "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
                  )
                if (
                  null ===
                  (t = (function (e) {
                    for (var t in l) if (Object.prototype.hasOwnProperty.call(l, t) && l[t].magic === e) return l[t]
                    return null
                  })(this.compressionMethod))
                )
                  throw Error(
                    "Corrupted zip : compression " +
                      n.pretty(this.compressionMethod) +
                      " unknown (inner file : " +
                      n.transformTo("string", this.fileName) +
                      ")",
                  )
                this.decompressed = new s(
                  this.compressedSize,
                  this.uncompressedSize,
                  this.crc32,
                  t,
                  e.readData(this.compressedSize),
                )
              },
              readCentralPart: function (e) {
                ;((this.versionMadeBy = e.readInt(2)),
                  e.skip(2),
                  (this.bitFlag = e.readInt(2)),
                  (this.compressionMethod = e.readString(2)),
                  (this.date = e.readDate()),
                  (this.crc32 = e.readInt(4)),
                  (this.compressedSize = e.readInt(4)),
                  (this.uncompressedSize = e.readInt(4)))
                var t = e.readInt(2)
                if (
                  ((this.extraFieldsLength = e.readInt(2)),
                  (this.fileCommentLength = e.readInt(2)),
                  (this.diskNumberStart = e.readInt(2)),
                  (this.internalFileAttributes = e.readInt(2)),
                  (this.externalFileAttributes = e.readInt(4)),
                  (this.localHeaderOffset = e.readInt(4)),
                  this.isEncrypted())
                )
                  throw Error("Encrypted zip are not supported")
                ;(e.skip(t),
                  this.readExtraFields(e),
                  this.parseZIP64ExtraField(e),
                  (this.fileComment = e.readData(this.fileCommentLength)))
              },
              processAttributes: function () {
                ;((this.unixPermissions = null), (this.dosPermissions = null))
                var e = this.versionMadeBy >> 8
                ;((this.dir = !!(16 & this.externalFileAttributes)),
                  0 == e && (this.dosPermissions = 63 & this.externalFileAttributes),
                  3 == e && (this.unixPermissions = (this.externalFileAttributes >> 16) & 65535),
                  this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0))
              },
              parseZIP64ExtraField: function () {
                if (this.extraFields[1]) {
                  var e = r(this.extraFields[1].value)
                  ;(this.uncompressedSize === n.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)),
                    this.compressedSize === n.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)),
                    this.localHeaderOffset === n.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)),
                    this.diskNumberStart === n.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4)))
                }
              },
              readExtraFields: function (e) {
                var t,
                  i,
                  r,
                  n = e.index + this.extraFieldsLength
                for (this.extraFields || (this.extraFields = {}); e.index + 4 < n;)
                  ((t = e.readInt(2)),
                    (i = e.readInt(2)),
                    (r = e.readData(i)),
                    (this.extraFields[t] = { id: t, length: i, value: r }))
                e.setIndex(n)
              },
              handleUTF8: function () {
                var e = u.uint8array ? "uint8array" : "array"
                if (this.useUTF8())
                  ((this.fileNameStr = o.utf8decode(this.fileName)),
                    (this.fileCommentStr = o.utf8decode(this.fileComment)))
                else {
                  var t = this.findExtraFieldUnicodePath()
                  if (null !== t) this.fileNameStr = t
                  else {
                    var i = n.transformTo(e, this.fileName)
                    this.fileNameStr = this.loadOptions.decodeFileName(i)
                  }
                  var r = this.findExtraFieldUnicodeComment()
                  if (null !== r) this.fileCommentStr = r
                  else {
                    var s = n.transformTo(e, this.fileComment)
                    this.fileCommentStr = this.loadOptions.decodeFileName(s)
                  }
                }
              },
              findExtraFieldUnicodePath: function () {
                var e = this.extraFields[28789]
                if (e) {
                  var t = r(e.value)
                  return 1 !== t.readInt(1) || a(this.fileName) !== t.readInt(4)
                    ? null
                    : o.utf8decode(t.readData(e.length - 5))
                }
                return null
              },
              findExtraFieldUnicodeComment: function () {
                var e = this.extraFields[25461]
                if (e) {
                  var t = r(e.value)
                  return 1 !== t.readInt(1) || a(this.fileComment) !== t.readInt(4)
                    ? null
                    : o.utf8decode(t.readData(e.length - 5))
                }
                return null
              },
            }),
              (t.exports = d))
          },
          {
            "./compressedObject": 2,
            "./compressions": 3,
            "./crc32": 4,
            "./reader/readerFor": 22,
            "./support": 30,
            "./utf8": 31,
            "./utils": 32,
          },
        ],
        35: [
          function (e, t, i) {
            "use strict"
            function r(e, t, i) {
              ;((this.name = e),
                (this.dir = i.dir),
                (this.date = i.date),
                (this.comment = i.comment),
                (this.unixPermissions = i.unixPermissions),
                (this.dosPermissions = i.dosPermissions),
                (this._data = t),
                (this._dataBinary = i.binary),
                (this.options = { compression: i.compression, compressionOptions: i.compressionOptions }))
            }
            var n = e("./stream/StreamHelper"),
              s = e("./stream/DataWorker"),
              a = e("./utf8"),
              o = e("./compressedObject"),
              l = e("./stream/GenericWorker")
            r.prototype = {
              internalStream: function (e) {
                var t = null,
                  i = "string"
                try {
                  if (!e) throw Error("No output type specified.")
                  var r = "string" === (i = e.toLowerCase()) || "text" === i
                  ;(("binarystring" !== i && "text" !== i) || (i = "string"), (t = this._decompressWorker()))
                  var s = !this._dataBinary
                  ;(s && !r && (t = t.pipe(new a.Utf8EncodeWorker())),
                    !s && r && (t = t.pipe(new a.Utf8DecodeWorker())))
                } catch (e) {
                  ;(t = new l("error")).error(e)
                }
                return new n(t, i, "")
              },
              async: function (e, t) {
                return this.internalStream(e).accumulate(t)
              },
              nodeStream: function (e, t) {
                return this.internalStream(e || "nodebuffer").toNodejsStream(t)
              },
              _compressWorker: function (e, t) {
                if (this._data instanceof o && this._data.compression.magic === e.magic)
                  return this._data.getCompressedWorker()
                var i = this._decompressWorker()
                return (this._dataBinary || (i = i.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(i, e, t))
              },
              _decompressWorker: function () {
                return this._data instanceof o
                  ? this._data.getContentWorker()
                  : this._data instanceof l
                    ? this._data
                    : new s(this._data)
              },
            }
            for (
              var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"],
                d = function () {
                  throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                },
                c = 0;
              c < u.length;
              c++
            )
              r.prototype[u[c]] = d
            t.exports = r
          },
          {
            "./compressedObject": 2,
            "./stream/DataWorker": 27,
            "./stream/GenericWorker": 28,
            "./stream/StreamHelper": 29,
            "./utf8": 31,
          },
        ],
        36: [
          function (e, t, r) {
            ;(function (e) {
              "use strict"
              var i,
                r,
                n = e.MutationObserver || e.WebKitMutationObserver
              if (n) {
                var s = 0,
                  a = new n(d),
                  o = e.document.createTextNode("")
                ;(a.observe(o, { characterData: !0 }),
                  (i = function () {
                    o.data = s = ++s % 2
                  }))
              } else if (e.setImmediate || void 0 === e.MessageChannel)
                i =
                  "document" in e && "onreadystatechange" in e.document.createElement("script")
                    ? function () {
                        var t = e.document.createElement("script")
                        ;((t.onreadystatechange = function () {
                          ;(d(), (t.onreadystatechange = null), t.parentNode.removeChild(t), (t = null))
                        }),
                          e.document.documentElement.appendChild(t))
                      }
                    : function () {
                        setTimeout(d, 0)
                      }
              else {
                var l = new e.MessageChannel()
                ;((l.port1.onmessage = d),
                  (i = function () {
                    l.port2.postMessage(0)
                  }))
              }
              var u = []
              function d() {
                var e, t
                r = !0
                for (var i = u.length; i;) {
                  for (t = u, u = [], e = -1; ++e < i;) t[e]()
                  i = u.length
                }
                r = !1
              }
              t.exports = function (e) {
                1 !== u.push(e) || r || i()
              }
            }).call(this, void 0 !== i.g ? i.g : "u" > typeof self ? self : "u" > typeof window ? window : {})
          },
          {},
        ],
        37: [
          function (e, t, i) {
            "use strict"
            var r = e("immediate")
            function n() {}
            var s = {},
              a = ["REJECTED"],
              o = ["FULFILLED"],
              l = ["PENDING"]
            function u(e) {
              if ("function" != typeof e) throw TypeError("resolver must be a function")
              ;((this.state = l), (this.queue = []), (this.outcome = void 0), e !== n && f(this, e))
            }
            function d(e, t, i) {
              ;((this.promise = e),
                "function" == typeof t && ((this.onFulfilled = t), (this.callFulfilled = this.otherCallFulfilled)),
                "function" == typeof i && ((this.onRejected = i), (this.callRejected = this.otherCallRejected)))
            }
            function c(e, t, i) {
              r(function () {
                var r
                try {
                  r = t(i)
                } catch (t) {
                  return s.reject(e, t)
                }
                r === e ? s.reject(e, TypeError("Cannot resolve promise with itself")) : s.resolve(e, r)
              })
            }
            function h(e) {
              var t = e && e.then
              if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t)
                return function () {
                  t.apply(e, arguments)
                }
            }
            function f(e, t) {
              var i = !1
              function r(t) {
                i || ((i = !0), s.reject(e, t))
              }
              function n(t) {
                i || ((i = !0), s.resolve(e, t))
              }
              var a = p(function () {
                t(n, r)
              })
              "error" === a.status && r(a.value)
            }
            function p(e, t) {
              var i = {}
              try {
                ;((i.value = e(t)), (i.status = "success"))
              } catch (e) {
                ;((i.status = "error"), (i.value = e))
              }
              return i
            }
            ;(((t.exports = u).prototype.finally = function (e) {
              if ("function" != typeof e) return this
              var t = this.constructor
              return this.then(
                function (i) {
                  return t.resolve(e()).then(function () {
                    return i
                  })
                },
                function (i) {
                  return t.resolve(e()).then(function () {
                    throw i
                  })
                },
              )
            }),
              (u.prototype.catch = function (e) {
                return this.then(null, e)
              }),
              (u.prototype.then = function (e, t) {
                if (("function" != typeof e && this.state === o) || ("function" != typeof t && this.state === a))
                  return this
                var i = new this.constructor(n)
                return (
                  this.state !== l ? c(i, this.state === o ? e : t, this.outcome) : this.queue.push(new d(i, e, t)),
                  i
                )
              }),
              (d.prototype.callFulfilled = function (e) {
                s.resolve(this.promise, e)
              }),
              (d.prototype.otherCallFulfilled = function (e) {
                c(this.promise, this.onFulfilled, e)
              }),
              (d.prototype.callRejected = function (e) {
                s.reject(this.promise, e)
              }),
              (d.prototype.otherCallRejected = function (e) {
                c(this.promise, this.onRejected, e)
              }),
              (s.resolve = function (e, t) {
                var i = p(h, t)
                if ("error" === i.status) return s.reject(e, i.value)
                var r = i.value
                if (r) f(e, r)
                else {
                  ;((e.state = o), (e.outcome = t))
                  for (var n = -1, a = e.queue.length; ++n < a;) e.queue[n].callFulfilled(t)
                }
                return e
              }),
              (s.reject = function (e, t) {
                ;((e.state = a), (e.outcome = t))
                for (var i = -1, r = e.queue.length; ++i < r;) e.queue[i].callRejected(t)
                return e
              }),
              (u.resolve = function (e) {
                return e instanceof this ? e : s.resolve(new this(n), e)
              }),
              (u.reject = function (e) {
                var t = new this(n)
                return s.reject(t, e)
              }),
              (u.all = function (e) {
                var t = this
                if ("[object Array]" !== Object.prototype.toString.call(e))
                  return this.reject(TypeError("must be an array"))
                var i = e.length,
                  r = !1
                if (!i) return this.resolve([])
                for (var a = Array(i), o = 0, l = -1, u = new this(n); ++l < i;)
                  !(function (e, n) {
                    t.resolve(e).then(
                      function (e) {
                        ;((a[n] = e), ++o !== i || r || ((r = !0), s.resolve(u, a)))
                      },
                      function (e) {
                        r || ((r = !0), s.reject(u, e))
                      },
                    )
                  })(e[l], l)
                return u
              }),
              (u.race = function (e) {
                if ("[object Array]" !== Object.prototype.toString.call(e))
                  return this.reject(TypeError("must be an array"))
                var t,
                  i = e.length,
                  r = !1
                if (!i) return this.resolve([])
                for (var a = -1, o = new this(n); ++a < i;)
                  ((t = e[a]),
                    this.resolve(t).then(
                      function (e) {
                        r || ((r = !0), s.resolve(o, e))
                      },
                      function (e) {
                        r || ((r = !0), s.reject(o, e))
                      },
                    ))
                return o
              }))
          },
          { immediate: 36 },
        ],
        38: [
          function (e, t, i) {
            "use strict"
            var r = {}
            ;((0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")),
              (t.exports = r))
          },
          { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 },
        ],
        39: [
          function (e, t, i) {
            "use strict"
            var r = e("./zlib/deflate"),
              n = e("./utils/common"),
              s = e("./utils/strings"),
              a = e("./zlib/messages"),
              o = e("./zlib/zstream"),
              l = Object.prototype.toString
            function u(e) {
              if (!(this instanceof u)) return new u(e)
              this.options = n.assign(
                { level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" },
                e || {},
              )
              var t,
                i = this.options
              ;(i.raw && 0 < i.windowBits
                ? (i.windowBits = -i.windowBits)
                : i.gzip && 0 < i.windowBits && i.windowBits < 16 && (i.windowBits += 16),
                (this.err = 0),
                (this.msg = ""),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new o()),
                (this.strm.avail_out = 0))
              var d = r.deflateInit2(this.strm, i.level, i.method, i.windowBits, i.memLevel, i.strategy)
              if (0 !== d) throw Error(a[d])
              if ((i.header && r.deflateSetHeader(this.strm, i.header), i.dictionary)) {
                if (
                  ((t =
                    "string" == typeof i.dictionary
                      ? s.string2buf(i.dictionary)
                      : "[object ArrayBuffer]" === l.call(i.dictionary)
                        ? new Uint8Array(i.dictionary)
                        : i.dictionary),
                  0 !== (d = r.deflateSetDictionary(this.strm, t)))
                )
                  throw Error(a[d])
                this._dict_set = !0
              }
            }
            function d(e, t) {
              var i = new u(t)
              if ((i.push(e, !0), i.err)) throw i.msg || a[i.err]
              return i.result
            }
            ;((u.prototype.push = function (e, t) {
              var i,
                a,
                o = this.strm,
                u = this.options.chunkSize
              if (this.ended) return !1
              ;((a = t === ~~t ? t : 4 * (!0 === t)),
                "string" == typeof e
                  ? (o.input = s.string2buf(e))
                  : "[object ArrayBuffer]" === l.call(e)
                    ? (o.input = new Uint8Array(e))
                    : (o.input = e),
                (o.next_in = 0),
                (o.avail_in = o.input.length))
              do {
                if (
                  (0 === o.avail_out && ((o.output = new n.Buf8(u)), (o.next_out = 0), (o.avail_out = u)),
                  1 !== (i = r.deflate(o, a)) && 0 !== i)
                )
                  return (this.onEnd(i), (this.ended = !0), !1)
                ;(0 !== o.avail_out && (0 !== o.avail_in || (4 !== a && 2 !== a))) ||
                  ("string" === this.options.to
                    ? this.onData(s.buf2binstring(n.shrinkBuf(o.output, o.next_out)))
                    : this.onData(n.shrinkBuf(o.output, o.next_out)))
              } while ((0 < o.avail_in || 0 === o.avail_out) && 1 !== i)
              return 4 === a
                ? ((i = r.deflateEnd(this.strm)), this.onEnd(i), (this.ended = !0), 0 === i)
                : 2 !== a || (this.onEnd(0), (o.avail_out = 0), !0)
            }),
              (u.prototype.onData = function (e) {
                this.chunks.push(e)
              }),
              (u.prototype.onEnd = function (e) {
                ;(0 === e &&
                  ("string" === this.options.to
                    ? (this.result = this.chunks.join(""))
                    : (this.result = n.flattenChunks(this.chunks))),
                  (this.chunks = []),
                  (this.err = e),
                  (this.msg = this.strm.msg))
              }),
              (i.Deflate = u),
              (i.deflate = d),
              (i.deflateRaw = function (e, t) {
                return (((t = t || {}).raw = !0), d(e, t))
              }),
              (i.gzip = function (e, t) {
                return (((t = t || {}).gzip = !0), d(e, t))
              }))
          },
          {
            "./utils/common": 41,
            "./utils/strings": 42,
            "./zlib/deflate": 46,
            "./zlib/messages": 51,
            "./zlib/zstream": 53,
          },
        ],
        40: [
          function (e, t, i) {
            "use strict"
            var r = e("./zlib/inflate"),
              n = e("./utils/common"),
              s = e("./utils/strings"),
              a = e("./zlib/constants"),
              o = e("./zlib/messages"),
              l = e("./zlib/zstream"),
              u = e("./zlib/gzheader"),
              d = Object.prototype.toString
            function c(e) {
              if (!(this instanceof c)) return new c(e)
              this.options = n.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e || {})
              var t = this.options
              ;(t.raw &&
                0 <= t.windowBits &&
                t.windowBits < 16 &&
                ((t.windowBits = -t.windowBits), 0 === t.windowBits && (t.windowBits = -15)),
                !(0 <= t.windowBits && t.windowBits < 16) || (e && e.windowBits) || (t.windowBits += 32),
                15 < t.windowBits && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15),
                (this.err = 0),
                (this.msg = ""),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new l()),
                (this.strm.avail_out = 0))
              var i = r.inflateInit2(this.strm, t.windowBits)
              if (i !== a.Z_OK) throw Error(o[i])
              ;((this.header = new u()), r.inflateGetHeader(this.strm, this.header))
            }
            function h(e, t) {
              var i = new c(t)
              if ((i.push(e, !0), i.err)) throw i.msg || o[i.err]
              return i.result
            }
            ;((c.prototype.push = function (e, t) {
              var i,
                o,
                l,
                u,
                c,
                h,
                f = this.strm,
                p = this.options.chunkSize,
                m = this.options.dictionary,
                g = !1
              if (this.ended) return !1
              ;((o = t === ~~t ? t : !0 === t ? a.Z_FINISH : a.Z_NO_FLUSH),
                "string" == typeof e
                  ? (f.input = s.binstring2buf(e))
                  : "[object ArrayBuffer]" === d.call(e)
                    ? (f.input = new Uint8Array(e))
                    : (f.input = e),
                (f.next_in = 0),
                (f.avail_in = f.input.length))
              do {
                if (
                  (0 === f.avail_out && ((f.output = new n.Buf8(p)), (f.next_out = 0), (f.avail_out = p)),
                  (i = r.inflate(f, a.Z_NO_FLUSH)) === a.Z_NEED_DICT &&
                    m &&
                    ((h =
                      "string" == typeof m
                        ? s.string2buf(m)
                        : "[object ArrayBuffer]" === d.call(m)
                          ? new Uint8Array(m)
                          : m),
                    (i = r.inflateSetDictionary(this.strm, h))),
                  i === a.Z_BUF_ERROR && !0 === g && ((i = a.Z_OK), (g = !1)),
                  i !== a.Z_STREAM_END && i !== a.Z_OK)
                )
                  return (this.onEnd(i), (this.ended = !0), !1)
                ;(f.next_out &&
                  ((0 !== f.avail_out &&
                    i !== a.Z_STREAM_END &&
                    (0 !== f.avail_in || (o !== a.Z_FINISH && o !== a.Z_SYNC_FLUSH))) ||
                    ("string" === this.options.to
                      ? ((l = s.utf8border(f.output, f.next_out)),
                        (u = f.next_out - l),
                        (c = s.buf2string(f.output, l)),
                        (f.next_out = u),
                        (f.avail_out = p - u),
                        u && n.arraySet(f.output, f.output, l, u, 0),
                        this.onData(c))
                      : this.onData(n.shrinkBuf(f.output, f.next_out)))),
                  0 === f.avail_in && 0 === f.avail_out && (g = !0))
              } while ((0 < f.avail_in || 0 === f.avail_out) && i !== a.Z_STREAM_END)
              return (
                i === a.Z_STREAM_END && (o = a.Z_FINISH),
                o === a.Z_FINISH
                  ? ((i = r.inflateEnd(this.strm)), this.onEnd(i), (this.ended = !0), i === a.Z_OK)
                  : o !== a.Z_SYNC_FLUSH || (this.onEnd(a.Z_OK), (f.avail_out = 0), !0)
              )
            }),
              (c.prototype.onData = function (e) {
                this.chunks.push(e)
              }),
              (c.prototype.onEnd = function (e) {
                ;(e === a.Z_OK &&
                  ("string" === this.options.to
                    ? (this.result = this.chunks.join(""))
                    : (this.result = n.flattenChunks(this.chunks))),
                  (this.chunks = []),
                  (this.err = e),
                  (this.msg = this.strm.msg))
              }),
              (i.Inflate = c),
              (i.inflate = h),
              (i.inflateRaw = function (e, t) {
                return (((t = t || {}).raw = !0), h(e, t))
              }),
              (i.ungzip = h))
          },
          {
            "./utils/common": 41,
            "./utils/strings": 42,
            "./zlib/constants": 44,
            "./zlib/gzheader": 47,
            "./zlib/inflate": 49,
            "./zlib/messages": 51,
            "./zlib/zstream": 53,
          },
        ],
        41: [
          function (e, t, i) {
            "use strict"
            var r = "u" > typeof Uint8Array && "u" > typeof Uint16Array && "u" > typeof Int32Array
            ;((i.assign = function (e) {
              for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                var i = t.shift()
                if (i) {
                  if ("object" != typeof i) throw TypeError(i + "must be non-object")
                  for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r])
                }
              }
              return e
            }),
              (i.shrinkBuf = function (e, t) {
                return e.length === t ? e : e.subarray ? e.subarray(0, t) : ((e.length = t), e)
              }))
            var n = {
                arraySet: function (e, t, i, r, n) {
                  if (t.subarray && e.subarray) e.set(t.subarray(i, i + r), n)
                  else for (var s = 0; s < r; s++) e[n + s] = t[i + s]
                },
                flattenChunks: function (e) {
                  var t, i, r, n, s, a
                  for (t = r = 0, i = e.length; t < i; t++) r += e[t].length
                  for (a = new Uint8Array(r), t = n = 0, i = e.length; t < i; t++)
                    ((s = e[t]), a.set(s, n), (n += s.length))
                  return a
                },
              },
              s = {
                arraySet: function (e, t, i, r, n) {
                  for (var s = 0; s < r; s++) e[n + s] = t[i + s]
                },
                flattenChunks: function (e) {
                  return [].concat.apply([], e)
                },
              }
            ;((i.setTyped = function (e) {
              e
                ? ((i.Buf8 = Uint8Array), (i.Buf16 = Uint16Array), (i.Buf32 = Int32Array), i.assign(i, n))
                : ((i.Buf8 = Array), (i.Buf16 = Array), (i.Buf32 = Array), i.assign(i, s))
            }),
              i.setTyped(r))
          },
          {},
        ],
        42: [
          function (e, t, i) {
            "use strict"
            var r = e("./common"),
              n = !0,
              s = !0
            try {
              String.fromCharCode.apply(null, [0])
            } catch (e) {
              n = !1
            }
            try {
              String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (e) {
              s = !1
            }
            for (var a = new r.Buf8(256), o = 0; o < 256; o++)
              a[o] = 252 <= o ? 6 : 248 <= o ? 5 : 240 <= o ? 4 : 224 <= o ? 3 : 192 <= o ? 2 : 1
            function l(e, t) {
              if (t < 65537 && ((e.subarray && s) || (!e.subarray && n)))
                return String.fromCharCode.apply(null, r.shrinkBuf(e, t))
              for (var i = "", a = 0; a < t; a++) i += String.fromCharCode(e[a])
              return i
            }
            ;((a[254] = a[254] = 1),
              (i.string2buf = function (e) {
                var t,
                  i,
                  n,
                  s,
                  a,
                  o = e.length,
                  l = 0
                for (s = 0; s < o; s++)
                  (55296 == (64512 & (i = e.charCodeAt(s))) &&
                    s + 1 < o &&
                    56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
                    ((i = 65536 + ((i - 55296) << 10) + (n - 56320)), s++),
                    (l += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4))
                for (t = new r.Buf8(l), s = a = 0; a < l; s++)
                  (55296 == (64512 & (i = e.charCodeAt(s))) &&
                    s + 1 < o &&
                    56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
                    ((i = 65536 + ((i - 55296) << 10) + (n - 56320)), s++),
                    i < 128
                      ? (t[a++] = i)
                      : (i < 2048
                          ? (t[a++] = 192 | (i >>> 6))
                          : (i < 65536
                              ? (t[a++] = 224 | (i >>> 12))
                              : ((t[a++] = 240 | (i >>> 18)), (t[a++] = 128 | ((i >>> 12) & 63))),
                            (t[a++] = 128 | ((i >>> 6) & 63))),
                        (t[a++] = 128 | (63 & i))))
                return t
              }),
              (i.buf2binstring = function (e) {
                return l(e, e.length)
              }),
              (i.binstring2buf = function (e) {
                for (var t = new r.Buf8(e.length), i = 0, n = t.length; i < n; i++) t[i] = e.charCodeAt(i)
                return t
              }),
              (i.buf2string = function (e, t) {
                var i,
                  r,
                  n,
                  s,
                  o = t || e.length,
                  u = Array(2 * o)
                for (i = r = 0; i < o;)
                  if ((n = e[i++]) < 128) u[r++] = n
                  else if (4 < (s = a[n])) ((u[r++] = 65533), (i += s - 1))
                  else {
                    for (n &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && i < o;) ((n = (n << 6) | (63 & e[i++])), s--)
                    1 < s
                      ? (u[r++] = 65533)
                      : n < 65536
                        ? (u[r++] = n)
                        : ((n -= 65536), (u[r++] = 55296 | ((n >> 10) & 1023)), (u[r++] = 56320 | (1023 & n)))
                  }
                return l(u, r)
              }),
              (i.utf8border = function (e, t) {
                var i
                for ((t = t || e.length) > e.length && (t = e.length), i = t - 1; 0 <= i && 128 == (192 & e[i]);) i--
                return i < 0 || 0 === i ? t : i + a[e[i]] > t ? i : t
              }))
          },
          { "./common": 41 },
        ],
        43: [
          function (e, t, i) {
            "use strict"
            t.exports = function (e, t, i, r) {
              for (var n = 65535 & e, s = (e >>> 16) & 65535, a = 0; 0 !== i;) {
                for (i -= a = 2e3 < i ? 2e3 : i; (s = (s + (n = (n + t[r++]) | 0)) | 0), --a;);
                ;((n %= 65521), (s %= 65521))
              }
              return n | (s << 16)
            }
          },
          {},
        ],
        44: [
          function (e, t, i) {
            "use strict"
            t.exports = {
              Z_NO_FLUSH: 0,
              Z_PARTIAL_FLUSH: 1,
              Z_SYNC_FLUSH: 2,
              Z_FULL_FLUSH: 3,
              Z_FINISH: 4,
              Z_BLOCK: 5,
              Z_TREES: 6,
              Z_OK: 0,
              Z_STREAM_END: 1,
              Z_NEED_DICT: 2,
              Z_ERRNO: -1,
              Z_STREAM_ERROR: -2,
              Z_DATA_ERROR: -3,
              Z_BUF_ERROR: -5,
              Z_NO_COMPRESSION: 0,
              Z_BEST_SPEED: 1,
              Z_BEST_COMPRESSION: 9,
              Z_DEFAULT_COMPRESSION: -1,
              Z_FILTERED: 1,
              Z_HUFFMAN_ONLY: 2,
              Z_RLE: 3,
              Z_FIXED: 4,
              Z_DEFAULT_STRATEGY: 0,
              Z_BINARY: 0,
              Z_TEXT: 1,
              Z_UNKNOWN: 2,
              Z_DEFLATED: 8,
            }
          },
          {},
        ],
        45: [
          function (e, t, i) {
            "use strict"
            var r = (function () {
              for (var e, t = [], i = 0; i < 256; i++) {
                e = i
                for (var r = 0; r < 8; r++) e = 1 & e ? 0xedb88320 ^ (e >>> 1) : e >>> 1
                t[i] = e
              }
              return t
            })()
            t.exports = function (e, t, i, n) {
              var s = n + i
              e ^= -1
              for (var a = n; a < s; a++) e = (e >>> 8) ^ r[255 & (e ^ t[a])]
              return -1 ^ e
            }
          },
          {},
        ],
        46: [
          function (e, t, i) {
            "use strict"
            var r,
              n = e("../utils/common"),
              s = e("./trees"),
              a = e("./adler32"),
              o = e("./crc32"),
              l = e("./messages")
            function u(e, t) {
              return ((e.msg = l[t]), t)
            }
            function d(e) {
              return (e << 1) - 9 * (4 < e)
            }
            function c(e) {
              for (var t = e.length; 0 <= --t;) e[t] = 0
            }
            function h(e) {
              var t = e.state,
                i = t.pending
              ;(i > e.avail_out && (i = e.avail_out),
                0 !== i &&
                  (n.arraySet(e.output, t.pending_buf, t.pending_out, i, e.next_out),
                  (e.next_out += i),
                  (t.pending_out += i),
                  (e.total_out += i),
                  (e.avail_out -= i),
                  (t.pending -= i),
                  0 === t.pending && (t.pending_out = 0)))
            }
            function f(e, t) {
              ;(s._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t),
                (e.block_start = e.strstart),
                h(e.strm))
            }
            function p(e, t) {
              e.pending_buf[e.pending++] = t
            }
            function m(e, t) {
              ;((e.pending_buf[e.pending++] = (t >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & t))
            }
            function g(e, t) {
              var i,
                r,
                n = e.max_chain_length,
                s = e.strstart,
                a = e.prev_length,
                o = e.nice_match,
                l = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0,
                u = e.window,
                d = e.w_mask,
                c = e.prev,
                h = e.strstart + 258,
                f = u[s + a - 1],
                p = u[s + a]
              ;(e.prev_length >= e.good_match && (n >>= 2), o > e.lookahead && (o = e.lookahead))
              do
                if (u[(i = t) + a] === p && u[i + a - 1] === f && u[i] === u[s] && u[++i] === u[s + 1]) {
                  ;((s += 2), i++)
                  do;
                  while (
                    u[++s] === u[++i] &&
                    u[++s] === u[++i] &&
                    u[++s] === u[++i] &&
                    u[++s] === u[++i] &&
                    u[++s] === u[++i] &&
                    u[++s] === u[++i] &&
                    u[++s] === u[++i] &&
                    u[++s] === u[++i] &&
                    s < h
                  )
                  if (((r = 258 - (h - s)), (s = h - 258), a < r)) {
                    if (((e.match_start = t), o <= (a = r))) break
                    ;((f = u[s + a - 1]), (p = u[s + a]))
                  }
                }
              while ((t = c[t & d]) > l && 0 != --n)
              return a <= e.lookahead ? a : e.lookahead
            }
            function b(e) {
              var t,
                i,
                r,
                s,
                l,
                u,
                d,
                c,
                h,
                f,
                p = e.w_size
              do {
                if (((s = e.window_size - e.lookahead - e.strstart), e.strstart >= p + (p - 262))) {
                  for (
                    n.arraySet(e.window, e.window, p, p, 0),
                      e.match_start -= p,
                      e.strstart -= p,
                      e.block_start -= p,
                      t = i = e.hash_size;
                    (r = e.head[--t]), (e.head[t] = p <= r ? r - p : 0), --i;
                  );
                  for (t = i = p; (r = e.prev[--t]), (e.prev[t] = p <= r ? r - p : 0), --i;);
                  s += p
                }
                if (0 === e.strm.avail_in) break
                if (
                  ((u = e.strm),
                  (d = e.window),
                  (c = e.strstart + e.lookahead),
                  (f = void 0),
                  (h = s) < (f = u.avail_in) && (f = h),
                  (i =
                    0 === f
                      ? 0
                      : ((u.avail_in -= f),
                        n.arraySet(d, u.input, u.next_in, f, c),
                        1 === u.state.wrap
                          ? (u.adler = a(u.adler, d, f, c))
                          : 2 === u.state.wrap && (u.adler = o(u.adler, d, f, c)),
                        (u.next_in += f),
                        (u.total_in += f),
                        f)),
                  (e.lookahead += i),
                  e.lookahead + e.insert >= 3)
                )
                  for (
                    l = e.strstart - e.insert,
                      e.ins_h = e.window[l],
                      e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[l + 1]) & e.hash_mask;
                    e.insert &&
                    ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[l + 3 - 1]) & e.hash_mask),
                    (e.prev[l & e.w_mask] = e.head[e.ins_h]),
                    (e.head[e.ins_h] = l),
                    l++,
                    e.insert--,
                    !(e.lookahead + e.insert < 3));
                  );
              } while (e.lookahead < 262 && 0 !== e.strm.avail_in)
            }
            function _(e, t) {
              for (var i, r; ;) {
                if (e.lookahead < 262) {
                  if ((b(e), e.lookahead < 262 && 0 === t)) return 1
                  if (0 === e.lookahead) break
                }
                if (
                  ((i = 0),
                  e.lookahead >= 3 &&
                    ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                    (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                    (e.head[e.ins_h] = e.strstart)),
                  0 !== i && e.strstart - i <= e.w_size - 262 && (e.match_length = g(e, i)),
                  e.match_length >= 3)
                )
                  if (
                    ((r = s._tr_tally(e, e.strstart - e.match_start, e.match_length - 3)),
                    (e.lookahead -= e.match_length),
                    e.match_length <= e.max_lazy_match && e.lookahead >= 3)
                  ) {
                    for (
                      e.match_length--;
                      e.strstart++,
                        (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                        (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart),
                        0 != --e.match_length;
                    );
                    e.strstart++
                  } else
                    ((e.strstart += e.match_length),
                      (e.match_length = 0),
                      (e.ins_h = e.window[e.strstart]),
                      (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask))
                else ((r = s._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++)
                if (r && (f(e, !1), 0 === e.strm.avail_out)) return 1
              }
              return (
                (e.insert = e.strstart < 2 ? e.strstart : 2),
                4 === t
                  ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                  : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
                    ? 1
                    : 2
              )
            }
            function y(e, t) {
              for (var i, r, n; ;) {
                if (e.lookahead < 262) {
                  if ((b(e), e.lookahead < 262 && 0 === t)) return 1
                  if (0 === e.lookahead) break
                }
                if (
                  ((i = 0),
                  e.lookahead >= 3 &&
                    ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                    (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                    (e.head[e.ins_h] = e.strstart)),
                  (e.prev_length = e.match_length),
                  (e.prev_match = e.match_start),
                  (e.match_length = 2),
                  0 !== i &&
                    e.prev_length < e.max_lazy_match &&
                    e.strstart - i <= e.w_size - 262 &&
                    ((e.match_length = g(e, i)),
                    e.match_length <= 5 &&
                      (1 === e.strategy || (3 === e.match_length && 4096 < e.strstart - e.match_start)) &&
                      (e.match_length = 2)),
                  e.prev_length >= 3 && e.match_length <= e.prev_length)
                ) {
                  for (
                    n = e.strstart + e.lookahead - 3,
                      r = s._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3),
                      e.lookahead -= e.prev_length - 1,
                      e.prev_length -= 2;
                    ++e.strstart <= n &&
                      ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                      (i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                      (e.head[e.ins_h] = e.strstart)),
                      0 != --e.prev_length;
                  );
                  if (
                    ((e.match_available = 0),
                    (e.match_length = 2),
                    e.strstart++,
                    r && (f(e, !1), 0 === e.strm.avail_out))
                  )
                    return 1
                } else if (e.match_available) {
                  if (
                    ((r = s._tr_tally(e, 0, e.window[e.strstart - 1])) && f(e, !1),
                    e.strstart++,
                    e.lookahead--,
                    0 === e.strm.avail_out)
                  )
                    return 1
                } else ((e.match_available = 1), e.strstart++, e.lookahead--)
              }
              return (
                e.match_available && ((r = s._tr_tally(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
                (e.insert = e.strstart < 2 ? e.strstart : 2),
                4 === t
                  ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                  : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
                    ? 1
                    : 2
              )
            }
            function v(e, t, i, r, n) {
              ;((this.good_length = e),
                (this.max_lazy = t),
                (this.nice_length = i),
                (this.max_chain = r),
                (this.func = n))
            }
            function x() {
              ;((this.strm = null),
                (this.status = 0),
                (this.pending_buf = null),
                (this.pending_buf_size = 0),
                (this.pending_out = 0),
                (this.pending = 0),
                (this.wrap = 0),
                (this.gzhead = null),
                (this.gzindex = 0),
                (this.method = 8),
                (this.last_flush = -1),
                (this.w_size = 0),
                (this.w_bits = 0),
                (this.w_mask = 0),
                (this.window = null),
                (this.window_size = 0),
                (this.prev = null),
                (this.head = null),
                (this.ins_h = 0),
                (this.hash_size = 0),
                (this.hash_bits = 0),
                (this.hash_mask = 0),
                (this.hash_shift = 0),
                (this.block_start = 0),
                (this.match_length = 0),
                (this.prev_match = 0),
                (this.match_available = 0),
                (this.strstart = 0),
                (this.match_start = 0),
                (this.lookahead = 0),
                (this.prev_length = 0),
                (this.max_chain_length = 0),
                (this.max_lazy_match = 0),
                (this.level = 0),
                (this.strategy = 0),
                (this.good_match = 0),
                (this.nice_match = 0),
                (this.dyn_ltree = new n.Buf16(1146)),
                (this.dyn_dtree = new n.Buf16(122)),
                (this.bl_tree = new n.Buf16(78)),
                c(this.dyn_ltree),
                c(this.dyn_dtree),
                c(this.bl_tree),
                (this.l_desc = null),
                (this.d_desc = null),
                (this.bl_desc = null),
                (this.bl_count = new n.Buf16(16)),
                (this.heap = new n.Buf16(573)),
                c(this.heap),
                (this.heap_len = 0),
                (this.heap_max = 0),
                (this.depth = new n.Buf16(573)),
                c(this.depth),
                (this.l_buf = 0),
                (this.lit_bufsize = 0),
                (this.last_lit = 0),
                (this.d_buf = 0),
                (this.opt_len = 0),
                (this.static_len = 0),
                (this.matches = 0),
                (this.insert = 0),
                (this.bi_buf = 0),
                (this.bi_valid = 0))
            }
            function w(e) {
              var t
              return e && e.state
                ? ((e.total_in = e.total_out = 0),
                  (e.data_type = 2),
                  ((t = e.state).pending = 0),
                  (t.pending_out = 0),
                  t.wrap < 0 && (t.wrap = -t.wrap),
                  (t.status = t.wrap ? 42 : 113),
                  (e.adler = +(2 !== t.wrap)),
                  (t.last_flush = 0),
                  s._tr_init(t),
                  0)
                : u(e, -2)
            }
            function k(e) {
              var t,
                i = w(e)
              return (
                0 === i &&
                  (((t = e.state).window_size = 2 * t.w_size),
                  c(t.head),
                  (t.max_lazy_match = r[t.level].max_lazy),
                  (t.good_match = r[t.level].good_length),
                  (t.nice_match = r[t.level].nice_length),
                  (t.max_chain_length = r[t.level].max_chain),
                  (t.strstart = 0),
                  (t.block_start = 0),
                  (t.lookahead = 0),
                  (t.insert = 0),
                  (t.match_length = t.prev_length = 2),
                  (t.match_available = 0),
                  (t.ins_h = 0)),
                i
              )
            }
            function C(e, t, i, r, s, a) {
              if (!e) return -2
              var o = 1
              if (
                (-1 === t && (t = 6),
                r < 0 ? ((o = 0), (r = -r)) : 15 < r && ((o = 2), (r -= 16)),
                s < 1 || 9 < s || 8 !== i || r < 8 || 15 < r || t < 0 || 9 < t || a < 0 || 4 < a)
              )
                return u(e, -2)
              8 === r && (r = 9)
              var l = new x()
              return (
                ((e.state = l).strm = e),
                (l.wrap = o),
                (l.gzhead = null),
                (l.w_bits = r),
                (l.w_size = 1 << l.w_bits),
                (l.w_mask = l.w_size - 1),
                (l.hash_bits = s + 7),
                (l.hash_size = 1 << l.hash_bits),
                (l.hash_mask = l.hash_size - 1),
                (l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3)),
                (l.window = new n.Buf8(2 * l.w_size)),
                (l.head = new n.Buf16(l.hash_size)),
                (l.prev = new n.Buf16(l.w_size)),
                (l.lit_bufsize = 1 << (s + 6)),
                (l.pending_buf_size = 4 * l.lit_bufsize),
                (l.pending_buf = new n.Buf8(l.pending_buf_size)),
                (l.d_buf = +l.lit_bufsize),
                (l.l_buf = 3 * l.lit_bufsize),
                (l.level = t),
                (l.strategy = a),
                (l.method = i),
                k(e)
              )
            }
            ;((r = [
              new v(0, 0, 0, 0, function (e, t) {
                var i = 65535
                for (65535 > e.pending_buf_size - 5 && (i = e.pending_buf_size - 5); ;) {
                  if (e.lookahead <= 1) {
                    if ((b(e), 0 === e.lookahead && 0 === t)) return 1
                    if (0 === e.lookahead) break
                  }
                  ;((e.strstart += e.lookahead), (e.lookahead = 0))
                  var r = e.block_start + i
                  if (
                    ((0 === e.strstart || e.strstart >= r) &&
                      ((e.lookahead = e.strstart - r), (e.strstart = r), f(e, !1), 0 === e.strm.avail_out)) ||
                    (e.strstart - e.block_start >= e.w_size - 262 && (f(e, !1), 0 === e.strm.avail_out))
                  )
                    return 1
                }
                return (
                  (e.insert = 0),
                  4 === t
                    ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                    : (e.strstart > e.block_start && (f(e, !1), e.strm.avail_out), 1)
                )
              }),
              new v(4, 4, 8, 4, _),
              new v(4, 5, 16, 8, _),
              new v(4, 6, 32, 32, _),
              new v(4, 4, 16, 16, y),
              new v(8, 16, 32, 32, y),
              new v(8, 16, 128, 128, y),
              new v(8, 32, 128, 256, y),
              new v(32, 128, 258, 1024, y),
              new v(32, 258, 258, 4096, y),
            ]),
              (i.deflateInit = function (e, t) {
                return C(e, t, 8, 15, 8, 0)
              }),
              (i.deflateInit2 = C),
              (i.deflateReset = k),
              (i.deflateResetKeep = w),
              (i.deflateSetHeader = function (e, t) {
                return e && e.state ? (2 !== e.state.wrap ? -2 : ((e.state.gzhead = t), 0)) : -2
              }),
              (i.deflate = function (e, t) {
                var i, n, a, l
                if (!e || !e.state || 5 < t || t < 0) return e ? u(e, -2) : -2
                if (((n = e.state), !e.output || (!e.input && 0 !== e.avail_in) || (666 === n.status && 4 !== t)))
                  return u(e, 0 === e.avail_out ? -5 : -2)
                if (((n.strm = e), (i = n.last_flush), (n.last_flush = t), 42 === n.status))
                  if (2 === n.wrap)
                    ((e.adler = 0),
                      p(n, 31),
                      p(n, 139),
                      p(n, 8),
                      n.gzhead
                        ? (p(
                            n,
                            +!!n.gzhead.text +
                              2 * !!n.gzhead.hcrc +
                              4 * !!n.gzhead.extra +
                              8 * !!n.gzhead.name +
                              16 * !!n.gzhead.comment,
                          ),
                          p(n, 255 & n.gzhead.time),
                          p(n, (n.gzhead.time >> 8) & 255),
                          p(n, (n.gzhead.time >> 16) & 255),
                          p(n, (n.gzhead.time >> 24) & 255),
                          p(n, 9 === n.level ? 2 : 4 * (2 <= n.strategy || n.level < 2)),
                          p(n, 255 & n.gzhead.os),
                          n.gzhead.extra &&
                            n.gzhead.extra.length &&
                            (p(n, 255 & n.gzhead.extra.length), p(n, (n.gzhead.extra.length >> 8) & 255)),
                          n.gzhead.hcrc && (e.adler = o(e.adler, n.pending_buf, n.pending, 0)),
                          (n.gzindex = 0),
                          (n.status = 69))
                        : (p(n, 0),
                          p(n, 0),
                          p(n, 0),
                          p(n, 0),
                          p(n, 0),
                          p(n, 9 === n.level ? 2 : 4 * (2 <= n.strategy || n.level < 2)),
                          p(n, 3),
                          (n.status = 113)))
                  else {
                    var g = (8 + ((n.w_bits - 8) << 4)) << 8
                    ;((g |= (2 <= n.strategy || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6),
                      0 !== n.strstart && (g |= 32),
                      (g += 31 - (g % 31)),
                      (n.status = 113),
                      m(n, g),
                      0 !== n.strstart && (m(n, e.adler >>> 16), m(n, 65535 & e.adler)),
                      (e.adler = 1))
                  }
                if (69 === n.status)
                  if (n.gzhead.extra) {
                    for (
                      a = n.pending;
                      n.gzindex < (65535 & n.gzhead.extra.length) &&
                      (n.pending !== n.pending_buf_size ||
                        (n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)),
                        h(e),
                        (a = n.pending),
                        n.pending !== n.pending_buf_size));
                    )
                      (p(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++)
                    ;(n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)),
                      n.gzindex === n.gzhead.extra.length && ((n.gzindex = 0), (n.status = 73)))
                  } else n.status = 73
                if (73 === n.status)
                  if (n.gzhead.name) {
                    a = n.pending
                    do {
                      if (
                        n.pending === n.pending_buf_size &&
                        (n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)),
                        h(e),
                        (a = n.pending),
                        n.pending === n.pending_buf_size)
                      ) {
                        l = 1
                        break
                      }
                      ;((l = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0),
                        p(n, l))
                    } while (0 !== l)
                    ;(n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)),
                      0 === l && ((n.gzindex = 0), (n.status = 91)))
                  } else n.status = 91
                if (91 === n.status)
                  if (n.gzhead.comment) {
                    a = n.pending
                    do {
                      if (
                        n.pending === n.pending_buf_size &&
                        (n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)),
                        h(e),
                        (a = n.pending),
                        n.pending === n.pending_buf_size)
                      ) {
                        l = 1
                        break
                      }
                      ;((l = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0),
                        p(n, l))
                    } while (0 !== l)
                    ;(n.gzhead.hcrc && n.pending > a && (e.adler = o(e.adler, n.pending_buf, n.pending - a, a)),
                      0 === l && (n.status = 103))
                  } else n.status = 103
                if (
                  (103 === n.status &&
                    (n.gzhead.hcrc
                      ? (n.pending + 2 > n.pending_buf_size && h(e),
                        n.pending + 2 <= n.pending_buf_size &&
                          (p(n, 255 & e.adler), p(n, (e.adler >> 8) & 255), (e.adler = 0), (n.status = 113)))
                      : (n.status = 113)),
                  0 !== n.pending)
                ) {
                  if ((h(e), 0 === e.avail_out)) return ((n.last_flush = -1), 0)
                } else if (0 === e.avail_in && d(t) <= d(i) && 4 !== t) return u(e, -5)
                if (666 === n.status && 0 !== e.avail_in) return u(e, -5)
                if (0 !== e.avail_in || 0 !== n.lookahead || (0 !== t && 666 !== n.status)) {
                  var _ =
                    2 === n.strategy
                      ? (function (e, t) {
                          for (var i; ;) {
                            if (0 === e.lookahead && (b(e), 0 === e.lookahead)) {
                              if (0 === t) return 1
                              break
                            }
                            if (
                              ((e.match_length = 0),
                              (i = s._tr_tally(e, 0, e.window[e.strstart])),
                              e.lookahead--,
                              e.strstart++,
                              i && (f(e, !1), 0 === e.strm.avail_out))
                            )
                              return 1
                          }
                          return (
                            (e.insert = 0),
                            4 === t
                              ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                              : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
                                ? 1
                                : 2
                          )
                        })(n, t)
                      : 3 === n.strategy
                        ? (function (e, t) {
                            for (var i, r, n, a, o = e.window; ;) {
                              if (e.lookahead <= 258) {
                                if ((b(e), e.lookahead <= 258 && 0 === t)) return 1
                                if (0 === e.lookahead) break
                              }
                              if (
                                ((e.match_length = 0),
                                e.lookahead >= 3 &&
                                  0 < e.strstart &&
                                  (r = o[(n = e.strstart - 1)]) === o[++n] &&
                                  r === o[++n] &&
                                  r === o[++n])
                              ) {
                                a = e.strstart + 258
                                do;
                                while (
                                  r === o[++n] &&
                                  r === o[++n] &&
                                  r === o[++n] &&
                                  r === o[++n] &&
                                  r === o[++n] &&
                                  r === o[++n] &&
                                  r === o[++n] &&
                                  r === o[++n] &&
                                  n < a
                                )
                                ;((e.match_length = 258 - (a - n)),
                                  e.match_length > e.lookahead && (e.match_length = e.lookahead))
                              }
                              if (
                                (e.match_length >= 3
                                  ? ((i = s._tr_tally(e, 1, e.match_length - 3)),
                                    (e.lookahead -= e.match_length),
                                    (e.strstart += e.match_length),
                                    (e.match_length = 0))
                                  : ((i = s._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++),
                                i && (f(e, !1), 0 === e.strm.avail_out))
                              )
                                return 1
                            }
                            return (
                              (e.insert = 0),
                              4 === t
                                ? (f(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                                : e.last_lit && (f(e, !1), 0 === e.strm.avail_out)
                                  ? 1
                                  : 2
                            )
                          })(n, t)
                        : r[n.level].func(n, t)
                  if (((3 !== _ && 4 !== _) || (n.status = 666), 1 === _ || 3 === _))
                    return (0 === e.avail_out && (n.last_flush = -1), 0)
                  if (
                    2 === _ &&
                    (1 === t
                      ? s._tr_align(n)
                      : 5 !== t &&
                        (s._tr_stored_block(n, 0, 0, !1),
                        3 === t &&
                          (c(n.head), 0 === n.lookahead && ((n.strstart = 0), (n.block_start = 0), (n.insert = 0)))),
                    h(e),
                    0 === e.avail_out)
                  )
                    return ((n.last_flush = -1), 0)
                }
                return 4 !== t
                  ? 0
                  : n.wrap <= 0
                    ? 1
                    : (2 === n.wrap
                        ? (p(n, 255 & e.adler),
                          p(n, (e.adler >> 8) & 255),
                          p(n, (e.adler >> 16) & 255),
                          p(n, (e.adler >> 24) & 255),
                          p(n, 255 & e.total_in),
                          p(n, (e.total_in >> 8) & 255),
                          p(n, (e.total_in >> 16) & 255),
                          p(n, (e.total_in >> 24) & 255))
                        : (m(n, e.adler >>> 16), m(n, 65535 & e.adler)),
                      h(e),
                      0 < n.wrap && (n.wrap = -n.wrap),
                      +(0 === n.pending))
              }),
              (i.deflateEnd = function (e) {
                var t
                return e && e.state
                  ? 42 !== (t = e.state.status) &&
                    69 !== t &&
                    73 !== t &&
                    91 !== t &&
                    103 !== t &&
                    113 !== t &&
                    666 !== t
                    ? u(e, -2)
                    : ((e.state = null), 113 === t ? u(e, -3) : 0)
                  : -2
              }),
              (i.deflateSetDictionary = function (e, t) {
                var i,
                  r,
                  s,
                  o,
                  l,
                  u,
                  d,
                  h,
                  f = t.length
                if (!e || !e.state || 2 === (o = (i = e.state).wrap) || (1 === o && 42 !== i.status) || i.lookahead)
                  return -2
                for (
                  1 === o && (e.adler = a(e.adler, t, f, 0)),
                    i.wrap = 0,
                    f >= i.w_size &&
                      (0 === o && (c(i.head), (i.strstart = 0), (i.block_start = 0), (i.insert = 0)),
                      (h = new n.Buf8(i.w_size)),
                      n.arraySet(h, t, f - i.w_size, i.w_size, 0),
                      (t = h),
                      (f = i.w_size)),
                    l = e.avail_in,
                    u = e.next_in,
                    d = e.input,
                    e.avail_in = f,
                    e.next_in = 0,
                    e.input = t,
                    b(i);
                  i.lookahead >= 3;
                ) {
                  for (
                    r = i.strstart, s = i.lookahead - 2;
                    (i.ins_h = ((i.ins_h << i.hash_shift) ^ i.window[r + 3 - 1]) & i.hash_mask),
                      (i.prev[r & i.w_mask] = i.head[i.ins_h]),
                      (i.head[i.ins_h] = r),
                      r++,
                      --s;
                  );
                  ;((i.strstart = r), (i.lookahead = 2), b(i))
                }
                return (
                  (i.strstart += i.lookahead),
                  (i.block_start = i.strstart),
                  (i.insert = i.lookahead),
                  (i.lookahead = 0),
                  (i.match_length = i.prev_length = 2),
                  (i.match_available = 0),
                  (e.next_in = u),
                  (e.input = d),
                  (e.avail_in = l),
                  (i.wrap = o),
                  0
                )
              }),
              (i.deflateInfo = "pako deflate (from Nodeca project)"))
          },
          { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 },
        ],
        47: [
          function (e, t, i) {
            "use strict"
            t.exports = function () {
              ;((this.text = 0),
                (this.time = 0),
                (this.xflags = 0),
                (this.os = 0),
                (this.extra = null),
                (this.extra_len = 0),
                (this.name = ""),
                (this.comment = ""),
                (this.hcrc = 0),
                (this.done = !1))
            }
          },
          {},
        ],
        48: [
          function (e, t, i) {
            "use strict"
            t.exports = function (e, t) {
              var i, r, n, s, a, o, l, u, d, c, h, f, p, m, g, b, _, y, v, x, w, k, C, S, j
              ;((i = e.state),
                (r = e.next_in),
                (S = e.input),
                (n = r + (e.avail_in - 5)),
                (s = e.next_out),
                (j = e.output),
                (a = s - (t - e.avail_out)),
                (o = s + (e.avail_out - 257)),
                (l = i.dmax),
                (u = i.wsize),
                (d = i.whave),
                (c = i.wnext),
                (h = i.window),
                (f = i.hold),
                (p = i.bits),
                (m = i.lencode),
                (g = i.distcode),
                (b = (1 << i.lenbits) - 1),
                (_ = (1 << i.distbits) - 1))
              e: do
                for (p < 15 && ((f += S[r++] << p), (p += 8), (f += S[r++] << p), (p += 8)), y = m[f & b]; ;) {
                  if (((f >>>= v = y >>> 24), (p -= v), 0 == (v = (y >>> 16) & 255))) j[s++] = 65535 & y
                  else {
                    if (!(16 & v)) {
                      if (0 == (64 & v)) {
                        y = m[(65535 & y) + (f & ((1 << v) - 1))]
                        continue
                      }
                      if (32 & v) {
                        i.mode = 12
                        break e
                      }
                      ;((e.msg = "invalid literal/length code"), (i.mode = 30))
                      break e
                    }
                    for (
                      x = 65535 & y,
                        (v &= 15) &&
                          (p < v && ((f += S[r++] << p), (p += 8)), (x += f & ((1 << v) - 1)), (f >>>= v), (p -= v)),
                        p < 15 && ((f += S[r++] << p), (p += 8), (f += S[r++] << p), (p += 8)),
                        y = g[f & _];
                      ;
                    ) {
                      if (((f >>>= v = y >>> 24), (p -= v), !(16 & (v = (y >>> 16) & 255)))) {
                        if (0 == (64 & v)) {
                          y = g[(65535 & y) + (f & ((1 << v) - 1))]
                          continue
                        }
                        ;((e.msg = "invalid distance code"), (i.mode = 30))
                        break e
                      }
                      if (
                        ((w = 65535 & y),
                        p < (v &= 15) && ((f += S[r++] << p), (p += 8) < v && ((f += S[r++] << p), (p += 8))),
                        l < (w += f & ((1 << v) - 1)))
                      ) {
                        ;((e.msg = "invalid distance too far back"), (i.mode = 30))
                        break e
                      }
                      if (((f >>>= v), (p -= v), (v = s - a) < w)) {
                        if (d < (v = w - v) && i.sane) {
                          ;((e.msg = "invalid distance too far back"), (i.mode = 30))
                          break e
                        }
                        if (((C = h), (k = 0) === c)) {
                          if (((k += u - v), v < x)) {
                            for (x -= v; (j[s++] = h[k++]), --v;);
                            ;((k = s - w), (C = j))
                          }
                        } else if (c < v) {
                          if (((k += u + c - v), (v -= c) < x)) {
                            for (x -= v; (j[s++] = h[k++]), --v;);
                            if (((k = 0), c < x)) {
                              for (x -= v = c; (j[s++] = h[k++]), --v;);
                              ;((k = s - w), (C = j))
                            }
                          }
                        } else if (((k += c - v), v < x)) {
                          for (x -= v; (j[s++] = h[k++]), --v;);
                          ;((k = s - w), (C = j))
                        }
                        for (; 2 < x;) ((j[s++] = C[k++]), (j[s++] = C[k++]), (j[s++] = C[k++]), (x -= 3))
                        x && ((j[s++] = C[k++]), 1 < x && (j[s++] = C[k++]))
                      } else {
                        for (k = s - w; (j[s++] = j[k++]), (j[s++] = j[k++]), (j[s++] = j[k++]), 2 < (x -= 3););
                        x && ((j[s++] = j[k++]), 1 < x && (j[s++] = j[k++]))
                      }
                      break
                    }
                  }
                  break
                }
              while (r < n && s < o)
              ;((r -= x = p >> 3),
                (f &= (1 << (p -= x << 3)) - 1),
                (e.next_in = r),
                (e.next_out = s),
                (e.avail_in = r < n ? n - r + 5 : 5 - (r - n)),
                (e.avail_out = s < o ? o - s + 257 : 257 - (s - o)),
                (i.hold = f),
                (i.bits = p))
            }
          },
          {},
        ],
        49: [
          function (e, t, i) {
            "use strict"
            var r = e("../utils/common"),
              n = e("./adler32"),
              s = e("./crc32"),
              a = e("./inffast"),
              o = e("./inftrees")
            function l(e) {
              return ((e >>> 24) & 255) + ((e >>> 8) & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
            }
            function u() {
              ;((this.mode = 0),
                (this.last = !1),
                (this.wrap = 0),
                (this.havedict = !1),
                (this.flags = 0),
                (this.dmax = 0),
                (this.check = 0),
                (this.total = 0),
                (this.head = null),
                (this.wbits = 0),
                (this.wsize = 0),
                (this.whave = 0),
                (this.wnext = 0),
                (this.window = null),
                (this.hold = 0),
                (this.bits = 0),
                (this.length = 0),
                (this.offset = 0),
                (this.extra = 0),
                (this.lencode = null),
                (this.distcode = null),
                (this.lenbits = 0),
                (this.distbits = 0),
                (this.ncode = 0),
                (this.nlen = 0),
                (this.ndist = 0),
                (this.have = 0),
                (this.next = null),
                (this.lens = new r.Buf16(320)),
                (this.work = new r.Buf16(288)),
                (this.lendyn = null),
                (this.distdyn = null),
                (this.sane = 0),
                (this.back = 0),
                (this.was = 0))
            }
            function d(e) {
              var t
              return e && e.state
                ? ((t = e.state),
                  (e.total_in = e.total_out = t.total = 0),
                  (e.msg = ""),
                  t.wrap && (e.adler = 1 & t.wrap),
                  (t.mode = 1),
                  (t.last = 0),
                  (t.havedict = 0),
                  (t.dmax = 32768),
                  (t.head = null),
                  (t.hold = 0),
                  (t.bits = 0),
                  (t.lencode = t.lendyn = new r.Buf32(852)),
                  (t.distcode = t.distdyn = new r.Buf32(592)),
                  (t.sane = 1),
                  (t.back = -1),
                  0)
                : -2
            }
            function c(e) {
              var t
              return e && e.state ? (((t = e.state).wsize = 0), (t.whave = 0), (t.wnext = 0), d(e)) : -2
            }
            function h(e, t) {
              var i, r
              return e && e.state
                ? ((r = e.state),
                  t < 0 ? ((i = 0), (t = -t)) : ((i = 1 + (t >> 4)), t < 48 && (t &= 15)),
                  t && (t < 8 || 15 < t)
                    ? -2
                    : (null !== r.window && r.wbits !== t && (r.window = null), (r.wrap = i), (r.wbits = t), c(e)))
                : -2
            }
            function f(e, t) {
              var i
              return e ? (((e.state = new u()).window = null), 0 !== (i = h(e, t)) && (e.state = null), i) : -2
            }
            var p,
              m,
              g = !0
            function b(e, t, i, n) {
              var s,
                a = e.state
              return (
                null === a.window &&
                  ((a.wsize = 1 << a.wbits), (a.wnext = 0), (a.whave = 0), (a.window = new r.Buf8(a.wsize))),
                n >= a.wsize
                  ? (r.arraySet(a.window, t, i - a.wsize, a.wsize, 0), (a.wnext = 0), (a.whave = a.wsize))
                  : (n < (s = a.wsize - a.wnext) && (s = n),
                    r.arraySet(a.window, t, i - n, s, a.wnext),
                    (n -= s)
                      ? (r.arraySet(a.window, t, i - n, n, 0), (a.wnext = n), (a.whave = a.wsize))
                      : ((a.wnext += s), a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s))),
                0
              )
            }
            ;((i.inflateReset = c),
              (i.inflateReset2 = h),
              (i.inflateResetKeep = d),
              (i.inflateInit = function (e) {
                return f(e, 15)
              }),
              (i.inflateInit2 = f),
              (i.inflate = function (e, t) {
                var i,
                  u,
                  d,
                  c,
                  h,
                  f,
                  _,
                  y,
                  v,
                  x,
                  w,
                  k,
                  C,
                  S,
                  j,
                  A,
                  E,
                  z,
                  I,
                  N,
                  F,
                  T,
                  D,
                  O,
                  P = 0,
                  B = new r.Buf8(4),
                  M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
                if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in)) return -2
                ;(12 === (i = e.state).mode && (i.mode = 13),
                  (h = e.next_out),
                  (d = e.output),
                  (_ = e.avail_out),
                  (c = e.next_in),
                  (u = e.input),
                  (f = e.avail_in),
                  (y = i.hold),
                  (v = i.bits),
                  (x = f),
                  (w = _),
                  (T = 0))
                e: for (;;)
                  switch (i.mode) {
                    case 1:
                      if (0 === i.wrap) {
                        i.mode = 13
                        break
                      }
                      for (; v < 16;) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      if (2 & i.wrap && 35615 === y) {
                        ;((B[(i.check = 0)] = 255 & y),
                          (B[1] = (y >>> 8) & 255),
                          (i.check = s(i.check, B, 2, 0)),
                          (v = y = 0),
                          (i.mode = 2))
                        break
                      }
                      if (
                        ((i.flags = 0),
                        i.head && (i.head.done = !1),
                        !(1 & i.wrap) || (((255 & y) << 8) + (y >> 8)) % 31)
                      ) {
                        ;((e.msg = "incorrect header check"), (i.mode = 30))
                        break
                      }
                      if (8 != (15 & y)) {
                        ;((e.msg = "unknown compression method"), (i.mode = 30))
                        break
                      }
                      if (((v -= 4), (F = 8 + (15 & (y >>>= 4))), 0 === i.wbits)) i.wbits = F
                      else if (F > i.wbits) {
                        ;((e.msg = "invalid window size"), (i.mode = 30))
                        break
                      }
                      ;((i.dmax = 1 << F), (e.adler = i.check = 1), (i.mode = 512 & y ? 10 : 12), (v = y = 0))
                      break
                    case 2:
                      for (; v < 16;) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      if (((i.flags = y), 8 != (255 & i.flags))) {
                        ;((e.msg = "unknown compression method"), (i.mode = 30))
                        break
                      }
                      if (57344 & i.flags) {
                        ;((e.msg = "unknown header flags set"), (i.mode = 30))
                        break
                      }
                      ;(i.head && (i.head.text = (y >> 8) & 1),
                        512 & i.flags && ((B[0] = 255 & y), (B[1] = (y >>> 8) & 255), (i.check = s(i.check, B, 2, 0))),
                        (v = y = 0),
                        (i.mode = 3))
                    case 3:
                      for (; v < 32;) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      ;(i.head && (i.head.time = y),
                        512 & i.flags &&
                          ((B[0] = 255 & y),
                          (B[1] = (y >>> 8) & 255),
                          (B[2] = (y >>> 16) & 255),
                          (B[3] = (y >>> 24) & 255),
                          (i.check = s(i.check, B, 4, 0))),
                        (v = y = 0),
                        (i.mode = 4))
                    case 4:
                      for (; v < 16;) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      ;(i.head && ((i.head.xflags = 255 & y), (i.head.os = y >> 8)),
                        512 & i.flags && ((B[0] = 255 & y), (B[1] = (y >>> 8) & 255), (i.check = s(i.check, B, 2, 0))),
                        (v = y = 0),
                        (i.mode = 5))
                    case 5:
                      if (1024 & i.flags) {
                        for (; v < 16;) {
                          if (0 === f) break e
                          ;(f--, (y += u[c++] << v), (v += 8))
                        }
                        ;((i.length = y),
                          i.head && (i.head.extra_len = y),
                          512 & i.flags &&
                            ((B[0] = 255 & y), (B[1] = (y >>> 8) & 255), (i.check = s(i.check, B, 2, 0))),
                          (v = y = 0))
                      } else i.head && (i.head.extra = null)
                      i.mode = 6
                    case 6:
                      if (
                        1024 & i.flags &&
                        (f < (k = i.length) && (k = f),
                        k &&
                          (i.head &&
                            ((F = i.head.extra_len - i.length),
                            i.head.extra || (i.head.extra = Array(i.head.extra_len)),
                            r.arraySet(i.head.extra, u, c, k, F)),
                          512 & i.flags && (i.check = s(i.check, u, k, c)),
                          (f -= k),
                          (c += k),
                          (i.length -= k)),
                        i.length)
                      )
                        break e
                      ;((i.length = 0), (i.mode = 7))
                    case 7:
                      if (2048 & i.flags) {
                        if (0 === f) break e
                        for (
                          k = 0;
                          (F = u[c + k++]),
                            i.head && F && i.length < 65536 && (i.head.name += String.fromCharCode(F)),
                            F && k < f;
                        );
                        if ((512 & i.flags && (i.check = s(i.check, u, k, c)), (f -= k), (c += k), F)) break e
                      } else i.head && (i.head.name = null)
                      ;((i.length = 0), (i.mode = 8))
                    case 8:
                      if (4096 & i.flags) {
                        if (0 === f) break e
                        for (
                          k = 0;
                          (F = u[c + k++]),
                            i.head && F && i.length < 65536 && (i.head.comment += String.fromCharCode(F)),
                            F && k < f;
                        );
                        if ((512 & i.flags && (i.check = s(i.check, u, k, c)), (f -= k), (c += k), F)) break e
                      } else i.head && (i.head.comment = null)
                      i.mode = 9
                    case 9:
                      if (512 & i.flags) {
                        for (; v < 16;) {
                          if (0 === f) break e
                          ;(f--, (y += u[c++] << v), (v += 8))
                        }
                        if (y !== (65535 & i.check)) {
                          ;((e.msg = "header crc mismatch"), (i.mode = 30))
                          break
                        }
                        v = y = 0
                      }
                      ;(i.head && ((i.head.hcrc = (i.flags >> 9) & 1), (i.head.done = !0)),
                        (e.adler = i.check = 0),
                        (i.mode = 12))
                      break
                    case 10:
                      for (; v < 32;) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      ;((e.adler = i.check = l(y)), (v = y = 0), (i.mode = 11))
                    case 11:
                      if (0 === i.havedict)
                        return (
                          (e.next_out = h),
                          (e.avail_out = _),
                          (e.next_in = c),
                          (e.avail_in = f),
                          (i.hold = y),
                          (i.bits = v),
                          2
                        )
                      ;((e.adler = i.check = 1), (i.mode = 12))
                    case 12:
                      if (5 === t || 6 === t) break e
                    case 13:
                      if (i.last) {
                        ;((y >>>= 7 & v), (v -= 7 & v), (i.mode = 27))
                        break
                      }
                      for (; v < 3;) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      switch (((i.last = 1 & y), (v -= 1), 3 & (y >>>= 1))) {
                        case 0:
                          i.mode = 14
                          break
                        case 1:
                          if (
                            ((function (e) {
                              if (g) {
                                var t
                                for (p = new r.Buf32(512), m = new r.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8
                                for (; t < 256;) e.lens[t++] = 9
                                for (; t < 280;) e.lens[t++] = 7
                                for (; t < 288;) e.lens[t++] = 8
                                for (o(1, e.lens, 0, 288, p, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5
                                ;(o(2, e.lens, 0, 32, m, 0, e.work, { bits: 5 }), (g = !1))
                              }
                              ;((e.lencode = p), (e.lenbits = 9), (e.distcode = m), (e.distbits = 5))
                            })(i),
                            (i.mode = 20),
                            6 !== t)
                          )
                            break
                          ;((y >>>= 2), (v -= 2))
                          break e
                        case 2:
                          i.mode = 17
                          break
                        case 3:
                          ;((e.msg = "invalid block type"), (i.mode = 30))
                      }
                      ;((y >>>= 2), (v -= 2))
                      break
                    case 14:
                      for (y >>>= 7 & v, v -= 7 & v; v < 32;) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      if ((65535 & y) != ((y >>> 16) ^ 65535)) {
                        ;((e.msg = "invalid stored block lengths"), (i.mode = 30))
                        break
                      }
                      if (((i.length = 65535 & y), (v = y = 0), (i.mode = 15), 6 === t)) break e
                    case 15:
                      i.mode = 16
                    case 16:
                      if ((k = i.length)) {
                        if ((f < k && (k = f), _ < k && (k = _), 0 === k)) break e
                        ;(r.arraySet(d, u, c, k, h), (f -= k), (c += k), (_ -= k), (h += k), (i.length -= k))
                        break
                      }
                      i.mode = 12
                      break
                    case 17:
                      for (; v < 14;) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      if (
                        ((i.nlen = 257 + (31 & y)),
                        (v -= 5),
                        (i.ndist = 1 + (31 & (y >>>= 5))),
                        (v -= 5),
                        (i.ncode = 4 + (15 & (y >>>= 5))),
                        (y >>>= 4),
                        (v -= 4),
                        286 < i.nlen || 30 < i.ndist)
                      ) {
                        ;((e.msg = "too many length or distance symbols"), (i.mode = 30))
                        break
                      }
                      ;((i.have = 0), (i.mode = 18))
                    case 18:
                      for (; i.have < i.ncode;) {
                        for (; v < 3;) {
                          if (0 === f) break e
                          ;(f--, (y += u[c++] << v), (v += 8))
                        }
                        ;((i.lens[M[i.have++]] = 7 & y), (y >>>= 3), (v -= 3))
                      }
                      for (; i.have < 19;) i.lens[M[i.have++]] = 0
                      if (
                        ((i.lencode = i.lendyn),
                        (i.lenbits = 7),
                        (D = { bits: i.lenbits }),
                        (T = o(0, i.lens, 0, 19, i.lencode, 0, i.work, D)),
                        (i.lenbits = D.bits),
                        T)
                      ) {
                        ;((e.msg = "invalid code lengths set"), (i.mode = 30))
                        break
                      }
                      ;((i.have = 0), (i.mode = 19))
                    case 19:
                      for (; i.have < i.nlen + i.ndist;) {
                        for (
                          ;
                          (A = ((P = i.lencode[y & ((1 << i.lenbits) - 1)]) >>> 16) & 255),
                            (E = 65535 & P),
                            !((j = P >>> 24) <= v);
                        ) {
                          if (0 === f) break e
                          ;(f--, (y += u[c++] << v), (v += 8))
                        }
                        if (E < 16) ((y >>>= j), (v -= j), (i.lens[i.have++] = E))
                        else {
                          if (16 === E) {
                            for (O = j + 2; v < O;) {
                              if (0 === f) break e
                              ;(f--, (y += u[c++] << v), (v += 8))
                            }
                            if (((y >>>= j), (v -= j), 0 === i.have)) {
                              ;((e.msg = "invalid bit length repeat"), (i.mode = 30))
                              break
                            }
                            ;((F = i.lens[i.have - 1]), (k = 3 + (3 & y)), (y >>>= 2), (v -= 2))
                          } else if (17 === E) {
                            for (O = j + 3; v < O;) {
                              if (0 === f) break e
                              ;(f--, (y += u[c++] << v), (v += 8))
                            }
                            ;((v -= j), (F = 0), (k = 3 + (7 & (y >>>= j))), (y >>>= 3), (v -= 3))
                          } else {
                            for (O = j + 7; v < O;) {
                              if (0 === f) break e
                              ;(f--, (y += u[c++] << v), (v += 8))
                            }
                            ;((v -= j), (F = 0), (k = 11 + (127 & (y >>>= j))), (y >>>= 7), (v -= 7))
                          }
                          if (i.have + k > i.nlen + i.ndist) {
                            ;((e.msg = "invalid bit length repeat"), (i.mode = 30))
                            break
                          }
                          for (; k--;) i.lens[i.have++] = F
                        }
                      }
                      if (30 === i.mode) break
                      if (0 === i.lens[256]) {
                        ;((e.msg = "invalid code -- missing end-of-block"), (i.mode = 30))
                        break
                      }
                      if (
                        ((i.lenbits = 9),
                        (D = { bits: i.lenbits }),
                        (T = o(1, i.lens, 0, i.nlen, i.lencode, 0, i.work, D)),
                        (i.lenbits = D.bits),
                        T)
                      ) {
                        ;((e.msg = "invalid literal/lengths set"), (i.mode = 30))
                        break
                      }
                      if (
                        ((i.distbits = 6),
                        (i.distcode = i.distdyn),
                        (D = { bits: i.distbits }),
                        (T = o(2, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, D)),
                        (i.distbits = D.bits),
                        T)
                      ) {
                        ;((e.msg = "invalid distances set"), (i.mode = 30))
                        break
                      }
                      if (((i.mode = 20), 6 === t)) break e
                    case 20:
                      i.mode = 21
                    case 21:
                      if (6 <= f && 258 <= _) {
                        ;((e.next_out = h),
                          (e.avail_out = _),
                          (e.next_in = c),
                          (e.avail_in = f),
                          (i.hold = y),
                          (i.bits = v),
                          a(e, w),
                          (h = e.next_out),
                          (d = e.output),
                          (_ = e.avail_out),
                          (c = e.next_in),
                          (u = e.input),
                          (f = e.avail_in),
                          (y = i.hold),
                          (v = i.bits),
                          12 === i.mode && (i.back = -1))
                        break
                      }
                      for (
                        i.back = 0;
                        (A = ((P = i.lencode[y & ((1 << i.lenbits) - 1)]) >>> 16) & 255),
                          (E = 65535 & P),
                          !((j = P >>> 24) <= v);
                      ) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      if (A && 0 == (240 & A)) {
                        for (
                          z = j, I = A, N = E;
                          (A = ((P = i.lencode[N + ((y & ((1 << (z + I)) - 1)) >> z)]) >>> 16) & 255),
                            (E = 65535 & P),
                            !(z + (j = P >>> 24) <= v);
                        ) {
                          if (0 === f) break e
                          ;(f--, (y += u[c++] << v), (v += 8))
                        }
                        ;((y >>>= z), (v -= z), (i.back += z))
                      }
                      if (((y >>>= j), (v -= j), (i.back += j), (i.length = E), 0 === A)) {
                        i.mode = 26
                        break
                      }
                      if (32 & A) {
                        ;((i.back = -1), (i.mode = 12))
                        break
                      }
                      if (64 & A) {
                        ;((e.msg = "invalid literal/length code"), (i.mode = 30))
                        break
                      }
                      ;((i.extra = 15 & A), (i.mode = 22))
                    case 22:
                      if (i.extra) {
                        for (O = i.extra; v < O;) {
                          if (0 === f) break e
                          ;(f--, (y += u[c++] << v), (v += 8))
                        }
                        ;((i.length += y & ((1 << i.extra) - 1)), (y >>>= i.extra), (v -= i.extra), (i.back += i.extra))
                      }
                      ;((i.was = i.length), (i.mode = 23))
                    case 23:
                      for (
                        ;
                        (A = ((P = i.distcode[y & ((1 << i.distbits) - 1)]) >>> 16) & 255),
                          (E = 65535 & P),
                          !((j = P >>> 24) <= v);
                      ) {
                        if (0 === f) break e
                        ;(f--, (y += u[c++] << v), (v += 8))
                      }
                      if (0 == (240 & A)) {
                        for (
                          z = j, I = A, N = E;
                          (A = ((P = i.distcode[N + ((y & ((1 << (z + I)) - 1)) >> z)]) >>> 16) & 255),
                            (E = 65535 & P),
                            !(z + (j = P >>> 24) <= v);
                        ) {
                          if (0 === f) break e
                          ;(f--, (y += u[c++] << v), (v += 8))
                        }
                        ;((y >>>= z), (v -= z), (i.back += z))
                      }
                      if (((y >>>= j), (v -= j), (i.back += j), 64 & A)) {
                        ;((e.msg = "invalid distance code"), (i.mode = 30))
                        break
                      }
                      ;((i.offset = E), (i.extra = 15 & A), (i.mode = 24))
                    case 24:
                      if (i.extra) {
                        for (O = i.extra; v < O;) {
                          if (0 === f) break e
                          ;(f--, (y += u[c++] << v), (v += 8))
                        }
                        ;((i.offset += y & ((1 << i.extra) - 1)), (y >>>= i.extra), (v -= i.extra), (i.back += i.extra))
                      }
                      if (i.offset > i.dmax) {
                        ;((e.msg = "invalid distance too far back"), (i.mode = 30))
                        break
                      }
                      i.mode = 25
                    case 25:
                      if (0 === _) break e
                      if (((k = w - _), i.offset > k)) {
                        if ((k = i.offset - k) > i.whave && i.sane) {
                          ;((e.msg = "invalid distance too far back"), (i.mode = 30))
                          break
                        }
                        ;((C = k > i.wnext ? ((k -= i.wnext), i.wsize - k) : i.wnext - k),
                          k > i.length && (k = i.length),
                          (S = i.window))
                      } else ((S = d), (C = h - i.offset), (k = i.length))
                      for (_ < k && (k = _), _ -= k, i.length -= k; (d[h++] = S[C++]), --k;);
                      0 === i.length && (i.mode = 21)
                      break
                    case 26:
                      if (0 === _) break e
                      ;((d[h++] = i.length), _--, (i.mode = 21))
                      break
                    case 27:
                      if (i.wrap) {
                        for (; v < 32;) {
                          if (0 === f) break e
                          ;(f--, (y |= u[c++] << v), (v += 8))
                        }
                        if (
                          ((w -= _),
                          (e.total_out += w),
                          (i.total += w),
                          w && (e.adler = i.check = i.flags ? s(i.check, d, w, h - w) : n(i.check, d, w, h - w)),
                          (w = _),
                          (i.flags ? y : l(y)) !== i.check)
                        ) {
                          ;((e.msg = "incorrect data check"), (i.mode = 30))
                          break
                        }
                        v = y = 0
                      }
                      i.mode = 28
                    case 28:
                      if (i.wrap && i.flags) {
                        for (; v < 32;) {
                          if (0 === f) break e
                          ;(f--, (y += u[c++] << v), (v += 8))
                        }
                        if (y !== (0 | i.total)) {
                          ;((e.msg = "incorrect length check"), (i.mode = 30))
                          break
                        }
                        v = y = 0
                      }
                      i.mode = 29
                    case 29:
                      T = 1
                      break e
                    case 30:
                      T = -3
                      break e
                    case 31:
                      return -4
                    default:
                      return -2
                  }
                return (
                  (e.next_out = h),
                  (e.avail_out = _),
                  (e.next_in = c),
                  (e.avail_in = f),
                  (i.hold = y),
                  (i.bits = v),
                  (i.wsize || (w !== e.avail_out && i.mode < 30 && (i.mode < 27 || 4 !== t))) &&
                  b(e, e.output, e.next_out, w - e.avail_out)
                    ? ((i.mode = 31), -4)
                    : ((x -= e.avail_in),
                      (w -= e.avail_out),
                      (e.total_in += x),
                      (e.total_out += w),
                      (i.total += w),
                      i.wrap &&
                        w &&
                        (e.adler = i.check =
                          i.flags ? s(i.check, d, w, e.next_out - w) : n(i.check, d, w, e.next_out - w)),
                      (e.data_type =
                        i.bits + 64 * !!i.last + 128 * (12 === i.mode) + 256 * (20 === i.mode || 15 === i.mode)),
                      ((0 == x && 0 === w) || 4 === t) && 0 === T && (T = -5),
                      T)
                )
              }),
              (i.inflateEnd = function (e) {
                if (!e || !e.state) return -2
                var t = e.state
                return (t.window && (t.window = null), (e.state = null), 0)
              }),
              (i.inflateGetHeader = function (e, t) {
                var i
                return e && e.state ? (0 == (2 & (i = e.state).wrap) ? -2 : (((i.head = t).done = !1), 0)) : -2
              }),
              (i.inflateSetDictionary = function (e, t) {
                var i,
                  r = t.length
                return e && e.state
                  ? 0 !== (i = e.state).wrap && 11 !== i.mode
                    ? -2
                    : 11 === i.mode && n(1, t, r, 0) !== i.check
                      ? -3
                      : b(e, t, r, r)
                        ? ((i.mode = 31), -4)
                        : ((i.havedict = 1), 0)
                  : -2
              }),
              (i.inflateInfo = "pako inflate (from Nodeca project)"))
          },
          { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 },
        ],
        50: [
          function (e, t, i) {
            "use strict"
            var r = e("../utils/common"),
              n = [
                3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195,
                227, 258, 0, 0,
              ],
              s = [
                16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21,
                21, 21, 16, 72, 78,
              ],
              a = [
                1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073,
                4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
              ],
              o = [
                16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
                28, 28, 29, 29, 64, 64,
              ]
            t.exports = function (e, t, i, l, u, d, c, h) {
              var f,
                p,
                m,
                g,
                b,
                _,
                y,
                v,
                x,
                w = h.bits,
                k = 0,
                C = 0,
                S = 0,
                j = 0,
                A = 0,
                E = 0,
                z = 0,
                I = 0,
                N = 0,
                F = 0,
                T = null,
                D = 0,
                O = new r.Buf16(16),
                P = new r.Buf16(16),
                B = null,
                M = 0
              for (k = 0; k <= 15; k++) O[k] = 0
              for (C = 0; C < l; C++) O[t[i + C]]++
              for (A = w, j = 15; 1 <= j && 0 === O[j]; j--);
              if ((j < A && (A = j), 0 === j)) return ((u[d++] = 0x1400000), (u[d++] = 0x1400000), (h.bits = 1), 0)
              for (S = 1; S < j && 0 === O[S]; S++);
              for (A < S && (A = S), k = I = 1; k <= 15; k++) if (((I <<= 1), (I -= O[k]) < 0)) return -1
              if (0 < I && (0 === e || 1 !== j)) return -1
              for (P[1] = 0, k = 1; k < 15; k++) P[k + 1] = P[k] + O[k]
              for (C = 0; C < l; C++) 0 !== t[i + C] && (c[P[t[i + C]]++] = C)
              if (
                ((_ =
                  0 === e
                    ? ((T = B = c), 19)
                    : 1 === e
                      ? ((T = n), (D -= 257), (B = s), (M -= 257), 256)
                      : ((T = a), (B = o), -1)),
                (k = S),
                (b = d),
                (z = C = F = 0),
                (m = -1),
                (g = (N = 1 << (E = A)) - 1),
                (1 === e && 852 < N) || (2 === e && 592 < N))
              )
                return 1
              for (;;) {
                for (
                  y = k - z,
                    x = c[C] < _ ? ((v = 0), c[C]) : c[C] > _ ? ((v = B[M + c[C]]), T[D + c[C]]) : ((v = 96), 0),
                    f = 1 << (k - z),
                    S = p = 1 << E;
                  (u[b + (F >> z) + (p -= f)] = (y << 24) | (v << 16) | x), 0 !== p;
                );
                for (f = 1 << (k - 1); F & f;) f >>= 1
                if ((0 !== f ? ((F &= f - 1), (F += f)) : (F = 0), C++, 0 == --O[k])) {
                  if (k === j) break
                  k = t[i + c[C]]
                }
                if (A < k && (F & g) !== m) {
                  for (0 === z && (z = A), b += S, I = 1 << (E = k - z); E + z < j && !((I -= O[E + z]) <= 0);)
                    (E++, (I <<= 1))
                  if (((N += 1 << E), (1 === e && 852 < N) || (2 === e && 592 < N))) return 1
                  u[(m = F & g)] = (A << 24) | (E << 16) | (b - d)
                }
              }
              return (0 !== F && (u[b + F] = ((k - z) << 24) | 4194304), (h.bits = A), 0)
            }
          },
          { "../utils/common": 41 },
        ],
        51: [
          function (e, t, i) {
            "use strict"
            t.exports = {
              2: "need dictionary",
              1: "stream end",
              0: "",
              "-1": "file error",
              "-2": "stream error",
              "-3": "data error",
              "-4": "insufficient memory",
              "-5": "buffer error",
              "-6": "incompatible version",
            }
          },
          {},
        ],
        52: [
          function (e, t, i) {
            "use strict"
            var r = e("../utils/common")
            function n(e) {
              for (var t = e.length; 0 <= --t;) e[t] = 0
            }
            var s = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
              a = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
              l = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
              u = Array(576)
            n(u)
            var d = Array(60)
            n(d)
            var c = Array(512)
            n(c)
            var h = Array(256)
            n(h)
            var f = Array(29)
            n(f)
            var p,
              m,
              g,
              b = Array(30)
            function _(e, t, i, r, n) {
              ;((this.static_tree = e),
                (this.extra_bits = t),
                (this.extra_base = i),
                (this.elems = r),
                (this.max_length = n),
                (this.has_stree = e && e.length))
            }
            function y(e, t) {
              ;((this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t))
            }
            function v(e) {
              return e < 256 ? c[e] : c[256 + (e >>> 7)]
            }
            function x(e, t) {
              ;((e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255))
            }
            function w(e, t, i) {
              e.bi_valid > 16 - i
                ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
                  x(e, e.bi_buf),
                  (e.bi_buf = t >> (16 - e.bi_valid)),
                  (e.bi_valid += i - 16))
                : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += i))
            }
            function k(e, t, i) {
              w(e, i[2 * t], i[2 * t + 1])
            }
            function C(e, t) {
              for (var i = 0; (i |= 1 & e), (e >>>= 1), (i <<= 1), 0 < --t;);
              return i >>> 1
            }
            function S(e, t, i) {
              var r,
                n,
                s = Array(16),
                a = 0
              for (r = 1; r <= 15; r++) s[r] = a = (a + i[r - 1]) << 1
              for (n = 0; n <= t; n++) {
                var o = e[2 * n + 1]
                0 !== o && (e[2 * n] = C(s[o]++, o))
              }
            }
            function j(e) {
              var t
              for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0
              for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0
              for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0
              ;((e.dyn_ltree[512] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0))
            }
            function A(e) {
              ;(8 < e.bi_valid ? x(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf),
                (e.bi_buf = 0),
                (e.bi_valid = 0))
            }
            function E(e, t, i, r) {
              var n = 2 * t,
                s = 2 * i
              return e[n] < e[s] || (e[n] === e[s] && r[t] <= r[i])
            }
            function z(e, t, i) {
              for (
                var r = e.heap[i], n = i << 1;
                n <= e.heap_len &&
                (n < e.heap_len && E(t, e.heap[n + 1], e.heap[n], e.depth) && n++, !E(t, r, e.heap[n], e.depth));
              )
                ((e.heap[i] = e.heap[n]), (i = n), (n <<= 1))
              e.heap[i] = r
            }
            function I(e, t, i) {
              var r,
                n,
                o,
                l,
                u = 0
              if (0 !== e.last_lit)
                for (
                  ;
                  (r = (e.pending_buf[e.d_buf + 2 * u] << 8) | e.pending_buf[e.d_buf + 2 * u + 1]),
                    (n = e.pending_buf[e.l_buf + u]),
                    u++,
                    0 === r
                      ? k(e, n, t)
                      : (k(e, (o = h[n]) + 256 + 1, t),
                        0 !== (l = s[o]) && w(e, (n -= f[o]), l),
                        k(e, (o = v(--r)), i),
                        0 !== (l = a[o]) && w(e, (r -= b[o]), l)),
                    u < e.last_lit;
                );
              k(e, 256, t)
            }
            function N(e, t) {
              var i,
                r,
                n,
                s = t.dyn_tree,
                a = t.stat_desc.static_tree,
                o = t.stat_desc.has_stree,
                l = t.stat_desc.elems,
                u = -1
              for (e.heap_len = 0, e.heap_max = 573, i = 0; i < l; i++)
                0 !== s[2 * i] ? ((e.heap[++e.heap_len] = u = i), (e.depth[i] = 0)) : (s[2 * i + 1] = 0)
              for (; e.heap_len < 2;)
                ((s[2 * (n = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1),
                  (e.depth[n] = 0),
                  e.opt_len--,
                  o && (e.static_len -= a[2 * n + 1]))
              for (t.max_code = u, i = e.heap_len >> 1; 1 <= i; i--) z(e, s, i)
              for (
                n = l;
                (i = e.heap[1]),
                  (e.heap[1] = e.heap[e.heap_len--]),
                  z(e, s, 1),
                  (r = e.heap[1]),
                  (e.heap[--e.heap_max] = i),
                  (e.heap[--e.heap_max] = r),
                  (s[2 * n] = s[2 * i] + s[2 * r]),
                  (e.depth[n] = (e.depth[i] >= e.depth[r] ? e.depth[i] : e.depth[r]) + 1),
                  (s[2 * i + 1] = s[2 * r + 1] = n),
                  (e.heap[1] = n++),
                  z(e, s, 1),
                  2 <= e.heap_len;
              );
              ;((e.heap[--e.heap_max] = e.heap[1]),
                (function (e, t) {
                  var i,
                    r,
                    n,
                    s,
                    a,
                    o,
                    l = t.dyn_tree,
                    u = t.max_code,
                    d = t.stat_desc.static_tree,
                    c = t.stat_desc.has_stree,
                    h = t.stat_desc.extra_bits,
                    f = t.stat_desc.extra_base,
                    p = t.stat_desc.max_length,
                    m = 0
                  for (s = 0; s <= 15; s++) e.bl_count[s] = 0
                  for (l[2 * e.heap[e.heap_max] + 1] = 0, i = e.heap_max + 1; i < 573; i++)
                    (p < (s = l[2 * l[2 * (r = e.heap[i]) + 1] + 1] + 1) && ((s = p), m++),
                      (l[2 * r + 1] = s),
                      u < r ||
                        (e.bl_count[s]++,
                        (a = 0),
                        f <= r && (a = h[r - f]),
                        (o = l[2 * r]),
                        (e.opt_len += o * (s + a)),
                        c && (e.static_len += o * (d[2 * r + 1] + a))))
                  if (0 !== m) {
                    do {
                      for (s = p - 1; 0 === e.bl_count[s];) s--
                      ;(e.bl_count[s]--, (e.bl_count[s + 1] += 2), e.bl_count[p]--, (m -= 2))
                    } while (0 < m)
                    for (s = p; 0 !== s; s--)
                      for (r = e.bl_count[s]; 0 !== r;)
                        u < (n = e.heap[--i]) ||
                          (l[2 * n + 1] !== s && ((e.opt_len += (s - l[2 * n + 1]) * l[2 * n]), (l[2 * n + 1] = s)),
                          r--)
                  }
                })(e, t),
                S(s, u, e.bl_count))
            }
            function F(e, t, i) {
              var r,
                n,
                s = -1,
                a = t[1],
                o = 0,
                l = 7,
                u = 4
              for (0 === a && ((l = 138), (u = 3)), t[2 * (i + 1) + 1] = 65535, r = 0; r <= i; r++)
                ((n = a),
                  (a = t[2 * (r + 1) + 1]),
                  (++o < l && n === a) ||
                    (o < u
                      ? (e.bl_tree[2 * n] += o)
                      : 0 !== n
                        ? (n !== s && e.bl_tree[2 * n]++, e.bl_tree[32]++)
                        : o <= 10
                          ? e.bl_tree[34]++
                          : e.bl_tree[36]++,
                    (s = n),
                    (u = (o = 0) === a ? ((l = 138), 3) : n === a ? ((l = 6), 3) : ((l = 7), 4))))
            }
            function T(e, t, i) {
              var r,
                n,
                s = -1,
                a = t[1],
                o = 0,
                l = 7,
                u = 4
              for (0 === a && ((l = 138), (u = 3)), r = 0; r <= i; r++)
                if (((n = a), (a = t[2 * (r + 1) + 1]), !(++o < l && n === a))) {
                  if (o < u) for (; k(e, n, e.bl_tree), 0 != --o;);
                  else
                    0 !== n
                      ? (n !== s && (k(e, n, e.bl_tree), o--), k(e, 16, e.bl_tree), w(e, o - 3, 2))
                      : o <= 10
                        ? (k(e, 17, e.bl_tree), w(e, o - 3, 3))
                        : (k(e, 18, e.bl_tree), w(e, o - 11, 7))
                  ;((s = n), (u = (o = 0) === a ? ((l = 138), 3) : n === a ? ((l = 6), 3) : ((l = 7), 4)))
                }
            }
            n(b)
            var D = !1
            function O(e, t, i, n) {
              ;(w(e, 0 + +!!n, 3),
                A(e),
                x(e, i),
                x(e, ~i),
                r.arraySet(e.pending_buf, e.window, t, i, e.pending),
                (e.pending += i))
            }
            ;((i._tr_init = function (e) {
              ;(D ||
                ((function () {
                  var e,
                    t,
                    i,
                    r,
                    n,
                    l = Array(16)
                  for (r = i = 0; r < 28; r++) for (f[r] = i, e = 0; e < 1 << s[r]; e++) h[i++] = r
                  for (h[i - 1] = r, r = n = 0; r < 16; r++) for (b[r] = n, e = 0; e < 1 << a[r]; e++) c[n++] = r
                  for (n >>= 7; r < 30; r++) for (b[r] = n << 7, e = 0; e < 1 << (a[r] - 7); e++) c[256 + n++] = r
                  for (t = 0; t <= 15; t++) l[t] = 0
                  for (e = 0; e <= 143;) ((u[2 * e + 1] = 8), e++, l[8]++)
                  for (; e <= 255;) ((u[2 * e + 1] = 9), e++, l[9]++)
                  for (; e <= 279;) ((u[2 * e + 1] = 7), e++, l[7]++)
                  for (; e <= 287;) ((u[2 * e + 1] = 8), e++, l[8]++)
                  for (S(u, 287, l), e = 0; e < 30; e++) ((d[2 * e + 1] = 5), (d[2 * e] = C(e, 5)))
                  ;((p = new _(u, s, 257, 286, 15)), (m = new _(d, a, 0, 30, 15)), (g = new _([], o, 0, 19, 7)))
                })(),
                (D = !0)),
                (e.l_desc = new y(e.dyn_ltree, p)),
                (e.d_desc = new y(e.dyn_dtree, m)),
                (e.bl_desc = new y(e.bl_tree, g)),
                (e.bi_buf = 0),
                (e.bi_valid = 0),
                j(e))
            }),
              (i._tr_stored_block = O),
              (i._tr_flush_block = function (e, t, i, r) {
                var n,
                  s,
                  a = 0
                ;(0 < e.level
                  ? (2 === e.strm.data_type &&
                      (e.strm.data_type = (function (e) {
                        var t,
                          i = 0xf3ffc07f
                        for (t = 0; t <= 31; t++, i >>>= 1) if (1 & i && 0 !== e.dyn_ltree[2 * t]) return 0
                        if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1
                        for (t = 32; t < 256; t++) if (0 !== e.dyn_ltree[2 * t]) return 1
                        return 0
                      })(e)),
                    N(e, e.l_desc),
                    N(e, e.d_desc),
                    (a = (function (e) {
                      var t
                      for (
                        F(e, e.dyn_ltree, e.l_desc.max_code),
                          F(e, e.dyn_dtree, e.d_desc.max_code),
                          N(e, e.bl_desc),
                          t = 18;
                        3 <= t && 0 === e.bl_tree[2 * l[t] + 1];
                        t--
                      );
                      return ((e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t)
                    })(e)),
                    (n = (e.opt_len + 3 + 7) >>> 3),
                    (s = (e.static_len + 3 + 7) >>> 3) <= n && (n = s))
                  : (n = s = i + 5),
                  i + 4 <= n && -1 !== t
                    ? O(e, t, i, r)
                    : 4 === e.strategy || s === n
                      ? (w(e, 2 + +!!r, 3), I(e, u, d))
                      : (w(e, 4 + +!!r, 3),
                        (function (e, t, i, r) {
                          var n
                          for (w(e, t - 257, 5), w(e, i - 1, 5), w(e, r - 4, 4), n = 0; n < r; n++)
                            w(e, e.bl_tree[2 * l[n] + 1], 3)
                          ;(T(e, e.dyn_ltree, t - 1), T(e, e.dyn_dtree, i - 1))
                        })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1),
                        I(e, e.dyn_ltree, e.dyn_dtree)),
                  j(e),
                  r && A(e))
              }),
              (i._tr_tally = function (e, t, i) {
                return (
                  (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
                  (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
                  (e.pending_buf[e.l_buf + e.last_lit] = 255 & i),
                  e.last_lit++,
                  0 === t
                    ? e.dyn_ltree[2 * i]++
                    : (e.matches++, t--, e.dyn_ltree[2 * (h[i] + 256 + 1)]++, e.dyn_dtree[2 * v(t)]++),
                  e.last_lit === e.lit_bufsize - 1
                )
              }),
              (i._tr_align = function (e) {
                ;(w(e, 2, 3),
                  k(e, 256, u),
                  16 === e.bi_valid
                    ? (x(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                    : 8 <= e.bi_valid &&
                      ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8)))
              }))
          },
          { "../utils/common": 41 },
        ],
        53: [
          function (e, t, i) {
            "use strict"
            t.exports = function () {
              ;((this.input = null),
                (this.next_in = 0),
                (this.avail_in = 0),
                (this.total_in = 0),
                (this.output = null),
                (this.next_out = 0),
                (this.avail_out = 0),
                (this.total_out = 0),
                (this.msg = ""),
                (this.state = null),
                (this.data_type = 2),
                (this.adler = 0))
            }
          },
          {},
        ],
        54: [
          function (e, t, r) {
            ;(function (e) {
              !(function (e) {
                "use strict"
                if (!e.setImmediate) {
                  var t,
                    i,
                    r,
                    n,
                    s = 1,
                    a = {},
                    o = !1,
                    l = e.document,
                    u = Object.getPrototypeOf && Object.getPrototypeOf(e)
                  ;((u = u && u.setTimeout ? u : e),
                    (t =
                      "[object process]" === {}.toString.call(e.process)
                        ? function (e) {
                            process.nextTick(function () {
                              c(e)
                            })
                          }
                        : !(function () {
                              if (e.postMessage && !e.importScripts) {
                                var t = !0,
                                  i = e.onmessage
                                return (
                                  (e.onmessage = function () {
                                    t = !1
                                  }),
                                  e.postMessage("", "*"),
                                  (e.onmessage = i),
                                  t
                                )
                              }
                            })()
                          ? e.MessageChannel
                            ? (((r = new MessageChannel()).port1.onmessage = function (e) {
                                c(e.data)
                              }),
                              function (e) {
                                r.port2.postMessage(e)
                              })
                            : l && "onreadystatechange" in l.createElement("script")
                              ? ((i = l.documentElement),
                                function (e) {
                                  var t = l.createElement("script")
                                  ;((t.onreadystatechange = function () {
                                    ;(c(e), (t.onreadystatechange = null), i.removeChild(t), (t = null))
                                  }),
                                    i.appendChild(t))
                                })
                              : function (e) {
                                  setTimeout(c, 0, e)
                                }
                          : ((n = "setImmediate$" + Math.random() + "$"),
                            e.addEventListener ? e.addEventListener("message", h, !1) : e.attachEvent("onmessage", h),
                            function (t) {
                              e.postMessage(n + t, "*")
                            })),
                    (u.setImmediate = function (e) {
                      "function" != typeof e && (e = Function("" + e))
                      for (var i = Array(arguments.length - 1), r = 0; r < i.length; r++) i[r] = arguments[r + 1]
                      var n = { callback: e, args: i }
                      return ((a[s] = n), t(s), s++)
                    }),
                    (u.clearImmediate = d))
                }
                function d(e) {
                  delete a[e]
                }
                function c(e) {
                  if (o) setTimeout(c, 0, e)
                  else {
                    var t = a[e]
                    if (t) {
                      o = !0
                      try {
                        var i = t.callback,
                          r = t.args
                        switch (r.length) {
                          case 0:
                            i()
                            break
                          case 1:
                            i(r[0])
                            break
                          case 2:
                            i(r[0], r[1])
                            break
                          case 3:
                            i(r[0], r[1], r[2])
                            break
                          default:
                            i.apply(void 0, r)
                        }
                      } finally {
                        ;(d(e), (o = !1))
                      }
                    }
                  }
                }
                function h(t) {
                  t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(n) && c(+t.data.slice(n.length))
                }
              })("u" < typeof self ? (void 0 === e ? this : e) : self)
            }).call(this, void 0 !== i.g ? i.g : "u" > typeof self ? self : "u" > typeof window ? window : {})
          },
          {},
        ],
      },
      {},
      [10],
    )(10)
  },
  ikbV(e, t, i) {
    var r = i("ABep")
    ;(i("zd8w"),
      (t.A = (e) =>
        (0, r.jsx)("svg", {
          preserveAspectRatio: "none",
          width: "100%",
          height: "100%",
          overflow: "visible",
          style: { display: "block" },
          viewBox: "0 0 112 80",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            id: "Vector",
            d: "M11.4867 51.9008C8.31365 49.8793 5.20186 47.9635 2.15136 46.1534C1.8082 45.9497 1.38817 45.5927 0.891267 45.0823C0.310802 44.4845 0.0188969 43.6985 0.0155545 42.7242C0.00329899 38.8251 -0.00171402 35.4878 0.000514256 32.7124C0.00218546 31.6496 0.705764 31.1597 1.65167 30.5818C13.0638 23.5928 18.8718 20.0374 19.0757 19.9156C21.1195 18.6867 24.1762 18.5506 25.7956 20.5915C26.0128 20.8649 26.2084 21.3017 26.3822 21.9017C26.6111 22.6955 26.8484 23.7799 27.6523 24.577C29.6109 26.5216 32.5105 27.2987 35.2981 27.1028C38.4784 26.8769 42.3806 25.4255 44.1905 22.6589C44.9916 21.4345 45.0924 20.235 44.493 19.0604C43.0341 16.2008 38.8594 15.774 36.0501 15.3638C35.4451 15.2753 34.9326 15.0782 34.5126 14.7726C33.1205 13.7597 33.1589 11.8267 34.2836 10.6892C34.8117 10.1567 35.5081 9.63247 36.3726 9.11657C39.724 7.11828 43.9337 4.56978 49.0019 1.47106C50.281 0.688351 51.1266 0.247179 51.5388 0.147542C53.21 -0.260972 54.7275 0.215628 56.2349 1.12399C62.7081 5.02424 68.3222 8.34991 73.0773 11.101C73.6979 11.4597 74.1993 11.6883 74.5814 11.7868C76.0733 12.1677 77.218 11.8217 78.0158 10.749C78.4987 10.0997 78.8397 9.07671 79.2541 8.47058C80.1499 7.16367 81.9581 6.25863 83.4722 5.84846C86.6442 4.98992 90.0284 5.82521 93.1886 7.10887C95.8258 8.18164 98.5315 9.95352 99.9604 12.378C100.482 13.2648 100.755 14.3143 100.779 15.5266C100.789 16.0048 100.795 17.9251 100.798 21.2873C100.798 23.0143 100.752 24.0865 100.661 24.5039C100.424 25.5778 99.947 26.5282 99.2284 27.3552C99.2191 27.3662 99.2122 27.3791 99.2084 27.393C99.2046 27.4069 99.2039 27.4214 99.2062 27.4357C99.2086 27.4499 99.2141 27.4634 99.2222 27.4753C99.2304 27.4872 99.241 27.4972 99.2534 27.5046C104.433 30.5812 107.92 32.6487 109.714 33.7071C110.214 34.0015 110.697 34.3647 111.164 34.7964C111.731 35.3223 112.01 35.9838 112 36.7809C111.985 37.9068 111.984 40.6086 111.995 44.8864C111.998 46.5868 111.833 47.5567 110.598 48.5846C110.054 49.0363 109.351 49.5273 108.49 50.0576C105.146 52.1145 102.784 53.5543 101.406 54.3768C101.395 54.3832 101.385 54.392 101.378 54.4026C101.371 54.4133 101.366 54.4254 101.365 54.4382C101.363 54.451 101.364 54.4641 101.368 54.4764C101.372 54.4888 101.379 54.5002 101.388 54.5097C102.527 55.6865 103.096 57.1102 103.092 58.7808C103.084 64.3738 103.079 67.2671 103.077 67.4609C103.064 68.9399 102.673 70.2302 101.904 71.3318C100.33 73.5852 97.5538 75.3522 94.8782 76.219C90.7186 77.5658 85.6716 76.9397 82.3576 73.934C81.7659 73.3976 81.3665 72.5241 81.0573 71.7303C80.5844 70.5148 79.7354 69.7774 78.3617 69.6844C77.1885 69.6036 76.1095 69.8638 75.1246 70.4649C74.3558 70.9332 73.6489 71.4547 72.9503 71.8931C69.1617 74.2628 65.5085 76.6557 61.3388 79.1367C59.3244 80.3346 57.261 80.2859 55.1486 78.9906C48.583 74.963 43.1527 71.6146 38.8577 68.9455C37.7792 68.2757 36.6874 68.0116 35.5822 68.1534C34.4474 68.2995 33.6135 69.0069 33.1673 69.99C32.7807 70.8447 32.5667 71.3108 32.5255 71.3883C32.0292 72.3149 31.2454 73.009 30.4064 73.6068C28.6584 74.8556 26.6674 75.4252 24.4335 75.3156C21.1814 75.1562 17.8824 73.9307 15.2152 72.2252C13.0426 70.8353 10.6177 68.4722 10.1531 65.8667C10.0818 65.467 10.0472 64.3716 10.0495 62.5803C10.0517 59.6687 10.0528 57.7534 10.0528 56.8346C10.0517 55.3798 10.0835 54.5224 10.1481 54.2622C10.3553 53.4408 10.8065 52.7201 11.5018 52.1001C11.5165 52.0874 11.5281 52.0714 11.5355 52.0535C11.543 52.0355 11.5461 52.0161 11.5446 51.9967C11.5431 51.9774 11.5371 51.9586 11.5271 51.942C11.517 51.9253 11.5032 51.9112 11.4867 51.9008ZM1.37258 32.2573C0.600478 33.0561 1.38595 33.825 2.12462 34.3198C2.8956 34.8346 4.66875 35.9301 7.44407 37.6062C14.3294 41.7622 17.7833 43.8468 17.8055 43.8601C18.7403 44.417 19.5553 44.9655 20.2505 45.5058C21.4003 46.3975 21.905 47.8838 20.8806 49.0828C20.4683 49.5666 19.8617 49.9153 19.0606 50.129C18.2963 50.3338 17.2451 50.5729 15.9071 50.8463C13.447 51.3479 10.8767 53.1729 11.1424 55.9212C11.2644 57.18 12.2705 58.4836 13.1964 59.4102C15.3689 61.5823 18.3303 63.037 21.2666 63.7577C23.0782 64.2016 24.8469 64.2786 26.5727 63.9885C28.4021 63.6819 29.9134 62.7796 31.1067 61.2817C31.6364 60.6191 31.8554 59.7639 32.1595 59.1096C33.3093 56.6419 36.5832 56.4144 38.8059 57.4656C39.3775 57.7357 39.7613 57.9317 39.9574 58.0534C44.9688 61.1654 50.2994 64.4507 55.9492 67.9092C57.5992 68.9189 59.2581 68.8984 60.926 67.8478C64.3709 65.6779 68.4609 63.1078 73.196 60.1375C74.543 59.2928 75.4087 58.7985 75.7931 58.6546C77.3389 58.075 79.0553 58.1149 80.5209 58.912C81.4033 59.3919 81.801 60.4232 82.2038 61.3747C82.6634 62.4574 83.3068 63.1316 84.2627 63.7394C88.9571 66.7186 95.8375 65.7239 99.8233 61.9078C101.033 60.7486 102.16 58.3474 101.55 56.6751C100.599 54.0746 97.0775 53.5432 94.7596 53.1048C93.3741 52.8424 91.5826 51.9507 91.3871 50.3648C91.2467 49.2372 92.236 48.4883 93.0984 47.9652C100.407 43.5158 105.1 40.6651 107.178 39.413C108.353 38.7055 109.285 38.0955 109.976 37.583C110.308 37.3372 110.55 37.0953 110.701 36.8573C111.313 35.8908 109.271 34.6702 108.56 34.2684C106.703 33.2166 103.066 31.0479 97.6491 27.762C94.1106 25.6154 91.9642 24.3306 91.2099 23.9077C90.5838 23.5557 90.1398 23.228 89.878 22.9246C88.0681 20.8173 90.4144 19.1517 92.3514 18.9059C93.9468 18.7022 94.9818 18.5589 95.4565 18.4758C97.1377 18.1802 99.3921 17.1772 99.5643 15.2459C99.6412 14.3713 99.4596 13.5759 99.0195 12.8596C97.6608 10.6477 95.1907 9.11989 92.8327 8.10525C89.2045 6.54426 84.8777 5.73056 81.3498 7.92756C80.6234 8.37925 80.127 8.95327 79.8608 9.64962C79.609 10.3039 79.419 10.7362 79.2909 10.9466C77.8587 13.308 75.1897 13.6052 72.9002 12.2701C64.9096 7.61591 59.3083 4.31238 56.0962 2.35949C55.1158 1.76499 54.4334 1.41349 54.049 1.305C52.8 0.954051 51.5828 1.14558 50.3974 1.87957C46.6338 4.20776 42.2993 6.83376 37.3938 9.75756C36.9526 10.021 36.3654 10.4058 35.6323 10.9117C35.2747 11.1586 34.9945 11.4348 34.7917 11.7403C34.0881 12.8031 34.6931 14.0851 35.9699 14.2462C39.2739 14.6614 43.9783 15.3157 45.4991 18.7166C46.6155 21.2142 45.2635 23.735 43.2463 25.2395C40.6025 27.2102 37.6377 28.206 34.3522 28.227C31.9445 28.2425 29.6956 27.4864 27.6055 25.9586C26.4457 25.11 25.7505 23.9127 25.4313 22.551C24.7377 19.6051 21.4588 19.6931 19.3882 20.9717C10.0372 26.7385 4.43701 30.181 2.58754 31.2992C2.12629 31.577 1.7213 31.8964 1.37258 32.2573ZM99.6896 17.6306C99.6897 17.6188 99.6862 17.6073 99.6797 17.5975C99.6732 17.5877 99.6639 17.58 99.6531 17.5754C99.6422 17.5708 99.6302 17.5695 99.6185 17.5716C99.6069 17.5738 99.5962 17.5792 99.5877 17.5874C97.7527 19.3228 95.5417 19.6748 93.1034 19.9073C92.3915 19.9754 90.9258 20.2461 90.5097 20.824C89.8913 21.6792 90.7704 22.3733 91.469 22.7868C94.1473 24.3722 96.3533 25.694 98.0869 26.7524C98.1333 26.7808 98.1883 26.7921 98.2423 26.7842C98.2964 26.7763 98.3461 26.7497 98.3827 26.7092C99.059 25.9575 99.4796 25.1244 99.6445 24.21C99.6891 23.9575 99.7097 23.0154 99.7063 21.3836C99.7019 19.6565 99.6963 18.4055 99.6896 17.6306ZM1.12189 35.0322C1.11625 35.029 1.10983 35.0271 1.10329 35.027C1.09675 35.0269 1.09033 35.0284 1.0847 35.0315C1.07907 35.0345 1.07444 35.039 1.07128 35.0444C1.06813 35.0497 1.06656 35.0559 1.06674 35.0621C1.07343 38.3557 1.07287 40.2942 1.06507 40.8776C1.04836 42.1663 1.06841 42.9213 1.12524 43.1427C1.46449 44.4579 2.69617 45.2218 3.7624 45.8661C6.66918 47.6198 9.48015 49.3723 12.1953 51.1237C12.2625 51.1668 12.341 51.1891 12.4208 51.1876C12.5006 51.1861 12.5781 51.161 12.6432 51.1154C14.3094 49.9463 15.9739 49.6972 18.3554 49.1724C19.3748 48.9483 20.6767 48.5115 20.2171 47.2013C19.9631 46.4789 19.0172 45.8927 18.332 45.4742C13.4075 42.4497 7.67079 38.969 1.12189 35.0322ZM110.843 38.4349C105.785 41.548 99.9793 45.0818 93.4259 49.0363C92.6338 49.5145 92.0556 50.2137 92.8143 51.0024C93.4343 51.6468 94.1847 51.8743 95.0938 52.0569C97.1043 52.4605 98.5866 52.7909 100.153 53.6478C100.219 53.6841 100.293 53.7023 100.369 53.7006C100.444 53.6988 100.518 53.6772 100.582 53.6379C102.462 52.4931 105.059 50.9023 108.375 48.8652C109.643 48.0847 110.877 47.1564 110.895 45.544C110.904 44.8343 110.904 42.474 110.895 38.4631C110.895 38.457 110.894 38.4511 110.891 38.4459C110.887 38.4407 110.883 38.4364 110.878 38.4335C110.872 38.4306 110.866 38.4292 110.86 38.4294C110.854 38.4297 110.848 38.4315 110.843 38.4349ZM11.1157 58.7509C11.0901 60.5632 11.0834 62.5681 11.0957 64.7657C11.109 66.9926 12.7485 68.9986 14.4431 70.347C17.0591 72.4295 20.0461 73.6937 23.4041 74.1399C25.8959 74.4704 28.3158 74.0237 30.2794 72.3929C30.9947 71.7995 31.4771 71.2416 31.7267 70.719C32.1768 69.7769 32.4063 69.297 32.4152 69.2793C33.6135 66.7136 36.9409 66.5658 39.1351 67.8893C44.8206 71.3202 50.4241 74.8307 55.8756 78.1918C57.7307 79.336 59.4286 79.0836 61.1984 78.0025C64.0116 76.2821 67.6443 74.0059 72.0963 71.174C73.3581 70.3719 74.4043 69.5948 75.4722 69.0982C76.1808 68.7683 77.0487 68.6095 78.0759 68.6216C79.5622 68.6383 80.6663 69.1519 81.3883 70.1627C82.0367 71.0711 82.167 72.3182 82.9976 73.0854C83.9068 73.9257 84.993 74.575 86.2565 75.0333C90.9008 76.7172 95.8943 75.5614 99.5459 72.3497C101.115 70.9714 102.019 69.4503 102.031 67.4194C102.038 66.3377 102.039 64.1396 102.034 60.825C102.035 60.8116 102.03 60.7984 102.022 60.7878C102.014 60.7772 102.002 60.7698 101.989 60.7669C101.975 60.764 101.962 60.7657 101.95 60.7717C101.937 60.7778 101.928 60.7878 101.922 60.8001C101.342 62.0257 100.184 63.1482 99.1047 63.8855C96.306 65.7964 93.2137 66.6737 89.8278 66.5176C87.0587 66.3914 84.2009 65.4216 82.2372 63.4222C81.1509 62.3163 81.2629 60.5444 79.7521 59.7805C78.3065 59.0482 76.5167 59.2906 75.1864 60.1425C71.0853 62.7729 66.461 65.6785 61.3137 68.8591C59.9444 69.706 58.6086 69.9767 57.3062 69.6712C56.7056 69.5317 55.8171 69.1088 54.6406 68.4024C49.4849 65.307 44.4262 62.1452 39.5195 59.1162C38.7931 58.6679 38.1341 58.3446 37.5425 58.1464C35.9365 57.6084 33.8241 58.0817 33.057 59.7506C32.701 60.5245 32.4637 61.3514 31.8453 62.0755C30.2176 63.9763 28.152 65.0076 25.6485 65.1692C22.3496 65.3818 19.2344 64.5083 16.3098 62.9955C14.3662 61.9908 12.4911 60.5361 11.2277 58.7177C11.2202 58.7073 11.2096 58.6995 11.1974 58.6954C11.1853 58.6913 11.1721 58.6911 11.1598 58.6947C11.1475 58.6984 11.1366 58.7057 11.1287 58.7158C11.1208 58.7259 11.1163 58.7381 11.1157 58.7509Z",
            fill: "currentColor",
            fillOpacity: 0.5,
          }),
        })))
  },
  OXR4(e, t, i) {
    var r = i("ABep"),
      n = i("QosV"),
      s = i("on57"),
      a = i("Yakm"),
      o = i("aBXq")
    i.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            i,
            l,
            u,
            d,
            c,
            h,
            f,
            p = (0, n.c)(29),
            {
              actions: m,
              children: g,
              collapsible: b,
              defaultOpen: _,
              disableContentInlineInset: y,
              count: v,
              id: x,
              onOpenChange: w,
              showDivider: k,
              title: C,
            } = e,
            S = void 0 === _ || _,
            j = void 0 === k || k
          p[0] !== m || p[1] !== b
            ? ((t =
                null == m
                  ? null
                  : (0, r.jsx)("span", {
                      className: "flex items-center gap-2",
                      role: "presentation",
                      onClick: (e) => {
                        b && (e.preventDefault(), e.stopPropagation())
                      },
                      onKeyDown: (e) => {
                        b && e.stopPropagation()
                      },
                      children: m,
                    })),
              (p[0] = m),
              (p[1] = b),
              (p[2] = t))
            : (t = p[2])
          let A = t
          ;(p[3] !== b
            ? ((i = b
                ? (0, r.jsx)(a.A, {
                    className:
                      "icon-2xs -rotate-90 transition-transform group-open/section:rotate-0 motion-reduce:transition-none",
                  })
                : null),
              (p[3] = b),
              (p[4] = i))
            : (i = p[4]),
            p[5] !== i || p[6] !== C
              ? ((l = (0, r.jsxs)(r.Fragment, { children: [C, i] })), (p[5] = i), (p[6] = C), (p[7] = l))
              : (l = p[7]))
          let E = l,
            z = b ? "details" : "section"
          p[8] !== b || p[9] !== S || p[10] !== w
            ? ((u = b
                ? {
                    open: S,
                    onToggle: (e) => {
                      w?.(e.currentTarget.open)
                    },
                  }
                : {}),
              (p[8] = b),
              (p[9] = S),
              (p[10] = w),
              (p[11] = u))
            : (u = p[11])
          let I = u,
            N = b ? "summary" : "div"
          p[12] !== A || p[13] !== v || p[14] !== E || p[15] !== j || p[16] !== N
            ? ((d = (0, r.jsx)(o.u, { action: A, as: N, count: v, showDivider: j, title: E })),
              (p[12] = A),
              (p[13] = v),
              (p[14] = E),
              (p[15] = j),
              (p[16] = N),
              (p[17] = d))
            : (d = p[17])
          let F = !(void 0 !== y && y) && "px-[var(--detail-page-inline-inset,0px)]"
          return (
            p[18] !== F ? ((c = (0, s.A)("flex flex-col gap-1", F)), (p[18] = F), (p[19] = c)) : (c = p[19]),
            p[20] !== g || p[21] !== c
              ? ((h = (0, r.jsx)("div", { className: c, children: g })), (p[20] = g), (p[21] = c), (p[22] = h))
              : (h = p[22]),
            p[23] !== z || p[24] !== x || p[25] !== I || p[26] !== h || p[27] !== d
              ? ((f = (0, r.jsxs)(z, {
                  ...I,
                  id: x,
                  className:
                    "group/section flex flex-col gap-4 [--sectioned-page-leading-inset:var(--detail-page-inline-inset,0px)]",
                  children: [d, h],
                })),
                (p[23] = z),
                (p[24] = x),
                (p[25] = I),
                (p[26] = h),
                (p[27] = d),
                (p[28] = f))
              : (f = p[28]),
            f
          )
        },
      },
    )
  },
  aBXq(e, t, i) {
    var r = i("ABep"),
      n = i("QosV"),
      s = i("on57")
    i.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            i,
            a,
            o,
            l,
            u,
            d,
            c = (0, n.c)(24),
            { action: h, as: f, count: p, size: m, showDivider: g, sticky: b, title: _ } = e,
            y = void 0 === f ? "div" : f,
            v = void 0 === m ? "default" : m,
            x = "summary" === y && "cursor-interaction list-none marker:hidden",
            w =
              b &&
              "relative sticky top-0 z-10 bg-surface after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-surface after:content-['']",
            k = (void 0 === g || g) && "border-b border-subtle"
          c[0] !== x || c[1] !== w || c[2] !== k
            ? ((t = (0, s.A)(
                "flex items-center justify-between gap-3 pe-0.5 pb-2 text-default [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)]",
                x,
                w,
                k,
              )),
              (c[0] = x),
              (c[1] = w),
              (c[2] = k),
              (c[3] = t))
            : (t = c[3])
          let C = t
          ;(c[4] !== p || c[5] !== v
            ? ((i =
                null == p
                  ? null
                  : (0, r.jsx)("span", {
                      className: (0, s.A)("text-tertiary", "compact" === v && "text-sm"),
                      children: p,
                    })),
              (c[4] = p),
              (c[5] = v),
              (c[6] = i))
            : (i = c[6]),
            c[7] !== i || c[8] !== _
              ? ((a = (0, r.jsxs)(r.Fragment, { children: [_, i] })), (c[7] = i), (c[8] = _), (c[9] = a))
              : (a = c[9]))
          let S = a,
            j = "summary" === y ? "span" : "h2",
            A = "summary" === y ? "span" : "div",
            E = "compact" === v ? "text-base" : "text-lg"
          return (
            c[10] !== E
              ? ((o = (0, s.A)("flex min-h-7 items-center gap-1.5 leading-6 font-medium", E)), (c[10] = E), (c[11] = o))
              : (o = c[11]),
            c[12] !== j || c[13] !== S || c[14] !== o
              ? ((l = (0, r.jsx)(j, { className: o, children: S })), (c[12] = j), (c[13] = S), (c[14] = o), (c[15] = l))
              : (l = c[15]),
            c[16] !== A || c[17] !== h
              ? ((u = null == h ? null : (0, r.jsx)(A, { className: "shrink-0", children: h })),
                (c[16] = A),
                (c[17] = h),
                (c[18] = u))
              : (u = c[18]),
            c[19] !== y || c[20] !== C || c[21] !== l || c[22] !== u
              ? ((d = (0, r.jsxs)(y, { className: C, "data-slot": "section-header", children: [l, u] })),
                (c[19] = y),
                (c[20] = C),
                (c[21] = l),
                (c[22] = u),
                (c[23] = d))
              : (d = c[23]),
            d
          )
        },
      },
    )
  },
  UtcH(e, t, i) {
    var r = i("ABep"),
      n = i("QosV"),
      s = i("tb30"),
      a = i("on57"),
      o = i("zd8w"),
      l = i("Wf1j"),
      u = i("HOLv"),
      d = i("Sm6l")
    i.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            i,
            c,
            h,
            f,
            p = (0, n.c)(17),
            { ancestors: m, current: g, textSm: b } = e,
            _ = (0, l.A)()
          p[0] !== _
            ? ((t = _.formatMessage({
                id: "toolbarBreadcrumb.label",
                defaultMessage: "Breadcrumb",
                description: "Accessible label for toolbar breadcrumb navigation",
              })),
              (p[0] = _),
              (p[1] = t))
            : (t = p[1])
          let y = b ? "text-sm" : "text-base"
          if (
            (p[2] !== y
              ? ((i = (0, a.$)("flex min-w-0 items-center gap-1 text-codex-description", y)), (p[2] = y), (p[3] = i))
              : (i = p[3]),
            p[4] !== m || p[5] !== b)
          ) {
            let e
            ;(p[7] !== b
              ? ((e = (e, t) => {
                  let { id: i, ...n } = e,
                    l =
                      "content" in n
                        ? n.content
                        : (0, r.jsx)("span", { className: "min-w-0 truncate", children: n.label }),
                    c = l
                  if (!("content" in n)) {
                    let { label: e, ...t } = n,
                      i = { className: (0, a.$)("min-w-0", b && "text-sm"), color: "ghost", size: "toolbar" }
                    c =
                      null != t.to
                        ? (0, r.jsx)(d.z, { ...t, ...i, children: l })
                        : (0, r.jsx)(d.$, { ...i, onClick: t.onClick, children: l })
                  }
                  return (0, r.jsxs)(
                    o.Fragment,
                    { children: [t > 0 ? (0, r.jsx)(u.I, { className: "shrink-0", asset: s.q }) : null, c] },
                    i,
                  )
                }),
                (p[7] = b),
                (p[8] = e))
              : (e = p[8]),
              (c = m.map(e)),
              (p[4] = m),
              (p[5] = b),
              (p[6] = c))
          } else c = p[6]
          return (
            p[9] !== m.length || p[10] !== g
              ? ((h =
                  null != g
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          m.length > 0 ? (0, r.jsx)(u.I, { className: "shrink-0", asset: s.q }) : null,
                          (0, r.jsx)("span", {
                            "aria-current": "page",
                            className:
                              "flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-default",
                            children: g,
                          }),
                        ],
                      })
                    : null),
                (p[9] = m.length),
                (p[10] = g),
                (p[11] = h))
              : (h = p[11]),
            p[12] !== t || p[13] !== i || p[14] !== c || p[15] !== h
              ? ((f = (0, r.jsxs)("nav", { "aria-label": t, className: i, children: [c, h] })),
                (p[12] = t),
                (p[13] = i),
                (p[14] = c),
                (p[15] = h),
                (p[16] = f))
              : (f = p[16]),
            f
          )
        },
      },
    )
  },
  GKsW(e, t, i) {
    var r = i("ABep"),
      n = i("QosV"),
      s = i("zTeN"),
      a = i("zd8w"),
      o = i("GaA7"),
      l = i("OWtl"),
      u = i("Oj9r"),
      d = i("n5oN")
    let c = (0, s.vP)(l.u, () => [])
    function h(e) {
      let t,
        i,
        r,
        u,
        d,
        h,
        g = (0, n.c)(13),
        { title: b, nativeTitle: _ } = e,
        y = void 0 === _ ? b : _,
        v = (0, s.gh)(l.u),
        [x] = (0, a.useState)(f)
      return (
        g[0] !== y || g[1] !== x || g[2] !== v || g[3] !== b
          ? ((t = () => {
              if (o.appServices?.windowTitle == null) return
              let e = { owner: x, title: null == b ? void 0 : (y ?? null) }
              ;(v.set(c, (t) => (t.some((e) => e.owner === x) ? t.map((t) => (t.owner === x ? e : t)) : [...t, e])),
                m(v))
            }),
            (i = [v, x, b, y]),
            (g[0] = y),
            (g[1] = x),
            (g[2] = v),
            (g[3] = b),
            (g[4] = t),
            (g[5] = i))
          : ((t = g[4]), (i = g[5])),
        (0, a.useEffect)(t, i),
        g[6] !== x || g[7] !== v
          ? ((r = () => () => {
              o.appServices?.windowTitle != null && (v.set(c, (e) => e.filter((e) => e.owner !== x)), m(v))
            }),
            (u = [v, x]),
            (g[6] = x),
            (g[7] = v),
            (g[8] = r),
            (g[9] = u))
          : ((r = g[8]), (u = g[9])),
        (0, a.useEffect)(r, u),
        g[10] !== b
          ? ((d = () => {
              if (null == b) return
              let e = document.title
              p(b)
              let t = document.title
              return () => {
                document.title === t && p(e)
              }
            }),
            (h = [b]),
            (g[10] = b),
            (g[11] = d),
            (g[12] = h))
          : ((d = g[11]), (h = g[12])),
        (0, a.useEffect)(d, h),
        null
      )
    }
    function f() {
      return Symbol()
    }
    function p(e) {
      let t = document.head.querySelector("title")?.firstChild
      t instanceof Text && null == t.nextSibling ? (t.data = e) : (document.title = e)
    }
    function m(e) {
      o.appServices.windowTitle?.setTitle(e.get(c).findLast((e) => void 0 !== e.title)?.title ?? null)
    }
    i.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            i = (0, n.c)(2),
            { title: a } = e,
            o = (0, s.gh)(u.GD),
            l = (0, s._U)(d.m, `${o.value.pathname}${o.value.search ?? ""}`),
            c = a ?? l
          return (i[0] !== c ? ((t = (0, r.jsx)(h, { title: c })), (i[0] = c), (i[1] = t)) : (t = i[1]), t)
        },
        Q: h,
      },
    )
  },
  Jqpj(e, t, i) {
    var r = i("ABep"),
      n = i("QosV"),
      s = i("slpy"),
      a = i("on57"),
      o = i("zd8w"),
      l = i("HZfM"),
      u = i("TjgH")
    function d(e) {
      let t,
        i,
        a,
        o,
        l,
        u,
        d,
        c = (0, n.c)(14)
      ;(c[0] !== e
        ? (({ disabled: t, onClick: i, onKeyDown: a, tooltip: l, ...o } = e),
          (c[0] = e),
          (c[1] = t),
          (c[2] = i),
          (c[3] = a),
          (c[4] = o),
          (c[5] = l))
        : ((t = c[1]), (i = c[2]), (a = c[3]), (o = c[4]), (l = c[5])),
        c[6] !== t || c[7] !== i || c[8] !== a || c[9] !== o
          ? ((u =
              null != i || t
                ? (0, r.jsx)("div", {
                    ...o,
                    "aria-disabled": t || void 0,
                    role: "button",
                    tabIndex: 0,
                    onClick: t ? void 0 : i,
                    onKeyDown: t ? void 0 : a,
                  })
                : (0, r.jsx)("div", { ...o, tabIndex: -1 })),
            (c[6] = t),
            (c[7] = i),
            (c[8] = a),
            (c[9] = o),
            (c[10] = u))
          : (u = c[10]))
      let h = u
      return (
        c[11] !== h || c[12] !== l
          ? ((d = null == l ? h : (0, r.jsx)(s.m, { content: l, children: h })), (c[11] = h), (c[12] = l), (c[13] = d))
          : (d = c[13]),
        d
      )
    }
    function c(e, t) {
      return "string" == typeof e
        ? (0, r.jsx)(u.E, { variant: "outline", children: e }, e)
        : (0, r.jsx)("span", { className: "flex items-center", children: e }, t)
    }
    i.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            i,
            s,
            u,
            h,
            f,
            p,
            m,
            g,
            b,
            _,
            y,
            v,
            x,
            w,
            k,
            C,
            S,
            j,
            A = (0, n.c)(85),
            {
              ref: E,
              icon: z,
              title: I,
              description: N,
              contentClassName: F,
              descriptionClassName: T,
              descriptionPlacement: D,
              badges: O,
              actions: P,
              actionsPlacement: B,
              trailing: M,
              disabled: R,
              onClick: L,
              tooltip: U,
              to: W,
              iconContainer: Z,
              iconContainerVariant: q,
              iconPlacement: H,
              isHighlighted: V,
              presentation: $,
              className: G,
            } = e,
            K = void 0 === D ? "stacked" : D,
            Q = void 0 !== R && R,
            X = void 0 === Z || Z,
            Y = void 0 === q ? "filled" : q,
            J = void 0 === H ? "outside" : H,
            ee = void 0 !== V && V,
            et = void 0 === $ ? "card" : $,
            ei = (0, o.useId)()
          A[0] !== L
            ? ((t = (e) => {
                L &&
                  e.target === e.currentTarget &&
                  ("Enter" === e.key || " " === e.key) &&
                  (e.preventDefault(), e.currentTarget.click())
              }),
              (A[0] = L),
              (A[1] = t))
            : (t = A[1])
          let er = t,
            en = "row" === et || "directory-row" === et,
            es = "compact-row" === et,
            ea = (es || "center" === (void 0 === B ? "top" : B)) && !!P
          A[2] !== P || A[3] !== es || A[4] !== W
            ? ((i = P
                ? (0, r.jsx)("div", {
                    className: (0, a.A)(
                      "flex shrink-0 items-center",
                      es && "max-w-1/2",
                      null != W && "pointer-events-auto relative z-10",
                    ),
                    children: P,
                  })
                : null),
              (A[2] = P),
              (A[3] = es),
              (A[4] = W),
              (A[5] = i))
            : (i = A[5])
          let eo = i
          A[6] !== z || A[7] !== X || A[8] !== Y || A[9] !== es || A[10] !== en
            ? ((s = z
                ? X
                  ? (0, r.jsx)("span", {
                      className: (0, a.A)(
                        "flex shrink-0 items-center justify-center",
                        es && "size-13 rounded-2xl",
                        !es && (en ? "size-9 rounded-lg" : "size-10 rounded-lg"),
                        "outline" === Y ? "border border-default bg-transparent" : "bg-surface-secondary",
                      ),
                      children: es
                        ? (0, r.jsx)("span", { className: "flex size-8 items-center justify-center", children: z })
                        : z,
                    })
                  : (0, r.jsx)("span", { className: "shrink-0", children: z })
                : null),
              (A[6] = z),
              (A[7] = X),
              (A[8] = Y),
              (A[9] = es),
              (A[10] = en),
              (A[11] = s))
            : (s = A[11])
          let el = s,
            eu = null == W && Q,
            ed = null != W && "relative"
          A[12] !== G || A[13] !== ee || A[14] !== en || A[15] !== L || A[16] !== et || A[17] !== ed
            ? ((u = (0, a.A)(
                "flex flex-col gap-2.5",
                ed,
                {
                  catalog: "h-full min-h-40 rounded-2xl border border-default p-5 hover:bg-secondary-ghost-hover",
                  featured: "h-full rounded-xl bg-surface-secondary px-7 py-8 hover:bg-secondary-ghost-hover",
                  ranked: "min-h-24 rounded-xl px-3 py-4 hover:bg-secondary-ghost-hover",
                  related: "min-h-24 rounded-xl bg-surface px-3 py-4 hover:bg-secondary-ghost-hover",
                  row: "rounded-[var(--radius-token-row)]",
                  "compact-row": "min-h-14 w-full min-w-0 justify-center",
                  "directory-row": "rounded-2xl",
                  card: "border-border/40 rounded-2xl border p-2 hover:bg-text/5",
                }[et],
                en &&
                  "min-h-[var(--height-token-row)] w-full min-w-0 justify-center px-[var(--padding-row-x)] py-[var(--padding-row-y)]",
                en && L && "hover:bg-secondary-ghost-hover",
                ee && "bg-text/5",
                L ? "cursor-interaction" : null,
                L &&
                  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0",
                G,
              )),
              (A[12] = G),
              (A[13] = ee),
              (A[14] = en),
              (A[15] = L),
              (A[16] = et),
              (A[17] = ed),
              (A[18] = u))
            : (u = A[18])
          let ec = ee ? "true" : void 0,
            eh = null == W ? L : void 0,
            ef = null == W ? er : void 0
          A[19] !== Q || A[20] !== L || A[21] !== ei || A[22] !== W
            ? ((h =
                null == W || Q
                  ? null
                  : (0, r.jsx)(l.N_, {
                      className:
                        "absolute inset-0 cursor-interaction rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-inset",
                      "aria-labelledby": ei,
                      to: W,
                      onClick: L,
                      onAuxClick: (e) => {
                        1 === e.button && L?.(e)
                      },
                    })),
              (A[19] = Q),
              (A[20] = L),
              (A[21] = ei),
              (A[22] = W),
              (A[23] = h))
            : (h = A[23])
          let ep = es ? "gap-4" : "gap-3",
            em = null != W && "pointer-events-none",
            eg = "catalog" === et ? "items-start" : "items-center",
            eb = "inline" === K && "gap-2"
          A[24] !== ep || A[25] !== em || A[26] !== eg || A[27] !== eb
            ? ((f = (0, a.A)("flex", ep, em, eg, eb)),
              (A[24] = ep),
              (A[25] = em),
              (A[26] = eg),
              (A[27] = eb),
              (A[28] = f))
            : (f = A[28])
          let e_ = "outside" === J ? el : null,
            ey = ea && "items-center",
            ev = ea && (es ? "gap-4" : "gap-3")
          A[29] !== ey || A[30] !== ev
            ? ((p = (0, a.A)("flex min-w-0 flex-1", ey, ev)), (A[29] = ey), (A[30] = ev), (A[31] = p))
            : (p = A[31])
          let ex = "stacked" === K ? "flex-col" : "items-center gap-3"
          A[32] !== F || A[33] !== ex
            ? ((m = (0, a.A)("flex min-w-0 flex-1 justify-center gap-0.5", ex, F)),
              (A[32] = F),
              (A[33] = ex),
              (A[34] = m))
            : (m = A[34])
          let ew = "inline" === K && "w-28 shrink-0 sm:w-48",
            ek = ea || "inline" === J ? null : "justify-between"
          A[35] !== ew || A[36] !== ek
            ? ((g = (0, a.A)("flex min-w-0 items-center gap-2", ew, ek)), (A[35] = ew), (A[36] = ek), (A[37] = g))
            : (g = A[37])
          let eC = "inline" === J ? el : null,
            eS = es ? "min-w-0 text-lg leading-6 wrap-break-word" : "truncate",
            ej = en ? "text-[length:var(--detail-row-font-size,var(--text-base))]" : "font-medium",
            eA = "catalog" === et && "text-base font-semibold"
          ;(A[38] !== eS || A[39] !== ej || A[40] !== eA
            ? ((b = (0, a.A)("text-default", eS, ej, eA)), (A[38] = eS), (A[39] = ej), (A[40] = eA), (A[41] = b))
            : (b = A[41]),
            A[42] !== b || A[43] !== I || A[44] !== ei
              ? ((_ = (0, r.jsx)("div", { id: ei, className: b, children: I })),
                (A[42] = b),
                (A[43] = I),
                (A[44] = ei),
                (A[45] = _))
              : (_ = A[45]),
            A[46] !== O || A[47] !== W
              ? ((y = O?.length
                  ? (0, r.jsx)("div", {
                      className: (0, a.A)(
                        "flex shrink-0 items-center gap-1",
                        null != W && "pointer-events-auto relative z-10",
                      ),
                      children: O.map(c),
                    })
                  : null),
                (A[46] = O),
                (A[47] = W),
                (A[48] = y))
              : (y = A[48]),
            A[49] !== _ || A[50] !== y
              ? ((v = (0, r.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [_, y] })),
                (A[49] = _),
                (A[50] = y),
                (A[51] = v))
              : (v = A[51]))
          let eE = ea ? null : eo
          ;(A[52] !== g || A[53] !== eC || A[54] !== v || A[55] !== eE
            ? ((x = (0, r.jsxs)("div", { className: g, children: [eC, v, eE] })),
              (A[52] = g),
              (A[53] = eC),
              (A[54] = v),
              (A[55] = eE),
              (A[56] = x))
            : (x = A[56]),
            A[57] !== N || A[58] !== T || A[59] !== K || A[60] !== es
              ? ((w = N
                  ? (0, r.jsx)("div", {
                      className: (0, a.A)(
                        "text-secondary",
                        es ? "truncate text-suggestion-description" : "text-sm leading-relaxed",
                        "inline" === K ? "min-w-0 flex-1 truncate text-start" : null,
                        T ?? (!es && "line-clamp-3"),
                      ),
                      children: N,
                    })
                  : null),
                (A[57] = N),
                (A[58] = T),
                (A[59] = K),
                (A[60] = es),
                (A[61] = w))
              : (w = A[61]),
            A[62] !== m || A[63] !== x || A[64] !== w
              ? ((k = (0, r.jsxs)("div", { className: m, children: [x, w] })),
                (A[62] = m),
                (A[63] = x),
                (A[64] = w),
                (A[65] = k))
              : (k = A[65]))
          let ez = ea ? eo : null
          return (
            A[66] !== p || A[67] !== k || A[68] !== ez
              ? ((C = (0, r.jsxs)("div", { className: p, children: [k, ez] })),
                (A[66] = p),
                (A[67] = k),
                (A[68] = ez),
                (A[69] = C))
              : (C = A[69]),
            A[70] !== f || A[71] !== e_ || A[72] !== C || A[73] !== M
              ? ((S = (0, r.jsxs)("div", { className: f, children: [e_, C, M] })),
                (A[70] = f),
                (A[71] = e_),
                (A[72] = C),
                (A[73] = M),
                (A[74] = S))
              : (S = A[74]),
            A[75] !== E ||
            A[76] !== eu ||
            A[77] !== u ||
            A[78] !== ec ||
            A[79] !== eh ||
            A[80] !== ef ||
            A[81] !== h ||
            A[82] !== S ||
            A[83] !== U
              ? ((j = (0, r.jsxs)(d, {
                  ref: E,
                  disabled: eu,
                  tooltip: U,
                  className: u,
                  "data-search-result-active": ec,
                  onClick: eh,
                  onKeyDown: ef,
                  children: [h, S],
                })),
                (A[75] = E),
                (A[76] = eu),
                (A[77] = u),
                (A[78] = ec),
                (A[79] = eh),
                (A[80] = ef),
                (A[81] = h),
                (A[82] = S),
                (A[83] = U),
                (A[84] = j))
              : (j = A[84]),
            j
          )
        },
      },
    )
  },
  seej(e, t, i) {
    i.d(t, { PluginEditorPage: () => eY })
    var r = i("ABep"),
      n = i("QosV"),
      s = i("zTeN"),
      a = i("zd8w"),
      o = i("oyxz"),
      l = i("Wf1j"),
      u = i("HZfM"),
      d = i("bJfu"),
      c = i("OiCI"),
      h = i("SPnB"),
      f = i("EOo5"),
      p = i("Sm6l"),
      m = i("FrrB"),
      g = i("PkPj"),
      b = i("GKsW"),
      _ = i("qAwZ"),
      y = i("sZSa"),
      v = i("m0u5"),
      x = i("oVqR"),
      w = i("k7G6"),
      k = i("JYRT"),
      C = i("ARVD"),
      S = i("eShZ"),
      j = i("lkCH"),
      A = i("smHt"),
      E = i("QkVB")
    class z extends Error {
      downloadLimit
      constructor(e) {
        ;(super("Plugin archive exceeds preview limits"), (this.downloadLimit = e))
      }
    }
    var I = i("zKw6"),
      N = i.n(I),
      F = i("bVeK"),
      T = i("Q8Dv"),
      D = i("FAUo"),
      O = i("CTmO"),
      P = i("czpb"),
      B = i("svjy"),
      M = i("d635"),
      R = i("Oj9r"),
      L = i("JzMC"),
      U = i("LH8k"),
      W = i("XbWW"),
      Z = i.n(W)
    class q extends Error {}
    var H = i("Qgfj")
    let V = (0, H.YK)({
      modified: {
        id: "plugins.editor.modified",
        defaultMessage: "modified",
        description: "Label next to a file with unpublished edits",
      },
      add: {
        id: "plugins.editor.addFile",
        defaultMessage: "Add file",
        description: "Action to add a file to the plugin archive",
      },
      rename: {
        id: "plugins.editor.rename",
        defaultMessage: "Rename",
        description: "Action to rename a file or folder within its current folder",
      },
      newFolder: {
        id: "plugins.editor.newFolder",
        defaultMessage: "New folder",
        description: "Action to create an empty folder in the plugin archive",
      },
      createFolder: {
        id: "plugins.editor.createFolder",
        defaultMessage: "Create",
        description: "Confirm creation of an empty folder in the plugin archive",
      },
      invalidName: {
        id: "plugins.editor.invalidName",
        defaultMessage: "Enter a name without slashes; it cannot be “.” or “..”",
        description: "Validation error when renaming a file or folder with an invalid individual name",
      },
      renameFailed: {
        id: "plugins.editor.renameFailed",
        defaultMessage: "Couldn’t rename this item. Check the name and make sure it doesn’t already exist",
        description: "Error when inline renaming a file or folder is rejected",
      },
      invalidPath: {
        id: "plugins.editor.invalidPath",
        defaultMessage: "Enter a relative file path using forward slashes, such as skills/example/SKILL.md.",
        description: "Validation error for an invalid path inside a plugin archive",
      },
      conflict: {
        id: "plugins.editor.pathConflict",
        defaultMessage: "That path conflicts with an existing file or folder. Choose a different path.",
        description: "Validation error when a plugin path would overwrite an entry",
      },
      fileTooLarge: {
        id: "plugins.editor.fileTooLarge",
        defaultMessage: "Choose a file no larger than {limit}.",
        description: "Error when the chosen file is too large to add to a plugin",
      },
      archiveLimit: {
        id: "plugins.editor.addFileLimit",
        defaultMessage: "Adding this file would exceed the archive’s file count or size limit.",
        description: "Error when there is no space for another plugin file",
      },
      readFailed: {
        id: "plugins.editor.readFileFailed",
        defaultMessage: "Couldn’t read that file. Choose it again and retry.",
        description: "Error reading a local file for the plugin editor",
      },
      unavailable: {
        id: "plugins.editor.changeUnavailable",
        defaultMessage: "This file can’t be changed in the current editor session.",
        description: "Error when the plugin editor can no longer apply a file change",
      },
    })
    function $(e, t, i) {
      let r = e.split("/")
      if (
        e !== e.trim() ||
        "__proto__" === e ||
        e.includes("\\") ||
        e.includes("\0") ||
        /^[a-z]:/i.test(e) ||
        r.length > 20 ||
        new TextEncoder().encode(e).byteLength > 65535 ||
        r.some((e) => "" === e || "." === e || ".." === e) ||
        (i?.endsWith("/") && e.startsWith(i))
      )
        return "invalidPath"
      for (let e of t) {
        if (e === i || (i?.endsWith("/") && e.startsWith(i))) continue
        let t = e.split("/"),
          n = 0
        for (; n < r.length && r[n] === t[n];) n++
        if (n === r.length || n === t.length || r[n].normalize().toLowerCase() === t[n].normalize().toLowerCase())
          return "conflict"
      }
      return null
    }
    function G(e, t, i) {
      let r = $(t, i, e)
      if (null != r || !e.endsWith("/")) return r
      for (let r of i)
        if (r.startsWith(e) && null != $(`${t}/${r.slice(e.length)}`.replace(/\/$/, ""), [])) return "invalidPath"
      return null
    }
    var K = i("V6Hu"),
      Q = i("ASxG")
    let X =
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*))*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/
    function Y(e) {
      let t = X.exec(e)
      return null == t || t[0] !== e
        ? null
        : { major: BigInt(t[1]), minor: BigInt(t[2]), patch: BigInt(t[3]), prerelease: t[4]?.split(".") ?? [] }
    }
    let J = ".codex-plugin/plugin.json",
      ee = ["plugin.json", J],
      et = Q.object({
        displayName: Q.string().optional(),
        shortDescription: Q.string().optional(),
        longDescription: Q.string().optional(),
      }),
      ei = Q.object({
        $schema: Q.unknown().optional(),
        version: Q.unknown().optional(),
        name: Q.string().optional(),
        description: Q.string().optional(),
        skills: Q.union([Q.string(), Q.array(Q.string())]).nullish(),
        interface: et.optional(),
        extensions: Q.object({ "com.openai": Q.object({ interface: et.optional() }).optional() }).optional(),
      })
    function er(e, t, i) {
      let r = en(e, i, ei.pick({ $schema: !0, version: !0 }))
      if ("string" == typeof r) return r
      let n = ea(r).core,
        s = null == t ? null : Y(t)
      if (null == s)
        return i.formatMessage({
          id: "plugins.editor.publishDialog.checkFailed",
          defaultMessage: "Couldn’t check the published version. Try again.",
          description: "Error when the current published plugin version cannot be read",
        })
      let a = "string" == typeof n.value.version ? n.value.version : null,
        o = null == a ? null : Y(a)
      if (
        null == a ||
        null == o ||
        0 >=
          (function (e, t) {
            for (let i of ["major", "minor", "patch"]) if (e[i] !== t[i]) return e[i] > t[i] ? 1 : -1
            if (0 === e.prerelease.length || 0 === t.prerelease.length)
              return Number(t.prerelease.length > 0) - Number(e.prerelease.length > 0)
            for (let i = 0; i < Math.min(e.prerelease.length, t.prerelease.length); i++) {
              let r = e.prerelease[i],
                n = t.prerelease[i]
              if (r === n) continue
              let s = /^\d+$/.test(r),
                a = /^\d+$/.test(n)
              if (s && a) return BigInt(r) > BigInt(n) ? 1 : -1
              if (s !== a) return s ? -1 : 1
              return r > n ? 1 : -1
            }
            return Math.sign(e.prerelease.length - t.prerelease.length)
          })(o, s)
      )
        return { version: a, nextVersion: `${s.major}.${s.minor + 1n}.0` }
      return { version: a, nextVersion: null }
    }
    function en(e, t, i = ei) {
      if (0 === e.length)
        return t.formatMessage({
          id: "plugins.editor.form.missingManifest",
          defaultMessage: "No plugin manifest found. Use the full editor to add plugin.json.",
          description: "The simple plugin form needs a manifest file in the archive",
        })
      let r = []
      for (let n of e)
        try {
          r.push({ file: n, value: i.parse(JSON.parse(eo(n))) })
        } catch {
          return t.formatMessage(
            {
              id: "plugins.editor.form.invalidManifest",
              defaultMessage: "Couldn’t read {path}. Use the full editor to fix the manifest.",
              description: "The simple plugin form cannot read a malformed manifest; path is the filename",
            },
            { path: n.path },
          )
        }
      return r
    }
    function es(e) {
      let { core: t, extension: i, portable: r } = ea(e)
      return {
        displayName: i?.interface?.displayName ?? t.value.name ?? "",
        description:
          [i?.interface?.longDescription, t.value.description, r?.value.name, i?.interface?.shortDescription].find(
            (e) => e?.trim(),
          ) ?? "",
      }
    }
    function ea(e) {
      let t = e.find(el),
        i = e.find(({ file: e }) => e.path === J),
        r = t ?? i ?? e[0],
        n = t ? (t.value.extensions?.["com.openai"] ?? i?.value) : r.value
      return { core: r, extension: n, portable: t, overlay: i }
    }
    function eo(e) {
      return "string" == typeof e.content
        ? e.content
        : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }).decode(e.content)
    }
    function el({ file: e, value: t }) {
      return "plugin.json" === e.path && "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json" === t.$schema
    }
    function eu(e, t, i) {
      let r = (0, K.cZ)(e),
        n = 0
      for (; null != r && n < t.length;) {
        let e = r.children?.findLast((e) => "property" === e.type && e.children?.[0].value === t[n]),
          i = e?.children?.[1]
        if (null == i) break
        ;((r = i), n++)
      }
      if (null == r) return e
      if (n === t.length) return (0, K.ct)(e, [{ offset: r.offset, length: r.length, content: JSON.stringify(i) }])
      let s = (0, K.JP)(e.slice(r.offset, r.offset + r.length), t.slice(n), i, {
          formattingOptions: { insertSpaces: !0, tabSize: 2, eol: e.includes("\r\n") ? "\r\n" : "\n" },
        }),
        a = r.offset
      return (0, K.ct)(
        e,
        s.map((e) => ({ ...e, offset: a + e.offset })),
      )
    }
    var ed = i("HwQY")
    let { posix: ec } = N(),
      eh = Q.object({
        name: Q.string().trim().min(1).optional(),
        description: Q.string().optional(),
        metadata: Q.object({ "short-description": Q.string().optional() }).optional(),
      })
    function ef(e, t) {
      let i = []
      for (let [r, n] of e) {
        if (r.endsWith("/") || "SKILL.md" !== ec.basename(r)) continue
        let s = ec.dirname(r)
        if (
          "." === s ||
          !t.some((t) =>
            (function (e, t, i) {
              let r = ec.relative(t.path, i)
              if (".." === r || r.startsWith("../") || ec.isAbsolute(r)) return !1
              let n = r.split("/").filter(Boolean)
              if (n.some((e) => e.startsWith("."))) return !1
              if (!t.recursive) return 1 === n.length
              let s = t.path
              for (let t of n) {
                if (e.has(ec.join(s, "SKILL.md"))) return !1
                s = ec.join(s, t)
              }
              return !0
            })(e, t, s),
          )
        )
          continue
        let a = ec.basename(s),
          o = ""
        try {
          let e =
              "string" == typeof n.content
                ? n.content.slice(0, 1048576)
                : new TextDecoder().decode(n.content.subarray(0, 1048576)),
            t = /^\uFEFF?---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/.exec(e)
          if (null != t) {
            let e = eh.parse((0, ed.qg)(t[1]))
            ;((a = e.name ?? a), (o = e.metadata?.["short-description"] ?? e.description ?? ""))
          }
        } catch {}
        i.push({ path: s, name: a, description: o })
      }
      return i.sort((e, t) => e.path.localeCompare(t.path))
    }
    let ep = { status: "loading" },
      em = (0, s.T1)(
        R.GD,
        ({ pluginId: e, accountId: t, maxBytes: r }, { signal: n, derived: s, scope: a }) => {
          let o,
            l = new Map(),
            u = n(ep, {
              onMount(n) {
                if (null == t) return
                let s = new AbortController()
                return (
                  (o = s.signal),
                  (async function (e, t, r, n) {
                    try {
                      let s = await (0, E.a)(e, t, r, n)
                      return await (async function (e, t) {
                        t.throwIfAborted()
                        let r = new Worker(
                            new URL(i.p + i.u(606393), i.b),
                            Object.assign({}, { type: "module" }, { type: "module" }),
                          ),
                          { promise: n, resolve: s, reject: a } = (0, j.u)(),
                          o = () => a(t.reason)
                        t.addEventListener("abort", o, { once: !0 })
                        try {
                          let t = () => a(Error("Could not unpack plugin archive"))
                          return (
                            (r.onerror = t),
                            (r.onmessageerror = t),
                            (r.onmessage = ({ data: e }) => {
                              "too-large" === e
                                ? a(new z())
                                : "invalid" === e
                                  ? a(Error("Invalid plugin archive"))
                                  : s(e)
                            }),
                            r.postMessage(e),
                            await n
                          )
                        } finally {
                          ;(t.removeEventListener("abort", o), r.terminate())
                        }
                      })(s, n)
                    } catch (e) {
                      if (e instanceof A.m5) throw new z(r)
                      throw e
                    }
                  })(e, t, r, s.signal)
                    .then((e) => {
                      if (s.signal.aborted) return
                      for (let { path: t, bytes: i, unixPermissions: r } of e)
                        l.set(t, { path: t, content: i, byteLength: i.byteLength, unixPermissions: r })
                      let t = Array.from(l.keys()),
                        i = l.has(J) ? J : t.find((e) => !e.endsWith("/"))
                      n({
                        status: "ready",
                        paths: t,
                        modifiedPaths: new Set(),
                        publishStatus: "idle",
                        publishError: null,
                        revealPath: i,
                        selectedFile: null == i ? void 0 : m(i),
                      })
                    })
                    .catch((e) => {
                      s.signal.aborted || n({ status: "error", error: e })
                    }),
                  () => {
                    ;(s.abort(), l.clear(), n(ep))
                  }
                )
              },
            }),
            d = s(
              (e) =>
                "ready" !== e(u).status
                  ? []
                  : ee.flatMap((e) => {
                      let t = l.get(e)
                      return null == t ? [] : [t]
                    }),
              { isEqual: (e, t) => e.length === t.length && e.every((e, i) => e === t[i]) },
            ),
            c = s((e) =>
              (function (e, t) {
                let i = en(e, t)
                if ("string" == typeof i) return i
                let { core: r, portable: n } = ea(i),
                  s = [{ path: "skills", recursive: !1 }],
                  a = null == n ? r.value.skills : null
                for (let e of "string" == typeof a ? [a] : (a ?? [])) {
                  let i = e.replaceAll("\\", "/")
                  if (
                    e.trim() !== e ||
                    !e ||
                    Array.from(e).some((e) => e < " " || "" === e) ||
                    N().posix.isAbsolute(i) ||
                    i.split("/").includes("..")
                  )
                    return t.formatMessage(
                      {
                        id: "plugins.editor.skills.invalidDirectory",
                        defaultMessage:
                          "Couldn’t read skills from {path}. Use the full editor to fix the skills path in plugin.json",
                        description:
                          "Error when a plugin declares a skills directory outside its archive or an invalid directory path",
                      },
                      { path: e },
                    )
                  s.push({ path: N().posix.normalize(i).replace(/\/$/, ""), recursive: !0 })
                }
                return s
              })(e(d), a.get(B.g)),
            ),
            h = s(
              (e) => {
                e(u)
                let t = e(c)
                return "string" == typeof t ? t : ef(l, t)
              },
              { isEqual: P.isEqual },
            )
          function f(e, t = !1) {
            let i = a.get(u),
              r = t ? a.get(c) : []
            if (o?.aborted !== !1 || "ready" !== i.status || eg(i.publishStatus) || "string" == typeof r) return
            let n = new Set(i.modifiedPaths)
            for (let t of l.keys()) (t === e || (e.endsWith("/") && t.startsWith(e))) && (l.delete(t), n.add(t))
            for (let e of r) {
              let t = `${e.path}/`
              e.recursive &&
                "." !== e.path &&
                i.paths.some((e) => e.startsWith(t)) &&
                !Array.from(l.keys()).some((e) => e.startsWith(t)) &&
                l.set(t, { path: t, content: new Uint8Array(), byteLength: 0 })
            }
            let s = N().posix.dirname(e.replace(/\/$/, "")),
              d = "." === s ? "" : `${s}/`,
              h = Array.from(l.keys()).sort(),
              p =
                null != i.selectedFile && l.has(i.selectedFile.path)
                  ? i.selectedFile.path
                  : (h.find((e) => !e.endsWith("/") && (t || e.startsWith(d))) ?? h.find((e) => !e.endsWith("/")))
            a.set(u, {
              ...i,
              paths: h,
              selectedFile: null == p ? void 0 : m(p),
              revealPath: p,
              modifiedPaths: n,
              publishStatus: "idle",
              publishError: null,
            })
          }
          function p(e) {
            let t = a.get(u)
            if ("ready" !== t.status || eg(t.publishStatus) || 0 === e.length) return
            let i = new Set(t.modifiedPaths)
            for (let t of e) (l.set(t.path, t), i.add(t.path))
            a.set(u, {
              ...t,
              selectedFile: t.selectedFile && l.get(t.selectedFile.path),
              modifiedPaths: i,
              publishStatus: "idle",
              publishError: null,
            })
          }
          function m(e) {
            if (e.endsWith("/")) return
            let t = l.get(e)
            if (null == t || "string" == typeof t.content) return t
            let i = (function (e) {
              if (e.includes(0)) return null
              try {
                return new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }).decode(e)
              } catch {
                return null
              }
            })(t.content)
            if (null == i) return t
            let r = { ...t, content: i }
            return (l.set(e, r), r)
          }
          async function g(e) {
            let t = o,
              i = a.get(u)
            if (null == t || t.aborted || "ready" !== i.status || eg(i.publishStatus)) return "unavailable"
            let r = "rename" === e.kind ? G(e.from, e.path, i.paths) : $(e.path, i.paths)
            if (null != r) return r
            let n = new Set(i.modifiedPaths),
              s = e.path,
              d = e.path
            if ("rename" === e.kind) {
              let t = e.from.endsWith("/"),
                r = i.paths.filter((i) => i === e.from || (t && i.startsWith(e.from)))
              if (0 === r.length) return "unavailable"
              if (e.path === e.from.replace(/\/$/, "")) return null
              let a = []
              for (let i of r) {
                let r = t ? `${e.path}/${i.slice(e.from.length)}` : e.path,
                  n = l.get(i)
                null != n && a.push({ ...n, path: r })
              }
              for (let e of r) (l.delete(e), n.delete(e))
              for (let e of a) (l.set(e.path, e), n.add(e.path))
              if (t) {
                let t = i.selectedFile?.path
                ;((s = t?.startsWith(e.from) ? `${e.path}/${t.slice(e.from.length)}` : (t ?? e.path)),
                  (d = `${e.path}/`))
              }
            } else if ("add-directory" === e.kind) {
              if (l.size >= 5e3) return "archiveLimit"
              let t = `${e.path}/`
              if (new TextEncoder().encode(t).byteLength > 65535) return "invalidPath"
              ;(l.set(t, { path: t, content: "", byteLength: 0 }), n.add(t), (s = i.selectedFile?.path ?? ""), (d = t))
            } else {
              let r = e.upload?.size ?? new Blob([e.content ?? ""]).size
              if (r > 0x6400000) return "fileTooLarge"
              let n = r
              for (let e of l.values())
                n +=
                  i.modifiedPaths.has(e.path) && "string" == typeof e.content
                    ? new Blob([e.content]).size
                    : e.byteLength
              if (l.size >= 5e3 || n > 0x20000000) return "archiveLimit"
              let s = e.content ?? ""
              if (null != e.upload) {
                try {
                  s = new Uint8Array(await e.upload.arrayBuffer())
                } catch {
                  return "readFailed"
                }
                if (t.aborted || a.get(u) !== i) return "unavailable"
              }
              l.set(e.path, { path: e.path, content: s, byteLength: r })
            }
            return (
              n.add(e.path),
              a.set(u, {
                status: "ready",
                paths: Array.from(l.keys()).sort(),
                revealPath: d,
                selectedFile: m(s),
                modifiedPaths: n,
                publishStatus: "idle",
                publishError: null,
              }),
              null
            )
          }
          function b(e, t = null) {
            a.set(u, (i) => ("ready" === i.status ? { ...i, publishStatus: e, publishError: t } : i))
          }
          return {
            state$: u,
            manifestFiles$: d,
            skills$: h,
            addSkill: async function (e) {
              let t = a.get(B.g),
                i = a.get(c)
              if ("string" == typeof i) return i
              let r = (function (e, t, i, r) {
                let n = i.name.trim(),
                  s = i.description.trim(),
                  a = (0, P.kebabCase)(n)
                if (!n || !s || !a)
                  return r.formatMessage({
                    id: "plugins.editor.skills.requiredFields",
                    defaultMessage: "Enter a name with at least one letter or number, and a description",
                    description:
                      "Validation error for creating a skill with a blank description or a name that cannot form a directory name",
                  })
                let o = t.find((e) => e.recursive),
                  l = o?.path ?? "skills"
                for (; null != o && "." !== l && e.has(ec.join(l, "SKILL.md"));) l = ec.dirname(l)
                let u = ec.join(l, a)
                if (
                  ef(e, t).some((e) => e.name === n) ||
                  Array.from(e.keys()).some((e) => e === u || (e.startsWith(`${u}/`) && e !== `${u}/`))
                )
                  return r.formatMessage(
                    {
                      id: "plugins.editor.skills.nameAlreadyExists",
                      defaultMessage: 'A skill or directory with name "{name}" already exists',
                      description:
                        "Error when creating a skill would duplicate a skill name or overwrite an existing directory; name is the normalized directory name, such as travel-planner",
                    },
                    { name: a },
                  )
                let d = (0, ed.As)(
                    { name: n, description: s },
                    {
                      defaultStringType: "QUOTE_DOUBLE",
                      defaultKeyType: "PLAIN",
                      doubleQuotedAsJSON: !0,
                      lineWidth: 0,
                    },
                  ),
                  c = `---
${d}---

`
                return new Blob([c]).size > 1048576
                  ? r.formatMessage({
                      id: "plugins.editor.skills.tooLarge",
                      defaultMessage: "The skill’s name and description must fit within 1 MB",
                      description:
                        "Validation error when a new skill would exceed the backend's one megabyte SKILL.md size limit",
                    })
                  : { kind: "add", path: ec.join(u, "SKILL.md"), content: c, upload: null }
              })(l, i, e, t)
              if ("string" == typeof r) return r
              let n = (function (e, t, i) {
                let r = en(e, i)
                if ("string" == typeof r) return r
                if (null != ea(r).portable) return []
                let n = []
                for (let { file: e, value: i } of r) {
                  if (null == i.skills && "skills" === N().posix.dirname(t)) continue
                  let r = "string" == typeof i.skills ? [i.skills] : (i.skills ?? [])
                  r.some((e) => {
                    let i = N().posix.relative(e.replaceAll("\\", "/"), t)
                    return ".." !== i && !i.startsWith("../") && !N().posix.isAbsolute(i)
                  }) || n.push({ ...e, content: eu(eo(e), ["skills"], [...r, t]) })
                }
                return n
              })(a.get(d), N().posix.dirname(r.path), t)
              if ("string" == typeof n) return n
              let s = await g(r)
              return null != s ? t.formatMessage(V[s], { limit: (0, C.z)(0x6400000, t) }) : (p(n), null)
            },
            deletePath: (e) => f(e),
            deleteSkill: (e) => f(`${e}/`, !0),
            changeFile: g,
            editMetadata: function (e) {
              let t = (function (e, t, i) {
                let r = en(e, i)
                if ("string" == typeof r) return r
                let n = es(r),
                  s = t.displayName !== n.displayName,
                  a = t.description !== n.description
                if (!s && !a) return []
                let o = null != ea(r).overlay,
                  l = []
                for (let { file: e, value: i } of r) {
                  let r = eo(e),
                    n = r,
                    u = el({ file: e, value: i }),
                    d = !u || i.extensions?.["com.openai"] != null || !o,
                    c = u ? ["extensions", "com.openai", "interface"] : ["interface"]
                  ;(s && d && (n = eu(n, [...c, "displayName"], t.displayName)),
                    a &&
                      ((n = eu(n, ["description"], t.description)),
                      d && (n = eu(n, [...c, "longDescription"], t.description))),
                    n !== r && l.push({ ...e, content: n }))
                }
                return l
              })(a.get(d), e, a.get(B.g))
              return "string" == typeof t ? t : (p(t), null)
            },
            fixVersion: function (e) {
              p(
                (function (e, t, i) {
                  let r = er(e, t, i)
                  if ("string" == typeof r || null == r.nextVersion) return []
                  let n = r.nextVersion
                  return e.map((e) => ({ ...e, content: eu(eo(e), ["version"], n) }))
                })(a.get(d), e, a.get(B.g)),
              )
            },
            publish: async function (i) {
              let n = a.get(u),
                s = o
              if (
                null == t ||
                null == s ||
                s.aborted ||
                "ready" !== n.status ||
                0 === n.modifiedPaths.size ||
                eg(n.publishStatus)
              )
                return
              let c = er(a.get(d), i, a.get(B.g))
              if ("string" != typeof c && null == c.nextVersion) {
                b("bundling")
                try {
                  let i = await (async function (e, t, i) {
                    i.throwIfAborted()
                    let r = new (Z())()
                    for (let { path: t, content: i, unixPermissions: n } of e)
                      r.file(t, i, { createFolders: !1, dir: t.endsWith("/"), unixPermissions: n })
                    let n = r.generateInternalStream({
                        type: "uint8array",
                        compression: "DEFLATE",
                        streamFiles: !0,
                        platform: "UNIX",
                      }),
                      s = [],
                      a = 0
                    return new Promise((e, r) => {
                      let o = (e) => {
                          ;(n.pause(), i.removeEventListener("abort", l), r(e))
                        },
                        l = () => o(new DOMException("Plugin bundling aborted", "AbortError"))
                      ;(i.addEventListener("abort", l, { once: !0 }),
                        n
                          .on("data", (e) => {
                            i.aborted
                              ? n.pause()
                              : (a += e.byteLength) > t
                                ? o(new q())
                                : s.push(
                                    e.buffer instanceof ArrayBuffer
                                      ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                                      : Uint8Array.from(e),
                                  )
                          })
                          .on("error", o)
                          .on("end", () => {
                            ;(i.removeEventListener("abort", l),
                              e(new File(s, "plugin.zip", { type: "application/zip" })))
                          })
                          .resume())
                    })
                  })(l.values(), r, s)
                  if (
                    (s.throwIfAborted(),
                    b("uploading"),
                    await (0, M.MD)(e, t, i, r, { signal: s, onPublishing: () => b("publishing") }),
                    s.aborted)
                  )
                    return
                  for (let e of n.modifiedPaths) {
                    let t = l.get(e)
                    null != t &&
                      "string" == typeof t.content &&
                      l.set(e, { ...t, byteLength: new Blob([t.content]).size })
                  }
                  ;(a.set(u, (e) =>
                    "ready" === e.status
                      ? {
                          ...e,
                          selectedFile: e.selectedFile && l.get(e.selectedFile.path),
                          modifiedPaths: new Set(),
                          publishStatus: "published",
                          publishError: null,
                        }
                      : e,
                  ),
                    (0, L.Zi)(a.queryClient))
                } catch (e) {
                  s.aborted ||
                    b(
                      e instanceof q ? "too-large" : "failed",
                      (e instanceof Error && (0, U.d)(e)?.message.trim()) || null,
                    )
                }
              }
            },
            select: (e) => {
              a.set(u, (t) => {
                if ("ready" !== t.status || e === t.selectedFile?.path) return t
                let i = m(e)
                return null == i ? t : { ...t, selectedFile: i }
              })
            },
            edit: (e, t) => {
              a.set(u, (i) => {
                if (
                  "ready" !== i.status ||
                  eg(i.publishStatus) ||
                  i.selectedFile?.path !== e ||
                  "string" != typeof i.selectedFile.content ||
                  i.selectedFile.content === t
                )
                  return i
                let r = { ...i.selectedFile, content: t }
                l.set(e, r)
                let n = i.modifiedPaths.has(e) ? i.modifiedPaths : new Set(i.modifiedPaths).add(e)
                return { ...i, selectedFile: r, modifiedPaths: n, publishStatus: "idle", publishError: null }
              })
            },
          }
        },
        { autoDispose: !0 },
      )
    function eg(e) {
      return "bundling" === e || "uploading" === e || "publishing" === e
    }
    var eb = i("JNtf"),
      e_ = i("mUDD"),
      ey = i("zLIa")
    function ev(e) {
      let t,
        i,
        s,
        u,
        d,
        c,
        h,
        f,
        m,
        g,
        b,
        _,
        y,
        v,
        x,
        w,
        k,
        S,
        j,
        A,
        E,
        z,
        I,
        F,
        T,
        D = (0, n.c)(88),
        { sourcePath: O, newFolder: P, onChangeFile: B, onClose: M } = e,
        R = void 0 !== P && P,
        L = (0, l.A)(),
        U = (0, a.useId)(),
        W = (0, a.useId)(),
        Z = (0, a.useRef)(null)
      D[0] !== O ? ((t = null == O ? "" : N().posix.basename(O)), (D[0] = O), (D[1] = t)) : (t = D[1])
      let q = t,
        [H, G] = (0, a.useState)(q),
        [K, Q] = (0, a.useState)(null),
        [X, Y] = (0, a.useState)(null),
        [J, ee] = (0, a.useState)(!1),
        et = null == O,
        ei = R ? V.newFolder : V.add,
        er = R ? V.createFolder : V.add,
        en = et ? ei : V.rename
      D[2] !== et || D[3] !== R || D[4] !== B || D[5] !== M || D[6] !== H || D[7] !== O || D[8] !== K
        ? ((i = async function () {
            let e
            if (!et && (H.includes("/") || null != $(H, []))) return void Y("invalidName")
            ;(ee(!0),
              (e =
                null != O
                  ? { kind: "rename", from: O, path: N().posix.join(N().posix.dirname(O), H) }
                  : R
                    ? { kind: "add-directory", path: H }
                    : { kind: "add", path: H, upload: K }))
            let t = await B(e)
            null == t ? M() : (ee(!1), Y(t))
          }),
          (D[2] = et),
          (D[3] = R),
          (D[4] = B),
          (D[5] = M),
          (D[6] = H),
          (D[7] = O),
          (D[8] = K),
          (D[9] = i))
        : (i = D[9])
      let es = i
      D[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = { "aria-describedby": void 0 }), (D[10] = s))
        : (s = D[10])
      let ea = !J
      ;(D[11] !== M || D[12] !== J
        ? ((u = (e) => {
            e || J || M()
          }),
          (D[11] = M),
          (D[12] = J),
          (D[13] = u))
        : (u = D[13]),
        D[14] !== J || D[15] !== es
          ? ((d = (e) => {
              ;(e.preventDefault(), J || es())
            }),
            (D[14] = J),
            (D[15] = es),
            (D[16] = d))
          : (d = D[16]),
        D[17] !== en
          ? ((c = (0, r.jsx)(e_.c7, { title: (0, r.jsx)(eb.L3, { children: (0, r.jsx)(o.A, { ...en }) }) })),
            (D[17] = en),
            (D[18] = c))
          : (c = D[18]),
        D[19] !== et
          ? ((h =
              !et &&
              (0, r.jsx)(o.A, {
                id: "plugins.editor.entryName",
                defaultMessage: "Name",
                description: "Label for the individual name of a plugin file or folder being renamed",
              })),
            (D[19] = et),
            (D[20] = h))
          : (h = D[20]),
        D[21] !== et || D[22] !== R
          ? ((f =
              et &&
              R &&
              (0, r.jsx)(o.A, {
                id: "plugins.editor.folderPath",
                defaultMessage: "Folder path",
                description: "Label for the new folder path relative to the editor root",
              })),
            (D[21] = et),
            (D[22] = R),
            (D[23] = f))
          : (f = D[23]),
        D[24] !== et || D[25] !== R
          ? ((m =
              et &&
              !R &&
              (0, r.jsx)(o.A, {
                id: "plugins.editor.filePath",
                defaultMessage: "File path",
                description: "Label for a path relative to the plugin root",
              })),
            (D[24] = et),
            (D[25] = R),
            (D[26] = m))
          : (m = D[26]),
        D[27] !== U || D[28] !== f || D[29] !== m || D[30] !== h
          ? ((g = (0, r.jsxs)("label", { htmlFor: U, className: "text-sm font-medium", children: [h, f, m] })),
            (D[27] = U),
            (D[28] = f),
            (D[29] = m),
            (D[30] = h),
            (D[31] = g))
          : (g = D[31]))
      let eo = "invalidPath" === X || "invalidName" === X || "conflict" === X,
        el = null != X ? W : void 0
      ;(D[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (e) => {
            ;(G(e.currentTarget.value), Y(null))
          }),
          (D[32] = b))
        : (b = D[32]),
        D[33] !== et || D[34] !== L || D[35] !== R
          ? ((_ =
              !et || R
                ? void 0
                : L.formatMessage({
                    id: "plugins.editor.pathPlaceholder",
                    defaultMessage: "skills/example/SKILL.md",
                    description: "Example full path inside a plugin archive",
                  })),
            (D[33] = et),
            (D[34] = L),
            (D[35] = R),
            (D[36] = _))
          : (_ = D[36]),
        D[37] !== H || D[38] !== U || D[39] !== J || D[40] !== eo || D[41] !== el || D[42] !== _
          ? ((y = (0, r.jsx)(ey.pd, {
              id: U,
              autoFocus: !0,
              variant: "outlined",
              value: H,
              disabled: J,
              spellCheck: !1,
              autoCapitalize: "none",
              autoComplete: "off",
              "aria-invalid": eo,
              "aria-describedby": el,
              onChange: b,
              placeholder: _,
            })),
            (D[37] = H),
            (D[38] = U),
            (D[39] = J),
            (D[40] = eo),
            (D[41] = el),
            (D[42] = _),
            (D[43] = y))
          : (y = D[43]),
        D[44] !== g || D[45] !== y
          ? ((v = (0, r.jsxs)(e_.RW, { children: [g, y] })), (D[44] = g), (D[45] = y), (D[46] = v))
          : (v = D[46]),
        D[47] !== et || D[48] !== L || D[49] !== R || D[50] !== H || D[51] !== J || D[52] !== K
          ? ((x =
              et &&
              !R &&
              (0, r.jsxs)(e_.RW, {
                children: [
                  (0, r.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(o.A, {
                      id: "plugins.editor.uploadOptional",
                      defaultMessage: "Choose a file from your computer, or leave this empty to create a text file.",
                      description: "Help for the optional file picker in the add file dialog",
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, r.jsx)(p.$, {
                        type: "button",
                        color: "secondary",
                        size: "secondaryAction",
                        disabled: J,
                        onClick: () => Z.current?.click(),
                        children: (0, r.jsx)(o.A, {
                          id: "plugins.editor.chooseFile",
                          defaultMessage: "Choose file",
                          description: "Open a local file picker",
                        }),
                      }),
                      null != K &&
                        (0, r.jsx)("span", { className: "min-w-0 truncate text-sm text-secondary", children: K.name }),
                      null != K &&
                        (0, r.jsx)(p.$, {
                          type: "button",
                          color: "ghost",
                          size: "compact",
                          disabled: J,
                          onClick: () => {
                            ;(Q(null), Y(null), null != Z.current && (Z.current.value = ""))
                          },
                          children: (0, r.jsx)(o.A, {
                            id: "plugins.editor.removeUpload",
                            defaultMessage: "Clear",
                            description:
                              "Clear the optional upload and keep the file path to create an empty text file",
                          }),
                        }),
                    ],
                  }),
                  (0, r.jsx)("input", {
                    hidden: !0,
                    ref: Z,
                    "aria-label": L.formatMessage({
                      id: "plugins.editor.localFile",
                      defaultMessage: "Local file",
                      description: "Optional local file to add to the plugin archive",
                    }),
                    type: "file",
                    onChange: (e) => {
                      let t = e.currentTarget.files?.[0]
                      null != t && (("" === H || H === K?.name) && G(t.name), Q(t), Y(null))
                    },
                  }),
                ],
              })),
            (D[47] = et),
            (D[48] = L),
            (D[49] = R),
            (D[50] = H),
            (D[51] = J),
            (D[52] = K),
            (D[53] = x))
          : (x = D[53]),
        D[54] !== X || D[55] !== W || D[56] !== L
          ? ((w =
              null != X &&
              (0, r.jsx)("span", {
                id: W,
                role: "alert",
                className: "text-sm text-danger",
                children: (0, r.jsx)(o.A, { ...V[X], values: { limit: (0, C.z)(0x6400000, L) } }),
              })),
            (D[54] = X),
            (D[55] = W),
            (D[56] = L),
            (D[57] = w))
          : (w = D[57]),
        D[58] !== v || D[59] !== x || D[60] !== w
          ? ((k = (0, r.jsxs)(e_.OO, { className: "gap-3", children: [v, x, w] })),
            (D[58] = v),
            (D[59] = x),
            (D[60] = w),
            (D[61] = k))
          : (k = D[61]),
        D[62] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, r.jsx)(o.A, {
              id: "plugins.editor.cancelFileChange",
              defaultMessage: "Cancel",
              description: "Cancel adding or renaming a plugin file",
            })),
            (D[62] = S))
          : (S = D[62]),
        D[63] !== M || D[64] !== J
          ? ((j = (0, r.jsx)(p.$, { type: "button", color: "secondary", disabled: J, onClick: M, children: S })),
            (D[63] = M),
            (D[64] = J),
            (D[65] = j))
          : (j = D[65]),
        D[66] !== et || D[67] !== q || D[68] !== H
          ? ((A = !H.trim() || (!et && H === q)), (D[66] = et), (D[67] = q), (D[68] = H), (D[69] = A))
          : (A = D[69]))
      let eu = et ? er : V.rename
      return (
        D[70] !== eu ? ((E = (0, r.jsx)(o.A, { ...eu })), (D[70] = eu), (D[71] = E)) : (E = D[71]),
        D[72] !== J || D[73] !== A || D[74] !== E
          ? ((z = (0, r.jsx)(p.$, { type: "submit", loading: J, disabled: A, children: E })),
            (D[72] = J),
            (D[73] = A),
            (D[74] = E),
            (D[75] = z))
          : (z = D[75]),
        D[76] !== j || D[77] !== z
          ? ((I = (0, r.jsxs)(e_.Es, { children: [j, z] })), (D[76] = j), (D[77] = z), (D[78] = I))
          : (I = D[78]),
        D[79] !== k || D[80] !== I || D[81] !== d || D[82] !== c
          ? ((F = (0, r.jsxs)(e_.R4, { as: "form", onSubmit: d, children: [c, k, I] })),
            (D[79] = k),
            (D[80] = I),
            (D[81] = d),
            (D[82] = c),
            (D[83] = F))
          : (F = D[83]),
        D[84] !== F || D[85] !== ea || D[86] !== u
          ? ((T = (0, r.jsx)(eb.lG, {
              open: !0,
              size: "compact",
              contentProps: s,
              showDialogClose: ea,
              onOpenChange: u,
              children: F,
            })),
            (D[84] = F),
            (D[85] = ea),
            (D[86] = u),
            (D[87] = T))
          : (T = D[87]),
        T
      )
    }
    var ex = i("QxwI"),
      ew = i("WODk"),
      ek = i("bqtn")
    function eC(e) {
      let t,
        i,
        s,
        a,
        l,
        u,
        d,
        c,
        h,
        f = (0, n.c)(21),
        { context: p, disabled: m, onRename: g, onDelete: b } = e
      return (
        f[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)("span", { "aria-hidden": !0, className: "pointer-events-none absolute inset-0" })),
            (f[0] = t))
          : (t = f[0]),
        f[1] !== p
          ? ((i = (e) => {
              e || p.close()
            }),
            (f[1] = p),
            (f[2] = i))
          : (i = f[2]),
        f[3] !== p || f[4] !== g
          ? ((s = () => {
              ;(p.close({ restoreFocus: !1 }), g())
            }),
            (f[3] = p),
            (f[4] = g),
            (f[5] = s))
          : (s = f[5]),
        f[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(o.A, {
              id: "plugins.editor.fileMenu.rename",
              defaultMessage: "Rename",
              description: "Rename a file or folder inline in the plugin editor",
            })),
            (f[6] = a))
          : (a = f[6]),
        f[7] !== m || f[8] !== s
          ? ((l = (0, r.jsx)(ek.ms.Item, { disabled: m, leftIconAsset: ex.h, onSelect: s, children: a })),
            (f[7] = m),
            (f[8] = s),
            (f[9] = l))
          : (l = f[9]),
        f[10] !== p || f[11] !== b
          ? ((u = () => {
              ;(p.close(), b())
            }),
            (f[10] = p),
            (f[11] = b),
            (f[12] = u))
          : (u = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(o.A, {
              id: "plugins.editor.fileMenu.delete",
              defaultMessage: "Delete",
              description: "Delete a file or a folder and its contents from the plugin editor",
            })),
            (f[13] = d))
          : (d = f[13]),
        f[14] !== m || f[15] !== u
          ? ((c = (0, r.jsx)(ek.ms.Item, {
              disabled: m,
              tone: "danger",
              leftIconAsset: ew.c,
              onSelect: u,
              children: d,
            })),
            (f[14] = m),
            (f[15] = u),
            (f[16] = c))
          : (c = f[16]),
        f[17] !== i || f[18] !== l || f[19] !== c
          ? ((h = (0, r.jsxs)(ek.Ab, {
              open: !0,
              align: "end",
              contentWidth: "xs",
              triggerButton: t,
              contentRef: ej,
              onOpenChange: i,
              onCloseAutoFocus: eS,
              children: [l, c],
            })),
            (f[17] = i),
            (f[18] = l),
            (f[19] = c),
            (f[20] = h))
          : (h = f[20]),
        h
      )
    }
    function eS(e) {
      return e.preventDefault()
    }
    function ej(e) {
      e?.setAttribute("data-file-tree-context-menu-root", "true")
    }
    var eA = i("slpy"),
      eE = i("ripK")
    function ez(e) {
      let t,
        i,
        s,
        a,
        u,
        d,
        c,
        h,
        f,
        g = (0, n.c)(31),
        { file: b, displayPath: _, modified: y, busy: v, onEdit: x, onRename: w } = e,
        k = (0, l.A)()
      g[0] !== k ? ((t = k.formatMessage(V.rename)), (g[0] = k), (g[1] = t)) : (t = g[1])
      let S = t
      if (null == b) {
        let e
        return (
          g[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(m.A, {
                title: (0, r.jsx)(o.A, {
                  id: "plugins.editor.empty",
                  defaultMessage: "This archive has no files",
                  description: "Empty state for a plugin archive without files",
                }),
              })),
              (g[2] = e))
            : (e = g[2]),
          e
        )
      }
      let { content: j } = b
      return (
        g[3] !== _
          ? ((i = (0, r.jsx)("h2", { className: "min-w-0 text-sm font-medium wrap-anywhere", children: _ })),
            (g[3] = _),
            (g[4] = i))
          : (i = g[4]),
        g[5] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, r.jsx)(F.Npl, {})), (g[5] = s)) : (s = g[5]),
        g[6] !== v || g[7] !== w || g[8] !== S
          ? ((a = (0, r.jsx)(p.$, {
              color: "ghost",
              size: "compact",
              uniform: !0,
              "aria-haspopup": "dialog",
              "aria-label": S,
              disabled: v,
              onClick: w,
              children: s,
            })),
            (g[6] = v),
            (g[7] = w),
            (g[8] = S),
            (g[9] = a))
          : (a = g[9]),
        g[10] !== S || g[11] !== a
          ? ((u = (0, r.jsx)(eA.m, { content: S, children: a })), (g[10] = S), (g[11] = a), (g[12] = u))
          : (u = g[12]),
        g[13] !== b.byteLength || g[14] !== k || g[15] !== y
          ? ((d = y
              ? (0, r.jsx)("span", {
                  className: "shrink-0 text-sm text-secondary",
                  children: (0, r.jsx)(o.A, { ...V.modified }),
                })
              : (0, r.jsx)("span", {
                  className: "ms-auto shrink-0 text-sm text-secondary",
                  children: (0, C.z)(b.byteLength, k),
                })),
            (g[13] = b.byteLength),
            (g[14] = k),
            (g[15] = y),
            (g[16] = d))
          : (d = g[16]),
        g[17] !== i || g[18] !== u || g[19] !== d
          ? ((c = (0, r.jsxs)("div", { className: "flex items-center gap-2", children: [i, u, d] })),
            (g[17] = i),
            (g[18] = u),
            (g[19] = d),
            (g[20] = c))
          : (c = g[20]),
        g[21] !== v || g[22] !== j || g[23] !== _ || g[24] !== b.path || g[25] !== x
          ? ((h =
              "string" == typeof j
                ? (0, r.jsx)("div", {
                    className: "grid min-h-0 flex-1 grid-rows-1 overflow-auto",
                    children: (0, r.jsx)(ey.TM, {
                      "aria-label": _,
                      variant: "code",
                      readOnly: v,
                      spellCheck: !1,
                      value: j,
                      onChange: (e) => x(b.path, e.currentTarget.value),
                    }),
                  })
                : (0, r.jsx)(m.A, {
                    title: (0, r.jsx)(o.A, {
                      id: "plugins.editor.binaryFile",
                      defaultMessage: "No preview for this file",
                      description: "Preview for a binary or non-UTF-8 file",
                    }),
                    actions: (0, r.jsx)(p.$, {
                      type: "button",
                      color: "secondary",
                      size: "compact",
                      onClick: () => {
                        let e =
                          j.buffer instanceof ArrayBuffer
                            ? new Uint8Array(j.buffer, j.byteOffset, j.byteLength)
                            : Uint8Array.from(j)
                        ;(0, eE.W)(new Blob([e], { type: "application/octet-stream" }), N().posix.basename(b.path))
                      },
                      children: (0, r.jsx)(o.A, {
                        id: "plugins.editor.downloadFile",
                        defaultMessage: "Download",
                        description: "Download the selected file from the plugin editor when a preview is unavailable",
                      }),
                    }),
                  })),
            (g[21] = v),
            (g[22] = j),
            (g[23] = _),
            (g[24] = b.path),
            (g[25] = x),
            (g[26] = h))
          : (h = g[26]),
        g[27] !== _ || g[28] !== c || g[29] !== h
          ? ((f = (0, r.jsxs)("section", {
              className: "flex min-h-0 min-w-0 flex-1 flex-col gap-3",
              "aria-label": _,
              children: [c, h],
            })),
            (g[27] = _),
            (g[28] = c),
            (g[29] = h),
            (g[30] = f))
          : (f = g[30]),
        f
      )
    }
    let eI = {
        name: "plugin-file-modified",
        width: 12,
        height: 12,
        body: '<circle cx="6" cy="6" r="3" fill="var(--color-blue)" />',
      },
      eN = [eI]
    function eF(e) {
      let t,
        i,
        s,
        u,
        d,
        c,
        h,
        f,
        m,
        g,
        b,
        _,
        y,
        v,
        x,
        w,
        k,
        C,
        S,
        j,
        A,
        E,
        z,
        I,
        P,
        B,
        M,
        R,
        L,
        U,
        W,
        Z,
        q,
        H,
        K,
        Q,
        X,
        Y,
        J,
        ee,
        et,
        ei,
        er,
        en,
        es = (0, n.c)(159),
        { archive: ea, rootPath: eo, onSelect: el, onEdit: eu, onChangeFile: ed, onDelete: ec } = e,
        eh = (0, l.A)(),
        [ef, ep] = (0, a.useState)(null),
        [em, eb] = (0, a.useState)(null),
        [e_, ey] = (0, a.useState)(null),
        { modifiedPaths: ex, publishStatus: ew } = ea,
        ek = null == eo ? "" : `${eo}/`
      es[0] !== ea.paths || es[1] !== ek || es[2] !== eo
        ? ((t =
            null == eo
              ? ea.paths
              : ea.paths.filter((e) => e.startsWith(ek) && e !== ek).map((e) => e.slice(ek.length))),
          (es[0] = ea.paths),
          (es[1] = ek),
          (es[2] = eo),
          (es[3] = t))
        : (t = es[3])
      let eS = t,
        ej = ea.selectedFile?.path.startsWith(ek) ? ea.selectedFile : void 0
      es[4] !== ej?.path || es[5] !== ej?.path.slice || es[6] !== ek
        ? ((i = ej?.path.slice(ek.length)), (es[4] = ej?.path), (es[5] = ej?.path.slice), (es[6] = ek), (es[7] = i))
        : (i = es[7])
      let eA = i
      if (
        es[8] !== ea.paths ||
        es[9] !== ea.revealPath ||
        es[10] !== e_ ||
        es[11] !== eh ||
        es[12] !== ex ||
        es[13] !== ed ||
        es[14] !== ek ||
        es[15] !== ew
      ) {
        let e,
          t,
          i,
          r,
          n,
          a,
          o,
          l,
          p,
          z,
          I,
          F,
          P,
          B = ea.revealPath?.startsWith(ek) ? ea.revealPath.slice(ek.length) : void 0
        ;(es[36] !== ew ? ((e = eg(ew)), (es[36] = ew), (es[37] = e)) : (e = es[37]),
          (u = e),
          es[38] !== eh ? ((t = eh.formatMessage(V.modified)), (es[38] = eh), (es[39] = t)) : (t = es[39]))
        let M = t
        ;(es[40] !== ea.paths || es[41] !== u || es[42] !== e_ || es[43] !== ek
          ? ((i =
              null != e_ &&
              !u &&
              "." !== N().posix.dirname(e_) &&
              null == G(ek + e_, ek + N().posix.basename(e_), ea.paths)),
            (es[40] = ea.paths),
            (es[41] = u),
            (es[42] = e_),
            (es[43] = ek),
            (es[44] = i))
          : (i = es[44]),
          (d = i),
          es[45] !== ed || es[46] !== ek
            ? ((r = async function (e) {
                let t = $(e.path, [])
                return null != t
                  ? t
                  : ed(
                      "rename" === e.kind
                        ? { ...e, path: ek + e.path, from: ek + e.from }
                        : { ...e, path: ek + e.path },
                    )
              }),
              (es[45] = ed),
              (es[46] = ek),
              (es[47] = r))
            : (r = es[47]),
          (c = r),
          es[48] !== c
            ? ((n = async function (e, t) {
                eb(await c({ kind: "rename", from: e, path: t }))
              }),
              (es[48] = c),
              (es[49] = n))
            : (n = es[49]),
          (h = n),
          (x = "@container relative min-h-0 flex-1"),
          (v = "absolute inset-0 flex flex-col gap-4 @xl:flex-row"),
          (b =
            "flex h-1/3 min-h-0 shrink-0 flex-col gap-2 border-b border-subtle pb-2 @xl:h-full @xl:w-64 @xl:border-e @xl:border-b-0 @xl:pe-3 @xl:pb-0"),
          es[50] !== d
            ? ((_ = (e) => {
                d &&
                  null == (0, O.t)(e.nativeEvent, { includeDirectories: !0 }) &&
                  (e.preventDefault(), (e.dataTransfer.dropEffect = "move"))
              }),
              (es[50] = d),
              (es[51] = _))
            : (_ = es[51]),
          es[52] !== d || es[53] !== e_ || es[54] !== h
            ? ((y = (e) => {
                !e.defaultPrevented && d && null != e_ && (e.preventDefault(), h(e_, N().posix.basename(e_)), ey(null))
              }),
              (es[52] = d),
              (es[53] = e_),
              (es[54] = h),
              (es[55] = y))
            : (y = es[55]),
          (g = "min-h-0"),
          (s = T.S),
          (w = !1),
          (k = null),
          es[56] === Symbol.for("react.memo_cache_sentinel") ? ((a = () => ey(null)), (es[56] = a)) : (a = es[56]),
          es[57] !== u ? ((o = (e) => !u && 1 === e.length), (es[57] = u), (es[58] = o)) : (o = es[58]),
          es[59] !== ea.paths || es[60] !== u || es[61] !== ek
            ? ((l = (e) => {
                let t = eD(e)
                return !u && null != t && null == G(ek + t.from, ek + t.path, ea.paths)
              }),
              (es[59] = ea.paths),
              (es[60] = u),
              (es[61] = ek),
              (es[62] = l))
            : (l = es[62]),
          es[63] !== h
            ? ((p = (e) => {
                let t = eD(e)
                null != t && h(t.from, t.path)
              }),
              (es[63] = h),
              (es[64] = p))
            : (p = es[64]),
          es[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((z = () => eb("conflict")), (es[65] = z))
            : (z = es[65]),
          es[66] !== o || es[67] !== l || es[68] !== p
            ? ((C = { onDragStart: ey, onDragEnd: a, canDrag: o, canDrop: l, onDropComplete: p, onDropError: z }),
              (es[66] = o),
              (es[67] = l),
              (es[68] = p),
              (es[69] = C))
            : (C = es[69]),
          es[70] !== u ? ((I = () => !u), (es[70] = u), (es[71] = I)) : (I = es[71]),
          es[72] !== h
            ? ((F = (e) => {
                let { sourcePath: t, destinationPath: i, isFolder: r } = e
                h(t + (r ? "/" : ""), i)
              }),
              (es[72] = h),
              (es[73] = F))
            : (F = es[73]),
          es[74] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = () => eb("renameFailed")), (es[74] = P))
            : (P = es[74]),
          es[75] !== I || es[76] !== F
            ? ((S = { canRename: I, onRename: F, onError: P }), (es[75] = I), (es[76] = F), (es[77] = S))
            : (S = es[77]),
          (j = "end"),
          (A = eN),
          es[78] !== M || es[79] !== ex || es[80] !== ek
            ? ((E = (e) => (ex.has(ek + e) ? M : void 0)),
              (f = (e) => {
                let { item: t } = e
                return "file" === t.kind && ex.has(ek + t.path) ? { icon: eI, title: M } : null
              }),
              (es[78] = M),
              (es[79] = ex),
              (es[80] = ek),
              (es[81] = f),
              (es[82] = E))
            : ((f = es[81]), (E = es[82])),
          (m = (0, D.z)(B ? [B] : []).filter(eT)),
          (es[8] = ea.paths),
          (es[9] = ea.revealPath),
          (es[10] = e_),
          (es[11] = eh),
          (es[12] = ex),
          (es[13] = ed),
          (es[14] = ek),
          (es[15] = ew),
          (es[16] = s),
          (es[17] = u),
          (es[18] = d),
          (es[19] = c),
          (es[20] = h),
          (es[21] = f),
          (es[22] = m),
          (es[23] = g),
          (es[24] = b),
          (es[25] = _),
          (es[26] = y),
          (es[27] = v),
          (es[28] = x),
          (es[29] = w),
          (es[30] = k),
          (es[31] = C),
          (es[32] = S),
          (es[33] = j),
          (es[34] = A),
          (es[35] = E))
      } else
        ((s = es[16]),
          (u = es[17]),
          (d = es[18]),
          (c = es[19]),
          (h = es[20]),
          (f = es[21]),
          (m = es[22]),
          (g = es[23]),
          (b = es[24]),
          (_ = es[25]),
          (y = es[26]),
          (v = es[27]),
          (x = es[28]),
          (w = es[29]),
          (k = es[30]),
          (C = es[31]),
          (S = es[32]),
          (j = es[33]),
          (A = es[34]),
          (E = es[35]))
      ;(es[83] !== u || es[84] !== ec || es[85] !== ek
        ? ((z = (e, t, i) => {
            let n = "directory" === e.kind ? `${e.path.replace(/\/$/, "")}/` : e.path
            return (0, r.jsx)(eC, { context: t, disabled: u, onRename: i, onDelete: () => ec(ek + n) })
          }),
          (es[83] = u),
          (es[84] = ec),
          (es[85] = ek),
          (es[86] = z))
        : (z = es[86]),
        es[87] !== el || es[88] !== ek
          ? ((I = (e) => {
              let [t] = e
              null != t && el(ek + t)
            }),
            (es[87] = el),
            (es[88] = ek),
            (es[89] = I))
          : (I = es[89]),
        es[90] !== s ||
        es[91] !== eA ||
        es[92] !== eS ||
        es[93] !== f ||
        es[94] !== m ||
        es[95] !== z ||
        es[96] !== I ||
        es[97] !== w ||
        es[98] !== k ||
        es[99] !== C ||
        es[100] !== S ||
        es[101] !== j ||
        es[102] !== A ||
        es[103] !== E
          ? ((P = (0, r.jsx)(s, {
              contextMenuEnabled: w,
              cwd: k,
              dragAndDrop: C,
              renaming: S,
              decorationAlignment: j,
              decorationIcons: A,
              getPathDescription: E,
              renderRowDecoration: f,
              initialExpandedPaths: m,
              paths: eS,
              renderContextMenu: z,
              unsafeCSS: "[data-file-tree-virtualized-scroll] { flex-basis: auto; }",
              selectedPath: eA,
              revealSelectedPath: !0,
              onSelectionChange: I,
            })),
            (es[90] = s),
            (es[91] = eA),
            (es[92] = eS),
            (es[93] = f),
            (es[94] = m),
            (es[95] = z),
            (es[96] = I),
            (es[97] = w),
            (es[98] = k),
            (es[99] = C),
            (es[100] = S),
            (es[101] = j),
            (es[102] = A),
            (es[103] = E),
            (es[104] = P))
          : (P = es[104]),
        es[105] !== g || es[106] !== P
          ? ((B = (0, r.jsx)("div", { className: g, children: P })), (es[105] = g), (es[106] = P), (es[107] = B))
          : (B = es[107]),
        es[108] !== d || es[109] !== e_ || es[110] !== h
          ? ((M =
              null != e_ &&
              (0, r.jsx)(p.$, {
                color: "secondary",
                size: "compact",
                className: "self-start",
                disabled: !d,
                onClick: () => {
                  ;(h(e_, N().posix.basename(e_)), ey(null))
                },
                children: (0, r.jsx)(o.A, {
                  id: "plugins.editor.moveToRoot",
                  defaultMessage: "Move to top level",
                  description:
                    "Drop target for moving a file or folder out to the root of the current file editor, including the skill folder in a skill editor",
                }),
              })),
            (es[108] = d),
            (es[109] = e_),
            (es[110] = h),
            (es[111] = M))
          : (M = es[111]),
        es[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = () => ep({})),
            (L = (0, r.jsx)(F.D_h, {})),
            (U = (0, r.jsx)(o.A, { ...V.add })),
            (es[112] = R),
            (es[113] = L),
            (es[114] = U))
          : ((R = es[112]), (L = es[113]), (U = es[114])),
        es[115] !== u
          ? ((W = (0, r.jsxs)(p.$, {
              color: "secondary",
              size: "compact",
              "aria-haspopup": "dialog",
              className: "shrink-0 self-start",
              disabled: u,
              onClick: R,
              children: [L, U],
            })),
            (es[115] = u),
            (es[116] = W))
          : (W = es[116]),
        es[117] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = () => ep({ newFolder: !0 })),
            (q = (0, r.jsx)(F.bcN, {})),
            (H = (0, r.jsx)(o.A, { ...V.newFolder })),
            (es[117] = Z),
            (es[118] = q),
            (es[119] = H))
          : ((Z = es[117]), (q = es[118]), (H = es[119])),
        es[120] !== u
          ? ((K = (0, r.jsxs)(p.$, {
              color: "secondary",
              size: "compact",
              "aria-haspopup": "dialog",
              disabled: u,
              onClick: Z,
              children: [q, H],
            })),
            (es[120] = u),
            (es[121] = K))
          : (K = es[121]),
        es[122] !== W || es[123] !== K
          ? ((Q = (0, r.jsxs)("div", { className: "flex shrink-0 flex-wrap gap-2", children: [W, K] })),
            (es[122] = W),
            (es[123] = K),
            (es[124] = Q))
          : (Q = es[124]),
        es[125] !== em
          ? ((X =
              null != em &&
              (0, r.jsx)("span", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, r.jsx)(o.A, { ...V[em] }),
              })),
            (es[125] = em),
            (es[126] = X))
          : (X = es[126]),
        es[127] !== b ||
        es[128] !== _ ||
        es[129] !== y ||
        es[130] !== B ||
        es[131] !== M ||
        es[132] !== Q ||
        es[133] !== X
          ? ((Y = (0, r.jsxs)("div", { className: b, onDragOver: _, onDrop: y, children: [B, M, Q, X] })),
            (es[127] = b),
            (es[128] = _),
            (es[129] = y),
            (es[130] = B),
            (es[131] = M),
            (es[132] = Q),
            (es[133] = X),
            (es[134] = Y))
          : (Y = es[134]))
      let eE = ej?.path
      return (
        es[135] !== ej || es[136] !== ex
          ? ((J = null != ej && ex.has(ej.path)), (es[135] = ej), (es[136] = ex), (es[137] = J))
          : (J = es[137]),
        es[138] !== eA ? ((ee = () => ep({ sourcePath: eA })), (es[138] = eA), (es[139] = ee)) : (ee = es[139]),
        es[140] !== u ||
        es[141] !== ej ||
        es[142] !== eA ||
        es[143] !== eu ||
        es[144] !== eE ||
        es[145] !== J ||
        es[146] !== ee
          ? ((et = (0, r.jsx)(ez, { file: ej, displayPath: eA, modified: J, busy: u, onEdit: eu, onRename: ee }, eE)),
            (es[140] = u),
            (es[141] = ej),
            (es[142] = eA),
            (es[143] = eu),
            (es[144] = eE),
            (es[145] = J),
            (es[146] = ee),
            (es[147] = et))
          : (et = es[147]),
        es[148] !== v || es[149] !== Y || es[150] !== et
          ? ((ei = (0, r.jsxs)("div", { className: v, children: [Y, et] })),
            (es[148] = v),
            (es[149] = Y),
            (es[150] = et),
            (es[151] = ei))
          : (ei = es[151]),
        es[152] !== c || es[153] !== ef
          ? ((er =
              null != ef &&
              (0, r.jsx)(ev, {
                sourcePath: ef.sourcePath,
                newFolder: ef.newFolder,
                onChangeFile: c,
                onClose: () => ep(null),
              })),
            (es[152] = c),
            (es[153] = ef),
            (es[154] = er))
          : (er = es[154]),
        es[155] !== x || es[156] !== ei || es[157] !== er
          ? ((en = (0, r.jsxs)("div", { className: x, children: [ei, er] })),
            (es[155] = x),
            (es[156] = ei),
            (es[157] = er),
            (es[158] = en))
          : (en = es[158]),
        en
      )
    }
    function eT(e) {
      return e.endsWith("/")
    }
    function eD(e) {
      let [t] = e.draggedPaths
      if (null == t || 1 !== e.draggedPaths.length) return null
      let i = N().posix.join(e.target.directoryPath ?? "", N().posix.basename(t))
      return i === t.replace(/\/$/, "") ? null : { from: t, path: i }
    }
    var eO = i("zKCW")
    function eP(e) {
      let t,
        i,
        s,
        a = (0, n.c)(4),
        { onRetry: l } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(o.A, {
              id: "plugins.editor.accessRefreshFailed",
              defaultMessage: "Couldn’t verify edit access. Your edits are still here.",
              description:
                "Error when edit access cannot be refreshed. Publishing is disabled, but the editor keeps unsaved files.",
            })),
            (i = (0, r.jsx)(o.A, {
              id: "plugins.editor.retryAccessCheck",
              defaultMessage: "Retry access check",
              description: "Retry the failed account or plugin lookup before allowing publication",
            })),
            (a[0] = t),
            (a[1] = i))
          : ((t = a[0]), (i = a[1])),
        a[2] !== l
          ? ((s = (0, r.jsx)(eO.l, {
              type: "error",
              role: "alert",
              content: t,
              primaryCtaText: i,
              onPrimaryCtaClick: l,
            })),
            (a[2] = l),
            (a[3] = s))
          : (s = a[3]),
        s
      )
    }
    var eB = i("RNul")
    let eM = (0, H.YK)({
      bundling: {
        id: "plugins.editor.bundling",
        defaultMessage: "Bundling plugin…",
        description: "Status while compressing edited files into a ZIP",
      },
      uploading: {
        id: "plugins.editor.uploading",
        defaultMessage: "Uploading…",
        description: "Status while uploading a plugin ZIP",
      },
      publishing: {
        id: "plugins.editor.publishing",
        defaultMessage: "Publishing new version…",
        description: "Status while the service publishes the uploaded ZIP",
      },
    })
    function eR(e) {
      let t,
        i,
        s,
        a,
        u,
        d,
        c,
        h,
        f,
        m,
        g,
        b,
        _,
        y,
        v,
        x,
        w = (0, n.c)(82),
        {
          pluginName: k,
          files: S,
          published: j,
          archive: A,
          maxBytes: E,
          isAccessError: z,
          onRetryAccess: I,
          onFix: N,
          onPublish: F,
          onRetry: T,
          onClose: D,
        } = e,
        O = (0, l.A)(),
        P = A.publishStatus
      w[0] !== P ? ((t = eg(P)), (w[0] = P), (w[1] = t)) : (t = w[1])
      let B = t,
        M = B || "checking" === j.status,
        R = "published" === P
      w[2] !== S || w[3] !== O || w[4] !== j.status || w[5] !== j.version
        ? ((i = "ready" === j.status ? er(S, j.version, O) : null),
          (w[2] = S),
          (w[3] = O),
          (w[4] = j.status),
          (w[5] = j.version),
          (w[6] = i))
        : (i = w[6])
      let L = i,
        U = null != L && "string" != typeof L && null == L.nextVersion,
        W = null
      if (R) {
        let e
        ;(w[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", {
              role: "status",
              children: (0, r.jsx)(o.A, {
                id: "plugins.editor.published",
                defaultMessage: "New version published",
                description: "Confirmation after publishing a plugin version",
              }),
            })),
            (w[7] = e))
          : (e = w[7]),
          (W = e))
      } else if ("checking" === j.status) {
        let e
        ;(w[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsxs)("div", {
              className: "flex items-center gap-2",
              role: "status",
              children: [
                (0, r.jsx)(eB.y, {}),
                (0, r.jsx)(o.A, {
                  id: "plugins.editor.publishDialog.checking",
                  defaultMessage: "Checking published version…",
                  description: "Status while refreshing the currently published plugin version",
                }),
              ],
            })),
            (w[8] = e))
          : (e = w[8]),
          (W = e))
      } else if ("error" === j.status) {
        let e, t, i
        ;(w[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(o.A, {
              id: "plugins.editor.publishDialog.checkFailed",
              defaultMessage: "Couldn’t check the published version. Try again.",
              description: "Error when the current published plugin version cannot be read",
            })),
            (t = (0, r.jsx)(o.A, {
              id: "plugins.editor.publishDialog.retryCheck",
              defaultMessage: "Try again",
              description: "Retry loading the published plugin version",
            })),
            (w[9] = e),
            (w[10] = t))
          : ((e = w[9]), (t = w[10])),
          w[11] !== T
            ? ((i = (0, r.jsx)(eO.l, {
                type: "error",
                role: "alert",
                content: e,
                primaryCtaText: t,
                onPrimaryCtaClick: T,
              })),
              (w[11] = T),
              (w[12] = i))
            : (i = w[12]),
          (W = i))
      } else if ("string" == typeof L) {
        let e
        ;(w[13] !== L
          ? ((e = (0, r.jsx)(eO.l, { type: "error", role: "alert", content: L })), (w[13] = L), (w[14] = e))
          : (e = w[14]),
          (W = e))
      } else if (L?.nextVersion != null && "ready" === j.status) {
        let e, t, i, n
        ;(w[15] !== j.version
          ? ((e = (0, r.jsx)(o.A, {
              id: "plugins.editor.publishDialog.versionMustIncreaseWithCurrent",
              defaultMessage: "Version must be increased before publishing (currently on {version})",
              values: { version: j.version },
              description:
                "Warning in the plugin publish dialog when the edited manifest version must be increased. version is the currently published plugin version.",
            })),
            (w[15] = j.version),
            (w[16] = e))
          : (e = w[16]),
          w[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)(o.A, {
                id: "plugins.editor.publishDialog.fixVersion",
                defaultMessage: "Fix",
                description: "Update plugin manifest files to the next minor version above the published plugin",
              })),
              (w[17] = t))
            : (t = w[17]),
          w[18] !== N || w[19] !== j.version
            ? ((i = () => N(j.version)), (w[18] = N), (w[19] = j.version), (w[20] = i))
            : (i = w[20]),
          w[21] !== e || w[22] !== i
            ? ((n = (0, r.jsx)(eO.l, {
                type: "warning",
                role: "alert",
                content: e,
                primaryCtaText: t,
                onPrimaryCtaClick: i,
              })),
              (w[21] = e),
              (w[22] = i),
              (w[23] = n))
            : (n = w[23]),
          (W = n))
      } else if (null != L && "ready" === j.status) {
        let e
        ;(w[24] !== L.version || w[25] !== k
          ? ((e = (0, r.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, r.jsx)(o.A, {
                id: "plugins.editor.publishDialog.updateVersion",
                defaultMessage: "{pluginName} will be updated to version {newVersion}",
                values: { pluginName: k, newVersion: L.version },
                description:
                  "Publish confirmation naming the plugin being edited. newVersion is the version read from the edited plugin manifest.",
              }),
            })),
            (w[24] = L.version),
            (w[25] = k),
            (w[26] = e))
          : (e = w[26]),
          (W = e))
      }
      w[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = { "aria-describedby": void 0 }), (w[27] = s))
        : (s = w[27])
      let Z = !M
      return (
        w[28] !== M || w[29] !== D
          ? ((a = (e) => {
              e || M || D()
            }),
            (w[28] = M),
            (w[29] = D),
            (w[30] = a))
          : (a = w[30]),
        w[31] !== M ||
        w[32] !== U ||
        w[33] !== R ||
        w[34] !== z ||
        w[35] !== F ||
        w[36] !== j.status ||
        w[37] !== j.version
          ? ((u = (e) => {
              ;(e.preventDefault(), M || z || R || !U || "ready" !== j.status || F(j.version))
            }),
            (w[31] = M),
            (w[32] = U),
            (w[33] = R),
            (w[34] = z),
            (w[35] = F),
            (w[36] = j.status),
            (w[37] = j.version),
            (w[38] = u))
          : (u = w[38]),
        w[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(e_.c7, {
              title: (0, r.jsx)(eb.L3, {
                children: (0, r.jsx)(o.A, {
                  id: "plugins.editor.publishDialog.title",
                  defaultMessage: "Publish plugin",
                  description: "Title of the dialog for reviewing and publishing a plugin version",
                }),
              }),
            })),
            (w[39] = d))
          : (d = w[39]),
        w[40] !== R || w[41] !== z || w[42] !== I || w[43] !== B
          ? ((c = z && !B && !R && (0, r.jsx)(eP, { onRetry: I })),
            (w[40] = R),
            (w[41] = z),
            (w[42] = I),
            (w[43] = B),
            (w[44] = c))
          : (c = w[44]),
        w[45] !== A.publishError || w[46] !== P
          ? ((h =
              "failed" === P &&
              (0, r.jsx)(eO.l, {
                type: "error",
                role: "alert",
                content:
                  A.publishError ??
                  (0, r.jsx)(o.A, {
                    id: "plugins.editor.publishFailed",
                    defaultMessage: "Couldn’t publish this version. Your edits are still here. Try again.",
                    description: "Error when a plugin version cannot be published",
                  }),
              })),
            (w[45] = A.publishError),
            (w[46] = P),
            (w[47] = h))
          : (h = w[47]),
        w[48] !== O || w[49] !== E || w[50] !== P
          ? ((f =
              "too-large" === P &&
              (0, r.jsx)(eO.l, {
                type: "error",
                role: "alert",
                content: (0, r.jsx)(o.A, {
                  id: "plugins.editor.uploadLimit",
                  defaultMessage: "The edited ZIP exceeds the {limit} upload limit.",
                  values: { limit: (0, C.z)(E, O) },
                  description: "Error when the edited plugin ZIP exceeds the upload limit",
                }),
              })),
            (w[48] = O),
            (w[49] = E),
            (w[50] = P),
            (w[51] = f))
          : (f = w[51]),
        w[52] !== W || w[53] !== f || w[54] !== c || w[55] !== h
          ? ((m = (0, r.jsxs)(e_.OO, { className: "gap-3", children: [c, W, h, f] })),
            (w[52] = W),
            (w[53] = f),
            (w[54] = c),
            (w[55] = h),
            (w[56] = m))
          : (m = w[56]),
        w[57] !== R
          ? ((g = R
              ? (0, r.jsx)(o.A, {
                  id: "plugins.editor.publishDialog.done",
                  defaultMessage: "Done",
                  description: "Close the dialog after publishing a plugin",
                })
              : (0, r.jsx)(o.A, {
                  id: "plugins.editor.publishDialog.cancel",
                  defaultMessage: "Cancel",
                  description: "Close the publish dialog and return to editing",
                })),
            (w[57] = R),
            (w[58] = g))
          : (g = w[58]),
        w[59] !== M || w[60] !== D || w[61] !== g
          ? ((b = (0, r.jsx)(p.$, { type: "button", color: "secondary", disabled: M, onClick: D, children: g })),
            (w[59] = M),
            (w[60] = D),
            (w[61] = g),
            (w[62] = b))
          : (b = w[62]),
        w[63] !== A.modifiedPaths ||
        w[64] !== M ||
        w[65] !== U ||
        w[66] !== R ||
        w[67] !== z ||
        w[68] !== B ||
        w[69] !== P
          ? ((_ =
              !R &&
              (0, r.jsx)(p.$, {
                type: "submit",
                loading: B,
                disabled: M || z || !U || 0 === A.modifiedPaths.size,
                children: (0, r.jsx)("span", {
                  "aria-live": "polite",
                  children: B
                    ? (0, r.jsx)(o.A, { ...eM[P] })
                    : (0, r.jsx)(o.A, {
                        id: "plugins.editor.publishDialog.confirm",
                        defaultMessage: "Publish",
                        description: "Confirm publishing the plugin files as a new version",
                      }),
                }),
              })),
            (w[63] = A.modifiedPaths),
            (w[64] = M),
            (w[65] = U),
            (w[66] = R),
            (w[67] = z),
            (w[68] = B),
            (w[69] = P),
            (w[70] = _))
          : (_ = w[70]),
        w[71] !== b || w[72] !== _
          ? ((y = (0, r.jsxs)(e_.Es, { children: [b, _] })), (w[71] = b), (w[72] = _), (w[73] = y))
          : (y = w[73]),
        w[74] !== m || w[75] !== y || w[76] !== u
          ? ((v = (0, r.jsxs)(e_.R4, { as: "form", onSubmit: u, children: [d, m, y] })),
            (w[74] = m),
            (w[75] = y),
            (w[76] = u),
            (w[77] = v))
          : (v = w[77]),
        w[78] !== v || w[79] !== Z || w[80] !== a
          ? ((x = (0, r.jsx)(eb.lG, {
              open: !0,
              size: "compact",
              contentProps: s,
              showDialogClose: Z,
              onOpenChange: a,
              children: v,
            })),
            (w[78] = v),
            (w[79] = Z),
            (w[80] = a),
            (w[81] = x))
          : (x = w[81]),
        x
      )
    }
    function eL(e) {
      let t,
        i,
        l,
        u,
        d,
        c,
        h,
        f,
        m,
        _,
        y,
        v = (0, n.c)(47),
        {
          title: x,
          archive: w,
          session: k,
          maxBytes: C,
          pluginName: S,
          isAccessError: j,
          onRetryAccess: A,
          refreshPublishedVersion: E,
          children: z,
          contentWidth: I,
          switchAction: N,
          canPublish: F,
          onBeforePublish: T,
        } = e,
        D = void 0 === I ? "extraWide" : I,
        O = (0, a.useId)(),
        P = (0, s.Ul)(k.manifestFiles$),
        [B, M] = (0, a.useState)(null)
      v[0] !== w.publishStatus ? ((t = eg(w.publishStatus)), (v[0] = w.publishStatus), (v[1] = t)) : (t = v[1])
      let R = t,
        L = F ?? w.modifiedPaths.size > 0
      v[2] !== T || v[3] !== E
        ? ((i = async function () {
            if (T?.() !== !1) {
              M({ status: "checking" })
              try {
                let e = await E()
                M(null == e || null == Y(e) ? { status: "error" } : { status: "ready", version: e })
              } catch {
                M({ status: "error" })
              }
            }
          }),
          (v[2] = T),
          (v[3] = E),
          (v[4] = i))
        : (i = v[4])
      let U = i,
        W = "default" === D ? "px-toolbar" : void 0,
        Z = !L || R || j
      return (
        v[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(o.A, {
              id: "plugins.editor.publish",
              defaultMessage: "Save and publish",
              description: "Button to publish the edited files as a new plugin version",
            })),
            (v[5] = l))
          : (l = v[5]),
        v[6] !== O || v[7] !== Z
          ? ((u = (0, r.jsx)(p.$, {
              color: "primary",
              size: "large",
              disabled: Z,
              "aria-haspopup": "dialog",
              type: "submit",
              form: O,
              children: l,
            })),
            (v[6] = O),
            (v[7] = Z),
            (v[8] = u))
          : (u = v[8]),
        v[9] !== N || v[10] !== u
          ? ((d = (0, r.jsxs)("div", { className: "flex items-center gap-2", children: [N, u] })),
            (v[9] = N),
            (v[10] = u),
            (v[11] = d))
          : (d = v[11]),
        v[12] !== x ? ((c = (0, r.jsx)(b.Q, { title: x })), (v[12] = x), (v[13] = c)) : (c = v[13]),
        v[14] !== j || v[15] !== A || v[16] !== B
          ? ((h = j && null == B && (0, r.jsx)(eP, { onRetry: A })), (v[14] = j), (v[15] = A), (v[16] = B), (v[17] = h))
          : (h = v[17]),
        v[18] !== w ||
        v[19] !== j ||
        v[20] !== P ||
        v[21] !== C ||
        v[22] !== A ||
        v[23] !== U ||
        v[24] !== S ||
        v[25] !== B ||
        v[26] !== k.fixVersion ||
        v[27] !== k.publish
          ? ((f =
              null != B &&
              (0, r.jsx)(eR, {
                pluginName: S,
                files: P,
                published: B,
                archive: w,
                maxBytes: C,
                isAccessError: j,
                onRetryAccess: A,
                onFix: k.fixVersion,
                onPublish: k.publish,
                onRetry: () => void U(),
                onClose: () => M(null),
              })),
            (v[18] = w),
            (v[19] = j),
            (v[20] = P),
            (v[21] = C),
            (v[22] = A),
            (v[23] = U),
            (v[24] = S),
            (v[25] = B),
            (v[26] = k.fixVersion),
            (v[27] = k.publish),
            (v[28] = f))
          : (f = v[28]),
        v[29] !== L || v[30] !== j || v[31] !== U || v[32] !== R
          ? ((m = (e) => {
              e.target === e.currentTarget && (e.preventDefault(), !L || R || j || U())
            }),
            (v[29] = L),
            (v[30] = j),
            (v[31] = U),
            (v[32] = R),
            (v[33] = m))
          : (m = v[33]),
        v[34] !== z || v[35] !== O || v[36] !== m
          ? ((_ = (0, r.jsx)("form", { id: O, className: "flex min-h-0 flex-1 flex-col", onSubmit: m, children: z })),
            (v[34] = z),
            (v[35] = O),
            (v[36] = m),
            (v[37] = _))
          : (_ = v[37]),
        v[38] !== D ||
        v[39] !== h ||
        v[40] !== f ||
        v[41] !== _ ||
        v[42] !== W ||
        v[43] !== d ||
        v[44] !== c ||
        v[45] !== x
          ? ((y = (0, r.jsxs)(g.Ql, {
              contentInset: !1,
              contentWidth: D,
              horizontalPaddingClassName: W,
              headerVariant: "compact",
              title: x,
              headerAction: d,
              children: [c, h, f, _],
            })),
            (v[38] = D),
            (v[39] = h),
            (v[40] = f),
            (v[41] = _),
            (v[42] = W),
            (v[43] = d),
            (v[44] = c),
            (v[45] = x),
            (v[46] = y))
          : (y = v[46]),
        y
      )
    }
    function eU(e) {
      let t,
        i,
        s,
        a,
        l,
        u,
        d,
        c = (0, n.c)(19)
      return (
        c[0] !== e ? (({ onSwitchEditor: t, ...i } = e), (c[0] = e), (c[1] = t), (c[2] = i)) : ((t = c[1]), (i = c[2])),
        c[3] !== i.archive.publishStatus
          ? ((s = eg(i.archive.publishStatus)), (c[3] = i.archive.publishStatus), (c[4] = s))
          : (s = c[4]),
        c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(o.A, {
              id: "plugins.editor.showSimple",
              defaultMessage: "Show simple editor",
              description: "Switch from editing plugin files to the name and description form",
            })),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== t || c[7] !== s
          ? ((l = (0, r.jsx)(p.$, { color: "secondary", disabled: s, onClick: t, children: a })),
            (c[6] = t),
            (c[7] = s),
            (c[8] = l))
          : (l = c[8]),
        c[9] !== i.archive ||
        c[10] !== i.session.changeFile ||
        c[11] !== i.session.deletePath ||
        c[12] !== i.session.edit ||
        c[13] !== i.session.select
          ? ((u = (0, r.jsx)(eF, {
              archive: i.archive,
              onSelect: i.session.select,
              onEdit: i.session.edit,
              onChangeFile: i.session.changeFile,
              onDelete: i.session.deletePath,
            })),
            (c[9] = i.archive),
            (c[10] = i.session.changeFile),
            (c[11] = i.session.deletePath),
            (c[12] = i.session.edit),
            (c[13] = i.session.select),
            (c[14] = u))
          : (u = c[14]),
        c[15] !== i || c[16] !== l || c[17] !== u
          ? ((d = (0, r.jsx)(eL, { ...i, switchAction: l, children: u })),
            (c[15] = i),
            (c[16] = l),
            (c[17] = u),
            (c[18] = d))
          : (d = c[18]),
        d
      )
    }
    var eW = i("HJEB"),
      eZ = i("OXR4"),
      eq = i("Jqpj")
    function eH(e) {
      let t,
        i,
        s,
        l,
        u,
        d,
        c,
        h,
        f,
        m,
        g,
        b,
        _,
        y,
        v,
        x,
        w,
        k,
        C,
        S,
        j,
        A,
        E,
        z,
        I,
        N,
        F = (0, n.c)(70),
        { onCreate: T, onClose: D } = e,
        O = (0, a.useId)(),
        P = (0, a.useId)(),
        B = (0, a.useId)()
      F[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "", description: "" }), (F[0] = t)) : (t = F[0])
      let [M, R] = (0, a.useState)(t),
        [L, U] = (0, a.useState)(null),
        [W, Z] = (0, a.useState)(!1)
      F[1] !== D || F[2] !== T || F[3] !== M
        ? ((i = async function () {
            Z(!0)
            let e = await T(M)
            null == e ? D() : (U(e), Z(!1))
          }),
          (F[1] = D),
          (F[2] = T),
          (F[3] = M),
          (F[4] = i))
        : (i = F[4])
      let q = i
      F[5] === Symbol.for("react.memo_cache_sentinel") ? ((s = { "aria-describedby": void 0 }), (F[5] = s)) : (s = F[5])
      let H = !W
      ;(F[6] !== D || F[7] !== W
        ? ((l = (e) => {
            e || W || D()
          }),
          (F[6] = D),
          (F[7] = W),
          (F[8] = l))
        : (l = F[8]),
        F[9] !== W || F[10] !== q
          ? ((u = (e) => {
              ;(e.preventDefault(), W || q())
            }),
            (F[9] = W),
            (F[10] = q),
            (F[11] = u))
          : (u = F[11]),
        F[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(e_.c7, {
              title: (0, r.jsx)(eb.L3, {
                children: (0, r.jsx)(o.A, {
                  id: "plugins.editor.skills.add",
                  defaultMessage: "Add skill",
                  description: "Action and dialog title for adding a skill to the plugin being edited",
                }),
              }),
            })),
            (F[12] = d))
          : (d = F[12]),
        F[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, r.jsx)(o.A, {
              id: "plugins.editor.skills.name",
              defaultMessage: "Name",
              description: "Label for the name of a new skill in the plugin editor",
            })),
            (F[13] = c))
          : (c = F[13]),
        F[14] !== O
          ? ((h = (0, r.jsx)("label", { htmlFor: O, className: "text-sm font-medium", children: c })),
            (F[14] = O),
            (F[15] = h))
          : (h = F[15]))
      let V = null != L ? B : void 0
      ;(F[16] !== M
        ? ((f = (e) => {
            ;(R({ ...M, name: e.currentTarget.value }), U(null))
          }),
          (F[16] = M),
          (F[17] = f))
        : (f = F[17]),
        F[18] !== O || F[19] !== W || F[20] !== V || F[21] !== f || F[22] !== M.name
          ? ((m = (0, r.jsx)(ey.pd, {
              id: O,
              autoFocus: !0,
              required: !0,
              value: M.name,
              disabled: W,
              "aria-describedby": V,
              onChange: f,
            })),
            (F[18] = O),
            (F[19] = W),
            (F[20] = V),
            (F[21] = f),
            (F[22] = M.name),
            (F[23] = m))
          : (m = F[23]),
        F[24] !== m || F[25] !== h
          ? ((g = (0, r.jsxs)(e_.RW, { children: [h, m] })), (F[24] = m), (F[25] = h), (F[26] = g))
          : (g = F[26]),
        F[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, r.jsx)(o.A, {
              id: "plugins.editor.skills.description",
              defaultMessage: "Description",
              description: "Label for the description stored in a new skill's SKILL.md frontmatter",
            })),
            (F[27] = b))
          : (b = F[27]),
        F[28] !== P
          ? ((_ = (0, r.jsx)("label", { htmlFor: P, className: "text-sm font-medium", children: b })),
            (F[28] = P),
            (F[29] = _))
          : (_ = F[29]))
      let $ = null != L ? B : void 0
      return (
        F[30] !== M
          ? ((y = (e) => {
              ;(R({ ...M, description: e.currentTarget.value }), U(null))
            }),
            (F[30] = M),
            (F[31] = y))
          : (y = F[31]),
        F[32] !== P || F[33] !== W || F[34] !== $ || F[35] !== y || F[36] !== M.description
          ? ((v = (0, r.jsx)(ey.TM, {
              id: P,
              variant: "compact",
              autoResize: !0,
              rows: 3,
              required: !0,
              value: M.description,
              disabled: W,
              "aria-describedby": $,
              onChange: y,
            })),
            (F[32] = P),
            (F[33] = W),
            (F[34] = $),
            (F[35] = y),
            (F[36] = M.description),
            (F[37] = v))
          : (v = F[37]),
        F[38] !== _ || F[39] !== v
          ? ((x = (0, r.jsxs)(e_.RW, { children: [_, v] })), (F[38] = _), (F[39] = v), (F[40] = x))
          : (x = F[40]),
        F[41] !== L || F[42] !== B
          ? ((w =
              null != L && (0, r.jsx)("p", { id: B, role: "alert", className: "text-sm text-danger", children: L })),
            (F[41] = L),
            (F[42] = B),
            (F[43] = w))
          : (w = F[43]),
        F[44] !== g || F[45] !== x || F[46] !== w
          ? ((k = (0, r.jsxs)(e_.OO, { className: "gap-3", children: [g, x, w] })),
            (F[44] = g),
            (F[45] = x),
            (F[46] = w),
            (F[47] = k))
          : (k = F[47]),
        F[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, r.jsx)(o.A, {
              id: "plugins.editor.skills.cancel",
              defaultMessage: "Cancel",
              description: "Cancel adding a skill without changing plugin files",
            })),
            (F[48] = C))
          : (C = F[48]),
        F[49] !== D || F[50] !== W
          ? ((S = (0, r.jsx)(p.$, { type: "button", color: "secondary", disabled: W, onClick: D, children: C })),
            (F[49] = D),
            (F[50] = W),
            (F[51] = S))
          : (S = F[51]),
        F[52] !== M.description || F[53] !== M.name
          ? ((j = !M.name.trim() || !M.description.trim()), (F[52] = M.description), (F[53] = M.name), (F[54] = j))
          : (j = F[54]),
        F[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, r.jsx)(o.A, {
              id: "plugins.editor.skills.create",
              defaultMessage: "Create",
              description: "Create a skill directory and SKILL.md file in the plugin being edited",
            })),
            (F[55] = A))
          : (A = F[55]),
        F[56] !== W || F[57] !== j
          ? ((E = (0, r.jsx)(p.$, { type: "submit", loading: W, disabled: j, children: A })),
            (F[56] = W),
            (F[57] = j),
            (F[58] = E))
          : (E = F[58]),
        F[59] !== S || F[60] !== E
          ? ((z = (0, r.jsxs)(e_.Es, { children: [S, E] })), (F[59] = S), (F[60] = E), (F[61] = z))
          : (z = F[61]),
        F[62] !== k || F[63] !== z || F[64] !== u
          ? ((I = (0, r.jsxs)(e_.R4, { as: "form", onSubmit: u, children: [d, k, z] })),
            (F[62] = k),
            (F[63] = z),
            (F[64] = u),
            (F[65] = I))
          : (I = F[65]),
        F[66] !== I || F[67] !== H || F[68] !== l
          ? ((N = (0, r.jsx)(eb.lG, {
              open: !0,
              size: "compact",
              contentProps: s,
              showDialogClose: H,
              onOpenChange: l,
              children: I,
            })),
            (F[66] = I),
            (F[67] = H),
            (F[68] = l),
            (F[69] = N))
          : (N = F[69]),
        N
      )
    }
    function eV(e) {
      let t,
        i,
        a,
        l,
        u,
        d,
        c,
        h,
        f = (0, n.c)(22),
        { skill: p, session: m, onClose: g } = e,
        b = (0, s.Ul)(m.state$)
      return (
        f[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { "aria-describedby": void 0 }), (f[0] = t))
          : (t = f[0]),
        f[1] !== g
          ? ((i = (e) => {
              e || g()
            }),
            (f[1] = g),
            (f[2] = i))
          : (i = f[2]),
        f[3] !== p.name ? ((a = (0, eW.l)(p.name)), (f[3] = p.name), (f[4] = a)) : (a = f[4]),
        f[5] !== a
          ? ((l = (0, r.jsx)(e_.OO, {
              className: "shrink-0",
              children: (0, r.jsx)(e_.c7, {
                className: "pe-8",
                title: (0, r.jsx)(eb.L3, {
                  children: (0, r.jsx)(o.A, {
                    id: "plugins.editor.skills.edit",
                    defaultMessage: "Edit {name}",
                    description: "Title of the dialog for editing files in a skill; name is the skill's display name",
                    values: { name: a },
                  }),
                }),
              }),
            })),
            (f[5] = a),
            (f[6] = l))
          : (l = f[6]),
        f[7] !== b ||
        f[8] !== m.changeFile ||
        f[9] !== m.deletePath ||
        f[10] !== m.edit ||
        f[11] !== m.select ||
        f[12] !== p.path
          ? ((u =
              "ready" === b.status &&
              (0, r.jsx)(eF, {
                archive: b,
                rootPath: p.path,
                onSelect: m.select,
                onEdit: m.edit,
                onChangeFile: m.changeFile,
                onDelete: m.deletePath,
              })),
            (f[7] = b),
            (f[8] = m.changeFile),
            (f[9] = m.deletePath),
            (f[10] = m.edit),
            (f[11] = m.select),
            (f[12] = p.path),
            (f[13] = u))
          : (u = f[13]),
        f[14] !== u
          ? ((d = (0, r.jsx)(e_.OO, { className: "min-h-0 flex-1", children: u })), (f[14] = u), (f[15] = d))
          : (d = f[15]),
        f[16] !== l || f[17] !== d
          ? ((c = (0, r.jsxs)(e_.R4, { size: "full", children: [l, d] })), (f[16] = l), (f[17] = d), (f[18] = c))
          : (c = f[18]),
        f[19] !== i || f[20] !== c
          ? ((h = (0, r.jsx)(eb.lG, { open: !0, size: "xxxwideTall", contentProps: t, onOpenChange: i, children: c })),
            (f[19] = i),
            (f[20] = c),
            (f[21] = h))
          : (h = f[21]),
        h
      )
    }
    function e$(e) {
      let t,
        i,
        u,
        d,
        c,
        h,
        f,
        m,
        g,
        b,
        _,
        y = (0, n.c)(29),
        { session: v, disabled: x } = e,
        w = (0, l.A)(),
        k = (0, s.Ul)(v.skills$),
        [C, S] = (0, a.useState)(!1),
        [j, A] = (0, a.useState)(null),
        E = "string" == typeof k ? void 0 : k.length
      ;(y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)(o.A, {
            id: "plugins.detail.includes.skills.title",
            defaultMessage: "Skills",
            description: "Title for included skills on the plugin detail page",
          })),
          (y[0] = t))
        : (t = y[0]),
        y[1] !== k
          ? ((i = "string" == typeof k && (0, r.jsx)(eO.l, { type: "error", role: "alert", content: k })),
            (y[1] = k),
            (y[2] = i))
          : (i = y[2]),
        y[3] !== k
          ? ((u =
              "string" != typeof k &&
              0 === k.length &&
              (0, r.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, r.jsx)(o.A, {
                  id: "plugins.editor.skills.empty",
                  defaultMessage: "No skills in this plugin",
                  description:
                    "Empty state in the plugin editor after all skills have been removed or when none are present",
                }),
              })),
            (y[3] = k),
            (y[4] = u))
          : (u = y[4]),
        y[5] !== x || y[6] !== w || y[7] !== v || y[8] !== k
          ? ((d =
              "string" != typeof k &&
              k.map((e) =>
                (0, r.jsx)(
                  eq.D,
                  {
                    className: "group",
                    presentation: "row",
                    disabled: x,
                    onClick: () => {
                      ;(v.select(N().posix.join(e.path, "SKILL.md")), A(e))
                    },
                    title: (0, eW.l)(e.name),
                    description: e.description,
                    descriptionClassName: "line-clamp-1",
                    iconContainer: !1,
                    icon: (0, r.jsx)("span", {
                      className: "flex size-8 shrink-0 items-center justify-center",
                      children: (0, r.jsx)(F.zr3, { className: "text-secondary" }),
                    }),
                    actionsPlacement: "center",
                    actions: (0, r.jsx)("div", {
                      className:
                        "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 [@media(hover:none)]:opacity-100",
                      children: (0, r.jsx)(p.$, {
                        type: "button",
                        color: "ghostDanger",
                        size: "icon",
                        disabled: x,
                        "aria-label": w.formatMessage(
                          {
                            id: "plugins.editor.skills.delete",
                            defaultMessage: "Delete {name}",
                            description:
                              "Accessible label for deleting a skill and all of its files from the plugin being edited; name is the skill name",
                          },
                          { name: e.name },
                        ),
                        onClick: (t) => {
                          ;(t.stopPropagation(), v.deleteSkill(e.path))
                        },
                        children: (0, r.jsx)(F.zwW, {}),
                      }),
                    }),
                  },
                  e.path,
                ),
              )),
            (y[5] = x),
            (y[6] = w),
            (y[7] = v),
            (y[8] = k),
            (y[9] = d))
          : (d = y[9]))
      let z = x || "string" == typeof k
      return (
        y[10] === Symbol.for("react.memo_cache_sentinel") ? ((c = () => S(!0)), (y[10] = c)) : (c = y[10]),
        y[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, r.jsx)("span", {
              className: "flex size-8 shrink-0 items-center justify-center",
              children: (0, r.jsx)(F.sqn, { className: "text-secondary" }),
            })),
            (f = (0, r.jsx)(o.A, {
              id: "plugins.editor.skills.add",
              defaultMessage: "Add skill",
              description: "Action and dialog title for adding a skill to the plugin being edited",
            })),
            (y[11] = h),
            (y[12] = f))
          : ((h = y[11]), (f = y[12])),
        y[13] !== z
          ? ((m = (0, r.jsx)(eq.D, {
              presentation: "row",
              disabled: z,
              onClick: c,
              iconContainer: !1,
              icon: h,
              title: f,
            })),
            (y[13] = z),
            (y[14] = m))
          : (m = y[14]),
        y[15] !== C || y[16] !== v.addSkill
          ? ((g = C && (0, r.jsx)(eH, { onCreate: v.addSkill, onClose: () => S(!1) })),
            (y[15] = C),
            (y[16] = v.addSkill),
            (y[17] = g))
          : (g = y[17]),
        y[18] !== j || y[19] !== v
          ? ((b = null != j && (0, r.jsx)(eV, { skill: j, session: v, onClose: () => A(null) })),
            (y[18] = j),
            (y[19] = v),
            (y[20] = b))
          : (b = y[20]),
        y[21] !== E || y[22] !== m || y[23] !== g || y[24] !== b || y[25] !== i || y[26] !== u || y[27] !== d
          ? ((_ = (0, r.jsx)("div", {
              className: "contents [--radius-token-row:var(--radius-lg)]",
              children: (0, r.jsxs)(eZ.J, {
                disableContentInlineInset: !0,
                count: E,
                title: t,
                children: [i, u, d, m, g, b],
              }),
            })),
            (y[21] = E),
            (y[22] = m),
            (y[23] = g),
            (y[24] = b),
            (y[25] = i),
            (y[26] = u),
            (y[27] = d),
            (y[28] = _))
          : (_ = y[28]),
        _
      )
    }
    function eG(e) {
      let t,
        i,
        u,
        d,
        c,
        h,
        f,
        m,
        g,
        b = (0, n.c)(33),
        { onSwitchEditor: _, ...y } = e,
        v = (0, l.A)(),
        x = (0, a.useId)(),
        w = (0, a.useId)(),
        k = (0, s.Ul)(y.session.manifestFiles$)
      b[0] !== v || b[1] !== k
        ? ((t = () => {
            let e
            return "string" == typeof (e = en(k, v)) ? e : es(e)
          }),
          (b[0] = v),
          (b[1] = k),
          (b[2] = t))
        : (t = b[2])
      let [C, S] = (0, a.useState)(t),
        [j, A] = (0, a.useState)(null),
        E = eg(y.archive.publishStatus),
        z = j ?? ("string" == typeof C ? C : null)
      b[3] !== C || b[4] !== y || b[5] !== A
        ? ((i = function () {
            if ("string" == typeof C) return !0
            let e = y.session.editMetadata(C)
            return (A(e), null == e)
          }),
          (b[3] = C),
          (b[4] = y),
          (b[5] = A),
          (b[6] = i))
        : (i = b[6])
      let I = i,
        N = null == z
      return (
        b[7] !== z
          ? ((u = null != z && (0, r.jsx)(eO.l, { type: "error", role: "alert", content: z })), (b[7] = z), (b[8] = u))
          : (u = b[8]),
        b[9] !== I || b[10] !== w || b[11] !== C || b[12] !== x || b[13] !== E || b[14] !== y || b[15] !== S
          ? ((d =
              "string" != typeof C &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(e_.RW, {
                    children: [
                      (0, r.jsx)("label", {
                        htmlFor: x,
                        className: "text-sm font-medium",
                        children: (0, r.jsx)(o.A, {
                          id: "plugins.editor.form.name",
                          defaultMessage: "Name",
                          description: "Label for the plugin display name",
                        }),
                      }),
                      (0, r.jsx)(ey.pd, {
                        id: x,
                        value: C.displayName,
                        disabled: E,
                        onBlur: I,
                        onChange: (e) => {
                          S({ ...C, displayName: e.currentTarget.value })
                        },
                      }),
                    ],
                  }),
                  (0, r.jsxs)(e_.RW, {
                    children: [
                      (0, r.jsx)("label", {
                        htmlFor: w,
                        className: "text-sm font-medium",
                        children: (0, r.jsx)(o.A, {
                          id: "plugins.editor.form.description",
                          defaultMessage: "Description",
                          description: "Label for the detailed plugin description",
                        }),
                      }),
                      (0, r.jsx)(ey.TM, {
                        id: w,
                        variant: "compact",
                        autoResize: !0,
                        rows: 1,
                        value: C.description,
                        disabled: E,
                        onBlur: I,
                        onChange: (e) => {
                          S({ ...C, description: e.currentTarget.value })
                        },
                      }),
                    ],
                  }),
                  (0, r.jsx)(e$, { session: y.session, disabled: E }),
                ],
              })),
            (b[9] = I),
            (b[10] = w),
            (b[11] = C),
            (b[12] = x),
            (b[13] = E),
            (b[14] = y),
            (b[15] = S),
            (b[16] = d))
          : (d = b[16]),
        b[17] !== u || b[18] !== d
          ? ((c = (0, r.jsxs)("div", { className: "flex flex-col gap-6", children: [u, d] })),
            (b[17] = u),
            (b[18] = d),
            (b[19] = c))
          : (c = b[19]),
        b[20] !== I || b[21] !== _
          ? ((h = () => {
              I() && _()
            }),
            (b[20] = I),
            (b[21] = _),
            (b[22] = h))
          : (h = b[22]),
        b[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(o.A, {
              id: "plugins.editor.showFull",
              defaultMessage: "Show full editor",
              description: "Switch from the plugin form to editing all files in the archive",
            })),
            (b[23] = f))
          : (f = b[23]),
        b[24] !== E || b[25] !== h
          ? ((m = (0, r.jsx)("div", {
              className: "flex pt-6",
              children: (0, r.jsx)(p.$, { type: "button", color: "secondary", disabled: E, onClick: h, children: f }),
            })),
            (b[24] = E),
            (b[25] = h),
            (b[26] = m))
          : (m = b[26]),
        b[27] !== I || b[28] !== y || b[29] !== N || b[30] !== c || b[31] !== m
          ? ((g = (0, r.jsxs)(eL, {
              ...y,
              contentWidth: "default",
              canPublish: N,
              onBeforePublish: I,
              children: [c, m],
            })),
            (b[27] = I),
            (b[28] = y),
            (b[29] = N),
            (b[30] = c),
            (b[31] = m),
            (b[32] = g))
          : (g = b[32]),
        g
      )
    }
    var eK = i("X3K1")
    function eQ(e) {
      let t,
        i,
        s,
        a,
        l,
        u,
        d,
        c,
        h,
        f = (0, n.c)(13),
        { title: p } = e
      return (
        f[0] !== p
          ? ((t = p ?? (0, r.jsx)(eK.X, { size: "custom", className: "h-8 w-64" })), (f[0] = p), (f[1] = t))
          : (t = f[1]),
        f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(eK.X, { size: "custom", className: "h-9 w-40" })), (f[2] = i))
          : (i = f[2]),
        f[3] !== p ? ((s = null != p && (0, r.jsx)(b.Q, { title: p })), (f[3] = p), (f[4] = s)) : (s = f[4]),
        f[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)("span", {
              className: "sr-only",
              children: (0, r.jsx)(o.A, {
                id: "plugins.editor.loading",
                defaultMessage: "Loading plugin files…",
                description: "Status while downloading and unpacking a plugin ZIP",
              }),
            })),
            (f[5] = a))
          : (a = f[5]),
        f[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsxs)(e_.RW, {
              children: [
                (0, r.jsx)("span", {
                  className: "text-sm font-medium",
                  children: (0, r.jsx)(o.A, {
                    id: "plugins.editor.form.name",
                    defaultMessage: "Name",
                    description: "Label for the plugin display name",
                  }),
                }),
                (0, r.jsx)(eK.X, { size: "custom", className: "h-9 w-full" }),
              ],
            })),
            (f[6] = l))
          : (l = f[6]),
        f[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsxs)(e_.RW, {
              children: [
                (0, r.jsx)("span", {
                  className: "text-sm font-medium",
                  children: (0, r.jsx)(o.A, {
                    id: "plugins.editor.form.description",
                    defaultMessage: "Description",
                    description: "Label for the detailed plugin description",
                  }),
                }),
                (0, r.jsx)(eK.X, { size: "custom", className: "h-20 w-full" }),
              ],
            })),
            (f[7] = u))
          : (u = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsxs)("div", {
              role: "status",
              className: "flex flex-col gap-6",
              children: [
                a,
                l,
                u,
                (0, r.jsx)(eZ.J, {
                  disableContentInlineInset: !0,
                  title: (0, r.jsx)(o.A, {
                    id: "plugins.detail.includes.skills.title",
                    defaultMessage: "Skills",
                    description: "Title for included skills on the plugin detail page",
                  }),
                  children: [0, 1].map(eX),
                }),
              ],
            })),
            (f[8] = d))
          : (d = f[8]),
        f[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, r.jsx)("div", {
              className: "flex pt-6",
              children: (0, r.jsx)(eK.X, { size: "custom", className: "h-6 w-28" }),
            })),
            (f[9] = c))
          : (c = f[9]),
        f[10] !== t || f[11] !== s
          ? ((h = (0, r.jsxs)(g.Ql, {
              contentInset: !1,
              contentWidth: "default",
              horizontalPaddingClassName: "px-toolbar",
              headerVariant: "compact",
              title: t,
              headerAction: i,
              children: [s, d, c],
            })),
            (f[10] = t),
            (f[11] = s),
            (f[12] = h))
          : (h = f[12]),
        h
      )
    }
    function eX(e) {
      return (0, r.jsx)(
        eq.D,
        {
          presentation: "row",
          title: (0, r.jsx)(eK.X, { className: "w-32" }),
          description: (0, r.jsx)(eK.P, { lines: 1, size: "sm" }),
          iconContainer: !1,
          icon: (0, r.jsx)("span", { className: "size-8 shrink-0", children: (0, r.jsx)(eK.X, { size: "fill" }) }),
        },
        e,
      )
    }
    function eY() {
      let e,
        t = (0, n.c)(5),
        { pluginId: i } = (0, u.g)(),
        { search: a } = (0, u.zy)(),
        { isLoading: l } = (0, f.As)(),
        h = (0, s.Ul)(c.tT)
      return (
        t[0] !== h || t[1] !== l || t[2] !== i || t[3] !== a
          ? ((e =
              null == i
                ? null
                : (0, r.jsx)(_.P, {
                    pluginId: i,
                    children: (e) => {
                      if (l || e.isControlsLoading) return (0, r.jsx)(eQ, {})
                      let { plugin: t } = e
                      if (null == h || e.accountId !== h || null == t)
                        return (0, r.jsx)("div", {
                          className: "flex h-full flex-col px-toolbar",
                          children: (0, r.jsx)(x.PluginDetailEmptyState, {
                            state: e.isControlsError ? "error" : "missing",
                          }),
                        })
                      let n = t.release.display_name || t.name,
                        s = (0, w.Ct)({ pluginId: i, browseSearch: a })
                      return (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(d.G.Header, {
                            children: (0, r.jsx)(d.G.HeaderToolbar, {
                              children: (0, r.jsx)(v.W, { hostId: "local", pluginTitle: n, editorParentHref: s }),
                            }),
                          }),
                          e.canOpenVisualEditor
                            ? (0, r.jsx)(
                                eJ,
                                {
                                  pluginId: i,
                                  accountId: h,
                                  pluginName: n,
                                  isAccessError: e.isEditorAccessError,
                                  onRetryAccess: e.retry,
                                  refreshPublishedVersion: e.refreshPublishedVersion,
                                },
                                h + "/" + i,
                              )
                            : (0, r.jsx)("div", {
                                className: "flex h-full flex-col px-toolbar",
                                children: (0, r.jsx)(x.PluginDetailEmptyState, {
                                  state: "editDenied",
                                  description: (0, r.jsx)(u.N_, {
                                    className: "underline",
                                    to: s,
                                    children: (0, r.jsx)(o.A, {
                                      id: "plugins.editor.viewPlugin",
                                      defaultMessage: "View plugin",
                                      description: "Link from the editor access message to the plugin detail page",
                                    }),
                                  }),
                                }),
                              }),
                        ],
                      })
                    },
                  })),
            (t[0] = h),
            (t[1] = l),
            (t[2] = i),
            (t[3] = a),
            (t[4] = e))
          : (e = t[4]),
        e
      )
    }
    function eJ(e) {
      let t,
        i,
        o,
        u,
        d,
        c,
        f = (0, n.c)(35),
        {
          pluginId: p,
          accountId: m,
          pluginName: _,
          isAccessError: v,
          onRetryAccess: x,
          refreshPublishedVersion: w,
        } = e,
        C = (0, l.A)(),
        S = (0, s.Ul)(h.o8),
        j = (0, s._U)(k.X, "73506792"),
        [A, E] = (0, a.useState)(0),
        [z, I] = (0, a.useState)(!1)
      f[0] !== j?.value.max_archive_admission_bytes
        ? ((t = y.H.parse(j?.value.max_archive_admission_bytes)),
          (f[0] = j?.value.max_archive_admission_bytes),
          (f[1] = t))
        : (t = f[1])
      let N = t
      f[2] !== m || f[3] !== A || f[4] !== N || f[5] !== p || f[6] !== S
        ? ((i = { pluginId: p, accountId: m, userId: S, attempt: A, maxBytes: N }),
          (f[2] = m),
          (f[3] = A),
          (f[4] = N),
          (f[5] = p),
          (f[6] = S),
          (f[7] = i))
        : (i = f[7])
      let F = (0, s.uO)(em, i),
        T = (0, s.Ul)(F.state$)
      f[8] !== C || f[9] !== _
        ? ((o = _
            ? C.formatMessage(
                {
                  id: "plugins.editor.editingTitle",
                  defaultMessage: "Editing {pluginName}",
                  description: "Page title of the plugin editor",
                },
                { pluginName: _ },
              )
            : C.formatMessage({
                id: "plugins.editor.loadingTitle",
                defaultMessage: "Editing plugin",
                description: "Page title while the plugin name is loading",
              })),
          (f[8] = C),
          (f[9] = _),
          (f[10] = o))
        : (o = f[10])
      let D = o
      if ("loading" === T.status) {
        let e
        return (f[11] !== D ? ((e = (0, r.jsx)(eQ, { title: D })), (f[11] = D), (f[12] = e)) : (e = f[12]), e)
      }
      if ("error" === T.status) {
        let e, t, i, n
        return (
          f[13] !== D ? ((e = (0, r.jsx)(b.Q, { title: D })), (f[13] = D), (f[14] = e)) : (e = f[14]),
          f[15] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => E(e0)), (f[15] = t)) : (t = f[15]),
          f[16] !== T ? ((i = (0, r.jsx)(e2, { archive: T, onRetry: t })), (f[16] = T), (f[17] = i)) : (i = f[17]),
          f[18] !== e || f[19] !== i || f[20] !== D
            ? ((n = (0, r.jsxs)(g.Ql, {
                contentInset: !1,
                contentWidth: "extraWide",
                headerVariant: "compact",
                title: D,
                children: [e, i],
              })),
              (f[18] = e),
              (f[19] = i),
              (f[20] = D),
              (f[21] = n))
            : (n = f[21]),
          n
        )
      }
      ;(f[22] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => I(e1)), (f[22] = u)) : (u = f[22]),
        f[23] !== T ||
        f[24] !== v ||
        f[25] !== N ||
        f[26] !== x ||
        f[27] !== _ ||
        f[28] !== w ||
        f[29] !== F ||
        f[30] !== D
          ? ((d = {
              pluginName: _,
              isAccessError: v,
              onRetryAccess: x,
              refreshPublishedVersion: w,
              title: D,
              archive: T,
              session: F,
              maxBytes: N,
              onSwitchEditor: u,
            }),
            (f[23] = T),
            (f[24] = v),
            (f[25] = N),
            (f[26] = x),
            (f[27] = _),
            (f[28] = w),
            (f[29] = F),
            (f[30] = D),
            (f[31] = d))
          : (d = f[31]))
      let O = d
      return (
        f[32] !== O || f[33] !== z
          ? ((c = z ? (0, r.jsx)(eU, { ...O }) : (0, r.jsx)(eG, { ...O })), (f[32] = O), (f[33] = z), (f[34] = c))
          : (c = f[34]),
        c
      )
    }
    function e1(e) {
      return !e
    }
    function e0(e) {
      return e + 1
    }
    function e2(e) {
      let t,
        i,
        s,
        a = (0, n.c)(9),
        { archive: u, onRetry: d } = e,
        c = (0, l.A)(),
        h = u.error
      if (h instanceof z) {
        let e
        return (
          a[0] !== h.downloadLimit || a[1] !== c
            ? ((e = (0, r.jsx)(m.A, {
                title:
                  null != h.downloadLimit
                    ? (0, r.jsx)(o.A, {
                        id: "plugins.editor.downloadLimit",
                        defaultMessage: "This archive exceeds the {limit} download limit",
                        description: "Error when the compressed plugin ZIP is too large to preview",
                        values: { limit: (0, C.z)(h.downloadLimit, c) },
                      })
                    : (0, r.jsx)(o.A, {
                        id: "plugins.editor.unpackLimit",
                        defaultMessage: "This archive is too large to unpack",
                        description:
                          "Error when the contents of a ZIP exceed the file count or uncompressed size limits",
                      }),
              })),
              (a[0] = h.downloadLimit),
              (a[1] = c),
              (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      if (h instanceof S.fk && [401, 403].includes(h.status)) {
        let e
        return (
          a[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(m.A, {
                title: (0, r.jsx)(o.A, {
                  id: "plugins.editor.unavailable",
                  defaultMessage: "This plugin archive is unavailable for this account",
                  description: "Error when the current account cannot download a plugin archive",
                }),
              })),
              (a[3] = e))
            : (e = a[3]),
          e
        )
      }
      if (h instanceof S.fk && 404 === h.status) {
        let e
        return (
          a[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(m.A, {
                title: (0, r.jsx)(o.A, {
                  id: "plugins.editor.notFound",
                  defaultMessage: "Plugin archive not found",
                  description: "Error when the plugin service cannot find an archive for the requested plugin",
                }),
              })),
              (a[4] = e))
            : (e = a[4]),
          e
        )
      }
      return (
        a[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(o.A, {
              id: "plugins.editor.failed",
              defaultMessage: "Couldn’t open the plugin archive",
              description: "Error when downloading or unpacking a plugin ZIP fails",
            })),
            (a[5] = t))
          : (t = a[5]),
        a[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(o.A, {
              id: "plugins.editor.retry",
              defaultMessage: "Try again",
              description: "Button to retry opening the plugin archive",
            })),
            (a[6] = i))
          : (i = a[6]),
        a[7] !== d
          ? ((s = (0, r.jsx)(m.A, {
              title: t,
              actions: (0, r.jsx)(p.$, { color: "secondary", onClick: d, children: i }),
            })),
            (a[7] = d),
            (a[8] = s))
          : (s = a[8]),
        s
      )
    }
  },
  qAwZ(e, t, i) {
    var r = i("QosV"),
      n = i("T0Rc"),
      s = i("zTeN"),
      a = i("EOo5"),
      o = i("OAko"),
      l = i("EEop"),
      u = i("OWtl"),
      d = i("rvFo"),
      c = i("eShZ"),
      h = i("d635"),
      f = i("ZqLP")
    function p(e) {
      let { plugin: t } = e
      return t
    }
    i.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            i,
            m,
            g,
            b,
            _,
            y,
            v,
            x,
            w = (0, r.c)(29),
            { pluginId: k, hideAuthoringActions: C, children: S } = e,
            j = void 0 !== C && C,
            A = (0, s.gh)(u.u),
            { accountId: E, userId: z } = (0, a.As)()
          w[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (w[0] = t)) : (t = w[0])
          let { data: I, isLoading: N, isError: F } = (0, o.YL)(void 0, t)
          w[1] !== E || w[2] !== k
            ? ((i = (0, l.K0)(E, k, void 0, "catalog")), (w[1] = E), (w[2] = k), (w[3] = i))
            : (i = w[3])
          let T = null != E && !F && I?.id === E
          w[4] !== i || w[5] !== T
            ? ((m = { ...i, enabled: T, select: p, staleTime: d.D.ONE_MINUTE }), (w[4] = i), (w[5] = T), (w[6] = m))
            : (m = w[6])
          let { data: D, isLoading: O, isError: P, error: B, refetch: M } = (0, n.I)(m)
          w[7] !== B || w[8] !== P
            ? ((g = P && B instanceof c.fk && [401, 403, 404].includes(B.status)), (w[7] = B), (w[8] = P), (w[9] = g))
            : (g = w[9])
          let R = g,
            L = null == D || R || I?.id !== E ? null : (0, f.RK)({ plugin: D, account: I, userId: z }),
            U = F ? null : L
          w[10] !== E || w[11] !== k
            ? ((b = ["plugins", "archive-upload", E, k]), (w[10] = E), (w[11] = k), (w[12] = b))
            : (b = w[12])
          let W = !j && !1
          ;(w[13] !== E || w[14] !== k
            ? ((_ = (e) => {
                let { signal: t } = e
                if (null == E) throw Error("Plugin management requires an account")
                return (0, h.eb)(k, E, t)
              }),
              (w[13] = E),
              (w[14] = k),
              (w[15] = _))
            : (_ = w[15]),
            w[16] !== b || w[17] !== W || w[18] !== _
              ? ((y = { queryKey: b, enabled: W, queryFn: _, staleTime: d.D.ONE_MINUTE }),
                (w[16] = b),
                (w[17] = W),
                (w[18] = _),
                (w[19] = y))
              : (y = w[19]))
          let { data: Z, isError: q, refetch: H } = (0, n.I)(y),
            V = !j && U?.canDelete,
            $ = (j || !1) && U?.canManageForWorkspace,
            G = O || (null != E && !F && N),
            K = (P && !R) || (null != E && F),
            Q = K || (!j && !1)
          return (
            w[20] !== M
              ? ((v = async () => {
                  let e = await M({ throwOnError: !0 })
                  return e.data?.release.version ?? null
                }),
                (w[20] = M),
                (w[21] = v))
              : (v = w[21]),
            w[22] !== F || w[23] !== P || w[24] !== q || w[25] !== M || w[26] !== H || w[27] !== A
              ? ((x = () => {
                  ;(P && M(), F && A.queryClient.invalidateQueries({ queryKey: ["accounts", "check"] }), q && H())
                }),
                (w[22] = F),
                (w[23] = P),
                (w[24] = q),
                (w[25] = M),
                (w[26] = H),
                (w[27] = A),
                (w[28] = x))
              : (x = w[28]),
            S({
              accountId: E,
              plugin: null == L ? void 0 : D,
              canOpenVisualEditor: !1,
              canDelete: !!V,
              canUpload: false,
              canDownload: U?.canDownload ?? !1,
              canManageForWorkspace: !!$,
              isControlsLoading: G,
              isControlsError: Q,
              isEditorAccessError: K,
              refreshPublishedVersion: v,
              retry: x,
            })
          )
        },
      },
    )
  },
  d635(e, t, i) {
    var r = i("QkVB"),
      n = i("ripK"),
      s = i("HFSu"),
      a = i("GDNt")
    function o(e, t) {
      return /\.(zip|tar\.gz|tgz)$/i.test(e.name) ? (e.size > t ? "size" : null) : "type"
    }
    async function l(e, t, i) {
      let r
      do {
        let n = await s.CodexRequest.safeGet("/ps/plugins/workspace/created", {
            surface: "plugin_management",
            additionalHeaders: { "ChatGPT-Account-Id": t },
            parameters: { query: { limit: 100, pageToken: r } },
            signal: i,
            expectedErrorStatuses: [403, 404],
          }),
          a = n.plugins.find(({ id: t }) => t === e)
        if (null != a) return a
        r = n.pagination.next_page_token ?? void 0
      } while (null != r)
      return null
    }
    async function u(e, t, r, n, l) {
      if (null != o(t, r)) throw Error("Invalid plugin archive")
      let { uploadChatGptFileBytes: u } = await Promise.resolve().then(i.bind(i, "uLW7")),
        d = t.name.toLowerCase().endsWith(".zip") ? "application/zip" : "application/gzip"
      for (let i = 0; i < 2; i += 1) {
        let r = await s.CodexRequest.safePost("/public/plugins/workspace/upload-url", {
          surface: "plugin_management",
          additionalHeaders: { "ChatGPT-Account-Id": e },
          requestBody: { filename: t.name, mime_type: d, size_bytes: t.size, ...(null == n ? {} : { plugin_id: n }) },
          signal: l,
          expectedErrorStatuses: [400, 403, 409, 413, 422],
        })
        if (!r.etag) throw Error("Plugin upload session is missing an etag")
        try {
          await u(void 0, {
            fileId: r.file_id,
            file: t,
            fileName: t.name,
            contentType: d,
            uploadUrl: r.upload_url,
            signal: l,
          })
        } catch (e) {
          if (0 === i && e instanceof a.fk && 403 === e.status) continue
          throw e
        }
        return { file_id: r.file_id, etag: r.etag }
      }
      throw Error("Plugin upload failed")
    }
    i.d(
      t,
      {},
      {
        MD: async function (e, t, i, r, n) {
          let a = await u(t, i, r, e, n?.signal)
          ;(n?.signal.throwIfAborted(),
            n?.onPublishing(),
            await s.CodexRequest.safePost("/public/plugins/workspace/{plugin_id}", {
              surface: "plugin_management",
              additionalHeaders: { "ChatGPT-Account-Id": t },
              parameters: { path: { plugin_id: e } },
              requestBody: a,
              signal: n?.signal,
              expectedErrorStatuses: [400, 403, 409, 422],
            }))
        },
        QZ: o,
        dg: async function (e, t) {
          ;(0, n.W)(await (0, r.a)(e, t), "plugin.zip")
        },
        eb: async function (e, t, i) {
          let r = await l(e, t, i)
          return r?.can_refresh_from_source === !1
        },
        nF: l,
        v1: async function (e, t, i) {
          let r = await u(e, t, i)
          return (
            await s.CodexRequest.safePost("/public/plugins/workspace", {
              surface: "plugin_management",
              additionalHeaders: { "ChatGPT-Account-Id": e },
              requestBody: r,
              expectedErrorStatuses: [400, 403, 409, 422],
            })
          ).plugin_id
        },
      },
    )
  },
  sZSa(e, t, i) {
    let r = i("ASxG").number().int().positive().catch(0x6400000)
    i.d(t, {}, { H: r })
  },
  m0u5(e, t, i) {
    var r = i("ABep"),
      n = i("QosV"),
      s = i("DBCl"),
      a = i("oyxz"),
      o = i("HZfM"),
      l = i("UtcH"),
      u = i("sPQc")
    i.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            i,
            d,
            c,
            h,
            f,
            p,
            m,
            g,
            b,
            _,
            y,
            v,
            x = (0, n.c)(40),
            { editorParentHref: w, hostId: k, pluginTitle: C } = e,
            { search: S } = (0, o.zy)()
          x[0] !== w || x[1] !== C || x[2] !== S
            ? ((t = null == w && null != C && "settings" === new URLSearchParams(S).get("breadcrumb")),
              (x[0] = w),
              (x[1] = C),
              (x[2] = S),
              (x[3] = t))
            : (t = x[3])
          let j = t
          if (x[4] !== w || x[5] !== k || x[6] !== j || x[7] !== S) {
            let e,
              t = (0, s.EDN)(S)
            ;("local" !== k && t.set("hostId", k),
              (c =
                null == (d = j || null != w ? null : t.get("category"))
                  ? null
                  : (0, r.jsx)(u.E, { categorySlug: d, hostId: k })),
              (h = { pathname: "/plugins", search: t.toString() }),
              t.delete("category"))
            let n = new URLSearchParams()
            ;(t.has("hostId") && n.set("hostId", k),
              (i = l.V),
              (m = !0),
              x[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(a.A, {
                    id: "plugins.detail.breadcrumb.root",
                    defaultMessage: "Plugins",
                    description: "Breadcrumb link to the plugins directory",
                  })),
                  (x[15] = e))
                : (e = x[15]))
            let o = t.toString()
            ;(x[16] !== o
              ? ((f = { id: "plugins", label: e, to: { pathname: "/plugins", search: o } }), (x[16] = o), (x[17] = f))
              : (f = x[17]),
              (p = j
                ? [
                    {
                      id: "plugin-settings",
                      label: (0, r.jsx)(a.A, {
                        id: "plugins.detail.breadcrumb.settings",
                        defaultMessage: "Settings",
                        description: "Breadcrumb link to plugin settings from the plugin detail page",
                      }),
                      to: { pathname: "/settings/plugins-settings", search: n.toString() },
                    },
                  ]
                : []),
              (x[4] = w),
              (x[5] = k),
              (x[6] = j),
              (x[7] = S),
              (x[8] = i),
              (x[9] = d),
              (x[10] = c),
              (x[11] = h),
              (x[12] = f),
              (x[13] = p),
              (x[14] = m))
          } else ((i = x[8]), (d = x[9]), (c = x[10]), (h = x[11]), (f = x[12]), (p = x[13]), (m = x[14]))
          return (
            x[18] !== d || x[19] !== c || x[20] !== h || x[21] !== C
              ? ((g = null == d || null == C ? [] : [{ id: "plugin-category", label: c, to: h }]),
                (x[18] = d),
                (x[19] = c),
                (x[20] = h),
                (x[21] = C),
                (x[22] = g))
              : (g = x[22]),
            x[23] !== w || x[24] !== C
              ? ((b = null == w ? [] : [{ id: "plugin-detail", label: C, to: w }]),
                (x[23] = w),
                (x[24] = C),
                (x[25] = b))
              : (b = x[25]),
            x[26] !== f || x[27] !== p || x[28] !== g || x[29] !== b
              ? ((_ = [f, ...p, ...g, ...b]), (x[26] = f), (x[27] = p), (x[28] = g), (x[29] = b), (x[30] = _))
              : (_ = x[30]),
            x[31] !== c || x[32] !== w || x[33] !== C
              ? ((y =
                  null == w
                    ? (C ?? c)
                    : (0, r.jsx)(a.A, {
                        id: "plugins.editor.breadcrumb.edit",
                        defaultMessage: "Edit",
                        description: "Current page in the breadcrumb trail while editing a plugin",
                      })),
                (x[31] = c),
                (x[32] = w),
                (x[33] = C),
                (x[34] = y))
              : (y = x[34]),
            x[35] !== i || x[36] !== m || x[37] !== _ || x[38] !== y
              ? ((v = (0, r.jsx)(i, { textSm: m, ancestors: _, current: y })),
                (x[35] = i),
                (x[36] = m),
                (x[37] = _),
                (x[38] = y),
                (x[39] = v))
              : (v = x[39]),
            v
          )
        },
      },
    )
  },
  oVqR(e, t, i) {
    var r = i("ABep"),
      n = i("QosV"),
      s = i("Qgfj"),
      a = i("oyxz"),
      o = i("FrrB"),
      l = i("ikbV")
    let u = (0, s.YK)({
      missing: {
        id: "plugins.detail.missing",
        defaultMessage: "Plugin not found",
        description: "Not found title on the plugin detail page",
      },
      missingDescription: {
        id: "plugins.detail.missingDescription",
        defaultMessage: "This plugin could not be loaded from its marketplace entry.",
        description: "Not found description on the plugin detail page",
      },
      error: {
        id: "plugins.detail.errorTitle",
        defaultMessage: "Failed to load plugin",
        description: "Error title shown on the plugin detail page",
      },
      editDenied: {
        id: "plugins.editor.editDenied",
        defaultMessage: "You don't have edit access to this plugin",
        description: "Title shown to someone who can view the plugin but cannot edit it",
      },
    })
    i.d(
      t,
      {},
      {
        PluginDetailEmptyState: function (e) {
          let t,
            i,
            s,
            d,
            c = (0, n.c)(9),
            { description: h, state: f } = e,
            p = u[f]
          return (
            c[0] !== p ? ((t = (0, r.jsx)(a.A, { ...p })), (c[0] = p), (c[1] = t)) : (t = c[1]),
            c[2] !== h || c[3] !== f
              ? ((i = h ?? ("missing" === f ? (0, r.jsx)(a.A, { ...u.missingDescription }) : void 0)),
                (c[2] = h),
                (c[3] = f),
                (c[4] = i))
              : (i = c[4]),
            c[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, r.jsx)(l.A, { "aria-hidden": !0, className: "h-20 w-auto text-tertiary" })), (c[5] = s))
              : (s = c[5]),
            c[6] !== t || c[7] !== i
              ? ((d = (0, r.jsx)("div", {
                  className: "flex min-h-0 flex-1 items-center justify-center py-8",
                  children: (0, r.jsx)(o.A, { title: t, description: i, illustration: s }),
                })),
                (c[6] = t),
                (c[7] = i),
                (c[8] = d))
              : (d = c[8]),
            d
          )
        },
      },
    )
  },
  sPQc(e, t, i) {
    var r = i("ABep"),
      n = i("QosV"),
      s = i("Wyro"),
      a = i.n(s),
      o = i("zTeN"),
      l = i("oyxz"),
      u = i("OiCI"),
      d = i("SlNh"),
      c = i("eo3l"),
      h = i("Buqh")
    function f(e) {
      let t,
        i,
        s,
        a = (0, n.c)(7),
        { categorySlug: u, hostId: c } = e
      a[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (a[0] = t)) : (t = a[0])
      let { data: f } = (0, o._U)(h.M, c, t)
      a[1] !== u || a[2] !== f
        ? ((i =
            null == f
              ? void 0
              : (0, d.jq)(f.plugins).find((e) => {
                  let { value: t } = e
                  return u === `plugins-marketplace-${encodeURIComponent(t)}`
                })),
          (a[1] = u),
          (a[2] = f),
          (a[3] = i))
        : (i = a[3])
      let p = i
      if (null == p) {
        let e
        return (
          a[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(l.A, {
                id: "plugins.category.marketplace",
                defaultMessage: "Marketplace",
                description: "Fallback breadcrumb label for a plugin marketplace whose name is not loaded",
              })),
              (a[4] = e))
            : (e = a[4]),
          e
        )
      }
      let m = null == p.subLabel ? p.label : `${p.label} \xb7 ${p.subLabel}`
      return (a[5] !== m ? ((s = (0, r.jsx)(r.Fragment, { children: m })), (a[5] = m), (a[6] = s)) : (s = a[6]), s)
    }
    i.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            i,
            s,
            d = (0, n.c)(17),
            { categorySlug: h, hostId: p } = e,
            m = (0, o.Ul)(u.vh)
          d[0] !== m || d[1] !== h || d[2] !== p
            ? ((t = { accountId: m, categorySlug: h, hostId: p }), (d[0] = m), (d[1] = h), (d[2] = p), (d[3] = t))
            : (t = d[3])
          let { data: g } = (0, o._U)(c.z, t)
          if ("plugins-created-by-you" === h) {
            let e
            return (
              d[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(l.A, {
                    id: "skills.appsPage.section.createdByYou",
                    defaultMessage: "Created by you",
                    description: "Heading for plugins created by the current user",
                  })),
                  (d[4] = e))
                : (e = d[4]),
              e
            )
          }
          if ("plugins-shared-with-you" === h) {
            let e
            return (
              d[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(l.A, {
                    id: "skills.appsPage.section.sharedWithYou",
                    defaultMessage: "Shared with you",
                    description: "Heading for plugins shared with the current user",
                  })),
                  (d[5] = e))
                : (e = d[5]),
              e
            )
          }
          if (h.startsWith("plugins-marketplace-")) {
            let e
            return (
              d[6] !== h || d[7] !== p
                ? ((e = (0, r.jsx)(f, { categorySlug: h, hostId: p })), (d[6] = h), (d[7] = p), (d[8] = e))
                : (e = d[8]),
              e
            )
          }
          if (null != g) {
            let e
            return (
              d[9] !== g.title
                ? ((e = (0, r.jsx)(r.Fragment, { children: g.title })), (d[9] = g.title), (d[10] = e))
                : (e = d[10]),
              e
            )
          }
          if ("featured" === h) {
            let e
            return (
              d[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(l.A, {
                    id: "plugins.category.popular",
                    defaultMessage: "Popular",
                    description: "Title of the popular plugins category, whose URL slug is featured",
                  })),
                  (d[11] = e))
                : (e = d[11]),
              e
            )
          }
          if ("education-and-research" === h) {
            let e
            return (
              d[12] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(l.A, {
                    id: "plugins.category.education",
                    defaultMessage: "Education",
                    description:
                      "Short heading for the Education category in the plugin directory, containing plugins for learning and teaching. Shown when category metadata is unavailable. Scientific Research is a separate category. Keep this heading short.",
                  })),
                  (d[12] = e))
                : (e = d[12]),
              e
            )
          }
          return (
            d[13] !== h ? ((i = a()(h)), (d[13] = h), (d[14] = i)) : (i = d[14]),
            d[15] !== i ? ((s = (0, r.jsx)(r.Fragment, { children: i })), (d[15] = i), (d[16] = s)) : (s = d[16]),
            s
          )
        },
        O: function (e) {
          let t,
            i,
            s = (0, n.c)(6),
            { categorySlug: a, hostId: l } = e,
            d = (0, o.Ul)(u.vh)
          s[0] !== d || s[1] !== a || s[2] !== l
            ? ((t = { accountId: d, categorySlug: a, hostId: l }), (s[0] = d), (s[1] = a), (s[2] = l), (s[3] = t))
            : (t = s[3])
          let { data: h } = (0, o._U)(c.z, t),
            f = h?.description
          return (s[4] !== f ? ((i = (0, r.jsx)(r.Fragment, { children: f })), (s[4] = f), (s[5] = i)) : (i = s[5]), i)
        },
      },
    )
  },
  eo3l(e, t, i) {
    var r = i("D7Ms"),
      n = i("i5ac"),
      s = i.n(n),
      a = i("zTeN"),
      o = (i("OiCI"), i("mGK9")),
      l = i("IVVU"),
      u = i("WzdM"),
      d = i("SlNh"),
      c = i("ueue"),
      h = i("OWtl"),
      f = i("ndjw"),
      p = i("kfGJ"),
      m = i("rvFo"),
      g = i("HFSu"),
      b = i("aFrt"),
      _ = i("bJEQ"),
      y = i("cLdu"),
      v = i("Buqh")
    let x = (0, a.vU)(h.u, ({ accountId: e, categorySlug: t, hostId: i }) => ({
        queryKey: [...c.qw, "category-metadata", i, t, i === p.fI ? e : null],
        queryFn: r.hT,
        gcTime: 1 / 0,
        staleTime: m.D.ONE_MINUTE,
      })),
      w = (0, a.N3)(h.u, ({ categorySlug: e, hostId: t, searchQuery: i = "", visibility: r }, { get: n, scope: a }) => {
        let h = { ...r, hiddenPluginIds: [...r.hiddenPluginIds, ...n(l.qk)] },
          p = i.trim(),
          w = n(f.FM, { hostId: t }).data?.roots,
          k = n(v.M, t).data,
          C = null != w ? n(y.qF, { accountId: null, hostId: t, roots: w, productContext: "catalog" }).data : void 0,
          S = null == k ? void 0 : (0, b.Mp)(k.plugins, h),
          j =
            null == k || null == S
              ? void 0
              : (0, d.ck)({ connectedPlugins: [], featuredPluginIds: k.featuredPluginIds, plugins: S }).find(
                  ({ section: t }) => t.id === `plugins-${e}`,
                )?.plugins,
          A = new Map()
        for (let e of [...(C ?? []), ...(S ?? [])])
          for (let t of [e.plugin.id, e.plugin.remotePluginId, e.plugin.shareContext?.remotePluginId])
            null != t && A.set(t, e)
        let E = new Set(h.hiddenPluginIds)
        return {
          enabled: !0,
          getNextPageParam: (e) => e.pagination.next_page_token ?? void 0,
          initialPageParam: null,
          queryFn: async ({ pageParam: i, signal: r }) => {
            if ((await (0, o.s)(a, t)) !== "chatgpt")
              return { plugins: [], pagination: { limit: 50, next_page_token: null } }
            let n = await g.CodexRequest.safeGet("/ps/plugin-categories/{category_slug}/plugins", {
              surface: "plugin_directory",
              parameters: {
                path: { category_slug: e },
                query: { scope: "GLOBAL", q: p || void 0, limit: 50, pageToken: i ?? void 0 },
              },
              additionalHeaders: (0, u.A)(),
              signal: (0, _.w)(r),
            })
            return (
              void 0 !== n.category && a.query.setData(x, { accountId: null, categorySlug: e, hostId: t }, n.category),
              n
            )
          },
          queryKey: [...c.qw, "category", t, e, ...(0 === p.length ? [] : ["search", p])],
          retry: !1,
          select: (e) => {
            if (null == C || null == k) return
            let t = e.pages.flatMap((e) =>
              e.plugins.flatMap((e) => {
                let t = A.get(e.id) ?? null
                return E.has(e.id) || (null != t && E.has(t.plugin.id)) ? [] : [(0, b.vH)(e, t)]
              }),
            )
            return s()(
              [
                ...t.slice(0, 14),
                ...(null == j ? [] : (0 === p.length ? j : (0, d.cu)({ plugins: j, query: p })).map(b.w8)),
                ...t.slice(14),
              ],
              ({ id: e, remotePluginId: t }) => t ?? e,
            )
          },
          staleTime: m.D.ONE_MINUTE,
        }
      })
    i.d(t, {}, { w: w, z: x })
  },
  QkVB(e, t, i) {
    var r = i("Ghh3"),
      n = i("smHt"),
      s = i("zgGI")
    i.d(
      t,
      {},
      {
        a: async function (e, t, i, a) {
          let o = await r.Request.getResponse("/ps/plugins/{plugin_id}/archive", {
              surface: "plugin_management",
              parameters: { path: { plugin_id: e } },
              additionalHeaders: { "ChatGPT-Account-Id": t },
              signal: a,
            }),
            l = Number(o.headers.get("Content-Length"))
          if (null != i && l > i) throw (await o.body?.cancel(), new n.m5(l))
          return (0, s.A)(o, i, a)
        },
      },
    )
  },
  JzMC(e, t, i) {
    var r = i("wo6g"),
      n = i("zTeN"),
      s = i("ASxG"),
      a = i("rGp2"),
      o = i("uc7r"),
      l = i("OiCI"),
      u = i("O3SX"),
      d = i("WzdM"),
      c = i("tQpF"),
      h = i("ygu7"),
      f = i("ueue"),
      p = i("OWtl"),
      m = i("rvFo"),
      g = i("HFSu"),
      b = i("eShZ"),
      _ = i("Fd8Z")
    let y = s.object({
        settings: s.object({
          apps_privacy_control: s
            .enum(["always_ask", "ask_before_writes", "review_important_actions", "full_access"])
            .nullish(),
          lockdown_mode_enabled: s.boolean().optional(),
          h17180r_gmail: s.boolean().nullish(),
          h17180r_google_calendar: s.boolean().nullish(),
          h17180r_google_contacts: s.boolean().nullish(),
        }),
      }),
      v = (0, n.vU)(p.u, (e, { get: t }) => ({
        queryKey: ["plugins", "settings", t(l.Sk), e],
        enabled: null != t(l.Sk),
        queryFn: async ({ signal: t }) => {
          let i = (0, c.Bk)(e)
          if (null == i) throw new b.fk("Plugin not found", 404, void 0, null)
          return g.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
            surface: "settings",
            parameters: { path: { plugin_id: i } },
            additionalHeaders: (0, d.A)(),
            signal: t,
          })
        },
        staleTime: m.D.ONE_MINUTE,
      })),
      x = (0, n.vU)(p.u, ({ pluginId: e, skillName: t }, { get: i }) => ({
        queryKey: ["plugins", "settings", i(l.tT), e, "skill", t],
        enabled: null != i(l.tT),
        retryOnMount: !1,
        queryFn: ({ signal: i }) =>
          g.CodexRequest.safeGet("/ps/plugins/{plugin_id}/skills/{skill_name}", {
            surface: "settings",
            parameters: { path: { plugin_id: e, skill_name: t }, query: { includeDownloadUrls: !1 } },
            additionalHeaders: (0, d.A)("chatgpt"),
            signal: i,
            expectedErrorStatuses: [403, 404],
          }),
        staleTime: m.D.FIVE_MINUTES,
      })),
      w = (0, n.vU)(p.u, (e, { get: t }) => ({
        queryKey: ["plugins", "settings-app", t(l.Sk), e],
        enabled: null != t(l.Sk),
        queryFn: ({ signal: t }) =>
          g.CodexRequest.safeGet("/aip/connectors/{connector_id}", {
            surface: "settings",
            parameters: { path: { connector_id: e }, query: { include_actions: !0 } },
            additionalHeaders: (0, o.GR)(),
            signal: t,
          }),
        staleTime: m.D.FIVE_MINUTES,
      })),
      k = (0, n.vU)(p.u, (e, { get: t }) => (0, h.cO)(e, t(l.Sk))),
      C = (0, n.RD)(p.u, ({ get: e, scope: t }) => {
        let i = e(l.Sk),
          n = ["plugin-settings-user", i],
          { retry: s = 3 * !r.H.isServer() } = t.queryClient.defaultQueryOptions({ queryKey: n })
        return {
          queryKey: n,
          enabled: null != i,
          queryFn: async ({ signal: e, queryKey: r }) =>
            y.parse(await (0, u.s)(t, g.CodexRequest, { accountId: i, queryKey: r, signal: e })),
          retry: (e, t) =>
            "AbortError" !== t.name && ("function" == typeof s ? s(e, t) : !0 === s || ("number" == typeof s && e < s)),
          staleTime: m.D.ONE_MINUTE,
        }
      }),
      S = (0, n.RD)(p.u, ({ get: e }) => ({
        queryKey: ["plugin-settings-sync", e(l.Sk)],
        enabled: null != e(l.Sk),
        queryFn: ({ signal: e }) => g.CodexRequest.safeGet("/ca/v2/user/connection_status", { signal: e }),
        staleTime: m.D.ONE_MINUTE,
      }))
    ;((0, n.RD)(p.u, ({ get: e }) => {
      let t = e(l.Sk),
        { data: i } = e(S),
        r = [
          ...new Set(
            i?.connection_statuses.flatMap(({ user_connection_details: e }) => {
              let t = (0, _.n)(e)
              return null == t ? [] : [t]
            }),
          ),
        ].sort()
      return {
        queryKey: ["plugins", "settings-admin-sync", t, r],
        enabled: null != t && null != i,
        queryFn: async ({ signal: e }) => {
          let i = { ...(0, d.A)(), ...(null == t ? {} : { "ChatGPT-Account-Id": t }) }
          return (
            await Promise.all(
              r.map(async (t) => {
                let { plugin_id: r } = await g.CodexRequest.safeGet("/ps/plugins/canonical-app/{app_id}", {
                  surface: "settings",
                  parameters: { path: { app_id: t } },
                  additionalHeaders: i,
                  signal: e,
                })
                return null == r
                  ? []
                  : [
                      await g.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                        surface: "settings",
                        parameters: { path: { plugin_id: r } },
                        additionalHeaders: i,
                        signal: e,
                      }),
                    ]
              }),
            )
          ).flat()
        },
        staleTime: m.D.ONE_MINUTE,
      }
    }),
      i.d(
        t,
        {},
        {
          Li: v,
          ZF: S,
          Zi: async function (e, t) {
            if (
              (await Promise.all([
                ...[
                  f.qw,
                  o.RJ,
                  a.hH,
                  ["apps", "list"],
                  ["apps", "link"],
                  ["plugin-settings-sync"],
                  ["chatgpt-system-hints", "plugins"],
                ].map((t) => e.invalidateQueries({ queryKey: t })),
                e.invalidateQueries({
                  predicate: ({ queryKey: e }) => "library-api" === e[0] && "mounted-capabilities" === e[3],
                }),
              ]),
              null != t)
            ) {
              let i = e.getQueryState(t)?.error
              if (null != i) throw i
            }
          },
          cH: x,
          d6: k,
          pq: async function (e, t) {
            await g.CodexRequest.safePatch("/aip/connectors/links/{link_id}", {
              surface: "settings",
              parameters: { path: { link_id: e } },
              requestBody: { apps_privacy_control: t },
              additionalHeaders: (0, o.GR)(),
            })
          },
          y2: C,
          zE: w,
        },
      ))
  },
  Fd8Z(e, t, i) {
    var r = i("hOO0")
    let n = new Map([
      ["connector_1ee51bd730c272434e1b17c46f8a2397", "connector_69c18c28f1188191bf5b8445c4ab0a2e"],
      ["connector_bef400199679ee9f67f080058d5c9e89", "connector_4aaab2856305417b993eca9a216aaf6e"],
      ["connector_5ae2fd76f08447718080f11bc2faac6c", "connector_1e4f6a44acf14e3ca1d96672f8c945bc"],
      ["connector_601cc22bb3b740599c7274cf7e8084e8", "connector_246af0940da3457da0e751171dc1ce60"],
    ])
    function s(e) {
      if (
        ("admin_connected" !== e.auth_status &&
          ("google_drive_dwd" !== e.knowledge_connector_type ||
            "admin_managed_disconnected" === e.auth_status ||
            ("activated" !== e.activation_status && "partially_activated" !== e.activation_status))) ||
        null == e.connector_id
      )
        return null
      let t = (0, r.$)(e.connector_id)
      return n.get(t) ?? t
    }
    i.d(
      t,
      {},
      {
        n: s,
        w: function ({ appId: e, links: t, statuses: i, allowLegacyAccountFallback: n }) {
          let a = (0, r.$)(e)
          return i.filter(({ user_connection_details: e }) => {
            if ("user_connected" === e.auth_status)
              return null != e.backing_link_id
                ? t.some((t) => t.id === e.backing_link_id && (0, r.$)(t.connector_id) === a)
                : n &&
                    "connector_2128aebfecb84f64a069897515042a44" === a &&
                    "gmail_sync_connector" === e.connection_type
            let i = s(e)
            return null != i
              ? i === a
              : "admin_connected" === e.auth_status &&
                  n &&
                  "connector_4aaab2856305417b993eca9a216aaf6e" === a &&
                  "outlook_admin_sync_connector" === e.connection_type &&
                  null == e.backing_link_id
          })
        },
      },
    )
  },
  ARVD(e, t, i) {
    i.d(
      t,
      {},
      {
        z: function (e, t) {
          if (!Number.isFinite(e) || e <= 0)
            return t.formatNumber(0, { style: "unit", unit: "byte", unitDisplay: "long" })
          if (e < 1024) return t.formatNumber(e, { style: "unit", unit: "byte", unitDisplay: "long" })
          let i = ["kilobyte", "megabyte", "gigabyte", "terabyte"],
            r = e / 1024,
            n = 0
          for (; r >= 1024 && n < i.length - 1;) ((r /= 1024), (n += 1))
          return t.formatNumber(r, { maximumFractionDigits: 1, style: "unit", unit: i[n], unitDisplay: "short" })
        },
      },
    )
  },
}
//# sourceMappingURL=638374.f9fd58b41c.js.map
