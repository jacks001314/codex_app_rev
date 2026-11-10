import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DB as t,
  FBt as n,
  LNt as r,
  MNt as i,
  NNt as a,
  OB as o,
  OE as s,
  PBt as c,
  SZ as ee,
  XOt as l,
  XS as u,
  gB as d,
  gC as f,
  hB as p,
  hC as m,
  nB as h,
  okt as te,
  q3 as g,
  rB as _,
  tkt as v,
  xZ as y,
} from "./app-shared-2feb3d4c6fcc.js";
import { Dx as b, Ex as x, Ox as ne } from "./app-primary-3e00728c2a4c.js";
import { n as S, t as C } from "./thumbnail-panel-f8937e1a1283.js";
function w(e) {
  let t = (0, O.c)(36),
    {
      containerRef: n,
      initialPage: r,
      isPageLayoutReady: i,
      onPageChange: a,
      pageSelector: o,
      totalPages: s,
    } = e,
    c = r === void 0 ? 1 : r,
    [ee, l] = (0, k.useState)(c),
    u = (0, k.useRef)(c),
    f = (0, k.useRef)(c),
    p = (0, k.useRef)(null),
    m = (0, k.useRef)(null),
    h = E(ee, s),
    te;
  t[0] === a
    ? (te = t[1])
    : ((te = (e) => {
        e !== u.current && ((u.current = e), l(e), a?.(e));
      }),
      (t[0] = a),
      (t[1] = te));
  let g = d(te),
    _;
  t[2] !== n || t[3] !== o || t[4] !== g
    ? ((_ = (e, t) => {
        let r = n.current;
        if (r == null) return;
        let i = T(r, o).at(e - 1);
        if (i == null) return;
        (m.current?.(), (m.current = null), (p.current = e));
        let a = null,
          s = () => {
            (a != null && (clearTimeout(a), (a = null)), r.removeEventListener(`scroll`, ee));
          },
          c = () => {
            if (p.current !== e) return;
            ((p.current = null), s());
            let t = D({ container: r, pageElements: T(r, o), pageVisibilityByElement: new Map() });
            t != null && g(t);
          },
          ee = () => {
            (a != null && clearTimeout(a), (a = setTimeout(c, A)));
          };
        ((m.current = s),
          i.scrollIntoView(t == null ? { block: `start` } : { behavior: t, block: `start` }),
          g(e),
          ee(),
          r.addEventListener(`scroll`, ee));
      }),
      (t[2] = n),
      (t[3] = o),
      (t[4] = g),
      (t[5] = _))
    : (_ = t[5]);
  let v = d(_),
    y,
    b;
  (t[6] !== n || t[7] !== i || t[8] !== o || t[9] !== v || t[10] !== s || t[11] !== g
    ? ((y = () => {
        let e = n.current;
        if (!i || e == null || s < 1 || f.current == null || T(e, o).length === 0) return;
        let t = E(f.current, s);
        ((f.current = null), t > 1 ? v(t, void 0) : g(t));
      }),
      (b = [n, i, o, v, s, g]),
      (t[6] = n),
      (t[7] = i),
      (t[8] = o),
      (t[9] = v),
      (t[10] = s),
      (t[11] = g),
      (t[12] = y),
      (t[13] = b))
    : ((y = t[12]), (b = t[13])),
    (0, k.useLayoutEffect)(y, b));
  let x, ne;
  (t[14] !== n || t[15] !== i || t[16] !== o || t[17] !== s || t[18] !== g
    ? ((x = () => {
        let e = n.current;
        if (!i || e == null || s < 1 || typeof IntersectionObserver > `u`) return;
        let t = T(e, o);
        if (t.length === 0) return;
        let r = new Map(),
          a = new IntersectionObserver(
            (n) => {
              for (let e of n) r.set(e.target, e.intersectionRatio);
              let i = D({ container: e, pageElements: t, pageVisibilityByElement: r });
              i != null &&
                (p.current == null || i === p.current) &&
                (i === p.current && ((p.current = null), m.current?.(), (m.current = null)), g(i));
            },
            { root: e, threshold: re },
          );
        for (let e of t) (r.set(e, 0), a.observe(e));
        let c = D({ container: e, pageElements: t, pageVisibilityByElement: r });
        return (
          c != null && p.current == null && g(c),
          () => {
            (a.disconnect(), (p.current = null), m.current?.(), (m.current = null));
          }
        );
      }),
      (ne = [n, i, o, s, g]),
      (t[14] = n),
      (t[15] = i),
      (t[16] = o),
      (t[17] = s),
      (t[18] = g),
      (t[19] = x),
      (t[20] = ne))
    : ((x = t[19]), (ne = t[20])),
    (0, k.useEffect)(x, ne));
  let S;
  t[21] !== v || t[22] !== s
    ? ((S = (e, t) => {
        let n = t === void 0 ? `smooth` : t;
        v(E(e, s), n);
      }),
      (t[21] = v),
      (t[22] = s),
      (t[23] = S))
    : (S = t[23]);
  let C = S,
    w;
  t[24] !== h || t[25] !== C
    ? ((w = () => {
        let e = h - 1;
        e < 1 || C(e);
      }),
      (t[24] = h),
      (t[25] = C),
      (t[26] = w))
    : (w = t[26]);
  let j = w,
    M;
  t[27] !== h || t[28] !== C || t[29] !== s
    ? ((M = () => {
        let e = h + 1;
        e > s || C(e);
      }),
      (t[27] = h),
      (t[28] = C),
      (t[29] = s),
      (t[30] = M))
    : (M = t[30]);
  let N = M,
    P;
  return (
    t[31] !== h || t[32] !== N || t[33] !== C || t[34] !== j
      ? ((P = { currentPage: h, goToPage: C, goToNextPage: N, goToPreviousPage: j }),
        (t[31] = h),
        (t[32] = N),
        (t[33] = C),
        (t[34] = j),
        (t[35] = P))
      : (P = t[35]),
    P
  );
}
function T(e, t) {
  return Array.from(e.querySelectorAll(t));
}
function E(e, t) {
  return Math.min(Math.max(e, 1), Math.max(t, 1));
}
function D({ container: e, pageElements: t, pageVisibilityByElement: n }) {
  if (t.length === 0) return null;
  let r = 0,
    i = -1;
  for (let [e, a] of t.entries()) {
    let t = n.get(a) ?? 0;
    t > i && ((i = t), (r = e));
  }
  if (i > 0) return r + 1;
  let a = e.getBoundingClientRect().top,
    o = 0,
    s = 1 / 0;
  for (let [e, n] of t.entries()) {
    let t = Math.abs(n.getBoundingClientRect().top - a);
    t < s && ((s = t), (o = e));
  }
  return o + 1;
}
var O, k, re, A;
function j() {
  return (j = e(() => {
    ((O = c()), (k = n()), p(), (re = [0, 0.25, 0.5, 0.75, 1]), (A = 100));
  }))();
}
function M(e, t, n, r, i) {
  let a = e.find((e) => i(e) === n),
    o = a ?? t.find((e) => i(e) === n);
  if (o == null) return e;
  let s = { ...o, content: [{ content_type: `text`, text: r }] };
  return a == null ? [...e, s] : e.map((e) => (e === a ? s : e));
}
function N() {
  return (N = e(() => {}))();
}
function P(e) {
  let n = (0, ie.c)(78),
    {
      currentPage: r,
      isDocked: a,
      onDockedChange: o,
      onPageSelect: c,
      renderThumbnail: l,
      totalPages: u,
    } = e,
    d = te(),
    f = (0, F.useRef)(null),
    p = (0, F.useRef)(null),
    _ = (0, F.useRef)(null),
    [y, b] = (0, F.useState)(!1),
    [x, S] = (0, F.useState)(!1),
    w = a || x,
    T;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => {
        let t = e !== void 0 && e;
        window.requestAnimationFrame(() => {
          let e = p.current,
            n = _.current;
          if (e && n) {
            let t = n.offsetTop,
              r = t + n.offsetHeight;
            t < e.scrollTop
              ? (e.scrollTop = t)
              : r > e.scrollTop + e.clientHeight && (e.scrollTop = r - e.clientHeight);
          }
          t && n?.focus({ preventScroll: !0 });
        });
      }),
      (n[0] = T))
    : (T = n[0]);
  let E = T,
    D;
  n[1] === w
    ? (D = n[2])
    : ((D = () => {
        (w || E(), b(!0), S(!0));
      }),
      (n[1] = w),
      (n[2] = D));
  let O = D,
    k;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (e) => {
        let t = e.relatedTarget;
        (t instanceof Node && e.currentTarget.contains(t)) || S(!1);
      }),
      (n[3] = k))
    : (k = n[3]);
  let re = k,
    A = (0, F.useEffectEvent)(O),
    j;
  n[4] !== A || n[5] !== a || n[6] !== w
    ? ((j = () => {
        if (a) return;
        let e = f.current,
          t = e?.parentElement;
        if (e != null && t != null)
          return ne({
            region: t,
            trigger: e,
            open: w,
            onEnter: () => A(),
            onLeave: () => {
              t.contains(t.ownerDocument.activeElement) || S(!1);
            },
          });
      }),
      (n[4] = A),
      (n[5] = a),
      (n[6] = w),
      (n[7] = j))
    : (j = n[7]);
  let M;
  if (
    (n[8] !== a || n[9] !== w || n[10] !== u
      ? ((M = [a, w, u]), (n[8] = a), (n[9] = w), (n[10] = u), (n[11] = M))
      : (M = n[11]),
    (0, F.useEffect)(j, M),
    u <= 1)
  )
    return null;
  let N;
  n[12] === d
    ? (N = n[13])
    : ((N = d.formatMessage({
        id: `artifactPreview.tableOfContents.show`,
        defaultMessage: `Show table of contents`,
        description: `Short screen-reader label for the collapsed page-thumbnail control in a PDF or DOCX preview. It tells keyboard and assistive-technology users that interacting with the control reveals page navigation thumbnails. No placeholders.`,
      })),
      (n[12] = d),
      (n[13] = N));
  let P = N,
    L;
  n[14] === d
    ? (L = n[15])
    : ((L = d.formatMessage({
        id: `artifactPreview.tableOfContents.label`,
        defaultMessage: `Table of contents`,
        description: `Short screen-reader label for the page-thumbnail navigation landmark in a PDF or DOCX preview. It identifies the panel that appears after the user hovers, focuses, or docks the table of contents. No placeholders.`,
      })),
      (n[14] = d),
      (n[15] = L));
  let ae = L,
    R;
  n[16] !== d || n[17] !== a
    ? ((R = d.formatMessage(
        a
          ? {
              id: `artifactPreview.tableOfContents.undock`,
              defaultMessage: `Undock table of contents`,
              description: `Short screen-reader label for a control inside the PDF or DOCX page-thumbnail panel. Activating it returns the table of contents to hover-and-focus-only behavior. The contrasting action is Dock table of contents. No placeholders.`,
            }
          : {
              id: `artifactPreview.tableOfContents.dock`,
              defaultMessage: `Dock table of contents`,
              description: `Short screen-reader label for a control inside the PDF or DOCX page-thumbnail panel. Activating it keeps the table of contents visible after pointer or keyboard focus leaves the panel. The contrasting action is Undock table of contents. No placeholders.`,
            },
      )),
      (n[16] = d),
      (n[17] = a),
      (n[18] = R))
    : (R = n[18]);
  let z = R,
    oe = w ? `pointer-events-auto` : `pointer-events-none`,
    B;
  n[19] === oe
    ? (B = n[20])
    : ((B = i(`absolute start-0 top-16 bottom-6 z-30 w-43.5`, oe)), (n[19] = oe), (n[20] = B));
  let se = w && `pointer-events-none opacity-0`,
    V;
  n[21] === se
    ? (V = n[22])
    : ((V = i(
        `pointer-events-auto absolute inset-y-0 start-0 flex w-7 cursor-interaction flex-col items-start justify-center gap-1.5 overflow-hidden border-0 bg-transparent p-0 ps-2 outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        se,
      )),
      (n[21] = se),
      (n[22] = V));
  let ce = w ? -1 : void 0,
    H;
  n[23] === O
    ? (H = n[24])
    : ((H = () => {
        (O(), E(!0));
      }),
      (n[23] = O),
      (n[24] = H));
  let le;
  n[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((le = () => E(!0)), (n[25] = le)) : (le = n[25]);
  let U;
  if (n[26] !== r || n[27] !== u) {
    let e;
    (n[29] === r
      ? (e = n[30])
      : ((e = (e, t) => {
          let n = t + 1;
          return (0, I.jsx)(
            `span`,
            {
              "aria-hidden": !0,
              className: i(
                `block h-0.5 rounded-full transition-[width,background-color] duration-200 ease-out motion-reduce:transition-none`,
                n === r ? `w-4 bg-current text-default` : `w-3 bg-border`,
              ),
            },
            n,
          );
        }),
        (n[29] = r),
        (n[30] = e)),
      (U = Array.from({ length: u }, e)),
      (n[26] = r),
      (n[27] = u),
      (n[28] = U));
  } else U = n[28];
  let W;
  n[31] !== w || n[32] !== P || n[33] !== V || n[34] !== ce || n[35] !== H || n[36] !== U
    ? ((W = (0, I.jsx)(`button`, {
        ref: f,
        type: `button`,
        "aria-expanded": w,
        "aria-label": P,
        className: V,
        "data-testid": `paged-thumbnail-stack`,
        tabIndex: ce,
        onClick: H,
        onFocus: le,
        children: U,
      })),
      (n[31] = w),
      (n[32] = P),
      (n[33] = V),
      (n[34] = ce),
      (n[35] = H),
      (n[36] = U),
      (n[37] = W))
    : (W = n[37]);
  let ue = g(d.locale) === `rtl` ? `right` : `left`,
    de = !w,
    fe = !w,
    G;
  n[38] === u
    ? (G = n[39])
    : ((G = (0, I.jsx)(v, {
        id: `artifactPreview.tableOfContents.pageCount`,
        defaultMessage: `{count, plural, one {# page} other {# pages}}`,
        description: `Compact page count shown at the top of the page-thumbnail table of contents in a PDF or DOCX preview. It helps the file viewer understand the document's length. Placeholder {count} is the integer total number of pages and controls ICU pluralization.`,
        values: { count: u },
      })),
      (n[38] = u),
      (n[39] = G));
  let K;
  n[40] !== a || n[41] !== o
    ? ((K = (e) => {
        let t = !a;
        (b(!0), o(t), S(!1), !t && e.detail > 0 && e.currentTarget.blur());
      }),
      (n[40] = a),
      (n[41] = o),
      (n[42] = K))
    : (K = n[42]);
  let pe;
  n[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, I.jsx)(t, { asset: ee, className: `text-secondary` })), (n[43] = pe))
    : (pe = n[43]);
  let q;
  n[44] !== z || n[45] !== a || n[46] !== K
    ? ((q = (0, I.jsx)(s, { "aria-label": z, "aria-pressed": a, uniform: !0, onClick: K, children: pe })),
      (n[44] = z),
      (n[45] = a),
      (n[46] = K),
      (n[47] = q))
    : (q = n[47]);
  let J;
  n[48] !== z || n[49] !== q
    ? ((J = (0, I.jsx)(h, { tooltipContent: z, children: q })), (n[48] = z), (n[49] = q), (n[50] = J))
    : (J = n[50]);
  let Y;
  n[51] !== G || n[52] !== J
    ? ((Y = (0, I.jsxs)(`div`, {
        className: `flex shrink-0 items-center justify-between gap-2 ps-2 pe-0.5 pb-2 text-xs text-tertiary select-none`,
        children: [G, J],
      })),
      (n[51] = G),
      (n[52] = J),
      (n[53] = Y))
    : (Y = n[53]);
  let X;
  n[54] !== r || n[55] !== y || n[56] !== d || n[57] !== c || n[58] !== l || n[59] !== u
    ? ((X = y
        ? Array.from({ length: u }, (e, t) => {
            let n = t + 1;
            return (0, I.jsxs)(
              `button`,
              {
                ref: n === r ? _ : void 0,
                type: `button`,
                "aria-current": n === r ? `page` : void 0,
                "aria-label": d.formatMessage(
                  {
                    id: `artifactPreview.tableOfContents.page`,
                    defaultMessage: `Page {number}`,
                    description: `Short screen-reader label for a page thumbnail button in a PDF or DOCX table of contents. Activating the button navigates the file viewer directly to that page. Placeholder {number} is the one-based integer page number.`,
                  },
                  { number: n },
                ),
                className: `flex w-full cursor-interaction items-start gap-2 rounded-2xl p-2 text-start text-xs text-secondary outline-none hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:bg-text-info/10 aria-[current=page]:text-info`,
                "data-thumbnail-page": n,
                onClick: () => c(n),
                children: [
                  (0, I.jsx)(`span`, {
                    className: `w-4.5 shrink-0 pt-0.5 text-end leading-4 tabular-nums`,
                    children: n,
                  }),
                  (0, I.jsx)(`span`, {
                    className: `min-w-0 flex-1 overflow-hidden rounded-lg border border-default bg-white shadow-sm`,
                    children: l(n),
                  }),
                ],
              },
              n,
            );
          })
        : null),
      (n[54] = r),
      (n[55] = y),
      (n[56] = d),
      (n[57] = c),
      (n[58] = l),
      (n[59] = u),
      (n[60] = X))
    : (X = n[60]);
  let Z;
  n[61] === X
    ? (Z = n[62])
    : ((Z = (0, I.jsx)(`div`, {
        ref: p,
        className: `relative flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto`,
        "data-testid": `paged-thumbnail-list`,
        children: X,
      })),
      (n[61] = X),
      (n[62] = Z));
  let Q;
  n[63] !== de || n[64] !== fe || n[65] !== Y || n[66] !== Z || n[67] !== ae
    ? ((Q = (0, I.jsxs)(m, {
        "aria-hidden": de,
        className: `pointer-events-auto absolute inset-y-0 start-2 flex w-41.5 flex-col px-1.5 py-2`,
        "data-testid": `paged-thumbnail-panel`,
        inert: fe,
        role: `navigation`,
        "aria-label": ae,
        variant: `viewer`,
        children: [Y, Z],
      })),
      (n[63] = de),
      (n[64] = fe),
      (n[65] = Y),
      (n[66] = Z),
      (n[67] = ae),
      (n[68] = Q))
    : (Q = n[68]);
  let $;
  n[69] !== w || n[70] !== ue || n[71] !== Q
    ? (($ = (0, I.jsx)(C, { open: w, side: ue, children: Q })),
      (n[69] = w),
      (n[70] = ue),
      (n[71] = Q),
      (n[72] = $))
    : ($ = n[72]);
  let me;
  return (
    n[73] !== O || n[74] !== B || n[75] !== W || n[76] !== $
      ? ((me = (0, I.jsxs)(`div`, {
          className: B,
          "data-testid": `paged-thumbnail-rail`,
          onBlurCapture: re,
          onFocusCapture: O,
          children: [W, $],
        })),
        (n[73] = O),
        (n[74] = B),
        (n[75] = W),
        (n[76] = $),
        (n[77] = me))
      : (me = n[77]),
    me
  );
}
var ie, F, I;
function L() {
  return (L = e(() => {
    ((ie = c()), y(), b(), a(), (F = n()), l(), f(), o(), _(), u(), S(), (I = r()));
  }))();
}
function ae({ isDocked: e, totalPages: t }) {
  let n = R({ isDocked: e, totalPages: t });
  return n > 0 ? { paddingInlineStart: n } : void 0;
}
function R({ isDocked: e, totalPages: t }) {
  return t > 1 ? x(e) : 0;
}
function z() {
  return (z = e(() => {
    b();
  }))();
}
export { L as a, j as c, P as i, w as l, R as n, N as o, z as r, M as s, ae as t };
//# sourceMappingURL=paged-thumbnail-rail-layout-4a361b31ca3c.js.map
