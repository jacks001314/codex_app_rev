import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Kot as t } from "./app-shared-bbfeca5e5737.js";
import { iPr as n, sPr as r } from "./app-initial-5851df3f6cb1.js";
import { a as i, i as a, r as o, t as s } from "./pure-b84c4c3484c4.js";
function c(e) {
  let t = getComputedStyle(document.body);
  return {
    theme: e ? `night` : `stripe`,
    labels: `floating`,
    variables: {
      colorPrimary: t.getPropertyValue(`--color-text`).trim() || void 0,
      colorText: t.color || void 0,
      colorTextPlaceholder: t.getPropertyValue(`--color-text-tertiary`).trim() || void 0,
      colorBackground: t.getPropertyValue(`--color-background-primary-soft`).trim() || void 0,
      colorDanger: t.getPropertyValue(`--color-text-danger`).trim() || void 0,
      fontFamily: t.fontFamily || void 0,
      fontSizeBase: t.getPropertyValue(`--text-sm`).trim() || void 0,
      borderRadius: t.getPropertyValue(`--radius-md`).trim() || void 0,
      spacingUnit: t.getPropertyValue(`--spacing`).trim() || void 0,
    },
  };
}
function l(e, r, i = !0) {
  let s = a(r, `elements`, i);
  return t({
    queryKey: [`consumer-billing-setup`, e, `stripe-client`, s],
    queryFn: async ({ signal: t }) => {
      let r = await n.safeGet(`/payments/stripe_client_bootstrap`, {
          parameters: { query: { account_id: e } },
          signal: t,
        }),
        i = await o(r.publishable_key, { locale: s });
      if (i == null) throw Error(`Could not load payment form`);
      return { stripe: i, currency: r.currency };
    },
    staleTime: 1 / 0,
    retry: !1,
  });
}
function u() {
  return (u = e(() => {
    (i(), s(), r());
  }))();
}
export { u as n, l as r, c as t };
//# sourceMappingURL=stripe-client-65fa98e77e53.js.map
