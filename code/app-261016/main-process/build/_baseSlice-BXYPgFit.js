const e = require("./rolldown-runtime-CPUxUITh.js");
var t = e.t((e, t) => {
    function n(e, t) {
      return e === t || (e !== e && t !== t);
    }
    t.exports = n;
  }),
  n = e.t((e, t) => {
    t.exports = typeof global == `object` && global && global.Object === Object && global;
  }),
  r = e.t((e, t) => {
    var r = n(),
      i = typeof self == `object` && self && self.Object === Object && self;
    t.exports = r || i || Function(`return this`)();
  }),
  i = e.t((e, t) => {
    t.exports = r().Symbol;
  }),
  a = e.t((e, t) => {
    var n = i(),
      r = Object.prototype,
      a = r.hasOwnProperty,
      o = r.toString,
      s = n ? n.toStringTag : void 0;
    function c(e) {
      var t = a.call(e, s),
        n = e[s];
      try {
        e[s] = void 0;
        var r = !0;
      } catch {}
      var i = o.call(e);
      return (r && (t ? (e[s] = n) : delete e[s]), i);
    }
    t.exports = c;
  }),
  o = e.t((e, t) => {
    var n = Object.prototype.toString;
    function r(e) {
      return n.call(e);
    }
    t.exports = r;
  }),
  s = e.t((e, t) => {
    var n = i(),
      r = a(),
      s = o(),
      c = `[object Null]`,
      l = `[object Undefined]`,
      u = n ? n.toStringTag : void 0;
    function d(e) {
      return e == null ? (e === void 0 ? l : c) : u && u in Object(e) ? r(e) : s(e);
    }
    t.exports = d;
  }),
  c = e.t((e, t) => {
    function n(e) {
      var t = typeof e;
      return e != null && (t == `object` || t == `function`);
    }
    t.exports = n;
  }),
  l = e.t((e, t) => {
    var n = s(),
      r = c(),
      i = `[object AsyncFunction]`,
      a = `[object Function]`,
      o = `[object GeneratorFunction]`,
      l = `[object Proxy]`;
    function u(e) {
      if (!r(e)) return !1;
      var t = n(e);
      return t == a || t == o || t == i || t == l;
    }
    t.exports = u;
  }),
  u = e.t((e, t) => {
    function n(e) {
      return typeof e == `object` && !!e;
    }
    t.exports = n;
  }),
  d = e.t((e, t) => {
    var n = /^(?:0|[1-9]\d*)$/;
    function r(e, t) {
      var r = typeof e;
      return (
        (t ??= 9007199254740991),
        !!t && (r == `number` || (r != `symbol` && n.test(e))) && e > -1 && e % 1 == 0 && e < t
      );
    }
    t.exports = r;
  }),
  f = e.t((e, t) => {
    function n(e) {
      return typeof e == `number` && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    }
    t.exports = n;
  }),
  p = e.t((e, t) => {
    var n = l(),
      r = f();
    function i(e) {
      return e != null && r(e.length) && !n(e);
    }
    t.exports = i;
  }),
  m = e.t((e, t) => {
    var n = s(),
      r = u(),
      i = `[object Symbol]`;
    function a(e) {
      return typeof e == `symbol` || (r(e) && n(e) == i);
    }
    t.exports = a;
  }),
  h = e.t((e, t) => {
    function n(e, t, n) {
      var r = -1,
        i = e.length;
      (t < 0 && (t = -t > i ? 0 : i + t),
        (n = n > i ? i : n),
        n < 0 && (n += i),
        (i = t > n ? 0 : (n - t) >>> 0),
        (t >>>= 0));
      for (var a = Array(i); ++r < i;) a[r] = e[r + t];
      return a;
    }
    t.exports = n;
  });
(Object.defineProperty(exports, "a", {
  enumerable: !0,
  get: function () {
    return d;
  },
}),
  Object.defineProperty(exports, "c", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(exports, "d", {
    enumerable: !0,
    get: function () {
      return r;
    },
  }),
  Object.defineProperty(exports, "f", {
    enumerable: !0,
    get: function () {
      return n;
    },
  }),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return f;
    },
  }),
  Object.defineProperty(exports, "l", {
    enumerable: !0,
    get: function () {
      return s;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return m;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }),
  Object.defineProperty(exports, "p", {
    enumerable: !0,
    get: function () {
      return t;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return p;
    },
  }),
  Object.defineProperty(exports, "s", {
    enumerable: !0,
    get: function () {
      return l;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return h;
    },
  }),
  Object.defineProperty(exports, "u", {
    enumerable: !0,
    get: function () {
      return i;
    },
  }));
//# sourceMappingURL=_baseSlice-BXYPgFit.js.map
