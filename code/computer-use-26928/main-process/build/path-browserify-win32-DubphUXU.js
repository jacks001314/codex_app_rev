const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./_baseSlice-BXYPgFit.js");
var n = e.t((e, n) => {
    var r = t.p(),
      i = t.r(),
      a = t.a(),
      o = t.c();
    function s(e, t, n) {
      if (!o(n)) return !1;
      var s = typeof t;
      return (s == `number` ? i(n) && a(t, n.length) : s == `string` && t in n) ? r(n[t], e) : !1;
    }
    n.exports = s;
  }),
  r = e.t((e, t) => {
    var n = /\s/;
    function r(e) {
      for (var t = e.length; t-- && n.test(e.charAt(t)););
      return t;
    }
    t.exports = r;
  }),
  i = e.t((e, t) => {
    var n = r(),
      i = /^\s+/;
    function a(e) {
      return e && e.slice(0, n(e) + 1).replace(i, ``);
    }
    t.exports = a;
  }),
  a = e.t((e, n) => {
    var r = i(),
      a = t.c(),
      o = t.n(),
      s = NaN,
      c = /^[-+]0x[0-9a-f]+$/i,
      l = /^0b[01]+$/i,
      u = /^0o[0-7]+$/i,
      d = parseInt;
    function f(e) {
      if (typeof e == `number`) return e;
      if (o(e)) return s;
      if (a(e)) {
        var t = typeof e.valueOf == `function` ? e.valueOf() : e;
        e = a(t) ? t + `` : t;
      }
      if (typeof e != `string`) return e === 0 ? e : +e;
      e = r(e);
      var n = l.test(e);
      return n || u.test(e) ? d(e.slice(2), n ? 2 : 8) : c.test(e) ? s : +e;
    }
    n.exports = f;
  }),
  o = e.t((e, t) => {
    var n = a(),
      r = 1 / 0,
      i = 17976931348623157e292;
    function o(e) {
      return e
        ? ((e = n(e)), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0)
        : e === 0
          ? e
          : 0;
    }
    t.exports = o;
  }),
  s = e.t((e, t) => {
    var n = o();
    function r(e) {
      var t = n(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    t.exports = r;
  }),
  c = e.t((e, t) => {
    function n(e, t) {
      if (typeof e != `object` || !e) throw TypeError(`${t} must be an object`);
    }
    function r(e, t) {
      if (typeof e != `string`) throw TypeError(`${t} must be a string`);
    }
    function i(e) {
      return e === 47 || e === 92;
    }
    function a(e) {
      return e === 47;
    }
    function o(e) {
      return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
    }
    function s(e, t, n, r) {
      let i = ``,
        a = 0,
        o = -1,
        s = 0,
        c = 0;
      for (let l = 0; l <= e.length; ++l) {
        if (l < e.length) c = e.charCodeAt(l);
        else if (r(c)) break;
        else c = 47;
        if (r(c)) {
          if (o !== l - 1 && s !== 1) {
            if (s === 2) {
              if (
                i.length < 2 ||
                a !== 2 ||
                i.charCodeAt(i.length - 1) !== 46 ||
                i.charCodeAt(i.length - 2) !== 46
              ) {
                if (i.length > 2) {
                  let e = i.lastIndexOf(n);
                  (e === -1
                    ? ((i = ``), (a = 0))
                    : ((i = i.slice(0, e)), (a = i.length - 1 - i.lastIndexOf(n))),
                    (o = l),
                    (s = 0));
                  continue;
                }
                if (i.length !== 0) {
                  ((i = ``), (a = 0), (o = l), (s = 0));
                  continue;
                }
              }
              t && ((i += i.length > 0 ? `${n}..` : `..`), (a = 2));
            } else
              (i.length > 0 ? (i += `${n}${e.slice(o + 1, l)}`) : (i = e.slice(o + 1, l)),
                (a = l - o - 1));
          }
          ((o = l), (s = 0));
        } else c === 46 && s !== -1 ? ++s : (s = -1);
      }
      return i;
    }
    function c(e) {
      return e ? `${e[0] === `.` ? `` : `.`}${e}` : ``;
    }
    function l(e, t) {
      n(t, `pathObject`);
      let r = t.dir || t.root,
        i = t.base || `${t.name || ``}${c(t.ext)}`;
      return r ? (r === t.root ? `${r}${i}` : `${r}${e}${i}`) : i;
    }
    var u = {
        resolve(...e) {
          let t = ``,
            n = ``,
            a = !1;
          for (let s = e.length - 1; s >= -1; s--) {
            let c;
            if (s >= 0) {
              if (((c = e[s]), r(c, `paths[${s}]`), c.length === 0)) continue;
            } else
              (c === void 0 ||
                (c.slice(0, 2).toLowerCase() !== t.toLowerCase() && c.charCodeAt(2) === 92)) &&
                (c = `${t}\\`);
            let l = c.length,
              u = 0,
              d = ``,
              f = !1,
              p = c.charCodeAt(0);
            if (l === 1) i(p) && ((u = 1), (f = !0));
            else if (i(p)) {
              if (((f = !0), i(c.charCodeAt(1)))) {
                let e = 2,
                  t = e;
                for (; e < l && !i(c.charCodeAt(e));) e++;
                if (e < l && e !== t) {
                  let n = c.slice(t, e);
                  for (t = e; e < l && i(c.charCodeAt(e));) e++;
                  if (e < l && e !== t) {
                    for (t = e; e < l && !i(c.charCodeAt(e));) e++;
                    (e === l || e !== t) &&
                      (n !== `.` && n !== `?`
                        ? ((d = `\\\\${n}\\${c.slice(t, e)}`), (u = e))
                        : ((d = `\\\\${n}`), (u = 4)));
                  }
                }
              } else u = 1;
            } else
              o(p) &&
                c.charCodeAt(1) === 58 &&
                ((d = c.slice(0, 2)), (u = 2), l > 2 && i(c.charCodeAt(2)) && ((f = !0), (u = 3)));
            if (d.length > 0) {
              if (t.length > 0) {
                if (d.toLowerCase() !== t.toLowerCase()) continue;
              } else t = d;
            }
            if (a) {
              if (t.length > 0) break;
            } else if (((n = `${c.slice(u)}\\${n}`), (a = f), f && t.length > 0)) break;
          }
          return ((n = s(n, !a, `\\`, i)), a ? `${t}\\${n}` : `${t}${n}` || `.`);
        },
        normalize(e) {
          r(e, `path`);
          let t = e.length;
          if (t === 0) return `.`;
          let n = 0,
            c,
            l = !1,
            u = e.charCodeAt(0);
          if (t === 1) return a(u) ? `\\` : e;
          if (i(u)) {
            if (((l = !0), i(e.charCodeAt(1)))) {
              let r = 2,
                a = r;
              for (; r < t && !i(e.charCodeAt(r));) r++;
              if (r < t && r !== a) {
                let o = e.slice(a, r);
                for (a = r; r < t && i(e.charCodeAt(r));) r++;
                if (r < t && r !== a) {
                  for (a = r; r < t && !i(e.charCodeAt(r));) r++;
                  if (r === t || r !== a) {
                    if (o === `.` || o === `?`) ((c = `\\\\${o}`), (n = 4));
                    else if (r === t) return `\\\\${o}\\${e.slice(a)}\\`;
                    else ((c = `\\\\${o}\\${e.slice(a, r)}`), (n = r));
                  }
                }
              }
            } else n = 1;
          } else
            o(u) &&
              e.charCodeAt(1) === 58 &&
              ((c = e.slice(0, 2)), (n = 2), t > 2 && i(e.charCodeAt(2)) && ((l = !0), (n = 3)));
          let d = n < t ? s(e.slice(n), !l, `\\`, i) : ``;
          return (
            d.length === 0 && !l && (d = `.`),
            d.length > 0 && i(e.charCodeAt(t - 1)) && (d += `\\`),
            c === void 0 ? (l ? `\\${d}` : d) : l ? `${c}\\${d}` : `${c}${d}`
          );
        },
        isAbsolute(e) {
          r(e, `path`);
          let t = e.length;
          if (t === 0) return !1;
          let n = e.charCodeAt(0);
          return i(n) || (t > 2 && o(n) && e.charCodeAt(1) === 58 && i(e.charCodeAt(2)));
        },
        join(...e) {
          if (e.length === 0) return `.`;
          let t, n;
          for (let i = 0; i < e.length; ++i) {
            let a = e[i];
            (r(a, `path`), a.length > 0 && (t === void 0 ? (t = n = a) : (t += `\\${a}`)));
          }
          if (t === void 0) return `.`;
          let a = !0,
            o = 0;
          if (i(n.charCodeAt(0))) {
            ++o;
            let e = n.length;
            e > 1 && i(n.charCodeAt(1)) && (++o, e > 2 && (i(n.charCodeAt(2)) ? ++o : (a = !1)));
          }
          if (a) {
            for (; o < t.length && i(t.charCodeAt(o));) o++;
            o >= 2 && (t = `\\${t.slice(o)}`);
          }
          return u.normalize(t);
        },
        relative(e, t) {
          if ((r(e, `from`), r(t, `to`), e === t)) return ``;
          let n = u.resolve(e),
            i = u.resolve(t);
          if (n === i || ((e = n.toLowerCase()), (t = i.toLowerCase()), e === t)) return ``;
          if (n.length !== e.length || i.length !== t.length) {
            let e = n.split(`\\`),
              t = i.split(`\\`);
            (e[e.length - 1] === `` && e.pop(), t[t.length - 1] === `` && t.pop());
            let r = e.length,
              a = t.length,
              o = r < a ? r : a,
              s = 0;
            for (; s < o && e[s].toLowerCase() === t[s].toLowerCase(); s++);
            return s === 0
              ? i
              : s === o
                ? a > o
                  ? t.slice(s).join(`\\`)
                  : r > o
                    ? `..\\`.repeat(r - 1 - s) + `..`
                    : ``
                : `..\\`.repeat(r - s) + t.slice(s).join(`\\`);
          }
          let a = 0;
          for (; a < e.length && e.charCodeAt(a) === 92;) a++;
          let o = e.length;
          for (; o - 1 > a && e.charCodeAt(o - 1) === 92;) o--;
          let s = o - a,
            c = 0;
          for (; c < t.length && t.charCodeAt(c) === 92;) c++;
          let l = t.length;
          for (; l - 1 > c && t.charCodeAt(l - 1) === 92;) l--;
          let d = l - c,
            f = s < d ? s : d,
            p = -1,
            m = 0;
          for (; m < f; m++) {
            let n = e.charCodeAt(a + m);
            if (n !== t.charCodeAt(c + m)) break;
            n === 92 && (p = m);
          }
          if (m !== f) {
            if (p === -1) return i;
          } else {
            if (d > f) {
              if (t.charCodeAt(c + m) === 92) return i.slice(c + m + 1);
              if (m === 2) return i.slice(c + m);
            }
            (s > f && (e.charCodeAt(a + m) === 92 ? (p = m) : m === 2 && (p = 3)),
              p === -1 && (p = 0));
          }
          let h = ``;
          for (m = a + p + 1; m <= o; ++m)
            (m === o || e.charCodeAt(m) === 92) && (h += h.length === 0 ? `..` : `\\..`);
          return (
            (c += p),
            h.length > 0 ? `${h}${i.slice(c, l)}` : (i.charCodeAt(c) === 92 && ++c, i.slice(c, l))
          );
        },
        toNamespacedPath(e) {
          if (typeof e != `string` || e.length === 0) return e;
          let t = u.resolve(e);
          if (t.length <= 2) return e;
          if (t.charCodeAt(0) === 92) {
            if (t.charCodeAt(1) === 92) {
              let e = t.charCodeAt(2);
              if (e !== 63 && e !== 46) return `\\\\?\\UNC\\${t.slice(2)}`;
            }
          } else if (o(t.charCodeAt(0)) && t.charCodeAt(1) === 58 && t.charCodeAt(2) === 92)
            return `\\\\?\\${t}`;
          return t;
        },
        dirname(e) {
          r(e, `path`);
          let t = e.length;
          if (t === 0) return `.`;
          let n = -1,
            a = 0,
            s = e.charCodeAt(0);
          if (t === 1) return i(s) ? e : `.`;
          if (i(s)) {
            if (((n = a = 1), i(e.charCodeAt(1)))) {
              let r = 2,
                o = r;
              for (; r < t && !i(e.charCodeAt(r));) r++;
              if (r < t && r !== o) {
                for (o = r; r < t && i(e.charCodeAt(r));) r++;
                if (r < t && r !== o) {
                  for (o = r; r < t && !i(e.charCodeAt(r));) r++;
                  if (r === t) return e;
                  r !== o && (n = a = r + 1);
                }
              }
            }
          } else
            o(s) && e.charCodeAt(1) === 58 && ((n = t > 2 && i(e.charCodeAt(2)) ? 3 : 2), (a = n));
          let c = -1,
            l = !0;
          for (let n = t - 1; n >= a; --n)
            if (i(e.charCodeAt(n))) {
              if (!l) {
                c = n;
                break;
              }
            } else l = !1;
          if (c === -1) {
            if (n === -1) return `.`;
            c = n;
          }
          return e.slice(0, c);
        },
        basename(e, t) {
          (t !== void 0 && r(t, `suffix`), r(e, `path`));
          let n = 0,
            a = -1,
            s = !0;
          if (
            (e.length >= 2 && o(e.charCodeAt(0)) && e.charCodeAt(1) === 58 && (n = 2),
            t !== void 0 && t.length > 0 && t.length <= e.length)
          ) {
            if (t === e) return ``;
            let r = t.length - 1,
              o = -1;
            for (let c = e.length - 1; c >= n; --c) {
              let l = e.charCodeAt(c);
              if (i(l)) {
                if (!s) {
                  n = c + 1;
                  break;
                }
              } else
                (o === -1 && ((s = !1), (o = c + 1)),
                  r >= 0 && (l === t.charCodeAt(r) ? --r === -1 && (a = c) : ((r = -1), (a = o))));
            }
            return (n === a ? (a = o) : a === -1 && (a = e.length), e.slice(n, a));
          }
          for (let t = e.length - 1; t >= n; --t)
            if (i(e.charCodeAt(t))) {
              if (!s) {
                n = t + 1;
                break;
              }
            } else a === -1 && ((s = !1), (a = t + 1));
          return a === -1 ? `` : e.slice(n, a);
        },
        extname(e) {
          r(e, `path`);
          let t = 0,
            n = -1,
            a = 0,
            s = -1,
            c = !0,
            l = 0;
          e.length >= 2 && e.charCodeAt(1) === 58 && o(e.charCodeAt(0)) && (t = a = 2);
          for (let r = e.length - 1; r >= t; --r) {
            let t = e.charCodeAt(r);
            if (i(t)) {
              if (!c) {
                a = r + 1;
                break;
              }
              continue;
            }
            (s === -1 && ((c = !1), (s = r + 1)),
              t === 46 ? (n === -1 ? (n = r) : l !== 1 && (l = 1)) : n !== -1 && (l = -1));
          }
          return n === -1 || s === -1 || l === 0 || (l === 1 && n === s - 1 && n === a + 1)
            ? ``
            : e.slice(n, s);
        },
        format: l.bind(null, `\\`),
        parse(e) {
          r(e, `path`);
          let t = { root: ``, dir: ``, base: ``, ext: ``, name: `` };
          if (e.length === 0) return t;
          let n = e.length,
            a = 0,
            s = e.charCodeAt(0);
          if (n === 1) return i(s) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
          if (i(s)) {
            if (((a = 1), i(e.charCodeAt(1)))) {
              let t = 2,
                r = t;
              for (; t < n && !i(e.charCodeAt(t));) t++;
              if (t < n && t !== r) {
                for (r = t; t < n && i(e.charCodeAt(t));) t++;
                if (t < n && t !== r) {
                  for (r = t; t < n && !i(e.charCodeAt(t));) t++;
                  t === n ? (a = t) : t !== r && (a = t + 1);
                }
              }
            }
          } else if (o(s) && e.charCodeAt(1) === 58) {
            if (n <= 2) return ((t.root = t.dir = e), t);
            if (((a = 2), i(e.charCodeAt(2)))) {
              if (n === 3) return ((t.root = t.dir = e), t);
              a = 3;
            }
          }
          a > 0 && (t.root = e.slice(0, a));
          let c = -1,
            l = a,
            u = -1,
            d = !0,
            f = e.length - 1,
            p = 0;
          for (; f >= a; --f) {
            if (((s = e.charCodeAt(f)), i(s))) {
              if (!d) {
                l = f + 1;
                break;
              }
              continue;
            }
            (u === -1 && ((d = !1), (u = f + 1)),
              s === 46 ? (c === -1 ? (c = f) : p !== 1 && (p = 1)) : c !== -1 && (p = -1));
          }
          return (
            u !== -1 &&
              (c === -1 || p === 0 || (p === 1 && c === u - 1 && c === l + 1)
                ? (t.base = t.name = e.slice(l, u))
                : ((t.name = e.slice(l, c)), (t.base = e.slice(l, u)), (t.ext = e.slice(c, u)))),
            (t.dir = l > 0 && l !== a ? e.slice(0, l - 1) : t.root),
            t
          );
        },
        sep: `\\`,
        delimiter: `;`,
        win32: null,
        posix: null,
      },
      d = {
        resolve(...e) {
          let t = ``,
            n = !1;
          for (let i = e.length - 1; i >= 0 && !n; i--) {
            let a = e[i];
            (r(a, `paths[${i}]`),
              a.length !== 0 && ((t = `${a}/${t}`), (n = a.charCodeAt(0) === 47)));
          }
          return ((t = s(t, !n, `/`, a)), n ? `/${t}` : t.length > 0 ? t : `.`);
        },
        normalize(e) {
          if ((r(e, `path`), e.length === 0)) return `.`;
          let t = e.charCodeAt(0) === 47,
            n = e.charCodeAt(e.length - 1) === 47;
          return (
            (e = s(e, !t, `/`, a)),
            e.length === 0 ? (t ? `/` : n ? `./` : `.`) : (n && (e += `/`), t ? `/${e}` : e)
          );
        },
        isAbsolute(e) {
          return (r(e, `path`), e.length > 0 && e.charCodeAt(0) === 47);
        },
        join(...e) {
          if (e.length === 0) return `.`;
          let t = [];
          for (let n = 0; n < e.length; ++n) {
            let i = e[n];
            (r(i, `path`), i.length > 0 && t.push(i));
          }
          return t.length === 0 ? `.` : d.normalize(t.join(`/`));
        },
        relative(e, t) {
          if (
            (r(e, `from`), r(t, `to`), e === t || ((e = d.resolve(e)), (t = d.resolve(t)), e === t))
          )
            return ``;
          let n = e.length,
            i = n - 1,
            a = t.length - 1,
            o = i < a ? i : a,
            s = -1,
            c = 0;
          for (; c < o; c++) {
            let n = e.charCodeAt(1 + c);
            if (n !== t.charCodeAt(1 + c)) break;
            n === 47 && (s = c);
          }
          if (c === o) {
            if (a > o) {
              if (t.charCodeAt(1 + c) === 47) return t.slice(1 + c + 1);
              if (c === 0) return t.slice(1 + c);
            } else i > o && (e.charCodeAt(1 + c) === 47 ? (s = c) : c === 0 && (s = 0));
          }
          let l = ``;
          for (c = 1 + s + 1; c <= n; ++c)
            (c === n || e.charCodeAt(c) === 47) && (l += l.length === 0 ? `..` : `/..`);
          return `${l}${t.slice(1 + s)}`;
        },
        toNamespacedPath(e) {
          return e;
        },
        dirname(e) {
          if ((r(e, `path`), e.length === 0)) return `.`;
          let t = e.charCodeAt(0) === 47,
            n = -1,
            i = !0;
          for (let t = e.length - 1; t >= 1; --t)
            if (e.charCodeAt(t) === 47) {
              if (!i) {
                n = t;
                break;
              }
            } else i = !1;
          return n === -1 ? (t ? `/` : `.`) : t && n === 1 ? `//` : e.slice(0, n);
        },
        basename(e, t) {
          (t !== void 0 && r(t, `suffix`), r(e, `path`));
          let n = 0,
            i = -1,
            a = !0;
          if (t !== void 0 && t.length > 0 && t.length <= e.length) {
            if (t === e) return ``;
            let r = t.length - 1,
              o = -1;
            for (let s = e.length - 1; s >= 0; --s) {
              let c = e.charCodeAt(s);
              if (c === 47) {
                if (!a) {
                  n = s + 1;
                  break;
                }
              } else
                (o === -1 && ((a = !1), (o = s + 1)),
                  r >= 0 && (c === t.charCodeAt(r) ? --r === -1 && (i = s) : ((r = -1), (i = o))));
            }
            return (n === i ? (i = o) : i === -1 && (i = e.length), e.slice(n, i));
          }
          for (let t = e.length - 1; t >= 0; --t)
            if (e.charCodeAt(t) === 47) {
              if (!a) {
                n = t + 1;
                break;
              }
            } else i === -1 && ((a = !1), (i = t + 1));
          return i === -1 ? `` : e.slice(n, i);
        },
        extname(e) {
          r(e, `path`);
          let t = -1,
            n = 0,
            i = -1,
            a = !0,
            o = 0;
          for (let r = e.length - 1; r >= 0; --r) {
            let s = e[r];
            if (s === `/`) {
              if (!a) {
                n = r + 1;
                break;
              }
              continue;
            }
            (i === -1 && ((a = !1), (i = r + 1)),
              s === `.` ? (t === -1 ? (t = r) : o !== 1 && (o = 1)) : t !== -1 && (o = -1));
          }
          return t === -1 || i === -1 || o === 0 || (o === 1 && t === i - 1 && t === n + 1)
            ? ``
            : e.slice(t, i);
        },
        format: l.bind(null, `/`),
        parse(e) {
          r(e, `path`);
          let t = { root: ``, dir: ``, base: ``, ext: ``, name: `` };
          if (e.length === 0) return t;
          let n = e.charCodeAt(0) === 47,
            i;
          n ? ((t.root = `/`), (i = 1)) : (i = 0);
          let a = -1,
            o = 0,
            s = -1,
            c = !0,
            l = e.length - 1,
            u = 0;
          for (; l >= i; --l) {
            let t = e.charCodeAt(l);
            if (t === 47) {
              if (!c) {
                o = l + 1;
                break;
              }
              continue;
            }
            (s === -1 && ((c = !1), (s = l + 1)),
              t === 46 ? (a === -1 ? (a = l) : u !== 1 && (u = 1)) : a !== -1 && (u = -1));
          }
          if (s !== -1) {
            let r = o === 0 && n ? 1 : o;
            a === -1 || u === 0 || (u === 1 && a === s - 1 && a === o + 1)
              ? (t.base = t.name = e.slice(r, s))
              : ((t.name = e.slice(r, a)), (t.base = e.slice(r, s)), (t.ext = e.slice(a, s)));
          }
          return (o > 0 ? (t.dir = e.slice(0, o - 1)) : n && (t.dir = `/`), t);
        },
        sep: `/`,
        delimiter: `:`,
        win32: null,
        posix: null,
      };
    ((d.win32 = u.win32 = u),
      (d.posix = u.posix = d),
      (u._makeLong = u.toNamespacedPath),
      (d._makeLong = d.toNamespacedPath),
      (t.exports = d));
  });
(Object.defineProperty(exports, "i", {
  enumerable: !0,
  get: function () {
    return n;
  },
}),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return s;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return a;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }));
//# sourceMappingURL=path-browserify-win32-DubphUXU.js.map
