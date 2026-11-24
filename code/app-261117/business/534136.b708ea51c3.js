/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const __rspack_esm_ids = [534136]
export const __webpack_modules__ = {
  FBnY(e, t) {
    t.A = { banner: "banner-EyWKCn", enter: "enter-fhgcSC", shimmer: "shimmer-bieUyY", sweep: "sweep-p0PQj6" }
  },
  AWhs(e, t) {
    t.A = {
      usageHelpLink: "usageHelpLink-OvCtlW",
      submitError: "submitError-QpX3p_",
      root: "root-hRDndT root-BSFpJ0",
      blueBackground: "blueBackground-h0nXaj",
      creditPage: "creditPage-i9Gl2k",
      modal: "modal-xN3fk1",
      button: "button-uUalnz",
      offerNotice: "offerNotice-C6sPjX",
      offerNoticeTitle: "offerNoticeTitle-vZh2Qm",
      planChangeDetails: "planChangeDetails-oP_sFy",
      successPrimaryButton: "successPrimaryButton-dZL_6x button-uUalnz",
      successGhostButton: "successGhostButton-HPr9LN",
    }
  },
  KAsE(e, t, a) {
    var n = a("zd8w"),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            },
      r = n.useState,
      o = n.useEffect,
      s = n.useLayoutEffect,
      l = n.useDebugValue
    function c(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var a = t()
        return !i(e, a)
      } catch (e) {
        return !0
      }
    }
    var u =
      "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
            return t()
          }
        : function (e, t) {
            var a = t(),
              n = r({ inst: { value: a, getSnapshot: t } }),
              i = n[0].inst,
              u = n[1]
            return (
              s(
                function () {
                  ;((i.value = a), (i.getSnapshot = t), c(i) && u({ inst: i }))
                },
                [e, a, t],
              ),
              o(
                function () {
                  return (
                    c(i) && u({ inst: i }),
                    e(function () {
                      c(i) && u({ inst: i })
                    })
                  )
                },
                [e],
              ),
              l(a),
              a
            )
          }
    t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u
  },
  elQ4(e, t, a) {
    var n = a("zd8w"),
      i = a("I5pG"),
      r =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            },
      o = i.useSyncExternalStore,
      s = n.useRef,
      l = n.useEffect,
      c = n.useMemo,
      u = n.useDebugValue
    t.useSyncExternalStoreWithSelector = function (e, t, a, n, i) {
      var d = s(null)
      if (null === d.current) {
        var h = { hasValue: !1, value: null }
        d.current = h
      } else h = d.current
      var m = o(
        e,
        (d = c(
          function () {
            function e(e) {
              if (!l) {
                if (((l = !0), (o = e), (e = n(e)), void 0 !== i && h.hasValue)) {
                  var t = h.value
                  if (i(t, e)) return (s = t)
                }
                return (s = e)
              }
              if (((t = s), r(o, e))) return t
              var a = n(e)
              return void 0 !== i && i(t, a) ? t : ((o = e), (s = a))
            }
            var o,
              s,
              l = !1,
              c = void 0 === a ? null : a
            return [
              function () {
                return e(t())
              },
              null === c
                ? void 0
                : function () {
                    return e(c())
                  },
            ]
          },
          [t, a, n, i],
        ))[0],
        d[1],
      )
      return (
        l(
          function () {
            ;((h.hasValue = !0), (h.value = m))
          },
          [m],
        ),
        u(m),
        m
      )
    }
  },
  I5pG(e, t, a) {
    e.exports = a("KAsE")
  },
  pbCd(e, t, a) {
    e.exports = a("elQ4")
  },
  fKuh(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.998 2.08691C12.7601 2.08691 14.0029 3.31903 14.0029 5.08105H14.6748C16.5285 5.08105 17.9951 6.5477 17.9951 8.40137V13.7588C17.9951 15.6125 16.5285 17.0791 14.6748 17.0791H5.3252C3.47149 17.0791 2.00488 15.6125 2.00488 13.7588V8.40137C2.00493 6.5477 3.47152 5.08105 5.3252 5.08105H5.99707C5.99708 3.31903 7.23993 2.08691 9.00195 2.08691H10.998ZM3.3291 13.7588C3.3291 14.8792 4.20482 15.7549 5.3252 15.7549H14.6748C15.7952 15.7549 16.6709 14.8792 16.6709 13.7588V11.8711C16.2055 12.167 15.6319 12.333 14.9707 12.333H11.4971V13.3311C11.4971 13.7486 11.2427 13.9833 10.8252 13.9834H9.1748C8.75733 13.9833 8.5127 13.7486 8.5127 13.3311V12.333H5.15137C4.45059 12.3329 3.8301 12.1476 3.3291 11.8174V13.7588ZM5.3252 6.40527C4.20485 6.40527 3.32915 7.28104 3.3291 8.40137V9.18555C3.3291 10.2548 4.08218 11.0086 5.15137 11.0088H14.8379C15.9073 11.0088 16.6709 10.255 16.6709 9.18555V8.40137C16.6709 7.28104 15.7951 6.40527 14.6748 6.40527H5.3252ZM9.00195 3.41113C8.014 3.41113 7.3213 4.10329 7.32129 5.08105H12.6787C12.6787 4.10329 11.986 3.41113 10.998 3.41113H9.00195Z",
          }),
        })))
  },
  y60j(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M13.334 11.417C13.701 11.4172 13.9989 11.715 13.9991 12.082C13.9991 12.4491 13.7011 12.7468 13.334 12.7471H10.834C10.4667 12.7471 10.169 12.4493 10.169 12.082C10.1691 11.7149 10.4668 11.417 10.834 11.417H13.334Z",
            }),
            (0, n.jsx)("path", {
              d: "M6.74222 7.34569C7.05709 7.15708 7.46546 7.25942 7.65433 7.57421L8.77542 9.44237C8.98061 9.78481 8.98081 10.2133 8.77542 10.5557L7.65433 12.4248C7.46553 12.7393 7.05697 12.8414 6.74222 12.6533C6.42734 12.4644 6.32486 12.0551 6.5137 11.7402L7.55765 9.99901L6.5137 8.2578C6.32498 7.94291 6.42739 7.53459 6.74222 7.34569Z",
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.79788 1.78026C9.31113 1.37492 10.8493 1.79464 11.9385 2.75878C13.365 2.46738 14.9091 2.87391 16.0176 3.98241C17.1255 5.09072 17.5303 6.63371 17.2393 8.05956C18.2041 9.14893 18.6251 10.6875 18.2198 12.2012C17.8139 13.715 16.6793 14.837 15.2989 15.2978C14.8382 16.6783 13.7171 17.8128 12.2032 18.2187C10.6893 18.6244 9.15004 18.2033 8.06058 17.2383C6.63475 17.5294 5.09176 17.1246 3.98343 16.0166C2.87526 14.9084 2.46879 13.3647 2.7598 11.9385C1.79537 10.8489 1.37594 9.31012 1.78128 7.79686C2.18691 6.28323 3.31979 5.16038 4.70023 4.69921C5.1613 3.31879 6.28422 2.18595 7.79788 1.78026ZM11.1094 3.79979C10.3375 3.08594 9.23002 2.77333 8.14261 3.06444C7.05488 3.3559 6.25114 4.18036 5.93949 5.18456C5.82791 5.54387 5.54587 5.82695 5.18656 5.93846C4.18211 6.24995 3.35702 7.05347 3.06546 8.14159C2.77429 9.22936 3.08701 10.3376 3.80081 11.1094C4.05589 11.3856 4.15916 11.771 4.0762 12.1377C3.844 13.1631 4.1275 14.2798 4.92386 15.0762C5.72013 15.8721 6.83591 16.1552 7.86136 15.9228L8.00003 15.9004C8.32338 15.868 8.64895 15.9747 8.89066 16.1982C9.66269 16.9123 10.7707 17.225 11.8584 16.9336C12.9458 16.6421 13.749 15.8179 14.0606 14.8135L14.1094 14.6826C14.243 14.3859 14.4987 14.1571 14.8135 14.0596C15.8182 13.7481 16.644 12.9452 16.9356 11.8574C17.2269 10.7698 16.9131 9.66163 16.1993 8.88964C15.9438 8.61338 15.8408 8.22731 15.9239 7.86034C16.1562 6.83493 15.873 5.71912 15.0772 4.92284C14.2807 4.12638 13.1643 3.8428 12.1387 4.07518C11.7718 4.1584 11.3858 4.05506 11.1094 3.79979Z",
            }),
          ],
        })))
  },
  nGcY(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.27916 5.50684C5.70791 4.58738 6.94757 4.34064 7.6942 5.08691L14.9129 12.3057L15.0487 12.4609C15.6235 13.2137 15.3513 14.3204 14.493 14.7207L14.3006 14.7949L3.79967 18.0771C2.64613 18.4371 1.56223 17.3528 1.92272 16.1992L5.20397 5.69922L5.27916 5.50684ZM3.19225 16.5967C3.15211 16.726 3.27383 16.8477 3.40318 16.8076L9.08873 15.0293L4.96861 10.9092L3.19225 16.5967ZM6.75377 6.02734C6.6755 5.9494 6.54869 5.96802 6.49303 6.05469L6.4735 6.0957L5.41393 9.4834C5.43241 9.49826 5.4524 9.5122 5.46959 9.5293L10.4696 14.5293L10.5145 14.584L13.9032 13.5254L13.9452 13.5068C14.0195 13.459 14.0437 13.359 13.9999 13.2822L13.9725 13.2461L6.75377 6.02734Z",
            }),
            (0, n.jsx)("path", {
              d: "M17.0829 8.75C17.7732 8.75 18.3329 9.30964 18.3329 10C18.3329 10.6904 17.7732 11.25 17.0829 11.25C16.3927 11.2498 15.8329 10.6902 15.8329 10C15.8329 9.30976 16.3927 8.75019 17.0829 8.75Z",
            }),
            (0, n.jsx)("path", {
              d: "M17.4999 2.66797C17.8669 2.66814 18.1647 2.96599 18.1649 3.33301C18.1649 6.00146 16.0013 8.16504 13.3329 8.16504C12.9659 8.16485 12.668 7.867 12.6678 7.5C12.668 7.13299 12.9659 6.83515 13.3329 6.83496C15.2668 6.83496 16.8348 5.26692 16.8348 3.33301C16.835 2.966 17.1329 2.66816 17.4999 2.66797Z",
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.6669 1.00195C12.9545 1.00213 13.9979 2.04635 13.9979 3.33398C13.9976 4.62133 12.9542 5.66486 11.6669 5.66504C10.3794 5.66498 9.33517 4.6214 9.33482 3.33398C9.33482 2.04628 10.3792 1.00201 11.6669 1.00195ZM11.6669 2.33203C11.1137 2.33209 10.6649 2.78082 10.6649 3.33398C10.6652 3.88686 11.1139 4.3349 11.6669 4.33496C12.2197 4.33478 12.6675 3.88679 12.6678 3.33398C12.6678 2.78089 12.2199 2.33221 11.6669 2.33203Z",
            }),
          ],
        })))
  },
  yfgo(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M7.50004 2.5H12.5M7.50004 2.5V7.72992C7.50004 8.11981 7.36335 8.49737 7.11374 8.79689L4.04241 12.4825C3.58427 13.0323 3.33337 13.7252 3.33337 14.4409C3.33337 16.1304 4.70299 17.5 6.39249 17.5H13.6076C15.2971 17.5 16.6667 16.1304 16.6667 14.4409C16.6667 13.7252 16.4158 13.0323 15.9577 12.4825L12.8863 8.79689C12.6367 8.49737 12.5 8.11981 12.5 7.72992V2.5M7.50004 2.5H6.66671M12.5 2.5H13.3334",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, n.jsx)("path", {
              d: "M5.59998 10.774C9.59998 8.83904 9.99998 12.7089 13.6 10",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, n.jsx)("circle", { cx: 7.5, cy: 13.5, r: 1, fill: "currentColor" }),
            (0, n.jsx)("circle", { cx: 9.7, cy: 14.7, r: 0.7, fill: "currentColor" }),
          ],
        })))
  },
  YsZw(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M9.99976 1.39209C10.236 1.39211 10.6012 1.53644 10.698 1.92725L10.7136 2.00928L10.7771 2.42041C11.1166 4.44344 11.8168 5.97474 12.8826 7.07568C14.0157 8.24617 15.6271 8.99718 17.8494 9.27881C18.3468 9.34196 18.4764 9.79282 18.4763 9.99951C18.4763 10.2062 18.3462 10.6567 17.8484 10.7192C15.6766 10.9918 14.0441 11.7325 12.8884 12.8882C11.7327 14.0439 10.992 15.6764 10.7195 17.8481C10.6569 18.346 10.2064 18.476 9.99976 18.4761C9.79306 18.4761 9.3422 18.3465 9.27905 17.8491C8.99743 15.6269 8.24641 14.0155 7.07593 12.8823C5.90159 11.7455 4.23767 11.0243 2.00952 10.7134C1.55696 10.6502 1.39236 10.2516 1.39233 9.99951C1.39245 9.74762 1.55683 9.34928 2.00854 9.28564L2.42847 9.22021C4.49316 8.87078 6.00398 8.16131 7.08276 7.08252C8.23341 5.93188 8.96443 4.28988 9.28589 2.0083L9.30151 1.92725C9.39842 1.53663 9.76352 1.3922 9.99976 1.39209ZM9.99878 4.77002C9.55062 6.05705 8.90363 7.14251 8.02319 8.02295C7.14276 8.90338 6.05729 9.55037 4.77026 9.99854C6.03393 10.4375 7.11641 11.0703 8.00073 11.9263C8.88745 12.7847 9.54859 13.843 9.99878 15.0981C10.4399 13.865 11.0859 12.8099 11.948 11.9478C12.8101 11.0856 13.8653 10.4396 15.0984 9.99854C13.8433 9.54835 12.7849 8.88721 11.9265 8.00049C11.0705 7.11616 10.4377 6.03369 9.99878 4.77002Z",
            fill: "currentColor",
          }),
        })))
  },
  wVRS(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M17.4011 5.16846C17.8231 5.16893 18.1655 5.51108 18.1657 5.93311V10.8335C18.1657 11.2006 17.8678 11.4983 17.5007 11.4985C17.1334 11.4985 16.8357 11.2008 16.8357 10.8335V7.43799L11.0046 13.269C10.6798 13.5937 10.1526 13.5938 9.82786 13.269L7.08274 10.5229L2.97043 14.6372C2.71073 14.8968 2.28869 14.8969 2.02903 14.6372C1.76969 14.3775 1.76956 13.9554 2.02903 13.6958L6.49485 9.23096L6.55832 9.17334C6.86304 8.92503 7.30336 8.92511 7.60813 9.17334L7.67161 9.23096L10.4157 11.9761L15.8933 6.49854H12.5007C12.1334 6.49854 11.8357 6.20077 11.8357 5.8335C11.8357 5.46623 12.1334 5.16846 12.5007 5.16846H17.4011Z",
            fill: "currentColor",
          }),
        })))
  },
  DdSk(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M8.22266 2.66821C8.58981 2.66834 8.8877 2.96606 8.8877 3.33325V16.6663C8.8877 17.0334 8.58981 17.3312 8.22266 17.3313C7.85539 17.3313 7.55762 17.0335 7.55762 16.6663V3.33325C7.55762 2.96598 7.85539 2.66821 8.22266 2.66821Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M12.4443 4.83521C12.8116 4.83521 13.1094 5.13297 13.1094 5.50024V13.8333C13.1092 14.2004 12.8115 14.4983 12.4443 14.4983C12.0773 14.4982 11.7794 14.2003 11.7793 13.8333V5.50024C11.7793 5.13306 12.0772 4.83534 12.4443 4.83521Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M4 7.16821C4.36727 7.16821 4.66504 7.46598 4.66504 7.83325V12.1663C4.66504 12.5335 4.36727 12.8313 4 12.8313C3.63273 12.8313 3.33496 12.5335 3.33496 12.1663V7.83325C3.33496 7.46598 3.63273 7.16821 4 7.16821Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M16.667 7.66821C17.034 7.66848 17.332 7.96615 17.332 8.33325V11.6663C17.332 12.0334 17.034 12.331 16.667 12.3313C16.2997 12.3313 16.002 12.0335 16.002 11.6663V8.33325C16.002 7.96598 16.2997 7.66821 16.667 7.66821Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  tGcV(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M11.6667 10.6735L13.6148 10.1753",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
            }),
            (0, n.jsx)("path", {
              d: "M11.7234 4.65713L3.27068 8.33159C2.63317 8.60872 2.31555 9.32914 2.54094 9.98672L3.09374 11.5995C3.31914 12.257 4.01193 12.6311 4.68539 12.4589L7.78268 11.6668",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
            }),
            (0, n.jsx)("path", {
              d: "M15.4385 10.8336C14.6795 11.0941 13.8533 10.6893 13.5932 9.92938L11.8436 4.81902C11.5834 4.05914 11.9878 3.232 12.7468 2.97154L13.9247 2.56731C14.6837 2.30685 15.5098 2.7117 15.77 3.47157L17.5196 8.58194C17.7797 9.34181 17.3754 10.169 16.6164 10.4294L15.4385 10.8336Z",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
            }),
            (0, n.jsx)("circle", {
              cx: 9.87593,
              cy: 12.1175,
              r: 2.08333,
              transform: "rotate(-108.92 9.87593 12.1175)",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
            }),
            (0, n.jsx)("path", {
              d: "M9.16658 14.1667L6.6439 17.5",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
            }),
            (0, n.jsx)("path", {
              d: "M10.8334 14.1667L13.3669 17.5",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
            }),
          ],
        })))
  },
  lu8r(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M12.5001 1.83516C13.2637 1.82709 14.0539 2.0663 14.6632 2.58613C15.1759 3.0237 15.5322 3.6379 15.6427 4.39766C17.9718 5.10127 18.8867 8.00818 17.5118 9.94356C18.7544 11.6935 18.1682 14.2799 16.1983 15.2658C15.728 16.9301 14.3615 18.0181 12.9112 18.1516C12.1493 18.2217 11.3676 18.0254 10.7139 17.5109C10.4436 17.2981 10.2054 17.0358 10.0001 16.7287C9.79473 17.0358 9.5566 17.2981 9.28621 17.5109C8.6326 18.0254 7.85086 18.2217 7.08894 18.1516C5.63857 18.0181 4.2711 16.9302 3.80086 15.2658C1.83163 14.2796 1.24588 11.6933 2.48836 9.94356C1.11362 8.00843 2.02801 5.10175 4.35652 4.39766C4.467 3.63784 4.82425 3.02373 5.33699 2.58613C5.94629 2.0663 6.73643 1.82709 7.50008 1.83516C8.26393 1.84329 9.05028 2.0988 9.65535 2.63008C9.78017 2.73968 9.89509 2.86033 10.0001 2.99043C10.1051 2.86033 10.22 2.73968 10.3448 2.63008C10.9499 2.0988 11.7362 1.84329 12.5001 1.83516ZM9.33504 4.97578C9.33504 4.34394 9.0995 3.91191 8.77742 3.6291C8.44235 3.33509 7.97492 3.17041 7.48543 3.16524C6.99552 3.16013 6.53116 3.31556 6.20027 3.59785C5.88354 3.86822 5.65048 4.28609 5.65047 4.9084C5.65065 5.26544 5.38613 5.54914 5.05672 5.59981C3.32607 5.86615 2.57689 8.05288 3.70613 9.3459C4.00494 9.68802 4.00365 10.2 3.70613 10.5412C2.72292 11.6686 3.1298 13.5385 4.51765 14.133C4.74725 14.2314 4.92632 14.4219 5.01082 14.6564L5.04109 14.759L5.10261 14.9865C5.44947 16.0959 6.35488 16.7486 7.21101 16.8273C7.66067 16.8687 8.09828 16.7539 8.46394 16.466C8.82109 16.1848 9.15245 15.7017 9.33504 14.9279V4.97578ZM10.6651 14.9279C10.8477 15.7017 11.1791 16.1848 11.5362 16.466C11.9019 16.7539 12.3395 16.8687 12.7891 16.8273C13.7023 16.7433 14.6713 16.0066 14.9591 14.759L14.9893 14.6564C15.0738 14.4219 15.2529 14.2314 15.4825 14.133C16.8704 13.5385 17.2772 11.6686 16.294 10.5412C15.9965 10.2 15.9952 9.68802 16.294 9.3459C17.4233 8.05289 16.6741 5.86615 14.9434 5.59981C14.6129 5.54896 14.3476 5.26332 14.3497 4.90449C14.3487 4.28434 14.1159 3.86765 13.7999 3.59785C13.469 3.31556 13.0046 3.16013 12.5147 3.16524C12.0252 3.17041 11.5578 3.33509 11.2227 3.6291C10.9409 3.8766 10.7252 4.2384 10.6759 4.74824L10.6651 4.97578V14.9279Z",
            fill: "currentColor",
          }),
        })))
  },
  EDzy(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M14.4451 5.03754C14.6517 4.73389 15.0653 4.65531 15.369 4.86176C15.6725 5.06829 15.7512 5.48193 15.5448 5.78558L9.4051 14.8159C9.11747 15.2388 8.51551 15.2949 8.15413 14.933L4.52913 11.3002C4.2698 11.0403 4.27035 10.6192 4.5301 10.3598C4.7901 10.1005 5.21115 10.1008 5.47053 10.3608L8.6551 13.5522L14.4451 5.03754Z",
            fill: "currentColor",
          }),
        })))
  },
  wiO6(e, t, a) {
    a.d(t, {
      l: () => m,
      H7: () => f,
      zQ: () => y,
      X_: () => h,
      fW: () => p,
      nH: () => g,
      G0: () => b,
      Fz: () => C,
      sQ: () => x,
      T0: () => k,
    })
    var n = a("RY1E")
    let i = (0, n.Y)({
        headline: { id: "pricing.freeOutcome.headline", defaultMessage: "See what AI can do" },
        featureSimpleExplanations: {
          id: "pricing.freeOutcome.feature.simpleExplanations",
          defaultMessage: "Get simple explanations",
        },
        featureShortChats: {
          id: "pricing.freeOutcome.feature.shortChats",
          defaultMessage: "Have short chats for common questions",
        },
        featureTryImageGeneration: {
          id: "pricing.freeOutcome.feature.tryImageGeneration",
          defaultMessage: "Try out image generation",
        },
        featureLimitedMemory: {
          id: "pricing.freeOutcome.feature.limitedMemory",
          defaultMessage: "Save limited memory and context",
        },
        featureCoreModelNoVerb: { id: "pricing.freeOutcome.feature.coreModelNoVerb", defaultMessage: "Core model" },
        featureMessagesNoVerb: {
          id: "pricing.freeOutcome.feature.messagesNoVerb",
          defaultMessage: "Limited messages and uploads",
        },
        featureImagesNoVerb: {
          id: "pricing.freeOutcome.feature.imagesNoVerb",
          defaultMessage: "Limited image creation",
        },
        featureMemoryNoVerb: { id: "pricing.freeOutcome.feature.memoryNoVerb", defaultMessage: "Limited memory" },
      }),
      r = (0, n.Y)({
        headline: { id: "pricing.goOutcome.headline", defaultMessage: "Do more with smarter AI" },
        headlineUpdated: {
          id: "pricing.goOutcome.headlineUpdated",
          defaultMessage: "Keep chatting with expanded access",
        },
        featuresExploreInDepth: {
          id: "pricing.goOutcome.feature.exploreInDepth",
          defaultMessage: "Explore topics in depth",
        },
        featureLongerChatsUploads: {
          id: "pricing.goOutcome.feature.longerChatsUploads",
          defaultMessage: "Chat longer and upload more content",
        },
        featureMoreImagesForProjects: {
          id: "pricing.goOutcome.feature.moreImagesForProjects",
          defaultMessage: "Make more images for your projects",
        },
        featureMoreMemoryForSmarterReplies: {
          id: "pricing.goOutcome.feature.moreMemoryForSmarterReplies",
          defaultMessage: "Get more memory for smarter replies",
        },
        featurePlanningTasks: {
          id: "pricing.goOutcome.feature.planningTasks",
          defaultMessage: "Get help with planning and tasks",
        },
        featureProjectsTasksGPTs: {
          id: "pricing.goOutcome.feature.projectsTasksGpts",
          defaultMessage: "Explore projects, tasks, and custom GPTs",
        },
        featureMessagesNoVerb: {
          id: "pricing.goOutcome.feature.messagesNoVerb",
          defaultMessage: "More messages and uploads",
        },
        featureFileUploadsNoVerb: {
          id: "pricing.goOutcome.feature.fileUploadsNoVerb",
          defaultMessage: "More file uploads",
        },
        featureImagesNoVerb: { id: "pricing.goOutcome.feature.imagesNoVerb", defaultMessage: "More image creation" },
        featureMemoryNoVerb: { id: "pricing.goOutcome.feature.memoryNoVerb", defaultMessage: "Longer memory" },
        featureVoiceMode: { id: "pricing.goOutcome.feature.voiceMode", defaultMessage: "Expanded voice mode" },
      }),
      o = (0, n.Y)({
        headline: { id: "pricing.plusOutcome.headline", defaultMessage: "Unlock the full experience" },
        featureSolveComplexProblems: {
          id: "pricing.plusOutcome.feature.solveComplexProblems",
          defaultMessage: "Solve complex problems",
        },
        featureLongChats: {
          id: "pricing.plusOutcome.feature.longChats",
          defaultMessage: "Have long chats over multiple sessions",
        },
        featureFasterImages: {
          id: "pricing.plusOutcome.feature.fasterImages",
          defaultMessage: "Create more images, faster",
        },
        featureRememberGoals: {
          id: "pricing.plusOutcome.feature.rememberGoals",
          defaultMessage: "Remember goals and past conversations",
        },
        featureAgentModePlanning: {
          id: "pricing.plusOutcome.feature.agentModePlanning",
          defaultMessage: "Plan travel and tasks with agent mode",
        },
        featureOrganizeProjects: {
          id: "pricing.plusOutcome.feature.organizeProjects",
          defaultMessage: "Organize projects and customize GPTs",
        },
        featureCodexApps: {
          id: "pricing.plusOutcome.feature.codexApps",
          defaultMessage: "Write code and build apps with Codex",
        },
        featureAdvancedModelsNoVerb: {
          id: "pricing.plusOutcome.feature.advancedModelNoVerb",
          defaultMessage: "Advanced models",
        },
        featureImagesNoVerb: {
          id: "pricing.plusOutcome.feature.imagesNoVerb",
          defaultMessage: "Advanced image creation with Thinking",
        },
        featureMemoryNoVerb: {
          id: "pricing.plusOutcome.feature.memoryNoVerb",
          defaultMessage: "Expanded memory across chats",
        },
        featureDeepResearchAgentModeNoVerb: {
          id: "pricing.plusOutcome.feature.deepResearchAgentModeNoVerb",
          defaultMessage: "Expanded deep research",
        },
        featureProjectsTasksGptsNoVerb: {
          id: "pricing.plusOutcome.feature.projectsTasksGptsNoVerb",
          defaultMessage: "Projects and custom GPTs",
        },
        featureCustomGptsNoVerb: { id: "pricing.plusOutcome.feature.customGptsNoVerb", defaultMessage: "Custom GPTs" },
        featureCodexAppsNoVerb: {
          id: "pricing.plusOutcome.feature.codexAppsNoVerb",
          defaultMessage: "Codex coding agent",
        },
        featureFileStorageNoVerb: {
          id: "pricing.plusOutcome.feature.fileStorageNoVerb",
          defaultMessage: "Even more file storage",
        },
        featureVoiceModeNoVerb: {
          id: "pricing.plusOutcome.feature.voiceModeNoVerb",
          defaultMessage: "Expanded voice mode",
        },
        featureProjectsCapacityNoVerb: {
          id: "pricing.plusOutcome.feature.projectsCapacityNoVerb",
          defaultMessage: "Even more projects capacity",
        },
        featureDataAnalysisNoVerb: {
          id: "pricing.plusOutcome.feature.dataAnalysisNoVerb",
          defaultMessage: "Expanded data analysis with interactive tables",
        },
      }),
      s = (0, n.Y)({
        headline: { id: "pricing.proOutcome.headline", defaultMessage: "Maximize your productivity" },
        featureMasterAdvancedTasks: {
          id: "pricing.proOutcome.feature.masterAdvancedTasks",
          defaultMessage: "Master advanced tasks and topics",
        },
        featureUnlimitedMessages: {
          id: "pricing.proOutcome.feature.unlimitedMessages",
          defaultMessage: "Tackle big projects with unlimited core chat",
        },
        featureHighQualityImages: {
          id: "pricing.proOutcome.feature.highQualityImages",
          defaultMessage: "Create high-quality images at any scale",
        },
        featureMaximumMemory: {
          id: "pricing.proOutcome.feature.maximumMemory",
          defaultMessage: "Keep full context with maximum memory",
        },
        featureResearchAgents: {
          id: "pricing.proOutcome.feature.researchAgents",
          defaultMessage: "Run research and plan tasks with agents",
        },
        featureScaleProjects: {
          id: "pricing.proOutcome.feature.scaleProjects",
          defaultMessage: "Scale your projects and automate workflows",
        },
        featureCodexDeploy: {
          id: "pricing.proOutcome.feature.codexDeploy",
          defaultMessage: "Deploy code faster with Codex",
        },
        featureEarlyAccess: {
          id: "pricing.proOutcome.feature.earlyAccess",
          defaultMessage: "Get early access to experimental features",
        },
        featureResearchVariant: {
          id: "pricing.proOutcome.feature.researchVariant",
          defaultMessage: "Frontier Pro model",
        },
        featureResearchNoVerb: {
          id: "pricing.proOutcome.feature.researchNoVerb",
          defaultMessage: "Frontier Pro model",
        },
        featureUnlimitedMessagesNoVerb: {
          id: "pricing.proOutcome.feature.unlimitedMessagesNoVerb",
          defaultMessage: "Unlimited core chat",
        },
        featureHighQualityImagesNoVerb: {
          id: "pricing.proOutcome.feature.highQualityImagesNoVerb",
          defaultMessage: "Unlimited and faster image creation",
        },
        featureMaximumMemoryNoVerb: {
          id: "pricing.proOutcome.feature.maximumMemoryNoVerb",
          defaultMessage: "Maximum memory and context",
        },
        featureExpandedProjectsTasksGptsNoVerb: {
          id: "pricing.proOutcome.feature.expandedProjectsTasksGptsNoVerb",
          defaultMessage: "Expanded projects, tasks, and custom GPTs",
        },
        featureEarlyAccessNoVerb: {
          id: "pricing.proOutcome.feature.earlyAccessNoVerb",
          defaultMessage: "Early access to experimental features",
        },
        featureFileStorageNoVerb: {
          id: "pricing.proOutcome.feature.fileStorageNoVerb",
          defaultMessage: "Maximum file storage",
        },
        featureVoiceModeNoVerb: {
          id: "pricing.proOutcome.feature.voiceModeNoVerb",
          defaultMessage: "Even more expanded voice mode",
        },
        featureProjectsCapacityNoVerb: {
          id: "pricing.proOutcome.feature.projectsCapacityNoVerb",
          defaultMessage: "Maximum projects capacity",
        },
        featureDataAnalysisNoVerb: {
          id: "pricing.proOutcome.feature.dataAnalysisNoVerb",
          defaultMessage: "Maximum access to advanced data analysis",
        },
        featurePersonalFinanceToolsNoVerb: {
          id: "pricing.proOutcome.feature.personalFinanceToolsNoVerb",
          defaultMessage: "Personal finance tools",
        },
      }),
      l = (0, n.Y)({
        headline: { id: "pricing.teamOutcome.headline", defaultMessage: "Get more work done with AI for teams" },
        featureProfessionalAnalysis: {
          id: "pricing.teamOutcome.feature.professionalAnalysis",
          defaultMessage: "Conduct professional analysis",
        },
        featureUnlimitedMessages: {
          id: "pricing.teamOutcome.feature.unlimitedMessages",
          defaultMessage: "Get unlimited core chat",
        },
        featureProduceMedia: {
          id: "pricing.teamOutcome.feature.produceMedia",
          defaultMessage: "Produce images, videos, slides, & more",
        },
        featureSecureWorkspace: {
          id: "pricing.teamOutcome.feature.secureWorkspace",
          defaultMessage: "Secure your space with SSO, MFA, & more",
        },
        featureProtectPrivacy: {
          id: "pricing.teamOutcome.feature.protectPrivacy",
          defaultMessage: "Protect privacy; data never used for training",
        },
        featureShareProjects: {
          id: "pricing.teamOutcome.feature.shareProjects",
          defaultMessage: "Share projects & custom GPTs",
        },
        featureIntegrations: {
          id: "pricing.teamOutcome.feature.integrations",
          defaultMessage: "Integrate with SharePoint & other tools",
        },
        featureBillingManagement: {
          id: "pricing.teamOutcome.feature.billingManagement",
          defaultMessage: "Simplify billing and user management",
        },
        featureMeetingTranscription: {
          id: "pricing.teamOutcome.feature.meetingTranscription",
          defaultMessage: "Capture meeting notes with transcription",
        },
        featureDeployAgents: {
          id: "pricing.teamOutcome.feature.deployAgents",
          defaultMessage: "Deploy agents to code and research",
        },
      }),
      c = (0, n.Y)({
        headline: {
          id: "pricing.teamBusinessPricingVariant.headline",
          defaultMessage: "A secure workspace with company context and tools for teams, built for growing companies",
        },
        featureAccessAcrossApps: {
          id: "pricing.teamBusinessPricingVariant.feature.accessAcrossApps",
          defaultMessage: "Access ChatGPT and Codex across desktop and mobile apps",
        },
        featureAiForWorkflows: {
          id: "pricing.teamBusinessPricingVariant.feature.aiForWorkflows",
          defaultMessage: "AI for chat, coding, analysis, and workflows",
        },
        featureConnectedTools: {
          id: "pricing.teamBusinessPricingVariant.feature.connectedTools",
          defaultMessage: "Connect tools like Microsoft 365, Google Drive, Slack, GitHub, Linear, Figma, and more",
        },
        featureCompanyContextAgentPlugins: {
          id: "pricing.teamBusinessPricingVariant.feature.companyContextAgentPlugins",
          defaultMessage: "Build on company knowledge and team context with custom team agent plugins",
        },
        featureCentralizedBilling: {
          id: "pricing.teamBusinessPricingVariant.feature.centralizedBilling",
          defaultMessage: "Centralized billing and administration",
        },
        featureUsageControls: {
          id: "pricing.teamBusinessPricingVariant.feature.usageControls",
          defaultMessage: "Usage analytics, budgeting, and spend controls",
        },
        featureSecureWorkspace: {
          id: "pricing.teamBusinessPricingVariant.feature.secureWorkspace",
          defaultMessage: "Secure workspace with SAML SSO and MFA",
        },
        featureNoTrainingByDefault: {
          id: "pricing.teamBusinessPricingVariant.feature.noTrainingByDefault",
          defaultMessage: "No training on your business data by default",
        },
        pricingDisclaimerSeats: {
          id: "pricing.teamBusinessPricingVariant.pricingDisclaimerSeats",
          defaultMessage: "For {minSeats}+ seats, billed annually",
        },
      }),
      u = (0, n.Y)({
        featureHigherUsageLimits: {
          id: "pricingPlanConstants.pro.checkout.proliteGate.featureHigherUsageLimits.moreUsage",
          defaultMessage: "More usage than Plus",
        },
        featureHigherUsageLimitsProOnly: {
          id: "pricingPlanConstants.pro.checkout.proliteGate.featureHigherUsageLimitsProOnly.moreUsage",
          defaultMessage: "More usage than Plus",
        },
        featureResearchModel: {
          id: "pricingPlanConstants.pro.checkout.proliteGate.researchModel",
          defaultMessage: "Frontier Pro model",
        },
        featureExperimentalFeatures: {
          id: "pricingPlanConstants.pro.checkout.proliteGate.experimentalFeatures",
          defaultMessage: "Early access to experimental features",
        },
      }),
      d = (0, n.Y)({
        featureWorkAgent: { id: "pricing.tpp.feature.workAgent", defaultMessage: "Work agent for multi-step tasks" },
        featureCodexAgentForCoding: {
          id: "pricing.tpp.feature.codexAgentForCoding",
          defaultMessage: "Codex agent for coding",
        },
        featureMaximumCodexAgent: {
          id: "pricing.tpp.feature.maximumCodexAgent",
          defaultMessage: "Maximum access to Codex agent",
        },
        featureMaximumWorkAgent: {
          id: "pricing.tpp.feature.maximumWorkAgent",
          defaultMessage: "Maximum access to Work agent",
        },
        featureExpandedCodexAndWorkUsage: {
          id: "pricing.tpp.feature.expandedCodexAndWorkUsage",
          defaultMessage: "Expanded Codex and Work usage",
        },
      }),
      h = (e) => [
        { label: i.featureSimpleExplanations, icon: e.sparkle, categories: ["advanced_intelligence"] },
        { label: i.featureShortChats, icon: e.chat, categories: ["usage_messages"] },
        { label: i.featureTryImageGeneration, icon: e.image, categories: ["images_video"] },
        { label: i.featureLimitedMemory, icon: e.brain, categories: ["memory"] },
      ],
      m = (e) => [
        { label: i.featureCoreModelNoVerb, icon: e.sparkle, categories: ["advanced_intelligence"] },
        { label: i.featureMessagesNoVerb, icon: e.chat, categories: ["usage_messages"] },
        { label: i.featureImagesNoVerb, icon: e.image, categories: ["images_video"] },
        { label: i.featureMemoryNoVerb, icon: e.brain, categories: ["memory"] },
      ],
      p = (e) => [
        { label: r.featuresExploreInDepth, icon: e.sparklePlus, categories: ["advanced_intelligence"] },
        { label: r.featureLongerChatsUploads, icon: e.chats, categories: ["usage_messages", "uploads_storage"] },
        { label: r.featureMoreImagesForProjects, icon: e.images, categories: ["images_video", "projects_gpts"] },
        { label: r.featureMoreMemoryForSmarterReplies, icon: e.brainPlus, categories: ["memory"] },
        { label: r.featurePlanningTasks, icon: e.telescopePlus, categories: ["agents_research"] },
        { label: r.featureProjectsTasksGPTs, icon: e.allProductsCheck, categories: ["projects_gpts"] },
      ],
      f = (e) => [
        { label: i.featureCoreModelNoVerb, icon: e.sparkle, categories: ["advanced_intelligence"] },
        { label: r.featureMessagesNoVerb, icon: e.chats, categories: ["usage_messages"] },
        { label: r.featureImagesNoVerb, icon: e.images, categories: ["images_video"] },
        { label: r.featureMemoryNoVerb, icon: e.brainPlus, categories: ["memory"] },
        { label: r.featureVoiceMode, icon: e.voice, categories: ["voice"] },
      ],
      g = (e) => [
        { label: o.featureSolveComplexProblems, icon: e.sparklePlus, categories: ["advanced_intelligence"] },
        { label: o.featureLongChats, icon: e.chats, categories: ["usage_messages"] },
        { label: o.featureFasterImages, icon: e.images, categories: ["images_video"] },
        { label: o.featureRememberGoals, icon: e.brainPlus, categories: ["memory"] },
        { label: o.featureAgentModePlanning, icon: e.telescopePlus, categories: ["agents_research"] },
        { label: o.featureOrganizeProjects, icon: e.allProductsCheck, categories: ["projects_gpts"] },
        { label: o.featureCodexApps, icon: e.codex, categories: ["codex", "apps_integrations"] },
      ],
      C = (e) => [
        { label: o.featureAdvancedModelsNoVerb, icon: e.sparklePlus, categories: ["advanced_intelligence"] },
        { label: o.featureImagesNoVerb, icon: e.images, categories: ["images_video"] },
        { label: o.featureMemoryNoVerb, icon: e.brainPlus, categories: ["memory"] },
        { label: d.featureWorkAgent, icon: e.briefcase, categories: ["agents_research", "apps_integrations"] },
        { label: d.featureCodexAgentForCoding, icon: e.codex, categories: ["codex"] },
        { label: o.featureDeepResearchAgentModeNoVerb, icon: e.telescopePlus, categories: ["agents_research"] },
        { label: o.featureProjectsTasksGptsNoVerb, icon: e.allProductsCheck, categories: ["projects_gpts"] },
      ],
      b = (e) => [
        { label: s.featureMasterAdvancedTasks, icon: e.sparklePro, categories: ["advanced_intelligence"] },
        { label: s.featureUnlimitedMessages, icon: e.chatsPro, categories: ["usage_messages"] },
        { label: s.featureHighQualityImages, icon: e.imagesPro, categories: ["images_video"] },
        { label: s.featureMaximumMemory, icon: e.brainPro, categories: ["memory"] },
        { label: s.featureResearchAgents, icon: e.telescopePro, categories: ["agents_research"] },
        { label: s.featureScaleProjects, icon: e.allProductsPlus, categories: ["projects_gpts"] },
        { label: s.featureCodexDeploy, icon: e.codexSmile, categories: ["codex"] },
        { label: s.featureEarlyAccess, icon: e.flaskPro, categories: ["advanced_intelligence"] },
      ],
      x = (e) => [
        { label: u.featureHigherUsageLimits, icon: e.trending, categories: ["usage_messages"] },
        { label: s.featureResearchVariant, icon: e.sparklePro, categories: ["advanced_intelligence"] },
        { label: d.featureMaximumCodexAgent, icon: e.codexSmile, categories: ["codex"] },
        { label: d.featureMaximumWorkAgent, icon: e.connectors, categories: ["agents_research"] },
        { label: s.featureUnlimitedMessagesNoVerb, icon: e.chatsPro, categories: ["usage_messages"] },
        { label: s.featureHighQualityImagesNoVerb, icon: e.imagesPro, categories: ["images_video"] },
        { label: s.featureMaximumMemoryNoVerb, icon: e.brainPro, categories: ["memory"] },
        { label: s.featureEarlyAccessNoVerb, icon: e.flaskPro, categories: ["advanced_intelligence"] },
      ],
      y = (e) => [
        {
          label: l.featureProfessionalAnalysis,
          icon: e.upgradePlan,
          categories: ["advanced_intelligence", "finance_analysis"],
        },
        { label: l.featureUnlimitedMessages, icon: e.loopShort, categories: ["usage_messages"] },
        { label: l.featureProduceMedia, icon: e.imagesPro, categories: ["images_video"] },
        { label: l.featureSecureWorkspace, icon: e.lockKeyHole, categories: ["workspace_admin"] },
        { label: l.featureProtectPrivacy, icon: e.identity, categories: ["workspace_admin"] },
        { label: l.featureShareProjects, icon: e.folderOpenThin, categories: ["projects_gpts"] },
        { label: l.featureIntegrations, icon: e.addSources, categories: ["apps_integrations"] },
        { label: l.featureBillingManagement, icon: e.invoice, categories: ["workspace_admin"] },
        { label: l.featureMeetingTranscription, icon: e.speechToTextThin, categories: ["voice"] },
        { label: l.featureDeployAgents, icon: e.agentThin, categories: ["agents_research"] },
      ],
      k = (e) => [
        { label: c.featureAccessAcrossApps, icon: e.globe, categories: ["apps_integrations", "codex"] },
        {
          label: c.featureAiForWorkflows,
          icon: e.fileDocumentThin,
          categories: ["advanced_intelligence", "finance_analysis"],
        },
        { label: d.featureWorkAgent, icon: e.briefcase, categories: ["agents_research", "apps_integrations"] },
        { label: c.featureConnectedTools, icon: e.workWithApps, categories: ["apps_integrations"] },
        {
          label: c.featureCompanyContextAgentPlugins,
          icon: e.brainPro,
          categories: ["agents_research", "apps_integrations"],
        },
        { label: c.featureCentralizedBilling, icon: e.invoice, categories: ["workspace_admin"] },
        { label: c.featureUsageControls, icon: e.currencyDollar, categories: ["workspace_admin", "usage_messages"] },
        { label: c.featureSecureWorkspace, icon: e.lockShield, categories: ["workspace_admin"] },
        { label: c.featureNoTrainingByDefault, icon: e.userLock, categories: ["workspace_admin"] },
      ]
  },
  lgyL(e, t, a) {
    a.d(t, {
      xt: () => r.A,
      vH: () => s.A,
      sY: () => G.A,
      jp: () => O.A,
      mH: () => D,
      rR: () => Q.A,
      VU: () => Y,
      Qc: () => K,
    })
    var n = a("xJ20"),
      i = a("ABep"),
      r = a("IDNS"),
      o = a("fKuh"),
      s = a("hDRf"),
      l = a("y60j"),
      c = a("yfgo"),
      u = a("u3bW"),
      d = a("DyL4"),
      h = a("YsZw"),
      m = a("wVRS"),
      p = a("DdSk"),
      f = a("tGcV")
    a("zd8w")
    var g = (e) =>
        (0, i.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, i.jsx)("path", {
              d: "M7.94556 14.0276C7.9455 12.9375 7.06204 12.054 5.97192 12.054C4.88191 12.0541 3.99835 12.9376 3.99829 14.0276C3.99829 15.1177 4.88188 16.0011 5.97192 16.0012C7.06207 16.0012 7.94556 15.1177 7.94556 14.0276ZM7.94556 5.97192C7.94544 4.88187 7.062 3.99829 5.97192 3.99829C4.88195 3.99841 3.99841 4.88195 3.99829 5.97192C3.99829 7.062 4.88187 7.94544 5.97192 7.94556C7.06207 7.94556 7.94556 7.06207 7.94556 5.97192ZM16.0012 5.97192C16.0011 4.88187 15.1177 3.99829 14.0276 3.99829C12.9376 3.99835 12.0541 4.88191 12.054 5.97192C12.054 7.06204 12.9375 7.9455 14.0276 7.94556C15.1177 7.94556 16.0012 7.06207 16.0012 5.97192ZM9.27563 14.0276C9.27563 15.8523 7.79661 17.3313 5.97192 17.3313C4.14734 17.3312 2.66821 15.8522 2.66821 14.0276C2.66827 12.203 4.14737 10.724 5.97192 10.7239C7.79657 10.7239 9.27558 12.203 9.27563 14.0276ZM9.27563 5.97192C9.27563 7.79661 7.79661 9.27563 5.97192 9.27563C4.14734 9.27552 2.66821 7.79654 2.66821 5.97192C2.66833 4.14741 4.14741 2.66833 5.97192 2.66821C7.79654 2.66821 9.27552 4.14734 9.27563 5.97192ZM17.3313 5.97192C17.3313 7.79661 15.8523 9.27563 14.0276 9.27563C12.203 9.27558 10.7239 7.79658 10.7239 5.97192C10.724 4.14737 12.203 2.66827 14.0276 2.66821C15.8522 2.66821 17.3312 4.14734 17.3313 5.97192Z",
              fill: "currentColor",
            }),
            (0, i.jsx)("path", { d: "M8 12L12 8", stroke: "currentColor", strokeWidth: 1.33 }),
            (0, i.jsx)("path", {
              d: "M11.6665 13.7501H14.3748M17.0832 13.7501H14.3748M14.3748 13.7501V11.0417M14.3748 13.7501V16.4584",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
      C = a("tZtH"),
      b = a("i2oq"),
      x = a("OeIv"),
      y = a("lu8r"),
      k = a("EEhB"),
      v = a("d2Kw"),
      w = a("zUCn"),
      P = a("EDzy"),
      M = a("D4Ne"),
      _ = a("rfGL"),
      A = a("jQM4"),
      j = a("G2q2"),
      L = a("Gg1I"),
      T = a("x9yB"),
      S = a("mMqk"),
      I = a("mHJ2"),
      N = a("CoVw"),
      B = a("rUPw")
    a("nkfT")
    var V = a("pTN8"),
      U = a("bD0w"),
      G = a("j2Vs"),
      H = a("SfBd"),
      O = a("sMPH"),
      R = a("h4zt"),
      F = a("Odwx"),
      Z = a("PAof")
    a("eUna")
    var D = (e) =>
        (0, i.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, i.jsx)("path", {
              d: "M12.9167 17.0833L10.8334 13.75",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, i.jsx)("path", {
              d: "M7.08337 17.0833L9.16671 13.75",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, i.jsx)("path", {
              d: "M3.84618 7.94752C3.04382 8.28108 2.63236 9.17511 2.90087 10.0015L3.21813 10.9779C3.49457 11.8287 4.39335 12.3095 5.25449 12.0673L7.86002 11.3345M12.0747 4.5267L10.0176 5.3819M11.9085 10.1958L13.7486 9.67825M15.5954 9.95196L16.3879 9.69444C17.0445 9.48111 17.4038 8.77592 17.1905 8.11935L15.6454 3.36407C15.4321 2.7075 14.7269 2.34819 14.0703 2.56152L13.2778 2.81903C12.4023 3.10347 11.9233 4.04373 12.2077 4.91915L13.4953 8.88189C13.7797 9.75731 14.72 10.2364 15.5954 9.95196Z",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, i.jsx)("path", {
              d: "M9.99996 13.7499C11.1506 13.7499 12.0833 12.8172 12.0833 11.6666C12.0833 10.516 11.1506 9.58325 9.99996 9.58325C8.84937 9.58325 7.91663 10.516 7.91663 11.6666C7.91663 12.8172 8.84937 13.7499 9.99996 13.7499Z",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, i.jsx)("path", {
              d: "M6.32059 1.86075C6.29733 1.65542 6.12373 1.50021 5.91708 1.5C5.71044 1.49979 5.53652 1.65464 5.51284 1.85993C5.36501 3.14161 4.64161 3.86501 3.35993 4.01284C3.15464 4.03652 2.99979 4.21044 3 4.41708C3.00021 4.62373 3.15542 4.79733 3.36075 4.82059C4.62425 4.9637 5.39782 5.68014 5.51176 6.9628C5.5304 7.17271 5.70638 7.33357 5.91712 7.33333C6.12787 7.3331 6.30348 7.17184 6.32166 6.96189C6.43112 5.69736 7.19736 4.93112 8.46189 4.82166C8.67184 4.80348 8.8331 4.62787 8.83333 4.41712C8.83357 4.20638 8.67271 4.0304 8.4628 4.01176C7.18014 3.89782 6.4637 3.12425 6.32059 1.86075Z",
              fill: "currentColor",
            }),
          ],
        }),
      E = a("GqS2"),
      W = a("hJAT"),
      z = a("eDHI"),
      q = a("voKD"),
      Q = a("YiEG")
    let Y = {
        sparkle: h.A,
        image: (e) =>
          (0, i.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M16.0012 7.33334C16.0012 6.62231 16.0013 6.12897 15.97 5.74545C15.9469 5.4635 15.9091 5.27399 15.8577 5.13022L15.802 5.00034C15.6481 4.69823 15.4137 4.4452 15.1262 4.26889L14.9993 4.19858C14.8413 4.11812 14.6297 4.0613 14.2542 4.03061C13.8707 3.99929 13.3771 3.99838 12.6663 3.99838H7.33325C6.62221 3.99838 6.12888 3.99928 5.74536 4.03061C5.46351 4.05364 5.27388 4.0905 5.13013 4.14194L5.00024 4.19858C4.69799 4.3526 4.44511 4.58672 4.2688 4.87436L4.19849 5.00034C4.11798 5.15834 4.06122 5.36975 4.03052 5.74545C3.99918 6.12897 3.99829 6.62231 3.99829 7.33334V11.7269L5.01782 10.7083L5.19458 10.5482C6.1104 9.80107 7.46195 9.85462 8.31567 10.7083L13.6038 15.9964C13.8548 15.9923 14.0675 15.9853 14.2542 15.9701C14.6295 15.9394 14.8413 15.8825 14.9993 15.8021L15.1262 15.7308C15.4136 15.5545 15.6481 15.3014 15.802 14.9994L15.8577 14.8695C15.9091 14.7257 15.9469 14.536 15.97 14.2542C16.0013 13.8708 16.0012 13.3772 16.0012 12.6664V7.33334ZM7.37525 11.6488C7.00846 11.282 6.42786 11.2594 6.03442 11.5804L5.95825 11.6488L4.0022 13.6048C4.00634 13.8555 4.0153 14.0678 4.03052 14.2542C4.0612 14.6298 4.11803 14.8414 4.19849 14.9994L4.2688 15.1263C4.44511 15.4137 4.69813 15.6482 5.00024 15.8021L5.13013 15.8578C5.2739 15.9092 5.46341 15.947 5.74536 15.9701C6.12888 16.0014 6.62222 16.0013 7.33325 16.0013H11.7268L7.37525 11.6488ZM13.0852 7.91635C13.085 7.3633 12.6363 6.91538 12.0833 6.91538C11.5302 6.91538 11.0815 7.3633 11.0813 7.91635C11.0813 8.46956 11.53 8.91831 12.0833 8.91831C12.6365 8.91831 13.0852 8.46956 13.0852 7.91635ZM14.4153 7.91635C14.4153 9.2041 13.371 10.2484 12.0833 10.2484C10.7955 10.2484 9.75122 9.2041 9.75122 7.91635C9.7514 6.62876 10.7956 5.5853 12.0833 5.5853C13.3709 5.5853 14.4151 6.62876 14.4153 7.91635ZM17.3313 12.6664C17.3313 13.3554 17.3319 13.9124 17.2952 14.3626C17.2624 14.7636 17.1974 15.1248 17.053 15.4613L16.9866 15.6039C16.7211 16.1248 16.3172 16.5605 15.8215 16.8646L15.6038 16.9867C15.227 17.1786 14.8206 17.2578 14.3625 17.2953C13.9123 17.332 13.3553 17.3314 12.6663 17.3314H7.33325C6.64416 17.3314 6.0872 17.332 5.63696 17.2953C5.23628 17.2625 4.87563 17.1973 4.53931 17.0531L4.39673 16.9867C3.87561 16.7211 3.43911 16.3174 3.13501 15.8216L3.01294 15.6039C2.82097 15.2271 2.74177 14.8206 2.70435 14.3626C2.66758 13.9124 2.66821 13.3553 2.66821 12.6664V7.33334C2.66821 6.64425 2.66756 6.0873 2.70435 5.63706C2.74176 5.17926 2.82113 4.77344 3.01294 4.39682L3.13501 4.17807C3.4391 3.68236 3.87569 3.27851 4.39673 3.01303L4.53931 2.94663C4.8756 2.80239 5.23632 2.73718 5.63696 2.70444C6.0872 2.66765 6.64416 2.66831 7.33325 2.66831H12.6663C13.3553 2.66831 13.9123 2.66767 14.3625 2.70444C14.8206 2.74186 15.227 2.82106 15.6038 3.01303L15.8215 3.1351C16.3174 3.4392 16.7211 3.8757 16.9866 4.39682L17.053 4.5394C17.1973 4.87572 17.2624 5.23637 17.2952 5.63706C17.332 6.0873 17.3313 6.64425 17.3313 7.33334V12.6664Z",
            }),
          }),
        allProductsCheck: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M7.94556 14.0276C7.9455 12.9375 7.06204 12.054 5.97192 12.054C4.88191 12.0541 3.99835 12.9376 3.99829 14.0276C3.99829 15.1177 4.88188 16.0011 5.97192 16.0012C7.06207 16.0012 7.94556 15.1177 7.94556 14.0276ZM7.94556 5.97192C7.94544 4.88187 7.062 3.99829 5.97192 3.99829C4.88195 3.99841 3.99841 4.88195 3.99829 5.97192C3.99829 7.062 4.88187 7.94544 5.97192 7.94556C7.06207 7.94556 7.94556 7.06207 7.94556 5.97192ZM16.0012 5.97192C16.0011 4.88187 15.1177 3.99829 14.0276 3.99829C12.9376 3.99835 12.0541 4.88191 12.054 5.97192C12.054 7.06204 12.9375 7.9455 14.0276 7.94556C15.1177 7.94556 16.0012 7.06207 16.0012 5.97192ZM9.27563 14.0276C9.27563 15.8523 7.79661 17.3313 5.97192 17.3313C4.14734 17.3312 2.66821 15.8522 2.66821 14.0276C2.66827 12.203 4.14737 10.724 5.97192 10.7239C7.79657 10.7239 9.27558 12.203 9.27563 14.0276ZM9.27563 5.97192C9.27563 7.79661 7.79661 9.27563 5.97192 9.27563C4.14734 9.27552 2.66821 7.79654 2.66821 5.97192C2.66833 4.14741 4.14741 2.66833 5.97192 2.66821C7.79654 2.66821 9.27552 4.14734 9.27563 5.97192ZM17.3313 5.97192C17.3313 7.79661 15.8523 9.27563 14.0276 9.27563C12.203 9.27558 10.7239 7.79658 10.7239 5.97192C10.724 4.14737 12.203 2.66827 14.0276 2.66821C15.8522 2.66821 17.3312 4.14734 17.3313 5.97192Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M11.6001 14.5L13.1001 16.25L16.6001 11.5",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        sparklePro: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M15.8206 1.36075C15.7973 1.15542 15.6237 1.00021 15.4171 1C15.2104 0.999789 15.0365 1.15464 15.0128 1.35993C14.865 2.64161 14.1416 3.36501 12.8599 3.51284C12.6546 3.53652 12.4998 3.71044 12.5 3.91708C12.5002 4.12373 12.6554 4.29733 12.8608 4.32059C14.1243 4.4637 14.8978 5.18014 15.0118 6.4628C15.0304 6.67271 15.2064 6.83357 15.4171 6.83333C15.6279 6.8331 15.8035 6.67184 15.8217 6.46189C15.9311 5.19736 16.6974 4.43112 17.9619 4.32166C18.1718 4.30348 18.3331 4.12787 18.3333 3.91712C18.3336 3.70638 18.1727 3.5304 17.9628 3.51176C16.6801 3.39782 15.9637 2.62425 15.8206 1.36075Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M13.8462 13.8092C13.8263 13.6332 13.6775 13.5002 13.5004 13.5C13.3232 13.4998 13.1742 13.6326 13.1539 13.8085C13.0272 14.9071 12.4071 15.5272 11.3085 15.6539C11.1326 15.6742 10.9998 15.8232 11 16.0004C11.0002 16.1775 11.1332 16.3263 11.3092 16.3462C12.3922 16.4689 13.0553 17.083 13.1529 18.1824C13.1689 18.3623 13.3198 18.5002 13.5004 18.5C13.681 18.4998 13.8316 18.3616 13.8471 18.1816C13.941 17.0977 14.5977 16.441 15.6816 16.3471C15.8616 16.3316 15.9998 16.181 16 16.0004C16.0002 15.8198 15.8623 15.6689 15.6824 15.6529C14.583 15.5553 13.9689 14.8922 13.8462 13.8092Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M7.50013 4C7.52445 7.24324 10.2568 9.98287 13.5 9.99994C10.2568 9.99994 7.52445 12.7568 7.50013 16C7.4758 12.7568 4.74324 9.99994 1.5 9.99994C4.74324 9.99994 7.4758 7.24324 7.50013 4Z",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinejoin: "round",
              }),
            ],
          }),
        chatsPro: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M7.1507 17.4562C9.77341 17.4562 11.8995 15.5073 11.8995 13.1031C11.8995 10.699 9.77341 8.75 7.1507 8.75C4.52798 8.75 2.40186 10.699 2.40186 13.1031C2.40186 13.9703 2.67847 14.7782 3.15524 15.4569C3.07732 16.1474 2.87679 16.8053 2.62508 17.4562C3.4722 17.4043 4.25774 17.2529 5.0202 16.9946C5.66092 17.2899 6.38463 17.4562 7.1507 17.4562Z",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M11 3.9139C10.2114 3.04968 9.02619 2.5 7.70093 2.5C5.32662 2.5 3.40186 4.26436 3.40186 6.44082C3.40186 6.70746 3.43074 6.96791 3.48581 7.21969",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M14.3371 14.4885C14.559 14.4215 14.7737 14.3398 14.9798 14.2448C15.7423 14.5032 16.5278 14.6546 17.3749 14.7065C17.1232 14.0555 16.9227 13.3977 16.8448 12.7071C17.3215 12.0285 17.5981 11.2205 17.5981 10.3533C17.5981 7.9492 15.472 6.00024 12.8493 6.00024C11.8686 6.00024 10.9574 6.27273 10.2008 6.7396",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        imagesPro: U.A,
        allProductsPlus: g,
        codexSmile: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 17.915C14.3713 17.915 17.915 14.3713 17.915 10C17.915 5.62867 14.3713 2.08496 10 2.08496C5.62867 2.08496 2.08496 5.62867 2.08496 10C2.08496 14.3713 5.62867 17.915 10 17.915ZM16.585 10C16.585 6.3632 13.6368 3.41504 10 3.41504C6.3632 3.41504 3.41504 6.3632 3.41504 10C3.41504 13.6368 6.3632 16.585 10 16.585C13.6368 16.585 16.585 13.6368 16.585 10Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M5.80005 9L7.30005 8L8.80005 9",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M11.2 9L12.7 8L14.2 9",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        flaskPro: c.A,
        trending: m.A,
        connectors: g,
        upgradePlan: E.A,
        loopShort: (e) =>
          (0, i.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M11.8875 7.17263C13.4489 5.6115 15.9804 5.6113 17.5418 7.17263C19.1031 8.73397 19.1029 11.2655 17.5418 12.8269C15.9803 14.3884 13.4489 14.3884 11.8875 12.8269L9.99978 10.9402L8.11306 12.8269C6.55161 14.3884 4.02021 14.3884 2.45876 12.8269C0.897643 11.2655 0.897426 8.73397 2.45876 7.17263C4.0201 5.61129 6.55159 5.61151 8.11306 7.17263L9.99978 9.05935L11.8875 7.17263ZM7.17263 8.11306C6.13056 7.07134 4.44113 7.07112 3.39919 8.11306C2.35725 9.155 2.35747 10.8444 3.39919 11.8865C4.44124 12.9285 6.13058 12.9285 7.17263 11.8865L9.05935 9.99978L7.17263 8.11306ZM16.6013 8.11306C15.5594 7.07113 13.87 7.07133 12.8279 8.11306L10.9402 9.99978L12.8279 11.8865C13.87 12.9285 15.5593 12.9285 16.6013 11.8865C17.6431 10.8444 17.6433 9.15501 16.6013 8.11306Z",
              fill: "currentColor",
            }),
          }),
        lockKeyHole: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M10.0002 10.168C10.8273 10.1682 11.4989 10.839 11.4993 11.666C11.4993 12.2542 11.1587 12.7624 10.6653 13.0078V14.167C10.6651 14.534 10.3673 14.8319 10.0002 14.832C9.63308 14.832 9.33538 14.5341 9.33521 14.167V13.0078C8.84175 12.7625 8.5022 12.2544 8.5022 11.666C8.50257 10.8389 9.17312 10.1681 10.0002 10.168Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.0002 1.83496C12.6685 1.83514 14.8313 3.99865 14.8313 6.66699V6.8877C16.2542 7.15287 17.3313 8.40061 17.3313 9.90039V15.0996C17.3313 16.7923 15.9595 18.1649 14.2668 18.165H5.73364C4.04089 18.165 2.66821 16.7924 2.66821 15.0996V9.90039C2.66821 8.40085 3.74554 7.15313 5.16821 6.8877V6.66699C5.16821 3.99862 7.3319 1.83509 10.0002 1.83496ZM5.73364 8.16504C4.77543 8.16504 3.99829 8.94218 3.99829 9.90039V15.0996C3.99829 16.0578 4.77543 16.835 5.73364 16.835H14.2668C15.2249 16.8348 16.0012 16.0577 16.0012 15.0996V9.90039C16.0012 8.94226 15.2249 8.16518 14.2668 8.16504H5.73364ZM10.0002 3.16504C8.06644 3.16517 6.49829 4.73316 6.49829 6.66699V6.83496H13.5012V6.66699C13.5012 4.73318 11.934 3.16522 10.0002 3.16504Z",
                fill: "currentColor",
              }),
            ],
          }),
        identity: V.A,
        folderOpenThin: B.A,
        addSources: r.A,
        speechToTextThin: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M17.9189 9.33496C18.2861 9.33514 18.584 9.63284 18.584 10V11.2959C18.584 11.6631 18.2861 11.9608 17.9189 11.9609C17.5517 11.9609 17.2539 11.6632 17.2539 11.2959V10.665H15.25V16.002H15.835L15.9697 16.0156C16.2725 16.0778 16.5 16.3458 16.5 16.667C16.4998 16.9881 16.2725 17.2562 15.9697 17.3184L15.835 17.332H13.335C12.9679 17.3319 12.6701 17.034 12.6699 16.667C12.6699 16.2998 12.9678 16.0021 13.335 16.002H13.9199V10.665H11.917V11.2959C11.917 11.6632 11.6192 11.9609 11.252 11.9609C10.8847 11.9609 10.5869 11.6632 10.5869 11.2959V10C10.5869 9.63273 10.8847 9.33496 11.252 9.33496H17.9189Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M5.41895 2.66797C5.78596 2.66814 6.08381 2.96599 6.08398 3.33301V13.333C6.08398 13.7002 5.78606 13.9979 5.41895 13.998C5.05168 13.998 4.75391 13.7003 4.75391 13.333V3.33301C4.75408 2.96589 5.05178 2.66797 5.41895 2.66797Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M8.33496 5.16797C8.70212 5.16797 8.99983 5.46589 9 5.83301V10.833C9 11.2003 8.70223 11.498 8.33496 11.498C7.96784 11.4979 7.66992 11.2002 7.66992 10.833V5.83301C7.67009 5.46599 7.96795 5.16814 8.33496 5.16797Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M2.50195 6.83496C2.86912 6.83496 3.16682 7.13288 3.16699 7.5V9.16602C3.16699 9.53329 2.86922 9.83105 2.50195 9.83105C2.13468 9.83105 1.83691 9.53329 1.83691 9.16602V7.5C1.83709 7.13288 2.13479 6.83496 2.50195 6.83496Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M11.252 3.50098C11.619 3.50098 11.9166 3.79904 11.917 4.16602V7.08301C11.917 7.45028 11.6192 7.74805 11.252 7.74805C10.8847 7.74805 10.5869 7.45028 10.5869 7.08301V4.16602C10.5873 3.79904 10.8849 3.50098 11.252 3.50098Z",
                fill: "currentColor",
              }),
            ],
          }),
        agentThin: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M10 12.668C11.7333 12.668 13.331 13.1693 14.5117 14.0127C15.691 14.8551 16.4989 16.0791 16.499 17.5C16.4988 17.8669 16.2009 18.1647 15.834 18.165C15.4668 18.165 15.1691 17.8671 15.1689 17.5C15.1688 16.62 14.6699 15.7602 13.7383 15.0947C12.8078 14.4302 11.488 13.9981 10 13.998C8.51211 13.9981 7.19214 14.4303 6.26172 15.0947C5.33026 15.7602 4.83215 16.6201 4.83203 17.5C4.83186 17.867 4.53404 18.1649 4.16699 18.165C3.79983 18.165 3.50213 17.8671 3.50195 17.5C3.50207 16.0791 4.3099 14.8551 5.48926 14.0127C6.66991 13.1695 8.26685 12.668 10 12.668Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M7.91699 5C8.60724 5.00013 9.16699 5.55973 9.16699 6.25C9.16699 6.94027 8.60724 7.49987 7.91699 7.5C7.22664 7.5 6.66699 6.94036 6.66699 6.25C6.66699 5.55964 7.22664 5 7.91699 5Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M12.083 5C12.7734 5 13.333 5.55964 13.333 6.25C13.333 6.94036 12.7734 7.5 12.083 7.5C11.3928 7.49987 10.833 6.94027 10.833 6.25C10.833 5.55973 11.3928 5.00013 12.083 5Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 1.00195C10.3673 1.00195 10.665 1.29972 10.665 1.66699V2.25195H13.1113C13.554 2.25195 13.9248 2.25137 14.2275 2.27539C14.5377 2.30004 14.8331 2.35361 15.1143 2.49219C15.5745 2.71921 15.9478 3.09243 16.1748 3.55273C16.3133 3.83385 16.367 4.12942 16.3916 4.43945C16.4156 4.74209 16.415 5.11318 16.415 5.55566C16.415 6.45208 16.4157 7.16418 16.3701 7.7373C16.324 8.31755 16.2274 8.81322 16.0029 9.26855C15.6137 10.0577 14.9746 10.6967 14.1855 11.0859C13.73 11.3105 13.2339 11.407 12.6533 11.4531C12.0802 11.4987 11.369 11.499 10.4727 11.499H9.52734C8.631 11.499 7.91978 11.4987 7.34668 11.4531C6.76612 11.407 6.26997 11.3105 5.81445 11.0859C5.02538 10.6967 4.38629 10.0577 3.99707 9.26855C3.77258 8.81322 3.67603 8.31755 3.62988 7.7373C3.58434 7.16418 3.58496 6.45208 3.58496 5.55566C3.58496 5.11318 3.5844 4.74209 3.6084 4.43945C3.63303 4.12942 3.6867 3.83385 3.8252 3.55273C4.05219 3.09243 4.42545 2.71921 4.88574 2.49219C5.16693 2.35361 5.46234 2.30004 5.77246 2.27539C6.07515 2.25137 6.44604 2.25195 6.88867 2.25195H9.33496V1.66699C9.33496 1.29972 9.63273 1.00195 10 1.00195ZM6.88867 3.58203C6.42452 3.58203 6.11484 3.58266 5.87695 3.60156C5.64679 3.61988 5.54082 3.65242 5.47363 3.68555C5.27602 3.78307 5.11605 3.94299 5.01855 4.14062C4.98547 4.20782 4.95287 4.31406 4.93457 4.54395C4.91569 4.78179 4.91504 5.09172 4.91504 5.55566C4.91504 6.47338 4.91567 7.1236 4.95605 7.63184C4.99587 8.13234 5.07138 8.43926 5.19043 8.68066C5.45025 9.20725 5.87667 9.63384 6.40332 9.89355C6.64477 10.0126 6.9515 10.0881 7.45215 10.1279C7.96034 10.1683 8.60976 10.1689 9.52734 10.1689H10.4727C11.3902 10.1689 12.0397 10.1683 12.5479 10.1279C13.0485 10.0881 13.3552 10.0126 13.5967 9.89355C14.1233 9.63384 14.5498 9.20725 14.8096 8.68066C14.9286 8.43926 15.0041 8.13234 15.0439 7.63184C15.0843 7.1236 15.085 6.47338 15.085 5.55566C15.085 5.09172 15.0843 4.78179 15.0654 4.54395C15.0471 4.31406 15.0145 4.20782 14.9814 4.14062C14.884 3.94299 14.724 3.78307 14.5264 3.68555C14.4592 3.65242 14.3532 3.61988 14.123 3.60156C13.8852 3.58266 13.5755 3.58203 13.1113 3.58203H6.88867Z",
                fill: "currentColor",
              }),
            ],
          }),
        dots: S.A,
        fileDocumentThin: I.A,
        lockShield: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M10 1.875 15.5 4.25V9.375C15.5 13.25 13.1875 15.75 10 17.125C6.8125 15.75 4.5 13.25 4.5 9.375V4.25L10 1.875Z",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M7.75 9.125H12.25V12.625H7.75V9.125Z",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M8.625 9.125V7.875C8.625 7.11561 9.24061 6.5 10 6.5C10.7594 6.5 11.375 7.11561 11.375 7.875V9.125",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        userLock: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.584 10.585C15.8715 10.5853 16.915 11.6294 16.915 12.917V13.6221C17.6446 13.8925 18.165 14.5934 18.165 15.417V17.083C18.165 18.1405 17.3075 18.9979 16.25 18.998H12.917C11.8594 18.998 11.002 18.1406 11.002 17.083V15.417C11.002 14.5934 11.5225 13.8925 12.252 13.6221V12.917C12.252 11.6292 13.2962 10.585 14.584 10.585ZM12.917 14.832C12.5939 14.832 12.332 15.0939 12.332 15.417V17.083C12.332 17.4061 12.5939 17.668 12.917 17.668H16.25C16.573 17.6678 16.835 17.406 16.835 17.083V15.417C16.835 15.094 16.573 14.8322 16.25 14.832H12.917ZM14.584 11.915C14.0308 11.915 13.582 12.3638 13.582 12.917V13.502H15.585V12.917C15.585 12.364 15.1369 11.9153 14.584 11.915Z",
              }),
              (0, i.jsx)("path", {
                d: "M9.45117 11.3555C9.81738 11.3285 10.136 11.6035 10.1631 11.9697C10.19 12.3359 9.91499 12.6546 9.54883 12.6816C6.63647 12.8969 4.41528 15.1575 4.41504 17.833C4.41495 18.2002 4.11721 18.498 3.75 18.498C3.38279 18.498 3.08505 18.2002 3.08496 17.833C3.0852 14.3799 5.92798 11.6158 9.45117 11.3555Z",
              }),
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 1.83496C12.208 1.83509 13.9988 3.62502 13.999 5.83301C13.999 8.04114 12.2081 9.8319 10 9.83203C7.79193 9.83186 6.00196 8.04112 6.00195 5.83301C6.00213 3.62505 7.79204 1.83514 10 1.83496ZM10 3.16504C8.52658 3.16521 7.33221 4.35959 7.33203 5.83301C7.33203 7.30658 8.52647 8.50178 10 8.50195C11.4736 8.50182 12.6689 7.3066 12.6689 5.83301C12.6688 4.35956 11.4735 3.16517 10 3.16504Z",
              }),
            ],
          }),
        arrowsClockwiseRotateBadgeSparkle: C.A,
        brain: y.A,
        brainPlus: (e) =>
          (0, i.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M3.57715 9.14006L4.04365 9.61398C4.17064 9.48898 4.24215 9.31824 4.24215 9.14006C4.24215 8.96187 4.17064 8.79114 4.04365 8.66614L3.57715 9.14006ZM5.15176 5.1067L5.2463 5.76495C5.57512 5.71772 5.81866 5.43507 5.81675 5.10288L5.15176 5.1067ZM5.15159 5.07797H4.48658L4.4866 5.08179L5.15159 5.07797ZM14.843 5.07797L15.508 5.08179V5.07797H14.843ZM14.8429 5.1067L14.1779 5.10288C14.176 5.43508 14.4195 5.71772 14.7483 5.76495L14.8429 5.1067ZM16.4175 9.14006L15.951 8.66614C15.824 8.79114 15.7525 8.96187 15.7525 9.14006C15.7525 9.31824 15.824 9.48898 15.951 9.61398L16.4175 9.14006ZM15.4402 14.6301L15.2037 14.0085C14.9894 14.0901 14.8322 14.2762 14.7878 14.5012L15.4402 14.6301ZM4.55443 14.6301L5.20682 14.5012C5.16237 14.2762 5.00519 14.0901 4.79089 14.0085L4.55443 14.6301ZM3.09513 8.71956C2.83286 8.97666 2.82866 9.39769 3.08576 9.65997C3.34287 9.92224 3.7639 9.92643 4.02617 9.66933L3.09513 8.71956ZM5.53312 9.05389C5.90039 9.05389 6.19812 8.75616 6.19812 8.38889C6.19812 8.02162 5.90039 7.72389 5.53312 7.72389V9.05389ZM17.915 12.0141C17.915 11.6468 17.6173 11.3491 17.25 11.3491C16.8827 11.3491 16.585 11.6468 16.585 12.0141H17.915ZM13.5092 13.9616C13.1774 13.804 12.7807 13.9451 12.6231 14.2768C12.4655 14.6085 12.6066 15.0052 12.9383 15.1629L13.5092 13.9616ZM15.4949 5.16667C15.4949 4.7994 15.1972 4.50167 14.8299 4.50167C14.4626 4.50167 14.1649 4.7994 14.1649 5.16667H15.4949ZM13.1847 6.74014C12.8551 6.90215 12.7192 7.30068 12.8813 7.63029C13.0433 7.9599 13.4418 8.09576 13.7714 7.93376L13.1847 6.74014ZM5.15159 5.07797L4.4866 5.08179L4.48677 5.11052L5.15176 5.1067L5.81675 5.10288L5.81658 5.07415L5.15159 5.07797ZM14.8429 5.1067L15.5078 5.11052L15.508 5.08179L14.843 5.07797L14.178 5.07415L14.1779 5.10288L14.8429 5.1067ZM9.9973 5.14295H9.3323V14.8441H9.9973H10.6623V5.14295H9.9973ZM4.55443 14.6301L3.90204 14.759C4.25458 16.5434 5.63923 17.7323 7.12511 17.8958C7.87456 17.9783 8.64869 17.7972 9.29719 17.2971C9.94516 16.7974 10.4185 16.0183 10.6466 14.9878L9.9973 14.8441L9.34802 14.7004C9.17348 15.4889 8.83979 15.9703 8.48503 16.2439C8.13082 16.517 7.70652 16.6218 7.27056 16.5738C6.38561 16.4764 5.45144 15.7394 5.20682 14.5012L4.55443 14.6301ZM9.9973 14.8441L9.34802 14.9878C9.57611 16.0183 10.0494 16.7974 10.6974 17.2971C11.3459 17.7972 12.12 17.9783 12.8695 17.8958C14.3554 17.7323 15.74 16.5434 16.0926 14.759L15.4402 14.6301L14.7878 14.5012C14.5432 15.7394 13.609 16.4764 12.7241 16.5738C12.2881 16.6218 11.8638 16.517 11.5096 16.2439C11.1548 15.9703 10.8211 15.4889 10.6466 14.7004L9.9973 14.8441ZM3.57715 9.14006L3.11064 8.66614C2.18346 9.57881 1.94764 11.0213 2.15573 12.2555C2.36341 13.4872 3.06063 14.7733 4.31796 15.2516L4.55443 14.6301L4.79089 14.0085C4.14357 13.7623 3.63207 13.0121 3.46722 12.0344C3.3028 11.0592 3.53066 10.1189 4.04365 9.61398L3.57715 9.14006ZM5.15176 5.1067L5.05722 4.44845C3.73212 4.63877 2.69942 5.3659 2.28198 6.39944C1.85534 7.45575 2.141 8.6595 3.11064 9.61398L3.57715 9.14006L4.04365 8.66614C3.39287 8.02554 3.32155 7.37696 3.51519 6.89753C3.71803 6.39533 4.28285 5.90332 5.2463 5.76495L5.15176 5.1067ZM16.4175 9.14006L16.884 9.61398C17.8536 8.6595 18.1393 7.45575 17.7126 6.39944C17.2952 5.3659 16.2625 4.63877 14.9374 4.44846L14.8429 5.1067L14.7483 5.76495C15.7118 5.90332 16.2766 6.39533 16.4794 6.89753C16.6731 7.37696 16.6017 8.02554 15.951 8.66614L16.4175 9.14006ZM15.4402 14.6301L15.6766 15.2516C16.934 14.7733 17.6312 13.4872 17.8389 12.2555C18.047 11.0213 17.8111 9.57881 16.884 8.66614L16.4175 9.14006L15.951 9.61398C16.464 10.1189 16.6918 11.0592 16.5274 12.0344C16.3625 13.0121 15.851 13.7623 15.2037 14.0085L15.4402 14.6301ZM14.843 5.07797H15.508C15.508 4.10693 15.1251 3.33444 14.5176 2.81595C13.9241 2.30945 13.1557 2.07735 12.4131 2.08519C11.6702 2.09304 10.9049 2.34143 10.3156 2.85907C9.71327 3.38814 9.3323 4.1672 9.3323 5.14295H9.9973H10.6623C10.6623 4.53827 10.8871 4.12733 11.1933 3.85831C11.5126 3.57787 11.9587 3.42007 12.4272 3.41512C12.896 3.41017 13.3391 3.55865 13.6542 3.82759C13.9552 4.08455 14.178 4.48236 14.178 5.07797H14.843ZM9.9973 5.14295H10.6623C10.6623 4.1672 10.2813 3.38814 9.67903 2.85907C9.08973 2.34143 8.32438 2.09304 7.58147 2.08519C6.83888 2.07735 6.07048 2.30945 5.47703 2.81595C4.86953 3.33444 4.48659 4.10693 4.48659 5.07797H5.15159H5.81659C5.81659 4.48236 6.03937 4.08455 6.34044 3.82759C6.65556 3.55865 7.09859 3.41017 7.56742 3.41512C8.03594 3.42007 8.48203 3.57787 8.80129 3.85831C9.10756 4.12733 9.3323 4.53827 9.3323 5.14295H9.9973ZM3.56065 9.19444L4.02617 9.66933C4.41526 9.28791 4.94623 9.05389 5.53312 9.05389V8.38889V7.72389C4.58414 7.72389 3.7227 8.10436 3.09513 8.71956L3.56065 9.19444ZM17.25 12.0141H16.585C16.585 13.2042 15.6207 14.1686 14.4316 14.1686V14.8336V15.4986C16.3557 15.4986 17.915 13.9383 17.915 12.0141H17.25ZM14.4316 14.8336V14.1686C14.1002 14.1686 13.788 14.0941 13.5092 13.9616L13.2237 14.5622L12.9383 15.1629C13.3917 15.3783 13.8985 15.4986 14.4316 15.4986V14.8336ZM14.8299 5.16667H14.1649C14.1649 5.85639 13.7666 6.45415 13.1847 6.74014L13.4781 7.33695L13.7714 7.93376C14.791 7.43261 15.4949 6.38243 15.4949 5.16667H14.8299Z",
              fill: "currentColor",
            }),
          }),
        brainPro: b.A,
        branch: (e) =>
          (0, i.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M6.45801 14.9998C6.45801 14.4245 5.99164 13.9582 5.41634 13.9582C4.84104 13.9582 4.37467 14.4245 4.37467 14.9998C4.37467 15.5751 4.84104 16.0415 5.41634 16.0415C5.99164 16.0415 6.45801 15.5751 6.45801 14.9998ZM6.45801 4.99984C6.45801 4.42454 5.99164 3.95817 5.41634 3.95817C4.84104 3.95817 4.37467 4.42454 4.37467 4.99984C4.37467 5.57513 4.84104 6.0415 5.41634 6.0415C5.99164 6.0415 6.45801 5.57513 6.45801 4.99984ZM15.6247 4.99984C15.6247 4.42454 15.1583 3.95817 14.583 3.95817C14.0077 3.95817 13.5413 4.42454 13.5413 4.99984C13.5413 5.57513 14.0077 6.0415 14.583 6.0415C15.1583 6.0415 15.6247 5.57513 15.6247 4.99984ZM17.2913 4.99984C17.2913 6.20472 16.5042 7.22475 15.4163 7.57633V8.33317C15.4163 9.71388 14.2971 10.8332 12.9163 10.8332H7.08301C6.62277 10.8332 6.24967 11.2063 6.24967 11.6665V12.4225C7.33764 12.774 8.12467 13.7949 8.12467 14.9998C8.12467 16.4956 6.91211 17.7082 5.41634 17.7082C3.92057 17.7082 2.70801 16.4956 2.70801 14.9998C2.70801 13.7949 3.49504 12.774 4.58301 12.4225V7.57633C3.49516 7.22475 2.70801 6.20472 2.70801 4.99984C2.70801 3.50407 3.92057 2.2915 5.41634 2.2915C6.91211 2.2915 8.12467 3.50407 8.12467 4.99984C8.12467 6.20472 7.33752 7.22475 6.24967 7.57633V9.31136C6.51055 9.21905 6.79051 9.1665 7.08301 9.1665H12.9163C13.3766 9.1665 13.7497 8.79341 13.7497 8.33317V7.57633C12.6618 7.22475 11.8747 6.20472 11.8747 4.99984C11.8747 3.50407 13.0872 2.2915 14.583 2.2915C16.0788 2.2915 17.2913 3.50407 17.2913 4.99984Z",
              fill: "currentColor",
            }),
          }),
        briefcase: o.A,
        workAgent: o.A,
        chat: (e) =>
          (0, i.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M16.835 9.99976C16.8348 6.49045 13.8111 3.58179 10 3.58179C6.18893 3.58179 3.16523 6.49045 3.16504 9.99976C3.16504 11.4142 3.73237 12.3499 4.44727 13.7654C4.53356 13.9365 4.55818 14.1327 4.5166 14.3201L4.19043 15.7888L5.78027 15.3777L5.9248 15.3533C6.02169 15.3458 6.11884 15.3557 6.21191 15.3816L6.34766 15.4324L6.80664 15.6443C7.86864 16.1162 8.86618 16.4187 10 16.4187C13.8112 16.4187 16.835 13.5092 16.835 9.99976ZM18.165 9.99976C18.165 14.3143 14.4731 17.7488 10 17.7488C8.47948 17.7488 7.19622 17.2958 5.94043 16.7087L3.73633 17.281C3.13492 17.4369 2.58124 16.9022 2.71582 16.2957L3.17871 14.2068C2.53737 12.9533 1.83496 11.7287 1.83496 9.99976C1.83515 5.68532 5.52703 2.25171 10 2.25171C14.473 2.25171 18.1649 5.68532 18.165 9.99976Z",
              fill: "currentColor",
            }),
          }),
        chats: s.A,
        checkmark: P.A,
        codex: l.A,
        currencyDollar: j.A,
        desktopBadge: T.A,
        fileDocument: I.A,
        finance: N.A,
        globe: (e) =>
          (0, i.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M10 2.125C14.3492 2.125 17.875 5.65076 17.875 10C17.875 14.3492 14.3492 17.875 10 17.875C5.65076 17.875 2.125 14.3492 2.125 10C2.125 5.65076 5.65076 2.125 10 2.125ZM7.88672 10.625C7.94334 12.3161 8.22547 13.8134 8.63965 14.9053C8.87263 15.5194 9.1351 15.9733 9.39453 16.2627C9.65437 16.5524 9.86039 16.625 10 16.625C10.1396 16.625 10.3456 16.5524 10.6055 16.2627C10.8649 15.9733 11.1274 15.5194 11.3604 14.9053C11.7745 13.8134 12.0567 12.3161 12.1133 10.625H7.88672ZM3.40527 10.625C3.65313 13.2734 5.45957 15.4667 7.89844 16.2822C7.7409 15.997 7.5977 15.6834 7.4707 15.3486C6.99415 14.0923 6.69362 12.439 6.63672 10.625H3.40527ZM13.3633 10.625C13.3064 12.439 13.0059 14.0923 12.5293 15.3486C12.4022 15.6836 12.2582 15.9969 12.1006 16.2822C14.5399 15.467 16.3468 13.2737 16.5947 10.625H13.3633ZM12.1006 3.7168C12.2584 4.00235 12.4021 4.31613 12.5293 4.65137C13.0059 5.90775 13.3064 7.56102 13.3633 9.375H16.5947C16.3468 6.72615 14.54 4.53199 12.1006 3.7168ZM10 3.375C9.86039 3.375 9.65437 3.44756 9.39453 3.7373C9.1351 4.02672 8.87263 4.48057 8.63965 5.09473C8.22547 6.18664 7.94334 7.68388 7.88672 9.375H12.1133C12.0567 7.68388 11.7745 6.18664 11.3604 5.09473C11.1274 4.48057 10.8649 4.02672 10.6055 3.7373C10.3456 3.44756 10.1396 3.375 10 3.375ZM7.89844 3.7168C5.45942 4.53222 3.65314 6.72647 3.40527 9.375H6.63672C6.69362 7.56102 6.99415 5.90775 7.4707 4.65137C7.59781 4.31629 7.74073 4.00224 7.89844 3.7168Z",
            }),
          }),
        group: u.A,
        images: G.A,
        invoice: O.A,
        megaphoneSkinny: (e) =>
          (0, i.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.8245 2.66623C16.5184 2.03342 18.3335 3.2798 18.3337 5.09298V14.0847C18.3334 15.8978 16.5183 17.1442 14.8245 16.5114L12.1496 15.5121C12.041 17.091 10.7233 18.3335 9.11816 18.3335C7.44213 18.3335 6.07786 16.9788 6.0778 15.3013V13.4987H4.26465C2.83293 13.4987 1.66716 12.3414 1.66699 10.9076V8.27007C1.6671 6.83615 2.8329 5.679 4.26465 5.67892H6.76139L14.8245 2.66623ZM7.74447 15.3013C7.74453 16.0525 8.35685 16.6668 9.11816 16.6669C9.87864 16.6669 10.4906 16.054 10.4919 15.3038V14.892L7.74447 13.8658V15.3013ZM16.667 5.09298C16.6668 4.45149 16.0209 3.99894 15.408 4.22791L7.74447 7.09005V12.0868L15.408 14.9498C16.0209 15.1787 16.6668 14.7261 16.667 14.0847V5.09298ZM4.26465 7.34559C3.74768 7.34567 3.33376 7.76232 3.33366 8.27007V10.9076C3.33383 11.4153 3.74773 11.832 4.26465 11.8321H6.0778V7.34559H4.26465Z",
              fill: "currentColor",
            }),
          }),
        shieldLockThin: Z.A,
        sparklePlus: d.A,
        telescopePlus: D,
        telescopePro: (e) =>
          (0, i.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M6.25 17.5L8.75 12.5L11.25 17.5",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M5.11027 9.10043L2.44577 10.2867C1.81509 10.5675 1.53146 11.3064 1.81225 11.9371L2.1512 12.6984C2.43199 13.3291 3.17088 13.6127 3.80155 13.3319L6.46606 12.1456",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M9.71717 6.13571L6.29137 7.66097C5.45048 8.03536 5.0723 9.02055 5.44669 9.86144L6.12459 11.384C6.49898 12.2249 7.48416 12.6031 8.32506 12.2287L11.15 10.971",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M13.4223 10.8719V10.8719C12.4763 11.2931 11.3679 10.8676 10.9467 9.9216L9.84517 7.44741C9.37718 6.39629 9.8499 5.16481 10.901 4.69682L15.8494 2.49366L16.8563 4.75528",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M8.75 14.25C9.7165 14.25 10.5 13.4665 10.5 12.5C10.5 11.5335 9.7165 10.75 8.75 10.75C7.7835 10.75 7 11.5335 7 12.5C7 13.4665 7.7835 14.25 8.75 14.25Z",
                fill: "#F5F5F5",
                stroke: "currentColor",
                strokeWidth: 1.33,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M4.25312 2.39704C4.23464 2.23386 4.09668 2.11052 3.93246 2.11035C3.76824 2.11018 3.63002 2.23325 3.61121 2.39639C3.49373 3.41494 2.91884 3.98982 1.90029 4.1073C1.73715 4.12612 1.61409 4.26433 1.61426 4.42855C1.61443 4.59277 1.73777 4.73074 1.90095 4.74922C2.90505 4.86295 3.5198 5.4323 3.61035 6.45163C3.62517 6.61845 3.76502 6.74628 3.93249 6.74609C4.09997 6.7459 4.23953 6.61776 4.25397 6.4509C4.34096 5.44599 4.9499 4.83706 5.95481 4.75007C6.12166 4.73562 6.24981 4.59606 6.25 4.42859C6.25019 4.26111 6.12235 4.12126 5.95553 4.10644C4.93621 4.01589 4.36686 3.40114 4.25312 2.39704Z",
                fill: "currentColor",
              }),
              (0, i.jsx)("path", {
                d: "M17.3473 6.94607C17.3267 6.7643 17.173 6.6269 16.9901 6.62671C16.8072 6.62652 16.6532 6.76361 16.6323 6.94534C16.5014 8.07997 15.861 8.72038 14.7263 8.85125C14.5446 8.87221 14.4075 9.02617 14.4077 9.20911C14.4079 9.39204 14.5453 9.54573 14.7271 9.56632C15.8456 9.69301 16.5304 10.3273 16.6313 11.4627C16.6478 11.6486 16.8036 11.791 16.9902 11.7908C17.1767 11.7906 17.3322 11.6478 17.3483 11.4619C17.4452 10.3425 18.1235 9.66417 19.2429 9.56726C19.4288 9.55118 19.5716 9.39571 19.5718 9.20915C19.572 9.02258 19.4296 8.86679 19.2438 8.85029C18.1083 8.74942 17.474 8.06461 17.3473 6.94607Z",
                fill: "currentColor",
              }),
            ],
          }),
        userVoice: (e) =>
          (0, i.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M6.66699 13.3745C7.83594 13.3745 9.04758 13.6847 9.99023 14.355C10.9564 15.042 11.6249 16.1044 11.625 17.4995C11.625 17.9366 11.2711 18.2913 10.834 18.2915C10.3968 18.2915 10.042 17.9367 10.042 17.4995C10.0419 16.673 9.66933 16.069 9.07324 15.645C8.45341 15.2043 7.5814 14.9585 6.66699 14.9585C5.75258 14.9585 4.88058 15.2042 4.26074 15.645C3.66465 16.069 3.29209 16.673 3.29199 17.4995C3.29199 17.9367 2.93723 18.2915 2.5 18.2915C2.06292 18.2913 1.70898 17.9366 1.70898 17.4995C1.70909 16.1044 2.37763 15.042 3.34375 14.355C4.2864 13.6847 5.49805 13.3745 6.66699 13.3745ZM15 1.7085C15.4371 1.7085 15.7918 2.06244 15.792 2.49951V12.4995C15.792 12.9367 15.4372 13.2915 15 13.2915C14.5629 13.2913 14.209 12.9366 14.209 12.4995V2.49951C14.2092 2.06254 14.563 1.70867 15 1.7085ZM6.66699 6.7085C8.25481 6.7085 9.54199 7.99568 9.54199 9.5835C9.54182 11.1712 8.2547 12.4585 6.66699 12.4585C5.07928 12.4585 3.79217 11.1712 3.79199 9.5835C3.79199 7.99568 5.07917 6.7085 6.66699 6.7085ZM12.084 4.2085C12.521 4.20867 12.8748 4.56254 12.875 4.99951V10.2085C12.8748 10.6455 12.521 10.9993 12.084 10.9995C11.6469 10.9995 11.2922 10.6456 11.292 10.2085V4.99951C11.2922 4.56244 11.6469 4.2085 12.084 4.2085ZM6.66699 8.2915C5.95362 8.2915 5.375 8.87013 5.375 9.5835C5.37518 10.2967 5.95373 10.8745 6.66699 10.8745C7.38025 10.8745 7.95881 10.2967 7.95898 9.5835C7.95898 8.87013 7.38036 8.2915 6.66699 8.2915ZM17.917 5.87451C18.3542 5.87451 18.709 6.22928 18.709 6.6665V8.3335C18.7088 8.77057 18.3541 9.12451 17.917 9.12451C17.4799 9.12451 17.1252 8.77057 17.125 8.3335V6.6665C17.125 6.22928 17.4798 5.87451 17.917 5.87451ZM9.16699 2.5415C9.60422 2.5415 9.95898 2.89627 9.95898 3.3335V4.5835C9.95881 5.02057 9.60411 5.37451 9.16699 5.37451C8.72988 5.37451 8.37518 5.02057 8.375 4.5835V3.3335C8.375 2.89627 8.72977 2.5415 9.16699 2.5415Z",
              fill: "currentColor",
            }),
          }),
        voice: p.A,
        workWithApps: Q.A,
      },
      K = {
        ...{ ...Y, voice: z.A },
        telescopePro: f.A,
        sparklePlus: C.A,
        upgradePlan: (e) =>
          (0, i.jsx)("svg", {
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M14.5 5C13.3954 5 12.5 5.89543 12.5 7C12.5 8.10457 13.3954 9 14.5 9C15.6046 9 16.5 8.10457 16.5 7C16.5 5.89543 15.6046 5 14.5 5ZM10.626 6C11.0701 4.27477 12.6362 3 14.5 3C16.3638 3 17.9299 4.27477 18.374 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H18.374C17.9299 9.72523 16.3638 11 14.5 11C12.6362 11 11.0701 9.72523 10.626 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H10.626ZM9.5 15C8.39543 15 7.5 15.8954 7.5 17C7.5 18.1046 8.39543 19 9.5 19C10.6046 19 11.5 18.1046 11.5 17C11.5 15.8954 10.6046 15 9.5 15ZM5.62602 16C6.07006 14.2748 7.63616 13 9.5 13C11.3638 13 12.9299 14.2748 13.374 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H13.374C12.9299 19.7252 11.3638 21 9.5 21C7.63616 21 6.07006 19.7252 5.62602 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16H5.62602Z",
              fill: "currentColor",
            }),
          }),
      }
    ;({
      ...{
        ...Y,
        chat: w.A,
        codex: _.A,
        checkmark: M.A,
        voice: z.A,
        brain: x.A,
        brainPlus: x.A,
        brainPro: x.A,
        branch: k.A,
        briefcase: v.A,
        megaphoneSkinny: R.A,
        userVoice: W.A,
        telescopePro: n.s,
        workWithApps: q.A,
        shieldLockThin: F.A,
        invoice: H.A,
        currencyDollar: A.A,
        desktopBadge: L.A,
      },
      sparklePlus: C.A,
    })
  },
  Jkrr(e, t, a) {
    a.d(t, {
      sy: () => x,
      Nt: () => v,
      H: () => P,
      nH: () => C,
      qu: () => b,
      x9: () => f,
      ml: () => g,
      bD: () => k,
      $z: () => w,
      vo: () => p,
    })
    var n = a("ABep"),
      i = a("QosV"),
      r = a("Hg3i"),
      o = a("on57"),
      s = a("zd8w"),
      l = a("oyxz"),
      c = a("U5l8"),
      u = a("AWhs")
    let d = [
      "am-et",
      "ar",
      "bg-bg",
      "bn-bd",
      "bs-ba",
      "ca-es",
      "cs-cz",
      "da-dk",
      "de-de",
      "el-gr",
      "en",
      "es-419",
      "es-es",
      "et-ee",
      "fa-ir",
      "fi-fi",
      "fil-ph",
      "fr-fr",
      "fr-ca",
      "ga-ie",
      "gu-in",
      "he-il",
      "hi-in",
      "hr-hr",
      "hu-hu",
      "hy-am",
      "id-id",
      "is-is",
      "it-it",
      "ja-jp",
      "jv-id",
      "ka-ge",
      "kk-cyrl",
      "kn-in",
      "ko-kr",
      "lt-lt",
      "lv-lv",
      "mk-mk",
      "ml-in",
      "mn-mn",
      "mr-in",
      "ms-my",
      "mt-mt",
      "my-mm",
      "nb-no",
      "nl-nl",
      "pa-in",
      "pl-pl",
      "pt-br",
      "pt-pt",
      "ro-ro",
      "ru-ru",
      "sk-sk",
      "sl-si",
      "so-dj",
      "sq-al",
      "sr-rs",
      "sv-se",
      "sw-ke",
      "ta-in",
      "te-in",
      "th-th",
      "tr-tr",
      "uk-ua",
      "ur-in",
      "vi-vn",
    ]
    var h = a("Wf1j"),
      m = a("O3Pw")
    let p = [
      { planName: "chatgptprolite", checkoutPricingPlanType: "prolite", title: c.wA.standardUsage },
      { planName: "chatgptpro", checkoutPricingPlanType: "pro", title: c.wA.moreUsage },
      { planName: "chatgptpromax", checkoutPricingPlanType: "promax", title: c.wA.maxUsage },
    ]
    function f(e) {
      let t,
        a,
        o,
        c,
        p,
        f,
        g,
        C,
        b,
        x,
        y = (0, i.c)(36),
        { options: k, value: v, disabled: w, onChange: P, Link: M } = e,
        _ = (0, h.A)(),
        A = (0, s.useId)(),
        j = (0, s.useId)()
      ;(y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(l.A, {
            id: "CheckoutPlanSelector.usageTier.heading",
            defaultMessage: "Pro plan",
            description:
              "Heading above the three monthly usage tiers on Pro subscription checkout. Pro is the subscription name; users choose their usage allowance below. Short heading.",
          })),
          (y[0] = t))
        : (t = y[0]),
        y[1] !== A
          ? ((a = (0, n.jsx)("h3", { id: A, className: "text-lg font-semibold", children: t })), (y[1] = A), (y[2] = a))
          : (a = y[2]),
        y[3] !== M || y[4] !== _
          ? ((o = (0, n.jsx)(l.A, {
              id: "CheckoutPlanSelector.usageTier.description",
              defaultMessage: "Choose your usage level. <learnMore>Learn more</learnMore>",
              description:
                "Instruction below the Pro plan heading on subscription checkout. Users choose one of three usage allowances. The learnMore tag links to help about Pro plans; keep the whole sentence and link together.",
              values: {
                learnMore: (e) =>
                  (0, n.jsx)(M, {
                    className: `${u.A.usageHelpLink} underline-offset-4`,
                    href: `https://help.openai.com/${(function (e) {
                      let t
                      try {
                        t = new Intl.Locale(e.replaceAll("_", "-"))
                      } catch {
                        return "en"
                      }
                      if ("zh" === t.language) {
                        let { script: e, region: a } = t.maximize()
                        return "Hant" !== e ? "zh-hans-cn" : "HK" === a ? "zh-hant-hk" : "zh-hant"
                      }
                      let a = t.baseName.toLowerCase()
                      return d.includes(a)
                        ? a
                        : "hi" === t.language && "Latn" === t.script
                          ? "en"
                          : (d.find((e) => e === t.language || e.startsWith(`${t.language}-`)) ?? "en")
                    })(_.locale)}/articles/9793128`,
                    children: e,
                  }),
              },
            })),
            (y[3] = M),
            (y[4] = _),
            (y[5] = o))
          : (o = y[5]),
        y[6] !== j || y[7] !== o
          ? ((c = (0, n.jsx)("p", { id: j, className: "text-sm text-token-text-secondary", children: o })),
            (y[6] = j),
            (y[7] = o),
            (y[8] = c))
          : (c = y[8]),
        y[9] !== a || y[10] !== c
          ? ((p = (0, n.jsxs)("div", { className: "flex flex-col gap-1", children: [a, c] })),
            (y[9] = a),
            (y[10] = c),
            (y[11] = p))
          : (p = y[11]))
      let L = w || void 0
      if (
        (y[12] !== w
          ? ((f = (e) => {
              !(
                !e.metaKey &&
                !e.ctrlKey &&
                !e.altKey &&
                !e.shiftKey &&
                w &&
                ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
              ) || e.preventDefault()
            }),
            (y[12] = w),
            (y[13] = f))
          : (f = y[13]),
        y[14] !== w || y[15] !== P || y[16] !== k
          ? ((g = (e) => {
              let t = k.find((t) => t.value === e)
              w || null == t || t.disabled || null == t.price || P(t.value)
            }),
            (y[14] = w),
            (y[15] = P),
            (y[16] = k),
            (y[17] = g))
          : (g = y[17]),
        y[18] !== w || y[19] !== _ || y[20] !== k)
      ) {
        let e
        ;(y[22] !== w || y[23] !== _
          ? ((e = (e) =>
              (0, n.jsxs)(
                r.Item,
                {
                  type: "button",
                  value: e.value,
                  "aria-description": e.disabled ? _.formatMessage(m.JA.tooltip) : void 0,
                  title: e.disabled ? _.formatMessage(m.JA.tooltip) : void 0,
                  disabled: e.disabled || null == e.price,
                  "aria-disabled": w || e.disabled || null == e.price || void 0,
                  className:
                    "interactive-button group flex min-w-0 flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-token-bg-tertiary px-2 py-4 text-center text-token-text-secondary select-none focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-60 data-[state=checked]:border-token-text-tertiary data-[state=checked]:bg-token-bg-primary data-[state=checked]:text-token-text-primary sm:py-6",
                  children: [
                    (0, n.jsx)("span", { className: "text-lg font-semibold", children: e.price ?? "\u2014" }),
                    (0, n.jsx)("span", {
                      className:
                        "text-sm text-token-text-tertiary group-data-[state=checked]:text-token-text-secondary",
                      children: (0, n.jsx)(l.A, { ...e.title }),
                    }),
                  ],
                },
                e.value,
              )),
            (y[22] = w),
            (y[23] = _),
            (y[24] = e))
          : (e = y[24]),
          (C = k.map(e)),
          (y[18] = w),
          (y[19] = _),
          (y[20] = k),
          (y[21] = C))
      } else C = y[21]
      return (
        y[25] !== j || y[26] !== A || y[27] !== L || y[28] !== f || y[29] !== g || y[30] !== C || y[31] !== v
          ? ((b = (0, n.jsx)(r.Root, {
              className: "grid grid-cols-1 gap-2 sm:auto-cols-fr sm:grid-flow-col sm:grid-cols-none",
              "aria-labelledby": A,
              "aria-describedby": j,
              value: v,
              "aria-disabled": L,
              onKeyDownCapture: f,
              onValueChange: g,
              children: C,
            })),
            (y[25] = j),
            (y[26] = A),
            (y[27] = L),
            (y[28] = f),
            (y[29] = g),
            (y[30] = C),
            (y[31] = v),
            (y[32] = b))
          : (b = y[32]),
        y[33] !== b || y[34] !== p
          ? ((x = (0, n.jsxs)("div", { className: "flex flex-col gap-4", children: [p, b] })),
            (y[33] = b),
            (y[34] = p),
            (y[35] = x))
          : (x = y[35]),
        x
      )
    }
    function g(e) {
      let t,
        a,
        r,
        o,
        s,
        d = (0, i.c)(13),
        { Link: h, messageRef: m, returnTo: p, showReturnAction: f, isDarkMode: g } = e,
        C = void 0 === f || f,
        b = void 0 !== g && g ? "dark" : "light"
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(l.A, { ...c.aB.errorProcessingPayment })), (d[0] = t))
          : (t = d[0]),
        d[1] !== m
          ? ((a = (0, n.jsx)("span", { ref: m, className: "text-center text-sm", role: "alert", children: t })),
            (d[1] = m),
            (d[2] = a))
          : (a = d[2]),
        d[3] !== h || d[4] !== p || d[5] !== C
          ? ((r = C
              ? (0, n.jsx)(h, {
                  className: `${u.A.button} interactive-button-primary touch:min-h-10 pointer-events-auto relative inline-flex min-h-9 shrink-0 items-center justify-center rounded-full border border-transparent px-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-10`,
                  to: p,
                  children: (0, n.jsx)("span", {
                    className: "flex items-center justify-center",
                    children: (0, n.jsx)(l.A, { ...c.aB.returnButtonText }),
                  }),
                })
              : null),
            (d[3] = h),
            (d[4] = p),
            (d[5] = C),
            (d[6] = r))
          : (r = d[6]),
        d[7] !== a || d[8] !== r
          ? ((o = (0, n.jsx)("div", {
              className: "flex flex-1 items-center justify-center",
              children: (0, n.jsxs)("div", { className: "flex flex-col items-center gap-3", children: [a, r] }),
            })),
            (d[7] = a),
            (d[8] = r),
            (d[9] = o))
          : (o = d[9]),
        d[10] !== b || d[11] !== o
          ? ((s = (0, n.jsx)("div", {
              className: `${u.A.root} flex h-screen flex-col p-4`,
              "data-checkout-theme": b,
              children: o,
            })),
            (d[10] = b),
            (d[11] = o),
            (d[12] = s))
          : (s = d[12]),
        s
      )
    }
    function C(e) {
      let t,
        a,
        r = (0, i.c)(5),
        { children: o, className: s } = e
      r[0] !== s
        ? ((t = [
            "rounded-full px-2 py-1.5 text-xs font-medium uppercase bg-blue-400/[.09] text-blue-500 dark:bg-blue-100/20 dark:text-blue-100",
            s,
          ].filter(Boolean)),
          (r[0] = s),
          (r[1] = t))
        : (t = r[1])
      let l = t.join(" ")
      return (
        r[2] !== o || r[3] !== l
          ? ((a = (0, n.jsx)("div", { className: l, children: o })), (r[2] = o), (r[3] = l), (r[4] = a))
          : (a = r[4]),
        a
      )
    }
    function b(e) {
      let t,
        a,
        s,
        l,
        c = (0, i.c)(19),
        { options: u, value: d, disabled: h, onChange: m, variant: p } = e,
        f = void 0 === p ? "plan" : p,
        g = u.length > 1 && "md:grid-cols-2",
        C = "business-totals" === f && "[--badge-radius-sm:var(--radius-md)] [--color-text-info-solid:var(--white)]"
      if (
        (c[0] !== g || c[1] !== C
          ? ((t = (0, o.A)("grid w-full grid-cols-1 gap-3", g, C)), (c[0] = g), (c[1] = C), (c[2] = t))
          : (t = c[2]),
        c[3] !== m || c[4] !== u
          ? ((a = (e) => {
              let t = u.find((t) => t.value === e)
              null != t && m(t.value)
            }),
            (c[3] = m),
            (c[4] = u),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== u || c[7] !== d || c[8] !== f)
      ) {
        let e
        ;(c[10] !== d || c[11] !== f
          ? ((e = (e) =>
              (0, n.jsx)(
                r.Item,
                {
                  value: e.value,
                  disabled: e.disabled,
                  title: e.description,
                  "aria-description": e.description,
                  className: [
                    "group hover:border-token-border-heavy relative flex w-full cursor-pointer rounded-2xl border text-start transition-[border-color] focus-visible:outline-2 focus-visible:outline-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60",
                    "business-totals" === f
                      ? "min-w-0 flex-col gap-2 border-token-border-default bg-token-bg-primary p-4 hover:bg-token-bg-tertiary data-[state=checked]:border-2 data-[state=checked]:border-token-text-tertiary"
                      : "business" === f
                        ? "border-token-border-default bg-token-bg-primary min-h-[58px] items-center gap-2 px-4 py-1 data-[state=checked]:border-2 data-[state=checked]:border-[#8f8f8f] data-[state=checked]:shadow-[0_4px_8px_0_rgba(0,0,0,0.05)]"
                        : "flex-col border-[#f7f7f7] bg-[#f7f7f7] p-4 align-top duration-100 data-[state=checked]:elevated data-[state=checked]:bg-token-bg-primary data-[state=checked]:shadow-[0_4px_16px_0_rgba(0,0,0,0.05)] dark:border-[#303030] dark:bg-[#303030]",
                    "plan" === f
                      ? "data-[state=checked]:border-2 data-[state=checked]:border-token-interactive-border-focus"
                      : "cadence" === f
                        ? "data-[state=checked]:border-token-border-default dark:data-[state=checked]:border-token-border-heavy"
                        : "",
                  ].join(" "),
                  children:
                    "business-totals" === f
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsxs)("span", {
                              className: "flex w-full items-center justify-between gap-2",
                              children: [
                                (0, n.jsx)("span", {
                                  className:
                                    "flex size-5 shrink-0 items-center justify-center rounded-full border border-token-border-default group-data-[state=checked]:border-token-text-primary group-data-[state=checked]:bg-token-text-primary",
                                  children:
                                    d === e.value
                                      ? (0, n.jsx)("span", { className: "size-2 rounded-full bg-token-bg-primary" })
                                      : null,
                                }),
                                e.badge,
                              ],
                            }),
                            (0, n.jsxs)("span", {
                              className: "flex w-full flex-col",
                              children: [
                                (0, n.jsx)("span", {
                                  className: "text-base font-semibold text-token-text-primary",
                                  children: e.title,
                                }),
                                null != e.price
                                  ? (0, n.jsx)("span", {
                                      className: "text-sm text-token-text-secondary",
                                      children: e.price,
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            "business" === f
                              ? (0, n.jsx)("span", {
                                  className:
                                    "flex size-5 shrink-0 items-center justify-center rounded-full border border-token-border-default group-data-[state=checked]:border-token-text-primary group-data-[state=checked]:bg-token-text-primary",
                                  children:
                                    d === e.value
                                      ? (0, n.jsx)("span", { className: "size-2 rounded-full bg-token-bg-primary" })
                                      : null,
                                })
                              : null,
                            (0, n.jsxs)("span", {
                              className:
                                "business" === f
                                  ? "flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1"
                                  : "flex w-full items-start justify-between gap-2",
                              children: [
                                (0, n.jsx)("span", {
                                  className:
                                    "business" === f
                                      ? "max-w-full shrink-0 text-[14px] font-semibold tracking-[-0.4px] text-token-text-primary"
                                      : `min-w-0 flex-1 text-base font-medium ${"cadence" === f ? "leading-tight" : ""} ${d !== e.value ? "text-token-text-tertiary" : ""}`,
                                  children: e.title,
                                }),
                                e.badge,
                              ],
                            }),
                            null != e.price
                              ? (0, n.jsx)("span", {
                                  className: `flex text-sm ${"cadence" === f ? "mt-3 gap-1.5" : "mt-2 gap-1"} ${d === e.value ? "text-token-text-secondary" : "text-token-text-tertiary"}`,
                                  children: e.price,
                                })
                              : null,
                          ],
                        }),
                },
                e.value,
              )),
            (c[10] = d),
            (c[11] = f),
            (c[12] = e))
          : (e = c[12]),
          (s = u.map(e)),
          (c[6] = u),
          (c[7] = d),
          (c[8] = f),
          (c[9] = s))
      } else s = c[9]
      return (
        c[13] !== h || c[14] !== t || c[15] !== a || c[16] !== s || c[17] !== d
          ? ((l = (0, n.jsx)(r.Root, { className: t, value: d, disabled: h, onValueChange: a, children: s })),
            (c[13] = h),
            (c[14] = t),
            (c[15] = a),
            (c[16] = s),
            (c[17] = d),
            (c[18] = l))
          : (l = c[18]),
        l
      )
    }
    function x(e) {
      let t,
        a,
        r,
        o,
        s = (0, i.c)(8)
      return (
        s[0] !== e ? (({ options: t, ...a } = e), (s[0] = e), (s[1] = t), (s[2] = a)) : ((t = s[1]), (a = s[2])),
        s[3] !== t ? ((r = t.map(y)), (s[3] = t), (s[4] = r)) : (r = s[4]),
        s[5] !== a || s[6] !== r
          ? ((o = (0, n.jsx)(b, { ...a, variant: "cadence", options: r })), (s[5] = a), (s[6] = r), (s[7] = o))
          : (o = s[7]),
        o
      )
    }
    function y(e) {
      return {
        value: e.value,
        title: (0, n.jsx)(l.A, { ...e.title }),
        price: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", { children: e.priceText }),
            (0, n.jsx)("span", { children: (0, n.jsx)(l.A, { ...c.M1.costStructure }) }),
          ],
        }),
        badge: e.badgeText ? (0, n.jsx)(C, { className: "shrink-0 whitespace-nowrap", children: e.badgeText }) : null,
      }
    }
    function k(e) {
      let t,
        a,
        r,
        o,
        l,
        c = (0, i.c)(13),
        { message: d, scrollRequest: h, isPaymentSubmitted: m, children: p } = e,
        f = void 0 === h ? 0 : h,
        g = void 0 !== m && m,
        C = (0, s.useRef)(null)
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            C.current?.scrollIntoView({ behavior: "smooth", block: "center" })
          }),
          (c[0] = t))
        : (t = c[0]),
        c[1] !== d || c[2] !== f ? ((a = [d, f]), (c[1] = d), (c[2] = f), (c[3] = a)) : (a = c[3]),
        (0, s.useEffect)(t, a))
      let b = g ? "status" : "alert",
        x = g ? "border-token-border-default bg-token-bg-secondary text-token-text-primary" : u.A.submitError
      c[4] !== x
        ? ((r = ["mb-3 flex flex-wrap items-center gap-3 rounded-2xl border px-3 py-2 text-[13px]", x]),
          (c[4] = x),
          (c[5] = r))
        : (r = c[5])
      let y = r.join(" ")
      return (
        c[6] !== d
          ? ((o = (0, n.jsx)("span", { className: "min-w-0 flex-1 text-[16px] font-medium", children: d })),
            (c[6] = d),
            (c[7] = o))
          : (o = c[7]),
        c[8] !== p || c[9] !== b || c[10] !== y || c[11] !== o
          ? ((l = (0, n.jsxs)("div", { ref: C, role: b, className: y, children: [o, p] })),
            (c[8] = p),
            (c[9] = b),
            (c[10] = y),
            (c[11] = o),
            (c[12] = l))
          : (l = c[12]),
        l
      )
    }
    function v(e) {
      let t,
        a,
        r,
        o,
        s,
        l,
        c,
        u,
        d,
        h,
        m,
        p = (0, i.c)(24)
      p[0] !== e
        ? (({ children: t, errors: o, endAnchor: r, spacing: c, className: a, pageVariant: s, ...l } = e),
          (p[0] = e),
          (p[1] = t),
          (p[2] = a),
          (p[3] = r),
          (p[4] = o),
          (p[5] = s),
          (p[6] = l),
          (p[7] = c))
        : ((t = p[1]), (a = p[2]), (r = p[3]), (o = p[4]), (s = p[5]), (l = p[6]), (c = p[7]))
      let f = void 0 === c ? "standard" : c,
        g =
          "modal-credit" === f &&
          "w-full [&_h3]:text-body-emphasized [&_h3[data-checkout-heading=standaloneCredit]]:tracking-normal",
        C = s && "w-full max-w-[calc(100vw-48px)] sm:max-w-[100%]",
        b = "wallet" === s || "pro-usage" === s ? "sm:w-[527px]" : "standard" === s ? "sm:w-[486px]" : void 0
      p[8] !== a || p[9] !== g || p[10] !== C || p[11] !== b
        ? ((u = [a, g, C, b].filter(Boolean)), (p[8] = a), (p[9] = g), (p[10] = C), (p[11] = b), (p[12] = u))
        : (u = p[12])
      let x = u.join(" "),
        y = `flex flex-col ${"credit" === f ? "gap-8" : "promo" === f || "modal-credit" === f ? "gap-4" : "compact" === f ? "gap-3" : "gap-6"}`
      return (
        p[13] !== r ? ((d = null != r ? (0, n.jsx)("div", { ...r }) : null), (p[13] = r), (p[14] = d)) : (d = p[14]),
        p[15] !== t || p[16] !== y || p[17] !== d
          ? ((h = (0, n.jsxs)("div", { className: y, children: [t, d] })),
            (p[15] = t),
            (p[16] = y),
            (p[17] = d),
            (p[18] = h))
          : (h = p[18]),
        p[19] !== o || p[20] !== l || p[21] !== x || p[22] !== h
          ? ((m = (0, n.jsxs)("form", { ...l, className: x, children: [o, h] })),
            (p[19] = o),
            (p[20] = l),
            (p[21] = x),
            (p[22] = h),
            (p[23] = m))
          : (m = p[23]),
        m
      )
    }
    function w(e) {
      let t,
        a,
        r,
        o,
        s,
        l,
        c,
        u,
        d,
        h,
        m,
        p,
        f = (0, i.c)(26)
      return (
        f[0] !== e
          ? (({
              optional: o,
              walletOnly: u,
              warnings: d,
              title: c,
              description: r,
              addPaymentMethod: t,
              skipPaymentMethod: l,
              children: a,
              ...s
            } = e),
            (f[0] = e),
            (f[1] = t),
            (f[2] = a),
            (f[3] = r),
            (f[4] = o),
            (f[5] = s),
            (f[6] = l),
            (f[7] = c),
            (f[8] = u),
            (f[9] = d))
          : ((t = f[1]),
            (a = f[2]),
            (r = f[3]),
            (o = f[4]),
            (s = f[5]),
            (l = f[6]),
            (c = f[7]),
            (u = f[8]),
            (d = f[9])),
        f[10] !== t || f[11] !== r || f[12] !== o || f[13] !== s || f[14] !== c || f[15] !== u || f[16] !== d
          ? ((h = o
              ? (0, n.jsxs)("section", {
                  className: "flex flex-col gap-3",
                  ...s,
                  children: [
                    d,
                    (0, n.jsx)("h3", { className: "text-lg font-semibold", children: c }),
                    (0, n.jsx)("p", { className: "text-sm text-token-text-secondary", children: r }),
                    u ? (0, n.jsx)("div", { children: t }) : null,
                  ],
                })
              : null),
            (f[10] = t),
            (f[11] = r),
            (f[12] = o),
            (f[13] = s),
            (f[14] = c),
            (f[15] = u),
            (f[16] = d),
            (f[17] = h))
          : (h = f[17]),
        f[18] !== o || f[19] !== l || f[20] !== u
          ? ((m = o && !u ? (0, n.jsx)("div", { children: l }) : null),
            (f[18] = o),
            (f[19] = l),
            (f[20] = u),
            (f[21] = m))
          : (m = f[21]),
        f[22] !== a || f[23] !== h || f[24] !== m
          ? ((p = (0, n.jsxs)(n.Fragment, { children: [h, a, m] })), (f[22] = a), (f[23] = h), (f[24] = m), (f[25] = p))
          : (p = f[25]),
        p
      )
    }
    function P(e) {
      let t,
        a,
        r,
        o,
        s,
        u,
        d,
        h = (0, i.c)(20),
        { announce: m, Icon: p, TermsArrow: f, offer: g, Link: C, termsHref: b, onTermsClick: x } = e,
        y = void 0 === C ? M : C,
        k = void 0 === b ? "https://openai.com/terms/" : b,
        v = m ? "status" : void 0,
        w = m ? "polite" : void 0
      return (
        h[0] !== p
          ? ((t = (0, n.jsx)(p, { "aria-hidden": !0, className: "h-5 w-5 text-blue-500 dark:text-blue-100" })),
            (h[0] = p),
            (h[1] = t))
          : (t = h[1]),
        h[2] !== g ? ((a = (0, n.jsx)("span", { children: g })), (h[2] = g), (h[3] = a)) : (a = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(l.A, { ...c.de.viewTerms })), (h[4] = r))
          : (r = h[4]),
        h[5] !== f
          ? ((o = (0, n.jsx)(f, { "aria-hidden": !0, className: "h-3 w-3 text-current" })), (h[5] = f), (h[6] = o))
          : (o = h[6]),
        h[7] !== y || h[8] !== x || h[9] !== o || h[10] !== k
          ? ((s = (0, n.jsxs)(y, {
              href: k,
              className: "inline-flex items-center gap-1 text-blue-500 underline dark:text-blue-100",
              onClick: x,
              children: [r, o],
            })),
            (h[7] = y),
            (h[8] = x),
            (h[9] = o),
            (h[10] = k),
            (h[11] = s))
          : (s = h[11]),
        h[12] !== t || h[13] !== a || h[14] !== s
          ? ((u = (0, n.jsxs)("div", {
              className: "mx-auto inline-flex flex-wrap items-center justify-center gap-2",
              children: [t, a, s],
            })),
            (h[12] = t),
            (h[13] = a),
            (h[14] = s),
            (h[15] = u))
          : (u = h[15]),
        h[16] !== u || h[17] !== v || h[18] !== w
          ? ((d = (0, n.jsx)("div", {
              className:
                "flex w-full items-center bg-blue-400/[.09] px-4 py-3 text-center text-sm font-medium text-token-text-primary dark:bg-blue-100/20",
              role: v,
              "aria-live": w,
              children: u,
            })),
            (h[16] = u),
            (h[17] = v),
            (h[18] = w),
            (h[19] = d))
          : (d = h[19]),
        d
      )
    }
    function M(e) {
      let t,
        a,
        r,
        o = (0, i.c)(6)
      return (
        o[0] !== e ? (({ children: t, ...a } = e), (o[0] = e), (o[1] = t), (o[2] = a)) : ((t = o[1]), (a = o[2])),
        o[3] !== t || o[4] !== a
          ? ((r = (0, n.jsx)("a", { ...a, target: "_blank", rel: "noreferrer", children: t })),
            (o[3] = t),
            (o[4] = a),
            (o[5] = r))
          : (r = o[5]),
        r
      )
    }
  },
  FeI5(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      r = a("oyxz"),
      o = a("Yy67")
    a.d(
      t,
      {},
      {
        O: function (e) {
          let t,
            a,
            s,
            l,
            c = (0, i.c)(13),
            {
              autoReloadEnabled: u,
              savedPaymentConsentMode: d,
              Link: h,
              onLinkClick: m,
              saveChoiceDisclosure: p,
              children: f,
              billingCountry: g,
            } = e,
            C = void 0 === d ? "none" : d
          c[0] !== h || c[1] !== m
            ? ((t = {
                serviceCreditTermsLink: (e) =>
                  (0, n.jsx)(h, {
                    className: "underline decoration-dotted underline-offset-2",
                    href: "https://openai.com/policies/service-credit-terms/",
                    onClick: null == m ? void 0 : () => m("https://openai.com/policies/service-credit-terms/"),
                    children: e,
                  }),
              }),
              (c[0] = h),
              (c[1] = m),
              (c[2] = t))
            : (t = c[2])
          let b = t
          c[3] !== u || c[4] !== b
            ? ((a = u
                ? (0, n.jsx)(r.A, {
                    id: "StandaloneCreditCheckoutModal.autoReloadDisclaimer",
                    defaultMessage:
                      "By paying, you agree to the <serviceCreditTermsLink>Service Credit Terms</serviceCreditTermsLink> and authorize OpenAI to save and automatically charge this payment method for auto-reload.",
                    description:
                      "Centered legal sentence below the payment button in the in-place personal Codex credit purchase modal after the purchaser turns on auto-reload. It states that paying accepts the Service Credit Terms and authorizes OpenAI to save and automatically charge the selected payment method for future auto-reloads. The serviceCreditTermsLink tag links the exact words 'Service Credit Terms' to the policy in a new browser tab. Compact footer copy with no other placeholders.",
                    values: b,
                  })
                : (0, n.jsx)(r.A, {
                    id: "StandaloneCreditCheckoutModal.disclaimer",
                    defaultMessage:
                      "By paying, you agree to the <serviceCreditTermsLink>Service Credit Terms</serviceCreditTermsLink>.",
                    description:
                      "Centered legal sentence below the payment button in the in-place personal Codex credit purchase modal when auto-reload is off or unavailable. It tells the purchaser that paying accepts the Service Credit Terms. The serviceCreditTermsLink tag links the exact words 'Service Credit Terms' to the policy in a new browser tab. Compact footer copy with no other placeholders.",
                    values: b,
                  })),
              (c[3] = u),
              (c[4] = b),
              (c[5] = a))
            : (a = c[5])
          let x = "none" === C || "saved_card" === C || ("new_card_unsaved" === C && u) ? null : p
          return (
            c[6] !== g
              ? ((s =
                  "KR" === g
                    ? (0, n.jsxs)(n.Fragment, { children: [" ", (0, n.jsx)(r.A, { ...o.L_.krRefundRequestSentence })] })
                    : null),
                (c[6] = g),
                (c[7] = s))
              : (s = c[7]),
            c[8] !== f || c[9] !== a || c[10] !== x || c[11] !== s
              ? ((l = (0, n.jsxs)("div", {
                  className: "text-center text-xs leading-4 text-token-text-tertiary",
                  children: [a, x, s, f],
                })),
                (c[8] = f),
                (c[9] = a),
                (c[10] = x),
                (c[11] = s),
                (c[12] = l))
              : (l = c[12]),
            l
          )
        },
      },
    )
  },
  xLHD(e, t, a) {
    var n = a("Qgfj"),
      i = a("EuT1"),
      r = a("B2b6"),
      o = a("Zy8A")
    function s(e) {
      return "string" == typeof e && e.trim().length > 0
    }
    let l = (0, n.YK)({
        applePayBillingAgreement: {
          id: "CheckoutForm.applePayBillingAgreement",
          defaultMessage:
            "By providing your card information, you allow {merchantName} to charge your card for future payments in accordance with their terms.",
          description:
            "Body text shown to an end user in the compact Apple Pay authorization sheet after they choose Apple Pay for a free trial that renews into a paid subscription. It explains that the merchant may charge the card for future recurring payments. Keep this as one concise plain-text sentence; Markdown, HTML, and line breaks are not supported. {merchantName} is a non-empty string containing the full legal name of the OpenAI entity that will make future charges. This message has no fallback for an empty merchant name.",
        },
        applePayPlanLabel: {
          id: "CheckoutForm.applePayPlanLabel",
          defaultMessage: "{planName} plan",
          description:
            "Short line-item label shown to an end user in the compact Apple Pay authorization sheet after they choose Apple Pay for a free trial that renews into a paid subscription. It identifies the recurring paid plan. Keep this as a concise single-line plain-text label; Markdown, HTML, and line breaks are not supported. {planName} is a non-empty string containing the official product tier name, such as Plus, without the word plan. This message has no fallback for an empty plan name.",
        },
        applePayTrialLabel: {
          id: "CheckoutForm.applePayTrialLabel",
          defaultMessage: "{trialDurationInDays, plural, one {# day free} other {# days free}}",
          description:
            "Short line-item label shown to an end user in the compact Apple Pay authorization sheet after they choose Apple Pay for a free trial that renews into a paid subscription. It identifies the no-cost period before recurring charges begin. Keep this as a concise single-line plain-text label; Markdown, HTML, and line breaks are not supported. {trialDurationInDays} is a positive integer count of calendar days; ICU plural rules use the singular form for one day and the plural form for all other values, while # renders the localized count. A zero or unknown duration never uses this message and instead uses the separate Free trial fallback.",
        },
        applePayTrialLabelUnknown: {
          id: "CheckoutForm.applePayTrialLabelUnknown",
          defaultMessage: "Free trial",
          description:
            "Short fallback line-item label shown to an end user in the compact Apple Pay authorization sheet after they choose Apple Pay for a free trial that renews into a paid subscription. It identifies the current no-cost period when the exact duration is zero or unavailable. Keep this as a concise single-line plain-text label; Markdown, HTML, and line breaks are not supported. This message has no placeholders and must make sense without a duration or adjacent explanatory text.",
        },
      }),
      c = new Set(["BR", "IN", "TH"]),
      u = new Set(["go-1-month-free", "plus-1-month-free"]),
      d = { "go-1-month-free": 30, "plus-1-month-free": 30, "plus-1-month-free-for-go": 30 }
    a.d(
      t,
      {},
      {
        Bp: function ({
          checkoutState: e,
          expressPaymentType: t,
          intl: a,
          isFreeTrial: n,
          managementURL: i,
          planName: r,
          processorEntity: o,
          trialDurationInDays: s,
        }) {
          let c = e.lineItems.filter((e) => null != e.recurring),
            u = c[0]
          if ("apple_pay" !== t || !n || u?.recurring == null) return
          let d = a.formatMessage(l.applePayBillingAgreement, {
              merchantName: "openai_ie" === o ? "OpenAI Ireland Limited" : "OpenAI OpCo, LLC",
            }),
            h = a.formatMessage(l.applePayPlanLabel, { planName: r }),
            m = a.formatMessage(
              s > 0 ? l.applePayTrialLabel : l.applePayTrialLabelUnknown,
              s > 0 ? { trialDurationInDays: s } : void 0,
            )
          return {
            applePay: {
              recurringPaymentRequest: {
                billingAgreement: d,
                paymentDescription: h,
                managementURL: i,
                regularBilling: {
                  amount: c.reduce(
                    (e, t) =>
                      e +
                      (null != t.unitAmount ? t.unitAmount.minorUnitsAmount * t.quantity : t.subtotal.minorUnitsAmount),
                    0,
                  ),
                  label: h,
                  ...(s > 0 ? { recurringPaymentStartDate: new Date(Date.now() + 864e5 * s) } : {}),
                  recurringPaymentIntervalUnit: "week" === u.recurring.interval ? "day" : u.recurring.interval,
                  recurringPaymentIntervalCount:
                    (u.recurring.intervalCount ?? 1) * ("week" === u.recurring.interval ? 7 : 1),
                },
                trialBilling: { amount: e.total.total.minorUnitsAmount, label: m },
              },
            },
          }
        },
        GG: async function ({
          event: e,
          checkoutSessionId: t,
          useMinimalBillingAddress: a = !1,
          quote: n,
          updateBillingQuote: r,
        }) {
          let l,
            c = !(function (e, t = !1, a) {
              let n = e?.address
              return (
                !!s(n?.country) &&
                (t
                  ? (0, i.Nu)(n.country, n.postal_code)
                  : (0, o.gD)(a)
                    ? (0, i.lu)({ billingName: e?.name, billingAddress: n })
                    : !!(s(e?.name) && s(n?.line1) && s(n?.city) && s(n?.postal_code)))
              )
            })((l = e.billingDetails), a, t)
              ? null
              : {
                  elementType: "address",
                  elementMode: "billing",
                  empty: !1,
                  complete: !0,
                  isNewAddress: !0,
                  value: {
                    name: l.name ?? "",
                    address: {
                      line1: l.address?.line1 ?? "",
                      line2: l.address?.line2 ?? "",
                      city: l.address?.city ?? "",
                      state: l.address?.state ?? "",
                      postal_code: l.address?.postal_code ?? "",
                      country: l.address?.country ?? "",
                    },
                  },
                }
          if (null == c) return (e.paymentFailed({ reason: "invalid_billing_address" }), null)
          await n.request(JSON.stringify(["express_checkout", e.billingDetails]), (t) =>
            r(c, e.billingDetails?.email, t),
          )
          let u = n.getSnapshot()
          if (u.error) throw u.error
          return (n.assertCurrent(u), c)
        },
        NQ: function (e, { initialPromoCode: t, initialPromoCampaignId: a }) {
          let n = e?.total?.total?.minorUnitsAmount,
            i = null != a && u.has(a),
            r = 0 === n && null != a && (null == t || i),
            o = (e?.discountAmounts ?? []).reduce(
              (e, t) => (t.recurring?.type !== "repeating" ? e : Math.max(e, t.recurring.durationInMonths ?? 0)),
              0,
            ),
            s = null == a ? 0 : (d[a] ?? 0)
          return { isFreeTrial: r, isFirstMonthFreeTrial: r && i, trialDurationInDays: o > 0 ? 30 * o : s }
        },
        qT: function (e) {
          return null != e && Object.values(e).some(Boolean)
        },
        wU: function (e, t) {
          let a = e.payment_method_types,
            n = e.billing_details?.country
          return (
            "open_ai" === e.checkout_provider &&
            t === r.td.Standard &&
            "chatgptplusplan" === e.plan_name &&
            e.promo_campaign?.promo_campaign_id === "plus-1-month-free" &&
            null != n &&
            c.has(n) &&
            a?.includes("card") === !0 &&
            a.includes("link")
          )
        },
      },
    )
  },
  avvo(e, t, a) {
    a.d(t, {
      aR: () => m,
      qg: () => h,
      q9: () => o,
      hM: () => k,
      uj: () => P,
      Iu: () => v,
      VV: () => p,
      DR: () => x,
      LE: () => y,
      AC: () => b,
      yt: () => d,
      mA: () => w,
      w3: () => M,
      yn: () => c,
      DO: () => f,
    })
    var n = a("wiO6"),
      i = a("RY1E")
    let r = (0, i.Y)({
        featureWorkAgent: {
          id: "pricing.tpp.feature.workAgent",
          defaultMessage: "Work agent for multi-step tasks",
          description:
            "Short feature-row label on ChatGPT Plus and Business pricing cards and on Plus and Pro checkout plan summaries. It tells prospective subscribers that the plan includes the Work product agent for multi-step tasks. Keep 'Work' as the product name and preserve its capitalization. No placeholders.",
        },
        featureCodexAgentForCoding: {
          id: "pricing.tpp.feature.codexAgentForCoding",
          defaultMessage: "Codex agent for coding",
          description:
            "Short feature-row label on the ChatGPT Plus pricing card and on Plus and Pro checkout plan summaries. It tells prospective subscribers that the plan includes the Codex product agent for coding. Keep 'Codex' as the product name and preserve its capitalization. No placeholders.",
        },
        featureMaximumCodexAgent: {
          id: "pricing.tpp.feature.maximumCodexAgent",
          defaultMessage: "Maximum access to Codex agent",
          description:
            "Short feature-row label on the ChatGPT Pro pricing card. It tells prospective Pro subscribers that the plan provides the highest offered access level to the Codex product agent. Keep 'Codex' as the product name and preserve its capitalization. No placeholders.",
        },
        featureMaximumWorkAgent: {
          id: "pricing.tpp.feature.maximumWorkAgent",
          defaultMessage: "Maximum access to Work agent",
          description:
            "Short feature-row label on the ChatGPT Pro pricing card. It tells prospective Pro subscribers that the plan provides the highest offered access level to the Work product agent. Keep 'Work' as the product name and preserve its capitalization. No placeholders.",
        },
        featureExpandedCodexAndWorkUsage: {
          id: "pricing.tpp.feature.expandedCodexAndWorkUsage",
          defaultMessage: "Expanded Codex and Work usage",
          description:
            "Short feature-row label on contextual ChatGPT Plus pricing and checkout surfaces. It tells prospective subscribers that Plus includes expanded usage allowances for both the Codex and Work products. Keep 'Codex' and 'Work' as product names and preserve their capitalization. No placeholders.",
        },
      }),
      o = (0, i.Y)({
        cancelAnytime: {
          id: "pricingPlanConstants.freeTrial.cancelAnytime",
          defaultMessage: "Cancel anytime",
          description: "Free trial checkout message: cancel anytime",
        },
        remindYouBeforeTrialEnds: {
          id: "pricingPlanConstants.freeTrial.remindYouBeforeTrialEnds",
          defaultMessage: "We'll remind you before your trial ends",
          description: "Free trial checkout message: remind you before trial ends",
        },
      }),
      s = (0, i.Y)({
        featureExpandedMessagesUploads: {
          id: "pricing.plusRedesign.feature.expandedMessagesUploads",
          defaultMessage: "Expanded messaging and uploads",
          description: "Plus plan feature: expanded messaging/uploads",
        },
        featureMoreImageCreation: {
          id: "pricing.plusRedesign.feature.moreImageCreation",
          defaultMessage: "More image creation, faster loading",
          description: "Plus plan feature: more/faster image generation",
        },
        featureExpandedDeepResearchAgentMode: {
          id: "pricing.plusRedesign.feature.expandedDeepResearchAgentMode",
          defaultMessage: "Expanded deep research and agent mode",
          description: "Plus plan feature: more deep research + agent mode",
        },
      }),
      l = (0, i.Y)({
        featureEverythingInFree: {
          id: "pricingPlanConstants.go.checkout.featureEverythingInFree",
          defaultMessage: "Smarter, faster responses with GPT-5",
          description:
            "Checkout redesign value prop explaining that Go provides smarter, faster responses powered by GPT-5.",
        },
        featureGPT5Extended: {
          id: "pricingPlanConstants.go.checkout.featureGPT5Extended",
          defaultMessage: "More messages & uploads",
          description:
            "Checkout redesign value prop explaining that Go increases the number of messages and uploads available each month.",
        },
        featureImgGenExtended: {
          id: "pricingPlanConstants.go.checkout.featureImgGenExtended",
          defaultMessage: "Create more images, faster",
          description: "Checkout redesign value prop explaining that the Go plan speeds up image generation.",
        },
        featureFileUploadsExtended: {
          id: "pricingPlanConstants.go.checkout.featureFileUploadsExtended",
          defaultMessage: "Extra memory & context",
          description:
            "Checkout redesign value prop explaining that Go offers more memory for longer context and uploads.",
        },
      }),
      c = (0, i.Y)({
        featureAdvancedIntelligence: {
          id: "pricingPlanConstants.plus.checkout.featureAdvancedIntelligence",
          defaultMessage: "Advanced intelligence for complex work",
          description:
            "Short feature-row label in the ChatGPT Plus checkout plan summary shown after a prospective subscriber selects Plus. It communicates that Plus includes advanced intelligence suited to complex work. Keep the label concise so it fits beside a 20px icon; plain text only, with no placeholders. The label must remain meaningful if shown outside the surrounding feature list.",
        },
        featureFasterImages: {
          id: "pricingPlanConstants.plus.checkout.featureFasterImages",
          defaultMessage: "Faster, higher-quality image creation",
          description:
            "Checkout redesign value prop describing that Plus accelerates image creation while improving quality.",
        },
        featureCodexAutomateCoding: {
          id: "pricingPlanConstants.plus.checkout.featureCodexAutomateCoding",
          defaultMessage: "Codex to automate coding",
          description:
            "Short feature-row label in the ChatGPT Plus checkout plan summary shown after a prospective subscriber selects Plus. It communicates that Codex can automate coding work. Keep 'Codex' as the product name with this capitalization and keep the label concise beside a 20px icon; plain text only, with no placeholders. The label must remain meaningful if shown outside the surrounding feature list.",
        },
        featureEmailCalendarConnections: {
          id: "pricingPlanConstants.plus.checkout.featureEmailCalendarConnections",
          defaultMessage: "Email and calendar connections",
          description:
            "Short feature-row label in the ChatGPT Plus checkout plan summary shown after a prospective subscriber selects Plus. It communicates that Plus can connect to email and calendar services. Keep the label concise beside a 20px icon; plain text only, with no placeholders. The label must remain meaningful if shown outside the surrounding feature list.",
        },
      }),
      u = (0, i.Y)({
        modelAccess: {
          id: "pricingPlanConstants.rosalindAcademic.checkout.modelAccess",
          defaultMessage: "Expanded access to GPT-Rosalind",
          description:
            "Feature shown in checkout for an approved lab activating the Rosalind Academic Plan. Keep the GPT-Rosalind model name unchanged.",
        },
        workspace: {
          id: "pricingPlanConstants.rosalindAcademic.checkout.workspace",
          defaultMessage: "A shared workspace for your lab",
          description:
            "Feature shown in Rosalind Academic Plan checkout describing the workspace that the principal investigator and lab members will share.",
        },
      }),
      d = (e) => [
        { label: u.modelAccess, icon: e.LoopCompactIcon },
        { label: u.workspace, icon: e.FolderOpenIcon },
      ],
      h = (0, i.Y)({
        featureChatGptWorkAndCodex: {
          id: "pricingPlanConstants.business.checkout.featureChatGptWorkAndCodex",
          defaultMessage: "ChatGPT, ChatGPT Work, and Codex",
          description:
            "Short feature row in the order-summary card for a Business checkout with Standard and Premium seat types. It tells prospective workspace owners that the plan includes the ChatGPT, ChatGPT Work, and Codex products. Preserve these branded product names and their capitalization.",
        },
        featurePluginsAcrossAppsAndFiles: {
          id: "pricingPlanConstants.business.checkout.featurePluginsAcrossAppsAndFiles",
          defaultMessage: "Plugins to act across apps and files",
          description:
            "Short feature row in the order-summary card for a Business checkout with Standard and Premium seat types. It tells prospective workspace owners that plugins can perform actions across their connected applications and files.",
        },
        featureMixAndMatchSeatTypes: {
          id: "pricingPlanConstants.business.checkout.featureMixAndMatchSeatTypes",
          defaultMessage: "Mix-and-match seat types",
          description:
            "Short feature row in the order-summary card for a Business checkout. It tells prospective workspace owners that they can combine Standard and Premium seat licenses in one workspace. Keep the label concise.",
        },
        featureUnlimitedBestModel: {
          id: "pricingPlanConstants.business.checkout.featureUnlimitedBestModel",
          defaultMessage: "Advanced access to our best model for work",
          description:
            "Checkout redesign value prop describing that Business offers advanced access to OpenAI's best model for work.",
        },
        featureAdvancedSecurity: {
          id: "pricingPlanConstants.business.checkout.featureAdvancedSecurity",
          defaultMessage: "Advanced security with SSO, MFA, and more",
          description:
            "Checkout redesign value prop describing that Business provides advanced security controls like SSO and MFA.",
        },
        featureUnifiedBilling: {
          id: "pricingPlanConstants.business.checkout.featureUnifiedBilling",
          defaultMessage: "Unified billing and org management",
          description: "A business plan feature shown in checkout screen showing unified billing and org management",
        },
        featureConnectExternalSources: {
          id: "pricingPlanConstants.business.checkout.featureConnectExternalSources",
          defaultMessage: "Connect external apps securely",
          description:
            "A business plan feature shown in checkout screen showing the ability to connect external apps securely",
        },
        featureTeamTools: {
          id: "pricingPlanConstants.business.checkout.featureTeamTools",
          defaultMessage: "Team tools like projects and custom GPTs",
          description:
            "Checkout redesign value prop describing that Business includes collaboration tools such as projects and custom GPTs.",
        },
        featureIntegrations: {
          id: "pricingPlanConstants.business.checkout.featureIntegrations",
          defaultMessage: "Integration with SharePoint and more",
          description:
            "Checkout redesign value prop describing that Business connects with SharePoint and other knowledge sources.",
        },
      }),
      m = (0, i.Y)({
        heading: {
          id: "checkout.businessRefresh.heading",
          defaultMessage: "ChatGPT Business",
          description:
            "Plan name above the Business checkout benefits. ChatGPT Business is a product name; preserve its spelling and capitalization.",
        },
        allSeatTypes: {
          id: "checkout.businessRefresh.allSeatTypes",
          defaultMessage: "Available with all seat types:",
          description:
            "Heading introducing benefits included with every Business seat type, including Standard and Premium seats. A seat is a license for one workspace member.",
        },
        products: {
          id: "checkout.businessRefresh.products",
          defaultMessage: "All ChatGPT, ChatGPT Work, and Codex features",
          description:
            "Business checkout benefit describing the included products. Preserve the product names ChatGPT, ChatGPT Work, and Codex.",
        },
        devices: {
          id: "checkout.businessRefresh.devices",
          defaultMessage: "Access across desktop, web, and mobile",
          description:
            "Business checkout benefit explaining that the products can be used in desktop applications, a web browser, and mobile applications.",
        },
        connections: {
          id: "checkout.businessRefresh.connections",
          defaultMessage: "Connect to Google Workspace, Slack, GitHub, Microsoft 365, and more",
          description:
            "Business checkout benefit listing supported third-party connections. Preserve Google Workspace, Slack, GitHub, and Microsoft 365 as product names.",
        },
        security: {
          id: "checkout.businessRefresh.security",
          defaultMessage: "Secure workspace with SAML, SSO, and MFA",
          description:
            "Business checkout benefit describing workspace security. SAML is Security Assertion Markup Language, SSO is single sign-on, and MFA is multi-factor authentication. Retain these familiar technical abbreviations when appropriate in the target language.",
        },
        billing: {
          id: "checkout.businessRefresh.billing",
          defaultMessage: "Centralized billing and administration",
          description:
            "Business checkout benefit explaining that workspace owners can manage billing and administration together in one place.",
        },
        usage: {
          id: "checkout.businessRefresh.usage",
          defaultMessage: "Usage analytics and spend controls",
          description:
            "Business checkout benefit describing reports about workspace usage and controls for workspace spending.",
        },
        privacy: {
          id: "checkout.businessRefresh.privacy",
          defaultMessage: "No training on your business data by default",
          description:
            "Business checkout privacy benefit explaining that customer business data is not used to train models under the default settings.",
        },
        agents: {
          id: "checkout.businessRefresh.agents",
          defaultMessage: "Workspace agents for customized workflows",
          description:
            "Business checkout benefit describing AI agents configured for a workspace's specific work processes. Agents refers to AI software, not human representatives.",
        },
        seats: {
          id: "checkout.businessRefresh.seats",
          defaultMessage: "Mix and match seat types",
          description:
            "Business checkout benefit explaining that a workspace can combine Standard and Premium seat licenses for its members.",
        },
      })
    function p(e) {
      return [
        { label: m.products, icon: e.products },
        { label: m.devices, icon: e.devices },
        { label: m.connections, icon: e.connections },
        { label: m.security, icon: e.security },
        { label: m.billing, icon: e.billing },
        { label: m.usage, icon: e.usage },
        { label: m.privacy, icon: e.privacy },
        { label: m.agents, icon: e.agents },
        { label: m.seats, icon: e.seats },
      ]
    }
    let f = (0, i.Y)({
        proFamilyFrontierModel: {
          id: "pricingPlanConstants.pro.checkout.usageTier.frontierModel",
          defaultMessage: "Our most capable frontier Pro model",
          description:
            "Feature row in the Pro checkout summary across all three usage tiers. It describes access to the frontier Pro model; Pro is the model designation. Keep this concise beside a small icon.",
        },
        proFamilyStandardUsage: {
          id: "pricingPlanConstants.pro.checkout.usageTier.standardUsage",
          defaultMessage: "More Work and Codex usage",
          description:
            "Feature row in Pro checkout when Pro 100, the Standard usage option, is selected. It advertises additional usage for Work and Codex, which are product names. Keep the label concise.",
        },
        proFamilyMoreUsage: {
          id: "pricingPlanConstants.pro.checkout.usageTier.moreUsage",
          defaultMessage: "Faster Work and Codex",
          description:
            "Feature row in Pro checkout when Pro 200, the More usage option, is selected. Work and Codex are product names; the row describes their faster service in this tier. Keep the label concise.",
        },
        proFamilyMaxUsage: {
          id: "pricingPlanConstants.pro.checkout.usageTier.maxUsage",
          defaultMessage: "Fastest Work and Codex",
          description:
            "Feature row in Pro checkout when Pro 500, the Max usage option, is selected. Work and Codex are product names; the row describes their fastest service in this tier. Keep the label concise.",
        },
        proFamilyMemory: {
          id: "pricingPlanConstants.pro.checkout.usageTier.memory",
          defaultMessage: "Maximum memory and 100 GB of storage",
          description:
            "Feature row in the Pro checkout summary across all three usage tiers. Memory means ChatGPT remembering useful context, while 100 GB is the included file storage capacity. Keep this concise beside a small icon.",
        },
        proFamilyEarlyAccess: {
          id: "pricingPlanConstants.pro.checkout.usageTier.earlyAccess",
          defaultMessage: "Early access to new features",
          description:
            "Feature row in the Pro checkout summary across all three usage tiers. It tells prospective subscribers they can try new product features early. Keep this concise beside a small icon.",
        },
        featureUnlimitedBestModels: {
          id: "pricingPlanConstants.pro.checkout.featureUnlimitedBestModels",
          defaultMessage: "Unlimited access to our best models",
          description:
            "Checkout redesign value prop describing that Pro members can use our most capable models without limits.",
        },
        featureUnlimitedAdvancedVoice: {
          id: "pricingPlanConstants.pro.checkout.featureUnlimitedAdvancedVoice",
          defaultMessage: "Unlimited use of advanced voice features",
          description:
            "Checkout redesign value prop describing that Pro members receive unlimited usage of advanced voice features.",
        },
        featureMostImageVideo: {
          id: "pricingPlanConstants.pro.checkout.featureMostImageVideo",
          defaultMessage: "The most image and video generation",
          description:
            "Checkout redesign value prop describing that Pro members receive the highest limits for image and video generation.",
        },
      }),
      g = (0, i.Y)({
        featureHigherUsageLimits: {
          id: "pricingPlanConstants.pro.checkout.proliteGate.featureHigherUsageLimits.moreUsage",
          defaultMessage: "More usage than Plus",
          description:
            "Checkout redesign value prop shown for Pro and Pro Lite in the prolite-gated experience, emphasizing higher model usage limits.",
        },
        featureHigherUsageLimitsProOnly: {
          id: "pricingPlanConstants.pro.checkout.proliteGate.featureHigherUsageLimitsProOnly.moreUsage",
          defaultMessage: "More usage than Plus",
          description:
            "Checkout redesign value prop shown for Pro and Pro Lite in the prolite-gated experience, emphasizing higher model usage limits.",
        },
        featureResearchModel: {
          id: "pricingPlanConstants.pro.checkout.proliteGate.researchModel",
          defaultMessage: "Frontier Pro model",
          description:
            "Checkout redesign value prop shown for Pro and Pro Lite in the prolite-gated experience, emphasizing a frontier pro model.",
        },
        featureExperimentalFeatures: {
          id: "pricingPlanConstants.pro.checkout.proliteGate.experimentalFeatures",
          defaultMessage: "Early access to experimental features",
          description:
            "Checkout redesign value prop shown for Pro and Pro Lite in the prolite-gated experience, emphasizing image and video generation limits.",
        },
      }),
      C = (0, i.Y)({
        featureHigherUsageLimits: {
          id: "pricingPlanConstants.proLite.checkout.proliteGate.higherUsageLimits.moreUsage",
          defaultMessage: "More usage than Plus",
          description:
            "Checkout redesign value prop shown for Pro and Pro Lite in the prolite-gated experience, emphasizing higher model usage limits.",
        },
        featureResearchModel: {
          id: "pricingPlanConstants.proLite.checkout.proliteGate.researchModel",
          defaultMessage: "Frontier Pro model",
          description:
            "Checkout redesign value prop shown for Pro and Pro Lite in the prolite-gated experience, emphasizing a frontier pro model.",
        },
        featureExperimentalFeatures: {
          id: "pricingPlanConstants.proLite.checkout.proliteGate.experimentalFeatures",
          defaultMessage: "Early access to experimental features",
          description:
            "Checkout redesign value prop shown for Pro and Pro Lite in the prolite-gated experience, emphasizing image and video generation limits.",
        },
      })
    function b(e, t) {
      return [
        { label: f.proFamilyFrontierModel, icon: t.telescopePro },
        {
          label: "promax" === e ? f.proFamilyMaxUsage : "pro" === e ? f.proFamilyMoreUsage : f.proFamilyStandardUsage,
          icon: t.codex,
        },
        { label: f.proFamilyMemory, icon: t.brainPro },
        { label: f.proFamilyEarlyAccess, icon: t.branch },
      ]
    }
    let x = (e) => [
        { label: l.featureEverythingInFree, icon: e.LightningThickIcon },
        { label: l.featureGPT5Extended, icon: e.PaperClipThickIcon },
        { label: l.featureImgGenExtended, icon: e.ImagesThickIcon },
        { label: l.featureFileUploadsExtended, icon: e.RememberChatOnThickIcon },
      ],
      y = (e) => [
        { label: c.featureAdvancedIntelligence, icon: e.SparklePlusIcon },
        { label: c.featureFasterImages, icon: e.ImagesThickIcon },
        { label: r.featureWorkAgent, icon: e.BriefcaseIcon },
        { label: c.featureCodexAutomateCoding, icon: e.CodexIcon },
        { label: c.featureEmailCalendarConnections, icon: e.PluginIcon },
      ],
      k = (e) => [
        { label: h.featureUnlimitedBestModel, icon: e.LoopCompactIcon },
        { label: h.featureAdvancedSecurity, icon: e.IdentityThickIcon },
        { label: h.featureTeamTools, icon: e.FolderOpenIcon },
        { label: h.featureIntegrations, icon: e.AddSourcesIcon },
      ],
      v = (e) => [
        { label: h.featureChatGptWorkAndCodex, icon: e.ChatsIcon },
        { label: h.featurePluginsAcrossAppsAndFiles, icon: e.AddSourcesIcon },
        { label: h.featureUnifiedBilling, icon: e.PaidIcon },
        { label: h.featureMixAndMatchSeatTypes, icon: e.GroupIcon },
      ],
      w = (e, { includeReminder: t = !0 } = {}) => {
        let a = [
          { label: o.cancelAnytime, icon: e.CheckIcon },
          { label: o.remindYouBeforeTrialEnds, icon: e.ClockIcon },
          {
            label: s.featureExpandedMessagesUploads,
            icon: e.ChatsIcon,
            categories: ["usage_messages", "uploads_storage"],
          },
          { label: s.featureMoreImageCreation, icon: e.ImagesIcon, categories: ["images_video"] },
          { label: s.featureExpandedDeepResearchAgentMode, icon: e.TelescopePlusIcon, categories: ["agents_research"] },
        ]
        return t ? a : a.filter((e) => e.label !== o.remindYouBeforeTrialEnds)
      },
      P = (e, { includeReminder: t = !0 } = {}) => {
        let a = [
          { label: o.cancelAnytime, icon: e.CheckIcon },
          { label: o.remindYouBeforeTrialEnds, icon: e.ClockIcon },
          { label: h.featureAdvancedSecurity, icon: e.LockKeyHoleIcon },
          { label: h.featureUnifiedBilling, icon: e.InvoiceIcon },
          { label: h.featureConnectExternalSources, icon: e.AddSourcesIcon },
        ]
        return t ? a : a.filter((e) => e.label !== o.remindYouBeforeTrialEnds)
      }
    function M({ planType: e, proliteEnabled: t, isFreeTrial: a, icons: i, trialIcons: r }) {
      let o
      switch (e) {
        case "free":
          o = t ? (0, n.l)(i) : (0, n.X_)(i)
          break
        case "go":
          o = t ? (0, n.H7)(i) : (0, n.fW)(i)
          break
        case "promax":
          o = (0, n.G0)(i)
          break
        case "pro":
        case "prolite":
          o = t
            ? [
                {
                  label: "pro" === e ? g.featureHigherUsageLimitsProOnly : C.featureHigherUsageLimits,
                  icon: i.trending,
                  categories: ["usage_messages"],
                },
                ...(0, n.sQ)(i).slice(1),
              ]
            : (0, n.G0)(i)
          break
        case "team":
        case "business":
        case "enterprise_cbp_usage_based":
        case "ent26":
        case "hc":
        case "finserv":
        case "education":
        case "edu_plus":
        case "edu_pro":
        case "quorum":
        case "enterprise":
        case "edu":
          o = t ? (0, n.T0)(i) : (0, n.zQ)(i)
          break
        case "sci":
          return a ? _(r) : void 0
        default:
          o = t ? (0, n.Fz)(i) : (0, n.nH)(i)
      }
      return a ? [..._(r), ...o] : o
    }
    function _(e) {
      return [
        { label: o.cancelAnytime, icon: e.CheckIcon },
        { label: o.remindYouBeforeTrialEnds, icon: e.ClockIcon },
      ]
    }
  },
  Oeow(e, t, a) {
    let n = (0, a("RY1E").Y)({
      continueToPayPal: {
        id: "checkout.business.paypal.button.continue",
        defaultMessage: "Continue to PayPal",
        description:
          "Primary button in ChatGPT Business checkout when the next step opens PayPal to authorize a new payment method. This step does not itself confirm a completed purchase. PayPal is a brand name. Short button label with no placeholders.",
      },
      homeLinkLabel: {
        id: "checkout.homeLinkLabel",
        defaultMessage: "ChatGPT home",
        description:
          "Accessible name for the OpenAI logo link in the header of the full-page ChatGPT checkout. Activating the link leaves checkout and opens the ChatGPT home page without submitting payment. Short navigation label for screen-reader users; no placeholders.",
      },
      planNotAvailable: {
        id: "checkout.planNotAvailable.error",
        defaultMessage: "This plan is currently unavailable for purchase.",
        description:
          "Notice in pricing or checkout when the selected subscription plan cannot currently be purchased. Applies to any plan. Neutral explanation; the user may choose another available plan. One short sentence, no placeholders.",
      },
      paymentProcessing: {
        id: "CheckoutVerifyRoute.processingPayment",
        description:
          "Short reassuring loading label beside a spinner on the checkout verification screen while a customer's payment is being finalized. Keep this label brief and use sentence case.",
        defaultMessage: "Processing payment",
      },
      paymentSuccess: {
        id: "CheckoutForm.bannerMessagePaymentSuccess",
        defaultMessage: "Payment successfully processed",
        description: "Text for banner message that appears when a payment is successfully processed",
      },
      planDetailsTitle: {
        id: "CheckoutForm.headingPlanDetails",
        defaultMessage: "Plan details",
        description:
          "Heading for the checkout section that lets users confirm or adjust plan-specific details before submitting payment information.",
      },
      contactInformationTitle: {
        id: "CheckoutForm.headingContactInformation",
        defaultMessage: "Contact information",
        description: "Heading for the section of the checkout where we collect contact information",
      },
      paymentMethodTitle: {
        id: "CheckoutForm.headingPaymentMethod",
        defaultMessage: "Payment method",
        description:
          "Section heading shown above the payment method input (Stripe PaymentElement). Users select a payment option like card or PayPal.",
      },
      expressCheckoutTitle: {
        id: "CheckoutForm.headingExpressCheckout",
        defaultMessage: "Pay with",
        description:
          "Heading shown directly above a row of express wallet buttons (Apple Pay, Google Pay, etc.). Stands alone before the list and is not a button. Keep it short, sentence case, and do not add a colon or punctuation. Meaning: 'Pay using one of these methods.'",
      },
      billingAddressTitle: {
        id: "CheckoutForm.headingBillingAddress",
        defaultMessage: "Billing address",
        description:
          "Section heading shown above the billing address input (Stripe AddressElement). Used for billing and tax collection.",
      },
      billingAddressRequiredError: {
        id: "CheckoutForm.inputLabelBillingAddressRequired",
        defaultMessage: "Your billing address is required.",
        description: "Validation error for the billing address input when the billing address is missing",
      },
      minimalBillingTaxError: {
        id: "CheckoutForm.minimalBillingTaxError",
        defaultMessage: "We couldn't calculate tax. Try again.",
        description:
          "Inline error below the payment fields in ChatGPT subscription checkout when tax calculation fails while the Payment Element collects billing country and postal code. The accompanying Try again button recalculates tax without submitting payment. Short sentence; no placeholders.",
      },
      minimalBillingTaxRetry: {
        id: "CheckoutForm.minimalBillingTaxRetry",
        defaultMessage: "Try again",
        description:
          "Short button label beside a tax-calculation error in ChatGPT subscription checkout when the Payment Element collects billing country and postal code. Clicking retries the tax quote for the current country and postal code; it does not submit payment or start the subscription. Sentence case; no punctuation or placeholders.",
      },
      unsupportedBillingCountry: {
        id: "chatgpt.checkout.paypal_promo.form.billing_address.unsupported_country.error.v2",
        defaultMessage:
          "This offer is only available in Germany. <continueToCheckoutLink>Continue to checkout without this offer.</continueToCheckoutLink>",
        description:
          "Inline validation error in the PayPal Germany ChatGPT Plus cashback checkout. It appears when the customer selects a billing address outside Germany. The tagged text is a link that opens the standard ChatGPT Plus checkout without the PayPal cashback offer. German reference: Dieses Angebot ist nur in Deutschland verf\xfcgbar. <continueToCheckoutLink>Ohne dieses Angebot mit dem Checkout fortfahren.</continueToCheckoutLink>",
      },
      paypalBillingCountryMismatch: {
        id: "chatgpt.checkout.paypal_promo.form.billing_address.country_mismatch.error",
        defaultMessage:
          "Your billing country must match this checkout. <continueToCheckoutLink>Continue to checkout without this offer.</continueToCheckoutLink>",
        description:
          "Inline error on the PayPal ChatGPT Plus checkout when the billing country differs from the country used to create the checkout and select its currency. The tagged link opens standard Plus checkout without the PayPal offer.",
      },
      buttonSubscribe: {
        id: "CheckoutForm.buttonSubscribe",
        defaultMessage: "Subscribe",
        description: "Text for button that submits the form creating a new subscription",
      },
      buttonSubscribeToPlan: {
        id: "CheckoutForm.buttonSubscribeToPlan",
        defaultMessage: "Subscribe to {planName}",
        description:
          "Primary submit button label on the final step of the ChatGPT personal subscription checkout form, shown as the subscribe_to_plan variant of the subscribe_button_text experiment. Clicking it submits payment and starts the selected paid subscription; it is not shown for free-trial or non-subscription checkout. Short single-line button label. Placeholder {planName} is the bare official product tier name, such as Go, Plus, Pro Lite, or Pro; do not translate, localize, or inflect it. Translators may add their locale's word for plan outside the placeholder when needed for natural grammar.",
      },
      buttonPurchase: {
        id: "CheckoutForm.buttonPurchase",
        defaultMessage: "Purchase",
        description: "Text for button that submits the Codex usage-based checkout form.",
      },
      buttonUpgradeToPlan: {
        id: "CheckoutForm.buttonUpgradeToPlan",
        defaultMessage: "Upgrade to {planName}",
        description:
          "Primary submit button label on the ChatGPT personal plan checkout form, shown as one subscribe_button_text experiment variant. Trigger: a logged-in user with a Free account is on the final checkout submit step for the selected paid ChatGPT personal subscription plan; this experiment parameter is not read on free-trial checkout. Intent: make the final action feel plan-upgrade oriented without explicitly saying pay or charge. Short single-line button label. Placeholder {planName} is the bare official product tier name, such as Go, Plus, Pro Lite, or Pro; do not translate, localize, or inflect it. Translators may add their locale's word for plan outside the placeholder when needed for natural grammar.",
      },
      buttonStartYourPlan: {
        id: "CheckoutForm.buttonStartYourPlan",
        defaultMessage: "Start your plan",
        description:
          "Primary submit button label on the ChatGPT personal plan checkout form, shown as one subscribe_button_text experiment variant. Trigger: a logged-in user with a Free account is on the final checkout submit step for the selected paid ChatGPT personal subscription plan; this experiment parameter is not read on free-trial checkout. Intent: communicate that the user's selected subscription plan starts now without explicitly saying pay, charge, or trial. Short single-line button label; no placeholders. The word plan means the selected paid subscription plan, not a project plan or onboarding plan.",
      },
      buttonActivatePlan: {
        id: "CheckoutForm.buttonActivatePlan",
        defaultMessage: "Activate {planName}",
        description:
          "Primary submit button label on the ChatGPT personal plan checkout form, shown as one subscribe_button_text experiment variant. Trigger: a logged-in user with a Free account is on the final checkout submit step for the selected paid ChatGPT personal subscription plan; this experiment parameter is not read on free-trial checkout. Intent: communicate that submitting starts the selected subscription plan without explicitly saying pay, charge, or trial. Short single-line button label. Placeholder {planName} is the bare official product tier name, such as Go, Plus, Pro Lite, or Pro; do not translate, localize, or inflect it. Translators may add their locale's word for plan outside the placeholder when needed for natural grammar. Activate means starting the subscription plan, not enabling something the user already owns.",
      },
      buttonActivateTrial: {
        id: "CheckoutForm.buttonActivateTrial",
        defaultMessage: "Activate {trialDurationInDays}-day trial",
        description:
          "Trial checkout page primary CTA button label for the timeline checkout flow (web) for the user to activate their trialDurationInDays free trial",
      },
      buttonStartFreeTrial: {
        id: "CheckoutForm.buttonStartFreeTrial",
        defaultMessage: "Start free trial",
        description:
          "Checkout page primary CTA button label in the trial checkout flow (web). Trigger: shown when a logged-in user eligible for a Plus/Business free trial reaches the checkout form and submits the purchase. Audience: end users upgrading their plan; intent is reassuring and encouraging by highlighting that the trial starts now with no immediate charge. Constraints: very short, single-line button label in sentence case; no punctuation; avoid implying payment occurs now. Placeholders: none. This dedicated trial label is evaluated independently because non-trial subscribe_button_text variants are not read on free-trial checkout.",
      },
      buttonPayOtherWay: {
        id: "CheckoutForm.buttonPayOtherWay",
        defaultMessage: "Pay other way",
        description:
          "Button label in the ChatGPT subscription checkout modal when express wallet payments such as Apple Pay or Google Pay are available. End users click it to reveal the standard payment form with card, billing address, and subscribe controls instead of using an express wallet. Short single-line sentence-case label; no placeholders or punctuation.",
      },
      reactivationMemberRefreshError: {
        id: "CheckoutForm.reactivationMemberRefreshError",
        defaultMessage: "We couldn't verify workspace members. Try again.",
        description:
          "Retryable error toast shown when a deactivated Business workspace owner clicks the final checkout button but the app cannot refresh the paid-member count before submitting. The owner remains on the checkout page and can retry. Short sentence with no placeholders.",
      },
      walletPaymentOptionalTitle: {
        id: "CheckoutForm.walletPayment.optionalTitle",
        defaultMessage: "Payment method <optional>(optional)</optional>",
        description:
          "Short section heading in ChatGPT subscription checkout when gift-card wallet funds cover today's purchase including tax. The subscriber may add a backup payment method but does not have to. The optional tag renders that qualifier in a muted color; keep the parentheses with the qualifier.",
      },
      walletPaymentBackupDescription: {
        id: "CheckoutForm.walletPayment.backupDescription",
        defaultMessage:
          "Your wallet balance is used first. Prevent your subscription from ending when your balance runs out by adding a backup payment method.",
        description:
          "Multiline helper text under the optional payment method heading in ChatGPT subscription checkout. The wallet holds redeemed gift-card funds and covers today's purchase. Explain reassuringly that an optional backup method can keep the subscription active once those funds run out; this is not the wallet for agentic shopping. No placeholders.",
      },
      walletPaymentAddPaymentMethod: {
        id: "CheckoutForm.walletPayment.addPaymentMethod",
        defaultMessage: "Add payment method",
        description:
          "Short button label in ChatGPT subscription checkout when gift-card wallet funds cover today's purchase. Expands the optional backup payment form for future subscription charges. Clicking does not itself save a method or consent to future unrelated purchases.",
      },
      walletPaymentSkip: {
        id: "CheckoutForm.walletPayment.skip",
        defaultMessage: "Skip for now",
        description:
          "Button below the expanded optional backup payment form in ChatGPT subscription checkout. Hides that form and lets the subscriber finish today's fully Wallet-funded purchase without saving a payment method. Does not cancel the purchase. Short label.",
      },
    })
    a.d(t, {}, { J: n })
  },
  H8XY(e, t, a) {
    a.d(t, { Z: () => g, z: () => C })
    var n = a("ABep"),
      i = a("QosV"),
      r = a("IDNS"),
      o = a("fKuh"),
      s = a("hDRf")
    a("zd8w")
    var l = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          "data-rtl-flip": "",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M12.429 15.7792C12.6887 16.0389 12.6887 16.461 12.429 16.7207C12.1693 16.9804 11.7473 16.9804 11.4876 16.7207L5.53256 10.7646C5.1104 10.3422 5.1104 9.65767 5.53256 9.2353L11.4876 3.27925C11.7473 3.01955 12.1693 3.01955 12.429 3.27925C12.6887 3.53895 12.6887 3.96095 12.429 4.22065L6.64975 9.99995L12.429 15.7792Z",
            fill: "currentColor",
          }),
        }),
      c = a("y60j"),
      u = a("yfgo"),
      d = a("u3bW"),
      h = a("DyL4"),
      m = a("YsZw"),
      p = a("wVRS"),
      f = a("DdSk")
    function g() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(l, { className: "shrink", height: 28, width: 28, "aria-hidden": "true" })), (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    let C = {
      BriefcaseIcon: o.A,
      CodexIcon: c.A,
      LightningThickIcon: (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M10.8555 3.87143L4.29126 11.6665H9.16672C9.42229 11.6665 9.66372 11.7838 9.82172 11.9847C9.97972 12.1855 10.0368 12.4478 9.97659 12.6962L9.14458 16.1282L15.7088 8.33317H10.8334C10.5778 8.33317 10.3364 8.2159 10.1784 8.01502C10.0204 7.81415 9.9633 7.55188 10.0235 7.3035L10.8555 3.87143ZM10.1512 2.12042C11.1432 0.942361 13.0468 1.90659 12.6839 3.40337L11.8929 6.6665H16.1566C17.3966 6.6665 18.0708 8.11575 17.2721 9.0642L9.84894 17.8793C8.85689 19.0573 6.95331 18.0931 7.31617 16.5963L8.10723 13.3332H3.84346C2.60351 13.3332 1.92926 11.8839 2.72796 10.9355L10.1512 2.12042Z",
            fill: "currentColor",
          }),
        }),
      PaperClipThickIcon: (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M7.49996 5.83341C7.49996 3.53223 9.36544 1.66675 11.6666 1.66675C13.9678 1.66675 15.8333 3.53223 15.8333 5.83341V12.5001C15.8333 15.7217 13.2216 18.3334 9.99996 18.3334C6.7783 18.3334 4.16663 15.7217 4.16663 12.5001V7.50008C4.16663 7.03984 4.53972 6.66675 4.99996 6.66675C5.4602 6.66675 5.83329 7.03984 5.83329 7.50008V12.5001C5.83329 14.8013 7.69877 16.6667 9.99996 16.6667C12.3011 16.6667 14.1666 14.8013 14.1666 12.5001V5.83341C14.1666 4.4527 13.0473 3.33341 11.6666 3.33341C10.2859 3.33341 9.16663 4.4527 9.16663 5.83341V12.5001C9.16663 12.9603 9.53972 13.3334 9.99996 13.3334C10.4602 13.3334 10.8333 12.9603 10.8333 12.5001V7.50008C10.8333 7.03984 11.2064 6.66675 11.6666 6.66675C12.1269 6.66675 12.5 7.03984 12.5 7.50008V12.5001C12.5 13.8808 11.3807 15.0001 9.99996 15.0001C8.61925 15.0001 7.49996 13.8808 7.49996 12.5001V5.83341Z",
            fill: "currentColor",
          }),
        }),
      ImagesThickIcon: (e) =>
        (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M10.1497 9.84826C10.2458 10.5319 9.76947 11.164 9.08584 11.2601C8.4022 11.3561 7.77011 10.8798 7.67403 10.1962C7.57795 9.51256 8.05426 8.88047 8.7379 8.78439C9.42154 8.68831 10.0536 9.16462 10.1497 9.84826Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M11.8995 1.42282L14.78 1.7765C15.4459 1.85824 15.9954 1.9257 16.4385 2.01724C16.8988 2.11231 17.3161 2.24631 17.6925 2.50014C18.276 2.89377 18.72 3.46205 18.9608 4.12353C19.116 4.55008 19.1451 4.98746 19.126 5.45705C19.1076 5.90917 19.0401 6.45868 18.9584 7.12448L18.6047 10.005C18.5229 10.6708 18.4555 11.2203 18.3639 11.6635C18.2689 12.1237 18.1349 12.5411 17.881 12.9174C17.4874 13.501 16.9191 13.945 16.2576 14.1858C16.1898 14.2104 16.1212 14.2321 16.0517 14.251C15.6075 14.3715 15.1497 14.1092 15.0292 13.665C14.9086 13.2208 15.171 12.7631 15.6152 12.6425C15.6405 12.6356 15.6645 12.628 15.6876 12.6196C16.0183 12.4992 16.3025 12.2772 16.4993 11.9854C16.5811 11.8642 16.6576 11.6853 16.7317 11.3263C16.8078 10.9578 16.8676 10.4762 16.9546 9.76775L17.2999 6.95553C17.3869 6.24704 17.4454 5.76533 17.4607 5.38932C17.4756 5.02306 17.4447 4.83102 17.3946 4.69356C17.2743 4.36283 17.0523 4.07869 16.7605 3.88187C16.6392 3.80007 16.4603 3.7236 16.1014 3.64945C15.7328 3.57332 15.2513 3.51354 14.5428 3.42655L11.7306 3.08125C11.0221 2.99426 10.5404 2.93577 10.1643 2.92048C9.79809 2.90558 9.60605 2.93651 9.46859 2.98654C9.13785 3.10692 8.85371 3.32891 8.6569 3.62071C8.60118 3.70331 8.54784 3.81305 8.49635 3.98681C8.36558 4.42808 7.90185 4.67978 7.46059 4.54901C7.01932 4.41824 6.76761 3.95451 6.89838 3.51325C6.98573 3.21849 7.10272 2.94438 7.27517 2.68872C7.6688 2.10513 8.23708 1.66114 8.89856 1.42039C9.32511 1.26514 9.76249 1.23609 10.2321 1.25519C10.6842 1.27357 11.2337 1.34105 11.8995 1.42282ZM9.8002 7.33357C9.42419 7.34887 8.94248 7.40736 8.23398 7.49435L5.42177 7.83965C4.71328 7.92664 4.23173 7.98642 3.86318 8.06255C3.5042 8.1367 3.32535 8.21317 3.20408 8.29497C2.91229 8.49178 2.69029 8.77592 2.56991 9.10666C2.51988 9.24412 2.48895 9.43615 2.50385 9.80241C2.51914 10.1784 2.57764 10.6601 2.66463 11.3686L2.8959 13.2522C3.0699 13.0634 3.23086 12.8955 3.3828 12.75C3.70865 12.438 4.04134 12.1802 4.44599 12.0149C5.07542 11.7576 5.76847 11.6991 6.43215 11.847C6.85881 11.9421 7.23006 12.1404 7.60366 12.3932C7.96268 12.6362 8.37544 12.9665 8.87449 13.3657L11.9285 15.8089C12.0457 15.6652 12.1388 15.5021 12.203 15.3257C12.253 15.1882 12.2839 14.9962 12.269 14.6299C12.2537 14.2539 12.1953 13.7722 12.1083 13.0637L11.763 10.2515C11.676 9.543 11.6162 9.06145 11.5401 8.69291C11.4659 8.33392 11.3894 8.15507 11.3076 8.0338C11.1108 7.74201 10.8267 7.52002 10.496 7.39964C10.3585 7.34961 10.1665 7.31867 9.8002 7.33357ZM10.1193 16.496L7.85936 14.688C7.32772 14.2627 6.96678 13.9747 6.66944 13.7735C6.38047 13.5779 6.20839 13.5047 6.06957 13.4737C5.73773 13.3998 5.39121 13.4291 5.0765 13.5577C4.94485 13.6115 4.78749 13.7125 4.53545 13.9539C4.27612 14.2022 3.96864 14.5466 3.51594 15.0552L3.17737 15.4355C3.19527 15.5453 3.21352 15.646 3.23282 15.7394C3.30698 16.0984 3.38345 16.2773 3.46524 16.3985C3.66206 16.6903 3.9462 16.9123 4.27694 17.0327C4.41439 17.0827 4.60643 17.1137 4.97269 17.0988C5.34871 17.0835 5.83041 17.025 6.53891 16.938L9.35112 16.5927C9.64307 16.5568 9.89648 16.5256 10.1193 16.496ZM9.73247 5.66828C10.2021 5.64918 10.6394 5.67823 11.066 5.83348C11.7275 6.07424 12.2957 6.51823 12.6894 7.10181C12.9432 7.47813 13.0772 7.8955 13.1723 8.35576C13.2638 8.79891 13.3313 9.34843 13.413 10.0143L13.7667 12.8947C13.8485 13.5605 13.9159 14.1101 13.9343 14.5622C13.9534 15.0318 13.9244 15.4692 13.7691 15.8957C13.5284 16.5572 13.0844 17.1255 12.5008 17.5191C12.1245 17.7729 11.7071 17.9069 11.2469 18.002C10.8037 18.0935 10.2542 18.161 9.58836 18.2427L6.70785 18.5964C6.04205 18.6782 5.49255 18.7457 5.04042 18.7641C4.57084 18.7832 4.13345 18.7541 3.70691 18.5989C3.04543 18.3581 2.47715 17.9141 2.08351 17.3305C1.82968 16.9542 1.69568 16.5368 1.60061 16.0766C1.50908 15.6334 1.44162 15.0839 1.35988 14.4181L1.00619 11.5376C0.924429 10.8718 0.856949 10.3223 0.83856 9.87015C0.81946 9.40056 0.848509 8.96317 1.00376 8.53663C1.24452 7.87515 1.68851 7.30687 2.27209 6.91324C2.64841 6.65941 3.06578 6.52541 3.52603 6.43034C3.96917 6.3388 4.51868 6.27134 5.18448 6.1896L8.06502 5.83591C8.73083 5.75415 9.28034 5.68667 9.73247 5.66828Z",
              fill: "currentColor",
            }),
          ],
        }),
      RememberChatOnThickIcon: (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M14.3775 9.87703C15.2834 9.1382 16.6198 9.19131 17.4642 10.0357C18.3087 10.8801 18.3618 12.2166 17.6229 13.1225L17.4642 13.2974L13.6556 17.106C13.2259 17.5358 12.688 17.8386 12.1013 17.9841L11.8474 18.037L10.1384 18.3219C9.87312 18.366 9.60271 18.2792 9.41248 18.0891C9.22231 17.8989 9.13568 17.6285 9.17973 17.3632L9.46293 15.655L9.51583 15.4003C9.66116 14.8127 9.96437 14.2739 10.3947 13.8435L14.2025 10.0357L14.3775 9.87703ZM16.2858 11.2141C16.0517 10.9799 15.681 10.9653 15.4297 11.1702L15.3809 11.2141L11.5731 15.0219C11.3581 15.2369 11.2064 15.5063 11.1337 15.7999L11.1076 15.9277L11.014 16.4859L11.5731 16.3931L11.7001 16.3671C11.9935 16.2943 12.2624 16.1425 12.4773 15.9277L16.2858 12.1191L16.3298 12.0702C16.5346 11.8189 16.52 11.4483 16.2858 11.2141ZM15 7.08325V3.99976C15 3.86181 14.8881 3.75001 14.7502 3.74992H9.16671V11.6666C9.16671 12.1268 8.79361 12.4999 8.33337 12.4999C7.87314 12.4999 7.50004 12.1268 7.50004 11.6666V3.74992H6.66671C5.74623 3.74992 5.00004 4.49611 5.00004 5.41659V14.5833C5.00004 15.5037 5.74623 16.2499 6.66671 16.2499C7.12694 16.2499 7.50004 16.623 7.50004 17.0833C7.50004 17.5435 7.12694 17.9166 6.66671 17.9166C4.82576 17.9166 3.33337 16.4242 3.33337 14.5833V5.41659C3.33337 3.57564 4.82576 2.08325 6.66671 2.08325H14.7502C15.8086 2.08334 16.6666 2.94134 16.6667 3.99976V7.08325C16.6667 7.54349 16.2936 7.91659 15.8334 7.91659C15.3731 7.91659 15 7.54349 15 7.08325Z",
            fill: "currentColor",
          }),
        }),
      SparklePlusIcon: h.A,
      PluginIcon: (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M12.2517 12.3314H7.74878V13.3333C7.74878 14.3468 8.5703 15.1683 9.58374 15.1683H10.4167C11.4302 15.1683 12.2517 14.3468 12.2517 13.3333V12.3314ZM1.00171 10.8333C1.00171 8.52434 2.62085 6.59437 4.78589 6.11557C5.64857 4.0899 7.65738 2.66844 9.99976 2.6683C12.9202 2.6683 15.3235 4.87836 15.6306 7.71713C17.5392 8.01943 18.9986 9.67279 18.9988 11.6664C18.9988 13.147 18.193 14.4389 16.9998 15.1292C16.6819 15.3131 16.2755 15.2048 16.0916 14.8871C15.9077 14.5692 16.016 14.1628 16.3337 13.9789C17.133 13.5165 17.6687 12.6532 17.6687 11.6664C17.6685 10.1928 16.4733 8.99838 14.9998 8.99838C14.6326 8.99821 14.3347 8.7005 14.3347 8.33334C14.3347 5.93919 12.3939 3.99838 9.99976 3.99838C8.21993 3.99851 6.68949 5.07167 6.02222 6.60776L5.90015 6.92123C5.82846 7.12892 5.65965 7.28554 5.4519 7.34409L5.36011 7.36362C3.65031 7.59424 2.33179 9.06021 2.33179 10.8333C2.33179 11.9071 2.81442 12.8679 3.5769 13.5111L3.73315 13.6351L3.83179 13.7269C4.03671 13.9585 4.05795 14.3099 3.86499 14.5667C3.67195 14.8234 3.32898 14.9003 3.04956 14.7679L2.93433 14.6986L2.71948 14.5277C1.67008 13.6423 1.00171 12.3158 1.00171 10.8333ZM13.5818 13.3333C13.5818 14.9978 12.2968 16.3611 10.6648 16.4876V17.5003C10.6646 17.8675 10.3669 18.1654 9.99976 18.1654C9.63274 18.1652 9.33489 17.8673 9.33472 17.5003V16.4876C7.70302 16.3608 6.4187 14.9976 6.4187 13.3333V11.6664C6.41888 11.2992 6.71658 11.0013 7.08374 11.0013H7.6687V10.0003C7.6687 9.63307 7.96647 9.3353 8.33374 9.3353C8.70086 9.33547 8.99878 9.63317 8.99878 10.0003V11.0013H11.0017V10.0003C11.0017 9.63307 11.2995 9.3353 11.6667 9.3353C12.034 9.3353 12.3318 9.63307 12.3318 10.0003V11.0013H12.9167C13.2839 11.0013 13.5816 11.2992 13.5818 11.6664V13.3333Z",
          }),
        }),
      LoopCompactIcon: (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.33965 7.05364C3.96684 5.42646 6.60502 5.42646 8.23221 7.05364L9.99997 8.82141L11.7677 7.05364C13.3949 5.42646 16.0331 5.42646 17.6603 7.05364C19.2875 8.68082 19.2875 11.319 17.6603 12.9462C16.0331 14.5734 13.3949 14.5734 11.7677 12.9462L9.99997 11.1784L8.23221 12.9462C6.60502 14.5734 3.96684 14.5734 2.33965 12.9462C0.712467 11.319 0.712467 8.68082 2.33965 7.05364ZM8.82146 9.99992L7.0537 8.23215C6.07739 7.25584 4.49447 7.25584 3.51816 8.23215C2.54185 9.20846 2.54185 10.7914 3.51816 11.7677C4.49447 12.744 6.07739 12.744 7.0537 11.7677L8.82146 9.99992ZM11.1785 9.99992L12.9463 11.7677C13.9226 12.744 15.5055 12.744 16.4818 11.7677C17.4581 10.7914 17.4581 9.20846 16.4818 8.23215C15.5055 7.25584 13.9226 7.25584 12.9463 8.23215L11.1785 9.99992Z",
            fill: "currentColor",
          }),
        }),
      VoiceIcon: f.A,
      VideoIcon: (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.833 3.91846C12.581 3.91846 13.998 5.33551 13.998 7.0835V7.46143L16.4111 5.69482C17.3128 5.03558 18.5818 5.67928 18.582 6.79639V13.2026C18.582 14.3201 17.3129 14.964 16.4111 14.3042L13.998 12.5376V12.9165C13.998 14.6645 12.581 16.0815 10.833 16.0815H5C3.25202 16.0815 1.83496 14.6645 1.83496 12.9165V7.0835C1.83496 5.33551 3.25202 3.91846 5 3.91846H10.833ZM5 5.24854C3.98656 5.24854 3.16504 6.07005 3.16504 7.0835V12.9165C3.16504 13.9299 3.98656 14.7515 5 14.7515H10.833C11.8465 14.7515 12.668 13.9299 12.668 12.9165V7.0835C12.668 6.07005 11.8465 5.24854 10.833 5.24854H5ZM17.209 6.76123C17.209 6.76123 17.2027 6.76346 17.1963 6.76807L13.998 9.10986V10.8892L17.1963 13.231C17.2028 13.2357 17.209 13.2388 17.209 13.2388L17.2129 13.2397C17.2166 13.2398 17.2249 13.2382 17.2334 13.2339C17.2418 13.2295 17.2472 13.224 17.249 13.2212L17.251 13.2173C17.251 13.2173 17.252 13.2104 17.252 13.2026V6.79639C17.2519 6.7889 17.251 6.78271 17.251 6.78271L17.249 6.77783C17.2471 6.77491 17.2418 6.76954 17.2334 6.76514C17.2249 6.76081 17.2166 6.76012 17.2129 6.76025L17.209 6.76123Z",
            fill: "currentColor",
          }),
        }),
      TrendingIcon: p.A,
      SparkleIcon: m.A,
      FlaskProIcon: u.A,
      IdentityThickIcon: (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M10.334 3.13906C10.1211 3.0459 9.87892 3.0459 9.66598 3.13906L4.66598 5.32656C4.36266 5.45927 4.16667 5.75895 4.16667 6.09003V10.8333C4.16667 12.2613 4.67976 13.5694 5.53163 14.5834C6.60114 13.3103 8.20539 12.5 9.99992 12.5C11.7945 12.5 13.3988 13.3103 14.4683 14.5835C15.3202 13.5695 15.8333 12.2613 15.8333 10.8333V6.09003C15.8333 5.75894 15.6373 5.45927 15.334 5.32656L10.334 3.13906ZM13.2251 15.6948C12.4604 14.7613 11.2991 14.1667 9.99992 14.1667C8.7008 14.1667 7.53951 14.7612 6.77482 15.6947C7.69864 16.3089 8.80753 16.6667 10 16.6667C11.1924 16.6667 12.3013 16.3089 13.2251 15.6948ZM8.99795 1.61213C9.63675 1.33266 10.3632 1.33266 11.002 1.61213L16.002 3.79963C16.912 4.19774 17.5 5.09678 17.5 6.09003V10.8333C17.5 14.9755 14.1421 18.3333 10 18.3333C5.85786 18.3333 2.5 14.9755 2.5 10.8333V6.09003C2.5 5.09678 3.08798 4.19774 3.99795 3.79963L8.99795 1.61213ZM10 7.08333C9.19458 7.08333 8.54167 7.73625 8.54167 8.54167C8.54167 9.34708 9.19458 10 10 10C10.8054 10 11.4583 9.34708 11.4583 8.54167C11.4583 7.73625 10.8054 7.08333 10 7.08333ZM6.875 8.54167C6.875 6.81578 8.27411 5.41667 10 5.41667C11.7259 5.41667 13.125 6.81578 13.125 8.54167C13.125 10.2676 11.7259 11.6667 10 11.6667C8.27411 11.6667 6.875 10.2676 6.875 8.54167Z",
          }),
        }),
      FolderOpenIcon: (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.00781 2.66833C6.64138 2.66833 7.25906 2.86899 7.77148 3.24158L8.83594 4.01599C9.12109 4.22337 9.46479 4.33533 9.81738 4.33533H14.2256C15.0181 4.3354 15.6946 4.58587 16.2109 5.07654C16.7154 5.55596 17.0125 6.21252 17.1641 6.93396C17.2204 7.20202 17.3112 7.6119 17.3887 7.9574C17.4045 8.0279 17.4202 8.0955 17.4346 8.15857H17.5205C18.7406 8.15862 19.5291 9.44889 18.9727 10.5345L16.5693 15.2201C16.056 16.2205 15.0258 16.85 13.9014 16.85H4.18262C2.76278 16.8499 1.73874 15.698 1.71484 14.4271L0.893555 5.69763V5.66638C0.893731 4.01071 2.23593 2.66851 3.8916 2.66833H6.00781ZM6.60547 9.48865C6.00251 9.48883 5.44661 9.81446 5.15137 10.3402L3.19238 13.8285C2.76774 14.585 3.31512 15.5197 4.18262 15.5199H13.9014C14.5271 15.5199 15.1002 15.1694 15.3857 14.6127L17.7891 9.9281C17.892 9.72738 17.7461 9.4887 17.5205 9.48865H6.60547ZM3.8916 3.99841C2.97731 3.99859 2.23577 4.73419 2.22461 5.64587L2.80273 11.8051L3.99121 9.68982C4.52181 8.74454 5.52148 8.15875 6.60547 8.15857H16.0713C15.9984 7.83286 15.9157 7.46154 15.8623 7.2074C15.7469 6.65834 15.5446 6.27958 15.2939 6.04138C15.0552 5.81454 14.7215 5.66547 14.2256 5.66541H9.81738C9.18371 5.66541 8.56619 5.4639 8.05371 5.09119L6.98926 4.31775C6.70411 4.11037 6.3604 3.99841 6.00781 3.99841H3.8916Z",
            fill: "currentColor",
          }),
        }),
      AddSourcesIcon: r.A,
      ChatsIcon: s.A,
      PaidIcon: (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.71493 1.66667H12.2838C12.9546 1.66666 13.5082 1.66665 13.9592 1.70349C14.4276 1.74177 14.8582 1.8239 15.2627 2.02998C15.8899 2.34956 16.3998 2.85949 16.7194 3.4867C16.9254 3.89114 17.0076 4.32173 17.0459 4.79015C17.0827 5.24114 17.0827 5.79476 17.0827 6.46556V17.5C17.0827 17.8203 16.8991 18.1123 16.6103 18.2511C16.3216 18.3899 15.9789 18.3508 15.7288 18.1507L14.166 16.9005L12.6033 18.1507C12.2989 18.3942 11.8665 18.3942 11.5621 18.1507L9.99935 16.9005L8.4366 18.1507C8.13225 18.3942 7.69979 18.3942 7.39544 18.1507L5.83268 16.9005L4.26993 18.1507C4.01979 18.3508 3.67708 18.3899 3.38836 18.2511C3.09964 18.1123 2.91602 17.8203 2.91602 17.5L2.91602 6.46558C2.91601 5.79478 2.916 5.24114 2.95284 4.79015C2.99112 4.32173 3.07325 3.89114 3.27933 3.4867C3.59891 2.85949 4.10884 2.34956 4.73605 2.02998C5.14049 1.8239 5.57108 1.74177 6.0395 1.70349C6.49049 1.66665 7.04413 1.66666 7.71493 1.66667ZM6.17521 3.36463C5.80987 3.39448 5.62303 3.44858 5.4927 3.51499C5.1791 3.67478 4.92413 3.92975 4.76434 4.24335C4.69793 4.37368 4.64383 4.56052 4.61398 4.92587C4.58333 5.30094 4.58268 5.78618 4.58268 6.5V15.7661L5.3121 15.1826C5.61645 14.9391 6.04891 14.9391 6.35326 15.1826L7.91602 16.4328L9.47877 15.1826C9.78312 14.9391 10.2156 14.9391 10.5199 15.1826L12.0827 16.4328L13.6454 15.1826C13.9498 14.9391 14.3822 14.9391 14.6866 15.1826L15.416 15.7661V6.5C15.416 5.78618 15.4154 5.30094 15.3847 4.92587C15.3549 4.56052 15.3008 4.37368 15.2344 4.24335C15.0746 3.92975 14.8196 3.67478 14.506 3.51499C14.3757 3.44858 14.1888 3.39448 13.8235 3.36463C13.4484 3.33398 12.9632 3.33333 12.2494 3.33333H7.74935C7.03553 3.33333 6.55029 3.33398 6.17521 3.36463ZM7.08268 7.5C7.08268 7.03976 7.45578 6.66667 7.91602 6.66667H12.0827C12.5429 6.66667 12.916 7.03976 12.916 7.5C12.916 7.96024 12.5429 8.33333 12.0827 8.33333H7.91602C7.45578 8.33333 7.08268 7.96024 7.08268 7.5ZM7.08268 10.8333C7.08268 10.3731 7.45578 10 7.91602 10H10.416C10.8763 10 11.2494 10.3731 11.2494 10.8333C11.2494 11.2936 10.8763 11.6667 10.416 11.6667H7.91602C7.45578 11.6667 7.08268 11.2936 7.08268 10.8333Z",
          }),
        }),
      GroupIcon: d.A,
    }
  },
  rcsG(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      r = a("zd8w"),
      o = a("Wf1j"),
      s = a("oyxz"),
      l = a("c2F9"),
      c = a("B2b6"),
      u = a("gviT"),
      d = a("Pg1j")
    function h(...e) {
      return e.filter(Boolean).join(" ")
    }
    function m(e) {
      let t,
        a = (0, i.c)(2)
      return (
        a[0] !== e
          ? ((t = (0, n.jsx)(x, { ...e, availableAmountMinorUnits: null, isWalletCredit: !0 })), (a[0] = e), (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    function p(e) {
      return null != e.recurring
    }
    function f(e, t) {
      return e + t.minorUnitsAmount
    }
    function g({ checkout: e }) {
      if (e.lineItems.some((e) => e.recurring?.interval === "year")) return null
      let t = e.lineItems.find((e) => e.recurring?.interval === "month")
      return null == t
        ? null
        : {
            amountMinorUnits: Math.max(
              0,
              e.total.subtotal.minorUnitsAmount -
                e.total.discount.minorUnitsAmount -
                e.total.taxInclusive.minorUnitsAmount,
            ),
            renewalAmountMinorUnits: t.subtotal.minorUnitsAmount,
          }
    }
    function C(e) {
      let t,
        a,
        r,
        s,
        l,
        c = (0, i.c)(18),
        {
          amountMinorUnits: m,
          originalAmountMinorUnits: p,
          currency: f,
          isLoading: g,
          isAmountLoading: C,
          showAmountPlaceholderWhenLoading: b,
        } = e,
        x = (0, o.A)(),
        y = g && "loading-shimmer"
      return (
        c[0] !== y ? ((t = h("flex w-full", y)), (c[0] = y), (c[1] = t)) : (t = c[1]),
        c[2] !== x ? ((a = x.formatMessage(d.DZ.firstMonthLineItemTitle)), (c[2] = x), (c[3] = a)) : (a = c[3]),
        c[4] !== a
          ? ((r = (0, n.jsx)("div", {
              className: "font-normal text-[var(--checkout-text-secondary,var(--text-secondary))]",
              children: a,
            })),
            (c[4] = a),
            (c[5] = r))
          : (r = c[5]),
        c[6] !== m || c[7] !== f || c[8] !== x.locale || c[9] !== C || c[10] !== g || c[11] !== p || c[12] !== b
          ? ((s =
              g && b
                ? (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "ms-auto h-[1em] w-16 rounded-sm bg-[var(--checkout-text-primary,var(--text-primary))]/10",
                  })
                : (0, n.jsxs)("div", {
                    className: "grow text-end font-normal",
                    children: [
                      (0, n.jsx)("span", {
                        className: C ? "loading-shimmer" : void 0,
                        children: (0, u.ej)({ amountMinorUnits: m, currency: f, locale: x.locale }),
                      }),
                      p > m &&
                        (0, n.jsx)("span", {
                          className: h(
                            "ms-1.5 text-[var(--checkout-text-tertiary,var(--text-tertiary))] line-through",
                            C && "loading-shimmer",
                          ),
                          children: (0, u.ej)({ amountMinorUnits: p, currency: f, locale: x.locale }),
                        }),
                    ],
                  })),
            (c[6] = m),
            (c[7] = f),
            (c[8] = x.locale),
            (c[9] = C),
            (c[10] = g),
            (c[11] = p),
            (c[12] = b),
            (c[13] = s))
          : (s = c[13]),
        c[14] !== t || c[15] !== r || c[16] !== s
          ? ((l = (0, n.jsx)("div", {
              className: "gap-1 text-[14px]",
              children: (0, n.jsxs)("div", { className: t, children: [r, s] }),
            })),
            (c[14] = t),
            (c[15] = r),
            (c[16] = s),
            (c[17] = l))
          : (l = c[17]),
        l
      )
    }
    function b(e) {
      let t,
        a,
        r,
        s = (0, i.c)(8),
        { isLoading: l } = e,
        c = (0, o.A)(),
        u = l && "loading-shimmer"
      return (
        s[0] !== u ? ((t = h("flex w-full items-baseline text-[12px]", u)), (s[0] = u), (s[1] = t)) : (t = s[1]),
        s[2] !== c || s[3] !== l
          ? ((a = l
              ? (0, n.jsx)("div", {
                  "aria-hidden": !0,
                  className: "h-[1em] w-36 rounded-sm bg-[var(--checkout-text-primary,var(--text-primary))]/10",
                })
              : (0, n.jsx)("div", {
                  className: "font-normal text-[var(--checkout-text-secondary,var(--text-secondary))]",
                  children: c.formatMessage(d.DZ.firstMonthFreePromotionAppliedLineItemSubtitle),
                })),
            (s[2] = c),
            (s[3] = l),
            (s[4] = a))
          : (a = s[4]),
        s[5] !== t || s[6] !== a
          ? ((r = (0, n.jsx)("div", { className: t, children: a })), (s[5] = t), (s[6] = a), (s[7] = r))
          : (r = s[7]),
        r
      )
    }
    function x(e) {
      let t,
        a,
        r,
        s = (0, i.c)(16),
        {
          availableAmountMinorUnits: l,
          balanceAdjustmentMinorUnits: c,
          currency: h,
          isWalletCredit: m,
          isLoading: p,
          showAmountPlaceholderWhenLoading: f,
        } = e,
        g = void 0 !== m && m,
        C = (0, o.A)(),
        b = c >= 0 ? d.DZ.balanceDue : g ? d.DZ.walletBalance : d.DZ.balanceAdjustment,
        x = g
          ? "text-[14px] leading-5 font-[510] tracking-[-0.15px] text-[#16853f] dark:text-green-400"
          : "font-normal text-[var(--checkout-text-secondary,var(--text-secondary))]",
        y = null == l ? void 0 : "flex flex-col leading-5"
      return (
        s[0] !== l || s[1] !== h || s[2] !== C
          ? ((t =
              null == l
                ? void 0
                : C.formatMessage(d.DZ.walletBalanceAvailable, {
                    availableBalance: (0, u.ej)({ amountMinorUnits: l, currency: h, locale: C.locale }),
                  })),
            (s[0] = l),
            (s[1] = h),
            (s[2] = C),
            (s[3] = t))
          : (t = s[3]),
        s[4] !== b || s[5] !== C ? ((a = C.formatMessage(b)), (s[4] = b), (s[5] = C), (s[6] = a)) : (a = s[6]),
        s[7] !== c ||
        s[8] !== h ||
        s[9] !== p ||
        s[10] !== f ||
        s[11] !== x ||
        s[12] !== y ||
        s[13] !== t ||
        s[14] !== a
          ? ((r = (0, n.jsx)(d.yu, {
              amountClassName: x,
              amountMinorUnits: c,
              className: y,
              currency: h,
              isLoading: p,
              showAmountPlaceholderWhenLoading: f,
              subtitle: t,
              subtitleClassName:
                "text-[var(--checkout-text-tertiary,var(--text-tertiary))] text-xs leading-4 font-normal tracking-normal whitespace-nowrap",
              title: a,
            })),
            (s[7] = c),
            (s[8] = h),
            (s[9] = p),
            (s[10] = f),
            (s[11] = x),
            (s[12] = y),
            (s[13] = t),
            (s[14] = a),
            (s[15] = r))
          : (r = s[15]),
        r
      )
    }
    function y(e) {
      let t,
        a,
        r,
        o = (0, i.c)(8),
        { quantity: l, tier: c, pending: u } = e
      ;(o[0] !== u
        ? ((t = (e) => (0, n.jsx)("span", { className: u ? "loading-shimmer" : void 0, children: e })),
          (o[0] = u),
          (o[1] = t))
        : (t = o[1]),
        o[2] !== l || o[3] !== t
          ? ((a = { seatQuantity: l, count: t }), (o[2] = l), (o[3] = t), (o[4] = a))
          : (a = o[4]))
      let d = a
      return (
        o[5] !== c || o[6] !== d
          ? ((r =
              "standard" === c
                ? (0, n.jsx)(s.A, {
                    id: "InvoiceSummary.standardBusinessSeats.numericLoading",
                    defaultMessage:
                      "{seatQuantity, plural, one {<count>#</count> standard seat} other {<count>#</count> standard seats}}",
                    description:
                      "Business invoice label. Only the number inside count is highlighted while Standard seat pricing updates; seatQuantity is the number of Standard seats.",
                    values: d,
                  })
                : (0, n.jsx)(s.A, {
                    id: "InvoiceSummary.premiumBusinessSeats.numericLoading",
                    defaultMessage:
                      "{seatQuantity, plural, one {<count>#</count> premium seat} other {<count>#</count> premium seats}}",
                    description:
                      "Business invoice label. Only the number inside count is highlighted while Premium seat pricing updates; seatQuantity is the number of Premium seats.",
                    values: d,
                  })),
            (o[5] = c),
            (o[6] = d),
            (o[7] = r))
          : (r = o[7]),
        r
      )
    }
    a.d(
      t,
      {},
      {
        O5: function (e) {
          let t,
            a,
            k,
            v,
            w,
            P,
            M,
            _,
            A,
            j,
            L,
            T,
            S,
            I,
            N,
            B,
            V,
            U,
            G,
            H,
            O,
            R,
            F,
            Z,
            D,
            E,
            W,
            z = (0, i.c)(188),
            {
              localizeKoreanTaxLabels: q,
              checkout: Q,
              businessSeatLineItems: Y,
              hideRedundantSeatSubtotal: K,
              businessDiscountTargetSeatTypes: $,
              isPlanSelectionPending: J,
              isRunningServerUpdate: X,
              businessSeatUpdatePending: ee,
              walletBalanceAllowed: et,
              WalletBalanceAdjustment: ea,
              postTrialChargeData: en,
              onUnexpectedInterval: ei,
              afterTotalCallout: er,
              immediateDiscountSettings: eo,
              showTrialSummaryLayout: es,
              renewalPreview: el,
              isRenewalPreviewLoading: ec,
              hideFirstMonthFreeSummaryTaxLine: eu,
              hideTaxLineItems: ed,
              hideNoAutoRenewalSubtitle: eh,
              showFirstMonthFreeSummaryLayout: em,
              showPremiumSeats: ep,
              subtotalTitle: ef,
              collapseDiscountsIntoSubtotal: eg,
              totalTitleOverride: eC,
              totalClassName: eb,
              discountAmountClassName: ex,
              discountAmountIcon: ey,
              discountTitleOverride: ek,
              discountSubtitleOverride: ev,
              promoCodeRow: ew,
              loadingSummaryCheckoutSnapshot: eP,
              forceSummaryLoading: eM,
              isTaxQuoteLoading: e_,
              showBalanceAdjustment: eA,
              assurances: ej,
              taxPercent: eL,
              useCompactSpacing: eT,
              spacingVariant: eS,
            } = e,
            eI = void 0 !== X && X,
            eN = void 0 === et || et,
            eB = void 0 === ea ? m : ea,
            eV = void 0 !== eg && eg,
            eU = eI && null == ee,
            eG = !0 === ee,
            eH = eG || (null != ee && eI && !ee),
            eO = eP ?? Q
          z[0] !== Y || z[1] !== Q || z[2] !== eO || z[3] !== ep
            ? ((a =
                null ==
                (t = ep
                  ? (0, l.y)({
                      businessSeatLineItems: Y ?? null,
                      lineItems: eO.lineItems,
                      subtotalMinorUnits: eO.total.subtotal.minorUnitsAmount,
                    })
                  : null)
                  ? null
                  : JSON.stringify([
                      Q.id,
                      eO.billingAddress,
                      eO.currency,
                      eO.discountAmounts,
                      eO.lineItems,
                      eO.taxAmounts,
                      eO.total,
                      t,
                    ])),
              (z[0] = Y),
              (z[1] = Q),
              (z[2] = eO),
              (z[3] = ep),
              (z[4] = t),
              (z[5] = a))
            : ((t = z[4]), (a = z[5]))
          let eR = a,
            [eF, eZ] = (0, r.useState)(null)
          null != t &&
            null != eR &&
            eF?.identity !== eR &&
            eZ({ checkout: eO, checkoutId: Q.id, identity: eR, seatSummaries: t })
          let eD = ep && null == t && (eI || (void 0 !== J && J)) && eF?.checkoutId === Q.id ? eF : null,
            eE = eD?.checkout ?? eO,
            eW = (0, o.A)(),
            ez = eE.currency
          z[6] !== eA || z[7] !== eE.total
            ? ((k = eA ? (0, c.Kn)(eE.total) : null), (z[6] = eA), (z[7] = eE.total), (z[8] = k))
            : (k = z[8])
          let eq = k,
            eQ = eE.total.taxInclusive.minorUnitsAmount,
            eY = eE.total.discount.minorUnitsAmount,
            eK = eQ > 0 && ("standaloneCredit" === eS || "inlineCredit" === eS)
          z[9] !== eK || z[10] !== eY || z[11] !== eQ || z[12] !== eE
            ? ((v = eK
                ? (0, c.Qk)(eE).invoiceTotalMinorUnits -
                  ((eE.taxAmounts ?? []).reduce(f, 0) || eQ + (eE.total.taxExclusive?.minorUnitsAmount ?? 0)) +
                  eY
                : null),
              (z[9] = eK),
              (z[10] = eY),
              (z[11] = eQ),
              (z[12] = eE),
              (z[13] = v))
            : (v = z[13])
          let e$ = v,
            eJ = eE.total.subtotal.minorUnitsAmount,
            eX = (e$ ?? eJ - eQ) - eY,
            e1 = null == ee && !0 === eM,
            e3 = !0 === es && null == el && !0 === ec,
            e0 = !0 === es && null != el,
            e2 = null == ee && !0 === es && (e3 || e1),
            e5 = !eh && eo?.no_auto_renewal_at_discount_end === !0
          if (
            z[14] !== eW ||
            z[15] !== ei ||
            z[16] !== el ||
            z[17] !== e5 ||
            z[18] !== em ||
            z[19] !== es ||
            z[20] !== eE
          ) {
            var e6, e4
            let e, t, a, i, r
            if (((M = eE.lineItems.find(p)), z[28] !== eW || z[29] !== e5)) {
              let t = []
              if (e5) {
                let e,
                  a,
                  i,
                  r = t.length > 0 && "mt-1"
                ;(z[31] !== r ? ((e = h("block", r)), (z[31] = r), (z[32] = e)) : (e = z[32]),
                  z[33] !== eW
                    ? ((a = eW.formatMessage(d.DZ.noAutoRenewalAtDiscountEnd)), (z[33] = eW), (z[34] = a))
                    : (a = z[34]),
                  z[35] !== e || z[36] !== a
                    ? ((i = (0, n.jsx)("span", { className: e, children: a }, "no-auto-renew")),
                      (z[35] = e),
                      (z[36] = a),
                      (z[37] = i))
                    : (i = z[37]),
                  t.push(i))
              }
              ;((e = t.length > 0 ? (0, n.jsx)("div", { className: "flex flex-col gap-1", children: t }) : void 0),
                (z[28] = eW),
                (z[29] = e5),
                (z[30] = e))
            } else e = z[30]
            ;((j = e),
              z[38] !== em || z[39] !== eE
                ? ((t = !0 === em ? g({ checkout: eE }) : null), (z[38] = em), (z[39] = eE), (z[40] = t))
                : (t = z[40]),
              (A = null != (P = t) && !es),
              z[41] !== el
                ? ((a =
                    null == el
                      ? null
                      : ((r = (e6 = el).lineItems.find((e) => null != e.recurring) ?? e6.lineItems[0]),
                        r?.subtotal.minorUnitsAmount ?? e6.total.subtotal.minorUnitsAmount ?? null)),
                  (z[41] = el),
                  (z[42] = a))
                : (a = z[42]),
              (w = a),
              z[43] !== el
                ? ((i =
                    null == el
                      ? 0
                      : Math.max(
                          0,
                          (e4 = el).total.subtotal.minorUnitsAmount -
                            e4.total.discount.minorUnitsAmount -
                            e4.total.taxInclusive.minorUnitsAmount,
                        )),
                  (z[43] = el),
                  (z[44] = i))
                : (i = z[44]),
              (_ = i),
              (L = (function ({ intl: e, interval: t, quantity: a, onUnexpectedInterval: n }) {
                let i = (function ({ intl: e, interval: t, onUnexpectedInterval: a }) {
                  if (!t) return null
                  switch (t) {
                    case "month":
                      return e.formatMessage(d.DZ.subscriptionIntervalMonthly)
                    case "year":
                      return e.formatMessage(d.DZ.subscriptionIntervalYearly)
                    default:
                      return (a?.(t), null)
                  }
                })({ intl: e, interval: t, onUnexpectedInterval: n })
                if (!i) return e.formatMessage(d.DZ.subtotal)
                let r = a ?? 1
                return r > 1
                  ? e.formatMessage(d.DZ.subtotalTitleSubscriptionWithQuantity, {
                      seatQuantity: r,
                      subscriptionInterval: i,
                    })
                  : e.formatMessage(d.DZ.subtotalTitleSubscription, { subscriptionInterval: i })
              })({ intl: eW, interval: M?.recurring?.interval, quantity: M?.quantity, onUnexpectedInterval: ei })),
              (z[14] = eW),
              (z[15] = ei),
              (z[16] = el),
              (z[17] = e5),
              (z[18] = em),
              (z[19] = es),
              (z[20] = eE),
              (z[21] = w),
              (z[22] = P),
              (z[23] = M),
              (z[24] = _),
              (z[25] = A),
              (z[26] = j),
              (z[27] = L))
          } else ((w = z[21]), (P = z[22]), (M = z[23]), (_ = z[24]), (A = z[25]), (j = z[26]), (L = z[27]))
          let e7 = L
          z[45] !== ee ||
          z[46] !== e7 ||
          z[47] !== M?.quantity ||
          z[48] !== M?.recurring?.interval ||
          z[49] !== eG ||
          z[50] !== ef
            ? ((T =
                ef ??
                (null != ee && (M?.quantity ?? 1) > 1
                  ? (0, n.jsx)(s.A, {
                      id: "InvoiceSummary.subscriptionWithQuantity.numericLoading",
                      defaultMessage:
                        "<count>{seatQuantity, number}</count>x {interval, select, month {Monthly} other {Yearly}} subscription",
                      description:
                        "Business invoice subtotal. seatQuantity is the seat count and interval is month or year. Only count is highlighted while the seat count updates.",
                      values: {
                        seatQuantity: M?.quantity ?? 1,
                        interval: M?.recurring?.interval ?? "month",
                        count: (e) => (0, n.jsx)("span", { className: eG ? "loading-shimmer" : void 0, children: e }),
                      },
                    })
                  : e7)),
              (z[45] = ee),
              (z[46] = e7),
              (z[47] = M?.quantity),
              (z[48] = M?.recurring?.interval),
              (z[49] = eG),
              (z[50] = ef),
              (z[51] = T))
            : (T = z[51])
          let e9 = T,
            e8 = eD?.seatSummaries ?? t,
            te = null != e8,
            tt = eE.total.subtotal.minorUnitsAmount - eE.total.discount.minorUnitsAmount,
            ta = te && !(void 0 !== K && K && 1 === e8.length && e8[0]?.amountMinorUnits === tt)
          z[52] !== $ || z[53] !== e8 || z[54] !== ez || z[55] !== eW || z[56] !== eE.discountAmounts
            ? ((S =
                null != e8 && null != $
                  ? (function ({ discountAmounts: e, currency: t, locale: a }) {
                      let n = e[0]
                      if (null == n) return null
                      let i = e.reduce((e, t) => e + t.minorUnitsAmount, 0)
                      return {
                        ...n,
                        amount: (0, u.ej)({ amountMinorUnits: i, currency: t, locale: a }),
                        minorUnitsAmount: i,
                      }
                    })({ discountAmounts: eE.discountAmounts ?? [], currency: ez, locale: eW.locale })
                  : null),
              (z[52] = $),
              (z[53] = e8),
              (z[54] = ez),
              (z[55] = eW),
              (z[56] = eE.discountAmounts),
              (z[57] = S))
            : (S = z[57])
          let tn = S,
            ti =
              null != tn && $?.length === 1
                ? $[0] === l.YO.STANDARD
                  ? "standard"
                  : $[0] === l.YO.PREMIUM
                    ? "premium"
                    : null
                : null,
            tr = null != ti && e8?.some((e) => e.type === ti) ? ti : null
          z[58] !== eV || z[59] !== tr || z[60] !== eE.discountAmounts || z[61] !== tn
            ? ((I = eV || null != tr ? [] : null != tn ? [tn] : [...(eE.discountAmounts ?? [])]),
              (z[58] = eV),
              (z[59] = tr),
              (z[60] = eE.discountAmounts),
              (z[61] = tn),
              (z[62] = I))
            : (I = z[62])
          let to = I
          z[63] !== ez ||
          z[64] !== ex ||
          z[65] !== ey ||
          z[66] !== to ||
          z[67] !== ev ||
          z[68] !== ek ||
          z[69] !== eU ||
          z[70] !== eG ||
          z[71] !== e1
            ? ((N = to.map((e, t) =>
                e.minorUnitsAmount <= 0
                  ? null
                  : (0, n.jsx)(
                      d.xF,
                      {
                        isAmountLoading: eG,
                        isLoading: eU || e1,
                        showAmountPlaceholderWhenLoading: e1,
                        amountClassName: ex,
                        amountIcon: ey,
                        discount: e,
                        titleOverride: ek,
                        subtitleOverride: ev,
                        currency: ez,
                      },
                      t,
                    ),
              )),
              (z[63] = ez),
              (z[64] = ex),
              (z[65] = ey),
              (z[66] = to),
              (z[67] = ev),
              (z[68] = ek),
              (z[69] = eU),
              (z[70] = eG),
              (z[71] = e1),
              (z[72] = N))
            : (N = z[72])
          let ts = N,
            tl =
              "inlineCredit" === eS
                ? "gap-1 text-[13px] leading-[18px] tracking-[-0.08px] [&>div]:text-[13px] [&>div]:leading-[18px]"
                : "standaloneCredit" === eS
                  ? "text-body-small-regular gap-2"
                  : "wallet" === eS || te
                    ? "gap-3"
                    : eT
                      ? "gap-1"
                      : "gap-1.5"
          ;(z[73] !== tl ? ((B = h("flex flex-col", tl)), (z[73] = tl), (z[74] = B)) : (B = z[74]),
            z[75] !== w ||
            z[76] !== ez ||
            z[77] !== eW ||
            z[78] !== e3 ||
            z[79] !== q ||
            z[80] !== ew ||
            z[81] !== el?.currency ||
            z[82] !== el?.taxAmounts ||
            z[83] !== _ ||
            z[84] !== eG ||
            z[85] !== e2 ||
            z[86] !== es ||
            z[87] !== eH ||
            z[88] !== eL
              ? ((V =
                  es &&
                  (null != w || e3 || e2) &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(d.yu, {
                        isAmountLoading: eG,
                        isLoading: e2,
                        showAmountPlaceholderWhenLoading: e2,
                        amountClassName: "text-[var(--checkout-text-secondary,var(--text-secondary))] font-normal",
                        amountMinorUnits: w ?? 0,
                        currency: el?.currency ?? ez,
                        title: eW.formatMessage(d.DZ.annualSubscription),
                      }),
                      ew,
                      (0, n.jsx)(d.Ej, {
                        isAmountLoading: eH,
                        localizeKoreanTaxLabels: q,
                        isLoading: e2,
                        showAmountPlaceholderWhenLoading: e2,
                        currency: el?.currency ?? ez,
                        taxAmounts: el?.taxAmounts ?? [],
                        taxExclusiveAmount: _,
                        taxPercent: eL,
                      }),
                    ],
                  })),
                (z[75] = w),
                (z[76] = ez),
                (z[77] = eW),
                (z[78] = e3),
                (z[79] = q),
                (z[80] = ew),
                (z[81] = el?.currency),
                (z[82] = el?.taxAmounts),
                (z[83] = _),
                (z[84] = eG),
                (z[85] = e2),
                (z[86] = es),
                (z[87] = eH),
                (z[88] = eL),
                (z[89] = V))
              : (V = z[89]),
            z[90] !== ez ||
            z[91] !== P ||
            z[92] !== eu ||
            z[93] !== eU ||
            z[94] !== q ||
            z[95] !== ew ||
            z[96] !== eG ||
            z[97] !== A ||
            z[98] !== e1 ||
            z[99] !== eE.taxAmounts ||
            z[100] !== eH ||
            z[101] !== eX ||
            z[102] !== eL
              ? ((U =
                  A &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(C, {
                        isAmountLoading: eG,
                        isLoading: eU || e1,
                        showAmountPlaceholderWhenLoading: e1,
                        amountMinorUnits: P.amountMinorUnits,
                        originalAmountMinorUnits: P.renewalAmountMinorUnits,
                        currency: ez,
                      }),
                      ew ?? (0, n.jsx)(b, { isLoading: eU || e1 }),
                      !eu &&
                        (0, n.jsx)(d.Ej, {
                          isAmountLoading: eH,
                          localizeKoreanTaxLabels: q,
                          isLoading: eU || e1,
                          showAmountPlaceholderWhenLoading: e1,
                          currency: ez,
                          taxAmounts: eE.taxAmounts ?? [],
                          taxExclusiveAmount: eX,
                          taxPercent: eL,
                        }),
                    ],
                  })),
                (z[90] = ez),
                (z[91] = P),
                (z[92] = eu),
                (z[93] = eU),
                (z[94] = q),
                (z[95] = ew),
                (z[96] = eG),
                (z[97] = A),
                (z[98] = e1),
                (z[99] = eE.taxAmounts),
                (z[100] = eH),
                (z[101] = eX),
                (z[102] = eL),
                (z[103] = U))
              : (U = z[103]),
            z[104] !== e8 ||
            z[105] !== ee ||
            z[106] !== eV ||
            z[107] !== e$ ||
            z[108] !== ez ||
            z[109] !== ex ||
            z[110] !== ey ||
            z[111] !== ts ||
            z[112] !== ev ||
            z[113] !== ek ||
            z[114] !== ed ||
            z[115] !== eW ||
            z[116] !== eU ||
            z[117] !== e_ ||
            z[118] !== q ||
            z[119] !== tr ||
            z[120] !== ew ||
            z[121] !== e9 ||
            z[122] !== eG ||
            z[123] !== tt ||
            z[124] !== A ||
            z[125] !== e1 ||
            z[126] !== ta ||
            z[127] !== es ||
            z[128] !== eS ||
            z[129] !== eJ ||
            z[130] !== j ||
            z[131] !== eE.taxAmounts ||
            z[132] !== tn ||
            z[133] !== eH ||
            z[134] !== eX ||
            z[135] !== eL
              ? ((G =
                  !es &&
                  !A &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      null == e8
                        ? (0, n.jsx)(d.yu, {
                            isAmountLoading: eG,
                            isLoading: eU || e1,
                            showAmountPlaceholderWhenLoading: e1,
                            amountClassName:
                              "inlineCredit" === eS
                                ? "text-[var(--checkout-text-tertiary,var(--text-tertiary))] font-normal"
                                : "font-normal text-[var(--checkout-text-secondary,var(--text-secondary))]",
                            amountMinorUnits: eV ? eX : (e$ ?? eJ),
                            currency: ez,
                            title: e9,
                            titleClassName:
                              "inlineCredit" === eS
                                ? "text-[var(--checkout-text-tertiary,var(--text-tertiary))]!"
                                : "standaloneCredit" === eS
                                  ? "text-[var(--checkout-text-secondary,var(--text-secondary))]!"
                                  : void 0,
                            subtitle: j,
                          })
                        : e8.map((e, t) =>
                            (0, n.jsxs)(
                              r.Fragment,
                              {
                                children: [
                                  (0, n.jsx)(d.yu, {
                                    isLoading: eU || e1,
                                    showAmountPlaceholderWhenLoading: e1,
                                    amountClassName:
                                      "font-normal text-[var(--checkout-text-secondary,var(--text-secondary))]",
                                    isAmountLoading: eG,
                                    amountMinorUnits: e.amountMinorUnits,
                                    currency: ez,
                                    title:
                                      null == ee
                                        ? eW.formatMessage(
                                            "standard" === e.type
                                              ? d.DZ.standardBusinessSeats
                                              : d.DZ.premiumBusinessSeats,
                                            { seatQuantity: e.quantity },
                                          )
                                        : (0, n.jsx)(y, { quantity: e.quantity, tier: e.type, pending: eG }),
                                    subtitle: 0 === t ? j : void 0,
                                  }),
                                  null == ew &&
                                    tr === e.type &&
                                    null != tn &&
                                    (0, n.jsx)(d.xF, {
                                      isAmountLoading: eG,
                                      amountClassName: ex,
                                      amountIcon: ey,
                                      isLoading: eU || e1,
                                      showAmountPlaceholderWhenLoading: e1,
                                      discount: tn,
                                      titleOverride: ek,
                                      subtitleOverride: ev,
                                      currency: ez,
                                    }),
                                ],
                              },
                              e.type,
                            ),
                          ),
                      ew ?? ts,
                      ta &&
                        (0, n.jsx)(d.yu, {
                          isAmountLoading: eG,
                          isLoading: eU || e1,
                          showAmountPlaceholderWhenLoading: e1,
                          amountClassName: "font-normal text-[var(--checkout-text-secondary,var(--text-secondary))]",
                          amountMinorUnits: tt,
                          currency: ez,
                          title: eW.formatMessage(d.DZ.subtotal),
                        }),
                      !ed &&
                        (0, n.jsx)(d.Ej, {
                          isAmountLoading: eH,
                          localizeKoreanTaxLabels: q,
                          isLoading: eU || e1 || e_,
                          showAmountPlaceholderWhenLoading: e1 || e_,
                          currency: ez,
                          taxAmounts: eE.taxAmounts ?? [],
                          taxExclusiveAmount: eX,
                          taxPercent: eL,
                          spacingVariant: eS,
                        }),
                    ],
                  })),
                (z[104] = e8),
                (z[105] = ee),
                (z[106] = eV),
                (z[107] = e$),
                (z[108] = ez),
                (z[109] = ex),
                (z[110] = ey),
                (z[111] = ts),
                (z[112] = ev),
                (z[113] = ek),
                (z[114] = ed),
                (z[115] = eW),
                (z[116] = eU),
                (z[117] = e_),
                (z[118] = q),
                (z[119] = tr),
                (z[120] = ew),
                (z[121] = e9),
                (z[122] = eG),
                (z[123] = tt),
                (z[124] = A),
                (z[125] = e1),
                (z[126] = ta),
                (z[127] = es),
                (z[128] = eS),
                (z[129] = eJ),
                (z[130] = j),
                (z[131] = eE.taxAmounts),
                (z[132] = tn),
                (z[133] = eH),
                (z[134] = eX),
                (z[135] = eL),
                (z[136] = G))
              : (G = z[136]),
            z[137] !== eB || z[138] !== eq || z[139] !== ez || z[140] !== eU || z[141] !== e1 || z[142] !== eN
              ? ((H =
                  null != eq &&
                  (eq < 0 && eN
                    ? (0, n.jsx)(eB, {
                        balanceAdjustmentMinorUnits: eq,
                        currency: ez,
                        isLoading: eU || e1,
                        showAmountPlaceholderWhenLoading: e1,
                      })
                    : (0, n.jsx)(x, {
                        availableAmountMinorUnits: null,
                        balanceAdjustmentMinorUnits: eq,
                        currency: ez,
                        isLoading: eU || e1,
                        showAmountPlaceholderWhenLoading: e1,
                      }))),
                (z[137] = eB),
                (z[138] = eq),
                (z[139] = ez),
                (z[140] = eU),
                (z[141] = e1),
                (z[142] = eN),
                (z[143] = H))
              : (H = z[143]),
            z[144] !== te
              ? ((O =
                  te &&
                  (0, n.jsx)("div", {
                    "data-checkout-part": "total-divider",
                    "aria-hidden": !0,
                    className: "border-t border-[var(--checkout-border-default,var(--border-default))]",
                  })),
                (z[144] = te),
                (z[145] = O))
              : (O = z[145]))
          let tc = es ? e2 : eU || e1,
            tu = es ? e2 : e1,
            td =
              eb ??
              ("standaloneCredit" === eS
                ? "text-base leading-7 font-semibold text-[#0d0d0d] dark:text-white"
                : te
                  ? "text-lg leading-7 font-semibold"
                  : "text-base font-semibold"),
            th = eG || (eH && !es && !A)
          z[146] !== eW || z[147] !== eC
            ? ((R = eC ?? eW.formatMessage(d.DZ.dueToday)), (z[146] = eW), (z[147] = eC), (z[148] = R))
            : (R = z[148])
          let tm =
              "standaloneCredit" === eS || "inlineCredit" === eS || "wallet" === eS || te
                ? "mt-0"
                : eT
                  ? "mt-1"
                  : "mt-1.5",
            tp =
              eb ??
              ("standaloneCredit" === eS
                ? "text-base leading-7 font-semibold! text-[#0d0d0d]! dark:text-white!"
                : te
                  ? "text-lg leading-7 font-medium! text-[var(--checkout-text-primary,var(--text-primary))]!"
                  : "text-base font-medium! text-[var(--checkout-text-primary,var(--text-primary))]!")
          return (
            z[149] !== ez ||
            z[150] !== eE.total.total.minorUnitsAmount ||
            z[151] !== tc ||
            z[152] !== tu ||
            z[153] !== td ||
            z[154] !== th ||
            z[155] !== R ||
            z[156] !== tm ||
            z[157] !== tp
              ? ((F = (0, n.jsx)(d.yu, {
                  isLoading: tc,
                  showAmountPlaceholderWhenLoading: tu,
                  amountClassName: td,
                  isAmountLoading: th,
                  amountMinorUnits: eE.total.total.minorUnitsAmount,
                  currency: ez,
                  title: R,
                  className: tm,
                  titleClassName: tp,
                })),
                (z[149] = ez),
                (z[150] = eE.total.total.minorUnitsAmount),
                (z[151] = tc),
                (z[152] = tu),
                (z[153] = td),
                (z[154] = th),
                (z[155] = R),
                (z[156] = tm),
                (z[157] = tp),
                (z[158] = F))
              : (F = z[158]),
            z[159] !== er
              ? ((Z = er ? (0, n.jsx)("div", { className: "mt-3", children: er }) : null), (z[159] = er), (z[160] = Z))
              : (Z = z[160]),
            z[161] !== eW || z[162] !== el || z[163] !== eG || z[164] !== e0
              ? ((D =
                  e0 &&
                  el.renewalAt > 0 &&
                  (0, n.jsx)(d.yu, {
                    isAmountLoading: eG,
                    isLoading: !1,
                    amountClassName: "text-[var(--checkout-text-secondary,var(--text-secondary))] font-normal",
                    amountMinorUnits: el.total.total.minorUnitsAmount,
                    currency: el.currency,
                    title: eW.formatMessage(d.DZ.dueOnDate, {
                      renewalDate: eW.formatDate(1e3 * el.renewalAt, {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    }),
                    titleClassName: "text-[var(--checkout-text-secondary,var(--text-secondary))] font-normal",
                  })),
                (z[161] = eW),
                (z[162] = el),
                (z[163] = eG),
                (z[164] = e0),
                (z[165] = D))
              : (D = z[165]),
            z[166] !== ez ||
            z[167] !== eW ||
            z[168] !== eU ||
            z[169] !== e3 ||
            z[170] !== en ||
            z[171] !== el ||
            z[172] !== eG ||
            z[173] !== e1 ||
            z[174] !== es
              ? ((E =
                  es &&
                  null == el &&
                  !e3 &&
                  en?.amountMinorUnits != null &&
                  en.trialDurationInDays > 0 &&
                  (0, n.jsx)(d.yu, {
                    isAmountLoading: eG,
                    isLoading: eU || e1,
                    showAmountPlaceholderWhenLoading: e1,
                    amountClassName: "text-[var(--checkout-text-secondary,var(--text-secondary))] font-normal",
                    amountMinorUnits: en.amountMinorUnits,
                    currency: ez,
                    title: eW.formatMessage(d.DZ.afterTrialLineItemTitle, {
                      trialDurationInDays: en.trialDurationInDays,
                    }),
                    titleClassName: "text-[var(--checkout-text-secondary,var(--text-secondary))] font-normal",
                  })),
                (z[166] = ez),
                (z[167] = eW),
                (z[168] = eU),
                (z[169] = e3),
                (z[170] = en),
                (z[171] = el),
                (z[172] = eG),
                (z[173] = e1),
                (z[174] = es),
                (z[175] = E))
              : (E = z[175]),
            z[176] !== ej ||
            z[177] !== B ||
            z[178] !== V ||
            z[179] !== U ||
            z[180] !== G ||
            z[181] !== H ||
            z[182] !== O ||
            z[183] !== F ||
            z[184] !== Z ||
            z[185] !== D ||
            z[186] !== E
              ? ((W = (0, n.jsxs)("div", { className: B, children: [V, U, G, H, O, F, Z, D, E, ej] })),
                (z[176] = ej),
                (z[177] = B),
                (z[178] = V),
                (z[179] = U),
                (z[180] = G),
                (z[181] = H),
                (z[182] = O),
                (z[183] = F),
                (z[184] = Z),
                (z[185] = D),
                (z[186] = E),
                (z[187] = W))
              : (W = z[187]),
            W
          )
        },
        tv: g,
      },
    )
  },
  Pg1j(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      r = a("Wf1j"),
      o = a("oyxz"),
      s = a("Qgfj"),
      l = a("IfYT"),
      c = a("gviT")
    function u(...e) {
      return e.filter(Boolean).join(" ")
    }
    function d(e) {
      let t,
        a,
        s,
        l,
        d,
        h,
        p,
        f,
        g,
        C,
        b,
        x = (0, i.c)(40),
        {
          amountClassName: y,
          amountIcon: k,
          amountMinorUnits: v,
          currency: w,
          subtitle: P,
          subtitleClassName: M,
          title: _,
          quantity: A,
          unitAmountMinorUnits: j,
          className: L,
          titleClassName: T,
          isLoading: S,
          isAmountLoading: I,
          showAmountPlaceholderWhenLoading: N,
        } = e,
        B = (0, r.A)()
      x[0] !== L ? ((t = u("gap-1 text-[14px]", L)), (x[0] = L), (x[1] = t)) : (t = x[1])
      let V = S && "loading-shimmer"
      return (
        x[2] !== V ? ((a = u("flex w-full", V)), (x[2] = V), (x[3] = a)) : (a = x[3]),
        x[4] !== T
          ? ((s = u("text-[var(--checkout-text-secondary,var(--text-secondary))] font-normal", T)),
            (x[4] = T),
            (x[5] = s))
          : (s = x[5]),
        x[6] !== s || x[7] !== _
          ? ((l = (0, n.jsx)("div", { className: s, children: _ })), (x[6] = s), (x[7] = _), (x[8] = l))
          : (l = x[8]),
        x[9] !== y ||
        x[10] !== k ||
        x[11] !== v ||
        x[12] !== w ||
        x[13] !== B ||
        x[14] !== I ||
        x[15] !== S ||
        x[16] !== N
          ? ((d =
              S && N
                ? (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: "ms-auto h-[1em] w-16 rounded-sm bg-token-text-primary/10",
                  })
                : (0, n.jsxs)("div", {
                    className: u(y, "text-end", "grow"),
                    children: [
                      k,
                      I
                        ? (0, n.jsx)("span", {
                            className: "loading-shimmer",
                            children: (0, c.ej)({ amountMinorUnits: v, currency: w, locale: B.locale }),
                          })
                        : (0, c.ej)({ amountMinorUnits: v, currency: w, locale: B.locale }),
                    ],
                  })),
            (x[9] = y),
            (x[10] = k),
            (x[11] = v),
            (x[12] = w),
            (x[13] = B),
            (x[14] = I),
            (x[15] = S),
            (x[16] = N),
            (x[17] = d))
          : (d = x[17]),
        x[18] !== a || x[19] !== l || x[20] !== d
          ? ((h = (0, n.jsxs)("div", { className: a, children: [l, d] })),
            (x[18] = a),
            (x[19] = l),
            (x[20] = d),
            (x[21] = h))
          : (h = x[21]),
        x[22] !== A
          ? ((p =
              A &&
              A > 1 &&
              (0, n.jsx)("div", {
                className: "me-1 rounded-sm bg-gray-100 px-1",
                children: (0, n.jsx)(o.A, { ...m.lineItemQuantity, values: { itemQuantity: A } }),
              })),
            (x[22] = A),
            (x[23] = p))
          : (p = x[23]),
        x[24] !== P || x[25] !== M
          ? ((f =
              P &&
              (0, n.jsx)("div", {
                className: M ?? "text-[var(--checkout-text-secondary,var(--text-secondary))]",
                children: P,
              })),
            (x[24] = P),
            (x[25] = M),
            (x[26] = f))
          : (f = x[26]),
        x[27] !== w || x[28] !== B || x[29] !== A || x[30] !== j
          ? ((g =
              A &&
              A > 1 &&
              j &&
              (0, n.jsx)("div", {
                className: "grow text-end text-[var(--checkout-text-secondary,var(--text-secondary))]",
                children: (0, n.jsx)(o.A, {
                  ...m.lineItemPricePerSeat,
                  values: { formattedAmount: (0, c.ej)({ amountMinorUnits: j, currency: w, locale: B.locale }) },
                }),
              })),
            (x[27] = w),
            (x[28] = B),
            (x[29] = A),
            (x[30] = j),
            (x[31] = g))
          : (g = x[31]),
        x[32] !== g || x[33] !== p || x[34] !== f
          ? ((C = (0, n.jsxs)("div", { className: "flex w-full items-baseline text-[12px]", children: [p, f, g] })),
            (x[32] = g),
            (x[33] = p),
            (x[34] = f),
            (x[35] = C))
          : (C = x[35]),
        x[36] !== t || x[37] !== C || x[38] !== h
          ? ((b = (0, n.jsxs)("div", { className: t, children: [h, C] })),
            (x[36] = t),
            (x[37] = C),
            (x[38] = h),
            (x[39] = b))
          : (b = x[39]),
        b
      )
    }
    function h(e, t, a) {
      let n,
        i = (t.percentOff ?? 0) / 100,
        r = t.amount ?? (0, c.ej)({ amountMinorUnits: t.minorUnitsAmount, currency: a, locale: e.locale }),
        o = t.recurring,
        s = o?.type === "repeating" ? o.durationInMonths : null
      return (
        (n =
          t.recurring && "repeating" === t.recurring.type
            ? i
              ? m.discountPercentOffRecurring
              : m.fixedAmountOffRecurring
            : t.recurring
              ? i
                ? m.discountPercentOffIndefinite
                : m.fixedAmountOffIndefinite
              : i
                ? m.discountPercentOffOnce
                : m.fixedAmountOffOnce),
        e.formatMessage(n, { formattedAmount: r, percentOff: i, durationInMonths: s })
      )
    }
    let m = (0, s.YK)({
      balanceAdjustment: {
        id: "InvoiceSummary.balanceAdjustment",
        defaultMessage: "Adjustments",
        description:
          "Short line-item label in a ChatGPT checkout invoice summary. It identifies existing non-gift-card customer credit that lowers the amount due for a purchase billed in a currency other than US dollars. This is a generic billing adjustment, not a gift-card Wallet balance. Keep the label concise.",
      },
      balanceDue: {
        id: "InvoiceSummary.balanceDue",
        defaultMessage: "Balance due",
        description:
          "Short line-item label in a ChatGPT checkout invoice summary. It identifies a positive customer balance adjustment added to the amount due today.",
      },
      walletBalance: {
        id: "InvoiceSummary.walletBalance",
        defaultMessage: "Wallet balance",
        description:
          "Short line-item label in a ChatGPT checkout invoice summary. It identifies the pooled wallet balance that has automatically changed the amount due today. The balance can include gift-card funds or other account adjustments.",
      },
      walletBalanceAvailable: {
        id: "InvoiceSummary.walletBalanceAvailable",
        defaultMessage: "{availableBalance} available",
        description:
          "Short, single-line helper text beneath the Wallet balance label in a ChatGPT checkout invoice summary. It tells an end user how much Wallet credit is currently available on the account, which is distinct from the green amount applied to today's purchase. Placeholder {availableBalance} is the user's locale-formatted available Wallet credit, including its currency symbol; it is never empty or redacted. No links or markup are allowed.",
      },
      subtotal: {
        id: "InvoiceSummary.subtotal",
        description:
          "Text describing the subtotal of the invoice (price before any exclusive taxes, discounts, or prepayments)",
        defaultMessage: "Subtotal",
      },
      subtotalTitleSubscription: {
        id: "InvoiceSummary.subtotalTitleSubscription",
        defaultMessage: "{subscriptionInterval} subscription",
        description:
          "{subscriptionInterval} subscription, something like monthly subscription or yearly subscription. Line item that tells the user the total price of the subscription for the given interval.",
      },
      subtotalTitleSubscriptionWithQuantity: {
        id: "InvoiceSummary.subtotalTitleSubscriptionWithQuantity",
        defaultMessage: "{seatQuantity, number}x {subscriptionInterval} subscription",
        description:
          "Subtotal label shown in checkout redesign when multiple seats are purchased. {seatQuantity} is the number of seats, {subscriptionInterval} is the localized billing cadence (for example, Monthly or Yearly).",
      },
      standardBusinessSeats: {
        id: "InvoiceSummary.standardBusinessSeats",
        defaultMessage: "{seatQuantity, plural, one {# standard seat} other {# standard seats}}",
        description:
          "Line-item label for Standard seats in a Business checkout invoice summary. {seatQuantity} is the number of Standard seats.",
      },
      premiumBusinessSeats: {
        id: "InvoiceSummary.premiumBusinessSeats",
        defaultMessage: "{seatQuantity, plural, one {# premium seat} other {# premium seats}}",
        description:
          "Line-item label for Premium seats in a Business checkout invoice summary. {seatQuantity} is the number of Premium seats.",
      },
      subscriptionIntervalMonthly: {
        id: "InvoiceSummary.subscriptionIntervalMonthly",
        defaultMessage: "Monthly",
        description:
          "Label describing a monthly billing cadence for the redesigned checkout subtotal. Keep it short and capitalize the first letter.",
      },
      subscriptionIntervalYearly: {
        id: "InvoiceSummary.subscriptionIntervalYearly",
        defaultMessage: "Yearly",
        description:
          "Label describing a yearly billing cadence for the redesigned checkout subtotal. Keep it short and capitalize the first letter.",
      },
      dueToday: {
        id: "InvoiceSummary.dueToday",
        description: "Text describing the total due today of the invoice",
        defaultMessage: "Due today",
      },
      dueOnDate: {
        id: "InvoiceSummary.dueOnDate",
        defaultMessage: "Due {renewalDate}",
        description:
          "Label for the future subscription charge line in a trial checkout invoice summary. {renewalDate} is a localized date when the first paid subscription invoice is due.",
      },
      annualSubscription: {
        id: "InvoiceSummary.annualSubscription",
        defaultMessage: "Annual subscription",
        description:
          "Invoice summary line item for the annual subscription amount that will be charged after a free trial ends.",
      },
      firstMonthLineItemTitle: {
        id: "InvoiceSummary.firstMonthLineItemTitle",
        defaultMessage: "First month",
        description:
          "Left-column line item title for the first billing period in the invoice summary during a first-month-free offer. Neutral noun phrase; do not add 'free,' currency symbols, or punctuation. Short label used as a row title.",
      },
      firstMonthFreePromotionAppliedLineItemSubtitle: {
        id: "InvoiceSummary.firstMonthFreePromotionAppliedLineItemSubtitle",
        defaultMessage: "Promotion applied",
        description:
          "Standalone helper line below the first-month row in the checkout invoice summary for a first-month-free offer. It confirms that a promotion reduced the first month's price. Short neutral phrase; no punctuation.",
      },
      afterTrialLineItemTitle: {
        id: "InvoiceSummary.afterTrialLineItemTitle",
        defaultMessage: "After {trialDurationInDays, number} days",
        description:
          "Line item label shown under the invoice total in the checkout summary, indicating when recurring billing begins after a free trial. Displayed on the trial checkout page. Placeholder {trialDurationInDays} is the number of days in the free trial; it is a number and should remain a numeric value.",
      },
      tax: { id: "InvoiceSummary.tax", description: "Text denote the line item is tax", defaultMessage: "Tax" },
      estimatedTax: {
        id: "InvoiceSummary.estimatedTax",
        description: "Text describing the estimated tax of the invoice",
        defaultMessage: "Estimated tax",
      },
      discountLineItemTitle: {
        id: "InvoiceSummary.discountLineItemTitle",
        description:
          "Label for the discount line item shown in the redesigned checkout invoice summary. Appears to the left of the discounted amount.",
        defaultMessage: "Promotion",
      },
      discountPercentOffIndefinite: {
        id: "InvoiceSummary.discountPercentOffIndefinite",
        description: "Text describing a discount for a percentage off which applies to an indefinite period",
        defaultMessage: "{percentOff, number, ::percent} off",
      },
      lineItemQuantity: {
        id: "InvoiceSummary.lineItemQuantity",
        description:
          "Abbreviated label for item quantity shown in a small badge (e.g., 'Qty 3') on an invoice line item. Use a short/abbreviated form suitable for your language. Shown only when quantity > 1; no colon.",
        defaultMessage: "Qty {itemQuantity, number}",
      },
      lineItemPricePerSeat: {
        id: "InvoiceSummary.lineItemPricePerSeat",
        description:
          "Unit price for a single software license ('seat') displayed on an invoice line item, shown only when quantity > 1. formattedAmount is a preformatted currency string (e.g., '$12.00'); keep it as-is and do not reorder. Do not include billing interval; it is shown separately.",
        defaultMessage: "{formattedAmount} per seat",
      },
      discountPercentOffOnce: {
        id: "InvoiceSummary.discountPercentOffOnce",
        description: "Text describing a discount for a percentage off which applies only to the initial purchase",
        defaultMessage: "{percentOff, number, ::percent} off for a month",
      },
      discountPercentOffRecurring: {
        id: "InvoiceSummary.discountPercentOffRecurring",
        description: "Text describing a discount for a percentage off which applies to a set number of months",
        defaultMessage:
          "{percentOff, number, ::percent} off for {durationInMonths, plural, one {a month} other {{durationInMonths, number} months}}",
      },
      fixedAmountOffIndefinite: {
        id: "InvoiceSummary.fixedAmountOffIndefinite",
        description: "Text describing a discount for a fixed amount off which applies to an indefinite period",
        defaultMessage: "{formattedAmount} off",
      },
      fixedAmountOffOnce: {
        id: "InvoiceSummary.fixedAmountOffOnce",
        description: "Text describing a discount for a fixed amount off which applies only to the initial purchase",
        defaultMessage: "{formattedAmount} off for a month",
      },
      fixedAmountOffRecurring: {
        id: "InvoiceSummary.fixedAmountOffRecurring",
        description: "Text describing a discount for a fixed amount off which applies to a set number of months",
        defaultMessage:
          "{formattedAmount} off for {durationInMonths, plural, one {a month} other {{durationInMonths, number} months}}",
      },
      scheduledOfferApplied: {
        id: "InvoiceSummary.scheduledOfferApplied",
        description:
          "Banner copy shown inside the invoice summary when a scheduled discount is active. {offerName} is the localized scheduled discount description.",
        defaultMessage: "Offer applied: {offerName}",
      },
      businessSocialProofBanner: {
        id: "InvoiceSummary.businessSocialProofBannerCapped",
        description:
          "Banner copy shown inside the invoice summary sharing the capped number of other businesses that created a workspace today. The number is rounded and capped which is why we show a plus sign.",
        defaultMessage: "{numRecentPlanCompletions}+ businesses created a workspace today",
      },
      plusPersonalSocialProofBanner: {
        id: "InvoiceSummary.plusPersonalSocialProofBanner",
        description:
          "Banner copy shown inside the invoice summary sidebar on the redesigned ChatGPT checkout page when a user is buying the Plus personal plan. It gives end users evidence that millions of other people recently chose this plan. Keep the tone concise and encouraging because it appears in a small promotional banner.",
        defaultMessage: "Join millions of people who chose Plus in the past month",
      },
      goPersonalSocialProofBanner: {
        id: "InvoiceSummary.goPersonalSocialProofBanner",
        description:
          "Banner copy shown inside the invoice summary sidebar on the redesigned ChatGPT checkout page when a user is buying the Go personal plan. It gives end users evidence that millions of other people recently chose this plan. Keep the tone concise and encouraging because it appears in a small promotional banner.",
        defaultMessage: "Join millions of people who chose Go in the past month",
      },
      noAutoRenewalAtDiscountEnd: {
        id: "InvoiceSummary.noAutoRenewalAtDiscountEnd",
        description: "Text describing that the subscription will not auto-renew after the discount ends",
        defaultMessage: "No auto-renew",
      },
      noCommitmentTitle: {
        id: "InvoiceSummary.noCommitmentTitle",
        defaultMessage: "No commitment",
        description:
          "Short title for a reassurance row in the ChatGPT subscription checkout invoice summary. It tells individual and business checkout users that they are not locked into a long-term commitment. Keep it concise because it appears next to a small icon above explanatory body copy.",
      },
      noCommitmentDescription: {
        id: "InvoiceSummary.noCommitmentDescription",
        defaultMessage:
          "Cancel anytime in Settings. Your subscription will end immediately, and you will receive a refund for the unused portion of your current billing period. <learnMoreLink>Learn more</learnMoreLink>",
        description:
          "Body copy for a reassurance row in the ChatGPT subscription checkout invoice summary, shown to individual and business users when the invoice has a recurring subscription. The tone should be reassuring and factual. Keep the <learnMoreLink> tag around only the translated 'Learn more' text.",
      },
      refundPolicyTitle: {
        id: "InvoiceSummary.refundPolicyTitle",
        defaultMessage: "Refund policy",
        description:
          "Short title for a reassurance row in the ChatGPT subscription checkout invoice summary. It introduces refund-policy details for individual and business checkout users. Keep it concise because it appears next to a small icon above explanatory body copy.",
      },
      refundPolicyDescription: {
        id: "InvoiceSummary.refundPolicyDescription",
        defaultMessage:
          "Full refund available within 7 days of purchase if advanced features have not been used. All other payments are non-refundable, except as required by law. <learnMoreLink>Learn more</learnMoreLink>",
        description:
          "Body copy for a refund-policy reassurance row in the ChatGPT subscription checkout invoice summary, shown to individual and business users when the invoice has a recurring subscription. The tone should be reassuring and factual. Keep the <learnMoreLink> tag around only the translated 'Learn more' text.",
      },
      secureCheckoutTitle: {
        id: "InvoiceSummary.secureCheckoutTitle",
        defaultMessage: "Secure checkout",
        description:
          "Short title for a trust reassurance row in the ChatGPT subscription checkout invoice summary. It tells individual and business checkout users that payment processing is secure. Keep it concise because it appears next to a small lock icon above explanatory body copy.",
      },
      secureCheckoutDescription: {
        id: "InvoiceSummary.secureCheckoutDescription",
        defaultMessage: "Your payment details are encrypted and processed securely.",
        description:
          "Body copy for a trust reassurance row in the ChatGPT subscription checkout invoice summary, shown to individual and business users when the gated checkout assurances are visible. The tone should be reassuring and factual. The text appears as a short multi-line paragraph next to a small lock icon.",
      },
      showAllFeatures: {
        id: "CheckoutSummary.showAllFeatures",
        defaultMessage: "Show all features",
        description:
          "Button label in the checkout feature list. Expands the collapsed list to show all features included with the currently selected plan. Imperative tone.",
      },
    })
    a.d(
      t,
      {},
      {
        DZ: m,
        Ej: function (e) {
          let t = (0, i.c)(31),
            {
              localizeKoreanTaxLabels: a,
              taxAmounts: o,
              currency: s,
              taxExclusiveAmount: c,
              taxPercent: u,
              isLoading: h,
              isAmountLoading: p,
              showAmountPlaceholderWhenLoading: f,
              spacingVariant: g,
            } = e,
            C = void 0 === g ? "default" : g,
            b = (0, r.A)()
          if (0 === o.length || (h && f)) {
            let e,
              a,
              i =
                "inlineCredit" === C
                  ? "text-[var(--checkout-text-tertiary,var(--text-tertiary))] font-normal"
                  : "text-[var(--checkout-text-secondary,var(--text-secondary))] font-normal"
            t[0] !== b ? ((e = b.formatMessage(m.estimatedTax)), (t[0] = b), (t[1] = e)) : (e = t[1])
            let r =
              "inlineCredit" === C
                ? "text-[var(--checkout-text-tertiary,var(--text-tertiary))]!"
                : "standaloneCredit" === C
                  ? "text-[var(--checkout-text-secondary,var(--text-secondary))]!"
                  : void 0
            return (
              t[2] !== s || t[3] !== p || t[4] !== h || t[5] !== f || t[6] !== i || t[7] !== e || t[8] !== r
                ? ((a = (0, n.jsx)(d, {
                    isLoading: h,
                    isAmountLoading: p,
                    showAmountPlaceholderWhenLoading: f,
                    amountMinorUnits: 0,
                    amountClassName: i,
                    currency: s,
                    title: e,
                    titleClassName: r,
                  })),
                  (t[2] = s),
                  (t[3] = p),
                  (t[4] = h),
                  (t[5] = f),
                  (t[6] = i),
                  (t[7] = e),
                  (t[8] = r),
                  (t[9] = a))
                : (a = t[9]),
              a
            )
          }
          {
            let e
            if (
              t[10] !== s ||
              t[11] !== b ||
              t[12] !== p ||
              t[13] !== h ||
              t[14] !== a ||
              t[15] !== f ||
              t[16] !== C ||
              t[17] !== o ||
              t[18] !== c ||
              t[19] !== u
            ) {
              let i
              ;(t[21] !== s ||
              t[22] !== b ||
              t[23] !== p ||
              t[24] !== h ||
              t[25] !== a ||
              t[26] !== f ||
              t[27] !== C ||
              t[28] !== c ||
              t[29] !== u
                ? ((i = (e, t) => {
                    let i = e.displayName ? e.displayName : b.formatMessage(m.tax),
                      r = (function ({ minorUnitsAmount: e, taxExclusiveAmount: t, taxPercent: a }) {
                        return t ? (e / t) * 100 : (a ?? 0)
                      })({ minorUnitsAmount: e.minorUnitsAmount, taxExclusiveAmount: c, taxPercent: u }),
                      o = (0, l.XQ)({ name: i, rate: r, localizeKoreanTaxLabels: a, intl: b })
                    return (0, n.jsx)(
                      d,
                      {
                        isLoading: h,
                        isAmountLoading: p,
                        showAmountPlaceholderWhenLoading: f,
                        amountMinorUnits: e.minorUnitsAmount,
                        amountClassName:
                          "inlineCredit" === C
                            ? "text-[var(--checkout-text-tertiary,var(--text-tertiary))] font-normal"
                            : "text-[var(--checkout-text-secondary,var(--text-secondary))] font-normal",
                        currency: s,
                        title: o,
                        titleClassName:
                          "inlineCredit" === C
                            ? "text-[var(--checkout-text-tertiary,var(--text-tertiary))]!"
                            : "standaloneCredit" === C
                              ? "text-[var(--checkout-text-secondary,var(--text-secondary))]!"
                              : void 0,
                      },
                      t,
                    )
                  }),
                  (t[21] = s),
                  (t[22] = b),
                  (t[23] = p),
                  (t[24] = h),
                  (t[25] = a),
                  (t[26] = f),
                  (t[27] = C),
                  (t[28] = c),
                  (t[29] = u),
                  (t[30] = i))
                : (i = t[30]),
                (e = o.map(i)),
                (t[10] = s),
                (t[11] = b),
                (t[12] = p),
                (t[13] = h),
                (t[14] = a),
                (t[15] = f),
                (t[16] = C),
                (t[17] = o),
                (t[18] = c),
                (t[19] = u),
                (t[20] = e))
            } else e = t[20]
            return e
          }
        },
        Xx: h,
        xF: function (e) {
          let t,
            a,
            o,
            s = (0, i.c)(20),
            {
              amountClassName: l,
              amountIcon: c,
              discount: u,
              currency: p,
              isNested: f,
              titleOverride: g,
              subtitleOverride: C,
              isLoading: b,
              isAmountLoading: x,
              showAmountPlaceholderWhenLoading: y,
            } = e,
            k = (0, r.A)(),
            v = -1 * u.minorUnitsAmount
          s[0] !== p || s[1] !== u || s[2] !== k || s[3] !== C
            ? ((t = C ?? h(k, u, p)), (s[0] = p), (s[1] = u), (s[2] = k), (s[3] = C), (s[4] = t))
            : (t = s[4])
          let w = t,
            P = l ?? "text-blue-500 dark:text-blue-100 font-normal"
          s[5] !== k || s[6] !== g
            ? ((a = g ?? k.formatMessage(m.discountLineItemTitle)), (s[5] = k), (s[6] = g), (s[7] = a))
            : (a = s[7])
          let M = f ? "ps-4" : void 0,
            _ = f ? "text-[var(--checkout-text-secondary,var(--text-secondary))] ps-4" : void 0
          return (
            s[8] !== c ||
            s[9] !== v ||
            s[10] !== p ||
            s[11] !== x ||
            s[12] !== b ||
            s[13] !== y ||
            s[14] !== w ||
            s[15] !== P ||
            s[16] !== a ||
            s[17] !== M ||
            s[18] !== _
              ? ((o = (0, n.jsx)(d, {
                  isLoading: b,
                  isAmountLoading: x,
                  showAmountPlaceholderWhenLoading: y,
                  amountMinorUnits: v,
                  amountClassName: P,
                  amountIcon: c,
                  currency: p,
                  title: a,
                  subtitle: w,
                  titleClassName: M,
                  subtitleClassName: _,
                })),
                (s[8] = c),
                (s[9] = v),
                (s[10] = p),
                (s[11] = x),
                (s[12] = b),
                (s[13] = y),
                (s[14] = w),
                (s[15] = P),
                (s[16] = a),
                (s[17] = M),
                (s[18] = _),
                (s[19] = o))
              : (o = s[19]),
            o
          )
        },
        yu: d,
      },
    )
  },
  BOFv(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      r = a("on57"),
      o = a("AWhs")
    a.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            a,
            s,
            l,
            c,
            u,
            d = (0, i.c)(13)
          d[0] !== e
            ? (({ isDarkMode: l, presentation: a, className: t, ...s } = e),
              (d[0] = e),
              (d[1] = t),
              (d[2] = a),
              (d[3] = s),
              (d[4] = l))
            : ((t = d[1]), (a = d[2]), (s = d[3]), (l = d[4]))
          let h = void 0 !== l && l,
            m =
              "modal" === a &&
              "popover overflow-hidden rounded-2xl bg-surface text-default shadow-xl ring-1 ring-border ring-inset"
          d[5] !== t || d[6] !== m
            ? ((c = (0, r.A)(o.A.root, o.A.modal, m, t)), (d[5] = t), (d[6] = m), (d[7] = c))
            : (c = d[7])
          let p = h ? "dark" : "light"
          return (
            d[8] !== a || d[9] !== s || d[10] !== c || d[11] !== p
              ? ((u = (0, n.jsx)("div", {
                  ...s,
                  className: c,
                  "data-checkout-presentation": a,
                  "data-checkout-theme": p,
                })),
                (d[8] = a),
                (d[9] = s),
                (d[10] = c),
                (d[11] = p),
                (d[12] = u))
              : (u = d[12]),
            u
          )
        },
      },
    )
  },
  hm9l(e, t, a) {
    var n = a("Qgfj"),
      i = a("iE0s"),
      r = a("avvo")
    let o = {
      ...(0, n.YK)({
        nextBilling: {
          id: "checkout.noPaymentTrial.nextBilling",
          defaultMessage: "Next billing: {amount} on {date}",
          description:
            "Upcoming payment below the verified free-month invoice. Amount and date come from the payment provider, not the client clock.",
        },
        heading: {
          id: "CheckoutRedesignPage.noPaymentTrial.extendHeading",
          defaultMessage: "Get 30 more days of Plus for free",
          description: "Checkout heading for a cardless Plus trial account with a confirmed one-month-free offer.",
        },
        keepHeading: {
          id: "CheckoutRedesignPage.noPaymentTrial.keepHeading",
          defaultMessage: "Keep access to ChatGPT Plus",
          description: "Checkout heading for a cardless Plus trial account purchasing Plus without an extension offer.",
        },
        upgrade: {
          id: "CheckoutRedesignPage.noPaymentTrial.upgradeToPlus",
          defaultMessage: "Upgrade to Plus",
          description: "Checkout button for a cardless Plus trial account buying a regular Plus subscription.",
        },
        subscribeAndPay: {
          id: "checkout.noPaymentTrial.subscribeAndPay",
          defaultMessage: "Subscribe and pay",
          description:
            "Confirmation button for a cardless Plus trial account in EU/UK checkout. Preserves the exact action named by the existing region-specific subscription consent disclosure.",
        },
        claim: {
          id: "CheckoutRedesignPage.noPaymentTrial.claimFreeOffer",
          defaultMessage: "Claim free offer",
          description:
            "Primary confirmation button in checkout after a cardless Plus trial user selects a confirmed one-month-free ChatGPT Plus offer. Submits checkout to claim that offer. Use a short, neutral action label with no punctuation; this is not a student offer.",
        },
        plan: {
          id: "CheckoutSummary.noPaymentTrial.plan",
          defaultMessage: "ChatGPT Plus trial",
          description: "Plan heading for the confirmed cardless Plus trial extension offer.",
        },
        duration: {
          id: "CheckoutSummary.noPaymentTrial.duration",
          defaultMessage: "1 month free",
          description: "Badge for a confirmed one-month-free Plus trial extension coupon.",
        },
        renewal: {
          id: "CheckoutRedesignPage.noPaymentTrial.summaryRenewal",
          defaultMessage: "{dueToday} today, renews at {renewalPrice}/month + tax \u2014 cancel anytime",
          description:
            "Confirmed free-month offer summary. Amounts come from checkout; renewal price is the monthly subtotal before applicable tax.",
        },
        applied: {
          id: "CheckoutSummary.noPaymentTrial.offerApplied",
          defaultMessage: "Trial offer applied: 1 month free",
          description: "Confirmation of a provider-verified one-month-free Plus trial extension coupon.",
        },
        intelligence: {
          id: "CheckoutSummary.noPaymentTrial.upgradeIntelligence",
          defaultMessage: "Advanced intelligence for complex tasks",
          description: "Plus feature on the cardless trial extension or regular upgrade checkout.",
        },
        images: {
          id: "CheckoutSummary.noPaymentTrial.images",
          defaultMessage: "Higher quality image creation",
          description: "Plus image feature on the cardless trial checkout.",
        },
        work: {
          id: "CheckoutSummary.noPaymentTrial.work",
          defaultMessage: "Work agent to act across apps and files",
          description: "Plus agent feature on the cardless trial checkout.",
        },
        memory: {
          id: "CheckoutSummary.noPaymentTrial.memory",
          defaultMessage: "Expanded memory and 20 GB of storage",
          description: "Plus memory and storage feature on the cardless trial checkout.",
        },
        savePaymentMethod: {
          id: "CheckoutRedesignPage.noPaymentTrial.savePaymentMethod",
          defaultMessage: "Save payment method",
          description: "Payment section heading for a cardless Plus trial account claiming a confirmed free month.",
        },
      }),
      cancel: r.q9.cancelAnytime,
    }
    a.d(
      t,
      {},
      {
        UN: o,
        bN: function (e, { openAICheckout: t = !1 } = {}) {
          let a = "appliedBalance" in e.total ? e.total.appliedBalance : null
          if (
            0 !== e.total.total.minorUnitsAmount ||
            (t && a?.minorUnitsAmount !== 0) ||
            (a?.minorUnitsAmount ?? 0) !== 0 ||
            1 !== e.lineItems.length
          )
            return !1
          let n = e.lineItems[0]
          return (
            n?.quantity === 1 &&
            n.recurring?.interval === "month" &&
            (!("intervalCount" in n.recurring) || 1 === n.recurring.intervalCount) &&
            n.subtotal.minorUnitsAmount > 0 &&
            (!t ||
              (e.total.subtotal?.minorUnitsAmount === n.subtotal.minorUnitsAmount &&
                e.total.discount?.minorUnitsAmount === n.subtotal.minorUnitsAmount)) &&
            (t || n.total?.minorUnitsAmount === 0) &&
            n.discountAmounts?.some(
              (e) => 100 === e.percentOff && e.minorUnitsAmount === n.subtotal.minorUnitsAmount,
            ) === !0
          )
        },
        uH: function (e) {
          return (
            "tag" in e &&
            "custom_checkout_session" === e.tag &&
            "chatgptplusplan" === e.plan_name &&
            ("open" === e.status || "complete" === e.status) &&
            e.promo_campaign?.promo_campaign_id === i.ww
          )
        },
      },
    )
  },
  yQ3X(e, t, a) {
    a.d(t, { tv: () => p, kr: () => b, r5: () => f, rS: () => C, Lw: () => g, fJ: () => m })
    var n = a("ABep"),
      i = a("QosV")
    let r = (e) =>
      (0, n.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: [
          (0, n.jsx)("g", {
            clipPath: "url(#clip0_8150_6577)",
            children: (0, n.jsx)("path", {
              d: "M13.7958 23.893C13.003 23.893 12.2498 23.7423 11.5362 23.441C10.8226 23.1398 10.1883 22.7195 9.6333 22.1804C9.03072 22.3865 8.40436 22.4896 7.75421 22.4896C6.69177 22.4896 5.70862 22.228 4.80476 21.7047C3.90089 21.1814 3.17146 20.4678 2.61645 19.5639C2.0773 18.6601 1.80773 17.6531 1.80773 16.5431C1.80773 16.0833 1.87116 15.5838 1.99802 15.0446C1.36373 14.4579 0.872151 13.784 0.52329 13.0228C0.17443 12.2458 0 11.4371 0 10.5966C0 9.74035 0.182359 8.91578 0.547076 8.12291C0.911794 7.33005 1.41923 6.64818 2.06938 6.07732C2.73538 5.4906 3.50446 5.08624 4.37661 4.86424C4.55104 3.96038 4.91576 3.15165 5.47076 2.43808C6.04162 1.70864 6.73935 1.13778 7.56392 0.725489C8.3885 0.3132 9.26858 0.107056 10.2042 0.107056C10.997 0.107056 11.7502 0.2577 12.4638 0.558988C13.1774 0.860277 13.8117 1.28049 14.3667 1.81964C14.9693 1.6135 15.5956 1.51042 16.2458 1.51042C17.3082 1.51042 18.2914 1.77207 19.1952 2.29536C20.0991 2.81865 20.8206 3.53223 21.3598 4.43609C21.9148 5.33996 22.1923 6.3469 22.1923 7.45691C22.1923 7.91677 22.1288 8.41627 22.002 8.95542C22.6363 9.54214 23.1278 10.224 23.4767 11.001C23.8256 11.7622 24 12.563 24 13.4034C24 14.2597 23.8176 15.0843 23.4529 15.8771C23.0882 16.67 22.5728 17.3598 21.9068 17.9465C21.2567 18.5174 20.4955 18.9138 19.6234 19.1358C19.449 20.0397 19.0763 20.8484 18.5055 21.562C17.9504 22.2914 17.2607 22.8623 16.4361 23.2745C15.6115 23.6868 14.7314 23.893 13.7958 23.893ZM7.96829 20.6581C8.71358 20.6581 9.37166 20.4916 9.94252 20.1586L14.2478 17.6849C14.4222 17.5739 14.5094 17.4232 14.5094 17.2329V15.5679L9.20515 18.6125C8.71358 18.8979 8.222 18.8979 7.73043 18.6125L3.63925 16.2577C3.63925 16.2736 3.63925 16.2973 3.63925 16.3291C3.63925 16.3608 3.63925 16.4004 3.63925 16.448C3.63925 17.225 3.82161 17.9386 4.18632 18.5887C4.5669 19.223 5.09019 19.7225 5.75619 20.0872C6.4222 20.4678 7.15956 20.6581 7.96829 20.6581ZM8.18236 16.781C8.2775 16.8444 8.36472 16.8761 8.444 16.8761C8.52329 16.8603 8.61051 16.8286 8.70565 16.781L10.1566 15.9723L4.87612 12.8801C4.38454 12.6105 4.13875 12.1824 4.13875 11.5957V6.90983C3.44103 7.27455 2.88603 7.78991 2.47374 8.45591C2.0773 9.10606 1.87909 9.82757 1.87909 10.6204C1.87909 11.3657 2.06145 12.0793 2.42616 12.7612C2.80674 13.4272 3.29832 13.9346 3.90089 14.2835L8.18236 16.781ZM13.7721 22.0377C14.5808 22.0377 15.3102 21.8553 15.9604 21.4906C16.6105 21.1259 17.1179 20.6264 17.4827 19.9921C17.8632 19.3578 18.0535 18.6521 18.0535 17.8751V12.9277C18.0535 12.7215 17.9663 12.5709 17.7919 12.4757L16.3409 11.5957V17.7324C16.3409 18.3191 16.0951 18.7473 15.6036 19.0169L11.5362 21.3717C12.2339 21.8157 12.9792 22.0377 13.7721 22.0377ZM14.5094 13.4985V10.5015L12.0119 9.07435L9.49058 10.5015V13.4985L12.0119 14.9257L14.5094 13.4985ZM7.65907 6.26761C7.65907 5.68089 7.90486 5.25274 8.39643 4.98317L12.4638 2.62836C11.7661 2.18436 11.0208 1.96236 10.2279 1.96236C9.43508 1.96236 8.71358 2.14472 8.06343 2.50943C7.41328 2.87415 6.89792 3.37365 6.51734 4.00795C6.15263 4.64224 5.97027 5.34789 5.97027 6.12489V11.0486C5.97027 11.2389 6.05748 11.3974 6.23191 11.5243L7.65907 12.4044V6.26761ZM19.885 17.0902C20.5669 16.7413 21.106 16.2339 21.5025 15.5679C21.9148 14.9019 22.1209 14.1725 22.1209 13.3796C22.1209 12.6343 21.9306 11.9287 21.55 11.2627C21.1853 10.5808 20.7017 10.0654 20.0991 9.71657L15.8176 7.24283C15.7225 7.1794 15.6353 7.15562 15.556 7.17147C15.4767 7.17147 15.3895 7.19526 15.2943 7.24283L13.8434 8.02777L19.1477 11.1437C19.4014 11.2864 19.5837 11.4609 19.6947 11.667C19.8216 11.8573 19.885 12.1031 19.885 12.4044V17.0902ZM14.7948 5.33996C15.2864 5.03867 15.778 5.03867 16.2696 5.33996L20.3608 7.74234C20.3608 7.69476 20.3608 7.64719 20.3608 7.59962C20.3608 6.87019 20.1784 6.1804 19.8137 5.53025C19.4648 4.86424 18.9574 4.33302 18.2914 3.93659C17.6412 3.54016 16.888 3.34194 16.0317 3.34194C15.2864 3.34194 14.6283 3.50844 14.0575 3.84145L9.75223 6.31518C9.5778 6.42618 9.49058 6.57683 9.49058 6.76711V8.43213L14.7948 5.33996Z",
              fill: "currentColor",
            }),
          }),
          (0, n.jsx)("defs", {
            children: (0, n.jsx)("clipPath", {
              id: "clip0_8150_6577",
              children: (0, n.jsx)("rect", { width: 24, height: 24, fill: "white" }),
            }),
          }),
        ],
      })
    var o = a("eQqZ"),
      s = a("on57"),
      l = a("zd8w"),
      c = a("Wf1j"),
      u = a("oyxz"),
      d = a("H8XY"),
      h = a("AWhs")
    function m(e) {
      let t,
        a,
        r,
        s,
        l,
        d = (0, i.c)(13),
        { children: m, homeLink: p, onClose: f, busy: g } = e,
        C = void 0 !== g && g,
        b = (0, c.A)()
      return (
        d[0] !== p
          ? ((t = null != p ? (0, n.jsx)("div", { className: "absolute start-6 top-6", children: p }) : null),
            (d[0] = p),
            (d[1] = t))
          : (t = d[1]),
        d[2] !== C || d[3] !== b || d[4] !== f
          ? ((a =
              null != f
                ? (0, n.jsx)("button", {
                    type: "button",
                    className:
                      "interactive-button absolute end-4 top-4 flex size-9 items-center justify-center rounded-full hover:bg-token-bg-tertiary focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50",
                    disabled: C,
                    onClick: f,
                    "aria-label": b.formatMessage({
                      id: "StandaloneCreditCheckout.closeButtonLabel",
                      defaultMessage: "Close",
                      description:
                        "Accessible label for the close button on the standalone credit checkout page. Returns the customer to the surface that opened checkout without purchasing credits. Short action label.",
                    }),
                    children: (0, n.jsx)(o.G, { width: 20, height: 20, "aria-hidden": !0 }),
                  })
                : null),
            (d[2] = C),
            (d[3] = b),
            (d[4] = f),
            (d[5] = a))
          : (a = d[5]),
        d[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)("h1", {
              className: "text-[28px] leading-8.5 font-semibold text-token-text-primary",
              children: (0, n.jsx)(u.A, {
                id: "StandaloneCreditCheckout.heading",
                defaultMessage: "Checkout",
                description: "Page title for standalone credit checkout.",
              }),
            })),
            (d[6] = r))
          : (r = d[6]),
        d[7] !== m
          ? ((s = (0, n.jsxs)("main", {
              className: "mx-auto flex w-full max-w-[527px] flex-col gap-8 px-6 pt-[80px] pb-[60px] sm:px-0",
              children: [r, m],
            })),
            (d[7] = m),
            (d[8] = s))
          : (s = d[8]),
        d[9] !== t || d[10] !== a || d[11] !== s
          ? ((l = (0, n.jsxs)("div", {
              className: `${h.A.creditPage} relative min-h-screen bg-token-bg-primary text-token-text-primary`,
              children: [t, a, s],
            })),
            (d[9] = t),
            (d[10] = a),
            (d[11] = s),
            (d[12] = l))
          : (l = d[12]),
        l
      )
    }
    function p() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r, { width: 32, height: 32 })), (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function f(e) {
      let t,
        a,
        r,
        o = (0, i.c)(9),
        { onClick: s, disabled: l, children: u } = e,
        h = void 0 !== l && l,
        m = (0, c.A)()
      return (
        o[0] !== m
          ? ((t = m.formatMessage({
              id: "checkout.backToPlans",
              defaultMessage: "Back",
              description: "Return from the full-page checkout to plan selection",
            })),
            (o[0] = m),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== u ? ((a = u ?? (0, n.jsx)(d.Z, {})), (o[2] = u), (o[3] = a)) : (a = o[3]),
        o[4] !== h || o[5] !== s || o[6] !== t || o[7] !== a
          ? ((r = (0, n.jsx)("button", {
              type: "button",
              "data-testid": "checkout-page-back-button",
              className:
                "inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50",
              disabled: h,
              onClick: s,
              "aria-label": t,
              children: a,
            })),
            (o[4] = h),
            (o[5] = s),
            (o[6] = t),
            (o[7] = a),
            (o[8] = r))
          : (r = o[8]),
        r
      )
    }
    function g(e) {
      let t,
        a,
        r,
        l,
        u,
        d = (0, i.c)(20),
        {
          children: h,
          homeLink: m,
          onClose: p,
          closeIcon: f,
          memberReview: g,
          disabled: C,
          hasTopBanner: b,
          homeLinkMargin: x,
          className: y,
        } = e,
        k = void 0 !== g && g,
        v = void 0 !== C && C,
        w = void 0 !== b && b,
        P = void 0 === x ? (w ? "mt-3" : "mt-9") : x,
        M = (0, c.A)()
      return (
        d[0] !== y ? ((t = (0, s.A)("relative flow-root", y)), (d[0] = y), (d[1] = t)) : (t = d[1]),
        d[2] !== f || d[3] !== v || d[4] !== w || d[5] !== M || d[6] !== k || d[7] !== p
          ? ((a =
              void 0 !== p
                ? (0, n.jsx)("div", {
                    className: (0, s.A)(
                      "absolute z-10",
                      k
                        ? "end-4 top-4 md:end-6 md:top-6"
                        : ["end-4 md:end-6 lg:end-12", w ? "top-3" : "top-4 md:top-9"],
                    ),
                    children: (0, n.jsx)("button", {
                      type: "button",
                      className: (0, s.A)(
                        k ? "text-token-text-primary" : "text-tertiary",
                        "flex size-9 cursor-interaction items-center justify-center gap-1 rounded-full border border-transparent p-0 whitespace-nowrap select-none no-drag not-disabled:hover:bg-primary-ghost-hover focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-default disabled:opacity-40",
                      ),
                      disabled: v,
                      "aria-label": M.formatMessage({
                        id: "checkout.businessRefresh.close",
                        defaultMessage: "Close checkout",
                        description:
                          "Accessible label for the X button that leaves Business checkout without purchasing.",
                      }),
                      onClick: p,
                      children: f ?? (0, n.jsx)(o.G, { width: 20, height: 20, "aria-hidden": !0 }),
                    }),
                  })
                : null),
            (d[2] = f),
            (d[3] = v),
            (d[4] = w),
            (d[5] = M),
            (d[6] = k),
            (d[7] = p),
            (d[8] = a))
          : (a = d[8]),
        d[9] !== m || d[10] !== P || d[11] !== k
          ? ((r =
              null != m
                ? (0, n.jsx)("div", {
                    "data-testid": "checkout-header-controls",
                    className: (0, s.A)(
                      k
                        ? "absolute inset-x-6 top-4 flex md:top-6"
                        : ["absolute inset-x-6 top-full hidden items-start justify-between md:flex lg:inset-x-12", P],
                    ),
                    children: m,
                  })
                : null),
            (d[9] = m),
            (d[10] = P),
            (d[11] = k),
            (d[12] = r))
          : (r = d[12]),
        d[13] !== t || d[14] !== a || d[15] !== r
          ? ((l = (0, n.jsxs)("div", { className: t, children: [a, r] })),
            (d[13] = t),
            (d[14] = a),
            (d[15] = r),
            (d[16] = l))
          : (l = d[16]),
        d[17] !== h || d[18] !== l
          ? ((u = (0, n.jsxs)("div", {
              className: "flow-root",
              "data-testid": "checkout-top-banner-stack",
              children: [h, l],
            })),
            (d[17] = h),
            (d[18] = l),
            (d[19] = u))
          : (u = d[19]),
        u
      )
    }
    function C(e) {
      let t,
        a,
        r,
        o = (0, i.c)(16),
        {
          children: l,
          title: c,
          headingRef: u,
          backButton: d,
          className: h,
          hideHeading: m,
          studentOffer: p,
          hasTopBanner: f,
          wallet: g,
          proUsageTiers: C,
          businessRefresh: b,
        } = e,
        x = void 0 !== m && m,
        y = void 0 !== p && p,
        k = void 0 !== b && b,
        v = k
          ? "w-full max-w-full lg:w-fit"
          : (void 0 !== g && g) || (void 0 !== C && C)
            ? "w-fit max-w-[1044px] lg:pt-[49px]"
            : "w-fit max-w-[1060px]",
        w = x && "max-md:pt-[68px]",
        P = void 0 !== f && f ? "md:mt-15" : "md:mt-9"
      return (
        o[0] !== h || o[1] !== v || o[2] !== w || o[3] !== P
          ? ((t = (0, s.A)("mx-auto flex h-fit flex-col px-6 pt-6 sm:pb-15 md:pt-10", v, w, P, h)),
            (o[0] = h),
            (o[1] = v),
            (o[2] = w),
            (o[3] = P),
            (o[4] = t))
          : (t = o[4]),
        o[5] !== d || o[6] !== k || o[7] !== u || o[8] !== x || o[9] !== y || o[10] !== c
          ? ((a = x
              ? (0, n.jsx)("h1", { ref: u, className: "sr-only", children: c })
              : (0, n.jsxs)("div", {
                  className: (0, s.A)("relative flex items-center", k ? "mb-8" : "mb-11", y && "max-sm:mb-5"),
                  children: [
                    d,
                    (0, n.jsx)("h1", {
                      ref: u,
                      className: k
                        ? "text-2xl leading-7 font-semibold"
                        : "ps-3 text-[28px] leading-8.5 font-medium sm:ps-4",
                      children: c,
                    }),
                  ],
                })),
            (o[5] = d),
            (o[6] = k),
            (o[7] = u),
            (o[8] = x),
            (o[9] = y),
            (o[10] = c),
            (o[11] = a))
          : (a = o[11]),
        o[12] !== l || o[13] !== t || o[14] !== a
          ? ((r = (0, n.jsxs)("div", { "data-testid": "checkout-page-content", className: t, children: [a, l] })),
            (o[12] = l),
            (o[13] = t),
            (o[14] = a),
            (o[15] = r))
          : (r = o[15]),
        r
      )
    }
    function b(e) {
      let t,
        a,
        r,
        o,
        c,
        u,
        d,
        h,
        m,
        p,
        f = (0, i.c)(44),
        {
          form: g,
          summary: C,
          stickySummary: b,
          wallet: x,
          proUsageTiers: y,
          premiumBusiness: k,
          businessRefresh: v,
          memberReview: w,
          premiumBusinessScreenSize: P,
          standaloneCredit: M,
        } = e,
        _ = void 0 !== b && b,
        A = void 0 !== x && x,
        j = void 0 !== y && y,
        L = void 0 !== k && k,
        T = void 0 !== v && v,
        S = void 0 !== w && w,
        I = void 0 !== M && M,
        N = (0, l.useRef)(null),
        [B, V] = (0, l.useState)(!1)
      if (
        (f[0] !== I || f[1] !== _
          ? ((t = () => {
              let e = N.current
              if (!_ || I || null == e) return
              let t = e.parentElement
              for (; null != t && !/(auto|scroll|hidden|overlay)/.test(getComputedStyle(t).overflowY);)
                t = t.parentElement
              let a = () => {
                let a = parseFloat(getComputedStyle(e).top) || 0,
                  n = t?.clientHeight ?? window.innerHeight
                V(e.offsetHeight + a <= n)
              }
              a()
              let n = new ResizeObserver(a)
              return (
                n.observe(e, { box: "border-box" }),
                null != t && n.observe(t),
                window.addEventListener("resize", a),
                () => {
                  ;(n.disconnect(), window.removeEventListener("resize", a))
                }
              )
            }),
            (a = [_, I]),
            (f[0] = I),
            (f[1] = _),
            (f[2] = t),
            (f[3] = a))
          : ((t = f[2]), (a = f[3])),
        (0, l.useEffect)(t, a),
        I)
      ) {
        let e, t
        return (
          f[4] !== C
            ? ((e = (0, n.jsx)("div", { className: "flex flex-col gap-6", children: C })), (f[4] = C), (f[5] = e))
            : (e = f[5]),
          f[6] !== g || f[7] !== e
            ? ((t = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-8", children: [g, e] })),
              (f[6] = g),
              (f[7] = e),
              (f[8] = t))
            : (t = f[8]),
          t
        )
      }
      let U = T ? "min-w-0 gap-6" : "p-x-20 gap-4",
        G = S && "max-sm:gap-8 max-sm:pb-6"
      f[9] !== U || f[10] !== G
        ? ((r = (0, s.A)("flex flex-col justify-between pb-12 sm:flex-row sm:gap-6 sm:pb-0 md:gap-12 lg:gap-18", U, G)),
          (f[9] = U),
          (f[10] = G),
          (f[11] = r))
        : (r = f[11])
      let H = T && "min-w-0 sm:w-1/2",
        O = T && (S ? "lg:w-[527px]" : "lg:w-[500px]"),
        R = !T && "sm:max-w-[calc(100vw-380px)] md:max-w-[calc(100vw-480px)]",
        F = !T && (L || A || j) && "lg:shrink-0",
        Z = !T && j && "lg:w-[527px]"
      ;(f[12] !== H || f[13] !== O || f[14] !== R || f[15] !== F || f[16] !== Z
        ? ((o = (0, s.A)("flex flex-col", H, O, R, F, Z)),
          (f[12] = H),
          (f[13] = O),
          (f[14] = R),
          (f[15] = F),
          (f[16] = Z),
          (f[17] = o))
        : (o = f[17]),
        f[18] !== T || f[19] !== P
          ? ((c = T || "large" !== P ? void 0 : { width: "527px" }), (f[18] = T), (f[19] = P), (f[20] = c))
          : (c = f[20]),
        f[21] !== g || f[22] !== o || f[23] !== c
          ? ((u = (0, n.jsx)("div", { "data-testid": "checkout-form-column", className: o, style: c, children: g })),
            (f[21] = g),
            (f[22] = o),
            (f[23] = c),
            (f[24] = u))
          : (u = f[24]))
      let D = S ? "reactivation-summary" : void 0,
        E = T && "min-w-0 sm:w-1/2",
        W = T && (S ? "lg:w-[397px]" : "lg:w-[424px]"),
        z = !T && "max-w-[calc(100vw-48px)] sm:max-w-[320px]",
        q = _ && "md:top-6 md:self-start",
        Q = _ && B && "md:sticky",
        Y = !T && (L ? "lg:shrink-0" : A || j ? "md:w-[397px] md:max-w-[397px]" : "md:max-w-[432px]")
      return (
        f[25] !== E || f[26] !== W || f[27] !== z || f[28] !== q || f[29] !== Q || f[30] !== Y
          ? ((d = (0, s.A)("flex flex-col gap-6", E, W, z, q, Q, Y)),
            (f[25] = E),
            (f[26] = W),
            (f[27] = z),
            (f[28] = q),
            (f[29] = Q),
            (f[30] = Y),
            (f[31] = d))
          : (d = f[31]),
        f[32] !== T || f[33] !== P
          ? ((h = T
              ? void 0
              : "large" === P
                ? { maxWidth: "378px", width: "378px" }
                : "medium" === P
                  ? { maxWidth: "378px" }
                  : void 0),
            (f[32] = T),
            (f[33] = P),
            (f[34] = h))
          : (h = f[34]),
        f[35] !== C || f[36] !== D || f[37] !== d || f[38] !== h
          ? ((m = (0, n.jsx)("div", {
              ref: N,
              "data-testid": "checkout-summary-column",
              "data-checkout-layout": D,
              className: d,
              style: h,
              children: C,
            })),
            (f[35] = C),
            (f[36] = D),
            (f[37] = d),
            (f[38] = h),
            (f[39] = m))
          : (m = f[39]),
        f[40] !== r || f[41] !== u || f[42] !== m
          ? ((p = (0, n.jsxs)("div", { className: r, children: [u, m] })),
            (f[40] = r),
            (f[41] = u),
            (f[42] = m),
            (f[43] = p))
          : (p = f[43]),
        p
      )
    }
  },
  kxmb(e, t, a) {
    a.d(t, { QJ: () => eg, PG: () => ef.P, YZ: () => eC, xr: () => eb, $P: () => X })
    var n = a("ABep"),
      i = a("QosV"),
      r = a("on57"),
      o = a("zd8w"),
      s = a("oyxz"),
      l = a("Wf1j"),
      c = a("U5l8"),
      u = a("B2b6"),
      d = a("Jkrr"),
      h = a("HqZu"),
      m = a("UjzL"),
      p = a("MACT"),
      f = a("xUJc"),
      g = a("iE0s"),
      C = a("Oeow"),
      b = a("H8XY"),
      x = a("hm9l"),
      y = a("gviT"),
      k = a("rcsG")
    function v(e) {
      let t,
        a,
        r,
        c,
        u,
        d,
        h,
        m,
        p,
        f,
        g,
        C,
        b,
        v = (0, i.c)(40),
        { checkout: w, className: P } = e,
        M = (0, l.A)(),
        _ = (0, o.useId)()
      if (v[0] !== w || v[1] !== P || v[2] !== _ || v[3] !== M) {
        p = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            i,
            o,
            l,
            f = (0, k.tv)({ checkout: w })
          if (null == f) {
            p = null
            break e
          }
          ;((d = _),
            v[13] !== P
              ? ((e = [
                  "border-token-accent-default bg-token-bg-primary shadow-elevation-01 rounded-2xl border-2 p-4",
                  P,
                ].filter(Boolean)),
                (v[13] = P),
                (v[14] = e))
              : (e = v[14]),
            (h = e.join(" ")),
            v[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(s.A, { ...x.UN.plan })), (v[15] = i))
              : (i = v[15]),
            v[16] !== _
              ? ((o = (0, n.jsx)("h2", {
                  id: _,
                  className: "text-body-emphasized text-token-text-primary tracking-[-0.4px]",
                  children: i,
                })),
                (v[16] = _),
                (v[17] = o))
              : (o = v[17]),
            v[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = (0, n.jsx)("span", {
                  className:
                    "bg-token-theme-blue-background text-token-theme-blue-default text-caption-emphasized inline-flex shrink-0 rounded-full px-2 py-1",
                  children: (0, n.jsx)(s.A, { ...x.UN.duration }),
                })),
                (v[18] = l))
              : (l = v[18]),
            v[19] !== o
              ? ((m = (0, n.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [o, l] })),
                (v[19] = o),
                (v[20] = m))
              : (m = v[20]),
            (u = "text-body-small-regular text-token-text-secondary mt-2 tracking-[-0.15px]"),
            (t = s.A),
            (c = x.UN.renewal),
            v[21] !== w.currency || v[22] !== w.total.total.minorUnitsAmount || v[23] !== M.locale
              ? ((a = (0, y.ej)({
                  amountMinorUnits: w.total.total.minorUnitsAmount,
                  currency: w.currency,
                  locale: M.locale,
                })),
                (v[21] = w.currency),
                (v[22] = w.total.total.minorUnitsAmount),
                (v[23] = M.locale),
                (v[24] = a))
              : (a = v[24]),
            (r = (0, y.ej)({ amountMinorUnits: f.renewalAmountMinorUnits, currency: w.currency, locale: M.locale })))
        }
        ;((v[0] = w),
          (v[1] = P),
          (v[2] = _),
          (v[3] = M),
          (v[4] = t),
          (v[5] = a),
          (v[6] = r),
          (v[7] = c),
          (v[8] = u),
          (v[9] = d),
          (v[10] = h),
          (v[11] = m),
          (v[12] = p))
      } else
        ((t = v[4]), (a = v[5]), (r = v[6]), (c = v[7]), (u = v[8]), (d = v[9]), (h = v[10]), (m = v[11]), (p = v[12]))
      return p !== Symbol.for("react.early_return_sentinel")
        ? p
        : (v[25] !== a || v[26] !== r
            ? ((f = { dueToday: a, renewalPrice: r }), (v[25] = a), (v[26] = r), (v[27] = f))
            : (f = v[27]),
          v[28] !== t || v[29] !== c || v[30] !== f
            ? ((g = (0, n.jsx)(t, { ...c, values: f })), (v[28] = t), (v[29] = c), (v[30] = f), (v[31] = g))
            : (g = v[31]),
          v[32] !== g || v[33] !== u
            ? ((C = (0, n.jsx)("p", { className: u, children: g })), (v[32] = g), (v[33] = u), (v[34] = C))
            : (C = v[34]),
          v[35] !== C || v[36] !== d || v[37] !== h || v[38] !== m
            ? ((b = (0, n.jsxs)("section", { "aria-labelledby": d, className: h, children: [m, C] })),
              (v[35] = C),
              (v[36] = d),
              (v[37] = h),
              (v[38] = m),
              (v[39] = b))
            : (b = v[39]),
          b)
    }
    function w(e) {
      let t,
        a,
        r,
        o = (0, i.c)(10),
        { checkout: c } = e,
        u = (0, l.A)(),
        d = "recurring" in c ? c.recurring?.dueNext : null,
        h = d?.billingCycleAnchor
      return null == d || null == h || !Number.isFinite(h) || h <= 0
        ? null
        : (o[0] !== c.currency || o[1] !== u.locale || o[2] !== d.total.minorUnitsAmount
            ? ((t = (0, y.ej)({ amountMinorUnits: d.total.minorUnitsAmount, currency: c.currency, locale: u.locale })),
              (o[0] = c.currency),
              (o[1] = u.locale),
              (o[2] = d.total.minorUnitsAmount),
              (o[3] = t))
            : (t = o[3]),
          o[4] !== h || o[5] !== u
            ? ((a = u.formatDate(1e3 * h, { month: "short", day: "numeric", year: "numeric" })),
              (o[4] = h),
              (o[5] = u),
              (o[6] = a))
            : (a = o[6]),
          o[7] !== t || o[8] !== a
            ? ((r = (0, n.jsx)(s.A, { ...x.UN.nextBilling, values: { amount: t, date: a } })),
              (o[7] = t),
              (o[8] = a),
              (o[9] = r))
            : (r = o[9]),
          r)
    }
    var P = a("yQ3X"),
      M = a("Qgfj")
    let _ = (0, M.YK)({
      scheduledPercentDiscountSingle: {
        id: "InvoiceSummary.scheduledPercentDiscountSingle",
        description: "Scheduled percent discount when duration is 1 month",
        defaultMessage:
          "{startInMonths, selectordinal, one {After #st month} two {After #nd month} few {After #rd month} other {After #th month}}, next month is {percentOff, number, ::percent} off",
      },
      scheduledPercentDiscountPlural: {
        id: "InvoiceSummary.scheduledPercentDiscountPlural",
        description: "Scheduled percent discount when duration is multiple months",
        defaultMessage:
          "{startInMonths, selectordinal, one {After #st month} two {After #nd month} few {After #rd month} other {After #th month}}, next {durationInMonths} months are {percentOff, number, ::percent} off",
      },
      scheduledFixedDiscountSingle: {
        id: "InvoiceSummary.scheduledFixedDiscountSingle",
        description: "Scheduled fixed-amount discount when duration is 1 month",
        defaultMessage:
          "{startInMonths, selectordinal, one {After #st month} two {After #nd month} few {After #rd month} other {After #th month}}, next month is {formattedAmount} off",
      },
      scheduledFixedDiscountPlural: {
        id: "InvoiceSummary.scheduledFixedDiscountPlural",
        description: "Scheduled fixed-amount discount when duration is multiple months",
        defaultMessage:
          "{startInMonths, selectordinal, one {After #st month} two {After #nd month} few {After #rd month} other {After #th month}}, next {durationInMonths} months are {formattedAmount} off",
      },
    })
    var A = a("Pg1j"),
      j = a("M9bc"),
      L = a("erHg"),
      T = a("k17m"),
      S = a("nGcY"),
      I = a("FBnY")
    let N = (e) => {
        let t,
          a,
          r,
          o,
          c,
          u,
          d = (0, i.c)(12),
          { promoCreditGrant: h, className: m } = e,
          p = (0, l.A)()
        if (!h || (null != h.unit && "credit" !== h.unit)) return null
        d[0] !== m
          ? ((t = [
              I.A.banner,
              "relative flex items-center gap-1.5 overflow-hidden rounded-2xl p-4 text-sm bg-blue-400/[.09] text-blue-500 dark:bg-blue-100/20 dark:text-blue-100",
              m,
            ].filter(Boolean)),
            (d[0] = m),
            (d[1] = t))
          : (t = d[1])
        let f = t.join(" ")
        return (
          d[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)("div", {
                "aria-hidden": !0,
                className: `${I.A.shimmer} pointer-events-none absolute inset-0`,
              })),
              (r = (0, n.jsx)("div", { children: (0, n.jsx)(S.A, { "aria-hidden": !0 }) })),
              (d[2] = a),
              (d[3] = r))
            : ((a = d[2]), (r = d[3])),
          d[4] !== p || d[5] !== h.amount
            ? ((o = (function ({ amount: e, intl: t }) {
                let a = Number(e)
                return Number.isFinite(a) ? t.formatMessage(B.creditAmount, { amount: a }) : e
              })({ amount: h.amount, intl: p })),
              (d[4] = p),
              (d[5] = h.amount),
              (d[6] = o))
            : (o = d[6]),
          d[7] !== o
            ? ((c = (0, n.jsx)("span", {
                className: "min-w-0",
                children: (0, n.jsx)(s.A, { ...B.banner, values: { b: V, creditAmount: o } }),
              })),
              (d[7] = o),
              (d[8] = c))
            : (c = d[8]),
          d[9] !== f || d[10] !== c
            ? ((u = (0, n.jsxs)("div", {
                className: f,
                "data-testid": "promo-credit-grant-banner",
                children: [a, r, c],
              })),
              (d[9] = f),
              (d[10] = c),
              (d[11] = u))
            : (u = d[11]),
          u
        )
      },
      B = (0, M.YK)({
        creditAmount: {
          id: "checkout.promoCreditGrantBanner.creditAmount",
          defaultMessage: "{amount, number} {amount, plural, one {credit} other {credits}}",
          description:
            "Amount label shown inside the promo credit grant banner on the checkout page. It appears in the right column when the checkout session includes a promo credit grant. Placeholder {amount} is the numeric number of credits granted and should remain numeric for locale-aware digit grouping and pluralization.",
        },
        banner: {
          id: "checkout.promoCreditGrantBanner.banner.v2",
          defaultMessage: "<b>Bonus:</b> Get {creditAmount}.",
          description:
            "Promotional banner copy shown in the right column of the checkout page when the checkout session includes a promo credit grant. Audience is a prospective subscriber completing checkout, and the tone should feel celebratory but concise. The banner appears below the top feature list on the standard checkout page and above the invoice summary in other checkout layouts. Placeholder {creditAmount} is a localized short string such as '2,500 credits'. The credits are not limited to a single product. Only the word 'Bonus:' should be visually emphasized.",
        },
      })
    function V(e) {
      return (0, n.jsx)("strong", { children: e })
    }
    function U({ checkout: e, renewalTaxPercent: t }) {
      let a = (e.taxAmounts ?? []).reduce((e, t) => e + t.minorUnitsAmount, 0),
        n = a || e.total.taxInclusive.minorUnitsAmount + (e.total.taxExclusive?.minorUnitsAmount ?? 0),
        i = e.total.total.minorUnitsAmount - ((0, u.Kn)(e.total) ?? 0) - n,
        r = i > 0 ? n / i : null
      return {
        currentChargeTaxAmount: n,
        currentChargeTaxRate: r,
        hasItemizedTax: 0 !== a,
        renewalTaxRate: null != t ? t / 100 : r,
      }
    }
    function G(e) {
      let t,
        a,
        r,
        o,
        c,
        u,
        d = (0, i.c)(28),
        {
          checkout: h,
          immediateDiscountSettings: m,
          promoCreditGrant: p,
          scheduledDiscountPreview: f,
          introOffer: g,
          paypalPromoPublicEnabled: C,
          renderInvoice: b,
        } = e,
        x = void 0 !== C && C,
        k = (0, l.A)(),
        v = (h.discountAmounts ?? []).length > 0 || null != m || null != p || null != f,
        w = h.total.total.minorUnitsAmount
      if (d[0] !== h || d[1] !== k || d[2] !== x) {
        let { currentChargeTaxAmount: e, currentChargeTaxRate: i, hasItemizedTax: r } = U({ checkout: h })
        ;((t = !r && e > 0),
          (a =
            e > 0
              ? (0, n.jsx)("p", {
                  className: "text-end text-[14px] leading-5 text-token-text-tertiary",
                  children:
                    x || "usd" === h.currency.toLowerCase()
                      ? (0, n.jsx)(s.A, {
                          id: "chatgpt.checkout.paypal_promo.summary.inclusive_tax.label",
                          defaultMessage: "Includes {amount} tax{hasRate, select, yes { ({rate})} other {}}",
                          description:
                            "Caption below the amount due today on the PayPal ChatGPT Plus offer checkout. Placeholder {amount} is the locale-formatted positive tax amount included in the provider total; {rate} is the locale-formatted effective tax percentage derived from that total and tax amount. Selector {hasRate} is yes when the amount before tax is positive; otherwise omit the unavailable rate. Matches Figma node 1090:1335 while preserving live checkout amounts.",
                          values: {
                            amount: (0, y.ej)({ amountMinorUnits: e, currency: h.currency, locale: k.locale }),
                            hasRate: null == i ? "no" : "yes",
                            rate: null == i ? "" : k.formatNumber(i, { style: "percent", maximumFractionDigits: 1 }),
                          },
                        })
                      : (0, n.jsx)(s.A, {
                          id: "chatgpt.checkout.paypal_promo.summary.inclusive_vat.label",
                          defaultMessage: "Includes {amount} of VAT",
                          description:
                            "Caption below the amount due today in the PayPal Germany ChatGPT Plus cashback checkout. Placeholder {amount} is the locale-formatted VAT amount already included in the total. Figma German reference: Enth\xe4lt {amount} MwSt.",
                          values: {
                            amount: (0, y.ej)({ amountMinorUnits: e, currency: h.currency, locale: k.locale }),
                          },
                        }),
                })
              : null),
          (d[0] = h),
          (d[1] = k),
          (d[2] = x),
          (d[3] = t),
          (d[4] = a))
      } else ((t = d[3]), (a = d[4]))
      let P = a
      if (v) {
        let e,
          a,
          i,
          r,
          o = p ?? null
        d[5] !== o
          ? ((e = (0, n.jsx)(N, { className: "mb-4", promoCreditGrant: o })), (d[5] = o), (d[6] = e))
          : (e = d[6])
        let l = t ? P : void 0
        return (
          d[7] !== g || d[8] !== x
            ? ((a =
                "free_month" === g
                  ? (0, n.jsx)(s.A, {
                      id: "chatgpt.checkout.paypal_promo.summary.promotion.subtitle.first_month_free",
                      defaultMessage: "Free for your first month",
                      description:
                        "Subtitle below the Promotion line on the PayPal Germany ChatGPT Plus cashback checkout when an OpenAI first-month-free promotion is active. It confirms that the displayed promotion makes the customer's first month free.",
                    })
                  : x && "half_price_month" === g
                    ? (0, n.jsx)(s.A, {
                        id: "chatgpt.checkout.paypal_promo.summary.promotion.subtitle.first_month_half_price",
                        defaultMessage: "{discountPercent, number, percent} off for your first month",
                        description:
                          "Subtitle below the Promotion line on the PayPal ChatGPT Plus offer checkout when the provider confirms one 50 percent repeating discount for one month and a positive amount due today. Placeholder {discountPercent} is 0.5, formatted as a percentage. Describes the OpenAI introductory discount, separate from PayPal cash back. Matches Figma node 1090:1954.",
                        values: { discountPercent: 0.5 },
                      })
                    : void 0),
              (d[7] = g),
              (d[8] = x),
              (d[9] = a))
            : (a = d[9]),
          d[10] !== b || d[11] !== t || d[12] !== l || d[13] !== a
            ? ((i = b({ afterTotalCallout: l, hideTaxLineItems: t, discountSubtitleOverride: a })),
              (d[10] = b),
              (d[11] = t),
              (d[12] = l),
              (d[13] = a),
              (d[14] = i))
            : (i = d[14]),
          d[15] !== e || d[16] !== i
            ? ((r = (0, n.jsxs)("div", { className: "border-t border-token-border-default pt-4", children: [e, i] })),
              (d[15] = e),
              (d[16] = i),
              (d[17] = r))
            : (r = d[17]),
          r
        )
      }
      return (
        d[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)("span", {
              children: (0, n.jsx)(s.A, {
                id: "chatgpt.checkout.paypal_promo.summary.due_today.label",
                defaultMessage: "Due today",
                description:
                  "Label for the full amount due today in the PayPal Germany ChatGPT Plus cashback checkout. The cashback is issued later by PayPal and is not deducted from this amount. Figma German reference: Heute f\xe4llig.",
              }),
            })),
            (d[18] = r))
          : (r = d[18]),
        d[19] !== h.currency || d[20] !== k.locale || d[21] !== w
          ? ((o = (0, y.ej)({ amountMinorUnits: w, currency: h.currency, locale: k.locale })),
            (d[19] = h.currency),
            (d[20] = k.locale),
            (d[21] = w),
            (d[22] = o))
          : (o = d[22]),
        d[23] !== o
          ? ((c = (0, n.jsxs)("div", {
              className:
                "flex items-center justify-between gap-4 text-base leading-6.5 font-[590] text-token-text-primary",
              children: [r, (0, n.jsx)("span", { children: o })],
            })),
            (d[23] = o),
            (d[24] = c))
          : (c = d[24]),
        d[25] !== P || d[26] !== c
          ? ((u = (0, n.jsxs)("div", {
              className: "flex flex-col gap-1 border-t border-token-border-default pt-4",
              children: [c, P],
            })),
            (d[25] = P),
            (d[26] = c),
            (d[27] = u))
          : (u = d[27]),
        u
      )
    }
    var H = a("AWhs")
    function O(e) {
      let t,
        a,
        r,
        o,
        l,
        u,
        h,
        m,
        p,
        f,
        g,
        C,
        b = (0, i.c)(60),
        {
          companyPaidBanner: x,
          children: v,
          checkout: w,
          session: P,
          glowImages: M,
          taxPercent: S,
          introOffer: I,
          paypalPromoPublicEnabled: N,
          disclosure: B,
          error: V,
          summaryError: U,
          formErrors: O,
          promoCodeRow: R,
          pending: F,
          quotePending: Z,
          disabled: D,
          onSubmit: E,
          onBack: W,
          isDarkMode: z,
          Link: q,
          offerIcons: Q,
          offerName: Y,
        } = e,
        K = void 0 !== N && N,
        $ = P.scheduled_discount_preview ?? null
      b[0] !== w.currency || b[1] !== $
        ? ((t = (function ({ scheduledDiscountPreview: e, currency: t }) {
            if (!e) return null
            let { discount_amount: a, discount_type: n, duration_in_months: i, start_in_months: r } = e,
              o = Number(r),
              s = Number(i),
              l = Number(a)
            if (Number.isNaN(o) || Number.isNaN(s) || Number.isNaN(l) || o <= 0 || s <= 0 || l <= 0) return null
            if ("percentage" === n) {
              let e = l / 100
              return !Number.isFinite(e) || e <= 0
                ? null
                : {
                    descriptor: 1 === s ? _.scheduledPercentDiscountSingle : _.scheduledPercentDiscountPlural,
                    values: { startInMonths: o, durationInMonths: s, percentOff: e },
                  }
            }
            let c = (0, y.ej)({ amountMinorUnits: Math.trunc(l), currency: t })
            return {
              descriptor: 1 === s ? _.scheduledFixedDiscountSingle : _.scheduledFixedDiscountPlural,
              values: { startInMonths: o, durationInMonths: s, formattedAmount: c },
            }
          })({ scheduledDiscountPreview: $, currency: w.currency })),
          (b[0] = w.currency),
          (b[1] = $),
          (b[2] = t))
        : (t = b[2])
      let J = t,
        X = `${H.A.root} h-full ${z ? "dark" : ""}`,
        ee = z ? "dark" : "light",
        et = P.billing_details?.country
      ;(b[3] !== q || b[4] !== I || b[5] !== Q || b[6] !== Y
        ? ((a =
            "free_month" !== I && Y
              ? (0, n.jsx)(d.H, {
                  announce: !0,
                  Icon: Q.Sparkle,
                  TermsArrow: Q.ArrowRight,
                  Link: q,
                  offer: (0, n.jsx)(s.A, { ...c.de.additionalOfferApplied, values: { offerName: Y } }),
                })
              : void 0),
          (b[3] = q),
          (b[4] = I),
          (b[5] = Q),
          (b[6] = Y),
          (b[7] = a))
        : (a = b[7]),
        b[8] !== D || b[9] !== E || b[10] !== F
          ? ((r = (e) => {
              ;(e.preventDefault(), F || D || E())
            }),
            (b[8] = D),
            (b[9] = E),
            (b[10] = F),
            (b[11] = r))
          : (r = b[11]),
        b[12] !== v || b[13] !== F
          ? ((o = (0, n.jsx)("div", { className: "flex min-w-0 flex-col gap-4", inert: F, children: v })),
            (b[12] = v),
            (b[13] = F),
            (b[14] = o))
          : (o = b[14]),
        b[15] !== w ||
        b[16] !== R ||
        b[17] !== Z ||
        b[18] !== J ||
        b[19] !== P.immediate_discount_settings ||
        b[20] !== S
          ? ((l = (e) =>
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(k.O5, {
                    ...e,
                    promoCodeRow: R,
                    checkout: w,
                    taxPercent: S,
                    immediateDiscountSettings: P.immediate_discount_settings ?? null,
                    showPremiumSeats: !1,
                    showBalanceAdjustment: !1,
                    isRunningServerUpdate: Z,
                    useCompactSpacing: !1,
                    spacingVariant: "default",
                  }),
                  J
                    ? (0, n.jsx)(j.T3, {
                        children: (0, n.jsx)(s.A, {
                          ...A.DZ.scheduledOfferApplied,
                          values: { offerName: (0, n.jsx)(s.A, { ...J.descriptor, values: J.values }) },
                        }),
                      })
                    : null,
                ],
              })),
            (b[15] = w),
            (b[16] = R),
            (b[17] = Z),
            (b[18] = J),
            (b[19] = P.immediate_discount_settings),
            (b[20] = S),
            (b[21] = l))
          : (l = b[21]),
        b[22] !== w ||
        b[23] !== I ||
        b[24] !== K ||
        b[25] !== P.immediate_discount_settings ||
        b[26] !== P.promo_credit_grant ||
        b[27] !== P.scheduled_discount_preview ||
        b[28] !== l
          ? ((u = (0, n.jsx)(G, {
              paypalPromoPublicEnabled: K,
              checkout: w,
              introOffer: I,
              immediateDiscountSettings: P.immediate_discount_settings,
              promoCreditGrant: P.promo_credit_grant,
              scheduledDiscountPreview: P.scheduled_discount_preview,
              renderInvoice: l,
            })),
            (b[22] = w),
            (b[23] = I),
            (b[24] = K),
            (b[25] = P.immediate_discount_settings),
            (b[26] = P.promo_credit_grant),
            (b[27] = P.scheduled_discount_preview),
            (b[28] = l),
            (b[29] = u))
          : (u = b[29]),
        b[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, j.gg)({
              modalCredit: !1,
              standaloneCredit: !1,
              walletOptional: !1,
              payPalPromo: !0,
              premiumBusiness: !1,
            })),
            (b[30] = h))
          : (h = b[30]))
      let ea = F || D,
        en = F || Z,
        ei = "free_month" === I ? L.x.startFreeTrial : L.x.subscribe
      return (
        b[31] !== ei ? ((m = (0, n.jsx)(s.A, { ...ei })), (b[31] = ei), (b[32] = m)) : (m = b[32]),
        b[33] !== ea || b[34] !== en || b[35] !== m
          ? ((p = (0, n.jsx)(j.Hp, { className: h, type: "submit", disabled: ea, "aria-busy": en, children: m })),
            (b[33] = ea),
            (b[34] = en),
            (b[35] = m),
            (b[36] = p))
          : (p = b[36]),
        b[37] !== V || b[38] !== O || b[39] !== U || b[40] !== u || b[41] !== p || b[42] !== r || b[43] !== o
          ? ((f = (0, n.jsxs)(d.Nt, { spacing: "promo", errors: O, onSubmit: r, children: [o, V, u, U, p] })),
            (b[37] = V),
            (b[38] = O),
            (b[39] = U),
            (b[40] = u),
            (b[41] = p),
            (b[42] = r),
            (b[43] = o),
            (b[44] = f))
          : (f = b[44]),
        b[45] !== q ||
        b[46] !== x ||
        b[47] !== B ||
        b[48] !== M ||
        b[49] !== I ||
        b[50] !== W ||
        b[51] !== K ||
        b[52] !== f ||
        b[53] !== et ||
        b[54] !== a
          ? ((g = (0, n.jsx)(T.RI, {
              companyPaidBanner: x,
              billingCountry: et,
              paypalPromoPublicEnabled: K,
              TermsLink: q,
              glowImages: M,
              introOffer: I,
              onClose: W,
              disclaimer: B,
              offerBanner: a,
              checkoutForm: f,
            })),
            (b[45] = q),
            (b[46] = x),
            (b[47] = B),
            (b[48] = M),
            (b[49] = I),
            (b[50] = W),
            (b[51] = K),
            (b[52] = f),
            (b[53] = et),
            (b[54] = a),
            (b[55] = g))
          : (g = b[55]),
        b[56] !== g || b[57] !== X || b[58] !== ee
          ? ((C = (0, n.jsx)("div", { className: X, "data-checkout-theme": ee, children: g })),
            (b[56] = g),
            (b[57] = X),
            (b[58] = ee),
            (b[59] = C))
          : (C = b[59]),
        C
      )
    }
    var R = a("n24T"),
      F = a("qvCw")
    let Z = (0, o.createContext)(null)
    var D = a("k6JL")
    let E = (0, M.YK)({
      pageHeading: {
        id: "chatgpt.checkout.students_2026.page.heading.four_month",
        defaultMessage: "Claim your free 4 months",
        description:
          "Main page heading and accessible fullscreen-dialog title on the secure 2026 verified college student checkout. It invites an eligible student to activate four free monthly ChatGPT Plus billing periods. Short headline with no punctuation.",
      },
      studentClaimFreeOffer: {
        id: "chatgpt.checkout.students_2026.submit_button.label.four_month",
        defaultMessage: "Claim free offer",
        description:
          "Short secure checkout confirmation button label for a verified college student activating four free monthly ChatGPT Plus billing periods.",
      },
      plusPlan: {
        id: "chatgpt.checkout.students_2026.summary.plan.heading",
        defaultMessage: "ChatGPT Plus",
        description:
          "Plan heading at the top of the order-summary card on the 2026 verified college student checkout. ChatGPT Plus is the official subscription plan name and must not be translated.",
      },
      workFeature: {
        id: "chatgpt.checkout.students_2026.summary.features.work",
        defaultMessage: "Access to ChatGPT Work",
        description:
          "First feature in the secure checkout order-summary card for verified college students claiming the 2026 four-month ChatGPT Plus offer on desktop or mobile web. It tells students their subscription includes access to the ChatGPT Work product. Keep the branded product name ChatGPT Work unchanged. Short list item with no placeholders.",
      },
      courseworkFeature: {
        id: "chatgpt.checkout.students_2026.summary.features.coursework",
        defaultMessage: "Advanced intelligence for coursework",
        description:
          "ChatGPT Plus feature listed on the 2026 verified college student checkout order-summary card. It describes access to more advanced AI capabilities for academic coursework.",
      },
      imageCreationFeature: {
        id: "chatgpt.checkout.students_2026.summary.features.image_creation",
        defaultMessage: "Higher quality image creation for projects",
        description:
          "ChatGPT Plus feature listed on the 2026 verified college student checkout order-summary card. It describes higher-quality AI-generated images for student projects.",
      },
      memoryFeature: {
        id: "chatgpt.checkout.students_2026.summary.features.memory",
        defaultMessage: "Expanded memory and 20 GB of storage",
        description:
          "ChatGPT Plus feature listed on the 2026 verified college student checkout order-summary card. It describes expanded ChatGPT memory and twenty gigabytes of storage; GB is the unit abbreviation for gigabytes.",
      },
      codexFeature: {
        id: "chatgpt.checkout.students_2026.summary.features.codex",
        defaultMessage: "Codex to help with coding projects",
        description:
          "ChatGPT Plus feature listed on the 2026 verified college student checkout order-summary card. It describes access to Codex for programming projects; Codex is an OpenAI product name.",
      },
    })
    function W(e, t) {
      return (
        "students_2026" === e.entry_point &&
        (null == e.checkout_kind || "standard" === e.checkout_kind) &&
        "chatgptplusplan" === e.plan_name &&
        1 === t.lineItems.length &&
        t.lineItems[0]?.recurring?.interval === "month" &&
        0 === t.total.total.minorUnitsAmount &&
        (t.discountAmounts ?? []).some(
          (e) => 100 === e.percentOff && e.recurring?.type === "repeating" && 4 === e.recurring.durationInMonths,
        )
      )
    }
    var z = a("OEMP"),
      q = a("Yy67"),
      Q = a("IuSx"),
      Y = a("RY1E"),
      K = a("IfYT"),
      $ = a("FeI5")
    function J(e) {
      let t,
        a,
        r,
        o,
        c,
        u,
        d,
        h,
        m,
        p,
        f,
        g,
        C,
        b,
        x = (0, i.c)(46),
        {
          billingCountry: k,
          isTrial: v,
          paypalPromoPublicEnabled: w,
          checkout: P,
          taxPercent: M,
          renewalBaseAmount: _,
          values: A,
          className: j,
          Link: L,
          children: T,
        } = e,
        S = void 0 !== w && w,
        I = (0, l.A)(),
        N = S ? ("US" === k ? "us" : "GB" === k ? "uk" : "de") : "de"
      x[0] !== P.currency || x[1] !== v
        ? ((t = v && "usd" === P.currency.toLowerCase()), (x[0] = P.currency), (x[1] = v), (x[2] = t))
        : (t = x[2])
      let B = t
      if (
        x[3] !== P ||
        x[4] !== j ||
        x[5] !== I ||
        x[6] !== v ||
        x[7] !== B ||
        x[8] !== S ||
        x[9] !== _ ||
        x[10] !== M ||
        x[11] !== A
      ) {
        let {
            currentChargeTaxAmount: e,
            currentChargeTaxRate: t,
            renewalTaxRate: n,
          } = U({ checkout: P, renewalTaxPercent: M }),
          i = v ? n : (t ?? n)
        ;((m = `text-xs leading-4 font-normal text-[var(--checkout-text-tertiary,var(--text-tertiary))] ${j ?? ""}`),
          (a = s.A),
          (h = B
            ? S
              ? q.L_.paypalPromoUsdTrialDisclaimer
              : q.L_.paypalPromoUsdLegacyTrialDisclaimer
            : S
              ? v
                ? q.L_.paypalPromoTrialDisclaimer
                : q.L_.paypalPromoDisclaimer
              : v
                ? q.L_.paypalPromoLegacyTrialDisclaimer
                : q.L_.paypalPromoLegacyDisclaimer),
          (r = A),
          x[20] !== P.currency || x[21] !== I.locale || x[22] !== B || x[23] !== _ || x[24] !== A?.postTrialPrice
            ? ((o = B ? (0, y.ej)({ amountMinorUnits: _, currency: P.currency, locale: I.locale }) : A?.postTrialPrice),
              (x[20] = P.currency),
              (x[21] = I.locale),
              (x[22] = B),
              (x[23] = _),
              (x[24] = A?.postTrialPrice),
              (x[25] = o))
            : (o = x[25]),
          (c = null == i ? "no" : "yes"),
          (u = (0, y.ej)({ amountMinorUnits: e, currency: P.currency, locale: I.locale })),
          (d = null == i ? "" : I.formatNumber(i, { style: "percent", maximumFractionDigits: 1 })),
          (x[3] = P),
          (x[4] = j),
          (x[5] = I),
          (x[6] = v),
          (x[7] = B),
          (x[8] = S),
          (x[9] = _),
          (x[10] = M),
          (x[11] = A),
          (x[12] = a),
          (x[13] = r),
          (x[14] = o),
          (x[15] = c),
          (x[16] = u),
          (x[17] = d),
          (x[18] = h),
          (x[19] = m))
      } else ((a = x[12]), (r = x[13]), (o = x[14]), (c = x[15]), (u = x[16]), (d = x[17]), (h = x[18]), (m = x[19]))
      return (
        x[26] !== L || x[27] !== N
          ? ((p = (e) =>
              (0, n.jsx)(L, {
                href: `https://www.paypal.com/${N}/campaign/openai_tnc`,
                className: "underline",
                children: e,
              })),
            (x[26] = L),
            (x[27] = N),
            (x[28] = p))
          : (p = x[28]),
        x[29] !== p || x[30] !== r || x[31] !== o || x[32] !== c || x[33] !== u || x[34] !== d
          ? ((f = {
              ...r,
              postTrialPrice: o,
              hasPaypalTax: c,
              paypalTaxAmount: u,
              paypalTaxRate: d,
              paypalTermsLink: p,
            }),
            (x[29] = p),
            (x[30] = r),
            (x[31] = o),
            (x[32] = c),
            (x[33] = u),
            (x[34] = d),
            (x[35] = f))
          : (f = x[35]),
        x[36] !== a || x[37] !== f || x[38] !== h
          ? ((g = (0, n.jsx)(a, { ...h, values: f })), (x[36] = a), (x[37] = f), (x[38] = h), (x[39] = g))
          : (g = x[39]),
        x[40] !== T
          ? ((C = null != T ? (0, n.jsxs)(n.Fragment, { children: [" ", T] }) : null), (x[40] = T), (x[41] = C))
          : (C = x[41]),
        x[42] !== g || x[43] !== C || x[44] !== m
          ? ((b = (0, n.jsxs)("div", { className: m, children: [g, C] })),
            (x[42] = g),
            (x[43] = C),
            (x[44] = m),
            (x[45] = b))
          : (b = x[45]),
        b
      )
    }
    function X(e) {
      let t,
        a,
        r,
        o,
        c,
        d,
        m,
        p,
        f,
        C,
        b,
        x,
        k,
        v = (0, i.c)(64),
        {
          checkout: w,
          session: P,
          Link: M,
          trialDetails: _,
          showPremiumSeats: A,
          hideBusinessSeatChargeAmount: j,
          walletPaymentOptional: L,
          disableHorizontalPadding: T,
          paypalPromoPricing: S,
          postTrialAmountMinorUnits: I,
          paypalPromoPublicEnabled: N,
          presentation: B,
          sharedUsageLimitEnabled: V,
          savedPaymentConsentMode: U,
          autoReloadEnabled: G,
        } = e,
        H = void 0 !== A && A,
        O = void 0 !== j && j,
        F = void 0 !== L && L,
        Z = void 0 !== T && T,
        D = void 0 !== N && N,
        E = void 0 === B ? "page" : B,
        W = void 0 !== V && V,
        Y = void 0 === U ? "none" : U,
        X = (0, z.Pj)(Q.jg, en),
        er =
          G ??
          (P.checkout_kind === u.td.StandaloneCredit
            ? (X ?? P.credit_purchase_auto_top_up?.enabled)
            : P.checkout_kind !== u.td.RateLimitReset && P.credit_purchase_auto_top_up?.enabled) ??
          !1,
        eo = q.L_.standaloneCreditDisclaimer
      switch (Y) {
        case "new_card_saved":
          eo = er ? q.L_.standaloneCreditSavedCardAutoReloadDisclaimer : q.L_.standaloneCreditSavedCardDisclaimer
          break
        case "new_card_unsaved":
          eo = er ? q.L_.standaloneCreditDisclaimer : q.L_.standaloneCreditUnsavedCardDisclaimer
          break
        case "link":
          eo = q.L_.standaloneCreditLinkDisclaimer
          break
        case "express_wallet":
          eo = q.L_.standaloneCreditExpressWalletDisclaimer
      }
      let es = (0, l.A)()
      if (
        v[0] !== M ||
        v[1] !== w ||
        v[2] !== eo ||
        v[3] !== Z ||
        v[4] !== er ||
        v[5] !== O ||
        v[6] !== es ||
        v[7] !== S ||
        v[8] !== D ||
        v[9] !== I ||
        v[10] !== E ||
        v[11] !== Y ||
        v[12] !== P ||
        v[13] !== W ||
        v[14] !== H ||
        v[15] !== _.isFreeTrial ||
        v[16] !== _.trialDurationInDays ||
        v[17] !== F
      ) {
        d = Symbol.for("react.early_return_sentinel")
        t: {
          let e,
            i,
            l,
            { planLineItem: f, hasTrialDiscount: C } = (0, q.RF)({
              checkout: w,
              isFreeTrial: _.isFreeTrial,
              isPremiumBusinessCheckout: H && "chatgptteamplan" === P.plan_name,
            })
          if (null == f) {
            d = null
            break t
          }
          ;(v[26] !== w.billingAddress?.address.country || v[27] !== es.locale || v[28] !== P.billing_details?.country
            ? ((e =
                w.billingAddress?.address.country ??
                P.billing_details?.country ??
                new Intl.Locale(es.locale).maximize().region ??
                "US"),
              (v[26] = w.billingAddress?.address.country),
              (v[27] = es.locale),
              (v[28] = P.billing_details?.country),
              (v[29] = e))
            : (e = v[29]),
            (a = e))
          let b = (0, h.IC)(a),
            x = "KR" === a ? "kr" : b || "GB" === a ? "euUk" : "default",
            k = f.recurring?.interval,
            A = "month" === k || "year" === k || "week" === k || "day" === k ? k : null,
            j = "recurring" in w ? w.recurring : null,
            L = null != A && P.immediate_discount_settings?.no_auto_renewal_at_discount_end !== !0,
            T = "chatgptrosalindacademicplan" === P.plan_name && !F && !L && C,
            N = P.entry_point === R.Pr,
            B =
              "chatgptteamplan" === P.plan_name &&
              "month" === k &&
              P.immediate_discount_settings?.no_auto_renewal_at_discount_end !== !0 &&
              !_.isFreeTrial &&
              C,
            V =
              !N &&
              (w.discountAmounts?.some(ea) ?? !1) &&
              P.immediate_discount_settings?.no_auto_renewal_at_discount_end !== !0 &&
              null != j &&
              j.dueNext.discount.minorUnitsAmount > 0,
            U =
              null == I &&
              V &&
              (j.dueNext.taxExclusive.minorUnitsAmount > 0 || !w.taxAmounts?.length || w.taxAmounts.some(et)),
            G = j?.dueNext.total.minorUnitsAmount ?? f.subtotal.minorUnitsAmount
          V
            ? (G = j.dueNext.subtotal.minorUnitsAmount)
            : N && S?.taxBehavior === "inclusive"
              ? (G = f.subtotal.minorUnitsAmount)
              : N &&
                S?.taxBehavior === "exclusive" &&
                null != S.taxPercent &&
                (G =
                  f.subtotal.minorUnitsAmount +
                  (0, K.Bd)({ inclusive: !1, amount: f.subtotal.minorUnitsAmount, taxPercent: S.taxPercent }))
          let z = (0, q.Ln)({
            checkout: w,
            lineItem: f,
            immediateDiscountSettings: P.immediate_discount_settings ?? null,
            walletBalanceEnabled: F,
            isTrial: B ? _.isFreeTrial : C,
            isBusinessMonthlyDiscount: B,
            trialDurationInDays: _.trialDurationInDays,
            postTrialAmountMinorUnits: I ?? G,
          })
          v[30] !== M || v[31] !== P.checkout_kind
            ? ((i = (e) => (t) =>
                (0, n.jsx)(
                  M,
                  {
                    href: e,
                    className: (0, u.K8)(P.checkout_kind)
                      ? "underline decoration-dotted underline-offset-2"
                      : "underline",
                    children: t,
                  },
                  e,
                )),
              (v[30] = M),
              (v[31] = P.checkout_kind),
              (v[32] = i))
            : (i = v[32])
          let Q = i
          if (
            ((p = {
              trialLengthMonths: z.trialLengthMonths,
              taxTreatment:
                w.taxAmounts?.some(ee) || (w.total.taxInclusive?.minorUnitsAmount ?? 0) > 0 ? "inclusive" : "exclusive",
              billingIntervalNoun: A
                ? (function (e, t) {
                    switch (e) {
                      case "month":
                        return t.formatMessage({
                          id: "StripeCheckoutBillingInterval.month",
                          defaultMessage: "month",
                          description: "Billing interval noun for month",
                        })
                      case "year":
                        return t.formatMessage({
                          id: "StripeCheckoutBillingInterval.year",
                          defaultMessage: "year",
                          description: "Billing interval noun for year",
                        })
                      case "week":
                        return t.formatMessage({
                          id: "StripeCheckoutBillingInterval.week",
                          defaultMessage: "week",
                          description: "Billing interval noun for week",
                        })
                      case "day":
                        return t.formatMessage({
                          id: "StripeCheckoutBillingInterval.day",
                          defaultMessage: "day",
                          description: "Billing interval noun for day",
                        })
                      default:
                        throw Error(`Unknown StripeCheckoutBillingInterval: ${e}`)
                    }
                  })(A, es)
                : "",
              billingIntervalAdverb: A
                ? (function (e, t) {
                    switch (e) {
                      case "month":
                        return t.formatMessage({
                          id: "StripeCheckoutBillingInterval.monthly",
                          defaultMessage: "monthly",
                          description: "Billing interval label for monthly",
                        })
                      case "year":
                        return t.formatMessage({
                          id: "StripeCheckoutBillingInterval.annually",
                          defaultMessage: "annually",
                          description: "Billing interval label for annually",
                        })
                      case "week":
                        return t.formatMessage({
                          id: "StripeCheckoutBillingInterval.weekly",
                          defaultMessage: "weekly",
                          description: "Billing interval label for weekly",
                        })
                      case "day":
                        return t.formatMessage({
                          id: "StripeCheckoutBillingInterval.daily",
                          defaultMessage: "daily",
                          description: "Billing interval label for daily",
                        })
                      default:
                        throw Error(`Unknown StripeCheckoutBillingInterval: ${e}`)
                    }
                  })(A, es)
                : "",
              price: (0, y.ej)({ amountMinorUnits: z.priceMinorUnits, currency: z.priceCurrency, locale: es.locale }),
              postTrialPrice: (0, y.ej)({
                amountMinorUnits: z.postTrialPriceMinorUnits,
                currency: z.postTrialPriceCurrency,
                locale: es.locale,
              }),
              termsOfUseLink: Q(
                b ? "https://openai.com/policies/eu-terms-of-use" : "https://openai.com/policies/row-terms-of-use",
              ),
              termsOfServiceLink: Q("https://openai.com/terms/"),
              privacyPolicyLink: Q("https://openai.com/privacy/"),
              serviceCreditTermsLink: Q("https://openai.com/policies/service-credit-terms/"),
              businessTermsLink: Q("https://openai.com/policies/services-agreement"),
              cancelAnytimeLink: Q("https://help.openai.com/articles/7232927"),
              promoTermsLink: Q((0, g.wg)((0, u.qI)(P.plan_name), P.promo_campaign?.promo_campaign_id ?? null)),
              refundPolicyLink: Q("https://help.openai.com/articles/7232895"),
            }),
            v[33] !== Q || v[34] !== E || v[35] !== P || v[36] !== W
              ? ((l =
                  W && "page" === E && (0, q.Ui)(P)
                    ? (0, n.jsx)(s.A, { ...q.L_.sharedUsageLimit, values: { learnMoreLink: Q(q.yC) } })
                    : null),
                (v[33] = Q),
                (v[34] = E),
                (v[35] = P),
                (v[36] = W),
                (v[37] = l))
              : (l = v[37]),
            (r = l),
            N)
          ) {
            d = (0, n.jsx)(J, {
              billingCountry: P.billing_details?.country,
              paypalPromoPublicEnabled: D,
              Link: M,
              isTrial: C,
              checkout: w,
              renewalBaseAmount: f.subtotal.minorUnitsAmount,
              taxPercent: S?.taxPercent,
              values: p,
              children: r,
            })
            break t
          }
          if ("modal" === E && P.checkout_kind === u.td.StandaloneCredit) {
            let e,
              t = (0, n.jsx)("p", { className: "mt-2", children: (0, n.jsx)(s.A, { ...eo, values: p }) })
            ;(v[38] !== M || v[39] !== a || v[40] !== er || v[41] !== Y || v[42] !== t
              ? ((e = (0, n.jsx)($.O, {
                  autoReloadEnabled: er,
                  billingCountry: a,
                  savedPaymentConsentMode: Y,
                  Link: M,
                  saveChoiceDisclosure: t,
                })),
                (v[38] = M),
                (v[39] = a),
                (v[40] = er),
                (v[41] = Y),
                (v[42] = t),
                (v[43] = e))
              : (e = v[43]),
              (d = e))
            break t
          }
          ;((o = `text-xs leading-4 font-normal ${Z ? "" : "px-3"} ${(0, u.K8)(P.checkout_kind) ? "text-[#8f8f8f] dark:text-white/45" : ""}`),
            v[44] !== er
              ? ((c = er
                  ? (0, n.jsx)("p", {
                      className: "mb-3",
                      children: (0, n.jsx)(s.A, {
                        id: "checkout.autoTopUpEnabled",
                        defaultMessage:
                          "Automatic credit top-ups are enabled. By paying, you authorize OpenAI to save and automatically charge this payment method for top-ups. You can manage them in Settings.",
                        description:
                          "Consent to saving and charging the payment method for automatic future credit purchases after this Business credit purchase",
                      }),
                    })
                  : null),
                (v[44] = er),
                (v[45] = c))
              : (c = v[45]),
            (t = s.A),
            (m =
              P.checkout_kind === u.td.StandaloneCredit
                ? eo
                : P.checkout_kind === u.td.RateLimitReset
                  ? q.L_.standaloneCreditDisclaimer
                  : P.checkout_kind === u.td.CodexTeam
                    ? q.L_.codexPaygLegalLanguageDisclaimer
                    : T
                      ? ei[x]
                      : (0, q.rK)({
                          isWalletCheckout: F,
                          geoVariant: x,
                          isTrial: C,
                          isBusinessMonthlyDiscount: B,
                          hideBusinessSeatChargeAmount: O,
                          postTrialPriceExcludesTax: U,
                          planKind:
                            "chatgptrosalindacademicplan" === P.plan_name
                              ? "rosalind_academic"
                              : "chatgptteamplan" === P.plan_name || "chatgptbusiness_usage_based" === P.plan_name
                                ? "business"
                                : "consumer",
                          isRecurring: L,
                          noAutoRenewalAtDiscountEnd:
                            P.immediate_discount_settings?.no_auto_renewal_at_discount_end === !0,
                        })))
        }
        ;((v[0] = M),
          (v[1] = w),
          (v[2] = eo),
          (v[3] = Z),
          (v[4] = er),
          (v[5] = O),
          (v[6] = es),
          (v[7] = S),
          (v[8] = D),
          (v[9] = I),
          (v[10] = E),
          (v[11] = Y),
          (v[12] = P),
          (v[13] = W),
          (v[14] = H),
          (v[15] = _.isFreeTrial),
          (v[16] = _.trialDurationInDays),
          (v[17] = F),
          (v[18] = t),
          (v[19] = a),
          (v[20] = r),
          (v[21] = o),
          (v[22] = c),
          (v[23] = d),
          (v[24] = m),
          (v[25] = p))
      } else ((t = v[18]), (a = v[19]), (r = v[20]), (o = v[21]), (c = v[22]), (d = v[23]), (m = v[24]), (p = v[25]))
      return d !== Symbol.for("react.early_return_sentinel")
        ? d
        : (v[46] !== t || v[47] !== m || v[48] !== p
            ? ((f = (0, n.jsx)(t, { ...m, values: p })), (v[46] = t), (v[47] = m), (v[48] = p), (v[49] = f))
            : (f = v[49]),
          v[50] !== a
            ? ((C =
                "KR" === a
                  ? (0, n.jsxs)(n.Fragment, { children: [" ", (0, n.jsx)(s.A, { ...q.L_.krRefundRequestSentence })] })
                  : null),
              (v[50] = a),
              (v[51] = C))
            : (C = v[51]),
          v[52] !== r
            ? ((b = null != r ? (0, n.jsxs)(n.Fragment, { children: [" ", r] }) : null), (v[52] = r), (v[53] = b))
            : (b = v[53]),
          v[54] !== Y || v[55] !== P.checkout_kind
            ? ((x =
                P.checkout_kind !== u.td.StandaloneCredit && ("new_card_saved" === Y || "new_card_unsaved" === Y)
                  ? (0, n.jsx)("p", {
                      className: "mt-3",
                      "aria-live": "polite",
                      children:
                        "new_card_saved" === Y
                          ? (0, n.jsx)(s.A, {
                              id: "chatgpt.checkout.saved_payment.reuse.subscription_disclaimer.checked_with_settings",
                              defaultMessage:
                                "This card will be available for future purchases. Subscription renewals may still charge it. You can add, edit, or delete payment methods in Settings.",
                              description:
                                "Temporary placeholder consent text directly below the Subscribe button on subscription checkout when the OpenAI save-card checkbox is checked. Saving enables future purchase redisplay; subscription renewal is separate. This multi-sentence footer also tells customers they can add, edit, or delete payment methods in the app Settings. Replace with approved localized checked-state legal language before launch.",
                            })
                          : (0, n.jsx)(s.A, {
                              id: "chatgpt.checkout.saved_payment.reuse.subscription_disclaimer.unchecked",
                              defaultMessage:
                                "This card won't be saved for future purchases. Subscription renewals may still charge it.",
                              description:
                                "Temporary placeholder consent text directly below the Subscribe button on subscription checkout when the OpenAI save-card checkbox is unchecked. Opting out disables future purchase redisplay without blocking subscription renewal. Replace with approved localized unchecked-state legal language before launch.",
                            }),
                    })
                  : null),
              (v[54] = Y),
              (v[55] = P.checkout_kind),
              (v[56] = x))
            : (x = v[56]),
          v[57] !== o || v[58] !== c || v[59] !== f || v[60] !== C || v[61] !== b || v[62] !== x
            ? ((k = (0, n.jsxs)("div", { className: o, children: [c, f, C, b, x] })),
              (v[57] = o),
              (v[58] = c),
              (v[59] = f),
              (v[60] = C),
              (v[61] = b),
              (v[62] = x),
              (v[63] = k))
            : (k = v[63]),
          k)
    }
    function ee(e) {
      return e.inclusive
    }
    function et(e) {
      return !e.inclusive
    }
    function ea(e) {
      return e.recurring?.type === "repeating"
    }
    function en(e) {
      return e.codexAutoTopUpEnabled
    }
    let ei = (0, Y.Y)({
      default: {
        id: "CheckoutDisclaimer.rosalindAcademicNonRecurringWithTrial",
        defaultMessage:
          "{price} for {trialLengthMonths, plural, one {# month} other {# months}}. Your plan will not renew automatically. <cancelAnytimeLink>Cancel anytime</cancelAnytimeLink> in Settings. By subscribing, you agree to the <businessTermsLink>Business Terms</businessTermsLink>, <promoTermsLink>Promo Terms</promoTermsLink>, and authorize us to store and charge your payment method.",
        description:
          "Legal caption below Subscribe in Rosalind Academic Lab checkout outside the EU, UK, and Korea. {price} is the formatted sponsored price and {trialLengthMonths} is the sponsorship duration in months. The plan ends without automatic renewal; do not imply a future charge. Rich-text tags link to cancellation settings, Business Terms, and Promo Terms.",
      },
      euUk: {
        id: "CheckoutDisclaimer.rosalindAcademicNonRecurringWithTrialEuUk",
        defaultMessage:
          '{price} for {trialLengthMonths, plural, one {# month} other {# months}}. Your plan will not renew automatically. <cancelAnytimeLink>Cancel anytime</cancelAnytimeLink> in Settings. By selecting "Subscribe and pay", you agree to the <businessTermsLink>Business Terms</businessTermsLink>, <promoTermsLink>Promo Terms</promoTermsLink>, and authorize us to store and charge your payment method.',
        description:
          'Legal caption below "Subscribe and pay" in European Union and United Kingdom Rosalind Academic Lab checkout. {price} is the formatted sponsored price and {trialLengthMonths} is the sponsorship duration in months. The plan ends without automatic renewal; do not imply a future charge. Rich-text tags link to cancellation settings, Business Terms, and Promo Terms.',
      },
      kr: {
        id: "CheckoutDisclaimer.rosalindAcademicNonRecurringWithTrialKr",
        defaultMessage:
          "{price} for {trialLengthMonths, plural, one {# month} other {# months}}. Your plan will not renew automatically. <cancelAnytimeLink>Cancel anytime</cancelAnytimeLink>. By subscribing, you agree to the <businessTermsLink>Business Terms</businessTermsLink>, <promoTermsLink>Promo Terms</promoTermsLink>, and authorize us to store and charge your payment method. <refundPolicyLink>Learn about refunds</refundPolicyLink>.",
        description:
          "Legal caption below Subscribe in South Korean Rosalind Academic Lab checkout. {price} is the formatted sponsored price and {trialLengthMonths} is the sponsorship duration in months. The plan ends without automatic renewal; do not imply a future charge. Rich-text tags link to cancellation settings, Business Terms, Promo Terms, and the refund policy.",
      },
    })
    var er = a("c2F9"),
      eo = a("Uxls"),
      es = a("AlhA"),
      el = a("lgyL"),
      ec = a("O3Pw"),
      eu = a("avvo")
    function ed(e) {
      let t,
        a,
        r,
        l,
        c,
        u,
        d,
        h,
        m,
        p,
        f = (0, i.c)(57),
        {
          heading: g,
          firstMonthFree: C,
          features: b,
          featureListLabel: x,
          featuresClassName: y,
          showTopFeatures: k,
          compactFeatures: v,
          collapsibleFeatureCount: w,
          featuresVariant: P,
          contextualCopy: M,
          studentOffer: _,
          promoBanner: L,
          offerStatus: T,
          invoice: S,
          children: I,
          buttonContainerRef: N,
          buttonLabel: B,
          hideButtonSlot: V,
          premiumBusiness: U,
          wallet: G,
          proUsageTiers: H,
          businessPremiumDisclaimer: O,
        } = e,
        R = void 0 === k || k,
        F = void 0 !== v && v,
        Z = void 0 !== V && V,
        D = void 0 !== U && U,
        E = void 0 !== G && G,
        W = void 0 !== H && H,
        [z, q] = (0, o.useState)(!1),
        Q = (0, o.useId)(),
        Y = (b?.length ?? 0) > 0,
        K = w ?? 5,
        $ = (F || null != w) && (b?.length ?? 0) > K,
        J = $ && (null != w || !z)
      f[0] !== $ || f[1] !== K || f[2] !== z || f[3] !== b
        ? ((t = $ && !z ? b?.slice(0, K) : b), (f[0] = $), (f[1] = K), (f[2] = z), (f[3] = b), (f[4] = t))
        : (t = f[4])
      let X = t,
        ee = D ? O : void 0
      ;(f[5] !== C || f[6] !== g
        ? ((a = C
            ? (0, n.jsx)(j.Zj, {
                children: (0, n.jsx)(s.A, {
                  id: "CheckoutSummary.firstMonthFreeHeading",
                  defaultMessage: "Start {planName} today for {firstMonthAmount}",
                  description:
                    "Headline at the top of the redesigned checkout summary card for first-month-free monthly offers. {planName} is the selected ChatGPT plan name, such as Go or Plus. {firstMonthAmount} is a localized currency amount for the first month, usually $0. Short headline with no punctuation.",
                  values: { planName: C.planName, firstMonthAmount: C.amount },
                }),
              })
            : g
              ? (0, n.jsx)(j.Zj, { children: g })
              : null),
          (f[5] = C),
          (f[6] = g),
          (f[7] = a))
        : (a = f[7]),
        f[8] !== _
          ? ((r = _
              ? (0, n.jsx)("span", {
                  className:
                    "bg-token-theme-blue-background text-token-theme-blue-default mb-3 inline-flex rounded-full px-2 py-1 text-xs font-medium",
                  children: (0, n.jsx)(s.A, {
                    id: "chatgpt.checkout.students_2026.offer.duration_badge.four_month",
                    defaultMessage: "4 months free",
                    description:
                      "Short badge on the checkout summary for the verified 2026 college student offer, which provides four free monthly ChatGPT Plus billing periods.",
                  }),
                })
              : null),
            (f[8] = _),
            (f[9] = r))
          : (r = f[9]),
        f[10] !== F || f[11] !== M || f[12] !== Y || f[13] !== D || f[14] !== W || f[15] !== R || f[16] !== E
          ? ((l =
              Y && R && !F && !M
                ? (0, n.jsx)("h4", {
                    className: `text-body-small-regular py-2 leading-5 font-normal ${D || E || W ? "text-[14px]" : "text-[15px]"}`,
                    children: (0, n.jsx)(s.A, {
                      id: "CheckoutSummary.topFeatures",
                      defaultMessage: "Top features",
                      description: "Description for the top features of the checkout summary",
                    }),
                  })
                : null),
            (f[10] = F),
            (f[11] = M),
            (f[12] = Y),
            (f[13] = D),
            (f[14] = W),
            (f[15] = R),
            (f[16] = E),
            (f[17] = l))
          : (l = f[17]),
        f[18] !== M
          ? ((c = M
              ? (0, n.jsxs)("div", {
                  className: "mb-3 flex flex-col items-start gap-2",
                  children: [
                    M.impression,
                    (0, n.jsx)("span", {
                      className:
                        "rounded-full bg-blue-400/[.09] px-2 py-1 text-xs font-medium text-blue-500 dark:bg-blue-100/20 dark:text-blue-100",
                      children: M.badge,
                    }),
                    (0, n.jsx)("p", {
                      className:
                        "text-[15px] leading-[22px] text-[var(--checkout-text-secondary,var(--text-secondary))]",
                      children: M.description,
                    }),
                  ],
                })
              : null),
            (f[18] = M),
            (f[19] = c))
          : (c = f[19]),
        f[20] !== w ||
        f[21] !== F ||
        f[22] !== z ||
        f[23] !== Q ||
        f[24] !== x ||
        f[25] !== y ||
        f[26] !== P ||
        f[27] !== Y ||
        f[28] !== L ||
        f[29] !== J ||
        f[30] !== X
          ? ((u = Y
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      id: null != w ? Q : void 0,
                      className: y ?? "contents",
                      children: (0, n.jsx)(es.wi, {
                        surface: "checkout",
                        compact: F,
                        variant: P,
                        label: x,
                        children: X,
                      }),
                    }),
                    J
                      ? (0, n.jsx)("button", {
                          type: "button",
                          className:
                            "business" === P
                              ? "mb-4 cursor-pointer self-start p-0 text-start text-sm/5 font-normal text-token-text-secondary underline decoration-dotted underline-offset-2 focus-visible:decoration-solid"
                              : "mb-3 cursor-pointer self-start p-0 text-start text-[15px] font-normal text-[#0A84FF] focus-visible:underline focus-visible:outline-none dark:text-[#0A84FF]",
                          "aria-expanded": z,
                          "aria-controls": null != w ? Q : void 0,
                          onClick: () => q(!z),
                          children: z
                            ? (0, n.jsx)(s.A, {
                                id: "CheckoutSummary.hideFeatures",
                                defaultMessage: "Hide features",
                                description:
                                  "Button that collapses the expanded checkout benefits back to the initial short list. It is paired with Show all features.",
                              })
                            : (0, n.jsx)(s.A, { ...A.DZ.showAllFeatures }),
                        })
                      : null,
                    L,
                    (0, n.jsx)(j.Ue, {}),
                  ],
                })
              : null),
            (f[20] = w),
            (f[21] = F),
            (f[22] = z),
            (f[23] = Q),
            (f[24] = x),
            (f[25] = y),
            (f[26] = P),
            (f[27] = Y),
            (f[28] = L),
            (f[29] = J),
            (f[30] = X),
            (f[31] = u))
          : (u = f[31]),
        f[32] !== _
          ? ((d = _
              ? (0, n.jsxs)("div", {
                  className:
                    "text-caption-emphasized bg-token-theme-blue-background text-token-theme-blue-default dark:text-token-theme-blue-text-on-background flex items-center gap-3 rounded-xl p-3",
                  role: "status",
                  children: [
                    _.icon,
                    (0, n.jsx)(s.A, {
                      id: "chatgpt.checkout.students_2026.summary.offer_applied.four_month",
                      defaultMessage: "Student offer applied: 4 months free",
                      description:
                        "Confirmation in a blue status banner inside the 2026 verified college student checkout order-summary card. It confirms that the account-bound student promotion provides four free monthly ChatGPT Plus billing periods.",
                    }),
                  ],
                })
              : null),
            (f[32] = _),
            (f[33] = d))
          : (d = f[33]))
      let et = Y ? "w-full pt-3 pb-5" : "w-full pt-1 pb-2"
      return (
        f[34] !== S || f[35] !== et
          ? ((h = (0, n.jsx)("div", { "data-checkout-part": "invoice", className: et, children: S })),
            (f[34] = S),
            (f[35] = et),
            (f[36] = h))
          : (h = f[36]),
        f[37] !== N || f[38] !== B || f[39] !== I || f[40] !== Z || f[41] !== _
          ? ((m = Z
              ? null
              : (0, n.jsx)("div", {
                  ref: N,
                  "aria-label": B,
                  className: _
                    ? "min-h-[44px] w-full max-sm:min-h-16! max-sm:[&_button]:h-16 max-sm:[&_button]:min-h-16! max-sm:[&_button]:text-lg! max-sm:[&_button]:font-semibold!"
                    : "min-h-[44px] w-full",
                  children: I,
                })),
            (f[37] = N),
            (f[38] = B),
            (f[39] = I),
            (f[40] = Z),
            (f[41] = _),
            (f[42] = m))
          : (m = f[42]),
        f[43] !== T ||
        f[44] !== D ||
        f[45] !== W ||
        f[46] !== r ||
        f[47] !== l ||
        f[48] !== c ||
        f[49] !== u ||
        f[50] !== d ||
        f[51] !== h ||
        f[52] !== m ||
        f[53] !== ee ||
        f[54] !== a ||
        f[55] !== E
          ? ((p = (0, n.jsxs)(j.PF, {
              premiumBusiness: D,
              wallet: E,
              proUsageTiers: W,
              disclosure: ee,
              children: [a, r, l, c, u, d, T, h, m],
            })),
            (f[43] = T),
            (f[44] = D),
            (f[45] = W),
            (f[46] = r),
            (f[47] = l),
            (f[48] = c),
            (f[49] = u),
            (f[50] = d),
            (f[51] = h),
            (f[52] = m),
            (f[53] = ee),
            (f[54] = a),
            (f[55] = E),
            (f[56] = p))
          : (p = f[56]),
        p
      )
    }
    function eh(e) {
      let t,
        a,
        r,
        o,
        l,
        d,
        h,
        m,
        p,
        f,
        g,
        C,
        y,
        v,
        P,
        M,
        _,
        A,
        j,
        L,
        T,
        S,
        I,
        B = (0, i.c)(153),
        {
          children: V,
          disclosure: U,
          afterInvoice: G,
          invoiceOverride: H,
          promoCodeRow: O,
          businessSeatUpdatePending: R,
          checkout: F,
          session: Z,
          trialDetails: D,
          trialIcons: z,
          includeTrialReminder: q,
          usePricingModalValueProps: Q,
          advertisedFeatures: Y,
          isDarkMode: K,
          icons: $,
          proliteEnabled: J,
          walletPaymentOptional: X,
          premiumBusiness: ee,
          hideRedundantSeatSubtotal: et,
          businessFeatures: ea,
          businessApiCreditFeature: en,
          standardSeatsOnly: ei,
          collapsibleFeatureCount: eh,
          showBalanceAdjustment: ef,
          walletBalanceAllowed: eg,
          quotePending: eC,
          isNoPaymentTrialCheckout: eb,
          isNoPaymentTrialOffer: ex,
          noPaymentTrialIcons: ey,
          noPaymentTrialOfferIcon: ek,
        } = e,
        ev = void 0 !== Q && Q,
        ew = void 0 !== K && K,
        eP = void 0 === $ ? b.z : $,
        eM = void 0 !== J && J,
        e_ = void 0 !== X && X,
        eA = void 0 !== ee && ee,
        ej = void 0 !== ei && ei,
        eL = void 0 !== ef && ef,
        eT = void 0 === eg || eg,
        eS = void 0 !== eC && eC,
        eI = void 0 !== ex && ex
      B[0] !== ea || B[1] !== ej ? ((t = ej ? ea?.filter(ep) : ea), (B[0] = ea), (B[1] = ej), (B[2] = t)) : (t = B[2])
      let eN = t,
        eB = Z.plan_name
      B[3] !== F || B[4] !== Z ? ((a = W(Z, F)), (B[3] = F), (B[4] = Z), (B[5] = a)) : (a = B[5])
      let eV = a,
        eU = eI && !eS,
        eG = void 0 !== eb && eb && !(eI && eS)
      B[6] !== Z.checkout_kind ? ((r = (0, u.K8)(Z.checkout_kind)), (B[6] = Z.checkout_kind), (B[7] = r)) : (r = B[7])
      let eH = r
      if (eH) {
        let e,
          t,
          a,
          i = Z.checkout_kind === u.td.RateLimitReset,
          r = !!Z.credit_discount_offer
        return (
          B[8] !== F || B[9] !== eS || B[10] !== Z.immediate_discount_settings || B[11] !== eL || B[12] !== eT
            ? ((e = (e) => {
                let { className: t, ...a } = e
                return (0, n.jsx)("div", {
                  className: t,
                  children: (0, n.jsx)(k.O5, {
                    ...a,
                    checkout: F,
                    immediateDiscountSettings: Z.immediate_discount_settings ?? null,
                    showPremiumSeats: !1,
                    showBalanceAdjustment: eL,
                    walletBalanceAllowed: eT,
                    useCompactSpacing: !1,
                    isRunningServerUpdate: eS,
                  }),
                })
              }),
              (B[8] = F),
              (B[9] = eS),
              (B[10] = Z.immediate_discount_settings),
              (B[11] = eL),
              (B[12] = eT),
              (B[13] = e))
            : (e = B[13]),
          B[14] !== F || B[15] !== eS || B[16] !== Z.credit_discount_offer || B[17] !== i || B[18] !== r || B[19] !== e
            ? ((t = (0, n.jsx)(eo.h, {
                checkout: F,
                isRateLimitResetCheckout: i,
                creditDiscountOffer: Z.credit_discount_offer,
                hasCreditDiscountOffer: r,
                isSubmitting: eS,
                isTaxQuotePending: eS,
                renderInvoice: e,
              })),
              (B[14] = F),
              (B[15] = eS),
              (B[16] = Z.credit_discount_offer),
              (B[17] = i),
              (B[18] = r),
              (B[19] = e),
              (B[20] = t))
            : (t = B[20]),
          B[21] !== V || B[22] !== t
            ? ((a = (0, n.jsxs)(n.Fragment, { children: [t, V] })), (B[21] = V), (B[22] = t), (B[23] = a))
            : (a = B[23]),
          a
        )
      }
      if (
        B[24] !== Y ||
        B[25] !== eP ||
        B[26] !== q ||
        B[27] !== eH ||
        B[28] !== eV ||
        B[29] !== ey?.CancelIcon ||
        B[30] !== ey?.WorkIcon ||
        B[31] !== eB ||
        B[32] !== eA ||
        B[33] !== eM ||
        B[34] !== eG ||
        B[35] !== D ||
        B[36] !== z ||
        B[37] !== ev
      ) {
        let e = (0, u.qI)(eB),
          t = (0, u.nq)(eB)
        if (
          ((l = eG
            ? c.Yg.plusPlan
            : eV
              ? E.plusPlan
              : void 0 !== t
                ? c.Yg.sophiaPlan
                : "chatgptrosalindacademicplan" === eB
                  ? c.Y9.heading
                  : "chatgptgoplan" === eB
                    ? c.Yg.goPlan
                    : "chatgptpro" === eB || "chatgptprolite" === eB || "promax" === e
                      ? ec.DZ.proPlanName
                      : "chatgptteamplan" === eB || "chatgptbusiness_usage_based" === eB
                        ? c.Yg.businessPlan
                        : c.Yg.plusPlan),
          (d = "pro" === e || "prolite" === e || "promax" === e),
          eH)
        ) {
          let e
          ;(B[41] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (B[41] = e)) : (e = B[41]), (o = e))
        } else if (eG) {
          let e, t, a, n, i, r
          B[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = { label: x.UN.intelligence, icon: el.VU.telescopePlus }),
              (t = { label: x.UN.images, icon: el.VU.images }),
              (B[42] = e),
              (B[43] = t))
            : ((e = B[42]), (t = B[43]))
          let s = ey?.WorkIcon ?? el.VU.briefcase
          ;(B[44] !== s ? ((a = { label: x.UN.work, icon: s }), (B[44] = s), (B[45] = a)) : (a = B[45]),
            B[46] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = { label: x.UN.memory, icon: el.VU.brain }), (B[46] = n))
              : (n = B[46]))
          let l = ey?.CancelIcon ?? el.VU.invoice
          ;(B[47] !== l ? ((i = { label: x.UN.cancel, icon: l }), (B[47] = l), (B[48] = i)) : (i = B[48]),
            B[49] !== a || B[50] !== i ? ((r = [e, t, a, n, i]), (B[49] = a), (B[50] = i), (B[51] = r)) : (r = B[51]),
            (o = r))
        } else if (eV) {
          let e
          ;(B[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = [
                { label: E.workFeature, icon: el.VU.workWithApps },
                { label: E.courseworkFeature, icon: el.VU.telescopePlus },
                { label: E.imageCreationFeature, icon: el.VU.images },
                { label: E.memoryFeature, icon: el.VU.brain },
                { label: E.codexFeature, icon: el.VU.codex },
              ]),
              (B[52] = e))
            : (e = B[52]),
            (o = e))
        } else if (void 0 !== t) {
          let e
          ;(B[53] !== eP ? ((e = (0, eu.Iu)(eP)), (B[53] = eP), (B[54] = e)) : (e = B[54]), (o = e))
        } else if ("chatgptrosalindacademicplan" === eB) {
          let e
          ;(B[55] !== eP ? ((e = (0, eu.yt)(eP)), (B[55] = eP), (B[56] = e)) : (e = B[56]), (o = e))
        } else if (null == Y || D.isFreeTrial)
          if ("pro" === e || "prolite" === e || "promax" === e) o = (0, eu.AC)(e, el.Qc)
          else if (eA && !D.isFreeTrial) {
            let e
            ;(B[57] !== eP ? ((e = (0, eu.Iu)(eP)), (B[57] = eP), (B[58] = e)) : (e = B[58]), (o = e))
          } else if (ev)
            o = (0, eu.w3)({ planType: e, proliteEnabled: eM, isFreeTrial: D.isFreeTrial, icons: el.VU, trialIcons: z })
          else if (D.isFreeTrial && "chatgptplusplan" === eB) {
            let e
            ;(B[59] !== q || B[60] !== z
              ? ((e = (0, eu.mA)(z, { includeReminder: q })), (B[59] = q), (B[60] = z), (B[61] = e))
              : (e = B[61]),
              (o = e))
          } else if (D.isFreeTrial && "chatgptteamplan" === eB) {
            let e
            ;(B[62] !== q || B[63] !== z
              ? ((e = (0, eu.uj)(z, { includeReminder: q })), (B[62] = q), (B[63] = z), (B[64] = e))
              : (e = B[64]),
              (o = e))
          } else if ("chatgptgoplan" === eB) {
            let e
            ;(B[65] !== eP ? ((e = (0, eu.DR)(eP)), (B[65] = eP), (B[66] = e)) : (e = B[66]), (o = e))
          } else if ("chatgptteamplan" === eB || "chatgptbusiness_usage_based" === eB) {
            let e
            ;(B[67] !== eP || B[68] !== eA
              ? ((e = eA ? (0, eu.Iu)(eP) : (0, eu.hM)(eP)), (B[67] = eP), (B[68] = eA), (B[69] = e))
              : (e = B[69]),
              (o = e))
          } else {
            let e
            ;(B[70] !== eP ? ((e = (0, eu.LE)(eP)), (B[70] = eP), (B[71] = e)) : (e = B[71]), (o = e))
          }
        else o = Y
        ;((B[24] = Y),
          (B[25] = eP),
          (B[26] = q),
          (B[27] = eH),
          (B[28] = eV),
          (B[29] = ey?.CancelIcon),
          (B[30] = ey?.WorkIcon),
          (B[31] = eB),
          (B[32] = eA),
          (B[33] = eM),
          (B[34] = eG),
          (B[35] = D),
          (B[36] = z),
          (B[37] = ev),
          (B[38] = o),
          (B[39] = l),
          (B[40] = d))
      } else ((o = B[38]), (l = B[39]), (d = B[40]))
      let eO = null == Y && !eG && ev && !d
      if (
        B[72] !== Y ||
        B[73] !== en ||
        B[74] !== eN ||
        B[75] !== eh ||
        B[76] !== eO ||
        B[77] !== U ||
        B[78] !== o ||
        B[79] !== l ||
        B[80] !== eP ||
        B[81] !== eH ||
        B[82] !== ew ||
        B[83] !== d ||
        B[84] !== eV ||
        B[85] !== ek ||
        B[86] !== eA ||
        B[87] !== Z.promo_credit_grant ||
        B[88] !== eU ||
        B[89] !== ej ||
        B[90] !== e_
      ) {
        let e =
            eN && null == Y
              ? eN.map(em)
              : o?.map((e) =>
                  (0, n.jsx)(
                    es.PX,
                    {
                      surface: "checkout",
                      compact: eO,
                      icon: (0, n.jsx)(es.m2, { icon: e.icon, surface: "checkout", compact: eO, dark: ew }),
                      label: (0, n.jsx)(s.A, { ...e.label, values: e.values }),
                    },
                    e.label.id,
                  ),
                ),
          t = ek ?? eP.SparkleIcon
        h = ed
        let a = Z.promo_credit_grant ?? null
        ;(B[106] !== a
          ? ((m = (0, n.jsx)(N, { className: "mb-5", promoCreditGrant: a })), (B[106] = a), (B[107] = m))
          : (m = B[107]),
          B[108] !== eP || B[109] !== eV
            ? ((p = eV ? { icon: (0, n.jsx)(eP.SparkleIcon, { "aria-hidden": !0 }) } : void 0),
              (B[108] = eP),
              (B[109] = eV),
              (B[110] = p))
            : (p = B[110]),
          B[111] !== t || B[112] !== eU
            ? ((f = eU
                ? (0, n.jsxs)("div", {
                    className:
                      "text-caption-emphasized bg-token-theme-blue-background text-token-theme-blue-default dark:text-token-theme-blue-text-on-background flex items-center gap-3 rounded-xl p-3",
                    role: "status",
                    children: [
                      (0, n.jsx)(t, { "aria-hidden": "true", className: "size-[18px] shrink-0" }),
                      (0, n.jsx)(s.A, { ...x.UN.applied }),
                    ],
                  })
                : void 0),
              (B[111] = t),
              (B[112] = eU),
              (B[113] = f))
            : (f = B[113]),
          (g = d),
          (C = e_ || eU),
          (y = eA),
          (v = U),
          B[114] !== eN || B[115] !== l || B[116] !== eH
            ? ((P = eN
                ? (0, n.jsx)(s.A, { ...eu.aR.heading })
                : eH
                  ? (0, n.jsx)(s.A, {
                      id: "checkout.summary",
                      defaultMessage: "Order summary",
                      description: "Heading above the server-calculated checkout prices",
                    })
                  : (0, n.jsx)(s.A, { ...l })),
              (B[114] = eN),
              (B[115] = l),
              (B[116] = eH),
              (B[117] = P))
            : (P = B[117]),
          (M = eO),
          (_ = null == Y ? eh : void 0),
          (A = eN ? "business" : void 0),
          (j = !eN),
          B[118] !== eN || B[119] !== ej
            ? ((L = eN && !ej ? (0, n.jsx)(s.A, { ...eu.aR.allSeatTypes }) : void 0),
              (B[118] = eN),
              (B[119] = ej),
              (B[120] = L))
            : (L = B[120]),
          (T = null == en ? e : [en, ...(e ?? [])]),
          (B[72] = Y),
          (B[73] = en),
          (B[74] = eN),
          (B[75] = eh),
          (B[76] = eO),
          (B[77] = U),
          (B[78] = o),
          (B[79] = l),
          (B[80] = eP),
          (B[81] = eH),
          (B[82] = ew),
          (B[83] = d),
          (B[84] = eV),
          (B[85] = ek),
          (B[86] = eA),
          (B[87] = Z.promo_credit_grant),
          (B[88] = eU),
          (B[89] = ej),
          (B[90] = e_),
          (B[91] = h),
          (B[92] = m),
          (B[93] = p),
          (B[94] = f),
          (B[95] = g),
          (B[96] = C),
          (B[97] = y),
          (B[98] = v),
          (B[99] = P),
          (B[100] = M),
          (B[101] = _),
          (B[102] = A),
          (B[103] = j),
          (B[104] = L),
          (B[105] = T))
      } else
        ((h = B[91]),
          (m = B[92]),
          (p = B[93]),
          (f = B[94]),
          (g = B[95]),
          (C = B[96]),
          (y = B[97]),
          (v = B[98]),
          (P = B[99]),
          (M = B[100]),
          (_ = B[101]),
          (A = B[102]),
          (j = B[103]),
          (L = B[104]),
          (T = B[105]))
      return (
        B[121] !== G ||
        B[122] !== R ||
        B[123] !== F ||
        B[124] !== et ||
        B[125] !== H ||
        B[126] !== eA ||
        B[127] !== O ||
        B[128] !== eS ||
        B[129] !== Z ||
        B[130] !== eL ||
        B[131] !== eU ||
        B[132] !== eT ||
        B[133] !== e_
          ? ((S =
              H ??
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(k.O5, {
                    promoCodeRow: O,
                    hideRedundantSeatSubtotal: et,
                    businessSeatUpdatePending: R,
                    isPlanSelectionPending: R,
                    localizeKoreanTaxLabels:
                      "open_ai" === Z.checkout_provider &&
                      Z.experiments?.localize_kr_checkout_tax_labels === "treatment",
                    checkout: F,
                    immediateDiscountSettings: Z.immediate_discount_settings ?? null,
                    businessSeatLineItems: (0, er.c8)(Z),
                    businessDiscountTargetSeatTypes: Z.business_discount_target_seat_types,
                    showPremiumSeats: eA,
                    isRunningServerUpdate: eS,
                    showBalanceAdjustment: eL,
                    walletBalanceAllowed: eT,
                    useCompactSpacing: !1,
                    spacingVariant: e_ ? "wallet" : "default",
                    showFirstMonthFreeSummaryLayout: eU,
                    afterTotalCallout: eU ? (0, n.jsx)(w, { checkout: F }) : void 0,
                  }),
                  G,
                ],
              })),
            (B[121] = G),
            (B[122] = R),
            (B[123] = F),
            (B[124] = et),
            (B[125] = H),
            (B[126] = eA),
            (B[127] = O),
            (B[128] = eS),
            (B[129] = Z),
            (B[130] = eL),
            (B[131] = eU),
            (B[132] = eT),
            (B[133] = e_),
            (B[134] = S))
          : (S = B[134]),
        B[135] !== h ||
        B[136] !== V ||
        B[137] !== m ||
        B[138] !== p ||
        B[139] !== f ||
        B[140] !== g ||
        B[141] !== C ||
        B[142] !== y ||
        B[143] !== v ||
        B[144] !== P ||
        B[145] !== M ||
        B[146] !== _ ||
        B[147] !== A ||
        B[148] !== j ||
        B[149] !== L ||
        B[150] !== T ||
        B[151] !== S
          ? ((I = (0, n.jsx)(h, {
              promoBanner: m,
              studentOffer: p,
              offerStatus: f,
              proUsageTiers: g,
              wallet: C,
              premiumBusiness: y,
              businessPremiumDisclaimer: v,
              heading: P,
              compactFeatures: M,
              collapsibleFeatureCount: _,
              featuresVariant: A,
              showTopFeatures: j,
              featureListLabel: L,
              features: T,
              invoice: S,
              children: V,
            })),
            (B[135] = h),
            (B[136] = V),
            (B[137] = m),
            (B[138] = p),
            (B[139] = f),
            (B[140] = g),
            (B[141] = C),
            (B[142] = y),
            (B[143] = v),
            (B[144] = P),
            (B[145] = M),
            (B[146] = _),
            (B[147] = A),
            (B[148] = j),
            (B[149] = L),
            (B[150] = T),
            (B[151] = S),
            (B[152] = I))
          : (I = B[152]),
        I
      )
    }
    function em(e) {
      return (0, n.jsx)(
        es.PX,
        { surface: "checkout", icon: e.icon, label: (0, n.jsx)(s.A, { ...e.label }) },
        e.label.id,
      )
    }
    function ep(e) {
      let { label: t } = e
      return t.id !== eu.aR.seats.id
    }
    var ef = a("BOFv")
    let eg = (0, o.createContext)(null)
    function eC(e) {
      let t,
        a,
        l,
        c,
        u,
        d,
        h,
        m,
        p = (0, i.c)(53),
        {
          children: f,
          busy: g,
          onBack: C,
          backIcon: b,
          onClose: x,
          closeIcon: y,
          banner: k,
          campaignBanner: v,
          companyPaidBanner: w,
          title: M,
          homeLink: _,
          isDarkMode: A,
          standaloneCredit: j,
          embedded: L,
          proUsageTiers: T,
          businessRefresh: S,
          memberReview: I,
          smoothScroll: N,
        } = e,
        B = void 0 !== g && g,
        V = void 0 !== A && A,
        U = void 0 !== T && T,
        G = void 0 !== S && S,
        O = void 0 !== I && I,
        R = null != v || null != w || null != k,
        F = (0, o.useContext)(eg)
      if (void 0 !== L && L) {
        let e,
          t = V ? "dark" : "light"
        return (
          p[0] !== f || p[1] !== t
            ? ((e = (0, n.jsx)("div", { className: H.A.root, "data-checkout-theme": t, children: f })),
              (p[0] = f),
              (p[1] = t),
              (p[2] = e))
            : (e = p[2]),
          e
        )
      }
      if (void 0 !== j && j) {
        let e,
          t,
          a = V ? "dark" : "light",
          i = x ?? C
        return (
          p[3] !== B || p[4] !== f || p[5] !== _ || p[6] !== i
            ? ((e = (0, n.jsx)(P.fJ, { homeLink: _, onClose: i, busy: B, children: f })),
              (p[3] = B),
              (p[4] = f),
              (p[5] = _),
              (p[6] = i),
              (p[7] = e))
            : (e = p[7]),
          p[8] !== e || p[9] !== a
            ? ((t = (0, n.jsx)("div", {
                className: `${H.A.root} h-full overflow-y-auto`,
                "data-checkout-theme": a,
                children: e,
              })),
              (p[8] = e),
              (p[9] = a),
              (p[10] = t))
            : (t = p[10]),
          t
        )
      }
      let Z = void 0 !== N && N && "scroll-smooth motion-reduce:scroll-auto",
        D = O && "max-sm:bg-[var(--checkout-bg-primary)]"
      p[11] !== D || p[12] !== Z
        ? ((t = (0, r.A)(
            H.A.root,
            "h-full overflow-y-auto bg-[var(--checkout-page-background)] text-[var(--checkout-text-primary)]",
            Z,
            D,
          )),
          (p[11] = D),
          (p[12] = Z),
          (p[13] = t))
        : (t = p[13])
      let E = V ? "dark" : "light",
        W = void 0 === x || O ? void 0 : "min-h-14 md:min-h-0",
        z = null != v ? "mt-6" : void 0
      return (
        p[14] !== v
          ? ((a =
              null != v &&
              (0, n.jsx)("div", {
                className:
                  "flex items-center justify-center gap-3.5 bg-blue-400 px-4 py-4 text-center text-sm leading-5 font-semibold tracking-[-0.15px] text-white",
                children: v,
              })),
            (p[14] = v),
            (p[15] = a))
          : (a = p[15]),
        p[16] !== k ||
        p[17] !== B ||
        p[18] !== y ||
        p[19] !== w ||
        p[20] !== R ||
        p[21] !== _ ||
        p[22] !== O ||
        p[23] !== x ||
        p[24] !== W ||
        p[25] !== z ||
        p[26] !== a
          ? ((l = (0, n.jsxs)(P.Lw, {
              memberReview: O,
              className: W,
              homeLink: _,
              onClose: x,
              closeIcon: y,
              disabled: B,
              hasTopBanner: R,
              homeLinkMargin: z,
              children: [a, w, k],
            })),
            (p[16] = k),
            (p[17] = B),
            (p[18] = y),
            (p[19] = w),
            (p[20] = R),
            (p[21] = _),
            (p[22] = O),
            (p[23] = x),
            (p[24] = W),
            (p[25] = z),
            (p[26] = a),
            (p[27] = l))
          : (l = p[27]),
        p[28] !== F || p[29] !== O || p[30] !== M
          ? ((c = null == M && null != F ? (e) => F.onHeadingMount(e, !O) : void 0),
            (p[28] = F),
            (p[29] = O),
            (p[30] = M),
            (p[31] = c))
          : (c = p[31]),
        p[32] !== F || p[33] !== M
          ? ((u =
              M ??
              (F?.name
                ? (0, n.jsx)(s.A, {
                    id: "CheckoutRedesignPage.headingWithName",
                    defaultMessage: "Configure your plan, {name}",
                    description: "Checkout heading addressing the customer by their first name or full account name",
                    values: { name: F.name },
                  })
                : (0, n.jsx)(s.A, {
                    id: "CheckoutRedesignPage.heading",
                    defaultMessage: "Configure your plan",
                    description: "Heading for the checkout page",
                  }))),
            (p[32] = F),
            (p[33] = M),
            (p[34] = u))
          : (u = p[34]),
        p[35] !== b || p[36] !== B || p[37] !== C
          ? ((d = void 0 !== C ? (0, n.jsx)(P.r5, { disabled: B, onClick: C, children: b }) : null),
            (p[35] = b),
            (p[36] = B),
            (p[37] = C),
            (p[38] = d))
          : (d = p[38]),
        p[39] !== G ||
        p[40] !== f ||
        p[41] !== R ||
        p[42] !== O ||
        p[43] !== U ||
        p[44] !== c ||
        p[45] !== u ||
        p[46] !== d
          ? ((h = (0, n.jsx)(P.rS, {
              hideHeading: O,
              businessRefresh: G,
              proUsageTiers: U,
              hasTopBanner: R,
              headingRef: c,
              title: u,
              backButton: d,
              children: f,
            })),
            (p[39] = G),
            (p[40] = f),
            (p[41] = R),
            (p[42] = O),
            (p[43] = U),
            (p[44] = c),
            (p[45] = u),
            (p[46] = d),
            (p[47] = h))
          : (h = p[47]),
        p[48] !== t || p[49] !== E || p[50] !== l || p[51] !== h
          ? ((m = (0, n.jsxs)("main", { className: t, "data-checkout-theme": E, children: [l, h] })),
            (p[48] = t),
            (p[49] = E),
            (p[50] = l),
            (p[51] = h),
            (p[52] = m))
          : (m = p[52]),
        m
      )
    }
    function eb(e) {
      let t,
        a,
        r,
        y,
        k,
        w,
        M,
        _,
        A,
        L,
        T,
        S,
        I,
        N,
        B,
        V,
        U,
        G,
        H,
        z,
        q,
        Q,
        Y,
        K,
        $,
        J,
        ee,
        et,
        ea,
        en,
        ei,
        er,
        eo,
        es,
        el,
        ec,
        eu,
        ed,
        em,
        ep = (0, i.c)(262),
        {
          businessTrialMessages: ef,
          campaignBanner: eg,
          companyPaidBanner: eb,
          children: ey,
          creditPriceReview: ek,
          beforeRenewal: ev,
          paypalPromoGlowImages: ew,
          paypalPromoOfferName: eP,
          paypalPromoPricing: eM,
          postTrialAmountMinorUnits: e_,
          paypalPromoPublicEnabled: eA,
          sharedUsageLimitEnabled: ej,
          afterInvoice: eL,
          invoiceOverride: eT,
          businessSeatUpdatePending: eS,
          keepSubmitLabelDuringQuoteUpdate: eI,
          hideBusinessSeatChargeAmount: eN,
          checkout: eB,
          session: eV,
          trialDetails: eU,
          trialIcons: eG,
          offerIcons: eH,
          includeTrialReminder: eO,
          usePricingModalValueProps: eR,
          advertisedFeatures: eF,
          quotePending: eZ,
          pending: eD,
          disabled: eE,
          showSubmit: eW,
          error: ez,
          summaryError: eq,
          formErrors: eQ,
          promoCodeRow: eY,
          onSubmit: eK,
          onBack: e$,
          backIcon: eJ,
          onClose: eX,
          closeIcon: e1,
          homeLink: e3,
          icons: e0,
          Link: e2,
          walletPaymentOptional: e5,
          proliteEnabled: e6,
          showBalanceAdjustment: e4,
          walletBalanceAllowed: e7,
          isDarkMode: e9,
          premiumBusiness: e8,
          businessRefresh: te,
          memberReview: tt,
          businessFeatures: ta,
          businessApiCreditFeature: tn,
          standardSeatsOnly: ti,
          collapsibleFeatureCount: tr,
          premiumBusinessScreenSize: to,
          embedded: ts,
          stickySummary: tl,
          savedPaymentConsentMode: tc,
          autoReloadEnabled: tu,
          subscribeLabel: td,
          renderSubmitButton: th,
          continueToPayPal: tm,
          isNoPaymentTrialOffer: tp,
          isNoPaymentTrialCheckout: tf,
          noPaymentTrialIcons: tg,
          smoothScroll: tC,
        } = e,
        tb = void 0 !== eA && eA,
        tx = void 0 !== ej && ej,
        ty = void 0 !== eI && eI,
        tk = void 0 !== eN && eN,
        tv = void 0 !== eR && eR,
        tw = void 0 !== eZ && eZ,
        tP = void 0 !== eE && eE,
        tM = void 0 === eW || eW,
        t_ = void 0 === e0 ? b.z : e0,
        tA = void 0 !== e5 && e5,
        tj = void 0 !== e6 && e6,
        tL = void 0 !== e4 && e4,
        tT = void 0 === e7 || e7,
        tS = void 0 !== e9 && e9,
        tI = void 0 !== e8 && e8,
        tN = void 0 !== te && te,
        tB = void 0 !== tt && tt,
        tV = void 0 !== ts && ts,
        tU = void 0 !== tl && tl,
        tG = void 0 !== tm && tm,
        tH = void 0 !== tp && tp,
        tO = void 0 !== tf && tf,
        tR = void 0 !== tC && tC,
        tF = (0, l.A)(),
        tZ = (0, o.useId)()
      if (
        ep[0] !== e2 ||
        ep[1] !== tu ||
        ep[2] !== eJ ||
        ep[3] !== tN ||
        ep[4] !== ef ||
        ep[5] !== eg ||
        ep[6] !== eB ||
        ep[7] !== ey ||
        ep[8] !== e1 ||
        ep[9] !== eb ||
        ep[10] !== tG ||
        ep[11] !== ek ||
        ep[12] !== tP ||
        ep[13] !== tV ||
        ep[14] !== ez ||
        ep[15] !== eQ ||
        ep[16] !== tZ ||
        ep[17] !== tk ||
        ep[18] !== e3 ||
        ep[19] !== tF ||
        ep[20] !== tS ||
        ep[21] !== tO ||
        ep[22] !== tH ||
        ep[23] !== ty ||
        ep[24] !== tB ||
        ep[25] !== eH ||
        ep[26] !== e$ ||
        ep[27] !== eX ||
        ep[28] !== eK ||
        ep[29] !== ew ||
        ep[30] !== eP ||
        ep[31] !== eM ||
        ep[32] !== tb ||
        ep[33] !== eD ||
        ep[34] !== e_ ||
        ep[35] !== tI ||
        ep[36] !== eY ||
        ep[37] !== tw ||
        ep[38] !== tc ||
        ep[39] !== eV ||
        ep[40] !== tx ||
        ep[41] !== tR ||
        ep[42] !== td ||
        ep[43] !== eq ||
        ep[44] !== eU ||
        ep[45] !== eG ||
        ep[46] !== tA
      ) {
        $ = Symbol.for("react.early_return_sentinel")
        e: {
          let e, i, o, l, m, b, v
          ;((r = (0, u.K8)(eV.checkout_kind)),
            ep[73] !== eB || ep[74] !== eV
              ? ((e = W(eV, eB)), (ep[73] = eB), (ep[74] = eV), (ep[75] = e))
              : (e = ep[75]))
          let P = e
          ;((k = tH && !tw), (J = tA || k))
          let ee = tO && !(tH && tw),
            et = (0, u.qI)(eV.plan_name)
          y = !r && ("pro" === et || "prolite" === et || "promax" === et)
          let ea = P
            ? E.studentClaimFreeOffer
            : r || eV.checkout_kind === u.td.CodexTeam
              ? C.J.buttonPurchase
              : y
                ? c.wA.upgradeToPro
                : C.J.buttonSubscribe
          t: {
            if (!ee) {
              i = null
              break t
            }
            let e =
              eB.billingAddress?.address.country ??
              eV.billing_details?.country ??
              new Intl.Locale(tF.locale).maximize().region ??
              "US"
            if ((0, h.IC)(e) || "GB" === e) {
              i = x.UN.subscribeAndPay
              break t
            }
            i = k ? x.UN.claim : x.UN.upgrade
          }
          let en = i,
            ei = tG
              ? tF.formatMessage(C.J.continueToPayPal)
              : ek
                ? (0, p.ol)(tF, (0, u.Qk)(eB))
                : null != en
                  ? tF.formatMessage(en)
                  : r || eV.checkout_kind === u.td.CodexTeam || null == td
                    ? tF.formatMessage(ea)
                    : td,
            er =
              (0, g.IW)(eV.promo_campaign?.promo_campaign_id) ||
              eV.promo_campaign?.promo_campaign_id === "team-1-month-free"
                ? eV.promo_campaign?.promo_campaign_id
                : void 0,
            eo = eB.discountAmounts?.[0]?.displayName,
            es = (eB.discountAmounts?.length ?? 0) > 0
          ep[76] !== ef || ep[77] !== tF || ep[78] !== er || ep[79] !== eo || ep[80] !== es
            ? ((o = (0, F.O_)({
                businessTrialMessages: ef,
                campaignId: er,
                discountName: eo,
                intl: tF,
                localizeCampaign: !1,
                hasDiscount: es,
              })),
              (ep[76] = ef),
              (ep[77] = tF),
              (ep[78] = er),
              (ep[79] = eo),
              (ep[80] = es),
              (ep[81] = o))
            : (o = ep[81])
          let el = o,
            ec =
              "open_ai" === eV.checkout_provider &&
              (null == eV.checkout_kind || eV.checkout_kind === u.td.Standard) &&
              eV.entry_point !== R.Pr &&
              !eV.disable_saved_payment_methods &&
              (0, u.k_)(eV.experiments?.saved_payment_link_arm)
          ;({ subscriptionSaveChoiceDisclosure: M } = (function ({
            hasOpenAIControlledSaveChoice: e,
            isStandaloneCredit: t,
            submitButtonDisclaimer: a,
            checkoutSessionId: i,
            consentMode: r,
            isAutoReloadSavingRequired: o,
          }) {
            return {
              disclaimerWithSaveChoice:
                e && t && null != a
                  ? (0, n.jsx)(Z.Provider, { value: { checkoutId: i, mode: r, autoReloadEnabled: o }, children: a })
                  : a,
              subscriptionSaveChoiceDisclosure:
                ("new_card_saved" !== r && "new_card_unsaved" !== r) || t
                  ? null
                  : (0, n.jsx)("div", {
                      className: "text-token-text-secondary text-xs leading-5",
                      "aria-live": "polite",
                      children:
                        "new_card_saved" === r
                          ? (0, n.jsx)(s.A, {
                              id: "chatgpt.checkout.saved_payment.reuse.subscription_disclaimer.checked_with_settings",
                              defaultMessage:
                                "This card will be available for future purchases. Subscription renewals may still charge it. You can add, edit, or delete payment methods in Settings.",
                              description:
                                "Temporary placeholder consent text directly below the Subscribe button on subscription checkout when the OpenAI save-card checkbox is checked. Saving enables future purchase redisplay; subscription renewal is separate. This multi-sentence footer also tells customers they can add, edit, or delete payment methods in the app Settings. Replace with approved localized checked-state legal language before launch.",
                            })
                          : (0, n.jsx)(s.A, {
                              id: "chatgpt.checkout.saved_payment.reuse.subscription_disclaimer.unchecked",
                              defaultMessage:
                                "This card won't be saved for future purchases. Subscription renewals may still charge it.",
                              description:
                                "Temporary placeholder consent text directly below the Subscribe button on subscription checkout when the OpenAI save-card checkbox is unchecked. Opting out disables future purchase redisplay without blocking subscription renewal. Replace with approved localized unchecked-state legal language before launch.",
                            }),
                    }),
            }
          })({
            hasOpenAIControlledSaveChoice: ec,
            isStandaloneCredit: r,
            submitButtonDisclaimer: null,
            checkoutSessionId: eV.checkout_session_id,
            consentMode: ec ? (tc ?? "none") : "none",
            isAutoReloadSavingRequired: !1,
          }))
          let eu = ec ? void 0 : tc,
            ed = r || tI || tA
          if (
            (ep[82] !== e2 ||
            ep[83] !== tu ||
            ep[84] !== eB ||
            ep[85] !== tk ||
            ep[86] !== eM ||
            ep[87] !== tb ||
            ep[88] !== e_ ||
            ep[89] !== tI ||
            ep[90] !== eV ||
            ep[91] !== tx ||
            ep[92] !== eu ||
            ep[93] !== ed ||
            ep[94] !== eU ||
            ep[95] !== tA
              ? ((l = (0, n.jsx)(X, {
                  checkout: eB,
                  session: eV,
                  trialDetails: eU,
                  paypalPromoPricing: eM,
                  postTrialAmountMinorUnits: e_,
                  paypalPromoPublicEnabled: tb,
                  sharedUsageLimitEnabled: tx,
                  savedPaymentConsentMode: eu,
                  autoReloadEnabled: tu,
                  showPremiumSeats: tI,
                  hideBusinessSeatChargeAmount: tk,
                  Link: e2,
                  walletPaymentOptional: tA,
                  disableHorizontalPadding: ed,
                })),
                (ep[82] = e2),
                (ep[83] = tu),
                (ep[84] = eB),
                (ep[85] = tk),
                (ep[86] = eM),
                (ep[87] = tb),
                (ep[88] = e_),
                (ep[89] = tI),
                (ep[90] = eV),
                (ep[91] = tx),
                (ep[92] = eu),
                (ep[93] = ed),
                (ep[94] = eU),
                (ep[95] = tA),
                (ep[96] = l))
              : (l = ep[96]),
            (a = l),
            eV.entry_point === R.Pr && (null == eV.checkout_kind || eV.checkout_kind === u.td.Standard))
          ) {
            let e,
              t,
              i = eM?.taxPercent
            ;(ep[97] !== eB || ep[98] !== eU.isFirstMonthFreeTrial
              ? ((e = (0, R.DW)(eB, eU.isFirstMonthFreeTrial)),
                (ep[97] = eB),
                (ep[98] = eU.isFirstMonthFreeTrial),
                (ep[99] = e))
              : (e = ep[99]),
              ep[100] !== e2 ||
              ep[101] !== eB ||
              ep[102] !== ey ||
              ep[103] !== eb ||
              ep[104] !== tP ||
              ep[105] !== a ||
              ep[106] !== ez ||
              ep[107] !== eQ ||
              ep[108] !== tS ||
              ep[109] !== eH ||
              ep[110] !== e$ ||
              ep[111] !== eK ||
              ep[112] !== ew ||
              ep[113] !== eP ||
              ep[114] !== tb ||
              ep[115] !== eD ||
              ep[116] !== eY ||
              ep[117] !== tw ||
              ep[118] !== eV ||
              ep[119] !== eq ||
              ep[120] !== i ||
              ep[121] !== e
                ? ((t = (0, n.jsx)(O, {
                    companyPaidBanner: eb,
                    paypalPromoPublicEnabled: tb,
                    glowImages: ew,
                    taxPercent: i,
                    offerName: eP,
                    checkout: eB,
                    session: eV,
                    introOffer: e,
                    disclosure: a,
                    error: ez,
                    formErrors: eQ,
                    summaryError: eq,
                    promoCodeRow: eY,
                    pending: eD,
                    quotePending: tw,
                    disabled: tP,
                    onSubmit: eK,
                    onBack: e$,
                    isDarkMode: tS,
                    Link: e2,
                    offerIcons: eH,
                    children: ey,
                  })),
                  (ep[100] = e2),
                  (ep[101] = eB),
                  (ep[102] = ey),
                  (ep[103] = eb),
                  (ep[104] = tP),
                  (ep[105] = a),
                  (ep[106] = ez),
                  (ep[107] = eQ),
                  (ep[108] = tS),
                  (ep[109] = eH),
                  (ep[110] = e$),
                  (ep[111] = eK),
                  (ep[112] = ew),
                  (ep[113] = eP),
                  (ep[114] = tb),
                  (ep[115] = eD),
                  (ep[116] = eY),
                  (ep[117] = tw),
                  (ep[118] = eV),
                  (ep[119] = eq),
                  (ep[120] = i),
                  (ep[121] = e),
                  (ep[122] = t))
                : (t = ep[122]),
              ($ = t))
            break e
          }
          ep[123] !== r || ep[124] !== y || ep[125] !== tI || ep[126] !== tA
            ? ((m = (0, j.gg)({
                modalCredit: !1,
                standaloneCredit: r,
                walletOptional: tA,
                proUsageTiers: y,
                payPalPromo: !1,
                premiumBusiness: tI,
              })),
              (ep[123] = r),
              (ep[124] = y),
              (ep[125] = tI),
              (ep[126] = tA),
              (ep[127] = m))
            : (m = ep[127])
          let eh = eD || tP,
            em = eD || (tw && !ty)
          ;(ep[128] !== r || ep[129] !== ty || ep[130] !== eD || ep[131] !== tw || ep[132] !== ei || ep[133] !== eG
            ? ((b =
                eD || (tw && !ty)
                  ? (0, n.jsx)(D.S, {})
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        r ? (0, n.jsx)(eG.LockKeyHoleIcon, { "aria-hidden": !0 }) : null,
                        (0, n.jsx)("span", { children: ei }),
                      ],
                    })),
              (ep[128] = r),
              (ep[129] = ty),
              (ep[130] = eD),
              (ep[131] = tw),
              (ep[132] = ei),
              (ep[133] = eG),
              (ep[134] = b))
            : (b = ep[134]),
            ep[135] !== tZ || ep[136] !== ei || ep[137] !== m || ep[138] !== eh || ep[139] !== em || ep[140] !== b
              ? ((v = (0, n.jsx)(j.Hp, {
                  className: m,
                  type: "submit",
                  form: tZ,
                  disabled: eh,
                  "aria-busy": em,
                  "aria-label": ei,
                  children: b,
                })),
                (ep[135] = tZ),
                (ep[136] = ei),
                (ep[137] = m),
                (ep[138] = eh),
                (ep[139] = em),
                (ep[140] = b),
                (ep[141] = v))
              : (v = ep[141]),
            (w = v),
            (t = eC),
            (_ = eg),
            (A = tR),
            (L = tB),
            (T = eb),
            (S = tN),
            (I = y),
            (N = r),
            (B = tV),
            (V = eD),
            ep[142] !== ef?.checkoutTitle ||
            ep[143] !== eB.discountAmounts ||
            ep[144] !== P ||
            ep[145] !== eV.plan_name ||
            ep[146] !== eV.promo_campaign?.promo_campaign_id ||
            ep[147] !== k ||
            ep[148] !== ee ||
            ep[149] !== eU
              ? ((U = k
                  ? (0, n.jsx)(s.A, { ...x.UN.heading })
                  : ee
                    ? (0, n.jsx)(s.A, { ...x.UN.keepHeading })
                    : P
                      ? (0, n.jsx)(s.A, { ...E.pageHeading })
                      : eV.promo_campaign?.promo_campaign_id === "team-1-month-free" && eB.discountAmounts?.some(ex)
                        ? (0, n.jsx)(s.A, { ...(ef?.checkoutTitle ?? f.W.businessIntroductoryCheckoutTitle) })
                        : eU.isFreeTrial && eV.promo_campaign?.promo_campaign_id !== "team-1-month-free"
                          ? (0, n.jsx)(s.A, { ...(0, c.IP)((0, u.qI)(eV.plan_name)) })
                          : void 0),
                (ep[142] = ef?.checkoutTitle),
                (ep[143] = eB.discountAmounts),
                (ep[144] = P),
                (ep[145] = eV.plan_name),
                (ep[146] = eV.promo_campaign?.promo_campaign_id),
                (ep[147] = k),
                (ep[148] = ee),
                (ep[149] = eU),
                (ep[150] = U))
              : (U = ep[150]),
            (G = tS),
            (H = e$),
            (z = eJ),
            (q = eX),
            (Q = e1),
            (Y = e3),
            (K =
              !el || k || (tH && tw)
                ? void 0
                : (0, n.jsx)(d.H, {
                    announce: !0,
                    Icon: eH.Sparkle,
                    TermsArrow: eH.ArrowRight,
                    Link: e2,
                    termsHref: (0, g.Xm)(et, eV.promo_campaign?.promo_campaign_id),
                    offer: (0, n.jsx)(s.A, { ...c.de.offerApplied, values: { offerName: el } }),
                  })))
        }
        ;((ep[0] = e2),
          (ep[1] = tu),
          (ep[2] = eJ),
          (ep[3] = tN),
          (ep[4] = ef),
          (ep[5] = eg),
          (ep[6] = eB),
          (ep[7] = ey),
          (ep[8] = e1),
          (ep[9] = eb),
          (ep[10] = tG),
          (ep[11] = ek),
          (ep[12] = tP),
          (ep[13] = tV),
          (ep[14] = ez),
          (ep[15] = eQ),
          (ep[16] = tZ),
          (ep[17] = tk),
          (ep[18] = e3),
          (ep[19] = tF),
          (ep[20] = tS),
          (ep[21] = tO),
          (ep[22] = tH),
          (ep[23] = ty),
          (ep[24] = tB),
          (ep[25] = eH),
          (ep[26] = e$),
          (ep[27] = eX),
          (ep[28] = eK),
          (ep[29] = ew),
          (ep[30] = eP),
          (ep[31] = eM),
          (ep[32] = tb),
          (ep[33] = eD),
          (ep[34] = e_),
          (ep[35] = tI),
          (ep[36] = eY),
          (ep[37] = tw),
          (ep[38] = tc),
          (ep[39] = eV),
          (ep[40] = tx),
          (ep[41] = tR),
          (ep[42] = td),
          (ep[43] = eq),
          (ep[44] = eU),
          (ep[45] = eG),
          (ep[46] = tA),
          (ep[47] = t),
          (ep[48] = a),
          (ep[49] = r),
          (ep[50] = y),
          (ep[51] = k),
          (ep[52] = w),
          (ep[53] = M),
          (ep[54] = _),
          (ep[55] = A),
          (ep[56] = L),
          (ep[57] = T),
          (ep[58] = S),
          (ep[59] = I),
          (ep[60] = N),
          (ep[61] = B),
          (ep[62] = V),
          (ep[63] = U),
          (ep[64] = G),
          (ep[65] = H),
          (ep[66] = z),
          (ep[67] = q),
          (ep[68] = Q),
          (ep[69] = Y),
          (ep[70] = K),
          (ep[71] = $),
          (ep[72] = J))
      } else
        ((t = ep[47]),
          (a = ep[48]),
          (r = ep[49]),
          (y = ep[50]),
          (k = ep[51]),
          (w = ep[52]),
          (M = ep[53]),
          (_ = ep[54]),
          (A = ep[55]),
          (L = ep[56]),
          (T = ep[57]),
          (S = ep[58]),
          (I = ep[59]),
          (N = ep[60]),
          (B = ep[61]),
          (V = ep[62]),
          (U = ep[63]),
          (G = ep[64]),
          (H = ep[65]),
          (z = ep[66]),
          (q = ep[67]),
          (Q = ep[68]),
          (Y = ep[69]),
          (K = ep[70]),
          ($ = ep[71]),
          (J = ep[72]))
      if ($ !== Symbol.for("react.early_return_sentinel")) return $
      ep[151] !== tB || ep[152] !== eV.checkout_kind
        ? ((ee = tB || (null != eV.checkout_kind && eV.checkout_kind !== u.td.Standard) ? void 0 : {}),
          (ep[151] = tB),
          (ep[152] = eV.checkout_kind),
          (ep[153] = ee))
        : (ee = ep[153])
      let tD = r ? void 0 : tN ? "business-refresh" : y ? "pro-usage" : J ? "wallet" : "standard",
        tE = r ? "credit" : "standard"
      ep[154] !== tP || ep[155] !== eK || ep[156] !== eD || ep[157] !== tM
        ? ((et = (e) => {
            ;(e.preventDefault(), !tM || eD || tP || eK())
          }),
          (ep[154] = tP),
          (ep[155] = eK),
          (ep[156] = eD),
          (ep[157] = tM),
          (ep[158] = et))
        : (et = ep[158])
      let tW = `flex min-w-0 flex-col ${r ? "gap-8" : "gap-6"}`
      ;(ep[159] !== eV.checkout_kind
        ? ((ea =
            eV.checkout_kind === u.td.RateLimitReset
              ? (0, n.jsx)("p", {
                  className: "text-sm text-token-text-secondary",
                  children: (0, n.jsx)(s.A, {
                    id: "chatgpt.codex.rate_limit_reset.checkout.product.description.next_weekly_reset",
                    defaultMessage:
                      "Your usage limits will reset immediately. Your next weekly reset will change to 7 days after your next Codex or ChatGPT Work message.",
                    description:
                      "Supporting text beneath Usage limit reset in checkout, shown before a customer buys a one-time reset. Reassures the customer that usage limits reset immediately and explains that their next weekly reset will occur seven days after their next message in Codex or ChatGPT Work. ChatGPT Work is a product name, not generic employment or the verb work.",
                  }),
                })
              : null),
          (ep[159] = eV.checkout_kind),
          (ep[160] = ea))
        : (ea = ep[160]),
        ep[161] !== eB || ep[162] !== ek
          ? ((en = ek ? (0, n.jsx)(m.t, { previousPrice: ek, currentCreditPrice: (0, u.Qk)(eB) }) : null),
            (ep[161] = eB),
            (ep[162] = ek),
            (ep[163] = en))
          : (en = ep[163]),
        ep[164] !== eB || ep[165] !== k
          ? ((ei = k ? (0, n.jsx)(v, { checkout: eB }) : null), (ep[164] = eB), (ep[165] = k), (ep[166] = ei))
          : (ei = ep[166]),
        ep[167] !== ey || ep[168] !== eD || ep[169] !== tW || ep[170] !== ea || ep[171] !== en || ep[172] !== ei
          ? ((er = (0, n.jsxs)("div", { className: tW, inert: eD, children: [ea, en, ei, ey] })),
            (ep[167] = ey),
            (ep[168] = eD),
            (ep[169] = tW),
            (ep[170] = ea),
            (ep[171] = en),
            (ep[172] = ei),
            (ep[173] = er))
          : (er = ep[173]),
        ep[174] !== ez ||
        ep[175] !== eQ ||
        ep[176] !== tZ ||
        ep[177] !== ee ||
        ep[178] !== tD ||
        ep[179] !== tE ||
        ep[180] !== et ||
        ep[181] !== er
          ? ((eo = (0, n.jsxs)(d.Nt, {
              id: tZ,
              errors: eQ,
              endAnchor: ee,
              pageVariant: tD,
              spacing: tE,
              onSubmit: et,
              children: [er, ez],
            })),
            (ep[174] = ez),
            (ep[175] = eQ),
            (ep[176] = tZ),
            (ep[177] = ee),
            (ep[178] = tD),
            (ep[179] = tE),
            (ep[180] = et),
            (ep[181] = er),
            (ep[182] = eo))
          : (eo = ep[182]))
      let tz = tI && !tB ? a : void 0
      ;(ep[183] !== eq
        ? ((es = null != eq ? (0, n.jsx)("div", { className: "mb-5", children: eq }) : null),
          (ep[183] = eq),
          (ep[184] = es))
        : (es = ep[184]),
        ep[185] !== tG ||
        ep[186] !== tP ||
        ep[187] !== eD ||
        ep[188] !== tw ||
        ep[189] !== th ||
        ep[190] !== tM ||
        ep[191] !== w ||
        ep[192] !== M ||
        ep[193] !== tA
          ? ((el = tM
              ? (0, n.jsxs)("div", {
                  className: "flex flex-col gap-3",
                  children: [th?.(w, !eD && !tP && !tw && !tG && !tA) ?? w, M],
                })
              : null),
            (ep[185] = tG),
            (ep[186] = tP),
            (ep[187] = eD),
            (ep[188] = tw),
            (ep[189] = th),
            (ep[190] = tM),
            (ep[191] = w),
            (ep[192] = M),
            (ep[193] = tA),
            (ep[194] = el))
          : (el = ep[194]),
        ep[195] !== eF ||
        ep[196] !== eL ||
        ep[197] !== tn ||
        ep[198] !== ta ||
        ep[199] !== eS ||
        ep[200] !== eB ||
        ep[201] !== tr ||
        ep[202] !== t_ ||
        ep[203] !== eO ||
        ep[204] !== eT ||
        ep[205] !== tS ||
        ep[206] !== tO ||
        ep[207] !== tH ||
        ep[208] !== tB ||
        ep[209] !== tg ||
        ep[210] !== eH.Sparkle ||
        ep[211] !== tI ||
        ep[212] !== tj ||
        ep[213] !== eY ||
        ep[214] !== tw ||
        ep[215] !== eV ||
        ep[216] !== tL ||
        ep[217] !== ti ||
        ep[218] !== tz ||
        ep[219] !== es ||
        ep[220] !== el ||
        ep[221] !== eU ||
        ep[222] !== eG ||
        ep[223] !== tv ||
        ep[224] !== tT ||
        ep[225] !== tA
          ? ((ec = (0, n.jsxs)(eh, {
              hideRedundantSeatSubtotal: tB,
              checkout: eB,
              afterInvoice: eL,
              invoiceOverride: eT,
              promoCodeRow: eY,
              businessSeatUpdatePending: eS,
              session: eV,
              trialDetails: eU,
              trialIcons: eG,
              includeTrialReminder: eO,
              usePricingModalValueProps: tv,
              advertisedFeatures: eF,
              isDarkMode: tS,
              icons: t_,
              proliteEnabled: tj,
              premiumBusiness: tI,
              standardSeatsOnly: ti,
              businessFeatures: ta,
              businessApiCreditFeature: tn,
              collapsibleFeatureCount: tr,
              showBalanceAdjustment: tL,
              walletBalanceAllowed: tT,
              quotePending: tw,
              walletPaymentOptional: tA,
              isNoPaymentTrialCheckout: tO,
              isNoPaymentTrialOffer: tH,
              noPaymentTrialIcons: tg,
              noPaymentTrialOfferIcon: eH.Sparkle,
              disclosure: tz,
              children: [es, el],
            })),
            (ep[195] = eF),
            (ep[196] = eL),
            (ep[197] = tn),
            (ep[198] = ta),
            (ep[199] = eS),
            (ep[200] = eB),
            (ep[201] = tr),
            (ep[202] = t_),
            (ep[203] = eO),
            (ep[204] = eT),
            (ep[205] = tS),
            (ep[206] = tO),
            (ep[207] = tH),
            (ep[208] = tB),
            (ep[209] = tg),
            (ep[210] = eH.Sparkle),
            (ep[211] = tI),
            (ep[212] = tj),
            (ep[213] = eY),
            (ep[214] = tw),
            (ep[215] = eV),
            (ep[216] = tL),
            (ep[217] = ti),
            (ep[218] = tz),
            (ep[219] = es),
            (ep[220] = el),
            (ep[221] = eU),
            (ep[222] = eG),
            (ep[223] = tv),
            (ep[224] = tT),
            (ep[225] = tA),
            (ep[226] = ec))
          : (ec = ep[226]))
      let tq = (!tI || tB) && a
      return (
        ep[227] !== ev || ep[228] !== ec || ep[229] !== tq
          ? ((eu = (0, n.jsxs)(n.Fragment, { children: [ec, ev, tq] })),
            (ep[227] = ev),
            (ep[228] = ec),
            (ep[229] = tq),
            (ep[230] = eu))
          : (eu = ep[230]),
        ep[231] !== tN ||
        ep[232] !== r ||
        ep[233] !== y ||
        ep[234] !== tB ||
        ep[235] !== tI ||
        ep[236] !== to ||
        ep[237] !== tU ||
        ep[238] !== eo ||
        ep[239] !== eu ||
        ep[240] !== J
          ? ((ed = (0, n.jsx)(P.kr, {
              memberReview: tB,
              businessRefresh: tN,
              proUsageTiers: y,
              standaloneCredit: r,
              wallet: J,
              premiumBusiness: tI,
              premiumBusinessScreenSize: to,
              stickySummary: tU,
              form: eo,
              summary: eu,
            })),
            (ep[231] = tN),
            (ep[232] = r),
            (ep[233] = y),
            (ep[234] = tB),
            (ep[235] = tI),
            (ep[236] = to),
            (ep[237] = tU),
            (ep[238] = eo),
            (ep[239] = eu),
            (ep[240] = J),
            (ep[241] = ed))
          : (ed = ep[241]),
        ep[242] !== t ||
        ep[243] !== _ ||
        ep[244] !== A ||
        ep[245] !== L ||
        ep[246] !== T ||
        ep[247] !== S ||
        ep[248] !== I ||
        ep[249] !== N ||
        ep[250] !== B ||
        ep[251] !== V ||
        ep[252] !== U ||
        ep[253] !== G ||
        ep[254] !== H ||
        ep[255] !== z ||
        ep[256] !== q ||
        ep[257] !== Q ||
        ep[258] !== Y ||
        ep[259] !== K ||
        ep[260] !== ed
          ? ((em = (0, n.jsx)(t, {
              campaignBanner: _,
              smoothScroll: A,
              memberReview: L,
              companyPaidBanner: T,
              businessRefresh: S,
              proUsageTiers: I,
              standaloneCredit: N,
              embedded: B,
              busy: V,
              title: U,
              isDarkMode: G,
              onBack: H,
              backIcon: z,
              onClose: q,
              closeIcon: Q,
              homeLink: Y,
              banner: K,
              children: ed,
            })),
            (ep[242] = t),
            (ep[243] = _),
            (ep[244] = A),
            (ep[245] = L),
            (ep[246] = T),
            (ep[247] = S),
            (ep[248] = I),
            (ep[249] = N),
            (ep[250] = B),
            (ep[251] = V),
            (ep[252] = U),
            (ep[253] = G),
            (ep[254] = H),
            (ep[255] = z),
            (ep[256] = q),
            (ep[257] = Q),
            (ep[258] = Y),
            (ep[259] = K),
            (ep[260] = ed),
            (ep[261] = em))
          : (em = ep[261]),
        em
      )
    }
    function ex(e) {
      return e.minorUnitsAmount > 0
    }
  },
  H8fM(e, t, a) {
    let n = new Set([
      "ad_id",
      "campaign_id",
      "channel_id",
      "click_id",
      "is_test_mode",
      "partner_id",
      "partner_user_id",
      "placement_id",
      "promo_campaign",
      "promoCode",
      "referral_ts",
      "trace_id",
      "ts",
      "uuid",
    ])
    function i(e) {
      return `oai/apps/paypalPromoCheckoutAttribution/${e}`
    }
    function r(e) {
      let t = "string" == typeof e ? new URLSearchParams(e) : e,
        a = new URLSearchParams()
      for (let [e, i] of t.entries()) (/^utm_/i.test(e) || n.has(e)) && a.append(e, i)
      return a
    }
    a.d(
      t,
      {},
      {
        G_: function (e, t) {
          if ("u" < typeof window) return
          let a = r(t)
          if (0 !== a.size)
            try {
              window.sessionStorage.setItem(i(e), a.toString())
            } catch {}
        },
        K3: r,
        fu: function (e, t) {
          if ("u" < typeof window) return t
          try {
            let a = window.sessionStorage.getItem(i(e))
            if (null == a) return t
            for (let [e, n] of r(a).entries()) t.append(e, n)
          } catch {}
          return t
        },
      },
    )
  },
  erHg(e, t, a) {
    var n = a("Qgfj")
    let i = (0, n.YK)({
        chatGptWordmark: {
          id: "chatgpt.checkout.paypal_promo.info.chatgpt_wordmark.accessible_label",
          defaultMessage: "ChatGPT",
          description:
            "Accessible label for the ChatGPT wordmark at the top of the PayPal Germany ChatGPT Plus cashback checkout. ChatGPT is the product name.",
        },
        paypalWordmark: {
          id: "chatgpt.checkout.paypal_promo.info.paypal_wordmark.accessible_label",
          defaultMessage: "PayPal",
          description:
            "Accessible label for the PayPal wordmark at the top of the PayPal Germany ChatGPT Plus cashback checkout. PayPal is the partner name.",
        },
        heading: {
          id: "chatgpt.checkout.paypal_promo.info.heading.v5",
          defaultMessage:
            "Limited-time offer: {discountPercent, number, percent} cash back on ChatGPT Plus for {paymentCount, number} months",
          description:
            "Main heading on the PayPal ChatGPT Plus offer checkout without an OpenAI introductory discount. Describes PayPal cash back paid separately from the subscription charge. Placeholder {discountPercent} is 0.5, formatted as a percentage; {paymentCount} is the six-month offer duration. Matches Figma node 1090:1193.",
        },
        firstMonthFreeHeading: {
          id: "chatgpt.checkout.paypal_promo.info.heading.first_month_free.v3",
          defaultMessage:
            "Get 1 month of Plus free, then {paymentCount, number} months with {discountPercent, number, percent} cash back",
          description:
            "Main heading on the PayPal ChatGPT Plus offer checkout when the provider confirms one free introductory month. The free month is an OpenAI discount; subsequent cash back is paid by PayPal. Placeholder {paymentCount} is the six-month cash back offer duration; {discountPercent} is 0.5, formatted as a percentage. Matches Figma node 1090:1535.",
        },
        firstMonthHalfPriceHeading: {
          id: "chatgpt.checkout.paypal_promo.info.heading.first_month_half_price.v2",
          defaultMessage:
            "Get 1 month of Plus {discountPercent, number, percent} off, then {paymentCount, number} months with {discountPercent, number, percent} cash back",
          description:
            "Main heading on the PayPal ChatGPT Plus offer checkout when the provider confirms an OpenAI half-price first month. The introductory discount is separate from PayPal cash back. Placeholder {discountPercent} is 0.5, formatted as a percentage in both places; {paymentCount} is the six-month cash back offer duration. Matches Figma node 1090:1805.",
        },
        howItWorks: {
          id: "chatgpt.checkout.paypal_promo.info.steps.heading",
          defaultMessage: "How this offer works",
          description:
            "Heading above the steps explaining how to qualify for the PayPal Germany ChatGPT Plus cashback offer. Figma German reference: So funktioniert das Angebot.",
        },
        activateTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.activate.title.v3",
          defaultMessage: "Save the offer in the PayPal app",
          description:
            "Title for the first step on the PayPal Germany ChatGPT Plus cashback checkout. Customers must find and save the ChatGPT offer in the PayPal app before subscribing.",
        },
        activateBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.activate.body.v2",
          defaultMessage: "Open the PayPal app, select Offers, and save the offer for ChatGPT.",
          description:
            "Body for the first step on the PayPal Germany ChatGPT Plus cashback checkout. It directs customers to open PayPal, select the Offers section, and save the ChatGPT offer before subscribing.",
        },
        defaultActivateBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.activate.body.default",
          defaultMessage: "Open the PayPal app, select Offers, and save the offer for ChatGPT Plus.",
          description:
            "Body for the first step on the PayPal ChatGPT Plus offer checkout without an OpenAI introductory discount. Directs the customer to save the ChatGPT Plus offer in the Offers section of the PayPal app before subscribing. Matches Figma node 1090:1228; introductory variants name ChatGPT instead of ChatGPT Plus.",
        },
        subscribeTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.subscribe.title.v3",
          defaultMessage: "Subscribe to ChatGPT Plus with PayPal",
          description:
            "Title for the second step on the PayPal Germany ChatGPT Plus cashback checkout. It tells customers to use their PayPal account when starting a new Plus subscription.",
        },
        subscribeBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.subscribe.body.v5",
          defaultMessage: "Start a new ChatGPT Plus subscription and check out with PayPal.",
          description:
            "Body for the subscription step on the PayPal ChatGPT Plus offer checkout with an OpenAI introductory discount. Directs the customer to start a new Plus subscription and pay with PayPal. Matches Figma nodes 1090:1576 and 1090:1846.",
        },
        sixMonthSubscribeBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.subscribe.body.v6",
          defaultMessage: "Start a new ChatGPT Plus subscription and check out with PayPal.",
          description:
            "Body for the subscription step on the PayPal ChatGPT Plus offer checkout without an OpenAI introductory discount. After saving the offer in the PayPal app, new subscribers must pay with PayPal. Matches Figma node 1090:1234.",
        },
        freeTrialTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.free_trial.title.v2",
          defaultMessage: "Enjoy 1 free month of ChatGPT Plus",
          description:
            "Title for the third step on the PayPal Germany ChatGPT Plus cashback checkout when an OpenAI first-month-free promotion is active. It explains that the first month of Plus has no charge.",
        },
        freeTrialBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.free_trial.body",
          defaultMessage: "You won't be charged for your first month.",
          description:
            "Body for the third step on the PayPal Germany ChatGPT Plus cashback checkout when an OpenAI first-month-free promotion is active. It reassures customers that no payment is due for their first month.",
        },
        halfPriceTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.half_price.title.v2",
          defaultMessage: "Enjoy 1 month {discountPercent, number, percent} off",
          description:
            "Short title for the introductory-price step on the PayPal ChatGPT Plus offer checkout when the provider confirms an OpenAI half-price first month. Placeholder {discountPercent} is 0.5, formatted as a percentage. Describes the subscription discount, separate from PayPal cash back. Matches Figma node 1090:1851.",
        },
        halfPriceBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.half_price.body.v2",
          defaultMessage: "Your first payment will be half the monthly subscription price.",
          description:
            "Body for the introductory-price step on the PayPal ChatGPT Plus offer checkout when the provider confirms an OpenAI half-price first month. Explains that the initial subscription payment is discounted by half. Matches Figma node 1090:1852.",
        },
        cashbackTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.cashback.title.v3",
          defaultMessage: "Get {discountPercent, number, percent} cash back for {paymentCount, number} months",
          description:
            "Title for the final step on the PayPal ChatGPT Plus offer checkout in all introductory-price variants. Cash back is issued by PayPal separately from the OpenAI invoice. Placeholder {discountPercent} is 0.5, formatted as a percentage; {paymentCount} is the six-month offer duration. Matches Figma nodes 1090:1239, 1090:1587 and 1090:1857.",
        },
        cashbackBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.cashback.body.v6",
          defaultMessage:
            "PayPal sends {discountPercent, number, percent} cash back on your first six months of payments.",
          description:
            "Body for the final step on the PayPal ChatGPT Plus offer checkout without an OpenAI introductory discount. Describes cash back paid by PayPal separately from the subscription charge. Placeholder {discountPercent} is 0.5, formatted as a percentage. Matches Figma node 1090:1240.",
        },
        introductoryOfferCashbackBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.cashback.body.introductory_offer.v2",
          defaultMessage:
            "When your free month ends, you\u2019ll be charged the full monthly price. PayPal sends {discountPercent, number, percent} cash back on your first six months of payments.",
          description:
            "Body for the final step on the PayPal ChatGPT Plus offer checkout with an OpenAI free first month. Describes the return to the full monthly subscription price and PayPal cash back on the subsequent payments. Placeholder {discountPercent} is 0.5, formatted as a percentage. Matches Figma node 1090:1588; do not use for a paid introductory month.",
        },
        halfPriceCashbackBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.cashback.body.half_price",
          defaultMessage:
            "After 1 month, you\u2019ll be charged the full monthly price. PayPal sends {discountPercent, number, percent} cash back on your first six months of payments.",
          description:
            "Body for the final step on the PayPal ChatGPT Plus offer checkout with an OpenAI half-price first month. Describes the return to the full monthly subscription price and PayPal cash back. Placeholder {discountPercent} is 0.5, formatted as a percentage. Matches Figma node 1090:1858; the introductory month is paid, not free.",
        },
        readTerms: {
          id: "chatgpt.checkout.paypal_promo.info.terms.link.v2",
          defaultMessage: "Read offer terms",
          description:
            "Secondary link on the PayPal Germany ChatGPT Plus cashback checkout. Opens PayPal's Germany campaign terms in a new tab, covering cashback eligibility, limits, and payout. These are separate from the OpenAI promotion terms for any introductory subscription discount.",
        },
        plus: {
          id: "chatgpt.checkout.paypal_promo.card.plan.heading",
          defaultMessage: "ChatGPT Plus",
          description: "Short plan name in the checkout card on the PayPal Germany ChatGPT Plus cashback checkout.",
        },
        topFeatures: {
          id: "chatgpt.checkout.paypal_promo.card.features.heading",
          defaultMessage: "Top features",
          description:
            "Heading above the fixed list of ChatGPT Plus features in the PayPal Germany cashback checkout card. Figma German reference: Top-Funktionen.",
        },
        advancedIntelligence: {
          id: "chatgpt.checkout.paypal_promo.card.features.advanced_intelligence",
          defaultMessage: "Advanced intelligence for complex work",
          description:
            "First fixed ChatGPT Plus feature shown in the PayPal Germany cashback checkout card. Figma German reference: Fortschrittliche Intelligenz f\xfcr komplexe Aufgaben.",
        },
        imageCreation: {
          id: "chatgpt.checkout.paypal_promo.card.features.image_creation",
          defaultMessage: "Higher quality image creation",
          description:
            "Second fixed ChatGPT Plus feature shown in the PayPal Germany cashback checkout card. Figma German reference: Hochwertigere Bilderstellung.",
        },
        halfPriceImageCreation: {
          id: "chatgpt.checkout.paypal_promo.card.features.image_creation.half_price",
          defaultMessage: "Advanced image creation",
          description:
            "Second ChatGPT Plus feature in the PayPal offer checkout card when an OpenAI half-price first month is active. This variant uses the wording from Figma node 1090:1890; default and free-first-month variants use Higher quality image creation.",
        },
        expandedMemory: {
          id: "chatgpt.checkout.paypal_promo.card.features.expanded_memory",
          defaultMessage: "Expanded memory and 20 GB of storage",
          description:
            "Third fixed ChatGPT Plus feature shown in the PayPal Germany cashback checkout card. The storage amount is 20 gigabytes. Figma German reference: Erweiterter Speicher und 20 GB Speicherplatz.",
        },
        codex: {
          id: "chatgpt.checkout.paypal_promo.card.features.codex",
          defaultMessage: "Codex to automate coding",
          description:
            "Fourth fixed ChatGPT Plus feature shown in the PayPal Germany cashback checkout card. Codex is the product name. Figma German reference: Codex zur Automatisierung von Programmieraufgaben.",
        },
        subscribe: {
          id: "chatgpt.checkout.paypal_promo.card.subscribe.button",
          defaultMessage: "Subscribe with PayPal",
          description:
            "Primary button label in the PayPal Germany ChatGPT Plus cashback checkout. Submits the subscription using PayPal; no other payment method qualifies. Figma German reference: Mit PayPal abonnieren.",
        },
        startFreeTrial: {
          id: "chatgpt.checkout.paypal_promo.card.subscribe.button.first_month_free",
          defaultMessage: "Start free trial with PayPal",
          description:
            "Primary button label on the PayPal Germany ChatGPT Plus cashback checkout when an OpenAI first-month-free promotion is active. Starts the free month and authorizes the subscription using PayPal.",
        },
      }),
      r = (0, n.YK)({
        heading: {
          id: "chatgpt.checkout.paypal_promo.info.heading.v3",
          defaultMessage: "Limited-time drop: 50% cashback on ChatGPT Plus for 6 months",
          description:
            "Main heading on the PayPal Germany ChatGPT Plus cashback checkout when no first-month-free promotion is active. The limited-time offer gives customers 50% cashback from PayPal on their first six monthly payments.",
        },
        availabilitySubtitle: {
          id: "chatgpt.checkout.paypal_promo.info.availability.subtitle",
          defaultMessage: "Available to the first 50,000 subscribers.",
          description:
            "Subtitle beneath the main heading on the PayPal Germany ChatGPT Plus cashback checkout when no first-month-free promotion is active. It explains that the limited-time offer is available only to the first 50,000 subscribers.",
        },
        firstMonthFreeHeading: {
          id: "chatgpt.checkout.paypal_promo.info.heading.first_month_free",
          defaultMessage: "Get 1 month free, then 2 months 50% cash back on ChatGPT Plus",
          description:
            "Main heading on the PayPal Germany ChatGPT Plus cashback checkout when an OpenAI first-month-free promotion is active. The first month is free, then PayPal sends 50% cashback for the first two eligible monthly payments.",
        },
        activateTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.activate.title.v2",
          defaultMessage: "Use the offer in the PayPal app",
          description:
            "Title for the first step on the PayPal Germany ChatGPT Plus cashback checkout. Customers must find and save the ChatGPT offer in the PayPal app before subscribing.",
        },
        subscribeTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.subscribe.title.v2",
          defaultMessage: "Subscribe with PayPal",
          description:
            "Title for the second step on the PayPal Germany ChatGPT Plus cashback checkout. It tells customers to use their PayPal account when starting a new Plus subscription.",
        },
        subscribeBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.subscribe.body.v3",
          defaultMessage: "Start a new ChatGPT Plus subscription and use your PayPal account at checkout.",
          description:
            "Body for the second step on the PayPal Germany ChatGPT Plus cashback checkout. It tells customers to start a new Plus subscription and use their PayPal account at checkout; OpenAI promotions can still be applied.",
        },
        sixMonthSubscribeBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.subscribe.body.v4",
          defaultMessage: "Start a new ChatGPT Plus subscription and pay with PayPal at checkout.",
          description:
            "Body for the first step on the PayPal Germany ChatGPT Plus six-month cashback checkout when no first-month-free promotion is active. It tells new subscribers to pay with PayPal during checkout.",
        },
        freeTrialTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.free_trial.title",
          defaultMessage: "Enjoy 1 month of ChatGPT Plus free",
          description:
            "Title for the third step on the PayPal Germany ChatGPT Plus cashback checkout when an OpenAI first-month-free promotion is active. It explains that the first month of Plus has no charge.",
        },
        cashbackTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.cashback.title",
          defaultMessage: "Get cashback from PayPal",
          description:
            "Title for the final step in the PayPal Germany ChatGPT Plus cashback checkout. The cashback is issued by PayPal, not OpenAI. Figma German reference: Cashback von PayPal erhalten.",
        },
        sixMonthCashbackTitle: {
          id: "chatgpt.checkout.paypal_promo.info.steps.cashback.title.v2",
          defaultMessage: "Get 50% cashback",
          description:
            "Short title for the second and final step on the PayPal Germany ChatGPT Plus six-month cashback checkout when no first-month-free promotion is active. PayPal, not OpenAI, issues the 50% cashback.",
        },
        cashbackBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.cashback.body.v4",
          defaultMessage: "PayPal sends 50% cashback on your first six monthly payments.",
          description:
            "Body for the second and final step on the PayPal Germany ChatGPT Plus cashback checkout when no first-month-free promotion is active. It explains that PayPal sends customers 50% cashback on their first six monthly payments.",
        },
        firstMonthFreeCashbackBody: {
          id: "chatgpt.checkout.paypal_promo.info.steps.cashback.body.first_month_free",
          defaultMessage:
            "When your free month ends, you'll be charged the full monthly price. PayPal will send 50% cashback for your first 2 months.",
          description:
            "Body for the fourth and final step on the PayPal Germany ChatGPT Plus cashback checkout when an OpenAI first-month-free promotion is active. It explains that the customer pays the full monthly price after the free month and PayPal sends 50% cashback for the first two eligible paid months.",
        },
        readTerms: {
          id: "chatgpt.checkout.paypal_promo.info.terms.link",
          defaultMessage: "Read full terms",
          description:
            "Secondary link on the PayPal Germany ChatGPT Plus cashback checkout. Opens PayPal's offers and cashback help page in a new tab. Figma German reference: Vollst\xe4ndige Bedingungen lesen.",
        },
      })
    a.d(t, {}, { c: r, x: i })
  },
  k17m(e, t, a) {
    a.d(t, { NE: () => P, KS: () => M, RI: () => v })
    var n = a("ABep"),
      i = a("QosV"),
      r = a("hwkA"),
      o = a("zd8w"),
      s = a("Wf1j"),
      l = a("oyxz"),
      c = a("lu8r"),
      u = a("j2Vs"),
      d = a("eUna"),
      h = a("Oeow"),
      m = a("y60j"),
      p = (e) =>
        (0, n.jsx)("svg", {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M11.949 3.47949C12.0997 3.46465 12.2553 3.51279 12.3709 3.62793C12.4863 3.74328 12.5338 3.89898 12.5193 4.0498C12.5206 4.06633 12.5251 4.08275 12.5252 4.09961V10.667C12.525 10.9565 12.2902 11.191 12.0007 11.1914C11.7109 11.1914 11.4755 10.9568 11.4754 10.667V5.2666L4.37184 12.376C4.16684 12.5807 3.83365 12.5808 3.62867 12.376C3.42385 12.1711 3.42396 11.8388 3.62867 11.6338L10.7332 4.52539H5.33375C5.0438 4.52539 4.80836 4.28995 4.80836 4C4.80836 3.71005 5.0438 3.47461 5.33375 3.47461H11.9002C11.9167 3.47462 11.9328 3.47822 11.949 3.47949Z",
            fill: "currentColor",
          }),
        }),
      f = (e) =>
        (0, n.jsxs)("svg", {
          width: 118,
          height: 28,
          viewBox: "0 0 118 28",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsxs)("g", {
              clipPath: "url(#clip0_1116_479)",
              fill: "currentColor",
              children: [
                (0, n.jsx)("path", {
                  d: "M25.9489 10.854C26.5806 8.48721 25.968 5.85728 24.1111 4.0005C22.2544 2.14371 19.6244 1.53106 17.2576 2.16271C15.5236 0.432283 12.9397 -0.352139 10.4032 0.32755C7.86677 1.00724 6.02142 2.97849 5.38482 5.34396C3.01935 5.9804 1.0481 7.82591 0.368566 10.3624C-0.311124 12.8988 0.473299 15.4826 2.20372 17.2166C1.57208 19.5834 2.18473 22.2134 4.04152 24.0701C5.89829 25.927 8.52823 26.5396 10.8951 25.9079C12.6291 27.6384 15.213 28.4228 17.7493 27.7431C20.2857 27.0634 22.1311 25.0921 22.7677 22.7267C25.1333 22.0903 27.1046 20.2447 27.7841 17.7083C28.4638 15.1718 27.6794 12.5881 25.9489 10.854ZM16.3108 4.19745C18.4392 2.96691 21.208 3.2621 23.029 5.08306C24.3143 6.36844 24.8391 8.12667 24.6041 9.79791L18.6092 6.33677C18.3724 6.20006 18.0806 6.20006 17.8438 6.33677L10.8241 10.3897V7.66464C10.8241 7.48081 10.9226 7.30904 11.0817 7.21712L16.3107 4.1976L16.3108 4.19745ZM14.0764 10.2797L17.3288 12.1575V15.9131L14.0764 17.7909L10.8239 15.9131V12.1575L14.0764 10.2797ZM6.67376 7.18129C6.67221 4.72282 8.31227 2.47243 10.7998 1.80602C12.5555 1.3355 14.3406 1.76015 15.6705 2.7993L9.67567 6.26046C9.43886 6.39717 9.29303 6.64989 9.29303 6.92332V15.0291L6.93297 13.6665C6.77386 13.5745 6.67422 13.4032 6.67422 13.2196L6.67376 7.18144V7.18129ZM1.84704 10.7583C2.31757 9.00254 3.57778 7.66881 5.14261 7.0367V13.9588C5.14261 14.2323 5.28843 14.485 5.52524 14.6217L12.545 18.6747L10.1849 20.0373C10.0259 20.1292 9.82765 20.1298 9.66856 20.0379L4.43913 17.0193C2.30923 15.7914 1.18049 13.2458 1.84689 10.7585L1.84704 10.7583ZM11.8419 23.8732C9.71352 25.1038 6.94471 24.8085 5.12376 22.9876C3.83838 21.7022 3.31362 19.944 3.54858 18.2727L9.54344 21.7339C9.7802 21.8706 10.0721 21.8706 10.3089 21.7339L17.3286 17.6809V20.406C17.3286 20.5899 17.2301 20.7617 17.071 20.8535L11.842 23.8731L11.8419 23.8732ZM21.479 20.8894C21.4805 23.3479 19.8404 25.5983 17.3529 26.2646C15.5971 26.7352 13.812 26.3105 12.4822 25.2713L18.477 21.8102C18.7139 21.6735 18.8597 21.4207 18.8597 21.1473V13.0416L21.2198 14.4042C21.3788 14.4961 21.4785 14.6675 21.4785 14.8511L21.479 20.8892V20.8894ZM26.3055 17.3123C25.835 19.0681 24.5748 20.4018 23.0099 21.034V14.1118C23.0099 13.8384 22.8641 13.5857 22.6273 13.4489L15.6075 9.39599L17.9676 8.03337C18.1266 7.94146 18.3249 7.94083 18.484 8.03275L23.7134 11.0513C25.8434 12.2792 26.972 14.8249 26.3056 17.3122L26.3055 17.3123Z",
                }),
                (0, n.jsx)("path", {
                  d: "M41.9916 18.5672C39.4791 18.5672 37.7343 16.6644 37.7343 14.0346C37.7343 11.4048 39.4817 9.50202 41.9539 9.50202C43.7599 9.50202 45.1515 10.5618 45.5638 11.8565H48.3704C47.8806 9.03104 45.2315 6.9707 41.9141 6.9707C37.93 6.9707 35.0078 10.1306 35.0078 14.0346C35.0078 17.9386 37.852 21.0985 41.9351 21.0985C45.3095 21.0985 47.8995 19.078 48.4295 16.2127H45.6439C45.1729 17.5267 43.8002 18.5672 41.9942 18.5672H41.992H41.9916Z",
                }),
                (0, n.jsx)("path", {
                  d: "M55.3097 10.8956C54.0145 10.8956 52.9951 11.4654 52.4251 12.2494V7.16797H49.875V20.9027H52.4251V15.6233C52.4251 14.0927 53.2494 13.0921 54.5844 13.0921C55.8018 13.0921 56.4868 14.0341 56.4868 15.3476V20.9001H59.0369V14.9357C59.0369 12.5033 57.5465 10.8925 55.3097 10.8925V10.8947V10.8956Z",
                }),
                (0, n.jsx)("path", {
                  d: "M69.4973 14.5063C69.4973 12.2697 67.9666 10.8965 65.1411 10.8965C62.8264 10.8965 60.9802 12.1917 60.6672 14.0753H63.2387C63.434 13.4279 64.1405 12.9166 65.1227 12.9166C66.3991 12.9166 67.0067 13.5828 67.0067 14.7414V14.8001L64.5152 15.0168C61.9064 15.2335 60.4531 16.2931 60.4531 18.2944C60.4531 19.9827 61.9059 21.101 63.9264 21.101C65.2803 21.101 66.5944 20.571 67.1454 19.6881C67.1454 20.1188 67.1853 20.5123 67.2632 20.9054H69.6369C69.538 20.2768 69.5003 19.5515 69.5003 18.7085V14.5098L69.4977 14.5051L69.4973 14.5063ZM67.0036 16.8425C67.0036 18.0011 66.1396 19.1782 64.3948 19.1782C63.4528 19.1782 62.942 18.726 62.942 18.0598C62.942 17.3344 63.4318 16.8824 64.5314 16.7834L67.0036 16.5667V16.842V16.8425Z",
                }),
                (0, n.jsx)("path", {
                  d: "M74.8572 7.91406H72.3071V11.0927H70.2656V13.1532H72.3071V17.9802C72.3071 19.8453 73.2679 20.9047 75.3283 20.9047H77.3698V18.7856H76.0746C75.2105 18.7856 74.8572 18.4915 74.8572 17.6861V13.1535H77.3698V11.0932H74.8572V7.91449V7.91406Z",
                }),
                (0, n.jsx)("path", {
                  d: "M90.0387 13.5641H85.6422V15.7609H89.3908C89.1344 17.5858 87.4268 18.6854 85.5245 18.6854C82.7765 18.6854 81.1684 16.6648 81.1684 14.035C81.1684 11.4053 82.9744 9.4832 85.4444 9.4832C87.1327 9.4832 88.508 10.465 88.8608 11.5624H91.6653C91.1352 8.83581 88.6231 6.9707 85.4063 6.9707C81.4432 6.9707 78.5 10.1682 78.5 14.0534C78.5 17.9386 81.2081 21.0985 85.2509 21.0985C87.0968 21.0985 88.764 20.2743 89.5082 19.1559V20.9033H91.7852V15.311C91.7852 14.1926 91.1588 13.5636 90.0382 13.5636L90.0387 13.5641Z",
                }),
                (0, n.jsx)("path", {
                  d: "M99.8947 7.16841H93.8125V20.9031H96.4003V15.7416H99.9132C102.624 15.7416 104.545 14.1522 104.545 11.4843C104.545 8.81642 102.624 7.16797 99.8947 7.16797V7.16841ZM99.7178 13.4671H96.4003V9.52289H99.7178C101.054 9.52289 101.917 10.2881 101.917 11.4843C101.917 12.6806 101.054 13.4668 99.7178 13.4668V13.4671Z",
                }),
                (0, n.jsx)("path", {
                  d: "M105.189 7.16797V9.52246H109.88V20.9027H112.468V9.52246H117.178V7.16797H105.188H105.19H105.189Z",
                }),
              ],
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "clip0_1116_479",
                children: (0, n.jsx)("rect", { width: 117.347, height: 28, fill: "white" }),
              }),
            }),
          ],
        }),
      g = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M4.81611 4.81587C5.07581 4.55617 5.49684 4.55617 5.75654 4.81587L9.99971 9.05903L14.2438 4.81587C14.5036 4.5565 14.9247 4.55632 15.1843 4.81587C15.4439 5.07546 15.4437 5.49657 15.1843 5.7563L10.9401 9.99946L15.1843 14.2436C15.4437 14.5033 15.4439 14.9244 15.1843 15.184C14.9247 15.4436 14.5036 15.4435 14.2438 15.184L9.99971 10.9399L5.75654 15.185C5.49699 15.4445 5.07583 15.4442 4.81611 15.185C4.55641 14.9253 4.55641 14.5033 4.81611 14.2436L9.05928 9.99946L4.81611 5.7563C4.55643 5.49661 4.55645 5.07557 4.81611 4.81587Z",
            fill: "currentColor",
          }),
        }),
      C = a("erHg"),
      b = (e) =>
        (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 75,
          height: 20,
          viewBox: "0 0 74.917 19.9334",
          fill: "currentColor",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M8.99011 7.66492e-05H3.16296C2.7642 7.66492e-05 2.42508 0.289306 2.36288 0.682319L0.00611739 15.6006C-0.0407452 15.895 0.187603 16.1604 0.486672 16.1604H3.26861C3.66737 16.1604 4.00648 15.8711 4.06868 15.4773L4.70431 11.4536C4.76566 11.0597 5.10562 10.7705 5.50353 10.7705H7.34821C11.1867 10.7705 13.402 8.91601 13.9806 5.24109C14.2413 3.63331 13.9916 2.37006 13.2376 1.48536C12.4094 0.513885 10.9404 7.66492e-05 8.99011 7.66492e-05ZM9.66238 5.44866C9.34371 7.53621 7.74612 7.53621 6.20136 7.53621H5.32204L5.93893 3.63757C5.97557 3.40193 6.18006 3.22839 6.41863 3.22839H6.82165C7.87393 3.22839 8.86656 3.22839 9.3795 3.82727C9.68538 4.18455 9.77911 4.71537 9.66238 5.44866Z",
            }),
            (0, n.jsx)("path", {
              d: "M26.4102 5.38469H23.6197C23.382 5.38469 23.1767 5.55823 23.14 5.79386L23.0165 6.57308L22.8214 6.29066C22.2173 5.41531 20.8702 5.12268 19.5256 5.12268C16.4421 5.12268 13.8084 7.45438 13.2955 10.7252C13.0288 12.3568 13.4079 13.917 14.335 15.005C15.1853 16.0054 16.402 16.4222 17.8497 16.4222C20.3342 16.4222 21.712 14.8272 21.712 14.8272L21.5876 15.6013C21.5407 15.8973 21.7691 16.1628 22.0664 16.1628H24.58C24.9796 16.1628 25.317 15.8735 25.3801 15.4797L26.8882 5.94443C26.9359 5.65095 26.7084 5.38469 26.4102 5.38469ZM22.5206 10.8069C22.2513 12.3985 20.986 13.467 19.3723 13.467C18.562 13.467 17.9144 13.2075 17.4986 12.7158C17.0862 12.2275 16.9294 11.5325 17.0607 10.7584C17.312 9.1804 18.5986 8.07708 20.1877 8.07708C20.9801 8.07708 21.6242 8.33994 22.0485 8.83588C22.4737 9.33693 22.6424 10.0362 22.5206 10.8069Z",
            }),
            (0, n.jsx)("path", {
              d: "M41.2706 5.38434H38.4665C38.1989 5.38434 37.9476 5.51704 37.7959 5.73907L33.9285 11.4267L32.2891 5.9611C32.186 5.61913 31.8699 5.38434 31.5121 5.38434H28.7565C28.4217 5.38434 28.1891 5.711 28.2956 6.02575L31.3842 15.0752L28.4805 19.1678C28.2521 19.4902 28.4822 19.9334 28.8767 19.9334H31.6774C31.9432 19.9334 32.192 19.8041 32.3428 19.5864L41.6693 6.14569C41.8926 5.82414 41.6634 5.38434 41.2706 5.38434Z",
            }),
            (0, n.jsx)("path", {
              d: "M50.5545 0.00012207H44.7265C44.3286 0.00012207 43.9895 0.289352 43.9273 0.682364L41.5705 15.6007C41.5237 15.895 41.752 16.1604 42.0494 16.1604H45.0401C45.3178 16.1604 45.5556 15.958 45.599 15.6823L46.2679 11.4536C46.3292 11.0598 46.6692 10.7705 47.0671 10.7705H48.9109C52.7502 10.7705 54.9647 8.91606 55.5441 5.24114C55.8057 3.63336 55.5543 2.3701 54.8003 1.4854C53.9729 0.51393 52.5049 0.00012207 50.5545 0.00012207ZM51.2268 5.4487C50.909 7.53626 49.3114 7.53626 47.7658 7.53626H46.8873L47.505 3.63761C47.5417 3.40197 47.7445 3.22844 47.9839 3.22844H48.3869C49.4383 3.22844 50.4318 3.22844 50.9448 3.82731C51.2506 4.1846 51.3435 4.71542 51.2268 5.4487Z",
            }),
            (0, n.jsx)("path", {
              d: "M67.9717 5.38469H65.1829C64.9435 5.38469 64.7398 5.55823 64.7041 5.79386L64.5805 6.57308L64.3845 6.29066C63.7804 5.41531 62.4342 5.12268 61.0897 5.12268C58.0061 5.12268 55.3733 7.45438 54.8603 10.7252C54.5945 12.3568 54.972 13.917 55.899 15.005C56.751 16.0054 57.9661 16.4222 59.4137 16.4222C61.8983 16.4222 63.276 14.8272 63.276 14.8272L63.1516 15.6013C63.1048 15.8973 63.3331 16.1628 63.6322 16.1628H66.1449C66.5428 16.1628 66.8819 15.8735 66.9441 15.4797L68.4531 5.94443C68.4991 5.65095 68.2707 5.38469 67.9717 5.38469ZM64.0821 10.8069C63.8145 12.3985 62.5475 13.467 60.9338 13.467C60.1252 13.467 59.4759 13.2075 59.0601 12.7158C58.6477 12.2275 58.4926 11.5325 58.6221 10.7584C58.8752 9.1804 60.1601 8.07708 61.7492 8.07708C62.5416 8.07708 63.1857 8.33994 63.61 8.83588C64.0369 9.33693 64.2056 10.0362 64.0821 10.8069Z",
            }),
            (0, n.jsx)("path", {
              d: "M71.2607 0.410148L68.869 15.6015C68.8221 15.8958 69.0505 16.1613 69.3478 16.1613H71.7523C72.1519 16.1613 72.491 15.872 72.5524 15.4782L74.9109 0.560717C74.9577 0.266384 74.7294 0.00012207 74.432 0.00012207H71.7395C71.5018 0.000972746 71.2973 0.17451 71.2607 0.410148Z",
            }),
          ],
        }),
      x = (e) =>
        (0, n.jsx)("svg", {
          preserveAspectRatio: "none",
          overflow: "visible",
          style: { display: "block" },
          width: 61,
          height: 20,
          viewBox: "0 0 61 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("g", {
            id: "Paypal",
            children: (0, n.jsx)("path", {
              id: "Vector",
              d: "M57.6145 14.9525H61V0H57.6145V14.9525ZM50.813 12.2539C49.5625 12.2539 48.6373 11.3043 48.6373 9.995C48.6373 8.68566 49.5625 7.73614 50.813 7.73614C52.0635 7.73614 52.9887 8.68566 52.9887 9.995C52.9887 11.3043 52.0635 12.2539 50.813 12.2539ZM50.2437 15.2724C51.3925 15.2724 52.4193 14.8326 53.192 14.1029V14.9525H56.2827V5.03748H53.192V5.88706C52.4295 5.15742 51.3925 4.71764 50.2437 4.71764C47.3563 4.71764 45.14 7.03648 45.14 9.995C45.14 12.9535 47.3563 15.2724 50.2437 15.2724ZM15.7787 12.2539C14.5282 12.2539 13.603 11.3043 13.603 9.995C13.603 8.68566 14.5282 7.73614 15.7787 7.73614C17.0292 7.73614 17.9543 8.68566 17.9543 9.995C17.9543 11.3043 17.0292 12.2539 15.7787 12.2539ZM15.2093 15.2724C16.3582 15.2724 17.385 14.8326 18.1577 14.1029V14.9525H21.2483V5.03748H18.1577V5.88706C17.3952 5.15742 16.3582 4.71764 15.2093 4.71764C12.322 4.71764 10.1057 7.03648 10.1057 9.995C10.1057 12.9535 12.322 15.2724 15.2093 15.2724ZM38.5723 6.8066V3.07846H39.7415C40.687 3.07846 41.1547 3.29835 41.5003 3.61819C41.846 3.93803 42.0493 4.4078 42.0493 4.94753C42.0493 5.48726 41.846 5.95702 41.5003 6.27686C41.1547 6.5967 40.6972 6.81659 39.7415 6.81659H38.5723V6.8066ZM35.0343 14.9525H38.5622V9.87506H40.2397C42.0595 9.87506 43.3303 9.33533 44.2148 8.44578C45.1197 7.53623 45.6687 6.30685 45.6687 4.93753C45.6687 3.56822 45.1197 2.33883 44.2148 1.42928C43.3303 0.539729 42.0595 0 40.2397 0H35.0343V14.9525ZM23.119 19.99H26.7078L34.3125 5.03748H30.7237L28.426 9.75512H28.4057L25.803 5.03748H21.9702L26.6265 13.1334L23.119 20V19.99ZM3.52783 6.8066V3.07846H4.697C5.6425 3.07846 6.11017 3.29835 6.45583 3.61819C6.8015 3.93803 7.00484 4.4078 7.00484 4.94753C7.00484 5.48726 6.8015 5.95702 6.45583 6.27686C6.11017 6.5967 5.65267 6.81659 4.697 6.81659H3.52783V6.8066ZM0 14.9525H3.52783V9.87506H5.20533C7.02517 9.87506 8.296 9.33533 9.1805 8.44578C10.0853 7.53623 10.6343 6.30685 10.6343 4.93753C10.6343 3.56822 10.0853 2.33883 9.1805 1.42928C8.296 0.539729 7.02517 0 5.20533 0H0V14.9525Z",
              fill: "black",
            }),
          }),
        }),
      y = a("tGcV"),
      k = "terms-AtLS50"
    let v = (e) => {
      let t,
        a,
        r,
        o,
        h,
        g,
        v,
        P,
        M,
        A,
        j,
        L,
        T,
        S,
        I,
        N,
        B,
        V,
        U,
        G,
        H,
        O,
        R,
        F,
        Z,
        D,
        E,
        W,
        z,
        q,
        Q,
        Y,
        K,
        $,
        J,
        X,
        ee,
        et,
        ea,
        en = (0, i.c)(99),
        {
          billingCountry: ei,
          checkoutForm: er,
          glowImages: eo,
          disclaimer: es,
          introOffer: el,
          paypalPromoPublicEnabled: ec,
          onClose: eu,
          Shell: ed,
          offerBanner: eh,
          companyPaidBanner: em,
          TermsLink: ep,
        } = e,
        ef = void 0 !== ec && ec,
        eg = void 0 === ed ? w : ed,
        eC = (0, s.A)(),
        eb = "US" === ei ? "us" : "GB" === ei ? "uk" : "de"
      en[0] !== ef ? ((t = ef ? C.x : { ...C.x, ...C.c }), (en[0] = ef), (en[1] = t)) : (t = en[1])
      let ex = t,
        ey = ef ? x : b,
        ek =
          "free_month" === el
            ? ex.firstMonthFreeHeading
            : ef && "half_price_month" === el
              ? C.x.firstMonthHalfPriceHeading
              : ex.heading
      en[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { paymentCount: 6, discountPercent: 0.5 }), (en[2] = a))
        : (a = en[2])
      let ev = a
      en[3] !== ex || en[4] !== el || en[5] !== ef
        ? ((r = ef
            ? "none" !== el
              ? [
                  { title: C.x.activateTitle, description: C.x.activateBody },
                  { title: C.x.subscribeTitle, description: C.x.subscribeBody },
                  {
                    title: "free_month" === el ? C.x.freeTrialTitle : C.x.halfPriceTitle,
                    description: "free_month" === el ? C.x.freeTrialBody : C.x.halfPriceBody,
                  },
                  {
                    title: C.x.cashbackTitle,
                    description: "free_month" === el ? C.x.introductoryOfferCashbackBody : C.x.halfPriceCashbackBody,
                  },
                ]
              : [
                  { title: C.x.activateTitle, description: C.x.defaultActivateBody },
                  { title: C.x.subscribeTitle, description: C.x.sixMonthSubscribeBody },
                  { title: C.x.cashbackTitle, description: C.x.cashbackBody },
                ]
            : "free_month" === el
              ? [
                  { title: ex.activateTitle, description: C.x.activateBody },
                  { title: ex.subscribeTitle, description: ex.subscribeBody },
                  { title: ex.freeTrialTitle, description: C.x.freeTrialBody },
                  { title: ex.cashbackTitle, description: C.c.firstMonthFreeCashbackBody },
                ]
              : [
                  { title: ex.subscribeTitle, description: ex.sixMonthSubscribeBody },
                  { title: C.c.sixMonthCashbackTitle, description: ex.cashbackBody },
                ]),
          (en[3] = ex),
          (en[4] = el),
          (en[5] = ef),
          (en[6] = r))
        : (r = en[6])
      let ew = r
      en[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = { icon: y.A, message: C.x.advancedIntelligence }), (en[7] = o))
        : (o = en[7])
      let eP = ef && "half_price_month" === el ? C.x.halfPriceImageCreation : C.x.imageCreation
      ;(en[8] !== eP ? ((h = { icon: u.A, message: eP }), (en[8] = eP), (en[9] = h)) : (h = en[9]),
        en[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = { icon: c.A, message: C.x.expandedMemory }),
            (g = { icon: m.A, message: C.x.codex }),
            (en[10] = g),
            (en[11] = v))
          : ((g = en[10]), (v = en[11])),
        en[12] !== h ? ((P = [o, h, v, g]), (en[12] = h), (en[13] = P)) : (P = en[13]))
      let eM = P
      en[14] !== ek ? ((M = (0, n.jsx)(l.A, { ...ek, values: ev })), (en[14] = ek), (en[15] = M)) : (M = en[15])
      let e_ = `min-h-full bg-token-bg-primary px-6 py-8 text-token-text-primary lg:flex lg:items-start lg:pt-[72px] lg:pb-12 dark:bg-[#131313] ${ef ? "publicPresentation-aCrbeK sm:px-10 md:pt-14" : ""}`,
        eA = `mx-auto flex w-full max-w-[916px] flex-col gap-8 lg:gap-14 ${ef ? "sm:gap-10 md:flex-row md:items-start" : "lg:flex-row lg:items-start"}`,
        ej = `flex w-full flex-col gap-8 lg:pt-8 ${ef ? "min-w-0 md:flex-[400_1_0%]" : "max-w-[400px] shrink-0"}`
      ;(en[16] !== eC ? ((A = eC.formatMessage(C.x.chatGptWordmark)), (en[16] = eC), (en[17] = A)) : (A = en[17]),
        en[18] !== A
          ? ((j = (0, n.jsx)(f, { "aria-label": A, className: "h-6 w-[101px] text-token-text-primary", role: "img" })),
            (en[18] = A),
            (en[19] = j))
          : (j = en[19]),
        en[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, n.jsx)("span", { "aria-hidden": "true", className: "h-6 border-s border-token-border-default" })),
            (en[20] = L))
          : (L = en[20]),
        en[21] !== eC ? ((T = eC.formatMessage(C.x.paypalWordmark)), (en[21] = eC), (en[22] = T)) : (T = en[22]))
      let eL = ef ? "shrink-0 dark:invert" : "h-5 w-[75px] text-[#003087] dark:text-white"
      ;(en[23] !== ey || en[24] !== T || en[25] !== eL
        ? ((S = (0, n.jsx)(ey, { "aria-label": T, className: eL, role: "img" })),
          (en[23] = ey),
          (en[24] = T),
          (en[25] = eL),
          (en[26] = S))
        : (S = en[26]),
        en[27] !== j || en[28] !== S
          ? ((I = (0, n.jsxs)("div", { className: "flex h-7 items-center gap-3", children: [j, L, S] })),
            (en[27] = j),
            (en[28] = S),
            (en[29] = I))
          : (I = en[29]),
        en[30] !== ek || en[31] !== el || en[32] !== ef
          ? ((N =
              ef || "free_month" === el
                ? (0, n.jsx)("h1", {
                    className: "text-[36px] leading-10 font-[590] tracking-[0.36px] text-token-text-primary",
                    children: (0, n.jsx)(l.A, { ...ek, values: ev }),
                  })
                : (0, n.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, n.jsx)("h1", {
                        className: "text-[36px] leading-10 font-[590] tracking-[0.36px] text-token-text-primary",
                        children: (0, n.jsx)(l.A, { ...ek }),
                      }),
                      (0, n.jsx)("p", {
                        className: "text-base leading-6.5 font-normal tracking-[-0.32px] text-token-text-secondary",
                        children: (0, n.jsx)(l.A, { ...C.c.availabilitySubtitle }),
                      }),
                    ],
                  })),
            (en[30] = ek),
            (en[31] = el),
            (en[32] = ef),
            (en[33] = N))
          : (N = en[33]),
        en[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, n.jsx)("h2", {
              className: "text-base leading-6.5 font-[590] font-semibold tracking-[-0.32px] text-token-text-primary",
              id: "paypal-promo-steps",
              children: (0, n.jsx)(l.A, { ...C.x.howItWorks }),
            })),
            (en[34] = B))
          : (B = en[34]))
      let eT = `flex w-full flex-col gap-4 ${ef ? "md:max-w-[368px]" : "max-w-[368px]"}`
      ;(en[35] !== ew
        ? ((V = ew.map((e, t) =>
            (0, n.jsxs)(
              "li",
              {
                className: "relative flex gap-4",
                children: [
                  t < ew.length - 1
                    ? (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        className:
                          "absolute start-[9px] top-[13px] bottom-[-29px] w-0.5 bg-[#e7e7e7] dark:bg-[#363636]",
                      })
                    : null,
                  (0, n.jsxs)("span", {
                    className: "z-1 flex h-[26px] w-5 shrink-0 items-center justify-center",
                    children: [
                      (0, n.jsx)("span", { className: "size-4 rounded-full bg-[#e7e7e7] dark:bg-[#363636]" }),
                      (0, n.jsx)("span", { className: "sr-only", children: t + 1 }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex min-w-0 flex-1 flex-col gap-1",
                    children: [
                      (0, n.jsx)("h3", {
                        className:
                          "text-base leading-6.5 font-[590] font-semibold tracking-[-0.32px] text-token-text-primary",
                        children: (0, n.jsx)(l.A, { ...e.title, values: ev }),
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "text-base leading-6.5 font-normal tracking-[-0.32px] text-[#8f8f8f] dark:text-[#afafaf]",
                        children: (0, n.jsx)(l.A, { ...e.description, values: ev }),
                      }),
                    ],
                  }),
                ],
              },
              e.title.id,
            ),
          )),
          (en[35] = ew),
          (en[36] = V))
        : (V = en[36]),
        en[37] !== eT || en[38] !== V
          ? ((U = (0, n.jsx)("ol", { className: eT, children: V })), (en[37] = eT), (en[38] = V), (en[39] = U))
          : (U = en[39]),
        en[40] !== ep || en[41] !== ef || en[42] !== eb
          ? ((G = ef
              ? (0, n.jsx)(ep, {
                  className: k,
                  href: `https://www.paypal.com/${eb}/campaign/openai_tnc`,
                  children: (0, n.jsxs)("span", {
                    className: "flex items-center gap-1.5",
                    children: [
                      (0, n.jsx)(l.A, { ...C.x.readTerms }),
                      (0, n.jsx)(p, { "aria-hidden": "true", className: "size-4" }),
                    ],
                  }),
                })
              : (0, n.jsx)("a", {
                  className: k,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://www.paypal.com/de/cshelp/article/welche-angebote-und-cashback-kann-ich-bei-paypal-erhalten-help958",
                  children: (0, n.jsxs)("span", {
                    className: "flex items-center gap-1.5",
                    children: [
                      (0, n.jsx)(l.A, { ...C.c.readTerms }),
                      (0, n.jsx)(p, { "aria-hidden": "true", className: "size-4" }),
                    ],
                  }),
                })),
            (en[40] = ep),
            (en[41] = ef),
            (en[42] = eb),
            (en[43] = G))
          : (G = en[43]),
        en[44] !== U || en[45] !== G
          ? ((H = (0, n.jsxs)("section", {
              "aria-labelledby": "paypal-promo-steps",
              className: "flex flex-col gap-4",
              children: [B, U, G],
            })),
            (en[44] = U),
            (en[45] = G),
            (en[46] = H))
          : (H = en[46]),
        en[47] !== ej || en[48] !== I || en[49] !== N || en[50] !== H
          ? ((O = (0, n.jsxs)("section", { className: ej, children: [I, N, H] })),
            (en[47] = ej),
            (en[48] = I),
            (en[49] = N),
            (en[50] = H),
            (en[51] = O))
          : (O = en[51]))
      let eS = `flex w-full min-w-0 flex-col gap-4 ${ef ? "md:min-w-[400px] md:flex-[460_1_0%]" : "max-w-[460px] lg:w-[460px] lg:shrink-0"}`,
        eI = `pointer-events-none absolute inset-0 dark:opacity-30 ${ef ? "opacity-50" : "opacity-40"}`
      ;(en[52] !== eo.light || en[53] !== ef
        ? ((R = ef ? void 0 : { backgroundImage: `url(${eo.light})` }),
          (en[52] = eo.light),
          (en[53] = ef),
          (en[54] = R))
        : (R = en[54]),
        en[55] !== R
          ? ((F = (0, n.jsx)("div", { className: "lightGlow-rYxSq6", style: R })), (en[55] = R), (en[56] = F))
          : (F = en[56]))
      let eN = `url(${eo.dark})`
      ;(en[57] !== eN
        ? ((Z = (0, n.jsx)("div", { className: "darkGlow-MEtVNn", style: { backgroundImage: eN } })),
          (en[57] = eN),
          (en[58] = Z))
        : (Z = en[58]),
        en[59] !== F || en[60] !== Z
          ? ((D = (0, n.jsxs)("div", {
              "aria-hidden": "true",
              className: "animatedGlow-frNgVq blueGlow-owPwSk",
              children: [F, Z],
            })),
            (en[59] = F),
            (en[60] = Z),
            (en[61] = D))
          : (D = en[61]),
        en[62] !== eI || en[63] !== D
          ? ((E = (0, n.jsx)("div", { className: eI, children: D })), (en[62] = eI), (en[63] = D), (en[64] = E))
          : (E = en[64]))
      let eB = `relative z-1 flex flex-col gap-4 rounded-[40px] border border-black/[.12] bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,.03),0_4px_24px_rgba(0,0,0,.03)] dark:border-white/[.15] dark:bg-[#303030] ${ef ? "sm:p-8" : "lg:p-8"}`
      ;(en[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = (0, n.jsx)("span", {
            className:
              "flex size-12 shrink-0 items-center justify-center rounded-full border border-white bg-white bg-linear-to-b from-[#e8f4ff]/60 to-[#a3d3ff]/60",
            children: (0, n.jsx)(d.A, { "aria-hidden": "true", className: "size-[29px] text-blue-400" }),
          })),
          (en[65] = W))
        : (W = en[65]),
        en[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, n.jsxs)("header", {
              className: "flex items-center gap-3",
              children: [
                W,
                (0, n.jsx)("h2", {
                  className: "text-lg leading-6.5 font-[590] tracking-[-0.45px] text-token-text-primary",
                  children: (0, n.jsx)(l.A, { ...C.x.plus }),
                }),
              ],
            })),
            (en[66] = z))
          : (z = en[66]),
        en[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, n.jsx)("h3", {
              className: "text-base leading-6.5 font-[590] font-semibold tracking-[-0.32px] text-token-text-primary",
              id: "paypal-promo-features",
              children: (0, n.jsx)(l.A, { ...C.x.topFeatures }),
            })),
            (en[67] = q))
          : (q = en[67]),
        en[68] !== eM
          ? ((Q = (0, n.jsxs)("section", {
              "aria-labelledby": "paypal-promo-features",
              className: "flex flex-col gap-2",
              children: [q, (0, n.jsx)("ul", { className: "flex flex-col gap-2", children: eM.map(_) })],
            })),
            (en[68] = eM),
            (en[69] = Q))
          : (Q = en[69]),
        en[70] !== er
          ? ((Y = (0, n.jsx)("div", { className: "border-t border-token-border-default pt-4", children: er })),
            (en[70] = er),
            (en[71] = Y))
          : (Y = en[71]),
        en[72] !== eB || en[73] !== Q || en[74] !== Y
          ? ((K = (0, n.jsxs)("div", { className: eB, children: [z, Q, Y] })),
            (en[72] = eB),
            (en[73] = Q),
            (en[74] = Y),
            (en[75] = K))
          : (K = en[75]),
        en[76] !== E || en[77] !== K
          ? (($ = (0, n.jsxs)("div", { className: "relative", children: [E, K] })),
            (en[76] = E),
            (en[77] = K),
            (en[78] = $))
          : ($ = en[78]),
        en[79] !== es || en[80] !== eS || en[81] !== $
          ? ((J = (0, n.jsxs)("section", { className: eS, children: [$, es] })),
            (en[79] = es),
            (en[80] = eS),
            (en[81] = $),
            (en[82] = J))
          : (J = en[82]),
        en[83] !== eA || en[84] !== O || en[85] !== J
          ? ((X = (0, n.jsxs)("div", { className: eA, children: [O, J] })),
            (en[83] = eA),
            (en[84] = O),
            (en[85] = J),
            (en[86] = X))
          : (X = en[86]),
        en[87] !== e_ || en[88] !== X
          ? ((ee = (0, n.jsx)("main", { className: e_, children: X })), (en[87] = e_), (en[88] = X), (en[89] = ee))
          : (ee = en[89]),
        en[90] !== eg || en[91] !== eh || en[92] !== eu || en[93] !== M || en[94] !== ee
          ? ((et = (0, n.jsxs)(eg, { accessibleTitle: M, onClose: eu, children: [eh, ee] })),
            (en[90] = eg),
            (en[91] = eh),
            (en[92] = eu),
            (en[93] = M),
            (en[94] = ee),
            (en[95] = et))
          : (et = en[95]))
      let eV = et
      return (
        en[96] !== eV || en[97] !== em
          ? ((ea = (0, n.jsxs)("div", { className: "flex h-full flex-col", children: [em, eV] })),
            (en[96] = eV),
            (en[97] = em),
            (en[98] = ea))
          : (ea = en[98]),
        ea
      )
    }
    function w(e) {
      let t,
        a,
        r,
        s,
        c,
        u,
        d = (0, i.c)(14),
        { children: h, accessibleTitle: m, onClose: p } = e,
        f = (0, o.useId)()
      return (
        d[0] !== m || d[1] !== f
          ? ((t = (0, n.jsx)("span", { className: "sr-only", id: f, children: m })), (d[0] = m), (d[1] = f), (d[2] = t))
          : (t = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(g, { "aria-hidden": "true", className: "size-5" })), (d[3] = a))
          : (a = d[3]),
        d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)("span", {
              className: "sr-only",
              children: (0, n.jsx)(l.A, {
                id: "chatgpt.checkout.paypal_promo.close.label",
                defaultMessage: "Close",
                description: "Accessible label for the button that closes a dialog or fullscreen page",
              }),
            })),
            (d[4] = r))
          : (r = d[4]),
        d[5] !== p
          ? ((s = (0, n.jsx)("header", {
              className: "header-cZUKB5",
              children: (0, n.jsxs)("button", {
                className: "close-AGyTOl",
                type: "button",
                onClick: p,
                "data-testid": "checkout-page-back-button",
                children: [a, r],
              }),
            })),
            (d[5] = p),
            (d[6] = s))
          : (s = d[6]),
        d[7] !== h
          ? ((c = (0, n.jsx)("div", { className: "contents-SeAaKB", children: h })), (d[7] = h), (d[8] = c))
          : (c = d[8]),
        d[9] !== t || d[10] !== s || d[11] !== c || d[12] !== f
          ? ((u = (0, n.jsxs)("section", { className: "shell-vSjV3e", "aria-labelledby": f, children: [t, s, c] })),
            (d[9] = t),
            (d[10] = s),
            (d[11] = c),
            (d[12] = f),
            (d[13] = u))
          : (u = d[13]),
        u
      )
    }
    function P(e) {
      let t,
        a,
        r,
        o = (0, i.c)(8),
        { onContinue: s, sessionCountry: c, messageOnly: u } = e,
        d = void 0 !== u && u,
        m = "DE" === (void 0 === c ? "DE" : c) ? h.J.unsupportedBillingCountry : h.J.paypalBillingCountryMismatch
      ;(o[0] !== s
        ? ((t = {
            continueToCheckoutLink: (e) =>
              (0, n.jsx)("a", {
                className: "underline underline-offset-2",
                href: "/purchase/plus",
                onClick:
                  null == s
                    ? void 0
                    : (e) => {
                        ;(e.preventDefault(), s())
                      },
                children: e,
              }),
          }),
          (o[0] = s),
          (o[1] = t))
        : (t = o[1]),
        o[2] !== m || o[3] !== t
          ? ((a = (0, n.jsx)(l.A, { ...m, values: t })), (o[2] = m), (o[3] = t), (o[4] = a))
          : (a = o[4]))
      let p = a
      return (
        o[5] !== p || o[6] !== d
          ? ((r = d
              ? p
              : (0, n.jsx)("p", {
                  className:
                    "mt-2 text-[13px] leading-[18px] font-medium tracking-[-0.08px] text-[var(--text-status-error,var(--color-text-danger))]",
                  role: "alert",
                  children: p,
                })),
            (o[5] = p),
            (o[6] = d),
            (o[7] = r))
          : (r = o[7]),
        r
      )
    }
    function M(e) {
      let t,
        a,
        o,
        s,
        c = (0, i.c)(11),
        { errorCode: u, errorMessage: d, onContinue: h, onRetry: m, sessionCountry: p } = e
      return (
        c[0] !== u || c[1] !== d || c[2] !== h || c[3] !== p
          ? ((t =
              "invalid_billing_details" === u || "Billing country must match request country." === d
                ? (0, n.jsx)(P, { onContinue: h, sessionCountry: p })
                : (0, n.jsx)("p", {
                    role: "alert",
                    className: "text-sm",
                    children: (0, n.jsx)(l.A, {
                      id: "chatgpt.checkout.paypal_promo.start.error",
                      defaultMessage: "We couldn\u2019t start PayPal checkout. Please try again.",
                      description:
                        "Error on the PayPal Germany ChatGPT Plus offer page when a checkout session cannot be created. No payment has been submitted. Ask the customer to use the nearby Retry button; do not imply a payment failure.",
                    }),
                  })),
            (c[0] = u),
            (c[1] = d),
            (c[2] = h),
            (c[3] = p),
            (c[4] = t))
          : (t = c[4]),
        c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(l.A, {
              id: "chatgpt.checkout.paypal_promo.start.button.retry",
              defaultMessage: "Retry",
              description:
                "Short button label on the PayPal Germany ChatGPT Plus offer page after checkout could not start. Creates or resumes a checkout session for the same offer; does not submit a payment.",
            })),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== m
          ? ((o = (0, n.jsx)("div", {
              className: "flex",
              children: (0, n.jsx)(r.$, { color: "secondary", type: "button", onClick: m, children: a }),
            })),
            (c[6] = m),
            (c[7] = o))
          : (o = c[7]),
        c[8] !== t || c[9] !== o
          ? ((s = (0, n.jsxs)("div", { className: "flex flex-col gap-4", children: [t, o] })),
            (c[8] = t),
            (c[9] = o),
            (c[10] = s))
          : (s = c[10]),
        s
      )
    }
    function _(e) {
      let { icon: t, message: a } = e
      return (0, n.jsxs)(
        "li",
        {
          className:
            "flex items-center gap-3 text-base leading-6.5 font-normal tracking-[-0.32px] text-token-text-secondary",
          children: [
            (0, n.jsx)(t, { "aria-hidden": "true", className: "size-5 shrink-0 text-blue-400" }),
            (0, n.jsx)("span", { children: (0, n.jsx)(l.A, { ...a }) }),
          ],
        },
        a.id,
      )
    }
  },
  qvCw(e, t, a) {
    var n = a("Qgfj"),
      i = a("xUJc"),
      r = a("iE0s")
    let o = (0, n.YK)({
        paypalBusinessOfferName: {
          id: "CheckoutOfferTopBanner.paypalBusinessOfferName",
          defaultMessage: "PayPal Business offer",
          description:
            "Readable offer name after Offer applied in the ChatGPT Business checkout banner, shown when an active discount is paid through the PayPal-only checkout. PayPal and Business are product names. Keep this short label concise; no campaign identifier is shown.",
        },
        plusOneMonthFreeCheckoutOfferName: {
          id: "CheckoutOfferTopBanner.plusOneMonthFreeCheckoutOfferName",
          defaultMessage: "ChatGPT Plus - 1 Month Free Trial",
          description:
            "Offer name label shown in the checkout banner after 'Offer applied:'. Refers to a one-month free trial of the ChatGPT Plus subscription, where the first month is free. Keep it concise; this is a label, not a sentence.",
        },
        plusOneMonthFreeForGoCheckoutOfferName: {
          id: "CheckoutOfferTopBanner.plusOneMonthFreeForGoCheckoutOfferName",
          defaultMessage: "ChatGPT Plus - 1 Month Free Trial for Go Users",
          description:
            "Offer name label in the checkout banner for a ChatGPT Plus trial targeted to users currently subscribed to the ChatGPT Go plan. 'Go Users' means subscribers on the ChatGPT Go plan, not users of a feature or programming language. 'Go' and 'Plus' are plan names and should not be translated. Keep this label concise.",
        },
      }),
      s = o.plusOneMonthFreeCheckoutOfferName.defaultMessage,
      l = o.plusOneMonthFreeForGoCheckoutOfferName.defaultMessage
    a.d(
      t,
      {},
      {
        O_: function ({
          campaignId: e,
          discountName: t,
          intl: a,
          localizeCampaign: n,
          hasDiscount: c = !1,
          businessTrialMessages: u,
        }) {
          return c && "team-1-month-free" === e
            ? a.formatMessage(u?.summary ?? i.W.businessIntroductoryOffer)
            : c && (0, r.IW)(e)
              ? a.formatMessage(o.paypalBusinessOfferName)
              : (e && n
                  ? (e === r.ww
                      ? a.formatMessage(o.plusOneMonthFreeCheckoutOfferName)
                      : e === r.Ho
                        ? a.formatMessage(o.plusOneMonthFreeForGoCheckoutOfferName)
                        : null
                    )?.trim()
                  : void 0) ||
                t?.trim() ||
                (e ? (e === r.ww ? s : e === r.Ho ? l : null)?.trim() : void 0)
        },
      },
    )
  },
  k6JL(e, t, a) {
    var n = a("ABep"),
      i = a("QosV")
    a.d(
      t,
      {},
      {
        S: function (e) {
          let t,
            a,
            r,
            o = (0, i.c)(4),
            { className: s } = e,
            l = `${void 0 === s ? "h-5 w-5" : s} motion-safe:animate-spin`
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)("path", {
                  d: "M9.5 2.9375V5.5625M9.5 13.4375V16.0625M2.9375 9.5H5.5625M13.4375 9.5H16.0625",
                  stroke: "currentColor",
                  strokeWidth: "1.875",
                  strokeLinecap: "round",
                })),
                (a = (0, n.jsx)("path", {
                  d: "M4.86011 4.85961L6.71627 6.71577M12.2847 12.2842L14.1409 14.1404M4.86011 14.1404L6.71627 12.2842M12.2847 6.71577L14.1409 4.85961",
                  stroke: "currentColor",
                  strokeWidth: "1.875",
                  strokeLinecap: "round",
                })),
                (o[0] = t),
                (o[1] = a))
              : ((t = o[0]), (a = o[1])),
            o[2] !== l
              ? ((r = (0, n.jsxs)("svg", {
                  "aria-hidden": "true",
                  className: l,
                  width: "20",
                  height: "20",
                  viewBox: "0 0 19 19",
                  fill: "none",
                  children: [t, a],
                })),
                (o[2] = l),
                (o[3] = r))
              : (r = o[3]),
            r
          )
        },
      },
    )
  },
  M9bc(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      r = a("zd8w"),
      o = a("oyxz"),
      s = a("Oeow"),
      l = a("nGcY"),
      c = a("FBnY"),
      u = a("AWhs"),
      d = a("HZ87")
    function h(...e) {
      return e.filter(Boolean).join(" ")
    }
    function m(e) {
      let t,
        a,
        r,
        o,
        s,
        l = (0, i.c)(11),
        { errors: c, shouldShowErrors: u, className: d } = e
      l[0] !== c ? ((t = void 0 === c ? [] : c), (l[0] = c), (l[1] = t)) : (t = l[1])
      let m = t,
        f = void 0 !== u && u
      return (
        l[2] !== d ? ((a = h("mt-1 text-[0.93rem] text-[#df1b41]", d)), (l[2] = d), (l[3] = a)) : (a = l[3]),
        l[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { transition: "height 0.35s ease 0s" }), (l[4] = r))
          : (r = l[4]),
        l[5] !== m || l[6] !== f ? ((o = f && m.map(p)), (l[5] = m), (l[6] = f), (l[7] = o)) : (o = l[7]),
        l[8] !== a || l[9] !== o
          ? ((s = (0, n.jsx)("div", { className: a, style: r, children: o })), (l[8] = a), (l[9] = o), (l[10] = s))
          : (s = l[10]),
        s
      )
    }
    function p(e) {
      return (0, n.jsx)("p", { children: e }, e)
    }
    function f(e) {
      let t,
        a,
        r = (0, i.c)(6),
        { children: o, hidden: s, hideWhenEmpty: l } = e,
        c = void 0 !== l && l && "empty:hidden"
      return (
        r[0] !== c ? ((t = h(c)), (r[0] = c), (r[1] = t)) : (t = r[1]),
        r[2] !== o || r[3] !== s || r[4] !== t
          ? ((a = (0, n.jsx)("div", { className: t, hidden: s, children: o })),
            (r[2] = o),
            (r[3] = s),
            (r[4] = t),
            (r[5] = a))
          : (a = r[5]),
        a
      )
    }
    function g({
      modalCredit: e,
      inlineCredit: t = !1,
      standaloneCredit: a,
      walletOptional: n,
      payPalPromo: i,
      premiumBusiness: r,
      proUsageTiers: o = !1,
    }) {
      return h(
        "w-full",
        e
          ? t
            ? "rounded-full px-3 py-0 font-medium tracking-[-0.08px]"
            : "rounded-full px-4 py-0 font-medium tracking-normal"
          : "p-4 text-base",
        e && (t ? "h-9 min-w-[77px] text-[13px] leading-[18px]" : "h-10.5 text-sm/5"),
        n && "h-[61px] rounded-full text-sm",
        i && "h-14 rounded-full",
        (r || o || (a && !e)) && "h-[61px] rounded-full",
        a && !e && "gap-2",
      )
    }
    function C(e) {
      let t,
        a,
        r,
        o,
        s = (0, i.c)(11),
        { children: l, disclosure: c, premiumBusiness: u, wallet: d, proUsageTiers: m } = e,
        p = void 0 !== u && u,
        f = p
          ? "py-8 [&_li>div]:gap-3 [&_li>div_span]:text-[14px]!"
          : (void 0 !== d && d) || (void 0 !== m && m)
            ? "px-[30px] py-8 [&_li>div]:gap-3 [&_li>div_span]:text-[14px]!"
            : "p-8"
      return (
        s[0] !== f
          ? ((t = h(
              "border-[var(--checkout-border-default,var(--border-default))] bg-[var(--checkout-bg-primary,var(--bg-primary))] dark:bg-[var(--checkout-bg-secondary,var(--bg-secondary))] rounded-4xl border shadow-[0_4px_25px_-5px_rgba(232,235,255,0.57)] dark:shadow-[0_4px_25px_-5px_rgb(8_12_35_/_0.6)]",
              f,
            )),
            (s[0] = f),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== p ? ((a = p ? { paddingInline: "29px" } : void 0), (s[2] = p), (s[3] = a)) : (a = s[3]),
        s[4] !== c
          ? ((r = null != c ? (0, n.jsx)("div", { className: "mt-5", children: c }) : null), (s[4] = c), (s[5] = r))
          : (r = s[5]),
        s[6] !== l || s[7] !== t || s[8] !== a || s[9] !== r
          ? ((o = (0, n.jsxs)("div", {
              "data-checkout-part": "summary-card",
              className: t,
              style: a,
              children: [l, r],
            })),
            (s[6] = l),
            (s[7] = t),
            (s[8] = a),
            (s[9] = r),
            (s[10] = o))
          : (o = s[10]),
        o
      )
    }
    function b(e) {
      let t,
        a,
        r = (0, i.c)(8),
        { children: o, className: s, disableHorizontalPadding: l, variant: c } = e,
        u = void 0 === c ? "default" : c,
        d = !(void 0 !== l && l) && "px-2",
        m =
          "bodyEmphasized" === u
            ? "text-body-emphasized"
            : "standaloneCredit" === u
              ? "text-[18px] leading-6.5 font-semibold text-token-text-primary"
              : "text-[18px] leading-6 font-medium"
      return (
        r[0] !== s || r[1] !== d || r[2] !== m
          ? ((t = h(d, m, s)), (r[0] = s), (r[1] = d), (r[2] = m), (r[3] = t))
          : (t = r[3]),
        r[4] !== o || r[5] !== t || r[6] !== u
          ? ((a = (0, n.jsx)("h3", { "data-checkout-heading": u, className: t, children: o })),
            (r[4] = o),
            (r[5] = t),
            (r[6] = u),
            (r[7] = a))
          : (a = r[7]),
        a
      )
    }
    let x = (0, r.forwardRef)(function (e, t) {
      let a,
        r,
        o,
        s,
        l,
        c,
        u = (0, i.c)(14)
      u[0] !== e
        ? (({ children: a, className: r, hidden: o, ...s } = e),
          (u[0] = e),
          (u[1] = a),
          (u[2] = r),
          (u[3] = o),
          (u[4] = s))
        : ((a = u[1]), (r = u[2]), (o = u[3]), (s = u[4]))
      let d = o && "hidden!"
      return (
        u[5] !== r || u[6] !== d
          ? ((l = h("flex flex-col gap-4", d, r)), (u[5] = r), (u[6] = d), (u[7] = l))
          : (l = u[7]),
        u[8] !== a || u[9] !== o || u[10] !== s || u[11] !== t || u[12] !== l
          ? ((c = (0, n.jsx)("div", { ...s, ref: t, className: l, hidden: o, children: a })),
            (u[8] = a),
            (u[9] = o),
            (u[10] = s),
            (u[11] = t),
            (u[12] = l),
            (u[13] = c))
          : (c = u[13]),
        c
      )
    })
    function y(e) {
      let t,
        a,
        r = (0, i.c)(7),
        { children: l, expressCheckout: c, hideTitle: u, standaloneCredit: d } = e,
        h = void 0 !== c && c,
        m = void 0 !== u && u,
        p = void 0 !== d && d
      return (
        r[0] !== h || r[1] !== m || r[2] !== p
          ? ((t =
              !m &&
              (0, n.jsx)(b, {
                variant: p ? "standaloneCredit" : "default",
                disableHorizontalPadding: p,
                children: (0, n.jsx)(o.A, { ...(p || h ? s.J.expressCheckoutTitle : s.J.paymentMethodTitle) }),
              })),
            (r[0] = h),
            (r[1] = m),
            (r[2] = p),
            (r[3] = t))
          : (t = r[3]),
        r[4] !== l || r[5] !== t
          ? ((a = (0, n.jsxs)(x, { children: [t, l] })), (r[4] = l), (r[5] = t), (r[6] = a))
          : (a = r[6]),
        a
      )
    }
    function k(e) {
      let t,
        a,
        r,
        l = (0, i.c)(9),
        { children: c, followsPayment: u, paypalPromo: d, standaloneCredit: h } = e,
        m = void 0 !== h && h,
        p = m ? "gap-3" : void 0,
        f = m ? "standaloneCredit" : "default",
        g = void 0 !== d && d ? "px-0! text-base leading-6.5 font-semibold" : void 0 !== u && u ? "pt-4" : void 0
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(o.A, { ...s.J.billingAddressTitle })), (l[0] = t))
          : (t = l[0]),
        l[1] !== m || l[2] !== f || l[3] !== g
          ? ((a = (0, n.jsx)(b, { variant: f, disableHorizontalPadding: m, className: g, children: t })),
            (l[1] = m),
            (l[2] = f),
            (l[3] = g),
            (l[4] = a))
          : (a = l[4]),
        l[5] !== c || l[6] !== p || l[7] !== a
          ? ((r = (0, n.jsxs)(x, { className: p, children: [a, c] })), (l[5] = c), (l[6] = p), (l[7] = a), (l[8] = r))
          : (r = l[8]),
        r
      )
    }
    function v(e) {
      let t,
        a = (0, i.c)(2),
        { children: r } = e
      return (
        a[0] !== r
          ? ((t = (0, n.jsx)("h2", { className: "mb-3 text-[28px] leading-8.5 font-medium", children: r })),
            (a[0] = r),
            (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    function w(e) {
      let t,
        a,
        r,
        o,
        s = (0, i.c)(7)
      s[0] !== e ? ((t = void 0 === e ? {} : e), (s[0] = e), (s[1] = t)) : (t = s[1])
      let { className: l } = t
      return (
        s[2] !== l ? ((a = h("w-full py-3", l)), (s[2] = l), (s[3] = a)) : (a = s[3]),
        s[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)("div", {
              className: "h-px w-full border-t border-[var(--checkout-border-default,var(--border-default))]",
            })),
            (s[4] = r))
          : (r = s[4]),
        s[5] !== a
          ? ((o = (0, n.jsx)("div", { "data-checkout-part": "divider", className: a, children: r })),
            (s[5] = a),
            (s[6] = o))
          : (o = s[6]),
        o
      )
    }
    function P(e) {
      let t,
        a,
        r,
        o,
        s,
        l = (0, i.c)(10)
      return (
        l[0] !== e
          ? (({ children: t, className: a, ...r } = e), (l[0] = e), (l[1] = t), (l[2] = a), (l[3] = r))
          : ((t = l[1]), (a = l[2]), (r = l[3])),
        l[4] !== a
          ? ((o = h(
              "pointer-events-auto relative inline-flex min-h-9 w-full shrink-0 items-center justify-center gap-1 rounded-full border border-transparent bg-clip-padding p-4 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              u.A.button,
              a,
            )),
            (l[4] = a),
            (l[5] = o))
          : (o = l[5]),
        l[6] !== t || l[7] !== r || l[8] !== o
          ? ((s = (0, n.jsx)("button", { ...r, className: o, children: t })),
            (l[6] = t),
            (l[7] = r),
            (l[8] = o),
            (l[9] = s))
          : (s = l[9]),
        s
      )
    }
    function M(e) {
      let t,
        a,
        r,
        o,
        s,
        u = (0, i.c)(12),
        { children: d, icon: m, premiumBusiness: p } = e,
        f = void 0 !== p && p,
        g = f ? "gap-2 tracking-[-0.4px]" : "gap-3"
      return (
        u[0] !== g
          ? ((t = h(
              c.A.banner,
              "relative mt-5 flex items-center overflow-hidden rounded-2xl p-4 text-sm",
              g,
              "bg-blue-400/[.09] text-blue-500 dark:bg-blue-100/20 dark:text-blue-100",
            )),
            (u[0] = g),
            (u[1] = t))
          : (t = u[1]),
        u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("div", {
              "aria-hidden": !0,
              className: h(c.A.shimmer, "pointer-events-none absolute inset-0"),
            })),
            (u[2] = a))
          : (a = u[2]),
        u[3] !== m || u[4] !== f
          ? ((r = m ?? (0, n.jsx)(l.A, { "aria-hidden": !0, className: f ? "size-6" : void 0 })),
            (u[3] = m),
            (u[4] = f),
            (u[5] = r))
          : (r = u[5]),
        u[6] !== r ? ((o = (0, n.jsx)("div", { children: r })), (u[6] = r), (u[7] = o)) : (o = u[7]),
        u[8] !== d || u[9] !== t || u[10] !== o
          ? ((s = (0, n.jsxs)("div", { "data-checkout-part": "savings", className: t, children: [a, o, d] })),
            (u[8] = d),
            (u[9] = t),
            (u[10] = o),
            (u[11] = s))
          : (s = u[11]),
        s
      )
    }
    a.d(
      t,
      {
        $S: () => k,
        Hp: () => P,
        PF: () => C,
        T3: () => M,
        Ue: () => w,
        WD: () => m,
        Zj: () => v,
        e5: () => b,
        gg: () => g,
        hc: () => f,
        qQ: () => y,
        vf: () => d.v,
      },
      { wQ: x },
    )
  },
  IuSx(e, t, a) {
    var n = a("zd8w"),
      i = a("OEMP")
    let r = (0, n.createContext)(null),
      o = {
        abortController: null,
        celebrationBannerText: null,
        isRunningServerUpdate: !1,
        checkoutSessionUpdateError: null,
      },
      s = (0, i.vt)((e) => ({
        ...o,
        activeCheckoutSessionId: null,
        businessCheckoutUpdates: {},
        setActiveCheckoutSessionId: (t) =>
          e((e) => ({
            activeCheckoutSessionId: t,
            isReactivationMemberRemovalRequired: !1,
            ...o,
            ...(null == t ? {} : e.businessCheckoutUpdates[t]),
          })),
        setBusinessCheckoutUpdateState: (t, a) =>
          e((e) => {
            let n = { ...o, ...e.businessCheckoutUpdates[t], ...a }
            return {
              businessCheckoutUpdates: { ...e.businessCheckoutUpdates, [t]: n },
              ...(e.activeCheckoutSessionId === t ? n : {}),
            }
          }),
        setAbortController: (t) => e({ abortController: t }),
        codexAutoTopUpCheckoutId: null,
        codexAutoTopUpEnabled: null,
        setCodexAutoTopUpEnabled: (t) => e({ codexAutoTopUpEnabled: t }),
        codexAutoTopUpMonthlyLimit: null,
        codexAutoTopUpMonthlyLimitValid: null,
        codexAutoTopUpConfigurationUnavailable: !1,
        codexAutoTopUpEnrollInDiscount: null,
        codexCreditPurchaseQuantityValid: null,
        codexCreditPayableQuote: null,
        setCodexCreditPurchaseQuantityValid: (t) => e({ codexCreditPurchaseQuantityValid: t }),
        annualTrialPreviewPending: !1,
        setAnnualTrialPreviewPending: (t) => e({ annualTrialPreviewPending: t }),
        annualTrialSummarySnapshot: null,
        setAnnualTrialSummarySnapshot: (t) => e({ annualTrialSummarySnapshot: t }),
        annualTrialRenewalPreviewOverride: null,
        setAnnualTrialRenewalPreviewOverride: (t) => e({ annualTrialRenewalPreviewOverride: t }),
        isPlanSelectionPending: !1,
        isReactivationMemberRemovalRequired: !1,
        setIsReactivationMemberRemovalRequired: (t) => e({ isReactivationMemberRemovalRequired: t }),
        setIsRunningServerUpdate: (t) => e({ isRunningServerUpdate: t }),
        setIsPlanSelectionPending: (t) => e({ isPlanSelectionPending: t }),
        dataResidencyRenewalPortalContainer: null,
        setDataResidencyRenewalPortalContainer: (t) => e({ dataResidencyRenewalPortalContainer: t }),
        subscribeButtonContainer: null,
        setSubscribeButtonContainer: (t) => e({ subscribeButtonContainer: t }),
        setCelebrationBannerText: (t) => e({ celebrationBannerText: t }),
        setCheckoutSessionUpdateError: (t) => e({ checkoutSessionUpdateError: t }),
      }))
    a.d(t, {}, { el: r, jg: s })
  },
  UjzL(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      r = a("zd8w"),
      o = a("Wf1j"),
      s = a("oyxz"),
      l = a("gviT")
    a.d(
      t,
      {},
      {
        t: (e) => {
          let t,
            a,
            c,
            u,
            d,
            h,
            m,
            p,
            f = (0, i.c)(21),
            { previousPrice: g, currentCreditPrice: C } = e,
            b = (0, o.A)(),
            x = (0, r.useRef)(null)
          ;(f[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                ;(x.current?.focus(), x.current?.scrollIntoView({ block: "start", behavior: "smooth" }))
              }),
              (f[0] = t))
            : (t = f[0]),
            f[1] !== g ? ((a = [g]), (f[1] = g), (f[2] = a)) : (a = f[2]),
            (0, r.useEffect)(t, a))
          let y =
              null != C &&
              null != g &&
              (C.invoiceTotalMinorUnits !== g.invoiceTotalMinorUnits || C.currency !== g.currency),
            k = null != C && null != g && (C.amountDueMinorUnits !== g.amountDueMinorUnits || C.currency !== g.currency)
          f[3] !== C || f[4] !== b
            ? ((c =
                null != C
                  ? (0, l.ej)({ amountMinorUnits: C.invoiceTotalMinorUnits, currency: C.currency, locale: b.locale })
                  : null),
              (f[3] = C),
              (f[4] = b),
              (f[5] = c))
            : (c = f[5])
          let v = c
          return (
            f[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, n.jsx)("h2", {
                  id: "credit-price-review-title",
                  className: "text-heading-3",
                  children: (0, n.jsx)(s.A, {
                    id: "StandaloneCreditCheckout.priceReview.title",
                    defaultMessage: "Review your updated total",
                    description:
                      "Heading on the standalone credit checkout price-change notice. It asks the customer to review the new total before explicitly confirming the purchase.",
                  }),
                })),
                (d = (0, n.jsx)("p", {
                  children: (0, n.jsx)(s.A, {
                    id: "StandaloneCreditCheckout.priceReview.description",
                    defaultMessage: "Review the updated amounts below before confirming your purchase.",
                    description:
                      "Body of the standalone credit checkout price-change notice. The purchase needs a new explicit confirmation after the customer reviews the previous and updated total shown below.",
                  }),
                })),
                (f[6] = u),
                (f[7] = d))
              : ((u = f[6]), (d = f[7])),
            f[8] !== v || f[9] !== y || f[10] !== b || f[11] !== g
              ? ((h =
                  y &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex justify-between gap-4",
                        children: [
                          (0, n.jsx)("dt", {
                            children: (0, n.jsx)(s.A, {
                              id: "StandaloneCreditCheckout.priceReview.previousTotal",
                              defaultMessage: "Previous purchase total",
                              description:
                                "Label for the purchase total the customer previously approved in the standalone credit checkout price-change notice. This amount includes tax and discounts, before Wallet balance is applied.",
                            }),
                          }),
                          (0, n.jsx)("dd", {
                            children: (0, l.ej)({
                              amountMinorUnits: g.invoiceTotalMinorUnits,
                              currency: g.currency,
                              locale: b.locale,
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex justify-between gap-4 font-semibold",
                        children: [
                          (0, n.jsx)("dt", {
                            children: (0, n.jsx)(s.A, {
                              id: "StandaloneCreditCheckout.priceReview.updatedTotal",
                              defaultMessage: "New purchase total",
                              description:
                                "Label for the current purchase total in the standalone credit checkout price-change notice. This amount includes tax and discounts, before Wallet balance is applied, and matches the Confirm button.",
                            }),
                          }),
                          (0, n.jsx)("dd", { children: v }),
                        ],
                      }),
                    ],
                  })),
                (f[8] = v),
                (f[9] = y),
                (f[10] = b),
                (f[11] = g),
                (f[12] = h))
              : (h = f[12]),
            f[13] !== C || f[14] !== k || f[15] !== b || f[16] !== g
              ? ((m =
                  k &&
                  null != C &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex justify-between gap-4",
                        children: [
                          (0, n.jsx)("dt", {
                            children: (0, n.jsx)(s.A, {
                              id: "StandaloneCreditCheckout.priceReview.previousAmountDue",
                              defaultMessage: "Previous amount due",
                              description:
                                "Label for the amount previously approved to be paid after Wallet balance was applied, in the standalone credit checkout price-change notice.",
                            }),
                          }),
                          (0, n.jsx)("dd", {
                            children: (0, l.ej)({
                              amountMinorUnits: g.amountDueMinorUnits,
                              currency: g.currency,
                              locale: b.locale,
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex justify-between gap-4 font-semibold",
                        children: [
                          (0, n.jsx)("dt", {
                            children: (0, n.jsx)(s.A, {
                              id: "StandaloneCreditCheckout.priceReview.updatedAmountDue",
                              defaultMessage: "New amount due",
                              description:
                                "Label for the current amount to be paid after Wallet balance is applied, in the standalone credit checkout price-change notice. This matches the updated amount due today in the order summary.",
                            }),
                          }),
                          (0, n.jsx)("dd", {
                            children: (0, l.ej)({
                              amountMinorUnits: C.amountDueMinorUnits,
                              currency: C.currency,
                              locale: b.locale,
                            }),
                          }),
                        ],
                      }),
                    ],
                  })),
                (f[13] = C),
                (f[14] = k),
                (f[15] = b),
                (f[16] = g),
                (f[17] = m))
              : (m = f[17]),
            f[18] !== h || f[19] !== m
              ? ((p = (0, n.jsxs)("section", {
                  ref: x,
                  tabIndex: -1,
                  role: "status",
                  className:
                    "bg-token-main-surface-secondary border-token-border-default mb-6 flex flex-col gap-3 rounded-2xl border p-5",
                  "aria-labelledby": "credit-price-review-title",
                  children: [u, d, (0, n.jsxs)("dl", { className: "flex flex-col gap-2", children: [h, m] })],
                })),
                (f[18] = h),
                (f[19] = m),
                (f[20] = p))
              : (p = f[20]),
            p
          )
        },
      },
    )
  },
  R6hv(e, t, a) {
    function n(e) {
      let t = new URL(e)
      return (
        t.searchParams.delete("credit_modal"),
        t.searchParams.delete("credits_modal"),
        { cancelUrl: t.toString(), returnLocation: { hash: t.hash, pathname: t.pathname, search: t.search } }
      )
    }
    function i(e) {
      let t = e.split(/[?#]/u, 1)[0] ?? e
      return (
        e.startsWith("/") &&
        !e.startsWith("//") &&
        !t.includes("\\") &&
        !/[\t\r\n]/u.test(t) &&
        !/%(?:5c|09|0a|0d)/iu.test(t)
      )
    }
    a.d(
      t,
      {},
      {
        Ou: n,
        j4: function (e, t) {
          if (null == e || !i(e)) return t
          let { returnLocation: a } = n(new URL(e, "https://chatgpt.com").href),
            r = a.pathname + a.search + a.hash
          return i(r) ? r : t
        },
        oz: i,
      },
    )
  },
  MACT(e, t, a) {
    var n = a("B2b6"),
      i = a("gviT")
    a.d(
      t,
      {},
      {
        HS: function (e, t, a, n) {
          return {
            previousCreditPrice: null != t && t.checkoutSessionId === e ? t : null,
            creditPriceRefreshRequired: a === e,
            expiredCreditCheckout: null != n && n.checkoutSessionId === e ? n.action : null,
          }
        },
        LQ: function (e) {
          return e.formatMessage({
            id: "chatgpt.inline_credit_checkout.review.button.buy_now",
            defaultMessage: "Buy now",
            description:
              "Payment confirmation button in inline credit checkout. Charges the total shown in the review summary using the selected payment method.",
          })
        },
        Ni: function (e, t) {
          return {
            billingDetails: e.billing_details,
            quantity: (t?.lineItems ?? e.checkout_state?.lineItems)?.find((e) => null == e.recurring)?.quantity,
          }
        },
        e1: async function ({
          checkoutSessionId: e,
          quantity: t,
          paymentMethodId: a,
          quote: i,
          signal: r,
          assertCurrent: o,
          prepareQuantity: s,
          getBilling: l,
          canReviewWithoutBilling: c,
          updateBilling: u,
          getCheckout: d,
          createError: h,
        }) {
          let m = () => {
            ;(r.throwIfAborted(), o())
          }
          m()
          let p = await s()
          if ((m(), "success" !== p)) throw h()
          let f = l(),
            g = f?.complete ? f : null
          if (null == g && !c?.(d())) throw h()
          ;(await i.request(JSON.stringify(["inline-review", e, a, g?.value, t]), async (e) => {
            ;(m(), null != g && (await u(g, AbortSignal.any([e, r]))))
          }),
            m())
          let C = i.getSnapshot()
          if (null != C.error) throw C.error
          let b = d()
          if (!C.ready || (null == g && !c?.(b))) throw h()
          return { quote: C, price: (0, n.Qk)(b), quantity: b.lineItems[0]?.quantity ?? null, paymentMethodId: a }
        },
        nk: function (e, t, a, i) {
          let r = (0, n.Qk)(t)
          return (
            r.currency === e.price.currency &&
            r.invoiceTotalMinorUnits === e.price.invoiceTotalMinorUnits &&
            r.amountDueMinorUnits === e.price.amountDueMinorUnits &&
            (t.lineItems[0]?.quantity ?? null) === e.quantity &&
            (null == a || a === e.quantity) &&
            (null == i || Date.parse(i) > Date.now())
          )
        },
        ol: function (e, t) {
          return e.formatMessage(
            {
              id: "StandaloneCreditCheckout.priceReview.confirmButton",
              defaultMessage: "Confirm {total} purchase",
              description:
                "Purchase button in standalone credit checkout after a price change. Clicking explicitly approves the new purchase total. The {total} placeholder is the full localized amount with currency, before Wallet balance is applied.",
            },
            {
              total: (0, i.ej)({ amountMinorUnits: t.invoiceTotalMinorUnits, currency: t.currency, locale: e.locale }),
            },
          )
        },
        pC: function (e) {
          if ("custom_checkout_session" !== e.tag || "expired" !== e.status || "unpaid" !== e.payment_status) return !1
          let t = e.credit_payment_state
          return (
            null == t ||
            ("unpaid" === t.payment_status &&
              (null == t.payment_intent_status ||
                "requires_payment_method" === t.payment_intent_status ||
                "canceled" === t.payment_intent_status))
          )
        },
        pS: function (e) {
          return (
            (!("tax" in e) ||
              (e.tax?.status === "ready" &&
                "shippingRate" in e.total &&
                e.total.shippingRate?.minorUnitsAmount === 0)) &&
            e.total.taxExclusive?.minorUnitsAmount === 0 &&
            0 === e.total.taxInclusive.minorUnitsAmount &&
            e.taxAmounts?.every((e) => 0 === e.minorUnitsAmount) === !0 &&
            e.total.appliedBalance?.minorUnitsAmount === 0 &&
            e.total.subtotal.minorUnitsAmount - e.total.discount.minorUnitsAmount === e.total.total.minorUnitsAmount
          )
        },
        tv: function (e, t) {
          return "price_changed" === e.type
            ? { price: { ...e.previousPrice, checkoutSessionId: e.checkoutSessionId }, expiry: null }
            : "credit_checkout_expired" === e.type
              ? { price: null, expiry: { checkoutSessionId: t, action: e.requiresRestart ? "restart" : "status" } }
              : null
        },
      },
    )
  },
  Uxls(e, t, a) {
    var n = a("ABep"),
      i = a("Wf1j"),
      r = a("oyxz"),
      o = a("Qgfj"),
      s = a("OEMP"),
      l = a("IuSx"),
      c = a("pjce"),
      u = a("aWaJ")
    let d = (0, o.YK)({
      rateLimitResetLineItem: {
        id: "chatgpt.codex.rate_limit_reset.checkout.summary.line_item",
        defaultMessage: "{quantity} \xd7 Usage limit reset",
        description:
          "Concise order-summary line item shown to a Codex customer purchasing an immediate usage limit reset. The {quantity} placeholder is the localized quantity from the checkout line item; the multiplication sign separates that quantity from the product name Usage limit reset.",
      },
      inlineReviewDiscount: {
        id: "chatgpt.inline_credit_checkout.summary.discount.label",
        defaultMessage: "{percentOff, number, ::percent} discount",
        description:
          "Label for the itemized monetary discount on Inline credit checkout Review. The rate is the percentage confirmed by the issued checkout.",
      },
      creditVolumeDiscountPercentage: {
        id: "StandaloneCreditCheckout.creditVolumeDiscountPercentage",
        defaultMessage: "{percentOff, number, ::percent} off",
        description:
          "Short discount-row label in the standalone personal or workspace credit checkout order summary. It describes the one-time volume discount actually applied to the selected credit purchase. Placeholder {percentOff} is the numeric discount rate, formatted as a localized percentage. The purchased credit quantity is already shown in the subtotal row and is intentionally omitted from this label.",
      },
      orderSummary: {
        id: "StandaloneCreditCheckout.orderSummary",
        defaultMessage: "Order summary",
        description: "Heading above the subtotal, tax, and total rows in standalone credit checkout.",
      },
      totalDueToday: {
        id: "StandaloneCreditCheckout.totalDueToday",
        defaultMessage: "Total due today",
        description: "Label for the final amount due immediately in the standalone credit checkout modal.",
      },
    })
    a.d(
      t,
      {},
      {
        h: function ({
          checkout: e,
          renderInvoice: t,
          creditDiscountOffer: a,
          hasCreditDiscountOffer: o = !1,
          itemizeInlineDiscount: h = !1,
          isRateLimitResetCheckout: m = !1,
          presentation: p = "page",
          isSubmitting: f = !1,
          isTaxQuotePending: g = !1,
        }) {
          let C = (0, i.A)(),
            b = "inline" === p,
            x = "page" !== p,
            y = (0, s.Pj)(l.jg, (e) => e.codexAutoTopUpEnabled),
            k = (0, s.Pj)(l.jg, (e) => e.codexAutoTopUpEnrollInDiscount),
            v = e.lineItems[0]?.quantity ?? 0,
            w = (0, c.qi)(a?.auto_reload?.tiers, v),
            P = (0, c.qi)(a?.one_time.tiers, v),
            M = y && k ? w : P,
            _ = h ? (0, c.HM)(e, M?.percent_off) : e.discountAmounts?.[0]?.percentOff,
            A = !0 === y && !0 === k && null != _ && null != w && w.percent_off === _,
            j = A && w.percent_off > (P?.percent_off ?? 0),
            L = m
              ? C.formatMessage(d.rateLimitResetLineItem, { quantity: C.formatNumber(v) })
              : C.formatMessage((0, u.w)(), { credits: C.formatNumber(v) })
          return (0, n.jsxs)("section", {
            className: b ? "flex flex-col px-2 pt-1" : x ? "flex flex-col" : "flex flex-col gap-4",
            children: [
              x
                ? null
                : (0, n.jsx)("h2", {
                    className: "text-[18px] leading-6.5 font-semibold text-token-text-primary",
                    children: C.formatMessage(d.orderSummary),
                  }),
              t({
                className: "modal" === p ? "[&>div]:gap-1.5" : void 0,
                collapseDiscountsIntoSubtotal: b && !h,
                discountAmountClassName:
                  ("modal" === p || h) && o
                    ? "text-[color:var(--text-accent)] font-normal"
                    : j
                      ? "bg-[var(--theme-purple-background)] text-[var(--theme-purple-text)] ms-auto inline-flex min-h-5 grow-0! items-center rounded-xl px-[5px] font-normal motion-safe:starting:bg-transparent motion-safe:starting:px-0 motion-safe:starting:text-token-text-secondary motion-safe:transition-[background-color,color,padding] motion-safe:delay-[800ms] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
                      : o
                        ? "text-green-600 font-normal dark:text-green-700"
                        : void 0,
                discountTitleOverride:
                  o && null != _
                    ? C.formatMessage(h ? d.inlineReviewDiscount : d.creditVolumeDiscountPercentage, {
                        percentOff: _ / 100,
                      })
                    : void 0,
                discountSubtitleOverride:
                  A && !h
                    ? (0, n.jsx)("span", {
                        className:
                          "modal" === p
                            ? "mt-0.5 block text-xs leading-4 font-normal tracking-normal text-token-text-tertiary"
                            : void 0,
                        children: (0, n.jsx)(r.A, {
                          id: "StandaloneCreditCheckout.futureAutoReloadDiscountSubtitle",
                          defaultMessage: "Discount also applies to future auto-reloads",
                          description:
                            "Short, reassuring, plain-text subtitle beneath the applied discount in the order summary for a personal or workspace credit purchase. Shown only after the purchaser enables discounted auto-reload and its discount matches the current purchase; keep concise for limited space. No placeholders, HTML, or Markdown.",
                        }),
                      })
                    : o
                      ? ""
                      : void 0,
                isTaxQuoteLoading: x && !f && g,
                forceSummaryLoading: (!x || (!f && !g)) && void 0,
                spacingVariant: b ? "inlineCredit" : "standaloneCredit",
                subtotalTitle: b
                  ? C.formatMessage({
                      id: "chatgpt.inline_credit_checkout.summary.subtotal.label",
                      defaultMessage: "Subtotal",
                      description:
                        "Short label for the selected credit purchase amount after discounts and before tax in the inline checkout summary. The credit quantity and discount are shown in the amount selector above.",
                    })
                  : L,
                totalClassName: b
                  ? "text-token-text-primary! text-footnote-medium!"
                  : "modal" === p
                    ? "text-token-text-primary! text-sm leading-5 font-semibold!"
                    : void 0,
                totalTitleOverride: b
                  ? C.formatMessage({
                      id: "chatgpt.inline_credit_checkout.summary.total.label",
                      defaultMessage: "Total due",
                      description:
                        "Short label for the final amount charged now for the selected credits in inline checkout, including tax and any balance adjustments.",
                    })
                  : "modal" === p
                    ? C.formatMessage(d.totalDueToday)
                    : void 0,
              }),
            ],
          })
        },
      },
    )
  },
  eQqZ(e, t, a) {
    var n = a("ABep")
    a.d(
      t,
      {},
      {
        G: (e) =>
          (0, n.jsx)("svg", {
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            ...e,
            children: (0, n.jsx)("path", {
              d: "M5.63603 5.63603C6.02656 5.24551 6.65972 5.24551 7.05025 5.63603L12 10.5858L16.9497 5.63603C17.3403 5.24551 17.9734 5.24551 18.364 5.63603C18.7545 6.02656 18.7545 6.65972 18.364 7.05025L13.4142 12L18.364 16.9497C18.7545 17.3403 18.7545 17.9734 18.364 18.364C17.9734 18.7545 17.3403 18.7545 16.9497 18.364L12 13.4142L7.05025 18.364C6.65972 18.7545 6.02656 18.7545 5.63603 18.364C5.24551 17.9734 5.24551 17.3403 5.63603 16.9497L10.5858 12L5.63603 7.05025C5.24551 6.65972 5.24551 6.02656 5.63603 5.63603Z",
              fill: "currentColor",
            }),
          }),
      },
    )
  },
  w6NB(e, t, a) {
    var n = a("c2F9"),
      i = a("xLHD"),
      r = a("DBCl"),
      o = a("Kwur"),
      s = a("Qg7S"),
      l = a("OMIV")
    a("eShZ")
    var c = a("aTCm")
    function u(e) {
      return e.recurring?.trial != null || (0, i.NQ)(e, {}).isFreeTrial
    }
    function d(e, t) {
      if (
        null == t ||
        t.checkout_session_id !== e.requested.checkout_session_id ||
        t.processor_entity !== e.requested.processor_entity ||
        t.checkout_provider !== e.provider ||
        t.plan_name !== e.requested.plan_name ||
        !(
          "open" === t.status &&
          "unpaid" === t.payment_status &&
          ("stripe" === t.checkout_provider || "open_ai" === t.checkout_provider) &&
          (null == t.expires_at || Date.parse(t.expires_at) > Date.now()) &&
          ("chatgptteamplan" === t.plan_name || "self_serve_business_prolite" === t.plan_name) &&
          (null == t.checkout_kind || "standard" === t.checkout_kind) &&
          (!("business_checkout_targets_existing_workspace" in t) ||
            !0 !== t.business_checkout_targets_existing_workspace) &&
          null == t.reactivation_member_management &&
          null == t.reactivation_minimum_seat_quantities &&
          null == t.promo_campaign &&
          null == t.scheduled_discount_preview
        )
      )
        throw Error("Business checkout changed")
    }
    function h(e, t, a) {
      if (
        (d(e, t),
        a.id !== e.requested.checkout_session_id ||
          a.currency !== e.currency ||
          (a.discountAmounts?.length ?? 0) > 0 ||
          u(a) ||
          (a.total?.total?.minorUnitsAmount ?? 0) <= 0)
      )
        throw Error("Business quote changed")
      return (function (e, t, a) {
        let i = (0, n.c8)(e),
          r = t.lineItems.filter((e) => null != e.recurring && !("lineRole" in e && "initial_invoice" === e.lineRole))
        if (
          0 === r.length ||
          (null == i && 1 !== r.length) ||
          r.some((e) => {
            if (
              (e.recurring?.interval !== "month" && e.recurring?.interval !== "year") ||
              null == e.quantity ||
              !Number.isSafeInteger(e.quantity) ||
              e.quantity < 1
            )
              return !0
            let t = null == e.id ? void 0 : i?.[e.id]?.seat_type
            return null != i && "default" !== t && "prolite" !== t
          }) ||
          1 !== new Set(r.map((e) => e.recurring?.interval)).size
        )
          return null
        let o = (0, n.n8)(r, i)
        return null == o ||
          (null == a.seat_quantities && o.premiumQuantity > 0) ||
          !Number.isSafeInteger(o.standardQuantity) ||
          !Number.isSafeInteger(o.premiumQuantity) ||
          o.standardQuantity < 0 ||
          o.premiumQuantity < 0 ||
          o.standardQuantity + o.premiumQuantity < 1
          ? null
          : (0, c.WR)(a, o)
      })(t, a, e.requested)
    }
    function m(e, t) {
      let a = e.get(l.M9)
      return a?.getContext().user.userID === t && !e.get(l.RS) && (0, s.z)(a)
    }
    ;(a("HQHg"),
      a.d(
        t,
        {},
        {
          EQ: function (e, t, a, n, i) {
            if (
              (i.throwIfAborted(),
              !m(e, t.userId) || n.id !== t.requested.checkout_session_id || u(n) || !(0, c.g2)(a, t.requested))
            )
              throw Error("Business checkout recovery no longer belongs to this buyer or selection")
          },
          G6: function (e, t, a) {
            if (!(0, c.g2)(h(e, t, a), e.requested)) throw Error("Business seat update was not confirmed")
          },
          K8: function ({
            scope: e,
            cause: t,
            userId: a,
            session: n,
            checkout: i,
            requested: r,
            navigation: o,
            hasNewCardInput: s,
          }) {
            return null
          },
          QG: d,
          rx: class extends Error {
            userId
            prior
            requested
            provider
            currency
            constructor(e, t, a, n, i, r) {
              ;(super("Business plan update requires reconciliation", { cause: r }),
                (this.userId = e),
                (this.prior = t),
                (this.requested = a),
                (this.provider = n),
                (this.currency = i))
            }
          },
          wS: m,
          zs: async function (e, t, a, n) {
            let i
            n()
            let s = AbortSignal.any([t, AbortSignal.timeout(3e4)]),
              l = await (0, r._qC)(
                a(async () => {
                  ;(s.throwIfAborted(), n())
                  let t = await o.Request.safeGet("/payments/checkout/{processor_entity}/{checkout_session_id}", {
                    parameters: {
                      path: {
                        processor_entity: e.requested.processor_entity,
                        checkout_session_id: e.requested.checkout_session_id,
                      },
                    },
                    additionalHeaders: void 0,
                    signal: s,
                  })
                  if ((s.throwIfAborted(), n(), "custom_checkout_session" !== t.tag))
                    throw Error("Business checkout changed")
                  return (d(e, t), (i = t), t)
                }, s),
                s,
              )
            ;(s.throwIfAborted(), n(), d(e, i))
            let u = h(e, i, l),
              m = (0, c.g2)(u, e.requested)
            if (!m && !(0, c.g2)(u, e.prior)) throw Error("Business seat selection changed")
            return { accepted: i, alreadyApplied: m }
          },
        },
      ))
  },
  aTCm(e, t, a) {
    var n = a("c2F9")
    function i(e) {
      return {
        standard: e?.seat_quantities?.find((e) => "default" === e.seat_type)?.quantity ?? e?.seat_quantity ?? 0,
        premium: e?.seat_quantities?.find((e) => "prolite" === e.seat_type)?.quantity ?? 0,
      }
    }
    function r(e, t) {
      if (null == e || null == t) return !1
      let a = i(e),
        n = i(t)
      return (
        a.standard === n.standard &&
        a.premium === n.premium &&
        e.price_interval === t.price_interval &&
        e.promo_code === t.promo_code &&
        JSON.stringify(e.promo_campaign) === JSON.stringify(t.promo_campaign) &&
        (e.data_residency ?? "no_constraint") === (t.data_residency ?? "no_constraint")
      )
    }
    function o(e, t) {
      if (null == t) throw Error("Business seat update was not confirmed")
      return {
        ...e,
        price_interval: t.interval,
        seat_quantity: t.standardQuantity + t.premiumQuantity,
        seat_quantities:
          null == e.seat_quantities
            ? void 0
            : [
                { seat_type: "default", quantity: t.standardQuantity },
                { seat_type: "prolite", quantity: t.premiumQuantity },
              ],
      }
    }
    a.d(
      t,
      {},
      {
        Sj: function (e, t) {
          let a = e?.request ?? null,
            n = a ?? e?.confirmed ?? null,
            o = i(n),
            s = e?.minimumSeats ?? 2,
            l = null != e && t,
            c =
              null != e &&
              (null === e.draftStandard ||
                null === e.draftPremium ||
                (e.draftStandard ?? o.standard) + (e.draftPremium ?? o.premium) < s)
          return {
            request: a,
            minimumSeats: s,
            invalid: c,
            pending: l,
            blocked:
              null != e && (c || void 0 !== e.draftStandard || void 0 !== e.draftPremium || l || !r(n, e.confirmed)),
          }
        },
        WR: o,
        g2: r,
        hQ: function (e, t, a, i, s, l) {
          let c = e.checkout_state,
            u = c?.billingAddress
          if (
            "open_ai" !== e.checkout_provider ||
            null == a ||
            e.reactivation_member_management?.workspace_id !== a ||
            null == c ||
            c.id !== t.checkout_session_id ||
            null == t.seat_quantity ||
            null != c.taxIdInfo ||
            c.currency.toLowerCase() !== s.toLowerCase() ||
            (c.email ?? null) !== (l ?? null) ||
            null == u ||
            (u.name ?? "") !== (i.name ?? "") ||
            !["country", "state", "postal_code", "city", "line1", "line2"].every(
              (e) => (u.address[e] ?? "") === (i.address[e] ?? ""),
            )
          )
            return !1
          let d = (0, n.n8)(c.lineItems, (0, n.c8)(e))
          return null != d && r(t, o(t, d))
        },
        wu: i,
      },
    )
  },
  kd5d(e, t, a) {
    a.d(
      t,
      {},
      {
        H: function (e) {
          window.location.replace(e)
        },
        e: function (e) {
          window.location.assign(e)
        },
      },
    )
  },
  R8Ga(e, t, a) {
    var n = a("eShZ")
    let i = "prior_introductory_offer_redeemed",
      r = "promo_ineligible"
    class o extends Error {
      constructor(e) {
        super(e)
      }
      static isIneligibility = (e) => e instanceof o || s.isCheckoutFailure(e)
      static isIneligibleResponse(e) {
        return e instanceof n.FetchError && e.errorCode === r
      }
      static unavailable() {
        return new o(r)
      }
      static fromIneligibleCoupon(e, t) {
        return null == t || e?.state !== "not_eligible" || e.coupon !== t.toLowerCase()
          ? null
          : e.ineligibility_reason === i
            ? new s()
            : e.ineligibility_reason === r
              ? new o(r)
              : null
      }
    }
    class s extends o {
      errorCode = i
      constructor() {
        super(i)
      }
      static isCheckoutFailure = (e) =>
        e instanceof s || (e instanceof n.FetchError && 400 === e.status && e.errorCode === i)
    }
    a.d(t, {}, { i: o, y: s })
  },
  M8Rz(e, t, a) {
    a.d(t, { Qp: () => h, Oz: () => m, fz: () => p })
    var n = a("XEik"),
      i = a("Kfsp"),
      r = a("R6hv")
    let o = n.Ik({
        [i.ji]: n.k5(i.oe).optional(),
        returnPath: n
          .Yj()
          .refine(r.oz)
          .optional()
          .catch(void 0),
        source: n
          .k5(["chatgpt_header_upgrade", "profile_footer_upgrade_cta", "profile_dropdown_upgrade_cta"])
          .optional()
          .catch(void 0),
        "account-payment-modal-cta-target": n
          .Ik({
            ctaTab: n.k5(["personal", "business"]).optional(),
            highlightPlan: n.k5(["go", "plus", "pro", "prolite", "team"]).optional(),
          })
          .optional(),
        "account-payment-modal-open-from-location": n.Yj().optional(),
      }),
      s = n.Ik({
        pathname: n.Yj().refine((e) => (0, r.oz)(e) && !/[?#]/u.test(e)),
        search: n.KC([n.eu(""), n.Yj().startsWith("?")]).optional(),
        hash: n.KC([n.eu(""), n.Yj().startsWith("#")]).optional(),
        state: o.optional(),
      }),
      l = n.Ik({ [i.y$]: s })
    var c = a("NwSQ"),
      u = a("DVML"),
      d = a("nlNF")
    function h(e, t) {
      let a = new URLSearchParams(e),
        n = new URLSearchParams({ cta_tab: "business", highlight_plan: "team", default_tab: "business" })
      for (let e of [
        "numSeats",
        "selectedPlan",
        "price_interval",
        "standardSeats",
        "premiumSeats",
        "promoCode",
        "referralCode",
        "lenovo_preload_installation_id",
        "promo_campaign",
        "disable_automatic_promotion",
        "from_webview",
        "referrer",
      ]) {
        let t = a.get(e)
        t && n.set(e, t)
      }
      ;(0, c.Qb)(a, n)
      let i = t?.team_plan_data
      return (
        null != i &&
          (null != i.seat_quantity && n.set("numSeats", String(i.seat_quantity)),
          n.set("selectedPlan", i.price_interval),
          n.delete("price_interval"),
          n.delete("standardSeats"),
          n.delete("premiumSeats"),
          null != i.seat_quantities &&
            (n.set("standardSeats", String(i.seat_quantities.find((e) => "default" === e.seat_type)?.quantity ?? 0)),
            n.set("premiumSeats", String(i.seat_quantities.find((e) => "prolite" === e.seat_type)?.quantity ?? 0)))),
        (0, u.sh)({ search: `?${n}` })
      )
    }
    function m(e) {
      let t = l.safeParse(e).data?.[i.y$]
      if (t?.hash !== "#pricing") return t
      let a = new URLSearchParams(t.search),
        n = t.state?.["account-payment-modal-cta-target"]
      ;(n?.ctaTab != null && a.set("cta_tab", n.ctaTab),
        n?.highlightPlan != null && a.set("highlight_plan", n.highlightPlan))
      let r = a.toString()
      return { ...(0, u.sh)({ pathname: t.pathname, search: "" === r ? "" : `?${r}` }), state: t.state }
    }
    function p(e, t, a, n, i) {
      null != n
        ? t(n, { replace: !0 })
        : null != a
          ? "key" in a
            ? (0, d.nQ)(e, t, a)
            : t(a, { state: a.state, replace: !0 })
          : e.get(d.y0)
            ? t(-1)
            : t(i ?? (0, u.sh)(), { replace: !0 })
    }
  },
  HQHg(e, t, a) {
    var n = a("B2b6"),
      i = a("NwSQ"),
      r = a("R6hv"),
      o = a("H8fM"),
      s = a("n24T"),
      l = a("S2r0"),
      c = a("ASxG"),
      u = a("Kwur"),
      d = a("G4Vg"),
      h = a("ilGw")
    let m = c.Ikc({ accountId: c.YjP().min(1), quantity: c.aig().int().positive().nullable().catch(null) }),
      p = c.Ikc({
        processorEntity: c.k5n(["openai_llc", "openai_ie"]),
        checkoutSessionId: c.YjP().regex(/^(cs_|oaics_)[A-Za-z0-9_]+$/),
      }),
      f = c.k5n(["plus", "go", "pro5x", "pro", "promax", "team"]),
      g
    function C(e, t) {
      let a = new URLSearchParams({
          stripe_session_id: e.checkout_session_id,
          processor_entity: e.processor_entity,
          source: (0, h.f)(t),
        }),
        l = null == e.confirm_return_url ? null : new URL(e.confirm_return_url, window.location.origin).searchParams,
        c = l?.get("account_id")
      for (let e of ["plan_type", "campaign", "custom_payment_method_outcome"]) {
        let t = l?.get(e)
        null != t && a.set(e, t)
      }
      if ((null != c && a.set("account_id", c), null != t)) {
        ;((0, i.Qb)(t, a), (0, d.rC)(t, a))
        let o = new URLSearchParams(t).get("return_to")
        e.checkout_kind === n.td.RateLimitReset
          ? null != o && a.set("return_to", o)
          : e.checkout_kind === n.td.StandaloneCredit &&
            null != o &&
            (0, r.oz)(o) &&
            a.set("return_to", (0, r.j4)(o, "/settings/usage"))
      }
      if (e.entry_point === s.Pr) {
        let n = (0, o.fu)(e.checkout_session_id, new URLSearchParams()),
          i = (0, o.K3)(t ?? ""),
          r = new Set(i.keys())
        ;(n.forEach((e, t) => {
          r.has(t) || i.append(t, e)
        }),
          i.forEach((e, t) => a.append(t, e)))
      }
      return (
        (0, i.Vu)(e.checkout_session_id, a),
        `${e.checkout_kind === n.td.RateLimitReset && "complete" === e.status ? "/payments/success-rate-limit-reset" : "/checkout/verify"}?${a.toString()}`
      )
    }
    a.d(
      t,
      {},
      {
        Hv: function (e) {
          return !1
        },
        I5: function (e, t, a) {
          let n = e?.businessCheckoutReplacement
          if (null != n) {
            if (n.accountId !== t || n.userId !== a || e?.checkoutRequest?.plan_name !== "chatgptteamplan")
              throw Error("Checkout selection no longer belongs to this account")
            return e.checkoutRequest
          }
        },
        Oc: m,
        W2: function (e, t, a, n) {
          let i = (0, s.BZ)(e.processor_entity, e.checkout_session_id, t, n && e.entry_point === s.Pr)
          return `${a.replace(/\/$/, "")}${i}`
        },
        Xv: p,
        cL: function (e) {
          let t = new URLSearchParams(e)
          for (let e of ["promoCode", "referralCode", "promo_campaign", "require_promo", "business_trial"]) t.delete(e)
          return (t.set("disable_automatic_promotion", "true"), t)
        },
        cc: f,
        cm: async function (e, t, a, i) {
          for (let r = 0; ; r++) {
            t.throwIfAborted()
            let o = await u.Request.safeGet("/payments/checkout/{processor_entity}/{checkout_session_id}", {
              parameters: { path: { processor_entity: e.processorEntity, checkout_session_id: e.checkoutSessionId } },
              signal: t,
              additionalHeaders: i,
            })
            if (
              "custom_checkout_session" !== o.tag ||
              "open" !== o.status ||
              a ||
              (o.checkout_kind === n.td.StandaloneCredit &&
                null != o.credit_payment_state &&
                ("open_ai" === o.checkout_provider || "succeeded" !== (0, n.SW)(o.credit_payment_state))) ||
              2 === r
            )
              return o
            await new Promise((e) => window.setTimeout(e, 500))
          }
        },
        l_: function (e) {
          return (
            "custom_checkout_session" === e.tag &&
            "open" === e.status &&
            "unpaid" === e.payment_status &&
            e.credit_payment_state?.payment_status === "unpaid" &&
            ("requires_payment_method" === e.credit_payment_state.payment_intent_status ||
              "canceled" === e.credit_payment_state.payment_intent_status)
          )
        },
        nS: function (e) {
          return (0, l.j)({
            queryKey: ["checkout-workspace-members", e],
            enabled: null != e,
            queryFn: async ({ signal: t }) => {
              if (null == e) throw Error("Checkout workspace missing")
              let a = await u.Request.safeGet("/accounts/{account_id}/users", {
                parameters: { path: { account_id: e }, query: { limit: 1, offset: 0 } },
                signal: t,
              })
              if (null == a.total) throw Error("Expected a counted workspace users response")
              return a
            },
            staleTime: 0,
            retry: !1,
          })
        },
        ou: function (e) {
          return e?.credit_payment_state == null ||
            ("custom_checkout_session" === e.tag && e.checkout_kind !== n.td.StandaloneCredit)
            ? null
            : "hosted_checkout_session" === e.tag &&
                "unpaid" === e.credit_payment_state.payment_status &&
                "succeeded" === e.credit_payment_state.payment_intent_status
              ? "processing"
              : (0, n.SW)(e.credit_payment_state)
        },
        pn: {
          plus: "chatgptplusplan",
          go: "chatgptgoplan",
          pro5x: "chatgptprolite",
          pro: "chatgptpro",
          promax: "chatgptpromax",
          team: "chatgptteamplan",
        },
        wz: C,
        z3: function (e, t, a) {
          return (0, l.j)({
            queryKey: ["subscription-checkout", e, t.processorEntity, t.checkoutSessionId, a],
            queryFn: ({ signal: e }) =>
              u.Request.safeGet("/payments/checkout/{processor_entity}/{checkout_session_id}", {
                parameters: {
                  path: { processor_entity: t.processorEntity, checkout_session_id: t.checkoutSessionId },
                  query: { supports_business_seat_offer: !0 },
                },
                additionalHeaders: "display" === a ? g : void 0,
                signal: e,
              }),
            staleTime: 0,
            gcTime: 0,
            retry: !1,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
          })
        },
        zy: function (e, t, a, i) {
          let r = (0, n.tZ)(e, new URLSearchParams(t), a)
          if (null == r) return C({ ...e, confirm_return_url: i ?? e.confirm_return_url }, t)
          let o = new URL(r, window.location.origin)
          return ((0, d.rC)(t, o.searchParams), `${o.pathname}${o.search}`)
        },
      },
    )
  },
  M7qo(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      r = a("Oeow"),
      o = a("U5l8"),
      s = a("kxmb"),
      l = a("yQ3X"),
      c = a("Jkrr"),
      u = a("qmMi"),
      d = a("oyxz"),
      h = a("Wf1j"),
      m = a("Ywss"),
      p = a("MM0V"),
      f = a("Sm6l"),
      g = a("ZtSy"),
      C = a("Ot7V"),
      b = a("G4Vg"),
      x = a("OWtl"),
      y = a("a6Zv"),
      k = a("eShZ"),
      v = a("EjlR"),
      w = a("w6NB"),
      P = a("kd5d"),
      M = a("R8Ga"),
      _ = a("M8Rz")
    function A(e) {
      let t,
        a,
        r,
        o,
        l = (0, i.c)(21),
        { children: c, busy: d, title: h, returnPath: p, presentation: f, onBack: g, documentReturnPath: C } = e,
        k = void 0 !== d && d,
        v = (0, u.gh)(x.u),
        w = (0, m.Zp)(),
        M = (0, m.zy)(),
        A = M.state,
        j = A?.checkoutReturnLocation,
        L = (0, m.$P)("/")
      if (l[0] !== M.search || l[1] !== p || l[2] !== L) {
        let e = new URL(L, window.location.origin)
        ;((t = p ?? (0, b.A4)(M.search, e)), (l[0] = M.search), (l[1] = p), (l[2] = L), (l[3] = t))
      } else t = l[3]
      let S = t,
        I = (0, y.Y)()
      if (null != f) {
        let e
        return (l[4] !== c ? ((e = (0, n.jsx)(n.Fragment, { children: c })), (l[4] = c), (l[5] = e)) : (e = l[5]), e)
      }
      l[6] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, n.jsx)(T, {})), (l[6] = a)) : (a = l[6])
      let N = !!I
      return (
        l[7] !== S || l[8] !== C || l[9] !== M.state || l[10] !== w || l[11] !== g || l[12] !== j || l[13] !== v
          ? ((r =
              g ??
              (() => {
                null != C ? (0, P.e)(C) : (0, _.fz)(v, w, j ?? (0, _.Oz)(M.state), S)
              })),
            (l[7] = S),
            (l[8] = C),
            (l[9] = M.state),
            (l[10] = w),
            (l[11] = g),
            (l[12] = j),
            (l[13] = v),
            (l[14] = r))
          : (r = l[14]),
        l[15] !== k || l[16] !== c || l[17] !== N || l[18] !== r || l[19] !== h
          ? ((o = (0, n.jsx)(s.YZ, { homeLink: a, busy: k, title: h, isDarkMode: N, onBack: r, children: c })),
            (l[15] = k),
            (l[16] = c),
            (l[17] = N),
            (l[18] = r),
            (l[19] = h),
            (l[20] = o))
          : (o = l[20]),
        o
      )
    }
    function j(e) {
      let t,
        a = (0, i.c)(6),
        { error: s, isModal: l, summary: c } = e,
        u = void 0 !== l && l
      if (s instanceof w.rx) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(d.A, {
                id: "checkout.business.planUpdate.retry",
                defaultMessage: "We couldn\u2019t confirm your plan changes. Retry to update your total.",
              })),
              (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      if (s instanceof M.i || (c && M.i.isIneligibleResponse(s))) {
        let e
        return (
          a[1] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(L, {})), (a[1] = e)) : (e = a[1]),
          e
        )
      }
      if (s instanceof v.Jz && (!c || "subscription_limit" === s.code || s.message)) {
        if ("subscription_limit" === s.code) {
          let e
          return (
            a[2] !== u
              ? ((e = (0, n.jsx)(d.A, {
                  ...o.gL.subscriptionLimitWithHelp,
                  values: {
                    helpLink: (e) =>
                      (0, n.jsx)(g.G, {
                        href: o.SE,
                        initiator: "external_link",
                        appearance: "inherit",
                        underline: "always",
                        openTarget: u ? "external-browser" : void 0,
                        children: e,
                      }),
                  },
                })),
                (a[2] = u),
                (a[3] = e))
              : (e = a[3]),
            e
          )
        }
        return s.message
      }
      if (s instanceof k.FetchError && "plan_not_available" === s.errorCode) {
        let e
        return (
          a[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(d.A, { ...r.J.planNotAvailable })), (a[4] = e))
            : (e = a[4]),
          e
        )
      }
      return (
        a[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(d.A, {
              id: "checkout.failed",
              defaultMessage: "Checkout could not be completed. Please try again.",
            })),
            (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function L() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "checkout.offerUnavailable",
              defaultMessage: "This promotion isn\u2019t available for this checkout",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function T() {
      let e,
        t,
        a,
        o = (0, i.c)(5),
        s = (0, h.A)()
      return (
        o[0] !== s ? ((e = s.formatMessage(r.J.homeLinkLabel)), (o[0] = s), (o[1] = e)) : (e = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, n.jsx)(l.tv, {})), (o[2] = t)) : (t = o[2]),
        o[3] !== e
          ? ((a = (0, n.jsx)(m.N_, { to: "/", className: "w-fit border-none p-0", "aria-label": e, children: t })),
            (o[3] = e),
            (o[4] = a))
          : (a = o[4]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        Mi: function (e) {
          let t,
            a,
            r,
            o,
            s = (0, i.c)(11),
            { presentation: l, onBack: c, returnPath: u, url: h } = e
          return (
            s[0] !== l || s[1] !== h
              ? ((t = (e) => {
                  ;(l?.onClose(),
                    (0, C.PQ)({
                      event: e,
                      href: h,
                      disposition: "current-tab",
                      openTarget: "external-browser",
                      initiator: "open_in_browser_bridge",
                    }))
                }),
                (s[0] = l),
                (s[1] = h),
                (s[2] = t))
              : (t = s[2]),
            s[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(d.A, { id: "checkout.hosted", defaultMessage: "Continue to secure checkout" })),
                (s[3] = a))
              : (a = s[3]),
            s[4] !== t
              ? ((r = (0, n.jsx)(f.$, { color: "primary", onClick: t, children: a })), (s[4] = t), (s[5] = r))
              : (r = s[5]),
            s[6] !== c || s[7] !== l || s[8] !== u || s[9] !== r
              ? ((o = (0, n.jsx)(A, { returnPath: u, presentation: l, onBack: c, children: r })),
                (s[6] = c),
                (s[7] = l),
                (s[8] = u),
                (s[9] = r),
                (s[10] = o))
              : (o = s[10]),
            o
          )
        },
        VW: A,
        Wu: L,
        sw: T,
        vd: function (e) {
          let t,
            a,
            r,
            o,
            s = (0, i.c)(20),
            { error: l, onRetry: u, summary: h, messageOverride: m, isModal: g, inlineAmountPicker: C } = e,
            b = void 0 !== h && h,
            x = void 0 !== g && g,
            y = void 0 !== C && C
          s[0] !== l ? ((t = M.y.isCheckoutFailure(l)), (s[0] = l), (s[1] = t)) : (t = s[1])
          let k = t
          s[2] !== l || s[3] !== x || s[4] !== k || s[5] !== b
            ? ((a = k
                ? (0, n.jsx)(d.A, {
                    id: "checkout.promotion.ineligible.prior_intro_offer.message",
                    defaultMessage:
                      "This account has already redeemed an introductory offer, so this promotion can\u2019t be used",
                  })
                : (0, n.jsx)(j, { error: l, isModal: x, summary: b })),
              (s[2] = l),
              (s[3] = x),
              (s[4] = k),
              (s[5] = b),
              (s[6] = a))
            : (a = s[6])
          let v = a
          s[7] !== l || s[8] !== y || s[9] !== u || s[10] !== b
            ? ((r =
                null == u || M.i.isIneligibility(l) || (b && M.i.isIneligibleResponse(l))
                  ? null
                  : (0, n.jsx)(f.$, {
                      type: "button",
                      color: y ? "outlineCard" : "secondary",
                      onClick: u,
                      children: (0, n.jsx)(d.A, { id: "checkout.retry", defaultMessage: "Retry" }),
                    })),
              (s[7] = l),
              (s[8] = y),
              (s[9] = u),
              (s[10] = b),
              (s[11] = r))
            : (r = s[11])
          let w = r
          if (b) {
            let e,
              t,
              a = m ?? v
            return (
              s[12] !== a
                ? ((e = (0, n.jsx)(p.l, { variant: "errorNotice", content: a })), (s[12] = a), (s[13] = e))
                : (e = s[13]),
              s[14] !== w || s[15] !== e
                ? ((t = (0, n.jsxs)("div", { className: "flex flex-col gap-3", children: [e, w] })),
                  (s[14] = w),
                  (s[15] = e),
                  (s[16] = t))
                : (t = s[16]),
              t
            )
          }
          return (
            s[17] !== v || s[18] !== w
              ? ((o = (0, n.jsx)(c.bD, { message: v, children: w })), (s[17] = v), (s[18] = w), (s[19] = o))
              : (o = s[19]),
            o
          )
        },
      },
    )
  },
  OEMP(e, t, a) {
    a.d(t, { vt: () => d, Pj: () => c })
    let n = (e) => {
      let t,
        a = new Set(),
        n = (e, n) => {
          let i = "function" == typeof e ? e(t) : e
          if (!Object.is(i, t)) {
            let e = t
            ;((t = (null != n ? n : "object" != typeof i || null === i) ? i : Object.assign({}, t, i)),
              a.forEach((a) => a(t, e)))
          }
        },
        i = () => t,
        r = {
          setState: n,
          getState: i,
          getInitialState: () => o,
          subscribe: (e) => (a.add(e), () => a.delete(e)),
          destroy: () => {
            a.clear()
          },
        },
        o = (t = e(n, i, r))
      return r
    }
    var i = a("zd8w"),
      r = a("pbCd")
    let { useDebugValue: o } = i,
      { useSyncExternalStoreWithSelector: s } = r,
      l = (e) => e
    function c(e, t = l, a) {
      let n = s(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, a)
      return (o(n), n)
    }
    let u = (e) => {
        let t = "function" == typeof e ? (e ? n(e) : n) : e,
          a = (e, a) => c(t, e, a)
        return (Object.assign(a, t), a)
      },
      d = (e) => (e ? u(e) : u)
  },
}
//# sourceMappingURL=534136.b708ea51c3.js.map
