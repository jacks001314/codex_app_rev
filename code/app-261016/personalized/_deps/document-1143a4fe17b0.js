import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DB as t,
  Dwt as n,
  FBt as r,
  Jn as i,
  LNt as a,
  MNt as o,
  NNt as s,
  Nwt as c,
  OB as l,
  PBt as u,
  XOt as d,
  dk as f,
  fk as p,
  okt as m,
  qn as h,
  tkt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  F6 as _,
  Jh as v,
  P6 as y,
  R6 as b,
  SRn as x,
  X6 as ee,
  Z6 as S,
  _8 as te,
  _p as C,
  bRn as w,
  gan as T,
  gp as E,
  han as ne,
  i8 as re,
  qh as D,
  r8 as O,
  rl as k,
  sl as A,
  vh as ie,
  yh as j,
} from "./app-initial-ad16eaadf81f.js";
import { n as ae, t as M } from "./writing-block-theme-61c0ed2a12ed.js";
import { n as oe, t as N } from "./writing-block-editor-styles-90146127a9c9.js";
import { n as P, t as se } from "./checkboxes-894c9e9cf353.js";
import { J as F, K as I, O as ce, k as L, n as R, r as z, t as le } from "./preview-3690797c434b.js";
import { n as B, t as V } from "./editor.module-9d0afa74ff72.js";
import { i as H, n as U, r as W, t as ue } from "./images-8ae6089f5332.js";
import { n as G, t as K } from "./thumbnail-units-61a7a67cdfab.js";
function q(e) {
  let t = (0, Z.c)(18),
    { document: n, pageId: r, blockIndex: i, onOpen: a } = e,
    o = (0, Q.useRef)(null);
  if (n.units.every(J)) {
    let e;
    t[0] === a ? (e = t[1]) : ((e = () => a(null)), (t[0] = a), (t[1] = e));
    let i;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(E, {
          className: `min-h-0 flex-1 select-none`,
          children: (0, $.jsx)(`span`, {
            role: `status`,
            children: (0, $.jsx)(g, {
              id: `codex.page.preview.empty`,
              defaultMessage: `This page is empty`,
              description: `Shown in a hover preview when the referenced Page has no document content`,
            }),
          }),
        })),
        (t[2] = i))
      : (i = t[2]);
    let o;
    return (
      t[3] !== n.title || t[4] !== r || t[5] !== e
        ? ((o = (0, $.jsx)(k, { pageId: r, title: n.title, onOpen: e, children: i })),
          (t[3] = n.title),
          (t[4] = r),
          (t[5] = e),
          (t[6] = o))
        : (o = t[6]),
      o
    );
  }
  let s;
  t[7] === a ? (s = t[8]) : ((s = () => a(o.current?.() ?? null)), (t[7] = a), (t[8] = s));
  let c;
  t[9] !== i || t[10] !== n.units || t[11] !== r
    ? ((c = (0, $.jsx)(X, { pageId: r, units: n.units, blockIndex: i, getVisibleBlockRef: o })),
      (t[9] = i),
      (t[10] = n.units),
      (t[11] = r),
      (t[12] = c))
    : (c = t[12]);
  let l;
  return (
    t[13] !== n.title || t[14] !== r || t[15] !== s || t[16] !== c
      ? ((l = (0, $.jsx)(k, { pageId: r, title: n.title, onOpen: s, children: c })),
        (t[13] = n.title),
        (t[14] = r),
        (t[15] = s),
        (t[16] = c),
        (t[17] = l))
      : (l = t[17]),
    l
  );
}
function J(e) {
  return e.kind === `markdown` && e.markdown.trim() === ``;
}
function Y(e) {
  let t = (0, Z.c)(14),
    { ref: n, document: r, pageId: i, imagesActive: a, horizontalInset: s, symbol: c } = e,
    l = a === void 0 || a,
    u = s === void 0 || s,
    d;
  t[0] === r ? (d = t[1]) : ((d = K(r)), (t[0] = r), (t[1] = d));
  let f = d,
    p = u && `overflow-hidden`,
    m;
  t[2] === p ? (m = t[3]) : ((m = o(`h-full min-h-0 select-none`, p)), (t[2] = p), (t[3] = m));
  let h;
  t[4] !== u || t[5] !== l || t[6] !== i || t[7] !== c || t[8] !== f
    ? ((h = (0, $.jsx)(X, {
        pageId: i,
        units: f,
        thumbnail: !0,
        imagesActive: l,
        horizontalInset: u,
        symbol: c,
      })),
      (t[4] = u),
      (t[5] = l),
      (t[6] = i),
      (t[7] = c),
      (t[8] = f),
      (t[9] = h))
    : (h = t[9]);
  let g;
  return (
    t[10] !== n || t[11] !== m || t[12] !== h
      ? ((g = (0, $.jsx)(`div`, { ref: n, "aria-hidden": !0, className: m, inert: !0, children: h })),
        (t[10] = n),
        (t[11] = m),
        (t[12] = h),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
function X(e) {
  let r = (0, Z.c)(60),
    {
      pageId: i,
      units: a,
      blockIndex: s,
      getVisibleBlockRef: c,
      thumbnail: l,
      imagesActive: u,
      horizontalInset: d,
      symbol: p,
    } = e,
    g = l !== void 0 && l,
    v = u === void 0 || u,
    b = d === void 0 || d,
    x = m(),
    S = (0, Q.useId)(),
    C;
  r[0] === S ? (C = r[1]) : ((C = () => new ce(S)), (r[0] = S), (r[1] = C));
  let [w] = (0, Q.useState)(C),
    [T] = (0, Q.useState)(pe),
    [E] = (0, Q.useState)(fe),
    D = (0, Q.useRef)(null),
    O,
    k,
    A,
    j;
  r[2] !== s || r[3] !== x.formatMessage || r[4] !== g || r[5] !== a
    ? ((j = ee(x.formatMessage)),
      (A = !g && s == null ? a.slice(0, me) : a),
      (O = y(j.parse(``), A, j)),
      (k = A.length < a.length),
      k &&
        (O.lastChild?.type.name === `list` || O.lastChild?.type.name === `ordered_list`) &&
        (O.childCount > 1
          ? (O = O.cut(0, O.content.size - O.lastChild.nodeSize))
          : ((O = y(j.parse(``), a, j)), (k = !1))),
      (r[2] = s),
      (r[3] = x.formatMessage),
      (r[4] = g),
      (r[5] = a),
      (r[6] = O),
      (r[7] = k),
      (r[8] = A),
      (r[9] = j))
    : ((O = r[6]), (k = r[7]), (A = r[8]), (j = r[9]));
  let M;
  r[10] !== s ||
  r[11] !== w ||
  r[12] !== O ||
  r[13] !== c ||
  r[14] !== k ||
  r[15] !== T ||
  r[16] !== A ||
  r[17] !== x ||
  r[18] !== j ||
  r[19] !== E ||
  r[20] !== g ||
  r[21] !== a
    ? ((M = (e) => {
        let t = D.current;
        if (t == null || e == null) return;
        let r = g ? Math.min(4, O.childCount) : O.childCount,
          i = () => {
            if (r === O.childCount) return O;
            let e = 0;
            for (let t = 0; t < r; t++) e += O.child(t).nodeSize;
            return O.cut(0, e);
          },
          o = le(t, i(), {
            checkboxes: w,
            onOpenLink: g ? void 0 : de,
            plugins: [
              E.createPlugin(j.schema()),
              T.plugin,
              new n({
                props: {
                  nodeViews: {
                    [te]: (e) => {
                      let { title: n } = re.parse(e.attrs),
                        r = t.ownerDocument.createElement(`div`);
                      return (
                        (r.className = `text-sm text-secondary`),
                        (r.textContent = x.formatMessage(
                          {
                            id: `codex.page.preview.visualization`,
                            defaultMessage: `{title} — open the page to interact`,
                            description: `Placeholder for an interactive visualization in a Page hover preview; title is the visualization title`,
                          },
                          { title: n },
                        )),
                        { dom: r }
                      );
                    },
                  },
                },
              }),
            ],
          });
        if (g) {
          let n = () => {
            let n = t.offsetWidth;
            if (n > 0 && e.clientWidth > 0) {
              let a = e.clientWidth / n;
              t.style.transform = `scale(${a})`;
              let s = parseFloat(getComputedStyle(t).paddingBottom) || 0;
              for (; r < O.childCount && (t.scrollHeight - s) * a < e.clientHeight;)
                ((r = Math.min(O.childCount, r * 2)), z(o, i()));
            }
          };
          n();
          let a = new ResizeObserver(n);
          return (
            a.observe(e),
            a.observe(t),
            () => {
              (a.disconnect(), o.destroy());
            }
          );
        }
        let l = _(O, j, k ? A.length : a.length),
          u;
        (k &&
          (u = requestAnimationFrame(() => {
            u = requestAnimationFrame(() => {
              let e = y(j.parse(``), a, j);
              (z(o, e), (l = _(e, j, a.length)));
            });
          })),
          c != null &&
            (c.current = () => {
              if (e.scrollTop === 0) return null;
              let t =
                  e.getBoundingClientRect().top +
                  parseFloat(getComputedStyle(e).paddingTop) * (e.currentCSSZoom || 1),
                n = l.findIndex((e) => {
                  let n = e == null ? null : I(o, e.from);
                  return n instanceof HTMLElement && n.getBoundingClientRect().bottom > t;
                });
              return n < 0 ? null : n;
            }));
        let d = s == null ? null : l[s],
          f = d == null ? null : I(o, d.from),
          p = t.style.paddingBottom,
          m;
        if (f instanceof HTMLElement) {
          let n = parseFloat(getComputedStyle(t).paddingBottom) || 0,
            r = () => {
              let r = e.currentCSSZoom || 1,
                i = getComputedStyle(e),
                a = parseFloat(i.paddingTop),
                o = f.getBoundingClientRect().top,
                s = Math.max(
                  n,
                  e.clientHeight -
                    a -
                    parseFloat(i.paddingBottom) -
                    (t.getBoundingClientRect().bottom - o) / r +
                    (parseFloat(getComputedStyle(t).paddingBottom) || 0),
                );
              ((t.style.paddingBottom = `${s}px`),
                e.scrollTo({
                  top: e.scrollTop + (f.getBoundingClientRect().top - e.getBoundingClientRect().top) / r - a,
                }));
            };
          r();
          let i = new ResizeObserver(r);
          (i.observe(t), i.observe(e));
          let a = new AbortController();
          m = () => {
            (i.disconnect(), a.abort());
          };
          for (let t of [`wheel`, `pointerdown`, `keydown`])
            e.addEventListener(t, m, { passive: !0, signal: a.signal });
        } else e.scrollTo({ top: 0 });
        return () => {
          (u != null && cancelAnimationFrame(u),
            c != null && (c.current = null),
            m?.(),
            (t.style.paddingBottom = p),
            o.destroy());
        };
      }),
      (r[10] = s),
      (r[11] = w),
      (r[12] = O),
      (r[13] = c),
      (r[14] = k),
      (r[15] = T),
      (r[16] = A),
      (r[17] = x),
      (r[18] = j),
      (r[19] = E),
      (r[20] = g),
      (r[21] = a),
      (r[22] = M))
    : (M = r[22]);
  let N = M,
    P = g && V.PageThumbnail,
    F;
  r[23] !== b || r[24] !== P || r[25] !== g
    ? ((F = o(
        oe.root,
        P,
        g ? [`origin-top-left py-8 will-change-transform`, b ? `w-md px-8` : `w-sm px-0`] : `px-0`,
      )),
      (r[23] = b),
      (r[24] = P),
      (r[25] = g),
      (r[26] = F))
    : (F = r[26]);
  let L;
  r[27] === p
    ? (L = r[28])
    : ((L =
        p !== void 0 &&
        p?.kind !== `none` &&
        (0, $.jsx)(`div`, {
          className: `mb-6`,
          children: (0, $.jsx)(ne, {
            className: `text-5xl`,
            symbol: p,
            size: 48,
            defaultIcon: (0, $.jsx)(t, { className: `size-12 text-tertiary`, asset: h }),
          }),
        })),
      (r[27] = p),
      (r[28] = L));
  let R;
  r[29] !== F || r[30] !== L
    ? ((R = (0, $.jsx)(`div`, { ref: D, className: F, style: ae, children: L })),
      (r[29] = F),
      (r[30] = L),
      (r[31] = R))
    : (R = r[31]);
  let B;
  r[32] === w ? (B = r[33]) : ((B = (0, $.jsx)(se, { editable: !1, registry: w })), (r[32] = w), (r[33] = B));
  let H;
  r[34] === E ? (H = r[35]) : ((H = (0, $.jsx)(ie, { registry: E })), (r[34] = E), (r[35] = H));
  let U;
  r[36] !== T || r[37] !== v || r[38] !== i
    ? ((U = (0, $.jsx)(ue, { pageId: i, registry: T, active: v })),
      (r[36] = T),
      (r[37] = v),
      (r[38] = i),
      (r[39] = U))
    : (U = r[39]);
  let W;
  r[40] !== B || r[41] !== H || r[42] !== U || r[43] !== R
    ? ((W = (0, $.jsxs)($.Fragment, { children: [R, B, H, U] })),
      (r[40] = B),
      (r[41] = H),
      (r[42] = U),
      (r[43] = R),
      (r[44] = W))
    : (W = r[44]);
  let G = W;
  if (g) {
    let e = b && `overflow-hidden`,
      t;
    r[45] === e ? (t = r[46]) : ((t = o(V.PageDocumentTheme, `h-full`, e)), (r[45] = e), (r[46] = t));
    let n;
    return (
      r[47] !== G || r[48] !== N || r[49] !== t
        ? ((n = (0, $.jsx)(`div`, { ref: N, className: t, children: G })),
          (r[47] = G),
          (r[48] = N),
          (r[49] = t),
          (r[50] = n))
        : (n = r[50]),
      n
    );
  }
  let K;
  r[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = o(V.PageDocumentTheme, `relative grid min-h-0 flex-1 overflow-hidden`)), (r[51] = K))
    : (K = r[51]);
  let q;
  r[52] === x
    ? (q = r[53])
    : ((q = x.formatMessage({
        id: `codex.page.preview.content`,
        defaultMessage: `Page content`,
        description: `Accessible label for the scrollable document in a Page hover preview`,
      })),
      (r[52] = x),
      (r[53] = q));
  let J;
  r[54] !== N || r[55] !== q
    ? ((J = { "aria-label": q, ref: N, role: `region`, tabIndex: 0 }), (r[54] = N), (r[55] = q), (r[56] = J))
    : (J = r[56]);
  let Y;
  return (
    r[57] !== G || r[58] !== J
      ? ((Y = (0, $.jsx)(f, {
          className: K,
          fade: `mask`,
          scrollClassName: `min-h-0 overflow-auto overscroll-contain p-5`,
          scrollProps: J,
          children: G,
        })),
        (r[57] = G),
        (r[58] = J),
        (r[59] = Y))
      : (Y = r[59]),
    Y
  );
}
function de(e, t) {
  (e.button === 0 || e.button === 1) && x({ event: e, href: t, initiator: `markdown_link_click` });
}
function fe() {
  return new D();
}
function pe() {
  return new W();
}
var Z, Q, $, me;
function he() {
  return (he = e(() => {
    ((Z = u()),
      i(),
      N(),
      M(),
      s(),
      c(),
      (Q = r()),
      d(),
      w(),
      l(),
      C(),
      p(),
      j(),
      v(),
      T(),
      P(),
      L(),
      b(),
      S(),
      F(),
      R(),
      O(),
      A(),
      H(),
      U(),
      G(),
      B(),
      ($ = a()),
      (me = 32));
  }))();
}
export { Y as n, he as r, q as t };
//# sourceMappingURL=document-1143a4fe17b0.js.map
