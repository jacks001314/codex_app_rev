const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./platform-dialog-e648bb41ce12.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./status-f9c96846d856.js",
      "./renewal-dialog-af4be22cc044.js",
      "./queries-d729b9d20ea6.js",
      "./format-amount-47aa133b47a5.js",
      "./app-primary-4c40d73a1074.js",
      "./app-primary-d815831c9bad.css",
      "./events-7d2329d3e619.js",
      "./cadence-dialog-857e209dc1e9.js",
      "./cadence-events-65227a5e872f.js",
      "./billing-state-ce45584c1590.js",
      "./dialog-ac1180167d3a.js",
      "./pricing-a70e18580c5f.js",
      "./subscription-update-dialog-47ff984f1157.js",
      "./stripe-client-1366773f0ed5.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t, t as n } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as r,
  $Xt as i,
  $c as a,
  $rt as o,
  A3t as s,
  AMt as c,
  ASt as l,
  Amn as u,
  BS as d,
  Btt as f,
  CJt as p,
  CW as m,
  Cpn as h,
  Dc as g,
  Drn as _,
  FKt as v,
  Gtt as y,
  Htt as b,
  Hu as x,
  IXt as S,
  JG as C,
  JS as w,
  JXt as T,
  Jit as E,
  Jrt as ee,
  KG as te,
  KS as D,
  Kit as O,
  Ktt as k,
  LH as A,
  M6t as j,
  MMt as M,
  Mrn as N,
  N3t as P,
  N6t as F,
  Nlt as ne,
  O3t as I,
  Opn as L,
  Pc as R,
  Plt as re,
  QG as z,
  Qc as ie,
  Qrt as B,
  Qu as ae,
  RH as V,
  RKt as H,
  S3t as oe,
  SJt as se,
  Spn as U,
  TW as W,
  Tlt as ce,
  Trn as G,
  Utt as K,
  VS as le,
  Vtt as ue,
  Vu as de,
  Wtt as fe,
  XS as pe,
  Xdt as q,
  Xrt as me,
  Xu as he,
  Yrt as ge,
  ZG as _e,
  Zrt as ve,
  Zu as ye,
  _H as be,
  _mn as xe,
  _pn as Se,
  a3t as Ce,
  aYt as we,
  b3t as Te,
  cYt as Ee,
  d3t as De,
  dYt as Oe,
  dbt as ke,
  drn as Ae,
  eit as je,
  flt as Me,
  gH as Ne,
  gYt as Pe,
  glt as Fe,
  gmn as Ie,
  gpn as Le,
  grn as Re,
  hlt as ze,
  hmn as Be,
  iYt as Ve,
  iit as He,
  jG as Ue,
  jMt as We,
  kG as Ge,
  kMt as Ke,
  kSt as qe,
  kmn as Je,
  krn as Ye,
  lYt as Xe,
  llt as Ze,
  mYt as Qe,
  mrn as $e,
  nV as et,
  nYt as tt,
  nZt as nt,
  o3t as rt,
  oYt as it,
  qS as at,
  qu as ot,
  rV as st,
  rit as ct,
  rnt as lt,
  rq as ut,
  rrn as dt,
  rut as ft,
  s3t as pt,
  sYt as mt,
  tit as ht,
  uYt as gt,
  ubt as _t,
  uq as vt,
  vpn as yt,
  xpn as bt,
} from "./app-initial-f094ef01c64d.js";
import {
  Js as xt,
  K_ as St,
  M_ as Ct,
  N_ as wt,
  Xs as Tt,
  Y_ as Et,
  Ys as Dt,
  q_ as Ot,
} from "./app-primary-4c40d73a1074.js";
import { n as kt, t as At } from "./settings-loading-row-de4ab81779d6.js";
import {
  a as jt,
  c as Mt,
  d as Nt,
  f as Pt,
  i as Ft,
  l as It,
  m as Lt,
  n as Rt,
  o as zt,
  p as Bt,
  s as Vt,
  u as Ht,
} from "./queries-d729b9d20ea6.js";
import { i as Ut, n as Wt, r as Gt, t as Kt } from "./format-amount-47aa133b47a5.js";
import { n as qt, r as Jt, t as Yt } from "./stripe-client-1366773f0ed5.js";
import { i as Xt, n as Zt, r as Qt, t as $t } from "./billing-state-ce45584c1590.js";
import { i as en, n as tn, o as nn, s as rn, t as an } from "./cadence-events-65227a5e872f.js";
import { n as on, r as sn, t as cn } from "./status-f9c96846d856.js";
var ln = n((e, t) => {
  (function (n, r) {
    typeof e == `object` && t !== void 0
      ? r(e, u())
      : typeof define == `function` && define.amd
        ? define([`exports`, `react`], r)
        : ((n = typeof globalThis < `u` ? globalThis : n || self),
          r((n.ReactStripe = {}), n.React));
  })(e, function (e, t) {
    function n(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r));
      }
      return n;
    }
    function r(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] == null ? {} : arguments[t];
        t % 2
          ? n(Object(r), !0).forEach(function (t) {
              a(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : n(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function i(e) {
      "@babel/helpers - typeof";
      return (
        (i =
          typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == `function` &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? `symbol`
                  : typeof e;
              }),
        i(e)
      );
    }
    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function o(e, t) {
      if (e == null) return {};
      var n = {},
        r = Object.keys(e),
        i,
        a;
      for (a = 0; a < r.length; a++) ((i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]));
      return n;
    }
    function s(e, t) {
      if (e == null) return {};
      var n = o(e, t),
        r,
        i;
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
          ((r = a[i]),
            !(t.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (n[r] = e[r]));
      }
      return n;
    }
    function c(e, t) {
      return l(e) || u(e, t) || d(e, t) || p();
    }
    function l(e) {
      if (Array.isArray(e)) return e;
    }
    function u(e, t) {
      var n = e && ((typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`]);
      if (n != null) {
        var r = [],
          i = !0,
          a = !1,
          o,
          s;
        try {
          for (
            n = n.call(e);
            !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
            i = !0
          );
        } catch (e) {
          ((a = !0), (s = e));
        } finally {
          try {
            !i && n.return != null && n.return();
          } finally {
            if (a) throw s;
          }
        }
        return r;
      }
    }
    function d(e, t) {
      if (e) {
        if (typeof e == `string`) return f(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (
          (n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set`)
        )
          return Array.from(e);
        if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t);
      }
    }
    function f(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function p() {
      throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function m(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, `default`)
        ? e.default
        : e;
    }
    var h = { exports: {} },
      g,
      _;
    function v() {
      return _ ? g : ((_ = 1), (g = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`), g);
    }
    var y, b;
    function x() {
      if (b) return y;
      b = 1;
      var e = v();
      function t() {}
      function n() {}
      return (
        (n.resetWarningCache = t),
        (y = function () {
          function r(t, n, r, i, a, o) {
            if (o !== e) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((s.name = `Invariant Violation`), s);
            }
          }
          r.isRequired = r;
          function i() {
            return r;
          }
          var a = {
            array: r,
            bool: r,
            func: r,
            number: r,
            object: r,
            string: r,
            symbol: r,
            any: r,
            arrayOf: i,
            element: r,
            elementType: r,
            instanceOf: i,
            node: r,
            objectOf: i,
            oneOf: i,
            oneOfType: i,
            shape: i,
            exact: i,
            checkPropTypes: n,
            resetWarningCache: t,
          };
          return ((a.PropTypes = a), a);
        }),
        y
      );
    }
    h.exports = x()();
    var S = h.exports,
      C = m(S),
      w = function (e, n, r) {
        var i = !!r,
          a = t.useRef(r);
        (t.useEffect(
          function () {
            a.current = r;
          },
          [r],
        ),
          t.useEffect(
            function () {
              if (!i || !e) return function () {};
              var t = function () {
                a.current && a.current.apply(a, arguments);
              };
              return (
                e.on(n, t),
                function () {
                  e.off(n, t);
                }
              );
            },
            [i, n, e, a],
          ));
      },
      T = function (e) {
        var n = t.useRef(e);
        return (
          t.useEffect(
            function () {
              n.current = e;
            },
            [e],
          ),
          n.current
        );
      },
      E = function (e) {
        return e !== null && i(e) === `object`;
      },
      ee = function (e) {
        return E(e) && typeof e.then == `function`;
      },
      te = function (e) {
        return (
          E(e) &&
          typeof e.elements == `function` &&
          typeof e.createToken == `function` &&
          typeof e.createPaymentMethod == `function` &&
          typeof e.confirmCardPayment == `function`
        );
      },
      D = `[object Object]`,
      O = function e(t, n) {
        if (!E(t) || !E(n)) return t === n;
        var r = Array.isArray(t);
        if (r !== Array.isArray(n)) return !1;
        var i = Object.prototype.toString.call(t) === D;
        if (i !== (Object.prototype.toString.call(n) === D)) return !1;
        if (!i && !r) return t === n;
        var a = Object.keys(t),
          o = Object.keys(n);
        if (a.length !== o.length) return !1;
        for (var s = {}, c = 0; c < a.length; c += 1) s[a[c]] = !0;
        for (var l = 0; l < o.length; l += 1) s[o[l]] = !0;
        var u = Object.keys(s);
        if (u.length !== a.length) return !1;
        var d = t,
          f = n;
        return u.every(function (t) {
          return e(d[t], f[t]);
        });
      },
      k = function (e, t, n) {
        return E(e)
          ? Object.keys(e).reduce(function (i, o) {
              var s = !E(t) || !O(e[o], t[o]);
              return n.includes(o)
                ? (s &&
                    console.warn(
                      `Unsupported prop change: options.${o} is not a mutable property.`,
                    ),
                  i)
                : s
                  ? r(r({}, i || {}), {}, a({}, o, e[o]))
                  : i;
            }, null)
          : null;
      },
      A =
        "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
      j = function (e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : A;
        if (e === null || te(e)) return e;
        throw Error(t);
      },
      M = function (e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : A;
        if (ee(e))
          return {
            tag: `async`,
            stripePromise: Promise.resolve(e).then(function (e) {
              return j(e, t);
            }),
          };
        var n = j(e, t);
        return n === null ? { tag: `empty` } : { tag: `sync`, stripe: n };
      },
      N = function (e) {
        !e ||
          !e._registerWrapper ||
          !e.registerAppInfo ||
          (e._registerWrapper({ name: `react-stripe-js`, version: `3.10.0` }),
          e.registerAppInfo({
            name: `react-stripe-js`,
            version: `3.10.0`,
            url: `https://stripe.com/docs/stripe-js/react`,
          }));
      },
      P = t.createContext(null);
    P.displayName = `ElementsContext`;
    var F = function (e, t) {
        if (!e)
          throw Error(
            `Could not find Elements context; You need to wrap the part of your app that ${t} in an <Elements> provider.`,
          );
        return e;
      },
      ne = function (e) {
        var n = e.stripe,
          r = e.options,
          i = e.children,
          a = t.useMemo(
            function () {
              return M(n);
            },
            [n],
          ),
          o = c(
            t.useState(function () {
              return {
                stripe: a.tag === `sync` ? a.stripe : null,
                elements: a.tag === `sync` ? a.stripe.elements(r) : null,
              };
            }),
            2,
          ),
          s = o[0],
          l = o[1];
        t.useEffect(
          function () {
            var e = !0,
              t = function (e) {
                l(function (t) {
                  return t.stripe ? t : { stripe: e, elements: e.elements(r) };
                });
              };
            return (
              a.tag === `async` && !s.stripe
                ? a.stripePromise.then(function (n) {
                    n && e && t(n);
                  })
                : a.tag === `sync` && !s.stripe && t(a.stripe),
              function () {
                e = !1;
              }
            );
          },
          [a, s, r],
        );
        var u = T(n);
        t.useEffect(
          function () {
            u !== null &&
              u !== n &&
              console.warn(
                "Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.",
              );
          },
          [u, n],
        );
        var d = T(r);
        return (
          t.useEffect(
            function () {
              if (s.elements) {
                var e = k(r, d, [`clientSecret`, `fonts`]);
                e && s.elements.update(e);
              }
            },
            [r, d, s.elements],
          ),
          t.useEffect(
            function () {
              N(s.stripe);
            },
            [s.stripe],
          ),
          t.createElement(P.Provider, { value: s }, i)
        );
      };
    ne.propTypes = { stripe: C.any, options: C.object };
    var I = function (e) {
        return F(t.useContext(P), e);
      },
      L = function () {
        return I(`calls useElements()`).elements;
      },
      R = function (e) {
        var t = e.children;
        return t(I(`mounts <ElementsConsumer>`));
      };
    R.propTypes = { children: C.func.isRequired };
    var re = [`on`, `session`],
      z = t.createContext(null);
    z.displayName = `CheckoutSdkContext`;
    var ie = function (e, t) {
        if (!e)
          throw Error(
            `Could not find CheckoutProvider context; You need to wrap the part of your app that ${t} in an <CheckoutProvider> provider.`,
          );
        return e;
      },
      B = t.createContext(null);
    B.displayName = `CheckoutContext`;
    var ae = function (e, t) {
        if (!e) return null;
        (e.on, e.session);
        var n = s(e, re);
        return Object.assign(t || e.session(), n);
      },
      V =
        "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
      H = function (e) {
        var n = e.stripe,
          r = e.options,
          i = e.children,
          a = t.useMemo(
            function () {
              return M(n, V);
            },
            [n],
          ),
          o = c(t.useState(null), 2),
          s = o[0],
          l = o[1],
          u = c(
            t.useState(function () {
              return { stripe: a.tag === `sync` ? a.stripe : null, checkoutSdk: null };
            }),
            2,
          ),
          d = u[0],
          f = u[1],
          p = function (e, t) {
            f(function (n) {
              return n.stripe && n.checkoutSdk ? n : { stripe: e, checkoutSdk: t };
            });
          },
          m = t.useRef(!1);
        t.useEffect(
          function () {
            var e = !0;
            return (
              a.tag === `async` && !d.stripe
                ? a.stripePromise.then(function (t) {
                    t &&
                      e &&
                      !m.current &&
                      ((m.current = !0),
                      t.initCheckout(r).then(function (e) {
                        e && (p(t, e), e.on(`change`, l));
                      }));
                  })
                : a.tag === `sync` &&
                  a.stripe &&
                  !m.current &&
                  ((m.current = !0),
                  a.stripe.initCheckout(r).then(function (e) {
                    e && (p(a.stripe, e), e.on(`change`, l));
                  })),
              function () {
                e = !1;
              }
            );
          },
          [a, d, r, l],
        );
        var h = T(n);
        t.useEffect(
          function () {
            h !== null &&
              h !== n &&
              console.warn(
                "Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.",
              );
          },
          [h, n],
        );
        var g = T(r),
          _ = T(d.checkoutSdk);
        (t.useEffect(
          function () {
            if (d.checkoutSdk) {
              var e = !!(!_ && d.checkoutSdk),
                t = g?.elementsOptions?.appearance,
                n = r?.elementsOptions?.appearance,
                i = !O(n, t);
              n && (i || e) && d.checkoutSdk.changeAppearance(n);
              var a = g?.elementsOptions?.fonts,
                o = r?.elementsOptions?.fonts,
                s = !O(a, o);
              o && (s || e) && d.checkoutSdk.loadFonts(o);
            }
          },
          [r, g, d.checkoutSdk, _],
        ),
          t.useEffect(
            function () {
              N(d.stripe);
            },
            [d.stripe],
          ));
        var v = t.useMemo(
          function () {
            return ae(d.checkoutSdk, s);
          },
          [d.checkoutSdk, s],
        );
        return d.checkoutSdk
          ? t.createElement(z.Provider, { value: d }, t.createElement(B.Provider, { value: v }, i))
          : null;
      };
    H.propTypes = {
      stripe: C.any,
      options: C.shape({ fetchClientSecret: C.func.isRequired, elementsOptions: C.object })
        .isRequired,
    };
    var oe = function (e) {
        return ie(t.useContext(z), e);
      },
      se = function (e) {
        var n = t.useContext(z),
          r = t.useContext(P);
        if (n && r)
          throw Error(
            `You cannot wrap the part of your app that ${e} in both <CheckoutProvider> and <Elements> providers.`,
          );
        return n ? ie(n, e) : F(r, e);
      },
      U = function () {
        oe(`calls useCheckout()`);
        var e = t.useContext(B);
        if (!e)
          throw Error(
            `Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.`,
          );
        return e;
      },
      W = [`mode`],
      ce = function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      },
      G = function (e, n) {
        var r = `${ce(e)}Element`,
          i = n
            ? function (e) {
                se(`mounts <${r}>`);
                var n = e.id,
                  i = e.className;
                return t.createElement(`div`, { id: n, className: i });
              }
            : function (n) {
                var i = n.id,
                  a = n.className,
                  o = n.options,
                  l = o === void 0 ? {} : o,
                  u = n.onBlur,
                  d = n.onFocus,
                  f = n.onReady,
                  p = n.onChange,
                  m = n.onEscape,
                  h = n.onClick,
                  g = n.onLoadError,
                  _ = n.onLoaderStart,
                  v = n.onNetworksChange,
                  y = n.onConfirm,
                  b = n.onCancel,
                  x = n.onShippingAddressChange,
                  S = n.onShippingRateChange,
                  C = n.onSavedPaymentMethodRemove,
                  E = n.onSavedPaymentMethodUpdate,
                  ee = se(`mounts <${r}>`),
                  te = `elements` in ee ? ee.elements : null,
                  D = `checkoutSdk` in ee ? ee.checkoutSdk : null,
                  O = c(t.useState(null), 2),
                  A = O[0],
                  j = O[1],
                  M = t.useRef(null),
                  N = t.useRef(null);
                (w(A, `blur`, u),
                  w(A, `focus`, d),
                  w(A, `escape`, m),
                  w(A, `click`, h),
                  w(A, `loaderror`, g),
                  w(A, `loaderstart`, _),
                  w(A, `networkschange`, v),
                  w(A, `confirm`, y),
                  w(A, `cancel`, b),
                  w(A, `shippingaddresschange`, x),
                  w(A, `shippingratechange`, S),
                  w(A, `savedpaymentmethodremove`, C),
                  w(A, `savedpaymentmethodupdate`, E),
                  w(A, `change`, p));
                var P;
                (f &&
                  (P =
                    e === `expressCheckout`
                      ? f
                      : function () {
                          f(A);
                        }),
                  w(A, `ready`, P),
                  t.useLayoutEffect(
                    function () {
                      if (M.current === null && N.current !== null && (te || D)) {
                        var t = null;
                        if (D)
                          switch (e) {
                            case `payment`:
                              t = D.createPaymentElement(l);
                              break;
                            case `address`:
                              if (`mode` in l) {
                                var n = l.mode,
                                  i = s(l, W);
                                if (n === `shipping`) t = D.createShippingAddressElement(i);
                                else if (n === `billing`) t = D.createBillingAddressElement(i);
                                else
                                  throw Error(
                                    `Invalid options.mode. mode must be 'billing' or 'shipping'.`,
                                  );
                              } else
                                throw Error(
                                  `You must supply options.mode. mode must be 'billing' or 'shipping'.`,
                                );
                              break;
                            case `expressCheckout`:
                              t = D.createExpressCheckoutElement(l);
                              break;
                            case `currencySelector`:
                              t = D.createCurrencySelectorElement();
                              break;
                            case `taxId`:
                              t = D.createTaxIdElement(l);
                              break;
                            default:
                              throw Error(
                                `Invalid Element type ${r}. You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.`,
                              );
                          }
                        else te && (t = te.create(e, l));
                        ((M.current = t), j(t), t && t.mount(N.current));
                      }
                    },
                    [te, D, l],
                  ));
                var F = T(l);
                return (
                  t.useEffect(
                    function () {
                      if (M.current) {
                        var e = k(l, F, [`paymentRequest`]);
                        e && `update` in M.current && M.current.update(e);
                      }
                    },
                    [l, F],
                  ),
                  t.useLayoutEffect(function () {
                    return function () {
                      if (M.current && typeof M.current.destroy == `function`)
                        try {
                          (M.current.destroy(), (M.current = null));
                        } catch {}
                    };
                  }, []),
                  t.createElement(`div`, { id: i, className: a, ref: N })
                );
              };
        return (
          (i.propTypes = {
            id: C.string,
            className: C.string,
            onChange: C.func,
            onBlur: C.func,
            onFocus: C.func,
            onReady: C.func,
            onEscape: C.func,
            onClick: C.func,
            onLoadError: C.func,
            onLoaderStart: C.func,
            onNetworksChange: C.func,
            onConfirm: C.func,
            onCancel: C.func,
            onShippingAddressChange: C.func,
            onShippingRateChange: C.func,
            onSavedPaymentMethodRemove: C.func,
            onSavedPaymentMethodUpdate: C.func,
            options: C.object,
          }),
          (i.displayName = r),
          (i.__elementType = e),
          i
        );
      },
      K = typeof window > `u`,
      le = t.createContext(null);
    le.displayName = `EmbeddedCheckoutProviderContext`;
    var ue = function () {
        var e = t.useContext(le);
        if (!e) throw Error(`<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>`);
        return e;
      },
      de =
        "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
      fe = function (e) {
        var n = e.stripe,
          r = e.options,
          i = e.children,
          a = t.useMemo(
            function () {
              return M(n, de);
            },
            [n],
          ),
          o = t.useRef(null),
          s = t.useRef(null),
          l = c(t.useState({ embeddedCheckout: null }), 2),
          u = l[0],
          d = l[1];
        (t.useEffect(
          function () {
            if (!(s.current || o.current)) {
              var e = function (e) {
                s.current ||
                  o.current ||
                  ((s.current = e),
                  (o.current = s.current.initEmbeddedCheckout(r).then(function (e) {
                    d({ embeddedCheckout: e });
                  })));
              };
              a.tag === `async` && !s.current && (r.clientSecret || r.fetchClientSecret)
                ? a.stripePromise.then(function (t) {
                    t && e(t);
                  })
                : a.tag === `sync` &&
                  !s.current &&
                  (r.clientSecret || r.fetchClientSecret) &&
                  e(a.stripe);
            }
          },
          [a, r, u, s],
        ),
          t.useEffect(
            function () {
              return function () {
                u.embeddedCheckout
                  ? ((o.current = null), u.embeddedCheckout.destroy())
                  : o.current &&
                    o.current.then(function () {
                      ((o.current = null), u.embeddedCheckout && u.embeddedCheckout.destroy());
                    });
              };
            },
            [u.embeddedCheckout],
          ),
          t.useEffect(
            function () {
              N(s);
            },
            [s],
          ));
        var f = T(n);
        t.useEffect(
          function () {
            f !== null &&
              f !== n &&
              console.warn(
                "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.",
              );
          },
          [f, n],
        );
        var p = T(r);
        return (
          t.useEffect(
            function () {
              if (p != null) {
                if (r == null) {
                  console.warn(
                    `Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.`,
                  );
                  return;
                }
                (r.clientSecret === void 0 &&
                  r.fetchClientSecret === void 0 &&
                  console.warn(
                    "Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.",
                  ),
                  p.clientSecret != null &&
                    r.clientSecret !== p.clientSecret &&
                    console.warn(
                      `Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.`,
                    ),
                  p.fetchClientSecret != null &&
                    r.fetchClientSecret !== p.fetchClientSecret &&
                    console.warn(
                      `Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.`,
                    ),
                  p.onComplete != null &&
                    r.onComplete !== p.onComplete &&
                    console.warn(
                      `Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.`,
                    ),
                  p.onShippingDetailsChange != null &&
                    r.onShippingDetailsChange !== p.onShippingDetailsChange &&
                    console.warn(
                      `Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.`,
                    ),
                  p.onLineItemsChange != null &&
                    r.onLineItemsChange !== p.onLineItemsChange &&
                    console.warn(
                      `Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.`,
                    ));
              }
            },
            [p, r],
          ),
          t.createElement(le.Provider, { value: u }, i)
        );
      },
      pe = K
        ? function (e) {
            var n = e.id,
              r = e.className;
            return (ue(), t.createElement(`div`, { id: n, className: r }));
          }
        : function (e) {
            var n = e.id,
              r = e.className,
              i = ue().embeddedCheckout,
              a = t.useRef(!1),
              o = t.useRef(null);
            return (
              t.useLayoutEffect(
                function () {
                  return (
                    !a.current && i && o.current !== null && (i.mount(o.current), (a.current = !0)),
                    function () {
                      if (a.current && i)
                        try {
                          (i.unmount(), (a.current = !1));
                        } catch {}
                    }
                  );
                },
                [i],
              ),
              t.createElement(`div`, { ref: o, id: n, className: r })
            );
          },
      q = function () {
        return se(`calls useStripe()`).stripe;
      },
      me = G(`auBankAccount`, K),
      he = G(`card`, K),
      ge = G(`cardNumber`, K),
      _e = G(`cardExpiry`, K),
      ve = G(`cardCvc`, K),
      ye = G(`fpxBank`, K),
      be = G(`iban`, K),
      xe = G(`idealBank`, K),
      Se = G(`p24Bank`, K),
      Ce = G(`epsBank`, K),
      we = G(`payment`, K),
      Te = G(`expressCheckout`, K),
      Ee = G(`currencySelector`, K),
      De = G(`paymentRequestButton`, K),
      Oe = G(`linkAuthentication`, K),
      ke = G(`address`, K),
      Ae = G(`shippingAddress`, K),
      je = G(`paymentMethodMessaging`, K),
      Me = G(`affirmMessage`, K),
      Ne = G(`afterpayClearpayMessage`, K),
      Pe = G(`taxId`, K);
    ((e.AddressElement = ke),
      (e.AffirmMessageElement = Me),
      (e.AfterpayClearpayMessageElement = Ne),
      (e.AuBankAccountElement = me),
      (e.CardCvcElement = ve),
      (e.CardElement = he),
      (e.CardExpiryElement = _e),
      (e.CardNumberElement = ge),
      (e.CheckoutProvider = H),
      (e.CurrencySelectorElement = Ee),
      (e.Elements = ne),
      (e.ElementsConsumer = R),
      (e.EmbeddedCheckout = pe),
      (e.EmbeddedCheckoutProvider = fe),
      (e.EpsBankElement = Ce),
      (e.ExpressCheckoutElement = Te),
      (e.FpxBankElement = ye),
      (e.IbanElement = be),
      (e.IdealBankElement = xe),
      (e.LinkAuthenticationElement = Oe),
      (e.P24BankElement = Se),
      (e.PaymentElement = we),
      (e.PaymentMethodMessagingElement = je),
      (e.PaymentRequestButtonElement = De),
      (e.ShippingAddressElement = Ae),
      (e.TaxIdElement = Pe),
      (e.useCheckout = U),
      (e.useElements = L),
      (e.useStripe = q));
  });
});
function un(e, t, n) {
  e.get(nt).logProductEvent(f, {
    actionType: t,
    mobileStore: n,
    location: b.CHATGPT_WEB_BILLING_SETTINGS_LOCATION_CONSUMER_BILLING_PAGE,
  });
}
var dn = e(() => {
  (lt(), i());
});
function fn(e) {
  let t = (0, pn.c)(4),
    { children: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r =
        n === void 0
          ? (0, mn.jsx)(h, {
              id: `settings.panel.loading`,
              defaultMessage: `Loading settings…`,
              description: `Loading state shown while settings load`,
            })
          : n),
      (t[0] = n),
      (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, mn.jsx)(de, { children: (0, mn.jsx)(At, { children: r }) })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
var pn,
  mn,
  hn = e(() => {
    ((pn = Je()), U(), kt(), x(), (mn = Be()));
  });
function gn(e) {
  let t = (0, _n.c)(11),
    { kind: n, loading: r, error: i, onRetry: a } = e;
  if (r) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, vn.jsx)(D, {
            children: (0, vn.jsx)(h, {
              id: `settings.consumerBilling.secureFormLoading`,
              defaultMessage: `{kind, select, billing {Loading secure billing form…} other {Loading secure payment form…}}`,
              description: `Loading status in a secure Stripe editor. kind selects billing information or saved payment methods.`,
              values: { kind: n },
            }),
          })),
          (t[0] = n),
          (t[1] = e)),
      e
    );
  }
  let o;
  t[2] !== i || t[3] !== n
    ? ((o = (0, vn.jsx)(`p`, {
        role: `alert`,
        className: `text-sm text-warning`,
        children:
          i instanceof se && i.status === 429
            ? (0, vn.jsx)(h, {
                id: `settings.consumerBilling.paymentFormRateLimit`,
                defaultMessage: `Too many payment method attempts. Please try again later.`,
                description: `Warning when initializing another payment form is rate limited`,
              })
            : (0, vn.jsx)(h, {
                id: `settings.consumerBilling.secureFormLoadError`,
                defaultMessage: `{kind, select, billing {Unable to load billing form. Please try again.} other {Unable to load payment form. Please try again.}}`,
                description: `Error when the secure Stripe editor cannot initialize. kind selects billing information or saved payment methods.`,
                values: { kind: n },
              }),
      })),
      (t[2] = i),
      (t[3] = n),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, vn.jsx)(h, {
        id: `settings.consumerBilling.retryPaymentForm`,
        defaultMessage: `Retry`,
        description: `Retry initializing the secure billing or payment-method form`,
      })),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === a
    ? (c = t[7])
    : ((c = (0, vn.jsx)(`div`, {
        className: `flex`,
        children: (0, vn.jsx)(Ke, { color: `secondary`, onClick: a, children: s }),
      })),
      (t[6] = a),
      (t[7] = c));
  let l;
  return (
    t[8] !== o || t[9] !== c
      ? ((l = (0, vn.jsxs)(B, { children: [o, c] })), (t[8] = o), (t[9] = c), (t[10] = l))
      : (l = t[10]),
    l
  );
}
var _n,
  vn,
  yn = e(() => {
    ((_n = Je()), U(), c(), je(), at(), p(), (vn = Be()));
  });
