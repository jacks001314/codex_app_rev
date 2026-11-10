import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  FBt as i,
  Fdt as a,
  Jbt as o,
  LNt as s,
  PBt as c,
  Qst as l,
  SCt as u,
  Vrt as d,
  XOt as f,
  ZSt as p,
  iFt as m,
  okt as h,
  qrt as g,
  sct as _,
  uSt as v,
  yCt as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ESr as b,
  GCr as x,
  Gar as S,
  Gu as ee,
  K$r as C,
  MOr as te,
  OSr as w,
  QCr as T,
  VPn as E,
  War as D,
  Wu as O,
  Xu as k,
  Y1n as A,
  Z1n as j,
  Zu as ne,
  dd as re,
  fd as ie,
  g0n as M,
  gSr as N,
  gTt as P,
  jSr as F,
  l0n as I,
  lkr as L,
  mSr as R,
  mTt as ae,
  n0n as z,
  nTr as B,
  pd as oe,
  q$r as se,
  qCr as ce,
  rTr as le,
  vkr as ue,
  zOr as de,
} from "./app-initial-ad16eaadf81f.js";
import { _p as fe, dl as V, fl as pe } from "./app-primary-3e00728c2a4c.js";
import { n as me, t as he } from "./artifact-request-progress-6476ecb599a4.js";
import { a as ge, i as _e, o as ve, r as H, s as ye } from "./generation-progress-7c89ed0439c9.js";
function be(e, t, n, r, i) {
  let a = { hostId: n, threadId: r, streamRequestId: e.get(M, r) };
  (e.set(W, t, (e) => new Map(e).set(i, a)),
    e
      .when(({ get: e }) => !e(G, t).has(i))
      .then(() => {
        e.set(W, t, (e) => {
          if (e.get(i) !== a) return e;
          let t = new Map(e);
          return (t.delete(i), t);
        });
      }));
}
var U, W, G;
function K() {
  return (K = e(() => {
    ((U = t(m(), 1)),
      p(),
      _(),
      E(),
      r(),
      L(),
      me(),
      (W = u(l, (e) => new Map())),
      (G = y(
        l,
        (e, { get: t }) => {
          let n = new Set();
          for (let [r, i] of t(W, e)) {
            let e = t(ue, o(i.threadId) ? i.threadId : v(i.threadId)),
              a = e == null ? null : t(he, { ...i, threadId: e, annotationId: r });
            a !== `finished` && a !== `missing` && n.add(r);
          }
          return n;
        },
        { isEqual: U.default },
      )));
  }))();
}
async function xe({
  getPending: e,
  removePending: t,
  handleRef: n,
  isCurrent: r,
  getDestination: i,
  intl: a,
  directComment: o,
  body: s,
  onAccepted: c,
  onBatchOutcome: l,
  progress: u,
}) {
  let d = o == null ? e() : [o],
    f = d[0],
    p = n.current;
  if (f == null || p == null || !r()) return;
  let m = !1,
    h;
  try {
    await Se({
      comments: d,
      body:
        s ??
        (o == null
          ? a.formatMessage(
              {
                id: `artifactAnnotationBatch.applyAnnotationsPrompt`,
                defaultMessage: `Apply {count, plural, one {this annotation} other {these # annotations}}`,
                description: `Prompt submitted to the existing conversation when the user applies a batch of artifact annotations`,
              },
              { count: d.length },
            )
          : B(o)),
      getDestination: async () => {
        let e = await i();
        return ((h = e.threadId), e);
      },
      isCurrent: () => r() && n.current != null && (o != null || d.every((t) => e().includes(t))),
      onAccepted: (i) => {
        if (
          m ||
          (o ?? l?.({ annotationCount: d.length, outcome: `sent`, threadId: i ?? h }), (m = !0), o != null)
        )
          return;
        let a = i ?? h,
          s = f.localArtifactAnnotationContext?.annotationId;
        u != null && a != null && s != null && be(u.scope, u.artifactKey, u.hostId, a, s);
        let p = e().filter((e) => d.includes(e));
        if ((t(p), n.current != null && r())) {
          for (let e of p) {
            let t = e.localArtifactAnnotationContext?.annotationId;
            t != null && n.current.dismissAnnotation(t);
          }
          e().length === 0 && c?.();
        }
      },
    });
  } catch (e) {
    throw (!m && o == null && l?.({ annotationCount: d.length, outcome: `failed`, threadId: h }), e);
  }
}
async function Se({ comments: e, body: t, turnTrigger: n, isCurrent: r, getDestination: i, onAccepted: a }) {
  let o = e[0];
  if (o == null || !r()) throw Error(`Artifact request is no longer available`);
  let s = await i(),
    c = () => r() && s.isCurrent();
  if (!c()) throw Error(`Artifact destination is no longer available`);
  let l = !1;
  if (
    (await s.submit({
      type: `artifact-annotation-direct-submit`,
      turnTrigger: n,
      comment: o,
      comments: e,
      body: t,
      isCurrent: c,
      onAccepted: (e, t) => {
        ((l = !0), a?.(e, t));
      },
    }),
    !l)
  )
    throw Error(`Artifact submission was not accepted`);
}
function q() {
  return (q = e(() => {
    (le(), K());
  }))();
}
async function Ce({
  scope: e,
  artifactKey: t,
  progressKey: n,
  hostId: r,
  request: i,
  handleRef: a,
  intl: o,
  isCurrent: s,
  createComment: c,
  getDestination: l,
}) {
  let { requestId: u, ...d } = i;
  if (a.current == null || !s()) return !1;
  let f = c({ ...d, annotationId: u });
  if (f == null) return !1;
  let p = i.target.type === `presentation-element-selection` && i.target.primaryElementKind === `image`;
  p &&
    ((f.localArtifactAnnotationMetadata = {
      ...f.localArtifactAnnotationMetadata,
      target: i.target,
      generation: `image`,
    }),
    ve(e, t, { annotationId: u, target: i.target, body: i.body }));
  let m = ye(e, n, r, i),
    h = !1;
  try {
    let n;
    return (
      await Se({
        comments: [f],
        body: i.body,
        turnTrigger: `artifact_creation`,
        isCurrent: () => a.current != null && s(),
        getDestination: async () => {
          let e = await l();
          return ((n = e.threadId), e);
        },
        onAccepted: (i, a) => {
          let o = i ?? n;
          (m.accepted(o, a), (h = o != null), p && (o == null ? H(e, t, u) : _e(e, t, u, r, o)));
        },
      }),
      !0
    );
  } catch {
    return h
      ? !0
      : (m.finish(),
        H(e, t, u),
        e
          .get(g)
          .danger(
            o.formatMessage({
              id: `artifactGeneration.sendFailed`,
              defaultMessage: `Couldn't send this request. Check the chat and try again.`,
              description: `Error when an image or chart creation prompt could not be sent; the prompt stays open for retry`,
            }),
            { errorAnalytics: { toastId: `artifactGeneration.sendFailed` } },
          ),
        !1);
  }
}
async function we(e, t) {
  let n = e.get(V, t);
  if (n == null) throw Error(`Artifact composer is unavailable`);
  return { submit: n.submit, threadId: n.threadId ?? t, isCurrent: () => e.get(V, t) === n };
}
function Te() {
  return (Te = e(() => {
    (pe(), d(), ge(), q());
  }))();
}
function Ee(e) {
  let t = (0, De.c)(51),
    { children: r, onBusyChange: i, onChange: a, onSubmit: o, tooltipPortalContainer: s, value: c } = e,
    l = n(te),
    u = h(),
    d = (0, J.useRef)(c),
    f,
    p;
  (t[0] === c
    ? ((f = t[1]), (p = t[2]))
    : ((f = () => {
        d.current = c;
      }),
      (p = [c]),
      (t[0] = c),
      (t[1] = f),
      (t[2] = p)),
    (0, J.useEffect)(f, p));
  let m = ee(),
    _ = m === !0,
    v;
  t[3] === l.value ? (v = t[4]) : ((v = fe(l.value)), (t[3] = l.value), (t[4] = v));
  let y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = () => d.current), (t[5] = y)) : (y = t[5]);
  let b;
  t[6] === a
    ? (b = t[7])
    : ((b = (e) => {
        let t = ae(d.current, e);
        ((d.current = t), a(t));
      }),
      (t[6] = a),
      (t[7] = b));
  let x;
  t[8] !== a || t[9] !== o
    ? ((x = (e) => {
        let t = ae(d.current, e);
        d.current = t;
        let n = t.trim();
        n.length !== 0 && (a(t), o(n));
      }),
      (t[8] = a),
      (t[9] = o),
      (t[10] = x))
    : (x = t[10]);
  let S, C, w;
  t[11] !== u || t[12] !== l
    ? ((S = () => {
        l.get(g).danger(
          u.formatMessage({
            id: `composer.dictation.startError`,
            defaultMessage: `Unable to start dictation`,
            description: `Toast text shown when dictation could not be started`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.startError` } },
        );
      }),
      (C = () => {
        l.get(g).danger(
          u.formatMessage({
            id: `composer.dictation.transcribeError`,
            defaultMessage: `Unable to transcribe audio`,
            description: `Toast text shown when dictation audio transcription fails`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.transcribeError` } },
        );
      }),
      (w = () => {
        l.get(g).danger(
          u.formatMessage({
            id: `composer.dictation.unsupported`,
            defaultMessage: `Dictation is not available on this device`,
            description: `Toast text shown when dictation is not supported on the current device`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.unsupported` } },
        );
      }),
      (t[11] = u),
      (t[12] = l),
      (t[13] = S),
      (t[14] = C),
      (t[15] = w))
    : ((S = t[13]), (C = t[14]), (w = t[15]));
  let T;
  t[16] !== _ || t[17] !== v || t[18] !== b || t[19] !== x || t[20] !== S || t[21] !== C || t[22] !== w
    ? ((T = {
        productSurface: v,
        enabled: _,
        getSurroundingText: y,
        onTranscriptInsert: b,
        onTranscriptSend: x,
        onStartError: S,
        onTranscribeError: C,
        onUnsupported: w,
      }),
      (t[16] = _),
      (t[17] = v),
      (t[18] = b),
      (t[19] = x),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w),
      (t[23] = T))
    : (T = t[23]);
  let {
      isDictationStarting: E,
      isDictating: D,
      isTranscribing: O,
      transcriptionAction: k,
      canRetryDictation: A,
      retryDictation: j,
      waveformCanvasRef: M,
      startDictation: N,
      stopDictation: P,
    } = ne(T),
    F = E || D || O,
    I,
    L;
  (t[24] !== F || t[25] !== i
    ? ((I = () => (
        i?.(F),
        () => {
          i?.(!1);
        }
      )),
      (L = [F, i]),
      (t[24] = F),
      (t[25] = i),
      (t[26] = I),
      (t[27] = L))
    : ((I = t[26]), (L = t[27])),
    (0, J.useEffect)(I, L));
  let R;
  t[28] !== A ||
  t[29] !== m ||
  t[30] !== E ||
  t[31] !== _ ||
  t[32] !== O ||
  t[33] !== j ||
  t[34] !== N ||
  t[35] !== P ||
  t[36] !== s
    ? ((R =
        m == null || _
          ? (0, Y.jsx)(re, {
              isVisible: !0,
              isStarting: E,
              isTranscribing: O,
              canRetryDictation: A,
              disabled: m == null,
              radius: `full`,
              retryDictation: j,
              size: `formatToolbarIcon`,
              startDictation: N,
              stopDictation: P,
              tooltipPortalContainer: s,
            })
          : null),
      (t[28] = A),
      (t[29] = m),
      (t[30] = E),
      (t[31] = _),
      (t[32] = O),
      (t[33] = j),
      (t[34] = N),
      (t[35] = P),
      (t[36] = s),
      (t[37] = R))
    : (R = t[37]);
  let z;
  t[38] !== D || t[39] !== O || t[40] !== P || t[41] !== s || t[42] !== k || t[43] !== M
    ? ((z =
        D || O
          ? (0, Y.jsx)(`div`, {
              className: `absolute inset-0 z-20 flex flex-col justify-center bg-surface-elevated-secondary`,
              children: (0, Y.jsx)(ie, {
                transcriptionAction: k,
                waveformCanvasRef: M,
                stopDictation: P,
                noBottomMargin: !0,
                tooltipPortalContainer: s,
              }),
            })
          : null),
      (t[38] = D),
      (t[39] = O),
      (t[40] = P),
      (t[41] = s),
      (t[42] = k),
      (t[43] = M),
      (t[44] = z))
    : (z = t[44]);
  let B;
  return (
    t[45] !== r || t[46] !== F || t[47] !== D || t[48] !== R || t[49] !== z
      ? ((B = r({ dictationButton: R, recordingOverlay: z, isBusy: F, isDictating: D })),
        (t[45] = r),
        (t[46] = F),
        (t[47] = D),
        (t[48] = R),
        (t[49] = z),
        (t[50] = B))
      : (B = t[50]),
    B
  );
}
var De, J, Y;
function Oe() {
  return (Oe = e(() => {
    ((De = c()), p(), (J = i()), f(), oe(), P(), k(), O(), d(), de(), (Y = s()));
  }))();
}
var ke, X, Z, Ae, Q, je;
function $() {
  return ($ = e(() => {
    ((ke = t(a(), 1)),
      (X = t(m(), 1)),
      p(),
      T(),
      se(),
      R(),
      E(),
      D(),
      r(),
      (Z = y(
        l,
        (e, { get: t }) => {
          if (!t(I, e)) return null;
          let n = t(z, e);
          if (n == null) return null;
          let r = x({ current_node: t(A, e), mapping: n }).find((e) => e.author.role === `user`);
          return r == null ? null : { turnId: r.id, text: ce(r) };
        },
        { isEqual: X.default },
      )),
      (Ae = y(
        l,
        (e, { get: t }) => {
          if (t(j, e.threadId)) {
            let n = t(Z, e.threadId);
            return n == null ? null : { turnId: n.turnId, comments: S(n.text) };
          }
          let n = (0, ke.default)(t(b, e), (e) => !t(w, e)?.pendingUserMessageAdmission);
          if (n == null) return null;
          let r = t(w, n);
          if (r?.status !== `inProgress` || r.turnId == null) return null;
          let i = r.params.input;
          if (i.length === 0 && (r.params.commentAttachments?.length ?? 0) === 0)
            for (let e of t(F, n) ?? []) {
              let r = t(N, { ...n, itemId: e });
              if (r?.type === `userMessage`) {
                i = r.content;
                break;
              }
            }
          return {
            turnId: r.turnId,
            comments: S(C({ input: i }).rawText, { commentAttachments: r.params.commentAttachments }),
          };
        },
        { isEqual: X.default },
      )),
      (Q = y(
        l,
        (e, { get: t }) => {
          let n = new Map();
          if (e == null) return n;
          let r = t(Ae, { hostId: e.hostId, threadId: e.threadId });
          for (let t of r?.comments ?? []) {
            let i;
            ((i =
              `pageId` in e
                ? t.pageId === e.pageId
                : `artifactRef` in e
                  ? t.artifactRef === e.artifactRef
                  : t.artifactAnnotationFilePath === e.path),
              i && t.commentThreadId != null && r?.turnId != null && n.set(t.commentThreadId, r.turnId));
          }
          return n;
        },
        { isEqual: X.default },
      )),
      (je = y(l, (e, { get: t }) => new Set(t(Q, e).keys()), { isEqual: X.default })));
  }))();
}
export {
  Oe as a,
  Ce as c,
  G as d,
  K as f,
  Ee as i,
  q as l,
  je as n,
  we as o,
  Q as r,
  Te as s,
  $ as t,
  xe as u,
};
//# sourceMappingURL=artifact-comment-progress-24482edfa70a.js.map
