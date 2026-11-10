import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  HO as n,
  IO as r,
  JO as i,
  KO as a,
  LNt as o,
  LO as s,
  PBt as c,
  RO as l,
  WO as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  ew as m,
  qO as h,
  sw as g,
  tkt as _,
  uw as v,
  zO as y,
} from "./app-shared-2feb3d4c6fcc.js";
import { SRn as b, bRn as x } from "./app-initial-ad16eaadf81f.js";
import { r as S, t as C } from "./status-1f159a29fe61.js";
function w(e) {
  let n = (0, T.c)(38),
    { account: i, managementSource: o, onClose: c } = e,
    d;
  n[0] === c
    ? (d = n[1])
    : ((d = (e) => {
        e || c();
      }),
      (n[0] = c),
      (n[1] = d));
  let p;
  n[2] === o
    ? (p = n[3])
    : ((p = (0, E.jsx)(h, {
        children: (0, E.jsx)(_, {
          id: `settings.consumerBilling.externalManagementTitle`,
          defaultMessage: `{source, select, app_store {Manage your plan in the App Store} google_play_store {Manage your plan on Google Play} other {Plan managed by an external partner}}`,
          description: `Title of the subscription management dialog opened from personal Billing settings. source is the original billing provider: Apple App Store, Google Play, or an external partner.`,
          values: { source: o },
        }),
      })),
      (n[2] = o),
      (n[3] = p));
  let m;
  n[4] === o
    ? (m = n[5])
    : ((m = (0, E.jsx)(a, {
        children: (0, E.jsx)(_, {
          id: `settings.consumerBilling.externalManagementDescription`,
          defaultMessage: `{source, select, app_store {You signed up for ChatGPT through Apple’s App Store. This plan can’t be changed, canceled, or managed on the web. Open the App Store to make changes.} google_play_store {You signed up for ChatGPT through Google Play. This plan can’t be changed, canceled, or managed on the web. Open Google Play to make changes.} other {This plan can’t be changed, renewed, canceled, or managed on the web. Contact the partner you subscribed through to make changes.}}`,
          description: `Explains why a personal ChatGPT subscription must be managed by its original provider. source selects the Apple, Google Play, or external-partner instructions.`,
          values: { source: o },
        }),
      })),
      (n[4] = o),
      (n[5] = m));
  let v;
  n[6] !== p || n[7] !== m
    ? ((v = (0, E.jsx)(y, { children: (0, E.jsx)(l, { title: p, subtitle: m }) })),
      (n[6] = p),
      (n[7] = m),
      (n[8] = v))
    : (v = n[8]);
  let x;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, E.jsx)(_, {
        id: `settings.consumerBilling.externalManagementPlan`,
        defaultMessage: `Your plan`,
        description: `Label for the current plan in the external subscription management dialog.`,
      })),
      (n[9] = x))
    : (x = n[9]);
  let S = i.account.plan_type ?? `free`,
    w;
  n[10] === S
    ? (w = n[11])
    : ((w = (0, E.jsx)(g, { label: x, control: (0, E.jsx)(C, { plan: S }) })), (n[10] = S), (n[11] = w));
  let D;
  n[12] === o
    ? (D = n[13])
    : ((D = (0, E.jsx)(_, {
        id: `settings.consumerBilling.externalManagementProviderLabel`,
        defaultMessage: `{source, select, partner_managed {Managed by} other {Signed up through}}`,
        description: `Label beside the original subscription provider in the management dialog. Partner subscriptions use Managed by; store purchases use Signed up through.`,
        values: { source: o },
      })),
      (n[12] = o),
      (n[13] = D));
  let O;
  n[14] === o
    ? (O = n[15])
    : ((O = (0, E.jsx)(_, {
        id: `settings.consumerBilling.externalManagementProvider`,
        defaultMessage: `{source, select, app_store {App Store} google_play_store {Google Play Store} other {External partner}}`,
        description: `Value identifying the provider responsible for managing the user's subscription in the external-management dialog.`,
        values: { source: o },
      })),
      (n[14] = o),
      (n[15] = O));
  let k;
  n[16] !== D || n[17] !== O
    ? ((k = (0, E.jsx)(g, { label: D, control: O })), (n[16] = D), (n[17] = O), (n[18] = k))
    : (k = n[18]);
  let A;
  n[19] !== k || n[20] !== w
    ? ((A = (0, E.jsx)(y, { children: (0, E.jsxs)(t, { children: [w, k] }) })),
      (n[19] = k),
      (n[20] = w),
      (n[21] = A))
    : (A = n[21]);
  let j = o === `partner_managed` ? `primary` : `secondary`,
    M;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, E.jsx)(_, {
        id: `settings.consumerBilling.externalManagementClose`,
        defaultMessage: `Close`,
        description: `Closes the external subscription management dialog without changing the plan.`,
      })),
      (n[22] = M))
    : (M = n[22]);
  let N;
  n[23] !== c || n[24] !== j
    ? ((N = (0, E.jsx)(f, { type: `button`, color: j, onClick: c, children: M })),
      (n[23] = c),
      (n[24] = j),
      (n[25] = N))
    : (N = n[25]);
  let P;
  n[26] === o
    ? (P = n[27])
    : ((P =
        o === `partner_managed`
          ? null
          : (0, E.jsx)(f, {
              color: `primary`,
              type: `button`,
              onClick: (e) =>
                b({
                  event: e,
                  href:
                    o === `app_store`
                      ? `https://apps.apple.com/account/subscriptions`
                      : `https://play.google.com/store/account/subscriptions`,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }),
              children: (0, E.jsx)(_, {
                id: `settings.consumerBilling.openSubscriptionStore`,
                defaultMessage: `{source, select, app_store {Open App Store} other {Open Google Play}}`,
                description: `Opens the user's subscriptions page with the original Apple or Google billing provider in a new browser tab.`,
                values: { source: o },
              }),
            })),
      (n[26] = o),
      (n[27] = P));
  let F;
  n[28] !== N || n[29] !== P
    ? ((F = (0, E.jsx)(y, { children: (0, E.jsxs)(s, { children: [N, P] }) })),
      (n[28] = N),
      (n[29] = P),
      (n[30] = F))
    : (F = n[30]);
  let I;
  n[31] !== A || n[32] !== F || n[33] !== v
    ? ((I = (0, E.jsxs)(r, { children: [v, A, F] })), (n[31] = A), (n[32] = F), (n[33] = v), (n[34] = I))
    : (I = n[34]);
  let L;
  return (
    n[35] !== d || n[36] !== I
      ? ((L = (0, E.jsx)(u, { open: !0, onOpenChange: d, children: I })),
        (n[35] = d),
        (n[36] = I),
        (n[37] = L))
      : (L = n[37]),
    L
  );
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = c()), d(), p(), i(), n(), x(), v(), m(), S(), (E = o()));
  }))();
}
D();
export { w as SubscriptionPlatformDialog };
//# sourceMappingURL=platform-dialog-fe34b5a14f70.js.map
