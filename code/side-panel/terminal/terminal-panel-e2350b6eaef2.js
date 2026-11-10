import { n as e, o as t, t as n } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as r,
  Amn as i,
  B6t as a,
  Bx as o,
  Byt as s,
  Cpn as c,
  D3t as l,
  GL as u,
  Gz as d,
  Hx as f,
  KL as p,
  KMt as ee,
  M4t as m,
  N4t as h,
  QKt as g,
  Spn as _,
  Uz as te,
  Vx as v,
  W8t as y,
  WL as b,
  WMt as x,
  Wz as S,
  _zt as C,
  hmn as w,
  hz as T,
  kMt as E,
  kmn as D,
  mz as ne,
  qKt as O,
  qL as k,
  s3t as A,
  yzt as j,
  zyt as M,
} from "./app-initial-f094ef01c64d.js";
import { s as N, t as re } from "./theme-font-family-550a581dca1f.js";
import { n as ie, t as ae } from "./theme-font-face-loader-1d47d562eb8e.js";
import {
  _ as oe,
  a as se,
  c as ce,
  d as le,
  f as P,
  g as ue,
  h as de,
  i as fe,
  l as pe,
  m as me,
  n as he,
  p as ge,
  r as _e,
  s as F,
  t as ve,
  u as ye,
  v as be,
  y as I,
} from "./xterm-window-zoom-98caf71e2690.js";
import { t as L } from "./terminal-panel-ded4b9a894ab.js";
var R = n((e, t) => {
  (function (n, r) {
    typeof e == `object` && typeof t == `object`
      ? (t.exports = r())
      : typeof define == `function` && define.amd
        ? define([], r)
        : typeof e == `object`
          ? (e.ClipboardAddon = r())
          : (n.ClipboardAddon = r());
  })(self, () =>
    (() => {
      var e = {
          575: function (e, t, n) {
            (typeof self < `u` || typeof window < `u` || (n.g !== void 0 && n.g),
              (e.exports = (function () {
                var e,
                  t = `3.7.7`,
                  n = t,
                  r = typeof Buffer == `function`,
                  i = typeof TextDecoder == `function` ? new TextDecoder() : void 0,
                  a = typeof TextEncoder == `function` ? new TextEncoder() : void 0,
                  o = Array.prototype.slice.call(
                    `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
                  ),
                  s =
                    ((e = {}),
                    o.forEach(function (t, n) {
                      return (e[t] = n);
                    }),
                    e),
                  c = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
                  l = String.fromCharCode.bind(String),
                  u =
                    typeof Uint8Array.from == `function`
                      ? Uint8Array.from.bind(Uint8Array)
                      : function (e) {
                          return new Uint8Array(Array.prototype.slice.call(e, 0));
                        },
                  d = function (e) {
                    return e.replace(/=/g, ``).replace(/[+\/]/g, function (e) {
                      return e == `+` ? `-` : `_`;
                    });
                  },
                  f = function (e) {
                    return e.replace(/[^A-Za-z0-9\+\/]/g, ``);
                  },
                  p = function (e) {
                    for (var t, n, r, i, a = ``, s = e.length % 3, c = 0; c < e.length;) {
                      if (
                        (n = e.charCodeAt(c++)) > 255 ||
                        (r = e.charCodeAt(c++)) > 255 ||
                        (i = e.charCodeAt(c++)) > 255
                      )
                        throw TypeError(`invalid character found`);
                      a +=
                        o[((t = (n << 16) | (r << 8) | i) >> 18) & 63] +
                        o[(t >> 12) & 63] +
                        o[(t >> 6) & 63] +
                        o[63 & t];
                    }
                    return s ? a.slice(0, s - 3) + `===`.substring(s) : a;
                  },
                  ee =
                    typeof btoa == `function`
                      ? function (e) {
                          return btoa(e);
                        }
                      : r
                        ? function (e) {
                            return Buffer.from(e, `binary`).toString(`base64`);
                          }
                        : p,
                  m = r
                    ? function (e) {
                        return Buffer.from(e).toString(`base64`);
                      }
                    : function (e) {
                        for (var t = [], n = 0, r = e.length; n < r; n += 4096)
                          t.push(l.apply(null, e.subarray(n, n + 4096)));
                        return ee(t.join(``));
                      },
                  h = function (e, t) {
                    return (t === void 0 && (t = !1), t ? d(m(e)) : m(e));
                  },
                  g = function (e) {
                    if (e.length < 2)
                      return (t = e.charCodeAt(0)) < 128
                        ? e
                        : t < 2048
                          ? l(192 | (t >>> 6)) + l(128 | (63 & t))
                          : l(224 | ((t >>> 12) & 15)) +
                            l(128 | ((t >>> 6) & 63)) +
                            l(128 | (63 & t));
                    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                    return (
                      l(240 | ((t >>> 18) & 7)) +
                      l(128 | ((t >>> 12) & 63)) +
                      l(128 | ((t >>> 6) & 63)) +
                      l(128 | (63 & t))
                    );
                  },
                  _ = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                  te = function (e) {
                    return e.replace(_, g);
                  },
                  v = r
                    ? function (e) {
                        return Buffer.from(e, `utf8`).toString(`base64`);
                      }
                    : a
                      ? function (e) {
                          return m(a.encode(e));
                        }
                      : function (e) {
                          return ee(te(e));
                        },
                  y = function (e, t) {
                    return (t === void 0 && (t = !1), t ? d(v(e)) : v(e));
                  },
                  b = function (e) {
                    return y(e, !0);
                  },
                  x = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                  S = function (e) {
                    switch (e.length) {
                      case 4:
                        var t =
                          (((7 & e.charCodeAt(0)) << 18) |
                            ((63 & e.charCodeAt(1)) << 12) |
                            ((63 & e.charCodeAt(2)) << 6) |
                            (63 & e.charCodeAt(3))) -
                          65536;
                        return l(55296 + (t >>> 10)) + l(56320 + (1023 & t));
                      case 3:
                        return l(
                          ((15 & e.charCodeAt(0)) << 12) |
                            ((63 & e.charCodeAt(1)) << 6) |
                            (63 & e.charCodeAt(2)),
                        );
                      default:
                        return l(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
                    }
                  },
                  C = function (e) {
                    return e.replace(x, S);
                  },
                  w = function (e) {
                    if (((e = e.replace(/\s+/g, ``)), !c.test(e)))
                      throw TypeError(`malformed base64.`);
                    e += `==`.slice(2 - (3 & e.length));
                    for (var t, n, r, i = ``, a = 0; a < e.length;)
                      ((t =
                        (s[e.charAt(a++)] << 18) |
                        (s[e.charAt(a++)] << 12) |
                        ((n = s[e.charAt(a++)]) << 6) |
                        (r = s[e.charAt(a++)])),
                        (i +=
                          n === 64
                            ? l((t >> 16) & 255)
                            : r === 64
                              ? l((t >> 16) & 255, (t >> 8) & 255)
                              : l((t >> 16) & 255, (t >> 8) & 255, 255 & t)));
                    return i;
                  },
                  T =
                    typeof atob == `function`
                      ? function (e) {
                          return atob(f(e));
                        }
                      : r
                        ? function (e) {
                            return Buffer.from(e, `base64`).toString(`binary`);
                          }
                        : w,
                  E = r
                    ? function (e) {
                        return u(Buffer.from(e, `base64`));
                      }
                    : function (e) {
                        return u(
                          T(e)
                            .split(``)
                            .map(function (e) {
                              return e.charCodeAt(0);
                            }),
                        );
                      },
                  D = function (e) {
                    return E(O(e));
                  },
                  ne = r
                    ? function (e) {
                        return Buffer.from(e, `base64`).toString(`utf8`);
                      }
                    : i
                      ? function (e) {
                          return i.decode(E(e));
                        }
                      : function (e) {
                          return C(T(e));
                        },
                  O = function (e) {
                    return f(
                      e.replace(/[-_]/g, function (e) {
                        return e == `-` ? `+` : `/`;
                      }),
                    );
                  },
                  k = function (e) {
                    return ne(O(e));
                  },
                  A = function (e) {
                    return { value: e, enumerable: !1, writable: !0, configurable: !0 };
                  },
                  j = function () {
                    var e = function (e, t) {
                      return Object.defineProperty(String.prototype, e, A(t));
                    };
                    (e(`fromBase64`, function () {
                      return k(this);
                    }),
                      e(`toBase64`, function (e) {
                        return y(this, e);
                      }),
                      e(`toBase64URI`, function () {
                        return y(this, !0);
                      }),
                      e(`toBase64URL`, function () {
                        return y(this, !0);
                      }),
                      e(`toUint8Array`, function () {
                        return D(this);
                      }));
                  },
                  M = function () {
                    var e = function (e, t) {
                      return Object.defineProperty(Uint8Array.prototype, e, A(t));
                    };
                    (e(`toBase64`, function (e) {
                      return h(this, e);
                    }),
                      e(`toBase64URI`, function () {
                        return h(this, !0);
                      }),
                      e(`toBase64URL`, function () {
                        return h(this, !0);
                      }));
                  },
                  N = {
                    version: t,
                    VERSION: n,
                    atob: T,
                    atobPolyfill: w,
                    btoa: ee,
                    btoaPolyfill: p,
                    fromBase64: k,
                    toBase64: y,
                    encode: y,
                    encodeURI: b,
                    encodeURL: b,
                    utob: te,
                    btou: C,
                    decode: k,
                    isValid: function (e) {
                      if (typeof e != `string`) return !1;
                      var t = e.replace(/\s+/g, ``).replace(/={0,2}$/, ``);
                      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
                    },
                    fromUint8Array: h,
                    toUint8Array: D,
                    extendString: j,
                    extendUint8Array: M,
                    extendBuiltins: function () {
                      (j(), M());
                    },
                    Base64: {},
                  };
                return (
                  Object.keys(N).forEach(function (e) {
                    return (N.Base64[e] = N[e]);
                  }),
                  N
                );
              })()));
          },
        },
        t = {};
      function n(r) {
        var i = t[r];
        if (i !== void 0) return i.exports;
        var a = (t[r] = { exports: {} });
        return (e[r].call(a.exports, a, a.exports, n), a.exports);
      }
      n.g = (function () {
        if (typeof globalThis == `object`) return globalThis;
        try {
          return this || Function(`return this`)();
        } catch {
          if (typeof window == `object`) return window;
        }
      })();
      var r = {};
      return (
        (() => {
          var e = r;
          (Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Base64 = e.BrowserClipboardProvider = e.ClipboardAddon = void 0));
          let t = n(575);
          e.ClipboardAddon = class {
            constructor(e = new a(), t = new i()) {
              ((this._base64 = e), (this._provider = t));
            }
            activate(e) {
              ((this._terminal = e),
                (this._disposable = e.parser.registerOscHandler(52, (e) =>
                  this._setOrReportClipboard(e),
                )));
            }
            dispose() {
              return this._disposable?.dispose();
            }
            _readText(e, t) {
              let n = this._base64.encodeText(t);
              this._terminal?.input(`]52;${e};${n}`, !1);
            }
            _setOrReportClipboard(e) {
              let t = e.split(`;`);
              if (t.length < 2) return !0;
              let n = t[0],
                r = t[1];
              if (r === `?`) {
                let e = this._provider.readText(n);
                return e instanceof Promise
                  ? e.then((e) => (this._readText(n, e), !0))
                  : (this._readText(n, e), !0);
              }
              let i = ``;
              try {
                i = this._base64.decodeText(r);
              } catch {}
              let a = this._provider.writeText(n, i);
              return !(a instanceof Promise) || a.then(() => !0);
            }
          };
          class i {
            async readText(e) {
              return e === `c` ? navigator.clipboard.readText() : Promise.resolve(``);
            }
            async writeText(e, t) {
              return e === `c` ? navigator.clipboard.writeText(t) : Promise.resolve();
            }
          }
          e.BrowserClipboardProvider = i;
          class a {
            encodeText(e) {
              return t.Base64.encode(e);
            }
            decodeText(e) {
              let n = t.Base64.decode(e);
              return t.Base64.isValid(e) && t.Base64.encode(n) === e ? n : ``;
            }
          }
          e.Base64 = a;
        })(),
        r
      );
    })(),
  );
});
function z(e) {
  let t = (0, B.c)(7),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, V.jsx)(c, {
        id: `terminal.error.retry`,
        defaultMessage: `Reload`,
        description: `Button label that reloads rendering the terminal after a crash`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = (0, V.jsx)(E, { color: `secondary`, onClick: n, children: r })),
      (t[1] = n),
      (t[2] = i));
  let a, o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, V.jsx)(c, {
        id: `terminal.error.description`,
        defaultMessage: `Try reloading the terminal to continue`,
        description: `Description shown in the terminal panel when the embedded terminal crashes`,
      })),
      (o = (0, V.jsx)(c, {
        id: `terminal.error.title`,
        defaultMessage: `The terminal encountered an error`,
        description: `Title shown in the terminal panel when the embedded terminal crashes`,
      })),
      (t[3] = a),
      (t[4] = o))
    : ((a = t[3]), (o = t[4]));
  let s;
  return (
    t[5] === i
      ? (s = t[6])
      : ((s = (0, V.jsx)(b, {
          actions: i,
          className: `h-full bg-surface`,
          description: a,
          title: o,
        })),
        (t[5] = i),
        (t[6] = s)),
    s
  );
}
var B,
  V,
  xe = e(() => {
    ((B = D()), _(), r(), u(), (V = w()));
  });
function Se({
  clipboard: e,
  event: t,
  onNewTerminalTab: n,
  onPaste: r,
  pasteOnCtrlV: i = !1,
  sendText: a,
  term: o,
}) {
  if (t.type !== `keydown`) return !0;
  if (n != null && K(t, [`t`])) return (H(t), n(), !1);
  if (e != null) {
    if (Ce(t, o.hasSelection())) {
      H(t);
      let n = o.getSelection();
      return (n.length > 0 && e.writeText(n).catch(() => void 0), !1);
    }
    if (we(t, i))
      return (
        H(t),
        e
          .readText()
          .then((e) => {
            e.length > 0 && (r?.(), o.paste(e));
          })
          .catch(() => void 0),
        !1
      );
  }
  let s = Te(t);
  return s == null ? !0 : (H(t), a(s), !1);
}
function H(e) {
  (e.preventDefault(), e.stopPropagation());
}
function Ce(e, t) {
  return (t && W(e, `c`)) || U(e, `c`) || G(e, { ctrlKey: !0, shiftKey: !1 });
}
function we(e, t) {
  return (t && W(e, `v`)) || U(e, `v`) || G(e, { ctrlKey: !1, shiftKey: !0 });
}
function Te(e) {
  return K(e, [`ArrowLeft`, `ArrowUp`])
    ? q
    : K(e, [`ArrowRight`, `ArrowDown`])
      ? Ee
      : K(e, [`Backspace`])
        ? Y
        : K(e, [`Delete`])
          ? J
          : null;
}
function U(e, t) {
  return e.ctrlKey && e.shiftKey && !e.altKey && !e.metaKey && e.key.toLowerCase() === t;
}
function W(e, t) {
  return e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && e.key.toLowerCase() === t;
}
function G(e, t) {
  return (
    e.ctrlKey === t.ctrlKey &&
    e.shiftKey === t.shiftKey &&
    !e.altKey &&
    !e.metaKey &&
    e.key.toLowerCase() === `insert`
  );
}
function K(e, t) {
  return e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey && t.includes(e.key);
}
var q,
  Ee,
  J,
  Y,
  X = e(() => {
    ((q = ``), (Ee = ``), (J = `\v`), (Y = ``));
  });
function De(e, t, n, r = !1) {
  (t.fit(), h.resize(n, e.cols, e.rows, r));
}
function Z(e) {
  let t = (0, Ae.c)(5),
    { conversationId: n, sessionId: r } = e,
    i = r ?? n,
    a;
  t[0] === e ? (a = t[1]) : ((a = (0, $.jsx)(ke, { ...e })), (t[0] = e), (t[1] = a));
  let o;
  return (
    t[2] !== i || t[3] !== a
      ? ((o = (0, $.jsx)(p, { name: `TerminalPanel`, fallback: Oe, children: a }, i)),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function Oe(e) {
  return (0, $.jsx)(z, {
    onRetry: () => {
      e.resetError();
    },
  });
}
function ke(e) {
  let t = (0, Ae.c)(67),
    {
      conversationId: n,
      conversationTitle: r,
      hostId: i,
      environmentId: a,
      cwd: o,
      workspaceRoot: c,
      sessionId: u,
      initialPromptHint: d,
      loadingOverlay: p,
      onKeyEvent: m,
      onNewTerminalTab: _,
    } = e,
    { platform: b } = s(),
    x = l(),
    C = j(),
    w = f(v()),
    T = b !== `macOS`,
    E = g(y.lightChromeTheme),
    D = g(y.darkChromeTheme),
    O = g(y.codeFontSize),
    k,
    A,
    M;
  t[0] !== D || t[1] !== E || t[2] !== w
    ? ((k = w === `light` ? S(E, `light`) : S(D, `dark`)),
      (A =
        k.fonts.codeFace != null && re(k.fonts.code, k.fonts.codeFace) ? k.fonts.codeFace : void 0),
      (M = se(k.fonts)),
      (t[0] = D),
      (t[1] = E),
      (t[2] = w),
      (t[3] = k),
      (t[4] = A),
      (t[5] = M))
    : ((k = t[3]), (A = t[4]), (M = t[5]));
  let N = M,
    ae = (0, Q.useRef)(null),
    oe = (0, Q.useRef)(null),
    P = (0, Q.useRef)(null),
    ue = (0, Q.useRef)(null),
    ge = (0, Q.useRef)(null),
    F = (0, Q.useRef)(!1),
    ve = (0, Q.useRef)(N),
    ye = (0, Q.useRef)(O),
    be = (0, Q.useRef)(C),
    I,
    L;
  (t[6] === N
    ? ((I = t[7]), (L = t[8]))
    : ((I = () => {
        ve.current = N;
      }),
      (L = [N]),
      (t[6] = N),
      (t[7] = I),
      (t[8] = L)),
    (0, Q.useEffect)(I, L));
  let R, z;
  (t[9] === O
    ? ((R = t[10]), (z = t[11]))
    : ((R = () => {
        ye.current = O;
      }),
      (z = [O]),
      (t[9] = O),
      (t[10] = R),
      (t[11] = z)),
    (0, Q.useEffect)(R, z));
  let B, V;
  (t[12] === C
    ? ((B = t[13]), (V = t[14]))
    : ((B = () => {
        be.current = C;
      }),
      (V = [C]),
      (t[12] = C),
      (t[13] = B),
      (t[14] = V)),
    (0, Q.useLayoutEffect)(B, V));
  let xe;
  t[15] === r ? (xe = t[16]) : ((xe = () => r), (t[15] = r), (t[16] = xe));
  let H = (0, Q.useEffectEvent)(xe),
    Ce,
    we;
  (t[17] !== k || t[18] !== w
    ? ((we = () => {
        let e = ae.current;
        e && te(e, k, w);
      }),
      (Ce = [k, w]),
      (t[17] = k),
      (t[18] = w),
      (t[19] = Ce),
      (t[20] = we))
    : ((Ce = t[19]), (we = t[20])),
    (0, Q.useLayoutEffect)(we, Ce));
  let Te;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = () => {
        let e = P.current,
          t = ae.current;
        !e || !t || ((e.options.theme = le(t)), e.rows > 0 && e.refresh(0, e.rows - 1));
      }),
      (t[21] = Te))
    : (Te = t[21]);
  let U;
  (t[22] !== k || t[23] !== w ? ((U = [k, w]), (t[22] = k), (t[23] = w), (t[24] = U)) : (U = t[24]),
    (0, Q.useEffect)(Te, U));
  let W;
  t[25] !== n ||
  t[26] !== o ||
  t[27] !== a ||
  t[28] !== H ||
  t[29] !== i ||
  t[30] !== m ||
  t[31] !== _ ||
  t[32] !== b ||
  t[33] !== x ||
  t[34] !== u ||
  t[35] !== T ||
  t[36] !== c
    ? ((W = () => {
        let e = oe.current,
          t = ae.current;
        if (!e || !t) return;
        let r = H(),
          s =
            u ??
            h.create({
              conversationId: n,
              conversationTitle: r,
              hostId: i ?? null,
              environmentId: a,
              cwd: o ?? null,
              workspaceRoot: c,
            });
        ((ge.current = s), (F.current = !1));
        let l = !1,
          d = new Pe.Terminal({
            allowTransparency: !0,
            cursorStyle: `bar`,
            fontSize: ye.current,
            allowProposedApi: !0,
            cursorBlink: !0,
            fontFamily: ve.current,
            letterSpacing: 0,
            lineHeight: 1.2,
            linkHandler: de,
            theme: le(t),
          }),
          f = null,
          p = null,
          g = () => {
            (p != null && clearTimeout(p),
              (p = setTimeout(() => {
                ((p = null), ee(x, { cwd: o, hostId: i }));
              }, Fe)));
          },
          te = () => {
            f ??= requestAnimationFrame(() => {
              ((f = null), d.scrollToBottom());
            });
          };
        P.current = d;
        let v = _e(d),
          y = !1,
          S = () => {
            ((y = !0), h.recordUserInteraction(s));
          },
          C = new je.ClipboardAddon(),
          w = new Me.FitAddon();
        ((ue.current = w),
          d.loadAddon(C),
          d.loadAddon(w),
          d.loadAddon(new Ne.WebLinksAddon(me)),
          d.attachCustomKeyEventHandler(
            (e) =>
              m?.(e) !== !1 &&
              Se({
                clipboard: T ? ne.clipboard : void 0,
                event: e,
                onNewTerminalTab: _,
                onPaste: S,
                pasteOnCtrlV: b === `windows`,
                sendText: (e) => {
                  h.write(s, e, `user`);
                },
                term: d,
              }),
          ),
          d.open(e));
        let E = he(d, () => be.current),
          D = (t) => {
            let n = t !== void 0 && t;
            l ||
              (e.isConnected &&
                requestAnimationFrame(() => {
                  l || (e.isConnected && (F.current ? De(d, w, s, n) : w.fit()));
                }));
          };
        D();
        let O = h.getPreservedAlternateScreenMode(s),
          k = O != null,
          A = k,
          j = k,
          M = !1,
          N = !1,
          re = [],
          ie = (e) => {
            let t = ce(d);
            (v.write(e), g(), t && te());
          },
          se = h.register(s, {
            getRenderedOutput: () => pe(d),
            onClearActive: () => {
              t.contains(document.activeElement) && d.clear();
            },
            onInitLog: (e) => {
              let t = ce(d),
                n = A;
              ((A = !1),
                (k = n),
                (M = !0),
                (re.length = 0),
                v.replaceOutput(
                  n ? `\u001b[?${O ?? 1049}h${e}` : e,
                  () => {
                    ((M = !1), (N = !1), (k = !1));
                    for (let e of re.splice(0)) ie(e);
                    t && te();
                  },
                  () => {
                    N = !0;
                  },
                ));
            },
            onData: (e) => {
              if (M) {
                re.push(e);
                return;
              }
              ie(e);
            },
            onAttach: () => {
              l || ((F.current = !0), D(j), (j = !1));
            },
          }),
          fe = d.onData((e) => {
            let t = y;
            ((y = !1), !(N && !t) && h.write(s, e, `terminal-generated`));
          }),
          I = d.onTitleChange((e) => {
            h.setTitle(s, e);
          }),
          L = d.onKey((e) => {
            let { domEvent: t } = e;
            (S(), t.key === `Enter` && g());
          });
        (e.addEventListener(`input`, S, !0),
          e.addEventListener(`paste`, S, !0),
          u &&
            !h.isSessionStarted(u) &&
            requestAnimationFrame(() => {
              l ||
                h.create({
                  sessionId: u,
                  conversationId: n,
                  conversationTitle: r,
                  hostId: i ?? null,
                  environmentId: a,
                  cwd: o ?? null,
                  cols: d.cols,
                  rows: d.rows,
                  workspaceRoot: c,
                });
            }));
        let R = new ResizeObserver(() => {
          D();
        });
        return (
          R.observe(e),
          () => {
            ((l = !0),
              f != null && (cancelAnimationFrame(f), (f = null)),
              p != null && clearTimeout(p),
              R.disconnect(),
              e.removeEventListener(`input`, S, !0),
              e.removeEventListener(`paste`, S, !0),
              fe.dispose(),
              I.dispose(),
              L.dispose(),
              u && h.preserveAlternateScreen(s, d.buffer.active.type === `alternate` || k),
              se(),
              (ue.current = null),
              (ge.current = null),
              (F.current = !1),
              u || h.close(s),
              E(),
              v.dispose(),
              d.dispose(),
              (P.current = null));
          }
        );
      }),
      (t[25] = n),
      (t[26] = o),
      (t[27] = a),
      (t[28] = H),
      (t[29] = i),
      (t[30] = m),
      (t[31] = _),
      (t[32] = b),
      (t[33] = x),
      (t[34] = u),
      (t[35] = T),
      (t[36] = c),
      (t[37] = W))
    : (W = t[37]);
  let G;
  (t[38] !== n ||
  t[39] !== o ||
  t[40] !== a ||
  t[41] !== i ||
  t[42] !== m ||
  t[43] !== _ ||
  t[44] !== b ||
  t[45] !== x ||
  t[46] !== u ||
  t[47] !== T ||
  t[48] !== c
    ? ((G = [n, o, i, a, m, _, b, x, u, T, c]),
      (t[38] = n),
      (t[39] = o),
      (t[40] = a),
      (t[41] = i),
      (t[42] = m),
      (t[43] = _),
      (t[44] = b),
      (t[45] = x),
      (t[46] = u),
      (t[47] = T),
      (t[48] = c),
      (t[49] = G))
    : (G = t[49]),
    (0, Q.useEffect)(W, G));
  let K, q;
  (t[50] !== N || t[51] !== O || t[52] !== A
    ? ((K = () => {
        let e = P.current;
        if (!e) return;
        let t = !1;
        return (
          (async () => {
            (A != null && (await ie(A)),
              await fe(N, O),
              !t &&
                ((e.options.fontFamily = N),
                (e.options.fontSize = O),
                requestAnimationFrame(() => {
                  let t = P.current;
                  if (!t || t !== e) return;
                  let n = ue.current,
                    r = ge.current;
                  n && r && (F.current ? De(t, n, r) : n.fit());
                })));
          })(),
          () => {
            t = !0;
          }
        );
      }),
      (q = [N, O, A]),
      (t[50] = N),
      (t[51] = O),
      (t[52] = A),
      (t[53] = K),
      (t[54] = q))
    : ((K = t[53]), (q = t[54])),
    (0, Q.useEffect)(K, q));
  let Ee = u == null ? void 0 : `terminal-panel-${u}`,
    J;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = {
        backgroundColor: `var(--color-codex-terminal-background)`,
        color: `var(--color-codex-terminal-foreground)`,
      }),
      (t[55] = J))
    : (J = t[55]);
  let Y;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, $.jsx)(`div`, {
        className: `flex-1 overflow-hidden ps-4 pt-2 pb-3 tracking-normal`,
        children: (0, $.jsx)(`div`, { className: `h-full w-full overflow-hidden`, ref: oe }),
      })),
      (t[56] = Y))
    : (Y = t[56]);
  let X;
  t[57] === p
    ? (X = t[58])
    : ((X = p != null && (0, $.jsx)(`div`, { className: `absolute inset-0`, children: p })),
      (t[57] = p),
      (t[58] = X));
  let Z;
  t[59] !== N || t[60] !== O || t[61] !== d
    ? ((Z =
        d == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `pointer-events-none absolute inset-x-4 bottom-3 z-10 overflow-hidden pt-2`,
              style: { fontFamily: N, top: O * 1.2 + 10 },
              children: (0, $.jsx)(`div`, {
                className: `pointer-events-auto max-h-full w-fit max-w-full overflow-y-auto`,
                children: d,
              }),
            })),
      (t[59] = N),
      (t[60] = O),
      (t[61] = d),
      (t[62] = Z))
    : (Z = t[62]);
  let Oe;
  return (
    t[63] !== Ee || t[64] !== X || t[65] !== Z
      ? ((Oe = (0, $.jsxs)(`div`, {
          id: Ee,
          "data-codex-terminal": !0,
          "data-codex-xterm": !0,
          ref: ae,
          className: `relative flex h-full w-full flex-col app-theme`,
          style: J,
          children: [Y, X, Z],
        })),
        (t[63] = Ee),
        (t[64] = X),
        (t[65] = Z),
        (t[66] = Oe))
      : (Oe = t[66]),
    Oe
  );
}
var Ae, je, Me, Ne, Pe, Q, $, Fe;
e(() => {
  ((Ae = D()),
    A(),
    (je = R()),
    (Me = I()),
    (Ne = be()),
    (Pe = oe()),
    a(),
    (Q = t(i(), 1)),
    ae(),
    N(),
    C(),
    k(),
    x(),
    M(),
    T(),
    ue(),
    O(),
    m(),
    d(),
    o(),
    ge(),
    xe(),
    X(),
    P(),
    ye(),
    F(),
    ve(),
    L(),
    ($ = w()),
    (Fe = 500));
})();
export { Z as TerminalPanel };
//# sourceMappingURL=terminal-panel-e2350b6eaef2.js.map
