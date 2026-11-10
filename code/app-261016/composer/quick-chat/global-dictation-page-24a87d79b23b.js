import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $O as n,
  $St as r,
  $st as i,
  FBt as a,
  GH as o,
  JOt as s,
  LNt as c,
  MB as l,
  MFt as u,
  MNt as d,
  NFt as f,
  NNt as p,
  Ok as ee,
  PBt as m,
  Qst as h,
  RFt as g,
  SY as _,
  TY as v,
  XO as y,
  XOt as b,
  Y3 as x,
  YO as S,
  Z3 as C,
  ZSt as w,
  ast as T,
  dit as E,
  e6 as te,
  ek as ne,
  iCt as re,
  ist as ie,
  jB as D,
  jFt as ae,
  kk as O,
  nB as oe,
  nCt as se,
  oit as k,
  okt as ce,
  rB as le,
  sct as A,
  tht as ue,
  tkt as j,
  vD as de,
  yD as fe,
  zFt as pe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $u as me,
  CMr as he,
  COt as ge,
  Cjr as _e,
  Dn as ve,
  Hu as ye,
  On as be,
  QJt as xe,
  SOt as Se,
  Uu as Ce,
  XJt as M,
  YJt as we,
  ZJt as Te,
  _It as Ee,
  _Ot as De,
  _d as Oe,
  ad as ke,
  bOt as Ae,
  dNr as je,
  ed as Me,
  fNr as Ne,
  gIt as Pe,
  gd as Fe,
  hn as N,
  id as Ie,
  kn as Le,
  mn as Re,
  nYt as ze,
  njr as Be,
  od as Ve,
  rYt as He,
  rd as Ue,
  sd as We,
  tjr as Ge,
  uNr as Ke,
  vOt as qe,
  xOt as Je,
  xjr as Ye,
  yMr as P,
  yOt as Xe,
} from "./app-initial-ad16eaadf81f.js";
import { F_ as Ze, P_ as F } from "./app-primary-3e00728c2a4c.js";
import { n as Qe, t as I } from "./use-floating-window-pointer-interactivity-f11f99683166.js";
function $e(e) {
  let t = (0, R.c)(38),
    { failure: n, onCopy: r, onOpenSettings: i, onDismiss: a } = e,
    s = ce(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = ee(`CmdOrCtrl+V`)), (t[0] = c)) : (c = t[0]);
  let l = c,
    u = (0, et.useRef)(null),
    d;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = {
        includeInteractiveRegion: !0,
        interactiveRegionRef: u,
        publishInitialNonInteractive: !1,
        onInteractiveChange: L,
      }),
      (t[1] = d))
    : (d = t[1]),
    Qe(d));
  let f;
  t[2] === n.copied
    ? (f = t[3])
    : ((f = (0, z.jsx)(`div`, {
        className: `font-medium text-default`,
        children: n.copied
          ? (0, z.jsx)(j, {
              id: `globalDictation.pasteFailed.copiedShortcut`,
              defaultMessage: `Text copied — <shortcut>{keys}</shortcut> to paste`,
              description: `Dictation transcript is on the clipboard; shortcut is the system paste keybinding`,
              values: { keys: l, shortcut: () => (0, z.jsx)(D, { keysLabel: l }) },
            })
          : (0, z.jsx)(j, {
              id: `globalDictation.pasteFailed.notCopied`,
              defaultMessage: `Your clipboard changed`,
              description: `Dictation preserved newer clipboard contents instead of replacing them`,
            }),
      })),
      (t[2] = n.copied),
      (t[3] = f));
  let p;
  t[4] === n.copied
    ? (p = t[5])
    : ((p = n.copied
        ? null
        : (0, z.jsx)(j, {
            id: `globalDictation.pasteFailed.copyToPaste`,
            defaultMessage: `Copy your transcript to paste it`,
            description: `Recovery instruction when the transcript could not be copied automatically`,
          })),
      (t[4] = n.copied),
      (t[5] = p));
  let m;
  t[6] !== n.copied || t[7] !== n.reason
    ? ((m =
        n.copied && n.reason === `accessibility`
          ? (0, z.jsx)(j, {
              id: `globalDictation.pasteFailed.enableAccessibility`,
              defaultMessage: `Enable Accessibility to paste automatically`,
              description: `Explains how to enable automatic insertion after dictation`,
            })
          : null),
      (t[6] = n.copied),
      (t[7] = n.reason),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== n.copied || t[10] !== n.reason
    ? ((h =
        n.copied && n.reason !== `accessibility`
          ? (0, z.jsx)(j, {
              id: `globalDictation.pasteFailed.manualPaste`,
              defaultMessage: `Couldn't paste automatically`,
              description: `Automatic insertion failed but the copied transcript can be pasted manually`,
            })
          : null),
      (t[9] = n.copied),
      (t[10] = n.reason),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== p || t[13] !== m || t[14] !== h
    ? ((g = (0, z.jsxs)(`div`, { className: `text-xs text-codex-description`, children: [p, m, h] })),
      (t[12] = p),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let v;
  t[16] !== f || t[17] !== g
    ? ((v = (0, z.jsxs)(`div`, { className: `flex flex-col gap-0.5`, children: [f, g] })),
      (t[16] = f),
      (t[17] = g),
      (t[18] = v))
    : (v = t[18]);
  let y;
  t[19] !== n.reason || t[20] !== i
    ? ((y =
        n.reason === `accessibility` && i != null
          ? (0, z.jsx)(x, {
              color: `secondary`,
              size: `composer`,
              radius: `large`,
              onClick: i,
              children: (0, z.jsx)(j, {
                id: `globalDictation.pasteFailed.settings`,
                defaultMessage: `Open Settings`,
                description: `Opens macOS settings to allow dictation to paste into other apps`,
              }),
            })
          : null),
      (t[19] = n.reason),
      (t[20] = i),
      (t[21] = y))
    : (y = t[21]);
  let b;
  t[22] !== n.copied || t[23] !== r
    ? ((b = n.copied
        ? null
        : (0, z.jsx)(x, {
            color: `secondary`,
            size: `composer`,
            radius: `large`,
            onClick: r,
            children: (0, z.jsx)(j, {
              id: `globalDictation.pasteFailed.copy`,
              defaultMessage: `Copy transcript`,
              description: `Explicitly copies the recovered dictation transcript`,
            }),
          })),
      (t[22] = n.copied),
      (t[23] = r),
      (t[24] = b))
    : (b = t[24]);
  let S;
  t[25] === s
    ? (S = t[26])
    : ((S = s.formatMessage({
        id: `globalDictation.pasteFailed.dismiss`,
        defaultMessage: `Dismiss`,
        description: `Closes the dictation paste recovery notice`,
      })),
      (t[25] = s),
      (t[26] = S));
  let C;
  t[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = (0, z.jsx)(_, {})), (t[27] = C)) : (C = t[27]);
  let w;
  t[28] !== a || t[29] !== S
    ? ((w = (0, z.jsx)(x, { color: `ghost`, size: `icon`, "aria-label": S, onClick: a, children: C })),
      (t[28] = a),
      (t[29] = S),
      (t[30] = w))
    : (w = t[30]);
  let T;
  t[31] !== b || t[32] !== w || t[33] !== y
    ? ((T = (0, z.jsxs)(z.Fragment, { children: [y, b, w] })),
      (t[31] = b),
      (t[32] = w),
      (t[33] = y),
      (t[34] = T))
    : (T = t[34]);
  let E;
  return (
    t[35] !== T || t[36] !== v
      ? ((E = (0, z.jsx)(`main`, {
          className: `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-default`,
          children: (0, z.jsx)(`div`, {
            ref: u,
            className: `w-full max-w-xl p-2 select-none`,
            children: (0, z.jsx)(de, {
              role: `status`,
              ariaLive: `polite`,
              Icon: o,
              content: v,
              customCtas: T,
            }),
          }),
        })),
        (t[35] = T),
        (t[36] = v),
        (t[37] = E))
      : (E = t[37]),
    E
  );
}
function L(e) {
  u.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
var R, et, z;
function tt() {
  return (tt = e(() => {
    ((R = m()), (et = a()), b(), fe(), C(), v(), l(), I(), O(), ae(), (z = c()));
  }))();
}
async function nt(e, t, n, r, i, a, o, s, c, l) {
  if (W?.sessionId === e || K?.sessionId === e) return;
  ((U = e), (G = null), W != null && rt(W.sessionId), K?.cancel());
  let d = Ae({
      dictationSessionId: e,
      productSurface: `global`,
      startGesture: a,
      surface: `global`,
      activationTiming: l,
    }),
    f = ue(),
    p = r ? new ze(`global`, d.performance, void 0, { startupTimings: d.startupTimings }) : null,
    ee = s ?? ie?.dictationAudio,
    m = M();
  m?.catch(() => {});
  let h,
    g = () => {
      let e = h;
      ((h = void 0), e != null && B(e));
    },
    _ = {
      sessionId: e,
      cancel: (e = !0) => {
        (g(), e && d.startupTimings.mark(`cancelled`), f.resolve(!1), p?.close());
      },
    },
    v = null;
  try {
    ((K = _), B(() => t.onStartAccepted?.()));
    let r = (async () => {
      if (
        (d.startupTimings.mark(`permission_requested`),
        await ie?.systemPermissions?.requestMicrophoneAccess().catch(() => {}),
        d.startupTimings.mark(`permission_ready`),
        K !== _)
      )
        throw new DOMException(`Dictation start cancelled`, `AbortError`);
      let e = m == null ? null : await m;
      return (
        d.startupTimings.mark(`device_requested`),
        e == null ? Te({ channelCount: 1 }, ee) : we({ channelCount: 1 }, e, ee)
      );
    })();
    r.catch(() => {});
    let a = !1,
      s = p != null,
      l = () => {},
      u = p
        ?.start(r, f.promise, () => {
          ((a = !0), (s = !1), l());
        })
        .then(
          () => !0,
          () => (p.close(), (s = !1), l(), !1),
        );
    if (
      ((v = await r),
      d.performance.mark(`microphone_ready`),
      d.startupTimings.mark(`microphone_ready`),
      K !== _)
    ) {
      v.getTracks().forEach((e) => e.stop());
      return;
    }
    let y = new MediaRecorder(v),
      b = Date.now(),
      x = ue(),
      S = {
        abortController: new AbortController(),
        analytics: d,
        productLogger: i,
        sessionId: e,
        recorder: y,
        stopped: x.promise,
        interrupted: !1,
        recordingPersistence: null,
        stream: v,
        chunks: [],
        startedAtMs: b,
        isStopping: !1,
        confirmed: !1,
        notifiedRecordingStarted: !1,
        cancelled: !1,
        cancelStart: null,
        cancelStartFeedback: g,
        cleanupEnabled: n,
        streamingStarted: u ?? null,
        streamingSession: p,
        controls: t,
      };
    ((d.recordStartTs = S.startedAtMs),
      y.addEventListener(`dataavailable`, (e) => {
        e.data.size > 0 &&
          !S.cancelled &&
          (d.startupTimings.mark(`first_audio`),
          (a = !0),
          l(),
          S.chunks.push(e.data),
          S.recordingPersistence?.appendChunk(e.data, y.mimeType || e.data.type || `audio/webm`));
      }),
      y.addEventListener(
        `stop`,
        () => {
          (x.resolve(void 0), !S.isStopping && W === S && ((S.interrupted = !0), rt(e)));
        },
        { once: !0 },
      ),
      y.start(ke),
      d.performance.mark(`recording_started`),
      d.startupTimings.mark(`recording_started`),
      (W = S),
      (K = null),
      (l = () => {
        !S.confirmed ||
          !a ||
          s ||
          S.notifiedRecordingStarted ||
          S.isStopping ||
          W !== S ||
          ((S.notifiedRecordingStarted = !0),
          B(() => {
            h = t.onCaptureReady?.(d.startupTimings) ?? void 0;
          }),
          B(t.onRecordingStarted));
      }));
    let C = () => {
      if (!(W !== S || S.isStopping)) {
        ((S.confirmed = !0),
          l(),
          (S.cancelStart = null),
          f.resolve(!0),
          (S.recordingPersistence = Ve({
            createdAtMs: b,
            dictationHistory: o,
            id: e,
            productSurface: d.productSurface,
            surface: `global`,
          })));
        for (let e of S.chunks) S.recordingPersistence?.appendChunk(e, y.mimeType || e.type || `audio/webm`);
      }
    };
    ((S.cancelStart = () => f.resolve(!1)),
      c == null
        ? C()
        : c.then((t) => {
            t ? C() : rt(e, !0);
          }),
      t.startWaveformCapture(v, () => {
        (d.startupTimings.mark(`first_audio`), (a = !0), l());
      }),
      p != null && ((await u) || (S.streamingSession = null)));
  } catch (n) {
    if (
      (c != null && !(await c) && rt(e, !0),
      _.cancel(),
      v?.getTracks().forEach((e) => {
        e.stop();
      }),
      K !== _ && W?.sessionId !== e)
    )
      return;
    throw (
      W?.sessionId === e && (W.cancelStart?.(), W.streamingSession?.close(), (W = null)),
      t.stopWaveformCapture(),
      t.resetWaveformDisplay(),
      K === _ && (K = null),
      u.dispatchMessage(`global-dictation-failed`, { sessionId: e, stage: `recording` }),
      Se(i, d, {
        action: `unrecoverable-error`,
        audioLost: !1,
        error: n,
        reason: `activation-failed`,
        retrySameAudioAvailable: !1,
        stopReason: `user`,
      }),
      n
    );
  }
}
function rt(e, t = !1) {
  if (K?.sessionId === e) {
    let t = K;
    ((K = null),
      t.cancel(),
      u.dispatchMessage(`global-dictation-recording-stopped`, { sessionId: e }),
      u.dispatchMessage(`global-dictation-completed`, { sessionId: e, text: `` }));
    return;
  }
  let n = W;
  if (n == null || n.sessionId !== e) return;
  if (n.isStopping) {
    t && ((n.cancelled = !0), n.abortController.abort(), n.streamingSession?.close());
    return;
  }
  (n.analytics.performance.mark(`stop_requested`),
    n.cancelStartFeedback(),
    n.analytics.startupTimings.mark(`stop_requested`),
    (n.isStopping = !0));
  let r = Date.now() - n.startedAtMs;
  ((n.analytics.recordDurationMs = r),
    (n.cancelled = t || !n.confirmed || r < H),
    n.cancelStart?.(),
    (n.cancelStart = null),
    n.cancelled && n.streamingSession?.close(),
    u.dispatchMessage(`global-dictation-recording-stopped`, { sessionId: e }),
    it(n, r));
}
async function it(e, t) {
  let n = null,
    r = e.cancelled ? void 0 : e.streamingSession?.stopAndFlush().catch(() => {});
  try {
    try {
      (e.recorder.state !== `inactive` && e.recorder.stop(),
        await e.stopped,
        e.recordingPersistence?.finalize(e.cancelled || e.chunks.length === 0, t));
    } finally {
      (e.stream.getTracks().forEach((e) => {
        e.stop();
      }),
        W === e &&
          (e.notifiedRecordingStarted && B(e.controls.onRecordingStopped),
          e.controls.stopWaveformCapture(),
          e.controls.resetWaveformDisplay()));
    }
    if (e.cancelled || e.chunks.length === 0) {
      (e.streamingSession?.close(),
        u.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: `` }),
        Se(e.productLogger, e.analytics, {
          action: `cancel`,
          audioLost: !1,
          reason: `cancelled-recording`,
          retrySameAudioAvailable: !1,
          stopReason: e.chunks.length === 0 ? `no-audio` : `too-short`,
        }));
      return;
    }
    ((n = {
      recovery: e.interrupted
        ? {
            recordingId: e.recordingPersistence?.id ?? null,
            saveState: e.recordingPersistence == null ? `unavailable` : `saving`,
            phase: `recovering`,
            text: null,
          }
        : void 0,
      onRecoveryChange: e.controls.onRecoveryChange,
      analytics: e.analytics,
      productLogger: e.productLogger,
      sessionId: e.sessionId,
      audio: new Blob(e.chunks, { type: e.recorder.mimeType || e.chunks[0]?.type || `audio/webm` }),
      recordingPersistence: e.recordingPersistence,
      onTranscriptionFailed: e.controls.onTranscriptionFailed,
    }),
      e.interrupted
        ? (e.streamingSession?.close(),
          (e.streamingSession = null),
          (e.streamingStarted = null),
          V(n, `recovering`))
        : await r,
      e.streamingStarted != null && !(await e.streamingStarted) && (e.streamingSession = null),
      await ot(n, e.cleanupEnabled, e.streamingSession, e.abortController.signal));
  } catch (r) {
    if (e.abortController.signal.aborted) {
      (e.recordingPersistence?.finalize(!0, t),
        u.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: `` }));
      return;
    }
    (n ?? e.recordingPersistence?.finalize(!0, t),
      await ct(
        e.sessionId,
        e.controls.onTranscriptionFailed,
        r,
        n,
        e.productLogger,
        e.analytics,
        e.recordingPersistence,
      ));
  } finally {
    W === e && (W = null);
  }
}
function B(e) {
  try {
    e?.();
  } catch {}
}
async function at(e, t) {
  if (q === e) return;
  let n = G;
  if (n == null || n.sessionId !== e) throw Error(`No dictation audio to retry`);
  ((q = e), n.recordingPersistence?.finalize(!1, n.analytics.recordDurationMs ?? 0));
  let r = { ...n, analytics: Xe(n.analytics) };
  G = r;
  try {
    await ot(r, t);
  } catch (t) {
    throw (
      await ct(e, n.onTranscriptionFailed, t, r, n.productLogger, r.analytics, n.recordingPersistence),
      t
    );
  } finally {
    q === e && (q = null);
  }
}
async function ot(e, t, n = null, r) {
  let i = Date.now();
  e.recovery != null && V(e, `recovering`);
  let a = await (n == null ? qe(e.audio, { signal: r }).then((e) => e.text) : st(n, e, r));
  (r?.throwIfAborted(), e.analytics.performance.mark(`final_received`));
  let o = await Ie({ transcript: a, cleanupEnabled: t, signal: r });
  (r?.throwIfAborted(),
    ge(e.productLogger, e.analytics, o),
    G === e && (G = null),
    o.trim().length > 0 && e.recordingPersistence?.setTranscript(o.trim()),
    e.recovery != null && e.onRecoveryChange != null
      ? (o.trim().length === 0 && U === e.sessionId && (G = e),
        V(e, o.trim().length > 0 ? `recovered` : `failed`, o.trim() || null))
      : u.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: o }),
    e.analytics.performance.mark(`transcript_dispatched`),
    Se(e.productLogger, e.analytics, {
      action: `insert`,
      audioLost: !1,
      reason: `success`,
      retrySameAudioAvailable: !1,
      stopReason: `user`,
      transcript: o,
      transcriptionStartedAtMs: i,
    }));
}
async function st(e, t, n) {
  try {
    return await e.finish();
  } catch {
    return (
      n?.throwIfAborted(),
      e.isSilent() ? `` : (V(t, `recovering`), (await qe(t.audio, { signal: n })).text)
    );
  }
}
async function ct(e, t, n, r, i, a, o) {
  (U === e && (G = r),
    r != null && V(r, `failed`),
    t(n),
    u.dispatchMessage(`global-dictation-failed`, { sessionId: e, stage: `transcription` }));
  let s = r != null || (await o?.waitForPendingWrites()) === !0;
  Se(i, a, {
    action: r == null ? `unrecoverable-error` : `show-retry`,
    audioLost: !s,
    error: n,
    reason: r == null ? `recording-error` : `transcription-error`,
    retrySameAudioAvailable: r != null,
    stopReason: `user`,
  });
}
function V(e, t, n = null) {
  ((e.recovery = {
    recordingId: e.recordingPersistence?.id ?? null,
    saveState: e.recordingPersistence == null ? `unavailable` : (e.recovery?.saveState ?? `saving`),
    phase: t,
    text: n,
  }),
    U === e.sessionId &&
      (e.onRecoveryChange?.(e.recovery),
      u.dispatchMessage(`global-dictation-failed`, { sessionId: e.sessionId, stage: `transcription` }),
      e.recordingPersistence?.waitForPendingWrites().then((t) => {
        e.recovery != null &&
          U === e.sessionId &&
          ((e.recovery = { ...e.recovery, saveState: t ? `saved` : `unavailable` }),
          e.onRecoveryChange?.(e.recovery));
      })));
}
var H, U, W, G, K, q;
function J() {
  return (J = e(() => {
    (A(),
      ae(),
      T(),
      We(),
      Je(),
      He(),
      xe(),
      Ue(),
      De(),
      (H = 250),
      (U = null),
      (W = null),
      (G = null),
      (K = null),
      (q = null),
      ze.prepareAudio().catch(() => {}));
  }))();
}
var lt, Y, X, ut;
function Z() {
  return (Z = e(() => {
    ((lt = `_darkTheme_1aipg_1`),
      (Y = `_miniSurface_1aipg_15`),
      (X = `_expandedSurface_1aipg_22`),
      (ut = { darkTheme: lt, miniSurface: Y, expandedSurface: X }));
  }))();
}
function dt(e) {
  let t = (0, bt.c)(20),
    { initialStatus: n } = e,
    r = n === void 0 ? `initializing` : n,
    i = re(E),
    [a, o] = (0, Q.useState)(null),
    s;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (e) => {
        let { failure: t } = e;
        o(t);
      }),
      (t[0] = s))
    : (s = t[0]),
    f(`global-dictation-paste-failed`, s));
  let c;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => {
        o(null);
      }),
      (t[1] = c))
    : (c = t[1]),
    f(`global-dictation-start`, c));
  let l;
  t[2] === a
    ? (l = t[3])
    : ((l = async function () {
        if (a != null)
          try {
            (await ie.clipboard.writeText(a.text), o((e) => (e === a ? { ...e, copied: !0 } : e)));
          } catch (e) {
            let t = e;
            pe.warning(`Failed to copy recovered dictation`, { safe: {}, sensitive: { error: t } });
          }
      }),
      (t[2] = a),
      (t[3] = l));
  let d = l,
    p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = async function () {
        try {
          await ie.systemPermissions?.openAccessibilitySettings();
        } catch (e) {
          let t = e;
          pe.warning(`Failed to open dictation Accessibility settings`, {
            safe: {},
            sensitive: { error: t },
          });
        }
      }),
      (t[4] = p))
    : (p = t[4]);
  let ee = p,
    m,
    h;
  if (
    (t[5] === i
      ? ((m = t[6]), (h = t[7]))
      : ((m = () => {
          if (i) return;
          let e = !0;
          return (
            queueMicrotask(() => {
              e && u.dispatchMessage(`global-dictation-renderer-ready`, {});
            }),
            () => {
              e = !1;
            }
          );
        }),
        (h = [i]),
        (t[5] = i),
        (t[6] = m),
        (t[7] = h)),
    (0, Q.useEffect)(m, h),
    i)
  )
    return null;
  let g = a != null,
    _ = a != null,
    v;
  t[8] !== r || t[9] !== _
    ? ((v = (0, $.jsx)(ft, { initialStatus: r, recoveryVisible: _ })), (t[8] = r), (t[9] = _), (t[10] = v))
    : (v = t[10]);
  let y;
  t[11] !== v || t[12] !== g
    ? ((y = (0, $.jsx)(`div`, { hidden: g, children: v })), (t[11] = v), (t[12] = g), (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== d || t[15] !== a
    ? ((b =
        a == null
          ? null
          : (0, $.jsx)($e, {
              failure: a,
              onCopy: () => void d(),
              onOpenSettings: ie.systemPermissions == null ? void 0 : () => void ee(),
              onDismiss: () => {
                (o(null), u.dispatchMessage(`global-dictation-close`, { sessionId: null }));
              },
            })),
      (t[14] = d),
      (t[15] = a),
      (t[16] = b))
    : (b = t[16]);
  let x;
  return (
    t[17] !== y || t[18] !== b
      ? ((x = (0, $.jsxs)($.Fragment, { children: [y, b] })), (t[17] = y), (t[18] = b), (t[19] = x))
      : (x = t[19]),
    x
  );
}
function ft(e) {
  let n = (0, bt.c)(117),
    { initialStatus: i, recoveryVisible: a } = e,
    o = r(h),
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { name: `dictation.global` }), (n[0] = s))
    : (s = n[0]);
  let { isCapable: c } = se(Ge, s),
    l = ce(),
    p = _e(Ke),
    ee = _e(je),
    [m, g] = (0, Q.useState)(null),
    _ = (0, Q.useRef)(null),
    v = (0, Q.useRef)(null),
    y,
    b;
  (n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => () => {
        v.current?.resolve(!1);
        let e = _.current;
        ((_.current = null), e != null && rt(e, !0));
      }),
      (b = []),
      (n[1] = y),
      (n[2] = b))
    : ((y = n[1]), (b = n[2])),
    (0, Q.useEffect)(y, b));
  let [x, C] = (0, Q.useState)(null),
    [w, T] = (0, Q.useState)(null),
    [E, te] = (0, Q.useState)(null),
    [ne, re] = (0, Q.useState)(!1),
    [D, ae] = (0, Q.useState)(0),
    [O, k] = (0, Q.useState)(i),
    [le, A] = (0, Q.useState)(null),
    [de, fe] = (0, Q.useState)(!1),
    pe = (0, Q.useRef)(null),
    me;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = { variant: `dictation` }), (n[3] = me))
    : (me = n[3]);
  let {
      waveformCanvasRef: ge,
      startWaveformCapture: ve,
      stopWaveformCapture: xe,
      resetWaveformDisplay: Se,
    } = Me(me),
    Ce;
  n[4] !== l || n[5] !== p
    ? ((Ce = (e, t) => {
        p && be(`error`);
        let n = ye(l, e, t);
        (A(n.message), fe(n.canRetry), k(`error`));
      }),
      (n[4] = l),
      (n[5] = p),
      (n[6] = Ce))
    : (Ce = n[6]);
  let M = Ce,
    we;
  n[7] !== x || n[8] !== M
    ? ((we = () => {
        x != null &&
          (k(`transcribing`),
          A(null),
          fe(!1),
          at(x, !1).catch((e) => {
            M(`transcription`, e);
          }));
      }),
      (n[7] = x),
      (n[8] = M),
      (n[9] = we))
    : (we = n[9]);
  let Te = we,
    Ee;
  n[10] === x
    ? (Ee = n[11])
    : ((Ee = () => {
        x != null &&
          (u.dispatchMessage(`global-dictation-dismiss`, { sessionId: x }),
          (_.current = null),
          g(null),
          C(null),
          A(null),
          fe(!1));
      }),
      (n[10] = x),
      (n[11] = Ee));
  let De = Ee,
    Oe;
  n[12] !== x || n[13] !== O
    ? ((Oe = () => {
        (x != null || O === `idle`) && u.dispatchMessage(`global-dictation-close`, { sessionId: x });
      }),
      (n[12] = x),
      (n[13] = O),
      (n[14] = Oe))
    : (Oe = n[14]);
  let ke = Oe,
    Ae;
  n[15] === O
    ? (Ae = n[16])
    : ((Ae = (e) => {
        O === `idle` && re(e);
      }),
      (n[15] = O),
      (n[16] = Ae));
  let Ne = Ae,
    N;
  n[17] === a ? (N = n[18]) : ((N = () => a), (n[17] = a), (n[18] = N));
  let Ie;
  (n[19] !== D || n[20] !== N
    ? ((Ie = {
        activationNonce: D,
        isPaused: N,
        includeInteractiveRegion: !0,
        interactiveRegionRef: pe,
        onInteractiveChange: _t,
        publishInitialNonInteractive: !1,
      }),
      (n[19] = D),
      (n[20] = N),
      (n[21] = Ie))
    : (Ie = n[21]),
    Qe(Ie));
  let ze, Be;
  (n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (e) => {
        ((_.current = null),
          g(null),
          C(null),
          T(e.configuredHotkey),
          te(e.configuredToggleHotkey),
          re(!1),
          A(null),
          fe(!1),
          ae(gt),
          k(e.configuredHotkey != null || e.configuredToggleHotkey != null ? `idle` : `initializing`));
      }),
      (Be = []),
      (n[22] = ze),
      (n[23] = Be))
    : ((ze = n[22]), (Be = n[23])),
    f(`global-dictation-idle`, ze, Be));
  let Ve;
  n[24] !== ee || n[25] !== p || n[26] !== Se || n[27] !== o || n[28] !== M || n[29] !== ve || n[30] !== xe
    ? ((Ve = (e) => {
        v.current?.resolve(!1);
        let t = e.pendingConfirmation ? ue() : null;
        ((v.current = t),
          (_.current = e.sessionId),
          g(null),
          C(e.sessionId),
          re(!1),
          A(null),
          fe(!1),
          e.pendingConfirmation || k(`listening`),
          nt(
            e.sessionId,
            {
              startWaveformCapture: ve,
              stopWaveformCapture: () => {
                xe();
              },
              resetWaveformDisplay: Se,
              onStartAccepted: p ? Le : void 0,
              onCaptureReady: p ? ht : void 0,
              onRecordingStopped: p ? mt : void 0,
              onRecoveryChange: (t) => {
                _.current === e.sessionId && (g(t), k(`error`));
              },
              onTranscriptionFailed: (t) => {
                _.current === e.sessionId && M(`transcription`, t);
              },
            },
            !1,
            ee,
            o.get(he),
            e.startGesture,
            void 0,
            void 0,
            t?.promise,
            e.activationTiming,
          ).catch((t) => {
            _.current === e.sessionId && M(`start`, t);
          }));
      }),
      (n[24] = ee),
      (n[25] = p),
      (n[26] = Se),
      (n[27] = o),
      (n[28] = M),
      (n[29] = ve),
      (n[30] = xe),
      (n[31] = Ve))
    : (Ve = n[31]);
  let He;
  (n[32] === Symbol.for(`react.memo_cache_sentinel`) ? ((He = []), (n[32] = He)) : (He = n[32]),
    f(`global-dictation-start`, Ve, He));
  let Ue, We;
  (n[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (e) => {
        _.current === e.sessionId && (v.current?.resolve(!0), k(`listening`));
      }),
      (We = []),
      (n[33] = Ue),
      (n[34] = We))
    : ((Ue = n[33]), (We = n[34])),
    f(`global-dictation-start-confirmed`, Ue, We));
  let qe;
  n[35] === m
    ? (qe = n[36])
    : ((qe = (e) => {
        _.current === e.sessionId &&
          m == null &&
          (v.current?.resolve(!1),
          k(e.cancel ? `idle` : `transcribing`),
          A(null),
          fe(!1),
          rt(e.sessionId, e.cancel));
      }),
      (n[35] = m),
      (n[36] = qe));
  let Je;
  if (
    (n[37] === Symbol.for(`react.memo_cache_sentinel`) ? ((Je = []), (n[37] = Je)) : (Je = n[37]),
    f(`global-dictation-stop`, qe, Je),
    m != null)
  ) {
    let e;
    n[38] === m.text
      ? (e = n[39])
      : ((e = () => {
          ie.clipboard.writeText(m.text ?? ``).catch(pt);
        }),
        (n[38] = m.text),
        (n[39] = e));
    let t = c ? Te : void 0,
      r;
    n[40] === m.recordingId
      ? (r = n[41])
      : ((r =
          m.recordingId == null
            ? void 0
            : () => {
                u.dispatchMessage(`show-settings`, {
                  section: `voice?recording=${encodeURIComponent(m.recordingId ?? ``)}`,
                });
              }),
        (n[40] = m.recordingId),
        (n[41] = r));
    let i;
    return (
      n[42] !== De || n[43] !== m || n[44] !== e || n[45] !== t || n[46] !== r
        ? ((i = (0, $.jsx)(`main`, {
            "data-theme": `dark`,
            className: `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-default`,
            children: (0, $.jsx)(`div`, {
              ref: pe,
              className: `w-full max-w-xl p-2 select-none`,
              children: (0, $.jsx)(Re, {
                recovery: m,
                onCopyText: e,
                onDismiss: De,
                onRetry: t,
                onViewRecording: r,
              }),
            }),
          })),
          (n[42] = De),
          (n[43] = m),
          (n[44] = e),
          (n[45] = t),
          (n[46] = r),
          (n[47] = i))
        : (i = n[47]),
      i
    );
  }
  let Ye = O === `error` && `p-1`,
    P;
  n[48] === Ye
    ? (P = n[49])
    : ((P = d(
        ut.darkTheme,
        `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-default`,
        Ye,
      )),
      (n[48] = Ye),
      (n[49] = P));
  let Xe = O !== `idle`,
    Ze = O === `idle` && ne,
    F;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = d(ut.darkTheme, `!rounded-full px-4 py-2`)), (n[50] = F))
    : (F = n[50]);
  let I;
  n[51] !== w || n[52] !== E
    ? ((I = (0, $.jsx)(yt, { configuredHotkey: w, configuredToggleHotkey: E })),
      (n[51] = w),
      (n[52] = E),
      (n[53] = I))
    : (I = n[53]);
  let $e = O === `error` ? `w-fit` : `h-[30px] w-[120px]`,
    L;
  n[54] === $e
    ? (L = n[55])
    : ((L = d(`group flex items-end justify-center`, $e)), (n[54] = $e), (n[55] = L));
  let R;
  n[56] !== l || n[57] !== O
    ? ((R =
        O === `initializing`
          ? void 0
          : O === `idle`
            ? l.formatMessage({
                id: `globalDictation.readyAriaLabel`,
                defaultMessage: `Global dictation ready`,
                description: `Accessible label for the persistent global dictation reminder`,
              })
            : l.formatMessage({
                id: `globalDictation.waveformAriaLabel`,
                defaultMessage: `Global dictation waveform`,
                description: `Accessible label for the minimal global dictation waveform`,
              })),
      (n[56] = l),
      (n[57] = O),
      (n[58] = R))
    : (R = n[58]);
  let et = O === `error` ? `draggable` : `no-drag`,
    z = (O === `initializing` || O === `idle`) && ut.miniSurface,
    tt =
      (O === `initializing` || O === `idle`) &&
      `h-2 w-10 justify-center rounded-[4px] border-text-secondary/70 px-0`,
    it =
      O === `idle` &&
      `group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-border/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-border/80`,
    B = O !== `initializing` && O !== `idle` && ut.expandedSurface,
    ot = O !== `initializing` && O !== `idle` && `border-border/80`,
    st = (O === `listening` || O === `transcribing`) && `h-[30px] w-[72px] justify-center rounded-full px-2`,
    ct = O === `error` && `h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2`,
    V;
  n[59] !== et ||
  n[60] !== z ||
  n[61] !== tt ||
  n[62] !== it ||
  n[63] !== B ||
  n[64] !== ot ||
  n[65] !== st ||
  n[66] !== ct
    ? ((V = d(
        `flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none`,
        et,
        z,
        tt,
        it,
        B,
        ot,
        st,
        ct,
      )),
      (n[59] = et),
      (n[60] = z),
      (n[61] = tt),
      (n[62] = it),
      (n[63] = B),
      (n[64] = ot),
      (n[65] = st),
      (n[66] = ct),
      (n[67] = V))
    : (V = n[67]);
  let H;
  n[68] === O
    ? (H = n[69])
    : ((H =
        O === `idle`
          ? (0, $.jsx)(`span`, {
              className: `relative flex h-full w-full items-center justify-center text-secondary`,
              children: (0, $.jsx)(Fe, {
                className: `icon-xs absolute scale-75 opacity-0 transition-[opacity,transform] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] group-hover:scale-100 group-hover:opacity-100 group-data-[state=delayed-open]:scale-100 group-data-[state=delayed-open]:opacity-100 motion-reduce:transition-none`,
              }),
            })
          : null),
      (n[68] = O),
      (n[69] = H));
  let U;
  n[70] === O
    ? (U = n[71])
    : ((U = O === `transcribing` ? (0, $.jsx)(t, { className: `icon-xs text-secondary` }) : null),
      (n[70] = O),
      (n[71] = U));
  let W;
  n[72] !== de || n[73] !== le || n[74] !== De || n[75] !== Te || n[76] !== l || n[77] !== c || n[78] !== O
    ? ((W =
        O === `error`
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`span`, {
                  className: `max-w-[252px] min-w-0 truncate text-xs font-medium text-danger`,
                  children: le,
                }),
                de && c
                  ? (0, $.jsx)(`button`, {
                      type: `button`,
                      className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-secondary no-drag hover:bg-primary-ghost-hover hover:text-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                      "aria-label": l.formatMessage({
                        id: `globalDictation.retry`,
                        defaultMessage: `Retry`,
                        description: `Accessible label for the button that retries global dictation transcription`,
                      }),
                      onClick: Te,
                      children: (0, $.jsx)(Pe, { className: `icon-2xs` }),
                    })
                  : null,
                (0, $.jsx)(`button`, {
                  type: `button`,
                  className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-secondary no-drag hover:bg-primary-ghost-hover hover:text-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                  "aria-label": l.formatMessage({
                    id: `globalDictation.dismissError`,
                    defaultMessage: `Dismiss`,
                    description: `Accessible label for the button that dismisses the global dictation error window`,
                  }),
                  onClick: De,
                  children: (0, $.jsx)(S, { className: `icon-2xs` }),
                }),
              ],
            })
          : null),
      (n[72] = de),
      (n[73] = le),
      (n[74] = De),
      (n[75] = Te),
      (n[76] = l),
      (n[77] = c),
      (n[78] = O),
      (n[79] = W))
    : (W = n[79]);
  let G;
  n[80] !== O || n[81] !== ge
    ? ((G =
        O === `listening`
          ? (0, $.jsx)(`canvas`, {
              ref: ge,
              className: `h-4 min-w-0 flex-1 text-default`,
              "aria-hidden": `true`,
            })
          : null),
      (n[80] = O),
      (n[81] = ge),
      (n[82] = G))
    : (G = n[82]);
  let K;
  n[83] === O
    ? (K = n[84])
    : ((K =
        O === `idle`
          ? (0, $.jsx)(j, {
              id: `globalDictation.ready`,
              defaultMessage: `Dictation ready`,
              description: `Status text for the persistent global dictation reminder`,
            })
          : null),
      (n[83] = O),
      (n[84] = K));
  let q;
  n[85] === O
    ? (q = n[86])
    : ((q =
        O === `listening`
          ? (0, $.jsx)(j, {
              id: `globalDictation.listening`,
              defaultMessage: `Listening`,
              description: `Status text shown in the global dictation window while recording`,
            })
          : null),
      (n[85] = O),
      (n[86] = q));
  let J;
  n[87] === O
    ? (J = n[88])
    : ((J =
        O === `transcribing`
          ? (0, $.jsx)(j, {
              id: `globalDictation.transcribing`,
              defaultMessage: `Transcribing…`,
              description: `Status text shown in the global dictation window while audio is being transcribed`,
            })
          : null),
      (n[87] = O),
      (n[88] = J));
  let lt = O === `error` ? le : null,
    Y;
  n[89] !== K || n[90] !== q || n[91] !== J || n[92] !== lt
    ? ((Y = (0, $.jsxs)(`span`, { className: `sr-only`, children: [K, q, J, lt] })),
      (n[89] = K),
      (n[90] = q),
      (n[91] = J),
      (n[92] = lt),
      (n[93] = Y))
    : (Y = n[93]);
  let X;
  n[94] !== R || n[95] !== V || n[96] !== H || n[97] !== U || n[98] !== W || n[99] !== G || n[100] !== Y
    ? ((X = (0, $.jsxs)(`section`, {
        ref: pe,
        "aria-live": `polite`,
        "aria-label": R,
        className: V,
        children: [H, U, W, G, Y],
      })),
      (n[94] = R),
      (n[95] = V),
      (n[96] = H),
      (n[97] = U),
      (n[98] = W),
      (n[99] = G),
      (n[100] = Y),
      (n[101] = X))
    : (X = n[101]);
  let Z;
  n[102] !== L || n[103] !== X
    ? ((Z = (0, $.jsx)(`div`, { "data-testid": `global-dictation-hitbox`, className: L, children: X })),
      (n[102] = L),
      (n[103] = X),
      (n[104] = Z))
    : (Z = n[104]);
  let dt;
  n[105] !== Ne || n[106] !== Xe || n[107] !== Ze || n[108] !== I || n[109] !== Z
    ? ((dt = (0, $.jsx)(oe, {
        delayDuration: 250,
        disableHoverOpen: Xe,
        disablePadding: !0,
        open: Ze,
        sideOffset: 10,
        tooltipClassName: F,
        tooltipMaxWidth: `36rem`,
        tooltipContent: I,
        onOpenChange: Ne,
        children: Z,
      })),
      (n[105] = Ne),
      (n[106] = Xe),
      (n[107] = Ze),
      (n[108] = I),
      (n[109] = Z),
      (n[110] = dt))
    : (dt = n[110]);
  let ft;
  n[111] !== ke || n[112] !== dt
    ? ((ft = (0, $.jsx)(vt, { onClose: ke, children: dt })), (n[111] = ke), (n[112] = dt), (n[113] = ft))
    : (ft = n[113]);
  let xt;
  return (
    n[114] !== P || n[115] !== ft
      ? ((xt = (0, $.jsx)(`main`, { className: P, children: ft })),
        (n[114] = P),
        (n[115] = ft),
        (n[116] = xt))
      : (xt = n[116]),
    xt
  );
}
function pt(e) {
  pe.warning(`Failed to copy recovered dictation`, { safe: {}, sensitive: { error: e } });
}
function mt() {
  be(`stop`);
}
function ht(e) {
  return be(`start`, e);
}
function gt(e) {
  return e + 1;
}
function _t(e) {
  u.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
function vt(e) {
  let t = (0, bt.c)(6),
    { children: r, onClose: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = s({
        id: `globalDictation.closeWindow`,
        defaultMessage: `Close window`,
        description: `Context menu item that closes the global dictation floating window`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === i ? (o = t[2]) : ((o = [{ id: `close-window`, message: a, onSelect: i }]), (t[1] = i), (t[2] = o));
  let c;
  return (
    t[3] !== r || t[4] !== o
      ? ((c = (0, $.jsx)(n, { items: o, children: r })), (t[3] = r), (t[4] = o), (t[5] = c))
      : (c = t[5]),
    c
  );
}
function yt(e) {
  let t = (0, bt.c)(11),
    { configuredHotkey: n, configuredToggleHotkey: r } = e;
  if (n != null && r != null) {
    let e;
    t[0] === n
      ? (e = t[1])
      : ((e = (0, $.jsx)(D, { keysLabel: (0, $.jsx)(F, { accelerator: n }) }, `hold`)),
        (t[0] = n),
        (t[1] = e));
    let i;
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(D, { keysLabel: (0, $.jsx)(F, { accelerator: r }) }, `toggle`)),
        (t[2] = r),
        (t[3] = i));
    let a;
    return (
      t[4] !== e || t[5] !== i
        ? ((a = (0, $.jsx)(j, {
            id: `globalDictation.readyTooltip.holdAndToggle`,
            defaultMessage: `Hold or double-tap {holdShortcut}, or press {toggleShortcut} to dictate`,
            description: `Tooltip explaining both global dictation shortcuts`,
            values: { holdShortcut: e, toggleShortcut: i },
          })),
          (t[4] = e),
          (t[5] = i),
          (t[6] = a))
        : (a = t[6]),
      a
    );
  }
  if (n != null) {
    let e;
    return (
      t[7] === n
        ? (e = t[8])
        : ((e = (0, $.jsx)(j, {
            id: `globalDictation.readyTooltip.hold`,
            defaultMessage: `Hold or double-tap {shortcut} to dictate`,
            description: `Tooltip explaining the hold-to-dictate shortcut`,
            values: { shortcut: (0, $.jsx)(D, { keysLabel: (0, $.jsx)(F, { accelerator: n }) }, `hold`) },
          })),
          (t[7] = n),
          (t[8] = e)),
      e
    );
  }
  if (r != null) {
    let e;
    return (
      t[9] === r
        ? (e = t[10])
        : ((e = (0, $.jsx)(j, {
            id: `globalDictation.readyTooltip.toggle`,
            defaultMessage: `Press {shortcut} to dictate`,
            description: `Tooltip explaining the toggle dictation shortcut`,
            values: { shortcut: (0, $.jsx)(D, { keysLabel: (0, $.jsx)(F, { accelerator: r }) }, `toggle`) },
          })),
          (t[9] = r),
          (t[10] = e)),
      e
    );
  }
  return null;
}
var bt, Q, $;
function xt() {
  return (xt = e(() => {
    ((bt = m()),
      p(),
      w(),
      A(),
      (Q = a()),
      b(),
      Be(),
      ve(),
      me(),
      ne(),
      l(),
      te(),
      le(),
      N(),
      I(),
      Oe(),
      Ee(),
      y(),
      Ze(),
      ae(),
      P(),
      T(),
      i(),
      k(),
      Ne(),
      Ye(),
      Ce(),
      g(),
      tt(),
      J(),
      Z(),
      ($ = c()));
  }))();
}
xt();
export { dt as GlobalDictationPage };
//# sourceMappingURL=global-dictation-page-24a87d79b23b.js.map
