import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  FD as r,
  IDt as i,
  Ixt as a,
  ND as o,
  Pxt as s,
  Rxt as c,
  TJ as l,
  VDt as u,
  Vxt as d,
  cSt as f,
  i3 as p,
  jDt as m,
  qG as h,
  r3 as g,
  t3 as _,
  vzt as v,
  wot as y,
  xMt as b,
  yMt as x,
  yzt as S,
} from "./app-shared-bbfeca5e5737.js";
import {
  F2 as C,
  Fsn as w,
  P2 as T,
  Rm as E,
  c6n as D,
  d6n as O,
  df as ee,
  dr as k,
  ff as A,
  fr as j,
  hm as te,
  i6n as ne,
  ih as re,
  iqt as M,
  mf as ie,
  nf as ae,
  p6n as oe,
  pf as se,
  r6n as N,
  rf as P,
  s6n as F,
  tqt as I,
  xsn as L,
} from "./app-initial-5851df3f6cb1.js";
import { Ip as R, Lp as z, Rp as B, zp as V } from "./app-primary-fe8a450b3b04.js";
import { n as H, t as U } from "./quick-chat-floating-surface-51ff4a9417a5.js";
var W;
function G() {
  return (G = e(() => {
    (s(),
      T(),
      L(),
      y(),
      I(),
      (W = f(
        n,
        (e, { scope: t, derived: n }) => {
          let r = n((t, { scope: { get: n } }) => {
            let r = n(M);
            if (r?.pageId !== e || r.status === `submitted`) return null;
            let i = n(w, e),
              a =
                r.status !== `answering` &&
                i != null &&
                i.status !== `created` &&
                (i.status === `error` || i.initialSaveStalled === !0),
              o = null;
            return (
              a
                ? (o = `page-save`)
                : r.status === `unconfirmed`
                  ? (o = `unconfirmed`)
                  : r.status === `error` && (o = `chat-start`),
              {
                setup: r,
                recovery: o,
                canDismiss: r.status !== `submitting`,
                canRetry: a ? i.retryable !== !1 : r.status === `error`,
              }
            );
          });
          return {
            state$: r,
            updateAnswer: (e) => {
              let n = t.get(r)?.setup;
              n?.status === `answering` && t.set(M, { ...n, answer: e });
            },
            submit: (e) => {
              let n = t.get(r)?.setup;
              n?.status !== `answering` ||
                (n.presentation === `draft` && e.trim() === ``) ||
                t.set(M, { ...n, answer: e, status: `queued` });
            },
            dismiss: () => {
              t.get(r)?.canDismiss && t.set(M, null);
            },
            retry: () => {
              let n = t.get(r);
              if (n?.canRetry) {
                if (n.recovery === `page-save`) {
                  C(t, e).catch(() => {});
                  return;
                }
                t.set(M, { ...n.setup, status: `queued` });
              }
            },
          };
        },
        { autoDispose: !0 },
      )));
  }))();
}
function ce(e) {
  let t = (0, Y.c)(13),
    { title: n, followUp: i, pageId: a } = e,
    o = u(),
    s = c(W, a),
    l = d(s.state$)?.setup,
    [f, p] = (0, X.useState)(null),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (e) => {
        let { width: t, height: n } = e.contentRect;
        p((e) => (e?.width === t && e.height === n ? e : { width: t, height: n }));
      }),
      (t[0] = m))
    : (m = t[0]);
  let h = r(m);
  if (l?.presentation !== `chat`) return null;
  let g = l.status === `submitting`,
    _;
  t[1] !== f ||
  t[2] !== i ||
  t[3] !== o ||
  t[4] !== s ||
  t[5] !== a ||
  t[6] !== l.status ||
  t[7] !== g ||
  t[8] !== n
    ? ((_ =
        f == null
          ? null
          : (0, Q.jsx)(U, {
              ref: J,
              animateOnMount: !0,
              containerSize: f,
              background: `panel`,
              forceExpanded: g,
              isMinimized: !1,
              onEscape: g ? void 0 : s.dismiss,
              onMinimizedChange: s.dismiss,
              presentation: g ? `expanded` : `compact`,
              showHeader: g,
              title: n,
              renderTranscript: de,
              children: () =>
                l.status === `answering`
                  ? i == null
                    ? null
                    : (0, Q.jsx)(R, {
                        productSurface: `work`,
                        isImmediateResponse: !0,
                        mentionContext: null,
                        questionAndOptions: i.questions.map(ue),
                        freeformPlaceholder: i.freeformPlaceholder,
                        otherPlaceholder: o.formatMessage({
                          id: `space.templateSetup.otherPlaceholder`,
                          defaultMessage: `Or write your own response`,
                          description: `Custom response instead of a suggested template setup answer`,
                        }),
                        submitLabel: i.submitLabel,
                        onMinimize: s.dismiss,
                        onSubmit: (e) => {
                          let t = i.questions
                            .map((t, n) => {
                              let r = e[n],
                                i =
                                  r.freeformText?.trim() ||
                                  t.options.find((e) => {
                                    let { id: t } = e;
                                    return t === r.selectedOptionId;
                                  })?.value;
                              return i
                                ? `- ${o.formatMessage({ id: `space.templateSetup.answerDetail`, defaultMessage: `{label}: {answer}`, description: `A template-specific detail label followed by the user's answer, appended to the original request` }, { label: t.answerLabel, answer: i })}`
                                : null;
                            })
                            .filter(le).join(`
`);
                          s.submit(
                            t.length === 0
                              ? ``
                              : [
                                  o.formatMessage({
                                    id: `space.templateSetup.moreDetails`,
                                    defaultMessage: `Some more details:`,
                                    description: `Heading before the user's answers appended to the original template request`,
                                  }),
                                  t,
                                ].join(`
`),
                          );
                        },
                      })
                  : (0, Q.jsx)(q, { label: i?.preparingLabel, pageId: a }),
            })),
      (t[1] = f),
      (t[2] = i),
      (t[3] = o),
      (t[4] = s),
      (t[5] = a),
      (t[6] = l.status),
      (t[7] = g),
      (t[8] = n),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  return (
    t[10] !== h || t[11] !== _
      ? ((v = (0, Z.createPortal)(
          (0, Q.jsx)(`div`, {
            ref: h,
            className: `pointer-events-none fixed inset-0 z-50 zoom-adjusted-viewport`,
            children: _,
          }),
          document.body,
        )),
        (t[10] = h),
        (t[11] = _),
        (t[12] = v))
      : (v = t[12]),
    v
  );
}
function le(e) {
  return e != null;
}
function ue(e) {
  return { ...e, customAnswerIsExclusive: !0 };
}
function de() {
  return null;
}
function fe(e) {
  let t = (0, Y.c)(18),
    { pageId: r } = e,
    i = a(n),
    o = u(),
    s = c(W, r),
    l = d(s.state$),
    f = l?.setup,
    p = (0, X.useRef)(null);
  if (l == null || f?.presentation !== `draft`) return null;
  let m = f.status === `answering`,
    h;
  t[0] === s
    ? (h = t[1])
    : ((h = () => {
        s.submit(p.current?.getText() ?? ``);
      }),
      (t[0] = s),
      (t[1] = h));
  let g = h,
    _;
  t[2] !== m ||
  t[3] !== o ||
  t[4] !== s.dismiss ||
  t[5] !== s.state$ ||
  t[6] !== s.updateAnswer ||
  t[7] !== r ||
  t[8] !== i ||
  t[9] !== f.answer ||
  t[10] !== f.title ||
  t[11] !== l.canDismiss ||
  t[12] !== l.recovery ||
  t[13] !== g
    ? ((_ =
        l.recovery == null
          ? (0, Q.jsx)(O, {
              layout: m ? `multiline` : `single-line`,
              children: m
                ? (0, Q.jsxs)(O.Body, {
                    children: [
                      (0, Q.jsx)(O.Attachments, { children: null }),
                      (0, Q.jsx)(O.Input, {
                        children: (0, Q.jsx)(B, {
                          ref: (e) => {
                            ((p.current = e),
                              e != null && i.get(s.state$)?.setup.status === `answering` && e.view.focus());
                          },
                          productSurface: `work`,
                          dictationDisabled: !0,
                          initialText: f.answer,
                          mentionContext: null,
                          placeholder: f.title,
                          variant: `inline`,
                          onFocus: pe,
                          onTextChange: s.updateAnswer,
                          onSubmit: g,
                        }),
                      }),
                      (0, Q.jsxs)(O.Footer, {
                        children: [
                          (0, Q.jsx)(O.FooterInlineControls, { children: null }),
                          (0, Q.jsx)(O.FooterAction, { children: null }),
                          (0, Q.jsx)(O.FooterControls, {
                            children: (0, Q.jsx)(O.FooterActions, {
                              children: (0, Q.jsx)(N, {
                                ariaLabel: o.formatMessage({
                                  id: `space.templateSetup.draft.send`,
                                  defaultMessage: `Send`,
                                  description: `Button on a Page template's initial draft composer. Sends the user's request once the Page has saved and its chat is ready`,
                                }),
                                disabled: f.answer.trim() === ``,
                                onClick: g,
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, Q.jsx)(K, { canStop: l.canDismiss, onStop: s.dismiss }),
            })
          : (0, Q.jsx)(q, { label: void 0, pageId: r })),
      (t[2] = m),
      (t[3] = o),
      (t[4] = s.dismiss),
      (t[5] = s.state$),
      (t[6] = s.updateAnswer),
      (t[7] = r),
      (t[8] = i),
      (t[9] = f.answer),
      (t[10] = f.title),
      (t[11] = l.canDismiss),
      (t[12] = l.recovery),
      (t[13] = g),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  return (
    t[15] !== f.title || t[16] !== _
      ? ((v = (0, Q.jsx)(`section`, { ref: J, "aria-label": f.title, children: _ })),
        (t[15] = f.title),
        (t[16] = _),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
function pe() {}
function K(e) {
  let n = (0, Y.c)(27),
    { canStop: r, onStop: i } = e,
    a = u(),
    [o] = (0, X.useState)(he),
    s;
  (n[0] === o ? (s = n[1]) : ((s = () => o.destroy()), (n[0] = o), (n[1] = s)), E(s, o));
  let c;
  n[2] === a
    ? (c = n[3])
    : ((c = a.formatMessage({
        id: `space.templateSetup.draft.working`,
        defaultMessage: `Working…`,
        description: `Short status in the Page template composer after Send or automatic submission. Remains the same while the Page saves and chat connects, until the request is accepted`,
      })),
      (n[2] = a),
      (n[3] = c));
  let l = c,
    d;
  n[4] === a
    ? (d = n[5])
    : ((d = a.formatMessage({
        id: `space.templateSetup.draft.addAttachments`,
        defaultMessage: `Add attachments`,
        description: `Accessible label for the disabled plus button in the Page template composer while its initial request waits for the Page and chat to be ready`,
      })),
      (n[4] = a),
      (n[5] = d));
  let f;
  n[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, Q.jsx)(h, {})), (n[6] = f)) : (f = n[6]);
  let p;
  n[7] === d
    ? (p = n[8])
    : ((p = (0, Q.jsx)(O.FooterInlineControls, {
        gap: `normal`,
        children: (0, Q.jsx)(t, {
          disabled: !0,
          "aria-label": d,
          color: `ghost`,
          size: `composer`,
          children: f,
        }),
      })),
      (n[7] = d),
      (n[8] = p));
  let m;
  n[9] === l
    ? (m = n[10])
    : ((m = (0, Q.jsx)(`span`, { className: `sr-only`, role: `status`, children: l })),
      (n[9] = l),
      (n[10] = m));
  let g;
  n[11] !== o || n[12] !== l
    ? ((g = (0, Q.jsx)(O.Input, {
        inert: !0,
        layout: `single-line`,
        children: (0, Q.jsx)(`div`, {
          "aria-hidden": !0,
          children: (0, Q.jsx)(k, {
            composerController: o,
            disableAutoFocus: !0,
            placeholder: l,
            singleLine: !0,
            workingStartedAtMs: null,
            onSubmit: me,
          }),
        }),
      })),
      (n[11] = o),
      (n[12] = l),
      (n[13] = g))
    : (g = n[13]);
  let _;
  n[14] !== m || n[15] !== g
    ? ((_ = (0, Q.jsxs)(Q.Fragment, { children: [m, g] })), (n[14] = m), (n[15] = g), (n[16] = _))
    : (_ = n[16]);
  let v;
  n[17] === a
    ? (v = n[18])
    : ((v = a.formatMessage({
        id: `space.templateSetup.draft.stop`,
        defaultMessage: `Stop`,
        description: `Accessible label for the square stop button in the Page template composer. Cancels the queued setup request before submission, keeping the created Page`,
      })),
      (n[17] = a),
      (n[18] = v));
  let y = !r,
    b;
  n[19] !== i || n[20] !== y || n[21] !== v
    ? ((b = (0, Q.jsx)(O.FooterActions, {
        children: (0, Q.jsx)(N, { ariaLabel: v, disabled: y, Icon: F, onClick: i }),
      })),
      (n[19] = i),
      (n[20] = y),
      (n[21] = v),
      (n[22] = b))
    : (b = n[22]);
  let x;
  return (
    n[23] !== b || n[24] !== p || n[25] !== _
      ? ((x = (0, Q.jsx)(O.Body, {
          layout: `single-line`,
          children: (0, Q.jsx)(O.AdaptiveFooter, {
            layout: `single-line`,
            leadingControls: p,
            input: _,
            trailingControls: b,
          }),
        })),
        (n[23] = b),
        (n[24] = p),
        (n[25] = _),
        (n[26] = x))
      : (x = n[26]),
    x
  );
}
function me() {}
function he() {
  return re(``);
}
function q(e) {
  let n = (0, Y.c)(30),
    { label: r, pageId: a } = e,
    o = c(W, a),
    s = d(o.state$);
  if (s == null) return null;
  let { setup: l, recovery: u, canDismiss: f, canRetry: p } = s,
    m = l.status === `unconfirmed`,
    h = u != null,
    _;
  n[0] === r
    ? (_ = n[1])
    : ((_ =
        r ??
        (0, Q.jsx)(i, {
          id: `space.templateSetup.preparing`,
          defaultMessage: `Getting ready…`,
          description: `Short status heading after the user has answered the Page template questions, while waiting for the Page to be saved and its chat to be ready`,
        })),
      (n[0] = r),
      (n[1] = _));
  let v = _;
  if (u === `page-save`) {
    let e;
    (n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(i, {
          id: `space.templateSetup.pageSaveFailed`,
          defaultMessage: `Your Page isn’t saved yet`,
          description: `Template setup cannot send until the destination Page has been saved`,
        })),
        (n[2] = e))
      : (e = n[2]),
      (v = e));
  } else if (u === `unconfirmed`) {
    let e;
    (n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(i, {
          id: `space.templateSetup.checkChat`,
          defaultMessage: `Check your chat`,
          description: `The template's chat may have already started but sending was not confirmed`,
        })),
        (n[3] = e))
      : (e = n[3]),
      (v = e));
  } else if (u === `chat-start`) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(i, {
          id: `space.templateSetup.chatStartFailed`,
          defaultMessage: `Couldn’t start your chat`,
          description: `Heading when preparing the Page template's chat failed before sending`,
        })),
        (n[4] = e))
      : (e = n[4]),
      (v = e));
  }
  let y = null;
  if (m) {
    let e;
    (n[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(i, {
          id: `space.templateSetup.unconfirmed`,
          defaultMessage: `We couldn’t confirm whether your request was sent. Check the chat before starting again`,
          description: `Do not retry uncertain Page template sends automatically; let the user inspect the real chat`,
        })),
        (n[5] = e))
      : (e = n[5]),
      (y = e));
  } else if (h) {
    let e;
    (n[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(i, {
          id: `space.templateSetup.inputKept`,
          defaultMessage: `Your text is still here`,
          description: `The Page template retains the user's draft request or setup answers after a Page save or chat preparation failure`,
        })),
        (n[6] = e))
      : (e = n[6]),
      (y = e));
  }
  let b = h ? `alert` : `status`,
    x;
  n[7] === h
    ? (x = n[8])
    : ((x = h ? null : (0, Q.jsx)(g, { className: `icon-xs text-secondary` })), (n[7] = h), (n[8] = x));
  let S;
  n[9] !== y || n[10] !== v
    ? ((S = (0, Q.jsx)(ee, { title: v, subtitle: y })), (n[9] = y), (n[10] = v), (n[11] = S))
    : (S = n[11]);
  let C;
  n[12] !== b || n[13] !== x || n[14] !== S
    ? ((C = (0, Q.jsxs)(`div`, {
        className: `flex items-start gap-3 select-none`,
        role: b,
        children: [x, S],
      })),
      (n[12] = b),
      (n[13] = x),
      (n[14] = S),
      (n[15] = C))
    : (C = n[15]);
  let w = !f,
    T;
  n[16] !== o.dismiss || n[17] !== w
    ? ((T = (0, Q.jsx)(ae, { variant: `icon`, disabled: w, onDismiss: o.dismiss })),
      (n[16] = o.dismiss),
      (n[17] = w),
      (n[18] = T))
    : (T = n[18]);
  let E;
  n[19] !== C || n[20] !== T
    ? ((E = (0, Q.jsxs)(`div`, { className: `flex items-start justify-between gap-3`, children: [C, T] })),
      (n[19] = C),
      (n[20] = T),
      (n[21] = E))
    : (E = n[21]);
  let D;
  n[22] !== p || n[23] !== o.retry || n[24] !== h || n[25] !== l.answer
    ? ((D = h
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3 pt-3`,
            children: [
              (0, Q.jsx)(`p`, {
                className: `m-0 text-sm whitespace-pre-wrap text-secondary select-text`,
                children: l.answer,
              }),
              p
                ? (0, Q.jsx)(`div`, {
                    className: `flex justify-end gap-2`,
                    children: (0, Q.jsx)(t, {
                      size: `compact`,
                      onClick: o.retry,
                      children: (0, Q.jsx)(i, {
                        id: `space.templateSetup.retry`,
                        defaultMessage: `Try again`,
                        description: `Manually retry saving a Page or starting its chat, using the answers shown above`,
                      }),
                    }),
                  })
                : null,
            ],
          })
        : null),
      (n[22] = p),
      (n[23] = o.retry),
      (n[24] = h),
      (n[25] = l.answer),
      (n[26] = D))
    : (D = n[26]);
  let O;
  return (
    n[27] !== E || n[28] !== D
      ? ((O = (0, Q.jsxs)(se, { className: `p-4`, children: [E, D] })), (n[27] = E), (n[28] = D), (n[29] = O))
      : (O = n[29]),
    O
  );
}
function J(e) {
  if (e == null) return;
  let t = !1,
    n = e.querySelector(`[contenteditable='true']`),
    r = e.ownerDocument,
    i = (n) => {
      t = n.target instanceof Node && !e.contains(n.target);
    },
    a = (e) => {
      e.key === `Tab` && (t = !0);
    },
    o = (r) => {
      if (n != null && (!n.isConnected || n.closest(`[inert]`) != null)) return;
      let i = r.target;
      if (i instanceof HTMLElement) {
        if (e.contains(i)) {
          n = i;
          return;
        }
        !t &&
          i.closest(`[role="tabpanel"]`) != null &&
          (n?.isConnected ? n : e.querySelector(`[data-codex-composer-request-navigation]`))?.focus({
            preventScroll: !0,
          });
      }
    };
  return (
    r.addEventListener(`pointerdown`, i, !0),
    r.addEventListener(`keydown`, a, !0),
    r.addEventListener(`focusin`, o, !0),
    () => {
      (r.removeEventListener(`pointerdown`, i, !0),
        r.removeEventListener(`keydown`, a, !0),
        r.removeEventListener(`focusin`, o, !0));
    }
  );
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = v()),
      s(),
      (X = S()),
      (Z = x()),
      m(),
      oe(),
      ne(),
      ie(),
      A(),
      j(),
      P(),
      z(),
      _(),
      l(),
      p(),
      D(),
      te(),
      V(),
      H(),
      o(),
      y(),
      G(),
      (Q = b()));
  }))();
}
export { ce as n, $ as r, fe as t };
//# sourceMappingURL=template-setup-chat-bb52ad9352ed.js.map