function bn(e) {
  let t = (0, Cn.c)(41),
    {
      available: n,
      selected: r,
      taxId: i,
      enabled: a,
      disabled: s,
      showErrors: c,
      onEnabledChange: l,
      onChange: u,
    } = e,
    d = L(),
    f = (0, wn.useId)(),
    p = (0, wn.useId)(),
    g = (0, wn.useId)(),
    _ = (0, wn.useId)(),
    v = (0, wn.useId)(),
    y = (0, wn.useId)(),
    [b, x] = (0, wn.useState)(!1),
    [S, C] = (0, wn.useState)(``),
    w = n[0];
  if (w == null) return null;
  let T;
  t[0] === d
    ? (T = t[1])
    : ((T = d.formatMessage({
        id: `settings.consumerBilling.taxTypeLabel`,
        defaultMessage: `Tax type`,
        description: `Label for the tax identification scheme selector in the consumer billing-information editor`,
      })),
      (t[0] = d),
      (t[1] = T));
  let E = T,
    ee;
  t[2] === d
    ? (ee = t[3])
    : ((ee = d.formatMessage({
        id: `settings.consumerBilling.searchTaxTypes`,
        defaultMessage: `Search tax types`,
        description: `Accessible label and placeholder for filtering supported tax identification schemes in the billing-information editor`,
      })),
      (t[2] = d),
      (t[3] = ee));
  let te = ee,
    D;
  if (
    t[4] !== n ||
    t[5] !== f ||
    t[6] !== s ||
    t[7] !== a ||
    t[8] !== w ||
    t[9] !== _ ||
    t[10] !== d ||
    t[11] !== g ||
    t[12] !== u ||
    t[13] !== l ||
    t[14] !== b ||
    t[15] !== S ||
    t[16] !== te ||
    t[17] !== r ||
    t[18] !== c ||
    t[19] !== i?.value ||
    t[20] !== v ||
    t[21] !== p ||
    t[22] !== E ||
    t[23] !== y
  ) {
    let e = S.trim().toLocaleLowerCase(),
      T = n
        .filter((t) => `${Sn(t.type)} ${t.description}`.toLocaleLowerCase().includes(e))
        .sort(xn),
      ee = c && r == null,
      O;
    t[25] !== c || t[26] !== i?.value
      ? ((O = c && !i?.value.trim()), (t[25] = c), (t[26] = i?.value), (t[27] = O))
      : (O = t[27]);
    let k = O,
      A;
    t[28] === l ? (A = t[29]) : ((A = (e) => l(e === !0)), (t[28] = l), (t[29] = A));
    let j;
    t[30] !== f || t[31] !== s || t[32] !== a || t[33] !== A
      ? ((j = (0, J.jsx)(et, { id: f, checked: a, disabled: s, onCheckedChange: A })),
        (t[30] = f),
        (t[31] = s),
        (t[32] = a),
        (t[33] = A),
        (t[34] = j))
      : (j = t[34]);
    let M;
    t[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((M = (0, J.jsx)(h, {
          id: `settings.consumerBilling.taxIdEnabled`,
          defaultMessage: `Add tax ID`,
          description: `Checkbox enabling business tax identification on personal billing invoices`,
        })),
        (t[35] = M))
      : (M = t[35]);
    let N;
    t[36] === f
      ? (N = t[37])
      : ((N = (0, J.jsx)(`label`, {
          className: `text-sm font-medium text-default select-none`,
          htmlFor: f,
          children: M,
        })),
        (t[36] = f),
        (t[37] = N));
    let P;
    (t[38] !== j || t[39] !== N
      ? ((P = (0, J.jsxs)(o, { children: [j, N] })), (t[38] = j), (t[39] = N), (t[40] = P))
      : (P = t[40]),
      (D = (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [
          P,
          a
            ? (0, J.jsxs)(J.Fragment, {
                children: [
                  (0, J.jsxs)(B, {
                    children: [
                      (0, J.jsx)(`label`, {
                        className: `text-sm font-medium text-default select-none`,
                        htmlFor: p,
                        children: (0, J.jsx)(h, {
                          id: `settings.consumerBilling.taxTypeLabel`,
                          defaultMessage: `Tax type`,
                          description: `Label for the tax identification scheme selector in the consumer billing-information editor`,
                        }),
                      }),
                      (0, J.jsx)(xt, {
                        disabled: s,
                        open: b,
                        onOpenChange: (e) => {
                          (x(e), e && C(``));
                        },
                        contentClassName: `w-[var(--radix-popover-trigger-width)]`,
                        contentMaxHeight: `tall`,
                        triggerButton: (0, J.jsxs)(Ke, {
                          id: p,
                          type: `button`,
                          color: `outline`,
                          size: `dialog`,
                          radius: `small`,
                          className: `w-full justify-between`,
                          role: `combobox`,
                          "aria-label": E,
                          "aria-expanded": b,
                          "aria-haspopup": `listbox`,
                          "aria-controls": b ? g : void 0,
                          "aria-invalid": ee,
                          "aria-describedby": ee ? v : void 0,
                          disabled: s,
                          children: [
                            (0, J.jsx)(`span`, {
                              className: `truncate`,
                              children: r == null ? E : Sn(r.type),
                            }),
                            (0, J.jsx)(Me, {}),
                          ],
                        }),
                        children: (0, J.jsxs)(Dt.Root, {
                          label: E,
                          children: [
                            (0, J.jsx)(Dt.Input, {
                              "aria-label": te,
                              placeholder: te,
                              value: S,
                              onValueChange: C,
                            }),
                            (0, J.jsxs)(Dt.List, {
                              id: g,
                              children: [
                                T.map((e) =>
                                  (0, J.jsx)(
                                    Dt.Item,
                                    {
                                      value: e.type,
                                      rightIcon: e.type === r?.type ? (0, J.jsx)(Ze, {}) : void 0,
                                      onSelect: () => {
                                        (u({
                                          type: e.stripe_type,
                                          country: e.country,
                                          country_specific_type: e.type,
                                          value: i?.value ?? ``,
                                        }),
                                          x(!1));
                                      },
                                      children: (0, J.jsxs)(`div`, {
                                        className: `flex flex-col gap-0.5`,
                                        children: [
                                          (0, J.jsx)(`span`, {
                                            className: `font-medium`,
                                            children: Sn(e.type),
                                          }),
                                          (0, J.jsx)(`span`, {
                                            className: `text-secondary`,
                                            children: e.description,
                                          }),
                                        ],
                                      }),
                                    },
                                    e.type,
                                  ),
                                ),
                                T.length === 0
                                  ? (0, J.jsx)(`p`, {
                                      role: `status`,
                                      className: `p-3 text-sm text-secondary`,
                                      children: (0, J.jsx)(h, {
                                        id: `settings.consumerBilling.noMatchingTaxTypes`,
                                        defaultMessage: `No matching tax types`,
                                        description: `Empty search result in the consumer billing editor's tax identification scheme selector`,
                                      }),
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                      }),
                      ee
                        ? (0, J.jsx)(`p`, {
                            id: v,
                            role: `alert`,
                            className: `text-sm text-danger`,
                            children: (0, J.jsx)(h, {
                              id: `settings.consumerBilling.taxIdTypeRequired`,
                              defaultMessage: `Please select a tax ID type`,
                              description: `Validation in the consumer billing editor when tax identification is enabled but its scheme is missing`,
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, J.jsxs)(B, {
                    children: [
                      (0, J.jsx)(`label`, {
                        className: `text-sm font-medium text-default select-none`,
                        htmlFor: _,
                        children: (0, J.jsx)(h, {
                          id: `settings.consumerBilling.taxId`,
                          defaultMessage: `Tax ID`,
                          description: `Label for the business tax identification number on consumer billing invoices`,
                        }),
                      }),
                      (0, J.jsx)(m, {
                        id: _,
                        name: `tax-id`,
                        autoComplete: `off`,
                        "aria-required": !0,
                        "aria-invalid": k,
                        "aria-describedby": k ? y : void 0,
                        disabled: s,
                        value: i?.value ?? ``,
                        placeholder:
                          r?.placeholder ??
                          d.formatMessage({
                            id: `settings.consumerBilling.taxId`,
                            defaultMessage: `Tax ID`,
                            description: `Label for the business tax identification number on consumer billing invoices`,
                          }),
                        onChange: (e) => {
                          let t = r ?? w;
                          u({
                            type: t.stripe_type,
                            country: t.country,
                            country_specific_type: t.type,
                            value: e.target.value,
                          });
                        },
                      }),
                      k
                        ? (0, J.jsx)(`p`, {
                            id: y,
                            role: `alert`,
                            className: `text-sm text-danger`,
                            children: (0, J.jsx)(h, {
                              id: `settings.consumerBilling.taxIdRequired`,
                              defaultMessage: `Tax ID is required`,
                              description: `Validation in the consumer billing editor when tax identification is enabled but its number is empty`,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              })
            : null,
        ],
      })),
      (t[4] = n),
      (t[5] = f),
      (t[6] = s),
      (t[7] = a),
      (t[8] = w),
      (t[9] = _),
      (t[10] = d),
      (t[11] = g),
      (t[12] = u),
      (t[13] = l),
      (t[14] = b),
      (t[15] = S),
      (t[16] = te),
      (t[17] = r),
      (t[18] = c),
      (t[19] = i?.value),
      (t[20] = v),
      (t[21] = p),
      (t[22] = E),
      (t[23] = y),
      (t[24] = D));
  } else D = t[24];
  return D;
}
function xn(e, t) {
  return Sn(e.type).localeCompare(Sn(t.type));
}
function Sn(e) {
  switch (e) {
    case `ca_gst_hst`:
      return `CA GST/HST`;
    case `ca_pst_bc`:
      return `CA PST-BC`;
    case `ca_pst_mb`:
      return `CA PST-MB`;
    case `ca_pst_sk`:
      return `CA PST-SK`;
    default:
      return e.replace(`_`, ` `).toUpperCase();
  }
}
var Cn,
  wn,
  J,
  Tn = e(() => {
    ((Cn = Je()), (wn = t(u(), 1)), U(), c(), st(), Tt(), je(), q(), W(), (J = Be()));
  });
function En(e, t) {
  let n = _(Ye(), On).safeParse(t);
  if (!kn.has(e) || !n.success) return [];
  let r = Object.values(n.data),
    i = new Set(r.filter((t) => t.supported && t.country === e).map((e) => e.region));
  return r.filter((e) => e.supported && i.has(e.region));
}
function Dn(e, t, n) {
  return (
    (t == null
      ? void 0
      : (e.find((e) => e.type === t.country_specific_type) ??
        e.find((e) => e.stripe_type === t.type && e.country === (t.country ?? n)))) ??
    e.find((e) => e.country === n) ??
    e[0]
  );
}
var On,
  kn,
  An = e(() => {
    (dt(),
      (On = G({
        type: Ye(),
        stripe_type: Ye(),
        country: Ye(),
        region: Ye(),
        supported: Re(),
        description: Ye(),
        placeholder: Ye().optional(),
      })),
      (kn = new Set(
        `AE.AM.AT.AU.AZ.BD.BE.BG.BH.CA.CH.CL.CY.CZ.DE.DK.EE.EG.ES.FI.FR.GB.GE.GR.HR.HU.ID.IE.IN.IS.IT.KE.KG.KH.KR.KZ.LI.LT.LU.LV.MA.MD.MT.NG.NL.NO.NZ.PE.PH.PL.PT.RO.SA.SE.SG.SI.SK.TH.TR.TW.TZ.UA.UG.UZ.ZA`.split(
          `.`,
        ),
      )));
  });
function jn(e) {
  let t = (0, In.c)(49),
    { accountId: n } = e,
    r = s(Ce),
    i = L(),
    a;
  t[0] === n ? (a = t[1]) : ((a = Ht(n)), (t[0] = n), (t[1] = a));
  let { data: o, isPending: c, isError: l, refetch: u } = oe(a),
    [d, f] = (0, Rn.useState)(!1),
    p = (0, Rn.useRef)(null),
    m = o?.address,
    g = m?.country,
    _ = m?.line1,
    v = m?.line2,
    y;
  t[2] !== _ || t[3] !== v
    ? ((y = [_, v].filter(Boolean)), (t[2] = _), (t[3] = v), (t[4] = y))
    : (y = t[4]);
  let b = y.join(`, `),
    x = m?.city,
    S = m?.state,
    C = m?.postal_code,
    w;
  t[5] !== x || t[6] !== S || t[7] !== C
    ? ((w = [x, S, C].filter(Boolean)), (t[5] = x), (t[6] = S), (t[7] = C), (t[8] = w))
    : (w = t[8]);
  let T = w.join(`, `),
    E;
  t[9] !== g || t[10] !== i
    ? ((E =
        g && /^[A-Z]{2}$/i.test(g) ? i.formatDisplayName(g.toUpperCase(), { type: `region` }) : g),
      (t[9] = g),
      (t[10] = i),
      (t[11] = E))
    : (E = t[11]);
  let ee;
  t[12] !== T || t[13] !== E || t[14] !== b
    ? ((ee = [b, T, E].filter(Boolean)), (t[12] = T), (t[13] = E), (t[14] = b), (t[15] = ee))
    : (ee = t[15]);
  let te = ee.join(`
`);
  if (!c && !l && !o?.email && !o?.name && !te && !o?.tax_id?.value) return null;
  let D;
  if (c) {
    let e;
    (t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(fn, {
          children: (0, Y.jsx)(h, {
            id: `settings.consumerBilling.loadingBillingInformation`,
            defaultMessage: `Loading billing information`,
            description: `Status while the personal billing email, name, address and tax information load`,
          }),
        })),
        (t[16] = e))
      : (e = t[16]),
      (D = e));
  } else if (l) {
    let e;
    (t[17] === u
      ? (e = t[18])
      : ((e = (0, Y.jsx)(Gt, { onRetry: () => void u() })), (t[17] = u), (t[18] = e)),
      (D = e));
  } else {
    let e;
    t[19] === o
      ? (e = t[20])
      : ((e = o?.email
          ? (0, Y.jsx)(ot, {
              label: (0, Y.jsx)(h, {
                id: `settings.consumerBilling.billingEmail`,
                defaultMessage: `Billing email`,
                description: `Label for the address receiving billing communications, shown in the consumer billing summary and editor`,
              }),
              description: (0, Y.jsx)(`span`, { className: `select-text`, children: o.email }),
              control: null,
            })
          : null),
        (t[19] = o),
        (t[20] = e));
    let n;
    t[21] === o
      ? (n = t[22])
      : ((n = o?.name
          ? (0, Y.jsx)(ot, {
              label: (0, Y.jsx)(h, {
                id: `settings.consumerBilling.billingName`,
                defaultMessage: `Name`,
                description: `Label for the name on billing invoices`,
              }),
              description: (0, Y.jsx)(`span`, { className: `select-text`, children: o.name }),
              control: null,
            })
          : null),
        (t[21] = o),
        (t[22] = n));
    let r;
    t[23] === te
      ? (r = t[24])
      : ((r = te
          ? (0, Y.jsx)(ot, {
              label: (0, Y.jsx)(h, {
                id: `settings.consumerBilling.billingAddress`,
                defaultMessage: `Billing address`,
                description: `Label for the postal address on billing invoices`,
              }),
              description: (0, Y.jsx)(`span`, {
                className: `whitespace-pre-line select-text`,
                children: te,
              }),
              control: null,
            })
          : null),
        (t[23] = te),
        (t[24] = r));
    let i;
    t[25] === o
      ? (i = t[26])
      : ((i = o?.tax_id
          ? (0, Y.jsx)(ot, {
              label: (0, Y.jsx)(h, {
                id: `settings.consumerBilling.taxId`,
                defaultMessage: `Tax ID`,
                description: `Label for the business tax identification number on consumer billing invoices`,
              }),
              description: (0, Y.jsx)(`span`, {
                className: `select-text`,
                children: (0, Y.jsx)(h, {
                  id: `settings.consumerBilling.taxIdValue`,
                  defaultMessage: `{type} · {value}`,
                  description: `Saved tax ID in the consumer billing summary; type is the tax scheme name and value is the customer's tax identification number`,
                  values: {
                    type: (o.tax_id.country_specific_type ?? o.tax_id.type)
                      .replaceAll(`_`, ` `)
                      .toUpperCase(),
                    value: o.tax_id.value,
                  },
                }),
              }),
              control: null,
            })
          : null),
        (t[25] = o),
        (t[26] = i));
    let a;
    (t[27] !== e || t[28] !== n || t[29] !== r || t[30] !== i
      ? ((a = (0, Y.jsxs)(de, { children: [e, n, r, i] })),
        (t[27] = e),
        (t[28] = n),
        (t[29] = r),
        (t[30] = i),
        (t[31] = a))
      : (a = t[31]),
      (D = a));
  }
  let O;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Y.jsx)(h, {
        id: `settings.consumerBilling.information`,
        defaultMessage: `Billing information`,
        description: `Heading for the personal billing name, email, address, and tax ID`,
      })),
      (t[32] = O))
    : (O = t[32]);
  let k = o == null,
    A;
  t[33] === r
    ? (A = t[34])
    : ((A = () => {
        (un(r, ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_EDIT_BILLING_INFORMATION_CLICKED),
          f(!0));
      }),
      (t[33] = r),
      (t[34] = A));
  let j;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(h, {
        id: `settings.consumerBilling.editInformation`,
        defaultMessage: `Edit`,
        description: `Button opening the consumer billing-information editor`,
      })),
      (t[35] = j))
    : (j = t[35]);
  let M;
  t[36] !== k || t[37] !== A
    ? ((M = (0, Y.jsx)(ye.Header, {
        title: O,
        actions: (0, Y.jsx)(Ke, {
          ref: p,
          color: `secondary`,
          size: `toolbar`,
          disabled: k,
          onClick: A,
          children: j,
        }),
      })),
      (t[36] = k),
      (t[37] = A),
      (t[38] = M))
    : (M = t[38]);
  let N;
  t[39] === D
    ? (N = t[40])
    : ((N = (0, Y.jsx)(ye.Content, { children: D })), (t[39] = D), (t[40] = N));
  let P;
  t[41] !== n || t[42] !== o || t[43] !== d
    ? ((P =
        d && o != null
          ? (0, Y.jsx)(Mn, {
              accountId: n,
              billingInfo: o,
              onCloseAutoFocus: () => p.current?.focus(),
              onClose: () => f(!1),
            })
          : null),
      (t[41] = n),
      (t[42] = o),
      (t[43] = d),
      (t[44] = P))
    : (P = t[44]);
  let F;
  return (
    t[45] !== M || t[46] !== N || t[47] !== P
      ? ((F = (0, Y.jsxs)(ye, { children: [M, N, P] })),
        (t[45] = M),
        (t[46] = N),
        (t[47] = P),
        (t[48] = F))
      : (F = t[48]),
    F
  );
}
function Mn(e) {
  let t = (0, In.c)(21),
    { accountId: n, billingInfo: r, onCloseAutoFocus: i, onClose: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = Jt(n)), (t[0] = n), (t[1] = o));
  let { data: s, isPending: c, isError: l, refetch: u } = oe(o),
    d = V(),
    [f, p] = (0, Rn.useState)(!1),
    m;
  t[2] === i
    ? (m = t[3])
    : ((m = {
        "aria-describedby": void 0,
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), i());
        },
      }),
      (t[2] = i),
      (t[3] = m));
  let h = !f,
    g;
  t[4] !== a || t[5] !== f
    ? ((g = (e) => {
        !e && !f && a();
      }),
      (t[4] = a),
      (t[5] = f),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] !== n ||
  t[8] !== r ||
  t[9] !== s ||
  t[10] !== d ||
  t[11] !== l ||
  t[12] !== c ||
  t[13] !== a ||
  t[14] !== u
    ? ((_ =
        s == null || l
          ? (0, Y.jsxs)(ee, {
              children: [
                (0, Y.jsx)(me, { title: (0, Y.jsx)(ct, { children: (0, Y.jsx)(Nn, {}) }) }),
                (0, Y.jsx)(ve, {
                  children: (0, Y.jsx)(gn, {
                    kind: `billing`,
                    loading: c,
                    onRetry: () => void u(),
                  }),
                }),
              ],
            })
          : (0, Y.jsx)(Ln.Elements, {
              stripe: s.stripe,
              options: { appearance: Yt(d === !0) },
              children: (0, Y.jsx)(Pn, {
                accountId: n,
                billingInfo: r,
                onSubmittingChange: p,
                onClose: a,
              }),
            })),
      (t[7] = n),
      (t[8] = r),
      (t[9] = s),
      (t[10] = d),
      (t[11] = l),
      (t[12] = c),
      (t[13] = a),
      (t[14] = u),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  return (
    t[16] !== m || t[17] !== h || t[18] !== g || t[19] !== _
      ? ((v = (0, Y.jsx)(ht, {
          open: !0,
          contentProps: m,
          showDialogClose: h,
          onOpenChange: g,
          children: _,
        })),
        (t[16] = m),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
function Nn() {
  let e = (0, In.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(h, {
          id: `settings.consumerBilling.editBillingInformation`,
          defaultMessage: `Edit billing information`,
          description: `Title of the personal billing-information editor`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Pn(e) {
  let t = (0, In.c)(111),
    { accountId: n, billingInfo: r, onSubmittingChange: i, onClose: a } = e,
    o = s(Ce),
    c = (0, Rn.useId)(),
    [l, u] = (0, Rn.useState)(r.email ?? ``),
    d = r.name ?? ``,
    f = r.address?.line1 ?? ``,
    p = r.address?.line2 ?? ``,
    g = r.address?.city ?? ``,
    _ = r.address?.state ?? ``,
    y = r.address?.postal_code ?? ``,
    b = r.address?.country ?? ``,
    x;
  t[0] !== f || t[1] !== p || t[2] !== g || t[3] !== _ || t[4] !== y || t[5] !== b
    ? ((x = { line1: f, line2: p, city: g, state: _, postal_code: y, country: b }),
      (t[0] = f),
      (t[1] = p),
      (t[2] = g),
      (t[3] = _),
      (t[4] = y),
      (t[5] = b),
      (t[6] = x))
    : (x = t[6]);
  let S;
  t[7] !== d || t[8] !== x
    ? ((S = { name: d, address: x }), (t[7] = d), (t[8] = x), (t[9] = S))
    : (S = t[9]);
  let C = S,
    [w, T] = (0, Rn.useState)(C),
    [E, te] = (0, Rn.useState)(Object.values(C.address).some(Fn)),
    [D, O] = (0, Rn.useState)(!1),
    [k, A] = (0, Rn.useState)(r.tax_id ?? null),
    [j, M] = (0, Rn.useState)(r.tax_id != null),
    [N, P] = (0, Rn.useState)(!1),
    F = it(`2144562623`),
    ne = w.address.country,
    I,
    L;
  t[10] !== ne || t[11] !== F.value.tax_types || t[12] !== k
    ? ((L = En(ne, F.value.tax_types)),
      (I = Dn(L, k, ne)),
      (t[10] = ne),
      (t[11] = F.value.tax_types),
      (t[12] = k),
      (t[13] = I),
      (t[14] = L))
    : ((I = t[13]), (L = t[14]));
  let R = I,
    re;
  t[15] !== R || t[16] !== k || t[17] !== j || t[18] !== L.length
    ? ((re = L.length === 0 || !j || (k != null && !!k.value.trim() && R != null)),
      (t[15] = R),
      (t[16] = k),
      (t[17] = j),
      (t[18] = L.length),
      (t[19] = re))
    : (re = t[19]);
  let z = re,
    ae;
  t[20] !== n ||
  t[21] !== D ||
  t[22] !== w.address ||
  t[23] !== w.name ||
  t[24] !== r.tax_id ||
  t[25] !== E ||
  t[26] !== l ||
  t[27] !== i ||
  t[28] !== R ||
  t[29] !== z ||
  t[30] !== k ||
  t[31] !== j ||
  t[32] !== L.length
    ? ((ae = async () => {
        if (!D || !E || !z) throw Error(`Incomplete billing details`);
        i(!0);
        let e =
          j && k != null && R != null
            ? { type: R.stripe_type, country: R.country, value: k.value.trim() }
            : null;
        (L.length === 0 && (e = r.tax_id ?? null),
          await v.safePost(`/payments/billing_info`, {
            requestBody: {
              account_id: n,
              email: l.trim(),
              name: w.name.trim() || null,
              address: w.address,
              tax_id: e,
            },
          }));
      }),
      (t[20] = n),
      (t[21] = D),
      (t[22] = w.address),
      (t[23] = w.name),
      (t[24] = r.tax_id),
      (t[25] = E),
      (t[26] = l),
      (t[27] = i),
      (t[28] = R),
      (t[29] = z),
      (t[30] = k),
      (t[31] = j),
      (t[32] = L.length),
      (t[33] = ae))
    : (ae = t[33]);
  let V;
  t[34] !== n || t[35] !== a || t[36] !== o
    ? ((V = async () => {
        (await Bt(o, n), a());
      }),
      (t[34] = n),
      (t[35] = a),
      (t[36] = o),
      (t[37] = V))
    : (V = t[37]);
  let H;
  t[38] === i ? (H = t[39]) : ((H = () => i(!1)), (t[38] = i), (t[39] = H));
  let oe;
  t[40] !== ae || t[41] !== V || t[42] !== H
    ? ((oe = { mutationFn: ae, onSuccess: V, onSettled: H }),
      (t[40] = ae),
      (t[41] = V),
      (t[42] = H),
      (t[43] = oe))
    : (oe = t[43]);
  let { mutate: se, isPending: U, isError: W, error: ce, reset: G } = De(oe),
    K;
  t[44] !== D || t[45] !== E || t[46] !== U || t[47] !== se || t[48] !== z
    ? ((K = (e) => {
        (e.preventDefault(), P(!0), D && E && z && !U && se());
      }),
      (t[44] = D),
      (t[45] = E),
      (t[46] = U),
      (t[47] = se),
      (t[48] = z),
      (t[49] = K))
    : (K = t[49]);
  let le;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, Y.jsx)(me, { title: (0, Y.jsx)(ct, { children: (0, Y.jsx)(Nn, {}) }) })),
      (t[50] = le))
    : (le = t[50]);
  let ue;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Y.jsx)(h, {
        id: `settings.consumerBilling.billingEmail`,
        defaultMessage: `Billing email`,
        description: `Label for the address receiving billing communications, shown in the consumer billing summary and editor`,
      })),
      (t[51] = ue))
    : (ue = t[51]);
  let de;
  t[52] === c
    ? (de = t[53])
    : ((de = (0, Y.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: c,
        children: ue,
      })),
      (t[52] = c),
      (t[53] = de));
  let fe;
  t[54] !== W || t[55] !== G
    ? ((fe = (e) => {
        (u(e.target.value), W && G());
      }),
      (t[54] = W),
      (t[55] = G),
      (t[56] = fe))
    : (fe = t[56]);
  let pe;
  t[57] !== l || t[58] !== c || t[59] !== U || t[60] !== fe
    ? ((pe = (0, Y.jsx)(m, {
        id: c,
        autoComplete: `email`,
        autoFocus: !0,
        disabled: U,
        name: `billing-email`,
        type: `email`,
        required: !0,
        value: l,
        onChange: fe,
      })),
      (t[57] = l),
      (t[58] = c),
      (t[59] = U),
      (t[60] = fe),
      (t[61] = pe))
    : (pe = t[61]);
  let q;
  t[62] !== de || t[63] !== pe
    ? ((q = (0, Y.jsxs)(B, { children: [de, pe] })), (t[62] = de), (t[63] = pe), (t[64] = q))
    : (q = t[64]);
  let he;
  t[65] === C
    ? (he = t[66])
    : ((he = { mode: `billing`, defaultValues: C }), (t[65] = C), (t[66] = he));
  let _e;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = () => O(!0)), (t[67] = _e))
    : (_e = t[67]);
  let ye;
  t[68] !== ne ||
  t[69] !== W ||
  t[70] !== G ||
  t[71] !== F.value.tax_types ||
  t[72] !== k ||
  t[73] !== j
    ? ((ye = (e) => {
        if ((T(e.value), te(e.complete), j && k != null && e.value.address.country !== ne)) {
          let t = Dn(En(e.value.address.country, F.value.tax_types), k, e.value.address.country);
          t != null &&
            A({
              type: t.stripe_type,
              country: t.country,
              country_specific_type: t.type,
              value: k.value,
            });
        }
        (P(!1), W && G());
      }),
      (t[68] = ne),
      (t[69] = W),
      (t[70] = G),
      (t[71] = F.value.tax_types),
      (t[72] = k),
      (t[73] = j),
      (t[74] = ye))
    : (ye = t[74]);
  let be;
  t[75] !== he || t[76] !== ye
    ? ((be = (0, Y.jsx)(Ln.AddressElement, { options: he, onReady: _e, onChange: ye })),
      (t[75] = he),
      (t[76] = ye),
      (t[77] = be))
    : (be = t[77]);
  let xe;
  t[78] !== W || t[79] !== G || t[80] !== R || t[81] !== k?.value
    ? ((xe = (e) => {
        (M(e),
          e &&
            R != null &&
            A({
              type: R.stripe_type,
              country: R.country,
              country_specific_type: R.type,
              value: k?.value ?? ``,
            }),
          P(!1),
          W && G());
      }),
      (t[78] = W),
      (t[79] = G),
      (t[80] = R),
      (t[81] = k?.value),
      (t[82] = xe))
    : (xe = t[82]);
  let Se;
  t[83] !== W || t[84] !== G
    ? ((Se = (e) => {
        (A(e), P(!1), W && G());
      }),
      (t[83] = W),
      (t[84] = G),
      (t[85] = Se))
    : (Se = t[85]);
  let we;
  t[86] !== U ||
  t[87] !== R ||
  t[88] !== xe ||
  t[89] !== Se ||
  t[90] !== k ||
  t[91] !== j ||
  t[92] !== L ||
  t[93] !== N
    ? ((we = (0, Y.jsx)(bn, {
        available: L,
        selected: R,
        taxId: k,
        enabled: j,
        disabled: U,
        showErrors: N,
        onEnabledChange: xe,
        onChange: Se,
      })),
      (t[86] = U),
      (t[87] = R),
      (t[88] = xe),
      (t[89] = Se),
      (t[90] = k),
      (t[91] = j),
      (t[92] = L),
      (t[93] = N),
      (t[94] = we))
    : (we = t[94]);
  let Te;
  t[95] !== ce || t[96] !== W
    ? ((Te = W
        ? (0, Y.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children:
              (ce != null && ie(ce)?.message) ||
              (0, Y.jsx)(h, {
                id: `settings.consumerBilling.saveInformationError`,
                defaultMessage: `Unable to save billing information. Please try again.`,
                description: `Error when saving consumer billing details fails; the editor retains the entered values for a retry`,
              }),
          })
        : null),
      (t[95] = ce),
      (t[96] = W),
      (t[97] = Te))
    : (Te = t[97]);
  let Ee;
  t[98] !== q || t[99] !== be || t[100] !== we || t[101] !== Te
    ? ((Ee = (0, Y.jsxs)(ve, { className: `gap-4`, children: [q, be, we, Te] })),
      (t[98] = q),
      (t[99] = be),
      (t[100] = we),
      (t[101] = Te),
      (t[102] = Ee))
    : (Ee = t[102]);
  let Oe = !D || !E || U,
    ke;
  t[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, Y.jsx)(h, {
        id: `settings.consumerBilling.save`,
        defaultMessage: `Save`,
        description: `Button saving edits to consumer billing information or a saved card`,
      })),
      (t[103] = ke))
    : (ke = t[103]);
  let Ae;
  t[104] !== U || t[105] !== Oe
    ? ((Ae = (0, Y.jsx)(ve, {
        children: (0, Y.jsx)(ge, {
          children: (0, Y.jsx)(Ke, {
            color: `primary`,
            type: `submit`,
            disabled: Oe,
            loading: U,
            children: ke,
          }),
        }),
      })),
      (t[104] = U),
      (t[105] = Oe),
      (t[106] = Ae))
    : (Ae = t[106]);
  let je;
  return (
    t[107] !== K || t[108] !== Ee || t[109] !== Ae
      ? ((je = (0, Y.jsxs)(ee, { as: `form`, onSubmit: K, children: [le, Ee, Ae] })),
        (t[107] = K),
        (t[108] = Ee),
        (t[109] = Ae),
        (t[110] = je))
      : (je = t[110]),
    je
  );
}
function Fn(e) {
  return !!e;
}
var In,
  Ln,
  Rn,
  Y,
  zn = e(() => {
    ((In = Je()),
      (Ln = ln()),
      pt(),
      I(),
      (Rn = t(u(), 1)),
      U(),
      c(),
      He(),
      je(),
      W(),
      rt(),
      ae(),
      he(),
      x(),
      we(),
      a(),
      H(),
      A(),
      dn(),
      hn(),
      Nt(),
      Ut(),
      yn(),
      qt(),
      Tn(),
      An(),
      (Y = Be()));
  });
function Bn(e) {
  if (
    !(e instanceof se) ||
    e.status < 400 ||
    e.status >= 500 ||
    e.errorCode !== `confirmation_token_requires_new_token`
  )
    return Wn.save;
  try {
    let t = Hn.safeParse(JSON.parse(e.message));
    if (!t.success) return Wn.save;
    let { stripe_error_code: n, stripe_decline_code: r } = t.data.detail;
    if (n == null && r == null) return Wn.save;
    for (let e of [r, n]) {
      let t = Un.safeParse(e);
      if (t.success) return Wn[t.data];
    }
    return [r, n].some(
      (e) =>
        e != null &&
        [
          `authentication_required`,
          `payment_intent_authentication_failure`,
          `setup_intent_authentication_failure`,
        ].includes(e),
    )
      ? Wn.authentication_failed
      : [
            `approve_with_id`,
            `do_not_honor`,
            `generic_decline`,
            `lost_card`,
            `pickup_card`,
            `restricted_card`,
            `revocation_of_all_authorizations`,
            `revocation_of_authorization`,
            `stolen_card`,
          ].includes(r ?? ``) ||
          [`card_declined`, `payment_intent_payment_attempt_failed`].includes(n ?? ``)
        ? Wn.payment_method_declined
        : Wn.other;
  } catch {
    return Wn.save;
  }
}
var Vn,
  Hn,
  Un,
  Wn,
  Gn = e(() => {
    (U(),
      dt(),
      p(),
      (Vn = class extends Error {}),
      (Hn = G({
        detail: G({ stripe_error_code: Ye().nullish(), stripe_decline_code: Ye().nullish() }),
      })),
      (Un = Ae([
        `insufficient_funds`,
        `expired_card`,
        `incorrect_number`,
        `incorrect_cvc`,
        `invalid_cvc`,
        `missing_payment_method`,
        `authentication_failed`,
        `payment_method_unavailable`,
        `payment_method_declined`,
        `other`,
      ])),
      (Wn = bt({
        save: {
          id: `settings.consumerBilling.addCardError`,
          defaultMessage: `Unable to save payment method. Please try again.`,
          description: `Error after Stripe or the billing server cannot save a new payment method`,
        },
        insufficient_funds: {
          id: `settings.consumerBilling.paymentFailure.insufficient_funds`,
          defaultMessage: `This payment method has insufficient funds. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        expired_card: {
          id: `settings.consumerBilling.paymentFailure.expired_card`,
          defaultMessage: `This payment method has expired. Update your payment method to continue.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        incorrect_number: {
          id: `settings.consumerBilling.paymentFailure.incorrect_number`,
          defaultMessage: `Check your card number and try again`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        incorrect_cvc: {
          id: `settings.consumerBilling.paymentFailure.incorrect_cvc`,
          defaultMessage: `Check your card's security code and try again`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        invalid_cvc: {
          id: `settings.consumerBilling.paymentFailure.invalid_cvc`,
          defaultMessage: `Check your card's security code and try again`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        missing_payment_method: {
          id: `settings.consumerBilling.paymentFailure.missing_payment_method`,
          defaultMessage: `Add a payment method to continue`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        authentication_failed: {
          id: `settings.consumerBilling.paymentFailure.authentication_failed`,
          defaultMessage: `This payment method couldn't be authorized. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        payment_method_unavailable: {
          id: `settings.consumerBilling.paymentFailure.payment_method_unavailable`,
          defaultMessage: `This payment method can't be used for this payment. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        payment_method_declined: {
          id: `settings.consumerBilling.paymentFailure.payment_method_declined`,
          defaultMessage: `This payment method was declined. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
        other: {
          id: `settings.consumerBilling.paymentFailure.other`,
          defaultMessage: `We couldn't process this payment. Try another payment method.`,
          description: `Actionable error after saving a consumer payment method fails; never reveals a sensitive bank decline reason`,
        },
      })));
  });
function Kn(e) {
  let t = qn.safeParse(e.getLayer(`1461259566`).get(`payment_method_order`, null)),
    n = t.success ? t.data : void 0;
  if (n == null || n.length === 0) {
    let t = qn.safeParse(e.getDynamicConfig(`247832287`).get(`payment_method_order`, null));
    n = t.success && t.data.length > 0 ? t.data : void 0;
  }
  let r = e.getLayer(`2160290604`).get(`pe_layout_mode`, `tabs`),
    i = e.getLayer(`4224149292`).get(`hide_payment_element_name`, !1);
  return {
    layout:
      r === `accordion`
        ? { type: `accordion`, defaultCollapsed: !1 }
        : { type: r === `auto` ? `auto` : `tabs` },
    terms: { card: `never` },
    fields: { billingDetails: i ? { name: `never` } : void 0 },
    paymentMethodOrder: n,
  };
}
var qn,
  Jn = e(() => {
    (dt(), (qn = $e(N()).transform((e) => e.filter((e) => typeof e == `string`))));
  });
function Yn(e) {
  let t = (0, Qn.c)(33),
    { accountId: n, onCloseAutoFocus: r, onClose: i, onSuccess: a } = e,
    o = s(Ce),
    c = mt(`3882703512`),
    l = mt(`2992509071`),
    u = Ee(`3882703512`),
    d = Ee(`2992509071`),
    f = P(Pe, `3882703512`),
    p = P(Pe, `2992509071`),
    m = V(),
    [h, g] = (0, er.useState)(!1),
    _;
  t[0] === n
    ? (_ = t[1])
    : ((_ = [`consumer-billing-setup`, n, `add-card`]), (t[0] = n), (t[1] = _));
  let y;
  t[2] !== n || t[3] !== m || t[4] !== o || t[5] !== p || t[6] !== l || t[7] !== c || t[8] !== f
    ? ((y = async (e) => {
        let { signal: t } = e;
        if (!f || !p) throw Error(`Payment configuration unavailable`);
        let r = await o.queryClient.fetchQuery(Jt(n)),
          i = c
            ? null
            : await v.safePost(`/payments/payment_method`, {
                requestBody: { account_id: n },
                additionalHeaders: l ? await qe(`chatgpt_add_card`) : void 0,
                signal: t,
              }),
          a = Yt(m),
          s;
        if (c) {
          if (r.currency == null) throw Error(`Payment currency unavailable`);
          s = {
            mode: `setup`,
            currency: r.currency,
            paymentMethodCreation: `manual`,
            paymentMethodTypes: [`card`],
            appearance: a,
            loader: `auto`,
          };
        } else {
          if (i == null) throw Error(`Payment setup unavailable`);
          s = { clientSecret: i.client_secret, appearance: a, loader: `auto` };
        }
        return { stripe: r.stripe, options: s, tokenFlow: c, sentinelEnabled: l };
      }),
      (t[2] = n),
      (t[3] = m),
      (t[4] = o),
      (t[5] = p),
      (t[6] = l),
      (t[7] = c),
      (t[8] = f),
      (t[9] = y))
    : (y = t[9]);
  let b = !u && !d,
    x;
  t[10] !== _ || t[11] !== y || t[12] !== b
    ? ((x = {
        queryKey: _,
        queryFn: y,
        enabled: b,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[10] = _),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x))
    : (x = t[13]);
  let { data: S, isPending: C, isError: w, error: T, refetch: E } = oe(x),
    te;
  t[14] === r
    ? (te = t[15])
    : ((te = {
        "aria-describedby": void 0,
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), r());
        },
      }),
      (t[14] = r),
      (t[15] = te));
  let D = !h,
    O;
  t[16] !== i || t[17] !== h
    ? ((O = (e) => {
        !e && !h && i();
      }),
      (t[16] = i),
      (t[17] = h),
      (t[18] = O))
    : (O = t[18]);
  let k;
  t[19] !== n ||
  t[20] !== S ||
  t[21] !== T ||
  t[22] !== w ||
  t[23] !== C ||
  t[24] !== i ||
  t[25] !== a ||
  t[26] !== E
    ? ((k =
        S == null || w
          ? (0, tr.jsxs)(ee, {
              children: [
                (0, tr.jsx)(me, { title: (0, tr.jsx)(ct, { children: (0, tr.jsx)(Xn, {}) }) }),
                (0, tr.jsx)(ve, {
                  children: (0, tr.jsx)(gn, {
                    kind: `payment`,
                    loading: C,
                    error: T,
                    onRetry: () => void E(),
                  }),
                }),
              ],
            })
          : (0, tr.jsx)($n.Elements, {
              stripe: S.stripe,
              options: S.options,
              children: (0, tr.jsx)(Zn, {
                accountId: n,
                tokenFlow: S.tokenFlow,
                sentinelEnabled: S.sentinelEnabled,
                onSubmittingChange: g,
                onClose: i,
                onSuccess: a,
              }),
            })),
      (t[19] = n),
      (t[20] = S),
      (t[21] = T),
      (t[22] = w),
      (t[23] = C),
      (t[24] = i),
      (t[25] = a),
      (t[26] = E),
      (t[27] = k))
    : (k = t[27]);
  let A;
  return (
    t[28] !== te || t[29] !== D || t[30] !== O || t[31] !== k
      ? ((A = (0, tr.jsx)(ht, {
          open: !0,
          contentOverflow: `visible`,
          contentProps: te,
          showDialogClose: D,
          onOpenChange: O,
          children: k,
        })),
        (t[28] = te),
        (t[29] = D),
        (t[30] = O),
        (t[31] = k),
        (t[32] = A))
      : (A = t[32]),
    A
  );
}
function Xn() {
  let e = (0, Qn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, tr.jsx)(h, {
          id: `settings.consumerBilling.addCard`,
          defaultMessage: `Add payment method`,
          description: `Title of the dialog for saving a card to the personal billing account`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Zn(e) {
  let t = (0, Qn.c)(69),
    {
      accountId: n,
      tokenFlow: r,
      sentinelEnabled: i,
      onSubmittingChange: a,
      onClose: o,
      onSuccess: c,
    } = e,
    l = s(Ce),
    u = (0, $n.useStripe)(),
    d = gt(),
    f = (0, $n.useElements)(),
    p = (0, er.useRef)(!1),
    m = (0, er.useRef)(null),
    g = (0, er.useRef)(null),
    [_, y] = (0, er.useState)(!1),
    [b, x] = (0, er.useState)(!1),
    [S, C] = (0, er.useState)(!1),
    [w, T] = (0, er.useState)(!1),
    [E, te] = (0, er.useState)(!1),
    [D, O] = (0, er.useState)(null),
    k = Oe(`2160290604`),
    A;
  t[0] === k
    ? (A = t[1])
    : ((A = k.get(`saved_payment_methods_enabled`, !1)), (t[0] = k), (t[1] = A));
  let j = A,
    M;
  t[2] !== n ||
  t[3] !== D ||
  t[4] !== f ||
  t[5] !== a ||
  t[6] !== j ||
  t[7] !== i ||
  t[8] !== u ||
  t[9] !== r
    ? ((M = async () => {
        if (!u || !f) throw Error(`Payment form unavailable`);
        a(!0);
        let e = {
          return_url: window.location.href,
          payment_method_data: {
            allow_redisplay: j ? `always` : void 0,
            billing_details: D ?? void 0,
          },
        };
        if (r) {
          let t = await f.submit();
          if (t.error) throw new Vn(t.error.message);
          if (m.current == null) {
            let t = await u.createConfirmationToken({ elements: f, params: e });
            if (t.error) throw new Vn(t.error.message);
            m.current = t.confirmationToken.id;
          }
          let r = { account_id: n, confirmation_token_id: m.current },
            a = await v.safePost(`/payments/payment_method/confirm`, {
              requestBody: r,
              additionalHeaders: i ? await qe(`chatgpt_add_card`) : void 0,
            });
          if (a.status === `requires_action`) {
            if (a.client_secret == null) throw Error(`Payment authentication unavailable`);
            let e = await u.handleNextAction({ clientSecret: a.client_secret });
            if (e.error) throw new Vn(e.error.message);
            if (e.setupIntent?.status !== `succeeded`)
              throw (
                (e.setupIntent?.status === `canceled` ||
                  e.setupIntent?.status === `requires_payment_method`) &&
                  (m.current = null),
                Error(`Payment authentication incomplete`)
              );
            a = await v.safePost(`/payments/payment_method/confirm`, { requestBody: r });
          }
          if (a.status !== `succeeded`) throw Error(`Payment setup incomplete`);
          return ((m.current = null), a.finalization_status ?? `added`);
        } else {
          if (g.current == null) {
            let t = await u.confirmSetup({
              elements: f,
              confirmParams: e,
              redirect: `if_required`,
            });
            if (t.error) throw new Vn(t.error.message);
            if (t.setupIntent.status !== `succeeded`) throw Error(`Payment setup incomplete`);
            let n = t.setupIntent.payment_method,
              r = typeof n == `string` ? n : n?.id;
            if (r == null) throw Error(`Saved payment method unavailable`);
            ((g.current = { methodId: r, setupIntentId: t.setupIntent.id }), y(!0));
          }
          let t = await v.safePost(`/payments/payment_method/{payment_method_id}/finalize`, {
            parameters: { path: { payment_method_id: g.current.methodId } },
            requestBody: { account_id: n, setup_intent_id: g.current.setupIntentId },
          });
          return ((g.current = null), y(!1), t.status);
        }
      }),
      (t[2] = n),
      (t[3] = D),
      (t[4] = f),
      (t[5] = a),
      (t[6] = j),
      (t[7] = i),
      (t[8] = u),
      (t[9] = r),
      (t[10] = M))
    : (M = t[10]);
  let N;
  t[11] !== n || t[12] !== o || t[13] !== c || t[14] !== l
    ? ((N = async (e) => {
        (await Bt(l, n), c?.(e), o());
      }),
      (t[11] = n),
      (t[12] = o),
      (t[13] = c),
      (t[14] = l),
      (t[15] = N))
    : (N = t[15]);
  let P;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => {
        e instanceof se &&
          (e.errorCode === `invalid_confirmation_token` ||
            e.errorCode === `confirmation_token_requires_new_token`) &&
          (m.current = null);
      }),
      (t[16] = P))
    : (P = t[16]);
  let F;
  t[17] === a
    ? (F = t[18])
    : ((F = () => {
        ((p.current = !1), a(!1));
      }),
      (t[17] = a),
      (t[18] = F));
  let ne;
  t[19] !== M || t[20] !== N || t[21] !== F
    ? ((ne = { mutationFn: M, onSuccess: N, onError: P, onSettled: F }),
      (t[19] = M),
      (t[20] = N),
      (t[21] = F),
      (t[22] = ne))
    : (ne = t[22]);
  let { mutate: I, isPending: L, isError: R, error: re, reset: z } = De(ne),
    ie = u != null && f != null && b && w && S && E,
    B;
  t[23] !== L || t[24] !== I || t[25] !== ie
    ? ((B = (e) => {
        (e.preventDefault(), ie && !L && !p.current && ((p.current = !0), I()));
      }),
      (t[23] = L),
      (t[24] = I),
      (t[25] = ie),
      (t[26] = B))
    : (B = t[26]);
  let ae;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, tr.jsx)(me, { title: (0, tr.jsx)(ct, { children: (0, tr.jsx)(Xn, {}) }) })),
      (t[27] = ae))
    : (ae = t[27]);
  let V = L || _,
    H;
  t[28] === d ? (H = t[29]) : ((H = Kn(d)), (t[28] = d), (t[29] = H));
  let oe;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = () => x(!0)), (t[30] = oe))
    : (oe = t[30]);
  let U;
  t[31] !== L || t[32] !== z
    ? ((U = (e) => {
        (L || ((m.current = null), z()), C(e.complete));
      }),
      (t[31] = L),
      (t[32] = z),
      (t[33] = U))
    : (U = t[33]);
  let W;
  t[34] !== H || t[35] !== U
    ? ((W = (0, tr.jsx)($n.PaymentElement, { options: H, onReady: oe, onChange: U })),
      (t[34] = H),
      (t[35] = U),
      (t[36] = W))
    : (W = t[36]);
  let ce;
  t[37] === w
    ? (ce = t[38])
    : ((ce = w
        ? (0, tr.jsx)(`p`, {
            className: `text-sm font-medium`,
            children: (0, tr.jsx)(h, {
              id: `settings.consumerBilling.addCardBillingAddress`,
              defaultMessage: `Billing address`,
              description: `Heading above the new payment method's billing-address fields`,
            }),
          })
        : null),
      (t[37] = w),
      (t[38] = ce));
  let G, K;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = { mode: `billing` }), (K = () => T(!0)), (t[39] = G), (t[40] = K))
    : ((G = t[39]), (K = t[40]));
  let le;
  t[41] !== L || t[42] !== z
    ? ((le = (0, tr.jsx)($n.AddressElement, {
        options: G,
        onReady: K,
        onChange: (e) => {
          (L || ((m.current = null), z()), O(e.value), te(e.complete));
        },
      })),
      (t[41] = L),
      (t[42] = z),
      (t[43] = le))
    : (le = t[43]);
  let ue;
  t[44] !== ce || t[45] !== le
    ? ((ue = (0, tr.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [ce, le] })),
      (t[44] = ce),
      (t[45] = le),
      (t[46] = ue))
    : (ue = t[46]);
  let de;
  t[47] !== V || t[48] !== W || t[49] !== ue
    ? ((de = (0, tr.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        inert: V,
        children: [W, ue],
      })),
      (t[47] = V),
      (t[48] = W),
      (t[49] = ue),
      (t[50] = de))
    : (de = t[50]);
  let fe;
  t[51] !== re || t[52] !== R
    ? ((fe = R
        ? (0, tr.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-warning`,
            children: re instanceof Vn && re.message ? re.message : (0, tr.jsx)(h, { ...Bn(re) }),
          })
        : null),
      (t[51] = re),
      (t[52] = R),
      (t[53] = fe))
    : (fe = t[53]);
  let pe;
  t[54] !== w || t[55] !== b
    ? ((pe =
        b && w
          ? (0, tr.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, tr.jsx)(h, {
                id: `settings.consumerBilling.addPaymentMethodDisclosure`,
                defaultMessage: `By continuing, you authorize OpenAI to save this payment method and charge it for future payments.`,
                description: `Consent disclosure displayed before a consumer saves a payment method for future billing`,
              }),
            })
          : null),
      (t[54] = w),
      (t[55] = b),
      (t[56] = pe))
    : (pe = t[56]);
  let q;
  t[57] !== de || t[58] !== fe || t[59] !== pe
    ? ((q = (0, tr.jsx)(ve, {
        children: (0, tr.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [de, fe, pe] }),
      })),
      (t[57] = de),
      (t[58] = fe),
      (t[59] = pe),
      (t[60] = q))
    : (q = t[60]);
  let he = !ie || L,
    _e;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, tr.jsx)(h, {
        id: `settings.consumerBilling.continueAddPaymentMethod`,
        defaultMessage: `Continue`,
        description: `Button authorizing saving a new payment method after the billing disclosure`,
      })),
      (t[61] = _e))
    : (_e = t[61]);
  let ye;
  t[62] !== L || t[63] !== he
    ? ((ye = (0, tr.jsx)(ve, {
        children: (0, tr.jsx)(ge, {
          children: (0, tr.jsx)(Ke, {
            type: `submit`,
            color: `primary`,
            size: `dialogAction`,
            loading: L,
            disabled: he,
            children: _e,
          }),
        }),
      })),
      (t[62] = L),
      (t[63] = he),
      (t[64] = ye))
    : (ye = t[64]);
  let be;
  return (
    t[65] !== q || t[66] !== ye || t[67] !== B
      ? ((be = (0, tr.jsxs)(ee, { as: `form`, onSubmit: B, children: [ae, q, ye] })),
        (t[65] = q),
        (t[66] = ye),
        (t[67] = B),
        (t[68] = be))
      : (be = t[68]),
    be
  );
}
var Qn,
  $n,
  er,
  tr,
  nr = e(() => {
    ((Qn = Je()),
      ($n = ln()),
      pt(),
      I(),
      (er = t(u(), 1)),
      U(),
      l(),
      c(),
      He(),
      je(),
      rt(),
      we(),
      Qe(),
      H(),
      A(),
      p(),
      Nt(),
      yn(),
      qt(),
      Gn(),
      Jn(),
      (tr = Be()));
  });
function rr(e) {
  let t = e.type,
    n = null;
  t === `card` && e.card != null
    ? ((t = e.card.brand),
      (n = (0, ir.jsx)(h, { ...or.maskedNumber, values: { last4: e.card.last4 } })))
    : t === `link`
      ? e.link == null
        ? (t = void 0)
        : (n = e.link.email)
      : t === `custom` &&
          e.custom?.provider === `adyen` &&
          (e.custom.payment_method_type === `gcash` ||
            e.custom.payment_method_type === `momo_wallet`)
        ? (t = e.custom.payment_method_type)
        : t === `paypal`
          ? (n = e.paypal?.payer_email)
          : t === `cashapp`
            ? (n = e.cashapp?.cashtag)
            : t === `upi`
              ? (n = e.upi?.vpa)
              : t === `sepa_debit` && e.sepa_debit?.last4
                ? (n = (0, ir.jsx)(h, {
                    ...or.maskedNumber,
                    values: { last4: e.sepa_debit.last4 },
                  }))
                : t === `kr_card` && e.kr_card?.last4
                  ? (n = (0, ir.jsx)(h, { ...or.maskedNumber, values: { last4: e.kr_card.last4 } }))
                  : t === `naver_pay`
                    ? (n = e.naver_pay?.buyer_id)
                    : t === `ideal` && (n = e.ideal?.bank);
  let r = t == null ? void 0 : sr.get(t),
    i = e.type === `kr_card` ? e.kr_card?.brand?.trim() : null;
  return {
    label: i ? (ar[i.toLowerCase()] ?? i) : (0, ir.jsx)(h, { ...(r ?? or.unsupported) }),
    description: (0, ir.jsx)(`span`, {
      className: `select-text`,
      children: r == null ? (0, ir.jsx)(h, { ...or.detailsUnavailable }) : n,
    }),
  };
}
var ir,
  ar,
  or,
  sr,
  cr = e(() => {
    (U(),
      (ir = Be()),
      (ar = {
        bc: `BC`,
        citi: `Citi`,
        hana: `Hana`,
        hyundai: `Hyundai`,
        jeju: `Jeju`,
        jeonbuk: `Jeonbuk`,
        kakaobank: `Kakao Bank`,
        kbank: `KBank`,
        kdbbank: `KDB Bank`,
        kookmin: `Kookmin`,
        kwangju: `Kwangju`,
        lotte: `Lotte`,
        mg: `MG`,
        nh: `NH`,
        post: `Post`,
        samsung: `Samsung`,
        savingsbank: `Savings Bank`,
        shinhan: `Shinhan`,
        shinhyup: `Shinhyup`,
        suhyup: `Suhyup`,
        tossbank: `Toss Bank`,
        woori: `Woori`,
      }),
      (or = bt({
        maskedNumber: {
          id: `settings.consumerBilling.maskedPaymentNumber`,
          defaultMessage: `•••• {last4}`,
          description: `Masked saved card or bank-account number; last4 is only the final four digits, never a complete account number`,
        },
        unsupported: {
          id: `settings.consumerBilling.unsupportedPaymentMethod`,
          defaultMessage: `Payment method`,
          description: `Fallback name for an unsupported saved payment method in consumer Billing`,
        },
        detailsUnavailable: {
          id: `settings.consumerBilling.paymentDetailsUnavailable`,
          defaultMessage: `Details unavailable`,
          description: `Fallback details for an unsupported saved payment method in consumer Billing`,
        },
        amex: {
          id: `settings.consumerBilling.paymentName.amex`,
          defaultMessage: `American Express`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        cartes_bancaires: {
          id: `settings.consumerBilling.paymentName.cartes_bancaires`,
          defaultMessage: `Cartes Bancaires`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        diners: {
          id: `settings.consumerBilling.paymentName.diners`,
          defaultMessage: `Diners Club`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        discover: {
          id: `settings.consumerBilling.paymentName.discover`,
          defaultMessage: `Discover`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        eftpos_au: {
          id: `settings.consumerBilling.paymentName.eftpos_au`,
          defaultMessage: `EFTPOS Australia`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        jcb: {
          id: `settings.consumerBilling.paymentName.jcb`,
          defaultMessage: `JCB`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        link: {
          id: `settings.consumerBilling.paymentName.link`,
          defaultMessage: `Link`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        mastercard: {
          id: `settings.consumerBilling.paymentName.mastercard`,
          defaultMessage: `Mastercard`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        unionpay: {
          id: `settings.consumerBilling.paymentName.unionpay`,
          defaultMessage: `UnionPay`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        visa: {
          id: `settings.consumerBilling.paymentName.visa`,
          defaultMessage: `Visa`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        unknown: {
          id: `settings.consumerBilling.paymentName.unknown`,
          defaultMessage: `Other`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        paypal: {
          id: `settings.consumerBilling.paymentName.paypal`,
          defaultMessage: `PayPal`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        klarna: {
          id: `settings.consumerBilling.paymentName.klarna`,
          defaultMessage: `Klarna`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        cashapp: {
          id: `settings.consumerBilling.paymentName.cashapp`,
          defaultMessage: `Cash App`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        pix: {
          id: `settings.consumerBilling.paymentName.pix`,
          defaultMessage: `Pix`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        upi: {
          id: `settings.consumerBilling.paymentName.upi`,
          defaultMessage: `UPI`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        gcash: {
          id: `settings.consumerBilling.paymentName.gcash`,
          defaultMessage: `GCash`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        momo_wallet: {
          id: `settings.consumerBilling.paymentName.momo_wallet`,
          defaultMessage: `MoMo`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        sepa_debit: {
          id: `settings.consumerBilling.paymentName.sepa_debit`,
          defaultMessage: `SEPA Direct Debit`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        go_pay: {
          id: `settings.consumerBilling.paymentName.go_pay`,
          defaultMessage: `GoPay`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        blik: {
          id: `settings.consumerBilling.paymentName.blik`,
          defaultMessage: `BLIK`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        bizum: {
          id: `settings.consumerBilling.paymentName.bizum`,
          defaultMessage: `Bizum`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        kr_card: {
          id: `settings.consumerBilling.paymentName.kr_card`,
          defaultMessage: `Korean Card`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        kakao_pay: {
          id: `settings.consumerBilling.paymentName.kakao_pay`,
          defaultMessage: `Kakao Pay`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        naver_pay: {
          id: `settings.consumerBilling.paymentName.naver_pay`,
          defaultMessage: `Naver Pay`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        ideal: {
          id: `settings.consumerBilling.paymentName.ideal`,
          defaultMessage: `iDEAL`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        satispay: {
          id: `settings.consumerBilling.paymentName.satispay`,
          defaultMessage: `Satispay`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
        twint: {
          id: `settings.consumerBilling.paymentName.twint`,
          defaultMessage: `TWINT`,
          description: `Name of a saved payment network or provider shown in consumer Billing`,
        },
      })),
      (sr = new Map(Object.entries(or))));
  });
function lr(e) {
  let t = (0, fr.c)(27),
    { accountId: n, methodId: r, onCloseAutoFocus: i, onClose: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = Jt(n)), (t[0] = n), (t[1] = o));
  let { data: s, isPending: c, isError: l, refetch: u } = oe(o),
    d;
  t[2] !== n || t[3] !== r
    ? ((d = {
        queryKey: [`consumer-billing`, n, `payment-method`, r],
        queryFn: (e) => {
          let { signal: t } = e;
          return v.safeGet(`/payments/payment_method/{payment_method_id}`, {
            parameters: { path: { payment_method_id: r }, query: { account_id: n } },
            signal: t,
          });
        },
        staleTime: 0,
        retry: !1,
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = d))
    : (d = t[4]);
  let { data: f, isPending: p, isError: m, refetch: h } = oe(d),
    g = V(),
    [_, y] = (0, mr.useState)(!1),
    b;
  t[5] === i
    ? (b = t[6])
    : ((b = {
        "aria-describedby": void 0,
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), i());
        },
      }),
      (t[5] = i),
      (t[6] = b));
  let x = !_,
    S;
  t[7] !== a || t[8] !== _
    ? ((S = (e) => {
        !e && !_ && a();
      }),
      (t[7] = a),
      (t[8] = _),
      (t[9] = S))
    : (S = t[9]);
  let C;
  t[10] !== n ||
  t[11] !== s ||
  t[12] !== l ||
  t[13] !== c ||
  t[14] !== f ||
  t[15] !== g ||
  t[16] !== m ||
  t[17] !== p ||
  t[18] !== a ||
  t[19] !== h ||
  t[20] !== u
    ? ((C =
        s != null && f != null && !m && !l
          ? (0, X.jsx)(pr.Elements, {
              stripe: s.stripe,
              options: { appearance: Yt(g === !0) },
              children: (0, X.jsx)(dr, {
                accountId: n,
                method: f.payment_method,
                onSubmittingChange: y,
                onClose: a,
              }),
            })
          : (0, X.jsxs)(ee, {
              children: [
                (0, X.jsx)(me, { title: (0, X.jsx)(ct, { children: (0, X.jsx)(ur, {}) }) }),
                (0, X.jsx)(ve, {
                  children: (0, X.jsx)(gn, {
                    kind: `payment`,
                    loading: p || c,
                    onRetry: () => {
                      Promise.all([h(), u()]);
                    },
                  }),
                }),
              ],
            })),
      (t[10] = n),
      (t[11] = s),
      (t[12] = l),
      (t[13] = c),
      (t[14] = f),
      (t[15] = g),
      (t[16] = m),
      (t[17] = p),
      (t[18] = a),
      (t[19] = h),
      (t[20] = u),
      (t[21] = C))
    : (C = t[21]);
  let w;
  return (
    t[22] !== b || t[23] !== x || t[24] !== S || t[25] !== C
      ? ((w = (0, X.jsx)(ht, {
          open: !0,
          contentProps: b,
          showDialogClose: x,
          onOpenChange: S,
          children: C,
        })),
        (t[22] = b),
        (t[23] = x),
        (t[24] = S),
        (t[25] = C),
        (t[26] = w))
      : (w = t[26]),
    w
  );
}
function ur() {
  let e = (0, fr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(h, {
          id: `settings.consumerBilling.editPaymentMethod`,
          defaultMessage: `Edit payment method`,
          description: `Title for editing a saved card's expiration date and billing address`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function dr(e) {
  let t = (0, fr.c)(127),
    { accountId: n, method: r, onSubmittingChange: i, onClose: a } = e,
    o = s(Ce),
    c = L(),
    l = (0, mr.useId)(),
    u = (0, mr.useId)(),
    d = (0, mr.useId)(),
    f = (0, mr.useId)(),
    p;
  t[0] === r.card
    ? (p = t[1])
    : ((p = r.card == null ? `` : String(r.card.exp_month).padStart(2, `0`)),
      (t[0] = r.card),
      (t[1] = p));
  let [g, _] = (0, mr.useState)(p),
    [y, b] = (0, mr.useState)(String(r.card?.exp_year ?? ``)),
    [x, S] = (0, mr.useState)(null),
    [C, w] = (0, mr.useState)(!0),
    [T, E] = (0, mr.useState)(!1),
    te,
    D,
    O;
  if (t[2] !== g || t[3] !== y) {
    let e = new Date(),
      n;
    (t[7] === g
      ? (n = t[8])
      : ((n = /^\d{1,2}$/.test(g) && Number(g) >= 1 && Number(g) <= 12), (t[7] = g), (t[8] = n)),
      (D = n));
    let r;
    (t[9] === y
      ? (r = t[10])
      : ((r = /^\d{4}$/.test(y) && Number(y) >= 2e3), (t[9] = y), (t[10] = r)),
      (O = r),
      (te =
        D &&
        O &&
        (Number(y) > e.getFullYear() ||
          (Number(y) === e.getFullYear() && Number(g) >= e.getMonth() + 1))),
      (t[2] = g),
      (t[3] = y),
      (t[4] = te),
      (t[5] = D),
      (t[6] = O));
  } else ((te = t[4]), (D = t[5]), (O = t[6]));
  let k = te,
    A;
  t[11] !== n ||
  t[12] !== x ||
  t[13] !== T ||
  t[14] !== C ||
  t[15] !== r.billing_details ||
  t[16] !== r.id ||
  t[17] !== g ||
  t[18] !== i ||
  t[19] !== k ||
  t[20] !== y
    ? ((A = async () => {
        if (!T || !C || !k) throw Error(`Incomplete card details`);
        (i(!0),
          await v.safePatch(`/payments/payment_method/{payment_method_id}`, {
            parameters: { path: { payment_method_id: r.id } },
            requestBody: {
              account_id: n,
              card: { exp_month: Number(g), exp_year: Number(y) },
              billing_details:
                x == null ? void 0 : { ...r.billing_details, name: x.name, address: x.address },
            },
          }));
      }),
      (t[11] = n),
      (t[12] = x),
      (t[13] = T),
      (t[14] = C),
      (t[15] = r.billing_details),
      (t[16] = r.id),
      (t[17] = g),
      (t[18] = i),
      (t[19] = k),
      (t[20] = y),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] !== n || t[23] !== a || t[24] !== o
    ? ((j = async () => {
        (await Bt(o, n), a());
      }),
      (t[22] = n),
      (t[23] = a),
      (t[24] = o),
      (t[25] = j))
    : (j = t[25]);
  let M;
  t[26] === i ? (M = t[27]) : ((M = () => i(!1)), (t[26] = i), (t[27] = M));
  let N;
  t[28] !== A || t[29] !== j || t[30] !== M
    ? ((N = { mutationFn: A, onSuccess: j, onSettled: M }),
      (t[28] = A),
      (t[29] = j),
      (t[30] = M),
      (t[31] = N))
    : (N = t[31]);
  let { mutate: P, isPending: F, isError: ne, error: I, reset: R } = De(N),
    re;
  t[32] !== T || t[33] !== C || t[34] !== F || t[35] !== P || t[36] !== k
    ? ((re = (e) => {
        (e.preventDefault(), T && C && k && !F && P());
      }),
      (t[32] = T),
      (t[33] = C),
      (t[34] = F),
      (t[35] = P),
      (t[36] = k),
      (t[37] = re))
    : (re = t[37]);
  let z;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, X.jsx)(me, { title: (0, X.jsx)(ct, { children: (0, X.jsx)(ur, {}) }) })),
      (t[38] = z))
    : (z = t[38]);
  let ae;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, X.jsx)(h, {
        id: `settings.consumerBilling.expirationDate`,
        defaultMessage: `Expiration date`,
        description: `Heading for the month and year fields in the saved payment-method editor`,
      })),
      (t[39] = ae))
    : (ae = t[39]);
  let V;
  t[40] === d
    ? (V = t[41])
    : ((V = (0, X.jsx)(`p`, {
        id: d,
        className: `text-sm font-medium text-default select-none`,
        children: ae,
      })),
      (t[40] = d),
      (t[41] = V));
  let H;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, X.jsx)(h, {
        id: `settings.consumerBilling.expirationMonth`,
        defaultMessage: `Month`,
        description: `Label for the saved card's two-digit expiration month`,
      })),
      (t[42] = H))
    : (H = t[42]);
  let oe;
  t[43] === l
    ? (oe = t[44])
    : ((oe = (0, X.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: l,
        children: H,
      })),
      (t[43] = l),
      (t[44] = oe));
  let se = !D,
    U = k ? void 0 : f,
    W;
  t[45] === c
    ? (W = t[46])
    : ((W = c.formatMessage({
        id: `settings.consumerBilling.expirationMonthPlaceholder`,
        defaultMessage: `MM`,
        description: `Placeholder indicating the two-digit card expiration month in the payment-method editor`,
      })),
      (t[45] = c),
      (t[46] = W));
  let ce;
  t[47] === g
    ? (ce = t[48])
    : ((ce = () => {
        g.length === 1 && _(g.padStart(2, `0`));
      }),
      (t[47] = g),
      (t[48] = ce));
  let G;
  t[49] !== ne || t[50] !== R
    ? ((G = (e) => {
        (_(e.target.value.replace(/\D/g, ``).slice(0, 2)), ne && R());
      }),
      (t[49] = ne),
      (t[50] = R),
      (t[51] = G))
    : (G = t[51]);
  let K;
  t[52] !== F ||
  t[53] !== g ||
  t[54] !== l ||
  t[55] !== se ||
  t[56] !== U ||
  t[57] !== W ||
  t[58] !== ce ||
  t[59] !== G
    ? ((K = (0, X.jsx)(m, {
        id: l,
        name: `expiration-month`,
        type: `text`,
        inputMode: `numeric`,
        autoComplete: `cc-exp-month`,
        autoFocus: !0,
        maxLength: 2,
        required: !0,
        "aria-invalid": se,
        "aria-describedby": U,
        disabled: F,
        placeholder: W,
        value: g,
        onBlur: ce,
        onChange: G,
      })),
      (t[52] = F),
      (t[53] = g),
      (t[54] = l),
      (t[55] = se),
      (t[56] = U),
      (t[57] = W),
      (t[58] = ce),
      (t[59] = G),
      (t[60] = K))
    : (K = t[60]);
  let le;
  t[61] !== oe || t[62] !== K
    ? ((le = (0, X.jsxs)(B, { children: [oe, K] })), (t[61] = oe), (t[62] = K), (t[63] = le))
    : (le = t[63]);
  let ue;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, X.jsx)(h, {
        id: `settings.consumerBilling.expirationYear`,
        defaultMessage: `Year`,
        description: `Label for the saved card's four-digit expiration year`,
      })),
      (t[64] = ue))
    : (ue = t[64]);
  let de;
  t[65] === u
    ? (de = t[66])
    : ((de = (0, X.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: u,
        children: ue,
      })),
      (t[65] = u),
      (t[66] = de));
  let fe = !O,
    pe = k ? void 0 : f,
    q;
  t[67] === c
    ? (q = t[68])
    : ((q = c.formatMessage({
        id: `settings.consumerBilling.expirationYearPlaceholder`,
        defaultMessage: `YYYY`,
        description: `Placeholder indicating the four-digit card expiration year in the payment-method editor`,
      })),
      (t[67] = c),
      (t[68] = q));
  let he;
  t[69] !== ne || t[70] !== R
    ? ((he = (e) => {
        (b(e.target.value.replace(/\D/g, ``).slice(0, 4)), ne && R());
      }),
      (t[69] = ne),
      (t[70] = R),
      (t[71] = he))
    : (he = t[71]);
  let _e;
  t[72] !== F ||
  t[73] !== fe ||
  t[74] !== pe ||
  t[75] !== q ||
  t[76] !== he ||
  t[77] !== y ||
  t[78] !== u
    ? ((_e = (0, X.jsx)(m, {
        id: u,
        name: `expiration-year`,
        type: `text`,
        inputMode: `numeric`,
        autoComplete: `cc-exp-year`,
        maxLength: 4,
        required: !0,
        "aria-invalid": fe,
        "aria-describedby": pe,
        disabled: F,
        placeholder: q,
        value: y,
        onChange: he,
      })),
      (t[72] = F),
      (t[73] = fe),
      (t[74] = pe),
      (t[75] = q),
      (t[76] = he),
      (t[77] = y),
      (t[78] = u),
      (t[79] = _e))
    : (_e = t[79]);
  let ye;
  t[80] !== de || t[81] !== _e
    ? ((ye = (0, X.jsxs)(B, { children: [de, _e] })), (t[80] = de), (t[81] = _e), (t[82] = ye))
    : (ye = t[82]);
  let be;
  t[83] !== d || t[84] !== le || t[85] !== ye
    ? ((be = (0, X.jsxs)(`div`, {
        role: `group`,
        "aria-labelledby": d,
        className: `grid grid-cols-2 gap-3`,
        children: [le, ye],
      })),
      (t[83] = d),
      (t[84] = le),
      (t[85] = ye),
      (t[86] = be))
    : (be = t[86]);
  let xe;
  t[87] !== f || t[88] !== k
    ? ((xe = k
        ? null
        : (0, X.jsx)(`p`, {
            id: f,
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, X.jsx)(h, {
              id: `settings.consumerBilling.invalidExpirationDate`,
              defaultMessage: `Enter a valid expiration date`,
              description: `Validation under the saved card's expiration fields when the month or year is invalid or the card has expired`,
            }),
          })),
      (t[87] = f),
      (t[88] = k),
      (t[89] = xe))
    : (xe = t[89]);
  let Se;
  t[90] !== V || t[91] !== be || t[92] !== xe
    ? ((Se = (0, X.jsxs)(B, { children: [V, be, xe] })),
      (t[90] = V),
      (t[91] = be),
      (t[92] = xe),
      (t[93] = Se))
    : (Se = t[93]);
  let we;
  t[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, X.jsx)(`p`, {
        className: `text-sm font-medium text-default select-none`,
        children: (0, X.jsx)(h, {
          id: `settings.consumerBilling.billingAddress`,
          defaultMessage: `Billing address`,
          description: `Label for the postal address on billing invoices`,
        }),
      })),
      (t[94] = we))
    : (we = t[94]);
  let Te = r.billing_details?.name ?? void 0,
    Ee = r.billing_details?.address?.line1 ?? void 0,
    Oe = r.billing_details?.address?.line2 ?? void 0,
    ke = r.billing_details?.address?.city ?? void 0,
    Ae = r.billing_details?.address?.state ?? void 0,
    je = r.billing_details?.address?.postal_code ?? void 0,
    Me = r.billing_details?.address?.country ?? ``,
    Ne;
  t[95] !== Ee || t[96] !== Oe || t[97] !== ke || t[98] !== Ae || t[99] !== je || t[100] !== Me
    ? ((Ne = { line1: Ee, line2: Oe, city: ke, state: Ae, postal_code: je, country: Me }),
      (t[95] = Ee),
      (t[96] = Oe),
      (t[97] = ke),
      (t[98] = Ae),
      (t[99] = je),
      (t[100] = Me),
      (t[101] = Ne))
    : (Ne = t[101]);
  let Pe;
  t[102] !== Te || t[103] !== Ne
    ? ((Pe = { mode: `billing`, defaultValues: { name: Te, address: Ne } }),
      (t[102] = Te),
      (t[103] = Ne),
      (t[104] = Pe))
    : (Pe = t[104]);
  let Fe;
  t[105] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = () => E(!0)), (t[105] = Fe))
    : (Fe = t[105]);
  let Ie;
  t[106] !== ne || t[107] !== R
    ? ((Ie = (e) => {
        (S(e.value), w(e.complete), ne && R());
      }),
      (t[106] = ne),
      (t[107] = R),
      (t[108] = Ie))
    : (Ie = t[108]);
  let Le;
  t[109] !== Pe || t[110] !== Ie
    ? ((Le = (0, X.jsxs)(B, {
        children: [we, (0, X.jsx)(pr.AddressElement, { options: Pe, onReady: Fe, onChange: Ie })],
      })),
      (t[109] = Pe),
      (t[110] = Ie),
      (t[111] = Le))
    : (Le = t[111]);
  let Re;
  t[112] !== I || t[113] !== ne
    ? ((Re = ne
        ? (0, X.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children:
              (I != null && ie(I)?.message) ||
              (0, X.jsx)(h, {
                id: `settings.consumerBilling.editCardError`,
                defaultMessage: `Unable to update payment method. Please try again.`,
                description: `Error when updating a card's expiration date or billing address fails`,
              }),
          })
        : null),
      (t[112] = I),
      (t[113] = ne),
      (t[114] = Re))
    : (Re = t[114]);
  let ze;
  t[115] !== Se || t[116] !== Le || t[117] !== Re
    ? ((ze = (0, X.jsxs)(ve, { className: `gap-4`, children: [Se, Le, Re] })),
      (t[115] = Se),
      (t[116] = Le),
      (t[117] = Re),
      (t[118] = ze))
    : (ze = t[118]);
  let Be = F || !T || !C || !k,
    Ve;
  t[119] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (0, X.jsx)(h, {
        id: `settings.consumerBilling.save`,
        defaultMessage: `Save`,
        description: `Button saving edits to consumer billing information or a saved card`,
      })),
      (t[119] = Ve))
    : (Ve = t[119]);
  let He;
  t[120] !== F || t[121] !== Be
    ? ((He = (0, X.jsx)(ve, {
        children: (0, X.jsx)(ge, {
          children: (0, X.jsx)(Ke, {
            type: `submit`,
            color: `primary`,
            loading: F,
            disabled: Be,
            children: Ve,
          }),
        }),
      })),
      (t[120] = F),
      (t[121] = Be),
      (t[122] = He))
    : (He = t[122]);
  let Ue;
  return (
    t[123] !== ze || t[124] !== He || t[125] !== re
      ? ((Ue = (0, X.jsxs)(ee, { as: `form`, onSubmit: re, children: [z, ze, He] })),
        (t[123] = ze),
        (t[124] = He),
        (t[125] = re),
        (t[126] = Ue))
      : (Ue = t[126]),
    Ue
  );
}
var fr,
  pr,
  mr,
  X,
  hr = e(() => {
    ((fr = Je()),
      (pr = ln()),
      pt(),
      I(),
      (mr = t(u(), 1)),
      U(),
      c(),
      He(),
      je(),
      W(),
      rt(),
      a(),
      H(),
      A(),
      Nt(),
      yn(),
      qt(),
      (X = Be()));
  });
