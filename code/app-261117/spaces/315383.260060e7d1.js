export const __rspack_esm_ids = [315383]
export const __webpack_modules__ = {
  O3m2(e, t, a) {
    class r {
      #e
      #t
      #a = 0
      #r = 0
      #n = !1
      #s
      constructor(e) {
        this.#e = e
      }
      addChangeHandler(e) {
        return this.#o(e, "notification")
      }
      addFieldChangeHandler(e) {
        return this.#o(e, "fields")
      }
      #o(e, t) {
        this.#t || (this.#t = new Map())
        let a = this.#t
        return (
          a.set(e, t),
          () => {
            a.delete(e)
          }
        )
      }
      notify = () => {
        this.#r > 0 || ((this.#s = void 0), (this.#n = !0), this.#i())
      }
      notifyFields(e) {
        if (!(this.#r > 0)) {
          if (this.#n) {
            if (this.#s) for (let t of e) this.#s.add(t)
          } else this.#s = new Set(e)
          ;((this.#n = !0), this.#i())
        }
      }
      run(e) {
        this.#a += 1
        try {
          return e()
        } finally {
          ;((this.#a -= 1), this.#i())
        }
      }
      project(e) {
        this.#r += 1
        try {
          return e()
        } finally {
          ;((this.#r -= 1), this.#i())
        }
      }
      #i() {
        if (!this.#n || this.#a > 0 || this.#r > 0) return
        let e = void 0 === this.#s ? void 0 : [...this.#s]
        if (((this.#n = !1), (this.#s = void 0), this.#e?.(), this.#t))
          for (let [t, a] of this.#t) "fields" === a ? t(e) : t()
      }
    }
    let n = new WeakMap(),
      s = new WeakMap(),
      o = new Set(["copyWithin", "fill", "pop", "push", "reverse", "shift", "sort", "splice", "unshift"])
    function i(e) {
      if (null === e || "object" != typeof e) return !1
      let t = Object.getPrototypeOf(e)
      return Array.isArray(e) || t === Object.prototype || null === t
    }
    function l(e) {
      return null === e || "object" != typeof e ? e : (n.get(e) ?? e)
    }
    function d(e, t, a) {
      let r = l(e)
      if (!i(r) || a?.has(r)) return r
      let n = t.get(r)
      if (n) return n
      let s = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r))
      for (let e of (t.set(r, s), Object.keys(r)))
        Object.defineProperty(s, e, {
          value: d(Reflect.get(r, e), t, a),
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      return (Array.isArray(r) && Array.isArray(s) && (s.length = r.length), s)
    }
    a.d(
      t,
      {},
      {
        H_: function e(t, a) {
          let c = l(t)
          if (!i(c)) return c
          let p = s.get(a)
          p || ((p = { scope: new r(a), values: new WeakMap() }), s.set(a, p))
          let u = p.values.get(c)
          if (u) return u
          let m = p.scope,
            h = p.values,
            f = new Map(),
            g = new Proxy(c, {
              get(t, r, n) {
                let s = Reflect.get(t, r, n)
                if (Array.isArray(t) && o.has(r) && "function" == typeof s) {
                  let e = f.get(r)
                  return (e || ((e = (...e) => m.run(() => Reflect.apply(s, n, e))), f.set(r, e)), e)
                }
                let l = Reflect.getOwnPropertyDescriptor(t, r)
                return l?.configurable === !1 && !1 === l.writable ? s : i(s) ? e(s, a) : s
              },
              set(e, t, a) {
                let r = Reflect.get(e, t),
                  n = !Reflect.has(e, t) || !Object.is(r, l(a))
                if (!n) return !0
                let s = Reflect.set(e, t, d(a, new WeakMap(), h))
                return (s && n && m.notify(), s)
              },
              deleteProperty(e, t) {
                let a = Reflect.has(e, t),
                  r = Reflect.deleteProperty(e, t)
                return (r && a && m.notify(), r)
              },
              defineProperty(e, t, a) {
                let r = Reflect.getOwnPropertyDescriptor(e, t),
                  n = { ...a }
                "value" in n && (n.value = d(n.value, new WeakMap(), h))
                let s = Reflect.defineProperty(e, t, n)
                return (
                  s &&
                    (!r || Object.keys(n).some((e) => !Object.is(Reflect.get(r, e), Reflect.get(n, e)))) &&
                    m.notify(),
                  s
                )
              },
            })
          return (p.values.set(c, g), n.set(g, c), g)
        },
        Mb: function (e) {
          return structuredClone(d(e, new WeakMap()))
        },
        Vi: r,
      },
    )
  },
  oZzx(e, t, a) {
    var r = a("O3m2"),
      n = a("tgex"),
      s = a("mDDc"),
      o = a("YNBA")
    let i = new Set([
        "accent1",
        "accent2",
        "accent3",
        "accent4",
        "accent5",
        "accent6",
        "bg1",
        "bg2",
        "tx1",
        "tx2",
        "dk1",
        "lt1",
        "dk2",
        "lt2",
        "hlink",
        "folHlink",
      ]),
      l = {
        background1: "bg1",
        background2: "bg2",
        text1: "tx1",
        text2: "tx2",
        dark1: "dk1",
        dark2: "dk2",
        light1: "lt1",
        light2: "lt2",
      },
      d = {
        [n.mE.COLOR_TYPE_UNSPECIFIED]: "unspecified",
        [n.mE.COLOR_TYPE_RGB]: "rgb",
        [n.mE.COLOR_TYPE_SCHEME]: "theme",
        [n.mE.COLOR_TYPE_SYSTEM]: "system",
        [n.mE.UNRECOGNIZED]: "unspecified",
      },
      c = /^[0-9a-f]+$/i,
      p = /^rgba?\(\s*(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})(?:\s*(?:\/|,)\s*([\d.]+%?))?\s*\)$/i,
      u = "#000000"
    function m(e) {}
    function h(e) {
      return Number.isNaN(e) ? 0 : Math.min(Math.max(Math.round(e), 0), 255)
    }
    function f(e) {
      return h(e).toString(16).padStart(2, "0")
    }
    function g(e) {
      return Number.isNaN(e) ? 0 : Math.min(Math.max(e, 0), 1)
    }
    function w(e) {
      return Number.isNaN(e) ? 0 : e > 1 ? g(e / 100) : g(e)
    }
    function v(e) {
      if (!e || !Object.values(e).some((e) => void 0 !== e)) return
      let { opacity: t, lighten: a, darken: r } = e,
        n = "number" == typeof r && 0 !== r
      if ("number" == typeof a && 0 !== a && n)
        throw Error("Color transform cannot set both lighten and darken; pick one.")
      let s = {}
      if (("number" == typeof t && (s.alpha = Math.round(1e5 * w(t))), "number" == typeof a && 0 !== a)) {
        let e = w(a)
        ;((s.lumMod = Math.round((1 - e) * 1e5)), (s.lumOff = Math.round(1e5 * e)))
      }
      "number" == typeof r && 0 !== r && (s.lumMod = Math.round((1 - w(r)) * 1e5))
      let o = void 0 !== s.alpha,
        i = void 0 !== s.tint,
        l = void 0 !== s.shade,
        d = void 0 !== s.lumMod,
        c = void 0 !== s.lumOff
      return o || i || l || d || c ? s : void 0
    }
    function y(e) {
      if (!e.startsWith("#")) return null
      let t = e.slice(1)
      if (!c.test(t)) return null
      if (3 === t.length || 4 === t.length) {
        let [e, a, r] = t.slice(0, 3),
          n = `#${e}${e}${a}${a}${r}${r}`.toUpperCase()
        if (4 === t.length) {
          let e = t[3],
            a = parseInt(`${e}${e}`, 16)
          return Number.isNaN(a) ? null : { hex: n, alpha: g(a / 255) }
        }
        return { hex: n }
      }
      if (6 === t.length) return { hex: `#${t.toUpperCase()}` }
      if (8 === t.length) {
        let e = t.slice(0, 6),
          a = parseInt(t.slice(6), 16)
        return Number.isNaN(a) ? null : { hex: `#${e.toUpperCase()}`, alpha: g(a / 255) }
      }
      return null
    }
    function k(e) {
      let t = e.trim()
      if (!t) return
      if (t.endsWith("%")) {
        let e = Number(t.slice(0, -1))
        return Number.isFinite(e) ? e : void 0
      }
      let a = Number(t)
      return Number.isFinite(a) ? a : void 0
    }
    function b(e) {
      let t,
        a,
        r,
        n = e.trim()
      if (!n || n.includes("(")) return null
      let s = n,
        o = /^(.*)\/([\d.]+%?)$/.exec(s)
      if (o && ((s = o[1]?.trim() ?? ""), void 0 === (t = k(o[2] ?? "")))) return null
      let i = /^(.*?)([+-])([\d.]+%?)$/.exec(s)
      if (i) {
        s = i[1]?.trim() ?? ""
        let e = k(i[3] ?? "")
        if (void 0 === e) return null
        "+" === i[2] ? (a = e) : (r = e)
      }
      return s && (void 0 !== t || void 0 !== a || void 0 !== r)
        ? { base: s, transform: { opacity: t, lighten: a, darken: r } }
        : null
    }
    function M(e) {
      let t = e.trim()
      if (!t) return null
      let a = t.toLowerCase(),
        r = l[a] ?? a
      if (i.has(r)) return { type: n.mE.COLOR_TYPE_SCHEME, value: r }
      if ("transparent" === a) return { type: n.mE.COLOR_TYPE_RGB, value: u, alpha: 0 }
      if (!t.startsWith("#") && c.test(t) && [3, 4, 6, 8].includes(t.length)) {
        let e = y(`#${t}`)
        if (e) return { type: n.mE.COLOR_TYPE_RGB, value: e.hex, alpha: e.alpha }
      }
      let s = y(t)
      if (s) return { type: n.mE.COLOR_TYPE_RGB, value: s.hex, alpha: s.alpha }
      let d = (function (e) {
        let t = p.exec(e)
        if (!t) return null
        let a = h(Number(t[1])),
          r = h(Number(t[2])),
          n = h(Number(t[3])),
          s = (function (e) {
            if (!e) return
            let t = e.trim()
            if (!t) return
            if (t.endsWith("%")) {
              let e = Number(t.slice(0, -1))
              if (Number.isNaN(e)) return
              return g(e / 100)
            }
            let a = Number(t)
            if (!Number.isNaN(a)) return a > 1 && a <= 100 ? g(a / 100) : g(a)
          })(t[4])
        return { hex: `#${f(a)}${f(r)}${f(n)}`.toUpperCase(), alpha: s }
      })(t)
      if (d) return { type: n.mE.COLOR_TYPE_RGB, value: d.hex, alpha: d.alpha }
      let m = (0, o.k)(t)
      return m
        ? "theme" in m
          ? { type: n.mE.COLOR_TYPE_SCHEME, value: m.theme, alpha: m.alpha }
          : { type: n.mE.COLOR_TYPE_RGB, value: m.hex, alpha: m.alpha }
        : null
    }
    class F {
      #l
      #d = !1
      #c
      #p
      #u
      #t = new Set()
      static validateConfig(e) {
        if ("string" == typeof e) {
          let t = b(e),
            a = t?.base ?? e
          if (!M(a)) throw Error(`Invalid color: ${e}`)
          let r = p.exec(a.trim())
          if (r && r.slice(1, 4).some((e) => Number(e) > 255))
            throw Error(`RGB color channels must be between 0 and 255: ${e}`)
          if (r?.[4]) {
            let t = Number(r[4].replace(/%$/, ""))
            if (!Number.isFinite(t) || t > 100) throw Error(`Color opacity must be between 0 and 100: ${e}`)
          }
          t && C(t.transform)
          return
        }
        if ("proto" === e.type) {
          if (!e.proto || e.proto.type === n.mE.COLOR_TYPE_UNSPECIFIED)
            throw Error("Color requires a set native color.")
          if (!e.proto.value.trim()) throw Error("Color value must be nonempty.")
          if (
            e.proto.type === n.mE.COLOR_TYPE_RGB &&
            !y(e.proto.value.startsWith("#") ? e.proto.value : `#${e.proto.value}`)
          )
            throw Error(`Invalid native RGB color: ${e.proto.value}`)
          if (e.proto.transform && Object.values(e.proto.transform).some((e) => void 0 !== e && !Number.isFinite(e)))
            throw Error("Native color transforms must be finite.")
          return
        }
        if ("theme" === e.type) {
          var t
          if (((t = e.value), !i.has(t))) throw Error(`Invalid theme color: ${e.value}`)
        } else {
          let t = M(e.value)
          if (t?.type !== n.mE.COLOR_TYPE_RGB) throw Error(`Invalid RGB color: ${e.value}`)
          F.validateConfig(e.value)
        }
        C(e.transform)
      }
      constructor(e, t) {
        ;((this.#p = t), (this.#d = !0))
        let a =
          "string" == typeof e
            ? (function (e) {
                let t = e.trim()
                if (!/^var\b/i.test(t)) return
                let a = /^var\(\s*--([a-z_][a-z0-9_-]*)\s*\)(.*)$/i.exec(t)
                if (!a) throw Error(`Invalid palette reference "${e}". Use var(--name).`)
                let r = a[2].trim(),
                  n = r ? b(`palette${r}`) : void 0
                if (r && (!n || "palette" !== n.base)) throw Error(`Invalid palette color transform "${r}".`)
                return { name: a[1], transform: n?.transform }
              })(e)
            : void 0
        if (a) {
          if (!t?.resolvePaletteColor) throw Error(`Palette reference "${a.name}" requires an authoring color context.`)
          let e = new F(t.resolvePaletteColor(a.name), t).toProto()
          if (void 0 === e) throw Error(`Unknown palette color "${a.name}".`)
          this.#l = {
            ...e,
            transform:
              void 0 === a.transform
                ? e.transform
                : {
                    ...e.transform,
                    ...v({
                      ...a.transform,
                      opacity:
                        void 0 === a.transform.opacity
                          ? void 0
                          : ((e.transform?.alpha ?? 1e5) / 1e5) * w(a.transform.opacity),
                    }),
                  },
          }
        } else if ("string" == typeof e)
          ((this.#l = { type: n.mE.COLOR_TYPE_RGB, value: e, transform: void 0, lastColor: void 0 }),
            (this.#l.value = this.#m(e)))
        else if (e?.type === "proto")
          if (e.proto && e.proto.type !== n.mE.COLOR_TYPE_UNSPECIFIED)
            ((this.#l = {
              type: e.proto?.type,
              value: e.proto?.value,
              transform: e.proto?.transform,
              lastColor: e.proto?.lastColor,
            }),
              this.#l.type === n.mE.COLOR_TYPE_RGB &&
                8 === this.#l.value.length &&
                (this.#l.value = this.#l.value.slice(2)),
              this.#l.type === n.mE.COLOR_TYPE_RGB && (this.#l.value = P(this.#l.value)))
          else {
            ;((this.#l = { type: n.mE.COLOR_TYPE_UNSPECIFIED, value: "", transform: void 0, lastColor: void 0 }),
              (this.#d = !1),
              (this.#c = void 0))
            return
          }
        else if (e?.type === "rgb") {
          let t = M(e.value),
            a = t?.type === n.mE.COLOR_TYPE_RGB ? t : null,
            r =
              "number" == typeof a?.alpha || "number" == typeof e.transform?.opacity
                ? (a?.alpha ?? 1) * w(e.transform?.opacity ?? 1)
                : void 0
          this.#l = {
            type: n.mE.COLOR_TYPE_RGB,
            value: a?.value ?? P(e.value),
            transform: v({ opacity: r, lighten: e.transform?.lighten, darken: e.transform?.darken }),
            lastColor: void 0,
          }
        } else if (e?.type === "theme")
          this.#l = { type: n.mE.COLOR_TYPE_SCHEME, value: e.value, transform: v(e.transform), lastColor: void 0 }
        else throw Error("Invalid color config")
        this.#h()
      }
      get isSet() {
        return this.#d
      }
      get value() {
        return this.#l.value
      }
      get hex() {
        return this.#d
          ? ((void 0 === this.#c || this.#l.type === n.mE.COLOR_TYPE_SCHEME) && this.#h(), this.#c ?? u)
          : u
      }
      #m(e) {
        let t = e.trim()
        if (!t) return ((this.#l.type = n.mE.COLOR_TYPE_RGB), this.#f(void 0), u)
        let a = b(t),
          r = a ? M(a.base) : null,
          s = r ?? M(t)
        if (s) {
          ;((this.#l.type = s.type), (this.#l.value = s.value))
          let e = r ? a?.transform : void 0,
            t = v({
              opacity:
                "number" == typeof s.alpha || "number" == typeof e?.opacity
                  ? (s.alpha ?? 1) * w(e?.opacity ?? 1)
                  : void 0,
              lighten: e?.lighten,
              darken: e?.darken,
            })
          return ((this.#l.transform = t), s.value)
        }
        return (
          m(`Unsupported color string "${e}"; defaulting to #000000.`),
          (this.#l.type = n.mE.COLOR_TYPE_RGB),
          (this.#l.value = u),
          this.#f(void 0),
          u
        )
      }
      #f(e) {
        if (void 0 === e || Number.isNaN(e) || e >= 1) {
          if (!this.#l.transform) return void this.#h()
          let { alpha: e, ...t } = this.#l.transform,
            a = Object.values(t).some((e) => void 0 !== e && 0 !== e)
          return ((this.#l.transform = a ? t : void 0), void this.#h())
        }
        let t = Math.max(0, Math.min(e, 1)),
          a = { ...(this.#l.transform ?? {}) }
        ;((a.alpha = Math.round(1e5 * t)), (this.#l.transform = a), this.#h())
      }
      get transform() {
        return void 0 === this.#l.transform ? void 0 : (0, r.H_)(this.#l.transform, this.#g)
      }
      set transform(e) {
        let t = this.#l.transform,
          a = this.#c
        try {
          ;((this.#l.transform = (0, r.Mb)(e)), this.#h(), this.#w())
        } catch (e) {
          throw ((this.#l.transform = t), (this.#c = a), e)
        }
      }
      setChangeHandler(e) {
        this.#u = e
      }
      addChangeHandler(e) {
        return (this.#t.add(e), () => this.#t.delete(e))
      }
      #g = () => {
        ;(this.#h(), this.#w())
      }
      #w() {
        for (let e of (this.#u?.(this), this.#t)) e(this)
      }
      get type() {
        return d[this.#l.type]
      }
      get typeProto() {
        return this.#l.type
      }
      get drawingTransform() {
        var e = this.#l.transform
        if (!e) return
        let t = e.tint
        if ("number" != typeof t || t >= 0) return e
        let a = { ...e }
        return (
          delete a.tint,
          void 0 === a.lumMod && void 0 === a.shade && (a.lumMod = Math.min(Math.max(Math.round(1e5 + t), 0), 1e5)),
          a
        )
      }
      get lastColor() {
        return this.#l.lastColor
      }
      resolve(e) {
        return new F({ type: "proto", proto: this.toProto() }, { resolveThemeColor: (t) => e.themeMap.colorMap[t] })
      }
      toProto() {
        if (!this.#d) return
        let e = this.#l.type === n.mE.COLOR_TYPE_RGB ? P(this.#l.value).slice(1) : this.#l.value
        return { type: this.#l.type, value: e, transform: this.drawingTransform, lastColor: this.#l.lastColor }
      }
      toConfig() {
        if (this.#d) {
          if ("theme" === this.type) {
            let e = (function (e) {
              if (!e) return
              let t = e.alpha,
                a = e.tint,
                r = e.shade,
                n = e.lumMod,
                s = e.lumOff,
                o = {}
              if (("number" == typeof t && (o.opacity = g(t / 1e5)), "number" == typeof n || "number" == typeof s)) {
                let e = "number" == typeof n ? Math.min(Math.max(n / 1e5, 0), 1) : 1,
                  t = "number" == typeof s ? Math.min(Math.max(s / 1e5, 0), 1) : 0
                t > 0 ? (o.lighten = Math.round(1e5 * t) / 1e5) : e < 1 && (o.darken = Math.round((1 - e) * 1e5) / 1e5)
              }
              if ("number" == typeof a) {
                let e = Math.min(Math.max(a / 1e5, -1), 1)
                e > 0 && void 0 === o.lighten
                  ? (o.lighten = Math.round((1 - e) * 1e5) / 1e5)
                  : 0 === e && void 0 === o.lighten
                    ? (o.lighten = 1)
                    : e < 0 && void 0 === o.darken && (o.darken = Math.round(1e5 * Math.abs(e)) / 1e5)
              }
              if ("number" == typeof r) {
                let e = Math.min(Math.max(r / 1e5, 0), 1)
                e < 1 && void 0 === o.darken && (o.darken = Math.round((1 - e) * 1e5) / 1e5)
              }
              return Object.keys(o).length > 0 ? o : void 0
            })(this.#l.transform)
            return e ? { type: "theme", value: this.#l.value, transform: e } : this.#l.value
          }
          if ("rgb" === this.type) {
            let e = this.#l.transform,
              t = e?.alpha,
              { alpha: a, ...r } = e ?? {},
              n = Object.values(r).some((e) => void 0 !== e && 0 !== e),
              o = P(this.#l.value),
              i = n ? x(o, e) : o
            if ("number" == typeof t) {
              let { r: e, g: a, b: r } = (0, s.E2)(i),
                n = g(t / 1e5)
              return `rgba(${e}, ${a}, ${r}, ${n})`
            }
            return i
          }
          if ("system" === this.type) {
            let e = this.#l.lastColor
            return e ? P(e) : u
          }
        }
      }
      toMarkdown() {
        return this.hex
      }
      clone() {
        return new F({ type: "proto", proto: this.#l }, this.#p)
      }
      #h() {
        if (!this.#d) {
          this.#c = void 0
          return
        }
        let e = this.#l.type ?? n.mE.COLOR_TYPE_UNSPECIFIED
        if (e === n.mE.COLOR_TYPE_RGB) {
          this.#c = x(this.#l.value, this.#l.transform)
          return
        }
        if (e === n.mE.COLOR_TYPE_SYSTEM) {
          let e = this.#l.lastColor
          ;(e || (e = u), (this.#c = x(e, this.#l.transform)))
          return
        }
        if (e === n.mE.COLOR_TYPE_SCHEME) {
          let e = this.#p?.resolveThemeColor
          if (!e) {
            this.#c = u
            return
          }
          let t = e(this.#l.value)
          if (!t) {
            ;(this.#l.value, (this.#c = u))
            return
          }
          let a = P(t)
          this.#c = x(a, this.#l.transform)
          return
        }
        this.#c = u
      }
    }
    function C(e) {
      if (e) {
        for (let [t, a] of Object.entries(e))
          if (void 0 !== a && (!Number.isFinite(a) || a < 0 || a > 100))
            throw Error(`Color transform ${t} must be between 0 and 100.`)
        v(e)
      }
    }
    function P(e) {
      if (!e) return u
      let t = y(e.startsWith("#") ? e : `#${e}`)
      return t ? t.hex : (m(`Invalid hex color "${e}"; defaulting to #000000.`), u)
    }
    function x(e, t) {
      let a = P(e)
      return t ? (0, s.Ob)((0, s.vJ)((0, s.E2)(a), t, "drawingml-crgb")) : a.toUpperCase()
    }
    a.d(t, {}, { Q: F })
  },
  YNBA(e, t, a) {
    a.d(t, { k: () => o })
    let r = {
        "amber-100": "#FEF3C6",
        "amber-200": "#FEE685",
        "amber-300": "#FFD230",
        "amber-400": "#FFB900",
        "amber-50": "#FFFBEB",
        "amber-500": "#FE9A00",
        "amber-600": "#E17100",
        "amber-700": "#BB4D00",
        "amber-800": "#973C00",
        "amber-900": "#7B3306",
        "amber-950": "#461901",
        black: "#000000",
        "blue-100": "#DBEAFE",
        "blue-200": "#BEDBFF",
        "blue-300": "#8EC5FF",
        "blue-400": "#51A2FF",
        "blue-50": "#EFF6FF",
        "blue-500": "#2B7FFF",
        "blue-600": "#155DFC",
        "blue-700": "#1447E6",
        "blue-800": "#193CB8",
        "blue-900": "#1C398E",
        "blue-950": "#162456",
        "cyan-100": "#CEFAFE",
        "cyan-200": "#A2F4FD",
        "cyan-300": "#53EAFD",
        "cyan-400": "#00D3F2",
        "cyan-50": "#ECFEFF",
        "cyan-500": "#00B8DB",
        "cyan-600": "#0092B8",
        "cyan-700": "#007595",
        "cyan-800": "#005F78",
        "cyan-900": "#104E64",
        "cyan-950": "#053345",
        "emerald-100": "#D0FAE5",
        "emerald-200": "#A4F4CF",
        "emerald-300": "#5EE9B5",
        "emerald-400": "#00D492",
        "emerald-50": "#ECFDF5",
        "emerald-500": "#00BC7D",
        "emerald-600": "#009966",
        "emerald-700": "#007A55",
        "emerald-800": "#006045",
        "emerald-900": "#004F3B",
        "emerald-950": "#002C22",
        "fuchsia-100": "#FAE8FF",
        "fuchsia-200": "#F6CFFF",
        "fuchsia-300": "#F4A8FF",
        "fuchsia-400": "#ED6AFF",
        "fuchsia-50": "#FDF4FF",
        "fuchsia-500": "#E12AFB",
        "fuchsia-600": "#C800DE",
        "fuchsia-700": "#A800B7",
        "fuchsia-800": "#8A0194",
        "fuchsia-900": "#721378",
        "fuchsia-950": "#4B004F",
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-300": "#D1D5DC",
        "gray-400": "#99A1AF",
        "gray-50": "#F9FAFB",
        "gray-500": "#6A7282",
        "gray-600": "#4A5565",
        "gray-700": "#364153",
        "gray-800": "#1E2939",
        "gray-900": "#101828",
        "gray-950": "#030712",
        "green-100": "#DCFCE7",
        "green-200": "#B9F8CF",
        "green-300": "#7BF1A8",
        "green-400": "#05DF72",
        "green-50": "#F0FDF4",
        "green-500": "#00C950",
        "green-600": "#00A63E",
        "green-700": "#008236",
        "green-800": "#016630",
        "green-900": "#0D542B",
        "green-950": "#032E15",
        "indigo-100": "#E0E7FF",
        "indigo-200": "#C6D2FF",
        "indigo-300": "#A3B3FF",
        "indigo-400": "#7C86FF",
        "indigo-50": "#EEF2FF",
        "indigo-500": "#615FFF",
        "indigo-600": "#4F39F6",
        "indigo-700": "#432DD7",
        "indigo-800": "#372AAC",
        "indigo-900": "#312C85",
        "indigo-950": "#1E1A4D",
        "lime-100": "#ECFCCA",
        "lime-200": "#D8F999",
        "lime-300": "#BBF451",
        "lime-400": "#9AE600",
        "lime-50": "#F7FEE7",
        "lime-500": "#7CCF00",
        "lime-600": "#5EA500",
        "lime-700": "#497D00",
        "lime-800": "#3C6300",
        "lime-900": "#35530E",
        "lime-950": "#192E03",
        "mauve-100": "#F3F1F3",
        "mauve-200": "#E7E4E7",
        "mauve-300": "#D7D0D7",
        "mauve-400": "#A89EA9",
        "mauve-50": "#FAFAFA",
        "mauve-500": "#79697B",
        "mauve-600": "#594C5B",
        "mauve-700": "#463947",
        "mauve-800": "#2A212C",
        "mauve-900": "#1D161E",
        "mauve-950": "#0C090C",
        "mist-100": "#F1F3F3",
        "mist-200": "#E3E7E8",
        "mist-300": "#D0D6D8",
        "mist-400": "#9CA8AB",
        "mist-50": "#F9FBFB",
        "mist-500": "#67787C",
        "mist-600": "#4B585B",
        "mist-700": "#394447",
        "mist-800": "#22292B",
        "mist-900": "#161B1D",
        "mist-950": "#090B0C",
        "neutral-100": "#F5F5F5",
        "neutral-200": "#E5E5E5",
        "neutral-300": "#D4D4D4",
        "neutral-400": "#A1A1A1",
        "neutral-50": "#FAFAFA",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "olive-100": "#F4F4F0",
        "olive-200": "#E8E8E3",
        "olive-300": "#D8D8D0",
        "olive-400": "#ABAB9C",
        "olive-50": "#FBFBF9",
        "olive-500": "#7C7C67",
        "olive-600": "#5B5B4B",
        "olive-700": "#474739",
        "olive-800": "#2B2B22",
        "olive-900": "#1D1D16",
        "olive-950": "#0C0C09",
        "orange-100": "#FFEDD4",
        "orange-200": "#FFD6A7",
        "orange-300": "#FFB86A",
        "orange-400": "#FF8904",
        "orange-50": "#FFF7ED",
        "orange-500": "#FF6900",
        "orange-600": "#F54900",
        "orange-700": "#CA3500",
        "orange-800": "#9F2D00",
        "orange-900": "#7E2A0C",
        "orange-950": "#441306",
        "pink-100": "#FCE7F3",
        "pink-200": "#FCCEE8",
        "pink-300": "#FDA5D5",
        "pink-400": "#FB64B6",
        "pink-50": "#FDF2F8",
        "pink-500": "#F6339A",
        "pink-600": "#E60076",
        "pink-700": "#C6005C",
        "pink-800": "#A3004C",
        "pink-900": "#861043",
        "pink-950": "#510424",
        "purple-100": "#F3E8FF",
        "purple-200": "#E9D4FF",
        "purple-300": "#DAB2FF",
        "purple-400": "#C27AFF",
        "purple-50": "#FAF5FF",
        "purple-500": "#AD46FF",
        "purple-600": "#9810FA",
        "purple-700": "#8200DB",
        "purple-800": "#6E11B0",
        "purple-900": "#59168B",
        "purple-950": "#3C0366",
        "red-100": "#FFE2E2",
        "red-200": "#FFC9C9",
        "red-300": "#FFA2A2",
        "red-400": "#FF6467",
        "red-50": "#FEF2F2",
        "red-500": "#FB2C36",
        "red-600": "#E7000B",
        "red-700": "#C10007",
        "red-800": "#9F0712",
        "red-900": "#82181A",
        "red-950": "#460809",
        "rose-100": "#FFE4E6",
        "rose-200": "#FFCCD3",
        "rose-300": "#FFA1AD",
        "rose-400": "#FF637E",
        "rose-50": "#FFF1F2",
        "rose-500": "#FF2056",
        "rose-600": "#EC003F",
        "rose-700": "#C70036",
        "rose-800": "#A50036",
        "rose-900": "#8B0836",
        "rose-950": "#4D0218",
        "sky-100": "#DFF2FE",
        "sky-200": "#B8E6FE",
        "sky-300": "#74D4FF",
        "sky-400": "#00BCFF",
        "sky-50": "#F0F9FF",
        "sky-500": "#00A6F4",
        "sky-600": "#0084D1",
        "sky-700": "#0069A8",
        "sky-800": "#00598A",
        "sky-900": "#024A70",
        "sky-950": "#052F4A",
        "slate-100": "#F1F5F9",
        "slate-200": "#E2E8F0",
        "slate-300": "#CAD5E2",
        "slate-400": "#90A1B9",
        "slate-50": "#F8FAFC",
        "slate-500": "#62748E",
        "slate-600": "#45556C",
        "slate-700": "#314158",
        "slate-800": "#1D293D",
        "slate-900": "#0F172B",
        "slate-950": "#020618",
        "stone-100": "#F5F5F4",
        "stone-200": "#E7E5E4",
        "stone-300": "#D6D3D1",
        "stone-400": "#A6A09B",
        "stone-50": "#FAFAF9",
        "stone-500": "#79716B",
        "stone-600": "#57534D",
        "stone-700": "#44403B",
        "stone-800": "#292524",
        "stone-900": "#1C1917",
        "stone-950": "#0C0A09",
        "taupe-100": "#F3F1F1",
        "taupe-200": "#E8E4E3",
        "taupe-300": "#D8D2D0",
        "taupe-400": "#ABA09C",
        "taupe-50": "#FBFAF9",
        "taupe-500": "#7C6D67",
        "taupe-600": "#5B4F4B",
        "taupe-700": "#473C39",
        "taupe-800": "#2B2422",
        "taupe-900": "#1D1816",
        "taupe-950": "#0C0A09",
        "teal-100": "#CBFBF1",
        "teal-200": "#96F7E4",
        "teal-300": "#46ECD5",
        "teal-400": "#00D5BE",
        "teal-50": "#F0FDFA",
        "teal-500": "#00BBA7",
        "teal-600": "#009689",
        "teal-700": "#00786F",
        "teal-800": "#005F5A",
        "teal-900": "#0B4F4A",
        "teal-950": "#022F2E",
        "violet-100": "#EDE9FE",
        "violet-200": "#DDD6FF",
        "violet-300": "#C4B4FF",
        "violet-400": "#A684FF",
        "violet-50": "#F5F3FF",
        "violet-500": "#8E51FF",
        "violet-600": "#7F22FE",
        "violet-700": "#7008E7",
        "violet-800": "#5D0EC0",
        "violet-900": "#4D179A",
        "violet-950": "#2F0D68",
        white: "#FFFFFF",
        "yellow-100": "#FEF9C2",
        "yellow-200": "#FFF085",
        "yellow-300": "#FFDF20",
        "yellow-400": "#FDC700",
        "yellow-50": "#FEFCE8",
        "yellow-500": "#F0B100",
        "yellow-600": "#D08700",
        "yellow-700": "#A65F00",
        "yellow-800": "#894B00",
        "yellow-900": "#733E0A",
        "yellow-950": "#432004",
        "zinc-100": "#F4F4F5",
        "zinc-200": "#E4E4E7",
        "zinc-300": "#D4D4D8",
        "zinc-400": "#9F9FA9",
        "zinc-50": "#FAFAFA",
        "zinc-500": "#71717B",
        "zinc-600": "#52525C",
        "zinc-700": "#3F3F46",
        "zinc-800": "#27272A",
        "zinc-900": "#18181B",
        "zinc-950": "#09090B",
      },
      n = new Set(["accent1", "accent2", "accent3", "accent4", "accent5", "accent6"]),
      s = (e) => (!Number.isFinite(e) || e < 0 ? 0 : e > 1 ? 1 : e)
    function o(e) {
      var t
      let a,
        o = e.trim()
      if (!o) return null
      let i = o.toLowerCase(),
        l = i.indexOf("/"),
        d = i
      if ((l >= 0 && ((d = i.slice(0, l).trim()), (a = i.slice(l + 1))), !d)) return null
      let c = ((e) => {
        if (!e) return
        let t = e.trim()
        if (!t) return
        if (t.endsWith("%")) {
          let e = Number(t.slice(0, -1))
          if (Number.isNaN(e)) return
          return s(e / 100)
        }
        let a = Number(t)
        if (!Number.isNaN(a)) return a > 1 ? s(a / 100) : s(a)
      })(a)
      if (((t = d), n.has(t))) return void 0 === c ? { theme: d } : { theme: d, alpha: c }
      let p = /^\[(.+)\]$/.exec(d)
      if (null !== p) {
        let e = p[1],
          t = (function (e) {
            if (!e.startsWith("#")) return null
            let t = e.slice(1)
            if (!/^[0-9a-f]+$/i.test(t)) return null
            if (3 === t.length || 4 === t.length) {
              let [e, a, r] = t.slice(0, 3),
                n = `#${e}${e}${a}${a}${r}${r}`.toUpperCase()
              if (4 === t.length) {
                let e = t[3]
                return { hex: n, alpha: parseInt(`${e}${e}`, 16) / 255 }
              }
              return { hex: n }
            }
            return 6 === t.length
              ? { hex: `#${t.toUpperCase()}` }
              : 8 === t.length
                ? { hex: `#${t.slice(0, 6).toUpperCase()}`, alpha: parseInt(t.slice(6), 16) / 255 }
                : null
          })(e.startsWith("#") ? e : `#${e}`)
        return null === t ? null : void 0 === c ? t : { hex: t.hex, alpha: (t.alpha ?? 1) * c }
      }
      let u = r[d]
      return "string" != typeof u ? null : void 0 === c ? { hex: u } : { hex: u, alpha: c }
    }
  },
  mDDc(e, t, a) {
    let r = 1 / 2.3
    function n(e, t, a) {
      return Number.isNaN(e) ? t : Math.min(Math.max(e, t), a)
    }
    function s(e, t, a) {
      let r = Math.max((e /= 255), (t /= 255), (a /= 255)),
        n = Math.min(e, t, a),
        s = 0,
        o = 0,
        i = (r + n) / 2
      if (r !== n) {
        let l = r - n
        switch (((o = i > 0.5 ? l / (2 - r - n) : l / (r + n)), r)) {
          case e:
            s = (t - a) / l + 6 * (t < a)
            break
          case t:
            s = (a - e) / l + 2
            break
          default:
            s = (e - t) / l + 4
        }
        s /= 6
      }
      return { h: s, s: o, l: i }
    }
    function o(e, t, a) {
      let r, n, s
      if (0 === t) r = n = s = a
      else {
        let o = (e, t, a) =>
            (a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6)
              ? e + (t - e) * 6 * a
              : a < 0.5
                ? t
                : a < 2 / 3
                  ? e + (t - e) * (2 / 3 - a) * 6
                  : e,
          i = a < 0.5 ? a * (1 + t) : a + t - a * t,
          l = 2 * a - i
        ;((r = o(l, i, e + 1 / 3)), (n = o(l, i, e)), (s = o(l, i, e - 1 / 3)))
      }
      return { r: Math.round(255 * r), g: Math.round(255 * n), b: Math.round(255 * s) }
    }
    function i(e) {
      return Math.floor((1e5 * n(e, 0, 255)) / 255)
    }
    function l(e) {
      return Math.floor((255 * n(e, 0, 1e5)) / 1e5)
    }
    function d(e, t) {
      return Math.round(1e5 * Math.pow(n(e, 0, 1e5) / 1e5, t))
    }
    function c(e) {
      return { r: d(i(e.r), 2.3), g: d(i(e.g), 2.3), b: d(i(e.b), 2.3) }
    }
    function p(e) {
      return { r: l(d(e.r, r)), g: l(d(e.g, r)), b: l(d(e.b, r)) }
    }
    function u(e, t) {
      let a = n(t / 1e5, 0, 1),
        r = c(e)
      return p({ r: Math.floor(r.r * a), g: Math.floor(r.g * a), b: Math.floor(r.b * a) })
    }
    function m(e, t) {
      let a = n(t / 1e5, -1, 1),
        r = s(e.r, e.g, e.b),
        i = Math.round(255 * r.l)
      return (
        (r.l = n(
          (i = a < 0 ? Math.round(i * (1 + a)) : Math.round(i * (1 - a) + (255 - Math.floor(255 * (1 - a))))) / 255,
          0,
          1,
        )),
        o(r.h, r.s, r.l)
      )
    }
    a.d(
      t,
      {},
      {
        E2: function (e) {
          let t = e.replace("#", "")
          return { r: parseInt(t.slice(0, 2), 16), g: parseInt(t.slice(2, 4), 16), b: parseInt(t.slice(4, 6), 16) }
        },
        Ob: function (e) {
          let t = (e) => n(Math.round(e), 0, 255).toString(16).padStart(2, "0")
          return `#${t(e.r)}${t(e.g)}${t(e.b)}`.toUpperCase()
        },
        vJ: function (e, t, a = "drawingml") {
          var r, i, l, d
          let h, f, g, w, v, y, k
          if (!t) return { r: n(Math.round(e.r), 0, 255), g: n(Math.round(e.g), 0, 255), b: n(Math.round(e.b), 0, 255) }
          let b = { ...e }
          return (
            ("number" == typeof t.satMod || "number" == typeof t.lumMod || "number" == typeof t.lumOff) &&
              ((h = s((r = b).r, r.g, r.b)),
              "number" == typeof t.satMod && (h.s = n(h.s * (t.satMod / 1e5), 0, 1)),
              "number" == typeof t.lumMod && (h.l = n(h.l * (t.lumMod / 1e5), 0, 1)),
              "number" == typeof t.lumOff && (h.l = n(h.l + t.lumOff / 1e5, 0, 1)),
              (b = o(h.h, h.s, h.l))),
            "number" == typeof t.tint &&
              (b =
                "spreadsheetml" === a
                  ? m(b, t.tint)
                  : "drawingml-crgb" === a
                    ? t.tint < 0
                      ? u(b, 1e5 + t.tint)
                      : ((i = b),
                        (f = n(t.tint / 1e5, 0, 1)),
                        p({
                          r: Math.floor(1e5 - (1e5 - (g = c(i)).r) * f),
                          g: Math.floor(1e5 - (1e5 - g.g) * f),
                          b: Math.floor(1e5 - (1e5 - g.b) * f),
                        }))
                    : ((l = b),
                      (w = n(t.tint / 1e5, -1, 1)),
                      { r: (v = (e) => (w >= 0 ? e + (255 - e) * w : e * (1 + w)))(l.r), g: v(l.g), b: v(l.b) })),
            "number" == typeof t.shade &&
              (b =
                "spreadsheetml" === a
                  ? m(b, -t.shade)
                  : "drawingml-crgb" === a
                    ? u(b, t.shade)
                    : ((d = b),
                      (y = n(t.shade / 1e5, 0, 1)),
                      ((k = s(d.r, d.g, d.b)).l = n(k.l * y, 0, 1)),
                      o(k.h, k.s, k.l))),
            { r: n(Math.round(b.r), 0, 255), g: n(Math.round(b.g), 0, 255), b: n(Math.round(b.b), 0, 255) }
          )
        },
      },
    )
  },
  L6k2(e, t, a) {
    let r = [137, 80, 78, 71, 13, 10, 26, 10],
      n = "OpenAI-Presentation"
    function s(e) {
      if (null == e || "object" != typeof e) return
      let { slideCount: t, backgroundColor: a } = e
      if ("number" == typeof t && Number.isSafeInteger(t) && !(t < 1))
        return {
          slideCount: t,
          ...("string" == typeof a &&
          a.length <= 96 &&
          /^(?:#[\da-f]{3}(?:[\da-f]{3})?|rgba?\(\s*(?:\d+(?:\.\d+)?\s*,\s*){2}\d+(?:\.\d+)?(?:\s*,\s*(?:\d+(?:\.\d+)?|\.\d+))?\s*\))$/i.test(
            a,
          )
            ? { backgroundColor: a }
            : {}),
        }
    }
    a.d(
      t,
      {},
      {
        dA: s,
        q$: function (e) {
          var t
          if (
            !(
              (t = e).length >= 33 &&
              r.every((e, a) => t[a] === e) &&
              13 === new DataView(t.buffer, t.byteOffset).getUint32(8) &&
              73 === t[12] &&
              72 === t[13] &&
              68 === t[14] &&
              82 === t[15]
            ) ||
            e.length < 45
          )
            return
          let a = Math.min(e.length, 301),
            o = new DataView(e.buffer, e.byteOffset, a),
            i = 45 + o.getUint32(33)
          if (
            0x74455874 !== o.getUint32(37) ||
            i > a ||
            (function (e) {
              let t = 0xffffffff
              for (let a of e) {
                t ^= a
                for (let e = 0; e < 8; e++) t = (t >>> 1) ^ (1 & t ? 0xedb88320 : 0)
              }
              return (0xffffffff ^ t) >>> 0
            })(e.subarray(37, i - 4)) !== o.getUint32(i - 4)
          )
            return
          let l = new TextDecoder().decode(e.subarray(41, i - 4))
          if (l.startsWith(`${n}\0`))
            try {
              return s(JSON.parse(l.slice(n.length + 1)))
            } catch {
              return
            }
        },
      },
    )
  },
  e7LJ(e, t, a) {
    var r = a("ABep"),
      n = a("zd8w")
    let s = n.createContext(null),
      o = n.createContext(null),
      i = () => {},
      l = n.createContext(i),
      d = n.createContext(null)
    a.d(
      t,
      {},
      {
        Dp: function ({ ui: e, formatMessage: t, logEvent: a, experiments: c, children: p }) {
          let u = n.useMemo(
              () =>
                void 0 === a
                  ? i
                  : (e, t) => {
                      try {
                        a(e, t)
                      } catch {}
                    },
              [a],
            ),
            m = n.useMemo(
              () =>
                void 0 === c
                  ? null
                  : {
                      get(e, t) {
                        let a = c.getLayer(e.layer, t)
                        return void 0 === a ? e.fallback : e.parseOrFallback(a.get(e.name, e.fallback))
                      },
                    },
              [c],
            )
          return (0, r.jsx)(s, {
            value: e,
            children: (0, r.jsx)(o, {
              value: t ?? null,
              children: (0, r.jsx)(l, { value: u, children: (0, r.jsx)(d, { value: m, children: p }) }),
            }),
          })
        },
        O8: function () {
          let e = n.useContext(s)
          if (null === e) throw Error("useHostUI must be used within a TortillaProvider.")
          return e
        },
        oo: function () {
          let e = n.useContext(o)
          if (null === e) throw Error("useFormatMessage requires a TortillaProvider with formatMessage.")
          return e
        },
      },
    )
  },
  BI6E(e, t, a) {
    var r = a("Qgfj")
    let n = (0, r.YK)({
        all: {
          id: "space.templates.create.prompt",
          defaultMessage:
            "Create a new template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
        site: {
          id: "home.artifactTemplates.createSite.prompt",
          defaultMessage:
            "Create a new site template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
        document: {
          id: "home.artifactTemplates.createDocument.prompt",
          defaultMessage:
            "Create a new document template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
        presentation: {
          id: "home.artifactTemplates.createPresentation.prompt",
          defaultMessage:
            "Create a new presentation template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
        spreadsheet: {
          id: "home.artifactTemplates.createSpreadsheet.prompt",
          defaultMessage:
            "Create a new spreadsheet template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
        },
      }),
      s = (0, r.YK)({
        page: { id: "space.pageTemplates.category", defaultMessage: "Pages" },
        site: { id: "home.artifactTemplates.sites", defaultMessage: "Sites" },
        document: { id: "home.artifactTemplates.documents", defaultMessage: "Documents" },
        presentation: { id: "home.artifactTemplates.presentations", defaultMessage: "Presentations" },
        spreadsheet: { id: "home.artifactTemplates.spreadsheets", defaultMessage: "Spreadsheets" },
      }),
      o = (0, r.YK)({
        customizeTemplatePrompt: {
          id: "artifactTemplate.customizePrompt",
          defaultMessage: "Help me customize a personal copy of {template} using {templateCreator}",
        },
        editTemplatePrompt: {
          id: "artifactTemplate.resultCard.editPrompt",
          defaultMessage: "Help me make updates to {template} using {templateCreator}",
        },
      })
    a.d(t, {}, { T5: n, ho: o, xs: s })
  },
  eOqt(e, t, a) {
    a.d(t, { u: () => F })
    var r = a("ABep"),
      n = a("QosV")
    let s = (0, a("ESTr").a)({
      name: "shapes-light-12",
      canvas: {
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        frame: { x: 0, y: 0, width: 12, height: 12 },
        inkBounds: { x: 0.935059, y: 1.118164, width: 10.2146, height: 9.833862 },
        visualBounds: { x: 0.935059, y: 1.118164, width: 10.2146, height: 9.833862 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.935059, y: 1.118164, width: 10.2146, height: 9.833862 },
        center: { x: 6.042359, y: 6.035095 },
        insets: { top: 1.118164, right: 0.850341, bottom: 1.047974, left: 0.935059 },
        anchors: { frame: { x: 6, y: 6 }, ink: { x: 6.042359, y: 6.035095 }, foreground: { x: 6.042359, y: 6.035095 } },
      },
      capabilities: ["icon"],
      body: '<path d="M2.50504 6.52352C2.95415 6.07507 3.68211 6.07474 4.13102 6.52352L5.36344 7.75692C5.81224 8.20596 5.81222 8.93384 5.36344 9.38289L4.13102 10.6153C3.68199 11.0643 2.95416 11.0642 2.50504 10.6153L1.27164 9.38289C0.822781 8.9339 0.822947 8.20601 1.27164 7.75692L2.50504 6.52352ZM3.56559 7.08992C3.42899 6.95332 3.20717 6.95349 3.07047 7.08992L1.83805 8.32235C1.70136 8.45903 1.70136 8.68078 1.83805 8.81746L3.07047 10.0499C3.20717 10.1863 3.42898 10.1865 3.56559 10.0499L4.79801 8.81746C4.93437 8.68083 4.93439 8.45897 4.79801 8.32235L3.56559 7.08992Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.9191 6.6827C10.5541 6.68281 11.0685 7.19803 11.0685 7.83309V9.68465C11.0684 10.3196 10.5541 10.834 9.9191 10.8341H8.06754C7.43248 10.8341 6.91726 10.3197 6.91715 9.68465V7.83309C6.91715 7.19796 7.43241 6.6827 8.06754 6.6827H9.9191ZM8.06754 7.48348C7.87424 7.48348 7.71793 7.63979 7.71793 7.83309V9.68465C7.71805 9.87785 7.87431 10.0343 8.06754 10.0343H9.9191C10.1122 10.0341 10.2686 9.87778 10.2687 9.68465V7.83309C10.2687 7.63986 10.1123 7.48359 9.9191 7.48348H8.06754Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.99332 1.15242C10.1844 1.15247 11.1496 2.11853 11.1496 3.30965C11.1495 4.50073 10.1844 5.46586 8.99332 5.4659C7.8022 5.4659 6.83614 4.50076 6.83609 3.30965C6.83609 2.11851 7.80218 1.15242 8.99332 1.15242ZM8.99332 1.95321C8.24401 1.95321 7.63688 2.56033 7.63688 3.30965C7.63692 4.05893 8.24403 4.6661 8.99332 4.6661C9.74257 4.66605 10.3497 4.0589 10.3498 3.30965C10.3498 2.56036 9.7426 1.95325 8.99332 1.95321Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M2.53727 1.57039C2.88314 0.967491 3.75303 0.967351 4.09879 1.57039L5.45914 3.94442C5.80287 4.5442 5.36999 5.29155 4.67887 5.29207H1.95719C1.26569 5.29207 0.832208 4.54439 1.17594 3.94442L2.53727 1.57039ZM3.40445 1.96785C3.36603 1.90113 3.26915 1.90124 3.23063 1.96785L1.87027 4.34188C1.83207 4.40854 1.88035 4.49227 1.95719 4.49227H4.67887C4.75528 4.49175 4.80289 4.40833 4.76481 4.34188L3.40445 1.96785Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var o = a("e7LJ"),
      i = a("on57"),
      l = a("Wf1j"),
      d = a("Sm6l"),
      c = a("JNtf"),
      p = a("mUDD"),
      u = a("bqtn"),
      m = a("HOLv"),
      h = a("bVeK"),
      f = a("X3K1"),
      g = a("BrP7"),
      w = a("zLIa"),
      v = a("OGl1"),
      y = a("NKFb"),
      k = a("DqAq"),
      b = a("nDx1")
    let M = {
      Button: d.$,
      Input: ({ name: e, ...t }) => (0, r.jsx)(w.pd, { ...t, id: e, name: e }),
      Label: ({ htmlFor: e, ...t }) => (0, r.jsx)("label", { ...t, htmlFor: e }),
      Skeleton: ({ className: e }) => (0, r.jsx)(f.X, { as: "span", className: (0, i.A)("block", e), size: "custom" }),
      Dialog: function (e) {
        let t,
          a,
          s,
          o,
          i,
          l,
          d,
          u,
          m = (0, n.c)(16)
        ;(m[0] !== e
          ? (({ title: o, description: a, children: t, ...s } = e),
            (m[0] = e),
            (m[1] = t),
            (m[2] = a),
            (m[3] = s),
            (m[4] = o))
          : ((t = m[1]), (a = m[2]), (s = m[3]), (o = m[4])),
          m[5] !== o
            ? ((i = (0, r.jsx)(c.L3, { className: "sr-only", children: o })), (m[5] = o), (m[6] = i))
            : (i = m[6]))
        let h = a ?? o
        return (
          m[7] !== h
            ? ((l = (0, r.jsx)(c.rr, { className: "sr-only", children: h })), (m[7] = h), (m[8] = l))
            : (l = m[8]),
          m[9] !== t
            ? ((d = (0, r.jsx)(p.R4, { variant: "chatgpt", size: "full", children: t })), (m[9] = t), (m[10] = d))
            : (d = m[10]),
          m[11] !== s || m[12] !== i || m[13] !== l || m[14] !== d
            ? ((u = (0, r.jsxs)(c.lG, { ...s, children: [i, l, d] })),
              (m[11] = s),
              (m[12] = i),
              (m[13] = l),
              (m[14] = d),
              (m[15] = u))
            : (u = m[15]),
          u
        )
      },
      Tabs: g.t,
      Dropdown: { Root: u.Ab, Item: u.ms.Item },
      icons: {
        templateCreator: (e) => (0, r.jsx)(m.I, { asset: s, ...e }),
        close: h.P9U,
        "chevron-left": h.KBq,
        "chevron-right": h.j1b,
        more: h.e4G,
        plus: h.ONy,
        shapes: h.jrs,
        "category-document": h.o_G,
        "category-presentation": h.jXf,
        "category-spreadsheet": h.NSE,
        "category-site": h.cfl,
        site: h.cfl,
        document: v.Ug.artifactDocument,
        presentation: v.Ug.presentation,
        spreadsheet: v.Ug.spreadsheet,
        "google-docs": y.A,
        "google-slides": b.A,
        "google-sheets": k.A,
      },
    }
    function F(e) {
      let t,
        a = (0, n.c)(3),
        { children: s } = e,
        i = (0, l.A)()
      return (
        a[0] !== s || a[1] !== i.formatMessage
          ? ((t = (0, r.jsx)(o.Dp, { ui: M, formatMessage: i.formatMessage, children: s })),
            (a[0] = s),
            (a[1] = i.formatMessage),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
  },
  Eso4(e, t, a) {
    a.d(
      t,
      {},
      {
        Ee: [],
        p: function (e, t) {
          return t.some((t) => t.beaconId === e.beacon_id && t.containerId === e.ui_info.container_id)
        },
      },
    )
  },
  prHy(e, t, a) {
    var r = a("ASxG"),
      n = a("s4w7"),
      s = a("h6ff"),
      o = a("Eso4")
    let i = r.YjP().refine((e) => e.trim().length > 0, "Home tooltip title must not be blank"),
      l = r
        .YjP()
        .nullable()
        .optional()
        .transform((e) => e ?? null),
      d = {
        action_items: r.YOg(r.ZmZ()).length(0),
        beacon_name: r.YjP(),
        show_timing: r.k5n(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
        type: r.euz("beacon_ui_response"),
      },
      c = r.KCZ([
        r
          .Ikc({
            ...d,
            beacon_id: r.euz("voice_mode_tooltip"),
            ui_info: r
              .Ikc({
                subtitle: l,
                target: r.euz("composer-voice-button"),
                title: i,
                type: r.euz("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
        r
          .Ikc({
            ...d,
            beacon_id: r.euz("tpp_nux_tooltip"),
            ui_info: r
              .Ikc({
                subtitle: l,
                target: r.euz("tpp-surface-mode-toggle"),
                title: i,
                type: r.euz("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
      ]),
      p = r.KCZ([c, n.E2]),
      u = r.KCZ([s.Bw, p])
    a.d(
      t,
      {},
      {
        Bw: u,
        Yw: function (e, t) {
          let a = u.safeParse(e)
          if (a.success) return a.data
          let r = s.th.safeParse(e)
          return r.success && (0, o.p)(r.data, t) ? r.data : null
        },
        xU: function (e) {
          return p.safeParse(e).success
        },
      },
    )
  },
  TPR0(e, t, a) {
    async function r(e, t, a) {
      if ("u" < typeof ImageDecoder) throw Error("GIF decoder unavailable")
      let r = new ImageDecoder({ data: await e.blob.arrayBuffer(), type: "image/gif", preferAnimation: !0 }),
        n = () => r.close()
      a?.addEventListener("abort", n, { once: !0 })
      try {
        ;(a?.throwIfAborted(), await r.tracks.ready)
        let n = new OffscreenCanvas(e.width, e.height),
          s = n.getContext("2d")
        if (r.tracks.selectedTrack?.frameCount !== e.frameCount || null == s)
          throw Error("GIF frame decoding unavailable")
        for (let o = e.start; o < e.end; o++) {
          a?.throwIfAborted()
          let { image: i } = await r.decode({ frameIndex: o })
          try {
            ;(s.clearRect(0, 0, e.width, e.height), s.drawImage(i, 0, 0))
            let r = await n.convertToBlob({ type: "image/png" })
            ;(a?.throwIfAborted(), t({ index: o, blob: r }))
          } finally {
            i.close()
          }
        }
      } finally {
        ;(a?.removeEventListener("abort", n), r.close())
      }
    }
    function n(e) {
      let t = Math.min(12, e)
      return Array.from({ length: t }, (a, r) => Math.round((r * (e - 1)) / Math.max(1, t - 1)))
    }
    function s(e, t) {
      return Math.max(20, Math.min(655350, 10 * Math.round(e / t / 10)))
    }
    function o(e, t) {
      let a = new Uint8Array(e),
        r = new DataView(e),
        n = new TextDecoder().decode(a.subarray(0, 6))
      if ("GIF87a" !== n && "GIF89a" !== n) throw Error("Invalid GIF header")
      let s = r.getUint16(6, !0),
        o = r.getUint16(8, !0)
      if (0 === s || 0 === o) throw Error("Invalid GIF dimensions")
      let i = 13,
        l = (e) => {
          e >= 128 && (i += 3 * 2 ** ((e % 8) + 1))
        },
        d = () => {
          for (;;) {
            let e = r.getUint8(i++)
            if (0 === e) return
            i += e
          }
        }
      l(r.getUint8(10))
      let c = [],
        p = null
      for (; i < a.length;) {
        let e = r.getUint8(i++)
        if (59 === e) return { width: s, height: o, frames: c }
        if (33 === e) {
          let e = r.getUint8(i++)
          if (249 === e) {
            if (4 !== r.getUint8(i) || 0 !== r.getUint8(i + 5)) throw Error("Invalid GIF graphics control extension")
            p = i + 2
          } else 1 === e && (p = null)
          d()
        } else if (44 === e) {
          let e = r.getUint8(i + 8)
          ;((i += 9), l(e), i++, d())
          let a = null == p ? 0 : r.getUint16(p, !0)
          if ((c.push({ durationMs: a > 1 ? 10 * a : t }), c.length > 256))
            throw Error("GIF has too many frames to edit")
          p = null
        } else throw Error("Invalid GIF block")
      }
      throw Error("Truncated GIF")
    }
    ;("u" > typeof self &&
      "importScripts" in self &&
      "gif-frame-decoder" === self.name &&
      (self.onmessage = async ({ data: e }) => {
        try {
          await r(e, (e) => self.postMessage(e))
        } catch {
          self.postMessage(null)
        }
      }),
      a.d(
        t,
        {},
        {
          Kp: n,
          P_: async function (e, { signal: t, fallbackFrameDurationMs: a = 100, createWorker: s, onPreview: i } = {}) {
            let l
            if (
              (t?.throwIfAborted(),
              "u" < typeof ImageDecoder ||
                "u" < typeof OffscreenCanvas ||
                e.size > 0x4000000 ||
                !(await ImageDecoder.isTypeSupported("image/gif")))
            )
              return null
            let d = [],
              c = [],
              p = () => {
                d.forEach((e) => URL.revokeObjectURL(e.url))
              }
            try {
              let u = await e.arrayBuffer()
              t?.throwIfAborted()
              let { width: m, height: h, frames: f } = o(u, a),
                g = f.length
              if (g < 2 || g > 256 || m * h * g > 0x4000000) return null
              let w = n(g),
                v = Array(w.length).fill(null)
              ;(i?.(v.slice()), t?.throwIfAborted())
              let y = ({ index: e, blob: t }) => {
                  let a = URL.createObjectURL(t)
                  d[e] = { url: a, blob: t, durationMs: f[e].durationMs }
                  let r = w.indexOf(e)
                  ;-1 !== r && ((v[r] = a), i?.(v.slice()))
                },
                k = { blob: e, width: m, height: h, frameCount: g, start: 0, end: g }
              if (null == s) await r(k, y, t)
              else {
                let e = Math.min(4, g)
                await new Promise((a, r) => {
                  let n = () => r(Error("GIF decoding aborted"))
                  ;(t?.addEventListener("abort", n, { once: !0 }), (l = () => t?.removeEventListener("abort", n)))
                  let o = 0
                  for (let t = 0; t < e; t++) {
                    let n = s()
                    ;(c.push(n),
                      (n.onerror = n.onmessageerror = r),
                      (n.onmessage = ({ data: e }) => {
                        null == e ? r(Error("GIF frame decoding failed")) : (y(e), ++o === g && a())
                      }),
                      n.postMessage({ ...k, start: Math.floor((t * g) / e), end: Math.floor(((t + 1) * g) / e) }))
                  }
                })
              }
              return { width: m, height: h, frames: d, dispose: p }
            } catch {
              return (p(), t?.throwIfAborted(), null)
            } finally {
              for (let e of (l?.(), c)) e.terminate()
            }
          },
          Yb: s,
          bA: async function (e, t) {
            if (e.size > 0x4000000) throw Error("GIF is too large to read playback timing")
            let { frames: a } = o(await e.arrayBuffer(), 100)
            if (0 === a.length) throw Error("GIF has no frames")
            return a.reduce((e, a) => e + s(a.durationMs, t), 0) / a.length
          },
        },
      ))
  },
  N8b3(e, t, a) {
    a.d(t, { Yn: () => x, TA: () => E, WT: () => A })
    var r = a("qmMi"),
      n = a("DBCl"),
      s = a("PFjh"),
      o = a("E8Sp"),
      i = a("SPnB"),
      l = a("SGsN"),
      d = a("svjy"),
      c = a("mNPx"),
      p = a("e1xH"),
      u = a("BkKO"),
      m = a("tv8P"),
      h = a("yGJW"),
      f = a("H2L8"),
      g = a("OWtl"),
      w = a("kK7d"),
      v = a("eShZ"),
      y = a("NRR1"),
      k = a("jGsJ"),
      b = a("OoIX"),
      M = a("HNZf"),
      F = a("D550"),
      C = a("PzpM")
    let P = (0, r.bD)(g.u, (e) => void 0),
      x = (0, r.i1)(g.u, (e, { get: t }) => {
        let a = t(P, e)
        return a?.accountId === t(m.spaceAccountId$) && a?.userId === t(i.chatGptAuthenticatedUserId$) ? a : void 0
      }),
      E = (0, r.un)(g.u, ({ get: e }) =>
        e(C.z$).flatMap((t) => {
          let a = e(x, t.localPageId)
          return a?.response != null && "error" !== a.status
            ? []
            : [
                {
                  id: t.localPageId,
                  name: t.name,
                  title: t.name,
                  backingType: t.backingType,
                  serverSpaceId: t.space?.spaceId,
                  status: a?.status ?? "error",
                },
              ]
        }),
      )
    function A(e, { name: t, createSpace: r, invitations: g = [], appearance: E, resume: T }) {
      let I,
        D,
        j = e.get(m.spaceAccountId$),
        _ = e.get(i.chatGptAuthenticatedUserId$),
        O = e.get(i.o8)
      if (null == j) throw Error("space_account_unavailable")
      if (null != T && (T.accountId !== j || T.userId !== _ || null == T.space)) throw Error("space_setup_unavailable")
      let S = e.get(i.PO).accountUserId,
        R = T?.localPageId ?? `local-page-${crypto.randomUUID()}`
      null == T &&
        (0, C.Bz)(e, {
          accountId: j,
          userId: _,
          localPageId: R,
          name: t,
          backingType: "drive",
          rootInitialization: "server",
          appearance: E,
          invitations: g.map((e) => ({ ...e, status: "pending" })),
        })
      let B = (0, F.a)((0, s.dj)(e), performance.now(), "space", { surface: "electron", emit: (t) => (0, k.V)(e, t) }),
        N = T?.space,
        q = !1,
        U = new AbortController(),
        $ = () => e.get(C.z$).find((e) => e.localPageId === R),
        H = (a) => {
          let r = { localPageId: R, accountId: j, userId: _, name: t, status: a, response: I, metrics: B, retry: L }
          ;(e.set(P, R, r), null != I && e.set(P, I.id, r))
        },
        L = () => {
          if (null != D) return D
          if (q || U.signal.aborted || null == $())
            return Promise.reject(new DOMException("Space creation cancelled", "AbortError"))
          let s = (0, m.watchSpaceAccount)(e, j, _, S, O),
            g = AbortSignal.any([U.signal, s.signal]),
            k = e.watch(({ get: e }) => {
              e(C.z$).some((e) => e.localPageId === R) || U.abort()
            }),
            F = async () => {
              g.throwIfAborted()
              try {
                let a
                ;(null == N
                  ? ((a = await r(g)), B.creationRequestSucceeded())
                  : (a = await e
                      .get(m.createSpaceMutation$)
                      .mutateAsync({ requestBody: { name: t }, existingSpace: N, signal: g })),
                  g.throwIfAborted(),
                  (I = a),
                  (N = { spaceId: a.id, rootPageId: a.root_page_id }),
                  B.savedIdentity())
              } catch (a) {
                if (
                  (g.throwIfAborted(),
                  null != N &&
                    a instanceof v.FetchError &&
                    ((404 === a.status && "space_not_found" === a.errorCode) || 410 === a.status) &&
                    (await (async function (e, t) {
                      let a,
                        r = new Set()
                      for (;;) {
                        t.throwIfAborted()
                        let n = await w.CodexRequest.safeGet("/spaces/v2", {
                          parameters: { query: { status: "archived", limit: 50, cursor: a } },
                          signal: t,
                        })
                        if (
                          (t.throwIfAborted(),
                          n.items.some(
                            (t) => t.id === e.spaceId && t.root_page_id === e.rootPageId && null != t.deleted_at,
                          ))
                        )
                          return !0
                        if (null == (a = n.next_cursor ?? void 0) || r.has(a)) return !1
                        r.add(a)
                      }
                    })(N, g)))
                ) {
                  ;(g.throwIfAborted(),
                    k(),
                    B.cancel("creation_unavailable"),
                    (0, m.evictCachedDriveSpacePages)(e, N.spaceId, j),
                    (0, C.pu)(e, R),
                    e.set(P, R, void 0),
                    e.get(x, N.spaceId)?.localPageId === R && e.set(P, N.spaceId, void 0),
                    e
                      .get(l.Id)
                      .info(
                        e
                          .get(d.g)
                          .formatMessage({
                            id: "space.teamHome.setupUnavailable",
                            defaultMessage: "This space is no longer available",
                            description: "Shown when an unfinished Space can no longer be opened.",
                          }),
                      ))
                  return
                }
                N = (0, m.pendingSpaceInitialization)(a) ?? N
                let t = $()
                throw (
                  null != N
                    ? (B.savedIdentity(), null != t && (0, C.$q)(e, { ...t, space: N }))
                    : (a instanceof v.FetchError &&
                        a.status >= 400 &&
                        a.status < 500 &&
                        ![408, 499].includes(a.status)) ||
                      (q = !0),
                  B.fail((0, b.XY)(a)),
                  a
                )
              }
              let s = $(),
                o = null != s && !0 !== s.rootInitialized && "server" !== s.rootInitialization
              ;(null != s && (0, C.$q)(e, { ...s, space: N, rootInitialized: !o }),
                (0, m.cacheCreatedSpace)(e, j, I),
                e.query.setData(m.spaceQuery$, I.id, I),
                o || B.rootInitialized(I.root_page_id),
                await e.when(
                  ({ get: e }) =>
                    g.aborted ||
                    !e(C.z$).some((e) => e.localPageId === R) ||
                    e(m.spaceAccountId$) !== j ||
                    e(i.chatGptAuthenticatedUserId$) !== _ ||
                    (void 0 !== S && e(y.jv) !== S) ||
                    e(y.$M) !== O ||
                    !e(p.pagesEnabled$) ||
                    e(u.LM)?.some((e) => e.id === I?.id) === !0,
                ),
                g.throwIfAborted(),
                H("creating"))
              let c = $()?.appearance,
                h = (0, n._R3)(c?.emoji),
                F = null == h ? null : { kind: "icon", value: h, color: (0, f.sj)(c?.theme) ?? "black" }
              if (o || null != F) {
                let { completeSpaceRootSetup: t } = await Promise.all([a.e(753405), a.e(193172), a.e(708398)]).then(
                  a.bind(a, "PluF"),
                )
                g.throwIfAborted()
                let r = await t(e, I, F, o, g)
                ;(g.throwIfAborted(),
                  (I = {
                    ...(e.query.getData(m.spaceQuery$, I.id) ?? I),
                    symbol: r,
                    can_edit_appearance: null == r && I.can_edit_appearance,
                  }),
                  e.query.setData(m.spaceQuery$, I.id, I),
                  (0, m.cacheCreatedSpace)(e, j, I))
                let n = $()
                ;(null != n && (0, C.$q)(e, { ...n, rootInitialized: !0 }), o && B.rootInitialized(I.root_page_id))
              }
              if (null == F && null != c && !0 === I.can_edit_appearance) {
                let t = await w.CodexRequest.safePatch("/spaces/v2/{space_id}/appearance", {
                  parameters: { path: { space_id: I.id } },
                  requestBody: c,
                  signal: g,
                })
                ;(g.throwIfAborted(),
                  (I = { ...(e.query.getData(m.spaceQuery$, I.id) ?? I), appearance: t }),
                  e.query.setData(m.spaceQuery$, I.id, I),
                  (0, m.cacheCreatedSpace)(e, j, I))
              }
              let E = $()
              null != E && (0, C.$q)(e, { ...E, appearance: void 0 })
              let A = $()?.invitations ?? [],
                T = A.filter((e) => "shared" !== e.status)
              if (T.length > 0) {
                let t = await (async function (e, t, a, r, s) {
                  if ((r.throwIfAborted(), 0 === a.length)) return []
                  let o = { type: "space", id: t },
                    l = a.map(({ recipient: e, label: t, secondaryLabel: a, roleId: r }) => ({
                      action: "invite",
                      target: o,
                      recipient: e,
                      roleId: r,
                      invitee: { id: (0, M.hk)(e), label: t, secondaryLabel: a },
                    })),
                    d = new Map(),
                    c = new Set(),
                    p = (e) => {
                      if (r.aborted || c.has(e)) return
                      c.add(e)
                      let t = l.indexOf(e)
                      s?.(t, d.get(e) ?? a[t].recipient)
                    },
                    u = []
                  if (
                    (await e.queryClient
                      .getMutationCache()
                      .build(e.queryClient, {
                        mutationKey: [
                          "space",
                          "save-library-sharing",
                          e.get(i.chatGptAuthenticatedUserId$),
                          e.get(m.spaceAccountId$),
                        ],
                        networkMode: "always",
                        mutationFn: async ({ changes: t }) => {
                          ;(r.throwIfAborted(),
                            await (0, M.X5)(
                              e,
                              t,
                              void 0,
                              void 0,
                              r,
                              (e, t) => d.set(e, t.recipient),
                              (e, t) => {
                                u.push(
                                  t.then(
                                    () => p(e),
                                    () => void 0,
                                  ),
                                )
                              },
                              (e, t) => {
                                ;(d.set(e, t.recipient), p(e))
                              },
                            ))
                        },
                      })
                      .execute({ changes: l }),
                    await (0, n._qC)(Promise.all(u), r),
                    r.throwIfAborted(),
                    c.size < l.length)
                  )
                    try {
                      let t = await (0, M.gv)(e, o, r, !0)
                      ;(r.throwIfAborted(),
                        (0, M.TO)(t) &&
                          l.forEach((e, r) => {
                            let n = d.get(e) ?? a[r].recipient
                            t.shares.some((e) => (0, M.je)(e, n) && e.role_id === a[r].roleId) && p(e)
                          }))
                    } catch {
                      r.throwIfAborted()
                    }
                  return a.map((e, t) => {
                    let a = d.get(l[t]) ?? e.recipient
                    return { ...e, recipient: a, status: c.has(l[t]) ? "shared" : "failed" }
                  })
                })(e, I.id, T, g, (t, a) => {
                  if (g.aborted) return
                  let r = $()
                  if (null != r) {
                    let n = A.indexOf(T[t])
                    ;(0, C.$q)(e, {
                      ...r,
                      invitations: r.invitations.map((e, t) =>
                        t === n ? { ...e, recipient: a, status: "shared" } : e,
                      ),
                    })
                  }
                })
                g.throwIfAborted()
                let a = $()
                if (
                  (null != a && (0, C.$q)(e, { ...a, invitations: [...A.filter((e) => "shared" === e.status), ...t] }),
                  t.some((e) => "failed" === e.status))
                )
                  throw Error("space_creation_invitations_incomplete")
              }
              ;(k(), (0, C.FT)(e, R), H("created"))
            }
          return (
            H("creating"),
            (D = Promise.resolve()
              .then(() =>
                null == navigator.locks
                  ? F()
                  : navigator.locks.request(`space-setup:${JSON.stringify([j, _, R])}`, { signal: g }, F),
              )
              .catch((t) => {
                if (g.aborted)
                  throw (
                    U.abort(),
                    e.set(P, R, void 0),
                    null != I && e.set(P, I.id, void 0),
                    B.cancel(s.signal.aborted ? "account_changed" : "explicit_cancel"),
                    t
                  )
                throw (
                  q ? e.set(P, R, void 0) : H("error"),
                  (0, b.XY)(t) || (0, c.ZD)(e.get(h.YV), "pages.space.create", t),
                  B.fail(),
                  (() => {
                    let { pathname: t, search: a } = e.get(o.gM)
                    e.get(m.spaceAccountId$) === j &&
                      e.get(i.chatGptAuthenticatedUserId$) === _ &&
                      ("/spaces/new" !== t || new URLSearchParams(a).get("creation") !== R) &&
                      e
                        .get(l.Id)
                        .warning(
                          e
                            .get(d.g)
                            .formatMessage({
                              id: "codex.space.sidebar.spaceSetupNeedsAttention",
                              defaultMessage: "Space setup needs attention",
                              description:
                                "Toast displayed when a shared Space setup needs retry or recovery. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                            }),
                        )
                  })(),
                  t
                )
              })
              .finally(() => {
                ;(k(), s.stop(), (D = void 0))
              }))
          )
        }
      return (L().catch(() => {}), R)
    }
  },
  jG6n(e, t, a) {
    var r = a("qmMi"),
      n = a("ASxG"),
      s = a("W0tK"),
      o = a("fXhT"),
      i = a("OWtl"),
      l = a("J9bg"),
      d = a("Kw4a")
    let c = ["to-do-list", "project-tracker"],
      p = (0, r.un)(i.u, ({ get: e }) => (e(d.wu) ? e(l.S, "4051280260") : void 0)),
      u = (0, r.un)(i.u, ({ get: e }) => (e(d.ou) ? e(l.S, "4051280260") : void 0)),
      m = (0, r.un)(i.u, ({ get: e }) => (e(d.xk) ? e(l.b, "4051280260") : void 0)),
      h = n.Ikc({
        submitLabel: n.YjP().trim().min(1).optional(),
        preparingLabel: n.YjP().trim().min(1).optional(),
        freeformPlaceholder: n.YjP().trim().min(1).optional(),
        questions: n
          .YOg(
            n.Ikc({
              question: n.YjP().trim().min(1),
              answerLabel: n.YjP().trim().min(1),
              isOther: n.zMY().optional(),
              options: n
                .YOg(n.Ikc({ id: n.YjP().trim().min(1), value: n.YjP().trim().min(1) }))
                .refine(
                  (e) => new Set(e.map(({ id: e }) => e)).size === e.length,
                  "Each option ID in a question must be unique",
                ),
            }),
          )
          .min(1),
      }),
      f = n.Ikc({
        id: n.YjP().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        title: n.YjP().trim().min(1),
        prompt: n.YjP().trim().min(1),
        prefillPrompt: n.YjP().trim().min(1),
        previewMarkdown: n.YjP().trim().min(1).optional(),
        previewDocument: n
          .YOg(n.Ikc({ kind: n.euz("markdown"), markdown: n.YjP().trim().min(1), layout: o.wS.optional() }))
          .min(1)
          .optional(),
        setupQuestion: n.YjP().trim().min(1).nullish(),
        followUp: h.nullish(),
      }),
      g = n.YOg(f.partial({ title: !0, prompt: !0, prefillPrompt: !0, previewMarkdown: !0 })),
      w = n
        .YOg(n.YjP())
        .min(4)
        .max(10)
        .refine((e) => new Set(e).size === e.length && c.every((t) => e.includes(t))),
      v = n.Ikc({
        templates: g.optional(),
        templatesByLocale: n.g1P(n.YjP().regex(/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/), g).optional(),
      })
    a.d(
      t,
      {},
      {
        CQ: w,
        Hs: function (e, t) {
          let a = v.safeParse(t)
          if (!a.success) return
          if (a.data.templates?.length === 0) return []
          let r = (0, s.bW)(e) ?? "en",
            n = r.split("-")[0],
            o =
              a.data.templatesByLocale?.[r] ?? a.data.templatesByLocale?.[n] ?? ("en" === n ? a.data.templates : void 0)
          if (null != o && new Set(o.map(({ id: e }) => e)).size === o.length) return o
        },
        WN: u,
        Wz: m,
        ql: p,
        xN: g,
        z4: f,
      },
    )
  },
  U6Ok(e, t, a) {
    a.d(t, { l: () => i })
    var r = a("SOEF"),
      n = a("Qgfj"),
      s = a("jG6n")
    let o = s.z4.required({ previewDocument: !0 }).array()
    function i(e, t) {
      let a = (0, s.Hs)(e.locale, t)
      if (a?.length === 0) return []
      let r = { kind: "icon", value: "book", color: "black" },
        n = [
          {
            id: "to-do-list",
            symbol: { kind: "icon", value: "logs", color: "green" },
            title: e.formatMessage(d.todo),
            prompt: e.formatMessage(d.todoPrompt),
            prefillPrompt: e.formatMessage(d.todoPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.todo.preview",
                  defaultMessage: `## Today

### Top priorities

- [ ] Run propulsion test

- [ ] Verify course calculations

- [ ] Inspect fuel tanks

### If time allows

- [ ] Inspect radiation shields

- [ ] Test communication systems

- [ ] Write status report`,
                }),
              },
            ],
          },
          {
            id: "project-tracker",
            symbol: { kind: "icon", value: "bar-chart", color: "blue" },
            title: e.formatMessage(d.projectTracker),
            prompt: e.formatMessage(d.projectTrackerPrompt),
            prefillPrompt: e.formatMessage(d.projectTrackerPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.attentionHeading",
                  defaultMessage: "## \u{1F534} Needs immediate attention",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.attention",
                  defaultMessage: "- Communication systems test for launch",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.milestonesHeading",
                  defaultMessage: "## \u26F0\uFE0F Milestones",
                }),
              },
              {
                kind: "markdown",
                layout: "flexible",
                markdown: e.formatMessage(
                  {
                    id: "space.pageTemplates.projectTracker.preview.milestonesCheckboxes",
                    defaultMessage: `| Milestone | Status |
| - | - |
| '<ul><li data-checked="false"><p>'Project brief'</p></li></ul>' | Complete |
| '<ul><li data-checked="false"><p>'Prototype review'</p></li></ul>' | In progress |
| '<ul><li data-checked="false"><p>'Launch readiness'</p></li></ul>' | Upcoming |`,
                  },
                  {},
                ),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.tasksHeading",
                  defaultMessage: "## \u2705 Tasks",
                }),
              },
              {
                kind: "markdown",
                layout: "flexible",
                markdown: e.formatMessage(
                  {
                    id: "space.pageTemplates.projectTracker.preview.tasksCheckboxes",
                    defaultMessage: `| Task | Owner | Status |
| - | - | - |
| '<ul><li data-checked="false"><p>'Confirm scope'</p></li></ul>' | Product | Done |
| '<ul><li data-checked="false"><p>'Review designs'</p></li></ul>' | Design | In progress |
| '<ul><li data-checked="false"><p>'Test the core flow'</p></li></ul>' | Engineering | Next |
| '<ul><li data-checked="false"><p>'Prepare launch notes'</p></li></ul>' | Marketing | Next |`,
                  },
                  {},
                ),
              },
            ],
          },
          {
            id: "weekly-update",
            symbol: { kind: "icon", value: "writing", color: "pink" },
            title: e.formatMessage(d.weeklyUpdate),
            prompt: e.formatMessage(d.weeklyUpdatePrompt),
            prefillPrompt: e.formatMessage(d.weeklyUpdatePrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.weeklyUpdate.preview",
                  defaultMessage: `## \u{2728} Highlights

- Progress made

## \u{261D}\u{FE0F} Needs attention

- Blockers and decisions needing input

## \u{25B6}\u{FE0F} Next week

- Upcoming milestones and confirmed commitments

## \u{1F517} Sources

- Links to sources`,
                }),
              },
            ],
          },
          {
            id: "feedback-tracker",
            symbol: { kind: "icon", value: "edit", color: "red" },
            title: e.formatMessage(d.feedback),
            prompt: e.formatMessage(d.feedbackPrompt),
            prefillPrompt: e.formatMessage(d.feedbackPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.themesHeading",
                  defaultMessage: "## \u{1F50E} Top themes",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.onboardingTheme",
                  defaultMessage: "1. Make onboarding easier to follow",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.navigationTheme",
                  defaultMessage: "2. Help people find the right resource",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.sharingTheme",
                  defaultMessage: "3. Clarify what happens after sharing",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.registerHeading",
                  defaultMessage: "## \u{1F5C2}\uFE0F Feedback register",
                }),
              },
              {
                kind: "markdown",
                layout: "flexible",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.register",
                  defaultMessage: `| Theme | Source | Next step |
| - | - | - |
| Onboarding | Research notes | Review the first-run flow |
| Navigation | Team channel | Group related resources |
| Sharing | Support email | Clarify confirmation copy |`,
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.summaryHeading",
                  defaultMessage: "## \u{1F4DD} Summary",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.summary",
                  defaultMessage:
                    "People need clearer guidance at key moments. Start with onboarding, then review navigation and sharing.",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.followupsHeading",
                  defaultMessage: "## \u25B6\uFE0F Follow-ups",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.followups",
                  defaultMessage: "- Schedule user interviews for next week",
                }),
              },
            ],
          },
          {
            id: "release-notes",
            symbol: r,
            title: e.formatMessage(d.releaseNotes),
            prompt: e.formatMessage(d.releaseNotesPrompt),
            prefillPrompt: e.formatMessage(d.releaseNotesPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.releaseNotes.preview",
                  defaultMessage: `## \u{1F195} New

- New capabilities and who can use them

## \u{1F3C6} Improvements

- Changes to existing workflows

## \u{1F6E0}\u{FE0F} Fixes

- Resolved issues and their impact

## \u{1F310} Availability

- Supported platforms, rollout status, and known limitations.

## \u{1F517} Sources

- Links to sources`,
                }),
              },
            ],
          },
          {
            id: "project-home",
            symbol: r,
            title: e.formatMessage(d.projectHome),
            prompt: e.formatMessage(d.projectHomePrompt),
            prefillPrompt: e.formatMessage(d.projectHomePrefillPrompt),
            setupQuestion: e.formatMessage({
              id: "space.pageTemplates.projectHome.question",
              defaultMessage: "Which project is this for, and which sources should I use?",
            }),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectHome.preview.intro",
                  defaultMessage: `One place for the team, the plan, and what comes next.

## Overview
Make the next product launch simple, coordinated, and easy to follow.

## Team`,
                }),
              },
              {
                kind: "markdown",
                layout: "flexible",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectHome.preview.team",
                  defaultMessage: `| Responsibility | Team |
| --- | --- |
| Project lead | Product |
| Experience | Design |
| Delivery | Engineering |`,
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectHome.preview.ending",
                  defaultMessage: `## Milestones
- Align on the plan
- Review the first prototype
- Prepare the launch

## Key resources
- Project brief and goals
- Decisions from the team channel
- Research notes and launch checklist

## Latest update
The brief is ready for review. Next up: confirm owners and milestones.`,
                }),
              },
            ],
          },
          {
            id: "faq",
            symbol: r,
            title: e.formatMessage(d.faq),
            prompt: e.formatMessage(d.faqPrompt),
            prefillPrompt: e.formatMessage(d.faqPrefillPrompt),
            setupQuestion: e.formatMessage({
              id: "space.pageTemplates.faq.question",
              defaultMessage: "What topic and audience is this FAQ for, and which sources should I use?",
            }),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.faq.preview",
                  defaultMessage: `Shared answers, grounded in the team's knowledge.

## Getting started
### Where should I start?
Read the project brief for goals, scope, and the people involved.

### Where can I find the latest plan?
The Project Home brings together milestones, resources, and recent decisions.

## Working together
### How do I share feedback?
Add the source discussion and a clear next step to the feedback tracker.

### How are decisions recorded?
Keep the decision, its owner, and supporting context together.

## Open questions
- Who owns the next review?
- Which resources need an update?

## Sources
Project notes, team discussions, and approved guidance.`,
                }),
              },
            ],
          },
        ],
        i = () =>
          n.filter(({ id: e }) => "project-home" !== e && "faq" !== e).map((e) => ({ ...e, ...l(e.previewDocument) }))
      if (null == a) return i()
      let c = o.safeParse(
        a.map((t) => {
          let a =
              n.find(({ id: e }) => e === t.id) ??
              (function (e, t) {
                switch (t) {
                  case "feature-backlog":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.feature-backlog.title",
                        defaultMessage: "Feature backlog",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.feature-backlog.prompt",
                        defaultMessage:
                          "Turn ideas and requests for my product into a feature backlog. Group similar requests, describe the user need, link supporting feedback, and suggest priorities and next decisions. Ask which product if it\u2019s unclear; a few ideas are enough to start. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Update this Page and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.feature-backlog.prefillPrompt",
                        defaultMessage:
                          "Organize a feature backlog for my product, grouping requests by user need and suggesting priorities and next decisions. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Update this Page and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.feature-backlog.preview.1",
                            defaultMessage: `## Ideas and requests
| Idea | User problem | Evidence | Next decision |
| --- | --- | --- | --- |

## Priorities to discuss
Compare impact, effort, and dependencies where known.

## Open questions
Track what needs research or a product decision.`,
                          }),
                        },
                      ],
                    }
                  case "learning-plan":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.learning-plan.title",
                        defaultMessage: "Learning plan",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.learning-plan.prompt",
                        defaultMessage:
                          "Help me make a plan for something I want to learn. Start with what I already know and what I want to be able to do. Break it into manageable steps with useful resources, practice, and a weekly routine. Include space for notes and progress checks. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.learning-plan.prefillPrompt",
                        defaultMessage:
                          "Make a learning plan with a clear goal, useful resources, practice, and a weekly routine. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.learning-plan.preview.overview",
                            defaultMessage: `**Time:** Two 30-minute sessions a week

## \u{1F3AF} Outcome

Locate five major lunar features on a map and explain the difference between a crater and a dark plain in ordinary language.

## \u{1F9E9} Starting point

I can recognize the Moon\u{2019}s broad light and dark areas. I want to connect those patterns with named places.

## \u{1F5FA}\u{FE0F} Learning path`,
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.learning-plan.preview.7",
                            defaultMessage: `| Step | Resource | Practice |
| --- | --- | --- |
| Get oriented | NASA Moon overview | Label five features on a sketch |
| Look closely | A library lunar atlas | Compare two images of one region |
| Explain it | My own notes | Write a 100-word visitor caption |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.learning-plan.preview.practiceAndReview",
                            defaultMessage: `## \u{1F4C5} Weekly rhythm

- [ ] Tuesday: read one short section and draw a sketch.

- [ ] Sunday: revisit the sketch without looking at the labels.

- [ ] Explain one feature to a friend.

## \u{1F4DD} Notebook

**Observation:** The same region can look quite different as shadows change.

**Question:** Which lighting makes a crater\u{2019}s shape easiest to see?

## \u{1F501} Progress check

I can locate three of the five features without the atlas. Compare those three under different lighting, then add two more and repeat the unlabeled sketch.

## \u{1F517} Start here

[NASA Moon overview](https://science.nasa.gov/moon/)`,
                          }),
                        },
                      ],
                    }
                  case "weekly-planner":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.weekly-planner.title",
                        defaultMessage: "Weekly planner",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.weekly-planner.prompt",
                        defaultMessage:
                          "Plan my week around the priorities and commitments I\u2019ve shared. Create a short priority list and a realistic day-by-day plan with suggested focus time and room for rest. Ask what matters most this week if you need a starting point. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.weekly-planner.prefillPrompt",
                        defaultMessage:
                          "Make a realistic weekly plan around my priorities and commitments, with suggested focus time and room for rest. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.weekly-planner.preview.priorities",
                            defaultMessage: `## \u{1F3AF} Priorities

- [ ] Finish the lunar exhibit captions.

- [ ] Confirm volunteer roles for Friday.

- [ ] Leave one evening free of commitments.

## \u{1F5D3}\u{FE0F} Week at a glance`,
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.weekly-planner.preview.6",
                            defaultMessage: `| Day | Main focus | Commitment |
| --- | --- | --- |
| Monday | Caption edits | Review with Leo, 14:00 |
| Tuesday | Final captions and handout draft | Approve the full print set |
| Wednesday | Send approved files to the print shop | Volunteer call, 18:00 |
| Thursday | Collect prints and check the room | Free evening |
| Friday | Open house | Arrive at 17:15 |
| Weekend | Rest and a short walk | Sunday journal time |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.weekly-planner.preview.lifeAndReview",
                            defaultMessage: `## \u{1F3E1} Everyday life

- [ ] Pick up groceries on the way home.

- [ ] Return the library book.

- [ ] Call a friend over the weekend.

## \u{1F4CC} Can wait

The archive\u{2019}s video section and the future talk schedule.

## \u{2728} Weekend review

**What helped:** Did the shared caption review resolve questions before printing?

**What to change:** Note any last-minute printing or role changes to allow for in the next event plan.`,
                          }),
                        },
                      ],
                    }
                  case "trip-planner":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.trip-planner.title",
                        defaultMessage: "Trip planner",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.trip-planner.prompt",
                        defaultMessage:
                          "Make a flexible itinerary and planning checklist using the trip details I\u2019ve shared. Include ideas for activities, transport, and accommodation, keeping confirmed bookings easy to identify. Ask where I\u2019d like to go if needed, or help me choose a destination. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.trip-planner.prefillPrompt",
                        defaultMessage:
                          "Make a flexible trip itinerary and planning checklist, including activities, transport, and accommodation. Help me choose a destination if needed. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.overview",
                            defaultMessage:
                              "**Travelers:** Maya and Sam  \n**Pace:** One main activity a day\n\n## \u{1F9ED} The plan\n\nPlan two nights near a mountain observatory. The visitor tour is the main activity; confirm its availability before choosing transport and accommodation.\n\n## \u{1F686} Travel and stay",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.5",
                            defaultMessage: `| Item | Plan | Status |
| --- | --- | --- |
| Outbound | Friday afternoon train, then local shuttle | Compare departure times |
| Accommodation | Two nights in the village | Choose a flexible booking |
| Return | Sunday afternoon train | Leave time for lunch |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.6",
                            defaultMessage: "## \u{1F5D3}\uFE0F Daily outline",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.7",
                            defaultMessage: `| Day | Main plan | Flexible alternative |
| --- | --- | --- |
| Friday | Arrive and settle in | Short village walk |
| Saturday | Observatory visitor tour | Science museum if tours change |
| Sunday | Easy morning walk | Caf\xe9 and photo journal |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.packingAndNextSteps",
                            defaultMessage: `## \u{1F392} Before leaving

- [ ] Check the visitor schedule, reserve the tour if required, and review the weather before departure.

- [ ] Confirm transport and accommodation.

- [ ] Save tickets and maps offline.

- [ ] Pack warm layers, walking shoes, and a notebook.

## \u{1F4A1} Useful notes

Use a $450 planning allowance for two people: $300 for two nights, $120 for meals, and $30 for local transport. Intercity tickets and any tour fees are additional; confirm actual prices before booking. Keep skywatching optional.`,
                          }),
                        },
                      ],
                    }
                  case "budget-tracker":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.budget-tracker.title",
                        defaultMessage: "Budget tracker",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.budget-tracker.prompt",
                        defaultMessage:
                          "Use relevant financial information from connected apps you can access to build my budget tracker. Organize income and spending, show how they compare, and help me track progress toward my goals. Use the currency shown in my accounts and start with this month unless I specify otherwise. Keep totals for different currencies separate. Use the details I\u2019ve already shared, and ask for missing essentials only after checking the available information. If no financial information is available, start with an editable budget and ask what I\u2019d like to add. Update this Page and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.budget-tracker.prefillPrompt",
                        defaultMessage:
                          "Use financial information from connected apps you can access and details I\u2019ve shared to make a budget tracker for this month. Organize income and spending and track my savings goals, using my accounts\u2019 currencies and keeping their totals separate. If no figures are available, help me start an editable budget. Update this Page and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.budget-tracker.preview.1",
                            defaultMessage: `## Budget period
Add the time period and currency.

## Planned and actual spending
| Category | Planned | Actual | Remaining |
| --- | --- | --- | --- |
| Housing | | | |
| Food | | | |
| Transport | | | |

## Transactions
Add income and expenses with dates and sources.

## Review
Note missing figures and changes for next period.`,
                          }),
                        },
                      ],
                    }
                  case "apartment-hunter":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.apartment-hunter.title",
                        defaultMessage: "Apartment hunter",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.apartment-hunter.prompt",
                        defaultMessage:
                          "Organize my apartment search around my location and rent budget. Compare available listings by rent, fees, availability, and my preferences, with links and next steps. If I haven\u2019t added listings yet, start with search criteria and a comparison table. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Update this Page and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.apartment-hunter.prefillPrompt",
                        defaultMessage:
                          "Help me compare apartments by rent, fees, availability, and my preferences, with listing links and next steps. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Update this Page and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.apartment-hunter.preview.1",
                            defaultMessage: `## Search criteria
Add location, budget, move-in timing, and must-haves.

## Shortlist
| Listing | Rent and fees | Availability | Notes |
| --- | --- | --- | --- |

## Next steps
- [ ] Save listings to compare
- [ ] Prepare questions for a viewing

## Viewing notes
Record observations and questions for each apartment.`,
                          }),
                        },
                      ],
                    }
                  case "event-plan":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.event-plan.title",
                        defaultMessage: "Event Plan",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.event-plan.prompt",
                        defaultMessage:
                          "Make a plan for my event with its purpose, key details, schedule, people involved, and preparation checklist. Include a backup plan and follow-up tasks where useful. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.event-plan.prefillPrompt",
                        defaultMessage:
                          "Help me plan my event, including the schedule, people involved, preparation, and follow-up. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.overview",
                            defaultMessage:
                              "**Time:** 18:00\u201320:00 local time  \n**Place:** Northfield Observatory visitor hall  \n**Lead:** Sam Rivera\n\n## \u{1F319} Purpose\n\nAn informal evening of lunar images, short talks, and questions for first-time visitors.\n\n## \u{1F4CB} Essentials",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.5",
                            defaultMessage: `| Item | Plan |
| --- | --- |
| Capacity | 40 visitors |
| Planning budget | $300 total: $100 printing and $200 refreshments |
| Access | Step-free entrance, seating, large-print handouts |
| Main contact | Sam at the welcome desk |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.6",
                            defaultMessage: "## \u{1F570}\uFE0F Run of show",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.7",
                            defaultMessage: `| Time | Activity | Lead |
| --- | --- | --- |
| 17:15 | Set up and volunteer briefing | Sam |
| 18:00 | Welcome and image gallery | Maya |
| 18:30 | A short tour of the lunar landscape | Priya |
| 19:00 | Indoor questions; outdoor viewing if conditions allow | Priya |
| 20:00 | Close and reset the room | Team |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.preparation",
                            defaultMessage: `## \u{2705} Preparation

- [ ] Sam: confirm the room layout and step-free visitor route.

- [ ] Maya: print 50 handouts and the caption cards before the room check.

- [ ] Priya: confirm the observing setup and brief volunteers on the indoor alternative.

## \u{2601}\u{FE0F} If plans change

At 16:00, Sam confirms whether outdoor viewing will run. The indoor event goes ahead either way. Sam updates the welcome desk and guest message; if viewing is cancelled, Priya extends the indoor questions and image discussion.

## \u{1F4DD} Afterwards

- [ ] Gather short visitor comments.

- [ ] Record useful changes for the next event.`,
                          }),
                        },
                      ],
                    }
                  case "personal-goals":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.personal-goals.title",
                        defaultMessage: "Personal goals",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.personal-goals.prompt",
                        defaultMessage:
                          "Help me turn the goals I care about into a practical plan. Capture why each goal matters, what progress would look like, and a few steps I can take this week. Suggest ways to make time for them and include a short review section. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.personal-goals.prefillPrompt",
                        defaultMessage:
                          "Help me make a plan for my personal goals, with signs of progress, a few steps for this week, and time to review how it\u2019s going. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.personal-goals.preview.overview",
                            defaultMessage: `**Review:** Last Sunday of each month

## \u{1F9ED} What matters

Over the next twelve weeks, learn a few lunar features, finish a photo journal, and keep one evening a week free.

## \u{1F3AF} Goals`,
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.personal-goals.preview.5",
                            defaultMessage: `| Goal | Why | A useful sign of progress |
| --- | --- | --- |
| Learn the lunar landscape | Make skywatching more rewarding | Recognize five named features |
| Make a small photo journal | Finish something tangible | Twelve images with captions |
| Protect unplanned time | Leave room to rest | One free evening each week |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.personal-goals.preview.rhythmAndReview",
                            defaultMessage: `## \u{1F463} This week

- [ ] Borrow a Moon guide from the library.

- [ ] Choose the first three journal images.

- [ ] Keep Thursday evening free.

## \u{1F5D3}\u{FE0F} Make room

Reserve half an hour on Sunday for the journal. Join one astronomy-club evening each month. Pause the second online course until the next review.

## \u{1F501} Monthly review

**Progress:** The journal theme is chosen and twelve images are shortlisted.

**Lesson:** Short sessions are easier to keep than a whole afternoon.

**Adjustment:** Finish one caption each week so all twelve images are ready by the end of this plan.`,
                          }),
                        },
                      ],
                    }
                  default:
                    return
                }
              })(e, t.id),
            r = null == t.prompt ? a?.setupQuestion : void 0,
            s =
              t.prefillPrompt ??
              (null == t.prompt ? a?.prefillPrompt : void 0) ??
              e.formatMessage(d.customPrefillPrompt)
          return {
            ...a,
            ...t,
            prefillPrompt: s,
            previewDocument:
              t.previewDocument ??
              (null == t.previewMarkdown ? a?.previewDocument : [{ kind: "markdown", markdown: t.previewMarkdown }]),
            setupQuestion: void 0 !== t.setupQuestion ? t.setupQuestion : r,
          }
        }),
      )
      return c.success
        ? c.data.map((e) => ({ ...e, symbol: n.find(({ id: t }) => t === e.id)?.symbol ?? r, ...l(e.previewDocument) }))
        : i()
    }
    function l(e) {
      let t = e.flatMap((e) => (0, r.CyG)(e.markdown).map((t) => ({ ...e, markdown: t })))
      return { previewMarkdown: t.map(({ markdown: e }) => e).join("\n\n"), previewDocument: t }
    }
    let d = (0, n.YK)({
      todoPrefillPrompt: {
        id: "space.pageTemplates.todo.prefill.sourceAware",
        defaultMessage:
          "Help me turn this Page into my to-do list. Check relevant conversations and connected apps you can access for things I need to do. If you can\u2019t find enough, ask me what to add. Replace the sample tasks, keep the checkboxes and any edits I\u2019ve made, and don\u2019t invent tasks or deadlines.",
      },
      projectTrackerPrefillPrompt: {
        id: "space.pageTemplates.projectTracker.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page a tracker for my project. Use relevant conversations and connected apps you can access to find milestones and tasks, and ask me for anything missing. Replace the examples, keep my edits, and don\u2019t guess at owners, dates, or statuses.",
      },
      weeklyUpdatePrefillPrompt: {
        id: "space.pageTemplates.weeklyUpdate.prefill.sourceAware",
        defaultMessage:
          "Help me write this week\u2019s update on this Page. Look for progress, blockers, and next steps in relevant conversations and connected apps you can access. Ask which project or week I mean if it\u2019s unclear, and don\u2019t make up accomplishments.",
      },
      feedbackPrefillPrompt: {
        id: "space.pageTemplates.feedback.prefill.sourceAware",
        defaultMessage:
          "Help me organize feedback on this Page. Use relevant conversations and connected apps you can access to find feedback. Ask what product or topic to focus on if it\u2019s unclear, replace the examples with what you find, and don\u2019t invent feedback.",
      },
      releaseNotesPrefillPrompt: {
        id: "space.pageTemplates.releaseNotes.prefill.sourceAware",
        defaultMessage:
          "Help me write release notes on this Page. Check relevant conversations and connected apps you can access for confirmed changes and limitations. Ask which release I mean if it\u2019s unclear, and don\u2019t add unconfirmed details or publish anything.",
      },
      projectHomePrefillPrompt: {
        id: "space.pageTemplates.projectHome.prefill.sourceAware",
        defaultMessage:
          "Help me set up this Project Home Page. Use relevant conversations and connected apps you can access for the project\u2019s goals, team, milestones, and links. Ask me for anything missing, keep my edits, and don\u2019t make up owners or dates.",
      },
      faqPrefillPrompt: {
        id: "space.pageTemplates.faq.prefill.sourceAware",
        defaultMessage:
          "Help me make an FAQ on this Page. Look for trusted answers in relevant conversations and connected apps you can access. Ask who it\u2019s for and what it\u2019s about if unclear, and leave anything unverified as an open question.",
      },
      customPrefillPrompt: {
        id: "space.pageTemplates.custom.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page my own. Use relevant conversations and connected apps you can access, and ask me what I want to add if it\u2019s unclear. Keep my edits and don\u2019t fill in details you can\u2019t verify.",
      },
      weeklyUpdate: { id: "space.pageTemplates.weeklyUpdate.title", defaultMessage: "Weekly update" },
      weeklyUpdatePrompt: {
        id: "space.pageTemplates.weeklyUpdate.setup",
        defaultMessage: `Check my relevant connected apps and create a weekly update suitable for sharing with cross-functional partners, stakeholders, and executives.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      releaseNotes: { id: "space.pageTemplates.releaseNotes.title", defaultMessage: "Release notes" },
      releaseNotesPrompt: {
        id: "space.pageTemplates.releaseNotes.setup",
        defaultMessage: `Check my relevant connected apps and create release notes. Ask which project I would like to create release notes for.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      projectHome: { id: "space.pageTemplates.projectHome.title", defaultMessage: "Project Home" },
      projectHomePrompt: {
        id: "space.pageTemplates.projectHome.setup",
        defaultMessage: `Help me make this Project Home my own. Start working directly in the Page without a setup interview or waiting for confirmation. Choose a project from available context and begin filling it in; the user can redirect you afterward.

If the Page has an Instructions section, collapse it before adding content so it does not push the useful content below the chat, and keep it collapsed when you finish. If that section exists but the available controls cannot change its collapsed state, say so briefly; do not claim it is collapsed. If there is no Instructions section, continue without creating one or mentioning its absence.

Make sure the Page has a title. If it is untitled, use \u{201C}Project Home\u{201D} initially. Preserve an existing title and any user edits.

Before searching connected sources, add an editable starting structure with two sections: Project overview and Essential resources. Include supported details already available in context. Keep this first version compact and useful, without a wall of empty headings or repeated placeholders. Send this brief chat message: \u{201C}I\u{2019}m filling in your Project Home. You can edit any section while I work.\u{201D}

Choose the most relevant project using your best judgment. Prioritize context attached to this Page or its current Space, then recent conversations and project activity. If several projects are plausible, pick the strongest candidate and treat it as a working assumption. Do not stop to ask which project to use or wait for approval before filling in supported details. Choose a real project supported by context; do not invent one. If the initial context provides no candidate, search recent connected sources for one.

Leave one comment explaining the choice: \u{201C}I picked [project] based on [context] and started filling in this Page. If you\u{2019}d like a different project, reply here with its name or a source and I\u{2019}ll switch.\u{201D}

Prefer anchoring this comment to the Page title. If title comments are unsupported, use the first existing content section outside Instructions. If supported, open and focus the comment so it is visible above the chat. Do not claim it is open or focused unless verified. Do not create body content solely to anchor the comment, and do not repeat the project-selection question in the body.

Continue working immediately after leaving the comment. Use the project\u{2019}s Slack channel, relevant emails, project notes, and links to fill in the Page incrementally. Write useful findings as you find them instead of waiting until all research is complete. Add short, scannable sections as evidence becomes available:

- Project overview: what we\u{2019}re building, who it\u{2019}s for, and why it matters
- Team and responsibilities
- Essential resources
- Recent updates
- Upcoming milestones
- Decisions and open questions
- A short guide for someone joining

Cite sources near the claims they support. Prioritize recent sources for status and milestones, and include relevant dates. Distinguish confirmed decisions from proposals, and commitments from completed work. Flag conflicting information rather than silently choosing one version. Do not invent facts or sample records. Keep detailed tasks in a linked tracker if one exists.

Use Open questions only for substantive project unknowns. Label these \u{201C}Needs input\u{201D} or \u{201C}Not yet found\u{201D} where useful. Do not create an Open questions section to ask which project to use. If no real project can be found after a reasonable search, preserve the starting structure and explain the missing context in the single comment rather than fabricating a project.

Use Page comments for focused questions and assumptions. Prefer the title, or the first existing content section outside Instructions if title comments are unsupported. Refer to the relevant section in the comment instead of anchoring questions farther down the Page. Ask only what is needed to move forward, and continue supported work while awaiting answers. If a relevant app isn\u{2019}t connected, offer to connect it and continue with available sources.

When input would help, add one brief, contextual invitation in comments or chat: \u{201C}Add a project brief here with @, or type @ChatGPT, select it from the Page\u{2019}s mention menu, and ask me to use a different project. Use / to add content to the Page.\u{201D} Adapt the example to the actual gap. Do not repeat this guidance in the Page body.

Write using native Page blocks. Check current content before replacing anything, and preserve edits the user makes while you work. When the user names a different project or provides new context, update the relevant sections, revise the choice comment, and remove obsolete content, resolved questions, and unnecessary hints.

Keep chat replies brief and focused on the next step. Do not repeat Page content in chat. Do not imply that the Page is being monitored or updated continuously. Do not send messages or configure recurring updates without asking first.`,
      },
      projectTracker: { id: "space.pageTemplates.projectTracker.title", defaultMessage: "Project tracker" },
      projectTrackerPrompt: {
        id: "space.pageTemplates.projectTracker.setup",
        defaultMessage: `Check my relevant connected apps and create a project tracker. Automatically update every morning at 6am in my browser time zone.

Include checkboxes to the left of the milestones and tasks in the table. This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      todo: { id: "space.pageTemplates.todo.title", defaultMessage: "To-do list" },
      todoPrompt: {
        id: "space.pageTemplates.todo.setup",
        defaultMessage: `Check my relevant connected apps and create a to-do checklist. Automatically update every morning at 6am in my browser time zone: check off completed tasks for me, and carry forward incomplete tasks to the next day.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. Do not add introductory paragraphs, conclusions, coverage summaries, methodology, scheduling details, or explanations of how you maintain the checklist. Avoid boilerplate. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      feedback: { id: "space.pageTemplates.feedback.title", defaultMessage: "Feedback tracker" },
      feedbackPrompt: {
        id: "space.pageTemplates.feedback.setup",
        defaultMessage: `Check my relevant connected apps and create a feedback tracker. Ask which project I would like to track feedback for. Automatically update every morning at 6am in my browser time zone.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      faq: { id: "space.pageTemplates.faq.title", defaultMessage: "FAQ" },
      faqPrompt: {
        id: "space.pageTemplates.faq.setup",
        defaultMessage:
          "Help me make this FAQ my own. Ask for the topic, audience and trusted source notes or links, including relevant Slack discussions and approved guidance. Offer to connect relevant apps when needed. Build the most useful questions with concise supported answers and source links. Combine equivalent questions, keep unanswered or disputed questions visible with an owner or next decision, and keep material freshness qualifiers beside the answers they affect. Link a separate feedback tracker if I have one. Write directly into this Page using native Page blocks, preserving its title and my edits. Do not invent answers or treat unconfirmed replies as authoritative guidance. Keep source-channel replies unsent and automatic updates unconfigured unless I ask to set them up. Ask only the setup questions needed to proceed. Keep chat replies brief and focused on the next step. Organize the Page into short, scannable sections with actionable details. Don't repeat Page content in chat.",
      },
    })
  },
  o72y(e, t, a) {
    var r = a("qmMi"),
      n = a("DBCl"),
      s = a("SPnB"),
      o = a("eFn4"),
      i = a("Kwur"),
      l = a("e1xH"),
      d = a("tv8P"),
      c = a("OWtl"),
      p = a("JYRT")
    let u = (0, r.un)(c.u, ({ get: e }) => e(l.pagesEnabled$) && "allowed" === e(o.lN).status),
      m = (0, r.RD)(c.u, ({ get: e, scope: t }) => {
        let a = e(d.spaceAccountId$),
          r = e(s.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["space", "personalized-pages", a, r],
          enabled: e(u) && null != a && null != r,
          staleTime: 6e4,
          gcTime: 0,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (null == a || null == r) throw Error("space_account_unavailable")
            let s = (0, d.watchSpaceAccount)(t, a, r),
              o = AbortSignal.any([e, s.signal])
            try {
              let e = await i.Request.safeGet("/pages/suggestions", {
                additionalHeaders: { "ChatGPT-Account-ID": a, [n.zBc]: a },
                signal: o,
              })
              return (o.throwIfAborted(), e)
            } finally {
              s.stop()
            }
          },
        }
      }),
      h = (0, r.A4)(
        c.u,
        (e) => Date.parse(e) > Date.now(),
        (e, { set: t }) => {
          let a,
            r = () => {
              let n = Date.parse(e) - Date.now()
              ;(t(n > 0), n > 0 && (a = setTimeout(r, Math.min(n, 0x7fffffff))))
            }
          return (r(), () => clearTimeout(a))
        },
        { autoDispose: !0 },
      ),
      f = (0, r.i1)(c.u, (e, { get: t }) => {
        if (!t(u)) return
        let a = t(p.X, "3798925676")
        if (a?.value["getting-started" === e ? "show_in_getting_started" : "show_in_template_modal"] !== !0) return
        let r = t(m)
        return r.isSuccess ? r.data.suggestions.filter((e) => t(h, e.expires_at)).slice(0, 3) : void 0
      }),
      g = (0, r.un)(
        c.u,
        ({ get: e }) => e(u) && e(p.X, "3798925676")?.value.show_in_template_modal === !0 && e(m).isLoading,
      )
    a.d(t, {}, { BE: g, fH: u, ps: m, x5: f })
  },
  mXik(e, t, a) {
    var r = a("zd8w"),
      n = a("E8Sp"),
      s = a("SPnB"),
      o = a("r9ga"),
      i = a("SEOK")
    a.d(
      t,
      {},
      {
        U: function (
          e,
          t,
          a,
          l,
          d,
          { rootPageId: c, personal: p = !1, rememberCollectionOrigin: u = !0, pagePreview: m, onOpenPage: h } = {},
        ) {
          if (null != h) return void (null == m ? h(d) : h(d, { pagePreview: m }))
          let f = e.get(s.chatGptAuthenticatedUserId$),
            g = null != m && null != l && null != f ? { ...m, accountId: l, userId: f, pageId: d } : void 0,
            w = (r, s) =>
              (0, n.VK)(
                e,
                t,
                r,
                "string" == typeof r && (u || null != g)
                  ? {
                      ...s,
                      ...(null != g && { flushSync: !0 }),
                      state: {
                        ...s?.state,
                        ...(u && { pageListOrigin: { accountId: l, pageId: d, pathname: r, location: a } }),
                        ...(null != g && { pagePreview: g }),
                      },
                    }
                  : s,
              )
          if (null != c) (0, o.C_)(e, w, a, l, c, d)
          else if (p) (0, o.Kt)(e, w, l, d)
          else {
            let t = (0, o.mI)(e, d),
              n = {
                state: {
                  ...(0, i.$)(a, l, d, t),
                  sidebarArea: "space",
                  spaceSidebarAccountId: l,
                  sidebarPrimaryContent: !0,
                },
              }
            ;(0, r.startTransition)(() => {
              w(t, n)
            })
          }
        },
      },
    )
  },
  AOG7(e, t, a) {
    var r = a("QosV"),
      n = a("T0Rc"),
      s = a("UOa8"),
      o = a("rvFo"),
      i = a("kK7d"),
      l = a("GEsy"),
      d = a("eShZ")
    async function c(e, t, a, { includeProfilePhotos: r = !1, includeTotal: n, limit: s = 10 } = {}) {
      return (
        await i.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: s, offset: 0, query: t, include_profile_photos: r, include_total: n },
          },
          signal: a,
        })
      ).items
    }
    a.d(
      t,
      {},
      {
        AB: c,
        C4: async function (e, t, a) {
          let r = t.trim().toLowerCase(),
            n = await c(e, r, a)
          return n.find((e) => e.email?.trim().toLowerCase() === r)?.account_user_id
        },
        Nc: function (e, t) {
          let a,
            d,
            c,
            p,
            u,
            m,
            h = (0, r.c)(18)
          h[0] !== t ? ((a = void 0 === t ? {} : t), (h[0] = t), (h[1] = a)) : (a = h[1])
          let { includeMemberCounts: f } = a,
            g = void 0 !== f && f,
            { accountId: w, authMethod: v } = (0, s.As)()
          h[2] !== e ? ((d = e.trim()), (h[2] = e), (h[3] = d)) : (d = h[3])
          let y = d,
            k = (0, l.o)(y, 150)
          ;(h[4] !== g ? ((c = g ? ["member-counts"] : []), (h[4] = g), (h[5] = c)) : (c = h[5]),
            h[6] !== w || h[7] !== y || h[8] !== c
              ? ((p = ["workspace-groups", w, y, ...c]), (h[6] = w), (h[7] = y), (h[8] = c), (h[9] = p))
              : (p = h[9]))
          let b = ("chatgpt" === v || "chatgptAuthTokens" === v) && null != w && y.length > 0 && y === k
          return (
            h[10] !== w || h[11] !== g || h[12] !== y
              ? ((u = async (e) => {
                  let { signal: t } = e
                  if (null == w) throw Error("account id is required")
                  return (
                    await i.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: w },
                        query: { limit: 10, offset: 0, query: y, include_member_counts: g, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (h[10] = w),
                (h[11] = g),
                (h[12] = y),
                (h[13] = u))
              : (u = h[13]),
            h[14] !== p || h[15] !== b || h[16] !== u
              ? ((m = {
                  queryKey: p,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: o.D.ONE_MINUTE,
                }),
                (h[14] = p),
                (h[15] = b),
                (h[16] = u),
                (h[17] = m))
              : (m = h[17]),
            (0, n.I)(m)
          )
        },
        Nv: function (e, t) {
          let a,
            i,
            d,
            p,
            u,
            m,
            h = (0, r.c)(18)
          h[0] !== t ? ((a = void 0 === t ? {} : t), (h[0] = t), (h[1] = a)) : (a = h[1])
          let { includeProfilePhotos: f } = a,
            g = void 0 !== f && f,
            { accountId: w, authMethod: v } = (0, s.As)()
          h[2] !== e ? ((i = e.trim()), (h[2] = e), (h[3] = i)) : (i = h[3])
          let y = i,
            k = (0, l.o)(y, 150)
          ;(h[4] !== g ? ((d = g ? ["profile-photos"] : []), (h[4] = g), (h[5] = d)) : (d = h[5]),
            h[6] !== w || h[7] !== y || h[8] !== d
              ? ((p = ["workspace-users", w, y, ...d]), (h[6] = w), (h[7] = y), (h[8] = d), (h[9] = p))
              : (p = h[9]))
          let b = ("chatgpt" === v || "chatgptAuthTokens" === v) && null != w && y.length > 0 && y === k
          return (
            h[10] !== w || h[11] !== g || h[12] !== y
              ? ((u = (e) => {
                  let { signal: t } = e
                  if (null == w) throw Error("account id is required")
                  return c(w, y, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: g })
                }),
                (h[10] = w),
                (h[11] = g),
                (h[12] = y),
                (h[13] = u))
              : (u = h[13]),
            h[14] !== p || h[15] !== b || h[16] !== u
              ? ((m = {
                  queryKey: p,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: o.D.ONE_MINUTE,
                }),
                (h[14] = p),
                (h[15] = b),
                (h[16] = u),
                (h[17] = m))
              : (m = h[17]),
            (0, n.I)(m)
          )
        },
        We: async function (e, t, a) {
          try {
            return (
              await i.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: a,
              })
            ).items
          } catch (e) {
            if (!(e instanceof d.FetchError && 404 === e.status)) throw e
          }
          return c(e, t, a)
        },
      },
    )
  },
  aAsK(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      s = a("hwkA"),
      o = a("IUMq"),
      i = a("slpy"),
      l = a("on57"),
      d = a("oyxz"),
      c = a("bVeK"),
      p = a("GpIR")
    function u(e) {
      return e.stopPropagation()
    }
    a.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            a,
            m,
            h,
            f,
            g,
            w,
            v,
            y,
            k,
            b,
            M = (0, n.c)(48),
            {
              alignOffset: F,
              options: C,
              disabled: P,
              footer: x,
              indicatorVariant: E,
              renderLabel: A,
              mixed: T,
              opticallyAlign: I,
              removeLabel: D,
              sideOffset: j,
              size: _,
              variant: O,
              value: S,
              onChange: R,
              onRemoveAccess: B,
            } = e,
            N = void 0 !== P && P,
            q = void 0 === E ? "checkmark" : E,
            U = void 0 !== T && T,
            $ = void 0 === O ? "default" : O,
            H = void 0 === _ ? "sm" : _
          "field" === $ ? (H = "xl") : "audienceReview" === $ && (H = "lg")
          let L = "audienceReview" === $ && p.A.permission
          M[0] !== L ? ((t = (0, l.A)(L, "enabled:text-default")), (M[0] = L), (M[1] = t)) : (t = M[1])
          let z = "field" === $ ? "outline" : "ghost",
            Y = "field" !== $,
            G = "inline" === $ ? "2xs" : void 0
          ;(M[2] !== U || M[3] !== A || M[4] !== S
            ? ((a = U ? (0, r.jsx)(d.A, { id: "shareDialog.mixedRoles", defaultMessage: "Mixed" }) : A(S)),
              (M[2] = U),
              (M[3] = A),
              (M[4] = S),
              (M[5] = a))
            : (a = M[5]),
            M[6] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, r.jsx)(c.Aq_, {})), (M[6] = m)) : (m = M[6]),
            M[7] !== N ||
            M[8] !== I ||
            M[9] !== G ||
            M[10] !== a ||
            M[11] !== t ||
            M[12] !== z ||
            M[13] !== Y ||
            M[14] !== H
              ? ((h = (0, r.jsxs)(s.$, {
                  className: t,
                  color: "secondary",
                  variant: z,
                  size: H,
                  iconSize: "sm",
                  pill: Y,
                  gutterSize: G,
                  opticallyAlign: I,
                  disabled: N,
                  children: [a, m],
                })),
                (M[7] = N),
                (M[8] = I),
                (M[9] = G),
                (M[10] = a),
                (M[11] = t),
                (M[12] = z),
                (M[13] = Y),
                (M[14] = H),
                (M[15] = h))
              : (h = M[15]),
            M[16] !== N || M[17] !== h
              ? ((f = (0, r.jsx)(o.W.Trigger, { disabled: N, children: h })), (M[16] = N), (M[17] = h), (M[18] = f))
              : (f = M[18]))
          let W = U ? "" : S
          if (
            (M[19] !== R || M[20] !== C
              ? ((g = (e) => {
                  let t = C.find((t) => t.value === e)
                  null != t && R?.(t.value)
                }),
                (M[19] = R),
                (M[20] = C),
                (M[21] = g))
              : (g = M[21]),
            M[22] !== N || M[23] !== q || M[24] !== C || M[25] !== A)
          ) {
            let e
            ;(M[27] !== N || M[28] !== q || M[29] !== A
              ? ((e = (e) =>
                  (0, r.jsx)(
                    i.m,
                    {
                      content: e.tooltipText,
                      children: (0, r.jsx)(o.W.RadioItem, {
                        className: "hover:before:opacity-100",
                        indicatorVariant: q,
                        value: e.value,
                        disabled: N || e.disabled,
                        "aria-label": e.ariaLabel,
                        "aria-description": e.description,
                        children: (0, r.jsxs)("span", {
                          className: "flex max-w-64 min-w-0 flex-1 flex-col",
                          children: [
                            (0, r.jsx)("span", { children: A(e.value) }),
                            null == e.description
                              ? null
                              : (0, r.jsx)("span", {
                                  className: "text-sm text-pretty whitespace-normal text-secondary",
                                  children: e.description,
                                }),
                          ],
                        }),
                      }),
                    },
                    e.value,
                  )),
                (M[27] = N),
                (M[28] = q),
                (M[29] = A),
                (M[30] = e))
              : (e = M[30]),
              (w = C.map(e)),
              (M[22] = N),
              (M[23] = q),
              (M[24] = C),
              (M[25] = A),
              (M[26] = w))
          } else w = M[26]
          return (
            M[31] !== W || M[32] !== g || M[33] !== w
              ? ((v = (0, r.jsx)(o.W.RadioGroup, { value: W, onChange: g, children: w })),
                (M[31] = W),
                (M[32] = g),
                (M[33] = w),
                (M[34] = v))
              : (v = M[34]),
            M[35] !== N || M[36] !== B || M[37] !== D
              ? ((y =
                  null == B
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(o.W.Separator, {}),
                          (0, r.jsx)(o.W.Item, { color: "danger", disabled: N, onSelect: B, children: D }),
                        ],
                      })),
                (M[35] = N),
                (M[36] = B),
                (M[37] = D),
                (M[38] = y))
              : (y = M[38]),
            M[39] !== F || M[40] !== x || M[41] !== j || M[42] !== v || M[43] !== y
              ? ((k = (0, r.jsxs)(o.W.Content, {
                  align: "end",
                  alignOffset: F,
                  minWidth: "auto",
                  sideOffset: j,
                  children: [v, y, x],
                })),
                (M[39] = F),
                (M[40] = x),
                (M[41] = j),
                (M[42] = v),
                (M[43] = y),
                (M[44] = k))
              : (k = M[44]),
            M[45] !== f || M[46] !== k
              ? ((b = (0, r.jsx)("span", {
                  className: "inline-flex",
                  role: "presentation",
                  onMouseDown: u,
                  children: (0, r.jsxs)(o.W, { children: [f, k] }),
                })),
                (M[45] = f),
                (M[46] = k),
                (M[47] = b))
              : (b = M[47]),
            b
          )
        },
      },
    )
  },
  glqn(e, t, a) {
    var r = a("aAsK")
    a.d(t, { e: () => r.e })
  },
  LKbA(e, t, a) {
    var r = a("ABep"),
      n = a("QosV"),
      s = a("oyxz")
    a.d(
      t,
      {},
      {
        u: function (e) {
          let t = (0, n.c)(5),
            { permission: a } = e
          switch (a) {
            case "viewer": {
              let e
              return (
                t[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, { id: "shareDialog.role.viewer", defaultMessage: "Viewer" })), (t[0] = e))
                  : (e = t[0]),
                e
              )
            }
            case "commenter": {
              let e
              return (
                t[1] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, { id: "shareDialog.role.commenter", defaultMessage: "Commenter" })),
                    (t[1] = e))
                  : (e = t[1]),
                e
              )
            }
            case "editor": {
              let e
              return (
                t[2] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, { id: "shareDialog.role.editor", defaultMessage: "Editor" })), (t[2] = e))
                  : (e = t[2]),
                e
              )
            }
            case "owner": {
              let e
              return (
                t[3] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, { id: "shareDialog.role.owner", defaultMessage: "Owner" })), (t[3] = e))
                  : (e = t[3]),
                e
              )
            }
            case void 0: {
              let e
              return (
                t[4] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(s.A, { id: "shareDialog.role.unknown", defaultMessage: "Unknown access" })),
                    (t[4] = e))
                  : (e = t[4]),
                e
              )
            }
          }
        },
      },
    )
  },
}
//# sourceMappingURL=315383.260060e7d1.js.map
