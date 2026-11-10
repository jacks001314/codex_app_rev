import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  Dut as r,
  HNt as i,
  Ixt as a,
  Jbt as o,
  Myt as s,
  Pxt as c,
  VDt as l,
  aSt as u,
  hot as d,
  jDt as f,
  lot as p,
  nSt as m,
  rst as h,
  vzt as g,
  wot as _,
  xMt as v,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as b,
  Evr as x,
  Hu as S,
  IZn as C,
  Ju as w,
  Jyr as T,
  NOt as E,
  Nbr as D,
  Pbr as O,
  QJr as k,
  SZn as A,
  UZn as j,
  Uu as ee,
  Uyr as M,
  Vyr as N,
  Yu as te,
  ZJr as P,
  bnr as F,
  dd as I,
  fvr as L,
  gwr as ne,
  jOt as re,
  kZn as R,
  kvr as z,
  ld as ie,
  mvr as B,
  nTr as ae,
  qwr as oe,
  ud as se,
  wZn as ce,
  wvr as le,
  yjn as V,
  ynr as ue,
} from "./app-initial-5851df3f6cb1.js";
import { el as H, ip as de, tl as fe } from "./app-primary-fe8a450b3b04.js";
import { n as pe, t as me } from "./artifact-request-progress-b18754c299fc.js";
import { a as he, i as ge, o as _e, r as U, s as ve } from "./generation-progress-490dcbbf687d.js";
function ye(e, t, n, r, i) {
  let a = { hostId: n, threadId: r, streamRequestId: e.get(j, r) };
  (e.set(G, t, (e) => new Map(e).set(i, a)),
    e
      .when(({ get: e }) => !e(K, t).has(i))
      .then(() => {
        e.set(G, t, (e) => {
          if (e.get(i) !== a) return e;
          let t = new Map(e);
          return (t.delete(i), t);
        });
      }));
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = t(i(), 1)),
      c(),
      h(),
      V(),
      _(),
      oe(),
      pe(),
      (G = u(n, (e) => new Map())),
      (K = m(
        n,
        (e, { get: t }) => {
          let n = new Set();
          for (let [r, i] of t(G, e)) {
            let e = t(ae, s(i.threadId) ? i.threadId : o(i.threadId)),
              a = e == null ? null : t(me, { ...i, threadId: e, annotationId: r });
            a !== `finished` && a !== `missing` && n.add(r);
          }
          return n;
        },
        { isEqual: W.default },
      )));
  }))();
}
async function be({
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
    await xe({
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
          : D(o)),
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
        u != null && a != null && s != null && ye(u.scope, u.artifactKey, u.hostId, a, s);
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
async function xe({ comments: e, body: t, turnTrigger: n, isCurrent: r, getDestination: i, onAccepted: a }) {
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
function J() {
  return (J = e(() => {
    (O(), q());
  }))();
}
async function Se({
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
  let { requestId: u, ...f } = i;
  if (a.current == null || !s()) return !1;
  let p = c({ ...f, annotationId: u });
  if (p == null) return !1;
  let m = i.target.type === `presentation-element-selection` && i.target.primaryElementKind === `image`;
  m &&
    ((p.localArtifactAnnotationMetadata = {
      ...p.localArtifactAnnotationMetadata,
      target: i.target,
      generation: `image`,
    }),
    _e(e, t, { annotationId: u, target: i.target, body: i.body }));
  let h = ve(e, n, r, i),
    g = !1;
  try {
    let n;
    return (
      await xe({
        comments: [p],
        body: i.body,
        turnTrigger: `artifact_creation`,
        isCurrent: () => a.current != null && s(),
        getDestination: async () => {
          let e = await l();
          return ((n = e.threadId), e);
        },
        onAccepted: (i, a) => {
          let o = i ?? n;
          (h.accepted(o, a), (g = o != null), m && (o == null ? U(e, t, u) : ge(e, t, u, r, o)));
        },
      }),
      !0
    );
  } catch {
    return g
      ? !0
      : (h.finish(),
        U(e, t, u),
        e
          .get(d)
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
async function Ce(e, t) {
  let n = e.get(H, t);
  if (n == null) throw Error(`Artifact composer is unavailable`);
  return { submit: n.submit, threadId: n.threadId ?? t, isCurrent: () => e.get(H, t) === n };
}
function we() {
  return (we = e(() => {
    (fe(), p(), he(), J());
  }))();
}
function Te(e) {
  let t = (0, Ee.c)(51),
    { children: n, onBusyChange: r, onChange: i, onSubmit: o, tooltipPortalContainer: s, value: c } = e,
    u = a(ne),
    f = l(),
    p = (0, Y.useRef)(c),
    m,
    h;
  (t[0] === c
    ? ((m = t[1]), (h = t[2]))
    : ((m = () => {
        p.current = c;
      }),
      (h = [c]),
      (t[0] = c),
      (t[1] = m),
      (t[2] = h)),
    (0, Y.useEffect)(m, h));
  let g = ee(),
    _ = g === !0,
    v;
  t[3] === u.value ? (v = t[4]) : ((v = de(u.value)), (t[3] = u.value), (t[4] = v));
  let y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = () => p.current), (t[5] = y)) : (y = t[5]);
  let b;
  t[6] === i
    ? (b = t[7])
    : ((b = (e) => {
        let t = re(p.current, e);
        ((p.current = t), i(t));
      }),
      (t[6] = i),
      (t[7] = b));
  let x;
  t[8] !== i || t[9] !== o
    ? ((x = (e) => {
        let t = re(p.current, e);
        p.current = t;
        let n = t.trim();
        n.length !== 0 && (i(t), o(n));
      }),
      (t[8] = i),
      (t[9] = o),
      (t[10] = x))
    : (x = t[10]);
  let S, C, w;
  t[11] !== f || t[12] !== u
    ? ((S = () => {
        u.get(d).danger(
          f.formatMessage({
            id: `composer.dictation.startError`,
            defaultMessage: `Unable to start dictation`,
            description: `Toast text shown when dictation could not be started`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.startError` } },
        );
      }),
      (C = () => {
        u.get(d).danger(
          f.formatMessage({
            id: `composer.dictation.transcribeError`,
            defaultMessage: `Unable to transcribe audio`,
            description: `Toast text shown when dictation audio transcription fails`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.transcribeError` } },
        );
      }),
      (w = () => {
        u.get(d).danger(
          f.formatMessage({
            id: `composer.dictation.unsupported`,
            defaultMessage: `Dictation is not available on this device`,
            description: `Toast text shown when dictation is not supported on the current device`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.unsupported` } },
        );
      }),
      (t[11] = f),
      (t[12] = u),
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
    } = te(T),
    F = E || D || O,
    I,
    L;
  (t[24] !== F || t[25] !== r
    ? ((I = () => (
        r?.(F),
        () => {
          r?.(!1);
        }
      )),
      (L = [F, r]),
      (t[24] = F),
      (t[25] = r),
      (t[26] = I),
      (t[27] = L))
    : ((I = t[26]), (L = t[27])),
    (0, Y.useEffect)(I, L));
  let R;
  t[28] !== A ||
  t[29] !== g ||
  t[30] !== E ||
  t[31] !== _ ||
  t[32] !== O ||
  t[33] !== j ||
  t[34] !== N ||
  t[35] !== P ||
  t[36] !== s
    ? ((R =
        g == null || _
          ? (0, X.jsx)(ie, {
              isVisible: !0,
              isStarting: E,
              isTranscribing: O,
              canRetryDictation: A,
              disabled: g == null,
              radius: `full`,
              retryDictation: j,
              size: `formatToolbarIcon`,
              startDictation: N,
              stopDictation: P,
              tooltipPortalContainer: s,
            })
          : null),
      (t[28] = A),
      (t[29] = g),
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
          ? (0, X.jsx)(`div`, {
              className: `absolute inset-0 z-20 flex flex-col justify-center bg-surface-elevated-secondary`,
              children: (0, X.jsx)(se, {
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
    t[45] !== n || t[46] !== F || t[47] !== D || t[48] !== R || t[49] !== z
      ? ((B = n({ dictationButton: R, recordingOverlay: z, isBusy: F, isDictating: D })),
        (t[45] = n),
        (t[46] = F),
        (t[47] = D),
        (t[48] = R),
        (t[49] = z),
        (t[50] = B))
      : (B = t[50]),
    B
  );
}
var Ee, Y, X;
function De() {
  return (De = e(() => {
    ((Ee = g()), c(), (Y = y()), f(), I(), E(), w(), S(), p(), b(), (X = v()));
  }))();
}
var Oe, Z, Q, ke, $, Ae;
function je() {
  return (je = e(() => {
    ((Oe = t(r(), 1)),
      (Z = t(i(), 1)),
      c(),
      T(),
      k(),
      L(),
      V(),
      ue(),
      _(),
      (Q = m(
        n,
        (e, { get: t }) => {
          if (!t(C, e)) return null;
          let n = t(R, e);
          if (n == null) return null;
          let r = N({ current_node: t(A, e), mapping: n }).find((e) => e.author.role === `user`);
          return r == null ? null : { turnId: r.id, text: M(r) };
        },
        { isEqual: Z.default },
      )),
      (ke = m(
        n,
        (e, { get: t }) => {
          if (t(ce, e.threadId)) {
            let n = t(Q, e.threadId);
            return n == null ? null : { turnId: n.turnId, comments: F(n.text) };
          }
          let n = (0, Oe.default)(t(le, e), (e) => !t(x, e)?.pendingUserMessageAdmission);
          if (n == null) return null;
          let r = t(x, n);
          if (r?.status !== `inProgress` || r.turnId == null) return null;
          let i = r.params.input;
          if (i.length === 0 && (r.params.commentAttachments?.length ?? 0) === 0)
            for (let e of t(z, n) ?? []) {
              let r = t(B, { ...n, itemId: e });
              if (r?.type === `userMessage`) {
                i = r.content;
                break;
              }
            }
          return {
            turnId: r.turnId,
            comments: F(P({ input: i }).rawText, { commentAttachments: r.params.commentAttachments }),
          };
        },
        { isEqual: Z.default },
      )),
      ($ = m(
        n,
        (e, { get: t }) => {
          let n = new Map();
          if (e == null) return n;
          let r = t(ke, { hostId: e.hostId, threadId: e.threadId });
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
        { isEqual: Z.default },
      )),
      (Ae = m(n, (e, { get: t }) => new Set(t($, e).keys()), { isEqual: Z.default })));
  }))();
}
export {
  De as a,
  Se as c,
  K as d,
  q as f,
  Te as i,
  J as l,
  Ae as n,
  Ce as o,
  $ as r,
  we as s,
  je as t,
  be as u,
};
//# sourceMappingURL=artifact-comment-progress-2eae4712b5d9.js.map
