import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AB as t,
  CY as n,
  FBt as r,
  FNt as i,
  GO as a,
  JO as o,
  JOt as s,
  LNt as c,
  MNt as l,
  NNt as u,
  PBt as d,
  TY as f,
  WO as p,
  XOt as m,
  kB as h,
  okt as g,
  qO as _,
  tkt as v,
} from "./app-shared-2feb3d4c6fcc.js";
import { Aut as y, But as b, EMt as x, NMt as S, kut as C, zut as w } from "./app-initial-ad16eaadf81f.js";
import { n as T, t as E } from "./secure-form-status-1e957f282453.js";
import { d as D, i as O, p as k, r as A, x as j } from "./shell-c0663a3963e3.js";
import { n as ee, r as M, t as te } from "./layout-f34dfbca94ae.js";
function N() {
  "use forget";
  let e = (0, P.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, F.jsx)(`span`, {
        className: `sr-only`,
        children: (0, F.jsx)(v, {
          id: `chatgpt.inline_credit_checkout.loading.label`,
          defaultMessage: `Loading checkout`,
          description: `Screen-reader status in the small Add credits sheet anchored to a conversation button. Announces that the purchase options or saved payment method are loading; no payment has been submitted. Short, reassuring status label.`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = Array.from({ length: 3 }, ne)), (e[1] = n))
    : (n = e[1]);
  let r;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, F.jsxs)(`div`, {
          role: `status`,
          "aria-busy": `true`,
          className: `flex min-h-40 flex-col gap-1`,
          children: [
            t,
            (0, F.jsxs)(`div`, {
              "aria-hidden": `true`,
              className: `flex flex-col gap-1 motion-safe:animate-pulse`,
              children: [
                n,
                (0, F.jsx)(`div`, {
                  className: `mt-1 flex min-h-10 items-center rounded-xl border border-token-border-default px-3`,
                  children: (0, F.jsx)(`span`, { className: `h-3 w-24 rounded bg-text/10` }),
                }),
              ],
            }),
          ],
        })),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function ne(e, t) {
  return (0, F.jsxs)(
    `div`,
    {
      className:
        t === 2
          ? `bg-token-interactive-bg-secondary-selected flex min-h-9 items-center gap-2 rounded-xl px-2 py-1.5`
          : `flex min-h-9 items-center gap-2 rounded-xl px-2 py-1.5`,
      children: [
        (0, F.jsx)(`span`, { className: `h-3 w-10 shrink-0 rounded bg-text/10` }),
        (0, F.jsx)(`span`, { className: `h-3 w-20 rounded bg-text/10` }),
        t === 2 ? (0, F.jsx)(`span`, { className: `ms-auto h-5 w-14 rounded-md bg-text/10` }) : null,
      ],
    },
    t,
  );
}
function re() {
  "use forget";
  let e = (0, P.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, F.jsxs)(`div`, {
        className: `flex min-h-[18px] items-center justify-between gap-2 text-token-text-tertiary`,
        children: [
          (0, F.jsx)(v, {
            id: `chatgpt.inline_credit_checkout.summary.subtotal.label`,
            defaultMessage: `Subtotal`,
            description: `Short label for the selected credit purchase amount after discounts and before tax in the inline checkout summary. The credit quantity and discount are shown in the amount selector above.`,
          }),
          (0, F.jsx)(`span`, { className: `h-3 w-14 rounded bg-text/10` }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, F.jsxs)(`div`, {
        className: `flex min-h-[18px] items-center justify-between gap-2 text-token-text-tertiary`,
        children: [
          (0, F.jsx)(v, {
            id: `chatgpt.inline_credit_checkout.summary.tax.loading.label`,
            defaultMessage: `Tax`,
            description: `Short placeholder label for tax while the inline credit checkout waits for the authoritative tax quote.`,
          }),
          (0, F.jsx)(`span`, { className: `h-3 w-12 rounded bg-text/10` }),
        ],
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, F.jsxs)(`div`, {
          "aria-hidden": `true`,
          "data-testid": `inline-credit-review-summary-skeleton`,
          className: `flex flex-col gap-1 px-2 pt-1 text-[13px] leading-[18px] tracking-[-0.08px] motion-safe:animate-pulse`,
          children: [
            t,
            n,
            (0, F.jsxs)(`div`, {
              className: `flex min-h-[18px] items-center justify-between gap-2 font-medium text-token-text-primary`,
              children: [
                (0, F.jsx)(v, {
                  id: `chatgpt.inline_credit_checkout.summary.total.label`,
                  defaultMessage: `Total due`,
                  description: `Short label for the final amount charged now for the selected credits in inline checkout, including tax and any balance adjustments.`,
                }),
                (0, F.jsx)(`span`, { className: `h-3 w-16 rounded bg-text/10` }),
              ],
            }),
          ],
        })),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = d()), m(), (F = c()));
  }))();
}
function ie(e) {
  let t = (0, L.c)(8),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ button: n, disclaimer: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsxs)(`div`, {
          ...i,
          className: `flex flex-col gap-[var(--credit-checkout-modal-actions-gap,12px)]`,
          children: [n, r],
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function ae(e) {
  let t = (0, L.c)(3),
    { pending: n, children: r } = e,
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = n ? (0, R.jsx)(w, {}) : (0, R.jsx)(`span`, { children: r })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function oe({
  amountMinorUnits: e,
  currencyCode: t,
  intl: n,
  message: r = s({
    id: `CheckoutForm.buttonPayAmount`,
    defaultMessage: `Pay {amount}`,
    description: `Primary purchase button label in the standalone credit checkout modal. The amount is the current server-calculated checkout total in the billing currency.`,
  }),
}) {
  let i = x(t);
  return n.formatMessage(r, {
    amount: n.formatNumber(e / 10 ** i, {
      currency: t,
      style: `currency`,
      minimumFractionDigits: i,
      maximumFractionDigits: i,
    }),
  });
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = d()), m(), S(), b(), (R = c()));
  }))();
}
function B(e) {
  if (!(e instanceof HTMLIFrameElement) || !e.name.startsWith(`__privateStripeFrame`)) return !1;
  try {
    let { origin: t } = new URL(e.src);
    return t === `https://js.stripe.com` || t === `https://hooks.stripe.com`;
  } catch {
    return !1;
  }
}
function se(e) {
  return e.tagName === `DIALOG` && e.dataset.stripeBackdropId?.startsWith(`__stripeBackdrop`) === !0;
}
function ce(e) {
  return e.tagName === `DIV` && e.style.position === `fixed` && e.style.zIndex === `2147483647`;
}
function le(e) {
  return e.tagName === `COM-1PASSWORD-BUTTON` || e.tagName === `COM-1PASSWORD-MENU` || B(e)
    ? !0
    : se(e)
      ? Array.from(e.querySelectorAll(`iframe`)).some(B)
      : e.tagName !== `DIV` || e.style.position !== `fixed`
        ? !1
        : e.dataset.testid === `overlay` &&
            e.style.zIndex === `9999999` &&
            e.style.pointerEvents === `auto` &&
            [`top`, `right`, `bottom`, `left`].every((t) => e.style.getPropertyValue(t) === `0px`)
          ? !0
          : ce(e) && Array.from(e.children).some(B);
}
function ue(e, t) {
  let n = e.ownerDocument,
    r = new Set(),
    i = new Map(),
    a = new Set(),
    o = (e) => e.stopPropagation(),
    s = (e) => {
      a.delete(e) && (e.removeEventListener(`wheel`, o), e.removeEventListener(`touchmove`, o));
      let t = i.get(e);
      t != null && (e.style.pointerEvents === `auto` && (e.style.pointerEvents = t), i.delete(e));
    },
    c = (c) => {
      if (!(
        !(c instanceof HTMLElement) ||
        c === e ||
        c === t ||
        c.contains(e) ||
        [`SCRIPT`, `STYLE`, `LINK`].includes(c.tagName)
      )) {
        if (
          ((c instanceof HTMLIFrameElement || se(c) || ce(c)) &&
            l.observe(c, { childList: !0, subtree: !0, attributes: !0, attributeFilter: [`src`, `name`] }),
          le(c))
        ) {
          (a.has(c) || (a.add(c), c.addEventListener(`wheel`, o), c.addEventListener(`touchmove`, o)),
            !i.has(c) &&
              n.defaultView?.getComputedStyle(c).pointerEvents === `none` &&
              (i.set(c, c.style.pointerEvents), (c.style.pointerEvents = `auto`)),
            r.delete(c) && c.getAttribute(`inert`) === `` && c.removeAttribute(`inert`));
          return;
        }
        (s(c), !c.hasAttribute(`inert`) && (c.setAttribute(`inert`, ``), r.add(c)));
      }
    },
    l = new MutationObserver((e) => {
      for (let t of e) {
        if (t.target instanceof Element) {
          let e = t.target.closest(`body > *`);
          e != null && c(e);
        }
        for (let e of t.addedNodes) e instanceof Element && e.parentElement === n.body && c(e);
      }
    });
  for (let e of n.body.children) c(e);
  return (
    l.observe(n.body, { childList: !0 }),
    () => {
      l.disconnect();
      for (let e of a) s(e);
      for (let e of r) e.getAttribute(`inert`) === `` && e.removeAttribute(`inert`);
      r.clear();
    }
  );
}
function de(e) {
  let t = e instanceof Element ? e.closest(`body > *`) : null;
  return t instanceof HTMLElement && le(t);
}
function V(e, t) {
  let n = Array.from(
    e.querySelectorAll(
      `a[href], button, input, select, textarea, iframe, [tabindex], [contenteditable="true"]`,
    ),
  ).filter(
    (e) =>
      e.tabIndex >= 0 &&
      !e.hasAttribute(`data-checkout-focus-guard`) &&
      !e.matches(`:disabled`) &&
      e.closest(`[inert]`) == null &&
      e.getClientRects().length > 0,
  );
  (n.sort((e, t) => (e.tabIndex || 1 / 0) - (t.tabIndex || 1 / 0)),
    ((t === `first` ? n[0] : n[n.length - 1]) ?? e).focus({ preventScroll: !0 }));
}
function fe(e) {
  let t = (0, he.c)(43),
    { isOpen: n, disableClose: r, onClose: i, labelledBy: a, lockScroll: o, children: s, hostRef: c } = e,
    u = o !== void 0 && o,
    d = (0, H.useRef)(null),
    f = c ?? d,
    p = (0, H.useRef)(null),
    m = (0, H.useRef)(0),
    h;
  t[0] !== f.current || t[1] !== n || t[2] !== u
    ? ((h = () => {
        let e = f.current;
        if (e == null) return;
        let t = e.ownerDocument,
          r = () => {
            let n = p.current;
            n?.isConnected &&
              (e.contains(t.activeElement) || t.activeElement === t.body) &&
              n.focus({ preventScroll: !0 });
          };
        if (!n) {
          (r(), (p.current = null));
          return;
        }
        let i = t.activeElement;
        ((p.current = i instanceof HTMLElement ? i : null), e.show());
        let a = ue(e),
          o = t.body.style.overflow,
          s = me;
        return (
          u &&
            ((t.body.style.overflow = `hidden`),
            e.addEventListener(`wheel`, s),
            e.addEventListener(`touchmove`, s)),
          V(e, `first`),
          () => {
            (a(),
              e.open && ((m.current += 1), e.close()),
              u &&
                (e.removeEventListener(`wheel`, s),
                e.removeEventListener(`touchmove`, s),
                t.body.style.overflow === `hidden` && (t.body.style.overflow = o)),
              r());
          }
        );
      }),
      (t[0] = f.current),
      (t[1] = n),
      (t[2] = u),
      (t[3] = h))
    : (h = t[3]);
  let g;
  (t[4] !== f || t[5] !== n || t[6] !== u
    ? ((g = [f, n, u]), (t[4] = f), (t[5] = n), (t[6] = u), (t[7] = g))
    : (g = t[7]),
    (0, H.useLayoutEffect)(h, g));
  let _ = n ? a : void 0,
    v = !n || void 0,
    y = !n,
    b;
  t[8] === r
    ? (b = t[9])
    : ((b = (e) => {
        e.target === e.currentTarget && (e.stopPropagation(), r && e.preventDefault());
      }),
      (t[8] = r),
      (t[9] = b));
  let x;
  t[10] !== n || t[11] !== i
    ? ((x = (e) => {
        if (e.target === e.currentTarget) {
          if ((e.stopPropagation(), m.current > 0)) {
            --m.current;
            return;
          }
          n && !e.currentTarget.open && i();
        }
      }),
      (t[10] = n),
      (t[11] = i),
      (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] !== r || t[14] !== n || t[15] !== i
    ? ((S = n
        ? (e) => {
            !e.defaultPrevented &&
              e.target instanceof Element &&
              e.target.closest(`dialog, [role="dialog"], [role="alertdialog"]`) === e.currentTarget &&
              (e.key === `Escape`
                ? (e.preventDefault(), e.stopPropagation(), r || i())
                : e.key === `Enter` && e.stopPropagation());
          }
        : void 0),
      (t[13] = r),
      (t[14] = n),
      (t[15] = i),
      (t[16] = S))
    : (S = t[16]);
  let C = n ? `pointer-events-auto` : `pointer-events-none opacity-0`,
    w;
  t[17] === C
    ? (w = t[18])
    : ((w = l(
        `group/dialog @container fixed inset-0 z-50 m-0 block h-full max-h-none w-full max-w-none cursor-default border-0 bg-transparent p-0 whitespace-normal outline-hidden`,
        C,
      )),
      (t[17] = C),
      (t[18] = w));
  let T = n ? 0 : -1,
    E;
  t[19] !== f.current || t[20] !== n
    ? ((E = () => n && f.current && V(f.current, `last`)), (t[19] = f.current), (t[20] = n), (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== T || t[23] !== E
    ? ((D = (0, U.jsx)(`span`, {
        tabIndex: T,
        "data-checkout-focus-guard": !0,
        className: `sr-only`,
        onFocus: E,
      })),
      (t[22] = T),
      (t[23] = E),
      (t[24] = D))
    : (D = t[24]);
  let O = n ? 0 : -1,
    k;
  t[25] !== f.current || t[26] !== n
    ? ((k = () => n && f.current && V(f.current, `first`)), (t[25] = f.current), (t[26] = n), (t[27] = k))
    : (k = t[27]);
  let A;
  t[28] !== O || t[29] !== k
    ? ((A = (0, U.jsx)(`span`, {
        tabIndex: O,
        "data-checkout-focus-guard": !0,
        className: `sr-only`,
        onFocus: k,
      })),
      (t[28] = O),
      (t[29] = k),
      (t[30] = A))
    : (A = t[30]);
  let j;
  return (
    t[31] !== s ||
    t[32] !== f ||
    t[33] !== w ||
    t[34] !== D ||
    t[35] !== A ||
    t[36] !== _ ||
    t[37] !== v ||
    t[38] !== y ||
    t[39] !== b ||
    t[40] !== x ||
    t[41] !== S
      ? ((j = (0, U.jsxs)(`dialog`, {
          ref: f,
          "aria-labelledby": _,
          "aria-hidden": v,
          inert: y,
          tabIndex: -1,
          onCancel: b,
          onClose: x,
          onSubmit: pe,
          onKeyDown: S,
          className: w,
          children: [D, s, A],
        })),
        (t[31] = s),
        (t[32] = f),
        (t[33] = w),
        (t[34] = D),
        (t[35] = A),
        (t[36] = _),
        (t[37] = v),
        (t[38] = y),
        (t[39] = b),
        (t[40] = x),
        (t[41] = S),
        (t[42] = j))
      : (j = t[42]),
    j
  );
}
function pe(e) {
  return e.stopPropagation();
}
function me(e) {
  return e.stopPropagation();
}
var he, H, U;
function ge() {
  return (ge = e(() => {
    ((he = d()), u(), (H = r()), (U = c()));
  }))();
}
function W() {
  return (W = e(() => {
    (M(), z(), j(), ge());
  }))();
}
var _e, ve, G;
function ye() {
  return (ye = e(() => {
    ((_e = `_creditPositioner_1mbwt_1`),
      (ve = `_creditContent_1mbwt_11`),
      (G = { creditPositioner: _e, creditContent: ve }));
  }))();
}
function be(e) {
  let t = (0, K.c)(5),
    { children: n, isNewCardSelected: r, target: i, onNewCardSelected: a } = e,
    o = r === void 0 || r,
    s;
  return (
    t[0] !== n || t[1] !== o || t[2] !== a || t[3] !== i
      ? ((s =
          i == null
            ? null
            : (0, J.createPortal)(
                (0, Y.jsx)(`div`, {
                  ref: (e) => {
                    e != null && a(o);
                  },
                  children: n,
                }),
                i,
              )),
        (t[0] = n),
        (t[1] = o),
        (t[2] = a),
        (t[3] = i),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function xe(e) {
  let r = (0, K.c)(28),
    { busy: i, visible: o, onClose: s, children: c, footerRef: u, isNewCardSelected: d } = e,
    f = o === void 0 || o,
    m = t(),
    h = g(),
    y = (0, q.useId)(),
    b = (0, q.useRef)(null),
    [x, S] = (0, q.useState)(null),
    C;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Y.jsx)(v, {
        id: `StandaloneCreditCheckoutModal.title`,
        defaultMessage: `Add credits`,
        description: `Heading for the modal that purchases usage credits for the current account`,
      })),
      (r[0] = C))
    : (C = r[0]);
  let w = C,
    T;
  r[1] !== i || r[2] !== s || r[3] !== f
    ? ((T = f
        ? (0, Y.jsx)(p, {
            open: !0,
            modal: !1,
            contentPosition: `inline`,
            showDialogClose: !1,
            contentProps: {
              hidden: !0,
              "aria-describedby": void 0,
              onOpenAutoFocus: (e) => {
                (e.preventDefault(), b.current?.focus({ preventScroll: !0 }));
              },
              onCloseAutoFocus: Ce,
              onFocusOutside: Se,
              onEscapeKeyDown: (e) => {
                e.preventDefault();
                let t =
                  e.target instanceof Element
                    ? e.target.closest(`dialog, [role="dialog"], [role="alertdialog"]`)
                    : null;
                !i && !de(e.target) && (t == null || t === b.current) && s();
              },
              onPointerDownOutside: (e) => {
                let t = e.detail.originalEvent,
                  n = e.target instanceof Element ? e.target : null,
                  r = n?.closest(`dialog, [role="dialog"], [role="alertdialog"]`);
                (i ||
                  n?.isConnected === !1 ||
                  de(e.target) ||
                  n?.closest(`[data-stripe-checkout-dialog]`) != null ||
                  (r != null && r !== b.current) ||
                  t.button === 2 ||
                  (t.button === 0 && t.ctrlKey)) &&
                  e.preventDefault();
              },
            },
            onOpenChange: (e) => {
              !e && !i && s();
            },
            children: (0, Y.jsx)(_, { children: w }),
          })
        : null),
      (r[1] = i),
      (r[2] = s),
      (r[3] = f),
      (r[4] = T))
    : (T = r[4]);
  let E;
  r[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Y.jsx)(a, { variant: `creditCheckout` })), (r[5] = E))
    : (E = r[5]);
  let O = !!m,
    k;
  r[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = l(
        `pointer-events-auto relative flex max-w-[500px] flex-col rounded-3xl bg-[var(--checkout-bg-primary)] text-start shadow-xl ring-1 ring-[var(--checkout-border-default)] focus:outline-hidden`,
        `max-h-[min(758px,calc(100dvh/var(--codex-window-zoom)-20px))] md:max-h-[min(758px,calc(100dvh/var(--codex-window-zoom)-40px))]`,
        G.creditContent,
      )),
      (r[6] = k))
    : (k = r[6]);
  let A;
  r[7] !== i || r[8] !== h || r[9] !== s
    ? ((A = i
        ? null
        : (0, Y.jsx)(`button`, {
            type: `button`,
            onClick: s,
            className: `absolute end-4 top-4 flex size-9 items-center justify-center rounded-lg text-token-text-secondary hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring`,
            "aria-label": h.formatMessage({
              id: `codex.dialog.closeButton`,
              defaultMessage: `Close dialog`,
              description: `Accessible label for the button that closes a dialog`,
            }),
            children: (0, Y.jsx)(n, {}),
          })),
      (r[7] = i),
      (r[8] = h),
      (r[9] = s),
      (r[10] = A))
    : (A = r[10]);
  let j;
  r[11] !== c || r[12] !== u || r[13] !== y || r[14] !== d || r[15] !== x || r[16] !== A
    ? ((j = (0, Y.jsx)(ee, {
        title: w,
        titleId: y,
        portalContainer: x,
        closeButton: A,
        footerRef: u,
        isNewCardSelected: d,
        children: c,
      })),
      (r[11] = c),
      (r[12] = u),
      (r[13] = y),
      (r[14] = d),
      (r[15] = x),
      (r[16] = A),
      (r[17] = j))
    : (j = r[17]);
  let M;
  r[18] !== O || r[19] !== j
    ? ((M = (0, Y.jsx)(`div`, {
        className: G.creditPositioner,
        children: (0, Y.jsx)(te, {
          children: (0, Y.jsx)(D, {
            ref: S,
            "data-stripe-checkout-dialog": !0,
            isDarkMode: O,
            presentation: `modal`,
            className: k,
            children: j,
          }),
        }),
      })),
      (r[18] = O),
      (r[19] = j),
      (r[20] = M))
    : (M = r[20]);
  let N;
  return (
    r[21] !== i || r[22] !== y || r[23] !== s || r[24] !== T || r[25] !== M || r[26] !== f
      ? ((N = (0, J.createPortal)(
          (0, Y.jsxs)(fe, {
            isOpen: f,
            disableClose: i,
            onClose: s,
            labelledBy: y,
            lockScroll: !0,
            hostRef: b,
            children: [T, E, M],
          }),
          document.body,
        )),
        (r[21] = i),
        (r[22] = y),
        (r[23] = s),
        (r[24] = T),
        (r[25] = M),
        (r[26] = f),
        (r[27] = N))
      : (N = r[27]),
    N
  );
}
function Se(e) {
  return e.preventDefault();
}
function Ce(e) {
  return e.preventDefault();
}
var K, q, J, Y;
function X() {
  return (X = e(() => {
    ((K = d()), W(), k(), u(), (q = r()), (J = i()), m(), o(), f(), h(), ye(), (Y = c()));
  }))();
}
function we(e) {
  let t = (0, Z.c)(17),
    { presentation: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Q.jsx)(v, {
          id: `checkout.creditModal.loading.label`,
          defaultMessage: `Loading checkout`,
          description: `Screen-reader status while the Add credits modal prepares purchase options and a saved payment method. No payment has been submitted.`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsxs)(`div`, {
        className: `flex h-9 items-center justify-between rounded-xl bg-text/10 px-3 motion-safe:animate-pulse`,
        children: [
          (0, Q.jsx)(`div`, { className: `h-3 w-44 rounded bg-text/10` }),
          (0, Q.jsx)(`div`, { className: `size-4 rounded bg-text/10` }),
        ],
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(`div`, {
        className: `flex h-9 items-center px-3`,
        children: (0, Q.jsx)(`div`, { className: `h-3 w-48 rounded bg-text/10 motion-safe:animate-pulse` }),
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsxs)(`div`, {
        "aria-hidden": `true`,
        className: `flex flex-col gap-1 rounded-2xl border border-token-border-default p-2`,
        children: [
          i,
          a,
          (0, Q.jsx)(`div`, {
            className: `flex h-9 items-center px-3`,
            children: (0, Q.jsx)(`div`, {
              className: `h-3 w-52 rounded bg-text/10 motion-safe:animate-pulse`,
            }),
          }),
          (0, Q.jsx)(`div`, { className: `my-1 border-t border-token-border-default` }),
          (0, Q.jsx)(`div`, {
            className: `h-10 rounded-xl border border-token-border-default bg-text/5 motion-safe:animate-pulse`,
          }),
        ],
      })),
      (t[3] = o))
    : (o = t[3]);
  let s, c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsxs)(`div`, {
        "aria-hidden": `true`,
        className: `flex items-center justify-between`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex flex-1 flex-col gap-2`,
            children: [
              (0, Q.jsx)(`div`, { className: `h-4 w-28 rounded bg-text/10 motion-safe:animate-pulse` }),
              (0, Q.jsx)(`div`, { className: `h-3 w-36 rounded bg-text/10 motion-safe:animate-pulse` }),
              (0, Q.jsx)(`div`, {
                className: `h-3 w-72 max-w-full rounded bg-text/10 motion-safe:animate-pulse`,
              }),
            ],
          }),
          (0, Q.jsx)(`div`, { className: `h-5 w-8 rounded-full bg-text/10 motion-safe:animate-pulse` }),
        ],
      })),
      (c = (0, Q.jsx)(`div`, { "aria-hidden": `true`, className: `border-t border-token-border-default` })),
      (t[4] = s),
      (t[5] = c))
    : ((s = t[4]), (c = t[5]));
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(`div`, { className: `h-4 w-20 rounded bg-text/10 motion-safe:animate-pulse` })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(`div`, { className: `h-6 w-8 rounded bg-text/10 motion-safe:animate-pulse` })),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsxs)(`div`, {
        "aria-hidden": `true`,
        className: `flex flex-col gap-3`,
        children: [
          l,
          (0, Q.jsxs)(`div`, {
            className: `flex h-16 items-center gap-3 rounded-2xl border border-token-border-default px-4`,
            children: [
              u,
              (0, Q.jsxs)(`div`, {
                className: `flex flex-1 flex-col gap-2`,
                children: [
                  (0, Q.jsx)(`div`, { className: `h-3 w-24 rounded bg-text/10 motion-safe:animate-pulse` }),
                  (0, Q.jsx)(`div`, { className: `h-3 w-16 rounded bg-text/10 motion-safe:animate-pulse` }),
                ],
              }),
              (0, Q.jsx)(`div`, { className: `h-8 w-16 rounded-xl bg-text/10 motion-safe:animate-pulse` }),
            ],
          }),
        ],
      })),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsxs)(`div`, {
        className: `flex justify-between`,
        children: [
          (0, Q.jsx)(`div`, { className: `h-3 w-28 rounded bg-text/10 motion-safe:animate-pulse` }),
          (0, Q.jsx)(`div`, { className: `h-3 w-14 rounded bg-text/10 motion-safe:animate-pulse` }),
        ],
      })),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsxs)(`div`, {
        className: `flex justify-between`,
        children: [
          (0, Q.jsx)(`div`, { className: `h-3 w-20 rounded bg-text/10 motion-safe:animate-pulse` }),
          (0, Q.jsx)(`div`, { className: `h-3 w-12 rounded bg-text/10 motion-safe:animate-pulse` }),
        ],
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsxs)(`div`, {
        className: `flex justify-between`,
        children: [
          (0, Q.jsx)(`div`, { className: `h-3 w-32 rounded bg-text/10 motion-safe:animate-pulse` }),
          (0, Q.jsx)(`div`, { className: `h-3 w-10 rounded bg-text/10 motion-safe:animate-pulse` }),
        ],
      })),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsxs)(`div`, {
        role: `status`,
        "aria-busy": `true`,
        "data-testid": `credit-checkout-modal-skeleton`,
        className: `flex flex-col gap-4 pb-4`,
        children: [
          r,
          o,
          s,
          c,
          d,
          (0, Q.jsxs)(`div`, {
            "aria-hidden": `true`,
            className: `flex flex-col gap-2`,
            children: [
              f,
              p,
              m,
              (0, Q.jsxs)(`div`, {
                className: `mt-1 flex justify-between`,
                children: [
                  (0, Q.jsx)(`div`, { className: `h-3 w-24 rounded bg-text/10 motion-safe:animate-pulse` }),
                  (0, Q.jsx)(`div`, { className: `h-3 w-14 rounded bg-text/10 motion-safe:animate-pulse` }),
                ],
              }),
            ],
          }),
        ],
      })),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsxs)(`div`, {
        "aria-hidden": `true`,
        className: `flex flex-col gap-2`,
        children: [
          (0, Q.jsx)(`div`, { className: `h-10 rounded-full bg-text/10 motion-safe:animate-pulse` }),
          (0, Q.jsx)(`div`, {
            className: `mx-auto h-3 w-52 max-w-full rounded bg-text/10 motion-safe:animate-pulse`,
          }),
        ],
      })),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== n.footerTarget || t[15] !== n.onNewCardSelected
      ? ((_ = (0, Q.jsxs)(Q.Fragment, {
          children: [
            h,
            (0, Q.jsx)(be, { target: n.footerTarget, onNewCardSelected: n.onNewCardSelected, children: g }),
          ],
        })),
        (t[14] = n.footerTarget),
        (t[15] = n.onNewCardSelected),
        (t[16] = _))
      : (_ = t[16]),
    _
  );
}
function Te(e) {
  let t = (0, Z.c)(19),
    {
      loading: n,
      error: r,
      onRetry: i,
      context: a,
      exitRequested: o,
      onExitReady: s,
      loadingContent: c,
      returnPath: l,
      presentation: u,
      onBack: d,
      documentReturnPath: f,
    } = e;
  if (u?.inline != null && n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(N, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  if (u != null) {
    if (n && a === `credits`) {
      let e;
      return (
        t[1] === u ? (e = t[2]) : ((e = (0, Q.jsx)(we, { presentation: u })), (t[1] = u), (t[2] = e)),
        e
      );
    }
    let e;
    return (
      t[3] !== r || t[4] !== n || t[5] !== i
        ? ((e = (0, Q.jsx)(E, { kind: `payment`, loading: n, error: r, onRetry: i })),
          (t[3] = r),
          (t[4] = n),
          (t[5] = i),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  if (n) {
    if (c !== void 0) return c;
    let e;
    return (
      t[7] !== a || t[8] !== o || t[9] !== s
        ? ((e = (0, Q.jsx)(C, { context: a, exitRequested: o, onExitReady: s })),
          (t[7] = a),
          (t[8] = o),
          (t[9] = s),
          (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let p;
  t[11] !== r || t[12] !== i
    ? ((p = (0, Q.jsx)(E, { kind: `payment`, loading: !1, error: r, onRetry: i })),
      (t[11] = r),
      (t[12] = i),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== f || t[15] !== d || t[16] !== l || t[17] !== p
      ? ((m = (0, Q.jsx)(A, { returnPath: l, onBack: d, documentReturnPath: f, children: p })),
        (t[14] = f),
        (t[15] = d),
        (t[16] = l),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = d()), I(), m(), y(), T(), O(), X(), (Q = c()));
  }))();
}
export {
  X as a,
  ae as c,
  N as d,
  re as f,
  xe as i,
  oe as l,
  $ as n,
  W as o,
  I as p,
  be as r,
  ie as s,
  Te as t,
  z as u,
};
//# sourceMappingURL=loading-187737545e11.js.map
