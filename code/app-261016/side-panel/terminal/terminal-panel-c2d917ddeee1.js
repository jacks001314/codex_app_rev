import { n as e, t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as n,
  LNt as r,
  Lst as i,
  PBt as a,
  Rst as o,
  XOt as s,
  Y3 as c,
  Z3 as l,
  ast as u,
  bB as d,
  hit as f,
  ist as ee,
  oit as p,
  sct as m,
  tkt as h,
  vB as g,
  xut as _,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Hpr as v,
  Man as y,
  Mbt as b,
  Nan as te,
  Nbt as x,
  Upr as ne,
  XEn as S,
  YEn as C,
  d3t as w,
  f3t as T,
  fv as re,
  jan as E,
  jbt as ie,
  lDn as D,
  sDn as O,
  uv as k,
} from "./app-initial-ad16eaadf81f.js";
import { l as A, t as j } from "./theme-font-family-483011cfdef9.js";
import { n as ae, t as oe } from "./theme-font-face-loader-3c3ae53e2c00.js";
import { a as M, l as se, n as ce, o as le, r as ue, u as de } from "./xterm-display-helpers-140c0bf915f8.js";
import { n as fe, t as pe } from "./renderer-fb75f3ab2274.js";
import { i as me, n as he, o as N, r as ge, s as _e } from "./xterm-window-zoom-95a22ae58ea4.js";
import "./terminal-panel-c0ca9a862516.js";
var P = t((e, t) => {
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
                  ee = function (e) {
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
                  p =
                    typeof btoa == `function`
                      ? function (e) {
                          return btoa(e);
                        }
                      : r
                        ? function (e) {
                            return Buffer.from(e, `binary`).toString(`base64`);
                          }
                        : ee,
                  m = r
                    ? function (e) {
                        return Buffer.from(e).toString(`base64`);
                      }
                    : function (e) {
                        for (var t = [], n = 0, r = e.length; n < r; n += 4096)
                          t.push(l.apply(null, e.subarray(n, n + 4096)));
                        return p(t.join(``));
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
                          : l(224 | ((t >>> 12) & 15)) + l(128 | ((t >>> 6) & 63)) + l(128 | (63 & t));
                    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                    return (
                      l(240 | ((t >>> 18) & 7)) +
                      l(128 | ((t >>> 12) & 63)) +
                      l(128 | ((t >>> 6) & 63)) +
                      l(128 | (63 & t))
                    );
                  },
                  _ = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                  v = function (e) {
                    return e.replace(_, g);
                  },
                  y = r
                    ? function (e) {
                        return Buffer.from(e, `utf8`).toString(`base64`);
                      }
                    : a
                      ? function (e) {
                          return m(a.encode(e));
                        }
                      : function (e) {
                          return p(v(e));
                        },
                  b = function (e, t) {
                    return (t === void 0 && (t = !1), t ? d(y(e)) : y(e));
                  },
                  te = function (e) {
                    return b(e, !0);
                  },
                  x = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                  ne = function (e) {
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
                  S = function (e) {
                    return e.replace(x, ne);
                  },
                  C = function (e) {
                    if (((e = e.replace(/\s+/g, ``)), !c.test(e))) throw TypeError(`malformed base64.`);
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
                  w =
                    typeof atob == `function`
                      ? function (e) {
                          return atob(f(e));
                        }
                      : r
                        ? function (e) {
                            return Buffer.from(e, `base64`).toString(`binary`);
                          }
                        : C,
                  T = r
                    ? function (e) {
                        return u(Buffer.from(e, `base64`));
                      }
                    : function (e) {
                        return u(
                          w(e)
                            .split(``)
                            .map(function (e) {
                              return e.charCodeAt(0);
                            }),
                        );
                      },
                  re = function (e) {
                    return T(ie(e));
                  },
                  E = r
                    ? function (e) {
                        return Buffer.from(e, `base64`).toString(`utf8`);
                      }
                    : i
                      ? function (e) {
                          return i.decode(T(e));
                        }
                      : function (e) {
                          return S(w(e));
                        },
                  ie = function (e) {
                    return f(
                      e.replace(/[-_]/g, function (e) {
                        return e == `-` ? `+` : `/`;
                      }),
                    );
                  },
                  D = function (e) {
                    return E(ie(e));
                  },
                  O = function (e) {
                    return { value: e, enumerable: !1, writable: !0, configurable: !0 };
                  },
                  k = function () {
                    var e = function (e, t) {
                      return Object.defineProperty(String.prototype, e, O(t));
                    };
                    (e(`fromBase64`, function () {
                      return D(this);
                    }),
                      e(`toBase64`, function (e) {
                        return b(this, e);
                      }),
                      e(`toBase64URI`, function () {
                        return b(this, !0);
                      }),
                      e(`toBase64URL`, function () {
                        return b(this, !0);
                      }),
                      e(`toUint8Array`, function () {
                        return re(this);
                      }));
                  },
                  A = function () {
                    var e = function (e, t) {
                      return Object.defineProperty(Uint8Array.prototype, e, O(t));
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
                  j = {
                    version: t,
                    VERSION: n,
                    atob: w,
                    atobPolyfill: C,
                    btoa: p,
                    btoaPolyfill: ee,
                    fromBase64: D,
                    toBase64: b,
                    encode: b,
                    encodeURI: te,
                    encodeURL: te,
                    utob: v,
                    btou: S,
                    decode: D,
                    isValid: function (e) {
                      if (typeof e != `string`) return !1;
                      var t = e.replace(/\s+/g, ``).replace(/={0,2}$/, ``);
                      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
                    },
                    fromUint8Array: h,
                    toUint8Array: re,
                    extendString: k,
                    extendUint8Array: A,
                    extendBuiltins: function () {
                      (k(), A());
                    },
                    Base64: {},
                  };
                return (
                  Object.keys(j).forEach(function (e) {
                    return (j.Base64[e] = j[e]);
                  }),
                  j
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
                (this._disposable = e.parser.registerOscHandler(52, (e) => this._setOrReportClipboard(e))));
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
function ve(e) {
  let t = (0, ye.c)(7),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, F.jsx)(h, {
        id: `terminal.error.retry`,
        defaultMessage: `Reload`,
        description: `Button label that reloads rendering the terminal after a crash`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = (0, F.jsx)(c, { color: `secondary`, onClick: n, children: r })), (t[1] = n), (t[2] = i));
  let a, o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, F.jsx)(h, {
        id: `terminal.error.description`,
        defaultMessage: `Try reloading the terminal to continue`,
        description: `Description shown in the terminal panel when the embedded terminal crashes`,
      })),
      (o = (0, F.jsx)(h, {
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
      : ((s = (0, F.jsx)(C, { actions: i, className: `h-full bg-surface`, description: a, title: o })),
        (t[5] = i),
        (t[6] = s)),
    s
  );
}
var ye, F;
function I() {
  return (I = e(() => {
    ((ye = a()), s(), l(), S(), (F = r()));
  }))();
}
function be({
  clipboard: e,
  event: t,
  onNewTerminalTab: n,
  onPaste: r,
  pasteOnCtrlV: i = !1,
  sendText: a,
  term: o,
}) {
  if (t.type !== `keydown`) return !0;
  if (n != null && U(t, [`t`])) return (L(t), n(), !1);
  if (e != null) {
    if (R(t, o.hasSelection())) {
      L(t);
      let n = o.getSelection();
      return (n.length > 0 && e.writeText(n).catch(() => void 0), !1);
    }
    if (z(t, i))
      return (
        L(t),
        e
          .readText()
          .then((e) => {
            e.length > 0 && (r?.(), o.paste(e));
          })
          .catch(() => void 0),
        !1
      );
  }
  let s = B(t);
  return s == null || (L(t), a(s), !1);
}
function L(e) {
  (e.preventDefault(), e.stopPropagation());
}
function R(e, t) {
  return (t && H(e, `c`)) || V(e, `c`) || xe(e, { ctrlKey: !0, shiftKey: !1 });
}
function z(e, t) {
  return (t && H(e, `v`)) || V(e, `v`) || xe(e, { ctrlKey: !1, shiftKey: !0 });
}
function B(e) {
  return U(e, [`ArrowLeft`, `ArrowUp`])
    ? W
    : U(e, [`ArrowRight`, `ArrowDown`])
      ? G
      : U(e, [`Backspace`])
        ? q
        : U(e, [`Delete`])
          ? K
          : null;
}
function V(e, t) {
  return e.ctrlKey && e.shiftKey && !e.altKey && !e.metaKey && e.key.toLowerCase() === t;
}
function H(e, t) {
  return e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && e.key.toLowerCase() === t;
}
function xe(e, t) {
  return (
    e.ctrlKey === t.ctrlKey &&
    e.shiftKey === t.shiftKey &&
    !e.altKey &&
    !e.metaKey &&
    e.key.toLowerCase() === `insert`
  );
}
function U(e, t) {
  return e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey && t.includes(e.key);
}
var W, G, K, q;
function J() {
  return (J = e(() => {
    ((W = ``), (G = ``), (K = `\v`), (q = ``));
  }))();
}
function Se(e, t, n, r = !1) {
  (t.fit(), T.resize(n, e.cols, e.rows, r));
}
function Ce(e) {
  let t = (0, Ee.c)(5),
    { conversationId: n, sessionId: r } = e,
    i = r ?? n,
    a;
  t[0] === e ? (a = t[1]) : ((a = (0, X.jsx)(Te, { ...e })), (t[0] = e), (t[1] = a));
  let o;
  return (
    t[2] !== i || t[3] !== a
      ? ((o = (0, X.jsx)(O, { name: `TerminalPanel`, fallback: we, children: a }, i)),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function we(e) {
  return (0, X.jsx)(ve, {
    onRetry: () => {
      e.resetError();
    },
  });
}
function Te(e) {
  let t = (0, Ee.c)(67),
    {
      conversationId: n,
      conversationTitle: r,
      hostId: i,
      environmentId: a,
      cwd: s,
      workspaceRoot: c,
      sessionId: l,
      initialPromptHint: u,
      loadingOverlay: p,
      onKeyEvent: m,
      onNewTerminalTab: h,
    } = e,
    { platform: g } = ne(),
    v = o(),
    x = d(),
    S = y(),
    C = te(S),
    w = g !== `macOS`,
    E = f(_.lightChromeTheme),
    D = f(_.darkChromeTheme),
    O = f(_.codeFontSize),
    k,
    A,
    oe;
  t[0] !== D || t[1] !== E || t[2] !== C
    ? ((k = C === `light` ? b(E, `light`) : b(D, `dark`)),
      (A = k.fonts.codeFace != null && j(k.fonts.code, k.fonts.codeFace) ? k.fonts.codeFace : void 0),
      (oe = ue(k.fonts)),
      (t[0] = D),
      (t[1] = E),
      (t[2] = C),
      (t[3] = k),
      (t[4] = A),
      (t[5] = oe))
    : ((k = t[3]), (A = t[4]), (oe = t[5]));
  let M = oe,
    de = (0, Y.useRef)(null),
    fe = (0, Y.useRef)(null),
    N = (0, Y.useRef)(null),
    ge = (0, Y.useRef)(null),
    _e = (0, Y.useRef)(null),
    P = (0, Y.useRef)(!1),
    ve = (0, Y.useRef)(M),
    ye = (0, Y.useRef)(O),
    F = (0, Y.useRef)(x),
    I,
    L;
  (t[6] === M
    ? ((I = t[7]), (L = t[8]))
    : ((I = () => {
        ve.current = M;
      }),
      (L = [M]),
      (t[6] = M),
      (t[7] = I),
      (t[8] = L)),
    (0, Y.useEffect)(I, L));
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
    (0, Y.useEffect)(R, z));
  let B, V;
  (t[12] === x
    ? ((B = t[13]), (V = t[14]))
    : ((B = () => {
        F.current = x;
      }),
      (V = [x]),
      (t[12] = x),
      (t[13] = B),
      (t[14] = V)),
    (0, Y.useLayoutEffect)(B, V));
  let H;
  t[15] === r ? (H = t[16]) : ((H = () => r), (t[15] = r), (t[16] = H));
  let xe = (0, Y.useEffectEvent)(H),
    U,
    W;
  (t[17] !== k || t[18] !== C
    ? ((W = () => {
        let e = de.current;
        e && ie(e, k, C);
      }),
      (U = [k, C]),
      (t[17] = k),
      (t[18] = C),
      (t[19] = U),
      (t[20] = W))
    : ((U = t[19]), (W = t[20])),
    (0, Y.useLayoutEffect)(W, U));
  let G;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = () => {
        let e = N.current,
          t = de.current;
        e && t && ((e.options.theme = se(t)), e.rows > 0 && e.refresh(0, e.rows - 1));
      }),
      (t[21] = G))
    : (G = t[21]);
  let K;
  (t[22] !== k || t[23] !== C ? ((K = [k, C]), (t[22] = k), (t[23] = C), (t[24] = K)) : (K = t[24]),
    (0, Y.useEffect)(G, K));
  let q;
  t[25] !== n ||
  t[26] !== s ||
  t[27] !== a ||
  t[28] !== xe ||
  t[29] !== i ||
  t[30] !== m ||
  t[31] !== h ||
  t[32] !== g ||
  t[33] !== v ||
  t[34] !== l ||
  t[35] !== w ||
  t[36] !== c
    ? ((q = () => {
        let e = fe.current,
          t = de.current;
        if (!e || !t) return;
        let r = xe(),
          o =
            l ??
            T.create({
              conversationId: n,
              conversationTitle: r,
              hostId: i ?? null,
              environmentId: a,
              cwd: s ?? null,
              workspaceRoot: c,
            });
        ((_e.current = o), (P.current = !1));
        let u = !1,
          d = (e, t) => {
            me(e, t, i ?? void 0);
          },
          f = { fontSize: ye.current, fontFamily: ve.current, linkHandler: { activate: d }, theme: se(t) },
          p = T.getOrCreateRenderer(o, () => new pe(f, T.getPreservedAlternateScreenMode(o) ?? void 0));
        p.setInputPreviewEnabled(a != null);
        let _ = p.terminal;
        _.options = f;
        let y = null,
          b = null,
          te = () => {
            (b != null && clearTimeout(b),
              (b = setTimeout(() => {
                ((b = null), re(v, { cwd: s, hostId: i }));
              }, Ae)));
          },
          x = () => {
            y ??= requestAnimationFrame(() => {
              ((y = null), _.scrollToBottom());
            });
          };
        N.current = _;
        let ne = !1,
          S = () => {
            ((ne = !0), T.recordUserInteraction(o));
          },
          C = new De.ClipboardAddon(),
          E = new Oe.FitAddon();
        ((ge.current = E),
          _.loadAddon(C),
          _.loadAddon(E),
          _.loadAddon(new ke.WebLinksAddon(d)),
          _.attachCustomKeyEventHandler(
            (e) =>
              m?.(e) !== !1 &&
              be({
                clipboard: w ? ee.clipboard : void 0,
                event: e,
                onNewTerminalTab: h,
                onPaste: S,
                pasteOnCtrlV: g === `windows`,
                sendText: (e) => {
                  T.write(o, e, `user`);
                },
                term: _,
              }),
          ),
          _.open(e));
        let ie = he(_, () => F.current),
          D = (t) => {
            let n = t !== void 0 && t;
            u ||
              (e.isConnected &&
                requestAnimationFrame(() => {
                  u || (e.isConnected && (P.current ? Se(_, E, o, n) : E.fit()));
                }));
          };
        D();
        let O = p.isRestoringAlternateScreen || _.buffer.active.type === `alternate`;
        ((p.onOutput = () => {
          let e = le(_);
          (te(), e && x());
        }),
          p.ready.then(() => {
            u || x();
          }));
        let k = T.register(o, {
            onClearActive: () => {
              t.contains(document.activeElement) && (p.resetInputPreview(), _.clear());
            },
            onAttach: () => {
              u || ((P.current = !0), D(O), (O = !1));
            },
          }),
          A = _.onData((e) => {
            let t = ne;
            ((ne = !1), (!p.isReplayingInitLog || t) && T.write(o, e, t ? `user` : `terminal-generated`));
          }),
          j = _.onKey((e) => {
            let { domEvent: t } = e;
            (S(), t.key === `Enter` && te());
          });
        (e.addEventListener(`input`, S, !0),
          e.addEventListener(`paste`, S, !0),
          l &&
            !T.isSessionStarted(l) &&
            requestAnimationFrame(() => {
              u ||
                T.create({
                  sessionId: l,
                  conversationId: n,
                  conversationTitle: r,
                  hostId: i ?? null,
                  environmentId: a,
                  cwd: s ?? null,
                  cols: _.cols,
                  rows: _.rows,
                  workspaceRoot: c,
                });
            }));
        let ae = new ResizeObserver(() => {
          D();
        });
        return (
          ae.observe(e),
          () => {
            ((u = !0),
              y != null && (cancelAnimationFrame(y), (y = null)),
              b != null && clearTimeout(b),
              ae.disconnect(),
              e.removeEventListener(`input`, S, !0),
              e.removeEventListener(`paste`, S, !0),
              A.dispose(),
              j.dispose(),
              l &&
                T.preserveAlternateScreen(
                  o,
                  _.buffer.active.type === `alternate` || p.isRestoringAlternateScreen,
                ),
              k(),
              ie(),
              (p.onOutput = null),
              T.releaseRenderer(o, p),
              (ge.current = null),
              (_e.current = null),
              (P.current = !1),
              l || T.close(o),
              (N.current = null));
          }
        );
      }),
      (t[25] = n),
      (t[26] = s),
      (t[27] = a),
      (t[28] = xe),
      (t[29] = i),
      (t[30] = m),
      (t[31] = h),
      (t[32] = g),
      (t[33] = v),
      (t[34] = l),
      (t[35] = w),
      (t[36] = c),
      (t[37] = q))
    : (q = t[37]);
  let J;
  (t[38] !== n ||
  t[39] !== s ||
  t[40] !== a ||
  t[41] !== i ||
  t[42] !== m ||
  t[43] !== h ||
  t[44] !== g ||
  t[45] !== v ||
  t[46] !== l ||
  t[47] !== w ||
  t[48] !== c
    ? ((J = [n, s, i, a, m, h, g, v, l, w, c]),
      (t[38] = n),
      (t[39] = s),
      (t[40] = a),
      (t[41] = i),
      (t[42] = m),
      (t[43] = h),
      (t[44] = g),
      (t[45] = v),
      (t[46] = l),
      (t[47] = w),
      (t[48] = c),
      (t[49] = J))
    : (J = t[49]),
    (0, Y.useEffect)(q, J));
  let Ce, we;
  (t[50] !== M || t[51] !== O || t[52] !== A
    ? ((Ce = () => {
        let e = N.current;
        if (!e) return;
        let t = !1;
        return (
          (async () => {
            (A != null && (await ae(A)),
              await ce(M, O),
              !t &&
                ((e.options.fontFamily = M),
                (e.options.fontSize = O),
                requestAnimationFrame(() => {
                  let t = N.current;
                  if (!t || t !== e) return;
                  let n = ge.current,
                    r = _e.current;
                  n && r && (P.current ? Se(t, n, r) : n.fit());
                })));
          })(),
          () => {
            t = !0;
          }
        );
      }),
      (we = [M, O, A]),
      (t[50] = M),
      (t[51] = O),
      (t[52] = A),
      (t[53] = Ce),
      (t[54] = we))
    : ((Ce = t[53]), (we = t[54])),
    (0, Y.useEffect)(Ce, we));
  let Te = l == null ? void 0 : `terminal-panel-${l}`,
    Z;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = {
        backgroundColor: `var(--color-codex-terminal-background)`,
        color: `var(--color-codex-terminal-foreground)`,
      }),
      (t[55] = Z))
    : (Z = t[55]);
  let je;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, X.jsx)(`div`, {
        className: `flex-1 overflow-hidden ps-4 pt-2 pb-3 tracking-normal`,
        children: (0, X.jsx)(`div`, { className: `h-full w-full overflow-hidden`, ref: fe }),
      })),
      (t[56] = je))
    : (je = t[56]);
  let Q;
  t[57] === p
    ? (Q = t[58])
    : ((Q = p != null && (0, X.jsx)(`div`, { className: `absolute inset-0`, children: p })),
      (t[57] = p),
      (t[58] = Q));
  let $;
  t[59] !== M || t[60] !== O || t[61] !== u
    ? (($ =
        u == null
          ? null
          : (0, X.jsx)(`div`, {
              className: `pointer-events-none absolute inset-x-4 bottom-3 z-10 overflow-hidden pt-2`,
              style: { fontFamily: M, top: O * 1.2 + 10 },
              children: (0, X.jsx)(`div`, {
                className: `pointer-events-auto max-h-full w-fit max-w-full overflow-y-auto`,
                children: u,
              }),
            })),
      (t[59] = M),
      (t[60] = O),
      (t[61] = u),
      (t[62] = $))
    : ($ = t[62]);
  let Me;
  return (
    t[63] !== Te || t[64] !== Q || t[65] !== $
      ? ((Me = (0, X.jsxs)(`div`, {
          id: Te,
          "data-codex-terminal": !0,
          "data-codex-xterm": !0,
          ref: de,
          className: `relative flex h-full w-full flex-col`,
          style: Z,
          children: [je, Q, $],
        })),
        (t[63] = Te),
        (t[64] = Q),
        (t[65] = $),
        (t[66] = Me))
      : (Me = t[66]),
    Me
  );
}
var Ee, De, Oe, ke, Y, X, Ae;
function Z() {
  return (Z = e(() => {
    ((Ee = a()),
      i(),
      (De = P()),
      (Oe = _e()),
      (ke = N()),
      m(),
      (Y = n()),
      oe(),
      A(),
      g(),
      D(),
      k(),
      v(),
      u(),
      p(),
      w(),
      x(),
      E(),
      ge(),
      fe(),
      I(),
      J(),
      de(),
      M(),
      (X = r()),
      (Ae = 500));
  }))();
}
Z();
export { Ce as TerminalPanel };
//# sourceMappingURL=terminal-panel-c2d917ddeee1.js.map
