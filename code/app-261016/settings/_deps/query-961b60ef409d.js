import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bst as t, Pit as n, XOt as r, YOt as i, jit as a, zst as o } from "./app-shared-2feb3d4c6fcc.js";
import { Uft as s } from "./app-initial-ad16eaadf81f.js";
import { r as c, t as l } from "./client-77d175e61121.js";
var u;
function d() {
  return (d = e(() => {
    (r(),
      (u = i({
        title: {
          id: `chatgpt.settings.security.history.title`,
          defaultMessage: `Security history`,
          description: `Short title for the nested Security history screen and its entry row in ChatGPT Settings > Security and login. End users open this surface to review security-related account activity.`,
        },
        description: {
          id: `chatgpt.settings.security.history.description`,
          defaultMessage: `Review login activity and changes to your security settings.`,
          description: `One-sentence description shown with the Security history entry and at the top of the nested Security history screen in ChatGPT Settings > Security and login. It explains that the list contains login activity and changes to security settings. This is compact supporting copy with no placeholders.`,
        },
      })));
  }))();
}
function f(e, t = {}) {}
function p(e, t) {}
function m() {
  return (m = e(() => {
    s();
  }))();
}
function h(e) {
  return {
    queryKey: [`chatgpt-security`, e, `history-availability`],
    queryFn: ({ signal: t }) => _(e, t),
    refetchOnMount: `always`,
    staleTime: o.ONE_MINUTE,
    retry: !1,
  };
}
function g(e) {
  return {
    queryKey: [`chatgpt-security`, e, `history`],
    queryFn: ({ pageParam: t, signal: n }) => v(e, t, n),
    initialPageParam: null,
    getNextPageParam: (e) => e.next_cursor ?? void 0,
    maxPages: 5,
    gcTime: 0,
    refetchOnMount: `always`,
    staleTime: o.ONE_MINUTE,
    retry: !1,
  };
}
async function _(e, t) {
  let n = performance.now(),
    r = { outcome: `scan_limit`, request_count: 0 },
    i,
    o = new Set();
  try {
    for (let n = 0; n < 5; n += 1) {
      r.request_count = n + 1;
      let a = await c.safeGet(`/accounts/user_events`, {
        additionalHeaders: { "ChatGPT-Account-ID": e },
        signal: t,
        parameters: { query: { limit: 20, cursor: i } },
      });
      if (a.events.length > 0) return ((r.outcome = `available`), !0);
      if (a.next_cursor == null || o.has(a.next_cursor))
        return ((r.outcome = a.next_cursor == null ? `empty` : `repeated_cursor`), !1);
      ((i = a.next_cursor), o.add(i));
    }
    return !1;
  } catch (e) {
    throw (
      (r.outcome = `error`),
      e instanceof a && e.responseStatus != null && (r.http_status = e.responseStatus),
      e
    );
  } finally {
    (({ ...r }), t.aborted || r.outcome, performance.now() - n);
  }
}
function v(e, t, n) {
  let r = performance.now(),
    i = c.safeGet(`/accounts/user_events`, {
      additionalHeaders: { "ChatGPT-Account-ID": e },
      signal: n,
      parameters: { query: { limit: 20, cursor: t ?? void 0 } },
    });
  return (
    i
      .then(
        (e) => {
          (n.aborted, performance.now() - r, e.events.length, e.events.length, e.next_cursor);
        },
        (e) => {
          (n.aborted, performance.now() - r, e instanceof a && e.responseStatus != null && e.responseStatus);
        },
      )
      .catch(() => {}),
    i
  );
}
function y() {
  return (y = e(() => {
    (t(), n(), l(), m());
  }))();
}
export { f as a, d as c, m as i, h as n, p as o, g as r, u as s, y as t };
//# sourceMappingURL=query-961b60ef409d.js.map
