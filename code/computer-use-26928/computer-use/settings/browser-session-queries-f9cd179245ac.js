import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Hk as t,
  O5t as n,
  R2t as r,
  RJt as i,
  Vk as a,
  YOt as o,
  _Rt as s,
  dJt as c,
  fJt as l,
  q5t as u,
  yRt as d,
} from "./app-shared-7552fc8d5d82.js";
import { bE as f, vE as p, yE as m } from "./app-initial-3916b423772b.js";
import { n as h, t as g } from "./browser-session-probe-url-c27eb13aba00.js";
function _(e, t = {}) {
  S && v({ source: `renderer`, stage: e, details: t });
}
function v(e) {
  if (S) {
    (console.log(`[browser-session] ${JSON.stringify(e)}`), (C = [...C.slice(-49), e]));
    for (let e of w) e();
  }
}
function y() {
  if (S) {
    C = [];
    for (let e of w) e();
  }
}
function b(e) {
  return (
    w.add(e),
    () => {
      w.delete(e);
    }
  );
}
function x() {
  return C;
}
var S, C, w;
function T() {
  return (T = e(() => {
    (i(), (S = r.allowDebugMenu(o())), (C = []), (w = new Set()));
  }))();
}
var E, D;
function O() {
  return (O = e(() => {
    (f(),
      n(),
      s(),
      t(),
      l(),
      T(),
      h(),
      (E = u(c, ({ scope: e }) => ({
        gcTime: 1 / 0,
        queryFn: async () => {
          (y(),
            _(`eligibility_query_started`, { serviceAvailable: a.chatGptBrowserSession != null }));
          let t = (await a.chatGptBrowserSession?.getLookupEligibility()) ?? null;
          return (
            _(`eligibility_query_completed`, {
              eligible: t?.eligible ?? !1,
              resultAvailable: t != null,
            }),
            t != null &&
              d(e, m, {
                arm64CheckPassed: t.arm64,
                browserHasVisibleWindow: t.browserHasVisibleWindow,
                browserIsRunning: t.browserIsRunning,
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
      (D = u(c, ({ scope: e }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: t }) => {
          let n = a.chatGptBrowserSession;
          if ((_(`profile_query_started`, { serviceAvailable: n != null }), n == null))
            return (_(`profile_query_skipped`, { reason: `service_unavailable` }), null);
          let r = crypto.randomUUID(),
            i = () => {
              n.cancelProbe(r);
            };
          if ((t.addEventListener(`abort`, i, { once: !0 }), t.aborted))
            return (_(`profile_query_aborted_before_probe`), i(), null);
          try {
            let { chatGptDesktopAuthOrigin: i } = await a.appInfo.get();
            if (t.aborted) return (_(`profile_query_aborted_before_probe`), null);
            let o = performance.now(),
              s = await n.probe(r, g(i), S ? v : void 0);
            return (
              t.aborted ||
                d(e, p, { latencyMs: Math.round(performance.now() - o), profileFound: s != null }),
              _(`profile_query_completed`, { profileFound: s != null }),
              s
            );
          } catch (e) {
            throw (_(`profile_query_failed`), e);
          } finally {
            t.removeEventListener(`abort`, i);
          }
        },
        queryKey: [`chatgpt-browser-session-profile`],
        retry: !1,
        staleTime: 1 / 0,
      }))));
  }))();
}
export { T as a, x as i, D as n, b as o, O as r, E as t };
//# sourceMappingURL=browser-session-queries-f9cd179245ac.js.map
