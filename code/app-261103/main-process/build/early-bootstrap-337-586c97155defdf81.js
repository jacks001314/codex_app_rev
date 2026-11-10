;((exports.ids = [337]),
  (exports.modules = {
    28452(e, t, r) {
      let s
      ;((t.formatArgs = function (t) {
        if (
          ((t[0] =
            (this.useColors ? "%c" : "") +
            this.namespace +
            (this.useColors ? " %c" : " ") +
            t[0] +
            (this.useColors ? "%c " : " ") +
            "+" +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return
        let r = "color: " + this.color
        t.splice(1, 0, r, "color: inherit")
        let s = 0,
          o = 0
        ;(t[0].replace(/%[a-zA-Z%]/g, (e) => {
          "%%" !== e && (s++, "%c" === e && (o = s))
        }),
          t.splice(o, 0, r))
      }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
          } catch (e) {}
        }),
        (t.load = function () {
          let e
          try {
            e = t.storage.getItem("debug") || t.storage.getItem("DEBUG")
          } catch (e) {}
          return (!e && "u" > typeof process && "env" in process && (e = process.env.DEBUG), e)
        }),
        (t.useColors = function () {
          let e
          return (
            ("u" > typeof window &&
              !!window.process &&
              ("renderer" === window.process.type || !!window.process.__nwjs)) ||
            (!(
              "u" > typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            ) &&
              (("u" > typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ("u" > typeof window &&
                  window.console &&
                  (window.console.firebug || (window.console.exception && window.console.table))) ||
                ("u" > typeof navigator &&
                  navigator.userAgent &&
                  (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
                  parseInt(e[1], 10) >= 31) ||
                ("u" > typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
          )
        }),
        (t.storage = (function () {
          try {
            return localStorage
          } catch (e) {}
        })()),
        (s = !1),
        (t.destroy = () => {
          s ||
            ((s = !0),
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
            ))
        }),
        (t.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (t.log = console.debug || console.log || (() => {})),
        (e.exports = r(9867)(t)))
      let { formatters: o } = e.exports
      o.j = function (e) {
        try {
          return JSON.stringify(e)
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message
        }
      }
    },
    9867(e, t, r) {
      e.exports = function (e) {
        function t(e) {
          let r,
            o,
            n,
            i = null
          function c(...e) {
            if (!c.enabled) return
            let s = Number(new Date())
            ;((c.diff = s - (r || s)),
              (c.prev = r),
              (c.curr = s),
              (r = s),
              (e[0] = t.coerce(e[0])),
              "string" != typeof e[0] && e.unshift("%O"))
            let o = 0
            ;((e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, s) => {
              if ("%%" === r) return "%"
              o++
              let n = t.formatters[s]
              if ("function" == typeof n) {
                let t = e[o]
                ;((r = n.call(c, t)), e.splice(o, 1), o--)
              }
              return r
            })),
              t.formatArgs.call(c, e),
              (c.log || t.log).apply(c, e))
          }
          return (
            (c.namespace = e),
            (c.useColors = t.useColors()),
            (c.color = t.selectColor(e)),
            (c.extend = s),
            (c.destroy = t.destroy),
            Object.defineProperty(c, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () => (null !== i ? i : (o !== t.namespaces && ((o = t.namespaces), (n = t.enabled(e))), n)),
              set: (e) => {
                i = e
              },
            }),
            "function" == typeof t.init && t.init(c),
            c
          )
        }
        function s(e, r) {
          let s = t(this.namespace + (void 0 === r ? ":" : r) + e)
          return ((s.log = this.log), s)
        }
        function o(e, t) {
          let r = 0,
            s = 0,
            o = -1,
            n = 0
          for (; r < e.length;)
            if (s < t.length && (t[s] === e[r] || "*" === t[s])) ("*" === t[s] ? ((o = s), (n = r)) : r++, s++)
            else {
              if (-1 === o) return !1
              ;((s = o + 1), (r = ++n))
            }
          for (; s < t.length && "*" === t[s];) s++
          return s === t.length
        }
        return (
          (t.debug = t),
          (t.default = t),
          (t.coerce = function (e) {
            return e instanceof Error ? e.stack || e.message : e
          }),
          (t.disable = function () {
            let e = [...t.names, ...t.skips.map((e) => "-" + e)].join(",")
            return (t.enable(""), e)
          }),
          (t.enable = function (e) {
            for (let r of (t.save(e),
            (t.namespaces = e),
            (t.names = []),
            (t.skips = []),
            ("string" == typeof e ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean)))
              "-" === r[0] ? t.skips.push(r.slice(1)) : t.names.push(r)
          }),
          (t.enabled = function (e) {
            for (let r of t.skips) if (o(e, r)) return !1
            for (let r of t.names) if (o(e, r)) return !0
            return !1
          }),
          (t.humanize = r(91623)),
          (t.destroy = function () {
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
            )
          }),
          Object.keys(e).forEach((r) => {
            t[r] = e[r]
          }),
          (t.names = []),
          (t.skips = []),
          (t.formatters = {}),
          (t.selectColor = function (e) {
            let r = 0
            for (let t = 0; t < e.length; t++) r = ((r << 5) - r + e.charCodeAt(t)) | 0
            return t.colors[Math.abs(r) % t.colors.length]
          }),
          t.enable(t.load()),
          t
        )
      }
    },
    28104(e, t, r) {
      "u" < typeof process || "renderer" === process.type || !0 === process.browser || process.__nwjs
        ? (e.exports = r(28452))
        : (e.exports = r(78486))
    },
    78486(e, t, r) {
      let s = r(15683),
        o = r(92460)
      ;((t.init = function (e) {
        e.inspectOpts = {}
        let r = Object.keys(t.inspectOpts)
        for (let s = 0; s < r.length; s++) e.inspectOpts[r[s]] = t.inspectOpts[r[s]]
      }),
        (t.log = function (...e) {
          return process.stderr.write(o.formatWithOptions(t.inspectOpts, ...e) + "\n")
        }),
        (t.formatArgs = function (r) {
          let { namespace: s, useColors: o } = this
          if (o) {
            let t = this.color,
              o = "\x1b[3" + (t < 8 ? t : "8;5;" + t),
              n = `  ${o};1m${s} \x1b[0m`
            ;((r[0] = n + r[0].split("\n").join("\n" + n)),
              r.push(o + "m+" + e.exports.humanize(this.diff) + "\x1b[0m"))
          } else r[0] = (t.inspectOpts.hideDate ? "" : new Date().toISOString() + " ") + s + " " + r[0]
        }),
        (t.save = function (e) {
          e ? (process.env.DEBUG = e) : delete process.env.DEBUG
        }),
        (t.load = function () {
          return process.env.DEBUG
        }),
        (t.useColors = function () {
          return "colors" in t.inspectOpts ? !!t.inspectOpts.colors : s.isatty(process.stderr.fd)
        }),
        (t.destroy = o.deprecate(
          () => {},
          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
        )),
        (t.colors = [6, 2, 3, 4, 5, 1]))
      try {
        let e = r(55815)
        e &&
          (e.stderr || e).level >= 2 &&
          (t.colors = [
            20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80,
            81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168,
            169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207,
            208, 209, 214, 215, 220, 221,
          ])
      } catch (e) {}
      ;((t.inspectOpts = Object.keys(process.env)
        .filter((e) => /^debug_/i.test(e))
        .reduce((e, t) => {
          let r = t
              .substring(6)
              .toLowerCase()
              .replace(/_([a-z])/g, (e, t) => t.toUpperCase()),
            s = process.env[t]
          return (
            (s =
              !!/^(yes|on|true|enabled)$/i.test(s) ||
              (!/^(no|off|false|disabled)$/i.test(s) && ("null" === s ? null : Number(s)))),
            (e[r] = s),
            e
          )
        }, {})),
        (e.exports = r(9867)(t)))
      let { formatters: n } = e.exports
      ;((n.o = function (e) {
        return (
          (this.inspectOpts.colors = this.useColors),
          o
            .inspect(e, this.inspectOpts)
            .split("\n")
            .map((e) => e.trim())
            .join(" ")
        )
      }),
        (n.O = function (e) {
          return ((this.inspectOpts.colors = this.useColors), o.inspect(e, this.inspectOpts))
        }))
    },
    38251(e) {
      "use strict"
      e.exports = (e, t = process.argv) => {
        let r = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
          s = t.indexOf(r + e),
          o = t.indexOf("--")
        return -1 !== s && (-1 === o || s < o)
      }
    },
    91623(e) {
      function t(e, t, r, s) {
        return Math.round(e / r) + " " + s + (t >= 1.5 * r ? "s" : "")
      }
      e.exports = function (e, r) {
        r = r || {}
        var s,
          o,
          n,
          i,
          c = typeof e
        if ("string" === c && e.length > 0) {
          var a = e
          if (!((a = String(a)).length > 100)) {
            var l =
              /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                a,
              )
            if (l) {
              var u = parseFloat(l[1])
              switch ((l[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return 315576e5 * u
                case "weeks":
                case "week":
                case "w":
                  return 6048e5 * u
                case "days":
                case "day":
                case "d":
                  return 864e5 * u
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return 36e5 * u
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return 6e4 * u
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return 1e3 * u
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return u
                default:
                  break
              }
            }
          }
          return
        }
        if ("number" === c && isFinite(e)) {
          return r.long
            ? (o = Math.abs((s = e))) >= 864e5
              ? t(s, o, 864e5, "day")
              : o >= 36e5
                ? t(s, o, 36e5, "hour")
                : o >= 6e4
                  ? t(s, o, 6e4, "minute")
                  : o >= 1e3
                    ? t(s, o, 1e3, "second")
                    : s + " ms"
            : (i = Math.abs((n = e))) >= 864e5
              ? Math.round(n / 864e5) + "d"
              : i >= 36e5
                ? Math.round(n / 36e5) + "h"
                : i >= 6e4
                  ? Math.round(n / 6e4) + "m"
                  : i >= 1e3
                    ? Math.round(n / 1e3) + "s"
                    : n + "ms"
        }
        throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
      }
    },
    55815(e, t, r) {
      "use strict"
      let s,
        o = r(89366),
        n = r(15683),
        i = r(38251),
        { env: c } = process
      function a(e, t = {}) {
        var r
        return (
          0 !==
            (r = (function (e, { streamIsTTY: t, sniffFlags: r = !0 } = {}) {
              let n = (function () {
                if ("FORCE_COLOR" in c)
                  return "true" === c.FORCE_COLOR
                    ? 1
                    : "false" === c.FORCE_COLOR
                      ? 0
                      : 0 === c.FORCE_COLOR.length
                        ? 1
                        : Math.min(Number.parseInt(c.FORCE_COLOR, 10), 3)
              })()
              void 0 !== n && (s = n)
              let a = r ? s : n
              if (0 === a) return 0
              if (r) {
                if (i("color=16m") || i("color=full") || i("color=truecolor")) return 3
                if (i("color=256")) return 2
              }
              if (e && !t && void 0 === a) return 0
              let l = a || 0
              if ("dumb" === c.TERM) return l
              if ("win32" === process.platform) {
                let e = o.release().split(".")
                return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? (Number(e[2]) >= 14931 ? 3 : 2) : 1
              }
              if ("CI" in c)
                return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE"].some(
                  (e) => e in c,
                ) || "codeship" === c.CI_NAME
                  ? 1
                  : l
              if ("TEAMCITY_VERSION" in c) return +!!/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(c.TEAMCITY_VERSION)
              if ("truecolor" === c.COLORTERM) return 3
              if ("TERM_PROGRAM" in c) {
                let e = Number.parseInt((c.TERM_PROGRAM_VERSION || "").split(".")[0], 10)
                switch (c.TERM_PROGRAM) {
                  case "iTerm.app":
                    return e >= 3 ? 3 : 2
                  case "Apple_Terminal":
                    return 2
                }
              }
              return /-256(color)?$/i.test(c.TERM)
                ? 2
                : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(c.TERM) || "COLORTERM" in c
                  ? 1
                  : l
            })(e, { streamIsTTY: e && e.isTTY, ...t })) && { level: r, hasBasic: !0, has256: r >= 2, has16m: r >= 3 }
        )
      }
      ;(i("no-color") || i("no-colors") || i("color=false") || i("color=never")
        ? (s = 0)
        : (i("color") || i("colors") || i("color=true") || i("color=always")) && (s = 1),
        (e.exports = { supportsColor: a, stdout: a({ isTTY: n.isatty(1) }), stderr: a({ isTTY: n.isatty(2) }) }))
    },
  }))
//# sourceMappingURL=early-bootstrap-337-586c97155defdf81.js.map
