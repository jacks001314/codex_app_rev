import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bpt as n,
  CPt as r,
  Cat as i,
  Rnt as a,
  SPt as o,
  n7 as s,
  rst as c,
  xat as l,
  xlt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Don as d,
  EOn as f,
  FAn as p,
  GDt as m,
  GMr as h,
  LMn as g,
  NDr as _,
  OZn as v,
  Oon as y,
  QDr as b,
  SMr as x,
  WDt as S,
  XDr as C,
  YMr as w,
  ZQn as T,
  aIr as E,
  bVn as D,
  e$n as O,
  fMr as k,
  jDr as A,
  lIr as j,
  oIr as M,
  r$n as N,
  tMr as P,
  tNr as F,
  uIr as I,
  wOn as L,
  xVn as R,
  yjn as z,
} from "./app-initial-5851df3f6cb1.js";
import { ea as B, ta as V } from "./app-primary-fe8a450b3b04.js";
import { n as H, t as U } from "./new-thread-toast-d8f4508f3402.js";
async function W(
  e,
  {
    context: t,
    conversationOrigin: i,
    globalEntrypointIdentity: a,
    onDeferredCreation: o,
    sourceName: c,
    toastId: u,
    toolOrigin: p,
    signal: m,
    isCurrent: _,
    assertCurrent: y,
  },
) {
  let C = () =>
    _() &&
    !f({ accountEnabled: e.get(A).data?.lockdownModeEnabled, lockdownDisabled: !1 }) &&
    (e.get(x) === P.Unrestricted || i === `tpp` || i === `flora`);
  if ((await Promise.all([e.query.getOrFetch(i === `tpp` ? g : N), e.query.getOrFetch(A)]), y(), !C()))
    throw Error(`The composer is unavailable`);
  let E = e.get(h),
    O = e.get(w),
    k = () => e.get(h) === E && e.get(w) === O,
    j = T(),
    F = n(),
    L = () => F.resolve(void 0),
    R,
    z = !1,
    B = (0, G.default)((n) => {
      (r.info(`Created hosted conversation for app message`, {
        safe: { conversationId: n, mcpAppId: t.untrustedAppMessage?.sourceId },
      }),
        k() &&
          (a != null && b(e, s, { ...a, feature: `global_entrypoint`, action: `chat_started` }),
          H(e, c, () => k() && I(e, l(n)), u)));
    });
  if (
    ((z = await V(e, {
      conversationId: j,
      conversationOrigin: i,
      prompt: t.prompt,
      projectId: null,
      mcpAppModelContextAttachments: S(t, e.get(M)),
      isSubmissionCurrent: C,
      toolOrigin: p,
      signal: m,
      draft: { kind: `preserve` },
      requireDispatchAcceptance: !0,
      onServerThreadIdChange: (e) => {
        ((R = e), L(), z && B(e));
      },
      selectedModel: e.get(D, i),
      submitErrorFallback: e.get(M).formatMessage(d.submitError),
    })),
    !z)
  )
    throw (y(), Error(`The new conversation could not submit the app message`));
  if (
    (r.info(`Submitted app message`, {
      safe: { mcpAppId: t.untrustedAppMessage?.sourceId, conversationId: R },
    }),
    R != null)
  ) {
    B(R);
    return;
  }
  m.aborted ||
    o == null ||
    o(
      (async () => {
        let t;
        try {
          (m.addEventListener(`abort`, L, { once: !0 }),
            (t = e.watch(({ get: e }) => {
              (e(h) !== E || e(w) !== O || e(v, j) != null) && L();
            })),
            await F.promise);
        } finally {
          (t?.(), m.removeEventListener(`abort`, L));
        }
      })(),
    );
}
var G;
function K() {
  return (K = e(() => {
    (a(),
      (G = t(u(), 1)),
      c(),
      j(),
      F(),
      k(),
      m(),
      U(),
      E(),
      C(),
      o(),
      B(),
      y(),
      p(),
      R(),
      O(),
      z(),
      _(),
      L(),
      i());
  }))();
}
K();
export { W as createChatGptMcpAppThread };
//# sourceMappingURL=chatgpt-mcp-app-new-thread-be899f336395.js.map