function gr(e) {
  let t = (0, vr.c)(73),
    { accountId: n } = e,
    r = s(Ce),
    i = L(),
    a = T(),
    o = (0, yr.useId)(),
    c;
  t[0] === n ? (c = t[1]) : ((c = Pt(n)), (t[0] = n), (t[1] = c));
  let { data: l, isPending: u, isError: d, refetch: f } = oe(c),
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { enabled: !0, includePaymentMethod: !0, refetchOnWindowFocus: `always` }), (t[2] = p))
    : (p = t[2]);
  let { data: m, isSuccess: g, isFetching: _, refetch: y } = R(p),
    [b, x] = (0, yr.useState)(null),
    [S, w] = (0, yr.useState)(!1),
    E = (0, yr.useRef)(null),
    ee = (0, yr.useRef)(null),
    D;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        E.current?.isConnected ? E.current.focus() : ee.current?.focus();
      }),
      (t[3] = D))
    : (D = t[3]);
  let O = D,
    k = m?.isEnabled ? m.paymentMethod?.payment_method_id : null,
    A;
  t[4] !== n || t[5] !== f || t[6] !== y
    ? ((A = async (e) => {
        bb29: switch (e.type) {
          case `default`:
            await v.safePost(`/payments/payment_method/default`, {
              requestBody: { account_id: n, payment_method_id: e.id },
            });
            break bb29;
          case `backup`:
            await v.safePost(`/payments/payment_method/backup`, {
              requestBody: { account_id: n, enabled: e.enabled },
            });
            break bb29;
          case `remove`: {
            let [t, r] = await Promise.all([f(), y()]),
              i = t.data?.payment_methods.find((t) => t.id === e.id);
            if (
              t.isError ||
              i == null ||
              !$t({
                paymentMethod: i,
                defaultPaymentMethodId: t.data?.default_payment_method_id,
                autoReloadPaymentMethodId: r.data?.isEnabled
                  ? r.data.paymentMethod?.payment_method_id
                  : null,
                autoReloadResolved: r.isSuccess,
              })
            )
              throw Error(`Payment method is required by billing`);
            await v.safeDelete(`/payments/payment_method/{payment_method_id}`, {
              parameters: { path: { payment_method_id: e.id }, query: { account_id: n } },
            });
          }
        }
      }),
      (t[4] = n),
      (t[5] = f),
      (t[6] = y),
      (t[7] = A))
    : (A = t[7]);
  let j;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = () => w(!1)), (t[8] = j)) : (j = t[8]);
  let M;
  t[9] !== n || t[10] !== r
    ? ((M = async (e, t) => {
        (await Bt(r, n), t.type === `remove` && ee.current?.focus());
      }),
      (t[9] = n),
      (t[10] = r),
      (t[11] = M))
    : (M = t[11]);
  let N;
  t[12] !== A || t[13] !== M
    ? ((N = { mutationFn: A, onMutate: j, onSuccess: M }), (t[12] = A), (t[13] = M), (t[14] = N))
    : (N = t[14]);
  let { mutate: P, isPending: F, isError: ne, variables: I, reset: ie } = De(N),
    B;
  t[15] === l?.payment_methods
    ? (B = t[16])
    : ((B = l?.payment_methods.filter(_r)), (t[15] = l?.payment_methods), (t[16] = B));
  let ae = (B?.length ?? 0) > 1,
    V;
  if (u) {
    let e;
    (t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(fn, {
          children: (0, Z.jsx)(h, {
            id: `settings.consumerBilling.loadingPaymentMethods`,
            defaultMessage: `Loading payment methods`,
            description: `Status while the consumer's saved payment methods are loading`,
          }),
        })),
        (t[17] = e))
      : (e = t[17]),
      (V = e));
  } else if (d) {
    let e;
    (t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-warning`,
          children: (0, Z.jsx)(h, {
            id: `settings.consumerBilling.loadPaymentMethodsError`,
            defaultMessage: `Unable to load payment methods. Please try again.`,
            description: `Error when the consumer's saved payment methods cannot be loaded`,
          }),
        })),
        (t[18] = e))
      : (e = t[18]),
      (V = e));
  } else {
    let e;
    t[19] !== F ||
    t[20] !== _ ||
    t[21] !== k ||
    t[22] !== g ||
    t[23] !== l.default_payment_method_id ||
    t[24] !== l.payment_methods ||
    t[25] !== i ||
    t[26] !== P ||
    t[27] !== a ||
    t[28] !== y ||
    t[29] !== o ||
    t[30] !== ie ||
    t[31] !== r
      ? ((e = l.payment_methods.map((e, t) => {
          let n = e.id === l.default_payment_method_id,
            s = Xt(e),
            c = e.id === k,
            u = !$t({
              paymentMethod: e,
              defaultPaymentMethodId: l.default_payment_method_id,
              autoReloadPaymentMethodId: k,
              autoReloadResolved: g,
            }),
            d = e.type === `card` || !n;
          return (0, Z.jsx)(
            ot,
            {
              size: `compact`,
              icon: (0, Z.jsx)(ce, {}),
              ...rr(e),
              control: (0, Z.jsxs)(Z.Fragment, {
                children: [
                  s
                    ? (0, Z.jsx)(Ne, {
                        variant: `warning`,
                        children: (0, Z.jsx)(h, { ...br.expired }),
                      })
                    : null,
                  n ? (0, Z.jsx)(Ne, { children: (0, Z.jsx)(h, { ...br.default }) }) : null,
                  d
                    ? (0, Z.jsxs)(te, {
                        triggerButton: (0, Z.jsx)(Ke, {
                          color: `ghost`,
                          radius: `large`,
                          size: `inputIcon`,
                          "aria-label": i.formatMessage({
                            id: `settings.consumerBilling.paymentActions`,
                            defaultMessage: `Open payment method actions`,
                            description: `Accessible label for a saved payment method's actions menu`,
                          }),
                          disabled: F,
                          onFocus: (e) => {
                            E.current = e.currentTarget;
                          },
                          onPointerDown: (e) => {
                            E.current = e.currentTarget;
                          },
                          children: (0, Z.jsx)(re, {}),
                        }),
                        children: [
                          !n && e.type !== `custom`
                            ? (0, Z.jsx)(C.Item, {
                                disabled: F,
                                onSelect: () => {
                                  (un(
                                    r,
                                    ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_SET_DEFAULT_PAYMENT_METHOD_CLICKED,
                                  ),
                                    P({ type: `default`, id: e.id }));
                                },
                                children: (0, Z.jsx)(h, {
                                  id: `settings.consumerBilling.setDefault`,
                                  defaultMessage: `Set as default`,
                                  description: `Make this saved payment method the default for subscription payments`,
                                }),
                              })
                            : null,
                          e.type === `card`
                            ? (0, Z.jsx)(C.Item, {
                                disabled: F,
                                onSelect: () => {
                                  (ie(),
                                    w(!1),
                                    un(
                                      r,
                                      ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_EDIT_PAYMENT_METHOD_CLICKED,
                                    ),
                                    x({ type: `edit`, method: e }));
                                },
                                children: (0, Z.jsx)(h, {
                                  id: `settings.consumerBilling.editCard`,
                                  defaultMessage: `Edit`,
                                  description: `Edit a saved card's expiration and billing address`,
                                }),
                              })
                            : null,
                          n
                            ? null
                            : (0, Z.jsx)(C.Item, {
                                tone: `danger`,
                                disabled: F || _ || u,
                                focusableWhenDisabled: c && !F,
                                "aria-describedby": c ? `${o}-${t}` : void 0,
                                onSelect: () => {
                                  (un(
                                    r,
                                    ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_REMOVE_PAYMENT_METHOD_CLICKED,
                                  ),
                                    P({ type: `remove`, id: e.id }));
                                },
                                children: (0, Z.jsx)(h, {
                                  id: `settings.consumerBilling.removeCard`,
                                  defaultMessage: `Remove`,
                                  description: `Remove this saved payment method from the consumer billing account`,
                                }),
                              }),
                          !n && c
                            ? (0, Z.jsxs)(Z.Fragment, {
                                children: [
                                  (0, Z.jsx)(C.Message, {
                                    compact: !0,
                                    children: (0, Z.jsx)(`span`, {
                                      id: `${o}-${t}`,
                                      children: (0, Z.jsx)(h, {
                                        id: `settings.consumerBilling.autoReloadRemovalHelp`,
                                        defaultMessage: `This card can’t be removed because it’s selected for auto-reload`,
                                        description: `Explains why the saved card selected for auto-reload cannot be removed`,
                                      }),
                                    }),
                                  }),
                                  (0, Z.jsx)(C.Item, {
                                    onSelect: () => {
                                      a(`/settings/usage`);
                                    },
                                    children: (0, Z.jsx)(h, {
                                      id: `settings.consumerBilling.manageAutoReload`,
                                      defaultMessage: `Manage auto-reload`,
                                      description: `Open Usage settings to choose another auto-reload card or disable auto-reload`,
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          !n && !g && !_
                            ? (0, Z.jsx)(C.Item, {
                                onSelect: () => void y(),
                                children: (0, Z.jsx)(h, {
                                  id: `settings.consumerBilling.retryRemovalProtection`,
                                  defaultMessage: `Retry`,
                                  description: `Retry loading auto-reload settings before allowing a payment method to be removed`,
                                }),
                              })
                            : null,
                        ],
                      })
                    : null,
                ],
              }),
            },
            e.id,
          );
        })),
        (t[19] = F),
        (t[20] = _),
        (t[21] = k),
        (t[22] = g),
        (t[23] = l.default_payment_method_id),
        (t[24] = l.payment_methods),
        (t[25] = i),
        (t[26] = P),
        (t[27] = a),
        (t[28] = y),
        (t[29] = o),
        (t[30] = ie),
        (t[31] = r),
        (t[32] = e))
      : (e = t[32]);
    let n;
    t[33] === l.payment_methods.length
      ? (n = t[34])
      : ((n =
          l.payment_methods.length === 0
            ? (0, Z.jsx)(ot, {
                size: `compact`,
                label: (0, Z.jsx)(`span`, {
                  className: `font-normal text-secondary`,
                  children: (0, Z.jsx)(h, {
                    id: `settings.consumerBilling.noPaymentMethods`,
                    defaultMessage: `No payment methods available`,
                    description: `Empty state when a consumer has no saved payment methods`,
                  }),
                }),
                control: null,
              })
            : null),
        (t[33] = l.payment_methods.length),
        (t[34] = n));
    let s;
    t[35] !== F ||
    t[36] !== ae ||
    t[37] !== l.backup_payment_method_enabled ||
    t[38] !== i ||
    t[39] !== P
      ? ((s =
          l.backup_payment_method_enabled != null && ae
            ? (0, Z.jsx)(ot, {
                label: (0, Z.jsx)(h, { ...br.backup }),
                description: (0, Z.jsx)(h, {
                  id: `settings.consumerBilling.backupDescription`,
                  defaultMessage: `Use another payment method if your default payment method fails`,
                  description: `Explains the effect of enabling backup payment methods for a consumer subscription`,
                }),
                control: (0, Z.jsx)(z, {
                  checked: l.backup_payment_method_enabled,
                  disabled: F,
                  ariaLabel: i.formatMessage(br.backup),
                  onChange: (e) => P({ type: `backup`, enabled: e }),
                }),
              })
            : null),
        (t[35] = F),
        (t[36] = ae),
        (t[37] = l.backup_payment_method_enabled),
        (t[38] = i),
        (t[39] = P),
        (t[40] = s))
      : (s = t[40]);
    let c;
    (t[41] !== n || t[42] !== s || t[43] !== e
      ? ((c = (0, Z.jsxs)(de, { children: [e, n, s] })),
        (t[41] = n),
        (t[42] = s),
        (t[43] = e),
        (t[44] = c))
      : (c = t[44]),
      (V = c));
  }
  let H;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Z.jsx)(h, {
        id: `settings.consumerBilling.paymentMethods`,
        defaultMessage: `Payment methods`,
        description: `Saved payment methods for a consumer subscription`,
      })),
      (t[45] = H))
    : (H = t[45]);
  let se;
  t[46] !== ie || t[47] !== r
    ? ((se = (e) => {
        ((E.current = e.currentTarget),
          ie(),
          w(!1),
          un(r, ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_ADD_PAYMENT_METHOD_CLICKED),
          x({ type: `add` }));
      }),
      (t[46] = ie),
      (t[47] = r),
      (t[48] = se))
    : (se = t[48]);
  let U;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Z.jsx)(h, {
        id: `settings.consumerBilling.addPaymentMethod`,
        defaultMessage: `Add new`,
        description: `Open the form to add a personal payment method`,
      })),
      (t[49] = U))
    : (U = t[49]);
  let W;
  t[50] !== F || t[51] !== se
    ? ((W = (0, Z.jsx)(ye.Header, {
        title: H,
        actions: (0, Z.jsx)(Ke, {
          ref: ee,
          color: `secondary`,
          size: `toolbar`,
          disabled: F,
          onClick: se,
          children: U,
        }),
      })),
      (t[50] = F),
      (t[51] = se),
      (t[52] = W))
    : (W = t[52]);
  let G;
  t[53] === S
    ? (G = t[54])
    : ((G = S
        ? (0, Z.jsx)(`p`, {
            role: `status`,
            className: `text-sm text-secondary`,
            children: (0, Z.jsx)(h, {
              id: `settings.consumerBilling.paymentMethodAlreadySaved`,
              defaultMessage: `This card is already saved`,
              description: `Status after the backend recognizes a duplicate card and keeps the existing saved payment method`,
            }),
          })
        : null),
      (t[53] = S),
      (t[54] = G));
  let K;
  t[55] !== ne || t[56] !== I
    ? ((K =
        ne && I != null
          ? (0, Z.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-warning`,
              children: (0, Z.jsx)(h, { ...br[`${I.type}Error`] }),
            })
          : null),
      (t[55] = ne),
      (t[56] = I),
      (t[57] = K))
    : (K = t[57]);
  let le;
  t[58] !== V || t[59] !== G || t[60] !== K
    ? ((le = (0, Z.jsxs)(ye.Content, { children: [G, K, V] })),
      (t[58] = V),
      (t[59] = G),
      (t[60] = K),
      (t[61] = le))
    : (le = t[61]);
  let fe;
  t[62] !== n || t[63] !== b?.type
    ? ((fe =
        b?.type === `add`
          ? (0, Z.jsx)(Yn, {
              accountId: n,
              onCloseAutoFocus: O,
              onClose: () => x(null),
              onSuccess: (e) => w(e === `already_saved`),
            })
          : null),
      (t[62] = n),
      (t[63] = b?.type),
      (t[64] = fe))
    : (fe = t[64]);
  let pe;
  t[65] !== n || t[66] !== b
    ? ((pe =
        b?.type === `edit`
          ? (0, Z.jsx)(lr, {
              accountId: n,
              methodId: b.method.id,
              onCloseAutoFocus: O,
              onClose: () => x(null),
            })
          : null),
      (t[65] = n),
      (t[66] = b),
      (t[67] = pe))
    : (pe = t[67]);
  let q;
  return (
    t[68] !== W || t[69] !== le || t[70] !== fe || t[71] !== pe
      ? ((q = (0, Z.jsxs)(ye, { children: [W, le, fe, pe] })),
        (t[68] = W),
        (t[69] = le),
        (t[70] = fe),
        (t[71] = pe),
        (t[72] = q))
      : (q = t[72]),
    q
  );
}
function _r(e) {
  return e.type === `card` && !Xt(e);
}
var vr,
  yr,
  Z,
  br,
  xr = e(() => {
    ((vr = Je()),
      pt(),
      I(),
      (yr = t(u(), 1)),
      U(),
      S(),
      be(),
      c(),
      _e(),
      q(),
      r(),
      g(),
      rt(),
      ae(),
      he(),
      x(),
      H(),
      Qt(),
      dn(),
      hn(),
      nr(),
      cr(),
      hr(),
      Nt(),
      (Z = Be()),
      (br = bt({
        default: {
          id: `settings.consumerBilling.defaultCard`,
          defaultMessage: `Default`,
          description: `Badge for the default subscription payment method`,
        },
        expired: {
          id: `settings.consumerBilling.expiredCard`,
          defaultMessage: `Expired`,
          description: `Badge for a saved card whose expiration date has passed`,
        },
        backup: {
          id: `settings.consumerBilling.backupMethods`,
          defaultMessage: `Backup payment methods`,
          description: `Toggle allowing another saved payment method when the default fails`,
        },
        defaultError: {
          id: `settings.consumerBilling.setDefaultPaymentMethodError`,
          defaultMessage: `Unable to set default payment method. Please try again.`,
          description: `Error after setting the default saved payment method fails`,
        },
        backupError: {
          id: `settings.consumerBilling.backupPaymentMethodsError`,
          defaultMessage: `Unable to update backup payment methods setting. Please try again.`,
          description: `Error after changing the backup payment-method setting fails`,
        },
        removeError: {
          id: `settings.consumerBilling.removePaymentMethodError`,
          defaultMessage: `Unable to remove payment method. Please try again.`,
          description: `Error after removing a saved payment method fails`,
        },
      })));
  });
function Sr(e) {
  if (Zt(e) != null) return `external_manage`;
  let t = e.account.plan_type,
    n = Ot(t),
    r = Ot(e.entitlement.scheduled_plan_change?.plan_type),
    i =
      n != null &&
      r != null &&
      St({ currentPlan: n.pricePlan, targetPlan: r.pricePlan }) === `downgrade`;
  return !e.entitlement.is_active_subscription_gratis &&
    t !== `free` &&
    (!e.last_active_subscription.will_renew || e.entitlement.cancels_at != null || i)
    ? `renew`
    : t === `free` || t === `go` || t === `plus`
      ? `upgrade`
      : (t === `pro` || t === `prolite`) && e.last_active_subscription.will_renew
        ? `change`
        : `view`;
}
function Cr(e) {
  return e.last_active_subscription.will_renew === !0 && e.entitlement.cancels_at == null;
}
var wr = e(() => {
  (Et(), Qt());
});
function Tr(e) {
  let t = (0, Or.c)(128),
    { account: n, accountId: r } = e,
    i = s(Ce),
    a = L(),
    o = gt(),
    [c, l] = (0, kr.useState)(null),
    u;
  t[0] === n.account.plan_type
    ? (u = t[1])
    : ((u = Ot(n.account.plan_type)), (t[0] = n.account.plan_type), (t[1] = u));
  let d = u,
    f;
  t[2] === n ? (f = t[3]) : ((f = Sr(n)), (t[2] = n), (t[3] = f));
  let p = f,
    m;
  t[4] === n ? (m = t[5]) : ((m = Zt(n)), (t[4] = n), (t[5] = m));
  let g = m,
    _;
  t[6] !== n.account.plan_type || t[7] !== o
    ? ((_ =
        (n.account.plan_type === `pro` || n.account.plan_type === `prolite`) &&
        tt(o, `2238071649`)),
      (t[6] = n.account.plan_type),
      (t[7] = o),
      (t[8] = _))
    : (_ = t[8]);
  let v = _,
    y;
  t[9] !== p || t[10] !== o
    ? ((y =
        p !== `external_manage` &&
        p !== `renew` &&
        Ve(o, `1450647191`).get(`manage_plan_cta_copy_variant`, `control`) === `compare_plans`),
      (t[9] = p),
      (t[10] = o),
      (t[11] = y))
    : (y = t[11]);
  let b = y,
    x;
  t[12] === r ? (x = t[13]) : ((x = zt(r)), (t[12] = r), (t[13] = x));
  let S;
  t[14] === n
    ? (S = t[15])
    : ((S = rn(n) || (n.account.plan_type !== `free` && n.entitlement.discount != null)),
      (t[14] = n),
      (t[15] = S));
  let w;
  t[16] !== x || t[17] !== S
    ? ((w = { ...x, staleTime: 0, enabled: S }), (t[16] = x), (t[17] = S), (t[18] = w))
    : (w = t[18]);
  let { data: T } = oe(w),
    E;
  t[19] === o
    ? (E = t[20])
    : ((E = (e) => Ve(o, `3768341700`).get(e, !1)), (t[19] = o), (t[20] = E));
  let ee;
  t[21] !== r || t[22] !== T || t[23] !== E
    ? ((ee = jt(r, T, E)), (t[21] = r), (t[22] = T), (t[23] = E), (t[24] = ee))
    : (ee = t[24]);
  let { data: D } = oe(ee),
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    R,
    re,
    z,
    ie,
    B,
    ae;
  if (
    t[25] !== n ||
    t[26] !== r ||
    t[27] !== c ||
    t[28] !== g ||
    t[29] !== D ||
    t[30] !== i ||
    t[31] !== v ||
    t[32] !== o ||
    t[33] !== T ||
    t[34] !== d
  ) {
    ae = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      I = en(n, T, D);
      let e =
        I != null &&
        (I.isAcquisitionCandidate || I.isRetentionCandidate) &&
        Ve(o, `2160290604`).get(`is_yearly_plus_existing_user_subscription_enabled`, !1);
      ((M = I?.isAcquisitionCandidate === !0 && e), (N = I?.isRetentionCandidate === !0 && e));
      let a = I != null && (I.currentCadence === `yearly` || I.scheduledCadence === `yearly` || M);
      if (
        ((F =
          I != null &&
          a &&
          ((I.currentCadence === `monthly` && I.scheduledCadence === `yearly`) ||
            (I.currentCadence === `yearly` && I.scheduledCadence == null) ||
            M ||
            N)),
        d == null)
      ) {
        ae = null;
        break bb0;
      }
      if (
        ((P = (e) => {
          I != null &&
            (tn(i, { accountId: r, state: I, entryPoint: e }), l({ state: I, entryPoint: e }));
        }),
        (j = null),
        c === `platform` && g != null)
      ) {
        let e;
        t[50] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = () => l(null)), (t[50] = e))
          : (e = t[50]);
        let r;
        (t[51] !== n || t[52] !== g || t[53] !== v
          ? ((r = (0, Q.jsx)(Ar, {
              account: n,
              managementSource: g,
              showProLevels: v,
              onClose: e,
            })),
            (t[51] = n),
            (t[52] = g),
            (t[53] = v),
            (t[54] = r))
          : (r = t[54]),
          (j = r));
      } else if (c === `renewal`) {
        let e;
        t[55] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = () => l(null)), (t[55] = e))
          : (e = t[55]);
        let i;
        (t[56] !== n || t[57] !== r || t[58] !== v
          ? ((i = (0, Q.jsx)(jr, { account: n, accountId: r, showProLevels: v, onClose: e })),
            (t[56] = n),
            (t[57] = r),
            (t[58] = v),
            (t[59] = i))
          : (i = t[59]),
          (j = i));
      } else if (c === `upgrade`) {
        let e;
        t[60] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = () => l(null)), (t[60] = e))
          : (e = t[60]);
        let n;
        (t[61] === d.pricePlan
          ? (n = t[62])
          : ((n = (0, Q.jsx)(Ct, {
              currentPlan: d.pricePlan,
              defaultTab: `personal`,
              source: `consumer_billing_settings_plan_row`,
              onClose: e,
            })),
            (t[61] = d.pricePlan),
            (t[62] = n)),
          (j = n));
      } else if (typeof c == `object` && c) {
        let e;
        t[63] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = () => l(null)), (t[63] = e))
          : (e = t[63]);
        let n;
        (t[64] !== r || t[65] !== c.entryPoint || t[66] !== c.state
          ? ((n = (0, Q.jsx)(Mr, {
              accountId: r,
              state: c.state,
              entryPoint: c.entryPoint,
              onClose: e,
            })),
            (t[64] = r),
            (t[65] = c.entryPoint),
            (t[66] = c.state),
            (t[67] = n))
          : (n = t[67]),
          (j = n));
      }
      ((A = de), (k = ot));
      let s;
      t[68] !== v || t[69] !== d.pricePlan
        ? ((s = (0, Q.jsx)(cn, { plan: d.pricePlan, showProLevels: v })),
          (t[68] = v),
          (t[69] = d.pricePlan),
          (t[70] = s))
        : (s = t[70]);
      let u =
        a && I != null
          ? (0, Q.jsx)(Ne, {
              variant: `outline`,
              children: (0, Q.jsx)(h, {
                id: `settings.consumerBilling.cadenceBadge`,
                defaultMessage: `{period, select, yearly {Annual} other {Monthly}}`,
                description: `Current payment frequency beside the Plus plan title, shown only when annual billing presentation is eligible. period is the current subscription cadence.`,
                values: { period: I.currentCadence },
              }),
            })
          : null;
      (t[71] !== s || t[72] !== u
        ? ((B = (0, Q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [s, u] })),
          (t[71] = s),
          (t[72] = u),
          (t[73] = B))
        : (B = t[73]),
        (O = on),
        (R = n),
        (re = v),
        t[74] !== n || t[75] !== D || t[76] !== T
          ? ((z = Rt(n, T, D)), (t[74] = n), (t[75] = D), (t[76] = T), (t[77] = z))
          : (z = t[77]),
        (ie =
          a && I?.scheduledCadence != null
            ? { period: I.scheduledCadence, date: I.renewalDate.toISOString() }
            : void 0));
    }
    ((t[25] = n),
      (t[26] = r),
      (t[27] = c),
      (t[28] = g),
      (t[29] = D),
      (t[30] = i),
      (t[31] = v),
      (t[32] = o),
      (t[33] = T),
      (t[34] = d),
      (t[35] = O),
      (t[36] = k),
      (t[37] = A),
      (t[38] = j),
      (t[39] = M),
      (t[40] = N),
      (t[41] = P),
      (t[42] = F),
      (t[43] = I),
      (t[44] = R),
      (t[45] = re),
      (t[46] = z),
      (t[47] = ie),
      (t[48] = B),
      (t[49] = ae));
  } else
    ((O = t[35]),
      (k = t[36]),
      (A = t[37]),
      (j = t[38]),
      (M = t[39]),
      (N = t[40]),
      (P = t[41]),
      (F = t[42]),
      (I = t[43]),
      (R = t[44]),
      (re = t[45]),
      (z = t[46]),
      (ie = t[47]),
      (B = t[48]),
      (ae = t[49]));
  if (ae !== Symbol.for(`react.early_return_sentinel`)) return ae;
  let V;
  t[78] !== O || t[79] !== R || t[80] !== re || t[81] !== z || t[82] !== ie
    ? ((V = (0, Q.jsx)(O, {
        account: R,
        showProLevels: re,
        renewalPrice: z,
        scheduledCadence: ie,
      })),
      (t[78] = O),
      (t[79] = R),
      (t[80] = re),
      (t[81] = z),
      (t[82] = ie),
      (t[83] = V))
    : (V = t[83]);
  let H;
  t[84] !== p || t[85] !== g || t[86] !== i
    ? ((H = () => {
        p === `external_manage` && g != null
          ? (g !== `partner_managed` &&
              un(
                i,
                ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_MOBILE_MANAGE_CLICKED,
                g === `app_store`
                  ? K.CHATGPT_WEB_BILLING_SETTINGS_MOBILE_STORE_APP_STORE
                  : K.CHATGPT_WEB_BILLING_SETTINGS_MOBILE_STORE_GOOGLE_PLAY_STORE,
              ),
            l(`platform`))
          : p === `renew`
            ? (un(i, ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_RENEW_PLAN_CLICKED), l(`renewal`))
            : (un(i, ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_CHANGE_PLAN_CLICKED),
              l(`upgrade`));
      }),
      (t[84] = p),
      (t[85] = g),
      (t[86] = i),
      (t[87] = H))
    : (H = t[87]);
  let se = d.pricePlan,
    U = String(b),
    W;
  t[88] !== p || t[89] !== d.pricePlan || t[90] !== U
    ? ((W = (0, Q.jsx)(h, {
        id: `settings.consumerBilling.planAction`,
        defaultMessage: `{action, select, external_manage {Manage} renew {Renew {plan, select, go {Go} plus {Plus} other {Pro}} Plan} upgrade {{compare, select, true {Compare plans} other {Upgrade}}} change {{compare, select, true {Compare plans} other {Change plan}}} other {{compare, select, true {Compare plans} other {View plans}}}}`,
        description: `Primary action beside the current personal Billing plan. action chooses external management, renewal, upgrade, change, or view. plan names the renewal's current plan. compare selects the original comparison-copy experiment, only for upgrade/change/view actions.`,
        values: { action: p, plan: se, compare: U },
      })),
      (t[88] = p),
      (t[89] = d.pricePlan),
      (t[90] = U),
      (t[91] = W))
    : (W = t[91]);
  let ce;
  t[92] !== H || t[93] !== W
    ? ((ce = (0, Q.jsx)(Ke, {
        color: `secondary`,
        size: `toolbar`,
        type: `button`,
        onClick: H,
        children: W,
      })),
      (t[92] = H),
      (t[93] = W),
      (t[94] = ce))
    : (ce = t[94]);
  let G;
  t[95] !== a || t[96] !== P || t[97] !== F
    ? ((G = F
        ? (0, Q.jsx)(te, {
            align: `end`,
            triggerButton: (0, Q.jsx)(Ke, {
              color: `secondary`,
              size: `inputIcon`,
              type: `button`,
              "aria-label": a.formatMessage({
                id: `settings.consumerBilling.cadenceActionsLabel`,
                defaultMessage: `Billing schedule options`,
                description: `Accessible label for the plan actions menu that contains the Plus Monthly/Annual billing schedule option.`,
              }),
              children: (0, Q.jsx)(ne, {}),
            }),
            children: (0, Q.jsx)(C.Item, {
              onClick: () => P(`manage_billing_schedule`),
              children: (0, Q.jsx)(h, {
                id: `settings.consumerBilling.manageCadence`,
                defaultMessage: `Manage billing schedule`,
                description: `Opens the Plus billing-frequency selector for changing Monthly or Annual billing at the next renewal.`,
              }),
            }),
          })
        : null),
      (t[95] = a),
      (t[96] = P),
      (t[97] = F),
      (t[98] = G))
    : (G = t[98]);
  let le;
  t[99] !== ce || t[100] !== G
    ? ((le = (0, Q.jsxs)(Q.Fragment, { children: [ce, G] })),
      (t[99] = ce),
      (t[100] = G),
      (t[101] = le))
    : (le = t[101]);
  let fe;
  t[102] !== k || t[103] !== B || t[104] !== V || t[105] !== le
    ? ((fe = (0, Q.jsx)(k, { label: B, description: V, control: le })),
      (t[102] = k),
      (t[103] = B),
      (t[104] = V),
      (t[105] = le),
      (t[106] = fe))
    : (fe = t[106]);
  let pe;
  t[107] === I
    ? (pe = t[108])
    : ((pe =
        I?.currentCadence === `yearly` && I.scheduledCadence == null && I.annualSavingsAmount > 0
          ? (0, Q.jsx)(Dr, { state: I })
          : null),
      (t[107] = I),
      (t[108] = pe));
  let q;
  t[109] !== M || t[110] !== P || t[111] !== I
    ? ((q =
        I != null && M
          ? (0, Q.jsx)(Dr, { state: I, offer: `annual_offer`, onOpen: () => P(`annual_offer`) })
          : null),
      (t[109] = M),
      (t[110] = P),
      (t[111] = I),
      (t[112] = q))
    : (q = t[112]);
  let me;
  t[113] !== N || t[114] !== P || t[115] !== I
    ? ((me =
        I != null && N
          ? (0, Q.jsx)(Dr, { state: I, offer: `keep_saving`, onOpen: () => P(`keep_saving`) })
          : null),
      (t[113] = N),
      (t[114] = P),
      (t[115] = I),
      (t[116] = me))
    : (me = t[116]);
  let he;
  t[117] !== A || t[118] !== fe || t[119] !== pe || t[120] !== q || t[121] !== me
    ? ((he = (0, Q.jsxs)(A, { children: [fe, pe, q, me] })),
      (t[117] = A),
      (t[118] = fe),
      (t[119] = pe),
      (t[120] = q),
      (t[121] = me),
      (t[122] = he))
    : (he = t[122]);
  let ge;
  t[123] === j
    ? (ge = t[124])
    : ((ge = (0, Q.jsx)(kr.Suspense, { fallback: null, children: j })),
      (t[123] = j),
      (t[124] = ge));
  let _e;
  return (
    t[125] !== he || t[126] !== ge
      ? ((_e = (0, Q.jsxs)(Q.Fragment, { children: [he, ge] })),
        (t[125] = he),
        (t[126] = ge),
        (t[127] = _e))
      : (_e = t[127]),
    _e
  );
}
function Er(e) {
  let t = (0, Or.c)(22),
    { account: n, onCancelSubscriptionClick: r } = e,
    i = s(Ce),
    a = gt(),
    [o, c] = (0, kr.useState)(!1),
    l;
  t[0] === n ? (l = t[1]) : ((l = Zt(n)), (t[0] = n), (t[1] = l));
  let u = l,
    d;
  t[2] !== n.account.plan_type || t[3] !== a
    ? ((d =
        (n.account.plan_type === `pro` || n.account.plan_type === `prolite`) &&
        tt(a, `2238071649`)),
      (t[2] = n.account.plan_type),
      (t[3] = a),
      (t[4] = d))
    : (d = t[4]);
  let f = d;
  if (!Cr(n)) return null;
  let p, m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(h, {
        id: `settings.consumerBilling.cancelPlanTitle`,
        defaultMessage: `Cancel plan`,
        description: `Title of the final section of personal Billing settings, for canceling the current plan.`,
      })),
      (m = (0, Q.jsx)(h, {
        id: `settings.consumerBilling.cancelPlanDescription`,
        defaultMessage: `If you cancel, you'll keep full access to your plan features until the end of your billing period`,
        description: `Description beneath Cancel plan in personal Billing settings. The cancellation workflow separately presents any applicable immediate-cancellation or promotional terms.`,
      })),
      (t[5] = p),
      (t[6] = m))
    : ((p = t[5]), (m = t[6]));
  let g;
  t[7] !== u || t[8] !== r || t[9] !== i
    ? ((g = () => {
        (un(i, ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_CANCEL_SUBSCRIPTION_CLICKED),
          u == null ? r() : c(!0));
      }),
      (t[7] = u),
      (t[8] = r),
      (t[9] = i),
      (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(h, {
        id: `settings.consumerBilling.cancelPlanButton`,
        defaultMessage: `Cancel`,
        description: `Starts the current plan's cancellation workflow from Billing settings; it does not cancel without confirmation.`,
      })),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] === g
    ? (v = t[13])
    : ((v = (0, Q.jsx)(de, {
        children: (0, Q.jsx)(ot, {
          label: p,
          description: m,
          control: (0, Q.jsx)(Ke, {
            color: `danger`,
            size: `toolbar`,
            type: `button`,
            onClick: g,
            children: _,
          }),
        }),
      })),
      (t[12] = g),
      (t[13] = v));
  let y;
  t[14] !== n || t[15] !== o || t[16] !== u || t[17] !== f
    ? ((y =
        o && u != null
          ? (0, Q.jsx)(kr.Suspense, {
              fallback: null,
              children: (0, Q.jsx)(Ar, {
                account: n,
                managementSource: u,
                showProLevels: f,
                onClose: () => c(!1),
              }),
            })
          : null),
      (t[14] = n),
      (t[15] = o),
      (t[16] = u),
      (t[17] = f),
      (t[18] = y))
    : (y = t[18]);
  let b;
  return (
    t[19] !== v || t[20] !== y
      ? ((b = (0, Q.jsxs)(Q.Fragment, { children: [v, y] })), (t[19] = v), (t[20] = y), (t[21] = b))
      : (b = t[21]),
    b
  );
}
function Dr(e) {
  let t = (0, Or.c)(13),
    { state: n, offer: r, onOpen: i } = e,
    a = L(),
    o = r ?? `current`,
    s;
  t[0] !== a || t[1] !== n.annualSavingsAmount || t[2] !== n.billingCurrency
    ? ((s = a.formatNumber(Math.round(n.annualSavingsAmount), {
        style: `currency`,
        currency: n.billingCurrency,
        currencyDisplay: `narrowSymbol`,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })),
      (t[0] = a),
      (t[1] = n.annualSavingsAmount),
      (t[2] = n.billingCurrency),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== o || t[5] !== s
    ? ((c = (0, Q.jsx)(h, {
        id: `settings.consumerBilling.annualSavings`,
        defaultMessage: `{offer, select, annual_offer {Save {amount}/year with annual billing} other {Annual billing saves you {amount}/year}}`,
        description: `Annual Plus savings in Billing settings. offer distinguishes an invitation to switch from the savings for existing annual subscribers. amount is the verified localized whole-currency annual savings compared with twelve monthly payments.`,
        values: { offer: o, amount: s },
      })),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] !== r || t[8] !== i
    ? ((l =
        r == null
          ? null
          : (0, Q.jsx)(Ke, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              onClick: i,
              children: (0, Q.jsx)(h, {
                id: `settings.consumerBilling.annualOfferAction`,
                defaultMessage: `{offer, select, keep_saving {Keep saving} other {View offer}}`,
                description: `Opens annual Plus billing confirmation. Keep saving removes a pending switch to Monthly; View offer reviews a new switch to Annual.`,
                values: { offer: r },
              }),
            })),
      (t[7] = r),
      (t[8] = i),
      (t[9] = l))
    : (l = t[9]);
  let u;
  return (
    t[10] !== c || t[11] !== l
      ? ((u = (0, Q.jsx)(ot, { label: c, control: l })), (t[10] = c), (t[11] = l), (t[12] = u))
      : (u = t[12]),
    u
  );
}
var Or,
  kr,
  Q,
  Ar,
  jr,
  Mr,
  Nr = e(() => {
    ((Or = Je()),
      lt(),
      pt(),
      I(),
      (kr = t(u(), 1)),
      U(),
      be(),
      c(),
      _e(),
      q(),
      Et(),
      wt(),
      rt(),
      he(),
      x(),
      we(),
      Qt(),
      dn(),
      nn(),
      an(),
      Ft(),
      wr(),
      sn(),
      (Q = Be()),
      xe(),
      (Ar = (0, kr.lazy)(async () => ({
        default: (
          await Ie(
            async () => {
              let { SubscriptionPlatformDialog: e } = await import(
                `./platform-dialog-e648bb41ce12.js`
              );
              return { SubscriptionPlatformDialog: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4]),
            import.meta.url,
          )
        ).SubscriptionPlatformDialog,
      }))),
      (jr = (0, kr.lazy)(async () => ({
        default: (
          await Ie(
            async () => {
              let { SubscriptionRenewalDialog: e } = await import(
                `./renewal-dialog-af4be22cc044.js`
              );
              return { SubscriptionRenewalDialog: e };
            },
            __vite__mapDeps([5, 1, 2, 3, 6, 7, 8, 9, 4, 10]),
            import.meta.url,
          )
        ).SubscriptionRenewalDialog,
      }))),
      (Mr = (0, kr.lazy)(async () => ({
        default: (
          await Ie(
            async () => {
              let { BillingCadenceDialog: e } = await import(`./cadence-dialog-857e209dc1e9.js`);
              return { BillingCadenceDialog: e };
            },
            __vite__mapDeps([11, 1, 2, 3, 8, 9, 6, 12, 13]),
            import.meta.url,
          )
        ).BillingCadenceDialog,
      }))));
  });
