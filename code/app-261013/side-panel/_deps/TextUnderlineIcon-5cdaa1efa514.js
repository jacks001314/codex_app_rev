import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FOt as t,
  IOt as n,
  LOt as r,
  POt as i,
  ROt as a,
  _Mt as o,
  gMt as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  CHr as u,
  SHr as d,
  THr as ee,
  aHr as f,
  kHr as p,
  oHr as m,
  wHr as h,
} from "./app-initial-5851df3f6cb1.js";
import { R as g, _, f as te, m as v, p as y } from "./PopcornIcons-16e50c25ad67.js";
import {
  C as b,
  S as x,
  f as S,
  g as C,
  h as ne,
  m as w,
  p as T,
  v as E,
  x as D,
  y as re,
} from "./artifact-source-bootstrap-4e917865396a.js";
import { i as ie, n as ae, r as oe, t as se } from "./PopcornColorPicker-b0c66a8c8ba0.js";
import { a as O } from "./presentation-panel-5d8fe54b934f.js";
function k({
  currentIndex: e,
  totalCount: t,
  itemLabel: n,
  onChangeIndex: r,
  disabled: i = !1,
  testId: a = `popcorn-page-number-navigation`,
}) {
  if (t <= 1) return null;
  let o = t > 0 ? e + 1 : 0,
    s = !i && t > 0 && e > 0,
    c = !i && t > 0 && e < t - 1;
  return (0, A.jsxs)(`div`, {
    className: `flex items-center gap-0.5 text-base leading-5 tabular-nums`,
    "data-testid": a,
    children: [
      (0, A.jsx)(`button`, {
        type: `button`,
        "aria-label": `Go to previous ${n}`,
        "data-testid": `${a}-previous`,
        className: M,
        disabled: !s,
        onClick: () => r(e - 1),
        children: (0, A.jsx)(y, { style: j }),
      }),
      (0, A.jsxs)(`span`, {
        className: `min-w-12 px-1 text-center text-token-text-primary`,
        "data-testid": `${a}-indicator`,
        children: [o, `/`, Math.max(0, t)],
      }),
      (0, A.jsx)(`button`, {
        type: `button`,
        "aria-label": `Go to next ${n}`,
        "data-testid": `${a}-next`,
        className: M,
        disabled: !c,
        onClick: () => r(e + 1),
        children: (0, A.jsx)(v, { style: j }),
      }),
    ],
  });
}
var A, j, M;
function N() {
  return (N = e(() => {
    (g(),
      (A = c()),
      (j = { height: `18px`, width: `18px` }),
      (M = `text-token-text-secondary inline-flex h-8 w-8 cursor-interaction items-center justify-center rounded-md border border-transparent focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border enabled:hover:bg-token-list-hover-background enabled:hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-40`));
  }))();
}
function P({
  value: e,
  previewColor: a,
  currentValueLabel: o,
  authoredValueKey: c,
  ariaLabel: l,
  disabled: d = !1,
  inline: ee = !1,
  allowNone: p = !1,
  allowCustom: m = !0,
  palette: h,
  mixed: g = !1,
  mixedLabel: _ = `Mixed`,
  compact: v = !1,
  themeColors: y = [],
  paintRole: x,
  backgroundColor: S,
  onChange: C,
  className: ne,
  config: w,
}) {
  let T = w ?? { state: `enabled` },
    E = d || T.state !== `enabled`,
    D = p && T.options?.allowNone !== !1,
    re = m && T.options?.allowCustom !== !1,
    ae = T.options?.palette ?? h,
    oe = (0, F.useContext)(ce),
    O = y.length > 0 ? y : [le, ...oe],
    k =
      ae?.map((e) => {
        let t = ie(e);
        return { value: t, label: O.find((e) => e.value === t)?.label ?? t };
      }) ?? O,
    A = b(
      T,
      C,
      (e, t) =>
        !d &&
        u(
          e,
          t,
          p,
          k.map((e) => e.value),
        ),
    ),
    j = (e) => y.find((t) => t.value === e)?.value ?? ie(e),
    M = (0, F.useContext)(f),
    N = S && S !== `none` ? M.withBackground(S) : M,
    P = (e) => (x === `text` ? N.text(e) : N.color(e)),
    L = D && (e === `none` || e === `transparent`) ? `none` : j(e),
    [{ value: R, pending: z }, B] = (0, F.useState)({ value: L, pending: !1 }),
    V = (0, F.useRef)(L),
    H = (0, F.useRef)([]),
    [U, W] = (0, F.useState)(!1),
    G = y.find((e) => e.value === R)?.displayColor ?? R;
  (0, F.useEffect)(() => {
    let e = H.current.indexOf(L);
    if (e >= 0) {
      if ((H.current.splice(0, e + 1), H.current.length > 0)) return;
    } else H.current = [];
    ((V.current = L), B({ value: L, pending: !1 }));
  }, [L, o, g, c]);
  let K = (e) => {
      let t = e === `none` ? `none` : j(e);
      E ||
        (t === `none` ? !D : !re && !k.some((e) => e.value === t)) ||
        (t === V.current && ((!g && o === void 0) || H.current.length > 0)) ||
        (H.current.push(t), (V.current = t), B({ value: t, pending: !0 }), A(e));
    },
    q = g && !z,
    J = R === `none`,
    Y = [...y, ...k].find((e) => e.value.toUpperCase() === R.toUpperCase())?.label ?? R;
  q ? (Y = _) : J ? (Y = `None`) : R === L && !z && o !== void 0 && (Y = o);
  let X = q
    ? { backgroundImage: de, backgroundSize: `8px 8px` }
    : J
      ? { backgroundImage: ue }
      : { backgroundColor: P(R === L ? (a ?? G) : G) };
  if (T.state === `hidden`) return null;
  let Z = (0, I.jsx)(`div`, {
    children: (0, I.jsx)(se, {
      color: J ? null : R,
      mixed: q,
      colors: k,
      allowNone: D,
      allowCustom: re,
      disabled: E,
      embedded: v,
      closeOnSelect: !v,
      displayColor: P,
      labels: { palette: y.length > 0 ? `Theme colors` : l, hexInput: `${l} hex value` },
      onChange: (e) => K(e ?? `none`),
    }),
  });
  return ee
    ? Z
    : (0, I.jsxs)(n, {
        open: U,
        onOpenChange: W,
        children: [
          (0, I.jsx)(`div`, {
            className: s(`relative min-w-0`, ne),
            children: (0, I.jsx)(r, {
              asChild: !0,
              children: (0, I.jsxs)(`button`, {
                type: `button`,
                "aria-label": `${l} picker`,
                disabled: E,
                title: T.reason,
                className: `flex h-7 w-full min-w-0 cursor-interaction items-center gap-2 rounded-lg border border-default bg-transparent px-2 text-left text-sm text-default outline-hidden focus-visible:ring-1 focus-visible:ring-token-text-tertiary enabled:hover:bg-primary-ghost-hover enabled:active:bg-primary-ghost-active disabled:cursor-default disabled:opacity-40 data-[state=open]:bg-primary-ghost-hover`,
                children: [
                  (0, I.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `size-4 shrink-0 rounded-full border border-token-border-light`,
                    style: X,
                  }),
                  (0, I.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: Y }),
                  (0, I.jsx)(te, { className: `size-3 shrink-0 text-token-text-secondary` }),
                ],
              }),
            }),
          }),
          (0, I.jsx)(t, {
            children: (0, I.jsx)(i, {
              asChild: !0,
              "data-popcorn-edit-toolbar-root": `true`,
              "aria-label": `${l} palette`,
              align: `end`,
              sideOffset: 6,
              collisionPadding: 12,
              children: Z,
            }),
          }),
        ],
      });
}
var F, I, ce, le, ue, de;
function L() {
  return (L = e(() => {
    (a(),
      o(),
      (F = l()),
      g(),
      p(),
      m(),
      oe(),
      ae(),
      O(),
      x(),
      (I = c()),
      D(),
      (ce = (0, F.createContext)(re)),
      (le = { label: `White`, value: `#FFFFFF` }),
      (ue = `linear-gradient(135deg, transparent 45%, #EF4444 46%, #EF4444 54%, transparent 55%)`),
      (de = `conic-gradient(#D4D4D4 25%, #FFFFFF 0 50%, #D4D4D4 0 75%, #FFFFFF 0)`));
  }))();
}
function R({ label: e, children: t, className: n, config: r }) {
  return r?.state === `hidden`
    ? null
    : (0, z.jsxs)(`label`, {
        className: s(`grid grid-cols-[72px_minmax(0,1fr)] items-center gap-2 text-xs`, n),
        children: [
          (0, z.jsx)(`span`, { className: `text-token-text-tertiary truncate font-medium`, children: e }),
          (0, z.jsx)(`div`, { className: `min-w-0`, children: t }),
        ],
      });
}
var z;
function B() {
  return (B = e(() => {
    (o(), (z = c()));
  }))();
}
function V({ label: e, value: t, placeholder: n, min: r, max: i, step: a, unit: o, onChange: s, config: c }) {
  let l = c ?? { state: `enabled` },
    u = b(l, s, (e, t) => h(e, t, { min: r, max: i })),
    d = Math.max(r ?? -1 / 0, l.options?.min ?? -1 / 0),
    f = Math.min(i ?? 1 / 0, l.options?.max ?? 1 / 0),
    p = ee(l),
    m = t == null ? `` : String(Math.round(t * 100) / 100),
    [g, _] = (0, H.useState)(m);
  return (
    (0, H.useEffect)(() => _(m), [m, p]),
    l.state === `hidden`
      ? null
      : (0, U.jsx)(R, {
          label: e,
          children: (0, U.jsxs)(`div`, {
            className: ne,
            children: [
              (0, U.jsx)(`input`, {
                "aria-label": e,
                type: `number`,
                disabled: l.state !== `enabled`,
                title: l.reason,
                min: Number.isFinite(d) ? d : void 0,
                max: Number.isFinite(f) ? f : void 0,
                step: a ?? `any`,
                placeholder: n,
                value: g,
                className: `h-full w-full min-w-0 rounded-[inherit] border-0 bg-transparent px-2 text-sm text-token-text-primary outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,
                onChange: (e) => _(e.currentTarget.value),
                onBlur: () => {
                  let e = Number(g);
                  g.trim() && Number.isFinite(e) && (r == null || e >= r) && (i == null || e <= i) && h(l, e)
                    ? g !== m && e !== t && u(e)
                    : _(m);
                },
                onKeyDown: (e) => {
                  (e.key === `Enter` && (e.preventDefault(), e.currentTarget.blur()),
                    e.key === `Escape` && (_(m), e.preventDefault(), e.stopPropagation()));
                },
              }),
              o
                ? (0, U.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `shrink-0 pr-2 text-xs text-token-text-tertiary`,
                    children: o,
                  })
                : null,
            ],
          }),
        })
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = l()), p(), x(), B(), w(), (U = c()));
  }))();
}
function G({ title: e, icon: t, defaultOpen: n = !0, children: r, className: i }) {
  let [a, o] = (0, K.useState)(n);
  return (0, q.jsxs)(`details`, {
    open: a,
    onToggle: (e) => {
      o(e.currentTarget.open);
    },
    className: s(`group`, i),
    children: [
      (0, q.jsxs)(`summary`, {
        className: `text-token-text-primary flex h-6 cursor-pointer list-none items-center gap-2 text-sm font-semibold [&::-webkit-details-marker]:hidden`,
        children: [
          t ? (0, q.jsx)(t, { className: `size-4` }) : null,
          (0, q.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: e }),
          (0, q.jsx)(`span`, {
            className: s(
              `text-token-text-secondary inline-flex size-7 shrink-0 items-center justify-center transition-colors`,
              C,
            ),
            children: (0, q.jsx)(S, {
              className: `size-4 transition-transform duration-150 group-open:rotate-90`,
            }),
          }),
        ],
      }),
      (0, q.jsx)(`div`, { className: `flex flex-col gap-4 pt-4`, children: r }),
    ],
  });
}
var K, q;
function J() {
  return (J = e(() => {
    (o(), (K = l()), w(), T(), (q = c()));
  }))();
}
function Y({ value: e, options: t, onChange: n, ariaLabel: r, className: i, config: a }) {
  let o = a ?? { state: `enabled` },
    c = b(o, n, d),
    l = t.filter((t) => t.value === e || !o.options || o.options.values.includes(t.value)),
    u = l.filter((e) => d(o, e.value));
  return o.state === `hidden`
    ? null
    : (0, X.jsx)(`div`, {
        role: `group`,
        "aria-label": r,
        className: s(
          `flex min-h-8 gap-0.5 rounded-lg border border-token-border-default bg-token-bg-primary p-0.5`,
          i,
        ),
        children: l.map((t) => {
          let n = t.icon,
            r = t.value === e;
          return (0, X.jsxs)(
            `button`,
            {
              type: `button`,
              "aria-label": t.label,
              "aria-pressed": r,
              title: o.reason ?? t.label,
              disabled: !d(o, t.value),
              tabIndex: r || (!u.some((t) => t.value === e) && t === u[0]) ? 0 : -1,
              onClick: () => {
                c(t.value);
              },
              onKeyDown: (e) => {
                let n = u.indexOf(t),
                  r =
                    e.key === `ArrowRight` || e.key === `ArrowDown`
                      ? (n + 1) % u.length
                      : e.key === `ArrowLeft` || e.key === `ArrowUp`
                        ? (n - 1 + u.length) % u.length
                        : e.key === `Home`
                          ? 0
                          : e.key === `End`
                            ? u.length - 1
                            : void 0,
                  i = r === void 0 ? void 0 : u[r];
                i &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  e.currentTarget.parentElement?.querySelectorAll(`button:not(:disabled)`)[r]?.focus(),
                  c(i.value));
              },
              className: s(
                `flex min-h-6 min-w-0 flex-1 cursor-interaction items-center justify-center gap-1 rounded-md px-1.5 py-1 text-xs font-medium select-none`,
                r ? E : C,
              ),
              children: [
                n ? (0, X.jsx)(n, { className: `size-4` }) : null,
                (0, X.jsx)(`span`, { className: n ? `sr-only` : `truncate`, children: t.label }),
              ],
            },
            t.value,
          );
        }),
      });
}
var X;
function Z() {
  return (Z = e(() => {
    (o(), p(), x(), w(), (X = c()));
  }))();
}
function fe({
  title: e,
  subtitle: t,
  onClose: n,
  onKeyDown: r,
  widthPx: i = 240,
  children: a,
  className: o,
  embedded: c = !1,
}) {
  return (0, Q.jsxs)(`section`, {
    "aria-label": e,
    className: s(
      `flex min-h-0 max-h-full flex-col gap-4 overflow-hidden`,
      !c && `shrink-0 rounded-xl bg-surface-elevated-secondary shadow-lg ring-[0.5px] ring-border`,
      o,
    ),
    style: c ? void 0 : { width: i },
    onKeyDown: r,
    children: [
      (0, Q.jsxs)(`header`, {
        className: `mx-4 mt-4 flex min-h-6 shrink-0 items-center justify-between gap-3`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `min-w-0`,
            children: [
              (0, Q.jsx)(`h2`, {
                className: `truncate text-base font-semibold text-token-text-primary`,
                children: e,
              }),
              t
                ? (0, Q.jsx)(`p`, { className: `mt-0.5 text-xs text-token-text-tertiary`, children: t })
                : null,
            ],
          }),
          n
            ? (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": `Close ${e}`,
                onClick: n,
                className: `flex size-6 shrink-0 cursor-interaction items-center justify-center rounded-md text-secondary hover:bg-primary-ghost-hover hover:text-default focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset active:bg-primary-ghost-active`,
                children: (0, Q.jsx)(_, { className: `size-4` }),
              })
            : null,
        ],
      }),
      (0, Q.jsx)(`div`, {
        className: `popcorn-inspector-panel-scroll min-h-0 overflow-x-hidden overflow-y-auto overscroll-contain`,
        children: (0, Q.jsx)(`div`, { className: `popcorn-inspector-panel-content px-4 pb-4`, children: a }),
      }),
    ],
  });
}
var Q;
function pe() {
  return (pe = e(() => {
    (o(), g(), (Q = c()));
  }))();
}
function me({ className: e, ...t }) {
  return (0, $.jsxs)(`svg`, {
    viewBox: `0 0 16 16`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: s(`size-4`, e),
    ...t,
    children: [
      (0, $.jsx)(`path`, {
        d: `M13 14.1699C13.2761 14.1699 13.5 14.3938 13.5 14.6699C13.5 14.9461 13.2761 15.1699 13 15.1699H3C2.72386 15.1699 2.5 14.9461 2.5 14.6699C2.50003 14.3938 2.72388 14.1699 3 14.1699H13Z`,
        fill: `currentColor`,
      }),
      (0, $.jsx)(`path`, {
        d: `M11.3301 2.73535C11.6973 2.73544 11.9951 3.03317 11.9951 3.40039V9.65411C11.9949 11.678 10.354 13.3191 8.33008 13.3191H7.66992C5.64598 13.3191 4.00508 11.678 4.00488 9.65411V3.40039C4.00488 3.03316 4.30271 2.73542 4.66992 2.73535C5.03719 2.73535 5.33496 3.03312 5.33496 3.40039V9.65411C5.33516 10.9435 6.38052 11.989 7.66992 11.9891H8.33008C9.61947 11.989 10.6648 10.9435 10.665 9.65411V3.40039C10.665 3.03316 10.9629 2.73542 11.3301 2.73535Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
var $;
function he() {
  return (he = e(() => {
    (o(), ($ = c()));
  }))();
}
export {
  Y as a,
  J as c,
  R as d,
  B as f,
  N as g,
  k as h,
  pe as i,
  V as l,
  L as m,
  he as n,
  Z as o,
  P as p,
  fe as r,
  G as s,
  me as t,
  W as u,
};
//# sourceMappingURL=TextUnderlineIcon-5cdaa1efa514.js.map
