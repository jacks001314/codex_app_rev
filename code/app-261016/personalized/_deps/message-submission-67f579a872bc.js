const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./new-thread-fb30e8bc7e52.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as n,
  MPt as r,
  OFt as i,
  Tut as a,
  Vrt as o,
  Yst as s,
  e6 as c,
  kFt as l,
  qrt as u,
  uPt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  EVr as f,
  Jtt as p,
  KBr as m,
  Ktt as h,
  TVr as g,
  bLr as _,
  c5n as v,
  iTt as y,
  n1r as b,
  rTt as x,
  t1r as S,
  u5n as C,
  wLr as w,
  zRr as T,
} from "./app-initial-ad16eaadf81f.js";
function E() {
  return (E = e(() => {
    (c(), o(), n());
  }))();
}
async function D({
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
function O({
  scope: e,
  recipient: t,
  getNewThreadDestination: n,
  globalEntrypointIdentity: r,
  canCreateCodexThreads: a,
  hasUserGesture: o,
  assertActive: c,
  sourceName: l,
  toolOrigin: p,
  signal: m,
}) {
  return (g, x) =>
    y({
      context: g,
      signal: m,
      requestConfirmation: x,
      send: async (g) => {
        c();
        let y = h(t);
        if (
          (y === void 0 && (y = n == null ? (t == null ? { kind: `app-server`, hostId: s } : null) : n()),
          y == null || (y.kind === `app-server` && !a))
        )
          throw v(`New conversations are unavailable for this view`, d.MethodNotFound);
        m.throwIfAborted();
        let x = new AbortController(),
          S = e.get(T),
          C = e.get(_),
          w = e.watch(({ get: e }) => {
            (e(T) !== S || e(_) !== C) && x.abort();
          }),
          E = f(),
          D = (0, k.default)((e) => e()),
          O = (t) => {
            x.signal.aborted ||
              b(t) ||
              e
                .get(u)
                .danger(t instanceof Error ? t.message : String(t), {
                  id: E,
                  position: `top-center`,
                  duration: 0,
                  errorAnalytics: { toastId: `mcpApp.newChat.failed` },
                });
          },
          A = (0, k.default)(() => {
            (x.signal.removeEventListener(`abort`, A), w());
          }),
          j = !1,
          M = (e) => {
            ((j = !0),
              e.then(A, (e) => {
                (O(e), A());
              }));
          };
        x.signal.addEventListener(`abort`, A, { once: !0 });
        let N = () => x.abort();
        m.addEventListener(`abort`, N, { once: !0 });
        try {
          let { createMcpAppThread: t } = await i(
            async () => {
              let { createMcpAppThread: e } = await import(`./new-thread-fb30e8bc7e52.js`);
              return { createMcpAppThread: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
            import.meta.url,
          );
          (c(),
            x.signal.throwIfAborted(),
            m.removeEventListener(`abort`, N),
            await t(e, {
              context: g,
              destination: y,
              globalEntrypointIdentity: r,
              hasUserGesture: o,
              onDeferredCreation: M,
              onPendingThreadReady: (e) => {
                D(e);
              },
              onThreadCreated: (e) => {
                D(e);
              },
              sourceName: l,
              toolOrigin: p,
              signal: x.signal,
            }));
          return;
        } catch (e) {
          throw (O(e), e);
        } finally {
          (m.removeEventListener(`abort`, N), j || A());
        }
      },
    });
}
var k;
function A() {
  return (A = e(() => {
    (r(), (k = t(a(), 1)), S(), g(), w(), x(), E(), p(), o(), C(), m(), l());
  }))();
}
export { E as i, A as n, D as r, O as t };
//# sourceMappingURL=message-submission-67f579a872bc.js.map
