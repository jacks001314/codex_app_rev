import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  FNt as n,
  HO as r,
  IO as i,
  JO as a,
  Jz as o,
  KO as s,
  LNt as c,
  PBt as l,
  Uz as u,
  WO as d,
  Wz as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  bB as _,
  iCt as v,
  qO as y,
  qz as b,
  tkt as x,
  vB as S,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as C, t as w } from "./editor-db818ab34a98.js";
function T(e) {
  let t = (0, F.c)(19),
    { onComplete: n, transition: r } = e,
    i = v(o),
    a = _(),
    s = (0, I.useRef)(null),
    c,
    l;
  if (
    (t[0] !== n || t[1] !== i || t[2] !== r || t[3] !== a
      ? ((c = () => {
          if (i) {
            n(r);
            return;
          }
          let e = s.current,
            t = e?.ownerDocument.defaultView;
          if (e == null || t == null) {
            n(r);
            return;
          }
          let o = null,
            c = !1,
            l = !1,
            u = null,
            d = null,
            f = null,
            p = null,
            m = !1,
            h = null,
            g = null,
            _ = null,
            v = ``,
            y = () => {
              c || l || ((l = !0), n(r));
            },
            b = (e) => {
              o = t.requestAnimationFrame(e);
            },
            x = (t) => {
              if (((o = null), c || l)) return;
              let n = N(e.ownerDocument, r.targetUploadId);
              if (
                (n != null &&
                  n !== _ &&
                  (_ != null && (_.style.visibility = v),
                  (_ = n),
                  (v = n.style.visibility),
                  (n.style.visibility = `hidden`)),
                n != null && d == null && !m && ((m = !0), P(n, a)))
              ) {
                b(x);
                return;
              }
              let i = n == null ? null : O(n, a);
              if (i == null && d == null) {
                if (((u ??= t), t - u >= B)) {
                  y();
                  return;
                }
                b(x);
                return;
              }
              if (i == null) {
                if (((p ??= t), g == null || t - p >= H)) {
                  y();
                  return;
                }
              } else p = null;
              let s = i ?? g;
              if (s == null) {
                y();
                return;
              }
              if (d == null) ((d = t), (f = t + V), (h = D(r.source, s)), (g = s), A(e, V), k(e, s));
              else if (i != null && g != null && M(g, i)) {
                let n = j(t, d);
                (A(e, n, `linear`), k(e, i), (f = Math.max(f ?? 0, t + n)), (g = i));
              }
              if (d == null || f == null || h == null || g == null) {
                y();
                return;
              }
              let S = Math.min(1, (t - d) / V);
              if ((E(e, h, S), t >= f && i != null)) {
                b(() => y());
                return;
              }
              b(x);
            };
          return (
            b(x),
            () => {
              ((c = !0), _ != null && (_.style.visibility = v), o != null && t.cancelAnimationFrame(o));
            }
          );
        }),
        (l = [n, i, r, a]),
        (t[0] = n),
        (t[1] = i),
        (t[2] = r),
        (t[3] = a),
        (t[4] = c),
        (t[5] = l))
      : ((c = t[4]), (l = t[5])),
    (0, I.useLayoutEffect)(c, l),
    i)
  )
    return null;
  let u;
  t[6] !== r.source.backgroundColor ||
  t[7] !== r.source.borderRadius ||
  t[8] !== r.source.height ||
  t[9] !== r.source.left ||
  t[10] !== r.source.top ||
  t[11] !== r.source.width ||
  t[12] !== a
    ? ((u = {
        zoom: a,
        backgroundColor: r.source.backgroundColor,
        borderRadius: r.source.borderRadius,
        height: r.source.height,
        left: r.source.left,
        top: r.source.top,
        transformOrigin: `center`,
        width: r.source.width,
        willChange: `border-radius, corner-shape, height, left, top, transform, width`,
      }),
      (t[6] = r.source.backgroundColor),
      (t[7] = r.source.borderRadius),
      (t[8] = r.source.height),
      (t[9] = r.source.left),
      (t[10] = r.source.top),
      (t[11] = r.source.width),
      (t[12] = a),
      (t[13] = u))
    : (u = t[13]);
  let d;
  t[14] === r.imageUrl
    ? (d = t[15])
    : ((d = (0, R.jsx)(`img`, {
        alt: ``,
        className: `h-full w-full object-cover`,
        decoding: `sync`,
        draggable: !1,
        src: r.imageUrl,
      })),
      (t[14] = r.imageUrl),
      (t[15] = d));
  let f;
  return (
    t[16] !== u || t[17] !== d
      ? ((f = (0, L.createPortal)(
          (0, R.jsx)(`div`, {
            ref: s,
            className: `pointer-events-none fixed z-50 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] [corner-shape:superellipse(1.1)]`,
            "aria-hidden": `true`,
            style: u,
            children: d,
          }),
          document.body,
        )),
        (t[16] = u),
        (t[17] = d),
        (t[18] = f))
      : (f = t[18]),
    f
  );
}
function E(e, t, n) {
  let r = Math.sin(n * Math.PI) * t.arcHeight,
    i = Math.sin(n * Math.PI) * -2.5 * t.direction;
  e.style.transform = `translateY(` + String(-r) + `px) rotate(` + String(i) + `deg)`;
}
function D(e, t) {
  let n = e.left + e.width / 2,
    r = t.left + t.width / 2;
  return {
    arcHeight: Math.min(24, Math.max(10, Math.abs(t.top - e.top) * 0.08)),
    direction: r >= n ? 1 : -1,
  };
}
function O(e, t) {
  let n = e.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return null;
  let r = e.ownerDocument.defaultView,
    i = r?.visualViewport,
    a = r?.getComputedStyle(e),
    o = Number.parseFloat(a?.borderTopLeftRadius ?? ``);
  return {
    left: (n.left + (i?.offsetLeft ?? 0)) / t,
    top: (n.top + (i?.offsetTop ?? 0)) / t,
    width: n.width / t,
    height: n.height / t,
    borderRadius: Number.isFinite(o) && o >= 0 ? o : W,
    cornerShape: a?.getPropertyValue(`corner-shape`) || `round`,
  };
}
function k(e, t) {
  (e.style.setProperty(`corner-shape`, t.cornerShape),
    Object.assign(e.style, {
      borderRadius: String(t.borderRadius) + `px`,
      height: String(t.height) + `px`,
      left: String(t.left) + `px`,
      top: String(t.top) + `px`,
      width: String(t.width) + `px`,
    }));
}
function A(e, t, n = `cubic-bezier(0.25, 0.46, 0.45, 0.94)`) {
  Object.assign(e.style, {
    transitionDuration: String(t) + `ms`,
    transitionProperty: `border-radius, corner-shape, height, left, top, width`,
    transitionTimingFunction: n,
  });
}
function j(e, t) {
  return Math.max(U, t + V - e);
}
function M(e, t) {
  return (
    e.cornerShape !== t.cornerShape ||
    Math.abs(e.borderRadius - t.borderRadius) > G ||
    Math.abs(e.height - t.height) > G ||
    Math.abs(e.left - t.left) > G ||
    Math.abs(e.top - t.top) > G ||
    Math.abs(e.width - t.width) > G
  );
}
function N(e, t) {
  for (let n of e.querySelectorAll(z)) if (n.dataset.attachmentTransitionTarget === t) return n;
  return null;
}
function P(e, t) {
  let n = e.parentElement;
  for (; n != null;) {
    let r = n.ownerDocument.defaultView?.getComputedStyle(n);
    if ((r?.overflowX === `auto` || r?.overflowX === `scroll`) && n.scrollWidth > n.clientWidth) {
      let r = e.getBoundingClientRect(),
        i = n.getBoundingClientRect(),
        a = 0;
      if ((r.left < i.left ? (a = r.left - i.left) : r.right > i.right && (a = r.right - i.right), a === 0))
        return !1;
      let o = n.scrollLeft;
      return ((n.scrollLeft += a / t), n.scrollLeft !== o);
    }
    n = n.parentElement;
  }
  return !1;
}
var F, I, L, R, z, B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    ((F = l()),
      g(),
      (I = t()),
      (L = n()),
      S(),
      b(),
      (R = c()),
      (z = `[data-attachment-transition-target]`),
      (B = 500),
      (V = 400),
      (H = 100),
      (U = 48),
      (W = 18),
      (G = 0.5));
  }))();
}
function q(e) {
  let t = (0, Y.c)(18),
    { state: n, composerInput: r, canOpenSketch: i, canEditSketch: a, isDarkMode: o } = e,
    s = (0, X.useSyncExternalStore)(n.subscribe, n.getSnapshot, n.getSnapshot),
    c = s.active,
    l;
  t[0] !== a || t[1] !== i || t[2] !== r || t[3] !== c || t[4] !== o || t[5] !== n
    ? ((l =
        c == null
          ? null
          : (0, Z.jsx)(
              w,
              {
                editor: c.editor,
                isDarkMode: o,
                canSave: a && (c.uploadId != null || i),
                isSaving: c.saving != null,
                onRequestClose: n.requestClose,
                onDone: (e) => n.save(r == null || r.getClientRects().length > 0 ? e : void 0),
              },
              c.id,
            )),
      (t[0] = a),
      (t[1] = i),
      (t[2] = r),
      (t[3] = c),
      (t[4] = o),
      (t[5] = n),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== s.confirmingDiscard || t[8] !== n.discard || t[9] !== n.keepEditing
    ? ((u = s.confirmingDiscard
        ? (0, Z.jsx)(J, { onDiscard: n.discard, onKeepEditing: n.keepEditing })
        : null),
      (t[7] = s.confirmingDiscard),
      (t[8] = n.discard),
      (t[9] = n.keepEditing),
      (t[10] = u))
    : (u = t[10]);
  let d;
  t[11] !== s.transition || t[12] !== n.completeTransition
    ? ((d =
        s.transition == null
          ? null
          : (0, Z.jsx)(T, { transition: s.transition, onComplete: n.completeTransition })),
      (t[11] = s.transition),
      (t[12] = n.completeTransition),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== l || t[15] !== u || t[16] !== d
      ? ((f = (0, Z.jsxs)(Z.Fragment, { children: [l, u, d] })),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
function J(e) {
  let t = (0, Y.c)(19),
    { onDiscard: n, onKeepEditing: r } = e,
    a = f(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(x, {
        id: `chatgpt.sketch.composer.discard_confirmation.title`,
        defaultMessage: `Discard changes?`,
        description: `Title of the confirmation shown when closing a sketch with unsaved changes`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let c = o,
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(x, {
        id: `chatgpt.sketch.composer.discard_confirmation.description`,
        defaultMessage: `Your changes won't be saved`,
        description: `Description of the confirmation shown when closing a sketch with unsaved changes`,
      })),
      (t[1] = l))
    : (l = t[1]);
  let u = l,
    p;
  t[2] === r
    ? (p = t[3])
    : ((p = (e) => {
        e || r();
      }),
      (t[2] = r),
      (t[3] = p));
  let h = a ? void 0 : `transition-opacity duration-250 starting:opacity-0`,
    g;
  t[4] === r
    ? (g = t[5])
    : ((g = (e) => {
        (e.preventDefault(), e.stopPropagation(), r());
      }),
      (t[4] = r),
      (t[5] = g));
  let _;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(`header`, {
        className: `flex min-h-13 items-center justify-center py-2.5 ps-4 pe-2.5 pointer-coarse:min-h-14`,
        children: (0, Z.jsx)(y, { className: `heading-dialog text-center`, children: c }),
      })),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(s, {
        className: `mb-6.5 text-center text-base leading-6 text-balance text-secondary`,
        children: u,
      })),
      (t[7] = v))
    : (v = t[7]);
  let b;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(m, {
        className: `w-full`,
        color: `primary`,
        size: `beaconAction`,
        type: `submit`,
        children: (0, Z.jsx)(x, {
          id: `chatgpt.sketch.composer.discard_confirmation.back`,
          defaultMessage: `Keep editing`,
          description: `Button that returns to editing the sketch without discarding unsaved changes`,
        }),
      })),
      (t[8] = b))
    : (b = t[8]);
  let S;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(x, {
        id: `chatgpt.sketch.composer.discard_confirmation.confirm`,
        defaultMessage: `Discard changes`,
        description: `Button that discards unsaved changes and closes the sketch editor`,
      })),
      (t[9] = S))
    : (S = t[9]);
  let C;
  t[10] === n
    ? (C = t[11])
    : ((C = (0, Z.jsxs)(`div`, {
        className: `p-4 pt-1`,
        children: [
          v,
          (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [
              b,
              (0, Z.jsx)(m, {
                className: `w-full`,
                color: `danger`,
                size: `beaconAction`,
                type: `button`,
                onClick: n,
                children: S,
              }),
            ],
          }),
        ],
      })),
      (t[10] = n),
      (t[11] = C));
  let w;
  t[12] !== C || t[13] !== g
    ? ((w = (0, Z.jsxs)(i, { as: `form`, className: `select-none`, onSubmit: g, children: [_, C] })),
      (t[12] = C),
      (t[13] = g),
      (t[14] = w))
    : (w = t[14]);
  let T;
  return (
    t[15] !== w || t[16] !== p || t[17] !== h
      ? ((T = (0, Z.jsx)(d, {
          open: !0,
          onOpenChange: p,
          showDialogClose: !1,
          size: `compact`,
          overlayClassName: h,
          children: w,
        })),
        (t[15] = w),
        (t[16] = p),
        (t[17] = h),
        (t[18] = T))
      : (T = t[18]),
    T
  );
}
var Y, X, Z;
function Q() {
  return (Q = e(() => {
    ((Y = l()), (X = t()), p(), h(), a(), r(), u(), K(), C(), (Z = c()));
  }))();
}
export { J as n, Q as r, q as t };
//# sourceMappingURL=composer-host-dc6e653ab8a8.js.map
