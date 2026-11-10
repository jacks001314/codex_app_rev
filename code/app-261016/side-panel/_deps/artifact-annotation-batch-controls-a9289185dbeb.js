import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  FBt as i,
  HO as a,
  IO as o,
  JO as s,
  KO as c,
  Kb as l,
  LNt as u,
  LO as d,
  Lst as f,
  MFt as p,
  OB as m,
  PBt as h,
  QS as g,
  Qst as _,
  RO as v,
  Rst as y,
  SY as b,
  TY as x,
  Vrt as S,
  WO as C,
  XO as w,
  XOt as T,
  Y3 as E,
  YO as ee,
  Z3 as D,
  ZS as O,
  ZSt as k,
  bB as A,
  eAt as j,
  iAt as M,
  jFt as N,
  jH as te,
  nAt as P,
  nCt as F,
  okt as ne,
  qO as I,
  qb as L,
  qrt as R,
  rAt as z,
  sV as re,
  sct as B,
  tAt as V,
  tkt as H,
  uSt as U,
  vB as W,
  vst as G,
  wB as K,
  xB as ie,
  yCt as q,
  yst as J,
  zO as Y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Er as X,
  $hr as ae,
  ASr as oe,
  ESr as se,
  FOr as ce,
  Gqn as le,
  MOr as ue,
  NSr as de,
  OGt as fe,
  QEr as pe,
  Qhr as me,
  V1n as he,
  VPn as ge,
  Wqn as _e,
  Xhr as ve,
  YGt as ye,
  av as be,
  cv as xe,
  d2n as Se,
  dgr as Ce,
  eer as we,
  egr as Te,
  f2n as Ee,
  fg as De,
  fgr as Oe,
  g0n as ke,
  hg as Ae,
  igr as je,
  jin as Me,
  kGt as Ne,
  kin as Pe,
  ler as Fe,
  lgr as Ie,
  m0n as Le,
  mSr as Re,
  na as ze,
  ngr as Be,
  o8t as Ve,
  ogr as He,
  pg as Ue,
  qGt as We,
  ra as Ge,
  rgr as Ke,
  s8t as qe,
  sgr as Je,
  t0n as Ye,
  ugr as Xe,
  x0n as Ze,
  zOr as Qe,
} from "./app-initial-ad16eaadf81f.js";
import { R as $e, _ as et, f as tt } from "./PopcornIcons-6c48726ff00b.js";
import { n as nt, t as rt } from "./artifact-request-progress-6476ecb599a4.js";
import { n as it, t as at } from "./use-command-hotkey-668eca96f5b4.js";
import { n as ot, t as st } from "./arrow-rotate-ccw-714acacf5c21.js";
function ct({
  annotationCount: e,
  phase: t,
  isSubmitting: n = !1,
  isAnnotating: r = !1,
  embedded: i = !1,
  sendDisabled: a = !1,
  previewContent: o,
  previewOpen: s,
  previewDisabled: c = !1,
  stopControl: l,
  completedReview: u,
  labels: d,
  navigationIcons: f,
  dismissIcon: p,
  windowZoom: m = 1,
  portalContainerElement: h,
  onNavigate: g,
  onCancel: _,
  onSend: v,
  onSeeLatestChanges: y,
  onDismissLatestChanges: b,
}) {
  let x = (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsx)(`button`, {
        type: `button`,
        className: `popcorn-annotation-batch-button`,
        "data-action": `cancel`,
        onClick: _,
        children: d.cancel,
      }),
      (0, Z.jsx)(`button`, {
        type: `button`,
        className: `popcorn-annotation-batch-button`,
        "data-action": `send`,
        disabled: a,
        onClick: v,
        children: d.send,
      }),
    ],
  });
  if (r && e === 0 && t === `idle` && !n)
    return (0, Z.jsxs)(`div`, {
      className: `popcorn-annotation-batch`,
      "data-variant": `review`,
      "data-embedded": i || void 0,
      role: i ? void 0 : `toolbar`,
      "aria-label": i ? void 0 : d.review,
      children: [
        (0, Z.jsx)(`span`, { className: `popcorn-annotation-batch-review-count`, children: d.selectContent }),
        (0, Z.jsx)(`button`, {
          type: `button`,
          className: `popcorn-annotation-batch-button`,
          "data-action": `cancel`,
          onClick: _,
          children: d.cancel,
        }),
      ],
    });
  if (g != null && (t !== `latest` || e > 0)) {
    let r = n || (e === 0 && t === `working`);
    return !r && e === 0
      ? null
      : (0, Z.jsx)(`div`, {
          className: `popcorn-annotation-batch`,
          "data-variant": `review`,
          "data-embedded": i || void 0,
          "data-artifact-review-bar": `annotation`,
          "data-testid": `artifact-annotation-review-bar`,
          role: i ? void 0 : `toolbar`,
          "aria-label": i ? void 0 : d.review,
          children: r
            ? (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `popcorn-annotation-batch-status`,
                    role: `status`,
                    children: d.working,
                  }),
                  l,
                ],
              })
            : (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(lt, {
                    side: `top`,
                    countLabel: d.annotationCount,
                    previewLabel: d.annotationPreview,
                    previewContent: o,
                    previewOpen: s,
                    previewDisabled: c,
                    windowZoom: m,
                    portalContainerElement: h,
                  }),
                  e > 1 &&
                    (0, Z.jsxs)(`div`, {
                      className: `popcorn-annotation-batch-navigation`,
                      children: [
                        (0, Z.jsx)(`button`, {
                          type: `button`,
                          className: `popcorn-annotation-batch-button`,
                          "data-action": `navigate`,
                          "aria-label": d.previous,
                          onClick: () => g(-1),
                          children:
                            f?.previous ??
                            (0, Z.jsx)(tt, {
                              "aria-hidden": !0,
                              className: `popcorn-annotation-batch-chevron-previous`,
                            }),
                        }),
                        (0, Z.jsx)(`button`, {
                          type: `button`,
                          className: `popcorn-annotation-batch-button`,
                          "data-action": `navigate`,
                          "aria-label": d.next,
                          onClick: () => g(1),
                          children:
                            f?.next ??
                            (0, Z.jsx)(tt, {
                              "aria-hidden": !0,
                              className: `popcorn-annotation-batch-chevron`,
                            }),
                        }),
                      ],
                    }),
                  (0, Z.jsx)(`span`, { className: `popcorn-annotation-batch-divider`, "aria-hidden": !0 }),
                  x,
                ],
              }),
        });
  }
  return n
    ? null
    : e === 0 && t === `latest`
      ? u == null
        ? (0, Z.jsxs)(`div`, {
            className: `popcorn-annotation-batch`,
            "data-variant": `latest`,
            "data-testid": `artifact-annotation-batch-latest`,
            children: [
              (0, Z.jsx)(`button`, {
                type: `button`,
                className: `popcorn-annotation-batch-latest-action`,
                "data-popcorn-annotation-refresh": `true`,
                onClick: y,
                children: d.seeLatestChanges,
              }),
              (0, Z.jsx)(`span`, { className: `popcorn-annotation-batch-divider`, "aria-hidden": !0 }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                className: `popcorn-annotation-batch-latest-dismiss`,
                "aria-label": d.dismissLatestChanges,
                onClick: b,
                children:
                  p ?? (0, Z.jsx)(et, { "aria-hidden": !0, className: `popcorn-annotation-batch-cross` }),
              }),
            ],
          })
        : (0, Z.jsxs)(`div`, {
            className: `popcorn-annotation-batch`,
            "data-variant": `review`,
            "data-embedded": i || void 0,
            role: i ? void 0 : `toolbar`,
            "aria-label": i ? void 0 : d.review,
            children: [
              (0, Z.jsx)(`span`, {
                className: `popcorn-annotation-batch-review-count`,
                children: u.changeCount,
              }),
              (0, Z.jsx)(`span`, { className: `popcorn-annotation-batch-divider`, "aria-hidden": !0 }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                className: `popcorn-annotation-batch-button`,
                "data-action": `undo`,
                "aria-disabled": `true`,
                children: u.undo,
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                className: `popcorn-annotation-batch-button`,
                "data-action": `accept`,
                "aria-disabled": `true`,
                children: u.acceptAll,
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                className: `popcorn-annotation-batch-button`,
                "data-action": `dismiss`,
                "aria-label": u.dismiss,
                "aria-disabled": `true`,
                children:
                  p ?? (0, Z.jsx)(et, { "aria-hidden": !0, className: `popcorn-annotation-batch-cross` }),
              }),
            ],
          })
      : e === 0
        ? null
        : (0, Z.jsxs)(`div`, {
            className: `popcorn-annotation-batch`,
            "data-variant": `batch`,
            "data-embedded": i || void 0,
            "data-testid": `artifact-annotation-batch-controls`,
            children: [
              (0, Z.jsx)(lt, {
                side: `bottom`,
                countLabel: d.annotationCount,
                previewLabel: d.annotationPreview,
                previewContent: o,
                previewOpen: s,
                previewDisabled: c,
                windowZoom: m,
                portalContainerElement: h,
              }),
              x,
            ],
          });
}
function lt({
  side: e,
  countLabel: t,
  previewLabel: n,
  previewContent: r,
  previewOpen: i,
  previewDisabled: a,
  windowZoom: o,
  portalContainerElement: s,
}) {
  let [c, l] = (0, ut.useState)(`closed`);
  a && c !== `dragged` && l(`dragged`);
  let u = (0, ut.useRef)(null),
    d = (0, ut.useRef)(null),
    f = (0, ut.useRef)(!1);
  (0, ut.useEffect)(
    () => () => {
      d.current != null && window.clearTimeout(d.current);
    },
    [],
  );
  let p = () => {
      d.current != null && (window.clearTimeout(d.current), (d.current = null));
    },
    m = () => {
      (p(), !a && r != null && l(`open`));
    },
    h = () => {
      (p(),
        (d.current = window.setTimeout(() => {
          ((d.current = null),
            u.current?.contains(document.activeElement) || l((e) => (e === `dragged` ? e : `closed`)));
        }, dt)));
    },
    g = !a && r != null && (i ?? c === `open`);
  return (0, Z.jsxs)(P, {
    open: g,
    onOpenChange: (e) => {
      a || l(e ? `open` : `closed`);
    },
    children: [
      (0, Z.jsx)(z, {
        asChild: !0,
        children: (0, Z.jsx)(`button`, {
          type: `button`,
          className: `popcorn-annotation-batch-count`,
          onFocus: (e) => {
            if (f.current) {
              f.current = !1;
              return;
            }
            e.currentTarget.matches(`:focus-visible`) && m();
          },
          onKeyDown: (e) => {
            e.key === `Tab` && !e.shiftKey && g && (e.preventDefault(), u.current?.focus());
          },
          onMouseEnter: c === `dragged` ? void 0 : m,
          onMouseLeave: h,
          onPointerMove: m,
          children: t,
        }),
      }),
      (0, Z.jsx)(V, {
        container: s ?? void 0,
        children: (0, Z.jsx)(j, {
          ref: u,
          className: `popcorn-annotation-batch`,
          "data-variant": `preview`,
          "aria-label": n,
          align: `center`,
          side: e,
          sideOffset: e === `top` ? 16 : 4,
          collisionPadding: 6,
          tabIndex: 0,
          style: { zoom: s == null && o !== 1 ? o : void 0 },
          onCloseAutoFocus: (e) => {
            (a || (!f.current && document.activeElement !== document.body)) && e.preventDefault();
          },
          onEscapeKeyDown: () => {
            f.current = !0;
          },
          onMouseEnter: m,
          onMouseLeave: h,
          onOpenAutoFocus: (e) => {
            e.preventDefault();
          },
          children: r,
        }),
      }),
    ],
  });
}
var ut, Z, dt;
function ft() {
  return (ft = e(() => {
    (M(), (ut = i()), $e(), (Z = u()), (dt = 100));
  }))();
}
var pt, mt;
function ht() {
  return (ht = e(() => {
    (k(),
      B(),
      we(),
      pe(),
      Pe(),
      Se(),
      ge(),
      xe(),
      n(),
      Be(),
      nt(),
      (pt = q(
        _,
        (e, { get: t }) => {
          let n = t(me, e),
            r = n?.execution;
          if (r?.type === `chatgpt`) {
            let { conversationId: i, streamRequestId: a } = r.completion,
              o = t(Ye, i);
            if (
              n?.annotationId != null &&
              Ee(t(he, i)) &&
              (o?.streamRequestId !== a || o?.status === `completed`)
            ) {
              let r = t(rt, {
                hostId: e.hostId,
                threadId: U(i),
                annotationId: n.annotationId,
                streamRequestId: a,
              });
              return {
                isResponseInProgress: r !== `finished` && r !== `missing`,
                hasPendingTurnStart: !1,
                recoveryTurnInterrupted: !1,
              };
            }
            if (a != null && o?.streamRequestId === a)
              return {
                isResponseInProgress: !1,
                hasPendingTurnStart: !1,
                recoveryTurnInterrupted: o.status === `interrupted`,
              };
            let s = t(ke, i),
              c = t(Le, i);
            return {
              isResponseInProgress: a != null && s === a && Ze(c) ? !0 : null,
              hasPendingTurnStart: !1,
              recoveryTurnInterrupted: !1,
            };
          }
          if (n == null || r == null)
            return { isResponseInProgress: !1, hasPendingTurnStart: !1, recoveryTurnInterrupted: !1 };
          let i = r.turn ?? r.queuedBehindTurn,
            a = i?.threadId ?? U(e.conversationId),
            o = t(Fe, a);
          if (r.turn == null && r.queuedBehindTurn != null) {
            let r = t(Me, { hostId: e.hostId, threadId: a });
            r == null
              ? (o = null)
              : r.some((e) => e.context.artifactAnnotationBatch?.sessionId === n.sessionId) && (o = !0);
          }
          return {
            isResponseInProgress: o,
            hasPendingTurnStart: t(be, a) != null,
            recoveryTurnInterrupted: i?.turnId != null && t(X, a).has(i.turnId),
          };
        },
        {
          isEqual: (e, t) =>
            e.isResponseInProgress === t.isResponseInProgress &&
            e.hasPendingTurnStart === t.hasPendingTurnStart &&
            e.recoveryTurnInterrupted === t.recoveryTurnInterrupted,
        },
      )),
      (mt = q(_, (e, { get: t }) => {
        let n = t(me, e);
        if (n == null) return !1;
        let r = t(pt, e);
        return n.isSubmitting || r.hasPendingTurnStart || r.isResponseInProgress === !0;
      })));
  }))();
}
function gt(e, t, n, r, i) {
  r?.(`send`);
  let a = e.get(ve, n),
    o = a[0];
  if (o == null || De(n.conversationId, `direct-comment`) === !1 || e.get(me, n)?.isSubmitting) return;
  let s = { ...n, sessionId: globalThis.crypto.randomUUID() };
  ae(e, s, i);
  try {
    p.dispatchHostMessage({
      type: `artifact-direct-comment`,
      artifactBatch: { hostId: n.hostId, path: n.path },
      body: ``,
      comment: o,
      comments: a,
      conversationId: n.conversationId,
      sessionId: s.sessionId,
    });
  } catch {
    (je(e, s),
      e
        .get(R)
        .danger(
          t.formatMessage({
            id: `artifactAnnotationBatch.sendFailed`,
            defaultMessage: `Could not send requests. Try again.`,
            description: `Error shown when an artifact request batch could not be sent; saved requests are retained for retry`,
          }),
          { errorAnalytics: { toastId: `artifactAnnotationBatch.sendFailed` } },
        ));
  }
}
function _t() {
  return (_t = e(() => {
    (Ue(), S(), N(), Be());
  }))();
}
function vt(e) {
  let t = (0, yt.c)(19),
    { open: n, onDiscard: r, onKeepAnnotations: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (e) => {
        e || i();
      }),
      (t[0] = i),
      (t[1] = a));
  let s;
  t[2] === r
    ? (s = t[3])
    : ((s = (e) => {
        (e.preventDefault(), r());
      }),
      (t[2] = r),
      (t[3] = s));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(I, {
        children: (0, Q.jsx)(H, {
          id: `artifactAnnotations.exit.title`,
          defaultMessage: `Discard annotations?`,
          description: `Confirmation title before discarding pending artifact annotations`,
        }),
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(Y, {
        children: (0, Q.jsx)(v, {
          title: l,
          subtitle: (0, Q.jsx)(c, {
            children: (0, Q.jsx)(H, {
              id: `artifactAnnotations.exit.description`,
              defaultMessage: `You have annotations that haven't been sent.`,
              description: `Explanation that the annotations being discarded have not been sent`,
            }),
          }),
        }),
      })),
      (t[5] = u))
    : (u = t[5]);
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(H, {
        id: `artifactAnnotations.exit.stay`,
        defaultMessage: `Keep annotations`,
        description: `Keep pending annotations and return to annotation mode`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === i
    ? (p = t[8])
    : ((p = (0, Q.jsx)(E, { autoFocus: !0, color: `secondary`, type: `button`, onClick: i, children: f })),
      (t[7] = i),
      (t[8] = p));
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(E, {
        color: `danger`,
        type: `submit`,
        children: (0, Q.jsx)(H, {
          id: `artifactAnnotations.exit.leave`,
          defaultMessage: `Discard`,
          description: `Discard pending annotations and leave annotation mode`,
        }),
      })),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === p
    ? (h = t[11])
    : ((h = (0, Q.jsx)(Y, { children: (0, Q.jsxs)(d, { children: [p, m] }) })), (t[10] = p), (t[11] = h));
  let g;
  t[12] !== s || t[13] !== h
    ? ((g = (0, Q.jsxs)(o, { as: `form`, onSubmit: s, children: [u, h] })),
      (t[12] = s),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== n || t[16] !== a || t[17] !== g
      ? ((_ = (0, Q.jsx)(C, { open: n, showDialogClose: !1, size: `compact`, onOpenChange: a, children: g })),
        (t[15] = n),
        (t[16] = a),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
var yt, Q;
function bt() {
  return (bt = e(() => {
    ((yt = h()), T(), D(), s(), a(), (Q = u()));
  }))();
}
function xt(e) {
  let n = (0, St.c)(19),
    i = t(ue),
    a = ne(),
    o = F(wt, e),
    s;
  n[0] !== a || n[1] !== i || n[2] !== e
    ? ((s = async () => {
        if (!i.get(wt, e)) return;
        let { hostId: t, execution: n } = e;
        if (n.type === `chatgpt`) {
          let { conversationId: e, streamRequestId: t } = n.completion;
          if (t == null) return;
          await ye(
            i,
            e,
            a.formatMessage({
              id: `artifactReviewBar.stopFailed`,
              defaultMessage: `Could not stop this turn`,
              description: `Error shown when stopping the conversation turn for an artifact review fails`,
            }),
            { expectedStreamRequestId: t },
          );
          return;
        }
        let r = n.turn;
        r?.threadId != null &&
          r.turnId != null &&
          (await Ne(i, {
            conversationId: r.threadId,
            hostId: t,
            initiatedBy: `user`,
            expectedTurnId: r.turnId ?? void 0,
          }));
      }),
      (n[0] = a),
      (n[1] = i),
      (n[2] = e),
      (n[3] = s))
    : (s = n[3]);
  let c;
  n[4] !== a || n[5] !== i
    ? ((c = () => {
        i.get(R).danger(
          a.formatMessage({
            id: `artifactReviewBar.stopFailed`,
            defaultMessage: `Could not stop this turn`,
            description: `Error shown when stopping the conversation turn for an artifact review fails`,
          }),
          { errorAnalytics: { toastId: `artifactReviewBar.stopFailed` } },
        );
      }),
      (n[4] = a),
      (n[5] = i),
      (n[6] = c))
    : (c = n[6]);
  let l;
  n[7] !== s || n[8] !== c
    ? ((l = { mutationFn: s, onError: c }), (n[7] = s), (n[8] = c), (n[9] = l))
    : (l = n[9]);
  let { mutate: u, isPending: d } = J(l);
  if (!o) return null;
  let f;
  n[10] === a
    ? (f = n[11])
    : ((f = a.formatMessage({
        id: `artifactReviewBar.stop`,
        defaultMessage: `Stop`,
        description: `Stop the conversation turn processing these artifact annotations`,
      })),
      (n[10] = a),
      (n[11] = f));
  let p;
  n[12] === u ? (p = n[13]) : ((p = () => u()), (n[12] = u), (n[13] = p));
  let m;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Ct.jsx)(r, { className: `shrink-0`, asset: L })), (n[14] = m))
    : (m = n[14]);
  let h;
  return (
    n[15] !== d || n[16] !== f || n[17] !== p
      ? ((h = (0, Ct.jsx)(E, {
          "aria-label": f,
          color: `tinted`,
          size: `composerSm`,
          disabled: d,
          onClick: p,
          children: m,
        })),
        (n[15] = d),
        (n[16] = f),
        (n[17] = p),
        (n[18] = h))
      : (h = n[18]),
    h
  );
}
var St, Ct, wt;
function Tt() {
  return (Tt = e(() => {
    ((St = h()),
      l(),
      G(),
      k(),
      T(),
      fe(),
      Re(),
      ge(),
      We(),
      D(),
      m(),
      S(),
      n(),
      Qe(),
      (Ct = u()),
      (wt = q(_, ({ hostId: e, execution: t }, { get: n }) => {
        if (t.type === `chatgpt`) {
          let { conversationId: e, streamRequestId: r } = t.completion;
          return r != null && n(ke, e) === r && Ze(n(Le, e));
        }
        let r = t.turn;
        if (r?.threadId == null || r.turnId == null) return !1;
        let i = { hostId: e, threadId: r.threadId },
          a = n(se, i)?.at(-1);
        return a != null && n(oe, a) === r.turnId && n(de, a) === `inProgress`;
      })));
  }))();
}
var Et, Dt;
function Ot() {
  return (Ot = e(() => {
    ((Et = `_working_1p6lt_1 loading-shimmer-pure-text`), (Dt = { working: Et }));
  }))();
}
function kt(e) {
  let t = (0, It.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`div`, {
          className: `contents`,
          "data-artifact-annotation-shortcuts": !0,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function At(e) {
  let t = (0, It.c)(67),
    {
      annotationCount: n,
      isSubmitting: r,
      isAnnotating: i,
      embedded: a,
      sendDisabled: o,
      phase: s,
      previewContent: c,
      previewOpen: l,
      previewDisabled: u,
      stopTarget: d,
      completedChangeCount: f,
      onCancel: p,
      onDismissLatestChanges: m,
      onNavigate: h,
      onSeeLatestChanges: g,
      onSend: _,
    } = e,
    v = r !== void 0 && r,
    y = i !== void 0 && i,
    x = a !== void 0 && a,
    S = o !== void 0 && o,
    C = ne(),
    w = A(),
    [T, E] = (0, Lt.useState)(!1),
    D;
  t[0] === d ? (D = t[1]) : ((D = d == null ? void 0 : (0, $.jsx)(xt, { ...d })), (t[0] = d), (t[1] = D));
  let O;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { previous: (0, $.jsx)(te, { className: `rotate-180` }), next: (0, $.jsx)(te, {}) }), (t[2] = O))
    : (O = t[2]);
  let k;
  t[3] !== f || t[4] !== C
    ? ((k =
        f == null
          ? void 0
          : {
              changeCount: (0, $.jsx)(H, {
                id: `artifactAnnotationBatch.completedChangeCount`,
                defaultMessage: `{count, plural, one {# change} other {# changes}}`,
                description: `Number of model changes in the completed artifact annotation batch awaiting review`,
                values: { count: f },
              }),
              undo: (0, $.jsx)(H, {
                id: `artifactAnnotationBatch.undoChanges`,
                defaultMessage: `Undo`,
                description: `Action to undo the completed batch of model changes to an artifact`,
              }),
              acceptAll: (0, $.jsx)(H, {
                id: `artifactAnnotationBatch.acceptAllChanges`,
                defaultMessage: `Accept all`,
                description: `Action to accept all model changes in the completed artifact annotation batch`,
              }),
              dismiss: C.formatMessage({
                id: `artifactAnnotationBatch.dismissCompletedReview`,
                defaultMessage: `Close change review`,
                description: `Accessible label for closing the completed artifact annotation review toolbar`,
              }),
            }),
      (t[3] = f),
      (t[4] = C),
      (t[5] = k))
    : (k = t[5]);
  let j, M;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(ie, { "aria-hidden": !1, legacyIcon: ee, icon16: b, legacyClassName: `size-3.5` })),
      (M = (0, $.jsx)(H, {
        id: `artifactAnnotationBatch.selectContent`,
        defaultMessage: `Select content and ask for changes`,
        description: `Instruction shown in the artifact annotation toolbar before any requests have been saved`,
      })),
      (t[6] = j),
      (t[7] = M))
    : ((j = t[6]), (M = t[7]));
  let N;
  t[8] === n
    ? (N = t[9])
    : ((N = (0, $.jsx)(H, {
        id: `artifactAnnotationBatch.annotationCount`,
        defaultMessage: `{count, plural, one {# annotation} other {# annotations}}`,
        description: `Number of distinct artifact annotations saved in the current unsent batch`,
        values: { count: n },
      })),
      (t[8] = n),
      (t[9] = N));
  let P;
  t[10] === h
    ? (P = t[11])
    : ((P =
        h == null
          ? (0, $.jsx)(H, {
              id: `artifactAnnotationBatch.cancel`,
              defaultMessage: `Cancel`,
              description: `Action to discard the current batch of saved artifact annotations`,
            })
          : (0, $.jsx)(H, {
              id: `artifactReviewBar.cancel`,
              defaultMessage: `Cancel`,
              description: `Cancel the queued artifact requests without sending them to ChatGPT`,
            })),
      (t[10] = h),
      (t[11] = P));
  let F, I;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(H, {
        id: `artifactAnnotationBatch.send`,
        defaultMessage: `Send`,
        description: `Action to submit all saved artifact annotations together in the existing conversation`,
      })),
      (I = (0, $.jsxs)($.Fragment, {
        children: [
          (0, $.jsx)(ie, { "aria-hidden": !1, legacyIcon: st, icon16: re, legacyClassName: `size-3.5` }),
          (0, $.jsx)(H, {
            id: `artifactAnnotationBatch.seeLatestChanges`,
            defaultMessage: `See latest changes`,
            description: `Artifact preview action shown when the file has changed after submitting a batch of annotations`,
          }),
        ],
      })),
      (t[12] = F),
      (t[13] = I))
    : ((F = t[12]), (I = t[13]));
  let L;
  t[14] === C
    ? (L = t[15])
    : ((L = C.formatMessage({
        id: `artifactAnnotationBatch.dismissLatestChanges`,
        defaultMessage: `Dismiss latest changes`,
        description: `Accessible label for dismissing the completed artifact annotation batch action`,
      })),
      (t[14] = C),
      (t[15] = L));
  let R;
  t[16] === C
    ? (R = t[17])
    : ((R = C.formatMessage({
        id: `artifactAnnotationBatch.annotationPreview`,
        defaultMessage: `Annotation preview`,
        description: `Accessible label for the focus-managed preview of pending artifact annotations shown before sending a batch`,
      })),
      (t[16] = C),
      (t[17] = R));
  let z;
  t[18] === C
    ? (z = t[19])
    : ((z = C.formatMessage({
        id: `artifactReviewBar.label`,
        defaultMessage: `Artifact review`,
        description: `Review and send artifact annotations`,
      })),
      (t[18] = C),
      (t[19] = z));
  let B;
  t[20] === C
    ? (B = t[21])
    : ((B = C.formatMessage({
        id: `artifactReviewBar.previous`,
        defaultMessage: `Previous request`,
        description: `Navigate to the previous queued annotation on the artifact`,
      })),
      (t[20] = C),
      (t[21] = B));
  let V;
  t[22] === C
    ? (V = t[23])
    : ((V = C.formatMessage({
        id: `artifactReviewBar.next`,
        defaultMessage: `Next request`,
        description: `Navigate to the next queued annotation on the artifact`,
      })),
      (t[22] = C),
      (t[23] = V));
  let U;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(`span`, {
        className: Dt.working,
        children: (0, $.jsx)(H, {
          id: `artifactAnnotationBatch.working`,
          defaultMessage: `Working`,
          description: `Artifact annotation batch status while Codex is processing the saved annotations`,
        }),
      })),
      (t[24] = U))
    : (U = t[24]);
  let W;
  t[25] !== N || t[26] !== P || t[27] !== L || t[28] !== R || t[29] !== z || t[30] !== B || t[31] !== V
    ? ((W = {
        selectContent: M,
        annotationCount: N,
        cancel: P,
        send: F,
        seeLatestChanges: I,
        dismissLatestChanges: L,
        annotationPreview: R,
        review: z,
        previous: B,
        next: V,
        working: U,
      }),
      (t[25] = N),
      (t[26] = P),
      (t[27] = L),
      (t[28] = R),
      (t[29] = z),
      (t[30] = B),
      (t[31] = V),
      (t[32] = W))
    : (W = t[32]);
  let G;
  t[33] !== n || t[34] !== p
    ? ((G = () => {
        n > 0 ? E(!0) : p();
      }),
      (t[33] = n),
      (t[34] = p),
      (t[35] = G))
    : (G = t[35]);
  let K;
  t[36] === _ ? (K = t[37]) : ((K = () => _()), (t[36] = _), (t[37] = K));
  let q;
  t[38] !== n ||
  t[39] !== x ||
  t[40] !== y ||
  t[41] !== v ||
  t[42] !== m ||
  t[43] !== h ||
  t[44] !== g ||
  t[45] !== s ||
  t[46] !== c ||
  t[47] !== u ||
  t[48] !== l ||
  t[49] !== S ||
  t[50] !== W ||
  t[51] !== G ||
  t[52] !== K ||
  t[53] !== D ||
  t[54] !== k ||
  t[55] !== w
    ? ((q = (0, $.jsx)(ct, {
        annotationCount: n,
        isSubmitting: v,
        isAnnotating: y,
        embedded: x,
        sendDisabled: S,
        phase: s,
        previewContent: c,
        previewOpen: l,
        previewDisabled: u,
        windowZoom: w,
        stopControl: D,
        navigationIcons: O,
        completedReview: k,
        dismissIcon: j,
        labels: W,
        onNavigate: h,
        onCancel: G,
        onSend: K,
        onSeeLatestChanges: g,
        onDismissLatestChanges: m,
      })),
      (t[38] = n),
      (t[39] = x),
      (t[40] = y),
      (t[41] = v),
      (t[42] = m),
      (t[43] = h),
      (t[44] = g),
      (t[45] = s),
      (t[46] = c),
      (t[47] = u),
      (t[48] = l),
      (t[49] = S),
      (t[50] = W),
      (t[51] = G),
      (t[52] = K),
      (t[53] = D),
      (t[54] = k),
      (t[55] = w),
      (t[56] = q))
    : (q = t[56]);
  let J;
  t[57] === Symbol.for(`react.memo_cache_sentinel`) ? ((J = () => E(!1)), (t[57] = J)) : (J = t[57]);
  let Y;
  t[58] !== v || t[59] !== p
    ? ((Y = () => {
        !v && p({ discardChanges: !0 }) !== !1 && E(!1);
      }),
      (t[58] = v),
      (t[59] = p),
      (t[60] = Y))
    : (Y = t[60]);
  let X;
  t[61] !== T || t[62] !== Y
    ? ((X = (0, $.jsx)(vt, { open: T, onKeepAnnotations: J, onDiscard: Y })),
      (t[61] = T),
      (t[62] = Y),
      (t[63] = X))
    : (X = t[63]);
  let ae;
  return (
    t[64] !== q || t[65] !== X
      ? ((ae = (0, $.jsxs)($.Fragment, { children: [q, X] })), (t[64] = q), (t[65] = X), (t[66] = ae))
      : (ae = t[66]),
    ae
  );
}
function jt(e) {
  let t = (0, It.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = (0, $.jsx)(Nt, { ...e, children: Mt })), (t[0] = e), (t[1] = n)),
    n
  );
}
function Mt(e) {
  return (0, $.jsx)(Ft, { ...e });
}
function Nt(e) {
  let n = (0, It.c)(96),
    {
      children: r,
      annotationCount: i,
      isAnnotating: a,
      isAnnotationInteractionActive: o,
      conversationId: s,
      hostId: c,
      onBatchAction: l,
      onAnnotationsSubmitted: u,
      onDismissAnnotations: d,
      onRefresh: f,
      path: p,
      refreshQueryCacheKey: m,
      onNavigate: h,
    } = e,
    g = a !== void 0 && a,
    _ = o !== void 0 && o,
    v = t(ue),
    b = ne(),
    x = y(),
    S;
  n[0] !== s || n[1] !== c || n[2] !== p
    ? ((S = { conversationId: s, hostId: c, path: p }), (n[0] = s), (n[1] = c), (n[2] = p), (n[3] = S))
    : (S = n[3]);
  let C = S,
    w = F(ve, C),
    T = F(me, C),
    E = T?.isSubmitting === !0,
    ee;
  n[4] === s ? (ee = n[5]) : ((ee = (e) => Ae(s, e)), (n[4] = s), (n[5] = ee));
  let D = ee,
    O;
  n[6] === s ? (O = n[7]) : ((O = () => De(s, `direct-comment`)), (n[6] = s), (n[7] = O));
  let k = (0, Lt.useSyncExternalStore)(D, O, Pt),
    A = T == null ? `idle` : `working`,
    { isResponseInProgress: j, hasPendingTurnStart: M, recoveryTurnInterrupted: N } = F(pt, C),
    te;
  n[8] !== c || n[9] !== p
    ? ((te = He({ hostId: c, path: p })), (n[8] = c), (n[9] = p), (n[10] = te))
    : (te = n[10]);
  let P = F(Oe, te),
    I;
  n[11] !== C || n[12] !== v
    ? ((I = () => v.get(me, C)?.sessionId), (n[11] = C), (n[12] = v), (n[13] = I))
    : (I = n[13]);
  let L;
  n[14] !== c || n[15] !== f || n[16] !== p || n[17] !== x || n[18] !== m
    ? ((L = async () => {
        if (f != null) return f();
        await Ce({ cacheKey: m, openFiles: [{ hostId: c, path: p }], queryClient: x, throwOnError: !0 });
      }),
      (n[14] = c),
      (n[15] = f),
      (n[16] = p),
      (n[17] = x),
      (n[18] = m),
      (n[19] = L))
    : (L = n[19]);
  let R;
  n[20] !== c || n[21] !== p || n[22] !== v
    ? ((R = () => {
        Ie(v, { hostId: c, path: p });
      }),
      (n[20] = c),
      (n[21] = p),
      (n[22] = v),
      (n[23] = R))
    : (R = n[23]);
  let z;
  n[24] !== C || n[25] !== v
    ? ((z = (e, t, n) => {
        Te(v, C, n, e !== !1);
      }),
      (n[24] = C),
      (n[25] = v),
      (n[26] = z))
    : (z = n[26]);
  let re;
  n[27] !== z || n[28] !== I || n[29] !== L || n[30] !== R
    ? ((re = { onMutate: I, mutationFn: L, onError: R, onSuccess: z }),
      (n[27] = z),
      (n[28] = I),
      (n[29] = L),
      (n[30] = R),
      (n[31] = re))
    : (re = n[31]);
  let B = J(re),
    V;
  n[32] !== C ||
  n[33] !== w.length ||
  n[34] !== M ||
  n[35] !== P ||
  n[36] !== j ||
  n[37] !== E ||
  n[38] !== A ||
  n[39] !== N ||
  n[40] !== v ||
  n[41] !== T?.execution?.type
    ? ((V = () => {
        let e = w.length > 0 && N;
        A !== `working` ||
          (T?.execution?.type === `chatgpt` && !e) ||
          E ||
          (!e && (w.length !== 0 || P)) ||
          j !== !1 ||
          M ||
          Ke(v, C);
      }),
      (n[32] = C),
      (n[33] = w.length),
      (n[34] = M),
      (n[35] = P),
      (n[36] = j),
      (n[37] = E),
      (n[38] = A),
      (n[39] = N),
      (n[40] = v),
      (n[41] = T?.execution?.type),
      (n[42] = V))
    : (V = n[42]);
  let H = T?.execution?.type,
    U;
  (n[43] !== C ||
  n[44] !== w.length ||
  n[45] !== M ||
  n[46] !== P ||
  n[47] !== j ||
  n[48] !== E ||
  n[49] !== A ||
  n[50] !== N ||
  n[51] !== v ||
  n[52] !== H
    ? ((U = [w.length, C, P, j, E, M, A, N, H, v]),
      (n[43] = C),
      (n[44] = w.length),
      (n[45] = M),
      (n[46] = P),
      (n[47] = j),
      (n[48] = E),
      (n[49] = A),
      (n[50] = N),
      (n[51] = v),
      (n[52] = H),
      (n[53] = U))
    : (U = n[53]),
    (0, Lt.useEffect)(V, U));
  let W = A;
  A === `working` &&
    !E &&
    !M &&
    (P && (j === !1 || (T?.execution?.type === `chatgpt` && j == null))
      ? (W = `latest`)
      : T?.execution?.type === `chatgpt` && j !== !0 && (W = `idle`));
  let G = k === !1,
    K;
  if (
    n[54] !== i ||
    n[55] !== C ||
    n[56] !== r ||
    n[57] !== w ||
    n[58] !== c ||
    n[59] !== b ||
    n[60] !== g ||
    n[61] !== _ ||
    n[62] !== E ||
    n[63] !== u ||
    n[64] !== l ||
    n[65] !== d ||
    n[66] !== h ||
    n[67] !== p ||
    n[68] !== B ||
    n[69] !== v ||
    n[70] !== T ||
    n[71] !== G ||
    n[72] !== W
  ) {
    let e;
    n[74] !== w || n[75] !== c
      ? ((e =
          w.length > 0
            ? (0, $.jsx)(ze, { commentAttachments: w, cwd: null, hostId: c, showArtifactName: !1 })
            : void 0),
        (n[74] = w),
        (n[75] = c),
        (n[76] = e))
      : (e = n[76]);
    let t;
    n[77] !== w.length || n[78] !== l || n[79] !== d || n[80] !== p || n[81] !== v
      ? ((t = (e) => {
          if (d(e) === !1) return !1;
          l?.(`cancel`);
          let t = _e(p);
          t != null &&
            w.length > 0 &&
            qe(v, { ...t, threadId: ce(v.value) }, { annotationCount: w.length, outcome: `canceled` });
        }),
        (n[77] = w.length),
        (n[78] = l),
        (n[79] = d),
        (n[80] = p),
        (n[81] = v),
        (n[82] = t))
      : (t = n[82]);
    let a;
    n[83] !== C || n[84] !== c || n[85] !== p || n[86] !== v
      ? ((a = () => {
          (Xe(v, { hostId: c, path: p }), Ke(v, C));
        }),
        (n[83] = C),
        (n[84] = c),
        (n[85] = p),
        (n[86] = v),
        (n[87] = a))
      : (a = n[87]);
    let o;
    n[88] === B ? (o = n[89]) : ((o = () => B.mutate()), (n[88] = B), (n[89] = o));
    let s;
    (n[90] !== C || n[91] !== b || n[92] !== u || n[93] !== l || n[94] !== v
      ? ((s = (e) => gt(v, b, C, l, e ?? u)),
        (n[90] = C),
        (n[91] = b),
        (n[92] = u),
        (n[93] = l),
        (n[94] = v),
        (n[95] = s))
      : (s = n[95]),
      (K = r({
        annotationCount: i,
        isAnnotationInteractionActive: _,
        isAnnotating: g,
        isSubmitting: E,
        sendDisabled: G,
        stopTarget: T?.execution == null ? void 0 : { execution: T.execution, hostId: c },
        onNavigate: h,
        phase: W,
        previewContent: e,
        onCancel: t,
        onDismissLatestChanges: a,
        onSeeLatestChanges: o,
        onSend: s,
      })),
      (n[54] = i),
      (n[55] = C),
      (n[56] = r),
      (n[57] = w),
      (n[58] = c),
      (n[59] = b),
      (n[60] = g),
      (n[61] = _),
      (n[62] = E),
      (n[63] = u),
      (n[64] = l),
      (n[65] = d),
      (n[66] = h),
      (n[67] = p),
      (n[68] = B),
      (n[69] = v),
      (n[70] = T),
      (n[71] = G),
      (n[72] = W),
      (n[73] = K));
  } else K = n[73];
  return K;
}
function Pt() {}
function Ft(e) {
  let t = (0, It.c)(24),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ isAnnotationInteractionActive: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = r !== void 0 && r,
    a = ne(),
    [o, s] = (0, Lt.useState)(null),
    { annotationCount: c, isAnnotating: l, isSubmitting: u, onNavigate: d, phase: f } = n,
    [p, m] = (0, Lt.useState)(null),
    h = c > 0 && f === `idle` && !u && !n.sendDisabled,
    g;
  t[3] === n
    ? (g = t[4])
    : ((g = (e) => {
        e.defaultPrevented || e.isComposing || (e.preventDefault(), e.stopPropagation(), n.onSend());
      }),
      (t[3] = n),
      (t[4] = g));
  let _;
  (t[5] !== p || t[6] !== h || t[7] !== g
    ? ((_ = {
        commandId: `artifact.sendAnnotations`,
        keyboardEventTarget: p,
        enabled: h,
        ignoreWithin: `form, [data-popcorn-annotation-editor-placement], input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox'], [role='combobox'], [role='menu']`,
        onKeyDown: g,
      }),
      (t[5] = p),
      (t[6] = h),
      (t[7] = g),
      (t[8] = _))
    : (_ = t[8]),
    it(_));
  let v = d != null && f === `idle` && !u && (l || c > 0),
    y;
  t[9] !== v || t[10] !== n
    ? ((y = (e) => {
        let t = e !== void 0 && e;
        return (0, $.jsx)(At, { ...n, embedded: v, previewDisabled: t });
      }),
      (t[9] = v),
      (t[10] = n),
      (t[11] = y))
    : (y = t[11]);
  let b = y,
    x;
  t[12] !== c ||
  t[13] !== b ||
  t[14] !== a ||
  t[15] !== l ||
  t[16] !== i ||
  t[17] !== v ||
  t[18] !== d ||
  t[19] !== o
    ? ((x =
        d == null
          ? b()
          : (0, $.jsx)(O, {
              draggable: v,
              variant: `annotation`,
              enterFromBottom: l && c === 0,
              attention: l && c === 0 && !i,
              label: a.formatMessage({
                id: `artifactReviewBar.label`,
                defaultMessage: `Artifact review`,
                description: `Review and send artifact annotations`,
              }),
              dragHandleLabel: a.formatMessage({
                id: `artifactReviewBar.moveToolbar`,
                defaultMessage: `Move toolbar`,
                description: `Accessible label for the drag handle of the artifact annotation toolbar`,
              }),
              dragHandleDescription: a.formatMessage({
                id: `artifactReviewBar.moveToolbarDescription`,
                defaultMessage: `Drag or use arrow keys to move. Press Home to reset.`,
                description: `Keyboard and pointer instructions for moving the artifact annotation toolbar`,
              }),
              position: o,
              onPositionChange: s,
              children: b,
            })),
      (t[12] = c),
      (t[13] = b),
      (t[14] = a),
      (t[15] = l),
      (t[16] = i),
      (t[17] = v),
      (t[18] = d),
      (t[19] = o),
      (t[20] = x))
    : (x = t[20]);
  let S = x,
    C;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (e) => {
        m(e?.closest(`[data-artifact-annotation-shortcuts]`) ?? null);
      }),
      (t[21] = C))
    : (C = t[21]);
  let w;
  return (
    t[22] === S
      ? (w = t[23])
      : ((w = (0, $.jsx)(`div`, { ref: C, className: `contents`, children: S })), (t[22] = S), (t[23] = w)),
    w
  );
}
var It, Lt, $;
function Rt() {
  return (Rt = e(() => {
    ((It = h()),
      ft(),
      G(),
      f(),
      k(),
      (Lt = i()),
      T(),
      W(),
      Ve(),
      ht(),
      Be(),
      le(),
      Ue(),
      at(),
      x(),
      K(),
      ot(),
      w(),
      Ge(),
      Je(),
      Qe(),
      g(),
      _t(),
      bt(),
      Tt(),
      Ot(),
      ($ = u()));
  }))();
}
export { Ft as a, gt as c, kt as i, mt as l, jt as n, Rt as o, Nt as r, _t as s, At as t, ht as u };
//# sourceMappingURL=artifact-annotation-batch-controls-a9289185dbeb.js.map
