import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Cz as r,
  Ez as i,
  FOt as a,
  FV as o,
  IDt as s,
  IOt as c,
  Iot as l,
  Ixt as u,
  Jbt as d,
  LOt as f,
  Lot as p,
  Mz as m,
  Nz as h,
  POt as g,
  Pxt as _,
  ROt as v,
  SJ as y,
  TJ as b,
  TS as x,
  Tz as S,
  VDt as ee,
  _O as C,
  bO as w,
  cO as T,
  dB as E,
  fO as D,
  gO as O,
  gPt as k,
  hPt as te,
  hot as A,
  jDt as j,
  kz as M,
  lO as N,
  lot as P,
  mO as F,
  nSt as I,
  nst as ne,
  oO as L,
  rst as R,
  sO as z,
  t3 as B,
  tst as V,
  vO as H,
  vb as U,
  vzt as W,
  wS as G,
  wot as K,
  xMt as q,
  yO as re,
  yb as J,
  yzt as ie,
  zxt as Y,
} from "./app-shared-bbfeca5e5737.js";
import {
  $dr as X,
  Cwr as ae,
  D8n as oe,
  FCt as se,
  F_ as ce,
  ICt as le,
  JZn as ue,
  Kh as de,
  MSr as fe,
  M_ as pe,
  Mwt as me,
  NSr as he,
  OZn as ge,
  Ovr as _e,
  RQn as ve,
  SWn as ye,
  UZn as be,
  VZn as xe,
  Yh as Se,
  afr as Ce,
  ca as we,
  fJt as Te,
  ffr as Ee,
  fvr as De,
  gwr as Oe,
  hfr as ke,
  jvr as Ae,
  jwt as je,
  la as Me,
  lfr as Ne,
  mJt as Pe,
  mZn as Fe,
  mfr as Ie,
  nfr as Le,
  ofr as Re,
  pfr as ze,
  qh as Be,
  rfr as Ve,
  sfr as He,
  tfr as Ue,
  ufr as We,
  v8n as Ge,
  wvr as Ke,
  xWn as qe,
  yjn as Je,
  ywr as Ye,
  zQn as Xe,
} from "./app-initial-5851df3f6cb1.js";
import { R as Ze, _ as Qe, f as $e } from "./PopcornIcons-16e50c25ad67.js";
import { n as et, t as tt } from "./artifact-request-progress-b18754c299fc.js";
import { n as nt, t as rt } from "./use-command-hotkey-19878d4b0f49.js";
import { n as it, t as at } from "./arrow-rotate-ccw-1e98531dace1.js";
function ot({
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
                  (0, Z.jsx)(st, {
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
                            (0, Z.jsx)($e, {
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
                            (0, Z.jsx)($e, {
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
                  p ?? (0, Z.jsx)(Qe, { "aria-hidden": !0, className: `popcorn-annotation-batch-cross` }),
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
                  p ?? (0, Z.jsx)(Qe, { "aria-hidden": !0, className: `popcorn-annotation-batch-cross` }),
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
              (0, Z.jsx)(st, {
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
function st({
  side: e,
  countLabel: t,
  previewLabel: n,
  previewContent: r,
  previewOpen: i,
  previewDisabled: o,
  windowZoom: s,
  portalContainerElement: l,
}) {
  let [u, d] = (0, ct.useState)(`closed`);
  o && u !== `dragged` && d(`dragged`);
  let p = (0, ct.useRef)(null),
    m = (0, ct.useRef)(null),
    h = (0, ct.useRef)(!1);
  (0, ct.useEffect)(
    () => () => {
      m.current != null && window.clearTimeout(m.current);
    },
    [],
  );
  let _ = () => {
      m.current != null && (window.clearTimeout(m.current), (m.current = null));
    },
    v = () => {
      (_(), !o && r != null && d(`open`));
    },
    y = () => {
      (_(),
        (m.current = window.setTimeout(() => {
          ((m.current = null),
            p.current?.contains(document.activeElement) || d((e) => (e === `dragged` ? e : `closed`)));
        }, lt)));
    },
    b = !o && r != null && (i ?? u === `open`);
  return (0, Z.jsxs)(c, {
    open: b,
    onOpenChange: (e) => {
      o || d(e ? `open` : `closed`);
    },
    children: [
      (0, Z.jsx)(f, {
        asChild: !0,
        children: (0, Z.jsx)(`button`, {
          type: `button`,
          className: `popcorn-annotation-batch-count`,
          onFocus: (e) => {
            if (h.current) {
              h.current = !1;
              return;
            }
            e.currentTarget.matches(`:focus-visible`) && v();
          },
          onKeyDown: (e) => {
            e.key === `Tab` && !e.shiftKey && b && (e.preventDefault(), p.current?.focus());
          },
          onMouseEnter: u === `dragged` ? void 0 : v,
          onMouseLeave: y,
          onPointerMove: v,
          children: t,
        }),
      }),
      (0, Z.jsx)(a, {
        container: l ?? void 0,
        children: (0, Z.jsx)(g, {
          ref: p,
          className: `popcorn-annotation-batch`,
          "data-variant": `preview`,
          "aria-label": n,
          align: `center`,
          side: e,
          sideOffset: e === `top` ? 16 : 4,
          collisionPadding: 6,
          tabIndex: 0,
          style: { zoom: l == null && s !== 1 ? s : void 0 },
          onCloseAutoFocus: (e) => {
            (o || (!h.current && document.activeElement !== document.body)) && e.preventDefault();
          },
          onEscapeKeyDown: () => {
            h.current = !0;
          },
          onMouseEnter: v,
          onMouseLeave: y,
          onOpenAutoFocus: (e) => {
            e.preventDefault();
          },
          children: r,
        }),
      }),
    ],
  });
}
var ct, Z, lt;
function ut() {
  return (ut = e(() => {
    (v(), (ct = ie()), Ze(), (Z = q()), (lt = 100));
  }))();
}
var dt, ft;
function pt() {
  return (pt = e(() => {
    (_(),
      R(),
      Ge(),
      fe(),
      ve(),
      Je(),
      ce(),
      K(),
      Ce(),
      et(),
      (dt = I(
        n,
        (e, { get: t }) => {
          let n = t(Ue, e),
            r = n?.execution;
          if (r?.type === `chatgpt`) {
            let { conversationId: i, streamRequestId: a } = r.completion,
              o = t(ge, i);
            if (
              n?.annotationId != null &&
              Xe(t(Fe, i)) &&
              (o?.streamRequestId !== a || o?.status === `completed`)
            ) {
              let r = t(tt, {
                hostId: e.hostId,
                threadId: d(i),
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
            let s = t(be, i),
              c = t(xe, i);
            return {
              isResponseInProgress: a != null && s === a && ue(c) ? !0 : null,
              hasPendingTurnStart: !1,
              recoveryTurnInterrupted: !1,
            };
          }
          if (r == null)
            return { isResponseInProgress: !1, hasPendingTurnStart: !1, recoveryTurnInterrupted: !1 };
          let i = r.turn ?? r.queuedBehindTurn,
            a = i?.threadId ?? d(e.conversationId);
          return {
            isResponseInProgress: t(oe, a),
            hasPendingTurnStart: t(pe, a) != null,
            recoveryTurnInterrupted: i?.turnId != null && t(he, a).has(i.turnId),
          };
        },
        {
          isEqual: (e, t) =>
            e.isResponseInProgress === t.isResponseInProgress &&
            e.hasPendingTurnStart === t.hasPendingTurnStart &&
            e.recoveryTurnInterrupted === t.recoveryTurnInterrupted,
        },
      )),
      (ft = I(n, (e, { get: t }) => {
        let n = t(Ue, e);
        if (n == null) return !1;
        let r = t(dt, e);
        return n.isSubmitting || r.hasPendingTurnStart || r.isResponseInProgress === !0;
      })));
  }))();
}
function mt(e, t, n, r, i) {
  r?.(`send`);
  let a = e.get(X, n),
    o = a[0];
  if (o == null || de(n.conversationId, `direct-comment`) === !1 || e.get(Ue, n)?.isSubmitting) return;
  let s = { ...n, sessionId: globalThis.crypto.randomUUID() };
  Le(e, s, i);
  try {
    k.dispatchHostMessage({
      type: `artifact-direct-comment`,
      artifactBatch: { hostId: n.hostId, path: n.path },
      body: ``,
      comment: o,
      comments: a,
      conversationId: n.conversationId,
      sessionId: s.sessionId,
    });
  } catch {
    (He(e, s),
      e
        .get(A)
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
function ht() {
  return (ht = e(() => {
    (Be(), P(), te(), Ce());
  }))();
}
function gt(e) {
  let n = (0, _t.c)(19),
    { open: r, onDiscard: i, onKeepAnnotations: a } = e,
    o;
  n[0] === a
    ? (o = n[1])
    : ((o = (e) => {
        e || a();
      }),
      (n[0] = a),
      (n[1] = o));
  let c;
  n[2] === i
    ? (c = n[3])
    : ((c = (e) => {
        (e.preventDefault(), i());
      }),
      (n[2] = i),
      (n[3] = c));
  let l;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(C, {
        children: (0, Q.jsx)(s, {
          id: `artifactAnnotations.exit.title`,
          defaultMessage: `Discard annotations?`,
          description: `Confirmation title before discarding pending artifact annotations`,
        }),
      })),
      (n[4] = l))
    : (l = n[4]);
  let u;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(N, {
        children: (0, Q.jsx)(T, {
          title: l,
          subtitle: (0, Q.jsx)(O, {
            children: (0, Q.jsx)(s, {
              id: `artifactAnnotations.exit.description`,
              defaultMessage: `You have annotations that haven't been sent.`,
              description: `Explanation that the annotations being discarded have not been sent`,
            }),
          }),
        }),
      })),
      (n[5] = u))
    : (u = n[5]);
  let d;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(s, {
        id: `artifactAnnotations.exit.stay`,
        defaultMessage: `Keep annotations`,
        description: `Keep pending annotations and return to annotation mode`,
      })),
      (n[6] = d))
    : (d = n[6]);
  let f;
  n[7] === a
    ? (f = n[8])
    : ((f = (0, Q.jsx)(t, { autoFocus: !0, color: `secondary`, type: `button`, onClick: a, children: d })),
      (n[7] = a),
      (n[8] = f));
  let p;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(t, {
        color: `danger`,
        type: `submit`,
        children: (0, Q.jsx)(s, {
          id: `artifactAnnotations.exit.leave`,
          defaultMessage: `Discard`,
          description: `Discard pending annotations and leave annotation mode`,
        }),
      })),
      (n[9] = p))
    : (p = n[9]);
  let m;
  n[10] === f
    ? (m = n[11])
    : ((m = (0, Q.jsx)(N, { children: (0, Q.jsxs)(z, { children: [f, p] }) })), (n[10] = f), (n[11] = m));
  let h;
  n[12] !== c || n[13] !== m
    ? ((h = (0, Q.jsxs)(L, { as: `form`, onSubmit: c, children: [u, m] })),
      (n[12] = c),
      (n[13] = m),
      (n[14] = h))
    : (h = n[14]);
  let g;
  return (
    n[15] !== r || n[16] !== o || n[17] !== h
      ? ((g = (0, Q.jsx)(F, { open: r, showDialogClose: !1, size: `compact`, onOpenChange: o, children: h })),
        (n[15] = r),
        (n[16] = o),
        (n[17] = h),
        (n[18] = g))
      : (g = n[18]),
    g
  );
}
var _t, Q;
function vt() {
  return (vt = e(() => {
    ((_t = W()), j(), B(), H(), D(), (Q = q()));
  }))();
}
function yt(e) {
  let n = (0, bt.c)(19),
    r = u(Oe),
    i = ee(),
    a = Y(St, e),
    o;
  n[0] !== i || n[1] !== r || n[2] !== e
    ? ((o = async () => {
        if (!r.get(St, e)) return;
        let { hostId: t, execution: n } = e;
        if (n.type === `chatgpt`) {
          let { conversationId: e, streamRequestId: t } = n.completion;
          if (t == null) return;
          await Pe(
            r,
            e,
            i.formatMessage({
              id: `artifactReviewBar.stopFailed`,
              defaultMessage: `Could not stop this turn`,
              description: `Error shown when stopping the conversation turn for an artifact review fails`,
            }),
            { expectedStreamRequestId: t },
          );
          return;
        }
        let a = n.turn;
        a?.threadId != null &&
          a.turnId != null &&
          (await le(r, {
            conversationId: a.threadId,
            hostId: t,
            initiatedBy: `user`,
            expectedTurnId: a.turnId ?? void 0,
          }));
      }),
      (n[0] = i),
      (n[1] = r),
      (n[2] = e),
      (n[3] = o))
    : (o = n[3]);
  let s;
  n[4] !== i || n[5] !== r
    ? ((s = () => {
        r.get(A).danger(
          i.formatMessage({
            id: `artifactReviewBar.stopFailed`,
            defaultMessage: `Could not stop this turn`,
            description: `Error shown when stopping the conversation turn for an artifact review fails`,
          }),
          { errorAnalytics: { toastId: `artifactReviewBar.stopFailed` } },
        );
      }),
      (n[4] = i),
      (n[5] = r),
      (n[6] = s))
    : (s = n[6]);
  let c;
  n[7] !== o || n[8] !== s
    ? ((c = { mutationFn: o, onError: s }), (n[7] = o), (n[8] = s), (n[9] = c))
    : (c = n[9]);
  let { mutate: l, isPending: d } = p(c);
  if (!a) return null;
  let f;
  n[10] === i
    ? (f = n[11])
    : ((f = i.formatMessage({
        id: `artifactReviewBar.stop`,
        defaultMessage: `Stop`,
        description: `Stop the conversation turn processing these artifact annotations`,
      })),
      (n[10] = i),
      (n[11] = f));
  let h;
  n[12] === l ? (h = n[13]) : ((h = () => l()), (n[12] = l), (n[13] = h));
  let g;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, xt.jsx)(m, { className: `shrink-0`, asset: J })), (n[14] = g))
    : (g = n[14]);
  let _;
  return (
    n[15] !== d || n[16] !== f || n[17] !== h
      ? ((_ = (0, xt.jsx)(t, {
          "aria-label": f,
          color: `tinted`,
          size: `composerSm`,
          disabled: d,
          onClick: h,
          children: g,
        })),
        (n[15] = d),
        (n[16] = f),
        (n[17] = h),
        (n[18] = _))
      : (_ = n[18]),
    _
  );
}
var bt, xt, St;
function Ct() {
  return (Ct = e(() => {
    ((bt = W()),
      U(),
      l(),
      _(),
      j(),
      se(),
      De(),
      Je(),
      Te(),
      B(),
      h(),
      P(),
      K(),
      ae(),
      (xt = q()),
      (St = I(n, ({ hostId: e, execution: t }, { get: n }) => {
        if (t.type === `chatgpt`) {
          let { conversationId: e, streamRequestId: r } = t.completion;
          return r != null && n(be, e) === r && ue(n(xe, e));
        }
        let r = t.turn;
        if (r?.threadId == null || r.turnId == null) return !1;
        let i = { hostId: e, threadId: r.threadId },
          a = n(Ke, i)?.at(-1);
        return a != null && n(_e, a) === r.turnId && n(Ae, a) === `inProgress`;
      })));
  }))();
}
var wt, Tt;
function Et() {
  return (Et = e(() => {
    ((wt = `_working_1p6lt_1 loading-shimmer-pure-text`), (Tt = { working: wt }));
  }))();
}
function Dt(e) {
  let t = (0, Pt.c)(2),
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
function Ot(e) {
  let t = (0, Pt.c)(67),
    {
      annotationCount: n,
      isSubmitting: r,
      isAnnotating: a,
      embedded: c,
      sendDisabled: l,
      phase: u,
      previewContent: d,
      previewOpen: f,
      previewDisabled: p,
      stopTarget: m,
      completedChangeCount: h,
      onCancel: g,
      onDismissLatestChanges: _,
      onNavigate: v,
      onSeeLatestChanges: b,
      onSend: x,
    } = e,
    C = r !== void 0 && r,
    w = a !== void 0 && a,
    T = c !== void 0 && c,
    D = l !== void 0 && l,
    O = ee(),
    k = S(),
    [te, A] = (0, Ft.useState)(!1),
    j;
  t[0] === m ? (j = t[1]) : ((j = m == null ? void 0 : (0, $.jsx)(yt, { ...m })), (t[0] = m), (t[1] = j));
  let M;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { previous: (0, $.jsx)(o, { className: `rotate-180` }), next: (0, $.jsx)(o, {}) }), (t[2] = M))
    : (M = t[2]);
  let N;
  t[3] !== h || t[4] !== O
    ? ((N =
        h == null
          ? void 0
          : {
              changeCount: (0, $.jsx)(s, {
                id: `artifactAnnotationBatch.completedChangeCount`,
                defaultMessage: `{count, plural, one {# change} other {# changes}}`,
                description: `Number of model changes in the completed artifact annotation batch awaiting review`,
                values: { count: h },
              }),
              undo: (0, $.jsx)(s, {
                id: `artifactAnnotationBatch.undoChanges`,
                defaultMessage: `Undo`,
                description: `Action to undo the completed batch of model changes to an artifact`,
              }),
              acceptAll: (0, $.jsx)(s, {
                id: `artifactAnnotationBatch.acceptAllChanges`,
                defaultMessage: `Accept all`,
                description: `Action to accept all model changes in the completed artifact annotation batch`,
              }),
              dismiss: O.formatMessage({
                id: `artifactAnnotationBatch.dismissCompletedReview`,
                defaultMessage: `Close change review`,
                description: `Accessible label for closing the completed artifact annotation review toolbar`,
              }),
            }),
      (t[3] = h),
      (t[4] = O),
      (t[5] = N))
    : (N = t[5]);
  let P, F;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(i, { "aria-hidden": !1, legacyIcon: re, icon16: y, legacyClassName: `size-3.5` })),
      (F = (0, $.jsx)(s, {
        id: `artifactAnnotationBatch.selectContent`,
        defaultMessage: `Select content and ask for changes`,
        description: `Instruction shown in the artifact annotation toolbar before any requests have been saved`,
      })),
      (t[6] = P),
      (t[7] = F))
    : ((P = t[6]), (F = t[7]));
  let I;
  t[8] === n
    ? (I = t[9])
    : ((I = (0, $.jsx)(s, {
        id: `artifactAnnotationBatch.annotationCount`,
        defaultMessage: `{count, plural, one {# annotation} other {# annotations}}`,
        description: `Number of distinct artifact annotations saved in the current unsent batch`,
        values: { count: n },
      })),
      (t[8] = n),
      (t[9] = I));
  let ne;
  t[10] === v
    ? (ne = t[11])
    : ((ne =
        v == null
          ? (0, $.jsx)(s, {
              id: `artifactAnnotationBatch.cancel`,
              defaultMessage: `Cancel`,
              description: `Action to discard the current batch of saved artifact annotations`,
            })
          : (0, $.jsx)(s, {
              id: `artifactReviewBar.cancel`,
              defaultMessage: `Cancel`,
              description: `Cancel the queued artifact requests without sending them to ChatGPT`,
            })),
      (t[10] = v),
      (t[11] = ne));
  let L, R;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(s, {
        id: `artifactAnnotationBatch.send`,
        defaultMessage: `Send`,
        description: `Action to submit all saved artifact annotations together in the existing conversation`,
      })),
      (R = (0, $.jsxs)($.Fragment, {
        children: [
          (0, $.jsx)(i, { "aria-hidden": !1, legacyIcon: at, icon16: E, legacyClassName: `size-3.5` }),
          (0, $.jsx)(s, {
            id: `artifactAnnotationBatch.seeLatestChanges`,
            defaultMessage: `See latest changes`,
            description: `Artifact preview action shown when the file has changed after submitting a batch of annotations`,
          }),
        ],
      })),
      (t[12] = L),
      (t[13] = R))
    : ((L = t[12]), (R = t[13]));
  let z;
  t[14] === O
    ? (z = t[15])
    : ((z = O.formatMessage({
        id: `artifactAnnotationBatch.dismissLatestChanges`,
        defaultMessage: `Dismiss latest changes`,
        description: `Accessible label for dismissing the completed artifact annotation batch action`,
      })),
      (t[14] = O),
      (t[15] = z));
  let B;
  t[16] === O
    ? (B = t[17])
    : ((B = O.formatMessage({
        id: `artifactAnnotationBatch.annotationPreview`,
        defaultMessage: `Annotation preview`,
        description: `Accessible label for the focus-managed preview of pending artifact annotations shown before sending a batch`,
      })),
      (t[16] = O),
      (t[17] = B));
  let V;
  t[18] === O
    ? (V = t[19])
    : ((V = O.formatMessage({
        id: `artifactReviewBar.label`,
        defaultMessage: `Artifact review`,
        description: `Review and send artifact annotations`,
      })),
      (t[18] = O),
      (t[19] = V));
  let H;
  t[20] === O
    ? (H = t[21])
    : ((H = O.formatMessage({
        id: `artifactReviewBar.previous`,
        defaultMessage: `Previous request`,
        description: `Navigate to the previous queued annotation on the artifact`,
      })),
      (t[20] = O),
      (t[21] = H));
  let U;
  t[22] === O
    ? (U = t[23])
    : ((U = O.formatMessage({
        id: `artifactReviewBar.next`,
        defaultMessage: `Next request`,
        description: `Navigate to the next queued annotation on the artifact`,
      })),
      (t[22] = O),
      (t[23] = U));
  let W;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(`span`, {
        className: Tt.working,
        children: (0, $.jsx)(s, {
          id: `artifactAnnotationBatch.working`,
          defaultMessage: `Working`,
          description: `Artifact annotation batch status while Codex is processing the saved annotations`,
        }),
      })),
      (t[24] = W))
    : (W = t[24]);
  let G;
  t[25] !== I || t[26] !== ne || t[27] !== z || t[28] !== B || t[29] !== V || t[30] !== H || t[31] !== U
    ? ((G = {
        selectContent: F,
        annotationCount: I,
        cancel: ne,
        send: L,
        seeLatestChanges: R,
        dismissLatestChanges: z,
        annotationPreview: B,
        review: V,
        previous: H,
        next: U,
        working: W,
      }),
      (t[25] = I),
      (t[26] = ne),
      (t[27] = z),
      (t[28] = B),
      (t[29] = V),
      (t[30] = H),
      (t[31] = U),
      (t[32] = G))
    : (G = t[32]);
  let K;
  t[33] !== n || t[34] !== g
    ? ((K = () => {
        n > 0 ? A(!0) : g();
      }),
      (t[33] = n),
      (t[34] = g),
      (t[35] = K))
    : (K = t[35]);
  let q;
  t[36] === x ? (q = t[37]) : ((q = () => x()), (t[36] = x), (t[37] = q));
  let J;
  t[38] !== n ||
  t[39] !== T ||
  t[40] !== w ||
  t[41] !== C ||
  t[42] !== _ ||
  t[43] !== v ||
  t[44] !== b ||
  t[45] !== u ||
  t[46] !== d ||
  t[47] !== p ||
  t[48] !== f ||
  t[49] !== D ||
  t[50] !== G ||
  t[51] !== K ||
  t[52] !== q ||
  t[53] !== j ||
  t[54] !== N ||
  t[55] !== k
    ? ((J = (0, $.jsx)(ot, {
        annotationCount: n,
        isSubmitting: C,
        isAnnotating: w,
        embedded: T,
        sendDisabled: D,
        phase: u,
        previewContent: d,
        previewOpen: f,
        previewDisabled: p,
        windowZoom: k,
        stopControl: j,
        navigationIcons: M,
        completedReview: N,
        dismissIcon: P,
        labels: G,
        onNavigate: v,
        onCancel: K,
        onSend: q,
        onSeeLatestChanges: b,
        onDismissLatestChanges: _,
      })),
      (t[38] = n),
      (t[39] = T),
      (t[40] = w),
      (t[41] = C),
      (t[42] = _),
      (t[43] = v),
      (t[44] = b),
      (t[45] = u),
      (t[46] = d),
      (t[47] = p),
      (t[48] = f),
      (t[49] = D),
      (t[50] = G),
      (t[51] = K),
      (t[52] = q),
      (t[53] = j),
      (t[54] = N),
      (t[55] = k),
      (t[56] = J))
    : (J = t[56]);
  let ie;
  t[57] === Symbol.for(`react.memo_cache_sentinel`) ? ((ie = () => A(!1)), (t[57] = ie)) : (ie = t[57]);
  let Y;
  t[58] !== C || t[59] !== g
    ? ((Y = () => {
        !C && g({ discardChanges: !0 }) !== !1 && A(!1);
      }),
      (t[58] = C),
      (t[59] = g),
      (t[60] = Y))
    : (Y = t[60]);
  let X;
  t[61] !== te || t[62] !== Y
    ? ((X = (0, $.jsx)(gt, { open: te, onKeepAnnotations: ie, onDiscard: Y })),
      (t[61] = te),
      (t[62] = Y),
      (t[63] = X))
    : (X = t[63]);
  let ae;
  return (
    t[64] !== J || t[65] !== X
      ? ((ae = (0, $.jsxs)($.Fragment, { children: [J, X] })), (t[64] = J), (t[65] = X), (t[66] = ae))
      : (ae = t[66]),
    ae
  );
}
function kt(e) {
  let t = (0, Pt.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = (0, $.jsx)(jt, { ...e, children: At })), (t[0] = e), (t[1] = n)),
    n
  );
}
function At(e) {
  return (0, $.jsx)(Nt, { ...e });
}
function jt(e) {
  let t = (0, Pt.c)(96),
    {
      children: n,
      annotationCount: r,
      isAnnotating: i,
      isAnnotationInteractionActive: a,
      conversationId: o,
      hostId: s,
      onBatchAction: c,
      onAnnotationsSubmitted: l,
      onDismissAnnotations: d,
      onRefresh: f,
      path: m,
      refreshQueryCacheKey: h,
      onNavigate: g,
    } = e,
    _ = i !== void 0 && i,
    v = a !== void 0 && a,
    y = u(Oe),
    b = ee(),
    x = ne(),
    S;
  t[0] !== o || t[1] !== s || t[2] !== m
    ? ((S = { conversationId: o, hostId: s, path: m }), (t[0] = o), (t[1] = s), (t[2] = m), (t[3] = S))
    : (S = t[3]);
  let C = S,
    w = Y(X, C),
    T = Y(Ue, C),
    E = T?.isSubmitting === !0,
    D;
  t[4] === o ? (D = t[5]) : ((D = (e) => Se(o, e)), (t[4] = o), (t[5] = D));
  let O = D,
    k;
  t[6] === o ? (k = t[7]) : ((k = () => de(o, `direct-comment`)), (t[6] = o), (t[7] = k));
  let te = (0, Ft.useSyncExternalStore)(O, k, Mt),
    A = T == null ? `idle` : `working`,
    { isResponseInProgress: j, hasPendingTurnStart: M, recoveryTurnInterrupted: N } = Y(dt, C),
    P;
  t[8] !== s || t[9] !== m
    ? ((P = Ne({ hostId: s, path: m })), (t[8] = s), (t[9] = m), (t[10] = P))
    : (P = t[10]);
  let F = Y(ke, P),
    I;
  t[11] !== C || t[12] !== y
    ? ((I = () => y.get(Ue, C)?.sessionId), (t[11] = C), (t[12] = y), (t[13] = I))
    : (I = t[13]);
  let L;
  t[14] !== s || t[15] !== f || t[16] !== m || t[17] !== x || t[18] !== h
    ? ((L = async () => {
        if (f != null) return f();
        await Ie({ cacheKey: h, openFiles: [{ hostId: s, path: m }], queryClient: x, throwOnError: !0 });
      }),
      (t[14] = s),
      (t[15] = f),
      (t[16] = m),
      (t[17] = x),
      (t[18] = h),
      (t[19] = L))
    : (L = t[19]);
  let R;
  t[20] !== s || t[21] !== m || t[22] !== y
    ? ((R = () => {
        Ee(y, { hostId: s, path: m });
      }),
      (t[20] = s),
      (t[21] = m),
      (t[22] = y),
      (t[23] = R))
    : (R = t[23]);
  let z;
  t[24] !== C || t[25] !== y
    ? ((z = (e, t, n) => {
        Ve(y, C, n, e !== !1);
      }),
      (t[24] = C),
      (t[25] = y),
      (t[26] = z))
    : (z = t[26]);
  let B;
  t[27] !== z || t[28] !== I || t[29] !== L || t[30] !== R
    ? ((B = { onMutate: I, mutationFn: L, onError: R, onSuccess: z }),
      (t[27] = z),
      (t[28] = I),
      (t[29] = L),
      (t[30] = R),
      (t[31] = B))
    : (B = t[31]);
  let V = p(B),
    H;
  t[32] !== C ||
  t[33] !== w.length ||
  t[34] !== M ||
  t[35] !== F ||
  t[36] !== j ||
  t[37] !== E ||
  t[38] !== A ||
  t[39] !== N ||
  t[40] !== y ||
  t[41] !== T?.execution?.type
    ? ((H = () => {
        let e = w.length > 0 && N;
        A !== `working` ||
          (T?.execution?.type === `chatgpt` && !e) ||
          E ||
          (!e && (w.length !== 0 || F)) ||
          j !== !1 ||
          M ||
          Re(y, C);
      }),
      (t[32] = C),
      (t[33] = w.length),
      (t[34] = M),
      (t[35] = F),
      (t[36] = j),
      (t[37] = E),
      (t[38] = A),
      (t[39] = N),
      (t[40] = y),
      (t[41] = T?.execution?.type),
      (t[42] = H))
    : (H = t[42]);
  let U = T?.execution?.type,
    W;
  (t[43] !== C ||
  t[44] !== w.length ||
  t[45] !== M ||
  t[46] !== F ||
  t[47] !== j ||
  t[48] !== E ||
  t[49] !== A ||
  t[50] !== N ||
  t[51] !== y ||
  t[52] !== U
    ? ((W = [w.length, C, F, j, E, M, A, N, U, y]),
      (t[43] = C),
      (t[44] = w.length),
      (t[45] = M),
      (t[46] = F),
      (t[47] = j),
      (t[48] = E),
      (t[49] = A),
      (t[50] = N),
      (t[51] = y),
      (t[52] = U),
      (t[53] = W))
    : (W = t[53]),
    (0, Ft.useEffect)(H, W));
  let G = A;
  A === `working` &&
    !E &&
    !M &&
    (F && (j === !1 || (T?.execution?.type === `chatgpt` && j == null))
      ? (G = `latest`)
      : T?.execution?.type === `chatgpt` && j !== !0 && (G = `idle`));
  let K = te === !1,
    q;
  if (
    t[54] !== r ||
    t[55] !== C ||
    t[56] !== n ||
    t[57] !== w ||
    t[58] !== s ||
    t[59] !== b ||
    t[60] !== _ ||
    t[61] !== v ||
    t[62] !== E ||
    t[63] !== l ||
    t[64] !== c ||
    t[65] !== d ||
    t[66] !== g ||
    t[67] !== m ||
    t[68] !== V ||
    t[69] !== y ||
    t[70] !== T ||
    t[71] !== K ||
    t[72] !== G
  ) {
    let e;
    t[74] !== w || t[75] !== s
      ? ((e =
          w.length > 0
            ? (0, $.jsx)(we, { commentAttachments: w, cwd: null, hostId: s, showArtifactName: !1 })
            : void 0),
        (t[74] = w),
        (t[75] = s),
        (t[76] = e))
      : (e = t[76]);
    let i;
    t[77] !== w.length || t[78] !== c || t[79] !== d || t[80] !== m || t[81] !== y
      ? ((i = (e) => {
          if (d(e) === !1) return !1;
          c?.(`cancel`);
          let t = qe(m);
          t != null &&
            w.length > 0 &&
            me(y, { ...t, threadId: Ye(y.value) }, { annotationCount: w.length, outcome: `canceled` });
        }),
        (t[77] = w.length),
        (t[78] = c),
        (t[79] = d),
        (t[80] = m),
        (t[81] = y),
        (t[82] = i))
      : (i = t[82]);
    let a;
    t[83] !== C || t[84] !== s || t[85] !== m || t[86] !== y
      ? ((a = () => {
          (ze(y, { hostId: s, path: m }), Re(y, C));
        }),
        (t[83] = C),
        (t[84] = s),
        (t[85] = m),
        (t[86] = y),
        (t[87] = a))
      : (a = t[87]);
    let o;
    t[88] === V ? (o = t[89]) : ((o = () => V.mutate()), (t[88] = V), (t[89] = o));
    let u;
    (t[90] !== C || t[91] !== b || t[92] !== l || t[93] !== c || t[94] !== y
      ? ((u = (e) => mt(y, b, C, c, e ?? l)),
        (t[90] = C),
        (t[91] = b),
        (t[92] = l),
        (t[93] = c),
        (t[94] = y),
        (t[95] = u))
      : (u = t[95]),
      (q = n({
        annotationCount: r,
        isAnnotationInteractionActive: v,
        isAnnotating: _,
        isSubmitting: E,
        sendDisabled: K,
        stopTarget: T?.execution == null ? void 0 : { execution: T.execution, hostId: s },
        onNavigate: g,
        phase: G,
        previewContent: e,
        onCancel: i,
        onDismissLatestChanges: a,
        onSeeLatestChanges: o,
        onSend: u,
      })),
      (t[54] = r),
      (t[55] = C),
      (t[56] = n),
      (t[57] = w),
      (t[58] = s),
      (t[59] = b),
      (t[60] = _),
      (t[61] = v),
      (t[62] = E),
      (t[63] = l),
      (t[64] = c),
      (t[65] = d),
      (t[66] = g),
      (t[67] = m),
      (t[68] = V),
      (t[69] = y),
      (t[70] = T),
      (t[71] = K),
      (t[72] = G),
      (t[73] = q));
  } else q = t[73];
  return q;
}
function Mt() {}
function Nt(e) {
  let t = (0, Pt.c)(24),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ isAnnotationInteractionActive: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = r !== void 0 && r,
    a = ee(),
    [o, s] = (0, Ft.useState)(null),
    { annotationCount: c, isAnnotating: l, isSubmitting: u, onNavigate: d, phase: f } = n,
    [p, m] = (0, Ft.useState)(null),
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
    nt(_));
  let v = d != null && f === `idle` && !u && (l || c > 0),
    y;
  t[9] !== v || t[10] !== n
    ? ((y = (e) => {
        let t = e !== void 0 && e;
        return (0, $.jsx)(Ot, { ...n, embedded: v, previewDisabled: t });
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
          : (0, $.jsx)(G, {
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
var Pt, Ft, $;
function It() {
  return (It = e(() => {
    ((Pt = W()),
      ut(),
      l(),
      V(),
      _(),
      (Ft = ie()),
      j(),
      r(),
      je(),
      pt(),
      Ce(),
      ye(),
      Be(),
      rt(),
      b(),
      M(),
      it(),
      w(),
      Me(),
      We(),
      ae(),
      x(),
      ht(),
      vt(),
      Ct(),
      Et(),
      ($ = q()));
  }))();
}
export { Nt as a, mt as c, Dt as i, ft as l, kt as n, It as o, jt as r, ht as s, Ot as t, pt as u };
//# sourceMappingURL=artifact-annotation-batch-controls-58c22049fec2.js.map
