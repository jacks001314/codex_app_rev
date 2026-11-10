const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./entry-18a4a0f9f202.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-7552fc8d5d82.js",
      "./app-shared-342447930c78.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BOt as t,
  Cjt as n,
  Dpt as r,
  Ejt as i,
  Ept as a,
  Fun as o,
  Jun as s,
  LOt as c,
  M7t as l,
  Mun as u,
  O5t as d,
  Qun as f,
  RJt as p,
  Run as m,
  SRt as h,
  Sjt as g,
  Tpt as _,
  Uun as v,
  _Mt as ee,
  _Rt as y,
  bun as b,
  bvt as x,
  c_t as te,
  cun as S,
  dJt as C,
  edn as w,
  fJt as T,
  fpt as ne,
  hpt as re,
  hvt as E,
  i7t as ie,
  lun as D,
  mpt as ae,
  n7t as O,
  o7t as oe,
  oun as se,
  r0t as ce,
  rjt as k,
  sun as le,
  tjt as A,
  u_t as j,
  vMt as ue,
  vun as M,
  wjt as de,
  wpt as fe,
  yMt as pe,
  yRt as N,
  yjt as me,
  yun as P,
} from "./app-shared-7552fc8d5d82.js";
import {
  Bln as he,
  Cbn as ge,
  FOn as _e,
  J6t as F,
  Mbn as ve,
  NOn as ye,
  YEn as be,
  _6t as I,
  _8t as xe,
  _Sn as Se,
  aAt as Ce,
  abn as L,
  akn as we,
  c8t as Te,
  d8t as R,
  fSn as Ee,
  g8t as De,
  gbn as z,
  jOn as Oe,
  jln as B,
  jyn as ke,
  kbn as V,
  l8t as Ae,
  mbn as H,
  o8t as je,
  obn as U,
  pbn as W,
  rAt as Me,
  s8t as Ne,
  u8t as G,
  v8t as Pe,
  vbn as K,
  vyn as Fe,
  wOn as Ie,
  wbn as q,
  y8t as Le,
  z8t as J,
} from "./app-initial-3916b423772b.js";
import {
  _r as Re,
  ar as Y,
  dr as ze,
  fr as Be,
  gr as Ve,
  hr as He,
  lr as Ue,
  mr as We,
  or as Ge,
  sr as Ke,
  yr as qe,
} from "./app-primary-7b889402e22e.js";
import { i as Je, n as Ye, o as Xe, t as Ze } from "./timing-signals-338bbc56aa72.js";
import { n as Qe, t as $e } from "./command-state-a806ca4c7b63.js";
import { a as et, o as tt, r as nt } from "./preferences-ae4a1935cf93.js";
import { i as rt, r as it } from "./dsp-e96f863ea84c.js";
import { i as at, n as X, r as ot } from "./session-timings-816fa1347cdc.js";
import { a as st, r as ct, t as lt } from "./voice-configuration-manager-b26803b29f01.js";
import {
  A as ut,
  C as dt,
  D as ft,
  G as pt,
  K as mt,
  M as ht,
  N as gt,
  P as _t,
  R as vt,
  S as yt,
  T as bt,
  V as xt,
  _ as St,
  b as Ct,
  f as wt,
  h as Tt,
  j as Et,
  l as Dt,
  m as Ot,
  p as kt,
  r as At,
  t as jt,
  u as Mt,
  v as Nt,
  w as Pt,
  y as Ft,
} from "./voice-session-parameters-cf768358eef6.js";
function It(e) {
  let t = L(e).getState();
  return t.voiceSessionId
    ? {
        voiceSessionId: t.voiceSessionId,
        conversationId: t.earlyServerThreadId ?? t.conversationId ?? void 0,
      }
    : null;
}
function Lt(e, t) {
  let n = It(e);
  if (n == null) return;
  let r = 0;
  (L(e).setState((e) => {
    ((e.metrics.voiceNavChangeSessionIndex += 1), (r = e.metrics.voiceNavChangeSessionIndex));
  }),
    N(e, He, { ...n, stateName: t, sessionIndex: a(r) }));
}
function Rt(e) {
  Lt(e, Ve.CHATGPT_VOICE_NAVIGATION_STATE_PLUS_MENU_OPEN);
}
function zt(e, { kind: t }) {
  (e.set(on, { voiceSessionId: L(e).getState().voiceSessionId, kind: t }),
    Lt(
      e,
      t === `file`
        ? Ve.CHATGPT_VOICE_NAVIGATION_STATE_FILES_OPEN
        : Ve.CHATGPT_VOICE_NAVIGATION_STATE_GALLERY_OPEN,
    ));
}
function Bt(e) {
  let t = Ut(e);
  t != null && Wt(e, { kind: t, outcome: `canceled` });
}
function Vt(e, { uploads: t }) {
  let n = Ut(e),
    r = L(e).getState().voiceSessionId,
    i = new Set();
  if (n === `photo`) i.add(`photo`);
  else for (let e of t) i.add(e.file.type.startsWith(`image/`) ? `photo` : `file`);
  return (t, n) => {
    if (L(e).getState().voiceSessionId === r)
      for (let r of i) Wt(e, { kind: r, outcome: t, errorDetail: n });
  };
}
function Ht(e) {
  let t = !1;
  return (n, r) => {
    !st(L(e).getState().sessionType) ||
      (n === `canceled` && t) ||
      ((t = !0), Wt(e, { kind: `composer_text`, outcome: n, errorDetail: r }));
  };
}
function Ut(e) {
  let t = e.get(on);
  return (e.set(on, null), t?.voiceSessionId === L(e).getState().voiceSessionId ? t.kind : null);
}
function Wt(e, { kind: t, outcome: n, errorDetail: r }) {
  let i = It(e);
  if (i == null) return;
  let a = { ...i, outcome: Gt(n), errorDetail: r?.trim().slice(0, 512) || void 0 };
  switch (t) {
    case `composer_text`:
      N(e, Ue, a);
      break;
    case `file`:
      N(e, ze, a);
      break;
    case `photo`:
      N(e, Re, a);
  }
}
function Gt(e) {
  switch (e) {
    case `canceled`:
      return Be.CHATGPT_VOICE_INPUT_OUTCOME_CANCELED;
    case `error`:
      return Be.CHATGPT_VOICE_INPUT_OUTCOME_ERROR;
    case `success`:
      return Be.CHATGPT_VOICE_INPUT_OUTCOME_SUCCESS;
  }
}
function Kt(e, { audioRoute: t, analyticsContext: n, nowMs: r = Date.now() }) {
  let { inputDevice: i, outputDevice: a } = t;
  if (!i?.name && !a?.name) return;
  let o = n ?? It(e);
  if (o == null) return;
  let s = [];
  L(e).setState((e) => {
    (i?.name &&
      e.metrics.lastAudioInputDeviceName !== i.name &&
      ((e.metrics.lastAudioInputDeviceName = i.name),
      s.push({
        connectionType: i.connectionType,
        direction: G.CHATGPT_VOICE_AUDIO_DEVICE_DIRECTION_INPUT,
        name: i.name,
      })),
      a?.name &&
        e.metrics.lastAudioOutputDeviceName !== a.name &&
        ((e.metrics.lastAudioOutputDeviceName = a.name),
        s.push({
          connectionType: a.connectionType,
          direction: G.CHATGPT_VOICE_AUDIO_DEVICE_DIRECTION_OUTPUT,
          name: a.name,
        })),
      s.length !== 0 &&
        ((e.metrics.audioRouteChangeCount += 1),
        (e.metrics.lastAudioRouteChangeTsMs = r),
        (e.metrics.lastAudioRouteChangeWasBackgrounded = e.metrics.backgroundedAtMs != null)));
  });
  for (let t of s)
    N(e, Te, {
      ...o,
      deviceCategory: t.connectionType ?? Ae.CHATGPT_VOICE_AUDIO_DEVICE_CONNECTION_TYPE_UNSPECIFIED,
      deviceDirection: t.direction,
      deviceName: t.name,
    });
}
function qt(e) {
  let {
    audioRouteChangeCount: t,
    lastAudioRouteChangeTsMs: n,
    lastAudioRouteChangeWasBackgrounded: r,
  } = L(e).getState().metrics;
  return {
    ...(t > 0 ? { audioRouteChangeCount: t } : {}),
    ...(n == null ? {} : { lastAudioRouteChangeTsMs: n }),
    ...(r == null ? {} : { lastAudioRouteChangeWasBackgrounded: r }),
  };
}
function Jt(e, { message: t }) {
  let n = rn.safeParse(t.metadata?.attachments ?? []);
  if (!n.success) return !1;
  let r = n.data.filter(({ is_big_paste: e }) => !e),
    i = an.safeParse(t.content),
    a =
      r.some(({ mime_type: e }) => e?.startsWith(`image/`)) ||
      (i.success &&
        i.data.parts.some((e) => typeof e != `string` && e.content_type === `image_asset_pointer`)),
    o = r.some(({ mime_type: e }) => !e?.startsWith(`image/`));
  return (
    a && Wt(e, { kind: `photo`, outcome: `success` }),
    o && Wt(e, { kind: `file`, outcome: `success` }),
    a || o
  );
}
function Yt(e, t) {
  let n = It(e);
  n != null && N(e, We, { ...n, state: t });
}
function Xt(e, { actor: t, state: n }) {
  let r = It(e);
  if (r == null) return;
  let i = 0,
    o = !1;
  (L(e).setState((e) => {
    switch (t) {
      case Y.CHATGPT_VOICE_ACTOR_USER:
        if (e.metrics.lastUserVoiceActorState === n) return;
        e.metrics.lastUserVoiceActorState = n;
        break;
      case Y.CHATGPT_VOICE_ACTOR_ASSISTANT:
        if (e.metrics.lastAssistantVoiceActorState === n) return;
        e.metrics.lastAssistantVoiceActorState = n;
        break;
      case Y.CHATGPT_VOICE_ACTOR_UNSPECIFIED:
      case Y.UNRECOGNIZED:
        return;
    }
    ((e.metrics.voiceActorStateChangeIndex += 1),
      (i = e.metrics.voiceActorStateChangeIndex),
      (o = !0));
  }),
    o && N(e, Ke, { ...r, actor: t, state: n, stateChangeIndex: a(i) }));
}
function Zt(e, { actor: t, isSpeaking: n, nowMs: r = Date.now() }) {
  let i = L(e),
    a = i.getState();
  (t === `user` && a.isUserSpeaking === n) ||
    (t === `assistant` && a.isAssistantSpeaking === n) ||
    (i.setState((e) => {
      let i = e.metrics.speakingStateUpdatedAtMs;
      if (i != null && r > i) {
        let t = r - i;
        (e.isUserSpeaking && (e.metrics.userSpeakingTimeMs += t),
          e.isAssistantSpeaking && (e.metrics.assistantSpeakingTimeMs += t),
          e.isUserSpeaking && e.isAssistantSpeaking && (e.metrics.simultaneousSpeakingTimeMs += t));
      }
      ((e.metrics.speakingStateUpdatedAtMs = r),
        t === `user` ? (e.isUserSpeaking = n) : (e.isAssistantSpeaking = n));
    }),
    t === `user` &&
      Xt(e, {
        actor: Y.CHATGPT_VOICE_ACTOR_USER,
        state: n ? Ge.CHATGPT_VOICE_ACTOR_STATE_SPEAKING : Ge.CHATGPT_VOICE_ACTOR_STATE_LISTENING,
      }));
}
function Qt(e, t = X(e).session.getEndAsTimestamp() ?? Date.now()) {
  $t(e, t);
  let {
    userSpeakingTimeMs: n,
    assistantSpeakingTimeMs: r,
    simultaneousSpeakingTimeMs: i,
  } = L(e).getState().metrics;
  return {
    ...(n > 0 ? { userSpeakingTimeMs: a(n) } : {}),
    ...(r > 0 ? { assistantSpeakingTimeMs: a(r) } : {}),
    ...(i > 0 ? { simultaneousSpeakingTimeMs: a(i) } : {}),
  };
}
function $t(e, t) {
  L(e).setState((e) => {
    let n = e.metrics.speakingStateUpdatedAtMs;
    if (n == null || t <= n) return;
    let r = t - n;
    (e.isUserSpeaking && (e.metrics.userSpeakingTimeMs += r),
      e.isAssistantSpeaking && (e.metrics.assistantSpeakingTimeMs += r),
      e.isUserSpeaking && e.isAssistantSpeaking && (e.metrics.simultaneousSpeakingTimeMs += r),
      (e.metrics.speakingStateUpdatedAtMs = t));
  });
}
function en(e, { isForegrounded: t, nowMs: n = Date.now() }) {
  let r = It(e);
  if (r == null) return;
  let i = !1;
  (L(e).setState((e) => {
    if (t) {
      let t = e.metrics.backgroundedAtMs;
      if (t == null) return;
      ((e.metrics.backgroundTotalDurationMs += Math.max(0, n - t)),
        (e.metrics.backgroundedAtMs = null),
        (e.metrics.lastForegroundTsMs = n),
        (i = !0));
      return;
    }
    e.metrics.backgroundedAtMs ??
      (e.metrics.firstBackgroundTsMs ?? (e.metrics.firstBackgroundTsMs = n),
      (e.metrics.lastBackgroundTsMs = n),
      (e.metrics.backgroundEnterCount += 1),
      (e.metrics.backgroundedAtMs = n),
      (i = !0));
  }),
    i && N(e, t ? Ne : je, r));
}
function tn(e) {
  let t,
    n = L(e).subscribe(
      (e) => e.voiceSessionId,
      (n) => {
        if ((t?.(), (t = void 0), n == null || typeof document > `u`)) return;
        let r = () => {
          en(e, { isForegrounded: document.visibilityState === `visible` });
        };
        (document.addEventListener(`visibilitychange`, r),
          r(),
          (t = () => {
            document.removeEventListener(`visibilitychange`, r);
          }));
      },
      { fireImmediately: !0 },
    );
  return () => {
    (n(), t?.());
  };
}
function nn(e, t = X(e).session.getEndAsTimestamp() ?? Date.now()) {
  L(e).setState((e) => {
    let n = e.metrics.backgroundedAtMs;
    n == null ||
      t <= n ||
      ((e.metrics.backgroundTotalDurationMs += t - n), (e.metrics.backgroundedAtMs = t));
  });
  let {
    firstBackgroundTsMs: n,
    lastBackgroundTsMs: r,
    lastForegroundTsMs: i,
    backgroundEnterCount: a,
    backgroundTotalDurationMs: o,
    backgroundedAtMs: s,
  } = L(e).getState().metrics;
  return {
    ...(n == null ? {} : { firstBackgroundTsMs: n }),
    ...(r == null ? {} : { lastBackgroundTsMs: r }),
    ...(i == null ? {} : { lastForegroundTsMs: i }),
    ...(a > 0 ? { backgroundEnterCount: a } : {}),
    ...(o > 0 ? { backgroundTotalDurationMs: o } : {}),
    wasBackgroundedAtEnd: s != null,
  };
}
var rn, an, on;
function sn() {
  return (sn = e(() => {
    (fe(),
      J(),
      qe(),
      d(),
      b(),
      y(),
      T(),
      ot(),
      U(),
      (rn = u(s({ is_big_paste: o().nullish(), mime_type: f().nullish() }))),
      (an = s({
        content_type: v(`multimodal_text`),
        parts: u(w([f(), s({ content_type: f().optional() })])),
      })),
      (on = oe(C, () => null)));
  }))();
}
async function cn({ room: e, event: t, voiceStore: n, options: r, recordInVoiceStore: i = !0 }) {
  let a = n.scope.get(V),
    o = pn();
  (await e.localParticipant.publishData(o.encode(JSON.stringify(t)), r),
    i &&
      a === n.scope.get(V) &&
      n.setState((e) => {
        e.server.messages.push({ ...t, timestamp: new Date(), source: `local` });
      }));
}
function ln(e, t, n, r) {
  return cn({
    room: e,
    voiceStore: t,
    event: {
      type: z.TrackState,
      payload: {
        type: z.TrackState,
        track_id: n === `camera_front` ? `webcam` : `screenshare`,
        media_type: `video`,
        media_source: n,
        state: r,
      },
    },
  });
}
function un(e, t, n, r) {
  return cn({
    room: e,
    voiceStore: t,
    event: {
      type: z.TrackState,
      payload: {
        type: z.TrackState,
        track_id: `microphone`,
        media_type: `audio`,
        media_source: n,
        state: r,
      },
    },
  });
}
async function dn({ room: e, metrics: t }) {
  let n = pn();
  await e.localParticipant.publishData(
    n.encode(JSON.stringify({ type: z.ClientMetrics, payload: { type: z.ClientMetrics, ...t } })),
  );
}
var fn, pn;
function mn() {
  return (mn = e(() => {
    (q(), K(), (pn = () => ((fn ||= new TextEncoder()), fn)));
  }))();
}
async function hn({ scope: e, room: t, expectedVoiceSessionId: n }) {
  if (!t) return;
  let r = await gn(t);
  if (n === e.get(V) && r && (Kt(e, { audioRoute: r }), ee(e, _n)))
    try {
      await cn({
        room: t,
        voiceStore: L(e),
        event: {
          type: z.ClientMetadataUpdate,
          payload: {
            type: z.ClientMetadataUpdate,
            audio_route: { input_device: r.inputDevice, output_device: r.outputDevice },
          },
        },
        options: { reliable: !0 },
      });
    } catch (e) {
      P.debug(`[voice] Failed to publish audio route metadata`, {
        safe: {},
        sensitive: { error: e },
      });
    }
}
async function gn(e, { snapshotActiveDevices: t = !1 } = {}) {
  if (e != null)
    try {
      let n = t
          ? {
              input: e.getActiveDevice(`audioinput`) || `default`,
              output: e.getActiveDevice(`audiooutput`) || `default`,
            }
          : void 0,
        r = await navigator.mediaDevices.enumerateDevices(),
        i = n?.input ?? (e.getActiveDevice(`audioinput`) || `default`),
        a = n?.output ?? (e.getActiveDevice(`audiooutput`) || `default`),
        o = r.find(({ deviceId: e, kind: t }) => t === `audioinput` && e === i)?.label,
        s = r.find(({ deviceId: e, kind: t }) => t === `audiooutput` && e === a)?.label,
        c = { inputDevice: o ? { name: o } : void 0, outputDevice: s ? { name: s } : void 0 };
      return c.inputDevice || c.outputDevice ? c : void 0;
    } catch (e) {
      P.debug(`[voice] Failed to capture audio route metadata`, {
        safe: {},
        sensitive: { error: e },
      });
    }
}
var _n;
function vn() {
  return (vn = e(() => {
    (ue(), M(), q(), K(), U(), sn(), mn(), (_n = `2942012831`));
  }))();
}
function yn(e, t, n) {
  let r = X(e),
    i = (e) => {
      switch (e) {
        case H.Retry:
          return F.CHATGPT_SURFACE_RETRY;
        case H.LoggedOut:
          return F.CHATGPT_SURFACE_LOGGED_OUT;
        case H.Composer:
          return F.CHATGPT_SURFACE_COMPOSER;
        case H.ModalNewChat:
          return F.CHATGPT_SURFACE_MODAL_NEW_CHAT;
        case H.ModalSwitchToStandard:
          return F.CHATGPT_SURFACE_MODAL_SWITCH_TO_STANDARD;
        case H.DeepLink:
          return F.CHATGPT_SURFACE_DEEP_LINK;
        case H.ModalVoicePicker:
          return F.CHATGPT_SURFACE_MODAL_VOICE_PICKER;
        case H.WingmanVoicePicker:
          return F.CHATGPT_SURFACE_WINGMAN_HOME_TAKEOVER;
        case H.LanguageLearningWidget:
          return F.CHATGPT_SURFACE_LANGUAGE_LEARNING_WIDGET;
        case H.Unknown:
        case H.WingmanIncallPromotion:
        case H.VoiceModeDropdown:
          return F.CHATGPT_SURFACE_UNKNOWN;
      }
    },
    a = (e) => {
      switch (e) {
        case `granted`:
          return I.CHATGPT_MICROPHONE_PERMISSIONS_STATE_GRANTED;
        case `denied`:
          return I.CHATGPT_MICROPHONE_PERMISSIONS_STATE_DENIED;
        case `prompt`:
          return I.CHATGPT_MICROPHONE_PERMISSIONS_STATE_ASKED;
        case `pending`:
          return I.CHATGPT_MICROPHONE_PERMISSIONS_STATE_ASKED;
        case `unknown`:
          return I.CHATGPT_MICROPHONE_PERMISSIONS_STATE_UNSPECIFIED;
      }
    },
    o = r.sessionConnected.getMarkAsTimestamp(),
    s = r.session.getStartAsTimestamp(),
    c = !o || !s ? void 0 : o - s;
  return {
    voiceSessionId: n,
    ...gt(e, n),
    ...ht(e, n),
    sessionCreateTime: r.session.getStartAsTimestamp(),
    sessionConnectionLatency: c,
    postCallCommitWaitStartTs: r.postCallCommitWait.getStartAsTimestamp(),
    postCallCommitWaitEndTs: r.postCallCommitWait.getEndAsTimestamp(),
    surface: i(e.get(Xe)),
    microphonePermissionState: a(e.get(Ye)),
    microphonePermissionsStartTime: r._microphonePermissions.request.getStartAsTimestamp(),
    microphonePermissionsEndTime: r._microphonePermissions.request.getEndAsTimestamp(),
    peerConnectionCreationStartTime: r._peerConnection.preConnectionSetup.getStartAsTimestamp(),
    peerConnectionCreationEndTime: r._peerConnection.preConnectionSetup.getEndAsTimestamp(),
    dataChannelCreationStartTime: r._preConnect.dataChannel.getStartAsTimestamp(),
    dataChannelCreationEndTime: r._preConnect.dataChannel.getEndAsTimestamp(),
    eventHandlersCreationStartTime: r._preConnect.eventHandlers.getStartAsTimestamp(),
    eventHandlersCreationEndTime: r._preConnect.eventHandlers.getEndAsTimestamp(),
    mediaTrackCreationStartTime: r._preConnect.blankTransceiver.getStartAsTimestamp(),
    mediaTrackCreationEndTime: r._preConnect.blankTransceiver.getEndAsTimestamp(),
    createOfferStartTime: r._preConnect.createOffer.getStartAsTimestamp(),
    createOfferEndTime: r._preConnect.createOffer.getEndAsTimestamp(),
    setLocalDescriptionStartTime: r._preConnect.setLocalDescription.getStartAsTimestamp(),
    setLocalDescriptionEndTime: r._preConnect.setLocalDescription.getEndAsTimestamp(),
    createAbortSignalStartTime: r._preConnect.createAbortSignal.getStartAsTimestamp(),
    createAbortSignalEndTime: r._preConnect.createAbortSignal.getEndAsTimestamp(),
    getStatusSentTime: r.getStatus.getStartAsTimestamp(),
    getStatusSuccessTime: r.getStatus.getEndAsTimestamp(),
    getStatusFailedTime: r.getStatus.getFailedAsTimestamp(),
    proofOfWorkStartTime: r.proofOfWork.getStartAsTimestamp(),
    proofOfWorkEndTime: r.proofOfWork.getEndAsTimestamp(),
    tcConnectTime: r.tcConnect.getStartAsTimestamp(),
    tcConnectSuccessTime: r.tcConnect.getEndAsTimestamp(),
    tcConnectFailTime: r.tcConnect.getFailedAsTimestamp(),
    getTokenSentTime: r.getToken.getStartAsTimestamp(),
    getTokenSuccessTime: r.getToken.getEndAsTimestamp(),
    getTokenFailedTime: r.getToken.getFailedAsTimestamp(),
    getTokenDomainLookupStartTime: r._getToken.domainLookup.getStartAsTimestamp(),
    getTokenDomainLookupEndTime: r._getToken.domainLookup.getEndAsTimestamp(),
    getTokenRequestStartTime: r._getToken.request.getStartAsTimestamp(),
    getTokenConnectStartTime: r._getToken.connect.getStartAsTimestamp(),
    getTokenConnectEndTime: r._getToken.connect.getEndAsTimestamp(),
    getTokenSecureConnectionStartTime: r._getToken.secureConnection.getMarkAsTimestamp(),
    getTokenResponseStartTime: r._getToken.response.getStartAsTimestamp(),
    getTokenResponseEndTime: r._getToken.response.getEndAsTimestamp(),
    getTokenLatencyMs: r._getToken.latency.getLatency(),
    audioInputAcquisitionStartTime: r._peerConnection.audioInputAcquisition.getStartAsTimestamp(),
    audioInputAcquisitionEndTime: r._peerConnection.audioInputAcquisition.getEndAsTimestamp(),
    audioTransceiverSetupStartTime: r._peerConnection.audioTransceiverSetup.getStartAsTimestamp(),
    audioTransceiverSetupEndTime: r._peerConnection.audioTransceiverSetup.getEndAsTimestamp(),
    qualityMonitorSetupStartTime: r._peerConnection.qualityMonitorSetup.getStartAsTimestamp(),
    qualityMonitorSetupEndTime: r._peerConnection.qualityMonitorSetup.getEndAsTimestamp(),
    setRemoteDescriptionStartTime: r._postConnect.setRemoteDescription.getStartAsTimestamp(),
    setRemoteDescriptionEndTime: r._postConnect.setRemoteDescription.getEndAsTimestamp(),
    conversationStartSuccessTime: r.conversationStart.getEndAsTimestamp(),
    conversationStartFailTime: r.conversationStart.getFailedAsTimestamp(),
    dataChannelOpenTime: r.dataChannelOpen.getMarkAsTimestamp(),
    conversationStartLatency: r.conversationLatency.getLatency(),
    sessionConnectedTime: r.sessionConnected.getMarkAsTimestamp(),
    userAbortTime: r.userAborted.getMarkAsTimestamp(),
    advancedVoiceDisclosureStartTime:
      r._interactivePreConnect.advancedVoiceDisclosure.getStartAsTimestamp(),
    advancedVoiceDisclosureEndTime:
      r._interactivePreConnect.advancedVoiceDisclosure.getEndAsTimestamp(),
    voicePickerStartTime: r._interactivePreConnect.voicePicker.getStartAsTimestamp(),
    voicePickerEndTime: r._interactivePreConnect.voicePicker.getEndAsTimestamp(),
    temporaryChatNoticeStartTime:
      r._interactivePreConnect.temporaryChatNotice.getStartAsTimestamp(),
    temporaryChatNoticeEndTime: r._interactivePreConnect.temporaryChatNotice.getEndAsTimestamp(),
    mode: t,
  };
}
function bn() {
  return (bn = e(() => {
    (J(), ot(), Ze(), K(), _t());
  }))();
}
var Z;
function xn() {
  return (xn = e(() => {
    Z = (function (e) {
      return (
        (e.EXCELLENT = `excellent`),
        (e.GOOD = `good`),
        (e.POOR = `poor`),
        (e.LOST = `lost`),
        (e.UNKNOWN = `unknown`),
        e
      );
    })({});
  }))();
}
function Sn({ packets: e, packetsLost: t, fractionLost: n, rtt: r }) {
  let i;
  if (
    (e !== void 0 && t !== void 0 ? (i = (t * 100) / e) : n !== void 0 && (i = n * 100),
    i === void 0 || r === void 0 || isNaN(i))
  )
    return;
  let a = (r * 1e3) / 2,
    o = a / 40;
  a > 160 && (o = (a - 120) / 10);
  let s = 100 - o - i;
  return Math.max(s, 0);
}
function Cn(e) {
  if (e === void 0) return Z.UNKNOWN;
  let t;
  return (
    (t = e <= 0 ? 1 : e >= 100 ? 4.5 : 1 + 0.035 * e + 7e-6 * e * (e - 60) * (100 - e)),
    t > 4 ? Z.EXCELLENT : t > 3.5 ? Z.GOOD : Z.POOR
  );
}
var wn, Tn, En, Dn, On;
function kn() {
  return (kn = e(() => {
    (M(),
      xn(),
      Ct(),
      (wn = 1e3),
      (Tn = 3),
      (En = 2e3),
      (Dn = class {
        pc;
        cb;
        reportTimerId;
        pollingTimerId;
        pollInFlight = !1;
        pollGeneration = 0;
        localWindow;
        remoteWindow;
        reportTimestamps;
        stale = !1;
        audioGapSummaryTracker = new Ft();
        constructor(e, t) {
          let n = Tn;
          ((this.pc = e),
            (this.cb = t),
            (this.reportTimerId = void 0),
            (this.localWindow = {
              packetsLost: new On(n, `cumulative`),
              fractionLost: new On(n, `individual`),
              rtt: new On(n, `individual`),
            }),
            (this.remoteWindow = {
              packetsSent: new On(n, `cumulative`),
              packetsLost: new On(n, `cumulative`),
              rtt: new On(n, `individual`),
            }),
            (this.reportTimestamps = {}));
        }
        start() {
          this.reportTimerId ||
            this.pollingTimerId ||
            ((this.reportTimerId = window.setInterval(this.report.bind(this), 500)),
            (this.pollingTimerId = window.setInterval(() => {
              this.poll();
            }, wn)));
        }
        stop() {
          ((this.pollGeneration += 1),
            window.clearInterval(this.reportTimerId),
            window.clearInterval(this.pollingTimerId),
            (this.reportTimerId = void 0),
            (this.pollingTimerId = void 0));
        }
        getAudioGapSummary() {
          return this.audioGapSummaryTracker.getSummary();
        }
        isFresh(e) {
          let t = !0;
          if (this.reportTimestamps[e.type] !== void 0) {
            let n = Date.now() - this.reportTimestamps[e.type] < En;
            t = e.timestamp !== this.reportTimestamps[e.type] || n;
          }
          return ((this.reportTimestamps[e.type] = e.timestamp), t);
        }
        async poll() {
          if (this.pollInFlight) return;
          this.pollInFlight = !0;
          let e = this.pollGeneration,
            t;
          try {
            t = await this.pc.getStats();
          } catch {
            return;
          } finally {
            this.pollInFlight = !1;
          }
          if (e !== this.pollGeneration) return;
          let n,
            r = {},
            i = [],
            a = !1;
          (t.forEach((e) => {
            let t = e.kind || e.mediaType;
            (e.type === `transport` && e.selectedCandidatePairId && (n = e.selectedCandidatePairId),
              e.type === `remote-inbound-rtp` &&
                t === `audio` &&
                ((a ||= !this.isFresh(e)),
                this.localWindow.packetsLost.push(e.packetsLost),
                this.localWindow.fractionLost.push(e.fractionLost)),
              yt(e) &&
                (i.push(e),
                (a ||= !this.isFresh(e)),
                this.remoteWindow.packetsSent.push(
                  e.packetsReceived !== void 0 && e.packetsLost !== void 0
                    ? e.packetsReceived + e.packetsLost
                    : void 0,
                ),
                this.remoteWindow.packetsLost.push(e.packetsLost)),
              e.type === `candidate-pair` && (r[e.id] = e));
          }),
            (this.stale = a),
            this.audioGapSummaryTracker.observe(t, i, wn));
          let o = n !== void 0 && r[n];
          o
            ? (this.remoteWindow.rtt.push(o.currentRoundTripTime),
              this.localWindow.rtt.push(o.currentRoundTripTime))
            : P.error(`QualityMonitor no candidate-pair found!`);
        }
        report() {
          if (this.stale) return this.cb({ local: Z.UNKNOWN, general: Z.UNKNOWN });
          let e = Sn({
              packets: void 0,
              packetsLost: this.localWindow.packetsLost.get(),
              fractionLost: this.localWindow.fractionLost.get(),
              rtt: this.localWindow.rtt.get(),
            }),
            t = [
              e,
              Sn({
                packets: this.remoteWindow.packetsSent.get(),
                packetsLost: this.remoteWindow.packetsLost.get(),
                fractionLost: void 0,
                rtt: this.remoteWindow.rtt.get(),
              }),
            ].filter((e) => e !== void 0),
            n = t.length > 0 ? Math.min(...t) : void 0,
            r = Cn(e),
            i = Cn(n);
          this.cb({ local: r, general: i });
        }
      }),
      (On = class {
        size;
        type;
        buf;
        constructor(e, t) {
          ((this.size = e), (this.type = t), (this.buf = []));
        }
        push(e) {
          e !== void 0 && (this.buf.length === this.size && this.buf.shift(), this.buf.push(e));
        }
        get() {
          if (this.buf.length !== 0)
            switch (this.type) {
              case `cumulative`: {
                let e = this.buf[0];
                return (this.buf[this.buf.length - 1] - e) / this.buf.length;
              }
              case `individual`:
                return this.buf.reduce((e, t) => e + t, 0) / this.buf.length;
            }
        }
      }));
  }))();
}
var Q;
function An() {
  return (An = e(() => {
    Q = class {
      static controller;
      static abortPendingNegotiation(e) {
        (this.controller?.abort(`[abort] ${e}`), (this.controller = void 0));
      }
      static clearNegotiation(e) {
        (e == null || this.controller?.signal === e) && (this.controller = void 0);
      }
      static beginNegotiation() {
        return (
          this.abortPendingNegotiation(`Starting new negotiation`),
          (this.controller = new AbortController()),
          this.controller.signal
        );
      }
    };
  }))();
}
function jn({ scope: e, room: t }) {
  if (!ee(e, Mn) || typeof navigator > `u`) return () => {};
  let n = navigator.connection;
  if (!n) return () => {};
  let r = () => {
    let r = {
      connection_type: typeof n.type == `string` && n.type.length > 0 ? n.type : void 0,
      effective_connection_type:
        typeof n.effectiveType == `string` && n.effectiveType.length > 0 ? n.effectiveType : void 0,
      downlink_mbps:
        typeof n.downlink == `number` && Number.isFinite(n.downlink) ? n.downlink : void 0,
      rtt_ms: typeof n.rtt == `number` && Number.isFinite(n.rtt) ? n.rtt : void 0,
      save_data: typeof n.saveData == `boolean` ? n.saveData : void 0,
    };
    Object.values(r).some((e) => e !== void 0) &&
      cn({
        room: t,
        voiceStore: L(e),
        event: {
          type: z.ClientMetadataUpdate,
          payload: { type: z.ClientMetadataUpdate, network: r },
        },
        options: { reliable: !0 },
      }).catch((e) => {
        P.debug(`[voice] Failed to publish network metadata`, {
          safe: {},
          sensitive: { error: e },
        });
      });
  };
  return (
    r(),
    n.addEventListener?.(`change`, r),
    () => {
      n.removeEventListener?.(`change`, r);
    }
  );
}
var Mn;
function Nn() {
  return (Nn = e(() => {
    (ue(), M(), K(), U(), mn(), (Mn = `2942012831`));
  }))();
}
function Pn(e) {
  return e.get(zn, void 0).waitOnDisconnect();
}
function Fn(e, t, n, r = !1) {
  return e.get(zn, void 0).waitBeforeStart(t, n, r);
}
function In(e, ...t) {
  e.get(zn, void 0).discardForTreatment(t);
}
function Ln(e) {
  e.get(zn, void 0).dispose();
}
var Rn, zn;
function Bn() {
  return (Bn = e(() => {
    (d(),
      p(),
      b(),
      t(),
      j(),
      x(),
      ae(),
      ve(),
      T(),
      ue(),
      ot(),
      U(),
      (Rn = s({
        type: v(`voice-conversation-commit`),
        payload: s({
          voice_session_id: f().min(1),
          conversation_id: f().min(1).transform(ne),
          parent_message_id: f().min(1),
        }),
      })),
      (zn = O(C, (e, { scope: t }) => {
        let n = new Map(),
          r = new Map(),
          i = new Map(),
          a,
          o,
          s;
        function l(e) {
          let n = new Set();
          for (let r of e)
            if (r) {
              n.add(r);
              let e = t.get(Ie, r);
              e != null && n.add(e);
            }
          return n;
        }
        function u(e, t) {
          (clearTimeout(e.timeoutId), n.delete(e.voiceSessionId));
          for (let t of e.conversationIds) r.get(t) === e && r.delete(t);
          e.resolve(t);
        }
        function d() {
          (a?.(), (a = void 0), o?.(), (o = void 0), s?.(), (s = void 0));
          for (let e of n.values()) u(e, void 0);
          i.clear();
        }
        function f(e) {
          let n = L(t).getState();
          if (n.deprecateCelsius)
            for (let t of l([n.conversationId, n.earlyServerThreadId, ...e])) {
              let e = r.get(t);
              e != null && u(e, void 0);
              let n = i.get(t);
              if (n != null) for (let e of n.conversationIds) i.get(e) === n && i.delete(e);
            }
        }
        function p() {
          if (a != null) return;
          let e = t.get(c),
            r = te(`conversations`, () =>
              E.safeGet(`/celsius/ws/user`, {}).then((e) => e.websocket_url),
            );
          ((a = r.onMessage((e) => {
            let r = Rn.safeParse(e);
            if (!r.success) return;
            let a = r.data.payload,
              o = n.get(a.voice_session_id);
            if (o == null) return;
            o.conversationIds.add(a.conversation_id);
            for (let e of o.conversationIds)
              re(e) && t.get(Ie, e) !== a.conversation_id && be(t, e, a.conversation_id);
            let s = {
              payload: a,
              conversationIds: o.conversationIds,
              previousParentMessageId: o.previousParentMessageId,
              expiresAtMs: Date.now() + 6e4,
            };
            for (let e of s.conversationIds) i.set(e, s);
            u(o, s);
          })),
            (o = r.retainSubscription()),
            (s = t.watch(({ get: t }) => {
              let n = t(c);
              (n.userId !== e.userId ||
                n.accountId !== e.accountId ||
                n.authenticatedAccountId !== e.authenticatedAccountId ||
                n.authMethod !== e.authMethod) &&
                d();
            })));
        }
        return {
          discardForTreatment: f,
          dispose: d,
          waitOnDisconnect() {
            let e = L(t).getState();
            if (e.deprecateCelsius) {
              e.hadConversationActivity && f([]);
              return;
            }
            if (
              e.sessionType !== `wm` ||
              !e.hadConversationActivity ||
              e.voiceSessionId == null ||
              !t.get(pe, `3654803918`)
            )
              return;
            p();
            let i = l([e.conversationId, e.earlyServerThreadId]);
            if (i.size === 0) return;
            let a = n.get(e.voiceSessionId);
            if (a != null) {
              for (let e of i) (a.conversationIds.add(e), r.set(e, a));
              return a.promise;
            }
            let o = {
              ...ce(),
              voiceSessionId: e.voiceSessionId,
              conversationIds: i,
              previousParentMessageId:
                [...i].map((e) => t.get(ye, e)).find((e) => e != null) ?? void 0,
              timeoutId: setTimeout(() => u(o, void 0), 1e4),
            };
            n.set(e.voiceSessionId, o);
            for (let e of i) r.set(e, o);
            return o.promise;
          },
          async waitBeforeStart(e, n, a) {
            if (!a && !t.get(pe, `3654803918`)) return;
            let o = l(e),
              s = [...o].map((e) => r.get(e)).find((e) => e != null),
              c;
            if (s != null) {
              let e = X(t).postCallCommitWait;
              e.start();
              try {
                c = await s.promise;
              } finally {
                e.end();
              }
            } else {
              for (let [e, t] of i) t.expiresAtMs <= Date.now() && i.delete(e);
              c = [...o].map((e) => i.get(e)).find((e) => e != null);
            }
            return c != null &&
              (c.previousParentMessageId == null || n == null || c.previousParentMessageId === n)
              ? c
              : void 0;
          },
        };
      })));
  }))();
}
function Vn(e) {
  switch (e) {
    case `checking`:
      return W.Connecting;
    case `connected`:
    case `completed`:
      return W.Connected;
    case `disconnected`:
      return W.Reconnecting;
    case `new`:
    case `failed`:
    case `closed`:
      return W.Disconnected;
  }
}
function $(e) {
  return { current: e };
}
function Hn(e, t) {
  let n = e.chain.get(C.id) ?? e.node,
    r = Zn.get(n);
  if (r == null) {
    if (t == null) throw Error(`Load the voice session before accessing its context`);
    ((r = Xn({ dsp: t, voiceStore: L(e) })), Zn.set(n, r));
  }
  return r;
}
async function Un(e) {
  let t = e.chain.get(C.id) ?? e.node,
    n = Zn.get(t);
  (Zn.delete(t), await n?.dispose());
}
var Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn;
function Qn() {
  return (Qn = e(() => {
    (J(),
      se(),
      d(),
      b(),
      y(),
      T(),
      M(),
      ot(),
      rt(),
      xn(),
      tt(),
      q(),
      K(),
      U(),
      sn(),
      bt(),
      wt(),
      kn(),
      An(),
      vn(),
      Nn(),
      mn(),
      Mt(),
      lt(),
      Bn(),
      pt(),
      xt(),
      At(),
      St(),
      Tt(),
      D(),
      (Wn = (function (e) {
        return (
          (e.Connected = `connected`),
          (e.Disconnected = `disconnected`),
          (e.DataReceived = `dataReceived`),
          (e.DataChannelOpen = `dataChannelOpen`),
          (e.TrackPublished = `trackPublished`),
          (e.ConnectionQualityChanged = `connectionQualityChanged`),
          e
        );
      })({})),
      (Gn = `User`),
      (Kn = `Assistant`),
      (qn = m(`type`, [s({ type: v(`data_message`), data: f() }), s({ type: v(`error`) })])),
      (Jn = void 0),
      (Yn = () => (Jn === void 0 && (Jn = new TextEncoder()), Jn)),
      (Xn = ({ dsp: e, tryAcquireMicrophoneInput: t, voiceStore: n }) => {
        let r = n.scope,
          {
            LocalMediaManager: i,
            mediaStreamTrackToAVMTrack: a,
            AVMTrackOriginType: o,
            AVMTrackSourceType: s,
            getSafeAudioDeviceId: c,
            AssistantSpeakingMonitor: u,
          } = e,
          d = $(null),
          f = $(new AbortController()),
          p = $(null),
          m = $(null),
          h = [],
          g,
          _ = new Set(),
          v = new Set(),
          ee = ie(
            C,
            () => h,
            ({ set: e }) => (
              _.add(e),
              () => {
                _.delete(e);
              }
            ),
          ),
          y = ie(
            C,
            () => g,
            ({ set: e }) => (
              v.add(e),
              () => {
                v.delete(e);
              }
            ),
          ),
          b = oe(C, () => null),
          x = oe(C, !1),
          te = t,
          w = (e) => {
            n.setState((t) => {
              t.isDuckingActive = e;
            });
          },
          T = (e) => {
            Zt(r, { actor: `user`, isSpeaking: e });
          },
          ne = (e) => {
            Zt(r, { actor: `assistant`, isSpeaking: e });
          },
          re = $(void 0),
          E = $(void 0),
          D = $(null),
          ae = (e, t) => {
            d.current === e &&
              (P.debug(`[transceiver] Assistant playback blocked`, {
                safe: {},
                sensitive: { detail: t },
              }),
              l(r, () => {
                r.set(it, t instanceof Error ? t : Error(String(t)));
              }));
          },
          O = async ({ track: e, initialSetup: t = !1 }) => {
            let n = e.kind === `audio` ? re : E;
            if (n.current && !n.current.stopped) await n.current.sender.replaceTrack(e);
            else if (t) n.current = J().addTransceiver(e);
            else
              throw Error(
                `Cannot replace track on ${e.kind} transceiver that was not initialized.`,
              );
          },
          se = $(void 0),
          ce = $(void 0),
          k = $(void 0),
          A = $(null),
          j = $(void 0),
          ue = $(void 0),
          M = $(void 0),
          de = $(0),
          fe = () => [j.current, ue.current, M.current].filter((e) => e !== void 0),
          pe = (e) => {
            l(r, () => {
              ((j.current = e), (h = fe()), _.forEach((e) => e(h)));
            });
          },
          me = (e) => {
            l(r, () => {
              ((ue.current = e), (h = fe()), _.forEach((e) => e(h)));
            });
          },
          he = (e) => {
            l(r, () => {
              ((M.current = e), (h = fe()), _.forEach((e) => e(h)));
            });
          },
          ge = (e) => {
            l(r, () => {
              ((A.current = e),
                r.set(b, e),
                _e((t) => (t == null ? t : { ...t, state: e ?? W.Disconnected })));
            });
          },
          _e = (e) => {
            ((g = typeof e == `function` ? e(g) : e), v.forEach((e) => e(g)));
          },
          F = () => A.current,
          ve = (e) => {
            _e((t) =>
              le(t, (t) => {
                t &&
                  (t.activeSpeakers.some((t) => t.identity === e) ||
                    t.activeSpeakers.push({ identity: e }));
              }),
            );
          },
          ye = (e) => {
            _e((t) =>
              le(t, (t) => {
                t && (t.activeSpeakers = t.activeSpeakers.filter((t) => t.identity !== e));
              }),
            );
          },
          be = $(null),
          I = $(void 0),
          Se = $(void 0),
          Ce = $(void 0),
          L = $(!1),
          we = () => {
            ((Ce.current = void 0), (L.current = !1));
          },
          Te = $([]),
          R = {
            connected: [],
            disconnected: [],
            dataReceived: [],
            dataChannelOpen: [],
            trackPublished: [],
            connectionQualityChanged: [],
          },
          Ee = $(!1),
          De = (e) => {
            R.trackPublished.forEach((t) => t(e));
          },
          z = () => {
            (m.current?.destroy(),
              (m.current = null),
              p.current?.dispose(),
              (p.current = null),
              w(!1),
              T(!1),
              ne(!1));
          },
          Oe = async (t, n) => {
            if ((z(), !t)) return;
            ((m.current = new u(r, ne, () => ne(!1))),
              S(
                async () => {
                  let { preloadSileroVoiceActivityDetector: e } = await import(
                    `./entry-18a4a0f9f202.js`
                  );
                  return { preloadSileroVoiceActivityDetector: e };
                },
                __vite__mapDeps([0, 1, 2, 3]),
                import.meta.url,
              )
                .then(({ preloadSileroVoiceActivityDetector: e }) => e(r))
                .catch(() => {}));
            let { dspConfigManager: i, AssistantPlaybackDucker: a, getVoiceDuckingVolume: o } = e;
            n.throwIfAborted();
            let s = i.getStatsigDuckingConfig(r),
              c = new a(r, {
                duckInactiveHoldMs: s.duckInactiveHoldMs,
                duckingDevicePolicy: s.duckingDevicePolicy,
                duckMinimumDurationMs: s.duckMinimumDurationMs,
                duckedVolume: o(et() ?? s.duckedRemoteVolumeDb),
                erleDbForConfiguredDuckingDepth: i.getErleDbForConfiguredDuckingDepth(r),
                erleStatsReportReader: i.isErleInformedDuckingEnabled(r)
                  ? () => q.current?.getStats() ?? null
                  : void 0,
                manualDuckingControl: nt(),
                onDuckingChange: (e) => {
                  w(e);
                },
                onUserSpeakingChange: T,
                restorationDurationMs: s.restorationDurationMs,
                restorationSteps: s.restorationSteps,
              });
            ((p.current = c),
              c.attachAudioElement(d.current),
              c.setAudioOutputDeviceId(k.current),
              c.attachMicrophoneTrack(j.current?.track ?? null));
          },
          B = $(void 0),
          ke = () => B.current?.getAudioGapSummary(),
          Ae = $(void 0),
          H = $(void 0),
          je = $(void 0),
          U = new Set(),
          Me = () => {
            (je.current?.(), (je.current = void 0));
          },
          Ne = (e, t) => {
            p.current?.handleServerVoiceMessage(e);
            let n = Yn().encode(e);
            R.dataReceived.forEach((e) => e(n, t));
          };
        g = {
          localParticipant: {
            isMicrophoneEnabled: !1,
            setMicrophoneEnabled: function (e) {
              return (j.current?.setMuted(!e), Promise.resolve());
            },
            setCameraEnabled: async function (e) {
              if (e)
                try {
                  await ze(`camera`);
                } catch (e) {
                  throw (
                    P.debug(`[transceiver] Error acquiring camera input`, {
                      safe: {},
                      sensitive: { detail: e },
                    }),
                    e
                  );
                }
              else await Ve();
            },
            setScreenShareEnabled: async function (e) {
              if (e)
                try {
                  await ze(`screenshare`);
                } catch (e) {
                  throw (
                    P.debug(`[transceiver] Error acquiring screen share input`, {
                      safe: {},
                      sensitive: { detail: e },
                    }),
                    e
                  );
                }
              else await Ve();
              return Promise.resolve(void 0);
            },
            publishData: function (e) {
              let t = be.current;
              if (t?.readyState !== `open`)
                return Promise.reject(Error(`Data channel is not open`));
              let n = new TextDecoder().decode(e),
                r = JSON.stringify({ type: `data_message`, data: n });
              return (t.send(r), Promise.resolve());
            },
            on(e, t) {
              e === `connectionQualityChanged` && Te.current.push(t);
            },
            off(e, t) {
              e === `connectionQualityChanged` && (Te.current = Te.current.filter((e) => e !== t));
            },
          },
          getActiveDevice: (e) => {
            switch (e) {
              case `audioinput`:
                return se.current;
              case `videoinput`:
                return ce.current;
              case `audiooutput`:
                return k.current;
            }
          },
          disconnect: async function () {
            n.getState().hadConversationActivity && In(r);
            let e = r.get(V);
            (I.current?.(),
              (I.current = void 0),
              f.current.abort(),
              (f.current = new AbortController()),
              (G.current = !1),
              r.set(x, !1),
              Se.current?.(),
              (Se.current = void 0),
              Q.abortPendingNegotiation(`Disconnecting`),
              B.current?.stop(),
              (B.current = void 0),
              (Ee.current = !0),
              i.closeAllStreams(r).catch(() => {}),
              Me(),
              j.current?.track.stop(),
              pe(void 0),
              me(void 0),
              z(),
              l(r, () => {
                r.set(it, null);
              }),
              (q.current &&= (q.current.close(), void 0)),
              (D.current = null),
              (Ae.current = void 0),
              (H.current = void 0),
              (re.current = void 0),
              (E.current = void 0),
              we(),
              (d.current &&=
                (d.current.pause(), (d.current.srcObject = null), d.current.remove(), null)),
              ge(null),
              await Ve());
            let { isVoiceModeActive: t } = n.getState(),
              a = r.get(V);
            t && a === e && (ge(W.Disconnected), R.disconnected.forEach((e) => e()));
          },
          name: ``,
          switchActiveDevice: async (e, t, n) => {
            if (A.current !== W.Connected)
              return (
                P.debug(
                  `[transceiver] Attempt to switch device when not connected, current state is`,
                  {
                    safe: {},
                    sensitive: { detail: A.current },
                  },
                ),
                !1
              );
            let i = f.current.signal;
            try {
              switch (e) {
                case `audioinput`: {
                  let e = await Y(t, { connectionAttemptSignal: i, replaceExistingTrack: !0 });
                  return (
                    i.throwIfAborted(),
                    De(e),
                    hn({ scope: r, room: g ?? null, expectedVoiceSessionId: r.get(V) }),
                    !0
                  );
                }
                case `videoinput`:
                  return (await ze(`camera`, t), !0);
                case `audiooutput`:
                  return (
                    await d.current?.setSinkId(t),
                    (k.current = t),
                    p.current?.setAudioOutputDeviceId(t),
                    hn({ scope: r, room: g ?? null, expectedVoiceSessionId: r.get(V) }),
                    !0
                  );
              }
            } catch (t) {
              return (
                P.debug(`[transceiver] Failed to switch device`, {
                  safe: { kind: e },
                  sensitive: { detail: t },
                }),
                !1
              );
            }
          },
          on(e, t) {
            R[e].push(t);
          },
          off(e, t) {
            switch (e) {
              case `connected`:
                R.connected = R.connected.filter((e) => e !== t);
                break;
              case `disconnected`:
                R.disconnected = R.disconnected.filter((e) => e !== t);
                break;
              case `dataReceived`:
                R.dataReceived = R.dataReceived.filter((e) => e !== t);
                break;
              case `dataChannelOpen`:
                R.dataChannelOpen = R.dataChannelOpen.filter((e) => e !== t);
                break;
              case `trackPublished`:
                R.trackPublished = R.trackPublished.filter((e) => e !== t);
                break;
              case `connectionQualityChanged`:
                R.connectionQualityChanged = R.connectionQualityChanged.filter((e) => e !== t);
            }
          },
          state: W.Disconnected,
          numParticipants: 0,
          activeSpeakers: [],
        };
        let G = $(!1),
          K = () => {
            let e = Ce.current,
              t = D.current;
            !L.current &&
              e &&
              g &&
              be.current?.readyState === `open` &&
              ((L.current = !0),
              (Ce.current = void 0),
              un(g, n, `microphone`, e.isMuted ? `muted` : `live`).catch((e) =>
                P.debug(`[voice] Initial microphone state could not be published`, {
                  safe: {},
                  sensitive: { error: e },
                }),
              ),
              t != null && hn({ scope: r, room: g, expectedVoiceSessionId: t.voice_session_id }));
          },
          Fe = (e) => {
            ((Ce.current = e), K());
          },
          Ie = (e) => {
            g &&
              be.current?.readyState === `open` &&
              dn({
                room: g,
                metrics: {
                  output_audio_first_chunk_received_ts: e.outputAudioFirstChunkReceivedTs,
                  output_audio_playout_start_ts: e.outputAudioPlayoutStartTs,
                  output_audio_buffer_depth_ms: e.outputAudioBufferDepthMs,
                  service_rtt_ms: e.serviceRttMs,
                  output_audio_bytes_received: e.outputAudioBytesReceived,
                  output_audio_packets_received: e.outputAudioPacketsReceived,
                  output_audio_packets_lost: e.outputAudioPacketsLost,
                  output_audio_silent_gap_ms: e.outputAudioSilentGapMs,
                  output_audio_non_silent_gap_ms: e.outputAudioNonSilentGapMs,
                  output_audio_received_rtpts: e.outputAudioReceivedRtpts,
                },
              }).catch((e) => {
                P.debug(`[transceiver] Failed to publish client metrics sample`, {
                  safe: {},
                  sensitive: { error: e },
                });
              });
          },
          q = $(void 0),
          J = () => {
            try {
              return (
                (q.current = q.current ?? Ot.getFreshPeerConnection(`voice-mode`)), q.current
              );
            } catch (e) {
              let t = ct.reportedVoiceMode(r, { voiceMode: D.current?.voice_mode });
              throw (
                N(r, xe, {
                  voiceMetadata: {
                    mode: t,
                    sessionId: D.current?.voice_session_id ?? void 0,
                    style: D.current?.voice ?? void 0,
                  },
                  errorBucket: Pe.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_BUCKET_CLIENT,
                  errorType:
                    Le.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_PEER_CONNECTION_CREATION_FAILED,
                }),
                e
              );
            }
          },
          Re = (e, t) => {
            (U.forEach((t) => t(e)),
              _e((n) =>
                le(n, (n) => {
                  n &&
                    ((n.localParticipant.isMicrophoneEnabled = !e),
                    (n.localParticipant.isMicrophoneForceMuted = t),
                    e
                      ? (n.activeSpeakers = n.activeSpeakers.filter((e) => e.identity !== Gn))
                      : n.activeSpeakers.some((e) => e.identity === Gn) ||
                        n.activeSpeakers.push({ identity: Gn }));
                }),
              ));
          },
          Y = async (
            t,
            { connectionAttemptSignal: l = f.current.signal, replaceExistingTrack: u = !1 } = {},
          ) => {
            let d = t,
              m = await te?.({ deviceId: d });
            (l.aborted &&
              (m?.cleanup?.(), m?.stream.getTracks().forEach((e) => e.stop()), l.throwIfAborted()),
              m ||
                (d || ((d = await c()), l.throwIfAborted()),
                (m = {
                  stream: await i.consumeUserMedia(r, {
                    audio: {
                      ...(ct.sessionType(r) === `wm` ? e.getAudioConstraintsOverride$(r) : {}),
                      ...(d ? { deviceId: { exact: d } } : {}),
                    },
                  }),
                }),
                l.aborted &&
                  (m.cleanup?.(),
                  m.stream.getTracks().forEach((e) => e.stop()),
                  l.throwIfAborted())));
            let {
                cleanup: h,
                forceMute: g = !1,
                microphoneDeviceId: _,
                preserveMute: v = !0,
                stream: ee,
              } = m,
              y = ee.getTracks();
            if (y.length !== 1)
              throw (
                h?.(), y.forEach((e) => e.stop()), Error(`Only one input is supported for now`)
              );
            let [b] = y;
            if (u) {
              let e = !1,
                t = () => {
                  (U.delete(n), !(e || j.current?.track === b) && ((e = !0), h?.(), b.stop()));
                },
                n = (e) => {
                  j.current?.track !== b && (g || v) && (b.enabled = !(g || e));
                };
              ((g || j.current?.isMuted) && n(!0),
                U.add(n),
                l.addEventListener(`abort`, t, { once: !0 }));
              try {
                (await O({ track: b }), l.throwIfAborted());
              } catch (e) {
                throw (t(), e);
              } finally {
                (U.delete(n), l.removeEventListener(`abort`, t));
              }
            }
            let { echoCancellation: x } = b.getSettings();
            (typeof x == `boolean` &&
              n.setState((e) => {
                ((e.aecEnabled = x), e.audioRoute === `unknown` && (e.audioRoute = null));
              }),
              p.current?.attachMicrophoneTrack(b),
              (se.current = _ ?? b.getSettings().deviceId),
              j.current && j.current.track !== b && (Me(), j.current.track.stop()),
              (je.current = h),
              (g || (v && j.current?.isMuted)) && (b.enabled = !1));
            let S = a(b, {
              source: s.Microphone,
              name: `user`,
              userName: `User`,
              origin: o.Local,
              mutedCb: Re,
            });
            return (pe(S), Re(S.isMuted, S.isSystemMuted), S);
          },
          ze = async (e, t) => {
            let n = f.current.signal,
              r;
            try {
              if (
                ((r = await Be(e, t)),
                n.throwIfAborted(),
                r.track.readyState === `ended` || M.current !== r)
              )
                throw new DOMException(`Video capture ended`, `AbortError`);
              De(r);
            } catch (e) {
              throw (r != null && M.current === r && (await Ve()), e);
            }
          },
          Be = async (e, t) => {
            let n = f.current.signal,
              c = ++de.current,
              l =
                e === `camera`
                  ? await i.getUserMedia(r, { video: !t || { deviceId: { exact: t } } })
                  : await i.getDisplayMedia(r);
            if (n.aborted || c !== de.current)
              throw (
                l.getTracks().forEach((e) => e.stop()),
                new DOMException(`Video capture canceled`, `AbortError`)
              );
            let u = l.getTracks();
            if (u.length !== 1)
              throw (
                u.forEach((e) => e.stop()), Error(`Only one video input is supported for now`)
              );
            let [d] = u,
              p = !1,
              m = () => {
                !p && M.current?.track !== d && ((p = !0), d.stop());
              };
            n.addEventListener(`abort`, m, { once: !0 });
            try {
              if (
                (await O({ track: d }),
                n.throwIfAborted(),
                c !== de.current || d.readyState === `ended`)
              )
                throw new DOMException(`Video capture canceled`, `AbortError`);
            } catch (e) {
              throw (m(), e);
            } finally {
              n.removeEventListener(`abort`, m);
            }
            (e === `camera` && (ce.current = d.getSettings().deviceId),
              M.current && M.current.track !== d && M.current.track.stop());
            let h = a(d, {
              source: e === `camera` ? s.Camera : s.ScreenShare,
              name: `user`,
              userName: `User`,
              origin: o.Local,
            });
            return (he(h), h);
          },
          Ve = async () => {
            if (
              ((de.current += 1),
              M.current &&
                (P.debug(`[transceiver] Stop and clear video track`),
                M.current.track.stop(),
                he(void 0),
                E.current && !E.current.stopped))
            ) {
              P.debug(`[transceiver] Stop the video transceiver`);
              try {
                await E.current.sender.replaceTrack(null);
              } catch (e) {
                P.debug(`[transceiver] Failed to stop transceiver on disconnect due to`, {
                  safe: {},
                  sensitive: { detail: e },
                });
              }
            }
          },
          He = (e) => {
            let { default_voice_mode: t, modes: n } = e,
              r = n?.find((e) => e.mode === t);
            if (!r) throw Error(`No voice status mode found for default mode ${t}`);
            return r;
          },
          Ue = ({ dataChannel: e, getEventTimestamp: t, getPeerConnectionState: i, pc: c }) => {
            let l = f.current.signal,
              { dataChannelOpen: u } = X(r);
            ((e.onopen = () => {
              if (l.aborted) return;
              (u.mark(t()), r.set(x, !0));
              let e = D.current;
              (e != null && R.dataChannelOpen.forEach((t) => t(e)),
                I.current?.(),
                (I.current = g ? jn({ scope: r, room: g }) : void 0),
                K());
            }),
              (e.onmessage = (e) => {
                if (l.aborted || typeof e.data != `string`) return;
                let t;
                try {
                  t = JSON.parse(e.data);
                } catch {
                  return;
                }
                let n = qn.safeParse(t);
                n.success &&
                  (n.data.type === `data_message`
                    ? Ne(n.data.data)
                    : n.data.type === `error` && Ne(e.data));
              }),
              (e.onclose = () => {
                l.aborted ||
                  (r.set(x, !1),
                  I.current?.(),
                  (I.current = void 0),
                  Ee.current ? (Ee.current = !1) : R.disconnected.forEach((e) => e()),
                  ye(Kn),
                  m.current?.stop({ notify: !1 }),
                  z());
              }),
              (c.oniceconnectionstatechange = () => {
                if (l.aborted) return;
                let { tcConnect: e } = X(r),
                  a = A.current,
                  { iceConnectionState: o } = i(),
                  s = Vn(o),
                  {
                    voiceMode: c,
                    sessionType: u,
                    server: { voiceBackend: d },
                  } = n.getState(),
                  f = ct.reportedVoiceMode(r, { voiceMode: c, sessionType: u, voiceBackend: d });
                (a === W.Connecting && s === W.Disconnected
                  ? (e.isStarted() && e.fail(),
                    N(r, xe, {
                      voiceMetadata: {
                        mode: f,
                        sessionId: D.current?.voice_session_id ?? void 0,
                        style: D.current?.voice ?? void 0,
                      },
                      errorType:
                        Le.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_CONNECTION_ESTABLISHMENT_FAILED,
                    }))
                  : !Ee.current &&
                    a === W.Connected &&
                    s === W.Disconnected &&
                    N(r, xe, {
                      voiceMetadata: {
                        mode: f,
                        sessionId: D.current?.voice_session_id ?? void 0,
                        style: D.current?.voice ?? void 0,
                      },
                      errorBucket: Pe.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_BUCKET_SERVER,
                      errorType:
                        Le.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_CONNECTION_LOST_AFTER_ESTABLISHED,
                    }),
                  s === W.Connected && (e.end(t()), R.connected.forEach((e) => e())),
                  ge(s),
                  n.setState((e) => {
                    e.server.connectionState = s;
                  }));
              }),
              (c.ontrack = (e) => {
                if (l.aborted) return;
                let t = d.current;
                if (t == null) return;
                let r = e.streams[0];
                t.srcObject = r;
                try {
                  t.play()?.catch((e) => ae(t, e));
                } catch (e) {
                  ae(t, e);
                }
                let i = r.getTracks();
                if (i.length !== 1)
                  throw (
                    P.debug(
                      `[transceiver] Only one remote track is supported for now, detected these tracks`,
                      { safe: {}, sensitive: { detail: i } },
                    ),
                    Error(`Only one remote track is supported for transceiver`)
                  );
                let [c] = i;
                (p.current?.attachAudioElement(t), m.current?.attachTrack(c));
                let u = a(c, {
                  source: s.Microphone,
                  name: n.getState().voiceMode === `advanced` ? `audio` : `shout`,
                  userName: `Assistant`,
                  origin: o.Remote,
                });
                (me(u),
                  De(u),
                  _e((e) =>
                    le(e, (e) => {
                      e && (e.numParticipants = 2);
                    }),
                  ),
                  ve(Kn));
              }));
          },
          We = (e) => {
            if (!e && E.current && !E.current.stopped) {
              let e = J();
              (E.current.stop(), e.removeTrack(E.current.sender));
            }
            let t = ft(r) ? kt.bufferApplyEventHandlers(r, e, Ue) : Ue,
              n = f.current.signal,
              i = Nt.preConnectionSetup(r, {
                applyEventHandlers: t,
                existingConnection: e,
                getPeerConnection: J,
                onDataChannelCreated: (e) => {
                  ((be.current = e), r.set(x, e.readyState === `open`));
                },
                onPeerConnectionCreated: (e) => {
                  (n.throwIfAborted(), (q.current = e));
                },
                onTransceiverCreated: (e, t) => {
                  e === `audio` ? (re.current = t) : (E.current = t);
                },
                timings: X(r),
              }).then(
                (e) => (
                  n.aborted &&
                    (e.stopMonitoring(), e.dataChannel.close(), e.pc.close(), n.throwIfAborted()),
                  e
                ),
              );
            return (i.catch(() => {}), i);
          },
          Ge = (e = f.current.signal) => {
            let { _peerConnection: t } = X(r);
            t.audioInputAcquisition.start();
            let n = Y(void 0, { connectionAttemptSignal: e });
            return (
              n.then(
                () => t.audioInputAcquisition.end(),
                () => {},
              ),
              { completeAudioSetup: async () => ({ microphoneTrack: await n }) }
            );
          },
          Ke = () => {
            let { _peerConnection: e } = X(r);
            e.qualityMonitorSetup.start();
            let t = J();
            (B.current && B.current.stop(),
              (B.current = new Dn(t, (e) => {
                let t =
                  A.current &&
                  [W.Disconnected, W.Reconnecting, W.SignalReconnecting].includes(A.current);
                (R.connectionQualityChanged.forEach((n) => n(t ? Z.LOST : e.general)),
                  Te.current.forEach((n) => n(t ? Z.LOST : e.local)));
              })),
              B.current.start(),
              e.qualityMonitorSetup.end());
          },
          qe = async ({ waitForMicrophone: e = !1 } = {}) => {
            let t = f.current.signal;
            (we(), (H.current = Ge(t)));
            let n = H.current.completeAudioSetup();
            (e && (await n, t.throwIfAborted()), (Ae.current = We()), await n);
          },
          Je = async (e, t, i, a) => {
            let { _peerConnection: o, _postConnect: s, tcConnect: c } = X(r);
            o.postConnectionSetup.start();
            let l =
              i.type === `race`
                ? i.ready
                : (async () => {
                    let e = await s.getResponseText.timeAsync(() => i.httpResponse.text());
                    return (
                      await s.setRemoteDescription.timeAsync(() =>
                        i.preparedConnection.pc.setRemoteDescription({ sdp: e, type: `answer` }),
                      ),
                      i.preparedConnection
                    );
                  })();
            (l.catch(() => {}),
              c.start(),
              (H.current ||=
                (P.debug(`[transceiver] Audio input setup step not executed for initial TC offer!`),
                Ge(a))));
            let { completeAudioSetup: u } = H.current,
              d;
            try {
              ({ microphoneTrack: d } = await u());
            } catch (e) {
              if (a.aborted) return;
              throw e;
            }
            if (a.aborted) return;
            (i.type === `race`
              ? i.setAudioTrack(d.track)
              : o.audioTransceiverSetup
                  .timeAsync(() => O({ track: d.track, initialSetup: !0 }))
                  .catch((e) => {
                    P.debug(`[transceiver] Failed to attach the initial microphone track`, {
                      safe: {},
                      sensitive: { error: e },
                    });
                  }),
              Fe(d),
              p.current?.attachMicrophoneTrack(d.track),
              De(d),
              n.setState((n) => {
                ((n.style = e.voice),
                  (n.conversationId = e.conversation_id ?? t.conversationId),
                  (n.voiceSessionId = e.voice_session_id),
                  (n.voiceMode = e.voice_mode));
              }));
            let f;
            try {
              f = await l;
            } catch (e) {
              if (a.aborted) return;
              throw (
                c.isStarted() && c.fail(),
                (G.current = !1),
                ge(W.Disconnected),
                n.setState((e) => {
                  e.server.connectionState = W.Disconnected;
                }),
                z(),
                o.postConnectionSetup.end(),
                e
              );
            }
            a.aborted ||
              ((G.current = !1),
              ge(W.Connected),
              Ke(),
              Se.current?.(),
              (Se.current = f.stopMonitoring),
              f.startMonitoring({
                onClientMetricsSample: Ie,
                getReportedVoiceMode: () => {
                  let {
                    voiceMode: e,
                    sessionType: t,
                    server: { voiceBackend: i },
                  } = n.getState();
                  return ct.reportedVoiceMode(r, { voiceMode: e, sessionType: t, voiceBackend: i });
                },
                voiceSessionId: e.voice_session_id,
              }),
              o.postConnectionSetup.end());
          },
          Ye = () => {
            if (d.current == null) {
              let e = document.createElement(`audio`);
              ((e.autoplay = !0), e.setAttribute(`playsinline`, ``), (d.current = e));
            }
            return d.current;
          };
        return {
          get room() {
            return g;
          },
          room$: y,
          connectionState$: b,
          isDataChannelOpen$: x,
          tracks$: ee,
          getConnectionState: F,
          getAudioGapSummary: ke,
          initVoiceMode: async (e, t) => {
            if (G.current)
              throw Error(`Not ready to connect, ${JSON.stringify({ isConnecting: G.current })}`);
            let i = f.current.signal;
            try {
              (l(r, () => {
                r.set(it, null);
              }),
                (D.current = e));
              let a = Ye();
              if (
                ((a.muted = !1), we(), (G.current = !0), (Ee.current = !1), k.current !== void 0)
              ) {
                try {
                  await a.setSinkId(k.current);
                } catch (e) {
                  if (!(e instanceof DOMException) || e.name !== `NotFoundError`) throw e;
                  (P.debug(
                    `[transceiver] Previous audio output device is no longer available; using the system default`,
                    { safe: {}, sensitive: { error: e } },
                  ),
                    (k.current = void 0));
                }
                i.throwIfAborted();
              }
              let o = await mt.getVoiceAccessToken();
              i.throwIfAborted();
              let s = ct.sessionType(r);
              (await Oe(st(s), i), i.throwIfAborted());
              let { _preConnect: c } = X(r);
              (jt(r, e, s),
                (e.deprecate_celsius = Dt(r, {
                  sessionType: s,
                  voiceMode: e.voice_mode,
                  chatMode: e.chat_mode,
                  deprecateCelsius: e.deprecate_celsius,
                  disableExposureLog: !1,
                })),
                n.setState({ deprecateCelsius: e.deprecate_celsius }),
                (H.current = H.current ?? Ge(i)));
              let u = (Ae.current ??= We()),
                d = c.createAbortSignal.time(() => Q.beginNegotiation()),
                f = {
                  mode: ct.reportedVoiceMode(r, { voiceMode: e.voice_mode, sessionType: s }),
                  sessionId: e.voice_session_id ?? void 0,
                  style: e.voice ?? void 0,
                },
                p = ft(r)
                  ? kt.raceCache(r, s, e, {
                      accessToken: o,
                      eventSource: t.eventSource,
                      freshConnectionBundle: u,
                      preConnectionSetup: We,
                      proofOfWorkAnswer: t.proofOfWorkAnswer,
                      signal: d,
                      voiceMetadata: f,
                    })
                  : { type: `raceSkipped` };
              p.type === `raceSkipped` && kt.activateFreshCandidateEventHandlers(u);
              let m;
              if (p.type === `raceStarted`)
                (p.futureWinner.then(
                  () => Q.clearNegotiation(d),
                  () => Q.clearNegotiation(d),
                ),
                  (m = { ready: p.futureWinner, setAudioTrack: p.setAudioTrack, type: `race` }));
              else {
                let n = await u;
                i.throwIfAborted();
                let a = await vt.startTransceiverSession(r, {
                  accessToken: o,
                  dataChannelId: 0,
                  eventSource: t.eventSource,
                  offer: n.offer,
                  payload: e,
                  proofOfWorkAnswer: t.proofOfWorkAnswer,
                  signal: d,
                  voiceMetadata: f,
                });
                (i.throwIfAborted(),
                  Q.clearNegotiation(d),
                  (m = { httpResponse: a, preparedConnection: n, type: `regular` }));
              }
              Ae.current === u && (Ae.current = void 0);
              let h = Je(e, t, m, i).catch((e) => {
                throw (
                  i.aborted || (t.onConnectionSetupError?.(e), g?.disconnect().catch(() => {})), e
                );
              });
              return (
                h.catch(() => {}),
                {
                  connectionSetupPromise: m.type === `race` ? h : void 0,
                  type: `transceiver`,
                  success: !0,
                }
              );
            } catch (e) {
              throw (
                i.aborted ||
                  ((G.current = !1),
                  t.onConnectionSetupError?.(e),
                  g?.disconnect().catch(() => {})),
                e
              );
            }
          },
          selectVoiceModeMetadata: He,
          preSignallingSetup: qe,
          setTryAcquireMicrophoneInput(e) {
            te = e;
          },
          async dispose() {
            g && (await g.disconnect());
          },
        };
      }),
      (Zn = new WeakMap()));
  }))();
}
function $n(e, t, n) {
  let i = e.get(V);
  if (!i.trim()) return Promise.resolve();
  let a = e.get(rr, void 0),
    o = a.get(i);
  if (o != null) return o;
  let s = L(e),
    {
      session: c,
      conversationStart: l,
      sessionConnected: u,
      visuallyConnected: d,
      userAborted: f,
      postCallCommitWait: p,
    } = X(e);
  (c.end(), p.isStarted() && !p.isEnded() && p.end(), l.isSuccessful() || f.mark());
  let m = Qt(e),
    g = s.getState().voiceSessionId ? nn(e) : {},
    { metrics: v, voiceMode: ee, sessionType: y, style: b, server: x } = s.getState(),
    te = ct.reportedVoiceMode(e, {
      voiceMode: ee,
      sessionType: y,
      voiceBackend: x.voiceBackend,
      reason: t,
    }),
    S = c.getStartAsTimestamp(),
    C = c.getEndAsTimestamp(),
    w = u.getMarkAsTimestamp(),
    T = S !== void 0 && C !== void 0 ? C - S : void 0,
    ne = C !== void 0 && w !== void 0 && C >= w ? C - w : void 0,
    re = e.get(nr),
    E = Hn(e).getAudioGapSummary(),
    ie = {
      voiceMode: te,
      voiceMetadata: { style: b },
      voiceSessionId: i,
      protocol: `transceiver`,
      sessionStartTsMs: S,
      sessionEndTsMs: C,
      sessionConnectedTsMs: w,
      sessionDurationMs: T,
      connectedDurationMs: ne,
      ...m,
      ...g,
      ...qt(e),
      numOfTurnsSpeaking: r(v.numSpeaking),
      numOfTurnsThinking: r(v.numThinking),
      numOfTurnsListening: r(v.numListening),
      sessionEndReason: tr(t),
      wasConnectedAtTimeOfExit: x.connectionState === W.Connected,
      timeToVisuallyConnectedMs: d.getDuration() ?? void 0,
      visuallyConnectedTsMs: d.getMarkAsTimestamp() ?? void 0,
      ...(E?.thresholdMs === void 0
        ? {}
        : {
            audioGapThresholdMs: E.thresholdMs,
            silentAudioGapTotalMs: E.silentTotalMs,
            silentAudioGapCount: r(E.silentCount),
            nonSilentAudioGapTotalMs: E.nonSilentTotalMs,
            nonSilentAudioGapCount: r(E.nonSilentCount),
            remoteOutputAudioTrackDurationMs: E.remoteOutputAudioTrackDurationMs,
            webrtcStatsPollingIntervalMs: E.webrtcStatsPollingIntervalMs,
            activeOutputAudioDurationMs: E.activeOutputAudioDurationMs,
            activeOutputAudioRmsThresholdRatio: E.activeOutputAudioRmsThresholdRatio,
          }),
      ...(E?.endSessionNetworkTelemetry
        ? {
            ...E.endSessionNetworkTelemetry,
            packetsLostCount: _(E.endSessionNetworkTelemetry.packetsLostCount),
            packetsReceivedCount: r(E.endSessionNetworkTelemetry.packetsReceivedCount),
            stunRequestsSentCount: r(E.endSessionNetworkTelemetry.stunRequestsSentCount),
            stunResponsesReceivedCount: r(E.endSessionNetworkTelemetry.stunResponsesReceivedCount),
          }
        : {}),
      productExperience: re,
    },
    D = { ...yn(e, te, i), productExperience: re },
    ae = e.get(h),
    O = gn(n, { snapshotActiveDevices: !0 })
      .then(
        (e) => (
          ae.logProductEvent(De, { ...ie, finalAudioRoute: e }),
          ae.logProductEvent(R, D),
          ae.flush(ir)
        ),
      )
      .catch((e) => {
        P.debug(`[voice] Failed to log session end analytics`, {
          safe: {},
          sensitive: { error: e },
        });
      });
  if ((a.set(i, O), a.size > 100)) {
    let e = a.keys().next().value;
    e != null && a.delete(e);
  }
  return O;
}
function er(e, t, r, a, o) {
  let s = e.get(_e, r.conversationId),
    c = e.get(Oe, r.conversationId),
    l = c === `tpp` || c === `flora`,
    u = e.get(Ie, r.conversationId),
    d =
      u == null
        ? e.get(we, r.conversationId)
        : (e.get(B, u) ?? e.query.getData(Fe, u)?.default_model_slug) != null,
    f = s && (l || d),
    p = t instanceof A ? t : void 0,
    m = p?.diagnosticError ?? t,
    h = m instanceof me ? m : void 0,
    g = p == null ? h?.status : p.explicitResponseStatus,
    v;
  return (
    (v = p?.errorKind === `network` || (typeof g != `number` && n(m))),
    {
      toastId: `start_voice_mode_failure`,
      conversationId: i.parse(a),
      userFacingError: {
        surface: Me(f ? l : null),
        errorCategory: Ee.CHATGPT_USER_FACING_ERROR_CATEGORY_VOICE,
        operation: `start_voice_mode`,
        voiceSessionId: i.parse(o),
        errorCode: ar.parse(h == null ? p?.errorCode : h.code),
        statusCode: !v && g != null ? _(g) : void 0,
        isNetworkError: v,
        requestId: i.parse(h?.requestId),
        serverRequestId: i.parse(h?.xOaiRequestId),
        backingError: { className: de.parse(m instanceof Error ? m.name : void 0) },
      },
    }
  );
}
function tr(e) {
  return e === $e.UserNavigatedAway
    ? `conversation_nav`
    : e === $e.UserSwitchedToStandard
      ? `voice_changed`
      : e;
}
var nr, rr, ir, ar;
function or() {
  return (or = e(() => {
    (fe(),
      J(),
      Se(),
      d(),
      b(),
      ke(),
      Ce(),
      ve(),
      he(),
      g(),
      y(),
      T(),
      M(),
      ot(),
      Qe(),
      q(),
      K(),
      U(),
      k(),
      vn(),
      bn(),
      lt(),
      Qn(),
      sn(),
      (nr = oe(C, () => void 0)),
      (rr = O(C, (e) => new Map())),
      (ir = 250),
      (ar = f()
        .max(64)
        .regex(/^(?:[0-9]+|[a-z][a-z0-9_-]*|file\.(?:processing|indexing)\.(?:error|cancelled))$/)
        .optional()
        .catch(void 0)));
  }))();
}
function sr(e) {
  let t = e.chain.get(C.id) ?? e.node,
    n = dr.get(t);
  return (n ?? ((n = Promise.resolve(`unknown`)), dr.set(t, n)), n);
}
async function cr(e) {
  for (;;) {
    let t = sr(e),
      n = await t;
    if (t === sr(e)) return n;
  }
}
function lr(e, t, { allowOverride: n = !0 } = {}) {
  let r = X(e).session.isStarted();
  if (n || !r) {
    let n = at(e);
    (e.set(nr, void 0), Je(e));
    let r = ut();
    (dr.set(e.chain.get(C.id) ?? e.node, r),
      r.then((t) => {
        r === sr(e) && e.set(Ye, t);
      }),
      n.session.start(),
      n.surfaceToStart.start(),
      e.set(Xe, t));
    let i = dt();
    e.set(V, i);
  }
}
function ur(e, { resetTimings: t = !1 } = {}) {
  if (t) {
    (at(e), Je(e), dr.set(e.chain.get(C.id) ?? e.node, Promise.resolve(`unknown`)), ge(e));
    return;
  }
  X(e).session.reset();
}
var dr;
function fr() {
  return (fr = e(() => {
    (T(), ot(), q(), Ze(), or(), Pt(), Et(), (dr = new WeakMap()));
  }))();
}
export {
  Bt as A,
  un as C,
  Ht as D,
  Vt as E,
  tn as F,
  Yt as M,
  Rt as N,
  sn as O,
  zt as P,
  mn as S,
  ln as T,
  Pn as _,
  er as a,
  Z as b,
  nr as c,
  Hn as d,
  Qn as f,
  Fn as g,
  Bn as h,
  cr as i,
  Xt as j,
  Jt as k,
  Wn as l,
  Ln as m,
  fr as n,
  or as o,
  In as p,
  lr as r,
  $n as s,
  ur as t,
  Un as u,
  Q as v,
  cn as w,
  xn as x,
  An as y,
};
//# sourceMappingURL=mark-session-create-4defeaf3f500.js.map