function Pr(e) {
  let t = (0, zr.c)(22),
    { transactions: n, onViewInvoice: r } = e,
    i = L(),
    { client: a } = Xe(),
    o;
  t[0] !== a || t[1] !== n
    ? ((o = n.some(Fr) && a.checkGate(`2238071649`)), (t[0] = a), (t[1] = n), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] === i
    ? (c = t[4])
    : ((c = i.formatMessage(Br.transactionHistoryTitle)), (t[3] = i), (t[4] = c));
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(`th`, {
        scope: `col`,
        children: (0, $.jsx)(h, { ...Br.transactionTypeHeader }),
      })),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(`th`, {
        scope: `col`,
        children: (0, $.jsx)(h, { ...Br.transactionDateHeader }),
      })),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(`th`, {
        scope: `col`,
        children: (0, $.jsx)(h, { ...Br.transactionStatusHeader }),
      })),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(`th`, {
        scope: `col`,
        children: (0, $.jsx)(h, { ...Br.transactionAmountHeader }),
      })),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(`thead`, {
        className: `sr-only`,
        children: (0, $.jsxs)(`tr`, {
          children: [
            l,
            u,
            d,
            f,
            (0, $.jsx)(`th`, {
              scope: `col`,
              children: (0, $.jsx)(h, {
                id: `settings.consumerBilling.transactionActions`,
                defaultMessage: `Actions`,
                description: `Accessible column heading for invoice links in the personal account's transaction-history table`,
              }),
            }),
          ],
        }),
      })),
      (t[9] = p))
    : (p = t[9]);
  let m;
  if (t[10] !== r || t[11] !== s || t[12] !== n) {
    let e;
    (t[14] !== r || t[15] !== s
      ? ((e = (e) =>
          (0, $.jsx)(Ir, { transaction: e, showProTierNames: s, onViewInvoice: r }, e.type + e.id)),
        (t[14] = r),
        (t[15] = s),
        (t[16] = e))
      : (e = t[16]),
      (m = n.map(e)),
      (t[10] = r),
      (t[11] = s),
      (t[12] = n),
      (t[13] = m));
  } else m = t[13];
  let g;
  t[17] === m
    ? (g = t[18])
    : ((g = (0, $.jsx)(`tbody`, { children: m })), (t[17] = m), (t[18] = g));
  let _;
  return (
    t[19] !== c || t[20] !== g
      ? ((_ = (0, $.jsx)(`div`, {
          className: `overflow-x-auto`,
          children: (0, $.jsxs)(`table`, {
            "aria-label": c,
            className: `w-full border-collapse text-start text-sm`,
            children: [p, g],
          }),
        })),
        (t[19] = c),
        (t[20] = g),
        (t[21] = _))
      : (_ = t[21]),
    _
  );
}
function Fr(e) {
  return (
    e.type === `invoice` &&
    e.product?.type === `subscription` &&
    e.product.plan.startsWith(`chatgptpro`)
  );
}
function Ir(e) {
  let t = (0, zr.c)(43),
    { transaction: n, showProTierNames: r, onViewInvoice: i } = e,
    a = L(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = {
        added: Br.transactionStatusCredit,
        removed: Br.transactionStatusDebit,
        paid: Br.invoiceStatusPaid,
        due: Br.invoiceStatusDue,
        void: Br.invoiceStatusVoid,
        uncollectible: Br.invoiceStatusUncollectible,
        draft: Br.invoiceStatusDraft,
      }),
      (t[0] = o))
    : (o = t[0]);
  let s = o,
    c = `default`;
  n.status === `added`
    ? (c = `success`)
    : n.status === `due`
      ? (c = `warning`)
      : n.status === `uncollectible` && (c = `danger`);
  let l =
      n.type === `invoice` && n.product?.type === `subscription` ? n.product.seat_quantities : null,
    u;
  t[1] !== r || t[2] !== n
    ? ((u = (0, $.jsx)(`span`, {
        className: `truncate`,
        children: (0, $.jsx)(Rr, { transaction: n, showProTierNames: r }),
      })),
      (t[1] = r),
      (t[2] = n),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] !== a || t[5] !== n.type
    ? ((d =
        n.type === `wallet`
          ? (0, $.jsx)(O, {
              cloneCustomTrigger: !0,
              tooltipContent: (0, $.jsx)(h, { ...Br.walletAdjustmentTooltip }),
              children: (0, $.jsx)(Ke, {
                "aria-label": a.formatMessage(Br.walletAdjustmentTooltipTrigger),
                color: `ghost`,
                size: `iconCircleSm`,
                children: (0, $.jsx)(ft, {}),
              }),
            })
          : null),
      (t[4] = a),
      (t[5] = n.type),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== u || t[8] !== d
    ? ((f = (0, $.jsxs)(`div`, { className: `flex min-w-0 items-center gap-1`, children: [u, d] })),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === l
    ? (p = t[11])
    : ((p =
        l == null
          ? null
          : (0, $.jsx)(`span`, {
              className: `block truncate text-xs text-secondary`,
              children: (0, $.jsx)(Se, { type: `unit`, style: `short`, value: l.map(Lr) }),
            })),
      (t[10] = l),
      (t[11] = p));
  let m;
  t[12] !== f || t[13] !== p
    ? ((m = (0, $.jsxs)(`td`, {
        className: `w-1/3 max-w-0 px-3 py-2 text-secondary`,
        children: [f, p],
      })),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let g;
  t[15] === n.created_at
    ? (g = t[16])
    : ((g = (0, $.jsx)(`td`, {
        className: `px-3 py-2 whitespace-nowrap text-secondary`,
        children: (0, $.jsx)(Le, {
          value: n.created_at,
          month: `numeric`,
          day: `numeric`,
          year: `numeric`,
        }),
      })),
      (t[15] = n.created_at),
      (t[16] = g));
  let _ = s[n.status],
    v;
  t[17] === _ ? (v = t[18]) : ((v = (0, $.jsx)(h, { ..._ })), (t[17] = _), (t[18] = v));
  let y;
  t[19] !== c || t[20] !== v
    ? ((y = (0, $.jsx)(`td`, {
        className: `px-3 py-2 text-center`,
        children: (0, $.jsx)(Ne, { variant: c, children: v }),
      })),
      (t[19] = c),
      (t[20] = v),
      (t[21] = y))
    : (y = t[21]);
  let b =
      n.status === `added`
        ? `px-3 py-2 text-end whitespace-nowrap text-chart-green tabular-nums select-text`
        : `px-3 py-2 text-end whitespace-nowrap text-secondary tabular-nums select-text`,
    x;
  t[22] !== a || t[23] !== n.amount || t[24] !== n.currency
    ? ((x = Kt(a, n.amount, n.currency)),
      (t[22] = a),
      (t[23] = n.amount),
      (t[24] = n.currency),
      (t[25] = x))
    : (x = t[25]);
  let S;
  t[26] !== b || t[27] !== x
    ? ((S = (0, $.jsx)(`td`, { className: b, children: x })), (t[26] = b), (t[27] = x), (t[28] = S))
    : (S = t[28]);
  let C;
  t[29] !== a ||
  t[30] !== i ||
  t[31] !== n.created_at ||
  t[32] !== n.invoice_url ||
  t[33] !== n.type
    ? ((C =
        n.type === `invoice` && n.invoice_url
          ? (0, $.jsx)(Ge, {
              appearance: `secondary`,
              "aria-label": a.formatMessage(Br.openInvoiceLinkAriaLabel, {
                createdDate: new Date(n.created_at),
              }),
              href: n.invoice_url,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              onClick: i,
              children: (0, $.jsx)(Fe, {}),
            })
          : null),
      (t[29] = a),
      (t[30] = i),
      (t[31] = n.created_at),
      (t[32] = n.invoice_url),
      (t[33] = n.type),
      (t[34] = C))
    : (C = t[34]);
  let w;
  t[35] === C
    ? (w = t[36])
    : ((w = (0, $.jsx)(`td`, { className: `px-3 py-2 text-end`, children: C })),
      (t[35] = C),
      (t[36] = w));
  let T;
  return (
    t[37] !== y || t[38] !== S || t[39] !== w || t[40] !== m || t[41] !== g
      ? ((T = (0, $.jsxs)(`tr`, {
          className: `border-b border-default last:border-b-0`,
          children: [m, g, y, S, w],
        })),
        (t[37] = y),
        (t[38] = S),
        (t[39] = w),
        (t[40] = m),
        (t[41] = g),
        (t[42] = T))
      : (T = t[42]),
    T
  );
}
function Lr(e) {
  return (0, $.jsx)(
    h,
    {
      ...(e.seat_type === "default" ? Br.standardSeatQuantityDelta : Br.premiumSeatQuantityDelta),
      values: { quantityDelta: (0, $.jsx)(yt, { value: e.quantity_delta, signDisplay: `always` }) },
    },
    e.seat_type,
  );
}
function Rr(e) {
  let t = (0, zr.c)(14),
    { transaction: n, showProTierNames: r } = e;
  if (n.type === `gift_card`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(h, { ...Br.giftCardTransactionType })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.type === `wallet`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(h, { ...Br.walletAdjustmentTransactionType })), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  bb0: switch (n.product?.type) {
    case `credits`: {
      let e = n.product.is_gifted ? Br.giftedCreditsTransactionType : Br.creditsTransactionType,
        r;
      return (t[2] === e ? (r = t[3]) : ((r = (0, $.jsx)(h, { ...e })), (t[2] = e), (t[3] = r)), r);
    }
    case `credits_top_up`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(h, { ...Br.creditsAutoReloadTransactionType })), (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `subscription`:
      if (n.product.is_seat_purchase) {
        let e;
        return (
          t[5] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(h, { ...Br.businessSeatsTransactionType })), (t[5] = e))
            : (e = t[5]),
          e
        );
      }
      if (
        [`chatgptteamplan`, `self_serve_business_prolite`, `chatgptbusiness_usage_based`].includes(
          n.product.plan,
        )
      ) {
        let e;
        return (
          t[6] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(h, { ...Br.businessPlanTransactionType })), (t[6] = e))
            : (e = t[6]),
          e
        );
      }
      if (
        [
          `chatgptgoplan`,
          `chatgptgo_partner_managed`,
          `chatgptgofreeplan_with_expiration`,
        ].includes(n.product.plan)
      ) {
        let e;
        return (
          t[7] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(h, { ...Br.chatGptGoTransactionType })), (t[7] = e))
            : (e = t[7]),
          e
        );
      }
      if (
        [
          `chatgptplusplan`,
          `chatgptplus_partner_managed`,
          `chatgptplusfreeplan`,
          `chatgptplusfreeplan_with_expiration`,
          `chatgptplus_sponsored_with_expiration`,
        ].includes(n.product.plan)
      ) {
        let e;
        return (
          t[8] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(h, { ...Br.chatGptPlusTransactionType })), (t[8] = e))
            : (e = t[8]),
          e
        );
      }
      if (
        [
          `chatgptpro`,
          `chatgptproplan`,
          `chatgptpro_partner_managed`,
          `chatgptprofreeplan`,
          `chatgptprofreeplan_with_expiration`,
        ].includes(n.product.plan)
      ) {
        let e = r ? Br.chatGptPro20xTransactionType : Br.chatGptProTransactionType,
          n;
        return (
          t[9] === e ? (n = t[10]) : ((n = (0, $.jsx)(h, { ...e })), (t[9] = e), (t[10] = n)), n
        );
      }
      if (
        [
          `chatgptprolite`,
          `chatgptprolite_partner_managed`,
          `chatgptprolitefreeplan_with_expiration`,
        ].includes(n.product.plan)
      ) {
        let e = r ? Br.chatGptPro5xTransactionType : Br.chatGptProTransactionType,
          n;
        return (
          t[11] === e ? (n = t[12]) : ((n = (0, $.jsx)(h, { ...e })), (t[11] = e), (t[12] = n)), n
        );
      }
      break bb0;
    case void 0:
  }
  let i;
  return (
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(h, { ...Br.invoiceTransactionType })), (t[13] = i))
      : (i = t[13]),
    i
  );
}
var zr,
  $,
  Br,
  Vr = e(() => {
    ((zr = Je()),
      U(),
      be(),
      c(),
      Ue(),
      q(),
      E(),
      we(),
      Wt(),
      ($ = Be()),
      (Br = bt({
        transactionHistoryTitle: {
          id: `settingsModal.transactionHistory.title`,
          defaultMessage: `Transaction history`,
          description: `Heading for a personal account's recent billing transactions and the title of its complete transaction-history subpage`,
        },
        transactionTypeHeader: {
          id: `settingsModal.transactionHistory.typeHeader`,
          defaultMessage: `Type`,
          description: `Short optional column heading for the product, gift-card redemption, or Wallet adjustment type in a personal ChatGPT account's transaction-history table in Settings > Billing.`,
        },
        transactionDateHeader: {
          id: `settingsModal.transactionHistory.dateHeader`,
          defaultMessage: `Date`,
          description: `Short optional column heading for the localized transaction creation date in a personal ChatGPT account's transaction-history table in Settings > Billing.`,
        },
        transactionStatusHeader: {
          id: `settingsModal.transactionHistory.statusHeader`,
          defaultMessage: `Status`,
          description: `Short optional column heading for invoice-payment, gift-card-redemption, and Wallet-adjustment status badges in a personal ChatGPT account's transaction-history table in Settings > Billing.`,
        },
        transactionAmountHeader: {
          id: `settingsModal.transactionHistory.amountHeader`,
          defaultMessage: `Amount`,
          description: `Short optional column heading for a localized currency amount in a personal ChatGPT account's transaction-history table in Settings > Billing.`,
        },
        giftCardTransactionType: {
          id: `settingsModal.transactionHistory.product.giftCard`,
          defaultMessage: `Gift card`,
          description: `Short product-type label for a successfully redeemed gift card in a personal ChatGPT account's transaction-history table in Settings > Billing.`,
        },
        walletAdjustmentTransactionType: {
          id: `settingsModal.transactionHistory.product.walletAdjustment`,
          defaultMessage: `Adjustment`,
          description: `Short transaction-type label for funds added to or removed from a personal ChatGPT account's Wallet. Appears in the transaction-history table in Settings > Billing; Wallet adjustments have no linked invoice.`,
        },
        walletAdjustmentTooltip: {
          id: `settingsModal.transactionHistory.product.walletAdjustment.tooltip`,
          defaultMessage: `A change to your account balance, such as a refund, credit, or billing correction`,
          description: `Explanatory tooltip shown when a personal ChatGPT account holder or Business workspace owner hovers over or focuses the information button beside an Adjustment row in Settings > Billing transaction history. It explains that the Wallet balance changed because of a refund, credit, billing correction, or similar adjustment. Use one concise plain-text sentence without placeholders.`,
        },
        walletAdjustmentTooltipTrigger: {
          id: `settingsModal.transactionHistory.product.walletAdjustment.tooltipTrigger`,
          defaultMessage: `More information about this adjustment`,
          description: `Accessible label for the keyboard-focusable information button beside an Adjustment row in personal or Business workspace Settings > Billing transaction history. Focusing or hovering over the button reveals an explanation of Wallet balance adjustments. Use a concise descriptive phrase without placeholders.`,
        },
        creditsTransactionType: {
          id: `settingsModal.transactionHistory.product.credits`,
          defaultMessage: `Credits`,
          description: `Short product-type label for a one-time, manually initiated ChatGPT credit purchase in a personal account's transaction-history table in Settings > Billing. It must remain distinguishable from an automatic credits top-up.`,
        },
        giftedCreditsTransactionType: {
          id: `settingsModal.transactionHistory.product.giftedCredits`,
          defaultMessage: `Gifted credits`,
          description: `Short product-type label in a personal account's or Business workspace's Settings > Billing transaction-history table for an invoice purchasing ChatGPT usage credits as a gift for another person. It must remain distinguishable from ordinary credit purchases, automatic credit top-ups, and gift-card redemptions. Use a concise plain-text label with no placeholders.`,
        },
        creditsAutoReloadTransactionType: {
          id: `settingsModal.transactionHistory.product.creditsAutoReload`,
          defaultMessage: `Credits auto-reload`,
          description: `Short product-type label in a personal account's or Business workspace's Settings > Billing transaction-history table for a completed automatic purchase that replenished ChatGPT usage credits. It must remain distinguishable from manually purchased credits, credits purchased as a gift for another person, and gift-card redemptions. Use a concise plain-text label with no placeholders.`,
        },
        businessPlanTransactionType: {
          id: `settingsModal.transactionHistory.product.businessPlan`,
          defaultMessage: `Business plan`,
          description: `Transaction name for a ChatGPT Business workspace subscription invoice in the workspace Billing transaction-history table. This label excludes invoices for additional workspace seats.`,
        },
        businessSeatsTransactionType: {
          id: `settingsModal.transactionHistory.product.additionalBusinessSeats`,
          defaultMessage: `Seat change`,
          description: `Short transaction name in a ChatGPT Business workspace's Billing transaction-history table for an invoice that changes paid-seat quantities. The row can show positive or negative Standard and Premium seat deltas, but is distinct from the recurring Business plan invoice. No placeholders.`,
        },
        chatGptGoTransactionType: {
          id: `settingsModal.transactionHistory.product.chatGptGo`,
          defaultMessage: `ChatGPT Go`,
          description: `Product-type label for an invoice issued for the ChatGPT Go subscription in a personal account's transaction-history table in Settings > Billing. ChatGPT Go is the branded subscription name.`,
        },
        chatGptPlusTransactionType: {
          id: `settingsModal.transactionHistory.product.chatGptPlus`,
          defaultMessage: `ChatGPT Plus`,
          description: `Product-type label for an invoice issued for the ChatGPT Plus subscription in a personal account's transaction-history table in Settings > Billing. ChatGPT Plus is the branded subscription name.`,
        },
        chatGptProTransactionType: {
          id: `settingsModal.transactionHistory.product.chatGptPro`,
          defaultMessage: `ChatGPT Pro`,
          description: `Product-type label for an invoice issued for a ChatGPT Pro subscription in a personal account's transaction-history table in Settings > Billing. ChatGPT Pro is the branded subscription name.`,
        },
        chatGptPro20xTransactionType: {
          id: `settingsModal.transactionHistory.product.chatGptPro20x`,
          defaultMessage: `ChatGPT Pro 20x`,
          description: `Short product-type label for an invoice issued for a ChatGPT Pro 20x subscription in a personal account's transaction-history table in Settings > Billing. It identifies the higher-capacity Pro subscription and distinguishes it from the lower-capacity ChatGPT Pro 5x subscription.`,
        },
        chatGptPro5xTransactionType: {
          id: `settingsModal.transactionHistory.product.chatGptPro5x`,
          defaultMessage: `ChatGPT Pro 5x`,
          description: `Short product-type label for an invoice issued for a ChatGPT Pro 5x subscription, also called Pro Lite, in a personal account's transaction-history table in Settings > Billing. It distinguishes this subscription from the higher-capacity ChatGPT Pro plan.`,
        },
        invoiceTransactionType: {
          id: `settingsModal.transactionHistory.product.invoice`,
          defaultMessage: `Invoice`,
          description: `Short fallback product-type label in a personal ChatGPT account's transaction-history table in Settings > Billing when the backend cannot authoritatively identify the invoiced product.`,
        },
        transactionStatusCredit: {
          id: `settingsModal.transactionHistory.status.credit`,
          defaultMessage: `Credit`,
          description: `Short green status badge for a funded gift-card redemption or Wallet adjustment that increases the available balance of a personal ChatGPT account or Business workspace. It appears in the Settings > Billing transaction-history table and must remain concise enough for a single-line badge.`,
        },
        transactionStatusDebit: {
          id: `settingsModal.transactionHistory.status.debit`,
          defaultMessage: `Debit`,
          description: `Short status badge for a Wallet adjustment that decreases the available balance of a personal ChatGPT account or Business workspace. It appears in the Settings > Billing transaction-history table and must remain concise enough for a single-line badge.`,
        },
        invoiceStatusPaid: {
          id: `settingsModal.invoiceStatusPaid`,
          defaultMessage: `Paid`,
          description: `Invoice status label shown in the Billing and payments invoices list when the invoice is paid.`,
        },
        invoiceStatusDue: {
          id: `settingsModal.invoiceStatusDue`,
          defaultMessage: `Due`,
          description: `Invoice status label shown in the Billing and payments invoices list when the invoice is due.`,
        },
        invoiceStatusVoid: {
          id: `settingsModal.invoiceStatusVoid`,
          defaultMessage: `Void`,
          description: `Invoice status label shown in the Billing and payments invoices list when the invoice is void.`,
        },
        invoiceStatusUncollectible: {
          id: `settingsModal.invoiceStatusUncollectible`,
          defaultMessage: `Failed`,
          description: `Invoice status label shown in the Billing and payments invoices list when the invoice is failed.`,
        },
        invoiceStatusDraft: {
          id: `settingsModal.invoiceStatusDraft`,
          defaultMessage: `Draft`,
          description: `Invoice status label shown in the Billing and payments invoices list when the invoice is draft.`,
        },
        openInvoiceLinkAriaLabel: {
          id: `settingsModal.openInvoiceLinkAriaLabel`,
          defaultMessage: `Open invoice from {createdDate, date, long}`,
          description: `Aria label for the external-link icon button that opens a hosted invoice URL in a new tab. Placeholder {createdDate} is the invoice creation date in localized long-date format.`,
        },
        standardSeatQuantityDelta: {
          id: `settingsModal.transactionHistory.product.standardSeatQuantityDelta`,
          defaultMessage: `Standard {quantityDelta}`,
          description: `Compact signed change in Standard seats below a Seat change invoice in Billing history; quantityDelta includes its plus or minus sign`,
        },
        premiumSeatQuantityDelta: {
          id: `settingsModal.transactionHistory.product.premiumSeatQuantityDelta`,
          defaultMessage: `Premium {quantityDelta}`,
          description: `Compact signed change in Premium seats below a Seat change invoice in Billing history; quantityDelta includes its plus or minus sign`,
        },
      })));
  });
