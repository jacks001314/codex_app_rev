const e = require("./zod-ClKgiFhi.js");
let t = require("node:util");
function n(e) {
  return (0, t.inspect)(e);
}
var r = e.A(
    (e) => (Array.isArray(e) ? e.slice(0, 5) : e),
    e.h(
      e.O({
        code: e.N().transform((e) => e.slice(0, 80)),
        path: e.A(
          (e) => (Array.isArray(e) ? e.slice(0, 8) : e),
          e.h(e.I([e.N().transform((e) => e.slice(0, 80)), e.D()])),
        ),
      }),
    ),
  ),
  i = e.O({
    code: e
      .I([e.N().transform((e) => e.slice(0, 80)), e.D()])
      .optional()
      .catch(void 0),
    issues: r.optional().catch(void 0),
    data: e
      .O({ issues: r.optional() })
      .optional()
      .catch(void 0),
  });
function a(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (n === `error` && r instanceof Error) {
      Object.assign(t, o(r));
      continue;
    }
    t[n] = n === `error` && typeof r == `string` ? r.slice(0, 16e3) : r;
  }
  return t;
}
function o(e, t = 0) {
  let n = i.parse(e),
    r = {
      errorName: e.name.slice(0, 80),
      errorMessage: e.message.slice(0, 16e3),
      errorStack: e.stack?.slice(0, 32e3),
    };
  n.code != null && (r.errorCode = n.code);
  let a = n.issues ?? n.data?.issues;
  return (
    a != null && (r.errorIssues = a),
    t < 3 && e.cause instanceof Error && (r.errorCause = o(e.cause, t + 1)),
    r
  );
}
var s = { safe: {}, sensitive: {} };
function c(e) {
  return e == null ? s : { safe: e.safe, sensitive: e.sensitive ?? {} };
}
var l = class {
    buffer = [];
    maxBufferSize = 500;
    hasLoggedDroppedLogMessage = !1;
    push(e) {
      if (this.buffer.length >= this.maxBufferSize) {
        this.hasLoggedDroppedLogMessage ||
          ((this.hasLoggedDroppedLogMessage = !0),
          this.buffer.push({
            level: `warning`,
            message: `Dropped buffered log message after maxBufferSize was reached`,
            tags: s,
          }));
        return;
      }
      this.buffer.push(e);
    }
    createLogMethod(e) {
      return (t, n) => {
        this.push({ level: e, message: t, tags: c(n) });
      };
    }
    trace = this.createLogMethod(`trace`);
    debug = this.createLogMethod(`debug`);
    info = this.createLogMethod(`info`);
    warning = this.createLogMethod(`warning`);
    error = this.createLogMethod(`error`);
    log = (e, t, n) => {
      this.push({ level: e, message: t, tags: c(n) });
    };
    flushTo(e) {
      for (let t of this.buffer) e.log(t.level, t.message, t.tags);
      this.buffer.length = 0;
    }
    dispose() {
      this.buffer = [];
    }
  },
  u = new l(),
  d = !1;
function f(e) {
  if (d && (typeof process > `u` || process.env.NODE_ENV !== `test`))
    throw Error(`Logger already set`);
  ((d = !0), u instanceof l && u.flushTo(e), (u = e));
}
function p() {
  return u;
}
function m(e) {
  if (typeof e == `string`) return e.length === 0 || /\s/.test(e) ? JSON.stringify(e) : e;
  if (typeof e == `number` || typeof e == `boolean` || typeof e == `bigint`) return String(e);
  if (e == null) return e === void 0 ? `undefined` : `null`;
  try {
    let t = JSON.stringify(e);
    if (t != null) return t;
  } catch {}
  return n(e);
}
function h(e) {
  let t = a(e);
  return Object.keys(t)
    .sort((e, t) => e.localeCompare(t))
    .map((e) => {
      let n = t[e];
      return `${e}=${m(n)}`;
    })
    .join(` `);
}
function g(e) {
  let t = `[${e}] `,
    n = (e, n, r) => {
      p().log(e, `${t}${n}`, c(r));
    },
    r = (e) => (t, r) => {
      n(e, t, r);
    };
  return {
    trace: r(`trace`),
    debug: r(`debug`),
    info: r(`info`),
    warning: r(`warning`),
    error: r(`error`),
    log: (e, t, r) => {
      n(e, t, r);
    },
    dispose: () => {
      p().dispose();
    },
  };
}
function _(e) {
  let t = null;
  return () => ((t ??= g(e)), t);
}
function v(e) {
  let t = Date.now(),
    n = g(e),
    r = (e, n) => [`[${((Date.now() - t) / 1e3).toFixed(3)}] ${e}`, c(n)];
  return {
    trace: (e, t) => {
      let [i, a] = r(e, t);
      n.trace(i, a);
    },
    debug: (e, t) => {
      let [i, a] = r(e, t);
      n.debug(i, a);
    },
    info: (e, t) => {
      let [i, a] = r(e, t);
      n.info(i, a);
    },
    warning: (e, t) => {
      let [i, a] = r(e, t);
      n.warning(i, a);
    },
    error: (e, t) => {
      let [i, a] = r(e, t);
      n.error(i, a);
    },
    log: (e, t, i) => {
      let [a, o] = r(t, i);
      n.log(e, a, o);
    },
    dispose: () => {
      n.dispose();
    },
  };
}
(Object.defineProperty(exports, "a", {
  enumerable: !0,
  get: function () {
    return v;
  },
}),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return _;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return p;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return f;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return g;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return h;
    },
  }));
//# sourceMappingURL=logger-CUwSCKgw.js.map
