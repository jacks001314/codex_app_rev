const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./zod-C7Kk26Xx.js"),
  n = require("./src-CSKkIr_z.js"),
  r = require("./logger-Bfbyn6HA.js"),
  i = require("./src-C9YLnbgY.js");
let a = require("node:crypto");
a = e.a(a);
let o = require("path"),
  s = require("node:util"),
  c = require("node:fs");
c = e.a(c);
let l = require("node:path");
l = e.a(l);
let u = require("node:os");
u = e.a(u);
let d = require("node:fs/promises");
d = e.a(d);
let f = require("node:stream"),
  p = require("node:child_process"),
  m = require("node:net"),
  h = require("node:process");
h = e.a(h);
let g = require("child_process"),
  _ = require("node:stream/promises"),
  v = require("node:buffer"),
  y = require("node:string_decoder"),
  b = require("node:perf_hooks");
var x = `0.141.0`,
  S = `codex-app-server-version-unsupported:`,
  C = `codex-app-server-version-restart-available:`,
  w = `0.0.0`,
  T = /^.+?\/(?<version>\S+)/,
  E =
    /(?:^|\s)(?<version>\d+\.\d+\.\d+(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?)(?:\s|$)/;
function D(e) {
  return T.exec(e)?.groups?.version ?? null;
}
function O(e) {
  return E.exec(e)?.groups?.version ?? null;
}
function k({ currentVersion: e, installedVersion: t }) {
  return `${C}${e}:${t}`;
}
function A(e) {
  if (!e?.startsWith(`codex-app-server-version-restart-available:`)) return null;
  let [t, n] = e.slice(43).split(`:`, 2);
  return !t || !n ? null : { currentVersion: t, installedVersion: n };
}
function j(e) {
  if (e.startsWith(`Parse Error`)) return { code: `restart-required` };
  let t = A(e);
  return t == null
    ? e.startsWith(`codex-app-server-version-unsupported:`)
      ? { code: `update-required`, minRequiredVersion: x, currentVersion: e.slice(37) }
      : { code: `connection-failed`, message: e }
    : { code: `restart-required`, currentVersion: t.currentVersion, installedVersion: t.installedVersion };
}
function M({ currentVersion: e, installedVersion: t }) {
  return j(k({ currentVersion: e, installedVersion: t }));
}
function N(e) {
  return e === w || n.ia(e, x) >= 0;
}
var P = [
  [`expected active turn id`, `active_turn_mismatch`],
  [`Configuration was modified since last read`, `config_modified`],
  [`os error 28`, `disk_full`],
  [`os error 112`, `disk_full`],
  [`no goal exists`, `goal_not_found`],
  [`Invalid configuration:`, `invalid_config`],
  [`expected any valid TOML value`, `invalid_config`],
  [`AbsolutePathBuf deserialized without a base path`, `invalid_config`],
  [`failed to load configuration:`, `invalid_config`],
  [`no active turn to`, `no_active_turn`],
  [`Codex app-server is not available`, `remote_unavailable`],
  [`thread rollback requires persisted thread history`, `rollback_history_missing`],
  [`rollback already in progress`, `rollback_in_progress`],
  [`no rollout found for thread id`, `rollout_not_found`],
  [`failed to resolve rollout path`, `rollout_not_found`],
  [` is archived`, `thread_archived`],
  [`thread not found:`, `thread_not_found`],
  [`Client specified an invalid argument: unknown thread:`, `thread_not_found`],
  [`Cannot rollback while a turn is in progress`, `turn_in_progress`],
  [`Unauthorized`, `unauthorized`],
  [`auth failed`, `unauthorized`],
];
function F(e) {
  return typeof e == `object` &&
    e &&
    ((`jsonRpcCode` in e && e.jsonRpcCode === -32601) || (`code` in e && e.code === -32601))
    ? !0
    : (e instanceof Error ? e.message : String(e)).includes(
        `process/spawn requires experimentalApi capability`,
      );
}
function I(e, t) {
  if (L(e)) {
    let n = te(t);
    return { "app_server.error_code": e, ...(n == null ? {} : { "app_server.failure_reason": n }) };
  }
  return {};
}
function ee(e) {
  if (typeof e == `object` && e && ((`code` in e && L(e.code)) || (`jsonRpcCode` in e && L(e.jsonRpcCode))))
    return te(e);
}
function te(e) {
  if (typeof e != `object` || !e || !(`message` in e) || typeof e.message != `string`) return;
  let { message: t } = e;
  return t.includes(`Connection for host ID`) && t.includes(` not found`)
    ? `remote_unavailable`
    : P.find(([e]) => t.includes(e))?.[1];
}
function L(e) {
  return (
    typeof e == `number` &&
    Number.isInteger(e) &&
    ((e >= -32099 && e <= -32e3) || e === -32700 || (e >= -32603 && e <= -32600))
  );
}
function ne(e) {
  let t = typeof e == `object` && e && `name` in e ? e.name : null;
  return t === `AbortError`
    ? { "codex.outcome": `canceled` }
    : typeof t == `string` &&
        t.startsWith(`AppServerRequestError(`) &&
        typeof e == `object` &&
        e &&
        `code` in e &&
        typeof e.code == `number`
      ? {
          "codex.outcome": `failure`,
          "error.category": `app_server`,
          "error.type": `operation_failed`,
          ...I(e.code, e),
        }
      : {
          "codex.outcome": `failure`,
          "error.category":
            t === `TimeoutError` ||
            (e instanceof Error &&
              (e.message === `Timeout` || e.message.startsWith(`Timed out waiting for MCP response to `)))
              ? `timeout`
              : `unexpected`,
          "error.type": `operation_failed`,
        };
}
var re = {
  getActiveSpanContext: () => null,
  getActiveTraceContext: () => null,
  runWithTraceContext: (e, t) => t(),
  setActiveSpanAttributes: (e) => {},
  setActiveSpanOutcome: (e, t) => {},
  startSpan: (e, t) => t(),
};
function ie(e) {
  re = e;
}
function ae() {
  return re;
}
function oe(e, t) {
  return ae().startSpan(e, t);
}
function se() {
  return ae().getActiveTraceContext();
}
function ce(e, t) {
  return ae().runWithTraceContext(e, t);
}
function le(e, t) {
  ae().setActiveSpanOutcome(e, t);
}
function ue(e) {
  ae().setActiveSpanAttributes(e);
}
function de(e) {
  return /^\/mnt\/[a-zA-Z](?:\/|$)/.test(e) ? !0 : /^\\{1,2}[Mm][Nn][Tt]\\[a-zA-Z](?:\\|$)/.test(e);
}
function fe(e) {
  return /^[a-zA-Z]:[\\/]/.test(e) ? !0 : e.startsWith(`\\\\`) || e.startsWith(`//`);
}
function pe(e) {
  return /^(\\\\|\/\/)(?:\?[\\/]UNC[\\/])?(wsl\$|wsl\.localhost)[\\/]/i.test(e);
}
function me(e) {
  return e.match(/^(?:\\\\|\/\/)(?:\?[\\/]UNC[\\/])?(?:wsl\$|wsl\.localhost)[\\/]([^\\/]+)/i)?.[1] ?? null;
}
function he(e) {
  let t = e.match(/^\/mnt\/([a-zA-Z])(?:\/(.*))?$/);
  if (t) return `${t[1].toUpperCase()}:\\${(t[2] ?? ``).replace(/\//g, `\\`)}`;
  let n = e.match(/^\\{1,2}[Mm][Nn][Tt]\\([a-zA-Z])(?:\\(.*))?$/i);
  if (n) return `${n[1].toUpperCase()}:\\${(n[2] ?? ``).replace(/[\\/]/g, `\\`)}`;
  let r = e.match(/^C:\\mnt\\c(.*)$/i);
  return r ? `C:\\${r[1].replace(/^([\\/])+/, ``).replace(/[\\/]/g, `\\`)}` : e.replace(/\//g, `\\`);
}
function R(e) {
  let t = e.match(/^(?:\\\\|\/\/)\?[\\/]UNC[\\/](wsl\$|wsl\.localhost)[\\/](.*)$/i);
  if (t) return R(`\\\\${t[1]}\\${t[2]}`);
  let n = e.match(/^(?:\\\\|\/\/)\?[\\/]([a-zA-Z]):[\\/](.*)$/);
  if (n) return `/mnt/${n[1].toLowerCase()}/${n[2].replace(/\\/g, `/`)}`;
  if (/^(\\\\|\/\/)(wsl\$|wsl\.localhost)/i.test(e)) {
    let t = e.replace(/^((\\\\|\/\/)(wsl\$|wsl\.localhost)[\\/]+)/i, ``).split(/[\\/]/);
    t.shift();
    let n = t.join(`/`).replace(/\\/g, `/`);
    return n.length === 0 ? `/` : n.startsWith(`/`) ? n : `/${n}`;
  }
  if (e.startsWith(`\\\\`) || e.startsWith(`//`)) return z(e);
  if (e.startsWith(`/`)) return e;
  let r = e.match(/^([a-zA-Z]):[\\/](.*)$/);
  return r ? `/mnt/${r[1].toLowerCase()}/${r[2].replace(/\\/g, `/`)}` : e.replace(/\\/g, `/`);
}
function z(e) {
  return e.replace(/\//g, `\\`);
}
var ge = class {
  constructor(e) {
    ((this.i = 0),
      (this.string = e),
      (this.whitespace = ` 	\r
`),
      (this.quotes = `'"`),
      (this.escapes = `\\`),
      (this.escapedQuotes = `"`),
      (this.ansiCQuotes = !0),
      (this.localeQuotes = !0),
      (this.debug = !1));
  }
  readChar() {
    return this.string.charAt(this.i++);
  }
  processEscapes(e, t, n) {
    if (!n && !this.escapedQuotes.includes(t)) return e;
    let r = `[` + this.escapes.replace(/(.)/g, `\\$1`) + `]`;
    if (!n && this.escapedQuotes.includes(t)) {
      let n = RegExp(r + `(` + r + `|\\` + t + `)`, `g`);
      return e.replace(n, `$1`);
    }
    if (n) {
      let t = {
          "([\\\\'\"?])": (e) => e,
          a: () => `\x07`,
          b: () => `\b`,
          "e|E": () => `\x1B`,
          f: () => `\f`,
          n: () => `
`,
          r: () => `\r`,
          t: () => `	`,
          v: () => `\v`,
          "([0-7]{1,3})": (e) => String.fromCharCode(parseInt(e, 8)),
          "x([0-9a-fA-F]{1,2})": (e) => String.fromCharCode(parseInt(e, 16)),
          "u([0-9a-fA-F]{1,4})": (e) => String.fromCharCode(parseInt(e, 16)),
          "U([0-9a-fA-F]{1,8})": (e) => String.fromCharCode(parseInt(e, 16)),
          "c(.)": (e) => (e === `?` ? `` : e === `@` ? `\0` : String.fromCharCode(e.charCodeAt(0) & 31)),
        },
        n = RegExp(r + `(` + Object.keys(t).join(`|`) + `)`, `g`);
      return e.replace(n, function (e, n) {
        for (let e in t) {
          let r = RegExp(`^` + e + `$`).exec(n);
          if (r !== null) return t[e].apply(null, r.slice(1));
        }
      });
    }
  }
  *[Symbol.iterator]() {
    let e = !1,
      t = !1,
      n = !1,
      r = -2,
      i;
    for (this.debug && console.log(`full input:`, `>` + this.string + `<`); ;) {
      let a = this.i,
        o = this.readChar();
      if (
        (this.debug &&
          console.log(
            `position:`,
            a,
            `input:`,
            `>` + o + `<`,
            `accumulated:`,
            i,
            `inQuote:`,
            e,
            `inDollarQuote:`,
            t,
            `lastDollar:`,
            r,
            `escaped:`,
            n,
          ),
        o === ``)
      ) {
        if (e) throw Error(`Got EOF while in a quoted string`);
        if (n) throw Error(`Got EOF while in an escape sequence`);
        i !== void 0 && (yield i);
        return;
      }
      if (n) {
        (o ===
          `
` || (i = e ? (i || ``) + n + o : (i || ``) + o),
          (n = !1));
        continue;
      }
      if (this.escapes.includes(o) && (!e || t !== !1 || this.escapedQuotes.includes(e))) {
        n = o;
        continue;
      }
      if (e !== !1) {
        if (o === e) {
          ((i = this.processEscapes(i, e, t === `'`)), (e = !1), (t = !1));
          continue;
        }
        i = (i || ``) + o;
        continue;
      }
      if (this.quotes.includes(o)) {
        ((e = o),
          r === a - 1 && ((o === `'` && !this.ansiCQuotes) || (o === `"` && !this.localeQuotes) || (t = o)),
          (i ||= ``),
          t !== !1 && (i = i.slice(0, -1)));
        continue;
      }
      if ((e === !1 && o === `$` && (r = a), this.whitespace.includes(o))) {
        (i !== void 0 && (yield i), (i = void 0));
        continue;
      }
      i = (i || ``) + o;
    }
  }
};
function _e(e) {
  return Array.from(new ge(e));
}
function ve(e) {
  return e === ``
    ? `''`
    : /[^\w@%\-+=:,./]/.test(e)
      ? (`'` + e.replace(/('+)/g, `'"$1"'`) + `'`).replace(/^''|''$/g, ``)
      : e;
}
function ye(e) {
  if (!Array.isArray(e)) throw TypeError(`args should be an array`);
  return e.map(ve).join(` `);
}
var be = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.sync = e.isexe = void 0));
    var t = require("fs"),
      n = require("fs/promises");
    ((e.isexe = async (e, t = {}) => {
      let { ignoreErrors: i = !1 } = t;
      try {
        return r(await (0, n.stat)(e), t);
      } catch (e) {
        let t = e;
        if (i || t.code === `EACCES`) return !1;
        throw t;
      }
    }),
      (e.sync = (e, n = {}) => {
        let { ignoreErrors: i = !1 } = n;
        try {
          return r((0, t.statSync)(e), n);
        } catch (e) {
          let t = e;
          if (i || t.code === `EACCES`) return !1;
          throw t;
        }
      }));
    var r = (e, t) => e.isFile() && i(e, t),
      i = (e, t) => {
        let n = t.uid ?? process.getuid?.(),
          r = t.groups ?? process.getgroups?.() ?? [],
          i = t.gid ?? process.getgid?.() ?? r[0];
        if (n === void 0 || i === void 0) throw Error(`cannot get uid or gid`);
        let a = new Set([i, ...r]),
          o = e.mode,
          s = e.uid,
          c = e.gid;
        return !!(o & 1 || (o & 8 && a.has(c)) || (o & 64 && s === n) || (o & 72 && n === 0));
      };
  }),
  xe = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.sync = e.isexe = void 0));
    var t = require("fs"),
      n = require("fs/promises");
    ((e.isexe = async (e, t = {}) => {
      let { ignoreErrors: r = !1 } = t;
      try {
        return i(await (0, n.stat)(e), e, t);
      } catch (e) {
        let t = e;
        if (r || t.code === `EACCES`) return !1;
        throw t;
      }
    }),
      (e.sync = (e, n = {}) => {
        let { ignoreErrors: r = !1 } = n;
        try {
          return i((0, t.statSync)(e), e, n);
        } catch (e) {
          let t = e;
          if (r || t.code === `EACCES`) return !1;
          throw t;
        }
      }));
    var r = (e, t) => {
        let { pathExt: n = process.env.PATHEXT || `` } = t,
          r = n.split(`;`);
        if (r.indexOf(``) !== -1) return !0;
        for (let t = 0; t < r.length; t++) {
          let n = r[t].toLowerCase(),
            i = e.substring(e.length - n.length).toLowerCase();
          if (n && i === n) return !0;
        }
        return !1;
      },
      i = (e, t, n) => e.isFile() && r(t, n);
  }),
  Se = e.t((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }),
  Ce = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      r =
        (e && e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(r, e, i);
          return (n(r, e), r);
        },
      i =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.sync = e.isexe = e.posix = e.win32 = void 0));
    var a = r(be());
    e.posix = a;
    var o = r(xe());
    ((e.win32 = o), i(Se(), e));
    var s = (process.env._ISEXE_TEST_PLATFORM_ || process.platform) === `win32` ? o : a;
    ((e.isexe = s.isexe), (e.sync = s.sync));
  }),
  we = e.t((e, t) => {
    var { isexe: n, sync: r } = Ce(),
      { join: i, delimiter: a, sep: o, posix: s } = require("path"),
      c = process.platform === `win32`,
      l = new RegExp(`[${s.sep}${o === s.sep ? `` : o}]`.replace(/(\\)/g, `\\$1`)),
      u = RegExp(`^\\.${l.source}`),
      d = (e) => Object.assign(Error(`not found: ${e}`), { code: `ENOENT` }),
      f = (e, { path: t = process.env.PATH, pathExt: n = process.env.PATHEXT, delimiter: r = a }) => {
        let i = e.match(l) ? [``] : [...(c ? [process.cwd()] : []), ...(t || ``).split(r)];
        if (c) {
          let t = n || [`.EXE`, `.CMD`, `.BAT`, `.COM`].join(r),
            a = t.split(r).flatMap((e) => [e, e.toLowerCase()]);
          return (e.includes(`.`) && a[0] !== `` && a.unshift(``), { pathEnv: i, pathExt: a, pathExtExe: t });
        }
        return { pathEnv: i, pathExt: [``] };
      },
      p = (e, t) => {
        let n = /^".*"$/.test(e) ? e.slice(1, -1) : e;
        return (!n && u.test(t) ? t.slice(0, 2) : ``) + i(n, t);
      },
      m = async (e, t = {}) => {
        let { pathEnv: r, pathExt: i, pathExtExe: a } = f(e, t),
          o = [];
        for (let s of r) {
          let r = p(s, e);
          for (let e of i) {
            let i = r + e;
            if (await n(i, { pathExt: a, ignoreErrors: !0 })) {
              if (!t.all) return i;
              o.push(i);
            }
          }
        }
        if (t.all && o.length) return o;
        if (t.nothrow) return null;
        throw d(e);
      };
    ((t.exports = m),
      (m.sync = (e, t = {}) => {
        let { pathEnv: n, pathExt: i, pathExtExe: a } = f(e, t),
          o = [];
        for (let s of n) {
          let n = p(s, e);
          for (let e of i) {
            let i = n + e;
            if (r(i, { pathExt: a, ignoreErrors: !0 })) {
              if (!t.all) return i;
              o.push(i);
            }
          }
        }
        if (t.all && o.length) return o;
        if (t.nothrow) return null;
        throw d(e);
      }));
  }),
  Te = e.a(we());
function B(e) {
  return e[Ee(e)];
}
function V(e, t) {
  let n = Ee(e);
  if (h.default.platform === `win32`)
    for (let t of Object.keys(e)) t !== n && t.toLowerCase() === `path` && delete e[t];
  e[n] = t;
}
function Ee(e) {
  if (h.default.platform !== `win32`) return `PATH`;
  if (e.Path != null) return `Path`;
  if (e.PATH != null) return `PATH`;
  for (let t of Object.keys(e)) if (t.toLowerCase() === `path`) return t;
  return `Path`;
}
var De = new (class {
    executables = new Map();
    resolve(e, t = {}) {
      if (e.includes(`/`) || (process.platform === `win32` && e.includes(`\\`))) return e;
      let n = t.cwd ?? process.cwd(),
        r = t.env ?? process.env,
        i = B(r),
        a = JSON.stringify([e, n, i, r.PATHEXT]),
        o = this.executables.get(a);
      if (o != null)
        try {
          return ((0, c.accessSync)(o, c.constants.X_OK), o);
        } catch {
          this.executables.delete(a);
        }
      let s = i
          ?.split(l.delimiter)
          .map((e) => (0, l.resolve)(n, e))
          .join(l.delimiter),
        u = Te.default.sync(e, { nothrow: !0, path: s, pathExt: r.PATHEXT });
      return (u != null && this.executables.set(a, u), u);
    }
  })(),
  Oe = new Map(),
  ke = null;
function Ae(e) {
  ke = e;
}
function je() {
  Oe.clear();
}
function Me({ component: e, executablePath: t, source: n, consumer: i = `resolver` }, a, o) {
  if (process.platform !== `win32`) return;
  let s = (e) => {
      let n = t == null ? `..` : (0, l.relative)(e, t);
      return n !== `..` && !n.startsWith(`..${l.sep}`) && !(0, l.isAbsolute)(n);
    },
    c = !1;
  t != null && (c = (0, l.isAbsolute)(t) ? s(o) : null);
  let u = n ?? `bundled`;
  t == null ? (u = `missing`) : (n ?? (a != null && s(a) ? (u = `app-package`) : c && (u = `copied`)));
  let d = `${i}:${e}`,
    f = `${a != null}:${u}:${t}:${c}:${ke}`;
  Oe.get(d) !== f &&
    (Oe.set(d, f),
    r
      .r()
      [t == null && a != null ? `warning` : `info`](`windows_core_runtime_component_resolved`, {
        safe: {
          component: e,
          consumer: i,
          source: u,
          appPackageCoreActive: a != null,
          coreGateEnabledAtStartup: ke,
          copiedRuntimeLocation: c,
          architecture: process.arch,
        },
        sensitive: { executablePath: t },
      }));
}
var Ne = `cua_node`,
  Pe = [`codex-code-mode-host.exe`, `codex-windows-sandbox-setup.exe`, `codex-command-runner.exe`],
  Fe = new Map([
    [`codex.exe`, `codex`],
    [`codex-code-mode-host.exe`, `code-mode-host`],
    [`codex-windows-sandbox-setup.exe`, `sandbox-setup`],
    [`codex-command-runner.exe`, `command-runner`],
    [`rg.exe`, `ripgrep`],
  ]),
  Ie = new Map(),
  Le = new Map(),
  H = null,
  Re = new Set();
function ze(e) {
  let t = [];
  if (e != null)
    try {
      t = (0, c.readdirSync)((0, l.join)(e, `plugins`), { withFileTypes: !0 })
        .filter((e) => e.isDirectory())
        .map((e) => e.name.toLowerCase());
    } catch (e) {
      if (!(e instanceof Error && `code` in e && e.code === `ENOENT`)) throw e;
    }
  ((H = e), (Re = new Set(t)), je());
}
function Be() {
  return H;
}
function Ve(e) {
  return Re.has(e.toLowerCase());
}
function U(e) {
  Me(e, H, ut([`OpenAI`, `Codex`]));
}
function He({
  resourcesPath: e,
  executableName: t,
  platform: n = process.platform,
  windowsDestinationPath: i,
  windowsSiblingExecutableNames: a = [],
}) {
  let o = Fe.get(t);
  if (n === `win32` && o != null && H != null) {
    let e = (0, l.join)(H, t),
      n = _t(e) ? e : null;
    return (U({ component: o, executablePath: n }), n);
  }
  if (!e) return null;
  let s = (0, l.join)(e, t);
  if (n === `win32` && dt(s) && i != null)
    try {
      let e = rt({
        executableName: t,
        sourcePath: s,
        stableDestinationPath: i,
        windowsSiblingExecutableNames: a,
      });
      return (o != null && U({ component: o, executablePath: e }), e);
    } catch (e) {
      let a = e instanceof pt ? e : null;
      return (
        r
          .r()
          .warning(`bundled_executable_relocation_failed`, {
            safe: {
              errorCode: a?.code ?? mt(e),
              executableName: t,
              failedExecutableName: a?.executableName ?? null,
              operation: a?.operation ?? `unknown`,
              platform: n,
              sourceKind: `windowsapps`,
            },
            sensitive: {
              destinationPath: a?.destinationPath ?? i,
              error: e,
              originalError: a?.originalError ?? null,
              sourcePath: a?.sourcePath ?? s,
            },
          }),
        null
      );
    }
  let c = _t(s) ? s : null;
  return (o != null && U({ component: o, executablePath: c }), c);
}
function Ue(e) {
  return He({
    resourcesPath: e,
    executableName: process.platform === `win32` ? `rg.exe` : `rg`,
    windowsDestinationPath: process.platform === `win32` ? ut([`OpenAI`, `Codex`, `bin`, `rg.exe`]) : null,
  });
}
function We(e) {
  let t = Ze({
    executableName: process.platform === `win32` ? `node_repl.exe` : `node_repl`,
    resourcesPath: e,
  });
  return (U({ component: `node-repl`, executablePath: t }), t);
}
function Ge(e) {
  let t = Ze({ executableName: process.platform === `win32` ? `node.exe` : `node`, resourcesPath: e });
  return (U({ component: `node`, executablePath: t }), t);
}
function Ke(e) {
  let t = Ze({ executableName: process.platform === `win32` ? `node.exe` : `node`, resourcesPath: e });
  if (t == null) return [];
  let n = (0, l.dirname)((0, l.dirname)(t)),
    r = (0, l.join)(n, process.platform === `win32` ? `bin` : `lib`, `node_modules`);
  return ft(r) ? [r] : [];
}
function qe(e, t = process.arch) {
  let n = Qe(e, [
    `bin`,
    `windows`,
    t === `arm64` ? `codex-computer-use-arm64.exe` : `codex-computer-use.exe`,
  ]);
  return (U({ component: `cua-helper`, executablePath: n }), n);
}
function Je(e) {
  let t = Qe(e, [
    `bin`,
    `windows`,
    `swift`,
    process.arch === `arm64` ? `arm64` : `x64`,
    `codex-computer-use-swift.exe`,
  ]);
  return (U({ component: `cua-swift-helper`, executablePath: t }), t);
}
function Ye(e) {
  return Qe(e, [
    `dist`,
    `project`,
    `cua`,
    `sky_js`,
    `src`,
    `targets`,
    `windows`,
    `internal`,
    `helper_transport.js`,
  ]);
}
function Xe(e) {
  if (process.platform === `darwin`) {
    if (e == null) return null;
    let t = (0, l.join)(e, `codex-cli`, `CodexCLI.app`, `Contents`, `MacOS`, `codex`);
    return _t(t) ? t : null;
  }
  let t = process.platform === `win32` ? `codex.exe` : `codex`,
    n = process.platform === `win32` ? ut([`OpenAI`, `Codex`, `bin`, `codex.exe`]) : null,
    r = H == null && e != null && n != null && dt((0, l.join)(e, t)) ? e : null;
  if (r != null && n != null) {
    let e = Ie.get(r);
    if (e != null) {
      if (
        (0, l.dirname)((0, l.dirname)(e.executablePath)) === (0, l.dirname)(n) &&
        [t, ...Pe].every((t, n) => {
          let r = gt((0, l.join)((0, l.dirname)(e.executablePath), t)),
            i = e.executableStats[n];
          return (
            i != null &&
            r?.isFile() === !0 &&
            r.size === i.size &&
            r.mtimeMs === i.mtimeMs &&
            r.ctimeMs === i.ctimeMs
          );
        })
      )
        return e.executablePath;
      Ie.delete(r);
    }
  }
  let i = He({
    resourcesPath: e,
    executableName: t,
    windowsSiblingExecutableNames: Pe,
    windowsDestinationPath: n,
  });
  if (r != null && i != null) {
    let e = [t, ...Pe].map((e) => gt((0, l.join)((0, l.dirname)(i), e)));
    e.every((e) => e?.isFile() === !0) && Ie.set(r, { executablePath: i, executableStats: e });
  }
  return i;
}
function Ze({ executableName: e, resourcesPath: t }) {
  let n = nt(t);
  if (n == null) return null;
  let i = (0, l.join)(n, `bin`, e);
  if (!_t(i)) return null;
  if (process.platform === `win32` && H != null) return i;
  if (process.platform === `win32` && dt(i))
    try {
      return $e({ executableName: e, runtimeRoot: n });
    } catch (t) {
      let n = t instanceof pt ? t : null;
      return (
        r
          .r()
          .warning(`bundled_executable_relocation_failed`, {
            safe: {
              errorCode: n?.code ?? mt(t),
              executableName: e,
              failedExecutableName: n?.executableName ?? null,
              operation: n?.operation ?? `unknown`,
              platform: process.platform,
              sourceKind: `windowsapps`,
            },
            sensitive: {
              destinationPath: n?.destinationPath ?? null,
              error: t,
              originalError: n?.originalError ?? null,
              sourcePath: n?.sourcePath ?? i,
            },
          }),
        null
      );
    }
  return i;
}
function Qe(e, t) {
  let n = Ke(e)[0];
  if (n == null) return null;
  let r = (0, l.join)(n, `@oai`, `sky`, ...t);
  return _t(r) ? r : null;
}
function $e({ executableName: e, runtimeRoot: t }) {
  let n = ut([`OpenAI`, `Codex`, `runtimes`, Ne]),
    r = Le.get(t);
  if (r != null) {
    let n = (0, l.join)(r, `bin`, e);
    if (_t(n) && ft((0, l.join)(r, `bin`, `node_modules`))) return n;
    Le.delete(t);
  }
  let i = [`manifest.json`, `bin/node.exe`, `bin/node_repl.exe`].map((e) =>
      it({ destinationPath: n, executableName: e, sourcePath: (0, l.join)(t, e) }),
    ),
    a = at(i).slice(0, 16),
    o = (0, l.join)(n, a),
    s = (0, l.join)(o, `bin`, e);
  if (ot(o, i) && ft((0, l.join)(o, `bin`, `node_modules`)))
    return (
      lt({ currentHash: a, destinationRoot: n, executableName: (0, l.join)(`bin`, e) }),
      Le.set(t, o),
      s
    );
  ((0, c.existsSync)(o) &&
    W({ destinationPath: o, executableName: e, operation: `remove_destination`, sourcePath: t }, () =>
      (0, c.rmSync)(o, { force: !0, recursive: !0 }),
    ),
    W({ destinationPath: n, executableName: e, operation: `mkdir_destination`, sourcePath: t }, () =>
      (0, c.mkdirSync)(n, { recursive: !0 }),
    ));
  let u = W({ destinationPath: n, executableName: e, operation: `mkdir_staging`, sourcePath: t }, () =>
    (0, c.mkdtempSync)((0, l.join)(n, `.staging-${a}-`)),
  );
  try {
    (W({ destinationPath: u, executableName: e, operation: `copy_directory`, sourcePath: t }, () => tt(t, u)),
      W({ destinationPath: o, executableName: e, operation: `rename_staging`, sourcePath: u }, () =>
        (0, c.renameSync)(u, o),
      ));
  } catch (e) {
    try {
      (0, c.rmSync)(u, { force: !0, recursive: !0 });
    } catch {}
    if (ot(o, i) && ft((0, l.join)(o, `bin`, `node_modules`))) return (Le.set(t, o), s);
    throw e;
  }
  return (lt({ currentHash: a, destinationRoot: n, executableName: (0, l.join)(`bin`, e) }), Le.set(t, o), s);
}
function et(e, t) {
  try {
    (0, c.copyFileSync)(e, t);
  } catch (n) {
    if (
      !(n instanceof Error) ||
      !(`errno` in n) ||
      (n.errno !== 6e3 && (n.errno !== -4094 || !(`code` in n) || n.code !== `UNKNOWN`))
    )
      throw n;
    (0, c.writeFileSync)(t, (0, c.readFileSync)(e));
  }
}
function tt(e, t) {
  (0, c.mkdirSync)(t, { recursive: !0 });
  for (let n of (0, c.readdirSync)(e, { withFileTypes: !0 })) {
    let r = (0, l.join)(e, n.name),
      i = (0, l.join)(t, n.name);
    if (n.isDirectory()) {
      tt(r, i);
      continue;
    }
    et(r, i);
  }
}
function nt(e) {
  let t = H ?? e;
  if (!t) return null;
  let n = (0, l.join)(t, Ne);
  if (!ft(n)) return null;
  if (process.platform === `linux`)
    try {
      return (0, c.realpathSync)(n);
    } catch {
      return null;
    }
  return n;
}
function rt({
  executableName: e,
  sourcePath: t,
  stableDestinationPath: n,
  windowsSiblingExecutableNames: r,
}) {
  let i = (0, l.dirname)(t),
    a = [e, ...r].map((e) => it({ destinationPath: n, executableName: e, sourcePath: (0, l.join)(i, e) })),
    o = at(a).slice(0, 16),
    s = (0, l.dirname)(n),
    u = (0, l.join)(s, o),
    d = (0, l.join)(u, e);
  if (ot(u, a)) return (lt({ currentHash: o, destinationRoot: s, executableName: e }), d);
  ((0, c.existsSync)(u) &&
    W({ destinationPath: u, executableName: e, operation: `remove_destination`, sourcePath: t }, () =>
      (0, c.rmSync)(u, { force: !0, recursive: !0 }),
    ),
    W({ destinationPath: s, executableName: e, operation: `mkdir_destination`, sourcePath: t }, () =>
      (0, c.mkdirSync)(s, { recursive: !0 }),
    ));
  let f = W({ destinationPath: s, executableName: e, operation: `mkdir_staging`, sourcePath: t }, () =>
    (0, c.mkdtempSync)((0, l.join)(s, `.staging-${o}-`)),
  );
  try {
    for (let e of a) {
      let t = (0, l.join)(f, e.executableName);
      W(
        {
          destinationPath: t,
          executableName: e.executableName,
          operation: `copy_file`,
          sourcePath: e.sourcePath,
        },
        () => et(e.sourcePath, t),
      );
    }
    W({ destinationPath: u, executableName: e, operation: `rename_staging`, sourcePath: f }, () =>
      (0, c.renameSync)(f, u),
    );
  } catch (e) {
    try {
      (0, c.rmSync)(f, { force: !0, recursive: !0 });
    } catch {}
    if (ot(u, a)) return d;
    throw e;
  }
  return (lt({ currentHash: o, destinationRoot: s, executableName: e }), d);
}
function it({ destinationPath: e, executableName: t, sourcePath: n }) {
  let r = W({ destinationPath: e, executableName: t, operation: `stat_source`, sourcePath: n }, () =>
    (0, c.statSync)(n),
  );
  if (!r.isFile())
    throw new pt({
      context: { destinationPath: e, executableName: t, operation: `stat_source`, sourcePath: n },
      originalError: Error(`Bundled executable source is not a file`),
    });
  return {
    digest: ct({
      destinationPath: e,
      executableName: t,
      filePath: n,
      operation: `hash_source`,
      sourcePath: n,
    }),
    executableName: t,
    size: r.size,
    sourcePath: n,
  };
}
function at(e) {
  let t = (0, a.createHash)(`sha256`);
  for (let n of e) (t.update(n.executableName), t.update(`\0`), t.update(n.digest), t.update(`\0`));
  return t.digest(`hex`);
}
function ot(e, t) {
  return t.every((t) => st((0, l.join)(e, t.executableName), t));
}
function st(e, t) {
  let n = ht({
    destinationPath: e,
    executableName: t.executableName,
    filePath: e,
    operation: `stat_destination`,
    sourcePath: t.sourcePath,
  });
  return (
    n != null &&
    n.isFile() &&
    n.size === t.size &&
    ct({
      destinationPath: e,
      executableName: t.executableName,
      filePath: e,
      operation: `hash_destination`,
      sourcePath: t.sourcePath,
    }) === t.digest
  );
}
function ct({ destinationPath: e, executableName: t, operation: n, sourcePath: r, filePath: i }) {
  return (0, a.createHash)(`sha256`)
    .update(
      W({ destinationPath: e, executableName: t, operation: n, sourcePath: r }, () => (0, c.readFileSync)(i)),
    )
    .digest(`hex`);
}
function lt({ currentHash: e, destinationRoot: t, executableName: n }) {
  try {
    for (let r of (0, c.readdirSync)(t, { withFileTypes: !0 }))
      r.isDirectory() &&
        (r.name.startsWith(`.staging-${e}-`) ||
          (r.name !== e && /^[0-9a-f]{16}$/.test(r.name) && (0, c.existsSync)((0, l.join)(t, r.name, n)))) &&
        (0, c.rmSync)((0, l.join)(t, r.name), { force: !0, recursive: !0 });
  } catch {}
}
function ut(e) {
  let t = process.env.LOCALAPPDATA ?? (0, l.join)((0, u.homedir)(), `AppData`, `Local`);
  return (0, l.join)(t, ...e);
}
function dt(e) {
  return e.replaceAll(`/`, `\\`).toLowerCase().includes(`\\program files\\windowsapps\\`);
}
function ft(e) {
  try {
    return (0, c.statSync)(e).isDirectory();
  } catch {
    return !1;
  }
}
var pt = class extends Error {
  code;
  constructor({ context: e, originalError: t }) {
    (super(`Bundled executable relocation failed during ${e.operation}`),
      (this.name = `BundledExecutableRelocationError`),
      (this.destinationPath = e.destinationPath),
      (this.executableName = e.executableName),
      (this.operation = e.operation),
      (this.originalError = t),
      (this.sourcePath = e.sourcePath),
      (this.code = mt(t)));
  }
  destinationPath;
  executableName;
  operation;
  originalError;
  sourcePath;
};
function W(e, t) {
  try {
    return t();
  } catch (t) {
    throw new pt({ context: e, originalError: t });
  }
}
function mt(e) {
  return typeof e != `object` || !e || !(`code` in e) ? null : (e.code ?? null);
}
function ht({ destinationPath: e, executableName: t, operation: n, sourcePath: r, filePath: i }) {
  return (0, c.existsSync)(i)
    ? W({ destinationPath: e, executableName: t, operation: n, sourcePath: r }, () => (0, c.statSync)(i))
    : null;
}
function gt(e) {
  if (!(0, c.existsSync)(e)) return null;
  try {
    return (0, c.statSync)(e);
  } catch {
    return null;
  }
}
function _t(e) {
  let t = gt(e);
  return t != null && t.isFile();
}
var vt = new Set([
  `BREAKPAD_DUMP_LOCATION`,
  `CHROME_CRASHPAD_PIPE_NAME`,
  `CRASHPAD_HANDLER_PID`,
  `ELECTRON_CRASH_REPORTER_PROCESS_TYPE`,
  `__CFBUNDLEIDENTIFIER`,
]);
function G(e) {
  let t = { ...e };
  for (let e of Object.keys(t)) vt.has(e.toUpperCase()) && delete t[e];
  return t;
}
var yt,
  K = void 0,
  bt = [],
  xt,
  St = 0,
  Ct = new Map(),
  wt = new Map(),
  Tt = new Map(),
  q,
  Et = 0,
  Dt,
  Ot = `/usr/bin/bash`,
  kt = 3e4,
  At = 3e3,
  jt = 3e4,
  Mt = `__CODEX_WSL_PATH_START__`,
  Nt = `__CODEX_WSL_PATH_END__`,
  Pt = class extends Error {
    constructor() {
      (super(
        `Codex CLI couldn't start in the current WSL distribution because it doesn't provide a supported bash shell`,
      ),
        (this.name = `UnsupportedWslShellError`));
    }
  },
  Ft = [
    { name: `PATHEXT`, type: `list` },
    { name: `COMSPEC`, type: `path` },
    { name: `SYSTEMROOT`, type: `path` },
    `SYSTEMDRIVE`,
    `USERNAME`,
    `USERDOMAIN`,
    { name: `USERPROFILE`, type: `path` },
    { name: `PROGRAMFILES`, type: `path` },
    { name: `PROGRAMFILES(X86)`, type: `path` },
    { name: `PROGRAMW6432`, type: `path` },
    { name: `PROGRAMDATA`, type: `path` },
    { name: `LOCALAPPDATA`, type: `path` },
    { name: `APPDATA`, type: `path` },
    `POWERSHELL`,
    `PWSH`,
    `HTTP_PROXY`,
    `HTTPS_PROXY`,
    `NO_PROXY`,
    `NODE_TLS_REJECT_UNAUTHORIZED`,
  ];
function It(e) {
  if (yt) throw Error(`shouldSpawnInsideWsl already set`);
  yt = e;
}
function Lt() {
  if (!yt) {
    if (process.env.NODE_ENV === `test` || process.env.VITEST != null) return !1;
    throw Error(`shouldSpawnInsideWsl not set`);
  }
  return yt();
}
function Rt(e) {
  return (e == null || (n.Ri(e.id) == null && !n.Hi(e))) && Lt();
}
function zt(e = !1) {
  if (process.platform !== `win32`) return null;
  if (!e && K !== void 0)
    return (
      r
        .r()
        .debug(`wsl_discovery_cache_hit`, {
          safe: { mode: `sync`, result: K == null ? `empty` : `found` },
          sensitive: {},
        }),
      K
    );
  St += 1;
  let t = sn(St);
  return (t !== void 0 && (K = t), t ?? null);
}
async function Bt(e = !1) {
  return (await Vt(e)) ?? null;
}
async function Vt(e = !1) {
  if (process.platform !== `win32`) return null;
  if (!e && K !== void 0)
    return (
      r
        .r()
        .debug(`wsl_discovery_cache_hit`, {
          safe: { mode: `async`, result: K == null ? `empty` : `found` },
          sensitive: {},
        }),
      K
    );
  if (!e && xt != null) return xt;
  let t = ++St,
    n = cn(t);
  xt = n;
  try {
    let e = await n;
    return (e !== void 0 && St === t && (K = e), e);
  } finally {
    xt === n && (xt = void 0);
  }
}
async function Ht(e = !1) {
  return process.platform === `win32` ? (await Bt(e), bt) : [];
}
async function Ut() {
  let e = await Wt();
  return e.status === `failed` ? { available: !1, distro: null } : e.availability;
}
async function Wt(e = !1) {
  let t = await Vt(e);
  return t === void 0 ? { status: `failed` } : { status: `success`, availability: await Gt(t) };
}
async function Gt(e) {
  if (e == null) return { available: !1, distro: null };
  let t = performance.now();
  return new Promise((n) => {
    (0, g.execFile)(
      `wsl.exe`,
      [`-d`, e, `--`, Ot, `-lc`, `exit 0`],
      { encoding: `utf8`, env: G(process.env), timeout: kt, windowsHide: !0 },
      (i, a, o) => {
        if (i != null) {
          (r
            .r()
            .debug(`WSL bash availability check failed`, {
              safe: {
                stage: `bash`,
                mode: `async`,
                elapsedMs: Math.round(performance.now() - t),
                timeoutMs: kt,
                code: i.code === `ETIMEDOUT` ? `ETIMEDOUT` : null,
              },
              sensitive: { distro: e, error: i, stderr: o ?? `` },
            }),
            n({ available: !1, distro: e }));
          return;
        }
        n({ available: !0, distro: e });
      },
    );
  });
}
function Kt(e = Ft) {
  return pn(e).join(`:`);
}
function qt(e, t) {
  let n = new Set(t.map(mn));
  return [
    ...(e ?? ``)
      .split(`:`)
      .map((e) => e.trim())
      .filter((e) => e.length > 0)
      .filter((e) => !n.has(hn(e))),
    ...pn(t),
  ].join(`:`);
}
function Jt(e, t = !1) {
  if (process.platform !== `win32`) return null;
  if (!t && Ct.has(e)) return Ct.get(e) ?? null;
  let n = (Tt.get(e) ?? 0) + 1;
  Tt.set(e, n);
  let i = vn(
    an(
      [`-d`, e, `--`, Ot, `-ilc`, `printf '%s\n' '${Mt}'; printf '%s\n' "$PATH"; printf '%s\n' '${Nt}'`],
      `getInteractivePathFromWslBash(${e})`,
      r.r(),
    ) ?? null,
    Mt,
    Nt,
  );
  return (Tt.get(e) === n && Ct.set(e, i), i);
}
async function Yt(e, t = !1) {
  if (process.platform !== `win32`) return null;
  if (!t && Ct.has(e)) return Ct.get(e) ?? null;
  let n = wt.get(e);
  if (!t && n != null) return n;
  let i = (Tt.get(e) ?? 0) + 1;
  Tt.set(e, i);
  let a = (async () =>
    vn(
      (await on(
        [`-d`, e, `--`, Ot, `-ilc`, `printf '%s\n' '${Mt}'; printf '%s\n' "$PATH"; printf '%s\n' '${Nt}'`],
        `getInteractivePathFromWslBash(${e})`,
        r.r(),
      )) ?? null,
      Mt,
      Nt,
    ))();
  wt.set(e, a);
  try {
    let t = await a;
    return (Tt.get(e) === i && Ct.set(e, t), t);
  } finally {
    wt.get(e) === a && wt.delete(e);
  }
}
function Xt(e) {
  return [`-d`, e.distro, `--cd`, e.cwd ?? `.`, `--exec`, Ot, `-lc`, e.command];
}
function Zt() {
  if (q !== void 0) return q;
  if (Date.now() < Et) return;
  let e = r.r(),
    t = en(e);
  if (!t) {
    Et = Date.now() + jt;
    return;
  }
  if (fe(t)) return ((q = z(t)), q);
  if (de(t)) return ((q = z(he(t))), q);
  let n = nn(t, e);
  if (n) return ((q = n), n);
  (e.warning(`[resolveCodexHomeFromWsl] Unable to translate Linux path`, {
    safe: {},
    sensitive: { linuxPath: t },
  }),
    (Et = Date.now() + jt));
}
async function Qt() {
  if (q !== void 0) return q;
  if (Date.now() < Et) return;
  if (Dt != null) return Dt;
  let e = $t();
  Dt = e;
  try {
    let t = await e;
    return (t == null ? (Et = Date.now() + jt) : ((q = t), (Et = 0)), t);
  } finally {
    Dt === e && (Dt = void 0);
  }
}
async function $t() {
  let e = r.r(),
    t = await tn(e);
  if (!t) return;
  if (fe(t)) return z(t);
  if (de(t)) return z(he(t));
  let n = await rn(t, e);
  if (n) return n;
  e.warning(`[resolveCodexHomeFromWsl] Unable to translate Linux path`, {
    safe: {},
    sensitive: { linuxPath: t },
  });
}
function en(e) {
  return an(
    [`/usr/bin/env`, `bash`, `-lc`, 'printf %s "${CODEX_HOME:-$HOME/.codex}"'],
    `readCodexHomePathFromWslEnv`,
    e,
  );
}
async function tn(e) {
  return on(
    [`/usr/bin/env`, `bash`, `-lc`, 'printf %s "${CODEX_HOME:-$HOME/.codex}"'],
    `readCodexHomePathFromWslEnv`,
    e,
  );
}
function nn(e, t) {
  let n = an([`wslpath`, `-w`, e], `resolveCodexHomeFromWsl:wslpath(${e})`, t);
  return n ? z(n) : void 0;
}
async function rn(e, t) {
  let n = await on([`wslpath`, `-w`, e], `resolveCodexHomeFromWsl:wslpath(${e})`, t);
  return n ? z(n) : void 0;
}
function an(e, t, n) {
  try {
    let r = (0, g.spawnSync)(`wsl.exe`, e, { encoding: `utf8`, env: G(process.env), windowsHide: !0 });
    if (r.error) {
      n.debug(`WSL command error`, { safe: { context: t }, sensitive: { error: r.error } });
      return;
    }
    if (r.status !== 0) {
      n.debug(`WSL command non-zero exit`, {
        safe: { context: t },
        sensitive: { status: r.status, stderr: r.stderr ?? `` },
      });
      return;
    }
    let i = r.stdout.trim();
    if (!i) {
      n.warning(`WSL command returned empty output`, { safe: { context: t }, sensitive: {} });
      return;
    }
    return i;
  } catch (e) {
    n.warning(`WSL command unexpected error`, { safe: { context: t }, sensitive: { error: e } });
    return;
  }
}
async function on(e, t, n) {
  return new Promise((r) => {
    (0, g.execFile)(
      `wsl.exe`,
      e,
      { encoding: `utf8`, env: G(process.env), timeout: kt, windowsHide: !0 },
      (e, i, a) => {
        if (e != null) {
          (n.debug(`WSL command error`, { safe: { context: t }, sensitive: { error: e, stderr: a ?? `` } }),
            r(void 0));
          return;
        }
        let o = i.trim();
        if (!o) {
          (n.warning(`WSL command returned empty output`, { safe: { context: t }, sensitive: {} }),
            r(void 0));
          return;
        }
        r(o);
      },
    );
  });
}
function sn(e) {
  let t = r.r(),
    n = `status`,
    i = performance.now();
  try {
    (un(`wsl.exe`, [`--status`], t), (n = `verbose-list`), (i = performance.now()));
    let r = un(`wsl.exe`, [`--list`, `--verbose`], t),
      a = _n(r),
      o = gn(r);
    ((n = `quiet-list`), (i = performance.now()));
    let s = o == null ? un(`wsl.exe`, [`--list`, `--quiet`], t) : ``;
    return (
      t.info(`[wsl] eligible distro list`, {
        safe: {
          mode: `sync`,
          lookupGeneration: e,
          result: o == null ? `fallback` : `default`,
          eligibleCount: a.length,
        },
        sensitive: {},
      }),
      St === e && (bt = a),
      o ?? ln(``, s)
    );
  } catch (r) {
    let a = r instanceof Error && r.cause != null ? r.cause : r,
      o = typeof a == `object` && a && `code` in a ? a.code : null,
      s = typeof a == `object` && a && `status` in a ? a.status : null,
      c = typeof a == `object` && a && `signal` in a ? a.signal : null;
    t.error(`[wsl] error retrieving eligible distro`, {
      safe: {
        stage: n,
        mode: `sync`,
        lookupGeneration: e,
        elapsedMs: Math.round(performance.now() - i),
        timeoutMs: At,
        code: o === `ETIMEDOUT` ? `ETIMEDOUT` : `other`,
        exitStatus: typeof s == `number` ? s : null,
        signal: c === `SIGTERM` || c === `SIGKILL` ? c : null,
        retainedDistro: K != null,
        retainedDistroCount: bt.length,
      },
      sensitive: { error: r },
    });
    return;
  }
}
async function cn(e) {
  let t = r.r(),
    n = `status`,
    i = performance.now();
  try {
    (await dn(`wsl.exe`, [`--status`], t), (n = `verbose-list`), (i = performance.now()));
    let r = await dn(`wsl.exe`, [`--list`, `--verbose`], t),
      a = _n(r),
      o = gn(r);
    ((n = `quiet-list`), (i = performance.now()));
    let s = o == null ? await dn(`wsl.exe`, [`--list`, `--quiet`], t) : ``;
    return (
      t.info(`[wsl] eligible distro list`, {
        safe: {
          mode: `async`,
          lookupGeneration: e,
          result: o == null ? `fallback` : `default`,
          eligibleCount: a.length,
        },
        sensitive: {},
      }),
      St === e && (bt = a),
      o ?? ln(``, s)
    );
  } catch (r) {
    let a = r instanceof Error && r.cause != null ? r.cause : r,
      o = typeof a == `object` && a && `code` in a ? a.code : null,
      s = typeof a == `object` && a && `status` in a ? a.status : null,
      c = typeof a == `object` && a && `signal` in a ? a.signal : null;
    t.error(`[wsl] error retrieving eligible distro`, {
      safe: {
        stage: n,
        mode: `async`,
        lookupGeneration: e,
        elapsedMs: Math.round(performance.now() - i),
        timeoutMs: At,
        code: o === `ETIMEDOUT` ? `ETIMEDOUT` : `other`,
        exitStatus: typeof s == `number` ? s : null,
        signal: c === `SIGTERM` || c === `SIGKILL` ? c : null,
        retainedDistro: K != null,
        retainedDistroCount: bt.length,
      },
      sensitive: { error: r },
    });
    return;
  }
}
function ln(e, t) {
  return (
    gn(e) ||
    (t
      .split(
        `
`,
      )
      .map((e) => e.trim())
      .find((e) => e.toLowerCase().startsWith(`ubuntu`)) ??
      null)
  );
}
function un(e, t, n) {
  return (
    n.debug(`[execWindowsCommand] executing`, { safe: { command: e, args: t.join(` `) }, sensitive: {} }),
    fn(
      (0, g.execFileSync)(e, t, {
        timeout: At,
        env: G(process.env),
        windowsHide: !0,
        encoding: `buffer`,
        maxBuffer: 10240,
      }),
    )
  );
}
async function dn(e, t, n) {
  return (
    n.debug(`[execWindowsCommand] executing`, { safe: { command: e, args: t.join(` `) }, sensitive: {} }),
    new Promise((n, r) => {
      (0, g.execFile)(
        e,
        t,
        { timeout: At, env: G(process.env), windowsHide: !0, encoding: `buffer`, maxBuffer: 10240 },
        (e, t) => {
          if (e != null) {
            r(Error(e.message, { cause: e }));
            return;
          }
          n(fn(t));
        },
      );
    })
  );
}
function fn(e) {
  let t;
  if (Buffer.isBuffer(e)) {
    let n = e;
    if (n.length === 0) return ``;
    if (n.length >= 2 && n[0] === 255 && n[1] === 254) t = n.subarray(2).toString(`utf16le`);
    else if (n.length >= 3 && n[0] === 239 && n[1] === 187 && n[2] === 191)
      t = n.subarray(3).toString(`utf8`);
    else {
      let e = Math.min(n.length - (n.length % 2), 256),
        r = !1;
      if (e > 0) {
        let t = 0,
          i = 0;
        for (let r = 0; r < e; r += 2) (i++, n[r + 1] === 0 && t++);
        r = i > 0 && t / i > 0.6;
      }
      t = r ? n.toString(`utf16le`) : n.toString(`utf8`);
    }
  } else t = e;
  return t
    .replace(/^\uFEFF/, ``)
    .replace(
      /\r\n/g,
      `
`,
    )
    .trim();
}
function pn(e) {
  return e
    .map((e) => {
      if (typeof e == `string`) return e;
      switch (e.type) {
        case `path`:
          return `${e.name}/p`;
        case `list`:
          return `${e.name}/l`;
        case `unix-only`:
          return `${e.name}/u`;
        case `windows-only`:
          return `${e.name}/w`;
      }
    })
    .filter((e) => e != null);
}
function mn(e) {
  return typeof e == `string` ? e : e.name;
}
function hn(e) {
  return e.split(`/`, 1)[0] ?? e;
}
function gn(e) {
  let t = e
    .split(
      `
`,
    )
    .map((e) => e.trim())
    .find((e) => e.startsWith(`*`));
  return (
    (t &&
      t
        .slice(1)
        .trim()
        .split(/\s{2,}|\t+/)[0]) ||
    null
  );
}
function _n(e) {
  let t = gn(e),
    n = e
      .split(
        `
`,
      )
      .slice(1)
      .map((e) => e.replace(/^\s*\*?\s*/, ``).split(/\s{2,}|\t+/))
      .filter(([, , e]) => e === `2`)
      .map(([e]) => e)
      .filter((e) => e != null);
  return t == null || !n.includes(t) ? n : [t, ...n.filter((e) => e !== t)];
}
function vn(e, t, n) {
  if (e == null) return null;
  let r = e.split(`
`),
    i = r.indexOf(t);
  if (i === -1) return null;
  let a = r.indexOf(n, i + 1);
  return a === -1 || a <= i + 1
    ? null
    : r.slice(i + 1, a).join(`
`);
}
function yn(e, t = zt()) {
  if (fe(e) || pe(e)) return z(e);
  if (de(e)) return z(he(e));
  if (!e.startsWith(`/`) || t == null) return e;
  let n = e.replace(/^\/+/, ``).replace(/\//g, `\\`);
  return n.length === 0 ? `\\\\wsl$\\${t}\\` : `\\\\wsl$\\${t}\\${n}`;
}
function bn({ preferWsl: e = !1 } = {}) {
  let t = r.r();
  if (e && process.platform === `win32`) {
    let e = Zt();
    if (e) return e;
    t.info(
      `[resolveCodexHome] Falling back to host home directory because WSL CODEX_HOME could not be resolved`,
    );
  }
  return process.env.CODEX_HOME ?? l.join(u.homedir(), `.codex`);
}
async function xn({ preferWsl: e = !1 } = {}) {
  let t = r.r();
  if (e && process.platform === `win32`) {
    let e = await Qt();
    if (e) return e;
    t.info(
      `[resolveCodexHome] Falling back to host home directory because WSL CODEX_HOME could not be resolved`,
    );
  }
  return process.env.CODEX_HOME ?? l.join(u.homedir(), `.codex`);
}
new Set(Object.values(n.Ti));
function Sn() {
  return [`cli`];
}
var Cn = class {
    options;
    items = [];
    readIndex = 0;
    queueDepthHighWaterMark = 0;
    nextDepthThresholdIndex = 0;
    constructor(e) {
      this.options = e;
    }
    enqueue(e) {
      return this.enqueueMany([e]);
    }
    enqueueMany(e) {
      if (e.length === 0) return [];
      (this.maybeCompact(!1), this.items.push(...e));
      let t = this.getDepth();
      t > this.queueDepthHighWaterMark && (this.queueDepthHighWaterMark = t);
      let n = [];
      for (
        ;
        this.nextDepthThresholdIndex < this.options.depthThresholds.length &&
        t >= this.options.depthThresholds[this.nextDepthThresholdIndex];
      ) {
        let e = this.options.depthThresholds[this.nextDepthThresholdIndex];
        ((this.nextDepthThresholdIndex += 1),
          n.push({ threshold: e, queueDepth: t, queueDepthHighWaterMark: this.queueDepthHighWaterMark }));
      }
      return n;
    }
    drain(e) {
      if (this.getDepth() === 0)
        return {
          drainedCount: 0,
          remainingCount: 0,
          durationMs: 0,
          queueDepthHighWaterMark: this.queueDepthHighWaterMark,
          drainedAll: !0,
        };
      let t = Date.now(),
        n = 0;
      for (; this.readIndex < this.items.length;) {
        let r = this.items[this.readIndex];
        if (
          (delete this.items[this.readIndex],
          (this.readIndex += 1),
          e.onItem(r),
          (n += 1),
          !e.flushAll && (n >= e.maxItemsPerSlice || Date.now() - t >= e.maxSliceMs))
        )
          break;
      }
      let r = this.getDepth(),
        i = Date.now() - t,
        a = this.queueDepthHighWaterMark;
      return r === 0
        ? ((this.items.length = 0),
          (this.readIndex = 0),
          this.resetDepthTracking(),
          { drainedCount: n, remainingCount: 0, durationMs: i, queueDepthHighWaterMark: a, drainedAll: !0 })
        : (this.maybeCompact(!1),
          {
            drainedCount: n,
            remainingCount: this.getDepth(),
            durationMs: i,
            queueDepthHighWaterMark: a,
            drainedAll: !1,
          });
    }
    clear() {
      ((this.items.length = 0), (this.readIndex = 0), this.resetDepthTracking());
    }
    getDepth() {
      return this.items.length - this.readIndex;
    }
    maybeCompact(e) {
      let t = this.readIndex;
      if (t === 0) return;
      let n = this.getDepth();
      (e || (t >= this.options.compactionMinConsumedItems && t >= n)) &&
        (n > 0 && this.items.copyWithin(0, t), (this.items.length = n), (this.readIndex = 0));
    }
    resetDepthTracking() {
      ((this.queueDepthHighWaterMark = 0), (this.nextDepthThresholdIndex = 0));
    }
  },
  wn = class {
    thresholds;
    sizeBytesHighWaterMark = 0;
    nextThresholdIndex = 0;
    constructor(e) {
      this.thresholds = e;
    }
    track(e) {
      e > this.sizeBytesHighWaterMark && (this.sizeBytesHighWaterMark = e);
      let t = [];
      for (
        ;
        this.nextThresholdIndex < this.thresholds.length && e >= this.thresholds[this.nextThresholdIndex];
      ) {
        let n = this.thresholds[this.nextThresholdIndex];
        ((this.nextThresholdIndex += 1),
          t.push({ threshold: n, sizeBytes: e, sizeBytesHighWaterMark: this.sizeBytesHighWaterMark }));
      }
      return t;
    }
  },
  Tn = [100, 250, 500, 1e3, 2500, 5e3],
  En = [65536, 262144, 1048576],
  Dn = 2e4,
  On = 1024,
  kn = 200,
  An = 8,
  jn = 200,
  Mn = 8,
  Nn = 8,
  Pn = 8,
  Fn = 160,
  In = class {
    message;
    lineBytes;
    timing;
    constructor(e, t, n) {
      ((this.message = e), (this.lineBytes = t), (this.timing = n));
    }
  },
  Ln = class {
    lineQueue;
    lineSizeTracker;
    lineDrainHandle = null;
    options;
    constructor(e) {
      ((this.options = {
        ...e,
        queueDepthThresholds: e.queueDepthThresholds ?? Array.from(Tn),
        lineSizeThresholds: e.lineSizeThresholds ?? Array.from(En),
        queueCompactionMinConsumedLines: e.queueCompactionMinConsumedLines ?? On,
        queueOverflowDepth: e.queueOverflowDepth ?? Dn,
        drainMaxLinesPerSlice: e.drainMaxLinesPerSlice ?? kn,
        drainMaxSliceMs: e.drainMaxSliceMs ?? An,
        drainRemainingLogThreshold: e.drainRemainingLogThreshold ?? jn,
        slowDrainSliceMs: e.slowDrainSliceMs ?? Mn,
        slowParseMs: e.slowParseMs ?? Nn,
        slowDispatchMs: e.slowDispatchMs ?? Pn,
        parseFailurePreviewMaxChars: e.parseFailurePreviewMaxChars ?? Fn,
      }),
        (this.lineQueue = new Cn({
          compactionMinConsumedItems: this.options.queueCompactionMinConsumedLines,
          depthThresholds: this.options.queueDepthThresholds,
        })),
        (this.lineSizeTracker = new wn(this.options.lineSizeThresholds)));
    }
    handleIncomingData(e, t) {
      if (e instanceof In) {
        this.enqueueIncomingItems([e]);
        return;
      }
      let n = this.options.decodePayload(e);
      n.length !== 0 &&
        this.enqueueIncomingItems(t == null ? n : n.map((e) => ({ line: e, receivedAtMs: t })));
    }
    handleParsedMessage(e, t) {
      this.enqueueIncomingItems([{ message: e, lineBytes: t }]);
    }
    enqueueIncomingItems(e) {
      let t = this.lineQueue.enqueueMany(e);
      for (let n of t)
        this.options.logger.debug(`incoming_line_queue_depth_threshold`, {
          safe: {
            threshold: n.threshold,
            queueDepth: n.queueDepth,
            linesInBatch: e.length,
            queueDepthHighWaterMark: n.queueDepthHighWaterMark,
          },
          sensitive: {},
        });
      let n = this.getQueueDepth();
      if (n >= this.options.queueOverflowDepth) {
        this.options.onQueueOverflow(n, this.options.queueOverflowDepth);
        return;
      }
      this.scheduleLineDrain();
    }
    dispatchParsedMessage(e, t, n, r) {
      let i = Date.now(),
        a = this.options.onMessage(e, t, r);
      this.maybeLogIncomingLineProcessing({
        routeKind: a.routeKind,
        method: a.method,
        lineBytes: t,
        parseDurationMs: n,
        dispatchDurationMs: Date.now() - i,
      });
    }
    flush() {
      this.drainLineQueue(!0);
    }
    reset() {
      ((this.lineDrainHandle &&= (clearImmediate(this.lineDrainHandle), null)), this.lineQueue.clear());
    }
    getQueueDepth() {
      return this.lineQueue.getDepth();
    }
    scheduleLineDrain() {
      this.lineDrainHandle ||= setImmediate(() => {
        ((this.lineDrainHandle = null), this.drainLineQueue(!1));
      });
    }
    drainLineQueue(e) {
      if (this.lineQueue.getDepth() === 0) return;
      let t = this.lineQueue.drain({
        flushAll: e,
        maxItemsPerSlice: this.options.drainMaxLinesPerSlice,
        maxSliceMs: this.options.drainMaxSliceMs,
        onItem: (e) => {
          if (typeof e == `string`) {
            this.handleIncomingLine(e);
            return;
          }
          if (`line` in e) {
            this.handleIncomingLine(e.line, e.receivedAtMs);
            return;
          }
          (this.trackIncomingLineBytes(e.lineBytes),
            this.dispatchParsedMessage(e.message, e.lineBytes, 0, e.timing));
        },
      });
      if (
        ((t.durationMs >= this.options.slowDrainSliceMs ||
          t.remainingCount >= this.options.drainRemainingLogThreshold) &&
          this.options.logger.debug(`incoming_line_queue_drain_slice`, {
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
          this.options.logger.debug(`incoming_line_queue_drained`, {
            safe: { queueDepthHighWaterMark: t.queueDepthHighWaterMark },
            sensitive: {},
          });
        return;
      }
      e || this.scheduleLineDrain();
    }
    handleIncomingLine(e, t) {
      let n = e.trim();
      if (!n) return;
      let r = Buffer.byteLength(n, `utf8`);
      this.trackIncomingLineBytes(r);
      let i = Date.now(),
        a;
      try {
        a = JSON.parse(n);
      } catch (e) {
        let t = n
          .slice(0, this.options.parseFailurePreviewMaxChars)
          .replaceAll(`\r`, `\\r`)
          .replaceAll(
            `
`,
            `\\n`,
          );
        (this.options.logger.error(`Failed to parse MCP message`, {
          safe: {
            lineBytes: r,
            linePreview: t,
            linePreviewTruncated: n.length > this.options.parseFailurePreviewMaxChars,
          },
          sensitive: { error: e },
        }),
          this.options.logger.debug(`incoming_line_parse_failed`, {
            safe: { lineBytes: r, parseDurationMs: Date.now() - i, queueDepth: this.lineQueue.getDepth() },
            sensitive: {},
          }));
        return;
      }
      this.dispatchParsedMessage(a, r, Date.now() - i, t == null ? void 0 : { receivedAtMs: t });
    }
    trackIncomingLineBytes(e) {
      let t = this.lineSizeTracker.track(e);
      for (let e of t)
        this.options.logger.debug(`incoming_line_size_threshold`, {
          safe: {
            threshold: e.threshold,
            lineBytes: e.sizeBytes,
            lineBytesHighWaterMark: e.sizeBytesHighWaterMark,
          },
          sensitive: {},
        });
    }
    maybeLogIncomingLineProcessing(e) {
      let t = this.options.lineSizeThresholds[0] ?? 1 / 0;
      (e.parseDurationMs < this.options.slowParseMs &&
        e.dispatchDurationMs < this.options.slowDispatchMs &&
        e.lineBytes < t) ||
        this.options.logger.debug(`incoming_line_processed`, {
          safe: {
            routeKind: e.routeKind,
            method: e.method,
            lineBytes: e.lineBytes,
            parseDurationMs: e.parseDurationMs,
            dispatchDurationMs: e.dispatchDurationMs,
            queueDepth: this.lineQueue.getDepth(),
          },
          sensitive: {},
        });
    }
  },
  Rn = (e, t) => fetch(e, t);
function zn(e) {
  Rn = e;
}
function Bn(e, t) {
  return Rn(e, t);
}
var Vn = [
  [
    `invalid_config`,
    /bad (?:boolean |numeric )?config value|bad config line|invalid (?:config|key)|could not parse config|bogus format in git_config_parameters/i,
  ],
  [
    `index_locked`,
    /unable to create .*\.lock['"]?: file exists|another git process seems to be running|cannot lock ref|could not lock (?:config file|.*ref)/i,
  ],
  [
    `authentication`,
    /authentication failed|could not read username|permission denied \(publickey\)|http basic: access denied|invalid username or password|repository access denied|requested url returned error: (?:401|403)\b|support for password authentication was removed|terminal prompts disabled/i,
  ],
  [`permission_denied`, /permission denied|operation not permitted|access is denied/i],
  [
    `resource_exhausted`,
    /no space left on device|disk quota exceeded|cannot allocate memory|too many open files|resource temporarily unavailable/i,
  ],
  [
    `repository_missing`,
    /not a git repository|does not appear to be a git repository|cannot (?:change to|chdir to).*no such file or directory/i,
  ],
  [`ambiguous_revision`, /ambiguous argument|short object id .* is ambiguous/i],
  [
    `bad_revision`,
    /bad revision|bad object|needed a single revision|not a valid object name|unknown revision or path not in the working tree/i,
  ],
  [
    `corrupt_repository`,
    /corrupt|index file smaller than expected|bad signature|object file .* is empty|inflate: data stream error|pack has bad object/i,
  ],
  [
    `remote_transport`,
    /could not resolve host|failed to connect|connection (?:timed out|reset|refused)|network is unreachable|early eof|remote end hung up unexpectedly|rpc failed|http\/2 stream .* was not closed cleanly|ssh: connect to host|unable to access/i,
  ],
];
function Hn(e) {
  for (let [t, n] of Vn) if (n.test(e)) return t;
  return `unknown`;
}
var Un = new Set(
  `--version.add.apply.archive.blame.branch.cat-file.check-attr.check-ignore.check-ref-format.checkout.cherry-pick.clean.clone.commit.config.count-objects.diff.fetch.for-each-ref.fsck.gc.grep.hash-object.init.log.ls-files.ls-remote.merge.merge-base.mv.pull.push.rebase.remote.reset.restore.rev-list.rev-parse.rm.show.show-ref.sparse-checkout.stash.status.submodule.switch.tag.update-index.version.worktree`.split(
    `.`,
  ),
);
function Wn(e, t) {
  let n = t;
  for (; e[n] === `-c` && e[n + 1] != null;) n += 2;
  let r = e[n];
  return r != null && Un.has(r) ? r : `other`;
}
var Gn = e.a(n.Q()),
  Kn = class {
    child;
    stdoutChunks;
    stderrChunks;
    collectOutput;
    writeStdinImpl;
    result = null;
    promise;
    constructor(e, t = [], n = [], r = !0, i, a) {
      ((this.child = e),
        (this.stdoutChunks = t),
        (this.stderrChunks = n),
        (this.collectOutput = r),
        (this.writeStdinImpl = a),
        this.child.stdin?.on(`error`, (e) => {
          !this.child.killed && this.result == null && (this.child.kill(), this.child.emit(`error`, e));
        }),
        (this.promise = i.then(
          ({ code: e, gitErrorKind: t, signal: n }) => (
            (this.result = { type: `resolve`, code: e, gitErrorKind: t, signal: n }),
            this.result
          ),
          (e) => ((this.result = { type: `reject`, error: e }), this.result),
        )));
    }
    wait() {
      return this.promise.then((e) => {
        switch (e.type) {
          case `resolve`: {
            let { code: t, gitErrorKind: n, signal: r } = e;
            return {
              stdout: this.collectOutput ? Buffer.concat(this.stdoutChunks).toString(`utf8`) : ``,
              stderr: this.collectOutput ? Buffer.concat(this.stderrChunks).toString(`utf8`) : ``,
              code: t,
              gitErrorKind: n,
              signal: r,
            };
          }
          case `reject`:
            throw e.error;
        }
      });
    }
    getStdout() {
      return this.collectOutput ? Buffer.concat(this.stdoutChunks) : Buffer.alloc(0);
    }
    isDone() {
      return this.result != null;
    }
    getPid() {
      return this.child.pid ?? null;
    }
    kill(e) {
      this.child.kill(e);
    }
    writeStdin(e, t = {}) {
      if (this.writeStdinImpl != null) return this.writeStdinImpl(e, t);
      let n = this.child.stdin;
      return n == null
        ? Promise.reject(Error(`Process stdin is unavailable`))
        : new Promise((r, i) => {
            let a = (e) => {
              e == null ? r() : i(e);
            };
            t.closeStdin ? n.end(e, a) : n.write(e, a);
          });
    }
  },
  qn = r.a(`spawn-async`),
  Jn = 8192,
  Yn = new Set([
    `auth.status`,
    `auth.token`,
    `pr.checks`,
    `pr.close`,
    `pr.comment`,
    `pr.create`,
    `pr.diff`,
    `pr.edit`,
    `pr.list`,
    `pr.merge`,
    `pr.ready`,
    `pr.reopen`,
    `pr.review`,
    `pr.view`,
  ]),
  Xn = new Set([
    `-B`,
    `-b`,
    `-c`,
    `-D`,
    `-E`,
    `-e`,
    `-F`,
    `-I`,
    `-i`,
    `-J`,
    `-L`,
    `-l`,
    `-m`,
    `-O`,
    `-o`,
    `-p`,
    `-P`,
    `-Q`,
    `-R`,
    `-S`,
    `-W`,
    `-w`,
  ]);
function Zn(e) {
  let t = er(e);
  if (t != null) return t;
  let n = ir(e[0]),
    r = Qn(e, n),
    i = r ?? (n === `ssh` ? $n(e) : void 0);
  return {
    attributes: { "process.kind": r == null ? n : `gh`, ...(i == null ? {} : { "process.operation": i }) },
    op: `process.exec`,
    name: `subprocess`,
  };
}
function Qn(e, t) {
  let n, r;
  if (t === `gh`) [n, r] = e.slice(1, 3);
  else if (t === `shell` && (e[1] === `-c` || e[1] === `-lc`)) {
    let t = /^gh(?:\s+([a-z-]+))?(?:\s+([a-z-]+))?(?:\s|$)/u.exec(e[2] ?? ``);
    if (t == null) return;
    [, n, r] = t;
  } else return;
  if (n === `--version` || n === `version`) return `version`;
  if (n === `api`) return r === `graphql` ? `api.graphql` : `api.rest`;
  let i = `${n}.${r}`;
  return Yn.has(i) ? i : `other`;
}
function $n(e) {
  let t = e.slice(1),
    n = !1,
    r = !1,
    i = !1,
    a = 0;
  for (let e = 0; e < t.length; e += 1) {
    let o = t[e];
    if (o != null) {
      if (o === `--`) {
        a += t.length - e - 1;
        break;
      }
      if (
        (o === `-G` && (n = !0),
        /^-O(?:.|$)/u.test(o) && (r = !0),
        (/^-(?:D|L|R|W)(?:.|$)/u.test(o) ||
          /^-o(?:DynamicForward|LocalForward|RemoteForward)=/iu.test(o) ||
          (o === `-o` && /^(?:DynamicForward|LocalForward|RemoteForward)(?:=|\s)/iu.test(t[e + 1] ?? ``))) &&
          (i = !0),
        Xn.has(o))
      ) {
        e += 1;
        continue;
      }
      if (!o.startsWith(`-`) && ((a += 1), a > 1)) break;
    }
  }
  return n ? `config` : r ? `control` : i ? `port_forward` : a > 1 ? `remote_command` : `connection`;
}
function er(e) {
  let t = e[0];
  if (t != null && tr(t))
    return { op: `git.exec`, name: `git.subprocess`, attributes: { "git.subcommand": Wn(e, 1) } };
  if (!nr(t)) return null;
  let n = e.slice(1, 4).map((e) => e.toLowerCase()),
    r = e[4];
  return n.length === 3 && n[0] === `/d` && n[1] === `/s` && n[2] === `/c` && r != null && tr(r)
    ? { op: `git.exec`, name: `git.subprocess`, attributes: { "git.subcommand": Wn(e, 5) } }
    : null;
}
function tr(e) {
  let t = rr(e);
  return t === `git` || t === `git.exe` || t === `git.cmd` || t === `git.bat` || t === `git.com`;
}
function nr(e) {
  if (e == null) return !1;
  let t = rr(e);
  return t === `cmd` || t === `cmd.exe`;
}
function rr(e) {
  let t = (0, o.basename)(e).toLowerCase(),
    n = o.win32.basename(e).toLowerCase();
  return t.length <= n.length ? t : n;
}
function ir(e) {
  if (e == null) return `other`;
  let t = rr(e).replace(/\.(?:bat|cmd|com|exe)$/u, ``);
  if (/^python(?:3(?:\.\d+)*)?$/u.test(t)) return `python`;
  switch (t) {
    case `bash`:
    case `cmd`:
    case `powershell`:
    case `pwsh`:
    case `sh`:
    case `zsh`:
      return `shell`;
    case `codex`:
    case `gh`:
    case `node`:
    case `rg`:
    case `ssh`:
    case `tar`:
    case `tectonic`:
    case `wsl`:
      return t;
    default:
      return `other`;
  }
}
function ar({
  args: e,
  allowedNonZeroExitCodes: t,
  cwd: n,
  env: r,
  signal: i,
  stdoutChunkHandler: a,
  stderrChunkHandler: o,
  onExitHandler: s,
  collectOutput: c = !0,
  detached: l = !1,
  windowsHide: u,
  spawnInsideWsl: d,
  streamStdin: f = !1,
}) {
  if (d ?? Lt())
    return (
      qn().info(`Spawning process inside WSL`),
      sr(e, t, n, r == null ? void 0 : lr(G(r)), i, a, o, s, c, f)
    );
  let p = e[0],
    m = e.slice(1),
    h = G({ ...process.env, ...r }),
    _ = { cwd: n, detached: l, windowsHide: u, env: h, stdio: [f ? `pipe` : `ignore`, `pipe`, `pipe`] };
  return or({
    child: (0, g.spawn)(De.resolve(p, { cwd: n, env: h }) ?? p, m, _),
    args: e,
    allowedNonZeroExitCodes: t,
    signal: i,
    stdoutChunkHandler: a,
    stderrChunkHandler: o,
    onExitHandler: s,
    collectOutput: c,
  });
}
function or({
  child: e,
  args: t,
  allowedNonZeroExitCodes: n,
  signal: r,
  stdoutChunkHandler: i,
  stderrChunkHandler: a,
  onExitHandler: o,
  collectOutput: s,
}) {
  let c = Zn(t),
    l = [],
    u = [],
    d = [],
    f = 0,
    p = new Promise((t, n) => {
      let p = cr(e, r),
        m = (0, Gn.default)(() => {
          (o?.(), p?.());
        });
      (e.stdout?.on(`data`, (e) => {
        (s && l.push(e), i?.(e));
      }),
        e.stderr?.on(`data`, (e) => {
          if ((s && u.push(e), c.name === `git.subprocess` && f < Jn)) {
            let t = Buffer.from(e.subarray(0, Jn - f));
            (d.push(t), (f += t.length));
          }
          a?.(e);
        }),
        e.on(`close`, (e, n) => {
          (m(), t({ code: e, signal: n }));
        }),
        e.on(`error`, (e) => {
          (m(), n(e));
        }));
    });
  return new Kn(
    e,
    l,
    u,
    s,
    oe(c, async () => {
      let t = await p,
        i = r?.aborted || e.killed,
        a = !i && t.code !== 0 && (t.code == null || !n?.includes(t.code)),
        o = c.name === `git.subprocess` && a ? Hn(Buffer.concat(d).toString(`utf8`)) : void 0;
      return (
        ue({
          ...(t.code == null ? {} : { "process.exit.code": t.code }),
          ...(t.signal == null ? {} : { "process.signal": t.signal }),
          ...(o == null ? {} : { "git.error_kind": o }),
        }),
        i ? (le(`canceled`), t) : (a && le(`failure`, `process_exit`), { ...t, gitErrorKind: o })
      );
    }),
  );
}
function sr(e, t, n, r, i, a, o, s, c = !0, l = !1) {
  let u = zt();
  if (u == null) throw Error(`WSL mode is enabled but no eligible distro is available`);
  let d = Xt({ distro: u, cwd: n ? R(n) : `.`, command: dr(e, r) }),
    f = { env: G(process.env), stdio: [l ? `pipe` : `ignore`, `pipe`, `pipe`], windowsHide: !0 };
  return (
    qn().debug(`Spawning process inside WSL`, { safe: { command: `wsl.exe ${d.join(` `)}` }, sensitive: {} }),
    or({
      child: (0, g.spawn)(`wsl.exe`, d, f),
      args: e,
      allowedNonZeroExitCodes: t,
      signal: i,
      stdoutChunkHandler: a,
      stderrChunkHandler: o,
      onExitHandler: s,
      collectOutput: c,
    })
  );
}
function cr(e, t) {
  if (!t) return;
  let n = () => {
    e.kill();
  };
  return (
    t.addEventListener(`abort`, n),
    t.aborted && n(),
    () => {
      t.removeEventListener(`abort`, n);
    }
  );
}
function lr(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) r != null && process.env[n] !== r && (t[n] = r);
  return t;
}
function ur(e) {
  return Object.entries(e).map(([e, t]) => `${e}=${ve(fr(t) ? R(t) : t)}`);
}
function dr(e, t) {
  let n = ye(e),
    r = t == null ? [] : ur(t);
  return r.length === 0 ? `exec ${n}` : `${r.join(` `)} exec ${n}`;
}
function fr(e) {
  return !e.includes(`;`) && !!(/^(?:[a-zA-Z]:[\\/]|\\\\|\/\/)/.test(e) || pe(e));
}
var pr = r.a(`primary-runtime-installer`),
  mr = new Set([
    `EACCES`,
    `ECONNABORTED`,
    `ECONNREFUSED`,
    `ECONNRESET`,
    `EHOSTUNREACH`,
    `ENETUNREACH`,
    `ENOSPC`,
    `EPERM`,
    `ETIMEDOUT`,
  ]);
async function hr(e, t, n, r) {
  let i = (
    await Promise.all(
      [
        [`python`, e.pythonPath],
        [`node`, e.nodePath],
      ].map(async ([e, i]) => {
        if (i == null || !(await d.default.stat(i).catch(() => null))?.isFile())
          return `Missing ${e} executable: ${i}`;
        if (!r.probeExecutables) return null;
        let a = Date.now(),
          o = AbortSignal.timeout(1e4),
          s = r.signal == null ? o : AbortSignal.any([r.signal, o]);
        try {
          let o = await ar({
            args:
              e === `python`
                ? [
                    i,
                    `-I`,
                    `-B`,
                    `-c`,
                    `import sys, ssl, sqlite3, openpyxl; print(sys.executable); print(sys.version)`,
                  ]
                : [
                    i,
                    `--input-type=commonjs`,
                    `-e`,
                    `require('node:crypto').createHash('sha256').update('codex').digest('hex'); console.log(process.execPath); console.log(process.version)`,
                  ],
            cwd: t,
            env: { ELECTRON_RUN_AS_NODE: `1`, NODE_OPTIONS: ``, NODE_PATH: `` },
            signal: s,
            spawnInsideWsl: !1,
          }).wait();
          return (
            r.signal?.throwIfAborted(),
            s.throwIfAborted(),
            pr().info(`primary_runtime_executable_probe`, {
              safe: {
                executable: e,
                outcome: o.code === 0 ? `passed` : `failed`,
                exitCode: o.code,
                durationMs: Date.now() - a,
                bundleVersion: n,
              },
              sensitive: {
                executablePath: i,
                stdout: o.stdout.slice(0, 2048),
                stderr: o.stderr.slice(0, 2048),
              },
            }),
            o.code === 0 ? null : `Bundled ${e} failed its execution check (exit ${o.code})`
          );
        } catch (t) {
          return (
            r.signal?.throwIfAborted(),
            pr().warning(`primary_runtime_executable_probe`, {
              safe: {
                executable: e,
                outcome: s.aborted ? `timeout` : `failed`,
                durationMs: Date.now() - a,
                bundleVersion: n,
                errorCode: gr(t),
              },
              sensitive: { executablePath: i, error: t },
            }),
            `Bundled ${e} ${s.aborted ? `timed out` : `could not execute`}`
          );
        }
      }),
    )
  ).filter((e) => e != null);
  return (
    (await d.default.stat(e.nodeModulesPath).catch(() => null))?.isDirectory() ||
      i.push(`Missing bundled node packages directory: ` + e.nodeModulesPath),
    i
  );
}
function gr(e) {
  return typeof e != `object` || !e || !(`code` in e) || typeof e.code != `string` || !mr.has(e.code)
    ? null
    : e.code;
}
var _r = e.t((e, t) => {
    ((t.exports = a), (a.sync = o));
    var n = require("fs");
    function r(e, t) {
      var n = t.pathExt === void 0 ? process.env.PATHEXT : t.pathExt;
      if (!n || ((n = n.split(`;`)), n.indexOf(``) !== -1)) return !0;
      for (var r = 0; r < n.length; r++) {
        var i = n[r].toLowerCase();
        if (i && e.substr(-i.length).toLowerCase() === i) return !0;
      }
      return !1;
    }
    function i(e, t, n) {
      return !e.isSymbolicLink() && !e.isFile() ? !1 : r(t, n);
    }
    function a(e, t, r) {
      n.stat(e, function (n, a) {
        r(n, !n && i(a, e, t));
      });
    }
    function o(e, t) {
      return i(n.statSync(e), e, t);
    }
  }),
  vr = e.t((e, t) => {
    ((t.exports = r), (r.sync = i));
    var n = require("fs");
    function r(e, t, r) {
      n.stat(e, function (e, n) {
        r(e, !e && a(n, t));
      });
    }
    function i(e, t) {
      return a(n.statSync(e), t);
    }
    function a(e, t) {
      return e.isFile() && o(e, t);
    }
    function o(e, t) {
      var n = e.mode,
        r = e.uid,
        i = e.gid,
        a = t.uid === void 0 ? process.getuid && process.getuid() : t.uid,
        o = t.gid === void 0 ? process.getgid && process.getgid() : t.gid,
        s = 64,
        c = 8,
        l = 1,
        u = s | c;
      return n & l || (n & c && i === o) || (n & s && r === a) || (n & u && a === 0);
    }
  }),
  yr = e.t((e, t) => {
    require("fs");
    var n = process.platform === `win32` || global.TESTING_WINDOWS ? _r() : vr();
    ((t.exports = r), (r.sync = i));
    function r(e, t, i) {
      if ((typeof t == `function` && ((i = t), (t = {})), !i)) {
        if (typeof Promise != `function`) throw TypeError(`callback not provided`);
        return new Promise(function (n, i) {
          r(e, t || {}, function (e, t) {
            e ? i(e) : n(t);
          });
        });
      }
      n(e, t || {}, function (e, n) {
        (e && (e.code === `EACCES` || (t && t.ignoreErrors)) && ((e = null), (n = !1)), i(e, n));
      });
    }
    function i(e, t) {
      try {
        return n.sync(e, t || {});
      } catch (e) {
        if ((t && t.ignoreErrors) || e.code === `EACCES`) return !1;
        throw e;
      }
    }
  }),
  br = e.t((e, t) => {
    var n = process.platform === `win32` || process.env.OSTYPE === `cygwin` || process.env.OSTYPE === `msys`,
      r = require("path"),
      i = n ? `;` : `:`,
      a = yr(),
      o = (e) => Object.assign(Error(`not found: ${e}`), { code: `ENOENT` }),
      s = (e, t) => {
        let r = t.colon || i,
          a =
            e.match(/\//) || (n && e.match(/\\/))
              ? [``]
              : [...(n ? [process.cwd()] : []), ...(t.path || process.env.PATH || ``).split(r)],
          o = n ? t.pathExt || process.env.PATHEXT || `.EXE;.CMD;.BAT;.COM` : ``,
          s = n ? o.split(r) : [``];
        return (
          n && e.indexOf(`.`) !== -1 && s[0] !== `` && s.unshift(``),
          { pathEnv: a, pathExt: s, pathExtExe: o }
        );
      },
      c = (e, t, n) => {
        (typeof t == `function` && ((n = t), (t = {})), (t ||= {}));
        let { pathEnv: i, pathExt: c, pathExtExe: l } = s(e, t),
          u = [],
          d = (n) =>
            new Promise((a, s) => {
              if (n === i.length) return t.all && u.length ? a(u) : s(o(e));
              let c = i[n],
                l = /^".*"$/.test(c) ? c.slice(1, -1) : c,
                d = r.join(l, e),
                p = !l && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d;
              a(f(p, n, 0));
            }),
          f = (e, n, r) =>
            new Promise((i, o) => {
              if (r === c.length) return i(d(n + 1));
              let s = c[r];
              a(e + s, { pathExt: l }, (a, o) => {
                if (!a && o) {
                  if (t.all) u.push(e + s);
                  else return i(e + s);
                }
                return i(f(e, n, r + 1));
              });
            });
        return n ? d(0).then((e) => n(null, e), n) : d(0);
      };
    ((t.exports = c),
      (c.sync = (e, t) => {
        t ||= {};
        let { pathEnv: n, pathExt: i, pathExtExe: c } = s(e, t),
          l = [];
        for (let o = 0; o < n.length; o++) {
          let s = n[o],
            u = /^".*"$/.test(s) ? s.slice(1, -1) : s,
            d = r.join(u, e),
            f = !u && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d : d;
          for (let e = 0; e < i.length; e++) {
            let n = f + i[e];
            try {
              if (a.sync(n, { pathExt: c })) {
                if (t.all) l.push(n);
                else return n;
              }
            } catch {}
          }
        }
        if (t.all && l.length) return l;
        if (t.nothrow) return null;
        throw o(e);
      }));
  }),
  xr = e.t((e, t) => {
    var n = (e = {}) => {
      let t = e.env || process.env;
      return (e.platform || process.platform) === `win32`
        ? Object.keys(t)
            .reverse()
            .find((e) => e.toUpperCase() === `PATH`) || `Path`
        : `PATH`;
    };
    ((t.exports = n), (t.exports.default = n));
  }),
  Sr = e.t((e, t) => {
    var n = require("path"),
      r = br(),
      i = xr();
    function a(e, t) {
      let a = e.options.env || process.env,
        o = process.cwd(),
        s = e.options.cwd != null,
        c = s && process.chdir !== void 0 && !process.chdir.disabled;
      if (c)
        try {
          process.chdir(e.options.cwd);
        } catch {}
      let l;
      try {
        l = r.sync(e.command, { path: a[i({ env: a })], pathExt: t ? n.delimiter : void 0 });
      } catch {
      } finally {
        c && process.chdir(o);
      }
      return ((l &&= n.resolve(s ? e.options.cwd : ``, l)), l);
    }
    function o(e) {
      return a(e) || a(e, !0);
    }
    t.exports = o;
  }),
  Cr = e.t((e, t) => {
    var n = /([()\][%!^"`<>&|;, *?])/g;
    function r(e) {
      return ((e = e.replace(n, `^$1`)), e);
    }
    function i(e, t) {
      return (
        (e = `${e}`),
        (e = e.replace(/(?=(\\+?)?)\1"/g, `$1$1\\"`)),
        (e = e.replace(/(?=(\\+?)?)\1$/, `$1$1`)),
        (e = `"${e}"`),
        (e = e.replace(n, `^$1`)),
        t && (e = e.replace(n, `^$1`)),
        e
      );
    }
    ((t.exports.command = r), (t.exports.argument = i));
  }),
  wr = e.t((e, t) => {
    t.exports = /^#!(.*)/;
  }),
  Tr = e.t((e, t) => {
    var n = wr();
    t.exports = (e = ``) => {
      let t = e.match(n);
      if (!t) return null;
      let [r, i] = t[0].replace(/#! ?/, ``).split(` `),
        a = r.split(`/`).pop();
      return a === `env` ? i : i ? `${a} ${i}` : a;
    };
  }),
  Er = e.t((e, t) => {
    var n = require("fs"),
      r = Tr();
    function i(e) {
      let t = Buffer.alloc(150),
        i;
      try {
        ((i = n.openSync(e, `r`)), n.readSync(i, t, 0, 150, 0), n.closeSync(i));
      } catch {}
      return r(t.toString());
    }
    t.exports = i;
  }),
  Dr = e.t((e, t) => {
    var n = require("path"),
      r = Sr(),
      i = Cr(),
      a = Er(),
      o = process.platform === `win32`,
      s = /\.(?:com|exe)$/i,
      c = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function l(e) {
      e.file = r(e);
      let t = e.file && a(e.file);
      return t ? (e.args.unshift(e.file), (e.command = t), r(e)) : e.file;
    }
    function u(e) {
      if (!o) return e;
      let t = l(e),
        r = !s.test(t);
      if (e.options.forceShell || r) {
        let r = c.test(t);
        ((e.command = n.normalize(e.command)),
          (e.command = i.command(e.command)),
          (e.args = e.args.map((e) => i.argument(e, r))),
          (e.args = [`/d`, `/s`, `/c`, `"${[e.command].concat(e.args).join(` `)}"`]),
          (e.command = process.env.comspec || `cmd.exe`),
          (e.options.windowsVerbatimArguments = !0));
      }
      return e;
    }
    function d(e, t, n) {
      (t && !Array.isArray(t) && ((n = t), (t = null)),
        (t = t ? t.slice(0) : []),
        (n = Object.assign({}, n)));
      let r = { command: e, args: t, options: n, file: void 0, original: { command: e, args: t } };
      return n.shell ? r : u(r);
    }
    t.exports = d;
  }),
  Or = e.t((e, t) => {
    var n = process.platform === `win32`;
    function r(e, t) {
      return Object.assign(Error(`${t} ${e.command} ENOENT`), {
        code: `ENOENT`,
        errno: `ENOENT`,
        syscall: `${t} ${e.command}`,
        path: e.command,
        spawnargs: e.args,
      });
    }
    function i(e, t) {
      if (!n) return;
      let r = e.emit;
      e.emit = function (n, i) {
        if (n === `exit`) {
          let n = a(i, t);
          if (n) return r.call(e, `error`, n);
        }
        return r.apply(e, arguments);
      };
    }
    function a(e, t) {
      return n && e === 1 && !t.file ? r(t.original, `spawn`) : null;
    }
    function o(e, t) {
      return n && e === 1 && !t.file ? r(t.original, `spawnSync`) : null;
    }
    t.exports = { hookChildProcess: i, verifyENOENT: a, verifyENOENTSync: o, notFoundError: r };
  }),
  kr = e.t((e, t) => {
    var n = require("child_process"),
      r = Dr(),
      i = Or();
    function a(e, t, a) {
      let o = r(e, t, a),
        s = n.spawn(o.command, o.args, o.options);
      return (i.hookChildProcess(s, o), s);
    }
    function o(e, t, a) {
      let o = r(e, t, a),
        s = n.spawnSync(o.command, o.args, o.options);
      return ((s.error = s.error || i.verifyENOENTSync(s.status, o)), s);
    }
    ((t.exports = a),
      (t.exports.spawn = a),
      (t.exports.sync = o),
      (t.exports._parse = r),
      (t.exports._enoent = i));
  }),
  Ar = e.t((e, t) => {
    t.exports = (e) => {
      let t =
          typeof e == `string`
            ? `
`
            : 10,
        n = typeof e == `string` ? `\r` : 13;
      return (
        e[e.length - 1] === t && (e = e.slice(0, e.length - 1)),
        e[e.length - 1] === n && (e = e.slice(0, e.length - 1)),
        e
      );
    };
  }),
  jr = e.t((e, t) => {
    var n = require("path"),
      r = xr(),
      i = (e) => {
        e = { cwd: process.cwd(), path: process.env[r()], execPath: process.execPath, ...e };
        let t,
          i = n.resolve(e.cwd),
          a = [];
        for (; t !== i;) (a.push(n.join(i, `node_modules/.bin`)), (t = i), (i = n.resolve(i, `..`)));
        let o = n.resolve(e.cwd, e.execPath, `..`);
        return (a.push(o), a.concat(e.path).join(n.delimiter));
      };
    ((t.exports = i),
      (t.exports.default = i),
      (t.exports.env = (e) => {
        e = { env: process.env, ...e };
        let n = { ...e.env },
          i = r({ env: n });
        return ((e.path = n[i]), (n[i] = t.exports(e)), n);
      }));
  }),
  Mr = e.t((e, t) => {
    var n = (e, t) => {
      for (let n of Reflect.ownKeys(t)) Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
      return e;
    };
    ((t.exports = n), (t.exports.default = n));
  }),
  Nr = e.t((e, t) => {
    var n = Mr(),
      r = new WeakMap(),
      i = (e, t = {}) => {
        if (typeof e != `function`) throw TypeError(`Expected a function`);
        let i,
          a = 0,
          o = e.displayName || e.name || `<anonymous>`,
          s = function (...n) {
            if ((r.set(s, ++a), a === 1)) ((i = e.apply(this, n)), (e = null));
            else if (t.throw === !0) throw Error(`Function \`${o}\` can only be called once`);
            return i;
          };
        return (n(s, e), r.set(s, a), s);
      };
    ((t.exports = i),
      (t.exports.default = i),
      (t.exports.callCount = (e) => {
        if (!r.has(e))
          throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
        return r.get(e);
      }));
  }),
  Pr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SIGNALS = void 0),
      (e.SIGNALS = [
        { name: `SIGHUP`, number: 1, action: `terminate`, description: `Terminal closed`, standard: `posix` },
        {
          name: `SIGINT`,
          number: 2,
          action: `terminate`,
          description: `User interruption with CTRL-C`,
          standard: `ansi`,
        },
        {
          name: `SIGQUIT`,
          number: 3,
          action: `core`,
          description: `User interruption with CTRL-\\`,
          standard: `posix`,
        },
        {
          name: `SIGILL`,
          number: 4,
          action: `core`,
          description: `Invalid machine instruction`,
          standard: `ansi`,
        },
        { name: `SIGTRAP`, number: 5, action: `core`, description: `Debugger breakpoint`, standard: `posix` },
        { name: `SIGABRT`, number: 6, action: `core`, description: `Aborted`, standard: `ansi` },
        { name: `SIGIOT`, number: 6, action: `core`, description: `Aborted`, standard: `bsd` },
        {
          name: `SIGBUS`,
          number: 7,
          action: `core`,
          description: `Bus error due to misaligned, non-existing address or paging error`,
          standard: `bsd`,
        },
        {
          name: `SIGEMT`,
          number: 7,
          action: `terminate`,
          description: `Command should be emulated but is not implemented`,
          standard: `other`,
        },
        {
          name: `SIGFPE`,
          number: 8,
          action: `core`,
          description: `Floating point arithmetic error`,
          standard: `ansi`,
        },
        {
          name: `SIGKILL`,
          number: 9,
          action: `terminate`,
          description: `Forced termination`,
          standard: `posix`,
          forced: !0,
        },
        {
          name: `SIGUSR1`,
          number: 10,
          action: `terminate`,
          description: `Application-specific signal`,
          standard: `posix`,
        },
        { name: `SIGSEGV`, number: 11, action: `core`, description: `Segmentation fault`, standard: `ansi` },
        {
          name: `SIGUSR2`,
          number: 12,
          action: `terminate`,
          description: `Application-specific signal`,
          standard: `posix`,
        },
        {
          name: `SIGPIPE`,
          number: 13,
          action: `terminate`,
          description: `Broken pipe or socket`,
          standard: `posix`,
        },
        {
          name: `SIGALRM`,
          number: 14,
          action: `terminate`,
          description: `Timeout or timer`,
          standard: `posix`,
        },
        { name: `SIGTERM`, number: 15, action: `terminate`, description: `Termination`, standard: `ansi` },
        {
          name: `SIGSTKFLT`,
          number: 16,
          action: `terminate`,
          description: `Stack is empty or overflowed`,
          standard: `other`,
        },
        {
          name: `SIGCHLD`,
          number: 17,
          action: `ignore`,
          description: `Child process terminated, paused or unpaused`,
          standard: `posix`,
        },
        {
          name: `SIGCLD`,
          number: 17,
          action: `ignore`,
          description: `Child process terminated, paused or unpaused`,
          standard: `other`,
        },
        {
          name: `SIGCONT`,
          number: 18,
          action: `unpause`,
          description: `Unpaused`,
          standard: `posix`,
          forced: !0,
        },
        {
          name: `SIGSTOP`,
          number: 19,
          action: `pause`,
          description: `Paused`,
          standard: `posix`,
          forced: !0,
        },
        {
          name: `SIGTSTP`,
          number: 20,
          action: `pause`,
          description: `Paused using CTRL-Z or "suspend"`,
          standard: `posix`,
        },
        {
          name: `SIGTTIN`,
          number: 21,
          action: `pause`,
          description: `Background process cannot read terminal input`,
          standard: `posix`,
        },
        {
          name: `SIGBREAK`,
          number: 21,
          action: `terminate`,
          description: `User interruption with CTRL-BREAK`,
          standard: `other`,
        },
        {
          name: `SIGTTOU`,
          number: 22,
          action: `pause`,
          description: `Background process cannot write to terminal output`,
          standard: `posix`,
        },
        {
          name: `SIGURG`,
          number: 23,
          action: `ignore`,
          description: `Socket received out-of-band data`,
          standard: `bsd`,
        },
        { name: `SIGXCPU`, number: 24, action: `core`, description: `Process timed out`, standard: `bsd` },
        { name: `SIGXFSZ`, number: 25, action: `core`, description: `File too big`, standard: `bsd` },
        {
          name: `SIGVTALRM`,
          number: 26,
          action: `terminate`,
          description: `Timeout or timer`,
          standard: `bsd`,
        },
        {
          name: `SIGPROF`,
          number: 27,
          action: `terminate`,
          description: `Timeout or timer`,
          standard: `bsd`,
        },
        {
          name: `SIGWINCH`,
          number: 28,
          action: `ignore`,
          description: `Terminal window size changed`,
          standard: `bsd`,
        },
        {
          name: `SIGIO`,
          number: 29,
          action: `terminate`,
          description: `I/O is available`,
          standard: `other`,
        },
        { name: `SIGPOLL`, number: 29, action: `terminate`, description: `Watched event`, standard: `other` },
        {
          name: `SIGINFO`,
          number: 29,
          action: `ignore`,
          description: `Request for process information`,
          standard: `other`,
        },
        {
          name: `SIGPWR`,
          number: 30,
          action: `terminate`,
          description: `Device running out of power`,
          standard: `systemv`,
        },
        { name: `SIGSYS`, number: 31, action: `core`, description: `Invalid system call`, standard: `other` },
        {
          name: `SIGUNUSED`,
          number: 31,
          action: `terminate`,
          description: `Invalid system call`,
          standard: `other`,
        },
      ]));
  }),
  Fr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SIGRTMAX = e.getRealtimeSignals = void 0),
      (e.getRealtimeSignals = function () {
        let e = r - n + 1;
        return Array.from({ length: e }, t);
      }));
    var t = function (e, t) {
        return {
          name: `SIGRT${t + 1}`,
          number: n + t,
          action: `terminate`,
          description: `Application-specific signal (realtime)`,
          standard: `posix`,
        };
      },
      n = 34,
      r = 64;
    e.SIGRTMAX = r;
  }),
  Ir = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.getSignals = void 0));
    var t = require("os"),
      n = Pr(),
      r = Fr();
    e.getSignals = function () {
      let e = (0, r.getRealtimeSignals)();
      return [...n.SIGNALS, ...e].map(i);
    };
    var i = function ({ name: e, number: n, description: r, action: i, forced: a = !1, standard: o }) {
      let {
          signals: { [e]: s },
        } = t.constants,
        c = s !== void 0;
      return { name: e, number: c ? s : n, description: r, supported: c, action: i, forced: a, standard: o };
    };
  }),
  Lr = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.signalsByNumber = e.signalsByName = void 0));
    var t = require("os"),
      n = Ir(),
      r = Fr(),
      i = function () {
        return (0, n.getSignals)().reduce(a, {});
      },
      a = function (
        e,
        { name: t, number: n, description: r, supported: i, action: a, forced: o, standard: s },
      ) {
        return {
          ...e,
          [t]: { name: t, number: n, description: r, supported: i, action: a, forced: o, standard: s },
        };
      };
    e.signalsByName = i();
    var o = function () {
        let e = (0, n.getSignals)(),
          t = r.SIGRTMAX + 1,
          i = Array.from({ length: t }, (t, n) => s(n, e));
        return Object.assign({}, ...i);
      },
      s = function (e, t) {
        let n = c(e, t);
        if (n === void 0) return {};
        let { name: r, description: i, supported: a, action: o, forced: s, standard: l } = n;
        return {
          [e]: { name: r, number: e, description: i, supported: a, action: o, forced: s, standard: l },
        };
      },
      c = function (e, n) {
        let r = n.find(({ name: n }) => t.constants.signals[n] === e);
        return r === void 0 ? n.find((t) => t.number === e) : r;
      };
    e.signalsByNumber = o();
  }),
  Rr = e.t((e, t) => {
    var { signalsByName: n } = Lr(),
      r = ({
        timedOut: e,
        timeout: t,
        errorCode: n,
        signal: r,
        signalDescription: i,
        exitCode: a,
        isCanceled: o,
      }) =>
        e
          ? `timed out after ${t} milliseconds`
          : o
            ? `was canceled`
            : n === void 0
              ? r === void 0
                ? a === void 0
                  ? `failed`
                  : `failed with exit code ${a}`
                : `was killed with ${r} (${i})`
              : `failed with ${n}`;
    t.exports = ({
      stdout: e,
      stderr: t,
      all: i,
      error: a,
      signal: o,
      exitCode: s,
      command: c,
      escapedCommand: l,
      timedOut: u,
      isCanceled: d,
      killed: f,
      parsed: {
        options: { timeout: p },
      },
    }) => {
      ((s = s === null ? void 0 : s), (o = o === null ? void 0 : o));
      let m = o === void 0 ? void 0 : n[o].description,
        h = `Command ${r({ timedOut: u, timeout: p, errorCode: a && a.code, signal: o, signalDescription: m, exitCode: s, isCanceled: d })}: ${c}`,
        g = Object.prototype.toString.call(a) === `[object Error]`,
        _ = g ? `${h}\n${a.message}` : h,
        v = [_, t, e].filter(Boolean).join(`
`);
      return (
        g ? ((a.originalMessage = a.message), (a.message = v)) : (a = Error(v)),
        (a.shortMessage = _),
        (a.command = c),
        (a.escapedCommand = l),
        (a.exitCode = s),
        (a.signal = o),
        (a.signalDescription = m),
        (a.stdout = e),
        (a.stderr = t),
        i !== void 0 && (a.all = i),
        `bufferedData` in a && delete a.bufferedData,
        (a.failed = !0),
        (a.timedOut = !!u),
        (a.isCanceled = d),
        (a.killed = f && !u),
        a
      );
    };
  }),
  zr = e.t((e, t) => {
    var n = [`stdin`, `stdout`, `stderr`],
      r = (e) => n.some((t) => e[t] !== void 0),
      i = (e) => {
        if (!e) return;
        let { stdio: t } = e;
        if (t === void 0) return n.map((t) => e[t]);
        if (r(e))
          throw Error(
            `It's not possible to provide \`stdio\` in combination with one of ${n.map((e) => `\`${e}\``).join(`, `)}`,
          );
        if (typeof t == `string`) return t;
        if (!Array.isArray(t))
          throw TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);
        let i = Math.max(t.length, n.length);
        return Array.from({ length: i }, (e, n) => t[n]);
      };
    ((t.exports = i),
      (t.exports.node = (e) => {
        let t = i(e);
        return t === `ipc`
          ? `ipc`
          : t === void 0 || typeof t == `string`
            ? [t, t, t, `ipc`]
            : t.includes(`ipc`)
              ? t
              : [...t, `ipc`];
      }));
  }),
  Br = e.t((e, t) => {
    ((t.exports = [`SIGABRT`, `SIGALRM`, `SIGHUP`, `SIGINT`, `SIGTERM`]),
      process.platform !== `win32` &&
        t.exports.push(
          `SIGVTALRM`,
          `SIGXCPU`,
          `SIGXFSZ`,
          `SIGUSR2`,
          `SIGTRAP`,
          `SIGSYS`,
          `SIGQUIT`,
          `SIGIOT`,
        ),
      process.platform === `linux` && t.exports.push(`SIGIO`, `SIGPOLL`, `SIGPWR`, `SIGSTKFLT`, `SIGUNUSED`));
  }),
  Vr = e.t((e, t) => {
    var n = global.process,
      r = function (e) {
        return (
          e &&
          typeof e == `object` &&
          typeof e.removeListener == `function` &&
          typeof e.emit == `function` &&
          typeof e.reallyExit == `function` &&
          typeof e.listeners == `function` &&
          typeof e.kill == `function` &&
          typeof e.pid == `number` &&
          typeof e.on == `function`
        );
      };
    if (!r(n))
      t.exports = function () {
        return function () {};
      };
    else {
      var i = require("assert"),
        a = Br(),
        o = /^win/i.test(n.platform),
        s = require("events");
      typeof s != `function` && (s = s.EventEmitter);
      var c;
      (n.__signal_exit_emitter__
        ? (c = n.__signal_exit_emitter__)
        : ((c = n.__signal_exit_emitter__ = new s()), (c.count = 0), (c.emitted = {})),
        c.infinite || (c.setMaxListeners(1 / 0), (c.infinite = !0)),
        (t.exports = function (e, t) {
          if (!r(global.process)) return function () {};
          (i.equal(typeof e, `function`, `a callback must be provided for exit handler`), f === !1 && p());
          var n = `exit`;
          return (
            t && t.alwaysLast && (n = `afterexit`),
            c.on(n, e),
            function () {
              (c.removeListener(n, e),
                c.listeners(`exit`).length === 0 && c.listeners(`afterexit`).length === 0 && l());
            }
          );
        }));
      var l = function () {
        f &&
          r(global.process) &&
          ((f = !1),
          a.forEach(function (e) {
            try {
              n.removeListener(e, d[e]);
            } catch {}
          }),
          (n.emit = g),
          (n.reallyExit = m),
          --c.count);
      };
      t.exports.unload = l;
      var u = function (e, t, n) {
          c.emitted[e] || ((c.emitted[e] = !0), c.emit(e, t, n));
        },
        d = {};
      (a.forEach(function (e) {
        d[e] = function () {
          r(global.process) &&
            n.listeners(e).length === c.count &&
            (l(),
            u(`exit`, null, e),
            u(`afterexit`, null, e),
            o && e === `SIGHUP` && (e = `SIGINT`),
            n.kill(n.pid, e));
        };
      }),
        (t.exports.signals = function () {
          return a;
        }));
      var f = !1,
        p = function () {
          !f &&
            r(global.process) &&
            ((f = !0),
            (c.count += 1),
            (a = a.filter(function (e) {
              try {
                return (n.on(e, d[e]), !0);
              } catch {
                return !1;
              }
            })),
            (n.emit = _),
            (n.reallyExit = h));
        };
      t.exports.load = p;
      var m = n.reallyExit,
        h = function (e) {
          r(global.process) &&
            ((n.exitCode = e || 0),
            u(`exit`, n.exitCode, null),
            u(`afterexit`, n.exitCode, null),
            m.call(n, n.exitCode));
        },
        g = n.emit,
        _ = function (e, t) {
          if (e === `exit` && r(global.process)) {
            t !== void 0 && (n.exitCode = t);
            var i = g.apply(this, arguments);
            return (u(`exit`, n.exitCode, null), u(`afterexit`, n.exitCode, null), i);
          }
          return g.apply(this, arguments);
        };
    }
  }),
  Hr = e.t((e, t) => {
    var n = require("os"),
      r = Vr(),
      i = 5e3,
      a = (e, t = `SIGTERM`, n = {}) => {
        let r = e(t);
        return (o(e, t, n, r), r);
      },
      o = (e, t, n, r) => {
        if (!s(t, n, r)) return;
        let i = l(n),
          a = setTimeout(() => {
            e(`SIGKILL`);
          }, i);
        a.unref && a.unref();
      },
      s = (e, { forceKillAfterTimeout: t }, n) => c(e) && t !== !1 && n,
      c = (e) => e === n.constants.signals.SIGTERM || (typeof e == `string` && e.toUpperCase() === `SIGTERM`),
      l = ({ forceKillAfterTimeout: e = !0 }) => {
        if (e === !0) return i;
        if (!Number.isFinite(e) || e < 0)
          throw TypeError(
            `Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`,
          );
        return e;
      },
      u = (e, t) => {
        e.kill() && (t.isCanceled = !0);
      },
      d = (e, t, n) => {
        (e.kill(t), n(Object.assign(Error(`Timed out`), { timedOut: !0, signal: t })));
      };
    t.exports = {
      spawnedKill: a,
      spawnedCancel: u,
      setupTimeout: (e, { timeout: t, killSignal: n = `SIGTERM` }, r) => {
        if (t === 0 || t === void 0) return r;
        let i,
          a = new Promise((r, a) => {
            i = setTimeout(() => {
              d(e, n, a);
            }, t);
          }),
          o = r.finally(() => {
            clearTimeout(i);
          });
        return Promise.race([a, o]);
      },
      validateTimeout: ({ timeout: e }) => {
        if (e !== void 0 && (!Number.isFinite(e) || e < 0))
          throw TypeError(
            `Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`,
          );
      },
      setExitHandler: async (e, { cleanup: t, detached: n }, i) => {
        if (!t || n) return i;
        let a = r(() => {
          e.kill();
        });
        return i.finally(() => {
          a();
        });
      },
    };
  }),
  Ur = e.t((e, t) => {
    var n = (e) => typeof e == `object` && !!e && typeof e.pipe == `function`;
    ((n.writable = (e) =>
      n(e) && e.writable !== !1 && typeof e._write == `function` && typeof e._writableState == `object`),
      (n.readable = (e) =>
        n(e) && e.readable !== !1 && typeof e._read == `function` && typeof e._readableState == `object`),
      (n.duplex = (e) => n.writable(e) && n.readable(e)),
      (n.transform = (e) => n.duplex(e) && typeof e._transform == `function`),
      (t.exports = n));
  }),
  Wr = e.t((e, t) => {
    var { PassThrough: n } = require("stream");
    t.exports = (e) => {
      e = { ...e };
      let { array: t } = e,
        { encoding: r } = e,
        i = r === `buffer`,
        a = !1;
      (t ? (a = !(r || i)) : (r ||= `utf8`), i && (r = null));
      let o = new n({ objectMode: a });
      r && o.setEncoding(r);
      let s = 0,
        c = [];
      return (
        o.on(`data`, (e) => {
          (c.push(e), a ? (s = c.length) : (s += e.length));
        }),
        (o.getBufferedValue = () => (t ? c : i ? Buffer.concat(c, s) : c.join(``))),
        (o.getBufferedLength = () => s),
        o
      );
    };
  }),
  Gr = e.t((e, t) => {
    var { constants: n } = require("buffer"),
      r = require("stream"),
      { promisify: i } = require("util"),
      a = Wr(),
      o = i(r.pipeline),
      s = class extends Error {
        constructor() {
          (super(`maxBuffer exceeded`), (this.name = `MaxBufferError`));
        }
      };
    async function c(e, t) {
      if (!e) throw Error(`Expected a stream`);
      t = { maxBuffer: 1 / 0, ...t };
      let { maxBuffer: r } = t,
        i = a(t);
      return (
        await new Promise((t, a) => {
          let c = (e) => {
            (e && i.getBufferedLength() <= n.MAX_LENGTH && (e.bufferedData = i.getBufferedValue()), a(e));
          };
          ((async () => {
            try {
              (await o(e, i), t());
            } catch (e) {
              c(e);
            }
          })(),
            i.on(`data`, () => {
              i.getBufferedLength() > r && c(new s());
            }));
        }),
        i.getBufferedValue()
      );
    }
    ((t.exports = c),
      (t.exports.buffer = (e, t) => c(e, { ...t, encoding: `buffer` })),
      (t.exports.array = (e, t) => c(e, { ...t, array: !0 })),
      (t.exports.MaxBufferError = s));
  }),
  Kr = e.t((e, t) => {
    var { PassThrough: n } = require("stream");
    t.exports = function () {
      var e = [],
        t = new n({ objectMode: !0 });
      return (
        t.setMaxListeners(0),
        (t.add = r),
        (t.isEmpty = i),
        t.on(`unpipe`, a),
        Array.prototype.slice.call(arguments).forEach(r),
        t
      );
      function r(n) {
        return Array.isArray(n)
          ? (n.forEach(r), this)
          : (e.push(n),
            n.once(`end`, a.bind(null, n)),
            n.once(`error`, t.emit.bind(t, `error`)),
            n.pipe(t, { end: !1 }),
            this);
      }
      function i() {
        return e.length == 0;
      }
      function a(n) {
        ((e = e.filter(function (e) {
          return e !== n;
        })),
          !e.length && t.readable && t.end());
      }
    };
  }),
  qr = e.t((e, t) => {
    var n = Ur(),
      r = Gr(),
      i = Kr(),
      a = (e, t) => {
        t !== void 0 && e.stdin !== void 0 && (n(t) ? t.pipe(e.stdin) : e.stdin.end(t));
      },
      o = (e, { all: t }) => {
        if (!t || (!e.stdout && !e.stderr)) return;
        let n = i();
        return (e.stdout && n.add(e.stdout), e.stderr && n.add(e.stderr), n);
      },
      s = async (e, t) => {
        if (e) {
          e.destroy();
          try {
            return await t;
          } catch (e) {
            return e.bufferedData;
          }
        }
      },
      c = (e, { encoding: t, buffer: n, maxBuffer: i }) => {
        if (e && n) return t ? r(e, { encoding: t, maxBuffer: i }) : r.buffer(e, { maxBuffer: i });
      };
    t.exports = {
      handleInput: a,
      makeAllStream: o,
      getSpawnedResult: async (
        { stdout: e, stderr: t, all: n },
        { encoding: r, buffer: i, maxBuffer: a },
        o,
      ) => {
        let l = c(e, { encoding: r, buffer: i, maxBuffer: a }),
          u = c(t, { encoding: r, buffer: i, maxBuffer: a }),
          d = c(n, { encoding: r, buffer: i, maxBuffer: a * 2 });
        try {
          return await Promise.all([o, l, u, d]);
        } catch (r) {
          return Promise.all([
            { error: r, signal: r.signal, timedOut: r.timedOut },
            s(e, l),
            s(t, u),
            s(n, d),
          ]);
        }
      },
      validateInputSync: ({ input: e }) => {
        if (n(e)) throw TypeError("The `input` option cannot be a stream in sync mode");
      },
    };
  }),
  Jr = e.t((e, t) => {
    var n = (async () => {})().constructor.prototype,
      r = [`then`, `catch`, `finally`].map((e) => [e, Reflect.getOwnPropertyDescriptor(n, e)]);
    t.exports = {
      mergePromise: (e, t) => {
        for (let [n, i] of r) {
          let r = typeof t == `function` ? (...e) => Reflect.apply(i.value, t(), e) : i.value.bind(t);
          Reflect.defineProperty(e, n, { ...i, value: r });
        }
        return e;
      },
      getSpawnedPromise: (e) =>
        new Promise((t, n) => {
          (e.on(`exit`, (e, n) => {
            t({ exitCode: e, signal: n });
          }),
            e.on(`error`, (e) => {
              n(e);
            }),
            e.stdin &&
              e.stdin.on(`error`, (e) => {
                n(e);
              }));
        }),
    };
  }),
  Yr = e.t((e, t) => {
    var n = (e, t = []) => (Array.isArray(t) ? [e, ...t] : [e]),
      r = /^[\w.-]+$/,
      i = /"/g,
      a = (e) => (typeof e != `string` || r.test(e) ? e : `"${e.replace(i, `\\"`)}"`),
      o = (e, t) => n(e, t).join(` `),
      s = (e, t) =>
        n(e, t)
          .map((e) => a(e))
          .join(` `),
      c = / +/g;
    t.exports = {
      joinCommand: o,
      getEscapedCommand: s,
      parseCommand: (e) => {
        let t = [];
        for (let n of e.trim().split(c)) {
          let e = t[t.length - 1];
          e && e.endsWith(`\\`) ? (t[t.length - 1] = `${e.slice(0, -1)} ${n}`) : t.push(n);
        }
        return t;
      },
    };
  }),
  Xr = e.t((e, t) => {
    var n = require("path"),
      r = require("child_process"),
      i = kr(),
      a = Ar(),
      o = jr(),
      s = Nr(),
      c = Rr(),
      l = zr(),
      { spawnedKill: u, spawnedCancel: d, setupTimeout: f, validateTimeout: p, setExitHandler: m } = Hr(),
      { handleInput: h, getSpawnedResult: g, makeAllStream: _, validateInputSync: v } = qr(),
      { mergePromise: y, getSpawnedPromise: b } = Jr(),
      { joinCommand: x, parseCommand: S, getEscapedCommand: C } = Yr(),
      w = 1e8,
      T = ({ env: e, extendEnv: t, preferLocal: n, localDir: r, execPath: i }) => {
        let a = t ? { ...process.env, ...e } : e;
        return n ? o.env({ env: a, cwd: r, execPath: i }) : a;
      },
      E = (e, t, r = {}) => {
        let a = i._parse(e, t, r);
        return (
          (e = a.command),
          (t = a.args),
          (r = a.options),
          (r = {
            maxBuffer: w,
            buffer: !0,
            stripFinalNewline: !0,
            extendEnv: !0,
            preferLocal: !1,
            localDir: r.cwd || process.cwd(),
            execPath: process.execPath,
            encoding: `utf8`,
            reject: !0,
            cleanup: !0,
            all: !1,
            windowsHide: !0,
            ...r,
          }),
          (r.env = T(r)),
          (r.stdio = l(r)),
          process.platform === `win32` && n.basename(e, `.exe`) === `cmd` && t.unshift(`/q`),
          { file: e, args: t, options: r, parsed: a }
        );
      },
      D = (e, t, n) =>
        typeof t != `string` && !Buffer.isBuffer(t)
          ? n === void 0
            ? void 0
            : ``
          : e.stripFinalNewline
            ? a(t)
            : t,
      O = (e, t, n) => {
        let i = E(e, t, n),
          a = x(e, t),
          o = C(e, t);
        p(i.options);
        let l;
        try {
          l = r.spawn(i.file, i.args, i.options);
        } catch (e) {
          return y(
            new r.ChildProcess(),
            Promise.reject(
              c({
                error: e,
                stdout: ``,
                stderr: ``,
                all: ``,
                command: a,
                escapedCommand: o,
                parsed: i,
                timedOut: !1,
                isCanceled: !1,
                killed: !1,
              }),
            ),
          );
        }
        let v = b(l),
          S = f(l, i.options, v),
          w = m(l, i.options, S),
          T = { isCanceled: !1 };
        ((l.kill = u.bind(null, l.kill.bind(l))), (l.cancel = d.bind(null, l, T)));
        let O = s(async () => {
          let [{ error: e, exitCode: t, signal: n, timedOut: r }, s, u, d] = await g(l, i.options, w),
            f = D(i.options, s),
            p = D(i.options, u),
            m = D(i.options, d);
          if (e || t !== 0 || n !== null) {
            let s = c({
              error: e,
              exitCode: t,
              signal: n,
              stdout: f,
              stderr: p,
              all: m,
              command: a,
              escapedCommand: o,
              parsed: i,
              timedOut: r,
              isCanceled: T.isCanceled,
              killed: l.killed,
            });
            if (!i.options.reject) return s;
            throw s;
          }
          return {
            command: a,
            escapedCommand: o,
            exitCode: 0,
            stdout: f,
            stderr: p,
            all: m,
            failed: !1,
            timedOut: !1,
            isCanceled: !1,
            killed: !1,
          };
        });
        return (h(l, i.options.input), (l.all = _(l, i.options)), y(l, O));
      };
    ((t.exports = O),
      (t.exports.sync = (e, t, n) => {
        let i = E(e, t, n),
          a = x(e, t),
          o = C(e, t);
        v(i.options);
        let s;
        try {
          s = r.spawnSync(i.file, i.args, i.options);
        } catch (e) {
          throw c({
            error: e,
            stdout: ``,
            stderr: ``,
            all: ``,
            command: a,
            escapedCommand: o,
            parsed: i,
            timedOut: !1,
            isCanceled: !1,
            killed: !1,
          });
        }
        let l = D(i.options, s.stdout, s.error),
          u = D(i.options, s.stderr, s.error);
        if (s.error || s.status !== 0 || s.signal !== null) {
          let e = c({
            stdout: l,
            stderr: u,
            error: s.error,
            signal: s.signal,
            exitCode: s.status,
            command: a,
            escapedCommand: o,
            parsed: i,
            timedOut: s.error && s.error.code === `ETIMEDOUT`,
            isCanceled: !1,
            killed: s.signal !== null,
          });
          if (!i.options.reject) return e;
          throw e;
        }
        return {
          command: a,
          escapedCommand: o,
          exitCode: 0,
          stdout: l,
          stderr: u,
          failed: !1,
          timedOut: !1,
          isCanceled: !1,
          killed: !1,
        };
      }),
      (t.exports.command = (e, t) => {
        let [n, ...r] = S(e);
        return O(n, r, t);
      }),
      (t.exports.commandSync = (e, t) => {
        let [n, ...r] = S(e);
        return O.sync(n, r, t);
      }),
      (t.exports.node = (e, t, n = {}) => {
        t && !Array.isArray(t) && typeof t == `object` && ((n = t), (t = []));
        let r = l.node(n),
          i = process.execArgv.filter((e) => !e.startsWith(`--inspect`)),
          { nodePath: a = process.execPath, nodeOptions: o = i } = n;
        return O(a, [...o, e, ...(Array.isArray(t) ? t : [])], {
          ...n,
          stdin: void 0,
          stdout: void 0,
          stderr: void 0,
          stdio: r,
          shell: !1,
        });
      }));
  }),
  Zr = e.a(Xr());
function Qr(e) {
  try {
    let t = (0, c.readlinkSync)(e),
      n = l.default.resolve(l.default.dirname(e), t);
    return (0, c.existsSync)(n) ? n : null;
  } catch {
    return (0, c.existsSync)(e) ? e : null;
  }
}
([
  `entry=$(getent passwd "$(id -u)" 2>/dev/null) || entry=$(id -P 2>/dev/null) || exit 1`,
  "shell=${entry##*:}",
  `test -n "$shell" || exit 1`,
  `printf "%s\\n" "$shell"`,
].join(`; `),
  { ...n.A },
  n.D,
  r.a(`git`));
function $r(e) {
  let t = ei(e, `SHELL`);
  if (t != null && /(?:^|[\\/])(?:pwsh|powershell)(?:\.exe)?$/i.test(t)) return t;
  let n = [
      [ei(e, `SystemRoot`) ?? ei(e, `windir`) ?? `C:\\Windows`, `System32`, `WindowsPowerShell`, `v1.0`],
      ...[`ProgramFiles`, `ProgramW6432`, `ProgramFiles(x86)`].flatMap((t) => {
        let n = ei(e, t);
        return n == null ? [] : [`7`, `7-preview`, `6`].map((e) => [n, `PowerShell`, e]);
      }),
    ],
    r = [
      ...(ei(e, `PATH`)?.split(`;`) ?? []),
      ...n.flatMap((e) => [l.default.win32.join(...e), l.default.join(...e)]),
    ],
    i = ei(e, `LOCALAPPDATA`),
    a =
      i == null
        ? null
        : l.default.win32.normalize(l.default.win32.join(i, `Microsoft`, `WindowsApps`)).toLowerCase();
  for (let e of r) {
    let t = e.trim().replace(/^"|"$/g, ``);
    if (t.length === 0) continue;
    let n = l.default.win32.normalize(t).toLowerCase();
    if (a == null || (n !== a && !n.startsWith(`${a}${l.default.win32.sep}`)))
      for (let e of [`pwsh.exe`, `powershell.exe`])
        for (let n of [l.default.win32.join(t, e), l.default.join(t, e)]) {
          let e = Qr(n);
          if (e != null) return e;
        }
  }
  return null;
}
function ei(e, t) {
  return Object.entries(e).find(
    ([e, n]) => e.toLowerCase() === t.toLowerCase() && n != null && n.length > 0,
  )?.[1];
}
var ti = `echo ${n.k}&&set&&echo ${n.k}`,
  ni = `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; Write-Output '${n.k}'; Get-ChildItem Env: | ForEach-Object { '{0}={1}' -f $_.Name, $_.Value }; Write-Output '${n.k}'`;
function ri(e) {
  let { shell: t, interactive: n, extraEnv: r, signal: i } = si(e),
    a = t ?? fi();
  return oi(a, n, r, i).catch((e) => {
    if (t || ci(e)) throw e;
    return ii(a, n, r, i);
  });
}
function ii(e, t, n, r) {
  return ai(pi(e), t, n, r, 0);
}
async function ai(e, t, n, r, i) {
  let a = e[i];
  if (a == null) return h.default.env;
  try {
    return await oi(a, t, n, r);
  } catch (e) {
    if (ci(e)) throw e;
  }
  return ai(e, t, n, r, i + 1);
}
function oi(e, t, r, i) {
  if (i?.aborted) return Promise.reject(li(i));
  let a = (0, Zr.default)(e, ui(e, t), { env: { ...n.A, ...r }, windowsHide: !0 }),
    o = a.then(({ stdout: t }) =>
      di(
        n.j(
          t,
          h.default.platform === `win32` && mi(e) !== `posix`
            ? `
`
            : `\0`,
        ),
        e,
      ),
    );
  return i == null
    ? o
    : (a.catch(() => {}),
      new Promise((e, t) => {
        let n = () => {
          (a.cancel(), t(li(i)));
        };
        (i.addEventListener(`abort`, n, { once: !0 }),
          o.then(e, t).finally(() => {
            i.removeEventListener(`abort`, n);
          }));
      }));
}
function si(e) {
  return typeof e == `string`
    ? { shell: e, interactive: !0, extraEnv: void 0, signal: void 0 }
    : { shell: e?.shell, interactive: e?.interactive ?? !0, extraEnv: e?.extraEnv, signal: e?.signal };
}
function ci(e) {
  return (
    (e instanceof Error && e.name === `AbortError`) ||
    (typeof e == `object` && !!e && `isCanceled` in e && e.isCanceled === !0)
  );
}
function li(e) {
  if (e.reason instanceof Error) return e.reason;
  let t = Error(e.reason == null ? `The operation was aborted` : String(e.reason));
  return ((t.name = `AbortError`), t);
}
function ui(e, t) {
  if (h.default.platform !== `win32`) return [t ? `-ilc` : `-lc`, n.O];
  let r = mi(e);
  return r === `powershell`
    ? t
      ? [`-NoLogo`, `-Command`, ni]
      : [`-NoLogo`, `-NoProfile`, `-NonInteractive`, `-Command`, ni]
    : r === `cmd`
      ? [`/d`, `/s`, `/c`, ti]
      : [t ? `-ilc` : `-lc`, n.O];
}
function di(e, t) {
  if (h.default.platform !== `win32` || mi(t) !== `powershell`) return e;
  let n = { ...e, SHELL: t };
  if (hi(e, `COMSPEC`) == null) {
    let e = hi(h.default.env, `COMSPEC`);
    e != null && (n.COMSPEC = e);
  }
  return n;
}
function fi(e = h.default.platform, t = h.default.env) {
  if (e === `win32`) {
    let e = $r(t);
    if (e != null) return e;
    let n = hi(t, `COMSPEC`);
    return n != null && n.length > 0 ? n : `cmd.exe`;
  }
  try {
    let e = (0, u.userInfo)().shell;
    if (e) return e;
  } catch {}
  return e === `darwin` ? t.SHELL || `/bin/zsh` : t.SHELL || `/bin/sh`;
}
function pi(e) {
  if (h.default.platform !== `win32`) return [`/bin/zsh`, `/bin/bash`].filter((t) => t !== e);
  let t = [],
    n = $r(h.default.env);
  n != null && gi(t, n);
  let r = hi(h.default.env, `COMSPEC`);
  return (
    r != null && r.length > 0 && gi(t, r),
    gi(t, `powershell.exe`),
    gi(t, `pwsh.exe`),
    gi(t, `cmd.exe`),
    t.filter((t) => !_i(t, e))
  );
}
function mi(e) {
  let t = l.default.win32.basename(e).toLowerCase();
  return t === `powershell` || t === `powershell.exe` || t === `pwsh` || t === `pwsh.exe`
    ? `powershell`
    : t === `cmd` || t === `cmd.exe`
      ? `cmd`
      : `posix`;
}
function hi(e, t) {
  let n = e[t];
  if (n != null) return n;
  let r = t.toLowerCase();
  for (let t of Object.keys(e))
    if (t.toLowerCase() === r) {
      let n = e[t];
      if (n != null) return n;
    }
}
function gi(e, t) {
  t.length !== 0 && (e.some((e) => _i(e, t)) || e.push(t));
}
function _i(e, t) {
  return e.toLowerCase() === t.toLowerCase();
}
var vi = n.nt,
  yi = `Codex Workspace dependencies are not supported on Windows 10.`,
  bi = `LATEST.json`,
  xi = `https://persistent.oaistatic.com`,
  J = r.a(`primary-runtime-installer`),
  Y = null,
  Si = null,
  Ci = t.O({
    artifactToolVersion: t.N().min(1).nullable().optional(),
    bundleFormatVersion: t.D().int().positive().optional(),
    bundleVersion: t.N().optional(),
    bundledPlugins: t.h(t.N().min(1)).optional(),
    bundledSkills: t.h(t.N().min(1)).optional(),
    nativeDependencies: t.h(t.N().min(1)).optional(),
    libreOfficeVersion: t.N().min(1).nullable().optional(),
    pnpmVersion: t.N().min(1).optional(),
    skillsToRemove: t.h(t.N().min(1)).optional(),
  }),
  wi = t.j(t.N(), t.N()),
  Ti = class extends Error {
    constructor() {
      super(`Windows primary runtime framework requires a configured MSIX release with a bundle version.`);
    }
  },
  Ei = new WeakMap();
function Di(e, t = {}) {
  if (typeof e == `object` && e) {
    let t = Ei.get(e);
    if (t != null) return t;
  }
  let n = t.failureStage ?? `unknown`;
  return {
    bundleOperationId: t.bundleOperationId ?? null,
    bundleVersion: t.bundleVersion ?? null,
    errorCategory: ki(e, n),
    errorCode: gr(e),
    failureStage: n,
    retryable: ji(e),
  };
}
function Oi(e, t) {
  typeof e == `object` && e && Ei.set(e, t);
}
function ki(e, n) {
  if (Mi(e)) return `aborted`;
  if (e instanceof Error && e.message === `Codex Workspace dependencies are not supported on Windows 10.`)
    return `unsupported_host`;
  if (e instanceof TypeError && e.message === `fetch failed`) return `network_fetch_failed`;
  if (e instanceof t.B || (n === `resolve_manifest` && e instanceof SyntaxError)) return `invalid_manifest`;
  let r = gr(e);
  if (r === `ENOSPC`) return `disk_full`;
  if (r === `EACCES` || r === `EPERM`) return `permission_denied`;
  if (
    r === `ECONNABORTED` ||
    r === `ECONNREFUSED` ||
    r === `ECONNRESET` ||
    r === `EHOSTUNREACH` ||
    r === `ENETUNREACH`
  )
    return `network_fetch_failed`;
  if (r === `ETIMEDOUT` || (e instanceof Error && e.name === `TimeoutError`)) return `timeout`;
  if (e instanceof Error) {
    if (e.message.startsWith(`Checksum mismatch`)) return `checksum_mismatch`;
    let t = Ai(e.message);
    if (t != null) return t >= 500 ? `http_server_error` : `http_client_error`;
  }
  return n === `prepare_archive` || n === `list_archive` || n === `extract_archive`
    ? `archive_processing_failed`
    : n === `validate_cached_runtime` || n === `validate_payload`
      ? `validation_failed`
      : n === `sync_plugins` || n === `sync_skills`
        ? `post_install_failed`
        : n === `create_staging_directory` || n === `activate_runtime` || n === `cleanup`
          ? `filesystem_error`
          : `unknown`;
}
function Ai(e) {
  let t = e.match(/\((\d{3}) [^)]+\)/);
  if (t == null) return null;
  let n = Number(t[1]);
  return n >= 400 && n <= 599 ? n : null;
}
function ji(e) {
  let t = ki(e, `unknown`),
    n = e instanceof Error ? Ai(e.message) : null;
  return (
    t === `http_server_error` || t === `network_fetch_failed` || t === `timeout` || n === 408 || n === 429
  );
}
function Mi(e) {
  return e instanceof Error || e instanceof DOMException
    ? e.name === `AbortError` || e.message.toLowerCase().includes(`aborted`)
    : !1;
}
async function Ni(e, t, n) {
  n?.throwIfAborted();
  let r = e(t);
  if (n == null) return r;
  let i = () => {},
    a = new Promise((e, t) => {
      ((i = () =>
        t(
          n.reason instanceof Error ? n.reason : new DOMException(`The operation was aborted`, `AbortError`),
        )),
        n.addEventListener(`abort`, i, { once: !0 }),
        n.aborted && i());
    });
  try {
    return await Promise.race([r, a]);
  } finally {
    n.removeEventListener(`abort`, i);
  }
}
function Pi() {
  return { arch: u.default.arch(), platform: process.platform };
}
function Fi({ arch: e, platform: t }) {
  return `${ua(t)}-${da(e)}`;
}
function Ii(e = {}) {
  return Da(X(e.installRoot));
}
function Li(e) {
  Y = e;
}
function Ri(e = {}) {
  return Oa(X(e.installRoot));
}
function zi(e = {}) {
  return ka(X(e.installRoot));
}
function Bi(e = {}) {
  if ((e.target ?? Pi()).platform !== `win32`) return null;
  let t = l.default.join(X(e.installRoot), `dependencies`, `native`, `git`, `cmd`);
  return Va(t) ? t : null;
}
function Vi(e, t = {}) {
  if ((t.target ?? Pi()).platform !== `win32`) return;
  let n = X(t.installRoot),
    r = Oa(n);
  try {
    let t = wi.safeParse(
      JSON.parse((0, c.readFileSync)(l.default.join(r, `native-executables.json`), `utf8`)),
    );
    if (t.success) {
      let i = (0, c.realpathSync)(l.default.join(n, `dependencies`, `native`)),
        a = [];
      for (let e of Object.values(t.data)) {
        if (l.default.isAbsolute(e)) continue;
        let t;
        try {
          t = (0, c.realpathSync)(l.default.resolve(r, e));
        } catch {
          continue;
        }
        let n = l.default.relative(i, t);
        if (
          l.default.extname(t).toLowerCase() !== `.exe` ||
          n === `..` ||
          n.startsWith(`..` + l.default.sep) ||
          l.default.isAbsolute(n) ||
          !(0, c.statSync)(t).isFile()
        )
          continue;
        let o = l.default.dirname(t);
        a.some((e) => Wa(e, o)) || a.push(o);
      }
      if (a.length > 0) {
        let t = B(e),
          n = t == null ? [] : t.split(`;`);
        V(e, [...a, ...n.filter((e) => !a.some((t) => Wa(t, e)))].join(`;`));
      }
    }
  } catch {}
  let i = l.default.join(n, `dependencies`, `node`, `bin`);
  Va(i) && V(e, Ua(B(e), i));
  let a = Bi(t);
  a != null && V(e, Ua(B(e), a));
  let o = l.default.join(n, `dependencies`, `native`, `powershell`);
  V(e, Ua(B(e), o, !0));
}
function Hi(e, t, n) {
  return [
    (t.baseUrl ?? (n === `latest` ? xi : `https://oaisidekickupdates.blob.core.windows.net/owl`)).replace(
      /\/+$/,
      ``,
    ),
    vi,
    ...(n === `latest-alpha` ? [`alpha`] : []),
    `latest`,
    Fi(e),
    bi,
  ].join(`/`);
}
function Ui(e, { bundleVersion: t } = {}) {
  return `### Workspace Dependencies
Use these bundled paths for sheets, slides, documents, PDFs, images, or browser automation:
${t == null ? `` : `- Bundle version: ${Z(t)}\n`}${e.gitPath == null ? `` : `- Git executable: ${Z(e.gitPath)}\n`}- Node.js executable: ${Z(e.nodePath)}
- Node.js packages: ${Z(e.nodeModulesPath)}
${e.pnpmPath == null ? `` : `- pnpm executable: ${Z(e.pnpmPath)}\n`}- Python executable: ${Z(e.pythonPath)}
- Python packages: ${Z(e.pythonLibrariesPath)}
- Override binaries: ${Z(e.overrideBinPath)}
- Fallback binaries: ${Z(e.fallbackBinPath)}`;
}
async function Wi({ installRoot: e } = {}) {
  return (await Ta(X(e)))?.bundleVersion ?? null;
}
async function Gi({ installRoot: e, target: t = Pi() } = {}) {
  let n = X(e),
    r = await Ta(n);
  if (r == null) return null;
  try {
    let e = await Aa({
        bundleFormatVersion: r.bundleFormatVersion ?? 1,
        runtimeRoot: n,
        targetPlatform: ua(t.platform),
      }),
      [i, a] = await Promise.all([
        d.default.stat(e.nodePath).catch(() => null),
        d.default.stat(e.nodeModulesPath).catch(() => null),
      ]);
    return i?.isFile() !== !0 || a?.isDirectory() !== !0 ? null : e;
  } catch {
    return null;
  }
}
async function Ki(e = {}) {
  let t = e.target ?? Pi(),
    n = e.runtimeRoot ?? X(e.installRoot),
    r = n === Y ? `framework` : `archive`,
    i = await Ta(n),
    a = {
      artifactToolVersion: i?.artifactToolVersion ?? null,
      bundleVersion: i?.bundleVersion ?? null,
      installed: !1,
      instructions: null,
      libreOfficeVersion: i?.libreOfficeVersion ?? null,
      problems: [],
    };
  if (i == null) {
    let e = await Ba(n);
    return (
      a.problems.push(
        e ? `Codex dependency bundle metadata is missing` : `Codex dependencies are not installed`,
      ),
      f(a)
    );
  }
  let o;
  try {
    o = await Aa({
      bundleFormatVersion: i.bundleFormatVersion ?? 1,
      runtimeRoot: n,
      targetPlatform: ua(t.platform),
    });
  } catch (e) {
    return (
      a.problems.push(e instanceof Error ? e.message : `Failed to validate Codex dependencies: ${String(e)}`),
      f(a)
    );
  }
  let s = await hr(o, n, i.bundleVersion ?? null, e);
  if (((a.problems = s), s.length > 0)) return f(a);
  let c = ua(t.platform),
    u =
      e.preferredGitPath ??
      (i.nativeDependencies?.includes(`git`) === !0
        ? c === `win32`
          ? l.default.join(n, `dependencies`, `native`, `git`, `cmd`, `git.exe`)
          : await ja([l.default.join(o.fallbackBinPath, `git`), l.default.join(o.binPath, `git`)])
        : void 0),
    d = {
      fallbackBinPath: o.fallbackBinPath,
      gitPath: u,
      nodeModulesPath: o.nodeModulesPath,
      nodePath: o.nodePath,
      overrideBinPath: o.overrideBinPath,
      pnpmPath: o.pnpmPath,
      pythonLibrariesPath: Ea(o.pythonPath),
      pythonPath: o.pythonPath,
    };
  return f({ ...a, installed: !0, instructions: Ui(d, { bundleVersion: a.bundleVersion }) });
  function f(t) {
    return (
      e.probeExecutables &&
        ((Si = {
          runtimeRoot: n,
          bundleVersion: t.bundleVersion,
          checkedAt: new Date().toISOString(),
          problems: t.problems,
        }),
        J().info(`primary_runtime_validation_finished`, {
          safe: {
            bundleVersion: t.bundleVersion,
            runtimeSource: r,
            outcome: t.installed ? `passed` : `failed`,
            problemCount: t.problems.length,
          },
          sensitive: { runtimeRoot: n, problems: t.problems },
        })),
      t
    );
  }
}
function qi() {
  return { runtimeSource: Y == null ? `archive` : `framework`, runtimeRoot: X() };
}
async function Ji() {
  let e = qi(),
    t = await Ki();
  return {
    ...e,
    diagnostics: t,
    validation: Si?.runtimeRoot === e.runtimeRoot && Si.bundleVersion === t.bundleVersion ? Si : null,
  };
}
async function Yi({
  fetchImpl: e = Bn,
  fetchManifest: t,
  installRoot: n = l.default.join(u.default.homedir(), `.cache`, `codex-runtimes`),
  osRelease: r,
  requireWindowsFramework: i = !1,
  release: a,
  runtimeInstallConfig: o,
  signal: s,
  target: c,
}) {
  let d = await ea({
    fetchManifest: t ?? ((t, n) => fa(t, n, e)),
    requireWindowsFramework: i,
    release: a,
    runtimeInstallConfig: o,
    signal: s,
    target: c,
  });
  if (!na({ manifest: d, osRelease: r ?? u.default.release(), target: c }))
    return { desiredBundleVersion: null, installedBundleVersion: null, status: `unsupported` };
  let f = d.bundleVersion ?? null,
    p = ia(d) === `msix` ? Y : l.default.join(n, d.runtimeRootDirectoryName || vi),
    m = p == null ? null : ((await Ta(p))?.bundleVersion ?? null);
  return m == null
    ? { desiredBundleVersion: f, installedBundleVersion: m, status: `missing` }
    : f != null && m === f
      ? { desiredBundleVersion: f, installedBundleVersion: m, status: `current` }
      : { desiredBundleVersion: f, installedBundleVersion: m, status: `outdated` };
}
async function Xi(e = {}) {
  let t = X(e.installRoot);
  return (await Ba(t)) ? t : null;
}
function Zi({ entries: e, extractDir: t }) {
  let n = l.default.resolve(t);
  for (let r of e) {
    let e = l.default.resolve(t, r);
    if (e !== n && !e.startsWith(`${n}${l.default.sep}`))
      throw Error(`Archive entry '${r}' would extract outside target.`);
  }
}
async function Qi(e, t, n = `latest`, r = {}) {
  let i = r.bundleOperationId ?? a.default.randomUUID(),
    o = r.trigger ?? `unknown`,
    s = Date.now(),
    c = `resolve_manifest`,
    l = null,
    u = Fi(e);
  J().info(`primary_runtime_bundle_install_started`, {
    safe: { bundleOperationId: i, forceReinstall: r.forceReinstall ?? !1, release: n, target: u, trigger: o },
  });
  try {
    let a = await $i(e, t, n, {
      ...r,
      bundleOperationId: i,
      onTelemetryStageChange: (e, t) => {
        ((c = e), (l = t), r.onTelemetryStageChange?.(e, t));
      },
      trigger: o,
    });
    return (
      J().info(`primary_runtime_bundle_install_outcome`, {
        safe: {
          bundleOperationId: i,
          bundleVersion: a.bundleVersion,
          durationMs: Date.now() - s,
          errorCategory: null,
          errorCode: null,
          failureStage: null,
          forceReinstall: r.forceReinstall ?? !1,
          outcome: a.status,
          release: n,
          retryable: !1,
          target: u,
          trigger: o,
        },
      }),
      a
    );
  } catch (e) {
    let t = Di(e, { bundleOperationId: i, bundleVersion: l, failureStage: c }),
      a = { ...t, bundleOperationId: i, bundleVersion: t.bundleVersion ?? l };
    Oi(e, a);
    let d =
        a.errorCategory === `aborted`
          ? `aborted`
          : a.errorCategory === `unsupported_host`
            ? `unsupported`
            : `failed`,
      f = {
        bundleOperationId: i,
        bundleVersion: a.bundleVersion,
        durationMs: Date.now() - s,
        errorCategory: a.errorCategory,
        errorCode: a.errorCode,
        failureStage: a.failureStage,
        forceReinstall: r.forceReinstall ?? !1,
        outcome: d,
        release: n,
        retryable: a.retryable,
        target: u,
        trigger: o,
      };
    throw (
      d === `failed`
        ? J().error(`primary_runtime_bundle_install_outcome`, { safe: f, sensitive: { error: e } })
        : J().info(`primary_runtime_bundle_install_outcome`, { safe: f, sensitive: { error: e } }),
      e
    );
  }
}
async function $i(e, t, n, r) {
  let i = `resolve_manifest`,
    o = null,
    s = (e, t = o) => {
      ((i = e), (o = t), r.onTelemetryStageChange?.(e, t));
    },
    c = (e) => {
      Oi(e, {
        bundleOperationId: r.bundleOperationId ?? null,
        bundleVersion: o,
        errorCategory: ki(e, i),
        errorCode: gr(e),
        failureStage: i,
        retryable: ji(e),
      });
    };
  ((({ downloadedBytes: e = null, phase: t, totalBytes: n = null }) => {
    r.onProgress?.({ bundleVersion: null, downloadedBytes: e, phase: t, totalBytes: n });
  })({ phase: `checking` }),
    r.signal?.throwIfAborted());
  let f = r.installRoot ?? l.default.join(u.default.homedir(), `.cache`, `codex-runtimes`),
    p = r.fetchImpl ?? Bn;
  s(`resolve_manifest`, null);
  let m;
  try {
    m = await ea({
      fetchManifest: r.fetchManifest ?? ((e, t) => fa(e, t, p)),
      requireWindowsFramework: r.requireWindowsFramework,
      onTelemetryStageChange: s,
      release: n,
      runtimeInstallConfig: t,
      signal: r.signal,
      target: e,
    });
  } catch (e) {
    throw (c(e), e);
  }
  if (
    (s(`check_host_support`, m.bundleVersion ?? null),
    !na({ manifest: m, osRelease: r.osRelease ?? u.default.release(), target: e }))
  )
    throw Error(yi);
  J().info(`Primary runtime download source`, {
    safe: {
      bundleVersion: m.bundleVersion ?? null,
      hasLatestConfig: t.latest != null,
      hasLatestAlphaConfig: t[`latest-alpha`] != null,
      release: n,
      target: Fi(e),
    },
    sensitive: { latestManifestUrl: Hi(e, t, n), runtimeArchiveUrl: m.archiveUrl },
  });
  let h = m.bundleFormatVersion ?? 1,
    g = ia(m),
    _ = m.runtimeRootDirectoryName || `codex-primary-runtime`,
    v = g === `msix` && Y != null ? Y : l.default.join(f, _),
    y = ({ downloadedBytes: e = null, phase: t, totalBytes: n = null }) => {
      r.onProgress?.({ bundleVersion: m.bundleVersion ?? null, downloadedBytes: e, phase: t, totalBytes: n });
    };
  if (
    !r.forceReinstall &&
    m.bundleVersion &&
    (g !== `msix` || Y != null) &&
    (r.signal?.throwIfAborted(),
    s(`validate_cached_runtime`),
    (await Ta(v))?.bundleVersion === m.bundleVersion)
  )
    try {
      y({ phase: `validating` });
      let t = await Aa({ bundleFormatVersion: h, runtimeRoot: v, targetPlatform: ua(e.platform) });
      return (
        r.signal?.throwIfAborted(),
        y({ phase: `installed` }),
        { bundleVersion: m.bundleVersion, paths: t, status: `already-current` }
      );
    } catch {}
  if (g === `msix`) {
    if (e.platform !== `win32` || r.installFrameworkPackage == null)
      throw Error(`Windows primary runtime framework installation is unavailable.`);
    try {
      (r.signal?.throwIfAborted(), s(`install_framework`), y({ phase: `downloading` }));
      let t = await r.installFrameworkPackage(m, r.signal, r.getInternalUpdateCdnRequestHeaders, s, (e) =>
        y({ ...e, phase: `downloading` }),
      );
      (r.signal?.throwIfAborted(), s(`validate_payload`), y({ phase: `validating` }));
      let n = await Aa({ bundleFormatVersion: h, runtimeRoot: t, targetPlatform: ua(e.platform) });
      return (
        r.signal?.throwIfAborted(),
        y({ phase: `installed` }),
        { bundleVersion: m.bundleVersion ?? null, frameworkRoot: t, paths: n, status: `installed` }
      );
    } catch (e) {
      throw (c(e), e);
    }
  }
  (r.signal?.throwIfAborted(), s(`create_staging_directory`), await d.default.mkdir(f, { recursive: !0 }));
  let b = await d.default.mkdtemp(l.default.join(f, `codex-runtime-install-`));
  try {
    s(`prepare_archive`);
    let t = g,
      i = m.archiveName ?? aa(t),
      o = l.default.join(b, i),
      c = l.default.join(b, `payload`);
    await d.default.mkdir(c, { recursive: !0 });
    let u = r.downloadFile ?? ((e, t, n, r, i) => pa(e, t, n, r, i, p)),
      v = ({ downloadedBytes: e, totalBytes: t }) => {
        y({ downloadedBytes: e, phase: `downloading`, totalBytes: t });
      },
      x = async (e) => {
        (r.signal?.throwIfAborted(),
          s(`verify_checksum`),
          y({ phase: `verifying` }),
          await ma({ archivePath: o, expectedSha256: m.archiveSha256, sourceUrl: e }));
      },
      S = !1;
    if (m.internalCdnUrl != null && r.getInternalUpdateCdnRequestHeaders != null)
      try {
        let e = await Ni(r.getInternalUpdateCdnRequestHeaders, m.internalCdnUrl, r.signal);
        e != null &&
          (s(`download_archive`),
          await u(m.internalCdnUrl, o, v, r.signal, { redirect: `error`, requestHeaders: e }),
          await x(m.internalCdnUrl),
          (S = !0));
      } catch (e) {
        (r.signal?.throwIfAborted(),
          await d.default.rm(o, { force: !0 }),
          J().warning(`Primary runtime CDN unavailable; using legacy URL`, {
            safe: { bundleVersion: m.bundleVersion ?? null, release: n },
            sensitive: { error: e },
          }));
      }
    (S || (s(`download_archive`), await u(m.archiveUrl, o, v, r.signal), await x(m.archiveUrl)),
      y({ phase: `extracting` }),
      r.signal?.throwIfAborted());
    let C = oa(t),
      w = r.listArchiveEntries ?? C.listEntries;
    (s(`list_archive`),
      Zi({ entries: await w(o), extractDir: c }),
      s(`extract_archive`),
      await (r.extractArchive ?? C.extract)(o, c));
    let T = l.default.join(c, _),
      E = ua(e.platform);
    (y({ phase: `validating` }),
      r.signal?.throwIfAborted(),
      s(`validate_payload`),
      await Aa({ bundleFormatVersion: h, runtimeRoot: T, targetPlatform: E }),
      s(`activate_runtime`));
    let D = l.default.join(f, _),
      O = e.platform === `win32`,
      k = l.default.join(f, `${_}.previous`),
      A = O ? `${k}-${a.default.randomUUID()}` : k;
    (O || (await d.default.rm(A, { recursive: !0, force: !0 })),
      r.signal?.throwIfAborted(),
      (await Ha(D)) && (await d.default.rename(D, A)));
    let j;
    try {
      (await d.default.rename(T, D),
        (j = await Aa({ bundleFormatVersion: h, runtimeRoot: D, targetPlatform: E })));
    } catch (e) {
      throw (
        await d.default.rm(D, { recursive: !0, force: !0 }),
        (await Ha(A)) && (await d.default.rename(A, D)),
        e
      );
    }
    return (
      O
        ? (await wa(A, `post_install_previous_runtime_cleanup`),
          await wa(k, `legacy_previous_runtime_cleanup`))
        : await d.default.rm(A, { recursive: !0, force: !0 }),
      y({ phase: `installed` }),
      { bundleVersion: m.bundleVersion ?? null, paths: j, status: `installed` }
    );
  } catch (e) {
    throw (c(e), e);
  } finally {
    (s(`cleanup`), await wa(b, `staging_cleanup`));
  }
}
async function ea({
  fetchManifest: e,
  onTelemetryStageChange: t,
  requireWindowsFramework: r = !1,
  release: i,
  runtimeInstallConfig: a,
  signal: o,
  target: s,
}) {
  let c = ta({ release: a[i], requireWindowsFramework: r, target: s });
  if (r && s.platform === `win32` && (c?.format?.toLowerCase() !== `msix` || !c.bundleVersion))
    throw new Ti();
  return (t?.(`resolve_manifest`), c ?? n.ot.parse(await e(Hi(s, a, i), o)));
}
function ta({ release: e, requireWindowsFramework: t = !1, target: r }) {
  let i = n.ct.safeParse(e);
  if (!i.success) return null;
  let a = t && r.platform === `win32` ? `-msix` : ``,
    o =
      i.data.platforms[sa(r) + a] ??
      (r.platform === `win32` && r.arch === `arm64` ? i.data.platforms[`windows-x86_64` + a] : void 0);
  return o == null ? null : ra(i.data, o);
}
function na({ manifest: e, osRelease: t, target: r }) {
  return n.at({ archiveFormat: ia(e), osRelease: t, platform: r.platform });
}
function ra(e, t) {
  return {
    archiveSha256: t.digest,
    archiveSizeBytes: t.size,
    archiveUrl: t.providers[0].url,
    bundleFormatVersion: e.bundleFormatVersion,
    bundleVersion: e.bundleVersion,
    format: t.format,
    internalCdnUrl: t.internalCdnUrl,
    runtimeRootDirectoryName: e.runtimeRootDirectoryName,
  };
}
function ia({ format: e, archiveName: t, archiveUrl: n }) {
  let r = e?.toLowerCase();
  if (r === `tar.gz` || r === `tar.xz` || r === `zip` || r === `msix`) return r;
  if (r != null) throw Error(`Unsupported primary runtime archive format: ${e}`);
  return t?.toLowerCase().endsWith(`.tar.gz`) || n.toLowerCase().endsWith(`.tar.gz`)
    ? `tar.gz`
    : t?.toLowerCase().endsWith(`.zip`) || n.toLowerCase().endsWith(`.zip`)
      ? `zip`
      : `tar.xz`;
}
function aa(e) {
  switch (e) {
    case `tar.gz`:
      return `node-runtime.tar.gz`;
    case `tar.xz`:
      return `node-runtime.tar.xz`;
    case `zip`:
      return `node-runtime.zip`;
  }
}
function oa(e) {
  switch (e) {
    case `tar.gz`:
      return { extract: (e, t) => va(`-xzf`, e, t), listEntries: _a };
    case `tar.xz`:
      return { extract: (e, t) => va(`-xJf`, e, t), listEntries: _a };
    case `zip`:
      return { extract: xa, listEntries: ya };
  }
}
function sa(e) {
  return `${ca(e.platform)}-${la(e.arch)}`;
}
function ca(e) {
  if (e === `darwin`) return `macos`;
  if (e === `linux`) return `linux`;
  if (e === `win32`) return `windows`;
  throw Error(`Unsupported platform: ${e}`);
}
function la(e) {
  let t = e.toLowerCase();
  if (t === `x64` || t === `x86_64`) return `x86_64`;
  if (t === `arm64` || t === `aarch64`) return `aarch64`;
  throw Error(`Unsupported architecture: ${e}`);
}
function ua(e) {
  if (e === `darwin`) return `darwin`;
  if (e === `linux`) return `linux`;
  if (e === `win32`) return `win32`;
  throw Error(`Unsupported platform: ${e}`);
}
function da(e) {
  let t = e.toLowerCase();
  if (t === `x64` || t === `x86_64`) return `x64`;
  if (t === `arm64` || t === `aarch64`) return `arm64`;
  throw Error(`Unsupported architecture: ${e}`);
}
async function fa(e, t, n = Bn) {
  let r = await n(e, { headers: { "User-Agent": `codex-primary-runtime-installer` }, signal: t });
  if (!r.ok) throw Error(`Failed to download primary runtime manifest (${r.status} ${r.statusText}).`);
  return r.json();
}
async function pa(e, t, n, r, i, a = Bn) {
  let o = await a(e, {
    headers: { ...i?.requestHeaders, "User-Agent": `codex-primary-runtime-installer` },
    redirect: i?.redirect,
    signal: r,
  });
  if (!o.ok) throw Error(`Failed to download primary runtime archive (${o.status} ${o.statusText}).`);
  if (o.body == null) throw Error(`Primary runtime archive response had no body.`);
  let s = o.headers.get(`content-length`),
    l = s == null ? NaN : Number(s),
    u = Number.isFinite(l) && l > 0 ? l : null,
    d = 0,
    p = 0,
    m = new f.Transform({
      transform(e, t, r) {
        d += e.byteLength;
        let i = Date.now();
        (i - p > 500 && ((p = i), n?.({ downloadedBytes: d, totalBytes: u })), r(null, e));
      },
      flush(e) {
        (n?.({ downloadedBytes: d, totalBytes: u }), e());
      },
    });
  await (0, _.pipeline)(f.Readable.fromWeb(o.body), m, (0, c.createWriteStream)(t), { signal: r });
}
async function ma({ archivePath: e, expectedSha256: t, sourceUrl: n }) {
  let r = await ha(e);
  if (r !== t) throw Error(`Checksum mismatch for '${n}': expected ${t}, got ${r}.`);
}
async function ha(e) {
  let t = a.default.createHash(`sha256`),
    n = await d.default.open(e, `r`);
  try {
    for await (let e of n.createReadStream()) t.update(e);
  } finally {
    await n.close();
  }
  return t.digest(`hex`);
}
function ga() {
  return process.platform === `win32`
    ? l.default.join(process.env.SystemRoot ?? `C:\\Windows`, `System32`, `tar.exe`)
    : `tar`;
}
async function _a(e) {
  let t = l.default.dirname(l.default.resolve(e)),
    n = await Ca([ga(), `-tf`, l.default.basename(e)], t, process.platform !== `win32` && void 0);
  if (n.code !== 0) throw Error(`Failed to list primary runtime archive: ${n.stderr}`);
  return ba(n.stdout);
}
async function va(e, t, n) {
  let r = l.default.dirname(l.default.resolve(t)),
    i = l.default.resolve(n),
    a = await Ca(
      [ga(), e, l.default.basename(t), `-C`, process.platform === `win32` ? l.default.relative(r, i) : i],
      r,
      process.platform !== `win32` && void 0,
    );
  if (a.code !== 0) throw Error(`Failed to extract primary runtime archive: ${a.stderr}`);
}
async function ya(e) {
  if (process.platform === `win32`) {
    let t = await Sa(
      [
        `param($ArchivePath)`,
        `$ErrorActionPreference = 'Stop'`,
        `Add-Type -AssemblyName System.IO.Compression.FileSystem`,
        `$archive = [System.IO.Compression.ZipFile]::OpenRead($ArchivePath)`,
        `try { $archive.Entries | ForEach-Object { $_.FullName } } finally { $archive.Dispose() }`,
      ].join(`
`),
      [e],
    );
    if (t.code !== 0) throw Error(`Failed to list primary runtime archive: ${t.stderr}`);
    return ba(t.stdout);
  }
  let t = await Ca([`tar`, `-tf`, e]);
  if (t.code !== 0) throw Error(`Failed to list primary runtime archive: ${t.stderr}`);
  return ba(t.stdout);
}
function ba(e) {
  return e
    .split(/\r?\n/)
    .map((e) => e.trim())
    .filter((e) => e.length > 0);
}
async function xa(e, t) {
  let n =
    process.platform === `win32`
      ? await Sa(
          [
            `param($ArchivePath, $ExtractDir)`,
            `$ErrorActionPreference = 'Stop'`,
            `Expand-Archive -LiteralPath $ArchivePath -DestinationPath $ExtractDir -Force`,
          ].join(`
`),
          [e, t],
        )
      : await Ca([`tar`, `-xf`, e, `-C`, t]);
  if (n.code !== 0) throw Error(`Failed to extract primary runtime archive: ${n.stderr}`);
}
function Sa(e, t) {
  return Ca([
    `powershell.exe`,
    `-NoProfile`,
    `-NonInteractive`,
    `-ExecutionPolicy`,
    `Bypass`,
    `-Command`,
    e,
    ...t,
  ]);
}
async function Ca(e, t, n) {
  let { code: r, stdout: i, stderr: a } = await ar({ args: e, cwd: t, spawnInsideWsl: n }).wait();
  return { code: r, stdout: i, stderr: a };
}
async function wa(e, t) {
  try {
    await d.default.rm(e, { recursive: !0, force: !0 });
  } catch (n) {
    J().warning(`primary_runtime_cleanup_failed`, {
      safe: { reason: t },
      sensitive: { error: n, runtimeRoot: e },
    });
  }
}
async function Ta(e) {
  try {
    return await Ma(e);
  } catch {
    return null;
  }
}
function Ea(e) {
  let t = l.default.dirname(e);
  return l.default.basename(t) === `bin` ? l.default.dirname(t) : t;
}
function X(e) {
  return e == null && Y != null
    ? Y
    : l.default.join(e ?? l.default.join(u.default.homedir(), `.cache`, `codex-runtimes`), vi);
}
function Da(e) {
  return l.default.join(e, `dependencies`, `bin`);
}
function Oa(e) {
  return l.default.join(e, `dependencies`, `bin`, `override`);
}
function ka(e) {
  return l.default.join(e, `dependencies`, `bin`, `fallback`);
}
function Z(e) {
  return `\`${e.replaceAll("`", "\\`")}\``;
}
async function Aa({ bundleFormatVersion: e, runtimeRoot: t, targetPlatform: n }) {
  let r = await Ma(t),
    i = e >= 2 ? l.default.join(t, `dependencies`, `node`) : t,
    a = l.default.join(i, `bin`, La(n)),
    o = l.default.join(i, `node_modules`),
    s = Da(t),
    c = Oa(t),
    u = ka(t),
    d = r.pnpmVersion == null ? null : await ja([l.default.join(u, Ra(n)), l.default.join(s, Ra(n))]);
  if (d != null && !(await Ha(d))) throw Error(`Missing pnpm launcher: ${d}`);
  let f = await Ia({ bundleFormatVersion: e, runtimeRoot: t, targetPlatform: n });
  return {
    binPath: s,
    bundledPluginMarketplacePaths: Pa({ metadata: r, runtimeRoot: t }),
    bundledSkillPaths: Na({ metadata: r, runtimeRoot: t }),
    fallbackBinPath: u,
    nodeModulesPath: o,
    nodePath: a,
    overrideBinPath: c,
    pnpmPath: d,
    pythonPath: f,
    skillsToRemove: r.skillsToRemove ?? [],
  };
}
async function ja(e) {
  let t = (await Promise.all(e.map(Ha))).findIndex(Boolean);
  return t >= 0 ? (e[t] ?? ``) : (e[0] ?? ``);
}
async function Ma(e) {
  let t = await d.default.readFile(l.default.join(e, `runtime.json`), `utf8`);
  return Ci.parse(JSON.parse(t));
}
function Na({ metadata: e, runtimeRoot: t }) {
  return (e.bundledSkills ?? []).map((e) =>
    Fa({ label: `Bundled skill`, pathParts: [e, `SKILL.md`], runtimeRoot: t }),
  );
}
function Pa({ metadata: e, runtimeRoot: t }) {
  return (e.bundledPlugins ?? []).map((e) =>
    Fa({ label: `Bundled plugin marketplace`, pathParts: [e], runtimeRoot: t }),
  );
}
function Fa({ label: e, pathParts: t, runtimeRoot: n }) {
  let r = l.default.resolve(n),
    i = l.default.resolve(n, ...t);
  if (i !== r && i.startsWith(`${r}${l.default.sep}`)) return i;
  throw Error(`${e} path must stay within the runtime root.`);
}
async function Ia({ bundleFormatVersion: e, runtimeRoot: t, targetPlatform: n }) {
  let r = e >= 2 ? l.default.join(t, `dependencies`, `python`) : l.default.join(t, `python`),
    i = za(n),
    a =
      n === `win32`
        ? [l.default.join(r, i), l.default.join(r, `python`, i), l.default.join(r, `bin`, i)]
        : [l.default.join(r, `bin`, i), l.default.join(r, `bin`, `python`)],
    o = (await Promise.all(a.map(async (e) => ({ candidate: e, exists: await Ha(e) })))).find(
      ({ exists: e }) => e,
    );
  return o ? o.candidate : a[0];
}
function La(e) {
  return e === `win32` ? `node.exe` : `node`;
}
function Ra(e) {
  return e === `win32` ? `pnpm.cmd` : `pnpm`;
}
function za(e) {
  return e === `win32` ? `python.exe` : `python3`;
}
async function Ba(e) {
  return (await d.default.stat(e).catch(() => null))?.isDirectory() === !0;
}
function Va(e) {
  try {
    return (0, c.statSync)(e).isDirectory();
  } catch {
    return !1;
  }
}
async function Ha(e) {
  try {
    return (await d.default.access(e), !0);
  } catch {
    return !1;
  }
}
function Ua(e, t, n = !1) {
  let r = process.platform === `win32` ? `;` : `:`,
    i = e ?? ``,
    a = i.length === 0 ? [] : i.split(r),
    o = a.findIndex((e) => Wa(e, t)),
    s = n
      ? a.findIndex((e) =>
          l.default.win32
            .normalize(e)
            .split(l.default.win32.sep)
            .some((e) => e.toLowerCase() === `windowsapps`),
        )
      : -1;
  if (o >= 0) {
    if (s < 0 || o < s) return a.join(r);
    a.splice(o, 1);
  }
  return (s >= 0 ? a.splice(s, 0, t) : a.push(t), a.join(r));
}
function Wa(e, t) {
  return process.platform === `win32` ? e.toLowerCase() === t.toLowerCase() : e === t;
}
function Ga(e) {
  if (!e || !(0, c.existsSync)(e)) return null;
  let t = process.platform === `win32` ? `codex.exe` : `codex`,
    n = Ka(e) ? l.default.join(e, t) : e;
  return (0, c.existsSync)(n) && qa(n) ? n : null;
}
function Ka(e) {
  try {
    return (0, c.statSync)(e).isDirectory();
  } catch {
    return !1;
  }
}
function qa(e) {
  try {
    return (0, c.statSync)(e).isFile();
  } catch {
    return !1;
  }
}
var Ja = class extends Error {
    constructor(e) {
      (super(e), (this.name = `AppServerTransportNotSentError`));
    }
  },
  Ya = class extends Ja {
    maximumSizeBytes;
    code = `app_server_message_too_large`;
    constructor(e) {
      (super(`Codex app-server request exceeds the remote WebSocket frame limit`),
        (this.maximumSizeBytes = e),
        (this.name = `AppServerTransportMessageTooLargeError`));
    }
  },
  Xa = class extends Error {
    stage;
    failureReason;
    constructor({ failureReason: e, message: t, stage: n }) {
      (super(t), (this.name = `AppServerSshSetupError`), (this.stage = n), (this.failureReason = e));
    }
  },
  Q = { Connecting: 0, Open: 1, Closing: 2, Closed: 3 },
  Za = { nextConnectionId: 1, connectionIds: new WeakMap() };
function Qa(e) {
  let t = Za.connectionIds.get(e);
  if (t != null) return t;
  let n = Za.nextConnectionId;
  return ((Za.nextConnectionId += 1), Za.connectionIds.set(e, n), n);
}
var $a = 3e4,
  eo = class {
    bytesReadTotal = 0;
    bytesWrittenTotal = 0;
    windowBucketsBySecond = new Map();
    trackRead(e, t = Date.now()) {
      e <= 0 || ((this.bytesReadTotal += e), this.updateWindowBucket(t, e, 0));
    }
    trackWritten(e, t = Date.now()) {
      e <= 0 || ((this.bytesWrittenTotal += e), this.updateWindowBucket(t, 0, e));
    }
    getSnapshot(e = Date.now()) {
      this.pruneWindowBuckets(e);
      let t = 0,
        n = 0;
      for (let e of this.windowBucketsBySecond.values()) ((t += e.bytesRead), (n += e.bytesWritten));
      return {
        bytesReadTotal: this.bytesReadTotal,
        bytesWrittenTotal: this.bytesWrittenTotal,
        bytesReadLast30s: t,
        bytesWrittenLast30s: n,
      };
    }
    updateWindowBucket(e, t, n) {
      let r = Math.floor(e / 1e3),
        i = this.windowBucketsBySecond.get(r);
      (i
        ? ((i.bytesRead += t), (i.bytesWritten += n))
        : this.windowBucketsBySecond.set(r, { bytesRead: t, bytesWritten: n }),
        this.pruneWindowBuckets(e));
    }
    pruneWindowBuckets(e) {
      let t = Math.floor((e - $a) / 1e3);
      for (let e of this.windowBucketsBySecond.keys()) e < t && this.windowBucketsBySecond.delete(e);
    }
  },
  to = e.t((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = require("buffer"),
      n = {
        INVALID_ENCODING: `Invalid encoding provided. Please specify a valid encoding the internal Node.js Buffer supports.`,
        INVALID_SMARTBUFFER_SIZE: `Invalid size provided. Size must be a valid integer greater than zero.`,
        INVALID_SMARTBUFFER_BUFFER: `Invalid Buffer provided in SmartBufferOptions.`,
        INVALID_SMARTBUFFER_OBJECT: `Invalid SmartBufferOptions object supplied to SmartBuffer constructor or factory methods.`,
        INVALID_OFFSET: `An invalid offset value was provided.`,
        INVALID_OFFSET_NON_NUMBER: `An invalid offset value was provided. A numeric value is required.`,
        INVALID_LENGTH: `An invalid length value was provided.`,
        INVALID_LENGTH_NON_NUMBER: `An invalid length value was provived. A numeric value is required.`,
        INVALID_TARGET_OFFSET: `Target offset is beyond the bounds of the internal SmartBuffer data.`,
        INVALID_TARGET_LENGTH: `Specified length value moves cursor beyong the bounds of the internal SmartBuffer data.`,
        INVALID_READ_BEYOND_BOUNDS: `Attempted to read beyond the bounds of the managed data.`,
        INVALID_WRITE_BEYOND_BOUNDS: `Attempted to write beyond the bounds of the managed data.`,
      };
    e.ERRORS = n;
    function r(e) {
      if (!t.Buffer.isEncoding(e)) throw Error(n.INVALID_ENCODING);
    }
    e.checkEncoding = r;
    function i(e) {
      return typeof e == `number` && isFinite(e) && l(e);
    }
    e.isFiniteInteger = i;
    function a(e, t) {
      if (typeof e == `number`) {
        if (!i(e) || e < 0) throw Error(t ? n.INVALID_OFFSET : n.INVALID_LENGTH);
      } else throw Error(t ? n.INVALID_OFFSET_NON_NUMBER : n.INVALID_LENGTH_NON_NUMBER);
    }
    function o(e) {
      a(e, !1);
    }
    e.checkLengthValue = o;
    function s(e) {
      a(e, !0);
    }
    e.checkOffsetValue = s;
    function c(e, t) {
      if (e < 0 || e > t.length) throw Error(n.INVALID_TARGET_OFFSET);
    }
    e.checkTargetOffset = c;
    function l(e) {
      return typeof e == `number` && isFinite(e) && Math.floor(e) === e;
    }
    function u(e) {
      if (typeof BigInt > `u`) throw Error(`Platform does not support JS BigInt type.`);
      if (t.Buffer.prototype[e] === void 0) throw Error(`Platform does not support Buffer.prototype.${e}.`);
    }
    e.bigIntAndBufferInt64Check = u;
  }),
  no = e.t((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = to(),
      n = 4096,
      r = `utf8`;
    e.SmartBuffer = class e {
      constructor(i) {
        if (
          ((this.length = 0),
          (this._encoding = r),
          (this._writeOffset = 0),
          (this._readOffset = 0),
          e.isSmartBufferOptions(i))
        ) {
          if ((i.encoding && (t.checkEncoding(i.encoding), (this._encoding = i.encoding)), i.size)) {
            if (t.isFiniteInteger(i.size) && i.size > 0) this._buff = Buffer.allocUnsafe(i.size);
            else throw Error(t.ERRORS.INVALID_SMARTBUFFER_SIZE);
          } else if (i.buff) {
            if (Buffer.isBuffer(i.buff)) ((this._buff = i.buff), (this.length = i.buff.length));
            else throw Error(t.ERRORS.INVALID_SMARTBUFFER_BUFFER);
          } else this._buff = Buffer.allocUnsafe(n);
        } else {
          if (i !== void 0) throw Error(t.ERRORS.INVALID_SMARTBUFFER_OBJECT);
          this._buff = Buffer.allocUnsafe(n);
        }
      }
      static fromSize(e, t) {
        return new this({ size: e, encoding: t });
      }
      static fromBuffer(e, t) {
        return new this({ buff: e, encoding: t });
      }
      static fromOptions(e) {
        return new this(e);
      }
      static isSmartBufferOptions(e) {
        let t = e;
        return t && (t.encoding !== void 0 || t.size !== void 0 || t.buff !== void 0);
      }
      readInt8(e) {
        return this._readNumberValue(Buffer.prototype.readInt8, 1, e);
      }
      readInt16BE(e) {
        return this._readNumberValue(Buffer.prototype.readInt16BE, 2, e);
      }
      readInt16LE(e) {
        return this._readNumberValue(Buffer.prototype.readInt16LE, 2, e);
      }
      readInt32BE(e) {
        return this._readNumberValue(Buffer.prototype.readInt32BE, 4, e);
      }
      readInt32LE(e) {
        return this._readNumberValue(Buffer.prototype.readInt32LE, 4, e);
      }
      readBigInt64BE(e) {
        return (
          t.bigIntAndBufferInt64Check(`readBigInt64BE`),
          this._readNumberValue(Buffer.prototype.readBigInt64BE, 8, e)
        );
      }
      readBigInt64LE(e) {
        return (
          t.bigIntAndBufferInt64Check(`readBigInt64LE`),
          this._readNumberValue(Buffer.prototype.readBigInt64LE, 8, e)
        );
      }
      writeInt8(e, t) {
        return (this._writeNumberValue(Buffer.prototype.writeInt8, 1, e, t), this);
      }
      insertInt8(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeInt8, 1, e, t);
      }
      writeInt16BE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeInt16BE, 2, e, t);
      }
      insertInt16BE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeInt16BE, 2, e, t);
      }
      writeInt16LE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeInt16LE, 2, e, t);
      }
      insertInt16LE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeInt16LE, 2, e, t);
      }
      writeInt32BE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeInt32BE, 4, e, t);
      }
      insertInt32BE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeInt32BE, 4, e, t);
      }
      writeInt32LE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeInt32LE, 4, e, t);
      }
      insertInt32LE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeInt32LE, 4, e, t);
      }
      writeBigInt64BE(e, n) {
        return (
          t.bigIntAndBufferInt64Check(`writeBigInt64BE`),
          this._writeNumberValue(Buffer.prototype.writeBigInt64BE, 8, e, n)
        );
      }
      insertBigInt64BE(e, n) {
        return (
          t.bigIntAndBufferInt64Check(`writeBigInt64BE`),
          this._insertNumberValue(Buffer.prototype.writeBigInt64BE, 8, e, n)
        );
      }
      writeBigInt64LE(e, n) {
        return (
          t.bigIntAndBufferInt64Check(`writeBigInt64LE`),
          this._writeNumberValue(Buffer.prototype.writeBigInt64LE, 8, e, n)
        );
      }
      insertBigInt64LE(e, n) {
        return (
          t.bigIntAndBufferInt64Check(`writeBigInt64LE`),
          this._insertNumberValue(Buffer.prototype.writeBigInt64LE, 8, e, n)
        );
      }
      readUInt8(e) {
        return this._readNumberValue(Buffer.prototype.readUInt8, 1, e);
      }
      readUInt16BE(e) {
        return this._readNumberValue(Buffer.prototype.readUInt16BE, 2, e);
      }
      readUInt16LE(e) {
        return this._readNumberValue(Buffer.prototype.readUInt16LE, 2, e);
      }
      readUInt32BE(e) {
        return this._readNumberValue(Buffer.prototype.readUInt32BE, 4, e);
      }
      readUInt32LE(e) {
        return this._readNumberValue(Buffer.prototype.readUInt32LE, 4, e);
      }
      readBigUInt64BE(e) {
        return (
          t.bigIntAndBufferInt64Check(`readBigUInt64BE`),
          this._readNumberValue(Buffer.prototype.readBigUInt64BE, 8, e)
        );
      }
      readBigUInt64LE(e) {
        return (
          t.bigIntAndBufferInt64Check(`readBigUInt64LE`),
          this._readNumberValue(Buffer.prototype.readBigUInt64LE, 8, e)
        );
      }
      writeUInt8(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeUInt8, 1, e, t);
      }
      insertUInt8(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeUInt8, 1, e, t);
      }
      writeUInt16BE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeUInt16BE, 2, e, t);
      }
      insertUInt16BE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeUInt16BE, 2, e, t);
      }
      writeUInt16LE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeUInt16LE, 2, e, t);
      }
      insertUInt16LE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeUInt16LE, 2, e, t);
      }
      writeUInt32BE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeUInt32BE, 4, e, t);
      }
      insertUInt32BE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeUInt32BE, 4, e, t);
      }
      writeUInt32LE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeUInt32LE, 4, e, t);
      }
      insertUInt32LE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeUInt32LE, 4, e, t);
      }
      writeBigUInt64BE(e, n) {
        return (
          t.bigIntAndBufferInt64Check(`writeBigUInt64BE`),
          this._writeNumberValue(Buffer.prototype.writeBigUInt64BE, 8, e, n)
        );
      }
      insertBigUInt64BE(e, n) {
        return (
          t.bigIntAndBufferInt64Check(`writeBigUInt64BE`),
          this._insertNumberValue(Buffer.prototype.writeBigUInt64BE, 8, e, n)
        );
      }
      writeBigUInt64LE(e, n) {
        return (
          t.bigIntAndBufferInt64Check(`writeBigUInt64LE`),
          this._writeNumberValue(Buffer.prototype.writeBigUInt64LE, 8, e, n)
        );
      }
      insertBigUInt64LE(e, n) {
        return (
          t.bigIntAndBufferInt64Check(`writeBigUInt64LE`),
          this._insertNumberValue(Buffer.prototype.writeBigUInt64LE, 8, e, n)
        );
      }
      readFloatBE(e) {
        return this._readNumberValue(Buffer.prototype.readFloatBE, 4, e);
      }
      readFloatLE(e) {
        return this._readNumberValue(Buffer.prototype.readFloatLE, 4, e);
      }
      writeFloatBE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeFloatBE, 4, e, t);
      }
      insertFloatBE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeFloatBE, 4, e, t);
      }
      writeFloatLE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeFloatLE, 4, e, t);
      }
      insertFloatLE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeFloatLE, 4, e, t);
      }
      readDoubleBE(e) {
        return this._readNumberValue(Buffer.prototype.readDoubleBE, 8, e);
      }
      readDoubleLE(e) {
        return this._readNumberValue(Buffer.prototype.readDoubleLE, 8, e);
      }
      writeDoubleBE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeDoubleBE, 8, e, t);
      }
      insertDoubleBE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeDoubleBE, 8, e, t);
      }
      writeDoubleLE(e, t) {
        return this._writeNumberValue(Buffer.prototype.writeDoubleLE, 8, e, t);
      }
      insertDoubleLE(e, t) {
        return this._insertNumberValue(Buffer.prototype.writeDoubleLE, 8, e, t);
      }
      readString(e, n) {
        let r;
        (typeof e == `number`
          ? (t.checkLengthValue(e), (r = Math.min(e, this.length - this._readOffset)))
          : ((n = e), (r = this.length - this._readOffset)),
          n !== void 0 && t.checkEncoding(n));
        let i = this._buff.slice(this._readOffset, this._readOffset + r).toString(n || this._encoding);
        return ((this._readOffset += r), i);
      }
      insertString(e, n, r) {
        return (t.checkOffsetValue(n), this._handleString(e, !0, n, r));
      }
      writeString(e, t, n) {
        return this._handleString(e, !1, t, n);
      }
      readStringNT(e) {
        e !== void 0 && t.checkEncoding(e);
        let n = this.length;
        for (let e = this._readOffset; e < this.length; e++)
          if (this._buff[e] === 0) {
            n = e;
            break;
          }
        let r = this._buff.slice(this._readOffset, n);
        return ((this._readOffset = n + 1), r.toString(e || this._encoding));
      }
      insertStringNT(e, n, r) {
        return (t.checkOffsetValue(n), this.insertString(e, n, r), this.insertUInt8(0, n + e.length), this);
      }
      writeStringNT(e, t, n) {
        return (
          this.writeString(e, t, n),
          this.writeUInt8(0, typeof t == `number` ? t + e.length : this.writeOffset),
          this
        );
      }
      readBuffer(e) {
        e !== void 0 && t.checkLengthValue(e);
        let n = typeof e == `number` ? e : this.length,
          r = Math.min(this.length, this._readOffset + n),
          i = this._buff.slice(this._readOffset, r);
        return ((this._readOffset = r), i);
      }
      insertBuffer(e, n) {
        return (t.checkOffsetValue(n), this._handleBuffer(e, !0, n));
      }
      writeBuffer(e, t) {
        return this._handleBuffer(e, !1, t);
      }
      readBufferNT() {
        let e = this.length;
        for (let t = this._readOffset; t < this.length; t++)
          if (this._buff[t] === 0) {
            e = t;
            break;
          }
        let t = this._buff.slice(this._readOffset, e);
        return ((this._readOffset = e + 1), t);
      }
      insertBufferNT(e, n) {
        return (t.checkOffsetValue(n), this.insertBuffer(e, n), this.insertUInt8(0, n + e.length), this);
      }
      writeBufferNT(e, n) {
        return (
          n !== void 0 && t.checkOffsetValue(n),
          this.writeBuffer(e, n),
          this.writeUInt8(0, typeof n == `number` ? n + e.length : this._writeOffset),
          this
        );
      }
      clear() {
        return ((this._writeOffset = 0), (this._readOffset = 0), (this.length = 0), this);
      }
      remaining() {
        return this.length - this._readOffset;
      }
      get readOffset() {
        return this._readOffset;
      }
      set readOffset(e) {
        (t.checkOffsetValue(e), t.checkTargetOffset(e, this), (this._readOffset = e));
      }
      get writeOffset() {
        return this._writeOffset;
      }
      set writeOffset(e) {
        (t.checkOffsetValue(e), t.checkTargetOffset(e, this), (this._writeOffset = e));
      }
      get encoding() {
        return this._encoding;
      }
      set encoding(e) {
        (t.checkEncoding(e), (this._encoding = e));
      }
      get internalBuffer() {
        return this._buff;
      }
      toBuffer() {
        return this._buff.slice(0, this.length);
      }
      toString(e) {
        let n = typeof e == `string` ? e : this._encoding;
        return (t.checkEncoding(n), this._buff.toString(n, 0, this.length));
      }
      destroy() {
        return (this.clear(), this);
      }
      _handleString(e, n, r, i) {
        let a = this._writeOffset,
          o = this._encoding;
        (typeof r == `number` ? (a = r) : typeof r == `string` && (t.checkEncoding(r), (o = r)),
          typeof i == `string` && (t.checkEncoding(i), (o = i)));
        let s = Buffer.byteLength(e, o);
        return (
          n ? this.ensureInsertable(s, a) : this._ensureWriteable(s, a),
          this._buff.write(e, a, s, o),
          n
            ? (this._writeOffset += s)
            : typeof r == `number`
              ? (this._writeOffset = Math.max(this._writeOffset, a + s))
              : (this._writeOffset += s),
          this
        );
      }
      _handleBuffer(e, t, n) {
        let r = typeof n == `number` ? n : this._writeOffset;
        return (
          t ? this.ensureInsertable(e.length, r) : this._ensureWriteable(e.length, r),
          e.copy(this._buff, r),
          t
            ? (this._writeOffset += e.length)
            : typeof n == `number`
              ? (this._writeOffset = Math.max(this._writeOffset, r + e.length))
              : (this._writeOffset += e.length),
          this
        );
      }
      ensureReadable(e, n) {
        let r = this._readOffset;
        if ((n !== void 0 && (t.checkOffsetValue(n), (r = n)), r < 0 || r + e > this.length))
          throw Error(t.ERRORS.INVALID_READ_BEYOND_BOUNDS);
      }
      ensureInsertable(e, n) {
        (t.checkOffsetValue(n),
          this._ensureCapacity(this.length + e),
          n < this.length && this._buff.copy(this._buff, n + e, n, this._buff.length),
          n + e > this.length ? (this.length = n + e) : (this.length += e));
      }
      _ensureWriteable(e, t) {
        let n = typeof t == `number` ? t : this._writeOffset;
        (this._ensureCapacity(n + e), n + e > this.length && (this.length = n + e));
      }
      _ensureCapacity(e) {
        let t = this._buff.length;
        if (e > t) {
          let n = this._buff,
            r = (t * 3) / 2 + 1;
          (r < e && (r = e), (this._buff = Buffer.allocUnsafe(r)), n.copy(this._buff, 0, 0, t));
        }
      }
      _readNumberValue(e, t, n) {
        this.ensureReadable(t, n);
        let r = e.call(this._buff, typeof n == `number` ? n : this._readOffset);
        return (n === void 0 && (this._readOffset += t), r);
      }
      _insertNumberValue(e, n, r, i) {
        return (
          t.checkOffsetValue(i),
          this.ensureInsertable(n, i),
          e.call(this._buff, r, i),
          (this._writeOffset += n),
          this
        );
      }
      _writeNumberValue(e, n, r, i) {
        if (typeof i == `number`) {
          if (i < 0) throw Error(t.ERRORS.INVALID_WRITE_BEYOND_BOUNDS);
          t.checkOffsetValue(i);
        }
        let a = typeof i == `number` ? i : this._writeOffset;
        return (
          this._ensureWriteable(n, a),
          e.call(this._buff, r, a),
          typeof i == `number`
            ? (this._writeOffset = Math.max(this._writeOffset, a + n))
            : (this._writeOffset += n),
          this
        );
      }
    };
  }),
  ro = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SOCKS5_NO_ACCEPTABLE_AUTH =
        e.SOCKS5_CUSTOM_AUTH_END =
        e.SOCKS5_CUSTOM_AUTH_START =
        e.SOCKS_INCOMING_PACKET_SIZES =
        e.SocksClientState =
        e.Socks5Response =
        e.Socks5HostType =
        e.Socks5Auth =
        e.Socks4Response =
        e.SocksCommand =
        e.ERRORS =
        e.DEFAULT_TIMEOUT =
          void 0),
      (e.DEFAULT_TIMEOUT = 3e4),
      (e.ERRORS = {
        InvalidSocksCommand: `An invalid SOCKS command was provided. Valid options are connect, bind, and associate.`,
        InvalidSocksCommandForOperation: `An invalid SOCKS command was provided. Only a subset of commands are supported for this operation.`,
        InvalidSocksCommandChain: `An invalid SOCKS command was provided. Chaining currently only supports the connect command.`,
        InvalidSocksClientOptionsDestination: `An invalid destination host was provided.`,
        InvalidSocksClientOptionsExistingSocket: `An invalid existing socket was provided. This should be an instance of stream.Duplex.`,
        InvalidSocksClientOptionsProxy: `Invalid SOCKS proxy details were provided.`,
        InvalidSocksClientOptionsTimeout: `An invalid timeout value was provided. Please enter a value above 0 (in ms).`,
        InvalidSocksClientOptionsProxiesLength: `At least two socks proxies must be provided for chaining.`,
        InvalidSocksClientOptionsCustomAuthRange: `Custom auth must be a value between 0x80 and 0xFE.`,
        InvalidSocksClientOptionsCustomAuthOptions: `When a custom_auth_method is provided, custom_auth_request_handler, custom_auth_response_size, and custom_auth_response_handler must also be provided and valid.`,
        NegotiationError: `Negotiation error`,
        SocketClosed: `Socket closed`,
        ProxyConnectionTimedOut: `Proxy connection timed out`,
        InternalError: `SocksClient internal error (this should not happen)`,
        InvalidSocks4HandshakeResponse: `Received invalid Socks4 handshake response`,
        Socks4ProxyRejectedConnection: `Socks4 Proxy rejected connection`,
        InvalidSocks4IncomingConnectionResponse: `Socks4 invalid incoming connection response`,
        Socks4ProxyRejectedIncomingBoundConnection: `Socks4 Proxy rejected incoming bound connection`,
        InvalidSocks5InitialHandshakeResponse: `Received invalid Socks5 initial handshake response`,
        InvalidSocks5IntiailHandshakeSocksVersion: `Received invalid Socks5 initial handshake (invalid socks version)`,
        InvalidSocks5InitialHandshakeNoAcceptedAuthType: `Received invalid Socks5 initial handshake (no accepted authentication type)`,
        InvalidSocks5InitialHandshakeUnknownAuthType: `Received invalid Socks5 initial handshake (unknown authentication type)`,
        Socks5AuthenticationFailed: `Socks5 Authentication failed`,
        InvalidSocks5FinalHandshake: `Received invalid Socks5 final handshake response`,
        InvalidSocks5FinalHandshakeRejected: `Socks5 proxy rejected connection`,
        InvalidSocks5IncomingConnectionResponse: `Received invalid Socks5 incoming connection response`,
        Socks5ProxyRejectedIncomingBoundConnection: `Socks5 Proxy rejected incoming bound connection`,
      }),
      (e.SOCKS_INCOMING_PACKET_SIZES = {
        Socks5InitialHandshakeResponse: 2,
        Socks5UserPassAuthenticationResponse: 2,
        Socks5ResponseHeader: 5,
        Socks5ResponseIPv4: 10,
        Socks5ResponseIPv6: 22,
        Socks5ResponseHostname: (e) => e + 7,
        Socks4Response: 8,
      }));
    var t;
    (function (e) {
      ((e[(e.connect = 1)] = `connect`), (e[(e.bind = 2)] = `bind`), (e[(e.associate = 3)] = `associate`));
    })(t || (e.SocksCommand = t = {}));
    var n;
    (function (e) {
      ((e[(e.Granted = 90)] = `Granted`),
        (e[(e.Failed = 91)] = `Failed`),
        (e[(e.Rejected = 92)] = `Rejected`),
        (e[(e.RejectedIdent = 93)] = `RejectedIdent`));
    })(n || (e.Socks4Response = n = {}));
    var r;
    ((function (e) {
      ((e[(e.NoAuth = 0)] = `NoAuth`), (e[(e.GSSApi = 1)] = `GSSApi`), (e[(e.UserPass = 2)] = `UserPass`));
    })(r || (e.Socks5Auth = r = {})),
      (e.SOCKS5_CUSTOM_AUTH_START = 128),
      (e.SOCKS5_CUSTOM_AUTH_END = 254),
      (e.SOCKS5_NO_ACCEPTABLE_AUTH = 255));
    var i;
    (function (e) {
      ((e[(e.Granted = 0)] = `Granted`),
        (e[(e.Failure = 1)] = `Failure`),
        (e[(e.NotAllowed = 2)] = `NotAllowed`),
        (e[(e.NetworkUnreachable = 3)] = `NetworkUnreachable`),
        (e[(e.HostUnreachable = 4)] = `HostUnreachable`),
        (e[(e.ConnectionRefused = 5)] = `ConnectionRefused`),
        (e[(e.TTLExpired = 6)] = `TTLExpired`),
        (e[(e.CommandNotSupported = 7)] = `CommandNotSupported`),
        (e[(e.AddressNotSupported = 8)] = `AddressNotSupported`));
    })(i || (e.Socks5Response = i = {}));
    var a;
    (function (e) {
      ((e[(e.IPv4 = 1)] = `IPv4`), (e[(e.Hostname = 3)] = `Hostname`), (e[(e.IPv6 = 4)] = `IPv6`));
    })(a || (e.Socks5HostType = a = {}));
    var o;
    (function (e) {
      ((e[(e.Created = 0)] = `Created`),
        (e[(e.Connecting = 1)] = `Connecting`),
        (e[(e.Connected = 2)] = `Connected`),
        (e[(e.SentInitialHandshake = 3)] = `SentInitialHandshake`),
        (e[(e.ReceivedInitialHandshakeResponse = 4)] = `ReceivedInitialHandshakeResponse`),
        (e[(e.SentAuthentication = 5)] = `SentAuthentication`),
        (e[(e.ReceivedAuthenticationResponse = 6)] = `ReceivedAuthenticationResponse`),
        (e[(e.SentFinalHandshake = 7)] = `SentFinalHandshake`),
        (e[(e.ReceivedFinalResponse = 8)] = `ReceivedFinalResponse`),
        (e[(e.BoundWaitingForConnection = 9)] = `BoundWaitingForConnection`),
        (e[(e.Established = 10)] = `Established`),
        (e[(e.Disconnected = 11)] = `Disconnected`),
        (e[(e.Error = 99)] = `Error`));
    })(o || (e.SocksClientState = o = {}));
  }),
  io = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.shuffleArray = e.SocksClientError = void 0),
      (e.SocksClientError = class extends Error {
        constructor(e, t) {
          (super(e), (this.options = t));
        }
      }));
    function t(e) {
      for (let t = e.length - 1; t > 0; t--) {
        let n = Math.floor(Math.random() * (t + 1));
        [e[t], e[n]] = [e[n], e[t]];
      }
    }
    e.shuffleArray = t;
  }),
  ao = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isInSubnet = t),
      (e.isCorrect = n),
      (e.numberToPaddedHex = r),
      (e.stringToPaddedHex = i),
      (e.testBit = a));
    function t(e) {
      return this.subnetMask < e.subnetMask ? !1 : this.mask(e.subnetMask) === e.mask();
    }
    function n(e) {
      return function () {
        return this.addressMinusSuffix === this.correctForm()
          ? (this.subnetMask === e && !this.parsedSubnet) || this.parsedSubnet === String(this.subnetMask)
          : !1;
      };
    }
    function r(e) {
      return e.toString(16).padStart(2, `0`);
    }
    function i(e) {
      return r(parseInt(e, 10));
    }
    function a(e, t) {
      let { length: n } = e;
      if (t > n) return !1;
      let r = n - t;
      return e.substring(r, r + 1) === `1`;
    }
  }),
  oo = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.RE_SUBNET_STRING = e.RE_ADDRESS = e.GROUPS = e.BITS = void 0),
      (e.BITS = 32),
      (e.GROUPS = 4),
      (e.RE_ADDRESS =
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g),
      (e.RE_SUBNET_STRING = /\/\d{1,2}$/));
  }),
  so = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AddressError = void 0),
      (e.AddressError = class extends Error {
        constructor(e, t) {
          (super(e), (this.name = `AddressError`), (this.parseMessage = t));
        }
      }));
  }),
  co = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      r =
        (e && e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(r, e, i);
          return (n(r, e), r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Address4 = void 0));
    var i = r(ao()),
      a = r(oo()),
      o = so();
    e.Address4 = class e {
      constructor(e) {
        ((this.groups = a.GROUPS),
          (this.parsedAddress = []),
          (this.parsedSubnet = ``),
          (this.subnet = `/32`),
          (this.subnetMask = 32),
          (this.v4 = !0),
          (this.isCorrect = i.isCorrect(a.BITS)),
          (this.isInSubnet = i.isInSubnet),
          (this.address = e));
        let t = a.RE_SUBNET_STRING.exec(e);
        if (t) {
          if (
            ((this.parsedSubnet = t[0].replace(`/`, ``)),
            (this.subnetMask = parseInt(this.parsedSubnet, 10)),
            (this.subnet = `/${this.subnetMask}`),
            this.subnetMask < 0 || this.subnetMask > a.BITS)
          )
            throw new o.AddressError(`Invalid subnet mask.`);
          e = e.replace(a.RE_SUBNET_STRING, ``);
        }
        ((this.addressMinusSuffix = e), (this.parsedAddress = this.parse(e)));
      }
      static isValid(t) {
        try {
          return (new e(t), !0);
        } catch {
          return !1;
        }
      }
      parse(e) {
        let t = e.split(`.`);
        if (!e.match(a.RE_ADDRESS)) throw new o.AddressError(`Invalid IPv4 address.`);
        return t;
      }
      correctForm() {
        return this.parsedAddress.map((e) => parseInt(e, 10)).join(`.`);
      }
      static fromHex(t) {
        let n = t.replace(/:/g, ``).padStart(8, `0`),
          r = [],
          i = 0;
        for (; i < 8; i += 2) {
          let e = n.slice(i, i + 2);
          r.push(parseInt(e, 16));
        }
        return new e(r.join(`.`));
      }
      static fromInteger(t) {
        return e.fromHex(t.toString(16));
      }
      static fromArpa(t) {
        let n = t
          .replace(/(\.in-addr\.arpa)?\.$/, ``)
          .split(`.`)
          .reverse()
          .join(`.`);
        return new e(n);
      }
      toHex() {
        return this.parsedAddress.map((e) => i.stringToPaddedHex(e)).join(`:`);
      }
      toArray() {
        return this.parsedAddress.map((e) => parseInt(e, 10));
      }
      toGroup6() {
        let e = [],
          t = 0;
        for (; t < a.GROUPS; t += 2)
          e.push(
            `${i.stringToPaddedHex(this.parsedAddress[t])}${i.stringToPaddedHex(this.parsedAddress[t + 1])}`,
          );
        return e.join(`:`);
      }
      bigInt() {
        return BigInt(`0x${this.parsedAddress.map((e) => i.stringToPaddedHex(e)).join(``)}`);
      }
      _startAddress() {
        return BigInt(`0b${this.mask() + `0`.repeat(a.BITS - this.subnetMask)}`);
      }
      startAddress() {
        return e.fromBigInt(this._startAddress());
      }
      startAddressExclusive() {
        let t = BigInt(`1`);
        return e.fromBigInt(this._startAddress() + t);
      }
      _endAddress() {
        return BigInt(`0b${this.mask() + `1`.repeat(a.BITS - this.subnetMask)}`);
      }
      endAddress() {
        return e.fromBigInt(this._endAddress());
      }
      endAddressExclusive() {
        let t = BigInt(`1`);
        return e.fromBigInt(this._endAddress() - t);
      }
      static fromBigInt(t) {
        return e.fromHex(t.toString(16));
      }
      static fromByteArray(e) {
        if (e.length !== 4) throw new o.AddressError(`IPv4 addresses require exactly 4 bytes`);
        for (let t = 0; t < e.length; t++)
          if (!Number.isInteger(e[t]) || e[t] < 0 || e[t] > 255)
            throw new o.AddressError(`All bytes must be integers between 0 and 255`);
        return this.fromUnsignedByteArray(e);
      }
      static fromUnsignedByteArray(t) {
        if (t.length !== 4) throw new o.AddressError(`IPv4 addresses require exactly 4 bytes`);
        let n = t.join(`.`);
        return new e(n);
      }
      mask(e) {
        return (e === void 0 && (e = this.subnetMask), this.getBitsBase2(0, e));
      }
      getBitsBase2(e, t) {
        return this.binaryZeroPad().slice(e, t);
      }
      reverseForm(e) {
        e ||= {};
        let t = this.correctForm().split(`.`).reverse().join(`.`);
        return e.omitSuffix ? t : `${t}.in-addr.arpa.`;
      }
      isMulticast() {
        return this.isInSubnet(new e(`224.0.0.0/4`));
      }
      binaryZeroPad() {
        return this.bigInt().toString(2).padStart(a.BITS, `0`);
      }
      groupForV6() {
        let e = this.parsedAddress;
        return this.address.replace(
          a.RE_ADDRESS,
          `<span class="hover-group group-v4 group-6">${e.slice(0, 2).join(`.`)}</span>.<span class="hover-group group-v4 group-7">${e.slice(2, 4).join(`.`)}</span>`,
        );
      }
    };
  }),
  lo = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.RE_URL_WITH_PORT =
        e.RE_URL =
        e.RE_ZONE_STRING =
        e.RE_SUBNET_STRING =
        e.RE_BAD_ADDRESS =
        e.RE_BAD_CHARACTERS =
        e.TYPES =
        e.SCOPES =
        e.GROUPS =
        e.BITS =
          void 0),
      (e.BITS = 128),
      (e.GROUPS = 8),
      (e.SCOPES = {
        0: `Reserved`,
        1: `Interface local`,
        2: `Link local`,
        4: `Admin local`,
        5: `Site local`,
        8: `Organization local`,
        14: `Global`,
        15: `Reserved`,
      }),
      (e.TYPES = {
        "ff01::1/128": `Multicast (All nodes on this interface)`,
        "ff01::2/128": `Multicast (All routers on this interface)`,
        "ff02::1/128": `Multicast (All nodes on this link)`,
        "ff02::2/128": `Multicast (All routers on this link)`,
        "ff05::2/128": `Multicast (All routers in this site)`,
        "ff02::5/128": `Multicast (OSPFv3 AllSPF routers)`,
        "ff02::6/128": `Multicast (OSPFv3 AllDR routers)`,
        "ff02::9/128": `Multicast (RIP routers)`,
        "ff02::a/128": `Multicast (EIGRP routers)`,
        "ff02::d/128": `Multicast (PIM routers)`,
        "ff02::16/128": `Multicast (MLDv2 reports)`,
        "ff01::fb/128": `Multicast (mDNSv6)`,
        "ff02::fb/128": `Multicast (mDNSv6)`,
        "ff05::fb/128": `Multicast (mDNSv6)`,
        "ff02::1:2/128": `Multicast (All DHCP servers and relay agents on this link)`,
        "ff05::1:2/128": `Multicast (All DHCP servers and relay agents in this site)`,
        "ff02::1:3/128": `Multicast (All DHCP servers on this link)`,
        "ff05::1:3/128": `Multicast (All DHCP servers in this site)`,
        "::/128": `Unspecified`,
        "::1/128": `Loopback`,
        "ff00::/8": `Multicast`,
        "fe80::/10": `Link-local unicast`,
      }),
      (e.RE_BAD_CHARACTERS = /([^0-9a-f:/%])/gi),
      (e.RE_BAD_ADDRESS = /([0-9a-f]{5,}|:{3,}|[^:]:$|^:[^:]|\/$)/gi),
      (e.RE_SUBNET_STRING = /\/\d{1,3}(?=%|$)/),
      (e.RE_ZONE_STRING = /%.*$/),
      (e.RE_URL = /^\[{0,1}([0-9a-f:]+)\]{0,1}/),
      (e.RE_URL_WITH_PORT = /\[([0-9a-f:]+)\]:([0-9]{1,5})/));
  }),
  uo = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.spanAllZeroes = t),
      (e.spanAll = n),
      (e.spanLeadingZeroes = i),
      (e.simpleGroup = a));
    function t(e) {
      return e.replace(/(0+)/g, `<span class="zero">$1</span>`);
    }
    function n(e, n = 0) {
      return e
        .split(``)
        .map((e, r) => `<span class="digit value-${e} position-${r + n}">${t(e)}</span>`)
        .join(``);
    }
    function r(e) {
      return e.replace(/^(0+)/, `<span class="zero">$1</span>`);
    }
    function i(e) {
      return e
        .split(`:`)
        .map((e) => r(e))
        .join(`:`);
    }
    function a(e, t = 0) {
      return e
        .split(`:`)
        .map((e, n) => (/group-v4/.test(e) ? e : `<span class="hover-group group-${n + t}">${r(e)}</span>`));
    }
  }),
  fo = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      r =
        (e && e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(r, e, i);
          return (n(r, e), r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ADDRESS_BOUNDARY = void 0),
      (e.groupPossibilities = a),
      (e.padGroup = o),
      (e.simpleRegularExpression = s),
      (e.possibleElisions = c));
    var i = r(lo());
    function a(e) {
      return `(${e.join(`|`)})`;
    }
    function o(e) {
      return e.length < 4 ? `0{0,${4 - e.length}}${e}` : e;
    }
    e.ADDRESS_BOUNDARY = `[^A-Fa-f0-9:]`;
    function s(e) {
      let t = [];
      e.forEach((e, n) => {
        parseInt(e, 16) === 0 && t.push(n);
      });
      let n = t.map((t) =>
        e
          .map((e, n) => {
            if (n === t) {
              let t = n === 0 || n === i.GROUPS - 1 ? `:` : ``;
              return a([o(e), t]);
            }
            return o(e);
          })
          .join(`:`),
      );
      return (n.push(e.map(o).join(`:`)), a(n));
    }
    function c(e, t, n) {
      let r = t ? `` : `:`,
        i = n ? `` : `:`,
        o = [];
      (!t && !n && o.push(`::`),
        t && n && o.push(``),
        ((n && !t) || (!n && t)) && o.push(`:`),
        o.push(`${r}(:0{1,4}){1,${e - 1}}`),
        o.push(`(0{1,4}:){1,${e - 1}}${i}`),
        o.push(`(0{1,4}:){${e - 1}}0{1,4}`));
      for (let t = 1; t < e - 1; t++)
        for (let n = 1; n < e - t; n++) o.push(`(0{1,4}:){${n}}:(0{1,4}:){${e - n - t - 1}}0{1,4}`);
      return a(o);
    }
  }),
  po = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      r =
        (e && e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(r, e, i);
          return (n(r, e), r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Address6 = void 0));
    var i = r(ao()),
      a = r(oo()),
      o = r(lo()),
      s = r(uo()),
      c = co(),
      l = fo(),
      u = so(),
      d = ao();
    function f(e) {
      if (!e) throw Error(`Assertion failed.`);
    }
    function p(e) {
      let t = /(\d+)(\d{3})/;
      for (; t.test(e);) e = e.replace(t, `$1,$2`);
      return e;
    }
    function m(e) {
      return (
        (e = e.replace(/^(0{1,})([1-9]+)$/, `<span class="parse-error">$1</span>$2`)),
        (e = e.replace(/^(0{1,})(0)$/, `<span class="parse-error">$1</span>$2`)),
        e
      );
    }
    function h(e, t) {
      let n = [],
        r = [],
        i = 0;
      for (; i < e.length; i++) i < t[0] ? n.push(e[i]) : i > t[1] && r.push(e[i]);
      return n.concat([`compact`]).concat(r);
    }
    function g(e) {
      return parseInt(e, 16).toString(16).padStart(4, `0`);
    }
    function _(e) {
      return e & 255;
    }
    e.Address6 = class e {
      constructor(e, t) {
        ((this.addressMinusSuffix = ``),
          (this.parsedSubnet = ``),
          (this.subnet = `/128`),
          (this.subnetMask = 128),
          (this.v4 = !1),
          (this.zone = ``),
          (this.isInSubnet = i.isInSubnet),
          (this.isCorrect = i.isCorrect(o.BITS)),
          (this.groups = t === void 0 ? o.GROUPS : t),
          (this.address = e));
        let n = o.RE_SUBNET_STRING.exec(e);
        if (n) {
          if (
            ((this.parsedSubnet = n[0].replace(`/`, ``)),
            (this.subnetMask = parseInt(this.parsedSubnet, 10)),
            (this.subnet = `/${this.subnetMask}`),
            Number.isNaN(this.subnetMask) || this.subnetMask < 0 || this.subnetMask > o.BITS)
          )
            throw new u.AddressError(`Invalid subnet mask.`);
          e = e.replace(o.RE_SUBNET_STRING, ``);
        } else if (/\//.test(e)) throw new u.AddressError(`Invalid subnet mask.`);
        let r = o.RE_ZONE_STRING.exec(e);
        (r && ((this.zone = r[0]), (e = e.replace(o.RE_ZONE_STRING, ``))),
          (this.addressMinusSuffix = e),
          (this.parsedAddress = this.parse(this.addressMinusSuffix)));
      }
      static isValid(t) {
        try {
          return (new e(t), !0);
        } catch {
          return !1;
        }
      }
      static fromBigInt(t) {
        let n = t.toString(16).padStart(32, `0`),
          r = [],
          i = 0;
        for (; i < o.GROUPS; i++) r.push(n.slice(i * 4, (i + 1) * 4));
        return new e(r.join(`:`));
      }
      static fromURL(t) {
        let n,
          r = null,
          i;
        if (t.indexOf(`[`) !== -1 && t.indexOf(`]:`) !== -1) {
          if (((i = o.RE_URL_WITH_PORT.exec(t)), i === null))
            return { error: `failed to parse address with port`, address: null, port: null };
          ((n = i[1]), (r = i[2]));
        } else if (t.indexOf(`/`) !== -1) {
          if (((t = t.replace(/^[a-z0-9]+:\/\//, ``)), (i = o.RE_URL.exec(t)), i === null))
            return { error: `failed to parse address from URL`, address: null, port: null };
          n = i[1];
        } else n = t;
        return (
          r ? ((r = parseInt(r, 10)), (r < 0 || r > 65536) && (r = null)) : (r = null),
          { address: new e(n), port: r }
        );
      }
      static fromAddress4(t) {
        let n = new c.Address4(t),
          r = o.BITS - (a.BITS - n.subnetMask);
        return new e(`::ffff:${n.correctForm()}/${r}`);
      }
      static fromArpa(t) {
        let n = t.replace(/(\.ip6\.arpa)?\.$/, ``);
        if (n.length !== 63) throw new u.AddressError(`Invalid 'ip6.arpa' form.`);
        let r = n.split(`.`).reverse();
        for (let e = 7; e > 0; e--) {
          let t = e * 4;
          r.splice(t, 0, `:`);
        }
        return ((n = r.join(``)), new e(n));
      }
      microsoftTranscription() {
        return `${this.correctForm().replace(/:/g, `-`)}.ipv6-literal.net`;
      }
      mask(e = this.subnetMask) {
        return this.getBitsBase2(0, e);
      }
      possibleSubnets(e = 128) {
        let t = o.BITS - this.subnetMask - Math.abs(e - o.BITS);
        return t < 0 ? `0` : p((BigInt(`2`) ** BigInt(t)).toString(10));
      }
      _startAddress() {
        return BigInt(`0b${this.mask() + `0`.repeat(o.BITS - this.subnetMask)}`);
      }
      startAddress() {
        return e.fromBigInt(this._startAddress());
      }
      startAddressExclusive() {
        let t = BigInt(`1`);
        return e.fromBigInt(this._startAddress() + t);
      }
      _endAddress() {
        return BigInt(`0b${this.mask() + `1`.repeat(o.BITS - this.subnetMask)}`);
      }
      endAddress() {
        return e.fromBigInt(this._endAddress());
      }
      endAddressExclusive() {
        let t = BigInt(`1`);
        return e.fromBigInt(this._endAddress() - t);
      }
      getScope() {
        let e = o.SCOPES[parseInt(this.getBits(12, 16).toString(10), 10)];
        return (this.getType() === `Global unicast` && e !== `Link local` && (e = `Global`), e || `Unknown`);
      }
      getType() {
        for (let t of Object.keys(o.TYPES)) if (this.isInSubnet(new e(t))) return o.TYPES[t];
        return `Global unicast`;
      }
      getBits(e, t) {
        return BigInt(`0b${this.getBitsBase2(e, t)}`);
      }
      getBitsBase2(e, t) {
        return this.binaryZeroPad().slice(e, t);
      }
      getBitsBase16(e, t) {
        let n = t - e;
        if (n % 4 != 0) throw Error(`Length of bits to retrieve must be divisible by four`);
        return this.getBits(e, t)
          .toString(16)
          .padStart(n / 4, `0`);
      }
      getBitsPastSubnet() {
        return this.getBitsBase2(this.subnetMask, o.BITS);
      }
      reverseForm(e) {
        e ||= {};
        let t = Math.floor(this.subnetMask / 4),
          n = this.canonicalForm().replace(/:/g, ``).split(``).slice(0, t).reverse().join(`.`);
        return t > 0 ? (e.omitSuffix ? n : `${n}.ip6.arpa.`) : e.omitSuffix ? `` : `ip6.arpa.`;
      }
      correctForm() {
        let e,
          t = [],
          n = 0,
          r = [];
        for (e = 0; e < this.parsedAddress.length; e++) {
          let t = parseInt(this.parsedAddress[e], 16);
          (t === 0 && n++, t !== 0 && n > 0 && (n > 1 && r.push([e - n, e - 1]), (n = 0)));
        }
        n > 1 && r.push([this.parsedAddress.length - n, this.parsedAddress.length - 1]);
        let i = r.map((e) => e[1] - e[0] + 1);
        if (r.length > 0) {
          let e = i.indexOf(Math.max(...i));
          t = h(this.parsedAddress, r[e]);
        } else t = this.parsedAddress;
        for (e = 0; e < t.length; e++) t[e] !== `compact` && (t[e] = parseInt(t[e], 16).toString(16));
        let a = t.join(`:`);
        return (
          (a = a.replace(/^compact$/, `::`)),
          (a = a.replace(/(^compact)|(compact$)/, `:`)),
          (a = a.replace(/compact/, ``)),
          a
        );
      }
      binaryZeroPad() {
        return this.bigInt().toString(2).padStart(o.BITS, `0`);
      }
      parse4in6(e) {
        let t = e.split(`:`),
          n = t.slice(-1)[0].match(a.RE_ADDRESS);
        if (n) {
          ((this.parsedAddress4 = n[0]), (this.address4 = new c.Address4(this.parsedAddress4)));
          for (let t = 0; t < this.address4.groups; t++)
            if (/^0[0-9]+/.test(this.address4.parsedAddress[t]))
              throw new u.AddressError(
                `IPv4 addresses can't have leading zeroes.`,
                e.replace(a.RE_ADDRESS, this.address4.parsedAddress.map(m).join(`.`)),
              );
          ((this.v4 = !0), (t[t.length - 1] = this.address4.toGroup6()), (e = t.join(`:`)));
        }
        return e;
      }
      parse(e) {
        e = this.parse4in6(e);
        let t = e.match(o.RE_BAD_CHARACTERS);
        if (t)
          throw new u.AddressError(
            `Bad character${t.length > 1 ? `s` : ``} detected in address: ${t.join(``)}`,
            e.replace(o.RE_BAD_CHARACTERS, `<span class="parse-error">$1</span>`),
          );
        let n = e.match(o.RE_BAD_ADDRESS);
        if (n)
          throw new u.AddressError(
            `Address failed regex: ${n.join(``)}`,
            e.replace(o.RE_BAD_ADDRESS, `<span class="parse-error">$1</span>`),
          );
        let r = [],
          i = e.split(`::`);
        if (i.length === 2) {
          let e = i[0].split(`:`),
            t = i[1].split(`:`);
          (e.length === 1 && e[0] === `` && (e = []), t.length === 1 && t[0] === `` && (t = []));
          let n = this.groups - (e.length + t.length);
          if (!n) throw new u.AddressError(`Error parsing groups`);
          ((this.elidedGroups = n),
            (this.elisionBegin = e.length),
            (this.elisionEnd = e.length + this.elidedGroups),
            (r = r.concat(e)));
          for (let e = 0; e < n; e++) r.push(`0`);
          r = r.concat(t);
        } else if (i.length === 1) ((r = e.split(`:`)), (this.elidedGroups = 0));
        else throw new u.AddressError(`Too many :: groups found`);
        if (((r = r.map((e) => parseInt(e, 16).toString(16))), r.length !== this.groups))
          throw new u.AddressError(`Incorrect number of groups found`);
        return r;
      }
      canonicalForm() {
        return this.parsedAddress.map(g).join(`:`);
      }
      decimal() {
        return this.parsedAddress.map((e) => parseInt(e, 16).toString(10).padStart(5, `0`)).join(`:`);
      }
      bigInt() {
        return BigInt(`0x${this.parsedAddress.map(g).join(``)}`);
      }
      to4() {
        let e = this.binaryZeroPad().split(``);
        return c.Address4.fromHex(BigInt(`0b${e.slice(96, 128).join(``)}`).toString(16));
      }
      to4in6() {
        let t = this.to4(),
          n = new e(this.parsedAddress.slice(0, 6).join(`:`), 6).correctForm(),
          r = ``;
        return (/:$/.test(n) || (r = `:`), n + r + t.address);
      }
      inspectTeredo() {
        let e = this.getBitsBase16(0, 32),
          t = (this.getBits(80, 96) ^ BigInt(`0xffff`)).toString(),
          n = c.Address4.fromHex(this.getBitsBase16(32, 64)),
          r = this.getBits(96, 128),
          i = c.Address4.fromHex((r ^ BigInt(`0xffffffff`)).toString(16)),
          a = this.getBitsBase2(64, 80),
          o = (0, d.testBit)(a, 15),
          s = (0, d.testBit)(a, 14),
          l = (0, d.testBit)(a, 8),
          u = (0, d.testBit)(a, 9),
          f = BigInt(`0b${a.slice(2, 6) + a.slice(8, 16)}`).toString(10);
        return {
          prefix: `${e.slice(0, 4)}:${e.slice(4, 8)}`,
          server4: n.address,
          client4: i.address,
          flags: a,
          coneNat: o,
          microsoft: { reserved: s, universalLocal: u, groupIndividual: l, nonce: f },
          udpPort: t,
        };
      }
      inspect6to4() {
        let e = this.getBitsBase16(0, 16),
          t = c.Address4.fromHex(this.getBitsBase16(16, 48));
        return { prefix: e.slice(0, 4), gateway: t.address };
      }
      to6to4() {
        if (!this.is4()) return null;
        let t = [`2002`, this.getBitsBase16(96, 112), this.getBitsBase16(112, 128), ``, `/16`].join(`:`);
        return new e(t);
      }
      toByteArray() {
        let e = this.bigInt().toString(16),
          t = `${`0`.repeat(e.length % 2)}${e}`,
          n = [];
        for (let e = 0, r = t.length; e < r; e += 2) n.push(parseInt(t.substring(e, e + 2), 16));
        return n;
      }
      toUnsignedByteArray() {
        return this.toByteArray().map(_);
      }
      static fromByteArray(e) {
        return this.fromUnsignedByteArray(e.map(_));
      }
      static fromUnsignedByteArray(t) {
        let n = BigInt(`256`),
          r = BigInt(`0`),
          i = BigInt(`1`);
        for (let e = t.length - 1; e >= 0; e--) ((r += i * BigInt(t[e].toString(10))), (i *= n));
        return e.fromBigInt(r);
      }
      isCanonical() {
        return this.addressMinusSuffix === this.canonicalForm();
      }
      isLinkLocal() {
        return (
          this.getBitsBase2(0, 64) === `1111111010000000000000000000000000000000000000000000000000000000`
        );
      }
      isMulticast() {
        return this.getType() === `Multicast`;
      }
      is4() {
        return this.v4;
      }
      isTeredo() {
        return this.isInSubnet(new e(`2001::/32`));
      }
      is6to4() {
        return this.isInSubnet(new e(`2002::/16`));
      }
      isLoopback() {
        return this.getType() === `Loopback`;
      }
      href(e) {
        return ((e = e === void 0 ? `` : `:${e}`), `http://[${this.correctForm()}]${e}/`);
      }
      link(e) {
        ((e ||= {}),
          e.className === void 0 && (e.className = ``),
          e.prefix === void 0 && (e.prefix = `/#address=`),
          e.v4 === void 0 && (e.v4 = !1));
        let t = this.correctForm;
        e.v4 && (t = this.to4in6);
        let n = t.call(this);
        return e.className
          ? `<a href="${e.prefix}${n}" class="${e.className}">${n}</a>`
          : `<a href="${e.prefix}${n}">${n}</a>`;
      }
      group() {
        if (this.elidedGroups === 0) return s.simpleGroup(this.address).join(`:`);
        (f(typeof this.elidedGroups == `number`), f(typeof this.elisionBegin == `number`));
        let e = [],
          [t, n] = this.address.split(`::`);
        t.length ? e.push(...s.simpleGroup(t)) : e.push(``);
        let r = [`hover-group`];
        for (let e = this.elisionBegin; e < this.elisionBegin + this.elidedGroups; e++) r.push(`group-${e}`);
        return (
          e.push(`<span class="${r.join(` `)}"></span>`),
          n.length ? e.push(...s.simpleGroup(n, this.elisionEnd)) : e.push(``),
          this.is4() && (f(this.address4 instanceof c.Address4), e.pop(), e.push(this.address4.groupForV6())),
          e.join(`:`)
        );
      }
      regularExpressionString(t = !1) {
        let n = [],
          r = new e(this.correctForm());
        if (r.elidedGroups === 0) n.push((0, l.simpleRegularExpression)(r.parsedAddress));
        else if (r.elidedGroups === o.GROUPS) n.push((0, l.possibleElisions)(o.GROUPS));
        else {
          let e = r.address.split(`::`);
          (e[0].length && n.push((0, l.simpleRegularExpression)(e[0].split(`:`))),
            f(typeof r.elidedGroups == `number`),
            n.push((0, l.possibleElisions)(r.elidedGroups, e[0].length !== 0, e[1].length !== 0)),
            e[1].length && n.push((0, l.simpleRegularExpression)(e[1].split(`:`))),
            (n = [n.join(`:`)]));
        }
        return (
          t ||
            (n = [
              `(?=^|`,
              l.ADDRESS_BOUNDARY,
              `|[^\\w\\:])(`,
              ...n,
              `)(?=[^\\w\\:]|`,
              l.ADDRESS_BOUNDARY,
              `|$)`,
            ]),
          n.join(``)
        );
      }
      regularExpression(e = !1) {
        return new RegExp(this.regularExpressionString(e), `i`);
      }
    };
  }),
  mo = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      r =
        (e && e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(r, e, i);
          return (n(r, e), r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.v6 = e.AddressError = e.Address6 = e.Address4 = void 0));
    var i = co();
    Object.defineProperty(e, "Address4", {
      enumerable: !0,
      get: function () {
        return i.Address4;
      },
    });
    var a = po();
    Object.defineProperty(e, "Address6", {
      enumerable: !0,
      get: function () {
        return a.Address6;
      },
    });
    var o = so();
    (Object.defineProperty(e, "AddressError", {
      enumerable: !0,
      get: function () {
        return o.AddressError;
      },
    }),
      (e.v6 = { helpers: r(uo()) }));
  }),
  ho = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ipToBuffer =
        e.int32ToIpv4 =
        e.ipv4ToInt32 =
        e.validateSocksClientChainOptions =
        e.validateSocksClientOptions =
          void 0));
    var t = io(),
      n = ro(),
      r = require("stream"),
      i = mo(),
      a = require("net");
    function o(e, i = [`connect`, `bind`, `associate`]) {
      if (!n.SocksCommand[e.command]) throw new t.SocksClientError(n.ERRORS.InvalidSocksCommand, e);
      if (i.indexOf(e.command) === -1)
        throw new t.SocksClientError(n.ERRORS.InvalidSocksCommandForOperation, e);
      if (!l(e.destination)) throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsDestination, e);
      if (!u(e.proxy)) throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsProxy, e);
      if ((c(e.proxy, e), e.timeout && !d(e.timeout)))
        throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsTimeout, e);
      if (e.existing_socket && !(e.existing_socket instanceof r.Duplex))
        throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsExistingSocket, e);
    }
    e.validateSocksClientOptions = o;
    function s(e) {
      if (e.command !== `connect`) throw new t.SocksClientError(n.ERRORS.InvalidSocksCommandChain, e);
      if (!l(e.destination)) throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsDestination, e);
      if (!(e.proxies && Array.isArray(e.proxies) && e.proxies.length >= 2))
        throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsProxiesLength, e);
      if (
        (e.proxies.forEach((r) => {
          if (!u(r)) throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsProxy, e);
          c(r, e);
        }),
        e.timeout && !d(e.timeout))
      )
        throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsTimeout, e);
    }
    e.validateSocksClientChainOptions = s;
    function c(e, r) {
      if (e.custom_auth_method !== void 0) {
        if (
          e.custom_auth_method < n.SOCKS5_CUSTOM_AUTH_START ||
          e.custom_auth_method > n.SOCKS5_CUSTOM_AUTH_END
        )
          throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsCustomAuthRange, r);
        if (
          e.custom_auth_request_handler === void 0 ||
          typeof e.custom_auth_request_handler != `function` ||
          e.custom_auth_response_size === void 0 ||
          e.custom_auth_response_handler === void 0 ||
          typeof e.custom_auth_response_handler != `function`
        )
          throw new t.SocksClientError(n.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, r);
      }
    }
    function l(e) {
      return (
        e &&
        typeof e.host == `string` &&
        Buffer.byteLength(e.host) < 256 &&
        typeof e.port == `number` &&
        e.port >= 0 &&
        e.port <= 65535
      );
    }
    function u(e) {
      return (
        e &&
        (typeof e.host == `string` || typeof e.ipaddress == `string`) &&
        typeof e.port == `number` &&
        e.port >= 0 &&
        e.port <= 65535 &&
        (e.type === 4 || e.type === 5)
      );
    }
    function d(e) {
      return typeof e == `number` && e > 0;
    }
    function f(e) {
      return new i.Address4(e).toArray().reduce((e, t) => (e << 8) + t, 0) >>> 0;
    }
    e.ipv4ToInt32 = f;
    function p(e) {
      return [(e >>> 24) & 255, (e >>> 16) & 255, (e >>> 8) & 255, e & 255].join(`.`);
    }
    e.int32ToIpv4 = p;
    function m(e) {
      if (a.isIPv4(e)) {
        let t = new i.Address4(e);
        return Buffer.from(t.toArray());
      }
      if (a.isIPv6(e)) {
        let t = new i.Address6(e);
        return Buffer.from(
          t
            .canonicalForm()
            .split(`:`)
            .map((e) => e.padStart(4, `0`))
            .join(``),
          `hex`,
        );
      }
      throw Error(`Invalid IP address format`);
    }
    e.ipToBuffer = m;
  }),
  go = e.t((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ReceiveBuffer = void 0),
      (e.ReceiveBuffer = class {
        constructor(e = 4096) {
          ((this.buffer = Buffer.allocUnsafe(e)), (this.offset = 0), (this.originalSize = e));
        }
        get length() {
          return this.offset;
        }
        append(e) {
          if (!Buffer.isBuffer(e)) throw Error(`Attempted to append a non-buffer instance to ReceiveBuffer.`);
          if (this.offset + e.length >= this.buffer.length) {
            let t = this.buffer;
            ((this.buffer = Buffer.allocUnsafe(
              Math.max(this.buffer.length + this.originalSize, this.buffer.length + e.length),
            )),
              t.copy(this.buffer));
          }
          return (e.copy(this.buffer, this.offset), (this.offset += e.length));
        }
        peek(e) {
          if (e > this.offset)
            throw Error(`Attempted to read beyond the bounds of the managed internal data.`);
          return this.buffer.slice(0, e);
        }
        get(e) {
          if (e > this.offset)
            throw Error(`Attempted to read beyond the bounds of the managed internal data.`);
          let t = Buffer.allocUnsafe(e);
          return (
            this.buffer.slice(0, e).copy(t),
            this.buffer.copyWithin(0, e, e + this.offset - e),
            (this.offset -= e),
            t
          );
        }
      }));
  }),
  _o = e.t((e) => {
    var t =
      (e && e.__awaiter) ||
      function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n ||= Promise)(function (n, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.SocksClientError = e.SocksClient = void 0));
    var n = require("events"),
      r = require("net"),
      i = no(),
      a = ro(),
      o = ho(),
      s = go(),
      c = io();
    Object.defineProperty(e, "SocksClientError", {
      enumerable: !0,
      get: function () {
        return c.SocksClientError;
      },
    });
    var l = mo();
    e.SocksClient = class e extends n.EventEmitter {
      constructor(e) {
        (super(),
          (this.options = Object.assign({}, e)),
          (0, o.validateSocksClientOptions)(e),
          this.setState(a.SocksClientState.Created));
      }
      static createConnection(t, n) {
        return new Promise((r, i) => {
          try {
            (0, o.validateSocksClientOptions)(t, [`connect`]);
          } catch (e) {
            return typeof n == `function` ? (n(e), r(e)) : i(e);
          }
          let a = new e(t);
          (a.connect(t.existing_socket),
            a.once(`established`, (e) => {
              (a.removeAllListeners(), typeof n == `function` && n(null, e), r(e));
            }),
            a.once(`error`, (e) => {
              (a.removeAllListeners(), typeof n == `function` ? (n(e), r(e)) : i(e));
            }));
        });
      }
      static createConnectionChain(n, r) {
        return new Promise((i, a) =>
          t(this, void 0, void 0, function* () {
            try {
              (0, o.validateSocksClientChainOptions)(n);
            } catch (e) {
              return typeof r == `function` ? (r(e), i(e)) : a(e);
            }
            n.randomizeChain && (0, c.shuffleArray)(n.proxies);
            try {
              let t;
              for (let r = 0; r < n.proxies.length; r++) {
                let i = n.proxies[r],
                  a =
                    r === n.proxies.length - 1
                      ? n.destination
                      : {
                          host: n.proxies[r + 1].host || n.proxies[r + 1].ipaddress,
                          port: n.proxies[r + 1].port,
                        },
                  o = yield e.createConnection({
                    command: `connect`,
                    proxy: i,
                    destination: a,
                    existing_socket: t,
                  });
                t ||= o.socket;
              }
              (typeof r == `function` && r(null, { socket: t }), i({ socket: t }));
            } catch (e) {
              typeof r == `function` ? (r(e), i(e)) : a(e);
            }
          }),
        );
      }
      static createUDPFrame(e) {
        let t = new i.SmartBuffer();
        return (
          t.writeUInt16BE(0),
          t.writeUInt8(e.frameNumber || 0),
          r.isIPv4(e.remoteHost.host)
            ? (t.writeUInt8(a.Socks5HostType.IPv4), t.writeUInt32BE((0, o.ipv4ToInt32)(e.remoteHost.host)))
            : r.isIPv6(e.remoteHost.host)
              ? (t.writeUInt8(a.Socks5HostType.IPv6), t.writeBuffer((0, o.ipToBuffer)(e.remoteHost.host)))
              : (t.writeUInt8(a.Socks5HostType.Hostname),
                t.writeUInt8(Buffer.byteLength(e.remoteHost.host)),
                t.writeString(e.remoteHost.host)),
          t.writeUInt16BE(e.remoteHost.port),
          t.writeBuffer(e.data),
          t.toBuffer()
        );
      }
      static parseUDPFrame(e) {
        let t = i.SmartBuffer.fromBuffer(e);
        t.readOffset = 2;
        let n = t.readUInt8(),
          r = t.readUInt8(),
          s;
        s =
          r === a.Socks5HostType.IPv4
            ? (0, o.int32ToIpv4)(t.readUInt32BE())
            : r === a.Socks5HostType.IPv6
              ? l.Address6.fromByteArray(Array.from(t.readBuffer(16))).canonicalForm()
              : t.readString(t.readUInt8());
        let c = t.readUInt16BE();
        return { frameNumber: n, remoteHost: { host: s, port: c }, data: t.readBuffer() };
      }
      setState(e) {
        this.state !== a.SocksClientState.Error && (this.state = e);
      }
      connect(e) {
        ((this.onDataReceived = (e) => this.onDataReceivedHandler(e)),
          (this.onClose = () => this.onCloseHandler()),
          (this.onError = (e) => this.onErrorHandler(e)),
          (this.onConnect = () => this.onConnectHandler()));
        let t = setTimeout(() => this.onEstablishedTimeout(), this.options.timeout || a.DEFAULT_TIMEOUT);
        (t.unref && typeof t.unref == `function` && t.unref(),
          (this.socket = e || new r.Socket()),
          this.socket.once(`close`, this.onClose),
          this.socket.once(`error`, this.onError),
          this.socket.once(`connect`, this.onConnect),
          this.socket.on(`data`, this.onDataReceived),
          this.setState(a.SocksClientState.Connecting),
          (this.receiveBuffer = new s.ReceiveBuffer()),
          e
            ? this.socket.emit(`connect`)
            : (this.socket.connect(this.getSocketOptions()),
              this.options.set_tcp_nodelay !== void 0 &&
                this.options.set_tcp_nodelay !== null &&
                this.socket.setNoDelay(!!this.options.set_tcp_nodelay)),
          this.prependOnceListener(`established`, (e) => {
            setImmediate(() => {
              if (this.receiveBuffer.length > 0) {
                let t = this.receiveBuffer.get(this.receiveBuffer.length);
                e.socket.emit(`data`, t);
              }
              e.socket.resume();
            });
          }));
      }
      getSocketOptions() {
        return Object.assign(Object.assign({}, this.options.socket_options), {
          host: this.options.proxy.host || this.options.proxy.ipaddress,
          port: this.options.proxy.port,
        });
      }
      onEstablishedTimeout() {
        this.state !== a.SocksClientState.Established &&
          this.state !== a.SocksClientState.BoundWaitingForConnection &&
          this.closeSocket(a.ERRORS.ProxyConnectionTimedOut);
      }
      onConnectHandler() {
        (this.setState(a.SocksClientState.Connected),
          this.options.proxy.type === 4
            ? this.sendSocks4InitialHandshake()
            : this.sendSocks5InitialHandshake(),
          this.setState(a.SocksClientState.SentInitialHandshake));
      }
      onDataReceivedHandler(e) {
        (this.receiveBuffer.append(e), this.processData());
      }
      processData() {
        for (
          ;
          this.state !== a.SocksClientState.Established &&
          this.state !== a.SocksClientState.Error &&
          this.receiveBuffer.length >= this.nextRequiredPacketBufferSize;
        )
          if (this.state === a.SocksClientState.SentInitialHandshake)
            this.options.proxy.type === 4
              ? this.handleSocks4FinalHandshakeResponse()
              : this.handleInitialSocks5HandshakeResponse();
          else if (this.state === a.SocksClientState.SentAuthentication)
            this.handleInitialSocks5AuthenticationHandshakeResponse();
          else if (this.state === a.SocksClientState.SentFinalHandshake)
            this.handleSocks5FinalHandshakeResponse();
          else if (this.state === a.SocksClientState.BoundWaitingForConnection)
            this.options.proxy.type === 4
              ? this.handleSocks4IncomingConnectionResponse()
              : this.handleSocks5IncomingConnectionResponse();
          else {
            this.closeSocket(a.ERRORS.InternalError);
            break;
          }
      }
      onCloseHandler() {
        this.closeSocket(a.ERRORS.SocketClosed);
      }
      onErrorHandler(e) {
        this.closeSocket(e.message);
      }
      removeInternalSocketHandlers() {
        (this.socket.pause(),
          this.socket.removeListener(`data`, this.onDataReceived),
          this.socket.removeListener(`close`, this.onClose),
          this.socket.removeListener(`error`, this.onError),
          this.socket.removeListener(`connect`, this.onConnect));
      }
      closeSocket(e) {
        this.state !== a.SocksClientState.Error &&
          (this.setState(a.SocksClientState.Error),
          this.socket.destroy(),
          this.removeInternalSocketHandlers(),
          this.emit(`error`, new c.SocksClientError(e, this.options)));
      }
      sendSocks4InitialHandshake() {
        let e = this.options.proxy.userId || ``,
          t = new i.SmartBuffer();
        (t.writeUInt8(4),
          t.writeUInt8(a.SocksCommand[this.options.command]),
          t.writeUInt16BE(this.options.destination.port),
          r.isIPv4(this.options.destination.host)
            ? (t.writeBuffer((0, o.ipToBuffer)(this.options.destination.host)), t.writeStringNT(e))
            : (t.writeUInt8(0),
              t.writeUInt8(0),
              t.writeUInt8(0),
              t.writeUInt8(1),
              t.writeStringNT(e),
              t.writeStringNT(this.options.destination.host)),
          (this.nextRequiredPacketBufferSize = a.SOCKS_INCOMING_PACKET_SIZES.Socks4Response),
          this.socket.write(t.toBuffer()));
      }
      handleSocks4FinalHandshakeResponse() {
        let e = this.receiveBuffer.get(8);
        if (e[1] !== a.Socks4Response.Granted)
          this.closeSocket(`${a.ERRORS.Socks4ProxyRejectedConnection} - (${a.Socks4Response[e[1]]})`);
        else if (a.SocksCommand[this.options.command] === a.SocksCommand.bind) {
          let t = i.SmartBuffer.fromBuffer(e);
          t.readOffset = 2;
          let n = { port: t.readUInt16BE(), host: (0, o.int32ToIpv4)(t.readUInt32BE()) };
          (n.host === `0.0.0.0` && (n.host = this.options.proxy.ipaddress),
            this.setState(a.SocksClientState.BoundWaitingForConnection),
            this.emit(`bound`, { remoteHost: n, socket: this.socket }));
        } else
          (this.setState(a.SocksClientState.Established),
            this.removeInternalSocketHandlers(),
            this.emit(`established`, { socket: this.socket }));
      }
      handleSocks4IncomingConnectionResponse() {
        let e = this.receiveBuffer.get(8);
        if (e[1] !== a.Socks4Response.Granted)
          this.closeSocket(
            `${a.ERRORS.Socks4ProxyRejectedIncomingBoundConnection} - (${a.Socks4Response[e[1]]})`,
          );
        else {
          let t = i.SmartBuffer.fromBuffer(e);
          t.readOffset = 2;
          let n = { port: t.readUInt16BE(), host: (0, o.int32ToIpv4)(t.readUInt32BE()) };
          (this.setState(a.SocksClientState.Established),
            this.removeInternalSocketHandlers(),
            this.emit(`established`, { remoteHost: n, socket: this.socket }));
        }
      }
      sendSocks5InitialHandshake() {
        let e = new i.SmartBuffer(),
          t = [a.Socks5Auth.NoAuth];
        ((this.options.proxy.userId || this.options.proxy.password) && t.push(a.Socks5Auth.UserPass),
          this.options.proxy.custom_auth_method !== void 0 && t.push(this.options.proxy.custom_auth_method),
          e.writeUInt8(5),
          e.writeUInt8(t.length));
        for (let n of t) e.writeUInt8(n);
        ((this.nextRequiredPacketBufferSize = a.SOCKS_INCOMING_PACKET_SIZES.Socks5InitialHandshakeResponse),
          this.socket.write(e.toBuffer()),
          this.setState(a.SocksClientState.SentInitialHandshake));
      }
      handleInitialSocks5HandshakeResponse() {
        let e = this.receiveBuffer.get(2);
        e[0] === 5
          ? e[1] === a.SOCKS5_NO_ACCEPTABLE_AUTH
            ? this.closeSocket(a.ERRORS.InvalidSocks5InitialHandshakeNoAcceptedAuthType)
            : e[1] === a.Socks5Auth.NoAuth
              ? ((this.socks5ChosenAuthType = a.Socks5Auth.NoAuth), this.sendSocks5CommandRequest())
              : e[1] === a.Socks5Auth.UserPass
                ? ((this.socks5ChosenAuthType = a.Socks5Auth.UserPass),
                  this.sendSocks5UserPassAuthentication())
                : e[1] === this.options.proxy.custom_auth_method
                  ? ((this.socks5ChosenAuthType = this.options.proxy.custom_auth_method),
                    this.sendSocks5CustomAuthentication())
                  : this.closeSocket(a.ERRORS.InvalidSocks5InitialHandshakeUnknownAuthType)
          : this.closeSocket(a.ERRORS.InvalidSocks5IntiailHandshakeSocksVersion);
      }
      sendSocks5UserPassAuthentication() {
        let e = this.options.proxy.userId || ``,
          t = this.options.proxy.password || ``,
          n = new i.SmartBuffer();
        (n.writeUInt8(1),
          n.writeUInt8(Buffer.byteLength(e)),
          n.writeString(e),
          n.writeUInt8(Buffer.byteLength(t)),
          n.writeString(t),
          (this.nextRequiredPacketBufferSize =
            a.SOCKS_INCOMING_PACKET_SIZES.Socks5UserPassAuthenticationResponse),
          this.socket.write(n.toBuffer()),
          this.setState(a.SocksClientState.SentAuthentication));
      }
      sendSocks5CustomAuthentication() {
        return t(this, void 0, void 0, function* () {
          ((this.nextRequiredPacketBufferSize = this.options.proxy.custom_auth_response_size),
            this.socket.write(yield this.options.proxy.custom_auth_request_handler()),
            this.setState(a.SocksClientState.SentAuthentication));
        });
      }
      handleSocks5CustomAuthHandshakeResponse(e) {
        return t(this, void 0, void 0, function* () {
          return yield this.options.proxy.custom_auth_response_handler(e);
        });
      }
      handleSocks5AuthenticationNoAuthHandshakeResponse(e) {
        return t(this, void 0, void 0, function* () {
          return e[1] === 0;
        });
      }
      handleSocks5AuthenticationUserPassHandshakeResponse(e) {
        return t(this, void 0, void 0, function* () {
          return e[1] === 0;
        });
      }
      handleInitialSocks5AuthenticationHandshakeResponse() {
        return t(this, void 0, void 0, function* () {
          this.setState(a.SocksClientState.ReceivedAuthenticationResponse);
          let e = !1;
          (this.socks5ChosenAuthType === a.Socks5Auth.NoAuth
            ? (e = yield this.handleSocks5AuthenticationNoAuthHandshakeResponse(this.receiveBuffer.get(2)))
            : this.socks5ChosenAuthType === a.Socks5Auth.UserPass
              ? (e = yield this.handleSocks5AuthenticationUserPassHandshakeResponse(
                  this.receiveBuffer.get(2),
                ))
              : this.socks5ChosenAuthType === this.options.proxy.custom_auth_method &&
                (e = yield this.handleSocks5CustomAuthHandshakeResponse(
                  this.receiveBuffer.get(this.options.proxy.custom_auth_response_size),
                )),
            e ? this.sendSocks5CommandRequest() : this.closeSocket(a.ERRORS.Socks5AuthenticationFailed));
        });
      }
      sendSocks5CommandRequest() {
        let e = new i.SmartBuffer();
        (e.writeUInt8(5),
          e.writeUInt8(a.SocksCommand[this.options.command]),
          e.writeUInt8(0),
          r.isIPv4(this.options.destination.host)
            ? (e.writeUInt8(a.Socks5HostType.IPv4),
              e.writeBuffer((0, o.ipToBuffer)(this.options.destination.host)))
            : r.isIPv6(this.options.destination.host)
              ? (e.writeUInt8(a.Socks5HostType.IPv6),
                e.writeBuffer((0, o.ipToBuffer)(this.options.destination.host)))
              : (e.writeUInt8(a.Socks5HostType.Hostname),
                e.writeUInt8(this.options.destination.host.length),
                e.writeString(this.options.destination.host)),
          e.writeUInt16BE(this.options.destination.port),
          (this.nextRequiredPacketBufferSize = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader),
          this.socket.write(e.toBuffer()),
          this.setState(a.SocksClientState.SentFinalHandshake));
      }
      handleSocks5FinalHandshakeResponse() {
        let e = this.receiveBuffer.peek(5);
        if (e[0] !== 5 || e[1] !== a.Socks5Response.Granted)
          this.closeSocket(`${a.ERRORS.InvalidSocks5FinalHandshakeRejected} - ${a.Socks5Response[e[1]]}`);
        else {
          let t = e[3],
            n,
            r;
          if (t === a.Socks5HostType.IPv4) {
            let e = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;
            if (this.receiveBuffer.length < e) {
              this.nextRequiredPacketBufferSize = e;
              return;
            }
            ((r = i.SmartBuffer.fromBuffer(this.receiveBuffer.get(e).slice(4))),
              (n = { host: (0, o.int32ToIpv4)(r.readUInt32BE()), port: r.readUInt16BE() }),
              n.host === `0.0.0.0` && (n.host = this.options.proxy.ipaddress));
          } else if (t === a.Socks5HostType.Hostname) {
            let t = e[4],
              o = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(t);
            if (this.receiveBuffer.length < o) {
              this.nextRequiredPacketBufferSize = o;
              return;
            }
            ((r = i.SmartBuffer.fromBuffer(this.receiveBuffer.get(o).slice(5))),
              (n = { host: r.readString(t), port: r.readUInt16BE() }));
          } else if (t === a.Socks5HostType.IPv6) {
            let e = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;
            if (this.receiveBuffer.length < e) {
              this.nextRequiredPacketBufferSize = e;
              return;
            }
            ((r = i.SmartBuffer.fromBuffer(this.receiveBuffer.get(e).slice(4))),
              (n = {
                host: l.Address6.fromByteArray(Array.from(r.readBuffer(16))).canonicalForm(),
                port: r.readUInt16BE(),
              }));
          }
          (this.setState(a.SocksClientState.ReceivedFinalResponse),
            a.SocksCommand[this.options.command] === a.SocksCommand.connect
              ? (this.setState(a.SocksClientState.Established),
                this.removeInternalSocketHandlers(),
                this.emit(`established`, { remoteHost: n, socket: this.socket }))
              : a.SocksCommand[this.options.command] === a.SocksCommand.bind
                ? (this.setState(a.SocksClientState.BoundWaitingForConnection),
                  (this.nextRequiredPacketBufferSize = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader),
                  this.emit(`bound`, { remoteHost: n, socket: this.socket }))
                : a.SocksCommand[this.options.command] === a.SocksCommand.associate &&
                  (this.setState(a.SocksClientState.Established),
                  this.removeInternalSocketHandlers(),
                  this.emit(`established`, { remoteHost: n, socket: this.socket })));
        }
      }
      handleSocks5IncomingConnectionResponse() {
        let e = this.receiveBuffer.peek(5);
        if (e[0] !== 5 || e[1] !== a.Socks5Response.Granted)
          this.closeSocket(
            `${a.ERRORS.Socks5ProxyRejectedIncomingBoundConnection} - ${a.Socks5Response[e[1]]}`,
          );
        else {
          let t = e[3],
            n,
            r;
          if (t === a.Socks5HostType.IPv4) {
            let e = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;
            if (this.receiveBuffer.length < e) {
              this.nextRequiredPacketBufferSize = e;
              return;
            }
            ((r = i.SmartBuffer.fromBuffer(this.receiveBuffer.get(e).slice(4))),
              (n = { host: (0, o.int32ToIpv4)(r.readUInt32BE()), port: r.readUInt16BE() }),
              n.host === `0.0.0.0` && (n.host = this.options.proxy.ipaddress));
          } else if (t === a.Socks5HostType.Hostname) {
            let t = e[4],
              o = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(t);
            if (this.receiveBuffer.length < o) {
              this.nextRequiredPacketBufferSize = o;
              return;
            }
            ((r = i.SmartBuffer.fromBuffer(this.receiveBuffer.get(o).slice(5))),
              (n = { host: r.readString(t), port: r.readUInt16BE() }));
          } else if (t === a.Socks5HostType.IPv6) {
            let e = a.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;
            if (this.receiveBuffer.length < e) {
              this.nextRequiredPacketBufferSize = e;
              return;
            }
            ((r = i.SmartBuffer.fromBuffer(this.receiveBuffer.get(e).slice(4))),
              (n = {
                host: l.Address6.fromByteArray(Array.from(r.readBuffer(16))).canonicalForm(),
                port: r.readUInt16BE(),
              }));
          }
          (this.setState(a.SocksClientState.Established),
            this.removeInternalSocketHandlers(),
            this.emit(`established`, { remoteHost: n, socket: this.socket }));
        }
      }
      get socksClientOptions() {
        return Object.assign({}, this.options);
      }
    };
  }),
  vo = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(_o(), e));
  }),
  yo = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      r =
        (e && e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(r, e, i);
          return (n(r, e), r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.req = e.json = e.toBuffer = void 0));
    var i = r(require("http")),
      a = r(require("https"));
    async function o(e) {
      let t = 0,
        n = [];
      for await (let r of e) ((t += r.length), n.push(r));
      return Buffer.concat(n, t);
    }
    e.toBuffer = o;
    async function s(e) {
      let t = (await o(e)).toString(`utf8`);
      try {
        return JSON.parse(t);
      } catch (e) {
        let n = e;
        throw ((n.message += ` (input: ${t})`), n);
      }
    }
    e.json = s;
    function c(e, t = {}) {
      let n = ((typeof e == `string` ? e : e.href).startsWith(`https:`) ? a : i).request(e, t),
        r = new Promise((e, t) => {
          n.once(`response`, e).once(`error`, t).end();
        });
      return ((n.then = r.then.bind(r)), n);
    }
    e.req = c;
  }),
  bo = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      r =
        (e && e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(r, e, i);
          return (n(r, e), r);
        },
      i =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Agent = void 0));
    var a = r(require("net")),
      o = r(require("http")),
      s = require("https");
    i(yo(), e);
    var c = Symbol(`AgentBaseInternalState`);
    e.Agent = class extends o.Agent {
      constructor(e) {
        (super(e), (this[c] = {}));
      }
      isSecureEndpoint(e) {
        if (e) {
          if (typeof e.secureEndpoint == `boolean`) return e.secureEndpoint;
          if (typeof e.protocol == `string`) return e.protocol === `https:`;
        }
        let { stack: t } = Error();
        return (
          typeof t == `string` &&
          t
            .split(
              `
`,
            )
            .some((e) => e.indexOf(`(https.js:`) !== -1 || e.indexOf(`node:https:`) !== -1)
        );
      }
      incrementSockets(e) {
        if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
        this.sockets[e] || (this.sockets[e] = []);
        let t = new a.Socket({ writable: !1 });
        return (this.sockets[e].push(t), this.totalSocketCount++, t);
      }
      decrementSockets(e, t) {
        if (!this.sockets[e] || t === null) return;
        let n = this.sockets[e],
          r = n.indexOf(t);
        r !== -1 && (n.splice(r, 1), this.totalSocketCount--, n.length === 0 && delete this.sockets[e]);
      }
      getName(e) {
        return (typeof e.secureEndpoint == `boolean` ? e.secureEndpoint : this.isSecureEndpoint(e))
          ? s.Agent.prototype.getName.call(this, e)
          : super.getName(e);
      }
      createSocket(e, t, n) {
        let r = { ...t, secureEndpoint: this.isSecureEndpoint(t) },
          i = this.getName(r),
          a = this.incrementSockets(i);
        Promise.resolve()
          .then(() => this.connect(e, r))
          .then(
            (s) => {
              if ((this.decrementSockets(i, a), s instanceof o.Agent))
                try {
                  return s.addRequest(e, r);
                } catch (e) {
                  return n(e);
                }
              ((this[c].currentSocket = s), super.createSocket(e, t, n));
            },
            (e) => {
              (this.decrementSockets(i, a), n(e));
            },
          );
      }
      createConnection() {
        let e = this[c].currentSocket;
        if (((this[c].currentSocket = void 0), !e))
          throw Error("No socket was returned in the `connect()` function");
        return e;
      }
      get defaultPort() {
        return this[c].defaultPort ?? (this.protocol === `https:` ? 443 : 80);
      }
      set defaultPort(e) {
        this[c] && (this[c].defaultPort = e);
      }
      get protocol() {
        return this[c].protocol ?? (this.isSecureEndpoint() ? `https:` : `http:`);
      }
      set protocol(e) {
        this[c] && (this[c].protocol = e);
      }
    };
  }),
  xo = e.t((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      r =
        (e && e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(r, e, i);
          return (n(r, e), r);
        },
      a =
        (e && e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.SocksProxyAgent = void 0));
    var o = vo(),
      s = bo(),
      c = a(i.t()),
      l = r(require("dns")),
      u = r(require("net")),
      d = r(require("tls")),
      f = require("url"),
      p = (0, c.default)(`socks-proxy-agent`),
      m = (e) => (e.servername === void 0 && e.host && !u.isIP(e.host) ? { ...e, servername: e.host } : e);
    function h(e) {
      let t = !1,
        n = 5,
        r = e.hostname,
        i = parseInt(e.port, 10) || 1080;
      switch (e.protocol.replace(`:`, ``)) {
        case `socks4`:
          ((t = !0), (n = 4));
          break;
        case `socks4a`:
          n = 4;
          break;
        case `socks5`:
          ((t = !0), (n = 5));
          break;
        case `socks`:
          n = 5;
          break;
        case `socks5h`:
          n = 5;
          break;
        default:
          throw TypeError(`A "socks" protocol must be specified! Got: ${String(e.protocol)}`);
      }
      let a = { host: r, port: i, type: n };
      return (
        e.username &&
          Object.defineProperty(a, "userId", { value: decodeURIComponent(e.username), enumerable: !1 }),
        e.password != null &&
          Object.defineProperty(a, "password", { value: decodeURIComponent(e.password), enumerable: !1 }),
        { lookup: t, proxy: a }
      );
    }
    var g = class extends s.Agent {
      constructor(e, t) {
        super(t);
        let { proxy: n, lookup: r } = h(typeof e == `string` ? new f.URL(e) : e);
        ((this.shouldLookup = r),
          (this.proxy = n),
          (this.timeout = t?.timeout ?? null),
          (this.socketOptions = t?.socketOptions ?? null));
      }
      async connect(e, t) {
        let { shouldLookup: n, proxy: r, timeout: i } = this;
        if (!t.host) throw Error("No `host` defined!");
        let { host: a } = t,
          { port: s, lookup: c = l.lookup } = t;
        n &&
          (a = await new Promise((e, t) => {
            c(a, {}, (n, r) => {
              n ? t(n) : e(r);
            });
          }));
        let u = {
            proxy: r,
            destination: { host: a, port: typeof s == `number` ? s : parseInt(s, 10) },
            command: `connect`,
            timeout: i ?? void 0,
            socket_options: this.socketOptions ?? void 0,
          },
          f = (t) => {
            (e.destroy(), h.destroy(), t && t.destroy());
          };
        p(`Creating socks proxy connection: %o`, u);
        let { socket: h } = await o.SocksClient.createConnection(u);
        if (
          (p(`Successfully created socks proxy connection`),
          i !== null && (h.setTimeout(i), h.on(`timeout`, () => f())),
          t.secureEndpoint)
        ) {
          p(`Upgrading socket connection to TLS`);
          let e = d.connect({ ..._(m(t), `host`, `path`, `port`), socket: h });
          return (
            e.once(`error`, (t) => {
              (p(`Socket TLS error`, t.message), f(e));
            }),
            e
          );
        }
        return h;
      }
    };
    ((g.protocols = [`socks`, `socks4`, `socks4a`, `socks5`, `socks5h`]), (e.SocksProxyAgent = g));
    function _(e, ...t) {
      let n = {},
        r;
      for (r in e) t.includes(r) || (n[r] = e[r]);
      return n;
    }
  }),
  $ = e.t((e, t) => {
    var n = [`nodebuffer`, `arraybuffer`, `fragments`],
      r = typeof Blob < `u`;
    (r && n.push(`blob`),
      (t.exports = {
        BINARY_TYPES: n,
        CLOSE_TIMEOUT: 3e4,
        EMPTY_BUFFER: Buffer.alloc(0),
        GUID: `258EAFA5-E914-47DA-95CA-C5AB0DC85B11`,
        hasBlob: r,
        kForOnEventAttribute: Symbol(`kIsForOnEventAttribute`),
        kListener: Symbol(`kListener`),
        kStatusCode: Symbol(`status-code`),
        kWebSocket: Symbol(`websocket`),
        NOOP: () => {},
      }));
  }),
  So = e.t((e, t) => {
    var n = require("fs"),
      r = require("path"),
      i = require("os"),
      a = typeof __webpack_require__ == `function` ? __non_webpack_require__ : require,
      o = (process.config && process.config.variables) || {},
      s = !!process.env.PREBUILDS_ONLY,
      c = process.versions.modules,
      l = D() ? `electron` : E() ? `node-webkit` : `node`,
      u = process.env.npm_config_arch || i.arch(),
      d = process.env.npm_config_platform || i.platform(),
      f = process.env.LIBC || (O(d) ? `musl` : `glibc`),
      p = process.env.ARM_VERSION || (u === `arm64` ? `8` : o.arm_version) || ``,
      m = (process.versions.uv || ``).split(`.`)[0];
    t.exports = h;
    function h(e) {
      return a(h.resolve(e));
    }
    h.resolve = h.path = function (e) {
      e = r.resolve(e || `.`);
      try {
        var t = a(r.join(e, `package.json`)).name.toUpperCase().replace(/-/g, `_`);
        process.env[t + `_PREBUILD`] && (e = process.env[t + `_PREBUILD`]);
      } catch {}
      if (!s) {
        var n = _(r.join(e, `build/Release`), v);
        if (n) return n;
        var i = _(r.join(e, `build/Debug`), v);
        if (i) return i;
      }
      var o = E(e);
      if (o) return o;
      var h = E(r.dirname(process.execPath));
      if (h) return h;
      var w = [
        `platform=` + d,
        `arch=` + u,
        `runtime=` + l,
        `abi=` + c,
        `uv=` + m,
        p ? `armv=` + p : ``,
        `libc=` + f,
        `node=` + process.versions.node,
        process.versions.electron ? `electron=` + process.versions.electron : ``,
        typeof __webpack_require__ == `function` ? `webpack=true` : ``,
      ]
        .filter(Boolean)
        .join(` `);
      throw Error(
        `No native build was found for ` +
          w +
          `
    loaded from: ` +
          e +
          `
`,
      );
      function E(e) {
        var t = g(r.join(e, `prebuilds`)).map(y).filter(b(d, u)).sort(x)[0];
        if (t) {
          var n = r.join(e, `prebuilds`, t.name),
            i = g(n).map(S).filter(C(l, c)).sort(T(l))[0];
          if (i) return r.join(n, i.file);
        }
      }
    };
    function g(e) {
      try {
        return n.readdirSync(e);
      } catch {
        return [];
      }
    }
    function _(e, t) {
      var n = g(e).filter(t);
      return n[0] && r.join(e, n[0]);
    }
    function v(e) {
      return /\.node$/.test(e);
    }
    function y(e) {
      var t = e.split(`-`);
      if (t.length === 2) {
        var n = t[0],
          r = t[1].split(`+`);
        if (n && r.length && r.every(Boolean)) return { name: e, platform: n, architectures: r };
      }
    }
    function b(e, t) {
      return function (n) {
        return n == null || n.platform !== e ? !1 : n.architectures.includes(t);
      };
    }
    function x(e, t) {
      return e.architectures.length - t.architectures.length;
    }
    function S(e) {
      var t = e.split(`.`),
        n = t.pop(),
        r = { file: e, specificity: 0 };
      if (n === `node`) {
        for (var i = 0; i < t.length; i++) {
          var a = t[i];
          if (a === `node` || a === `electron` || a === `node-webkit`) r.runtime = a;
          else if (a === `napi`) r.napi = !0;
          else if (a.slice(0, 3) === `abi`) r.abi = a.slice(3);
          else if (a.slice(0, 2) === `uv`) r.uv = a.slice(2);
          else if (a.slice(0, 4) === `armv`) r.armv = a.slice(4);
          else if (a === `glibc` || a === `musl`) r.libc = a;
          else continue;
          r.specificity++;
        }
        return r;
      }
    }
    function C(e, t) {
      return function (n) {
        return !(
          n == null ||
          (n.runtime && n.runtime !== e && !w(n)) ||
          (n.abi && n.abi !== t && !n.napi) ||
          (n.uv && n.uv !== m) ||
          (n.armv && n.armv !== p) ||
          (n.libc && n.libc !== f)
        );
      };
    }
    function w(e) {
      return e.runtime === `node` && e.napi;
    }
    function T(e) {
      return function (t, n) {
        return t.runtime === n.runtime
          ? t.abi === n.abi
            ? t.specificity === n.specificity
              ? 0
              : t.specificity > n.specificity
                ? -1
                : 1
            : t.abi
              ? -1
              : 1
          : t.runtime === e
            ? -1
            : 1;
      };
    }
    function E() {
      return !!(process.versions && process.versions.nw);
    }
    function D() {
      return (process.versions && process.versions.electron) || process.env.ELECTRON_RUN_AS_NODE
        ? !0
        : typeof window < `u` && window.process && window.process.type === `renderer`;
    }
    function O(e) {
      return e === `linux` && n.existsSync(`/etc/alpine-release`);
    }
    ((h.parseTags = S),
      (h.matchTags = C),
      (h.compareTags = T),
      (h.parseTuple = y),
      (h.matchTuple = b),
      (h.compareTuples = x));
  }),
  Co = e.t((e, t) => {
    var n = typeof __webpack_require__ == `function` ? __non_webpack_require__ : require;
    t.exports = typeof n.addon == `function` ? n.addon.bind(n) : So();
  }),
  wo = e.t((e, t) => {
    t.exports = {
      mask: (e, t, n, r, i) => {
        for (var a = 0; a < i; a++) n[r + a] = e[a] ^ t[a & 3];
      },
      unmask: (e, t) => {
        let n = e.length;
        for (var r = 0; r < n; r++) e[r] ^= t[r & 3];
      },
    };
  }),
  To = e.t((e, t) => {
    try {
      t.exports = Co()(__dirname);
    } catch {
      t.exports = wo();
    }
  }),
  Eo = e.t((e, t) => {
    var { EMPTY_BUFFER: n } = $(),
      r = Buffer[Symbol.species];
    function i(e, t) {
      if (e.length === 0) return n;
      if (e.length === 1) return e[0];
      let i = Buffer.allocUnsafe(t),
        a = 0;
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        (i.set(n, a), (a += n.length));
      }
      return a < t ? new r(i.buffer, i.byteOffset, a) : i;
    }
    function a(e, t, n, r, i) {
      for (let a = 0; a < i; a++) n[r + a] = e[a] ^ t[a & 3];
    }
    function o(e, t) {
      for (let n = 0; n < e.length; n++) e[n] ^= t[n & 3];
    }
    function s(e) {
      return e.length === e.buffer.byteLength
        ? e.buffer
        : e.buffer.slice(e.byteOffset, e.byteOffset + e.length);
    }
    function c(e) {
      if (((c.readOnly = !0), Buffer.isBuffer(e))) return e;
      let t;
      return (
        e instanceof ArrayBuffer
          ? (t = new r(e))
          : ArrayBuffer.isView(e)
            ? (t = new r(e.buffer, e.byteOffset, e.byteLength))
            : ((t = Buffer.from(e)), (c.readOnly = !1)),
        t
      );
    }
    if (
      ((t.exports = { concat: i, mask: a, toArrayBuffer: s, toBuffer: c, unmask: o }),
      !process.env.WS_NO_BUFFER_UTIL)
    )
      try {
        let e = To();
        ((t.exports.mask = function (t, n, r, i, o) {
          o < 48 ? a(t, n, r, i, o) : e.mask(t, n, r, i, o);
        }),
          (t.exports.unmask = function (t, n) {
            t.length < 32 ? o(t, n) : e.unmask(t, n);
          }));
      } catch {}
  }),
  Do = e.t((e, t) => {
    var n = Symbol(`kDone`),
      r = Symbol(`kRun`);
    t.exports = class {
      constructor(e) {
        ((this[n] = () => {
          (this.pending--, this[r]());
        }),
          (this.concurrency = e || 1 / 0),
          (this.jobs = []),
          (this.pending = 0));
      }
      add(e) {
        (this.jobs.push(e), this[r]());
      }
      [r]() {
        if (this.pending !== this.concurrency && this.jobs.length) {
          let e = this.jobs.shift();
          (this.pending++, e(this[n]));
        }
      }
    };
  }),
  Oo = e.t((e, t) => {
    var n = require("zlib"),
      r = Eo(),
      i = Do(),
      { kStatusCode: a } = $(),
      o = Buffer[Symbol.species],
      s = Buffer.from([0, 0, 255, 255]),
      c = Symbol(`permessage-deflate`),
      l = Symbol(`total-length`),
      u = Symbol(`callback`),
      d = Symbol(`buffers`),
      f = Symbol(`error`),
      p;
    t.exports = class {
      constructor(e) {
        ((this._options = e || {}),
          (this._threshold = this._options.threshold === void 0 ? 1024 : this._options.threshold),
          (this._maxPayload = this._options.maxPayload | 0),
          (this._isServer = !!this._options.isServer),
          (this._deflate = null),
          (this._inflate = null),
          (this.params = null),
          (p ||= new i(this._options.concurrencyLimit === void 0 ? 10 : this._options.concurrencyLimit)));
      }
      static get extensionName() {
        return `permessage-deflate`;
      }
      offer() {
        let e = {};
        return (
          this._options.serverNoContextTakeover && (e.server_no_context_takeover = !0),
          this._options.clientNoContextTakeover && (e.client_no_context_takeover = !0),
          this._options.serverMaxWindowBits && (e.server_max_window_bits = this._options.serverMaxWindowBits),
          this._options.clientMaxWindowBits
            ? (e.client_max_window_bits = this._options.clientMaxWindowBits)
            : (this._options.clientMaxWindowBits ?? (e.client_max_window_bits = !0)),
          e
        );
      }
      accept(e) {
        return (
          (e = this.normalizeParams(e)),
          (this.params = this._isServer ? this.acceptAsServer(e) : this.acceptAsClient(e)),
          this.params
        );
      }
      cleanup() {
        if (((this._inflate &&= (this._inflate.close(), null)), this._deflate)) {
          let e = this._deflate[u];
          (this._deflate.close(),
            (this._deflate = null),
            e && e(Error(`The deflate stream was closed while data was being processed`)));
        }
      }
      acceptAsServer(e) {
        let t = this._options,
          n = e.find(
            (e) =>
              !(
                (t.serverNoContextTakeover === !1 && e.server_no_context_takeover) ||
                (e.server_max_window_bits &&
                  (t.serverMaxWindowBits === !1 ||
                    (typeof t.serverMaxWindowBits == `number` &&
                      t.serverMaxWindowBits > e.server_max_window_bits))) ||
                (typeof t.clientMaxWindowBits == `number` && !e.client_max_window_bits)
              ),
          );
        if (!n) throw Error(`None of the extension offers can be accepted`);
        return (
          t.serverNoContextTakeover && (n.server_no_context_takeover = !0),
          t.clientNoContextTakeover && (n.client_no_context_takeover = !0),
          typeof t.serverMaxWindowBits == `number` && (n.server_max_window_bits = t.serverMaxWindowBits),
          typeof t.clientMaxWindowBits == `number`
            ? (n.client_max_window_bits = t.clientMaxWindowBits)
            : (n.client_max_window_bits === !0 || t.clientMaxWindowBits === !1) &&
              delete n.client_max_window_bits,
          n
        );
      }
      acceptAsClient(e) {
        let t = e[0];
        if (this._options.clientNoContextTakeover === !1 && t.client_no_context_takeover)
          throw Error(`Unexpected parameter "client_no_context_takeover"`);
        if (!t.client_max_window_bits)
          typeof this._options.clientMaxWindowBits == `number` &&
            (t.client_max_window_bits = this._options.clientMaxWindowBits);
        else if (
          this._options.clientMaxWindowBits === !1 ||
          (typeof this._options.clientMaxWindowBits == `number` &&
            t.client_max_window_bits > this._options.clientMaxWindowBits)
        )
          throw Error(`Unexpected or invalid parameter "client_max_window_bits"`);
        return t;
      }
      normalizeParams(e) {
        return (
          e.forEach((e) => {
            Object.keys(e).forEach((t) => {
              let n = e[t];
              if (n.length > 1) throw Error(`Parameter "${t}" must have only a single value`);
              if (((n = n[0]), t === `client_max_window_bits`)) {
                if (n !== !0) {
                  let e = +n;
                  if (!Number.isInteger(e) || e < 8 || e > 15)
                    throw TypeError(`Invalid value for parameter "${t}": ${n}`);
                  n = e;
                } else if (!this._isServer) throw TypeError(`Invalid value for parameter "${t}": ${n}`);
              } else if (t === `server_max_window_bits`) {
                let e = +n;
                if (!Number.isInteger(e) || e < 8 || e > 15)
                  throw TypeError(`Invalid value for parameter "${t}": ${n}`);
                n = e;
              } else if (t === `client_no_context_takeover` || t === `server_no_context_takeover`) {
                if (n !== !0) throw TypeError(`Invalid value for parameter "${t}": ${n}`);
              } else throw Error(`Unknown parameter "${t}"`);
              e[t] = n;
            });
          }),
          e
        );
      }
      decompress(e, t, n) {
        p.add((r) => {
          this._decompress(e, t, (e, t) => {
            (r(), n(e, t));
          });
        });
      }
      compress(e, t, n) {
        p.add((r) => {
          this._compress(e, t, (e, t) => {
            (r(), n(e, t));
          });
        });
      }
      _decompress(e, t, i) {
        let a = this._isServer ? `client` : `server`;
        if (!this._inflate) {
          let e = `${a}_max_window_bits`,
            t = typeof this.params[e] == `number` ? this.params[e] : n.Z_DEFAULT_WINDOWBITS;
          ((this._inflate = n.createInflateRaw({ ...this._options.zlibInflateOptions, windowBits: t })),
            (this._inflate[c] = this),
            (this._inflate[l] = 0),
            (this._inflate[d] = []),
            this._inflate.on(`error`, g),
            this._inflate.on(`data`, h));
        }
        ((this._inflate[u] = i),
          this._inflate.write(e),
          t && this._inflate.write(s),
          this._inflate.flush(() => {
            let e = this._inflate[f];
            if (e) {
              (this._inflate.close(), (this._inflate = null), i(e));
              return;
            }
            let n = r.concat(this._inflate[d], this._inflate[l]);
            (this._inflate._readableState.endEmitted
              ? (this._inflate.close(), (this._inflate = null))
              : ((this._inflate[l] = 0),
                (this._inflate[d] = []),
                t && this.params[`${a}_no_context_takeover`] && this._inflate.reset()),
              i(null, n));
          }));
      }
      _compress(e, t, i) {
        let a = this._isServer ? `server` : `client`;
        if (!this._deflate) {
          let e = `${a}_max_window_bits`,
            t = typeof this.params[e] == `number` ? this.params[e] : n.Z_DEFAULT_WINDOWBITS;
          ((this._deflate = n.createDeflateRaw({ ...this._options.zlibDeflateOptions, windowBits: t })),
            (this._deflate[l] = 0),
            (this._deflate[d] = []),
            this._deflate.on(`data`, m));
        }
        ((this._deflate[u] = i),
          this._deflate.write(e),
          this._deflate.flush(n.Z_SYNC_FLUSH, () => {
            if (!this._deflate) return;
            let e = r.concat(this._deflate[d], this._deflate[l]);
            (t && (e = new o(e.buffer, e.byteOffset, e.length - 4)),
              (this._deflate[u] = null),
              (this._deflate[l] = 0),
              (this._deflate[d] = []),
              t && this.params[`${a}_no_context_takeover`] && this._deflate.reset(),
              i(null, e));
          }));
      }
    };
    function m(e) {
      (this[d].push(e), (this[l] += e.length));
    }
    function h(e) {
      if (((this[l] += e.length), this[c]._maxPayload < 1 || this[l] <= this[c]._maxPayload)) {
        this[d].push(e);
        return;
      }
      ((this[f] = RangeError(`Max payload size exceeded`)),
        (this[f].code = `WS_ERR_UNSUPPORTED_MESSAGE_LENGTH`),
        (this[f][a] = 1009),
        this.removeListener(`data`, h),
        this.reset());
    }
    function g(e) {
      if (((this[c]._inflate = null), this[f])) {
        this[u](this[f]);
        return;
      }
      ((e[a] = 1007), this[u](e));
    }
  }),
  ko = e.t((e, t) => {
    function n(e) {
      let t = e.length,
        n = 0;
      for (; n < t;)
        if (!(e[n] & 128)) n++;
        else if ((e[n] & 224) == 192) {
          if (n + 1 === t || (e[n + 1] & 192) != 128 || (e[n] & 254) == 192) return !1;
          n += 2;
        } else if ((e[n] & 240) == 224) {
          if (
            n + 2 >= t ||
            (e[n + 1] & 192) != 128 ||
            (e[n + 2] & 192) != 128 ||
            (e[n] === 224 && (e[n + 1] & 224) == 128) ||
            (e[n] === 237 && (e[n + 1] & 224) == 160)
          )
            return !1;
          n += 3;
        } else if ((e[n] & 248) == 240) {
          if (
            n + 3 >= t ||
            (e[n + 1] & 192) != 128 ||
            (e[n + 2] & 192) != 128 ||
            (e[n + 3] & 192) != 128 ||
            (e[n] === 240 && (e[n + 1] & 240) == 128) ||
            (e[n] === 244 && e[n + 1] > 143) ||
            e[n] > 244
          )
            return !1;
          n += 4;
        } else return !1;
      return !0;
    }
    t.exports = n;
  }),
  Ao = e.t((e, t) => {
    try {
      t.exports = Co()(__dirname);
    } catch {
      t.exports = ko();
    }
  }),
  jo = e.t((e, t) => {
    var { isUtf8: n } = require("buffer"),
      { hasBlob: r } = $(),
      i = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
      ];
    function a(e) {
      return (e >= 1e3 && e <= 1014 && e !== 1004 && e !== 1005 && e !== 1006) || (e >= 3e3 && e <= 4999);
    }
    function o(e) {
      let t = e.length,
        n = 0;
      for (; n < t;)
        if (!(e[n] & 128)) n++;
        else if ((e[n] & 224) == 192) {
          if (n + 1 === t || (e[n + 1] & 192) != 128 || (e[n] & 254) == 192) return !1;
          n += 2;
        } else if ((e[n] & 240) == 224) {
          if (
            n + 2 >= t ||
            (e[n + 1] & 192) != 128 ||
            (e[n + 2] & 192) != 128 ||
            (e[n] === 224 && (e[n + 1] & 224) == 128) ||
            (e[n] === 237 && (e[n + 1] & 224) == 160)
          )
            return !1;
          n += 3;
        } else if ((e[n] & 248) == 240) {
          if (
            n + 3 >= t ||
            (e[n + 1] & 192) != 128 ||
            (e[n + 2] & 192) != 128 ||
            (e[n + 3] & 192) != 128 ||
            (e[n] === 240 && (e[n + 1] & 240) == 128) ||
            (e[n] === 244 && e[n + 1] > 143) ||
            e[n] > 244
          )
            return !1;
          n += 4;
        } else return !1;
      return !0;
    }
    function s(e) {
      return (
        r &&
        typeof e == `object` &&
        typeof e.arrayBuffer == `function` &&
        typeof e.type == `string` &&
        typeof e.stream == `function` &&
        (e[Symbol.toStringTag] === `Blob` || e[Symbol.toStringTag] === `File`)
      );
    }
    if (((t.exports = { isBlob: s, isValidStatusCode: a, isValidUTF8: o, tokenChars: i }), n))
      t.exports.isValidUTF8 = function (e) {
        return e.length < 24 ? o(e) : n(e);
      };
    else if (!process.env.WS_NO_UTF_8_VALIDATE)
      try {
        let e = Ao();
        t.exports.isValidUTF8 = function (t) {
          return t.length < 32 ? o(t) : e(t);
        };
      } catch {}
  }),
  Mo = e.t((e, t) => {
    var { Writable: n } = require("stream"),
      r = Oo(),
      { BINARY_TYPES: i, EMPTY_BUFFER: a, kStatusCode: o, kWebSocket: s } = $(),
      { concat: c, toArrayBuffer: l, unmask: u } = Eo(),
      { isValidStatusCode: d, isValidUTF8: f } = jo(),
      p = Buffer[Symbol.species],
      m = 0,
      h = 1,
      g = 2,
      _ = 3,
      v = 4,
      y = 5,
      b = 6;
    t.exports = class extends n {
      constructor(e = {}) {
        (super(),
          (this._allowSynchronousEvents = e.allowSynchronousEvents === void 0 || e.allowSynchronousEvents),
          (this._binaryType = e.binaryType || i[0]),
          (this._extensions = e.extensions || {}),
          (this._isServer = !!e.isServer),
          (this._maxBufferedChunks = e.maxBufferedChunks | 0),
          (this._maxFragments = e.maxFragments | 0),
          (this._maxPayload = e.maxPayload | 0),
          (this._skipUTF8Validation = !!e.skipUTF8Validation),
          (this[s] = void 0),
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
          (this._state = m));
      }
      _write(e, t, n) {
        if (this._opcode === 8 && this._state == m) return n();
        if (this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks) {
          n(
            this.createError(
              RangeError,
              `Too many buffered chunks`,
              !1,
              1008,
              `WS_ERR_TOO_MANY_BUFFERED_PARTS`,
            ),
          );
          return;
        }
        ((this._bufferedBytes += e.length), this._buffers.push(e), this.startLoop(n));
      }
      consume(e) {
        if (((this._bufferedBytes -= e), e === this._buffers[0].length)) return this._buffers.shift();
        if (e < this._buffers[0].length) {
          let t = this._buffers[0];
          return (
            (this._buffers[0] = new p(t.buffer, t.byteOffset + e, t.length - e)),
            new p(t.buffer, t.byteOffset, e)
          );
        }
        let t = Buffer.allocUnsafe(e);
        do {
          let n = this._buffers[0],
            r = t.length - e;
          (e >= n.length
            ? t.set(this._buffers.shift(), r)
            : (t.set(new Uint8Array(n.buffer, n.byteOffset, e), r),
              (this._buffers[0] = new p(n.buffer, n.byteOffset + e, n.length - e))),
            (e -= n.length));
        } while (e > 0);
        return t;
      }
      startLoop(e) {
        this._loop = !0;
        do
          switch (this._state) {
            case m:
              this.getInfo(e);
              break;
            case h:
              this.getPayloadLength16(e);
              break;
            case g:
              this.getPayloadLength64(e);
              break;
            case _:
              this.getMask();
              break;
            case v:
              this.getData(e);
              break;
            case y:
            case b:
              this._loop = !1;
              return;
          }
        while (this._loop);
        this._errored || e();
      }
      getInfo(e) {
        if (this._bufferedBytes < 2) {
          this._loop = !1;
          return;
        }
        let t = this.consume(2);
        if (t[0] & 48) {
          e(
            this.createError(
              RangeError,
              `RSV2 and RSV3 must be clear`,
              !0,
              1002,
              `WS_ERR_UNEXPECTED_RSV_2_3`,
            ),
          );
          return;
        }
        let n = (t[0] & 64) == 64;
        if (n && !this._extensions[r.extensionName]) {
          e(this.createError(RangeError, `RSV1 must be clear`, !0, 1002, `WS_ERR_UNEXPECTED_RSV_1`));
          return;
        }
        if (
          ((this._fin = (t[0] & 128) == 128),
          (this._opcode = t[0] & 15),
          (this._payloadLength = t[1] & 127),
          this._opcode === 0)
        ) {
          if (n) {
            e(this.createError(RangeError, `RSV1 must be clear`, !0, 1002, `WS_ERR_UNEXPECTED_RSV_1`));
            return;
          }
          if (!this._fragmented) {
            e(this.createError(RangeError, `invalid opcode 0`, !0, 1002, `WS_ERR_INVALID_OPCODE`));
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            e(
              this.createError(
                RangeError,
                `invalid opcode ${this._opcode}`,
                !0,
                1002,
                `WS_ERR_INVALID_OPCODE`,
              ),
            );
            return;
          }
          this._compressed = n;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            e(this.createError(RangeError, `FIN must be set`, !0, 1002, `WS_ERR_EXPECTED_FIN`));
            return;
          }
          if (n) {
            e(this.createError(RangeError, `RSV1 must be clear`, !0, 1002, `WS_ERR_UNEXPECTED_RSV_1`));
            return;
          }
          if (this._payloadLength > 125 || (this._opcode === 8 && this._payloadLength === 1)) {
            e(
              this.createError(
                RangeError,
                `invalid payload length ${this._payloadLength}`,
                !0,
                1002,
                `WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH`,
              ),
            );
            return;
          }
        } else {
          e(
            this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, `WS_ERR_INVALID_OPCODE`),
          );
          return;
        }
        if (
          (!this._fin && !this._fragmented && (this._fragmented = this._opcode),
          (this._masked = (t[1] & 128) == 128),
          this._isServer)
        ) {
          if (!this._masked) {
            e(this.createError(RangeError, `MASK must be set`, !0, 1002, `WS_ERR_EXPECTED_MASK`));
            return;
          }
        } else if (this._masked) {
          e(this.createError(RangeError, `MASK must be clear`, !0, 1002, `WS_ERR_UNEXPECTED_MASK`));
          return;
        }
        this._payloadLength === 126
          ? (this._state = h)
          : this._payloadLength === 127
            ? (this._state = g)
            : this.haveLength(e);
      }
      getPayloadLength16(e) {
        if (this._bufferedBytes < 2) {
          this._loop = !1;
          return;
        }
        ((this._payloadLength = this.consume(2).readUInt16BE(0)), this.haveLength(e));
      }
      getPayloadLength64(e) {
        if (this._bufferedBytes < 8) {
          this._loop = !1;
          return;
        }
        let t = this.consume(8),
          n = t.readUInt32BE(0);
        if (n > 2 ** 21 - 1) {
          e(
            this.createError(
              RangeError,
              `Unsupported WebSocket frame: payload length > 2^53 - 1`,
              !1,
              1009,
              `WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH`,
            ),
          );
          return;
        }
        ((this._payloadLength = n * 2 ** 32 + t.readUInt32BE(4)), this.haveLength(e));
      }
      haveLength(e) {
        if (
          this._payloadLength &&
          this._opcode < 8 &&
          ((this._totalPayloadLength += this._payloadLength),
          this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)
        ) {
          e(
            this.createError(
              RangeError,
              `Max payload size exceeded`,
              !1,
              1009,
              `WS_ERR_UNSUPPORTED_MESSAGE_LENGTH`,
            ),
          );
          return;
        }
        this._state = this._masked ? _ : v;
      }
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = !1;
          return;
        }
        ((this._mask = this.consume(4)), (this._state = v));
      }
      getData(e) {
        let t = a;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = !1;
            return;
          }
          ((t = this.consume(this._payloadLength)),
            this._masked &&
              (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0 &&
              u(t, this._mask));
        }
        if (this._opcode > 7) {
          this.controlMessage(t, e);
          return;
        }
        if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
          e(
            this.createError(
              RangeError,
              `Too many message fragments`,
              !1,
              1008,
              `WS_ERR_TOO_MANY_BUFFERED_PARTS`,
            ),
          );
          return;
        }
        if (this._compressed) {
          ((this._state = y), this.decompress(t, e));
          return;
        }
        (t.length && ((this._messageLength = this._totalPayloadLength), this._fragments.push(t)),
          this.dataMessage(e));
      }
      decompress(e, t) {
        this._extensions[r.extensionName].decompress(e, this._fin, (e, n) => {
          if (e) return t(e);
          if (n.length) {
            if (
              ((this._messageLength += n.length),
              this._messageLength > this._maxPayload && this._maxPayload > 0)
            ) {
              t(
                this.createError(
                  RangeError,
                  `Max payload size exceeded`,
                  !1,
                  1009,
                  `WS_ERR_UNSUPPORTED_MESSAGE_LENGTH`,
                ),
              );
              return;
            }
            this._fragments.push(n);
          }
          (this.dataMessage(t), this._state === m && this.startLoop(t));
        });
      }
      dataMessage(e) {
        if (!this._fin) {
          this._state = m;
          return;
        }
        let t = this._messageLength,
          n = this._fragments;
        if (
          ((this._totalPayloadLength = 0),
          (this._messageLength = 0),
          (this._fragmented = 0),
          (this._numFragments = 0),
          (this._fragments = []),
          this._opcode === 2)
        ) {
          let r;
          ((r =
            this._binaryType === `nodebuffer`
              ? c(n, t)
              : this._binaryType === `arraybuffer`
                ? l(c(n, t))
                : this._binaryType === `blob`
                  ? new Blob(n)
                  : n),
            this._allowSynchronousEvents
              ? (this.emit(`message`, r, !0), (this._state = m))
              : ((this._state = b),
                setImmediate(() => {
                  (this.emit(`message`, r, !0), (this._state = m), this.startLoop(e));
                })));
        } else {
          let r = c(n, t);
          if (!this._skipUTF8Validation && !f(r)) {
            e(this.createError(Error, `invalid UTF-8 sequence`, !0, 1007, `WS_ERR_INVALID_UTF8`));
            return;
          }
          this._state === y || this._allowSynchronousEvents
            ? (this.emit(`message`, r, !1), (this._state = m))
            : ((this._state = b),
              setImmediate(() => {
                (this.emit(`message`, r, !1), (this._state = m), this.startLoop(e));
              }));
        }
      }
      controlMessage(e, t) {
        if (this._opcode === 8) {
          if (e.length === 0) ((this._loop = !1), this.emit(`conclude`, 1005, a), this.end());
          else {
            let n = e.readUInt16BE(0);
            if (!d(n)) {
              t(
                this.createError(
                  RangeError,
                  `invalid status code ${n}`,
                  !0,
                  1002,
                  `WS_ERR_INVALID_CLOSE_CODE`,
                ),
              );
              return;
            }
            let r = new p(e.buffer, e.byteOffset + 2, e.length - 2);
            if (!this._skipUTF8Validation && !f(r)) {
              t(this.createError(Error, `invalid UTF-8 sequence`, !0, 1007, `WS_ERR_INVALID_UTF8`));
              return;
            }
            ((this._loop = !1), this.emit(`conclude`, n, r), this.end());
          }
          this._state = m;
          return;
        }
        this._allowSynchronousEvents
          ? (this.emit(this._opcode === 9 ? `ping` : `pong`, e), (this._state = m))
          : ((this._state = b),
            setImmediate(() => {
              (this.emit(this._opcode === 9 ? `ping` : `pong`, e), (this._state = m), this.startLoop(t));
            }));
      }
      createError(e, t, n, r, i) {
        ((this._loop = !1), (this._errored = !0));
        let a = new e(n ? `Invalid WebSocket frame: ${t}` : t);
        return (Error.captureStackTrace(a, this.createError), (a.code = i), (a[o] = r), a);
      }
    };
  }),
  No = e.t((e, t) => {
    var { Duplex: n } = require("stream"),
      { randomFillSync: r } = require("crypto"),
      {
        types: { isUint8Array: i },
      } = require("util"),
      a = Oo(),
      { EMPTY_BUFFER: o, kWebSocket: s, NOOP: c } = $(),
      { isBlob: l, isValidStatusCode: u } = jo(),
      { mask: d, toBuffer: f } = Eo(),
      p = Symbol(`kByteLength`),
      m = Buffer.alloc(4),
      h = 8192,
      g,
      _ = h,
      v = 0,
      y = 1,
      b = 2;
    t.exports = class e {
      constructor(e, t, n) {
        ((this._extensions = t || {}),
          n && ((this._generateMask = n), (this._maskBuffer = Buffer.alloc(4))),
          (this._socket = e),
          (this._firstFragment = !0),
          (this._compress = !1),
          (this._bufferedBytes = 0),
          (this._queue = []),
          (this._state = v),
          (this.onerror = c),
          (this[s] = void 0));
      }
      static frame(e, t) {
        let n,
          i = !1,
          a = 2,
          o = !1;
        t.mask &&
          ((n = t.maskBuffer || m),
          t.generateMask
            ? t.generateMask(n)
            : (_ === h && (g === void 0 && (g = Buffer.alloc(h)), r(g, 0, h), (_ = 0)),
              (n[0] = g[_++]),
              (n[1] = g[_++]),
              (n[2] = g[_++]),
              (n[3] = g[_++])),
          (o = (n[0] | n[1] | n[2] | n[3]) === 0),
          (a = 6));
        let s;
        typeof e == `string`
          ? (!t.mask || o) && t[p] !== void 0
            ? (s = t[p])
            : ((e = Buffer.from(e)), (s = e.length))
          : ((s = e.length), (i = t.mask && t.readOnly && !o));
        let c = s;
        s >= 65536 ? ((a += 8), (c = 127)) : s > 125 && ((a += 2), (c = 126));
        let l = Buffer.allocUnsafe(i ? s + a : a);
        return (
          (l[0] = t.fin ? t.opcode | 128 : t.opcode),
          t.rsv1 && (l[0] |= 64),
          (l[1] = c),
          c === 126 ? l.writeUInt16BE(s, 2) : c === 127 && ((l[2] = l[3] = 0), l.writeUIntBE(s, 4, 6)),
          !t.mask ||
          ((l[1] |= 128), (l[a - 4] = n[0]), (l[a - 3] = n[1]), (l[a - 2] = n[2]), (l[a - 1] = n[3]), o)
            ? [l, e]
            : i
              ? (d(e, n, l, a, s), [l])
              : (d(e, n, e, 0, s), [l, e])
        );
      }
      close(t, n, r, a) {
        let s;
        if (t === void 0) s = o;
        else if (typeof t != `number` || !u(t))
          throw TypeError(`First argument must be a valid error code number`);
        else if (n === void 0 || !n.length) ((s = Buffer.allocUnsafe(2)), s.writeUInt16BE(t, 0));
        else {
          let e = Buffer.byteLength(n);
          if (e > 123) throw RangeError(`The message must not be greater than 123 bytes`);
          if (((s = Buffer.allocUnsafe(2 + e)), s.writeUInt16BE(t, 0), typeof n == `string`)) s.write(n, 2);
          else if (i(n)) s.set(n, 2);
          else throw TypeError(`Second argument must be a string or a Uint8Array`);
        }
        let c = {
          [p]: s.length,
          fin: !0,
          generateMask: this._generateMask,
          mask: r,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: !1,
          rsv1: !1,
        };
        this._state === v ? this.sendFrame(e.frame(s, c), a) : this.enqueue([this.dispatch, s, !1, c, a]);
      }
      ping(t, n, r) {
        let i, a;
        if (
          (typeof t == `string`
            ? ((i = Buffer.byteLength(t)), (a = !1))
            : l(t)
              ? ((i = t.size), (a = !1))
              : ((t = f(t)), (i = t.length), (a = f.readOnly)),
          i > 125)
        )
          throw RangeError(`The data size must not be greater than 125 bytes`);
        let o = {
          [p]: i,
          fin: !0,
          generateMask: this._generateMask,
          mask: n,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly: a,
          rsv1: !1,
        };
        l(t)
          ? this._state === v
            ? this.getBlobData(t, !1, o, r)
            : this.enqueue([this.getBlobData, t, !1, o, r])
          : this._state === v
            ? this.sendFrame(e.frame(t, o), r)
            : this.enqueue([this.dispatch, t, !1, o, r]);
      }
      pong(t, n, r) {
        let i, a;
        if (
          (typeof t == `string`
            ? ((i = Buffer.byteLength(t)), (a = !1))
            : l(t)
              ? ((i = t.size), (a = !1))
              : ((t = f(t)), (i = t.length), (a = f.readOnly)),
          i > 125)
        )
          throw RangeError(`The data size must not be greater than 125 bytes`);
        let o = {
          [p]: i,
          fin: !0,
          generateMask: this._generateMask,
          mask: n,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly: a,
          rsv1: !1,
        };
        l(t)
          ? this._state === v
            ? this.getBlobData(t, !1, o, r)
            : this.enqueue([this.getBlobData, t, !1, o, r])
          : this._state === v
            ? this.sendFrame(e.frame(t, o), r)
            : this.enqueue([this.dispatch, t, !1, o, r]);
      }
      send(e, t, n) {
        let r = this._extensions[a.extensionName],
          i = t.binary ? 2 : 1,
          o = t.compress,
          s,
          c;
        (typeof e == `string`
          ? ((s = Buffer.byteLength(e)), (c = !1))
          : l(e)
            ? ((s = e.size), (c = !1))
            : ((e = f(e)), (s = e.length), (c = f.readOnly)),
          this._firstFragment
            ? ((this._firstFragment = !1),
              o &&
                r &&
                r.params[r._isServer ? `server_no_context_takeover` : `client_no_context_takeover`] &&
                (o = s >= r._threshold),
              (this._compress = o))
            : ((o = !1), (i = 0)),
          t.fin && (this._firstFragment = !0));
        let u = {
          [p]: s,
          fin: t.fin,
          generateMask: this._generateMask,
          mask: t.mask,
          maskBuffer: this._maskBuffer,
          opcode: i,
          readOnly: c,
          rsv1: o,
        };
        l(e)
          ? this._state === v
            ? this.getBlobData(e, this._compress, u, n)
            : this.enqueue([this.getBlobData, e, this._compress, u, n])
          : this._state === v
            ? this.dispatch(e, this._compress, u, n)
            : this.enqueue([this.dispatch, e, this._compress, u, n]);
      }
      getBlobData(t, n, r, i) {
        ((this._bufferedBytes += r[p]),
          (this._state = b),
          t
            .arrayBuffer()
            .then((t) => {
              if (this._socket.destroyed) {
                let e = Error(`The socket was closed while the blob was being read`);
                process.nextTick(x, this, e, i);
                return;
              }
              this._bufferedBytes -= r[p];
              let a = f(t);
              n
                ? this.dispatch(a, n, r, i)
                : ((this._state = v), this.sendFrame(e.frame(a, r), i), this.dequeue());
            })
            .catch((e) => {
              process.nextTick(S, this, e, i);
            }));
      }
      dispatch(t, n, r, i) {
        if (!n) {
          this.sendFrame(e.frame(t, r), i);
          return;
        }
        let o = this._extensions[a.extensionName];
        ((this._bufferedBytes += r[p]),
          (this._state = y),
          o.compress(t, r.fin, (t, n) => {
            if (this._socket.destroyed) {
              let e = Error(`The socket was closed while data was being compressed`);
              x(this, e, i);
              return;
            }
            ((this._bufferedBytes -= r[p]),
              (this._state = v),
              (r.readOnly = !1),
              this.sendFrame(e.frame(n, r), i),
              this.dequeue());
          }));
      }
      dequeue() {
        for (; this._state === v && this._queue.length;) {
          let e = this._queue.shift();
          ((this._bufferedBytes -= e[3][p]), Reflect.apply(e[0], this, e.slice(1)));
        }
      }
      enqueue(e) {
        ((this._bufferedBytes += e[3][p]), this._queue.push(e));
      }
      sendFrame(e, t) {
        e.length === 2
          ? (this._socket.cork(),
            this._socket.write(e[0]),
            this._socket.write(e[1], t),
            this._socket.uncork())
          : this._socket.write(e[0], t);
      }
    };
    function x(e, t, n) {
      typeof n == `function` && n(t);
      for (let n = 0; n < e._queue.length; n++) {
        let r = e._queue[n],
          i = r[r.length - 1];
        typeof i == `function` && i(t);
      }
    }
    function S(e, t, n) {
      (x(e, t, n), e.onerror(t));
    }
  }),
  Po = e.t((e, t) => {
    var { kForOnEventAttribute: n, kListener: r } = $(),
      i = Symbol(`kCode`),
      a = Symbol(`kData`),
      o = Symbol(`kError`),
      s = Symbol(`kMessage`),
      c = Symbol(`kReason`),
      l = Symbol(`kTarget`),
      u = Symbol(`kType`),
      d = Symbol(`kWasClean`),
      f = class {
        constructor(e) {
          ((this[l] = null), (this[u] = e));
        }
        get target() {
          return this[l];
        }
        get type() {
          return this[u];
        }
      };
    (Object.defineProperty(f.prototype, "target", { enumerable: !0 }),
      Object.defineProperty(f.prototype, "type", { enumerable: !0 }));
    var p = class extends f {
      constructor(e, t = {}) {
        (super(e),
          (this[i] = t.code === void 0 ? 0 : t.code),
          (this[c] = t.reason === void 0 ? `` : t.reason),
          (this[d] = t.wasClean !== void 0 && t.wasClean));
      }
      get code() {
        return this[i];
      }
      get reason() {
        return this[c];
      }
      get wasClean() {
        return this[d];
      }
    };
    (Object.defineProperty(p.prototype, "code", { enumerable: !0 }),
      Object.defineProperty(p.prototype, "reason", { enumerable: !0 }),
      Object.defineProperty(p.prototype, "wasClean", { enumerable: !0 }));
    var m = class extends f {
      constructor(e, t = {}) {
        (super(e),
          (this[o] = t.error === void 0 ? null : t.error),
          (this[s] = t.message === void 0 ? `` : t.message));
      }
      get error() {
        return this[o];
      }
      get message() {
        return this[s];
      }
    };
    (Object.defineProperty(m.prototype, "error", { enumerable: !0 }),
      Object.defineProperty(m.prototype, "message", { enumerable: !0 }));
    var h = class extends f {
      constructor(e, t = {}) {
        (super(e), (this[a] = t.data === void 0 ? null : t.data));
      }
      get data() {
        return this[a];
      }
    };
    (Object.defineProperty(h.prototype, "data", { enumerable: !0 }),
      (t.exports = {
        CloseEvent: p,
        ErrorEvent: m,
        Event: f,
        EventTarget: {
          addEventListener(e, t, i = {}) {
            for (let a of this.listeners(e)) if (!i[n] && a[r] === t && !a[n]) return;
            let a;
            if (e === `message`)
              a = function (e, n) {
                let r = new h(`message`, { data: n ? e : e.toString() });
                ((r[l] = this), g(t, this, r));
              };
            else if (e === `close`)
              a = function (e, n) {
                let r = new p(`close`, {
                  code: e,
                  reason: n.toString(),
                  wasClean: this._closeFrameReceived && this._closeFrameSent,
                });
                ((r[l] = this), g(t, this, r));
              };
            else if (e === `error`)
              a = function (e) {
                let n = new m(`error`, { error: e, message: e.message });
                ((n[l] = this), g(t, this, n));
              };
            else if (e === `open`)
              a = function () {
                let e = new f(`open`);
                ((e[l] = this), g(t, this, e));
              };
            else return;
            ((a[n] = !!i[n]), (a[r] = t), i.once ? this.once(e, a) : this.on(e, a));
          },
          removeEventListener(e, t) {
            for (let i of this.listeners(e))
              if (i[r] === t && !i[n]) {
                this.removeListener(e, i);
                break;
              }
          },
        },
        MessageEvent: h,
      }));
    function g(e, t, n) {
      typeof e == `object` && e.handleEvent ? e.handleEvent.call(e, n) : e.call(t, n);
    }
  }),
  Fo = e.t((e, t) => {
    var { tokenChars: n } = jo();
    function r(e, t, n) {
      e[t] === void 0 ? (e[t] = [n]) : e[t].push(n);
    }
    function i(e) {
      let t = Object.create(null),
        i = Object.create(null),
        a = !1,
        o = !1,
        s = !1,
        c,
        l,
        u = -1,
        d = -1,
        f = -1,
        p = 0;
      for (; p < e.length; p++)
        if (((d = e.charCodeAt(p)), c === void 0)) {
          if (f === -1 && n[d] === 1) u === -1 && (u = p);
          else if (p !== 0 && (d === 32 || d === 9)) f === -1 && u !== -1 && (f = p);
          else if (d === 59 || d === 44) {
            if (u === -1) throw SyntaxError(`Unexpected character at index ${p}`);
            f === -1 && (f = p);
            let n = e.slice(u, f);
            (d === 44 ? (r(t, n, i), (i = Object.create(null))) : (c = n), (u = f = -1));
          } else throw SyntaxError(`Unexpected character at index ${p}`);
        } else if (l === void 0) {
          if (f === -1 && n[d] === 1) u === -1 && (u = p);
          else if (d === 32 || d === 9) f === -1 && u !== -1 && (f = p);
          else if (d === 59 || d === 44) {
            if (u === -1) throw SyntaxError(`Unexpected character at index ${p}`);
            (f === -1 && (f = p),
              r(i, e.slice(u, f), !0),
              d === 44 && (r(t, c, i), (i = Object.create(null)), (c = void 0)),
              (u = f = -1));
          } else if (d === 61 && u !== -1 && f === -1) ((l = e.slice(u, p)), (u = f = -1));
          else throw SyntaxError(`Unexpected character at index ${p}`);
        } else if (o) {
          if (n[d] !== 1) throw SyntaxError(`Unexpected character at index ${p}`);
          (u === -1 ? (u = p) : (a ||= !0), (o = !1));
        } else if (s) {
          if (n[d] === 1) u === -1 && (u = p);
          else if (d === 34 && u !== -1) ((s = !1), (f = p));
          else if (d === 92) o = !0;
          else throw SyntaxError(`Unexpected character at index ${p}`);
        } else if (d === 34 && e.charCodeAt(p - 1) === 61) s = !0;
        else if (f === -1 && n[d] === 1) u === -1 && (u = p);
        else if (u !== -1 && (d === 32 || d === 9)) f === -1 && (f = p);
        else if (d === 59 || d === 44) {
          if (u === -1) throw SyntaxError(`Unexpected character at index ${p}`);
          f === -1 && (f = p);
          let n = e.slice(u, f);
          ((a &&= ((n = n.replace(/\\/g, ``)), !1)),
            r(i, l, n),
            d === 44 && (r(t, c, i), (i = Object.create(null)), (c = void 0)),
            (l = void 0),
            (u = f = -1));
        } else throw SyntaxError(`Unexpected character at index ${p}`);
      if (u === -1 || s || d === 32 || d === 9) throw SyntaxError(`Unexpected end of input`);
      f === -1 && (f = p);
      let m = e.slice(u, f);
      return (
        c === void 0
          ? r(t, m, i)
          : (l === void 0 ? r(i, m, !0) : a ? r(i, l, m.replace(/\\/g, ``)) : r(i, l, m), r(t, c, i)),
        t
      );
    }
    function a(e) {
      return Object.keys(e)
        .map((t) => {
          let n = e[t];
          return (
            Array.isArray(n) || (n = [n]),
            n
              .map((e) =>
                [t]
                  .concat(
                    Object.keys(e).map((t) => {
                      let n = e[t];
                      return (
                        Array.isArray(n) || (n = [n]),
                        n.map((e) => (e === !0 ? t : `${t}=${e}`)).join(`; `)
                      );
                    }),
                  )
                  .join(`; `),
              )
              .join(`, `)
          );
        })
        .join(`, `);
    }
    t.exports = { format: a, parse: i };
  }),
  Io = e.t((e, t) => {
    var n = require("events"),
      r = require("https"),
      i = require("http"),
      a = require("net"),
      o = require("tls"),
      { randomBytes: s, createHash: c } = require("crypto"),
      { Duplex: l, Readable: u } = require("stream"),
      { URL: d } = require("url"),
      f = Oo(),
      p = Mo(),
      m = No(),
      { isBlob: h } = jo(),
      {
        BINARY_TYPES: g,
        CLOSE_TIMEOUT: _,
        EMPTY_BUFFER: v,
        GUID: y,
        kForOnEventAttribute: b,
        kListener: x,
        kStatusCode: S,
        kWebSocket: C,
        NOOP: w,
      } = $(),
      {
        EventTarget: { addEventListener: T, removeEventListener: E },
      } = Po(),
      { format: D, parse: O } = Fo(),
      { toBuffer: k } = Eo(),
      A = Symbol(`kAborted`),
      j = [8, 13],
      M = [`CONNECTING`, `OPEN`, `CLOSING`, `CLOSED`],
      N = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/,
      P = class e extends n {
        constructor(t, n, r) {
          (super(),
            (this._binaryType = g[0]),
            (this._closeCode = 1006),
            (this._closeFrameReceived = !1),
            (this._closeFrameSent = !1),
            (this._closeMessage = v),
            (this._closeTimer = null),
            (this._errorEmitted = !1),
            (this._extensions = {}),
            (this._paused = !1),
            (this._protocol = ``),
            (this._readyState = e.CONNECTING),
            (this._receiver = null),
            (this._sender = null),
            (this._socket = null),
            t === null
              ? ((this._autoPong = r.autoPong), (this._closeTimeout = r.closeTimeout), (this._isServer = !0))
              : ((this._bufferedAmount = 0),
                (this._isServer = !1),
                (this._redirects = 0),
                n === void 0
                  ? (n = [])
                  : Array.isArray(n) || (typeof n == `object` && n ? ((r = n), (n = [])) : (n = [n])),
                F(this, t, n, r)));
        }
        get binaryType() {
          return this._binaryType;
        }
        set binaryType(e) {
          g.includes(e) && ((this._binaryType = e), this._receiver && (this._receiver._binaryType = e));
        }
        get bufferedAmount() {
          return this._socket
            ? this._socket._writableState.length + this._sender._bufferedBytes
            : this._bufferedAmount;
        }
        get extensions() {
          return Object.keys(this._extensions).join();
        }
        get isPaused() {
          return this._paused;
        }
        get onclose() {
          return null;
        }
        get onerror() {
          return null;
        }
        get onopen() {
          return null;
        }
        get onmessage() {
          return null;
        }
        get protocol() {
          return this._protocol;
        }
        get readyState() {
          return this._readyState;
        }
        get url() {
          return this._url;
        }
        setSocket(t, n, r) {
          let i = new p({
              allowSynchronousEvents: r.allowSynchronousEvents,
              binaryType: this.binaryType,
              extensions: this._extensions,
              isServer: this._isServer,
              maxBufferedChunks: r.maxBufferedChunks,
              maxFragments: r.maxFragments,
              maxPayload: r.maxPayload,
              skipUTF8Validation: r.skipUTF8Validation,
            }),
            a = new m(t, this._extensions, r.generateMask);
          ((this._receiver = i),
            (this._sender = a),
            (this._socket = t),
            (i[C] = this),
            (a[C] = this),
            (t[C] = this),
            i.on(`conclude`, re),
            i.on(`drain`, ie),
            i.on(`error`, ae),
            i.on(`message`, se),
            i.on(`ping`, ce),
            i.on(`pong`, le),
            (a.onerror = de),
            t.setTimeout && t.setTimeout(0),
            t.setNoDelay && t.setNoDelay(),
            n.length > 0 && t.unshift(n),
            t.on(`close`, pe),
            t.on(`data`, me),
            t.on(`end`, he),
            t.on(`error`, R),
            (this._readyState = e.OPEN),
            this.emit(`open`));
        }
        emitClose() {
          if (!this._socket) {
            ((this._readyState = e.CLOSED), this.emit(`close`, this._closeCode, this._closeMessage));
            return;
          }
          (this._extensions[f.extensionName] && this._extensions[f.extensionName].cleanup(),
            this._receiver.removeAllListeners(),
            (this._readyState = e.CLOSED),
            this.emit(`close`, this._closeCode, this._closeMessage));
        }
        close(t, n) {
          if (this.readyState !== e.CLOSED) {
            if (this.readyState === e.CONNECTING) {
              L(this, this._req, `WebSocket was closed before the connection was established`);
              return;
            }
            if (this.readyState === e.CLOSING) {
              this._closeFrameSent &&
                (this._closeFrameReceived || this._receiver._writableState.errorEmitted) &&
                this._socket.end();
              return;
            }
            ((this._readyState = e.CLOSING),
              this._sender.close(t, n, !this._isServer, (e) => {
                e ||
                  ((this._closeFrameSent = !0),
                  (this._closeFrameReceived || this._receiver._writableState.errorEmitted) &&
                    this._socket.end());
              }),
              fe(this));
          }
        }
        pause() {
          this.readyState !== e.CONNECTING &&
            this.readyState !== e.CLOSED &&
            ((this._paused = !0), this._socket.pause());
        }
        ping(t, n, r) {
          if (this.readyState === e.CONNECTING)
            throw Error(`WebSocket is not open: readyState 0 (CONNECTING)`);
          if (
            (typeof t == `function`
              ? ((r = t), (t = n = void 0))
              : typeof n == `function` && ((r = n), (n = void 0)),
            typeof t == `number` && (t = t.toString()),
            this.readyState !== e.OPEN)
          ) {
            ne(this, t, r);
            return;
          }
          (n === void 0 && (n = !this._isServer), this._sender.ping(t || v, n, r));
        }
        pong(t, n, r) {
          if (this.readyState === e.CONNECTING)
            throw Error(`WebSocket is not open: readyState 0 (CONNECTING)`);
          if (
            (typeof t == `function`
              ? ((r = t), (t = n = void 0))
              : typeof n == `function` && ((r = n), (n = void 0)),
            typeof t == `number` && (t = t.toString()),
            this.readyState !== e.OPEN)
          ) {
            ne(this, t, r);
            return;
          }
          (n === void 0 && (n = !this._isServer), this._sender.pong(t || v, n, r));
        }
        resume() {
          this.readyState !== e.CONNECTING &&
            this.readyState !== e.CLOSED &&
            ((this._paused = !1), this._receiver._writableState.needDrain || this._socket.resume());
        }
        send(t, n, r) {
          if (this.readyState === e.CONNECTING)
            throw Error(`WebSocket is not open: readyState 0 (CONNECTING)`);
          if (
            (typeof n == `function` && ((r = n), (n = {})),
            typeof t == `number` && (t = t.toString()),
            this.readyState !== e.OPEN)
          ) {
            ne(this, t, r);
            return;
          }
          let i = { binary: typeof t != `string`, mask: !this._isServer, compress: !0, fin: !0, ...n };
          (this._extensions[f.extensionName] || (i.compress = !1), this._sender.send(t || v, i, r));
        }
        terminate() {
          if (this.readyState !== e.CLOSED) {
            if (this.readyState === e.CONNECTING) {
              L(this, this._req, `WebSocket was closed before the connection was established`);
              return;
            }
            this._socket && ((this._readyState = e.CLOSING), this._socket.destroy());
          }
        }
      };
    (Object.defineProperty(P, "CONNECTING", { enumerable: !0, value: M.indexOf(`CONNECTING`) }),
      Object.defineProperty(P.prototype, "CONNECTING", { enumerable: !0, value: M.indexOf(`CONNECTING`) }),
      Object.defineProperty(P, "OPEN", { enumerable: !0, value: M.indexOf(`OPEN`) }),
      Object.defineProperty(P.prototype, "OPEN", { enumerable: !0, value: M.indexOf(`OPEN`) }),
      Object.defineProperty(P, "CLOSING", { enumerable: !0, value: M.indexOf(`CLOSING`) }),
      Object.defineProperty(P.prototype, "CLOSING", { enumerable: !0, value: M.indexOf(`CLOSING`) }),
      Object.defineProperty(P, "CLOSED", { enumerable: !0, value: M.indexOf(`CLOSED`) }),
      Object.defineProperty(P.prototype, "CLOSED", { enumerable: !0, value: M.indexOf(`CLOSED`) }),
      [`binaryType`, `bufferedAmount`, `extensions`, `isPaused`, `protocol`, `readyState`, `url`].forEach(
        (e) => {
          Object.defineProperty(P.prototype, e, { enumerable: !0 });
        },
      ),
      [`open`, `error`, `close`, `message`].forEach((e) => {
        Object.defineProperty(P.prototype, `on${e}`, {
          enumerable: !0,
          get() {
            for (let t of this.listeners(e)) if (t[b]) return t[x];
            return null;
          },
          set(t) {
            for (let t of this.listeners(e))
              if (t[b]) {
                this.removeListener(e, t);
                break;
              }
            typeof t == `function` && this.addEventListener(e, t, { [b]: !0 });
          },
        });
      }),
      (P.prototype.addEventListener = T),
      (P.prototype.removeEventListener = E),
      (t.exports = P));
    function F(e, t, n, a) {
      let o = {
        allowSynchronousEvents: !0,
        autoPong: !0,
        closeTimeout: _,
        protocolVersion: j[1],
        maxBufferedChunks: 262144,
        maxFragments: 16384,
        maxPayload: 104857600,
        skipUTF8Validation: !1,
        perMessageDeflate: !0,
        followRedirects: !1,
        maxRedirects: 10,
        ...a,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: `GET`,
        host: void 0,
        path: void 0,
        port: void 0,
      };
      if (((e._autoPong = o.autoPong), (e._closeTimeout = o.closeTimeout), !j.includes(o.protocolVersion)))
        throw RangeError(
          `Unsupported protocol version: ${o.protocolVersion} (supported versions: ${j.join(`, `)})`,
        );
      let l;
      if (t instanceof d) l = t;
      else
        try {
          l = new d(t);
        } catch {
          throw SyntaxError(`Invalid URL: ${t}`);
        }
      (l.protocol === `http:` ? (l.protocol = `ws:`) : l.protocol === `https:` && (l.protocol = `wss:`),
        (e._url = l.href));
      let u = l.protocol === `wss:`,
        p = l.protocol === `ws+unix:`,
        m;
      if (
        (l.protocol !== `ws:` && !u && !p
          ? (m = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`)
          : p && !l.pathname
            ? (m = `The URL's pathname is empty`)
            : l.hash && (m = `The URL contains a fragment identifier`),
        m)
      ) {
        let t = SyntaxError(m);
        if (e._redirects === 0) throw t;
        I(e, t);
        return;
      }
      let h = u ? 443 : 80,
        g = s(16).toString(`base64`),
        v = u ? r.request : i.request,
        b = new Set(),
        x;
      if (
        ((o.createConnection = o.createConnection || (u ? te : ee)),
        (o.defaultPort = o.defaultPort || h),
        (o.port = l.port || h),
        (o.host = l.hostname.startsWith(`[`) ? l.hostname.slice(1, -1) : l.hostname),
        (o.headers = {
          ...o.headers,
          "Sec-WebSocket-Version": o.protocolVersion,
          "Sec-WebSocket-Key": g,
          Connection: `Upgrade`,
          Upgrade: `websocket`,
        }),
        (o.path = l.pathname + l.search),
        (o.timeout = o.handshakeTimeout),
        o.perMessageDeflate &&
          ((x = new f({ ...o.perMessageDeflate, isServer: !1, maxPayload: o.maxPayload })),
          (o.headers[`Sec-WebSocket-Extensions`] = D({ [f.extensionName]: x.offer() }))),
        n.length)
      ) {
        for (let e of n) {
          if (typeof e != `string` || !N.test(e) || b.has(e))
            throw SyntaxError(`An invalid or duplicated subprotocol was specified`);
          b.add(e);
        }
        o.headers[`Sec-WebSocket-Protocol`] = n.join(`,`);
      }
      if (
        (o.origin &&
          (o.protocolVersion < 13
            ? (o.headers[`Sec-WebSocket-Origin`] = o.origin)
            : (o.headers.Origin = o.origin)),
        (l.username || l.password) && (o.auth = `${l.username}:${l.password}`),
        p)
      ) {
        let e = o.path.split(`:`);
        ((o.socketPath = e[0]), (o.path = e[1]));
      }
      let S;
      if (o.followRedirects) {
        if (e._redirects === 0) {
          ((e._originalIpc = p),
            (e._originalSecure = u),
            (e._originalHostOrSocketPath = p ? o.socketPath : l.host));
          let t = a && a.headers;
          if (((a = { ...a, headers: {} }), t))
            for (let [e, n] of Object.entries(t)) a.headers[e.toLowerCase()] = n;
        } else if (e.listenerCount(`redirect`) === 0) {
          let t = p
            ? e._originalIpc
              ? o.socketPath === e._originalHostOrSocketPath
              : !1
            : !e._originalIpc && l.host === e._originalHostOrSocketPath;
          (!t || (e._originalSecure && !u)) &&
            (delete o.headers.authorization,
            delete o.headers.cookie,
            t || delete o.headers.host,
            (o.auth = void 0));
        }
        (o.auth &&
          !a.headers.authorization &&
          (a.headers.authorization = `Basic ` + Buffer.from(o.auth).toString(`base64`)),
          (S = e._req = v(o)),
          e._redirects && e.emit(`redirect`, e.url, S));
      } else S = e._req = v(o);
      (o.timeout &&
        S.on(`timeout`, () => {
          L(e, S, `Opening handshake has timed out`);
        }),
        S.on(`error`, (t) => {
          S === null || S[A] || ((S = e._req = null), I(e, t));
        }),
        S.on(`response`, (r) => {
          let i = r.headers.location,
            s = r.statusCode;
          if (i && o.followRedirects && s >= 300 && s < 400) {
            if (++e._redirects > o.maxRedirects) {
              L(e, S, `Maximum redirects exceeded`);
              return;
            }
            S.abort();
            let r;
            try {
              r = new d(i, t);
            } catch {
              I(e, SyntaxError(`Invalid URL: ${i}`));
              return;
            }
            F(e, r, n, a);
          } else
            e.emit(`unexpected-response`, S, r) || L(e, S, `Unexpected server response: ${r.statusCode}`);
        }),
        S.on(`upgrade`, (t, n, r) => {
          if ((e.emit(`upgrade`, t), e.readyState !== P.CONNECTING)) return;
          S = e._req = null;
          let i = t.headers.upgrade;
          if (i === void 0 || i.toLowerCase() !== `websocket`) {
            L(e, n, `Invalid Upgrade header`);
            return;
          }
          let a = c(`sha1`)
            .update(g + y)
            .digest(`base64`);
          if (t.headers[`sec-websocket-accept`] !== a) {
            L(e, n, `Invalid Sec-WebSocket-Accept header`);
            return;
          }
          let s = t.headers[`sec-websocket-protocol`],
            l;
          if (
            (s === void 0
              ? b.size && (l = `Server sent no subprotocol`)
              : b.size
                ? b.has(s) || (l = `Server sent an invalid subprotocol`)
                : (l = `Server sent a subprotocol but none was requested`),
            l)
          ) {
            L(e, n, l);
            return;
          }
          s && (e._protocol = s);
          let u = t.headers[`sec-websocket-extensions`];
          if (u !== void 0) {
            if (!x) {
              L(e, n, `Server sent a Sec-WebSocket-Extensions header but no extension was requested`);
              return;
            }
            let t;
            try {
              t = O(u);
            } catch {
              L(e, n, `Invalid Sec-WebSocket-Extensions header`);
              return;
            }
            let r = Object.keys(t);
            if (r.length !== 1 || r[0] !== f.extensionName) {
              L(e, n, `Server indicated an extension that was not requested`);
              return;
            }
            try {
              x.accept(t[f.extensionName]);
            } catch {
              L(e, n, `Invalid Sec-WebSocket-Extensions header`);
              return;
            }
            e._extensions[f.extensionName] = x;
          }
          e.setSocket(n, r, {
            allowSynchronousEvents: o.allowSynchronousEvents,
            generateMask: o.generateMask,
            maxBufferedChunks: o.maxBufferedChunks,
            maxFragments: o.maxFragments,
            maxPayload: o.maxPayload,
            skipUTF8Validation: o.skipUTF8Validation,
          });
        }),
        o.finishRequest ? o.finishRequest(S, e) : S.end());
    }
    function I(e, t) {
      ((e._readyState = P.CLOSING), (e._errorEmitted = !0), e.emit(`error`, t), e.emitClose());
    }
    function ee(e) {
      return ((e.path = e.socketPath), a.connect(e));
    }
    function te(e) {
      return (
        (e.path = void 0),
        !e.servername && e.servername !== `` && (e.servername = a.isIP(e.host) ? `` : e.host),
        o.connect(e)
      );
    }
    function L(e, t, n) {
      e._readyState = P.CLOSING;
      let r = Error(n);
      (Error.captureStackTrace(r, L),
        t.setHeader
          ? ((t[A] = !0),
            t.abort(),
            t.socket && !t.socket.destroyed && t.socket.destroy(),
            process.nextTick(I, e, r))
          : (t.destroy(r), t.once(`error`, e.emit.bind(e, `error`)), t.once(`close`, e.emitClose.bind(e))));
    }
    function ne(e, t, n) {
      if (t) {
        let n = h(t) ? t.size : k(t).length;
        e._socket ? (e._sender._bufferedBytes += n) : (e._bufferedAmount += n);
      }
      if (n) {
        let t = Error(`WebSocket is not open: readyState ${e.readyState} (${M[e.readyState]})`);
        process.nextTick(n, t);
      }
    }
    function re(e, t) {
      let n = this[C];
      ((n._closeFrameReceived = !0),
        (n._closeMessage = t),
        (n._closeCode = e),
        n._socket[C] !== void 0 &&
          (n._socket.removeListener(`data`, me),
          process.nextTick(ue, n._socket),
          e === 1005 ? n.close() : n.close(e, t)));
    }
    function ie() {
      let e = this[C];
      e.isPaused || e._socket.resume();
    }
    function ae(e) {
      let t = this[C];
      (t._socket[C] !== void 0 &&
        (t._socket.removeListener(`data`, me), process.nextTick(ue, t._socket), t.close(e[S])),
        t._errorEmitted || ((t._errorEmitted = !0), t.emit(`error`, e)));
    }
    function oe() {
      this[C].emitClose();
    }
    function se(e, t) {
      this[C].emit(`message`, e, t);
    }
    function ce(e) {
      let t = this[C];
      (t._autoPong && t.pong(e, !this._isServer, w), t.emit(`ping`, e));
    }
    function le(e) {
      this[C].emit(`pong`, e);
    }
    function ue(e) {
      e.resume();
    }
    function de(e) {
      let t = this[C];
      t.readyState !== P.CLOSED &&
        (t.readyState === P.OPEN && ((t._readyState = P.CLOSING), fe(t)),
        this._socket.end(),
        t._errorEmitted || ((t._errorEmitted = !0), t.emit(`error`, e)));
    }
    function fe(e) {
      e._closeTimer = setTimeout(e._socket.destroy.bind(e._socket), e._closeTimeout);
    }
    function pe() {
      let e = this[C];
      if (
        (this.removeListener(`close`, pe),
        this.removeListener(`data`, me),
        this.removeListener(`end`, he),
        (e._readyState = P.CLOSING),
        !this._readableState.endEmitted &&
          !e._closeFrameReceived &&
          !e._receiver._writableState.errorEmitted &&
          this._readableState.length !== 0)
      ) {
        let t = this.read(this._readableState.length);
        e._receiver.write(t);
      }
      (e._receiver.end(),
        (this[C] = void 0),
        clearTimeout(e._closeTimer),
        e._receiver._writableState.finished || e._receiver._writableState.errorEmitted
          ? e.emitClose()
          : (e._receiver.on(`error`, oe), e._receiver.on(`finish`, oe)));
    }
    function me(e) {
      this[C]._receiver.write(e) || this.pause();
    }
    function he() {
      let e = this[C];
      ((e._readyState = P.CLOSING), e._receiver.end(), this.end());
    }
    function R() {
      let e = this[C];
      (this.removeListener(`error`, R),
        this.on(`error`, w),
        e && ((e._readyState = P.CLOSING), this.destroy()));
    }
  }),
  Lo = e.t((e, t) => {
    Io();
    var { Duplex: n } = require("stream");
    function r(e) {
      e.emit(`close`);
    }
    function i() {
      !this.destroyed && this._writableState.finished && this.destroy();
    }
    function a(e) {
      (this.removeListener(`error`, a),
        this.destroy(),
        this.listenerCount(`error`) === 0 && this.emit(`error`, e));
    }
    function o(e, t) {
      let o = !0,
        s = new n({ ...t, autoDestroy: !1, emitClose: !1, objectMode: !1, writableObjectMode: !1 });
      return (
        e.on(`message`, function (t, n) {
          let r = !n && s._readableState.objectMode ? t.toString() : t;
          s.push(r) || e.pause();
        }),
        e.once(`error`, function (e) {
          s.destroyed || ((o = !1), s.destroy(e));
        }),
        e.once(`close`, function () {
          s.destroyed || s.push(null);
        }),
        (s._destroy = function (t, n) {
          if (e.readyState === e.CLOSED) {
            (n(t), process.nextTick(r, s));
            return;
          }
          let i = !1;
          (e.once(`error`, function (e) {
            ((i = !0), n(e));
          }),
            e.once(`close`, function () {
              (i || n(t), process.nextTick(r, s));
            }),
            o && e.terminate());
        }),
        (s._final = function (t) {
          if (e.readyState === e.CONNECTING) {
            e.once(`open`, function () {
              s._final(t);
            });
            return;
          }
          e._socket !== null &&
            (e._socket._writableState.finished
              ? (t(), s._readableState.endEmitted && s.destroy())
              : (e._socket.once(`finish`, function () {
                  t();
                }),
                e.close()));
        }),
        (s._read = function () {
          e.isPaused && e.resume();
        }),
        (s._write = function (t, n, r) {
          if (e.readyState === e.CONNECTING) {
            e.once(`open`, function () {
              s._write(t, n, r);
            });
            return;
          }
          e.send(t, r);
        }),
        s.on(`end`, i),
        s.on(`error`, a),
        s
      );
    }
    t.exports = o;
  }),
  Ro = e.t((e, t) => {
    var { tokenChars: n } = jo();
    function r(e) {
      let t = new Set(),
        r = -1,
        i = -1,
        a = 0;
      for (; a < e.length; a++) {
        let o = e.charCodeAt(a);
        if (i === -1 && n[o] === 1) r === -1 && (r = a);
        else if (a !== 0 && (o === 32 || o === 9)) i === -1 && r !== -1 && (i = a);
        else if (o === 44) {
          if (r === -1) throw SyntaxError(`Unexpected character at index ${a}`);
          i === -1 && (i = a);
          let n = e.slice(r, i);
          if (t.has(n)) throw SyntaxError(`The "${n}" subprotocol is duplicated`);
          (t.add(n), (r = i = -1));
        } else throw SyntaxError(`Unexpected character at index ${a}`);
      }
      if (r === -1 || i !== -1) throw SyntaxError(`Unexpected end of input`);
      let o = e.slice(r, a);
      if (t.has(o)) throw SyntaxError(`The "${o}" subprotocol is duplicated`);
      return (t.add(o), t);
    }
    t.exports = { parse: r };
  }),
  zo = e.t((e, t) => {
    var n = require("events"),
      r = require("http"),
      { Duplex: i } = require("stream"),
      { createHash: a } = require("crypto"),
      o = Fo(),
      s = Oo(),
      c = Ro(),
      l = Io(),
      { CLOSE_TIMEOUT: u, GUID: d, kWebSocket: f } = $(),
      p = /^[+/0-9A-Za-z]{22}==$/,
      m = 0,
      h = 1,
      g = 2;
    t.exports = class extends n {
      constructor(e, t) {
        if (
          (super(),
          (e = {
            allowSynchronousEvents: !0,
            autoPong: !0,
            maxBufferedChunks: 262144,
            maxFragments: 16384,
            maxPayload: 104857600,
            skipUTF8Validation: !1,
            perMessageDeflate: !1,
            handleProtocols: null,
            clientTracking: !0,
            closeTimeout: u,
            verifyClient: null,
            noServer: !1,
            backlog: null,
            server: null,
            host: null,
            path: null,
            port: null,
            WebSocket: l,
            ...e,
          }),
          (e.port == null && !e.server && !e.noServer) ||
            (e.port != null && (e.server || e.noServer)) ||
            (e.server && e.noServer))
        )
          throw TypeError(
            `One and only one of the "port", "server", or "noServer" options must be specified`,
          );
        if (
          (e.port == null
            ? e.server && (this._server = e.server)
            : ((this._server = r.createServer((e, t) => {
                let n = r.STATUS_CODES[426];
                (t.writeHead(426, { "Content-Length": n.length, "Content-Type": `text/plain` }), t.end(n));
              })),
              this._server.listen(e.port, e.host, e.backlog, t)),
          this._server)
        ) {
          let e = this.emit.bind(this, `connection`);
          this._removeListeners = _(this._server, {
            listening: this.emit.bind(this, `listening`),
            error: this.emit.bind(this, `error`),
            upgrade: (t, n, r) => {
              this.handleUpgrade(t, n, r, e);
            },
          });
        }
        (e.perMessageDeflate === !0 && (e.perMessageDeflate = {}),
          e.clientTracking && ((this.clients = new Set()), (this._shouldEmitClose = !1)),
          (this.options = e),
          (this._state = m));
      }
      address() {
        if (this.options.noServer) throw Error(`The server is operating in "noServer" mode`);
        return this._server ? this._server.address() : null;
      }
      close(e) {
        if (this._state === g) {
          (e &&
            this.once(`close`, () => {
              e(Error(`The server is not running`));
            }),
            process.nextTick(v, this));
          return;
        }
        if ((e && this.once(`close`, e), this._state !== h)) {
          if (((this._state = h), this.options.noServer || this.options.server))
            (this._server && (this._removeListeners(), (this._removeListeners = this._server = null)),
              this.clients && this.clients.size ? (this._shouldEmitClose = !0) : process.nextTick(v, this));
          else {
            let e = this._server;
            (this._removeListeners(),
              (this._removeListeners = this._server = null),
              e.close(() => {
                v(this);
              }));
          }
        }
      }
      shouldHandle(e) {
        if (this.options.path) {
          let t = e.url.indexOf(`?`);
          if ((t === -1 ? e.url : e.url.slice(0, t)) !== this.options.path) return !1;
        }
        return !0;
      }
      handleUpgrade(e, t, n, r) {
        t.on(`error`, y);
        let i = e.headers[`sec-websocket-key`],
          a = e.headers.upgrade,
          l = +e.headers[`sec-websocket-version`];
        if (e.method !== `GET`) {
          x(this, e, t, 405, `Invalid HTTP method`);
          return;
        }
        if (a === void 0 || a.toLowerCase() !== `websocket`) {
          x(this, e, t, 400, `Invalid Upgrade header`);
          return;
        }
        if (i === void 0 || !p.test(i)) {
          x(this, e, t, 400, `Missing or invalid Sec-WebSocket-Key header`);
          return;
        }
        if (l !== 13 && l !== 8) {
          x(this, e, t, 400, `Missing or invalid Sec-WebSocket-Version header`, {
            "Sec-WebSocket-Version": `13, 8`,
          });
          return;
        }
        if (!this.shouldHandle(e)) {
          b(t, 400);
          return;
        }
        let u = e.headers[`sec-websocket-protocol`],
          d = new Set();
        if (u !== void 0)
          try {
            d = c.parse(u);
          } catch {
            x(this, e, t, 400, `Invalid Sec-WebSocket-Protocol header`);
            return;
          }
        let f = e.headers[`sec-websocket-extensions`],
          m = {};
        if (this.options.perMessageDeflate && f !== void 0) {
          let n = new s({
            ...this.options.perMessageDeflate,
            isServer: !0,
            maxPayload: this.options.maxPayload,
          });
          try {
            let e = o.parse(f);
            e[s.extensionName] && (n.accept(e[s.extensionName]), (m[s.extensionName] = n));
          } catch {
            x(this, e, t, 400, `Invalid or unacceptable Sec-WebSocket-Extensions header`);
            return;
          }
        }
        if (this.options.verifyClient) {
          let a = {
            origin: e.headers[`${l === 8 ? `sec-websocket-origin` : `origin`}`],
            secure: !!(e.socket.authorized || e.socket.encrypted),
            req: e,
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(a, (a, o, s, c) => {
              if (!a) return b(t, o || 401, s, c);
              this.completeUpgrade(m, i, d, e, t, n, r);
            });
            return;
          }
          if (!this.options.verifyClient(a)) return b(t, 401);
        }
        this.completeUpgrade(m, i, d, e, t, n, r);
      }
      completeUpgrade(e, t, n, r, i, c, l) {
        if (!i.readable || !i.writable) return i.destroy();
        if (i[f])
          throw Error(
            `server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration`,
          );
        if (this._state > m) return b(i, 503);
        let u = [
            `HTTP/1.1 101 Switching Protocols`,
            `Upgrade: websocket`,
            `Connection: Upgrade`,
            `Sec-WebSocket-Accept: ${a(`sha1`)
              .update(t + d)
              .digest(`base64`)}`,
          ],
          p = new this.options.WebSocket(null, void 0, this.options);
        if (n.size) {
          let e = this.options.handleProtocols ? this.options.handleProtocols(n, r) : n.values().next().value;
          e && (u.push(`Sec-WebSocket-Protocol: ${e}`), (p._protocol = e));
        }
        if (e[s.extensionName]) {
          let t = e[s.extensionName].params,
            n = o.format({ [s.extensionName]: [t] });
          (u.push(`Sec-WebSocket-Extensions: ${n}`), (p._extensions = e));
        }
        (this.emit(`headers`, u, r),
          i.write(
            u.concat(`\r
`).join(`\r
`),
          ),
          i.removeListener(`error`, y),
          p.setSocket(i, c, {
            allowSynchronousEvents: this.options.allowSynchronousEvents,
            maxBufferedChunks: this.options.maxBufferedChunks,
            maxFragments: this.options.maxFragments,
            maxPayload: this.options.maxPayload,
            skipUTF8Validation: this.options.skipUTF8Validation,
          }),
          this.clients &&
            (this.clients.add(p),
            p.on(`close`, () => {
              (this.clients.delete(p),
                this._shouldEmitClose && !this.clients.size && process.nextTick(v, this));
            })),
          l(p, r));
      }
    };
    function _(e, t) {
      for (let n of Object.keys(t)) e.on(n, t[n]);
      return function () {
        for (let n of Object.keys(t)) e.removeListener(n, t[n]);
      };
    }
    function v(e) {
      ((e._state = g), e.emit(`close`));
    }
    function y() {
      this.destroy();
    }
    function b(e, t, n, i) {
      ((n ||= r.STATUS_CODES[t]),
        (i = {
          Connection: `close`,
          "Content-Type": `text/html`,
          "Content-Length": Buffer.byteLength(n),
          ...i,
        }),
        e.once(`finish`, e.destroy),
        e.end(
          `HTTP/1.1 ${t} ${r.STATUS_CODES[t]}\r\n` +
            Object.keys(i).map((e) => `${e}: ${i[e]}`).join(`\r
`) +
            `\r
\r
` +
            n,
        ));
    }
    function x(e, t, n, r, i, a) {
      if (e.listenerCount(`wsClientError`)) {
        let r = Error(i);
        (Error.captureStackTrace(r, x), e.emit(`wsClientError`, r, n, t));
      } else b(n, r, i, a);
    }
  }),
  Bo = xo();
(Lo(), Fo(), Oo(), Mo(), No(), Ro());
var Vo = e.a(Io(), 1);
zo();
var Ho = Vo.default,
  Uo = class {
    ws;
    authenticatedPrincipal;
    maximumFrameBytes;
    readyState;
    onopen = null;
    onmessage = null;
    onerror = null;
    onclose = null;
    terminationReason;
    constructor(e, t, n) {
      ((this.ws = e),
        (this.authenticatedPrincipal = t),
        (this.maximumFrameBytes = n),
        (this.readyState = e.readyState),
        e.on(`open`, () => {
          ((this.readyState = e.readyState), this.onopen?.({ type: `open` }));
        }),
        e.on(`message`, (e) => {
          let t = Date.now(),
            n = typeof e == `string` ? e : String(e);
          this.onmessage?.({ type: `message`, data: n, receivedAtMs: t });
        }),
        e.on(`error`, (t) => {
          ((this.readyState = e.readyState), this.onerror?.({ type: `error`, error: t }));
        }),
        e.on(`close`, (t, n) => {
          this.readyState = e.readyState;
          let r = {
            type: `close`,
            code: t,
            failureReason: this.terminationReason,
            reason: n.toString(),
            wasClean: t === 1e3,
          };
          this.onclose?.(r);
        }));
    }
    send(e) {
      if (this.ws.readyState !== Q.Open) throw new Ja(`Codex app-server websocket is not open`);
      if (this.maximumFrameBytes != null && Buffer.byteLength(e, `utf8`) > this.maximumFrameBytes)
        throw new Ya(this.maximumFrameBytes);
      this.ws.send(e);
    }
    close(e, t) {
      this.ws.close(e, t);
    }
  },
  Wo = 1e4,
  Go = 6e4;
function Ko(e, { onPongTimeout: t, pingIntervalMs: n = Wo, pongTimeoutMs: r = Go }) {
  let i = Date.now(),
    a = !1,
    o = () => {
      i = Date.now();
    },
    s = setInterval(() => {
      if (!(e.readyState !== Q.Open || a)) {
        if (Date.now() - i > r) {
          ((a = !0), t());
          return;
        }
        e.ping();
      }
    }, n),
    c = () => {
      (clearInterval(s), e.off(`pong`, o), e.off(`close`, c));
    };
  return (e.on(`pong`, o), e.on(`close`, c), c);
}
var qo = 15e3,
  Jo = class {
    options;
    kind = `websocket`;
    constructor(e) {
      this.options = e;
    }
    supportsReconnect() {
      return !0;
    }
    async connect() {
      let e = await this.options.getWebsocketHandshake?.(),
        t = this.options.handshakeTimeoutMs ?? qo,
        n = {
          ca: this.options.ca,
          createConnection: this.options.createConnection,
          handshakeTimeout: t,
          headers: e?.headers ?? {},
          ...(this.options.socksProxyUrl == null
            ? {}
            : { agent: new Bo.SocksProxyAgent(this.options.socksProxyUrl) }),
          perMessageDeflate: !1,
        },
        r =
          e?.protocols == null
            ? new Ho(this.options.websocketUrl, n)
            : new Ho(this.options.websocketUrl, e.protocols, n),
        i = new Uo(r, e?.authenticatedPrincipal),
        a = setTimeout(() => {
          ((i.terminationReason = `open_timeout`), r.terminate());
        }, t);
      a.unref();
      let o = () => {
        (clearTimeout(a), r.off(`open`, o), r.off(`close`, o));
      };
      return (
        r.on(`open`, o),
        r.on(`close`, o),
        Ko(r, {
          onPongTimeout: () => {
            ((i.terminationReason = `pong_timeout`), r.terminate());
          },
        }),
        i
      );
    }
  };
function Yo(e) {
  if (process.env.CODEX_APP_SERVER_FORCE_CLI === `1`) return null;
  let t = process.env.CODEX_APP_SERVER_WS_URL ?? e.websocket_url;
  return !t || typeof t != `string` ? null : t;
}
var Xo = 4194304,
  Zo = 32,
  Qo = 16,
  $o = class {
    chunks;
    length;
    constructor(e, t) {
      ((this.chunks = e), (this.length = t));
    }
  },
  es = class {
    chunkTargetBytes;
    chunks = [];
    currentChunk = [];
    currentChunkBytes = 0;
    length = 0;
    constructor(e = Xo) {
      this.chunkTargetBytes = e;
    }
    add(e) {
      let t = rs(e, this.chunkTargetBytes);
      (this.currentChunk.length > 0 &&
        this.currentChunkBytes + t > this.chunkTargetBytes &&
        (this.chunks.push(this.currentChunk), (this.currentChunk = []), (this.currentChunkBytes = 0)),
        this.currentChunk.push(e),
        (this.currentChunkBytes += t),
        (this.length += 1));
    }
    finish() {
      return (
        this.currentChunk.length > 0 && this.chunks.push(this.currentChunk),
        this.chunks.length <= 1 ? (this.chunks[0] ?? []) : new $o(this.chunks, this.length)
      );
    }
  };
function ts(e) {
  return e instanceof $o;
}
function ns(e) {
  if (ts(e)) {
    let t = [];
    for (let n of e.chunks) for (let e of n) t.push(ns(e));
    return t;
  }
  if (Array.isArray(e)) return e.map(ns);
  if (typeof e != `object` || !e) return e;
  let t = {};
  for (let [n, r] of Object.entries(e))
    Object.defineProperty(t, n, { configurable: !0, enumerable: !0, value: ns(r), writable: !0 });
  return t;
}
function rs(e, t = 2 ** 53 - 1) {
  return as(e, t, !1);
}
function is(e, t) {
  return as(e, t, !0) > t;
}
function as(e, t, n) {
  let r = new WeakSet(),
    i = [{ type: `value`, value: e }],
    a = 0;
  for (; i.length > 0 && a <= t;) {
    let e = i.pop();
    if (e == null) break;
    if (e.type === `values`) {
      let t = e.values.next();
      t.done || i.push(e, { type: `value`, value: t.value });
      continue;
    }
    if (e.type === `leave`) {
      r.delete(e.value);
      continue;
    }
    if (e.type === `object`) {
      let t = e.entries[e.index];
      t != null && ((e.index += 1), (a += t[0].length * 2 + Qo), i.push(e, { type: `value`, value: t[1] }));
      continue;
    }
    let t = e.value;
    if (typeof t == `string`) {
      a += t.length * 2 + Qo;
      continue;
    }
    if (typeof t != `object` || !t) {
      a += Qo;
      continue;
    }
    if (!r.has(t)) {
      if ((r.add(t), (a += Zo), ts(t))) {
        if (n) return 1 / 0;
        i.push({ type: `leave`, value: t }, { type: `values`, values: os(t) });
      } else
        Array.isArray(t)
          ? i.push({ type: `leave`, value: t }, { type: `values`, values: t.values() })
          : i.push({ type: `leave`, value: t }, { type: `object`, entries: Object.entries(t), index: 0 });
    }
  }
  return a;
}
function* os(e) {
  for (let t of e.chunks) yield* t;
}
var ss = new WeakMap();
function cs(e, t) {
  ss.set(e, t);
}
function ls(e) {
  return ss.get(e);
}
var us = e.t((e, t) => {
    var n = Symbol.for(`object-stream.none`),
      r = Symbol.for(`object-stream.stop`),
      i = Symbol.for(`object-stream.final`),
      a = Symbol.for(`object-stream.many`),
      o = Symbol.for(`object-stream.flush`),
      s = Symbol.for(`object-stream.fList`),
      c = (e) => ({ [i]: 1, value: e }),
      l = (e) => ({ [a]: 1, values: e }),
      u = (e) => e && e[i] === 1,
      d = (e) => e && e[a] === 1,
      f = (e) => e && e[o] === 1,
      p = (e) => e && e[s] === 1,
      m = (e) => e.value,
      h = (e) => e.values,
      g = (e) => e.fList,
      _ = (e, t = null) => {
        let r = t ? (r) => (r === n ? t() : e(r)) : e;
        return ((r[o] = 1), r);
      },
      v = (e, t) => ((e.fList = t), (e[s] = 1), e),
      y = (e) => (delete e.fList, delete e[s], e),
      b = class extends Error {},
      x = (e) => (e === n ? l([]) : e && e[a] === 1 ? e : l([e])),
      S = (e) => {
        if (e?.[a] === 1)
          switch (e.values.length) {
            case 0:
              return n;
            case 1:
              return e.values[0];
          }
        return e;
      },
      C = (...e) => {
        let t = [];
        for (let r = 0; r < e.length; ++r) {
          let i = e[r];
          i !== n && (i?.[a] === 1 ? t.push(...i.values) : t.push(i));
        }
        return l(t);
      },
      w = (e, ...t) => {
        let r = e === n ? [] : e?.[a] === 1 ? e.values : [e];
        for (let e = 0; e < t.length; ++e) {
          let i = t[e];
          i !== n && (i?.[a] === 1 ? r.push(...i.values) : r.push(i));
        }
        return l(r);
      },
      T = c;
    ((t.exports.none = n),
      (t.exports.stop = r),
      (t.exports.Stop = b),
      (t.exports.finalSymbol = i),
      (t.exports.finalValue = c),
      (t.exports.final = T),
      (t.exports.isFinalValue = u),
      (t.exports.getFinalValue = m),
      (t.exports.manySymbol = a),
      (t.exports.many = l),
      (t.exports.isMany = d),
      (t.exports.getManyValues = h),
      (t.exports.flushSymbol = o),
      (t.exports.flushable = _),
      (t.exports.isFlushable = f),
      (t.exports.fListSymbol = s),
      (t.exports.isFunctionList = p),
      (t.exports.getFunctionList = g),
      (t.exports.setFunctionList = v),
      (t.exports.clearFunctionList = y),
      (t.exports.toMany = x),
      (t.exports.normalizeMany = S),
      (t.exports.combineMany = C),
      (t.exports.combineManyMut = w));
  }),
  ds = e.t((e, t) => {
    var n = us(),
      r = async function* (e, t, i) {
        for (
          let a = i;
          a <= t.length && (e && typeof e.then == `function` && (e = await e), e !== n.none);
          ++a
        ) {
          if (e === n.stop) throw new n.Stop();
          if (n.isFinalValue(e)) {
            yield n.getFinalValue(e);
            break;
          }
          if (n.isMany(e)) {
            let i = n.getManyValues(e);
            if (a == t.length) yield* i;
            else for (let e = 0; e < i.length; ++e) yield* r(i[e], t, a);
            break;
          }
          if (e && typeof e.next == `function`) {
            for (;;) {
              let n = e.next();
              if ((n && typeof n.then == `function` && (n = await n), n.done)) break;
              a == t.length ? yield n.value : yield* r(n.value, t, a);
            }
            break;
          }
          if (a == t.length) {
            yield e;
            break;
          }
          let i = t[a];
          e = i(e);
        }
      };
    ((t.exports = (...e) => {
      ((e = e
        .filter((e) => e)
        .flat(1 / 0)
        .map((e) => (n.isFunctionList(e) ? n.getFunctionList(e) : e))
        .flat(1 / 0)),
        e.length || (e = [(e) => e]));
      let t = !1,
        i = async function* (i) {
          if (t) throw Error(`Call to a flushed pipe.`);
          if (i !== n.none)
            for (let t = 0; t <= e.length; ++t) {
              if (i && typeof i.then == `function`) {
                yield* r(i, e, t);
                return;
              }
              if (i === n.none) return;
              if (i === n.stop) throw new n.Stop();
              if (n.isFinalValue(i)) {
                yield n.getFinalValue(i);
                return;
              }
              if (n.isMany(i) || (i && typeof i.next == `function`)) {
                yield* r(i, e, t);
                return;
              }
              if (t == e.length) {
                yield i;
                return;
              }
              i = e[t](i);
            }
          else {
            t = !0;
            for (let t = 0; t < e.length; ++t) {
              let i = e[t];
              n.isFlushable(i) && (yield* r(i(n.none), e, t + 1));
            }
          }
        };
      return (e.some((e) => n.isFlushable(e)) && (i = n.flushable(i)), n.setFunctionList(i, e));
    }),
      (t.exports.next = r));
  }),
  fs = e.t((e, t) => {
    var { Duplex: n } = require("node:stream"),
      r = us();
    t.exports = (e, t) => {
      if (typeof e != `function`) throw TypeError(`Only a function is accepted as the first argument`);
      let i = Promise.resolve(),
        a = null,
        o = [],
        s = () => {
          a && (a(), (a = null), (i = Promise.resolve()));
        },
        c = () => {
          a || (i = new Promise((e) => (a = e)));
        },
        l = r.isFunctionList(e) ? e.fList : null,
        u = l
          ? function e(t, n, i) {
              for (;;) {
                if (t && typeof t.then == `function`) return t.then((t) => e(t, n, i));
                if (t == null || t === r.none) return;
                if (t === r.stop) throw new r.Stop();
                if (r.isFinalValue(t)) {
                  i(r.getFinalValue(t));
                  return;
                }
                if (r.isMany(t)) {
                  let a = r.getManyValues(t);
                  if (n >= l.length) {
                    for (let e = 0; e < a.length; ++e) i(a[e]);
                    return;
                  }
                  let o;
                  for (let t = 0; t < a.length; ++t)
                    if (o) {
                      let r = t;
                      o = o.then(() => e(a[r], n, i));
                    } else {
                      let r = e(a[t], n, i);
                      r && (o = r);
                    }
                  return o;
                }
                if (t && typeof t.next == `function`)
                  return (async () => {
                    for (;;) {
                      let r = t.next();
                      if ((r && typeof r.then == `function` && (r = await r), r.done)) break;
                      let a = e(r.value, n, i);
                      a && (await a);
                    }
                  })();
                if (n >= l.length) {
                  i(t);
                  return;
                }
                t = l[n++](t);
              }
            }
          : null,
        d = !1,
        f = null,
        p = (e) => {
          if (e && typeof e.next == `function`) {
            o.push(e);
            return;
          }
          o.push(e[Symbol.iterator]());
        },
        m = async () => {
          for (; o.length;) {
            await i;
            let e = o[o.length - 1].next();
            if ((e && typeof e.then == `function` && (e = await e), e.done)) {
              o.pop();
              continue;
            }
            let t = e.value;
            (t && typeof t.then == `function` && (t = await t), await h(t));
          }
        },
        h = async (e) => {
          if (e != null && e !== r.none) {
            if (e === r.stop) throw new r.Stop();
            if (r.isMany(e)) return (p(r.getManyValues(e)), m());
            if (r.isFinalValue(e)) return ((e = r.getFinalValue(e)), _(e));
            f.push(e) || c();
          }
        },
        g = async (t, n) => {
          try {
            let r = e(t, n);
            await _(r);
          } catch (e) {
            if (e instanceof r.Stop) {
              (f.push(null), (d = !0));
              return;
            }
            throw e;
          }
        },
        _ = async (e) =>
          e && typeof e.then == `function`
            ? e.then((e) => _(e))
            : e && typeof e.next == `function`
              ? (p(e), m())
              : h(e);
      return (
        (f = new n({
          writableObjectMode: !0,
          readableObjectMode: !0,
          ...t,
          write(t, n, a) {
            if (d) {
              a(null);
              return;
            }
            if (u) {
              let e = !1,
                n;
              try {
                n = u(t, 0, (t) => {
                  f.push(t) || (e = !0);
                });
              } catch (e) {
                if (e instanceof r.Stop) {
                  (f.push(null), (d = !0), a(null));
                  return;
                }
                a(e);
                return;
              }
              if (n) {
                n.then(
                  () => a(null),
                  (e) => {
                    if (e instanceof r.Stop) {
                      (f.push(null), (d = !0), a(null));
                      return;
                    }
                    a(e);
                  },
                );
                return;
              }
              e ? (c(), i.then(() => a(null))) : a(null);
              return;
            }
            let o;
            try {
              o = e(t, n);
            } catch (e) {
              if (e instanceof r.Stop) {
                (f.push(null), (d = !0), a(null));
                return;
              }
              a(e);
              return;
            }
            if (
              (!o || (typeof o.then != `function` && typeof o.next != `function`)) &&
              o !== r.stop &&
              !r.isMany(o) &&
              !r.isFinalValue(o)
            ) {
              if (o != null && o !== r.none && !f.push(o)) {
                (c(), i.then(() => a(null)));
                return;
              }
              a(null);
              return;
            }
            _(o).then(
              () => a(null),
              (e) => {
                if (e instanceof r.Stop) {
                  (f.push(null), (d = !0), a(null));
                  return;
                }
                a(e);
              },
            );
          },
          final(t) {
            if (u) {
              let e = !1,
                n;
              try {
                let t = (t) => {
                  f.push(t) || (e = !0);
                };
                for (let e = 0; e < l.length; ++e)
                  if (r.isFlushable(l[e])) {
                    if (n) {
                      let i = e;
                      n = n.then(() => u(l[i](r.none), i + 1, t));
                    } else {
                      let i = u(l[e](r.none), e + 1, t);
                      i && (n = i);
                    }
                  }
              } catch (e) {
                if (e instanceof r.Stop) {
                  (f.push(null), (d = !0), t(null));
                  return;
                }
                t(e);
                return;
              }
              if (n) {
                n.then(
                  () => (f.push(null), t(null)),
                  (e) => {
                    if (e instanceof r.Stop) {
                      ((d = !0), f.push(null), t(null));
                      return;
                    }
                    t(e);
                  },
                );
                return;
              }
              (f.push(null), e ? (c(), i.then(() => t(null))) : t(null));
              return;
            }
            if (!r.isFlushable(e)) {
              (f.push(null), t(null));
              return;
            }
            g(r.none, null).then(
              () => {
                (d || f.push(null), t(null));
              },
              (e) => t(e),
            );
          },
          read() {
            s();
          },
        })),
        f
      );
    };
  }),
  ps = e.t((e, t) => {
    var { Readable: n, Writable: r, Duplex: i } = require("node:stream"),
      a = us(),
      o = ds(),
      s = fs(),
      c = (e) =>
        e &&
        typeof e.pipe == `function` &&
        typeof e.on == `function` &&
        (!e._writableState ||
          (typeof e._readableState == `object` ? e._readableState.readable : null) !== !1) &&
        (!e._writableState || e._readableState),
      l = (e) =>
        e &&
        typeof e.write == `function` &&
        typeof e.on == `function` &&
        (!e._readableState ||
          (typeof e._writableState == `object` ? e._writableState.writable : null) !== !1),
      u = (e) =>
        e &&
        typeof e.pipe == `function` &&
        e._readableState &&
        typeof e.on == `function` &&
        typeof e.write == `function`,
      d = (e) =>
        e &&
        (e._readableState ||
          e._writableState ||
          (typeof e.write == `function` && typeof e.on == `function`) ||
          (typeof e.pipe == `function` && typeof e.on == `function`)),
      f = (e) =>
        !(
          !e ||
          d(e) ||
          typeof e.pipeThrough != `function` ||
          typeof e.getReader != `function` ||
          typeof e.cancel != `function`
        ),
      p = (e) => !(!e || d(e) || typeof e.getWriter != `function` || typeof e.abort != `function`),
      m = (e) => !(!e || d(e) || typeof e.readable != `object` || typeof e.writable != `object`),
      h = (e, t, a, o) => {
        if (u(t) || (!a && c(t)) || (a === o.length - 1 && l(t))) return (e.push(t), e);
        if (m(t)) return (e.push(i.fromWeb(t, { objectMode: !0 })), e);
        if (!a && f(t)) return (e.push(n.fromWeb(t, { objectMode: !0 })), e);
        if (a === o.length - 1 && p(t)) return (e.push(r.fromWeb(t, { objectMode: !0 })), e);
        if (typeof t != `function`)
          throw TypeError(`Item #` + a + ` is not a proper stream, nor a function.`);
        e.length || e.push([]);
        let s = e[e.length - 1];
        return (Array.isArray(s) ? s.push(t) : e.push([t]), e);
      },
      g = (e) =>
        Array.isArray(e)
          ? e.length
            ? e.length == 1
              ? e[0] && x.asStream(e[0])
              : x.asStream(x.gen(...e))
            : null
          : e,
      _ = (e, t, a) => {
        if (u(e) || (!t && c(e)) || (t === a.length - 1 && l(e))) return e;
        if (m(e)) return i.fromWeb(e, { objectMode: !0 });
        if (!t && f(e)) return n.fromWeb(e, { objectMode: !0 });
        if (t === a.length - 1 && p(e)) return r.fromWeb(e, { objectMode: !0 });
        if (typeof e == `function`) return x.asStream(e);
        throw TypeError(`Item #` + t + ` is not a proper stream, nor a function.`);
      },
      v = (e, t, n, r) => {
        let i = null;
        try {
          e.write(t, n, (e) => r(e || i));
        } catch (e) {
          i = e;
        }
      },
      y = (e, t) => {
        let n = null;
        try {
          e.end(null, null, (e) => t(e || n));
        } catch (e) {
          n = e;
        }
      },
      b = (e) => {
        e.resume();
      },
      x = (e, t) => {
        if (!Array.isArray(e) || !e.length)
          throw TypeError(`Chain's first argument should be a non-empty array.`);
        e = e.flat(1 / 0).filter((e) => e);
        let n = (
            t && t.noGrouping
              ? e.map(_)
              : e
                  .map((e) => (a.isFunctionList(e) ? a.getFunctionList(e) : e))
                  .flat(1 / 0)
                  .reduce(h, [])
                  .map(g)
          ).filter((e) => e),
          r = n[0],
          o = n.reduce((e, t) => (e && e.pipe(t)) || t),
          s = null,
          u = (e, t, n) => v(r, e, t, n),
          d = (e) => y(r, e),
          f = () => b(o);
        return (
          l(r) || ((u = (e, t, n) => n(null)), (d = (e) => e(null)), r.on(`end`, () => s.end())),
          c(o)
            ? (o.on(`data`, (e) => !s.push(e) && o.pause()), o.on(`end`, () => s.push(null)))
            : ((f = () => {}), o.on(`finish`, () => s.push(null))),
          (s = new i({
            writableObjectMode: !0,
            readableObjectMode: !0,
            ...t,
            readable: c(o),
            writable: l(r),
            write: u,
            final: d,
            read: f,
          })),
          (s.streams = n),
          (s.input = r),
          (s.output = o),
          c(o) || s.resume(),
          (!t || !t.skipEvents) && n.forEach((e) => e.on(`error`, (e) => s.emit(`error`, e))),
          s
        );
      },
      S = (e) => {
        if (typeof e == `function`) return e;
        if (e) {
          if (typeof e[Symbol.asyncIterator] == `function`) return e[Symbol.asyncIterator].bind(e);
          if (typeof e[Symbol.iterator] == `function`) return e[Symbol.iterator].bind(e);
        }
        throw TypeError(`The argument should be a function or an iterable object.`);
      };
    ((t.exports = x),
      (t.exports.none = a.none),
      (t.exports.stop = a.stop),
      (t.exports.Stop = a.Stop),
      (t.exports.finalSymbol = a.finalSymbol),
      (t.exports.finalValue = a.finalValue),
      (t.exports.final = a.final),
      (t.exports.isFinalValue = a.isFinalValue),
      (t.exports.getFinalValue = a.getFinalValue),
      (t.exports.manySymbol = a.manySymbol),
      (t.exports.many = a.many),
      (t.exports.isMany = a.isMany),
      (t.exports.getManyValues = a.getManyValues),
      (t.exports.flushSymbol = a.flushSymbol),
      (t.exports.flushable = a.flushable),
      (t.exports.isFlushable = a.isFlushable),
      (t.exports.fListSymbol = a.fListSymbol),
      (t.exports.isFunctionList = a.isFunctionList),
      (t.exports.getFunctionList = a.getFunctionList),
      (t.exports.setFunctionList = a.setFunctionList),
      (t.exports.clearFunctionList = a.clearFunctionList),
      (t.exports.toMany = a.toMany),
      (t.exports.normalizeMany = a.normalizeMany),
      (t.exports.combineMany = a.combineMany),
      (t.exports.combineManyMut = a.combineManyMut),
      (t.exports.chain = x),
      (t.exports.chainUnchecked = x),
      (t.exports.gen = o),
      (t.exports.asStream = s),
      (t.exports.dataSource = S));
  }),
  ms = e.t((e, t) => {
    var { StringDecoder: n } = require("string_decoder"),
      { none: r, flushable: i } = us();
    t.exports = () => {
      let e = new n(),
        t = ``;
      return i((n) => {
        if (n === r) {
          let n = t + e.end();
          return ((t = ``), n);
        }
        if (typeof n == `string`) {
          if (!t) return n;
          let e = t + n;
          return ((t = ``), e);
        }
        if (n instanceof Buffer) {
          let r = t + e.write(n);
          return ((t = ``), r);
        }
        throw TypeError(`Expected a string or a Buffer`);
      });
    };
  }),
  hs = e.t((e, t) => {
    var { asStream: n, flushable: r, gen: i, many: a, none: o } = ps(),
      s = ms(),
      c = {
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
      },
      l = 16;
    ((c.numberFracStart = c.numberExpStart = c.numberStart),
      (c.numberFracDigit = c.numberExpDigit = c.numberDigit));
    var u = { object: `objectStop`, array: `arrayStop`, "": `done` },
      d = { name: `startObject` },
      f = { name: `endObject` },
      p = { name: `startArray` },
      m = { name: `endArray` },
      h = { name: `startString` },
      g = { name: `endString` },
      _ = { name: `startNumber` },
      v = { name: `endNumber` },
      y = { name: `startKey` },
      b = { name: `endKey` },
      x = {
        true: { name: `trueValue`, value: !0 },
        false: { name: `falseValue`, value: !1 },
        null: { name: `nullValue`, value: null },
      },
      S = (e) => String.fromCharCode(parseInt(e.slice(2), 16)),
      C = {
        b: `\b`,
        f: `\f`,
        n: `
`,
        r: `\r`,
        t: `	`,
        '"': `"`,
        "\\": `\\`,
        "/": `/`,
      },
      w = (e) => {
        let t = !0,
          n = !0,
          i = !0,
          s = !0,
          w = !0,
          T = !0,
          E = !1;
        (e &&
          (`packValues` in e && (t = n = i = e.packValues),
          `packKeys` in e && (t = e.packKeys),
          `packStrings` in e && (n = e.packStrings),
          `packNumbers` in e && (i = e.packNumbers),
          `streamValues` in e && (s = w = T = e.streamValues),
          `streamKeys` in e && (s = e.streamKeys),
          `streamStrings` in e && (w = e.streamStrings),
          `streamNumbers` in e && (T = e.streamNumbers),
          (E = e.jsonStreaming)),
          !t && (s = !0),
          !n && (w = !0),
          !i && (T = !0));
        let D = !1,
          O = E ? `done` : `value`,
          k = ``,
          A = !1,
          j = ``,
          M = ``,
          N = [];
        return r((e) => {
          let r = [];
          e === o ? (D = !0) : (M += e);
          let P,
            F,
            I = 0;
          main: for (;;)
            switch (O) {
              case `value1`:
              case `value`:
                if (((c.value1.lastIndex = I), (P = c.value1.exec(M)), !P)) {
                  if (D || I + l < M.length)
                    throw I < M.length
                      ? Error(`Parser cannot parse input: expected a value`)
                      : Error(`Parser has expected a value`);
                  break main;
                }
                switch (((F = P[0]), F)) {
                  case `"`:
                    (w && r.push(h), (O = `string`));
                    break;
                  case `{`:
                    (r.push(d), N.push(k), (k = `object`), (O = `key1`));
                    break;
                  case `[`:
                    (r.push(p), N.push(k), (k = `array`), (O = `value1`));
                    break;
                  case `]`:
                    if (O !== `value1`) throw Error(`Parser cannot parse input: unexpected token ']'`);
                    (A &&
                      (T && r.push(v), (A = !1), i && (r.push({ name: `numberValue`, value: j }), (j = ``))),
                      r.push(m),
                      (k = N.pop()),
                      (O = u[k]));
                    break;
                  case `-`:
                    ((A = !0),
                      T && r.push(_, { name: `numberChunk`, value: `-` }),
                      i && (j = `-`),
                      (O = `numberStart`));
                    break;
                  case `0`:
                    ((A = !0),
                      T && r.push(_, { name: `numberChunk`, value: `0` }),
                      i && (j = `0`),
                      (O = `numberFraction`));
                    break;
                  case `1`:
                  case `2`:
                  case `3`:
                  case `4`:
                  case `5`:
                  case `6`:
                  case `7`:
                  case `8`:
                  case `9`:
                    ((A = !0),
                      T && r.push(_, { name: `numberChunk`, value: F }),
                      i && (j = F),
                      (O = `numberDigit`));
                    break;
                  case `true`:
                  case `false`:
                  case `null`:
                    if (M.length - I === F.length && !D) break main;
                    (r.push(x[F]), (O = u[k]));
                }
                I += F.length;
                break;
              case `keyVal`:
              case `string`:
                if (((c.string.lastIndex = I), (P = c.string.exec(M)), !P)) {
                  if (I < M.length && (D || M.length - I >= 6))
                    throw Error(`Parser cannot parse input: escaped characters`);
                  if (D) throw Error(`Parser has expected a string value`);
                  break main;
                }
                if (((F = P[0]), F === `"`))
                  O === `keyVal`
                    ? (s && r.push(b), t && (r.push({ name: `keyValue`, value: j }), (j = ``)), (O = `colon`))
                    : (w && r.push(g),
                      n && (r.push({ name: `stringValue`, value: j }), (j = ``)),
                      (O = u[k]));
                else if (F.length > 1 && F.charAt(0) === `\\`) {
                  let e = F.length == 2 ? C[F.charAt(1)] : S(F);
                  ((O === `keyVal` ? s : w) && r.push({ name: `stringChunk`, value: e }),
                    (O === `keyVal` ? t : n) && (j += e));
                } else
                  ((O === `keyVal` ? s : w) && r.push({ name: `stringChunk`, value: F }),
                    (O === `keyVal` ? t : n) && (j += F));
                I += F.length;
                break;
              case `key1`:
              case `key`:
                if (((c.key1.lastIndex = I), (P = c.key1.exec(M)), !P)) {
                  if (I < M.length || D) throw Error(`Parser cannot parse input: expected an object key`);
                  break main;
                }
                if (((F = P[0]), F === `"`)) (s && r.push(y), (O = `keyVal`));
                else if (F === `}`) {
                  if (O !== `key1`) throw Error(`Parser cannot parse input: unexpected token '}'`);
                  (r.push(f), (k = N.pop()), (O = u[k]));
                }
                I += F.length;
                break;
              case `colon`:
                if (((c.colon.lastIndex = I), (P = c.colon.exec(M)), !P)) {
                  if (I < M.length || D) throw Error(`Parser cannot parse input: expected ':'`);
                  break main;
                }
                ((F = P[0]), F === `:` && (O = `value`), (I += F.length));
                break;
              case `arrayStop`:
              case `objectStop`:
                if (((c.comma.lastIndex = I), (P = c.comma.exec(M)), !P)) {
                  if (I < M.length || D) throw Error(`Parser cannot parse input: expected ','`);
                  break main;
                }
                if (
                  (A &&
                    (T && r.push(v), (A = !1), i && (r.push({ name: `numberValue`, value: j }), (j = ``))),
                  (F = P[0]),
                  F === `,`)
                )
                  O = O === `arrayStop` ? `value` : `key`;
                else if (F === `}` || F === `]`) {
                  if (F === `}` ? O === `arrayStop` : O !== `arrayStop`)
                    throw Error(
                      `Parser cannot parse input: expected '` + (O === `arrayStop` ? `]` : `}`) + `'`,
                    );
                  (r.push(F === `}` ? f : m), (k = N.pop()), (O = u[k]));
                }
                I += F.length;
                break;
              case `numberStart`:
                if (((c.numberStart.lastIndex = I), (P = c.numberStart.exec(M)), !P)) {
                  if (I < M.length || D) throw Error(`Parser cannot parse input: expected a starting digit`);
                  break main;
                }
                ((F = P[0]),
                  T && r.push({ name: `numberChunk`, value: F }),
                  i && (j += F),
                  (O = F === `0` ? `numberFraction` : `numberDigit`),
                  (I += F.length));
                break;
              case `numberDigit`:
                if (((c.numberDigit.lastIndex = I), (P = c.numberDigit.exec(M)), !P)) {
                  if (I < M.length || D) throw Error(`Parser cannot parse input: expected a digit`);
                  break main;
                }
                if (((F = P[0]), F))
                  (T && r.push({ name: `numberChunk`, value: F }), i && (j += F), (I += F.length));
                else {
                  if (I < M.length) {
                    O = `numberFraction`;
                    break;
                  }
                  if (D) {
                    O = u[k];
                    break;
                  }
                  break main;
                }
                break;
              case `numberFraction`:
                if (((c.numberFraction.lastIndex = I), (P = c.numberFraction.exec(M)), !P)) {
                  if (I < M.length || D) {
                    O = u[k];
                    break;
                  }
                  break main;
                }
                ((F = P[0]),
                  T && r.push({ name: `numberChunk`, value: F }),
                  i && (j += F),
                  (O = F === `.` ? `numberFracStart` : `numberExpSign`),
                  (I += F.length));
                break;
              case `numberFracStart`:
                if (((c.numberFracStart.lastIndex = I), (P = c.numberFracStart.exec(M)), !P)) {
                  if (I < M.length || D)
                    throw Error(`Parser cannot parse input: expected a fractional part of a number`);
                  break main;
                }
                ((F = P[0]),
                  T && r.push({ name: `numberChunk`, value: F }),
                  i && (j += F),
                  (O = `numberFracDigit`),
                  (I += F.length));
                break;
              case `numberFracDigit`:
                if (((c.numberFracDigit.lastIndex = I), (P = c.numberFracDigit.exec(M)), (F = P[0]), F))
                  (T && r.push({ name: `numberChunk`, value: F }), i && (j += F), (I += F.length));
                else {
                  if (I < M.length) {
                    O = `numberExponent`;
                    break;
                  }
                  if (D) {
                    O = u[k];
                    break;
                  }
                  break main;
                }
                break;
              case `numberExponent`:
                if (((c.numberExponent.lastIndex = I), (P = c.numberExponent.exec(M)), !P)) {
                  if (I < M.length) {
                    O = u[k];
                    break;
                  }
                  if (D) {
                    O = u[k];
                    break;
                  }
                  break main;
                }
                ((F = P[0]),
                  T && r.push({ name: `numberChunk`, value: F }),
                  i && (j += F),
                  (O = `numberExpSign`),
                  (I += F.length));
                break;
              case `numberExpSign`:
                if (((c.numberExpSign.lastIndex = I), (P = c.numberExpSign.exec(M)), !P)) {
                  if (I < M.length) {
                    O = `numberExpStart`;
                    break;
                  }
                  if (D) throw Error(`Parser has expected an exponent value of a number`);
                  break main;
                }
                ((F = P[0]),
                  T && r.push({ name: `numberChunk`, value: F }),
                  i && (j += F),
                  (O = `numberExpStart`),
                  (I += F.length));
                break;
              case `numberExpStart`:
                if (((c.numberExpStart.lastIndex = I), (P = c.numberExpStart.exec(M)), !P)) {
                  if (I < M.length || D)
                    throw Error(`Parser cannot parse input: expected an exponent part of a number`);
                  break main;
                }
                ((F = P[0]),
                  T && r.push({ name: `numberChunk`, value: F }),
                  i && (j += F),
                  (O = `numberExpDigit`),
                  (I += F.length));
                break;
              case `numberExpDigit`:
                if (((c.numberExpDigit.lastIndex = I), (P = c.numberExpDigit.exec(M)), (F = P[0]), F))
                  (T && r.push({ name: `numberChunk`, value: F }), i && (j += F), (I += F.length));
                else {
                  if (I < M.length || D) {
                    O = u[k];
                    break;
                  }
                  break main;
                }
                break;
              case `done`:
                if (((c.ws.lastIndex = I), (P = c.ws.exec(M)), !P)) {
                  if (I < M.length) {
                    if (E) {
                      (A &&
                        (T && r.push(v),
                        (A = !1),
                        i && (r.push({ name: `numberValue`, value: j }), (j = ``))),
                        (O = `value`));
                      break;
                    }
                    throw Error(`Parser cannot parse input: unexpected characters`);
                  }
                  break main;
                }
                ((F = P[0]),
                  A && (T && r.push(v), (A = !1), i && (r.push({ name: `numberValue`, value: j }), (j = ``))),
                  (I += F.length));
            }
          return (
            D && A && (T && r.push(v), (A = !1), i && (r.push({ name: `numberValue`, value: j }), (j = ``))),
            (M = M.slice(I)),
            r.length ? a(r) : o
          );
        });
      },
      T = (e) => i(s(), w(e));
    ((T.asStream = (e) => n(T(e), e)), (t.exports = T), (t.exports.parser = T));
  }),
  gs = e.t((e, t) => {
    var n = require("node:events"),
      { none: r } = ps(),
      i = (e, t) => {
        if (typeof e == `function`) return e;
        if (typeof e == `string`) {
          let n = e + t;
          return (r) => {
            let i = r.join(t);
            return i === e || i.startsWith(n);
          };
        }
        return e instanceof RegExp ? (n) => ((e.lastIndex = 0), e.test(n.join(t))) : () => !0;
      },
      a = (e, t) => (!e || !e.length ? null : e.map((e) => ({ ...e, filter: i(e.filter, t) }))),
      o = class e extends n {
        static connectTo(t, n) {
          return new e(n).connectTo(t);
        }
        constructor(e) {
          (super(),
            (this.objectStack = []),
            (this.keyStack = []),
            (this.current = this.key = null),
            (this.rule = null),
            (this.isArray = !1),
            (this.arrayIndex = -1),
            (this.done = !0),
            (this.reviver = !1));
          let t = e?.pathSeparator || `.`;
          ((this.objectRules = a(e?.objectRules, t)),
            (this.arrayRules = a(e?.arrayRules, t)),
            e &&
              ((this.reviver = typeof e.reviver == `function` && e.reviver),
              e.numberAsString && (this.numberValue = this.stringValue)),
            (this.tapChain = (e) => (this[e.name] && (this[e.name](e.value), this.done) ? this.current : r)));
        }
        connectTo(e) {
          return (
            e.on(`data`, (e) => {
              this[e.name] && (this[e.name](e.value), this.done && this.emit(`done`, this));
            }),
            this
          );
        }
        get depth() {
          return this.objectStack.length + +!this.done;
        }
        get path() {
          return this.keyStack.slice();
        }
        dropToLevel(e) {
          if (e < this.depth) {
            if (e > 0) {
              let t = e - 1,
                n = this.objectStack[t];
              ((this.current = n.container),
                (this.rule = n.rule),
                (this.isArray = n.isArray),
                (this.arrayIndex = n.arrayIndex),
                (this.key = null),
                (this.objectStack.length = t),
                (this.keyStack.length = t));
            } else
              ((this.objectStack.length = 0),
                (this.keyStack.length = 0),
                (this.current = this.key = null),
                (this.rule = null),
                (this.isArray = !1),
                (this.arrayIndex = -1),
                (this.done = !0));
          }
          return this;
        }
        consume(e) {
          return (this[e.name] && this[e.name](e.value), this);
        }
        keyValue(e) {
          this.key = e;
        }
        stringValue(e) {
          this._saveValue(e);
        }
        numberValue(e) {
          this._saveValue(parseFloat(e));
        }
        nullValue() {
          this._saveValue(null);
        }
        trueValue() {
          this._saveValue(!0);
        }
        falseValue() {
          this._saveValue(!1);
        }
        _matchRule(e) {
          if (!e) return null;
          for (let t of e) if (t.filter(this.keyStack)) return t;
          return null;
        }
        _pushState() {
          (this.objectStack.push({
            container: this.current,
            rule: this.rule,
            isArray: this.isArray,
            arrayIndex: this.arrayIndex,
          }),
            this.isArray
              ? (++this.arrayIndex, this.keyStack.push(this.arrayIndex))
              : this.keyStack.push(this.key));
        }
        startObject() {
          (this.done ? (this.done = !1) : this._pushState(),
            (this.rule = this._matchRule(this.objectRules)),
            (this.isArray = !1),
            (this.arrayIndex = -1),
            (this.current = this.rule ? this.rule.create(this.keyStack) : {}),
            (this.key = null));
        }
        startArray() {
          (this.done ? (this.done = !1) : this._pushState(),
            (this.rule = this._matchRule(this.arrayRules)),
            (this.isArray = !0),
            (this.arrayIndex = -1),
            (this.current = this.rule ? this.rule.create(this.keyStack) : []),
            (this.key = null));
        }
        endObject() {
          if (
            (this.rule && this.rule.finalize && (this.current = this.rule.finalize(this.current)),
            this.objectStack.length)
          ) {
            let e = this.current,
              t = this.objectStack.pop();
            ((this.key = this.keyStack.pop()),
              (this.current = t.container),
              (this.rule = t.rule),
              (this.isArray = t.isArray),
              (this.arrayIndex = t.arrayIndex),
              this._addToCurrent(e));
          } else
            (this.reviver && (this.current = this.reviver.call({ "": this.current }, ``, this.current)),
              (this.done = !0));
        }
        _saveValue(e) {
          if (this.done) {
            (this.reviver && (e = this.reviver.call({ "": e }, ``, e)), (this.current = e));
            return;
          }
          (this.isArray && ++this.arrayIndex, this._addToCurrent(e));
        }
        _addToCurrent(e) {
          if (this.isArray) {
            if (
              this.reviver &&
              ((e = this.reviver.call(this.current, String(this.arrayIndex), e)), e === void 0)
            )
              return;
            this.rule ? this.rule.add(this.current, e) : this.current.push(e);
          } else {
            if (this.reviver && ((e = this.reviver.call(this.current, this.key, e)), e === void 0)) {
              this.key = null;
              return;
            }
            (this.rule ? this.rule.add(this.current, this.key, e) : (this.current[this.key] = e),
              (this.key = null));
          }
        }
      };
    ((o.prototype.endArray = o.prototype.endObject),
      (t.exports = o),
      (t.exports.flexAssembler = (e) => new o(e)));
  }),
  _s = Math.min(268435456, Math.floor(v.constants.MAX_STRING_LENGTH / 2)),
  vs = Buffer.alloc(0),
  ys = new WeakSet(),
  bs = class extends f.Writable {
    options;
    currentLine = this.createLine();
    maxBufferedLineBytes;
    constructor(e) {
      (super(), (this.options = e), (this.maxBufferedLineBytes = e.maxBufferedLineBytes ?? _s));
    }
    _write(e, t, n) {
      this.consumeBuffer(e, 0, n);
    }
    _final(e) {
      if (
        this.currentLine.lineBytes > 0 ||
        this.currentLine.hasNonWhitespace ||
        this.currentLine.completedMessage != null ||
        this.currentLine.error != null
      ) {
        this.finishCurrentLine(e);
        return;
      }
      e();
    }
    _destroy(e, t) {
      (this.currentLine.parser?.destroy(), t(e));
    }
    getCurrentLineProgress() {
      return this.currentLine.progress;
    }
    consumeBuffer(e, t, n) {
      let r = t,
        i = () => {
          for (; r < e.length;) {
            let t = e.indexOf(10, r);
            if (t === -1) {
              this.appendLineChunk(this.currentLine, e.subarray(r), n);
              return;
            }
            let a = t + 1,
              o = this.currentLine;
            o.lineBytes += 1;
            let s = !1,
              c = !0;
            if (
              (this.appendLineChunk(o, e.subarray(r, t), () => {
                this.finishCurrentLine(() => {
                  if (c) {
                    s = !0;
                    return;
                  }
                  ((r = a), i());
                });
              }),
              (c = !1),
              !s)
            )
              return;
            r = a;
          }
          n();
        };
      i();
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
      };
    }
    appendLineChunk(e, t, n) {
      if (
        ((e.contentBytes += t.length),
        (e.lineBytes += t.length),
        t.length > 0 &&
          ((e.progress ??= { startedAtMs: Date.now(), bytesReceived: 0 }),
          (e.progress.bytesReceived = e.lineBytes)),
        this.trackNonWhitespace(e, t),
        e.error != null || t.length === 0)
      ) {
        n();
        return;
      }
      if (e.parser != null) {
        this.writeParserChunks(e, [t], n);
        return;
      }
      if ((e.bufferedChunks.push(t), e.contentBytes <= this.maxBufferedLineBytes)) {
        n();
        return;
      }
      let r = e.bufferedChunks;
      e.bufferedChunks = [];
      try {
        (this.createStreamingParser(e), this.writeParserChunks(e, r, n));
      } catch (t) {
        ((e.error = Cs(t)), (e.completedMessage = null), n());
      }
    }
    createStreamingParser(e) {
      let t = hs(),
        n = gs(),
        r = t.asStream({ jsonStreaming: !0, packValues: !0, streamValues: !1 });
      e.parser = r;
      let i = n.connectTo(r, {
        objectRules: [
          {
            filter: () => !0,
            create: () => ({}),
            add: (e, t, n) => {
              Object.defineProperty(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 });
            },
          },
        ],
        arrayRules: [
          {
            filter: () => !0,
            create: () => new es(this.options.arrayChunkBytes),
            add: (e, t) => {
              e.add(t);
            },
            finalize: (t) => {
              let n = t.finish();
              return (ts(n) && (e.hasChunkedArray = !0), n);
            },
          },
        ],
      });
      (i.on(`done`, () => {
        if (((e.parsedValueCount += 1), e.parsedValueCount > 1)) {
          ((e.error = Error(`App-server stdout line contained multiple JSON values`)),
            (e.completedMessage = null));
          return;
        }
        this.setCompletedMessage(e, i.current);
      }),
        r.on(`error`, (t) => {
          ((e.error = t),
            (e.completedMessage = null),
            e.finished && queueMicrotask(() => this.completeLine(e)));
        }));
    }
    writeParserChunks(e, t, n) {
      let r = e.parser;
      if (r == null) {
        n(Error(`Streaming parser was not initialized`));
        return;
      }
      let i = 0,
        a = !1,
        o = () => {
          a || ((a = !0), r.removeListener(`drain`, s), r.removeListener(`error`, o), n());
        },
        s = () => {
          for (r.removeListener(`drain`, s), r.removeListener(`error`, o); i < t.length && e.error == null;) {
            let n = t[i];
            ((t[i] = vs), (i += 1));
            let a;
            try {
              a = r.write(n);
            } catch (t) {
              ((e.error = Cs(t)), (e.completedMessage = null), o());
              return;
            }
            if (e.error != null) {
              o();
              return;
            }
            if (!a) {
              (r.once(`drain`, s), r.once(`error`, o));
              return;
            }
          }
          o();
        };
      s();
    }
    finishCurrentLine(e) {
      let t = this.currentLine;
      if (
        ((t.finished = !0),
        (t.finishCallback = () => {
          ((this.currentLine = this.createLine()), e());
        }),
        t.error != null)
      ) {
        (t.parser?.destroy(), this.completeLine(t));
        return;
      }
      if (t.parser == null) {
        (this.parseBufferedLine(t), this.completeLine(t));
        return;
      }
      try {
        t.parser.end(() => this.completeLine(t));
      } catch (e) {
        ((t.error = Cs(e)), (t.completedMessage = null), this.completeLine(t));
      }
    }
    parseBufferedLine(e) {
      if (e.hasNonWhitespace)
        try {
          let t =
            e.bufferedChunks.length === 1
              ? e.bufferedChunks[0]
              : Buffer.concat(e.bufferedChunks, e.contentBytes);
          this.setCompletedMessage(e, JSON.parse(t.toString(`utf8`)));
        } catch (t) {
          ((e.error = Cs(t)), (e.completedMessage = null));
        } finally {
          e.bufferedChunks = [];
        }
    }
    setCompletedMessage(e, t) {
      if (typeof t != `object` || !t || Array.isArray(t) || ts(t)) {
        ((e.error = Error(`App-server stdout line did not contain a JSON-RPC object`)),
          (e.completedMessage = null));
        return;
      }
      e.completedMessage = t;
    }
    completeLine(e) {
      if (e.settled) return;
      if (((e.settled = !0), e.error != null)) this.options.onError(e.error, e.lineBytes);
      else if (e.completedMessage != null) {
        (cs(e.completedMessage, e.lineBytes),
          `result` in e.completedMessage &&
            e.completedMessage.result != null &&
            typeof e.completedMessage.result == `object` &&
            cs(e.completedMessage.result, e.lineBytes),
          `params` in e.completedMessage &&
            e.completedMessage.params != null &&
            typeof e.completedMessage.params == `object` &&
            cs(e.completedMessage.params, e.lineBytes),
          e.hasChunkedArray && ys.add(e.completedMessage));
        let t = Date.now();
        (e.progress != null && ((e.progress.bytesReceived = e.lineBytes), (e.progress.receivedAtMs = t)),
          this.options.onMessage(e.completedMessage, e.lineBytes, {
            receiveStartedAtMs: e.progress?.startedAtMs ?? t,
            receivedAtMs: t,
          }));
      } else
        e.hasNonWhitespace &&
          this.options.onError(
            Error(`App-server stdout line did not contain a complete JSON value`),
            e.lineBytes,
          );
      let t = e.finishCallback;
      ((e.finishCallback = null), t?.());
    }
    trackNonWhitespace(e, t) {
      if (!e.hasNonWhitespace) {
        for (let n of t)
          if (n !== 32 && n !== 9 && n !== 13) {
            e.hasNonWhitespace = !0;
            return;
          }
      }
    }
  };
function xs(e) {
  return ys.has(e);
}
function Ss(e) {
  return xs(e) ? ns(e) : e;
}
function Cs(e) {
  return e instanceof Error ? e : Error(String(e));
}
var ws = class {
    options;
    parser;
    source = null;
    constructor(e) {
      ((this.options = e),
        (this.parser = new bs(e)),
        this.parser.once(`finish`, e.onFinish),
        this.parser.once(`error`, e.onStreamError));
    }
    attach(e) {
      if (((this.source = e), e == null)) {
        this.parser.end();
        return;
      }
      e.pipe(this.parser);
    }
    getCurrentLineProgress() {
      return this.parser.getCurrentLineProgress();
    }
    dispose() {
      (this.source?.unpipe(this.parser),
        (this.source = null),
        this.parser.removeListener(`finish`, this.options.onFinish),
        this.parser.removeListener(`error`, this.options.onStreamError),
        this.parser.destroy());
    }
  },
  Ts = (0, s.promisify)(p.execFile),
  Es = class {
    distro;
    marker = `codex-wsl-process-${(0, a.randomUUID)()}:`;
    decoder = new y.StringDecoder(`utf8`);
    pendingStderr = ``;
    processIdentity = null;
    constructor(e) {
      this.distro = e;
    }
    spawnArgs(e) {
      let t = e.at(-1);
      if (t == null) throw Error(`Missing WSL app-server launch command`);
      return [
        ...e.slice(0, -1),
        `set -m; /bin/bash -c ${ye([`read -r codex_process_stat < /proc/$$/stat; codex_process_stat=\${codex_process_stat##*) }; set -- $codex_process_stat; printf '${this.marker}%s:%s\\n' "$$" "\${20}" >&2; ${t}`])} <&0 & codex_process=$!; wait "$codex_process" 2>/dev/null`,
      ];
    }
    readStderr(e) {
      let t = this.decoder.write(e);
      if (this.processIdentity != null) return t;
      this.pendingStderr += t;
      let n = ``,
        r = this.pendingStderr.indexOf(`
`);
      for (; r !== -1;) {
        let e = this.pendingStderr.slice(0, r);
        this.pendingStderr = this.pendingStderr.slice(r + 1);
        let t = e.startsWith(this.marker) ? /^(\d+):(\d+)$/u.exec(e.slice(this.marker.length)) : null;
        (t == null ? (n += `${e}\n`) : (this.processIdentity = { pid: t[1], started: t[2] }),
          (r = this.pendingStderr.indexOf(`
`)));
      }
      return (
        (this.processIdentity != null || this.pendingStderr.length > 4096) &&
          ((n += this.pendingStderr), (this.pendingStderr = ``)),
        n
      );
    }
    async terminate(e) {
      if (this.processIdentity == null)
        throw Error(`WSL app-server did not report its Linux process identity`);
      let { pid: t, started: n } = this.processIdentity,
        r = De.resolve(`wsl.exe`, { env: e }) ?? `wsl.exe`,
        i = Xt({
          distro: this.distro,
          command: `read -r codex_process_stat < /proc/${t}/stat 2>/dev/null || exit 0; codex_process_stat=\${codex_process_stat##*) }; set -- $codex_process_stat; [ "\${20}" = '${n}' ] || exit 0; kill -KILL -- -${t} 2>/dev/null || ! kill -0 -- -${t} 2>/dev/null`,
        });
      try {
        await Ts(r, i, { env: e, timeout: 2e3, windowsHide: !0 });
      } catch {
        await Ts(r, i, { env: e, timeout: 2e3, windowsHide: !0 });
      }
    }
  },
  Ds = `Codex Desktop`,
  Os = [`-c`, `features.code_mode_host=true`],
  ks = [
    { configKey: `chatgpt_base_url`, envVar: `CODEX_APP_SERVER_CHATGPT_BASE_URL` },
    { configKey: `openai_base_url`, envVar: `CODEX_APP_SERVER_OPENAI_BASE_URL` },
  ],
  As = t.O({ appServerVersion: t.N() }),
  js = (0, s.promisify)(p.execFile),
  Ms = 200,
  Ns = 8,
  Ps = [100, 250, 500, 1e3, 2500, 5e3],
  Fs = [65536, 262144, 1048576],
  Is = 200,
  Ls = 8,
  Rs = 1024,
  zs = [`bin`, `wsl`],
  Bs = [`codex-resources`, `bwrap`],
  Vs = `CODEX_SQLITE_HOME="$HOME/.codex/sqlite"`,
  Hs = `CODEX_HOME`,
  Us = `WSLENV`,
  Ws = [
    `CODEX_APP_SERVER_LOGIN_ISSUER`,
    `CODEX_APP_SERVER_LOGIN_CLIENT_ID`,
    `CODEX_REFRESH_TOKEN_URL_OVERRIDE`,
    `CODEX_REVOKE_TOKEN_URL_OVERRIDE`,
  ],
  Gs = class {
    options;
    ioStatsTracker;
    readyState = Q.Connecting;
    onopen = null;
    onmessage = null;
    onMessageReceived = null;
    onerror = null;
    onclose = null;
    get processId() {
      return this.proc?.pid ?? null;
    }
    proc = null;
    closeEmitted = !1;
    processClosed = Promise.resolve();
    wslProcess;
    lastStderrMessage = null;
    processExit = null;
    stdoutMessageReader;
    stdoutParserFinished = !1;
    stdoutDispatchHandle = null;
    stdoutMessageQueue = new Cn({ compactionMinConsumedItems: Rs, depthThresholds: Ps });
    stdoutLineSizeTracker = new wn(Fs);
    logger = r.i(`StdioConnection`);
    constructor(e, t) {
      ((this.options = e),
        (this.ioStatsTracker = t),
        (this.wslProcess = e.wslDistro == null ? null : new Es(e.wslDistro)),
        (this.stdoutMessageReader = new ws({
          onError: (e, t) => {
            this.logger.error(`Failed to parse app-server stdout JSONL message`, {
              safe: { lineBytes: t },
              sensitive: { error: e },
            });
          },
          onMessage: (e, t, n) => {
            let r = new In(e, t, n);
            (this.onMessageReceived?.({ type: `message`, data: r }), this.enqueueStdoutMessage(r));
          },
          onFinish: this.onStdoutParserFinish,
          onStreamError: this.onStdoutParserError,
        })),
        this.spawnProcess());
    }
    send(e) {
      if (this.readyState !== Q.Open || !this.proc || !this.proc.stdin || this.proc.stdin.destroyed)
        throw new Ja(`Codex app-server process is not available`);
      let t = `${e}\n`;
      (this.ioStatsTracker.trackWritten(Buffer.byteLength(t, `utf8`)), this.proc.stdin.write(t));
    }
    getInboundMessageProgress() {
      return this.stdoutMessageReader.getCurrentLineProgress();
    }
    close() {
      if (this.readyState === Q.Closed) return;
      if (((this.readyState = Q.Closing), this.resetStdoutDispatchState(), !this.proc)) {
        ((this.readyState = Q.Closed),
          this.emitClose({ type: `close`, code: null, reason: null, signal: null }));
        return;
      }
      let e = this.proc;
      if (!e.killed && e.exitCode == null) {
        e.kill();
        return;
      }
      e.exitCode != null &&
        ((this.processExit ??= { code: e.exitCode, signal: e.signalCode }), this.finishProcessExitIfReady());
    }
    async closeGracefully() {
      let e = this.proc;
      if (e == null) return this.processClosed;
      this.readyState = Q.Closing;
      let t,
        n = new Promise((e) => {
          t = setTimeout(() => e(`deadline`), 2e3);
        });
      try {
        (e.stdin?.end(),
          (await Promise.race([this.processClosed, n])) === `deadline` &&
            (this.wslProcess == null ? e.kill(`SIGKILL`) : await this.wslProcess.terminate(this.options.env),
            await this.processClosed));
      } catch (t) {
        throw this.wslProcess == null ? (e.kill(`SIGKILL`), await this.processClosed, t) : t;
      } finally {
        clearTimeout(t);
      }
    }
    spawnProcess() {
      let e = this.options.spawnCommand ?? this.options.executablePath,
        t = De.resolve(e, { env: this.options.env }) ?? e,
        n = this.options.spawnArgs ?? this.options.args,
        r = (0, p.spawn)(t, this.wslProcess == null ? n : this.wslProcess.spawnArgs(n), {
          stdio: [`pipe`, `pipe`, `pipe`],
          env: this.options.env,
          cwd: this.options.cwd,
        });
      if (!r.pid) throw Error(`Failed to spawn Codex CLI at ${this.options.executablePath}`);
      let i = Be();
      (this.logger.info(`stdio_transport_spawned`, {
        safe: {
          executablePath: this.options.executablePath,
          argsCount: this.options.args.length,
          coreRuntimeInUse: process.platform === `win32` && i != null && t === (0, l.join)(i, `codex.exe`),
          spawnCommand: this.options.spawnCommand ?? this.options.executablePath,
          pid: r.pid,
        },
        sensitive: {},
      }),
        (this.proc = r),
        (this.processClosed = new Promise((e) => {
          r.once(`close`, () => e());
        })),
        (this.lastStderrMessage = null),
        (this.processExit = null),
        (this.stdoutParserFinished = !1),
        (this.readyState = Q.Open),
        queueMicrotask(() => {
          this.onopen?.({ type: `open` });
        }),
        r.on(`error`, this.onProcessError),
        r.on(`exit`, this.onProcessExit),
        r.stderr && r.stderr.on(`data`, this.onStderrData),
        r.stdout && r.stdout.on(`data`, this.onStdoutData),
        this.stdoutMessageReader.attach(r.stdout),
        r.stdin && r.stdin.on(`error`, this.onStdinError));
    }
    onProcessError = (e) => {
      this.onerror?.({ type: `error`, error: e, message: e.message });
    };
    onProcessExit = (e, t) => {
      ((this.processExit = { code: e, signal: t }), this.finishProcessExitIfReady());
    };
    finishProcessExitIfReady() {
      if (!this.stdoutParserFinished || this.processExit == null) return;
      let { code: e, signal: t } = this.processExit;
      (this.flushPendingStdoutLines(),
        this.cleanupProcessListeners(),
        this.resetStdoutDispatchState(),
        (this.proc = null),
        (this.readyState = Q.Closed),
        this.emitClose({
          type: `close`,
          code: e,
          reason: this.lastStderrMessage,
          signal: t,
          wasClean: e === 0,
        }));
    }
    onStdoutData = (e) => {
      this.ioStatsTracker.trackRead(typeof e == `string` ? Buffer.byteLength(e, `utf8`) : e.length);
    };
    onStdoutParserFinish = () => {
      ((this.stdoutParserFinished = !0), this.flushPendingStdoutLines(), this.finishProcessExitIfReady());
    };
    onStdoutParserError = (e) => {
      (this.onerror?.({ type: `error`, error: e, message: e.message }),
        (this.stdoutParserFinished = !0),
        this.finishProcessExitIfReady());
    };
    onStderrData = (e) => {
      let t = (this.wslProcess?.readStderr(e) ?? e.toString()).trim();
      t && ((this.lastStderrMessage = t), this.onerror?.({ type: `error`, message: t }));
    };
    onStdinError = (e) => {
      this.onerror?.({ type: `error`, error: e, message: e.message });
    };
    cleanupProcessListeners() {
      let e = this.proc;
      e &&
        (e.removeListener(`error`, this.onProcessError),
        e.removeListener(`exit`, this.onProcessExit),
        e.stderr && e.stderr.removeListener(`data`, this.onStderrData),
        e.stdout && e.stdout.removeListener(`data`, this.onStdoutData),
        e.stdin && e.stdin.removeListener(`error`, this.onStdinError),
        this.stdoutMessageReader.dispose());
    }
    emitClose(e) {
      this.closeEmitted || ((this.closeEmitted = !0), this.onclose?.(e));
    }
    enqueueStdoutMessage(e) {
      let t = this.stdoutLineSizeTracker.track(e.lineBytes);
      for (let e of t)
        this.logger.trace(`stdio_stdout_line_size_threshold`, {
          safe: {
            threshold: e.threshold,
            lineBytes: e.sizeBytes,
            lineBytesHighWaterMark: e.sizeBytesHighWaterMark,
          },
          sensitive: {},
        });
      let n = this.stdoutMessageQueue.enqueue(e);
      for (let e of n)
        this.logger.trace(`stdio_stdout_queue_depth_threshold`, {
          safe: {
            threshold: e.threshold,
            queueDepth: e.queueDepth,
            queueDepthHighWaterMark: e.queueDepthHighWaterMark,
          },
          sensitive: {},
        });
      this.scheduleStdoutDispatch();
    }
    scheduleStdoutDispatch() {
      this.stdoutDispatchHandle ||= setImmediate(() => {
        ((this.stdoutDispatchHandle = null), this.dispatchPendingStdoutLines(!1));
      });
    }
    flushPendingStdoutLines() {
      this.dispatchPendingStdoutLines(!0);
    }
    dispatchPendingStdoutLines(e) {
      if (this.stdoutMessageQueue.getDepth() === 0) return;
      let t = this.stdoutMessageQueue.drain({
        flushAll: e,
        maxItemsPerSlice: Ms,
        maxSliceMs: Ns,
        onItem: (e) => {
          this.onmessage?.({ type: `message`, data: e });
        },
      });
      if (
        ((t.durationMs >= Ls || t.remainingCount >= Is) &&
          this.logger.debug(`stdio_stdout_dispatch_slice`, {
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
        t.queueDepthHighWaterMark >= Ps[0] &&
          this.logger.debug(`stdio_stdout_queue_drained`, {
            safe: { queueDepthHighWaterMark: t.queueDepthHighWaterMark },
            sensitive: {},
          });
        return;
      }
      e || this.scheduleStdoutDispatch();
    }
    resetStdoutDispatchState() {
      ((this.stdoutDispatchHandle &&= (clearImmediate(this.stdoutDispatchHandle), null)),
        this.stdoutMessageQueue.clear());
    }
  },
  Ks = class {
    options;
    kind = `stdio`;
    ioStatsTracker = new eo();
    constructor(e) {
      this.options = e;
    }
    supportsReconnect() {
      return this.kind === `websocket`;
    }
    async connect() {
      let e = this.options.hostConfig.kind === `local` ? await this.options.getConfigOverrides?.() : void 0,
        t = await Ys(this.options, e);
      if (!t)
        throw Error(
          `Unable to locate the Codex CLI binary or required runtime components. Check the installation or explicit runtime overrides.`,
        );
      let n = (0, l.join)(bn(), `app-server-control`, `app-server-control.sock`);
      return process.platform !== `win32` &&
        !e?.length &&
        this.options.hostConfig.kind === `local` &&
        process.env.CODEX_APP_SERVER_USE_LOCAL_DAEMON === `1` &&
        process.env.CODEX_APP_SERVER_FORCE_CLI !== `1` &&
        !process.env.CODEX_CLI_PATH?.trim() &&
        this.options.hostConfig.codex_cli_command == null &&
        Xs(this.options.resourcesPath) == null &&
        (await qs(t))
        ? ((this.kind = `websocket`),
          new Jo({
            hostConfig: this.options.hostConfig,
            websocketUrl: `ws://localhost/rpc`,
            createConnection: () => (0, m.createConnection)(n),
          }).connect())
        : ((this.kind = `stdio`), new Gs(t, this.ioStatsTracker));
    }
    getIoStatsSnapshot() {
      return this.ioStatsTracker.getSnapshot();
    }
  };
async function qs(e) {
  try {
    let { stdout: t } = await js(e.executablePath, [`app-server`, `daemon`, `version`], {
        encoding: `utf8`,
        env: e.env,
        timeout: 2500,
      }),
      { appServerVersion: n } = As.parse(JSON.parse(t));
    return N(n);
  } catch {
    return !1;
  }
}
function Js(e, t = []) {
  if (process.platform === `win32` && e.hostConfig.kind === `local` && (e.spawnInsideWsl ?? Lt()))
    return Zs(e, t);
  let r = tc({ hostConfig: e.hostConfig, repoRoot: e.repoRoot, resourcesPath: e.resourcesPath });
  if (
    (e.hostConfig.kind === `local` &&
      U({
        component: `codex`,
        consumer: `app-server`,
        executablePath: r?.executablePath ?? null,
        source: r?.source,
      }),
    !r)
  )
    return null;
  let i = Be(),
    a =
      process.platform === `win32` &&
      e.hostConfig.kind === `local` &&
      r.source !== `override` &&
      i != null &&
      r.executablePath === (0, l.join)(i, `codex.exe`),
    o = {
      ...process.env,
      LOG_FORMAT: `json`,
      RUST_LOG: process.env.RUST_LOG ?? `warn`,
      CODEX_INTERNAL_ORIGINATOR_OVERRIDE: e.defaultOriginator ?? Ds,
    };
  if (
    (a || delete o.CODEX_WINDOWS_REGISTERED_CORE,
    (e.hostConfig.kind !== `local` ||
      r.source === `override` ||
      (o.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY != null && r.executablePath !== Xe(e.resourcesPath))) &&
      delete o.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY,
    e.hostConfig.kind === `local`)
  ) {
    e.hostConfig.codex_cli_command?.length || (o.CODEX_CLI_PATH = r.executablePath);
    let t = Ge(e.resourcesPath);
    if (process.platform === `win32` && Be() != null && t == null) return null;
    t != null && (o.CODEX_MCP_NODE_PATH = t);
  }
  let s = Ri();
  Cc(s) && V(o, ac(B(o), s));
  let c = zi();
  (Cc(c) && V(o, oc(B(o), c)), Vi(o));
  let u = e.hostConfig.kind === `local` ? Xs(e.resourcesPath) : null;
  if (u != null) {
    let e = o.CODEX_PREFERRED_GIT_EXECUTABLE?.trim() || u;
    V(o, ac(ac(B(o), (0, l.dirname)(u)), (0, l.dirname)(e)));
  }
  let d = Ue(e.resourcesPath);
  (d != null && V(o, ic(B(o), (0, l.dirname)(d))), r.binDirectory && V(o, ic(B(o), r.binDirectory)));
  let f = n.Ki(e.hostConfig) ? fc(o) : o;
  return {
    executablePath: r.executablePath,
    args: [
      ...r.args,
      ...t.flatMap((e) => [`-c`, e]),
      ...(a ? [`-c`, `features.windows_sandbox_service=true`] : []),
    ],
    env: G(f),
    cwd: e.hostConfig.kind === `local` ? r.cwd : void 0,
  };
}
async function Ys(e, t = []) {
  if (process.platform === `win32` && e.hostConfig.kind === `local` && (e.spawnInsideWsl ?? Lt())) {
    let n = await Bt();
    return n == null ? null : Qs(e, n, await Yt(n), t);
  }
  let n = Js(e, t);
  return n != null ||
    process.platform !== `win32` ||
    e.hostConfig.kind !== `local` ||
    e.hostConfig.codex_cli_command?.length ||
    $s()
    ? n
    : (await new Promise((e) => setTimeout(e, 100)), Js(e, t));
}
function Xs(e) {
  if (e == null || process.platform !== `darwin`) return null;
  let t = (0, l.join)(e, `git`, `bin`, `git`);
  return wc(t) ? t : null;
}
function Zs(e, t) {
  let n = zt();
  return n == null ? null : Qs(e, n, Jt(n), t);
}
function Qs(e, t, n, r) {
  let i = bn(),
    a = nc({ ...e, windowsCodexHome: i });
  if (!a) return null;
  let o = [...a.args, ...r.flatMap((e) => [`-c`, e])],
    s = xc({ resourcesPath: e.resourcesPath, executableName: `rg`, windowsCodexHome: i }),
    c = s == null ? void 0 : (0, l.dirname)(s),
    u = Array.from(new Set([a.binDirectory, c].filter((e) => e != null))),
    d = Xt({
      distro: t,
      cwd: e.repoRoot.trim().length > 0 ? R(e.repoRoot) : `.`,
      command: lc({ pathEntries: u, interactivePath: n, executablePath: a.executablePath, cliArgs: o }),
    }),
    f = dc({
      windowsCodexHome: i,
      defaultOriginator: e.defaultOriginator ?? Ds,
      cliBinDirectory: a.binDirectory,
      repoRoot: e.repoRoot,
    });
  return {
    executablePath: a.executablePath,
    args: o,
    env: f,
    spawnCommand: `wsl.exe`,
    spawnArgs: d,
    wslDistro: t,
  };
}
function $s() {
  let e = yc();
  return e ? Ga(e) != null || bc() != null : !1;
}
function ec(e, t) {
  let n = [],
    r = yc();
  if (r) {
    let e = Ga(r);
    if (e) return { executablePath: e, binDirectory: (0, l.dirname)(e), source: `override` };
  }
  let i = process.platform === `win32` ? `codex.exe` : `codex`;
  if (process.platform === `win32` && Be() != null) {
    let e = Xe(t?.resourcesPath);
    return e == null ? null : { executablePath: e, binDirectory: (0, l.dirname)(e) };
  }
  if (t?.resourcesPath) {
    let e = Xe(t.resourcesPath);
    if (e != null) {
      let n = Ga(e);
      if (n != null) {
        let r =
          process.platform === `win32` &&
          e !== (0, l.join)(t.resourcesPath, i) &&
          (0, l.relative)((0, l.dirname)(t.resourcesPath), process.cwd()) === ``
            ? (0, l.dirname)(n)
            : void 0;
        return { executablePath: n, binDirectory: (0, l.dirname)(n), cwd: r };
      }
    }
    n.push((0, l.join)(t.resourcesPath, `app.asar.unpacked`, i));
  }
  e && n.push((0, l.join)(e, ...Sn(), i));
  for (let e of n) {
    let t = Ga(e);
    if (t) return { executablePath: t, binDirectory: (0, l.dirname)(t) };
  }
  return null;
}
function tc(e) {
  let t = e.hostConfig.codex_cli_command;
  if (t && t.length > 0) {
    let [e, ...n] = t;
    return !e || e.trim().length === 0 ? null : { executablePath: e, args: n, source: `override` };
  }
  let n = bc();
  if (n != null) return { executablePath: n, args: rc(), source: `override` };
  let r = ec(e.repoRoot, { resourcesPath: e.resourcesPath });
  return r
    ? {
        executablePath: r.executablePath,
        args: rc(),
        binDirectory: r.binDirectory,
        cwd: r.cwd,
        source: r.source,
      }
    : null;
}
function nc(e) {
  let t = e.hostConfig.codex_cli_command;
  if (t && t.length > 0) {
    let [e, ...n] = t;
    if (!e || e.trim().length === 0) return null;
    let r;
    if (Tc(e) && (0, c.existsSync)(e)) {
      let t = vc(e);
      t && (r = (0, l.dirname)(t));
    }
    return { executablePath: e, args: n, binDirectory: r };
  }
  let n = bc();
  if (n != null) return { executablePath: n, args: rc() };
  let r = _c(e.repoRoot, { resourcesPath: e.resourcesPath, windowsCodexHome: e.windowsCodexHome });
  return r ? { executablePath: r.executablePath, args: rc(), binDirectory: r.binDirectory } : null;
}
function rc() {
  let e = ks.flatMap(({ configKey: e, envVar: t }) => {
    let n = process.env[t]?.trim();
    return n == null || n === `` ? [] : [`-c`, `${e}=${JSON.stringify(n)}`];
  });
  return e.length === 0
    ? [...Os, `app-server`, `--analytics-default-enabled`]
    : [`app-server`, ...Os, ...e, `--analytics-default-enabled`];
}
function ic(e, t) {
  let n = process.platform === `win32` ? `;` : `:`,
    r = e ?? ``;
  return r.split(n).includes(t) ? r : `${r}${r ? n : ``}${t}`;
}
function ac(e, t) {
  let n = process.platform === `win32` ? `;` : `:`,
    r = e ?? ``;
  return r.length === 0 ? t : [t, ...r.split(n).filter((e) => !sc(e, t))].join(n);
}
function oc(e, t) {
  let n = process.platform === `win32` ? `;` : `:`,
    r = e ?? ``;
  return r.length === 0 ? t : [...r.split(n).filter((e) => !sc(e, t)), t].join(n);
}
function sc(e, t) {
  return process.platform === `win32` ? cc(e) === cc(t) : e === t;
}
function cc(e) {
  return e.replace(/[\\/]+$/u, ``).toLowerCase();
}
function lc(e) {
  let t = [uc(e.executablePath), ye(e.cliArgs)].filter((e) => e.length > 0).join(` `),
    n = [...e.pathEntries.map(uc), e.interactivePath == null ? null : ye([e.interactivePath])].filter(
      (e) => e != null,
    );
  return n.length === 0
    ? `${Vs} exec ${t}`
    : `PATH=${e.interactivePath == null ? `${n.join(`:`)}:$PATH` : n.join(`:`)} ${Vs} exec ${t}`;
}
function uc(e) {
  return fe(e) && !pe(e) ? `"$(wslpath -u ${ye([e])})"` : ye([Dc(e)]);
}
function dc(e) {
  let t = {
    ...process.env,
    CODEX_HOME: e.windowsCodexHome,
    LOG_FORMAT: `json`,
    RUST_LOG: process.env.RUST_LOG ?? `warn`,
    CODEX_INTERNAL_ORIGINATOR_OVERRIDE: e.defaultOriginator,
    WSLENV: qt(process.env.WSLENV, [
      ...Ft,
      ...Ws,
      { name: `CODEX_HOME`, type: `path` },
      `LOG_FORMAT`,
      `RUST_LOG`,
      `CODEX_INTERNAL_ORIGINATOR_OVERRIDE`,
      `CODEX_APP_TOOLS_PIPE_PATH`,
    ]),
  };
  (delete t.CODEX_WINDOWS_REGISTERED_CORE, delete t.CODEX_WINDOWS_SANDBOX_PACKAGE_FAMILY);
  let n = B(t);
  return (n != null && V(t, mc(n, e)), G(t));
}
function fc(e) {
  let t = { ...e },
    n = !1;
  for (let e of Object.keys(t)) {
    let r = e.toUpperCase();
    r === Hs ? ((t[e] = void 0), (n = !0)) : r === Us && (t[e] = pc(t[e] ?? ``));
  }
  return (n || (t[Hs] = void 0), t);
}
function pc(e) {
  return e
    .split(`:`)
    .filter((e) => e.trim().split(`/`, 1)[0]?.toUpperCase() !== Hs)
    .join(`:`);
}
function mc(e, t) {
  let n = t.repoRoot ? (0, l.join)(t.repoRoot, `node_modules`, `.bin`) : null;
  return e
    .split(`;`)
    .filter((e) => hc(e, { cliBinDirectory: t.cliBinDirectory, repoNodeModulesBin: n }))
    .join(`;`);
}
function hc(e, t) {
  let n = gc(e);
  return !(
    n.length === 0 ||
    n === `.\\node_modules\\.bin` ||
    n === `./node_modules/.bin` ||
    n.includes(`\\.codex\\tmp\\arg0\\codex-arg0`) ||
    n.includes(`\\node_modules\\@openai\\codex\\node_modules\\@openai\\codex-win32-x64\\vendor\\`) ||
    (t.cliBinDirectory != null && n === gc(t.cliBinDirectory)) ||
    (t.repoNodeModulesBin != null && n === gc(t.repoNodeModulesBin))
  );
}
function gc(e) {
  return e.trim().replace(/\//g, `\\`).replace(/\\+$/, ``).toLowerCase();
}
function _c(e, t) {
  let n = [],
    r = yc();
  if (r) {
    let e = vc(r);
    e && n.push(e);
  }
  if (t.resourcesPath) {
    let e = xc({
      resourcesPath: t.resourcesPath,
      executableName: `codex`,
      windowsCodexHome: t.windowsCodexHome,
    });
    (e != null && (Sc({ resourcesPath: t.resourcesPath, windowsCodexHome: t.windowsCodexHome }), n.push(e)),
      n.push((0, l.join)(t.resourcesPath, `app.asar.unpacked`, `codex`)),
      n.push((0, l.join)(t.resourcesPath, `codex-linux`)));
  }
  e && n.push((0, l.join)(e, ...Sn(), `codex`));
  for (let e of n) {
    let t = vc(e);
    if (t) return { executablePath: t, binDirectory: (0, l.dirname)(t) };
  }
  return null;
}
function vc(e) {
  if (!e || !(0, c.existsSync)(e)) return null;
  let t = Cc(e) ? (0, l.join)(e, `codex`) : e;
  return (0, c.existsSync)(t) && wc(t) ? t : null;
}
function yc() {
  let e = process.env.CODEX_CLI_PATH;
  if (e == null) return null;
  let t = e.trim();
  return t.length === 0 ? null : t;
}
function bc() {
  let e = yc();
  return e == null || Tc(e) ? null : e;
}
function xc(e) {
  return He({
    resourcesPath: e.resourcesPath,
    executableName: e.executableName,
    windowsSiblingExecutableNames: e.executableName === `codex` ? [`codex-code-mode-host`] : [],
    windowsDestinationPath: (0, l.join)(e.windowsCodexHome, ...zs, e.executableName),
  });
}
function Sc(e) {
  He({
    resourcesPath: (0, l.join)(e.resourcesPath, `codex-resources`),
    executableName: `bwrap`,
    windowsDestinationPath: (0, l.join)(e.windowsCodexHome, ...zs, ...Bs),
  });
}
function Cc(e) {
  try {
    return (0, c.statSync)(e).isDirectory();
  } catch {
    return !1;
  }
}
function wc(e) {
  try {
    return (0, c.statSync)(e).isFile();
  } catch {
    return !1;
  }
}
function Tc(e) {
  return /[\\/]/.test(e) || /^[a-zA-Z]:/.test(e);
}
function Ec(e) {
  return !e.startsWith(`/`) && Tc(e);
}
function Dc(e) {
  return Ec(e) ? R(e) : e;
}
var Oc = [`client`, `router`],
  kc = [
    `snapshot`,
    `patches`,
    `follower_coordination`,
    `other_request`,
    `other_response`,
    `other_broadcast`,
    `unknown`,
  ],
  Ac = new (class {
    now;
    connections = new Map();
    totals = {};
    constructor(e = () => b.performance.now()) {
      this.now = e;
      for (let e of Oc) {
        for (let t of [
          `rx_announced_frames_total`,
          `rx_announced_bytes_total`,
          `rx_frame_bytes_max`,
          `rx_failures_total`,
          `rx_abandoned_frames_total`,
          `rx_decode_ms_total`,
          `rx_decode_chunk_ms_max`,
          `tx_frames_total`,
          `tx_bytes_total`,
          `tx_frame_bytes_max`,
          `tx_backpressure_total`,
          `tx_write_failures_total`,
          `tx_abandoned_frames_total`,
          `tx_abandoned_bytes_total`,
          `tx_socket_pending_bytes_max`,
          `tx_socket_writable_bytes_max`,
        ])
          this.totals[`main_ipc_${e}_${t}`] = 0;
        for (let t of kc)
          for (let n of [`frames_total`, `bytes_total`, `bytes_max`])
            this.totals[`main_ipc_${e}_rx_${t}_${n}`] = 0;
      }
    }
    attach(e, t) {
      let n = {
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
      };
      this.connections.set(e, n);
      let r = `main_ipc_${t}_rx_`,
        i = () => {
          if (!n.decoding) return;
          let e = Math.max(0, this.now() - n.decodeStartedAtMs);
          ((this.totals[`${r}decode_ms_total`] += e),
            (this.totals[`${r}decode_chunk_ms_max`] = Math.max(this.totals[`${r}decode_chunk_ms_max`], e)),
            (n.decoding = !1));
        },
        a = () => {
          n.closed ||
            (i(),
            n.active && (this.totals[`${r}abandoned_frames_total`] += 1),
            (this.totals[`main_ipc_${t}_tx_abandoned_frames_total`] += n.pendingWrites),
            (this.totals[`main_ipc_${t}_tx_abandoned_bytes_total`] += n.pendingWriteBytes),
            (n.closed = !0),
            this.connections.delete(e),
            e.off(`close`, a),
            e.off(`error`, a));
        };
      return (
        e.on(`close`, a),
        e.on(`error`, a),
        {
          begin: (e) => {
            n.closed ||
              ((n.active = !0),
              (n.announcedBytes = e),
              (n.receivedBytes = 0),
              (n.startedAtMs = this.now()),
              (this.totals[`${r}announced_frames_total`] += 1),
              (this.totals[`${r}announced_bytes_total`] += e),
              (this.totals[`${r}frame_bytes_max`] = Math.max(this.totals[`${r}frame_bytes_max`], e)));
          },
          decode: (e) => {
            n.closed || ((n.receivedBytes += e), (n.decoding = !0), (n.decodeStartedAtMs = this.now()));
          },
          endDecode: i,
          complete: (e) => {
            if (n.closed) return;
            i();
            let t = jc(e);
            ((this.totals[`${r}${t}_frames_total`] += 1),
              (this.totals[`${r}${t}_bytes_total`] += n.announcedBytes),
              (this.totals[`${r}${t}_bytes_max`] = Math.max(
                this.totals[`${r}${t}_bytes_max`],
                n.announcedBytes,
              )),
              (n.active = !1));
          },
          fail: () => {
            n.closed || ((this.totals[`${r}failures_total`] += 1), a());
          },
          close: a,
        }
      );
    }
    beginWrite(e, t) {
      let n = this.connections.get(e);
      if (!n) return;
      let r = `main_ipc_${n.role}_tx_`;
      ((n.pendingWrites += 1),
        (n.pendingWriteBytes += t),
        (this.totals[`${r}frames_total`] += 1),
        (this.totals[`${r}bytes_total`] += t),
        (this.totals[`${r}frame_bytes_max`] = Math.max(this.totals[`${r}frame_bytes_max`], t)),
        (this.totals[`${r}socket_pending_bytes_max`] = Math.max(
          this.totals[`${r}socket_pending_bytes_max`],
          n.pendingWriteBytes,
        )));
      let i = !1;
      return (e) => {
        i ||
          n.closed ||
          ((i = !0),
          --n.pendingWrites,
          (n.pendingWriteBytes -= t),
          e != null && (this.totals[`${r}write_failures_total`] += 1));
      };
    }
    wrote(e, t) {
      let n = this.connections.get(e);
      if (!n) return;
      let r = `main_ipc_${n.role}_tx_`;
      (t || (this.totals[`${r}backpressure_total`] += 1),
        (this.totals[`${r}socket_writable_bytes_max`] = Math.max(
          this.totals[`${r}socket_writable_bytes_max`],
          e.writableLength,
        )));
    }
    snapshot() {
      let e = { ...this.totals },
        t = this.now();
      e.main_ipc_sample_monotonic_ms = t;
      for (let t of Oc) {
        let n = `main_ipc_${t}_`;
        for (let t of [
          `connections`,
          `rx_active_frames`,
          `rx_active_announced_bytes`,
          `rx_active_received_bytes`,
          `rx_oldest_active_ms`,
          `rx_decoding_frames`,
          `tx_pending_frames`,
          `tx_pending_bytes`,
          `tx_writable_bytes`,
        ])
          e[`${n}${t}`] = 0;
      }
      for (let n of this.connections.values()) {
        let r = `main_ipc_${n.role}_`;
        ((e[`${r}connections`] += 1),
          n.active &&
            ((e[`${r}rx_active_frames`] += 1),
            (e[`${r}rx_active_announced_bytes`] += n.announcedBytes),
            (e[`${r}rx_active_received_bytes`] += n.receivedBytes),
            (e[`${r}rx_oldest_active_ms`] = Math.max(e[`${r}rx_oldest_active_ms`], t - n.startedAtMs))),
          n.decoding && (e[`${r}rx_decoding_frames`] += 1),
          (e[`${r}tx_pending_frames`] += n.pendingWrites),
          (e[`${r}tx_pending_bytes`] += n.pendingWriteBytes),
          (e[`${r}tx_writable_bytes`] += n.socket.writableLength));
      }
      return e;
    }
  })();
function jc(e) {
  if (e?.type === `request`) return `other_request`;
  if (e?.type === `response`) return `other_response`;
  if (e?.type !== `broadcast`) return `unknown`;
  if (e.method === `thread-stream-state-changed`) {
    let t = e.params?.change?.type;
    return t === `snapshot` || t === `patches` ? t : `unknown`;
  }
  return e.method === `thread-stream-following-changed` ||
    e.method === `thread-stream-following-status-requested`
    ? `follower_coordination`
    : `other_broadcast`;
}
var Mc = 268435456,
  Nc = 1024,
  Pc = r.a(`ipc`);
function Fc() {
  if (process.platform === `win32`) return l.join(`\\\\.\\pipe`, `codex-ipc`);
  let e = l.join(bn(), `ipc`);
  c.mkdirSync(e, { mode: 448, recursive: !0 });
  let t = c.lstatSync(e),
    n = process.getuid?.();
  if (n == null || !t.isDirectory() || t.uid !== n)
    throw Error(`Codex IPC directory is not owned by the current user`);
  return (c.chmodSync(e, 448), l.join(e, `ipc.sock`));
}
function Ic() {
  let e = process.getuid?.();
  return l.join(u.tmpdir(), `codex-ipc`, e ? `ipc-${e}.sock` : `ipc.sock`);
}
function Lc(e, t) {
  try {
    let n = c.lstatSync(e);
    return n.isSocket() && n.uid === t;
  } catch {
    return !1;
  }
}
function Rc(e) {
  let t = process.getuid?.();
  if (t == null) return !1;
  try {
    let n = c.lstatSync(l.dirname(e)),
      r = !!(n.mode & 18);
    return Lc(e, t) && n.isDirectory() && n.uid === t && !r;
  } catch {
    return !1;
  }
}
function zc(e) {
  let t = process.getuid?.();
  t != null && Lc(e, t) && c.unlinkSync(e);
}
function Bc(e) {
  if (process.platform === `win32`) return;
  let t = process.getuid?.();
  if (t == null || !Lc(e, t)) throw Error(`Codex IPC socket is not owned by the current user`);
  c.chmodSync(e, 384);
}
function Vc(e, t, n, r, i) {
  let a = i == null ? void 0 : Ac.attach(e, i),
    o = Buffer.allocUnsafe(4),
    s = new y.StringDecoder(`utf8`),
    c = 0,
    l = 0,
    u = 0,
    d = ``,
    f = ``,
    p = 0,
    m = (t, i) => {
      a?.fail();
      let o = t instanceof Error ? t : Error(String(t));
      try {
        (r.reportNonFatal(o, { kind: `ipc-attachMessageReader`, extra: i }), n(o));
      } catch {
      } finally {
        ((d = ``), (f = ``), s.end(), e.off(`data`, h), e.destroy());
      }
    },
    h = (e) => {
      if (e.length === 0) return;
      let n = 0;
      for (; n < e.length;) {
        if (l === 0) {
          let t = Math.min(o.length - c, e.length - n);
          if ((e.copy(o, c, n, n + t), (c += t), (n += t), c < o.length)) return;
          if (((l = o.readUInt32LE(0)), (c = 0), l === 0 || l > 268435456)) {
            m(Error(`[IPC] Invalid frame length (${l} bytes)`));
            return;
          }
          a?.begin(l);
        }
        let r = Math.min(l - u, e.length - n);
        if (r === 0) return;
        let i = e.subarray(n, n + r);
        ((u += r), (n += r));
        let h;
        a?.decode(r);
        try {
          if (u < l) {
            ((f += s.write(i)),
              (p += 1),
              p === Nc && ((d += Buffer.from(f, `utf8`).toString(`utf8`)), (f = ``), (p = 0)),
              a?.endDecode());
            return;
          }
          l = 0;
          let e = u === r ? i.toString(`utf8`) : d + f + s.end(i);
          ((u = 0), (d = ``), (f = ``), (p = 0), (h = JSON.parse(e)), a?.complete(h));
        } catch (e) {
          m(e);
          return;
        }
        try {
          t(h);
        } catch (e) {
          m(e);
          return;
        }
      }
    };
  return (
    e.on(`data`, h),
    () => {
      (a?.close(), (d = ``), (f = ``), s.end(), e.off(`data`, h));
    }
  );
}
function Hc(e, t, n) {
  let r = n ?? Wc(t);
  Pc().trace(`Write message`, { safe: { frameBytes: r.length }, sensitive: {} });
  let i = Ac.beginWrite(e, r.length);
  try {
    let t = e.write(r, i);
    Ac.wrote(e, t);
  } catch (e) {
    throw (i?.(Error(`IPC write failed`)), e);
  }
}
function Uc(e) {
  let t = Buffer.byteLength(e, `utf8`),
    n = Buffer.alloc(4 + t);
  return (n.writeUInt32LE(t, 0), n.write(e, 4, `utf8`), n);
}
function Wc(e) {
  return Uc(JSON.stringify(e));
}
var Gc = e.r({
    CODEX_SHELL_ENV_KEY: () => n.D,
    StartupApplicationConfigurationError: () => Xc,
    StartupApplicationRequirementsError: () => Yc,
    getLogger: () => r.r,
    prepareStartupApplicationRequirements: () => Zc,
    readStartupApplicationRequirements: () => Qc,
  }),
  Kc = t.O({ userAgent: t.N() }),
  qc = t.O({
    data: t.O({
      reason: t.d([`cloudRequirements`, `cloudConfigBundle`]),
      errorCode: t.d([`Timeout`, `RequestFailed`]),
      statusCode: t.D().int().optional(),
    }),
  }),
  Jc = t.O({
    summary: t.w(`Invalid configuration; using defaults.`),
    details: t.N().nullish(),
    path: t.N().nullish(),
    range: t.O({ start: t.O({ line: t.D().int().positive(), column: t.D().int().positive() }) }).nullish(),
  }),
  Yc = class extends Error {
    reason;
    constructor(e, t) {
      (super(`App server could not read application network requirements.`, { cause: t }), (this.reason = e));
    }
    get retryable() {
      return this.reason === `timeout` || this.reason === `transport`;
    }
  },
  Xc = class extends Yc {
    configError;
    constructor(e) {
      (super(`config`), (this.configError = e));
    }
  };
async function Zc(e) {
  let t = await Ys(e);
  if (t == null) throw new Yc(`unavailable`);
  return t;
}
async function Qc(e, r, { signOut: i = !1, timeoutMs: a = 3e4 } = {}) {
  let o = new Gs(e, new eo()),
    s = null,
    c = new Promise((e, c) => {
      let l,
        u = null,
        d = setTimeout(() => {
          c(new Yc(`timeout`));
        }, a),
        f = (e, t) => {
          (clearTimeout(d), c(typeof e == `string` ? new Yc(e, t) : e));
        };
      ((o.onerror = (e) => {
        let n = t.O({ error: t.f(Error) }).safeParse(e);
        if (n.success) {
          let e = t.O({ code: t.N() }).safeParse(n.data.error);
          f(
            e.success && [`EAGAIN`, `ETXTBSY`, `EPIPE`, `ECONNRESET`, `ETIMEDOUT`].includes(e.data.code)
              ? `transport`
              : `process`,
            n.data.error,
          );
        }
      }),
        (o.onclose = (e) => {
          let r = t.O({ reason: t.N() }).safeParse(e),
            i = r.success ? n.br(r.data.reason) : null;
          i == null ? f(`process`, e) : f(new Xc(i));
        }),
        (o.onopen = () =>
          o.send(
            JSON.stringify({
              id: `network-initialize`,
              method: `initialize`,
              params: {
                clientInfo: { name: `codex_desktop`, title: `Codex Desktop`, version: r },
                capabilities: { experimentalApi: !0 },
              },
            }),
          )),
        (o.onmessage = ({ data: t }) => {
          if (!(t instanceof In)) return;
          let r = t.message;
          if (!(`id` in r)) {
            if (r.method === `configWarning`) {
              let e = Jc.safeParse(r.params);
              if (e.success) {
                let { summary: t, details: n, path: r, range: i } = e.data;
                u = {
                  reason: `configLoad`,
                  filePath: r ?? null,
                  line: i?.start.line ?? null,
                  column: i?.start.column ?? null,
                  detail: n ?? t,
                };
              }
            }
            return;
          }
          if (!(`result` in r)) {
            if (`error` in r && r.error != null) {
              if (n.xr(r.error)) f(`auth`, r.error);
              else {
                let e =
                  r.id === `network-initialize` ||
                  r.id === `network-requirements` ||
                  r.id === `network-config`
                    ? $c(r.error, r.id === `network-config`)
                    : null;
                r.id === `network-config` &&
                  u != null &&
                  (e != null || r.error.data == null) &&
                  (e = {
                    reason: `configLoad`,
                    filePath: e?.filePath ?? u.filePath,
                    line: e?.line ?? u.line,
                    column: e?.column ?? u.column,
                    detail: e?.detail ?? u.detail,
                  });
                let t = qc.safeParse(r.error);
                e == null
                  ? t.success && t.data.data.errorCode === `Timeout`
                    ? f(`timeout`, r.error)
                    : t.success &&
                        t.data.data.statusCode != null &&
                        [408, 429, 500, 502, 503, 504].includes(t.data.data.statusCode)
                      ? f(`transport`, r.error)
                      : f(`rpc`, r.error)
                  : f(new Xc(e));
              }
            }
            return;
          }
          if (r.id === `network-initialize`) {
            let e = Kc.safeParse(r.result);
            if (!e.success) {
              f(`protocol`, e.error);
              return;
            }
            ((s = D(e.data.userAgent)),
              o.send(JSON.stringify({ method: `initialized` })),
              o.send(
                JSON.stringify({
                  id: i ? `network-logout` : `network-requirements`,
                  method: i ? `account/logout` : `configRequirements/read`,
                  params: i ? void 0 : {},
                }),
              ));
          } else
            r.id === `network-logout`
              ? o.send(
                  JSON.stringify({
                    id: `network-requirements`,
                    method: `configRequirements/read`,
                    params: {},
                  }),
                )
              : r.id === `network-requirements`
                ? ((l = r.result),
                  o.send(
                    JSON.stringify({
                      id: `network-config`,
                      method: `config/read`,
                      params: { includeLayers: !1 },
                    }),
                  ))
                : r.id === `network-config` && (clearTimeout(d), e(l));
        }));
    });
  try {
    let e = await c;
    return { appServerVersion: s, response: e };
  } finally {
    await o.closeGracefully();
  }
}
function $c(e, t) {
  if (e.data != null) return n.yr(e);
  let r = n.br(e.message);
  if (r?.filePath != null) return r;
  let i = /^failed to read configuration layers: ((?:.*[/\\])?config\.toml):(\d+):(\d+):\s*([\s\S]+)$/.exec(
    e.message,
  );
  if (i != null)
    return {
      reason: `configLoad`,
      filePath: i[1],
      line: Number(i[2]),
      column: Number(i[3]),
      detail: i[4].trim(),
    };
  let a = t ? /^invalid configuration:\s*([\s\S]+)$/.exec(e.message) : null;
  return a == null
    ? null
    : { reason: `configLoad`, filePath: null, line: null, column: null, detail: a[1].trim() };
}
(Object.defineProperty(exports, "$", {
  enumerable: !0,
  get: function () {
    return Xr;
  },
}),
  Object.defineProperty(exports, "$t", {
    enumerable: !0,
    get: function () {
      return F;
    },
  }),
  Object.defineProperty(exports, "A", {
    enumerable: !0,
    get: function () {
      return Ho;
    },
  }),
  Object.defineProperty(exports, "At", {
    enumerable: !0,
    get: function () {
      return We;
    },
  }),
  Object.defineProperty(exports, "B", {
    enumerable: !0,
    get: function () {
      return Wi;
    },
  }),
  Object.defineProperty(exports, "Bt", {
    enumerable: !0,
    get: function () {
      return ye;
    },
  }),
  Object.defineProperty(exports, "C", {
    enumerable: !0,
    get: function () {
      return ls;
    },
  }),
  Object.defineProperty(exports, "Ct", {
    enumerable: !0,
    get: function () {
      return G;
    },
  }),
  Object.defineProperty(exports, "D", {
    enumerable: !0,
    get: function () {
      return Yo;
    },
  }),
  Object.defineProperty(exports, "Dt", {
    enumerable: !0,
    get: function () {
      return Je;
    },
  }),
  Object.defineProperty(exports, "E", {
    enumerable: !0,
    get: function () {
      return Jo;
    },
  }),
  Object.defineProperty(exports, "Et", {
    enumerable: !0,
    get: function () {
      return Ye;
    },
  }),
  Object.defineProperty(exports, "F", {
    enumerable: !0,
    get: function () {
      return yi;
    },
  }),
  Object.defineProperty(exports, "Ft", {
    enumerable: !0,
    get: function () {
      return ze;
    },
  }),
  Object.defineProperty(exports, "G", {
    enumerable: !0,
    get: function () {
      return Ji;
    },
  }),
  Object.defineProperty(exports, "Gt", {
    enumerable: !0,
    get: function () {
      return fe;
    },
  }),
  Object.defineProperty(exports, "H", {
    enumerable: !0,
    get: function () {
      return Yi;
    },
  }),
  Object.defineProperty(exports, "Ht", {
    enumerable: !0,
    get: function () {
      return _e;
    },
  }),
  Object.defineProperty(exports, "I", {
    enumerable: !0,
    get: function () {
      return vi;
    },
  }),
  Object.defineProperty(exports, "It", {
    enumerable: !0,
    get: function () {
      return Ae;
    },
  }),
  Object.defineProperty(exports, "J", {
    enumerable: !0,
    get: function () {
      return qi;
    },
  }),
  Object.defineProperty(exports, "Jt", {
    enumerable: !0,
    get: function () {
      return se;
    },
  }),
  Object.defineProperty(exports, "K", {
    enumerable: !0,
    get: function () {
      return Di;
    },
  }),
  Object.defineProperty(exports, "Kt", {
    enumerable: !0,
    get: function () {
      return pe;
    },
  }),
  Object.defineProperty(exports, "L", {
    enumerable: !0,
    get: function () {
      return Ti;
    },
  }),
  Object.defineProperty(exports, "Lt", {
    enumerable: !0,
    get: function () {
      return De;
    },
  }),
  Object.defineProperty(exports, "M", {
    enumerable: !0,
    get: function () {
      return Ja;
    },
  }),
  Object.defineProperty(exports, "Mt", {
    enumerable: !0,
    get: function () {
      return Be;
    },
  }),
  Object.defineProperty(exports, "N", {
    enumerable: !0,
    get: function () {
      return Q;
    },
  }),
  Object.defineProperty(exports, "Nt", {
    enumerable: !0,
    get: function () {
      return Ve;
    },
  }),
  Object.defineProperty(exports, "O", {
    enumerable: !0,
    get: function () {
      return Ko;
    },
  }),
  Object.defineProperty(exports, "Ot", {
    enumerable: !0,
    get: function () {
      return Xe;
    },
  }),
  Object.defineProperty(exports, "P", {
    enumerable: !0,
    get: function () {
      return Qa;
    },
  }),
  Object.defineProperty(exports, "Pt", {
    enumerable: !0,
    get: function () {
      return U;
    },
  }),
  Object.defineProperty(exports, "Q", {
    enumerable: !0,
    get: function () {
      return ri;
    },
  }),
  Object.defineProperty(exports, "Qt", {
    enumerable: !0,
    get: function () {
      return ie;
    },
  }),
  Object.defineProperty(exports, "R", {
    enumerable: !0,
    get: function () {
      return Vi;
    },
  }),
  Object.defineProperty(exports, "Rt", {
    enumerable: !0,
    get: function () {
      return B;
    },
  }),
  Object.defineProperty(exports, "S", {
    enumerable: !0,
    get: function () {
      return Ss;
    },
  }),
  Object.defineProperty(exports, "St", {
    enumerable: !0,
    get: function () {
      return Rt;
    },
  }),
  Object.defineProperty(exports, "T", {
    enumerable: !0,
    get: function () {
      return is;
    },
  }),
  Object.defineProperty(exports, "Tt", {
    enumerable: !0,
    get: function () {
      return qe;
    },
  }),
  Object.defineProperty(exports, "U", {
    enumerable: !0,
    get: function () {
      return Ki;
    },
  }),
  Object.defineProperty(exports, "Ut", {
    enumerable: !0,
    get: function () {
      return R;
    },
  }),
  Object.defineProperty(exports, "V", {
    enumerable: !0,
    get: function () {
      return Gi;
    },
  }),
  Object.defineProperty(exports, "Vt", {
    enumerable: !0,
    get: function () {
      return ve;
    },
  }),
  Object.defineProperty(exports, "W", {
    enumerable: !0,
    get: function () {
      return Xi;
    },
  }),
  Object.defineProperty(exports, "Wt", {
    enumerable: !0,
    get: function () {
      return me;
    },
  }),
  Object.defineProperty(exports, "X", {
    enumerable: !0,
    get: function () {
      return Li;
    },
  }),
  Object.defineProperty(exports, "Xt", {
    enumerable: !0,
    get: function () {
      return I;
    },
  }),
  Object.defineProperty(exports, "Y", {
    enumerable: !0,
    get: function () {
      return Qi;
    },
  }),
  Object.defineProperty(exports, "Yt", {
    enumerable: !0,
    get: function () {
      return ee;
    },
  }),
  Object.defineProperty(exports, "Z", {
    enumerable: !0,
    get: function () {
      return fi;
    },
  }),
  Object.defineProperty(exports, "Zt", {
    enumerable: !0,
    get: function () {
      return ne;
    },
  }),
  Object.defineProperty(exports, "_", {
    enumerable: !0,
    get: function () {
      return Ks;
    },
  }),
  Object.defineProperty(exports, "_t", {
    enumerable: !0,
    get: function () {
      return Jt;
    },
  }),
  Object.defineProperty(exports, "a", {
    enumerable: !0,
    get: function () {
      return Qc;
    },
  }),
  Object.defineProperty(exports, "an", {
    enumerable: !0,
    get: function () {
      return j;
    },
  }),
  Object.defineProperty(exports, "at", {
    enumerable: !0,
    get: function () {
      return Ln;
    },
  }),
  Object.defineProperty(exports, "b", {
    enumerable: !0,
    get: function () {
      return ec;
    },
  }),
  Object.defineProperty(exports, "bt", {
    enumerable: !0,
    get: function () {
      return It;
    },
  }),
  Object.defineProperty(exports, "c", {
    enumerable: !0,
    get: function () {
      return Wc;
    },
  }),
  Object.defineProperty(exports, "cn", {
    enumerable: !0,
    get: function () {
      return O;
    },
  }),
  Object.defineProperty(exports, "ct", {
    enumerable: !0,
    get: function () {
      return Sn;
    },
  }),
  Object.defineProperty(exports, "d", {
    enumerable: !0,
    get: function () {
      return Rc;
    },
  }),
  Object.defineProperty(exports, "dt", {
    enumerable: !0,
    get: function () {
      return Pt;
    },
  }),
  Object.defineProperty(exports, "en", {
    enumerable: !0,
    get: function () {
      return ue;
    },
  }),
  Object.defineProperty(exports, "et", {
    enumerable: !0,
    get: function () {
      return ar;
    },
  }),
  Object.defineProperty(exports, "f", {
    enumerable: !0,
    get: function () {
      return Ic;
    },
  }),
  Object.defineProperty(exports, "ft", {
    enumerable: !0,
    get: function () {
      return Kt;
    },
  }),
  Object.defineProperty(exports, "g", {
    enumerable: !0,
    get: function () {
      return Ac;
    },
  }),
  Object.defineProperty(exports, "gt", {
    enumerable: !0,
    get: function () {
      return Ht;
    },
  }),
  Object.defineProperty(exports, "h", {
    enumerable: !0,
    get: function () {
      return Hc;
    },
  }),
  Object.defineProperty(exports, "ht", {
    enumerable: !0,
    get: function () {
      return Bt;
    },
  }),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return Zc;
    },
  }),
  Object.defineProperty(exports, "in", {
    enumerable: !0,
    get: function () {
      return S;
    },
  }),
  Object.defineProperty(exports, "it", {
    enumerable: !0,
    get: function () {
      return zn;
    },
  }),
  Object.defineProperty(exports, "j", {
    enumerable: !0,
    get: function () {
      return Xa;
    },
  }),
  Object.defineProperty(exports, "jt", {
    enumerable: !0,
    get: function () {
      return Ue;
    },
  }),
  Object.defineProperty(exports, "k", {
    enumerable: !0,
    get: function () {
      return Uo;
    },
  }),
  Object.defineProperty(exports, "kt", {
    enumerable: !0,
    get: function () {
      return Ge;
    },
  }),
  Object.defineProperty(exports, "l", {
    enumerable: !0,
    get: function () {
      return Uc;
    },
  }),
  Object.defineProperty(exports, "ln", {
    enumerable: !0,
    get: function () {
      return N;
    },
  }),
  Object.defineProperty(exports, "lt", {
    enumerable: !0,
    get: function () {
      return bn;
    },
  }),
  Object.defineProperty(exports, "m", {
    enumerable: !0,
    get: function () {
      return Bc;
    },
  }),
  Object.defineProperty(exports, "mt", {
    enumerable: !0,
    get: function () {
      return zt;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return Yc;
    },
  }),
  Object.defineProperty(exports, "nn", {
    enumerable: !0,
    get: function () {
      return ce;
    },
  }),
  Object.defineProperty(exports, "nt", {
    enumerable: !0,
    get: function () {
      return Hn;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return Mc;
    },
  }),
  Object.defineProperty(exports, "on", {
    enumerable: !0,
    get: function () {
      return M;
    },
  }),
  Object.defineProperty(exports, "ot", {
    enumerable: !0,
    get: function () {
      return In;
    },
  }),
  Object.defineProperty(exports, "p", {
    enumerable: !0,
    get: function () {
      return zc;
    },
  }),
  Object.defineProperty(exports, "pt", {
    enumerable: !0,
    get: function () {
      return yn;
    },
  }),
  Object.defineProperty(exports, "q", {
    enumerable: !0,
    get: function () {
      return Ii;
    },
  }),
  Object.defineProperty(exports, "qt", {
    enumerable: !0,
    get: function () {
      return de;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return Gc;
    },
  }),
  Object.defineProperty(exports, "rn", {
    enumerable: !0,
    get: function () {
      return oe;
    },
  }),
  Object.defineProperty(exports, "rt", {
    enumerable: !0,
    get: function () {
      return Bn;
    },
  }),
  Object.defineProperty(exports, "s", {
    enumerable: !0,
    get: function () {
      return Vc;
    },
  }),
  Object.defineProperty(exports, "sn", {
    enumerable: !0,
    get: function () {
      return D;
    },
  }),
  Object.defineProperty(exports, "st", {
    enumerable: !0,
    get: function () {
      return wn;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return Xc;
    },
  }),
  Object.defineProperty(exports, "tn", {
    enumerable: !0,
    get: function () {
      return le;
    },
  }),
  Object.defineProperty(exports, "tt", {
    enumerable: !0,
    get: function () {
      return Wn;
    },
  }),
  Object.defineProperty(exports, "u", {
    enumerable: !0,
    get: function () {
      return Fc;
    },
  }),
  Object.defineProperty(exports, "un", {
    enumerable: !0,
    get: function () {
      return x;
    },
  }),
  Object.defineProperty(exports, "ut", {
    enumerable: !0,
    get: function () {
      return xn;
    },
  }),
  Object.defineProperty(exports, "v", {
    enumerable: !0,
    get: function () {
      return $s;
    },
  }),
  Object.defineProperty(exports, "vt", {
    enumerable: !0,
    get: function () {
      return Ut;
    },
  }),
  Object.defineProperty(exports, "w", {
    enumerable: !0,
    get: function () {
      return ts;
    },
  }),
  Object.defineProperty(exports, "wt", {
    enumerable: !0,
    get: function () {
      return Ke;
    },
  }),
  Object.defineProperty(exports, "x", {
    enumerable: !0,
    get: function () {
      return xs;
    },
  }),
  Object.defineProperty(exports, "xt", {
    enumerable: !0,
    get: function () {
      return Lt;
    },
  }),
  Object.defineProperty(exports, "y", {
    enumerable: !0,
    get: function () {
      return tc;
    },
  }),
  Object.defineProperty(exports, "yt", {
    enumerable: !0,
    get: function () {
      return Wt;
    },
  }),
  Object.defineProperty(exports, "z", {
    enumerable: !0,
    get: function () {
      return Pi;
    },
  }),
  Object.defineProperty(exports, "zt", {
    enumerable: !0,
    get: function () {
      return V;
    },
  }));
//# sourceMappingURL=application-network-startup-BG13czUt.js.map
