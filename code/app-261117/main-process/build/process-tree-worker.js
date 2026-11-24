;(() => {
  var e = {
      776(e, t, r) {
        e.exports = r(84).Symbol
      },
      21(e, t, r) {
        var n = r(776),
          o = r(876),
          i = r(531),
          s = n ? n.toStringTag : void 0
        e.exports = function (e) {
          return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : s && s in Object(e) ? o(e) : i(e)
        }
      },
      251(e) {
        e.exports = function (e, t, r) {
          var n = -1,
            o = e.length
          ;(t < 0 && (t = -t > o ? 0 : o + t),
            (r = r > o ? o : r) < 0 && (r += o),
            (o = t > r ? 0 : (r - t) >>> 0),
            (t >>>= 0))
          for (var i = Array(o); ++n < o;) i[n] = e[n + t]
          return i
        }
      },
      393(e, t, r) {
        var n = r(123),
          o = /^\s+/
        e.exports = function (e) {
          return e ? e.slice(0, n(e) + 1).replace(o, "") : e
        }
      },
      365(e) {
        e.exports = "object" == typeof global && global && global.Object === Object && global
      },
      876(e, t, r) {
        var n = r(776),
          o = Object.prototype,
          i = o.hasOwnProperty,
          s = o.toString,
          u = n ? n.toStringTag : void 0
        e.exports = function (e) {
          var t = i.call(e, u),
            r = e[u]
          try {
            e[u] = void 0
            var n = !0
          } catch (e) {}
          var o = s.call(e)
          return (n && (t ? (e[u] = r) : delete e[u]), o)
        }
      },
      38(e) {
        var t = /^(?:0|[1-9]\d*)$/
        e.exports = function (e, r) {
          var n = typeof e
          return (
            !!(r = null == r ? 0x1fffffffffffff : r) &&
            ("number" == n || ("symbol" != n && t.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < r
          )
        }
      },
      197(e, t, r) {
        var n = r(847),
          o = r(87),
          i = r(38),
          s = r(74)
        e.exports = function (e, t, r) {
          if (!s(r)) return !1
          var u = typeof t
          return ("number" == u ? !!(o(r) && i(t, r.length)) : "string" == u && t in r) && n(r[t], e)
        }
      },
      531(e) {
        var t = Object.prototype.toString
        e.exports = function (e) {
          return t.call(e)
        }
      },
      84(e, t, r) {
        var n = r(365),
          o = "object" == typeof self && self && self.Object === Object && self
        e.exports = n || o || Function("return this")()
      },
      123(e) {
        var t = /\s/
        e.exports = function (e) {
          for (var r = e.length; r-- && t.test(e.charAt(r)););
          return r
        }
      },
      728(e, t, r) {
        var n = r(251),
          o = r(197),
          i = r(40),
          s = Math.ceil,
          u = Math.max
        e.exports = function (e, t, r) {
          t = (r ? o(e, t, r) : void 0 === t) ? 1 : u(i(t), 0)
          var l = null == e ? 0 : e.length
          if (!l || t < 1) return []
          for (var a = 0, p = 0, c = Array(s(l / t)); a < l;) c[p++] = n(e, a, (a += t))
          return c
        }
      },
      847(e) {
        e.exports = function (e, t) {
          return e === t || (e != e && t != t)
        }
      },
      87(e, t, r) {
        var n = r(785),
          o = r(249)
        e.exports = function (e) {
          return null != e && o(e.length) && !n(e)
        }
      },
      785(e, t, r) {
        var n = r(21),
          o = r(74)
        e.exports = function (e) {
          if (!o(e)) return !1
          var t = n(e)
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          )
        }
      },
      249(e) {
        e.exports = function (e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
        }
      },
      74(e) {
        e.exports = function (e) {
          var t = typeof e
          return null != e && ("object" == t || "function" == t)
        }
      },
      653(e) {
        e.exports = function (e) {
          return null != e && "object" == typeof e
        }
      },
      205(e, t, r) {
        var n = r(21),
          o = r(653)
        e.exports = function (e) {
          return "symbol" == typeof e || (o(e) && "[object Symbol]" == n(e))
        }
      },
      35(e, t, r) {
        var n = r(301)
        e.exports = function (e) {
          return e
            ? 1 / 0 === (e = n(e)) || -1 / 0 === e
              ? (e < 0 ? -1 : 1) * 17976931348623157e292
              : e == e
                ? e
                : 0
            : 0 === e
              ? e
              : 0
        }
      },
      40(e, t, r) {
        var n = r(35)
        e.exports = function (e) {
          var t = n(e),
            r = t % 1
          return t == t ? (r ? t - r : t) : 0
        }
      },
      301(e, t, r) {
        var n = r(393),
          o = r(74),
          i = r(205),
          s = /^[-+]0x[0-9a-f]+$/i,
          u = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          a = parseInt
        e.exports = function (e) {
          if ("number" == typeof e) return e
          if (i(e)) return 0 / 0
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e
            e = o(t) ? t + "" : t
          }
          if ("string" != typeof e) return 0 === e ? e : +e
          e = n(e)
          var r = u.test(e)
          return r || l.test(e) ? a(e.slice(2), r ? 2 : 8) : s.test(e) ? 0 / 0 : +e
        }
      },
    },
    t = {}
  function r(n) {
    var o = t[n]
    if (void 0 !== o) return o.exports
    var i = (t[n] = { exports: {} })
    return (e[n](i, i.exports, r), i.exports)
  }
  ;((r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e
    return (r.d(t, { a: t }), t)
  }),
    (r.d = (e, t, n) => {
      var o = (t, n) => {
        for (var o in t) r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, [n]: t[o] })
      }
      ;(o(t, "get"), o(n, "value"))
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict"
      let e = require("node:worker_threads"),
        t = require("node:child_process"),
        n = require("node:util")
      var o = r(728),
        i = r.n(o)
      let s = new Set([
        "BREAKPAD_DUMP_LOCATION",
        "CHROME_CRASHPAD_PIPE_NAME",
        "CRASHPAD_HANDLER_PID",
        "ELECTRON_CRASH_REPORTER_PROCESS_TYPE",
        "__CFBUNDLEIDENTIFIER",
      ])
      function u(e) {
        let t = { ...e }
        for (let e of Object.keys(t)) s.has(e.toUpperCase()) && delete t[e]
        return t
      }
      let l = (0, n.promisify)(t.execFile),
        a = new Map()
      function p(e = process.platform) {
        return "darwin" === e ? "/bin/ps" : "ps"
      }
      function c(e, t) {
        let r = new Map(),
          n = new Map()
        for (let t of e) {
          r.set(t.pid, t)
          let e = n.get(t.parentPid)
          ;(e || ((e = []), n.set(t.parentPid, e)), e.push(t.pid))
        }
        let o = new Set(),
          i = []
        for (let e of t) {
          if (e.includeRoot && r.has(e.pid)) {
            i.push(e.pid)
            continue
          }
          let t = n.get(e.pid)
          t && i.push(...t)
        }
        for (let e = 0; e < i.length; e += 1) {
          let t = i[e]
          if (null == t || o.has(t)) continue
          o.add(t)
          let r = n.get(t)
          r && i.push(...r)
        }
        return o
      }
      let f = e.parentPort
      if (null == f) throw Error("Missing process-tree worker port")
      ;(async function (e) {
        return (async function (e) {
          return (function (e, t) {
            let r = new Map(),
              n = new Map()
            for (let t of e) {
              r.set(t.pid, t)
              let e = n.get(t.parentPid)
              ;(e || ((e = []), n.set(t.parentPid, e)), e.push(t.pid))
            }
            let o = [],
              i = []
            for (let e of t) {
              if (e.includeRoot) {
                i.push({ pid: e.pid, depth: 1, rootChildPid: e.pid })
                continue
              }
              let t = n.get(e.pid)
              t && i.push(...t.map((e) => ({ pid: e, depth: 1, rootChildPid: e })))
            }
            let s = new Set()
            for (let e = 0; e < i.length; e += 1) {
              var u
              let t = i[e]
              if (void 0 === t) continue
              let { pid: l, depth: a, rootChildPid: p } = t
              if (s.has(l)) continue
              s.add(l)
              let c = r.get(l)
              c &&
                o.push({
                  ...c,
                  depth: a,
                  rootChildPid: p,
                  kind:
                    ((u = c.command),
                    /(?:^|[\\/'"-])codex(?:\.exe)?['"]?(?:\s+\S+)*\s+app-server(?:\s|$)/i.test(u)
                      ? "app_server"
                      : /--type=renderer\b/i.test(u)
                        ? "electron_renderer"
                        : /--type=gpu-process\b/i.test(u)
                          ? "electron_gpu"
                          : /--utility-sub-type=network\.mojom\.NetworkService\b/i.test(u)
                            ? "electron_network"
                            : /--utility-sub-type=proxy_resolver\.mojom\.ProxyResolverFactory\b/i.test(u)
                              ? "electron_proxy"
                              : /--type=utility\b/i.test(u) || /\bElectron Helper\b/i.test(u)
                                ? "electron_utility"
                                : /\bmcp(?:\b|[._/-])/i.test(u)
                                  ? "mcp"
                                  : /\bgit\b/i.test(u)
                                    ? "git"
                                    : /\b(?:bash|fish|sh|zsh|pwsh|powershell|cmd(?:\.exe)?)\b/i.test(u)
                                      ? "shell"
                                      : "other"),
                })
              let f = n.get(l)
              f && i.push(...f.map((e) => ({ pid: e, depth: a + 1, rootChildPid: p })))
            }
            return o
          })(
            await (async function (e) {
              if ("win32" === process.platform) {
                var t, r
                let n,
                  o = 1 === e.length ? e[0] : void 0,
                  i = await (async function (e = {}) {
                    return []
                  })({ includeCommandLine: !0, rootPid: o?.includeRoot === !1 ? o.pid : void 0 }),
                  s = c(i, e)
                return (
                  (t = i.filter((e) => s.has(e.pid))),
                  (r = !0),
                  (n = Date.now()),
                  t.map((e) => ({
                    ageSeconds: null == e.creationTimeMs ? null : Math.max(0, Math.floor((n - e.creationTimeMs) / 1e3)),
                    command: r ? (e.commandLine ?? e.executablePath ?? e.executableName) : e.executableName,
                    cpuPercent: (function (e, t) {
                      if (null == e.cpuTimeMs || null == e.creationTimeMs) return null
                      let r = a.get(e.pid)
                      if (null == r && a.size >= 4096) {
                        let e = a.keys().next().value
                        null != e && a.delete(e)
                      }
                      return (a.set(e.pid, {
                        cpuTimeMs: e.cpuTimeMs,
                        creationTimeMs: e.creationTimeMs,
                        observedAtMs: t,
                      }),
                      null == r || r.creationTimeMs !== e.creationTimeMs || t <= r.observedAtMs)
                        ? null
                        : Math.max(0, ((e.cpuTimeMs - r.cpuTimeMs) / (t - r.observedAtMs)) * 100)
                    })(e, n),
                    parentPid: e.parentPid,
                    pid: e.pid,
                    rssKb: null == e.rssBytes ? null : Math.max(0, Math.floor(e.rssBytes / 1024)),
                  }))
                )
              }
              return (async function (e) {
                let t = Array.from(e).sort((e, t) => e - t),
                  r = i()(t, 200)
                return (
                  await Promise.all(
                    r.map(async (e) => {
                      let { stdout: t } = await l(
                        p(),
                        ["-p", e.join(","), "-o", "pid=,ppid=,%cpu=,rss=,lstart=,command="],
                        { encoding: "utf8", env: { ...u(process.env), LC_ALL: "C" }, timeout: 2e3, maxBuffer: 1048576 },
                      )
                      return (function (e) {
                        let t = []
                        for (let r of e.split("\n")) {
                          let e = r.trim()
                          if (!e) continue
                          let n =
                            /^(\d+)\s+(\d+)\s+([\d.]+)\s+(\d+)\s+(\w{3}\s+\w{3}\s+\d{1,2}\s+\d{2}:\d{2}:\d{2}\s+\d{4})\s+(.+)$/.exec(
                              e,
                            )
                          if (!n) continue
                          let o = Number.parseInt(n[1], 10),
                            i = Number.parseInt(n[2], 10),
                            s = Number.parseFloat(n[3]),
                            u = Number.parseInt(n[4], 10)
                          if (!Number.isFinite(o) || !Number.isFinite(i)) continue
                          let l = Date.parse(n[5]),
                            a = Number.isFinite(l) ? Math.max(0, Math.floor((Date.now() - l) / 1e3)) : null
                          t.push({
                            pid: o,
                            parentPid: i,
                            command: n[6].trim(),
                            ageSeconds: a,
                            cpuPercent: Number.isFinite(s) ? Math.max(0, s) : null,
                            rssKb: Number.isFinite(u) ? u : null,
                          })
                        }
                        return t
                      })(t)
                    }),
                  )
                ).flat()
              })(
                c(
                  await (async function () {
                    let { stdout: e } = await l(p(), ["-ax", "-o", "pid=,ppid="], {
                      encoding: "utf8",
                      env: u(process.env),
                      timeout: 2e3,
                      maxBuffer: 1048576,
                    })
                    return (function (e) {
                      let t = []
                      for (let r of e.split("\n")) {
                        let e = r.trim()
                        if (!e) continue
                        let n = /^(\d+)\s+(\d+)$/.exec(e)
                        if (!n) continue
                        let o = Number.parseInt(n[1], 10),
                          i = Number.parseInt(n[2], 10)
                        Number.isFinite(o) && Number.isFinite(i) && t.push({ pid: o, parentPid: i })
                      }
                      return t
                    })(e)
                  })(),
                  e,
                ),
              )
            })(e),
            e,
          )
        })([{ pid: e, includeRoot: !1 }])
      })(process.pid).then((e) => {
        f.postMessage(e)
      })
    })(),
    (module.exports = {}))
})()
//# sourceMappingURL=process-tree-worker.js.map
