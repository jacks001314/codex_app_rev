import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
function t(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function n(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
var r = e(() => {});
function i() {}
function a() {
  return this.rgb().formatHex();
}
function o() {
  return this.rgb().formatHex8();
}
function s() {
  return b(this).formatHsl();
}
function c() {
  return this.rgb().formatRgb();
}
function l(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = se.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? u(t)
          : n === 3
            ? new m(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? d((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : n === 4
                ? d(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = ce.exec(e))
        ? new m(t[1], t[2], t[3], 1)
        : (t = le.exec(e))
          ? new m((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = ue.exec(e))
            ? d(t[1], t[2], t[3], t[4])
            : (t = de.exec(e))
              ? d((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = fe.exec(e))
                ? te(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = pe.exec(e))
                  ? te(t[1], t[2] / 100, t[3] / 100, t[4])
                  : me.hasOwnProperty(e)
                    ? u(me[e])
                    : e === `transparent`
                      ? new m(NaN, NaN, NaN, 0)
                      : null
  );
}
function u(e) {
  return new m((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function d(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new m(e, t, n, r));
}
function f(e) {
  return (
    e instanceof i || (e = l(e)), e ? ((e = e.rgb()), new m(e.r, e.g, e.b, e.opacity)) : new m()
  );
}
function p(e, t, n, r) {
  return arguments.length === 1 ? f(e) : new m(e, t, n, r ?? 1);
}
function m(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
function h() {
  return `#${y(this.r)}${y(this.g)}${y(this.b)}`;
}
function ee() {
  return `#${y(this.r)}${y(this.g)}${y(this.b)}${y((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function g() {
  let e = _(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${v(this.r)}, ${v(this.g)}, ${v(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function _(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function v(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function y(e) {
  return ((e = v(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function te(e, t, n, r) {
  return (
    r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
    new x(e, t, n, r)
  );
}
function b(e) {
  if (e instanceof x) return new x(e.h, e.s, e.l, e.opacity);
  if ((e instanceof i || (e = l(e)), !e)) return new x();
  if (e instanceof x) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    a = Math.min(t, n, r),
    o = Math.max(t, n, r),
    s = NaN,
    c = o - a,
    u = (o + a) / 2;
  return (
    c
      ? ((s = t === o ? (n - r) / c + (n < r) * 6 : n === o ? (r - t) / c + 2 : (t - n) / c + 4),
        (c /= u < 0.5 ? o + a : 2 - o - a),
        (s *= 60))
      : (c = u > 0 && u < 1 ? 0 : s),
    new x(s, c, u, e.opacity)
  );
}
function ne(e, t, n, r) {
  return arguments.length === 1 ? b(e) : new x(e, t, n, r ?? 1);
}
function x(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
function re(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function S(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ie(e, t, n) {
  return (
    (e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t) *
    255
  );
}
var C,
  ae,
  w,
  oe,
  T,
  se,
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  he = e(() => {
    (r(),
      (C = 0.7),
      (ae = 1 / C),
      (w = `\\s*([+-]?\\d+)\\s*`),
      (oe = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`),
      (T = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`),
      (se = /^#([0-9a-f]{3,8})$/),
      (ce = RegExp(`^rgb\\(${w},${w},${w}\\)$`)),
      (le = RegExp(`^rgb\\(${T},${T},${T}\\)$`)),
      (ue = RegExp(`^rgba\\(${w},${w},${w},${oe}\\)$`)),
      (de = RegExp(`^rgba\\(${T},${T},${T},${oe}\\)$`)),
      (fe = RegExp(`^hsl\\(${oe},${T},${T}\\)$`)),
      (pe = RegExp(`^hsla\\(${oe},${T},${T},${oe}\\)$`)),
      (me = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      }),
      t(i, l, {
        copy(e) {
          return Object.assign(new this.constructor(), this, e);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: a,
        formatHex: a,
        formatHex8: o,
        formatHsl: s,
        formatRgb: c,
        toString: c,
      }),
      t(
        m,
        p,
        n(i, {
          brighter(e) {
            return (
              (e = e == null ? ae : ae ** +e),
              new m(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          darker(e) {
            return (
              (e = e == null ? C : C ** +e), new m(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          rgb() {
            return this;
          },
          clamp() {
            return new m(v(this.r), v(this.g), v(this.b), _(this.opacity));
          },
          displayable() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: h,
          formatHex: h,
          formatHex8: ee,
          formatRgb: g,
          toString: g,
        }),
      ),
      t(
        x,
        ne,
        n(i, {
          brighter(e) {
            return (
              (e = e == null ? ae : ae ** +e), new x(this.h, this.s, this.l * e, this.opacity)
            );
          },
          darker(e) {
            return ((e = e == null ? C : C ** +e), new x(this.h, this.s, this.l * e, this.opacity));
          },
          rgb() {
            var e = (this.h % 360) + (this.h < 0) * 360,
              t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              r = n + (n < 0.5 ? n : 1 - n) * t,
              i = 2 * n - r;
            return new m(
              ie(e >= 240 ? e - 240 : e + 120, i, r),
              ie(e, i, r),
              ie(e < 120 ? e + 240 : e - 120, i, r),
              this.opacity,
            );
          },
          clamp() {
            return new x(re(this.h), S(this.s), S(this.l), _(this.opacity));
          },
          displayable() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl() {
            let e = _(this.opacity);
            return `${e === 1 ? `hsl(` : `hsla(`}${re(this.h)}, ${S(this.s) * 100}%, ${S(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
          },
        }),
      ));
  }),
  ge,
  _e,
  ve = e(() => {
    ((ge = Math.PI / 180), (_e = 180 / Math.PI));
  });
function ye(e) {
  if (e instanceof E) return new E(e.l, e.a, e.b, e.opacity);
  if (e instanceof D) return De(e);
  e instanceof m || (e = f(e));
  var t = we(e.r),
    n = we(e.g),
    r = we(e.b),
    i = xe((0.2225045 * t + 0.7168786 * n + 0.0606169 * r) / Ae),
    a,
    o;
  return (
    t === n && n === r
      ? (a = o = i)
      : ((a = xe((0.4360747 * t + 0.3850649 * n + 0.1430804 * r) / ke)),
        (o = xe((0.0139322 * t + 0.0971045 * n + 0.7141733 * r) / je))),
    new E(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity)
  );
}
function be(e, t, n, r) {
  return arguments.length === 1 ? ye(e) : new E(e, t, n, r ?? 1);
}
function E(e, t, n, r) {
  ((this.l = +e), (this.a = +t), (this.b = +n), (this.opacity = +r));
}
function xe(e) {
  return e > Pe ? e ** (1 / 3) : e / Ne + Me;
}
function Se(e) {
  return e > O ? e * e * e : Ne * (e - Me);
}
function Ce(e) {
  return 255 * (e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055);
}
function we(e) {
  return (e /= 255) <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function Te(e) {
  if (e instanceof D) return new D(e.h, e.c, e.l, e.opacity);
  if ((e instanceof E || (e = ye(e)), e.a === 0 && e.b === 0))
    return new D(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
  var t = Math.atan2(e.b, e.a) * _e;
  return new D(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function Ee(e, t, n, r) {
  return arguments.length === 1 ? Te(e) : new D(e, t, n, r ?? 1);
}
function D(e, t, n, r) {
  ((this.h = +e), (this.c = +t), (this.l = +n), (this.opacity = +r));
}
function De(e) {
  if (isNaN(e.h)) return new E(e.l, 0, 0, e.opacity);
  var t = e.h * ge;
  return new E(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
var Oe,
  ke,
  Ae,
  je,
  Me,
  O,
  Ne,
  Pe,
  Fe = e(() => {
    (r(),
      he(),
      ve(),
      (Oe = 18),
      (ke = 0.96422),
      (Ae = 1),
      (je = 0.82521),
      (Me = 4 / 29),
      (O = 6 / 29),
      (Ne = 3 * O * O),
      (Pe = O * O * O),
      t(
        E,
        be,
        n(i, {
          brighter(e) {
            return new E(this.l + Oe * (e ?? 1), this.a, this.b, this.opacity);
          },
          darker(e) {
            return new E(this.l - Oe * (e ?? 1), this.a, this.b, this.opacity);
          },
          rgb() {
            var e = (this.l + 16) / 116,
              t = isNaN(this.a) ? e : e + this.a / 500,
              n = isNaN(this.b) ? e : e - this.b / 200;
            return (
              (t = ke * Se(t)),
              (e = Ae * Se(e)),
              (n = je * Se(n)),
              new m(
                Ce(3.1338561 * t - 1.6168667 * e - 0.4906146 * n),
                Ce(-0.9787684 * t + 1.9161415 * e + 0.033454 * n),
                Ce(0.0719453 * t - 0.2289914 * e + 1.4052427 * n),
                this.opacity,
              )
            );
          },
        }),
      ),
      t(
        D,
        Ee,
        n(i, {
          brighter(e) {
            return new D(this.h, this.c, this.l + Oe * (e ?? 1), this.opacity);
          },
          darker(e) {
            return new D(this.h, this.c, this.l - Oe * (e ?? 1), this.opacity);
          },
          rgb() {
            return De(this).rgb();
          },
        }),
      ));
  }),
  Ie = e(() => {
    (he(), Fe(), r(), ve());
  }),
  Le = e(() => {}),
  Re = e(() => {
    Le();
  }),
  ze,
  Be = e(() => {
    ze = (e) => () => e;
  });
function Ve(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function He(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function Ue(e, t) {
  var n = t - e;
  return n ? Ve(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : ze(isNaN(e) ? t : e);
}
function We(e) {
  return (e = +e) == 1
    ? Ge
    : function (t, n) {
        return n - t ? He(t, n, e) : ze(isNaN(t) ? n : t);
      };
}
function Ge(e, t) {
  var n = t - e;
  return n ? Ve(e, n) : ze(isNaN(e) ? t : e);
}
var Ke = e(() => {
    Be();
  }),
  qe,
  Je = e(() => {
    (Ie(),
      Le(),
      Re(),
      Ke(),
      (qe = (function e(t) {
        var n = We(t);
        function r(e, t) {
          var r = n((e = p(e)).r, (t = p(t)).r),
            i = n(e.g, t.g),
            a = n(e.b, t.b),
            o = Ge(e.opacity, t.opacity);
          return function (t) {
            return ((e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``);
          };
        }
        return ((r.gamma = e), r);
      })(1)));
  });
function Ye(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function Xe(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
var Ze = e(() => {});
function Qe(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = Array(r),
    a = Array(n),
    o;
  for (o = 0; o < r; ++o) i[o] = dt(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
var $e = e(() => {
  ft();
});
function et(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
var tt = e(() => {});
function k(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
var nt = e(() => {});
function rt(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e != `object` || !e) && (e = {}), (typeof t != `object` || !t) && (t = {}), t))
    i in e ? (n[i] = dt(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var it = e(() => {
  ft();
});
function at(e) {
  return function () {
    return e;
  };
}
function ot(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function st(e, t) {
  var n = (ct.lastIndex = lt.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = ct.exec(e)) && (i = lt.exec(t));)
    ((a = i.index) > n && ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: k(r, i) })),
      (n = lt.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? ot(c[0].x)
        : at(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
var ct,
  lt,
  ut = e(() => {
    (nt(), (ct = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g), (lt = new RegExp(ct.source, `g`)));
  });
function dt(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? ze(t)
    : (n === `number`
        ? k
        : n === `string`
          ? (r = l(t))
            ? ((t = r), qe)
            : st
          : t instanceof l
            ? qe
            : t instanceof Date
              ? et
              : Xe(t)
                ? Ye
                : Array.isArray(t)
                  ? Qe
                  : (typeof t.valueOf != `function` && typeof t.toString != `function`) || isNaN(t)
                    ? rt
                    : k)(e, t);
}
var ft = e(() => {
  (Ie(), Je(), $e(), tt(), nt(), it(), ut(), Be(), Ze());
});
function pt(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
var mt = e(() => {});
function ht(e, t, n, r, i, a) {
  var o, s, c;
  return (
    (o = Math.sqrt(e * e + t * t)) && ((e /= o), (t /= o)),
    (c = e * n + t * r) && ((n -= e * c), (r -= t * c)),
    (s = Math.sqrt(n * n + r * r)) && ((n /= s), (r /= s), (c /= s)),
    e * r < t * n && ((e = -e), (t = -t), (c = -c), (o = -o)),
    {
      translateX: i,
      translateY: a,
      rotate: Math.atan2(t, e) * gt,
      skewX: Math.atan(c) * gt,
      scaleX: o,
      scaleY: s,
    }
  );
}
var gt,
  _t,
  vt = e(() => {
    ((gt = 180 / Math.PI),
      (_t = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }));
  });
function yt(e) {
  let t = new (typeof DOMMatrix == `function` ? DOMMatrix : WebKitCSSMatrix)(e + ``);
  return t.isIdentity ? _t : ht(t.a, t.b, t.c, t.d, t.e, t.f);
}
function bt(e) {
  return e == null ||
    ((xt ||= document.createElementNS(`http://www.w3.org/2000/svg`, `g`)),
    xt.setAttribute(`transform`, e),
    !(e = xt.transform.baseVal.consolidate()))
    ? _t
    : ((e = e.matrix), ht(e.a, e.b, e.c, e.d, e.e, e.f));
}
var xt,
  St = e(() => {
    vt();
  });
function Ct(e, t, n, r) {
  function i(e) {
    return e.length ? e.pop() + ` ` : ``;
  }
  function a(e, r, i, a, o, s) {
    if (e !== i || r !== a) {
      var c = o.push(`translate(`, null, t, null, n);
      s.push({ i: c - 4, x: k(e, i) }, { i: c - 2, x: k(r, a) });
    } else (i || a) && o.push(`translate(` + i + t + a + n);
  }
  function o(e, t, n, a) {
    e === t
      ? t && n.push(i(n) + `rotate(` + t + r)
      : (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
        a.push({ i: n.push(i(n) + `rotate(`, null, r) - 2, x: k(e, t) }));
  }
  function s(e, t, n, a) {
    e === t
      ? t && n.push(i(n) + `skewX(` + t + r)
      : a.push({ i: n.push(i(n) + `skewX(`, null, r) - 2, x: k(e, t) });
  }
  function c(e, t, n, r, a, o) {
    if (e !== n || t !== r) {
      var s = a.push(i(a) + `scale(`, null, `,`, null, `)`);
      o.push({ i: s - 4, x: k(e, n) }, { i: s - 2, x: k(t, r) });
    } else (n !== 1 || r !== 1) && a.push(i(a) + `scale(` + n + `,` + r + `)`);
  }
  return function (t, n) {
    var r = [],
      i = [];
    return (
      (t = e(t)),
      (n = e(n)),
      a(t.translateX, t.translateY, n.translateX, n.translateY, r, i),
      o(t.rotate, n.rotate, r, i),
      s(t.skewX, n.skewX, r, i),
      c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i),
      (t = n = null),
      function (e) {
        for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
        return r.join(``);
      }
    );
  };
}
var wt,
  Tt,
  Et = e(() => {
    (nt(), St(), (wt = Ct(yt, `px, `, `px)`, `deg)`)), (Tt = Ct(bt, `, `, `)`, `)`)));
  });
function Dt(e) {
  return function (t, n) {
    var r = e((t = Ee(t)).h, (n = Ee(n)).h),
      i = Ge(t.c, n.c),
      a = Ge(t.l, n.l),
      o = Ge(t.opacity, n.opacity);
    return function (e) {
      return ((t.h = r(e)), (t.c = i(e)), (t.l = a(e)), (t.opacity = o(e)), t + ``);
    };
  };
}
var Ot,
  kt = e(() => {
    (Ie(), Ke(), (Ot = Dt(Ue)));
  });
function At(e, t) {
  t === void 0 && ((t = e), (e = dt));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
var jt = e(() => {
    ft();
  }),
  Mt = e(() => {
    (ft(),
      $e(),
      Le(),
      Re(),
      tt(),
      Ke(),
      nt(),
      Ze(),
      it(),
      mt(),
      ut(),
      Et(),
      Je(),
      Ie(),
      kt(),
      jt());
  });
function A(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
var Nt = e(() => {});
function Pt(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
var Ft = e(() => {});
function It(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === A || e === Pt ? e : Lt), (n = e), (r = e))
    : ((t = A), (n = (t, n) => A(e(t), n)), (r = (t, n) => e(t) - n));
  function i(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) < 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function a(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) <= 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function o(e, t, n = 0, a = e.length) {
    let o = i(e, t, n, a - 1);
    return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
  }
  return { left: i, center: o, right: a };
}
function Lt() {
  return 0;
}
var Rt = e(() => {
  (Nt(), Ft());
});
function zt(e) {
  return e === null ? NaN : +e;
}
function* Bt(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var Vt = e(() => {}),
  Ht,
  Ut,
  Wt = e(() => {
    (Nt(), Rt(), Vt(), (Ht = It(A)), (Ut = Ht.right), Ht.left, It(zt).center);
  });
function Gt(e, t) {
  let n = 0,
    r,
    i = 0,
    a = 0;
  if (t === void 0)
    for (let t of e)
      t != null && (t = +t) >= t && ((r = t - i), (i += r / ++n), (a += r * (t - i)));
  else {
    let o = -1;
    for (let s of e)
      (s = t(s, ++o, e)) != null &&
        (s = +s) >= s &&
        ((r = s - i), (i += r / ++n), (a += r * (s - i)));
  }
  if (n > 1) return a / (n - 1);
}
var Kt = e(() => {});
function qt(e, t) {
  let n = Gt(e, t);
  return n && Math.sqrt(n);
}
var Jt = e(() => {
  Kt();
});
function Yt(e, t) {
  let n, r;
  if (t === void 0)
    for (let t of e)
      t != null && (n === void 0 ? t >= t && (n = r = t) : (n > t && (n = t), r < t && (r = t)));
  else {
    let i = -1;
    for (let a of e)
      (a = t(a, ++i, e)) != null &&
        (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
  }
  return [n, r];
}
var Xt = e(() => {});
function Zt({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Qt({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function $t({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function en(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
var tn,
  nn = e(() => {
    tn = class extends Map {
      constructor(e, t = en) {
        if (
          (super(),
          Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: t } }),
          e != null)
        )
          for (let [t, n] of e) this.set(t, n);
      }
      get(e) {
        return super.get(Zt(this, e));
      }
      has(e) {
        return super.has(Zt(this, e));
      }
      set(e, t) {
        return super.set(Qt(this, e), t);
      }
      delete(e) {
        return super.delete($t(this, e));
      }
    };
  });
function rn(e = A) {
  if (e === A) return an;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function an(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
var on = e(() => {
  Nt();
});
function sn(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= dn ? 10 : a >= fn ? 5 : a >= pn ? 2 : 1,
    s,
    c,
    l;
  return (
    i < 0
      ? ((l = 10 ** -i / o),
        (s = Math.round(e * l)),
        (c = Math.round(t * l)),
        s / l < e && ++s,
        c / l > t && --c,
        (l = -l))
      : ((l = 10 ** i * o),
        (s = Math.round(e / l)),
        (c = Math.round(t / l)),
        s * l < e && ++s,
        c * l > t && --c),
    c < s && 0.5 <= n && n < 2 ? sn(e, t, n * 2) : [s, c, l]
  );
}
function cn(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? sn(t, e, n) : sn(e, t, n);
  if (!(a >= i)) return [];
  let s = a - i + 1,
    c = Array(s);
  if (r)
    if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
    else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
  else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
  else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
  return c;
}
function ln(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), sn(e, t, n)[2]);
}
function un(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? ln(t, e, n) : ln(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var dn,
  fn,
  pn,
  mn = e(() => {
    ((dn = Math.sqrt(50)), (fn = Math.sqrt(10)), (pn = Math.sqrt(2)));
  });
function hn(e, t) {
  let n;
  if (t === void 0) for (let t of e) t != null && (n < t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e) (i = t(i, ++r, e)) != null && (n < i || (n === void 0 && i >= i)) && (n = i);
  }
  return n;
}
var gn = e(() => {});
function _n(e, t) {
  let n;
  if (t === void 0) for (let t of e) t != null && (n > t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e) (i = t(i, ++r, e)) != null && (n > i || (n === void 0 && i >= i)) && (n = i);
  }
  return n;
}
var vn = e(() => {});
function yn(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? an : rn(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      yn(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (bn(e, n, t), i(e[r], a) > 0 && bn(e, n, r); o < s;) {
      for (bn(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? bn(e, n, s) : (++s, bn(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function bn(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
var xn = e(() => {
  on();
});
function Sn(e, t, n) {
  if (((e = Float64Array.from(Bt(e, n))), !(!(r = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || r < 2) return _n(e);
    if (t >= 1) return hn(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = hn(yn(e, a).subarray(0, a + 1));
    return o + (_n(e.subarray(a + 1)) - o) * (i - a);
  }
}
function Cn(e, t, n = zt) {
  if (!(!(r = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[r - 1], r - 1, e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = +n(e[a], a, e);
    return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
  }
}
var wn = e(() => {
  (gn(), vn(), xn(), Vt());
});
function Tn(e, t) {
  let n = 0,
    r = 0;
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (++n, (r += t));
  else {
    let i = -1;
    for (let a of e) (a = t(a, ++i, e)) != null && (a = +a) >= a && (++n, (r += a));
  }
  if (n) return r / n;
}
var En = e(() => {});
function Dn(e, t, n) {
  ((e = +e), (t = +t), (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n));
  for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;)
    a[r] = e + r * n;
  return a;
}
var On = e(() => {});
function kn(e, t) {
  let n = 0;
  if (t === void 0) for (let t of e) (t = +t) && (n += t);
  else {
    let r = -1;
    for (let i of e) (i = +t(i, ++r, e)) && (n += i);
  }
  return n;
}
var An = e(() => {}),
  j = e(() => {
    (Wt(),
      Nt(),
      Rt(),
      Ft(),
      Jt(),
      Xt(),
      nn(),
      on(),
      mn(),
      wn(),
      gn(),
      En(),
      vn(),
      xn(),
      On(),
      An(),
      Kt());
  });
function M(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function N(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      typeof e == `function` ? this.interpolator(e) : this.range(e);
      break;
    default:
      (this.domain(e), typeof t == `function` ? this.interpolator(t) : this.range(t));
      break;
  }
  return this;
}
var P = e(() => {});
function jn() {
  var e = new tn(),
    t = [],
    n = [],
    r = Mn;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== Mn) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new tn()));
      for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
      return i;
    }),
    (i.range = function (e) {
      return arguments.length ? ((n = Array.from(e)), i) : n.slice();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return jn(t, n).unknown(r);
    }),
    M.apply(i, arguments),
    i
  );
}
var Mn,
  Nn = e(() => {
    (j(), P(), (Mn = Symbol(`implicit`)));
  });
function Pn() {
  var e = jn().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    i = 1,
    a,
    o,
    s = !1,
    c = 0,
    l = 0,
    u = 0.5;
  delete e.unknown;
  function d() {
    var e = t().length,
      d = i < r,
      f = d ? i : r,
      p = d ? r : i;
    ((a = (p - f) / Math.max(1, e - c + l * 2)),
      s && (a = Math.floor(a)),
      (f += (p - f - a * (e - c)) * u),
      (o = a * (1 - c)),
      s && ((f = Math.round(f)), (o = Math.round(o))));
    var m = Dn(e).map(function (e) {
      return f + a * e;
    });
    return n(d ? m.reverse() : m);
  }
  return (
    (e.domain = function (e) {
      return arguments.length ? (t(e), d()) : t();
    }),
    (e.range = function (e) {
      return arguments.length ? (([r, i] = e), (r = +r), (i = +i), d()) : [r, i];
    }),
    (e.rangeRound = function (e) {
      return (([r, i] = e), (r = +r), (i = +i), (s = !0), d());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (e) {
      return arguments.length ? ((s = !!e), d()) : s;
    }),
    (e.padding = function (e) {
      return arguments.length ? ((c = Math.min(1, (l = +e))), d()) : c;
    }),
    (e.paddingInner = function (e) {
      return arguments.length ? ((c = Math.min(1, e)), d()) : c;
    }),
    (e.paddingOuter = function (e) {
      return arguments.length ? ((l = +e), d()) : l;
    }),
    (e.align = function (e) {
      return arguments.length ? ((u = Math.max(0, Math.min(1, e))), d()) : u;
    }),
    (e.copy = function () {
      return Pn(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    M.apply(d(), arguments)
  );
}
function Fn(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return Fn(t());
    }),
    e
  );
}
function In() {
  return Fn(Pn.apply(null, arguments).paddingInner(1));
}
var Ln = e(() => {
  (j(), P(), Nn());
});
function Rn(e) {
  return function () {
    return e;
  };
}
var zn = e(() => {});
function Bn(e) {
  return +e;
}
var Vn = e(() => {});
function F(e) {
  return e;
}
function Hn(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : Rn(isNaN(t) ? NaN : 0.5);
}
function Un(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function Wn(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = Hn(i, r)), (a = n(o, a))) : ((r = Hn(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function Gn(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse())); ++o < r;)
    ((i[o] = Hn(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = Ut(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function Kn(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function qn() {
  var e = Yn,
    t = Yn,
    n = dt,
    r,
    i,
    a,
    o = F,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (o !== F && (o = Un(e[0], e[n - 1])), (s = n > 2 ? Gn : Wn), (c = l = null), d);
  }
  function d(i) {
    return i == null || isNaN((i = +i)) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
  }
  return (
    (d.invert = function (n) {
      return o(i((l ||= s(t, e.map(r), k))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, Bn)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = pt), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : F), u()) : o !== F;
    }),
    (d.interpolate = function (e) {
      return arguments.length ? ((n = e), u()) : n;
    }),
    (d.unknown = function (e) {
      return arguments.length ? ((a = e), d) : a;
    }),
    function (e, t) {
      return ((r = e), (i = t), u());
    }
  );
}
function Jn() {
  return qn()(F, F);
}
var Yn,
  I = e(() => {
    (j(), Mt(), zn(), Vn(), (Yn = [0, 1]));
  });
function Xn(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function Zn(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
var Qn = e(() => {});
function $n(e) {
  return ((e = Zn(Math.abs(e))), e ? e[1] : NaN);
}
var er = e(() => {
  Qn();
});
function tr(e, t) {
  return function (n, r) {
    for (
      var i = n.length, a = [], o = 0, s = e[0], c = 0;
      i > 0 &&
      s > 0 &&
      (c + s + 1 > r && (s = Math.max(1, r - c)),
      a.push(n.substring((i -= s), i + s)),
      !((c += s + 1) > r));
    )
      s = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
var nr = e(() => {});
function rr(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var ir = e(() => {});
function ar(e) {
  if (!(t = sr.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new or({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
function or(e) {
  ((this.fill = e.fill === void 0 ? ` ` : e.fill + ``),
    (this.align = e.align === void 0 ? `>` : e.align + ``),
    (this.sign = e.sign === void 0 ? `-` : e.sign + ``),
    (this.symbol = e.symbol === void 0 ? `` : e.symbol + ``),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? `` : e.type + ``));
}
var sr,
  cr = e(() => {
    ((sr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i),
      (ar.prototype = or.prototype),
      (or.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? `0` : ``) +
          (this.width === void 0 ? `` : Math.max(1, this.width | 0)) +
          (this.comma ? `,` : ``) +
          (this.precision === void 0 ? `` : `.` + Math.max(0, this.precision | 0)) +
          (this.trim ? `~` : ``) +
          this.type
        );
      }));
  });
function lr(e) {
  out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case `.`:
        r = i = n;
        break;
      case `0`:
        (r === 0 && (r = n), (i = n));
        break;
      default:
        if (!+e[n]) break out;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var ur = e(() => {});
function dr(e, t) {
  var n = Zn(e, t);
  if (!n) return ((fr = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (fr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + Zn(e, Math.max(0, t + a - 1))[0];
}
var fr,
  pr = e(() => {
    Qn();
  });
function mr(e, t) {
  var n = Zn(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var hr = e(() => {
    Qn();
  }),
  gr,
  _r = e(() => {
    (Qn(),
      pr(),
      hr(),
      (gr = {
        "%": (e, t) => (e * 100).toFixed(t),
        b: (e) => Math.round(e).toString(2),
        c: (e) => e + ``,
        d: Xn,
        e: (e, t) => e.toExponential(t),
        f: (e, t) => e.toFixed(t),
        g: (e, t) => e.toPrecision(t),
        o: (e) => Math.round(e).toString(8),
        p: (e, t) => mr(e * 100, t),
        r: mr,
        s: dr,
        X: (e) => Math.round(e).toString(16).toUpperCase(),
        x: (e) => Math.round(e).toString(16),
      }));
  });
function vr(e) {
  return e;
}
var yr = e(() => {});
function br(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? vr
        : tr(xr.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? vr : rr(xr.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = ar(e);
    var u = e.fill,
      d = e.align,
      f = e.sign,
      p = e.symbol,
      m = e.zero,
      h = e.width,
      ee = e.comma,
      g = e.precision,
      _ = e.trim,
      v = e.type;
    (v === `n` ? ((ee = !0), (v = `g`)) : gr[v] || (g === void 0 && (g = 12), (_ = !0), (v = `g`)),
      (m || (u === `0` && d === `=`)) && ((m = !0), (u = `0`), (d = `=`)));
    var y =
        (l && l.prefix !== void 0 ? l.prefix : ``) +
        (p === `$` ? n : p === `#` && /[boxX]/.test(v) ? `0` + v.toLowerCase() : ``),
      te = (p === `$` ? r : /[%p]/.test(v) ? o : ``) + (l && l.suffix !== void 0 ? l.suffix : ``),
      b = gr[v],
      ne = /[defgprs%]/.test(v);
    g =
      g === void 0
        ? 6
        : /[gprs]/.test(v)
          ? Math.max(1, Math.min(21, g))
          : Math.max(0, Math.min(20, g));
    function x(e) {
      var n = y,
        r = te,
        o,
        l,
        p;
      if (v === `c`) ((r = b(e) + r), (e = ``));
      else {
        e = +e;
        var x = e < 0 || 1 / e < 0;
        if (
          ((e = isNaN(e) ? c : b(Math.abs(e), g)),
          _ && (e = lr(e)),
          x && +e == 0 && f !== `+` && (x = !1),
          (n = (x ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (v === `s` && !isNaN(e) && fr !== void 0 ? Sr[8 + fr / 3] : ``) +
            r +
            (x && f === `(` ? `)` : ``)),
          ne)
        ) {
          for (o = -1, l = e.length; ++o < l;)
            if (((p = e.charCodeAt(o)), 48 > p || p > 57)) {
              ((r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r), (e = e.slice(0, o)));
              break;
            }
        }
      }
      ee && !m && (e = t(e, 1 / 0));
      var re = n.length + e.length + r.length,
        S = re < h ? Array(h - re + 1).join(u) : ``;
      switch ((ee && m && ((e = t(S + e, S.length ? h - r.length : 1 / 0)), (S = ``)), d)) {
        case `<`:
          e = n + e + r + S;
          break;
        case `=`:
          e = n + S + e + r;
          break;
        case `^`:
          e = S.slice(0, (re = S.length >> 1)) + n + e + r + S.slice(re);
          break;
        default:
          e = S + n + e + r;
          break;
      }
      return a(e);
    }
    return (
      (x.toString = function () {
        return e + ``;
      }),
      x
    );
  }
  function u(e, t) {
    var n = Math.max(-8, Math.min(8, Math.floor($n(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = ar(e)), (e.type = `f`), e), { suffix: Sr[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var xr,
  Sr,
  Cr = e(() => {
    (er(),
      nr(),
      ir(),
      cr(),
      ur(),
      _r(),
      pr(),
      yr(),
      (xr = Array.prototype.map),
      (Sr = [`y`, `z`, `a`, `f`, `p`, `n`, `µ`, `m`, ``, `k`, `M`, `G`, `T`, `P`, `E`, `Z`, `Y`]));
  });
function wr(e) {
  return ((Tr = br(e)), (Er = Tr.format), (Dr = Tr.formatPrefix), Tr);
}
var Tr,
  Er,
  Dr,
  Or = e(() => {
    (Cr(), wr({ thousands: `,`, grouping: [3], currency: [`$`, ``] }));
  });
function kr(e) {
  return Math.max(0, -$n(Math.abs(e)));
}
var Ar = e(() => {
  er();
});
function jr(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor($n(t) / 3))) * 3 - $n(Math.abs(e)));
}
var Mr = e(() => {
  er();
});
function Nr(e, t) {
  return ((e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, $n(t) - $n(e)) + 1);
}
var Pr = e(() => {
    er();
  }),
  Fr = e(() => {
    (Or(), Cr(), cr(), Ar(), Mr(), Pr());
  });
function Ir(e, t, n, r) {
  var i = un(e, t, n),
    a;
  switch (((r = ar(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (r.precision == null && !isNaN((a = jr(i, o))) && (r.precision = a), Dr(r, o));
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = Nr(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null && !isNaN((a = kr(i))) && (r.precision = a - (r.type === `%`) * 2);
      break;
  }
  return Er(r);
}
var Lr = e(() => {
  (j(), Fr());
});
function L(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return cn(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return Ir(r[0], r[r.length - 1], e ?? 10, n);
    }),
    (e.nice = function (n) {
      n ??= 10;
      var r = t(),
        i = 0,
        a = r.length - 1,
        o = r[i],
        s = r[a],
        c,
        l,
        u = 10;
      for (s < o && ((l = o), (o = s), (s = l), (l = i), (i = a), (a = l)); u-- > 0;) {
        if (((l = ln(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
        if (l > 0) ((o = Math.floor(o / l) * l), (s = Math.ceil(s / l) * l));
        else if (l < 0) ((o = Math.ceil(o * l) / l), (s = Math.floor(s * l) / l));
        else break;
        c = l;
      }
      return e;
    }),
    e
  );
}
function Rr() {
  var e = Jn();
  return (
    (e.copy = function () {
      return Kn(e, Rr());
    }),
    M.apply(e, arguments),
    L(e)
  );
}
var R = e(() => {
  (j(), I(), P(), Lr());
});
function zr(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, Bn)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return zr(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Bn) : [0, 1]),
    L(n)
  );
}
var Br = e(() => {
  (R(), Vn());
});
function Vr(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    i = e[n],
    a = e[r],
    o;
  return (
    a < i && ((o = n), (n = r), (r = o), (o = i), (i = a), (a = o)),
    (e[n] = t.floor(i)),
    (e[r] = t.ceil(a)),
    e
  );
}
var Hr = e(() => {});
function Ur(e) {
  return Math.log(e);
}
function Wr(e) {
  return Math.exp(e);
}
function Gr(e) {
  return -Math.log(-e);
}
function Kr(e) {
  return -Math.exp(-e);
}
function qr(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function Jr(e) {
  return e === 10 ? qr : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Yr(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Xr(e) {
  return (t, n) => -e(-t, n);
}
function Zr(e) {
  let t = e(Ur, Wr),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = Yr(r)), (a = Jr(r)), n()[0] < 0 ? ((i = Xr(i)), (a = Xr(a)), e(Gr, Kr)) : e(Ur, Wr), t
    );
  }
  return (
    (t.base = function (e) {
      return arguments.length ? ((r = +e), o()) : r;
    }),
    (t.domain = function (e) {
      return arguments.length ? (n(e), o()) : n();
    }),
    (t.ticks = (e) => {
      let t = n(),
        o = t[0],
        s = t[t.length - 1],
        c = s < o;
      c && ([o, s] = [s, o]);
      let l = i(o),
        u = i(s),
        d,
        f,
        p = e == null ? 10 : +e,
        m = [];
      if (!(r % 1) && u - l < p) {
        if (((l = Math.floor(l)), (u = Math.ceil(u)), o > 0)) {
          for (; l <= u; ++l)
            for (d = 1; d < r; ++d)
              if (((f = l < 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        } else
          for (; l <= u; ++l)
            for (d = r - 1; d >= 1; --d)
              if (((f = l > 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        m.length * 2 < p && (m = cn(o, s, p));
      } else m = cn(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = ar(n)).precision == null && (n.trim = !0), (n = Er(n))),
        e === 1 / 0)
      )
        return n;
      let o = Math.max(1, (r * e) / t.ticks().length);
      return (e) => {
        let t = e / a(Math.round(i(e)));
        return (t * r < r - 0.5 && (t *= r), t <= o ? n(e) : ``);
      };
    }),
    (t.nice = () =>
      n(Vr(n(), { floor: (e) => a(Math.floor(i(e))), ceil: (e) => a(Math.ceil(i(e))) }))),
    t
  );
}
function Qr() {
  let e = Zr(qn()).domain([1, 10]);
  return ((e.copy = () => Kn(e, Qr()).base(e.base())), M.apply(e, arguments), e);
}
var $r = e(() => {
  (j(), Fr(), Hr(), I(), P());
});
function ei(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function ti(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ni(e) {
  var t = 1,
    n = e(ei(t), ti(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(ei((t = +n)), ti(t)) : t;
    }),
    L(n)
  );
}
function ri() {
  var e = ni(qn());
  return (
    (e.copy = function () {
      return Kn(e, ri()).constant(e.constant());
    }),
    M.apply(e, arguments)
  );
}
var ii = e(() => {
  (R(), I(), P());
});
function ai(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function oi(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function si(e) {
  return e < 0 ? -e * e : e * e;
}
function ci(e) {
  var t = e(F, F),
    n = 1;
  function r() {
    return n === 1 ? e(F, F) : n === 0.5 ? e(oi, si) : e(ai(n), ai(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    L(t)
  );
}
function li() {
  var e = ci(qn());
  return (
    (e.copy = function () {
      return Kn(e, li()).exponent(e.exponent());
    }),
    M.apply(e, arguments),
    e
  );
}
function ui() {
  return li.apply(null, arguments).exponent(0.5);
}
var di = e(() => {
  (R(), I(), P());
});
function fi(e) {
  return Math.sign(e) * e * e;
}
function pi(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function mi() {
  var e = Jn(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = pi(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(fi(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length ? (e.range((t = Array.from(n, Bn)).map(fi)), i) : t.slice();
    }),
    (i.rangeRound = function (e) {
      return i.range(e).round(!0);
    }),
    (i.round = function (e) {
      return arguments.length ? ((n = !!e), i) : n;
    }),
    (i.clamp = function (t) {
      return arguments.length ? (e.clamp(t), i) : e.clamp();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return mi(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    M.apply(i, arguments),
    L(i)
  );
}
var hi = e(() => {
  (I(), P(), R(), Vn());
});
function gi() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = Cn(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[Ut(n, e)];
  }
  return (
    (a.invertExtent = function (r) {
      var i = t.indexOf(r);
      return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
    }),
    (a.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(A), i());
    }),
    (a.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), i()) : t.slice();
    }),
    (a.unknown = function (e) {
      return arguments.length ? ((r = e), a) : r;
    }),
    (a.quantiles = function () {
      return n.slice();
    }),
    (a.copy = function () {
      return gi().domain(e).range(t).unknown(r);
    }),
    M.apply(a, arguments)
  );
}
var _i = e(() => {
  (j(), P());
});
function vi() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[Ut(r, e, 0, n)] : a;
  }
  function s() {
    var i = -1;
    for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
    return o;
  }
  return (
    (o.domain = function (n) {
      return arguments.length ? (([e, t] = n), (e = +e), (t = +t), s()) : [e, t];
    }),
    (o.range = function (e) {
      return arguments.length ? ((n = (i = Array.from(e)).length - 1), s()) : i.slice();
    }),
    (o.invertExtent = function (a) {
      var o = i.indexOf(a);
      return o < 0 ? [NaN, NaN] : o < 1 ? [e, r[0]] : o >= n ? [r[n - 1], t] : [r[o - 1], r[o]];
    }),
    (o.unknown = function (e) {
      return (arguments.length && (a = e), o);
    }),
    (o.thresholds = function () {
      return r.slice();
    }),
    (o.copy = function () {
      return vi().domain([e, t]).range(i).unknown(a);
    }),
    M.apply(L(o), arguments)
  );
}
var yi = e(() => {
  (j(), R(), P());
});
function bi() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[Ut(e, i, 0, r)] : n;
  }
  return (
    (i.domain = function (n) {
      return arguments.length
        ? ((e = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (n) {
      return arguments.length
        ? ((t = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (n) {
      var r = t.indexOf(n);
      return [e[r - 1], e[r]];
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((n = e), i) : n;
    }),
    (i.copy = function () {
      return bi().domain(e).range(t).unknown(n);
    }),
    M.apply(i, arguments)
  );
}
var xi = e(() => {
  (j(), P());
});
function z(e, t, n, r) {
  function i(t) {
    return (e((t = arguments.length === 0 ? new Date() : new Date(+t))), t);
  }
  return (
    (i.floor = (t) => (e((t = new Date(+t))), t)),
    (i.ceil = (n) => (e((n = new Date(n - 1))), t(n, 1), e(n), n)),
    (i.round = (e) => {
      let t = i(e),
        n = i.ceil(e);
      return e - t < n - e ? t : n;
    }),
    (i.offset = (e, n) => (t((e = new Date(+e)), n == null ? 1 : Math.floor(n)), e)),
    (i.range = (n, r, a) => {
      let o = [];
      if (((n = i.ceil(n)), (a = a == null ? 1 : Math.floor(a)), !(n < r) || !(a > 0))) return o;
      let s;
      do (o.push((s = new Date(+n))), t(n, a), e(n));
      while (s < n && n < r);
      return o;
    }),
    (i.filter = (n) =>
      z(
        (t) => {
          if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
        },
        (e, r) => {
          if (e >= e)
            if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
            else for (; --r >= 0;) for (; t(e, 1), !n(e););
        },
      )),
    n &&
      ((i.count = (t, r) => (Si.setTime(+t), Ci.setTime(+r), e(Si), e(Ci), Math.floor(n(Si, Ci)))),
      (i.every = (e) => (
        (e = Math.floor(e)),
        !isFinite(e) || !(e > 0)
          ? null
          : e > 1
            ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0)
            : i
      ))),
    i
  );
}
var Si,
  Ci,
  B = e(() => {
    ((Si = new Date()), (Ci = new Date()));
  }),
  wi,
  Ti = e(() => {
    (B(),
      (wi = z(
        () => {},
        (e, t) => {
          e.setTime(+e + t);
        },
        (e, t) => t - e,
      )),
      (wi.every = (e) => (
        (e = Math.floor(e)),
        !isFinite(e) || !(e > 0)
          ? null
          : e > 1
            ? z(
                (t) => {
                  t.setTime(Math.floor(t / e) * e);
                },
                (t, n) => {
                  t.setTime(+t + n * e);
                },
                (t, n) => (n - t) / e,
              )
            : wi
      )),
      wi.range);
  }),
  V,
  H,
  U,
  W,
  Ei,
  Di,
  Oi,
  ki = e(() => {
    ((V = 1e3),
      (H = V * 60),
      (U = H * 60),
      (W = U * 24),
      (Ei = W * 7),
      (Di = W * 30),
      (Oi = W * 365));
  }),
  G,
  Ai = e(() => {
    (B(),
      ki(),
      (G = z(
        (e) => {
          e.setTime(e - e.getMilliseconds());
        },
        (e, t) => {
          e.setTime(+e + t * V);
        },
        (e, t) => (t - e) / V,
        (e) => e.getUTCSeconds(),
      )),
      G.range);
  }),
  ji,
  Mi,
  Ni = e(() => {
    (B(),
      ki(),
      (ji = z(
        (e) => {
          e.setTime(e - e.getMilliseconds() - e.getSeconds() * V);
        },
        (e, t) => {
          e.setTime(+e + t * H);
        },
        (e, t) => (t - e) / H,
        (e) => e.getMinutes(),
      )),
      ji.range,
      (Mi = z(
        (e) => {
          e.setUTCSeconds(0, 0);
        },
        (e, t) => {
          e.setTime(+e + t * H);
        },
        (e, t) => (t - e) / H,
        (e) => e.getUTCMinutes(),
      )),
      Mi.range);
  }),
  Pi,
  Fi,
  Ii = e(() => {
    (B(),
      ki(),
      (Pi = z(
        (e) => {
          e.setTime(e - e.getMilliseconds() - e.getSeconds() * V - e.getMinutes() * H);
        },
        (e, t) => {
          e.setTime(+e + t * U);
        },
        (e, t) => (t - e) / U,
        (e) => e.getHours(),
      )),
      Pi.range,
      (Fi = z(
        (e) => {
          e.setUTCMinutes(0, 0, 0);
        },
        (e, t) => {
          e.setTime(+e + t * U);
        },
        (e, t) => (t - e) / U,
        (e) => e.getUTCHours(),
      )),
      Fi.range);
  }),
  K,
  Li,
  Ri,
  zi = e(() => {
    (B(),
      ki(),
      (K = z(
        (e) => e.setHours(0, 0, 0, 0),
        (e, t) => e.setDate(e.getDate() + t),
        (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * H) / W,
        (e) => e.getDate() - 1,
      )),
      K.range,
      (Li = z(
        (e) => {
          e.setUTCHours(0, 0, 0, 0);
        },
        (e, t) => {
          e.setUTCDate(e.getUTCDate() + t);
        },
        (e, t) => (t - e) / W,
        (e) => e.getUTCDate() - 1,
      )),
      Li.range,
      (Ri = z(
        (e) => {
          e.setUTCHours(0, 0, 0, 0);
        },
        (e, t) => {
          e.setUTCDate(e.getUTCDate() + t);
        },
        (e, t) => (t - e) / W,
        (e) => Math.floor(e / W),
      )),
      Ri.range);
  });
function q(e) {
  return z(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * H) / Ei,
  );
}
function Bi(e) {
  return z(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)), t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / Ei,
  );
}
var Vi,
  Hi,
  Ui,
  Wi,
  J,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea = e(() => {
    (B(),
      ki(),
      (Vi = q(0)),
      (Hi = q(1)),
      (Ui = q(2)),
      (Wi = q(3)),
      (J = q(4)),
      (Gi = q(5)),
      (Ki = q(6)),
      Vi.range,
      Hi.range,
      Ui.range,
      Wi.range,
      J.range,
      Gi.range,
      Ki.range,
      (qi = Bi(0)),
      (Ji = Bi(1)),
      (Yi = Bi(2)),
      (Xi = Bi(3)),
      (Zi = Bi(4)),
      (Qi = Bi(5)),
      ($i = Bi(6)),
      qi.range,
      Ji.range,
      Yi.range,
      Xi.range,
      Zi.range,
      Qi.range,
      $i.range);
  }),
  ta,
  na,
  ra = e(() => {
    (B(),
      (ta = z(
        (e) => {
          (e.setDate(1), e.setHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setMonth(e.getMonth() + t);
        },
        (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
        (e) => e.getMonth(),
      )),
      ta.range,
      (na = z(
        (e) => {
          (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setUTCMonth(e.getUTCMonth() + t);
        },
        (e, t) =>
          t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
        (e) => e.getUTCMonth(),
      )),
      na.range);
  }),
  Y,
  X,
  ia = e(() => {
    (B(),
      (Y = z(
        (e) => {
          (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setFullYear(e.getFullYear() + t);
        },
        (e, t) => t.getFullYear() - e.getFullYear(),
        (e) => e.getFullYear(),
      )),
      (Y.every = (e) =>
        !isFinite((e = Math.floor(e))) || !(e > 0)
          ? null
          : z(
              (t) => {
                (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                  t.setMonth(0, 1),
                  t.setHours(0, 0, 0, 0));
              },
              (t, n) => {
                t.setFullYear(t.getFullYear() + n * e);
              },
            )),
      Y.range,
      (X = z(
        (e) => {
          (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setUTCFullYear(e.getUTCFullYear() + t);
        },
        (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
        (e) => e.getUTCFullYear(),
      )),
      (X.every = (e) =>
        !isFinite((e = Math.floor(e))) || !(e > 0)
          ? null
          : z(
              (t) => {
                (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                  t.setUTCMonth(0, 1),
                  t.setUTCHours(0, 0, 0, 0));
              },
              (t, n) => {
                t.setUTCFullYear(t.getUTCFullYear() + n * e);
              },
            )),
      X.range);
  });
function aa(e, t, n, r, i, a) {
  let o = [
    [G, 1, V],
    [G, 5, 5 * V],
    [G, 15, 15 * V],
    [G, 30, 30 * V],
    [a, 1, H],
    [a, 5, 5 * H],
    [a, 15, 15 * H],
    [a, 30, 30 * H],
    [i, 1, U],
    [i, 3, 3 * U],
    [i, 6, 6 * U],
    [i, 12, 12 * U],
    [r, 1, W],
    [r, 2, 2 * W],
    [n, 1, Ei],
    [t, 1, Di],
    [t, 3, 3 * Di],
    [e, 1, Oi],
  ];
  function s(e, t, n) {
    let r = t < e;
    r && ([e, t] = [t, e]);
    let i = n && typeof n.range == `function` ? n : c(e, t, n),
      a = i ? i.range(e, +t + 1) : [];
    return r ? a.reverse() : a;
  }
  function c(t, n, r) {
    let i = Math.abs(n - t) / r,
      a = It(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(un(t / Oi, n / Oi, r));
    if (a === 0) return wi.every(Math.max(un(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var oa,
  sa,
  ca,
  la,
  ua = e(() => {
    (j(),
      ki(),
      Ti(),
      Ai(),
      Ni(),
      Ii(),
      zi(),
      ea(),
      ra(),
      ia(),
      ([oa, sa] = aa(X, na, qi, Ri, Fi, Mi)),
      ([ca, la] = aa(Y, ta, Vi, K, Pi, ji)));
  }),
  da = e(() => {
    (B(), Ti(), Ai(), Ni(), Ii(), zi(), ea(), ra(), ia(), ua());
  });
function fa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function pa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ma(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function ha(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = _a(i),
    u = va(i),
    d = _a(a),
    f = va(a),
    p = _a(o),
    m = va(o),
    h = _a(s),
    ee = va(s),
    g = _a(c),
    _ = va(c),
    v = {
      a: se,
      A: ce,
      b: le,
      B: ue,
      c: null,
      d: za,
      e: za,
      f: Wa,
      g: to,
      G: ro,
      H: Ba,
      I: Va,
      j: Ha,
      L: Ua,
      m: Ga,
      M: Ka,
      p: de,
      q: fe,
      Q: Do,
      s: Oo,
      S: qa,
      u: Ja,
      U: Ya,
      V: Za,
      w: Qa,
      W: $a,
      x: null,
      X: null,
      y: eo,
      Y: no,
      Z: io,
      "%": Eo,
    },
    y = {
      a: pe,
      A: me,
      b: he,
      B: ge,
      c: null,
      d: ao,
      e: ao,
      f: uo,
      g: So,
      G: wo,
      H: oo,
      I: so,
      j: co,
      L: lo,
      m: fo,
      M: po,
      p: _e,
      q: ve,
      Q: Do,
      s: Oo,
      S: mo,
      u: ho,
      U: go,
      V: vo,
      w: yo,
      W: bo,
      x: null,
      X: null,
      y: xo,
      Y: Co,
      Z: To,
      "%": Eo,
    },
    te = {
      a: S,
      A: ie,
      b: C,
      B: ae,
      c: w,
      d: ka,
      e: ka,
      f: Fa,
      g: Ta,
      G: wa,
      H: ja,
      I: ja,
      j: Aa,
      L: Pa,
      m: Oa,
      M: Ma,
      p: re,
      q: Da,
      Q: La,
      s: Ra,
      S: Na,
      u: ba,
      U: xa,
      V: Sa,
      w: ya,
      W: Ca,
      x: oe,
      X: T,
      y: Ta,
      Y: wa,
      Z: Ea,
      "%": Ia,
    };
  ((v.x = b(n, v)),
    (v.X = b(r, v)),
    (v.c = b(t, v)),
    (y.x = b(n, y)),
    (y.X = b(r, y)),
    (y.c = b(t, y)));
  function b(e, t) {
    return function (n) {
      var r = [],
        i = -1,
        a = 0,
        o = e.length,
        s,
        c,
        l;
      for (n instanceof Date || (n = new Date(+n)); ++i < o;)
        e.charCodeAt(i) === 37 &&
          (r.push(e.slice(a, i)),
          (c = ko[(s = e.charAt(++i))]) == null ? (c = s === `e` ? ` ` : `0`) : (s = e.charAt(++i)),
          (l = t[s]) && (s = l(n, c)),
          r.push(s),
          (a = i + 1));
      return (r.push(e.slice(a, i)), r.join(``));
    };
  }
  function ne(e, t) {
    return function (n) {
      var r = ma(1900, void 0, 1),
        i = x(r, e, (n += ``), 0),
        a,
        o;
      if (i != n.length) return null;
      if (`Q` in r) return new Date(r.Q);
      if (`s` in r) return new Date(r.s * 1e3 + (`L` in r ? r.L : 0));
      if (
        (t && !(`Z` in r) && (r.Z = 0),
        `p` in r && (r.H = (r.H % 12) + r.p * 12),
        r.m === void 0 && (r.m = `q` in r ? r.q : 0),
        `V` in r)
      ) {
        if (r.V < 1 || r.V > 53) return null;
        (`w` in r || (r.w = 1),
          `Z` in r
            ? ((a = pa(ma(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? Ji.ceil(a) : Ji(a)),
              (a = Li.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = fa(ma(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? Hi.ceil(a) : Hi(a)),
              (a = K.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o = `Z` in r ? pa(ma(r.y, 0, 1)).getUTCDay() : fa(ma(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7) : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), pa(r)) : fa(r);
    };
  }
  function x(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)), (c = te[s in ko ? t.charAt(i++) : s]), !c || (r = c(e, n, r)) < 0)
        )
          return -1;
      } else if (s != n.charCodeAt(r++)) return -1;
    }
    return r;
  }
  function re(e, t, n) {
    var r = l.exec(t.slice(n));
    return r ? ((e.p = u.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function S(e, t, n) {
    var r = p.exec(t.slice(n));
    return r ? ((e.w = m.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function ie(e, t, n) {
    var r = d.exec(t.slice(n));
    return r ? ((e.w = f.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function C(e, t, n) {
    var r = g.exec(t.slice(n));
    return r ? ((e.m = _.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function ae(e, t, n) {
    var r = h.exec(t.slice(n));
    return r ? ((e.m = ee.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function w(e, n, r) {
    return x(e, t, n, r);
  }
  function oe(e, t, r) {
    return x(e, n, t, r);
  }
  function T(e, t, n) {
    return x(e, r, t, n);
  }
  function se(e) {
    return o[e.getDay()];
  }
  function ce(e) {
    return a[e.getDay()];
  }
  function le(e) {
    return c[e.getMonth()];
  }
  function ue(e) {
    return s[e.getMonth()];
  }
  function de(e) {
    return i[+(e.getHours() >= 12)];
  }
  function fe(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function pe(e) {
    return o[e.getUTCDay()];
  }
  function me(e) {
    return a[e.getUTCDay()];
  }
  function he(e) {
    return c[e.getUTCMonth()];
  }
  function ge(e) {
    return s[e.getUTCMonth()];
  }
  function _e(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function ve(e) {
    return 1 + ~~(e.getUTCMonth() / 3);
  }
  return {
    format: function (e) {
      var t = b((e += ``), v);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    parse: function (e) {
      var t = ne((e += ``), !1);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcFormat: function (e) {
      var t = b((e += ``), y);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcParse: function (e) {
      var t = ne((e += ``), !0);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
  };
}
function Z(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function ga(e) {
  return e.replace(jo, `\\$&`);
}
function _a(e) {
  return RegExp(`^(?:` + e.map(ga).join(`|`) + `)`, `i`);
}
function va(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function ya(e, t, n) {
  var r = Q.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function ba(e, t, n) {
  var r = Q.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function xa(e, t, n) {
  var r = Q.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function Sa(e, t, n) {
  var r = Q.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function Ca(e, t, n) {
  var r = Q.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function wa(e, t, n) {
  var r = Q.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function Ta(e, t, n) {
  var r = Q.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function Ea(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length) : -1;
}
function Da(e, t, n) {
  var r = Q.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function Oa(e, t, n) {
  var r = Q.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function ka(e, t, n) {
  var r = Q.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function Aa(e, t, n) {
  var r = Q.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function ja(e, t, n) {
  var r = Q.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function Ma(e, t, n) {
  var r = Q.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function Na(e, t, n) {
  var r = Q.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function Pa(e, t, n) {
  var r = Q.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function Fa(e, t, n) {
  var r = Q.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function Ia(e, t, n) {
  var r = Ao.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function La(e, t, n) {
  var r = Q.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function Ra(e, t, n) {
  var r = Q.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function za(e, t) {
  return Z(e.getDate(), t, 2);
}
function Ba(e, t) {
  return Z(e.getHours(), t, 2);
}
function Va(e, t) {
  return Z(e.getHours() % 12 || 12, t, 2);
}
function Ha(e, t) {
  return Z(1 + K.count(Y(e), e), t, 3);
}
function Ua(e, t) {
  return Z(e.getMilliseconds(), t, 3);
}
function Wa(e, t) {
  return Ua(e, t) + `000`;
}
function Ga(e, t) {
  return Z(e.getMonth() + 1, t, 2);
}
function Ka(e, t) {
  return Z(e.getMinutes(), t, 2);
}
function qa(e, t) {
  return Z(e.getSeconds(), t, 2);
}
function Ja(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Ya(e, t) {
  return Z(Vi.count(Y(e) - 1, e), t, 2);
}
function Xa(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? J(e) : J.ceil(e);
}
function Za(e, t) {
  return ((e = Xa(e)), Z(J.count(Y(e), e) + (Y(e).getDay() === 4), t, 2));
}
function Qa(e) {
  return e.getDay();
}
function $a(e, t) {
  return Z(Hi.count(Y(e) - 1, e), t, 2);
}
function eo(e, t) {
  return Z(e.getFullYear() % 100, t, 2);
}
function to(e, t) {
  return ((e = Xa(e)), Z(e.getFullYear() % 100, t, 2));
}
function no(e, t) {
  return Z(e.getFullYear() % 1e4, t, 4);
}
function ro(e, t) {
  var n = e.getDay();
  return ((e = n >= 4 || n === 0 ? J(e) : J.ceil(e)), Z(e.getFullYear() % 1e4, t, 4));
}
function io(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? `-` : ((t *= -1), `+`)) + Z((t / 60) | 0, `0`, 2) + Z(t % 60, `0`, 2);
}
function ao(e, t) {
  return Z(e.getUTCDate(), t, 2);
}
function oo(e, t) {
  return Z(e.getUTCHours(), t, 2);
}
function so(e, t) {
  return Z(e.getUTCHours() % 12 || 12, t, 2);
}
function co(e, t) {
  return Z(1 + Li.count(X(e), e), t, 3);
}
function lo(e, t) {
  return Z(e.getUTCMilliseconds(), t, 3);
}
function uo(e, t) {
  return lo(e, t) + `000`;
}
function fo(e, t) {
  return Z(e.getUTCMonth() + 1, t, 2);
}
function po(e, t) {
  return Z(e.getUTCMinutes(), t, 2);
}
function mo(e, t) {
  return Z(e.getUTCSeconds(), t, 2);
}
function ho(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function go(e, t) {
  return Z(qi.count(X(e) - 1, e), t, 2);
}
function _o(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Zi(e) : Zi.ceil(e);
}
function vo(e, t) {
  return ((e = _o(e)), Z(Zi.count(X(e), e) + (X(e).getUTCDay() === 4), t, 2));
}
function yo(e) {
  return e.getUTCDay();
}
function bo(e, t) {
  return Z(Ji.count(X(e) - 1, e), t, 2);
}
function xo(e, t) {
  return Z(e.getUTCFullYear() % 100, t, 2);
}
function So(e, t) {
  return ((e = _o(e)), Z(e.getUTCFullYear() % 100, t, 2));
}
function Co(e, t) {
  return Z(e.getUTCFullYear() % 1e4, t, 4);
}
function wo(e, t) {
  var n = e.getUTCDay();
  return ((e = n >= 4 || n === 0 ? Zi(e) : Zi.ceil(e)), Z(e.getUTCFullYear() % 1e4, t, 4));
}
function To() {
  return `+0000`;
}
function Eo() {
  return `%`;
}
function Do(e) {
  return +e;
}
function Oo(e) {
  return Math.floor(e / 1e3);
}
var ko,
  Q,
  Ao,
  jo,
  Mo = e(() => {
    (da(),
      (ko = { "-": ``, _: ` `, 0: `0` }),
      (Q = /^\s*\d+/),
      (Ao = /^%/),
      (jo = /[\\^$*+?|[\]().{}]/g));
  });
function No(e) {
  return (
    (Po = ha(e)), (Fo = Po.format), (Io = Po.parse), (Lo = Po.utcFormat), (Ro = Po.utcParse), Po
  );
}
var Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo = e(() => {
    (Mo(),
      No({
        dateTime: `%x, %X`,
        date: `%-m/%-d/%Y`,
        time: `%-I:%M:%S %p`,
        periods: [`AM`, `PM`],
        days: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`],
        shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
        months: [
          `January`,
          `February`,
          `March`,
          `April`,
          `May`,
          `June`,
          `July`,
          `August`,
          `September`,
          `October`,
          `November`,
          `December`,
        ],
        shortMonths: [
          `Jan`,
          `Feb`,
          `Mar`,
          `Apr`,
          `May`,
          `Jun`,
          `Jul`,
          `Aug`,
          `Sep`,
          `Oct`,
          `Nov`,
          `Dec`,
        ],
      }));
  }),
  Bo = e(() => {
    (zo(), Mo());
  });
function Vo(e) {
  return new Date(e);
}
function Ho(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Uo(e, t, n, r, i, a, o, s, c, l) {
  var u = Jn(),
    d = u.invert,
    f = u.domain,
    p = l(`.%L`),
    m = l(`:%S`),
    h = l(`%I:%M`),
    ee = l(`%I %p`),
    g = l(`%a %d`),
    _ = l(`%b %d`),
    v = l(`%B`),
    y = l(`%Y`);
  function te(e) {
    return (
      c(e) < e
        ? p
        : s(e) < e
          ? m
          : o(e) < e
            ? h
            : a(e) < e
              ? ee
              : r(e) < e
                ? i(e) < e
                  ? g
                  : _
                : n(e) < e
                  ? v
                  : y
    )(e);
  }
  return (
    (u.invert = function (e) {
      return new Date(d(e));
    }),
    (u.domain = function (e) {
      return arguments.length ? f(Array.from(e, Ho)) : f().map(Vo);
    }),
    (u.ticks = function (t) {
      var n = f();
      return e(n[0], n[n.length - 1], t ?? 10);
    }),
    (u.tickFormat = function (e, t) {
      return t == null ? te : l(t);
    }),
    (u.nice = function (e) {
      var n = f();
      return (
        (!e || typeof e.range != `function`) && (e = t(n[0], n[n.length - 1], e ?? 10)),
        e ? f(Vr(n, e)) : u
      );
    }),
    (u.copy = function () {
      return Kn(u, Uo(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function Wo() {
  return M.apply(
    Uo(ca, la, Y, ta, Vi, K, Pi, ji, G, Fo).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
    arguments,
  );
}
var Go = e(() => {
  (da(), Bo(), I(), P(), Hr());
});
function Ko() {
  return M.apply(
    Uo(oa, sa, X, na, qi, Li, Fi, Mi, G, Lo).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
    arguments,
  );
}
var qo = e(() => {
  (da(), Bo(), Go(), P());
});
function Jo() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = F,
    s = !1,
    c;
  function l(e) {
    return e == null || isNaN((e = +e))
      ? c
      : o(i === 0 ? 0.5 : ((e = (a(e) - n) * i), s ? Math.max(0, Math.min(1, e)) : e));
  }
  ((l.domain = function (o) {
    return arguments.length
      ? (([e, t] = o), (n = a((e = +e))), (r = a((t = +t))), (i = n === r ? 0 : 1 / (r - n)), l)
      : [e, t];
  }),
    (l.clamp = function (e) {
      return arguments.length ? ((s = !!e), l) : s;
    }),
    (l.interpolator = function (e) {
      return arguments.length ? ((o = e), l) : o;
    }));
  function u(e) {
    return function (t) {
      var n, r;
      return arguments.length ? (([n, r] = t), (o = e(n, r)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = u(dt)),
    (l.rangeRound = u(pt)),
    (l.unknown = function (e) {
      return arguments.length ? ((c = e), l) : c;
    }),
    function (o) {
      return ((a = o), (n = o(e)), (r = o(t)), (i = n === r ? 0 : 1 / (r - n)), l);
    }
  );
}
function $(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Yo() {
  var e = L(Jo()(F));
  return (
    (e.copy = function () {
      return $(e, Yo());
    }),
    N.apply(e, arguments)
  );
}
function Xo() {
  var e = Zr(Jo()).domain([1, 10]);
  return (
    (e.copy = function () {
      return $(e, Xo()).base(e.base());
    }),
    N.apply(e, arguments)
  );
}
function Zo() {
  var e = ni(Jo());
  return (
    (e.copy = function () {
      return $(e, Zo()).constant(e.constant());
    }),
    N.apply(e, arguments)
  );
}
function Qo() {
  var e = ci(Jo());
  return (
    (e.copy = function () {
      return $(e, Qo()).exponent(e.exponent());
    }),
    N.apply(e, arguments)
  );
}
function $o() {
  return Qo.apply(null, arguments).exponent(0.5);
}
var es = e(() => {
  (Mt(), I(), P(), R(), $r(), ii(), di());
});
function ts() {
  var e = [],
    t = F;
  function n(n) {
    if (n != null && !isNaN((n = +n))) return t((Ut(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(A), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => Sn(e, r / t));
    }),
    (n.copy = function () {
      return ts(t).domain(e);
    }),
    N.apply(n, arguments)
  );
}
var ns = e(() => {
  (j(), I(), P());
});
function rs() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = F,
    u,
    d = !1,
    f;
  function p(e) {
    return isNaN((e = +e))
      ? f
      : ((e = 0.5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c)),
        l(d ? Math.max(0, Math.min(1, e)) : e));
  }
  ((p.domain = function (l) {
    return arguments.length
      ? (([e, t, n] = l),
        (i = u((e = +e))),
        (a = u((t = +t))),
        (o = u((n = +n))),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p)
      : [e, t, n];
  }),
    (p.clamp = function (e) {
      return arguments.length ? ((d = !!e), p) : d;
    }),
    (p.interpolator = function (e) {
      return arguments.length ? ((l = e), p) : l;
    }));
  function m(e) {
    return function (t) {
      var n, r, i;
      return arguments.length ? (([n, r, i] = t), (l = At(e, [n, r, i])), p) : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(dt)),
    (p.rangeRound = m(pt)),
    (p.unknown = function (e) {
      return arguments.length ? ((f = e), p) : f;
    }),
    function (l) {
      return (
        (u = l),
        (i = l(e)),
        (a = l(t)),
        (o = l(n)),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p
      );
    }
  );
}
function is() {
  var e = L(rs()(F));
  return (
    (e.copy = function () {
      return $(e, is());
    }),
    N.apply(e, arguments)
  );
}
function as() {
  var e = Zr(rs()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return $(e, as()).base(e.base());
    }),
    N.apply(e, arguments)
  );
}
function os() {
  var e = ni(rs());
  return (
    (e.copy = function () {
      return $(e, os()).constant(e.constant());
    }),
    N.apply(e, arguments)
  );
}
function ss() {
  var e = ci(rs());
  return (
    (e.copy = function () {
      return $(e, ss()).exponent(e.exponent());
    }),
    N.apply(e, arguments)
  );
}
function cs() {
  return ss.apply(null, arguments).exponent(0.5);
}
var ls = e(() => {
    (Mt(), I(), P(), R(), $r(), es(), ii(), di());
  }),
  us = e(() => {
    (Ln(),
      Br(),
      R(),
      $r(),
      ii(),
      Nn(),
      di(),
      hi(),
      _i(),
      yi(),
      xi(),
      Go(),
      qo(),
      es(),
      ns(),
      ls(),
      Lr());
  });
export {
  li as $,
  Vi as A,
  hn as At,
  Ai as B,
  Et as Bt,
  da as C,
  En as Ct,
  Gi as D,
  vn as Dt,
  ea as E,
  Cn as Et,
  K as F,
  qt as Ft,
  bi as G,
  nt as Gt,
  Ti as H,
  Tt as Ht,
  Ii as I,
  Jt as It,
  _i as J,
  qe as Jt,
  yi as K,
  k as Kt,
  Pi as L,
  Mt as Lt,
  Ui as M,
  un as Mt,
  Wi as N,
  Yt as Nt,
  Hi as O,
  _n as Ot,
  zi as P,
  Xt as Pt,
  di as Q,
  Ni as R,
  Ot as Rt,
  Fo as S,
  kn as St,
  ta as T,
  wn as Tt,
  wi as U,
  ut as Ut,
  G as V,
  wt as Vt,
  xi as W,
  st as Wt,
  hi as X,
  l as Xt,
  gi as Y,
  Ie as Yt,
  mi as Z,
  he as Zt,
  Ko as _,
  Mn as _t,
  cs as a,
  zr as at,
  Bo as b,
  j as bt,
  ns as c,
  Rr as ct,
  Yo as d,
  Fr as dt,
  ui as et,
  Xo as f,
  Er as ft,
  qo as g,
  In as gt,
  Zo as h,
  Ln as ht,
  ss as i,
  Qr as it,
  J as j,
  mn as jt,
  Ki as k,
  gn as kt,
  ts as l,
  Lr as lt,
  $o as m,
  Pn as mt,
  is as n,
  ri as nt,
  os as o,
  Br as ot,
  Qo as p,
  Or as pt,
  vi as q,
  Je as qt,
  as as r,
  $r as rt,
  ls as s,
  R as st,
  us as t,
  ii as tt,
  es as u,
  Ir as ut,
  Go as v,
  Nn as vt,
  ra as w,
  Tn as wt,
  zo as x,
  An as xt,
  Wo as y,
  jn as yt,
  ji as z,
  kt as zt,
};
//# sourceMappingURL=src-c48c04e5744b.js.map
