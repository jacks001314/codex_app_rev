import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  HFt as r,
  NLt as i,
  Qst as a,
  Smt as o,
  ZSt as s,
  cat as c,
  gCt as l,
  kCt as u,
  kRt as d,
  lat as f,
  mat as p,
  sct as m,
  uat as h,
  zst as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as _,
  IMr as v,
  iRr as y,
  lBr as b,
  nMr as x,
  tyr as S,
  uBr as C,
  wLr as w,
} from "./app-initial-ad16eaadf81f.js";
function T(e, t, n) {
  let r = e.get(_),
    i = e.get(v),
    a = e.get(O),
    o = a.revision + 1,
    s = { ...a.choices };
  for (let e of D) {
    let a = t[e];
    a != null && (s[e] = { revision: o, userId: r, accountId: i, pendingValue: n ? a : void 0 });
  }
  e.set(O, { revision: o, choices: s });
  let c = !0,
    l = () => {
      e.set(O, (e) => {
        let t = { ...e.choices };
        for (let e of D) {
          let n = t[e];
          n?.revision === o && (t[e] = { ...n, pendingValue: void 0 });
        }
        return { ...e, choices: t };
      });
    },
    u = e.watch(({ get: e }) => {
      c && (r !== e(_) || i !== e(v)) && ((c = !1), l());
    });
  return {
    getCurrentUpdate: () => {
      let n = {};
      if (c) {
        let r = e.get(O);
        for (let e of D) r.choices[e]?.revision === o && (n[e] = t[e]);
      }
      return n;
    },
    finish: () => {
      ((c = !1), u(), l());
    },
  };
}
function E(e) {
  let t = e.get(_),
    n = e.get(v),
    r = {},
    { choices: i } = e.get(O);
  for (let e of D) {
    let a = i[e];
    a?.userId === t && a?.accountId === n && a?.pendingValue != null && (r[e] = a.pendingValue);
  }
  return r;
}
var D, O;
function k() {
  return (k = e(() => {
    (s(),
      w(),
      x(),
      t(),
      (D = [`analytics`, `marketing`, `personalization`]),
      (O = u(a, () => ({ revision: 0, choices: {} }))));
  }))();
}
function A({ country: e, region: t, regionCode: n }) {
  let r = e?.trim().toUpperCase();
  if (!r) return !0;
  if (r === `CA`) {
    let e = t?.trim().toLowerCase(),
      r = n?.trim().toUpperCase();
    return (!e && !r) || r === `QC` || e === `quebec` || e === `québec`;
  }
  return M.has(r);
}
function j(e) {
  return N.has(e?.trim().toUpperCase() ?? ``);
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = new Set(
      `AD AI AL AT AW AX BE BG BL BM BQ BV CH CO CW CY CZ DE DK EC EE ES FI FK FO FR GB GF GG GI GL GP GR GS HR HU IC IE IM IO IS IT JE KR KY LI LT LU LV MC MD ME MF MK MQ MS MT NC NL NO PF PL PM PN PT RE RO RS SE SH SI SJ SK SM SX TC TF TH VA VG VN WF YT`.split(
        ` `,
      ),
    )),
      (N = new Set([`BR`, `CA`, `ID`, `IN`, `JP`, `MX`, `SG`, `ZA`])));
  }))();
}
function F({ location: e, personalizationEnabled: t, globalPrivacyControlEnabled: n }) {
  let r = I(n),
    i;
  return (
    t && (i = !r && G(`personalization`)),
    {
      analytics: !r && G(`analytics`),
      marketing: !r && G(`marketing`),
      personalization: i,
      isConsentRequired: r || A(e),
    }
  );
}
function I(e) {
  return e && typeof navigator < `u` && Reflect.get(navigator, `globalPrivacyControl`) === !0;
}
function L(e, t) {
  return I(t) ? { analytics: !1, marketing: !1, personalization: !1 } : e;
}
function R(e, t) {
  V({ ...L(e, t.globalPrivacyControlEnabled), isConsentRequired: !1 }, t.personalizationEnabled, !0);
}
function z(e, t) {
  let n = K();
  (n.domain != null &&
    window.location.hostname !== `chatgpt.com` &&
    (h(`oai_consent_analytics`, void 0), h(`oai-allow-ne`, void 0)),
    h(`oai_consent_analytics`, e ? `true` : `false`, n));
  let r = [e, G(`marketing`)];
  t && r.push(G(`personalization`));
  let i;
  (e ? r.every((e) => e != null) && (i = r.every((e) => e === !0) ? `true` : `false`) : (i = `false`),
    h(`oai-allow-ne`, i, n));
}
function B(e, t) {
  V(e, t, !1);
}
function V(e, t, n) {
  let r = K();
  for (let i of J) {
    if (i === `personalization` && !t) continue;
    let a = e[i];
    if (n && a == null) continue;
    let o;
    (a != null && (o = a ? `true` : `false`),
      r.domain != null && window.location.hostname !== `chatgpt.com` && h(q[i], void 0),
      (n || c(q[i]) !== o) && h(q[i], o, r));
  }
  let i = t ? [e.analytics, e.marketing, e.personalization] : [e.analytics, e.marketing],
    a;
  ((n || i.every((e) => e != null)) && (a = i.every((e) => e === !0) ? `true` : `false`),
    r.domain != null && window.location.hostname !== `chatgpt.com` && h(`oai-allow-ne`, void 0),
    (n || c(`oai-allow-ne`) !== a) && h(`oai-allow-ne`, a, r));
}
function H() {
  h(`oai-logged-out-consent-chosen`, `true`, K());
}
function U() {
  return c(`oai-cbi`) === `true`;
}
function W() {
  h(`oai-cbi`, `true`, { maxAge: void 0 });
}
function G(e) {
  let t = c(q[e]);
  return t == null ? null : t === `true`;
}
function K() {
  let e = window.location.hostname;
  return {
    maxAge: Y,
    sameSite: `lax`,
    domain: e === `chatgpt.com` || e.endsWith(`.chatgpt.com`) ? `.chatgpt.com` : void 0,
  };
}
var q, J, Y;
function X() {
  return (X = e(() => {
    (f(),
      P(),
      (q = {
        analytics: `oai_consent_analytics`,
        marketing: `oai_consent_marketing`,
        personalization: `oai_consent_personalization`,
      }),
      (J = [`analytics`, `marketing`, `personalization`]),
      (Y = 15552e3));
  }))();
}
async function ee({
  requestOptions: e,
  personalizationEnabled: t,
  globalPrivacyControlEnabled: n,
  publishBrowserCookies: r,
  isCurrent: i,
  getPendingChoice: a,
}) {
  let { signal: o } = e,
    s;
  try {
    s = Z.parse(await y.safeGet(`/user_granular_consent`, e));
  } catch (e) {
    throw (o.throwIfAborted(), e);
  }
  return i() ? { ...s, ...a?.() } : s;
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (s(),
      m(),
      r(),
      w(),
      k(),
      X(),
      t(),
      b(),
      f(),
      p(),
      n(),
      S(),
      x(),
      (Z = d({
        granular_consent: d({
          analytics: i().nullish(),
          marketing: i().nullish(),
          personalization: i().nullish(),
        }).nullish(),
        is_consent_required: i(),
      }).transform(({ granular_consent: e, is_consent_required: t }) => ({
        analytics: e?.analytics ?? null,
        isConsentRequired: t,
        marketing: e?.marketing ?? null,
        personalization: e?.personalization ?? null,
      }))),
      (Q = l(a, ({ get: e, scope: t }) => {
        let n = e(v),
          r = e(_),
          i = e(C, `3157804138`),
          a = e(C, `500337272`),
          s = n == null ? void 0 : { "ChatGPT-Account-ID": n, [o]: n };
        return {
          queryKey: [`chatgpt-user-granular-consent`, n, r, i, a],
          enabled: n != null && r != null,
          staleTime: g.ONE_MINUTE,
          queryFn: async ({ signal: o }) =>
            ee({
              requestOptions: { signal: o, additionalHeaders: s },
              personalizationEnabled: i,
              globalPrivacyControlEnabled: a,
              publishBrowserCookies: !0,
              getPendingChoice: () => E(t),
              isCurrent: () => n != null && r != null && n === e(v) && r === e(_),
            }),
        };
      })));
  }))();
}
export {
  W as a,
  I as c,
  z as d,
  R as f,
  k as g,
  T as h,
  B as i,
  H as l,
  j as m,
  $ as n,
  X as o,
  P as p,
  L as r,
  U as s,
  Q as t,
  F as u,
};
//# sourceMappingURL=chatgpt-user-granular-consent-5fff80d4df26.js.map
