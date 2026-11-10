import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  Hu as r,
  Jrt as i,
  M6t as a,
  N6t as o,
  Spn as s,
  Vu as c,
  Xrt as l,
  Xu as u,
  Yrt as d,
  Zrt as f,
  eit as p,
  hmn as m,
  iit as h,
  kMt as g,
  kmn as _,
  nit as v,
  qu as y,
  rit as b,
  tit as x,
} from "./app-initial-f094ef01c64d.js";
import { r as S, t as C } from "./status-f9c96846d856.js";
function w(e) {
  let t = (0, T.c)(39),
    { account: r, managementSource: a, onClose: s, showProLevels: u } = e,
    p;
  t[0] === s
    ? (p = t[1])
    : ((p = (e) => {
        e || s();
      }),
      (t[0] = s),
      (t[1] = p));
  let m;
  t[2] === a
    ? (m = t[3])
    : ((m = (0, E.jsx)(b, {
        children: (0, E.jsx)(n, {
          id: `settings.consumerBilling.externalManagementTitle`,
          defaultMessage: `{source, select, app_store {Manage your plan in the App Store} google_play_store {Manage your plan on Google Play} other {Plan managed by an external partner}}`,
          description: `Title of the subscription management dialog opened from personal Billing settings. source is the original billing provider: Apple App Store, Google Play, or an external partner.`,
          values: { source: a },
        }),
      })),
      (t[2] = a),
      (t[3] = m));
  let h;
  t[4] === a
    ? (h = t[5])
    : ((h = (0, E.jsx)(v, {
        children: (0, E.jsx)(n, {
          id: `settings.consumerBilling.externalManagementDescription`,
          defaultMessage: `{source, select, app_store {You signed up for ChatGPT through Apple’s App Store. This plan can’t be changed, canceled, or managed on the web. Open the App Store to make changes.} google_play_store {You signed up for ChatGPT through Google Play. This plan can’t be changed, canceled, or managed on the web. Open Google Play to make changes.} other {This plan can’t be changed, renewed, canceled, or managed on the web. Contact the partner you subscribed through to make changes.}}`,
          description: `Explains why a personal ChatGPT subscription must be managed by its original provider. source selects the Apple, Google Play, or external-partner instructions.`,
          values: { source: a },
        }),
      })),
      (t[4] = a),
      (t[5] = h));
  let _;
  t[6] !== m || t[7] !== h
    ? ((_ = (0, E.jsx)(f, { children: (0, E.jsx)(l, { title: m, subtitle: h }) })),
      (t[6] = m),
      (t[7] = h),
      (t[8] = _))
    : (_ = t[8]);
  let S;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, E.jsx)(n, {
        id: `settings.consumerBilling.externalManagementPlan`,
        defaultMessage: `Your plan`,
        description: `Label for the current plan in the external subscription management dialog.`,
      })),
      (t[9] = S))
    : (S = t[9]);
  let w = r.account.plan_type ?? `free`,
    D;
  t[10] !== u || t[11] !== w
    ? ((D = (0, E.jsx)(y, { label: S, control: (0, E.jsx)(C, { plan: w, showProLevels: u }) })),
      (t[10] = u),
      (t[11] = w),
      (t[12] = D))
    : (D = t[12]);
  let O;
  t[13] === a
    ? (O = t[14])
    : ((O = (0, E.jsx)(n, {
        id: `settings.consumerBilling.externalManagementProviderLabel`,
        defaultMessage: `{source, select, partner_managed {Managed by} other {Signed up through}}`,
        description: `Label beside the original subscription provider in the management dialog. Partner subscriptions use Managed by; store purchases use Signed up through.`,
        values: { source: a },
      })),
      (t[13] = a),
      (t[14] = O));
  let k;
  t[15] === a
    ? (k = t[16])
    : ((k = (0, E.jsx)(n, {
        id: `settings.consumerBilling.externalManagementProvider`,
        defaultMessage: `{source, select, app_store {App Store} google_play_store {Google Play Store} other {External partner}}`,
        description: `Value identifying the provider responsible for managing the user's subscription in the external-management dialog.`,
        values: { source: a },
      })),
      (t[15] = a),
      (t[16] = k));
  let A;
  t[17] !== O || t[18] !== k
    ? ((A = (0, E.jsx)(y, { label: O, control: k })), (t[17] = O), (t[18] = k), (t[19] = A))
    : (A = t[19]);
  let j;
  t[20] !== A || t[21] !== D
    ? ((j = (0, E.jsx)(f, { children: (0, E.jsxs)(c, { children: [D, A] }) })),
      (t[20] = A),
      (t[21] = D),
      (t[22] = j))
    : (j = t[22]);
  let M = a === `partner_managed` ? `primary` : `secondary`,
    N;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, E.jsx)(n, {
        id: `settings.consumerBilling.externalManagementClose`,
        defaultMessage: `Close`,
        description: `Closes the external subscription management dialog without changing the plan.`,
      })),
      (t[23] = N))
    : (N = t[23]);
  let P;
  t[24] !== s || t[25] !== M
    ? ((P = (0, E.jsx)(g, { type: `button`, color: M, onClick: s, children: N })),
      (t[24] = s),
      (t[25] = M),
      (t[26] = P))
    : (P = t[26]);
  let F;
  t[27] === a
    ? (F = t[28])
    : ((F =
        a === `partner_managed`
          ? null
          : (0, E.jsx)(g, {
              color: `primary`,
              type: `button`,
              onClick: (e) =>
                o({
                  event: e,
                  href:
                    a === `app_store`
                      ? `https://apps.apple.com/account/subscriptions`
                      : `https://play.google.com/store/account/subscriptions`,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }),
              children: (0, E.jsx)(n, {
                id: `settings.consumerBilling.openSubscriptionStore`,
                defaultMessage: `{source, select, app_store {Open App Store} other {Open Google Play}}`,
                description: `Opens the user's subscriptions page with the original Apple or Google billing provider in a new browser tab.`,
                values: { source: a },
              }),
            })),
      (t[27] = a),
      (t[28] = F));
  let I;
  t[29] !== P || t[30] !== F
    ? ((I = (0, E.jsx)(f, { children: (0, E.jsxs)(d, { children: [P, F] }) })),
      (t[29] = P),
      (t[30] = F),
      (t[31] = I))
    : (I = t[31]);
  let L;
  t[32] !== j || t[33] !== I || t[34] !== _
    ? ((L = (0, E.jsxs)(i, { children: [_, j, I] })),
      (t[32] = j),
      (t[33] = I),
      (t[34] = _),
      (t[35] = L))
    : (L = t[35]);
  let R;
  return (
    t[36] !== p || t[37] !== L
      ? ((R = (0, E.jsx)(x, { open: !0, onOpenChange: p, children: L })),
        (t[36] = p),
        (t[37] = L),
        (t[38] = R))
      : (R = t[38]),
    R
  );
}
var T, E;
e(() => {
  ((T = _()), s(), t(), h(), p(), a(), u(), r(), S(), (E = m()));
})();
export { w as SubscriptionPlatformDialog };
//# sourceMappingURL=platform-dialog-e648bb41ce12.js.map
