const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./entry-bc1dafa3b0f1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Rt as t,
  $it as n,
  $st as r,
  CFt as i,
  DCt as a,
  EFt as o,
  Git as s,
  HFt as c,
  Hit as l,
  Lit as u,
  NLt as d,
  OFt as f,
  Pit as p,
  Qit as m,
  Qst as h,
  RFt as g,
  TCt as _,
  ULt as v,
  Uit as y,
  VRt as b,
  Vit as x,
  ZSt as S,
  eat as C,
  hRt as w,
  jit as T,
  kCt as E,
  kFt as ee,
  kLt as te,
  kRt as D,
  pwt as O,
  sct as ne,
  tht as re,
  zFt as k,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  APn as A,
  B1n as j,
  BEt as M,
  BVn as ie,
  CGn as ae,
  CMr as oe,
  CPn as se,
  E2n as ce,
  EKn as N,
  FPn as P,
  GJt as F,
  GVn as le,
  HEt as I,
  IWn as L,
  KJt as ue,
  KUn as R,
  MGn as de,
  NPn as z,
  O2n as fe,
  S0n as pe,
  SPn as B,
  TIr as me,
  UEt as he,
  UJt as ge,
  VEt as _e,
  VPn as V,
  VRr as ve,
  WNn as ye,
  Y1n as be,
  Ydr as xe,
  Z1n as Se,
  _Wn as Ce,
  aWn as H,
  bKn as we,
  cBr as Te,
  cWn as Ee,
  dZ as De,
  fZ as U,
  gWn as Oe,
  hWn as ke,
  iRr as Ae,
  iUn as W,
  iWn as G,
  jPn as K,
  k2n as je,
  lBr as q,
  lWn as Me,
  lZ as Ne,
  mWn as Pe,
  n$n as J,
  oWn as Fe,
  q1n as Ie,
  rPn as Le,
  sWn as Re,
  tyr as ze,
  uBr as Be,
  uZ as Ve,
  wIr as He,
  wLr as Ue,
  xKn as Y,
  xMr as X,
  xVn as We,
  yMr as Ge,
  yVn as Ke,
  zEt as Z,
} from "./app-initial-ad16eaadf81f.js";
import {
  ar as qe,
  cr as Je,
  dr as Ye,
  fr as Xe,
  hr as Ze,
  nr as Qe,
  pr as $e,
  rr as et,
  sr as tt,
  tr as nt,
  ur as rt,
} from "./app-primary-3e00728c2a4c.js";
import { i as it, n as at, o as ot, t as st } from "./timing-signals-6301d26a3c55.js";
import { n as ct, t as lt } from "./command-state-717db9deb198.js";
import { a as ut, o as dt, r as ft } from "./preferences-c6a8f9117081.js";
import { i as pt, o as mt, r as ht } from "./dsp-bd00ef6e2983.js";
import { a as gt, r as _t, t as vt } from "./voice-configuration-manager-f7e817b94a05.js";
import {
  B as yt,
  D as bt,
  E as xt,
  F as St,
  I as Ct,
  J as wt,
  M as Tt,
  N as Et,
  P as Dt,
  S as Ot,
  T as kt,
  U as At,
  b as jt,
  f as Mt,
  h as Nt,
  k as Pt,
  l as Ft,
  m as It,
  p as Lt,
  q as Rt,
  r as zt,
  t as Bt,
  u as Vt,
  w as Ht,
  x as Ut,
  y as Wt,
} from "./voice-session-parameters-aab04323d949.js";
function Gt(e) {
  let t = B(e).getState();
  return t.voiceSessionId
    ? {
        voiceSessionId: t.voiceSessionId,
        conversationId: t.earlyServerThreadId ?? t.conversationId ?? void 0,
      }
    : null;
}
function Kt(e, t) {
  let r = Gt(e);
  if (r == null) return;
  let i = 0;
  (B(e).setState((e) => {
    ((e.metrics.voiceNavChangeSessionIndex += 1), (i = e.metrics.voiceNavChangeSessionIndex));
  }),
    X(e, Ye, { ...r, stateName: t, sessionIndex: n(i) }));
}
function qt(e) {
  Kt(e, Xe.CHATGPT_VOICE_NAVIGATION_STATE_PLUS_MENU_OPEN);
}
function Jt(e, { kind: t }) {
  (e.set(hn, { voiceSessionId: B(e).getState().voiceSessionId, kind: t }),
    Kt(
      e,
      t === `file`
        ? Xe.CHATGPT_VOICE_NAVIGATION_STATE_FILES_OPEN
        : Xe.CHATGPT_VOICE_NAVIGATION_STATE_GALLERY_OPEN,
    ));
}
function Yt(e) {
  let t = Qt(e);
  t != null && $t(e, { kind: t, outcome: `canceled` });
}
function Xt(e, { uploads: t }) {
  let n = Qt(e),
    r = B(e).getState().voiceSessionId,
    i = new Set();
  if (n === `photo`) i.add(`photo`);
  else for (let e of t) i.add(e.file.type.startsWith(`image/`) ? `photo` : `file`);
  return (t, n) => {
    if (B(e).getState().voiceSessionId === r) for (let r of i) $t(e, { kind: r, outcome: t, errorDetail: n });
  };
}
function Zt(e) {
  let t = !1;
  return (n, r) => {
    !gt(B(e).getState().sessionType) ||
      (n === `canceled` && t) ||
      ((t = !0), $t(e, { kind: `composer_text`, outcome: n, errorDetail: r }));
  };
}
function Qt(e) {
  let t = e.get(hn);
  return (e.set(hn, null), t?.voiceSessionId === B(e).getState().voiceSessionId ? t.kind : null);
}
function $t(e, { kind: t, outcome: n, errorDetail: r }) {
  let i = Gt(e);
  if (i == null) return;
  let a = { ...i, outcome: en(n), errorDetail: r?.trim().slice(0, 512) || void 0 };
  switch (t) {
    case `composer_text`:
      X(e, qe, a);
      break;
    case `file`:
      X(e, tt, a);
      break;
    case `photo`:
      X(e, $e, a);
  }
}
function en(e) {
  switch (e) {
    case `canceled`:
      return Je.CHATGPT_VOICE_INPUT_OUTCOME_CANCELED;
    case `error`:
      return Je.CHATGPT_VOICE_INPUT_OUTCOME_ERROR;
    case `success`:
      return Je.CHATGPT_VOICE_INPUT_OUTCOME_SUCCESS;
  }
}
function tn(e, { audioRoute: t, analyticsContext: n, nowMs: r = Date.now() }) {
  let { inputDevice: i, outputDevice: a } = t;
  if (!i?.name && !a?.name) return;
  let o = n ?? Gt(e);
  if (o == null) return;
  let s = [];
  B(e).setState((e) => {
    (i?.name &&
      e.metrics.lastAudioInputDeviceName !== i.name &&
      ((e.metrics.lastAudioInputDeviceName = i.name),
      s.push({
        connectionType: i.connectionType,
        direction: Ee.CHATGPT_VOICE_AUDIO_DEVICE_DIRECTION_INPUT,
        name: i.name,
      })),
      a?.name &&
        e.metrics.lastAudioOutputDeviceName !== a.name &&
        ((e.metrics.lastAudioOutputDeviceName = a.name),
        s.push({
          connectionType: a.connectionType,
          direction: Ee.CHATGPT_VOICE_AUDIO_DEVICE_DIRECTION_OUTPUT,
          name: a.name,
        })),
      s.length !== 0 &&
        ((e.metrics.audioRouteChangeCount += 1),
        (e.metrics.lastAudioRouteChangeTsMs = r),
        (e.metrics.lastAudioRouteChangeWasBackgrounded = e.metrics.backgroundedAtMs != null)));
  });
  for (let t of s)
    X(e, Fe, {
      ...o,
      deviceCategory: t.connectionType ?? Re.CHATGPT_VOICE_AUDIO_DEVICE_CONNECTION_TYPE_UNSPECIFIED,
      deviceDirection: t.direction,
      deviceName: t.name,
    });
}
function nn(e) {
  let {
    audioRouteChangeCount: t,
    lastAudioRouteChangeTsMs: n,
    lastAudioRouteChangeWasBackgrounded: r,
  } = B(e).getState().metrics;
  return {
    ...(t > 0 ? { audioRouteChangeCount: t } : {}),
    ...(n == null ? {} : { lastAudioRouteChangeTsMs: n }),
    ...(r == null ? {} : { lastAudioRouteChangeWasBackgrounded: r }),
  };
}
function rn(e, { message: t }) {
  let n = pn.safeParse(t.metadata?.attachments ?? []);
  if (!n.success) return !1;
  let r = n.data.filter(({ is_big_paste: e }) => !e),
    i = mn.safeParse(t.content),
    a =
      r.some(({ mime_type: e }) => e?.startsWith(`image/`)) ||
      (i.success &&
        i.data.parts.some((e) => typeof e != `string` && e.content_type === `image_asset_pointer`)),
    o = r.some(({ mime_type: e }) => !e?.startsWith(`image/`));
  return (
    a && $t(e, { kind: `photo`, outcome: `success` }),
    o && $t(e, { kind: `file`, outcome: `success` }),
    a || o
  );
}
function an(e, t) {
  let n = Gt(e);
  n != null && X(e, rt, { ...n, state: t });
}
function on(e, { actor: t, state: r }) {
  let i = Gt(e);
  if (i == null) return;
  let a = 0,
    o = !1;
  (B(e).setState((e) => {
    switch (t) {
      case nt.CHATGPT_VOICE_ACTOR_USER:
        if (e.metrics.lastUserVoiceActorState === r) return;
        e.metrics.lastUserVoiceActorState = r;
        break;
      case nt.CHATGPT_VOICE_ACTOR_ASSISTANT:
        if (e.metrics.lastAssistantVoiceActorState === r) return;
        e.metrics.lastAssistantVoiceActorState = r;
        break;
      case nt.CHATGPT_VOICE_ACTOR_UNSPECIFIED:
      case nt.UNRECOGNIZED:
        return;
    }
    ((e.metrics.voiceActorStateChangeIndex += 1), (a = e.metrics.voiceActorStateChangeIndex), (o = !0));
  }),
    o && X(e, et, { ...i, actor: t, state: r, stateChangeIndex: n(a) }));
}
function sn(e, { actor: t, isSpeaking: n, nowMs: r = Date.now() }) {
  let i = B(e),
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
      on(e, {
        actor: nt.CHATGPT_VOICE_ACTOR_USER,
        state: n ? Qe.CHATGPT_VOICE_ACTOR_STATE_SPEAKING : Qe.CHATGPT_VOICE_ACTOR_STATE_LISTENING,
      }));
}
function cn(e, t = Z(e).session.getEndAsTimestamp() ?? Date.now()) {
  ln(e, t);
  let {
    userSpeakingTimeMs: r,
    assistantSpeakingTimeMs: i,
    simultaneousSpeakingTimeMs: a,
  } = B(e).getState().metrics;
  return {
    ...(r > 0 ? { userSpeakingTimeMs: n(r) } : {}),
    ...(i > 0 ? { assistantSpeakingTimeMs: n(i) } : {}),
    ...(a > 0 ? { simultaneousSpeakingTimeMs: n(a) } : {}),
  };
}
function ln(e, t) {
  B(e).setState((e) => {
    let n = e.metrics.speakingStateUpdatedAtMs;
    if (n == null || t <= n) return;
    let r = t - n;
    (e.isUserSpeaking && (e.metrics.userSpeakingTimeMs += r),
      e.isAssistantSpeaking && (e.metrics.assistantSpeakingTimeMs += r),
      e.isUserSpeaking && e.isAssistantSpeaking && (e.metrics.simultaneousSpeakingTimeMs += r),
      (e.metrics.speakingStateUpdatedAtMs = t));
  });
}
function un(e, { isForegrounded: t, nowMs: n = Date.now() }) {
  let r = Gt(e);
  if (r == null) return;
  let i = !1;
  (B(e).setState((e) => {
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
    i && X(e, t ? H : G, r));
}
function dn(e) {
  let t,
    n = B(e).subscribe(
      (e) => e.voiceSessionId,
      (n) => {
        if ((t?.(), (t = void 0), n == null || typeof document > `u`)) return;
        let r = () => {
          un(e, { isForegrounded: document.visibilityState === `visible` });
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
function fn(e, t = Z(e).session.getEndAsTimestamp() ?? Date.now()) {
  B(e).setState((e) => {
    let n = e.metrics.backgroundedAtMs;
    n == null || t <= n || ((e.metrics.backgroundTotalDurationMs += t - n), (e.metrics.backgroundedAtMs = t));
  });
  let {
    firstBackgroundTsMs: n,
    lastBackgroundTsMs: r,
    lastForegroundTsMs: i,
    backgroundEnterCount: a,
    backgroundTotalDurationMs: o,
    backgroundedAtMs: s,
  } = B(e).getState().metrics;
  return {
    ...(n == null ? {} : { firstBackgroundTsMs: n }),
    ...(r == null ? {} : { lastBackgroundTsMs: r }),
    ...(i == null ? {} : { lastForegroundTsMs: i }),
    ...(a > 0 ? { backgroundEnterCount: a } : {}),
    ...(o > 0 ? { backgroundTotalDurationMs: o } : {}),
    wasBackgroundedAtEnd: s != null,
  };
}
var pn, mn, hn;
function gn() {
  return (gn = e(() => {
    (xe(),
      L(),
      Ze(),
      S(),
      c(),
      Ge(),
      r(),
      M(),
      se(),
      (pn = te(D({ is_big_paste: d().nullish(), mime_type: b().nullish() }))),
      (mn = D({
        content_type: w(`multimodal_text`),
        parts: te(t([b(), D({ content_type: b().optional() })])),
      })),
      (hn = E(h, () => null)));
  }))();
}
async function _n({ room: e, event: t, voiceStore: n, options: r, recordInVoiceStore: i = !0 }) {
  let a = n.scope.get(N),
    o = Sn();
  (await e.localParticipant.publishData(o.encode(JSON.stringify(t)), r),
    i &&
      a === n.scope.get(N) &&
      n.setState((e) => {
        e.server.messages.push({ ...t, timestamp: new Date(), source: `local` });
      }));
}
function vn(e, t, n, r) {
  return _n({
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
function yn(e, t, n, r) {
  return _n({
    room: e,
    voiceStore: t,
    event: {
      type: z.TrackState,
      payload: { type: z.TrackState, track_id: `microphone`, media_type: `audio`, media_source: n, state: r },
    },
  });
}
async function bn({ room: e, metrics: t }) {
  let n = Sn();
  await e.localParticipant.publishData(
    n.encode(JSON.stringify({ type: z.ClientMetrics, payload: { type: z.ClientMetrics, ...t } })),
  );
}
var xn, Sn;
function Cn() {
  return (Cn = e(() => {
    (Y(), P(), (Sn = () => ((xn ||= new TextEncoder()), xn)));
  }))();
}
async function wn({ scope: e, room: t, expectedVoiceSessionId: n }) {
  if (!t) return;
  let r = await Tn(t);
  if (n === e.get(N) && r && (tn(e, { audioRoute: r }), Te(e, En)))
    try {
      await _n({
        room: t,
        voiceStore: B(e),
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
      k.debug(`[voice] Failed to publish audio route metadata`, { safe: {}, sensitive: { error: e } });
    }
}
async function Tn(e, { snapshotActiveDevices: t = !1 } = {}) {
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
      k.debug(`[voice] Failed to capture audio route metadata`, { safe: {}, sensitive: { error: e } });
    }
}
var En;
function Dn() {
  return (Dn = e(() => {
    (q(), g(), Y(), P(), se(), gn(), Cn(), (En = `2942012831`));
  }))();
}
function On(e, t, n) {
  let r = Z(e),
    i = (e) => {
      switch (e) {
        case K.Retry:
          return R.CHATGPT_SURFACE_RETRY;
        case K.LoggedOut:
          return R.CHATGPT_SURFACE_LOGGED_OUT;
        case K.Composer:
          return R.CHATGPT_SURFACE_COMPOSER;
        case K.ModalNewChat:
          return R.CHATGPT_SURFACE_MODAL_NEW_CHAT;
        case K.ModalSwitchToStandard:
          return R.CHATGPT_SURFACE_MODAL_SWITCH_TO_STANDARD;
        case K.DeepLink:
          return R.CHATGPT_SURFACE_DEEP_LINK;
        case K.ModalVoicePicker:
          return R.CHATGPT_SURFACE_MODAL_VOICE_PICKER;
        case K.WingmanVoicePicker:
          return R.CHATGPT_SURFACE_WINGMAN_HOME_TAKEOVER;
        case K.LanguageLearningWidget:
          return R.CHATGPT_SURFACE_LANGUAGE_LEARNING_WIDGET;
        case K.Unknown:
        case K.WingmanIncallPromotion:
        case K.VoiceModeDropdown:
          return R.CHATGPT_SURFACE_UNKNOWN;
      }
    },
    a = (e) => {
      switch (e) {
        case `granted`:
          return W.CHATGPT_MICROPHONE_PERMISSIONS_STATE_GRANTED;
        case `denied`:
          return W.CHATGPT_MICROPHONE_PERMISSIONS_STATE_DENIED;
        case `prompt`:
          return W.CHATGPT_MICROPHONE_PERMISSIONS_STATE_ASKED;
        case `pending`:
          return W.CHATGPT_MICROPHONE_PERMISSIONS_STATE_ASKED;
        case `unknown`:
          return W.CHATGPT_MICROPHONE_PERMISSIONS_STATE_UNSPECIFIED;
      }
    },
    o = r.sessionConnected.getMarkAsTimestamp(),
    s = r.session.getStartAsTimestamp(),
    c = !o || !s ? void 0 : o - s;
  return {
    voiceSessionId: n,
    ...St(e, n),
    ...Dt(e, n),
    instantAudioInitiallyEligible: r._instantAudio.initiallyEligible,
    instantAudioApplied: r._instantAudio.applied,
    firstUserAudioBufferTs: r._instantAudio.firstBuffer.getMarkAsTimestamp(),
    sessionCreateTime: r.session.getStartAsTimestamp(),
    sessionConnectionLatency: c,
    postCallCommitWaitStartTs: r.postCallCommitWait.getStartAsTimestamp(),
    postCallCommitWaitEndTs: r.postCallCommitWait.getEndAsTimestamp(),
    surface: i(e.get(ot)),
    microphonePermissionState: a(e.get(at)),
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
    advancedVoiceDisclosureStartTime: r._interactivePreConnect.advancedVoiceDisclosure.getStartAsTimestamp(),
    advancedVoiceDisclosureEndTime: r._interactivePreConnect.advancedVoiceDisclosure.getEndAsTimestamp(),
    voicePickerStartTime: r._interactivePreConnect.voicePicker.getStartAsTimestamp(),
    voicePickerEndTime: r._interactivePreConnect.voicePicker.getEndAsTimestamp(),
    temporaryChatNoticeStartTime: r._interactivePreConnect.temporaryChatNotice.getStartAsTimestamp(),
    temporaryChatNoticeEndTime: r._interactivePreConnect.temporaryChatNotice.getEndAsTimestamp(),
    mode: t,
  };
}
function kn() {
  return (kn = e(() => {
    (L(), M(), st(), P(), Ct());
  }))();
}
var Q;
function An() {
  return (An = e(() => {
    Q = (function (e) {
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
function jn(e) {
  return Te(e, `3867826347`);
}
function Mn() {
  return (Mn = e(() => {
    q();
  }))();
}
function Nn(e, t, n, r, i) {
  if (
    (t.throwIfAborted(),
    typeof MediaStreamTrackProcessor != `function` ||
      typeof MediaStreamTrackGenerator != `function` ||
      typeof AudioData != `function` ||
      typeof Worker != `function`)
  )
    return;
  let a = e.getAudioTracks()[0],
    o,
    s,
    c,
    l = !1,
    u = !a.enabled,
    d = !1,
    f = !1,
    p = 0,
    m,
    h = (e, t = []) => {
      c?.postMessage(e, t);
    },
    g = () => (
      (o = a.clone()),
      (o.enabled = !u),
      new MediaStreamTrackProcessor({ track: o, maxBufferSize: 1e3 }).readable
    ),
    _ = () => {
      l ||
        ((l = !0),
        t.removeEventListener(`abort`, _),
        m?.(),
        o?.stop(),
        s?.stop(),
        h({ type: `dispose` }),
        i?.(`interrupted`));
    },
    v = () => {
      l || (_(), c?.terminate(), r());
    };
  try {
    c = new Worker(
      new URL(`` + new URL(`burst.worker-50269bcd164a.js`, import.meta.url).href, `` + import.meta.url),
      { type: `module` },
    );
    let e = g();
    ((s = new MediaStreamTrackGenerator({ kind: `audio` })),
      (s.enabled = !1),
      (c.onmessage = (e) => {
        if (e.data.type === `disposed`) {
          c?.terminate();
          return;
        }
        if (!l)
          switch (e.data.type) {
            case `capture-ready`:
              if (e.data.captureId !== p) return;
              (f || ((f = !0), n()),
                !l &&
                  !u &&
                  e.data.captureId === p &&
                  s &&
                  ((s.enabled = !0), h({ type: `activate`, captureId: p })));
              break;
            case `phase`:
              !u && e.data.captureId === p && i?.(e.data.phase);
              break;
            case `error`:
              v();
          }
      }));
    let t = () => {
      (v(), c?.terminate());
    };
    ((c.onerror = t),
      (c.onmessageerror = t),
      h({ type: `start`, readable: e, writable: s.writable, captureId: p }, [e, s.writable]));
  } catch {
    (o?.stop(), s?.stop(), c?.terminate());
    return;
  }
  return (
    t.addEventListener(`abort`, _, { once: !0 }),
    {
      track: s,
      workletInitializationMs: 0,
      dispose: _,
      setMuted: (e) => {
        if (!(l || e === u)) {
          ((u = e), (s.enabled = !1), o?.stop(), (o = void 0), (p += 1));
          try {
            let e = u ? void 0 : g();
            (h({ type: `capture`, readable: e, captureId: p }, e ? [e] : []), u && i?.(`interrupted`));
          } catch {
            v();
          }
        }
      },
      releaseWhenConnected: (e) => {
        if (l || d) return;
        m?.();
        let t = () => {
          l || d || e.connectionState !== `connected` || ((d = !0), m?.(), h({ type: `release` }));
        };
        ((m = () => e.removeEventListener(`connectionstatechange`, t)),
          e.addEventListener(`connectionstatechange`, t),
          t());
      },
    }
  );
}
async function Pn(e, t, n, r, i) {
  t.throwIfAborted();
  let a = Nn(e, t, n, r, i);
  if (a != null) return a;
  let o = new AudioContext(),
    s,
    c,
    l,
    u = !1,
    d = !e.getAudioTracks()[0].enabled,
    f = 0,
    p,
    m = () => {
      u ||
        ((u = !0),
        t.removeEventListener(`abort`, m),
        p?.(),
        c?.disconnect(),
        l != null && ((l.port.onmessage = null), (l.onprocessorerror = null), l.port.close(), l.disconnect()),
        s?.stream.getAudioTracks().forEach((e) => e.stop()),
        o.close().catch(() => {}),
        i?.(`interrupted`));
    };
  t.addEventListener(`abort`, m, { once: !0 });
  try {
    ((s = o.createMediaStreamDestination()), (s.channelCount = 1));
    let [a] = s.stream.getAudioTracks(),
      h = performance.now();
    (await o.audioWorklet.addModule(Ve), t.throwIfAborted());
    let g = new AudioWorkletNode(o, De, {
        channelCount: 1,
        channelCountMode: `explicit`,
        outputChannelCount: [1],
        processorOptions: { replayRate: 2, maxBufferSeconds: 10 },
      }),
      _ = performance.now() - h;
    ((l = g),
      (a.enabled = !d),
      (g.port.onmessage = (e) => {
        u ||
          (e.data?.type === `capture-started`
            ? n()
            : e.data?.type === `phase-changed`
              ? e.data.reason === `mute`
                ? i?.(`interrupted`)
                : i?.(e.data.phase)
              : e.data?.type === `mute-applied` &&
                (e.data.muted && i?.(`interrupted`),
                e.data.requestId === f && (a.enabled = !d && !e.data.muted)));
      }),
      (g.onprocessorerror = () => {
        (m(), r());
      }));
    let v = (e) => {
      u || ((d = e), d && (a.enabled = !1), g.port.postMessage({ type: `mute`, muted: d, requestId: ++f }));
    };
    return (
      v(d),
      (c = o.createMediaStreamSource(e)),
      c.connect(g),
      g.connect(s),
      await o.resume(),
      t.throwIfAborted(),
      {
        track: a,
        workletInitializationMs: _,
        dispose: m,
        setMuted: v,
        releaseWhenConnected: (e) => {
          if (u) return;
          p?.();
          let t = () => {
            !u && e.connectionState === `connected` && (g.port.postMessage({ type: `release` }), p?.());
          };
          ((p = () => e.removeEventListener(`connectionstatechange`, t)),
            e.addEventListener(`connectionstatechange`, t),
            t());
        },
      }
    );
  } catch (e) {
    throw (m(), e);
  }
}
function Fn() {
  return (Fn = e(() => {
    (U(), Ne());
  }))();
}
function In({ packets: e, packetsLost: t, fractionLost: n, rtt: r }) {
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
function Ln(e) {
  if (e === void 0) return Q.UNKNOWN;
  let t;
  return (
    (t = e <= 0 ? 1 : e >= 100 ? 4.5 : 1 + 0.035 * e + 7e-6 * e * (e - 60) * (100 - e)),
    t > 4 ? Q.EXCELLENT : t > 3.5 ? Q.GOOD : Q.POOR
  );
}
var Rn, zn, Bn, Vn, Hn;
function Un() {
  return (Un = e(() => {
    (g(),
      An(),
      Ot(),
      (Rn = 1e3),
      (zn = 3),
      (Bn = 2e3),
      (Vn = class {
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
        audioGapSummaryTracker = new Ut();
        constructor(e, t) {
          let n = zn;
          ((this.pc = e),
            (this.cb = t),
            (this.reportTimerId = void 0),
            (this.localWindow = {
              packetsLost: new Hn(n, `cumulative`),
              fractionLost: new Hn(n, `individual`),
              rtt: new Hn(n, `individual`),
            }),
            (this.remoteWindow = {
              packetsSent: new Hn(n, `cumulative`),
              packetsLost: new Hn(n, `cumulative`),
              rtt: new Hn(n, `individual`),
            }),
            (this.reportTimestamps = {}));
        }
        start() {
          this.reportTimerId ||
            this.pollingTimerId ||
            ((this.reportTimerId = window.setInterval(this.report.bind(this), 500)),
            (this.pollingTimerId = window.setInterval(() => {
              this.poll();
            }, Rn)));
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
            let n = Date.now() - this.reportTimestamps[e.type] < Bn;
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
              Ht(e) &&
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
            this.audioGapSummaryTracker.observe(t, i, Rn));
          let o = n !== void 0 && r[n];
          o
            ? (this.remoteWindow.rtt.push(o.currentRoundTripTime),
              this.localWindow.rtt.push(o.currentRoundTripTime))
            : k.error(`QualityMonitor no candidate-pair found!`);
        }
        report() {
          if (this.stale) return this.cb({ local: Q.UNKNOWN, general: Q.UNKNOWN });
          let e = In({
              packets: void 0,
              packetsLost: this.localWindow.packetsLost.get(),
              fractionLost: this.localWindow.fractionLost.get(),
              rtt: this.localWindow.rtt.get(),
            }),
            t = [
              e,
              In({
                packets: this.remoteWindow.packetsSent.get(),
                packetsLost: this.remoteWindow.packetsLost.get(),
                fractionLost: void 0,
                rtt: this.remoteWindow.rtt.get(),
              }),
            ].filter((e) => e !== void 0),
            n = t.length > 0 ? Math.min(...t) : void 0,
            r = Ln(e),
            i = Ln(n);
          this.cb({ local: r, general: i });
        }
      }),
      (Hn = class {
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
var Wn;
function Gn() {
  return (Gn = e(() => {
    Wn = class {
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
function Kn({ scope: e, room: t }) {
  if (!Te(e, qn) || typeof navigator > `u`) return () => {};
  let n = navigator.connection;
  if (!n) return () => {};
  let r = () => {
    let r = {
      connection_type: typeof n.type == `string` && n.type.length > 0 ? n.type : void 0,
      effective_connection_type:
        typeof n.effectiveType == `string` && n.effectiveType.length > 0 ? n.effectiveType : void 0,
      downlink_mbps: typeof n.downlink == `number` && Number.isFinite(n.downlink) ? n.downlink : void 0,
      rtt_ms: typeof n.rtt == `number` && Number.isFinite(n.rtt) ? n.rtt : void 0,
      save_data: typeof n.saveData == `boolean` ? n.saveData : void 0,
    };
    Object.values(r).some((e) => e !== void 0) &&
      _n({
        room: t,
        voiceStore: B(e),
        event: { type: z.ClientMetadataUpdate, payload: { type: z.ClientMetadataUpdate, network: r } },
        options: { reliable: !0 },
      }).catch((e) => {
        k.debug(`[voice] Failed to publish network metadata`, { safe: {}, sensitive: { error: e } });
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
var qn;
function Jn() {
  return (Jn = e(() => {
    (q(), g(), P(), se(), Cn(), (qn = `2942012831`));
  }))();
}
function Yn(e) {
  return e.get(er, void 0).waitOnDisconnect();
}
function Xn(e, t, n, r = !1) {
  return e.get(er, void 0).waitBeforeStart(t, n, r);
}
function Zn(e, ...t) {
  e.get(er, void 0).discardForTreatment(t);
}
function Qn(e) {
  e.get(er, void 0).dispose();
}
var $n, er;
function tr() {
  return (tr = e(() => {
    (S(),
      ne(),
      c(),
      Ue(),
      me(),
      ze(),
      fe(),
      V(),
      r(),
      q(),
      M(),
      se(),
      ($n = D({
        type: w(`voice-conversation-commit`),
        payload: D({
          voice_session_id: b().min(1),
          conversation_id: b().min(1).transform(ce),
          parent_message_id: b().min(1),
        }),
      })),
      (er = _(h, (e, { scope: t }) => {
        let n = new Map(),
          r = new Map(),
          i = new Map(),
          a,
          o,
          s;
        function c(e) {
          let n = new Set();
          for (let r of e)
            if (r) {
              n.add(r);
              let e = t.get(j, r);
              e != null && n.add(e);
            }
          return n;
        }
        function l(e, t) {
          (clearTimeout(e.timeoutId), n.delete(e.voiceSessionId));
          for (let t of e.conversationIds) r.get(t) === e && r.delete(t);
          e.resolve(t);
        }
        function u() {
          (a?.(), (a = void 0), o?.(), (o = void 0), s?.(), (s = void 0));
          for (let e of n.values()) l(e, void 0);
          i.clear();
        }
        function d(e) {
          let n = B(t).getState();
          if (n.deprecateCelsius)
            for (let t of c([n.conversationId, n.earlyServerThreadId, ...e])) {
              let e = r.get(t);
              e != null && l(e, void 0);
              let n = i.get(t);
              if (n != null) for (let e of n.conversationIds) i.get(e) === n && i.delete(e);
            }
        }
        function f() {
          if (a != null) return;
          let e = t.get(ve),
            r = He(`conversations`, () => Ae.safeGet(`/celsius/ws/user`, {}).then((e) => e.websocket_url));
          ((a = r.onMessage((e) => {
            let r = $n.safeParse(e);
            if (!r.success) return;
            let a = r.data.payload,
              o = n.get(a.voice_session_id);
            if (o == null) return;
            o.conversationIds.add(a.conversation_id);
            for (let e of o.conversationIds)
              je(e) && t.get(j, e) !== a.conversation_id && J(t, e, a.conversation_id);
            let s = {
              payload: a,
              conversationIds: o.conversationIds,
              previousParentMessageId: o.previousParentMessageId,
              expiresAtMs: Date.now() + 6e4,
            };
            for (let e of s.conversationIds) i.set(e, s);
            l(o, s);
          })),
            (o = r.retainSubscription()),
            (s = t.watch(({ get: t }) => {
              let n = t(ve);
              (n.userId !== e.userId ||
                n.accountId !== e.accountId ||
                n.authenticatedAccountId !== e.authenticatedAccountId ||
                n.authMethod !== e.authMethod) &&
                u();
            })));
        }
        return {
          discardForTreatment: d,
          dispose: u,
          waitOnDisconnect() {
            let e = B(t).getState();
            if (e.deprecateCelsius) {
              e.hadConversationActivity && d([]);
              return;
            }
            if (
              e.sessionType !== `wm` ||
              !e.hadConversationActivity ||
              e.voiceSessionId == null ||
              !t.get(Be, `3654803918`)
            )
              return;
            f();
            let i = c([e.conversationId, e.earlyServerThreadId]);
            if (i.size === 0) return;
            let a = n.get(e.voiceSessionId);
            if (a != null) {
              for (let e of i) (a.conversationIds.add(e), r.set(e, a));
              return a.promise;
            }
            let o = {
              ...re(),
              voiceSessionId: e.voiceSessionId,
              conversationIds: i,
              previousParentMessageId: [...i].map((e) => t.get(be, e)).find((e) => e != null) ?? void 0,
              timeoutId: setTimeout(() => l(o, void 0), 1e4),
            };
            n.set(e.voiceSessionId, o);
            for (let e of i) r.set(e, o);
            return o.promise;
          },
          async waitBeforeStart(e, n, a) {
            if (!a && !t.get(Be, `3654803918`)) return;
            let o = c(e),
              s = [...o].map((e) => r.get(e)).find((e) => e != null),
              l;
            if (s != null) {
              let e = Z(t).postCallCommitWait;
              e.start();
              try {
                l = await s.promise;
              } finally {
                e.end();
              }
            } else {
              for (let [e, t] of i) t.expiresAtMs <= Date.now() && i.delete(e);
              l = [...o].map((e) => i.get(e)).find((e) => e != null);
            }
            return l != null &&
              (l.previousParentMessageId == null || n == null || l.previousParentMessageId === n)
              ? l
              : void 0;
          },
        };
      })));
  }))();
}
function nr(e) {
  switch (e) {
    case `checking`:
      return A.Connecting;
    case `connected`:
    case `completed`:
      return A.Connected;
    case `disconnected`:
      return A.Reconnecting;
    case `new`:
    case `failed`:
    case `closed`:
      return A.Disconnected;
  }
}
function $(e) {
  return { current: e };
}
function rr(e, t) {
  let n = e.chain.get(h.id) ?? e.node,
    r = fr.get(n);
  if (r == null) {
    if (t == null) throw Error(`Load the voice session before accessing its context`);
    ((r = dr({ dsp: t, voiceStore: B(e) })), fr.set(n, r));
  }
  return r;
}
async function ir(e) {
  let t = e.chain.get(h.id) ?? e.node,
    n = fr.get(t);
  (fr.delete(t), await n?.dispose());
}
var ar, or, sr, cr, lr, ur, dr, fr;
function pr() {
  return (pr = e(() => {
    (L(),
      i(),
      S(),
      c(),
      ge(),
      Ge(),
      r(),
      g(),
      M(),
      pt(),
      An(),
      Mn(),
      dt(),
      Y(),
      P(),
      se(),
      gn(),
      Fn(),
      bt(),
      Mt(),
      Un(),
      Gn(),
      Dn(),
      Jn(),
      Cn(),
      Vt(),
      vt(),
      tr(),
      Rt(),
      At(),
      zt(),
      Wt(),
      Nt(),
      ee(),
      (ar = (function (e) {
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
      (or = `User`),
      (sr = `Assistant`),
      (cr = v(`type`, [D({ type: w(`data_message`), data: b() }), D({ type: w(`error`) })])),
      (lr = void 0),
      (ur = () => (lr === void 0 && (lr = new TextEncoder()), lr)),
      (dr = ({ dsp: e, tryAcquireMicrophoneInput: t, voiceStore: n }) => {
        let r = n.scope,
          {
            LocalMediaManager: i,
            mediaStreamTrackToAVMTrack: s,
            AVMTrackOriginType: c,
            AVMTrackSourceType: l,
            getSafeAudioDeviceId: u,
            AssistantSpeakingMonitor: d,
          } = e,
          p = $(null),
          m = $(new AbortController()),
          g = $(null),
          _ = $(null),
          v = [],
          y,
          b = new Set(),
          x = new Set(),
          S = a(
            h,
            () => v,
            ({ set: e }) => (
              b.add(e),
              () => {
                b.delete(e);
              }
            ),
          ),
          C = a(
            h,
            () => y,
            ({ set: e }) => (
              x.add(e),
              () => {
                x.delete(e);
              }
            ),
          ),
          w = E(h, () => null),
          T = E(h, !1),
          ee = t,
          te = (e) => {
            n.setState((t) => {
              t.isDuckingActive = e;
            });
          },
          D = (e) => {
            sn(r, { actor: `user`, isSpeaking: e });
          },
          ne = (e) => {
            sn(r, { actor: `assistant`, isSpeaking: e });
          },
          re = $(void 0),
          j = $(void 0),
          M = $(null),
          ie = (e, t) => {
            p.current === e &&
              (k.debug(`[transceiver] Assistant playback blocked`, { safe: {}, sensitive: { detail: t } }),
              O(r, () => {
                r.set(ht, t instanceof Error ? t : Error(String(t)));
              }));
          },
          ae = async ({ track: e, initialSetup: t = !1 }) => {
            let n = e.kind === `audio` ? re : j;
            if (n.current && !n.current.stopped) await n.current.sender.replaceTrack(e);
            else if (t) n.current = ze().addTransceiver(e);
            else throw Error(`Cannot replace track on ${e.kind} transceiver that was not initialized.`);
          },
          oe = $(void 0),
          se = $(void 0),
          ce = $(void 0),
          P = $(null),
          F = $(void 0),
          le = $(void 0),
          I = $(void 0),
          L = $(0),
          R = () => [F.current, le.current, I.current].filter((e) => e !== void 0),
          de = (e) => {
            O(r, () => {
              ((F.current = e), (v = R()), b.forEach((e) => e(v)));
            });
          },
          z = (e) => {
            O(r, () => {
              ((le.current = e), (v = R()), b.forEach((e) => e(v)));
            });
          },
          fe = (e) => {
            O(r, () => {
              ((I.current = e), (v = R()), b.forEach((e) => e(v)));
            });
          },
          pe = (e) => {
            O(r, () => {
              ((P.current = e),
                r.set(w, e),
                B((t) => (t == null ? t : { ...t, state: e ?? A.Disconnected })));
            });
          },
          B = (e) => {
            ((y = typeof e == `function` ? e(y) : e), x.forEach((e) => e(y)));
          },
          me = () => P.current,
          he = (e) => {
            B((t) =>
              o(t, (t) => {
                t &&
                  (t.activeSpeakers.some((t) => t.identity === e) || t.activeSpeakers.push({ identity: e }));
              }),
            );
          },
          ge = (e) => {
            B((t) =>
              o(t, (t) => {
                t && (t.activeSpeakers = t.activeSpeakers.filter((t) => t.identity !== e));
              }),
            );
          },
          _e = $(null),
          V = $(void 0),
          ve = $(void 0),
          ye = $(void 0),
          be = $(!1),
          xe = () => {
            ((ye.current = void 0), (be.current = !1));
          },
          Se = $([]),
          H = {
            connected: [],
            disconnected: [],
            dataReceived: [],
            dataChannelOpen: [],
            trackPublished: [],
            connectionQualityChanged: [],
          },
          we = $(!1),
          Te = (e) => {
            H.trackPublished.forEach((t) => t(e));
          },
          Ee = () => {
            (_.current?.destroy(),
              (_.current = null),
              g.current?.dispose(),
              (g.current = null),
              te(!1),
              D(!1),
              ne(!1));
          },
          De = async (t, n) => {
            if ((Ee(), !t)) return;
            ((_.current = new d(r, ne, () => ne(!1))),
              f(
                async () => {
                  let { preloadSileroVoiceActivityDetector: e } = await import(`./entry-bc1dafa3b0f1.js`);
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
                duckedVolume: o(ut() ?? s.duckedRemoteVolumeDb),
                erleDbForConfiguredDuckingDepth: i.getErleDbForConfiguredDuckingDepth(r),
                erleStatsReportReader: i.isErleInformedDuckingEnabled(r)
                  ? () => Re.current?.getStats() ?? null
                  : void 0,
                manualDuckingControl: ft(),
                onDuckingChange: (e) => {
                  te(e);
                },
                onUserSpeakingChange: D,
                restorationDurationMs: s.restorationDurationMs,
                restorationSteps: s.restorationSteps,
              });
            ((g.current = c),
              c.attachAudioElement(p.current),
              c.setAudioOutputDeviceId(ce.current),
              c.attachMicrophoneTrack(F.current?.track ?? null));
          },
          U = $(void 0),
          Ae = () => U.current?.getAudioGapSummary(),
          W = $(void 0),
          G = $(void 0),
          K = {
            waitForMicrophone: async () => {
              let e = G.current,
                t = m.current.signal;
              if (e == null) throw new DOMException(`Voice microphone setup is unavailable`, `AbortError`);
              if ((await e.completeAudioSetup(), t.throwIfAborted(), F.current?.track.readyState !== `live`))
                throw new DOMException(`Voice microphone has ended`, `AbortError`);
            },
          },
          je = $(void 0),
          q = $(void 0),
          Me = new Set(),
          Ne = () => {
            (q.current?.dispose(),
              (q.current = void 0),
              n.setState({ isInstantAudioCapturing: !1 }),
              je.current?.(),
              (je.current = void 0));
          },
          Pe = (e, t) => {
            g.current?.handleServerVoiceMessage(e);
            let n = ur().encode(e);
            H.dataReceived.forEach((e) => e(n, t));
          };
        y = {
          localParticipant: {
            isMicrophoneEnabled: !1,
            setMicrophoneEnabled: function (e) {
              return (F.current?.setMuted(!e), Promise.resolve());
            },
            setCameraEnabled: async function (e) {
              if (e)
                try {
                  await He(`camera`);
                } catch (e) {
                  throw (
                    k.debug(`[transceiver] Error acquiring camera input`, {
                      safe: {},
                      sensitive: { detail: e },
                    }),
                    e
                  );
                }
              else await Y();
            },
            setScreenShareEnabled: async function (e) {
              if (e)
                try {
                  await He(`screenshare`);
                } catch (e) {
                  throw (
                    k.debug(`[transceiver] Error acquiring screen share input`, {
                      safe: {},
                      sensitive: { detail: e },
                    }),
                    e
                  );
                }
              else await Y();
              return Promise.resolve(void 0);
            },
            publishData: function (e) {
              let t = _e.current;
              if (t?.readyState !== `open`) return Promise.reject(Error(`Data channel is not open`));
              let n = new TextDecoder().decode(e),
                r = JSON.stringify({ type: `data_message`, data: n });
              return (t.send(r), Promise.resolve());
            },
            on(e, t) {
              e === `connectionQualityChanged` && Se.current.push(t);
            },
            off(e, t) {
              e === `connectionQualityChanged` && (Se.current = Se.current.filter((e) => e !== t));
            },
          },
          getActiveDevice: (e) => {
            switch (e) {
              case `audioinput`:
                return oe.current;
              case `videoinput`:
                return se.current;
              case `audiooutput`:
                return ce.current;
            }
          },
          disconnect: async function () {
            n.getState().hadConversationActivity && Zn(r);
            let e = r.get(N);
            (V.current?.(),
              (V.current = void 0),
              m.current.abort(),
              (m.current = new AbortController()),
              (J.current = !1),
              r.set(T, !1),
              ve.current?.(),
              (ve.current = void 0),
              Wn.abortPendingNegotiation(`Disconnecting`),
              U.current?.stop(),
              (U.current = void 0),
              (we.current = !0));
            let t = i.closeAllStreams(r, `microphone`);
            (Ne(),
              F.current?.track.stop(),
              de(void 0),
              z(void 0),
              Ee(),
              O(r, () => {
                r.set(ht, null);
              }),
              (Re.current &&= (Re.current.close(), void 0)),
              (M.current = null),
              (W.current = void 0),
              (G.current = void 0),
              (re.current = void 0),
              (j.current = void 0),
              xe(),
              (p.current &&= (p.current.pause(), (p.current.srcObject = null), p.current.remove(), null)),
              pe(null));
            let a = Y();
            (ue(
              r,
              e,
              t.then(() => {}),
            ),
              await a);
            let { isVoiceModeActive: o } = n.getState(),
              s = r.get(N);
            o && s === e && (pe(A.Disconnected), H.disconnected.forEach((e) => e()));
          },
          name: ``,
          switchActiveDevice: async (e, t, n) => {
            if (P.current !== A.Connected)
              return (
                k.debug(`[transceiver] Attempt to switch device when not connected, current state is`, {
                  safe: {},
                  sensitive: { detail: P.current },
                }),
                !1
              );
            let i = m.current.signal;
            try {
              switch (e) {
                case `audioinput`: {
                  let e = await Ve(t, { connectionAttemptSignal: i, replaceExistingTrack: !0 });
                  return (
                    i.throwIfAborted(),
                    Te(e),
                    wn({ scope: r, room: y ?? null, expectedVoiceSessionId: r.get(N) }),
                    !0
                  );
                }
                case `videoinput`:
                  return (await He(`camera`, t), !0);
                case `audiooutput`:
                  return (
                    await p.current?.setSinkId(t),
                    i.throwIfAborted(),
                    (ce.current = t),
                    g.current?.setAudioOutputDeviceId(t),
                    wn({ scope: r, room: y ?? null, expectedVoiceSessionId: r.get(N) }),
                    !0
                  );
              }
            } catch (t) {
              return (
                k.debug(`[transceiver] Failed to switch device`, {
                  safe: { kind: e },
                  sensitive: { detail: t },
                }),
                !1
              );
            }
          },
          on(e, t) {
            H[e].push(t);
          },
          off(e, t) {
            switch (e) {
              case `connected`:
                H.connected = H.connected.filter((e) => e !== t);
                break;
              case `disconnected`:
                H.disconnected = H.disconnected.filter((e) => e !== t);
                break;
              case `dataReceived`:
                H.dataReceived = H.dataReceived.filter((e) => e !== t);
                break;
              case `dataChannelOpen`:
                H.dataChannelOpen = H.dataChannelOpen.filter((e) => e !== t);
                break;
              case `trackPublished`:
                H.trackPublished = H.trackPublished.filter((e) => e !== t);
                break;
              case `connectionQualityChanged`:
                H.connectionQualityChanged = H.connectionQualityChanged.filter((e) => e !== t);
            }
          },
          state: A.Disconnected,
          numParticipants: 0,
          activeSpeakers: [],
        };
        let J = $(!1),
          Fe = () => {
            let e = ye.current,
              t = M.current;
            !be.current &&
              e &&
              y &&
              _e.current?.readyState === `open` &&
              ((be.current = !0),
              (ye.current = void 0),
              yn(y, n, `microphone`, e.isMuted ? `muted` : `live`).catch((e) =>
                k.debug(`[voice] Initial microphone state could not be published`, {
                  safe: {},
                  sensitive: { error: e },
                }),
              ),
              t != null && wn({ scope: r, room: y, expectedVoiceSessionId: t.voice_session_id }));
          },
          Ie = (e) => {
            ((ye.current = e), Fe());
          },
          Le = (e) => {
            y &&
              _e.current?.readyState === `open` &&
              bn({
                room: y,
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
                k.debug(`[transceiver] Failed to publish client metrics sample`, {
                  safe: {},
                  sensitive: { error: e },
                });
              });
          },
          Re = $(void 0),
          ze = () => {
            try {
              return ((Re.current = Re.current ?? It.getFreshPeerConnection(`voice-mode`)), Re.current);
            } catch (e) {
              let t = _t.reportedVoiceMode(r, { voiceMode: M.current?.voice_mode });
              throw (
                X(r, ke, {
                  voiceMetadata: {
                    mode: t,
                    sessionId: M.current?.voice_session_id ?? void 0,
                    style: M.current?.voice ?? void 0,
                  },
                  errorBucket: Oe.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_BUCKET_CLIENT,
                  errorType:
                    Ce.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_PEER_CONNECTION_CREATION_FAILED,
                }),
                e
              );
            }
          },
          Be = (e, t) => {
            (q.current?.setMuted(e),
              Me.forEach((t) => t(e)),
              B((n) =>
                o(n, (n) => {
                  n &&
                    ((n.localParticipant.isMicrophoneEnabled = !e),
                    (n.localParticipant.isMicrophoneForceMuted = t),
                    e
                      ? (n.activeSpeakers = n.activeSpeakers.filter((e) => e.identity !== or))
                      : n.activeSpeakers.some((e) => e.identity === or) ||
                        n.activeSpeakers.push({ identity: or }));
                }),
              ));
          },
          Ve = async (
            t,
            { connectionAttemptSignal: a = m.current.signal, replaceExistingTrack: o = !1 } = {},
          ) => {
            let d = !o && jn(r),
              { _instantAudio: f } = Z(r);
            o || ((f.initiallyEligible = d), (f.applied = !1));
            let p = t,
              h = await ee?.({ deviceId: p });
            (a.aborted &&
              (h?.cleanup?.(), h?.stream.getTracks().forEach((e) => e.stop()), a.throwIfAborted()),
              h ||
                (p || ((p = await u()), a.throwIfAborted()),
                (h = {
                  stream: await i.consumeUserMedia(r, {
                    audio: {
                      ...(_t.sessionType(r) === `wm` ? e.getAudioConstraintsOverride$(r) : {}),
                      ...(p ? { deviceId: { exact: p } } : {}),
                    },
                  }),
                }),
                a.aborted &&
                  (h.cleanup?.(), h.stream.getTracks().forEach((e) => e.stop()), a.throwIfAborted())));
            let { cleanup: _, forceMute: v = !1, microphoneDeviceId: b, preserveMute: x = !0, stream: S } = h,
              C = S.getTracks();
            if (C.length !== 1)
              throw (_?.(), C.forEach((e) => e.stop()), Error(`Only one input is supported for now`));
            let [w] = C;
            if (o) {
              let e = !1,
                t = () => {
                  (Me.delete(r), !(e || F.current?.track === w) && ((e = !0), _?.(), w.stop()));
                },
                r = (e) => {
                  F.current?.track !== w && (v || x) && (w.enabled = !(v || e));
                };
              ((v || F.current?.isMuted) && r(!0), Me.add(r), a.addEventListener(`abort`, t, { once: !0 }));
              try {
                (await ae({ track: w }),
                  a.throwIfAborted(),
                  q.current?.dispose(),
                  (q.current = void 0),
                  n.setState({ isInstantAudioCapturing: !1 }));
              } catch (e) {
                throw (t(), e);
              } finally {
                (Me.delete(r), a.removeEventListener(`abort`, t));
              }
            }
            let { echoCancellation: T } = w.getSettings();
            (typeof T == `boolean` &&
              n.setState((e) => {
                ((e.aecEnabled = T), e.audioRoute === `unknown` && (e.audioRoute = null));
              }),
              g.current?.attachMicrophoneTrack(w),
              (oe.current = b ?? w.getSettings().deviceId),
              F.current && F.current.track !== w && (Ne(), F.current.track.stop()),
              (je.current = _),
              (v || (x && F.current?.isMuted)) && (w.enabled = !1));
            let E = s(w, {
              source: l.Microphone,
              name: `user`,
              userName: `User`,
              origin: c.Local,
              mutedCb: Be,
            });
            if ((de(E), Be(E.isMuted, E.isSystemMuted), d)) {
              let e = E.isMuted,
                t = (t) => {
                  e ||= t;
                };
              (Me.add(t), f.setup.start());
              try {
                let t = await Pn(
                  S,
                  a,
                  () => {
                    a.aborted ||
                      (f.firstBuffer.mark(),
                      f.capture.isEnded() || f.capture.start(),
                      n.setState({ isInstantAudioCapturing: !0 }));
                  },
                  () => {
                    (n.setState({ isInstantAudioCapturing: !1 }), y?.disconnect().catch(() => {}));
                  },
                  (e) => {
                    if (!f.interrupted.isMarked()) {
                      if (e === `interrupted`) {
                        for (let e of [f.capture, f.replay])
                          e.isStarted() && !e.isEnded() && (e.fail(), f.interrupted.mark());
                        return;
                      }
                      (f.capture.end(),
                        e === `replaying`
                          ? f.replay.start()
                          : (f.replay.isStarted() && f.replay.end(), f.live.mark()));
                    }
                  },
                );
                (a.throwIfAborted(),
                  (q.current = t),
                  (f.workletInitializationMs = t.workletInitializationMs),
                  f.setup.end(),
                  e && t.setMuted(!0),
                  t.setMuted(E.isMuted));
              } catch {
                (f.setup.fail(),
                  a.throwIfAborted(),
                  q.current?.dispose(),
                  (q.current = void 0),
                  n.setState({ isInstantAudioCapturing: !1 }),
                  k.debug(`[instant-audio] Startup buffering failed; using the live microphone`));
              } finally {
                Me.delete(t);
              }
            }
            return E;
          },
          He = async (e, t) => {
            let n = m.current.signal,
              r;
            try {
              if (
                ((r = await Ue(e, t)), n.throwIfAborted(), r.track.readyState === `ended` || I.current !== r)
              )
                throw new DOMException(`Video capture ended`, `AbortError`);
              Te(r);
            } catch (e) {
              throw (r != null && I.current === r && (await Y()), e);
            }
          },
          Ue = async (e, t) => {
            let n = m.current.signal,
              a = ++L.current,
              o =
                e === `camera`
                  ? await i.getUserMedia(r, { video: !t || { deviceId: { exact: t } } })
                  : await i.getDisplayMedia(r);
            if (n.aborted || a !== L.current)
              throw (
                o.getTracks().forEach((e) => e.stop()),
                new DOMException(`Video capture canceled`, `AbortError`)
              );
            let u = o.getTracks();
            if (u.length !== 1)
              throw (u.forEach((e) => e.stop()), Error(`Only one video input is supported for now`));
            let [d] = u,
              f = !1,
              p = () => {
                !f && I.current?.track !== d && ((f = !0), d.stop());
              };
            n.addEventListener(`abort`, p, { once: !0 });
            try {
              if ((await ae({ track: d }), n.throwIfAborted(), a !== L.current || d.readyState === `ended`))
                throw new DOMException(`Video capture canceled`, `AbortError`);
            } catch (e) {
              throw (p(), e);
            } finally {
              n.removeEventListener(`abort`, p);
            }
            (e === `camera` && (se.current = d.getSettings().deviceId),
              I.current && I.current.track !== d && I.current.track.stop());
            let h = s(d, {
              source: e === `camera` ? l.Camera : l.ScreenShare,
              name: `user`,
              userName: `User`,
              origin: c.Local,
            });
            return (fe(h), h);
          },
          Y = async () => {
            if (
              ((L.current += 1),
              I.current &&
                (k.debug(`[transceiver] Stop and clear video track`),
                I.current.track.stop(),
                fe(void 0),
                j.current && !j.current.stopped))
            ) {
              k.debug(`[transceiver] Stop the video transceiver`);
              try {
                await j.current.sender.replaceTrack(null);
              } catch (e) {
                k.debug(`[transceiver] Failed to stop transceiver on disconnect due to`, {
                  safe: {},
                  sensitive: { detail: e },
                });
              }
            }
          },
          We = (e) => {
            let { default_voice_mode: t, modes: n } = e,
              r = n?.find((e) => e.mode === t);
            if (!r) throw Error(`No voice status mode found for default mode ${t}`);
            return r;
          },
          Ge = ({ dataChannel: e, getEventTimestamp: t, getPeerConnectionState: i, pc: a }) => {
            let u = m.current.signal,
              { dataChannelOpen: d } = Z(r);
            ((e.onopen = () => {
              if (u.aborted) return;
              (d.mark(t()), r.set(T, !0));
              let e = M.current;
              (e != null && H.dataChannelOpen.forEach((t) => t(e)),
                V.current?.(),
                (V.current = y ? Kn({ scope: r, room: y }) : void 0),
                Fe());
            }),
              (e.onmessage = (e) => {
                if (u.aborted || typeof e.data != `string`) return;
                let t;
                try {
                  t = JSON.parse(e.data);
                } catch {
                  return;
                }
                let n = cr.safeParse(t);
                n.success &&
                  (n.data.type === `data_message` ? Pe(n.data.data) : n.data.type === `error` && Pe(e.data));
              }),
              (e.onclose = () => {
                u.aborted ||
                  (r.set(T, !1),
                  V.current?.(),
                  (V.current = void 0),
                  we.current ? (we.current = !1) : H.disconnected.forEach((e) => e()),
                  ge(sr),
                  _.current?.stop({ notify: !1 }),
                  Ee());
              }),
              (a.oniceconnectionstatechange = () => {
                if (u.aborted) return;
                let { tcConnect: e } = Z(r),
                  a = P.current,
                  { iceConnectionState: o } = i(),
                  s = nr(o),
                  {
                    voiceMode: c,
                    sessionType: l,
                    server: { voiceBackend: d },
                  } = n.getState(),
                  f = _t.reportedVoiceMode(r, { voiceMode: c, sessionType: l, voiceBackend: d });
                (a === A.Connecting && s === A.Disconnected
                  ? (e.isStarted() && e.fail(),
                    X(r, ke, {
                      voiceMetadata: {
                        mode: f,
                        sessionId: M.current?.voice_session_id ?? void 0,
                        style: M.current?.voice ?? void 0,
                      },
                      errorType:
                        Ce.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_CONNECTION_ESTABLISHMENT_FAILED,
                    }))
                  : !we.current &&
                    a === A.Connected &&
                    s === A.Disconnected &&
                    X(r, ke, {
                      voiceMetadata: {
                        mode: f,
                        sessionId: M.current?.voice_session_id ?? void 0,
                        style: M.current?.voice ?? void 0,
                      },
                      errorBucket: Oe.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_BUCKET_SERVER,
                      errorType:
                        Ce.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_CONNECTION_LOST_AFTER_ESTABLISHED,
                    }),
                  s === A.Connected && (e.end(t()), H.connected.forEach((e) => e())),
                  pe(s),
                  n.setState((e) => {
                    e.server.connectionState = s;
                  }));
              }),
              (a.ontrack = (e) => {
                if (u.aborted) return;
                let t = p.current;
                if (t == null) return;
                let r = e.streams[0];
                t.srcObject = r;
                try {
                  t.play()?.catch((e) => ie(t, e));
                } catch (e) {
                  ie(t, e);
                }
                let i = r.getTracks();
                if (i.length !== 1)
                  throw (
                    k.debug(
                      `[transceiver] Only one remote track is supported for now, detected these tracks`,
                      { safe: {}, sensitive: { detail: i } },
                    ),
                    Error(`Only one remote track is supported for transceiver`)
                  );
                let [a] = i;
                (g.current?.attachAudioElement(t), _.current?.attachTrack(a));
                let d = s(a, {
                  source: l.Microphone,
                  name: n.getState().voiceMode === `advanced` ? `audio` : `shout`,
                  userName: `Assistant`,
                  origin: c.Remote,
                });
                (z(d),
                  Te(d),
                  B((e) =>
                    o(e, (e) => {
                      e && (e.numParticipants = 2);
                    }),
                  ),
                  he(sr));
              }));
          },
          Ke = (e) => {
            if (!e && j.current && !j.current.stopped) {
              let e = ze();
              (j.current.stop(), e.removeTrack(j.current.sender));
            }
            let t = Pt(r) ? Lt.bufferApplyEventHandlers(r, e, Ge) : Ge,
              n = m.current.signal,
              i = jt
                .preConnectionSetup(r, {
                  applyEventHandlers: t,
                  existingConnection: e,
                  getPeerConnection: ze,
                  onDataChannelCreated: (e) => {
                    ((_e.current = e), r.set(T, e.readyState === `open`));
                  },
                  onPeerConnectionCreated: (e) => {
                    (n.throwIfAborted(), (Re.current = e));
                  },
                  onTransceiverCreated: (e, t) => {
                    e === `audio` ? (re.current = t) : (j.current = t);
                  },
                  timings: Z(r),
                })
                .then(
                  (e) => (
                    n.aborted &&
                      (e.stopMonitoring(), e.dataChannel.close(), e.pc.close(), n.throwIfAborted()),
                    e
                  ),
                );
            return (i.catch(() => {}), i);
          },
          qe = (e = m.current.signal) => {
            let { _peerConnection: t } = Z(r);
            t.audioInputAcquisition.start();
            let n = Ve(void 0, { connectionAttemptSignal: e });
            return (
              n.then(
                () => t.audioInputAcquisition.end(),
                () => {},
              ),
              { completeAudioSetup: async () => ({ microphoneTrack: await n }) }
            );
          },
          Je = () => {
            let { _peerConnection: e } = Z(r);
            e.qualityMonitorSetup.start();
            let t = ze();
            (U.current && U.current.stop(),
              (U.current = new Vn(t, (e) => {
                let t =
                  P.current && [A.Disconnected, A.Reconnecting, A.SignalReconnecting].includes(P.current);
                (H.connectionQualityChanged.forEach((n) => n(t ? Q.LOST : e.general)),
                  Se.current.forEach((n) => n(t ? Q.LOST : e.local)));
              })),
              U.current.start(),
              e.qualityMonitorSetup.end());
          },
          Ye = async ({ waitForMicrophone: e = !1 } = {}) => {
            let t = m.current.signal;
            (xe(), (G.current = qe(t)), r.set(mt, K));
            let n = G.current.completeAudioSetup();
            (e && (await n, t.throwIfAborted()), (W.current = Ke()), await n);
          },
          Xe = async (e, t, i, a) => {
            let { _peerConnection: o, _postConnect: s, tcConnect: c, _instantAudio: l } = Z(r);
            o.postConnectionSetup.start();
            let u =
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
            (u.catch(() => {}),
              c.start(),
              (G.current ||=
                (k.debug(`[transceiver] Audio input setup step not executed for initial TC offer!`), qe(a))));
            let { completeAudioSetup: d } = G.current,
              f;
            try {
              ({ microphoneTrack: f } = await d());
            } catch (e) {
              if (a.aborted) return;
              throw e;
            }
            if (a.aborted) return;
            let p = q.current,
              m = p?.track ?? f.track,
              h =
                i.type === `race`
                  ? i.setAudioTrack(m)
                  : o.audioTransceiverSetup.timeAsync(() => ae({ track: m, initialSetup: !0 }));
            (h.catch((e) => {
              k.debug(`[transceiver] Failed to attach the initial microphone track`, {
                safe: {},
                sensitive: { error: e },
              });
            }),
              Ie(f),
              g.current?.attachMicrophoneTrack(f.track),
              Te(f),
              n.setState((n) => {
                ((n.style = e.voice),
                  (n.conversationId = e.conversation_id ?? t.conversationId),
                  (n.voiceSessionId = e.voice_session_id),
                  (n.voiceMode = e.voice_mode));
              }));
            let _;
            try {
              _ = await u;
            } catch (e) {
              if (a.aborted) return;
              throw (
                c.isStarted() && c.fail(),
                (J.current = !1),
                pe(A.Disconnected),
                n.setState((e) => {
                  e.server.connectionState = A.Disconnected;
                }),
                Ee(),
                o.postConnectionSetup.end(),
                e
              );
            }
            a.aborted ||
              (p != null && (await h, a.throwIfAborted(), (l.applied = !0), p.releaseWhenConnected(_.pc)),
              (J.current = !1),
              pe(A.Connected),
              Je(),
              ve.current?.(),
              (ve.current = _.stopMonitoring),
              _.startMonitoring({
                onClientMetricsSample: Le,
                getReportedVoiceMode: () => {
                  let {
                    voiceMode: e,
                    sessionType: t,
                    server: { voiceBackend: i },
                  } = n.getState();
                  return _t.reportedVoiceMode(r, { voiceMode: e, sessionType: t, voiceBackend: i });
                },
                voiceSessionId: e.voice_session_id,
              }),
              o.postConnectionSetup.end());
          },
          Ze = () => {
            if (p.current == null) {
              let e = document.createElement(`audio`);
              ((e.autoplay = !0), e.setAttribute(`playsinline`, ``), (p.current = e));
            }
            return p.current;
          };
        return {
          get room() {
            return y;
          },
          room$: C,
          connectionState$: w,
          isDataChannelOpen$: T,
          tracks$: S,
          getConnectionState: me,
          getAudioGapSummary: Ae,
          initVoiceMode: async (e, t) => {
            if (J.current)
              throw Error(`Not ready to connect, ${JSON.stringify({ isConnecting: J.current })}`);
            let i = m.current.signal;
            try {
              (O(r, () => {
                r.set(ht, null);
              }),
                (M.current = e));
              let a = Ze();
              if (((a.muted = !1), xe(), (J.current = !0), (we.current = !1), ce.current !== void 0)) {
                try {
                  await a.setSinkId(ce.current);
                } catch (e) {
                  if (!(e instanceof DOMException) || e.name !== `NotFoundError`) throw e;
                  (k.debug(
                    `[transceiver] Previous audio output device is no longer available; using the system default`,
                    { safe: {}, sensitive: { error: e } },
                  ),
                    (ce.current = void 0));
                }
                i.throwIfAborted();
              }
              let o = await wt.getVoiceAccessToken();
              i.throwIfAborted();
              let s = _t.sessionType(
                r,
                e.conversation_mode?.kind === `gizmo_interaction` ? e.conversation_mode.gizmo_id : void 0,
              );
              (await De(gt(s), i), i.throwIfAborted());
              let { _preConnect: c } = Z(r);
              (Bt(r, e, s),
                (e.deprecate_celsius = Ft(r, {
                  sessionType: s,
                  voiceMode: e.voice_mode,
                  chatMode: e.chat_mode,
                  deprecateCelsius: e.deprecate_celsius,
                  disableExposureLog: !1,
                })),
                n.setState({ deprecateCelsius: e.deprecate_celsius }),
                (G.current = G.current ?? qe(i)),
                r.set(mt, K));
              let l = (W.current ??= Ke()),
                u = c.createAbortSignal.time(() => Wn.beginNegotiation()),
                d = {
                  mode: _t.reportedVoiceMode(r, { voiceMode: e.voice_mode, sessionType: s }),
                  sessionId: e.voice_session_id ?? void 0,
                  style: e.voice ?? void 0,
                },
                f = Pt(r)
                  ? Lt.raceCache(r, s, e, {
                      accessToken: o,
                      eventSource: t.eventSource,
                      freshConnectionBundle: l,
                      preConnectionSetup: Ke,
                      proofOfWorkAnswer: t.proofOfWorkAnswer,
                      signal: u,
                      voiceMetadata: d,
                    })
                  : { type: `raceSkipped` };
              f.type === `raceSkipped` && Lt.activateFreshCandidateEventHandlers(l);
              let p;
              if (f.type === `raceStarted`)
                (f.futureWinner.then(
                  () => Wn.clearNegotiation(u),
                  () => Wn.clearNegotiation(u),
                ),
                  (p = { ready: f.futureWinner, setAudioTrack: f.setAudioTrack, type: `race` }));
              else {
                let n = await l;
                i.throwIfAborted();
                let a = await yt.startTransceiverSession(r, {
                  accessToken: o,
                  dataChannelId: 0,
                  eventSource: t.eventSource,
                  offer: n.offer,
                  payload: e,
                  proofOfWorkAnswer: t.proofOfWorkAnswer,
                  signal: u,
                  voiceMetadata: d,
                });
                (i.throwIfAborted(),
                  Wn.clearNegotiation(u),
                  (p = { httpResponse: a, preparedConnection: n, type: `regular` }));
              }
              W.current === l && (W.current = void 0);
              let m = Xe(e, t, p, i).catch((e) => {
                throw (i.aborted || (t.onConnectionSetupError?.(e), y?.disconnect().catch(() => {})), e);
              });
              return (
                m.catch(() => {}),
                { connectionSetupPromise: p.type === `race` ? m : void 0, type: `transceiver`, success: !0 }
              );
            } catch (e) {
              throw (
                i.aborted ||
                  ((J.current = !1), t.onConnectionSetupError?.(e), y?.disconnect().catch(() => {})),
                e
              );
            }
          },
          selectVoiceModeMetadata: We,
          preSignallingSetup: Ye,
          setTryAcquireMicrophoneInput(e) {
            ee = e;
          },
          async dispose() {
            y && (await y.disconnect());
          },
        };
      }),
      (fr = new WeakMap()));
  }))();
}
async function mr(e) {
  let t = Z(e);
  await e.when(({ get: n }) => {
    let r = n(he),
      i = n(N);
    return n(_e) != null || r.sentSessionId === i || !i || Z(e) !== t;
  });
  let n = B(e).getState();
  Z(e) === t && !t.session.isEnded() && n.isVoiceModeActive && n.voiceSessionId === e.get(_e) && hr(e);
}
function hr(e, t) {
  let n = e.get(he),
    r = e.get(N);
  if (r.trim() && n.sentSessionId !== r) {
    e.set(he, { ...n, sentSessionId: r });
    try {
      let { voiceMode: n, sessionType: i, server: a } = B(e).getState(),
        o = _t.reportedVoiceMode(e, {
          voiceMode: n,
          sessionType: i,
          voiceBackend: a.voiceBackend,
          reason: t,
        });
      e.get(oe).logProductEvent(Me, { ...On(e, o, r), productExperience: e.get(yr) });
    } catch (e) {
      k.debug(`[voice] Failed to log connection setup analytics`, { safe: {}, sensitive: { error: e } });
    }
  }
}
function gr(e, t, n) {
  let r = e.get(N);
  if (!r.trim()) return Promise.resolve();
  let i = Z(e),
    a = e.get(br, void 0),
    o = B(e),
    {
      session: s,
      conversationStart: c,
      sessionConnected: l,
      visuallyConnected: u,
      userAborted: d,
      postCallCommitWait: f,
    } = i;
  (s.end(), f.isStarted() && !f.isEnded() && f.end(), c.isSuccessful() || d.mark(), hr(e, t));
  let p = a.get(r);
  if (p != null) return p;
  let h = cn(e),
    g = o.getState().voiceSessionId ? fn(e) : {},
    { metrics: _, voiceMode: v, sessionType: y, style: b, server: x } = o.getState(),
    S = _t.reportedVoiceMode(e, { voiceMode: v, sessionType: y, voiceBackend: x.voiceBackend, reason: t }),
    w = s.getStartAsTimestamp(),
    T = s.getEndAsTimestamp(),
    E = l.getMarkAsTimestamp(),
    ee = w !== void 0 && T !== void 0 ? T - w : void 0,
    te = T !== void 0 && E !== void 0 && T >= E ? T - E : void 0,
    D = e.get(yr),
    O = rr(e).getAudioGapSummary(),
    ne = {
      voiceMode: S,
      voiceMetadata: { style: b },
      voiceSessionId: r,
      protocol: `transceiver`,
      sessionStartTsMs: w,
      sessionEndTsMs: T,
      sessionConnectedTsMs: E,
      sessionDurationMs: ee,
      connectedDurationMs: te,
      ...h,
      ...g,
      ...nn(e),
      numOfTurnsSpeaking: C(_.numSpeaking),
      numOfTurnsThinking: C(_.numThinking),
      numOfTurnsListening: C(_.numListening),
      sessionEndReason: vr(t),
      wasConnectedAtTimeOfExit: x.connectionState === A.Connected,
      timeToVisuallyConnectedMs: u.getDuration() ?? void 0,
      visuallyConnectedTsMs: u.getMarkAsTimestamp() ?? void 0,
      ...(O?.thresholdMs === void 0
        ? {}
        : {
            audioGapThresholdMs: O.thresholdMs,
            silentAudioGapTotalMs: O.silentTotalMs,
            silentAudioGapCount: C(O.silentCount),
            nonSilentAudioGapTotalMs: O.nonSilentTotalMs,
            nonSilentAudioGapCount: C(O.nonSilentCount),
            remoteOutputAudioTrackDurationMs: O.remoteOutputAudioTrackDurationMs,
            webrtcStatsPollingIntervalMs: O.webrtcStatsPollingIntervalMs,
            activeOutputAudioDurationMs: O.activeOutputAudioDurationMs,
            activeOutputAudioRmsThresholdRatio: O.activeOutputAudioRmsThresholdRatio,
          }),
      ...(O?.endSessionNetworkTelemetry
        ? {
            ...O.endSessionNetworkTelemetry,
            packetsLostCount: m(O.endSessionNetworkTelemetry.packetsLostCount),
            packetsReceivedCount: C(O.endSessionNetworkTelemetry.packetsReceivedCount),
            stunRequestsSentCount: C(O.endSessionNetworkTelemetry.stunRequestsSentCount),
            stunResponsesReceivedCount: C(O.endSessionNetworkTelemetry.stunResponsesReceivedCount),
          }
        : {}),
      productExperience: D,
    },
    re = e.get(oe),
    j = Tn(n, { snapshotActiveDevices: !0 })
      .then((e) => (re.logProductEvent(Pe, { ...ne, finalAudioRoute: e }), re.flush(xr)))
      .catch((e) => {
        k.debug(`[voice] Failed to log session end analytics`, { safe: {}, sensitive: { error: e } });
      });
  if ((a.set(r, j), a.size > 100)) {
    let e = a.keys().next().value;
    e != null && a.delete(e);
  }
  return j;
}
function _r(e, t, n, r, i) {
  let a = e.get(Se, n.conversationId),
    o = e.get(Ie, n.conversationId),
    c = o === `tpp` || o === `flora`,
    d = e.get(j, n.conversationId),
    f =
      d == null
        ? e.get(pe, n.conversationId)
        : (e.get(ae, d) ?? e.query.getData(ye, d)?.default_model_slug) != null,
    p = a && (c || f),
    h = t instanceof T ? t : void 0,
    g = h?.diagnosticError ?? t,
    _ = g instanceof u ? g : void 0,
    v = h == null ? _?.status : h.explicitResponseStatus,
    b;
  return (
    (b = h?.errorKind === `network` || (typeof v != `number` && l(g))),
    {
      toastId: `start_voice_mode_failure`,
      conversationId: s.parse(r),
      userFacingError: {
        surface: Ke(p ? c : null),
        errorCategory: ie.CHATGPT_USER_FACING_ERROR_CATEGORY_VOICE,
        operation: `start_voice_mode`,
        voiceSessionId: s.parse(i),
        errorCode: Sr.parse(_ == null ? h?.errorCode : _.code),
        statusCode: !b && v != null ? m(v) : void 0,
        isNetworkError: b,
        requestId: s.parse(_?.requestId),
        serverRequestId: s.parse(_?.xOaiRequestId),
        backingError: { className: y.parse(g instanceof Error ? g.name : void 0) },
      },
    }
  );
}
function vr(e) {
  return e === lt.UserNavigatedAway
    ? `conversation_nav`
    : e === lt.UserSwitchedToStandard
      ? `voice_changed`
      : e;
}
var yr, br, xr, Sr;
function Cr() {
  return (Cr = e(() => {
    (xe(),
      L(),
      le(),
      S(),
      c(),
      Le(),
      We(),
      V(),
      de(),
      x(),
      Ge(),
      r(),
      g(),
      M(),
      ct(),
      Y(),
      P(),
      se(),
      p(),
      Dn(),
      kn(),
      vt(),
      pr(),
      gn(),
      (yr = E(h, () => void 0)),
      (br = _(h, (e) => new Map())),
      (xr = 250),
      (Sr = b()
        .max(64)
        .regex(/^(?:[0-9]+|[a-z][a-z0-9_-]*|file\.(?:processing|indexing)\.(?:error|cancelled))$/)
        .optional()
        .catch(void 0)));
  }))();
}
function wr(e) {
  let t = e.chain.get(h.id) ?? e.node,
    n = Or.get(t);
  return (n ?? ((n = Promise.resolve(`unknown`)), Or.set(t, n)), n);
}
async function Tr(e) {
  for (;;) {
    let t = wr(e),
      n = await t;
    if (t === wr(e)) return n;
  }
}
function Er(e, t, { allowOverride: n = !0 } = {}) {
  let r = Z(e).session.isStarted();
  if (n || !r) {
    let n = I(e);
    (e.set(yr, void 0), it(e));
    let r = Tt();
    (Or.set(e.chain.get(h.id) ?? e.node, r),
      r.then((t) => {
        r === wr(e) && e.set(at, t);
      }),
      n.session.start(),
      n.surfaceToStart.start(),
      e.set(ot, t));
    let i = kt();
    (F(e, i), e.set(N, i));
  }
}
function Dr(e, { resetTimings: t = !1 } = {}) {
  if (t) {
    (I(e), it(e), Or.set(e.chain.get(h.id) ?? e.node, Promise.resolve(`unknown`)), we(e));
    return;
  }
  Z(e).session.reset();
}
var Or;
function kr() {
  return (kr = e(() => {
    (ge(), r(), M(), Y(), st(), Cr(), xt(), Et(), (Or = new WeakMap()));
  }))();
}
export {
  rn as A,
  Cn as C,
  Xt as D,
  vn as E,
  Jt as F,
  dn as I,
  on as M,
  an as N,
  Zt as O,
  qt as P,
  An as S,
  _n as T,
  Xn as _,
  _r as a,
  Gn as b,
  yr as c,
  ir as d,
  rr as f,
  tr as g,
  Qn as h,
  Tr as i,
  Yt as j,
  gn as k,
  mr as l,
  Zn as m,
  kr as n,
  Cr as o,
  pr as p,
  Er as r,
  gr as s,
  Dr as t,
  ar as u,
  Yn as v,
  yn as w,
  Q as x,
  Wn as y,
};
//# sourceMappingURL=mark-session-create-a7bcbd7e29c8.js.map
