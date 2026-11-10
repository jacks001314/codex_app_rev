import { n as e, t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $nt as r,
  Cz as i,
  IDt as a,
  Kat as o,
  Tz as s,
  Wnt as c,
  _lt as l,
  jDt as u,
  nst as d,
  qat as f,
  rst as p,
  t3 as m,
  tst as h,
  vzt as g,
  xMt as _,
  yzt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as y,
  ACn as b,
  Axt as x,
  HCn as S,
  L_ as C,
  WCn as w,
  byt as T,
  dnn as E,
  eur as D,
  fnn as ee,
  jCn as O,
  kxt as k,
  unn as A,
  xyt as j,
  yyt as te,
  z_ as ne,
} from "./app-initial-5851df3f6cb1.js";
import { l as M, t as N } from "./theme-font-family-483011cfdef9.js";
import { n as re, t as ie } from "./theme-font-face-loader-3c3ae53e2c00.js";
import { a as P, l as ae, n as oe, o as se, r as ce, u as le } from "./xterm-display-helpers-b3dbd848567f.js";
import { n as ue, t as de } from "./renderer-7e1b66ea1801.js";
import { i as fe, n as pe, o as F, r as me, s as he } from "./xterm-window-zoom-6d4fd59e6177.js";
import "./terminal-panel-c0ca9a862516.js";
var I = t((e, t) => {
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
                  m =
                    typeof btoa == `function`
                      ? function (e) {
                          return btoa(e);
                        }
                      : r
                        ? function (e) {
                            return Buffer.from(e, `binary`).toString(`base64`);
                          }
                        : p,
                  h = r
                    ? function (e) {
                        return Buffer.from(e).toString(`base64`);
                      }
                    : function (e) {
                        for (var t = [], n = 0, r = e.length; n < r; n += 4096)
                          t.push(l.apply(null, e.subarray(n, n + 4096)));
                        return m(t.join(``));
                      },
                  g = function (e, t) {
                    return (t === void 0 && (t = !1), t ? d(h(e)) : h(e));
                  },
                  _ = function (e) {
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
                  v = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                  y = function (e) {
                    return e.replace(v, _);
                  },
                  b = r
                    ? function (e) {
                        return Buffer.from(e, `utf8`).toString(`base64`);
                      }
                    : a
                      ? function (e) {
                          return h(a.encode(e));
                        }
                      : function (e) {
                          return m(y(e));
                        },
                  x = function (e, t) {
                    return (t === void 0 && (t = !1), t ? d(b(e)) : b(e));
                  },
                  S = function (e) {
                    return x(e, !0);
                  },
                  C = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                  w = function (e) {
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
                  T = function (e) {
                    return e.replace(C, w);
                  },
                  E = function (e) {
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
                  D =
                    typeof atob == `function`
                      ? function (e) {
                          return atob(f(e));
                        }
                      : r
                        ? function (e) {
                            return Buffer.from(e, `base64`).toString(`binary`);
                          }
                        : E,
                  ee = r
                    ? function (e) {
                        return u(Buffer.from(e, `base64`));
                      }
                    : function (e) {
                        return u(
                          D(e)
                            .split(``)
                            .map(function (e) {
                              return e.charCodeAt(0);
                            }),
                        );
                      },
                  O = function (e) {
                    return ee(A(e));
                  },
                  k = r
                    ? function (e) {
                        return Buffer.from(e, `base64`).toString(`utf8`);
                      }
                    : i
                      ? function (e) {
                          return i.decode(ee(e));
                        }
                      : function (e) {
                          return T(D(e));
                        },
                  A = function (e) {
                    return f(
                      e.replace(/[-_]/g, function (e) {
                        return e == `-` ? `+` : `/`;
                      }),
                    );
                  },
                  j = function (e) {
                    return k(A(e));
                  },
                  te = function (e) {
                    return { value: e, enumerable: !1, writable: !0, configurable: !0 };
                  },
                  ne = function () {
                    var e = function (e, t) {
                      return Object.defineProperty(String.prototype, e, te(t));
                    };
                    (e(`fromBase64`, function () {
                      return j(this);
                    }),
                      e(`toBase64`, function (e) {
                        return x(this, e);
                      }),
                      e(`toBase64URI`, function () {
                        return x(this, !0);
                      }),
                      e(`toBase64URL`, function () {
                        return x(this, !0);
                      }),
                      e(`toUint8Array`, function () {
                        return O(this);
                      }));
                  },
                  M = function () {
                    var e = function (e, t) {
                      return Object.defineProperty(Uint8Array.prototype, e, te(t));
                    };
                    (e(`toBase64`, function (e) {
                      return g(this, e);
                    }),
                      e(`toBase64URI`, function () {
                        return g(this, !0);
                      }),
                      e(`toBase64URL`, function () {
                        return g(this, !0);
                      }));
                  },
                  N = {
                    version: t,
                    VERSION: n,
                    atob: D,
                    atobPolyfill: E,
                    btoa: m,
                    btoaPolyfill: p,
                    fromBase64: j,
                    toBase64: x,
                    encode: x,
                    encodeURI: S,
                    encodeURL: S,
                    utob: y,
                    btou: T,
                    decode: j,
                    isValid: function (e) {
                      if (typeof e != `string`) return !1;
                      var t = e.replace(/\s+/g, ``).replace(/={0,2}$/, ``);
                      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
                    },
                    fromUint8Array: g,
                    toUint8Array: O,
                    extendString: ne,
                    extendUint8Array: M,
                    extendBuiltins: function () {
                      (ne(), M());
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
function ge(e) {
  let t = (0, _e.c)(7),
    { onRetry: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, L.jsx)(a, {
        id: `terminal.error.retry`,
        defaultMessage: `Reload`,
        description: `Button label that reloads rendering the terminal after a crash`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let o;
  t[1] === r
    ? (o = t[2])
    : ((o = (0, L.jsx)(n, { color: `secondary`, onClick: r, children: i })), (t[1] = r), (t[2] = o));
  let s, c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, L.jsx)(a, {
        id: `terminal.error.description`,
        defaultMessage: `Try reloading the terminal to continue`,
        description: `Description shown in the terminal panel when the embedded terminal crashes`,
      })),
      (c = (0, L.jsx)(a, {
        id: `terminal.error.title`,
        defaultMessage: `The terminal encountered an error`,
        description: `Title shown in the terminal panel when the embedded terminal crashes`,
      })),
      (t[3] = s),
      (t[4] = c))
    : ((s = t[3]), (c = t[4]));
  let l;
  return (
    t[5] === o
      ? (l = t[6])
      : ((l = (0, L.jsx)(b, { actions: o, className: `h-full bg-surface`, description: s, title: c })),
        (t[5] = o),
        (t[6] = l)),
    l
  );
}
var _e, L;
function R() {
  return (R = e(() => {
    ((_e = g()), u(), m(), O(), (L = _()));
  }))();
}
function ve({
  clipboard: e,
  event: t,
  onNewTerminalTab: n,
  onPaste: r,
  pasteOnCtrlV: i = !1,
  sendText: a,
  term: o,
}) {
  if (t.type !== `keydown`) return !0;
  if (n != null && U(t, [`t`])) return (z(t), n(), !1);
  if (e != null) {
    if (B(t, o.hasSelection())) {
      z(t);
      let n = o.getSelection();
      return (n.length > 0 && e.writeText(n).catch(() => void 0), !1);
    }
    if (ye(t, i))
      return (
        z(t),
        e
          .readText()
          .then((e) => {
            e.length > 0 && (r?.(), o.paste(e));
          })
          .catch(() => void 0),
        !1
      );
  }
  let s = be(t);
  return s == null || (z(t), a(s), !1);
}
function z(e) {
  (e.preventDefault(), e.stopPropagation());
}
function B(e, t) {
  return (t && H(e, `c`)) || V(e, `c`) || xe(e, { ctrlKey: !0, shiftKey: !1 });
}
function ye(e, t) {
  return (t && H(e, `v`)) || V(e, `v`) || xe(e, { ctrlKey: !1, shiftKey: !0 });
}
function be(e) {
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
  (t.fit(), x.resize(n, e.cols, e.rows, r));
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
      ? ((o = (0, X.jsx)(S, { name: `TerminalPanel`, fallback: we, children: a }, i)),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function we(e) {
  return (0, X.jsx)(ge, {
    onRetry: () => {
      e.resetError();
    },
  });
}
function Te(e) {
  let t = (0, Ee.c)(67),
    {
      conversationId: n,
      conversationTitle: i,
      hostId: a,
      environmentId: c,
      cwd: u,
      workspaceRoot: f,
      sessionId: p,
      initialPromptHint: m,
      loadingOverlay: h,
      onKeyEvent: g,
      onNewTerminalTab: _,
    } = e,
    { platform: v } = D(),
    y = d(),
    b = s(),
    S = E(),
    C = ee(S),
    w = v !== `macOS`,
    O = r(l.lightChromeTheme),
    k = r(l.darkChromeTheme),
    A = r(l.codeFontSize),
    j,
    M,
    ie;
  t[0] !== k || t[1] !== O || t[2] !== C
    ? ((j = C === `light` ? T(O, `light`) : T(k, `dark`)),
      (M = j.fonts.codeFace != null && N(j.fonts.code, j.fonts.codeFace) ? j.fonts.codeFace : void 0),
      (ie = ce(j.fonts)),
      (t[0] = k),
      (t[1] = O),
      (t[2] = C),
      (t[3] = j),
      (t[4] = M),
      (t[5] = ie))
    : ((j = t[3]), (M = t[4]), (ie = t[5]));
  let P = ie,
    le = (0, Y.useRef)(null),
    ue = (0, Y.useRef)(null),
    F = (0, Y.useRef)(null),
    me = (0, Y.useRef)(null),
    he = (0, Y.useRef)(null),
    I = (0, Y.useRef)(!1),
    ge = (0, Y.useRef)(P),
    _e = (0, Y.useRef)(A),
    L = (0, Y.useRef)(b),
    R,
    z;
  (t[6] === P
    ? ((R = t[7]), (z = t[8]))
    : ((R = () => {
        ge.current = P;
      }),
      (z = [P]),
      (t[6] = P),
      (t[7] = R),
      (t[8] = z)),
    (0, Y.useEffect)(R, z));
  let B, ye;
  (t[9] === A
    ? ((B = t[10]), (ye = t[11]))
    : ((B = () => {
        _e.current = A;
      }),
      (ye = [A]),
      (t[9] = A),
      (t[10] = B),
      (t[11] = ye)),
    (0, Y.useEffect)(B, ye));
  let be, V;
  (t[12] === b
    ? ((be = t[13]), (V = t[14]))
    : ((be = () => {
        L.current = b;
      }),
      (V = [b]),
      (t[12] = b),
      (t[13] = be),
      (t[14] = V)),
    (0, Y.useLayoutEffect)(be, V));
  let H;
  t[15] === i ? (H = t[16]) : ((H = () => i), (t[15] = i), (t[16] = H));
  let xe = (0, Y.useEffectEvent)(H),
    U,
    W;
  (t[17] !== j || t[18] !== C
    ? ((W = () => {
        let e = le.current;
        e && te(e, j, C);
      }),
      (U = [j, C]),
      (t[17] = j),
      (t[18] = C),
      (t[19] = U),
      (t[20] = W))
    : ((U = t[19]), (W = t[20])),
    (0, Y.useLayoutEffect)(W, U));
  let G;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = () => {
        let e = F.current,
          t = le.current;
        e && t && ((e.options.theme = ae(t)), e.rows > 0 && e.refresh(0, e.rows - 1));
      }),
      (t[21] = G))
    : (G = t[21]);
  let K;
  (t[22] !== j || t[23] !== C ? ((K = [j, C]), (t[22] = j), (t[23] = C), (t[24] = K)) : (K = t[24]),
    (0, Y.useEffect)(G, K));
  let q;
  t[25] !== n ||
  t[26] !== u ||
  t[27] !== c ||
  t[28] !== xe ||
  t[29] !== a ||
  t[30] !== g ||
  t[31] !== _ ||
  t[32] !== v ||
  t[33] !== y ||
  t[34] !== p ||
  t[35] !== w ||
  t[36] !== f
    ? ((q = () => {
        let e = ue.current,
          t = le.current;
        if (!e || !t) return;
        let r = xe(),
          i =
            p ??
            x.create({
              conversationId: n,
              conversationTitle: r,
              hostId: a ?? null,
              environmentId: c,
              cwd: u ?? null,
              workspaceRoot: f,
            });
        ((he.current = i), (I.current = !1));
        let s = !1,
          l = (e, t) => {
            fe(e, t, a ?? void 0);
          },
          d = { fontSize: _e.current, fontFamily: ge.current, linkHandler: { activate: l }, theme: ae(t) },
          m = x.getOrCreateRenderer(i, () => new de(d, x.getPreservedAlternateScreenMode(i) ?? void 0));
        m.setInputPreviewEnabled(c != null);
        let h = m.terminal;
        h.options = d;
        let b = null,
          S = null,
          C = () => {
            (S != null && clearTimeout(S),
              (S = setTimeout(() => {
                ((S = null), ne(y, { cwd: u, hostId: a }));
              }, Ae)));
          },
          T = () => {
            b ??= requestAnimationFrame(() => {
              ((b = null), h.scrollToBottom());
            });
          };
        F.current = h;
        let E = !1,
          D = () => {
            ((E = !0), x.recordUserInteraction(i));
          },
          ee = new De.ClipboardAddon(),
          O = new Oe.FitAddon();
        ((me.current = O),
          h.loadAddon(ee),
          h.loadAddon(O),
          h.loadAddon(new ke.WebLinksAddon(l)),
          h.attachCustomKeyEventHandler(
            (e) =>
              g?.(e) !== !1 &&
              ve({
                clipboard: w ? o.clipboard : void 0,
                event: e,
                onNewTerminalTab: _,
                onPaste: D,
                pasteOnCtrlV: v === `windows`,
                sendText: (e) => {
                  x.write(i, e, `user`);
                },
                term: h,
              }),
          ),
          h.open(e));
        let k = pe(h, () => L.current),
          A = (t) => {
            let n = t !== void 0 && t;
            s ||
              (e.isConnected &&
                requestAnimationFrame(() => {
                  s || (e.isConnected && (I.current ? Se(h, O, i, n) : O.fit()));
                }));
          };
        A();
        let j = m.isRestoringAlternateScreen || h.buffer.active.type === `alternate`;
        ((m.onOutput = () => {
          let e = se(h);
          (C(), e && T());
        }),
          m.ready.then(() => {
            s || T();
          }));
        let te = x.register(i, {
            onClearActive: () => {
              t.contains(document.activeElement) && (m.resetInputPreview(), h.clear());
            },
            onAttach: () => {
              s || ((I.current = !0), A(j), (j = !1));
            },
          }),
          M = h.onData((e) => {
            let t = E;
            ((E = !1), (!m.isReplayingInitLog || t) && x.write(i, e, t ? `user` : `terminal-generated`));
          }),
          N = h.onKey((e) => {
            let { domEvent: t } = e;
            (D(), t.key === `Enter` && C());
          });
        (e.addEventListener(`input`, D, !0),
          e.addEventListener(`paste`, D, !0),
          p &&
            !x.isSessionStarted(p) &&
            requestAnimationFrame(() => {
              s ||
                x.create({
                  sessionId: p,
                  conversationId: n,
                  conversationTitle: r,
                  hostId: a ?? null,
                  environmentId: c,
                  cwd: u ?? null,
                  cols: h.cols,
                  rows: h.rows,
                  workspaceRoot: f,
                });
            }));
        let re = new ResizeObserver(() => {
          A();
        });
        return (
          re.observe(e),
          () => {
            ((s = !0),
              b != null && (cancelAnimationFrame(b), (b = null)),
              S != null && clearTimeout(S),
              re.disconnect(),
              e.removeEventListener(`input`, D, !0),
              e.removeEventListener(`paste`, D, !0),
              M.dispose(),
              N.dispose(),
              p &&
                x.preserveAlternateScreen(
                  i,
                  h.buffer.active.type === `alternate` || m.isRestoringAlternateScreen,
                ),
              te(),
              k(),
              (m.onOutput = null),
              x.releaseRenderer(i, m),
              (me.current = null),
              (he.current = null),
              (I.current = !1),
              p || x.close(i),
              (F.current = null));
          }
        );
      }),
      (t[25] = n),
      (t[26] = u),
      (t[27] = c),
      (t[28] = xe),
      (t[29] = a),
      (t[30] = g),
      (t[31] = _),
      (t[32] = v),
      (t[33] = y),
      (t[34] = p),
      (t[35] = w),
      (t[36] = f),
      (t[37] = q))
    : (q = t[37]);
  let J;
  (t[38] !== n ||
  t[39] !== u ||
  t[40] !== c ||
  t[41] !== a ||
  t[42] !== g ||
  t[43] !== _ ||
  t[44] !== v ||
  t[45] !== y ||
  t[46] !== p ||
  t[47] !== w ||
  t[48] !== f
    ? ((J = [n, u, a, c, g, _, v, y, p, w, f]),
      (t[38] = n),
      (t[39] = u),
      (t[40] = c),
      (t[41] = a),
      (t[42] = g),
      (t[43] = _),
      (t[44] = v),
      (t[45] = y),
      (t[46] = p),
      (t[47] = w),
      (t[48] = f),
      (t[49] = J))
    : (J = t[49]),
    (0, Y.useEffect)(q, J));
  let Ce, we;
  (t[50] !== P || t[51] !== A || t[52] !== M
    ? ((Ce = () => {
        let e = F.current;
        if (!e) return;
        let t = !1;
        return (
          (async () => {
            (M != null && (await re(M)),
              await oe(P, A),
              !t &&
                ((e.options.fontFamily = P),
                (e.options.fontSize = A),
                requestAnimationFrame(() => {
                  let t = F.current;
                  if (!t || t !== e) return;
                  let n = me.current,
                    r = he.current;
                  n && r && (I.current ? Se(t, n, r) : n.fit());
                })));
          })(),
          () => {
            t = !0;
          }
        );
      }),
      (we = [P, A, M]),
      (t[50] = P),
      (t[51] = A),
      (t[52] = M),
      (t[53] = Ce),
      (t[54] = we))
    : ((Ce = t[53]), (we = t[54])),
    (0, Y.useEffect)(Ce, we));
  let Te = p == null ? void 0 : `terminal-panel-${p}`,
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
        children: (0, X.jsx)(`div`, { className: `h-full w-full overflow-hidden`, ref: ue }),
      })),
      (t[56] = je))
    : (je = t[56]);
  let Q;
  t[57] === h
    ? (Q = t[58])
    : ((Q = h != null && (0, X.jsx)(`div`, { className: `absolute inset-0`, children: h })),
      (t[57] = h),
      (t[58] = Q));
  let $;
  t[59] !== P || t[60] !== A || t[61] !== m
    ? (($ =
        m == null
          ? null
          : (0, X.jsx)(`div`, {
              className: `pointer-events-none absolute inset-x-4 bottom-3 z-10 overflow-hidden pt-2`,
              style: { fontFamily: P, top: A * 1.2 + 10 },
              children: (0, X.jsx)(`div`, {
                className: `pointer-events-auto max-h-full w-fit max-w-full overflow-y-auto`,
                children: m,
              }),
            })),
      (t[59] = P),
      (t[60] = A),
      (t[61] = m),
      (t[62] = $))
    : ($ = t[62]);
  let Me;
  return (
    t[63] !== Te || t[64] !== Q || t[65] !== $
      ? ((Me = (0, X.jsxs)(`div`, {
          id: Te,
          "data-codex-terminal": !0,
          "data-codex-xterm": !0,
          ref: le,
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
    ((Ee = g()),
      h(),
      (De = I()),
      (Oe = he()),
      (ke = F()),
      p(),
      (Y = v()),
      ie(),
      M(),
      i(),
      w(),
      C(),
      y(),
      f(),
      c(),
      k(),
      j(),
      A(),
      me(),
      ue(),
      R(),
      J(),
      le(),
      P(),
      (X = _()),
      (Ae = 500));
  }))();
}
Z();
export { Ce as TerminalPanel };
//# sourceMappingURL=terminal-panel-a98f369da158.js.map
