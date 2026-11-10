import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  APt as n,
  Bpt as r,
  CPt as i,
  Cat as a,
  Cot as o,
  EPt as s,
  HNt as c,
  Jrt as l,
  Pxt as u,
  Rpt as d,
  Rrt as f,
  SPt as p,
  TLt as m,
  Tat as h,
  cSt as g,
  drt as _,
  fLt as v,
  fSt as y,
  frt as b,
  gat as x,
  grt as ee,
  mrt as te,
  nSt as ne,
  oIt as re,
  oSt as ie,
  pLt as S,
  prt as ae,
  vrt as oe,
  wat as se,
  wot as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Bn as ce,
  AMr as le,
  DAt as w,
  DPr as ue,
  EAt as de,
  ELn as fe,
  ETr as pe,
  F2t as me,
  FAn as he,
  FFr as ge,
  GMr as _e,
  GTr as ve,
  GVn as ye,
  I2t as be,
  I4t as xe,
  JBn as T,
  L4t as Se,
  LMn as Ce,
  NDr as we,
  NMr as Te,
  OPr as E,
  QBn as Ee,
  QDr as De,
  Qjr as Oe,
  Qmr as ke,
  RLn as Ae,
  SYn as je,
  TAt as Me,
  WTr as Ne,
  XDr as Pe,
  XMr as Fe,
  YBn as Ie,
  Ymr as Le,
  ZMr as Re,
  Zjr as ze,
  _In as Be,
  a8t as Ve,
  ahr as He,
  bYn as Ue,
  bZn as We,
  cNn as Ge,
  dAt as Ke,
  dMr as qe,
  eNr as Je,
  eVn as Ye,
  ehr as Xe,
  fMr as Ze,
  hEr as Qe,
  hPr as $e,
  ihr as et,
  jDr as tt,
  jMr as nt,
  jPr as rt,
  kPr as it,
  lPr as at,
  lhr as ot,
  nAt as st,
  o2t as ct,
  o8t as lt,
  oFr as ut,
  oPr as dt,
  ocr as ft,
  pZn as pt,
  qBn as mt,
  qVn as ht,
  r$n as D,
  rAt as gt,
  s2t as _t,
  sPr as vt,
  shr as yt,
  tNr as bt,
  uAt as xt,
  uPr as St,
  vEr as Ct,
  vIn as wt,
  wAt as Tt,
  xNn as Et,
  xYn as Dt,
  yVn as Ot,
  yYn as kt,
  yjn as At,
  zFr as jt,
} from "./app-initial-5851df3f6cb1.js";
import { dc as Mt, pc as Nt } from "./app-primary-fe8a450b3b04.js";
import { o as Pt, s as Ft } from "./preferences-d95b6577e820.js";
import { a as O, r as k, t as A } from "./voice-configuration-manager-eab950a76e87.js";
function It(e) {
  return e.get(rt)?.getLayer(`815598430`).get(`web_enabled`, !1) ?? !1;
}
function Lt(e) {
  return e.get(rt)?.getLayer(`794043821`).get(`startup_connection_timeout_threshold_millis`, 1e4) ?? 1e4;
}
function Rt() {
  return (Rt = e(() => {
    E();
  }))();
}
var zt;
function Bt() {
  return (Bt = e(() => {
    (u(),
      bt(),
      Ze(),
      ve(),
      ht(),
      At(),
      we(),
      Se(),
      a(),
      Ct(),
      pe(),
      jt(),
      C(),
      E(),
      le(),
      de(),
      A(),
      Rt(),
      (zt = ne(o, (e, { get: t, scope: n }) => {
        let { conversationId: r, gizmoId: i } =
          typeof e == `object` && e ? e : { conversationId: e, gizmoId: void 0 };
        if (
          !t(it, `4029789265`) ||
          (r != null &&
            t(pt, r) == null &&
            t(ye, r)?.some(
              (e) =>
                e.author.role === `assistant` &&
                (e.author.metadata?.real_author === `model_first_landing` ||
                  typeof e.metadata?.model_first_landing_ref == `string`),
            ))
        )
          return !1;
        let a = t(ge),
          o = a?.pathname ?? `/`,
          s = o === `/` || x(o),
          c = h(o),
          l = s ? t(Qe) === `work` : t(We, r) === `tpp`;
        if (se(a?.search ?? ``) || !(s || c != null) || (c != null && `gizmoId` in c.params)) return !1;
        let u = t(tt),
          d = t(Re);
        if (
          d.status !== `allowed` ||
          !(`accountId` in d) ||
          (d.accountStructure !== `personal` && d.accountStructure !== `workspace`)
        )
          return !1;
        let { pending: f, subscriptionRequired: p } = t(xe, r);
        if (f || p) return !1;
        let m = d.accountStructure === `workspace` ? t(qe, d.accountId) : null,
          g = m?.data?.permissions;
        if (l && s && t(Ne)) return !1;
        let _ = w(n, { conversationId: r, gizmoId: i });
        return (
          (!(_ != null && !Ae(_)) || (`plan` in d && Te(d.plan) && !nt(d.plan))) &&
          !m?.isPending &&
          !m?.isError &&
          (g == null || g.includes(`chatgpt.workspace.feature.voice.access`)) &&
          u.data?.voiceEnabled === !0 &&
          _ == null &&
          (k.sessionType$(n, _) === `wm` || !1) &&
          (!l || It(n))
        );
      })));
  }))();
}
var Vt, Ht, Ut, Wt, Gt, j, M, Kt, qt, Jt, Yt, Xt;
function Zt() {
  return (Zt = e(() => {
    ((Vt = 8),
      (Ht = 3e4),
      (Ut = 1e3),
      (Wt = 1),
      (Gt = (e) => e.entryType === `resource`),
      (j = (e) => {
        try {
          e();
        } catch {}
      }),
      (M = (e) => new URL(e, globalThis.location.href).href),
      (Kt = (e, t, n, r) => M(e.name) === t && e.startTime + Wt >= n && e.startTime <= r),
      (qt = (e, t) => {
        try {
          return typeof PerformanceObserver > `u` ||
            !PerformanceObserver.supportedEntryTypes?.includes(`resource`)
            ? null
            : Jt(M(e), t);
        } catch {
          return null;
        }
      }),
      (Jt = (e, t) => {
        let n = [],
          r,
          i = 1 / 0,
          a = !1,
          o,
          s,
          c,
          l,
          u,
          d = (r) => {
            let s = !1;
            for (let a of r)
              Gt(a) &&
                Kt(a, e, t, i) &&
                (n.push(a),
                n.sort((e, t) => t.startTime - e.startTime),
                (n.length = Math.min(n.length, Vt)),
                (s = !0));
            s && !a && o !== void 0 && n.length >= o && f();
          };
        function f() {
          if (a) return;
          ((a = !0),
            j(() => {
              l !== void 0 && globalThis.clearTimeout(l);
            }),
            j(() => {
              u !== void 0 && globalThis.clearTimeout(u);
            }),
            j(() => globalThis.removeEventListener(`pagehide`, f)),
            j(() => globalThis.document?.removeEventListener(`freeze`, f)));
          try {
            r && d(r.takeRecords());
          } catch {}
          j(() => r?.disconnect());
          let e = c;
          ((c = void 0), e?.([...n]));
        }
        try {
          ((r = new PerformanceObserver((e) => {
            try {
              d(e.getEntriesByType(`resource`));
            } catch {
              f();
            }
          })),
            r.observe({ type: `resource` }),
            (l = globalThis.setTimeout(f, Ht)),
            globalThis.addEventListener(`pagehide`, f, { once: !0 }),
            globalThis.document?.addEventListener(`freeze`, f, { once: !0 }));
        } catch {
          return (f(), null);
        }
        return {
          collectForCompletedOperation: (e, t) => {
            if (s) return s;
            try {
              i = e;
              for (let e = n.length - 1; e >= 0; --e) n[e].startTime > i && n.splice(e, 1);
            } catch {
              f();
            }
            return a
              ? ((s = Promise.resolve([...n])), s)
              : ((o = t),
                (s = new Promise((e) => {
                  c = e;
                  try {
                    if ((d(r?.takeRecords() ?? []), a)) return;
                    if (n.length >= t) {
                      f();
                      return;
                    }
                    u = globalThis.setTimeout(f, Ut);
                  } catch {
                    f();
                  }
                })),
                s);
          },
          disconnect: f,
        };
      }),
      (Yt = (e) => performance.getEntriesByName(M(e), `resource`).filter(Gt)),
      (Xt = (e, t, n, r) => {
        let i = M(t),
          a;
        for (let t of e) Kt(t, i, n, r) && (a == null || t.startTime >= a.startTime) && (a = t);
        return a;
      }));
  }))();
}
var Qt;
function $t() {
  return ($t = e(() => {
    (te(),
      vt(),
      b(),
      (Qt = {
        getVoiceAccessToken() {
          return Promise.resolve(void 0);
        },
        async fetchVoiceRequest(e, t, n, r) {
          let i = { ...dt(), ...n.headers };
          r && (i.Authorization = `Bearer ${r}`);
          let a = typeof n.body == `string` ? void 0 : await _(n.body);
          return (
            a && (i[`Content-Type`] = a.contentType),
            ae(
              {
                url: t,
                method: `POST`,
                body: a?.bytes ?? (typeof n.body == `string` ? n.body : void 0),
                headers: i,
              },
              n.signal,
            )
          );
        },
      }));
  }))();
}
function en(e) {
  return window.location.hostname.endsWith(`chatgpt-staging.com`)
    ? `https://chatgpt-staging.com`
    : `https://chatgpt.com`;
}
function tn() {
  return N.getRealtimeVoiceStatus;
}
function nn() {
  let e = (0, an.getCookie)(`oai-ll`);
  if (typeof e == `string`)
    try {
      let t = gn.safeParse(JSON.parse(e));
      if (!t.success) return;
      let { latitude: n, longitude: r, locationAccuracy: i } = t.data;
      return `${n},${r},${i}`;
    } catch {
      return;
    }
}
async function rn(e, t, n, r) {
  let i = e._getToken.resourceTiming;
  i.start();
  let a = performance.now(),
    o = qt(t, a),
    s = !1,
    c = () => {
      ((s = !0), o?.disconnect(), i.end());
    };
  r?.addEventListener(`abort`, c, { once: !0 });
  let l = e._getToken,
    u = 1;
  try {
    let e = await n(() => {
      u = 2;
    });
    if ((r?.removeEventListener(`abort`, c), s)) return e;
    let d = performance.now(),
      f = (e) => {
        try {
          let n = Xt(e ?? Yt(t), t, a, d);
          if (!n) return;
          let { domainLookup: r, connect: i, secureConnection: o, request: s, response: c, latency: u } = l,
            {
              domainLookupEnd: f,
              domainLookupStart: p,
              connectEnd: m,
              connectStart: h,
              secureConnectionStart: g,
              requestStart: _,
              responseStart: v,
              responseEnd: y,
              duration: b,
            } = n;
          (p > 0 && r.setHighResStart(p),
            f > 0 && r.setHighResEnd(f),
            h > 0 && i.setHighResStart(h),
            m > 0 && i.setHighResEnd(m),
            g > 0 && o.setHighResMark(g),
            _ > 0 && s.setHighResStart(_),
            v > 0 && c.setHighResStart(v),
            y > 0 && c.setHighResEnd(y),
            b && u.setLatency(b));
        } catch {
        } finally {
          i.end();
        }
      },
      p = () => {
        try {
          (o?.disconnect(), f());
        } catch {
          i.end();
        }
      };
    if (o)
      try {
        o.collectForCompletedOperation(d, u)
          .then(f, p)
          .catch(() => {});
      } catch {
        p();
      }
    else p();
    return e;
  } catch (e) {
    throw (r?.removeEventListener(`abort`, c), o?.disconnect(), i.end(), e);
  }
}
var an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, N;
function _n() {
  return (_n = e(() => {
    (Ot(),
      (an = l()),
      s(),
      je(),
      Xe(),
      yt(),
      Pe(),
      gt(),
      oe(),
      Zt(),
      A(),
      $t(),
      (on = [/\[abort\]/, /The user aborted a request/, /Fetch is aborted/, /Request signal is aborted/]),
      (sn = `session_limit_exceeded`),
      (cn = `global_limits_exceeded`),
      (ln = class extends Error {
        code;
        constructor(e, t = sn) {
          (super(e), (this.code = t));
        }
      }),
      (un = (e) => e instanceof ln),
      (dn = (e) => un(e) && e.code === cn),
      (fn = (e) => {
        if (e instanceof DOMException && e.name === `AbortError`) return !0;
        let t = e instanceof Error ? e.message : String(e);
        return on.some((e) => e.test(t));
      }),
      (pn = (e, t = 0, n) => {
        let r = new URLSearchParams();
        return (
          r.set(`dcid`, t.toString()),
          e && r.set(`log_call`, `1`),
          n &&
            (r.set(`instant_connect`, `1`),
            n.refresh && r.set(`refresh`, `1`),
            n.serverUfragId && r.set(`ufrag`, n.serverUfragId)),
          r.toString()
        );
      }),
      (mn = S({ proofofwork: S({ required: n(), seed: m().min(1), difficulty: m().min(1) }).optional() })),
      (hn = S({
        error: S({
          code: m()
            .optional()
            .catch(void 0),
          message: m()
            .optional()
            .catch(void 0),
        }),
      })),
      (gn = S({ latitude: v(), longitude: v(), locationAccuracy: v() })),
      (N = class {
        static getProofToken(e) {
          let t = e?.proofofwork;
          if (!t || typeof t != `object` || !t.required) return Promise.resolve(null);
          let n = mn.safeParse(e);
          return n.success ? Ue(n.data) : Promise.resolve(null);
        }
        static async startTransceiverSession(e, t) {
          let {
            accessToken: n,
            offer: r,
            payload: i,
            dataChannelId: a,
            logCall: o = k.tcLoggingEnabled(e),
            signal: s,
            proofOfWorkAnswer: c,
          } = t;
          s?.throwIfAborted();
          let l = k.voicePath(
              e,
              i.voice_mode,
              i.conversation_mode?.kind === `gizmo_interaction` ? i.conversation_mode.gizmo_id : void 0,
            ),
            u = en(e),
            d =
              t.type === `instant_connect`
                ? {
                    refresh: t.phase === `prefetch` && t.serverUfragId != null,
                    serverUfragId: t.serverUfragId,
                  }
                : void 0,
            f = `${u}${l}?${pn(o, a, d)}`,
            p = async (a) => {
              if (r.sdp == null) throw Error(`Failed to create session: missing SDP offer`);
              let o = new FormData();
              (o.append(`sdp`, r.sdp), o.append(`session`, JSON.stringify(i)));
              let l =
                  i.conversation_mode?.kind === `gizmo_interaction` ? i.conversation_mode.gizmo_id : void 0,
                u = { ...(l != null && e.get(ot)?.projectId === l ? et(`/gizmos/${l}`) : {}) },
                d = nn();
              (d && (u[`OAI-Location`] = d), c && (u[kt.proofToken] = c));
              let p = He(u),
                m = await Qt.fetchVoiceRequest(
                  e,
                  f,
                  { body: o, headers: u, signal: p ? AbortSignal.any(s ? [s, p] : [p]) : s },
                  n,
                  a,
                );
              if (!m.ok) {
                let n = hn.safeParse(await m.json().catch(() => void 0)),
                  r = n.success ? n.data.error : void 0;
                if (t.type !== `instant_connect` || t.phase !== `prefetch`) {
                  let n = () => {
                    De(e, Ee, {
                      voiceMetadata: t.voiceMetadata,
                      errorBucket: ce.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_BUCKET_CLIENT,
                      errorType:
                        Ye.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_CONNECTION_ESTABLISHMENT_FAILED,
                    });
                  };
                  t.type === `instant_connect` ? t.deferUserPerceivedError(n) : n();
                }
                throw r?.code === sn || r?.code === cn
                  ? new ln(r.message, r.code)
                  : Error(`Failed to create session: ${m.status} ${m.statusText}`);
              }
              return m;
            };
          return t.type === `instant_connect` && t.phase === `prefetch`
            ? p()
            : rn(t.type === `instant_connect` ? t.timings : st(e), f, p, s);
        }
        static getVoiceStatus = (e, t, n, r) =>
          Le.safePost(`/conversation/voice/status`, {
            requestBody: t,
            additionalHeaders: { [kt.proofToken]: Dt() },
            signal: r,
          });
        static getRealtimeVoiceStatus = async (e, t, n, r) => {
          let i = `${en(e)}/realtime/status`,
            a = {
              ...ke(),
              ...(t.gizmo_id != null && e.get(ot)?.projectId === t.gizmo_id
                ? et(`/gizmos/${t.gizmo_id}`)
                : {}),
              "Content-Type": `application/json`,
              [kt.proofToken]: Dt(),
            },
            o = He(a),
            s = await Qt.fetchVoiceRequest(e, i, {
              body: JSON.stringify(t),
              credentials: `include`,
              headers: a,
              signal: o ? AbortSignal.any(r ? [r, o] : [o]) : r,
            });
          if (!s.ok) throw await ee(s, i);
          return await s.json();
        };
      }));
  }))();
}
function vn(e, t, n) {
  (n === `hit` && (e.get(L, void 0).cacheMiss = void 0),
    P(t, n === `hit` ? I.treatmentInFlightClaim : I.treatmentCacheMiss));
}
function P(e, t) {
  let n = e._instantConnect.clientFlags;
  n.includes(t) || n.push(t);
}
function yn(e, t) {
  e.get(L, void 0).latestSuccessfulPrewarm = { ...t, params: structuredClone(t.params) };
}
function F(e, t, n) {
  if (!t) return;
  let r = e.get(L, void 0),
    i = r.cacheMiss;
  (i?.voiceSessionId === t && i.reason.startsWith(Nn)) || (r.cacheMiss = { reason: n, voiceSessionId: t });
}
function bn(e, t, n, r, i = {}) {
  let a = e.get(L, void 0).prefetchAccounting[t];
  if (!r) {
    a.set(n, { attempted: !0 });
    return;
  }
  let o = a.get(n);
  (!o?.reason || i.overwrite) && a.set(n, { attempted: o?.attempted ?? !1, reason: r });
}
function xn(e, t, n, r) {
  let i = e.get(L, void 0).prefetchAccounting[t],
    a = i.get(n);
  return (
    i.delete(n),
    a?.reason
      ? a.reason
      : r
        ? T.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_MISMATCHED
        : a?.attempted
          ? T.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_EMPTY
          : T.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_NO_WARM_SESSION_PREFETCH_NOT_STARTED
  );
}
function Sn(e) {
  let { prefetchAccounting: t } = e.get(L, void 0);
  (t.vp.clear(), t.wm.clear());
}
function Cn(e, t, n, r) {
  let i = { accessToken: r, params: n, preciseLocationHeader: nn(), sessionType: t },
    a = e.get(L, void 0),
    o = a.latestSuccessfulPrewarm;
  if (!o || o.accessToken !== i.accessToken || o.preciseLocationHeader !== i.preciseLocationHeader) return;
  try {
    if (!o.isUsable()) return;
  } catch {
    return;
  }
  let s = i.params.voice_session_id,
    c = kn(o, i);
  if (!s || c === void 0 || a.invalidationVoiceSessionId === s) return;
  ((a.invalidationVoiceSessionId = s), (a.invalidationReason = c));
  let l = jn.safeParse(`${Nn}${c.slice(50)}`);
  if (l.success) return (F(e, s, l.data), En(e, s).instantConnectCacheMissReason);
}
function wn(e, t) {
  P(e, t === `pc1` ? I.pc1Winner : I.pc2Winner);
}
function Tn(e, t) {
  P(e, { timeout: I.raceTimedOut, cancelled: I.raceCancelled, candidate_failure: I.raceFailed }[t]);
}
function En(e, t) {
  let { cacheMiss: n } = e.get(L, void 0);
  return n?.voiceSessionId === t ? { instantConnectCacheMissReason: n.reason } : {};
}
function Dn(e, t) {
  let n = st(e),
    { _instantConnect: r, tcConnect: i } = n,
    a = e.get(L, void 0),
    o = a.invalidationVoiceSessionId === t ? a.invalidationReason : void 0,
    s = r.clientFlags.includes(I.treatmentInFlightClaim);
  s &&
    r.raceStarted.isMarked() &&
    r.winner == null &&
    !r.clientFlags.includes(I.raceTimedOut) &&
    !r.clientFlags.includes(I.raceFailed) &&
    P(n, I.raceCancelled);
  let c = i.isSuccessful() && (!s || r.winner != null);
  return {
    ...(r.clientFlags.length > 0 ? { clientFlags: [...r.clientFlags] } : {}),
    ...(o === void 0 ? {} : { instantConnectInvalidationReason: o }),
    ...(c ? { instantConnectPrefetchUsed: r.winner === `pc1` } : {}),
  };
}
function On(e, t) {
  if (t === `backend_mode`) return e.sessionType === `vp` ? e.params.voice_mode : e.sessionType;
  if (t === `gizmo_id`) {
    let t = e.params.conversation_mode;
    return t && `gizmo_id` in t ? t.gizmo_id : void 0;
  }
  return e.params[t];
}
function kn(e, t) {
  for (let [n, r, i] of Pn)
    if ((i == null || i === e.sessionType) && On(e, n) !== On(t, n)) return An[`${Mn}${r}`];
}
var I, L, An, jn, Mn, Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    (Ot(),
      u(),
      s(),
      C(),
      gt(),
      _n(),
      (I = {
        treatmentCacheMiss: `voice_instant_connect_treatment_cache_miss`,
        treatmentInFlightClaim: `voice_instant_connect_treatment_in_flight_claim`,
        preparedApplied: `voice_instant_connect_prepared_applied`,
        preparedActivationFailed: `voice_instant_connect_prepared_activation_failed`,
        validationConfirmed: `voice_instant_connect_validation_confirmed`,
        replacementCreated: `voice_instant_connect_replacement_created`,
        validationFailed: `voice_instant_connect_validation_failed`,
        pc1Winner: `voice_instant_connect_pc1_winner`,
        pc2Winner: `voice_instant_connect_pc2_winner`,
        raceTimedOut: `voice_instant_connect_race_timed_out`,
        raceCancelled: `voice_instant_connect_race_cancelled`,
        raceFailed: `voice_instant_connect_race_failed`,
      }),
      (L = g(o, (e) => ({
        latestSuccessfulPrewarm: void 0,
        invalidationVoiceSessionId: void 0,
        invalidationReason: void 0,
        cacheMiss: void 0,
        prefetchAccounting: { vp: new Map(), wm: new Map() },
      }))),
      (An = Ie),
      (jn = re(T)),
      (Mn = `CHATGPT_VOICE_INSTANT_CONNECT_INVALIDATION_REASON_`),
      (Nn = `CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_INVALIDATION_`),
      (Pn = [
        [`conversation_id`, `CONVERSATION_ID`],
        [`backend_mode`, `BACKEND_MODE`],
        [`chat_mode`, `CHAT_MODE`, `wm`],
        [`gizmo_id`, `GIZMO_ID`],
        [`system_prompt_type`, `SYSTEM_PROMPT_TYPE`, `vp`],
        [`history_and_training_disabled`, `TEMPORARY_CONVERSATION`],
        [`model_slug`, `MODEL_SLUG`],
        [`model_slug_advanced`, `MODEL_SLUG_ADVANCED`, `vp`],
        [`backend_reasoning_effort`, `BACKEND_REASONING_EFFORT`, `wm`],
        [`voice`, `VOICE`],
        [`language_code`, `LANGUAGE_CODE`],
      ]));
  }))();
}
async function In() {
  try {
    return (await navigator.permissions.query({ name: `microphone` })).state;
  } catch {
    return `unknown`;
  }
}
function Ln() {
  return (Ln = e(() => {
    p();
  }))();
}
var Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, R;
function Jn() {
  return (Jn = e(() => {
    (E(),
      p(),
      Pt(),
      Ln(),
      (Rn = `391813552`),
      (zn = 864e5),
      (Bn = !1),
      (Vn = 7),
      (Hn = 30),
      (Un = !1),
      (Wn = 144e5),
      (Gn = { disableExposureLog: !0 }),
      (Kn = {
        cache_ttl_ms: Wn,
        enabled: !1,
        microphone_permission_eligibility_enabled: Un,
        new_user_eligibility_enabled: Bn,
        new_user_window_days: Vn,
        recent_voice_window_days: Hn,
      }),
      (qn = class {
        isEnabled(e, t) {
          return this.getPolicyParameter(e, `enabled`, t);
        }
        isRecentVoiceUseRequired(e) {
          return (
            !this.getPolicyParameter(e, `new_user_eligibility_enabled`) &&
            !this.getPolicyParameter(e, `microphone_permission_eligibility_enabled`)
          );
        }
        isRecentVoiceUseEligible(e) {
          let t = e.get(Ft);
          if (typeof t != `string`) return !1;
          let n = Date.parse(t);
          if (!Number.isFinite(n)) return !1;
          let r = this.getPolicyParameter(e, `recent_voice_window_days`),
            i = Number.isFinite(r) && r >= 0 ? r : Hn;
          return n > Date.now() - i * zn;
        }
        isNewUserEligible(e, t) {
          if (!t || !this.getPolicyParameter(e, `new_user_eligibility_enabled`)) return !1;
          let n = this.getPolicyParameter(e, `new_user_window_days`),
            r = Number.isFinite(n) && n >= 0 ? n : Vn;
          return Date.now() - t * 1e3 < r * zn;
        }
        async isMicrophonePermissionEligible(e) {
          return this.getPolicyParameter(e, `microphone_permission_eligibility_enabled`)
            ? (await In()) === `granted`
            : !1;
        }
        getCacheTtlMs(e) {
          let t = this.getPolicyParameter(e, `cache_ttl_ms`);
          return Number.isFinite(t) && t > 0 ? t : Wn;
        }
        getPolicyParameter(e, t, n = Gn) {
          let r = Kn[t];
          try {
            return e.get(rt)?.getLayer(Rn, n).get(t, r) ?? r;
          } catch (e) {
            return (
              i.debug(`[voice] Instant-connect policy unavailable`, {
                safe: { parameter: t },
                sensitive: { error: e },
              }),
              r
            );
          }
        }
      }),
      (R = new qn()));
  }))();
}
function Yn(e) {
  return ue(e, Zn);
}
function Xn(e, t) {
  return Yn(e) && R.isEnabled(e, t);
}
var Zn;
function Qn() {
  return (Qn = e(() => {
    (E(), Jn(), (Zn = `994921855`));
  }))();
}
var $n;
function er() {
  return (er = e(() => {
    $n = () => crypto.randomUUID();
  }))();
}
function tr(e) {
  let t = JSON.stringify(e, (e, t) =>
    t && typeof t == `object` && !Array.isArray(t)
      ? Object.fromEntries(Object.entries(t).sort(([e], [t]) => (e < t ? -1 : +(e > t))))
      : t,
  );
  if (t === void 0) throw TypeError(`Value cannot be serialized as JSON`);
  return t;
}
function nr(e, t) {
  e.set(ir, ({ sampleHistory: e }) => ({
    latestSample: t,
    sampleHistory: t == null ? [] : [...e, { ...t, webrtcStats: void 0 }].slice(-7200),
  }));
}
var rr, ir;
function ar() {
  return (ar = e(() => {
    (u(),
      C(),
      ze(),
      (rr = ie(o, ({ get: e }) => e(Oe, `2048788910`)?.get(`intervalMs`, 1e3) ?? 1e3)),
      (ir = y(o, () => ({ latestSample: null, sampleHistory: [] }))),
      ie(o, ({ get: e }) => e(ir).latestSample),
      ie(o, ({ get: e }) => e(ir).sampleHistory));
  }))();
}
function or(e, { localIntervalOverrideMs: t } = {}) {
  return { enabled: e.get(Oe, `2048788910`)?.get(`enabled`, 2) ?? 2, intervalMs: t ?? e.get(rr) };
}
function sr(e) {
  return ue(e, `675831937`);
}
function cr() {
  return (cr = e(() => {
    (ze(), E(), ar());
  }))();
}
function z(e) {
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function B(e) {
  let t = z(e);
  return t !== void 0 && t >= 0 ? t : void 0;
}
function V(e, t) {
  if (e === void 0) return;
  if (t === void 0) return e;
  let n = e - t;
  return n >= 0 ? n : void 0;
}
function lr(e, t) {
  return t === void 0 ? 0 : Math.max(0, e - t);
}
function ur(e) {
  let t = Reflect.get(e, `kind`) ?? Reflect.get(e, `mediaType`);
  return e.type === `inbound-rtp` && t === `audio`;
}
function dr(e) {
  return Array.from(e.values()).filter(ur);
}
function fr(e) {
  let t = Array.from(e.values()),
    n = t.find((e) => e.type === `transport`),
    r = Reflect.get(n ?? {}, `selectedCandidatePairId`);
  if (typeof r == `string`) {
    let t = e.get(r);
    if (t?.type === `candidate-pair`) return t;
  }
  return t.find((e) => e.type === `candidate-pair` && Reflect.get(e, `selected`) === !0);
}
function pr(e, t) {
  if (typeof e.id == `string` && e.id.length > 0) return e.id;
  let n = B(Reflect.get(e, `ssrc`));
  return n === void 0 ? `inbound-audio-${t}` : `ssrc-${n}`;
}
function mr(e, t) {
  let n = t ? Reflect.get(t, `codecId`) : void 0;
  return hr((typeof n == `string` ? e.get(n) : void 0)?.clockRate);
}
function hr(e) {
  let t = z(e);
  return t !== void 0 && t > 0 ? t : void 0;
}
function gr() {
  return (gr = e(() => {}))();
}
function _r(e, t, n) {
  let r = (e - t) >>> 0;
  return ((r > 2147483647 ? r - 4294967296 : r) / n) * 1e3;
}
function vr() {
  return (
    typeof RTCRtpSender == `function` &&
    typeof RTCRtpReceiver == `function` &&
    typeof RTCRtpScriptTransform == `function` &&
    typeof Worker == `function` &&
    `transform` in RTCRtpSender.prototype &&
    `transform` in RTCRtpReceiver.prototype
  );
}
function yr(e) {
  return {
    concealedSamples: B(e?.concealedSamples),
    concealmentEvents: B(e?.concealmentEvents),
    silentConcealedSamples: B(e?.silentConcealedSamples),
    packetsLost: B(e?.packetsLost),
  };
}
function br(e) {
  return Object.values(e).some((e) => e !== void 0);
}
var xr, Sr;
function Cr() {
  return (Cr = e(() => {
    ((xr = 50),
      (Sr = class {
        audioTransceiver;
        getStats;
        includeWebRTCStats;
        audioRtpTransformWorker = null;
        latestAudioOutboundRtpTimestamp;
        latestAudioInboundRtpTimestamp;
        statsTimer = null;
        defaultLatency;
        sampling = !1;
        previousInboundAudioCounters;
        constructor(e) {
          ((this.audioTransceiver = e.audioTransceiver),
            (this.getStats = e.getStats),
            (this.defaultLatency = e.defaultLatency),
            (this.includeWebRTCStats = e.includeWebRTCStats ?? (() => !1)));
        }
        start({ sampleIntervalMs: e = this.defaultLatency, onSample: t } = {}) {
          (this.startRtpTimestampCapture(), this.startSampling({ sampleIntervalMs: e, onSample: t }));
        }
        startRtpTimestampCapture() {
          this.startAudioRtpTimestampCapture();
        }
        startSampling({ sampleIntervalMs: e = this.defaultLatency, onSample: t } = {}) {
          (this.stopSampling(),
            (this.statsTimer = window.setInterval(() => {
              this.sampleOnce(t);
            }, e)));
        }
        stop() {
          (this.stopSampling(), this.stopAudioRtpTimestampCapture());
        }
        destroy() {
          this.stop();
        }
        stopSampling() {
          (this.statsTimer != null && window.clearInterval(this.statsTimer), (this.statsTimer = null));
        }
        startAudioRtpTimestampCapture() {
          if (vr()) {
            this.stopAudioRtpTimestampCapture();
            try {
              let e = new Worker(
                new URL(
                  `` + new URL(`rtp-transform-worker.client-27691be44d13.js`, import.meta.url).href,
                  `` + import.meta.url,
                ),
                { type: `module` },
              );
              ((e.onmessage = (e) => {
                let { type: t, rtpTimestamp: n } = e.data ?? {};
                Number.isFinite(n) &&
                  (t === `outbound-audio-rtp-timestamp` && (this.latestAudioOutboundRtpTimestamp = n),
                  t === `inbound-audio-rtp-timestamp` && (this.latestAudioInboundRtpTimestamp = n));
              }),
                (this.audioTransceiver.sender.transform = new RTCRtpScriptTransform(e, {
                  name: `captureOutboundAudioRtpTimestamp`,
                })),
                (this.audioTransceiver.receiver.transform = new RTCRtpScriptTransform(e, {
                  name: `captureInboundAudioRtpTimestamp`,
                })),
                (this.audioRtpTransformWorker = e));
            } catch {
              this.stopAudioRtpTimestampCapture();
            }
          }
        }
        stopAudioRtpTimestampCapture() {
          if (vr()) {
            try {
              this.audioTransceiver.sender.transform = null;
            } catch {}
            try {
              this.audioTransceiver.receiver.transform = null;
            } catch {}
          }
          (this.audioRtpTransformWorker?.terminate(),
            (this.audioRtpTransformWorker = null),
            (this.latestAudioOutboundRtpTimestamp = void 0),
            (this.latestAudioInboundRtpTimestamp = void 0),
            (this.previousInboundAudioCounters = void 0));
        }
        async sampleOnce(e) {
          if (this.sampling) return;
          this.sampling = !0;
          let t;
          try {
            let n = this.latestAudioOutboundRtpTimestamp,
              r = this.latestAudioInboundRtpTimestamp;
            if (n === void 0 || r === void 0 || !Number.isFinite(n) || !Number.isFinite(r)) return;
            t = await this.getStats();
            let i = Array.from(t.values()),
              a = i.find(ur),
              o = i.find((e) => e.type === `outbound-rtp` && Reflect.get(e, `kind`) === `audio`);
            (a?.codecId && t.get(a.codecId), o?.codecId && t.get(o.codecId));
            let s = mr(t, o) ?? mr(t, a);
            if (s === void 0) return;
            let c = z(a?.jitterBufferDelay),
              l = z(a?.jitterBufferEmittedCount),
              u = c !== void 0 && l !== void 0 && l > 0 ? (c / l) * 1e3 : 0,
              d = _r(n, r, s),
              f = d + u,
              p = yr(a),
              m = V(p.concealedSamples, this.previousInboundAudioCounters?.concealedSamples),
              h = V(p.concealmentEvents, this.previousInboundAudioCounters?.concealmentEvents),
              g = V(p.silentConcealedSamples, this.previousInboundAudioCounters?.silentConcealedSamples),
              _ = V(p.packetsLost, this.previousInboundAudioCounters?.packetsLost);
            br(p) && (this.previousInboundAudioCounters = p);
            let v = m === void 0 ? void 0 : (m / s) * 1e3,
              y = (v ?? 0) > 0 || (h ?? 0) > 0 || (g ?? 0) > 0,
              b = `none`;
            (v ?? 0) >= xr ? (b = `severe`) : y && (b = `gap`);
            let x = Date.now();
            e?.({
              outTs: n,
              inTs: r,
              clockRateHz: s,
              audioE2eLatencyMs: f,
              rtpDeltaMs: d,
              jitterBufferDelayMs: u,
              jitterBufferDelaySeconds: c,
              jitterBufferEmittedCount: l,
              ...p,
              concealedSamplesDelta: m,
              concealedAudioDeltaMs: v,
              concealmentEventsDelta: h,
              silentConcealedSamplesDelta: g,
              packetsLostDelta: _,
              gapSeverity: b,
              sampledAtMs: x,
              webrtcStats: void 0,
            });
          } catch {
            return;
          } finally {
            this.sampling = !1;
          }
        }
      }));
  }))();
}
function wr(e, { pc: t, audioTransceiver: n }) {
  let r = sr(e),
    i = O(k.sessionType(e)),
    a = or(e, { localIntervalOverrideMs: null }),
    o;
  if (r) {
    let e = i && !!(a.enabled & 2),
      r = !i && !!(a.enabled & 1);
    (e || r) &&
      ((o = new Sr({
        audioTransceiver: n,
        getStats: () => t.getStats(),
        defaultLatency: a.intervalMs,
        includeWebRTCStats: () => !1,
      })),
      o.startRtpTimestampCapture());
  }
  return o;
}
function Tr(e, { e2eMonitor: t, getReportedVoiceMode: n, voiceSessionId: r, isMonitoring: a }) {
  if (!t) {
    nr(e, null);
    return;
  }
  let o = or(e, { localIntervalOverrideMs: null });
  (nr(e, null),
    t.startSampling({
      sampleIntervalMs: o.intervalMs,
      onSample: (t) => {
        a() &&
          (nr(e, t),
          De(e, mt, {
            outboundAudioRtpTimestamp: f(t.outTs),
            inboundAudioRtpTimestamp: f(t.inTs),
            audioE2eLatencyMs: t.audioE2eLatencyMs,
            rtpDeltaMs: t.rtpDeltaMs,
            jitterBufferDelayMs: t.jitterBufferDelayMs,
            voiceSessionId: r,
            voiceMode: n(),
          }),
          i.debug(`[transceiver] E2E latency sample`, { safe: {}, sensitive: { sample: t } }));
      },
    }));
}
function Er() {
  return (Er = e(() => {
    (ft(), Ot(), Pe(), p(), ar(), cr(), Cr(), A());
  }))();
}
function Dr(e, t, n) {
  if (n === void 0) return e;
  let r = V(t, n);
  return r === void 0 ? e : (e ?? 0) + r;
}
var Or, kr, Ar, H, jr, Mr, Nr;
function Pr() {
  return (Pr = e(() => {
    ((Or = 48e3),
      (kr = 100),
      (Ar = 0.01),
      (H = 1e3),
      (jr = 3e4),
      (Mr = class {
        audioGapWindowTracker = new Nr();
        summary;
        networkTelemetrySamples = [];
        observe(e, t, n) {
          let r = this.audioGapWindowTracker.observe(e, t);
          (this.accumulateSummary(r, n), this.observeNetworkTelemetry(e, t[0]));
        }
        getSummary(e = Date.now()) {
          let t = this.getEndSessionNetworkTelemetry(e);
          return this.summary
            ? t
              ? { ...this.summary, endSessionNetworkTelemetry: t }
              : this.summary
            : t
              ? { endSessionNetworkTelemetry: t }
              : void 0;
        }
        observeNetworkTelemetry(e, t) {
          if (!t) return;
          let n = typeof e.values == `function` ? fr(e) : void 0,
            r = B(t.timestamp) ?? Date.now();
          (this.networkTelemetrySamples.push({
            timestampMs: r,
            packetsLost: z(t.packetsLost),
            packetsReceived: B(t.packetsReceived),
            candidatePairId: n?.id,
            stunRequestsSent: B(n?.requestsSent),
            stunResponsesReceived: B(n?.responsesReceived),
          }),
            (this.networkTelemetrySamples = this.networkTelemetrySamples.filter(
              (e) => r - e.timestampMs <= jr,
            )));
        }
        getEndSessionNetworkTelemetry(e) {
          let t = e - jr,
            n = this.networkTelemetrySamples.filter((n) => n.timestampMs >= t && n.timestampMs <= e),
            r = n[0],
            i = n[n.length - 1];
          if (!r || !i || r === i) return;
          let a = i.timestampMs - r.timestampMs;
          if (a <= 0) return;
          let o, s, c, l;
          for (let e = 1; e < n.length; e++) {
            let t = n[e - 1],
              r = n[e];
            (t.packetsLost !== void 0 &&
              r.packetsLost !== void 0 &&
              (o = (o ?? 0) + r.packetsLost - t.packetsLost),
              (s = Dr(s, r.packetsReceived, t.packetsReceived)),
              t.candidatePairId !== void 0 &&
                t.candidatePairId === r.candidatePairId &&
                ((c = Dr(c, r.stunRequestsSent, t.stunRequestsSent)),
                (l = Dr(l, r.stunResponsesReceived, t.stunResponsesReceived))));
          }
          let u = o !== void 0 && s !== void 0 ? o + s : void 0;
          return {
            aggregateTelemetryDurationSeconds: a / H,
            packetsLostCount: o,
            packetsReceivedCount: s,
            packetLossRatio: o !== void 0 && u !== void 0 && u > 0 ? Math.min(1, Math.max(0, o / u)) : void 0,
            stunRequestsSentCount: c,
            stunResponsesReceivedCount: l,
          };
        }
        accumulateSummary(e, t) {
          if (!e.hasCurrentStats) return;
          let n = e.silentDeltaMs ?? 0,
            r = e.nonSilentDeltaMs ?? 0,
            i = this.summary ?? {
              thresholdMs: kr,
              silentTotalMs: 0,
              silentCount: 0,
              nonSilentTotalMs: 0,
              nonSilentCount: 0,
              activeOutputAudioRmsThresholdRatio: Ar,
              webrtcStatsPollingIntervalMs: t,
            };
          this.summary = {
            ...i,
            silentTotalMs: i.silentTotalMs + n,
            silentCount: i.silentCount + +(n >= kr),
            nonSilentTotalMs: i.nonSilentTotalMs + r,
            nonSilentCount: i.nonSilentCount + +(r >= kr),
            remoteOutputAudioTrackDurationMs:
              e.remoteOutputAudioTrackDeltaMs === void 0
                ? i.remoteOutputAudioTrackDurationMs
                : (i.remoteOutputAudioTrackDurationMs ?? 0) + e.remoteOutputAudioTrackDeltaMs,
            activeOutputAudioDurationMs:
              e.activeOutputAudioDeltaMs === void 0
                ? i.activeOutputAudioDurationMs
                : (i.activeOutputAudioDurationMs ?? 0) + e.activeOutputAudioDeltaMs,
          };
        }
      }),
      (Nr = class {
        previousByStream = new Map();
        observe(e, t) {
          let n = new Map(),
            r = !1,
            i,
            a,
            o,
            s;
          return (
            t.forEach((t, c) => {
              let l = pr(t, c),
                u = this.previousByStream.get(l),
                d = { ...u },
                f = B(t.concealedSamples);
              if (f !== void 0) {
                let n = B(t.silentConcealedSamples) ?? 0,
                  o = lr(f, u?.concealedSamples),
                  s = Math.min(lr(n, u?.silentConcealedSamples), o),
                  c = Math.max(0, o - s),
                  l = mr(e, t) ?? Or;
                ((d.concealedSamples = f),
                  (d.silentConcealedSamples = n),
                  u?.concealedSamples !== void 0 &&
                    ((i = (i ?? 0) + (s / l) * H), (a = (a ?? 0) + (c / l) * H)),
                  (r = !0));
              }
              let p = B(t.totalSamplesDuration);
              if (p !== void 0) {
                let e = lr(p, u?.totalSamplesDuration),
                  n = e * H,
                  i = B(t.totalAudioEnergy);
                if (((d.totalSamplesDuration = p), (o = (o ?? 0) + n), i === void 0))
                  delete d.totalAudioEnergy;
                else {
                  let t = u?.totalAudioEnergy;
                  if (((d.totalAudioEnergy = i), t !== void 0 && e > 0)) {
                    let r = Math.max(0, i - t),
                      a = Math.sqrt(r / e) >= Ar ? n : 0;
                    s = (s ?? 0) + a;
                  }
                }
                r = !0;
              }
              Object.keys(d).length > 0 && n.set(l, d);
            }),
            (this.previousByStream = n),
            {
              hasCurrentStats: r,
              silentDeltaMs: i,
              nonSilentDeltaMs: a,
              remoteOutputAudioTrackDeltaMs: o,
              activeOutputAudioDeltaMs: s,
            }
          );
        }
        reset() {
          this.previousByStream.clear();
        }
      }));
  }))();
}
var Fr;
function Ir() {
  return (Ir = e(() => {
    (Pr(),
      (Fr = class {
        previousInboundAudioStats;
        audioGapWindowTracker = new Nr();
        sample(e) {
          let t = dr(e),
            n = t[0];
          if (!n) return;
          let r = this.audioGapWindowTracker.observe(e, t),
            i = {
              jitterBufferDelay: B(n.jitterBufferDelay),
              jitterBufferEmittedCount: B(n.jitterBufferEmittedCount),
              packetsReceived: B(n.packetsReceived),
            },
            a = this.previousInboundAudioStats;
          this.previousInboundAudioStats = i;
          let o = a === void 0 ? void 0 : V(i.jitterBufferDelay, a.jitterBufferDelay),
            s = a === void 0 ? void 0 : V(i.jitterBufferEmittedCount, a.jitterBufferEmittedCount),
            c = o !== void 0 && s !== void 0 && s > 0 ? (o / s) * 1e3 : null,
            l =
              a !== void 0 && i.packetsReceived !== void 0 && a.packetsReceived !== void 0
                ? (V(i.packetsReceived, a.packetsReceived) ?? 0)
                : 0,
            u = B(fr(e)?.currentRoundTripTime);
          return {
            receivedPacketsDelta: l,
            outputAudioBufferDepthMs: c,
            serviceRttMs: u === void 0 ? null : u * 1e3,
            outputAudioBytesReceived: B(n.bytesReceived) ?? null,
            outputAudioPacketsReceived: B(n.packetsReceived) ?? null,
            outputAudioPacketsLost: z(n.packetsLost) ?? null,
            outputAudioSilentGapMs: r.silentDeltaMs ?? null,
            outputAudioNonSilentGapMs: r.nonSilentDeltaMs ?? null,
          };
        }
        reset() {
          ((this.previousInboundAudioStats = void 0), this.audioGapWindowTracker.reset());
        }
      }));
  }))();
}
function Lr(e) {
  return (
    (e?.getSynchronizationSources?.() ?? []).find((e) => Number.isFinite(e.rtpTimestamp))?.rtpTimestamp ??
    null
  );
}
var Rr;
function zr() {
  return (zr = e(() => {
    (Ir(),
      (Rr = class {
        getStats;
        receiver;
        timerId = null;
        sampling = !1;
        run = null;
        sampler = new Fr();
        constructor(e) {
          ((this.getStats = e.getStats), (this.receiver = e.receiver ?? null));
        }
        start({ sampleIntervalMs: e = 500, onSample: t }) {
          this.stop();
          let n = Symbol();
          ((this.run = n), (this.timerId = window.setInterval(() => void this.sampleOnce(n, t), e)));
        }
        stop() {
          ((this.run = null),
            (this.sampling = !1),
            this.timerId != null && window.clearInterval(this.timerId),
            (this.timerId = null));
        }
        destroy() {
          (this.stop(), this.sampler.reset());
        }
        async sampleOnce(e, t) {
          if (!(this.run !== e || this.sampling)) {
            this.sampling = !0;
            try {
              let n = await this.getStats();
              if (this.run !== e) return;
              let r = this.sampler.sample(n);
              if (!r) return;
              t({
                outputAudioFirstChunkReceivedTs: r.receivedPacketsDelta > 0 ? Date.now() / 1e3 : null,
                outputAudioPlayoutStartTs: null,
                outputAudioBufferDepthMs: r.outputAudioBufferDepthMs,
                serviceRttMs: r.serviceRttMs,
                outputAudioBytesReceived: r.outputAudioBytesReceived,
                outputAudioPacketsReceived: r.outputAudioPacketsReceived,
                outputAudioPacketsLost: r.outputAudioPacketsLost,
                outputAudioSilentGapMs: r.outputAudioSilentGapMs,
                outputAudioNonSilentGapMs: r.outputAudioNonSilentGapMs,
                outputAudioReceivedRtpts: Lr(this.receiver),
              });
            } catch {
              return;
            } finally {
              this.run === e && (this.sampling = !1);
            }
          }
        }
      }));
  }))();
}
var U, Br, Vr, Hr;
function Ur() {
  return (Ur = e(() => {
    (Er(),
      zr(),
      (U = { end: () => {}, start: () => {}, time: (e) => e(), timeAsync: (e) => e() }),
      (Br = {
        _peerConnection: { preConnectionSetup: U },
        _preConnect: {
          blankTransceiver: U,
          createOffer: U,
          dataChannel: U,
          eventHandlers: U,
          getPeerConnection: U,
          setLocalDescription: U,
        },
        _parameterResolution: { voiceCommit: U, backendReasoningEffort: U, workModelSlug: U },
      }),
      (Vr = class {
        async preConnectionSetup(
          e,
          {
            applyEventHandlers: t,
            existingConnection: n,
            getPeerConnection: r,
            onDataChannelCreated: i,
            onPeerConnectionCreated: a,
            onTransceiverCreated: o,
            timings: s = Br,
          },
        ) {
          let { _peerConnection: c, _preConnect: l } = s;
          c.preConnectionSetup.start();
          let u = l.getPeerConnection.time(() => {
              if (n) return n.pc;
              if (!r) throw Error(`getPeerConnection is required for fresh setup`);
              return r();
            }),
            d = l.dataChannel.time(
              () => n?.dataChannel ?? u.createDataChannel(``, { negotiated: !0, id: 0 }),
            ),
            f = l.eventHandlers.time(() =>
              t?.({
                dataChannel: d,
                getEventTimestamp: () => performance.now(),
                getPeerConnectionState: () => {
                  let e = r?.() ?? u;
                  return { connectionState: e.connectionState, iceConnectionState: e.iceConnectionState };
                },
                pc: u,
              }),
            ),
            { audioTransceiver: p, videoTransceiver: m } = l.blankTransceiver.time(() => ({
              audioTransceiver: n?.audioTransceiver ?? u.addTransceiver(`audio`),
              videoTransceiver: n?.videoTransceiver ?? u.addTransceiver(`video`, { direction: `sendonly` }),
            })),
            h = () => {
              (a?.(u), i?.(d), o?.(`audio`, p), o?.(`video`, m));
            };
          if ((f ? f(h) : h(), n))
            return (
              await l.createOffer.timeAsync(
                async () => (await l.setLocalDescription.timeAsync(() => Promise.resolve()), n.offer),
              ),
              c.preConnectionSetup.end(),
              n
            );
          let g = new Rr({ getStats: () => u.getStats(), receiver: p.receiver }),
            _ = wr(e, { pc: u, audioTransceiver: p }),
            v = {
              phase: `idle`,
              start: ({ onClientMetricsSample: t, getReportedVoiceMode: n, voiceSessionId: r }) => {
                v.phase === `idle` &&
                  ((v.phase = `started`),
                  t && g.start({ onSample: t }),
                  Tr(e, {
                    e2eMonitor: _,
                    getReportedVoiceMode: n,
                    voiceSessionId: r,
                    isMonitoring: () => v.phase === `started`,
                  }));
              },
              stop: () => {
                v.phase !== `stopped` &&
                  ((v.phase = `stopped`), d.removeEventListener(`close`, v.stop), g.destroy(), _?.destroy());
              },
            };
          d.addEventListener(`close`, v.stop);
          let y;
          try {
            y = await l.createOffer.timeAsync(async () => {
              let e = await u.createOffer();
              return (await l.setLocalDescription.timeAsync(() => u.setLocalDescription(e)), e);
            });
          } catch (e) {
            throw (
              v.stop(),
              d.readyState !== `closed` && d.close(),
              u.signalingState !== `closed` && u.close(),
              e
            );
          }
          return (
            c.preConnectionSetup.end(),
            {
              audioTransceiver: p,
              dataChannel: d,
              offer: y,
              pc: u,
              startMonitoring: v.start,
              stopMonitoring: v.stop,
              videoTransceiver: m,
            }
          );
        }
      }),
      (Hr = new Vr()));
  }))();
}
function Wr() {
  return new Promise((e, t) => {
    let n = indexedDB.open(Zr, Qr);
    ((n.onupgradeneeded = () => {
      let e = n.result;
      e.objectStoreNames.contains(W) || e.createObjectStore(W);
    }),
      (n.onsuccess = () => e(n.result)),
      (n.onerror = () => t(n.error ?? Error(`Certificate storage request failed`))));
  });
}
function Gr(e, t) {
  return new Promise((n, r) => {
    let i = e.transaction(W, `readonly`).objectStore(W).get(t);
    ((i.onsuccess = () => {
      try {
        let e = i.result;
        n(e);
      } catch (e) {
        r(e instanceof Error ? e : Error(String(e)));
      }
    }),
      (i.onerror = () => r(i.error ?? Error(`Certificate storage request failed`))));
  });
}
function Kr(e, t, n) {
  return new Promise((r, i) => {
    let a = e.transaction(W, `readwrite`).objectStore(W).put(n, t);
    ((a.onsuccess = () => r()),
      (a.onerror = () => i(a.error ?? Error(`Certificate storage request failed`))));
  });
}
function qr(e) {
  let t = Date.now();
  return e.expires <= t;
}
async function Jr() {
  try {
    `storage` in navigator && `persist` in navigator.storage && (await navigator.storage.persist());
  } catch (e) {
    i.debug(`[voice] Certificate persistence unavailable`, { safe: {}, sensitive: { error: e } });
  }
}
async function Yr(e) {
  return await RTCPeerConnection.generateCertificate(e);
}
async function Xr(e = {}) {
  let { generationParams: t = ei, disablePersistence: n = !1 } = e;
  if (!n && `indexedDB` in window)
    try {
      await Jr();
      let e = await Wr(),
        n;
      try {
        let r = await Gr(e, $r);
        if (r && !qr(r)) return r;
        let a = await Yr(t);
        return (
          (n = Kr(e, $r, a).catch((e) => {
            i.debug(`[voice] Certificate persistence unavailable`, { safe: {}, sensitive: { error: e } });
          })),
          a
        );
      } finally {
        n ? n.then(() => e.close()) : e.close();
      }
    } catch (e) {
      i.debug(`[voice] Certificate cache unavailable`, { safe: {}, sensitive: { error: e } });
    }
  return Yr(t);
}
var Zr, Qr, W, $r, ei;
function ti() {
  return (ti = e(() => {
    (p(),
      (Zr = `webrtc-cert-db`),
      (Qr = 1),
      (W = `certs`),
      ($r = `ecdsa-p256:v1`),
      (ei = { name: `ECDSA`, namedCurve: `P-256`, expires: 31536e6 }));
  }))();
}
async function ni(e) {
  return (
    await Ke.whenReached(`background_ready`, e),
    e?.throwIfAborted(),
    new Promise((t, n) => {
      let r,
        i = () => {
          (r(), n(new DOMException(`Voice prewarm canceled`, `AbortError`)));
        },
        a = (n) => {
          if (n != null && n.timeRemaining() < 8) {
            o();
            return;
          }
          (e?.removeEventListener(`abort`, i), t());
        },
        o = () => {
          if (window.requestIdleCallback != null) {
            let e = window.requestIdleCallback(a);
            r = () => window.cancelIdleCallback(e);
          } else {
            let e = globalThis.setTimeout(a, 0);
            r = () => globalThis.clearTimeout(e);
          }
        };
      (o(), e?.addEventListener(`abort`, i, { once: !0 }));
    })
  );
}
function ri() {
  return (ri = e(() => {
    xt();
  }))();
}
function ii() {
  if (typeof document > `u`) return;
  let e = document.head.querySelectorAll(`meta[http-equiv="origin-trial"]`);
  for (let t of e) if (t.content === ci) return;
  let t = document.createElement(`meta`);
  ((t.httpEquiv = `origin-trial`), (t.content = ci), document.head.append(t));
}
function ai(e) {
  return !(
    !e ||
    e.signalingState === `closed` ||
    e.connectionState !== `new` ||
    e.iceConnectionState !== `new`
  );
}
function oi() {
  if (((li = !0), X)) return X;
  let e = J;
  if (!Y) {
    let t = ni()
      .then(() => {
        if (e === J) return Xr({ generationParams: { name: `ECDSA`, namedCurve: `P-256` } });
      })
      .then((t) => {
        e === J && (K = t);
      })
      .catch((e) => {
        i.debug(`[voice] Certificate prewarm unavailable`, { safe: {}, sensitive: { error: e } });
      })
      .finally(() => {
        Y === t && (Y = void 0);
      });
    Y = t;
  }
  return si();
}
function si() {
  if (X) return X;
  let e = J,
    t = ni()
      .then(() => {
        e !== J || ai(G) || (G?.close(), (G = q.createPeerConnection(`cache`)));
      })
      .finally(() => {
        X === t && (X = void 0);
      });
  return ((X = t), t);
}
var ci, G, K, li, q, J, Y, X;
function ui() {
  return (ui = e(() => {
    (p(),
      ti(),
      ri(),
      (ci = `AnY33Lstn7fSTXvj63Z4glPcRXtUukuM9rLN87JGOugFyfum9ckNUU3NYHeRLcp6TELT5wbCZih5SlHfumMbJAkAAABmeyJvcmlnaW4iOiJodHRwczovL2NoYXRncHQuY29tOjQ0MyIsImZlYXR1cmUiOiJXZWJSdGNTY3RwU25hcCIsImV4cGlyeSI6MTc5NDg3MzYwMCwiaXNTdWJkb21haW4iOnRydWV9`),
      (G = void 0),
      (K = void 0),
      (li = !1),
      (q = {
        createPeerConnection: (e) => (
          ii(),
          K && qr(K) && (K = void 0),
          K === void 0
            ? new RTCPeerConnection({ bundlePolicy: `max-bundle` })
            : new RTCPeerConnection({ bundlePolicy: `max-bundle`, certificates: [K] })
        ),
        getFreshPeerConnection: (e) => {
          try {
            return G && ai(G) ? G : (G?.close(), q.createPeerConnection(e));
          } finally {
            (li &&
              si().catch((e) => {
                i.debug(`[voice] Peer connection prewarm unavailable`, { safe: {}, sensitive: { error: e } });
              }),
              (G = void 0));
          }
        },
        resetAll: () => {
          (J++, (li = !1), G?.close(), (Y = void 0), (X = void 0), (G = void 0), (K = void 0));
        },
      }),
      (J = 0));
  }))();
}
function Z(e) {
  return e instanceof Error ? e : Error(String(e));
}
function di(e) {
  let t = new Set();
  for (let n of e.split(/\r?\n/))
    if (n.startsWith(`a=ice-ufrag:`)) {
      let e = n.slice(12).trim();
      e && t.add(e);
    }
  if (t.size !== 1) throw Error(`Expected one server ICE ufrag in Instant Connect answer, found ${t.size}`);
  return [...t][0];
}
function fi(e) {
  return e.status === 201;
}
function pi(e) {
  return e.status === 204;
}
function Q(e) {
  if (e)
    try {
      (e.stopMonitoring(), e.dataChannel.readyState !== `closed` && e.dataChannel.close());
    } finally {
      e.pc.signalingState !== `closed` && e.pc.close();
    }
}
function mi(e, t, n, i, a) {
  let o = [],
    s = [],
    c = new AbortController(),
    { promise: l, reject: u, resolve: d } = r(),
    f,
    p,
    m = `buffering`,
    h = () => ({ connectionState: i.connectionState, iceConnectionState: i.iceConnectionState }),
    g = (e) => {
      m !== `detached` && (m === `live` ? e() : o.push(e));
    },
    _ = (e) =>
      new Proxy(e, {
        get: (e, t) => {
          let n = Reflect.get(e, t, e);
          return typeof n == `function` ? n.bind(e) : n;
        },
        set: (e, t, n) => {
          if (typeof t != `string` || !t.startsWith(`on`) || typeof n != `function`)
            return Reflect.set(e, t, n, e);
          let r = n,
            i = (t) => {
              let n = performance.now();
              if (m === `detached`) return;
              let i = h();
              g(() => {
                let a = f,
                  o = p;
                ((f = n), (p = i));
                try {
                  r.call(e, t);
                } finally {
                  ((f = a), (p = o));
                }
              });
            };
          return (
            s.push((n) => {
              Reflect.get(e, t, e) === i && Reflect.set(e, t, n ? r : null, e);
            }),
            Reflect.set(e, t, i, e)
          );
        },
      }),
    v = {
      activate: () => {
        if (m === `buffering`)
          try {
            m = `flushing`;
            for (let e of o) e();
            ((o.length = 0), s.forEach((e) => e(!0)), (m = `live`));
          } catch (e) {
            throw (v.detach(Z(e)), e);
          }
      },
      applyEventHandlers: ({ dataChannel: n, pc: r }) => (
        e._instantConnect.candidates[t].eventHandlersAttached.mark(),
        a({
          dataChannel: _(n),
          getEventTimestamp: () => f ?? performance.now(),
          getPeerConnectionState: () => p ?? h(),
          pc: _(r),
        }),
        g
      ),
      attachAbortSignal: (e) => {
        let n = () => v.detach(Z(e.reason ?? `Instant Connect ${t} was aborted`));
        (e.addEventListener(`abort`, n, { once: !0, signal: c.signal }), e.aborted && n());
      },
      detach: (e) => {
        m !== `detached` && ((m = `detached`), (o.length = 0), c.abort(), s.forEach((e) => e(!1)), u(e));
      },
      ready: l,
    };
  l.catch(() => {});
  let y = e._instantConnect.candidates[t],
    b = () => {
      v.detach(Error(`Instant Connect ${t} received a terminal startup error`));
    };
  return (
    n.addEventListener(
      `message`,
      (e) => {
        if (typeof e.data != `string`) return;
        let t, r, a, o;
        try {
          let n = JSON.parse(e.data);
          ((t = n?.type), (o = n?.data));
        } catch {
          return;
        }
        if (t === `error`) {
          b();
          return;
        }
        if (t === `data_message`) {
          if (typeof o == `string`)
            try {
              let e = JSON.parse(o);
              ((r = e?.type), (a = e?.payload?.new_state));
            } catch {}
          if (r === `error`) {
            b();
            return;
          }
          (y.firstDataMessage.mark(),
            (y.connectionStateAtFirstDataMessage = i.connectionState),
            (y.iceConnectionStateAtFirstDataMessage = i.iceConnectionState),
            (y.dataChannelStateAtFirstDataMessage = n.readyState),
            (y.firstDataMessageInnerType = typeof r == `string` ? r : void 0),
            (y.firstDataMessageState = typeof a == `string` ? a : void 0),
            c.abort(),
            d(void 0));
        }
      },
      { signal: c.signal },
    ),
    v
  );
}
function $(e, t, n, r, i = k.tcLoggingEnabled(e)) {
  return tr({
    accessToken: r,
    logCall: i,
    preciseLocationHeader: nn(),
    ...Object.fromEntries(hi[t].map((e) => [e, n[e]])),
  });
}
var hi, gi, _i;
function vi() {
  return (vi = e(() => {
    (Ot(),
      p(),
      gt(),
      Fn(),
      er(),
      A(),
      _n(),
      Ur(),
      Jn(),
      ui(),
      Rt(),
      (hi = {
        vp: [
          `conversation_id`,
          `deprecate_celsius`,
          `entrypoint_id`,
          `model_slug`,
          `model_slug_advanced`,
          `thinking_effort`,
          `voice`,
          `language_code`,
          `voice_mode`,
          `conversation_mode`,
          `history_and_training_disabled`,
          `enable_message_streaming`,
          `model_speaks_first`,
          `voice_landing`,
          `timezone_offset_min`,
          `user_locale`,
          `jobs_mock_interview_config`,
          `system_prompt_type`,
        ],
        wm: [
          `conversation_id`,
          `deprecate_celsius`,
          `entrypoint_id`,
          `model_slug`,
          `backend_reasoning_effort`,
          `voice`,
          `language_code`,
          `voice_landing`,
          `timezone_offset_min`,
          `timezone`,
          `user_locale`,
          `history_and_training_disabled`,
          `conversation_mode`,
          `system_hints`,
          `bidi_prompt_overrides`,
          `bidi_system_prompt_override`,
          `structured_system_prompt_personality_override`,
          `chat_mode`,
          `backend_model`,
          `backend_thinking_effort`,
          `backend_service_tier`,
          `client_tools`,
        ],
      }),
      (gi = class {
        caches = { vp: new Map(), wm: new Map() };
        cacheCreations = { vp: new Map(), wm: new Map() };
        candidateEventBuffers = new WeakMap();
        bufferApplyEventHandlers(e, t, n) {
          let r = st(e);
          return (e) => {
            let i = mi(r, t ? `pc1` : `pc2`, e.dataChannel, e.pc, n);
            return (this.candidateEventBuffers.set(e.pc, i), i.applyEventHandlers(e));
          };
        }
        async createCache(e, t, n, r = {}) {
          let i = k.tcLoggingEnabled(e),
            a = $(e, t, n, r.accessToken, i);
          if ((this.pruneUnusableCacheEntries(e, t), this.getUsableCacheEntry(e, t, a)))
            return { type: `success` };
          let o = this.cacheCreations[t].get(a);
          if (o) {
            if (!o.signal.aborted) return { type: `alreadyInProgress` };
            this.cacheCreations[t].delete(a);
          }
          bn(e, t, a);
          let s = Array.from(this.caches[t].entries()).at(-1),
            c = s?.[0],
            l = s?.[1],
            u = new AbortController();
          if ((this.cacheCreations[t].set(a, u), r.signal && !l)) {
            let e = () => u.abort(r.signal?.reason);
            (r.signal.addEventListener(`abort`, e, { once: !0, signal: u.signal }), r.signal.aborted && e());
          }
          let d = l?.pc,
            f = l;
          try {
            (u.signal.throwIfAborted(), (d ??= q.getFreshPeerConnection(`cache`)));
            let o = d;
            f ??= await Hr.preConnectionSetup(e, { getPeerConnection: () => o });
            let s = structuredClone(n);
            (delete s.parent_message_id,
              (s.voice_session_id = l?.voiceSessionParams.voice_session_id ?? $n()),
              (s.voice_status_request_id = s.voice_session_id),
              c && this.caches[t].delete(c));
            let p = await N.startTransceiverSession(e, {
              accessToken: r.accessToken,
              dataChannelId: 0,
              logCall: i,
              offer: f.offer,
              payload: s,
              phase: `prefetch`,
              proofOfWorkAnswer: r.proofOfWorkAnswer ?? null,
              serverUfragId: l?.serverUfragId,
              signal: u.signal,
              type: `instant_connect`,
            });
            if (!fi(p))
              throw Error(
                `Expected Instant Connect prefetch to create server state, received status ${p.status}`,
              );
            let m = await p.text();
            u.signal.throwIfAborted();
            let h = {
              ...f,
              answerSdp: m,
              candidateId: `pc1`,
              createdAt: Date.now(),
              logCall: i,
              serverUfragId: di(m),
              voiceSessionParams: s,
            };
            if (this.cacheCreations[t].get(a) !== u)
              throw Error(`Instant Connect cache creation was invalidated`);
            return (this.caches[t].set(a, h), { type: `success` });
          } catch (n) {
            return (
              u.signal.aborted ||
                bn(e, t, a, T.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_PREFETCH_FAILED, {
                  overwrite: !0,
                }),
              f ? Q(f) : d?.close(),
              { type: `failed`, err: Z(n) }
            );
          } finally {
            this.cacheCreations[t].get(a) === u && this.cacheCreations[t].delete(a);
          }
        }
        invalidateCache(e, t, n, r) {
          let i = $(e, t, n, r),
            a = this.cacheCreations[t].get(i),
            o = this.caches[t].get(i);
          return (
            a?.abort(`Instant Connect cache invalidated`),
            this.cacheCreations[t].delete(i),
            this.removeCacheEntry(t, i),
            a !== void 0 || o !== void 0
          );
        }
        getCachedVoiceSessionId(e, t, n, r) {
          let i = $(e, t, n, r),
            a = this.getUsableCacheEntry(e, t, i);
          if (a) return a.voiceSessionParams.voice_session_id;
        }
        clear(e) {
          for (let e of [`vp`, `wm`]) {
            for (let t of this.cacheCreations[e].values()) t.abort(`Instant Connect cache cleared`);
            this.cacheCreations[e].clear();
            for (let t of this.caches[e].values()) Q(t);
            this.caches[e].clear();
          }
          Sn(e);
        }
        raceCache(e, t, n, i) {
          let a = st(e);
          if (n.voice_mode === `standard`)
            return (
              Cn(e, t, n, i.accessToken) ||
                F(
                  e,
                  n.voice_session_id,
                  T.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_NO_WARM_SESSION_UNSUPPORTED_BACKEND_MODE,
                ),
              this.activateFreshCandidateEventHandlers(i.freshConnectionBundle),
              { type: `cacheMiss` }
            );
          let o = $(e, t, n, i.accessToken),
            s = this.getUsableCacheEntry(e, t, o);
          if (!s) {
            let r = this.cacheCreations[t].get(o);
            if ((!r || r.signal.aborted) && !Cn(e, t, n, i.accessToken)) {
              let r = xn(
                e,
                t,
                o,
                Array.from(this.caches[t].entries()).some(
                  ([n, r]) => n === $(e, t, r.voiceSessionParams, i.accessToken),
                ),
              );
              F(e, n.voice_session_id, r);
            }
            return (
              vn(e, a, `miss`),
              this.activateFreshCandidateEventHandlers(i.freshConnectionBundle),
              { type: `cacheMiss` }
            );
          }
          (this.caches[t].delete(o), vn(e, a, `hit`));
          let c;
          try {
            c = i.preConnectionSetup(s);
          } catch (e) {
            throw (P(a, I.preparedActivationFailed), Q(s), e);
          }
          let l = this.candidateEventBuffers.get(s.pc);
          if ((this.candidateEventBuffers.delete(s.pc), !l))
            throw (
              P(a, I.preparedActivationFailed),
              Q(s),
              c.catch(() => {}),
              Error(`Instant Connect cached candidate was not prepared`)
            );
          let u = r(),
            d = new Map(),
            f = (e) => {
              let t = d.get(e.pc);
              if (t != null) return t;
              let n = u.promise.then((t) => {
                if (e.pc.signalingState !== `closed`) return e.audioTransceiver.sender.replaceTrack(t);
              });
              return (d.set(e.pc, n), n);
            },
            p = new AbortController(),
            m = AbortSignal.timeout(Lt(e)),
            h = i.signal ? AbortSignal.any([m, i.signal]) : m,
            g = [],
            _ = a._instantConnect;
          ((_.cacheAgeMs = Date.now() - s.createdAt),
            (_.voiceSessionId = s.voiceSessionParams.voice_session_id),
            (_.serverId = s.serverUfragId),
            (_.sessionType = t),
            _.raceStarted.mark());
          let v,
            y,
            b = Promise.any([
              this.startCached(
                a,
                s,
                l,
                g,
                h,
                () => f(s),
                async () => {
                  try {
                    (await c,
                      P(a, I.preparedApplied),
                      await s.pc.setRemoteDescription({ sdp: s.answerSdp, type: `answer` }));
                  } catch (e) {
                    throw (y == null && !h.aborted && P(a, I.preparedActivationFailed), e);
                  }
                  return s;
                },
              ),
              this.startFresh(e, a, s, i.freshConnectionBundle, g, i, h, p, f, (e) => {
                v = e;
              }),
            ])
              .then((t) => {
                let r = t.candidate;
                ((y = r.candidateId),
                  p.abort(`Instant Connect winner selected`),
                  g
                    .filter(({ eventBuffer: e }) => e !== t.eventBuffer)
                    .forEach(({ candidate: e, eventBuffer: t }) => {
                      (t.detach(Error(`Instant Connect candidate lost the race`)), Q(e));
                    }));
                try {
                  t.eventBuffer.activate();
                } catch (e) {
                  throw (
                    r.candidateId === `pc1` && P(a, I.preparedActivationFailed),
                    t.eventBuffer.detach(Z(e)),
                    Q(r),
                    e
                  );
                }
                return (
                  (_.winner = r.candidateId),
                  _.winnerSelected.mark(),
                  r.candidateId === `pc2` &&
                    F(
                      e,
                      n.voice_session_id,
                      T.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_MISS,
                    ),
                  wn(a, r.candidateId),
                  r
                );
              })
              .catch((e) => {
                h.aborted
                  ? Tn(a, h.reason === m.reason ? `timeout` : `cancelled`)
                  : Tn(a, `candidate_failure`);
                let t = h.aborted ? Z(h.reason) : Error(`Instant Connect race failed`, { cause: e });
                p.abort(`Instant Connect race failed`);
                for (let { candidate: e, eventBuffer: n } of g) (n.detach(t), Q(e));
                throw (y == null && !i.signal?.aborted && v?.(), t);
              });
          return (
            b.catch(() => {}),
            { futureWinner: b, setAudioTrack: (e) => (u.resolve(e), b.then(f)), type: `raceStarted` }
          );
        }
        async startCached(e, t, n, r, a, o, s) {
          let c = e._instantConnect.candidates[t.candidateId];
          try {
            (n.attachAbortSignal(a), r.push({ candidate: t, eventBuffer: n }));
            let e = await s();
            return (
              c.signalingCompleted.mark(),
              o().catch((e) => {
                i.debug(`[instant-connect] Failed to attach the microphone track`, {
                  safe: { candidateId: t.candidateId },
                  sensitive: { error: e },
                });
              }),
              await n.ready,
              c.becameUsable.mark(),
              { candidate: e, eventBuffer: n }
            );
          } catch (e) {
            throw ((c.failure = Z(e).message), c.failed.mark(), n.detach(Z(e)), Q(t), e);
          }
        }
        async startFresh(e, t, n, r, i, a, o, s, c, l) {
          let u = AbortSignal.any([s.signal, o]),
            d = await r,
            f = { ...d, candidateId: `pc2` },
            p = this.candidateEventBuffers.get(d.pc);
          if ((this.candidateEventBuffers.delete(d.pc), !p))
            throw (Q(f), Error(`Instant Connect fresh candidate was not prepared`));
          if (u.aborted)
            throw (
              p.detach(Error(`Instant Connect fresh candidate was aborted`)),
              Q(f),
              Error(`Instant Connect fresh candidate was aborted`)
            );
          return this.startCached(
            t,
            f,
            p,
            i,
            u,
            () => c(f),
            async () => {
              let r;
              try {
                r = await N.startTransceiverSession(e, {
                  accessToken: a.accessToken,
                  dataChannelId: 0,
                  logCall: n.logCall,
                  eventSource: a.eventSource,
                  deferUserPerceivedError: l,
                  offer: d.offer,
                  payload: n.voiceSessionParams,
                  phase: `race`,
                  timings: t,
                  proofOfWorkAnswer: a.proofOfWorkAnswer ?? null,
                  serverUfragId: n.serverUfragId,
                  signal: u,
                  type: `instant_connect`,
                  voiceMetadata: {
                    ...a.voiceMetadata,
                    sessionId: n.voiceSessionParams.voice_session_id ?? void 0,
                  },
                });
              } catch (e) {
                throw (u.aborted || P(t, I.validationFailed), e);
              }
              if (((t._instantConnect.pc2ResponseStatus = r.status), pi(r)))
                throw (
                  P(t, I.validationConfirmed),
                  Error(`Instant Connect server match found; PC2 is not needed`)
                );
              if (!fi(r))
                throw (
                  P(t, I.validationFailed),
                  Error(`Expected an Instant Connect server match result, received status ${r.status}`)
                );
              try {
                let e = await r.text();
                (await f.pc.setRemoteDescription({ sdp: e, type: `answer` }), u.throwIfAborted());
              } catch (e) {
                throw (u.aborted || P(t, I.validationFailed), e);
              }
              return (P(t, I.replacementCreated), f);
            },
          );
        }
        activateFreshCandidateEventHandlers(e) {
          e.then(({ pc: e }) => {
            let t = this.candidateEventBuffers.get(e);
            (this.candidateEventBuffers.delete(e), t?.activate());
          }).catch(() => {});
        }
        isCacheEntryUsable(e, t) {
          return (
            Date.now() - t.createdAt <= R.getCacheTtlMs(e) &&
            t.pc.signalingState === `have-local-offer` &&
            t.pc.connectionState !== `closed` &&
            t.pc.connectionState !== `failed` &&
            t.pc.iceConnectionState !== `closed` &&
            t.pc.iceConnectionState !== `failed` &&
            t.dataChannel.readyState !== `closed`
          );
        }
        getUsableCacheEntry(e, t, n) {
          let r = this.caches[t].get(n);
          if (r && !this.isCacheEntryUsable(e, r)) {
            (bn(
              e,
              t,
              n,
              Date.now() - r.createdAt > R.getCacheTtlMs(e)
                ? T.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_EXPIRED
                : T.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_UNAVAILABLE,
              { overwrite: !0 },
            ),
              this.removeCacheEntry(t, n));
            return;
          }
          return r;
        }
        pruneUnusableCacheEntries(e, t) {
          for (let [n, r] of this.caches[t]) this.isCacheEntryUsable(e, r) || this.removeCacheEntry(t, n);
        }
        removeCacheEntry(e, t) {
          let n = this.caches[e].get(t);
          (this.caches[e].delete(t), Q(n));
        }
      }),
      (_i = new gi()));
  }))();
}
function yi(
  e,
  { sessionType: t, voiceMode: n, chatMode: r, deprecateCelsius: i, disableExposureLog: a = !0 },
) {
  return t !== `wm` || n !== `wingman` || r === `work`
    ? !1
    : (i ?? e.get(rt)?.getLayer(`227870931`, { disableExposureLog: a }).get(`deprecate_celsius`, !1) ?? !1);
}
function bi() {
  return (bi = e(() => {
    E();
  }))();
}
var xi, Si;
function Ci() {
  return (Ci = e(() => {
    ((xi = t(c(), 1)),
      u(),
      _t(),
      Et(),
      he(),
      At(),
      C(),
      (Si = ne(
        o,
        ({ conversationId: e, composerContext: t }, { get: n }) => {
          let r = t == null ? n(We, e) : t.conversationOrigin,
            i = t == null ? n(Ge, e) : n(ct, t).selectedModel,
            a = r === `tpp`,
            o = n(a ? Ce : D).data,
            s = o?.modelConfigBySlug?.[i.slug];
          return {
            isWorkConversation: a,
            selectedModel: i,
            thinkingEffort:
              s?.configurableThinkingEffort && (s.thinkingEfforts?.length ?? 0) > 0
                ? (i.thinkingEffort ?? o?.defaultThinkingEffortByModelSlug?.[i.slug])
                : void 0,
          };
        },
        { isEqual: xi.default },
      )));
  }))();
}
function wi(e) {
  return ue(e, `3012464398`) && !ue(e, `3387372448`);
}
function Ti(e, t) {
  let n = e.get(Re),
    r =
      n.status === `allowed` &&
      `plan` in n &&
      n.plan !== $e.FREE &&
      n.plan !== $e.FREE_WORKSPACE &&
      n.plan !== $e.GO;
  return wi(e) && e.get(We, t) !== `tpp` && (r || !1);
}
function Ei() {
  return (Ei = e(() => {
    (bt(), At(), E(), le());
  }))();
}
function Di(e, { ambientParameters: t, explicitParameters: n, liveParameters: r, systemHints: i }) {
  let {
      backendReasoningEffort: a,
      conversationId: o,
      composerContext: s,
      gizmoId: c,
      historyAndTrainingDisabled: l,
      languageCode: u,
      sessionType: d,
      voice: f,
    } = t,
    {
      deprecateCelsius: p,
      modelSpeaksFirst: m,
      requestedVoiceMode: h,
      voiceSessionId: g,
      voiceStatus: _,
      workModelSlug: v,
    } = r,
    y = [],
    b = h ?? k.requestedVoiceMode(e, k.isStandardVoiceSelected$(e) ? `standard` : `advanced`),
    {
      isWorkConversation: x,
      selectedModel: ee,
      thinkingEffort: te,
    } = e.get(Si, { conversationId: o, composerContext: s }),
    ne = n ? n.requested_default_model : ee.slug,
    re = b === `advanced` && !O(d) && !(n && `thinking_effort` in n) ? te : n?.thinking_effort,
    ie = O(d) && !x && Ti(e, o),
    S = {
      backend_reasoning_effort: O(d) && !ie ? (n?.backend_reasoning_effort ?? a ?? `instant`) : void 0,
      conversation_id: n ? n.conversation_id : (e.get(pt, o) ?? void 0),
      entrypoint_id: n?.entrypoint_id,
      language_code: n?.language_code,
      parent_message_id: n?.parent_message_id,
      requested_default_model: ne,
      thinking_effort: re,
    },
    ae = ne ?? `gpt-4o`,
    oe = n?.gizmo_id ?? c,
    se,
    C = x && v ? v : ee.slug,
    ce = Ve(e, o, x ? `tpp` : null, C),
    le = ce === `fast` || ce === `standard` ? ce : void 0,
    w = {
      ...S,
      voice: n?.voice ?? f,
      language_code: S.language_code ?? u,
      voice_session_id: g,
      voice_status_request_id: _?.voice_status_request_id ?? g,
      timezone_offset_min: new Date().getTimezoneOffset(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      user_locale: at(),
      voice_mode: b,
      model_slug: ae,
      model_slug_advanced: _ && b === `advanced` ? ae : void 0,
      chatreq_token: typeof _?.chatreq?.token == `string` ? _.chatreq.token : void 0,
      client_tools: y,
      history_and_training_disabled: l,
      conversation_mode: oe ? { kind: `gizmo_interaction`, gizmo_id: oe } : { kind: `primary_assistant` },
      ...(O(d) && i?.length ? { system_hints: [...i] } : {}),
      jobs_mock_interview_config: n?.jobsMockInterviewConfig,
      system_prompt_type: n?.system_prompt_type,
      ...(n?.voice_landing ? { voice_landing: n.voice_landing } : {}),
      bidi_prompt_overrides: void 0,
      bidi_system_prompt_override: se,
      structured_system_prompt_personality_override: void 0,
      chat_mode: x ? `work` : `chat`,
      backend_model: C,
      backend_thinking_effort: te,
      backend_service_tier: x && e.get(be, `local`) ? void 0 : le,
      model_speaks_first: m,
      enable_message_streaming: b !== `standard`,
    };
  return (
    Ai(e, w, d, void 0, void 0),
    (w.deprecate_celsius = yi(e, {
      sessionType: d,
      voiceMode: w.voice_mode,
      chatMode: w.chat_mode,
      deprecateCelsius: p,
    })),
    w
  );
}
function Oi(e, t) {
  if (t == null) return !1;
  let n = e.get(D).data?.alphaModelSlugs;
  return n ? t.includes(`alpha`) || n.some((e) => t.includes(e)) : t.includes(`alpha`);
}
function ki(e, t) {
  let n = k.resolveVoiceOption$(e, `wingman`).modelSlug;
  n && (t.model_slug = n);
}
function Ai(e, t, n, r, i) {
  (O(n) &&
    (t.chat_mode !== `work` &&
      t.backend_model === `auto` &&
      (t.backend_model = e.get(D).data?.versionOptions?.[0]?.modelSlugByLane.auto ?? t.backend_model),
    Oi(e, t.requested_default_model) || (t.requested_default_model = ``),
    Oi(e, t.model_slug) || (t.model_slug = ``),
    Oi(e, t.model_slug_advanced) || (t.model_slug_advanced = ``)),
    O(n) && ki(e, t));
}
async function ji(e, t, n, r) {
  n?.throwIfAborted();
  let i = e.get(Fe);
  if (i == null || !e.get(Je))
    throw Error(`Authenticated ChatGPT settings must be available before preparing voice`);
  let a = e.get(_e),
    o = r == null ? (Tt(e, t) ?? Me(e)) : r.conversationDetailsTarget.gizmoId,
    { isWorkConversation: s } = e.get(Si, { conversationId: t, composerContext: r }),
    c = Promise.all([
      e.query.getData(tt) ?? e.query.fetch(tt),
      e.query.getData(Mt) ?? e.query.fetch(Mt),
      e.query.getData(D) ?? e.query.fetch(D),
      s ? (e.query.getData(Ce) ?? e.query.fetch(Ce)) : void 0,
      o != null && Ae(o) ? (e.query.getData(Be, o) ?? e.query.fetch(Be, o)) : void 0,
    ]);
  if ((await (n == null ? c : d(c, n)), n?.throwIfAborted(), e.get(Fe) !== i || e.get(_e) !== a))
    throw new DOMException(`Voice context changed while preparing the session`, `AbortError`);
}
function Mi() {
  return (Mi = e(() => {
    (bt(), he(), wt(), fe(), lt(), At(), Nt(), we(), me(), ut(), St(), Ci(), de(), Ei(), bi(), A());
  }))();
}
export {
  It as $,
  Jn as A,
  N as B,
  gr as C,
  Qn as D,
  er as E,
  Dn as F,
  un as G,
  tn as H,
  Fn as I,
  Qt as J,
  fn as K,
  F as L,
  In as M,
  Ln as N,
  Yn as O,
  En as P,
  Rt as Q,
  bn as R,
  Pr as S,
  $n as T,
  _n as U,
  nn as V,
  dn as W,
  Bt as X,
  zt as Y,
  Lt as Z,
  ri as _,
  Ei as a,
  Hr as b,
  Si as c,
  $ as d,
  vi as f,
  oi as g,
  ui as h,
  ji as i,
  R as j,
  Xn as k,
  yi as l,
  q as m,
  Di as n,
  Ti as o,
  _i as p,
  $t as q,
  Mi as r,
  Ci as s,
  Ai as t,
  bi as u,
  ni as v,
  ur as w,
  Mr as x,
  Ur as y,
  yn as z,
};
//# sourceMappingURL=voice-session-parameters-5a36d3c8f43e.js.map
