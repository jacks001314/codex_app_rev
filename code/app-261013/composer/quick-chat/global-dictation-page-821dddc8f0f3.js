import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Bpt as n,
  CPt as r,
  Cot as i,
  GE as a,
  IDt as o,
  Ixt as s,
  Iz as c,
  Kat as l,
  Lz as u,
  Pxt as d,
  SJ as f,
  SO as p,
  SPt as m,
  TJ as h,
  VDt as g,
  Vxt as _,
  WE as v,
  Wnt as y,
  XO as b,
  YV as x,
  Ynt as S,
  ZO as C,
  _Mt as w,
  _Pt as T,
  bO as E,
  cz as D,
  gMt as O,
  gPt as k,
  hPt as A,
  i3 as ee,
  jDt as te,
  kDt as ne,
  qat as re,
  r3 as ie,
  rst as j,
  sz as ae,
  t3 as M,
  vzt as oe,
  wot as se,
  xMt as ce,
  xO as le,
  yO as ue,
  yzt as de,
  zxt as fe,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ajt as N,
  BOr as pe,
  BXt as me,
  Bu as he,
  Cn as ge,
  Djt as _e,
  Ejt as ve,
  FEr as ye,
  HOr as be,
  HXt as P,
  KXt as xe,
  Ojt as Se,
  PEr as Ce,
  Qu as we,
  Sn as Te,
  Tjt as Ee,
  VOr as De,
  VXt as Oe,
  Vu as ke,
  XDr as Ae,
  Zu as je,
  ad as Me,
  cn as Ne,
  czt as Pe,
  eDr as Fe,
  eOr as Ie,
  hd as Le,
  id as Re,
  jjt as ze,
  kjt as Be,
  ln as Ve,
  md as He,
  nDr as Ue,
  nd as We,
  qXt as Ge,
  rd as Ke,
  szt as qe,
  td as Je,
  xn as F,
  zXt as Ye,
} from "./app-initial-5851df3f6cb1.js";
import { __ as Xe, g_ as I } from "./app-primary-fe8a450b3b04.js";
import { n as Ze, t as L } from "./use-floating-window-pointer-interactivity-af75b9ceedf3.js";
function Qe(e) {
  let n = (0, R.c)(38),
    { failure: r, onCopy: i, onOpenSettings: a, onDismiss: s } = e,
    l = g(),
    u;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = b(`CmdOrCtrl+V`)), (n[0] = u)) : (u = n[0]);
  let d = u,
    p = (0, et.useRef)(null),
    m;
  (n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = {
        includeInteractiveRegion: !0,
        interactiveRegionRef: p,
        publishInitialNonInteractive: !1,
        onInteractiveChange: $e,
      }),
      (n[1] = m))
    : (m = n[1]),
    Ze(m));
  let h;
  n[2] === r.copied
    ? (h = n[3])
    : ((h = (0, z.jsx)(`div`, {
        className: `font-medium text-default`,
        children: r.copied
          ? (0, z.jsx)(o, {
              id: `globalDictation.pasteFailed.copiedShortcut`,
              defaultMessage: `Text copied — <shortcut>{keys}</shortcut> to paste`,
              description: `Dictation transcript is on the clipboard; shortcut is the system paste keybinding`,
              values: { keys: d, shortcut: () => (0, z.jsx)(c, { keysLabel: d }) },
            })
          : (0, z.jsx)(o, {
              id: `globalDictation.pasteFailed.notCopied`,
              defaultMessage: `Your clipboard changed`,
              description: `Dictation preserved newer clipboard contents instead of replacing them`,
            }),
      })),
      (n[2] = r.copied),
      (n[3] = h));
  let _;
  n[4] === r.copied
    ? (_ = n[5])
    : ((_ = r.copied
        ? null
        : (0, z.jsx)(o, {
            id: `globalDictation.pasteFailed.copyToPaste`,
            defaultMessage: `Copy your transcript to paste it`,
            description: `Recovery instruction when the transcript could not be copied automatically`,
          })),
      (n[4] = r.copied),
      (n[5] = _));
  let y;
  n[6] !== r.copied || n[7] !== r.reason
    ? ((y =
        r.copied && r.reason === `accessibility`
          ? (0, z.jsx)(o, {
              id: `globalDictation.pasteFailed.enableAccessibility`,
              defaultMessage: `Enable Accessibility to paste automatically`,
              description: `Explains how to enable automatic insertion after dictation`,
            })
          : null),
      (n[6] = r.copied),
      (n[7] = r.reason),
      (n[8] = y))
    : (y = n[8]);
  let S;
  n[9] !== r.copied || n[10] !== r.reason
    ? ((S =
        r.copied && r.reason !== `accessibility`
          ? (0, z.jsx)(o, {
              id: `globalDictation.pasteFailed.manualPaste`,
              defaultMessage: `Couldn't paste automatically`,
              description: `Automatic insertion failed but the copied transcript can be pasted manually`,
            })
          : null),
      (n[9] = r.copied),
      (n[10] = r.reason),
      (n[11] = S))
    : (S = n[11]);
  let C;
  n[12] !== _ || n[13] !== y || n[14] !== S
    ? ((C = (0, z.jsxs)(`div`, { className: `text-xs text-codex-description`, children: [_, y, S] })),
      (n[12] = _),
      (n[13] = y),
      (n[14] = S),
      (n[15] = C))
    : (C = n[15]);
  let w;
  n[16] !== h || n[17] !== C
    ? ((w = (0, z.jsxs)(`div`, { className: `flex flex-col gap-0.5`, children: [h, C] })),
      (n[16] = h),
      (n[17] = C),
      (n[18] = w))
    : (w = n[18]);
  let T;
  n[19] !== r.reason || n[20] !== a
    ? ((T =
        r.reason === `accessibility` && a != null
          ? (0, z.jsx)(t, {
              color: `secondary`,
              size: `composer`,
              radius: `large`,
              onClick: a,
              children: (0, z.jsx)(o, {
                id: `globalDictation.pasteFailed.settings`,
                defaultMessage: `Open Settings`,
                description: `Opens macOS settings to allow dictation to paste into other apps`,
              }),
            })
          : null),
      (n[19] = r.reason),
      (n[20] = a),
      (n[21] = T))
    : (T = n[21]);
  let E;
  n[22] !== r.copied || n[23] !== i
    ? ((E = r.copied
        ? null
        : (0, z.jsx)(t, {
            color: `secondary`,
            size: `composer`,
            radius: `large`,
            onClick: i,
            children: (0, z.jsx)(o, {
              id: `globalDictation.pasteFailed.copy`,
              defaultMessage: `Copy transcript`,
              description: `Explicitly copies the recovered dictation transcript`,
            }),
          })),
      (n[22] = r.copied),
      (n[23] = i),
      (n[24] = E))
    : (E = n[24]);
  let D;
  n[25] === l
    ? (D = n[26])
    : ((D = l.formatMessage({
        id: `globalDictation.pasteFailed.dismiss`,
        defaultMessage: `Dismiss`,
        description: `Closes the dictation paste recovery notice`,
      })),
      (n[25] = l),
      (n[26] = D));
  let O;
  n[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = (0, z.jsx)(f, {})), (n[27] = O)) : (O = n[27]);
  let k;
  n[28] !== s || n[29] !== D
    ? ((k = (0, z.jsx)(t, { color: `ghost`, size: `icon`, "aria-label": D, onClick: s, children: O })),
      (n[28] = s),
      (n[29] = D),
      (n[30] = k))
    : (k = n[30]);
  let A;
  n[31] !== E || n[32] !== k || n[33] !== T
    ? ((A = (0, z.jsxs)(z.Fragment, { children: [T, E, k] })),
      (n[31] = E),
      (n[32] = k),
      (n[33] = T),
      (n[34] = A))
    : (A = n[34]);
  let ee;
  return (
    n[35] !== A || n[36] !== w
      ? ((ee = (0, z.jsx)(`main`, {
          className: `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-default`,
          children: (0, z.jsx)(`div`, {
            ref: p,
            className: `w-full max-w-xl p-2 select-none`,
            children: (0, z.jsx)(v, {
              role: `status`,
              ariaLive: `polite`,
              Icon: x,
              content: w,
              customCtas: A,
            }),
          }),
        })),
        (n[35] = A),
        (n[36] = w),
        (n[37] = ee))
      : (ee = n[37]),
    ee
  );
}
function $e(e) {
  k.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
var R, et, z;
function tt() {
  return (tt = e(() => {
    ((R = oe()), (et = de()), te(), a(), M(), h(), u(), L(), C(), A(), (z = ce()));
  }))();
}
async function nt(e, t, r, i, a, o, s, c, u, d) {
  if (W?.sessionId === e || K?.sessionId === e) return;
  ((U = e), (G = null), W != null && rt(W.sessionId), K?.cancel());
  let f = Se({
      dictationSessionId: e,
      productSurface: `global`,
      startGesture: o,
      surface: `global`,
      activationTiming: d,
    }),
    p = n(),
    m = i ? new xe(`global`, f.performance, void 0, { startupTimings: f.startupTimings }) : null,
    h = c ?? l?.dictationAudio,
    g = me();
  g?.catch(() => {});
  let _,
    v = () => {
      let e = _;
      ((_ = void 0), e != null && B(e));
    },
    y = {
      sessionId: e,
      cancel: (e = !0) => {
        (v(), e && f.startupTimings.mark(`cancelled`), p.resolve(!1), m?.close());
      },
    },
    b = null;
  try {
    ((K = y), B(() => t.onStartAccepted?.()));
    let i = (async () => {
      if (
        (f.startupTimings.mark(`permission_requested`),
        await l?.systemPermissions?.requestMicrophoneAccess().catch(() => {}),
        f.startupTimings.mark(`permission_ready`),
        K !== y)
      )
        throw new DOMException(`Dictation start cancelled`, `AbortError`);
      let e = g == null ? null : await g;
      return (
        f.startupTimings.mark(`device_requested`),
        e == null ? Oe({ channelCount: 1 }, h) : Ye({ channelCount: 1 }, e, h)
      );
    })();
    i.catch(() => {});
    let o = !1,
      c = m != null,
      d = () => {},
      x = m
        ?.start(i, p.promise, () => {
          ((o = !0), (c = !1), d());
        })
        .then(
          () => !0,
          () => (m.close(), (c = !1), d(), !1),
        );
    if (
      ((b = await i),
      f.performance.mark(`microphone_ready`),
      f.startupTimings.mark(`microphone_ready`),
      K !== y)
    ) {
      b.getTracks().forEach((e) => e.stop());
      return;
    }
    let S = new MediaRecorder(b),
      C = Date.now(),
      w = n(),
      T = {
        abortController: new AbortController(),
        analytics: f,
        productLogger: a,
        sessionId: e,
        recorder: S,
        stopped: w.promise,
        interrupted: !1,
        recordingPersistence: null,
        stream: b,
        chunks: [],
        startedAtMs: C,
        isStopping: !1,
        confirmed: !1,
        notifiedRecordingStarted: !1,
        cancelled: !1,
        cancelStart: null,
        cancelStartFeedback: v,
        cleanupEnabled: r,
        streamingStarted: x ?? null,
        streamingSession: m,
        controls: t,
      };
    ((f.recordStartTs = T.startedAtMs),
      S.addEventListener(`dataavailable`, (e) => {
        e.data.size > 0 &&
          !T.cancelled &&
          (f.startupTimings.mark(`first_audio`),
          (o = !0),
          d(),
          T.chunks.push(e.data),
          T.recordingPersistence?.appendChunk(e.data, S.mimeType || e.data.type || `audio/webm`));
      }),
      S.addEventListener(
        `stop`,
        () => {
          (w.resolve(void 0), !T.isStopping && W === T && ((T.interrupted = !0), rt(e)));
        },
        { once: !0 },
      ),
      S.start(Ke),
      f.performance.mark(`recording_started`),
      f.startupTimings.mark(`recording_started`),
      (W = T),
      (K = null),
      (d = () => {
        !T.confirmed ||
          !o ||
          c ||
          T.notifiedRecordingStarted ||
          T.isStopping ||
          W !== T ||
          ((T.notifiedRecordingStarted = !0),
          B(() => {
            _ = t.onCaptureReady?.(f.startupTimings) ?? void 0;
          }),
          B(t.onRecordingStarted));
      }));
    let E = () => {
      if (!(W !== T || T.isStopping)) {
        ((T.confirmed = !0),
          d(),
          (T.cancelStart = null),
          p.resolve(!0),
          (T.recordingPersistence = Re({
            createdAtMs: C,
            dictationHistory: s,
            id: e,
            productSurface: f.productSurface,
            surface: `global`,
          })));
        for (let e of T.chunks) T.recordingPersistence?.appendChunk(e, S.mimeType || e.type || `audio/webm`);
      }
    };
    ((T.cancelStart = () => p.resolve(!1)),
      u == null
        ? E()
        : u.then((t) => {
            t ? E() : rt(e, !0);
          }),
      t.startWaveformCapture(b, () => {
        (f.startupTimings.mark(`first_audio`), (o = !0), d());
      }),
      m != null && ((await x) || (T.streamingSession = null)));
  } catch (n) {
    if (
      (u != null && !(await u) && rt(e, !0),
      y.cancel(),
      b?.getTracks().forEach((e) => {
        e.stop();
      }),
      K !== y && W?.sessionId !== e)
    )
      return;
    throw (
      W?.sessionId === e && (W.cancelStart?.(), W.streamingSession?.close(), (W = null)),
      t.stopWaveformCapture(),
      t.resetWaveformDisplay(),
      K === y && (K = null),
      k.dispatchMessage(`global-dictation-failed`, { sessionId: e, stage: `recording` }),
      N(a, f, {
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
      k.dispatchMessage(`global-dictation-recording-stopped`, { sessionId: e }),
      k.dispatchMessage(`global-dictation-completed`, { sessionId: e, text: `` }));
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
    k.dispatchMessage(`global-dictation-recording-stopped`, { sessionId: e }),
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
        k.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: `` }),
        N(e.productLogger, e.analytics, {
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
        k.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: `` }));
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
  let r = { ...n, analytics: _e(n.analytics) };
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
  let a = await (n == null ? ve(e.audio, { signal: r }).then((e) => e.text) : st(n, e, r));
  (r?.throwIfAborted(), e.analytics.performance.mark(`final_received`));
  let o = await We({ transcript: a, cleanupEnabled: t, signal: r });
  (r?.throwIfAborted(),
    ze(e.productLogger, e.analytics, o),
    G === e && (G = null),
    o.trim().length > 0 && e.recordingPersistence?.setTranscript(o.trim()),
    e.recovery != null && e.onRecoveryChange != null
      ? (o.trim().length === 0 && U === e.sessionId && (G = e),
        V(e, o.trim().length > 0 ? `recovered` : `failed`, o.trim() || null))
      : k.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: o }),
    e.analytics.performance.mark(`transcript_dispatched`),
    N(e.productLogger, e.analytics, {
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
      e.isSilent() ? `` : (V(t, `recovering`), (await ve(t.audio, { signal: n })).text)
    );
  }
}
async function ct(e, t, n, r, i, a, o) {
  (U === e && (G = r),
    r != null && V(r, `failed`),
    t(n),
    k.dispatchMessage(`global-dictation-failed`, { sessionId: e, stage: `transcription` }));
  let s = r != null || (await o?.waitForPendingWrites()) === !0;
  N(i, a, {
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
      k.dispatchMessage(`global-dictation-failed`, { sessionId: e.sessionId, stage: `transcription` }),
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
    (j(),
      A(),
      re(),
      Me(),
      Be(),
      Ge(),
      P(),
      Je(),
      Ee(),
      (H = 250),
      (U = null),
      (W = null),
      (G = null),
      (K = null),
      (q = null),
      xe.prepareAudio().catch(() => {}));
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
    i = n === void 0 ? `initializing` : n,
    a = _(S),
    [o, s] = (0, Q.useState)(null),
    c;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (e) => {
        let { failure: t } = e;
        s(t);
      }),
      (t[0] = c))
    : (c = t[0]),
    T(`global-dictation-paste-failed`, c));
  let u;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = () => {
        s(null);
      }),
      (t[1] = u))
    : (u = t[1]),
    T(`global-dictation-start`, u));
  let d;
  t[2] === o
    ? (d = t[3])
    : ((d = async function () {
        if (o != null)
          try {
            (await l.clipboard.writeText(o.text), s((e) => (e === o ? { ...e, copied: !0 } : e)));
          } catch (e) {
            let t = e;
            r.warning(`Failed to copy recovered dictation`, { safe: {}, sensitive: { error: t } });
          }
      }),
      (t[2] = o),
      (t[3] = d));
  let f = d,
    p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = async function () {
        try {
          await l.systemPermissions?.openAccessibilitySettings();
        } catch (e) {
          let t = e;
          r.warning(`Failed to open dictation Accessibility settings`, { safe: {}, sensitive: { error: t } });
        }
      }),
      (t[4] = p))
    : (p = t[4]);
  let m = p,
    h,
    g;
  if (
    (t[5] === a
      ? ((h = t[6]), (g = t[7]))
      : ((h = () => {
          if (a) return;
          let e = !0;
          return (
            queueMicrotask(() => {
              e && k.dispatchMessage(`global-dictation-renderer-ready`, {});
            }),
            () => {
              e = !1;
            }
          );
        }),
        (g = [a]),
        (t[5] = a),
        (t[6] = h),
        (t[7] = g)),
    (0, Q.useEffect)(h, g),
    a)
  )
    return null;
  let v = o != null,
    y = o != null,
    b;
  t[8] !== i || t[9] !== y
    ? ((b = (0, $.jsx)(ft, { initialStatus: i, recoveryVisible: y })), (t[8] = i), (t[9] = y), (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] !== b || t[12] !== v
    ? ((x = (0, $.jsx)(`div`, { hidden: v, children: b })), (t[11] = b), (t[12] = v), (t[13] = x))
    : (x = t[13]);
  let C;
  t[14] !== f || t[15] !== o
    ? ((C =
        o == null
          ? null
          : (0, $.jsx)(Qe, {
              failure: o,
              onCopy: () => void f(),
              onOpenSettings: l.systemPermissions == null ? void 0 : () => void m(),
              onDismiss: () => {
                (s(null), k.dispatchMessage(`global-dictation-close`, { sessionId: null }));
              },
            })),
      (t[14] = f),
      (t[15] = o),
      (t[16] = C))
    : (C = t[16]);
  let w;
  return (
    t[17] !== x || t[18] !== C
      ? ((w = (0, $.jsxs)($.Fragment, { children: [x, C] })), (t[17] = x), (t[18] = C), (t[19] = w))
      : (w = t[19]),
    w
  );
}
function ft(e) {
  let t = (0, bt.c)(117),
    { initialStatus: r, recoveryVisible: a } = e,
    c = s(i),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { name: `dictation.global` }), (t[0] = u))
    : (u = t[0]);
  let { isCapable: d } = fe(Ce, u),
    f = g(),
    p = Ue(pe),
    m = Ue(De),
    [h, _] = (0, Q.useState)(null),
    v = (0, Q.useRef)(null),
    y = (0, Q.useRef)(null),
    b,
    x;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = () => () => {
        y.current?.resolve(!1);
        let e = v.current;
        ((v.current = null), e != null && rt(e, !0));
      }),
      (x = []),
      (t[1] = b),
      (t[2] = x))
    : ((b = t[1]), (x = t[2])),
    (0, Q.useEffect)(b, x));
  let [S, C] = (0, Q.useState)(null),
    [w, E] = (0, Q.useState)(null),
    [D, A] = (0, Q.useState)(null),
    [ee, te] = (0, Q.useState)(!1),
    [ne, re] = (0, Q.useState)(0),
    [j, M] = (0, Q.useState)(r),
    [oe, se] = (0, Q.useState)(null),
    [ce, le] = (0, Q.useState)(!1),
    de = (0, Q.useRef)(null),
    N;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = { variant: `dictation` }), (t[3] = N))
    : (N = t[3]);
  let {
      waveformCanvasRef: me,
      startWaveformCapture: _e,
      stopWaveformCapture: ve,
      resetWaveformDisplay: ye,
    } = we(N),
    be;
  t[4] !== f || t[5] !== p
    ? ((be = (e, t) => {
        p && Te(`error`);
        let n = he(f, e, t);
        (se(n.message), le(n.canRetry), M(`error`));
      }),
      (t[4] = f),
      (t[5] = p),
      (t[6] = be))
    : (be = t[6]);
  let P = be,
    xe;
  t[7] !== S || t[8] !== P
    ? ((xe = () => {
        S != null &&
          (M(`transcribing`),
          se(null),
          le(!1),
          at(S, !1).catch((e) => {
            P(`transcription`, e);
          }));
      }),
      (t[7] = S),
      (t[8] = P),
      (t[9] = xe))
    : (xe = t[9]);
  let Se = xe,
    Ee;
  t[10] === S
    ? (Ee = t[11])
    : ((Ee = () => {
        S != null &&
          (k.dispatchMessage(`global-dictation-dismiss`, { sessionId: S }),
          (v.current = null),
          _(null),
          C(null),
          se(null),
          le(!1));
      }),
      (t[10] = S),
      (t[11] = Ee));
  let Oe = Ee,
    ke;
  t[12] !== S || t[13] !== j
    ? ((ke = () => {
        (S != null || j === `idle`) && k.dispatchMessage(`global-dictation-close`, { sessionId: S });
      }),
      (t[12] = S),
      (t[13] = j),
      (t[14] = ke))
    : (ke = t[14]);
  let Ae = ke,
    je;
  t[15] === j
    ? (je = t[16])
    : ((je = (e) => {
        j === `idle` && te(e);
      }),
      (t[15] = j),
      (t[16] = je));
  let Me = je,
    Pe;
  t[17] === a ? (Pe = t[18]) : ((Pe = () => a), (t[17] = a), (t[18] = Pe));
  let Fe;
  (t[19] !== ne || t[20] !== Pe
    ? ((Fe = {
        activationNonce: ne,
        isPaused: Pe,
        includeInteractiveRegion: !0,
        interactiveRegionRef: de,
        onInteractiveChange: _t,
        publishInitialNonInteractive: !1,
      }),
      (t[19] = ne),
      (t[20] = Pe),
      (t[21] = Fe))
    : (Fe = t[21]),
    Ze(Fe));
  let Le, Re;
  (t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (e) => {
        ((v.current = null),
          _(null),
          C(null),
          E(e.configuredHotkey),
          A(e.configuredToggleHotkey),
          te(!1),
          se(null),
          le(!1),
          re(gt),
          M(e.configuredHotkey != null || e.configuredToggleHotkey != null ? `idle` : `initializing`));
      }),
      (Re = []),
      (t[22] = Le),
      (t[23] = Re))
    : ((Le = t[22]), (Re = t[23])),
    T(`global-dictation-idle`, Le, Re));
  let ze;
  t[24] !== m || t[25] !== p || t[26] !== ye || t[27] !== c || t[28] !== P || t[29] !== _e || t[30] !== ve
    ? ((ze = (e) => {
        y.current?.resolve(!1);
        let t = e.pendingConfirmation ? n() : null;
        ((y.current = t),
          (v.current = e.sessionId),
          _(null),
          C(e.sessionId),
          te(!1),
          se(null),
          le(!1),
          e.pendingConfirmation || M(`listening`),
          nt(
            e.sessionId,
            {
              startWaveformCapture: _e,
              stopWaveformCapture: () => {
                ve();
              },
              resetWaveformDisplay: ye,
              onStartAccepted: p ? ge : void 0,
              onCaptureReady: p ? ht : void 0,
              onRecordingStopped: p ? mt : void 0,
              onRecoveryChange: (t) => {
                v.current === e.sessionId && (_(t), M(`error`));
              },
              onTranscriptionFailed: (t) => {
                v.current === e.sessionId && P(`transcription`, t);
              },
            },
            !1,
            m,
            c.get(Ie),
            e.startGesture,
            void 0,
            void 0,
            t?.promise,
            e.activationTiming,
          ).catch((t) => {
            v.current === e.sessionId && P(`start`, t);
          }));
      }),
      (t[24] = m),
      (t[25] = p),
      (t[26] = ye),
      (t[27] = c),
      (t[28] = P),
      (t[29] = _e),
      (t[30] = ve),
      (t[31] = ze))
    : (ze = t[31]);
  let Be;
  (t[32] === Symbol.for(`react.memo_cache_sentinel`) ? ((Be = []), (t[32] = Be)) : (Be = t[32]),
    T(`global-dictation-start`, ze, Be));
  let Ve, We;
  (t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (e) => {
        v.current === e.sessionId && (y.current?.resolve(!0), M(`listening`));
      }),
      (We = []),
      (t[33] = Ve),
      (t[34] = We))
    : ((Ve = t[33]), (We = t[34])),
    T(`global-dictation-start-confirmed`, Ve, We));
  let Ge;
  t[35] === h
    ? (Ge = t[36])
    : ((Ge = (e) => {
        v.current === e.sessionId &&
          h == null &&
          (y.current?.resolve(!1),
          M(e.cancel ? `idle` : `transcribing`),
          se(null),
          le(!1),
          rt(e.sessionId, e.cancel));
      }),
      (t[35] = h),
      (t[36] = Ge));
  let Ke;
  if (
    (t[37] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ke = []), (t[37] = Ke)) : (Ke = t[37]),
    T(`global-dictation-stop`, Ge, Ke),
    h != null)
  ) {
    let e;
    t[38] === h.text
      ? (e = t[39])
      : ((e = () => {
          l.clipboard.writeText(h.text ?? ``).catch(pt);
        }),
        (t[38] = h.text),
        (t[39] = e));
    let n = d ? Se : void 0,
      r;
    t[40] === h.recordingId
      ? (r = t[41])
      : ((r =
          h.recordingId == null
            ? void 0
            : () => {
                k.dispatchMessage(`show-settings`, {
                  section: `voice?recording=${encodeURIComponent(h.recordingId ?? ``)}`,
                });
              }),
        (t[40] = h.recordingId),
        (t[41] = r));
    let i;
    return (
      t[42] !== Oe || t[43] !== h || t[44] !== e || t[45] !== n || t[46] !== r
        ? ((i = (0, $.jsx)(`main`, {
            "data-theme": `dark`,
            className: `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-default`,
            children: (0, $.jsx)(`div`, {
              ref: de,
              className: `w-full max-w-xl p-2 select-none`,
              children: (0, $.jsx)(Ne, {
                recovery: h,
                onCopyText: e,
                onDismiss: Oe,
                onRetry: n,
                onViewRecording: r,
              }),
            }),
          })),
          (t[42] = Oe),
          (t[43] = h),
          (t[44] = e),
          (t[45] = n),
          (t[46] = r),
          (t[47] = i))
        : (i = t[47]),
      i
    );
  }
  let Je = j === `error` && `p-1`,
    F;
  t[48] === Je
    ? (F = t[49])
    : ((F = O(
        ut.darkTheme,
        `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-default`,
        Je,
      )),
      (t[48] = Je),
      (t[49] = F));
  let Ye = j !== `idle`,
    Xe = j === `idle` && ee,
    I;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = O(ut.darkTheme, `!rounded-full px-4 py-2`)), (t[50] = I))
    : (I = t[50]);
  let L;
  t[51] !== w || t[52] !== D
    ? ((L = (0, $.jsx)(yt, { configuredHotkey: w, configuredToggleHotkey: D })),
      (t[51] = w),
      (t[52] = D),
      (t[53] = L))
    : (L = t[53]);
  let Qe = j === `error` ? `w-fit` : `h-[30px] w-[120px]`,
    $e;
  t[54] === Qe
    ? ($e = t[55])
    : (($e = O(`group flex items-end justify-center`, Qe)), (t[54] = Qe), (t[55] = $e));
  let R;
  t[56] !== f || t[57] !== j
    ? ((R =
        j === `initializing`
          ? void 0
          : j === `idle`
            ? f.formatMessage({
                id: `globalDictation.readyAriaLabel`,
                defaultMessage: `Global dictation ready`,
                description: `Accessible label for the persistent global dictation reminder`,
              })
            : f.formatMessage({
                id: `globalDictation.waveformAriaLabel`,
                defaultMessage: `Global dictation waveform`,
                description: `Accessible label for the minimal global dictation waveform`,
              })),
      (t[56] = f),
      (t[57] = j),
      (t[58] = R))
    : (R = t[58]);
  let et = j === `error` ? `draggable` : `no-drag`,
    z = (j === `initializing` || j === `idle`) && ut.miniSurface,
    tt =
      (j === `initializing` || j === `idle`) &&
      `h-2 w-10 justify-center rounded-[4px] border-text-secondary/70 px-0`,
    it =
      j === `idle` &&
      `group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-border/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-border/80`,
    B = j !== `initializing` && j !== `idle` && ut.expandedSurface,
    ot = j !== `initializing` && j !== `idle` && `border-border/80`,
    st = (j === `listening` || j === `transcribing`) && `h-[30px] w-[72px] justify-center rounded-full px-2`,
    ct = j === `error` && `h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2`,
    V;
  t[59] !== et ||
  t[60] !== z ||
  t[61] !== tt ||
  t[62] !== it ||
  t[63] !== B ||
  t[64] !== ot ||
  t[65] !== st ||
  t[66] !== ct
    ? ((V = O(
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
      (t[59] = et),
      (t[60] = z),
      (t[61] = tt),
      (t[62] = it),
      (t[63] = B),
      (t[64] = ot),
      (t[65] = st),
      (t[66] = ct),
      (t[67] = V))
    : (V = t[67]);
  let H;
  t[68] === j
    ? (H = t[69])
    : ((H =
        j === `idle`
          ? (0, $.jsx)(`span`, {
              className: `relative flex h-full w-full items-center justify-center text-secondary`,
              children: (0, $.jsx)(He, {
                className: `icon-xs absolute scale-75 opacity-0 transition-[opacity,transform] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] group-hover:scale-100 group-hover:opacity-100 group-data-[state=delayed-open]:scale-100 group-data-[state=delayed-open]:opacity-100 motion-reduce:transition-none`,
              }),
            })
          : null),
      (t[68] = j),
      (t[69] = H));
  let U;
  t[70] === j
    ? (U = t[71])
    : ((U = j === `transcribing` ? (0, $.jsx)(ie, { className: `icon-xs text-secondary` }) : null),
      (t[70] = j),
      (t[71] = U));
  let W;
  t[72] !== ce || t[73] !== oe || t[74] !== Oe || t[75] !== Se || t[76] !== f || t[77] !== d || t[78] !== j
    ? ((W =
        j === `error`
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`span`, {
                  className: `max-w-[252px] min-w-0 truncate text-xs font-medium text-danger`,
                  children: oe,
                }),
                ce && d
                  ? (0, $.jsx)(`button`, {
                      type: `button`,
                      className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-secondary no-drag hover:bg-primary-ghost-hover hover:text-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                      "aria-label": f.formatMessage({
                        id: `globalDictation.retry`,
                        defaultMessage: `Retry`,
                        description: `Accessible label for the button that retries global dictation transcription`,
                      }),
                      onClick: Se,
                      children: (0, $.jsx)(qe, { className: `icon-2xs` }),
                    })
                  : null,
                (0, $.jsx)(`button`, {
                  type: `button`,
                  className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-secondary no-drag hover:bg-primary-ghost-hover hover:text-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                  "aria-label": f.formatMessage({
                    id: `globalDictation.dismissError`,
                    defaultMessage: `Dismiss`,
                    description: `Accessible label for the button that dismisses the global dictation error window`,
                  }),
                  onClick: Oe,
                  children: (0, $.jsx)(ue, { className: `icon-2xs` }),
                }),
              ],
            })
          : null),
      (t[72] = ce),
      (t[73] = oe),
      (t[74] = Oe),
      (t[75] = Se),
      (t[76] = f),
      (t[77] = d),
      (t[78] = j),
      (t[79] = W))
    : (W = t[79]);
  let G;
  t[80] !== j || t[81] !== me
    ? ((G =
        j === `listening`
          ? (0, $.jsx)(`canvas`, {
              ref: me,
              className: `h-4 min-w-0 flex-1 text-default`,
              "aria-hidden": `true`,
            })
          : null),
      (t[80] = j),
      (t[81] = me),
      (t[82] = G))
    : (G = t[82]);
  let K;
  t[83] === j
    ? (K = t[84])
    : ((K =
        j === `idle`
          ? (0, $.jsx)(o, {
              id: `globalDictation.ready`,
              defaultMessage: `Dictation ready`,
              description: `Status text for the persistent global dictation reminder`,
            })
          : null),
      (t[83] = j),
      (t[84] = K));
  let q;
  t[85] === j
    ? (q = t[86])
    : ((q =
        j === `listening`
          ? (0, $.jsx)(o, {
              id: `globalDictation.listening`,
              defaultMessage: `Listening`,
              description: `Status text shown in the global dictation window while recording`,
            })
          : null),
      (t[85] = j),
      (t[86] = q));
  let J;
  t[87] === j
    ? (J = t[88])
    : ((J =
        j === `transcribing`
          ? (0, $.jsx)(o, {
              id: `globalDictation.transcribing`,
              defaultMessage: `Transcribing…`,
              description: `Status text shown in the global dictation window while audio is being transcribed`,
            })
          : null),
      (t[87] = j),
      (t[88] = J));
  let lt = j === `error` ? oe : null,
    Y;
  t[89] !== K || t[90] !== q || t[91] !== J || t[92] !== lt
    ? ((Y = (0, $.jsxs)(`span`, { className: `sr-only`, children: [K, q, J, lt] })),
      (t[89] = K),
      (t[90] = q),
      (t[91] = J),
      (t[92] = lt),
      (t[93] = Y))
    : (Y = t[93]);
  let X;
  t[94] !== R || t[95] !== V || t[96] !== H || t[97] !== U || t[98] !== W || t[99] !== G || t[100] !== Y
    ? ((X = (0, $.jsxs)(`section`, {
        ref: de,
        "aria-live": `polite`,
        "aria-label": R,
        className: V,
        children: [H, U, W, G, Y],
      })),
      (t[94] = R),
      (t[95] = V),
      (t[96] = H),
      (t[97] = U),
      (t[98] = W),
      (t[99] = G),
      (t[100] = Y),
      (t[101] = X))
    : (X = t[101]);
  let Z;
  t[102] !== $e || t[103] !== X
    ? ((Z = (0, $.jsx)(`div`, { "data-testid": `global-dictation-hitbox`, className: $e, children: X })),
      (t[102] = $e),
      (t[103] = X),
      (t[104] = Z))
    : (Z = t[104]);
  let dt;
  t[105] !== Me || t[106] !== Ye || t[107] !== Xe || t[108] !== L || t[109] !== Z
    ? ((dt = (0, $.jsx)(ae, {
        delayDuration: 250,
        disableHoverOpen: Ye,
        disablePadding: !0,
        open: Xe,
        sideOffset: 10,
        tooltipClassName: I,
        tooltipMaxWidth: `36rem`,
        tooltipContent: L,
        onOpenChange: Me,
        children: Z,
      })),
      (t[105] = Me),
      (t[106] = Ye),
      (t[107] = Xe),
      (t[108] = L),
      (t[109] = Z),
      (t[110] = dt))
    : (dt = t[110]);
  let ft;
  t[111] !== Ae || t[112] !== dt
    ? ((ft = (0, $.jsx)(vt, { onClose: Ae, children: dt })), (t[111] = Ae), (t[112] = dt), (t[113] = ft))
    : (ft = t[113]);
  let xt;
  return (
    t[114] !== F || t[115] !== ft
      ? ((xt = (0, $.jsx)(`main`, { className: F, children: ft })),
        (t[114] = F),
        (t[115] = ft),
        (t[116] = xt))
      : (xt = t[116]),
    xt
  );
}
function pt(e) {
  r.warning(`Failed to copy recovered dictation`, { safe: {}, sensitive: { error: e } });
}
function mt() {
  Te(`stop`);
}
function ht(e) {
  return Te(`start`, e);
}
function gt(e) {
  return e + 1;
}
function _t(e) {
  k.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
function vt(e) {
  let t = (0, bt.c)(6),
    { children: n, onClose: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = ne({
        id: `globalDictation.closeWindow`,
        defaultMessage: `Close window`,
        description: `Context menu item that closes the global dictation floating window`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r ? (a = t[2]) : ((a = [{ id: `close-window`, message: i, onSelect: r }]), (t[1] = r), (t[2] = a));
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = (0, $.jsx)(le, { items: a, children: n })), (t[3] = n), (t[4] = a), (t[5] = o))
      : (o = t[5]),
    o
  );
}
function yt(e) {
  let t = (0, bt.c)(11),
    { configuredHotkey: n, configuredToggleHotkey: r } = e;
  if (n != null && r != null) {
    let e;
    t[0] === n
      ? (e = t[1])
      : ((e = (0, $.jsx)(c, { keysLabel: (0, $.jsx)(I, { accelerator: n }) }, `hold`)),
        (t[0] = n),
        (t[1] = e));
    let i;
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(c, { keysLabel: (0, $.jsx)(I, { accelerator: r }) }, `toggle`)),
        (t[2] = r),
        (t[3] = i));
    let a;
    return (
      t[4] !== e || t[5] !== i
        ? ((a = (0, $.jsx)(o, {
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
        : ((e = (0, $.jsx)(o, {
            id: `globalDictation.readyTooltip.hold`,
            defaultMessage: `Hold or double-tap {shortcut} to dictate`,
            description: `Tooltip explaining the hold-to-dictate shortcut`,
            values: { shortcut: (0, $.jsx)(c, { keysLabel: (0, $.jsx)(I, { accelerator: n }) }, `hold`) },
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
        : ((e = (0, $.jsx)(o, {
            id: `globalDictation.readyTooltip.toggle`,
            defaultMessage: `Press {shortcut} to dictate`,
            description: `Tooltip explaining the toggle dictation shortcut`,
            values: { shortcut: (0, $.jsx)(c, { keysLabel: (0, $.jsx)(I, { accelerator: r }) }, `toggle`) },
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
    ((bt = oe()),
      w(),
      d(),
      j(),
      (Q = de()),
      te(),
      ye(),
      F(),
      je(),
      p(),
      u(),
      ee(),
      D(),
      Ve(),
      L(),
      Le(),
      Pe(),
      E(),
      Xe(),
      A(),
      Ae(),
      re(),
      se(),
      y(),
      be(),
      Fe(),
      ke(),
      m(),
      tt(),
      J(),
      Z(),
      ($ = ce()));
  }))();
}
xt();
export { dt as GlobalDictationPage };
//# sourceMappingURL=global-dictation-page-821dddc8f0f3.js.map
