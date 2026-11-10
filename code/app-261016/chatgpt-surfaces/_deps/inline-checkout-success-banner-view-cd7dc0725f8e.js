import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AB as r,
  LNt as i,
  MNt as a,
  NNt as o,
  NSt as s,
  PBt as c,
  Qst as l,
  USt as u,
  XOt as d,
  ZSt as f,
  kB as p,
  nCt as m,
  okt as h,
  tkt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import { Lut as _, Rut as v, imr as y, rmr as b } from "./app-initial-ad16eaadf81f.js";
import { i as x, n as S, r as C } from "./inline-checkout-success-592d39082810.js";
import { n as w, t as T } from "./x-crossed-4c7ded468e5b.js";
var E, D;
function O() {
  return (O = e(() => {
    ((E = i()),
      (D = (e) =>
        (0, E.jsx)(`svg`, {
          width: `1em`,
          height: `1em`,
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          ...e,
          children: (0, E.jsx)(`path`, {
            d: `M20.3215 4.17948C20.7747 4.49511 20.8862 5.11837 20.5706 5.57158L10.8206 19.5716C10.6514 19.8145 10.3833 19.97 10.0884 19.9962C9.79354 20.0223 9.50222 19.9165 9.29289 19.7072L3.54289 13.9572C3.15237 13.5667 3.15237 12.9335 3.54289 12.543C3.93342 12.1525 4.56658 12.1525 4.95711 12.543L9.86223 17.4481L18.9294 4.42859C19.245 3.97539 19.8683 3.86385 20.3215 4.17948Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
var k, A, j, M, N, P;
function F() {
  return (F = e(() => {
    ((k = `_banner_ni6te_1`),
      (A = `_check_ni6te_18`),
      (j = `_description_ni6te_27`),
      (M = `_action_ni6te_33`),
      (N = `_close_ni6te_34`),
      (P = { banner: k, check: A, description: j, action: M, close: N }));
  }))();
}
function I(e) {
  "use forget";
  let t = (0, L.c)(26),
    { quantity: n, isDarkMode: r, onDismiss: i, onSetUpAutoReload: o } = e,
    s = r !== void 0 && r,
    c = h(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = a(v.root, v.modal, P.banner)), (t[0] = l))
    : (l = t[0]);
  let u = s ? `dark` : `light`,
    d;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, R.jsx)(`span`, {
        "aria-hidden": `true`,
        className: P.check,
        children: (0, R.jsx)(D, { className: `size-6` }),
      })),
      (t[1] = d))
    : (d = t[1]);
  let f;
  t[2] === n
    ? (f = t[3])
    : ((f = (0, R.jsx)(`p`, {
        className: `m-0 text-sm leading-5 font-medium`,
        children: (0, R.jsx)(g, {
          id: `chatgpt.inline_credit_checkout.success.credits_added`,
          defaultMessage: `{quantity, plural, one {# credit added} other {# credits added}}`,
          description: `Confirmation above the chat composer after an inline credit purchase has been fulfilled. quantity is the actual number of purchased usage credits added to the account.`,
          values: { quantity: n },
        }),
      })),
      (t[2] = n),
      (t[3] = f));
  let p;
  t[4] === o
    ? (p = t[5])
    : ((p =
        o != null &&
        (0, R.jsx)(`p`, {
          className: P.description,
          children: (0, R.jsx)(g, {
            id: `chatgpt.inline_credit_checkout.success.auto_reload_description`,
            defaultMessage: `Turn on auto-reload to keep your tasks running when your credits run low.`,
            description: `Optional suggestion below a successful credit purchase confirmation. Auto-reload is a setting that automatically purchases credits when the balance runs low. This message does not promise a discount or enable the setting.`,
          }),
        })),
      (t[4] = o),
      (t[5] = p));
  let m;
  t[6] !== f || t[7] !== p
    ? ((m = (0, R.jsxs)(`div`, { role: `status`, className: `min-w-0 flex-auto`, children: [f, p] })),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m))
    : (m = t[8]);
  let _;
  t[9] === o
    ? (_ = t[10])
    : ((_ =
        o != null &&
        (0, R.jsx)(`button`, {
          type: `button`,
          className: P.action,
          onClick: o,
          children: (0, R.jsx)(g, {
            id: `chatgpt.inline_credit_checkout.success.set_up_auto_reload`,
            defaultMessage: `Set up auto-reload`,
            description: `Button on a successful credit purchase banner. Opens usage settings where the user can choose to configure automatic credit purchases; clicking this button does not enroll the user.`,
          }),
        })),
      (t[9] = o),
      (t[10] = _));
  let y;
  t[11] !== m || t[12] !== _
    ? ((y = (0, R.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-3`,
        children: [m, _],
      })),
      (t[11] = m),
      (t[12] = _),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] === c
    ? (b = t[15])
    : ((b = c.formatMessage({
        id: `chatgpt.inline_credit_checkout.success.dismiss`,
        defaultMessage: `Dismiss credit purchase confirmation`,
        description: `Accessible label for the close button on the successful credit purchase banner above the chat composer.`,
      })),
      (t[14] = c),
      (t[15] = b));
  let x;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, R.jsx)(T, { "aria-hidden": `true`, className: `size-5` })), (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] !== i || t[18] !== b
    ? ((S = (0, R.jsx)(`button`, {
        type: `button`,
        className: P.close,
        onClick: i,
        "aria-label": b,
        children: x,
      })),
      (t[17] = i),
      (t[18] = b),
      (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] !== S || t[21] !== y
    ? ((C = (0, R.jsxs)(`div`, { className: `flex items-center gap-3`, children: [d, y, S] })),
      (t[20] = S),
      (t[21] = y),
      (t[22] = C))
    : (C = t[22]);
  let w;
  return (
    t[23] !== C || t[24] !== u
      ? ((w = (0, R.jsx)(`div`, { className: l, "data-checkout-theme": u, children: C })),
        (t[23] = C),
        (t[24] = u),
        (t[25] = w))
      : (w = t[25]),
    w
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = c()), O(), w(), o(), d(), _(), F(), (R = i()));
  }))();
}
function B(e) {
  let n = (0, V.c)(16),
    { conversationId: i } = e,
    a = t(l),
    o = r(),
    s = y(),
    c = u(),
    d;
  n[0] !== s.accountId || n[1] !== s.userId || n[2] !== i
    ? ((d = [i, s.accountId, s.userId]), (n[0] = s.accountId), (n[1] = s.userId), (n[2] = i), (n[3] = d))
    : (d = n[3]);
  let f = m(x, d);
  if (f == null || !f.canSetUpAutoReload) return null;
  let p;
  n[4] !== a || n[5] !== f
    ? ((p = () => {
        a.set(C, (e) => (e === f ? null : e));
      }),
      (n[4] = a),
      (n[5] = f),
      (n[6] = p))
    : (p = n[6]);
  let h = p,
    g = o === !0,
    _;
  n[7] !== h || n[8] !== c || n[9] !== f.canSetUpAutoReload
    ? ((_ = f.canSetUpAutoReload
        ? () => {
            (c(`/settings/usage`), h());
          }
        : void 0),
      (n[7] = h),
      (n[8] = c),
      (n[9] = f.canSetUpAutoReload),
      (n[10] = _))
    : (_ = n[10]);
  let v;
  return (
    n[11] !== h || n[12] !== f.quantity || n[13] !== g || n[14] !== _
      ? ((v = (0, H.jsx)(I, { quantity: f.quantity, isDarkMode: g, onDismiss: h, onSetUpAutoReload: _ })),
        (n[11] = h),
        (n[12] = f.quantity),
        (n[13] = g),
        (n[14] = _),
        (n[15] = v))
      : (v = n[15]),
    v
  );
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = c()), z(), f(), s(), b(), n(), p(), S(), (H = i()));
  }))();
}
U();
export { B as InlineCreditCheckoutSuccessBanner };
//# sourceMappingURL=inline-checkout-success-banner-view-cd7dc0725f8e.js.map
