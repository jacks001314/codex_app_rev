import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BOt as t,
  Cft as n,
  FOt as r,
  Fkt as i,
  Fun as a,
  Jun as o,
  Mkt as s,
  Nkt as c,
  O5t as l,
  Pdt as u,
  R1t as d,
  RJt as f,
  _jt as p,
  bun as m,
  bvt as h,
  dJt as g,
  fJt as _,
  gjt as v,
  hvt as y,
  jkt as b,
  q5t as x,
  vMt as S,
  yMt as C,
} from "./app-shared-7552fc8d5d82.js";
function w({ country: e, region: t, regionCode: n }) {
  let r = e?.trim().toUpperCase();
  if (!r) return !0;
  if (r === `CA`) {
    let e = t?.trim().toLowerCase(),
      r = n?.trim().toUpperCase();
    return (!e && !r) || r === `QC` || e === `quebec` || e === `québec`;
  }
  return E.has(r);
}
function T(e) {
  return D.has(e?.trim().toUpperCase() ?? ``);
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = new Set(
      `AD AI AL AT AW AX BE BG BL BM BQ BV CH CO CW CY CZ DE DK EC EE ES FI FK FO FR GB GF GG GI GL GP GR GS HR HU IC IE IM IO IS IT JE KR KY LI LT LU LV MC MD ME MF MK MQ MS MT NC NL NO PF PL PM PN PT RE RO RS SE SH SI SJ SK SM SX TC TF TH VA VG VN WF YT`.split(
        ` `,
      ),
    )),
      (D = new Set([`BR`, `CA`, `ID`, `IN`, `JP`, `MX`, `SG`, `ZA`])));
  }))();
}
function k({ location: e, personalizationEnabled: t, globalPrivacyControlEnabled: n }) {
  let r = A(n),
    i;
  return (
    t && (i = !r && R(`personalization`)),
    {
      analytics: !r && R(`analytics`),
      marketing: !r && R(`marketing`),
      personalization: i,
      isConsentRequired: r || w(e),
    }
  );
}
function A(e) {
  return e && typeof navigator < `u` && Reflect.get(navigator, `globalPrivacyControl`) === !0;
}
function j(e, t) {
  return A(t) ? { analytics: !1, marketing: !1, personalization: !1 } : e;
}
function M(e, t) {
  P(
    { ...j(e, t.globalPrivacyControlEnabled), isConsentRequired: !1 },
    t.personalizationEnabled,
    !0,
  );
}
function N(e, t) {
  P(e, t, !1);
}
function P(e, t, n) {
  let r = z();
  for (let i of V) {
    if (i === `personalization` && !t) continue;
    let a = e[i];
    if (n && a == null) continue;
    let o;
    (a != null && (o = a ? `true` : `false`),
      r.domain != null && window.location.hostname !== `chatgpt.com` && c(B[i], void 0),
      (n || b(B[i]) !== o) && c(B[i], o, r));
  }
  let i = t ? [e.analytics, e.marketing, e.personalization] : [e.analytics, e.marketing],
    a;
  ((n || i.every((e) => e != null)) && (a = i.every((e) => e === !0) ? `true` : `false`),
    r.domain != null && window.location.hostname !== `chatgpt.com` && c(`oai-allow-ne`, void 0),
    (n || b(`oai-allow-ne`) !== a) && c(`oai-allow-ne`, a, r));
}
function F() {
  c(`oai-logged-out-consent-chosen`, `true`, z());
}
function I() {
  return b(`oai-cbi`) === `true`;
}
function L() {
  c(`oai-cbi`, `true`, { maxAge: void 0 });
}
function R(e) {
  let t = b(B[e]);
  return t == null ? null : t === `true`;
}
function z() {
  let e = window.location.hostname;
  return {
    maxAge: H,
    sameSite: `lax`,
    domain: e === `chatgpt.com` || e.endsWith(`.chatgpt.com`) ? `.chatgpt.com` : void 0,
  };
}
var B, V, H;
function U() {
  return (U = e(() => {
    (s(),
      O(),
      (B = {
        analytics: `oai_consent_analytics`,
        marketing: `oai_consent_marketing`,
        personalization: `oai_consent_personalization`,
      }),
      (V = [`analytics`, `marketing`, `personalization`]),
      (H = 15552e3));
  }))();
}
var W, G;
function K() {
  return (K = e(() => {
    (l(),
      f(),
      m(),
      t(),
      U(),
      _(),
      S(),
      s(),
      i(),
      p(),
      h(),
      u(),
      (W = o({
        granular_consent: o({
          analytics: a().nullish(),
          marketing: a().nullish(),
          personalization: a().nullish(),
        }).nullish(),
        is_consent_required: a(),
      }).transform(({ granular_consent: e, is_consent_required: t }) => ({
        analytics: e?.analytics ?? null,
        isConsentRequired: t,
        marketing: e?.marketing ?? null,
        personalization: e?.personalization ?? null,
      }))),
      (G = x(g, ({ get: e }) => {
        let t = e(n),
          i = e(r),
          a = e(C, `3157804138`),
          o = e(C, `500337272`),
          s = t == null ? void 0 : { "ChatGPT-Account-ID": t, [d]: t };
        return {
          queryKey: [`chatgpt-user-granular-consent`, t, i, a, o],
          enabled: t != null && i != null,
          staleTime: v.ONE_MINUTE,
          queryFn: async ({ signal: e }) => {
            let t;
            try {
              t = W.parse(
                await y.safeGet(`/user_granular_consent`, { signal: e, additionalHeaders: s }),
              );
            } catch (t) {
              throw (e.throwIfAborted(), t);
            }
            return t;
          },
        };
      })));
  }))();
}
export {
  L as a,
  A as c,
  M as d,
  O as f,
  N as i,
  F as l,
  K as n,
  U as o,
  T as p,
  j as r,
  I as s,
  G as t,
  k as u,
};
//# sourceMappingURL=chatgpt-user-granular-consent-218581f87f25.js.map
