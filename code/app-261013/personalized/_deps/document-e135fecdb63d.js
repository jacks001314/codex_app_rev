import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Mz as n,
  NO as r,
  Nn as i,
  Nz as a,
  PO as o,
  Pn as s,
  VDt as c,
  _Mt as l,
  cCt as u,
  gMt as d,
  jDt as f,
  mCt as p,
  vzt as m,
  xMt as h,
  yzt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  $m as _,
  D3 as ee,
  Dh as v,
  F3 as te,
  J3 as ne,
  JPn as y,
  Jtn as re,
  O3 as b,
  Oh as x,
  P3 as S,
  Qm as ie,
  XPn as C,
  Ytn as w,
  al as T,
  d3 as E,
  f3 as D,
  h3 as O,
  hp as k,
  mp as A,
  tl as j,
} from "./app-initial-5851df3f6cb1.js";
import { n as ae, t as M } from "./writing-block-theme-61c0ed2a12ed.js";
import { n as oe, t as N } from "./writing-block-editor-styles-90146127a9c9.js";
import { n as P, t as se } from "./checkboxes-e2ffcb23d363.js";
import { J as F, K as I, O as ce, k as L, n as R, r as z, t as le } from "./preview-3e5329112556.js";
import { n as B, t as V } from "./editor.module-79b8a30b4fbe.js";
import { i as H, n as U, r as W, t as ue } from "./images-7c1b1f09d7e2.js";
import { n as G, t as K } from "./thumbnail-units-f6617d0ee142.js";
function q(e) {
  let n = (0, Z.c)(18),
    { document: r, pageId: i, blockIndex: a, onOpen: o } = e,
    s = (0, Q.useRef)(null);
  if (r.units.every(J)) {
    let e;
    n[0] === o ? (e = n[1]) : ((e = () => o(null)), (n[0] = o), (n[1] = e));
    let a;
    n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(A, {
          className: `min-h-0 flex-1 select-none`,
          children: (0, $.jsx)(`span`, {
            role: `status`,
            children: (0, $.jsx)(t, {
              id: `codex.page.preview.empty`,
              defaultMessage: `This page is empty`,
              description: `Shown in a hover preview when the referenced Page has no document content`,
            }),
          }),
        })),
        (n[2] = a))
      : (a = n[2]);
    let s;
    return (
      n[3] !== r.title || n[4] !== i || n[5] !== e
        ? ((s = (0, $.jsx)(j, { pageId: i, title: r.title, onOpen: e, children: a })),
          (n[3] = r.title),
          (n[4] = i),
          (n[5] = e),
          (n[6] = s))
        : (s = n[6]),
      s
    );
  }
  let c;
  n[7] === o ? (c = n[8]) : ((c = () => o(s.current?.() ?? null)), (n[7] = o), (n[8] = c));
  let l;
  n[9] !== a || n[10] !== r.units || n[11] !== i
    ? ((l = (0, $.jsx)(X, { pageId: i, units: r.units, blockIndex: a, getVisibleBlockRef: s })),
      (n[9] = a),
      (n[10] = r.units),
      (n[11] = i),
      (n[12] = l))
    : (l = n[12]);
  let u;
  return (
    n[13] !== r.title || n[14] !== i || n[15] !== c || n[16] !== l
      ? ((u = (0, $.jsx)(j, { pageId: i, title: r.title, onOpen: c, children: l })),
        (n[13] = r.title),
        (n[14] = i),
        (n[15] = c),
        (n[16] = l),
        (n[17] = u))
      : (u = n[17]),
    u
  );
}
function J(e) {
  return e.kind === `markdown` && e.markdown.trim() === ``;
}
function Y(e) {
  let t = (0, Z.c)(14),
    { ref: n, document: r, pageId: i, imagesActive: a, horizontalInset: o, symbol: s } = e,
    c = a === void 0 || a,
    l = o === void 0 || o,
    u;
  t[0] === r ? (u = t[1]) : ((u = K(r)), (t[0] = r), (t[1] = u));
  let f = u,
    p = l && `overflow-hidden`,
    m;
  t[2] === p ? (m = t[3]) : ((m = d(`h-full min-h-0 select-none`, p)), (t[2] = p), (t[3] = m));
  let h;
  t[4] !== l || t[5] !== c || t[6] !== i || t[7] !== s || t[8] !== f
    ? ((h = (0, $.jsx)(X, {
        pageId: i,
        units: f,
        thumbnail: !0,
        imagesActive: c,
        horizontalInset: l,
        symbol: s,
      })),
      (t[4] = l),
      (t[5] = c),
      (t[6] = i),
      (t[7] = s),
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
  let t = (0, Z.c)(60),
    {
      pageId: a,
      units: o,
      blockIndex: s,
      getVisibleBlockRef: l,
      thumbnail: f,
      imagesActive: p,
      horizontalInset: m,
      symbol: h,
    } = e,
    g = f !== void 0 && f,
    _ = p === void 0 || p,
    v = m === void 0 || m,
    y = c(),
    b = (0, Q.useId)(),
    x;
  t[0] === b ? (x = t[1]) : ((x = () => new ce(b)), (t[0] = b), (t[1] = x));
  let [S] = (0, Q.useState)(x),
    [C] = (0, Q.useState)(pe),
    [w] = (0, Q.useState)(fe),
    T = (0, Q.useRef)(null),
    O,
    k,
    A,
    j;
  t[2] !== s || t[3] !== y.formatMessage || t[4] !== g || t[5] !== o
    ? ((j = ee(y.formatMessage)),
      (A = !g && s == null ? o.slice(0, me) : o),
      (O = E(j.parse(``), A, j)),
      (k = A.length < o.length),
      k &&
        (O.lastChild?.type.name === `list` || O.lastChild?.type.name === `ordered_list`) &&
        (O.childCount > 1
          ? (O = O.cut(0, O.content.size - O.lastChild.nodeSize))
          : ((O = E(j.parse(``), o, j)), (k = !1))),
      (t[2] = s),
      (t[3] = y.formatMessage),
      (t[4] = g),
      (t[5] = o),
      (t[6] = O),
      (t[7] = k),
      (t[8] = A),
      (t[9] = j))
    : ((O = t[6]), (k = t[7]), (A = t[8]), (j = t[9]));
  let M;
  t[10] !== s ||
  t[11] !== S ||
  t[12] !== O ||
  t[13] !== l ||
  t[14] !== k ||
  t[15] !== C ||
  t[16] !== A ||
  t[17] !== y ||
  t[18] !== j ||
  t[19] !== w ||
  t[20] !== g ||
  t[21] !== o
    ? ((M = (e) => {
        let t = T.current;
        if (t == null || e == null) return;
        let n = g ? Math.min(4, O.childCount) : O.childCount,
          r = () => {
            if (n === O.childCount) return O;
            let e = 0;
            for (let t = 0; t < n; t++) e += O.child(t).nodeSize;
            return O.cut(0, e);
          },
          i = le(t, r(), {
            checkboxes: S,
            onOpenLink: g ? void 0 : de,
            plugins: [
              w.createPlugin(j.schema()),
              C.plugin,
              new u({
                props: {
                  nodeViews: {
                    [ne]: (e) => {
                      let { title: n } = te.parse(e.attrs),
                        r = t.ownerDocument.createElement(`div`);
                      return (
                        (r.className = `text-sm text-secondary`),
                        (r.textContent = y.formatMessage(
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
          let a = () => {
            let a = t.offsetWidth;
            if (a > 0 && e.clientWidth > 0) {
              let o = e.clientWidth / a;
              t.style.transform = `scale(${o})`;
              let s = parseFloat(getComputedStyle(t).paddingBottom) || 0;
              for (; n < O.childCount && (t.scrollHeight - s) * o < e.clientHeight;)
                ((n = Math.min(O.childCount, n * 2)), z(i, r()));
            }
          };
          a();
          let o = new ResizeObserver(a);
          return (
            o.observe(e),
            o.observe(t),
            () => {
              (o.disconnect(), i.destroy());
            }
          );
        }
        let a = D(O, j, k ? A.length : o.length),
          c;
        (k &&
          (c = requestAnimationFrame(() => {
            c = requestAnimationFrame(() => {
              let e = E(j.parse(``), o, j);
              (z(i, e), (a = D(e, j, o.length)));
            });
          })),
          l != null &&
            (l.current = () => {
              if (e.scrollTop === 0) return null;
              let t =
                  e.getBoundingClientRect().top +
                  parseFloat(getComputedStyle(e).paddingTop) * (e.currentCSSZoom || 1),
                n = a.findIndex((e) => {
                  let n = e == null ? null : I(i, e.from);
                  return n instanceof HTMLElement && n.getBoundingClientRect().bottom > t;
                });
              return n < 0 ? null : n;
            }));
        let d = s == null ? null : a[s],
          f = d == null ? null : I(i, d.from),
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
          (c != null && cancelAnimationFrame(c),
            l != null && (l.current = null),
            m?.(),
            (t.style.paddingBottom = p),
            i.destroy());
        };
      }),
      (t[10] = s),
      (t[11] = S),
      (t[12] = O),
      (t[13] = l),
      (t[14] = k),
      (t[15] = C),
      (t[16] = A),
      (t[17] = y),
      (t[18] = j),
      (t[19] = w),
      (t[20] = g),
      (t[21] = o),
      (t[22] = M))
    : (M = t[22]);
  let N = M,
    P = g && V.PageThumbnail,
    F;
  t[23] !== v || t[24] !== P || t[25] !== g
    ? ((F = d(
        oe.root,
        P,
        g ? [`origin-top-left py-8 will-change-transform`, v ? `w-md px-8` : `w-sm px-0`] : `px-0`,
      )),
      (t[23] = v),
      (t[24] = P),
      (t[25] = g),
      (t[26] = F))
    : (F = t[26]);
  let L;
  t[27] === h
    ? (L = t[28])
    : ((L =
        h !== void 0 &&
        h?.kind !== `none` &&
        (0, $.jsx)(`div`, {
          className: `mb-6`,
          children: (0, $.jsx)(re, {
            className: `text-5xl`,
            symbol: h,
            size: 48,
            defaultIcon: (0, $.jsx)(n, { className: `size-12 text-tertiary`, asset: i }),
          }),
        })),
      (t[27] = h),
      (t[28] = L));
  let R;
  t[29] !== F || t[30] !== L
    ? ((R = (0, $.jsx)(`div`, { ref: T, className: F, style: ae, children: L })),
      (t[29] = F),
      (t[30] = L),
      (t[31] = R))
    : (R = t[31]);
  let B;
  t[32] === S ? (B = t[33]) : ((B = (0, $.jsx)(se, { editable: !1, registry: S })), (t[32] = S), (t[33] = B));
  let H;
  t[34] === w ? (H = t[35]) : ((H = (0, $.jsx)(ie, { registry: w })), (t[34] = w), (t[35] = H));
  let U;
  t[36] !== C || t[37] !== _ || t[38] !== a
    ? ((U = (0, $.jsx)(ue, { pageId: a, registry: C, active: _ })),
      (t[36] = C),
      (t[37] = _),
      (t[38] = a),
      (t[39] = U))
    : (U = t[39]);
  let W;
  t[40] !== B || t[41] !== H || t[42] !== U || t[43] !== R
    ? ((W = (0, $.jsxs)($.Fragment, { children: [R, B, H, U] })),
      (t[40] = B),
      (t[41] = H),
      (t[42] = U),
      (t[43] = R),
      (t[44] = W))
    : (W = t[44]);
  let G = W;
  if (g) {
    let e = v && `overflow-hidden`,
      n;
    t[45] === e ? (n = t[46]) : ((n = d(V.PageDocumentTheme, `h-full`, e)), (t[45] = e), (t[46] = n));
    let r;
    return (
      t[47] !== G || t[48] !== N || t[49] !== n
        ? ((r = (0, $.jsx)(`div`, { ref: N, className: n, children: G })),
          (t[47] = G),
          (t[48] = N),
          (t[49] = n),
          (t[50] = r))
        : (r = t[50]),
      r
    );
  }
  let K;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = d(V.PageDocumentTheme, `relative grid min-h-0 flex-1 overflow-hidden`)), (t[51] = K))
    : (K = t[51]);
  let q;
  t[52] === y
    ? (q = t[53])
    : ((q = y.formatMessage({
        id: `codex.page.preview.content`,
        defaultMessage: `Page content`,
        description: `Accessible label for the scrollable document in a Page hover preview`,
      })),
      (t[52] = y),
      (t[53] = q));
  let J;
  t[54] !== N || t[55] !== q
    ? ((J = { "aria-label": q, ref: N, role: `region`, tabIndex: 0 }), (t[54] = N), (t[55] = q), (t[56] = J))
    : (J = t[56]);
  let Y;
  return (
    t[57] !== G || t[58] !== J
      ? ((Y = (0, $.jsx)(r, {
          className: K,
          fade: `mask`,
          scrollClassName: `min-h-0 overflow-auto overscroll-contain p-5`,
          scrollProps: J,
          children: G,
        })),
        (t[57] = G),
        (t[58] = J),
        (t[59] = Y))
      : (Y = t[59]),
    Y
  );
}
function de(e, t) {
  (e.button === 0 || e.button === 1) && C({ event: e, href: t, initiator: `markdown_link_click` });
}
function fe() {
  return new v();
}
function pe() {
  return new W();
}
var Z, Q, $, me;
function he() {
  return (he = e(() => {
    ((Z = m()),
      s(),
      N(),
      M(),
      l(),
      p(),
      (Q = g()),
      f(),
      y(),
      a(),
      k(),
      o(),
      _(),
      x(),
      w(),
      P(),
      L(),
      O(),
      b(),
      F(),
      R(),
      S(),
      T(),
      H(),
      U(),
      G(),
      B(),
      ($ = h()),
      (me = 32));
  }))();
}
export { Y as n, he as r, q as t };
//# sourceMappingURL=document-e135fecdb63d.js.map
