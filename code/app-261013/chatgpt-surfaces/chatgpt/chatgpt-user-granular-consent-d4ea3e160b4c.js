import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  Cot as n,
  EPt as r,
  Fat as i,
  Grt as a,
  Krt as o,
  Pat as s,
  Pxt as c,
  Zrt as l,
  _It as u,
  pLt as d,
  qrt as f,
  rst as p,
  spt as m,
  wot as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  NDr as g,
  OPr as _,
  XMr as v,
  Ymr as y,
  ehr as b,
  kPr as x,
  pOr as S,
  tNr as C,
} from "./app-initial-5851df3f6cb1.js";
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
  P({ ...j(e, t.globalPrivacyControlEnabled), isConsentRequired: !1 }, t.personalizationEnabled, !0);
}
function N(e, t) {
  P(e, t, !1);
}
function P(e, t, n) {
  let r = z();
  for (let i of V) {
    if (i === `personalization` && !t) continue;
    let o = e[i];
    if (n && o == null) continue;
    let s;
    (o != null && (s = o ? `true` : `false`),
      r.domain != null && window.location.hostname !== `chatgpt.com` && f(B[i], void 0),
      (n || a(B[i]) !== s) && f(B[i], s, r));
  }
  let i = t ? [e.analytics, e.marketing, e.personalization] : [e.analytics, e.marketing],
    o;
  ((n || i.every((e) => e != null)) && (o = i.every((e) => e === !0) ? `true` : `false`),
    r.domain != null && window.location.hostname !== `chatgpt.com` && f(`oai-allow-ne`, void 0),
    (n || a(`oai-allow-ne`) !== o) && f(`oai-allow-ne`, o, r));
}
function F() {
  f(`oai-logged-out-consent-chosen`, `true`, z());
}
function I() {
  return a(`oai-cbi`) === `true`;
}
function L() {
  f(`oai-cbi`, `true`, { maxAge: void 0 });
}
function R(e) {
  let t = a(B[e]);
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
    (o(),
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
async function W({
  requestOptions: e,
  personalizationEnabled: t,
  globalPrivacyControlEnabled: n,
  publishBrowserCookies: r,
  isCurrent: i,
}) {
  let { signal: a } = e,
    o;
  try {
    o = G.parse(await y.safeGet(`/user_granular_consent`, e));
  } catch (e) {
    throw (a.throwIfAborted(), e);
  }
  return o;
}
var G, K;
function q() {
  return (q = e(() => {
    (c(),
      p(),
      r(),
      C(),
      U(),
      h(),
      _(),
      o(),
      l(),
      i(),
      b(),
      g(),
      (G = d({
        granular_consent: d({
          analytics: u().nullish(),
          marketing: u().nullish(),
          personalization: u().nullish(),
        }).nullish(),
        is_consent_required: u(),
      }).transform(({ granular_consent: e, is_consent_required: t }) => ({
        analytics: e?.analytics ?? null,
        isConsentRequired: t,
        marketing: e?.marketing ?? null,
        personalization: e?.personalization ?? null,
      }))),
      (K = t(n, ({ get: e }) => {
        let t = e(S),
          n = e(v),
          r = e(x, `3157804138`),
          i = e(x, `500337272`),
          a = t == null ? void 0 : { "ChatGPT-Account-ID": t, [m]: t };
        return {
          queryKey: [`chatgpt-user-granular-consent`, t, n, r, i],
          enabled: t != null && n != null,
          staleTime: s.ONE_MINUTE,
          queryFn: async ({ signal: o }) =>
            W({
              requestOptions: { signal: o, additionalHeaders: a },
              personalizationEnabled: r,
              globalPrivacyControlEnabled: i,
              publishBrowserCookies: !0,
              isCurrent: () => t != null && n != null && t === e(S) && n === e(v),
            }),
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
  q as n,
  U as o,
  T as p,
  j as r,
  I as s,
  K as t,
  k as u,
};
//# sourceMappingURL=chatgpt-user-granular-consent-d4ea3e160b4c.js.map
