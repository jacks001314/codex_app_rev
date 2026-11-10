import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $t as n,
  A3t as r,
  AMt as i,
  Amn as a,
  B6t as o,
  BO as s,
  Bt as c,
  Cpn as l,
  Dmn as u,
  F3t as d,
  Ft as f,
  GG as p,
  Gt as m,
  It as h,
  J_ as g,
  Jdt as _,
  Jit as v,
  Jt as y,
  Kit as b,
  Kt as x,
  Lt as S,
  MMt as C,
  O3t as w,
  Omn as T,
  Opn as ee,
  Ot as te,
  QXt as ne,
  Qt as re,
  Rpn as ie,
  Rt as E,
  Smn as ae,
  Spn as oe,
  Ut as se,
  WG as ce,
  Wt as le,
  XKt as ue,
  Xdt as de,
  Xit as fe,
  Xt as D,
  Y_ as pe,
  Yit as O,
  Yt as me,
  Zt as he,
  _lt as ge,
  a3t as _e,
  aYt as ve,
  bK as k,
  bmn as ye,
  bpn as A,
  ck as be,
  dit as xe,
  eo as Se,
  f9t as Ce,
  fit as we,
  hmn as Te,
  hz as Ee,
  jMt as De,
  kMt as j,
  kmn as Oe,
  kt as ke,
  lk as M,
  mz as N,
  nZt as Ae,
  no as je,
  o3t as Me,
  qKt as P,
  qt as Ne,
  ro as F,
  sYt as Pe,
  to as I,
  xK as Fe,
  xmn as L,
  zO as Ie,
  zpn as Le,
  zt as Re,
} from "./app-initial-f094ef01c64d.js";
import { n as ze, t as Be } from "./use-floating-window-pointer-interactivity-4227999c8c97.js";
function Ve(e) {
  let t = (0, Ue.c)(38),
    { failure: n, onCopy: r, onOpenSettings: i, onDismiss: a } = e,
    o = ee(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = k(`CmdOrCtrl+V`)), (t[0] = s))
    : (s = t[0]);
  let c = s,
    u = (0, R.useRef)(null),
    d;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = {
        includeInteractiveRegion: !0,
        interactiveRegionRef: u,
        publishInitialNonInteractive: !1,
        onInteractiveChange: He,
      }),
      (t[1] = d))
    : (d = t[1]),
    ze(d));
  let f;
  t[2] === n.copied
    ? (f = t[3])
    : ((f = (0, z.jsx)(`div`, {
        className: `font-medium text-default`,
        children: n.copied
          ? (0, z.jsx)(l, {
              id: `globalDictation.pasteFailed.copiedShortcut`,
              defaultMessage: `Text copied — <shortcut>{keys}</shortcut> to paste`,
              description: `Dictation transcript is on the clipboard; shortcut is the system paste keybinding`,
              values: { keys: c, shortcut: () => (0, z.jsx)(O, { keysLabel: c }) },
            })
          : (0, z.jsx)(l, {
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
        : (0, z.jsx)(l, {
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
          ? (0, z.jsx)(l, {
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
          ? (0, z.jsx)(l, {
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
    ? ((g = (0, z.jsxs)(`div`, {
        className: `text-xs text-codex-description`,
        children: [p, m, h],
      })),
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
          ? (0, z.jsx)(j, {
              color: `secondary`,
              size: `composer`,
              radius: `large`,
              onClick: i,
              children: (0, z.jsx)(l, {
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
        : (0, z.jsx)(j, {
            color: `secondary`,
            size: `composer`,
            radius: `large`,
            onClick: r,
            children: (0, z.jsx)(l, {
              id: `globalDictation.pasteFailed.copy`,
              defaultMessage: `Copy transcript`,
              description: `Explicitly copies the recovered dictation transcript`,
            }),
          })),
      (t[22] = n.copied),
      (t[23] = r),
      (t[24] = b))
    : (b = t[24]);
  let x;
  t[25] === o
    ? (x = t[26])
    : ((x = o.formatMessage({
        id: `globalDictation.pasteFailed.dismiss`,
        defaultMessage: `Dismiss`,
        description: `Closes the dictation paste recovery notice`,
      })),
      (t[25] = o),
      (t[26] = x));
  let S;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, z.jsx)(_, {})), (t[27] = S))
    : (S = t[27]);
  let C;
  t[28] !== a || t[29] !== x
    ? ((C = (0, z.jsx)(j, {
        color: `ghost`,
        size: `icon`,
        "aria-label": x,
        onClick: a,
        children: S,
      })),
      (t[28] = a),
      (t[29] = x),
      (t[30] = C))
    : (C = t[30]);
  let w;
  t[31] !== b || t[32] !== C || t[33] !== y
    ? ((w = (0, z.jsxs)(z.Fragment, { children: [y, b, C] })),
      (t[31] = b),
      (t[32] = C),
      (t[33] = y),
      (t[34] = w))
    : (w = t[34]);
  let T;
  return (
    t[35] !== w || t[36] !== v
      ? ((T = (0, z.jsx)(`main`, {
          className: `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-default`,
          children: (0, z.jsx)(`div`, {
            ref: u,
            className: `w-full max-w-xl p-2 select-none`,
            children: (0, z.jsx)(Ie, {
              role: `status`,
              ariaLive: `polite`,
              Icon: ge,
              content: v,
              customCtas: w,
            }),
          }),
        })),
        (t[35] = w),
        (t[36] = v),
        (t[37] = T))
      : (T = t[37]),
    T
  );
}
function He(e) {
  L.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
var Ue,
  R,
  z,
  B = e(() => {
    ((Ue = Oe()), (R = t(a(), 1)), oe(), s(), i(), de(), fe(), Be(), Fe(), ye(), (z = Te()));
  });
async function We(e, t, n, r, i, a, o, s, c) {
  if (J?.sessionId === e || X?.sessionId === e) return;
  ((Y = null), J != null && Ge(J.sessionId), X?.cancel());
  let l = x({ dictationSessionId: e, startGesture: a, surface: `global` }),
    u = Ce(),
    d = r ? new se(l.performance) : null,
    f = s ?? N?.dictationAudio,
    p = I();
  p?.catch(() => {});
  let m = {
      sessionId: e,
      cancel: () => {
        (u.resolve(!1), d?.close());
      },
    },
    h = null;
  try {
    X = m;
    let r = (async () => {
      if ((await N?.systemPermissions?.requestMicrophoneAccess().catch(() => {}), X !== m))
        throw new DOMException(`Dictation start cancelled`, `AbortError`);
      return p == null ? je({ channelCount: 1 }, f) : Se({ channelCount: 1 }, await p, f);
    })();
    r.catch(() => {});
    let a = d?.start(r, u.promise).then(
      () => !0,
      () => (d.close(), !1),
    );
    if (((h = await r), l.performance.mark(`microphone_ready`), X !== m)) {
      h.getTracks().forEach((e) => e.stop());
      return;
    }
    let s = new MediaRecorder(h),
      g = Date.now(),
      _ = {
        analytics: l,
        productLogger: i,
        sessionId: e,
        recorder: s,
        recordingPersistence: null,
        stream: h,
        chunks: [],
        startedAtMs: g,
        isStopping: !1,
        confirmed: !1,
        notifiedRecordingStarted: !1,
        cancelled: !1,
        cancelStart: null,
        cleanupEnabled: n,
        streamingStarted: a ?? null,
        streamingSession: d,
        controls: t,
      };
    ((l.recordStartTs = _.startedAtMs),
      s.addEventListener(`dataavailable`, (e) => {
        e.data.size > 0 &&
          !_.cancelled &&
          (_.chunks.push(e.data),
          _.recordingPersistence?.appendChunk(e.data, s.mimeType || e.data.type || `audio/webm`));
      }),
      s.start(me),
      l.performance.mark(`recording_started`),
      (J = _),
      (X = null));
    let v = () => {
        ((_.confirmed = !0),
          (_.cancelStart = null),
          u.resolve(!0),
          (_.recordingPersistence = D({
            createdAtMs: g,
            dictationHistory: o,
            id: e,
            surface: `global`,
          })));
        for (let e of _.chunks)
          _.recordingPersistence?.appendChunk(e, s.mimeType || e.type || `audio/webm`);
      },
      y = c == null ? 0 : Math.max(0, q - (Date.now() - c));
    if (y > 0) {
      let e = setTimeout(v, y);
      _.cancelStart = () => {
        (clearTimeout(e), u.resolve(!1));
      };
    } else v();
    (t.startWaveformCapture(h),
      (_.notifiedRecordingStarted = !0),
      H(t.onRecordingStarted),
      d != null && ((await a) || (_.streamingSession = null)));
  } catch (n) {
    if (
      (m.cancel(),
      h?.getTracks().forEach((e) => {
        e.stop();
      }),
      X !== m && J?.sessionId !== e)
    )
      return;
    throw (
      J?.sessionId === e && (J.cancelStart?.(), J.streamingSession?.close(), (J = null)),
      t.stopWaveformCapture(),
      t.resetWaveformDisplay(),
      X === m && (X = null),
      L.dispatchMessage(`global-dictation-failed`, { sessionId: e, stage: `recording` }),
      y(i, l, {
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
function Ge(e, t = !1) {
  if (X?.sessionId === e) {
    let t = X;
    ((X = null),
      t.cancel(),
      L.dispatchMessage(`global-dictation-recording-stopped`, { sessionId: e }),
      L.dispatchMessage(`global-dictation-completed`, { sessionId: e, text: `` }));
    return;
  }
  let n = J;
  if (n == null || n.sessionId !== e || n.isStopping) return;
  (n.analytics.performance.mark(`stop_requested`), (n.isStopping = !0));
  let r = Date.now() - n.startedAtMs;
  ((n.analytics.recordDurationMs = r),
    (n.cancelled = t || !n.confirmed || r < K),
    n.cancelStart?.(),
    (n.cancelStart = null),
    n.cancelled && n.streamingSession?.close(),
    L.dispatchMessage(`global-dictation-recording-stopped`, { sessionId: e }),
    V(n, r));
}
async function V(e, t) {
  let n = null;
  try {
    try {
      await Promise.all([
        qe(e.recorder),
        e.cancelled ? void 0 : e.streamingSession?.stopAndFlush().catch(() => {}),
      ]);
    } finally {
      (e.stream.getTracks().forEach((e) => {
        e.stop();
      }),
        e.notifiedRecordingStarted && H(e.controls.onRecordingStopped),
        J === e &&
          (e.controls.stopWaveformCapture(), e.controls.resetWaveformDisplay(), (J = null)));
    }
    let r = e.cancelled || e.chunks.length === 0;
    if ((e.recordingPersistence?.finalize(r, t), r)) {
      (e.streamingSession?.close(),
        L.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: `` }),
        y(e.productLogger, e.analytics, {
          action: `cancel`,
          audioLost: !1,
          reason: `cancelled-recording`,
          retrySameAudioAvailable: !1,
          stopReason: e.chunks.length === 0 ? `no-audio` : `too-short`,
        }));
      return;
    }
    ((n = {
      analytics: e.analytics,
      productLogger: e.productLogger,
      sessionId: e.sessionId,
      audio: new Blob(e.chunks, { type: e.recorder.mimeType || e.chunks[0]?.type || `audio/webm` }),
      recordingPersistence: e.recordingPersistence,
      onTranscriptionFailed: e.controls.onTranscriptionFailed,
    }),
      e.streamingStarted != null && !(await e.streamingStarted) && (e.streamingSession = null),
      await U(n, e.cleanupEnabled, e.streamingSession));
  } catch (r) {
    (n ?? e.recordingPersistence?.finalize(!0, t),
      await G(
        e.sessionId,
        e.controls.onTranscriptionFailed,
        r,
        n,
        e.productLogger,
        e.analytics,
        e.recordingPersistence,
      ));
  }
}
function H(e) {
  try {
    e?.();
  } catch {}
}
async function Ke(e, t) {
  if (Z === e) return;
  let n = Y;
  if (n == null || n.sessionId !== e) throw Error(`No dictation audio to retry`);
  Z = e;
  let r = { ...n, analytics: m(n.analytics) };
  Y = r;
  try {
    await U(r, t);
  } catch (t) {
    throw (
      await G(
        e,
        n.onTranscriptionFailed,
        t,
        r,
        n.productLogger,
        r.analytics,
        n.recordingPersistence,
      ),
      t
    );
  } finally {
    Z === e && (Z = null);
  }
}
async function U(e, t, n = null) {
  let r = Date.now(),
    i = n == null ? await E(e.audio) : await W(n, e.audio);
  e.analytics.performance.mark(`final_received`);
  let a = await c({ transcript: i, cleanupEnabled: t });
  (Y === e && (Y = null),
    a.trim().length > 0 && e.recordingPersistence?.setTranscript(a.trim()),
    L.dispatchMessage(`global-dictation-completed`, { sessionId: e.sessionId, text: a }),
    e.analytics.performance.mark(`transcript_dispatched`),
    y(e.productLogger, e.analytics, {
      action: `insert`,
      audioLost: !1,
      reason: `success`,
      retrySameAudioAvailable: !1,
      stopReason: `user`,
      transcript: a,
      transcriptionStartedAtMs: r,
    }));
}
async function W(e, t) {
  try {
    return await e.finish();
  } catch {
    return e.isSilent() ? `` : E(t);
  }
}
async function G(e, t, n, r, i, a, o) {
  ((Y = r),
    t(n),
    L.dispatchMessage(`global-dictation-failed`, { sessionId: e, stage: `transcription` }));
  let s = r != null || (await o?.waitForPendingWrites()) === !0;
  y(i, a, {
    action: r == null ? `unrecoverable-error` : `show-retry`,
    audioLost: !s,
    error: n,
    reason: r == null ? `recording-error` : `transcription-error`,
    retrySameAudioAvailable: r != null,
    stopReason: `user`,
  });
}
function qe(e) {
  return e.state === `inactive`
    ? Promise.resolve()
    : new Promise((t) => {
        (e.addEventListener(
          `stop`,
          () => {
            t();
          },
          { once: !0 },
        ),
          e.stop());
      });
}
var K,
  q,
  J,
  Y,
  X,
  Z,
  Je = e(() => {
    (o(),
      ye(),
      Ee(),
      he(),
      Ne(),
      le(),
      F(),
      Re(),
      S(),
      (K = 250),
      (q = 100),
      (J = null),
      (Y = null),
      (X = null),
      (Z = null),
      se.prepareAudio().catch(() => {}));
  }),
  Ye,
  Xe,
  Ze,
  Qe,
  $e = e(() => {
    ((Ye = `_darkTheme_1xagz_1`),
      (Xe = `_miniSurface_1xagz_15`),
      (Ze = `_expandedSurface_1xagz_22`),
      (Qe = { darkTheme: Ye, miniSurface: Xe, expandedSurface: Ze }));
  });
function et(e) {
  let t = (0, ot.c)(20),
    { initialStatus: n } = e,
    r = n === void 0 ? `initializing` : n,
    i = d(ue),
    [a, o] = (0, Q.useState)(null),
    s;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (e) => {
        let { failure: t } = e;
        o(t);
      }),
      (t[0] = s))
    : (s = t[0]),
    ae(`global-dictation-paste-failed`, s));
  let c;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => {
        o(null);
      }),
      (t[1] = c))
    : (c = t[1]),
    ae(`global-dictation-start`, c));
  let l;
  t[2] === a
    ? (l = t[3])
    : ((l = async function () {
        if (a != null)
          try {
            (await N.clipboard.writeText(a.text), o((e) => (e === a ? { ...e, copied: !0 } : e)));
          } catch (e) {
            let t = e;
            T.warning(`Failed to copy recovered dictation`, { safe: {}, sensitive: { error: t } });
          }
      }),
      (t[2] = a),
      (t[3] = l));
  let u = l,
    f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = async function () {
        try {
          await N.systemPermissions?.openAccessibilitySettings();
        } catch (e) {
          let t = e;
          T.warning(`Failed to open dictation Accessibility settings`, {
            safe: {},
            sensitive: { error: t },
          });
        }
      }),
      (t[4] = f))
    : (f = t[4]);
  let p = f,
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
              e && L.dispatchMessage(`global-dictation-renderer-ready`, {});
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
    ? ((v = (0, $.jsx)(tt, { initialStatus: r, recoveryVisible: _ })),
      (t[8] = r),
      (t[9] = _),
      (t[10] = v))
    : (v = t[10]);
  let y;
  t[11] !== v || t[12] !== g
    ? ((y = (0, $.jsx)(`div`, { hidden: g, children: v })), (t[11] = v), (t[12] = g), (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== u || t[15] !== a
    ? ((b =
        a == null
          ? null
          : (0, $.jsx)(Ve, {
              failure: a,
              onCopy: () => void u(),
              onOpenSettings: N.systemPermissions == null ? void 0 : () => void p(),
              onDismiss: () => {
                (o(null), L.dispatchMessage(`global-dictation-close`, { sessionId: null }));
              },
            })),
      (t[14] = u),
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
function tt(e) {
  let t = (0, ot.c)(98),
    { initialStatus: n, recoveryVisible: i } = e,
    a = r(_e),
    o = ee(),
    s = Pe(re),
    [c, u] = (0, Q.useState)(null),
    [d, f] = (0, Q.useState)(null),
    [p, m] = (0, Q.useState)(null),
    [_, v] = (0, Q.useState)(!1),
    [y, x] = (0, Q.useState)(0),
    [S, C] = (0, Q.useState)(n),
    [w, T] = (0, Q.useState)(null),
    [ne, E] = (0, Q.useState)(!1),
    oe = (0, Q.useRef)(null),
    se;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = { variant: `dictation` }), (t[0] = se))
    : (se = t[0]);
  let {
      waveformCanvasRef: ce,
      startWaveformCapture: le,
      stopWaveformCapture: ue,
      resetWaveformDisplay: de,
    } = h(se),
    fe;
  t[1] === o
    ? (fe = t[2])
    : ((fe = (e, t) => {
        let n = te(o, e, t);
        (T(n.message), E(n.canRetry), C(`error`));
      }),
      (t[1] = o),
      (t[2] = fe));
  let D = fe,
    pe;
  t[3] !== c || t[4] !== D
    ? ((pe = () => {
        c != null &&
          (C(`transcribing`),
          T(null),
          E(!1),
          Ke(c, !1).catch((e) => {
            D(`transcription`, e);
          }));
      }),
      (t[3] = c),
      (t[4] = D),
      (t[5] = pe))
    : (pe = t[5]);
  let O = pe,
    me;
  t[6] === c
    ? (me = t[7])
    : ((me = () => {
        c != null &&
          (L.dispatchMessage(`global-dictation-dismiss`, { sessionId: c }),
          u(null),
          T(null),
          E(!1));
      }),
      (t[6] = c),
      (t[7] = me));
  let he = me,
    ge;
  t[8] !== c || t[9] !== S
    ? ((ge = () => {
        (c == null && S !== `idle`) ||
          L.dispatchMessage(`global-dictation-close`, { sessionId: c });
      }),
      (t[8] = c),
      (t[9] = S),
      (t[10] = ge))
    : (ge = t[10]);
  let ve = ge,
    k;
  t[11] === S
    ? (k = t[12])
    : ((k = (e) => {
        S === `idle` && v(e);
      }),
      (t[11] = S),
      (t[12] = k));
  let ye = k,
    A;
  t[13] === i ? (A = t[14]) : ((A = () => i), (t[13] = i), (t[14] = A));
  let Se;
  (t[15] !== y || t[16] !== A
    ? ((Se = {
        activationNonce: y,
        isPaused: A,
        includeInteractiveRegion: !0,
        interactiveRegionRef: oe,
        onInteractiveChange: rt,
        publishInitialNonInteractive: !1,
      }),
      (t[15] = y),
      (t[16] = A),
      (t[17] = Se))
    : (Se = t[17]),
    ze(Se));
  let Ce, we;
  (t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (e) => {
        (u(null),
          f(e.configuredHotkey),
          m(e.configuredToggleHotkey),
          v(!1),
          T(null),
          E(!1),
          x(nt),
          C(
            e.configuredHotkey != null || e.configuredToggleHotkey != null
              ? `idle`
              : `initializing`,
          ));
      }),
      (Ce = []),
      (t[18] = Ce),
      (t[19] = we))
    : ((Ce = t[18]), (we = t[19])),
    ae(`global-dictation-idle`, we, Ce));
  let Te;
  t[20] !== s || t[21] !== de || t[22] !== a || t[23] !== D || t[24] !== le || t[25] !== ue
    ? ((Te = (e) => {
        (u(e.sessionId),
          v(!1),
          T(null),
          E(!1),
          C(`listening`),
          We(
            e.sessionId,
            {
              startWaveformCapture: le,
              stopWaveformCapture: ue,
              resetWaveformDisplay: de,
              onTranscriptionFailed: (e) => {
                D(`transcription`, e);
              },
            },
            !1,
            s,
            a.get(Ae),
            e.startGesture,
            void 0,
            void 0,
            e.activationStartedAtMs,
          ).catch((e) => {
            D(`start`, e);
          }));
      }),
      (t[20] = s),
      (t[21] = de),
      (t[22] = a),
      (t[23] = D),
      (t[24] = le),
      (t[25] = ue),
      (t[26] = Te))
    : (Te = t[26]);
  let Ee;
  (t[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ee = []), (t[27] = Ee)) : (Ee = t[27]),
    ae(`global-dictation-start`, Te, Ee));
  let j, Oe;
  (t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => {
        (C(`transcribing`), T(null), E(!1), Ge(e.sessionId, e.cancel));
      }),
      (Oe = []),
      (t[28] = j),
      (t[29] = Oe))
    : ((j = t[28]), (Oe = t[29])),
    ae(`global-dictation-stop`, j, Oe));
  let ke = S === `error` && `p-1`,
    M;
  t[30] === ke
    ? (M = t[31])
    : ((M = ie(
        Qe.darkTheme,
        `flex h-screen w-screen items-end justify-center overflow-hidden bg-transparent text-default`,
        ke,
      )),
      (t[30] = ke),
      (t[31] = M));
  let N = S !== `idle`,
    je = S === `idle` && _,
    Me;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = ie(Qe.darkTheme, `!rounded-full px-4 py-2`)), (t[32] = Me))
    : (Me = t[32]);
  let P;
  t[33] !== d || t[34] !== p
    ? ((P = (0, $.jsx)(at, { configuredHotkey: d, configuredToggleHotkey: p })),
      (t[33] = d),
      (t[34] = p),
      (t[35] = P))
    : (P = t[35]);
  let Ne = S === `error` ? `w-fit` : `h-[30px] w-[120px]`,
    F;
  t[36] === Ne
    ? (F = t[37])
    : ((F = ie(`group flex items-end justify-center`, Ne)), (t[36] = Ne), (t[37] = F));
  let I;
  t[38] !== o || t[39] !== S
    ? ((I =
        S === `initializing`
          ? void 0
          : S === `idle`
            ? o.formatMessage({
                id: `globalDictation.readyAriaLabel`,
                defaultMessage: `Global dictation ready`,
                description: `Accessible label for the persistent global dictation reminder`,
              })
            : o.formatMessage({
                id: `globalDictation.waveformAriaLabel`,
                defaultMessage: `Global dictation waveform`,
                description: `Accessible label for the minimal global dictation waveform`,
              })),
      (t[38] = o),
      (t[39] = S),
      (t[40] = I))
    : (I = t[40]);
  let Fe = S === `error` ? `draggable` : `no-drag`,
    Ie = (S === `initializing` || S === `idle`) && Qe.miniSurface,
    Le =
      (S === `initializing` || S === `idle`) &&
      `h-2 w-10 justify-center rounded-[4px] border-text-secondary/70 px-0`,
    Re =
      S === `idle` &&
      `group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-border/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-border/80`,
    Be = S !== `initializing` && S !== `idle` && Qe.expandedSurface,
    Ve = S !== `initializing` && S !== `idle` && `border-border/80`,
    He =
      (S === `listening` || S === `transcribing`) &&
      `h-[30px] w-[72px] justify-center rounded-full px-2`,
    Ue = S === `error` && `h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2`,
    R;
  t[41] !== Fe ||
  t[42] !== Ie ||
  t[43] !== Le ||
  t[44] !== Re ||
  t[45] !== Be ||
  t[46] !== Ve ||
  t[47] !== He ||
  t[48] !== Ue
    ? ((R = ie(
        `flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none`,
        Fe,
        Ie,
        Le,
        Re,
        Be,
        Ve,
        He,
        Ue,
      )),
      (t[41] = Fe),
      (t[42] = Ie),
      (t[43] = Le),
      (t[44] = Re),
      (t[45] = Be),
      (t[46] = Ve),
      (t[47] = He),
      (t[48] = Ue),
      (t[49] = R))
    : (R = t[49]);
  let z;
  t[50] === S
    ? (z = t[51])
    : ((z =
        S === `idle`
          ? (0, $.jsx)(`span`, {
              className: `relative flex h-full w-full items-center justify-center text-secondary`,
              children: (0, $.jsx)(g, {
                className: `icon-xs absolute scale-75 opacity-0 transition-[opacity,transform] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] group-hover:scale-100 group-hover:opacity-100 group-data-[state=delayed-open]:scale-100 group-data-[state=delayed-open]:opacity-100 motion-reduce:transition-none`,
              }),
            })
          : null),
      (t[50] = S),
      (t[51] = z));
  let B;
  t[52] === S
    ? (B = t[53])
    : ((B = S === `transcribing` ? (0, $.jsx)(De, { className: `icon-xs text-secondary` }) : null),
      (t[52] = S),
      (t[53] = B));
  let V;
  t[54] !== ne || t[55] !== w || t[56] !== he || t[57] !== O || t[58] !== o || t[59] !== S
    ? ((V =
        S === `error`
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`span`, {
                  className: `max-w-[252px] min-w-0 truncate text-xs font-medium text-danger`,
                  children: w,
                }),
                ne
                  ? (0, $.jsx)(`button`, {
                      type: `button`,
                      className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-secondary no-drag hover:bg-primary-ghost-hover hover:text-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                      "aria-label": o.formatMessage({
                        id: `globalDictation.retry`,
                        defaultMessage: `Retry`,
                        description: `Accessible label for the button that retries global dictation transcription`,
                      }),
                      onClick: O,
                      children: (0, $.jsx)(be, { className: `icon-2xs` }),
                    })
                  : null,
                (0, $.jsx)(`button`, {
                  type: `button`,
                  className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-secondary no-drag hover:bg-primary-ghost-hover hover:text-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
                  "aria-label": o.formatMessage({
                    id: `globalDictation.dismissError`,
                    defaultMessage: `Dismiss`,
                    description: `Accessible label for the button that dismisses the global dictation error window`,
                  }),
                  onClick: he,
                  children: (0, $.jsx)(xe, { className: `icon-2xs` }),
                }),
              ],
            })
          : null),
      (t[54] = ne),
      (t[55] = w),
      (t[56] = he),
      (t[57] = O),
      (t[58] = o),
      (t[59] = S),
      (t[60] = V))
    : (V = t[60]);
  let H;
  t[61] !== S || t[62] !== ce
    ? ((H =
        S === `listening`
          ? (0, $.jsx)(`canvas`, {
              ref: ce,
              className: `h-4 min-w-0 flex-1 text-default`,
              "aria-hidden": `true`,
            })
          : null),
      (t[61] = S),
      (t[62] = ce),
      (t[63] = H))
    : (H = t[63]);
  let U;
  t[64] === S
    ? (U = t[65])
    : ((U =
        S === `idle`
          ? (0, $.jsx)(l, {
              id: `globalDictation.ready`,
              defaultMessage: `Dictation ready`,
              description: `Status text for the persistent global dictation reminder`,
            })
          : null),
      (t[64] = S),
      (t[65] = U));
  let W;
  t[66] === S
    ? (W = t[67])
    : ((W =
        S === `listening`
          ? (0, $.jsx)(l, {
              id: `globalDictation.listening`,
              defaultMessage: `Listening`,
              description: `Status text shown in the global dictation window while recording`,
            })
          : null),
      (t[66] = S),
      (t[67] = W));
  let G;
  t[68] === S
    ? (G = t[69])
    : ((G =
        S === `transcribing`
          ? (0, $.jsx)(l, {
              id: `globalDictation.transcribing`,
              defaultMessage: `Transcribing…`,
              description: `Status text shown in the global dictation window while audio is being transcribed`,
            })
          : null),
      (t[68] = S),
      (t[69] = G));
  let qe = S === `error` ? w : null,
    K;
  t[70] !== U || t[71] !== W || t[72] !== G || t[73] !== qe
    ? ((K = (0, $.jsxs)(`span`, { className: `sr-only`, children: [U, W, G, qe] })),
      (t[70] = U),
      (t[71] = W),
      (t[72] = G),
      (t[73] = qe),
      (t[74] = K))
    : (K = t[74]);
  let q;
  t[75] !== I ||
  t[76] !== R ||
  t[77] !== z ||
  t[78] !== B ||
  t[79] !== V ||
  t[80] !== H ||
  t[81] !== K
    ? ((q = (0, $.jsxs)(`section`, {
        ref: oe,
        "aria-live": `polite`,
        "aria-label": I,
        className: R,
        children: [z, B, V, H, K],
      })),
      (t[75] = I),
      (t[76] = R),
      (t[77] = z),
      (t[78] = B),
      (t[79] = V),
      (t[80] = H),
      (t[81] = K),
      (t[82] = q))
    : (q = t[82]);
  let J;
  t[83] !== F || t[84] !== q
    ? ((J = (0, $.jsx)(`div`, {
        "data-testid": `global-dictation-hitbox`,
        className: F,
        children: q,
      })),
      (t[83] = F),
      (t[84] = q),
      (t[85] = J))
    : (J = t[85]);
  let Y;
  t[86] !== ye || t[87] !== N || t[88] !== je || t[89] !== P || t[90] !== J
    ? ((Y = (0, $.jsx)(b, {
        delayDuration: 250,
        disableHoverOpen: N,
        disablePadding: !0,
        open: je,
        sideOffset: 10,
        tooltipClassName: Me,
        tooltipMaxWidth: `36rem`,
        tooltipContent: P,
        onOpenChange: ye,
        children: J,
      })),
      (t[86] = ye),
      (t[87] = N),
      (t[88] = je),
      (t[89] = P),
      (t[90] = J),
      (t[91] = Y))
    : (Y = t[91]);
  let X;
  t[92] !== ve || t[93] !== Y
    ? ((X = (0, $.jsx)(it, { onClose: ve, children: Y })), (t[92] = ve), (t[93] = Y), (t[94] = X))
    : (X = t[94]);
  let Z;
  return (
    t[95] !== M || t[96] !== X
      ? ((Z = (0, $.jsx)(`main`, { className: M, children: X })),
        (t[95] = M),
        (t[96] = X),
        (t[97] = Z))
      : (Z = t[97]),
    Z
  );
}
function nt(e) {
  return e + 1;
}
function rt(e) {
  L.dispatchMessage(`global-dictation-pointer-interaction-changed`, { isInteractive: e });
}
function it(e) {
  let t = (0, ot.c)(6),
    { children: n, onClose: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = A({
        id: `globalDictation.closeWindow`,
        defaultMessage: `Close window`,
        description: `Context menu item that closes the global dictation floating window`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = [{ id: `close-window`, message: i, onSelect: r }]), (t[1] = r), (t[2] = a));
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = (0, $.jsx)(ce, { items: a, children: n })), (t[3] = n), (t[4] = a), (t[5] = o))
      : (o = t[5]),
    o
  );
}
function at(e) {
  let t = (0, ot.c)(19),
    { configuredHotkey: n, configuredToggleHotkey: r } = e;
  if (n != null && r != null) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = k(n)), (t[0] = n), (t[1] = e));
    let i;
    t[2] === e
      ? (i = t[3])
      : ((i = (0, $.jsx)(O, { keysLabel: e }, `hold`)), (t[2] = e), (t[3] = i));
    let a;
    t[4] === r ? (a = t[5]) : ((a = k(r)), (t[4] = r), (t[5] = a));
    let o;
    t[6] === a
      ? (o = t[7])
      : ((o = (0, $.jsx)(O, { keysLabel: a }, `toggle`)), (t[6] = a), (t[7] = o));
    let s;
    return (
      t[8] !== i || t[9] !== o
        ? ((s = (0, $.jsx)(l, {
            id: `globalDictation.readyTooltip.holdAndToggle`,
            defaultMessage: `Hold {holdShortcut} or press {toggleShortcut} to dictate`,
            description: `Tooltip explaining both global dictation shortcuts`,
            values: { holdShortcut: i, toggleShortcut: o },
          })),
          (t[8] = i),
          (t[9] = o),
          (t[10] = s))
        : (s = t[10]),
      s
    );
  }
  if (n != null) {
    let e;
    t[11] === n ? (e = t[12]) : ((e = k(n)), (t[11] = n), (t[12] = e));
    let r;
    return (
      t[13] === e
        ? (r = t[14])
        : ((r = (0, $.jsx)(l, {
            id: `globalDictation.readyTooltip.hold`,
            defaultMessage: `Hold {shortcut} to dictate`,
            description: `Tooltip explaining the hold-to-dictate shortcut`,
            values: { shortcut: (0, $.jsx)(O, { keysLabel: e }, `hold`) },
          })),
          (t[13] = e),
          (t[14] = r)),
      r
    );
  }
  if (r != null) {
    let e;
    t[15] === r ? (e = t[16]) : ((e = k(r)), (t[15] = r), (t[16] = e));
    let n;
    return (
      t[17] === e
        ? (n = t[18])
        : ((n = (0, $.jsx)(l, {
            id: `globalDictation.readyTooltip.toggle`,
            defaultMessage: `Press {shortcut} to dictate`,
            description: `Tooltip explaining the toggle dictation shortcut`,
            values: { shortcut: (0, $.jsx)(O, { keysLabel: e }, `toggle`) },
          })),
          (t[17] = e),
          (t[18] = n)),
      n
    );
  }
  return null;
}
var ot, Q, $;
e(() => {
  ((ot = Oe()),
    Le(),
    w(),
    (Q = t(a(), 1)),
    oe(),
    f(),
    p(),
    fe(),
    C(),
    v(),
    Be(),
    pe(),
    M(),
    we(),
    Fe(),
    ye(),
    ne(),
    Ee(),
    Me(),
    P(),
    n(),
    ve(),
    ke(),
    u(),
    B(),
    Je(),
    $e(),
    ($ = Te()));
})();
export { et as GlobalDictationPage };
//# sourceMappingURL=global-dictation-page-526accc365c3.js.map
