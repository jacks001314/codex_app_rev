import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Tt as t,
  $kt as n,
  FBt as r,
  LNt as i,
  MNt as a,
  NNt as o,
  QTt as s,
  ZTt as c,
  eEt as l,
  iAt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as d, t as f } from "./color-72a92632a961.js";
import { n as p, t as m } from "./PopcornIcon-5d523be2a579.js";
import { n as h, t as g } from "./dist-a60aefefde17.js";
function _(e, t) {
  let n = new f(e),
    r = new f(t);
  return n.hex === r.hex && (n.transform?.alpha ?? 1e5) === (r.transform?.alpha ?? 1e5);
}
function v(e) {
  let t = e.trim();
  if (/^#[0-9a-f]{6}$/i.test(t)) return t.toUpperCase();
  if (/^#[0-9a-f]{3}$/i.test(t)) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`.toUpperCase();
  let n = t.match(/^rgba?\(\s*(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})/i);
  if (n) {
    let [e, t, r] = n.slice(1, 4).map((e) => Math.min(Math.max(Number(e), 0), 255));
    return `#${y(e ?? 0)}${y(t ?? 0)}${y(r ?? 0)}`;
  }
  return `#0F172A`;
}
function y(e) {
  return Math.round(e).toString(16).padStart(2, `0`).toUpperCase();
}
function b() {
  return (b = e(() => {
    d();
  }))();
}
function x({
  color: e,
  onChange: t,
  labels: n,
  size: r = `default`,
  collapseControlsWhileDragging: i = !1,
  onDragControlChange: o,
  onEyeDropperActiveChange: s,
  onPreviewChange: c,
}) {
  let l = v(e ?? `#FFFFFF`),
    [u, d] = (0, S.useState)(l),
    [f, p] = (0, S.useState)(l),
    [m, h] = (0, S.useState)(!1),
    _ = (0, S.useRef)([]),
    y = (0, S.useRef)(!1),
    b = (0, S.useRef)(!1),
    x = (0, S.useRef)(null),
    [T, E] = (0, S.useState)(!1),
    [D, O] = (0, S.useState)(!1),
    k = (0, S.useRef)(!1),
    A = (0, S.useRef)(null);
  ((0, S.useEffect)(() => {
    let e = _.current.indexOf(l);
    if (e >= 0) {
      if ((_.current.splice(0, e + 1), _.current.length > 0 || y.current)) return;
    } else _.current = [];
    ((y.current = !1), (b.current = !1), d(l), p(l));
  }, [l]),
    (0, S.useEffect)(
      () => () => {
        (x.current?.abort(), A.current?.stop());
      },
      [],
    ));
  let j = (e) => {
    let n = v(e);
    ((y.current = !1), (b.current = !1), _.current.push(n), d(n), p(n), t(n));
  };
  return (0, C.jsxs)(`div`, {
    className: `flex flex-col gap-3`,
    children: [
      (0, C.jsxs)(`div`, {
        className: `relative`,
        children: [
          (0, C.jsx)(g, {
            onPointerDown: (e) => {
              if (e.button !== 0 || e.isPrimary === !1) return;
              (A.current?.stop(), (k.current = !1), e.currentTarget.setPointerCapture?.(e.pointerId));
              let t = e.currentTarget.ownerDocument.defaultView,
                n = () => {
                  ((A.current = null), O(!1), t?.removeEventListener(`blur`, r), o?.(null));
                },
                r = () => {
                  ((k.current = !0), (y.current = !1), d(l), p(l), n());
                };
              A.current = { pointerId: e.pointerId, stop: n, cancel: r };
              let a = e.currentTarget.querySelector(`.react-colorful__hue`),
                s = a != null && e.nativeEvent.composedPath().includes(a) ? `hue` : `saturation`;
              (O(i && s === `saturation`), t?.addEventListener(`blur`, r), o?.(s));
            },
            onPointerUp: (e) => {
              A.current?.pointerId === e.pointerId && A.current.stop();
            },
            onPointerCancel: () => {
              A.current?.cancel();
            },
            onLostPointerCapture: () => {
              A.current?.cancel();
            },
            onKeyDownCapture: () => {
              k.current = !1;
            },
            color: u,
            onChange: (e) => {
              ((y.current = !0),
                d(e),
                p(e.toUpperCase()),
                A.current != null && c != null && (_.current.push(v(e)), c(e)));
            },
            onChangeEnd: (e) => {
              (k.current || j(e), A.current?.stop());
            },
            className: a(
              String.raw`!h-auto !w-full gap-3 [&_.react-colorful\_\_hue]:my-2! [&_.react-colorful\_\_hue]:h-4! [&_.react-colorful\_\_hue]:w-[calc(100%_-_62px)]! [&_.react-colorful\_\_hue]:flex-none! [&_.react-colorful\_\_hue]:rounded-full! [&_.react-colorful\_\_pointer]:size-5! [&_.react-colorful\_\_saturation]:flex-none! [&_.react-colorful\_\_saturation]:rounded-lg! [&_.react-colorful\_\_saturation]:border-b-0!`,
              r === `compact`
                ? String.raw`[&_.react-colorful\_\_saturation]:aspect-video!`
                : String.raw`[&_.react-colorful\_\_saturation]:aspect-square!`,
              D && String.raw`[&_.react-colorful\_\_hue]:hidden!`,
            ),
          }),
          (0, C.jsx)(`button`, {
            ref: (e) => {
              e != null && E(e.ownerDocument.defaultView?.EyeDropper != null);
            },
            type: `button`,
            hidden: D,
            "aria-label": n.screenPicker,
            title: T ? n.screenPicker : n.screenPickerUnavailable,
            disabled: !T,
            onClick: (e) => {
              let t = e.currentTarget.ownerDocument.defaultView;
              if (t?.EyeDropper == null) return;
              let n = new t.AbortController();
              ((x.current = n),
                h(!1),
                s?.(!0),
                new t.EyeDropper()
                  .open({ signal: n.signal })
                  .then(
                    ({ sRGBHex: e }) => {
                      n.signal.aborted || j(e);
                    },
                    (e) => {
                      (e instanceof t.DOMException && e.name === `AbortError`) || h(!0);
                    },
                  )
                  .finally(() => {
                    ((x.current = null), s?.(!1));
                  }));
            },
            className: `absolute right-0 bottom-0 flex h-8 w-[50px] cursor-pointer items-center justify-center rounded-lg border border-token-border-default outline-hidden hover:bg-primary-ghost-hover focus-visible:ring-1 focus-visible:ring-token-text-tertiary focus-visible:ring-offset-1 focus-visible:ring-offset-token-main-surface-primary disabled:cursor-default disabled:opacity-40`,
            children: (0, C.jsx)(w, { className: `size-4` }),
          }),
        ],
      }),
      (0, C.jsxs)(`label`, {
        hidden: D,
        className: `flex flex-col gap-1.5 text-[11px] text-token-text-secondary`,
        children: [
          n.hex,
          (0, C.jsx)(`input`, {
            "aria-label": n.hexInput,
            autoFocus: !0,
            value: f.replace(/^#/, ``),
            autoComplete: `off`,
            spellCheck: !1,
            className: `h-8 w-full rounded-lg border border-token-border-default bg-transparent px-2 text-sm text-token-text-primary outline-hidden focus:border-token-text-tertiary`,
            onChange: (e) => {
              ((y.current = !0), (b.current = !0), p(e.currentTarget.value));
            },
            onBlur: () => {
              if (!b.current) return;
              let e = f.trim().replace(/^#?/, `#`);
              /^#[\da-f]{3}(?:[\da-f]{3})?$/i.test(e) ? j(e) : ((y.current = !1), (b.current = !1), p(u));
            },
            onKeyDown: (e) => {
              e.key === `Enter`
                ? (e.preventDefault(), e.currentTarget.blur())
                : e.key === `Escape` &&
                  (e.preventDefault(), e.stopPropagation(), (y.current = !1), (b.current = !1), p(u));
            },
          }),
        ],
      }),
      m
        ? (0, C.jsx)(`p`, {
            hidden: D,
            role: `alert`,
            className: `text-xs text-danger`,
            children: n.screenPickerFailed,
          })
        : null,
    ],
  });
}
var S, C, w;
function T() {
  return (T = e(() => {
    (s(), o(), (S = r()), h(), p(), b(), (C = i()), (w = m(c)));
  }))();
}
function E({
  initialView: e,
  size: t,
  collapseControlsWhileDragging: n,
  onDragControlChange: r,
  onEyeDropperActiveChange: i,
  onPreviewChange: o,
  color: s,
  onChange: c,
  colors: l = [],
  allowNone: u = !1,
  allowCustom: d = !0,
  disabled: f = !1,
  mixed: p = !1,
  embedded: m = !1,
  closeOnSelect: h = !0,
  displayColor: g = (e) => e,
  labels: v,
}) {
  let [y, b] = (0, O.useState)(e === `custom`),
    S = { ...j, ...v },
    C = l.find((e) => e.value === s),
    w = C?.displayColor ?? s,
    T = (e) =>
      p || s == null ? !1 : C?.displayColor != null || e.displayColor != null ? s === e.value : _(s, e.value);
  return (0, k.jsx)(`div`, {
    className: a(
      `font-sans text-token-text-primary`,
      !m &&
        `w-[238px] max-w-[calc(100vw-24px)] rounded-2xl border border-token-border-default bg-token-main-surface-primary p-3 shadow-xl`,
    ),
    children:
      y && d && !f
        ? (0, k.jsx)(x, {
            size: t,
            collapseControlsWhileDragging: n,
            onDragControlChange: r,
            onEyeDropperActiveChange: i,
            onPreviewChange: o,
            color: w,
            onChange: c,
            labels: S,
          })
        : (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsxs)(`div`, {
                className: `mb-4 border-b border-token-border-light pb-4`,
                children: [
                  (0, k.jsx)(`p`, {
                    className: `mb-2 text-[11px] text-token-text-secondary`,
                    children: S.palette,
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `-m-0.5 grid max-h-40 grid-cols-9 gap-1 overflow-y-auto p-0.5`,
                    children: [
                      d &&
                        (0, k.jsx)(`button`, {
                          disabled: f,
                          type: `button`,
                          "aria-label": S.custom,
                          title: S.custom,
                          onClick: () => b(!0),
                          className: `flex aspect-square min-w-0 cursor-pointer items-center justify-center rounded-[4px] border border-token-border-default text-token-text-secondary outline-hidden hover:bg-primary-ghost-hover focus-visible:ring-1 focus-visible:ring-token-text-tertiary focus-visible:ring-offset-1 focus-visible:ring-offset-token-main-surface-primary`,
                          children: (0, k.jsx)(A, { className: `size-4` }),
                        }),
                      u
                        ? (0, k.jsx)(D, {
                            disabled: f,
                            label: S.none,
                            selected: !p && s == null,
                            onClick: () => c(null),
                            closeOnSelect: h,
                          })
                        : null,
                      l.map((e, t) =>
                        (0, k.jsx)(
                          D,
                          {
                            disabled: f,
                            label: e.label,
                            color: g(e.displayColor ?? e.value),
                            selected: T(e),
                            onClick: () => c(e.value),
                            closeOnSelect: h,
                          },
                          `${e.value}-${t}`,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              d &&
                (0, k.jsx)(`div`, {
                  className: `grid grid-cols-9 gap-1`,
                  children: P.map((e) =>
                    (0, k.jsx)(
                      D,
                      {
                        disabled: f,
                        label: S.shade(e.family, e.shade),
                        color: g(e.value),
                        selected: T(e),
                        onClick: () => c(e.value),
                        closeOnSelect: h,
                      },
                      e.label,
                    ),
                  ),
                }),
            ],
          }),
  });
}
function D({ label: e, color: t, selected: r, onClick: i, closeOnSelect: o, disabled: s }) {
  let c = (0, k.jsx)(`button`, {
    type: `button`,
    disabled: s,
    "aria-label": e,
    "aria-pressed": r,
    onClick: i,
    className: a(
      `flex aspect-square min-w-0 cursor-pointer items-center justify-center rounded-[4px] border border-token-border-light text-token-text-secondary outline-hidden ring-offset-1 ring-offset-token-main-surface-primary focus-visible:ring-1 focus-visible:ring-token-text-tertiary`,
      r ? `ring-1 ring-token-text-tertiary` : `hover:ring-1 hover:ring-token-border-light`,
    ),
    style: { backgroundColor: t },
    children: t == null ? (0, k.jsx)(`span`, { "aria-hidden": !0, children: `×` }) : null,
  });
  return o ? (0, k.jsx)(n, { asChild: !0, children: c }) : c;
}
var O, k, A, j, M, N, P;
function F() {
  return (F = e(() => {
    (t(),
      u(),
      o(),
      (O = r()),
      p(),
      b(),
      T(),
      (k = i()),
      (A = m(l)),
      (j = {
        palette: `Colors in the file`,
        custom: `Custom color`,
        none: `No fill`,
        hex: `HEX`,
        hexInput: `Custom color hex value`,
        screenPicker: `Pick color from screen`,
        screenPickerUnavailable: `Screen color picker is unavailable in this browser`,
        screenPickerFailed: `Could not pick a screen color`,
        shade: (e, t) => `${e} shade ${t}`,
      }),
      (M = {
        Blue: [
          `#0C274A`,
          `#173E76`,
          `#2C67C5`,
          `#3A83F7`,
          `#539AF8`,
          `#63A8F8`,
          `#A4CDFB`,
          `#D1E5FD`,
          `#E8F3FE`,
        ],
        Purple: [
          `#291947`,
          `#4E2F88`,
          `#7849D1`,
          `#8952EE`,
          `#A67DF2`,
          `#B897F4`,
          `#C9B1F6`,
          `#DDCFFA`,
          `#EDE5FC`,
        ],
        Pink: [
          `#462132`,
          `#873E60`,
          `#CF6194`,
          `#F077AF`,
          `#F68EBC`,
          `#F8A6C8`,
          `#FBBFD7`,
          `#FCD8E7`,
          `#FDEDF4`,
        ],
        Orange: [
          `#45240D`,
          `#87401D`,
          `#D25E28`,
          `#EE7C37`,
          `#EF8B57`,
          `#F1A275`,
          `#F4BA96`,
          `#F7D1B8`,
          `#FBE8DB`,
        ],
        Yellow: [
          `#51300C`,
          `#95611F`,
          `#D9A337`,
          `#F6C543`,
          `#F8D45D`,
          `#F9DC78`,
          `#FAE598`,
          `#FCEFBE`,
          `#FDF6DC`,
        ],
        Green: [
          `#14361A`,
          `#2C6732`,
          `#48A04C`,
          `#53B559`,
          `#6BC67F`,
          `#83D197`,
          `#9FDDB1`,
          `#C2EACE`,
          `#DEF3E5`,
        ],
        Gray: [
          `#1C1C1C`,
          `#4C525D`,
          `#788291`,
          `#9197A1`,
          `#A9ACB2`,
          `#BFC1C5`,
          `#D5D6D8`,
          `#EAEBEB`,
          `#FFFFFF`,
        ],
      }),
      (N = [900, 700, 500, 400, 300, 200, 100, 75, 50]),
      (P = Object.entries(M).flatMap(([e, t]) =>
        t.map((t, n) => ({ label: `${e} ${n}`, family: e, shade: e === `Gray` ? n + 1 : N[n], value: t })),
      )));
  }))();
}
export { _ as a, v as i, F as n, b as r, E as t };
//# sourceMappingURL=PopcornColorPicker-f42ad8a2beaa.js.map