function Hr(e) {
  let t = (0, qr.c)(19),
    { accountId: n, onViewAll: r } = e,
    i = s(Ce),
    a;
  t[0] === n ? (a = t[1]) : ((a = Kr(n, 4, null)), (t[0] = n), (t[1] = a));
  let { data: o, isPending: c, isError: l } = oe(a);
  if (!c && !l && o?.transactions.length === 0) return null;
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Yr.jsx)(h, {
        id: `settingsModal.transactionHistory.title`,
        defaultMessage: `Transaction history`,
        description: `Heading for a personal account's recent billing transactions and the title of its complete transaction-history subpage`,
      })),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== o?.next_cursor || t[4] !== r || t[5] !== i
    ? ((d =
        o?.next_cursor == null
          ? null
          : (0, Yr.jsx)(Ke, {
              color: `secondary`,
              size: `toolbar`,
              onClick: () => {
                (un(i, ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_VIEW_ALL_INVOICES_CLICKED), r());
              },
              children: (0, Yr.jsx)(h, {
                id: `settingsModal.transactionHistory.viewAll`,
                defaultMessage: `View all`,
                description: `Opens the complete, paginated transaction-history subpage from the recent transactions in Billing settings`,
              }),
            })),
      (t[3] = o?.next_cursor),
      (t[4] = r),
      (t[5] = i),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === d
    ? (f = t[8])
    : ((f = (0, Yr.jsx)(ye.Header, { title: u, actions: d })), (t[7] = d), (t[8] = f));
  let p;
  t[9] === i
    ? (p = t[10])
    : ((p = () => un(i, ue.CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_VIEW_INVOICE_CLICKED)),
      (t[9] = i),
      (t[10] = p));
  let m;
  t[11] !== o || t[12] !== l || t[13] !== c || t[14] !== p
    ? ((m = (0, Yr.jsx)(ye.Content, {
        children: (0, Yr.jsx)(Gr, { data: o, isPending: c, isError: l, onViewInvoice: p }),
      })),
      (t[11] = o),
      (t[12] = l),
      (t[13] = c),
      (t[14] = p),
      (t[15] = m))
    : (m = t[15]);
  let g;
  return (
    t[16] !== f || t[17] !== m
      ? ((g = (0, Yr.jsxs)(ye, { children: [f, m] })), (t[16] = f), (t[17] = m), (t[18] = g))
      : (g = t[18]),
    g
  );
}
function Ur(e) {
  let t = (0, qr.c)(3),
    { accountId: n, onBack: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, Yr.jsx)(Wr, { accountId: n, onBack: r }, n)), (t[0] = n), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Wr(e) {
  let t = (0, qr.c)(24),
    { accountId: n, onBack: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = [null]), (t[0] = i)) : (i = t[0]);
  let [a, o] = (0, Jr.useState)(i),
    s = a[a.length - 1] ?? null,
    c;
  t[1] !== n || t[2] !== s ? ((c = Kr(n, 10, s)), (t[1] = n), (t[2] = s), (t[3] = c)) : (c = t[3]);
  let { data: l, isPending: u, isError: d, isFetching: f } = oe(c),
    p = a.length > 1,
    m = l?.next_cursor,
    g,
    _;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Yr.jsx)(ze, {})),
      (_ = (0, Yr.jsx)(h, {
        id: `settingsModal.back`,
        defaultMessage: `Back`,
        description: `Returns from transaction history to the personal account's Billing settings`,
      })),
      (t[4] = g),
      (t[5] = _))
    : ((g = t[4]), (_ = t[5]));
  let v;
  t[6] === r
    ? (v = t[7])
    : ((v = (0, Yr.jsx)(`div`, {
        children: (0, Yr.jsxs)(Ke, {
          color: `ghost`,
          size: `toolbar`,
          onClick: r,
          children: [g, _],
        }),
      })),
      (t[6] = r),
      (t[7] = v));
  let y;
  t[8] !== l || t[9] !== d || t[10] !== u
    ? ((y = (0, Yr.jsx)(Gr, { data: l, isPending: u, isError: d })),
      (t[8] = l),
      (t[9] = d),
      (t[10] = u),
      (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] !== a ||
  t[13] !== l ||
  t[14] !== p ||
  t[15] !== d ||
  t[16] !== f ||
  t[17] !== u ||
  t[18] !== m
    ? ((b =
        !u && !d && l != null && l.transactions.length > 0 && (p || m != null)
          ? (0, Yr.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, Yr.jsxs)(Ke, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: !p || f,
                  onClick: () => o(a.slice(0, -1)),
                  children: [
                    (0, Yr.jsx)(ze, {}),
                    (0, Yr.jsx)(h, {
                      id: `settingsModal.transactionHistory.pagination.previous`,
                      defaultMessage: `Previous`,
                      description: `Loads the previous page of the personal account's complete transaction history`,
                    }),
                  ],
                }),
                (0, Yr.jsxs)(Ke, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: m == null || f,
                  onClick: () => {
                    m != null && o([...a, m]);
                  },
                  children: [
                    (0, Yr.jsx)(h, {
                      id: `settingsModal.transactionHistory.pagination.next`,
                      defaultMessage: `Next`,
                      description: `Loads the next page of the personal account's complete transaction history`,
                    }),
                    (0, Yr.jsx)(Fe, {}),
                  ],
                }),
              ],
            })
          : null),
      (t[12] = a),
      (t[13] = l),
      (t[14] = p),
      (t[15] = d),
      (t[16] = f),
      (t[17] = u),
      (t[18] = m),
      (t[19] = b))
    : (b = t[19]);
  let x;
  return (
    t[20] !== v || t[21] !== y || t[22] !== b
      ? ((x = (0, Yr.jsxs)(Yr.Fragment, { children: [v, y, b] })),
        (t[20] = v),
        (t[21] = y),
        (t[22] = b),
        (t[23] = x))
      : (x = t[23]),
    x
  );
}
function Gr(e) {
  let t = (0, qr.c)(5),
    { data: n, isPending: r, isError: i, onViewInvoice: a } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Yr.jsx)(fn, {
            children: (0, Yr.jsx)(h, {
              id: `settingsModal.transactionHistory.loading`,
              defaultMessage: `Loading transactions`,
              description: `Loading status while the personal account's billing transactions are fetched`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Yr.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-warning`,
            children: (0, Yr.jsx)(h, {
              id: `settingsModal.transactionHistory.loadError`,
              defaultMessage: `Unable to load transactions. Please try again.`,
              description: `Error when billing transactions could not be fetched; the account holder can return and reopen history or refresh to try again`,
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let o;
  return (
    t[2] !== n || t[3] !== a
      ? ((o =
          n != null && n.transactions.length > 0
            ? (0, Yr.jsx)(de, {
                children: (0, Yr.jsx)(Pr, { transactions: n.transactions, onViewInvoice: a }),
              })
            : (0, Yr.jsx)(`p`, {
                className: `text-sm text-secondary`,
                children: (0, Yr.jsx)(h, {
                  id: `settingsModal.transactionHistory.empty`,
                  defaultMessage: `No transactions available`,
                  description: `Empty state on the personal account's complete transaction-history subpage`,
                }),
              })),
        (t[2] = n),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function Kr(e, t, n) {
  return Te({
    queryKey: [`consumer-billing`, e, `transactions`, t, n],
    queryFn: ({ signal: r }) =>
      v.safeGet(`/payments/transaction-history`, {
        parameters: { query: { account_id: e, limit: t, cursor: n ?? void 0 } },
        signal: r,
      }),
    staleTime: 0,
    gcTime: 0,
    retry: !1,
    refetchOnMount: `always`,
    refetchOnWindowFocus: `always`,
    refetchOnReconnect: `always`,
  });
}
var qr,
  Jr,
  Yr,
  Xr = e(() => {
    ((qr = Je()),
      pt(),
      I(),
      (Jr = t(u(), 1)),
      U(),
      c(),
      q(),
      rt(),
      ae(),
      x(),
      H(),
      dn(),
      hn(),
      Vr(),
      (Yr = Be()));
  });
