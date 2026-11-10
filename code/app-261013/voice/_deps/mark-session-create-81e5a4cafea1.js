const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./entry-33afd49be636.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Bpt as n,
  CPt as r,
  Cot as i,
  DIt as a,
  Drt as o,
  EPt as s,
  Ert as c,
  Irt as l,
  JSt as u,
  LLt as d,
  Lrt as f,
  Pxt as p,
  Rrt as m,
  SPt as h,
  TLt as g,
  Trt as _,
  _It as v,
  cSt as y,
  fPt as ee,
  fSt as te,
  hrt as ne,
  krt as b,
  pIt as x,
  pLt as S,
  pPt as C,
  rst as re,
  sPt as w,
  uPt as ie,
  uSt as ae,
  vrt as T,
  wot as E,
  xrt as oe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Bn as se,
  $jr as D,
  CRn as O,
  DPr as ce,
  FAn as le,
  FXt as ue,
  GBn as de,
  HBn as fe,
  HY as k,
  IXt as pe,
  KBn as A,
  NXt as me,
  OPr as j,
  ORn as he,
  QBn as ge,
  QDr as M,
  QMr as _e,
  QQn as ve,
  SAn as ye,
  SZn as be,
  UBn as xe,
  UY as Se,
  VBn as Ce,
  VY as we,
  Vzn as Te,
  WBn as Ee,
  WY as N,
  XDr as De,
  YZn as Oe,
  Ymr as ke,
  ZBn as Ae,
  aAt as je,
  bZn as P,
  cjn as F,
  djn as I,
  e$n as Me,
  eMr as Ne,
  eOr as Pe,
  eVn as Fe,
  ehr as L,
  ejn as R,
  hHn as Ie,
  iAt as z,
  iRn as Le,
  iUn as B,
  kBn as V,
  kPr as H,
  kYn as Re,
  lUn as U,
  ljn as W,
  nAt as G,
  nRn as K,
  oAt as ze,
  oHn as Be,
  ocr as Ve,
  pZn as q,
  pjn as J,
  rAt as Y,
  rUn as He,
  t$n as Ue,
  tNr as We,
  tjn as X,
  wZn as Ge,
  yVn as Ke,
  yjn as qe,
} from "./app-initial-5851df3f6cb1.js";
import {
  $n as Je,
  Jn as Ye,
  Kn as Xe,
  Qn as Ze,
  Xn as Qe,
  ir as $e,
  nr as et,
  or as tt,
  qn as nt,
  rr as rt,
  tr as it,
} from "./app-primary-fe8a450b3b04.js";
import { i as at, n as ot, o as st, t as ct } from "./timing-signals-908971eb73de.js";
import { n as lt, t as ut } from "./command-state-7dc5a32fb56e.js";
import { a as dt, o as ft, r as pt } from "./preferences-d95b6577e820.js";
import { i as mt, o as ht, r as gt } from "./dsp-2d6db1c0fccc.js";
import { a as _t, r as Z, t as vt } from "./voice-configuration-manager-eab950a76e87.js";
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
} from "./voice-session-parameters-5a36d3c8f43e.js";
function Gt(e) {
  let t = R(e).getState();
  return t.voiceSessionId
    ? {
        voiceSessionId: t.voiceSessionId,
        conversationId: t.earlyServerThreadId ?? t.conversationId ?? void 0,
      }
    : null;
}
function Kt(e, t) {
  let n = Gt(e);
  if (n == null) return;
  let r = 0;
  (R(e).setState((e) => {
    ((e.metrics.voiceNavChangeSessionIndex += 1), (r = e.metrics.voiceNavChangeSessionIndex));
  }),
    M(e, et, { ...n, stateName: t, sessionIndex: f(r) }));
}
function qt(e) {
  Kt(e, rt.CHATGPT_VOICE_NAVIGATION_STATE_PLUS_MENU_OPEN);
}
function Jt(e, { kind: t }) {
  (e.set(hn, { voiceSessionId: R(e).getState().voiceSessionId, kind: t }),
    Kt(
      e,
      t === `file`
        ? rt.CHATGPT_VOICE_NAVIGATION_STATE_FILES_OPEN
        : rt.CHATGPT_VOICE_NAVIGATION_STATE_GALLERY_OPEN,
    ));
}
function Yt(e) {
  let t = Qt(e);
  t != null && $t(e, { kind: t, outcome: `canceled` });
}
function Xt(e, { uploads: t }) {
  let n = Qt(e),
    r = R(e).getState().voiceSessionId,
    i = new Set();
  if (n === `photo`) i.add(`photo`);
  else for (let e of t) i.add(e.file.type.startsWith(`image/`) ? `photo` : `file`);
  return (t, n) => {
    if (R(e).getState().voiceSessionId === r) for (let r of i) $t(e, { kind: r, outcome: t, errorDetail: n });
  };
}
function Zt(e) {
  let t = !1;
  return (n, r) => {
    !_t(R(e).getState().sessionType) ||
      (n === `canceled` && t) ||
      ((t = !0), $t(e, { kind: `composer_text`, outcome: n, errorDetail: r }));
  };
}
function Qt(e) {
  let t = e.get(hn);
  return (e.set(hn, null), t?.voiceSessionId === R(e).getState().voiceSessionId ? t.kind : null);
}
function $t(e, { kind: t, outcome: n, errorDetail: r }) {
  let i = Gt(e);
  if (i == null) return;
  let a = { ...i, outcome: en(n), errorDetail: r?.trim().slice(0, 512) || void 0 };
  switch (t) {
    case `composer_text`:
      M(e, Qe, a);
      break;
    case `file`:
      M(e, Ze, a);
      break;
    case `photo`:
      M(e, $e, a);
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
  R(e).setState((e) => {
    (i?.name &&
      e.metrics.lastAudioInputDeviceName !== i.name &&
      ((e.metrics.lastAudioInputDeviceName = i.name),
      s.push({
        connectionType: i.connectionType,
        direction: de.CHATGPT_VOICE_AUDIO_DEVICE_DIRECTION_INPUT,
        name: i.name,
      })),
      a?.name &&
        e.metrics.lastAudioOutputDeviceName !== a.name &&
        ((e.metrics.lastAudioOutputDeviceName = a.name),
        s.push({
          connectionType: a.connectionType,
          direction: de.CHATGPT_VOICE_AUDIO_DEVICE_DIRECTION_OUTPUT,
          name: a.name,
        })),
      s.length !== 0 &&
        ((e.metrics.audioRouteChangeCount += 1),
        (e.metrics.lastAudioRouteChangeTsMs = r),
        (e.metrics.lastAudioRouteChangeWasBackgrounded = e.metrics.backgroundedAtMs != null)));
  });
  for (let t of s)
    M(e, xe, {
      ...o,
      deviceCategory: t.connectionType ?? Ee.CHATGPT_VOICE_AUDIO_DEVICE_CONNECTION_TYPE_UNSPECIFIED,
      deviceDirection: t.direction,
      deviceName: t.name,
    });
}
function nn(e) {
  let {
    audioRouteChangeCount: t,
    lastAudioRouteChangeTsMs: n,
    lastAudioRouteChangeWasBackgrounded: r,
  } = R(e).getState().metrics;
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
  n != null && M(e, it, { ...n, state: t });
}
function on(e, { actor: t, state: n }) {
  let r = Gt(e);
  if (r == null) return;
  let i = 0,
    a = !1;
  (R(e).setState((e) => {
    switch (t) {
      case Xe.CHATGPT_VOICE_ACTOR_USER:
        if (e.metrics.lastUserVoiceActorState === n) return;
        e.metrics.lastUserVoiceActorState = n;
        break;
      case Xe.CHATGPT_VOICE_ACTOR_ASSISTANT:
        if (e.metrics.lastAssistantVoiceActorState === n) return;
        e.metrics.lastAssistantVoiceActorState = n;
        break;
      case Xe.CHATGPT_VOICE_ACTOR_UNSPECIFIED:
      case Xe.UNRECOGNIZED:
        return;
    }
    ((e.metrics.voiceActorStateChangeIndex += 1), (i = e.metrics.voiceActorStateChangeIndex), (a = !0));
  }),
    a && M(e, Ye, { ...r, actor: t, state: n, stateChangeIndex: f(i) }));
}
function sn(e, { actor: t, isSpeaking: n, nowMs: r = Date.now() }) {
  let i = R(e),
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
        actor: Xe.CHATGPT_VOICE_ACTOR_USER,
        state: n ? nt.CHATGPT_VOICE_ACTOR_STATE_SPEAKING : nt.CHATGPT_VOICE_ACTOR_STATE_LISTENING,
      }));
}
function cn(e, t = G(e).session.getEndAsTimestamp() ?? Date.now()) {
  ln(e, t);
  let {
    userSpeakingTimeMs: n,
    assistantSpeakingTimeMs: r,
    simultaneousSpeakingTimeMs: i,
  } = R(e).getState().metrics;
  return {
    ...(n > 0 ? { userSpeakingTimeMs: f(n) } : {}),
    ...(r > 0 ? { assistantSpeakingTimeMs: f(r) } : {}),
    ...(i > 0 ? { simultaneousSpeakingTimeMs: f(i) } : {}),
  };
}
function ln(e, t) {
  R(e).setState((e) => {
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
  (R(e).setState((e) => {
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
    i && M(e, t ? fe : Ce, r));
}
function dn(e) {
  let t,
    n = R(e).subscribe(
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
function fn(e, t = G(e).session.getEndAsTimestamp() ?? Date.now()) {
  R(e).setState((e) => {
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
  } = R(e).getState().metrics;
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
    (Ve(),
      Ke(),
      tt(),
      p(),
      s(),
      De(),
      E(),
      Y(),
      X(),
      (pn = x(S({ is_big_paste: v().nullish(), mime_type: g().nullish() }))),
      (mn = S({
        content_type: t(`multimodal_text`),
        parts: x(d([g(), S({ content_type: g().optional() })])),
      })),
      (hn = te(i, () => null)));
  }))();
}
async function _n({ room: e, event: t, voiceStore: n, options: r, recordInVoiceStore: i = !0 }) {
  let a = n.scope.get(U),
    o = Sn();
  (await e.localParticipant.publishData(o.encode(JSON.stringify(t)), r),
    i &&
      a === n.scope.get(U) &&
      n.setState((e) => {
        e.server.messages.push({ ...t, timestamp: new Date(), source: `local` });
      }));
}
function vn(e, t, n, r) {
  return _n({
    room: e,
    voiceStore: t,
    event: {
      type: I.TrackState,
      payload: {
        type: I.TrackState,
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
      type: I.TrackState,
      payload: { type: I.TrackState, track_id: `microphone`, media_type: `audio`, media_source: n, state: r },
    },
  });
}
async function bn({ room: e, metrics: t }) {
  let n = Sn();
  await e.localParticipant.publishData(
    n.encode(JSON.stringify({ type: I.ClientMetrics, payload: { type: I.ClientMetrics, ...t } })),
  );
}
var xn, Sn;
function Cn() {
  return (Cn = e(() => {
    (B(), J(), (Sn = () => ((xn ||= new TextEncoder()), xn)));
  }))();
}
async function wn({ scope: e, room: t, expectedVoiceSessionId: n }) {
  if (!t) return;
  let i = await Tn(t);
  if (n === e.get(U) && i && (tn(e, { audioRoute: i }), ce(e, En)))
    try {
      await _n({
        room: t,
        voiceStore: R(e),
        event: {
          type: I.ClientMetadataUpdate,
          payload: {
            type: I.ClientMetadataUpdate,
            audio_route: { input_device: i.inputDevice, output_device: i.outputDevice },
          },
        },
        options: { reliable: !0 },
      });
    } catch (e) {
      r.debug(`[voice] Failed to publish audio route metadata`, { safe: {}, sensitive: { error: e } });
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
      r.debug(`[voice] Failed to capture audio route metadata`, { safe: {}, sensitive: { error: e } });
    }
}
var En;
function Dn() {
  return (Dn = e(() => {
    (j(), h(), B(), J(), X(), gn(), Cn(), (En = `2942012831`));
  }))();
}
function On(e, t, n) {
  let r = G(e),
    i = (e) => {
      switch (e) {
        case W.Retry:
          return V.CHATGPT_SURFACE_RETRY;
        case W.LoggedOut:
          return V.CHATGPT_SURFACE_LOGGED_OUT;
        case W.Composer:
          return V.CHATGPT_SURFACE_COMPOSER;
        case W.ModalNewChat:
          return V.CHATGPT_SURFACE_MODAL_NEW_CHAT;
        case W.ModalSwitchToStandard:
          return V.CHATGPT_SURFACE_MODAL_SWITCH_TO_STANDARD;
        case W.DeepLink:
          return V.CHATGPT_SURFACE_DEEP_LINK;
        case W.ModalVoicePicker:
          return V.CHATGPT_SURFACE_MODAL_VOICE_PICKER;
        case W.WingmanVoicePicker:
          return V.CHATGPT_SURFACE_WINGMAN_HOME_TAKEOVER;
        case W.LanguageLearningWidget:
          return V.CHATGPT_SURFACE_LANGUAGE_LEARNING_WIDGET;
        case W.Unknown:
        case W.WingmanIncallPromotion:
        case W.VoiceModeDropdown:
          return V.CHATGPT_SURFACE_UNKNOWN;
      }
    },
    a = (e) => {
      switch (e) {
        case `granted`:
          return Te.CHATGPT_MICROPHONE_PERMISSIONS_STATE_GRANTED;
        case `denied`:
          return Te.CHATGPT_MICROPHONE_PERMISSIONS_STATE_DENIED;
        case `prompt`:
          return Te.CHATGPT_MICROPHONE_PERMISSIONS_STATE_ASKED;
        case `pending`:
          return Te.CHATGPT_MICROPHONE_PERMISSIONS_STATE_ASKED;
        case `unknown`:
          return Te.CHATGPT_MICROPHONE_PERMISSIONS_STATE_UNSPECIFIED;
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
    surface: i(e.get(st)),
    microphonePermissionState: a(e.get(ot)),
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
    (Ke(), Y(), ct(), J(), Ct());
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
  return ce(e, `3867826347`);
}
function Mn() {
  return (Mn = e(() => {
    j();
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
    (await o.audioWorklet.addModule(k), t.throwIfAborted());
    let g = new AudioWorkletNode(o, Se, {
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
    (N(), we());
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
    (h(),
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
            i = {},
            a = [],
            o = !1;
          (t.forEach((e) => {
            let t = e.kind || e.mediaType;
            (e.type === `transport` && e.selectedCandidatePairId && (n = e.selectedCandidatePairId),
              e.type === `remote-inbound-rtp` &&
                t === `audio` &&
                ((o ||= !this.isFresh(e)),
                this.localWindow.packetsLost.push(e.packetsLost),
                this.localWindow.fractionLost.push(e.fractionLost)),
              Ht(e) &&
                (a.push(e),
                (o ||= !this.isFresh(e)),
                this.remoteWindow.packetsSent.push(
                  e.packetsReceived !== void 0 && e.packetsLost !== void 0
                    ? e.packetsReceived + e.packetsLost
                    : void 0,
                ),
                this.remoteWindow.packetsLost.push(e.packetsLost)),
              e.type === `candidate-pair` && (i[e.id] = e));
          }),
            (this.stale = o),
            this.audioGapSummaryTracker.observe(t, a, Rn));
          let s = n !== void 0 && i[n];
          s
            ? (this.remoteWindow.rtt.push(s.currentRoundTripTime),
              this.localWindow.rtt.push(s.currentRoundTripTime))
            : r.error(`QualityMonitor no candidate-pair found!`);
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
  if (!ce(e, qn) || typeof navigator > `u`) return () => {};
  let n = navigator.connection;
  if (!n) return () => {};
  let i = () => {
    let i = {
      connection_type: typeof n.type == `string` && n.type.length > 0 ? n.type : void 0,
      effective_connection_type:
        typeof n.effectiveType == `string` && n.effectiveType.length > 0 ? n.effectiveType : void 0,
      downlink_mbps: typeof n.downlink == `number` && Number.isFinite(n.downlink) ? n.downlink : void 0,
      rtt_ms: typeof n.rtt == `number` && Number.isFinite(n.rtt) ? n.rtt : void 0,
      save_data: typeof n.saveData == `boolean` ? n.saveData : void 0,
    };
    Object.values(i).some((e) => e !== void 0) &&
      _n({
        room: t,
        voiceStore: R(e),
        event: { type: I.ClientMetadataUpdate, payload: { type: I.ClientMetadataUpdate, network: i } },
        options: { reliable: !0 },
      }).catch((e) => {
        r.debug(`[voice] Failed to publish network metadata`, { safe: {}, sensitive: { error: e } });
      });
  };
  return (
    i(),
    n.addEventListener?.(`change`, i),
    () => {
      n.removeEventListener?.(`change`, i);
    }
  );
}
var qn;
function Jn() {
  return (Jn = e(() => {
    (j(), h(), J(), X(), Cn(), (qn = `2942012831`));
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
    (p(),
      re(),
      s(),
      We(),
      Ne(),
      L(),
      Me(),
      qe(),
      E(),
      j(),
      Y(),
      X(),
      ($n = S({
        type: t(`voice-conversation-commit`),
        payload: S({
          voice_session_id: g().min(1),
          conversation_id: g().min(1).transform(ve),
          parent_message_id: g().min(1),
        }),
      })),
      (er = y(i, (e, { scope: t }) => {
        let r = new Map(),
          i = new Map(),
          a = new Map(),
          o,
          s,
          c;
        function l(e) {
          let n = new Set();
          for (let r of e)
            if (r) {
              n.add(r);
              let e = t.get(q, r);
              e != null && n.add(e);
            }
          return n;
        }
        function u(e, t) {
          (clearTimeout(e.timeoutId), r.delete(e.voiceSessionId));
          for (let t of e.conversationIds) i.get(t) === e && i.delete(t);
          e.resolve(t);
        }
        function d() {
          (o?.(), (o = void 0), s?.(), (s = void 0), c?.(), (c = void 0));
          for (let e of r.values()) u(e, void 0);
          a.clear();
        }
        function f(e) {
          let n = R(t).getState();
          if (n.deprecateCelsius)
            for (let t of l([n.conversationId, n.earlyServerThreadId, ...e])) {
              let e = i.get(t);
              e != null && u(e, void 0);
              let n = a.get(t);
              if (n != null) for (let e of n.conversationIds) a.get(e) === n && a.delete(e);
            }
        }
        function p() {
          if (o != null) return;
          let e = t.get(_e),
            n = D(`conversations`, () => ke.safeGet(`/celsius/ws/user`, {}).then((e) => e.websocket_url));
          ((o = n.onMessage((e) => {
            let n = $n.safeParse(e);
            if (!n.success) return;
            let i = n.data.payload,
              o = r.get(i.voice_session_id);
            if (o == null) return;
            o.conversationIds.add(i.conversation_id);
            for (let e of o.conversationIds)
              Ue(e) && t.get(q, e) !== i.conversation_id && Re(t, e, i.conversation_id);
            let s = {
              payload: i,
              conversationIds: o.conversationIds,
              previousParentMessageId: o.previousParentMessageId,
              expiresAtMs: Date.now() + 6e4,
            };
            for (let e of s.conversationIds) a.set(e, s);
            u(o, s);
          })),
            (s = n.retainSubscription()),
            (c = t.watch(({ get: t }) => {
              let n = t(_e);
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
            let e = R(t).getState();
            if (e.deprecateCelsius) {
              e.hadConversationActivity && f([]);
              return;
            }
            if (
              e.sessionType !== `wm` ||
              !e.hadConversationActivity ||
              e.voiceSessionId == null ||
              !t.get(H, `3654803918`)
            )
              return;
            p();
            let a = l([e.conversationId, e.earlyServerThreadId]);
            if (a.size === 0) return;
            let o = r.get(e.voiceSessionId);
            if (o != null) {
              for (let e of a) (o.conversationIds.add(e), i.set(e, o));
              return o.promise;
            }
            let s = {
              ...n(),
              voiceSessionId: e.voiceSessionId,
              conversationIds: a,
              previousParentMessageId: [...a].map((e) => t.get(be, e)).find((e) => e != null) ?? void 0,
              timeoutId: setTimeout(() => u(s, void 0), 1e4),
            };
            r.set(e.voiceSessionId, s);
            for (let e of a) i.set(e, s);
            return s.promise;
          },
          async waitBeforeStart(e, n, r) {
            if (!r && !t.get(H, `3654803918`)) return;
            let o = l(e),
              s = [...o].map((e) => i.get(e)).find((e) => e != null),
              c;
            if (s != null) {
              let e = G(t).postCallCommitWait;
              e.start();
              try {
                c = await s.promise;
              } finally {
                e.end();
              }
            } else {
              for (let [e, t] of a) t.expiresAtMs <= Date.now() && a.delete(e);
              c = [...o].map((e) => a.get(e)).find((e) => e != null);
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
function nr(e) {
  switch (e) {
    case `checking`:
      return F.Connecting;
    case `connected`:
    case `completed`:
      return F.Connected;
    case `disconnected`:
      return F.Reconnecting;
    case `new`:
    case `failed`:
    case `closed`:
      return F.Disconnected;
  }
}
function $(e) {
  return { current: e };
}
function rr(e, t) {
  let n = e.chain.get(i.id) ?? e.node,
    r = fr.get(n);
  if (r == null) {
    if (t == null) throw Error(`Load the voice session before accessing its context`);
    ((r = dr({ dsp: t, voiceStore: R(e) })), fr.set(n, r));
  }
  return r;
}
async function ir(e) {
  let t = e.chain.get(i.id) ?? e.node,
    n = fr.get(t);
  (fr.delete(t), await n?.dispose());
}
var ar, or, sr, cr, lr, ur, dr, fr;
function pr() {
  return (pr = e(() => {
    (Ke(),
      w(),
      p(),
      s(),
      me(),
      De(),
      E(),
      h(),
      Y(),
      mt(),
      An(),
      Mn(),
      ft(),
      B(),
      J(),
      X(),
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
      C(),
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
      (cr = a(`type`, [S({ type: t(`data_message`), data: g() }), S({ type: t(`error`) })])),
      (lr = void 0),
      (ur = () => (lr === void 0 && (lr = new TextEncoder()), lr)),
      (dr = ({ dsp: e, tryAcquireMicrophoneInput: t, voiceStore: n }) => {
        let a = n.scope,
          {
            LocalMediaManager: o,
            mediaStreamTrackToAVMTrack: s,
            AVMTrackOriginType: c,
            AVMTrackSourceType: l,
            getSafeAudioDeviceId: d,
            AssistantSpeakingMonitor: f,
          } = e,
          p = $(null),
          m = $(new AbortController()),
          h = $(null),
          g = $(null),
          _ = [],
          v,
          y = new Set(),
          ne = new Set(),
          b = ae(
            i,
            () => _,
            ({ set: e }) => (
              y.add(e),
              () => {
                y.delete(e);
              }
            ),
          ),
          x = ae(
            i,
            () => v,
            ({ set: e }) => (
              ne.add(e),
              () => {
                ne.delete(e);
              }
            ),
          ),
          S = te(i, () => null),
          C = te(i, !1),
          re = t,
          w = (e) => {
            n.setState((t) => {
              t.isDuckingActive = e;
            });
          },
          T = (e) => {
            sn(a, { actor: `user`, isSpeaking: e });
          },
          E = (e) => {
            sn(a, { actor: `assistant`, isSpeaking: e });
          },
          oe = $(void 0),
          D = $(void 0),
          O = $(null),
          ce = (e, t) => {
            p.current === e &&
              (r.debug(`[transceiver] Assistant playback blocked`, { safe: {}, sensitive: { detail: t } }),
              u(a, () => {
                a.set(gt, t instanceof Error ? t : Error(String(t)));
              }));
          },
          le = async ({ track: e, initialSetup: t = !1 }) => {
            let n = e.kind === `audio` ? oe : D;
            if (n.current && !n.current.stopped) await n.current.sender.replaceTrack(e);
            else if (t) n.current = J().addTransceiver(e);
            else throw Error(`Cannot replace track on ${e.kind} transceiver that was not initialized.`);
          },
          ue = $(void 0),
          de = $(void 0),
          fe = $(void 0),
          k = $(null),
          A = $(void 0),
          me = $(void 0),
          j = $(void 0),
          he = $(0),
          _e = () => [A.current, me.current, j.current].filter((e) => e !== void 0),
          ve = (e) => {
            u(a, () => {
              ((A.current = e), (_ = _e()), y.forEach((e) => e(_)));
            });
          },
          ye = (e) => {
            u(a, () => {
              ((me.current = e), (_ = _e()), y.forEach((e) => e(_)));
            });
          },
          be = (e) => {
            u(a, () => {
              ((j.current = e), (_ = _e()), y.forEach((e) => e(_)));
            });
          },
          xe = (e) => {
            u(a, () => {
              ((k.current = e),
                a.set(S, e),
                Se((t) => (t == null ? t : { ...t, state: e ?? F.Disconnected })));
            });
          },
          Se = (e) => {
            ((v = typeof e == `function` ? e(v) : e), ne.forEach((e) => e(v)));
          },
          Ce = () => k.current,
          we = (e) => {
            Se((t) =>
              ie(t, (t) => {
                t &&
                  (t.activeSpeakers.some((t) => t.identity === e) || t.activeSpeakers.push({ identity: e }));
              }),
            );
          },
          Te = (e) => {
            Se((t) =>
              ie(t, (t) => {
                t && (t.activeSpeakers = t.activeSpeakers.filter((t) => t.identity !== e));
              }),
            );
          },
          Ee = $(null),
          N = $(void 0),
          De = $(void 0),
          Oe = $(void 0),
          ke = $(!1),
          Ae = () => {
            ((Oe.current = void 0), (ke.current = !1));
          },
          je = $([]),
          P = {
            connected: [],
            disconnected: [],
            dataReceived: [],
            dataChannelOpen: [],
            trackPublished: [],
            connectionQualityChanged: [],
          },
          I = $(!1),
          Me = (e) => {
            P.trackPublished.forEach((t) => t(e));
          },
          Ne = () => {
            (g.current?.destroy(),
              (g.current = null),
              h.current?.dispose(),
              (h.current = null),
              w(!1),
              T(!1),
              E(!1));
          },
          Pe = async (t, n) => {
            if ((Ne(), !t)) return;
            ((g.current = new f(a, E, () => E(!1))),
              ee(
                async () => {
                  let { preloadSileroVoiceActivityDetector: e } = await import(`./entry-33afd49be636.js`);
                  return { preloadSileroVoiceActivityDetector: e };
                },
                __vite__mapDeps([0, 1, 2, 3]),
                import.meta.url,
              )
                .then(({ preloadSileroVoiceActivityDetector: e }) => e(a))
                .catch(() => {}));
            let { dspConfigManager: r, AssistantPlaybackDucker: i, getVoiceDuckingVolume: o } = e;
            n.throwIfAborted();
            let s = r.getStatsigDuckingConfig(a),
              c = new i(a, {
                duckInactiveHoldMs: s.duckInactiveHoldMs,
                duckingDevicePolicy: s.duckingDevicePolicy,
                duckMinimumDurationMs: s.duckMinimumDurationMs,
                duckedVolume: o(dt() ?? s.duckedRemoteVolumeDb),
                erleDbForConfiguredDuckingDepth: r.getErleDbForConfiguredDuckingDepth(a),
                erleStatsReportReader: r.isErleInformedDuckingEnabled(a)
                  ? () => q.current?.getStats() ?? null
                  : void 0,
                manualDuckingControl: pt(),
                onDuckingChange: (e) => {
                  w(e);
                },
                onUserSpeakingChange: T,
                restorationDurationMs: s.restorationDurationMs,
                restorationSteps: s.restorationSteps,
              });
            ((h.current = c),
              c.attachAudioElement(p.current),
              c.setAudioOutputDeviceId(fe.current),
              c.attachMicrophoneTrack(A.current?.track ?? null));
          },
          L = $(void 0),
          R = () => L.current?.getAudioGapSummary(),
          Ie = $(void 0),
          z = $(void 0),
          Le = {
            waitForMicrophone: async () => {
              let e = z.current,
                t = m.current.signal;
              if (e == null) throw new DOMException(`Voice microphone setup is unavailable`, `AbortError`);
              if ((await e.completeAudioSetup(), t.throwIfAborted(), A.current?.track.readyState !== `live`))
                throw new DOMException(`Voice microphone has ended`, `AbortError`);
            },
          },
          B = $(void 0),
          V = $(void 0),
          H = new Set(),
          Re = () => {
            (V.current?.dispose(),
              (V.current = void 0),
              n.setState({ isInstantAudioCapturing: !1 }),
              B.current?.(),
              (B.current = void 0));
          },
          W = (e, t) => {
            h.current?.handleServerVoiceMessage(e);
            let n = ur().encode(e);
            P.dataReceived.forEach((e) => e(n, t));
          };
        v = {
          localParticipant: {
            isMicrophoneEnabled: !1,
            setMicrophoneEnabled: function (e) {
              return (A.current?.setMuted(!e), Promise.resolve());
            },
            setCameraEnabled: async function (e) {
              if (e)
                try {
                  await Ue(`camera`);
                } catch (e) {
                  throw (
                    r.debug(`[transceiver] Error acquiring camera input`, {
                      safe: {},
                      sensitive: { detail: e },
                    }),
                    e
                  );
                }
              else await X();
            },
            setScreenShareEnabled: async function (e) {
              if (e)
                try {
                  await Ue(`screenshare`);
                } catch (e) {
                  throw (
                    r.debug(`[transceiver] Error acquiring screen share input`, {
                      safe: {},
                      sensitive: { detail: e },
                    }),
                    e
                  );
                }
              else await X();
              return Promise.resolve(void 0);
            },
            publishData: function (e) {
              let t = Ee.current;
              if (t?.readyState !== `open`) return Promise.reject(Error(`Data channel is not open`));
              let n = new TextDecoder().decode(e),
                r = JSON.stringify({ type: `data_message`, data: n });
              return (t.send(r), Promise.resolve());
            },
            on(e, t) {
              e === `connectionQualityChanged` && je.current.push(t);
            },
            off(e, t) {
              e === `connectionQualityChanged` && (je.current = je.current.filter((e) => e !== t));
            },
          },
          getActiveDevice: (e) => {
            switch (e) {
              case `audioinput`:
                return ue.current;
              case `videoinput`:
                return de.current;
              case `audiooutput`:
                return fe.current;
            }
          },
          disconnect: async function () {
            n.getState().hadConversationActivity && Zn(a);
            let e = a.get(U);
            (N.current?.(),
              (N.current = void 0),
              m.current.abort(),
              (m.current = new AbortController()),
              (K.current = !1),
              a.set(C, !1),
              De.current?.(),
              (De.current = void 0),
              Wn.abortPendingNegotiation(`Disconnecting`),
              L.current?.stop(),
              (L.current = void 0),
              (I.current = !0));
            let t = o.closeAllStreams(a, `microphone`);
            (Re(),
              A.current?.track.stop(),
              ve(void 0),
              ye(void 0),
              Ne(),
              u(a, () => {
                a.set(gt, null);
              }),
              (q.current &&= (q.current.close(), void 0)),
              (O.current = null),
              (Ie.current = void 0),
              (z.current = void 0),
              (oe.current = void 0),
              (D.current = void 0),
              Ae(),
              (p.current &&= (p.current.pause(), (p.current.srcObject = null), p.current.remove(), null)),
              xe(null));
            let r = X();
            (pe(
              a,
              e,
              t.then(() => {}),
            ),
              await r);
            let { isVoiceModeActive: i } = n.getState(),
              s = a.get(U);
            i && s === e && (xe(F.Disconnected), P.disconnected.forEach((e) => e()));
          },
          name: ``,
          switchActiveDevice: async (e, t, n) => {
            if (k.current !== F.Connected)
              return (
                r.debug(`[transceiver] Attempt to switch device when not connected, current state is`, {
                  safe: {},
                  sensitive: { detail: k.current },
                }),
                !1
              );
            let i = m.current.signal;
            try {
              switch (e) {
                case `audioinput`: {
                  let e = await He(t, { connectionAttemptSignal: i, replaceExistingTrack: !0 });
                  return (
                    i.throwIfAborted(),
                    Me(e),
                    wn({ scope: a, room: v ?? null, expectedVoiceSessionId: a.get(U) }),
                    !0
                  );
                }
                case `videoinput`:
                  return (await Ue(`camera`, t), !0);
                case `audiooutput`:
                  return (
                    await p.current?.setSinkId(t),
                    i.throwIfAborted(),
                    (fe.current = t),
                    h.current?.setAudioOutputDeviceId(t),
                    wn({ scope: a, room: v ?? null, expectedVoiceSessionId: a.get(U) }),
                    !0
                  );
              }
            } catch (t) {
              return (
                r.debug(`[transceiver] Failed to switch device`, {
                  safe: { kind: e },
                  sensitive: { detail: t },
                }),
                !1
              );
            }
          },
          on(e, t) {
            P[e].push(t);
          },
          off(e, t) {
            switch (e) {
              case `connected`:
                P.connected = P.connected.filter((e) => e !== t);
                break;
              case `disconnected`:
                P.disconnected = P.disconnected.filter((e) => e !== t);
                break;
              case `dataReceived`:
                P.dataReceived = P.dataReceived.filter((e) => e !== t);
                break;
              case `dataChannelOpen`:
                P.dataChannelOpen = P.dataChannelOpen.filter((e) => e !== t);
                break;
              case `trackPublished`:
                P.trackPublished = P.trackPublished.filter((e) => e !== t);
                break;
              case `connectionQualityChanged`:
                P.connectionQualityChanged = P.connectionQualityChanged.filter((e) => e !== t);
            }
          },
          state: F.Disconnected,
          numParticipants: 0,
          activeSpeakers: [],
        };
        let K = $(!1),
          ze = () => {
            let e = Oe.current,
              t = O.current;
            !ke.current &&
              e &&
              v &&
              Ee.current?.readyState === `open` &&
              ((ke.current = !0),
              (Oe.current = void 0),
              yn(v, n, `microphone`, e.isMuted ? `muted` : `live`).catch((e) =>
                r.debug(`[voice] Initial microphone state could not be published`, {
                  safe: {},
                  sensitive: { error: e },
                }),
              ),
              t != null && wn({ scope: a, room: v, expectedVoiceSessionId: t.voice_session_id }));
          },
          Be = (e) => {
            ((Oe.current = e), ze());
          },
          Ve = (e) => {
            v &&
              Ee.current?.readyState === `open` &&
              bn({
                room: v,
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
                r.debug(`[transceiver] Failed to publish client metrics sample`, {
                  safe: {},
                  sensitive: { error: e },
                });
              });
          },
          q = $(void 0),
          J = () => {
            try {
              return ((q.current = q.current ?? It.getFreshPeerConnection(`voice-mode`)), q.current);
            } catch (e) {
              let t = Z.reportedVoiceMode(a, { voiceMode: O.current?.voice_mode });
              throw (
                M(a, ge, {
                  voiceMetadata: {
                    mode: t,
                    sessionId: O.current?.voice_session_id ?? void 0,
                    style: O.current?.voice ?? void 0,
                  },
                  errorBucket: se.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_BUCKET_CLIENT,
                  errorType:
                    Fe.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_PEER_CONNECTION_CREATION_FAILED,
                }),
                e
              );
            }
          },
          Y = (e, t) => {
            (V.current?.setMuted(e),
              H.forEach((t) => t(e)),
              Se((n) =>
                ie(n, (n) => {
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
          He = async (
            t,
            { connectionAttemptSignal: i = m.current.signal, replaceExistingTrack: u = !1 } = {},
          ) => {
            let f = !u && jn(a),
              { _instantAudio: p } = G(a);
            u || ((p.initiallyEligible = f), (p.applied = !1));
            let g = t,
              _ = await re?.({ deviceId: g });
            (i.aborted &&
              (_?.cleanup?.(), _?.stream.getTracks().forEach((e) => e.stop()), i.throwIfAborted()),
              _ ||
                (g || ((g = await d()), i.throwIfAborted()),
                (_ = {
                  stream: await o.consumeUserMedia(a, {
                    audio: {
                      ...(Z.sessionType(a) === `wm` ? e.getAudioConstraintsOverride$(a) : {}),
                      ...(g ? { deviceId: { exact: g } } : {}),
                    },
                  }),
                }),
                i.aborted &&
                  (_.cleanup?.(), _.stream.getTracks().forEach((e) => e.stop()), i.throwIfAborted())));
            let {
                cleanup: y,
                forceMute: ee = !1,
                microphoneDeviceId: te,
                preserveMute: ne = !0,
                stream: b,
              } = _,
              x = b.getTracks();
            if (x.length !== 1)
              throw (y?.(), x.forEach((e) => e.stop()), Error(`Only one input is supported for now`));
            let [S] = x;
            if (u) {
              let e = !1,
                t = () => {
                  (H.delete(r), !(e || A.current?.track === S) && ((e = !0), y?.(), S.stop()));
                },
                r = (e) => {
                  A.current?.track !== S && (ee || ne) && (S.enabled = !(ee || e));
                };
              ((ee || A.current?.isMuted) && r(!0), H.add(r), i.addEventListener(`abort`, t, { once: !0 }));
              try {
                (await le({ track: S }),
                  i.throwIfAborted(),
                  V.current?.dispose(),
                  (V.current = void 0),
                  n.setState({ isInstantAudioCapturing: !1 }));
              } catch (e) {
                throw (t(), e);
              } finally {
                (H.delete(r), i.removeEventListener(`abort`, t));
              }
            }
            let { echoCancellation: C } = S.getSettings();
            (typeof C == `boolean` &&
              n.setState((e) => {
                ((e.aecEnabled = C), e.audioRoute === `unknown` && (e.audioRoute = null));
              }),
              h.current?.attachMicrophoneTrack(S),
              (ue.current = te ?? S.getSettings().deviceId),
              A.current && A.current.track !== S && (Re(), A.current.track.stop()),
              (B.current = y),
              (ee || (ne && A.current?.isMuted)) && (S.enabled = !1));
            let w = s(S, {
              source: l.Microphone,
              name: `user`,
              userName: `User`,
              origin: c.Local,
              mutedCb: Y,
            });
            if ((ve(w), Y(w.isMuted, w.isSystemMuted), f)) {
              let e = w.isMuted,
                t = (t) => {
                  e ||= t;
                };
              (H.add(t), p.setup.start());
              try {
                let t = await Pn(
                  b,
                  i,
                  () => {
                    i.aborted ||
                      (p.firstBuffer.mark(),
                      p.capture.isEnded() || p.capture.start(),
                      n.setState({ isInstantAudioCapturing: !0 }));
                  },
                  () => {
                    (n.setState({ isInstantAudioCapturing: !1 }), v?.disconnect().catch(() => {}));
                  },
                  (e) => {
                    if (!p.interrupted.isMarked()) {
                      if (e === `interrupted`) {
                        for (let e of [p.capture, p.replay])
                          e.isStarted() && !e.isEnded() && (e.fail(), p.interrupted.mark());
                        return;
                      }
                      (p.capture.end(),
                        e === `replaying`
                          ? p.replay.start()
                          : (p.replay.isStarted() && p.replay.end(), p.live.mark()));
                    }
                  },
                );
                (i.throwIfAborted(),
                  (V.current = t),
                  (p.workletInitializationMs = t.workletInitializationMs),
                  p.setup.end(),
                  e && t.setMuted(!0),
                  t.setMuted(w.isMuted));
              } catch {
                (p.setup.fail(),
                  i.throwIfAborted(),
                  V.current?.dispose(),
                  (V.current = void 0),
                  n.setState({ isInstantAudioCapturing: !1 }),
                  r.debug(`[instant-audio] Startup buffering failed; using the live microphone`));
              } finally {
                H.delete(t);
              }
            }
            return w;
          },
          Ue = async (e, t) => {
            let n = m.current.signal,
              r;
            try {
              if (
                ((r = await We(e, t)), n.throwIfAborted(), r.track.readyState === `ended` || j.current !== r)
              )
                throw new DOMException(`Video capture ended`, `AbortError`);
              Me(r);
            } catch (e) {
              throw (r != null && j.current === r && (await X()), e);
            }
          },
          We = async (e, t) => {
            let n = m.current.signal,
              r = ++he.current,
              i =
                e === `camera`
                  ? await o.getUserMedia(a, { video: !t || { deviceId: { exact: t } } })
                  : await o.getDisplayMedia(a);
            if (n.aborted || r !== he.current)
              throw (
                i.getTracks().forEach((e) => e.stop()),
                new DOMException(`Video capture canceled`, `AbortError`)
              );
            let u = i.getTracks();
            if (u.length !== 1)
              throw (u.forEach((e) => e.stop()), Error(`Only one video input is supported for now`));
            let [d] = u,
              f = !1,
              p = () => {
                !f && j.current?.track !== d && ((f = !0), d.stop());
              };
            n.addEventListener(`abort`, p, { once: !0 });
            try {
              if ((await le({ track: d }), n.throwIfAborted(), r !== he.current || d.readyState === `ended`))
                throw new DOMException(`Video capture canceled`, `AbortError`);
            } catch (e) {
              throw (p(), e);
            } finally {
              n.removeEventListener(`abort`, p);
            }
            (e === `camera` && (de.current = d.getSettings().deviceId),
              j.current && j.current.track !== d && j.current.track.stop());
            let h = s(d, {
              source: e === `camera` ? l.Camera : l.ScreenShare,
              name: `user`,
              userName: `User`,
              origin: c.Local,
            });
            return (be(h), h);
          },
          X = async () => {
            if (
              ((he.current += 1),
              j.current &&
                (r.debug(`[transceiver] Stop and clear video track`),
                j.current.track.stop(),
                be(void 0),
                D.current && !D.current.stopped))
            ) {
              r.debug(`[transceiver] Stop the video transceiver`);
              try {
                await D.current.sender.replaceTrack(null);
              } catch (e) {
                r.debug(`[transceiver] Failed to stop transceiver on disconnect due to`, {
                  safe: {},
                  sensitive: { detail: e },
                });
              }
            }
          },
          Ge = (e) => {
            let { default_voice_mode: t, modes: n } = e,
              r = n?.find((e) => e.mode === t);
            if (!r) throw Error(`No voice status mode found for default mode ${t}`);
            return r;
          },
          Ke = ({ dataChannel: e, getEventTimestamp: t, getPeerConnectionState: i, pc: o }) => {
            let u = m.current.signal,
              { dataChannelOpen: d } = G(a);
            ((e.onopen = () => {
              if (u.aborted) return;
              (d.mark(t()), a.set(C, !0));
              let e = O.current;
              (e != null && P.dataChannelOpen.forEach((t) => t(e)),
                N.current?.(),
                (N.current = v ? Kn({ scope: a, room: v }) : void 0),
                ze());
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
                  (n.data.type === `data_message` ? W(n.data.data) : n.data.type === `error` && W(e.data));
              }),
              (e.onclose = () => {
                u.aborted ||
                  (a.set(C, !1),
                  N.current?.(),
                  (N.current = void 0),
                  I.current ? (I.current = !1) : P.disconnected.forEach((e) => e()),
                  Te(sr),
                  g.current?.stop({ notify: !1 }),
                  Ne());
              }),
              (o.oniceconnectionstatechange = () => {
                if (u.aborted) return;
                let { tcConnect: e } = G(a),
                  r = k.current,
                  { iceConnectionState: o } = i(),
                  s = nr(o),
                  {
                    voiceMode: c,
                    sessionType: l,
                    server: { voiceBackend: d },
                  } = n.getState(),
                  f = Z.reportedVoiceMode(a, { voiceMode: c, sessionType: l, voiceBackend: d });
                (r === F.Connecting && s === F.Disconnected
                  ? (e.isStarted() && e.fail(),
                    M(a, ge, {
                      voiceMetadata: {
                        mode: f,
                        sessionId: O.current?.voice_session_id ?? void 0,
                        style: O.current?.voice ?? void 0,
                      },
                      errorType:
                        Fe.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_CONNECTION_ESTABLISHMENT_FAILED,
                    }))
                  : !I.current &&
                    r === F.Connected &&
                    s === F.Disconnected &&
                    M(a, ge, {
                      voiceMetadata: {
                        mode: f,
                        sessionId: O.current?.voice_session_id ?? void 0,
                        style: O.current?.voice ?? void 0,
                      },
                      errorBucket: se.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_BUCKET_SERVER,
                      errorType:
                        Fe.CHATGPT_VOICE_SESSION_USER_PERCEIVED_ERROR_TYPE_CONNECTION_LOST_AFTER_ESTABLISHED,
                    }),
                  s === F.Connected && (e.end(t()), P.connected.forEach((e) => e())),
                  xe(s),
                  n.setState((e) => {
                    e.server.connectionState = s;
                  }));
              }),
              (o.ontrack = (e) => {
                if (u.aborted) return;
                let t = p.current;
                if (t == null) return;
                let i = e.streams[0];
                t.srcObject = i;
                try {
                  t.play()?.catch((e) => ce(t, e));
                } catch (e) {
                  ce(t, e);
                }
                let a = i.getTracks();
                if (a.length !== 1)
                  throw (
                    r.debug(
                      `[transceiver] Only one remote track is supported for now, detected these tracks`,
                      { safe: {}, sensitive: { detail: a } },
                    ),
                    Error(`Only one remote track is supported for transceiver`)
                  );
                let [o] = a;
                (h.current?.attachAudioElement(t), g.current?.attachTrack(o));
                let d = s(o, {
                  source: l.Microphone,
                  name: n.getState().voiceMode === `advanced` ? `audio` : `shout`,
                  userName: `Assistant`,
                  origin: c.Remote,
                });
                (ye(d),
                  Me(d),
                  Se((e) =>
                    ie(e, (e) => {
                      e && (e.numParticipants = 2);
                    }),
                  ),
                  we(sr));
              }));
          },
          qe = (e) => {
            if (!e && D.current && !D.current.stopped) {
              let e = J();
              (D.current.stop(), e.removeTrack(D.current.sender));
            }
            let t = Pt(a) ? Lt.bufferApplyEventHandlers(a, e, Ke) : Ke,
              n = m.current.signal,
              r = jt
                .preConnectionSetup(a, {
                  applyEventHandlers: t,
                  existingConnection: e,
                  getPeerConnection: J,
                  onDataChannelCreated: (e) => {
                    ((Ee.current = e), a.set(C, e.readyState === `open`));
                  },
                  onPeerConnectionCreated: (e) => {
                    (n.throwIfAborted(), (q.current = e));
                  },
                  onTransceiverCreated: (e, t) => {
                    e === `audio` ? (oe.current = t) : (D.current = t);
                  },
                  timings: G(a),
                })
                .then(
                  (e) => (
                    n.aborted &&
                      (e.stopMonitoring(), e.dataChannel.close(), e.pc.close(), n.throwIfAborted()),
                    e
                  ),
                );
            return (r.catch(() => {}), r);
          },
          Je = (e = m.current.signal) => {
            let { _peerConnection: t } = G(a);
            t.audioInputAcquisition.start();
            let n = He(void 0, { connectionAttemptSignal: e });
            return (
              n.then(
                () => t.audioInputAcquisition.end(),
                () => {},
              ),
              { completeAudioSetup: async () => ({ microphoneTrack: await n }) }
            );
          },
          Ye = () => {
            let { _peerConnection: e } = G(a);
            e.qualityMonitorSetup.start();
            let t = J();
            (L.current && L.current.stop(),
              (L.current = new Vn(t, (e) => {
                let t =
                  k.current && [F.Disconnected, F.Reconnecting, F.SignalReconnecting].includes(k.current);
                (P.connectionQualityChanged.forEach((n) => n(t ? Q.LOST : e.general)),
                  je.current.forEach((n) => n(t ? Q.LOST : e.local)));
              })),
              L.current.start(),
              e.qualityMonitorSetup.end());
          },
          Xe = async ({ waitForMicrophone: e = !1 } = {}) => {
            let t = m.current.signal;
            (Ae(), (z.current = Je(t)), a.set(ht, Le));
            let n = z.current.completeAudioSetup();
            (e && (await n, t.throwIfAborted()), (Ie.current = qe()), await n);
          },
          Ze = async (e, t, i, o) => {
            let { _peerConnection: s, _postConnect: c, tcConnect: l, _instantAudio: u } = G(a);
            s.postConnectionSetup.start();
            let d =
              i.type === `race`
                ? i.ready
                : (async () => {
                    let e = await c.getResponseText.timeAsync(() => i.httpResponse.text());
                    return (
                      await c.setRemoteDescription.timeAsync(() =>
                        i.preparedConnection.pc.setRemoteDescription({ sdp: e, type: `answer` }),
                      ),
                      i.preparedConnection
                    );
                  })();
            (d.catch(() => {}),
              l.start(),
              (z.current ||=
                (r.debug(`[transceiver] Audio input setup step not executed for initial TC offer!`), Je(o))));
            let { completeAudioSetup: f } = z.current,
              p;
            try {
              ({ microphoneTrack: p } = await f());
            } catch (e) {
              if (o.aborted) return;
              throw e;
            }
            if (o.aborted) return;
            let m = V.current,
              g = m?.track ?? p.track,
              _ =
                i.type === `race`
                  ? i.setAudioTrack(g)
                  : s.audioTransceiverSetup.timeAsync(() => le({ track: g, initialSetup: !0 }));
            (_.catch((e) => {
              r.debug(`[transceiver] Failed to attach the initial microphone track`, {
                safe: {},
                sensitive: { error: e },
              });
            }),
              Be(p),
              h.current?.attachMicrophoneTrack(p.track),
              Me(p),
              n.setState((n) => {
                ((n.style = e.voice),
                  (n.conversationId = e.conversation_id ?? t.conversationId),
                  (n.voiceSessionId = e.voice_session_id),
                  (n.voiceMode = e.voice_mode));
              }));
            let v;
            try {
              v = await d;
            } catch (e) {
              if (o.aborted) return;
              throw (
                l.isStarted() && l.fail(),
                (K.current = !1),
                xe(F.Disconnected),
                n.setState((e) => {
                  e.server.connectionState = F.Disconnected;
                }),
                Ne(),
                s.postConnectionSetup.end(),
                e
              );
            }
            o.aborted ||
              (m != null && (await _, o.throwIfAborted(), (u.applied = !0), m.releaseWhenConnected(v.pc)),
              (K.current = !1),
              xe(F.Connected),
              Ye(),
              De.current?.(),
              (De.current = v.stopMonitoring),
              v.startMonitoring({
                onClientMetricsSample: Ve,
                getReportedVoiceMode: () => {
                  let {
                    voiceMode: e,
                    sessionType: t,
                    server: { voiceBackend: r },
                  } = n.getState();
                  return Z.reportedVoiceMode(a, { voiceMode: e, sessionType: t, voiceBackend: r });
                },
                voiceSessionId: e.voice_session_id,
              }),
              s.postConnectionSetup.end());
          },
          Qe = () => {
            if (p.current == null) {
              let e = document.createElement(`audio`);
              ((e.autoplay = !0), e.setAttribute(`playsinline`, ``), (p.current = e));
            }
            return p.current;
          };
        return {
          get room() {
            return v;
          },
          room$: x,
          connectionState$: S,
          isDataChannelOpen$: C,
          tracks$: b,
          getConnectionState: Ce,
          getAudioGapSummary: R,
          initVoiceMode: async (e, t) => {
            if (K.current)
              throw Error(`Not ready to connect, ${JSON.stringify({ isConnecting: K.current })}`);
            let i = m.current.signal;
            try {
              (u(a, () => {
                a.set(gt, null);
              }),
                (O.current = e));
              let o = Qe();
              if (((o.muted = !1), Ae(), (K.current = !0), (I.current = !1), fe.current !== void 0)) {
                try {
                  await o.setSinkId(fe.current);
                } catch (e) {
                  if (!(e instanceof DOMException) || e.name !== `NotFoundError`) throw e;
                  (r.debug(
                    `[transceiver] Previous audio output device is no longer available; using the system default`,
                    { safe: {}, sensitive: { error: e } },
                  ),
                    (fe.current = void 0));
                }
                i.throwIfAborted();
              }
              let s = await wt.getVoiceAccessToken();
              i.throwIfAborted();
              let c = Z.sessionType(
                a,
                e.conversation_mode?.kind === `gizmo_interaction` ? e.conversation_mode.gizmo_id : void 0,
              );
              (await Pe(_t(c), i), i.throwIfAborted());
              let { _preConnect: l } = G(a);
              (Bt(a, e, c),
                (e.deprecate_celsius = Ft(a, {
                  sessionType: c,
                  voiceMode: e.voice_mode,
                  chatMode: e.chat_mode,
                  deprecateCelsius: e.deprecate_celsius,
                  disableExposureLog: !1,
                })),
                n.setState({ deprecateCelsius: e.deprecate_celsius }),
                (z.current = z.current ?? Je(i)),
                a.set(ht, Le));
              let d = (Ie.current ??= qe()),
                f = l.createAbortSignal.time(() => Wn.beginNegotiation()),
                p = {
                  mode: Z.reportedVoiceMode(a, { voiceMode: e.voice_mode, sessionType: c }),
                  sessionId: e.voice_session_id ?? void 0,
                  style: e.voice ?? void 0,
                },
                m = Pt(a)
                  ? Lt.raceCache(a, c, e, {
                      accessToken: s,
                      eventSource: t.eventSource,
                      freshConnectionBundle: d,
                      preConnectionSetup: qe,
                      proofOfWorkAnswer: t.proofOfWorkAnswer,
                      signal: f,
                      voiceMetadata: p,
                    })
                  : { type: `raceSkipped` };
              m.type === `raceSkipped` && Lt.activateFreshCandidateEventHandlers(d);
              let h;
              if (m.type === `raceStarted`)
                (m.futureWinner.then(
                  () => Wn.clearNegotiation(f),
                  () => Wn.clearNegotiation(f),
                ),
                  (h = { ready: m.futureWinner, setAudioTrack: m.setAudioTrack, type: `race` }));
              else {
                let n = await d;
                i.throwIfAborted();
                let r = await yt.startTransceiverSession(a, {
                  accessToken: s,
                  dataChannelId: 0,
                  eventSource: t.eventSource,
                  offer: n.offer,
                  payload: e,
                  proofOfWorkAnswer: t.proofOfWorkAnswer,
                  signal: f,
                  voiceMetadata: p,
                });
                (i.throwIfAborted(),
                  Wn.clearNegotiation(f),
                  (h = { httpResponse: r, preparedConnection: n, type: `regular` }));
              }
              Ie.current === d && (Ie.current = void 0);
              let g = Ze(e, t, h, i).catch((e) => {
                throw (i.aborted || (t.onConnectionSetupError?.(e), v?.disconnect().catch(() => {})), e);
              });
              return (
                g.catch(() => {}),
                { connectionSetupPromise: h.type === `race` ? g : void 0, type: `transceiver`, success: !0 }
              );
            } catch (e) {
              throw (
                i.aborted ||
                  ((K.current = !1), t.onConnectionSetupError?.(e), v?.disconnect().catch(() => {})),
                e
              );
            }
          },
          selectVoiceModeMetadata: Ge,
          preSignallingSetup: Xe,
          setTryAcquireMicrophoneInput(e) {
            re = e;
          },
          async dispose() {
            v && (await v.disconnect());
          },
        };
      }),
      (fr = new WeakMap()));
  }))();
}
async function mr(e) {
  let t = G(e);
  await e.when(({ get: n }) => {
    let r = n(ze),
      i = n(U);
    return n(z) != null || r.sentSessionId === i || !i || G(e) !== t;
  });
  let n = R(e).getState();
  G(e) === t && !t.session.isEnded() && n.isVoiceModeActive && n.voiceSessionId === e.get(z) && hr(e);
}
function hr(e, t) {
  let n = e.get(ze),
    i = e.get(U);
  if (i.trim() && n.sentSessionId !== i) {
    e.set(ze, { ...n, sentSessionId: i });
    try {
      let { voiceMode: n, sessionType: r, server: a } = R(e).getState(),
        o = Z.reportedVoiceMode(e, { voiceMode: n, sessionType: r, voiceBackend: a.voiceBackend, reason: t });
      e.get(Pe).logProductEvent(A, { ...On(e, o, i), productExperience: e.get(yr) });
    } catch (e) {
      r.debug(`[voice] Failed to log connection setup analytics`, { safe: {}, sensitive: { error: e } });
    }
  }
}
function gr(e, t, n) {
  let i = e.get(U);
  if (!i.trim()) return Promise.resolve();
  let a = G(e),
    o = e.get(br, void 0),
    s = R(e),
    {
      session: c,
      conversationStart: u,
      sessionConnected: d,
      visuallyConnected: f,
      userAborted: p,
      postCallCommitWait: h,
    } = a;
  (c.end(), h.isStarted() && !h.isEnded() && h.end(), u.isSuccessful() || p.mark(), hr(e, t));
  let g = o.get(i);
  if (g != null) return g;
  let _ = cn(e),
    v = s.getState().voiceSessionId ? fn(e) : {},
    { metrics: y, voiceMode: ee, sessionType: te, style: ne, server: b } = s.getState(),
    x = Z.reportedVoiceMode(e, { voiceMode: ee, sessionType: te, voiceBackend: b.voiceBackend, reason: t }),
    S = c.getStartAsTimestamp(),
    C = c.getEndAsTimestamp(),
    re = d.getMarkAsTimestamp(),
    w = S !== void 0 && C !== void 0 ? C - S : void 0,
    ie = C !== void 0 && re !== void 0 && C >= re ? C - re : void 0,
    ae = e.get(yr),
    T = rr(e).getAudioGapSummary(),
    E = {
      voiceMode: x,
      voiceMetadata: { style: ne },
      voiceSessionId: i,
      protocol: `transceiver`,
      sessionStartTsMs: S,
      sessionEndTsMs: C,
      sessionConnectedTsMs: re,
      sessionDurationMs: w,
      connectedDurationMs: ie,
      ..._,
      ...v,
      ...nn(e),
      numOfTurnsSpeaking: m(y.numSpeaking),
      numOfTurnsThinking: m(y.numThinking),
      numOfTurnsListening: m(y.numListening),
      sessionEndReason: vr(t),
      wasConnectedAtTimeOfExit: b.connectionState === F.Connected,
      timeToVisuallyConnectedMs: f.getDuration() ?? void 0,
      visuallyConnectedTsMs: f.getMarkAsTimestamp() ?? void 0,
      ...(T?.thresholdMs === void 0
        ? {}
        : {
            audioGapThresholdMs: T.thresholdMs,
            silentAudioGapTotalMs: T.silentTotalMs,
            silentAudioGapCount: m(T.silentCount),
            nonSilentAudioGapTotalMs: T.nonSilentTotalMs,
            nonSilentAudioGapCount: m(T.nonSilentCount),
            remoteOutputAudioTrackDurationMs: T.remoteOutputAudioTrackDurationMs,
            webrtcStatsPollingIntervalMs: T.webrtcStatsPollingIntervalMs,
            activeOutputAudioDurationMs: T.activeOutputAudioDurationMs,
            activeOutputAudioRmsThresholdRatio: T.activeOutputAudioRmsThresholdRatio,
          }),
      ...(T?.endSessionNetworkTelemetry
        ? {
            ...T.endSessionNetworkTelemetry,
            packetsLostCount: l(T.endSessionNetworkTelemetry.packetsLostCount),
            packetsReceivedCount: m(T.endSessionNetworkTelemetry.packetsReceivedCount),
            stunRequestsSentCount: m(T.endSessionNetworkTelemetry.stunRequestsSentCount),
            stunResponsesReceivedCount: m(T.endSessionNetworkTelemetry.stunResponsesReceivedCount),
          }
        : {}),
      productExperience: ae,
    },
    oe = e.get(Pe),
    se = Tn(n, { snapshotActiveDevices: !0 })
      .then((e) => (oe.logProductEvent(Ae, { ...E, finalAudioRoute: e }), oe.flush(xr)))
      .catch((e) => {
        r.debug(`[voice] Failed to log session end analytics`, { safe: {}, sensitive: { error: e } });
      });
  if ((o.set(i, se), o.size > 100)) {
    let e = o.keys().next().value;
    e != null && o.delete(e);
  }
  return se;
}
function _r(e, t, n, r, i) {
  let a = e.get(Ge, n.conversationId),
    s = e.get(P, n.conversationId),
    u = s === `tpp` || s === `flora`,
    d = e.get(q, n.conversationId),
    f =
      d == null
        ? e.get(Oe, n.conversationId)
        : (e.get(Be, d) ?? e.query.getData(ye, d)?.default_model_slug) != null,
    p = a && (u || f),
    m = t instanceof ne ? t : void 0,
    h = m?.diagnosticError ?? t,
    g = h instanceof oe ? h : void 0,
    _ = m == null ? g?.status : m.explicitResponseStatus,
    v;
  return (
    (v = m?.errorKind === `network` || (typeof _ != `number` && c(h))),
    {
      toastId: `start_voice_mode_failure`,
      conversationId: b.parse(r),
      userFacingError: {
        surface: K(p ? u : null),
        errorCategory: O.CHATGPT_USER_FACING_ERROR_CATEGORY_VOICE,
        operation: `start_voice_mode`,
        voiceSessionId: b.parse(i),
        errorCode: Sr.parse(g == null ? m?.errorCode : g.code),
        statusCode: !v && _ != null ? l(_) : void 0,
        isNetworkError: v,
        requestId: b.parse(g?.requestId),
        serverRequestId: b.parse(g?.xOaiRequestId),
        backingError: { className: o.parse(h instanceof Error ? h.name : void 0) },
      },
    }
  );
}
function vr(e) {
  return e === ut.UserNavigatedAway
    ? `conversation_nav`
    : e === ut.UserSwitchedToStandard
      ? `voice_changed`
      : e;
}
var yr, br, xr, Sr;
function Cr() {
  return (Cr = e(() => {
    (Ve(),
      Ke(),
      he(),
      p(),
      s(),
      le(),
      Le(),
      qe(),
      Ie(),
      _(),
      De(),
      E(),
      h(),
      Y(),
      lt(),
      B(),
      J(),
      X(),
      T(),
      Dn(),
      kn(),
      vt(),
      pr(),
      gn(),
      (yr = te(i, () => void 0)),
      (br = y(i, (e) => new Map())),
      (xr = 250),
      (Sr = g()
        .max(64)
        .regex(/^(?:[0-9]+|[a-z][a-z0-9_-]*|file\.(?:processing|indexing)\.(?:error|cancelled))$/)
        .optional()
        .catch(void 0)));
  }))();
}
function wr(e) {
  let t = e.chain.get(i.id) ?? e.node,
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
  let r = G(e).session.isStarted();
  if (n || !r) {
    let n = je(e);
    (e.set(yr, void 0), at(e));
    let r = Tt();
    (Or.set(e.chain.get(i.id) ?? e.node, r),
      r.then((t) => {
        r === wr(e) && e.set(ot, t);
      }),
      n.session.start(),
      n.surfaceToStart.start(),
      e.set(st, t));
    let a = kt();
    (ue(e, a), e.set(U, a));
  }
}
function Dr(e, { resetTimings: t = !1 } = {}) {
  if (t) {
    (je(e), at(e), Or.set(e.chain.get(i.id) ?? e.node, Promise.resolve(`unknown`)), He(e));
    return;
  }
  G(e).session.reset();
}
var Or;
function kr() {
  return (kr = e(() => {
    (me(), E(), Y(), B(), ct(), Cr(), xt(), Et(), (Or = new WeakMap()));
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
//# sourceMappingURL=mark-session-create-81e5a4cafea1.js.map
