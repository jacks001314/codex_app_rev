;((exports.ids = [824]),
  (exports.modules = {
    23536(e, t, r) {
      "use strict"
      r.d(t, { sO: () => h, c6: () => m, Zi: () => f, nn: () => c, r5: () => p, hN: () => g, uM: () => d })
      var n = r(89477),
        s = r(86697),
        i = r.n(s),
        o = r(85452)
      let a = `
tick() {
  IFS= read -r -t 5 _
  (( $? > 128 )) || exit 1
}
if [[ -z $2 ]]; then
  printf '1'
  while [[ ! -d $1 ]]; do tick; done
  exit 0
fi
cd -P -- "$2" || exit 0
exec {anchor}<. || exit 1
read_git_marker() {
  marker=''
  local ancestor=$PWD
  while [[ -n $ancestor ]]; do
    if [[ -e $ancestor/.git ]]; then marker=$ancestor; return; fi
    ancestor=$\{ancestor%/*}
  done
}
if [[ $3 == missing ]]; then read_git_marker; previous_marker=$marker; fi
printf '1'
while [[ /proc/self/fd/$anchor -ef $1 ]] && cd -P -- "$1" && [[ $PWD == "$2" ]]; do
  if [[ $3 == missing ]]; then
    read_git_marker
    [[ $marker == "$previous_marker" ]] || break
  fi
  tick
done
`
      async function l(e, t, r) {
        if ((await t.platformFamily()) === "windows") return e
        let n = await (0, o.UH4)(e, t, "pwd", r)
        return null == n ? null : (0, o.DIv)(n)
      }
      function u(e) {
        return "win32" === process.platform && e.startsWith("/") && !e.startsWith("//")
      }
      function c(e, t) {
        return t.isLocal && u(e) ? l(e, t) : (h(e, t) ?? e)
      }
      function d(e, t, r, n) {
        return e.isLocal && u(t)
          ? (s) =>
              (async function (e, t, r, n, s) {
                if ((await e.platformFamily()) === "windows" || n.aborted) return !1
                let i = await l(t, e, n)
                if (null != r && i !== r) return !0
                let o = await e.spawn({
                    args: ["bash", "-p", "-c", a, "codex-git", t, i ?? "", null == r ? "missing" : "linked"],
                    cwd: "/",
                    signal: n,
                    outputBytesCap: 1024,
                    allowedNonZeroExitCodes: [1],
                  }),
                  u = o.stdout.getReader(),
                  c = Promise.all([o.wait(), new Response(o.stderr).arrayBuffer()])
                try {
                  let { done: e } = await u.read()
                  if (!e && null == r && null != i && (await s(i))) return !n.aborted
                  let [{ code: t }] = await c
                  return !n.aborted && 0 === t
                } finally {
                  ;(u.releaseLock(), await o.stdin.close().catch(() => {}), o.kill(), await c)
                }
              })(e, t, r, s, n)
          : null
      }
      function h(e, t) {
        if (!t.isLocal || !i().isAbsolute(e) || u(e)) return e
        try {
          return (0, o.DIv)(n.realpathSync.native(e))
        } catch {
          return null
        }
      }
      function f(e, t, r) {
        if (e !== t) {
          if (r.isLocal && u(e))
            return i().posix.resolve(e) !== t
              ? t
              : (async function (e, t) {
                  let r = await t.spawn({
                    args: [
                      "bash",
                      "-p",
                      "-c",
                      "entry=$1; while [[ -n $entry ]]; do [[ -L $entry ]] && exit 0; entry=${entry%/*}; done; exit 1",
                      "codex-git",
                      e,
                    ],
                    cwd: "/",
                    ...o.YR$,
                    allowedNonZeroExitCodes: [1],
                  })
                  return 0 === (await (0, o.SDF)(r)).code
                })(e, r).then((e) => (e ? t : void 0))
          try {
            let r = i().format(i().parse(e))
            for (; r !== i().dirname(r);) {
              if ((0, n.lstatSync)(r, { throwIfNoEntry: !1 })?.isSymbolicLink()) return t
              r = i().dirname(r)
            }
          } catch {}
        }
      }
      function p(e) {
        if (u(e)) return e
        try {
          return (0, n.realpathSync)(e)
        } catch (t) {
          if (!(t instanceof Error && "code" in t && "ENOENT" === t.code)) return e
        }
        try {
          let t = e
          for (;;) {
            if (((t = i().format(i().parse(t))), null != (0, n.lstatSync)(t, { throwIfNoEntry: !1 })))
              return i().join((0, n.realpathSync)(t), i().relative(t, e))
            let r = i().dirname(t)
            if (r === t) return e
            t = r
          }
        } catch {
          return e
        }
      }
      function m(e) {
        try {
          let t = (0, n.readlinkSync)(e),
            r = i().resolve(i().dirname(e), t)
          return (0, n.existsSync)(r) ? r : null
        } catch {
          return (0, n.existsSync)(e) ? e : null
        }
      }
      function g(e, t, r) {
        let n = r.isLocal ? i() : i().posix,
          s = n.relative(e, t)
        return "" === s || (".." !== s && !s.startsWith(`..${n.sep}`) && !n.isAbsolute(s))
      }
    },
    75959(e, t, r) {
      "use strict"
      var n = r(85452),
        s = r(74487)
      let i = { ...n.FtW, [n.$zB]: "1" },
        o = ["/bin/zsh", "/bin/bash"],
        a = new Map(),
        l = (0, s.vB)("git")
      function u(e) {
        let { [n.$zB]: t, ...r } = e
        return r
      }
      r.d(
        t,
        {},
        {
          V: function (e, t, r, s) {
            if ("win32" === t) return Promise.resolve({ ...r })
            let c = a.get(e.id)
            if (null != c) return c
            let d = (async function (e, t, r) {
              let s = await (async function (e, t) {
                  let r = await (0, n.SDF)(
                    await e.spawn({
                      args: [
                        "sh",
                        "-c",
                        'entry=$(getent passwd "$(id -u)" 2>/dev/null) || entry=$(id -P 2>/dev/null) || exit 1; shell=${entry##*:}; test -n "$shell" || exit 1; printf "%s\\n" "$shell"',
                      ],
                      cwd: t,
                      timeoutMs: 5e3,
                    }),
                  )
                  return 0 !== r.code
                    ? null
                    : (r.stdout
                        .split(/\r?\n/)
                        .map((e) => e.trim())
                        .find((e) => e.length > 0) ?? null)
                })(e, r).catch(() => null),
                a = [s ?? "/bin/sh", ...o.filter((e) => e !== s)],
                c = null
              for (let s of a)
                try {
                  let o = await (0, n.SDF)(await e.spawn({ args: [s, "-ilc", n.nCo], cwd: r, env: i, timeoutMs: 1e4 }))
                  if (0 !== o.code) {
                    c = Error("Login shell exited unsuccessfully")
                    continue
                  }
                  return u({ ...t, ...(0, n.pRA)(o.stdout, "\0") })
                } catch (e) {
                  c = e instanceof Error ? e : Error("Shell env loading failed")
                }
              return (
                l().warning("[local-environment] failed to load shell env", { safe: {}, sensitive: { error: c } }),
                u({ ...t })
              )
            })(e, r, s)
            return (a.set(e.id, d), d)
          },
        },
      )
    },
    93531(e, t, r) {
      "use strict"
      var n = r(86697),
        s = r.n(n)
      r.d(t, { L: () => s.a })
    },
    36816(e, t, r) {
      "use strict"
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var s = Object.getOwnPropertyDescriptor(t, r)
                ;((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, s))
              }
            : function (e, t, r, n) {
                ;(void 0 === n && (n = r), (e[n] = t[r]))
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r)
            return (s(t, e), t)
          }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.req = t.json = t.toBuffer = void 0))
      let o = i(r(9856)),
        a = i(r(2057))
      async function l(e) {
        let t = 0,
          r = []
        for await (let n of e) ((t += n.length), r.push(n))
        return Buffer.concat(r, t)
      }
      ;((t.toBuffer = l),
        (t.json = async function (e) {
          let t = (await l(e)).toString("utf8")
          try {
            return JSON.parse(t)
          } catch (e) {
            throw ((e.message += ` (input: ${t})`), e)
          }
        }),
        (t.req = function (e, t = {}) {
          let r = (("string" == typeof e ? e : e.href).startsWith("https:") ? a : o).request(e, t),
            n = new Promise((e, t) => {
              r.once("response", e).once("error", t).end()
            })
          return ((r.then = n.then.bind(n)), r)
        }))
    },
    78373(e, t, r) {
      "use strict"
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var s = Object.getOwnPropertyDescriptor(t, r)
                ;((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, s))
              }
            : function (e, t, r, n) {
                ;(void 0 === n && (n = r), (e[n] = t[r]))
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r)
            return (s(t, e), t)
          },
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
          }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Agent = void 0))
      let a = i(r(52135)),
        l = i(r(9856)),
        u = r(2057)
      o(r(36816), t)
      let c = Symbol("AgentBaseInternalState")
      class d extends l.Agent {
        constructor(e) {
          ;(super(e), (this[c] = {}))
        }
        isSecureEndpoint(e) {
          if (e) {
            if ("boolean" == typeof e.secureEndpoint) return e.secureEndpoint
            if ("string" == typeof e.protocol) return "https:" === e.protocol
          }
          let { stack: t } = Error()
          return (
            "string" == typeof t &&
            t.split("\n").some((e) => -1 !== e.indexOf("(https.js:") || -1 !== e.indexOf("node:https:"))
          )
        }
        incrementSockets(e) {
          if (1 / 0 === this.maxSockets && 1 / 0 === this.maxTotalSockets) return null
          this.sockets[e] || (this.sockets[e] = [])
          let t = new a.Socket({ writable: !1 })
          return (this.sockets[e].push(t), this.totalSocketCount++, t)
        }
        decrementSockets(e, t) {
          if (!this.sockets[e] || null === t) return
          let r = this.sockets[e],
            n = r.indexOf(t)
          ;-1 !== n && (r.splice(n, 1), this.totalSocketCount--, 0 === r.length && delete this.sockets[e])
        }
        getName(e) {
          return ("boolean" == typeof e.secureEndpoint ? e.secureEndpoint : this.isSecureEndpoint(e))
            ? u.Agent.prototype.getName.call(this, e)
            : super.getName(e)
        }
        createSocket(e, t, r) {
          let n = { ...t, secureEndpoint: this.isSecureEndpoint(t) },
            s = this.getName(n),
            i = this.incrementSockets(s)
          Promise.resolve()
            .then(() => this.connect(e, n))
            .then(
              (o) => {
                if ((this.decrementSockets(s, i), o instanceof l.Agent))
                  try {
                    return o.addRequest(e, n)
                  } catch (e) {
                    return r(e)
                  }
                ;((this[c].currentSocket = o), super.createSocket(e, t, r))
              },
              (e) => {
                ;(this.decrementSockets(s, i), r(e))
              },
            )
        }
        createConnection() {
          let e = this[c].currentSocket
          if (((this[c].currentSocket = void 0), !e)) throw Error("No socket was returned in the `connect()` function")
          return e
        }
        get defaultPort() {
          return this[c].defaultPort ?? ("https:" === this.protocol ? 443 : 80)
        }
        set defaultPort(e) {
          this[c] && (this[c].defaultPort = e)
        }
        get protocol() {
          return this[c].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:")
        }
        set protocol(e) {
          this[c] && (this[c].protocol = e)
        }
      }
      t.Agent = d
    },
    17032(e) {
      "use strict"
      e.exports = {
        mask: (e, t, r, n, s) => {
          for (var i = 0; i < s; i++) r[n + i] = e[i] ^ t[3 & i]
        },
        unmask: (e, t) => {
          let r = e.length
          for (var n = 0; n < r; n++) e[n] ^= t[3 & n]
        },
      }
    },
    28368(e, t, r) {
      "use strict"
      try {
        e.exports = r(24979)(__dirname)
      } catch (t) {
        e.exports = r(17032)
      }
    },
    43338(e, t, r) {
      "use strict"
      let n = r(13200),
        s = r(95485),
        i = r(5981)
      function o(e, t, r) {
        let o = s(e, t, r),
          a = n.spawn(o.command, o.args, o.options)
        return (i.hookChildProcess(a, o), a)
      }
      ;((e.exports = o),
        (e.exports.spawn = o),
        (e.exports.sync = function (e, t, r) {
          let o = s(e, t, r),
            a = n.spawnSync(o.command, o.args, o.options)
          return ((a.error = a.error || i.verifyENOENTSync(a.status, o)), a)
        }),
        (e.exports._parse = s),
        (e.exports._enoent = i))
    },
    5981(e) {
      "use strict"
      let t = "win32" === process.platform
      function r(e, t) {
        return Object.assign(Error(`${t} ${e.command} ENOENT`), {
          code: "ENOENT",
          errno: "ENOENT",
          syscall: `${t} ${e.command}`,
          path: e.command,
          spawnargs: e.args,
        })
      }
      function n(e, n) {
        return t && 1 === e && !n.file ? r(n.original, "spawn") : null
      }
      e.exports = {
        hookChildProcess: function (e, r) {
          if (!t) return
          let s = e.emit
          e.emit = function (t, i) {
            if ("exit" === t) {
              let t = n(i, r)
              if (t) return s.call(e, "error", t)
            }
            return s.apply(e, arguments)
          }
        },
        verifyENOENT: n,
        verifyENOENTSync: function (e, n) {
          return t && 1 === e && !n.file ? r(n.original, "spawnSync") : null
        },
        notFoundError: r,
      }
    },
    95485(e, t, r) {
      "use strict"
      let n = r(62003),
        s = r(49178),
        i = r(75212),
        o = r(48815),
        a = "win32" === process.platform,
        l = /\.(?:com|exe)$/i,
        u = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i
      e.exports = function (e, t, r) {
        t && !Array.isArray(t) && ((r = t), (t = null))
        let c = {
          command: e,
          args: (t = t ? t.slice(0) : []),
          options: (r = Object.assign({}, r)),
          file: void 0,
          original: { command: e, args: t },
        }
        return r.shell
          ? c
          : (function (e) {
              let t
              if (!a) return e
              let r =
                  ((e.file = s(e)),
                  (t = e.file && o(e.file)) ? (e.args.unshift(e.file), (e.command = t), s(e)) : e.file),
                c = !l.test(r)
              if (e.options.forceShell || c) {
                let t = u.test(r)
                ;((e.command = n.normalize(e.command)),
                  (e.command = i.command(e.command)),
                  (e.args = e.args.map((e) => i.argument(e, t))))
                let s = [e.command].concat(e.args).join(" ")
                ;((e.args = ["/d", "/s", "/c", `"${s}"`]),
                  (e.command = process.env.comspec || "cmd.exe"),
                  (e.options.windowsVerbatimArguments = !0))
              }
              return e
            })(c)
      }
    },
    75212(e) {
      "use strict"
      let t = /([()\][%!^"`<>&|;, *?])/g
      ;((e.exports.command = function (e) {
        return e.replace(t, "^$1")
      }),
        (e.exports.argument = function (e, r) {
          return (
            (e = (e = (e = `${e}`).replace(/(?=(\\+?)?)\1"/g, '$1$1\\"')).replace(/(?=(\\+?)?)\1$/, "$1$1")),
            (e = (e = `"${e}"`).replace(t, "^$1")),
            r && (e = e.replace(t, "^$1")),
            e
          )
        }))
    },
    48815(e, t, r) {
      "use strict"
      let n = r(94383),
        s = r(45341)
      e.exports = function (e) {
        let t,
          r = Buffer.alloc(150)
        try {
          ;((t = n.openSync(e, "r")), n.readSync(t, r, 0, 150, 0), n.closeSync(t))
        } catch (e) {}
        return s(r.toString())
      }
    },
    49178(e, t, r) {
      "use strict"
      let n = r(62003),
        s = r(65444),
        i = r(27074)
      function o(e, t) {
        let r,
          o = e.options.env || process.env,
          a = process.cwd(),
          l = null != e.options.cwd,
          u = l && void 0 !== process.chdir && !process.chdir.disabled
        if (u)
          try {
            process.chdir(e.options.cwd)
          } catch (e) {}
        try {
          r = s.sync(e.command, { path: o[i({ env: o })], pathExt: t ? n.delimiter : void 0 })
        } catch (e) {
        } finally {
          u && process.chdir(a)
        }
        return (r && (r = n.resolve(l ? e.options.cwd : "", r)), r)
      }
      e.exports = function (e) {
        return o(e) || o(e, !0)
      }
    },
    97702(e, t, r) {
      "use strict"
      let n = r(62003),
        s = r(13200),
        i = r(43338),
        o = r(87289),
        a = r(15136),
        l = r(50931),
        u = r(72288),
        c = r(38387),
        { spawnedKill: d, spawnedCancel: h, setupTimeout: f, validateTimeout: p, setExitHandler: m } = r(2176),
        { handleInput: g, getSpawnedResult: y, makeAllStream: _, validateInputSync: b } = r(26528),
        { mergePromise: S, getSpawnedPromise: w } = r(23127),
        { joinCommand: v, parseCommand: x, getEscapedCommand: E } = r(38759),
        k = (e, t, r = {}) => {
          let s = i._parse(e, t, r)
          return (
            (e = s.command),
            (t = s.args),
            ((r = {
              maxBuffer: 1e8,
              buffer: !0,
              stripFinalNewline: !0,
              extendEnv: !0,
              preferLocal: !1,
              localDir: (r = s.options).cwd || process.cwd(),
              execPath: process.execPath,
              encoding: "utf8",
              reject: !0,
              cleanup: !0,
              all: !1,
              windowsHide: !0,
              ...r,
            }).env = (({ env: e, extendEnv: t, preferLocal: r, localDir: n, execPath: s }) => {
              let i = t ? { ...process.env, ...e } : e
              return r ? a.env({ env: i, cwd: n, execPath: s }) : i
            })(r)),
            (r.stdio = c(r)),
            "win32" === process.platform && "cmd" === n.basename(e, ".exe") && t.unshift("/q"),
            { file: e, args: t, options: r, parsed: s }
          )
        },
        I = (e, t, r) =>
          "string" == typeof t || Buffer.isBuffer(t) ? (e.stripFinalNewline ? o(t) : t) : void 0 === r ? void 0 : "",
        C = (e, t, r) => {
          let n,
            i = k(e, t, r),
            o = v(e, t),
            a = E(e, t)
          p(i.options)
          try {
            n = s.spawn(i.file, i.args, i.options)
          } catch (e) {
            return S(
              new s.ChildProcess(),
              Promise.reject(
                u({
                  error: e,
                  stdout: "",
                  stderr: "",
                  all: "",
                  command: o,
                  escapedCommand: a,
                  parsed: i,
                  timedOut: !1,
                  isCanceled: !1,
                  killed: !1,
                }),
              ),
            )
          }
          let c = w(n),
            b = f(n, i.options, c),
            x = m(n, i.options, b),
            C = { isCanceled: !1 }
          ;((n.kill = d.bind(null, n.kill.bind(n))), (n.cancel = h.bind(null, n, C)))
          let B = l(async () => {
            let [{ error: e, exitCode: t, signal: r, timedOut: s }, l, c, d] = await y(n, i.options, x),
              h = I(i.options, l),
              f = I(i.options, c),
              p = I(i.options, d)
            if (e || 0 !== t || null !== r) {
              let l = u({
                error: e,
                exitCode: t,
                signal: r,
                stdout: h,
                stderr: f,
                all: p,
                command: o,
                escapedCommand: a,
                parsed: i,
                timedOut: s,
                isCanceled: C.isCanceled,
                killed: n.killed,
              })
              if (!i.options.reject) return l
              throw l
            }
            return {
              command: o,
              escapedCommand: a,
              exitCode: 0,
              stdout: h,
              stderr: f,
              all: p,
              failed: !1,
              timedOut: !1,
              isCanceled: !1,
              killed: !1,
            }
          })
          return (g(n, i.options.input), (n.all = _(n, i.options)), S(n, B))
        }
      ;((e.exports = C),
        (e.exports.sync = (e, t, r) => {
          let n,
            i = k(e, t, r),
            o = v(e, t),
            a = E(e, t)
          b(i.options)
          try {
            n = s.spawnSync(i.file, i.args, i.options)
          } catch (e) {
            throw u({
              error: e,
              stdout: "",
              stderr: "",
              all: "",
              command: o,
              escapedCommand: a,
              parsed: i,
              timedOut: !1,
              isCanceled: !1,
              killed: !1,
            })
          }
          let l = I(i.options, n.stdout, n.error),
            c = I(i.options, n.stderr, n.error)
          if (n.error || 0 !== n.status || null !== n.signal) {
            let e = u({
              stdout: l,
              stderr: c,
              error: n.error,
              signal: n.signal,
              exitCode: n.status,
              command: o,
              escapedCommand: a,
              parsed: i,
              timedOut: n.error && "ETIMEDOUT" === n.error.code,
              isCanceled: !1,
              killed: null !== n.signal,
            })
            if (!i.options.reject) return e
            throw e
          }
          return {
            command: o,
            escapedCommand: a,
            exitCode: 0,
            stdout: l,
            stderr: c,
            failed: !1,
            timedOut: !1,
            isCanceled: !1,
            killed: !1,
          }
        }),
        (e.exports.command = (e, t) => {
          let [r, ...n] = x(e)
          return C(r, n, t)
        }),
        (e.exports.commandSync = (e, t) => {
          let [r, ...n] = x(e)
          return C.sync(r, n, t)
        }),
        (e.exports.node = (e, t, r = {}) => {
          t && !Array.isArray(t) && "object" == typeof t && ((r = t), (t = []))
          let n = c.node(r),
            s = process.execArgv.filter((e) => !e.startsWith("--inspect")),
            { nodePath: i = process.execPath, nodeOptions: o = s } = r
          return C(i, [...o, e, ...(Array.isArray(t) ? t : [])], {
            ...r,
            stdin: void 0,
            stdout: void 0,
            stderr: void 0,
            stdio: n,
            shell: !1,
          })
        }))
    },
    38759(e) {
      "use strict"
      let t = (e, t = []) => (Array.isArray(t) ? [e, ...t] : [e]),
        r = /^[\w.-]+$/,
        n = /"/g,
        s = / +/g
      e.exports = {
        joinCommand: (e, r) => t(e, r).join(" "),
        getEscapedCommand: (e, s) =>
          t(e, s)
            .map((e) => ("string" != typeof e || r.test(e) ? e : `"${e.replace(n, '\\"')}"`))
            .join(" "),
        parseCommand: (e) => {
          let t = []
          for (let r of e.trim().split(s)) {
            let e = t[t.length - 1]
            e && e.endsWith("\\") ? (t[t.length - 1] = `${e.slice(0, -1)} ${r}`) : t.push(r)
          }
          return t
        },
      }
    },
    72288(e, t, r) {
      "use strict"
      let { signalsByName: n } = r(22587)
      e.exports = ({
        stdout: e,
        stderr: t,
        all: r,
        error: s,
        signal: i,
        exitCode: o,
        command: a,
        escapedCommand: l,
        timedOut: u,
        isCanceled: c,
        killed: d,
        parsed: {
          options: { timeout: h },
        },
      }) => {
        o = null === o ? void 0 : o
        let f = void 0 === (i = null === i ? void 0 : i) ? void 0 : n[i].description,
          p = (({
            timedOut: e,
            timeout: t,
            errorCode: r,
            signal: n,
            signalDescription: s,
            exitCode: i,
            isCanceled: o,
          }) =>
            e
              ? `timed out after ${t} milliseconds`
              : o
                ? "was canceled"
                : void 0 !== r
                  ? `failed with ${r}`
                  : void 0 !== n
                    ? `was killed with ${n} (${s})`
                    : void 0 !== i
                      ? `failed with exit code ${i}`
                      : "failed")({
            timedOut: u,
            timeout: h,
            errorCode: s && s.code,
            signal: i,
            signalDescription: f,
            exitCode: o,
            isCanceled: c,
          }),
          m = `Command ${p}: ${a}`,
          g = "[object Error]" === Object.prototype.toString.call(s),
          y = g
            ? `${m}
${s.message}`
            : m,
          _ = [y, t, e].filter(Boolean).join("\n")
        return (
          g ? ((s.originalMessage = s.message), (s.message = _)) : (s = Error(_)),
          (s.shortMessage = y),
          (s.command = a),
          (s.escapedCommand = l),
          (s.exitCode = o),
          (s.signal = i),
          (s.signalDescription = f),
          (s.stdout = e),
          (s.stderr = t),
          void 0 !== r && (s.all = r),
          "bufferedData" in s && delete s.bufferedData,
          (s.failed = !0),
          (s.timedOut = !!u),
          (s.isCanceled = c),
          (s.killed = d && !u),
          s
        )
      }
    },
    2176(e, t, r) {
      "use strict"
      let n = r(89366),
        s = r(46105),
        i = (e, { forceKillAfterTimeout: t }, r) => o(e) && !1 !== t && r,
        o = (e) => e === n.constants.signals.SIGTERM || ("string" == typeof e && "SIGTERM" === e.toUpperCase()),
        a = ({ forceKillAfterTimeout: e = !0 }) => {
          if (!0 === e) return 5e3
          if (!Number.isFinite(e) || e < 0)
            throw TypeError(
              `Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`,
            )
          return e
        }
      e.exports = {
        spawnedKill: (e, t = "SIGTERM", r = {}) => {
          let n = e(t)
          return (
            ((e, t, r, n) => {
              if (!i(t, r, n)) return
              let s = setTimeout(() => {
                e("SIGKILL")
              }, a(r))
              s.unref && s.unref()
            })(e, t, r, n),
            n
          )
        },
        spawnedCancel: (e, t) => {
          e.kill() && (t.isCanceled = !0)
        },
        setupTimeout: (e, { timeout: t, killSignal: r = "SIGTERM" }, n) => {
          let s
          return 0 === t || void 0 === t
            ? n
            : Promise.race([
                new Promise((n, i) => {
                  s = setTimeout(() => {
                    ;(e.kill(r), i(Object.assign(Error("Timed out"), { timedOut: !0, signal: r })))
                  }, t)
                }),
                n.finally(() => {
                  clearTimeout(s)
                }),
              ])
        },
        validateTimeout: ({ timeout: e }) => {
          if (void 0 !== e && (!Number.isFinite(e) || e < 0))
            throw TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)
        },
        setExitHandler: async (e, { cleanup: t, detached: r }, n) => {
          if (!t || r) return n
          let i = s(() => {
            e.kill()
          })
          return n.finally(() => {
            i()
          })
        },
      }
    },
    23127(e) {
      "use strict"
      let t = (async () => {})().constructor.prototype,
        r = ["then", "catch", "finally"].map((e) => [e, Reflect.getOwnPropertyDescriptor(t, e)])
      e.exports = {
        mergePromise: (e, t) => {
          for (let [n, s] of r) {
            let r = "function" == typeof t ? (...e) => Reflect.apply(s.value, t(), e) : s.value.bind(t)
            Reflect.defineProperty(e, n, { ...s, value: r })
          }
          return e
        },
        getSpawnedPromise: (e) =>
          new Promise((t, r) => {
            ;(e.on("exit", (e, r) => {
              t({ exitCode: e, signal: r })
            }),
              e.on("error", (e) => {
                r(e)
              }),
              e.stdin &&
                e.stdin.on("error", (e) => {
                  r(e)
                }))
          }),
      }
    },
    38387(e) {
      "use strict"
      let t = ["stdin", "stdout", "stderr"],
        r = (e) => {
          if (!e) return
          let { stdio: r } = e
          if (void 0 === r) return t.map((t) => e[t])
          if (t.some((t) => void 0 !== e[t]))
            throw Error(
              `It's not possible to provide \`stdio\` in combination with one of ${t.map((e) => `\`${e}\``).join(", ")}`,
            )
          if ("string" == typeof r) return r
          if (!Array.isArray(r))
            throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof r}\``)
          return Array.from({ length: Math.max(r.length, t.length) }, (e, t) => r[t])
        }
      ;((e.exports = r),
        (e.exports.node = (e) => {
          let t = r(e)
          return "ipc" === t
            ? "ipc"
            : void 0 === t || "string" == typeof t
              ? [t, t, t, "ipc"]
              : t.includes("ipc")
                ? t
                : [...t, "ipc"]
        }))
    },
    26528(e, t, r) {
      "use strict"
      let n = r(3174),
        s = r(64194),
        i = r(18813),
        o = async (e, t) => {
          if (e) {
            e.destroy()
            try {
              return await t
            } catch (e) {
              return e.bufferedData
            }
          }
        },
        a = (e, { encoding: t, buffer: r, maxBuffer: n }) => {
          if (e && r) return t ? s(e, { encoding: t, maxBuffer: n }) : s.buffer(e, { maxBuffer: n })
        }
      e.exports = {
        handleInput: (e, t) => {
          void 0 !== t && void 0 !== e.stdin && (n(t) ? t.pipe(e.stdin) : e.stdin.end(t))
        },
        makeAllStream: (e, { all: t }) => {
          if (!t || (!e.stdout && !e.stderr)) return
          let r = i()
          return (e.stdout && r.add(e.stdout), e.stderr && r.add(e.stderr), r)
        },
        getSpawnedResult: async ({ stdout: e, stderr: t, all: r }, { encoding: n, buffer: s, maxBuffer: i }, l) => {
          let u = a(e, { encoding: n, buffer: s, maxBuffer: i }),
            c = a(t, { encoding: n, buffer: s, maxBuffer: i }),
            d = a(r, { encoding: n, buffer: s, maxBuffer: 2 * i })
          try {
            return await Promise.all([l, u, c, d])
          } catch (n) {
            return Promise.all([{ error: n, signal: n.signal, timedOut: n.timedOut }, o(e, u), o(t, c), o(r, d)])
          }
        },
        validateInputSync: ({ input: e }) => {
          if (n(e)) throw TypeError("The `input` option cannot be a stream in sync mode")
        },
      }
    },
    82595(e, t, r) {
      "use strict"
      let { PassThrough: n } = r(76272)
      e.exports = (e) => {
        let { array: t } = (e = { ...e }),
          { encoding: r } = e,
          s = "buffer" === r,
          i = !1
        ;(t ? (i = !(r || s)) : (r = r || "utf8"), s && (r = null))
        let o = new n({ objectMode: i })
        r && o.setEncoding(r)
        let a = 0,
          l = []
        return (
          o.on("data", (e) => {
            ;(l.push(e), i ? (a = l.length) : (a += e.length))
          }),
          (o.getBufferedValue = () => (t ? l : s ? Buffer.concat(l, a) : l.join(""))),
          (o.getBufferedLength = () => a),
          o
        )
      }
    },
    64194(e, t, r) {
      "use strict"
      let { constants: n } = r(1158),
        s = r(76272),
        { promisify: i } = r(92460),
        o = r(82595),
        a = i(s.pipeline)
      class l extends Error {
        constructor() {
          ;(super("maxBuffer exceeded"), (this.name = "MaxBufferError"))
        }
      }
      async function u(e, t) {
        if (!e) throw Error("Expected a stream")
        let { maxBuffer: r } = (t = { maxBuffer: 1 / 0, ...t }),
          s = o(t)
        return (
          await new Promise((t, i) => {
            let o = (e) => {
              ;(e && s.getBufferedLength() <= n.MAX_LENGTH && (e.bufferedData = s.getBufferedValue()), i(e))
            }
            ;((async () => {
              try {
                ;(await a(e, s), t())
              } catch (e) {
                o(e)
              }
            })(),
              s.on("data", () => {
                s.getBufferedLength() > r && o(new l())
              }))
          }),
          s.getBufferedValue()
        )
      }
      ;((e.exports = u),
        (e.exports.buffer = (e, t) => u(e, { ...t, encoding: "buffer" })),
        (e.exports.array = (e, t) => u(e, { ...t, array: !0 })),
        (e.exports.MaxBufferError = l))
    },
    39917(e, t) {
      "use strict"
      ;(Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SIGNALS = void 0),
        (t.SIGNALS = [
          { name: "SIGHUP", number: 1, action: "terminate", description: "Terminal closed", standard: "posix" },
          {
            name: "SIGINT",
            number: 2,
            action: "terminate",
            description: "User interruption with CTRL-C",
            standard: "ansi",
          },
          {
            name: "SIGQUIT",
            number: 3,
            action: "core",
            description: "User interruption with CTRL-\\",
            standard: "posix",
          },
          { name: "SIGILL", number: 4, action: "core", description: "Invalid machine instruction", standard: "ansi" },
          { name: "SIGTRAP", number: 5, action: "core", description: "Debugger breakpoint", standard: "posix" },
          { name: "SIGABRT", number: 6, action: "core", description: "Aborted", standard: "ansi" },
          { name: "SIGIOT", number: 6, action: "core", description: "Aborted", standard: "bsd" },
          {
            name: "SIGBUS",
            number: 7,
            action: "core",
            description: "Bus error due to misaligned, non-existing address or paging error",
            standard: "bsd",
          },
          {
            name: "SIGEMT",
            number: 7,
            action: "terminate",
            description: "Command should be emulated but is not implemented",
            standard: "other",
          },
          {
            name: "SIGFPE",
            number: 8,
            action: "core",
            description: "Floating point arithmetic error",
            standard: "ansi",
          },
          {
            name: "SIGKILL",
            number: 9,
            action: "terminate",
            description: "Forced termination",
            standard: "posix",
            forced: !0,
          },
          {
            name: "SIGUSR1",
            number: 10,
            action: "terminate",
            description: "Application-specific signal",
            standard: "posix",
          },
          { name: "SIGSEGV", number: 11, action: "core", description: "Segmentation fault", standard: "ansi" },
          {
            name: "SIGUSR2",
            number: 12,
            action: "terminate",
            description: "Application-specific signal",
            standard: "posix",
          },
          { name: "SIGPIPE", number: 13, action: "terminate", description: "Broken pipe or socket", standard: "posix" },
          { name: "SIGALRM", number: 14, action: "terminate", description: "Timeout or timer", standard: "posix" },
          { name: "SIGTERM", number: 15, action: "terminate", description: "Termination", standard: "ansi" },
          {
            name: "SIGSTKFLT",
            number: 16,
            action: "terminate",
            description: "Stack is empty or overflowed",
            standard: "other",
          },
          {
            name: "SIGCHLD",
            number: 17,
            action: "ignore",
            description: "Child process terminated, paused or unpaused",
            standard: "posix",
          },
          {
            name: "SIGCLD",
            number: 17,
            action: "ignore",
            description: "Child process terminated, paused or unpaused",
            standard: "other",
          },
          { name: "SIGCONT", number: 18, action: "unpause", description: "Unpaused", standard: "posix", forced: !0 },
          { name: "SIGSTOP", number: 19, action: "pause", description: "Paused", standard: "posix", forced: !0 },
          {
            name: "SIGTSTP",
            number: 20,
            action: "pause",
            description: 'Paused using CTRL-Z or "suspend"',
            standard: "posix",
          },
          {
            name: "SIGTTIN",
            number: 21,
            action: "pause",
            description: "Background process cannot read terminal input",
            standard: "posix",
          },
          {
            name: "SIGBREAK",
            number: 21,
            action: "terminate",
            description: "User interruption with CTRL-BREAK",
            standard: "other",
          },
          {
            name: "SIGTTOU",
            number: 22,
            action: "pause",
            description: "Background process cannot write to terminal output",
            standard: "posix",
          },
          {
            name: "SIGURG",
            number: 23,
            action: "ignore",
            description: "Socket received out-of-band data",
            standard: "bsd",
          },
          { name: "SIGXCPU", number: 24, action: "core", description: "Process timed out", standard: "bsd" },
          { name: "SIGXFSZ", number: 25, action: "core", description: "File too big", standard: "bsd" },
          { name: "SIGVTALRM", number: 26, action: "terminate", description: "Timeout or timer", standard: "bsd" },
          { name: "SIGPROF", number: 27, action: "terminate", description: "Timeout or timer", standard: "bsd" },
          {
            name: "SIGWINCH",
            number: 28,
            action: "ignore",
            description: "Terminal window size changed",
            standard: "bsd",
          },
          { name: "SIGIO", number: 29, action: "terminate", description: "I/O is available", standard: "other" },
          { name: "SIGPOLL", number: 29, action: "terminate", description: "Watched event", standard: "other" },
          {
            name: "SIGINFO",
            number: 29,
            action: "ignore",
            description: "Request for process information",
            standard: "other",
          },
          {
            name: "SIGPWR",
            number: 30,
            action: "terminate",
            description: "Device running out of power",
            standard: "systemv",
          },
          { name: "SIGSYS", number: 31, action: "core", description: "Invalid system call", standard: "other" },
          { name: "SIGUNUSED", number: 31, action: "terminate", description: "Invalid system call", standard: "other" },
        ]))
    },
    22587(e, t, r) {
      "use strict"
      let n
      t.signalsByName = void 0
      var s = r(89366),
        i = r(29421),
        o = r(20871)
      t.signalsByName = (0, i.getSignals)().reduce(function (
        e,
        { name: t, number: r, description: n, supported: s, action: i, forced: o, standard: a },
      ) {
        return { ...e, [t]: { name: t, number: r, description: n, supported: s, action: i, forced: o, standard: a } }
      }, {})
      let a = function (e, t) {
          let r = l(e, t)
          if (void 0 === r) return {}
          let { name: n, description: s, supported: i, action: o, forced: a, standard: u } = r
          return { [e]: { name: n, number: e, description: s, supported: i, action: o, forced: a, standard: u } }
        },
        l = function (e, t) {
          let r = t.find(({ name: t }) => s.constants.signals[t] === e)
          return void 0 !== r ? r : t.find((t) => t.number === e)
        }
      ;((n = (0, i.getSignals)()), Object.assign({}, ...Array.from({ length: o.SIGRTMAX + 1 }, (e, t) => a(t, n))))
    },
    20871(e, t) {
      "use strict"
      ;(Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SIGRTMAX = t.getRealtimeSignals = void 0),
        (t.getRealtimeSignals = function () {
          return Array.from({ length: s - n + 1 }, r)
        }))
      let r = function (e, t) {
          return {
            name: `SIGRT${t + 1}`,
            number: n + t,
            action: "terminate",
            description: "Application-specific signal (realtime)",
            standard: "posix",
          }
        },
        n = 34,
        s = 64
      t.SIGRTMAX = 64
    },
    29421(e, t, r) {
      "use strict"
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.getSignals = void 0))
      var n = r(89366),
        s = r(39917),
        i = r(20871)
      t.getSignals = function () {
        let e = (0, i.getRealtimeSignals)()
        return [...s.SIGNALS, ...e].map(o)
      }
      let o = function ({ name: e, number: t, description: r, action: s, forced: i = !1, standard: o }) {
        let {
            signals: { [e]: a },
          } = n.constants,
          l = void 0 !== a
        return { name: e, number: l ? a : t, description: r, supported: l, action: s, forced: i, standard: o }
      }
    },
    25935(e, t) {
      "use strict"
      ;(Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddressError = void 0),
        (t.AddressError = class extends Error {
          constructor(e, t) {
            ;(super(e), (this.name = "AddressError"), (this.parseMessage = t))
          }
        }))
    },
    42503(e, t) {
      "use strict"
      function r(e) {
        return e.toString(16).padStart(2, "0")
      }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInSubnet = function (e) {
          return !(this.subnetMask < e.subnetMask) && this.mask(e.subnetMask) === e.mask()
        }),
        (t.isCorrect = function (e) {
          return function () {
            return (
              this.addressMinusSuffix === this.correctForm() &&
              ((this.subnetMask === e && !this.parsedSubnet) || this.parsedSubnet === String(this.subnetMask))
            )
          }
        }),
        (t.numberToPaddedHex = r),
        (t.stringToPaddedHex = function (e) {
          return r(parseInt(e, 10))
        }),
        (t.testBit = function (e, t) {
          let { length: r } = e
          if (t > r) return !1
          let n = r - t
          return "1" === e.substring(n, n + 1)
        }))
    },
    42966(e, t, r) {
      "use strict"
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var s = Object.getOwnPropertyDescriptor(t, r)
                ;((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, s))
              }
            : function (e, t, r, n) {
                ;(void 0 === n && (n = r), (e[n] = t[r]))
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r)
            return (s(t, e), t)
          }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.v6 = t.AddressError = t.Address6 = t.Address4 = void 0))
      var o = r(1621)
      Object.defineProperty(t, "Address4", {
        enumerable: !0,
        get: function () {
          return o.Address4
        },
      })
      var a = r(3027)
      Object.defineProperty(t, "Address6", {
        enumerable: !0,
        get: function () {
          return a.Address6
        },
      })
      var l = r(25935)
      ;(Object.defineProperty(t, "AddressError", {
        enumerable: !0,
        get: function () {
          return l.AddressError
        },
      }),
        (t.v6 = { helpers: i(r(64356)) }))
    },
    1621(e, t, r) {
      "use strict"
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var s = Object.getOwnPropertyDescriptor(t, r)
                ;((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, s))
              }
            : function (e, t, r, n) {
                ;(void 0 === n && (n = r), (e[n] = t[r]))
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r)
            return (s(t, e), t)
          }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Address4 = void 0))
      let o = i(r(42503)),
        a = i(r(81994)),
        l = r(25935)
      t.Address4 = class e {
        constructor(e) {
          ;((this.groups = a.GROUPS),
            (this.parsedAddress = []),
            (this.parsedSubnet = ""),
            (this.subnet = "/32"),
            (this.subnetMask = 32),
            (this.v4 = !0),
            (this.isCorrect = o.isCorrect(a.BITS)),
            (this.isInSubnet = o.isInSubnet),
            (this.address = e))
          let t = a.RE_SUBNET_STRING.exec(e)
          if (t) {
            if (
              ((this.parsedSubnet = t[0].replace("/", "")),
              (this.subnetMask = parseInt(this.parsedSubnet, 10)),
              (this.subnet = `/${this.subnetMask}`),
              this.subnetMask < 0 || this.subnetMask > a.BITS)
            )
              throw new l.AddressError("Invalid subnet mask.")
            e = e.replace(a.RE_SUBNET_STRING, "")
          }
          ;((this.addressMinusSuffix = e), (this.parsedAddress = this.parse(e)))
        }
        static isValid(t) {
          try {
            return (new e(t), !0)
          } catch (e) {
            return !1
          }
        }
        parse(e) {
          let t = e.split(".")
          if (!e.match(a.RE_ADDRESS)) throw new l.AddressError("Invalid IPv4 address.")
          return t
        }
        correctForm() {
          return this.parsedAddress.map((e) => parseInt(e, 10)).join(".")
        }
        static fromHex(t) {
          let r,
            n = t.replace(/:/g, "").padStart(8, "0"),
            s = []
          for (r = 0; r < 8; r += 2) {
            let e = n.slice(r, r + 2)
            s.push(parseInt(e, 16))
          }
          return new e(s.join("."))
        }
        static fromInteger(t) {
          return e.fromHex(t.toString(16))
        }
        static fromArpa(t) {
          return new e(
            t
              .replace(/(\.in-addr\.arpa)?\.$/, "")
              .split(".")
              .reverse()
              .join("."),
          )
        }
        toHex() {
          return this.parsedAddress.map((e) => o.stringToPaddedHex(e)).join(":")
        }
        toArray() {
          return this.parsedAddress.map((e) => parseInt(e, 10))
        }
        toGroup6() {
          let e,
            t = []
          for (e = 0; e < a.GROUPS; e += 2)
            t.push(`${o.stringToPaddedHex(this.parsedAddress[e])}${o.stringToPaddedHex(this.parsedAddress[e + 1])}`)
          return t.join(":")
        }
        bigInt() {
          return BigInt(`0x${this.parsedAddress.map((e) => o.stringToPaddedHex(e)).join("")}`)
        }
        _startAddress() {
          return BigInt(`0b${this.mask() + "0".repeat(a.BITS - this.subnetMask)}`)
        }
        startAddress() {
          return e.fromBigInt(this._startAddress())
        }
        startAddressExclusive() {
          let t = BigInt("1")
          return e.fromBigInt(this._startAddress() + t)
        }
        _endAddress() {
          return BigInt(`0b${this.mask() + "1".repeat(a.BITS - this.subnetMask)}`)
        }
        endAddress() {
          return e.fromBigInt(this._endAddress())
        }
        endAddressExclusive() {
          let t = BigInt("1")
          return e.fromBigInt(this._endAddress() - t)
        }
        static fromBigInt(t) {
          return e.fromHex(t.toString(16))
        }
        static fromByteArray(e) {
          if (4 !== e.length) throw new l.AddressError("IPv4 addresses require exactly 4 bytes")
          for (let t = 0; t < e.length; t++)
            if (!Number.isInteger(e[t]) || e[t] < 0 || e[t] > 255)
              throw new l.AddressError("All bytes must be integers between 0 and 255")
          return this.fromUnsignedByteArray(e)
        }
        static fromUnsignedByteArray(t) {
          if (4 !== t.length) throw new l.AddressError("IPv4 addresses require exactly 4 bytes")
          return new e(t.join("."))
        }
        mask(e) {
          return (void 0 === e && (e = this.subnetMask), this.getBitsBase2(0, e))
        }
        getBitsBase2(e, t) {
          return this.binaryZeroPad().slice(e, t)
        }
        reverseForm(e) {
          e || (e = {})
          let t = this.correctForm().split(".").reverse().join(".")
          return e.omitSuffix ? t : `${t}.in-addr.arpa.`
        }
        isMulticast() {
          return this.isInSubnet(new e("224.0.0.0/4"))
        }
        binaryZeroPad() {
          return this.bigInt().toString(2).padStart(a.BITS, "0")
        }
        groupForV6() {
          let e = this.parsedAddress
          return this.address.replace(
            a.RE_ADDRESS,
            `<span class="hover-group group-v4 group-6">${e.slice(0, 2).join(".")}</span>.<span class="hover-group group-v4 group-7">${e.slice(2, 4).join(".")}</span>`,
          )
        }
      }
    },
    3027(e, t, r) {
      "use strict"
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var s = Object.getOwnPropertyDescriptor(t, r)
                ;((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, s))
              }
            : function (e, t, r, n) {
                ;(void 0 === n && (n = r), (e[n] = t[r]))
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r)
            return (s(t, e), t)
          }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.Address6 = void 0))
      let o = i(r(42503)),
        a = i(r(81994)),
        l = i(r(704)),
        u = i(r(64356)),
        c = r(1621),
        d = r(331),
        h = r(25935),
        f = r(42503)
      function p(e) {
        if (!e) throw Error("Assertion failed.")
      }
      function m(e) {
        return (e = e.replace(/^(0{1,})([1-9]+)$/, '<span class="parse-error">$1</span>$2')).replace(
          /^(0{1,})(0)$/,
          '<span class="parse-error">$1</span>$2',
        )
      }
      function g(e) {
        return parseInt(e, 16).toString(16).padStart(4, "0")
      }
      function y(e) {
        return 255 & e
      }
      t.Address6 = class e {
        constructor(e, t) {
          ;((this.addressMinusSuffix = ""),
            (this.parsedSubnet = ""),
            (this.subnet = "/128"),
            (this.subnetMask = 128),
            (this.v4 = !1),
            (this.zone = ""),
            (this.isInSubnet = o.isInSubnet),
            (this.isCorrect = o.isCorrect(l.BITS)),
            void 0 === t ? (this.groups = l.GROUPS) : (this.groups = t),
            (this.address = e))
          let r = l.RE_SUBNET_STRING.exec(e)
          if (r) {
            if (
              ((this.parsedSubnet = r[0].replace("/", "")),
              (this.subnetMask = parseInt(this.parsedSubnet, 10)),
              (this.subnet = `/${this.subnetMask}`),
              Number.isNaN(this.subnetMask) || this.subnetMask < 0 || this.subnetMask > l.BITS)
            )
              throw new h.AddressError("Invalid subnet mask.")
            e = e.replace(l.RE_SUBNET_STRING, "")
          } else if (/\//.test(e)) throw new h.AddressError("Invalid subnet mask.")
          let n = l.RE_ZONE_STRING.exec(e)
          ;(n && ((this.zone = n[0]), (e = e.replace(l.RE_ZONE_STRING, ""))),
            (this.addressMinusSuffix = e),
            (this.parsedAddress = this.parse(this.addressMinusSuffix)))
        }
        static isValid(t) {
          try {
            return (new e(t), !0)
          } catch (e) {
            return !1
          }
        }
        static fromBigInt(t) {
          let r,
            n = t.toString(16).padStart(32, "0"),
            s = []
          for (r = 0; r < l.GROUPS; r++) s.push(n.slice(4 * r, (r + 1) * 4))
          return new e(s.join(":"))
        }
        static fromURL(t) {
          let r,
            n,
            s = null
          if (-1 !== t.indexOf("[") && -1 !== t.indexOf("]:")) {
            if (null === (n = l.RE_URL_WITH_PORT.exec(t)))
              return { error: "failed to parse address with port", address: null, port: null }
            ;((r = n[1]), (s = n[2]))
          } else if (-1 !== t.indexOf("/")) {
            if (((t = t.replace(/^[a-z0-9]+:\/\//, "")), null === (n = l.RE_URL.exec(t))))
              return { error: "failed to parse address from URL", address: null, port: null }
            r = n[1]
          } else r = t
          return (
            s ? ((s = parseInt(s, 10)) < 0 || s > 65536) && (s = null) : (s = null),
            { address: new e(r), port: s }
          )
        }
        static fromAddress4(t) {
          let r = new c.Address4(t),
            n = l.BITS - (a.BITS - r.subnetMask)
          return new e(`::ffff:${r.correctForm()}/${n}`)
        }
        static fromArpa(t) {
          let r = t.replace(/(\.ip6\.arpa)?\.$/, "")
          if (63 !== r.length) throw new h.AddressError("Invalid 'ip6.arpa' form.")
          let n = r.split(".").reverse()
          for (let e = 7; e > 0; e--) {
            let t = 4 * e
            n.splice(t, 0, ":")
          }
          return new e((r = n.join("")))
        }
        microsoftTranscription() {
          return `${this.correctForm().replace(/:/g, "-")}.ipv6-literal.net`
        }
        mask(e = this.subnetMask) {
          return this.getBitsBase2(0, e)
        }
        possibleSubnets(e = 128) {
          let t = l.BITS - this.subnetMask - Math.abs(e - l.BITS)
          if (t < 0) return "0"
          var r = (BigInt("2") ** BigInt(t)).toString(10)
          let n = /(\d+)(\d{3})/
          for (; n.test(r);) r = r.replace(n, "$1,$2")
          return r
        }
        _startAddress() {
          return BigInt(`0b${this.mask() + "0".repeat(l.BITS - this.subnetMask)}`)
        }
        startAddress() {
          return e.fromBigInt(this._startAddress())
        }
        startAddressExclusive() {
          let t = BigInt("1")
          return e.fromBigInt(this._startAddress() + t)
        }
        _endAddress() {
          return BigInt(`0b${this.mask() + "1".repeat(l.BITS - this.subnetMask)}`)
        }
        endAddress() {
          return e.fromBigInt(this._endAddress())
        }
        endAddressExclusive() {
          let t = BigInt("1")
          return e.fromBigInt(this._endAddress() - t)
        }
        getScope() {
          let e = l.SCOPES[parseInt(this.getBits(12, 16).toString(10), 10)]
          return ("Global unicast" === this.getType() && "Link local" !== e && (e = "Global"), e || "Unknown")
        }
        getType() {
          for (let t of Object.keys(l.TYPES)) if (this.isInSubnet(new e(t))) return l.TYPES[t]
          return "Global unicast"
        }
        getBits(e, t) {
          return BigInt(`0b${this.getBitsBase2(e, t)}`)
        }
        getBitsBase2(e, t) {
          return this.binaryZeroPad().slice(e, t)
        }
        getBitsBase16(e, t) {
          let r = t - e
          if (r % 4 != 0) throw Error("Length of bits to retrieve must be divisible by four")
          return this.getBits(e, t)
            .toString(16)
            .padStart(r / 4, "0")
        }
        getBitsPastSubnet() {
          return this.getBitsBase2(this.subnetMask, l.BITS)
        }
        reverseForm(e) {
          e || (e = {})
          let t = Math.floor(this.subnetMask / 4),
            r = this.canonicalForm().replace(/:/g, "").split("").slice(0, t).reverse().join(".")
          return t > 0 ? (e.omitSuffix ? r : `${r}.ip6.arpa.`) : e.omitSuffix ? "" : "ip6.arpa."
        }
        correctForm() {
          let e,
            t = [],
            r = 0,
            n = []
          for (e = 0; e < this.parsedAddress.length; e++) {
            let t = parseInt(this.parsedAddress[e], 16)
            ;(0 === t && r++, 0 !== t && r > 0 && (r > 1 && n.push([e - r, e - 1]), (r = 0)))
          }
          r > 1 && n.push([this.parsedAddress.length - r, this.parsedAddress.length - 1])
          let s = n.map((e) => e[1] - e[0] + 1)
          if (n.length > 0) {
            let e = s.indexOf(Math.max(...s))
            t = (function (e, t) {
              let r,
                n = [],
                s = []
              for (r = 0; r < e.length; r++) r < t[0] ? n.push(e[r]) : r > t[1] && s.push(e[r])
              return n.concat(["compact"]).concat(s)
            })(this.parsedAddress, n[e])
          } else t = this.parsedAddress
          for (e = 0; e < t.length; e++) "compact" !== t[e] && (t[e] = parseInt(t[e], 16).toString(16))
          let i = t.join(":")
          return (i = (i = i.replace(/^compact$/, "::")).replace(/(^compact)|(compact$)/, ":")).replace(/compact/, "")
        }
        binaryZeroPad() {
          return this.bigInt().toString(2).padStart(l.BITS, "0")
        }
        parse4in6(e) {
          let t = e.split(":"),
            r = t.slice(-1)[0].match(a.RE_ADDRESS)
          if (r) {
            ;((this.parsedAddress4 = r[0]), (this.address4 = new c.Address4(this.parsedAddress4)))
            for (let t = 0; t < this.address4.groups; t++)
              if (/^0[0-9]+/.test(this.address4.parsedAddress[t]))
                throw new h.AddressError(
                  "IPv4 addresses can't have leading zeroes.",
                  e.replace(a.RE_ADDRESS, this.address4.parsedAddress.map(m).join(".")),
                )
            ;((this.v4 = !0), (t[t.length - 1] = this.address4.toGroup6()), (e = t.join(":")))
          }
          return e
        }
        parse(e) {
          let t = (e = this.parse4in6(e)).match(l.RE_BAD_CHARACTERS)
          if (t)
            throw new h.AddressError(
              `Bad character${t.length > 1 ? "s" : ""} detected in address: ${t.join("")}`,
              e.replace(l.RE_BAD_CHARACTERS, '<span class="parse-error">$1</span>'),
            )
          let r = e.match(l.RE_BAD_ADDRESS)
          if (r)
            throw new h.AddressError(
              `Address failed regex: ${r.join("")}`,
              e.replace(l.RE_BAD_ADDRESS, '<span class="parse-error">$1</span>'),
            )
          let n = [],
            s = e.split("::")
          if (2 === s.length) {
            let e = s[0].split(":"),
              t = s[1].split(":")
            ;(1 === e.length && "" === e[0] && (e = []), 1 === t.length && "" === t[0] && (t = []))
            let r = this.groups - (e.length + t.length)
            if (!r) throw new h.AddressError("Error parsing groups")
            ;((this.elidedGroups = r),
              (this.elisionBegin = e.length),
              (this.elisionEnd = e.length + this.elidedGroups),
              (n = n.concat(e)))
            for (let e = 0; e < r; e++) n.push("0")
            n = n.concat(t)
          } else if (1 === s.length) ((n = e.split(":")), (this.elidedGroups = 0))
          else throw new h.AddressError("Too many :: groups found")
          if ((n = n.map((e) => parseInt(e, 16).toString(16))).length !== this.groups)
            throw new h.AddressError("Incorrect number of groups found")
          return n
        }
        canonicalForm() {
          return this.parsedAddress.map(g).join(":")
        }
        decimal() {
          return this.parsedAddress.map((e) => parseInt(e, 16).toString(10).padStart(5, "0")).join(":")
        }
        bigInt() {
          return BigInt(`0x${this.parsedAddress.map(g).join("")}`)
        }
        to4() {
          let e = this.binaryZeroPad().split("")
          return c.Address4.fromHex(BigInt(`0b${e.slice(96, 128).join("")}`).toString(16))
        }
        to4in6() {
          let t = this.to4(),
            r = new e(this.parsedAddress.slice(0, 6).join(":"), 6).correctForm(),
            n = ""
          return (/:$/.test(r) || (n = ":"), r + n + t.address)
        }
        inspectTeredo() {
          let e = this.getBitsBase16(0, 32),
            t = (this.getBits(80, 96) ^ BigInt("0xffff")).toString(),
            r = c.Address4.fromHex(this.getBitsBase16(32, 64)),
            n = this.getBits(96, 128),
            s = c.Address4.fromHex((n ^ BigInt("0xffffffff")).toString(16)),
            i = this.getBitsBase2(64, 80),
            o = (0, f.testBit)(i, 15),
            a = (0, f.testBit)(i, 14),
            l = (0, f.testBit)(i, 8),
            u = (0, f.testBit)(i, 9),
            d = BigInt(`0b${i.slice(2, 6) + i.slice(8, 16)}`).toString(10)
          return {
            prefix: `${e.slice(0, 4)}:${e.slice(4, 8)}`,
            server4: r.address,
            client4: s.address,
            flags: i,
            coneNat: o,
            microsoft: { reserved: a, universalLocal: u, groupIndividual: l, nonce: d },
            udpPort: t,
          }
        }
        inspect6to4() {
          let e = this.getBitsBase16(0, 16),
            t = c.Address4.fromHex(this.getBitsBase16(16, 48))
          return { prefix: e.slice(0, 4), gateway: t.address }
        }
        to6to4() {
          return this.is4()
            ? new e(["2002", this.getBitsBase16(96, 112), this.getBitsBase16(112, 128), ":/16"].join(":"))
            : null
        }
        toByteArray() {
          let e = this.bigInt().toString(16),
            t = "0".repeat(e.length % 2),
            r = `${t}${e}`,
            n = []
          for (let e = 0, t = r.length; e < t; e += 2) n.push(parseInt(r.substring(e, e + 2), 16))
          return n
        }
        toUnsignedByteArray() {
          return this.toByteArray().map(y)
        }
        static fromByteArray(e) {
          return this.fromUnsignedByteArray(e.map(y))
        }
        static fromUnsignedByteArray(t) {
          let r = BigInt("256"),
            n = BigInt("0"),
            s = BigInt("1")
          for (let e = t.length - 1; e >= 0; e--) ((n += s * BigInt(t[e].toString(10))), (s *= r))
          return e.fromBigInt(n)
        }
        isCanonical() {
          return this.addressMinusSuffix === this.canonicalForm()
        }
        isLinkLocal() {
          return "1111111010000000000000000000000000000000000000000000000000000000" === this.getBitsBase2(0, 64)
        }
        isMulticast() {
          return "Multicast" === this.getType()
        }
        is4() {
          return this.v4
        }
        isTeredo() {
          return this.isInSubnet(new e("2001::/32"))
        }
        is6to4() {
          return this.isInSubnet(new e("2002::/16"))
        }
        isLoopback() {
          return "Loopback" === this.getType()
        }
        href(e) {
          return ((e = void 0 === e ? "" : `:${e}`), `http://[${this.correctForm()}]${e}/`)
        }
        link(e) {
          ;(e || (e = {}),
            void 0 === e.className && (e.className = ""),
            void 0 === e.prefix && (e.prefix = "/#address="),
            void 0 === e.v4 && (e.v4 = !1))
          let t = this.correctForm
          e.v4 && (t = this.to4in6)
          let r = t.call(this)
          return e.className
            ? `<a href="${e.prefix}${r}" class="${e.className}">${r}</a>`
            : `<a href="${e.prefix}${r}">${r}</a>`
        }
        group() {
          if (0 === this.elidedGroups) return u.simpleGroup(this.address).join(":")
          ;(p("number" == typeof this.elidedGroups), p("number" == typeof this.elisionBegin))
          let e = [],
            [t, r] = this.address.split("::")
          t.length ? e.push(...u.simpleGroup(t)) : e.push("")
          let n = ["hover-group"]
          for (let e = this.elisionBegin; e < this.elisionBegin + this.elidedGroups; e++) n.push(`group-${e}`)
          return (
            e.push(`<span class="${n.join(" ")}"></span>`),
            r.length ? e.push(...u.simpleGroup(r, this.elisionEnd)) : e.push(""),
            this.is4() && (p(this.address4 instanceof c.Address4), e.pop(), e.push(this.address4.groupForV6())),
            e.join(":")
          )
        }
        regularExpressionString(t = !1) {
          let r = [],
            n = new e(this.correctForm())
          if (0 === n.elidedGroups) r.push((0, d.simpleRegularExpression)(n.parsedAddress))
          else if (n.elidedGroups === l.GROUPS) r.push((0, d.possibleElisions)(l.GROUPS))
          else {
            let e = n.address.split("::")
            ;(e[0].length && r.push((0, d.simpleRegularExpression)(e[0].split(":"))),
              p("number" == typeof n.elidedGroups),
              r.push((0, d.possibleElisions)(n.elidedGroups, 0 !== e[0].length, 0 !== e[1].length)),
              e[1].length && r.push((0, d.simpleRegularExpression)(e[1].split(":"))),
              (r = [r.join(":")]))
          }
          return (
            t || (r = ["(?=^|", d.ADDRESS_BOUNDARY, "|[^\\w\\:])(", ...r, ")(?=[^\\w\\:]|", d.ADDRESS_BOUNDARY, "|$)"]),
            r.join("")
          )
        }
        regularExpression(e = !1) {
          return RegExp(this.regularExpressionString(e), "i")
        }
      }
    },
    81994(e, t) {
      "use strict"
      ;(Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RE_SUBNET_STRING = t.RE_ADDRESS = t.GROUPS = t.BITS = void 0),
        (t.BITS = 32),
        (t.GROUPS = 4),
        (t.RE_ADDRESS =
          /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g),
        (t.RE_SUBNET_STRING = /\/\d{1,2}$/))
    },
    704(e, t) {
      "use strict"
      ;(Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RE_URL_WITH_PORT =
          t.RE_URL =
          t.RE_ZONE_STRING =
          t.RE_SUBNET_STRING =
          t.RE_BAD_ADDRESS =
          t.RE_BAD_CHARACTERS =
          t.TYPES =
          t.SCOPES =
          t.GROUPS =
          t.BITS =
            void 0),
        (t.BITS = 128),
        (t.GROUPS = 8),
        (t.SCOPES = {
          0: "Reserved",
          1: "Interface local",
          2: "Link local",
          4: "Admin local",
          5: "Site local",
          8: "Organization local",
          14: "Global",
          15: "Reserved",
        }),
        (t.TYPES = {
          "ff01::1/128": "Multicast (All nodes on this interface)",
          "ff01::2/128": "Multicast (All routers on this interface)",
          "ff02::1/128": "Multicast (All nodes on this link)",
          "ff02::2/128": "Multicast (All routers on this link)",
          "ff05::2/128": "Multicast (All routers in this site)",
          "ff02::5/128": "Multicast (OSPFv3 AllSPF routers)",
          "ff02::6/128": "Multicast (OSPFv3 AllDR routers)",
          "ff02::9/128": "Multicast (RIP routers)",
          "ff02::a/128": "Multicast (EIGRP routers)",
          "ff02::d/128": "Multicast (PIM routers)",
          "ff02::16/128": "Multicast (MLDv2 reports)",
          "ff01::fb/128": "Multicast (mDNSv6)",
          "ff02::fb/128": "Multicast (mDNSv6)",
          "ff05::fb/128": "Multicast (mDNSv6)",
          "ff02::1:2/128": "Multicast (All DHCP servers and relay agents on this link)",
          "ff05::1:2/128": "Multicast (All DHCP servers and relay agents in this site)",
          "ff02::1:3/128": "Multicast (All DHCP servers on this link)",
          "ff05::1:3/128": "Multicast (All DHCP servers in this site)",
          "::/128": "Unspecified",
          "::1/128": "Loopback",
          "ff00::/8": "Multicast",
          "fe80::/10": "Link-local unicast",
        }),
        (t.RE_BAD_CHARACTERS = /([^0-9a-f:/%])/gi),
        (t.RE_BAD_ADDRESS = /([0-9a-f]{5,}|:{3,}|[^:]:$|^:[^:]|\/$)/gi),
        (t.RE_SUBNET_STRING = /\/\d{1,3}(?=%|$)/),
        (t.RE_ZONE_STRING = /%.*$/),
        (t.RE_URL = /^\[{0,1}([0-9a-f:]+)\]{0,1}/),
        (t.RE_URL_WITH_PORT = /\[([0-9a-f:]+)\]:([0-9]{1,5})/))
    },
    64356(e, t) {
      "use strict"
      function r(e) {
        return e.replace(/(0+)/g, '<span class="zero">$1</span>')
      }
      function n(e) {
        return e.replace(/^(0+)/, '<span class="zero">$1</span>')
      }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.spanAllZeroes = r),
        (t.spanAll = function (e, t = 0) {
          return e
            .split("")
            .map((e, n) => `<span class="digit value-${e} position-${n + t}">${r(e)}</span>`)
            .join("")
        }),
        (t.spanLeadingZeroes = function (e) {
          return e
            .split(":")
            .map((e) => n(e))
            .join(":")
        }),
        (t.simpleGroup = function (e, t = 0) {
          return e
            .split(":")
            .map((e, r) => (/group-v4/.test(e) ? e : `<span class="hover-group group-${r + t}">${n(e)}</span>`))
        }))
    },
    331(e, t, r) {
      "use strict"
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var s = Object.getOwnPropertyDescriptor(t, r)
                ;((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, s))
              }
            : function (e, t, r, n) {
                ;(void 0 === n && (n = r), (e[n] = t[r]))
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r)
            return (s(t, e), t)
          }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ADDRESS_BOUNDARY = void 0),
        (t.groupPossibilities = a),
        (t.padGroup = l),
        (t.simpleRegularExpression = function (e) {
          let t = []
          e.forEach((e, r) => {
            0 === parseInt(e, 16) && t.push(r)
          })
          let r = t.map((t) =>
            e
              .map((e, r) => {
                if (r === t) {
                  let t = 0 === r || r === o.GROUPS - 1 ? ":" : ""
                  return a([l(e), t])
                }
                return l(e)
              })
              .join(":"),
          )
          return (r.push(e.map(l).join(":")), a(r))
        }),
        (t.possibleElisions = function (e, t, r) {
          let n = []
          ;(t || r || n.push("::"),
            t && r && n.push(""),
            ((r && !t) || (!r && t)) && n.push(":"),
            n.push(`${t ? "" : ":"}(:0{1,4}){1,${e - 1}}`),
            n.push(`(0{1,4}:){1,${e - 1}}${r ? "" : ":"}`),
            n.push(`(0{1,4}:){${e - 1}}0{1,4}`))
          for (let t = 1; t < e - 1; t++)
            for (let r = 1; r < e - t; r++) n.push(`(0{1,4}:){${r}}:(0{1,4}:){${e - r - t - 1}}0{1,4}`)
          return a(n)
        }))
      let o = i(r(704))
      function a(e) {
        return `(${e.join("|")})`
      }
      function l(e) {
        return e.length < 4 ? `0{0,${4 - e.length}}${e}` : e
      }
      t.ADDRESS_BOUNDARY = "[^A-Fa-f0-9:]"
    },
    3174(e) {
      "use strict"
      let t = (e) => null !== e && "object" == typeof e && "function" == typeof e.pipe
      ;((t.writable = (e) =>
        t(e) && !1 !== e.writable && "function" == typeof e._write && "object" == typeof e._writableState),
        (t.readable = (e) =>
          t(e) && !1 !== e.readable && "function" == typeof e._read && "object" == typeof e._readableState),
        (t.duplex = (e) => t.writable(e) && t.readable(e)),
        (t.transform = (e) => t.duplex(e) && "function" == typeof e._transform),
        (e.exports = t))
    },
    17533(e, t, r) {
      var n
      function s(e, t, r) {
        if (("function" == typeof t && ((r = t), (t = {})), !r)) {
          if ("function" != typeof Promise) throw TypeError("callback not provided")
          return new Promise(function (r, n) {
            s(e, t || {}, function (e, t) {
              e ? n(e) : r(t)
            })
          })
        }
        n(e, t || {}, function (e, n) {
          ;(e && ("EACCES" === e.code || (t && t.ignoreErrors)) && ((e = null), (n = !1)), r(e, n))
        })
      }
      ;(r(94383),
        (n = "win32" === process.platform || global.TESTING_WINDOWS ? r(16064) : r(88734)),
        (e.exports = s),
        (s.sync = function (e, t) {
          try {
            return n.sync(e, t || {})
          } catch (e) {
            if ((t && t.ignoreErrors) || "EACCES" === e.code) return !1
            throw e
          }
        }))
    },
    88734(e, t, r) {
      ;((e.exports = s),
        (s.sync = function (e, t) {
          return i(n.statSync(e), t)
        }))
      var n = r(94383)
      function s(e, t, r) {
        n.stat(e, function (e, n) {
          r(e, !e && i(n, t))
        })
      }
      function i(e, t) {
        var r, n, s, i, o, a, l, u, c
        return (
          e.isFile() &&
          ((r = e),
          (n = t),
          (s = r.mode),
          (i = r.uid),
          (o = r.gid),
          (a = void 0 !== n.uid ? n.uid : process.getuid && process.getuid()),
          (l = void 0 !== n.gid ? n.gid : process.getgid && process.getgid()),
          (u = parseInt("100", 8)),
          (c = parseInt("010", 8)),
          s & parseInt("001", 8) || (s & c && o === l) || (s & u && i === a) || (s & (u | c) && 0 === a))
        )
      }
    },
    16064(e, t, r) {
      ;((e.exports = i),
        (i.sync = function (e, t) {
          return s(n.statSync(e), e, t)
        }))
      var n = r(94383)
      function s(e, t, r) {
        if (!e.isSymbolicLink() && !e.isFile()) return !1
        var n = void 0 !== r.pathExt ? r.pathExt : process.env.PATHEXT
        if (!n || -1 !== (n = n.split(";")).indexOf("")) return !0
        for (var s = 0; s < n.length; s++) {
          var i = n[s].toLowerCase()
          if (i && t.substr(-i.length).toLowerCase() === i) return !0
        }
        return !1
      }
      function i(e, t, r) {
        n.stat(e, function (n, i) {
          r(n, !n && s(i, e, t))
        })
      }
    },
    18813(e, t, r) {
      "use strict"
      let { PassThrough: n } = r(76272)
      e.exports = function () {
        var e = [],
          t = new n({ objectMode: !0 })
        return (
          t.setMaxListeners(0),
          (t.add = r),
          (t.isEmpty = function () {
            return 0 == e.length
          }),
          t.on("unpipe", s),
          Array.prototype.slice.call(arguments).forEach(r),
          t
        )
        function r(n) {
          return (
            Array.isArray(n)
              ? n.forEach(r)
              : (e.push(n),
                n.once("end", s.bind(null, n)),
                n.once("error", t.emit.bind(t, "error")),
                n.pipe(t, { end: !1 })),
            this
          )
        }
        function s(r) {
          !(e = e.filter(function (e) {
            return e !== r
          })).length &&
            t.readable &&
            t.end()
        }
      }
    },
    11670(e) {
      "use strict"
      let t = (e, t) => {
        for (let r of Reflect.ownKeys(t)) Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        return e
      }
      ;((e.exports = t), (e.exports.default = t))
    },
    24979(e, t, r) {
      let n = require
      "function" == typeof n.addon ? (e.exports = n.addon.bind(n)) : (e.exports = r(60271))
    },
    60271(e, t, r) {
      var n = r(94383),
        s = r(62003),
        i = r(89366),
        o = require,
        a = (process.config && process.config.variables) || {},
        l = !!process.env.PREBUILDS_ONLY,
        u = process.versions.modules,
        c =
          (process.versions && process.versions.electron) ||
          process.env.ELECTRON_RUN_AS_NODE ||
          ("u" > typeof window && window.process && "renderer" === window.process.type)
            ? "electron"
            : process.versions && process.versions.nw
              ? "node-webkit"
              : "node",
        d = process.env.npm_config_arch || i.arch(),
        h = process.env.npm_config_platform || i.platform(),
        f = process.env.LIBC || ("linux" === h && n.existsSync("/etc/alpine-release") ? "musl" : "glibc"),
        p = process.env.ARM_VERSION || ("arm64" === d ? "8" : a.arm_version) || "",
        m = (process.versions.uv || "").split(".")[0]
      function g(e) {
        return o(g.resolve(e))
      }
      function y(e) {
        try {
          return n.readdirSync(e)
        } catch (e) {
          return []
        }
      }
      function _(e, t) {
        var r = y(e).filter(t)
        return r[0] && s.join(e, r[0])
      }
      function b(e) {
        return /\.node$/.test(e)
      }
      function S(e) {
        var t = e.split("-")
        if (2 === t.length) {
          var r = t[0],
            n = t[1].split("+")
          if (r && n.length && n.every(Boolean)) return { name: e, platform: r, architectures: n }
        }
      }
      function w(e, t) {
        return function (r) {
          return null != r && r.platform === e && r.architectures.includes(t)
        }
      }
      function v(e, t) {
        return e.architectures.length - t.architectures.length
      }
      function x(e) {
        var t = e.split("."),
          r = t.pop(),
          n = { file: e, specificity: 0 }
        if ("node" === r) {
          for (var s = 0; s < t.length; s++) {
            var i = t[s]
            if ("node" === i || "electron" === i || "node-webkit" === i) n.runtime = i
            else if ("napi" === i) n.napi = !0
            else if ("abi" === i.slice(0, 3)) n.abi = i.slice(3)
            else if ("uv" === i.slice(0, 2)) n.uv = i.slice(2)
            else if ("armv" === i.slice(0, 4)) n.armv = i.slice(4)
            else {
              if ("glibc" !== i && "musl" !== i) continue
              n.libc = i
            }
            n.specificity++
          }
          return n
        }
      }
      function E(e, t) {
        return function (r) {
          var n
          return (
            null != r &&
            (!r.runtime || r.runtime === e || !!("node" === (n = r).runtime && n.napi)) &&
            (!r.abi || r.abi === t || !!r.napi) &&
            (!r.uv || r.uv === m) &&
            (!r.armv || r.armv === p) &&
            (!r.libc || r.libc === f) &&
            !0
          )
        }
      }
      function k(e) {
        return function (t, r) {
          return t.runtime !== r.runtime
            ? t.runtime === e
              ? -1
              : 1
            : t.abi !== r.abi
              ? t.abi
                ? -1
                : 1
              : t.specificity !== r.specificity
                ? t.specificity > r.specificity
                  ? -1
                  : 1
                : 0
        }
      }
      ;((e.exports = g),
        (g.resolve = g.path =
          function (e) {
            e = s.resolve(e || ".")
            try {
              var t = o(s.join(e, "package.json")).name.toUpperCase().replace(/-/g, "_")
              process.env[t + "_PREBUILD"] && (e = process.env[t + "_PREBUILD"])
            } catch (e) {}
            if (!l) {
              var r = _(s.join(e, "build/Release"), b)
              if (r) return r
              var n = _(s.join(e, "build/Debug"), b)
              if (n) return n
            }
            var i = g(e)
            if (i) return i
            var a = g(s.dirname(process.execPath))
            if (a) return a
            throw Error(
              "No native build was found for " +
                [
                  "platform=" + h,
                  "arch=" + d,
                  "runtime=" + c,
                  "abi=" + u,
                  "uv=" + m,
                  p ? "armv=" + p : "",
                  "libc=" + f,
                  "node=" + process.versions.node,
                  process.versions.electron ? "electron=" + process.versions.electron : "",
                  "webpack=true",
                ]
                  .filter(Boolean)
                  .join(" ") +
                "\n    loaded from: " +
                e +
                "\n",
            )
            function g(e) {
              var t = y(s.join(e, "prebuilds")).map(S).filter(w(h, d)).sort(v)[0]
              if (t) {
                var r = s.join(e, "prebuilds", t.name),
                  n = y(r).map(x).filter(E(c, u)).sort(k(c))[0]
                if (n) return s.join(r, n.file)
              }
            }
          }),
        (g.parseTags = x),
        (g.matchTags = E),
        (g.compareTags = k),
        (g.parseTuple = S),
        (g.matchTuple = w),
        (g.compareTuples = v))
    },
    15136(e, t, r) {
      "use strict"
      let n = r(62003),
        s = r(27074),
        i = (e) => {
          let t
          e = { cwd: process.cwd(), path: process.env[s()], execPath: process.execPath, ...e }
          let r = n.resolve(e.cwd),
            i = []
          for (; t !== r;) (i.push(n.join(r, "node_modules/.bin")), (t = r), (r = n.resolve(r, "..")))
          return (i.push(n.resolve(e.cwd, e.execPath, "..")), i.concat(e.path).join(n.delimiter))
        }
      ;((e.exports = i),
        (e.exports.default = i),
        (e.exports.env = (t) => {
          let r = { ...(t = { env: process.env, ...t }).env },
            n = s({ env: r })
          return ((t.path = r[n]), (r[n] = e.exports(t)), r)
        }))
    },
    50931(e, t, r) {
      "use strict"
      let n = r(11670),
        s = new WeakMap(),
        i = (e, t = {}) => {
          let r
          if ("function" != typeof e) throw TypeError("Expected a function")
          let i = 0,
            o = e.displayName || e.name || "<anonymous>",
            a = function (...n) {
              if ((s.set(a, ++i), 1 === i)) ((r = e.apply(this, n)), (e = null))
              else if (!0 === t.throw) throw Error(`Function \`${o}\` can only be called once`)
              return r
            }
          return (n(a, e), s.set(a, i), a)
        }
      ;((e.exports = i),
        (e.exports.default = i),
        (e.exports.callCount = (e) => {
          if (!s.has(e)) throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)
          return s.get(e)
        }))
    },
    27074(e) {
      "use strict"
      let t = (e = {}) => {
        let t = e.env || process.env
        return "win32" !== (e.platform || process.platform)
          ? "PATH"
          : Object.keys(t)
              .reverse()
              .find((e) => "PATH" === e.toUpperCase()) || "Path"
      }
      ;((e.exports = t), (e.exports.default = t))
    },
    45341(e, t, r) {
      "use strict"
      let n = r(33744)
      e.exports = (e = "") => {
        let t = e.match(n)
        if (!t) return null
        let [r, s] = t[0].replace(/#! ?/, "").split(" "),
          i = r.split("/").pop()
        return "env" === i ? s : s ? `${i} ${s}` : i
      }
    },
    33744(e) {
      "use strict"
      e.exports = /^#!(.*)/
    },
    46105(e, t, r) {
      var n = global.process
      let s = function (e) {
        return (
          e &&
          "object" == typeof e &&
          "function" == typeof e.removeListener &&
          "function" == typeof e.emit &&
          "function" == typeof e.reallyExit &&
          "function" == typeof e.listeners &&
          "function" == typeof e.kill &&
          "number" == typeof e.pid &&
          "function" == typeof e.on
        )
      }
      if (s(n)) {
        var i,
          o = r(64770),
          a = r(69584),
          l = /^win/i.test(n.platform),
          u = r(66261)
        ;("function" != typeof u && (u = u.EventEmitter),
          n.__signal_exit_emitter__
            ? (i = n.__signal_exit_emitter__)
            : (((i = n.__signal_exit_emitter__ = new u()).count = 0), (i.emitted = {})),
          i.infinite || (i.setMaxListeners(1 / 0), (i.infinite = !0)),
          (e.exports = function (e, t) {
            if (!s(global.process)) return function () {}
            ;(o.equal(typeof e, "function", "a callback must be provided for exit handler"), !1 === f && p())
            var r = "exit"
            return (
              t && t.alwaysLast && (r = "afterexit"),
              i.on(r, e),
              function () {
                ;(i.removeListener(r, e),
                  0 === i.listeners("exit").length && 0 === i.listeners("afterexit").length && c())
              }
            )
          }))
        var c = function () {
          f &&
            s(global.process) &&
            ((f = !1),
            a.forEach(function (e) {
              try {
                n.removeListener(e, h[e])
              } catch (e) {}
            }),
            (n.emit = y),
            (n.reallyExit = m),
            (i.count -= 1))
        }
        e.exports.unload = c
        var d = function (e, t, r) {
            i.emitted[e] || ((i.emitted[e] = !0), i.emit(e, t, r))
          },
          h = {}
        ;(a.forEach(function (e) {
          h[e] = function () {
            s(global.process) &&
              n.listeners(e).length === i.count &&
              (c(),
              d("exit", null, e),
              d("afterexit", null, e),
              l && "SIGHUP" === e && (e = "SIGINT"),
              n.kill(n.pid, e))
          }
        }),
          (e.exports.signals = function () {
            return a
          }))
        var f = !1,
          p = function () {
            !f &&
              s(global.process) &&
              ((f = !0),
              (i.count += 1),
              (a = a.filter(function (e) {
                try {
                  return (n.on(e, h[e]), !0)
                } catch (e) {
                  return !1
                }
              })),
              (n.emit = _),
              (n.reallyExit = g))
          }
        e.exports.load = p
        var m = n.reallyExit,
          g = function (e) {
            s(global.process) &&
              ((n.exitCode = e || 0),
              d("exit", n.exitCode, null),
              d("afterexit", n.exitCode, null),
              m.call(n, n.exitCode))
          },
          y = n.emit,
          _ = function (e, t) {
            if (!("exit" === e && s(global.process))) return y.apply(this, arguments)
            void 0 !== t && (n.exitCode = t)
            var r = y.apply(this, arguments)
            return (d("exit", n.exitCode, null), d("afterexit", n.exitCode, null), r)
          }
      } else
        e.exports = function () {
          return function () {}
        }
    },
    69584(e) {
      ;((e.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"]),
        "win32" !== process.platform &&
          e.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT"),
        "linux" === process.platform && e.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED"))
    },
    20485(e, t, r) {
      "use strict"
      let n = r(34551)
      t.SmartBuffer = class e {
        constructor(t) {
          if (
            ((this.length = 0),
            (this._encoding = "utf8"),
            (this._writeOffset = 0),
            (this._readOffset = 0),
            e.isSmartBufferOptions(t))
          )
            if ((t.encoding && (n.checkEncoding(t.encoding), (this._encoding = t.encoding)), t.size))
              if (n.isFiniteInteger(t.size) && t.size > 0) this._buff = Buffer.allocUnsafe(t.size)
              else throw Error(n.ERRORS.INVALID_SMARTBUFFER_SIZE)
            else if (t.buff)
              if (Buffer.isBuffer(t.buff)) ((this._buff = t.buff), (this.length = t.buff.length))
              else throw Error(n.ERRORS.INVALID_SMARTBUFFER_BUFFER)
            else this._buff = Buffer.allocUnsafe(4096)
          else {
            if (void 0 !== t) throw Error(n.ERRORS.INVALID_SMARTBUFFER_OBJECT)
            this._buff = Buffer.allocUnsafe(4096)
          }
        }
        static fromSize(e, t) {
          return new this({ size: e, encoding: t })
        }
        static fromBuffer(e, t) {
          return new this({ buff: e, encoding: t })
        }
        static fromOptions(e) {
          return new this(e)
        }
        static isSmartBufferOptions(e) {
          return e && (void 0 !== e.encoding || void 0 !== e.size || void 0 !== e.buff)
        }
        readInt8(e) {
          return this._readNumberValue(Buffer.prototype.readInt8, 1, e)
        }
        readInt16BE(e) {
          return this._readNumberValue(Buffer.prototype.readInt16BE, 2, e)
        }
        readInt16LE(e) {
          return this._readNumberValue(Buffer.prototype.readInt16LE, 2, e)
        }
        readInt32BE(e) {
          return this._readNumberValue(Buffer.prototype.readInt32BE, 4, e)
        }
        readInt32LE(e) {
          return this._readNumberValue(Buffer.prototype.readInt32LE, 4, e)
        }
        readBigInt64BE(e) {
          return (
            n.bigIntAndBufferInt64Check("readBigInt64BE"),
            this._readNumberValue(Buffer.prototype.readBigInt64BE, 8, e)
          )
        }
        readBigInt64LE(e) {
          return (
            n.bigIntAndBufferInt64Check("readBigInt64LE"),
            this._readNumberValue(Buffer.prototype.readBigInt64LE, 8, e)
          )
        }
        writeInt8(e, t) {
          return (this._writeNumberValue(Buffer.prototype.writeInt8, 1, e, t), this)
        }
        insertInt8(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeInt8, 1, e, t)
        }
        writeInt16BE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeInt16BE, 2, e, t)
        }
        insertInt16BE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeInt16BE, 2, e, t)
        }
        writeInt16LE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeInt16LE, 2, e, t)
        }
        insertInt16LE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeInt16LE, 2, e, t)
        }
        writeInt32BE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeInt32BE, 4, e, t)
        }
        insertInt32BE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeInt32BE, 4, e, t)
        }
        writeInt32LE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeInt32LE, 4, e, t)
        }
        insertInt32LE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeInt32LE, 4, e, t)
        }
        writeBigInt64BE(e, t) {
          return (
            n.bigIntAndBufferInt64Check("writeBigInt64BE"),
            this._writeNumberValue(Buffer.prototype.writeBigInt64BE, 8, e, t)
          )
        }
        insertBigInt64BE(e, t) {
          return (
            n.bigIntAndBufferInt64Check("writeBigInt64BE"),
            this._insertNumberValue(Buffer.prototype.writeBigInt64BE, 8, e, t)
          )
        }
        writeBigInt64LE(e, t) {
          return (
            n.bigIntAndBufferInt64Check("writeBigInt64LE"),
            this._writeNumberValue(Buffer.prototype.writeBigInt64LE, 8, e, t)
          )
        }
        insertBigInt64LE(e, t) {
          return (
            n.bigIntAndBufferInt64Check("writeBigInt64LE"),
            this._insertNumberValue(Buffer.prototype.writeBigInt64LE, 8, e, t)
          )
        }
        readUInt8(e) {
          return this._readNumberValue(Buffer.prototype.readUInt8, 1, e)
        }
        readUInt16BE(e) {
          return this._readNumberValue(Buffer.prototype.readUInt16BE, 2, e)
        }
        readUInt16LE(e) {
          return this._readNumberValue(Buffer.prototype.readUInt16LE, 2, e)
        }
        readUInt32BE(e) {
          return this._readNumberValue(Buffer.prototype.readUInt32BE, 4, e)
        }
        readUInt32LE(e) {
          return this._readNumberValue(Buffer.prototype.readUInt32LE, 4, e)
        }
        readBigUInt64BE(e) {
          return (
            n.bigIntAndBufferInt64Check("readBigUInt64BE"),
            this._readNumberValue(Buffer.prototype.readBigUInt64BE, 8, e)
          )
        }
        readBigUInt64LE(e) {
          return (
            n.bigIntAndBufferInt64Check("readBigUInt64LE"),
            this._readNumberValue(Buffer.prototype.readBigUInt64LE, 8, e)
          )
        }
        writeUInt8(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeUInt8, 1, e, t)
        }
        insertUInt8(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeUInt8, 1, e, t)
        }
        writeUInt16BE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeUInt16BE, 2, e, t)
        }
        insertUInt16BE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeUInt16BE, 2, e, t)
        }
        writeUInt16LE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeUInt16LE, 2, e, t)
        }
        insertUInt16LE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeUInt16LE, 2, e, t)
        }
        writeUInt32BE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeUInt32BE, 4, e, t)
        }
        insertUInt32BE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeUInt32BE, 4, e, t)
        }
        writeUInt32LE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeUInt32LE, 4, e, t)
        }
        insertUInt32LE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeUInt32LE, 4, e, t)
        }
        writeBigUInt64BE(e, t) {
          return (
            n.bigIntAndBufferInt64Check("writeBigUInt64BE"),
            this._writeNumberValue(Buffer.prototype.writeBigUInt64BE, 8, e, t)
          )
        }
        insertBigUInt64BE(e, t) {
          return (
            n.bigIntAndBufferInt64Check("writeBigUInt64BE"),
            this._insertNumberValue(Buffer.prototype.writeBigUInt64BE, 8, e, t)
          )
        }
        writeBigUInt64LE(e, t) {
          return (
            n.bigIntAndBufferInt64Check("writeBigUInt64LE"),
            this._writeNumberValue(Buffer.prototype.writeBigUInt64LE, 8, e, t)
          )
        }
        insertBigUInt64LE(e, t) {
          return (
            n.bigIntAndBufferInt64Check("writeBigUInt64LE"),
            this._insertNumberValue(Buffer.prototype.writeBigUInt64LE, 8, e, t)
          )
        }
        readFloatBE(e) {
          return this._readNumberValue(Buffer.prototype.readFloatBE, 4, e)
        }
        readFloatLE(e) {
          return this._readNumberValue(Buffer.prototype.readFloatLE, 4, e)
        }
        writeFloatBE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeFloatBE, 4, e, t)
        }
        insertFloatBE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeFloatBE, 4, e, t)
        }
        writeFloatLE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeFloatLE, 4, e, t)
        }
        insertFloatLE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeFloatLE, 4, e, t)
        }
        readDoubleBE(e) {
          return this._readNumberValue(Buffer.prototype.readDoubleBE, 8, e)
        }
        readDoubleLE(e) {
          return this._readNumberValue(Buffer.prototype.readDoubleLE, 8, e)
        }
        writeDoubleBE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeDoubleBE, 8, e, t)
        }
        insertDoubleBE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeDoubleBE, 8, e, t)
        }
        writeDoubleLE(e, t) {
          return this._writeNumberValue(Buffer.prototype.writeDoubleLE, 8, e, t)
        }
        insertDoubleLE(e, t) {
          return this._insertNumberValue(Buffer.prototype.writeDoubleLE, 8, e, t)
        }
        readString(e, t) {
          let r
          ;("number" == typeof e
            ? (n.checkLengthValue(e), (r = Math.min(e, this.length - this._readOffset)))
            : ((t = e), (r = this.length - this._readOffset)),
            void 0 !== t && n.checkEncoding(t))
          let s = this._buff.slice(this._readOffset, this._readOffset + r).toString(t || this._encoding)
          return ((this._readOffset += r), s)
        }
        insertString(e, t, r) {
          return (n.checkOffsetValue(t), this._handleString(e, !0, t, r))
        }
        writeString(e, t, r) {
          return this._handleString(e, !1, t, r)
        }
        readStringNT(e) {
          void 0 !== e && n.checkEncoding(e)
          let t = this.length
          for (let e = this._readOffset; e < this.length; e++)
            if (0 === this._buff[e]) {
              t = e
              break
            }
          let r = this._buff.slice(this._readOffset, t)
          return ((this._readOffset = t + 1), r.toString(e || this._encoding))
        }
        insertStringNT(e, t, r) {
          return (n.checkOffsetValue(t), this.insertString(e, t, r), this.insertUInt8(0, t + e.length), this)
        }
        writeStringNT(e, t, r) {
          return (
            this.writeString(e, t, r),
            this.writeUInt8(0, "number" == typeof t ? t + e.length : this.writeOffset),
            this
          )
        }
        readBuffer(e) {
          void 0 !== e && n.checkLengthValue(e)
          let t = "number" == typeof e ? e : this.length,
            r = Math.min(this.length, this._readOffset + t),
            s = this._buff.slice(this._readOffset, r)
          return ((this._readOffset = r), s)
        }
        insertBuffer(e, t) {
          return (n.checkOffsetValue(t), this._handleBuffer(e, !0, t))
        }
        writeBuffer(e, t) {
          return this._handleBuffer(e, !1, t)
        }
        readBufferNT() {
          let e = this.length
          for (let t = this._readOffset; t < this.length; t++)
            if (0 === this._buff[t]) {
              e = t
              break
            }
          let t = this._buff.slice(this._readOffset, e)
          return ((this._readOffset = e + 1), t)
        }
        insertBufferNT(e, t) {
          return (n.checkOffsetValue(t), this.insertBuffer(e, t), this.insertUInt8(0, t + e.length), this)
        }
        writeBufferNT(e, t) {
          return (
            void 0 !== t && n.checkOffsetValue(t),
            this.writeBuffer(e, t),
            this.writeUInt8(0, "number" == typeof t ? t + e.length : this._writeOffset),
            this
          )
        }
        clear() {
          return ((this._writeOffset = 0), (this._readOffset = 0), (this.length = 0), this)
        }
        remaining() {
          return this.length - this._readOffset
        }
        get readOffset() {
          return this._readOffset
        }
        set readOffset(e) {
          ;(n.checkOffsetValue(e), n.checkTargetOffset(e, this), (this._readOffset = e))
        }
        get writeOffset() {
          return this._writeOffset
        }
        set writeOffset(e) {
          ;(n.checkOffsetValue(e), n.checkTargetOffset(e, this), (this._writeOffset = e))
        }
        get encoding() {
          return this._encoding
        }
        set encoding(e) {
          ;(n.checkEncoding(e), (this._encoding = e))
        }
        get internalBuffer() {
          return this._buff
        }
        toBuffer() {
          return this._buff.slice(0, this.length)
        }
        toString(e) {
          let t = "string" == typeof e ? e : this._encoding
          return (n.checkEncoding(t), this._buff.toString(t, 0, this.length))
        }
        destroy() {
          return (this.clear(), this)
        }
        _handleString(e, t, r, s) {
          let i = this._writeOffset,
            o = this._encoding
          ;("number" == typeof r ? (i = r) : "string" == typeof r && (n.checkEncoding(r), (o = r)),
            "string" == typeof s && (n.checkEncoding(s), (o = s)))
          let a = Buffer.byteLength(e, o)
          return (
            t ? this.ensureInsertable(a, i) : this._ensureWriteable(a, i),
            this._buff.write(e, i, a, o),
            t
              ? (this._writeOffset += a)
              : "number" == typeof r
                ? (this._writeOffset = Math.max(this._writeOffset, i + a))
                : (this._writeOffset += a),
            this
          )
        }
        _handleBuffer(e, t, r) {
          let n = "number" == typeof r ? r : this._writeOffset
          return (
            t ? this.ensureInsertable(e.length, n) : this._ensureWriteable(e.length, n),
            e.copy(this._buff, n),
            t
              ? (this._writeOffset += e.length)
              : "number" == typeof r
                ? (this._writeOffset = Math.max(this._writeOffset, n + e.length))
                : (this._writeOffset += e.length),
            this
          )
        }
        ensureReadable(e, t) {
          let r = this._readOffset
          if ((void 0 !== t && (n.checkOffsetValue(t), (r = t)), r < 0 || r + e > this.length))
            throw Error(n.ERRORS.INVALID_READ_BEYOND_BOUNDS)
        }
        ensureInsertable(e, t) {
          ;(n.checkOffsetValue(t),
            this._ensureCapacity(this.length + e),
            t < this.length && this._buff.copy(this._buff, t + e, t, this._buff.length),
            t + e > this.length ? (this.length = t + e) : (this.length += e))
        }
        _ensureWriteable(e, t) {
          let r = "number" == typeof t ? t : this._writeOffset
          ;(this._ensureCapacity(r + e), r + e > this.length && (this.length = r + e))
        }
        _ensureCapacity(e) {
          let t = this._buff.length
          if (e > t) {
            let r = this._buff,
              n = (3 * t) / 2 + 1
            ;(n < e && (n = e), (this._buff = Buffer.allocUnsafe(n)), r.copy(this._buff, 0, 0, t))
          }
        }
        _readNumberValue(e, t, r) {
          this.ensureReadable(t, r)
          let n = e.call(this._buff, "number" == typeof r ? r : this._readOffset)
          return (void 0 === r && (this._readOffset += t), n)
        }
        _insertNumberValue(e, t, r, s) {
          return (
            n.checkOffsetValue(s),
            this.ensureInsertable(t, s),
            e.call(this._buff, r, s),
            (this._writeOffset += t),
            this
          )
        }
        _writeNumberValue(e, t, r, s) {
          if ("number" == typeof s) {
            if (s < 0) throw Error(n.ERRORS.INVALID_WRITE_BEYOND_BOUNDS)
            n.checkOffsetValue(s)
          }
          let i = "number" == typeof s ? s : this._writeOffset
          return (
            this._ensureWriteable(t, i),
            e.call(this._buff, r, i),
            "number" == typeof s ? (this._writeOffset = Math.max(this._writeOffset, i + t)) : (this._writeOffset += t),
            this
          )
        }
      }
    },
    34551(e, t, r) {
      "use strict"
      let n = r(1158),
        s = {
          INVALID_ENCODING:
            "Invalid encoding provided. Please specify a valid encoding the internal Node.js Buffer supports.",
          INVALID_SMARTBUFFER_SIZE: "Invalid size provided. Size must be a valid integer greater than zero.",
          INVALID_SMARTBUFFER_BUFFER: "Invalid Buffer provided in SmartBufferOptions.",
          INVALID_SMARTBUFFER_OBJECT:
            "Invalid SmartBufferOptions object supplied to SmartBuffer constructor or factory methods.",
          INVALID_OFFSET: "An invalid offset value was provided.",
          INVALID_OFFSET_NON_NUMBER: "An invalid offset value was provided. A numeric value is required.",
          INVALID_LENGTH: "An invalid length value was provided.",
          INVALID_LENGTH_NON_NUMBER: "An invalid length value was provived. A numeric value is required.",
          INVALID_TARGET_OFFSET: "Target offset is beyond the bounds of the internal SmartBuffer data.",
          INVALID_TARGET_LENGTH:
            "Specified length value moves cursor beyong the bounds of the internal SmartBuffer data.",
          INVALID_READ_BEYOND_BOUNDS: "Attempted to read beyond the bounds of the managed data.",
          INVALID_WRITE_BEYOND_BOUNDS: "Attempted to write beyond the bounds of the managed data.",
        }
      function i(e) {
        var t
        return "number" == typeof e && isFinite(e) && "number" == typeof (t = e) && isFinite(t) && Math.floor(t) === t
      }
      function o(e, t) {
        if ("number" == typeof e) {
          if (!i(e) || e < 0) throw Error(t ? s.INVALID_OFFSET : s.INVALID_LENGTH)
        } else throw Error(t ? s.INVALID_OFFSET_NON_NUMBER : s.INVALID_LENGTH_NON_NUMBER)
      }
      ;((t.ERRORS = s),
        (t.checkEncoding = function (e) {
          if (!n.Buffer.isEncoding(e)) throw Error(s.INVALID_ENCODING)
        }),
        (t.isFiniteInteger = i),
        (t.checkLengthValue = function (e) {
          o(e, !1)
        }),
        (t.checkOffsetValue = function (e) {
          o(e, !0)
        }),
        (t.checkTargetOffset = function (e, t) {
          if (e < 0 || e > t.length) throw Error(s.INVALID_TARGET_OFFSET)
        }),
        (t.bigIntAndBufferInt64Check = function (e) {
          if ("u" < typeof BigInt) throw Error("Platform does not support JS BigInt type.")
          if (void 0 === n.Buffer.prototype[e]) throw Error(`Platform does not support Buffer.prototype.${e}.`)
        }))
    },
    98118(e, t, r) {
      "use strict"
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var s = Object.getOwnPropertyDescriptor(t, r)
                ;((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, s))
              }
            : function (e, t, r, n) {
                ;(void 0 === n && (n = r), (e[n] = t[r]))
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r)
            return (s(t, e), t)
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SocksProxyAgent = void 0))
      let a = r(82295),
        l = r(78373),
        u = o(r(28104)),
        c = i(r(62951)),
        d = i(r(52135)),
        h = i(r(52553)),
        f = r(16857),
        p = (0, u.default)("socks-proxy-agent")
      class m extends l.Agent {
        constructor(e, t) {
          super(t)
          let { proxy: r, lookup: n } = (function (e) {
            let t = !1,
              r = 5,
              n = e.hostname,
              s = parseInt(e.port, 10) || 1080
            switch (e.protocol.replace(":", "")) {
              case "socks4":
                ;((t = !0), (r = 4))
                break
              case "socks4a":
                r = 4
                break
              case "socks5":
                ;((t = !0), (r = 5))
                break
              case "socks":
              case "socks5h":
                r = 5
                break
              default:
                throw TypeError(`A "socks" protocol must be specified! Got: ${String(e.protocol)}`)
            }
            let i = { host: n, port: s, type: r }
            return (
              e.username &&
                Object.defineProperty(i, "userId", { value: decodeURIComponent(e.username), enumerable: !1 }),
              null != e.password &&
                Object.defineProperty(i, "password", { value: decodeURIComponent(e.password), enumerable: !1 }),
              { lookup: t, proxy: i }
            )
          })("string" == typeof e ? new f.URL(e) : e)
          ;((this.shouldLookup = n),
            (this.proxy = r),
            (this.timeout = t?.timeout ?? null),
            (this.socketOptions = t?.socketOptions ?? null))
        }
        async connect(e, t) {
          let { shouldLookup: r, proxy: n, timeout: s } = this
          if (!t.host) throw Error("No `host` defined!")
          let { host: i } = t,
            { port: o, lookup: l = c.lookup } = t
          r &&
            (i = await new Promise((e, t) => {
              l(i, {}, (r, n) => {
                r ? t(r) : e(n)
              })
            }))
          let u = {
              proxy: n,
              destination: { host: i, port: "number" == typeof o ? o : parseInt(o, 10) },
              command: "connect",
              timeout: s ?? void 0,
              socket_options: this.socketOptions ?? void 0,
            },
            f = (t) => {
              ;(e.destroy(), m.destroy(), t && t.destroy())
            }
          p("Creating socks proxy connection: %o", u)
          let { socket: m } = await a.SocksClient.createConnection(u)
          if (
            (p("Successfully created socks proxy connection"),
            null !== s && (m.setTimeout(s), m.on("timeout", () => f())),
            t.secureEndpoint)
          ) {
            p("Upgrading socket connection to TLS")
            let e = h.connect({
              ...(function (e, ...t) {
                let r,
                  n = {}
                for (r in e) t.includes(r) || (n[r] = e[r])
                return n
              })(
                void 0 === t.servername && t.host && !d.isIP(t.host) ? { ...t, servername: t.host } : t,
                "host",
                "path",
                "port",
              ),
              socket: m,
            })
            return (
              e.once("error", (t) => {
                ;(p("Socket TLS error", t.message), f(e))
              }),
              e
            )
          }
          return m
        }
      }
      ;((m.protocols = ["socks", "socks4", "socks4a", "socks5", "socks5h"]), (t.SocksProxyAgent = m))
    },
    69953(e, t, r) {
      "use strict"
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (s, i) {
            function o(e) {
              try {
                l(n.next(e))
              } catch (e) {
                i(e)
              }
            }
            function a(e) {
              try {
                l(n.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              var t
              e.done
                ? s(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t)
                      })
                  ).then(o, a)
            }
            l((n = n.apply(e, t || [])).next())
          })
        }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SocksClientError = t.SocksClient = void 0))
      let s = r(66261),
        i = r(52135),
        o = r(20485),
        a = r(95420),
        l = r(2288),
        u = r(79986),
        c = r(51733)
      Object.defineProperty(t, "SocksClientError", {
        enumerable: !0,
        get: function () {
          return c.SocksClientError
        },
      })
      let d = r(42966)
      class h extends s.EventEmitter {
        constructor(e) {
          ;(super(),
            (this.options = Object.assign({}, e)),
            (0, l.validateSocksClientOptions)(e),
            this.setState(a.SocksClientState.Created))
        }
        static createConnection(e, t) {
          return new Promise((r, n) => {
            try {
              ;(0, l.validateSocksClientOptions)(e, ["connect"])
            } catch (e) {
              if ("function" == typeof t) return (t(e), r(e))
              return n(e)
            }
            let s = new h(e)
            ;(s.connect(e.existing_socket),
              s.once("established", (e) => {
                ;(s.removeAllListeners(), "function" == typeof t && t(null, e), r(e))
              }),
              s.once("error", (e) => {
                ;(s.removeAllListeners(), "function" == typeof t ? (t(e), r(e)) : n(e))
              }))
          })
        }
        static createConnectionChain(e, t) {
          return new Promise((r, s) =>
            n(this, void 0, void 0, function* () {
              try {
                ;(0, l.validateSocksClientChainOptions)(e)
              } catch (e) {
                if ("function" == typeof t) return (t(e), r(e))
                return s(e)
              }
              e.randomizeChain && (0, c.shuffleArray)(e.proxies)
              try {
                let n
                for (let t = 0; t < e.proxies.length; t++) {
                  let r = e.proxies[t],
                    s =
                      t === e.proxies.length - 1
                        ? e.destination
                        : { host: e.proxies[t + 1].host || e.proxies[t + 1].ipaddress, port: e.proxies[t + 1].port },
                    i = yield h.createConnection({ command: "connect", proxy: r, destination: s, existing_socket: n })
                  n = n || i.socket
                }
                ;("function" == typeof t && t(null, { socket: n }), r({ socket: n }))
              } catch (e) {
                "function" == typeof t ? (t(e), r(e)) : s(e)
              }
            }),
          )
        }
        static createUDPFrame(e) {
          let t = new o.SmartBuffer()
          return (
            t.writeUInt16BE(0),
            t.writeUInt8(e.frameNumber || 0),
            i.isIPv4(e.remoteHost.host)
              ? (t.writeUInt8(a.Socks5HostType.IPv4), t.writeUInt32BE((0, l.ipv4ToInt32)(e.remoteHost.host)))
              : i.isIPv6(e.remoteHost.host)
                ? (t.writeUInt8(a.Socks5HostType.IPv6), t.writeBuffer((0, l.ipToBuffer)(e.remoteHost.host)))
                : (t.writeUInt8(a.Socks5HostType.Hostname),
                  t.writeUInt8(Buffer.byteLength(e.remoteHost.host)),
                  t.writeString(e.remoteHost.host)),
            t.writeUInt16BE(e.remoteHost.port),
            t.writeBuffer(e.data),
            t.toBuffer()
          )
        }
        static parseUDPFrame(e) {
          let t = o.SmartBuffer.fromBuffer(e)
          t.readOffset = 2
          let r = t.readUInt8(),
            n = t.readUInt8()
          return {
            frameNumber: r,
            remoteHost: {
              host:
                n === a.Socks5HostType.IPv4
                  ? (0, l.int32ToIpv4)(t.readUInt32BE())
                  : n === a.Socks5HostType.IPv6
                    ? d.Address6.fromByteArray(Array.from(t.readBuffer(16))).canonicalForm()
                    : t.readString(t.readUInt8()),
              port: t.readUInt16BE(),
            },
            data: t.readBuffer(),
          }
        }
        setState(e) {
          this.state !== a.SocksClientState.Error && (this.state = e)
        }
        connect(e) {
          ;((this.onDataReceived = (e) => this.onDataReceivedHandler(e)),
            (this.onClose = () => this.onCloseHandler()),
            (this.onError = (e) => this.onErrorHandler(e)),
            (this.onConnect = () => this.onConnectHandler()))
          let t = setTimeout(() => this.onEstablishedTimeout(), this.options.timeout || a.DEFAULT_TIMEOUT)
          ;(t.unref && "function" == typeof t.unref && t.unref(),
            e ? (this.socket = e) : (this.socket = new i.Socket()),
            this.socket.once("close", this.onClose),
            this.socket.once("error", this.onError),
            this.socket.once("connect", this.onConnect),
            this.socket.on("data", this.onDataReceived),
            this.setState(a.SocksClientState.Connecting),
            (this.receiveBuffer = new u.ReceiveBuffer()),
            e
              ? this.socket.emit("connect")
              : (this.socket.connect(this.getSocketOptions()),
                void 0 !== this.options.set_tcp_nodelay &&
                  null !== this.options.set_tcp_nodelay &&
                  this.socket.setNoDelay(!!this.options.set_tcp_nodelay)),
            this.prependOnceListener("established", (e) => {
              setImmediate(() => {
                if (this.receiveBuffer.length > 0) {
                  let t = this.receiveBuffer.get(this.receiveBuffer.length)
                  e.socket.emit("data", t)
                }
                e.socket.resume()
              })
            }))
        }
        getSocketOptions() {
          return Object.assign(Object.assign({}, this.options.socket_options), {
            host: this.options.proxy.host || this.options.proxy.ipaddress,
            port: this.options.proxy.port,
          })
        }
        onEstablishedTimeout() {
          this.state !== a.SocksClientState.Established &&
            this.state !== a.SocksClientState.BoundWaitingForConnection &&
            this.closeSocket(a.ERRORS.ProxyConnectionTimedOut)
        }
        onConnectHandler() {
          ;(this.setState(a.SocksClientState.Connected),
            4 === this.options.proxy.type ? this.sendSocks4InitialHandshake() : this.sendSocks5InitialHandshake(),
            this.setState(a.SocksClientState.SentInitialHandshake))
        }
        onDataReceivedHandler(e) {
          ;(this.receiveBuffer.append(e), this.processData())
        }
        processData() {
          for (
            ;
            this.state !== a.SocksClientState.Established &&
            this.state !== a.SocksClientState.Error &&
            this.receiveBuffer.length >= this.nextRequiredPacketBufferSize;
          )
            if (this.state === a.SocksClientState.SentInitialHandshake)
              4 === this.options.proxy.type
                ? this.handleSocks4FinalHandshakeResponse()
                : this.handleInitialSocks5HandshakeResponse()
            else if (this.state === a.SocksClientState.SentAuthentication)
              this.handleInitialSocks5AuthenticationHandshakeResponse()
            else if (this.state === a.SocksClientState.SentFinalHandshake) this.handleSocks5FinalHandshakeResponse()
            else if (this.state === a.SocksClientState.BoundWaitingForConnection)
              4 === this.options.proxy.type
                ? this.handleSocks4IncomingConnectionResponse()
                : this.handleSocks5IncomingConnectionResponse()
            else {
              this.closeSocket(a.ERRORS.InternalError)
              break
            }
        }
        onCloseHandler() {
          this.closeSocket(a.ERRORS.SocketClosed)
        }
        onErrorHandler(e) {
          this.closeSocket(e.message)
        }
        removeInternalSocketHandlers() {
          ;(this.socket.pause(),
            this.socket.removeListener("data", this.onDataReceived),
            this.socket.removeListener("close", this.onClose),
            this.socket.removeListener("error", this.onError),
            this.socket.removeListener("connect", this.onConnect))
        }
        closeSocket(e) {
          this.state !== a.SocksClientState.Error &&
            (this.setState(a.SocksClientState.Error),
            this.socket.destroy(),
            this.removeInternalSocketHandlers(),
            this.emit("error", new c.SocksClientError(e, this.options)))
        }
        sendSocks4InitialHandshake() {
          let e = this.options.proxy.userId || "",
            t = new o.SmartBuffer()
          ;(t.writeUInt8(4),
            t.writeUInt8(a.SocksCommand[this.options.command]),
            t.writeUInt16BE(this.options.destination.port),
            i.isIPv4(this.options.destination.host)
              ? (t.writeBuffer((0, l.ipToBuffer)(this.options.destination.host)), t.writeStringNT(e))
              : (t.writeUInt8(0),
                t.writeUInt8(0),
                t.writeUInt8(0),
                t.writeUInt8(1),
                t.writeStringNT(e),
                t.writeStringNT(this.options.destination.host)),
            (this.nextRequiredPacketBufferSize = a.SOCKS_INCOMING_PACKET_SIZES.Socks4Response),
            this.socket.write(t.toBuffer()))
        }
        handleSocks4FinalHandshakeResponse() {
          let e = this.receiveBuffer.get(8)
          if (e[1] !== a.Socks4Response.Granted)
            this.closeSocket(`${a.ERRORS.Socks4ProxyRejectedConnection} - (${a.Socks4Response[e[1]]})`)
          else if (a.SocksCommand[this.options.command] === a.SocksCommand.bind) {
            let t = o.SmartBuffer.fromBuffer(e)
            t.readOffset = 2
            let r = { port: t.readUInt16BE(), host: (0, l.int32ToIpv4)(t.readUInt32BE()) }
            ;("0.0.0.0" === r.host && (r.host = this.options.proxy.ipaddress),
              this.setState(a.SocksClientState.BoundWaitingForConnection),
              this.emit("bound", { remoteHost: r, socket: this.socket }))
          } else
            (this.setState(a.SocksClientState.Established),
              this.removeInternalSocketHandlers(),
              this.emit("established", { socket: this.socket }))
        }
        handleSocks4IncomingConnectionResponse() {
          let e = this.receiveBuffer.get(8)
          if (e[1] !== a.Socks4Response.Granted)
            this.closeSocket(`${a.ERRORS.Socks4ProxyRejectedIncomingBoundConnection} - (${a.Socks4Response[e[1]]})`)
          else {
            let t = o.SmartBuffer.fromBuffer(e)
            t.readOffset = 2
            let r = { port: t.readUInt16BE(), host: (0, l.int32ToIpv4)(t.readUInt32BE()) }
            ;(this.setState(a.SocksClientState.Established),
              this.removeInternalSocketHandlers(),
              this.emit("established", { remoteHost: r, socket: this.socket }))
          }
        }
        sendSocks5InitialHandshake() {
          let e = new o.SmartBuffer(),
            t = [a.Socks5Auth.NoAuth]
          for (let r of ((this.options.proxy.userId || this.options.proxy.password) && t.push(a.Socks5Auth.UserPass),
          void 0 !== this.options.proxy.custom_auth_method && t.push(this.options.proxy.custom_auth_method),
          e.writeUInt8(5),
          e.writeUInt8(t.length),
          t))
            e.writeUInt8(r)
          ;((this.nextRequiredPacketBufferSize = a.SOCKS_INCOMING_PACKET_SIZES.Socks5InitialHandshakeResponse),
            this.socket.write(e.toBuffer()),
            this.setState(a.SocksClientState.SentInitialHandshake))
        }
        handleInitialSocks5HandshakeResponse() {
          let e = this.receiveBuffer.get(2)
          5 !== e[0]
            ? this.closeSocket(a.ERRORS.InvalidSocks5IntiailHandshakeSocksVersion)
            : e[1] === a.SOCKS5_NO_ACCEPTABLE_AUTH
              ? this.closeSocket(a.ERRORS.InvalidSocks5InitialHandshakeNoAcceptedAuthType)
              : e[1] === a.Socks5Auth.NoAuth
                ? ((this.socks5ChosenAuthType = a.Socks5Auth.NoAuth), this.sendSocks5CommandRequest())
                : e[1] === a.Socks5Auth.UserPass
                  ? ((this.socks5ChosenAuthType = a.Socks5Auth.UserPass), this.sendSocks5UserPassAuthentication())
                  : e[1] === this.options.proxy.custom_auth_method
                    ? ((this.socks5ChosenAuthType = this.options.proxy.custom_auth_method),
                      this.sendSocks5CustomAuthentication())
                    : this.closeSocket(a.ERRORS.InvalidSocks5InitialHandshakeUnknownAuthType)
        }
        sendSocks5UserPassAuthentication() {
          let e = this.options.proxy.userId || "",
            t = this.options.proxy.password || "",
            r = new o.SmartBuffer()
          ;(r.writeUInt8(1),
            r.writeUInt8(Buffer.byteLength(e)),
            r.writeString(e),
            r.writeUInt8(Buffer.byteLength(t)),
            r.writeString(t),
            (this.nextRequiredPacketBufferSize = a.SOCKS_INCOMING_PACKET_SIZES.Socks5UserPassAuthenticationResponse),
            this.socket.write(r.toBuffer()),
            this.setState(a.SocksClientState.SentAuthentication))
        }
        sendSocks5CustomAuthentication() {
          return n(this, void 0, void 0, function* () {
            ;((this.nextRequiredPacketBufferSize = this.options.proxy.custom_auth_response_size),
              this.socket.write(yield this.options.proxy.custom_auth_request_handler()),
              this.setState(a.SocksClientState.SentAuthentication))
          })
        }
        handleSocks5CustomAuthHandshakeResponse(e) {
          return n(this, void 0, void 0, function* () {
            return yield this.options.proxy.custom_auth_response_handler(e)
          })
        }
        handleSocks5AuthenticationNoAuthHandshakeResponse(e) {
          return n(this, void 0, void 0, function* () {
            return 0 === e[1]
          })
        }
        handleSocks5AuthenticationUserPassHandshakeResponse(e) {
          return n(this, void 0, void 0, function* () {
            return 0 === e[1]
          })
        }
        handleInitialSocks5AuthenticationHandshakeResponse() {
          return n(this, void 0, void 0, function* () {
            this.setState(a.SocksClientState.ReceivedAuthenticationResponse)
            let e = !1
            ;(this.socks5ChosenAuthType === a.Socks5Auth.NoAuth
              ? (e = yield this.handleSocks5AuthenticationNoAuthHandshakeResponse(this.receiveBuffer.get(2)))
              : this.socks5ChosenAuthType === a.Socks5Auth.UserPass
                ? (e = yield this.handleSocks5AuthenticationUserPassHandshakeResponse(this.receiveBuffer.get(2)))
                : this.socks5ChosenAuthType === this.options.proxy.custom_auth_method &&
                  (e = yield this.handleSocks5CustomAuthHandshakeResponse(
                    this.receiveBuffer.get(this.options.proxy.custom_auth_response_size),
                  )),
              e ? this.sendSocks5CommandRequest() : this.closeSocket(a.ERRORS.Socks5AuthenticationFailed))
          })
        }
        sendSocks5CommandRequest() {
          let e = new o.SmartBuffer()
          ;(e.writeUInt8(5),
            e.writeUInt8(a.SocksCommand[this.options.command]),
            e.writeUInt8(0),
            i.isIPv4(this.options.destination.host)
              ? (e.writeUInt8(a.Socks5HostType.IPv4), e.writeBuffer((0, l.ipToBuffer)(this.options.destination.host)))
              : i.isIPv6(this.options.destination.host)
                ? (e.writeUInt8(a.Socks5HostType.IPv6), e.writeBuffer((0, l.ipToBuffer)(this.options.destination.host)))
                : (e.writeUInt8(a.Socks5HostType.Hostname),
                  e.writeUInt8(this.options.destination.host.length),
                  e.writeString(this.options.destination.host)),
            e.writeUInt16BE(this.options.destination.port),
            (this.nextRequiredPacketBufferSize = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader),
            this.socket.write(e.toBuffer()),
            this.setState(a.SocksClientState.SentFinalHandshake))
        }
        handleSocks5FinalHandshakeResponse() {
          let e = this.receiveBuffer.peek(5)
          if (5 !== e[0] || e[1] !== a.Socks5Response.Granted)
            this.closeSocket(`${a.ERRORS.InvalidSocks5FinalHandshakeRejected} - ${a.Socks5Response[e[1]]}`)
          else {
            let t,
              r,
              n = e[3]
            if (n === a.Socks5HostType.IPv4) {
              let e = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4
              if (this.receiveBuffer.length < e) {
                this.nextRequiredPacketBufferSize = e
                return
              }
              ;((r = o.SmartBuffer.fromBuffer(this.receiveBuffer.get(e).slice(4))),
                "0.0.0.0" === (t = { host: (0, l.int32ToIpv4)(r.readUInt32BE()), port: r.readUInt16BE() }).host &&
                  (t.host = this.options.proxy.ipaddress))
            } else if (n === a.Socks5HostType.Hostname) {
              let n = e[4],
                s = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(n)
              if (this.receiveBuffer.length < s) {
                this.nextRequiredPacketBufferSize = s
                return
              }
              t = {
                host: (r = o.SmartBuffer.fromBuffer(this.receiveBuffer.get(s).slice(5))).readString(n),
                port: r.readUInt16BE(),
              }
            } else if (n === a.Socks5HostType.IPv6) {
              let e = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6
              if (this.receiveBuffer.length < e) {
                this.nextRequiredPacketBufferSize = e
                return
              }
              ;((r = o.SmartBuffer.fromBuffer(this.receiveBuffer.get(e).slice(4))),
                (t = {
                  host: d.Address6.fromByteArray(Array.from(r.readBuffer(16))).canonicalForm(),
                  port: r.readUInt16BE(),
                }))
            }
            ;(this.setState(a.SocksClientState.ReceivedFinalResponse),
              a.SocksCommand[this.options.command] === a.SocksCommand.connect
                ? (this.setState(a.SocksClientState.Established),
                  this.removeInternalSocketHandlers(),
                  this.emit("established", { remoteHost: t, socket: this.socket }))
                : a.SocksCommand[this.options.command] === a.SocksCommand.bind
                  ? (this.setState(a.SocksClientState.BoundWaitingForConnection),
                    (this.nextRequiredPacketBufferSize = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader),
                    this.emit("bound", { remoteHost: t, socket: this.socket }))
                  : a.SocksCommand[this.options.command] === a.SocksCommand.associate &&
                    (this.setState(a.SocksClientState.Established),
                    this.removeInternalSocketHandlers(),
                    this.emit("established", { remoteHost: t, socket: this.socket })))
          }
        }
        handleSocks5IncomingConnectionResponse() {
          let e = this.receiveBuffer.peek(5)
          if (5 !== e[0] || e[1] !== a.Socks5Response.Granted)
            this.closeSocket(`${a.ERRORS.Socks5ProxyRejectedIncomingBoundConnection} - ${a.Socks5Response[e[1]]}`)
          else {
            let t,
              r,
              n = e[3]
            if (n === a.Socks5HostType.IPv4) {
              let e = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4
              if (this.receiveBuffer.length < e) {
                this.nextRequiredPacketBufferSize = e
                return
              }
              ;((r = o.SmartBuffer.fromBuffer(this.receiveBuffer.get(e).slice(4))),
                "0.0.0.0" === (t = { host: (0, l.int32ToIpv4)(r.readUInt32BE()), port: r.readUInt16BE() }).host &&
                  (t.host = this.options.proxy.ipaddress))
            } else if (n === a.Socks5HostType.Hostname) {
              let n = e[4],
                s = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(n)
              if (this.receiveBuffer.length < s) {
                this.nextRequiredPacketBufferSize = s
                return
              }
              t = {
                host: (r = o.SmartBuffer.fromBuffer(this.receiveBuffer.get(s).slice(5))).readString(n),
                port: r.readUInt16BE(),
              }
            } else if (n === a.Socks5HostType.IPv6) {
              let e = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6
              if (this.receiveBuffer.length < e) {
                this.nextRequiredPacketBufferSize = e
                return
              }
              ;((r = o.SmartBuffer.fromBuffer(this.receiveBuffer.get(e).slice(4))),
                (t = {
                  host: d.Address6.fromByteArray(Array.from(r.readBuffer(16))).canonicalForm(),
                  port: r.readUInt16BE(),
                }))
            }
            ;(this.setState(a.SocksClientState.Established),
              this.removeInternalSocketHandlers(),
              this.emit("established", { remoteHost: t, socket: this.socket }))
          }
        }
        get socksClientOptions() {
          return Object.assign({}, this.options)
        }
      }
      t.SocksClient = h
    },
    95420(e, t) {
      "use strict"
      var r, n, s, i, o, a, l, u, c, d, h, f
      ;((t.SOCKS5_NO_ACCEPTABLE_AUTH =
        t.SOCKS5_CUSTOM_AUTH_END =
        t.SOCKS5_CUSTOM_AUTH_START =
        t.SOCKS_INCOMING_PACKET_SIZES =
        t.SocksClientState =
        t.Socks5Response =
        t.Socks5HostType =
        t.Socks5Auth =
        t.Socks4Response =
        t.SocksCommand =
        t.ERRORS =
        t.DEFAULT_TIMEOUT =
          void 0),
        (t.DEFAULT_TIMEOUT = 3e4),
        (t.ERRORS = {
          InvalidSocksCommand: "An invalid SOCKS command was provided. Valid options are connect, bind, and associate.",
          InvalidSocksCommandForOperation:
            "An invalid SOCKS command was provided. Only a subset of commands are supported for this operation.",
          InvalidSocksCommandChain:
            "An invalid SOCKS command was provided. Chaining currently only supports the connect command.",
          InvalidSocksClientOptionsDestination: "An invalid destination host was provided.",
          InvalidSocksClientOptionsExistingSocket:
            "An invalid existing socket was provided. This should be an instance of stream.Duplex.",
          InvalidSocksClientOptionsProxy: "Invalid SOCKS proxy details were provided.",
          InvalidSocksClientOptionsTimeout:
            "An invalid timeout value was provided. Please enter a value above 0 (in ms).",
          InvalidSocksClientOptionsProxiesLength: "At least two socks proxies must be provided for chaining.",
          InvalidSocksClientOptionsCustomAuthRange: "Custom auth must be a value between 0x80 and 0xFE.",
          InvalidSocksClientOptionsCustomAuthOptions:
            "When a custom_auth_method is provided, custom_auth_request_handler, custom_auth_response_size, and custom_auth_response_handler must also be provided and valid.",
          NegotiationError: "Negotiation error",
          SocketClosed: "Socket closed",
          ProxyConnectionTimedOut: "Proxy connection timed out",
          InternalError: "SocksClient internal error (this should not happen)",
          InvalidSocks4HandshakeResponse: "Received invalid Socks4 handshake response",
          Socks4ProxyRejectedConnection: "Socks4 Proxy rejected connection",
          InvalidSocks4IncomingConnectionResponse: "Socks4 invalid incoming connection response",
          Socks4ProxyRejectedIncomingBoundConnection: "Socks4 Proxy rejected incoming bound connection",
          InvalidSocks5InitialHandshakeResponse: "Received invalid Socks5 initial handshake response",
          InvalidSocks5IntiailHandshakeSocksVersion:
            "Received invalid Socks5 initial handshake (invalid socks version)",
          InvalidSocks5InitialHandshakeNoAcceptedAuthType:
            "Received invalid Socks5 initial handshake (no accepted authentication type)",
          InvalidSocks5InitialHandshakeUnknownAuthType:
            "Received invalid Socks5 initial handshake (unknown authentication type)",
          Socks5AuthenticationFailed: "Socks5 Authentication failed",
          InvalidSocks5FinalHandshake: "Received invalid Socks5 final handshake response",
          InvalidSocks5FinalHandshakeRejected: "Socks5 proxy rejected connection",
          InvalidSocks5IncomingConnectionResponse: "Received invalid Socks5 incoming connection response",
          Socks5ProxyRejectedIncomingBoundConnection: "Socks5 Proxy rejected incoming bound connection",
        }),
        (t.SOCKS_INCOMING_PACKET_SIZES = {
          Socks5InitialHandshakeResponse: 2,
          Socks5UserPassAuthenticationResponse: 2,
          Socks5ResponseHeader: 5,
          Socks5ResponseIPv4: 10,
          Socks5ResponseIPv6: 22,
          Socks5ResponseHostname: (e) => e + 7,
          Socks4Response: 8,
        }),
        ((l = r || (t.SocksCommand = r = {}))[(l.connect = 1)] = "connect"),
        (l[(l.bind = 2)] = "bind"),
        (l[(l.associate = 3)] = "associate"),
        ((u = n || (t.Socks4Response = n = {}))[(u.Granted = 90)] = "Granted"),
        (u[(u.Failed = 91)] = "Failed"),
        (u[(u.Rejected = 92)] = "Rejected"),
        (u[(u.RejectedIdent = 93)] = "RejectedIdent"),
        ((c = s || (t.Socks5Auth = s = {}))[(c.NoAuth = 0)] = "NoAuth"),
        (c[(c.GSSApi = 1)] = "GSSApi"),
        (c[(c.UserPass = 2)] = "UserPass"),
        (t.SOCKS5_CUSTOM_AUTH_START = 128),
        (t.SOCKS5_CUSTOM_AUTH_END = 254),
        (t.SOCKS5_NO_ACCEPTABLE_AUTH = 255),
        ((d = i || (t.Socks5Response = i = {}))[(d.Granted = 0)] = "Granted"),
        (d[(d.Failure = 1)] = "Failure"),
        (d[(d.NotAllowed = 2)] = "NotAllowed"),
        (d[(d.NetworkUnreachable = 3)] = "NetworkUnreachable"),
        (d[(d.HostUnreachable = 4)] = "HostUnreachable"),
        (d[(d.ConnectionRefused = 5)] = "ConnectionRefused"),
        (d[(d.TTLExpired = 6)] = "TTLExpired"),
        (d[(d.CommandNotSupported = 7)] = "CommandNotSupported"),
        (d[(d.AddressNotSupported = 8)] = "AddressNotSupported"),
        ((h = o || (t.Socks5HostType = o = {}))[(h.IPv4 = 1)] = "IPv4"),
        (h[(h.Hostname = 3)] = "Hostname"),
        (h[(h.IPv6 = 4)] = "IPv6"),
        ((f = a || (t.SocksClientState = a = {}))[(f.Created = 0)] = "Created"),
        (f[(f.Connecting = 1)] = "Connecting"),
        (f[(f.Connected = 2)] = "Connected"),
        (f[(f.SentInitialHandshake = 3)] = "SentInitialHandshake"),
        (f[(f.ReceivedInitialHandshakeResponse = 4)] = "ReceivedInitialHandshakeResponse"),
        (f[(f.SentAuthentication = 5)] = "SentAuthentication"),
        (f[(f.ReceivedAuthenticationResponse = 6)] = "ReceivedAuthenticationResponse"),
        (f[(f.SentFinalHandshake = 7)] = "SentFinalHandshake"),
        (f[(f.ReceivedFinalResponse = 8)] = "ReceivedFinalResponse"),
        (f[(f.BoundWaitingForConnection = 9)] = "BoundWaitingForConnection"),
        (f[(f.Established = 10)] = "Established"),
        (f[(f.Disconnected = 11)] = "Disconnected"),
        (f[(f.Error = 99)] = "Error"))
    },
    2288(e, t, r) {
      "use strict"
      t.ipToBuffer =
        t.int32ToIpv4 =
        t.ipv4ToInt32 =
        t.validateSocksClientChainOptions =
        t.validateSocksClientOptions =
          void 0
      let n = r(51733),
        s = r(95420),
        i = r(76272),
        o = r(42966),
        a = r(52135)
      function l(e, t) {
        if (void 0 !== e.custom_auth_method) {
          if (e.custom_auth_method < s.SOCKS5_CUSTOM_AUTH_START || e.custom_auth_method > s.SOCKS5_CUSTOM_AUTH_END)
            throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsCustomAuthRange, t)
          if (
            void 0 === e.custom_auth_request_handler ||
            "function" != typeof e.custom_auth_request_handler ||
            void 0 === e.custom_auth_response_size ||
            void 0 === e.custom_auth_response_handler ||
            "function" != typeof e.custom_auth_response_handler
          )
            throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, t)
        }
      }
      function u(e) {
        return (
          e &&
          "string" == typeof e.host &&
          256 > Buffer.byteLength(e.host) &&
          "number" == typeof e.port &&
          e.port >= 0 &&
          e.port <= 65535
        )
      }
      function c(e) {
        return (
          e &&
          ("string" == typeof e.host || "string" == typeof e.ipaddress) &&
          "number" == typeof e.port &&
          e.port >= 0 &&
          e.port <= 65535 &&
          (4 === e.type || 5 === e.type)
        )
      }
      function d(e) {
        return "number" == typeof e && e > 0
      }
      ;((t.validateSocksClientOptions = function (e, t = ["connect", "bind", "associate"]) {
        if (!s.SocksCommand[e.command]) throw new n.SocksClientError(s.ERRORS.InvalidSocksCommand, e)
        if (-1 === t.indexOf(e.command)) throw new n.SocksClientError(s.ERRORS.InvalidSocksCommandForOperation, e)
        if (!u(e.destination)) throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsDestination, e)
        if (!c(e.proxy)) throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsProxy, e)
        if ((l(e.proxy, e), e.timeout && !d(e.timeout)))
          throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsTimeout, e)
        if (e.existing_socket && !(e.existing_socket instanceof i.Duplex))
          throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsExistingSocket, e)
      }),
        (t.validateSocksClientChainOptions = function (e) {
          if ("connect" !== e.command) throw new n.SocksClientError(s.ERRORS.InvalidSocksCommandChain, e)
          if (!u(e.destination)) throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsDestination, e)
          if (!(e.proxies && Array.isArray(e.proxies) && e.proxies.length >= 2))
            throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsProxiesLength, e)
          if (
            (e.proxies.forEach((t) => {
              if (!c(t)) throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsProxy, e)
              l(t, e)
            }),
            e.timeout && !d(e.timeout))
          )
            throw new n.SocksClientError(s.ERRORS.InvalidSocksClientOptionsTimeout, e)
        }),
        (t.ipv4ToInt32 = function (e) {
          return new o.Address4(e).toArray().reduce((e, t) => (e << 8) + t, 0) >>> 0
        }),
        (t.int32ToIpv4 = function (e) {
          return [(e >>> 24) & 255, (e >>> 16) & 255, (e >>> 8) & 255, 255 & e].join(".")
        }),
        (t.ipToBuffer = function (e) {
          if (a.isIPv4(e)) {
            let t = new o.Address4(e)
            return Buffer.from(t.toArray())
          }
          if (a.isIPv6(e)) {
            let t = new o.Address6(e)
            return Buffer.from(
              t
                .canonicalForm()
                .split(":")
                .map((e) => e.padStart(4, "0"))
                .join(""),
              "hex",
            )
          }
          throw Error("Invalid IP address format")
        }))
    },
    79986(e, t) {
      "use strict"
      ;((t.ReceiveBuffer = void 0),
        (t.ReceiveBuffer = class {
          constructor(e = 4096) {
            ;((this.buffer = Buffer.allocUnsafe(e)), (this.offset = 0), (this.originalSize = e))
          }
          get length() {
            return this.offset
          }
          append(e) {
            if (!Buffer.isBuffer(e)) throw Error("Attempted to append a non-buffer instance to ReceiveBuffer.")
            if (this.offset + e.length >= this.buffer.length) {
              let t = this.buffer
              ;((this.buffer = Buffer.allocUnsafe(
                Math.max(this.buffer.length + this.originalSize, this.buffer.length + e.length),
              )),
                t.copy(this.buffer))
            }
            return (e.copy(this.buffer, this.offset), (this.offset += e.length))
          }
          peek(e) {
            if (e > this.offset) throw Error("Attempted to read beyond the bounds of the managed internal data.")
            return this.buffer.slice(0, e)
          }
          get(e) {
            if (e > this.offset) throw Error("Attempted to read beyond the bounds of the managed internal data.")
            let t = Buffer.allocUnsafe(e)
            return (
              this.buffer.slice(0, e).copy(t),
              this.buffer.copyWithin(0, e, e + this.offset - e),
              (this.offset -= e),
              t
            )
          }
        }))
    },
    51733(e, t) {
      "use strict"
      ;((t.shuffleArray = t.SocksClientError = void 0),
        (t.SocksClientError = class extends Error {
          constructor(e, t) {
            ;(super(e), (this.options = t))
          }
        }),
        (t.shuffleArray = function (e) {
          for (let t = e.length - 1; t > 0; t--) {
            let r = Math.floor(Math.random() * (t + 1))
            ;[e[t], e[r]] = [e[r], e[t]]
          }
        }))
    },
    82295(e, t, r) {
      "use strict"
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var s = Object.getOwnPropertyDescriptor(t, r)
                ;((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, s))
              }
            : function (e, t, r, n) {
                ;(void 0 === n && (n = r), (e[n] = t[r]))
              }),
        s =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
          }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), s(r(69953), t))
    },
    87289(e) {
      "use strict"
      e.exports = (e) => {
        let t = "string" == typeof e ? "\n" : "\n".charCodeAt(),
          r = "string" == typeof e ? "\r" : "\r".charCodeAt()
        return (
          e[e.length - 1] === t && (e = e.slice(0, e.length - 1)),
          e[e.length - 1] === r && (e = e.slice(0, e.length - 1)),
          e
        )
      }
    },
    77021(e) {
      "use strict"
      e.exports = function (e) {
        let t = e.length,
          r = 0
        for (; r < t;)
          if ((128 & e[r]) == 0) r++
          else if ((224 & e[r]) == 192) {
            if (r + 1 === t || (192 & e[r + 1]) != 128 || (254 & e[r]) == 192) return !1
            r += 2
          } else if ((240 & e[r]) == 224) {
            if (
              r + 2 >= t ||
              (192 & e[r + 1]) != 128 ||
              (192 & e[r + 2]) != 128 ||
              (224 === e[r] && (224 & e[r + 1]) == 128) ||
              (237 === e[r] && (224 & e[r + 1]) == 160)
            )
              return !1
            r += 3
          } else {
            if (
              (248 & e[r]) != 240 ||
              r + 3 >= t ||
              (192 & e[r + 1]) != 128 ||
              (192 & e[r + 2]) != 128 ||
              (192 & e[r + 3]) != 128 ||
              (240 === e[r] && (240 & e[r + 1]) == 128) ||
              (244 === e[r] && e[r + 1] > 143) ||
              e[r] > 244
            )
              return !1
            r += 4
          }
        return !0
      }
    },
    38607(e, t, r) {
      "use strict"
      try {
        e.exports = r(24979)(__dirname)
      } catch (t) {
        e.exports = r(77021)
      }
    },
    65444(e, t, r) {
      let n = "win32" === process.platform || "cygwin" === process.env.OSTYPE || "msys" === process.env.OSTYPE,
        s = r(62003),
        i = n ? ";" : ":",
        o = r(17533),
        a = (e) => Object.assign(Error(`not found: ${e}`), { code: "ENOENT" }),
        l = (e, t) => {
          let r = t.colon || i,
            s =
              e.match(/\//) || (n && e.match(/\\/))
                ? [""]
                : [...(n ? [process.cwd()] : []), ...(t.path || process.env.PATH || "").split(r)],
            o = n ? t.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "",
            a = n ? o.split(r) : [""]
          return (n && -1 !== e.indexOf(".") && "" !== a[0] && a.unshift(""), { pathEnv: s, pathExt: a, pathExtExe: o })
        },
        u = (e, t, r) => {
          ;("function" == typeof t && ((r = t), (t = {})), t || (t = {}))
          let { pathEnv: n, pathExt: i, pathExtExe: u } = l(e, t),
            c = [],
            d = (r) =>
              new Promise((i, o) => {
                if (r === n.length) return t.all && c.length ? i(c) : o(a(e))
                let l = n[r],
                  u = /^".*"$/.test(l) ? l.slice(1, -1) : l,
                  d = s.join(u, e)
                i(h(!u && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d, r, 0))
              }),
            h = (e, r, n) =>
              new Promise((s, a) => {
                if (n === i.length) return s(d(r + 1))
                let l = i[n]
                o(e + l, { pathExt: u }, (i, o) => {
                  if (!i && o)
                    if (!t.all) return s(e + l)
                    else c.push(e + l)
                  return s(h(e, r, n + 1))
                })
              })
          return r ? d(0).then((e) => r(null, e), r) : d(0)
        }
      ;((e.exports = u),
        (u.sync = (e, t) => {
          let { pathEnv: r, pathExt: n, pathExtExe: i } = l(e, (t = t || {})),
            u = []
          for (let a = 0; a < r.length; a++) {
            let l = r[a],
              c = /^".*"$/.test(l) ? l.slice(1, -1) : l,
              d = s.join(c, e),
              h = !c && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d
            for (let e = 0; e < n.length; e++) {
              let r = h + n[e]
              try {
                if (o.sync(r, { pathExt: i }))
                  if (!t.all) return r
                  else u.push(r)
              } catch (e) {}
            }
          }
          if (t.all && u.length) return u
          if (t.nothrow) return null
          throw a(e)
        }))
    },
    59749(e, t, r) {
      let { isexe: n, sync: s } = r(24255),
        { join: i, delimiter: o, sep: a, posix: l } = r(62003),
        u = "win32" === process.platform,
        c = new RegExp(`[${l.sep}${a === l.sep ? "" : a}]`.replace(/(\\)/g, "\\$1")),
        d = RegExp(`^\\.${c.source}`),
        h = (e) => Object.assign(Error(`not found: ${e}`), { code: "ENOENT" }),
        f = (e, { path: t = process.env.PATH, pathExt: r = process.env.PATHEXT, delimiter: n = o }) => {
          let s = e.match(c) ? [""] : [...(u ? [process.cwd()] : []), ...(t || "").split(n)]
          if (u) {
            let t = r || [".EXE", ".CMD", ".BAT", ".COM"].join(n),
              i = t.split(n).flatMap((e) => [e, e.toLowerCase()])
            return (e.includes(".") && "" !== i[0] && i.unshift(""), { pathEnv: s, pathExt: i, pathExtExe: t })
          }
          return { pathEnv: s, pathExt: [""] }
        },
        p = (e, t) => {
          let r = /^".*"$/.test(e) ? e.slice(1, -1) : e
          return (!r && d.test(t) ? t.slice(0, 2) : "") + i(r, t)
        },
        m = async (e, t = {}) => {
          let { pathEnv: r, pathExt: s, pathExtExe: i } = f(e, t),
            o = []
          for (let a of r) {
            let r = p(a, e)
            for (let e of s) {
              let s = r + e
              if (await n(s, { pathExt: i, ignoreErrors: !0 })) {
                if (!t.all) return s
                o.push(s)
              }
            }
          }
          if (t.all && o.length) return o
          if (t.nothrow) return null
          throw h(e)
        }
      ;((e.exports = m),
        (m.sync = (e, t = {}) => {
          let { pathEnv: r, pathExt: n, pathExtExe: i } = f(e, t),
            o = []
          for (let a of r) {
            let r = p(a, e)
            for (let e of n) {
              let n = r + e
              if (s(n, { pathExt: i, ignoreErrors: !0 })) {
                if (!t.all) return n
                o.push(n)
              }
            }
          }
          if (t.all && o.length) return o
          if (t.nothrow) return null
          throw h(e)
        }))
    },
    53248(e, t, r) {
      "use strict"
      let { EMPTY_BUFFER: n } = r(67236),
        s = Buffer[Symbol.species]
      function i(e, t, r, n, s) {
        for (let i = 0; i < s; i++) r[n + i] = e[i] ^ t[3 & i]
      }
      function o(e, t) {
        for (let r = 0; r < e.length; r++) e[r] ^= t[3 & r]
      }
      function a(e) {
        let t
        return ((a.readOnly = !0), Buffer.isBuffer(e))
          ? e
          : (e instanceof ArrayBuffer
              ? (t = new s(e))
              : ArrayBuffer.isView(e)
                ? (t = new s(e.buffer, e.byteOffset, e.byteLength))
                : ((t = Buffer.from(e)), (a.readOnly = !1)),
            t)
      }
      if (
        ((e.exports = {
          concat: function (e, t) {
            if (0 === e.length) return n
            if (1 === e.length) return e[0]
            let r = Buffer.allocUnsafe(t),
              i = 0
            for (let t = 0; t < e.length; t++) {
              let n = e[t]
              ;(r.set(n, i), (i += n.length))
            }
            return i < t ? new s(r.buffer, r.byteOffset, i) : r
          },
          mask: i,
          toArrayBuffer: function (e) {
            return e.length === e.buffer.byteLength ? e.buffer : e.buffer.slice(e.byteOffset, e.byteOffset + e.length)
          },
          toBuffer: a,
          unmask: o,
        }),
        !process.env.WS_NO_BUFFER_UTIL)
      )
        try {
          let t = r(28368)
          ;((e.exports.mask = function (e, r, n, s, o) {
            o < 48 ? i(e, r, n, s, o) : t.mask(e, r, n, s, o)
          }),
            (e.exports.unmask = function (e, r) {
              e.length < 32 ? o(e, r) : t.unmask(e, r)
            }))
        } catch (e) {}
    },
    67236(e) {
      "use strict"
      let t = ["nodebuffer", "arraybuffer", "fragments"],
        r = "u" > typeof Blob
      ;(r && t.push("blob"),
        (e.exports = {
          BINARY_TYPES: t,
          CLOSE_TIMEOUT: 3e4,
          EMPTY_BUFFER: Buffer.alloc(0),
          GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
          hasBlob: r,
          kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
          kListener: Symbol("kListener"),
          kStatusCode: Symbol("status-code"),
          kWebSocket: Symbol("websocket"),
          NOOP: () => {},
        }))
    },
    815(e, t, r) {
      "use strict"
      let { kForOnEventAttribute: n, kListener: s } = r(67236),
        i = Symbol("kCode"),
        o = Symbol("kData"),
        a = Symbol("kError"),
        l = Symbol("kMessage"),
        u = Symbol("kReason"),
        c = Symbol("kTarget"),
        d = Symbol("kType"),
        h = Symbol("kWasClean")
      class f {
        constructor(e) {
          ;((this[c] = null), (this[d] = e))
        }
        get target() {
          return this[c]
        }
        get type() {
          return this[d]
        }
      }
      ;(Object.defineProperty(f.prototype, "target", { enumerable: !0 }),
        Object.defineProperty(f.prototype, "type", { enumerable: !0 }))
      class p extends f {
        constructor(e, t = {}) {
          ;(super(e),
            (this[i] = void 0 === t.code ? 0 : t.code),
            (this[u] = void 0 === t.reason ? "" : t.reason),
            (this[h] = void 0 !== t.wasClean && t.wasClean))
        }
        get code() {
          return this[i]
        }
        get reason() {
          return this[u]
        }
        get wasClean() {
          return this[h]
        }
      }
      ;(Object.defineProperty(p.prototype, "code", { enumerable: !0 }),
        Object.defineProperty(p.prototype, "reason", { enumerable: !0 }),
        Object.defineProperty(p.prototype, "wasClean", { enumerable: !0 }))
      class m extends f {
        constructor(e, t = {}) {
          ;(super(e),
            (this[a] = void 0 === t.error ? null : t.error),
            (this[l] = void 0 === t.message ? "" : t.message))
        }
        get error() {
          return this[a]
        }
        get message() {
          return this[l]
        }
      }
      ;(Object.defineProperty(m.prototype, "error", { enumerable: !0 }),
        Object.defineProperty(m.prototype, "message", { enumerable: !0 }))
      class g extends f {
        constructor(e, t = {}) {
          ;(super(e), (this[o] = void 0 === t.data ? null : t.data))
        }
        get data() {
          return this[o]
        }
      }
      function y(e, t, r) {
        "object" == typeof e && e.handleEvent ? e.handleEvent.call(e, r) : e.call(t, r)
      }
      ;(Object.defineProperty(g.prototype, "data", { enumerable: !0 }),
        (e.exports = {
          CloseEvent: p,
          ErrorEvent: m,
          Event: f,
          EventTarget: {
            addEventListener(e, t, r = {}) {
              let i
              for (let i of this.listeners(e)) if (!r[n] && i[s] === t && !i[n]) return
              if ("message" === e)
                i = function (e, r) {
                  let n = new g("message", { data: r ? e : e.toString() })
                  ;((n[c] = this), y(t, this, n))
                }
              else if ("close" === e)
                i = function (e, r) {
                  let n = new p("close", {
                    code: e,
                    reason: r.toString(),
                    wasClean: this._closeFrameReceived && this._closeFrameSent,
                  })
                  ;((n[c] = this), y(t, this, n))
                }
              else if ("error" === e)
                i = function (e) {
                  let r = new m("error", { error: e, message: e.message })
                  ;((r[c] = this), y(t, this, r))
                }
              else {
                if ("open" !== e) return
                i = function () {
                  let e = new f("open")
                  ;((e[c] = this), y(t, this, e))
                }
              }
              ;((i[n] = !!r[n]), (i[s] = t), r.once ? this.once(e, i) : this.on(e, i))
            },
            removeEventListener(e, t) {
              for (let r of this.listeners(e))
                if (r[s] === t && !r[n]) {
                  this.removeListener(e, r)
                  break
                }
            },
          },
          MessageEvent: g,
        }))
    },
    35444(e, t, r) {
      "use strict"
      let { tokenChars: n } = r(85718)
      function s(e, t, r) {
        void 0 === e[t] ? (e[t] = [r]) : e[t].push(r)
      }
      e.exports = {
        format: function (e) {
          return Object.keys(e)
            .map((t) => {
              let r = e[t]
              return (
                Array.isArray(r) || (r = [r]),
                r
                  .map((e) =>
                    [t]
                      .concat(
                        Object.keys(e).map((t) => {
                          let r = e[t]
                          return (Array.isArray(r) || (r = [r]), r.map((e) => (!0 === e ? t : `${t}=${e}`)).join("; "))
                        }),
                      )
                      .join("; "),
                  )
                  .join(", ")
              )
            })
            .join(", ")
        },
        parse: function (e) {
          let t,
            r,
            i = Object.create(null),
            o = Object.create(null),
            a = !1,
            l = !1,
            u = !1,
            c = -1,
            d = -1,
            h = -1,
            f = 0
          for (; f < e.length; f++)
            if (((d = e.charCodeAt(f)), void 0 === t))
              if (-1 === h && 1 === n[d]) -1 === c && (c = f)
              else if (0 !== f && (32 === d || 9 === d)) -1 === h && -1 !== c && (h = f)
              else if (59 === d || 44 === d) {
                if (-1 === c) throw SyntaxError(`Unexpected character at index ${f}`)
                ;-1 === h && (h = f)
                let r = e.slice(c, h)
                ;(44 === d ? (s(i, r, o), (o = Object.create(null))) : (t = r), (c = h = -1))
              } else throw SyntaxError(`Unexpected character at index ${f}`)
            else if (void 0 === r)
              if (-1 === h && 1 === n[d]) -1 === c && (c = f)
              else if (32 === d || 9 === d) -1 === h && -1 !== c && (h = f)
              else if (59 === d || 44 === d) {
                if (-1 === c) throw SyntaxError(`Unexpected character at index ${f}`)
                ;(-1 === h && (h = f),
                  s(o, e.slice(c, h), !0),
                  44 === d && (s(i, t, o), (o = Object.create(null)), (t = void 0)),
                  (c = h = -1))
              } else if (61 === d && -1 !== c && -1 === h) ((r = e.slice(c, f)), (c = h = -1))
              else throw SyntaxError(`Unexpected character at index ${f}`)
            else if (l) {
              if (1 !== n[d]) throw SyntaxError(`Unexpected character at index ${f}`)
              ;(-1 === c ? (c = f) : a || (a = !0), (l = !1))
            } else if (u)
              if (1 === n[d]) -1 === c && (c = f)
              else if (34 === d && -1 !== c) ((u = !1), (h = f))
              else if (92 === d) l = !0
              else throw SyntaxError(`Unexpected character at index ${f}`)
            else if (34 === d && 61 === e.charCodeAt(f - 1)) u = !0
            else if (-1 === h && 1 === n[d]) -1 === c && (c = f)
            else if (-1 !== c && (32 === d || 9 === d)) -1 === h && (h = f)
            else if (59 === d || 44 === d) {
              if (-1 === c) throw SyntaxError(`Unexpected character at index ${f}`)
              ;-1 === h && (h = f)
              let n = e.slice(c, h)
              ;(a && ((n = n.replace(/\\/g, "")), (a = !1)),
                s(o, r, n),
                44 === d && (s(i, t, o), (o = Object.create(null)), (t = void 0)),
                (r = void 0),
                (c = h = -1))
            } else throw SyntaxError(`Unexpected character at index ${f}`)
          if (-1 === c || u || 32 === d || 9 === d) throw SyntaxError("Unexpected end of input")
          ;-1 === h && (h = f)
          let p = e.slice(c, h)
          return (
            void 0 === t
              ? s(i, p, o)
              : (void 0 === r ? s(o, p, !0) : a ? s(o, r, p.replace(/\\/g, "")) : s(o, r, p), s(i, t, o)),
            i
          )
        },
      }
    },
    70441(e) {
      "use strict"
      let t = Symbol("kDone"),
        r = Symbol("kRun")
      e.exports = class {
        constructor(e) {
          ;((this[t] = () => {
            ;(this.pending--, this[r]())
          }),
            (this.concurrency = e || 1 / 0),
            (this.jobs = []),
            (this.pending = 0))
        }
        add(e) {
          ;(this.jobs.push(e), this[r]())
        }
        [r]() {
          if (this.pending !== this.concurrency && this.jobs.length) {
            let e = this.jobs.shift()
            ;(this.pending++, e(this[t]))
          }
        }
      }
    },
    45953(e, t, r) {
      "use strict"
      let n,
        s = r(33925),
        i = r(53248),
        o = r(70441),
        { kStatusCode: a } = r(67236),
        l = Buffer[Symbol.species],
        u = Buffer.from([0, 0, 255, 255]),
        c = Symbol("permessage-deflate"),
        d = Symbol("total-length"),
        h = Symbol("callback"),
        f = Symbol("buffers"),
        p = Symbol("error")
      function m(e) {
        ;(this[f].push(e), (this[d] += e.length))
      }
      function g(e) {
        ;((this[d] += e.length), this[c]._maxPayload < 1 || this[d] <= this[c]._maxPayload)
          ? this[f].push(e)
          : ((this[p] = RangeError("Max payload size exceeded")),
            (this[p].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"),
            (this[p][a] = 1009),
            this.removeListener("data", g),
            this.reset())
      }
      function y(e) {
        ;((this[c]._inflate = null), this[p]) ? this[h](this[p]) : ((e[a] = 1007), this[h](e))
      }
      e.exports = class {
        constructor(e) {
          ;((this._options = e || {}),
            (this._threshold = void 0 !== this._options.threshold ? this._options.threshold : 1024),
            (this._maxPayload = 0 | this._options.maxPayload),
            (this._isServer = !!this._options.isServer),
            (this._deflate = null),
            (this._inflate = null),
            (this.params = null),
            n || (n = new o(void 0 !== this._options.concurrencyLimit ? this._options.concurrencyLimit : 10)))
        }
        static get extensionName() {
          return "permessage-deflate"
        }
        offer() {
          let e = {}
          return (
            this._options.serverNoContextTakeover && (e.server_no_context_takeover = !0),
            this._options.clientNoContextTakeover && (e.client_no_context_takeover = !0),
            this._options.serverMaxWindowBits && (e.server_max_window_bits = this._options.serverMaxWindowBits),
            this._options.clientMaxWindowBits
              ? (e.client_max_window_bits = this._options.clientMaxWindowBits)
              : null == this._options.clientMaxWindowBits && (e.client_max_window_bits = !0),
            e
          )
        }
        accept(e) {
          return (
            (e = this.normalizeParams(e)),
            (this.params = this._isServer ? this.acceptAsServer(e) : this.acceptAsClient(e)),
            this.params
          )
        }
        cleanup() {
          if ((this._inflate && (this._inflate.close(), (this._inflate = null)), this._deflate)) {
            let e = this._deflate[h]
            ;(this._deflate.close(),
              (this._deflate = null),
              e && e(Error("The deflate stream was closed while data was being processed")))
          }
        }
        acceptAsServer(e) {
          let t = this._options,
            r = e.find(
              (e) =>
                (!1 !== t.serverNoContextTakeover || !e.server_no_context_takeover) &&
                (!e.server_max_window_bits ||
                  (!1 !== t.serverMaxWindowBits &&
                    ("number" != typeof t.serverMaxWindowBits ||
                      !(t.serverMaxWindowBits > e.server_max_window_bits)))) &&
                ("number" != typeof t.clientMaxWindowBits || !!e.client_max_window_bits),
            )
          if (!r) throw Error("None of the extension offers can be accepted")
          return (
            t.serverNoContextTakeover && (r.server_no_context_takeover = !0),
            t.clientNoContextTakeover && (r.client_no_context_takeover = !0),
            "number" == typeof t.serverMaxWindowBits && (r.server_max_window_bits = t.serverMaxWindowBits),
            "number" == typeof t.clientMaxWindowBits
              ? (r.client_max_window_bits = t.clientMaxWindowBits)
              : (!0 === r.client_max_window_bits || !1 === t.clientMaxWindowBits) && delete r.client_max_window_bits,
            r
          )
        }
        acceptAsClient(e) {
          let t = e[0]
          if (!1 === this._options.clientNoContextTakeover && t.client_no_context_takeover)
            throw Error('Unexpected parameter "client_no_context_takeover"')
          if (t.client_max_window_bits) {
            if (
              !1 === this._options.clientMaxWindowBits ||
              ("number" == typeof this._options.clientMaxWindowBits &&
                t.client_max_window_bits > this._options.clientMaxWindowBits)
            )
              throw Error('Unexpected or invalid parameter "client_max_window_bits"')
          } else
            "number" == typeof this._options.clientMaxWindowBits &&
              (t.client_max_window_bits = this._options.clientMaxWindowBits)
          return t
        }
        normalizeParams(e) {
          return (
            e.forEach((e) => {
              Object.keys(e).forEach((t) => {
                let r = e[t]
                if (r.length > 1) throw Error(`Parameter "${t}" must have only a single value`)
                if (((r = r[0]), "client_max_window_bits" === t)) {
                  if (!0 !== r) {
                    let e = +r
                    if (!Number.isInteger(e) || e < 8 || e > 15)
                      throw TypeError(`Invalid value for parameter "${t}": ${r}`)
                    r = e
                  } else if (!this._isServer) throw TypeError(`Invalid value for parameter "${t}": ${r}`)
                } else if ("server_max_window_bits" === t) {
                  let e = +r
                  if (!Number.isInteger(e) || e < 8 || e > 15)
                    throw TypeError(`Invalid value for parameter "${t}": ${r}`)
                  r = e
                } else if ("client_no_context_takeover" === t || "server_no_context_takeover" === t) {
                  if (!0 !== r) throw TypeError(`Invalid value for parameter "${t}": ${r}`)
                } else throw Error(`Unknown parameter "${t}"`)
                e[t] = r
              })
            }),
            e
          )
        }
        decompress(e, t, r) {
          n.add((n) => {
            this._decompress(e, t, (e, t) => {
              ;(n(), r(e, t))
            })
          })
        }
        compress(e, t, r) {
          n.add((n) => {
            this._compress(e, t, (e, t) => {
              ;(n(), r(e, t))
            })
          })
        }
        _decompress(e, t, r) {
          let n = this._isServer ? "client" : "server"
          if (!this._inflate) {
            let e = `${n}_max_window_bits`,
              t = "number" != typeof this.params[e] ? s.Z_DEFAULT_WINDOWBITS : this.params[e]
            ;((this._inflate = s.createInflateRaw({ ...this._options.zlibInflateOptions, windowBits: t })),
              (this._inflate[c] = this),
              (this._inflate[d] = 0),
              (this._inflate[f] = []),
              this._inflate.on("error", y),
              this._inflate.on("data", g))
          }
          ;((this._inflate[h] = r),
            this._inflate.write(e),
            t && this._inflate.write(u),
            this._inflate.flush(() => {
              let e = this._inflate[p]
              if (e) {
                ;(this._inflate.close(), (this._inflate = null), r(e))
                return
              }
              let s = i.concat(this._inflate[f], this._inflate[d])
              ;(this._inflate._readableState.endEmitted
                ? (this._inflate.close(), (this._inflate = null))
                : ((this._inflate[d] = 0),
                  (this._inflate[f] = []),
                  t && this.params[`${n}_no_context_takeover`] && this._inflate.reset()),
                r(null, s))
            }))
        }
        _compress(e, t, r) {
          let n = this._isServer ? "server" : "client"
          if (!this._deflate) {
            let e = `${n}_max_window_bits`,
              t = "number" != typeof this.params[e] ? s.Z_DEFAULT_WINDOWBITS : this.params[e]
            ;((this._deflate = s.createDeflateRaw({ ...this._options.zlibDeflateOptions, windowBits: t })),
              (this._deflate[d] = 0),
              (this._deflate[f] = []),
              this._deflate.on("data", m))
          }
          ;((this._deflate[h] = r),
            this._deflate.write(e),
            this._deflate.flush(s.Z_SYNC_FLUSH, () => {
              if (!this._deflate) return
              let e = i.concat(this._deflate[f], this._deflate[d])
              ;(t && (e = new l(e.buffer, e.byteOffset, e.length - 4)),
                (this._deflate[h] = null),
                (this._deflate[d] = 0),
                (this._deflate[f] = []),
                t && this.params[`${n}_no_context_takeover`] && this._deflate.reset(),
                r(null, e))
            }))
        }
      }
    },
    46600(e, t, r) {
      "use strict"
      let { Writable: n } = r(76272),
        s = r(45953),
        { BINARY_TYPES: i, EMPTY_BUFFER: o, kStatusCode: a, kWebSocket: l } = r(67236),
        { concat: u, toArrayBuffer: c, unmask: d } = r(53248),
        { isValidStatusCode: h, isValidUTF8: f } = r(85718),
        p = Buffer[Symbol.species]
      e.exports = class extends n {
        constructor(e = {}) {
          ;(super(),
            (this._allowSynchronousEvents = void 0 === e.allowSynchronousEvents || e.allowSynchronousEvents),
            (this._binaryType = e.binaryType || i[0]),
            (this._extensions = e.extensions || {}),
            (this._isServer = !!e.isServer),
            (this._maxBufferedChunks = 0 | e.maxBufferedChunks),
            (this._maxFragments = 0 | e.maxFragments),
            (this._maxPayload = 0 | e.maxPayload),
            (this._skipUTF8Validation = !!e.skipUTF8Validation),
            (this[l] = void 0),
            (this._bufferedBytes = 0),
            (this._buffers = []),
            (this._compressed = !1),
            (this._payloadLength = 0),
            (this._mask = void 0),
            (this._fragmented = 0),
            (this._masked = !1),
            (this._fin = !1),
            (this._opcode = 0),
            (this._totalPayloadLength = 0),
            (this._messageLength = 0),
            (this._numFragments = 0),
            (this._fragments = []),
            (this._errored = !1),
            (this._loop = !1),
            (this._state = 0))
        }
        _write(e, t, r) {
          return 8 === this._opcode && 0 == this._state
            ? r()
            : this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks
              ? void r(
                  this.createError(RangeError, "Too many buffered chunks", !1, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"),
                )
              : void ((this._bufferedBytes += e.length), this._buffers.push(e), this.startLoop(r))
        }
        consume(e) {
          if (((this._bufferedBytes -= e), e === this._buffers[0].length)) return this._buffers.shift()
          if (e < this._buffers[0].length) {
            let t = this._buffers[0]
            return (
              (this._buffers[0] = new p(t.buffer, t.byteOffset + e, t.length - e)),
              new p(t.buffer, t.byteOffset, e)
            )
          }
          let t = Buffer.allocUnsafe(e)
          do {
            let r = this._buffers[0],
              n = t.length - e
            ;(e >= r.length
              ? t.set(this._buffers.shift(), n)
              : (t.set(new Uint8Array(r.buffer, r.byteOffset, e), n),
                (this._buffers[0] = new p(r.buffer, r.byteOffset + e, r.length - e))),
              (e -= r.length))
          } while (e > 0)
          return t
        }
        startLoop(e) {
          this._loop = !0
          do
            switch (this._state) {
              case 0:
                this.getInfo(e)
                break
              case 1:
                this.getPayloadLength16(e)
                break
              case 2:
                this.getPayloadLength64(e)
                break
              case 3:
                this.getMask()
                break
              case 4:
                this.getData(e)
                break
              case 5:
              case 6:
                this._loop = !1
                return
            }
          while (this._loop)
          this._errored || e()
        }
        getInfo(e) {
          if (this._bufferedBytes < 2) {
            this._loop = !1
            return
          }
          let t = this.consume(2)
          if ((48 & t[0]) != 0)
            return void e(
              this.createError(RangeError, "RSV2 and RSV3 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_2_3"),
            )
          let r = (64 & t[0]) == 64
          if (r && !this._extensions[s.extensionName])
            return void e(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"))
          if (
            ((this._fin = (128 & t[0]) == 128),
            (this._opcode = 15 & t[0]),
            (this._payloadLength = 127 & t[1]),
            0 === this._opcode)
          ) {
            if (r)
              return void e(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"))
            if (!this._fragmented)
              return void e(this.createError(RangeError, "invalid opcode 0", !0, 1002, "WS_ERR_INVALID_OPCODE"))
            this._opcode = this._fragmented
          } else if (1 === this._opcode || 2 === this._opcode) {
            if (this._fragmented)
              return void e(
                this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE"),
              )
            this._compressed = r
          } else {
            if (!(this._opcode > 7) || !(this._opcode < 11))
              return void e(
                this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE"),
              )
            if (!this._fin)
              return void e(this.createError(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN"))
            if (r)
              return void e(this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1"))
            if (this._payloadLength > 125 || (8 === this._opcode && 1 === this._payloadLength))
              return void e(
                this.createError(
                  RangeError,
                  `invalid payload length ${this._payloadLength}`,
                  !0,
                  1002,
                  "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH",
                ),
              )
          }
          if (
            (this._fin || this._fragmented || (this._fragmented = this._opcode),
            (this._masked = (128 & t[1]) == 128),
            this._isServer)
          ) {
            if (!this._masked)
              return void e(this.createError(RangeError, "MASK must be set", !0, 1002, "WS_ERR_EXPECTED_MASK"))
          } else if (this._masked)
            return void e(this.createError(RangeError, "MASK must be clear", !0, 1002, "WS_ERR_UNEXPECTED_MASK"))
          126 === this._payloadLength
            ? (this._state = 1)
            : 127 === this._payloadLength
              ? (this._state = 2)
              : this.haveLength(e)
        }
        getPayloadLength16(e) {
          if (this._bufferedBytes < 2) {
            this._loop = !1
            return
          }
          ;((this._payloadLength = this.consume(2).readUInt16BE(0)), this.haveLength(e))
        }
        getPayloadLength64(e) {
          if (this._bufferedBytes < 8) {
            this._loop = !1
            return
          }
          let t = this.consume(8),
            r = t.readUInt32BE(0)
          r > 2097151
            ? e(
                this.createError(
                  RangeError,
                  "Unsupported WebSocket frame: payload length > 2^53 - 1",
                  !1,
                  1009,
                  "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH",
                ),
              )
            : ((this._payloadLength = 0x100000000 * r + t.readUInt32BE(4)), this.haveLength(e))
        }
        haveLength(e) {
          this._payloadLength &&
          this._opcode < 8 &&
          ((this._totalPayloadLength += this._payloadLength),
          this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)
            ? e(
                this.createError(
                  RangeError,
                  "Max payload size exceeded",
                  !1,
                  1009,
                  "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",
                ),
              )
            : this._masked
              ? (this._state = 3)
              : (this._state = 4)
        }
        getMask() {
          if (this._bufferedBytes < 4) {
            this._loop = !1
            return
          }
          ;((this._mask = this.consume(4)), (this._state = 4))
        }
        getData(e) {
          let t = o
          if (this._payloadLength) {
            if (this._bufferedBytes < this._payloadLength) {
              this._loop = !1
              return
            }
            ;((t = this.consume(this._payloadLength)),
              this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) != 0 && d(t, this._mask))
          }
          if (this._opcode > 7) return void this.controlMessage(t, e)
          if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments)
            return void e(
              this.createError(RangeError, "Too many message fragments", !1, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"),
            )
          if (this._compressed) {
            ;((this._state = 5), this.decompress(t, e))
            return
          }
          ;(t.length && ((this._messageLength = this._totalPayloadLength), this._fragments.push(t)),
            this.dataMessage(e))
        }
        decompress(e, t) {
          this._extensions[s.extensionName].decompress(e, this._fin, (e, r) => {
            if (e) return t(e)
            if (r.length) {
              if (((this._messageLength += r.length), this._messageLength > this._maxPayload && this._maxPayload > 0))
                return void t(
                  this.createError(
                    RangeError,
                    "Max payload size exceeded",
                    !1,
                    1009,
                    "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",
                  ),
                )
              this._fragments.push(r)
            }
            ;(this.dataMessage(t), 0 === this._state && this.startLoop(t))
          })
        }
        dataMessage(e) {
          if (!this._fin) {
            this._state = 0
            return
          }
          let t = this._messageLength,
            r = this._fragments
          if (
            ((this._totalPayloadLength = 0),
            (this._messageLength = 0),
            (this._fragmented = 0),
            (this._numFragments = 0),
            (this._fragments = []),
            2 === this._opcode)
          ) {
            let n
            ;((n =
              "nodebuffer" === this._binaryType
                ? u(r, t)
                : "arraybuffer" === this._binaryType
                  ? c(u(r, t))
                  : "blob" === this._binaryType
                    ? new Blob(r)
                    : r),
              this._allowSynchronousEvents
                ? (this.emit("message", n, !0), (this._state = 0))
                : ((this._state = 6),
                  setImmediate(() => {
                    ;(this.emit("message", n, !0), (this._state = 0), this.startLoop(e))
                  })))
          } else {
            let n = u(r, t)
            if (!this._skipUTF8Validation && !f(n))
              return void e(this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8"))
            5 === this._state || this._allowSynchronousEvents
              ? (this.emit("message", n, !1), (this._state = 0))
              : ((this._state = 6),
                setImmediate(() => {
                  ;(this.emit("message", n, !1), (this._state = 0), this.startLoop(e))
                }))
          }
        }
        controlMessage(e, t) {
          if (8 === this._opcode) {
            if (0 === e.length) ((this._loop = !1), this.emit("conclude", 1005, o), this.end())
            else {
              let r = e.readUInt16BE(0)
              if (!h(r))
                return void t(
                  this.createError(RangeError, `invalid status code ${r}`, !0, 1002, "WS_ERR_INVALID_CLOSE_CODE"),
                )
              let n = new p(e.buffer, e.byteOffset + 2, e.length - 2)
              if (!this._skipUTF8Validation && !f(n))
                return void t(this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8"))
              ;((this._loop = !1), this.emit("conclude", r, n), this.end())
            }
            this._state = 0
            return
          }
          this._allowSynchronousEvents
            ? (this.emit(9 === this._opcode ? "ping" : "pong", e), (this._state = 0))
            : ((this._state = 6),
              setImmediate(() => {
                ;(this.emit(9 === this._opcode ? "ping" : "pong", e), (this._state = 0), this.startLoop(t))
              }))
        }
        createError(e, t, r, n, s) {
          ;((this._loop = !1), (this._errored = !0))
          let i = new e(r ? `Invalid WebSocket frame: ${t}` : t)
          return (Error.captureStackTrace(i, this.createError), (i.code = s), (i[a] = n), i)
        }
      }
    },
    61872(e, t, r) {
      "use strict"
      let n,
        { Duplex: s } = r(76272),
        { randomFillSync: i } = r(38749),
        {
          types: { isUint8Array: o },
        } = r(92460),
        a = r(45953),
        { EMPTY_BUFFER: l, kWebSocket: u, NOOP: c } = r(67236),
        { isBlob: d, isValidStatusCode: h } = r(85718),
        { mask: f, toBuffer: p } = r(53248),
        m = Symbol("kByteLength"),
        g = Buffer.alloc(4),
        y = 8192
      function _(e, t, r) {
        "function" == typeof r && r(t)
        for (let r = 0; r < e._queue.length; r++) {
          let n = e._queue[r],
            s = n[n.length - 1]
          "function" == typeof s && s(t)
        }
      }
      function b(e, t, r) {
        ;(_(e, t, r), e.onerror(t))
      }
      e.exports = class e {
        constructor(e, t, r) {
          ;((this._extensions = t || {}),
            r && ((this._generateMask = r), (this._maskBuffer = Buffer.alloc(4))),
            (this._socket = e),
            (this._firstFragment = !0),
            (this._compress = !1),
            (this._bufferedBytes = 0),
            (this._queue = []),
            (this._state = 0),
            (this.onerror = c),
            (this[u] = void 0))
        }
        static frame(e, t) {
          let r,
            s,
            o = !1,
            a = 2,
            l = !1
          ;(t.mask &&
            ((r = t.maskBuffer || g),
            t.generateMask
              ? t.generateMask(r)
              : (8192 === y && (void 0 === n && (n = Buffer.alloc(8192)), i(n, 0, 8192), (y = 0)),
                (r[0] = n[y++]),
                (r[1] = n[y++]),
                (r[2] = n[y++]),
                (r[3] = n[y++])),
            (l = (r[0] | r[1] | r[2] | r[3]) == 0),
            (a = 6)),
            "string" == typeof e
              ? (s = (!t.mask || l) && void 0 !== t[m] ? t[m] : (e = Buffer.from(e)).length)
              : ((s = e.length), (o = t.mask && t.readOnly && !l)))
          let u = s
          s >= 65536 ? ((a += 8), (u = 127)) : s > 125 && ((a += 2), (u = 126))
          let c = Buffer.allocUnsafe(o ? s + a : a)
          return ((c[0] = t.fin ? 128 | t.opcode : t.opcode),
          t.rsv1 && (c[0] |= 64),
          (c[1] = u),
          126 === u ? c.writeUInt16BE(s, 2) : 127 === u && ((c[2] = c[3] = 0), c.writeUIntBE(s, 4, 6)),
          t.mask)
            ? ((c[1] |= 128), (c[a - 4] = r[0]), (c[a - 3] = r[1]), (c[a - 2] = r[2]), (c[a - 1] = r[3]), l)
              ? [c, e]
              : o
                ? (f(e, r, c, a, s), [c])
                : (f(e, r, e, 0, s), [c, e])
            : [c, e]
        }
        close(t, r, n, s) {
          let i
          if (void 0 === t) i = l
          else if ("number" == typeof t && h(t))
            if (void 0 !== r && r.length) {
              let e = Buffer.byteLength(r)
              if (e > 123) throw RangeError("The message must not be greater than 123 bytes")
              if (((i = Buffer.allocUnsafe(2 + e)).writeUInt16BE(t, 0), "string" == typeof r)) i.write(r, 2)
              else if (o(r)) i.set(r, 2)
              else throw TypeError("Second argument must be a string or a Uint8Array")
            } else (i = Buffer.allocUnsafe(2)).writeUInt16BE(t, 0)
          else throw TypeError("First argument must be a valid error code number")
          let a = {
            [m]: i.length,
            fin: !0,
            generateMask: this._generateMask,
            mask: n,
            maskBuffer: this._maskBuffer,
            opcode: 8,
            readOnly: !1,
            rsv1: !1,
          }
          0 !== this._state ? this.enqueue([this.dispatch, i, !1, a, s]) : this.sendFrame(e.frame(i, a), s)
        }
        ping(t, r, n) {
          let s, i
          if (
            ("string" == typeof t
              ? ((s = Buffer.byteLength(t)), (i = !1))
              : d(t)
                ? ((s = t.size), (i = !1))
                : ((s = (t = p(t)).length), (i = p.readOnly)),
            s > 125)
          )
            throw RangeError("The data size must not be greater than 125 bytes")
          let o = {
            [m]: s,
            fin: !0,
            generateMask: this._generateMask,
            mask: r,
            maskBuffer: this._maskBuffer,
            opcode: 9,
            readOnly: i,
            rsv1: !1,
          }
          d(t)
            ? 0 !== this._state
              ? this.enqueue([this.getBlobData, t, !1, o, n])
              : this.getBlobData(t, !1, o, n)
            : 0 !== this._state
              ? this.enqueue([this.dispatch, t, !1, o, n])
              : this.sendFrame(e.frame(t, o), n)
        }
        pong(t, r, n) {
          let s, i
          if (
            ("string" == typeof t
              ? ((s = Buffer.byteLength(t)), (i = !1))
              : d(t)
                ? ((s = t.size), (i = !1))
                : ((s = (t = p(t)).length), (i = p.readOnly)),
            s > 125)
          )
            throw RangeError("The data size must not be greater than 125 bytes")
          let o = {
            [m]: s,
            fin: !0,
            generateMask: this._generateMask,
            mask: r,
            maskBuffer: this._maskBuffer,
            opcode: 10,
            readOnly: i,
            rsv1: !1,
          }
          d(t)
            ? 0 !== this._state
              ? this.enqueue([this.getBlobData, t, !1, o, n])
              : this.getBlobData(t, !1, o, n)
            : 0 !== this._state
              ? this.enqueue([this.dispatch, t, !1, o, n])
              : this.sendFrame(e.frame(t, o), n)
        }
        send(e, t, r) {
          let n,
            s,
            i = this._extensions[a.extensionName],
            o = t.binary ? 2 : 1,
            l = t.compress
          ;("string" == typeof e
            ? ((n = Buffer.byteLength(e)), (s = !1))
            : d(e)
              ? ((n = e.size), (s = !1))
              : ((n = (e = p(e)).length), (s = p.readOnly)),
            this._firstFragment
              ? ((this._firstFragment = !1),
                l &&
                  i &&
                  i.params[i._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] &&
                  (l = n >= i._threshold),
                (this._compress = l))
              : ((l = !1), (o = 0)),
            t.fin && (this._firstFragment = !0))
          let u = {
            [m]: n,
            fin: t.fin,
            generateMask: this._generateMask,
            mask: t.mask,
            maskBuffer: this._maskBuffer,
            opcode: o,
            readOnly: s,
            rsv1: l,
          }
          d(e)
            ? 0 !== this._state
              ? this.enqueue([this.getBlobData, e, this._compress, u, r])
              : this.getBlobData(e, this._compress, u, r)
            : 0 !== this._state
              ? this.enqueue([this.dispatch, e, this._compress, u, r])
              : this.dispatch(e, this._compress, u, r)
        }
        getBlobData(t, r, n, s) {
          ;((this._bufferedBytes += n[m]),
            (this._state = 2),
            t
              .arrayBuffer()
              .then((t) => {
                if (this._socket.destroyed) {
                  let e = Error("The socket was closed while the blob was being read")
                  process.nextTick(_, this, e, s)
                  return
                }
                this._bufferedBytes -= n[m]
                let i = p(t)
                r ? this.dispatch(i, r, n, s) : ((this._state = 0), this.sendFrame(e.frame(i, n), s), this.dequeue())
              })
              .catch((e) => {
                process.nextTick(b, this, e, s)
              }))
        }
        dispatch(t, r, n, s) {
          if (!r) return void this.sendFrame(e.frame(t, n), s)
          let i = this._extensions[a.extensionName]
          ;((this._bufferedBytes += n[m]),
            (this._state = 1),
            i.compress(t, n.fin, (t, r) => {
              this._socket.destroyed
                ? _(this, Error("The socket was closed while data was being compressed"), s)
                : ((this._bufferedBytes -= n[m]),
                  (this._state = 0),
                  (n.readOnly = !1),
                  this.sendFrame(e.frame(r, n), s),
                  this.dequeue())
            }))
        }
        dequeue() {
          for (; 0 === this._state && this._queue.length;) {
            let e = this._queue.shift()
            ;((this._bufferedBytes -= e[3][m]), Reflect.apply(e[0], this, e.slice(1)))
          }
        }
        enqueue(e) {
          ;((this._bufferedBytes += e[3][m]), this._queue.push(e))
        }
        sendFrame(e, t) {
          2 === e.length
            ? (this._socket.cork(), this._socket.write(e[0]), this._socket.write(e[1], t), this._socket.uncork())
            : this._socket.write(e[0], t)
        }
      }
    },
    93609(e, t, r) {
      "use strict"
      r(62450)
      let { Duplex: n } = r(76272)
      function s(e) {
        e.emit("close")
      }
      function i() {
        !this.destroyed && this._writableState.finished && this.destroy()
      }
      function o(e) {
        ;(this.removeListener("error", o), this.destroy(), 0 === this.listenerCount("error") && this.emit("error", e))
      }
      e.exports = function (e, t) {
        let r = !0,
          a = new n({ ...t, autoDestroy: !1, emitClose: !1, objectMode: !1, writableObjectMode: !1 })
        return (
          e.on("message", function (t, r) {
            let n = !r && a._readableState.objectMode ? t.toString() : t
            a.push(n) || e.pause()
          }),
          e.once("error", function (e) {
            a.destroyed || ((r = !1), a.destroy(e))
          }),
          e.once("close", function () {
            a.destroyed || a.push(null)
          }),
          (a._destroy = function (t, n) {
            if (e.readyState === e.CLOSED) {
              ;(n(t), process.nextTick(s, a))
              return
            }
            let i = !1
            ;(e.once("error", function (e) {
              ;((i = !0), n(e))
            }),
              e.once("close", function () {
                ;(i || n(t), process.nextTick(s, a))
              }),
              r && e.terminate())
          }),
          (a._final = function (t) {
            e.readyState === e.CONNECTING
              ? e.once("open", function () {
                  a._final(t)
                })
              : null !== e._socket &&
                (e._socket._writableState.finished
                  ? (t(), a._readableState.endEmitted && a.destroy())
                  : (e._socket.once("finish", function () {
                      t()
                    }),
                    e.close()))
          }),
          (a._read = function () {
            e.isPaused && e.resume()
          }),
          (a._write = function (t, r, n) {
            e.readyState === e.CONNECTING
              ? e.once("open", function () {
                  a._write(t, r, n)
                })
              : e.send(t, n)
          }),
          a.on("end", i),
          a.on("error", o),
          a
        )
      }
    },
    46471(e, t, r) {
      "use strict"
      let { tokenChars: n } = r(85718)
      e.exports = {
        parse: function (e) {
          let t = new Set(),
            r = -1,
            s = -1,
            i = 0
          for (; i < e.length; i++) {
            let o = e.charCodeAt(i)
            if (-1 === s && 1 === n[o]) -1 === r && (r = i)
            else if (0 !== i && (32 === o || 9 === o)) -1 === s && -1 !== r && (s = i)
            else if (44 === o) {
              if (-1 === r) throw SyntaxError(`Unexpected character at index ${i}`)
              ;-1 === s && (s = i)
              let n = e.slice(r, s)
              if (t.has(n)) throw SyntaxError(`The "${n}" subprotocol is duplicated`)
              ;(t.add(n), (r = s = -1))
            } else throw SyntaxError(`Unexpected character at index ${i}`)
          }
          if (-1 === r || -1 !== s) throw SyntaxError("Unexpected end of input")
          let o = e.slice(r, i)
          if (t.has(o)) throw SyntaxError(`The "${o}" subprotocol is duplicated`)
          return (t.add(o), t)
        },
      }
    },
    85718(e, t, r) {
      "use strict"
      let { isUtf8: n } = r(1158),
        { hasBlob: s } = r(67236)
      function i(e) {
        let t = e.length,
          r = 0
        for (; r < t;)
          if ((128 & e[r]) == 0) r++
          else if ((224 & e[r]) == 192) {
            if (r + 1 === t || (192 & e[r + 1]) != 128 || (254 & e[r]) == 192) return !1
            r += 2
          } else if ((240 & e[r]) == 224) {
            if (
              r + 2 >= t ||
              (192 & e[r + 1]) != 128 ||
              (192 & e[r + 2]) != 128 ||
              (224 === e[r] && (224 & e[r + 1]) == 128) ||
              (237 === e[r] && (224 & e[r + 1]) == 160)
            )
              return !1
            r += 3
          } else {
            if (
              (248 & e[r]) != 240 ||
              r + 3 >= t ||
              (192 & e[r + 1]) != 128 ||
              (192 & e[r + 2]) != 128 ||
              (192 & e[r + 3]) != 128 ||
              (240 === e[r] && (240 & e[r + 1]) == 128) ||
              (244 === e[r] && e[r + 1] > 143) ||
              e[r] > 244
            )
              return !1
            r += 4
          }
        return !0
      }
      if (
        ((e.exports = {
          isBlob: function (e) {
            return (
              s &&
              "object" == typeof e &&
              "function" == typeof e.arrayBuffer &&
              "string" == typeof e.type &&
              "function" == typeof e.stream &&
              ("Blob" === e[Symbol.toStringTag] || "File" === e[Symbol.toStringTag])
            )
          },
          isValidStatusCode: function (e) {
            return (e >= 1e3 && e <= 1014 && 1004 !== e && 1005 !== e && 1006 !== e) || (e >= 3e3 && e <= 4999)
          },
          isValidUTF8: i,
          tokenChars: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
            1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
          ],
        }),
        n)
      )
        e.exports.isValidUTF8 = function (e) {
          return e.length < 24 ? i(e) : n(e)
        }
      else if (!process.env.WS_NO_UTF_8_VALIDATE)
        try {
          let t = r(38607)
          e.exports.isValidUTF8 = function (e) {
            return e.length < 32 ? i(e) : t(e)
          }
        } catch (e) {}
    },
    34116(e, t, r) {
      "use strict"
      let n = r(66261),
        s = r(9856),
        { Duplex: i } = r(76272),
        { createHash: o } = r(38749),
        a = r(35444),
        l = r(45953),
        u = r(46471),
        c = r(62450),
        { CLOSE_TIMEOUT: d, GUID: h, kWebSocket: f } = r(67236),
        p = /^[+/0-9A-Za-z]{22}==$/
      function m(e) {
        ;((e._state = 2), e.emit("close"))
      }
      function g() {
        this.destroy()
      }
      function y(e, t, r, n) {
        ;((r = r || s.STATUS_CODES[t]),
          (n = { Connection: "close", "Content-Type": "text/html", "Content-Length": Buffer.byteLength(r), ...n }),
          e.once("finish", e.destroy),
          e.end(
            `HTTP/1.1 ${t} ${s.STATUS_CODES[t]}\r
` +
              Object.keys(n)
                .map((e) => `${e}: ${n[e]}`)
                .join("\r\n") +
              "\r\n\r\n" +
              r,
          ))
      }
      function _(e, t, r, n, s, i) {
        if (e.listenerCount("wsClientError")) {
          let n = Error(s)
          ;(Error.captureStackTrace(n, _), e.emit("wsClientError", n, r, t))
        } else y(r, n, s, i)
      }
      e.exports = class extends n {
        constructor(e, t) {
          if (
            (super(),
            (null ==
              (e = {
                allowSynchronousEvents: !0,
                autoPong: !0,
                maxBufferedChunks: 262144,
                maxFragments: 16384,
                maxPayload: 0x6400000,
                skipUTF8Validation: !1,
                perMessageDeflate: !1,
                handleProtocols: null,
                clientTracking: !0,
                closeTimeout: d,
                verifyClient: null,
                noServer: !1,
                backlog: null,
                server: null,
                host: null,
                path: null,
                port: null,
                WebSocket: c,
                ...e,
              }).port &&
              !e.server &&
              !e.noServer) ||
              (null != e.port && (e.server || e.noServer)) ||
              (e.server && e.noServer))
          )
            throw TypeError('One and only one of the "port", "server", or "noServer" options must be specified')
          if (
            (null != e.port
              ? ((this._server = s.createServer((e, t) => {
                  let r = s.STATUS_CODES[426]
                  ;(t.writeHead(426, { "Content-Length": r.length, "Content-Type": "text/plain" }), t.end(r))
                })),
                this._server.listen(e.port, e.host, e.backlog, t))
              : e.server && (this._server = e.server),
            this._server)
          ) {
            let e = this.emit.bind(this, "connection")
            this._removeListeners = (function (e, t) {
              for (let r of Object.keys(t)) e.on(r, t[r])
              return function () {
                for (let r of Object.keys(t)) e.removeListener(r, t[r])
              }
            })(this._server, {
              listening: this.emit.bind(this, "listening"),
              error: this.emit.bind(this, "error"),
              upgrade: (t, r, n) => {
                this.handleUpgrade(t, r, n, e)
              },
            })
          }
          ;(!0 === e.perMessageDeflate && (e.perMessageDeflate = {}),
            e.clientTracking && ((this.clients = new Set()), (this._shouldEmitClose = !1)),
            (this.options = e),
            (this._state = 0))
        }
        address() {
          if (this.options.noServer) throw Error('The server is operating in "noServer" mode')
          return this._server ? this._server.address() : null
        }
        close(e) {
          if (2 === this._state) {
            ;(e &&
              this.once("close", () => {
                e(Error("The server is not running"))
              }),
              process.nextTick(m, this))
            return
          }
          if ((e && this.once("close", e), 1 !== this._state))
            if (((this._state = 1), this.options.noServer || this.options.server))
              (this._server && (this._removeListeners(), (this._removeListeners = this._server = null)),
                this.clients && this.clients.size ? (this._shouldEmitClose = !0) : process.nextTick(m, this))
            else {
              let e = this._server
              ;(this._removeListeners(),
                (this._removeListeners = this._server = null),
                e.close(() => {
                  m(this)
                }))
            }
        }
        shouldHandle(e) {
          if (this.options.path) {
            let t = e.url.indexOf("?")
            if ((-1 !== t ? e.url.slice(0, t) : e.url) !== this.options.path) return !1
          }
          return !0
        }
        handleUpgrade(e, t, r, n) {
          t.on("error", g)
          let s = e.headers["sec-websocket-key"],
            i = e.headers.upgrade,
            o = +e.headers["sec-websocket-version"]
          if ("GET" !== e.method) return void _(this, e, t, 405, "Invalid HTTP method")
          if (void 0 === i || "websocket" !== i.toLowerCase()) return void _(this, e, t, 400, "Invalid Upgrade header")
          if (void 0 === s || !p.test(s)) return void _(this, e, t, 400, "Missing or invalid Sec-WebSocket-Key header")
          if (13 !== o && 8 !== o)
            return void _(this, e, t, 400, "Missing or invalid Sec-WebSocket-Version header", {
              "Sec-WebSocket-Version": "13, 8",
            })
          if (!this.shouldHandle(e)) return void y(t, 400)
          let c = e.headers["sec-websocket-protocol"],
            d = new Set()
          if (void 0 !== c)
            try {
              d = u.parse(c)
            } catch (r) {
              _(this, e, t, 400, "Invalid Sec-WebSocket-Protocol header")
              return
            }
          let h = e.headers["sec-websocket-extensions"],
            f = {}
          if (this.options.perMessageDeflate && void 0 !== h) {
            let r = new l({ ...this.options.perMessageDeflate, isServer: !0, maxPayload: this.options.maxPayload })
            try {
              let e = a.parse(h)
              e[l.extensionName] && (r.accept(e[l.extensionName]), (f[l.extensionName] = r))
            } catch (r) {
              _(this, e, t, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header")
              return
            }
          }
          if (this.options.verifyClient) {
            let i = {
              origin: e.headers[`${8 === o ? "sec-websocket-origin" : "origin"}`],
              secure: !!(e.socket.authorized || e.socket.encrypted),
              req: e,
            }
            if (2 === this.options.verifyClient.length)
              return void this.options.verifyClient(i, (i, o, a, l) => {
                if (!i) return y(t, o || 401, a, l)
                this.completeUpgrade(f, s, d, e, t, r, n)
              })
            if (!this.options.verifyClient(i)) return y(t, 401)
          }
          this.completeUpgrade(f, s, d, e, t, r, n)
        }
        completeUpgrade(e, t, r, n, s, i, u) {
          if (!s.readable || !s.writable) return s.destroy()
          if (s[f])
            throw Error(
              "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration",
            )
          if (this._state > 0) return y(s, 503)
          let c = o("sha1")
              .update(t + h)
              .digest("base64"),
            d = [
              "HTTP/1.1 101 Switching Protocols",
              "Upgrade: websocket",
              "Connection: Upgrade",
              `Sec-WebSocket-Accept: ${c}`,
            ],
            p = new this.options.WebSocket(null, void 0, this.options)
          if (r.size) {
            let e = this.options.handleProtocols ? this.options.handleProtocols(r, n) : r.values().next().value
            e && (d.push(`Sec-WebSocket-Protocol: ${e}`), (p._protocol = e))
          }
          if (e[l.extensionName]) {
            let t = e[l.extensionName].params,
              r = a.format({ [l.extensionName]: [t] })
            ;(d.push(`Sec-WebSocket-Extensions: ${r}`), (p._extensions = e))
          }
          ;(this.emit("headers", d, n),
            s.write(d.concat("\r\n").join("\r\n")),
            s.removeListener("error", g),
            p.setSocket(s, i, {
              allowSynchronousEvents: this.options.allowSynchronousEvents,
              maxBufferedChunks: this.options.maxBufferedChunks,
              maxFragments: this.options.maxFragments,
              maxPayload: this.options.maxPayload,
              skipUTF8Validation: this.options.skipUTF8Validation,
            }),
            this.clients &&
              (this.clients.add(p),
              p.on("close", () => {
                ;(this.clients.delete(p), this._shouldEmitClose && !this.clients.size && process.nextTick(m, this))
              })),
            u(p, n))
        }
      }
    },
    62450(e, t, r) {
      "use strict"
      let n = r(66261),
        s = r(2057),
        i = r(9856),
        o = r(52135),
        a = r(52553),
        { randomBytes: l, createHash: u } = r(38749),
        { Duplex: c, Readable: d } = r(76272),
        { URL: h } = r(16857),
        f = r(45953),
        p = r(46600),
        m = r(61872),
        { isBlob: g } = r(85718),
        {
          BINARY_TYPES: y,
          CLOSE_TIMEOUT: _,
          EMPTY_BUFFER: b,
          GUID: S,
          kForOnEventAttribute: w,
          kListener: v,
          kStatusCode: x,
          kWebSocket: E,
          NOOP: k,
        } = r(67236),
        {
          EventTarget: { addEventListener: I, removeEventListener: C },
        } = r(815),
        { format: B, parse: O } = r(35444),
        { toBuffer: P } = r(53248),
        A = Symbol("kAborted"),
        R = [8, 13],
        T = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
        L = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/
      class M extends n {
        constructor(e, t, r) {
          ;(super(),
            (this._binaryType = y[0]),
            (this._closeCode = 1006),
            (this._closeFrameReceived = !1),
            (this._closeFrameSent = !1),
            (this._closeMessage = b),
            (this._closeTimer = null),
            (this._errorEmitted = !1),
            (this._extensions = {}),
            (this._paused = !1),
            (this._protocol = ""),
            (this._readyState = M.CONNECTING),
            (this._receiver = null),
            (this._sender = null),
            (this._socket = null),
            null !== e
              ? ((this._bufferedAmount = 0),
                (this._isServer = !1),
                (this._redirects = 0),
                void 0 === t
                  ? (t = [])
                  : Array.isArray(t) || ("object" == typeof t && null !== t ? ((r = t), (t = [])) : (t = [t])),
                (function e(t, r, n, o) {
                  let a,
                    c,
                    d,
                    p,
                    m = {
                      allowSynchronousEvents: !0,
                      autoPong: !0,
                      closeTimeout: _,
                      protocolVersion: R[1],
                      maxBufferedChunks: 262144,
                      maxFragments: 16384,
                      maxPayload: 0x6400000,
                      skipUTF8Validation: !1,
                      perMessageDeflate: !0,
                      followRedirects: !1,
                      maxRedirects: 10,
                      ...o,
                      socketPath: void 0,
                      hostname: void 0,
                      protocol: void 0,
                      timeout: void 0,
                      method: "GET",
                      host: void 0,
                      path: void 0,
                      port: void 0,
                    }
                  if (((t._autoPong = m.autoPong), (t._closeTimeout = m.closeTimeout), !R.includes(m.protocolVersion)))
                    throw RangeError(
                      `Unsupported protocol version: ${m.protocolVersion} (supported versions: ${R.join(", ")})`,
                    )
                  if (r instanceof h) a = r
                  else
                    try {
                      a = new h(r)
                    } catch {
                      throw SyntaxError(`Invalid URL: ${r}`)
                    }
                  ;("http:" === a.protocol ? (a.protocol = "ws:") : "https:" === a.protocol && (a.protocol = "wss:"),
                    (t._url = a.href))
                  let g = "wss:" === a.protocol,
                    y = "ws+unix:" === a.protocol
                  if (
                    ("ws:" === a.protocol || g || y
                      ? y && !a.pathname
                        ? (c = "The URL's pathname is empty")
                        : a.hash && (c = "The URL contains a fragment identifier")
                      : (c = 'The URL\'s protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"'),
                    c)
                  ) {
                    let e = SyntaxError(c)
                    if (0 !== t._redirects) return void N(t, e)
                    throw e
                  }
                  let b = g ? 443 : 80,
                    w = l(16).toString("base64"),
                    v = g ? s.request : i.request,
                    x = new Set()
                  if (
                    ((m.createConnection = m.createConnection || (g ? j : D)),
                    (m.defaultPort = m.defaultPort || b),
                    (m.port = a.port || b),
                    (m.host = a.hostname.startsWith("[") ? a.hostname.slice(1, -1) : a.hostname),
                    (m.headers = {
                      ...m.headers,
                      "Sec-WebSocket-Version": m.protocolVersion,
                      "Sec-WebSocket-Key": w,
                      Connection: "Upgrade",
                      Upgrade: "websocket",
                    }),
                    (m.path = a.pathname + a.search),
                    (m.timeout = m.handshakeTimeout),
                    m.perMessageDeflate &&
                      ((d = new f({ ...m.perMessageDeflate, isServer: !1, maxPayload: m.maxPayload })),
                      (m.headers["Sec-WebSocket-Extensions"] = B({ [f.extensionName]: d.offer() }))),
                    n.length)
                  ) {
                    for (let e of n) {
                      if ("string" != typeof e || !L.test(e) || x.has(e))
                        throw SyntaxError("An invalid or duplicated subprotocol was specified")
                      x.add(e)
                    }
                    m.headers["Sec-WebSocket-Protocol"] = n.join(",")
                  }
                  if (
                    (m.origin &&
                      (m.protocolVersion < 13
                        ? (m.headers["Sec-WebSocket-Origin"] = m.origin)
                        : (m.headers.Origin = m.origin)),
                    (a.username || a.password) && (m.auth = `${a.username}:${a.password}`),
                    y)
                  ) {
                    let e = m.path.split(":")
                    ;((m.socketPath = e[0]), (m.path = e[1]))
                  }
                  if (m.followRedirects) {
                    if (0 === t._redirects) {
                      ;((t._originalIpc = y),
                        (t._originalSecure = g),
                        (t._originalHostOrSocketPath = y ? m.socketPath : a.host))
                      let e = o && o.headers
                      if (((o = { ...o, headers: {} }), e))
                        for (let [t, r] of Object.entries(e)) o.headers[t.toLowerCase()] = r
                    } else if (0 === t.listenerCount("redirect")) {
                      let e = y
                        ? !!t._originalIpc && m.socketPath === t._originalHostOrSocketPath
                        : !t._originalIpc && a.host === t._originalHostOrSocketPath
                      ;(e && (!t._originalSecure || g)) ||
                        (delete m.headers.authorization,
                        delete m.headers.cookie,
                        e || delete m.headers.host,
                        (m.auth = void 0))
                    }
                    ;(m.auth &&
                      !o.headers.authorization &&
                      (o.headers.authorization = "Basic " + Buffer.from(m.auth).toString("base64")),
                      (p = t._req = v(m)),
                      t._redirects && t.emit("redirect", t.url, p))
                  } else p = t._req = v(m)
                  ;(m.timeout &&
                    p.on("timeout", () => {
                      $(t, p, "Opening handshake has timed out")
                    }),
                    p.on("error", (e) => {
                      null === p || p[A] || ((p = t._req = null), N(t, e))
                    }),
                    p.on("response", (s) => {
                      let i = s.headers.location,
                        a = s.statusCode
                      if (i && m.followRedirects && a >= 300 && a < 400) {
                        let s
                        if (++t._redirects > m.maxRedirects) return void $(t, p, "Maximum redirects exceeded")
                        p.abort()
                        try {
                          s = new h(i, r)
                        } catch (e) {
                          N(t, SyntaxError(`Invalid URL: ${i}`))
                          return
                        }
                        e(t, s, n, o)
                      } else
                        t.emit("unexpected-response", p, s) || $(t, p, `Unexpected server response: ${s.statusCode}`)
                    }),
                    p.on("upgrade", (e, r, n) => {
                      let s
                      if ((t.emit("upgrade", e), t.readyState !== M.CONNECTING)) return
                      p = t._req = null
                      let i = e.headers.upgrade
                      if (void 0 === i || "websocket" !== i.toLowerCase()) return void $(t, r, "Invalid Upgrade header")
                      let o = u("sha1")
                        .update(w + S)
                        .digest("base64")
                      if (e.headers["sec-websocket-accept"] !== o)
                        return void $(t, r, "Invalid Sec-WebSocket-Accept header")
                      let a = e.headers["sec-websocket-protocol"]
                      if (
                        (void 0 !== a
                          ? x.size
                            ? x.has(a) || (s = "Server sent an invalid subprotocol")
                            : (s = "Server sent a subprotocol but none was requested")
                          : x.size && (s = "Server sent no subprotocol"),
                        s)
                      )
                        return void $(t, r, s)
                      a && (t._protocol = a)
                      let l = e.headers["sec-websocket-extensions"]
                      if (void 0 !== l) {
                        let e
                        if (!d)
                          return void $(
                            t,
                            r,
                            "Server sent a Sec-WebSocket-Extensions header but no extension was requested",
                          )
                        try {
                          e = O(l)
                        } catch (e) {
                          $(t, r, "Invalid Sec-WebSocket-Extensions header")
                          return
                        }
                        let n = Object.keys(e)
                        if (1 !== n.length || n[0] !== f.extensionName)
                          return void $(t, r, "Server indicated an extension that was not requested")
                        try {
                          d.accept(e[f.extensionName])
                        } catch (e) {
                          $(t, r, "Invalid Sec-WebSocket-Extensions header")
                          return
                        }
                        t._extensions[f.extensionName] = d
                      }
                      t.setSocket(r, n, {
                        allowSynchronousEvents: m.allowSynchronousEvents,
                        generateMask: m.generateMask,
                        maxBufferedChunks: m.maxBufferedChunks,
                        maxFragments: m.maxFragments,
                        maxPayload: m.maxPayload,
                        skipUTF8Validation: m.skipUTF8Validation,
                      })
                    }),
                    m.finishRequest ? m.finishRequest(p, t) : p.end())
                })(this, e, t, r))
              : ((this._autoPong = r.autoPong), (this._closeTimeout = r.closeTimeout), (this._isServer = !0)))
        }
        get binaryType() {
          return this._binaryType
        }
        set binaryType(e) {
          y.includes(e) && ((this._binaryType = e), this._receiver && (this._receiver._binaryType = e))
        }
        get bufferedAmount() {
          return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount
        }
        get extensions() {
          return Object.keys(this._extensions).join()
        }
        get isPaused() {
          return this._paused
        }
        get onclose() {
          return null
        }
        get onerror() {
          return null
        }
        get onopen() {
          return null
        }
        get onmessage() {
          return null
        }
        get protocol() {
          return this._protocol
        }
        get readyState() {
          return this._readyState
        }
        get url() {
          return this._url
        }
        setSocket(e, t, r) {
          let n = new p({
              allowSynchronousEvents: r.allowSynchronousEvents,
              binaryType: this.binaryType,
              extensions: this._extensions,
              isServer: this._isServer,
              maxBufferedChunks: r.maxBufferedChunks,
              maxFragments: r.maxFragments,
              maxPayload: r.maxPayload,
              skipUTF8Validation: r.skipUTF8Validation,
            }),
            s = new m(e, this._extensions, r.generateMask)
          ;((this._receiver = n),
            (this._sender = s),
            (this._socket = e),
            (n[E] = this),
            (s[E] = this),
            (e[E] = this),
            n.on("conclude", F),
            n.on("drain", H),
            n.on("error", V),
            n.on("message", G),
            n.on("ping", q),
            n.on("pong", z),
            (s.onerror = X),
            e.setTimeout && e.setTimeout(0),
            e.setNoDelay && e.setNoDelay(),
            t.length > 0 && e.unshift(t),
            e.on("close", Q),
            e.on("data", Y),
            e.on("end", J),
            e.on("error", ee),
            (this._readyState = M.OPEN),
            this.emit("open"))
        }
        emitClose() {
          if (!this._socket) {
            ;((this._readyState = M.CLOSED), this.emit("close", this._closeCode, this._closeMessage))
            return
          }
          ;(this._extensions[f.extensionName] && this._extensions[f.extensionName].cleanup(),
            this._receiver.removeAllListeners(),
            (this._readyState = M.CLOSED),
            this.emit("close", this._closeCode, this._closeMessage))
        }
        close(e, t) {
          if (this.readyState !== M.CLOSED) {
            if (this.readyState === M.CONNECTING)
              return void $(this, this._req, "WebSocket was closed before the connection was established")
            if (this.readyState === M.CLOSING) {
              this._closeFrameSent &&
                (this._closeFrameReceived || this._receiver._writableState.errorEmitted) &&
                this._socket.end()
              return
            }
            ;((this._readyState = M.CLOSING),
              this._sender.close(e, t, !this._isServer, (e) => {
                !e &&
                  ((this._closeFrameSent = !0),
                  (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end())
              }),
              Z(this))
          }
        }
        pause() {
          this.readyState !== M.CONNECTING &&
            this.readyState !== M.CLOSED &&
            ((this._paused = !0), this._socket.pause())
        }
        ping(e, t, r) {
          if (this.readyState === M.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)")
          ;("function" == typeof e ? ((r = e), (e = t = void 0)) : "function" == typeof t && ((r = t), (t = void 0)),
          "number" == typeof e && (e = e.toString()),
          this.readyState !== M.OPEN)
            ? U(this, e, r)
            : (void 0 === t && (t = !this._isServer), this._sender.ping(e || b, t, r))
        }
        pong(e, t, r) {
          if (this.readyState === M.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)")
          ;("function" == typeof e ? ((r = e), (e = t = void 0)) : "function" == typeof t && ((r = t), (t = void 0)),
          "number" == typeof e && (e = e.toString()),
          this.readyState !== M.OPEN)
            ? U(this, e, r)
            : (void 0 === t && (t = !this._isServer), this._sender.pong(e || b, t, r))
        }
        resume() {
          this.readyState !== M.CONNECTING &&
            this.readyState !== M.CLOSED &&
            ((this._paused = !1), this._receiver._writableState.needDrain || this._socket.resume())
        }
        send(e, t, r) {
          if (this.readyState === M.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)")
          if (
            ("function" == typeof t && ((r = t), (t = {})),
            "number" == typeof e && (e = e.toString()),
            this.readyState !== M.OPEN)
          )
            return void U(this, e, r)
          let n = { binary: "string" != typeof e, mask: !this._isServer, compress: !0, fin: !0, ...t }
          ;(this._extensions[f.extensionName] || (n.compress = !1), this._sender.send(e || b, n, r))
        }
        terminate() {
          if (this.readyState !== M.CLOSED) {
            if (this.readyState === M.CONNECTING)
              return void $(this, this._req, "WebSocket was closed before the connection was established")
            this._socket && ((this._readyState = M.CLOSING), this._socket.destroy())
          }
        }
      }
      function N(e, t) {
        ;((e._readyState = M.CLOSING), (e._errorEmitted = !0), e.emit("error", t), e.emitClose())
      }
      function D(e) {
        return ((e.path = e.socketPath), o.connect(e))
      }
      function j(e) {
        return (
          (e.path = void 0),
          e.servername || "" === e.servername || (e.servername = o.isIP(e.host) ? "" : e.host),
          a.connect(e)
        )
      }
      function $(e, t, r) {
        e._readyState = M.CLOSING
        let n = Error(r)
        ;(Error.captureStackTrace(n, $),
          t.setHeader
            ? ((t[A] = !0), t.abort(), t.socket && !t.socket.destroyed && t.socket.destroy(), process.nextTick(N, e, n))
            : (t.destroy(n), t.once("error", e.emit.bind(e, "error")), t.once("close", e.emitClose.bind(e))))
      }
      function U(e, t, r) {
        if (t) {
          let r = g(t) ? t.size : P(t).length
          e._socket ? (e._sender._bufferedBytes += r) : (e._bufferedAmount += r)
        }
        if (r) {
          let t = Error(`WebSocket is not open: readyState ${e.readyState} (${T[e.readyState]})`)
          process.nextTick(r, t)
        }
      }
      function F(e, t) {
        let r = this[E]
        ;((r._closeFrameReceived = !0),
          (r._closeMessage = t),
          (r._closeCode = e),
          void 0 !== r._socket[E] &&
            (r._socket.removeListener("data", Y),
            process.nextTick(K, r._socket),
            1005 === e ? r.close() : r.close(e, t)))
      }
      function H() {
        let e = this[E]
        e.isPaused || e._socket.resume()
      }
      function V(e) {
        let t = this[E]
        ;(void 0 !== t._socket[E] &&
          (t._socket.removeListener("data", Y), process.nextTick(K, t._socket), t.close(e[x])),
          t._errorEmitted || ((t._errorEmitted = !0), t.emit("error", e)))
      }
      function W() {
        this[E].emitClose()
      }
      function G(e, t) {
        this[E].emit("message", e, t)
      }
      function q(e) {
        let t = this[E]
        ;(t._autoPong && t.pong(e, !this._isServer, k), t.emit("ping", e))
      }
      function z(e) {
        this[E].emit("pong", e)
      }
      function K(e) {
        e.resume()
      }
      function X(e) {
        let t = this[E]
        t.readyState !== M.CLOSED &&
          (t.readyState === M.OPEN && ((t._readyState = M.CLOSING), Z(t)),
          this._socket.end(),
          t._errorEmitted || ((t._errorEmitted = !0), t.emit("error", e)))
      }
      function Z(e) {
        e._closeTimer = setTimeout(e._socket.destroy.bind(e._socket), e._closeTimeout)
      }
      function Q() {
        let e = this[E]
        if (
          (this.removeListener("close", Q),
          this.removeListener("data", Y),
          this.removeListener("end", J),
          (e._readyState = M.CLOSING),
          !this._readableState.endEmitted &&
            !e._closeFrameReceived &&
            !e._receiver._writableState.errorEmitted &&
            0 !== this._readableState.length)
        ) {
          let t = this.read(this._readableState.length)
          e._receiver.write(t)
        }
        ;(e._receiver.end(),
          (this[E] = void 0),
          clearTimeout(e._closeTimer),
          e._receiver._writableState.finished || e._receiver._writableState.errorEmitted
            ? e.emitClose()
            : (e._receiver.on("error", W), e._receiver.on("finish", W)))
      }
      function Y(e) {
        this[E]._receiver.write(e) || this.pause()
      }
      function J() {
        let e = this[E]
        ;((e._readyState = M.CLOSING), e._receiver.end(), this.end())
      }
      function ee() {
        let e = this[E]
        ;(this.removeListener("error", ee), this.on("error", k), e && ((e._readyState = M.CLOSING), this.destroy()))
      }
      ;(Object.defineProperty(M, "CONNECTING", { enumerable: !0, value: T.indexOf("CONNECTING") }),
        Object.defineProperty(M.prototype, "CONNECTING", { enumerable: !0, value: T.indexOf("CONNECTING") }),
        Object.defineProperty(M, "OPEN", { enumerable: !0, value: T.indexOf("OPEN") }),
        Object.defineProperty(M.prototype, "OPEN", { enumerable: !0, value: T.indexOf("OPEN") }),
        Object.defineProperty(M, "CLOSING", { enumerable: !0, value: T.indexOf("CLOSING") }),
        Object.defineProperty(M.prototype, "CLOSING", { enumerable: !0, value: T.indexOf("CLOSING") }),
        Object.defineProperty(M, "CLOSED", { enumerable: !0, value: T.indexOf("CLOSED") }),
        Object.defineProperty(M.prototype, "CLOSED", { enumerable: !0, value: T.indexOf("CLOSED") }),
        ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((e) => {
          Object.defineProperty(M.prototype, e, { enumerable: !0 })
        }),
        ["open", "error", "close", "message"].forEach((e) => {
          Object.defineProperty(M.prototype, `on${e}`, {
            enumerable: !0,
            get() {
              for (let t of this.listeners(e)) if (t[w]) return t[v]
              return null
            },
            set(t) {
              for (let t of this.listeners(e))
                if (t[w]) {
                  this.removeListener(e, t)
                  break
                }
              "function" == typeof t && this.addEventListener(e, t, { [w]: !0 })
            },
          })
        }),
        (M.prototype.addEventListener = I),
        (M.prototype.removeEventListener = C),
        (e.exports = M))
    },
    53729(e, t, r) {
      "use strict"
      var n = r(12754),
        s = r(64097)
      r.d(
        t,
        {},
        {
          s: class {
            ws
            authenticatedPrincipal
            maximumFrameBytes
            messages
            readyState
            onopen = null
            onmessage = null
            onerror = null
            onclose = null
            terminationReason
            constructor(e, t, r, n = new s.s(e)) {
              ;((this.ws = e),
                (this.authenticatedPrincipal = t),
                (this.maximumFrameBytes = r),
                (this.messages = n),
                (this.readyState = e.readyState),
                e.on("open", () => {
                  ;((this.readyState = e.readyState), this.onopen?.({ type: "open" }))
                }),
                n.setMessageHandler((e, t) => {
                  this.onmessage?.({ type: "message", data: e, receivedAtMs: t })
                }))
              let i = !1
              ;(e.on("error", (t) => {
                ;((this.readyState = e.readyState), i || ((i = !0), this.onerror?.({ type: "error", error: t })))
              }),
                e.on("close", (t, r) => {
                  n.finishReceiving().then(() => {
                    this.readyState = e.readyState
                    let n = {
                      type: "close",
                      code: t,
                      failureReason: this.terminationReason,
                      reason: r.toString(),
                      wasClean: 1e3 === t,
                    }
                    this.onclose?.(n)
                  })
                }))
            }
            send(e) {
              if (this.readyState !== n.vj.Open || this.ws.readyState !== n.vj.Open)
                throw new n.l3("Codex app-server websocket is not open")
              if (null != this.maximumFrameBytes && Buffer.byteLength(e, "utf8") > this.maximumFrameBytes)
                throw new n.Ud(this.maximumFrameBytes)
              this.messages.send(e, this.maximumFrameBytes)
            }
            close(e, t) {
              if (this.readyState !== n.vj.Closing) {
                if (this.ws.readyState !== n.vj.Open) return void this.ws.close(e, t)
                ;((this.readyState = n.vj.Closing), this.messages.finishSending().then(() => this.ws.close(e, t)))
              }
            }
          },
        },
      )
    },
    7103(e, t, r) {
      "use strict"
      r.d(t, { Lu: () => V, Wb: () => z, iE: () => X, um: () => K, fo: () => G })
      var n = r(95398),
        s = r(89477),
        i = r(7045),
        o = r(86697),
        a = r.n(o),
        l = r(37418),
        u = r(85452),
        c = r(58027),
        d = r(35553),
        h = r(47981),
        f = r(29805),
        p = r(34338),
        m = r(79626),
        g = r(16647),
        y = r(91747),
        _ = r(54716),
        b = r(3545),
        S = r(40824),
        w = r(30476),
        v = r(33025),
        x = r(98197)
      function E(e) {
        if (!e || !(0, s.existsSync)(e)) return null
        let t = "win32" === process.platform ? "codex.exe" : "codex",
          r = !(function (e) {
            try {
              return (0, s.statSync)(e).isDirectory()
            } catch {
              return !1
            }
          })(e)
            ? e
            : a().join(e, t)
        return (0, s.existsSync)(r)
          ? !(function (e) {
              try {
                return (0, s.statSync)(e).isFile()
              } catch {
                return !1
              }
            })(r)
            ? null
            : r
          : null
      }
      var k = r(12754)
      class I {
        bytesReadTotal = 0
        bytesWrittenTotal = 0
        windowBucketsBySecond = new Map()
        trackRead(e, t = Date.now()) {
          e <= 0 || ((this.bytesReadTotal += e), this.updateWindowBucket(t, e, 0))
        }
        trackWritten(e, t = Date.now()) {
          e <= 0 || ((this.bytesWrittenTotal += e), this.updateWindowBucket(t, 0, e))
        }
        getSnapshot(e = Date.now()) {
          this.pruneWindowBuckets(e)
          let t = 0,
            r = 0
          for (let e of this.windowBucketsBySecond.values()) ((t += e.bytesRead), (r += e.bytesWritten))
          return {
            bytesReadTotal: this.bytesReadTotal,
            bytesWrittenTotal: this.bytesWrittenTotal,
            bytesReadLast30s: t,
            bytesWrittenLast30s: r,
          }
        }
        updateWindowBucket(e, t, r) {
          let n = Math.floor(e / 1e3),
            s = this.windowBucketsBySecond.get(n)
          ;(s
            ? ((s.bytesRead += t), (s.bytesWritten += r))
            : this.windowBucketsBySecond.set(n, { bytesRead: t, bytesWritten: r }),
            this.pruneWindowBuckets(e))
        }
        pruneWindowBuckets(e) {
          let t = Math.floor((e - 3e4) / 1e3)
          for (let e of this.windowBucketsBySecond.keys()) e < t && this.windowBucketsBySecond.delete(e)
        }
      }
      var C = r(80348),
        B = r(86847)
      let O = "Codex Desktop",
        P = "CODEX_APP_RUNTIME_CLI_PATH",
        A = ["-c", "features.code_mode_host=true"],
        R = [
          { configKey: "chatgpt_base_url", envVar: "CODEX_APP_SERVER_CHATGPT_BASE_URL" },
          { configKey: "openai_base_url", envVar: "CODEX_APP_SERVER_OPENAI_BASE_URL" },
        ],
        T = d.object({ appServerVersion: d.string() }),
        L = (0, l.promisify)(n.execFile),
        M = [100, 250, 500, 1e3, 2500, 5e3],
        N = [65536, 262144, 1048576],
        D = ["bin", "wsl"],
        j = ["codex-resources", "bwrap"],
        $ = 'CODEX_SQLITE_HOME="$HOME/.codex/sqlite"',
        U = "CODEX_HOME",
        F = [
          "CODEX_APP_SERVER_LOGIN_ISSUER",
          "CODEX_APP_SERVER_LOGIN_CLIENT_ID",
          "CODEX_REFRESH_TOKEN_URL_OVERRIDE",
          "CODEX_REVOKE_TOKEN_URL_OVERRIDE",
        ]
      class H {
        options
        ioStatsTracker
        readyState = k.vj.Connecting
        onopen = null
        onmessage = null
        onMessageReceived = null
        onerror = null
        onclose = null
        get processId() {
          return this.proc?.pid ?? null
        }
        proc = null
        closeEmitted = !1
        lastStderrMessage = null
        processExit = null
        stdoutMessageReader
        stdoutParserFinished = !1
        stdoutDispatchHandle = null
        stdoutMessageQueue = new b.u({ compactionMinConsumedItems: 1024, depthThresholds: M })
        stdoutLineSizeTracker = new S.$(N)
        logger = (0, y.$C)("StdioConnection")
        constructor(e, t) {
          ;((this.options = e),
            (this.ioStatsTracker = t),
            (this.stdoutMessageReader = new B.k({
              onError: (e, t) => {
                this.logger.error("Failed to parse app-server stdout JSONL message", {
                  safe: { lineBytes: t },
                  sensitive: { error: e },
                })
              },
              onMessage: (e, t, r) => {
                let n = new _.J(e, t, r)
                ;(this.onMessageReceived?.({ type: "message", data: n }), this.enqueueStdoutMessage(n))
              },
              onFinish: this.onStdoutParserFinish,
              onStreamError: this.onStdoutParserError,
            })),
            this.spawnProcess())
        }
        send(e) {
          if (this.readyState !== k.vj.Open || !this.proc || !this.proc.stdin || this.proc.stdin.destroyed)
            throw new k.l3("Codex app-server process is not available")
          let t = `${e}
`
          ;(this.ioStatsTracker.trackWritten(Buffer.byteLength(t, "utf8")), this.proc.stdin.write(t))
        }
        getInboundMessageProgress() {
          return this.stdoutMessageReader.getCurrentLineProgress()
        }
        close() {
          if (this.readyState === k.vj.Closed) return
          if (((this.readyState = k.vj.Closing), this.resetStdoutDispatchState(), !this.proc)) {
            ;((this.readyState = k.vj.Closed),
              this.emitClose({ type: "close", code: null, reason: null, signal: null }))
            return
          }
          let e = this.proc
          e.killed || null != e.exitCode
            ? null != e.exitCode &&
              (null == this.processExit && (this.processExit = { code: e.exitCode, signal: e.signalCode }),
              this.finishProcessExitIfReady())
            : e.kill()
        }
        spawnProcess() {
          let e = this.options.spawnCommand ?? this.options.executablePath,
            t = h.K.resolve(e, { env: this.options.env }) ?? e,
            r = this.options.spawnArgs ?? this.options.args,
            s = (0, n.spawn)(t, r, { stdio: ["pipe", "pipe", "pipe"], env: this.options.env, cwd: this.options.cwd })
          if (!s.pid) throw Error(`Failed to spawn Codex CLI at ${this.options.executablePath}`)
          let i = (0, f._4)()
          ;(this.logger.info("stdio_transport_spawned", {
            safe: {
              executablePath: this.options.executablePath,
              argsCount: this.options.args.length,
              coreRuntimeInUse: "win32" === process.platform && null != i && t === (0, o.join)(i, "codex.exe"),
              spawnCommand: this.options.spawnCommand ?? this.options.executablePath,
              pid: s.pid,
            },
            sensitive: {},
          }),
            (this.proc = s),
            (this.lastStderrMessage = null),
            (this.processExit = null),
            (this.stdoutParserFinished = !1),
            (this.readyState = k.vj.Open),
            queueMicrotask(() => {
              this.onopen?.({ type: "open" })
            }),
            s.on("error", this.onProcessError),
            s.on("exit", this.onProcessExit),
            s.stderr && s.stderr.on("data", this.onStderrData),
            s.stdout && s.stdout.on("data", this.onStdoutData),
            this.stdoutMessageReader.attach(s.stdout),
            s.stdin && s.stdin.on("error", this.onStdinError))
        }
        onProcessError = (e) => {
          this.onerror?.({ type: "error", error: e, message: e.message })
        }
        onProcessExit = (e, t) => {
          ;((this.processExit = { code: e, signal: t }), this.finishProcessExitIfReady())
        }
        finishProcessExitIfReady() {
          if (!this.stdoutParserFinished || null == this.processExit) return
          let { code: e, signal: t } = this.processExit
          ;(this.flushPendingStdoutLines(),
            this.cleanupProcessListeners(),
            this.resetStdoutDispatchState(),
            (this.proc = null),
            (this.readyState = k.vj.Closed),
            this.emitClose({ type: "close", code: e, reason: this.lastStderrMessage, signal: t, wasClean: 0 === e }))
        }
        onStdoutData = (e) => {
          this.ioStatsTracker.trackRead("string" == typeof e ? Buffer.byteLength(e, "utf8") : e.length)
        }
        onStdoutParserFinish = () => {
          ;((this.stdoutParserFinished = !0), this.flushPendingStdoutLines(), this.finishProcessExitIfReady())
        }
        onStdoutParserError = (e) => {
          ;(this.onerror?.({ type: "error", error: e, message: e.message }),
            (this.stdoutParserFinished = !0),
            this.finishProcessExitIfReady())
        }
        onStderrData = (e) => {
          let t = e.toString().trim()
          t && ((this.lastStderrMessage = t), this.onerror?.({ type: "error", message: t }))
        }
        onStdinError = (e) => {
          this.onerror?.({ type: "error", error: e, message: e.message })
        }
        cleanupProcessListeners() {
          let e = this.proc
          e &&
            (e.removeListener("error", this.onProcessError),
            e.removeListener("exit", this.onProcessExit),
            e.stderr && e.stderr.removeListener("data", this.onStderrData),
            e.stdout && e.stdout.removeListener("data", this.onStdoutData),
            e.stdin && e.stdin.removeListener("error", this.onStdinError),
            this.stdoutMessageReader.dispose())
        }
        emitClose(e) {
          this.closeEmitted || ((this.closeEmitted = !0), this.onclose?.(e))
        }
        enqueueStdoutMessage(e) {
          for (let t of this.stdoutLineSizeTracker.track(e.lineBytes))
            this.logger.trace("stdio_stdout_line_size_threshold", {
              safe: {
                threshold: t.threshold,
                lineBytes: t.sizeBytes,
                lineBytesHighWaterMark: t.sizeBytesHighWaterMark,
              },
              sensitive: {},
            })
          for (let t of this.stdoutMessageQueue.enqueue(e))
            this.logger.trace("stdio_stdout_queue_depth_threshold", {
              safe: {
                threshold: t.threshold,
                queueDepth: t.queueDepth,
                queueDepthHighWaterMark: t.queueDepthHighWaterMark,
              },
              sensitive: {},
            })
          this.scheduleStdoutDispatch()
        }
        scheduleStdoutDispatch() {
          this.stdoutDispatchHandle ||
            (this.stdoutDispatchHandle = setImmediate(() => {
              ;((this.stdoutDispatchHandle = null), this.dispatchPendingStdoutLines(!1))
            }))
        }
        flushPendingStdoutLines() {
          this.dispatchPendingStdoutLines(!0)
        }
        dispatchPendingStdoutLines(e) {
          if (0 === this.stdoutMessageQueue.getDepth()) return
          let t = this.stdoutMessageQueue.drain({
            flushAll: e,
            maxItemsPerSlice: 200,
            maxSliceMs: 8,
            onItem: (e) => {
              this.onmessage?.({ type: "message", data: e })
            },
          })
          if (
            ((t.durationMs >= 8 || t.remainingCount >= 200) &&
              this.logger.debug("stdio_stdout_dispatch_slice", {
                safe: {
                  flushAll: e,
                  dispatchedCount: t.drainedCount,
                  queueRemaining: t.remainingCount,
                  dispatchDurationMs: t.durationMs,
                  queueDepthHighWaterMark: t.queueDepthHighWaterMark,
                },
                sensitive: {},
              }),
            t.drainedAll)
          ) {
            t.queueDepthHighWaterMark >= M[0] &&
              this.logger.debug("stdio_stdout_queue_drained", {
                safe: { queueDepthHighWaterMark: t.queueDepthHighWaterMark },
                sensitive: {},
              })
            return
          }
          e || this.scheduleStdoutDispatch()
        }
        resetStdoutDispatchState() {
          ;(this.stdoutDispatchHandle &&
            (clearImmediate(this.stdoutDispatchHandle), (this.stdoutDispatchHandle = null)),
            this.stdoutMessageQueue.clear())
        }
      }
      class V {
        options
        kind = "stdio"
        ioStatsTracker = new I()
        constructor(e) {
          this.options = e
        }
        supportsReconnect() {
          return "websocket" === this.kind
        }
        async connect() {
          let e = "local" === this.options.hostConfig.kind ? await this.options.getConfigOverrides?.() : void 0,
            t = await G(this.options, e)
          if (!t)
            throw Error(
              "Unable to locate the Codex CLI binary or required runtime components. Check the installation or explicit runtime overrides.",
            )
          let r = (0, o.join)((0, p.D)(), "app-server-control", "app-server-control.sock")
          return "win32" !== process.platform &&
            !e?.length &&
            "local" === this.options.hostConfig.kind &&
            "1" === process.env.CODEX_APP_SERVER_USE_LOCAL_DAEMON &&
            "1" !== process.env.CODEX_APP_SERVER_FORCE_CLI &&
            !process.env.CODEX_CLI_PATH?.trim() &&
            null == this.options.hostConfig.codex_cli_command &&
            (await (async function (e) {
              try {
                let { stdout: t } = await L(e.executablePath, ["app-server", "daemon", "version"], {
                    encoding: "utf8",
                    env: e.env,
                    timeout: 2500,
                  }),
                  { appServerVersion: r } = T.parse(JSON.parse(t))
                return (0, u.dlm)(r)
              } catch {
                return !1
              }
            })(t))
            ? ((this.kind = "websocket"),
              new C.b({
                hostConfig: this.options.hostConfig,
                websocketUrl: "ws://localhost/rpc",
                createConnection: () => (0, i.createConnection)(r),
              }).connect())
            : ((this.kind = "stdio"), new H(t, this.ioStatsTracker))
        }
        getIoStatsSnapshot() {
          return this.ioStatsTracker.getSnapshot()
        }
      }
      function W(e, t = []) {
        var r, n, s, i, a, l
        if ("win32" === process.platform && "local" === e.hostConfig.kind && (e.spawnInsideWsl ?? (0, x.Ny)())) {
          let s
          return ((r = e), (n = t), null == (s = (0, x.dX)()) ? null : q(r, s, (0, x.oy)(s), n))
        }
        let c = X({ hostConfig: e.hostConfig, repoRoot: e.repoRoot, resourcesPath: e.resourcesPath })
        if (
          ("local" === e.hostConfig.kind &&
            (0, f.JK)({
              component: "codex",
              consumer: "app-server",
              executablePath: c?.executablePath ?? null,
              source: c?.source,
            }),
          !c)
        )
          return null
        let d = (0, f._4)(),
          h =
            "win32" === process.platform &&
            "local" === e.hostConfig.kind &&
            "override" !== c.source &&
            null != d &&
            c.executablePath === (0, o.join)(d, "codex.exe"),
          p = {
            ...process.env,
            LOG_FORMAT: "json",
            RUST_LOG: process.env.RUST_LOG ?? "warn",
            CODEX_INTERNAL_ORIGINATOR_OVERRIDE: e.defaultOriginator ?? O,
          }
        delete p.CODEX_ELECTRON_USER_DATA_PATH
        let g = p[P]?.trim(),
          y = p.CODEX_CLI_PATH?.trim()
        if (
          ((y && g !== y) || delete p.CODEX_CLI_PATH,
          delete p[P],
          h || delete p.CODEX_WINDOWS_REGISTERED_CORE,
          ("local" !== e.hostConfig.kind ||
            "override" === c.source ||
            (null != p.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY && c.executablePath !== (0, f.WD)(e.resourcesPath))) &&
            delete p.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY,
          "local" === e.hostConfig.kind &&
            (e.hostConfig.codex_cli_command?.length ? null != g && (p[P] = g) : (p[P] = c.executablePath),
            null == e.startupCommand))
        ) {
          let t = (0, f.zZ)(e.resourcesPath)
          if ("win32" === process.platform && null != (0, f._4)() && null == t) return null
          null != t && (p.CODEX_MCP_NODE_PATH = t)
        }
        if (null == e.startupCommand) {
          let t,
            r,
            n,
            u,
            c = (0, w.HZ)()
          eo(c) &&
            (0, v.Dt)(
              p,
              ((s = (0, v.AC)(p)),
              (i = c),
              (t = "win32" === process.platform ? ";" : ":"),
              0 === (r = s ?? "").length ? i : [i, ...r.split(t).filter((e) => !Y(e, i))].join(t)),
            )
          let d = (0, w.Vp)()
          ;(eo(d) &&
            (0, v.Dt)(
              p,
              ((a = (0, v.AC)(p)),
              (l = d),
              (n = "win32" === process.platform ? ";" : ":"),
              0 === (u = a ?? "").length ? l : [...u.split(n).filter((e) => !Y(e, l)), l].join(n)),
            ),
            (0, w.s3)(p))
          let h = (0, f._V)(e.resourcesPath)
          null != h && (0, v.Dt)(p, Q((0, v.AC)(p), (0, o.dirname)(h)))
        }
        c.binDirectory && (0, v.Dt)(p, Q((0, v.AC)(p), c.binDirectory))
        let _ = (0, u.$S6)(e.hostConfig)
          ? (function (e) {
              let t = { ...e },
                r = !1
              for (let e of Object.keys(t)) {
                let n = e.toUpperCase()
                n === U
                  ? ((t[e] = void 0), (r = !0))
                  : "WSLENV" === n &&
                    (t[e] = (t[e] ?? "")
                      .split(":")
                      .filter((e) => e.trim().split("/", 1)[0]?.toUpperCase() !== U)
                      .join(":"))
              }
              return (r || (t[U] = void 0), t)
            })(p)
          : p
        return {
          executablePath: c.executablePath,
          args: [
            ...c.args,
            ...(e.startupCommand?.args ?? []),
            ...t.flatMap((e) => ["-c", e]),
            ...(h ? ["-c", "features.windows_sandbox_service=true"] : []),
          ],
          env: (0, m.I)(_),
          cwd: "local" === e.hostConfig.kind ? c.cwd : void 0,
        }
      }
      async function G(e, t = []) {
        if ("win32" === process.platform && "local" === e.hostConfig.kind && (e.spawnInsideWsl ?? (0, x.Ny)())) {
          let r = await (0, x.Bw)()
          return null == r ? null : q(e, r, await (0, x.Mg)(r), t)
        }
        let r = W(e, t)
        return null != r ||
          "win32" !== process.platform ||
          "local" !== e.hostConfig.kind ||
          e.hostConfig.codex_cli_command?.length ||
          z()
          ? r
          : (await new Promise((e) => setTimeout(e, 100)), W(e, t))
      }
      function q(e, t, r, n) {
        var i, a, l
        let u,
          d,
          h,
          y = (0, p.D)(),
          _ = (function (e) {
            let t = e.hostConfig.codex_cli_command
            if (t && t.length > 0) {
              let e,
                [r, ...n] = t
              if (!r || 0 === r.trim().length) return null
              if (ea(r) && (0, s.existsSync)(r)) {
                let t = er(r)
                t && (e = (0, o.dirname)(t))
              }
              return { executablePath: r, args: n, binDirectory: e }
            }
            let r = es()
            if (null != r) return { executablePath: r, args: Z() }
            let n = (function (e, t) {
              let r = [],
                n = en()
              if (n) {
                let e = er(n)
                e && r.push(e)
              }
              if (t.resourcesPath) {
                var s
                let e = ei({
                  resourcesPath: t.resourcesPath,
                  executableName: "codex",
                  windowsCodexHome: t.windowsCodexHome,
                  includeRuntime: t.includeRuntime,
                })
                ;(null != e &&
                  (t.includeRuntime &&
                    ((s = { resourcesPath: t.resourcesPath, windowsCodexHome: t.windowsCodexHome }),
                    (0, f.l2)({
                      resourcesPath: (0, o.join)(s.resourcesPath, "codex-resources"),
                      executableName: "bwrap",
                      windowsDestinationPath: (0, o.join)(s.windowsCodexHome, ...D, ...j),
                    })),
                  r.push(e)),
                  r.push((0, o.join)(t.resourcesPath, "app.asar.unpacked", "codex")),
                  r.push((0, o.join)(t.resourcesPath, "codex-linux")))
              }
              for (let t of (e && r.push((0, o.join)(e, ...(0, g.W)(), "codex")), r)) {
                let e = er(t)
                if (e) return { executablePath: e, binDirectory: (0, o.dirname)(e) }
              }
              return null
            })(e.repoRoot, {
              resourcesPath: e.resourcesPath,
              windowsCodexHome: e.windowsCodexHome,
              includeRuntime: null == e.startupCommand,
            })
            return n ? { executablePath: n.executablePath, args: Z(), binDirectory: n.binDirectory } : null
          })({ ...e, windowsCodexHome: y })
        if (!_) return null
        let b = [..._.args, ...(e.startupCommand?.args ?? []), ...n.flatMap((e) => ["-c", e])],
          S =
            null != e.startupCommand
              ? null
              : ei({ resourcesPath: e.resourcesPath, executableName: "rg", windowsCodexHome: y }),
          w = null != S ? (0, o.dirname)(S) : void 0,
          E = Array.from(new Set([_.binDirectory, w].filter((e) => null != e))),
          k = e.repoRoot.trim().length > 0 ? (0, x.cB)(e.repoRoot) : ".",
          I = (function (e) {
            let t = [ee(e.executablePath), (0, c.fj)(e.cliArgs)].filter((e) => e.length > 0).join(" "),
              r = [...e.pathEntries.map(ee), null != e.interactivePath ? (0, c.fj)([e.interactivePath]) : null].filter(
                (e) => null != e,
              )
            if (0 === r.length) return `${$} exec ${t}`
            let n = null == e.interactivePath ? `${r.join(":")}:$PATH` : r.join(":")
            return `PATH=${n} ${$} exec ${t}`
          })({ pathEntries: E, interactivePath: r, executablePath: _.executablePath, cliArgs: b }),
          C = (0, x.nS)({ distro: t, cwd: k, command: I }),
          B =
            ((i = {
              windowsCodexHome: y,
              defaultOriginator: e.defaultOriginator ?? O,
              cliBinDirectory: _.binDirectory,
              repoRoot: e.repoRoot,
            }),
            (u = {
              ...process.env,
              CODEX_HOME: i.windowsCodexHome,
              LOG_FORMAT: "json",
              RUST_LOG: process.env.RUST_LOG ?? "warn",
              CODEX_INTERNAL_ORIGINATOR_OVERRIDE: i.defaultOriginator,
              WSLENV: (0, x.hN)(process.env.WSLENV, [
                ...x.UF,
                ...F,
                { name: "CODEX_HOME", type: "path" },
                "LOG_FORMAT",
                "RUST_LOG",
                "CODEX_INTERNAL_ORIGINATOR_OVERRIDE",
                "CODEX_APP_TOOLS_PIPE_PATH",
              ]),
            }),
            delete u.CODEX_WINDOWS_REGISTERED_CORE,
            delete u.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY,
            null != (d = (0, v.AC)(u)) &&
              (0, v.Dt)(
                u,
                ((a = d),
                (h = (l = i).repoRoot ? (0, o.join)(l.repoRoot, "node_modules", ".bin") : null),
                a
                  .split(";")
                  .filter((e) => {
                    var t, r
                    let n
                    return (
                      (t = e),
                      (r = { cliBinDirectory: l.cliBinDirectory, repoNodeModulesBin: h }),
                      !(
                        0 === (n = et(t)).length ||
                        ".\\node_modules\\.bin" === n ||
                        "./node_modules/.bin" === n ||
                        n.includes("\\.codex\\tmp\\arg0\\codex-arg0") ||
                        n.includes("\\node_modules\\@openai\\codex\\node_modules\\@openai\\codex-win32-x64\\vendor\\")
                      ) &&
                        (null == r.cliBinDirectory || n !== et(r.cliBinDirectory)) &&
                        (null == r.repoNodeModulesBin || n !== et(r.repoNodeModulesBin))
                    )
                  })
                  .join(";")),
              ),
            (0, m.I)(u))
        return {
          executablePath: _.executablePath,
          args: b,
          env: B,
          spawnCommand: "wsl.exe",
          spawnArgs: C,
          wslDistro: t,
        }
      }
      function z() {
        let e = en()
        return !!e && (null != E(e) || null != es())
      }
      function K(e, t) {
        let r = [],
          n = en()
        if (n) {
          let e = E(n)
          if (e) return { executablePath: e, binDirectory: (0, o.dirname)(e), source: "override" }
        }
        let s = "win32" === process.platform ? "codex.exe" : "codex"
        if ("win32" === process.platform && null != (0, f._4)()) {
          let e = (0, f.WD)(t?.resourcesPath)
          return null == e ? null : { executablePath: e, binDirectory: (0, o.dirname)(e) }
        }
        if (t?.resourcesPath) {
          let e = (0, f.WD)(t.resourcesPath)
          if (null != e) {
            let r = E(e)
            if (null != r) {
              let n =
                "win32" === process.platform &&
                e !== (0, o.join)(t.resourcesPath, s) &&
                "" === (0, o.relative)((0, o.dirname)(t.resourcesPath), process.cwd())
                  ? (0, o.dirname)(r)
                  : void 0
              return { executablePath: r, binDirectory: (0, o.dirname)(r), cwd: n }
            }
          }
          r.push((0, o.join)(t.resourcesPath, "app.asar.unpacked", s))
        }
        for (let t of (e && r.push((0, o.join)(e, ...(0, g.W)(), s)), r)) {
          let e = E(t)
          if (e) return { executablePath: e, binDirectory: (0, o.dirname)(e) }
        }
        return null
      }
      function X(e) {
        let t = e.hostConfig.codex_cli_command
        if (t && t.length > 0) {
          let [e, ...r] = t
          return e && 0 !== e.trim().length ? { executablePath: e, args: r, source: "override" } : null
        }
        let r = es()
        if (null != r) return { executablePath: r, args: Z(), source: "override" }
        let n = K(e.repoRoot, { resourcesPath: e.resourcesPath })
        return n
          ? { executablePath: n.executablePath, args: Z(), binDirectory: n.binDirectory, cwd: n.cwd, source: n.source }
          : null
      }
      function Z() {
        let e = R.flatMap(({ configKey: e, envVar: t }) => {
          let r = process.env[t]?.trim()
          return null == r || "" === r ? [] : ["-c", `${e}=${JSON.stringify(r)}`]
        })
        return 0 === e.length
          ? [...A, "app-server", "--analytics-default-enabled"]
          : ["app-server", ...A, ...e, "--analytics-default-enabled"]
      }
      function Q(e, t) {
        let r = "win32" === process.platform ? ";" : ":",
          n = e ?? ""
        return n.split(r).includes(t) ? n : `${n}${n ? r : ""}${t}`
      }
      function Y(e, t) {
        return "win32" !== process.platform ? e === t : J(e) === J(t)
      }
      function J(e) {
        return e.replace(/[\\/]+$/u, "").toLowerCase()
      }
      function ee(e) {
        return (0, x.NU)(e) && !(0, x.vW)(e)
          ? `"$(wslpath -u ${(0, c.fj)([e])})"`
          : (0, c.fj)([
              (function (e) {
                return !e.startsWith("/") && ea(e) ? (0, x.cB)(e) : e
              })(e),
            ])
      }
      function et(e) {
        return e.trim().replace(/\//g, "\\").replace(/\\+$/, "").toLowerCase()
      }
      function er(e) {
        if (!e || !(0, s.existsSync)(e)) return null
        let t = eo(e) ? (0, o.join)(e, "codex") : e
        return (0, s.existsSync)(t)
          ? !(function (e) {
              try {
                return (0, s.statSync)(e).isFile()
              } catch {
                return !1
              }
            })(t)
            ? null
            : t
          : null
      }
      function en() {
        let e = process.env.CODEX_CLI_PATH
        if (null == e) return null
        let t = e.trim()
        return 0 === t.length ? null : t
      }
      function es() {
        let e = en()
        return null == e || ea(e) ? null : e
      }
      function ei(e) {
        return (0, f.l2)({
          resourcesPath: e.resourcesPath,
          executableName: e.executableName,
          windowsSiblingExecutableNames:
            "codex" === e.executableName && !1 !== e.includeRuntime ? ["codex-code-mode-host"] : [],
          windowsDestinationPath: (0, o.join)(e.windowsCodexHome, ...D, e.executableName),
        })
      }
      function eo(e) {
        try {
          return (0, s.statSync)(e).isDirectory()
        } catch {
          return !1
        }
      }
      function ea(e) {
        return /[\\/]/.test(e) || /^[a-zA-Z]:/.test(e)
      }
    },
    89777(e, t, r) {
      "use strict"
      var n = r(12754)
      r.d(
        t,
        {},
        {
          C: function (e, { onPongTimeout: t, pingIntervalMs: r = 1e4, pongTimeoutMs: s = 6e4 }) {
            let i = Date.now(),
              o = !1,
              a = () => {
                i = Date.now()
              },
              l = setInterval(() => {
                if (e.readyState === n.vj.Open && !o) {
                  if (Date.now() - i > s) {
                    ;((o = !0), t())
                    return
                  }
                  e.ping()
                }
              }, r),
              u = () => {
                ;(clearInterval(l), e.off("pong", a), e.off("close", u))
              }
            return (e.on("pong", a), e.on("close", u), u)
          },
        },
      )
    },
    80348(e, t, r) {
      "use strict"
      var n = r(16310),
        s = r(50447),
        i = r(98118),
        o = r(70408),
        a = r(91747),
        l = r(12754),
        u = r(53729),
        c = r(89777),
        d = r(64097)
      r.d(
        t,
        {},
        {
          b: class {
            options
            kind = "websocket"
            logger = (0, a.$C)("WebsocketTransport")
            constructor(e) {
              this.options = e
            }
            supportsReconnect() {
              return !0
            }
            async connect() {
              let e,
                t = await this.options.getWebsocketHandshake?.(),
                r = this.options.handshakeTimeoutMs ?? 15e3,
                a = (0, d._)()
              null != this.options.socksProxyUrl
                ? (e = new i.SocksProxyAgent(this.options.socksProxyUrl))
                : null == this.options.createConnection &&
                  "1" === process.env.NODE_USE_ENV_PROXY &&
                  (e = this.options.websocketUrl.startsWith("wss:")
                    ? new s.Agent({ proxyEnv: process.env })
                    : new n.Agent({ proxyEnv: process.env }))
              let h = {
                  agent: e,
                  ca: this.options.ca,
                  createConnection: this.options.createConnection,
                  handshakeTimeout: r,
                  headers: { ...t?.headers, ...a },
                  perMessageDeflate: !1,
                },
                f =
                  t?.protocols == null
                    ? new o.Ay(this.options.websocketUrl, h)
                    : new o.Ay(this.options.websocketUrl, t.protocols, h),
                p = new d.s(f, null != a),
                m = new u.s(f, t?.authenticatedPrincipal, void 0, p)
              f.on("open", () => {
                this.logger.info("app_server_connection.compression_negotiated", {
                  safe: {
                    connectionId: (0, l.K7)(m),
                    hostId: this.options.hostConfig.id,
                    transport: "websocket",
                    compression: p.compression,
                    compressionOffered: null != a,
                  },
                })
              })
              let g = setTimeout(() => {
                ;((m.terminationReason = "open_timeout"), f.terminate())
              }, r)
              g.unref()
              let y = () => {
                ;(clearTimeout(g), f.off("open", y), f.off("close", y))
              }
              return (
                f.on("open", y),
                f.on("close", y),
                (0, c.C)(f, {
                  onPongTimeout: () => {
                    ;((m.terminationReason = "pong_timeout"), f.terminate())
                  },
                }),
                m
              )
            }
          },
          u: function (e) {
            if ("1" === process.env.CODEX_APP_SERVER_FORCE_CLI) return null
            let t = process.env.CODEX_APP_SERVER_WS_URL ?? e.websocket_url
            return t && "string" == typeof t ? t : null
          },
        },
      )
    },
    12754(e, t, r) {
      "use strict"
      class n extends Error {
        constructor(e) {
          ;(super(e), (this.name = "AppServerTransportNotSentError"))
        }
      }
      let s = { nextConnectionId: 1, connectionIds: new WeakMap() }
      r.d(
        t,
        {},
        {
          K7: function (e) {
            let t = s.connectionIds.get(e)
            if (null != t) return t
            let r = s.nextConnectionId
            return ((s.nextConnectionId += 1), s.connectionIds.set(e, r), r)
          },
          Ud: class extends n {
            maximumSizeBytes
            code = "app_server_message_too_large"
            constructor(e) {
              ;(super("Codex app-server request exceeds the remote WebSocket frame limit"),
                (this.maximumSizeBytes = e),
                (this.name = "AppServerTransportMessageTooLargeError"))
            }
          },
          Wp: class extends Error {
            stage
            failureReason
            constructor({ failureReason: e, message: t, stage: r }) {
              ;(super(t), (this.name = "AppServerSshSetupError"), (this.stage = r), (this.failureReason = e))
            }
          },
          l3: n,
          vj: { Connecting: 0, Open: 1, Closing: 2, Closed: 3 },
        },
      )
    },
    64097(e, t, r) {
      "use strict"
      var n = r(37418),
        s = r(24627)
      let i = "x-codex-app-server-compression",
        o = "zstd-stream-v1"
      function a(e, t, r, n) {
        return new Promise((i, o) => {
          let a = [],
            l = 0,
            u = !1,
            c = (e) => {
              ;(l += e.length) > n ? d(Error("App-server WebSocket message limit exceeded")) : a.push(e)
            },
            d = (t) => {
              u ||
                ((u = !0),
                e.off("data", c),
                e.off("error", d),
                e.off("close", h),
                null != t ? o(t) : i(Buffer.concat(a, l)))
            },
            h = () => d(Error("App-server compression stream closed"))
          ;(e.on("data", c),
            e.once("error", d),
            e.once("close", h),
            r ? (e.write(t), e.flush(s.constants.ZSTD_e_flush, d)) : e.write(t, d))
        })
      }
      r.d(
        t,
        {},
        {
          _: function () {
            return "function" == typeof s.createZstdCompress && "function" == typeof s.createZstdDecompress
              ? { [i]: o }
              : void 0
          },
          s: class {
            ws
            maxMessageBytes
            encoder = null
            decoder = null
            sendQueue = Promise.resolve()
            receiveQueue = Promise.resolve()
            handler = null
            pendingMessages = []
            pendingBytes = 0
            receiving = 0
            disposed = !1
            constructor(e, t = !1, r = 0x6400000) {
              ;((this.ws = e),
                (this.maxMessageBytes = r),
                e.on("upgrade", (e) => {
                  let r = e.headers[i]
                  if (null != r) {
                    if (!t || r !== o) return void this.fail(Error("Unsupported app-server WebSocket compression"))
                    ;((this.encoder = s.createZstdCompress({
                      params: { [s.constants.ZSTD_c_compressionLevel]: -7, [s.constants.ZSTD_c_windowLog]: 20 },
                    })),
                      (this.decoder = s.createZstdDecompress({ params: { [s.constants.ZSTD_d_windowLogMax]: 20 } })),
                      this.encoder.on("error", (e) => this.fail(e)),
                      this.decoder.on("error", (e) => this.fail(e)))
                  }
                }),
                e.on("message", (t, r) => {
                  let s = Date.now()
                  if (null == this.decoder) return void this.deliver(t.toString(), s)
                  if (!r) return void this.fail(Error("Expected compressed app-server binary message"))
                  let i = this.decoder
                  ;(this.receiving++,
                    e.pause(),
                    (this.receiveQueue = this.receiveQueue
                      .then(async () => {
                        if (this.disposed) return
                        let e = await a(i, t, !1, this.maxMessageBytes)
                        this.deliver(new n.TextDecoder("utf-8", { fatal: !0 }).decode(e), s)
                      })
                      .catch((e) => this.fail(e))
                      .finally(() => {
                        ;(this.receiving--, this.disposed || 0 !== this.receiving || e.resume())
                      })))
                }),
                e.on("close", () => {
                  this.receiveQueue.then(() => this.dispose())
                }))
            }
            get compression() {
              return null == this.encoder ? "none" : o
            }
            finishReceiving() {
              return this.receiveQueue
            }
            finishSending() {
              return this.sendQueue
            }
            setMessageHandler(e) {
              this.handler = e
              let t = this.pendingMessages
              for (let e of ((this.pendingMessages = []), (this.pendingBytes = 0), t))
                this.deliver(e.data, e.receivedAtMs)
            }
            send(e, t = 0x1000000) {
              let r = this.encoder
              null == r
                ? this.ws.send(e)
                : (this.sendQueue = this.sendQueue
                    .then(async () => {
                      if (this.disposed) return
                      let n = await a(r, Buffer.from(e), !0, this.maxMessageBytes),
                        s = 0
                      for (; n.length - s > t;) (this.ws.send(n.subarray(s, s + t), { binary: !0, fin: !1 }), (s += t))
                      this.ws.send(n.subarray(s), { binary: !0, fin: !0 })
                    })
                    .catch((e) => {
                      this.fail(e)
                    }))
            }
            deliver(e, t) {
              if (!this.disposed) {
                if (null != this.handler) return void this.handler(e, t)
                if (((this.pendingBytes += Buffer.byteLength(e)), this.pendingBytes > this.maxMessageBytes))
                  return void this.fail(Error("App-server WebSocket message buffer limit exceeded"))
                this.pendingMessages.push({ data: e, receivedAtMs: t })
              }
            }
            fail(e) {
              if (!this.disposed) {
                this.dispose()
                try {
                  this.ws.emit("error", e)
                } finally {
                  ;(0 === this.ws.readyState && this.ws.once("error", () => void 0), this.ws.terminate())
                }
              }
            }
            dispose() {
              ;((this.disposed = !0),
                this.encoder?.destroy(),
                this.decoder?.destroy(),
                (this.pendingMessages = []),
                (this.pendingBytes = 0))
            }
          },
        },
      )
    },
    79395(e, t, r) {
      "use strict"
      var n = r(25356),
        s = r(26238),
        i = r(71605),
        o = r(41082)
      let a = Math.min(0x10000000, Math.floor(n.constants.MAX_STRING_LENGTH / 2)),
        l = Buffer.alloc(0),
        u = new WeakSet()
      class c extends s.Writable {
        options
        currentLine = this.createLine()
        maxBufferedLineBytes
        constructor(e) {
          ;(super(), (this.options = e), (this.maxBufferedLineBytes = e.maxBufferedLineBytes ?? a))
        }
        _write(e, t, r) {
          this.consumeBuffer(e, 0, r)
        }
        _final(e) {
          this.currentLine.lineBytes > 0 ||
          this.currentLine.hasNonWhitespace ||
          null != this.currentLine.completedMessage ||
          null != this.currentLine.error
            ? this.finishCurrentLine(e)
            : e()
        }
        _destroy(e, t) {
          ;(this.currentLine.parser?.destroy(), t(e))
        }
        getCurrentLineProgress() {
          return this.currentLine.progress
        }
        consumeBuffer(e, t, r) {
          let n = t,
            s = () => {
              for (; n < e.length;) {
                let t = e.indexOf(10, n)
                if (-1 === t) return void this.appendLineChunk(this.currentLine, e.subarray(n), r)
                let i = t + 1,
                  o = this.currentLine
                o.lineBytes += 1
                let a = !1,
                  l = !0
                if (
                  (this.appendLineChunk(o, e.subarray(n, t), () => {
                    this.finishCurrentLine(() => {
                      if (l) {
                        a = !0
                        return
                      }
                      ;((n = i), s())
                    })
                  }),
                  (l = !1),
                  !a)
                )
                  return
                n = i
              }
              r()
            }
          s()
        }
        createLine() {
          return {
            bufferedChunks: [],
            completedMessage: null,
            contentBytes: 0,
            error: null,
            finishCallback: null,
            finished: !1,
            hasChunkedArray: !1,
            hasNonWhitespace: !1,
            lineBytes: 0,
            parsedValueCount: 0,
            parser: null,
            progress: null,
            settled: !1,
          }
        }
        appendLineChunk(e, t, r) {
          if (
            ((e.contentBytes += t.length),
            (e.lineBytes += t.length),
            t.length > 0 &&
              (null == e.progress && (e.progress = { startedAtMs: Date.now(), bytesReceived: 0 }),
              (e.progress.bytesReceived = e.lineBytes)),
            this.trackNonWhitespace(e, t),
            null != e.error || 0 === t.length)
          )
            return void r()
          if (null != e.parser) return void this.writeParserChunks(e, [t], r)
          if ((e.bufferedChunks.push(t), e.contentBytes <= this.maxBufferedLineBytes)) return void r()
          let n = e.bufferedChunks
          e.bufferedChunks = []
          try {
            ;(this.createStreamingParser(e), this.writeParserChunks(e, n, r))
          } catch (t) {
            ;((e.error = h(t)), (e.completedMessage = null), r())
          }
        }
        createStreamingParser(e) {
          let t = r(31635),
            n = r(15294),
            s = t.asStream({ jsonStreaming: !0, packValues: !0, streamValues: !1, packStrings: !1, streamStrings: !0 })
          e.parser = s
          let o = new n({
              objectRules: [
                {
                  filter: () => !0,
                  create: () => ({}),
                  add: (e, t, r) => {
                    Object.defineProperty(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
                  },
                },
              ],
              arrayRules: [
                {
                  filter: () => !0,
                  create: () => new i.pG(this.options.arrayChunkBytes),
                  add: (e, t) => {
                    e.add(t)
                  },
                  finalize: (t) => {
                    let r = t.finish()
                    return ((0, i.aT)(r) && (e.hasChunkedArray = !0), r)
                  },
                },
              ],
            }),
            a = [],
            l = [],
            u = 0
          ;(s.on("data", (t) => {
            if ("startString" !== t.name) {
              if ("stringChunk" === t.name) {
                if ("string" != typeof t.value) throw Error("Invalid JSON string token")
                ;(a.push(t.value), (u += t.value.length) >= 65536 && (l.push(a.join("")), (a = []), (u = 0)))
                return
              }
              if (
                ("endString" === t.name
                  ? (a.length > 0 && l.push(a.join("")), o.stringValue(l.join("")), (a = []), (l = []), (u = 0))
                  : o.consume(t),
                o.done)
              ) {
                if (((e.parsedValueCount += 1), e.parsedValueCount > 1)) {
                  ;((e.error = Error("App-server stdout line contained multiple JSON values")),
                    (e.completedMessage = null))
                  return
                }
                this.setCompletedMessage(e, o.current)
              }
            }
          }),
            s.on("error", (t) => {
              ;((e.error = t), (e.completedMessage = null), e.finished && queueMicrotask(() => this.completeLine(e)))
            }))
        }
        writeParserChunks(e, t, r) {
          let n = e.parser
          if (null == n) return void r(Error("Streaming parser was not initialized"))
          let s = 0,
            i = !1,
            o = () => {
              i || ((i = !0), n.removeListener("drain", a), n.removeListener("error", o), r())
            },
            a = () => {
              for (n.removeListener("drain", a), n.removeListener("error", o); s < t.length && null == e.error;) {
                let r,
                  i = t[s]
                ;((t[s] = l), (s += 1))
                try {
                  r = n.write(i)
                } catch (t) {
                  ;((e.error = h(t)), (e.completedMessage = null), o())
                  return
                }
                if (null != e.error) return void o()
                if (!r) {
                  ;(n.once("drain", a), n.once("error", o))
                  return
                }
              }
              o()
            }
          a()
        }
        finishCurrentLine(e) {
          let t = this.currentLine
          if (
            ((t.finished = !0),
            (t.finishCallback = () => {
              ;((this.currentLine = this.createLine()), e())
            }),
            null != t.error)
          ) {
            ;(t.parser?.destroy(), this.completeLine(t))
            return
          }
          if (null == t.parser) {
            ;(this.parseBufferedLine(t), this.completeLine(t))
            return
          }
          try {
            t.parser.end(() => this.completeLine(t))
          } catch (e) {
            ;((t.error = h(e)), (t.completedMessage = null), this.completeLine(t))
          }
        }
        parseBufferedLine(e) {
          if (e.hasNonWhitespace)
            try {
              let t =
                1 === e.bufferedChunks.length ? e.bufferedChunks[0] : Buffer.concat(e.bufferedChunks, e.contentBytes)
              this.setCompletedMessage(e, JSON.parse(t.toString("utf8")))
            } catch (t) {
              ;((e.error = h(t)), (e.completedMessage = null))
            } finally {
              e.bufferedChunks = []
            }
        }
        setCompletedMessage(e, t) {
          if (null == t || "object" != typeof t || Array.isArray(t) || (0, i.aT)(t)) {
            ;((e.error = Error("App-server stdout line did not contain a JSON-RPC object")),
              (e.completedMessage = null))
            return
          }
          e.completedMessage = t
        }
        completeLine(e) {
          if (e.settled) return
          if (((e.settled = !0), null != e.error)) this.options.onError(e.error, e.lineBytes)
          else if (null != e.completedMessage) {
            ;((0, o.O)(e.completedMessage, e.lineBytes),
              "result" in e.completedMessage &&
                null != e.completedMessage.result &&
                "object" == typeof e.completedMessage.result &&
                (0, o.O)(e.completedMessage.result, e.lineBytes),
              "params" in e.completedMessage &&
                null != e.completedMessage.params &&
                "object" == typeof e.completedMessage.params &&
                (0, o.O)(e.completedMessage.params, e.lineBytes),
              e.hasChunkedArray && u.add(e.completedMessage))
            let t = Date.now()
            ;(null != e.progress && ((e.progress.bytesReceived = e.lineBytes), (e.progress.receivedAtMs = t)),
              this.options.onMessage(e.completedMessage, e.lineBytes, {
                receiveStartedAtMs: e.progress?.startedAtMs ?? t,
                receivedAtMs: t,
              }))
          } else
            e.hasNonWhitespace &&
              this.options.onError(Error("App-server stdout line did not contain a complete JSON value"), e.lineBytes)
          let t = e.finishCallback
          ;((e.finishCallback = null), t?.())
        }
        trackNonWhitespace(e, t) {
          if (!e.hasNonWhitespace) {
            for (let r of t)
              if (32 !== r && 9 !== r && 13 !== r) {
                e.hasNonWhitespace = !0
                return
              }
          }
        }
      }
      function d(e) {
        return u.has(e)
      }
      function h(e) {
        return e instanceof Error ? e : Error(String(e))
      }
      r.d(
        t,
        {},
        {
          P9: d,
          Zo: function (e) {
            return d(e) ? (0, i.nX)(e) : e
          },
          oP: c,
        },
      )
    },
    86847(e, t, r) {
      "use strict"
      var n = r(79395)
      r.d(
        t,
        {},
        {
          k: class {
            options
            parser
            source = null
            constructor(e) {
              ;((this.options = e),
                (this.parser = new n.oP(e)),
                this.parser.once("finish", e.onFinish),
                this.parser.once("error", e.onStreamError))
            }
            attach(e) {
              ;((this.source = e), null == e) ? this.parser.end() : e.pipe(this.parser)
            }
            getCurrentLineProgress() {
              return this.parser.getCurrentLineProgress()
            }
            dispose() {
              ;(this.source?.unpipe(this.parser),
                (this.source = null),
                this.parser.removeListener("finish", this.options.onFinish),
                this.parser.removeListener("error", this.options.onStreamError),
                this.parser.destroy())
            }
          },
        },
      )
    },
    57172(e, t, r) {
      "use strict"
      let n = (e, t) => fetch(e, t)
      r.d(
        t,
        {},
        {
          F: function (e, t) {
            return n(e, t)
          },
          h: function (e) {
            n = e
          },
        },
      )
    },
    37891(e, t, r) {
      "use strict"
      r.d(t, {
        $z: () => S.$z,
        UX: () => x,
        kK: () => v,
        Bw: () => h.Bw,
        getLogger: () => b.tZ,
        vB: () => b.vB,
        nQ: () => _.nQ,
        I4: () => _.I4,
        NU: () => E,
        oZ: () => k,
        Dn: () => y.D,
        MN: () => S.MN,
      })
      var n = r(85452),
        s = r(35553),
        i = r(95398),
        o = r(47981),
        a = r(99787),
        l = r(78335),
        u = r(32892),
        c = r(37418),
        d = r(58027),
        h = r(98197)
      let f = (0, c.promisify)(i.execFile)
      class p {
        distro
        marker = `codex-wsl-process-${(0, l.randomUUID)()}:`
        decoder = new u.StringDecoder("utf8")
        pendingStderr = ""
        processIdentity = null
        constructor(e) {
          this.distro = e
        }
        spawnArgs(e) {
          let t = e.at(-1)
          if (null == t) throw Error("Missing WSL app-server launch command")
          return [
            ...e.slice(0, -1),
            `set -m; /bin/bash -c ${(0, d.fj)([`read -r codex_process_stat < /proc/$$/stat; codex_process_stat=$\{codex_process_stat##*) }; set -- $codex_process_stat; printf '${this.marker}%s:%s\\n' "$$" "$\{20}" >&2; ${t}`])} <&0 & codex_process=$!; wait "$codex_process" 2>/dev/null`,
          ]
        }
        readStderr(e) {
          let t = this.decoder.write(e)
          if (null != this.processIdentity) return t
          this.pendingStderr += t
          let r = "",
            n = this.pendingStderr.indexOf("\n")
          for (; -1 !== n;) {
            let e = this.pendingStderr.slice(0, n)
            this.pendingStderr = this.pendingStderr.slice(n + 1)
            let t = e.startsWith(this.marker) ? /^(\d+):(\d+)$/u.exec(e.slice(this.marker.length)) : null
            ;(null != t
              ? (this.processIdentity = { pid: t[1], started: t[2] })
              : (r += `${e}
`),
              (n = this.pendingStderr.indexOf("\n")))
          }
          return (
            (null != this.processIdentity || this.pendingStderr.length > 4096) &&
              ((r += this.pendingStderr), (this.pendingStderr = "")),
            r
          )
        }
        async terminate(e) {
          if (null == this.processIdentity) throw Error("WSL app-server did not report its Linux process identity")
          let { pid: t, started: r } = this.processIdentity,
            n = o.K.resolve("wsl.exe", { env: e }) ?? "wsl.exe",
            s = (0, h.nS)({
              distro: this.distro,
              command: `read -r codex_process_stat < /proc/${t}/stat 2>/dev/null || exit 0; codex_process_stat=$\{codex_process_stat##*) }; set -- $codex_process_stat; [ "$\{20}" = '${r}' ] || exit 0; kill -KILL -- -${t} 2>/dev/null || ! kill -0 -- -${t} 2>/dev/null`,
            })
          try {
            await f(n, s, { env: e, timeout: 2e3, windowsHide: !0 })
          } catch {
            await f(n, s, { env: e, timeout: 2e3, windowsHide: !0 })
          }
        }
      }
      class m extends Error {
        reason
        constructor(e, t) {
          ;(super("Startup command failed", { cause: t }), (this.reason = e))
        }
      }
      var g = r(7103),
        y = r(34338),
        _ = r(92272),
        b = r(91747),
        S = r(33025)
      let w = s.object({
        data: s.object({
          reason: s.enum(["cloudRequirements", "cloudConfigBundle"]),
          errorCode: s.enum(["Timeout", "RequestFailed"]),
          statusCode: s.number().int().optional(),
        }),
      })
      class v extends Error {
        reason
        constructor(e, t) {
          ;(super("App server could not read application network requirements.", { cause: t }), (this.reason = e))
        }
        get retryable() {
          return "timeout" === this.reason || "transport" === this.reason
        }
      }
      class x extends v {
        configError
        constructor(e) {
          ;(super("config"), (this.configError = e))
        }
      }
      async function E(e, t) {
        let r = [
            "--print-startup-config",
            "--startup-client-info",
            JSON.stringify({ name: "codex_desktop", title: "Codex Desktop", version: t }),
          ],
          [n, s] = await Promise.all([
            (0, g.fo)({ ...e, startupCommand: { args: r } }),
            (0, g.fo)({ ...e, startupCommand: { args: [...r, "--startup-sign-out"] } }),
          ])
        if (null == n || null == s) throw new v("unavailable")
        return { transport: n, signOut: s }
      }
      async function k(e, t = {}) {
        let r,
          l = await (async function (e, t) {
            try {
              return await (async function (e, t) {
                let r,
                  n = e.spawnCommand ?? e.executablePath,
                  s = null == e.wslDistro ? null : new p(e.wslDistro),
                  l = e.spawnArgs ?? e.args,
                  u = (0, i.spawn)(o.K.resolve(n, { env: e.env }) ?? n, null == s ? l : s.spawnArgs(l), {
                    env: e.env,
                    cwd: e.cwd,
                    windowsHide: !0,
                    detached: "win32" !== process.platform,
                    stdio: ["ignore", "pipe", "pipe"],
                  }),
                  c = new Promise((e) => u.once("close", () => e())),
                  d = !1
                try {
                  let e = await new Promise((e, n) => {
                    let i = "",
                      o = ""
                    ;((r = setTimeout(() => n(new m("timeout")), t)),
                      u.once("error", (e) => n(new m("process", e))),
                      u.once("close", (t) => e({ stdout: i, stderr: o, code: t })),
                      u.stdout.setEncoding("utf8"),
                      u.stdout.on("data", (e) => {
                        i.length + e.length > 4194304 ? n(new m("protocol")) : (i += e)
                      }),
                      u.stderr.on("data", (e) => {
                        o = (o + (null == s ? e.toString("utf8") : s.readStderr(e))).slice(-65536)
                      }))
                  })
                  return ((d = !0), e)
                } finally {
                  if ((clearTimeout(r), !d && null != u.pid))
                    if (null != s)
                      try {
                        await s.terminate(e.env)
                      } finally {
                        await (0, a.g8)(u.pid, e.env)
                      }
                    else await (0, a.g8)(u.pid, e.env)
                  await c
                }
              })(e, t)
            } catch (e) {
              if (e instanceof m) {
                var r
                let t
                throw new v(
                  "process" === e.reason
                    ? ((r = e.cause),
                      (t = s.object({ code: s.string() }).safeParse(r)).success &&
                      ["EAGAIN", "ETXTBSY", "EPIPE", "ECONNRESET", "ETIMEDOUT"].includes(t.data.code)
                        ? "transport"
                        : "process")
                    : e.reason,
                  e.cause,
                )
              }
              throw new v("process", e)
            }
          })(t.signOut ? e.signOut : e.transport, t.timeoutMs ?? 3e4)
        try {
          r = JSON.parse(l.stdout)
        } catch (e) {
          throw new v("protocol", e)
        }
        let u = s
          .object({ error: s.object({ code: s.number(), message: s.string(), data: s.unknown().optional() }) })
          .safeParse(r)
        if (u.success) {
          let e = u.data.error
          if ((0, n.sQ3)(e)) throw new v("auth", e)
          let t = (0, n.TVZ)(e)
          if (null != t) throw new x(t)
          let r = w.safeParse(e)
          if (r.success && "Timeout" === r.data.data.errorCode) throw new v("timeout", e)
          if (r.success && [408, 429, 500, 502, 503, 504].includes(r.data.data.statusCode ?? 0))
            throw new v("transport", e)
          throw new v("rpc", e)
        }
        let c = s
          .object({ appServerVersion: s.string(), configRequirements: s.looseObject({ requirements: s.unknown() }) })
          .safeParse(r)
        if (0 !== l.code || !c.success || !("requirements" in c.data.configRequirements)) throw new v("protocol")
        return { appServerVersion: c.data.appServerVersion, response: c.data.configRequirements }
      }
    },
    47981(e, t, r) {
      "use strict"
      var n = r(89477),
        s = r(86697),
        i = r(59749),
        o = r.n(i),
        a = r(29009)
      let l = new (class {
        executables = new Map()
        resolve(e, t = {}) {
          if (e.includes("/") || ("win32" === process.platform && e.includes("\\"))) return e
          let r = t.cwd ?? process.cwd(),
            i = t.env ?? process.env,
            l = (0, a.A)(i),
            u = JSON.stringify([e, r, l, i.PATHEXT]),
            c = this.executables.get(u)
          if (null != c)
            try {
              return ((0, n.accessSync)(c, n.constants.X_OK), c)
            } catch {
              this.executables.delete(u)
            }
          let d = l
              ?.split(s.delimiter)
              .map((e) => (0, s.resolve)(r, e))
              .join(s.delimiter),
            h = o().sync(e, { nothrow: !0, path: d, pathExt: i.PATHEXT })
          return (null != h && this.executables.set(u, h), h)
        }
      })()
      r.d(t, {}, { K: l })
    },
    29805(e, t, r) {
      "use strict"
      r.d(t, {
        aG: () => I,
        nn: () => C,
        sl: () => O,
        gy: () => B,
        WD: () => P,
        l2: () => v,
        zZ: () => k,
        aE: () => E,
        _V: () => x,
        _4: () => b,
        BO: () => S,
        Ge: () => c,
        JK: () => w,
        OS: () => _,
      })
      var n = r(78335),
        s = r(89477),
        i = r(62228),
        o = r(86697),
        a = r(91747)
      let l = new Map(),
        u = null
      function c(e) {
        u = e
      }
      let d = "cua_node",
        h = ["codex-code-mode-host.exe", "codex-windows-sandbox-setup.exe", "codex-command-runner.exe"],
        f = new Map([
          ["codex.exe", "codex"],
          ["codex-code-mode-host.exe", "code-mode-host"],
          ["codex-windows-sandbox-setup.exe", "sandbox-setup"],
          ["codex-command-runner.exe", "command-runner"],
          ["rg.exe", "ripgrep"],
        ]),
        p = new Map(),
        m = new Map(),
        g = null,
        y = new Set()
      function _(e) {
        let t = []
        if (null != e)
          try {
            t = (0, s.readdirSync)((0, o.join)(e, "plugins"), { withFileTypes: !0 })
              .filter((e) => e.isDirectory())
              .map((e) => e.name.toLowerCase())
          } catch (e) {
            if (!(e instanceof Error && "code" in e && "ENOENT" === e.code)) throw e
          }
        ;((g = e), (y = new Set(t)), l.clear())
      }
      function b() {
        return g
      }
      function S(e) {
        return y.has(e.toLowerCase())
      }
      function w(e) {
        !(function ({ component: e, executablePath: t, source: r, consumer: n = "resolver" }, s, i) {
          if ("win32" !== process.platform) return
          let c = (e) => {
              let r = null == t ? ".." : (0, o.relative)(e, t)
              return ".." !== r && !r.startsWith(`..${o.sep}`) && !(0, o.isAbsolute)(r)
            },
            d = !1
          null != t && (d = (0, o.isAbsolute)(t) ? c(i) : null)
          let h = r ?? "bundled"
          null == t ? (h = "missing") : null == r && (null != s && c(s) ? (h = "app-package") : d && (h = "copied"))
          let f = `${n}:${e}`,
            p = `${null != s}:${h}:${t}:${d}:${u}`
          l.get(f) !== p &&
            (l.set(f, p),
            (0, a.tZ)()[null == t && null != s ? "warning" : "info"]("windows_core_runtime_component_resolved", {
              safe: {
                component: e,
                consumer: n,
                source: h,
                appPackageCoreActive: null != s,
                coreGateEnabledAtStartup: u,
                copiedRuntimeLocation: d,
                architecture: process.arch,
              },
              sensitive: { executablePath: t },
            }))
        })(e, g, U(["OpenAI", "Codex"]))
      }
      function v({
        resourcesPath: e,
        executableName: t,
        platform: r = process.platform,
        windowsDestinationPath: n,
        windowsSiblingExecutableNames: i = [],
      }) {
        let l = f.get(t)
        if ("win32" === r && null != l && null != g) {
          let e = (0, o.join)(g, t),
            r = z(e) ? e : null
          return (w({ component: l, executablePath: r }), r)
        }
        if (!e) return null
        let u = (0, o.join)(e, t)
        if ("win32" === r && F(u) && null != n)
          try {
            let e = (function ({
              executableName: e,
              sourcePath: t,
              stableDestinationPath: r,
              windowsSiblingExecutableNames: n,
            }) {
              let i = (0, o.dirname)(t),
                a = [e, ...n].map((e) => L({ destinationPath: r, executableName: e, sourcePath: (0, o.join)(i, e) })),
                l = M(a).slice(0, 16),
                u = (0, o.dirname)(r),
                c = (0, o.join)(u, l),
                d = (0, o.join)(c, e)
              if (N(c, a)) return ($({ currentHash: l, destinationRoot: u, executableName: e }), d)
              ;((0, s.existsSync)(c) &&
                W({ destinationPath: c, executableName: e, operation: "remove_destination", sourcePath: t }, () =>
                  (0, s.rmSync)(c, { force: !0, recursive: !0 }),
                ),
                W({ destinationPath: u, executableName: e, operation: "mkdir_destination", sourcePath: t }, () =>
                  (0, s.mkdirSync)(u, { recursive: !0 }),
                ))
              let h = W({ destinationPath: u, executableName: e, operation: "mkdir_staging", sourcePath: t }, () =>
                (0, s.mkdtempSync)((0, o.join)(u, `.staging-${l}-`)),
              )
              try {
                for (let e of a) {
                  let t = (0, o.join)(h, e.executableName)
                  W(
                    {
                      destinationPath: t,
                      executableName: e.executableName,
                      operation: "copy_file",
                      sourcePath: e.sourcePath,
                    },
                    () => T(e.sourcePath, t),
                  )
                }
                W({ destinationPath: c, executableName: e, operation: "rename_staging", sourcePath: h }, () =>
                  (0, s.renameSync)(h, c),
                )
              } catch (e) {
                try {
                  ;(0, s.rmSync)(h, { force: !0, recursive: !0 })
                } catch {}
                if (N(c, a)) return d
                throw e
              }
              return ($({ currentHash: l, destinationRoot: u, executableName: e }), d)
            })({ executableName: t, sourcePath: u, stableDestinationPath: n, windowsSiblingExecutableNames: i })
            return (null != l && w({ component: l, executablePath: e }), e)
          } catch (s) {
            let e = s instanceof V ? s : null
            return (
              (0, a.tZ)().warning("bundled_executable_relocation_failed", {
                safe: {
                  errorCode: e?.code ?? G(s),
                  executableName: t,
                  failedExecutableName: e?.executableName ?? null,
                  operation: e?.operation ?? "unknown",
                  platform: r,
                  sourceKind: "windowsapps",
                },
                sensitive: {
                  destinationPath: e?.destinationPath ?? n,
                  error: s,
                  originalError: e?.originalError ?? null,
                  sourcePath: e?.sourcePath ?? u,
                },
              }),
              null
            )
          }
        let c = z(u) ? u : null
        return (null != l && w({ component: l, executablePath: c }), c)
      }
      function x(e) {
        return v({
          resourcesPath: e,
          executableName: "win32" === process.platform ? "rg.exe" : "rg",
          windowsDestinationPath: "win32" === process.platform ? U(["OpenAI", "Codex", "bin", "rg.exe"]) : null,
        })
      }
      function E(e) {
        let t = A({ executableName: "win32" === process.platform ? "node_repl.exe" : "node_repl", resourcesPath: e })
        return (w({ component: "node-repl", executablePath: t }), t)
      }
      function k(e) {
        let t = A({ executableName: "win32" === process.platform ? "node.exe" : "node", resourcesPath: e })
        return (w({ component: "node", executablePath: t }), t)
      }
      function I(e) {
        let t = A({ executableName: "win32" === process.platform ? "node.exe" : "node", resourcesPath: e })
        if (null == t) return []
        let r = (0, o.dirname)((0, o.dirname)(t)),
          n = (0, o.join)(r, "win32" === process.platform ? "bin" : "lib", "node_modules")
        return H(n) ? [n] : []
      }
      function C(e, t = process.arch) {
        let r = R(e, ["bin", "windows", "arm64" === t ? "codex-computer-use-arm64.exe" : "codex-computer-use.exe"])
        return (w({ component: "cua-helper", executablePath: r }), r)
      }
      function B(e) {
        let t = R(e, [
          "bin",
          "windows",
          "swift",
          "arm64" === process.arch ? "arm64" : "x64",
          "codex-computer-use-swift.exe",
        ])
        return (w({ component: "cua-swift-helper", executablePath: t }), t)
      }
      function O(e) {
        return R(e, [
          "dist",
          "project",
          "cua",
          "sky_js",
          "src",
          "targets",
          "windows",
          "internal",
          "helper_transport.js",
        ])
      }
      function P(e) {
        if ("darwin" === process.platform) {
          if (null == e) return null
          let t = (0, o.join)(e, "codex-cli", "CodexCLI.app", "Contents", "MacOS", "codex")
          return z(t) ? t : null
        }
        let t = "win32" === process.platform ? "codex.exe" : "codex",
          r = "win32" === process.platform ? U(["OpenAI", "Codex", "bin", "codex.exe"]) : null,
          n = null == g && null != e && null != r && F((0, o.join)(e, t)) ? e : null
        if (null != n && null != r) {
          let e = p.get(n)
          if (null != e) {
            if (
              (0, o.dirname)((0, o.dirname)(e.executablePath)) === (0, o.dirname)(r) &&
              [t, ...h].every((t, r) => {
                let n = q((0, o.join)((0, o.dirname)(e.executablePath), t)),
                  s = e.executableStats[r]
                return (
                  null != s &&
                  n?.isFile() === !0 &&
                  n.size === s.size &&
                  n.mtimeMs === s.mtimeMs &&
                  n.ctimeMs === s.ctimeMs
                )
              })
            )
              return e.executablePath
            p.delete(n)
          }
        }
        let s = v({ resourcesPath: e, executableName: t, windowsSiblingExecutableNames: h, windowsDestinationPath: r })
        if (null != n && null != s) {
          let e = [t, ...h].map((e) => q((0, o.join)((0, o.dirname)(s), e)))
          e.every((e) => e?.isFile() === !0) && p.set(n, { executablePath: s, executableStats: e })
        }
        return s
      }
      function A({ executableName: e, resourcesPath: t }) {
        let r = (function (e) {
          let t = g ?? e
          if (!t) return null
          let r = (0, o.join)(t, d)
          if (!H(r)) return null
          if ("linux" === process.platform)
            try {
              return (0, s.realpathSync)(r)
            } catch {
              return null
            }
          return r
        })(t)
        if (null == r) return null
        let n = (0, o.join)(r, "bin", e)
        if (!z(n)) return null
        if ("win32" === process.platform && null != g) return n
        if ("win32" === process.platform && F(n))
          try {
            return (function ({ executableName: e, runtimeRoot: t }) {
              let r = U(["OpenAI", "Codex", "runtimes", d]),
                n = m.get(t)
              if (null != n) {
                let r = (0, o.join)(n, "bin", e)
                if (z(r) && H((0, o.join)(n, "bin", "node_modules"))) return r
                m.delete(t)
              }
              let i = ["manifest.json", "bin/node.exe", "bin/node_repl.exe"].map((e) =>
                  L({ destinationPath: r, executableName: e, sourcePath: (0, o.join)(t, e) }),
                ),
                a = M(i).slice(0, 16),
                l = (0, o.join)(r, a),
                u = (0, o.join)(l, "bin", e)
              if (N(l, i) && H((0, o.join)(l, "bin", "node_modules")))
                return (
                  $({ currentHash: a, destinationRoot: r, executableName: (0, o.join)("bin", e) }),
                  m.set(t, l),
                  u
                )
              ;((0, s.existsSync)(l) &&
                W({ destinationPath: l, executableName: e, operation: "remove_destination", sourcePath: t }, () =>
                  (0, s.rmSync)(l, { force: !0, recursive: !0 }),
                ),
                W({ destinationPath: r, executableName: e, operation: "mkdir_destination", sourcePath: t }, () =>
                  (0, s.mkdirSync)(r, { recursive: !0 }),
                ))
              let c = W({ destinationPath: r, executableName: e, operation: "mkdir_staging", sourcePath: t }, () =>
                (0, s.mkdtempSync)((0, o.join)(r, `.staging-${a}-`)),
              )
              try {
                ;(W({ destinationPath: c, executableName: e, operation: "copy_directory", sourcePath: t }, () =>
                  (function e(t, r) {
                    for (let n of ((0, s.mkdirSync)(r, { recursive: !0 }),
                    (0, s.readdirSync)(t, { withFileTypes: !0 }))) {
                      let s = (0, o.join)(t, n.name),
                        i = (0, o.join)(r, n.name)
                      if (n.isDirectory()) {
                        e(s, i)
                        continue
                      }
                      T(s, i)
                    }
                  })(t, c),
                ),
                  W({ destinationPath: l, executableName: e, operation: "rename_staging", sourcePath: c }, () =>
                    (0, s.renameSync)(c, l),
                  ))
              } catch (e) {
                try {
                  ;(0, s.rmSync)(c, { force: !0, recursive: !0 })
                } catch {}
                if (N(l, i) && H((0, o.join)(l, "bin", "node_modules"))) return (m.set(t, l), u)
                throw e
              }
              return ($({ currentHash: a, destinationRoot: r, executableName: (0, o.join)("bin", e) }), m.set(t, l), u)
            })({ executableName: e, runtimeRoot: r })
          } catch (r) {
            let t = r instanceof V ? r : null
            return (
              (0, a.tZ)().warning("bundled_executable_relocation_failed", {
                safe: {
                  errorCode: t?.code ?? G(r),
                  executableName: e,
                  failedExecutableName: t?.executableName ?? null,
                  operation: t?.operation ?? "unknown",
                  platform: process.platform,
                  sourceKind: "windowsapps",
                },
                sensitive: {
                  destinationPath: t?.destinationPath ?? null,
                  error: r,
                  originalError: t?.originalError ?? null,
                  sourcePath: t?.sourcePath ?? n,
                },
              }),
              null
            )
          }
        return n
      }
      function R(e, t) {
        let r = I(e)[0]
        if (null == r) return null
        let n = (0, o.join)(r, "@oai", "sky", ...t)
        return z(n) ? n : null
      }
      function T(e, t) {
        try {
          ;(0, s.copyFileSync)(e, t)
        } catch (n) {
          if (
            !(n instanceof Error) ||
            !("errno" in n) ||
            (6e3 !== n.errno && (-4094 !== n.errno || !("code" in n) || "UNKNOWN" !== n.code))
          )
            throw n
          let r = (0, s.openSync)(t, "w")
          try {
            j(e, (e) => (0, s.writeFileSync)(r, e))
          } finally {
            ;(0, s.closeSync)(r)
          }
        }
      }
      function L({ destinationPath: e, executableName: t, sourcePath: r }) {
        let n = W({ destinationPath: e, executableName: t, operation: "stat_source", sourcePath: r }, () =>
          (0, s.statSync)(r),
        )
        if (!n.isFile())
          throw new V({
            context: { destinationPath: e, executableName: t, operation: "stat_source", sourcePath: r },
            originalError: Error("Bundled executable source is not a file"),
          })
        return {
          digest: D({ destinationPath: e, executableName: t, filePath: r, operation: "hash_source", sourcePath: r }),
          executableName: t,
          size: n.size,
          sourcePath: r,
        }
      }
      function M(e) {
        let t = (0, n.createHash)("sha256")
        for (let r of e) (t.update(r.executableName), t.update("\0"), t.update(r.digest), t.update("\0"))
        return t.digest("hex")
      }
      function N(e, t) {
        return t.every((t) => {
          var r, n
          let i
          return (
            (r = (0, o.join)(e, t.executableName)),
            null !=
              (i = (function ({ destinationPath: e, executableName: t, operation: r, sourcePath: n, filePath: i }) {
                return (0, s.existsSync)(i)
                  ? W({ destinationPath: e, executableName: t, operation: r, sourcePath: n }, () => (0, s.statSync)(i))
                  : null
              })({
                destinationPath: r,
                executableName: (n = t).executableName,
                filePath: r,
                operation: "stat_destination",
                sourcePath: n.sourcePath,
              })) &&
              i.isFile() &&
              i.size === n.size &&
              D({
                destinationPath: r,
                executableName: n.executableName,
                filePath: r,
                operation: "hash_destination",
                sourcePath: n.sourcePath,
              }) === n.digest
          )
        })
      }
      function D({ destinationPath: e, executableName: t, operation: r, sourcePath: s, filePath: i }) {
        return W({ destinationPath: e, executableName: t, operation: r, sourcePath: s }, () => {
          let e = (0, n.createHash)("sha256")
          return (
            j(i, (t) => {
              e.update(t)
            }),
            e.digest("hex")
          )
        })
      }
      function j(e, t) {
        let r = (0, s.openSync)(e, "r")
        try {
          let e = (0, s.fstatSync)(r).size,
            n = Buffer.allocUnsafe(Math.min(Math.max(1, e), 262144))
          for (;;) {
            let e = (0, s.readSync)(r, n)
            if (0 === e) return
            t(n.subarray(0, e))
          }
        } finally {
          ;(0, s.closeSync)(r)
        }
      }
      function $({ currentHash: e, destinationRoot: t, executableName: r }) {
        try {
          for (let n of (0, s.readdirSync)(t, { withFileTypes: !0 }))
            n.isDirectory() &&
              (n.name.startsWith(`.staging-${e}-`) ||
                (n.name !== e && /^[0-9a-f]{16}$/.test(n.name) && (0, s.existsSync)((0, o.join)(t, n.name, r)))) &&
              (0, s.rmSync)((0, o.join)(t, n.name), { force: !0, recursive: !0 })
        } catch {}
      }
      function U(e) {
        let t = process.env.LOCALAPPDATA ?? (0, o.join)((0, i.homedir)(), "AppData", "Local")
        return (0, o.join)(t, ...e)
      }
      function F(e) {
        return e.replaceAll("/", "\\").toLowerCase().includes("\\program files\\windowsapps\\")
      }
      function H(e) {
        try {
          return (0, s.statSync)(e).isDirectory()
        } catch {
          return !1
        }
      }
      class V extends Error {
        code
        constructor({ context: e, originalError: t }) {
          ;(super(`Bundled executable relocation failed during ${e.operation}`),
            (this.name = "BundledExecutableRelocationError"),
            (this.destinationPath = e.destinationPath),
            (this.executableName = e.executableName),
            (this.operation = e.operation),
            (this.originalError = t),
            (this.sourcePath = e.sourcePath),
            (this.code = G(t)))
        }
        destinationPath
        executableName
        operation
        originalError
        sourcePath
      }
      function W(e, t) {
        try {
          return t()
        } catch (t) {
          throw new V({ context: e, originalError: t })
        }
      }
      function G(e) {
        return "object" == typeof e && null != e && "code" in e ? (e.code ?? null) : null
      }
      function q(e) {
        if (!(0, s.existsSync)(e)) return null
        try {
          return (0, s.statSync)(e)
        } catch {
          return null
        }
      }
      function z(e) {
        let t = q(e)
        return null != t && t.isFile()
      }
    },
    71605(e, t, r) {
      "use strict"
      class n {
        chunks
        length
        constructor(e, t) {
          ;((this.chunks = e), (this.length = t))
        }
      }
      function s(e) {
        return e instanceof n
      }
      function i(e, t, r) {
        let n = new WeakSet(),
          i = [{ type: "value", value: e }],
          a = 0
        for (; i.length > 0 && a <= t;) {
          let e = i.pop()
          if (null == e) break
          if ("values" === e.type) {
            let t = e.values.next()
            t.done || i.push(e, { type: "value", value: t.value })
            continue
          }
          if ("leave" === e.type) {
            n.delete(e.value)
            continue
          }
          if ("object" === e.type) {
            let t = e.entries[e.index]
            null != t && ((e.index += 1), (a += 2 * t[0].length + 16), i.push(e, { type: "value", value: t[1] }))
            continue
          }
          let t = e.value
          if ("string" == typeof t) {
            a += 2 * t.length + 16
            continue
          }
          if (null == t || "object" != typeof t) {
            a += 16
            continue
          }
          if (!n.has(t))
            if ((n.add(t), (a += 32), s(t))) {
              if (r) return 1 / 0
              i.push({ type: "leave", value: t }, { type: "values", values: o(t) })
            } else
              Array.isArray(t)
                ? i.push({ type: "leave", value: t }, { type: "values", values: t.values() })
                : i.push({ type: "leave", value: t }, { type: "object", entries: Object.entries(t), index: 0 })
        }
        return a
      }
      function* o(e) {
        for (let t of e.chunks) yield* t
      }
      r.d(
        t,
        {},
        {
          aT: s,
          nX: function e(t) {
            if (s(t)) {
              let r = []
              for (let n of t.chunks) for (let t of n) r.push(e(t))
              return r
            }
            if (Array.isArray(t)) return t.map(e)
            if (null == t || "object" != typeof t) return t
            let r = {}
            for (let [n, s] of Object.entries(t))
              Object.defineProperty(r, n, { configurable: !0, enumerable: !0, value: e(s), writable: !0 })
            return r
          },
          pG: class {
            chunkTargetBytes
            chunks = []
            currentChunk = []
            currentChunkBytes = 0
            length = 0
            constructor(e = 4194304) {
              this.chunkTargetBytes = e
            }
            add(e) {
              let t = (function (e, t = Number.MAX_SAFE_INTEGER) {
                return i(e, t, !1)
              })(e, this.chunkTargetBytes)
              ;(this.currentChunk.length > 0 &&
                this.currentChunkBytes + t > this.chunkTargetBytes &&
                (this.chunks.push(this.currentChunk), (this.currentChunk = []), (this.currentChunkBytes = 0)),
                this.currentChunk.push(e),
                (this.currentChunkBytes += t),
                (this.length += 1))
            }
            finish() {
              return (this.currentChunk.length > 0 && this.chunks.push(this.currentChunk), this.chunks.length <= 1)
                ? (this.chunks[0] ?? [])
                : new n(this.chunks, this.length)
            }
          },
          ul: function (e, t) {
            return i(e, t, !0) > t
          },
        },
      )
    },
    41082(e, t, r) {
      "use strict"
      let n = new WeakMap()
      r.d(
        t,
        {},
        {
          O: function (e, t) {
            n.set(e, t)
          },
          Q: function (e) {
            return n.get(e)
          },
        },
      )
    },
    34338(e, t, r) {
      "use strict"
      var n = r(62228),
        s = r(86697),
        i = r(91747),
        o = r(98197)
      r.d(
        t,
        {},
        {
          D: function ({ preferWsl: e = !1 } = {}) {
            let t = (0, i.tZ)()
            if (e && "win32" === process.platform) {
              let e = (0, o.Ll)()
              if (e) return e
              t.info(
                "[resolveCodexHome] Falling back to host home directory because WSL CODEX_HOME could not be resolved",
              )
            }
            return process.env.CODEX_HOME ?? s.join(n.homedir(), ".codex")
          },
          v: async function ({ preferWsl: e = !1 } = {}) {
            let t = (0, i.tZ)()
            if (e && "win32" === process.platform) {
              let e = await (0, o.R3)()
              if (e) return e
              t.info(
                "[resolveCodexHome] Falling back to host home directory because WSL CODEX_HOME could not be resolved",
              )
            }
            return process.env.CODEX_HOME ?? s.join(n.homedir(), ".codex")
          },
        },
      )
    },
    79626(e, t, r) {
      "use strict"
      let n = new Set([
        "BREAKPAD_DUMP_LOCATION",
        "CHROME_CRASHPAD_PIPE_NAME",
        "CRASHPAD_HANDLER_PID",
        "ELECTRON_CRASH_REPORTER_PROCESS_TYPE",
        "__CFBUNDLEIDENTIFIER",
      ])
      r.d(
        t,
        {},
        {
          I: function (e) {
            let t = { ...e }
            for (let e of Object.keys(t)) n.has(e.toUpperCase()) && delete t[e]
            return t
          },
        },
      )
    },
    16647(e, t, r) {
      "use strict"
      function n() {
        return ["cli"]
      }
      ;(r.d(t, { W: () => n }), new Set(Object.values(r(83418).N)))
    },
    54529(e, t, r) {
      "use strict"
      var n = r(77166)
      let s = ["client", "router"],
        i = [
          "snapshot",
          "patches",
          "follower_coordination",
          "other_request",
          "other_response",
          "other_broadcast",
          "unknown",
        ],
        o = new (class {
          now
          connections = new Map()
          totals = {}
          constructor(e = () => n.performance.now()) {
            for (let t of ((this.now = e), s)) {
              for (let e of [
                "rx_announced_frames_total",
                "rx_announced_bytes_total",
                "rx_frame_bytes_max",
                "rx_failures_total",
                "rx_abandoned_frames_total",
                "rx_decode_ms_total",
                "rx_decode_chunk_ms_max",
                "tx_frames_total",
                "tx_bytes_total",
                "tx_frame_bytes_max",
                "tx_backpressure_total",
                "tx_write_failures_total",
                "tx_abandoned_frames_total",
                "tx_abandoned_bytes_total",
                "tx_socket_pending_bytes_max",
                "tx_socket_writable_bytes_max",
              ])
                this.totals[`main_ipc_${t}_${e}`] = 0
              for (let e of i)
                for (let r of ["frames_total", "bytes_total", "bytes_max"])
                  this.totals[`main_ipc_${t}_rx_${e}_${r}`] = 0
            }
          }
          attach(e, t) {
            let r = {
              socket: e,
              role: t,
              active: !1,
              announcedBytes: 0,
              receivedBytes: 0,
              startedAtMs: 0,
              decoding: !1,
              decodeStartedAtMs: 0,
              pendingWrites: 0,
              pendingWriteBytes: 0,
              closed: !1,
            }
            this.connections.set(e, r)
            let n = `main_ipc_${t}_rx_`,
              s = () => {
                if (!r.decoding) return
                let e = Math.max(0, this.now() - r.decodeStartedAtMs)
                ;((this.totals[`${n}decode_ms_total`] += e),
                  (this.totals[`${n}decode_chunk_ms_max`] = Math.max(this.totals[`${n}decode_chunk_ms_max`], e)),
                  (r.decoding = !1))
              },
              i = () => {
                r.closed ||
                  (s(),
                  r.active && (this.totals[`${n}abandoned_frames_total`] += 1),
                  (this.totals[`main_ipc_${t}_tx_abandoned_frames_total`] += r.pendingWrites),
                  (this.totals[`main_ipc_${t}_tx_abandoned_bytes_total`] += r.pendingWriteBytes),
                  (r.closed = !0),
                  this.connections.delete(e),
                  e.off("close", i),
                  e.off("error", i))
              }
            return (
              e.on("close", i),
              e.on("error", i),
              {
                begin: (e) => {
                  r.closed ||
                    ((r.active = !0),
                    (r.announcedBytes = e),
                    (r.receivedBytes = 0),
                    (r.startedAtMs = this.now()),
                    (this.totals[`${n}announced_frames_total`] += 1),
                    (this.totals[`${n}announced_bytes_total`] += e),
                    (this.totals[`${n}frame_bytes_max`] = Math.max(this.totals[`${n}frame_bytes_max`], e)))
                },
                decode: (e) => {
                  r.closed || ((r.receivedBytes += e), (r.decoding = !0), (r.decodeStartedAtMs = this.now()))
                },
                endDecode: s,
                complete: (e) => {
                  if (r.closed) return
                  s()
                  let t = (function (e) {
                    if (e?.type === "request") return "other_request"
                    if (e?.type === "response") return "other_response"
                    if (e?.type !== "broadcast") return "unknown"
                    if ("thread-stream-state-changed" === e.method) {
                      let t = e.params?.change?.type
                      return "snapshot" === t || "patches" === t ? t : "unknown"
                    }
                    return "thread-stream-following-changed" === e.method ||
                      "thread-stream-following-status-requested" === e.method
                      ? "follower_coordination"
                      : "other_broadcast"
                  })(e)
                  ;((this.totals[`${n}${t}_frames_total`] += 1),
                    (this.totals[`${n}${t}_bytes_total`] += r.announcedBytes),
                    (this.totals[`${n}${t}_bytes_max`] = Math.max(this.totals[`${n}${t}_bytes_max`], r.announcedBytes)),
                    (r.active = !1))
                },
                fail: () => {
                  r.closed || ((this.totals[`${n}failures_total`] += 1), i())
                },
                close: i,
              }
            )
          }
          beginWrite(e, t) {
            let r = this.connections.get(e)
            if (!r) return
            let n = `main_ipc_${r.role}_tx_`
            ;((r.pendingWrites += 1),
              (r.pendingWriteBytes += t),
              (this.totals[`${n}frames_total`] += 1),
              (this.totals[`${n}bytes_total`] += t),
              (this.totals[`${n}frame_bytes_max`] = Math.max(this.totals[`${n}frame_bytes_max`], t)),
              (this.totals[`${n}socket_pending_bytes_max`] = Math.max(
                this.totals[`${n}socket_pending_bytes_max`],
                r.pendingWriteBytes,
              )))
            let s = !1
            return (e) => {
              s ||
                r.closed ||
                ((s = !0),
                (r.pendingWrites -= 1),
                (r.pendingWriteBytes -= t),
                null != e && (this.totals[`${n}write_failures_total`] += 1))
            }
          }
          wrote(e, t) {
            let r = this.connections.get(e)
            if (!r) return
            let n = `main_ipc_${r.role}_tx_`
            ;(t || (this.totals[`${n}backpressure_total`] += 1),
              (this.totals[`${n}socket_writable_bytes_max`] = Math.max(
                this.totals[`${n}socket_writable_bytes_max`],
                e.writableLength,
              )))
          }
          snapshot() {
            let e = { ...this.totals },
              t = this.now()
            for (let r of ((e.main_ipc_sample_monotonic_ms = t), s)) {
              let t = `main_ipc_${r}_`
              for (let r of [
                "connections",
                "rx_active_frames",
                "rx_active_announced_bytes",
                "rx_active_received_bytes",
                "rx_oldest_active_ms",
                "rx_decoding_frames",
                "tx_pending_frames",
                "tx_pending_bytes",
                "tx_writable_bytes",
              ])
                e[`${t}${r}`] = 0
            }
            for (let r of this.connections.values()) {
              let n = `main_ipc_${r.role}_`
              ;((e[`${n}connections`] += 1),
                r.active &&
                  ((e[`${n}rx_active_frames`] += 1),
                  (e[`${n}rx_active_announced_bytes`] += r.announcedBytes),
                  (e[`${n}rx_active_received_bytes`] += r.receivedBytes),
                  (e[`${n}rx_oldest_active_ms`] = Math.max(e[`${n}rx_oldest_active_ms`], t - r.startedAtMs))),
                r.decoding && (e[`${n}rx_decoding_frames`] += 1),
                (e[`${n}tx_pending_frames`] += r.pendingWrites),
                (e[`${n}tx_pending_bytes`] += r.pendingWriteBytes),
                (e[`${n}tx_writable_bytes`] += r.socket.writableLength))
            }
            return e
          }
        })()
      r.d(t, {}, { X: o })
    },
    92272(e, t, r) {
      "use strict"
      var n = r(78335),
        s = r(89477),
        i = r(62228),
        o = r(86697),
        a = r(32892),
        l = r(34338),
        u = r(91747),
        c = r(54529)
      let d = "linux" === process.platform ? 107 : 103,
        h = (0, u.vB)("ipc")
      function f(e) {
        s.mkdirSync(e, { mode: 448, recursive: !0 })
        let t = s.lstatSync(e),
          r = process.getuid?.()
        if (null == r || !t.isDirectory() || t.uid !== r)
          throw Error("Codex IPC directory is not owned by the current user")
        return (s.chmodSync(e, 448), r)
      }
      function p(e, t) {
        try {
          let r = s.lstatSync(e)
          return r.isSocket() && r.uid === t
        } catch {
          return !1
        }
      }
      function m(e) {
        let t = Buffer.byteLength(e, "utf8"),
          r = Buffer.alloc(4 + t)
        return (r.writeUInt32LE(t, 0), r.write(e, 4, "utf8"), r)
      }
      function g(e) {
        return m(JSON.stringify(e))
      }
      r.d(
        t,
        {},
        {
          I4: function () {
            let e = process.getuid?.()
            return o.join(i.tmpdir(), "codex-ipc", e ? `ipc-${e}.sock` : "ipc.sock")
          },
          MZ: m,
          PA: function (e) {
            if ("win32" === process.platform) return
            let t = process.getuid?.()
            if (null == t || !p(e, t)) throw Error("Codex IPC socket is not owned by the current user")
            s.chmodSync(e, 384)
          },
          VC: f,
          W2: function (e, t, r, n, s) {
            let i = null == s ? void 0 : c.X.attach(e, s),
              o = Buffer.allocUnsafe(4),
              l = new a.StringDecoder("utf8"),
              u = 0,
              d = 0,
              h = 0,
              f = "",
              p = "",
              m = 0,
              g = (t, s) => {
                i?.fail()
                let o = t instanceof Error ? t : Error(String(t))
                try {
                  ;(n.reportNonFatal(o, { kind: "ipc-attachMessageReader", extra: s }), r(o))
                } catch {
                } finally {
                  ;((f = ""), (p = ""), l.end(), e.off("data", y), e.destroy())
                }
              },
              y = (e) => {
                if (0 === e.length) return
                let r = 0
                for (; r < e.length;) {
                  let n
                  if (0 === d) {
                    let t = Math.min(o.length - u, e.length - r)
                    if ((e.copy(o, u, r, r + t), (u += t), (r += t), u < o.length)) return
                    if (((d = o.readUInt32LE(0)), (u = 0), 0 === d || d > 0x10000000))
                      return void g(Error(`[IPC] Invalid frame length (${d} bytes)`))
                    i?.begin(d)
                  }
                  let s = Math.min(d - h, e.length - r)
                  if (0 === s) return
                  let a = e.subarray(r, r + s)
                  ;((h += s), (r += s), i?.decode(s))
                  try {
                    if (h < d) {
                      ;((p += l.write(a)),
                        1024 === (m += 1) && ((f += Buffer.from(p, "utf8").toString("utf8")), (p = ""), (m = 0)),
                        i?.endDecode())
                      return
                    }
                    d = 0
                    let e = h === s ? a.toString("utf8") : f + p + l.end(a)
                    ;((h = 0), (f = ""), (p = ""), (m = 0), (n = JSON.parse(e)), i?.complete(n))
                  } catch (e) {
                    g(e)
                    return
                  }
                  try {
                    t(n)
                  } catch (e) {
                    g(e)
                    return
                  }
                }
              }
            return (
              e.on("data", y),
              () => {
                ;(i?.close(), (f = ""), (p = ""), l.end(), e.off("data", y))
              }
            )
          },
          Y0: function (e) {
            let t = process.getuid?.()
            if (null == t) return !1
            try {
              let r = s.lstatSync(o.dirname(e)),
                n = (18 & r.mode) != 0
              return p(e, t) && r.isDirectory() && r.uid === t && !n
            } catch {
              return !1
            }
          },
          ZT: function (e, t, r) {
            let n = r ?? g(t)
            h().trace("Write message", { safe: { frameBytes: n.length }, sensitive: {} })
            let s = c.X.beginWrite(e, n.length)
            try {
              let t = e.write(n, s)
              c.X.wrote(e, t)
            } catch (e) {
              throw (s?.(Error("IPC write failed")), e)
            }
          },
          b5: function (e) {
            let t = process.getuid?.()
            null != t && p(e, t) && s.unlinkSync(e)
          },
          mH: g,
          mz: 0x10000000,
          nQ: function () {
            if ("win32" === process.platform) return o.join("\\\\.\\pipe", "codex-ipc")
            let e = o.join((0, l.D)(), "ipc"),
              t = o.join(e, "ipc.sock"),
              r = f(e)
            if (Buffer.byteLength(t) <= d) return t
            let i = o.join("/tmp", `codex-ipc-${r}`)
            f(i)
            let a = s.realpathSync(e),
              u = o.join(i, (0, n.createHash)("sha256").update(a).digest("hex"))
            try {
              s.symlinkSync(a, u)
            } catch (e) {
              if (!(e instanceof Error && "code" in e && "EEXIST" === e.code) || s.readlinkSync(u) !== a) throw e
            }
            return o.join(u, "ipc.sock")
          },
        },
      )
    },
    91747(e, t, r) {
      "use strict"
      var n = r(74487)
      r.d(t, { $C: () => n.$C, tZ: () => n.tZ, vB: () => n.vB, w6: () => n.w6 })
    },
    54716(e, t, r) {
      "use strict"
      var n = r(3545),
        s = r(40824)
      let i = [100, 250, 500, 1e3, 2500, 5e3],
        o = [65536, 262144, 1048576]
      class a {
        message
        lineBytes
        timing
        constructor(e, t, r) {
          ;((this.message = e), (this.lineBytes = t), (this.timing = r))
        }
      }
      r.d(
        t,
        {},
        {
          J: a,
          d: class {
            lineQueue
            lineSizeTracker
            paused = !1
            lineDrainHandle = null
            options
            constructor(e) {
              ;((this.options = {
                ...e,
                queueDepthThresholds: e.queueDepthThresholds ?? Array.from(i),
                lineSizeThresholds: e.lineSizeThresholds ?? Array.from(o),
                queueCompactionMinConsumedLines: e.queueCompactionMinConsumedLines ?? 1024,
                queueOverflowDepth: e.queueOverflowDepth ?? 2e4,
                drainMaxLinesPerSlice: e.drainMaxLinesPerSlice ?? 200,
                drainMaxSliceMs: e.drainMaxSliceMs ?? 8,
                drainRemainingLogThreshold: e.drainRemainingLogThreshold ?? 200,
                slowDrainSliceMs: e.slowDrainSliceMs ?? 8,
                slowParseMs: e.slowParseMs ?? 8,
                slowDispatchMs: e.slowDispatchMs ?? 8,
                parseFailurePreviewMaxChars: e.parseFailurePreviewMaxChars ?? 160,
              }),
                (this.lineQueue = new n.u({
                  compactionMinConsumedItems: this.options.queueCompactionMinConsumedLines,
                  depthThresholds: this.options.queueDepthThresholds,
                })),
                (this.lineSizeTracker = new s.$(this.options.lineSizeThresholds)))
            }
            handleIncomingData(e, t) {
              if (e instanceof a) return void this.enqueueIncomingItems([e])
              let r = this.options.decodePayload(e)
              0 !== r.length && this.enqueueIncomingItems(null == t ? r : r.map((e) => ({ line: e, receivedAtMs: t })))
            }
            handleParsedMessage(e, t) {
              this.enqueueIncomingItems([{ message: e, lineBytes: t }])
            }
            enqueueIncomingItems(e) {
              for (let t of this.lineQueue.enqueueMany(e))
                this.options.logger.debug("incoming_line_queue_depth_threshold", {
                  safe: {
                    threshold: t.threshold,
                    queueDepth: t.queueDepth,
                    linesInBatch: e.length,
                    queueDepthHighWaterMark: t.queueDepthHighWaterMark,
                  },
                  sensitive: {},
                })
              let t = this.getQueueDepth()
              t >= this.options.queueOverflowDepth
                ? this.options.onQueueOverflow(t, this.options.queueOverflowDepth)
                : this.scheduleLineDrain()
            }
            dispatchParsedMessage(e, t, r, n) {
              let s = Date.now(),
                i = this.options.onMessage(e, t, n)
              this.maybeLogIncomingLineProcessing({
                routeKind: i.routeKind,
                method: i.method,
                lineBytes: t,
                parseDurationMs: r,
                dispatchDurationMs: Date.now() - s,
              })
            }
            setPaused(e) {
              ;((this.paused = e), !e && this.getQueueDepth() > 0 && this.scheduleLineDrain())
            }
            flush() {
              this.drainLineQueue(!0)
            }
            reset() {
              ;(this.lineDrainHandle && (clearImmediate(this.lineDrainHandle), (this.lineDrainHandle = null)),
                this.lineQueue.clear())
            }
            getQueueDepth() {
              return this.lineQueue.getDepth()
            }
            scheduleLineDrain() {
              this.lineDrainHandle ||
                this.paused ||
                (this.lineDrainHandle = setImmediate(() => {
                  ;((this.lineDrainHandle = null), this.drainLineQueue(!1))
                }))
            }
            drainLineQueue(e) {
              if (this.paused || 0 === this.lineQueue.getDepth()) return
              let t = this.lineQueue.drain({
                flushAll: e,
                maxItemsPerSlice: this.options.drainMaxLinesPerSlice,
                maxSliceMs: this.options.drainMaxSliceMs,
                onItem: (e) => {
                  "string" == typeof e
                    ? this.handleIncomingLine(e)
                    : "line" in e
                      ? this.handleIncomingLine(e.line, e.receivedAtMs)
                      : (this.trackIncomingLineBytes(e.lineBytes),
                        this.dispatchParsedMessage(e.message, e.lineBytes, void 0, e.timing))
                },
              })
              if (
                ((t.durationMs >= this.options.slowDrainSliceMs ||
                  t.remainingCount >= this.options.drainRemainingLogThreshold) &&
                  this.options.logger.debug("incoming_line_queue_drain_slice", {
                    safe: {
                      flushAll: e,
                      drainedCount: t.drainedCount,
                      queueRemaining: t.remainingCount,
                      drainDurationMs: t.durationMs,
                      queueDepthHighWaterMark: t.queueDepthHighWaterMark,
                    },
                    sensitive: {},
                  }),
                t.drainedAll)
              ) {
                this.options.queueDepthThresholds.length > 0 &&
                  t.queueDepthHighWaterMark >= this.options.queueDepthThresholds[0] &&
                  this.options.logger.debug("incoming_line_queue_drained", {
                    safe: { queueDepthHighWaterMark: t.queueDepthHighWaterMark },
                    sensitive: {},
                  })
                return
              }
              e || this.scheduleLineDrain()
            }
            handleIncomingLine(e, t) {
              let r,
                n = e.trim()
              if (!n) return
              let s = Buffer.byteLength(n, "utf8")
              this.trackIncomingLineBytes(s)
              let i = Date.now()
              try {
                r = JSON.parse(n)
              } catch (t) {
                let e = n
                  .slice(0, this.options.parseFailurePreviewMaxChars)
                  .replaceAll("\r", "\\r")
                  .replaceAll("\n", "\\n")
                ;(this.options.logger.error("Failed to parse MCP message", {
                  safe: {
                    lineBytes: s,
                    linePreview: e,
                    linePreviewTruncated: n.length > this.options.parseFailurePreviewMaxChars,
                  },
                  sensitive: { error: t },
                }),
                  this.options.logger.debug("incoming_line_parse_failed", {
                    safe: { lineBytes: s, parseDurationMs: Date.now() - i, queueDepth: this.lineQueue.getDepth() },
                    sensitive: {},
                  }))
                return
              }
              this.dispatchParsedMessage(r, s, Date.now() - i, null == t ? void 0 : { receivedAtMs: t })
            }
            trackIncomingLineBytes(e) {
              for (let t of this.lineSizeTracker.track(e))
                this.options.logger.debug("incoming_line_size_threshold", {
                  safe: {
                    threshold: t.threshold,
                    lineBytes: t.sizeBytes,
                    lineBytesHighWaterMark: t.sizeBytesHighWaterMark,
                  },
                  sensitive: {},
                })
            }
            maybeLogIncomingLineProcessing(e) {
              let t = this.options.lineSizeThresholds[0] ?? 1 / 0
              ;((e.parseDurationMs ?? 0) < this.options.slowParseMs &&
                e.dispatchDurationMs < this.options.slowDispatchMs &&
                e.lineBytes < t) ||
                this.options.logger.debug("incoming_line_processed", {
                  safe: {
                    routeKind: e.routeKind,
                    method: e.method,
                    lineBytes: e.lineBytes,
                    ...(void 0 !== e.parseDurationMs && { parseDurationMs: e.parseDurationMs }),
                    dispatchDurationMs: e.dispatchDurationMs,
                    queueDepth: this.lineQueue.getDepth(),
                  },
                  sensitive: {},
                })
            }
          },
        },
      )
    },
    3545(e, t, r) {
      "use strict"
      r.d(
        t,
        {},
        {
          u: class {
            options
            items = []
            readIndex = 0
            queueDepthHighWaterMark = 0
            nextDepthThresholdIndex = 0
            constructor(e) {
              this.options = e
            }
            enqueue(e) {
              return this.enqueueMany([e])
            }
            enqueueMany(e) {
              if (0 === e.length) return []
              ;(this.maybeCompact(!1), this.items.push(...e))
              let t = this.getDepth()
              t > this.queueDepthHighWaterMark && (this.queueDepthHighWaterMark = t)
              let r = []
              for (
                ;
                this.nextDepthThresholdIndex < this.options.depthThresholds.length &&
                t >= this.options.depthThresholds[this.nextDepthThresholdIndex];
              ) {
                let e = this.options.depthThresholds[this.nextDepthThresholdIndex]
                ;((this.nextDepthThresholdIndex += 1),
                  r.push({ threshold: e, queueDepth: t, queueDepthHighWaterMark: this.queueDepthHighWaterMark }))
              }
              return r
            }
            drain(e) {
              if (0 === this.getDepth())
                return {
                  drainedCount: 0,
                  remainingCount: 0,
                  durationMs: 0,
                  queueDepthHighWaterMark: this.queueDepthHighWaterMark,
                  drainedAll: !0,
                }
              let t = Date.now(),
                r = 0
              for (; this.readIndex < this.items.length;) {
                let n = this.items[this.readIndex]
                if (
                  (delete this.items[this.readIndex],
                  (this.readIndex += 1),
                  e.onItem(n),
                  (r += 1),
                  !e.flushAll && (r >= e.maxItemsPerSlice || Date.now() - t >= e.maxSliceMs))
                )
                  break
              }
              let n = this.getDepth(),
                s = Date.now() - t,
                i = this.queueDepthHighWaterMark
              return 0 === n
                ? ((this.items.length = 0),
                  (this.readIndex = 0),
                  this.resetDepthTracking(),
                  { drainedCount: r, remainingCount: 0, durationMs: s, queueDepthHighWaterMark: i, drainedAll: !0 })
                : (this.maybeCompact(!1),
                  {
                    drainedCount: r,
                    remainingCount: this.getDepth(),
                    durationMs: s,
                    queueDepthHighWaterMark: i,
                    drainedAll: !1,
                  })
            }
            clear() {
              ;((this.items.length = 0), (this.readIndex = 0), this.resetDepthTracking())
            }
            getDepth() {
              return this.items.length - this.readIndex
            }
            maybeCompact(e) {
              let t = this.readIndex
              if (0 === t) return
              let r = this.getDepth()
              ;(e || (t >= this.options.compactionMinConsumedItems && t >= r)) &&
                (r > 0 && this.items.copyWithin(0, t), (this.items.length = r), (this.readIndex = 0))
            }
            resetDepthTracking() {
              ;((this.queueDepthHighWaterMark = 0), (this.nextDepthThresholdIndex = 0))
            }
          },
        },
      )
    },
    40824(e, t, r) {
      "use strict"
      r.d(
        t,
        {},
        {
          $: class {
            thresholds
            sizeBytesHighWaterMark = 0
            nextThresholdIndex = 0
            constructor(e) {
              this.thresholds = e
            }
            track(e) {
              e > this.sizeBytesHighWaterMark && (this.sizeBytesHighWaterMark = e)
              let t = []
              for (
                ;
                this.nextThresholdIndex < this.thresholds.length && e >= this.thresholds[this.nextThresholdIndex];
              ) {
                let r = this.thresholds[this.nextThresholdIndex]
                ;((this.nextThresholdIndex += 1),
                  t.push({ threshold: r, sizeBytes: e, sizeBytesHighWaterMark: this.sizeBytesHighWaterMark }))
              }
              return t
            }
          },
        },
      )
    },
    99787(e, t, r) {
      "use strict"
      let n
      var s = r(95398),
        i = r(86697),
        o = r.n(i),
        a = r(37418),
        l = r(79626),
        u = r(30476)
      let c = (0, a.promisify)(s.execFile)
      async function d(e, t) {
        if ("win32" !== process.platform) {
          try {
            process.kill(-e, "SIGKILL")
          } catch (e) {
            if (!(e instanceof Error && "code" in e && "ESRCH" === e.code)) throw e
          }
          return
        }
        let r = t.SystemRoot ?? t.windir ?? "C:\\Windows"
        await c(o().win32.join(r, "System32", "taskkill.exe"), ["/pid", `${e}`, "/t", "/f"], {
          env: (0, l.I)(t),
          windowsHide: !0,
          timeout: 2e3,
        })
      }
      function h(e, t) {
        var r
        let n,
          i = (0, s.spawnSync)(
            ((n = f((r = t), "SystemRoot") ?? f(r, "windir") ?? "C:\\Windows"),
            o().win32.join(n, "System32", "where.exe")),
            [`$PATH:${e}`],
            { env: t, windowsHide: !0, encoding: "utf8" },
          )
        return 0 !== i.status || "string" != typeof i.stdout
          ? null
          : (i.stdout
              .split(/\r?\n/)
              .map((e) => e.trim())
              .find((e) => e.length > 0) ?? null)
      }
      function f(e, t) {
        let r = Object.keys(e)
          .reverse()
          .find((e) => e.toLowerCase() === t.toLowerCase())
        return e[r ?? ""]?.trim() || void 0
      }
      r.d(
        t,
        {},
        {
          CH: async function (e) {
            let t = e.getPid()
            null == t ? e.kill("SIGKILL") : await d(t, process.env)
          },
          g8: d,
          hi: function (e) {
            let t = e[Symbol.asyncIterator](),
              r = !1
            return new ReadableStream({
              async pull(e) {
                try {
                  let { done: n, value: s } = await t.next()
                  if (r) return
                  if (n) return void e.close()
                  e.enqueue(s)
                } catch (t) {
                  r || e.error(t)
                }
              },
              cancel() {
                ;((r = !0), e.destroy())
              },
            })
          },
          q2: function (e, t, r, n = null, s = async () => e.kill()) {
            let i = null,
              o = () => {
                e.isDone() ||
                  (null != n && clearTimeout(n),
                  (i =
                    i ??
                    s().catch((t) => {
                      try {
                        e.kill("SIGKILL")
                      } catch {}
                      throw t
                    })).catch(() => {}))
              },
              a = e.wait().then(
                async ({ code: e, gitErrorKind: n, signal: s, stdout: o, stderr: a }) => (
                  await i,
                  o && t.enqueue(Buffer.from(o)),
                  a && r.enqueue(Buffer.from(a)),
                  t.close(),
                  r.close(),
                  { code: e, gitErrorKind: n, signal: s }
                ),
                (e) => {
                  throw (t.error(e), r.error(e), e)
                },
              )
            return (
              a.catch(() => {}),
              {
                stdin: new WritableStream({
                  write: (t) => e.writeStdin(Buffer.from(t)),
                  close: () => e.writeStdin(Buffer.alloc(0), { closeStdin: !0 }),
                  abort: o,
                }),
                stdout: t.stream,
                stderr: r.stream,
                kill: o,
                resize: async () => {
                  throw Error("Local execution host processes do not support resizing")
                },
                wait: async () => {
                  try {
                    return await a
                  } finally {
                    null != n && clearTimeout(n)
                  }
                },
              }
            )
          },
          yE: function (e, t, r) {
            if (r || "win32" !== process.platform) return { args: e, env: t }
            let s = null != t && Object.keys(t).some((e) => "path" === e.toLowerCase()),
              i = { ...process.env }
            if (s) for (let e of Object.keys(i)) "path" === e.toLowerCase() && delete i[e]
            let o = { ...i, ...t }
            if (((0, u.s3)(o), "git" !== e[0])) return { args: e, env: o }
            let a = (function (e, t) {
              if (!t && null != n) return n
              let r = h("git.exe", e) ?? h("git", e)
              if (null == r) throw Error("Failed to locate git executable in PATH")
              return (t || (n = r), r)
            })(o, s)
            return {
              args: /\.(cmd|bat)$/i.test(a)
                ? [f(o, "ComSpec") ?? "cmd.exe", "/d", "/s", "/c", a, ...e.slice(1)]
                : [a, ...e.slice(1)],
              env: o,
            }
          },
        },
      )
    },
    30476(e, t, r) {
      "use strict"
      r.d(t, {
        cr: () => p.crV,
        C2: () => k,
        Qu: () => E,
        Tn: () => A,
        s3: () => G,
        TW: () => j,
        RT: () => z,
        vI: () => K,
        N$: () => Y,
        _e: () => X,
        g7: () => J,
        oM: () => Q,
        Vp: () => V,
        sl: () => T,
        G_: () => U,
        HZ: () => H,
        tG: () => Z,
        GB: () => ee,
        XC: () => W,
        Ec: () => F,
      })
      var n = r(78335),
        s = r.n(n),
        i = r(89477),
        o = r(42524),
        a = r.n(o),
        l = r(62228),
        u = r.n(l),
        c = r(86697),
        d = r.n(c),
        h = r(26238),
        f = r(22949),
        p = r(85452),
        m = r(35553),
        g = r(13082),
        y = r(57172),
        _ = r(91747),
        b = r(41680)
      let S = (0, _.vB)("primary-runtime-installer"),
        w = new Set([
          "EACCES",
          "ECONNABORTED",
          "ECONNREFUSED",
          "ECONNRESET",
          "EHOSTUNREACH",
          "ENETUNREACH",
          "ENOSPC",
          "EPERM",
          "ETIMEDOUT",
        ])
      function v(e) {
        return "object" == typeof e && null != e && "code" in e && "string" == typeof e.code && w.has(e.code)
          ? e.code
          : null
      }
      var x = r(33025)
      let E = p.BAs,
        k = "Codex Workspace dependencies are not supported on Windows 10.",
        I = (0, _.vB)("primary-runtime-installer"),
        C = null,
        B = null,
        O = m.object({
          artifactToolVersion: m.string().min(1).nullable().optional(),
          bundleFormatVersion: m.number().int().positive().optional(),
          bundleVersion: m.string().optional(),
          bundledPlugins: m.array(m.string().min(1)).optional(),
          bundledSkills: m.array(m.string().min(1)).optional(),
          nativeDependencies: m.array(m.string().min(1)).optional(),
          libreOfficeVersion: m.string().min(1).nullable().optional(),
          pnpmVersion: m.string().min(1).optional(),
          skillsToRemove: m.array(m.string().min(1)).optional(),
        }),
        P = m.record(m.string(), m.string())
      class A extends Error {
        constructor() {
          super("Windows primary runtime framework requires a configured MSIX release with a bundle version.")
        }
      }
      let R = new WeakMap()
      function T(e, t = {}) {
        if ("object" == typeof e && null != e) {
          let t = R.get(e)
          if (null != t) return t
        }
        let r = t.failureStage ?? "unknown"
        return {
          bundleOperationId: t.bundleOperationId ?? null,
          bundleVersion: t.bundleVersion ?? null,
          errorCategory: M(e, r),
          errorCode: v(e),
          failureStage: r,
          retryable: D(e),
        }
      }
      function L(e, t) {
        "object" == typeof e && null != e && R.set(e, t)
      }
      function M(e, t) {
        var r
        if (
          ((r = e) instanceof Error || r instanceof DOMException) &&
          ("AbortError" === r.name || r.message.toLowerCase().includes("aborted"))
        )
          return "aborted"
        if (e instanceof Error && e.message === k) return "unsupported_host"
        if (e instanceof TypeError && "fetch failed" === e.message) return "network_fetch_failed"
        if (e instanceof g.G || ("resolve_manifest" === t && e instanceof SyntaxError)) return "invalid_manifest"
        let n = v(e)
        if ("ENOSPC" === n) return "disk_full"
        if ("EACCES" === n || "EPERM" === n) return "permission_denied"
        if (
          "ECONNABORTED" === n ||
          "ECONNREFUSED" === n ||
          "ECONNRESET" === n ||
          "EHOSTUNREACH" === n ||
          "ENETUNREACH" === n
        )
          return "network_fetch_failed"
        if ("ETIMEDOUT" === n || (e instanceof Error && "TimeoutError" === e.name)) return "timeout"
        if (e instanceof Error) {
          if (e.message.startsWith("Checksum mismatch")) return "checksum_mismatch"
          let t = N(e.message)
          if (null != t) return t >= 500 ? "http_server_error" : "http_client_error"
        }
        return "prepare_archive" === t || "list_archive" === t || "extract_archive" === t
          ? "archive_processing_failed"
          : "validate_cached_runtime" === t || "validate_payload" === t
            ? "validation_failed"
            : "sync_plugins" === t || "sync_skills" === t
              ? "post_install_failed"
              : "create_staging_directory" === t || "activate_runtime" === t || "cleanup" === t
                ? "filesystem_error"
                : "unknown"
      }
      function N(e) {
        let t = e.match(/\((\d{3}) [^)]+\)/)
        if (null == t) return null
        let r = Number(t[1])
        return r >= 400 && r <= 599 ? r : null
      }
      function D(e) {
        let t = M(e, "unknown"),
          r = e instanceof Error ? N(e.message) : null
        return "http_server_error" === t || "network_fetch_failed" === t || "timeout" === t || 408 === r || 429 === r
      }
      function j() {
        return { arch: u().arch(), platform: process.platform }
      }
      function $({ arch: e, platform: t }) {
        return `${es(t)}-${(function (e) {
          let t = e.toLowerCase()
          if ("x64" === t || "x86_64" === t) return "x64"
          if ("arm64" === t || "aarch64" === t) return "arm64"
          throw Error(`Unsupported architecture: ${e}`)
        })(e)}`
      }
      function U(e = {}) {
        return ey(eg(e.installRoot))
      }
      function F(e) {
        C = e
      }
      function H(e = {}) {
        return e_(eg(e.installRoot))
      }
      function V(e = {}) {
        return eb(eg(e.installRoot))
      }
      function W(e, t) {
        let r = e_(t)
        try {
          let n = P.safeParse(JSON.parse((0, i.readFileSync)(d().join(r, "native-executables.json"), "utf8")))
          if (n.success) {
            let s = eE({
                label: "Native executable directory",
                pathParts: [(0, i.realpathSync)(d().join(t, "dependencies", "native"))],
                runtimeRoot: (0, i.realpathSync)(t),
              }),
              o = []
            for (let e of Object.values(n.data)) {
              let t
              if (d().isAbsolute(e)) continue
              try {
                t = (0, i.realpathSync)(d().resolve(r, e))
              } catch {
                continue
              }
              let n = d().relative(s, t)
              if (
                ".exe" !== d().extname(t).toLowerCase() ||
                ".." === n ||
                n.startsWith(".." + d().sep) ||
                d().isAbsolute(n) ||
                !(0, i.statSync)(t).isFile()
              )
                continue
              let a = d().dirname(t)
              a.includes(";") || o.some((e) => eP(e, a)) || o.push(a)
            }
            if (o.length > 0) {
              let t = (0, x.AC)(e),
                r = null == t ? [] : t.split(";")
              ;(0, x.Dt)(e, [...o, ...r.filter((e) => !o.some((t) => eP(t, e)))].join(";"))
            }
          }
        } catch {}
      }
      function G(e, t = {}) {
        if ("win32" !== (t.target ?? j()).platform) return
        let r = eg(t.installRoot)
        W(e, r)
        let n = d().join(r, "dependencies", "node", "bin")
        eC(n) && (0, x.Dt)(e, eO((0, x.AC)(e), n))
        let s = (function (e = {}) {
          if ("win32" !== (e.target ?? j()).platform) return null
          let t = d().join(eg(e.installRoot), "dependencies", "native", "git", "cmd")
          return eC(t) ? t : null
        })(t)
        null != s && (0, x.Dt)(e, eO((0, x.AC)(e), s))
        let i = d().join(r, "dependencies", "native", "powershell")
        ;(0, x.Dt)(e, eO((0, x.AC)(e), i, !0))
      }
      function q(e, t, r) {
        return [
          (t.baseUrl ?? ("latest" === r ? "https://persistent.oaistatic.com" : p.esV)).replace(/\/+$/, ""),
          E,
          ...("latest-alpha" === r ? ["alpha"] : []),
          "latest",
          $(e),
          "LATEST.json",
        ].join("/")
      }
      async function z({ installRoot: e } = {}) {
        return (await em(eg(e)))?.bundleVersion ?? null
      }
      async function K({ installRoot: e, target: t = j() } = {}) {
        let r = eg(e),
          n = await em(r)
        if (null == n) return null
        try {
          let e = await ew({
              bundleFormatVersion: n.bundleFormatVersion ?? 1,
              runtimeRoot: r,
              targetPlatform: es(t.platform),
            }),
            [s, i] = await Promise.all([
              a()
                .stat(e.nodePath)
                .catch(() => null),
              a()
                .stat(e.nodeModulesPath)
                .catch(() => null),
            ])
          if (s?.isFile() !== !0 || i?.isDirectory() !== !0) return null
          return e
        } catch {
          return null
        }
      }
      async function X(e = {}) {
        var t
        let r,
          n,
          s = e.target ?? j(),
          i = e.runtimeRoot ?? eg(e.installRoot),
          o = i === C ? "framework" : "archive",
          l = await em(i),
          u = {
            artifactToolVersion: l?.artifactToolVersion ?? null,
            bundleVersion: l?.bundleVersion ?? null,
            installed: !1,
            instructions: null,
            libreOfficeVersion: l?.libreOfficeVersion ?? null,
            problems: [],
          }
        if (null == l) {
          let e = await eI(i)
          return (
            u.problems.push(e ? "Codex dependency bundle metadata is missing" : "Codex dependencies are not installed"),
            m(u)
          )
        }
        try {
          n = await ew({
            bundleFormatVersion: l.bundleFormatVersion ?? 1,
            runtimeRoot: i,
            targetPlatform: es(s.platform),
          })
        } catch (e) {
          return (
            u.problems.push(e instanceof Error ? e.message : `Failed to validate Codex dependencies: ${String(e)}`),
            m(u)
          )
        }
        let c = await (async function (e, t, r, n) {
          let s = (
            await Promise.all(
              [
                ["python", e.pythonPath],
                ["node", e.nodePath],
              ].map(async ([e, s]) => {
                if (
                  null == s ||
                  !(
                    await a()
                      .stat(s)
                      .catch(() => null)
                  )?.isFile()
                )
                  return `Missing ${e} executable: ${s}`
                if (!n.probeExecutables) return null
                let i = Date.now(),
                  o = AbortSignal.timeout(1e4),
                  l = null == n.signal ? o : AbortSignal.any([n.signal, o])
                try {
                  let o = await (0, b.s)({
                    args:
                      "python" === e
                        ? [
                            s,
                            "-I",
                            "-B",
                            "-c",
                            "import sys, ssl, sqlite3, openpyxl; print(sys.executable); print(sys.version)",
                          ]
                        : [
                            s,
                            "--input-type=commonjs",
                            "-e",
                            "require('node:crypto').createHash('sha256').update('codex').digest('hex'); console.log(process.execPath); console.log(process.version)",
                          ],
                    cwd: t,
                    env: { ELECTRON_RUN_AS_NODE: "1", NODE_OPTIONS: "", NODE_PATH: "" },
                    signal: l,
                    spawnInsideWsl: !1,
                  }).wait()
                  return (
                    n.signal?.throwIfAborted(),
                    l.throwIfAborted(),
                    S().info("primary_runtime_executable_probe", {
                      safe: {
                        executable: e,
                        outcome: 0 === o.code ? "passed" : "failed",
                        exitCode: o.code,
                        durationMs: Date.now() - i,
                        bundleVersion: r,
                      },
                      sensitive: {
                        executablePath: s,
                        stdout: o.stdout.slice(0, 2048),
                        stderr: o.stderr.slice(0, 2048),
                      },
                    }),
                    0 === o.code ? null : `Bundled ${e} failed its execution check (exit ${o.code})`
                  )
                } catch (t) {
                  return (
                    n.signal?.throwIfAborted(),
                    S().warning("primary_runtime_executable_probe", {
                      safe: {
                        executable: e,
                        outcome: l.aborted ? "timeout" : "failed",
                        durationMs: Date.now() - i,
                        bundleVersion: r,
                        errorCode: v(t),
                      },
                      sensitive: { executablePath: s, error: t },
                    }),
                    `Bundled ${e} ${l.aborted ? "timed out" : "could not execute"}`
                  )
                }
              }),
            )
          ).filter((e) => null != e)
          return (
            (
              await a()
                .stat(e.nodeModulesPath)
                .catch(() => null)
            )?.isDirectory() || s.push("Missing bundled node packages directory: " + e.nodeModulesPath),
            s
          )
        })(n, i, l.bundleVersion ?? null, e)
        if (((u.problems = c), c.length > 0)) return m(u)
        let h = es(s.platform),
          f =
            l.nativeDependencies?.includes("git") === !0
              ? "win32" === h
                ? d().join(i, "dependencies", "native", "git", "cmd", "git.exe")
                : await ev([d().join(n.fallbackBinPath, "git"), d().join(n.binPath, "git")])
              : void 0,
          p = {
            fallbackBinPath: n.fallbackBinPath,
            gitPath: f,
            nodeModulesPath: n.nodeModulesPath,
            nodePath: n.nodePath,
            overrideBinPath: n.overrideBinPath,
            pnpmPath: n.pnpmPath,
            pythonLibrariesPath:
              ((t = n.pythonPath), (r = d().dirname(t)), "bin" === d().basename(r) ? d().dirname(r) : r),
            pythonPath: n.pythonPath,
          }
        return m({
          ...u,
          installed: !0,
          instructions: (function (e, { bundleVersion: t } = {}) {
            let r =
                null == t
                  ? ""
                  : `- Bundle version: ${eS(t)}
`,
              n =
                null == e.gitPath
                  ? ""
                  : `- Git executable: ${eS(e.gitPath)}
`
            return `### Workspace Dependencies
Use these bundled paths for sheets, slides, documents, PDFs, images, or browser automation:
${r}${n}- Node.js executable: ${eS(e.nodePath)}
- Node.js packages: ${eS(e.nodeModulesPath)}
${
  null == e.pnpmPath
    ? ""
    : `- pnpm executable: ${eS(e.pnpmPath)}
`
}- Python executable: ${eS(e.pythonPath)}
- Python packages: ${eS(e.pythonLibrariesPath)}
- Override binaries: ${eS(e.overrideBinPath)}
- Fallback binaries: ${eS(e.fallbackBinPath)}`
          })(p, { bundleVersion: u.bundleVersion }),
        })
        function m(t) {
          return (
            e.probeExecutables &&
              ((B = {
                runtimeRoot: i,
                bundleVersion: t.bundleVersion,
                checkedAt: new Date().toISOString(),
                problems: t.problems,
              }),
              I().info("primary_runtime_validation_finished", {
                safe: {
                  bundleVersion: t.bundleVersion,
                  runtimeSource: o,
                  outcome: t.installed ? "passed" : "failed",
                  problemCount: t.problems.length,
                },
                sensitive: { runtimeRoot: i, problems: t.problems },
              })),
            t
          )
        }
      }
      function Z() {
        return { runtimeSource: null == C ? "archive" : "framework", runtimeRoot: eg() }
      }
      async function Q() {
        let e = Z(),
          t = await X()
        return {
          ...e,
          diagnostics: t,
          validation: B?.runtimeRoot === e.runtimeRoot && B.bundleVersion === t.bundleVersion ? B : null,
        }
      }
      async function Y({
        fetchImpl: e = y.F,
        fetchManifest: t,
        installRoot: r = d().join(u().homedir(), ".cache", "codex-runtimes"),
        osRelease: n,
        requireWindowsFramework: s = !1,
        release: i,
        runtimeInstallConfig: o,
        signal: a,
        target: l,
      }) {
        let c = await et({
          fetchManifest: t ?? ((t, r) => ei(t, r, e)),
          requireWindowsFramework: s,
          release: i,
          runtimeInstallConfig: o,
          signal: a,
          target: l,
        })
        if (!er({ manifest: c, osRelease: n ?? u().release(), target: l }))
          return { desiredBundleVersion: null, installedBundleVersion: null, status: "unsupported" }
        let h = c.bundleVersion ?? null,
          f = "msix" === en(c) ? C : d().join(r, c.runtimeRootDirectoryName || E),
          p = null == f ? null : ((await em(f))?.bundleVersion ?? null)
        return null == p
          ? { desiredBundleVersion: h, installedBundleVersion: p, status: "missing" }
          : null != h && p === h
            ? { desiredBundleVersion: h, installedBundleVersion: p, status: "current" }
            : { desiredBundleVersion: h, installedBundleVersion: p, status: "outdated" }
      }
      async function J(e = {}) {
        let t = eg(e.installRoot)
        return (await eI(t)) ? t : null
      }
      async function ee(e, t, r = "latest", n = {}) {
        let o = n.bundleOperationId ?? s().randomUUID(),
          l = n.trigger ?? "unknown",
          c = Date.now(),
          p = "resolve_manifest",
          m = null,
          g = $(e)
        I().info("primary_runtime_bundle_install_started", {
          safe: { bundleOperationId: o, forceReinstall: n.forceReinstall ?? !1, release: r, target: g, trigger: l },
        })
        try {
          let _ = await (async function (e, t, r, n) {
            let o,
              l = "resolve_manifest",
              c = null,
              p = (e, t = c) => {
                ;((l = e), (c = t), n.onTelemetryStageChange?.(e, t))
              },
              m = (e) => {
                L(e, {
                  bundleOperationId: n.bundleOperationId ?? null,
                  bundleVersion: c,
                  errorCategory: M(e, l),
                  errorCode: v(e),
                  failureStage: l,
                  retryable: D(e),
                })
              }
            ;((({ downloadedBytes: e = null, phase: t, totalBytes: r = null }) => {
              n.onProgress?.({ bundleVersion: null, downloadedBytes: e, phase: t, totalBytes: r })
            })({ phase: "checking" }),
              n.signal?.throwIfAborted())
            let g = n.installRoot ?? d().join(u().homedir(), ".cache", "codex-runtimes"),
              _ = n.fetchImpl ?? y.F
            p("resolve_manifest", null)
            try {
              o = await et({
                fetchManifest: n.fetchManifest ?? ((e, t) => ei(e, t, _)),
                requireWindowsFramework: n.requireWindowsFramework,
                onTelemetryStageChange: p,
                release: r,
                runtimeInstallConfig: t,
                signal: n.signal,
                target: e,
              })
            } catch (e) {
              throw (m(e), e)
            }
            if (
              (p("check_host_support", o.bundleVersion ?? null),
              !er({ manifest: o, osRelease: n.osRelease ?? u().release(), target: e }))
            )
              throw Error(k)
            I().info("Primary runtime download source", {
              safe: {
                bundleVersion: o.bundleVersion ?? null,
                hasLatestConfig: null != t.latest,
                hasLatestAlphaConfig: null != t["latest-alpha"],
                release: r,
                target: $(e),
              },
              sensitive: { latestManifestUrl: q(e, t, r), runtimeArchiveUrl: o.archiveUrl },
            })
            let b = o.bundleFormatVersion ?? 1,
              S = en(o),
              w = o.runtimeRootDirectoryName || "codex-primary-runtime",
              x = "msix" === S && null != C ? C : d().join(g, w),
              E = ({ downloadedBytes: e = null, phase: t, totalBytes: r = null }) => {
                n.onProgress?.({ bundleVersion: o.bundleVersion ?? null, downloadedBytes: e, phase: t, totalBytes: r })
              }
            if (!n.forceReinstall && o.bundleVersion && ("msix" !== S || null != C)) {
              ;(n.signal?.throwIfAborted(), p("validate_cached_runtime"))
              let t = await em(x)
              if (t?.bundleVersion === o.bundleVersion)
                try {
                  E({ phase: "validating" })
                  let t = await ew({ bundleFormatVersion: b, runtimeRoot: x, targetPlatform: es(e.platform) })
                  return (
                    n.signal?.throwIfAborted(),
                    E({ phase: "installed" }),
                    { bundleVersion: o.bundleVersion, paths: t, status: "already-current" }
                  )
                } catch {}
            }
            if ("msix" === S) {
              if ("win32" !== e.platform || null == n.installFrameworkPackage)
                throw Error("Windows primary runtime framework installation is unavailable.")
              try {
                ;(n.signal?.throwIfAborted(), p("install_framework"), E({ phase: "downloading" }))
                let t = await n.installFrameworkPackage(o, n.signal, n.getInternalUpdateCdnRequestHeaders, p, (e) =>
                  E({ ...e, phase: "downloading" }),
                )
                ;(n.signal?.throwIfAborted(), p("validate_payload"), E({ phase: "validating" }))
                let r = await ew({ bundleFormatVersion: b, runtimeRoot: t, targetPlatform: es(e.platform) })
                return (
                  n.signal?.throwIfAborted(),
                  E({ phase: "installed" }),
                  { bundleVersion: o.bundleVersion ?? null, frameworkRoot: t, paths: r, status: "installed" }
                )
              } catch (e) {
                throw (m(e), e)
              }
            }
            ;(n.signal?.throwIfAborted(), p("create_staging_directory"), await a().mkdir(g, { recursive: !0 }))
            let B = await a().mkdtemp(d().join(g, "codex-runtime-install-"))
            try {
              let t
              p("prepare_archive")
              let l =
                  o.archiveName ??
                  (function (e) {
                    switch (e) {
                      case "tar.gz":
                        return "node-runtime.tar.gz"
                      case "tar.xz":
                        return "node-runtime.tar.xz"
                      case "zip":
                        return "node-runtime.zip"
                    }
                  })(S),
                u = d().join(B, l),
                c = d().join(B, "payload")
              await a().mkdir(c, { recursive: !0 })
              let m =
                  n.downloadFile ??
                  ((e, t, r, n, s) =>
                    (async function (e, t, r, n, s, o = y.F) {
                      let a = await o(e, {
                        headers: { ...s?.requestHeaders, "User-Agent": "codex-primary-runtime-installer" },
                        redirect: s?.redirect,
                        signal: n,
                      })
                      if (!a.ok)
                        throw Error(`Failed to download primary runtime archive (${a.status} ${a.statusText}).`)
                      if (null == a.body) throw Error("Primary runtime archive response had no body.")
                      let l = a.headers.get("content-length"),
                        u = null == l ? 0 / 0 : Number(l),
                        c = Number.isFinite(u) && u > 0 ? u : null,
                        d = 0,
                        p = 0,
                        m = new h.Transform({
                          transform(e, t, n) {
                            d += e.byteLength
                            let s = Date.now()
                            ;(s - p > 500 && ((p = s), r?.({ downloadedBytes: d, totalBytes: c })), n(null, e))
                          },
                          flush(e) {
                            ;(r?.({ downloadedBytes: d, totalBytes: c }), e())
                          },
                        })
                      await (0, f.pipeline)(h.Readable.fromWeb(a.body), m, (0, i.createWriteStream)(t), { signal: n })
                    })(e, t, r, n, s, _)),
                v = ({ downloadedBytes: e, totalBytes: t }) => {
                  E({ downloadedBytes: e, phase: "downloading", totalBytes: t })
                },
                x = async (e) => {
                  ;(n.signal?.throwIfAborted(),
                    p("verify_checksum"),
                    E({ phase: "verifying" }),
                    await (async function ({ archivePath: e, expectedSha256: t, sourceUrl: r }) {
                      let n = await (async function (e) {
                        let t = s().createHash("sha256"),
                          r = await a().open(e, "r")
                        try {
                          for await (let e of r.createReadStream()) t.update(e)
                        } finally {
                          await r.close()
                        }
                        return t.digest("hex")
                      })(e)
                      if (n !== t) throw Error(`Checksum mismatch for '${r}': expected ${t}, got ${n}.`)
                    })({ archivePath: u, expectedSha256: o.archiveSha256, sourceUrl: e }))
                },
                k = !1
              if (null != o.internalCdnUrl && null != n.getInternalUpdateCdnRequestHeaders)
                try {
                  let e = await (async function (e, t, r) {
                    r?.throwIfAborted()
                    let n = e(t)
                    if (null == r) return n
                    let s = () => {},
                      i = new Promise((e, t) => {
                        ;((s = () =>
                          t(
                            r.reason instanceof Error
                              ? r.reason
                              : new DOMException("The operation was aborted", "AbortError"),
                          )),
                          r.addEventListener("abort", s, { once: !0 }),
                          r.aborted && s())
                      })
                    try {
                      return await Promise.race([n, i])
                    } finally {
                      r.removeEventListener("abort", s)
                    }
                  })(n.getInternalUpdateCdnRequestHeaders, o.internalCdnUrl, n.signal)
                  null != e &&
                    (p("download_archive"),
                    await m(o.internalCdnUrl, u, v, n.signal, { redirect: "error", requestHeaders: e }),
                    await x(o.internalCdnUrl),
                    (k = !0))
                } catch (e) {
                  ;(n.signal?.throwIfAborted(),
                    await a().rm(u, { force: !0 }),
                    I().warning("Primary runtime CDN unavailable; using legacy URL", {
                      safe: { bundleVersion: o.bundleVersion ?? null, release: r },
                      sensitive: { error: e },
                    }))
                }
              ;(k || (p("download_archive"), await m(o.archiveUrl, u, v, n.signal), await x(o.archiveUrl)),
                E({ phase: "extracting" }),
                n.signal?.throwIfAborted())
              let C = (function (e) {
                  switch (e) {
                    case "tar.gz":
                      return { extract: (e, t) => el("-xzf", e, t), listEntries: ea }
                    case "tar.xz":
                      return { extract: (e, t) => el("-xJf", e, t), listEntries: ea }
                    case "zip":
                      return { extract: ed, listEntries: eu }
                  }
                })(S),
                O = n.listArchiveEntries ?? C.listEntries
              ;(p("list_archive"),
                (function ({ entries: e, extractDir: t }) {
                  let r = d().resolve(t)
                  for (let n of e) {
                    let e = d().resolve(t, n)
                    if (e !== r && !e.startsWith(`${r}${d().sep}`))
                      throw Error(`Archive entry '${n}' would extract outside target.`)
                  }
                })({ entries: await O(u), extractDir: c }),
                p("extract_archive"),
                await (n.extractArchive ?? C.extract)(u, c))
              let P = d().join(c, w),
                A = es(e.platform)
              ;(E({ phase: "validating" }),
                n.signal?.throwIfAborted(),
                p("validate_payload"),
                await ew({ bundleFormatVersion: b, runtimeRoot: P, targetPlatform: A }),
                p("activate_runtime"))
              let R = d().join(g, w),
                T = "win32" === e.platform,
                L = d().join(g, `${w}.previous`),
                M = T ? `${L}-${s().randomUUID()}` : L
              ;(T || (await a().rm(M, { recursive: !0, force: !0 })),
                n.signal?.throwIfAborted(),
                (await eB(R)) && (await a().rename(R, M)))
              try {
                ;(await a().rename(P, R), (t = await ew({ bundleFormatVersion: b, runtimeRoot: R, targetPlatform: A })))
              } catch (e) {
                throw (await a().rm(R, { recursive: !0, force: !0 }), (await eB(M)) && (await a().rename(M, R)), e)
              }
              return (
                T
                  ? (await ep(M, "post_install_previous_runtime_cleanup"),
                    await ep(L, "legacy_previous_runtime_cleanup"))
                  : await a().rm(M, { recursive: !0, force: !0 }),
                E({ phase: "installed" }),
                { bundleVersion: o.bundleVersion ?? null, paths: t, status: "installed" }
              )
            } catch (e) {
              throw (m(e), e)
            } finally {
              ;(p("cleanup"), await ep(B, "staging_cleanup"))
            }
          })(e, t, r, {
            ...n,
            bundleOperationId: o,
            onTelemetryStageChange: (e, t) => {
              ;((p = e), (m = t), n.onTelemetryStageChange?.(e, t))
            },
            trigger: l,
          })
          return (
            I().info("primary_runtime_bundle_install_outcome", {
              safe: {
                bundleOperationId: o,
                bundleVersion: _.bundleVersion,
                durationMs: Date.now() - c,
                errorCategory: null,
                errorCode: null,
                failureStage: null,
                forceReinstall: n.forceReinstall ?? !1,
                outcome: _.status,
                release: r,
                retryable: !1,
                target: g,
                trigger: l,
              },
            }),
            _
          )
        } catch (a) {
          let e = T(a, { bundleOperationId: o, bundleVersion: m, failureStage: p }),
            t = { ...e, bundleOperationId: o, bundleVersion: e.bundleVersion ?? m }
          L(a, t)
          let s =
              "aborted" === t.errorCategory
                ? "aborted"
                : "unsupported_host" === t.errorCategory
                  ? "unsupported"
                  : "failed",
            i = {
              bundleOperationId: o,
              bundleVersion: t.bundleVersion,
              durationMs: Date.now() - c,
              errorCategory: t.errorCategory,
              errorCode: t.errorCode,
              failureStage: t.failureStage,
              forceReinstall: n.forceReinstall ?? !1,
              outcome: s,
              release: r,
              retryable: t.retryable,
              target: g,
              trigger: l,
            }
          throw (
            "failed" === s
              ? I().error("primary_runtime_bundle_install_outcome", { safe: i, sensitive: { error: a } })
              : I().info("primary_runtime_bundle_install_outcome", { safe: i, sensitive: { error: a } }),
            a
          )
        }
      }
      async function et({
        fetchManifest: e,
        onTelemetryStageChange: t,
        requireWindowsFramework: r = !1,
        release: n,
        runtimeInstallConfig: s,
        signal: i,
        target: o,
      }) {
        let a = (function ({ release: e, requireWindowsFramework: t = !1, target: r }) {
          var n, s, i
          let o = p.c8y.safeParse(e)
          if (!o.success) return null
          let a = t && "win32" === r.platform ? "-msix" : "",
            l =
              o.data.platforms[
                ((n = r),
                `${(function (e) {
                  if ("darwin" === e) return "macos"
                  if ("linux" === e) return "linux"
                  if ("win32" === e) return "windows"
                  throw Error(`Unsupported platform: ${e}`)
                })(n.platform)}-${(function (e) {
                  let t = e.toLowerCase()
                  if ("x64" === t || "x86_64" === t) return "x86_64"
                  if ("arm64" === t || "aarch64" === t) return "aarch64"
                  throw Error(`Unsupported architecture: ${e}`)
                })(n.arch)}` + a)
              ] ?? ("win32" === r.platform && "arm64" === r.arch ? o.data.platforms["windows-x86_64" + a] : void 0)
          return null == l
            ? null
            : ((s = o.data),
              {
                archiveSha256: (i = l).digest,
                archiveSizeBytes: i.size,
                archiveUrl: i.providers[0].url,
                bundleFormatVersion: s.bundleFormatVersion,
                bundleVersion: s.bundleVersion,
                format: i.format,
                internalCdnUrl: i.internalCdnUrl,
                runtimeRootDirectoryName: s.runtimeRootDirectoryName,
              })
        })({ release: s[n], requireWindowsFramework: r, target: o })
        if (r && "win32" === o.platform && (a?.format?.toLowerCase() !== "msix" || !a.bundleVersion)) throw new A()
        return (t?.("resolve_manifest"), null != a) ? a : p.fx1.parse(await e(q(o, s, n), i))
      }
      function er({ manifest: e, osRelease: t, target: r }) {
        return (0, p.bvA)({ archiveFormat: en(e), osRelease: t, platform: r.platform })
      }
      function en({ format: e, archiveName: t, archiveUrl: r }) {
        let n = e?.toLowerCase()
        if ("tar.gz" === n || "tar.xz" === n || "zip" === n || "msix" === n) return n
        if (null != n) throw Error(`Unsupported primary runtime archive format: ${e}`)
        return t?.toLowerCase().endsWith(".tar.gz") || r.toLowerCase().endsWith(".tar.gz")
          ? "tar.gz"
          : t?.toLowerCase().endsWith(".zip") || r.toLowerCase().endsWith(".zip")
            ? "zip"
            : "tar.xz"
      }
      function es(e) {
        if ("darwin" === e) return "darwin"
        if ("linux" === e) return "linux"
        if ("win32" === e) return "win32"
        throw Error(`Unsupported platform: ${e}`)
      }
      async function ei(e, t, r = y.F) {
        let n = await r(e, { headers: { "User-Agent": "codex-primary-runtime-installer" }, signal: t })
        if (!n.ok) throw Error(`Failed to download primary runtime manifest (${n.status} ${n.statusText}).`)
        return n.json()
      }
      function eo() {
        return "darwin" === process.platform
          ? "/usr/bin/tar"
          : "win32" === process.platform
            ? d().join(process.env.SystemRoot ?? "C:\\Windows", "System32", "tar.exe")
            : "tar"
      }
      async function ea(e) {
        let t = d().dirname(d().resolve(e)),
          r = await ef([eo(), "-tf", d().basename(e)], t, "win32" !== process.platform && void 0)
        if (0 !== r.code) throw Error(`Failed to list primary runtime archive: ${r.stderr}`)
        return ec(r.stdout)
      }
      async function el(e, t, r) {
        let n = d().dirname(d().resolve(t)),
          s = d().resolve(r),
          i = await ef(
            [eo(), e, d().basename(t), "-C", "win32" === process.platform ? d().relative(n, s) : s],
            n,
            "win32" !== process.platform && void 0,
          )
        if (0 !== i.code) throw Error(`Failed to extract primary runtime archive: ${i.stderr}`)
      }
      async function eu(e) {
        if ("win32" === process.platform) {
          let t = await eh(
            "param($ArchivePath)\n$ErrorActionPreference = 'Stop'\nAdd-Type -AssemblyName System.IO.Compression.FileSystem\n$archive = [System.IO.Compression.ZipFile]::OpenRead($ArchivePath)\ntry { $archive.Entries | ForEach-Object { $_.FullName } } finally { $archive.Dispose() }",
            [e],
          )
          if (0 !== t.code) throw Error(`Failed to list primary runtime archive: ${t.stderr}`)
          return ec(t.stdout)
        }
        let t = await ef(["tar", "-tf", e])
        if (0 !== t.code) throw Error(`Failed to list primary runtime archive: ${t.stderr}`)
        return ec(t.stdout)
      }
      function ec(e) {
        return e
          .split(/\r?\n/)
          .map((e) => e.trim())
          .filter((e) => e.length > 0)
      }
      async function ed(e, t) {
        let r =
          "win32" === process.platform
            ? await eh(
                "param($ArchivePath, $ExtractDir)\n$ErrorActionPreference = 'Stop'\nExpand-Archive -LiteralPath $ArchivePath -DestinationPath $ExtractDir -Force",
                [e, t],
              )
            : await ef(["tar", "-xf", e, "-C", t])
        if (0 !== r.code) throw Error(`Failed to extract primary runtime archive: ${r.stderr}`)
      }
      function eh(e, t) {
        return ef([
          "powershell.exe",
          "-NoProfile",
          "-NonInteractive",
          "-ExecutionPolicy",
          "Bypass",
          "-Command",
          e,
          ...t,
        ])
      }
      async function ef(e, t, r) {
        let { code: n, stdout: s, stderr: i } = await (0, b.s)({ args: e, cwd: t, spawnInsideWsl: r }).wait()
        return { code: n, stdout: s, stderr: i }
      }
      async function ep(e, t) {
        try {
          await a().rm(e, { recursive: !0, force: !0 })
        } catch (r) {
          I().warning("primary_runtime_cleanup_failed", {
            safe: { reason: t },
            sensitive: { error: r, runtimeRoot: e },
          })
        }
      }
      async function em(e) {
        try {
          return await ex(e)
        } catch {
          return null
        }
      }
      function eg(e) {
        return null == e && null != C ? C : d().join(e ?? d().join(u().homedir(), ".cache", "codex-runtimes"), E)
      }
      function ey(e) {
        return d().join(e, "dependencies", "bin")
      }
      function e_(e) {
        return d().join(e, "dependencies", "bin", "override")
      }
      function eb(e) {
        return d().join(e, "dependencies", "bin", "fallback")
      }
      function eS(e) {
        return `\`${e.replaceAll("`", "\\`")}\``
      }
      async function ew({ bundleFormatVersion: e, runtimeRoot: t, targetPlatform: r }) {
        let n = await ex(t),
          s = e >= 2 ? d().join(t, "dependencies", "node") : t,
          i = d().join(s, "bin", "win32" === r ? "node.exe" : "node"),
          o = d().join(s, "node_modules"),
          a = ey(t),
          l = e_(t),
          u = eb(t),
          c = null == n.pnpmVersion ? null : await ev([d().join(u, ek(r)), d().join(a, ek(r))])
        if (null != c && !(await eB(c))) throw Error(`Missing pnpm launcher: ${c}`)
        let h = await (async function ({ bundleFormatVersion: e, runtimeRoot: t, targetPlatform: r }) {
          let n = e >= 2 ? d().join(t, "dependencies", "python") : d().join(t, "python"),
            s = "win32" === r ? "python.exe" : "python3",
            i =
              "win32" === r
                ? [d().join(n, s), d().join(n, "python", s), d().join(n, "bin", s)]
                : [d().join(n, "bin", s), d().join(n, "bin", "python")],
            o = (await Promise.all(i.map(async (e) => ({ candidate: e, exists: await eB(e) })))).find(
              ({ exists: e }) => e,
            )
          return o ? o.candidate : i[0]
        })({ bundleFormatVersion: e, runtimeRoot: t, targetPlatform: r })
        return {
          binPath: a,
          bundledPluginMarketplacePaths: (function ({ metadata: e, runtimeRoot: t }) {
            return (e.bundledPlugins ?? []).map((e) =>
              eE({ label: "Bundled plugin marketplace", pathParts: [e], runtimeRoot: t }),
            )
          })({ metadata: n, runtimeRoot: t }),
          bundledSkillPaths: (function ({ metadata: e, runtimeRoot: t }) {
            return (e.bundledSkills ?? []).map((e) =>
              eE({ label: "Bundled skill", pathParts: [e, "SKILL.md"], runtimeRoot: t }),
            )
          })({ metadata: n, runtimeRoot: t }),
          fallbackBinPath: u,
          nodeModulesPath: o,
          nodePath: i,
          overrideBinPath: l,
          pnpmPath: c,
          pythonPath: h,
          skillsToRemove: n.skillsToRemove ?? [],
        }
      }
      async function ev(e) {
        let t = (await Promise.all(e.map(eB))).findIndex(Boolean)
        return t >= 0 ? (e[t] ?? "") : (e[0] ?? "")
      }
      async function ex(e) {
        let t = await a().readFile(d().join(e, "runtime.json"), "utf8")
        return O.parse(JSON.parse(t))
      }
      function eE({ label: e, pathParts: t, runtimeRoot: r }) {
        let n = d().resolve(r),
          s = d().resolve(r, ...t)
        if (s !== n && s.startsWith(`${n}${d().sep}`)) return s
        throw Error(`${e} path must stay within the runtime root.`)
      }
      function ek(e) {
        return "win32" === e ? "pnpm.cmd" : "pnpm"
      }
      async function eI(e) {
        let t = await a()
          .stat(e)
          .catch(() => null)
        return t?.isDirectory() === !0
      }
      function eC(e) {
        try {
          return (0, i.statSync)(e).isDirectory()
        } catch {
          return !1
        }
      }
      async function eB(e) {
        try {
          return (await a().access(e), !0)
        } catch {
          return !1
        }
      }
      function eO(e, t, r = !1) {
        let n = "win32" === process.platform ? ";" : ":",
          s = e ?? "",
          i = 0 === s.length ? [] : s.split(n),
          o = i.findIndex((e) => eP(e, t)),
          a = r
            ? i.findIndex((e) =>
                d()
                  .win32.normalize(e)
                  .split(d().win32.sep)
                  .some((e) => "windowsapps" === e.toLowerCase()),
              )
            : -1
        if (o >= 0) {
          if (a < 0 || o < a) return i.join(n)
          i.splice(o, 1)
        }
        return (a >= 0 ? i.splice(a, 0, t) : i.push(t), i.join(n))
      }
      function eP(e, t) {
        return "win32" === process.platform ? e.toLowerCase() === t.toLowerCase() : e === t
      }
    },
    33025(e, t, r) {
      "use strict"
      r.d(t, { $z: () => p.$zB, Xm: () => v, AC: () => m.A, Dt: () => m.D, MN: () => _ })
      var n = r(62228),
        s = r(86697),
        i = r.n(s),
        o = r(6467),
        a = r.n(o),
        l = r(97702),
        u = r.n(l),
        c = r(93531),
        d = r(23536)
      function h(e) {
        let t = f(e, "SHELL")
        if (null != t && /(?:^|[\\/])(?:pwsh|powershell)(?:\.exe)?$/i.test(t)) return t
        let r = [
            [f(e, "SystemRoot") ?? f(e, "windir") ?? "C:\\Windows", "System32", "WindowsPowerShell", "v1.0"],
            ...["ProgramFiles", "ProgramW6432", "ProgramFiles(x86)"].flatMap((t) => {
              let r = f(e, t)
              return null == r ? [] : ["7", "7-preview", "6"].map((e) => [r, "PowerShell", e])
            }),
          ],
          n = [...(f(e, "PATH")?.split(";") ?? []), ...r.flatMap((e) => [c.L.win32.join(...e), c.L.join(...e)])],
          s = f(e, "LOCALAPPDATA"),
          i = null == s ? null : c.L.win32.normalize(c.L.win32.join(s, "Microsoft", "WindowsApps")).toLowerCase()
        for (let e of n) {
          let t = e.trim().replace(/^"|"$/g, "")
          if (0 === t.length) continue
          let r = c.L.win32.normalize(t).toLowerCase()
          if (!(null != i && (r === i || r.startsWith(`${i}${c.L.win32.sep}`))))
            for (let e of ["pwsh.exe", "powershell.exe"])
              for (let r of [c.L.win32.join(t, e), c.L.join(t, e)]) {
                let e = (0, d.c6)(r)
                if (null != e) return e
              }
        }
        return null
      }
      function f(e, t) {
        let r = Object.entries(e).find(([e, r]) => e.toLowerCase() === t.toLowerCase() && null != r && r.length > 0)
        return r?.[1]
      }
      r(75959)
      var p = r(85452),
        m = r(29009)
      let g = `echo ${p.Hkr}&&set&&echo ${p.Hkr}`,
        y = `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; Write-Output '${p.Hkr}'; Get-ChildItem Env: | ForEach-Object { '{0}={1}' -f $_.Name, $_.Value }; Write-Output '${p.Hkr}'`
      function _(e) {
        var t
        let {
            shell: r,
            interactive: n,
            extraEnv: s,
            signal: i,
          } = "string" == typeof (t = e)
            ? { shell: t, interactive: !0, extraEnv: void 0, signal: void 0 }
            : { shell: t?.shell, interactive: t?.interactive ?? !0, extraEnv: t?.extraEnv, signal: t?.signal },
          o = r ?? v()
        return b(o, n, s, i).catch((e) => {
          var t, l, u, c
          if (r || S(e)) throw e
          return (
            (t = o),
            (l = n),
            (u = s),
            (c = i),
            (async function e(t, r, n, s, i) {
              let o = t[i]
              if (null == o) return a().env
              try {
                return await b(o, r, n, s)
              } catch (e) {
                if (S(e)) throw e
              }
              return e(t, r, n, s, i + 1)
            })(
              (function (e) {
                if ("win32" !== a().platform) return ["/bin/zsh", "/bin/bash"].filter((t) => t !== e)
                let t = [],
                  r = h(a().env)
                null != r && k(t, r)
                let n = E(a().env, "COMSPEC")
                return (
                  null != n && n.length > 0 && k(t, n),
                  k(t, "powershell.exe"),
                  k(t, "pwsh.exe"),
                  k(t, "cmd.exe"),
                  t.filter((t) => !I(t, e))
                )
              })(t),
              l,
              u,
              c,
              0,
            )
          )
        })
      }
      function b(e, t, r, n) {
        if (n?.aborted) return Promise.reject(w(n))
        let s = u()(
            e,
            (function (e, t) {
              if ("win32" !== a().platform) return [t ? "-ilc" : "-lc", p.nCo]
              let r = x(e)
              return "powershell" === r
                ? t
                  ? ["-NoLogo", "-Command", y]
                  : ["-NoLogo", "-NoProfile", "-NonInteractive", "-Command", y]
                : "cmd" === r
                  ? ["/d", "/s", "/c", g]
                  : [t ? "-ilc" : "-lc", p.nCo]
            })(e, t),
            { env: { ...p.FtW, ...r }, windowsHide: !0 },
          ),
          i = s.then(({ stdout: t }) =>
            (function (e, t) {
              if ("win32" !== a().platform || "powershell" !== x(t)) return e
              let r = { ...e, SHELL: t }
              if (null == E(e, "COMSPEC")) {
                let e = E(a().env, "COMSPEC")
                null != e && (r.COMSPEC = e)
              }
              return r
            })((0, p.pRA)(t, "win32" === a().platform && "posix" !== x(e) ? "\n" : "\0"), e),
          )
        return null == n
          ? i
          : (s.catch(() => {}),
            new Promise((e, t) => {
              let r = () => {
                ;(s.cancel(), t(w(n)))
              }
              ;(n.addEventListener("abort", r, { once: !0 }),
                i.then(e, t).finally(() => {
                  n.removeEventListener("abort", r)
                }))
            }))
      }
      function S(e) {
        return (
          (e instanceof Error && "AbortError" === e.name) ||
          ("object" == typeof e && null != e && "isCanceled" in e && !0 === e.isCanceled)
        )
      }
      function w(e) {
        if (e.reason instanceof Error) return e.reason
        let t = Error(null == e.reason ? "The operation was aborted" : String(e.reason))
        return ((t.name = "AbortError"), t)
      }
      function v(e = a().platform, t = a().env) {
        if ("win32" === e) {
          let e = h(t)
          if (null != e) return e
          let r = E(t, "COMSPEC")
          return null != r && r.length > 0 ? r : "cmd.exe"
        }
        try {
          let e = (0, n.userInfo)().shell
          if (e) return e
        } catch {}
        return "darwin" === e ? t.SHELL || "/bin/zsh" : t.SHELL || "/bin/sh"
      }
      function x(e) {
        let t = i().win32.basename(e).toLowerCase()
        return "powershell" === t || "powershell.exe" === t || "pwsh" === t || "pwsh.exe" === t
          ? "powershell"
          : "cmd" === t || "cmd.exe" === t
            ? "cmd"
            : "posix"
      }
      function E(e, t) {
        let r = e[t]
        if (null != r) return r
        let n = t.toLowerCase()
        for (let t of Object.keys(e))
          if (t.toLowerCase() === n) {
            let r = e[t]
            if (null != r) return r
          }
      }
      function k(e, t) {
        0 === t.length || e.some((e) => I(e, t)) || e.push(t)
      }
      function I(e, t) {
        return e.toLowerCase() === t.toLowerCase()
      }
    },
    29009(e, t, r) {
      "use strict"
      var n = r(6467),
        s = r.n(n)
      function i(e) {
        if ("win32" !== s().platform) return "PATH"
        if (null != e.Path) return "Path"
        if (null != e.PATH) return "PATH"
        for (let t of Object.keys(e)) if ("path" === t.toLowerCase()) return t
        return "Path"
      }
      r.d(
        t,
        {},
        {
          A: function (e) {
            let t = i(e)
            return e[t]
          },
          D: function (e, t) {
            let r = i(e)
            if ("win32" === s().platform)
              for (let t of Object.keys(e)) t !== r && "path" === t.toLowerCase() && delete e[t]
            e[r] = t
          },
        },
      )
    },
    41680(e, t, r) {
      "use strict"
      r.d(t, { s: () => v })
      var n = r(13200),
        s = r(62003)
      let i = [
          [
            "invalid_config",
            /bad (?:boolean |numeric )?config value|bad config line|invalid (?:config|key)|could not parse config|bogus format in git_config_parameters/i,
          ],
          [
            "index_locked",
            /unable to create .*\.lock['"]?: file exists|another git process seems to be running|cannot lock ref|could not lock (?:config file|.*ref)/i,
          ],
          [
            "authentication",
            /authentication failed|could not read username|permission denied \(publickey\)|http basic: access denied|invalid username or password|repository access denied|requested url returned error: (?:401|403)\b|support for password authentication was removed|terminal prompts disabled/i,
          ],
          ["permission_denied", /permission denied|operation not permitted|access is denied/i],
          [
            "resource_exhausted",
            /no space left on device|disk quota exceeded|cannot allocate memory|too many open files|resource temporarily unavailable/i,
          ],
          [
            "repository_missing",
            /not a git repository|does not appear to be a git repository|cannot (?:change to|chdir to).*no such file or directory/i,
          ],
          ["ambiguous_revision", /ambiguous argument|short object id .* is ambiguous/i],
          [
            "bad_revision",
            /bad revision|bad object|needed a single revision|not a valid object name|unknown revision or path not in the working tree/i,
          ],
          [
            "corrupt_repository",
            /corrupt|index file smaller than expected|bad signature|object file .* is empty|inflate: data stream error|pack has bad object/i,
          ],
          [
            "remote_transport",
            /could not resolve host|failed to connect|connection (?:timed out|reset|refused)|network is unreachable|early eof|remote end hung up unexpectedly|rpc failed|http\/2 stream .* was not closed cleanly|ssh: connect to host|unable to access/i,
          ],
        ],
        o = new Set([
          "--version",
          "add",
          "apply",
          "archive",
          "blame",
          "branch",
          "cat-file",
          "check-attr",
          "check-ignore",
          "check-ref-format",
          "checkout",
          "cherry-pick",
          "clean",
          "clone",
          "commit",
          "config",
          "count-objects",
          "diff",
          "fetch",
          "for-each-ref",
          "fsck",
          "gc",
          "grep",
          "hash-object",
          "init",
          "log",
          "ls-files",
          "ls-remote",
          "merge",
          "merge-base",
          "mv",
          "pull",
          "push",
          "rebase",
          "remote",
          "reset",
          "restore",
          "rev-list",
          "rev-parse",
          "rm",
          "show",
          "show-ref",
          "sparse-checkout",
          "stash",
          "status",
          "submodule",
          "switch",
          "tag",
          "update-index",
          "version",
          "worktree",
        ])
      function a(e, t) {
        let r = t
        for (; "-c" === e[r] && null != e[r + 1];) r += 2
        let n = e[r]
        return null != n && o.has(n) ? n : "other"
      }
      var l = r(31648),
        u = r.n(l),
        c = r(85452),
        d = r(58027),
        h = r(47981),
        f = r(79626),
        p = r(91747)
      class m {
        child
        stdoutChunks
        stderrChunks
        collectOutput
        writeStdinImpl
        result = null
        promise
        constructor(e, t = [], r = [], n = !0, s, i) {
          ;((this.child = e),
            (this.stdoutChunks = t),
            (this.stderrChunks = r),
            (this.collectOutput = n),
            (this.writeStdinImpl = i),
            this.child.stdin?.on("error", (e) => {
              !this.child.killed &&
                null == this.result &&
                (this.child.kill(), ("code" in e && "EPIPE" === e.code) || this.child.emit("error", e))
            }),
            (this.promise = s.then(
              ({ code: e, gitErrorKind: t, signal: r }) => (
                (this.result = { type: "resolve", code: e, gitErrorKind: t, signal: r }),
                this.result
              ),
              (e) => ((this.result = { type: "reject", error: e }), this.result),
            )))
        }
        wait() {
          return this.promise.then((e) => {
            switch (e.type) {
              case "resolve": {
                let { code: t, gitErrorKind: r, signal: n } = e
                return {
                  stdout: this.collectOutput ? Buffer.concat(this.stdoutChunks).toString("utf8") : "",
                  stderr: this.collectOutput ? Buffer.concat(this.stderrChunks).toString("utf8") : "",
                  code: t,
                  gitErrorKind: r,
                  signal: n,
                }
              }
              case "reject":
                throw e.error
            }
          })
        }
        getStdout() {
          return this.collectOutput ? Buffer.concat(this.stdoutChunks) : Buffer.alloc(0)
        }
        isDone() {
          return null != this.result
        }
        getPid() {
          return this.child.pid ?? null
        }
        kill(e) {
          this.child.kill(e)
        }
        writeStdin(e, t = {}) {
          if (null != this.writeStdinImpl) return this.writeStdinImpl(e, t)
          let r = this.child.stdin
          return null == r
            ? Promise.reject(Error("Process stdin is unavailable"))
            : new Promise((n, s) => {
                let i = (e) => {
                  null != e ? s(e) : n()
                }
                t.closeStdin ? r.end(e, i) : r.write(e, i)
              })
        }
      }
      var g = r(98197)
      let y = (0, p.vB)("spawn-async"),
        _ = new Set([
          "auth.status",
          "auth.token",
          "pr.checks",
          "pr.close",
          "pr.comment",
          "pr.create",
          "pr.diff",
          "pr.edit",
          "pr.list",
          "pr.merge",
          "pr.ready",
          "pr.reopen",
          "pr.review",
          "pr.view",
        ]),
        b = new Set([
          "-B",
          "-b",
          "-c",
          "-D",
          "-E",
          "-e",
          "-F",
          "-I",
          "-i",
          "-J",
          "-L",
          "-l",
          "-m",
          "-O",
          "-o",
          "-p",
          "-P",
          "-Q",
          "-R",
          "-S",
          "-W",
          "-w",
        ])
      function S(e) {
        let t = w(e)
        return "git" === t || "git.exe" === t || "git.cmd" === t || "git.bat" === t || "git.com" === t
      }
      function w(e) {
        let t = (0, s.basename)(e).toLowerCase(),
          r = s.win32.basename(e).toLowerCase()
        return t.length <= r.length ? t : r
      }
      function v({
        args: e,
        allowedNonZeroExitCodes: t,
        cwd: r,
        env: s,
        signal: i,
        stdoutChunkHandler: o,
        stderrChunkHandler: a,
        onExitHandler: l,
        collectOutput: u = !0,
        detached: c = !1,
        windowsHide: p,
        spawnInsideWsl: m,
        streamStdin: _ = !1,
      }) {
        if (m ?? (0, g.Ny)())
          return (
            y().info("Spawning process inside WSL"),
            (function (e, t, r, s, i, o, a, l, u = !0, c = !1) {
              var h, p
              let m,
                _,
                b = (0, g.dX)()
              if (null == b) throw Error("WSL mode is enabled but no eligible distro is available")
              let S = (0, g.nS)({
                  distro: b,
                  cwd: r ? (0, g.cB)(r) : ".",
                  command:
                    ((h = e),
                    (p = s),
                    (m = (0, d.fj)(h)),
                    0 ===
                    (_ =
                      null == p
                        ? []
                        : Object.entries(p).map(([e, t]) => {
                            var r
                            let n =
                              !(r = t).includes(";") && (/^(?:[a-zA-Z]:[\\/]|\\\\|\/\/)/.test(r) || (0, g.vW)(r))
                                ? (0, g.cB)(t)
                                : t
                            return `${e}=${(0, d.hD)(n)}`
                          })).length
                      ? `exec ${m}`
                      : `${_.join(" ")} exec ${m}`),
                }),
                w = { env: (0, f.I)(process.env), stdio: [c ? "pipe" : "ignore", "pipe", "pipe"], windowsHide: !0 }
              return (
                y().debug("Spawning process inside WSL", {
                  safe: { command: `wsl.exe ${S.join(" ")}` },
                  sensitive: {},
                }),
                x({
                  child: (0, n.spawn)("wsl.exe", S, w),
                  args: e,
                  allowedNonZeroExitCodes: t,
                  signal: i,
                  stdoutChunkHandler: o,
                  stderrChunkHandler: a,
                  onExitHandler: l,
                  collectOutput: u,
                })
              )
            })(
              e,
              t,
              r,
              null == s
                ? void 0
                : (function (e) {
                    let t = {}
                    for (let [r, n] of Object.entries(e)) null != n && process.env[r] !== n && (t[r] = n)
                    return t
                  })((0, f.I)(s)),
              i,
              o,
              a,
              l,
              u,
              _,
            )
          )
        let b = e[0],
          S = e.slice(1),
          w = (0, f.I)({ ...process.env, ...s })
        return x({
          child: (0, n.spawn)(h.K.resolve(b, { cwd: r, env: w }) ?? b, S, {
            cwd: r,
            detached: c,
            windowsHide: p,
            env: w,
            stdio: [_ ? "pipe" : "ignore", "pipe", "pipe"],
          }),
          args: e,
          allowedNonZeroExitCodes: t,
          signal: i,
          stdoutChunkHandler: o,
          stderrChunkHandler: a,
          onExitHandler: l,
          collectOutput: u,
        })
      }
      function x({
        child: e,
        args: t,
        allowedNonZeroExitCodes: r,
        signal: n,
        stdoutChunkHandler: s,
        stderrChunkHandler: o,
        onExitHandler: l,
        collectOutput: d,
      }) {
        let h = (function (e) {
            let t = (function (e) {
              let t = e[0]
              if (null != t && S(t))
                return { op: "git.exec", name: "git.subprocess", attributes: { "git.subcommand": a(e, 1) } }
              if (
                !(function (e) {
                  if (null == e) return !1
                  let t = w(e)
                  return "cmd" === t || "cmd.exe" === t
                })(t)
              )
                return null
              let r = e.slice(1, 4).map((e) => e.toLowerCase()),
                n = e[4]
              return 3 === r.length && "/d" === r[0] && "/s" === r[1] && "/c" === r[2] && null != n && S(n)
                ? { op: "git.exec", name: "git.subprocess", attributes: { "git.subcommand": a(e, 5) } }
                : null
            })(e)
            if (null != t) return t
            let r = (function (e) {
                if (null == e) return "other"
                let t = w(e).replace(/\.(?:bat|cmd|com|exe)$/u, "")
                if (/^python(?:3(?:\.\d+)*)?$/u.test(t)) return "python"
                switch (t) {
                  case "bash":
                  case "cmd":
                  case "powershell":
                  case "pwsh":
                  case "sh":
                  case "zsh":
                    return "shell"
                  case "codex":
                  case "gh":
                  case "node":
                  case "rg":
                  case "ssh":
                  case "tar":
                  case "tectonic":
                  case "wsl":
                    return t
                  default:
                    return "other"
                }
              })(e[0]),
              n = (function (e, t) {
                let r, n
                if ("gh" === t) [r, n] = e.slice(1, 3)
                else {
                  if ("shell" !== t || ("-c" !== e[1] && "-lc" !== e[1])) return
                  let s = /^gh(?:\s+([a-z-]+))?(?:\s+([a-z-]+))?(?:\s|$)/u.exec(e[2] ?? "")
                  if (null == s) return
                  ;[, r, n] = s
                }
                if ("--version" === r || "version" === r) return "version"
                if ("api" === r) return "graphql" === n ? "api.graphql" : "api.rest"
                let s = `${r}.${n}`
                return _.has(s) ? s : "other"
              })(e, r),
              s =
                n ??
                ("ssh" === r
                  ? (function (e) {
                      let t = e.slice(1),
                        r = !1,
                        n = !1,
                        s = !1,
                        i = 0
                      for (let e = 0; e < t.length; e += 1) {
                        let o = t[e]
                        if (null != o) {
                          if ("--" === o) {
                            i += t.length - e - 1
                            break
                          }
                          if (
                            ("-G" === o && (r = !0),
                            /^-O(?:.|$)/u.test(o) && (n = !0),
                            (/^-(?:D|L|R|W)(?:.|$)/u.test(o) ||
                              /^-o(?:DynamicForward|LocalForward|RemoteForward)=/iu.test(o) ||
                              ("-o" === o &&
                                /^(?:DynamicForward|LocalForward|RemoteForward)(?:=|\s)/iu.test(t[e + 1] ?? ""))) &&
                              (s = !0),
                            b.has(o))
                          ) {
                            e += 1
                            continue
                          }
                          if (!o.startsWith("-") && (i += 1) > 1) break
                        }
                      }
                      return r ? "config" : n ? "control" : s ? "port_forward" : i > 1 ? "remote_command" : "connection"
                    })(e)
                  : void 0)
            return {
              attributes: { "process.kind": null == n ? r : "gh", ...(null == s ? {} : { "process.operation": s }) },
              op: "process.exec",
              name: "subprocess",
            }
          })(t),
          f = [],
          p = [],
          g = [],
          y = 0,
          v = new Promise((t, r) => {
            let i = (function (e, t) {
                if (!t) return
                let r = () => {
                  e.kill()
                }
                return (
                  t.addEventListener("abort", r),
                  t.aborted && r(),
                  () => {
                    t.removeEventListener("abort", r)
                  }
                )
              })(e, n),
              a = u()(() => {
                ;(l?.(), i?.())
              })
            ;(e.stdout?.on("data", (e) => {
              ;(d && f.push(e), s?.(e))
            }),
              e.stderr?.on("data", (e) => {
                if ((d && p.push(e), "git.subprocess" === h.name && y < 8192)) {
                  let t = Buffer.from(e.subarray(0, 8192 - y))
                  ;(g.push(t), (y += t.length))
                }
                o?.(e)
              }),
              e.on("close", (e, r) => {
                ;(a(), t({ code: e, signal: r }))
              }),
              e.on("error", (e) => {
                ;(a(), r(e))
              }))
          })
        return new m(
          e,
          f,
          p,
          d,
          (0, c.f5g)(h, async () => {
            let t = await v,
              s = n?.aborted || e.killed,
              o = !s && 0 !== t.code && (null == t.code || !r?.includes(t.code)),
              a =
                "git.subprocess" === h.name && o
                  ? (function (e) {
                      for (let [t, r] of i) if (r.test(e)) return t
                      return "unknown"
                    })(Buffer.concat(g).toString("utf8"))
                  : void 0
            return ((0, c.cNE)({
              ...(null == t.code ? {} : { "process.exit.code": t.code }),
              ...(null == t.signal ? {} : { "process.signal": t.signal }),
              ...(null == a ? {} : { "git.error_kind": a }),
            }),
            s)
              ? ((0, c.tXO)("canceled"), t)
              : (o && (0, c.tXO)("failure", "process_exit"), { ...t, gitErrorKind: a })
          }),
        )
      }
    },
    98197(e, t, r) {
      "use strict"
      let n, s, i, o, a
      var l = r(13200),
        u = r(85452),
        c = r(79626),
        d = r(91747)
      let h = [],
        f = 0,
        p = new Map(),
        m = new Map(),
        g = new Map(),
        y = 0,
        _ = "/usr/bin/bash",
        b = "__CODEX_WSL_PATH_START__",
        S = "__CODEX_WSL_PATH_END__",
        w = [
          { name: "PATHEXT", type: "list" },
          { name: "COMSPEC", type: "path" },
          { name: "SYSTEMROOT", type: "path" },
          "SYSTEMDRIVE",
          "USERNAME",
          "USERDOMAIN",
          { name: "USERPROFILE", type: "path" },
          { name: "PROGRAMFILES", type: "path" },
          { name: "PROGRAMFILES(X86)", type: "path" },
          { name: "PROGRAMW6432", type: "path" },
          { name: "PROGRAMDATA", type: "path" },
          { name: "LOCALAPPDATA", type: "path" },
          { name: "APPDATA", type: "path" },
          "POWERSHELL",
          "PWSH",
          "HTTP_PROXY",
          "HTTPS_PROXY",
          "NO_PROXY",
          "NODE_TLS_REJECT_UNAUTHORIZED",
        ]
      function v() {
        if (!n) {
          if (null != process.env.VITEST) return !1
          throw Error("shouldSpawnInsideWsl not set")
        }
        return n()
      }
      function x(e = !1) {
        if ("win32" !== process.platform) return null
        if (!e && void 0 !== a)
          return (
            (0, d.tZ)().debug("wsl_discovery_cache_hit", {
              safe: { mode: "sync", result: null == a ? "empty" : "found" },
              sensitive: {},
            }),
            a
          )
        let t = (function (e) {
          let t = (0, d.tZ)(),
            r = "status",
            n = performance.now()
          try {
            ;(P("wsl.exe", ["--status"], t), (r = "verbose-list"), (n = performance.now()))
            let s = P("wsl.exe", ["--list", "--verbose"], t),
              i = N(s),
              o = M(s)
            ;((r = "quiet-list"), (n = performance.now()))
            let a = null == o ? P("wsl.exe", ["--list", "--quiet"], t) : ""
            return (
              t.info("[wsl] eligible distro list", {
                safe: {
                  mode: "sync",
                  lookupGeneration: e,
                  result: null == o ? "fallback" : "default",
                  eligibleCount: i.length,
                },
                sensitive: {},
              }),
              f === e && (h = i),
              o ?? O("", a)
            )
          } catch (u) {
            let s = u instanceof Error && null != u.cause ? u.cause : u,
              i = null != s && "object" == typeof s && "code" in s ? s.code : null,
              o = null != s && "object" == typeof s && "status" in s ? s.status : null,
              l = null != s && "object" == typeof s && "signal" in s ? s.signal : null
            t.error("[wsl] error retrieving eligible distro", {
              safe: {
                stage: r,
                mode: "sync",
                lookupGeneration: e,
                elapsedMs: Math.round(performance.now() - n),
                timeoutMs: 3e3,
                code: "ETIMEDOUT" === i ? "ETIMEDOUT" : "other",
                exitStatus: "number" == typeof o ? o : null,
                signal: "SIGTERM" === l || "SIGKILL" === l ? l : null,
                retainedDistro: null != a,
                retainedDistroCount: h.length,
              },
              sensitive: { error: u },
            })
            return
          }
        })((f += 1))
        return (void 0 !== t && (a = t), t ?? null)
      }
      async function E(e = !1) {
        return (await k(e)) ?? null
      }
      async function k(e = !1) {
        if ("win32" !== process.platform) return null
        if (!e && void 0 !== a)
          return (
            (0, d.tZ)().debug("wsl_discovery_cache_hit", {
              safe: { mode: "async", result: null == a ? "empty" : "found" },
              sensitive: {},
            }),
            a
          )
        if (!e && null != s) return s
        let t = ++f,
          r = (async function (e) {
            let t = (0, d.tZ)(),
              r = "status",
              n = performance.now()
            try {
              ;(await A("wsl.exe", ["--status"], t), (r = "verbose-list"), (n = performance.now()))
              let s = await A("wsl.exe", ["--list", "--verbose"], t),
                i = N(s),
                o = M(s)
              ;((r = "quiet-list"), (n = performance.now()))
              let a = null == o ? await A("wsl.exe", ["--list", "--quiet"], t) : ""
              return (
                t.info("[wsl] eligible distro list", {
                  safe: {
                    mode: "async",
                    lookupGeneration: e,
                    result: null == o ? "fallback" : "default",
                    eligibleCount: i.length,
                  },
                  sensitive: {},
                }),
                f === e && (h = i),
                o ?? O("", a)
              )
            } catch (u) {
              let s = u instanceof Error && null != u.cause ? u.cause : u,
                i = null != s && "object" == typeof s && "code" in s ? s.code : null,
                o = null != s && "object" == typeof s && "status" in s ? s.status : null,
                l = null != s && "object" == typeof s && "signal" in s ? s.signal : null
              t.error("[wsl] error retrieving eligible distro", {
                safe: {
                  stage: r,
                  mode: "async",
                  lookupGeneration: e,
                  elapsedMs: Math.round(performance.now() - n),
                  timeoutMs: 3e3,
                  code: "ETIMEDOUT" === i ? "ETIMEDOUT" : "other",
                  exitStatus: "number" == typeof o ? o : null,
                  signal: "SIGTERM" === l || "SIGKILL" === l ? l : null,
                  retainedDistro: null != a,
                  retainedDistroCount: h.length,
                },
                sensitive: { error: u },
              })
              return
            }
          })(t)
        s = r
        try {
          let e = await r
          return (void 0 !== e && f === t && (a = e), e)
        } finally {
          s === r && (s = void 0)
        }
      }
      async function I(e = !1) {
        let t = await k(e)
        return void 0 === t
          ? { status: "failed" }
          : {
              status: "success",
              availability: await (async function (e) {
                if (null == e) return { available: !1, distro: null }
                let t = performance.now()
                return new Promise((r) => {
                  ;(0, l.execFile)(
                    "wsl.exe",
                    ["-d", e, "--", _, "-lc", "exit 0"],
                    { encoding: "utf8", env: (0, c.I)(process.env), timeout: 3e4, windowsHide: !0 },
                    (n, s, i) => {
                      if (null != n) {
                        ;((0, d.tZ)().debug("WSL bash availability check failed", {
                          safe: {
                            stage: "bash",
                            mode: "async",
                            elapsedMs: Math.round(performance.now() - t),
                            timeoutMs: 3e4,
                            code: "ETIMEDOUT" === n.code ? "ETIMEDOUT" : null,
                          },
                          sensitive: { distro: e, error: n, stderr: i ?? "" },
                        }),
                          r({ available: !1, distro: e }))
                        return
                      }
                      r({ available: !0, distro: e })
                    },
                  )
                })
              })(t),
            }
      }
      function C(e, t, r) {
        try {
          let n = (0, l.spawnSync)("wsl.exe", e, { encoding: "utf8", env: (0, c.I)(process.env), windowsHide: !0 })
          if (n.error) return void r.debug("WSL command error", { safe: { context: t }, sensitive: { error: n.error } })
          if (0 !== n.status)
            return void r.debug("WSL command non-zero exit", {
              safe: { context: t },
              sensitive: { status: n.status, stderr: n.stderr ?? "" },
            })
          let s = n.stdout.trim()
          if (!s) return void r.warning("WSL command returned empty output", { safe: { context: t }, sensitive: {} })
          return s
        } catch (e) {
          r.warning("WSL command unexpected error", { safe: { context: t }, sensitive: { error: e } })
          return
        }
      }
      async function B(e, t, r) {
        return new Promise((n) => {
          ;(0, l.execFile)(
            "wsl.exe",
            e,
            { encoding: "utf8", env: (0, c.I)(process.env), timeout: 3e4, windowsHide: !0 },
            (e, s, i) => {
              if (null != e) {
                ;(r.debug("WSL command error", { safe: { context: t }, sensitive: { error: e, stderr: i ?? "" } }),
                  n(void 0))
                return
              }
              let o = s.trim()
              if (!o) {
                ;(r.warning("WSL command returned empty output", { safe: { context: t }, sensitive: {} }), n(void 0))
                return
              }
              n(o)
            },
          )
        })
      }
      function O(e, t) {
        let r = M(e)
        return (
          r ||
          (t
            .split("\n")
            .map((e) => e.trim())
            .find((e) => e.toLowerCase().startsWith("ubuntu")) ??
            null)
        )
      }
      function P(e, t, r) {
        return (
          r.debug("[execWindowsCommand] executing", { safe: { command: e, args: t.join(" ") }, sensitive: {} }),
          R(
            (0, l.execFileSync)(e, t, {
              timeout: 3e3,
              env: (0, c.I)(process.env),
              windowsHide: !0,
              encoding: "buffer",
              maxBuffer: 10240,
            }),
          )
        )
      }
      async function A(e, t, r) {
        return (
          r.debug("[execWindowsCommand] executing", { safe: { command: e, args: t.join(" ") }, sensitive: {} }),
          new Promise((r, n) => {
            ;(0, l.execFile)(
              e,
              t,
              { timeout: 3e3, env: (0, c.I)(process.env), windowsHide: !0, encoding: "buffer", maxBuffer: 10240 },
              (e, t) => {
                null != e ? n(Error(e.message, { cause: e })) : r(R(t))
              },
            )
          })
        )
      }
      function R(e) {
        let t
        if (Buffer.isBuffer(e)) {
          if (0 === e.length) return ""
          if (e.length >= 2 && 255 === e[0] && 254 === e[1]) t = e.subarray(2).toString("utf16le")
          else if (e.length >= 3 && 239 === e[0] && 187 === e[1] && 191 === e[2]) t = e.subarray(3).toString("utf8")
          else {
            let r = Math.min(e.length - (e.length % 2), 256),
              n = !1
            if (r > 0) {
              let t = 0,
                s = 0
              for (let n = 0; n < r; n += 2) (s++, 0 === e[n + 1] && t++)
              n = s > 0 && t / s > 0.6
            }
            t = n ? e.toString("utf16le") : e.toString("utf8")
          }
        } else t = e
        return t
          .replace(/^\uFEFF/, "")
          .replace(/\r\n/g, "\n")
          .trim()
      }
      function T(e) {
        return e
          .map((e) => {
            if ("string" == typeof e) return e
            switch (e.type) {
              case "path":
                return `${e.name}/p`
              case "list":
                return `${e.name}/l`
              case "unix-only":
                return `${e.name}/u`
              case "windows-only":
                return `${e.name}/w`
            }
          })
          .filter((e) => null != e)
      }
      function L(e) {
        return "string" == typeof e ? e : e.name
      }
      function M(e) {
        let t = e
          .split("\n")
          .map((e) => e.trim())
          .find((e) => e.startsWith("*"))
        if (!t) return null
        let r = t
          .slice(1)
          .trim()
          .split(/\s{2,}|\t+/)[0]
        return r || null
      }
      function N(e) {
        let t = M(e),
          r = e
            .split("\n")
            .slice(1)
            .map((e) => e.replace(/^\s*\*?\s*/, "").split(/\s{2,}|\t+/))
            .filter(([, , e]) => "2" === e)
            .map(([e]) => e)
            .filter((e) => null != e)
        return null != t && r.includes(t) ? [t, ...r.filter((e) => e !== t)] : r
      }
      function D(e, t, r) {
        if (null == e) return null
        let n = e.split("\n"),
          s = n.indexOf(t)
        if (-1 === s) return null
        let i = n.indexOf(r, s + 1)
        return -1 === i || i <= s + 1 ? null : n.slice(s + 1, i).join("\n")
      }
      r.d(
        t,
        { NU: () => u.NUu, cB: () => u.cB6, jP: () => u.jPp, vW: () => u.vWk },
        {
          B$: function (e) {
            if (n) throw Error("shouldSpawnInsideWsl already set")
            n = e
          },
          Bw: E,
          Ll: function () {
            var e
            let t
            if (void 0 !== i) return i
            if (Date.now() < y) return
            let r = (0, d.tZ)(),
              n = C(
                ["/usr/bin/env", "bash", "-lc", 'printf %s "${CODEX_HOME:-$HOME/.codex}"'],
                "readCodexHomePathFromWslEnv",
                r,
              )
            if (!n) {
              y = Date.now() + 3e4
              return
            }
            if ((0, u.NUu)(n)) return (i = (0, u.KoA)(n))
            if ((0, u.jPp)(n)) return (i = (0, u.KoA)((0, u.EAz)(n)))
            let s = (t = C(["wslpath", "-w", (e = n)], `resolveCodexHomeFromWsl:wslpath(${e})`, r))
              ? (0, u.KoA)(t)
              : void 0
            if (s) return ((i = s), s)
            ;(r.warning("[resolveCodexHomeFromWsl] Unable to translate Linux path", {
              safe: {},
              sensitive: { linuxPath: n },
            }),
              (y = Date.now() + 3e4))
          },
          M8: class extends Error {
            constructor() {
              ;(super(
                "Codex CLI couldn't start in the current WSL distribution because it doesn't provide a supported bash shell",
              ),
                (this.name = "UnsupportedWslShellError"))
            }
          },
          MV: function (e, t = x()) {
            if ((0, u.NUu)(e) || (0, u.vWk)(e)) return (0, u.KoA)(e)
            if ((0, u.jPp)(e)) return (0, u.KoA)((0, u.EAz)(e))
            if (!e.startsWith("/") || null == t) return e
            let r = e.replace(/^\/+/, "").replace(/\//g, "\\")
            return 0 === r.length ? `\\\\wsl$\\${t}\\` : `\\\\wsl$\\${t}\\${r}`
          },
          Mg: async function (e, t = !1) {
            if ("win32" !== process.platform) return null
            if (!t && p.has(e)) return p.get(e) ?? null
            let r = m.get(e)
            if (!t && null != r) return r
            let n = (g.get(e) ?? 0) + 1
            g.set(e, n)
            let s = (async () =>
              D(
                (await B(
                  [
                    "-d",
                    e,
                    "--",
                    _,
                    "-ilc",
                    `printf '%s
' '${b}'; printf '%s
' "$PATH"; printf '%s
' '${S}'`,
                  ],
                  `getInteractivePathFromWslBash(${e})`,
                  (0, d.tZ)(),
                )) ?? null,
                b,
                S,
              ))()
            m.set(e, s)
            try {
              let t = await s
              return (g.get(e) === n && p.set(e, t), t)
            } finally {
              m.get(e) === s && m.delete(e)
            }
          },
          Ny: v,
          R3: async function () {
            if (void 0 !== i) return i
            if (Date.now() < y) return
            if (null != o) return o
            let e = (async function () {
              let e = (0, d.tZ)(),
                t = await (async function (e) {
                  return B(
                    ["/usr/bin/env", "bash", "-lc", 'printf %s "${CODEX_HOME:-$HOME/.codex}"'],
                    "readCodexHomePathFromWslEnv",
                    e,
                  )
                })(e)
              if (!t) return
              if ((0, u.NUu)(t)) return (0, u.KoA)(t)
              if ((0, u.jPp)(t)) return (0, u.KoA)((0, u.EAz)(t))
              let r = await (async function (e, t) {
                let r = await B(["wslpath", "-w", e], `resolveCodexHomeFromWsl:wslpath(${e})`, t)
                return r ? (0, u.KoA)(r) : void 0
              })(t, e)
              if (r) return r
              e.warning("[resolveCodexHomeFromWsl] Unable to translate Linux path", {
                safe: {},
                sensitive: { linuxPath: t },
              })
            })()
            o = e
            try {
              let t = await e
              return (null == t ? (y = Date.now() + 3e4) : ((i = t), (y = 0)), t)
            } finally {
              o === e && (o = void 0)
            }
          },
          UF: w,
          VH: function (e = w) {
            return T(e).join(":")
          },
          Y4: async function () {
            let e = await I()
            return "failed" === e.status ? { available: !1, distro: null } : e.availability
          },
          cP: function (e) {
            return null == e ? v() : null == (0, u.SSJ)(e.id) && !(0, u.rsL)(e) && v()
          },
          dX: x,
          hN: function (e, t) {
            let r = new Set(t.map(L))
            return [
              ...(e ?? "")
                .split(":")
                .map((e) => e.trim())
                .filter((e) => e.length > 0)
                .filter((e) => {
                  var t
                  return !r.has((t = e).split("/", 1)[0] ?? t)
                }),
              ...T(t),
            ].join(":")
          },
          n8: I,
          nS: function (e) {
            return ["-d", e.distro, "--cd", e.cwd ?? ".", "--exec", _, "-lc", e.command]
          },
          oy: function (e, t = !1) {
            if ("win32" !== process.platform) return null
            if (!t && p.has(e)) return p.get(e) ?? null
            let r = (g.get(e) ?? 0) + 1
            g.set(e, r)
            let n = D(
              C(
                [
                  "-d",
                  e,
                  "--",
                  _,
                  "-ilc",
                  `printf '%s
' '${b}'; printf '%s
' "$PATH"; printf '%s
' '${S}'`,
                ],
                `getInteractivePathFromWslBash(${e})`,
                (0, d.tZ)(),
              ) ?? null,
              b,
              S,
            )
            return (g.get(e) === r && p.set(e, n), n)
          },
          qs: async function (e = !1) {
            return "win32" !== process.platform ? [] : (await E(e), h)
          },
        },
      )
    },
    24255(e, t, r) {
      "use strict"
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var s = Object.getOwnPropertyDescriptor(t, r)
                ;((!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, s))
              }
            : function (e, t, r, n) {
                ;(void 0 === n && (n = r), (e[n] = t[r]))
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r)
            return (s(t, e), t)
          },
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
          }
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.sync = t.isexe = t.posix = t.win32 = void 0))
      let a = i(r(65780))
      t.posix = a
      let l = i(r(5544))
      ;((t.win32 = l), o(r(21509), t))
      let u = "win32" === (process.env._ISEXE_TEST_PLATFORM_ || process.platform) ? l : a
      ;((t.isexe = u.isexe), (t.sync = u.sync))
    },
    21509(e, t) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
    },
    65780(e, t, r) {
      "use strict"
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.sync = t.isexe = void 0))
      let n = r(94383),
        s = r(24246)
      ;((t.isexe = async (e, t = {}) => {
        let { ignoreErrors: r = !1 } = t
        try {
          return i(await (0, s.stat)(e), t)
        } catch (e) {
          if (r || "EACCES" === e.code) return !1
          throw e
        }
      }),
        (t.sync = (e, t = {}) => {
          let { ignoreErrors: r = !1 } = t
          try {
            return i((0, n.statSync)(e), t)
          } catch (e) {
            if (r || "EACCES" === e.code) return !1
            throw e
          }
        }))
      let i = (e, t) => e.isFile() && o(e, t),
        o = (e, t) => {
          let r = t.uid ?? process.getuid?.(),
            n = t.groups ?? process.getgroups?.() ?? [],
            s = t.gid ?? process.getgid?.() ?? n[0]
          if (void 0 === r || void 0 === s) throw Error("cannot get uid or gid")
          let i = new Set([s, ...n]),
            o = e.mode,
            a = e.uid,
            l = e.gid,
            u = parseInt("100", 8),
            c = parseInt("010", 8)
          return !!(o & parseInt("001", 8) || (o & c && i.has(l)) || (o & u && a === r) || (o & (u | c) && 0 === r))
        }
    },
    5544(e, t, r) {
      "use strict"
      ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.sync = t.isexe = void 0))
      let n = r(94383),
        s = r(24246)
      ;((t.isexe = async (e, t = {}) => {
        let { ignoreErrors: r = !1 } = t
        try {
          return i(await (0, s.stat)(e), e, t)
        } catch (e) {
          if (r || "EACCES" === e.code) return !1
          throw e
        }
      }),
        (t.sync = (e, t = {}) => {
          let { ignoreErrors: r = !1 } = t
          try {
            return i((0, n.statSync)(e), e, t)
          } catch (e) {
            if (r || "EACCES" === e.code) return !1
            throw e
          }
        }))
      let i = (e, t, r) =>
        e.isFile() &&
        ((e, t) => {
          let { pathExt: r = process.env.PATHEXT || "" } = t,
            n = r.split(";")
          if (-1 !== n.indexOf("")) return !0
          for (let t = 0; t < n.length; t++) {
            let r = n[t].toLowerCase(),
              s = e.substring(e.length - r.length).toLowerCase()
            if (r && s === r) return !0
          }
          return !1
        })(t, r)
    },
    72825(e, t, r) {
      "use strict"
      let { Duplex: n } = r(26238),
        s = r(54457)
      e.exports = (e, t) => {
        if ("function" != typeof e) throw TypeError("Only a function is accepted as the first argument")
        let r = Promise.resolve(),
          i = null,
          o = [],
          a = () => {
            i || (r = new Promise((e) => (i = e)))
          },
          l = s.isFunctionList(e) ? e.fList : null,
          u = l
            ? function e(t, r, n) {
                for (;;) {
                  if (t && "function" == typeof t.then) return t.then((t) => e(t, r, n))
                  if (null == t || t === s.none) return
                  if (t === s.stop) throw new s.Stop()
                  if (s.isFinalValue(t)) return void n(s.getFinalValue(t))
                  if (s.isMany(t)) {
                    let i,
                      o = s.getManyValues(t)
                    if (r >= l.length) {
                      for (let e = 0; e < o.length; ++e) n(o[e])
                      return
                    }
                    for (let t = 0; t < o.length; ++t)
                      if (i) {
                        let s = t
                        i = i.then(() => e(o[s], r, n))
                      } else {
                        let s = e(o[t], r, n)
                        s && (i = s)
                      }
                    return i
                  }
                  if (t && "function" == typeof t.next)
                    return (async () => {
                      for (;;) {
                        let s = t.next()
                        if ((s && "function" == typeof s.then && (s = await s), s.done)) break
                        let i = e(s.value, r, n)
                        i && (await i)
                      }
                    })()
                  if (r >= l.length) return void n(t)
                  t = l[r++](t)
                }
              }
            : null,
          c = !1,
          d = null,
          h = (e) => {
            e && "function" == typeof e.next ? o.push(e) : o.push(e[Symbol.iterator]())
          },
          f = async () => {
            for (; o.length;) {
              await r
              let e = o[o.length - 1].next()
              if ((e && "function" == typeof e.then && (e = await e), e.done)) {
                o.pop()
                continue
              }
              let t = e.value
              ;(t && "function" == typeof t.then && (t = await t), await p(t))
            }
          },
          p = async (e) => {
            if (null != e && e !== s.none) {
              if (e === s.stop) throw new s.Stop()
              if (s.isMany(e)) return (h(s.getManyValues(e)), f())
              if (s.isFinalValue(e)) return m((e = s.getFinalValue(e)))
              d.push(e) || a()
            }
          },
          m = async (e) =>
            e && "function" == typeof e.then
              ? e.then((e) => m(e))
              : e && "function" == typeof e.next
                ? (h(e), f())
                : p(e)
        return (d = new n({
          writableObjectMode: !0,
          readableObjectMode: !0,
          ...t,
          write(t, n, i) {
            let o
            if (c) return void i(null)
            if (u) {
              let e,
                n = !1
              try {
                e = u(t, 0, (e) => {
                  d.push(e) || (n = !0)
                })
              } catch (e) {
                if (e instanceof s.Stop) {
                  ;(d.push(null), (c = !0), i(null))
                  return
                }
                i(e)
                return
              }
              return e
                ? void e.then(
                    () => i(null),
                    (e) => {
                      if (e instanceof s.Stop) {
                        ;(d.push(null), (c = !0), i(null))
                        return
                      }
                      i(e)
                    },
                  )
                : void (n ? (a(), r.then(() => i(null))) : i(null))
            }
            try {
              o = e(t, n)
            } catch (e) {
              if (e instanceof s.Stop) {
                ;(d.push(null), (c = !0), i(null))
                return
              }
              i(e)
              return
            }
            if (
              !(o && ("function" == typeof o.then || "function" == typeof o.next)) &&
              o !== s.stop &&
              !s.isMany(o) &&
              !s.isFinalValue(o)
            ) {
              if (null != o && o !== s.none && !d.push(o)) {
                ;(a(), r.then(() => i(null)))
                return
              }
              i(null)
              return
            }
            m(o).then(
              () => i(null),
              (e) => {
                if (e instanceof s.Stop) {
                  ;(d.push(null), (c = !0), i(null))
                  return
                }
                i(e)
              },
            )
          },
          final(t) {
            if (u) {
              let e,
                n = !1
              try {
                let t = (e) => {
                  d.push(e) || (n = !0)
                }
                for (let r = 0; r < l.length; ++r)
                  if (s.isFlushable(l[r]))
                    if (e) {
                      let n = r
                      e = e.then(() => u(l[n](s.none), n + 1, t))
                    } else {
                      let n = u(l[r](s.none), r + 1, t)
                      n && (e = n)
                    }
              } catch (e) {
                if (e instanceof s.Stop) {
                  ;(d.push(null), (c = !0), t(null))
                  return
                }
                t(e)
                return
              }
              return e
                ? void e.then(
                    () => (d.push(null), t(null)),
                    (e) => {
                      if (e instanceof s.Stop) {
                        ;((c = !0), d.push(null), t(null))
                        return
                      }
                      t(e)
                    },
                  )
                : (d.push(null), void (n ? (a(), r.then(() => t(null))) : t(null)))
            }
            if (!s.isFlushable(e)) {
              ;(d.push(null), t(null))
              return
            }
            ;(async (t) => {
              try {
                let r = e(t, null)
                await m(r)
              } catch (e) {
                if (e instanceof s.Stop) {
                  ;(d.push(null), (c = !0))
                  return
                }
                throw e
              }
            })(s.none).then(
              () => {
                ;(c || d.push(null), t(null))
              },
              (e) => t(e),
            )
          },
          read() {
            i && (i(), (i = null), (r = Promise.resolve()))
          },
        }))
      }
    },
    54457(e) {
      "use strict"
      let t = Symbol.for("object-stream.none"),
        r = Symbol.for("object-stream.stop"),
        n = Symbol.for("object-stream.final"),
        s = Symbol.for("object-stream.many"),
        i = Symbol.for("object-stream.flush"),
        o = Symbol.for("object-stream.fList"),
        a = (e) => ({ [n]: 1, value: e }),
        l = (e) => ({ [s]: 1, values: e })
      ;((e.exports.none = t),
        (e.exports.stop = r),
        (e.exports.Stop = class extends Error {}),
        (e.exports.finalSymbol = n),
        (e.exports.finalValue = a),
        (e.exports.final = a),
        (e.exports.isFinalValue = (e) => e && 1 === e[n]),
        (e.exports.getFinalValue = (e) => e.value),
        (e.exports.manySymbol = s),
        (e.exports.many = l),
        (e.exports.isMany = (e) => e && 1 === e[s]),
        (e.exports.getManyValues = (e) => e.values),
        (e.exports.flushSymbol = i),
        (e.exports.flushable = (e, r = null) => {
          let n = r ? (n) => (n === t ? r() : e(n)) : e
          return ((n[i] = 1), n)
        }),
        (e.exports.isFlushable = (e) => e && 1 === e[i]),
        (e.exports.fListSymbol = o),
        (e.exports.isFunctionList = (e) => e && 1 === e[o]),
        (e.exports.getFunctionList = (e) => e.fList),
        (e.exports.setFunctionList = (e, t) => ((e.fList = t), (e[o] = 1), e)),
        (e.exports.clearFunctionList = (e) => (delete e.fList, delete e[o], e)),
        (e.exports.toMany = (e) => (e === t ? l([]) : e && 1 === e[s] ? e : l([e]))),
        (e.exports.normalizeMany = (e) => {
          if (e?.[s] === 1)
            switch (e.values.length) {
              case 0:
                return t
              case 1:
                return e.values[0]
            }
          return e
        }),
        (e.exports.combineMany = (...e) => {
          let r = []
          for (let n = 0; n < e.length; ++n) {
            let i = e[n]
            i !== t && (i?.[s] === 1 ? r.push(...i.values) : r.push(i))
          }
          return l(r)
        }),
        (e.exports.combineManyMut = (e, ...r) => {
          let n = e === t ? [] : e?.[s] === 1 ? e.values : [e]
          for (let e = 0; e < r.length; ++e) {
            let i = r[e]
            i !== t && (i?.[s] === 1 ? n.push(...i.values) : n.push(i))
          }
          return l(n)
        }))
    },
    44519(e, t, r) {
      "use strict"
      let n = r(54457),
        s = async function* (e, t, r) {
          for (let i = r; i <= t.length && (e && "function" == typeof e.then && (e = await e), e !== n.none); ++i) {
            if (e === n.stop) throw new n.Stop()
            if (n.isFinalValue(e)) {
              yield n.getFinalValue(e)
              break
            }
            if (n.isMany(e)) {
              let r = n.getManyValues(e)
              if (i == t.length) yield* r
              else for (let e = 0; e < r.length; ++e) yield* s(r[e], t, i)
              break
            }
            if (e && "function" == typeof e.next) {
              for (;;) {
                let r = e.next()
                if ((r && "function" == typeof r.then && (r = await r), r.done)) break
                i == t.length ? yield r.value : yield* s(r.value, t, i)
              }
              break
            }
            if (i == t.length) {
              yield e
              break
            }
            e = (0, t[i])(e)
          }
        }
      ;((e.exports = (...e) => {
        ;(e = e
          .filter((e) => e)
          .flat(1 / 0)
          .map((e) => (n.isFunctionList(e) ? n.getFunctionList(e) : e))
          .flat(1 / 0)).length || (e = [(e) => e])
        let t = !1,
          r = async function* (r) {
            if (t) throw Error("Call to a flushed pipe.")
            if (r !== n.none)
              for (let t = 0; t <= e.length; ++t) {
                if (r && "function" == typeof r.then) return void (yield* s(r, e, t))
                if (r === n.none) return
                if (r === n.stop) throw new n.Stop()
                if (n.isFinalValue(r)) return void (yield n.getFinalValue(r))
                if (n.isMany(r) || (r && "function" == typeof r.next)) return void (yield* s(r, e, t))
                if (t == e.length) return void (yield r)
                r = e[t](r)
              }
            else {
              t = !0
              for (let t = 0; t < e.length; ++t) {
                let r = e[t]
                n.isFlushable(r) && (yield* s(r(n.none), e, t + 1))
              }
            }
          }
        return (e.some((e) => n.isFlushable(e)) && (r = n.flushable(r)), n.setFunctionList(r, e))
      }),
        (e.exports.next = s))
    },
    78217(e, t, r) {
      "use strict"
      let { Readable: n, Writable: s, Duplex: i } = r(26238),
        o = r(54457),
        a = r(44519),
        l = r(72825),
        u = (e) =>
          e &&
          "function" == typeof e.pipe &&
          "function" == typeof e.on &&
          (!e._writableState || ("object" == typeof e._readableState ? e._readableState.readable : null) !== !1) &&
          (!e._writableState || e._readableState),
        c = (e) =>
          e &&
          "function" == typeof e.write &&
          "function" == typeof e.on &&
          (!e._readableState || ("object" == typeof e._writableState ? e._writableState.writable : null) !== !1),
        d = (e) =>
          e &&
          "function" == typeof e.pipe &&
          e._readableState &&
          "function" == typeof e.on &&
          "function" == typeof e.write,
        h = (e) =>
          e &&
          (e._readableState ||
            e._writableState ||
            ("function" == typeof e.write && "function" == typeof e.on) ||
            ("function" == typeof e.pipe && "function" == typeof e.on)),
        f = (e) =>
          !!(
            e &&
            !h(e) &&
            "function" == typeof e.pipeThrough &&
            "function" == typeof e.getReader &&
            "function" == typeof e.cancel
          ),
        p = (e) => !!(e && !h(e) && "function" == typeof e.getWriter && "function" == typeof e.abort),
        m = (e) => !!(e && !h(e) && "object" == typeof e.readable && "object" == typeof e.writable),
        g = (e, t, r, o) => {
          if (d(t) || (!r && u(t)) || (r === o.length - 1 && c(t))) return (e.push(t), e)
          if (m(t)) return (e.push(i.fromWeb(t, { objectMode: !0 })), e)
          if (!r && f(t)) return (e.push(n.fromWeb(t, { objectMode: !0 })), e)
          if (r === o.length - 1 && p(t)) return (e.push(s.fromWeb(t, { objectMode: !0 })), e)
          if ("function" != typeof t) throw TypeError("Item #" + r + " is not a proper stream, nor a function.")
          e.length || e.push([])
          let a = e[e.length - 1]
          return (Array.isArray(a) ? a.push(t) : e.push([t]), e)
        },
        y = (e) =>
          Array.isArray(e)
            ? e.length
              ? 1 == e.length
                ? e[0] && b.asStream(e[0])
                : b.asStream(b.gen(...e))
              : null
            : e,
        _ = (e, t, r) => {
          if (d(e) || (!t && u(e)) || (t === r.length - 1 && c(e))) return e
          if (m(e)) return i.fromWeb(e, { objectMode: !0 })
          if (!t && f(e)) return n.fromWeb(e, { objectMode: !0 })
          if (t === r.length - 1 && p(e)) return s.fromWeb(e, { objectMode: !0 })
          if ("function" == typeof e) return b.asStream(e)
          throw TypeError("Item #" + t + " is not a proper stream, nor a function.")
        },
        b = (e, t) => {
          if (!Array.isArray(e) || !e.length) throw TypeError("Chain's first argument should be a non-empty array.")
          e = e.flat(1 / 0).filter((e) => e)
          let r = (
              t && t.noGrouping
                ? e.map(_)
                : e
                    .map((e) => (o.isFunctionList(e) ? o.getFunctionList(e) : e))
                    .flat(1 / 0)
                    .reduce(g, [])
                    .map(y)
            ).filter((e) => e),
            n = r[0],
            s = r.reduce((e, t) => (e && e.pipe(t)) || t),
            a = null,
            l = (e, t, r) =>
              ((e, t, r, n) => {
                let s = null
                try {
                  e.write(t, r, (e) => n(e || s))
                } catch (e) {
                  s = e
                }
              })(n, e, t, r),
            d = (e) =>
              ((e, t) => {
                let r = null
                try {
                  e.end(null, null, (e) => t(e || r))
                } catch (e) {
                  r = e
                }
              })(n, e),
            h = () => {
              s.resume()
            }
          return (
            c(n) || ((l = (e, t, r) => r(null)), (d = (e) => e(null)), n.on("end", () => a.end())),
            u(s)
              ? (s.on("data", (e) => !a.push(e) && s.pause()), s.on("end", () => a.push(null)))
              : ((h = () => {}), s.on("finish", () => a.push(null))),
            ((a = new i({
              writableObjectMode: !0,
              readableObjectMode: !0,
              ...t,
              readable: u(s),
              writable: c(n),
              write: l,
              final: d,
              read: h,
            })).streams = r),
            (a.input = n),
            (a.output = s),
            u(s) || a.resume(),
            (t && t.skipEvents) || r.forEach((e) => e.on("error", (e) => a.emit("error", e))),
            a
          )
        }
      ;((e.exports = b),
        (e.exports.none = o.none),
        (e.exports.stop = o.stop),
        (e.exports.Stop = o.Stop),
        (e.exports.finalSymbol = o.finalSymbol),
        (e.exports.finalValue = o.finalValue),
        (e.exports.final = o.final),
        (e.exports.isFinalValue = o.isFinalValue),
        (e.exports.getFinalValue = o.getFinalValue),
        (e.exports.manySymbol = o.manySymbol),
        (e.exports.many = o.many),
        (e.exports.isMany = o.isMany),
        (e.exports.getManyValues = o.getManyValues),
        (e.exports.flushSymbol = o.flushSymbol),
        (e.exports.flushable = o.flushable),
        (e.exports.isFlushable = o.isFlushable),
        (e.exports.fListSymbol = o.fListSymbol),
        (e.exports.isFunctionList = o.isFunctionList),
        (e.exports.getFunctionList = o.getFunctionList),
        (e.exports.setFunctionList = o.setFunctionList),
        (e.exports.clearFunctionList = o.clearFunctionList),
        (e.exports.toMany = o.toMany),
        (e.exports.normalizeMany = o.normalizeMany),
        (e.exports.combineMany = o.combineMany),
        (e.exports.combineManyMut = o.combineManyMut),
        (e.exports.chain = b),
        (e.exports.chainUnchecked = b),
        (e.exports.gen = a),
        (e.exports.asStream = l),
        (e.exports.dataSource = (e) => {
          if ("function" == typeof e) return e
          if (e) {
            if ("function" == typeof e[Symbol.asyncIterator]) return e[Symbol.asyncIterator].bind(e)
            if ("function" == typeof e[Symbol.iterator]) return e[Symbol.iterator].bind(e)
          }
          throw TypeError("The argument should be a function or an iterable object.")
        }))
    },
    50091(e, t, r) {
      "use strict"
      let { StringDecoder: n } = r(83318),
        { none: s, flushable: i } = r(54457)
      e.exports = () => {
        let e = new n(),
          t = ""
        return i((r) => {
          if (r === s) {
            let r = t + e.end()
            return ((t = ""), r)
          }
          if ("string" == typeof r) {
            if (!t) return r
            let e = t + r
            return ((t = ""), e)
          }
          if (r instanceof Buffer) {
            let n = t + e.write(r)
            return ((t = ""), n)
          }
          throw TypeError("Expected a string or a Buffer")
        })
      }
    },
    31635(e, t, r) {
      "use strict"
      let { asStream: n, flushable: s, gen: i, many: o, none: a } = r(78217),
        l = r(50091),
        u = {
          value1: /[\"\{\[\]\-\d]|true\b|false\b|null\b|\s{1,256}/y,
          string: /[^\x00-\x1f\"\\]{1,256}|\\[bfnrt\"\\\/]|\\u[\da-fA-F]{4}|\"/y,
          key1: /[\"\}]|\s{1,256}/y,
          colon: /\:|\s{1,256}/y,
          comma: /[\,\]\}]|\s{1,256}/y,
          ws: /\s{1,256}/y,
          numberStart: /\d/y,
          numberDigit: /\d{0,256}/y,
          numberFraction: /[\.eE]/y,
          numberExponent: /[eE]/y,
          numberExpSign: /[-+]/y,
        }
      ;((u.numberFracStart = u.numberExpStart = u.numberStart), (u.numberFracDigit = u.numberExpDigit = u.numberDigit))
      let c = { object: "objectStop", array: "arrayStop", "": "done" },
        d = { name: "startObject" },
        h = { name: "endObject" },
        f = { name: "startArray" },
        p = { name: "endArray" },
        m = { name: "startString" },
        g = { name: "endString" },
        y = { name: "startNumber" },
        _ = { name: "endNumber" },
        b = { name: "startKey" },
        S = { name: "endKey" },
        w = {
          true: { name: "trueValue", value: !0 },
          false: { name: "falseValue", value: !1 },
          null: { name: "nullValue", value: null },
        },
        v = (e) => String.fromCharCode(parseInt(e.slice(2), 16)),
        x = { b: "\b", f: "\f", n: "\n", r: "\r", t: "	", '"': '"', "\\": "\\", "/": "/" },
        E = (e) => {
          let t, r, n, E, k, I, C, B, O, P, A, R, T, L
          return i(
            l(),
            ((t = !0),
            (r = !0),
            (n = !0),
            (E = !0),
            (k = !0),
            (I = !0),
            (C = !1),
            e &&
              ("packValues" in e && (t = r = n = e.packValues),
              "packKeys" in e && (t = e.packKeys),
              "packStrings" in e && (r = e.packStrings),
              "packNumbers" in e && (n = e.packNumbers),
              "streamValues" in e && (E = k = I = e.streamValues),
              "streamKeys" in e && (E = e.streamKeys),
              "streamStrings" in e && (k = e.streamStrings),
              "streamNumbers" in e && (I = e.streamNumbers),
              (C = e.jsonStreaming)),
            t || (E = !0),
            r || (k = !0),
            n || (I = !0),
            (B = !1),
            (O = C ? "done" : "value"),
            (P = ""),
            (A = !1),
            (R = ""),
            (T = ""),
            (L = []),
            s((e) => {
              let s = []
              e === a ? (B = !0) : (T += e)
              let i,
                l,
                M = 0
              e: for (;;)
                switch (O) {
                  case "value1":
                  case "value":
                    if (((u.value1.lastIndex = M), !(i = u.value1.exec(T)))) {
                      if (B || M + 16 < T.length) {
                        if (M < T.length) throw Error("Parser cannot parse input: expected a value")
                        throw Error("Parser has expected a value")
                      }
                      break e
                    }
                    switch ((l = i[0])) {
                      case '"':
                        ;(k && s.push(m), (O = "string"))
                        break
                      case "{":
                        ;(s.push(d), L.push(P), (P = "object"), (O = "key1"))
                        break
                      case "[":
                        ;(s.push(f), L.push(P), (P = "array"), (O = "value1"))
                        break
                      case "]":
                        if ("value1" !== O) throw Error("Parser cannot parse input: unexpected token ']'")
                        ;(A && (I && s.push(_), (A = !1), n && (s.push({ name: "numberValue", value: R }), (R = ""))),
                          s.push(p),
                          (O = c[(P = L.pop())]))
                        break
                      case "-":
                        ;((A = !0),
                          I && s.push(y, { name: "numberChunk", value: "-" }),
                          n && (R = "-"),
                          (O = "numberStart"))
                        break
                      case "0":
                        ;((A = !0),
                          I && s.push(y, { name: "numberChunk", value: "0" }),
                          n && (R = "0"),
                          (O = "numberFraction"))
                        break
                      case "1":
                      case "2":
                      case "3":
                      case "4":
                      case "5":
                      case "6":
                      case "7":
                      case "8":
                      case "9":
                        ;((A = !0),
                          I && s.push(y, { name: "numberChunk", value: l }),
                          n && (R = l),
                          (O = "numberDigit"))
                        break
                      case "true":
                      case "false":
                      case "null":
                        if (T.length - M === l.length && !B) break e
                        ;(s.push(w[l]), (O = c[P]))
                    }
                    M += l.length
                    break
                  case "keyVal":
                  case "string":
                    if (((u.string.lastIndex = M), !(i = u.string.exec(T)))) {
                      if (M < T.length && (B || T.length - M >= 6))
                        throw Error("Parser cannot parse input: escaped characters")
                      if (B) throw Error("Parser has expected a string value")
                      break e
                    }
                    if ('"' === (l = i[0]))
                      "keyVal" === O
                        ? (E && s.push(S), t && (s.push({ name: "keyValue", value: R }), (R = "")), (O = "colon"))
                        : (k && s.push(g), r && (s.push({ name: "stringValue", value: R }), (R = "")), (O = c[P]))
                    else if (l.length > 1 && "\\" === l.charAt(0)) {
                      let e = 2 == l.length ? x[l.charAt(1)] : v(l)
                      ;(("keyVal" === O ? E : k) && s.push({ name: "stringChunk", value: e }),
                        ("keyVal" === O ? t : r) && (R += e))
                    } else
                      (("keyVal" === O ? E : k) && s.push({ name: "stringChunk", value: l }),
                        ("keyVal" === O ? t : r) && (R += l))
                    M += l.length
                    break
                  case "key1":
                  case "key":
                    if (((u.key1.lastIndex = M), !(i = u.key1.exec(T)))) {
                      if (M < T.length || B) throw Error("Parser cannot parse input: expected an object key")
                      break e
                    }
                    if ('"' === (l = i[0])) (E && s.push(b), (O = "keyVal"))
                    else if ("}" === l) {
                      if ("key1" !== O) throw Error("Parser cannot parse input: unexpected token '}'")
                      ;(s.push(h), (O = c[(P = L.pop())]))
                    }
                    M += l.length
                    break
                  case "colon":
                    if (((u.colon.lastIndex = M), !(i = u.colon.exec(T)))) {
                      if (M < T.length || B) throw Error("Parser cannot parse input: expected ':'")
                      break e
                    }
                    ;(":" === (l = i[0]) && (O = "value"), (M += l.length))
                    break
                  case "arrayStop":
                  case "objectStop":
                    if (((u.comma.lastIndex = M), !(i = u.comma.exec(T)))) {
                      if (M < T.length || B) throw Error("Parser cannot parse input: expected ','")
                      break e
                    }
                    if (
                      (A && (I && s.push(_), (A = !1), n && (s.push({ name: "numberValue", value: R }), (R = ""))),
                      "," === (l = i[0]))
                    )
                      O = "arrayStop" === O ? "value" : "key"
                    else if ("}" === l || "]" === l) {
                      if ("}" === l ? "arrayStop" === O : "arrayStop" !== O)
                        throw Error("Parser cannot parse input: expected '" + ("arrayStop" === O ? "]" : "}") + "'")
                      ;(s.push("}" === l ? h : p), (O = c[(P = L.pop())]))
                    }
                    M += l.length
                    break
                  case "numberStart":
                    if (((u.numberStart.lastIndex = M), !(i = u.numberStart.exec(T)))) {
                      if (M < T.length || B) throw Error("Parser cannot parse input: expected a starting digit")
                      break e
                    }
                    ;((l = i[0]),
                      I && s.push({ name: "numberChunk", value: l }),
                      n && (R += l),
                      (O = "0" === l ? "numberFraction" : "numberDigit"),
                      (M += l.length))
                    break
                  case "numberDigit":
                    if (((u.numberDigit.lastIndex = M), !(i = u.numberDigit.exec(T)))) {
                      if (M < T.length || B) throw Error("Parser cannot parse input: expected a digit")
                      break e
                    }
                    if ((l = i[0])) (I && s.push({ name: "numberChunk", value: l }), n && (R += l), (M += l.length))
                    else {
                      if (M < T.length) {
                        O = "numberFraction"
                        break
                      }
                      if (B) {
                        O = c[P]
                        break
                      }
                      break e
                    }
                    break
                  case "numberFraction":
                    if (((u.numberFraction.lastIndex = M), !(i = u.numberFraction.exec(T)))) {
                      if (M < T.length || B) {
                        O = c[P]
                        break
                      }
                      break e
                    }
                    ;((l = i[0]),
                      I && s.push({ name: "numberChunk", value: l }),
                      n && (R += l),
                      (O = "." === l ? "numberFracStart" : "numberExpSign"),
                      (M += l.length))
                    break
                  case "numberFracStart":
                    if (((u.numberFracStart.lastIndex = M), !(i = u.numberFracStart.exec(T)))) {
                      if (M < T.length || B)
                        throw Error("Parser cannot parse input: expected a fractional part of a number")
                      break e
                    }
                    ;((l = i[0]),
                      I && s.push({ name: "numberChunk", value: l }),
                      n && (R += l),
                      (O = "numberFracDigit"),
                      (M += l.length))
                    break
                  case "numberFracDigit":
                    if (((u.numberFracDigit.lastIndex = M), (l = (i = u.numberFracDigit.exec(T))[0])))
                      (I && s.push({ name: "numberChunk", value: l }), n && (R += l), (M += l.length))
                    else {
                      if (M < T.length) {
                        O = "numberExponent"
                        break
                      }
                      if (B) {
                        O = c[P]
                        break
                      }
                      break e
                    }
                    break
                  case "numberExponent":
                    if (((u.numberExponent.lastIndex = M), !(i = u.numberExponent.exec(T)))) {
                      if (M < T.length || B) {
                        O = c[P]
                        break
                      }
                      break e
                    }
                    ;((l = i[0]),
                      I && s.push({ name: "numberChunk", value: l }),
                      n && (R += l),
                      (O = "numberExpSign"),
                      (M += l.length))
                    break
                  case "numberExpSign":
                    if (((u.numberExpSign.lastIndex = M), !(i = u.numberExpSign.exec(T)))) {
                      if (M < T.length) {
                        O = "numberExpStart"
                        break
                      }
                      if (B) throw Error("Parser has expected an exponent value of a number")
                      break e
                    }
                    ;((l = i[0]),
                      I && s.push({ name: "numberChunk", value: l }),
                      n && (R += l),
                      (O = "numberExpStart"),
                      (M += l.length))
                    break
                  case "numberExpStart":
                    if (((u.numberExpStart.lastIndex = M), !(i = u.numberExpStart.exec(T)))) {
                      if (M < T.length || B)
                        throw Error("Parser cannot parse input: expected an exponent part of a number")
                      break e
                    }
                    ;((l = i[0]),
                      I && s.push({ name: "numberChunk", value: l }),
                      n && (R += l),
                      (O = "numberExpDigit"),
                      (M += l.length))
                    break
                  case "numberExpDigit":
                    if (((u.numberExpDigit.lastIndex = M), (l = (i = u.numberExpDigit.exec(T))[0])))
                      (I && s.push({ name: "numberChunk", value: l }), n && (R += l), (M += l.length))
                    else {
                      if (M < T.length || B) {
                        O = c[P]
                        break
                      }
                      break e
                    }
                    break
                  case "done":
                    if (((u.ws.lastIndex = M), !(i = u.ws.exec(T)))) {
                      if (M < T.length) {
                        if (C) {
                          ;(A && (I && s.push(_), (A = !1), n && (s.push({ name: "numberValue", value: R }), (R = ""))),
                            (O = "value"))
                          break
                        }
                        throw Error("Parser cannot parse input: unexpected characters")
                      }
                      break e
                    }
                    ;((l = i[0]),
                      A && (I && s.push(_), (A = !1), n && (s.push({ name: "numberValue", value: R }), (R = ""))),
                      (M += l.length))
                }
              return (
                B && A && (I && s.push(_), (A = !1), n && (s.push({ name: "numberValue", value: R }), (R = ""))),
                (T = T.slice(M)),
                s.length ? o(s) : a
              )
            })),
          )
        }
      ;((E.asStream = (e) => n(E(e), e)), (e.exports = E), (e.exports.parser = E))
    },
    15294(e, t, r) {
      "use strict"
      let n = r(93351),
        { none: s } = r(78217),
        i = (e, t) =>
          e && e.length
            ? e.map((e) => ({
                ...e,
                filter: ((e, t) => {
                  if ("function" == typeof e) return e
                  if ("string" == typeof e) {
                    let r = e + t
                    return (n) => {
                      let s = n.join(t)
                      return s === e || s.startsWith(r)
                    }
                  }
                  return e instanceof RegExp ? (r) => ((e.lastIndex = 0), e.test(r.join(t))) : () => !0
                })(e.filter, t),
              }))
            : null
      class o extends n {
        static connectTo(e, t) {
          return new o(t).connectTo(e)
        }
        constructor(e) {
          ;(super(),
            (this.objectStack = []),
            (this.keyStack = []),
            (this.current = this.key = null),
            (this.rule = null),
            (this.isArray = !1),
            (this.arrayIndex = -1),
            (this.done = !0),
            (this.reviver = !1))
          let t = e?.pathSeparator || "."
          ;((this.objectRules = i(e?.objectRules, t)),
            (this.arrayRules = i(e?.arrayRules, t)),
            e &&
              ((this.reviver = "function" == typeof e.reviver && e.reviver),
              e.numberAsString && (this.numberValue = this.stringValue)),
            (this.tapChain = (e) => (this[e.name] && (this[e.name](e.value), this.done) ? this.current : s)))
        }
        connectTo(e) {
          return (
            e.on("data", (e) => {
              this[e.name] && (this[e.name](e.value), this.done && this.emit("done", this))
            }),
            this
          )
        }
        get depth() {
          return this.objectStack.length + +!this.done
        }
        get path() {
          return this.keyStack.slice()
        }
        dropToLevel(e) {
          if (e < this.depth)
            if (e > 0) {
              let t = e - 1,
                r = this.objectStack[t]
              ;((this.current = r.container),
                (this.rule = r.rule),
                (this.isArray = r.isArray),
                (this.arrayIndex = r.arrayIndex),
                (this.key = null),
                (this.objectStack.length = t),
                (this.keyStack.length = t))
            } else
              ((this.objectStack.length = 0),
                (this.keyStack.length = 0),
                (this.current = this.key = null),
                (this.rule = null),
                (this.isArray = !1),
                (this.arrayIndex = -1),
                (this.done = !0))
          return this
        }
        consume(e) {
          return (this[e.name] && this[e.name](e.value), this)
        }
        keyValue(e) {
          this.key = e
        }
        stringValue(e) {
          this._saveValue(e)
        }
        numberValue(e) {
          this._saveValue(parseFloat(e))
        }
        nullValue() {
          this._saveValue(null)
        }
        trueValue() {
          this._saveValue(!0)
        }
        falseValue() {
          this._saveValue(!1)
        }
        _matchRule(e) {
          if (!e) return null
          for (let t of e) if (t.filter(this.keyStack)) return t
          return null
        }
        _pushState() {
          ;(this.objectStack.push({
            container: this.current,
            rule: this.rule,
            isArray: this.isArray,
            arrayIndex: this.arrayIndex,
          }),
            this.isArray ? (++this.arrayIndex, this.keyStack.push(this.arrayIndex)) : this.keyStack.push(this.key))
        }
        startObject() {
          ;(this.done ? (this.done = !1) : this._pushState(),
            (this.rule = this._matchRule(this.objectRules)),
            (this.isArray = !1),
            (this.arrayIndex = -1),
            (this.current = this.rule ? this.rule.create(this.keyStack) : {}),
            (this.key = null))
        }
        startArray() {
          ;(this.done ? (this.done = !1) : this._pushState(),
            (this.rule = this._matchRule(this.arrayRules)),
            (this.isArray = !0),
            (this.arrayIndex = -1),
            (this.current = this.rule ? this.rule.create(this.keyStack) : []),
            (this.key = null))
        }
        endObject() {
          if (
            (this.rule && this.rule.finalize && (this.current = this.rule.finalize(this.current)),
            this.objectStack.length)
          ) {
            let e = this.current,
              t = this.objectStack.pop()
            ;((this.key = this.keyStack.pop()),
              (this.current = t.container),
              (this.rule = t.rule),
              (this.isArray = t.isArray),
              (this.arrayIndex = t.arrayIndex),
              this._addToCurrent(e))
          } else
            (this.reviver && (this.current = this.reviver.call({ "": this.current }, "", this.current)),
              (this.done = !0))
        }
        _saveValue(e) {
          if (this.done) {
            ;(this.reviver && (e = this.reviver.call({ "": e }, "", e)), (this.current = e))
            return
          }
          ;(this.isArray && ++this.arrayIndex, this._addToCurrent(e))
        }
        _addToCurrent(e) {
          if (this.isArray)
            (this.reviver && void 0 === (e = this.reviver.call(this.current, String(this.arrayIndex), e))) ||
              (this.rule ? this.rule.add(this.current, e) : this.current.push(e))
          else {
            if (this.reviver && void 0 === (e = this.reviver.call(this.current, this.key, e))) {
              this.key = null
              return
            }
            ;(this.rule ? this.rule.add(this.current, this.key, e) : (this.current[this.key] = e), (this.key = null))
          }
        }
      }
      ;((o.prototype.endArray = o.prototype.endObject), (e.exports = o), (e.exports.flexAssembler = (e) => new o(e)))
    },
    58027(e, t, r) {
      "use strict"
      class n {
        constructor(e) {
          ;((this.i = 0),
            (this.string = e),
            (this.whitespace = " 	\r\n"),
            (this.quotes = "'\""),
            (this.escapes = "\\"),
            (this.escapedQuotes = '"'),
            (this.ansiCQuotes = !0),
            (this.localeQuotes = !0),
            (this.debug = !1))
        }
        readChar() {
          return this.string.charAt(this.i++)
        }
        processEscapes(e, t, r) {
          if (!r && !this.escapedQuotes.includes(t)) return e
          let n = "[" + this.escapes.replace(/(.)/g, "\\$1") + "]"
          if (!r && this.escapedQuotes.includes(t)) {
            let r = RegExp(n + "(" + n + "|\\" + t + ")", "g")
            return e.replace(r, "$1")
          }
          if (r) {
            let t = {
                "([\\\\'\"?])": (e) => e,
                a: () => "\x07",
                b: () => "\b",
                "e|E": () => "\x1b",
                f: () => "\f",
                n: () => "\n",
                r: () => "\r",
                t: () => "	",
                v: () => "\v",
                "([0-7]{1,3})": (e) => String.fromCharCode(parseInt(e, 8)),
                "x([0-9a-fA-F]{1,2})": (e) => String.fromCharCode(parseInt(e, 16)),
                "u([0-9a-fA-F]{1,4})": (e) => String.fromCharCode(parseInt(e, 16)),
                "U([0-9a-fA-F]{1,8})": (e) => String.fromCharCode(parseInt(e, 16)),
                "c(.)": (e) => ("?" === e ? "" : "@" === e ? "\0" : String.fromCharCode(31 & e.charCodeAt(0))),
              },
              r = RegExp(n + "(" + Object.keys(t).join("|") + ")", "g")
            return e.replace(r, function (e, r) {
              for (let e in t) {
                let n = RegExp("^" + e + "$").exec(r)
                if (null !== n) return t[e].apply(null, n.slice(1))
              }
            })
          }
        }
        *[Symbol.iterator]() {
          let e,
            t = !1,
            r = !1,
            n = !1,
            s = -2
          for (this.debug && console.log("full input:", ">" + this.string + "<"); ;) {
            let i = this.i,
              o = this.readChar()
            if (
              (this.debug &&
                console.log(
                  "position:",
                  i,
                  "input:",
                  ">" + o + "<",
                  "accumulated:",
                  e,
                  "inQuote:",
                  t,
                  "inDollarQuote:",
                  r,
                  "lastDollar:",
                  s,
                  "escaped:",
                  n,
                ),
              "" === o)
            ) {
              if (t) throw Error("Got EOF while in a quoted string")
              if (n) throw Error("Got EOF while in an escape sequence")
              void 0 !== e && (yield e)
              return
            }
            if (n) {
              ;("\n" === o || (e = t ? (e || "") + n + o : (e || "") + o), (n = !1))
              continue
            }
            if (this.escapes.includes(o) && (!t || !1 !== r || this.escapedQuotes.includes(t))) {
              n = o
              continue
            }
            if (!1 !== t) {
              if (o === t) {
                ;((e = this.processEscapes(e, t, "'" === r)), (t = !1), (r = !1))
                continue
              }
              e = (e || "") + o
              continue
            }
            if (this.quotes.includes(o)) {
              ;((t = o),
                s === i - 1 && ("'" !== o || this.ansiCQuotes) && ('"' !== o || this.localeQuotes) && (r = o),
                (e = e || ""),
                !1 !== r && (e = e.slice(0, -1)))
              continue
            }
            if ((!1 === t && "$" === o && (s = i), this.whitespace.includes(o))) {
              ;(void 0 !== e && (yield e), (e = void 0))
              continue
            }
            e = (e || "") + o
          }
        }
      }
      function s(e) {
        return "" === e
          ? "''"
          : /[^\w@%\-+=:,./]/.test(e)
            ? ("'" + e.replace(/('+)/g, "'\"$1\"'") + "'").replace(/^''|''$/g, "")
            : e
      }
      r.d(
        t,
        {},
        {
          fj: function (e) {
            if (!Array.isArray(e)) throw TypeError("args should be an array")
            return e.map(s).join(" ")
          },
          hD: s,
          lD: function (e) {
            return Array.from(new n(e))
          },
        },
      )
    },
    70408(e, t, r) {
      "use strict"
      ;(r(93609), r(35444), r(45953), r(46600), r(61872), r(46471))
      var n = r(62450)
      ;(r(34116), r.d(t, {}, { Ay: n }))
    },
  }))
//# sourceMappingURL=early-bootstrap-824-d144f7c160c094ea.js.map
