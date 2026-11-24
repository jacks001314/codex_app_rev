export const __rspack_esm_ids = [996150]
export const __webpack_modules__ = {
  f8lQ(e) {
    var t = {
      single_source_shortest_paths: function (e, r, l) {
        var i,
          o,
          c,
          n,
          a,
          s,
          u,
          d = {},
          p = {}
        p[r] = 0
        var f = t.PriorityQueue.make()
        for (f.push(r, 0); !f.empty();)
          for (c in ((o = (i = f.pop()).value), (n = i.cost), (a = e[o] || {})))
            a.hasOwnProperty(c) &&
              ((s = n + a[c]), (u = p[c]), (void 0 === p[c] || u > s) && ((p[c] = s), f.push(c, s), (d[c] = o)))
        if (void 0 !== l && void 0 === p[l]) throw Error(["Could not find a path from ", r, " to ", l, "."].join(""))
        return d
      },
      extract_shortest_path_from_predecessor_list: function (e, t) {
        for (var r = [], l = t; l;) (r.push(l), e[l], (l = e[l]))
        return (r.reverse(), r)
      },
      find_path: function (e, r, l) {
        var i = t.single_source_shortest_paths(e, r, l)
        return t.extract_shortest_path_from_predecessor_list(i, l)
      },
      PriorityQueue: {
        make: function (e) {
          var r,
            l = t.PriorityQueue,
            i = {}
          for (r in ((e = e || {}), l)) l.hasOwnProperty(r) && (i[r] = l[r])
          return ((i.queue = []), (i.sorter = e.sorter || l.default_sorter), i)
        },
        default_sorter: function (e, t) {
          return e.cost - t.cost
        },
        push: function (e, t) {
          ;(this.queue.push({ value: e, cost: t }), this.queue.sort(this.sorter))
        },
        pop: function () {
          return this.queue.shift()
        },
        empty: function () {
          return 0 === this.queue.length
        },
      },
    }
    e.exports = t
  },
  rFhZ(e, t, r) {
    let l = r("VJml"),
      i = r("GN25"),
      o = r("g2wZ"),
      c = r("du2n")
    function n(e, t, r, o, c) {
      let n = [].slice.call(arguments, 1),
        a = n.length,
        s = "function" == typeof n[a - 1]
      if (!s && !l()) throw Error("Callback required as last argument")
      if (s) {
        if (a < 2) throw Error("Too few arguments provided")
        2 === a
          ? ((c = r), (r = t), (t = o = void 0))
          : 3 === a &&
            (t.getContext && void 0 === c ? ((c = o), (o = void 0)) : ((c = o), (o = r), (r = t), (t = void 0)))
      } else {
        if (a < 1) throw Error("Too few arguments provided")
        return (
          1 === a ? ((r = t), (t = o = void 0)) : 2 !== a || t.getContext || ((o = r), (r = t), (t = void 0)),
          new Promise(function (l, c) {
            try {
              let c = i.create(r, o)
              l(e(c, t, o))
            } catch (e) {
              c(e)
            }
          })
        )
      }
      try {
        let l = i.create(r, o)
        c(null, e(l, t, o))
      } catch (e) {
        c(e)
      }
    }
    ;((t.vt = i.create),
      n.bind(null, o.render),
      n.bind(null, o.renderToDataURL),
      n.bind(null, function (e, t, r) {
        return c.render(e, r)
      }))
  },
  VJml(e) {
    e.exports = function () {
      return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
    }
  },
  NxDs(e, t, r) {
    let l = r("YBfX").getSymbolSize
    ;((t.getRowColCoords = function (e) {
      if (1 === e) return []
      let t = Math.floor(e / 7) + 2,
        r = l(e),
        i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)),
        o = [r - 7]
      for (let e = 1; e < t - 1; e++) o[e] = o[e - 1] - i
      return (o.push(6), o.reverse())
    }),
      (t.getPositions = function (e) {
        let r = [],
          l = t.getRowColCoords(e),
          i = l.length
        for (let e = 0; e < i; e++)
          for (let t = 0; t < i; t++)
            (0 !== e || 0 !== t) && (0 !== e || t !== i - 1) && (e !== i - 1 || 0 !== t) && r.push([l[e], l[t]])
        return r
      }))
  },
  XrtS(e, t, r) {
    let l = r("VFGm"),
      i = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":",
      ]
    function o(e) {
      ;((this.mode = l.ALPHANUMERIC), (this.data = e))
    }
    ;((o.getBitsLength = function (e) {
      return 11 * Math.floor(e / 2) + (e % 2) * 6
    }),
      (o.prototype.getLength = function () {
        return this.data.length
      }),
      (o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length)
      }),
      (o.prototype.write = function (e) {
        let t
        for (t = 0; t + 2 <= this.data.length; t += 2) {
          let r = 45 * i.indexOf(this.data[t])
          ;((r += i.indexOf(this.data[t + 1])), e.put(r, 11))
        }
        this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6)
      }),
      (e.exports = o))
  },
  PrMp(e) {
    function t() {
      ;((this.buffer = []), (this.length = 0))
    }
    ;((t.prototype = {
      get: function (e) {
        let t = Math.floor(e / 8)
        return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1
      },
      put: function (e, t) {
        for (let r = 0; r < t; r++) this.putBit(((e >>> (t - r - 1)) & 1) == 1)
      },
      getLengthInBits: function () {
        return this.length
      },
      putBit: function (e) {
        let t = Math.floor(this.length / 8)
        ;(this.buffer.length <= t && this.buffer.push(0),
          e && (this.buffer[t] |= 128 >>> (this.length % 8)),
          this.length++)
      },
    }),
      (e.exports = t))
  },
  QOw5(e) {
    function t(e) {
      if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0")
      ;((this.size = e), (this.data = new Uint8Array(e * e)), (this.reservedBit = new Uint8Array(e * e)))
    }
    ;((t.prototype.set = function (e, t, r, l) {
      let i = e * this.size + t
      ;((this.data[i] = r), l && (this.reservedBit[i] = !0))
    }),
      (t.prototype.get = function (e, t) {
        return this.data[e * this.size + t]
      }),
      (t.prototype.xor = function (e, t, r) {
        this.data[e * this.size + t] ^= r
      }),
      (t.prototype.isReserved = function (e, t) {
        return this.reservedBit[e * this.size + t]
      }),
      (e.exports = t))
  },
  dees(e, t, r) {
    let l = r("VFGm")
    function i(e) {
      ;((this.mode = l.BYTE),
        "string" == typeof e ? (this.data = new TextEncoder().encode(e)) : (this.data = new Uint8Array(e)))
    }
    ;((i.getBitsLength = function (e) {
      return 8 * e
    }),
      (i.prototype.getLength = function () {
        return this.data.length
      }),
      (i.prototype.getBitsLength = function () {
        return i.getBitsLength(this.data.length)
      }),
      (i.prototype.write = function (e) {
        for (let t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8)
      }),
      (e.exports = i))
  },
  lbSx(e, t, r) {
    let l = r("Uv0t"),
      i = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4,
        5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6,
        13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21,
        29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33,
        45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47,
        65, 77, 25, 49, 68, 81,
      ],
      o = [
        7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108,
        130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198,
        288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588,
        196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560,
        810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
        1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
        1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316,
        1950, 2310, 750, 1372, 2040, 2430,
      ]
    ;((t.getBlocksCount = function (e, t) {
      switch (t) {
        case l.L:
          return i[(e - 1) * 4 + 0]
        case l.M:
          return i[(e - 1) * 4 + 1]
        case l.Q:
          return i[(e - 1) * 4 + 2]
        case l.H:
          return i[(e - 1) * 4 + 3]
        default:
          return
      }
    }),
      (t.getTotalCodewordsCount = function (e, t) {
        switch (t) {
          case l.L:
            return o[(e - 1) * 4 + 0]
          case l.M:
            return o[(e - 1) * 4 + 1]
          case l.Q:
            return o[(e - 1) * 4 + 2]
          case l.H:
            return o[(e - 1) * 4 + 3]
          default:
            return
        }
      }))
  },
  Uv0t(e, t) {
    ;((t.L = { bit: 1 }),
      (t.M = { bit: 0 }),
      (t.Q = { bit: 3 }),
      (t.H = { bit: 2 }),
      (t.isValid = function (e) {
        return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
      }),
      (t.from = function (e, r) {
        if (t.isValid(e)) return e
        try {
          if ("string" != typeof e) throw Error("Param is not a string")
          switch (e.toLowerCase()) {
            case "l":
            case "low":
              return t.L
            case "m":
            case "medium":
              return t.M
            case "q":
            case "quartile":
              return t.Q
            case "h":
            case "high":
              return t.H
            default:
              throw Error("Unknown EC Level: " + e)
          }
        } catch (e) {
          return r
        }
      }))
  },
  IibT(e, t, r) {
    let l = r("YBfX").getSymbolSize
    t.getPositions = function (e) {
      let t = l(e)
      return [
        [0, 0],
        [t - 7, 0],
        [0, t - 7],
      ]
    }
  },
  gdIu(e, t, r) {
    let l = r("YBfX"),
      i = l.getBCHDigit(1335)
    t.getEncodedBits = function (e, t) {
      let r = (e.bit << 3) | t,
        o = r << 10
      for (; l.getBCHDigit(o) - i >= 0;) o ^= 1335 << (l.getBCHDigit(o) - i)
      return ((r << 10) | o) ^ 21522
    }
  },
  aaID(e, t) {
    let r = new Uint8Array(512),
      l = new Uint8Array(256),
      i = 1
    for (let e = 0; e < 255; e++) ((r[e] = i), (l[i] = e), 256 & (i <<= 1) && (i ^= 285))
    for (let e = 255; e < 512; e++) r[e] = r[e - 255]
    ;((t.exp = function (e) {
      return r[e]
    }),
      (t.mul = function (e, t) {
        return 0 === e || 0 === t ? 0 : r[l[e] + l[t]]
      }))
  },
  MEGq(e, t, r) {
    let l = r("VFGm"),
      i = r("YBfX")
    function o(e) {
      ;((this.mode = l.KANJI), (this.data = e))
    }
    ;((o.getBitsLength = function (e) {
      return 13 * e
    }),
      (o.prototype.getLength = function () {
        return this.data.length
      }),
      (o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length)
      }),
      (o.prototype.write = function (e) {
        let t
        for (t = 0; t < this.data.length; t++) {
          let r = i.toSJIS(this.data[t])
          if (r >= 33088 && r <= 40956) r -= 33088
          else if (r >= 57408 && r <= 60351) r -= 49472
          else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8")
          ;((r = ((r >>> 8) & 255) * 192 + (255 & r)), e.put(r, 13))
        }
      }),
      (e.exports = o))
  },
  LE59(e, t) {
    t.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7,
    }
    ;((t.isValid = function (e) {
      return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
    }),
      (t.from = function (e) {
        return t.isValid(e) ? parseInt(e, 10) : void 0
      }),
      (t.getPenaltyN1 = function (e) {
        let t = e.size,
          r = 0,
          l = 0,
          i = 0,
          o = null,
          c = null
        for (let n = 0; n < t; n++) {
          ;((l = i = 0), (o = c = null))
          for (let a = 0; a < t; a++) {
            let t = e.get(n, a)
            ;(t === o ? l++ : (l >= 5 && (r += 3 + (l - 5)), (o = t), (l = 1)),
              (t = e.get(a, n)) === c ? i++ : (i >= 5 && (r += 3 + (i - 5)), (c = t), (i = 1)))
          }
          ;(l >= 5 && (r += 3 + (l - 5)), i >= 5 && (r += 3 + (i - 5)))
        }
        return r
      }),
      (t.getPenaltyN2 = function (e) {
        let t = e.size,
          r = 0
        for (let l = 0; l < t - 1; l++)
          for (let i = 0; i < t - 1; i++) {
            let t = e.get(l, i) + e.get(l, i + 1) + e.get(l + 1, i) + e.get(l + 1, i + 1)
            ;(4 === t || 0 === t) && r++
          }
        return 3 * r
      }),
      (t.getPenaltyN3 = function (e) {
        let t = e.size,
          r = 0,
          l = 0,
          i = 0
        for (let o = 0; o < t; o++) {
          l = i = 0
          for (let c = 0; c < t; c++)
            ((l = ((l << 1) & 2047) | e.get(o, c)),
              c >= 10 && (1488 === l || 93 === l) && r++,
              (i = ((i << 1) & 2047) | e.get(c, o)),
              c >= 10 && (1488 === i || 93 === i) && r++)
        }
        return 40 * r
      }),
      (t.getPenaltyN4 = function (e) {
        let t = 0,
          r = e.data.length
        for (let l = 0; l < r; l++) t += e.data[l]
        return 10 * Math.abs(Math.ceil((100 * t) / r / 5) - 10)
      }),
      (t.applyMask = function (e, r) {
        let l = r.size
        for (let i = 0; i < l; i++)
          for (let o = 0; o < l; o++)
            r.isReserved(o, i) ||
              r.xor(
                o,
                i,
                (function (e, r, l) {
                  switch (e) {
                    case t.Patterns.PATTERN000:
                      return (r + l) % 2 == 0
                    case t.Patterns.PATTERN001:
                      return r % 2 == 0
                    case t.Patterns.PATTERN010:
                      return l % 3 == 0
                    case t.Patterns.PATTERN011:
                      return (r + l) % 3 == 0
                    case t.Patterns.PATTERN100:
                      return (Math.floor(r / 2) + Math.floor(l / 3)) % 2 == 0
                    case t.Patterns.PATTERN101:
                      return ((r * l) % 2) + ((r * l) % 3) == 0
                    case t.Patterns.PATTERN110:
                      return (((r * l) % 2) + ((r * l) % 3)) % 2 == 0
                    case t.Patterns.PATTERN111:
                      return (((r * l) % 3) + ((r + l) % 2)) % 2 == 0
                    default:
                      throw Error("bad maskPattern:" + e)
                  }
                })(e, o, i),
              )
      }),
      (t.getBestMask = function (e, r) {
        let l = Object.keys(t.Patterns).length,
          i = 0,
          o = 1 / 0
        for (let c = 0; c < l; c++) {
          ;(r(c), t.applyMask(c, e))
          let l = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e)
          ;(t.applyMask(c, e), l < o && ((o = l), (i = c)))
        }
        return i
      }))
  },
  VFGm(e, t, r) {
    let l = r("Y8xa"),
      i = r("fFdr")
    ;((t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
      (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
      (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
      (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
      (t.MIXED = { bit: -1 }),
      (t.getCharCountIndicator = function (e, t) {
        if (!e.ccBits) throw Error("Invalid mode: " + e)
        if (!l.isValid(t)) throw Error("Invalid version: " + t)
        return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
      }),
      (t.getBestModeForData = function (e) {
        return i.testNumeric(e) ? t.NUMERIC : i.testAlphanumeric(e) ? t.ALPHANUMERIC : i.testKanji(e) ? t.KANJI : t.BYTE
      }),
      (t.toString = function (e) {
        if (e && e.id) return e.id
        throw Error("Invalid mode")
      }),
      (t.isValid = function (e) {
        return e && e.bit && e.ccBits
      }),
      (t.from = function (e, r) {
        if (t.isValid(e)) return e
        try {
          if ("string" != typeof e) throw Error("Param is not a string")
          switch (e.toLowerCase()) {
            case "numeric":
              return t.NUMERIC
            case "alphanumeric":
              return t.ALPHANUMERIC
            case "kanji":
              return t.KANJI
            case "byte":
              return t.BYTE
            default:
              throw Error("Unknown mode: " + e)
          }
        } catch (e) {
          return r
        }
      }))
  },
  meD9(e, t, r) {
    let l = r("VFGm")
    function i(e) {
      ;((this.mode = l.NUMERIC), (this.data = e.toString()))
    }
    ;((i.getBitsLength = function (e) {
      return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0)
    }),
      (i.prototype.getLength = function () {
        return this.data.length
      }),
      (i.prototype.getBitsLength = function () {
        return i.getBitsLength(this.data.length)
      }),
      (i.prototype.write = function (e) {
        let t, r
        for (t = 0; t + 3 <= this.data.length; t += 3) ((r = parseInt(this.data.substr(t, 3), 10)), e.put(r, 10))
        let l = this.data.length - t
        l > 0 && ((r = parseInt(this.data.substr(t), 10)), e.put(r, 3 * l + 1))
      }),
      (e.exports = i))
  },
  CyKQ(e, t, r) {
    let l = r("aaID")
    ;((t.mul = function (e, t) {
      let r = new Uint8Array(e.length + t.length - 1)
      for (let i = 0; i < e.length; i++) for (let o = 0; o < t.length; o++) r[i + o] ^= l.mul(e[i], t[o])
      return r
    }),
      (t.mod = function (e, t) {
        let r = new Uint8Array(e)
        for (; r.length - t.length >= 0;) {
          let e = r[0]
          for (let i = 0; i < t.length; i++) r[i] ^= l.mul(t[i], e)
          let i = 0
          for (; i < r.length && 0 === r[i];) i++
          r = r.slice(i)
        }
        return r
      }),
      (t.generateECPolynomial = function (e) {
        let r = new Uint8Array([1])
        for (let i = 0; i < e; i++) r = t.mul(r, new Uint8Array([1, l.exp(i)]))
        return r
      }))
  },
  GN25(e, t, r) {
    let l = r("YBfX"),
      i = r("Uv0t"),
      o = r("PrMp"),
      c = r("QOw5"),
      n = r("NxDs"),
      a = r("IibT"),
      s = r("LE59"),
      u = r("lbSx"),
      d = r("F0J9"),
      p = r("SIJL"),
      f = r("gdIu"),
      h = r("VFGm"),
      y = r("qjFV")
    function g(e, t, r) {
      let l,
        i,
        o = e.size,
        c = f.getEncodedBits(t, r)
      for (l = 0; l < 15; l++)
        ((i = ((c >> l) & 1) == 1),
          l < 6 ? e.set(l, 8, i, !0) : l < 8 ? e.set(l + 1, 8, i, !0) : e.set(o - 15 + l, 8, i, !0),
          l < 8 ? e.set(8, o - l - 1, i, !0) : l < 9 ? e.set(8, 15 - l - 1 + 1, i, !0) : e.set(8, 15 - l - 1, i, !0))
      e.set(o - 8, 8, 1, !0)
    }
    t.create = function (e, t) {
      let r, f
      if (void 0 === e || "" === e) throw Error("No input text")
      let x = i.M
      return (
        void 0 !== t &&
          ((x = i.from(t.errorCorrectionLevel, i.M)),
          (r = p.from(t.version)),
          (f = s.from(t.maskPattern)),
          t.toSJISFunc && l.setToSJISFunction(t.toSJISFunc)),
        (function (e, t, r, i) {
          let f
          if (Array.isArray(e)) f = y.fromArray(e)
          else if ("string" == typeof e) {
            let l = t
            if (!l) {
              let t = y.rawSplit(e)
              l = p.getBestVersionForData(t, r)
            }
            f = y.fromString(e, l || 40)
          } else throw Error("Invalid data")
          let x = p.getBestVersionForData(f, r)
          if (!x) throw Error("The amount of data is too big to be stored in a QR Code")
          if (t) {
            if (t < x)
              throw Error(
                "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                  x +
                  ".\n",
              )
          } else t = x
          let C = (function (e, t, r) {
              let i = new o()
              r.forEach(function (t) {
                ;(i.put(t.mode.bit, 4), i.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(i))
              })
              let c = (l.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t)) * 8
              for (i.getLengthInBits() + 4 <= c && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0)
              let n = (c - i.getLengthInBits()) / 8
              for (let e = 0; e < n; e++) i.put(e % 2 ? 17 : 236, 8)
              return (function (e, t, r) {
                let i,
                  o,
                  c = l.getSymbolTotalCodewords(t),
                  n = c - u.getTotalCodewordsCount(t, r),
                  a = u.getBlocksCount(t, r),
                  s = c % a,
                  p = a - s,
                  f = Math.floor(c / a),
                  h = Math.floor(n / a),
                  y = h + 1,
                  g = f - h,
                  x = new d(g),
                  C = 0,
                  m = Array(a),
                  b = Array(a),
                  w = 0,
                  v = new Uint8Array(e.buffer)
                for (let e = 0; e < a; e++) {
                  let t = e < p ? h : y
                  ;((m[e] = v.slice(C, C + t)), (b[e] = x.encode(m[e])), (C += t), (w = Math.max(w, t)))
                }
                let M = new Uint8Array(c),
                  A = 0
                for (i = 0; i < w; i++) for (o = 0; o < a; o++) i < m[o].length && (M[A++] = m[o][i])
                for (i = 0; i < g; i++) for (o = 0; o < a; o++) M[A++] = b[o][i]
                return M
              })(i, e, t)
            })(t, r, f),
            m = new c(l.getSymbolSize(t))
          !(function (e, t) {
            let r = e.size,
              l = a.getPositions(t)
            for (let t = 0; t < l.length; t++) {
              let i = l[t][0],
                o = l[t][1]
              for (let t = -1; t <= 7; t++)
                if (!(i + t <= -1) && !(r <= i + t))
                  for (let l = -1; l <= 7; l++)
                    o + l <= -1 ||
                      r <= o + l ||
                      ((t >= 0 && t <= 6 && (0 === l || 6 === l)) ||
                      (l >= 0 && l <= 6 && (0 === t || 6 === t)) ||
                      (t >= 2 && t <= 4 && l >= 2 && l <= 4)
                        ? e.set(i + t, o + l, !0, !0)
                        : e.set(i + t, o + l, !1, !0))
            }
          })(m, t)
          let b = m.size
          for (let e = 8; e < b - 8; e++) {
            let t = e % 2 == 0
            ;(m.set(e, 6, t, !0), m.set(6, e, t, !0))
          }
          return (
            !(function (e, t) {
              let r = n.getPositions(t)
              for (let t = 0; t < r.length; t++) {
                let l = r[t][0],
                  i = r[t][1]
                for (let t = -2; t <= 2; t++)
                  for (let r = -2; r <= 2; r++)
                    -2 === t || 2 === t || -2 === r || 2 === r || (0 === t && 0 === r)
                      ? e.set(l + t, i + r, !0, !0)
                      : e.set(l + t, i + r, !1, !0)
              }
            })(m, t),
            g(m, r, 0),
            t >= 7 &&
              (function (e, t) {
                let r,
                  l,
                  i,
                  o = e.size,
                  c = p.getEncodedBits(t)
                for (let t = 0; t < 18; t++)
                  ((r = Math.floor(t / 3)),
                    (l = (t % 3) + o - 8 - 3),
                    (i = ((c >> t) & 1) == 1),
                    e.set(r, l, i, !0),
                    e.set(l, r, i, !0))
              })(m, t),
            !(function (e, t) {
              let r = e.size,
                l = -1,
                i = r - 1,
                o = 7,
                c = 0
              for (let n = r - 1; n > 0; n -= 2)
                for (6 === n && n--; ;) {
                  for (let r = 0; r < 2; r++)
                    if (!e.isReserved(i, n - r)) {
                      let l = !1
                      ;(c < t.length && (l = ((t[c] >>> o) & 1) == 1), e.set(i, n - r, l), -1 == --o && (c++, (o = 7)))
                    }
                  if ((i += l) < 0 || r <= i) {
                    ;((i -= l), (l = -l))
                    break
                  }
                }
            })(m, C),
            isNaN(i) && (i = s.getBestMask(m, g.bind(null, m, r))),
            s.applyMask(i, m),
            g(m, r, i),
            { modules: m, version: t, errorCorrectionLevel: r, maskPattern: i, segments: f }
          )
        })(e, r, x, f)
      )
    }
  },
  F0J9(e, t, r) {
    let l = r("CyKQ")
    function i(e) {
      ;((this.genPoly = void 0), (this.degree = e), this.degree && this.initialize(this.degree))
    }
    ;((i.prototype.initialize = function (e) {
      ;((this.degree = e), (this.genPoly = l.generateECPolynomial(this.degree)))
    }),
      (i.prototype.encode = function (e) {
        if (!this.genPoly) throw Error("Encoder not initialized")
        let t = new Uint8Array(e.length + this.degree)
        t.set(e)
        let r = l.mod(t, this.genPoly),
          i = this.degree - r.length
        if (i > 0) {
          let e = new Uint8Array(this.degree)
          return (e.set(r, i), e)
        }
        return r
      }),
      (e.exports = i))
  },
  fFdr(e, t) {
    let r = "[0-9]+",
      l =
        "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
      i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (l = l.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+"
    ;((t.KANJI = RegExp(l, "g")),
      (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
      (t.BYTE = RegExp(i, "g")),
      (t.NUMERIC = RegExp(r, "g")),
      (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g")))
    let o = RegExp("^" + l + "$"),
      c = RegExp("^" + r + "$"),
      n = RegExp("^[A-Z0-9 $%*+\\-./:]+$")
    ;((t.testKanji = function (e) {
      return o.test(e)
    }),
      (t.testNumeric = function (e) {
        return c.test(e)
      }),
      (t.testAlphanumeric = function (e) {
        return n.test(e)
      }))
  },
  qjFV(e, t, r) {
    let l = r("VFGm"),
      i = r("meD9"),
      o = r("XrtS"),
      c = r("dees"),
      n = r("MEGq"),
      a = r("fFdr"),
      s = r("YBfX"),
      u = r("f8lQ")
    function d(e) {
      return unescape(encodeURIComponent(e)).length
    }
    function p(e, t, r) {
      let l,
        i = []
      for (; null !== (l = e.exec(r));) i.push({ data: l[0], index: l.index, mode: t, length: l[0].length })
      return i
    }
    function f(e) {
      let t,
        r,
        i = p(a.NUMERIC, l.NUMERIC, e),
        o = p(a.ALPHANUMERIC, l.ALPHANUMERIC, e)
      return (
        s.isKanjiModeEnabled()
          ? ((t = p(a.BYTE, l.BYTE, e)), (r = p(a.KANJI, l.KANJI, e)))
          : ((t = p(a.BYTE_KANJI, l.BYTE, e)), (r = [])),
        i
          .concat(o, t, r)
          .sort(function (e, t) {
            return e.index - t.index
          })
          .map(function (e) {
            return { data: e.data, mode: e.mode, length: e.length }
          })
      )
    }
    function h(e, t) {
      switch (t) {
        case l.NUMERIC:
          return i.getBitsLength(e)
        case l.ALPHANUMERIC:
          return o.getBitsLength(e)
        case l.KANJI:
          return n.getBitsLength(e)
        case l.BYTE:
          return c.getBitsLength(e)
      }
    }
    function y(e, t) {
      let r,
        a = l.getBestModeForData(e)
      if ((r = l.from(t, a)) !== l.BYTE && r.bit < a.bit)
        throw Error(
          '"' + e + '" cannot be encoded with mode ' + l.toString(r) + ".\n Suggested mode is: " + l.toString(a),
        )
      switch ((r === l.KANJI && !s.isKanjiModeEnabled() && (r = l.BYTE), r)) {
        case l.NUMERIC:
          return new i(e)
        case l.ALPHANUMERIC:
          return new o(e)
        case l.KANJI:
          return new n(e)
        case l.BYTE:
          return new c(e)
      }
    }
    ;((t.fromArray = function (e) {
      return e.reduce(function (e, t) {
        return ("string" == typeof t ? e.push(y(t, null)) : t.data && e.push(y(t.data, t.mode)), e)
      }, [])
    }),
      (t.fromString = function (e, r) {
        let i = (function (e, t) {
            let r = {},
              i = { start: {} },
              o = ["start"]
            for (let c = 0; c < e.length; c++) {
              let n = e[c],
                a = []
              for (let e = 0; e < n.length; e++) {
                let s = n[e],
                  u = "" + c + e
                ;(a.push(u), (r[u] = { node: s, lastCount: 0 }), (i[u] = {}))
                for (let e = 0; e < o.length; e++) {
                  let c = o[e]
                  r[c] && r[c].node.mode === s.mode
                    ? ((i[c][u] = h(r[c].lastCount + s.length, s.mode) - h(r[c].lastCount, s.mode)),
                      (r[c].lastCount += s.length))
                    : (r[c] && (r[c].lastCount = s.length),
                      (i[c][u] = h(s.length, s.mode) + 4 + l.getCharCountIndicator(s.mode, t)))
                }
              }
              o = a
            }
            for (let e = 0; e < o.length; e++) i[o[e]].end = 0
            return { map: i, table: r }
          })(
            (function (e) {
              let t = []
              for (let r = 0; r < e.length; r++) {
                let i = e[r]
                switch (i.mode) {
                  case l.NUMERIC:
                    t.push([
                      i,
                      { data: i.data, mode: l.ALPHANUMERIC, length: i.length },
                      { data: i.data, mode: l.BYTE, length: i.length },
                    ])
                    break
                  case l.ALPHANUMERIC:
                    t.push([i, { data: i.data, mode: l.BYTE, length: i.length }])
                    break
                  case l.KANJI:
                    t.push([i, { data: i.data, mode: l.BYTE, length: d(i.data) }])
                    break
                  case l.BYTE:
                    t.push([{ data: i.data, mode: l.BYTE, length: d(i.data) }])
                }
              }
              return t
            })(f(e, s.isKanjiModeEnabled())),
            r,
          ),
          o = u.find_path(i.map, "start", "end"),
          c = []
        for (let e = 1; e < o.length - 1; e++) c.push(i.table[o[e]].node)
        return t.fromArray(
          c.reduce(function (e, t) {
            let r = e.length - 1 >= 0 ? e[e.length - 1] : null
            return (r && r.mode === t.mode ? (e[e.length - 1].data += t.data) : e.push(t), e)
          }, []),
        )
      }),
      (t.rawSplit = function (e) {
        return t.fromArray(f(e, s.isKanjiModeEnabled()))
      }))
  },
  YBfX(e, t) {
    let r,
      l = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258,
        1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
      ]
    ;((t.getSymbolSize = function (e) {
      if (!e) throw Error('"version" cannot be null or undefined')
      if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40')
      return 4 * e + 17
    }),
      (t.getSymbolTotalCodewords = function (e) {
        return l[e]
      }),
      (t.getBCHDigit = function (e) {
        let t = 0
        for (; 0 !== e;) (t++, (e >>>= 1))
        return t
      }),
      (t.setToSJISFunction = function (e) {
        if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.')
        r = e
      }),
      (t.isKanjiModeEnabled = function () {
        return void 0 !== r
      }),
      (t.toSJIS = function (e) {
        return r(e)
      }))
  },
  Y8xa(e, t) {
    t.isValid = function (e) {
      return !isNaN(e) && e >= 1 && e <= 40
    }
  },
  SIJL(e, t, r) {
    let l = r("YBfX"),
      i = r("lbSx"),
      o = r("Uv0t"),
      c = r("VFGm"),
      n = r("Y8xa"),
      a = l.getBCHDigit(7973)
    function s(e, t) {
      return c.getCharCountIndicator(e, t) + 4
    }
    ;((t.from = function (e, t) {
      return n.isValid(e) ? parseInt(e, 10) : t
    }),
      (t.getCapacity = function (e, t, r) {
        if (!n.isValid(e)) throw Error("Invalid QR Code version")
        void 0 === r && (r = c.BYTE)
        let o = (l.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t)) * 8
        if (r === c.MIXED) return o
        let a = o - s(r, e)
        switch (r) {
          case c.NUMERIC:
            return Math.floor((a / 10) * 3)
          case c.ALPHANUMERIC:
            return Math.floor((a / 11) * 2)
          case c.KANJI:
            return Math.floor(a / 13)
          case c.BYTE:
          default:
            return Math.floor(a / 8)
        }
      }),
      (t.getBestVersionForData = function (e, r) {
        let l,
          i = o.from(r, o.M)
        if (Array.isArray(e)) {
          if (e.length > 1) {
            for (let r = 1; r <= 40; r++)
              if (
                (function (e, t) {
                  let r = 0
                  return (
                    e.forEach(function (e) {
                      let l = s(e.mode, t)
                      r += l + e.getBitsLength()
                    }),
                    r
                  )
                })(e, r) <= t.getCapacity(r, i, c.MIXED)
              )
                return r
            return
          }
          if (0 === e.length) return 1
          l = e[0]
        } else l = e
        return (function (e, r, l) {
          for (let i = 1; i <= 40; i++) if (r <= t.getCapacity(i, l, e)) return i
        })(l.mode, l.getLength(), i)
      }),
      (t.getEncodedBits = function (e) {
        if (!n.isValid(e) || e < 7) throw Error("Invalid QR Code version")
        let t = e << 12
        for (; l.getBCHDigit(t) - a >= 0;) t ^= 7973 << (l.getBCHDigit(t) - a)
        return (e << 12) | t
      }))
  },
  g2wZ(e, t, r) {
    let l = r("hidh")
    ;((t.render = function (e, t, r) {
      var i
      let o = r,
        c = t
      ;(void 0 !== o || (t && t.getContext) || ((o = t), (t = void 0)),
        t ||
          (c = (function () {
            try {
              return document.createElement("canvas")
            } catch (e) {
              throw Error("You need to specify a canvas element")
            }
          })()),
        (o = l.getOptions(o)))
      let n = l.getImageWidth(e.modules.size, o),
        a = c.getContext("2d"),
        s = a.createImageData(n, n)
      return (
        l.qrToImageData(s.data, e, o),
        (i = c),
        a.clearRect(0, 0, i.width, i.height),
        i.style || (i.style = {}),
        (i.height = n),
        (i.width = n),
        (i.style.height = n + "px"),
        (i.style.width = n + "px"),
        a.putImageData(s, 0, 0),
        c
      )
    }),
      (t.renderToDataURL = function (e, r, l) {
        let i = l
        ;(void 0 !== i || (r && r.getContext) || ((i = r), (r = void 0)), i || (i = {}))
        let o = t.render(e, r, i),
          c = i.type || "image/png",
          n = i.rendererOpts || {}
        return o.toDataURL(c, n.quality)
      }))
  },
  du2n(e, t, r) {
    let l = r("hidh")
    function i(e, t) {
      let r = e.a / 255,
        l = t + '="' + e.hex + '"'
      return r < 1 ? l + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : l
    }
    function o(e, t, r) {
      let l = e + t
      return (void 0 !== r && (l += " " + r), l)
    }
    t.render = function (e, t, r) {
      let c = l.getOptions(t),
        n = e.modules.size,
        a = e.modules.data,
        s = n + 2 * c.margin,
        u = c.color.light.a ? "<path " + i(c.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "",
        d =
          "<path " +
          i(c.color.dark, "stroke") +
          ' d="' +
          (function (e, t, r) {
            let l = "",
              i = 0,
              c = !1,
              n = 0
            for (let a = 0; a < e.length; a++) {
              let s = Math.floor(a % t),
                u = Math.floor(a / t)
              ;(s || c || (c = !0),
                e[a]
                  ? (n++,
                    (a > 0 && s > 0 && e[a - 1]) ||
                      ((l += c ? o("M", s + r, 0.5 + u + r) : o("m", i, 0)), (i = 0), (c = !1)),
                    (s + 1 < t && e[a + 1]) || ((l += o("h", n)), (n = 0)))
                  : i++)
            }
            return l
          })(a, n, c.margin) +
          '"/>',
        p =
          '<svg xmlns="http://www.w3.org/2000/svg" ' +
          (c.width ? 'width="' + c.width + '" height="' + c.width + '" ' : "") +
          ('viewBox="0 0 ' + s + " ") +
          s +
          '" shape-rendering="crispEdges">' +
          u +
          d +
          "</svg>\n"
      return ("function" == typeof r && r(null, p), p)
    }
  },
  hidh(e, t) {
    function r(e) {
      if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
        throw Error("Color should be defined as hex string")
      let t = e.slice().replace("#", "").split("")
      if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e)
      ;((3 === t.length || 4 === t.length) &&
        (t = Array.prototype.concat.apply(
          [],
          t.map(function (e) {
            return [e, e]
          }),
        )),
        6 === t.length && t.push("F", "F"))
      let r = parseInt(t.join(""), 16)
      return {
        r: (r >> 24) & 255,
        g: (r >> 16) & 255,
        b: (r >> 8) & 255,
        a: 255 & r,
        hex: "#" + t.slice(0, 6).join(""),
      }
    }
    ;((t.getOptions = function (e) {
      ;(e || (e = {}), e.color || (e.color = {}))
      let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
        l = e.width && e.width >= 21 ? e.width : void 0,
        i = e.scale || 4
      return {
        width: l,
        scale: l ? 4 : i,
        margin: t,
        color: { dark: r(e.color.dark || "#000000ff"), light: r(e.color.light || "#ffffffff") },
        type: e.type,
        rendererOpts: e.rendererOpts || {},
      }
    }),
      (t.getScale = function (e, t) {
        return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
      }),
      (t.getImageWidth = function (e, r) {
        let l = t.getScale(e, r)
        return Math.floor((e + 2 * r.margin) * l)
      }),
      (t.qrToImageData = function (e, r, l) {
        let i = r.modules.size,
          o = r.modules.data,
          c = t.getScale(i, l),
          n = Math.floor((i + 2 * l.margin) * c),
          a = l.margin * c,
          s = [l.color.light, l.color.dark]
        for (let t = 0; t < n; t++)
          for (let r = 0; r < n; r++) {
            let u = (t * n + r) * 4,
              d = l.color.light
            ;(t >= a &&
              r >= a &&
              t < n - a &&
              r < n - a &&
              (d = s[+!!o[Math.floor((t - a) / c) * i + Math.floor((r - a) / c)]]),
              (e[u++] = d.r),
              (e[u++] = d.g),
              (e[u++] = d.b),
              (e[u] = d.a))
          }
      }))
  },
  UHU9(e, t, r) {
    e.exports = r.p + "assets/521c28fb8484.svg"
  },
  RomW(e, t, r) {
    e.exports = r.p + "assets/2c511bca4ae8.svg"
  },
  WENx(e, t, r) {
    e.exports = r.p + "assets/4cf3d0a677b2.svg"
  },
  XmRS(e, t, r) {
    var l = r("ABep")
    ;(r("zd8w"),
      (t.A = (e) =>
        (0, l.jsxs)("svg", {
          width: 20,
          height: 21,
          viewBox: "0 0 20 21",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, l.jsx)("path", {
              d: "M12.1599 7.63617C12.3713 7.33596 12.7863 7.26372 13.0866 7.47504C13.3867 7.68642 13.4589 8.10153 13.2477 8.40179L9.28876 14.0268C9.17264 14.1917 8.98808 14.2954 8.7868 14.308C8.61044 14.319 8.43764 14.2592 8.30634 14.144L8.25262 14.0912L6.16962 11.7993L6.08954 11.6918C5.93136 11.4259 5.97666 11.0761 6.21454 10.8598C6.45225 10.6439 6.80379 10.6326 7.05341 10.8149L7.15399 10.9047L8.67841 12.5815L12.1599 7.63617Z",
              fill: "currentColor",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.99506 2.81226C14.3664 2.81226 17.9101 6.35596 17.9101 10.7273C17.9101 15.0986 14.3664 18.6423 9.99506 18.6423C5.62372 18.6423 2.08002 15.0986 2.08002 10.7273C2.08002 6.35596 5.62372 2.81226 9.99506 2.81226ZM9.99506 4.14233C6.35826 4.14233 3.4101 7.0905 3.4101 10.7273C3.4101 14.3641 6.35826 17.3123 9.99506 17.3123C13.6319 17.3123 16.58 14.3641 16.58 10.7273C16.58 7.0905 13.6319 4.14233 9.99506 4.14233Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  S9NQ(e, t, r) {
    var l = r("ABep")
    ;(r("zd8w"),
      (t.A = (e) =>
        (0, l.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, l.jsx)("path", {
            d: "M3.50205 16.6664V13.3333C3.50205 12.9661 3.79982 12.6683 4.16709 12.6683H7.5001L7.63389 12.682C7.93696 12.7439 8.16514 13.0119 8.16514 13.3333C8.16514 13.6547 7.93696 13.9227 7.63389 13.9847L7.5001 13.9984H5.47471C6.58687 15.2249 8.21848 16.0013 10.0001 16.0013C13.06 16.0013 15.586 13.711 15.9552 10.7513L15.9854 10.6195C16.0846 10.3266 16.3786 10.1335 16.6974 10.1732C17.0617 10.2186 17.3198 10.551 17.2745 10.9154L17.2247 11.2523C16.6301 14.7051 13.6225 17.3313 10.0001 17.3314C8.01108 17.3314 6.17193 16.5383 4.83213 15.2474V16.6664C4.83213 17.0335 4.53416 17.3312 4.16709 17.3314C3.79982 17.3314 3.50205 17.0336 3.50205 16.6664ZM4.04502 9.24936C3.99941 9.61354 3.66706 9.87179 3.30283 9.82651C2.93839 9.78106 2.67926 9.44877 2.72471 9.08432L4.04502 9.24936ZM10.0001 2.6683C11.994 2.66834 13.8372 3.46552 15.1778 4.76205V3.33334C15.1778 2.96617 15.4757 2.66846 15.8429 2.6683C16.2101 2.6683 16.5079 2.96607 16.5079 3.33334V6.66635C16.5079 7.03362 16.2101 7.33139 15.8429 7.33139H12.5099C12.1426 7.33139 11.8448 7.03362 11.8448 6.66635C11.845 6.29923 12.1427 6.00131 12.5099 6.00131H14.5255C13.4134 4.77489 11.7816 3.99842 10.0001 3.99838C6.94004 3.99838 4.41411 6.28948 4.04502 9.24936L3.38486 9.16635L2.72471 9.08432C3.1758 5.46703 6.26081 2.6683 10.0001 2.6683Z",
            fill: "currentColor",
          }),
        })))
  },
  frfg(e, t, r) {
    r.d(t, { Ri: () => x, hD: () => b, QB: () => g, D9: () => C, fn: () => m })
    var l = r("ABep"),
      i = r("QosV"),
      o = r("eH06"),
      c = r("CNwe")
    let n = (0, r("ESTr").a)({
      name: "smartphone-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 4.584961, y: 1.834961, width: 10.830078, height: 16.330078 },
        visualBounds: { x: 4.584961, y: 1.834961, width: 10.830078, height: 16.330078 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.584961, y: 1.834961, width: 10.830078, height: 16.330078 },
        center: { x: 10, y: 10 },
        insets: { top: 1.834961, right: 4.584961, bottom: 1.834961, left: 4.584961 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.9062 4.4834C11.2733 4.48362 11.5712 4.78142 11.5713 5.14844C11.5713 5.51557 11.2733 5.81326 10.9062 5.81348H9.17773C8.81058 5.81334 8.5127 5.51563 8.5127 5.14844C8.51283 4.78136 8.81066 4.48353 9.17773 4.4834H10.9062Z" fill="currentColor"/> <path d="M12.417 1.83496C14.0727 1.83514 15.4149 3.17733 15.415 4.83301V15.167C15.4149 16.8227 14.0727 18.1649 12.417 18.165H7.58301C5.92733 18.1649 4.58514 16.8227 4.58496 15.167V4.83301C4.58514 3.17733 5.92733 1.83514 7.58301 1.83496H12.417ZM7.58301 3.16504C6.66187 3.16521 5.91521 3.91187 5.91504 4.83301V15.167C5.91521 16.0881 6.66187 16.8348 7.58301 16.835H12.417C13.3381 16.8348 14.0848 16.0881 14.085 15.167V4.83301C14.0848 3.91187 13.3381 3.16521 12.417 3.16504H7.58301Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var a = r("on57"),
      s = r("oyxz"),
      u = r("Sm6l"),
      d = r("HOLv"),
      p = r("wwME"),
      f = r("wp6O"),
      h = r("AtE1"),
      y = r("CVHj")
    function g(e) {
      var t, r
      let o,
        c,
        n,
        d,
        h,
        y,
        g,
        x,
        C,
        m,
        w,
        v,
        M = (0, i.c)(34),
        { onSkip: A, onStartSetup: S, showStartSetupError: j, setupInProgress: k, variant: E } = e,
        { platform: N } = (0, p.V)()
      M[0] !== N || M[1] !== E
        ? ((t = E),
          (r = N),
          (o =
            "dialog" === t
              ? "macOS" !== r
                ? (0, l.jsx)(s.A, {
                    id: "codexMobile.setupDialog.initial.heading.windows",
                    defaultMessage: "Connect a device to this PC",
                  })
                : (0, l.jsx)(s.A, {
                    id: "codexMobile.setupDialog.initial.heading.desktop",
                    defaultMessage: "Connect a device to this Mac",
                  })
              : "macOS" !== r
                ? (0, l.jsx)(s.A, {
                    id: "codexMobile.setupPage.initial.heading.windows",
                    defaultMessage: "Connect your phone to this PC",
                  })
                : (0, l.jsx)(s.A, {
                    id: "codexMobile.setupDialog.initial.heading",
                    defaultMessage: "Connect your phone to this Mac",
                  })),
          (M[0] = N),
          (M[1] = E),
          (M[2] = o))
        : (o = M[2])
      let I = o
      ;(M[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, l.jsx)(s.A, {
            id: "codexMobile.setupDialog.initial.description",
            defaultMessage: "Continue chats from the ChatGPT desktop app on your phone or another device",
          })),
          (M[3] = c))
        : (c = M[3]),
        M[4] !== E ? ((n = (0, l.jsx)(b, { variant: E })), (M[4] = E), (M[5] = n)) : (n = M[5]))
      let P = "page" === E && "w-full max-w-[400px]"
      ;(M[6] !== P
        ? ((d = (0, a.A)("flex flex-wrap items-center justify-center gap-3", P)), (M[6] = P), (M[7] = d))
        : (d = M[7]),
        M[8] !== A || M[9] !== k || M[10] !== E
          ? ((h =
              "dialog" === E
                ? (0, l.jsx)(u.$, {
                    color: "secondary",
                    onClick: A,
                    size: "large",
                    className: "justify-center",
                    disabled: k,
                    children: (0, l.jsx)(s.A, { id: "codexMobile.setupDialog.initial.skip", defaultMessage: "Later" }),
                  })
                : null),
            (M[8] = A),
            (M[9] = k),
            (M[10] = E),
            (M[11] = h))
          : (h = M[11]))
      let L = "page" === E && "w-full"
      return (
        M[12] !== L ? ((y = (0, a.A)("justify-center", L)), (M[12] = L), (M[13] = y)) : (y = M[13]),
        M[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, l.jsx)(s.A, { id: "codexMobile.setupDialog.initial.primary", defaultMessage: "Get started" })),
            (M[14] = g))
          : (g = M[14]),
        M[15] !== S || M[16] !== k || M[17] !== y
          ? ((x = (0, l.jsx)(u.$, { onClick: S, size: "large", className: y, loading: k, children: g })),
            (M[15] = S),
            (M[16] = k),
            (M[17] = y),
            (M[18] = x))
          : (x = M[18]),
        M[19] !== x || M[20] !== d || M[21] !== h
          ? ((C = (0, l.jsxs)("div", { className: d, children: [h, x] })),
            (M[19] = x),
            (M[20] = d),
            (M[21] = h),
            (M[22] = C))
          : (C = M[22]),
        M[23] !== E
          ? ((m =
              "page" === E
                ? (0, l.jsx)("div", {
                    className: "w-full max-w-[400px] text-center text-xs leading-normal text-codex-description",
                    children: (0, l.jsx)(s.A, {
                      id: "codexMobile.setupPage.initial.securityNotice",
                      defaultMessage:
                        "ChatGPT can access your desktop\u2014including files, apps, and your browser\u2014to complete tasks you send from your phone. This can introduce security risks. Only connect devices that you own and trust.",
                    }),
                  })
                : null),
            (M[23] = E),
            (M[24] = m))
          : (m = M[24]),
        M[25] !== j
          ? ((w = j
              ? (0, l.jsx)("div", {
                  className: "text-sm text-danger",
                  children: (0, l.jsx)(s.A, {
                    id: "codexMobile.setupDialog.initial.startSetupError",
                    defaultMessage: "Couldn\u2019t check security requirements. Try again",
                  }),
                })
              : null),
            (M[25] = j),
            (M[26] = w))
          : (w = M[26]),
        M[27] !== I || M[28] !== C || M[29] !== m || M[30] !== w || M[31] !== n || M[32] !== E
          ? ((v = (0, l.jsxs)(f._, { variant: E, heading: I, description: c, children: [n, C, m, w] })),
            (M[27] = I),
            (M[28] = C),
            (M[29] = m),
            (M[30] = w),
            (M[31] = n),
            (M[32] = E),
            (M[33] = v))
          : (v = M[33]),
        v
      )
    }
    function x(e) {
      let t,
        r,
        o,
        c,
        n,
        a,
        d = (0, i.c)(12),
        { onAllowHost: p, setupInProgress: h, showAllowHostError: y, variant: g } = e
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(s.A, {
              id: "codexMobile.setupDialog.allowHost.heading",
              defaultMessage: "Allow devices to control this computer?",
            })),
            (r = (0, l.jsx)(s.A, {
              id: "codexMobile.setupDialog.allowHost.description",
              defaultMessage:
                "This lets authorized devices, such as your phone, connect to ChatGPT and control this computer remotely",
            })),
            (d[0] = t),
            (d[1] = r))
          : ((t = d[0]), (r = d[1])),
        d[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)(s.A, { id: "codexMobile.setupDialog.allowHost.primary", defaultMessage: "Allow" })),
            (d[2] = o))
          : (o = d[2]),
        d[3] !== p || d[4] !== h
          ? ((c = (0, l.jsx)(u.$, { size: "large", className: "justify-center", loading: h, onClick: p, children: o })),
            (d[3] = p),
            (d[4] = h),
            (d[5] = c))
          : (c = d[5]),
        d[6] !== y
          ? ((n = y
              ? (0, l.jsx)("div", {
                  className: "text-sm text-danger",
                  children: (0, l.jsx)(s.A, {
                    id: "codexMobile.setupDialog.allowHost.error",
                    defaultMessage: "Couldn\u2019t enable remote control. Try again",
                  }),
                })
              : null),
            (d[6] = y),
            (d[7] = n))
          : (n = d[7]),
        d[8] !== c || d[9] !== n || d[10] !== g
          ? ((a = (0, l.jsxs)(f._, { variant: g, heading: t, description: r, children: [c, n] })),
            (d[8] = c),
            (d[9] = n),
            (d[10] = g),
            (d[11] = a))
          : (a = d[11]),
        a
      )
    }
    function C(e) {
      let t,
        r,
        o,
        c,
        n,
        a = (0, i.c)(8),
        { onContinueOnChatGPT: d, variant: p } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(s.A, {
              id: "codexMobile.setupDialog.mfaRequired.heading",
              defaultMessage: "Turn on Multi-Factor Authentication",
            })),
            (r = (0, l.jsx)(s.A, {
              id: "codexMobile.setupDialog.mfaRequired.description",
              defaultMessage:
                "To enable this feature, you\u2019ll need to turn on Multi-Factor Authentication for your ChatGPT account",
            })),
            (a[0] = t),
            (a[1] = r))
          : ((t = a[0]), (r = a[1])),
        a[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)(s.A, {
              id: "codexMobile.setupDialog.mfaRequired.primary",
              defaultMessage: "Continue on chatgpt.com",
            })),
            (a[2] = o))
          : (o = a[2]),
        a[3] !== d
          ? ((c = (0, l.jsx)(u.$, { size: "large", className: "justify-center", onClick: d, children: o })),
            (a[3] = d),
            (a[4] = c))
          : (c = a[4]),
        a[5] !== c || a[6] !== p
          ? ((n = (0, l.jsx)(f._, { variant: p, heading: t, description: r, children: c })),
            (a[5] = c),
            (a[6] = p),
            (a[7] = n))
          : (n = a[7]),
        n
      )
    }
    function m(e) {
      let t,
        r,
        o,
        c,
        n = (0, i.c)(5),
        { onManageConnections: a } = e
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(s.A, { id: "codexMobile.setupPage.ready.remoteHeading", defaultMessage: "Remote" })),
            (r = (0, l.jsx)(s.A, {
              id: "codexMobile.setupPage.ready.description",
              defaultMessage: "Scan QR code to set up a new phone or manage existing connections",
            })),
            (n[0] = t),
            (n[1] = r))
          : ((t = n[0]), (r = n[1])),
        n[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)(y.K, { showDeviceTypeSelector: !1 })), (n[2] = o))
          : (o = n[2]),
        n[3] !== a
          ? ((c = (0, l.jsx)(f._, {
              variant: "page",
              heading: t,
              description: r,
              children: (0, l.jsxs)("div", {
                className: "flex w-full max-w-[460px] flex-col items-center gap-6",
                children: [o, (0, l.jsx)(h.D5, { onManageConnections: a })],
              }),
            })),
            (n[3] = a),
            (n[4] = c))
          : (c = n[4]),
        c
      )
    }
    function b(e) {
      let t,
        r,
        u,
        p,
        f,
        h = (0, i.c)(7),
        { variant: y } = e,
        g =
          "dialog" === y
            ? "w-[380px] gap-4"
            : "w-full max-w-[400px] divide-y-[0.5px] divide-border overflow-hidden rounded-2xl border border-default"
      return (
        h[0] !== g ? ((t = (0, a.A)("flex flex-col", g)), (h[0] = g), (h[1] = t)) : (t = h[1]),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)(w, {
              icon: (0, l.jsx)(d.I, { asset: n }),
              title: (0, l.jsx)(s.A, {
                id: "codexMobile.setupDialog.initial.feature.threads.title",
                defaultMessage: "Pick up where you left off",
              }),
              children: (0, l.jsx)(s.A, {
                id: "codexMobile.setupDialog.initial.feature.threads.description",
                defaultMessage: "Continue any chat or project from the ChatGPT desktop app",
              }),
            })),
            (h[2] = r))
          : (r = h[2]),
        h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, l.jsx)(w, {
              icon: (0, l.jsx)(d.I, { asset: o.O }),
              title: (0, l.jsx)(s.A, {
                id: "codexMobile.setupDialog.initial.feature.notifications.title",
                defaultMessage: "Stay in the loop",
              }),
              children: (0, l.jsx)(s.A, {
                id: "codexMobile.setupDialog.initial.feature.notifications.description",
                defaultMessage: "Get notified when ChatGPT finishes a task or needs your attention",
              }),
            })),
            (h[3] = u))
          : (u = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, l.jsx)(w, {
              icon: (0, l.jsx)(d.I, { asset: c.h }),
              title: (0, l.jsx)(s.A, {
                id: "codexMobile.setupDialog.initial.feature.actions.title",
                defaultMessage: "Start something new",
              }),
              children: (0, l.jsx)(s.A, {
                id: "codexMobile.setupDialog.initial.feature.actions.description",
                defaultMessage: "Just send a message to start a chat on your desktop",
              }),
            })),
            (h[4] = p))
          : (p = h[4]),
        h[5] !== t
          ? ((f = (0, l.jsxs)("div", { className: t, children: [r, u, p] })), (h[5] = t), (h[6] = f))
          : (f = h[6]),
        f
      )
    }
    function w(e) {
      let t,
        r,
        o,
        c,
        n,
        a = (0, i.c)(12),
        { children: s, icon: u, title: d } = e
      return (
        a[0] !== u
          ? ((t = (0, l.jsx)("div", {
              className: "flex h-8 w-8 shrink-0 items-center justify-center text-default",
              children: u,
            })),
            (a[0] = u),
            (a[1] = t))
          : (t = a[1]),
        a[2] !== d
          ? ((r = (0, l.jsx)("div", {
              className: "text-base leading-normal tracking-normal text-default",
              children: d,
            })),
            (a[2] = d),
            (a[3] = r))
          : (r = a[3]),
        a[4] !== s
          ? ((o = (0, l.jsx)("div", {
              className: "text-sm leading-normal tracking-normal text-codex-description",
              children: s,
            })),
            (a[4] = s),
            (a[5] = o))
          : (o = a[5]),
        a[6] !== r || a[7] !== o
          ? ((c = (0, l.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-1 text-start", children: [r, o] })),
            (a[6] = r),
            (a[7] = o),
            (a[8] = c))
          : (c = a[8]),
        a[9] !== t || a[10] !== c
          ? ((n = (0, l.jsxs)("div", { className: "flex items-center gap-4 px-[14px] py-2", children: [t, c] })),
            (a[9] = t),
            (a[10] = c),
            (a[11] = n))
          : (n = a[11]),
        n
      )
    }
  },
  wp6O(e, t, r) {
    var l = r("ABep"),
      i = r("QosV"),
      o = r("on57")
    r.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            r,
            c,
            n,
            a,
            s,
            u = (0, i.c)(21),
            { children: d, description: p, headerAdornment: f, heading: h, variant: y } = e,
            g = "page" === y && "max-w-[400px]"
          u[0] !== g
            ? ((t = (0, o.A)("flex w-full flex-col gap-2 text-center", g)), (u[0] = g), (u[1] = t))
            : (t = u[1])
          let x = "dialog" === y ? "heading-dialog text-pretty" : "text-xl leading-tight font-normal text-pretty"
          ;(u[2] !== h || u[3] !== x
            ? ((r = (0, l.jsx)("div", { className: x, children: h })), (u[2] = h), (u[3] = x), (u[4] = r))
            : (r = u[4]),
            u[5] !== p || u[6] !== y
              ? ((c =
                  null != p
                    ? (0, l.jsx)("div", {
                        className: (0, o.A)(
                          "dialog" === y ? "text-base" : "text-lg",
                          "leading-normal tracking-normal text-pretty text-codex-description",
                        ),
                        children: p,
                      })
                    : null),
                (u[5] = p),
                (u[6] = y),
                (u[7] = c))
              : (c = u[7]),
            u[8] !== t || u[9] !== r || u[10] !== c
              ? ((n = (0, l.jsxs)("div", { className: t, children: [r, c] })),
                (u[8] = t),
                (u[9] = r),
                (u[10] = c),
                (u[11] = n))
              : (n = u[11]),
            u[12] !== f || u[13] !== n
              ? ((a = (0, l.jsxs)(l.Fragment, { children: [f, n] })), (u[12] = f), (u[13] = n), (u[14] = a))
              : (a = u[14]))
          let C = a
          if ("dialog" === y) {
            let e
            return (
              u[15] !== d || u[16] !== C
                ? ((e = (0, l.jsxs)("div", {
                    className: "flex w-full flex-col items-center gap-6 px-6 py-6 select-none",
                    children: [C, d],
                  })),
                  (u[15] = d),
                  (u[16] = C),
                  (u[17] = e))
                : (e = u[17]),
              e
            )
          }
          return (
            u[18] !== d || u[19] !== C
              ? ((s = (0, l.jsxs)("div", {
                  className: "flex w-full max-w-[640px] flex-col items-center gap-6 px-6 text-center select-none",
                  children: [C, d],
                })),
                (u[18] = d),
                (u[19] = C),
                (u[20] = s))
              : (s = u[20]),
            s
          )
        },
      },
    )
  },
  lScd(e, t, r) {
    let l = (0, r("Nwp9").m3)("electron:codex-mobile-setup-step-debug-override", "auto")
    r.d(t, {}, { k: l })
  },
  tniZ(e, t, r) {
    var l = r("ABep"),
      i = r("QosV"),
      o = r("iRMi"),
      c = r("qmMi"),
      n = r("Wf1j"),
      a = r("JNtf"),
      s = r("Ot7V"),
      u = r("wwME"),
      d = r("yGJW"),
      p = r("OWtl"),
      f = r("A1xK")
    r.d(
      t,
      {},
      {
        h: function (e) {
          let t,
            r,
            h,
            y,
            g,
            x,
            C,
            m = (0, i.c)(31),
            {
              hostId: b,
              onAllowHost: w,
              onOpenChange: v,
              onSkip: M,
              onStartSetup: A,
              open: S,
              showAllowHostError: j,
              showStartSetupError: k,
              setupInProgress: E,
              step: N,
              waitingHeading: I,
            } = e,
            P = void 0 !== j && j,
            L = (0, c.gh)(p.u),
            _ = (0, n.A)(),
            { platform: T } = (0, u.V)()
          return (
            m[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = { "aria-describedby": void 0 }), (m[0] = t))
              : (t = m[0]),
            m[1] !== _ || m[2] !== T || m[3] !== N
              ? ((r = (function (e, t, r) {
                  switch (r) {
                    case "allow-host":
                      return e.formatMessage({
                        id: "codexMobile.setupDialog.allowHost.title",
                        defaultMessage: "Allow devices to control this computer?",
                      })
                    case "connected":
                      return e.formatMessage({
                        id: "codexMobile.setupDialog.connected.title",
                        defaultMessage: "You\u2019re connected",
                      })
                    case "initial":
                      return "macOS" !== t
                        ? e.formatMessage({
                            id: "codexMobile.setupDialog.initial.title.windows",
                            defaultMessage: "Connect a device to this PC",
                          })
                        : e.formatMessage({
                            id: "codexMobile.setupDialog.initial.title.desktop",
                            defaultMessage: "Connect a device to this Mac",
                          })
                    case "mfa-required":
                      return e.formatMessage({
                        id: "codexMobile.setupDialog.mfaRequired.title",
                        defaultMessage: "Turn on Multi-Factor Authentication",
                      })
                    case "waiting":
                      return e.formatMessage({
                        id: "codexMobile.setupDialog.waiting.title",
                        defaultMessage: "Approve on your device",
                      })
                  }
                })(_, T, N)),
                (m[1] = _),
                (m[2] = T),
                (m[3] = N),
                (m[4] = r))
              : (r = m[4]),
            m[5] !== r
              ? ((h = (0, l.jsx)(a.L3, { className: "sr-only", children: r })), (m[5] = r), (m[6] = h))
              : (h = m[6]),
            m[7] !== L || m[8] !== N
              ? ((y = (e) => {
                  ;((0, d.yy)(L, o.CodexRemoteControlOnboardingActionClicked, {
                    action: "continue_on_chatgpt",
                    step: N,
                    surface: "dialog",
                  }),
                    (0, s.PQ)({
                      event: e,
                      href: "https://chatgpt.com/#settings/Security?mfa_source=codex_remote",
                      initiator: "open_in_browser_bridge",
                      openTarget: "external-browser",
                    }))
                }),
                (m[7] = L),
                (m[8] = N),
                (m[9] = y))
              : (y = m[9]),
            m[10] !== v || m[11] !== L || m[12] !== N
              ? ((g = () => {
                  ;((0, d.yy)(L, o.CodexRemoteControlOnboardingActionClicked, {
                    action: "finish_setup",
                    step: N,
                    surface: "dialog",
                  }),
                    v(!1))
                }),
                (m[10] = v),
                (m[11] = L),
                (m[12] = N),
                (m[13] = g))
              : (g = m[13]),
            m[14] !== b ||
            m[15] !== w ||
            m[16] !== M ||
            m[17] !== A ||
            m[18] !== E ||
            m[19] !== P ||
            m[20] !== k ||
            m[21] !== N ||
            m[22] !== y ||
            m[23] !== g ||
            m[24] !== I
              ? ((x = (0, l.jsx)(f.f, {
                  hostId: b,
                  onAllowHost: w,
                  onContinueOnChatGPT: y,
                  onFinishSetup: g,
                  onSkip: M,
                  onStartSetup: A,
                  setupInProgress: E,
                  showAllowHostError: P,
                  showStartSetupError: k,
                  step: N,
                  variant: "dialog",
                  waitingHeading: I,
                })),
                (m[14] = b),
                (m[15] = w),
                (m[16] = M),
                (m[17] = A),
                (m[18] = E),
                (m[19] = P),
                (m[20] = k),
                (m[21] = N),
                (m[22] = y),
                (m[23] = g),
                (m[24] = I),
                (m[25] = x))
              : (x = m[25]),
            m[26] !== v || m[27] !== S || m[28] !== h || m[29] !== x
              ? ((C = (0, l.jsxs)(a.lG, {
                  open: S,
                  onOpenChange: v,
                  contentProps: t,
                  contentClassName: "max-h-[calc(100vh-32px)] overflow-y-auto",
                  size: "compact",
                  children: [h, x],
                })),
                (m[26] = v),
                (m[27] = S),
                (m[28] = h),
                (m[29] = x),
                (m[30] = C))
              : (C = m[30]),
            C
          )
        },
      },
    )
  },
  Oqel(e, t, r) {
    var l = r("ABep"),
      i = r("QosV"),
      o = r("iRMi"),
      c = r("xSOA"),
      n = r("qmMi"),
      a = r("zd8w"),
      s = r("oyxz"),
      u = r("Ywss"),
      d = r("ihPm"),
      p = r("jNL7"),
      f = r("Ot7V"),
      h = r("yGJW"),
      y = r("xS4d"),
      g = r("fJ4f"),
      x = r("M03z"),
      C = r("W03G"),
      m = r("UIre"),
      b = r("OWtl"),
      w = r("kfGJ"),
      v = r("NVRI"),
      M = r("lScd"),
      A = r("tniZ"),
      S = r("mUEW"),
      j = r("fHok"),
      k = r("A1xK")
    function E(e) {
      return e.clientId
    }
    function N(e) {
      let t,
        r,
        c,
        a,
        d,
        y,
        g,
        x = (0, i.c)(27),
        {
          onAllowHost: C,
          onFinishSetup: m,
          onSkip: w,
          onStartSetup: M,
          setupInProgress: A,
          showAllowHostError: S,
          showStartSetupError: j,
          step: E,
        } = e,
        N = (0, n.gh)(b.u),
        I = (0, u.Zp)()
      x[0] !== N || x[1] !== E
        ? ((t = (e) => {
            ;(0, h.yy)(N, o.CodexRemoteControlOnboardingActionClicked, { action: e, step: E, surface: "page" })
          }),
          (x[0] = N),
          (x[1] = E),
          (x[2] = t))
        : (t = x[2])
      let P = t
      return (
        x[3] !== E
          ? ((r =
              "allow-host" === E || "mfa-required" === E || "waiting" === E
                ? (0, l.jsx)(p.G.Header, {
                    children: (0, l.jsx)(v.J, {
                      start: (0, l.jsx)(s.A, {
                        id: "codexMobile.setupPage.remoteTitle",
                        defaultMessage: "Set up Remote",
                      }),
                    }),
                  })
                : null),
            (x[3] = E),
            (x[4] = r))
          : (r = x[4]),
        x[5] !== P
          ? ((c = (e) => {
              ;(P("continue_on_chatgpt"),
                (0, f.PQ)({
                  event: e,
                  href: "https://chatgpt.com/#settings/Security?mfa_source=codex_remote",
                  initiator: "open_in_browser_bridge",
                }))
            }),
            (x[5] = P),
            (x[6] = c))
          : (c = x[6]),
        x[7] !== m || x[8] !== P
          ? ((a = () => {
              ;(P("finish_setup"), m())
            }),
            (x[7] = m),
            (x[8] = P),
            (x[9] = a))
          : (a = x[9]),
        x[10] !== I || x[11] !== P
          ? ((d = () => {
              ;(P("manage_connections"), I("/settings/connections"))
            }),
            (x[10] = I),
            (x[11] = P),
            (x[12] = d))
          : (d = x[12]),
        x[13] !== C ||
        x[14] !== w ||
        x[15] !== M ||
        x[16] !== A ||
        x[17] !== S ||
        x[18] !== j ||
        x[19] !== E ||
        x[20] !== c ||
        x[21] !== a ||
        x[22] !== d
          ? ((y = (0, l.jsx)(k.f, {
              onAllowHost: C,
              onContinueOnChatGPT: c,
              onFinishSetup: a,
              onManageConnections: d,
              onSkip: w,
              onStartSetup: M,
              setupInProgress: A,
              showAllowHostError: S,
              showStartSetupError: j,
              step: E,
              variant: "page",
            })),
            (x[13] = C),
            (x[14] = w),
            (x[15] = M),
            (x[16] = A),
            (x[17] = S),
            (x[18] = j),
            (x[19] = E),
            (x[20] = c),
            (x[21] = a),
            (x[22] = d),
            (x[23] = y))
          : (y = x[23]),
        x[24] !== r || x[25] !== y
          ? ((g = (0, l.jsxs)(l.Fragment, { children: [r, y] })), (x[24] = r), (x[25] = y), (x[26] = g))
          : (g = x[26]),
        g
      )
    }
    r.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            r,
            s,
            p,
            f,
            v,
            k,
            I,
            P,
            L,
            _,
            T,
            D,
            U,
            B,
            R,
            H,
            V,
            z,
            O = (0, i.c)(76),
            { initialStep: F, onClose: Z, variant: q } = e,
            $ = (0, n.gh)(b.u),
            K = (0, u.Zp)(),
            J = (0, a.useRef)(null),
            Q = (0, n._U)(d.Zg, w.fI),
            G = (0, n.Ul)(M.k) ?? "auto",
            W = (0, n.Ul)(S.n6),
            [Y, X] = (0, a.useState)(F ?? null),
            [ee, et] = (0, a.useState)(null),
            er = (0, n.Ul)(y.dZ)
          O[0] !== Q || O[1] !== Y || O[2] !== W.data
            ? ((t = Y ?? (0, j.wh)({ remoteControlHostEnabled: Q, hasEnrolledRemoteControlClient: W.data })),
              (O[0] = Q),
              (O[1] = Y),
              (O[2] = W.data),
              (O[3] = t))
            : (t = O[3])
          let el = t,
            ei = (0, n._U)(g.zj, "waiting" === el),
            eo = (0, x.uz)(ei.data, er),
            ec = (0, n.Ul)(S.BM),
            en = "waiting" === el && (null == ee ? eo?.length : (0, x.rr)(eo, ee)) ? "connected" : el,
            ea = (0, n.Ul)(S.L_),
            es = "auto" !== G ? G : "mfa-required" === el && ea.data ? "allow-host" : en
          O[4] !== es || O[5] !== $ || O[6] !== q
            ? ((r = (e) => {
                ;(0, h.yy)($, o.CodexRemoteControlOnboardingActionClicked, { action: e, step: es, surface: q })
              }),
              (O[4] = es),
              (O[5] = $),
              (O[6] = q),
              (O[7] = r))
            : (r = O[7])
          let eu = r
          ;(O[8] !== es || O[9] !== $ || O[10] !== q
            ? ((s = () => {
                let e = `${q}:${es}`
                J.current !== e &&
                  ((J.current = e), (0, h.yy)($, o.CodexRemoteControlOnboardingStepViewed, { step: es, surface: q }))
              }),
              (p = [es, $, q]),
              (O[8] = es),
              (O[9] = $),
              (O[10] = q),
              (O[11] = s),
              (O[12] = p))
            : ((s = O[11]), (p = O[12])),
            (0, a.useEffect)(s, p),
            O[13] !== $ ? ((f = () => (0, S.ZI)($)), (O[13] = $), (O[14] = f)) : (f = O[14]),
            O[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (e) => {
                  X(e ? "mfa-required" : "allow-host")
                }),
                (O[15] = v))
              : (v = O[15]),
            O[16] !== f ? ((k = { mutationFn: f, onSuccess: v }), (O[16] = f), (O[17] = k)) : (k = O[17]))
          let ed = (0, c.n)(k)
          ;(O[18] !== $
            ? ((I = async () => {
                await (0, m.A)($, w.fI, !0)
                let e = $.query.snapshot(g.y8)
                return (await e.invalidate({ exact: !0, refetchType: "none" }), e.fetch())
              }),
              (O[18] = $),
              (O[19] = I))
            : (I = O[19]),
            O[20] !== er
              ? ((P = (e) => {
                  ;(et(new Set((0, x.uz)(e, er)?.map(E))), X("waiting"))
                }),
                (O[20] = er),
                (O[21] = P))
              : (P = O[21]),
            O[22] !== $
              ? ((L = (e) => {
                  ;(0, C.l)($, e)
                }),
                (O[22] = $),
                (O[23] = L))
              : (L = O[23]),
            O[24] !== L || O[25] !== I || O[26] !== P
              ? ((_ = { mutationFn: I, onSuccess: P, onError: L }), (O[24] = L), (O[25] = I), (O[26] = P), (O[27] = _))
              : (_ = O[27]))
          let ep = (0, c.n)(_)
          O[28] !== ep || O[29] !== eu
            ? ((T = () => {
                ;(eu("allow_host"), ep.mutate())
              }),
              (O[28] = ep),
              (O[29] = eu),
              (O[30] = T))
            : (T = O[30])
          let ef = T
          O[31] !== ep.error || O[32] !== ed.error || O[33] !== ec.error || O[34] !== ei.error || O[35] !== W.error
            ? ((D = (0, j.QE)([W.error, ei.error, ec.error, ed.error, ep.error])),
              (O[31] = ep.error),
              (O[32] = ed.error),
              (O[33] = ec.error),
              (O[34] = ei.error),
              (O[35] = W.error),
              (O[36] = D))
            : (D = O[36])
          let eh = D
          ;(O[37] !== K || O[38] !== eh
            ? ((U = () => {
                eh && K("/login", { replace: !0 })
              }),
              (B = [K, eh]),
              (O[37] = K),
              (O[38] = eh),
              (O[39] = U),
              (O[40] = B))
            : ((U = O[39]), (B = O[40])),
            (0, a.useEffect)(U, B))
          let ey = ed.isPending || ep.isPending || ("required" === ec.data && ea.isLoading)
          O[41] !== ep.error || O[42] !== ep.isError
            ? ((R = ep.isError && !(0, C.o)(ep.error)), (O[41] = ep.error), (O[42] = ep.isError), (O[43] = R))
            : (R = O[43])
          let eg = R
          if (("auto" === G && null == Y && Q && W.isLoading) || eh) return null
          if ("dialog" === q) {
            let e, t, r, i
            return (
              O[44] !== Z
                ? ((e = (e) => {
                    e || Z()
                  }),
                  (O[44] = Z),
                  (O[45] = e))
                : (e = O[45]),
              O[46] !== Z || O[47] !== eu
                ? ((t = () => {
                    ;(eu("skip"), Z())
                  }),
                  (O[46] = Z),
                  (O[47] = eu),
                  (O[48] = t))
                : (t = O[48]),
              O[49] !== ed || O[50] !== eu
                ? ((r = () => {
                    ;(eu("start_setup"), ed.mutate())
                  }),
                  (O[49] = ed),
                  (O[50] = eu),
                  (O[51] = r))
                : (r = O[51]),
              O[52] !== ef ||
              O[53] !== ed.isError ||
              O[54] !== es ||
              O[55] !== ey ||
              O[56] !== eg ||
              O[57] !== e ||
              O[58] !== t ||
              O[59] !== r
                ? ((i = (0, l.jsx)(A.h, {
                    open: !0,
                    showAllowHostError: eg,
                    showStartSetupError: ed.isError,
                    setupInProgress: ey,
                    step: es,
                    onAllowHost: ef,
                    onOpenChange: e,
                    onSkip: t,
                    onStartSetup: r,
                  })),
                  (O[52] = ef),
                  (O[53] = ed.isError),
                  (O[54] = es),
                  (O[55] = ey),
                  (O[56] = eg),
                  (O[57] = e),
                  (O[58] = t),
                  (O[59] = r),
                  (O[60] = i))
                : (i = O[60]),
              i
            )
          }
          return (
            O[61] !== Z || O[62] !== eu
              ? ((H = () => {
                  ;(eu("skip"), Z())
                }),
                (O[61] = Z),
                (O[62] = eu),
                (O[63] = H))
              : (H = O[63]),
            O[64] !== ed || O[65] !== eu
              ? ((V = () => {
                  ;(eu("start_setup"), ed.mutate())
                }),
                (O[64] = ed),
                (O[65] = eu),
                (O[66] = V))
              : (V = O[66]),
            O[67] !== ef ||
            O[68] !== ed.isError ||
            O[69] !== Z ||
            O[70] !== es ||
            O[71] !== ey ||
            O[72] !== eg ||
            O[73] !== H ||
            O[74] !== V
              ? ((z = (0, l.jsx)(N, {
                  showAllowHostError: eg,
                  showStartSetupError: ed.isError,
                  setupInProgress: ey,
                  step: es,
                  onAllowHost: ef,
                  onFinishSetup: Z,
                  onSkip: H,
                  onStartSetup: V,
                })),
                (O[67] = ef),
                (O[68] = ed.isError),
                (O[69] = Z),
                (O[70] = es),
                (O[71] = ey),
                (O[72] = eg),
                (O[73] = H),
                (O[74] = V),
                (O[75] = z))
              : (z = O[75]),
            z
          )
        },
      },
    )
  },
  AtE1(e, t, r) {
    r.d(t, { xc: () => s, tj: () => u, D5: () => d })
    var l = r("ABep"),
      i = r("QosV"),
      o = r("on57"),
      c = r("oyxz"),
      n = r.p + "assets/page-artwork-background.e320a95cfc.png",
      a = r("Sm6l")
    function s(e) {
      let t,
        r,
        c,
        a,
        s,
        u = (0, i.c)(13),
        { artworkAlignment: d, artworkSrc: p, children: f, footer: h } = e,
        y = void 0 === d ? "center" : d
      return (
        u[0] !== f
          ? ((t = (0, l.jsx)("div", {
              className: "flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-6 py-12",
              children: f,
            })),
            (u[0] = f),
            (u[1] = t))
          : (t = u[1]),
        u[2] !== h
          ? ((r =
              null != h
                ? (0, l.jsx)("div", { className: "flex shrink-0 justify-center px-6 pb-6", children: h })
                : null),
            (u[2] = h),
            (u[3] = r))
          : (r = u[3]),
        u[4] !== t || u[5] !== r
          ? ((c = (0, l.jsxs)("div", {
              className: "relative flex min-w-0 flex-1 basis-0 flex-col overflow-hidden",
              children: [t, r],
            })),
            (u[4] = t),
            (u[5] = r),
            (u[6] = c))
          : (c = u[6]),
        u[7] !== y || u[8] !== p
          ? ((a =
              null != p
                ? (0, l.jsx)("div", {
                    className: "hidden min-h-0 min-w-0 flex-1 basis-0 p-3 lg:block",
                    children: (0, l.jsx)("div", {
                      className: "relative h-full w-full overflow-hidden rounded-xl bg-cover bg-center",
                      style: { backgroundImage: `url(${n})` },
                      children: (0, l.jsx)("img", {
                        alt: "",
                        "aria-hidden": !0,
                        className: (0, o.A)(
                          "absolute inset-0 h-full w-full object-contain",
                          "bottom-right" === y && "object-right-bottom",
                          "center" === y && "object-center",
                          "right" === y && "object-right",
                        ),
                        src: p,
                      }),
                    }),
                  })
                : null),
            (u[7] = y),
            (u[8] = p),
            (u[9] = a))
          : (a = u[9]),
        u[10] !== c || u[11] !== a
          ? ((s = (0, l.jsxs)("div", {
              className: "flex h-full min-h-0 w-full overflow-hidden bg-surface",
              children: [c, a],
            })),
            (u[10] = c),
            (u[11] = a),
            (u[12] = s))
          : (s = u[12]),
        s
      )
    }
    function u(e) {
      let t,
        r = (0, i.c)(2),
        { artworkSrc: o } = e
      return (
        r[0] !== o
          ? ((t = (0, l.jsx)("div", {
              className: "relative h-[214px] overflow-hidden",
              children: (0, l.jsx)("img", {
                alt: "",
                "aria-hidden": !0,
                className: "h-full w-full object-cover",
                src: o,
              }),
            })),
            (r[0] = o),
            (r[1] = t))
          : (t = r[1]),
        t
      )
    }
    function d(e) {
      let t,
        r,
        n,
        s = (0, i.c)(6),
        { className: u, onManageConnections: d } = e
      return (
        s[0] !== u ? ((t = (0, o.A)("justify-center", u)), (s[0] = u), (s[1] = t)) : (t = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)(c.A, {
              id: "codexMobile.setupPage.connected.manageConnections",
              defaultMessage: "Manage connections",
            })),
            (s[2] = r))
          : (r = s[2]),
        s[3] !== d || s[4] !== t
          ? ((n = (0, l.jsx)(a.$, { color: "ghost", size: "large", className: t, onClick: d, children: r })),
            (s[3] = d),
            (s[4] = t),
            (s[5] = n))
          : (n = s[5]),
        n
      )
    }
  },
  fHok(e, t, r) {
    var l = r("fO4j")
    function i(e) {
      switch (e) {
        case "disabled":
        case "errored":
          return !0
        case "connecting":
        case "connected":
          return !1
      }
    }
    r.d(
      t,
      {},
      {
        Pl: function ({ isMfaSetupRequiredError: e, mfaSetupRequired: t, remoteControlStatus: r }) {
          return i(r) || e ? "initial" : t ? "mfa-required" : void 0
        },
        QE: function (e) {
          return e.some((e) => e instanceof l.Bu)
        },
        wh: function ({ remoteControlHostEnabled: e, hasEnrolledRemoteControlClient: t }) {
          return e ? (t ? "connected" : "waiting") : "initial"
        },
        zV: function ({
          initialRemoteControlStatus: e,
          isMfaSetupRequiredError: t,
          mfaSetupRequired: r,
          remoteControlStatus: l,
          setupStepDebugOverride: o,
        }) {
          return t || !!r || i(l) || i(e) || "auto" !== o
        },
      },
    )
  },
  A1xK(e, t, r) {
    r.d(t, { T: () => ep, f: () => ed })
    var l = r("ABep"),
      i = r("QosV"),
      o = r("zd8w"),
      c = r.p + "assets/dialog-artwork-allow-host.d0af423a58.png",
      n = r.p + "assets/dialog-artwork-connected.a7b57b9c53.png",
      a = r.p + "assets/dialog-artwork-initial.ad30a6d876.png",
      s = r.p + "assets/dialog-artwork-mfa.10470e046f.png",
      u = r.p + "assets/dialog-artwork-waiting-computer.f3ad255127.png",
      d = r.p + "assets/dialog-artwork-waiting-phone.92b2e46a10.png",
      p = r.p + "assets/page-artwork-allow-host.b0d3270c28.png",
      f = r.p + "assets/page-artwork-mfa.c171a52fc0.png",
      h = r.p + "assets/page-artwork-waiting.bcb7276cd4.png",
      y = r.p + "assets/page-artwork-shared.b618a4f48d.png",
      g = r("ESTr")
    let x = (0, g.a)({
      name: "chrome-logo-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.625, y: 1.625, width: 16.75, height: 16.75 },
        visualBounds: { x: 1.625, y: 1.625, width: 16.75, height: 16.75 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.625, y: 1.625, width: 16.75, height: 16.75 },
        center: { x: 10, y: 10 },
        insets: { top: 1.625, right: 1.625, bottom: 1.625, left: 1.625 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10 1.625C14.6255 1.625 18.375 5.3745 18.375 10C18.375 14.6255 14.6255 18.375 10 18.375C5.3745 18.375 1.625 14.6255 1.625 10C1.625 5.3745 5.3745 1.625 10 1.625ZM13.2402 7.875C13.6412 8.48523 13.875 9.21522 13.875 10C13.875 10.6203 13.7278 11.2058 13.4688 11.7256C13.4544 11.7601 13.4391 11.7949 13.4199 11.8281L10.6689 16.5908C14.0137 16.2554 16.625 13.4332 16.625 10C16.625 9.25644 16.5003 8.54225 16.2744 7.875H13.2402ZM3.95703 7.28418C3.58394 8.1131 3.375 9.03199 3.375 10C3.375 13.2147 5.66477 15.8927 8.70215 16.4961L10.2207 13.8682C10.1476 13.8723 10.0741 13.875 10 13.875C8.63381 13.875 7.43317 13.1677 6.74316 12.0996C6.72349 12.0731 6.70542 12.0449 6.68848 12.0156L3.95703 7.28418ZM10 7.875C8.8264 7.875 7.875 8.8264 7.875 10C7.875 11.1736 8.8264 12.125 10 12.125C11.1736 12.125 12.125 11.1736 12.125 10C12.125 8.8264 11.1736 7.875 10 7.875ZM10 3.375C8.01589 3.375 6.23661 4.24806 5.02246 5.62988L6.53906 8.25684C7.17633 6.99407 8.48362 6.12724 9.99414 6.125H15.3721C14.1687 4.45967 12.2117 3.375 10 3.375Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var C = r("CNwe")
    let m = (0, g.a)({
        name: "desktop-badge-lock-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 1.84668, y: 1.260742, width: 16.330078, height: 16.90332 },
          visualBounds: { x: 1.84668, y: 1.260742, width: 16.330078, height: 16.90332 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.84668, y: 1.260742, width: 16.330078, height: 16.90332 },
          center: { x: 10.011719, y: 9.712402 },
          insets: { top: 1.260742, right: 1.823242, bottom: 1.835938, left: 1.84668 },
          anchors: {
            frame: { x: 10, y: 10 },
            ink: { x: 10.011719, y: 9.712402 },
            foreground: { x: 10.011719, y: 9.712402 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M6.47852 3.50098C6.84579 3.50098 7.14355 3.79875 7.14355 4.16602C7.14355 4.53328 6.84579 4.83105 6.47852 4.83105H4.17871C3.62551 4.83105 3.17676 5.2798 3.17676 5.83301V12.916C3.17676 13.4692 3.62551 13.918 4.17871 13.918H7.08496C7.08821 13.9179 7.09146 13.917 7.09473 13.917C7.09799 13.917 7.10124 13.9179 7.10449 13.918H12.918C12.9212 13.9179 12.9245 13.917 12.9277 13.917C12.931 13.917 12.9342 13.9179 12.9375 13.918H15.8447C16.3979 13.918 16.8467 13.4692 16.8467 12.916V12.7061C16.8467 12.3388 17.1444 12.041 17.5117 12.041C17.879 12.041 18.1768 12.3388 18.1768 12.7061V12.916C18.1768 14.2038 17.1325 15.248 15.8447 15.248H13.5928V16.999C13.5926 17.6423 13.071 18.1641 12.4277 18.1641H7.59473C6.95142 18.1641 6.42986 17.6423 6.42969 16.999V15.248H4.17871C2.89097 15.248 1.84668 14.2038 1.84668 12.916V5.83301C1.84668 4.54526 2.89097 3.50098 4.17871 3.50098H6.47852ZM7.75977 16.834H12.2627V15.248H7.75977V16.834Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M13.043 1.26074C14.6764 1.26075 16.0067 2.55238 16.0713 4.16992C16.1054 4.17834 16.1399 4.18559 16.1729 4.19629C16.7555 4.38585 17.213 4.84301 17.4023 5.42578C17.5042 5.73945 17.4961 6.1041 17.4961 6.51758V8.69922C17.4961 9.11254 17.5042 9.47744 17.4023 9.79102C17.2129 10.3737 16.7555 10.831 16.1729 11.0205C15.9377 11.0969 15.6734 11.1118 15.3818 11.1143H10.7041C10.4127 11.1118 10.1491 11.0968 9.91406 11.0205C9.33125 10.8311 8.87411 10.3738 8.68457 9.79102C8.60815 9.5558 8.5933 9.29158 8.59082 9V6.2168C8.59329 5.92504 8.60811 5.66111 8.68457 5.42578C8.87403 4.84287 9.33113 4.3857 9.91406 4.19629C9.94657 4.18574 9.98008 4.17825 10.0137 4.16992C10.0782 2.55236 11.4096 1.26074 13.043 1.26074ZM11.0059 5.43262C10.4905 5.43262 10.3881 5.44066 10.3252 5.46094C10.1471 5.51879 10.0071 5.65889 9.94922 5.83691C9.92883 5.8998 9.9209 6.00099 9.9209 6.51758V8.69922C9.9209 9.21593 9.9288 9.31703 9.94922 9.37988C10.0072 9.55781 10.1472 9.69705 10.3252 9.75488C10.3881 9.7752 10.49 9.78418 11.0059 9.78418H15.0811C15.5975 9.78417 15.6989 9.7753 15.7617 9.75488C15.9394 9.69694 16.0788 9.55756 16.1367 9.37988C16.1571 9.31702 16.166 9.21553 16.166 8.69922V6.51758C16.166 6.00089 16.1571 5.89979 16.1367 5.83691C16.0789 5.659 15.9396 5.5189 15.7617 5.46094C15.6989 5.44052 15.5975 5.43262 15.0811 5.43262H11.0059ZM13.043 2.59082C12.1673 2.59082 11.4473 3.25215 11.3525 4.10254H14.7334C14.6387 3.25216 13.9186 2.59083 13.043 2.59082Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      b = (0, g.a)({
        name: "moon-sun-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 1.834961, y: 1.000977, width: 17.166016, height: 17.163086 },
          visualBounds: { x: 1.834961, y: 1.000977, width: 17.166016, height: 17.163086 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.834961, y: 1.000977, width: 17.166016, height: 17.163086 },
          center: { x: 10.417969, y: 9.58252 },
          insets: { top: 1.000977, right: 0.999023, bottom: 1.835937, left: 1.834961 },
          anchors: {
            frame: { x: 10, y: 10 },
            ink: { x: 10.417969, y: 9.58252 },
            foreground: { x: 10.417969, y: 9.58252 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M6.97461 5.18652C7.21772 5.12683 7.47338 5.20875 7.63672 5.39844C7.79993 5.58813 7.84315 5.85348 7.74805 6.08496C7.51505 6.65228 7.39062 7.25925 7.39062 7.91504C7.39097 10.5995 9.56624 12.7753 12.249 12.7754C12.8432 12.7754 13.4111 12.6688 13.9355 12.4746C14.1686 12.3883 14.4305 12.4392 14.6143 12.6064C14.7978 12.7736 14.8734 13.0296 14.8096 13.2695C14.0517 16.1088 11.3029 18.1641 8.38379 18.1641C4.96315 18.1639 1.83524 15.3912 1.83496 11.7266C1.83496 10.2124 2.25556 8.78346 3.125 7.62207C3.99742 6.45694 5.29372 5.59926 6.97461 5.18652ZM6.14941 6.87012C5.31252 7.25134 4.66367 7.78562 4.18945 8.41895C3.5155 9.3192 3.16504 10.4584 3.16504 11.7266C3.16532 14.5972 5.63673 16.8338 8.38379 16.834C10.3046 16.834 12.1417 15.7036 13.0645 14.0518C12.7975 14.0869 12.5252 14.1055 12.249 14.1055C8.8312 14.1054 6.0609 11.3335 6.06055 7.91504C6.06055 7.55718 6.09193 7.20868 6.14941 6.87012Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M10 5.16699C12.6685 5.16699 14.832 7.33057 14.832 9.99902C14.8319 10.366 14.534 10.6639 14.167 10.6641C13.7998 10.6641 13.5021 10.3661 13.502 9.99902C13.502 8.06511 11.9339 6.49707 10 6.49707C9.63273 6.49707 9.33496 6.1993 9.33496 5.83203C9.33496 5.46476 9.63273 5.16699 10 5.16699Z" fill="currentColor"/> <path d="M18.3369 9.33105C18.7039 9.33135 19.0009 9.62906 19.001 9.99609C19.0009 10.3633 18.7032 10.6611 18.3359 10.6611H17.0859C16.7189 10.6608 16.4209 10.3632 16.4209 9.99609C16.4209 9.62884 16.7197 9.33105 17.0869 9.33105H18.3369Z" fill="currentColor"/> <path d="M15.4229 3.63379C15.6826 3.37409 16.1046 3.37409 16.3643 3.63379C16.6235 3.89351 16.6238 4.31467 16.3643 4.57422L15.6025 5.33594C15.343 5.59547 14.9218 5.59518 14.6621 5.33594C14.4024 5.07624 14.4024 4.65423 14.6621 4.39453L15.4229 3.63379Z" fill="currentColor"/> <path d="M10 1.00098C10.3673 1.00098 10.665 1.29875 10.665 1.66602V2.91602C10.665 3.28329 10.3673 3.58105 10 3.58105C9.63273 3.58105 9.33496 3.28329 9.33496 2.91602V1.66602C9.33496 1.29875 9.63273 1.00098 10 1.00098Z" fill="currentColor"/>',
      })
    var w = r("Ys95"),
      v = r("on57"),
      M = r("Wf1j"),
      A = r("oyxz"),
      S = r("aTcy"),
      j = r("Sm6l"),
      k = r("Ot7V"),
      E = r("HOLv"),
      N = r("F0xz"),
      I = r("wwME"),
      P = r("XmRS"),
      L = r("AWNZ"),
      _ = r("ZEx5"),
      T = r("wp6O"),
      D = r("AtE1"),
      U = r("xSOA"),
      B = r("i5ac"),
      R = r.n(B),
      H = r("qmMi"),
      V = r("DBCl"),
      z = r("Haiv"),
      O = r("NYUO"),
      F = r("IIEq"),
      Z = r("jWaO"),
      q = r("rO8L"),
      $ = r("a0aG"),
      K = r("Yewb"),
      J = r("ugfi"),
      Q = r("cLdu"),
      G = r("ueue"),
      W = r("OWtl"),
      Y = r("dWmd"),
      X = r("RxZZ"),
      ee = r("kfGJ"),
      et = r("hZax"),
      er = r("RHhA")
    function el(e) {
      let { plugin: t } = e
      return t.id === V.POp
    }
    function ei(e) {
      let { plugin: t } = e
      return t.id
    }
    function eo(e) {
      let t,
        r,
        o,
        c,
        n,
        a,
        s,
        u,
        d,
        p,
        f,
        h,
        y,
        g = (0, i.c)(54),
        { onFinishSetup: k, onManageConnections: L, variant: B } = e,
        eo = (0, M.A)(),
        { platform: ea } = (0, I.V)(),
        es = (function () {
          let e,
            t,
            r,
            l,
            o,
            c,
            n,
            a,
            s,
            u,
            d,
            p,
            f,
            h,
            y,
            g,
            x,
            C,
            m,
            b,
            w = (0, i.c)(66),
            v = (0, H.gh)(W.u),
            { platform: M } = (0, I.V)(),
            A = (0, et.Zj)("410065390")
          w[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { hostId: ee.fI }), (w[0] = e)) : (e = w[0])
          let S = (0, F.H)(e),
            j = S.available,
            k = (0, X.iK)(V.Szl.keepRemoteControlAwakeWhilePluggedIn),
            E = (0, H._U)(O.I, ee.fI),
            N = (0, H.Ul)(Y.WP)
          w[1] !== v.query ? ((t = v.query.snapshot(Y.WP)), (w[1] = v.query), (w[2] = t)) : (t = w[2])
          let P = t
          w[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = { hostId: ee.fI, enabled: !0 }), (w[3] = r))
            : (r = w[3])
          let L = (0, q.J)(r)
          w[4] !== L ? ((l = { hostId: ee.fI, enabled: L }), (w[4] = L), (w[5] = l)) : (l = w[5])
          let _ = (0, Z.J)(l)
          ;(w[6] === Symbol.for("react.memo_cache_sentinel") ? ((o = []), (w[6] = o)) : (o = w[6]),
            w[7] !== L ? ((c = { hostId: ee.fI, roots: o, enabled: L }), (w[7] = L), (w[8] = c)) : (c = w[8]))
          let { data: T, isLoading: D, refetch: B } = (0, Q.Kj)(c)
          w[9] !== L
            ? ((n = { hostId: ee.fI, marketplaceKind: "local", enabled: L }), (w[9] = L), (w[10] = n))
            : (n = w[10])
          let { data: eo, isLoading: ec, refetch: en } = (0, G.y$)(n)
          if (
            w[11] !== D ||
            w[12] !== ec ||
            w[13] !== S.available ||
            w[14] !== S.isLoading ||
            w[15] !== _.available ||
            w[16] !== _.isLoading ||
            w[17] !== T ||
            w[18] !== L ||
            w[19] !== eo ||
            w[20] !== B ||
            w[21] !== en
          ) {
            var ea
            let e,
              t = (0, G.PM)({
                plugins: L
                  ? (0, G.Qc)({ buildFlavor: (0, er.t)(), plugins: R()([...(T ?? []), ...(eo ?? [])], ei) })
                  : [],
                isComputerUseAvailable: S.available,
                isExternalBrowserUseAvailable: _.available,
                isInAppBrowserUseAvailable: !1,
                isMessagesAvailable: !1,
              })
            ;((a = D || ec || S.isLoading || _.isLoading),
              w[27] !== B || w[28] !== en
                ? ((e = async () => {
                    await Promise.all([B(), en()])
                  }),
                  (w[27] = B),
                  (w[28] = en),
                  (w[29] = e))
                : (e = w[29]),
              (d = e),
              (u = t.find(el) ?? null),
              (s = u?.plugin.installed === !0 && u.plugin.enabled),
              (ea = t),
              (p =
                (V.x1u.isInternal((0, er.t)()) ? [V.DVx.chromeInternal, V.DVx.chromeDev, V.DVx.chrome] : [V.DVx.chrome])
                  .map((e) => ea.find(({ plugin: t }) => t.id === e))
                  .find((e) => null != e) ?? null),
              (w[11] = D),
              (w[12] = ec),
              (w[13] = S.available),
              (w[14] = S.isLoading),
              (w[15] = _.available),
              (w[16] = _.isLoading),
              (w[17] = T),
              (w[18] = L),
              (w[19] = eo),
              (w[20] = B),
              (w[21] = en),
              (w[22] = a),
              (w[23] = s),
              (w[24] = u),
              (w[25] = d),
              (w[26] = p))
          } else ((a = w[22]), (s = w[23]), (u = w[24]), (d = w[25]), (p = w[26]))
          let es = p
          w[30] === Symbol.for("react.memo_cache_sentinel") ? ((f = { hostId: ee.fI }), (w[30] = f)) : (f = w[30])
          let { pendingPluginId: eu, setPluginEnabled: ed } = (0, J.zQ)(f),
            { installPlugin: ep, status: ef } = (0, K.XY)()
          w[31] !== ef ? ((h = (0, K.on)(ef, { hostId: ee.fI })), (w[31] = ef), (w[32] = h)) : (h = w[32])
          let eh = h
          w[33] !== P
            ? ((y = {
                mutationFn: Y._o,
                onSuccess: (e) => {
                  P.setData((t) => ({
                    computerIconDataURL: t?.computerIconDataURL ?? null,
                    enabled: e,
                    lockIconDataURL: t?.lockIconDataURL ?? null,
                  }))
                },
              }),
              (w[33] = P),
              (w[34] = y))
            : (y = w[34])
          let ey = (0, U.n)(y),
            eg = "macOS" === M && s && E && N.data?.enabled != null
          w[35] !== u || w[36] !== ep || w[37] !== N.data?.enabled || w[38] !== d || w[39] !== ed || w[40] !== ey
            ? ((g = (e) => {
                if (null != u) {
                  if (!u.plugin.installed) {
                    e && ep(u, { hostId: ee.fI, marketplaceAnalytics: $.F.settings, onSuccess: d })
                    return
                  }
                  if (!e && N.data?.enabled)
                    return void ey.mutate(!1, {
                      onSuccess: (e) => {
                        !1 === e && ed({ enabled: !1, pluginDisplayName: (0, z.V)(u), pluginId: u.plugin.id })
                      },
                    })
                  ed({ enabled: e, pluginDisplayName: (0, z.V)(u), pluginId: u.plugin.id })
                }
              }),
              (w[35] = u),
              (w[36] = ep),
              (w[37] = N.data?.enabled),
              (w[38] = d),
              (w[39] = ed),
              (w[40] = ey),
              (w[41] = g))
            : (g = w[41])
          let ex = g
          w[42] !== es || w[43] !== ep || w[44] !== d || w[45] !== ed
            ? ((x = (e) => {
                if (null != es) {
                  if (!es.plugin.installed) {
                    e && ep(es, { hostId: ee.fI, marketplaceAnalytics: $.F.settings, onSuccess: d })
                    return
                  }
                  ed({ enabled: e, pluginDisplayName: (0, z.V)(es), pluginId: es.plugin.id })
                }
              }),
              (w[42] = es),
              (w[43] = ep),
              (w[44] = d),
              (w[45] = ed),
              (w[46] = x))
            : (x = w[46])
          let eC = x,
            em = es?.plugin.installed === !0 && es.plugin.enabled,
            eb = a || null == es || eh || eu === es.plugin.id,
            ew = a || null == u || eh || ey.isPending || eu === u.plugin.id,
            ev = k ?? !1,
            eM = N.data?.enabled ?? !1,
            eA = !s || N.isLoading || ey.isPending
          return (
            w[47] !== v
              ? ((C = (e) => {
                  ;(0, X.gc)(v, V.Szl.keepRemoteControlAwakeWhilePluggedIn, e)
                }),
                (w[47] = v),
                (w[48] = C))
              : (C = w[48]),
            w[49] !== ey
              ? ((m = (e) => {
                  ey.mutate(e)
                }),
                (w[49] = ey),
                (w[50] = m))
              : (m = w[50]),
            w[51] !== s ||
            w[52] !== eC ||
            w[53] !== ex ||
            w[54] !== A ||
            w[55] !== j ||
            w[56] !== eg ||
            w[57] !== em ||
            w[58] !== eb ||
            w[59] !== ew ||
            w[60] !== ev ||
            w[61] !== eM ||
            w[62] !== eA ||
            w[63] !== C ||
            w[64] !== m
              ? ((b = {
                  chromeExtensionEnabled: em,
                  chromeExtensionToggleDisabled: eb,
                  computerUseEnabled: s,
                  computerUseToggleDisabled: ew,
                  keepComputerAwake: ev,
                  keepComputerAwakeToggleDisabled: !1,
                  lockedComputerUseEnabled: eM,
                  lockedComputerUseToggleDisabled: eA,
                  onChromeExtensionEnabledChange: eC,
                  onComputerUseEnabledChange: ex,
                  onKeepComputerAwakeChange: C,
                  onLockedComputerUseEnabledChange: m,
                  showChromeExtensionSetup: A,
                  showComputerUseSetup: j,
                  showKeepComputerAwake: !0,
                  showLockedComputerUse: eg,
                }),
                (w[51] = s),
                (w[52] = eC),
                (w[53] = ex),
                (w[54] = A),
                (w[55] = j),
                (w[56] = eg),
                (w[57] = em),
                (w[58] = eb),
                (w[59] = ew),
                (w[60] = ev),
                (w[61] = eM),
                (w[62] = eA),
                (w[63] = C),
                (w[64] = m),
                (w[65] = b))
              : (b = w[65]),
            b
          )
        })(),
        eu = "page" === B ? _.t : "div"
      ;(g[0] !== B
        ? ((t = "page" === B ? (0, l.jsx)(P.A, { className: "size-11 text-default" }) : void 0), (g[0] = B), (g[1] = t))
        : (t = g[1]),
        g[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)(A.A, {
              id: "codexMobile.setupDialog.connected.heading",
              defaultMessage: "You\u2019re connected",
            })),
            (o = (0, l.jsx)(A.A, {
              id: "codexMobile.setupDialog.connected.description",
              defaultMessage: "Make the most out of your new connection. You can change these later in Settings.",
            })),
            (g[2] = r),
            (g[3] = o))
          : ((r = g[2]), (o = g[3])))
      let ed = "dialog" === B ? "flex w-full flex-col gap-2" : "w-full max-w-[400px] text-start"
      ;(g[4] !== es.keepComputerAwake ||
      g[5] !== es.keepComputerAwakeToggleDisabled ||
      g[6] !== es.onKeepComputerAwakeChange ||
      g[7] !== es.showKeepComputerAwake ||
      g[8] !== eo ||
      g[9] !== ea ||
      g[10] !== B
        ? ((c = es.showKeepComputerAwake
            ? (0, l.jsx)(en, {
                icon: es.keepComputerAwake
                  ? (0, l.jsx)(E.I, { "aria-hidden": !1, asset: w.j })
                  : (0, l.jsx)(E.I, { "aria-hidden": !1, asset: b }),
                variant: B,
                title:
                  "macOS" !== ea
                    ? (0, l.jsx)(A.A, {
                        id: "codexMobile.setupDialog.connected.keepAwake.title.windows",
                        defaultMessage: "Keep this PC awake",
                      })
                    : (0, l.jsx)(A.A, {
                        id: "codexMobile.setupDialog.connected.keepAwake.title",
                        defaultMessage: "Keep this Mac awake",
                      }),
                description: (0, l.jsx)(A.A, {
                  id: "codexMobile.setupDialog.connected.keepAwake.description",
                  defaultMessage: "Prevent sleep when this computer is plugged in and remote access is enabled",
                }),
                trailing: (0, l.jsx)(N.l, {
                  checked: es.keepComputerAwake,
                  disabled: es.keepComputerAwakeToggleDisabled,
                  ariaLabel:
                    "macOS" !== ea
                      ? eo.formatMessage({
                          id: "codexMobile.setupDialog.connected.keepAwake.toggle.windows",
                          defaultMessage: "Keep this PC awake",
                        })
                      : eo.formatMessage({
                          id: "codexMobile.setupDialog.connected.keepAwake.toggle",
                          defaultMessage: "Keep this Mac awake",
                        }),
                  onChange: es.onKeepComputerAwakeChange,
                }),
              })
            : null),
          (g[4] = es.keepComputerAwake),
          (g[5] = es.keepComputerAwakeToggleDisabled),
          (g[6] = es.onKeepComputerAwakeChange),
          (g[7] = es.showKeepComputerAwake),
          (g[8] = eo),
          (g[9] = ea),
          (g[10] = B),
          (g[11] = c))
        : (c = g[11]),
        g[12] !== es.computerUseEnabled ||
        g[13] !== es.computerUseToggleDisabled ||
        g[14] !== es.lockedComputerUseEnabled ||
        g[15] !== es.lockedComputerUseToggleDisabled ||
        g[16] !== es.onComputerUseEnabledChange ||
        g[17] !== es.onLockedComputerUseEnabledChange ||
        g[18] !== es.showComputerUseSetup ||
        g[19] !== es.showLockedComputerUse ||
        g[20] !== eo ||
        g[21] !== ea ||
        g[22] !== B
          ? ((n =
              es.showComputerUseSetup && es.showLockedComputerUse
                ? (0, l.jsx)(en, {
                    icon: (0, l.jsx)(E.I, { "aria-hidden": !1, asset: m }),
                    variant: B,
                    title: (0, l.jsx)(A.A, {
                      id: "codexMobile.setupDialog.connected.lockedComputerUse.title",
                      defaultMessage: "Use your Mac apps while locked",
                    }),
                    description: (0, l.jsx)(A.A, {
                      id: "codexMobile.setupDialog.connected.lockedComputerUse.description",
                      defaultMessage: "Control Mac apps from your phone. <a>Learn more</a>",
                      values: {
                        a: (e) =>
                          (0, l.jsx)("a", {
                            className: "inline-flex text-link-primary!",
                            href: S.DU,
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: "dialog" === B ? ec : void 0,
                            children: e,
                          }),
                      },
                    }),
                    trailing: (0, l.jsx)(N.l, {
                      checked: es.lockedComputerUseEnabled,
                      disabled: es.lockedComputerUseToggleDisabled,
                      ariaLabel: eo.formatMessage({
                        id: "codexMobile.setupDialog.connected.lockedComputerUse.toggle",
                        defaultMessage: "Use your Mac apps while locked",
                      }),
                      onChange: es.onLockedComputerUseEnabledChange,
                    }),
                  })
                : es.showComputerUseSetup
                  ? (0, l.jsx)(en, {
                      icon: (0, l.jsx)(E.I, { "aria-hidden": !1, asset: C.h }),
                      variant: B,
                      title: (0, l.jsx)(A.A, {
                        id: "codexMobile.setupDialog.connected.computerUse.title",
                        defaultMessage: "Enable computer use",
                      }),
                      description:
                        "macOS" !== ea
                          ? (0, l.jsx)(A.A, {
                              id: "codexMobile.setupDialog.connected.computerUse.description.windows",
                              defaultMessage: "Let ChatGPT control apps on your PC",
                            })
                          : (0, l.jsx)(A.A, {
                              id: "codexMobile.setupDialog.connected.computerUse.description",
                              defaultMessage: "Let ChatGPT control apps on your Mac",
                            }),
                      trailing: (0, l.jsx)(N.l, {
                        checked: es.computerUseEnabled,
                        disabled: es.computerUseToggleDisabled,
                        ariaLabel: eo.formatMessage({
                          id: "codexMobile.setupDialog.connected.computerUse.toggle",
                          defaultMessage: "Enable computer use",
                        }),
                        onChange: es.onComputerUseEnabledChange,
                      }),
                    })
                  : null),
            (g[12] = es.computerUseEnabled),
            (g[13] = es.computerUseToggleDisabled),
            (g[14] = es.lockedComputerUseEnabled),
            (g[15] = es.lockedComputerUseToggleDisabled),
            (g[16] = es.onComputerUseEnabledChange),
            (g[17] = es.onLockedComputerUseEnabledChange),
            (g[18] = es.showComputerUseSetup),
            (g[19] = es.showLockedComputerUse),
            (g[20] = eo),
            (g[21] = ea),
            (g[22] = B),
            (g[23] = n))
          : (n = g[23]),
        g[24] !== es.chromeExtensionEnabled ||
        g[25] !== es.chromeExtensionToggleDisabled ||
        g[26] !== es.onChromeExtensionEnabledChange ||
        g[27] !== es.showChromeExtensionSetup ||
        g[28] !== eo ||
        g[29] !== B
          ? ((a = es.showChromeExtensionSetup
              ? (0, l.jsx)(en, {
                  icon: (0, l.jsx)(E.I, { "aria-hidden": !1, asset: x }),
                  variant: B,
                  title: (0, l.jsx)(A.A, {
                    id: "codexMobile.setupDialog.connected.chromeExtension.title",
                    defaultMessage: "Set up Chrome extension",
                  }),
                  description: (0, l.jsx)(A.A, {
                    id: "codexMobile.setupDialog.connected.chromeExtension.description",
                    defaultMessage: "Let ChatGPT navigate websites and fill out forms",
                  }),
                  trailing: (0, l.jsx)(N.l, {
                    checked: es.chromeExtensionEnabled,
                    disabled: es.chromeExtensionToggleDisabled,
                    ariaLabel: eo.formatMessage({
                      id: "codexMobile.setupDialog.connected.chromeExtension.toggle",
                      defaultMessage: "Set up Chrome extension",
                    }),
                    onChange: es.onChromeExtensionEnabledChange,
                  }),
                })
              : null),
            (g[24] = es.chromeExtensionEnabled),
            (g[25] = es.chromeExtensionToggleDisabled),
            (g[26] = es.onChromeExtensionEnabledChange),
            (g[27] = es.showChromeExtensionSetup),
            (g[28] = eo),
            (g[29] = B),
            (g[30] = a))
          : (a = g[30]),
        g[31] !== eu || g[32] !== ed || g[33] !== c || g[34] !== n || g[35] !== a
          ? ((s = (0, l.jsxs)(eu, { className: ed, children: [c, n, a] })),
            (g[31] = eu),
            (g[32] = ed),
            (g[33] = c),
            (g[34] = n),
            (g[35] = a),
            (g[36] = s))
          : (s = g[36]))
      let ep = "page" === B && "w-[256px]"
      return (
        g[37] !== ep ? ((u = (0, v.A)("justify-center", ep)), (g[37] = ep), (g[38] = u)) : (u = g[38]),
        g[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, l.jsx)(A.A, { id: "codexMobile.setupDialog.connected.finish", defaultMessage: "Done" })),
            (g[39] = d))
          : (d = g[39]),
        g[40] !== k || g[41] !== u
          ? ((p = (0, l.jsx)("div", {
              className: "flex flex-wrap items-center justify-center gap-3",
              children: (0, l.jsx)(j.$, { size: "large", className: u, onClick: k, children: d }),
            })),
            (g[40] = k),
            (g[41] = u),
            (g[42] = p))
          : (p = g[42]),
        g[43] !== L || g[44] !== B
          ? ((f =
              "page" === B && null != L ? (0, l.jsx)(D.D5, { className: "w-[256px]", onManageConnections: L }) : null),
            (g[43] = L),
            (g[44] = B),
            (g[45] = f))
          : (f = g[45]),
        g[46] !== p || g[47] !== f
          ? ((h = (0, l.jsxs)("div", { className: "flex w-full flex-col items-center gap-3", children: [p, f] })),
            (g[46] = p),
            (g[47] = f),
            (g[48] = h))
          : (h = g[48]),
        g[49] !== t || g[50] !== h || g[51] !== s || g[52] !== B
          ? ((y = (0, l.jsx)(l.Fragment, {
              children: (0, l.jsxs)(T._, {
                variant: B,
                headerAdornment: t,
                heading: r,
                description: o,
                children: [s, h],
              }),
            })),
            (g[49] = t),
            (g[50] = h),
            (g[51] = s),
            (g[52] = B),
            (g[53] = y))
          : (y = g[53]),
        y
      )
    }
    function ec(e) {
      ;(0, k.PQ)({ event: e, href: S.DU, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function en(e) {
      let t,
        r,
        o,
        c,
        n,
        a,
        s,
        u = (0, i.c)(22),
        { description: d, icon: p, title: f, trailing: h, variant: y } = e
      if ("page" === y) {
        let e
        return (
          u[0] !== d || u[1] !== p || u[2] !== f || u[3] !== h
            ? ((e = (0, l.jsx)(L.ic, { controlSizing: "content", description: d, icon: p, label: f, control: h })),
              (u[0] = d),
              (u[1] = p),
              (u[2] = f),
              (u[3] = h),
              (u[4] = e))
            : (e = u[4]),
          e
        )
      }
      return (
        u[5] !== p
          ? ((t = (0, l.jsx)("div", {
              className: "flex size-11 shrink-0 items-center justify-center text-default",
              children: p,
            })),
            (u[5] = p),
            (u[6] = t))
          : (t = u[6]),
        u[7] !== f
          ? ((r = (0, l.jsx)("div", { className: "text-sm text-default", children: f })), (u[7] = f), (u[8] = r))
          : (r = u[8]),
        u[9] !== d
          ? ((o = (0, l.jsx)("div", { className: "text-xs text-codex-description", children: d })),
            (u[9] = d),
            (u[10] = o))
          : (o = u[10]),
        u[11] !== r || u[12] !== o
          ? ((c = (0, l.jsxs)("div", { className: "min-w-0 flex-1", children: [r, o] })),
            (u[11] = r),
            (u[12] = o),
            (u[13] = c))
          : (c = u[13]),
        u[14] !== t || u[15] !== c
          ? ((n = (0, l.jsxs)("div", {
              className: "flex min-w-0 flex-1 items-center gap-3 text-start",
              children: [t, c],
            })),
            (u[14] = t),
            (u[15] = c),
            (u[16] = n))
          : (n = u[16]),
        u[17] !== h
          ? ((a = (0, l.jsx)("div", { className: "shrink-0 text-codex-description", children: h })),
            (u[17] = h),
            (u[18] = a))
          : (a = u[18]),
        u[19] !== n || u[20] !== a
          ? ((s = (0, l.jsxs)("div", {
              className: "flex items-center justify-between gap-4 px-[14px] py-2 text-start",
              children: [n, a],
            })),
            (u[19] = n),
            (u[20] = a),
            (u[21] = s))
          : (s = u[21]),
        s
      )
    }
    var ea = r("frfg"),
      es = r("CVHj")
    function eu(e) {
      let t,
        r,
        o,
        c = (0, i.c)(16),
        { approvalDeviceMode: n, heading: a, hostId: s, onApprovalDeviceModeChange: u, variant: d } = e,
        p = void 0 === s ? ee.fI : s,
        { platform: f } = (0, I.V)()
      c[0] !== a || c[1] !== f
        ? ((t =
            a ??
            ("macOS" === f
              ? (0, l.jsx)(A.A, {
                  id: "codexMobile.setupDialog.waiting.heading.mac",
                  defaultMessage: "Approve on your device to control this Mac remotely",
                })
              : (0, l.jsx)(A.A, {
                  id: "codexMobile.setupDialog.waiting.heading.pc",
                  defaultMessage: "Approve on your device to control this computer remotely",
                }))),
          (c[0] = a),
          (c[1] = f),
          (c[2] = t))
        : (t = c[2])
      let h = t
      if ("page" === d) {
        let e, t, r
        return (
          c[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(A.A, {
                id: "codexMobile.setupPage.waiting.phoneDeepLink.caption",
                defaultMessage: "Scan to continue setup in ChatGPT",
              })),
              (c[3] = e))
            : (e = c[3]),
          c[4] !== p
            ? ((t = (0, l.jsx)("div", {
                className: "flex w-full max-w-[460px] flex-col items-center gap-6",
                children: (0, l.jsx)(es.K, { hostId: p, showDeviceTypeSelector: !1 }),
              })),
              (c[4] = p),
              (c[5] = t))
            : (t = c[5]),
          c[6] !== h || c[7] !== t
            ? ((r = (0, l.jsx)(T._, { variant: "page", heading: h, description: e, children: t })),
              (c[6] = h),
              (c[7] = t),
              (c[8] = r))
            : (r = c[8]),
          r
        )
      }
      return (
        c[9] !== n || c[10] !== p || c[11] !== u
          ? ((r = (0, l.jsx)("div", {
              className: "flex w-full justify-center",
              children: (0, l.jsx)(es.K, { deviceType: n, hostId: p, onDeviceTypeChange: u, size: "compact" }),
            })),
            (c[9] = n),
            (c[10] = p),
            (c[11] = u),
            (c[12] = r))
          : (r = c[12]),
        c[13] !== h || c[14] !== r
          ? ((o = (0, l.jsx)(T._, { variant: "dialog", heading: h, children: r })),
            (c[13] = h),
            (c[14] = r),
            (c[15] = o))
          : (o = c[15]),
        o
      )
    }
    function ed(e) {
      let t,
        r,
        g,
        x,
        C = (0, i.c)(31),
        {
          hostId: m,
          onAllowHost: b,
          onContinueOnChatGPT: w,
          onFinishSetup: v,
          onManageConnections: M,
          onSkip: A,
          onStartSetup: S,
          setupInProgress: j,
          showAllowHostError: k,
          showStartSetupError: E,
          step: N,
          variant: I,
          waitingHeading: P,
        } = e,
        L = void 0 !== k && k,
        [_, T] = (0, o.useState)("phone")
      C[0] !== _ ||
      C[1] !== m ||
      C[2] !== b ||
      C[3] !== w ||
      C[4] !== v ||
      C[5] !== M ||
      C[6] !== A ||
      C[7] !== S ||
      C[8] !== j ||
      C[9] !== L ||
      C[10] !== E ||
      C[11] !== N ||
      C[12] !== I ||
      C[13] !== P
        ? ((t = (0, l.jsx)(ef, {
            approvalDeviceMode: _,
            hostId: m,
            onAllowHost: b,
            onApprovalDeviceModeChange: T,
            onContinueOnChatGPT: w,
            onFinishSetup: v,
            onManageConnections: M,
            onSkip: A,
            onStartSetup: S,
            setupInProgress: j,
            showAllowHostError: L,
            showStartSetupError: E,
            step: N,
            variant: I,
            waitingHeading: P,
          })),
          (C[0] = _),
          (C[1] = m),
          (C[2] = b),
          (C[3] = w),
          (C[4] = v),
          (C[5] = M),
          (C[6] = A),
          (C[7] = S),
          (C[8] = j),
          (C[9] = L),
          (C[10] = E),
          (C[11] = N),
          (C[12] = I),
          (C[13] = P),
          (C[14] = t))
        : (t = C[14])
      let U = t
      if ("dialog" === I) {
        let e, t, r
        return (
          C[15] !== _ || C[16] !== N
            ? ((e = (function (e, t) {
                switch (e) {
                  case "allow-host":
                    return c
                  case "connected":
                    return n
                  case "initial":
                    return a
                  case "mfa-required":
                    return s
                  case "waiting":
                    return "phone" === t ? d : u
                }
              })(N, _)),
              (C[15] = _),
              (C[16] = N),
              (C[17] = e))
            : (e = C[17]),
          C[18] !== e ? ((t = (0, l.jsx)(D.tj, { artworkSrc: e })), (C[18] = e), (C[19] = t)) : (t = C[19]),
          C[20] !== U || C[21] !== t
            ? ((r = (0, l.jsxs)("div", {
                className: "pointer-events-auto flex w-full flex-col overflow-hidden",
                children: [t, U],
              })),
              (C[20] = U),
              (C[21] = t),
              (C[22] = r))
            : (r = C[22]),
          r
        )
      }
      return (
        C[23] !== N
          ? ((r = (function (e) {
              switch (e) {
                case "allow-host":
                  return "bottom-right"
                case "mfa-required":
                  return "right"
                case "connected":
                case "initial":
                case "waiting":
                  return "center"
              }
            })(N)),
            (C[23] = N),
            (C[24] = r))
          : (r = C[24]),
        C[25] !== N
          ? ((g = (function (e) {
              switch (e) {
                case "allow-host":
                  return p
                case "connected":
                case "initial":
                  return y
                case "mfa-required":
                  return f
                case "waiting":
                  return h
              }
            })(N)),
            (C[25] = N),
            (C[26] = g))
          : (g = C[26]),
        C[27] !== U || C[28] !== r || C[29] !== g
          ? ((x = (0, l.jsx)(D.xc, { artworkAlignment: r, artworkSrc: g, children: U })),
            (C[27] = U),
            (C[28] = r),
            (C[29] = g),
            (C[30] = x))
          : (x = C[30]),
        x
      )
    }
    function ep(e) {
      let t,
        r = (0, i.c)(2),
        { onManageConnections: o } = e
      return (
        r[0] !== o
          ? ((t = (0, l.jsx)(D.xc, { children: (0, l.jsx)(ea.fn, { onManageConnections: o }) })),
            (r[0] = o),
            (r[1] = t))
          : (t = r[1]),
        t
      )
    }
    function ef(e) {
      let t = (0, i.c)(24),
        {
          approvalDeviceMode: r,
          hostId: o,
          onAllowHost: c,
          onApprovalDeviceModeChange: n,
          onContinueOnChatGPT: a,
          onFinishSetup: s,
          onManageConnections: u,
          onSkip: d,
          onStartSetup: p,
          setupInProgress: f,
          showAllowHostError: h,
          showStartSetupError: y,
          step: g,
          variant: x,
          waitingHeading: C,
        } = e
      switch (g) {
        case "allow-host": {
          let e
          return (
            t[0] !== c || t[1] !== f || t[2] !== h || t[3] !== x
              ? ((e = (0, l.jsx)(ea.Ri, { onAllowHost: c, setupInProgress: f, showAllowHostError: h, variant: x })),
                (t[0] = c),
                (t[1] = f),
                (t[2] = h),
                (t[3] = x),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
        case "connected": {
          let e
          return (
            t[5] !== s || t[6] !== u || t[7] !== x
              ? ((e = (0, l.jsx)(eo, { onFinishSetup: s, onManageConnections: u, variant: x })),
                (t[5] = s),
                (t[6] = u),
                (t[7] = x),
                (t[8] = e))
              : (e = t[8]),
            e
          )
        }
        case "initial": {
          let e
          return (
            t[9] !== d || t[10] !== p || t[11] !== f || t[12] !== y || t[13] !== x
              ? ((e = (0, l.jsx)(ea.QB, {
                  onSkip: d,
                  onStartSetup: p,
                  showStartSetupError: y,
                  setupInProgress: f,
                  variant: x,
                })),
                (t[9] = d),
                (t[10] = p),
                (t[11] = f),
                (t[12] = y),
                (t[13] = x),
                (t[14] = e))
              : (e = t[14]),
            e
          )
        }
        case "mfa-required": {
          let e
          return (
            t[15] !== a || t[16] !== x
              ? ((e = (0, l.jsx)(ea.D9, { onContinueOnChatGPT: a, variant: x })), (t[15] = a), (t[16] = x), (t[17] = e))
              : (e = t[17]),
            e
          )
        }
        case "waiting": {
          let e
          return (
            t[18] !== r || t[19] !== o || t[20] !== n || t[21] !== x || t[22] !== C
              ? ((e = (0, l.jsx)(eu, {
                  approvalDeviceMode: r,
                  heading: C,
                  hostId: o,
                  onApprovalDeviceModeChange: n,
                  variant: x,
                })),
                (t[18] = r),
                (t[19] = o),
                (t[20] = n),
                (t[21] = x),
                (t[22] = C),
                (t[23] = e))
              : (e = t[23]),
            e
          )
        }
      }
    }
  },
  CVHj(e, t, r) {
    r.d(t, { K: () => en })
    var l = r("ABep"),
      i = r("QosV"),
      o = r("slpy"),
      c = r("SYwi"),
      n = r("on57"),
      a = r("qmMi"),
      s = r("zd8w"),
      u = r("Wf1j"),
      d = r("oyxz"),
      p = r("Sm6l"),
      f = r("uuN8"),
      h = r("JNtf"),
      y = r("HOLv"),
      g = r("EShr"),
      x = r("RNul"),
      C = r("S9NQ"),
      m = r("kfGJ"),
      b = r("hZax"),
      w = r("aepO"),
      v = r("mUEW"),
      M = r("rFhZ")
    let A = {
      androidDots: new URL(r("UHU9"), r.b).href,
      corners: new URL(r("RomW"), r.b).href,
      iosDots: new URL(r("WENx"), r.b).href,
    }
    var S = r("T1PX")
    function j(e, t) {
      var r
      let l,
        i =
          ((r = t),
          ((l = _("radialGradient")).id = r),
          l.setAttribute("gradientUnits", "userSpaceOnUse"),
          l.setAttribute("cx", String(-72)),
          l.setAttribute("cy", String(-72)),
          l.setAttribute("r", String(72)),
          l.append(k("0", "1"), k("0.58", "0.61"), k("0.99", "0.23"), k("1", "0")),
          l),
        o = N(e)
      return (o.setAttribute("fill", `url(#${i.id})`), o.setAttribute("opacity", "0"), { gradient: i, maskRect: o })
    }
    function k(e, t) {
      let r = _("stop")
      return (r.setAttribute("offset", e), r.setAttribute("stop-color", "white"), r.setAttribute("stop-opacity", t), r)
    }
    function E(e, t) {
      let r = _("mask"),
        l = e.viewBox.baseVal
      return (
        (r.id = t),
        r.setAttribute("maskUnits", "userSpaceOnUse"),
        r.setAttribute("x", String(l.x)),
        r.setAttribute("y", String(l.y)),
        r.setAttribute("width", String(l.width)),
        r.setAttribute("height", String(l.height)),
        r
      )
    }
    function N(e) {
      let t = _("rect"),
        r = e.viewBox.baseVal
      return (
        t.setAttribute("x", String(r.x)),
        t.setAttribute("y", String(r.y)),
        t.setAttribute("width", String(r.width)),
        t.setAttribute("height", String(r.height)),
        t
      )
    }
    function I(e, t, r, l, i) {
      let o = _("use")
      return (
        o.setAttribute("href", `#${e}`),
        o.setAttribute("fill", t),
        o.setAttribute("opacity", r),
        o.setAttribute("pointer-events", "none"),
        null != l && o.setAttribute("mask", `url(#${l})`),
        null != i && (o.setAttribute("stroke", t), o.setAttribute("stroke-width", String(i))),
        o
      )
    }
    function P(e, t, r) {
      ;(e.gradient.setAttribute("cx", String(t.x)),
        e.gradient.setAttribute("cy", String(t.y)),
        e.maskRect.setAttribute("opacity", String(r)))
    }
    function L(e, t) {
      ;((e.current = null),
        (e.lastSampledAt = 0),
        (e.trail.length = 0),
        null != t && t.brushOverlay.setAttribute("opacity", "0"))
    }
    function _(e) {
      return document.createElementNS("http://www.w3.org/2000/svg", e)
    }
    function T(e) {
      let t,
        r,
        o,
        c,
        n,
        a = (0, i.c)(13),
        { onArtworkReady: u, ref: d, svgMarkup: p } = e
      a[0] !== u || a[1] !== p
        ? ((t = { onArtworkReady: u, svgMarkup: p }), (a[0] = u), (a[1] = p), (a[2] = t))
        : (t = a[2])
      let {
        clearPaint: f,
        paintDots: h,
        rootRef: y,
        triggerRipple: g,
      } = (function (e) {
        let t,
          r,
          l,
          o,
          c,
          n,
          a,
          u,
          d,
          p,
          f,
          h,
          y = (0, i.c)(23),
          { onArtworkReady: g, svgMarkup: x } = e,
          C = (0, S.I)(),
          m = (0, s.useId)()
        y[0] !== m ? ((t = m.replaceAll(":", "")), (y[0] = m), (y[1] = t)) : (t = y[1])
        let b = t,
          w = (0, s.useRef)(null),
          v = (0, s.useRef)(null),
          M = (0, s.useRef)(null)
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { current: null, lastSampledAt: 0, trail: [] }), (y[2] = r))
          : (r = y[2])
        let A = (0, s.useRef)(r),
          T = (0, s.useRef)(null),
          D = (0, s.useRef)(null),
          U = (0, s.useRef)(null)
        y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = function e(t) {
              let r = M.current,
                l = v.current,
                i = T.current
              if (((T.current = null), null != r && null != l && null != i)) {
                let e = l.createSVGPoint()
                ;((e.x = i.x), (e.y = i.y))
                let o = l.getScreenCTM()
                if (null != o) {
                  let l = e.matrixTransform(o.inverse()),
                    i = A.current
                  ;(null != i.current && t - i.lastSampledAt >= 55
                    ? (i.trail.unshift({ sampledAt: t, x: i.current.x, y: i.current.y }),
                      i.trail.length > 8 && i.trail.pop(),
                      (i.lastSampledAt = t))
                    : null == i.current && (i.lastSampledAt = t),
                    (i.current = l),
                    P(r.brushSpot, l, 1),
                    r.brushOverlay.setAttribute("opacity", "1"))
                }
              }
              if (null != r) {
                let e = A.current.trail
                for (; e.length > 0 && t - e[e.length - 1].sampledAt >= 720;) e.pop()
                for (let [l, i] of r.trailSpots.entries()) {
                  let r = e[l]
                  if (null == r) {
                    i.maskRect.setAttribute("opacity", "0")
                    continue
                  }
                  P(i, r, (1 - (t - r.sampledAt) / 720) * (1 - l / 8) * 0.75)
                }
              }
              let o = U.current
              if (null != r && null != o) {
                let e = Math.min(1, (t - o.startedAt) / 760),
                  l = o.maxRadius * e,
                  i = Math.max(0, l - 42),
                  c = Math.min(o.maxRadius, l + 42),
                  [n, a, s] = r.rippleStops
                ;(n.setAttribute("offset", String(i / o.maxRadius)),
                  a.setAttribute("offset", String(l / o.maxRadius)),
                  s.setAttribute("offset", String(c / o.maxRadius)),
                  r.rippleOverlay.setAttribute("opacity", String(1 - 0.18 * e)),
                  e >= 1 && ((U.current = null), r.rippleOverlay.setAttribute("opacity", "0")))
              }
              D.current =
                null != U.current || null != T.current || (null != r && A.current.trail.length > 0)
                  ? requestAnimationFrame(e)
                  : null
            }),
            (y[3] = l))
          : (l = y[3])
        let B = l
        y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = () => {
              null == D.current && (D.current = requestAnimationFrame(B))
            }),
            (y[4] = o))
          : (o = y[4])
        let R = o
        ;(y[5] !== C
          ? ((c = () => {
              C &&
                ((U.current = null),
                (T.current = null),
                L(A.current, M.current),
                M.current?.rippleOverlay.setAttribute("opacity", "0"),
                null != D.current && (cancelAnimationFrame(D.current), (D.current = null)))
            }),
            (n = [C]),
            (y[5] = C),
            (y[6] = c),
            (y[7] = n))
          : ((c = y[6]), (n = y[7])),
          (0, s.useEffect)(c, n),
          y[8] !== g || y[9] !== b
            ? ((a = () => {
                let e = w.current?.querySelector("svg")
                if (null == e) return
                let t = A.current,
                  r = (function (e, t) {
                    var r, l, i, o
                    let c,
                      n,
                      a,
                      s,
                      u,
                      d = _("g"),
                      p = `interactive-dots-${t}`
                    d.id = p
                    let f = Array.from(e.querySelectorAll(":scope > path")).map((e) => {
                        let t = e.getAttribute("fill")
                        return (e.removeAttribute("fill"), d.appendChild(e), { fill: t, path: e })
                      }),
                      h = _("defs"),
                      y = j(e, `interactive-brush-${t}`),
                      g = Array.from({ length: 8 }, (r, l) => j(e, `interactive-brush-trail-${l}-${t}`)),
                      x = E(e, `interactive-brush-${t}-mask`)
                    x.append(y.maskRect, ...g.map(({ maskRect: e }) => e))
                    let { gradient: C, stops: m } =
                        ((r = e),
                        (l = `interactive-ripple-${t}`),
                        (c = _("radialGradient")),
                        (n = r.viewBox.baseVal),
                        (a = [k("0", "0"), k("0", "1"), k("0", "0")]),
                        (c.id = l),
                        c.setAttribute("gradientUnits", "userSpaceOnUse"),
                        c.setAttribute("cx", String(n.x + n.width / 2)),
                        c.setAttribute("cy", String(n.y + n.height / 2)),
                        c.setAttribute("r", String(Math.hypot(n.width / 2, n.height / 2))),
                        c.append(...a),
                        { gradient: c, stops: a }),
                      b =
                        ((i = e),
                        (o = C),
                        (s = E(i, `${o.id}-mask`)),
                        (u = N(i)).setAttribute("fill", `url(#${o.id})`),
                        s.appendChild(u),
                        s)
                    ;(h.append(d, y.gradient, ...g.map(({ gradient: e }) => e), x, C, b), e.prepend(h))
                    let w = I(p, "currentColor", "1"),
                      v = I(p, "var(--color-chart-blue)", "0", x.id, 1),
                      M = I(p, "var(--color-chart-blue)", "0", b.id, 1.4)
                    return (
                      e.append(w, v, M),
                      {
                        baseOverlay: w,
                        brushOverlay: v,
                        brushSpot: y,
                        defs: h,
                        originalPathFills: f,
                        rippleOverlay: M,
                        rippleStops: m,
                        trailSpots: g,
                      }
                    )
                  })(e, b)
                return (
                  (v.current = e),
                  (M.current = r),
                  (T.current = null),
                  L(t, r),
                  g?.(),
                  () => {
                    ;((v.current = null),
                      (M.current = null),
                      (U.current = null),
                      (T.current = null),
                      L(t, null),
                      null != D.current && (cancelAnimationFrame(D.current), (D.current = null)),
                      (function (e, t) {
                        if (t.defs.parentNode === e) {
                          for (let { fill: r, path: l } of t.originalPathFills)
                            (null == r ? l.removeAttribute("fill") : l.setAttribute("fill", r),
                              e.insertBefore(l, t.baseOverlay))
                          ;(t.baseOverlay.remove(), t.brushOverlay.remove(), t.rippleOverlay.remove(), t.defs.remove())
                        }
                      })(e, r))
                  }
                )
              }),
              (y[8] = g),
              (y[9] = b),
              (y[10] = a))
            : (a = y[10]),
          y[11] !== g || y[12] !== b || y[13] !== x
            ? ((u = [g, b, x]), (y[11] = g), (y[12] = b), (y[13] = x), (y[14] = u))
            : (u = y[14]),
          (0, s.useEffect)(a, u),
          y[15] !== C
            ? ((d = () => {
                if (C) return
                let e = v.current
                if (null == e) return
                let t = e.viewBox.baseVal
                ;((U.current = { maxRadius: Math.hypot(t.width / 2, t.height / 2), startedAt: performance.now() }), R())
              }),
              (y[15] = C),
              (y[16] = d))
            : (d = y[16]))
        let H = d
        y[17] !== C
          ? ((p = function (e) {
              C || ((T.current = { x: e.clientX, y: e.clientY }), R())
            }),
            (y[17] = C),
            (y[18] = p))
          : (p = y[18])
        let V = p
        y[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = function () {
              ;((T.current = null), L(A.current, M.current))
            }),
            (y[19] = f))
          : (f = y[19])
        let z = f
        return (
          y[20] !== V || y[21] !== H
            ? ((h = { clearPaint: z, paintDots: V, rootRef: w, triggerRipple: H }),
              (y[20] = V),
              (y[21] = H),
              (y[22] = h))
            : (h = y[22]),
          h
        )
      })(t)
      return (
        a[3] !== g
          ? ((r = () => ({ triggerRipple: g })), (o = [g]), (a[3] = g), (a[4] = r), (a[5] = o))
          : ((r = a[4]), (o = a[5])),
        (0, s.useImperativeHandle)(d, r, o),
        a[6] !== p ? ((c = { __html: p }), (a[6] = p), (a[7] = c)) : (c = a[7]),
        a[8] !== f || a[9] !== h || a[10] !== y || a[11] !== c
          ? ((n = (0, l.jsx)("div", {
              ref: y,
              "aria-hidden": "true",
              className:
                "absolute inset-0 h-full w-full text-default [&_svg]:block [&_svg]:size-full [&_svg>path]:fill-current",
              onPointerLeave: f,
              onPointerMove: h,
              dangerouslySetInnerHTML: c,
            })),
            (a[8] = f),
            (a[9] = h),
            (a[10] = y),
            (a[11] = c),
            (a[12] = n))
          : (n = a[12]),
        n
      )
    }
    var D = r.p + "assets/codex-home-hero-dark-still.f796a6dd82.png",
      U = r.p + "assets/codex-home-hero-dark.fb0c50c87c.mp4",
      B = r.p + "assets/codex-home-hero-light-still.1af17254e3.png",
      R = r.p + "assets/codex-home-hero-light.b51a66c1b5.mp4",
      H = r("ISAq"),
      V = r("a6Zv")
    let z = { dark: { stillSrc: D, videoSrc: U }, light: { stillSrc: B, videoSrc: R } },
      O = `url(${(0, H.Y)('<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M5.80156 -4.86374e-05C6.69258 0.000117442 7.50897 0.323687 8.13906 0.857764C8.34796 0.820083 8.56404 0.799179 8.78359 0.79917C10.781 0.799774 12.4005 2.41954 12.4008 4.41714C12.4007 4.6366 12.3791 4.85173 12.3414 5.06011C12.8758 5.69048 13.1999 6.50778 13.2 7.39917C13.1997 8.96866 12.1997 10.3027 10.8039 10.8039C10.3028 12.1998 8.96867 13.1997 7.39922 13.2C6.50789 13.1999 5.69129 12.8758 5.06094 12.3414C4.8524 12.3791 4.63674 12.4007 4.41719 12.4007C2.41956 12.4005 0.80032 10.7805 0.8 8.78276C0.800026 8.56309 0.820863 8.34776 0.858594 8.13901C0.361897 7.55298 0.0471584 6.80587 0.00546875 5.98745L0 5.80073C0.000176183 4.23141 0.999616 2.89589 2.39531 2.39448C2.89683 0.998761 4.23227 -3.48408e-05 5.80156 -4.86374e-05Z" fill="white"/>\n</svg>\n')})`,
      F = {
        maskImage: O,
        maskMode: "alpha",
        maskPosition: "calc(50% + 1px) calc(50% + 1px)",
        maskRepeat: "no-repeat",
        maskSize: "90% 90%",
        WebkitMaskImage: O,
        WebkitMaskPosition: "calc(50% + 1px) calc(50% + 1px)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "90% 90%",
      }
    function Z(e) {
      let t,
        r,
        o,
        c,
        a,
        u,
        d,
        p,
        f = (0, i.c)(35),
        { ariaLabel: h, className: y, onClick: g } = e,
        x = (0, S.I)(),
        C = (0, s.useRef)(null),
        m = !0 === (0, V.Y)(),
        [b, w] = (0, s.useState)(null),
        v = m ? "dark" : "light",
        { stillSrc: M, videoSrc: A } = z[v]
      f[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            let e = C.current
            null != e && (e.pause(), (e.currentTime = 0))
          }),
          (f[0] = t))
        : (t = f[0])
      let j = t
      f[1] !== x || f[2] !== v || f[3] !== b
        ? ((r = () => {
            if (x || b === v) return
            let e = C.current
            if (null == e || !e.paused) return
            e.currentTime = 0
            let t = e.play()
            t?.catch(q)
          }),
          (f[1] = x),
          (f[2] = v),
          (f[3] = b),
          (f[4] = r))
        : (r = f[4])
      let k = r
      f[5] !== y ? ((o = (0, n.A)("size-full shrink-0 object-contain", y)), (f[5] = y), (f[6] = o)) : (o = f[6])
      let E = o
      if (x || b === v) {
        let e, t, r
        return (
          f[7] !== y ? ((e = (0, n.A)("cursor-interaction overflow-hidden", y)), (f[7] = y), (f[8] = e)) : (e = f[8]),
          f[9] !== E || f[10] !== M
            ? ((t = (0, l.jsx)("img", { alt: "", "aria-hidden": "true", className: E, src: M })),
              (f[9] = E),
              (f[10] = M),
              (f[11] = t))
            : (t = f[11]),
          f[12] !== h || f[13] !== g || f[14] !== e || f[15] !== t
            ? ((r = (0, l.jsx)("button", {
                type: "button",
                "aria-label": h,
                className: e,
                style: F,
                onClick: g,
                children: t,
              })),
              (f[12] = h),
              (f[13] = g),
              (f[14] = e),
              (f[15] = t),
              (f[16] = r))
            : (r = f[16]),
          r
        )
      }
      return (
        f[17] !== y ? ((c = (0, n.A)("cursor-interaction overflow-hidden", y)), (f[17] = y), (f[18] = c)) : (c = f[18]),
        f[19] !== k
          ? ((a = (e) => {
              "mouse" === e.pointerType && k()
            }),
            (f[19] = k),
            (f[20] = a))
          : (a = f[20]),
        f[21] !== v
          ? ((u = () => {
              w(v)
            }),
            (f[21] = v),
            (f[22] = u))
          : (u = f[22]),
        f[23] !== E || f[24] !== M || f[25] !== a || f[26] !== u || f[27] !== v || f[28] !== A
          ? ((d = (0, l.jsx)(
              "video",
              {
                ref: C,
                "aria-hidden": "true",
                className: E,
                muted: !0,
                playsInline: !0,
                poster: M,
                preload: "auto",
                src: A,
                onPointerEnter: a,
                onEnded: j,
                onError: u,
              },
              v,
            )),
            (f[23] = E),
            (f[24] = M),
            (f[25] = a),
            (f[26] = u),
            (f[27] = v),
            (f[28] = A),
            (f[29] = d))
          : (d = f[29]),
        f[30] !== h || f[31] !== g || f[32] !== c || f[33] !== d
          ? ((p = (0, l.jsx)("button", {
              type: "button",
              "aria-label": h,
              className: c,
              style: F,
              onClick: g,
              children: d,
            })),
            (f[30] = h),
            (f[31] = g),
            (f[32] = c),
            (f[33] = d),
            (f[34] = p))
          : (p = f[34]),
        p
      )
    }
    function q() {}
    let $ = new Map()
    function K(e) {
      let t,
        r,
        l,
        o = (0, i.c)(5)
      o[0] !== e ? ((t = { markup: "", src: e }), (o[0] = e), (o[1] = t)) : (t = o[1])
      let [c, n] = (0, s.useState)(t)
      return (
        o[2] !== e
          ? ((r = () => {
              let t = !0
              return (
                (function (e) {
                  let t = $.get(e)
                  if (null != t) return t
                  let r = fetch(e).then((e) => {
                    if (!e.ok) throw Error("Failed to load QR dots artwork.")
                    return e.text()
                  })
                  return ($.set(e, r), r)
                })(e)
                  .then((r) => {
                    t && n({ markup: r, src: e })
                  })
                  .catch(() => {
                    $.delete(e)
                  }),
                () => {
                  t = !1
                }
              )
            }),
            (l = [e]),
            (o[2] = e),
            (o[3] = r),
            (o[4] = l))
          : ((r = o[3]), (l = o[4])),
        (0, s.useEffect)(r, l),
        c.src === e ? c.markup : ""
      )
    }
    function J(e) {
      let t,
        r = (0, i.c)(11),
        { ariaLabel: o, centerLogoAriaLabel: c, fullscreen: n, pairingCode: a, platform: s, size: u } = e,
        d = void 0 !== n && n,
        p = void 0 === u ? "default" : u
      if (null != a) {
        let e
        return (
          r[0] !== o || r[1] !== c || r[2] !== d || r[3] !== a || r[4] !== p
            ? ((e = (0, l.jsx)(Q, { ariaLabel: o, centerLogoAriaLabel: c, fullscreen: d, pairingCode: a, size: p })),
              (r[0] = o),
              (r[1] = c),
              (r[2] = d),
              (r[3] = a),
              (r[4] = p),
              (r[5] = e))
            : (e = r[5]),
          e
        )
      }
      return (
        r[6] !== o || r[7] !== c || r[8] !== s || r[9] !== p
          ? ((t = (0, l.jsx)(W, { ariaLabel: o, centerLogoAriaLabel: c, platform: s, size: p })),
            (r[6] = o),
            (r[7] = c),
            (r[8] = s),
            (r[9] = p),
            (r[10] = t))
          : (t = r[10]),
        t
      )
    }
    function Q(e) {
      let t,
        r,
        o = (0, i.c)(11),
        { ariaLabel: c, centerLogoAriaLabel: n, fullscreen: a, pairingCode: s, size: u } = e,
        d = void 0 === u ? "default" : u
      if (o[0] !== a || o[1] !== s) {
        var p, f, h, y, g
        let e,
          r,
          l = new URL("https://chatgpt.com/codex/pair")
        ;(l.searchParams.set("pairing_code", s),
          (p = l.toString()),
          (f = a ? "L" : "M"),
          (h = !a),
          (r = 330 / ((e = (0, M.vt)(p, { errorCorrectionLevel: f }).modules).size + 8)),
          (t = {
            cornersMarkup: ((y = e.size), el([et(0, 0, (g = r)), et(y - 7, 0, g), et(0, y - 7, g)].join(""))),
            dotsMarkup: (function (e, t, r) {
              let l = []
              for (let u = 0; u < e.size; u += 1)
                for (let d = 0; d < e.size; d += 1) {
                  var i, o, c, n, a, s
                  ;((i = e),
                    (o = u),
                    (c = d),
                    1 !== i.data[o * i.size + c] ||
                      ((n = e.size), eo((a = u), (s = d), 0, 0) || eo(a, s, 0, n - 7) || eo(a, s, n - 7, 0)) ||
                      (r &&
                        (function (e, t, r, l) {
                          var i
                          let o = (e - 1) / 2,
                            c = (((i = Math.ceil(70 / t)) % 2 == 0 ? i + 1 : i) - 1) / 2
                          return Math.abs(r - o) <= c && Math.abs(l - o) <= c
                        })(e.size, t, u, d)) ||
                      l.push(
                        (function (e, t, r) {
                          let l = 0.42 * t,
                            i = ei(e, t),
                            o = ei(r, t)
                          return `<path d="M ${ec(i)} ${ec(o - l)} A ${ec(l)} ${ec(l)} 0 1 1 ${ec(i)} ${ec(o + l)} A ${ec(l)} ${ec(l)} 0 1 1 ${ec(i)} ${ec(o - l)} Z" fill="currentColor"/>`
                        })(d, t, u),
                      ))
                }
              return el(l.join(""))
            })(e, r, h),
          }),
          (o[0] = a),
          (o[1] = s),
          (o[2] = t))
      } else t = o[2]
      let x = t
      if (a) {
        let e
        return (
          o[3] !== c || o[4] !== x
            ? ((e = (0, l.jsx)(G, { ariaLabel: c, ...x })), (o[3] = c), (o[4] = x), (o[5] = e))
            : (e = o[5]),
          e
        )
      }
      return (
        o[6] !== c || o[7] !== n || o[8] !== x || o[9] !== d
          ? ((r = (0, l.jsx)(ee, { ariaLabel: c, centerLogoAriaLabel: n, size: d, ...x })),
            (o[6] = c),
            (o[7] = n),
            (o[8] = x),
            (o[9] = d),
            (o[10] = r))
          : (r = o[10]),
        r
      )
    }
    function G(e) {
      let t,
        r,
        o,
        c = (0, i.c)(8),
        { ariaLabel: n, cornersMarkup: a, dotsMarkup: s } = e
      return (
        c[0] !== a
          ? ((t = (0, l.jsx)("div", {
              "aria-hidden": "true",
              className: "absolute inset-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full",
              dangerouslySetInnerHTML: { __html: a },
            })),
            (c[0] = a),
            (c[1] = t))
          : (t = c[1]),
        c[2] !== s
          ? ((r = (0, l.jsx)("div", {
              "aria-hidden": "true",
              className: "absolute inset-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full",
              dangerouslySetInnerHTML: { __html: s },
            })),
            (c[2] = s),
            (c[3] = r))
          : (r = c[3]),
        c[4] !== n || c[5] !== t || c[6] !== r
          ? ((o = (0, l.jsxs)("div", {
              "aria-label": n,
              className:
                "relative size-[min(640px,calc(100vw-48px),calc(100dvh-96px))] overflow-hidden rounded-[48px] bg-surface-elevated-secondary text-default",
              role: "img",
              children: [t, r],
            })),
            (c[4] = n),
            (c[5] = t),
            (c[6] = r),
            (c[7] = o))
          : (o = c[7]),
        o
      )
    }
    function W(e) {
      let t,
        r = (0, i.c)(7),
        { ariaLabel: o, centerLogoAriaLabel: c, platform: n, size: a } = e,
        s = void 0 === a ? "default" : a
      if ("android" === n) {
        let e
        return (
          r[0] !== o || r[1] !== s
            ? ((e = (0, l.jsx)(Y, { ariaLabel: o, size: s })), (r[0] = o), (r[1] = s), (r[2] = e))
            : (e = r[2]),
          e
        )
      }
      return (
        r[3] !== o || r[4] !== c || r[5] !== s
          ? ((t = (0, l.jsx)(X, { ariaLabel: o, centerLogoAriaLabel: c, size: s })),
            (r[3] = o),
            (r[4] = c),
            (r[5] = s),
            (r[6] = t))
          : (t = r[6]),
        t
      )
    }
    function Y(e) {
      let t,
        r,
        o,
        c = (0, i.c)(6),
        { ariaLabel: a, size: s } = e,
        u = "compact" === s ? "size-[180px] rounded-[24px]" : "size-[270px] rounded-[32px]"
      return (
        c[0] !== u ? ((t = (0, n.A)("relative overflow-hidden bg-surface", u)), (c[0] = u), (c[1] = t)) : (t = c[1]),
        c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)("div", {
              "aria-hidden": "true",
              className: "h-full w-full text-default [&>svg]:block [&>svg]:h-full [&>svg]:w-full",
              dangerouslySetInnerHTML: {
                __html:
                  '<?xml version="1.0" encoding="utf-8"?>\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="1000" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g transform="translate(0,0) scale(1.0,1.0)"><svg width="1000" height="1000" viewBox="0 0 740 740" enable-background="new 0 0 1000 1000" xml:space="preserve"><rect x="0" y="0" width="740" height="740" fill="var(--color-surface)" opacity="1.0" /><circle cx="270.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="90.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="110.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="130.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="150.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="170.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="190.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="210.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="230.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="250.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="270.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="290.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="310.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="330.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="350.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="370.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="110.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="390.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="110.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="230.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="410.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="130.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="430.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="450.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="170.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="470.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="90.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="150.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="190.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="210.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="490.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="510.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="530.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="330.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="410.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="550.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="570.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="490.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="510.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="590.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="610.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="630.0" cy="610.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="270.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="310.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="450.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="650.0" cy="630.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="250.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="290.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="350.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="370.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="390.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="430.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="470.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="530.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="550.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="570.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><circle cx="590.0" cy="650.0" r="8.333333" fill="currentColor" opacity="1.0" /><path d="M80 80 H192.0 A28.0 28.0 0 0 1 220 108.0 V192.0 A28.0 28.0 0 0 1 192.0 220 H108.0 A28.0 28.0 0 0 1 80 192.0 V108.0 A28.0 28.0 0 0 1 108 80 Z M100.0 100.0 H180.0 A20.0 20.0 0 0 1 200.0 120.0 V180.0 A20.0 20.0 0 0 1 180.0 200.0 H120.0 A20.0 20.0 0 0 1 100.0 180.0 V120.0 A20.0 20.0 0 0 1 120.0 100.0 Z" fill-rule="evenodd" fill="currentColor" opacity="1.0" /><path d="M520 80 H632.0 A28.0 28.0 0 0 1 660 108.0 V192.0 A28.0 28.0 0 0 1 632.0 220 H548.0 A28.0 28.0 0 0 1 520 192.0 V108.0 A28.0 28.0 0 0 1 548 80 Z M540.0 100.0 H620.0 A20.0 20.0 0 0 1 640.0 120.0 V180.0 A20.0 20.0 0 0 1 620.0 200.0 H560.0 A20.0 20.0 0 0 1 540.0 180.0 V120.0 A20.0 20.0 0 0 1 560.0 100.0 Z" fill-rule="evenodd" fill="currentColor" opacity="1.0" /><rect x="120" y="120" rx="20.0" ry="20.0" width="60" height="60" fill="currentColor" opacity="1.0" /><rect x="560" y="120" rx="20.0" ry="20.0" width="60" height="60" fill="currentColor" opacity="1.0" /><path d="M80 520 H192.0 A28.0 28.0 0 0 1 220 548.0 V632.0 A28.0 28.0 0 0 1 192.0 660 H108.0 A28.0 28.0 0 0 1 80 632.0 V548.0 A28.0 28.0 0 0 1 108 520 Z M100.0 540.0 H180.0 A20.0 20.0 0 0 1 200.0 560.0 V620.0 A20.0 20.0 0 0 1 180.0 640.0 H120.0 A20.0 20.0 0 0 1 100.0 620.0 V560.0 A20.0 20.0 0 0 1 120.0 540.0 Z" fill-rule="evenodd" fill="currentColor" opacity="1.0" /><rect x="120" y="560" rx="20.0" ry="20.0" width="60" height="60" fill="currentColor" opacity="1.0" /></svg></g></svg>',
              },
            })),
            (c[2] = r))
          : (r = c[2]),
        c[3] !== a || c[4] !== t
          ? ((o = (0, l.jsx)("div", { "aria-label": a, className: t, role: "img", children: r })),
            (c[3] = a),
            (c[4] = t),
            (c[5] = o))
          : (o = c[5]),
        o
      )
    }
    function X(e) {
      let t,
        r = (0, i.c)(6),
        { ariaLabel: o, centerLogoAriaLabel: c, size: n } = e,
        a = K(A.corners),
        s = K(A.iosDots)
      return (
        r[0] !== o || r[1] !== c || r[2] !== a || r[3] !== s || r[4] !== n
          ? ((t = (0, l.jsx)(ee, { ariaLabel: o, centerLogoAriaLabel: c, cornersMarkup: a, dotsMarkup: s, size: n })),
            (r[0] = o),
            (r[1] = c),
            (r[2] = a),
            (r[3] = s),
            (r[4] = n),
            (r[5] = t))
          : (t = r[5]),
        t
      )
    }
    function ee(e) {
      let t,
        r,
        o,
        c,
        a,
        u,
        d,
        p = (0, i.c)(18),
        { ariaLabel: f, centerLogoAriaLabel: h, cornersMarkup: y, dotsMarkup: g, size: x } = e,
        C = (0, s.useRef)(null)
      p[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            C.current?.triggerRipple()
          }),
          (p[0] = t))
        : (t = p[0])
      let m = t,
        b = "compact" === x ? "size-[180px] rounded-[24px]" : "size-[270px] rounded-[32px]"
      ;(p[1] !== b ? ((r = (0, n.A)("relative overflow-hidden bg-surface", b)), (p[1] = b), (p[2] = r)) : (r = p[2]),
        p[3] !== y
          ? ((o = (0, l.jsx)("div", {
              "aria-hidden": "true",
              className:
                "pointer-events-none absolute inset-0 z-10 h-full w-full text-default [&_path]:fill-current [&_svg]:block [&_svg]:size-full",
              dangerouslySetInnerHTML: { __html: y },
            })),
            (p[3] = y),
            (p[4] = o))
          : (o = p[4]),
        p[5] !== g
          ? ((c = (0, l.jsx)(T, { ref: C, onArtworkReady: m, svgMarkup: g })), (p[5] = g), (p[6] = c))
          : (c = p[6]))
      let w = "compact" === x ? "w-10" : "w-14"
      return (
        p[7] !== w ? ((a = (0, n.A)("pointer-events-auto aspect-square", w)), (p[7] = w), (p[8] = a)) : (a = p[8]),
        p[9] !== h || p[10] !== a
          ? ((u = (0, l.jsx)("div", {
              className: "pointer-events-none absolute inset-0 z-20 grid place-items-center",
              children: (0, l.jsx)(Z, { ariaLabel: h, className: a, onClick: m }),
            })),
            (p[9] = h),
            (p[10] = a),
            (p[11] = u))
          : (u = p[11]),
        p[12] !== f || p[13] !== r || p[14] !== o || p[15] !== c || p[16] !== u
          ? ((d = (0, l.jsxs)("div", { "aria-label": f, className: r, role: "img", children: [o, c, u] })),
            (p[12] = f),
            (p[13] = r),
            (p[14] = o),
            (p[15] = c),
            (p[16] = u),
            (p[17] = d))
          : (d = p[17]),
        d
      )
    }
    function et(e, t, r) {
      let l = (e + 4) * r,
        i = (t + 4) * r,
        o = 7 * r,
        c = 2 * r
      return `<path fill-rule="evenodd" clip-rule="evenodd" d="${er(l, i, o, 1.6 * r)} ${er(l + r, i + r, o - 2 * r, r)}" fill="currentColor"/><rect x="${ec(l + c)}" y="${ec(i + c)}" width="${ec(o - 2 * c)}" height="${ec(o - 2 * c)}" rx="${ec(r)}" fill="currentColor"/>`
    }
    function er(e, t, r, l) {
      let i = e + r,
        o = t + r
      return `M ${ec(e + l)} ${ec(t)} H ${ec(i - l)} A ${ec(l)} ${ec(l)} 0 0 1 ${ec(i)} ${ec(t + l)} V ${ec(o - l)} A ${ec(l)} ${ec(l)} 0 0 1 ${ec(i - l)} ${ec(o)} H ${ec(e + l)} A ${ec(l)} ${ec(l)} 0 0 1 ${ec(e)} ${ec(o - l)} V ${ec(t + l)} A ${ec(l)} ${ec(l)} 0 0 1 ${ec(e + l)} ${ec(t)} Z`
    }
    function el(e) {
      return `<svg width="330" height="330" viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg">${e}</svg>`
    }
    function ei(e, t) {
      return (e + 4) * t + t / 2
    }
    function eo(e, t, r, l) {
      return e >= r && e < r + 7 && t >= l && t < l + 7
    }
    function ec(e) {
      return Number(e.toFixed(4))
    }
    function en(e) {
      let t,
        r,
        x,
        M,
        A,
        S,
        j,
        k,
        E,
        N,
        I,
        P,
        L,
        _,
        T,
        D,
        U,
        B,
        R = (0, i.c)(82),
        { deviceType: H, hostId: V, onDeviceTypeChange: z, showDeviceTypeSelector: O, size: F } = e,
        Z = void 0 === V ? m.fI : V,
        q = void 0 === O || O,
        $ = void 0 === F ? "default" : F,
        K = (0, u.A)(),
        Q = (0, b.Zj)(v.Qg),
        G = (0, b.Zj)(v.Km),
        [W, Y] = (0, s.useState)("ios"),
        [X, ee] = (0, s.useState)(!1),
        [et, er] = (0, s.useState)("phone"),
        el = q ? (H ?? et) : "phone",
        [ei] = (0, s.useState)(ea)
      R[0] !== Z || R[1] !== ei ? ((t = { hostId: Z, openId: ei }), (R[0] = Z), (R[1] = ei), (R[2] = t)) : (t = R[2])
      let eo = (0, a._U)(v.Zm, t),
        ec = Q && !G,
        en = ec && null == eo.error ? (eo.data ?? null) : null,
        ef = en?.manualPairingCode ?? null,
        eh = ec && null == en && (null == eo.error || eo.isFetching),
        ey = !Q || en?.pairingCode != null,
        eg = "phone" === el && !Q && !G,
        eC = q && !G,
        eb = ec && "computer" === el && !eh
      R[3] !== H || R[4] !== z
        ? ((r = (e) => {
            ;(null == H && er(e), z?.(e))
          }),
          (R[3] = H),
          (R[4] = z),
          (R[5] = r))
        : (r = R[5])
      let ew = r
      R[6] !== K
        ? ((x = K.formatMessage({
            id: "codexMobile.setupPage.waiting.pairing.refresh",
            defaultMessage: "Refresh pairing code",
          })),
          (R[6] = K),
          (R[7] = x))
        : (x = R[7])
      let ev = x
      R[8] !== K
        ? ((M = K.formatMessage({
            id: "codexMobile.setupPage.waiting.pairing.showQrCodeFullscreen",
            defaultMessage: "Show QR code fullscreen",
          })),
          (R[8] = K),
          (R[9] = M))
        : (M = R[9])
      let eM = M
      R[10] !== K
        ? ((A = K.formatMessage({
            id: "codexMobile.setupPage.waiting.phoneDeepLink.qrCode",
            defaultMessage: "QR code to continue setup in ChatGPT",
          })),
          (R[10] = K),
          (R[11] = A))
        : (A = R[11])
      let eA = A
      R[12] !== K
        ? ((S = K.formatMessage({
            id: "codexMobile.setupPage.waiting.phoneDeepLink.animateQrCode",
            defaultMessage: "Animate QR code",
          })),
          (R[12] = K),
          (R[13] = S))
        : (S = R[13])
      let eS = S
      R[14] !== K
        ? ((j = K.formatMessage({
            id: "codexMobile.setupPage.waiting.pairing.copy",
            defaultMessage: "Copy pairing code",
          })),
          (R[14] = K),
          (R[15] = j))
        : (j = R[15])
      let ej = j
      if (G) {
        let e
        ;(R[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("div", {
              className: "max-w-[280px] text-base leading-normal text-secondary",
              children: (0, l.jsx)(d.A, {
                id: "codexMobile.setupPage.waiting.upgradeMessage",
                defaultMessage: "Please upgrade to the latest version of the ChatGPT app to pair",
              }),
            })),
            (R[16] = e))
          : (e = R[16]),
          (k = e))
      } else if (eh) {
        let e, t
        ;(R[17] !== K
          ? ((e = K.formatMessage({
              id: "codexMobile.setupPage.waiting.pairing.loading",
              defaultMessage: "Loading pairing code",
            })),
            (R[17] = K),
            (R[18] = e))
          : (e = R[18]),
          R[19] !== e ? ((t = (0, l.jsx)(eu, { ariaLabel: e })), (R[19] = e), (R[20] = t)) : (t = R[20]),
          (k = t))
      } else if ("phone" === el && ey) {
        let e,
          t = en?.pairingCode
        ;(R[21] !== eS || R[22] !== eA || R[23] !== W || R[24] !== $ || R[25] !== t
          ? ((e = (0, l.jsx)(J, { ariaLabel: eA, centerLogoAriaLabel: eS, pairingCode: t, platform: W, size: $ })),
            (R[21] = eS),
            (R[22] = eA),
            (R[23] = W),
            (R[24] = $),
            (R[25] = t),
            (R[26] = e))
          : (e = R[26]),
          (k = e))
      } else if ("phone" === el) {
        let e
        ;(R[27] !== eo.error
          ? ((e = (0, l.jsx)(em, { error: eo.error })), (R[27] = eo.error), (R[28] = e))
          : (e = R[28]),
          (k = e))
      } else if (Q) {
        let e
        ;(R[29] !== ef || R[30] !== eo.error || R[31] !== $
          ? ((e = (0, l.jsx)(ed, { error: eo.error, manualPairingCode: ef, size: $ })),
            (R[29] = ef),
            (R[30] = eo.error),
            (R[31] = $),
            (R[32] = e))
          : (e = R[32]),
          (k = e))
      } else {
        let e
        ;(R[33] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(ep, {})), (R[33] = e)) : (e = R[33]),
          (k = e))
      }
      let ek = "compact" === $ && eC && "min-h-[300px]",
        eE = "compact" !== $ && "mt-3"
      ;(R[34] !== ek || R[35] !== eE
        ? ((E = (0, n.A)("flex w-full flex-col items-center gap-4", ek, eE)), (R[34] = ek), (R[35] = eE), (R[36] = E))
        : (E = R[36]),
        R[37] !== K || R[38] !== ew || R[39] !== el || R[40] !== eC
          ? ((N = eC
              ? (0, l.jsx)("div", {
                  className: "w-full rounded-full bg-text/5 p-1",
                  children: (0, l.jsx)(g.T, {
                    buttonClassName: (0, n.A)(
                      "!rounded-full !border-transparent !bg-transparent !py-1",
                      "!text-secondary",
                      "[&[aria-pressed=true]]:!bg-surface-elevated-secondary",
                      "[&[aria-pressed=true]]:!text-default",
                    ),
                    ariaLabel: K.formatMessage({
                      id: "codexMobile.setupDialog.waiting.deviceType",
                      defaultMessage: "Device type",
                    }),
                    options: [
                      {
                        id: "phone",
                        label: (0, l.jsx)(d.A, {
                          id: "codexMobile.setupDialog.waiting.deviceType.phone",
                          defaultMessage: "Phone",
                        }),
                      },
                      {
                        id: "computer",
                        label: (0, l.jsx)(d.A, {
                          id: "codexMobile.setupDialog.waiting.deviceType.computer",
                          defaultMessage: "Computer",
                        }),
                      },
                    ],
                    selectedId: el,
                    onSelect: ew,
                    fullWidth: !0,
                  }),
                })
              : null),
            (R[37] = K),
            (R[38] = ew),
            (R[39] = el),
            (R[40] = eC),
            (R[41] = N))
          : (N = R[41]))
      let eN = "compact" === $ ? "bg-transparent" : "bg-surface-secondary",
        eI = eg ? null : "justify-center",
        eP =
          "computer" === el
            ? "compact" === $
              ? "min-h-[200px] gap-3 p-4"
              : "min-h-[300px] gap-5 p-7"
            : "compact" === $
              ? "min-h-[248px] gap-3 p-4"
              : "min-h-[360px] gap-5 p-7"
      return (
        R[42] !== eN || R[43] !== eI || R[44] !== eP
          ? ((I = (0, n.A)(
              "relative flex w-full flex-col items-center rounded-[24px] border border-border/70 text-center",
              eN,
              eI,
              eP,
            )),
            (R[42] = eN),
            (R[43] = eI),
            (R[44] = eP),
            (R[45] = I))
          : (I = R[45]),
        R[46] !== k || R[47] !== eg
          ? ((P = eg ? (0, l.jsx)("div", { className: "flex flex-1 items-center justify-center", children: k }) : k),
            (R[46] = k),
            (R[47] = eg),
            (R[48] = P))
          : (P = R[48]),
        R[49] !== K || R[50] !== W || R[51] !== eg
          ? ((L = eg
              ? (0, l.jsx)(es, {
                  ariaLabel: K.formatMessage({
                    id: "codexMobile.setupPage.ready.phoneDeepLink.deviceType",
                    defaultMessage: "Phone type",
                  }),
                  platform: W,
                  onPlatformChange: Y,
                })
              : null),
            (R[49] = K),
            (R[50] = W),
            (R[51] = eg),
            (R[52] = L))
          : (L = R[52]),
        R[53] !== ey ||
        R[54] !== ej ||
        R[55] !== ef ||
        R[56] !== eo ||
        R[57] !== ev ||
        R[58] !== el ||
        R[59] !== ec ||
        R[60] !== eM
          ? ((_ = ec
              ? (0, l.jsxs)("div", {
                  className: "absolute right-3 bottom-3 flex items-center gap-1",
                  children: [
                    "computer" === el && null != ef
                      ? (0, l.jsx)(f.i, {
                          buttonText: ej,
                          iconClassName: "icon-xs",
                          iconOnly: !0,
                          onCopy: (e) => {
                            ;(0, w.lW)(ef, e)
                          },
                        })
                      : null,
                    "phone" === el && ey
                      ? (0, l.jsx)(o.m, {
                          content: eM,
                          children: (0, l.jsx)(p.$, {
                            "aria-label": eM,
                            color: "ghost",
                            onClick: () => ee(!0),
                            size: "icon",
                            children: (0, l.jsx)(y.I, { "aria-hidden": !1, asset: c.E }),
                          }),
                        })
                      : null,
                    (0, l.jsx)(o.m, {
                      content: ev,
                      children: (0, l.jsx)(p.$, {
                        "aria-label": ev,
                        color: "ghost",
                        disabled: eo.isFetching,
                        onClick: () => {
                          eo.refetch()
                        },
                        size: "icon",
                        children: (0, l.jsx)(C.A, {
                          className: (0, n.A)("icon-xs", eo.isFetching ? "animate-spin" : null),
                        }),
                      }),
                    }),
                  ],
                })
              : null),
            (R[53] = ey),
            (R[54] = ej),
            (R[55] = ef),
            (R[56] = eo),
            (R[57] = ev),
            (R[58] = el),
            (R[59] = ec),
            (R[60] = eM),
            (R[61] = _))
          : (_ = R[61]),
        R[62] !== I || R[63] !== P || R[64] !== L || R[65] !== _
          ? ((T = (0, l.jsxs)("div", { className: I, children: [P, L, _] })),
            (R[62] = I),
            (R[63] = P),
            (R[64] = L),
            (R[65] = _),
            (R[66] = T))
          : (T = R[66]),
        R[67] !== eb ? ((D = eb ? (0, l.jsx)(ex, {}) : null), (R[67] = eb), (R[68] = D)) : (D = R[68]),
        R[69] !== eS || R[70] !== K || R[71] !== X || R[72] !== en || R[73] !== eA || R[74] !== W
          ? ((U =
              en?.pairingCode != null
                ? (0, l.jsxs)(h.lG, {
                    open: X,
                    onOpenChange: ee,
                    contentClassName:
                      "fixed inset-0 !left-0 !top-0 grid h-[100dvh] w-screen max-w-none !translate-x-0 !translate-y-0 place-items-center overflow-visible rounded-none bg-transparent p-0 shadow-none ring-0 backdrop-blur-none",
                    contentProps: {
                      "aria-describedby": void 0,
                      onClick: (e) => {
                        e.target === e.currentTarget && ee(!1)
                      },
                    },
                    dialogCloseClassName: "!top-4 !right-4 bg-black/20 text-white hover:bg-white/10",
                    dialogCloseLabel: K.formatMessage({
                      id: "codexMobile.setupPage.waiting.pairing.closeFullscreenQrCode",
                      defaultMessage: "Close fullscreen QR code",
                    }),
                    overlayClassName: "!bg-black/75 backdrop-blur-sm",
                    unstyledContent: !0,
                    viewportSized: !0,
                    children: [
                      (0, l.jsx)(h.L3, {
                        className: "sr-only",
                        children: (0, l.jsx)(d.A, {
                          id: "codexMobile.setupPage.waiting.pairing.fullscreenQrCodeTitle",
                          defaultMessage: "Pairing QR code",
                        }),
                      }),
                      (0, l.jsx)(J, {
                        ariaLabel: eA,
                        centerLogoAriaLabel: eS,
                        fullscreen: !0,
                        pairingCode: en.pairingCode,
                        platform: W,
                      }),
                    ],
                  })
                : null),
            (R[69] = eS),
            (R[70] = K),
            (R[71] = X),
            (R[72] = en),
            (R[73] = eA),
            (R[74] = W),
            (R[75] = U))
          : (U = R[75]),
        R[76] !== E || R[77] !== N || R[78] !== T || R[79] !== D || R[80] !== U
          ? ((B = (0, l.jsxs)("div", { className: E, children: [N, T, D, U] })),
            (R[76] = E),
            (R[77] = N),
            (R[78] = T),
            (R[79] = D),
            (R[80] = U),
            (R[81] = B))
          : (B = R[81]),
        B
      )
    }
    function ea() {
      return crypto.randomUUID()
    }
    function es(e) {
      let t,
        r,
        o,
        c,
        a,
        s,
        u,
        p,
        f,
        h = (0, i.c)(22),
        { ariaLabel: y, onPlatformChange: g, platform: x } = e,
        C = "ios" === x,
        m = "ios" === x ? "text-default" : "text-tertiary"
      ;(h[0] !== m
        ? ((t = (0, n.A)(
            "cursor-interaction rounded px-1 outline-none focus-visible:ring-2 focus-visible:ring-ring",
            m,
          )),
          (h[0] = m),
          (h[1] = t))
        : (t = h[1]),
        h[2] !== g ? ((r = () => g("ios")), (h[2] = g), (h[3] = r)) : (r = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)(d.A, {
              id: "codexMobile.setupPage.waiting.phoneDeepLink.deviceType.ios",
              defaultMessage: "iPhone",
            })),
            (h[4] = o))
          : (o = h[4]),
        h[5] !== C || h[6] !== t || h[7] !== r
          ? ((c = (0, l.jsx)("button", { "aria-pressed": C, className: t, onClick: r, type: "button", children: o })),
            (h[5] = C),
            (h[6] = t),
            (h[7] = r),
            (h[8] = c))
          : (c = h[8]))
      let b = "android" === x,
        w = "android" === x ? "text-default" : "text-tertiary"
      return (
        h[9] !== w
          ? ((a = (0, n.A)(
              "cursor-interaction rounded px-1 outline-none focus-visible:ring-2 focus-visible:ring-ring",
              w,
            )),
            (h[9] = w),
            (h[10] = a))
          : (a = h[10]),
        h[11] !== g ? ((s = () => g("android")), (h[11] = g), (h[12] = s)) : (s = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, l.jsx)(d.A, {
              id: "codexMobile.setupPage.waiting.phoneDeepLink.deviceType.android",
              defaultMessage: "Android",
            })),
            (h[13] = u))
          : (u = h[13]),
        h[14] !== s || h[15] !== b || h[16] !== a
          ? ((p = (0, l.jsx)("button", { "aria-pressed": b, className: a, onClick: s, type: "button", children: u })),
            (h[14] = s),
            (h[15] = b),
            (h[16] = a),
            (h[17] = p))
          : (p = h[17]),
        h[18] !== y || h[19] !== p || h[20] !== c
          ? ((f = (0, l.jsxs)("div", {
              "aria-label": y,
              className: "flex items-center justify-center gap-2 text-base font-medium",
              role: "group",
              children: [c, p],
            })),
            (h[18] = y),
            (h[19] = p),
            (h[20] = c),
            (h[21] = f))
          : (f = h[21]),
        f
      )
    }
    function eu(e) {
      let t,
        r,
        o = (0, i.c)(3),
        { ariaLabel: c } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(x.y, { className: "size-7 text-secondary" })), (o[0] = t))
          : (t = o[0]),
        o[1] !== c
          ? ((r = (0, l.jsx)("div", {
              "aria-label": c,
              className: "grid place-items-center",
              role: "status",
              children: t,
            })),
            (o[1] = c),
            (o[2] = r))
          : (r = o[2]),
        r
      )
    }
    function ed(e) {
      let t,
        r = (0, i.c)(4),
        { error: o, manualPairingCode: c, size: a } = e
      return (
        r[0] !== o || r[1] !== c || r[2] !== a
          ? ((t = (0, l.jsx)(l.Fragment, {
              children:
                null == c
                  ? (0, l.jsx)(em, { error: o })
                  : (0, l.jsx)("div", {
                      className: (0, n.A)(
                        "cursor-text font-semibold tracking-[0.18em] text-default lining-nums tabular-nums select-text [font-feature-settings:'cv08'_on]",
                        "compact" === a ? "text-2xl" : "text-3xl",
                      ),
                      dir: "ltr",
                      children: c,
                    }),
            })),
            (r[0] = o),
            (r[1] = c),
            (r[2] = a),
            (r[3] = t))
          : (t = r[3]),
        t
      )
    }
    function ep() {
      let e,
        t,
        r,
        o = (0, i.c)(3)
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(eg, {
              index: 1,
              children: (0, l.jsx)(d.A, {
                id: "codexMobile.setupDialog.waiting.computer.step.openDesktopApp",
                defaultMessage: "Open the <strong>ChatGPT desktop app</strong> on the computer you want to authorize",
                values: { strong: ey },
              }),
            })),
            (o[0] = e))
          : (e = o[0]),
        o[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(eg, {
              index: 2,
              children: (0, l.jsx)(d.A, {
                id: "codexMobile.setupDialog.waiting.computer.step.settingsConnections",
                defaultMessage: "Go to <strong>Connections</strong> tab in settings",
                values: { strong: eh },
              }),
            })),
            (o[1] = t))
          : (t = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsxs)("div", {
              className: "flex w-full flex-col gap-3",
              children: [
                e,
                t,
                (0, l.jsx)(eg, {
                  index: 3,
                  children: (0, l.jsx)(d.A, {
                    id: "codexMobile.setupDialog.waiting.computer.step.allow",
                    defaultMessage: "Click <strong>Set up</strong> in the <strong>Control other devices</strong> tab",
                    values: { strong: ef },
                  }),
                }),
              ],
            })),
            (o[2] = r))
          : (r = o[2]),
        r
      )
    }
    function ef(e) {
      return (0, l.jsx)("span", { className: "font-semibold text-default", children: e })
    }
    function eh(e) {
      return (0, l.jsx)("span", { className: "font-semibold text-default", children: e })
    }
    function ey(e) {
      return (0, l.jsx)("span", { className: "font-semibold text-default", children: e })
    }
    function eg(e) {
      let t,
        r,
        o,
        c = (0, i.c)(7),
        { children: n, index: a } = e
      return (
        c[0] !== a
          ? ((t = (0, l.jsx)("span", {
              className:
                "inline-flex size-6 shrink-0 translate-y-[1px] items-center justify-center rounded-full bg-text/70 text-base leading-normal tracking-normal text-inverse",
              children: a,
            })),
            (c[0] = a),
            (c[1] = t))
          : (t = c[1]),
        c[2] !== n
          ? ((r = (0, l.jsx)("div", {
              className: "text-start text-base leading-normal tracking-normal text-secondary",
              children: n,
            })),
            (c[2] = n),
            (c[3] = r))
          : (r = c[3]),
        c[4] !== t || c[5] !== r
          ? ((o = (0, l.jsxs)("div", { className: "flex items-baseline gap-4 px-[10px] py-2", children: [t, r] })),
            (c[4] = t),
            (c[5] = r),
            (c[6] = o))
          : (o = c[6]),
        o
      )
    }
    function ex() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("div", {
              className: "w-full px-2 text-center text-sm leading-normal text-secondary",
              children: (0, l.jsx)(d.A, {
                id: "codexMobile.setupPage.waiting.computerPairingCode.caption",
                defaultMessage:
                  "Click <strong>Add</strong> in the <strong>Settings > Connections > Control other devices</strong> tab on your other computer and enter this code",
                values: { strong: eC },
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function eC(e) {
      return (0, l.jsx)("strong", { className: "font-semibold text-default", children: e })
    }
    function em(e) {
      let t,
        r = (0, i.c)(2),
        { error: o } = e
      return (
        r[0] !== o
          ? ((t = (0, l.jsx)("div", {
              className: "text-sm leading-normal text-secondary",
              role: "alert",
              children:
                null == o
                  ? (0, l.jsx)(d.A, {
                      id: "codexMobile.setupPage.waiting.pairing.unavailable",
                      defaultMessage: "Pairing code unavailable",
                    })
                  : (0, l.jsx)(d.A, {
                      id: "codexMobile.setupPage.waiting.pairing.unavailableWithError",
                      defaultMessage: "Pairing code unavailable: {error}",
                      values: { error: o.message },
                    }),
            })),
            (r[0] = o),
            (r[1] = t))
          : (t = r[1]),
        t
      )
    }
  },
  NYUO(e, t, r) {
    var l = r("qmMi"),
      i = r("B81s"),
      o = r("xS4d"),
      c = r("uodG"),
      n = r("OWtl"),
      a = r("OMIV"),
      s = r("jBHQ")
    let u = (0, l.i1)(n.u, ({ hostId: e, consumer: t }, { get: r }) => {
        let l = "panel" === t ? a.JW : s.P
        if (
          !r(l, "2296472986") ||
          !(0, c.Zi)({ remoteControlConnectionsState: r(o.h9), slingshotEnabled: r(l, "1042620455") })
        )
          return !1
        let n = "search" === t ? r(i.b9, { hostId: e }, { enabled: !1 }) : r(i.b9, { hostId: e })
        return ("panel" === t || n.isSuccess) && n.data?.requirements?.computerUse?.allowLockedComputerUse !== !1
      }),
      d = (0, l.i1)(n.u, (e, { get: t }) => t(u, { hostId: e, consumer: "panel" })),
      p = (0, l.i1)(n.u, (e, { get: t }) => t(u, { hostId: e, consumer: "search" }))
    r.d(t, {}, { I: d, i: p })
  },
  fJ4f(e, t, r) {
    var l = r("qmMi"),
      i = r("ihPm"),
      o = r("xS4d"),
      c = r("OWtl"),
      n = r("OMIV"),
      a = r("IUCH"),
      s = r("M03z")
    let u = (0, l.RD)(c.u, ({ get: e, scope: t }) => {
        let r = e(o.BJ) ?? null,
          l = !e(n.JW, "2055603567")
        return {
          queryKey: ["remote-control-clients", r, l],
          queryFn: () => (0, a.ic)(t, r, { includeBrowserClients: l }),
          staleTime: 3e4,
        }
      }),
      d = (0, l.vU)(c.u, (e, { get: t, scope: r }) => {
        let l = t(i.AP, e),
          o = l?.environmentId
        return {
          enabled: null != o,
          queryKey: ["remote-control-clients", "app-server", e, l?.installationId],
          queryFn: () => (null == o ? Promise.resolve([]) : (0, a.ic)(r, o, { appServerHostId: e })),
          staleTime: 3e4,
        }
      }),
      p = (0, l.vU)(c.u, (e, { get: t, scope: r }) => {
        let l = t(o.BJ) ?? null,
          i = !t(n.JW, "2055603567")
        return {
          enabled: e,
          queryKey: ["remote-control-clients", l, i],
          queryFn: () => (0, a.ic)(r, l, { includeBrowserClients: i }),
          refetchInterval: !!e && 1e3,
          staleTime: 0,
        }
      }),
      f = (0, l.vU)(
        c.u,
        (
          { existingClientIds: e, hostId: t, localRemoteControlClientId: r, waiting: l },
          { get: c, queryClient: u, scope: d },
        ) => {
          let p = null,
            f = null,
            h = !c(n.JW, "2055603567")
          if (l && null == t) p = c(o.BJ) ?? null
          else if (l) {
            let e = c(i.AP, t)
            ;((p = e?.environmentId), (f = e?.installationId))
          }
          let y = [
            "remote-control-clients",
            "waiting-for-added",
            t,
            h,
            null == t ? p : f,
            null == e ? null : Array.from(e).sort(),
            r,
          ]
          return {
            enabled: l && null != e && (null == t || null != p),
            gcTime: 0,
            queryKey: y,
            queryFn: async () => {
              let l = u.getQueryData(y)
              if (null != l || null == e) return l ?? null
              let i = await (0, a.ic)(d, p ?? null, { appServerHostId: t ?? void 0, includeBrowserClients: h })
              return (
                null != t && u.setQueryData(["remote-control-clients", "app-server", t, f], i),
                (0, s.PA)((0, s.uz)(i, r), e)
              )
            },
            refetchInterval: (e) => !!l && null == e.state.data && 1e3,
            staleTime: 0,
          }
        },
        {
          key: function ({ existingClientIds: e, hostId: t, localRemoteControlClientId: r, waiting: l }) {
            return JSON.stringify({
              existingClientIds: null == e ? null : Array.from(e).sort(),
              hostId: t,
              localRemoteControlClientId: r,
              waiting: l,
            })
          },
        },
      )
    r.d(t, {}, { BW: f, MN: d, y8: u, zj: p })
  },
  M03z(e, t, r) {
    function l(e, t) {
      return e?.some((e) => !t.has(e.clientId)) === !0
    }
    r.d(
      t,
      {},
      {
        PA: function (e, t) {
          return null != e && l(e, t) ? (0 === t.size && 1 === e.length ? "connected" : "dismiss") : null
        },
        rr: l,
        uz: function (e, t) {
          if (null != e) return null == t ? e : e.filter((e) => e.clientId !== t)
        },
      },
    )
  },
  uodG(e, t, r) {
    var l = r("QosV"),
      i = r("qmMi"),
      o = r("xS4d"),
      c = r("PIwo")
    function n({ remoteControlConnectionsState: e, slingshotEnabled: t }) {
      return t && (e?.available ?? !0) && e?.accessRequired !== !0
    }
    r.d(
      t,
      {},
      {
        HZ: function ({
          selectedConnectionsTab: e,
          showControlOtherDevices: t,
          showControlThisMacTab: r,
          showRemoteControlConnectionsSection: l,
          showRemoteSshConnections: i,
          showTabbedSshPage: o,
          isWslConnectionsLoading: c,
          showWslConnections: n,
        }) {
          return "wsl" === e && c
            ? "wsl"
            : l
              ? "control-this-mac" !== e || r
                ? "access-other-devices" !== e || t
                  ? "ssh" !== e || o
                    ? "wsl" !== e || n
                      ? e
                      : "ssh"
                    : t
                      ? "access-other-devices"
                      : "control-this-mac"
                  : r
                    ? "control-this-mac"
                    : "ssh"
                : t
                  ? "access-other-devices"
                  : "ssh"
              : "wsl" === e && n
                ? "wsl"
                : i
                  ? "ssh"
                  : "access-other-devices"
        },
        Zi: n,
        wi: function () {
          let e,
            t = (0, l.c)(3),
            r = (0, i.Ul)(o.h9),
            a = (0, c.mC)()
          return (
            t[0] !== r || t[1] !== a
              ? ((e = n({ remoteControlConnectionsState: r, slingshotEnabled: a })), (t[0] = r), (t[1] = a), (t[2] = e))
              : (e = t[2]),
            e
          )
        },
      },
    )
  },
  UIre(e, t, r) {
    var l = r("WbV5"),
      i = r("ihPm"),
      o = r("GaA7"),
      c = r("kfGJ"),
      n = r("yFN5")
    async function a(e, t, r) {
      let i = o.appServices.remoteControlEnvironments
      return null != i && t === c.fI
        ? (await i.setLocalEnabled({ enabled: r }), (0, n.V)(e, r, { force: !0 }))
        : (0, l.p)(e, t, r)
    }
    r.d(
      t,
      {},
      {
        A: async function (e, t, r) {
          if (!r) return a(e, t, !1)
          ;(0, i.UV)(e, t, !1)
          let l = (0, i.Hf)(e, t, { ignoreCurrentError: !0 })
          try {
            let r = a(e, t, !0)
            return await Promise.race([l, r.then(() => l)])
          } catch (r) {
            throw ((0, i.UV)(e, t, !0), r)
          }
        },
      },
    )
  },
  dWmd(e, t, r) {
    var l = r("qmMi"),
      i = r("GaA7"),
      o = r("q77y"),
      c = r("OWtl"),
      n = r("rvFo")
    let a = Promise.resolve(),
      s = (0, l.RD)(c.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(i.appServices.computerUseSettings.getAppApprovals(), e),
        queryKey: ["computer-use-app-approvals"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: n.D.ONE_MINUTE,
      })),
      u = (0, l.RD)(c.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(i.appServices.computerUseSettings.getMessagesReadDecisions(), e),
        queryKey: ["messages-read-decisions"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: n.D.ONE_MINUTE,
      })),
      d = (0, l.RD)(c.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(i.appServices.computerUseSettings.getMessagesSendApprovals(), e),
        queryKey: ["messages-send-approvals"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: n.D.ONE_MINUTE,
      })),
      p = (0, l.RD)(c.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(i.appServices.computerUseSettings.getSoundMode(), e),
        queryKey: ["computer-use-sound-mode"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: n.D.FIVE_SECONDS,
      })),
      f = (0, l.RD)(c.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(i.appServices.computerUseSettings.getLockedUseState(), e),
        queryKey: ["locked-computer-use"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: n.D.FIVE_SECONDS,
      }))
    r.d(
      t,
      {},
      {
        Ks: u,
        Nu: async function (e, t, r) {
          return (0, o.P)(i.appServices.computerUseSettings.setMessagesReadDecision(e, t, r))
        },
        OJ: s,
        SW: async function (e) {
          return (0, o.P)(i.appServices.computerUseSettings.removeMessagesSendApproval(e))
        },
        WP: f,
        XF: p,
        Xo: async function (e) {
          return (0, o.P)(i.appServices.computerUseSettings.setMessagesReadAccessPolicy(e))
        },
        Y3: async function (e) {
          return (0, o.P)(i.appServices.computerUseSettings.setMessagesSendAllowAllChats(e))
        },
        Zw: async function (e) {
          return (0, o.P)(i.appServices.computerUseSettings.removeAppApproval(e))
        },
        _o: async function (e) {
          return (0, o.P)(i.appServices.computerUseSettings.setLockedUseEnabled(e))
        },
        rX: d,
        xx: async function (e) {
          return (0, o.P)(i.appServices.computerUseSettings.removeMessagesReadDecision(e))
        },
        yk: async function (e, t) {
          let r = a.then(() => (t.throwIfAborted(), (0, o.P)(i.appServices.computerUseSettings.searchMessagesChats(e))))
          a = r.then(
            () => void 0,
            () => void 0,
          )
          let l = await r
          return (t.throwIfAborted(), l)
        },
        zz: async function (e) {
          return (0, o.P)(i.appServices.computerUseSettings.setSoundMode(e))
        },
      },
    )
  },
  CNwe(e, t, r) {
    let l = (0, r("ESTr").a)({
      name: "cursor-interactive-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.545776, y: 1.544922, width: 17.374756, height: 17.406738 },
        visualBounds: { x: 1.545776, y: 1.544922, width: 17.374756, height: 17.406738 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.545776, y: 1.544922, width: 17.374756, height: 17.406738 },
        center: { x: 10.233154, y: 10.248291 },
        insets: { top: 1.544922, right: 1.079468, bottom: 1.04834, left: 1.545776 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.233154, y: 10.248291 },
          foreground: { x: 10.233154, y: 10.248291 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M9.82435 11.6419C9.45501 10.5079 10.5437 9.44101 11.67 9.83334L17.9533 12.0218C19.1841 12.4509 19.2589 14.1633 18.0704 14.6986L15.7853 15.7269C15.762 15.7374 15.7422 15.7559 15.7306 15.7787L14.5431 18.1546C13.9664 19.308 12.2815 19.1824 11.882 17.9564L9.82435 11.6419ZM11.2325 11.0892C11.1451 11.0587 11.0605 11.1417 11.089 11.2298L13.1466 17.5443C13.1573 17.5771 13.1716 17.5916 13.1827 17.5999C13.1969 17.6104 13.2187 17.6195 13.2452 17.6214C13.2715 17.6232 13.2943 17.6179 13.3097 17.6097C13.3219 17.6031 13.3384 17.5904 13.3536 17.5599L14.5411 15.1839C14.6897 14.8872 14.9367 14.6502 15.2394 14.514L17.5245 13.4857C17.5561 13.4714 17.5694 13.4555 17.5763 13.4437C17.585 13.4284 17.5921 13.4051 17.5909 13.3783C17.5897 13.3514 17.5805 13.3291 17.5704 13.3148C17.5625 13.3036 17.5484 13.2891 17.5158 13.2777L11.2325 11.0892Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M5.44935 12.5208C5.70902 12.2612 6.13007 12.2612 6.38978 12.5208C6.64948 12.7805 6.64947 13.2016 6.38978 13.4613L4.6222 15.2288C4.36249 15.4884 3.94142 15.4885 3.68177 15.2288C3.42221 14.9692 3.42225 14.5481 3.68177 14.2884L5.44935 12.5208Z" fill="currentColor"/> <path d="M2.38294 6.8724L4.79798 7.51986C5.15273 7.61492 5.36374 7.97956 5.26868 8.33431C5.17362 8.68891 4.80886 8.89888 4.45423 8.80404L2.03919 8.15756C1.68454 8.06253 1.47364 7.69776 1.56849 7.3431C1.66351 6.98846 2.02829 6.77756 2.38294 6.8724Z" fill="currentColor"/> <path d="M14.2882 3.68197C14.5479 3.42228 14.9689 3.4223 15.2286 3.68197C15.4883 3.94167 15.4883 4.3627 15.2286 4.6224L13.4611 6.38998C13.2014 6.64958 12.7803 6.64965 12.5206 6.38998C12.261 6.13031 12.261 5.70925 12.5206 5.44955L14.2882 3.68197Z" fill="currentColor"/> <path d="M7.34192 1.56771C7.69668 1.47266 8.06132 1.68366 8.15638 2.03842L8.80384 4.45345C8.89861 4.80797 8.68853 5.17274 8.33411 5.26791C7.97936 5.36296 7.61374 5.15196 7.51868 4.7972L6.8722 2.38217C6.77734 2.0276 6.98745 1.66288 7.34192 1.56771Z" fill="currentColor"/>',
    })
    r.d(t, {}, { h: l })
  },
  Ys95(e, t, r) {
    let l = (0, r("ESTr").a)({
      name: "sun-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.005859, y: 1.001953, width: 17.99707, height: 17.996094 },
        visualBounds: { x: 1.005859, y: 1.001953, width: 17.99707, height: 17.996094 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.005859, y: 1.001953, width: 17.99707, height: 17.996094 },
        center: { x: 10.004394, y: 10 },
        insets: { top: 1.001953, right: 0.997071, bottom: 1.001953, left: 1.005859 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10.004394, y: 10 }, foreground: { x: 10.004394, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10 16.418C10.3673 16.418 10.665 16.7157 10.665 17.083V18.333C10.665 18.7003 10.3673 18.998 10 18.998C9.63284 18.9979 9.33496 18.7002 9.33496 18.333V17.083C9.33496 16.7158 9.63284 16.4181 10 16.418Z" fill="currentColor"/> <path d="M14.668 14.6592C14.9277 14.3995 15.3487 14.3995 15.6084 14.6592L16.3701 15.4199C16.6298 15.6796 16.6297 16.1016 16.3701 16.3613C16.1105 16.6208 15.6894 16.6206 15.4297 16.3613L14.668 15.5996C14.4083 15.3399 14.4084 14.9189 14.668 14.6592Z" fill="currentColor"/> <path d="M4.40039 14.6562C4.66009 14.3966 5.08112 14.3966 5.34082 14.6562C5.60031 14.916 5.60045 15.337 5.34082 15.5967L4.5791 16.3584C4.31945 16.6178 3.8983 16.6178 3.63867 16.3584C3.37897 16.0987 3.37897 15.6767 3.63867 15.417L4.40039 14.6562Z" fill="currentColor"/> <path d="M10.001 5.16797C12.6692 5.16828 14.832 7.33173 14.832 10C14.8319 12.6681 12.6691 14.8307 10.001 14.8311C7.33263 14.8311 5.16912 12.6683 5.16895 10C5.16895 7.33154 7.33252 5.16797 10.001 5.16797ZM10.001 6.49805C8.06706 6.49805 6.49902 8.06608 6.49902 10C6.4992 11.9338 8.06717 13.501 10.001 13.501C11.9345 13.5007 13.5018 11.9336 13.502 10C13.502 8.06627 11.9346 6.49835 10.001 6.49805Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M2.9209 9.33203C3.28812 9.33206 3.58588 9.62987 3.58594 9.99707C3.58591 10.3643 3.28814 10.6621 2.9209 10.6621H1.6709C1.30365 10.6621 1.00586 10.3643 1.00586 9.99707C1.00589 9.62982 1.30365 9.33203 1.6709 9.33203H2.9209Z" fill="currentColor"/> <path d="M18.3379 9.33203C18.705 9.33219 19.0029 9.62995 19.0029 9.99707C19.0029 10.3642 18.705 10.662 18.3379 10.6621H17.0879C16.7206 10.6621 16.4229 10.3643 16.4229 9.99707C16.4229 9.62982 16.7206 9.33203 17.0879 9.33203H18.3379Z" fill="currentColor"/> <path d="M3.64453 3.63574C3.90425 3.37607 4.32529 3.37602 4.58496 3.63574L5.34668 4.39648C5.60632 4.65617 5.60629 5.07821 5.34668 5.33789C5.087 5.59717 4.66583 5.5973 4.40625 5.33789L3.64453 4.57617C3.38498 4.31657 3.38518 3.89545 3.64453 3.63574Z" fill="currentColor"/> <path d="M15.4238 3.63477C15.6835 3.37507 16.1046 3.37507 16.3643 3.63477C16.6238 3.89448 16.6239 4.31557 16.3643 4.5752L15.6025 5.33691C15.3429 5.59628 14.9217 5.59632 14.6621 5.33691C14.4024 5.07722 14.4024 4.65521 14.6621 4.39551L15.4238 3.63477Z" fill="currentColor"/> <path d="M10 1.00195C10.3673 1.00195 10.665 1.29972 10.665 1.66699V2.91699C10.665 3.28426 10.3673 3.58203 10 3.58203C9.63284 3.5819 9.33496 3.28418 9.33496 2.91699V1.66699C9.33496 1.2998 9.63284 1.00209 10 1.00195Z" fill="currentColor"/>',
    })
    r.d(t, {}, { j: l })
  },
}
//# sourceMappingURL=996150.e9fe4b3b4b.js.map