function Zr(e) {
  let t = (0, $r.c)(64),
    { account: n, accountId: r } = e,
    i = s(Ce),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = new Set()), (t[0] = a)) : (a = t[0]);
  let o = (0, ei.useRef)(a),
    c = L(),
    l;
  t[1] === r ? (l = t[2]) : ((l = Lt(r)), (t[1] = r), (t[2] = l));
  let { data: u, isPending: d, isFetching: f, isError: p } = oe(l),
    { client: m } = Xe(),
    g = Oe(`225453312`),
    _;
  t[3] === m
    ? (_ = t[4])
    : ((_ = m.getContext().user?.country?.trim().toUpperCase()), (t[3] = m), (t[4] = _));
  let v = _,
    b;
  t[5] === g
    ? (b = t[6])
    : ((b = g.get(`redemption_country_restrictions_enabled`, !1)), (t[5] = g), (t[6] = b));
  let x = b,
    S;
  if (t[7] !== v || t[8] !== g || t[9] !== x) {
    let e = $e(Ye().catch(``))
      .catch([])
      .parse(g.get(`redemption_eligible_countries`, [`US`]));
    ((S = !x || (v != null && e.some((e) => e.trim().toUpperCase() === v))),
      (t[7] = v),
      (t[8] = g),
      (t[9] = x),
      (t[10] = S));
  } else S = t[10];
  let C = S,
    w = n.account.processor?.a001?.has_customer_object === !0,
    T;
  t[11] !== n.entitlement || t[12] !== u?.currency
    ? ((T = (u?.currency ?? n.entitlement.billing_currency)?.trim().toLowerCase()),
      (t[11] = n.entitlement),
      (t[12] = u?.currency),
      (t[13] = T))
    : (T = t[13]);
  let E = T,
    ee =
      (w && E === `usd`) ||
      (!w && !n.entitlement.has_active_subscription) ||
      (w && u?.balance === 0 && E == null),
    te = !x || (C && ee),
    D;
  t[14] === u
    ? (D = t[15])
    : ((D = u?.balances?.usd ?? (u?.currency?.toLowerCase() === `usd` ? u.balance : 0)),
      (t[14] = u),
      (t[15] = D));
  let O = D,
    A =
      te ||
      (u?.has_redeemed_gift_card !== !1 &&
        (O < 0 || (u?.has_redeemed_gift_card === !0 && w && E === `usd`))),
    j = O === 0 ? u?.balance : O,
    M = !f && !p && u?.balance === 0 && u.currency == null && te,
    N;
  t[16] !== r || t[17] !== v
    ? ((N = [`consumer-billing`, r, `wallet-currency`, v]), (t[16] = r), (t[17] = v), (t[18] = N))
    : (N = t[18]);
  let P;
  t[19] !== m || t[20] !== v
    ? ((P = (e) => {
        let { signal: t } = e;
        return Vt({
          country: v ?? `US`,
          signal: t,
          isPricingEnabled: (e) => m.getLayer(`3768341700`).get(e, !1),
        });
      }),
      (t[19] = m),
      (t[20] = v),
      (t[21] = P))
    : (P = t[21]);
  let F;
  t[22] !== M || t[23] !== N || t[24] !== P
    ? ((F = { queryKey: N, queryFn: P, enabled: M, staleTime: 0, retry: !1 }),
      (t[22] = M),
      (t[23] = N),
      (t[24] = P),
      (t[25] = F))
    : (F = t[25]);
  let { data: ne, isLoading: I, isError: R } = oe(F),
    re = O === 0 ? (u?.currency ?? (M ? ne?.currency_config.symbol_code : null)) : `usd`,
    z = d || f || (M && I),
    ie;
  t[26] !== re || t[27] !== p || t[28] !== M || t[29] !== R
    ? (p
        ? (ie = k.CHATGPT_WEB_CONSUMER_WALLET_BALANCE_UNAVAILABLE_REASON_BALANCE_FETCH_FAILED)
        : M && R
          ? (ie = k.CHATGPT_WEB_CONSUMER_WALLET_BALANCE_UNAVAILABLE_REASON_PRICING_FAILED)
          : (re ??
            (ie = k.CHATGPT_WEB_CONSUMER_WALLET_BALANCE_UNAVAILABLE_REASON_MISSING_CURRENCY)),
      (t[26] = re),
      (t[27] = p),
      (t[28] = M),
      (t[29] = R),
      (t[30] = ie))
    : (ie = t[30]);
  let B;
  t[31] !== r || t[32] !== p || t[33] !== z || t[34] !== ie || t[35] !== i || t[36] !== A
    ? ((B = () => {
        z ||
          (!p && !A) ||
          o.current.has(r) ||
          (i.get(nt).logProductEvent(fe, {
            result:
              ie == null
                ? y.CHATGPT_WEB_CONSUMER_WALLET_BALANCE_RESULT_READY
                : y.CHATGPT_WEB_CONSUMER_WALLET_BALANCE_RESULT_UNAVAILABLE,
            reason: ie,
          }),
          o.current.add(r));
      }),
      (t[31] = r),
      (t[32] = p),
      (t[33] = z),
      (t[34] = ie),
      (t[35] = i),
      (t[36] = A),
      (t[37] = B))
    : (B = t[37]);
  let ae;
  if (
    (t[38] !== r || t[39] !== p || t[40] !== z || t[41] !== ie || t[42] !== i || t[43] !== A
      ? ((ae = [r, p, z, ie, i, A]),
        (t[38] = r),
        (t[39] = p),
        (t[40] = z),
        (t[41] = ie),
        (t[42] = i),
        (t[43] = A),
        (t[44] = ae))
      : (ae = t[44]),
    (0, ei.useEffect)(B, ae),
    d || !A)
  )
    return null;
  let V;
  if (z) {
    let e;
    (t[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, ti.jsxs)(`div`, {
          role: `status`,
          className: `flex items-center gap-2 text-sm text-secondary`,
          children: [
            (0, ti.jsx)(We, { className: `icon-xs shrink-0 text-secondary` }),
            (0, ti.jsx)(h, {
              id: `settingsModal.walletBalance.loading`,
              defaultMessage: `Loading balance…`,
              description: `Loading status while the personal account's wallet balance or display currency is refreshed`,
            }),
          ],
        })),
        (t[45] = e))
      : (e = t[45]),
      (V = e));
  } else if (ie != null || re == null || j == null) {
    let e;
    (t[46] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, ti.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-warning`,
          children: (0, ti.jsx)(h, {
            id: `settingsModal.walletBalance.unavailable`,
            defaultMessage: `Not available`,
            description: `Replaces the wallet amount when the balance or display currency cannot be loaded`,
          }),
        })),
        (t[46] = e))
      : (e = t[46]),
      (V = e));
  } else {
    let e = u?.has_redeemed_gift_card === !0 ? -j : Math.max(0, -j),
      n;
    t[47] !== re || t[48] !== c || t[49] !== e
      ? ((n = Kt(c, e, re)), (t[47] = re), (t[48] = c), (t[49] = e), (t[50] = n))
      : (n = t[50]);
    let r;
    (t[51] === n
      ? (r = t[52])
      : ((r = (0, ti.jsx)(`p`, { className: `text-sm text-default select-text`, children: n })),
        (t[51] = n),
        (t[52] = r)),
      (V = r));
  }
  let H;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, ti.jsx)(h, {
        id: `settings.consumerBilling.wallet`,
        defaultMessage: `Wallet balance`,
        description: `Heading for gift-card funds available in the personal account's wallet`,
      })),
      (t[53] = H))
    : (H = t[53]);
  let se;
  t[54] === te
    ? (se = t[55])
    : ((se = te
        ? (0, ti.jsx)(Ke, {
            color: `secondary`,
            size: `toolbar`,
            onClick: Qr,
            children: (0, ti.jsx)(h, {
              id: `settings.consumerBilling.redeem`,
              defaultMessage: `Redeem gift card`,
              description: `Button opening the existing gift-card redemption page from consumer Billing`,
            }),
          })
        : null),
      (t[54] = te),
      (t[55] = se));
  let U;
  t[56] === se
    ? (U = t[57])
    : ((U = (0, ti.jsx)(ye.Header, { title: H, actions: se })), (t[56] = se), (t[57] = U));
  let W;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, ti.jsx)(h, {
        id: `settingsModal.walletBalance.description.v2`,
        defaultMessage: `Your balance will be applied automatically to eligible payments, including ChatGPT subscriptions and credit purchases.`,
        description: `Explanation beneath every visible wallet balance state, including loading and unavailable; available funds apply automatically to eligible subscription and credit payments`,
      })),
      (t[58] = W))
    : (W = t[58]);
  let ce;
  t[59] === V
    ? (ce = t[60])
    : ((ce = (0, ti.jsx)(ye.Content, {
        children: (0, ti.jsx)(de, {
          children: (0, ti.jsx)(ot, { label: V, description: W, control: null }),
        }),
      })),
      (t[59] = V),
      (t[60] = ce));
  let G;
  return (
    t[61] !== U || t[62] !== ce
      ? ((G = (0, ti.jsxs)(ye, { children: [U, ce] })), (t[61] = U), (t[62] = ce), (t[63] = G))
      : (G = t[63]),
    G
  );
}
function Qr(e) {
  return F({
    event: e,
    href: `https://chatgpt.com/redeem?entry_point=billing`,
    initiator: `open_in_browser_bridge`,
  });
}
var $r,
  ei,
  ti,
  ni = e(() => {
    (($r = Je()),
      lt(),
      pt(),
      I(),
      (ei = t(u(), 1)),
      U(),
      dt(),
      c(),
      j(),
      M(),
      i(),
      rt(),
      ae(),
      he(),
      x(),
      we(),
      Mt(),
      Wt(),
      Nt(),
      (ti = Be()));
  });
