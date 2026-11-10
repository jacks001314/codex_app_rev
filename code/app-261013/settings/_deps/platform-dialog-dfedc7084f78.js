import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  JC as r,
  _O as i,
  cO as a,
  fO as o,
  gO as s,
  iw as c,
  jDt as l,
  lO as u,
  mO as d,
  oO as f,
  qC as p,
  sO as m,
  t3 as h,
  tw as g,
  vO as _,
  vzt as v,
  xMt as y,
} from "./app-shared-bbfeca5e5737.js";
import { JPn as b, XPn as x } from "./app-initial-5851df3f6cb1.js";
import { r as S, t as C } from "./status-9d8853855965.js";
function w(e) {
  let r = (0, T.c)(38),
    { account: o, managementSource: c, onClose: l } = e,
    h;
  r[0] === l
    ? (h = r[1])
    : ((h = (e) => {
        e || l();
      }),
      (r[0] = l),
      (r[1] = h));
  let _;
  r[2] === c
    ? (_ = r[3])
    : ((_ = (0, E.jsx)(i, {
        children: (0, E.jsx)(n, {
          id: `settings.consumerBilling.externalManagementTitle`,
          defaultMessage: `{source, select, app_store {Manage your plan in the App Store} google_play_store {Manage your plan on Google Play} other {Plan managed by an external partner}}`,
          description: `Title of the subscription management dialog opened from personal Billing settings. source is the original billing provider: Apple App Store, Google Play, or an external partner.`,
          values: { source: c },
        }),
      })),
      (r[2] = c),
      (r[3] = _));
  let v;
  r[4] === c
    ? (v = r[5])
    : ((v = (0, E.jsx)(s, {
        children: (0, E.jsx)(n, {
          id: `settings.consumerBilling.externalManagementDescription`,
          defaultMessage: `{source, select, app_store {You signed up for ChatGPT through Apple’s App Store. This plan can’t be changed, canceled, or managed on the web. Open the App Store to make changes.} google_play_store {You signed up for ChatGPT through Google Play. This plan can’t be changed, canceled, or managed on the web. Open Google Play to make changes.} other {This plan can’t be changed, renewed, canceled, or managed on the web. Contact the partner you subscribed through to make changes.}}`,
          description: `Explains why a personal ChatGPT subscription must be managed by its original provider. source selects the Apple, Google Play, or external-partner instructions.`,
          values: { source: c },
        }),
      })),
      (r[4] = c),
      (r[5] = v));
  let y;
  r[6] !== _ || r[7] !== v
    ? ((y = (0, E.jsx)(u, { children: (0, E.jsx)(a, { title: _, subtitle: v }) })),
      (r[6] = _),
      (r[7] = v),
      (r[8] = y))
    : (y = r[8]);
  let b;
  r[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, E.jsx)(n, {
        id: `settings.consumerBilling.externalManagementPlan`,
        defaultMessage: `Your plan`,
        description: `Label for the current plan in the external subscription management dialog.`,
      })),
      (r[9] = b))
    : (b = r[9]);
  let S = o.account.plan_type ?? `free`,
    w;
  r[10] === S
    ? (w = r[11])
    : ((w = (0, E.jsx)(g, { label: b, control: (0, E.jsx)(C, { plan: S }) })), (r[10] = S), (r[11] = w));
  let D;
  r[12] === c
    ? (D = r[13])
    : ((D = (0, E.jsx)(n, {
        id: `settings.consumerBilling.externalManagementProviderLabel`,
        defaultMessage: `{source, select, partner_managed {Managed by} other {Signed up through}}`,
        description: `Label beside the original subscription provider in the management dialog. Partner subscriptions use Managed by; store purchases use Signed up through.`,
        values: { source: c },
      })),
      (r[12] = c),
      (r[13] = D));
  let O;
  r[14] === c
    ? (O = r[15])
    : ((O = (0, E.jsx)(n, {
        id: `settings.consumerBilling.externalManagementProvider`,
        defaultMessage: `{source, select, app_store {App Store} google_play_store {Google Play Store} other {External partner}}`,
        description: `Value identifying the provider responsible for managing the user's subscription in the external-management dialog.`,
        values: { source: c },
      })),
      (r[14] = c),
      (r[15] = O));
  let k;
  r[16] !== D || r[17] !== O
    ? ((k = (0, E.jsx)(g, { label: D, control: O })), (r[16] = D), (r[17] = O), (r[18] = k))
    : (k = r[18]);
  let A;
  r[19] !== k || r[20] !== w
    ? ((A = (0, E.jsx)(u, { children: (0, E.jsxs)(p, { children: [w, k] }) })),
      (r[19] = k),
      (r[20] = w),
      (r[21] = A))
    : (A = r[21]);
  let j = c === `partner_managed` ? `primary` : `secondary`,
    M;
  r[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, E.jsx)(n, {
        id: `settings.consumerBilling.externalManagementClose`,
        defaultMessage: `Close`,
        description: `Closes the external subscription management dialog without changing the plan.`,
      })),
      (r[22] = M))
    : (M = r[22]);
  let N;
  r[23] !== l || r[24] !== j
    ? ((N = (0, E.jsx)(t, { type: `button`, color: j, onClick: l, children: M })),
      (r[23] = l),
      (r[24] = j),
      (r[25] = N))
    : (N = r[25]);
  let P;
  r[26] === c
    ? (P = r[27])
    : ((P =
        c === `partner_managed`
          ? null
          : (0, E.jsx)(t, {
              color: `primary`,
              type: `button`,
              onClick: (e) =>
                x({
                  event: e,
                  href:
                    c === `app_store`
                      ? `https://apps.apple.com/account/subscriptions`
                      : `https://play.google.com/store/account/subscriptions`,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }),
              children: (0, E.jsx)(n, {
                id: `settings.consumerBilling.openSubscriptionStore`,
                defaultMessage: `{source, select, app_store {Open App Store} other {Open Google Play}}`,
                description: `Opens the user's subscriptions page with the original Apple or Google billing provider in a new browser tab.`,
                values: { source: c },
              }),
            })),
      (r[26] = c),
      (r[27] = P));
  let F;
  r[28] !== N || r[29] !== P
    ? ((F = (0, E.jsx)(u, { children: (0, E.jsxs)(m, { children: [N, P] }) })),
      (r[28] = N),
      (r[29] = P),
      (r[30] = F))
    : (F = r[30]);
  let I;
  r[31] !== A || r[32] !== F || r[33] !== y
    ? ((I = (0, E.jsxs)(f, { children: [y, A, F] })), (r[31] = A), (r[32] = F), (r[33] = y), (r[34] = I))
    : (I = r[34]);
  let L;
  return (
    r[35] !== h || r[36] !== I
      ? ((L = (0, E.jsx)(d, { open: !0, onOpenChange: h, children: I })),
        (r[35] = h),
        (r[36] = I),
        (r[37] = L))
      : (L = r[37]),
    L
  );
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = v()), l(), h(), _(), o(), b(), c(), r(), S(), (E = y()));
  }))();
}
D();
export { w as SubscriptionPlatformDialog };
//# sourceMappingURL=platform-dialog-dfedc7084f78.js.map
