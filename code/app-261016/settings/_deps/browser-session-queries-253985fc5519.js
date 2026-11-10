import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  CCt as n,
  Qst as r,
  Ugt as i,
  ZSt as a,
  ast as o,
  gCt as s,
  ist as c,
  mCt as l,
  sct as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Kpr as d,
  MM as f,
  NM as p,
  PM as m,
  XLr as h,
  qpr as g,
  xMr as _,
  yMr as v,
} from "./app-initial-ad16eaadf81f.js";
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
    (u(), (E = i.allowDebugMenu(h())), (D = []), (O = new Set()));
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
      d(),
      o(),
      t(),
      (j = n(r, ({ get: e }) => c.chatGptBrowserSession != null && e(g) === `windows`)),
      (M = n(r, ({ get: e }) => (e(j) ? `504848717` : `1504988142`))));
  }))();
}
var P, F;
function I() {
  return (I = e(() => {
    (m(),
      a(),
      v(),
      o(),
      t(),
      k(),
      y(),
      (P = s(r, ({ scope: e }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: t }) => {
          (C(), x(`eligibility_query_started`, { serviceAvailable: c.chatGptBrowserSession != null }));
          let n = (await c.chatGptBrowserSession?.getLookupEligibility()) ?? null;
          return t.aborted
            ? null
            : (x(`eligibility_query_completed`, { eligible: n?.eligible ?? !1, resultAvailable: n != null }),
              n != null &&
                _(e, p, {
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
      (F = l(r, (e, { scope: t }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: n }) => {
          let r = c.chatGptBrowserSession;
          if ((x(`profile_query_started`, { serviceAvailable: r != null }), r == null))
            return (x(`profile_query_skipped`, { reason: `service_unavailable` }), null);
          let i = crypto.randomUUID(),
            a = () => {
              r.cancelProbe(i);
            };
          if ((n.addEventListener(`abort`, a, { once: !0 }), n.aborted))
            return (x(`profile_query_aborted_before_probe`), a(), null);
          try {
            let { chatGptDesktopAuthOrigin: a } = await c.appInfo.get();
            if (n.aborted) return (x(`profile_query_aborted_before_probe`), null);
            let o = performance.now(),
              s = await r.probe(i, b(a), e, E ? S : void 0),
              l = (s?.length ?? 0) > 0;
            return (
              n.aborted || _(t, f, { latencyMs: Math.round(performance.now() - o), profileFound: l }),
              x(`profile_query_completed`, { profileFound: l, signedOut: s?.length === 0 }),
              s
            );
          } catch (e) {
            throw (x(`profile_query_failed`), e);
          } finally {
            n.removeEventListener(`abort`, a);
          }
        },
        queryKey: [`chatgpt-browser-session-profiles`, e],
        retry: !1,
        staleTime: 1 / 0,
      }))));
  }))();
}
export { A as a, T as c, M as i, k as l, F as n, N as o, I as r, j as s, P as t, w as u };
//# sourceMappingURL=browser-session-queries-253985fc5519.js.map
