import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ext as n,
  Fz as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  Pz as s,
  VDt as c,
  _Mt as l,
  _xt as u,
  gMt as d,
  jDt as f,
  vzt as p,
  wot as m,
  xMt as h,
  zxt as g,
} from "./app-shared-bbfeca5e5737.js";
import { Mlt as _, Nlt as v, fur as y, pur as b } from "./app-initial-5851df3f6cb1.js";
import { i as x, n as S, r as C } from "./inline-checkout-success-9ad3e374dc6e.js";
import { n as w, t as T } from "./x-crossed-149612bff577.js";
var E, D;
function O() {
  return (O = e(() => {
    ((E = h()),
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
    { quantity: n, isDarkMode: r, onDismiss: a, onSetUpAutoReload: o } = e,
    s = r !== void 0 && r,
    l = c(),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = d(v.root, v.modal, P.banner)), (t[0] = u))
    : (u = t[0]);
  let f = s ? `dark` : `light`,
    p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, R.jsx)(`span`, {
        "aria-hidden": `true`,
        className: P.check,
        children: (0, R.jsx)(D, { className: `size-6` }),
      })),
      (t[1] = p))
    : (p = t[1]);
  let m;
  t[2] === n
    ? (m = t[3])
    : ((m = (0, R.jsx)(`p`, {
        className: `m-0 text-sm leading-5 font-medium`,
        children: (0, R.jsx)(i, {
          id: `chatgpt.inline_credit_checkout.success.credits_added`,
          defaultMessage: `{quantity, plural, one {# credit added} other {# credits added}}`,
          description: `Confirmation above the chat composer after an inline credit purchase has been fulfilled. quantity is the actual number of purchased usage credits added to the account.`,
          values: { quantity: n },
        }),
      })),
      (t[2] = n),
      (t[3] = m));
  let h;
  t[4] === o
    ? (h = t[5])
    : ((h =
        o != null &&
        (0, R.jsx)(`p`, {
          className: P.description,
          children: (0, R.jsx)(i, {
            id: `chatgpt.inline_credit_checkout.success.auto_reload_description`,
            defaultMessage: `Turn on auto-reload to keep your tasks running when your credits run low.`,
            description: `Optional suggestion below a successful credit purchase confirmation. Auto-reload is a setting that automatically purchases credits when the balance runs low. This message does not promise a discount or enable the setting.`,
          }),
        })),
      (t[4] = o),
      (t[5] = h));
  let g;
  t[6] !== m || t[7] !== h
    ? ((g = (0, R.jsxs)(`div`, { role: `status`, className: `min-w-0 flex-auto`, children: [m, h] })),
      (t[6] = m),
      (t[7] = h),
      (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] === o
    ? (_ = t[10])
    : ((_ =
        o != null &&
        (0, R.jsx)(`button`, {
          type: `button`,
          className: P.action,
          onClick: o,
          children: (0, R.jsx)(i, {
            id: `chatgpt.inline_credit_checkout.success.set_up_auto_reload`,
            defaultMessage: `Set up auto-reload`,
            description: `Button on a successful credit purchase banner. Opens usage settings where the user can choose to configure automatic credit purchases; clicking this button does not enroll the user.`,
          }),
        })),
      (t[9] = o),
      (t[10] = _));
  let y;
  t[11] !== g || t[12] !== _
    ? ((y = (0, R.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-3`,
        children: [g, _],
      })),
      (t[11] = g),
      (t[12] = _),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] === l
    ? (b = t[15])
    : ((b = l.formatMessage({
        id: `chatgpt.inline_credit_checkout.success.dismiss`,
        defaultMessage: `Dismiss credit purchase confirmation`,
        description: `Accessible label for the close button on the successful credit purchase banner above the chat composer.`,
      })),
      (t[14] = l),
      (t[15] = b));
  let x;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, R.jsx)(T, { "aria-hidden": `true`, className: `size-5` })), (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] !== a || t[18] !== b
    ? ((S = (0, R.jsx)(`button`, {
        type: `button`,
        className: P.close,
        onClick: a,
        "aria-label": b,
        children: x,
      })),
      (t[17] = a),
      (t[18] = b),
      (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] !== S || t[21] !== y
    ? ((C = (0, R.jsxs)(`div`, { className: `flex items-center gap-3`, children: [p, y, S] })),
      (t[20] = S),
      (t[21] = y),
      (t[22] = C))
    : (C = t[22]);
  let w;
  return (
    t[23] !== C || t[24] !== f
      ? ((w = (0, R.jsx)(`div`, { className: u, "data-checkout-theme": f, children: C })),
        (t[23] = C),
        (t[24] = f),
        (t[25] = w))
      : (w = t[25]),
    w
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = p()), O(), w(), l(), f(), _(), F(), (R = h()));
  }))();
}
function B(e) {
  let i = (0, V.c)(16),
    { conversationId: o } = e,
    s = a(t),
    c = r(),
    l = b(),
    u = n(),
    d;
  i[0] !== l.accountId || i[1] !== l.userId || i[2] !== o
    ? ((d = [o, l.accountId, l.userId]), (i[0] = l.accountId), (i[1] = l.userId), (i[2] = o), (i[3] = d))
    : (d = i[3]);
  let f = g(x, d);
  if (f == null || !f.canSetUpAutoReload) return null;
  let p;
  i[4] !== s || i[5] !== f
    ? ((p = () => {
        s.set(C, (e) => (e === f ? null : e));
      }),
      (i[4] = s),
      (i[5] = f),
      (i[6] = p))
    : (p = i[6]);
  let m = p,
    h = c === !0,
    _;
  i[7] !== m || i[8] !== u || i[9] !== f.canSetUpAutoReload
    ? ((_ = f.canSetUpAutoReload
        ? () => {
            (u(`/settings/usage`), m());
          }
        : void 0),
      (i[7] = m),
      (i[8] = u),
      (i[9] = f.canSetUpAutoReload),
      (i[10] = _))
    : (_ = i[10]);
  let v;
  return (
    i[11] !== m || i[12] !== f.quantity || i[13] !== h || i[14] !== _
      ? ((v = (0, H.jsx)(I, { quantity: f.quantity, isDarkMode: h, onDismiss: m, onSetUpAutoReload: _ })),
        (i[11] = m),
        (i[12] = f.quantity),
        (i[13] = h),
        (i[14] = _),
        (i[15] = v))
      : (v = i[15]),
    v
  );
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = p()), z(), o(), u(), y(), m(), s(), S(), (H = h()));
  }))();
}
U();
export { B as InlineCreditCheckoutSuccessBanner };
//# sourceMappingURL=inline-checkout-success-banner-view-c3084d8e93f9.js.map
