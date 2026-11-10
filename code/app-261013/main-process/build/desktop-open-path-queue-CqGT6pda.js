const e = require("./zod-C7Kk26Xx.js"),
  t = require("./src-Dtwb7yKT.js");
let n = require("electron"),
  r = require("node:url");
var i = `/browser/handoff`,
  a = (() => {
    let t = e
        .N()
        .max(128)
        .refine((e) => e.trim().length > 0 && new TextEncoder().encode(e).length <= 128),
      n = e
        .N()
        .regex(/^[1-9][0-9]*$/)
        .refine((e) => Number.isSafeInteger(Number(e)));
    return e.O({ threadId: e.F([t]), tabId: e.F([n]), connectionThreadId: e.I([e.F([]), e.F([t])]) });
  })();
function o(e) {
  let n = a.safeParse({
    threadId: e.getAll(`thread_id`),
    tabId: e.getAll(`tab_id`),
    connectionThreadId: e.getAll(`connection_thread_id`),
  });
  if (!n.success) return null;
  let r = t.Ss(n.data.threadId[0]);
  return { threadId: r, tabId: n.data.tabId[0], connectionThreadId: t.Ss(n.data.connectionThreadId[0] ?? r) };
}
function s(e) {
  let t = `${i}?`;
  return e == null || !e.startsWith(t) || e.includes(`#`) ? null : o(new URLSearchParams(e.slice(t.length)));
}
function c(e) {
  let t = new URLSearchParams({ thread_id: e.threadId, tab_id: e.tabId });
  return (
    e.connectionThreadId !== e.threadId && t.set(`connection_thread_id`, e.connectionThreadId),
    `${i}?${t}`
  );
}
function l(e) {
  if (
    e.protocol !== `https:` ||
    e.hostname !== `chatgpt.com` ||
    e.username !== `` ||
    e.password !== `` ||
    e.port !== `` ||
    e.hash !== `` ||
    e.pathname !== `/browser/handoff`
  )
    return null;
  let t = o(e.searchParams);
  return t == null ? null : { kind: `browserHandoff`, target: t };
}
function u(e, t) {
  let n = (e, n, r, i) => {
    if (n !== `NSUserActivityTypeBrowsingWeb` || i?.webpageURL == null) return;
    let a;
    try {
      a = new URL(i.webpageURL);
    } catch {
      return;
    }
    let o = l(a);
    o != null && t(i.webpageURL, o) && e.preventDefault();
  };
  return (e.on(`continue-activity`, n), () => e.removeListener(`continue-activity`, n));
}
var d = [],
  f = [],
  p = null,
  m = null,
  h = !1;
function g(e) {
  return e.length === 0 ? !1 : p == null ? (d.push(...e), !0) : (p(e), !0);
}
function _(e) {
  return e.length !== 0 && (f.push(...e), !0);
}
function v() {
  return f;
}
function y() {
  return ((h = !0), f.splice(0, f.length));
}
function b(e) {
  if (!e || m != null) return () => {};
  let t = (e, t) => {
      (e.preventDefault(), g([t]));
    },
    i = (e, t) => {
      let n;
      try {
        n = (0, r.fileURLToPath)(t);
      } catch {
        if (h) return;
        let n;
        try {
          n = new URL(t);
        } catch {
          return;
        }
        if (
          n.protocol !== `codex:` &&
          n.protocol !== `codex-dev:` &&
          n.protocol !== `http:` &&
          n.protocol !== `https:`
        )
          return;
        (e.preventDefault(), _([t]));
        return;
      }
      (e.preventDefault(), g([n]));
    },
    a = u(n.app, (e) => !h && _([e]));
  return (
    (m = t),
    n.app.on(`open-file`, t),
    n.app.on(`open-url`, i),
    () => {
      m === t &&
        (n.app.removeListener(`open-file`, t), n.app.removeListener(`open-url`, i), a?.(), (m = null));
    }
  );
}
function x(e) {
  return ((p = e), d.splice(0, d.length));
}
function S(e) {
  p === e && (p = null);
}
function C() {
  (d.length !== 0 || f.length !== 0) &&
    (process.env.CODEX_DESKTOP_RELAUNCH_OPEN_EVENTS = JSON.stringify({
      filePaths: d.splice(0),
      urls: f.splice(0),
    }));
}
async function w() {
  let e = process.env.CODEX_DESKTOP_RELAUNCH_OPEN_EVENTS;
  if ((delete process.env.CODEX_DESKTOP_RELAUNCH_OPEN_EVENTS, e == null)) return;
  let { z: t } = await Promise.resolve()
      .then(() => require("./zod-C7Kk26Xx.js"))
      .then((e) => e.n),
    n = t.object({ filePaths: t.array(t.string()), urls: t.array(t.string()) }).parse(JSON.parse(e));
  (g(n.filePaths), _(n.urls));
}
(Object.defineProperty(exports, "a", {
  enumerable: !0,
  get: function () {
    return b;
  },
}),
  Object.defineProperty(exports, "c", {
    enumerable: !0,
    get: function () {
      return y;
    },
  }),
  Object.defineProperty(exports, "d", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(exports, "f", {
    enumerable: !0,
    get: function () {
      return s;
    },
  }),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return g;
    },
  }),
  Object.defineProperty(exports, "l", {
    enumerable: !0,
    get: function () {
      return l;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return v;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return w;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return C;
    },
  }),
  Object.defineProperty(exports, "s", {
    enumerable: !0,
    get: function () {
      return x;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return S;
    },
  }),
  Object.defineProperty(exports, "u", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }));
//# sourceMappingURL=desktop-open-path-queue-CqGT6pda.js.map
