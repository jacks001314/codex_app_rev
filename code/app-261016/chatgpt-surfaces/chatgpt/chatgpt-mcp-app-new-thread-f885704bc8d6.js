import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  RFt as n,
  Rrt as r,
  Tut as i,
  Uot as a,
  Vot as o,
  n9 as s,
  sct as c,
  tht as l,
  zFt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CIr as d,
  EIr as f,
  Jbn as p,
  LIr as m,
  LWn as h,
  Mir as g,
  Mwt as _,
  Nir as v,
  O2n as y,
  RWn as b,
  SIr as x,
  T2n as S,
  VPn as C,
  Ybn as w,
  Yjn as T,
  bLr as E,
  eMr as D,
  j2n as O,
  jwt as k,
  nMr as A,
  qIr as j,
  qjn as M,
  rPn as N,
  sIn as P,
  t0n as F,
  wLr as I,
  xMr as L,
  yMr as R,
  zRr as z,
} from "./app-initial-ad16eaadf81f.js";
import { da as B, ua as V } from "./app-primary-3e00728c2a4c.js";
async function H(
  e,
  {
    context: t,
    conversationOrigin: n,
    globalEntrypointIdentity: r,
    onDeferredCreation: i,
    onPendingThreadReady: a,
    onThreadCreated: c,
    toolOrigin: m,
    signal: g,
    isCurrent: _,
    assertCurrent: y,
  },
) {
  let b = () =>
    _() &&
    !T({ accountEnabled: e.get(D).data?.lockdownModeEnabled, lockdownDisabled: !1 }) &&
    (e.get(j) === f.Unrestricted || n === `tpp` || n === `flora`);
  if ((await Promise.all([e.query.getOrFetch(n === `tpp` ? P : O), e.query.getOrFetch(D)]), y(), !b()))
    throw Error(`The composer is unavailable`);
  let x = e.get(z),
    C = e.get(E),
    w = () => e.get(z) === x && e.get(E) === C,
    A = S(),
    M = l(),
    N = () => M.resolve(void 0),
    I,
    R = !1,
    V = (0, U.default)((n) => {
      (u.info(`Created hosted conversation for app message`, {
        safe: { conversationId: n, mcpAppId: t.untrustedAppMessage?.sourceId },
      }),
        w() &&
          (r != null && L(e, s, { ...r, feature: `global_entrypoint`, action: `chat_started` }),
          c(() => w() && v(e, o(n)))));
    });
  if (
    ((R = await B(e, {
      conversationId: A,
      conversationOrigin: n,
      prompt: t.prompt,
      projectId: null,
      mcpAppModelContextAttachments: k(t, e.get(d)),
      isSubmissionCurrent: b,
      toolOrigin: m,
      signal: g,
      draft: { kind: `preserve` },
      requireDispatchAcceptance: !0,
      onSubmitAccepted: () => {
        b() && a(() => w() && v(e, o(A)));
      },
      onServerThreadIdChange: (e) => {
        ((I = e), N(), R && V(e));
      },
      selectedModel: e.get(h, n),
      submitErrorFallback: e.get(d).formatMessage(p.submitError),
    })),
    !R)
  )
    throw (y(), Error(`The new conversation could not submit the app message`));
  if (
    (u.info(`Submitted app message`, {
      safe: { mcpAppId: t.untrustedAppMessage?.sourceId, conversationId: I },
    }),
    I != null)
  ) {
    V(I);
    return;
  }
  g.aborted ||
    i(
      (async () => {
        let t;
        try {
          (g.addEventListener(`abort`, N, { once: !0 }),
            (t = e.watch(({ get: t }) => {
              let n = t(F, A);
              n?.status === `failed`
                ? M.reject(Error(e.get(d).formatMessage(p.submitError)))
                : n != null && N();
            })),
            await M.promise);
        } finally {
          (t?.(), g.removeEventListener(`abort`, N));
        }
      })(),
    );
}
var U;
function W() {
  return (W = e(() => {
    (r(),
      (U = t(i(), 1)),
      c(),
      g(),
      I(),
      m(),
      _(),
      x(),
      R(),
      n(),
      V(),
      w(),
      N(),
      b(),
      y(),
      C(),
      A(),
      M(),
      a());
  }))();
}
W();
export { H as createChatGptMcpAppThread };
//# sourceMappingURL=chatgpt-mcp-app-new-thread-f885704bc8d6.js.map
