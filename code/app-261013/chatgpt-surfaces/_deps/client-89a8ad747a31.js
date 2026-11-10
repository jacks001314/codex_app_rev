import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { rst as t, spt as n } from "./app-shared-bbfeca5e5737.js";
import { Ymr as r, ehr as i } from "./app-initial-5851df3f6cb1.js";
function a(e) {
  return { "ChatGPT-Account-ID": e, [n]: e };
}
function o(e, t) {
  let n = e.name?.trim() || t,
    r = e.email?.trim();
  return r
    ? { name: n, email: r, phone_number: e.phone_number ?? null, relationship: e.relationship ?? null }
    : null;
}
function s(e, t) {
  let n = [`trusted-contact`, e, t],
    i = a(t);
  return {
    enabled: {
      queryKey: [...n, `enabled`],
      queryFn: async ({ signal: e }) =>
        (await r.safeGet(`/trusted_contact/enabled`, { additionalHeaders: i, signal: e })).enabled,
      staleTime: 3e4,
      retry: !1,
    },
    list: {
      queryKey: [...n, `list`],
      queryFn: ({ signal: e }) => r.safeGet(`/trusted_contact`, { additionalHeaders: i, signal: e }),
      staleTime: 3e4,
      retry: !1,
    },
  };
}
function c() {
  return (c = e(() => {
    (t(), i());
  }))();
}
export { s as i, o as n, c as r, a as t };
//# sourceMappingURL=client-89a8ad747a31.js.map
