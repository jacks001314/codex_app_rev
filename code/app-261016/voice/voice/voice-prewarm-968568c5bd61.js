import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DCt as r,
  FBt as i,
  PBt as a,
  Qst as o,
  RFt as s,
  ZSt as c,
  iCt as l,
  nCt as u,
  zFt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as f,
  IWn as p,
  Y2 as m,
  YRr as h,
  Z2 as g,
  aDt as _,
  dWn as ee,
  eMr as v,
  iDt as y,
  nMr as b,
  nzr as x,
  oDt as te,
  wLr as S,
  zRr as C,
} from "./app-initial-ad16eaadf81f.js";
import { ni as w, ri as T } from "./app-primary-3e00728c2a4c.js";
import { r as E, t as ne } from "./voice-configuration-manager-f7e817b94a05.js";
import {
  A as re,
  D as ie,
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
} from "./voice-session-parameters-aab04323d949.js";
function q() {
  let e = (0, Y.c)(14),
    n = t(o),
    r = l(y),
    i = l(_),
    a = u(M, i),
    { voiceSystemHints: s } = l(w),
    c;
  e[0] !== r || e[1] !== a || e[2] !== s
    ? ((c = JSON.stringify([r, a, s])), (e[0] = r), (e[1] = a), (e[2] = s), (e[3] = c))
    : (c = e[3]);
  let p = c,
    h;
  e[4] !== r || e[5] !== a || e[6] !== n || e[7] !== s
    ? ((h = () => {
        if (!a || typeof RTCPeerConnection > `u` || (I().catch(J), r == null)) return;
        let { conversationId: e } = r,
          t,
          i,
          o = n.watch((n) => {
            if (!B(n, { disableExposureLog: !0 })) {
              (i?.(), (t = void 0));
              return;
            }
            let a = n.get(C),
              o = n.get(f),
              c = n.get(m, { accountId: a, userId: o }).data,
              l = z.isRecentVoiceUseEligible(n),
              u = z.isNewUserEligible(n, c?.created),
              p = n.get(Z),
              h = JSON.stringify([a, o, p, c?.created, l, u]);
            if (t === h) return;
            ((t = h), i?.());
            let g = new AbortController(),
              _,
              y,
              b = () => {
                (g.abort(`Instant Connect prewarm canceled`),
                  _?.(),
                  y?.abort(`Instant Connect prewarm canceled`));
              };
            ((i = b),
              (async () => {
                let t = l || u || (await z.isMicrophonePermissionEligible(n)),
                  i = !t && z.isRecentVoiceUseRequired(n);
                if (g.signal.aborted || (!t && !i)) return;
                (await R(n, e, g.signal, r), g.signal.throwIfAborted());
                let a;
                ((_ = n.watch((t) => {
                  if (g.signal.aborted) return;
                  let n = t.get(v).data;
                  if (n == null) return;
                  let o = E.sessionType(t, r.conversationDetailsTarget.gizmoId),
                    c = H(t, {
                      ambientParameters: {
                        conversationId: e,
                        composerContext: r,
                        backendReasoningEffort: n.voiceReasoningEffort,
                        gizmoId: r.conversationDetailsTarget.gizmoId ?? void 0,
                        historyAndTrainingDisabled: !1,
                        languageCode: n.voiceMainLanguage,
                        sessionType: o,
                        voice: n.voiceName ?? `fathom`,
                      },
                      liveParameters: {
                        requestedVoiceMode:
                          o === `wm`
                            ? `wingman`
                            : E.requestedVoiceMode(t, void 0, r.conversationDetailsTarget.gizmoId),
                        voiceSessionId: ``,
                      },
                      systemHints: s,
                    }),
                    l = P(t, o, c, p);
                  if (a === l) return;
                  if (((a = l), i)) {
                    O(
                      t,
                      o,
                      l,
                      ee.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_NO_WARM_SESSION_NOT_RECENT_VOICE_USER,
                    );
                    return;
                  }
                  if ((y?.abort(), g.signal.aborted)) return;
                  let u = new AbortController();
                  y = u;
                  let f = {
                    accessToken: p,
                    isUsable: () => U.getCachedVoiceSessionId(t, o, c, p) !== void 0,
                    params: c,
                    preciseLocationHeader: A(),
                    sessionType: o,
                  };
                  G(u.signal)
                    .then(
                      () => (
                        u.signal.throwIfAborted(),
                        U.createCache(t, o, c, { accessToken: p, signal: u.signal })
                      ),
                    )
                    .then((e) => {
                      e.type === `success` && !u.signal.aborted
                        ? K(t, f)
                        : e.type === `failed` &&
                          !u.signal.aborted &&
                          d.debug(`[voice] Instant Connect prewarm failed`, {
                            safe: {},
                            sensitive: { error: e.err },
                          });
                    })
                    .catch((e) => {
                      u.signal.aborted ||
                        d.debug(`[voice] Instant Connect prewarm unavailable`, {
                          safe: {},
                          sensitive: { error: e },
                        });
                    });
                })),
                  g.signal.aborted && b());
              })().catch((e) => {
                g.signal.aborted ||
                  d.debug(`[voice] Instant Connect prewarm unavailable`, {
                    safe: {},
                    sensitive: { error: e },
                  });
              }));
          });
        return () => {
          (o(), i?.());
        };
      }),
      (e[4] = r),
      (e[5] = a),
      (e[6] = n),
      (e[7] = s),
      (e[8] = h))
    : (h = e[8]);
  let g = (0, X.useEffectEvent)(h),
    b;
  e[9] === g ? (b = e[10]) : ((b = () => g()), (e[9] = g), (e[10] = b));
  let x;
  return (
    e[11] !== p || e[12] !== n ? ((x = [p, n]), (e[11] = p), (e[12] = n), (e[13] = x)) : (x = e[13]),
    (0, X.useEffect)(b, x),
    null
  );
}
function J(e) {
  d.debug(`[voice] Peer connection prewarm unavailable`, { safe: {}, sensitive: { error: e } });
}
var Y, X, Z;
function Q() {
  return (Q = e(() => {
    ((Y = a()),
      p(),
      c(),
      (X = i()),
      S(),
      x(),
      g(),
      b(),
      n(),
      s(),
      te(),
      T(),
      D(),
      j(),
      ie(),
      F(),
      ne(),
      k(),
      W(),
      re(),
      L(),
      N(),
      (Z = r(
        o,
        () => h()?.accessToken,
        ({ set: e }) => {
          let t = () => {
            e(h()?.accessToken);
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
//# sourceMappingURL=voice-prewarm-968568c5bd61.js.map
