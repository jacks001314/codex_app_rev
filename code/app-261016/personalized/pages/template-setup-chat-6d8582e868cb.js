import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  FBt as i,
  FNt as a,
  LNt as o,
  PBt as s,
  Qst as c,
  TCt as l,
  TY as u,
  WK as d,
  XOt as f,
  Y3 as p,
  Z3 as m,
  ZSt as h,
  dO as g,
  e6 as _,
  iCt as v,
  lO as y,
  okt as b,
  tCt as x,
  tkt as S,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B7n as C,
  Fm as w,
  G7n as T,
  GVt as E,
  J7n as D,
  JVt as O,
  V7n as k,
  W7n as A,
  X7n as ee,
  af as te,
  br as ne,
  gf as re,
  hdn as ie,
  hf as ae,
  i3 as oe,
  if as se,
  ih as j,
  kdn as M,
  mf as N,
  pf as P,
  r3 as F,
  wh as I,
  yr as L,
} from "./app-initial-ad16eaadf81f.js";
import { Qp as R, Xp as z, Yp as B, Zp as V } from "./app-primary-3e00728c2a4c.js";
import { n as H, t as U } from "./floating-chat-surface-1eaefa25765a.js";
var W;
function G() {
  return (G = e(() => {
    (h(),
      F(),
      ie(),
      r(),
      E(),
      (W = l(
        c,
        (e, { scope: t, derived: n }) => {
          let r = n((t, { scope: { get: n } }) => {
            let r = n(O);
            if (r?.pageId !== e || r.status === `submitted`) return null;
            let i = n(M, e),
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
              n?.status === `answering` && t.set(O, { ...n, answer: e });
            },
            submit: (e) => {
              let n = t.get(r)?.setup;
              n?.status !== `answering` ||
                (n.presentation === `draft` && e.trim() === ``) ||
                t.set(O, { ...n, answer: e, status: `queued` });
            },
            dismiss: () => {
              t.get(r)?.canDismiss && t.set(O, null);
            },
            retry: () => {
              let n = t.get(r);
              if (n?.canRetry) {
                if (n.recovery === `page-save`) {
                  oe(t, e).catch(() => {});
                  return;
                }
                t.set(O, { ...n.setup, status: `queued` });
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
    { title: n, followUp: r, pageId: i } = e,
    a = b(),
    o = x(W, i),
    s = v(o.state$)?.setup,
    [c, l] = (0, X.useState)(null),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (e) => {
        let { width: t, height: n } = e.contentRect;
        l((e) => (e?.width === t && e.height === n ? e : { width: t, height: n }));
      }),
      (t[0] = u))
    : (u = t[0]);
  let d = g(u);
  if (s?.presentation !== `chat`) return null;
  let f = s.status === `submitting`,
    p;
  t[1] !== c ||
  t[2] !== r ||
  t[3] !== a ||
  t[4] !== o ||
  t[5] !== i ||
  t[6] !== s.status ||
  t[7] !== f ||
  t[8] !== n
    ? ((p =
        c == null
          ? null
          : (0, Q.jsx)(U, {
              ref: J,
              animateOnMount: !0,
              containerSize: c,
              background: `panel`,
              forceExpanded: f,
              isMinimized: !1,
              onEscape: f ? void 0 : o.dismiss,
              onMinimizedChange: o.dismiss,
              presentation: f ? `expanded` : `compact`,
              showHeader: f,
              title: n,
              renderTranscript: de,
              children: () =>
                s.status === `answering`
                  ? r == null
                    ? null
                    : (0, Q.jsx)(B, {
                        productSurface: `work`,
                        isImmediateResponse: !0,
                        mentionContext: null,
                        questionAndOptions: r.questions.map(ue),
                        freeformPlaceholder: r.freeformPlaceholder,
                        otherPlaceholder: a.formatMessage({
                          id: `space.templateSetup.otherPlaceholder`,
                          defaultMessage: `Or write your own response`,
                          description: `Custom response instead of a suggested template setup answer`,
                        }),
                        submitLabel: r.submitLabel,
                        onMinimize: o.dismiss,
                        onSubmit: (e) => {
                          let t = r.questions
                            .map((t, n) => {
                              let r = e[n],
                                i =
                                  r.freeformText?.trim() ||
                                  t.options.find((e) => {
                                    let { id: t } = e;
                                    return t === r.selectedOptionId;
                                  })?.value;
                              return i
                                ? `- ${a.formatMessage({ id: `space.templateSetup.answerDetail`, defaultMessage: `{label}: {answer}`, description: `A template-specific detail label followed by the user's answer, appended to the original request` }, { label: t.answerLabel, answer: i })}`
                                : null;
                            })
                            .filter(le).join(`
`);
                          o.submit(
                            t.length === 0
                              ? ``
                              : [
                                  a.formatMessage({
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
                  : (0, Q.jsx)(q, { label: r?.preparingLabel, pageId: i }),
            })),
      (t[1] = c),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = i),
      (t[6] = s.status),
      (t[7] = f),
      (t[8] = n),
      (t[9] = p))
    : (p = t[9]);
  let m;
  return (
    t[10] !== d || t[11] !== p
      ? ((m = (0, Z.createPortal)(
          (0, Q.jsx)(`div`, {
            ref: d,
            className: `pointer-events-none fixed inset-0 z-50 zoom-adjusted-viewport`,
            children: p,
          }),
          document.body,
        )),
        (t[10] = d),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
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
    i = n(c),
    a = b(),
    o = x(W, r),
    s = v(o.state$),
    l = s?.setup,
    u = (0, X.useRef)(null);
  if (s == null || l?.presentation !== `draft`) return null;
  let d = l.status === `answering`,
    f;
  t[0] === o
    ? (f = t[1])
    : ((f = () => {
        o.submit(u.current?.getText() ?? ``);
      }),
      (t[0] = o),
      (t[1] = f));
  let p = f,
    m;
  t[2] !== d ||
  t[3] !== a ||
  t[4] !== o.dismiss ||
  t[5] !== o.state$ ||
  t[6] !== o.updateAnswer ||
  t[7] !== r ||
  t[8] !== i ||
  t[9] !== l.answer ||
  t[10] !== l.title ||
  t[11] !== s.canDismiss ||
  t[12] !== s.recovery ||
  t[13] !== p
    ? ((m =
        s.recovery == null
          ? (0, Q.jsx)(D, {
              layout: d ? `multiline` : `single-line`,
              children: d
                ? (0, Q.jsxs)(D.Body, {
                    children: [
                      (0, Q.jsx)(D.Attachments, { children: null }),
                      (0, Q.jsx)(D.Input, {
                        children: (0, Q.jsx)(V, {
                          ref: (e) => {
                            ((u.current = e),
                              e != null && i.get(o.state$)?.setup.status === `answering` && e.view.focus());
                          },
                          productSurface: `work`,
                          dictationDisabled: !0,
                          initialText: l.answer,
                          mentionContext: null,
                          placeholder: l.title,
                          variant: `inline`,
                          onFocus: pe,
                          onTextChange: o.updateAnswer,
                          onSubmit: p,
                        }),
                      }),
                      (0, Q.jsxs)(D.Footer, {
                        children: [
                          (0, Q.jsx)(D.FooterInlineControls, { children: null }),
                          (0, Q.jsx)(D.FooterAction, { children: null }),
                          (0, Q.jsx)(D.FooterControls, {
                            children: (0, Q.jsx)(D.FooterActions, {
                              children: (0, Q.jsx)(C, {
                                ariaLabel: a.formatMessage({
                                  id: `space.templateSetup.draft.send`,
                                  defaultMessage: `Send`,
                                  description: `Button on a Page template's initial draft composer. Sends the user's request once the Page has saved and its chat is ready`,
                                }),
                                disabled: l.answer.trim() === ``,
                                onClick: p,
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, Q.jsx)(K, { canStop: s.canDismiss, onStop: o.dismiss }),
            })
          : (0, Q.jsx)(q, { label: void 0, pageId: r })),
      (t[2] = d),
      (t[3] = a),
      (t[4] = o.dismiss),
      (t[5] = o.state$),
      (t[6] = o.updateAnswer),
      (t[7] = r),
      (t[8] = i),
      (t[9] = l.answer),
      (t[10] = l.title),
      (t[11] = s.canDismiss),
      (t[12] = s.recovery),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== l.title || t[16] !== m
      ? ((h = (0, Q.jsx)(`section`, { ref: J, "aria-label": l.title, children: m })),
        (t[15] = l.title),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
function pe() {}
function K(e) {
  let t = (0, Y.c)(27),
    { canStop: n, onStop: r } = e,
    i = b(),
    [a] = (0, X.useState)(he),
    o;
  (t[0] === a ? (o = t[1]) : ((o = () => a.destroy()), (t[0] = a), (t[1] = o)), j(o, a));
  let s;
  t[2] === i
    ? (s = t[3])
    : ((s = i.formatMessage({
        id: `space.templateSetup.draft.working`,
        defaultMessage: `Working…`,
        description: `Short status in the Page template composer after Send or automatic submission. Remains the same while the Page saves and chat connects, until the request is accepted`,
      })),
      (t[2] = i),
      (t[3] = s));
  let c = s,
    l;
  t[4] === i
    ? (l = t[5])
    : ((l = i.formatMessage({
        id: `space.templateSetup.draft.addAttachments`,
        defaultMessage: `Add attachments`,
        description: `Accessible label for the disabled plus button in the Page template composer while its initial request waits for the Page and chat to be ready`,
      })),
      (t[4] = i),
      (t[5] = l));
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = (0, Q.jsx)(d, {})), (t[6] = u)) : (u = t[6]);
  let f;
  t[7] === l
    ? (f = t[8])
    : ((f = (0, Q.jsx)(D.FooterInlineControls, {
        gap: `normal`,
        children: (0, Q.jsx)(p, {
          disabled: !0,
          "aria-label": l,
          color: `ghost`,
          size: `composer`,
          children: u,
        }),
      })),
      (t[7] = l),
      (t[8] = f));
  let m;
  t[9] === c
    ? (m = t[10])
    : ((m = (0, Q.jsx)(`span`, { className: `sr-only`, role: `status`, children: c })),
      (t[9] = c),
      (t[10] = m));
  let h;
  t[11] !== a || t[12] !== c
    ? ((h = (0, Q.jsx)(D.Input, {
        inert: !0,
        layout: `single-line`,
        children: (0, Q.jsx)(`div`, {
          "aria-hidden": !0,
          children: (0, Q.jsx)(L, {
            composerController: a,
            disableAutoFocus: !0,
            placeholder: c,
            singleLine: !0,
            workingStartedAtMs: null,
            onSubmit: me,
          }),
        }),
      })),
      (t[11] = a),
      (t[12] = c),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] !== m || t[15] !== h
    ? ((g = (0, Q.jsxs)(Q.Fragment, { children: [m, h] })), (t[14] = m), (t[15] = h), (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] === i
    ? (_ = t[18])
    : ((_ = i.formatMessage({
        id: `space.templateSetup.draft.stop`,
        defaultMessage: `Stop`,
        description: `Accessible label for the square stop button in the Page template composer. Cancels the queued setup request before submission, keeping the created Page`,
      })),
      (t[17] = i),
      (t[18] = _));
  let v = !n,
    y;
  t[19] !== r || t[20] !== v || t[21] !== _
    ? ((y = (0, Q.jsx)(D.FooterActions, {
        children: (0, Q.jsx)(C, { ariaLabel: _, disabled: v, Icon: A, onClick: r }),
      })),
      (t[19] = r),
      (t[20] = v),
      (t[21] = _),
      (t[22] = y))
    : (y = t[22]);
  let x;
  return (
    t[23] !== y || t[24] !== f || t[25] !== g
      ? ((x = (0, Q.jsx)(D.Body, {
          layout: `single-line`,
          children: (0, Q.jsx)(D.AdaptiveFooter, {
            layout: `single-line`,
            leadingControls: f,
            input: g,
            trailingControls: y,
          }),
        })),
        (t[23] = y),
        (t[24] = f),
        (t[25] = g),
        (t[26] = x))
      : (x = t[26]),
    x
  );
}
function me() {}
function he() {
  return I(``);
}
function q(e) {
  let n = (0, Y.c)(30),
    { label: r, pageId: i } = e,
    a = x(W, i),
    o = v(a.state$);
  if (o == null) return null;
  let { setup: s, recovery: c, canDismiss: l, canRetry: u } = o,
    d = s.status === `unconfirmed`,
    f = c != null,
    m;
  n[0] === r
    ? (m = n[1])
    : ((m =
        r ??
        (0, Q.jsx)(S, {
          id: `space.templateSetup.preparing`,
          defaultMessage: `Getting ready…`,
          description: `Short status heading after the user has answered the Page template questions, while waiting for the Page to be saved and its chat to be ready`,
        })),
      (n[0] = r),
      (n[1] = m));
  let h = m;
  if (c === `page-save`) {
    let e;
    (n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(S, {
          id: `space.templateSetup.pageSaveFailed`,
          defaultMessage: `Your Page isn’t saved yet`,
          description: `Template setup cannot send until the destination Page has been saved`,
        })),
        (n[2] = e))
      : (e = n[2]),
      (h = e));
  } else if (c === `unconfirmed`) {
    let e;
    (n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(S, {
          id: `space.templateSetup.checkChat`,
          defaultMessage: `Check your chat`,
          description: `The template's chat may have already started but sending was not confirmed`,
        })),
        (n[3] = e))
      : (e = n[3]),
      (h = e));
  } else if (c === `chat-start`) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(S, {
          id: `space.templateSetup.chatStartFailed`,
          defaultMessage: `Couldn’t start your chat`,
          description: `Heading when preparing the Page template's chat failed before sending`,
        })),
        (n[4] = e))
      : (e = n[4]),
      (h = e));
  }
  let g = null;
  if (d) {
    let e;
    (n[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(S, {
          id: `space.templateSetup.unconfirmed`,
          defaultMessage: `We couldn’t confirm whether your request was sent. Check the chat before starting again`,
          description: `Do not retry uncertain Page template sends automatically; let the user inspect the real chat`,
        })),
        (n[5] = e))
      : (e = n[5]),
      (g = e));
  } else if (f) {
    let e;
    (n[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(S, {
          id: `space.templateSetup.inputKept`,
          defaultMessage: `Your text is still here`,
          description: `The Page template retains the user's draft request or setup answers after a Page save or chat preparation failure`,
        })),
        (n[6] = e))
      : (e = n[6]),
      (g = e));
  }
  let _ = f ? `alert` : `status`,
    y;
  n[7] === f
    ? (y = n[8])
    : ((y = f ? null : (0, Q.jsx)(t, { className: `icon-xs text-secondary` })), (n[7] = f), (n[8] = y));
  let b;
  n[9] !== g || n[10] !== h
    ? ((b = (0, Q.jsx)(P, { title: h, subtitle: g })), (n[9] = g), (n[10] = h), (n[11] = b))
    : (b = n[11]);
  let C;
  n[12] !== _ || n[13] !== y || n[14] !== b
    ? ((C = (0, Q.jsxs)(`div`, {
        className: `flex items-start gap-3 select-none`,
        role: _,
        children: [y, b],
      })),
      (n[12] = _),
      (n[13] = y),
      (n[14] = b),
      (n[15] = C))
    : (C = n[15]);
  let w = !l,
    T;
  n[16] !== a.dismiss || n[17] !== w
    ? ((T = (0, Q.jsx)(se, { variant: `icon`, disabled: w, onDismiss: a.dismiss })),
      (n[16] = a.dismiss),
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
  n[22] !== u || n[23] !== a.retry || n[24] !== f || n[25] !== s.answer
    ? ((D = f
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3 pt-3`,
            children: [
              (0, Q.jsx)(`p`, {
                className: `m-0 text-sm whitespace-pre-wrap text-secondary select-text`,
                children: s.answer,
              }),
              u
                ? (0, Q.jsx)(`div`, {
                    className: `flex justify-end gap-2`,
                    children: (0, Q.jsx)(p, {
                      size: `compact`,
                      onClick: a.retry,
                      children: (0, Q.jsx)(S, {
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
      (n[22] = u),
      (n[23] = a.retry),
      (n[24] = f),
      (n[25] = s.answer),
      (n[26] = D))
    : (D = n[26]);
  let O;
  return (
    n[27] !== E || n[28] !== D
      ? ((O = (0, Q.jsxs)(ae, { className: `p-4`, children: [E, D] })), (n[27] = E), (n[28] = D), (n[29] = O))
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
    ((Y = s()),
      h(),
      (X = i()),
      (Z = a()),
      f(),
      H(),
      ee(),
      k(),
      re(),
      N(),
      ne(),
      te(),
      z(),
      m(),
      u(),
      _(),
      T(),
      w(),
      R(),
      y(),
      r(),
      G(),
      (Q = o()));
  }))();
}
export { ce as n, $ as r, fe as t };
//# sourceMappingURL=template-setup-chat-6d8582e868cb.js.map
