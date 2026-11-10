import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  Ixt as r,
  Pxt as i,
  SPt as a,
  Vxt as o,
  uSt as s,
  vzt as c,
  wot as l,
  yzt as u,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  A0 as f,
  CAt as p,
  GMr as m,
  JBn as ee,
  NDr as h,
  O0 as te,
  SAt as g,
  TNr as _,
  XMr as v,
  jDr as ne,
  tNr as y,
  xAt as b,
  yNr as x,
  yVn as S,
} from "./app-initial-5851df3f6cb1.js";
import { Gr as C, Wr as re } from "./app-primary-fe8a450b3b04.js";
import { r as w, t as ie } from "./voice-configuration-manager-eab950a76e87.js";
import {
  A as T,
  D as E,
  I as D,
  R as O,
  U as k,
  V as A,
  X as j,
  Y as M,
  _ as N,
  d as P,
  f as F,
  g as I,
  h as L,
  i as R,
  j as z,
  k as B,
  m as V,
  n as H,
  p as U,
  r as W,
  v as G,
  z as K,
} from "./voice-session-parameters-5a36d3c8f43e.js";
function q() {
  let e = (0, Y.c)(14),
    i = r(n),
    a = o(b),
    s = o(g),
    c = d(M, s),
    { voiceSystemHints: l } = o(re),
    u;
  e[0] !== a || e[1] !== c || e[2] !== l
    ? ((u = JSON.stringify([a, c, l])), (e[0] = a), (e[1] = c), (e[2] = l), (e[3] = u))
    : (u = e[3]);
  let f = u,
    p;
  e[4] !== a || e[5] !== c || e[6] !== i || e[7] !== l
    ? ((p = () => {
        if (!c || typeof RTCPeerConnection > `u` || (I().catch(J), a == null)) return;
        let { conversationId: e } = a,
          n,
          r,
          o = i.watch((i) => {
            if (!B(i, { disableExposureLog: !0 })) {
              (r?.(), (n = void 0));
              return;
            }
            let o = i.get(m),
              s = i.get(v),
              c = i.get(te, { accountId: o, userId: s }).data,
              u = z.isRecentVoiceUseEligible(i),
              d = z.isNewUserEligible(i, c?.created),
              f = i.get(Z),
              p = JSON.stringify([o, s, f, c?.created, u, d]);
            if (n === p) return;
            ((n = p), r?.());
            let h = new AbortController(),
              g,
              _,
              y = () => {
                (h.abort(`Instant Connect prewarm canceled`),
                  g?.(),
                  _?.abort(`Instant Connect prewarm canceled`));
              };
            ((r = y),
              (async () => {
                let n = u || d || (await z.isMicrophonePermissionEligible(i)),
                  r = !n && z.isRecentVoiceUseRequired(i);
                if (h.signal.aborted || (!n && !r)) return;
                (await R(i, e, h.signal, a), h.signal.throwIfAborted());
                let o;
                ((g = i.watch((n) => {
                  if (h.signal.aborted) return;
                  let i = n.get(ne).data;
                  if (i == null) return;
                  let s = w.sessionType(n, a.conversationDetailsTarget.gizmoId),
                    c = H(n, {
                      ambientParameters: {
                        conversationId: e,
                        composerContext: a,
                        backendReasoningEffort: i.voiceReasoningEffort,
                        gizmoId: a.conversationDetailsTarget.gizmoId ?? void 0,
                        historyAndTrainingDisabled: !1,
                        languageCode: i.voiceMainLanguage,
                        sessionType: s,
                        voice: i.voiceName ?? `fathom`,
                      },
                      liveParameters: {
                        requestedVoiceMode:
                          s === `wm`
                            ? `wingman`
                            : w.requestedVoiceMode(n, void 0, a.conversationDetailsTarget.gizmoId),
                        voiceSessionId: ``,
                      },
                      systemHints: l,
                    }),
                    u = P(n, s, c, f);
                  if (o === u) return;
                  if (((o = u), r)) {
                    O(
                      n,
                      s,
                      u,
                      ee.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_NO_WARM_SESSION_NOT_RECENT_VOICE_USER,
                    );
                    return;
                  }
                  if ((_?.abort(), h.signal.aborted)) return;
                  let d = new AbortController();
                  _ = d;
                  let p = {
                    accessToken: f,
                    isUsable: () => U.getCachedVoiceSessionId(n, s, c, f) !== void 0,
                    params: c,
                    preciseLocationHeader: A(),
                    sessionType: s,
                  };
                  G(d.signal)
                    .then(
                      () => (
                        d.signal.throwIfAborted(),
                        U.createCache(n, s, c, { accessToken: f, signal: d.signal })
                      ),
                    )
                    .then((e) => {
                      e.type === `success` && !d.signal.aborted
                        ? K(n, p)
                        : e.type === `failed` &&
                          !d.signal.aborted &&
                          t.debug(`[voice] Instant Connect prewarm failed`, {
                            safe: {},
                            sensitive: { error: e.err },
                          });
                    })
                    .catch((e) => {
                      d.signal.aborted ||
                        t.debug(`[voice] Instant Connect prewarm unavailable`, {
                          safe: {},
                          sensitive: { error: e },
                        });
                    });
                })),
                  h.signal.aborted && y());
              })().catch((e) => {
                h.signal.aborted ||
                  t.debug(`[voice] Instant Connect prewarm unavailable`, {
                    safe: {},
                    sensitive: { error: e },
                  });
              }));
          });
        return () => {
          (o(), r?.());
        };
      }),
      (e[4] = a),
      (e[5] = c),
      (e[6] = i),
      (e[7] = l),
      (e[8] = p))
    : (p = e[8]);
  let h = (0, X.useEffectEvent)(p),
    _;
  e[9] === h ? (_ = e[10]) : ((_ = () => h()), (e[9] = h), (e[10] = _));
  let y;
  return (
    e[11] !== f || e[12] !== i ? ((y = [f, i]), (e[11] = f), (e[12] = i), (e[13] = y)) : (y = e[13]),
    (0, X.useEffect)(_, y),
    null
  );
}
function J(e) {
  t.debug(`[voice] Peer connection prewarm unavailable`, { safe: {}, sensitive: { error: e } });
}
var Y, X, Z;
function Q() {
  return (Q = e(() => {
    ((Y = c()),
      S(),
      i(),
      (X = u()),
      y(),
      _(),
      f(),
      h(),
      l(),
      a(),
      p(),
      C(),
      D(),
      j(),
      E(),
      F(),
      ie(),
      k(),
      W(),
      T(),
      L(),
      N(),
      (Z = s(
        n,
        () => x()?.accessToken,
        ({ set: e }) => {
          let t = () => {
            e(x()?.accessToken);
          };
          return (
            window.addEventListener(`codex-browser-auth-changed`, t),
            t(),
            () => {
              window.removeEventListener(`codex-browser-auth-changed`, t);
            }
          );
        },
      )));
  }))();
}
function ae(e) {
  (U.clear(e), V.resetAll());
}
function $() {
  return ($ = e(() => {
    (F(), L(), Q());
  }))();
}
export { Q as i, $ as n, q as r, ae as t };
//# sourceMappingURL=voice-prewarm-ec2ceee46f26.js.map
