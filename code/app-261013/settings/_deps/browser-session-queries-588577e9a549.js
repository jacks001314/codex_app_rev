import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  Cot as n,
  Kat as r,
  Oht as i,
  Pxt as a,
  Zxt as o,
  oSt as s,
  qat as c,
  rst as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Gj as d,
  Kj as f,
  QDr as p,
  Wj as m,
  XDr as h,
  dNr as g,
  iur as _,
  rur as v,
} from "./app-initial-5851df3f6cb1.js";
import { n as y, t as b } from "./browser-session-probe-url-c27eb13aba00.js";
function x(e, t = {}) {
  E && S({ source: `renderer`, stage: e, details: t });
}
function S(e) {
  if (E) {
    (console.log(`[browser-session] ${JSON.stringify(e)}`), (D = [...D.slice(-49), e]));
    for (let e of O) e();
  }
}
function C() {
  if (E) {
    D = [];
    for (let e of O) e();
  }
}
function w(e) {
  return (
    O.add(e),
    () => {
      O.delete(e);
    }
  );
}
function T() {
  return D;
}
var E, D, O;
function k() {
  return (k = e(() => {
    (l(), (E = i.allowDebugMenu(g())), (D = []), (O = new Set()));
  }))();
}
function A({ eligible: e, isWindows: t, lookupLayer: n }) {
  if (!e) return { experience: `existing`, enabled: !1, listAllAccounts: !1 };
  let r = n.get(`experience`, `existing`);
  switch (r) {
    case `browser_lookup`:
    case `browser_lookup_with_fallback`:
      return { experience: r, enabled: !0, listAllAccounts: !0 };
    case `control`:
      return { experience: r, enabled: !1, listAllAccounts: !1 };
    case `existing`: {
      let e = n.get(`enabled`, !1);
      return { experience: r, enabled: e, listAllAccounts: e && (t || n.get(`list_all_accounts`, !1)) };
    }
    default:
      return { experience: `control`, enabled: !1, listAllAccounts: !1 };
  }
}
var j, M;
function N() {
  return (N = e(() => {
    (a(),
      v(),
      c(),
      u(),
      (j = s(n, ({ get: e }) => r.chatGptBrowserSession != null && e(_) === `windows`)),
      (M = s(n, ({ get: e }) => (e(j) ? `504848717` : `1504988142`))));
  }))();
}
var P, F;
function I() {
  return (I = e(() => {
    (f(),
      a(),
      h(),
      c(),
      u(),
      k(),
      y(),
      (P = t(n, ({ scope: e }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: t }) => {
          (C(), x(`eligibility_query_started`, { serviceAvailable: r.chatGptBrowserSession != null }));
          let n = (await r.chatGptBrowserSession?.getLookupEligibility()) ?? null;
          return t.aborted
            ? null
            : (x(`eligibility_query_completed`, { eligible: n?.eligible ?? !1, resultAvailable: n != null }),
              n != null &&
                p(e, d, {
                  arm64CheckPassed: n.arm64,
                  browserHasVisibleWindow: n.browserHasVisibleWindow,
                  browserIsRunning: n.browserIsRunning,
                  eligible: n.eligible,
                  macosCheckPassed: n.macOS,
                }),
              n);
        },
        queryKey: [`chatgpt-browser-session-lookup-eligibility`],
        retry: !1,
        staleTime: 1 / 0,
      }))),
      (F = o(n, (e, { scope: t }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: n }) => {
          let i = r.chatGptBrowserSession;
          if ((x(`profile_query_started`, { serviceAvailable: i != null }), i == null))
            return (x(`profile_query_skipped`, { reason: `service_unavailable` }), null);
          let a = crypto.randomUUID(),
            o = () => {
              i.cancelProbe(a);
            };
          if ((n.addEventListener(`abort`, o, { once: !0 }), n.aborted))
            return (x(`profile_query_aborted_before_probe`), o(), null);
          try {
            let { chatGptDesktopAuthOrigin: o } = await r.appInfo.get();
            if (n.aborted) return (x(`profile_query_aborted_before_probe`), null);
            let s = performance.now(),
              c = await i.probe(a, b(o), e, E ? S : void 0),
              l = (c?.length ?? 0) > 0;
            return (
              n.aborted || p(t, m, { latencyMs: Math.round(performance.now() - s), profileFound: l }),
              x(`profile_query_completed`, { profileFound: l, signedOut: c?.length === 0 }),
              c
            );
          } catch (e) {
            throw (x(`profile_query_failed`), e);
          } finally {
            n.removeEventListener(`abort`, o);
          }
        },
        queryKey: [`chatgpt-browser-session-profiles`, e],
        retry: !1,
        staleTime: 1 / 0,
      }))));
  }))();
}
export { A as a, T as c, M as i, k as l, F as n, N as o, I as r, j as s, P as t, w as u };
//# sourceMappingURL=browser-session-queries-588577e9a549.js.map
