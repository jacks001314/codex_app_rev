const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./_baseSlice-BXYPgFit.js"),
  n = require("./path-browserify-win32-DubphUXU.js");
function r() {
  let e,
    t = !1;
  return {
    stream: new ReadableStream({
      start(t) {
        e = t;
      },
      cancel() {
        t = !0;
      },
    }),
    close: () => {
      t || ((t = !0), e.close());
    },
    enqueue: (n) => {
      t || e.enqueue(n);
    },
    error: (n) => {
      t || ((t = !0), e.error(n));
    },
  };
}
function i(e) {
  return e instanceof ReadableStream
    ? e
    : e instanceof Blob
      ? e.stream()
      : s(typeof e == `string` ? new TextEncoder().encode(e) : e);
}
function a(e, t) {
  let n = e.stdout.getReader(),
    r = new Response(e.stderr).text(),
    i = !1;
  return (
    r.catch(() => {}),
    new ReadableStream({
      async pull(a) {
        try {
          let { done: i, value: o } = await n.read();
          if (!i) {
            a.enqueue(o);
            return;
          }
          let [s, c] = await Promise.all([e.wait(), r]);
          if (s.code !== 0) throw Error(c.trim().length === 0 ? t : `${t}: ${c.trim()}`);
          a.close();
        } catch (t) {
          if (i) return;
          (e.kill(), a.error(t));
        }
      },
      async cancel() {
        ((i = !0), e.kill(), await n.cancel());
      },
    })
  );
}
async function o(e) {
  return new Uint8Array(await new Response(e).arrayBuffer());
}
function s(e) {
  return new ReadableStream({
    start(t) {
      (t.enqueue(e), t.close());
    },
  });
}
async function c(e) {
  let [t, n, r] = await Promise.all([e.wait(), o(e.stdout), o(e.stderr)]);
  return { ...t, stdout: l(n), stderr: l(r) };
}
function l(e) {
  return new TextDecoder(`utf-8`, { ignoreBOM: !0 }).decode(e);
}
var u = e.t((e, r) => {
  var i = t.t(),
    a = n.i(),
    o = n.n(),
    s = Math.ceil,
    c = Math.max;
  function l(e, t, n) {
    t = (n ? a(e, t, n) : t === void 0) ? 1 : c(o(t), 0);
    var r = e == null ? 0 : e.length;
    if (!r || t < 1) return [];
    for (var l = 0, u = 0, d = Array(s(r / t)); l < r;) d[u++] = i(e, l, (l += t));
    return d;
  }
  r.exports = l;
});
(Object.defineProperty(exports, "a", {
  enumerable: !0,
  get: function () {
    return o;
  },
}),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return a;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return r;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return s;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return i;
    },
  }),
  Object.defineProperty(exports, "s", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }));
//# sourceMappingURL=chunk-D4ZOuLf6.js.map
