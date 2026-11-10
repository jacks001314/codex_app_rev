import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $At as n,
  $Nt as r,
  $z as i,
  ADt as a,
  AOt as o,
  BEt as s,
  BOt as c,
  Djt as l,
  Dpt as u,
  Dun as d,
  FOt as f,
  G$ as p,
  Hyt as m,
  IOt as h,
  Jun as g,
  K$ as _,
  LAt as v,
  Mdt as y,
  NAt as b,
  O5t as x,
  PAt as S,
  PEt as ee,
  Pdt as te,
  QAt as ne,
  Qun as C,
  RAt as re,
  VEt as ie,
  X5t as ae,
  XNt as oe,
  ZAt as se,
  _Mt as w,
  _Rt as ce,
  bun as T,
  bvt as le,
  dJt as E,
  e7t as ue,
  eB as de,
  ejt as fe,
  fJt as pe,
  fNt as me,
  hvt as he,
  n7t as ge,
  nDt as _e,
  njt as ve,
  o7t as ye,
  pAt as be,
  qln as xe,
  qun as Se,
  r0t as Ce,
  rjt as we,
  t0t as Te,
  tDt as Ee,
  vMt as D,
  vun as O,
  vvt as De,
  wpt as Oe,
  xMt as ke,
  xun as Ae,
  yMt as je,
  yRt as Me,
  yun as k,
  zEt as Ne,
  zOt as Pe,
} from "./app-shared-7552fc8d5d82.js";
import {
  BEn as Fe,
  CFn as Ie,
  EFn as Le,
  HEn as Re,
  Jxt as ze,
  LVt as Be,
  MOt as Ve,
  Mbn as He,
  NOt as Ue,
  RVt as We,
  UEn as Ge,
  VEn as Ke,
  Vxn as qe,
  Xxt as Je,
  Yxt as Ye,
  _8t as Xe,
  amn as Ze,
  f8t as Qe,
  jOn as $e,
  jyn as et,
  kxn as tt,
  m8t as nt,
  mln as rt,
  njt as it,
  nln as at,
  omn as ot,
  p8t as A,
  qxt as st,
  tjt as ct,
  v8t as lt,
  vSn as ut,
  wOn as dt,
  xyn as ft,
  y8t as pt,
  z8t as mt,
} from "./app-initial-3916b423772b.js";
import { Xi as ht, Zi as gt, ds as _t, ps as vt } from "./app-primary-7b889402e22e.js";
import { o as yt, s as bt } from "./preferences-ae4a1935cf93.js";
import { n as xt, r as St } from "./session-timings-816fa1347cdc.js";
import { a as j, r as M, t as Ct } from "./voice-configuration-manager-b26803b29f01.js";
function wt(e) {
  return e.get(ke)?.getLayer(`815598430`).get(`web_enabled`, !1) ?? !1;
}
function Tt(e) {
  return (
    e.get(ke)?.getLayer(`794043821`).get(`startup_connection_timeout_threshold_millis`, 1e4) ?? 1e4
  );
}
function Et() {
  return (Et = e(() => {
    D();
  }))();
}
var Dt;
function Ot() {
  return (Ot = e(() => {
    (x(),
      c(),
      _e(),
      _(),
      He(),
      te(),
      Ue(),
      Ne(),
      Le(),
      m(),
      r(),
      pe(),
      D(),
      Ye(),
      Ct(),
      Et(),
      (Dt = ae(E, (e, { get: t, scope: n }) => {
        let { conversationId: r, gizmoId: i } =
          typeof e == `object` && e ? e : { conversationId: e, gizmoId: void 0 };
        if (!t(je, `4029789265`)) return !1;
        let a = t(oe),
          o = a?.pathname ?? `/`,
          c = o === `/` || ee(o),
          l = ie(o),
          u = c ? t(Ie) === `work` : t($e, r) === `tpp`;
        if (s(a?.search ?? ``) || !(c || l != null) || (l != null && `gizmoId` in l.params))
          return !1;
        let d = t(y),
          f = t(h);
        if (
          f.status !== `allowed` ||
          !(`accountId` in f) ||
          (f.accountStructure !== `personal` && f.accountStructure !== `workspace`)
        )
          return !1;
        let { pending: m, subscriptionRequired: g } = t(Ve, r);
        if (m || g) return !1;
        let _ = f.accountStructure === `workspace` ? t(Ee, f.accountId) : null,
          v = _?.data?.permissions;
        if (u && c && t(p)) return !1;
        let b = Je(n, { conversationId: r, gizmoId: i });
        return (
          !_?.isPending &&
          !_?.isError &&
          (v == null || v.includes(`chatgpt.workspace.feature.voice.access`)) &&
          d.data?.voiceEnabled === !0 &&
          b == null &&
          M.sessionType$(n, b) === `wm` &&
          (!u || wt(n))
        );
      })));
  }))();
}
var kt, At, jt, Mt, Nt, N, P, Pt, Ft, It, Lt, Rt;
function zt() {
  return (zt = e(() => {
    ((kt = 8),
      (At = 3e4),
      (jt = 1e3),
      (Mt = 1),
      (Nt = (e) => e.entryType === `resource`),
      (N = (e) => {
        try {
          e();
        } catch {}
      }),
      (P = (e) => new URL(e, globalThis.location.href).href),
      (Pt = (e, t, n, r) => P(e.name) === t && e.startTime + Mt >= n && e.startTime <= r),
      (Ft = (e, t) => {
        try {
          return typeof PerformanceObserver > `u` ||
            !PerformanceObserver.supportedEntryTypes?.includes(`resource`)
            ? null
            : It(P(e), t);
        } catch {
          return null;
        }
      }),
      (It = (e, t) => {
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
              Nt(a) &&
                Pt(a, e, t, i) &&
                (n.push(a),
                n.sort((e, t) => t.startTime - e.startTime),
                (n.length = Math.min(n.length, kt)),
                (s = !0));
            s && !a && o !== void 0 && n.length >= o && f();
          };
        function f() {
          if (a) return;
          ((a = !0),
            N(() => {
              l !== void 0 && globalThis.clearTimeout(l);
            }),
            N(() => {
              u !== void 0 && globalThis.clearTimeout(u);
            }),
            N(() => globalThis.removeEventListener(`pagehide`, f)),
            N(() => globalThis.document?.removeEventListener(`freeze`, f)));
          try {
            r && d(r.takeRecords());
          } catch {}
          N(() => r?.disconnect());
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
            (l = globalThis.setTimeout(f, At)),
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
                    u = globalThis.setTimeout(f, jt);
                  } catch {
                    f();
                  }
                })),
                s);
          },
          disconnect: f,
        };
      }),
      (Lt = (e) => performance.getEntriesByName(P(e), `resource`).filter(Nt)),
      (Rt = (e, t, n, r) => {
        let i = P(t),
          a;
        for (let t of e) Pt(t, i, n, r) && (a == null || t.startTime >= a.startTime) && (a = t);
        return a;
      }));
  }))();
}
var Bt;
function Vt() {
  return (Vt = e(() => {
    (fe(),
      S(),
      ne(),
      (Bt = {
        getVoiceAccessToken() {
          return Promise.resolve(void 0);
        },
        async fetchVoiceRequest(e, t, r) {
          let i = { ...b(), ...t.headers };
          r && (i.Authorization = `Bearer ${r}`);
          let a = typeof t.body == `string` ? void 0 : await se(t.body);
          return (
            a && (i[`Content-Type`] = a.contentType),
            n(
              {
                url: e,
                method: `POST`,
                body: a?.bytes ?? (typeof t.body == `string` ? t.body : void 0),
                headers: i,
              },
              t.signal,
            )
          );
        },
      }));
  }))();
}
function Ht(e) {
  return window.location.hostname.endsWith(`chatgpt-staging.com`)
    ? `https://chatgpt-staging.com`
    : `https://chatgpt.com`;
}
function Ut() {
  return F.getRealtimeVoiceStatus;
}
function Wt() {
  let e = (0, Kt.getCookie)(`oai-ll`);
  if (typeof e == `string`)
    try {
      let t = rn.safeParse(JSON.parse(e));
      if (!t.success) return;
      let { latitude: n, longitude: r, locationAccuracy: i } = t.data;
      return `${n},${r},${i}`;
    } catch {
      return;
    }
}
async function Gt(e, t, n) {
  let r = performance.now(),
    i = Ft(t, r),
    a = e._getToken,
    o = 1;
  try {
    let e = await n(() => {
        o = 2;
      }),
      s = performance.now(),
      c = (e) => {
        try {
          let n = Rt(e ?? Lt(t), t, r, s);
          if (!n) return;
          let {
              domainLookup: i,
              connect: o,
              secureConnection: c,
              request: l,
              response: u,
              latency: d,
            } = a,
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
          (p > 0 && i.setHighResStart(p),
            f > 0 && i.setHighResEnd(f),
            h > 0 && o.setHighResStart(h),
            m > 0 && o.setHighResEnd(m),
            g > 0 && c.setHighResMark(g),
            _ > 0 && l.setHighResStart(_),
            v > 0 && u.setHighResStart(v),
            y > 0 && u.setHighResEnd(y),
            b && d.setLatency(b));
        } catch {}
      },
      l = () => {
        try {
          (i?.disconnect(),
            requestAnimationFrame(() => {
              setTimeout(c, 0);
            }));
        } catch {}
      };
    if (i)
      try {
        i.collectForCompletedOperation(s, o)
          .then(c, l)
          .catch(() => {});
      } catch {
        l();
      }
    else l();
    return e;
  } catch (e) {
    throw (i?.disconnect(), e);
  }
}
var Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, F;
function an() {
  return (an = e(() => {
    (mt(),
      (Kt = be()),
      T(),
      Ge(),
      le(),
      ce(),
      St(),
      we(),
      zt(),
      Ct(),
      Vt(),
      (qt = [
        /\[abort\]/,
        /The user aborted a request/,
        /Fetch is aborted/,
        /Request signal is aborted/,
      ]),
      (Jt = `session_limit_exceeded`),
      (Yt = `global_limits_exceeded`),
      (Xt = class extends Error {
        code;
        constructor(e, t = Jt) {
          (super(e), (this.code = t));
        }
      }),
      (Zt = (e) => e instanceof Xt),
      (Qt = (e) => Zt(e) && e.code === Yt),
      ($t = (e) => {
        if (e instanceof DOMException && e.name === `AbortError`) return !0;
        let t = e instanceof Error ? e.message : String(e);
        return qt.some((e) => e.test(t));
      }),
      (en = (e, t = 0, n) => {
        let r = new URLSearchParams();
        return (
          r.set(`dcid`, t.toString()),
          M.tcLoggingEnabled(e) && r.set(`log_call`, `1`),
          n &&
            (r.set(`instant_connect`, `1`),
            n.refresh && r.set(`refresh`, `1`),
            n.serverUfragId && r.set(`ufrag`, n.serverUfragId)),
          r.toString()
        );
      }),
      (tn = g({
        proofofwork: g({ required: Ae(), seed: C().min(1), difficulty: C().min(1) }).optional(),
      })),
      (nn = g({
        error: g({
          code: C()
            .optional()
            .catch(void 0),
          message: C()
            .optional()
            .catch(void 0),
        }),
      })),
      (rn = g({ latitude: Se(), longitude: Se(), locationAccuracy: Se() })),
      (F = class {
        static getProofToken(e) {
          let t = e?.proofofwork;
          if (!t || typeof t != `object` || !t.required) return Promise.resolve(null);
          let n = tn.safeParse(e);
          return n.success ? Ke(n.data) : Promise.resolve(null);
        }
        static async startTransceiverSession(e, t) {
          let {
            accessToken: n,
            offer: r,
            payload: i,
            dataChannelId: a,
            signal: o,
            proofOfWorkAnswer: s,
          } = t;
          o?.throwIfAborted();
          let c = M.voicePath(
              e,
              i.voice_mode,
              i.conversation_mode?.kind === `gizmo_interaction`
                ? i.conversation_mode.gizmo_id
                : void 0,
            ),
            l = Ht(e),
            u =
              t.type === `instant_connect`
                ? {
                    refresh: t.phase === `prefetch` && t.serverUfragId != null,
                    serverUfragId: t.serverUfragId,
                  }
                : void 0,
            d = `${l}${c}?${en(e, a, u)}`,
            f = async (a) => {
              if (r.sdp == null) throw Error(`Failed to create session: missing SDP offer`);
              let c = new FormData();
              (c.append(`sdp`, r.sdp), c.append(`session`, JSON.stringify(i)));
              let l = {},
                u = Wt();
              (u && (l[`OAI-Location`] = u), s && (l[Fe.proofToken] = s));
              let f = await Bt.fetchVoiceRequest(d, { body: c, headers: l, signal: o }, n, a);
              if (!f.ok) {
                let n = nn.safeParse(await f.json().catch(() => void 0)),
                  r = n.success ? n.data.error : void 0;
                if (t.type !== `instant_connect` || t.phase !== `prefetch`) {
                  let n = () => {
                    Me(e, Xe, {
                      voiceMetadata: t.voiceMetadata,
                      errorBucket: lt.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_BUCKET_CLIENT,
                      errorType:
                        pt.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_CONNECTION_ESTABLISHMENT_FAILED,
                    });
                  };
                  t.type === `instant_connect` ? t.deferUserPerceivedError(n) : n();
                }
                throw r?.code === Jt || r?.code === Yt
                  ? new Xt(r.message, r.code)
                  : Error(`Failed to create session: ${f.status} ${f.statusText}`);
              }
              return f;
            };
          return t.type === `instant_connect` && t.phase === `prefetch`
            ? f()
            : Gt(t.type === `instant_connect` ? t.timings : xt(e), d, f);
        }
        static getVoiceStatus = (e, t, n, r) =>
          he.safePost(`/conversation/voice/status`, {
            requestBody: t,
            additionalHeaders: { [Fe.proofToken]: Re() },
            signal: r,
          });
        static getRealtimeVoiceStatus = async (e, t, n, r) => {
          let i = `${Ht(e)}/realtime/status`,
            a = await Bt.fetchVoiceRequest(i, {
              body: JSON.stringify(t),
              credentials: `include`,
              headers: { ...De(), "Content-Type": `application/json`, [Fe.proofToken]: Re() },
              signal: r,
            });
          if (!a.ok) throw await ve(a, i);
          return await a.json();
        };
      }));
  }))();
}
function on(e, t, n) {
  (n === `hit` && (e.get(z, void 0).cacheMiss = void 0),
    I(t, n === `hit` ? R.treatmentInFlightClaim : R.treatmentCacheMiss));
}
function I(e, t) {
  let n = e._instantConnect.clientFlags;
  n.includes(t) || n.push(t);
}
function sn(e, t) {
  e.get(z, void 0).latestSuccessfulPrewarm = { ...t, params: structuredClone(t.params) };
}
function L(e, t, n) {
  if (!t) return;
  let r = e.get(z, void 0),
    i = r.cacheMiss;
  (i?.voiceSessionId === t && i.reason.startsWith(xn)) ||
    (r.cacheMiss = { reason: n, voiceSessionId: t });
}
function cn(e, t, n, r, i = {}) {
  let a = e.get(z, void 0).prefetchAccounting[t];
  if (!r) {
    a.set(n, { attempted: !0 });
    return;
  }
  let o = a.get(n);
  (!o?.reason || i.overwrite) && a.set(n, { attempted: o?.attempted ?? !1, reason: r });
}
function ln(e, t, n, r) {
  let i = e.get(z, void 0).prefetchAccounting[t],
    a = i.get(n);
  return (
    i.delete(n),
    a?.reason
      ? a.reason
      : r
        ? A.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_MISMATCHED
        : a?.attempted
          ? A.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_EMPTY
          : A.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_NO_WARM_SESSION_PREFETCH_NOT_STARTED
  );
}
function un(e) {
  let { prefetchAccounting: t } = e.get(z, void 0);
  (t.vp.clear(), t.wm.clear());
}
function dn(e, t, n, r) {
  let i = { accessToken: r, params: n, preciseLocationHeader: Wt(), sessionType: t },
    a = e.get(z, void 0),
    o = a.latestSuccessfulPrewarm;
  if (!o || o.accessToken !== i.accessToken || o.preciseLocationHeader !== i.preciseLocationHeader)
    return;
  try {
    if (!o.isUsable()) return;
  } catch {
    return;
  }
  let s = i.params.voice_session_id,
    c = _n(o, i);
  if (!s || c === void 0 || a.invalidationVoiceSessionId === s) return;
  ((a.invalidationVoiceSessionId = s), (a.invalidationReason = c));
  let l = yn.safeParse(`${xn}${c.slice(50)}`);
  if (l.success) return (L(e, s, l.data), mn(e, s).instantConnectCacheMissReason);
}
function fn(e, t) {
  I(e, t === `pc1` ? R.pc1Winner : R.pc2Winner);
}
function pn(e, t) {
  I(e, { timeout: R.raceTimedOut, cancelled: R.raceCancelled, candidate_failure: R.raceFailed }[t]);
}
function mn(e, t) {
  let { cacheMiss: n } = e.get(z, void 0);
  return n?.voiceSessionId === t ? { instantConnectCacheMissReason: n.reason } : {};
}
function hn(e, t) {
  let n = xt(e),
    { _instantConnect: r, tcConnect: i } = n,
    a = e.get(z, void 0),
    o = a.invalidationVoiceSessionId === t ? a.invalidationReason : void 0,
    s = r.clientFlags.includes(R.treatmentInFlightClaim);
  s &&
    r.raceStarted.isMarked() &&
    r.winner == null &&
    !r.clientFlags.includes(R.raceTimedOut) &&
    !r.clientFlags.includes(R.raceFailed) &&
    I(n, R.raceCancelled);
  let c = i.isSuccessful() && (!s || r.winner != null);
  return {
    ...(r.clientFlags.length > 0 ? { clientFlags: [...r.clientFlags] } : {}),
    ...(o === void 0 ? {} : { instantConnectInvalidationReason: o }),
    ...(c ? { instantConnectPrefetchUsed: r.winner === `pc1` } : {}),
  };
}
function gn(e, t) {
  if (t === `backend_mode`) return e.sessionType === `vp` ? e.params.voice_mode : e.sessionType;
  if (t === `gizmo_id`) {
    let t = e.params.conversation_mode;
    return t && `gizmo_id` in t ? t.gizmo_id : void 0;
  }
  return e.params[t];
}
function _n(e, t) {
  for (let [n, r, i] of Sn)
    if ((i == null || i === e.sessionType) && gn(e, n) !== gn(t, n)) return vn[`${bn}${r}`];
}
var R, z, vn, yn, bn, xn, Sn;
function Cn() {
  return (Cn = e(() => {
    (mt(),
      x(),
      T(),
      pe(),
      St(),
      an(),
      (R = {
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
      (z = ge(E, (e) => ({
        latestSuccessfulPrewarm: void 0,
        invalidationVoiceSessionId: void 0,
        invalidationReason: void 0,
        cacheMiss: void 0,
        prefetchAccounting: { vp: new Map(), wm: new Map() },
      }))),
      (vn = nt),
      (yn = d(A)),
      (bn = `CHATGPT_VOICE_INSTANT_CONNECT_INVALIDATION_REASON_`),
      (xn = `CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_INVALIDATION_`),
      (Sn = [
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
async function wn() {
  try {
    return (await navigator.permissions.query({ name: `microphone` })).state;
  } catch {
    return `unknown`;
  }
}
function Tn() {
  return (Tn = e(() => {
    O();
  }))();
}
var En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, B;
function In() {
  return (In = e(() => {
    (D(),
      O(),
      yt(),
      Tn(),
      (En = `391813552`),
      (Dn = 864e5),
      (On = !1),
      (kn = 7),
      (An = 30),
      (jn = !1),
      (Mn = 144e5),
      (Nn = { disableExposureLog: !0 }),
      (Pn = {
        cache_ttl_ms: Mn,
        enabled: !1,
        microphone_permission_eligibility_enabled: jn,
        new_user_eligibility_enabled: On,
        new_user_window_days: kn,
        recent_voice_window_days: An,
      }),
      (Fn = class {
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
          let t = e.get(bt);
          if (typeof t != `string`) return !1;
          let n = Date.parse(t);
          if (!Number.isFinite(n)) return !1;
          let r = this.getPolicyParameter(e, `recent_voice_window_days`),
            i = Number.isFinite(r) && r >= 0 ? r : An;
          return n > Date.now() - i * Dn;
        }
        isNewUserEligible(e, t) {
          if (!t || !this.getPolicyParameter(e, `new_user_eligibility_enabled`)) return !1;
          let n = this.getPolicyParameter(e, `new_user_window_days`),
            r = Number.isFinite(n) && n >= 0 ? n : kn;
          return Date.now() - t * 1e3 < r * Dn;
        }
        async isMicrophonePermissionEligible(e) {
          return this.getPolicyParameter(e, `microphone_permission_eligibility_enabled`)
            ? (await wn()) === `granted`
            : !1;
        }
        getCacheTtlMs(e) {
          let t = this.getPolicyParameter(e, `cache_ttl_ms`);
          return Number.isFinite(t) && t > 0 ? t : Mn;
        }
        getPolicyParameter(e, t, n = Nn) {
          let r = Pn[t];
          try {
            return e.get(ke)?.getLayer(En, n).get(t, r) ?? r;
          } catch (e) {
            return (
              k.debug(`[voice] Instant-connect policy unavailable`, {
                safe: { parameter: t },
                sensitive: { error: e },
              }),
              r
            );
          }
        }
      }),
      (B = new Fn()));
  }))();
}
function Ln(e) {
  return w(e, zn);
}
function Rn(e, t) {
  return Ln(e) && B.isEnabled(e, t);
}
var zn;
function Bn() {
  return (Bn = e(() => {
    (D(), In(), (zn = `994921855`));
  }))();
}
var Vn;
function Hn() {
  return (Hn = e(() => {
    Vn = () => crypto.randomUUID();
  }))();
}
function Un(e) {
  let t = JSON.stringify(e, (e, t) =>
    t && typeof t == `object` && !Array.isArray(t)
      ? Object.fromEntries(Object.entries(t).sort(([e], [t]) => (e < t ? -1 : +(e > t))))
      : t,
  );
  if (t === void 0) throw TypeError(`Value cannot be serialized as JSON`);
  return t;
}
function Wn(e, t) {
  e.set(Gn, ({ sampleHistory: e }) => ({
    latestSample: t,
    sampleHistory: t == null ? [] : [...e, { ...t, webrtcStats: void 0 }].slice(-7200),
  }));
}
var Gn;
function Kn() {
  return (Kn = e(() => {
    (x(),
      pe(),
      (Gn = ye(E, () => ({ latestSample: null, sampleHistory: [] }))),
      ue(E, ({ get: e }) => e(Gn).latestSample),
      ue(E, ({ get: e }) => e(Gn).sampleHistory));
  }))();
}
function qn(e, { localIntervalOverrideMs: t } = {}) {
  let n = e.get(de, `2048788910`);
  return { enabled: n?.get(`enabled`, 2) ?? 2, intervalMs: t ?? n?.get(`intervalMs`, 1e3) ?? 1e3 };
}
function Jn(e) {
  return w(e, `675831937`);
}
function Yn() {
  return (Yn = e(() => {
    (i(), D());
  }))();
}
function V(e) {
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function H(e) {
  let t = V(e);
  return t !== void 0 && t >= 0 ? t : void 0;
}
function U(e, t) {
  if (e === void 0) return;
  if (t === void 0) return e;
  let n = e - t;
  return n >= 0 ? n : void 0;
}
function Xn(e, t) {
  return t === void 0 ? 0 : Math.max(0, e - t);
}
function Zn(e) {
  let t = Reflect.get(e, `kind`) ?? Reflect.get(e, `mediaType`);
  return e.type === `inbound-rtp` && t === `audio`;
}
function Qn(e) {
  return Array.from(e.values()).filter(Zn);
}
function $n(e) {
  let t = Array.from(e.values()),
    n = t.find((e) => e.type === `transport`),
    r = Reflect.get(n ?? {}, `selectedCandidatePairId`);
  if (typeof r == `string`) {
    let t = e.get(r);
    if (t?.type === `candidate-pair`) return t;
  }
  return t.find((e) => e.type === `candidate-pair` && Reflect.get(e, `selected`) === !0);
}
function er(e, t) {
  if (typeof e.id == `string` && e.id.length > 0) return e.id;
  let n = H(Reflect.get(e, `ssrc`));
  return n === void 0 ? `inbound-audio-${t}` : `ssrc-${n}`;
}
function tr(e, t) {
  let n = t ? Reflect.get(t, `codecId`) : void 0;
  return nr((typeof n == `string` ? e.get(n) : void 0)?.clockRate);
}
function nr(e) {
  let t = V(e);
  return t !== void 0 && t > 0 ? t : void 0;
}
function rr() {
  return (rr = e(() => {}))();
}
function ir(e, t, n) {
  let r = (e - t) >>> 0;
  return ((r > 2147483647 ? r - 4294967296 : r) / n) * 1e3;
}
function ar() {
  return (
    typeof RTCRtpSender == `function` &&
    typeof RTCRtpReceiver == `function` &&
    typeof RTCRtpScriptTransform == `function` &&
    typeof Worker == `function` &&
    `transform` in RTCRtpSender.prototype &&
    `transform` in RTCRtpReceiver.prototype
  );
}
function or(e) {
  return {
    concealedSamples: H(e?.concealedSamples),
    concealmentEvents: H(e?.concealmentEvents),
    silentConcealedSamples: H(e?.silentConcealedSamples),
    packetsLost: H(e?.packetsLost),
  };
}
function sr(e) {
  return Object.values(e).some((e) => e !== void 0);
}
var cr, lr;
function ur() {
  return (ur = e(() => {
    ((cr = 50),
      (lr = class {
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
          (this.startRtpTimestampCapture(),
            this.startSampling({ sampleIntervalMs: e, onSample: t }));
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
          (this.statsTimer != null && window.clearInterval(this.statsTimer),
            (this.statsTimer = null));
        }
        startAudioRtpTimestampCapture() {
          if (ar()) {
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
                  (t === `outbound-audio-rtp-timestamp` &&
                    (this.latestAudioOutboundRtpTimestamp = n),
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
          if (ar()) {
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
              a = i.find(Zn),
              o = i.find((e) => e.type === `outbound-rtp` && Reflect.get(e, `kind`) === `audio`);
            (a?.codecId && t.get(a.codecId), o?.codecId && t.get(o.codecId));
            let s = tr(t, o) ?? tr(t, a);
            if (s === void 0) return;
            let c = V(a?.jitterBufferDelay),
              l = V(a?.jitterBufferEmittedCount),
              u = c !== void 0 && l !== void 0 && l > 0 ? (c / l) * 1e3 : 0,
              d = ir(n, r, s),
              f = d + u,
              p = or(a),
              m = U(p.concealedSamples, this.previousInboundAudioCounters?.concealedSamples),
              h = U(p.concealmentEvents, this.previousInboundAudioCounters?.concealmentEvents),
              g = U(
                p.silentConcealedSamples,
                this.previousInboundAudioCounters?.silentConcealedSamples,
              ),
              _ = U(p.packetsLost, this.previousInboundAudioCounters?.packetsLost);
            sr(p) && (this.previousInboundAudioCounters = p);
            let v = m === void 0 ? void 0 : (m / s) * 1e3,
              y = (v ?? 0) > 0 || (h ?? 0) > 0 || (g ?? 0) > 0,
              b = `none`;
            (v ?? 0) >= cr ? (b = `severe`) : y && (b = `gap`);
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
function dr(e, { pc: t, audioTransceiver: n }) {
  let r = Jn(e),
    i = j(M.sessionType(e)),
    a = qn(e, { localIntervalOverrideMs: null }),
    o;
  if (r) {
    let e = i && !!(a.enabled & 2),
      r = !i && !!(a.enabled & 1);
    (e || r) &&
      ((o = new lr({
        audioTransceiver: n,
        getStats: () => t.getStats(),
        defaultLatency: a.intervalMs,
        includeWebRTCStats: () => !1,
      })),
      o.startRtpTimestampCapture());
  }
  return o;
}
function fr(e, { e2eMonitor: t, getReportedVoiceMode: n, voiceSessionId: r, isMonitoring: i }) {
  if (!t) {
    Wn(e, null);
    return;
  }
  let a = qn(e, { localIntervalOverrideMs: null });
  (Wn(e, null),
    t.startSampling({
      sampleIntervalMs: a.intervalMs,
      onSample: (t) => {
        i() &&
          (Wn(e, t),
          Me(e, Qe, {
            outboundAudioRtpTimestamp: u(t.outTs),
            inboundAudioRtpTimestamp: u(t.inTs),
            audioE2eLatencyMs: t.audioE2eLatencyMs,
            rtpDeltaMs: t.rtpDeltaMs,
            jitterBufferDelayMs: t.jitterBufferDelayMs,
            voiceSessionId: r,
            voiceMode: n(),
          }),
          k.debug(`[transceiver] E2E latency sample`, { safe: {}, sensitive: { sample: t } }));
      },
    }));
}
function pr() {
  return (pr = e(() => {
    (Oe(), mt(), ce(), O(), Kn(), Yn(), ur(), Ct());
  }))();
}
function mr(e, t, n) {
  if (n === void 0) return e;
  let r = U(t, n);
  return r === void 0 ? e : (e ?? 0) + r;
}
var hr, gr, _r, W, vr, yr, br;
function xr() {
  return (xr = e(() => {
    ((hr = 48e3),
      (gr = 100),
      (_r = 0.01),
      (W = 1e3),
      (vr = 3e4),
      (yr = class {
        audioGapWindowTracker = new br();
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
          let n = typeof e.values == `function` ? $n(e) : void 0,
            r = H(t.timestamp) ?? Date.now();
          (this.networkTelemetrySamples.push({
            timestampMs: r,
            packetsLost: V(t.packetsLost),
            packetsReceived: H(t.packetsReceived),
            candidatePairId: n?.id,
            stunRequestsSent: H(n?.requestsSent),
            stunResponsesReceived: H(n?.responsesReceived),
          }),
            (this.networkTelemetrySamples = this.networkTelemetrySamples.filter(
              (e) => r - e.timestampMs <= vr,
            )));
        }
        getEndSessionNetworkTelemetry(e) {
          let t = e - vr,
            n = this.networkTelemetrySamples.filter(
              (n) => n.timestampMs >= t && n.timestampMs <= e,
            ),
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
              (s = mr(s, r.packetsReceived, t.packetsReceived)),
              t.candidatePairId !== void 0 &&
                t.candidatePairId === r.candidatePairId &&
                ((c = mr(c, r.stunRequestsSent, t.stunRequestsSent)),
                (l = mr(l, r.stunResponsesReceived, t.stunResponsesReceived))));
          }
          let u = o !== void 0 && s !== void 0 ? o + s : void 0;
          return {
            aggregateTelemetryDurationSeconds: a / W,
            packetsLostCount: o,
            packetsReceivedCount: s,
            packetLossRatio:
              o !== void 0 && u !== void 0 && u > 0 ? Math.min(1, Math.max(0, o / u)) : void 0,
            stunRequestsSentCount: c,
            stunResponsesReceivedCount: l,
          };
        }
        accumulateSummary(e, t) {
          if (!e.hasCurrentStats) return;
          let n = e.silentDeltaMs ?? 0,
            r = e.nonSilentDeltaMs ?? 0,
            i = this.summary ?? {
              thresholdMs: gr,
              silentTotalMs: 0,
              silentCount: 0,
              nonSilentTotalMs: 0,
              nonSilentCount: 0,
              activeOutputAudioRmsThresholdRatio: _r,
              webrtcStatsPollingIntervalMs: t,
            };
          this.summary = {
            ...i,
            silentTotalMs: i.silentTotalMs + n,
            silentCount: i.silentCount + +(n >= gr),
            nonSilentTotalMs: i.nonSilentTotalMs + r,
            nonSilentCount: i.nonSilentCount + +(r >= gr),
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
      (br = class {
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
              let l = er(t, c),
                u = this.previousByStream.get(l),
                d = { ...u },
                f = H(t.concealedSamples);
              if (f !== void 0) {
                let n = H(t.silentConcealedSamples) ?? 0,
                  o = Xn(f, u?.concealedSamples),
                  s = Math.min(Xn(n, u?.silentConcealedSamples), o),
                  c = Math.max(0, o - s),
                  l = tr(e, t) ?? hr;
                ((d.concealedSamples = f),
                  (d.silentConcealedSamples = n),
                  u?.concealedSamples !== void 0 &&
                    ((i = (i ?? 0) + (s / l) * W), (a = (a ?? 0) + (c / l) * W)),
                  (r = !0));
              }
              let p = H(t.totalSamplesDuration);
              if (p !== void 0) {
                let e = Xn(p, u?.totalSamplesDuration),
                  n = e * W,
                  i = H(t.totalAudioEnergy);
                if (((d.totalSamplesDuration = p), (o = (o ?? 0) + n), i === void 0))
                  delete d.totalAudioEnergy;
                else {
                  let t = u?.totalAudioEnergy;
                  if (((d.totalAudioEnergy = i), t !== void 0 && e > 0)) {
                    let r = Math.max(0, i - t),
                      a = Math.sqrt(r / e) >= _r ? n : 0;
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
var Sr;
function Cr() {
  return (Cr = e(() => {
    (xr(),
      (Sr = class {
        previousInboundAudioStats;
        audioGapWindowTracker = new br();
        sample(e) {
          let t = Qn(e),
            n = t[0];
          if (!n) return;
          let r = this.audioGapWindowTracker.observe(e, t),
            i = {
              jitterBufferDelay: H(n.jitterBufferDelay),
              jitterBufferEmittedCount: H(n.jitterBufferEmittedCount),
              packetsReceived: H(n.packetsReceived),
            },
            a = this.previousInboundAudioStats;
          this.previousInboundAudioStats = i;
          let o = a === void 0 ? void 0 : U(i.jitterBufferDelay, a.jitterBufferDelay),
            s = a === void 0 ? void 0 : U(i.jitterBufferEmittedCount, a.jitterBufferEmittedCount),
            c = o !== void 0 && s !== void 0 && s > 0 ? (o / s) * 1e3 : null,
            l =
              a !== void 0 && i.packetsReceived !== void 0 && a.packetsReceived !== void 0
                ? (U(i.packetsReceived, a.packetsReceived) ?? 0)
                : 0,
            u = H($n(e)?.currentRoundTripTime);
          return {
            receivedPacketsDelta: l,
            outputAudioBufferDepthMs: c,
            serviceRttMs: u === void 0 ? null : u * 1e3,
            outputAudioBytesReceived: H(n.bytesReceived) ?? null,
            outputAudioPacketsReceived: H(n.packetsReceived) ?? null,
            outputAudioPacketsLost: V(n.packetsLost) ?? null,
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
function wr(e) {
  return (
    (e?.getSynchronizationSources?.() ?? []).find((e) => Number.isFinite(e.rtpTimestamp))
      ?.rtpTimestamp ?? null
  );
}
var Tr;
function Er() {
  return (Er = e(() => {
    (Cr(),
      (Tr = class {
        getStats;
        receiver;
        timerId = null;
        sampling = !1;
        run = null;
        sampler = new Sr();
        constructor(e) {
          ((this.getStats = e.getStats), (this.receiver = e.receiver ?? null));
        }
        start({ sampleIntervalMs: e = 500, onSample: t }) {
          this.stop();
          let n = Symbol();
          ((this.run = n),
            (this.timerId = window.setInterval(() => void this.sampleOnce(n, t), e)));
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
                outputAudioFirstChunkReceivedTs:
                  r.receivedPacketsDelta > 0 ? Date.now() / 1e3 : null,
                outputAudioPlayoutStartTs: null,
                outputAudioBufferDepthMs: r.outputAudioBufferDepthMs,
                serviceRttMs: r.serviceRttMs,
                outputAudioBytesReceived: r.outputAudioBytesReceived,
                outputAudioPacketsReceived: r.outputAudioPacketsReceived,
                outputAudioPacketsLost: r.outputAudioPacketsLost,
                outputAudioSilentGapMs: r.outputAudioSilentGapMs,
                outputAudioNonSilentGapMs: r.outputAudioNonSilentGapMs,
                outputAudioReceivedRtpts: wr(this.receiver),
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
var G, Dr, Or, kr;
function Ar() {
  return (Ar = e(() => {
    (pr(),
      Er(),
      (G = { end: () => {}, start: () => {}, time: (e) => e(), timeAsync: (e) => e() }),
      (Dr = {
        _peerConnection: { preConnectionSetup: G },
        _preConnect: {
          blankTransceiver: G,
          createOffer: G,
          dataChannel: G,
          eventHandlers: G,
          getPeerConnection: G,
          setLocalDescription: G,
        },
        _parameterResolution: { voiceCommit: G, backendReasoningEffort: G, workModelSlug: G },
      }),
      (Or = class {
        async preConnectionSetup(
          e,
          {
            applyEventHandlers: t,
            existingConnection: n,
            getPeerConnection: r,
            onDataChannelCreated: i,
            onPeerConnectionCreated: a,
            onTransceiverCreated: o,
            timings: s = Dr,
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
                  return {
                    connectionState: e.connectionState,
                    iceConnectionState: e.iceConnectionState,
                  };
                },
                pc: u,
              }),
            ),
            { audioTransceiver: p, videoTransceiver: m } = l.blankTransceiver.time(() => ({
              audioTransceiver: n?.audioTransceiver ?? u.addTransceiver(`audio`),
              videoTransceiver:
                n?.videoTransceiver ?? u.addTransceiver(`video`, { direction: `sendonly` }),
            })),
            h = () => {
              (a?.(u), i?.(d), o?.(`audio`, p), o?.(`video`, m));
            };
          if ((f ? f(h) : h(), n))
            return (
              await l.createOffer.timeAsync(
                async () => (
                  await l.setLocalDescription.timeAsync(() => Promise.resolve()),
                  n.offer
                ),
              ),
              c.preConnectionSetup.end(),
              n
            );
          let g = new Tr({ getStats: () => u.getStats(), receiver: p.receiver }),
            _ = dr(e, { pc: u, audioTransceiver: p }),
            v = {
              phase: `idle`,
              start: ({ onClientMetricsSample: t, getReportedVoiceMode: n, voiceSessionId: r }) => {
                v.phase === `idle` &&
                  ((v.phase = `started`),
                  t && g.start({ onSample: t }),
                  fr(e, {
                    e2eMonitor: _,
                    getReportedVoiceMode: n,
                    voiceSessionId: r,
                    isMonitoring: () => v.phase === `started`,
                  }));
              },
              stop: () => {
                v.phase !== `stopped` &&
                  ((v.phase = `stopped`),
                  d.removeEventListener(`close`, v.stop),
                  g.destroy(),
                  _?.destroy());
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
      (kr = new Or()));
  }))();
}
function jr() {
  return new Promise((e, t) => {
    let n = indexedDB.open(Rr, zr);
    ((n.onupgradeneeded = () => {
      let e = n.result;
      e.objectStoreNames.contains(K) || e.createObjectStore(K);
    }),
      (n.onsuccess = () => e(n.result)),
      (n.onerror = () => t(n.error ?? Error(`Certificate storage request failed`))));
  });
}
function Mr(e, t) {
  return new Promise((n, r) => {
    let i = e.transaction(K, `readonly`).objectStore(K).get(t);
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
function Nr(e, t, n) {
  return new Promise((r, i) => {
    let a = e.transaction(K, `readwrite`).objectStore(K).put(n, t);
    ((a.onsuccess = () => r()),
      (a.onerror = () => i(a.error ?? Error(`Certificate storage request failed`))));
  });
}
function Pr(e) {
  let t = Date.now();
  return e.expires <= t;
}
async function Fr() {
  try {
    `storage` in navigator && `persist` in navigator.storage && (await navigator.storage.persist());
  } catch (e) {
    k.debug(`[voice] Certificate persistence unavailable`, { safe: {}, sensitive: { error: e } });
  }
}
async function Ir(e) {
  return await RTCPeerConnection.generateCertificate(e);
}
async function Lr(e = {}) {
  let { generationParams: t = Vr, disablePersistence: n = !1 } = e;
  if (!n && `indexedDB` in window)
    try {
      await Fr();
      let e = await jr(),
        n;
      try {
        let r = await Mr(e, Br);
        if (r && !Pr(r)) return r;
        let i = await Ir(t);
        return (
          (n = Nr(e, Br, i).catch((e) => {
            k.debug(`[voice] Certificate persistence unavailable`, {
              safe: {},
              sensitive: { error: e },
            });
          })),
          i
        );
      } finally {
        n ? n.then(() => e.close()) : e.close();
      }
    } catch (e) {
      k.debug(`[voice] Certificate cache unavailable`, { safe: {}, sensitive: { error: e } });
    }
  return Ir(t);
}
var Rr, zr, K, Br, Vr;
function Hr() {
  return (Hr = e(() => {
    (O(),
      (Rr = `webrtc-cert-db`),
      (zr = 1),
      (K = `certs`),
      (Br = `ecdsa-p256:v1`),
      (Vr = { name: `ECDSA`, namedCurve: `P-256`, expires: 31536e6 }));
  }))();
}
function Ur() {
  if (typeof document > `u`) return;
  let e = document.head.querySelectorAll(`meta[http-equiv="origin-trial"]`);
  for (let t of e) if (t.content === qr) return;
  let t = document.createElement(`meta`);
  ((t.httpEquiv = `origin-trial`), (t.content = qr), document.head.append(t));
}
function Wr(e) {
  return !(
    !e ||
    e.signalingState === `closed` ||
    e.connectionState !== `new` ||
    e.iceConnectionState !== `new`
  );
}
function Gr() {
  if (((Jr = !0), X)) return X;
  let e = Y;
  if (!Xr) {
    let t = new Promise((e) => setTimeout(e, 0))
      .then(() => {
        if (e === Y) return Lr({ generationParams: { name: `ECDSA`, namedCurve: `P-256` } });
      })
      .then((t) => {
        e === Y && (J = t);
      })
      .catch((e) => {
        k.debug(`[voice] Certificate prewarm unavailable`, { safe: {}, sensitive: { error: e } });
      })
      .finally(() => {
        Xr === t && (Xr = void 0);
      });
    Xr = t;
  }
  return Kr();
}
function Kr() {
  if (X) return X;
  let e = Y,
    t = new Promise((e) => setTimeout(e, 0))
      .then(() => {
        e !== Y || Wr(q) || (q?.close(), (q = Yr.createPeerConnection(`cache`)));
      })
      .finally(() => {
        X === t && (X = void 0);
      });
  return ((X = t), t);
}
var qr, q, J, Jr, Yr, Y, Xr, X;
function Zr() {
  return (Zr = e(() => {
    (O(),
      Hr(),
      (qr = `AnY33Lstn7fSTXvj63Z4glPcRXtUukuM9rLN87JGOugFyfum9ckNUU3NYHeRLcp6TELT5wbCZih5SlHfumMbJAkAAABmeyJvcmlnaW4iOiJodHRwczovL2NoYXRncHQuY29tOjQ0MyIsImZlYXR1cmUiOiJXZWJSdGNTY3RwU25hcCIsImV4cGlyeSI6MTc5NDg3MzYwMCwiaXNTdWJkb21haW4iOnRydWV9`),
      (q = void 0),
      (J = void 0),
      (Jr = !1),
      (Yr = {
        createPeerConnection: (e) => (
          Ur(),
          J && Pr(J) && (J = void 0),
          J === void 0
            ? new RTCPeerConnection({ bundlePolicy: `max-bundle` })
            : new RTCPeerConnection({ bundlePolicy: `max-bundle`, certificates: [J] })
        ),
        getFreshPeerConnection: (e) => {
          try {
            return q && Wr(q) ? q : (q?.close(), Yr.createPeerConnection(e));
          } finally {
            (Jr &&
              Kr().catch((e) => {
                k.debug(`[voice] Peer connection prewarm unavailable`, {
                  safe: {},
                  sensitive: { error: e },
                });
              }),
              (q = void 0));
          }
        },
        resetAll: () => {
          (Y++, (Jr = !1), q?.close(), (Xr = void 0), (X = void 0), (q = void 0), (J = void 0));
        },
      }),
      (Y = 0));
  }))();
}
function Z(e) {
  return e instanceof Error ? e : Error(String(e));
}
function Qr(e) {
  let t = new Set();
  for (let n of e.split(/\r?\n/))
    if (n.startsWith(`a=ice-ufrag:`)) {
      let e = n.slice(12).trim();
      e && t.add(e);
    }
  if (t.size !== 1)
    throw Error(`Expected one server ICE ufrag in Instant Connect answer, found ${t.size}`);
  return [...t][0];
}
function $r(e) {
  return e.status === 201;
}
function ei(e) {
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
function ti(e, t, n, r, i) {
  let a = [],
    o = [],
    s = new AbortController(),
    { promise: c, reject: l, resolve: u } = Ce(),
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
        p !== `detached` &&
          ((p = `detached`), (a.length = 0), s.abort(), o.forEach((e) => e(!1)), l(e));
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
function $(e, t, n) {
  return Un({
    accessToken: n,
    preciseLocationHeader: Wt(),
    ...Object.fromEntries(ni[e].map((e) => [e, t[e]])),
  });
}
var ni, ri, ii;
function ai() {
  return (ai = e(() => {
    (mt(),
      O(),
      St(),
      Cn(),
      Hn(),
      an(),
      Ar(),
      In(),
      Zr(),
      Et(),
      (ni = {
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
          `structured_system_prompt_personality_override`,
          `chat_mode`,
          `backend_model`,
          `backend_thinking_effort`,
          `backend_service_tier`,
          `client_tools`,
        ],
      }),
      (ri = class {
        caches = { vp: new Map(), wm: new Map() };
        cacheCreations = { vp: new Map(), wm: new Map() };
        candidateEventBuffers = new WeakMap();
        bufferApplyEventHandlers(e, t, n) {
          let r = xt(e);
          return (e) => {
            let i = ti(r, t ? `pc1` : `pc2`, e.dataChannel, e.pc, n);
            return (this.candidateEventBuffers.set(e.pc, i), i.applyEventHandlers(e));
          };
        }
        async createCache(e, t, n, r = {}) {
          let i = $(t, n, r.accessToken);
          if ((this.pruneUnusableCacheEntries(e, t), this.getUsableCacheEntry(e, t, i)))
            return { type: `success` };
          let a = this.cacheCreations[t].get(i);
          if (a) {
            if (!a.signal.aborted) return { type: `alreadyInProgress` };
            this.cacheCreations[t].delete(i);
          }
          cn(e, t, i);
          let o = Array.from(this.caches[t].entries()).at(-1),
            s = o?.[0],
            c = o?.[1],
            l = new AbortController();
          if ((this.cacheCreations[t].set(i, l), r.signal && !c)) {
            let e = () => l.abort(r.signal?.reason);
            (r.signal.addEventListener(`abort`, e, { once: !0, signal: l.signal }),
              r.signal.aborted && e());
          }
          let u = c?.pc,
            d = c;
          try {
            (l.signal.throwIfAborted(), (u ??= Yr.getFreshPeerConnection(`cache`)));
            let a = u;
            d ??= await kr.preConnectionSetup(e, { getPeerConnection: () => a });
            let o = structuredClone(n);
            (delete o.parent_message_id,
              (o.voice_session_id = c?.voiceSessionParams.voice_session_id ?? Vn()),
              (o.voice_status_request_id = o.voice_session_id),
              s && this.caches[t].delete(s));
            let f = await F.startTransceiverSession(e, {
              accessToken: r.accessToken,
              dataChannelId: 0,
              offer: d.offer,
              payload: o,
              phase: `prefetch`,
              proofOfWorkAnswer: r.proofOfWorkAnswer ?? null,
              serverUfragId: c?.serverUfragId,
              signal: l.signal,
              type: `instant_connect`,
            });
            if (!$r(f))
              throw Error(
                `Expected Instant Connect prefetch to create server state, received status ${f.status}`,
              );
            let p = await f.text();
            l.signal.throwIfAborted();
            let m = {
              ...d,
              answerSdp: p,
              candidateId: `pc1`,
              createdAt: Date.now(),
              serverUfragId: Qr(p),
              voiceSessionParams: o,
            };
            if (this.cacheCreations[t].get(i) !== l)
              throw Error(`Instant Connect cache creation was invalidated`);
            return (this.caches[t].set(i, m), { type: `success` });
          } catch (n) {
            return (
              l.signal.aborted ||
                cn(
                  e,
                  t,
                  i,
                  A.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_PREFETCH_FAILED,
                  {
                    overwrite: !0,
                  },
                ),
              d ? Q(d) : u?.close(),
              { type: `failed`, err: Z(n) }
            );
          } finally {
            this.cacheCreations[t].get(i) === l && this.cacheCreations[t].delete(i);
          }
        }
        invalidateCache(e, t, n) {
          let r = $(e, t, n),
            i = this.cacheCreations[e].get(r),
            a = this.caches[e].get(r);
          return (
            i?.abort(`Instant Connect cache invalidated`),
            this.cacheCreations[e].delete(r),
            this.removeCacheEntry(e, r),
            i !== void 0 || a !== void 0
          );
        }
        getCachedVoiceSessionId(e, t, n, r) {
          let i = $(t, n, r),
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
          un(e);
        }
        raceCache(e, t, n, r) {
          let i = xt(e);
          if (n.voice_mode === `standard`)
            return (
              dn(e, t, n, r.accessToken) ||
                L(
                  e,
                  n.voice_session_id,
                  A.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_NO_WARM_SESSION_UNSUPPORTED_BACKEND_MODE,
                ),
              this.activateFreshCandidateEventHandlers(r.freshConnectionBundle),
              { type: `cacheMiss` }
            );
          let a = $(t, n, r.accessToken),
            o = this.getUsableCacheEntry(e, t, a);
          if (!o) {
            let o = this.cacheCreations[t].get(a);
            if ((!o || o.signal.aborted) && !dn(e, t, n, r.accessToken)) {
              let i = ln(
                e,
                t,
                a,
                Array.from(this.caches[t].entries()).some(
                  ([e, n]) => e === $(t, n.voiceSessionParams, r.accessToken),
                ),
              );
              L(e, n.voice_session_id, i);
            }
            return (
              on(e, i, `miss`),
              this.activateFreshCandidateEventHandlers(r.freshConnectionBundle),
              { type: `cacheMiss` }
            );
          }
          (this.caches[t].delete(a), on(e, i, `hit`));
          let s;
          try {
            s = r.preConnectionSetup(o);
          } catch (e) {
            throw (I(i, R.preparedActivationFailed), Q(o), e);
          }
          let c = this.candidateEventBuffers.get(o.pc);
          if ((this.candidateEventBuffers.delete(o.pc), !c))
            throw (
              I(i, R.preparedActivationFailed),
              Q(o),
              s.catch(() => {}),
              Error(`Instant Connect cached candidate was not prepared`)
            );
          let l = Ce(),
            u = (e) =>
              l.promise.then((t) => {
                if (e.pc.signalingState !== `closed`)
                  return e.audioTransceiver.sender.replaceTrack(t);
              }),
            d = new AbortController(),
            f = AbortSignal.timeout(Tt(e)),
            p = r.signal ? AbortSignal.any([f, r.signal]) : f,
            m = [],
            h = i._instantConnect;
          ((h.cacheAgeMs = Date.now() - o.createdAt),
            (h.voiceSessionId = o.voiceSessionParams.voice_session_id),
            (h.serverId = o.serverUfragId),
            (h.sessionType = t),
            h.raceStarted.mark());
          let g,
            _,
            v = Promise.any([
              this.startCached(
                i,
                o,
                c,
                m,
                p,
                () => u(o),
                async () => {
                  try {
                    (await s,
                      I(i, R.preparedApplied),
                      await o.pc.setRemoteDescription({ sdp: o.answerSdp, type: `answer` }));
                  } catch (e) {
                    throw (_ == null && !p.aborted && I(i, R.preparedActivationFailed), e);
                  }
                  return o;
                },
              ),
              this.startFresh(e, i, o, r.freshConnectionBundle, m, r, p, d, u, (e) => {
                g = e;
              }),
            ])
              .then((t) => {
                let r = t.candidate;
                ((_ = r.candidateId),
                  d.abort(`Instant Connect winner selected`),
                  m
                    .filter(({ eventBuffer: e }) => e !== t.eventBuffer)
                    .forEach(({ candidate: e, eventBuffer: t }) => {
                      (t.detach(Error(`Instant Connect candidate lost the race`)), Q(e));
                    }));
                try {
                  t.eventBuffer.activate();
                } catch (e) {
                  throw (
                    r.candidateId === `pc1` && I(i, R.preparedActivationFailed),
                    t.eventBuffer.detach(Z(e)),
                    Q(r),
                    e
                  );
                }
                return (
                  (h.winner = r.candidateId),
                  h.winnerSelected.mark(),
                  r.candidateId === `pc2` &&
                    L(
                      e,
                      n.voice_session_id,
                      A.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_MISS,
                    ),
                  fn(i, r.candidateId),
                  r
                );
              })
              .catch((e) => {
                p.aborted
                  ? pn(i, p.reason === f.reason ? `timeout` : `cancelled`)
                  : pn(i, `candidate_failure`);
                let t = p.aborted
                  ? Z(p.reason)
                  : Error(`Instant Connect race failed`, { cause: e });
                d.abort(`Instant Connect race failed`);
                for (let { candidate: e, eventBuffer: n } of m) (n.detach(t), Q(e));
                throw (_ == null && !r.signal?.aborted && g?.(), t);
              });
          return (
            v.catch(() => {}), { futureWinner: v, setAudioTrack: l.resolve, type: `raceStarted` }
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
                k.debug(`[instant-connect] Failed to attach the microphone track`, {
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
                r = await F.startTransceiverSession(e, {
                  accessToken: a.accessToken,
                  dataChannelId: 0,
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
                throw (u.aborted || I(t, R.validationFailed), e);
              }
              if (((t._instantConnect.pc2ResponseStatus = r.status), ei(r)))
                throw (
                  I(t, R.validationConfirmed),
                  Error(`Instant Connect server match found; PC2 is not needed`)
                );
              if (!$r(r))
                throw (
                  I(t, R.validationFailed),
                  Error(
                    `Expected an Instant Connect server match result, received status ${r.status}`,
                  )
                );
              try {
                let e = await r.text();
                (await f.pc.setRemoteDescription({ sdp: e, type: `answer` }), u.throwIfAborted());
              } catch (e) {
                throw (u.aborted || I(t, R.validationFailed), e);
              }
              return (I(t, R.replacementCreated), f);
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
            Date.now() - t.createdAt <= B.getCacheTtlMs(e) &&
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
            (cn(
              e,
              t,
              n,
              Date.now() - r.createdAt > B.getCacheTtlMs(e)
                ? A.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_EXPIRED
                : A.CHATGPT_VOICE_INSTANT_CONNECT_CACHE_MISS_REASON_TRANSPORT_CACHE_UNAVAILABLE,
              { overwrite: !0 },
            ),
              this.removeCacheEntry(t, n));
            return;
          }
          return r;
        }
        pruneUnusableCacheEntries(e, t) {
          for (let [n, r] of this.caches[t])
            this.isCacheEntryUsable(e, r) || this.removeCacheEntry(t, n);
        }
        removeCacheEntry(e, t) {
          let n = this.caches[e].get(t);
          (this.caches[e].delete(t), Q(n));
        }
      }),
      (ii = new ri()));
  }))();
}
function oi(
  e,
  { sessionType: t, voiceMode: n, chatMode: r, deprecateCelsius: i, disableExposureLog: a = !0 },
) {
  return t !== `wm` || n !== `wingman` || r === `work`
    ? !1
    : (i ??
        e.get(ke)?.getLayer(`227870931`, { disableExposureLog: a }).get(`deprecate_celsius`, !1) ??
        !1);
}
function si() {
  return (si = e(() => {
    D();
  }))();
}
var ci, li;
function ui() {
  return (ui = e(() => {
    ((ci = t(xe(), 1)),
      x(),
      gt(),
      rt(),
      et(),
      He(),
      pe(),
      (li = ae(
        E,
        ({ conversationId: e, composerContext: t }, { get: n }) => {
          let r = t == null ? n($e, e) : t.conversationOrigin,
            i = t == null ? n(at, e) : n(ht, t).selectedModel,
            a = r === `tpp`,
            o = n(a ? ut : ft).data,
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
        { isEqual: ci.default },
      )));
  }))();
}
function di(e) {
  return w(e, `3012464398`) && !w(e, `3387372448`);
}
function fi(e, t) {
  let n = e.get(h),
    r =
      n.status === `allowed` &&
      `plan` in n &&
      n.plan !== l.FREE &&
      n.plan !== l.FREE_WORKSPACE &&
      n.plan !== l.GO;
  return di(e) && e.get($e, t) !== `tpp` && (r || !1);
}
function pi() {
  return (pi = e(() => {
    (c(), He(), D(), a());
  }))();
}
function mi(e, { ambientParameters: t, explicitParameters: n, liveParameters: r, systemHints: i }) {
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
      workModelSlug: y,
    } = r,
    b = [],
    x = h ?? M.requestedVoiceMode(e, M.isStandardVoiceSelected$(e) ? `standard` : `advanced`),
    {
      isWorkConversation: S,
      selectedModel: ee,
      thinkingEffort: te,
    } = e.get(li, { conversationId: o, composerContext: s }),
    ne = n ? n.requested_default_model : ee.slug,
    C = x === `advanced` && !j(d) && !(n && `thinking_effort` in n) ? te : n?.thinking_effort,
    re = j(d) && !S && fi(e, o),
    ie = {
      backend_reasoning_effort:
        j(d) && !re ? (n?.backend_reasoning_effort ?? a ?? `instant`) : void 0,
      conversation_id: n ? n.conversation_id : (e.get(dt, o) ?? void 0),
      entrypoint_id: n?.entrypoint_id,
      language_code: n?.language_code,
      parent_message_id: n?.parent_message_id,
      requested_default_model: ne,
      thinking_effort: C,
    },
    ae = ne ?? `gpt-4o`,
    oe = n?.gizmo_id ?? c,
    se = S && y ? y : ee.slug,
    w = ct(e, o, S ? `tpp` : null, se),
    ce = w === `fast` || w === `standard` ? w : void 0,
    T = {
      ...ie,
      voice: n?.voice ?? f,
      language_code: ie.language_code ?? u,
      voice_session_id: g,
      voice_status_request_id: _?.voice_status_request_id ?? g,
      timezone_offset_min: new Date().getTimezoneOffset(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      user_locale: v(),
      voice_mode: x,
      model_slug: ae,
      model_slug_advanced: _ && x === `advanced` ? ae : void 0,
      chatreq_token: typeof _?.chatreq?.token == `string` ? _.chatreq.token : void 0,
      client_tools: b,
      history_and_training_disabled: l,
      conversation_mode: oe
        ? { kind: `gizmo_interaction`, gizmo_id: oe }
        : { kind: `primary_assistant` },
      ...(j(d) && i?.length ? { system_hints: [...i] } : {}),
      jobs_mock_interview_config: n?.jobsMockInterviewConfig,
      system_prompt_type: n?.system_prompt_type,
      ...(n?.voice_landing ? { voice_landing: n.voice_landing } : {}),
      bidi_prompt_overrides: void 0,
      structured_system_prompt_personality_override: void 0,
      chat_mode: S ? `work` : `chat`,
      backend_model: se,
      backend_thinking_effort: te,
      backend_service_tier: S && e.get(We, `local`) ? void 0 : ce,
      model_speaks_first: m,
      enable_message_streaming: x !== `standard`,
    };
  return (
    _i(e, T, d, void 0, void 0),
    (T.deprecate_celsius = oi(e, {
      sessionType: d,
      voiceMode: T.voice_mode,
      chatMode: T.chat_mode,
      deprecateCelsius: p,
    })),
    T
  );
}
function hi(e, t) {
  if (t == null) return !1;
  let n = e.get(ft).data?.alphaModelSlugs;
  return n ? t.includes(`alpha`) || n.some((e) => t.includes(e)) : t.includes(`alpha`);
}
function gi(e, t) {
  let n = M.resolveVoiceOption$(e, `wingman`).modelSlug;
  n && (t.model_slug = n);
}
function _i(e, t, n, r, i) {
  (j(n) &&
    (t.chat_mode !== `work` &&
      t.backend_model === `auto` &&
      (t.backend_model =
        e.get(ft).data?.versionOptions?.[0]?.modelSlugByLane.auto ?? t.backend_model),
    hi(e, t.requested_default_model) || (t.requested_default_model = ``),
    hi(e, t.model_slug) || (t.model_slug = ``),
    hi(e, t.model_slug_advanced) || (t.model_slug_advanced = ``)),
    j(n) && gi(e, t));
}
async function vi(e, t, n, r) {
  n?.throwIfAborted();
  let i = e.get(f);
  if (i == null || !e.get(Pe))
    throw Error(`Authenticated ChatGPT settings must be available before preparing voice`);
  let a = e.get(o),
    s = r == null ? (st(e, t) ?? ze(e)) : r.conversationDetailsTarget.gizmoId,
    { isWorkConversation: c } = e.get(li, { conversationId: t, composerContext: r }),
    l = Promise.all([
      e.query.getData(y) ?? e.query.fetch(y),
      e.query.getData(_t) ?? e.query.fetch(_t),
      e.query.getData(ft) ?? e.query.fetch(ft),
      c ? (e.query.getData(ut) ?? e.query.fetch(ut)) : void 0,
      s != null && qe(s) ? (e.query.getData(Ze, s) ?? e.query.fetch(Ze, s)) : void 0,
    ]);
  if ((await (n == null ? l : Te(l, n)), n?.throwIfAborted(), e.get(f) !== i || e.get(o) !== a))
    throw new DOMException(`Voice context changed while preparing the session`, `AbortError`);
}
function yi() {
  return (yi = e(() => {
    (c(), et(), ot(), tt(), it(), He(), vt(), te(), Be(), me(), re(), ui(), Ye(), pi(), si(), Ct());
  }))();
}
export {
  wn as A,
  Ut as B,
  Vn as C,
  Rn as D,
  Ln as E,
  L as F,
  Vt as G,
  Qt as H,
  cn as I,
  Ot as J,
  Bt as K,
  sn as L,
  mn as M,
  hn as N,
  In as O,
  Cn as P,
  F as R,
  Zn as S,
  Bn as T,
  Zt as U,
  an as V,
  $t as W,
  Et as X,
  Tt as Y,
  wt as Z,
  Ar as _,
  pi as a,
  xr as b,
  li as c,
  $ as d,
  ai as f,
  Gr as g,
  Zr as h,
  vi as i,
  Tn as j,
  B as k,
  oi as l,
  Yr as m,
  mi as n,
  fi as o,
  ii as p,
  Dt as q,
  yi as r,
  ui as s,
  _i as t,
  si as u,
  kr as v,
  Hn as w,
  rr as x,
  yr as y,
  Wt as z,
};
//# sourceMappingURL=voice-session-parameters-cf768358eef6.js.map
