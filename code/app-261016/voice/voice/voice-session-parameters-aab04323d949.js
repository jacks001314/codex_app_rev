import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $mt as n,
  $st as r,
  Ait as i,
  CCt as a,
  Dit as o,
  Got as s,
  HFt as c,
  Iot as l,
  KFt as u,
  Mit as d,
  ORt as f,
  Oit as p,
  Pit as m,
  Qst as h,
  RFt as g,
  SLt as _,
  TCt as v,
  Uot as y,
  VRt as b,
  Wot as x,
  ZSt as S,
  dat as ee,
  eat as te,
  iFt as ne,
  kCt as re,
  kRt as C,
  kit as ie,
  tht as ae,
  yCt as oe,
  zFt as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as se,
  $cr as ce,
  B1n as le,
  BEt as T,
  BRr as ue,
  CLr as de,
  FZt as fe,
  GIn as pe,
  Gzn as me,
  Hkr as he,
  IAr as ge,
  IIr as _e,
  IRr as ve,
  IWn as ye,
  JEt as be,
  JQn as xe,
  KBr as Se,
  KQn as Ce,
  Kzn as we,
  LIr as Te,
  LXt as Ee,
  MIn as De,
  MRr as Oe,
  NAr as ke,
  PRr as Ae,
  PZt as je,
  RXt as Me,
  VPn as Ne,
  Xzr as Pe,
  YQn as Fe,
  Ycr as Ie,
  Ydr as Le,
  _Wn as Re,
  aXt as ze,
  bIr as Be,
  cAr as Ve,
  cBr as He,
  cDt as Ue,
  cGn as We,
  cRr as Ge,
  dVn as Ke,
  dWn as E,
  eMr as qe,
  fBr as Je,
  fRr as Ye,
  fWn as Xe,
  gWn as Ze,
  hWn as Qe,
  iLr as $e,
  iRr as et,
  j2n as D,
  jRr as tt,
  lAr as nt,
  lBr as O,
  lDt as rt,
  nLr as it,
  nMr as at,
  oQt as ot,
  oRr as st,
  oXt as ct,
  pRr as lt,
  q1n as ut,
  qEt as dt,
  qQn as ft,
  rPn as pt,
  sDt as mt,
  sIn as ht,
  sQt as gt,
  sRr as _t,
  tLr as vt,
  tyr as yt,
  uBr as bt,
  uDt as xt,
  uGn as St,
  uWn as Ct,
  wLr as wt,
  xIr as Tt,
  xLr as Et,
  xMr as Dt,
  yMr as Ot,
  zEt as kt,
  zRr as At,
} from "./app-initial-ad16eaadf81f.js";
import { Cc as jt, Tc as Mt } from "./app-primary-3e00728c2a4c.js";
import { o as Nt, s as Pt } from "./preferences-c6a8f9117081.js";
import { a as k, r as A, t as j } from "./voice-configuration-manager-f7e817b94a05.js";
function Ft(e) {
  return e.get(Je)?.getLayer(`815598430`).get(`web_enabled`, !1) ?? !1;
}
function It(e) {
  return e.get(Je)?.getLayer(`794043821`).get(`startup_connection_timeout_threshold_millis`, 1e4) ?? 1e4;
}
function Lt() {
  return (Lt = e(() => {
    O();
  }))();
}
var Rt;
function zt() {
  return (zt = e(() => {
    (S(),
      wt(),
      Te(),
      nt(),
      St(),
      Ne(),
      at(),
      fe(),
      y(),
      ge(),
      he(),
      ce(),
      r(),
      O(),
      vt(),
      rt(),
      j(),
      Lt(),
      (Rt = oe(h, (e, { get: t, scope: n }) => {
        let { conversationId: r, gizmoId: i } =
          typeof e == `object` && e ? e : { conversationId: e, gizmoId: void 0 };
        if (
          !t(bt, `4029789265`) ||
          (r != null &&
            t(le, r) == null &&
            t(We, r)?.some(
              (e) =>
                e.author.role === `assistant` &&
                (e.author.metadata?.real_author === `model_first_landing` ||
                  typeof e.metadata?.model_first_landing_ref == `string`),
            ))
        )
          return !1;
        let a = t(Ie),
          o = a?.pathname ?? `/`,
          c = o === `/` || l(o),
          u = s(o),
          d = c ? t(ke) === `work` : t(ut, r) === `tpp`;
        if (x(a?.search ?? ``) || !(c || u != null) || (u != null && `gizmoId` in u.params)) return !1;
        let f = t(qe),
          p = t(Et);
        if (
          p.status !== `allowed` ||
          !(`accountId` in p) ||
          (p.accountStructure !== `personal` && p.accountStructure !== `workspace`)
        )
          return !1;
        let { pending: m, subscriptionRequired: h } = t(je, r);
        if (m || h) return !1;
        let g = p.accountStructure === `workspace` ? t(_e, p.accountId) : null,
          _ = g?.data?.permissions;
        if (d && c && t(Ve)) return !1;
        let v = xt(n, { conversationId: r, gizmoId: i });
        return (
          (!(v != null && !Ke(v)) || (`plan` in p && $e(p.plan) && !it(p.plan))) &&
          !g?.isPending &&
          !g?.isError &&
          (_ == null || _.includes(`chatgpt.workspace.feature.voice.access`)) &&
          f.data?.voiceEnabled === !0 &&
          v == null &&
          (A.sessionType$(n, v) === `wm` || !1) &&
          (!d || Ft(n))
        );
      })));
  }))();
}
var Bt, Vt, Ht, Ut, Wt, M, N, Gt, Kt, qt, Jt, Yt;
function Xt() {
  return (Xt = e(() => {
    ((Bt = 8),
      (Vt = 3e4),
      (Ht = 1e3),
      (Ut = 1),
      (Wt = (e) => e.entryType === `resource`),
      (M = (e) => {
        try {
          e();
        } catch {}
      }),
      (N = (e) => new URL(e, globalThis.location.href).href),
      (Gt = (e, t, n, r) => N(e.name) === t && e.startTime + Ut >= n && e.startTime <= r),
      (Kt = (e, t) => {
        try {
          return typeof PerformanceObserver > `u` ||
            !PerformanceObserver.supportedEntryTypes?.includes(`resource`)
            ? null
            : qt(N(e), t);
        } catch {
          return null;
        }
      }),
      (qt = (e, t) => {
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
              Wt(a) &&
                Gt(a, e, t, i) &&
                (n.push(a),
                n.sort((e, t) => t.startTime - e.startTime),
                (n.length = Math.min(n.length, Bt)),
                (s = !0));
            s && !a && o !== void 0 && n.length >= o && f();
          };
        function f() {
          if (a) return;
          ((a = !0),
            M(() => {
              l !== void 0 && globalThis.clearTimeout(l);
            }),
            M(() => {
              u !== void 0 && globalThis.clearTimeout(u);
            }),
            M(() => globalThis.removeEventListener(`pagehide`, f)),
            M(() => globalThis.document?.removeEventListener(`freeze`, f)));
          try {
            r && d(r.takeRecords());
          } catch {}
          M(() => r?.disconnect());
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
            (l = globalThis.setTimeout(f, Vt)),
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
                    u = globalThis.setTimeout(f, Ht);
                  } catch {
                    f();
                  }
                })),
                s);
          },
          disconnect: f,
        };
      }),
      (Jt = (e) => performance.getEntriesByName(N(e), `resource`).filter(Wt)),
      (Yt = (e, t, n, r) => {
        let i = N(t),
          a;
        for (let t of e) Gt(t, i, n, r) && (a == null || t.startTime >= a.startTime) && (a = t);
        return a;
      }));
  }))();
}
var Zt;
function Qt() {
  return (Qt = e(() => {
    (i(),
      _t(),
      p(),
      (Zt = {
        getVoiceAccessToken() {
          return Promise.resolve(void 0);
        },
        async fetchVoiceRequest(e, t, n, r) {
          let i = { ...st(), ...n.headers };
          r && (i.Authorization = `Bearer ${r}`);
          let a = typeof n.body == `string` ? void 0 : await o(n.body);
          return (
            a && (i[`Content-Type`] = a.contentType),
            ie(
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
function $t(e) {
  return window.location.hostname.endsWith(`chatgpt-staging.com`)
    ? `https://chatgpt-staging.com`
    : `https://chatgpt.com`;
}
function en() {
  return P.getRealtimeVoiceStatus;
}
function tn() {
  let e = (0, rn.getCookie)(`oai-ll`);
  if (typeof e == `string`)
    try {
      let t = hn.safeParse(JSON.parse(e));
      if (!t.success) return;
      let { latitude: n, longitude: r, locationAccuracy: i } = t.data;
      return `${n},${r},${i}`;
    } catch {
      return;
    }
}
async function nn(e, t, n, r) {
  let i = e._getToken.resourceTiming;
  i.start();
  let a = performance.now(),
    o = Kt(t, a),
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
          let n = Yt(e ?? Jt(t), t, a, d);
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
var rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, P;
function gn() {
  return (gn = e(() => {
    (ye(),
      (rn = ee()),
      c(),
      Fe(),
      yt(),
      Ae(),
      Ot(),
      T(),
      m(),
      Xt(),
      j(),
      Qt(),
      (an = [/\[abort\]/, /The user aborted a request/, /Fetch is aborted/, /Request signal is aborted/]),
      (on = `session_limit_exceeded`),
      (sn = `global_limits_exceeded`),
      (cn = class extends Error {
        code;
        constructor(e, t = on) {
          (super(e), (this.code = t));
        }
      }),
      (ln = (e) => e instanceof cn),
      (un = (e) => ln(e) && e.code === sn),
      (dn = (e) => {
        if (e instanceof DOMException && e.name === `AbortError`) return !0;
        let t = e instanceof Error ? e.message : String(e);
        return an.some((e) => e.test(t));
      }),
      (fn = (e, t = 0, n) => {
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
      (pn = C({ proofofwork: C({ required: u(), seed: b().min(1), difficulty: b().min(1) }).optional() })),
      (mn = C({
        error: C({
          code: b()
            .optional()
            .catch(void 0),
          message: b()
            .optional()
            .catch(void 0),
        }),
      })),
      (hn = C({ latitude: f(), longitude: f(), locationAccuracy: f() })),
      (P = class {
        static getProofToken(e) {
          let t = e?.proofofwork;
          if (!t || typeof t != `object` || !t.required) return Promise.resolve(null);
          let n = pn.safeParse(e);
          return n.success ? ft(n.data) : Promise.resolve(null);
        }
        static async startTransceiverSession(e, t) {
          let {
            accessToken: n,
            offer: r,
            payload: i,
            dataChannelId: a,
            logCall: o = A.tcLoggingEnabled(e),
            signal: s,
            proofOfWorkAnswer: c,
          } = t;
          s?.throwIfAborted();
          let l = A.voicePath(
              e,
              i.voice_mode,
              i.conversation_mode?.kind === `gizmo_interaction` ? i.conversation_mode.gizmo_id : void 0,
            ),
            u = $t(e),
            d =
              t.type === `instant_connect`
                ? {
                    refresh: t.phase === `prefetch` && t.serverUfragId != null,
                    serverUfragId: t.serverUfragId,
                  }
                : void 0,
            f = `${u}${l}?${fn(o, a, d)}`,
            p = async (a) => {
              if (r.sdp == null) throw Error(`Failed to create session: missing SDP offer`);
              let o = new FormData();
              (o.append(`sdp`, r.sdp), o.append(`session`, JSON.stringify(i)));
              let l =
                  i.conversation_mode?.kind === `gizmo_interaction` ? i.conversation_mode.gizmo_id : void 0,
                u = { ...(l != null && e.get(ve)?.projectId === l ? tt(`/gizmos/${l}`) : {}) },
                d = tn();
              (d && (u[`OAI-Location`] = d), c && (u[Ce.proofToken] = c));
              let p = Oe(u),
                m = await Zt.fetchVoiceRequest(
                  e,
                  f,
                  { body: o, headers: u, signal: p ? AbortSignal.any(s ? [s, p] : [p]) : s },
                  n,
                  a,
                );
              if (!m.ok) {
                let n = mn.safeParse(await m.json().catch(() => void 0)),
                  r = n.success ? n.data.error : void 0;
                if (t.type !== `instant_connect` || t.phase !== `prefetch`) {
                  let n = () => {
                    Dt(e, Qe, {
                      voiceMetadata: t.voiceMetadata,
                      errorBucket: Ze.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_BUCKET_CLIENT,
                      errorType:
                        Re.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_CONNECTION_ESTABLISHMENT_FAILED,
                    });
                  };
                  t.type === `instant_connect` ? t.deferUserPerceivedError(n) : n();
                }
                throw r?.code === on || r?.code === sn
                  ? new cn(r.message, r.code)
                  : Error(`Failed to create session: ${m.status} ${m.statusText}`);
              }
              return m;
            };
          return t.type === `instant_connect` && t.phase === `prefetch`
            ? p()
            : nn(t.type === `instant_connect` ? t.timings : kt(e), f, p, s);
        }
        static getVoiceStatus = (e, t, n, r) =>
          et.safePost(`/conversation/voice/status`, {
            requestBody: t,
            additionalHeaders: { [Ce.proofToken]: xe() },
            signal: r,
          });
        static getRealtimeVoiceStatus = async (e, t, n, r) => {
          let i = `${$t(e)}/realtime/status`,
            a = {
              ...Ge(),
              ...(t.gizmo_id != null && e.get(ve)?.projectId === t.gizmo_id
                ? tt(`/gizmos/${t.gizmo_id}`)
                : {}),
              "Content-Type": `application/json`,
              [Ce.proofToken]: xe(),
            },
            o = Oe(a),
            s = await Zt.fetchVoiceRequest(e, i, {
              body: JSON.stringify(t),
              credentials: `include`,
              headers: a,
              signal: o ? AbortSignal.any(r ? [r, o] : [o]) : r,
            });
          if (!s.ok) throw await d(s, i);
          return await s.json();
        };
      }));
  }))();
}
function _n(e, t, n) {
  (n === `hit` && (e.get(R, void 0).cacheMiss = void 0),
    F(t, n === `hit` ? L.treatmentInFlightClaim : L.treatmentCacheMiss));
}
function F(e, t) {
  let n = e._instantConnect.clientFlags;
  n.includes(t) || n.push(t);
}
function vn(e, t) {
  e.get(R, void 0).latestSuccessfulPrewarm = { ...t, params: structuredClone(t.params) };
}
function I(e, t, n) {
  if (!t) return;
  let r = e.get(R, void 0),
    i = r.cacheMiss;
  (i?.voiceSessionId === t && i.reason.startsWith(Mn)) || (r.cacheMiss = { reason: n, voiceSessionId: t });
}
function yn(e, t, n, r, i = {}) {
  let a = e.get(R, void 0).prefetchAccounting[t];
  if (!r) {
    a.set(n, { attempted: !0 });
    return;
  }
  let o = a.get(n);
  (!o?.reason || i.overwrite) && a.set(n, { attempted: o?.attempted ?? !1, reason: r });
}
function bn(e, t, n, r) {
  let i = e.get(R, void 0).prefetchAccounting[t],
    a = i.get(n);
  return (
    i.delete(n),
    a?.reason
      ? a.reason
      : r
        ? E.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_MISMATCHED
        : a?.attempted
          ? E.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_EMPTY
          : E.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_NO_WARM_SESSION_PREFETCH_NOT_STARTED
  );
}
function xn(e) {
  let { prefetchAccounting: t } = e.get(R, void 0);
  (t.vp.clear(), t.wm.clear());
}
function Sn(e, t, n, r) {
  let i = { accessToken: r, params: n, preciseLocationHeader: tn(), sessionType: t },
    a = e.get(R, void 0),
    o = a.latestSuccessfulPrewarm;
  if (!o || o.accessToken !== i.accessToken || o.preciseLocationHeader !== i.preciseLocationHeader) return;
  try {
    if (!o.isUsable()) return;
  } catch {
    return;
  }
  let s = i.params.voice_session_id,
    c = On(o, i);
  if (!s || c === void 0 || a.invalidationVoiceSessionId === s) return;
  ((a.invalidationVoiceSessionId = s), (a.invalidationReason = c));
  let l = An.safeParse(`${Mn}${c.slice(50)}`);
  if (l.success) return (I(e, s, l.data), Tn(e, s).instantConnectCacheMissReason);
}
function Cn(e, t) {
  F(e, t === `pc1` ? L.pc1Winner : L.pc2Winner);
}
function wn(e, t) {
  F(e, { timeout: L.raceTimedOut, cancelled: L.raceCancelled, candidate_failure: L.raceFailed }[t]);
}
function Tn(e, t) {
  let { cacheMiss: n } = e.get(R, void 0);
  return n?.voiceSessionId === t ? { instantConnectCacheMissReason: n.reason } : {};
}
function En(e, t) {
  let n = kt(e),
    { _instantConnect: r, tcConnect: i } = n,
    a = e.get(R, void 0),
    o = a.invalidationVoiceSessionId === t ? a.invalidationReason : void 0,
    s = r.clientFlags.includes(L.treatmentInFlightClaim);
  s &&
    r.raceStarted.isMarked() &&
    r.winner == null &&
    !r.clientFlags.includes(L.raceTimedOut) &&
    !r.clientFlags.includes(L.raceFailed) &&
    F(n, L.raceCancelled);
  let c = i.isSuccessful() && (!s || r.winner != null);
  return {
    ...(r.clientFlags.length > 0 ? { clientFlags: [...r.clientFlags] } : {}),
    ...(o === void 0 ? {} : { instantConnectInvalidationReason: o }),
    ...(c ? { instantConnectPrefetchUsed: r.winner === `pc1` } : {}),
  };
}
function Dn(e, t) {
  if (t === `backend_mode`) return e.sessionType === `vp` ? e.params.voice_mode : e.sessionType;
  if (t === `gizmo_id`) {
    let t = e.params.conversation_mode;
    return t && `gizmo_id` in t ? t.gizmo_id : void 0;
  }
  return e.params[t];
}
function On(e, t) {
  for (let [n, r, i] of Nn)
    if ((i == null || i === e.sessionType) && Dn(e, n) !== Dn(t, n)) return kn[`${jn}${r}`];
}
var L, R, kn, An, jn, Mn, Nn;
function Pn() {
  return (Pn = e(() => {
    (ye(),
      S(),
      c(),
      r(),
      T(),
      gn(),
      (L = {
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
      (R = v(h, (e) => ({
        latestSuccessfulPrewarm: void 0,
        invalidationVoiceSessionId: void 0,
        invalidationReason: void 0,
        cacheMiss: void 0,
        prefetchAccounting: { vp: new Map(), wm: new Map() },
      }))),
      (kn = Xe),
      (An = _(E)),
      (jn = `CHATGPT_VOICE_INSTANT_CONNECT_INVALIDATION_REASON_`),
      (Mn = `CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_INVALIDATION_`),
      (Nn = [
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
async function Fn() {
  try {
    return (await navigator.permissions.query({ name: `microphone` })).state;
  } catch {
    return `unknown`;
  }
}
function In() {
  return (In = e(() => {
    g();
  }))();
}
var Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, z;
function qn() {
  return (qn = e(() => {
    (O(),
      g(),
      Nt(),
      In(),
      (Ln = `391813552`),
      (Rn = 864e5),
      (zn = !1),
      (Bn = 7),
      (Vn = 30),
      (Hn = !1),
      (Un = 144e5),
      (Wn = { disableExposureLog: !0 }),
      (Gn = {
        cache_ttl_ms: Un,
        enabled: !1,
        microphone_permission_eligibility_enabled: Hn,
        new_user_eligibility_enabled: zn,
        new_user_window_days: Bn,
        recent_voice_window_days: Vn,
      }),
      (Kn = class {
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
          let t = e.get(Pt);
          if (typeof t != `string`) return !1;
          let n = Date.parse(t);
          if (!Number.isFinite(n)) return !1;
          let r = this.getPolicyParameter(e, `recent_voice_window_days`),
            i = Number.isFinite(r) && r >= 0 ? r : Vn;
          return n > Date.now() - i * Rn;
        }
        isNewUserEligible(e, t) {
          if (!t || !this.getPolicyParameter(e, `new_user_eligibility_enabled`)) return !1;
          let n = this.getPolicyParameter(e, `new_user_window_days`),
            r = Number.isFinite(n) && n >= 0 ? n : Bn;
          return Date.now() - t * 1e3 < r * Rn;
        }
        async isMicrophonePermissionEligible(e) {
          return this.getPolicyParameter(e, `microphone_permission_eligibility_enabled`)
            ? (await Fn()) === `granted`
            : !1;
        }
        getCacheTtlMs(e) {
          let t = this.getPolicyParameter(e, `cache_ttl_ms`);
          return Number.isFinite(t) && t > 0 ? t : Un;
        }
        getPolicyParameter(e, t, n = Wn) {
          let r = Gn[t];
          try {
            return e.get(Je)?.getLayer(Ln, n).get(t, r) ?? r;
          } catch (e) {
            return (
              w.debug(`[voice] Instant-connect policy unavailable`, {
                safe: { parameter: t },
                sensitive: { error: e },
              }),
              r
            );
          }
        }
      }),
      (z = new Kn()));
  }))();
}
function Jn(e) {
  return He(e, Xn);
}
function Yn(e, t) {
  return Jn(e) && z.isEnabled(e, t);
}
var Xn;
function Zn() {
  return (Zn = e(() => {
    (O(), qn(), (Xn = `994921855`));
  }))();
}
var Qn;
function $n() {
  return ($n = e(() => {
    Qn = () => crypto.randomUUID();
  }))();
}
function er(e) {
  let t = JSON.stringify(e, (e, t) =>
    t && typeof t == `object` && !Array.isArray(t)
      ? Object.fromEntries(Object.entries(t).sort(([e], [t]) => (e < t ? -1 : +(e > t))))
      : t,
  );
  if (t === void 0) throw TypeError(`Value cannot be serialized as JSON`);
  return t;
}
function tr(e, t) {
  e.set(rr, ({ sampleHistory: e }) => ({
    latestSample: t,
    sampleHistory: t == null ? [] : [...e, { ...t, webrtcStats: void 0 }].slice(-7200),
  }));
}
var nr, rr;
function ir() {
  return (ir = e(() => {
    (S(),
      r(),
      Be(),
      (nr = a(h, ({ get: e }) => e(Tt, `2048788910`)?.get(`intervalMs`, 1e3) ?? 1e3)),
      (rr = re(h, () => ({ latestSample: null, sampleHistory: [] }))),
      a(h, ({ get: e }) => e(rr).latestSample),
      a(h, ({ get: e }) => e(rr).sampleHistory));
  }))();
}
function ar(e, { localIntervalOverrideMs: t } = {}) {
  return { enabled: e.get(Tt, `2048788910`)?.get(`enabled`, 2) ?? 2, intervalMs: t ?? e.get(nr) };
}
function or(e) {
  return He(e, `675831937`);
}
function sr() {
  return (sr = e(() => {
    (Be(), O(), ir());
  }))();
}
function B(e) {
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function V(e) {
  let t = B(e);
  return t !== void 0 && t >= 0 ? t : void 0;
}
function H(e, t) {
  if (e === void 0) return;
  if (t === void 0) return e;
  let n = e - t;
  return n >= 0 ? n : void 0;
}
function cr(e, t) {
  return t === void 0 ? 0 : Math.max(0, e - t);
}
function lr(e) {
  let t = Reflect.get(e, `kind`) ?? Reflect.get(e, `mediaType`);
  return e.type === `inbound-rtp` && t === `audio`;
}
function ur(e) {
  return Array.from(e.values()).filter(lr);
}
function dr(e) {
  let t = Array.from(e.values()),
    n = t.find((e) => e.type === `transport`),
    r = Reflect.get(n ?? {}, `selectedCandidatePairId`);
  if (typeof r == `string`) {
    let t = e.get(r);
    if (t?.type === `candidate-pair`) return t;
  }
  return t.find((e) => e.type === `candidate-pair` && Reflect.get(e, `selected`) === !0);
}
function fr(e, t) {
  if (typeof e.id == `string` && e.id.length > 0) return e.id;
  let n = V(Reflect.get(e, `ssrc`));
  return n === void 0 ? `inbound-audio-${t}` : `ssrc-${n}`;
}
function pr(e, t) {
  let n = t ? Reflect.get(t, `codecId`) : void 0;
  return mr((typeof n == `string` ? e.get(n) : void 0)?.clockRate);
}
function mr(e) {
  let t = B(e);
  return t !== void 0 && t > 0 ? t : void 0;
}
function hr() {
  return (hr = e(() => {}))();
}
function gr(e, t, n) {
  let r = (e - t) >>> 0;
  return ((r > 2147483647 ? r - 4294967296 : r) / n) * 1e3;
}
function _r() {
  return (
    typeof RTCRtpSender == `function` &&
    typeof RTCRtpReceiver == `function` &&
    typeof RTCRtpScriptTransform == `function` &&
    typeof Worker == `function` &&
    `transform` in RTCRtpSender.prototype &&
    `transform` in RTCRtpReceiver.prototype
  );
}
function vr(e) {
  return {
    concealedSamples: V(e?.concealedSamples),
    concealmentEvents: V(e?.concealmentEvents),
    silentConcealedSamples: V(e?.silentConcealedSamples),
    packetsLost: V(e?.packetsLost),
  };
}
function yr(e) {
  return Object.values(e).some((e) => e !== void 0);
}
var br, xr;
function Sr() {
  return (Sr = e(() => {
    ((br = 50),
      (xr = class {
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
          if (_r()) {
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
          if (_r()) {
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
              a = i.find(lr),
              o = i.find((e) => e.type === `outbound-rtp` && Reflect.get(e, `kind`) === `audio`);
            (a?.codecId && t.get(a.codecId), o?.codecId && t.get(o.codecId));
            let s = pr(t, o) ?? pr(t, a);
            if (s === void 0) return;
            let c = B(a?.jitterBufferDelay),
              l = B(a?.jitterBufferEmittedCount),
              u = c !== void 0 && l !== void 0 && l > 0 ? (c / l) * 1e3 : 0,
              d = gr(n, r, s),
              f = d + u,
              p = vr(a),
              m = H(p.concealedSamples, this.previousInboundAudioCounters?.concealedSamples),
              h = H(p.concealmentEvents, this.previousInboundAudioCounters?.concealmentEvents),
              g = H(p.silentConcealedSamples, this.previousInboundAudioCounters?.silentConcealedSamples),
              _ = H(p.packetsLost, this.previousInboundAudioCounters?.packetsLost);
            yr(p) && (this.previousInboundAudioCounters = p);
            let v = m === void 0 ? void 0 : (m / s) * 1e3,
              y = (v ?? 0) > 0 || (h ?? 0) > 0 || (g ?? 0) > 0,
              b = `none`;
            (v ?? 0) >= br ? (b = `severe`) : y && (b = `gap`);
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
function Cr(e, { pc: t, audioTransceiver: n }) {
  let r = or(e),
    i = k(A.sessionType(e)),
    a = ar(e, { localIntervalOverrideMs: null }),
    o;
  if (r) {
    let e = i && !!(a.enabled & 2),
      r = !i && !!(a.enabled & 1);
    (e || r) &&
      ((o = new xr({
        audioTransceiver: n,
        getStats: () => t.getStats(),
        defaultLatency: a.intervalMs,
        includeWebRTCStats: () => !1,
      })),
      o.startRtpTimestampCapture());
  }
  return o;
}
function wr(e, { e2eMonitor: t, getReportedVoiceMode: n, voiceSessionId: r, isMonitoring: i }) {
  if (!t) {
    tr(e, null);
    return;
  }
  let a = ar(e, { localIntervalOverrideMs: null });
  (tr(e, null),
    t.startSampling({
      sampleIntervalMs: a.intervalMs,
      onSample: (t) => {
        i() &&
          (tr(e, t),
          Dt(e, Ct, {
            outboundAudioRtpTimestamp: te(t.outTs),
            inboundAudioRtpTimestamp: te(t.inTs),
            audioE2eLatencyMs: t.audioE2eLatencyMs,
            rtpDeltaMs: t.rtpDeltaMs,
            jitterBufferDelayMs: t.jitterBufferDelayMs,
            voiceSessionId: r,
            voiceMode: n(),
          }),
          w.debug(`[transceiver] E2E latency sample`, { safe: {}, sensitive: { sample: t } }));
      },
    }));
}
function Tr() {
  return (Tr = e(() => {
    (Le(), ye(), Ot(), g(), ir(), sr(), Sr(), j());
  }))();
}
function Er(e, t, n) {
  if (n === void 0) return e;
  let r = H(t, n);
  return r === void 0 ? e : (e ?? 0) + r;
}
var Dr, Or, kr, U, Ar, jr, Mr;
function Nr() {
  return (Nr = e(() => {
    ((Dr = 48e3),
      (Or = 100),
      (kr = 0.01),
      (U = 1e3),
      (Ar = 3e4),
      (jr = class {
        audioGapWindowTracker = new Mr();
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
          let n = typeof e.values == `function` ? dr(e) : void 0,
            r = V(t.timestamp) ?? Date.now();
          (this.networkTelemetrySamples.push({
            timestampMs: r,
            packetsLost: B(t.packetsLost),
            packetsReceived: V(t.packetsReceived),
            candidatePairId: n?.id,
            stunRequestsSent: V(n?.requestsSent),
            stunResponsesReceived: V(n?.responsesReceived),
          }),
            (this.networkTelemetrySamples = this.networkTelemetrySamples.filter(
              (e) => r - e.timestampMs <= Ar,
            )));
        }
        getEndSessionNetworkTelemetry(e) {
          let t = e - Ar,
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
              (s = Er(s, r.packetsReceived, t.packetsReceived)),
              t.candidatePairId !== void 0 &&
                t.candidatePairId === r.candidatePairId &&
                ((c = Er(c, r.stunRequestsSent, t.stunRequestsSent)),
                (l = Er(l, r.stunResponsesReceived, t.stunResponsesReceived))));
          }
          let u = o !== void 0 && s !== void 0 ? o + s : void 0;
          return {
            aggregateTelemetryDurationSeconds: a / U,
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
              thresholdMs: Or,
              silentTotalMs: 0,
              silentCount: 0,
              nonSilentTotalMs: 0,
              nonSilentCount: 0,
              activeOutputAudioRmsThresholdRatio: kr,
              webrtcStatsPollingIntervalMs: t,
            };
          this.summary = {
            ...i,
            silentTotalMs: i.silentTotalMs + n,
            silentCount: i.silentCount + +(n >= Or),
            nonSilentTotalMs: i.nonSilentTotalMs + r,
            nonSilentCount: i.nonSilentCount + +(r >= Or),
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
      (Mr = class {
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
              let l = fr(t, c),
                u = this.previousByStream.get(l),
                d = { ...u },
                f = V(t.concealedSamples);
              if (f !== void 0) {
                let n = V(t.silentConcealedSamples) ?? 0,
                  o = cr(f, u?.concealedSamples),
                  s = Math.min(cr(n, u?.silentConcealedSamples), o),
                  c = Math.max(0, o - s),
                  l = pr(e, t) ?? Dr;
                ((d.concealedSamples = f),
                  (d.silentConcealedSamples = n),
                  u?.concealedSamples !== void 0 &&
                    ((i = (i ?? 0) + (s / l) * U), (a = (a ?? 0) + (c / l) * U)),
                  (r = !0));
              }
              let p = V(t.totalSamplesDuration);
              if (p !== void 0) {
                let e = cr(p, u?.totalSamplesDuration),
                  n = e * U,
                  i = V(t.totalAudioEnergy);
                if (((d.totalSamplesDuration = p), (o = (o ?? 0) + n), i === void 0))
                  delete d.totalAudioEnergy;
                else {
                  let t = u?.totalAudioEnergy;
                  if (((d.totalAudioEnergy = i), t !== void 0 && e > 0)) {
                    let r = Math.max(0, i - t),
                      a = Math.sqrt(r / e) >= kr ? n : 0;
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
var Pr;
function Fr() {
  return (Fr = e(() => {
    (Nr(),
      (Pr = class {
        previousInboundAudioStats;
        audioGapWindowTracker = new Mr();
        sample(e) {
          let t = ur(e),
            n = t[0];
          if (!n) return;
          let r = this.audioGapWindowTracker.observe(e, t),
            i = {
              jitterBufferDelay: V(n.jitterBufferDelay),
              jitterBufferEmittedCount: V(n.jitterBufferEmittedCount),
              packetsReceived: V(n.packetsReceived),
            },
            a = this.previousInboundAudioStats;
          this.previousInboundAudioStats = i;
          let o = a === void 0 ? void 0 : H(i.jitterBufferDelay, a.jitterBufferDelay),
            s = a === void 0 ? void 0 : H(i.jitterBufferEmittedCount, a.jitterBufferEmittedCount),
            c = o !== void 0 && s !== void 0 && s > 0 ? (o / s) * 1e3 : null,
            l =
              a !== void 0 && i.packetsReceived !== void 0 && a.packetsReceived !== void 0
                ? (H(i.packetsReceived, a.packetsReceived) ?? 0)
                : 0,
            u = V(dr(e)?.currentRoundTripTime);
          return {
            receivedPacketsDelta: l,
            outputAudioBufferDepthMs: c,
            serviceRttMs: u === void 0 ? null : u * 1e3,
            outputAudioBytesReceived: V(n.bytesReceived) ?? null,
            outputAudioPacketsReceived: V(n.packetsReceived) ?? null,
            outputAudioPacketsLost: B(n.packetsLost) ?? null,
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
function Ir(e) {
  return (
    (e?.getSynchronizationSources?.() ?? []).find((e) => Number.isFinite(e.rtpTimestamp))?.rtpTimestamp ??
    null
  );
}
var Lr;
function Rr() {
  return (Rr = e(() => {
    (Fr(),
      (Lr = class {
        getStats;
        receiver;
        timerId = null;
        sampling = !1;
        run = null;
        sampler = new Pr();
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
                outputAudioReceivedRtpts: Ir(this.receiver),
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
var W, zr, Br, Vr;
function Hr() {
  return (Hr = e(() => {
    (Tr(),
      Rr(),
      (W = { end: () => {}, start: () => {}, time: (e) => e(), timeAsync: (e) => e() }),
      (zr = {
        _peerConnection: { preConnectionSetup: W },
        _preConnect: {
          blankTransceiver: W,
          createOffer: W,
          dataChannel: W,
          eventHandlers: W,
          getPeerConnection: W,
          setLocalDescription: W,
        },
        _parameterResolution: { voiceCommit: W, backendReasoningEffort: W, workModelSlug: W },
      }),
      (Br = class {
        async preConnectionSetup(
          e,
          {
            applyEventHandlers: t,
            existingConnection: n,
            getPeerConnection: r,
            onDataChannelCreated: i,
            onPeerConnectionCreated: a,
            onTransceiverCreated: o,
            timings: s = zr,
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
          let g = new Lr({ getStats: () => u.getStats(), receiver: p.receiver }),
            _ = Cr(e, { pc: u, audioTransceiver: p }),
            v = {
              phase: `idle`,
              start: ({ onClientMetricsSample: t, getReportedVoiceMode: n, voiceSessionId: r }) => {
                v.phase === `idle` &&
                  ((v.phase = `started`),
                  t && g.start({ onSample: t }),
                  wr(e, {
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
      (Vr = new Br()));
  }))();
}
function Ur() {
  return new Promise((e, t) => {
    let n = indexedDB.open(Xr, Zr);
    ((n.onupgradeneeded = () => {
      let e = n.result;
      e.objectStoreNames.contains(G) || e.createObjectStore(G);
    }),
      (n.onsuccess = () => e(n.result)),
      (n.onerror = () => t(n.error ?? Error(`Certificate storage request failed`))));
  });
}
function Wr(e, t) {
  return new Promise((n, r) => {
    let i = e.transaction(G, `readonly`).objectStore(G).get(t);
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
function Gr(e, t, n) {
  return new Promise((r, i) => {
    let a = e.transaction(G, `readwrite`).objectStore(G).put(n, t);
    ((a.onsuccess = () => r()),
      (a.onerror = () => i(a.error ?? Error(`Certificate storage request failed`))));
  });
}
function Kr(e) {
  let t = Date.now();
  return e.expires <= t;
}
async function qr() {
  try {
    `storage` in navigator && `persist` in navigator.storage && (await navigator.storage.persist());
  } catch (e) {
    w.debug(`[voice] Certificate persistence unavailable`, { safe: {}, sensitive: { error: e } });
  }
}
async function Jr(e) {
  return await RTCPeerConnection.generateCertificate(e);
}
async function Yr(e = {}) {
  let { generationParams: t = $r, disablePersistence: n = !1 } = e;
  if (!n && `indexedDB` in window)
    try {
      await qr();
      let e = await Ur(),
        n;
      try {
        let r = await Wr(e, Qr);
        if (r && !Kr(r)) return r;
        let i = await Jr(t);
        return (
          (n = Gr(e, Qr, i).catch((e) => {
            w.debug(`[voice] Certificate persistence unavailable`, { safe: {}, sensitive: { error: e } });
          })),
          i
        );
      } finally {
        n ? n.then(() => e.close()) : e.close();
      }
    } catch (e) {
      w.debug(`[voice] Certificate cache unavailable`, { safe: {}, sensitive: { error: e } });
    }
  return Jr(t);
}
var Xr, Zr, G, Qr, $r;
function ei() {
  return (ei = e(() => {
    (g(),
      (Xr = `webrtc-cert-db`),
      (Zr = 1),
      (G = `certs`),
      (Qr = `ecdsa-p256:v1`),
      ($r = { name: `ECDSA`, namedCurve: `P-256`, expires: 31536e6 }));
  }))();
}
async function ti(e) {
  return (
    await be.whenReached(`background_ready`, e),
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
function ni() {
  return (ni = e(() => {
    dt();
  }))();
}
function ri() {
  if (typeof document > `u`) return;
  let e = document.head.querySelectorAll(`meta[http-equiv="origin-trial"]`);
  for (let t of e) if (t.content === si) return;
  let t = document.createElement(`meta`);
  ((t.httpEquiv = `origin-trial`), (t.content = si), document.head.append(t));
}
function ii(e) {
  return !(
    !e ||
    e.signalingState === `closed` ||
    e.connectionState !== `new` ||
    e.iceConnectionState !== `new`
  );
}
function ai() {
  if (((ci = !0), X)) return X;
  let e = Y;
  if (!li) {
    let t = ti()
      .then(() => {
        if (e === Y) return Yr({ generationParams: { name: `ECDSA`, namedCurve: `P-256` } });
      })
      .then((t) => {
        e === Y && (q = t);
      })
      .catch((e) => {
        w.debug(`[voice] Certificate prewarm unavailable`, { safe: {}, sensitive: { error: e } });
      })
      .finally(() => {
        li === t && (li = void 0);
      });
    li = t;
  }
  return oi();
}
function oi() {
  if (X) return X;
  let e = Y,
    t = ti()
      .then(() => {
        e !== Y || ii(K) || (K?.close(), (K = J.createPeerConnection(`cache`)));
      })
      .finally(() => {
        X === t && (X = void 0);
      });
  return ((X = t), t);
}
var si, K, q, ci, J, Y, li, X;
function ui() {
  return (ui = e(() => {
    (g(),
      ei(),
      ni(),
      (si = `AnY33Lstn7fSTXvj63Z4glPcRXtUukuM9rLN87JGOugFyfum9ckNUU3NYHeRLcp6TELT5wbCZih5SlHfumMbJAkAAABmeyJvcmlnaW4iOiJodHRwczovL2NoYXRncHQuY29tOjQ0MyIsImZlYXR1cmUiOiJXZWJSdGNTY3RwU25hcCIsImV4cGlyeSI6MTc5NDg3MzYwMCwiaXNTdWJkb21haW4iOnRydWV9`),
      (K = void 0),
      (q = void 0),
      (ci = !1),
      (J = {
        createPeerConnection: (e) => (
          ri(),
          q && Kr(q) && (q = void 0),
          q === void 0
            ? new RTCPeerConnection({ bundlePolicy: `max-bundle` })
            : new RTCPeerConnection({ bundlePolicy: `max-bundle`, certificates: [q] })
        ),
        getFreshPeerConnection: (e) => {
          try {
            return K && ii(K) ? K : (K?.close(), J.createPeerConnection(e));
          } finally {
            (ci &&
              oi().catch((e) => {
                w.debug(`[voice] Peer connection prewarm unavailable`, { safe: {}, sensitive: { error: e } });
              }),
              (K = void 0));
          }
        },
        resetAll: () => {
          (Y++, (ci = !1), K?.close(), (li = void 0), (X = void 0), (K = void 0), (q = void 0));
        },
      }),
      (Y = 0));
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
function mi(e, t, n, r, i) {
  let a = [],
    o = [],
    s = new AbortController(),
    { promise: c, reject: l, resolve: u } = ae(),
    d,
    f,
    p = `buffering`,
    m = () => ({ connectionState: r.connectionState, iceConnectionState: r.iceConnectionState }),
    h = (e) => {
      p !== `detached` && (p === `live` ? e() : a.push(e));
    },
    g = (e) =>
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
              if (p === `detached`) return;
              let i = m();
              h(() => {
                let a = d,
                  o = f;
                ((d = n), (f = i));
                try {
                  r.call(e, t);
                } finally {
                  ((d = a), (f = o));
                }
              });
            };
          return (
            o.push((n) => {
              Reflect.get(e, t, e) === i && Reflect.set(e, t, n ? r : null, e);
            }),
            Reflect.set(e, t, i, e)
          );
        },
      }),
    _ = {
      activate: () => {
        if (p === `buffering`)
          try {
            p = `flushing`;
            for (let e of a) e();
            ((a.length = 0), o.forEach((e) => e(!0)), (p = `live`));
          } catch (e) {
            throw (_.detach(Z(e)), e);
          }
      },
      applyEventHandlers: ({ dataChannel: n, pc: r }) => (
        e._instantConnect.candidates[t].eventHandlersAttached.mark(),
        i({
          dataChannel: g(n),
          getEventTimestamp: () => d ?? performance.now(),
          getPeerConnectionState: () => f ?? m(),
          pc: g(r),
        }),
        h
      ),
      attachAbortSignal: (e) => {
        let n = () => _.detach(Z(e.reason ?? `Instant Connect ${t} was aborted`));
        (e.addEventListener(`abort`, n, { once: !0, signal: s.signal }), e.aborted && n());
      },
      detach: (e) => {
        p !== `detached` && ((p = `detached`), (a.length = 0), s.abort(), o.forEach((e) => e(!1)), l(e));
      },
      ready: c,
    };
  c.catch(() => {});
  let v = e._instantConnect.candidates[t],
    y = () => {
      _.detach(Error(`Instant Connect ${t} received a terminal startup error`));
    };
  return (
    n.addEventListener(
      `message`,
      (e) => {
        if (typeof e.data != `string`) return;
        let t, i, a, o;
        try {
          let n = JSON.parse(e.data);
          ((t = n?.type), (o = n?.data));
        } catch {
          return;
        }
        if (t === `error`) {
          y();
          return;
        }
        if (t === `data_message`) {
          if (typeof o == `string`)
            try {
              let e = JSON.parse(o);
              ((i = e?.type), (a = e?.payload?.new_state));
            } catch {}
          if (i === `error`) {
            y();
            return;
          }
          (v.firstDataMessage.mark(),
            (v.connectionStateAtFirstDataMessage = r.connectionState),
            (v.iceConnectionStateAtFirstDataMessage = r.iceConnectionState),
            (v.dataChannelStateAtFirstDataMessage = n.readyState),
            (v.firstDataMessageInnerType = typeof i == `string` ? i : void 0),
            (v.firstDataMessageState = typeof a == `string` ? a : void 0),
            s.abort(),
            u(void 0));
        }
      },
      { signal: s.signal },
    ),
    _
  );
}
function $(e, t, n, r, i = A.tcLoggingEnabled(e)) {
  return er({
    accessToken: r,
    logCall: i,
    preciseLocationHeader: tn(),
    ...Object.fromEntries(hi[t].map((e) => [e, n[e]])),
  });
}
var hi, gi, _i;
function vi() {
  return (vi = e(() => {
    (ye(),
      g(),
      T(),
      Pn(),
      $n(),
      j(),
      gn(),
      Hr(),
      qn(),
      ui(),
      Lt(),
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
          let r = kt(e);
          return (e) => {
            let i = mi(r, t ? `pc1` : `pc2`, e.dataChannel, e.pc, n);
            return (this.candidateEventBuffers.set(e.pc, i), i.applyEventHandlers(e));
          };
        }
        async createCache(e, t, n, r = {}) {
          let i = A.tcLoggingEnabled(e),
            a = $(e, t, n, r.accessToken, i);
          if ((this.pruneUnusableCacheEntries(e, t), this.getUsableCacheEntry(e, t, a)))
            return { type: `success` };
          let o = this.cacheCreations[t].get(a);
          if (o) {
            if (!o.signal.aborted) return { type: `alreadyInProgress` };
            this.cacheCreations[t].delete(a);
          }
          yn(e, t, a);
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
            (u.signal.throwIfAborted(), (d ??= J.getFreshPeerConnection(`cache`)));
            let o = d;
            f ??= await Vr.preConnectionSetup(e, { getPeerConnection: () => o });
            let s = structuredClone(n);
            (delete s.parent_message_id,
              (s.voice_session_id = l?.voiceSessionParams.voice_session_id ?? Qn()),
              (s.voice_status_request_id = s.voice_session_id),
              c && this.caches[t].delete(c));
            let p = await P.startTransceiverSession(e, {
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
                yn(e, t, a, E.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_PREFETCH_FAILED, {
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
          xn(e);
        }
        raceCache(e, t, n, r) {
          let i = kt(e);
          if (n.voice_mode === `standard`)
            return (
              Sn(e, t, n, r.accessToken) ||
                I(
                  e,
                  n.voice_session_id,
                  E.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_NO_WARM_SESSION_UNSUPPORTED_BACKEND_MODE,
                ),
              this.activateFreshCandidateEventHandlers(r.freshConnectionBundle),
              { type: `cacheMiss` }
            );
          let a = $(e, t, n, r.accessToken),
            o = this.getUsableCacheEntry(e, t, a);
          if (!o) {
            let o = this.cacheCreations[t].get(a);
            if ((!o || o.signal.aborted) && !Sn(e, t, n, r.accessToken)) {
              let i = bn(
                e,
                t,
                a,
                Array.from(this.caches[t].entries()).some(
                  ([n, i]) => n === $(e, t, i.voiceSessionParams, r.accessToken),
                ),
              );
              I(e, n.voice_session_id, i);
            }
            return (
              _n(e, i, `miss`),
              this.activateFreshCandidateEventHandlers(r.freshConnectionBundle),
              { type: `cacheMiss` }
            );
          }
          (this.caches[t].delete(a), _n(e, i, `hit`));
          let s;
          try {
            s = r.preConnectionSetup(o);
          } catch (e) {
            throw (F(i, L.preparedActivationFailed), Q(o), e);
          }
          let c = this.candidateEventBuffers.get(o.pc);
          if ((this.candidateEventBuffers.delete(o.pc), !c))
            throw (
              F(i, L.preparedActivationFailed),
              Q(o),
              s.catch(() => {}),
              Error(`Instant Connect cached candidate was not prepared`)
            );
          let l = ae(),
            u = new Map(),
            d = (e) => {
              let t = u.get(e.pc);
              if (t != null) return t;
              let n = l.promise.then((t) => {
                if (e.pc.signalingState !== `closed`) return e.audioTransceiver.sender.replaceTrack(t);
              });
              return (u.set(e.pc, n), n);
            },
            f = new AbortController(),
            p = AbortSignal.timeout(It(e)),
            m = r.signal ? AbortSignal.any([p, r.signal]) : p,
            h = [],
            g = i._instantConnect;
          ((g.cacheAgeMs = Date.now() - o.createdAt),
            (g.voiceSessionId = o.voiceSessionParams.voice_session_id),
            (g.serverId = o.serverUfragId),
            (g.sessionType = t),
            g.raceStarted.mark());
          let _,
            v,
            y = Promise.any([
              this.startCached(
                i,
                o,
                c,
                h,
                m,
                () => d(o),
                async () => {
                  try {
                    (await s,
                      F(i, L.preparedApplied),
                      await o.pc.setRemoteDescription({ sdp: o.answerSdp, type: `answer` }));
                  } catch (e) {
                    throw (v == null && !m.aborted && F(i, L.preparedActivationFailed), e);
                  }
                  return o;
                },
              ),
              this.startFresh(e, i, o, r.freshConnectionBundle, h, r, m, f, d, (e) => {
                _ = e;
              }),
            ])
              .then((t) => {
                let r = t.candidate;
                ((v = r.candidateId),
                  f.abort(`Instant Connect winner selected`),
                  h
                    .filter(({ eventBuffer: e }) => e !== t.eventBuffer)
                    .forEach(({ candidate: e, eventBuffer: t }) => {
                      (t.detach(Error(`Instant Connect candidate lost the race`)), Q(e));
                    }));
                try {
                  t.eventBuffer.activate();
                } catch (e) {
                  throw (
                    r.candidateId === `pc1` && F(i, L.preparedActivationFailed),
                    t.eventBuffer.detach(Z(e)),
                    Q(r),
                    e
                  );
                }
                return (
                  (g.winner = r.candidateId),
                  g.winnerSelected.mark(),
                  r.candidateId === `pc2` &&
                    I(
                      e,
                      n.voice_session_id,
                      E.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_MISS,
                    ),
                  Cn(i, r.candidateId),
                  r
                );
              })
              .catch((e) => {
                m.aborted
                  ? wn(i, m.reason === p.reason ? `timeout` : `cancelled`)
                  : wn(i, `candidate_failure`);
                let t = m.aborted ? Z(m.reason) : Error(`Instant Connect race failed`, { cause: e });
                f.abort(`Instant Connect race failed`);
                for (let { candidate: e, eventBuffer: n } of h) (n.detach(t), Q(e));
                throw (v == null && !r.signal?.aborted && _?.(), t);
              });
          return (
            y.catch(() => {}),
            { futureWinner: y, setAudioTrack: (e) => (l.resolve(e), y.then(d)), type: `raceStarted` }
          );
        }
        async startCached(e, t, n, r, i, a, o) {
          let s = e._instantConnect.candidates[t.candidateId];
          try {
            (n.attachAbortSignal(i), r.push({ candidate: t, eventBuffer: n }));
            let e = await o();
            return (
              s.signalingCompleted.mark(),
              a().catch((e) => {
                w.debug(`[instant-connect] Failed to attach the microphone track`, {
                  safe: { candidateId: t.candidateId },
                  sensitive: { error: e },
                });
              }),
              await n.ready,
              s.becameUsable.mark(),
              { candidate: e, eventBuffer: n }
            );
          } catch (e) {
            throw ((s.failure = Z(e).message), s.failed.mark(), n.detach(Z(e)), Q(t), e);
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
                r = await P.startTransceiverSession(e, {
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
                throw (u.aborted || F(t, L.validationFailed), e);
              }
              if (((t._instantConnect.pc2ResponseStatus = r.status), pi(r)))
                throw (
                  F(t, L.validationConfirmed),
                  Error(`Instant Connect server match found; PC2 is not needed`)
                );
              if (!fi(r))
                throw (
                  F(t, L.validationFailed),
                  Error(`Expected an Instant Connect server match result, received status ${r.status}`)
                );
              try {
                let e = await r.text();
                (await f.pc.setRemoteDescription({ sdp: e, type: `answer` }), u.throwIfAborted());
              } catch (e) {
                throw (u.aborted || F(t, L.validationFailed), e);
              }
              return (F(t, L.replacementCreated), f);
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
            Date.now() - t.createdAt <= z.getCacheTtlMs(e) &&
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
            (yn(
              e,
              t,
              n,
              Date.now() - r.createdAt > z.getCacheTtlMs(e)
                ? E.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_EXPIRED
                : E.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_UNAVAILABLE,
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
    : (i ?? e.get(Je)?.getLayer(`227870931`, { disableExposureLog: a }).get(`deprecate_celsius`, !1) ?? !1);
}
function bi() {
  return (bi = e(() => {
    O();
  }))();
}
var xi, Si;
function Ci() {
  return (Ci = e(() => {
    ((xi = t(ne(), 1)),
      S(),
      ct(),
      pe(),
      pt(),
      Ne(),
      r(),
      (Si = oe(
        h,
        ({ conversationId: e, composerContext: t }, { get: n }) => {
          let r = t == null ? n(ut, e) : t.conversationOrigin,
            i = t == null ? n(De, e) : n(ze, t).selectedModel,
            a = r === `tpp`,
            o = n(a ? ht : D).data,
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
  return He(e, `3012464398`) && !He(e, `3387372448`);
}
function Ti(e, t) {
  let n = e.get(Et),
    r =
      n.status === `allowed` &&
      `plan` in n &&
      n.plan !== Pe.FREE &&
      n.plan !== Pe.FREE_WORKSPACE &&
      n.plan !== Pe.GO;
  return wi(e) && e.get(ut, t) !== `tpp` && (r || !1);
}
function Ei() {
  return (Ei = e(() => {
    (wt(), Ne(), O(), vt());
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
    b = h ?? A.requestedVoiceMode(e, A.isStandardVoiceSelected$(e) ? `standard` : `advanced`),
    {
      isWorkConversation: x,
      selectedModel: S,
      thinkingEffort: ee,
    } = e.get(Si, { conversationId: o, composerContext: s }),
    te = n ? n.requested_default_model : S.slug,
    ne = b === `advanced` && !k(d) && !(n && `thinking_effort` in n) ? ee : n?.thinking_effort,
    re = k(d) && !x && Ti(e, o),
    C = {
      backend_reasoning_effort: k(d) && !re ? (n?.backend_reasoning_effort ?? a ?? `instant`) : void 0,
      conversation_id: n ? n.conversation_id : (e.get(le, o) ?? void 0),
      entrypoint_id: n?.entrypoint_id,
      language_code: n?.language_code,
      parent_message_id: n?.parent_message_id,
      requested_default_model: te,
      thinking_effort: ne,
    },
    ie = te ?? `gpt-4o`,
    ae = n?.gizmo_id ?? c,
    oe,
    w = x && v ? v : S.slug,
    se = ot(e, o, x ? `tpp` : null, w),
    ce = se === `fast` || se === `standard` ? se : void 0,
    T = {
      ...C,
      voice: n?.voice ?? f,
      language_code: C.language_code ?? u,
      voice_session_id: g,
      voice_status_request_id: _?.voice_status_request_id ?? g,
      timezone_offset_min: new Date().getTimezoneOffset(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      user_locale: Ye(),
      voice_mode: b,
      model_slug: ie,
      model_slug_advanced: _ && b === `advanced` ? ie : void 0,
      chatreq_token: typeof _?.chatreq?.token == `string` ? _.chatreq.token : void 0,
      client_tools: y,
      history_and_training_disabled: l,
      conversation_mode: ae ? { kind: `gizmo_interaction`, gizmo_id: ae } : { kind: `primary_assistant` },
      ...(k(d) && i?.length ? { system_hints: [...i] } : {}),
      jobs_mock_interview_config: n?.jobsMockInterviewConfig,
      system_prompt_type: n?.system_prompt_type,
      ...(n?.voice_landing ? { voice_landing: n.voice_landing } : {}),
      bidi_prompt_overrides: void 0,
      bidi_system_prompt_override: oe,
      structured_system_prompt_personality_override: void 0,
      chat_mode: x ? `work` : `chat`,
      backend_model: w,
      backend_thinking_effort: ee,
      backend_service_tier: x && e.get(Me, `local`) ? void 0 : ce,
      model_speaks_first: m,
      enable_message_streaming: b !== `standard`,
    };
  return (
    Ai(e, T, d, void 0, void 0),
    (T.deprecate_celsius = yi(e, {
      sessionType: d,
      voiceMode: T.voice_mode,
      chatMode: T.chat_mode,
      deprecateCelsius: p,
    })),
    T
  );
}
function Oi(e, t) {
  if (t == null) return !1;
  let n = e.get(D).data?.alphaModelSlugs;
  return n ? t.includes(`alpha`) || n.some((e) => t.includes(e)) : t.includes(`alpha`);
}
function ki(e, t) {
  let n = A.resolveVoiceOption$(e, `wingman`).modelSlug;
  n && (t.model_slug = n);
}
function Ai(e, t, n, r, i) {
  (k(n) &&
    (t.chat_mode !== `work` &&
      t.backend_model === `auto` &&
      (t.backend_model = e.get(D).data?.versionOptions?.[0]?.modelSlugByLane.auto ?? t.backend_model),
    Oi(e, t.requested_default_model) || (t.requested_default_model = ``),
    Oi(e, t.model_slug) || (t.model_slug = ``),
    Oi(e, t.model_slug_advanced) || (t.model_slug_advanced = ``)),
    k(n) && ki(e, t));
}
async function ji(e, t, r, i) {
  r?.throwIfAborted();
  let a = e.get(ue);
  if (a == null || !e.get(de))
    throw Error(`Authenticated ChatGPT settings must be available before preparing voice`);
  let o = e.get(At),
    s = i == null ? (mt(e, t) ?? Ue(e)) : i.conversationDetailsTarget.gizmoId,
    { isWorkConversation: c } = e.get(Si, { conversationId: t, composerContext: i }),
    l = Promise.all([
      e.query.getData(qe) ?? e.query.fetch(qe),
      e.query.getData(jt) ?? e.query.fetch(jt),
      e.query.getData(D) ?? e.query.fetch(D),
      c ? (e.query.getData(ht) ?? e.query.fetch(ht)) : void 0,
      s != null && Ke(s) ? (e.query.getData(me, s) ?? e.query.fetch(me, s)) : void 0,
    ]);
  if ((await (r == null ? l : n(l, r)), r?.throwIfAborted(), e.get(ue) !== a || e.get(At) !== o))
    throw new DOMException(`Voice context changed while preparing the session`, `AbortError`);
}
function Mi() {
  return (Mi = e(() => {
    (wt(), pt(), we(), se(), gt(), Ne(), Mt(), at(), Ee(), Se(), lt(), Ci(), rt(), Ei(), bi(), j());
  }))();
}
export {
  Ft as $,
  qn as A,
  P as B,
  hr as C,
  Zn as D,
  $n as E,
  En as F,
  ln as G,
  en as H,
  Pn as I,
  Zt as J,
  dn as K,
  I as L,
  Fn as M,
  In as N,
  Jn as O,
  Tn as P,
  Lt as Q,
  yn as R,
  Nr as S,
  Qn as T,
  gn as U,
  tn as V,
  un as W,
  zt as X,
  Rt as Y,
  It as Z,
  ni as _,
  Ei as a,
  Vr as b,
  Si as c,
  $ as d,
  vi as f,
  ai as g,
  ui as h,
  ji as i,
  z as j,
  Yn as k,
  yi as l,
  J as m,
  Di as n,
  Ti as o,
  _i as p,
  Qt as q,
  Mi as r,
  Ci as s,
  Ai as t,
  bi as u,
  ti as v,
  lr as w,
  jr as x,
  Hr as y,
  vn as z,
};
//# sourceMappingURL=voice-session-parameters-aab04323d949.js.map
