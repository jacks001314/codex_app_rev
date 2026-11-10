import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CJ as n,
  Cwt as r,
  Pxt as i,
  SJ as a,
  Swt as o,
  TJ as s,
  VDt as c,
  Vxt as l,
  _Mt as u,
  gMt as d,
  jDt as f,
  t3 as p,
  vzt as m,
  xMt as h,
  yzt as g,
} from "./app-shared-bbfeca5e5737.js";
import { azt as _, lzt as v, ozt as y, uzt as b } from "./app-initial-5851df3f6cb1.js";
import { n as x, t as S } from "./tooltip-6cc57bf6ccd3.js";
import { n as C, t as w } from "./home-suggestion-staggered-item-85bcd6ed2372.js";
function T(e) {
  let t = (0, E.c)(13),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, size: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = i === void 0 ? `small` : i,
    o = a === `tile`,
    s = a === `composer`,
    c = a === `large`,
    l = a === `small`,
    u;
  t[4] !== n || t[5] !== o || t[6] !== s || t[7] !== c || t[8] !== l
    ? ((u = d(
        `flex shrink-0 items-center justify-center`,
        { "size-6": o, "h-5 w-token-button-composer": s, "size-5": c, "size-4": l },
        n,
      )),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u))
    : (u = t[9]);
  let f;
  return (
    t[10] !== r || t[11] !== u
      ? ((f = (0, D.jsx)(`span`, { className: u, ...r })), (t[10] = r), (t[11] = u), (t[12] = f))
      : (f = t[12]),
    f
  );
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = m()), u(), (D = h()));
  }))();
}
function k(e) {
  let r = (0, I.c)(53),
    {
      composerMode: i,
      disableWhileModelPickerOpen: s,
      disableAnimations: u,
      emptyState: f,
      highlightedItemId: p,
      items: m,
      navigationGroup: h,
      onItemHover: g,
      placement: y,
      variant: b,
      revealOrder: x,
    } = e,
    C = s !== void 0 && s,
    E = u !== void 0 && u,
    D = y === void 0 ? `above-composer` : y,
    O = b === void 0 ? `composer` : b,
    k = c(),
    z = l(C ? v : null) ?? !1,
    B = E ? L.Fragment : o,
    [V, H] = (0, L.useState)(null);
  z && V != null && H(null);
  let U = O === `composer` && i != null,
    W;
  if (
    (r[0] !== i || r[1] !== O
      ? ((W = i == null ? `small` : `composer`),
        i === `work` && (W = `large`),
        O === `feed` && (W = `tile`),
        (r[0] = i),
        (r[1] = O),
        (r[2] = W))
      : (W = r[2]),
    m.length === 0 && f === void 0)
  )
    return null;
  let G;
  if (r[3] !== i || r[4] !== U || r[5] !== z || r[6] !== m || r[7] !== D || r[8] !== O) {
    let e;
    (r[10] !== i || r[11] !== U || r[12] !== m
      ? ((e = U && i === `work` && !m.some(N) && `px-(--home-composer-inline-inset)`),
        (r[10] = i),
        (r[11] = U),
        (r[12] = m),
        (r[13] = e))
      : (e = r[13]),
      (G = d(
        `flex flex-col`,
        m.length > 0 && m.every(P) && `pb-2.5`,
        e,
        !U && `py-2`,
        O === `composer` && !U && `min-h-32 ps-6`,
        D === `below-composer` ? `justify-start` : `justify-end`,
        z && `pointer-events-none`,
      )),
      (r[3] = i),
      (r[4] = U),
      (r[5] = z),
      (r[6] = m),
      (r[7] = D),
      (r[8] = O),
      (r[9] = G));
  } else G = r[9];
  let K = m.length === 0 ? f : null,
    q;
  if (
    r[14] !== i ||
    r[15] !== E ||
    r[16] !== p ||
    r[17] !== W ||
    r[18] !== k ||
    r[19] !== U ||
    r[20] !== z ||
    r[21] !== m ||
    r[22] !== h ||
    r[23] !== g ||
    r[24] !== V ||
    r[25] !== D ||
    r[26] !== x ||
    r[27] !== O
  ) {
    let e;
    (r[29] !== i ||
    r[30] !== E ||
    r[31] !== p ||
    r[32] !== W ||
    r[33] !== k ||
    r[34] !== U ||
    r[35] !== z ||
    r[36] !== m.length ||
    r[37] !== h ||
    r[38] !== g ||
    r[39] !== V ||
    r[40] !== D ||
    r[41] !== x ||
    r[42] !== O
      ? ((e = (e, r) => {
          let o = e.listAppearance === `divided`,
            s = e.interactiveLabel != null || !!e.actions?.length,
            c = d(
              `flex w-full items-center text-start`,
              o && [
                `min-h-14 gap-3 rounded-2xl px-3 py-3 text-base leading-6 font-normal text-default`,
                !e.disabled &&
                  `group-focus-within/home-suggestion-list-item:bg-(--color-background-home-suggestion-hover) group-hover/home-suggestion-list-item:bg-(--color-background-home-suggestion-hover)`,
                !e.disabled && p === e.id && `bg-(--color-background-home-suggestion-hover)`,
              ],
              !o && O === `composer` && _.RowHeight,
              O === `feed` &&
                `min-h-11 gap-4 rounded-2xl py-2 ps-3 text-sm text-codex-description group-focus-within/home-suggestion-list-item:bg-(--color-background-home-suggestion-hover) group-hover/home-suggestion-list-item:bg-(--color-background-home-suggestion-hover)`,
              !o &&
                U && [
                  `gap-(--spacing-composer-single-line-controls) rounded-2xl px-2 data-[composer-mode=work]:gap-3.25 data-[dismissible]:pe-[calc(var(--spacing-token-button-composer)+var(--spacing)*2)]`,
                  _.Button,
                ],
              O === `composer` &&
                !U &&
                `gap-1.5 rounded-2xl text-sm text-codex-description hover:text-default browser:text-base browser:leading-relaxed`,
              O === `feed` && (e.onDismiss == null ? `pe-2` : `pe-11`),
              O === `composer` && !U && (e.onDismiss == null ? `pe-1` : `pe-8`),
            ),
            l = (0, R.jsxs)(R.Fragment, {
              children: [
                e.listIcon == null && e.icon == null
                  ? null
                  : (0, R.jsx)(T, {
                      className: d(
                        !o &&
                          O === `composer` && [
                            i == null ? `[&_img]:size-4 [&>svg]:size-4` : `browser:size-6`,
                            i === `chat` && `min-w-token-button-composer`,
                          ],
                      ),
                      size: o ? `large` : W,
                      "aria-hidden": `true`,
                      children: e.listIcon ?? e.icon,
                    }),
                (0, R.jsx)(`span`, {
                  className: `min-w-0 flex-1 truncate`,
                  children: e.interactiveLabel ?? e.label,
                }),
                e.trailing,
                e.actions?.length
                  ? (0, R.jsx)(`div`, {
                      className: `flex max-w-1/2 min-w-0 shrink-0 items-center gap-2 ps-8`,
                      children: e.actions.map((n, r) =>
                        (0, R.jsx)(
                          `span`,
                          {
                            className: `min-w-0`,
                            children: (0, R.jsx)(t, {
                              className: `pointer-events-auto max-w-full font-normal`,
                              allowShrink: !0,
                              color: n.color ?? `outlineGhost`,
                              size: `actionSm`,
                              radius: `full`,
                              disabled: e.disabled,
                              onClick: n.onClick,
                              onMouseDown: M,
                              children: (0, R.jsx)(`span`, { className: `truncate`, children: n.label }),
                            }),
                          },
                          r,
                        ),
                      ),
                    })
                  : null,
              ],
            }),
            u = (0, R.jsx)(`button`, {
              ref: (t) => {
                if (t != null && O === `feed` && V === e.id)
                  return (
                    t.addEventListener(`wheel`, F, { passive: !1 }),
                    () => t.removeEventListener(`wheel`, F)
                  );
              },
              type: `button`,
              "aria-label": e.accessibleLabel,
              className: d(
                `cursor-interaction outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default disabled:opacity-40`,
                s ? `absolute inset-0 rounded-2xl` : c,
              ),
              "data-dismissible": e.onDismiss != null || void 0,
              "data-composer-mode": U ? i : void 0,
              "data-highlighted": p === e.id || void 0,
              "data-home-suggestion-id": h == null ? void 0 : e.id,
              disabled: e.disabled,
              onClick: e.onClick,
              onMouseMove: () => g?.(e, r),
              onMouseDown: O === `feed` || U ? j : void 0,
              children: s ? (0, R.jsx)(`span`, { className: `sr-only`, children: e.label }) : l,
            }),
            f = (0, R.jsx)(S, {
              disabled: z,
              tooltipContent:
                e.tooltipContent != null && e.tooltipVariant == null
                  ? (0, R.jsx)(`div`, {
                      className: `min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 leading-relaxed`,
                      children: e.tooltipContent,
                    })
                  : e.tooltipContent,
              variant: e.tooltipVariant ?? `rich`,
              tooltipBodyClassName: `max-h-full overflow-hidden`,
              sideOffset: O === `feed` ? 14 : void 0,
              closeOnTriggerClick: !0,
              skipDelayKey: O === `feed` ? e.id : void 0,
              onOpenChange: (t) => {
                (H(t ? e.id : null), t && e.onPreviewOpen?.());
              },
              interactive: e.tooltipInteractive,
              keyboardNavigation: e.tooltipInteractive,
              selectable: e.tooltipInteractive,
              delayDuration: e.tooltipInteractive ? 250 : void 0,
              tooltipMaxWidth:
                e.tooltipVariant == null
                  ? `min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`
                  : void 0,
              children: u,
            });
          return (0, R.jsxs)(
            w,
            {
              className: d(
                `group/home-suggestion-list-item relative`,
                o && `border-b border-default last:border-b-0`,
                !o &&
                  U && [
                    `rounded-2xl text-tertiary`,
                    _.Row,
                    !e.disabled && _.Enabled,
                    !e.disabled && p === e.id && _.Highlighted,
                  ],
                e.hidden && `invisible`,
              ),
              disableAnimations: E,
              index:
                x === `top-to-bottom` || (x == null && (O === `feed` || D === `below-composer`))
                  ? r
                  : m.length - r - 1,
              variant: O === `feed` ? `feed` : `list`,
              children: [
                s
                  ? (0, R.jsxs)(`div`, {
                      className: `relative`,
                      children: [
                        f,
                        (0, R.jsx)(`div`, {
                          className: d(c, `pointer-events-none relative`, e.disabled && `opacity-40`),
                          "data-dismissible": e.onDismiss != null || void 0,
                          "data-composer-mode": U ? i : void 0,
                          inert: e.disabled,
                          children: l,
                        }),
                      ],
                    })
                  : f,
                e.onDismiss == null
                  ? null
                  : (0, R.jsx)(t, {
                      className: d(
                        `pointer-events-none absolute opacity-0 group-focus-within/home-suggestion-list-item:pointer-events-auto group-focus-within/home-suggestion-list-item:opacity-100 group-hover/home-suggestion-list-item:pointer-events-auto group-hover/home-suggestion-list-item:opacity-100`,
                        o ? `-end-1.5 -top-1.5` : `end-1 top-1/2 -translate-y-1/2`,
                      ),
                      "aria-label":
                        e.dismissLabel ??
                        k.formatMessage({
                          id: `home.taskSuggestions.dismiss`,
                          defaultMessage: `Dismiss suggestion`,
                          description: `Accessible label for the X button on one suggested task below the Home composer. It removes only this suggestion without starting the task or changing the draft.`,
                        }),
                      color: o ? `outlineSurface` : `ghostTertiary`,
                      disabled: e.disabled,
                      size: !o && U ? `composerAuxiliary` : `compact`,
                      radius: o ? `full` : `large`,
                      uniform: !0,
                      onClick: e.onDismiss,
                      onMouseDown: A,
                      children: o ? (0, R.jsx)(a, {}) : (0, R.jsx)(n, {}),
                    }),
              ],
            },
            e.id,
          );
        }),
        (r[29] = i),
        (r[30] = E),
        (r[31] = p),
        (r[32] = W),
        (r[33] = k),
        (r[34] = U),
        (r[35] = z),
        (r[36] = m.length),
        (r[37] = h),
        (r[38] = g),
        (r[39] = V),
        (r[40] = D),
        (r[41] = x),
        (r[42] = O),
        (r[43] = e))
      : (e = r[43]),
      (q = m.map(e)),
      (r[14] = i),
      (r[15] = E),
      (r[16] = p),
      (r[17] = W),
      (r[18] = k),
      (r[19] = U),
      (r[20] = z),
      (r[21] = m),
      (r[22] = h),
      (r[23] = g),
      (r[24] = V),
      (r[25] = D),
      (r[26] = x),
      (r[27] = O),
      (r[28] = q));
  } else q = r[28];
  let J;
  r[44] !== B || r[45] !== q
    ? ((J = (0, R.jsx)(B, { children: q })), (r[44] = B), (r[45] = q), (r[46] = J))
    : (J = r[46]);
  let Y;
  return (
    r[47] !== z || r[48] !== h || r[49] !== G || r[50] !== K || r[51] !== J
      ? ((Y = (0, R.jsxs)(`div`, {
          className: G,
          "data-home-suggestion-group": h,
          inert: z,
          children: [K, J],
        })),
        (r[47] = z),
        (r[48] = h),
        (r[49] = G),
        (r[50] = K),
        (r[51] = J),
        (r[52] = Y))
      : (Y = r[52]),
    Y
  );
}
function A(e) {
  return e.preventDefault();
}
function j(e) {
  return e.preventDefault();
}
function M(e) {
  return e.preventDefault();
}
function N(e) {
  return e.listAppearance === `divided`;
}
function P(e) {
  return e.listAppearance === `divided`;
}
function F(e) {
  e.ctrlKey || e.preventDefault();
}
var I, L, R;
function z() {
  return (z = e(() => {
    ((I = m()), u(), r(), i(), (L = g()), f(), b(), x(), p(), s(), O(), C(), y(), (R = h()));
  }))();
}
export { z as n, k as t };
//# sourceMappingURL=home-suggestion-list-3dfbdedc041d.js.map