function ri() {
  let e = (0, ai.c)(8),
    { accountId: t, userId: n } = ke(),
    { data: r, isLoading: i } = vt();
  if (!i && r?.structure === `personal` && r.id === t && n != null) {
    let r = t + n,
      i;
    return (
      e[0] !== t || e[1] !== r
        ? ((i = (0, si.jsx)(ii, { accountId: t }, r)), (e[0] = t), (e[1] = r), (e[2] = i))
        : (i = e[2]),
      i
    );
  }
  let a;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, si.jsx)(d, { slug: `billing` })), (e[3] = a))
    : (a = e[3]);
  let o;
  e[4] === i ? (o = e[5]) : ((o = i ? (0, si.jsx)(fn, {}) : null), (e[4] = i), (e[5] = o));
  let s;
  return (
    e[6] === o
      ? (s = e[7])
      : ((s = (0, si.jsx)(w, { title: a, children: o })), (e[6] = o), (e[7] = s)),
    s
  );
}
function ii(e) {
  let t = (0, ai.c)(20),
    { accountId: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = It(n)), (t[0] = n), (t[1] = r));
  let { data: i, isPending: a, isError: o, refetch: s } = oe(r),
    c = mt(`200883286`),
    [l, u] = (0, oi.useState)(!1),
    [f, p] = (0, oi.useState)(!1),
    m,
    g = !1;
  if (a) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, si.jsx)(fn, {})), (t[2] = e))
      : (e = t[2]),
      (m = e));
  } else if (o || i == null || i.can_access_with_session === !1) {
    let e;
    (t[3] === s
      ? (e = t[4])
      : ((e = (0, si.jsx)(Gt, { onRetry: () => void s() })), (t[3] = s), (t[4] = e)),
      (m = e));
  } else {
    let e;
    t[5] === i ? (e = t[6]) : ((e = Zt(i)), (t[5] = i), (t[6] = e));
    let r = e,
      a =
        r == null &&
        ((i.account.plan_type ?? `free`) !== `free` ||
          i.account.processor?.a001?.has_customer_object === !0),
      o = a || (c && r !== `app_store` && r !== `google_play_store`);
    g = l && o;
    let s;
    (t[7] !== i ||
    t[8] !== n ||
    t[9] !== f ||
    t[10] !== a ||
    t[11] !== o ||
    t[12] !== g ||
    t[13] !== c
      ? ((s = g
          ? (0, si.jsx)(Ur, { accountId: n, onBack: () => u(!1) })
          : (0, si.jsxs)(si.Fragment, {
              children: [
                (0, si.jsx)(Tr, { account: i, accountId: n }),
                c ? (0, si.jsx)(Zr, { account: i, accountId: n }) : null,
                o ? (0, si.jsx)(Hr, { accountId: n, onViewAll: () => u(!0) }) : null,
                a
                  ? (0, si.jsxs)(si.Fragment, {
                      children: [
                        (0, si.jsx)(jn, { accountId: n }),
                        (0, si.jsx)(gr, { accountId: n }),
                      ],
                    })
                  : null,
                (0, si.jsx)(Er, { account: i, onCancelSubscriptionClick: () => p(!0) }),
                f
                  ? (0, si.jsx)(oi.Suspense, {
                      fallback: (0, si.jsx)(fn, {}),
                      children: (0, si.jsx)(ci, { account: i, accountId: n, onClose: () => p(!1) }),
                    })
                  : null,
              ],
            })),
        (t[7] = i),
        (t[8] = n),
        (t[9] = f),
        (t[10] = a),
        (t[11] = o),
        (t[12] = g),
        (t[13] = c),
        (t[14] = s))
      : (s = t[14]),
      (m = s));
  }
  let _;
  t[15] === g
    ? (_ = t[16])
    : ((_ = g
        ? (0, si.jsx)(h, {
            id: `settingsModal.transactionHistory.title`,
            defaultMessage: `Transaction history`,
            description: `Heading for a personal account's recent billing transactions and the title of its complete transaction-history subpage`,
          })
        : (0, si.jsx)(d, { slug: `billing` })),
      (t[15] = g),
      (t[16] = _));
  let v;
  return (
    t[17] !== m || t[18] !== _
      ? ((v = (0, si.jsx)(w, { title: _, children: m })), (t[17] = m), (t[18] = _), (t[19] = v))
      : (v = t[19]),
    v
  );
}
var ai, oi, si, ci;
e(() => {
  ((ai = Je()),
    pt(),
    (oi = t(u(), 1)),
    U(),
    _t(),
    ut(),
    pe(),
    le(),
    we(),
    zn(),
    Qt(),
    hn(),
    xr(),
    Nr(),
    Nt(),
    Ut(),
    Xr(),
    ni(),
    (si = Be()),
    xe(),
    (ci = (0, oi.lazy)(async () => ({
      default: (
        await Ie(
          async () => {
            let { CancellationDialog: e } = await import(`./dialog-ac1180167d3a.js`);
            return { CancellationDialog: e };
          },
          __vite__mapDeps([14, 1, 2, 3, 15, 16, 8, 9, 6, 7, 17, 13, 10]),
          import.meta.url,
        )
      ).CancellationDialog,
    }))));
})();
export { ri as ConsumerBillingSettings };
//# sourceMappingURL=billing-settings-5fe9d46a4f09.js.map
