import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OSt as t, kSt as n } from "./app-shared-bbfeca5e5737.js";
import {
  NDr as r,
  XMr as i,
  YMr as a,
  Ymr as o,
  ehr as s,
  h$n as c,
  jDr as l,
  p$n as u,
  pOr as d,
  tNr as f,
} from "./app-initial-5851df3f6cb1.js";
import { n as p, t as m } from "./persona-f5b97c8374bd.js";
function h(e, n, r, s) {
  let c = e.get(a),
    f = e.query.snapshot(u),
    m = e.query.snapshot(l),
    h = new t(e.queryClient, f.getOptions()),
    g = new t(e.queryClient, m.getOptions()),
    _ = new AbortController(),
    v = !1,
    y = !1,
    b = !1,
    x,
    S = () => !v && e.get(d) === n.accountId && e.get(a) === c && e.get(i) === n.userId,
    C = () => {
      w();
    };
  async function w() {
    if (S() && !y) {
      ((y = !0), r({ phase: `refreshing` }));
      try {
        if (
          (await o.safePost(`/settings/clear_is_adult_caches`, {
            additionalHeaders: { "ChatGPT-Account-ID": n.accountId },
            signal: _.signal,
          }),
          !S() || (await Promise.all([f.cancel(), m.cancel()]), !S()))
        )
          return;
        let [e] = await Promise.all([
          h.refetch({ cancelRefetch: !1, throwOnError: !0 }),
          g.refetch({ cancelRefetch: !1, throwOnError: !0 }),
        ]);
        S() &&
          r(e.data?.has_verified_age_or_dob === !0 ? { phase: `redirect` } : { phase: `pending`, retry: C });
      } catch {
        S() && r({ phase: `refresh-error`, retry: C });
      } finally {
        y = !1;
      }
    }
  }
  function T() {
    if (S() && !y) {
      if (b) {
        C();
        return;
      }
      ((y = !0),
        r({ phase: `loading` }),
        s?.(),
        (x = p({
          accountId: n.accountId,
          onLoad: () => {
            S() && r({ phase: `active` });
          },
          onComplete: () => {
            S() && ((x = void 0), (y = !1), (b = !0), C());
          },
          onCancel: () => {
            ((x = void 0), (y = !1), S() && r({ phase: `canceled`, retry: T }));
          },
          onError: () => {
            ((x = void 0), (y = !1), S() && r({ phase: `error`, retry: T }));
          },
        })));
    }
  }
  return {
    start: T,
    dispose() {
      ((v = !0), h.destroy(), g.destroy(), _.abort(), f.cancel(), m.cancel(), x?.());
    },
  };
}
function g() {
  return (g = e(() => {
    (n(), f(), c(), s(), r(), m());
  }))();
}
export { g as n, h as t };
//# sourceMappingURL=age-verification-session-dbe5b6956b02.js.map
