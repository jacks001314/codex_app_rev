import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CY as t,
  FBt as n,
  HTt as r,
  LNt as i,
  MNt as a,
  NNt as o,
  PBt as s,
  SY as c,
  TY as l,
  VTt as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  ZSt as m,
  iCt as h,
  okt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import { hIt as _, mIt as v, vIt as y, yIt as b } from "./app-initial-ad16eaadf81f.js";
import { n as x, t as S } from "./tooltip-82a88f09f4bc.js";
import { n as C, t as w } from "./home-suggestion-staggered-item-113eac6d236d.js";
function T(e) {
  let t = (0, E.c)(13),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, size: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let o = i === void 0 ? `small` : i,
    s = o === `tile`,
    c = o === `composer`,
    l = o === `large`,
    u = o === `small`,
    d;
  t[4] !== n || t[5] !== s || t[6] !== c || t[7] !== l || t[8] !== u
    ? ((d = a(
        `flex shrink-0 items-center justify-center`,
        { "size-6": s, "h-5 w-token-button-composer": c, "size-5": l, "size-4": u },
        n,
      )),
      (t[4] = n),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let f;
  return (
    t[10] !== r || t[11] !== d
      ? ((f = (0, D.jsx)(`span`, { className: d, ...r })), (t[10] = r), (t[11] = d), (t[12] = f))
      : (f = t[12]),
    f
  );
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = s()), o(), (D = i()));
  }))();
}
function k(e) {
  let n = (0, I.c)(53),
    {
      composerMode: r,
      disableWhileModelPickerOpen: i,
      disableAnimations: o,
      emptyState: s,
      highlightedItemId: l,
      items: d,
      navigationGroup: p,
      onItemHover: m,
      placement: _,
      variant: b,
      revealOrder: x,
    } = e,
    C = i !== void 0 && i,
    E = o !== void 0 && o,
    D = _ === void 0 ? `above-composer` : _,
    O = b === void 0 ? `composer` : b,
    k = g(),
    z = h(C ? y : null) ?? !1,
    B = E ? L.Fragment : u,
    [V, H] = (0, L.useState)(null);
  z && V != null && H(null);
  let U = O === `composer` && r != null,
    W;
  if (
    (n[0] !== r || n[1] !== O
      ? ((W = r == null ? `small` : `composer`),
        r === `work` && (W = `large`),
        O === `feed` && (W = `tile`),
        (n[0] = r),
        (n[1] = O),
        (n[2] = W))
      : (W = n[2]),
    d.length === 0 && s === void 0)
  )
    return null;
  let G;
  if (n[3] !== r || n[4] !== U || n[5] !== z || n[6] !== d || n[7] !== D || n[8] !== O) {
    let e;
    (n[10] !== r || n[11] !== U || n[12] !== d
      ? ((e = U && r === `work` && !d.some(N) && `px-(--home-composer-inline-inset)`),
        (n[10] = r),
        (n[11] = U),
        (n[12] = d),
        (n[13] = e))
      : (e = n[13]),
      (G = a(
        `flex flex-col`,
        d.length > 0 && d.every(P) && `pb-2.5`,
        e,
        !U && `py-2`,
        O === `composer` && !U && `min-h-32 ps-6`,
        D === `below-composer` ? `justify-start` : `justify-end`,
        z && `pointer-events-none`,
      )),
      (n[3] = r),
      (n[4] = U),
      (n[5] = z),
      (n[6] = d),
      (n[7] = D),
      (n[8] = O),
      (n[9] = G));
  } else G = n[9];
  let K = d.length === 0 ? s : null,
    q;
  if (
    n[14] !== r ||
    n[15] !== E ||
    n[16] !== l ||
    n[17] !== W ||
    n[18] !== k ||
    n[19] !== U ||
    n[20] !== z ||
    n[21] !== d ||
    n[22] !== p ||
    n[23] !== m ||
    n[24] !== V ||
    n[25] !== D ||
    n[26] !== x ||
    n[27] !== O
  ) {
    let e;
    (n[29] !== r ||
    n[30] !== E ||
    n[31] !== l ||
    n[32] !== W ||
    n[33] !== k ||
    n[34] !== U ||
    n[35] !== z ||
    n[36] !== d.length ||
    n[37] !== p ||
    n[38] !== m ||
    n[39] !== V ||
    n[40] !== D ||
    n[41] !== x ||
    n[42] !== O
      ? ((e = (e, n) => {
          let i = e.listAppearance === `divided`,
            o = e.interactiveLabel != null || !!e.actions?.length,
            s = a(
              `flex w-full items-center text-start`,
              i && [
                `min-h-14 gap-3 rounded-2xl px-3 py-3 text-base leading-6 font-normal text-default`,
                !e.disabled &&
                  `group-focus-within/home-suggestion-list-item:bg-(--color-background-home-suggestion-hover) group-hover/home-suggestion-list-item:bg-(--color-background-home-suggestion-hover)`,
                !e.disabled && l === e.id && `bg-(--color-background-home-suggestion-hover)`,
              ],
              !i && O === `composer` && v.RowHeight,
              O === `feed` &&
                `min-h-11 gap-4 rounded-2xl py-2 ps-3 text-sm text-codex-description group-focus-within/home-suggestion-list-item:bg-(--color-background-home-suggestion-hover) group-hover/home-suggestion-list-item:bg-(--color-background-home-suggestion-hover)`,
              !i &&
                U && [
                  `gap-(--spacing-composer-single-line-controls) rounded-2xl px-2 data-[composer-mode=work]:gap-3.25 data-[dismissible]:pe-[calc(var(--spacing-token-button-composer)+var(--spacing)*2)]`,
                  v.Button,
                ],
              O === `composer` &&
                !U &&
                `gap-1.5 rounded-2xl text-sm text-codex-description hover:text-default browser:text-base browser:leading-relaxed`,
              O === `feed` && (e.onDismiss == null ? `pe-2` : `pe-11`),
              O === `composer` && !U && (e.onDismiss == null ? `pe-1` : `pe-8`),
            ),
            u = (0, R.jsxs)(R.Fragment, {
              children: [
                e.listIcon == null && e.icon == null
                  ? null
                  : (0, R.jsx)(T, {
                      className: a(
                        !i &&
                          O === `composer` && [
                            r == null ? `[&_img]:size-4 [&>svg]:size-4` : `browser:size-6`,
                            r === `chat` && `min-w-token-button-composer`,
                          ],
                      ),
                      size: i ? `large` : W,
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
                      children: e.actions.map((t, n) =>
                        (0, R.jsx)(
                          `span`,
                          {
                            className: `min-w-0`,
                            children: (0, R.jsx)(f, {
                              className: `pointer-events-auto max-w-full font-normal`,
                              allowShrink: !0,
                              color: t.color ?? `outlineGhost`,
                              size: `actionSm`,
                              radius: `full`,
                              disabled: e.disabled,
                              onClick: t.onClick,
                              onMouseDown: M,
                              children: (0, R.jsx)(`span`, { className: `truncate`, children: t.label }),
                            }),
                          },
                          n,
                        ),
                      ),
                    })
                  : null,
              ],
            }),
            h = (0, R.jsx)(`button`, {
              ref: (t) => {
                if (t != null && O === `feed` && V === e.id)
                  return (
                    t.addEventListener(`wheel`, F, { passive: !1 }),
                    () => t.removeEventListener(`wheel`, F)
                  );
              },
              type: `button`,
              "aria-label": e.accessibleLabel,
              className: a(
                `cursor-interaction outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default disabled:opacity-40`,
                o ? `absolute inset-0 rounded-2xl` : s,
              ),
              "data-dismissible": e.onDismiss != null || void 0,
              "data-composer-mode": U ? r : void 0,
              "data-highlighted": l === e.id || void 0,
              "data-home-suggestion-id": p == null ? void 0 : e.id,
              disabled: e.disabled,
              onClick: e.onClick,
              onMouseMove: () => m?.(e, n),
              onMouseDown: O === `feed` || U ? j : void 0,
              children: o ? (0, R.jsx)(`span`, { className: `sr-only`, children: e.label }) : u,
            }),
            g = (0, R.jsx)(S, {
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
              children: h,
            });
          return (0, R.jsxs)(
            w,
            {
              className: a(
                `group/home-suggestion-list-item relative`,
                i && `border-b border-default last:border-b-0`,
                !i &&
                  U && [
                    `rounded-2xl text-tertiary`,
                    v.Row,
                    !e.disabled && v.Enabled,
                    !e.disabled && l === e.id && v.Highlighted,
                  ],
                e.hidden && `invisible`,
              ),
              disableAnimations: E,
              index:
                x === `top-to-bottom` || (x == null && (O === `feed` || D === `below-composer`))
                  ? n
                  : d.length - n - 1,
              variant: O === `feed` ? `feed` : `list`,
              children: [
                o
                  ? (0, R.jsxs)(`div`, {
                      className: `relative`,
                      children: [
                        g,
                        (0, R.jsx)(`div`, {
                          className: a(s, `pointer-events-none relative`, e.disabled && `opacity-40`),
                          "data-dismissible": e.onDismiss != null || void 0,
                          "data-composer-mode": U ? r : void 0,
                          inert: e.disabled,
                          children: u,
                        }),
                      ],
                    })
                  : g,
                e.onDismiss == null
                  ? null
                  : (0, R.jsx)(f, {
                      className: a(
                        `pointer-events-none absolute opacity-0 group-focus-within/home-suggestion-list-item:pointer-events-auto group-focus-within/home-suggestion-list-item:opacity-100 group-hover/home-suggestion-list-item:pointer-events-auto group-hover/home-suggestion-list-item:opacity-100`,
                        i ? `-end-1.5 -top-1.5` : `end-1 top-1/2 -translate-y-1/2`,
                      ),
                      "aria-label":
                        e.dismissLabel ??
                        k.formatMessage({
                          id: `home.taskSuggestions.dismiss`,
                          defaultMessage: `Dismiss suggestion`,
                          description: `Accessible label for the X button on one suggested task below the Home composer. It removes only this suggestion without starting the task or changing the draft.`,
                        }),
                      color: i ? `outlineSurface` : `ghostTertiary`,
                      disabled: e.disabled,
                      size: !i && U ? `composerAuxiliary` : `compact`,
                      radius: i ? `full` : `large`,
                      uniform: !0,
                      onClick: e.onDismiss,
                      onMouseDown: A,
                      children: i ? (0, R.jsx)(c, {}) : (0, R.jsx)(t, {}),
                    }),
              ],
            },
            e.id,
          );
        }),
        (n[29] = r),
        (n[30] = E),
        (n[31] = l),
        (n[32] = W),
        (n[33] = k),
        (n[34] = U),
        (n[35] = z),
        (n[36] = d.length),
        (n[37] = p),
        (n[38] = m),
        (n[39] = V),
        (n[40] = D),
        (n[41] = x),
        (n[42] = O),
        (n[43] = e))
      : (e = n[43]),
      (q = d.map(e)),
      (n[14] = r),
      (n[15] = E),
      (n[16] = l),
      (n[17] = W),
      (n[18] = k),
      (n[19] = U),
      (n[20] = z),
      (n[21] = d),
      (n[22] = p),
      (n[23] = m),
      (n[24] = V),
      (n[25] = D),
      (n[26] = x),
      (n[27] = O),
      (n[28] = q));
  } else q = n[28];
  let J;
  n[44] !== B || n[45] !== q
    ? ((J = (0, R.jsx)(B, { children: q })), (n[44] = B), (n[45] = q), (n[46] = J))
    : (J = n[46]);
  let Y;
  return (
    n[47] !== z || n[48] !== p || n[49] !== G || n[50] !== K || n[51] !== J
      ? ((Y = (0, R.jsxs)(`div`, {
          className: G,
          "data-home-suggestion-group": p,
          inert: z,
          children: [K, J],
        })),
        (n[47] = z),
        (n[48] = p),
        (n[49] = G),
        (n[50] = K),
        (n[51] = J),
        (n[52] = Y))
      : (Y = n[52]),
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
    ((I = s()), o(), r(), m(), (L = n()), d(), b(), x(), p(), l(), O(), C(), _(), (R = i()));
  }))();
}
export { z as n, k as t };
//# sourceMappingURL=home-suggestion-list-9dcf9383e42f.js.map
