import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $kt as t,
  $v as n,
  BAt as r,
  DB as i,
  FBt as a,
  FNt as o,
  LAt as s,
  LNt as c,
  MNt as l,
  NNt as u,
  OB as d,
  PBt as f,
  Qv as p,
  TY as m,
  UAt as h,
  VAt as g,
  VU as _,
  WAt as v,
  XOt as y,
  XS as b,
  Y3 as x,
  Z3 as S,
  ck as C,
  dC as w,
  eAt as T,
  iAt as E,
  nAt as D,
  okt as O,
  rAt as k,
  rk as A,
  tAt as j,
  tkt as M,
  zAt as N,
  zE as P,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  E as F,
  F as I,
  R as L,
  T as R,
  d as ee,
  l as te,
  o as ne,
  r as re,
  v as z,
  y as B,
} from "./PopcornIcons-6c48726ff00b.js";
import { Lx as V, Rx as ie } from "./app-primary-3e00728c2a4c.js";
import { a as H, i as ae, r as oe, t as se } from "./PopcornCommentInput-c8ea07ac08f0.js";
import { a as ce, n as le, r as U, t as W } from "./PopcornCommentMessageLayout-b62f81b2e6df.js";
import { n as ue, r as de, t as fe } from "./PopcornCommentsSidebarLayout-b6ada0231652.js";
function pe({ children: e, label: t, disabled: n = !1, className: i = `inline-flex` }) {
  let a = (0, G.useId)(),
    [o, c] = (0, G.useState)(!1),
    l = (0, G.useRef)(null),
    {
      refs: u,
      elements: d,
      floatingStyles: f,
    } = h({
      open: o && !n,
      placement: `top`,
      middleware: [r(2), s({ padding: 8 }), g({ padding: 8 })],
      whileElementsMounted: v,
    });
  (0, G.useEffect)(() => (n && c(!1), () => clearTimeout(l.current ?? void 0)), [n]);
  function p() {
    (clearTimeout(l.current ?? void 0), (l.current = null), c(!1));
  }
  let m = o && !n,
    _ = [e.props[`aria-describedby`], m ? a : void 0].filter(Boolean).join(` `) || void 0,
    y = d.reference,
    b = y instanceof Element ? (y.closest(`[data-theme]`) ?? y.ownerDocument.body) : null;
  return (0, he.jsxs)(he.Fragment, {
    children: [
      (0, he.jsx)(`span`, {
        ref: u.setReference,
        className: i,
        onPointerEnter: (e) => {
          n ||
            e.pointerType === `touch` ||
            (clearTimeout(l.current ?? void 0), (l.current = setTimeout(() => c(!0), 700)));
        },
        onPointerLeave: p,
        onFocus: (e) => {
          !n && e.target.matches(`:focus-visible`) && c(!0);
        },
        onBlur: p,
        onPointerDown: p,
        onClick: p,
        onKeyDown: (e) => {
          e.key === `Escape` && m && (e.preventDefault(), e.stopPropagation(), p());
        },
        children: (0, G.cloneElement)(e, { "aria-describedby": _ }),
      }),
      m &&
        b != null &&
        (0, me.createPortal)(
          (0, he.jsx)(`div`, {
            id: a,
            ref: u.setFloating,
            role: `tooltip`,
            className: `pointer-events-none z-50 w-fit max-w-80 rounded-2xl border border-default bg-surface-elevated-secondary px-2 py-1.5 text-sm whitespace-normal text-default select-none`,
            style: f,
            children: t,
          }),
          b,
        ),
    ],
  });
}
var G, me, he;
function ge() {
  return (ge = e(() => {
    (N(), (G = a()), (me = o()), (he = c()));
  }))();
}
function _e({
  value: e,
  initialValue: t = ``,
  mode: n,
  disabled: r = !1,
  assignedToChatGpt: i,
  initialAssignedToChatGpt: a = !1,
  canAssignToChatGpt: o = !0,
  labels: s,
  assignmentIcon: c,
  submitIcon: u,
  renderInput: d,
  wrapSurface: f,
  wrapAssignmentControl: p,
  onCancel: m,
  onChange: h,
  onAssignmentChange: g,
  onSubmit: _,
}) {
  let [v, y] = (0, K.useState)(t),
    b = e ?? v,
    [x, S] = (0, K.useState)(a),
    C = o && (i ?? x),
    [w, T] = (0, K.useState)(!1),
    E = (0, K.useRef)(null),
    D = (0, K.useRef)(null),
    O = (0, K.useRef)(0),
    [k, A] = (0, K.useState)(!1),
    j = b.trim().length > 0,
    M = n === `create` ? k : b.length > 0 || C || w,
    N = s?.placeholder ?? (n === `reply` ? `Add a reply` : `Add a comment`),
    P = s?.input ?? (n === `reply` ? `Reply to comment` : `Comment`),
    F = s?.assignment ?? `Assign to ChatGPT`;
  H(() => {
    let e = E.current,
      t = D.current;
    if (n !== `create` || e == null || t == null) return;
    let r = () => {
      if (t.clientWidth === 0) return;
      M || (O.current = t.clientWidth - e.offsetWidth);
      let n = e.ownerDocument.createElement(`div`);
      ((n.inert = !0),
        n.setAttribute(`aria-hidden`, `true`),
        (n.style.position = `fixed`),
        (n.style.top = `0`),
        (n.style.left = `0`),
        (n.style.visibility = `hidden`),
        (n.style.width = `${t.clientWidth - O.current}px`),
        n.append(e.cloneNode(!0)),
        e.after(n));
      let r = getComputedStyle(e),
        i = parseFloat(r.lineHeight) + parseFloat(r.paddingTop) + parseFloat(r.paddingBottom),
        a = b.length > 0 && n.scrollHeight > Math.ceil(i);
      (n.remove(), A(a));
    };
    if ((r(), typeof ResizeObserver > `u`)) return;
    let i = 0,
      a = () => {
        (cancelAnimationFrame(i), (i = requestAnimationFrame(r)));
      },
      o = new ResizeObserver(a);
    (o.observe(t), o.observe(e));
    let s = new MutationObserver(a);
    return (
      s.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
      () => {
        (cancelAnimationFrame(i), o.disconnect(), s.disconnect());
      }
    );
  }, [C, M, n, b]);
  function I(e) {
    let t = b.trim();
    !r && t && _({ body: t, assignedToChatGpt: C, submitSource: e }) && n === `reply` && L(``);
  }
  function L(t) {
    r || (e ?? y(t), h?.(t));
  }
  function R(e) {
    r || (i ?? S(e), g?.(e));
  }
  let ee = (0, q.jsx)(se, {
      value: b,
      disabled: r,
      onChange: L,
      placeholder: N,
      ariaLabel: P,
      assignedToChatGpt: C,
      recipient: s?.recipient ?? `@ChatGPT`,
      inputRef: E,
      autoFocus: n === `create`,
      onRemoveRecipient: () => R(!1),
      onSubmit: () => I(`keyboard`),
      renderInput: d,
    }),
    te = (0, q.jsx)(`button`, {
      type: `button`,
      disabled: r,
      "aria-label": F,
      "aria-pressed": C,
      className: `flex size-7 shrink-0 cursor-interaction items-center justify-center rounded-full border-0 p-0 text-secondary select-none no-drag focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 enabled:hover:bg-primary-ghost-hover aria-pressed:bg-primary-ghost-hover`,
      onClick: () => {
        (R(!C), E.current?.focus());
      },
      children: c ?? (0, q.jsx)(ne, { "aria-hidden": !0 }),
    }),
    z = o ? (p == null ? (0, q.jsx)(pe, { label: F, children: te }) : p(te)) : null,
    B =
      n !== `reply` || j
        ? (0, q.jsxs)(`button`, {
            type: `submit`,
            disabled: r || !j,
            "aria-keyshortcuts": `Enter`,
            className: `ms-auto flex size-7 shrink-0 cursor-interaction items-center justify-center rounded-full border-0 bg-primary-solid p-0 text-primary-solid select-none no-drag focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 enabled:hover:bg-text/80 disabled:cursor-default disabled:opacity-50`,
            children: [
              (0, q.jsx)(`span`, { className: `sr-only`, children: s?.submit ?? `Send` }),
              u ?? (0, q.jsx)(re, { "aria-hidden": !0 }),
            ],
          })
        : null,
    V = (0, q.jsxs)(`div`, {
      className: `relative flex min-h-0 min-w-0 flex-1 flex-col`,
      children: [
        s?.heading != null &&
          (0, q.jsx)(`div`, {
            className: `px-3 pt-2 text-sm text-secondary select-none`,
            children: s.heading,
          }),
        (0, q.jsxs)(`div`, {
          ref: D,
          className: l(
            `flex min-w-0 items-center gap-2 ps-3`,
            M || n === `reply` ? `pe-3` : `pe-2`,
            M && n === `create` ? `py-3` : `py-2`,
          ),
          children: [
            (0, q.jsx)(`div`, { className: l(`min-w-0 grow`, M && `min-h-10`), children: ee }),
            !M &&
              n === `create` &&
              (0, q.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-1 select-none`,
                children: [z, B],
              }),
          ],
        }),
        M &&
          (0, q.jsxs)(`div`, {
            className: `flex items-center justify-between gap-2 p-1.5 select-none`,
            children: [z, B],
          }),
      ],
    });
  return (0, q.jsx)(`form`, {
    onFocusCapture: () => {
      n === `reply` && T(!0);
    },
    onBlurCapture: (e) => {
      n === `reply` && !e.currentTarget.contains(e.relatedTarget) && T(!1);
    },
    onSubmit: (e) => {
      (e.preventDefault(), I(`button`));
    },
    onKeyDown: (e) => {
      e.defaultPrevented ||
        e.nativeEvent.isComposing ||
        (e.key === `Escape` && m != null
          ? (e.preventDefault(), e.stopPropagation(), m())
          : e.key === `Enter` &&
            !e.shiftKey &&
            !e.altKey &&
            (e.metaKey || e.ctrlKey) &&
            (e.preventDefault(), e.stopPropagation(), I(`keyboard`)));
    },
    children: (0, q.jsx)(`div`, {
      onMouseDown: (e) => {
        !r &&
          e.button === 0 &&
          !e.defaultPrevented &&
          e.target instanceof Element &&
          !e.currentTarget.contains(
            e.target.closest(
              `a[href], button, input, select, textarea, [contenteditable], [role='button'], [tabindex]`,
            ),
          ) &&
          (e.preventDefault(), E.current?.focus());
      },
      children:
        f == null
          ? (0, q.jsxs)(`div`, {
              className: l(
                `flex min-w-0 flex-col text-default`,
                n === `reply`
                  ? `rounded-md border border-default bg-surface`
                  : `relative isolate rounded-2xl bg-background-primary-soft/90 shadow-lg-stronger backdrop-blur-lg dark:bg-surface-elevated-secondary`,
              ),
              children: [
                V,
                n === `create` &&
                  (0, q.jsx)(`div`, {
                    "aria-hidden": !0,
                    className: `pointer-events-none absolute inset-0 rounded-2xl mix-blend-multiply outline-1 outline-border`,
                  }),
              ],
            })
          : f(V),
    }),
  });
}
function ve(e, t, n, r = !0) {
  let i = r && /^@ChatGPT(?:\s|$)/u.test(t);
  return {
    threadId: e.threadId,
    artifactKind: e.artifactKind,
    assignedToChatGpt: i,
    body: i ? t.replace(/^@ChatGPT\s*/u, ``) : t,
    label: e.label,
    target: n,
  };
}
var K, q;
function ye() {
  return (ye = e(() => {
    (u(), (K = a()), L(), ge(), ae(), oe(), (q = c()));
  }))();
}
function be(e, { point: t, label: n, color: r, scale: i, style: a }) {
  (e.save(),
    e.translate(t.x, t.y),
    e.scale(1 / i, 1 / i),
    (e.font = `${a.fontWeight} ${a.fontSize}px ${a.fontFamily}`),
    (e.textAlign = `left`),
    (e.textBaseline = `middle`));
  let o = Math.max(0, a.maxWidth - a.paddingX * 2),
    s = n;
  if (e.measureText(s).width > o) {
    let t = Array.from(s),
      n = 0,
      r = t.length;
    for (; n < r;) {
      let i = Math.ceil((n + r) / 2);
      e.measureText(t.slice(0, i).join(``) + `…`).width <= o ? (n = i) : (r = i - 1);
    }
    s = t.slice(0, n).join(``) + `…`;
  }
  let c = Math.min(a.maxWidth, e.measureText(s).width + a.paddingX * 2),
    l = a.lineHeight + a.paddingY * 2;
  ((e.fillStyle = r),
    e.beginPath(),
    e.roundRect(0, 0, c, l, a.borderRadius),
    e.fill(),
    e.clip(),
    (e.fillStyle =
      (a.contrastColors == null
        ? null
        : V(r, a.contrastColors.white, a.contrastColors.black, a.contrastColors.preferWhite)) ?? a.color),
    e.fillText(s, a.paddingX, l / 2),
    e.restore());
}
function xe() {
  return (xe = e(() => {
    ie();
  }))();
}
function Se({
  ref: e,
  threads: t,
  selectedThreadId: n,
  target: r,
  embedded: i = !1,
  labels: a,
  testId: o = `artifact-comments-sidebar`,
  renderThread: s,
  onClose: c,
  onDeselectThread: u,
  onDeleteAll: d,
  closeButton: f,
  emptyIcon: p,
  emptyAction: m,
  filteredEmptyIcon: h,
  renderFilter: g,
  renderHeader: _,
  renderDeleteAllButton: v,
  renderChangeFilterButton: y,
  renderScrollContainer: b,
}) {
  let x = (0, J.useRef)(null),
    S = (0, J.useRef)(null),
    [C, w] = (0, J.useState)(null),
    E = (0, J.useRef)(new WeakSet()),
    O = (0, J.useRef)(() => {});
  ((0, J.useLayoutEffect)(() => {
    O.current = (e, t) => {
      n === t && !E.current.has(e) && u?.();
    };
  }, [n, u]),
    (0, J.useEffect)(() => {
      if (n == null) return;
      let e = !0,
        t = (t) => {
          setTimeout(() => {
            e && O.current(t, n);
          }, 0);
        };
      return (
        document.addEventListener(`click`, t, !0),
        () => {
          ((e = !1), document.removeEventListener(`click`, t, !0));
        }
      );
    }, [n, C, r?.requestId]));
  let A = (0, J.useId)(),
    [M, N] = (0, J.useState)({ requestId: void 0, value: `open` }),
    P = t.find((e) => e.threadId === r?.threadId),
    I = M.requestId === r?.requestId ? M.value : P?.status === `resolved` ? `resolved` : `open`,
    L = (e) => {
      N({ requestId: r?.requestId, value: e });
    },
    [ne, re] = (0, J.useState)(!1),
    z = (0, J.useRef)(new Map());
  ((0, J.useImperativeHandle)(e, () => ({
    focusThread(e) {
      let n = t.find((t) => t.threadId === e);
      n != null && (L(n.status === `resolved` ? `resolved` : `open`), w({ threadId: e }));
    },
  })),
    (0, J.useLayoutEffect)(() => {
      if (C == null) return;
      let e = x.current,
        t = z.current.get(C.threadId);
      if (e == null || t == null || (t.focus({ preventScroll: !0 }), e.offsetHeight === 0)) return;
      let n = e.getBoundingClientRect(),
        r = n.height / e.offsetHeight,
        i = parseFloat(getComputedStyle(e).scrollPaddingTop) || 0;
      e.scrollTo({
        top: e.scrollTop + (t.getBoundingClientRect().top - n.top) / r - e.clientTop - i,
        behavior: `instant`,
      });
    }, [C]));
  let B = t
      .filter((e) => e.comments.some((e) => !e.isDeleted))
      .sort((e, t) => {
        let n = Date.parse(e.comments[0]?.createdAt ?? ``);
        return Date.parse(t.comments[0]?.createdAt ?? ``) - n;
      }),
    V = B.filter((e) => (I === `resolved` ? e.status === `resolved` : e.status !== `resolved`)),
    ie = V.findIndex((e) => e.threadId === n);
  (0, J.useLayoutEffect)(() => {
    let e = x.current,
      t = S.current;
    if (e == null || t == null) return;
    Ce(
      e,
      (r != null && r.threadId === n && r.messageId != null
        ? t.querySelector(`[data-comment-id="${CSS.escape(r.messageId)}"]`)
        : null) ??
        t.querySelector(`[data-comment-reply-composer]:focus-within`) ??
        t,
    );
    let i = () => {
        let n = t.querySelector(`[data-comment-reply-composer]:focus-within`);
        n != null && Ce(e, n);
      },
      a = new ResizeObserver(i);
    return (
      a.observe(t),
      a.observe(e),
      t.addEventListener(`focusin`, i),
      () => {
        (a.disconnect(), t.removeEventListener(`focusin`, i));
      }
    );
  }, [n, ie, I, r]);
  let H = { children: a.showOpen, onClick: () => L(`open`) },
    ae = () => d?.(V),
    oe = {
      ref: x,
      className: l(`min-h-0 flex-1 overflow-y-auto px-2 pb-2`, V.length > 0 && `pt-2`),
      children: (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(`div`, {
            className: `flex flex-col`,
            hidden: V.length === 0,
            children: B.map((e) =>
              (0, Y.jsxs)(
                `div`,
                {
                  ref: (t) => {
                    t == null ? z.current.delete(e.threadId) : z.current.set(e.threadId, t);
                  },
                  tabIndex: -1,
                  hidden: I === `resolved` ? e.status !== `resolved` : e.status === `resolved`,
                  children: [
                    e.threadId !== V[0]?.threadId &&
                      (0, Y.jsx)(fe, {
                        adjacentToSelected:
                          e.threadId === n || (ie >= 0 && e.threadId === V[ie + 1]?.threadId),
                      }),
                    (0, Y.jsx)(`div`, {
                      ref: e.threadId === n ? S : void 0,
                      onClickCapture: (t) => {
                        e.threadId === n && E.current.add(t.nativeEvent);
                      },
                      children: s(e),
                    }),
                  ],
                },
                e.threadId,
              ),
            ),
          }),
          V.length === 0 &&
            (0, Y.jsxs)(`div`, {
              className: l(
                `flex flex-col items-center gap-4 pt-40 text-center text-secondary select-none`,
                B.length === 0 && `px-8`,
              ),
              children: [
                (0, Y.jsx)(`div`, {
                  "aria-hidden": !0,
                  className: `flex size-7 items-center justify-center`,
                  children: B.length === 0 ? (p ?? (0, Y.jsx)(te, {})) : (h ?? (0, Y.jsx)(F, {})),
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-base leading-5`,
                  children:
                    B.length === 0
                      ? a.empty
                      : I === `open`
                        ? a.openEmpty((e) =>
                            (0, Y.jsx)(`button`, {
                              type: `button`,
                              className: `cursor-interaction text-info hover:underline`,
                              onClick: () => L(`resolved`),
                              children: e,
                            }),
                          )
                        : a.filteredEmpty,
                }),
                B.length === 0 &&
                  a.emptyDescription != null &&
                  (0, Y.jsx)(`p`, { className: `text-base leading-5`, children: a.emptyDescription }),
                (B.length === 0 || I === `open`) && m,
                B.length > 0 &&
                  I === `resolved` &&
                  (y == null
                    ? (0, Y.jsx)(`button`, {
                        type: `button`,
                        className: `flex min-h-9 cursor-interaction items-center justify-center rounded-full border border-default px-3 text-base leading-5 font-medium text-default hover:bg-primary-ghost-hover focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring`,
                        ...H,
                      })
                    : y(H)),
              ],
            }),
        ],
      }),
    };
  return (0, Y.jsxs)(ue, {
    labels: a,
    embedded: i,
    testId: o,
    onClose: c,
    closeButton: f,
    header: _?.({
      title: a.heading,
      closeLabel: a.close,
      onClose: c,
      filter: B.length > 0 ? { value: I, onChange: L } : void 0,
    }),
    controls:
      B.length > 0 &&
      (g == null
        ? (0, Y.jsxs)(D, {
            open: ne,
            onOpenChange: re,
            children: [
              (0, Y.jsx)(k, {
                asChild: !0,
                children: (0, Y.jsx)(`button`, {
                  type: `button`,
                  "aria-label": a.filter,
                  className: `flex min-h-7 min-w-7 cursor-interaction items-center justify-center rounded-lg px-1 text-secondary hover:bg-primary-ghost-hover focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring`,
                  children: (0, Y.jsx)(R, {}),
                }),
              }),
              (0, Y.jsx)(j, {
                children: (0, Y.jsx)(T, {
                  align: `end`,
                  sideOffset: 4,
                  className: `z-50 min-w-40 rounded-2xl border border-default bg-surface-elevated-secondary p-1.5 text-default shadow-lg`,
                  children: (0, Y.jsx)(`fieldset`, {
                    "aria-label": a.filter,
                    children: [`open`, `resolved`].map((e) =>
                      (0, Y.jsxs)(
                        `label`,
                        {
                          className: `flex h-9 cursor-interaction items-center gap-1.5 rounded-md px-2 text-base leading-5 focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover`,
                          children: [
                            (0, Y.jsx)(`input`, {
                              type: `radio`,
                              autoFocus: I === e,
                              className: `sr-only`,
                              name: A,
                              value: e,
                              checked: I === e,
                              onChange: () => L(e),
                              onClick: () => re(!1),
                            }),
                            (0, Y.jsx)(`span`, { className: `flex-1`, children: a[e] }),
                            I === e && (0, Y.jsx)(ee, {}),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                }),
              }),
            ],
          })
        : g({ value: I, onChange: L })),
    children: [
      B.length === 0
        ? (0, Y.jsx)(`div`, { "aria-hidden": !0, className: `h-12 shrink-0` })
        : I === `resolved` && V.length > 0
          ? (0, Y.jsx)(`div`, {
              className: `px-2 pb-2`,
              children: (0, Y.jsxs)(`div`, {
                className: `flex h-10 items-center justify-between gap-2 rounded-lg bg-background-secondary-soft px-3 text-base leading-4`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `select-none`,
                    children: a.resolvedCount({
                      count: V.length,
                      label: (e) => (0, Y.jsx)(`span`, { className: `font-medium`, children: e }, `label`),
                    }),
                  }),
                  d != null &&
                    (v == null
                      ? (0, Y.jsx)(`button`, {
                          type: `button`,
                          className: `cursor-interaction rounded-md text-base text-default hover:bg-primary-ghost-hover focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring`,
                          onClick: ae,
                          children: a.deleteAll,
                        })
                      : v(ae)),
                ],
              }),
            })
          : null,
      b == null ? (0, Y.jsx)(`div`, { ...oe }) : b(oe),
    ],
  });
}
function Ce(e, t) {
  if (e.clientHeight === 0 || t.offsetHeight === 0) return;
  let n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect(),
    i = n.height / e.offsetHeight,
    a = getComputedStyle(e),
    o = n.top + (e.clientTop + parseFloat(a.paddingTop)) * i,
    s = n.top + (e.clientTop + e.clientHeight - parseFloat(a.paddingBottom)) * i,
    c = r.top < o ? r.top - o : r.bottom > s ? Math.min(r.top - o, r.bottom - s) : 0;
  c !== 0 && e.scrollTo({ top: e.scrollTop + c / i, behavior: `instant` });
}
var J, Y;
function we() {
  return (we = e(() => {
    (E(), u(), (J = a()), L(), de(), (Y = c()));
  }))();
}
function Te(e, t = new Date()) {
  let n = new Date(e);
  if (Number.isNaN(n.getTime())) return ``;
  let r = Math.max(1, Math.floor((t.getTime() - n.getTime()) / 6e4));
  if (r < 60) return `${r}m`;
  let i = Math.floor(r / 60);
  if (i < 24) return `${i}h`;
  let a = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
    o = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
    s = Math.max(1, Math.round((a.getTime() - o.getTime()) / 864e5));
  return s < 7
    ? `${s}d`
    : s < 30
      ? `${Math.floor(s / 7)}w`
      : s < 365
        ? `${Math.floor(s / 30)}mo`
        : `${Math.floor(s / 365)}y`;
}
function Ee(e = !0) {
  let [t, n] = (0, De.useState)(() => new Date());
  return (
    (0, De.useEffect)(() => {
      if (!e) return;
      let t = globalThis.setInterval(() => {
        n(new Date());
      }, 6e4);
      return () => {
        globalThis.clearInterval(t);
      };
    }, [e]),
    t
  );
}
var De;
function Oe() {
  return (Oe = e(() => {
    De = a();
  }))();
}
function ke({ trigger: e, children: t }) {
  return (0, X.jsxs)(D, {
    children: [
      (0, X.jsx)(k, { asChild: !0, children: e }),
      (0, X.jsx)(j, {
        children: (0, X.jsx)(T, {
          side: `bottom`,
          align: `end`,
          sideOffset: 4,
          collisionPadding: 8,
          className: `z-50 rounded-2xl border border-default bg-surface p-1.5 text-default shadow-lg`,
          onCloseAutoFocus: (e) => e.preventDefault(),
          onPointerDown: (e) => e.stopPropagation(),
          children: t,
        }),
      }),
    ],
  });
}
function Ae({ author: e, authorRole: t, icons: n }) {
  let r = t === `assistant`;
  return (0, X.jsx)(`span`, {
    "aria-hidden": !0,
    className: l(
      `flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-medium select-none`,
      r && `border border-subtle bg-surface`,
      !r && `bg-text/5 text-secondary`,
    ),
    children:
      !r && e?.avatarUrl != null
        ? (0, X.jsx)(`img`, { alt: ``, className: `size-full object-cover`, src: e.avatarUrl })
        : ((r ? n?.assistant : t === `viewer` ? n?.viewer : null) ??
          e?.initials ??
          (e == null ? void 0 : U(e.displayName))),
  });
}
function je({
  comment: e,
  presentation: t,
  threadId: n,
  timestampNow: r,
  isUnread: i,
  hasConnector: a,
  hasPrevious: o = !1,
  isSelected: s,
  selectLabel: c,
  sourceLabelId: u,
  onSelect: d,
  viewerAuthor: f,
  viewerAuthorId: p,
  isResolved: m = !1,
  onToggleResolved: h,
  onDelete: g,
  onToggleReaction: _,
}) {
  let { icons: v, labels: y, renderMetadata: b, formatTimestamp: x, renderDeleteMenu: S } = t,
    C = g != null || _ != null || h != null,
    w = C && s && !o,
    T = C && s && o,
    E = /^@ChatGPT(?=\s|$)/u.exec(e.text),
    D = ce(e.author) ? `assistant` : `other`,
    O = e.editedAt ?? e.createdAt,
    k = x?.(O, r) ?? Te(O, r),
    A = (e) => (0, X.jsx)(`span`, { className: `truncate font-medium text-default`, children: e }, `author`),
    j = (t) =>
      (0, X.jsxs)(
        `time`,
        {
          className: l(
            `truncate text-[length:var(--comment-metadata-font-size,var(--text-sm))] leading-3.5 text-secondary`,
            C && `group-focus-within/comment:hidden`,
            w && `hidden`,
            T && `group-hover/comment:hidden`,
          ),
          dateTime: O,
          children: [t, e.editedAt != null && ` · ${y?.edited ?? `edited`}`],
        },
        `timestamp`,
      ),
    M = (0, X.jsx)(W, {
      avatar: (0, X.jsx)(Ae, { author: e.author, authorRole: D, icons: v }),
      hasPrevious: o,
      hasConnector: !1,
      header: (0, X.jsxs)(`span`, {
        className: l(
          `flex h-6 min-w-0 items-baseline-last gap-1.5 pb-1 text-[length:var(--comment-font-size,var(--text-base))] leading-4 select-none`,
          C && `group-focus-within/comment:pe-20`,
          w && `pe-20`,
          T && `group-hover/comment:pe-20`,
        ),
        children: [
          b?.({ authorName: e.author.displayName, relativeTime: k, author: A, timestamp: j }) ??
            (0, X.jsxs)(X.Fragment, { children: [A(e.author.displayName), j(k)] }),
          i &&
            (0, X.jsx)(`span`, {
              "aria-label": y?.unread ?? `New ChatGPT reply`,
              className: `ms-auto size-2 shrink-0 self-center rounded-full bg-text-info`,
              "data-testid": `artifact-comment-unread-${n}`,
            }),
        ],
      }),
      children: (0, X.jsx)(`p`, {
        className: l(
          `text-[length:var(--comment-font-size,var(--text-base))] leading-5 break-words whitespace-pre-wrap select-text`,
          e.isDeleted ? `text-secondary italic` : `text-default`,
        ),
        children: e.isDeleted
          ? (y?.deletedComment ?? `Comment deleted.`)
          : E == null
            ? (t.renderBody?.(e.text) ?? e.text)
            : (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(`span`, { className: `font-medium text-info`, children: E[0] }),
                  t.renderBody?.(e.text.slice(E[0].length)) ?? e.text.slice(E[0].length),
                ],
              }),
      }),
    });
  return (0, X.jsxs)(`div`, {
    className: `group/comment relative`,
    "data-comment-id": e.id,
    children: [
      a &&
        (0, X.jsx)(`span`, {
          "aria-hidden": !0,
          className: `pointer-events-none absolute start-7 top-11.5 bottom-0 w-px bg-border-subtle`,
        }),
      (0, X.jsx)(`button`, {
        type: `button`,
        "aria-describedby": u,
        "aria-label": c,
        "aria-pressed": s,
        className: `relative flex w-full cursor-interaction flex-col rounded-2xl text-start focus-visible:outline-2 focus-visible:outline-ring`,
        onClick: d,
        children: M,
      }),
      C &&
        (0, X.jsx)(Ne, {
          isSelected: w,
          showOnHover: T,
          isResolved: m,
          onToggleResolved: h,
          onDelete: g,
          onToggleReaction: _,
          icons: v,
          labels: y,
          menuLabel: o ? (y?.commentActions ?? `Comment actions`) : (y?.menu ?? `Thread actions`),
          deleteLabel: o ? (y?.deleteComment ?? `Delete`) : (y?.delete ?? `Delete`),
          renderDeleteMenu: S,
        }),
      !e.isDeleted &&
        e.reactions.length > 0 &&
        (0, X.jsx)(`div`, {
          className: `flex flex-wrap items-center gap-1.5 ps-12.5 pe-3 pb-2`,
          children: e.reactions.map((e) => {
            let t =
                f?.id == null
                  ? f?.userId != null && f.providerId != null
                    ? (e.authors?.some((e) => e.userId === f.userId && e.providerId === f.providerId) ?? !1)
                    : p != null && e.authorIds.includes(p)
                  : e.authorIds.includes(f.id),
              n = l(
                `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs leading-4`,
                t ? `bg-background-secondary-soft text-info` : `bg-primary-ghost-hover text-secondary`,
              );
            return _ == null
              ? (0, X.jsx)(`span`, { className: n, children: `${e.type} ${e.count}` }, e.type)
              : (0, X.jsx)(
                  `button`,
                  {
                    type: `button`,
                    className: n,
                    "aria-pressed": t,
                    onClick: () => _(e.type),
                    children: `${e.type} ${e.count}`,
                  },
                  e.type,
                );
          }),
        }),
    ],
  });
}
function Me({ threadId: e, icons: t, labels: n }) {
  return (0, X.jsx)(W, {
    "data-testid": `artifact-comment-thinking-${e}`,
    avatar: (0, X.jsx)(Ae, { authorRole: `assistant`, icons: t }),
    hasPrevious: !0,
    hasConnector: !1,
    header: (0, X.jsx)(`span`, {
      className: `flex h-6 items-end pb-1 text-[length:var(--comment-font-size,var(--text-base))] leading-4 font-medium select-none`,
      children: n?.assistantName ?? `ChatGPT`,
    }),
    children: (0, X.jsx)(`span`, {
      className: `loading-shimmer-pure-text self-start text-[length:var(--comment-font-size,var(--text-base))] leading-5 select-none`,
      role: `status`,
      children: n?.thinking ?? `Thinking`,
    }),
  });
}
function Ne({
  isSelected: e,
  showOnHover: n,
  isResolved: r,
  onToggleResolved: i,
  onDelete: a,
  onToggleReaction: o,
  menuLabel: s,
  deleteLabel: c,
  icons: u,
  labels: d,
  renderDeleteMenu: f,
}) {
  let p = r ? (d?.reopen ?? `Reopen thread`) : (d?.resolve ?? `Resolve thread`),
    m = (0, X.jsx)(`button`, {
      type: `button`,
      "aria-label": s,
      className: `flex size-6 cursor-interaction items-center justify-center rounded-full text-secondary select-none no-drag hover:bg-primary-ghost-hover focus-visible:outline-2 focus-visible:outline-ring`,
      children: u?.menu ?? (0, X.jsx)(z, {}),
    });
  return (0, X.jsxs)(`div`, {
    className: l(
      `absolute end-2 top-3 flex gap-0.5`,
      !e &&
        `pointer-events-none opacity-0 group-focus-within/comment:pointer-events-auto group-focus-within/comment:opacity-100`,
      n && `group-hover/comment:pointer-events-auto group-hover/comment:opacity-100`,
    ),
    children: [
      a != null &&
        (f == null
          ? (0, X.jsx)(ke, {
              trigger: m,
              children: (0, X.jsx)(t, {
                asChild: !0,
                children: (0, X.jsxs)(`button`, {
                  type: `button`,
                  className: `flex h-9 min-w-40 cursor-interaction items-center gap-1.5 rounded-md px-2 text-start text-base select-none hover:bg-primary-ghost-hover`,
                  onClick: a,
                  children: [u?.delete ?? (0, X.jsx)(I, {}), c],
                }),
              }),
            })
          : f({ trigger: m, onDelete: a, label: c })),
      o != null &&
        (0, X.jsx)(ke, {
          trigger: (0, X.jsx)(`button`, {
            type: `button`,
            "aria-label": d?.addReaction ?? `Add reaction`,
            className: `flex size-6 cursor-interaction items-center justify-center rounded-full text-secondary select-none no-drag hover:bg-primary-ghost-hover focus-visible:outline-2 focus-visible:outline-ring`,
            children: u?.addReaction ?? (0, X.jsx)(B, {}),
          }),
          children: (0, X.jsx)(`div`, {
            className: `flex items-center gap-1`,
            children: Pe.map((e) =>
              (0, X.jsx)(
                t,
                {
                  asChild: !0,
                  children: (0, X.jsx)(`button`, {
                    type: `button`,
                    className: `flex size-8 cursor-interaction items-center justify-center rounded-lg text-lg hover:bg-primary-ghost-hover`,
                    onClick: () => o(e),
                    children: e,
                  }),
                },
                e,
              ),
            ),
          }),
        }),
      i != null &&
        (0, X.jsx)(`button`, {
          type: `button`,
          "aria-label": p,
          title: p,
          className: `flex size-6 cursor-interaction items-center justify-center rounded-full text-secondary select-none no-drag hover:bg-primary-ghost-hover focus-visible:outline-2 focus-visible:outline-ring`,
          onClick: i,
          children: u?.resolve ?? (0, X.jsx)(ee, {}),
        }),
    ],
  });
}
var X, Pe;
function Fe() {
  return (Fe = e(() => {
    (E(), u(), L(), Oe(), le(), (X = c()), (Pe = [`👍`, `❤️`, `👀`, `✅`]));
  }))();
}
function Ie({
  thread: e,
  borderless: t = !1,
  preview: n = !1,
  expandRepliesRequestId: r,
  isSelected: i = !1,
  expandRepliesOnSelect: a = !1,
  isUnread: o = !1,
  isPending: s = !1,
  icons: c,
  labels: u,
  renderBody: d,
  renderMetadata: f,
  formatTimestamp: p,
  repliesToggleLabel: m,
  renderDeleteMenu: h,
  viewerAuthor: g,
  viewerAuthorId: _ = e.viewerAuthorId,
  sourceLabel: v,
  selectLabel: y,
  selectRepliesLabel: b,
  timestampNow: x,
  onReply: S,
  onResolve: C,
  onReopen: w,
  onDelete: T,
  onDeleteComment: E,
  onToggleReaction: D,
  replyComposer: O,
  canAssignToChatGpt: k,
  canDeleteOthersComments: A = !0,
  renderReplyInput: j,
  onHover: M,
  onSelect: N,
}) {
  let P = (0, Z.useId)(),
    [F, I] = (0, Z.useState)({ requestId: void 0, expanded: !1 }),
    L = F.requestId === r ? F.expanded : r != null,
    R = a && r == null ? i : L,
    [ee, te] = (0, Z.useState)(``),
    [ne, re] = (0, Z.useState)(),
    z = Ee(p == null && x == null),
    B = e.comments,
    V = e.status === `resolved`,
    ie = V ? w : C,
    H = B[0],
    ae = H != null && (/^@ChatGPT(?=\s|$)/u.test(H.text) || ce(H.author)),
    oe = { icons: c, labels: u, renderBody: d, renderMetadata: f, formatTimestamp: p, renderDeleteMenu: h },
    se = x ?? z,
    le =
      O === void 0 && S != null
        ? (0, Q.jsx)(_e, {
            mode: `reply`,
            canAssignToChatGpt: k,
            disabled: s,
            renderInput: j,
            value: ee,
            onChange: te,
            assignedToChatGpt: ne ?? ae,
            onAssignmentChange: re,
            onSubmit: ({ body: e, assignedToChatGpt: t }) =>
              !s && S(t && !/^@ChatGPT(?:\s|$)/u.test(e) ? `@ChatGPT ${e}` : e),
          })
        : O,
    U = B.slice(1),
    W = s ? U.length : Math.max(0, U.length - 1),
    ue = R ? U : s ? [] : U.slice(-1),
    de = i && !n && !V && le != null,
    fe = () => {
      if (i) {
        (M?.(null), N(null));
        return;
      }
      N(e.threadId);
    },
    pe = g?.id ?? _,
    G = (e) =>
      A ||
      (g?.userId == null
        ? pe != null && e.author.id === pe
        : g.providerId != null && e.author.userId === g.userId && e.author.providerId === g.providerId),
    me = (e) => {
      let t;
      return (
        !n &&
          G(e) &&
          (e === H && T != null && B.every(G) ? (t = T) : !e.isDeleted && E != null && (t = () => E(e.id))),
        {
          viewerAuthor: g,
          viewerAuthorId: _,
          onDelete: t,
          onToggleReaction: !n && !e.isDeleted && D != null ? (t) => D(e.id, t) : void 0,
        }
      );
    };
  return (0, Q.jsxs)(`article`, {
    "aria-describedby": P,
    className: l(
      `group relative`,
      t
        ? `rounded-2xl`
        : `rounded-[calc(var(--radius-2xl)-var(--spacing)*2)] [corner-shape:var(--codex-corner-shape,round)]`,
      !t && i && `bg-background-secondary-soft`,
      !i && `hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover`,
    ),
    "data-testid": `artifact-comment-thread-${e.threadId}`,
    onMouseEnter: () => M?.(e.threadId),
    onMouseLeave: () => M?.(null),
    onFocus: () => M?.(e.threadId),
    onBlur: (e) => {
      e.currentTarget.contains(e.relatedTarget) || M?.(null);
    },
    children: [
      (0, Q.jsx)(`span`, { id: P, className: `sr-only`, children: v }),
      (0, Q.jsxs)(`div`, {
        className: `relative`,
        children: [
          H != null &&
            (0, Q.jsx)(je, {
              comment: H,
              presentation: oe,
              threadId: e.threadId,
              timestampNow: se,
              isUnread: o && B.length === 1,
              isResolved: V,
              onToggleResolved: n ? void 0 : ie,
              hasConnector: B.length > 1 || s || de,
              isSelected: i,
              selectLabel: y,
              sourceLabelId: P,
              onSelect: fe,
              ...me(H),
            }),
          W > 0 &&
            !(a && i && r == null) &&
            (0, Q.jsxs)(`div`, {
              className: `relative flex h-9 items-center ps-12.5 pe-2`,
              children: [
                (0, Q.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `pointer-events-none absolute start-7 top-0 bottom-0 w-px bg-border-subtle`,
                }),
                (0, Q.jsx)(`button`, {
                  type: `button`,
                  "aria-expanded": R,
                  className: `flex h-8 cursor-interaction items-center rounded-md px-2 text-base leading-5 text-secondary select-none no-drag hover:bg-primary-ghost-hover focus-visible:outline-2 focus-visible:outline-ring`,
                  onClick: () => {
                    n || (a && r == null) ? N(e.threadId) : I({ requestId: r, expanded: !R });
                  },
                  children: m?.(R, W) ?? (R ? `Hide replies` : `Show ${W} ${W === 1 ? `reply` : `replies`}`),
                }),
              ],
            }),
          ue.map((t, n) =>
            (0, Q.jsx)(
              je,
              {
                comment: t,
                presentation: oe,
                threadId: e.threadId,
                timestampNow: se,
                isUnread: o && n === ue.length - 1,
                hasConnector: n < ue.length - 1 || s || de,
                hasPrevious: !0,
                isSelected: i,
                selectLabel: b,
                sourceLabelId: P,
                onSelect: fe,
                ...me(t),
              },
              t.id,
            ),
          ),
          s &&
            (0, Q.jsx)(`button`, {
              type: `button`,
              "aria-describedby": P,
              "aria-label": b,
              "aria-pressed": i,
              className: `relative flex w-full cursor-interaction flex-col rounded-2xl text-start focus-visible:outline-2 focus-visible:outline-ring`,
              onClick: fe,
              children: (0, Q.jsx)(Me, { threadId: e.threadId, icons: c, labels: u }),
            }),
        ],
      }),
      de &&
        (0, Q.jsxs)(`div`, {
          className: `relative flex items-start gap-2.5 ps-4 pe-3 pt-2 pb-3`,
          "data-comment-reply-composer": !0,
          hidden: s,
          children: [
            (0, Q.jsx)(`span`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute start-7 top-0 h-2.5 w-px bg-border-subtle`,
            }),
            (0, Q.jsx)(`div`, {
              className: `pt-1.5`,
              children: (0, Q.jsx)(Ae, { author: g, authorRole: `viewer`, icons: c }),
            }),
            (0, Q.jsx)(`div`, { className: `min-w-0 flex-1`, children: le }),
          ],
        }),
    ],
  });
}
var Z, Q;
function Le() {
  return (Le = e(() => {
    (u(), (Z = a()), Oe(), ye(), Fe(), (Q = c()));
  }))();
}
function Re(e) {
  let t = (0, He.c)(14),
    { title: n, closeLabel: r, filter: a, onClose: o, addCommentButtonProps: s } = e,
    c = O(),
    l;
  t[0] !== s || t[1] !== c
    ? ((l =
        s != null &&
        (0, $.jsx)(x, {
          ...s,
          "aria-label": c.formatMessage({
            id: `artifactComments.addComment`,
            defaultMessage: `Add comment`,
            description: `Accessible label for opening a new floating comment on the current selection or slide`,
          }),
          color: `ghostSecondary`,
          size: `formatToolbar`,
          uniform: !0,
          onMouseDown: ze,
          children: (0, $.jsx)(i, { asset: p }),
        })),
      (t[0] = s),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== a || t[4] !== c
    ? ((u =
        a != null &&
        (0, $.jsx)(P, {
          align: `end`,
          contentWidth: `sidebar`,
          triggerButton: (0, $.jsx)(x, {
            "aria-label": c.formatMessage({
              id: `artifactComments.filterLabel`,
              defaultMessage: `Filter comments`,
              description: `Accessible label for the menu that filters artifact comments by open or resolved status`,
            }),
            color: `ghostSecondary`,
            size: `formatToolbar`,
            uniform: !0,
            children: (0, $.jsx)(_, {}),
          }),
          children: (0, $.jsxs)(A.RadioGroup, {
            value: a.value,
            onValueChange: (e) => {
              (e === `open` || e === `resolved`) && a.onChange(e);
            },
            children: [
              (0, $.jsx)(A.RadioItem, {
                value: `open`,
                variant: `chatgpt`,
                children: (0, $.jsx)(M, {
                  id: `artifactComments.filterOpen`,
                  defaultMessage: `Open`,
                  description: `Filter option showing artifact comment threads that have not been resolved`,
                }),
              }),
              (0, $.jsx)(A.RadioItem, {
                value: `resolved`,
                variant: `chatgpt`,
                children: (0, $.jsx)(M, {
                  id: `artifactComments.filterResolved`,
                  defaultMessage: `Resolved`,
                  description: `Filter option showing resolved artifact comment threads`,
                }),
              }),
            ],
          }),
        })),
      (t[3] = a),
      (t[4] = c),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== l || t[7] !== u
    ? ((d = (0, $.jsxs)($.Fragment, { children: [l, u] })), (t[6] = l), (t[7] = u), (t[8] = d))
    : (d = t[8]);
  let f;
  return (
    t[9] !== r || t[10] !== o || t[11] !== d || t[12] !== n
      ? ((f = (0, $.jsx)(w, { title: n, closeLabel: r, onClose: o, actions: d })),
        (t[9] = r),
        (t[10] = o),
        (t[11] = d),
        (t[12] = n),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function ze(e) {
  return e.preventDefault();
}
function Be(e) {
  let t = (0, He.c)(3),
    { buttonProps: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(M, {
        id: `artifactComments.addCommentAction`,
        defaultMessage: `Add comment`,
        description: `Button in the empty comments panel that opens a floating comment input on the current selection or slide`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, $.jsx)(x, { ...n, color: `outline`, size: `dialog`, onMouseDown: Ve, children: r })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function Ve(e) {
  return e.preventDefault();
}
var He, $;
function Ue() {
  return (Ue = e(() => {
    ((He = f()), n(), y(), S(), C(), d(), m(), b(), ($ = c()));
  }))();
}
export {
  Le as a,
  Se as c,
  xe as d,
  _e as f,
  ge as g,
  pe as h,
  Ie as i,
  we as l,
  ye as m,
  Re as n,
  Oe as o,
  ve as p,
  Ue as r,
  Ee as s,
  Be as t,
  be as u,
};
//# sourceMappingURL=artifact-comments-header-2d72a86f659a.js.map
