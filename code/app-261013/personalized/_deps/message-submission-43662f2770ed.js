const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./new-thread-d4f2d24be932.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./new-thread-toast-d8f4508f3402.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { JMt as n, fPt as r, gNt as i, iot as a, pPt as o, xlt as s } from "./app-shared-bbfeca5e5737.js";
import {
  E4n as c,
  MIr as l,
  O4n as u,
  Set as d,
  bOt as f,
  jIr as p,
  oFr as m,
  wet as h,
  xOt as g,
} from "./app-initial-5851df3f6cb1.js";
import { r as _, t as v } from "./new-thread-toast-d8f4508f3402.js";
async function y({
  untrustedAppMessage: e,
  prompt: t,
  send: n,
  signal: r,
  messageAttachment: i,
  modelContextAttachments: a,
  requestConfirmation: o,
}) {
  (r.throwIfAborted(),
    await n(
      {
        turnTrigger: `mcp_app_follow_up`,
        addedFiles: [],
        fileAttachments: [],
        ideContext: null,
        imageAttachments: [],
        mcpAppModelContextAttachments: [...a, ...(i == null || i.content?.length === 0 ? [] : [i])],
        prompt: t,
        untrustedAppMessage: e,
      },
      o,
    ));
}
function b({
  scope: e,
  recipient: t,
  getNewThreadDestination: i,
  globalEntrypointIdentity: o,
  canCreateCodexThreads: s,
  hasUserGesture: u,
  assertActive: f,
  sourceName: p,
  toolOrigin: m,
  signal: h,
}) {
  return (v, y) =>
    g({
      context: v,
      signal: h,
      requestConfirmation: y,
      send: async (g) => {
        f();
        let v = d(t);
        if (
          (v === void 0 && (v = i == null ? (t == null ? { kind: `app-server`, hostId: a } : null) : i()),
          v == null || (v.kind === `app-server` && !s))
        )
          throw c(`New conversations are unavailable for this view`, n.MethodNotFound);
        h.throwIfAborted();
        let y = l(),
          b = _(e, y),
          S = (0, x.default)(() => {
            (h.removeEventListener(`abort`, S), b?.close());
          }),
          C = !1,
          w = (e) => {
            ((C = !0), e.then(S, S));
          };
        h.addEventListener(`abort`, S, { once: !0 });
        try {
          let { createMcpAppThread: t } = await r(
            async () => {
              let { createMcpAppThread: e } = await import(`./new-thread-d4f2d24be932.js`);
              return { createMcpAppThread: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
            import.meta.url,
          );
          (f(),
            await t(e, {
              context: g,
              destination: v,
              globalEntrypointIdentity: o,
              hasUserGesture: u,
              onDeferredCreation: b == null ? void 0 : w,
              sourceName: p,
              toastId: y,
              toolOrigin: m,
              signal: h,
            }));
          return;
        } finally {
          C || S();
        }
      },
    });
}
var x;
function S() {
  return (S = e(() => {
    (i(), (x = t(s(), 1)), p(), f(), v(), h(), u(), m(), o());
  }))();
}
export { S as n, y as r, b as t };
//# sourceMappingURL=message-submission-43662f2770ed.js.map
