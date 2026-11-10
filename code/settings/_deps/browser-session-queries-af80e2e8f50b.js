import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  DKt as n,
  G3t as r,
  O3t as i,
  OKt as a,
  QXt as o,
  U3t as s,
  a3t as c,
  ay as l,
  eZt as u,
  hz as d,
  mz as f,
  o3t as p,
  oy as m,
  ttn as h,
} from "./app-initial-f094ef01c64d.js";
function g(e, t = {}) {
  x && _({ source: `renderer`, stage: e, details: t });
}
function _(e) {
  if (x) {
    (console.log(`[browser-session] ${JSON.stringify(e)}`), (S = [...S.slice(-49), e]));
    for (let e of C) e();
  }
}
function v() {
  if (x) {
    S = [];
    for (let e of C) e();
  }
}
function y(e) {
  return (
    C.add(e),
    () => {
      C.delete(e);
    }
  );
}
function b() {
  return S;
}
var x,
  S,
  C,
  w = e(() => {
    (t(), a(), (x = h.allowDebugMenu(n())), (S = []), (C = new Set()));
  });
function T(e) {
  return new URL(E, e?.trim() || D).toString();
}
var E,
  D,
  O = e(() => {
    ((E = `/codex/desktop-session`), (D = `https://chatgpt.com`));
  }),
  k,
  A,
  j = e(() => {
    (m(),
      i(),
      o(),
      d(),
      p(),
      w(),
      O(),
      (k = r(c, ({ scope: e }) => ({
        gcTime: 1 / 0,
        queryFn: async () => {
          (v(),
            g(`eligibility_query_started`, { serviceAvailable: f.chatGptBrowserSession != null }));
          let t = (await f.chatGptBrowserSession?.getLookupEligibility()) ?? null;
          return (
            g(`eligibility_query_completed`, {
              eligible: t?.eligible ?? !1,
              resultAvailable: t != null,
            }),
            t != null &&
              u(e, l, {
                arm64CheckPassed: t.arm64,
                browserHasVisibleWindow: t.browserHasVisibleWindow,
                browserIsRunning: t.browserIsRunning,
                deviceCheckSupported: t.deviceCheck,
                eligible: t.eligible,
                macosCheckPassed: t.macOS,
              }),
            t
          );
        },
        queryKey: [`chatgpt-browser-session-lookup-eligibility`],
        retry: !1,
        staleTime: 1 / 0,
      }))),
      (A = s(c, (e) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: t }) => {
          let n = f.chatGptBrowserSession;
          if (
            (g(`profile_query_started`, { securityLevel: e, serviceAvailable: n != null }),
            n == null)
          )
            return (g(`profile_query_skipped`, { reason: `service_unavailable` }), null);
          let r = crypto.randomUUID(),
            i = () => {
              n.cancelProbe(r);
            };
          if ((t.addEventListener(`abort`, i, { once: !0 }), t.aborted))
            return (g(`profile_query_aborted_before_probe`), i(), null);
          try {
            let { chatGptDesktopAuthOrigin: i } = await f.appInfo.get();
            if (t.aborted) return (g(`profile_query_aborted_before_probe`), null);
            let a = await n.probe(r, T(i), e, x ? _ : void 0);
            return (g(`profile_query_completed`, { profileFound: a != null }), a);
          } catch (e) {
            throw (g(`profile_query_failed`), e);
          } finally {
            t.removeEventListener(`abort`, i);
          }
        },
        queryKey: [`chatgpt-browser-session-profile`, e],
        retry: !1,
        staleTime: 1 / 0,
      }))));
  });
export { w as a, b as i, A as n, y as o, j as r, k as t };
//# sourceMappingURL=browser-session-queries-af80e2e8f50b.js.map
