const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pdf-c95b10174555.js",
      "./pdf-dc559eb66b2a.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Rt as n,
  A3t as r,
  Amn as i,
  B6t as a,
  F3t as o,
  G5t as s,
  GQt as c,
  JZ as l,
  Jit as u,
  KL as d,
  KZ as f,
  Kit as p,
  N3t as m,
  O3t as h,
  Opn as g,
  QRt as _,
  QXt as v,
  Qit as y,
  Rpn as b,
  Spn as x,
  UZ as S,
  YZ as C,
  Zit as w,
  _mn as T,
  a3t as E,
  aH as D,
  bmn as O,
  c$ as k,
  e0t as A,
  eQ as j,
  eZt as ee,
  f$ as M,
  fQ as te,
  fQt as N,
  g$ as ne,
  gRt as P,
  gmn as re,
  hH as F,
  hmn as ie,
  kmn as I,
  lW as ae,
  o3t as L,
  oH as oe,
  p$ as se,
  q5t as ce,
  qL as le,
  qZ as ue,
  sH as de,
  sW as fe,
  u$ as pe,
  uH as me,
  uQ as he,
  xRt as ge,
  xmn as _e,
  yRt as ve,
  zpn as ye,
} from "./app-initial-f094ef01c64d.js";
import {
  $v as be,
  Bv as R,
  Dw as xe,
  Ew as Se,
  Fv as Ce,
  Gv as we,
  Hv as Te,
  Iv as z,
  Jv as Ee,
  Lv as B,
  Qv as De,
  Qy as Oe,
  Rv as ke,
  Uv as Ae,
  Vv as V,
  Wv as je,
  Xv as Me,
  Yv as Ne,
  Zv as Pe,
  ay as Fe,
  eb as Ie,
  ey as Le,
  iy as H,
  kw as Re,
  ny as ze,
  oy as Be,
  ry as Ve,
  sy as He,
  ty as U,
  zv as Ue,
} from "./app-primary-4c40d73a1074.js";
import { n as We, t as Ge } from "./presentation-annotation-coachmark-b46c0174f212.js";
import { n as Ke, t as qe } from "./artifact-originating-turn-1d99e170e424.js";
import { n as Je, r as Ye, t as Xe } from "./artifact-preview-header-abbff5f8a3ae.js";
import { n as Ze, t as Qe } from "./artifact-annotation-batch-controls-b9f12cd27bf6.js";
import { n as $e, t as et } from "./artifact-preview-status-ce3d7c794ec8.js";
import { n as tt, t as nt } from "./annotation-mode-button-fa4bee24eb8d.js";
function rt(e) {
  let t = (0, it.c)(34),
    {
      containerRef: n,
      initialPage: r,
      isPageLayoutReady: i,
      onPageChange: a,
      pageSelector: o,
      totalPages: s,
    } = e,
    c = r === void 0 ? 1 : r,
    [l, u] = (0, q.useState)(c),
    d = (0, q.useRef)(c),
    f = (0, q.useRef)(c),
    p = (0, q.useRef)(null),
    m = (0, q.useRef)(null),
    h = G(l, s),
    g;
  t[0] === a
    ? (g = t[1])
    : ((g = (e) => {
        e !== d.current && ((d.current = e), u(e), a?.(e));
      }),
      (t[0] = a),
      (t[1] = g));
  let _ = y(g),
    v;
  t[2] !== n || t[3] !== o || t[4] !== _
    ? ((v = (e, t) => {
        let r = n.current;
        if (r == null) return;
        let i = W(r, o).at(e - 1);
        if (i == null) return;
        (m.current?.(), (m.current = null), (p.current = e));
        let a = null,
          s = () => {
            (a != null && (clearTimeout(a), (a = null)), r.removeEventListener(`scroll`, l));
          },
          c = () => {
            if (p.current !== e) return;
            ((p.current = null), s());
            let t = K({ container: r, pageElements: W(r, o), pageVisibilityByElement: new Map() });
            t != null && _(t);
          },
          l = () => {
            (a != null && clearTimeout(a), (a = setTimeout(c, ot)));
          };
        ((m.current = s),
          i.scrollIntoView(t == null ? { block: `start` } : { behavior: t, block: `start` }),
          _(e),
          l(),
          r.addEventListener(`scroll`, l));
      }),
      (t[2] = n),
      (t[3] = o),
      (t[4] = _),
      (t[5] = v))
    : (v = t[5]);
  let b = y(v),
    x,
    S;
  (t[6] !== n || t[7] !== i || t[8] !== o || t[9] !== b || t[10] !== s || t[11] !== _
    ? ((x = () => {
        let e = n.current;
        if (!i || e == null || s < 1 || f.current == null || W(e, o).length === 0) return;
        let t = G(f.current, s);
        ((f.current = null), t > 1 ? b(t, void 0) : _(t));
      }),
      (S = [n, i, o, b, s, _]),
      (t[6] = n),
      (t[7] = i),
      (t[8] = o),
      (t[9] = b),
      (t[10] = s),
      (t[11] = _),
      (t[12] = x),
      (t[13] = S))
    : ((x = t[12]), (S = t[13])),
    (0, q.useLayoutEffect)(x, S));
  let C, w;
  (t[14] !== n || t[15] !== i || t[16] !== o || t[17] !== s || t[18] !== _
    ? ((C = () => {
        let e = n.current;
        if (!i || e == null || s < 1 || typeof IntersectionObserver > `u`) return;
        let t = W(e, o);
        if (t.length === 0) return;
        let r = new Map(),
          a = new IntersectionObserver(
            (n) => {
              for (let e of n) r.set(e.target, e.intersectionRatio);
              let i = K({ container: e, pageElements: t, pageVisibilityByElement: r });
              i != null &&
                ((p.current != null && i !== p.current) ||
                  (i === p.current && ((p.current = null), m.current?.(), (m.current = null)),
                  _(i)));
            },
            { root: e, threshold: at },
          );
        for (let e of t) (r.set(e, 0), a.observe(e));
        let c = K({ container: e, pageElements: t, pageVisibilityByElement: r });
        return (
          c != null && p.current == null && _(c),
          () => {
            (a.disconnect(), (p.current = null), m.current?.(), (m.current = null));
          }
        );
      }),
      (w = [n, i, o, s, _]),
      (t[14] = n),
      (t[15] = i),
      (t[16] = o),
      (t[17] = s),
      (t[18] = _),
      (t[19] = C),
      (t[20] = w))
    : ((C = t[19]), (w = t[20])),
    (0, q.useEffect)(C, w));
  let T;
  t[21] === b
    ? (T = t[22])
    : ((T = (e) => {
        b(e, `smooth`);
      }),
      (t[21] = b),
      (t[22] = T));
  let E = T,
    D;
  t[23] !== h || t[24] !== E
    ? ((D = () => {
        let e = h - 1;
        e < 1 || E(e);
      }),
      (t[23] = h),
      (t[24] = E),
      (t[25] = D))
    : (D = t[25]);
  let O = D,
    k;
  t[26] !== h || t[27] !== E || t[28] !== s
    ? ((k = () => {
        let e = h + 1;
        e > s || E(e);
      }),
      (t[26] = h),
      (t[27] = E),
      (t[28] = s),
      (t[29] = k))
    : (k = t[29]);
  let A = k,
    j;
  return (
    t[30] !== h || t[31] !== A || t[32] !== O
      ? ((j = { currentPage: h, goToNextPage: A, goToPreviousPage: O }),
        (t[30] = h),
        (t[31] = A),
        (t[32] = O),
        (t[33] = j))
      : (j = t[33]),
    j
  );
}
function W(e, t) {
  return Array.from(e.querySelectorAll(t));
}
function G(e, t) {
  return Math.min(Math.max(e, 1), Math.max(t, 1));
}
function K({ container: e, pageElements: t, pageVisibilityByElement: n }) {
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
var it,
  q,
  at,
  ot,
  st = e(() => {
    ((it = I()), (q = t(i(), 1)), w(), (at = [0, 0.25, 0.5, 0.75, 1]), (ot = 100));
  });
function ct(e) {
  let t = (0, dt.c)(10),
    { fileDataUrl: n } = e,
    [r, i] = (0, ft.useState)(null),
    [a, o] = (0, ft.useState)(`loading`),
    [s, c] = (0, ft.useState)(n),
    [l, u] = (0, ft.useState)(0),
    [d, f] = (0, ft.useState)(null),
    [p, m] = (0, ft.useState)(null),
    h,
    g;
  (t[0] === n
    ? ((h = t[1]), (g = t[2]))
    : ((h = () => {
        let e = !1,
          t = null;
        return (
          i(null),
          c(n),
          o(`loading`),
          u(0),
          f(null),
          m(null),
          (async function () {
            try {
              let r = await lt();
              if (e) return;
              let a = ut(n);
              if (a == null) {
                o(`error`);
                return;
              }
              t = r.getDocument({ data: a });
              let s = await t.promise;
              if (e) {
                s.destroy();
                return;
              }
              if (!Number.isSafeInteger(s.numPages) || s.numPages <= 0) {
                (s.destroy(), o(`error`));
                return;
              }
              let c = (await s.getPage(1)).getViewport({ scale: 1 });
              if (e) {
                s.destroy();
                return;
              }
              (m(s), i(n), u(s.numPages), f({ height: c.height, width: c.width }), o(`ready`));
            } catch {
              if (e) return;
              (m(null), i(null), u(0), f(null), o(`error`));
            }
          })(),
          () => {
            ((e = !0), t != null && !t.destroyed && t.destroy());
          }
        );
      }),
      (g = [n]),
      (t[0] = n),
      (t[1] = h),
      (t[2] = g)),
    (0, ft.useEffect)(h, g));
  let _;
  return (
    t[3] !== a || t[4] !== s || t[5] !== r || t[6] !== l || t[7] !== d || t[8] !== p
      ? ((_ = {
          loadedFileDataUrl: r,
          loadState: a,
          loadStateFileDataUrl: s,
          numPages: l,
          pageViewportSize: d,
          pdfDocument: p,
        }),
        (t[3] = a),
        (t[4] = s),
        (t[5] = r),
        (t[6] = l),
        (t[7] = d),
        (t[8] = p),
        (t[9] = _))
      : (_ = t[9]),
    _
  );
}
async function lt() {
  if (typeof window > `u`) throw Error(`pdf.js can only be loaded in the browser`);
  mt ??= re(
    () => import(`./pdf-c95b10174555.js`),
    __vite__mapDeps([0, 1, 2, 3, 4]),
    import.meta.url,
  );
  let e = await mt;
  return (
    (!ht || e.GlobalWorkerOptions.workerSrc !== pt) &&
      ((e.GlobalWorkerOptions.workerSrc = pt), (ht = !0)),
    e
  );
}
function ut(e) {
  let t = e.indexOf(`base64,`);
  if (!e.startsWith(`data:`) || t < 0) return null;
  let n;
  try {
    n = window.atob(e.slice(t + 7));
  } catch {
    return null;
  }
  let r = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e += 1) r[e] = n.charCodeAt(e);
  return r;
}
var dt,
  ft,
  pt,
  mt,
  ht,
  gt = e(() => {
    ((dt = I()),
      (ft = t(i(), 1)),
      T(),
      (pt = new URL(
        `` + new URL(`pdf.worker.min-2ac0aeeaff32.mjs`, import.meta.url).href,
        `` + import.meta.url,
      ).toString()),
      (mt = null),
      (ht = !1));
  }),
  _t = e(() => {});
function J(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `num` in e &&
    typeof e.num == `number` &&
    `gen` in e &&
    typeof e.gen == `number`
  );
}
var vt,
  yt = e(() => {
    vt = class {
      isInPresentationMode = !1;
      externalLinksEnabled = !0;
      constructor({ pageSelector: e, pdfDocument: t, scrollRootRef: n }) {
        ((this.pageSelector = e), (this.pdfDocument = t), (this.scrollRootRef = n));
      }
      pageSelector;
      pdfDocument;
      scrollRootRef;
      get pagesCount() {
        return this.pdfDocument.numPages;
      }
      set page(e) {
        this.scrollToPage(e);
      }
      get page() {
        return 1;
      }
      set rotation(e) {}
      get rotation() {
        return 0;
      }
      set externalLinkEnabled(e) {
        this.externalLinksEnabled = e;
      }
      get externalLinkEnabled() {
        return this.externalLinksEnabled;
      }
      async goToDestination(e) {
        let t = typeof e == `string` ? await this.pdfDocument.getDestination(e) : e,
          n = t == null ? null : await this.getDestinationPageNumber(t);
        n != null && this.scrollToPage(n);
      }
      goToPage(e) {
        let t = Number(e);
        Number.isInteger(t) && this.scrollToPage(t);
      }
      goToXY(e) {
        this.scrollToPage(e);
      }
      addLinkAttributes(e, t) {
        if (!t || !this.externalLinksEnabled) {
          ((e.href = ``), (e.onclick = null));
          return;
        }
        ((e.href = t),
          (e.title = t),
          (e.target = `_blank`),
          (e.rel = `noopener noreferrer nofollow`),
          (e.onclick = null));
      }
      getDestinationHash(e) {
        return typeof e == `string` && e.length > 0
          ? this.getAnchorUrl(`#${window.encodeURIComponent(e)}`)
          : this.getAnchorUrl(``);
      }
      getAnchorUrl(e) {
        return typeof e == `string` ? e : ``;
      }
      setHash(e) {}
      executeNamedAction(e) {}
      executeSetOCGState(e) {}
      async getDestinationPageNumber(e) {
        let t = e[0];
        if (typeof t == `number` && Number.isInteger(t)) return t + 1;
        if (!J(t)) return null;
        let n = this.pdfDocument.cachedPageNumber(t);
        if (n != null) return n;
        try {
          return (await this.pdfDocument.getPageIndex(t)) + 1;
        } catch {
          return null;
        }
      }
      scrollToPage(e) {
        e < 1 ||
          e > this.pdfDocument.numPages ||
          (
            this.scrollRootRef.current?.querySelector(
              `${this.pageSelector}[data-page-number="${e}"]`,
            ) ?? null
          )?.scrollIntoView({ block: `start`, inline: `nearest` });
      }
    };
  });
function bt(e) {
  let t = (0, xt.c)(8),
    { deferMs: n, page: r, pageSelector: i, pdfDocument: a, scrollRootRef: o } = e,
    s = (0, St.useRef)(null),
    c,
    l;
  (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o
    ? ((c = () => {
        let e = s.current;
        if (e == null) return;
        let t = e;
        t.innerHTML = ``;
        let c = !1,
          l = null,
          u = async function () {
            let e = await lt(),
              n = await r.getAnnotations();
            if (c || n.length === 0) return;
            let s = r.getViewport({ scale: 1 }),
              l = new vt({ pageSelector: i, pdfDocument: a, scrollRootRef: o });
            await new e.AnnotationLayer({
              accessibilityManager: void 0,
              annotationCanvasMap: void 0,
              annotationEditorUIManager: void 0,
              annotationStorage: void 0,
              commentManager: void 0,
              div: t,
              linkService: l,
              page: r,
              structTreeLayer: void 0,
              viewport: s,
            }).render({
              annotations: n,
              div: t,
              linkService: l,
              page: r,
              renderForms: !1,
              viewport: s,
            });
          };
        return (
          (l = setTimeout(() => {
            u();
          }, n)),
          () => {
            ((c = !0), l != null && clearTimeout(l), (t.innerHTML = ``));
          }
        );
      }),
      (l = [n, r, i, a, o]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = c),
      (t[6] = l))
    : ((c = t[5]), (l = t[6])),
    (0, St.useEffect)(c, l));
  let u;
  return (
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, Ct.jsx)(`div`, { ref: s, className: `annotationLayer` })), (t[7] = u))
      : (u = t[7]),
    u
  );
}
var xt,
  St,
  Ct,
  wt = e(() => {
    ((xt = I()), (St = t(i(), 1)), gt(), yt(), (Ct = ie()));
  });
function Tt({ pageElement: e, pageSize: t }) {
  let n = e.querySelector(`.textLayer`),
    r = e.ownerDocument.getSelection();
  if (n == null || r == null || r.isCollapsed || r.rangeCount === 0 || !Pt(r, n)) return null;
  let i = Y(r.toString());
  if (i.length === 0) return null;
  let a = r.getRangeAt(0);
  if (!n.contains(a.commonAncestorContainer)) return null;
  let o = Array.from(a.getClientRects()),
    s = Pe({ clientRects: o, pageElement: e, pageSize: t });
  if (s == null) return null;
  let c = De({ clientRects: o, pageElement: e, pageSize: t });
  return {
    askForEditAnchor: U({ clientRects: o, pageElement: e, pageSize: t, selection: r }) ?? void 0,
    kind: `region`,
    nearbyText: i,
    rect: s,
    selectedText: i,
    selectionKind: `text`,
    ...(c.length <= 1 ? {} : { selectionRects: c }),
  };
}
function Et({
  clientX: e,
  clientY: t,
  includePreviewMetadata: n,
  layerElement: r,
  pageElement: i,
  pageSize: a,
}) {
  for (let o of i.ownerDocument.elementsFromPoint?.(e, t) ?? []) {
    if (o === r || r.contains(o) || !i.contains(o)) continue;
    let e = At({ includePreviewMetadata: n, pageElement: i, pageSize: a, target: o });
    if (e != null) return e;
  }
  return null;
}
function Dt(e, t = !1) {
  let n = be(e.start, e.current);
  return !t && n.width < Lt && n.height < Lt
    ? { kind: `point`, point: e.current }
    : { kind: `region`, rect: n };
}
function Ot(e) {
  return (
    Math.abs(e.clientCurrent.x - e.clientStart.x) >= Rt ||
    Math.abs(e.clientCurrent.y - e.clientStart.y) >= Rt
  );
}
function kt(e) {
  return Le(e);
}
function At({ includePreviewMetadata: e, pageElement: t, pageSize: n, target: r }) {
  let i = jt(r, t);
  if (i == null) return null;
  let a = Pe({ clientRects: [i.element.getBoundingClientRect()], pageElement: t, pageSize: n });
  if (a == null) return null;
  let o = e ? Ft(i.element) : ``;
  return {
    kind: `region`,
    ...(o.length === 0 ? {} : { nearbyText: o }),
    rect: a,
    selectionKind: i.selectionKind,
    ...(i.selectionKind !== `text` || o.length === 0
      ? {}
      : { selectedText: o, selectionRects: [a] }),
  };
}
function jt(e, t) {
  let n = Mt(e, t, Nt);
  if (n != null) return { element: n, selectionKind: `text` };
  let r = Mt(e, t, (e) => e.matches(`.annotationLayer a, .annotationLayer .linkAnnotation`));
  if (r != null) return { element: r, selectionKind: `link` };
  let i = Mt(e, t, (e) => e.matches(`.annotationLayer section`));
  return i == null ? null : { element: i, selectionKind: `annotation` };
}
function Mt(e, t, n) {
  let r = e;
  for (; r != null && r !== t;) {
    if (n(r)) return r;
    r = r.parentElement;
  }
  return null;
}
function Nt(e) {
  return e.matches(`.textLayer span:not(.markedContent)`) && e.getAttribute(`role`) !== `img`;
}
function Pt(e, t) {
  return (
    e.anchorNode != null &&
    e.focusNode != null &&
    t.contains(e.anchorNode) &&
    t.contains(e.focusNode)
  );
}
function Ft(e) {
  let t = [];
  It(e, t);
  let n = Y(t.join(` `));
  return n.length > 0
    ? n
    : Y((e instanceof HTMLAnchorElement ? e : e.querySelector(`a`))?.href ?? ``);
}
function It(e, t) {
  if (e.nodeType === Node.TEXT_NODE) {
    let n = Y(e.textContent ?? ``);
    n.length > 0 && t.push(n);
    return;
  }
  for (let n of e.childNodes) It(n, t);
}
function Y(e) {
  return e.replace(/\s+/g, ` `).trim().slice(0, zt);
}
var Lt,
  Rt,
  zt,
  Bt = e(() => {
    (ze(), (Lt = 8), (Rt = 3), (zt = 500));
  });
function Vt(e) {
  let t = (0, ln.c)(217),
    {
      annotationBatchingEnabled: n,
      comments: i,
      getOriginatingTurn: a,
      isCommentMode: o,
      nextCommentNumber: c,
      onCommentsChange: u,
      onDraftActiveChange: d,
      originatingTurn: f,
      conversationId: p,
      page: m,
      pageCount: h,
      pageNumber: _,
      pageSize: v,
      path: y,
      threadId: x,
      title: S,
    } = e,
    w = r(E),
    T = g(),
    D = (0, X.useRef)(null),
    { shake: O } = Fe(D),
    [k, A] = (0, X.useState)(null),
    [j, M] = (0, X.useState)(null),
    [te, ne] = (0, X.useState)(``),
    [P, re] = (0, X.useState)(null),
    [F, ie] = (0, X.useState)(null),
    [I, ae] = (0, X.useState)(null),
    [L, oe] = (0, X.useState)(null),
    [se, ce] = (0, X.useState)(null),
    [le, de] = (0, X.useState)(!1),
    [fe, pe] = (0, X.useState)(!1),
    me;
  t[0] === T
    ? (me = t[1])
    : ((me = T.formatMessage({
        id: `artifactPdfPreview.commentInput`,
        defaultMessage: `PDF annotation comment`,
        description: `Aria label for the PDF annotation comment input`,
      })),
      (t[0] = T),
      (t[1] = me));
  let he = me,
    ge;
  t[2] === T
    ? (ge = t[3])
    : ((ge = T.formatMessage({
        id: `artifactAnnotationComment.placeholder`,
        defaultMessage: `Describe a change or ask a question`,
        description: `Placeholder text for an artifact annotation comment editor`,
      })),
      (t[2] = T),
      (t[3] = ge));
  let ve = ge,
    ye;
  if (t[4] !== i || t[5] !== _) {
    let e;
    (t[7] === _
      ? (e = t[8])
      : ((e = (e) => e.localPdfContext?.pageNumber === _), (t[7] = _), (t[8] = e)),
      (ye = i.filter(e)),
      (t[4] = i),
      (t[5] = _),
      (t[6] = ye));
  } else ye = t[6];
  let R = ye,
    xe;
  t[9] !== R || t[10] !== se
    ? ((xe = se == null ? null : (R.find((e) => sn(e) === se) ?? null)),
      (t[9] = R),
      (t[10] = se),
      (t[11] = xe))
    : (xe = t[11]);
  let Se = xe,
    Te,
    z;
  t[12] !== R || t[13] !== L
    ? ((Te = L == null ? null : (R.find((e) => sn(e) === L) ?? null)),
      (z = Te == null ? null : Qt(Te)),
      (t[12] = R),
      (t[13] = L),
      (t[14] = Te),
      (t[15] = z))
    : ((Te = t[14]), (z = t[15]));
  let Ee = z,
    De = j ?? Ee,
    Oe;
  bb0: {
    if (j != null) {
      let e;
      (t[16] !== p ||
      t[17] !== j ||
      t[18] !== te ||
      t[19] !== _ ||
      t[20] !== v ||
      t[21] !== y ||
      t[22] !== S
        ? ((e = Yt({
            anchor: j,
            body: te,
            conversationId: p,
            pageNumber: _,
            pageSize: v,
            path: y,
            target: { mode: `create` },
            title: S,
          })),
          (t[16] = p),
          (t[17] = j),
          (t[18] = te),
          (t[19] = _),
          (t[20] = v),
          (t[21] = y),
          (t[22] = S),
          (t[23] = e))
        : (e = t[23]),
        (Oe = e));
      break bb0;
    }
    if (Ee == null || Te == null || L == null) {
      Oe = null;
      break bb0;
    }
    let e;
    (t[24] !== p ||
    t[25] !== Ee ||
    t[26] !== Te ||
    t[27] !== L ||
    t[28] !== _ ||
    t[29] !== v ||
    t[30] !== y ||
    t[31] !== S
      ? ((e = Yt({
          anchor: Ee,
          body: $t(Te),
          conversationId: p,
          pageNumber: _,
          pageSize: v,
          path: y,
          target: { mode: `edit`, commentId: L },
          title: S,
        })),
        (t[24] = p),
        (t[25] = Ee),
        (t[26] = Te),
        (t[27] = L),
        (t[28] = _),
        (t[29] = v),
        (t[30] = y),
        (t[31] = S),
        (t[32] = e))
      : (e = t[32]),
      (Oe = e));
  }
  let V = Oe,
    Ne;
  t[33] !== De || t[34] !== k || t[35] !== v
    ? ((Ne = De == null ? null : en({ anchor: De, layer: k, pageSize: v })),
      (t[33] = De),
      (t[34] = k),
      (t[35] = v),
      (t[36] = Ne))
    : (Ne = t[36]);
  let Pe = Ne,
    Ie = De != null,
    Le;
  t[37] !== j || t[38] !== d || t[39] !== _
    ? ((Le = () => {
        (j != null && d?.(_, !1), M(null), ie(null), ae(null), ne(``), oe(null), de(!1));
      }),
      (t[37] = j),
      (t[38] = d),
      (t[39] = _),
      (t[40] = Le))
    : (Le = t[40]);
  let H = Le,
    Re;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (e) => {
        (ne(e), de(!1));
      }),
      (t[41] = Re))
    : (Re = t[41]);
  let ze = Re,
    He;
  t[42] !== V || t[43] !== H || t[44] !== te || t[45] !== le || t[46] !== O
    ? ((He = () =>
        V == null
          ? !1
          : V.target.mode === `create` && te.trim().length > 0
            ? le
              ? (H(), !0)
              : (de(!0), O(), !1)
            : (H(), !0)),
      (t[42] = V),
      (t[43] = H),
      (t[44] = te),
      (t[45] = le),
      (t[46] = O),
      (t[47] = He))
    : (He = t[47]);
  let U = He,
    Ue;
  t[48] !== De || t[49] !== k || t[50] !== v
    ? ((Ue = () => {
        if (De == null) return;
        let e = en({ anchor: De, layer: k, pageSize: v });
        e != null && we(D.current, e);
      }),
      (t[48] = De),
      (t[49] = k),
      (t[50] = v),
      (t[51] = Ue))
    : (Ue = t[51]);
  let We = (0, X.useEffectEvent)(Ue),
    Ge;
  t[52] !== We || t[53] !== Ie || t[54] !== k
    ? ((Ge = () => {
        if (!Ie || k == null) return;
        let e = k.ownerDocument,
          t = e.defaultView,
          n = () => {
            We();
          };
        (e.addEventListener(`scroll`, n, { capture: !0 }), t?.addEventListener(`resize`, n));
        let r = typeof ResizeObserver > `u` ? null : new ResizeObserver(n);
        return (
          r?.observe(k),
          n(),
          () => {
            (e.removeEventListener(`scroll`, n, { capture: !0 }),
              t?.removeEventListener(`resize`, n),
              r?.disconnect());
          }
        );
      }),
      (t[52] = We),
      (t[53] = Ie),
      (t[54] = k),
      (t[55] = Ge))
    : (Ge = t[55]);
  let Ke;
  (t[56] !== Ie || t[57] !== k
    ? ((Ke = [Ie, k]), (t[56] = Ie), (t[57] = k), (t[58] = Ke))
    : (Ke = t[58]),
    (0, X.useEffect)(Ge, Ke));
  let qe;
  t[59] !== k?.ownerDocument || t[60] !== U
    ? ((qe = (e) => {
        let t = e.target;
        (t instanceof Node && D.current?.contains(t)) ||
          (e.preventDefault(),
          e.stopPropagation(),
          U() &&
            (t instanceof Node ? t.ownerDocument : k?.ownerDocument)
              ?.getSelection()
              ?.removeAllRanges());
      }),
      (t[59] = k?.ownerDocument),
      (t[60] = U),
      (t[61] = qe))
    : (qe = t[61]);
  let Je = (0, X.useEffectEvent)(qe),
    Ye;
  t[62] !== V?.target.mode || t[63] !== Je || t[64] !== o || t[65] !== k
    ? ((Ye = () => {
        if (o || V?.target.mode !== `create` || k == null) return;
        let e = k.ownerDocument,
          t = (e) => {
            Je(e);
          };
        return (
          e.addEventListener(`pointerdown`, t, { capture: !0 }),
          () => {
            e.removeEventListener(`pointerdown`, t, { capture: !0 });
          }
        );
      }),
      (t[62] = V?.target.mode),
      (t[63] = Je),
      (t[64] = o),
      (t[65] = k),
      (t[66] = Ye))
    : (Ye = t[66]);
  let Xe = V?.target.mode,
    Ze;
  (t[67] !== o || t[68] !== k || t[69] !== Xe
    ? ((Ze = [Xe, o, k]), (t[67] = o), (t[68] = k), (t[69] = Xe), (t[70] = Ze))
    : (Ze = t[70]),
    (0, X.useEffect)(Ye, Ze));
  let Qe;
  t[71] !== j || t[72] !== L || t[73] !== o || t[74] !== k || t[75] !== v || t[76] !== U
    ? ((Qe = () => {
        if (o || k == null) return;
        let e = k.parentElement;
        if (e == null) return;
        let t = Tt({ pageElement: e, pageSize: v });
        if (t == null) {
          ie(null);
          return;
        }
        ((j != null || L != null) && !U()) ||
          (ie(t), M(null), ne(``), oe(null), ce(null), ae(null), de(!1));
      }),
      (t[71] = j),
      (t[72] = L),
      (t[73] = o),
      (t[74] = k),
      (t[75] = v),
      (t[76] = U),
      (t[77] = Qe))
    : (Qe = t[77]);
  let $e = (0, X.useEffectEvent)(Qe),
    et;
  t[78] !== o || t[79] !== k || t[80] !== $e
    ? ((et = () => {
        if (k == null || o) return;
        let e = k.parentElement;
        if (e == null) return;
        let t = () => {
          $e();
        };
        return (
          e.addEventListener(`mouseup`, t),
          e.addEventListener(`keyup`, t),
          () => {
            (e.removeEventListener(`mouseup`, t), e.removeEventListener(`keyup`, t));
          }
        );
      }),
      (t[78] = o),
      (t[79] = k),
      (t[80] = $e),
      (t[81] = et))
    : (et = t[81]);
  let tt;
  (t[82] !== o || t[83] !== k
    ? ((tt = [o, k]), (t[82] = o), (t[83] = k), (t[84] = tt))
    : (tt = t[84]),
    (0, X.useEffect)(et, tt));
  let nt;
  t[85] !== o || t[86] !== k || t[87] !== v
    ? ((nt = (e, t, n) => {
        if (!o || k == null) return null;
        let r = k.parentElement;
        return r == null
          ? null
          : Et({
              clientX: e,
              clientY: t,
              includePreviewMetadata: n,
              layerElement: k,
              pageElement: r,
              pageSize: v,
            });
      }),
      (t[85] = o),
      (t[86] = k),
      (t[87] = v),
      (t[88] = nt))
    : (nt = t[88]);
  let rt = nt,
    W;
  t[89] !== j ||
  t[90] !== a ||
  t[91] !== o ||
  t[92] !== d ||
  t[93] !== f ||
  t[94] !== _ ||
  t[95] !== w ||
  t[96] !== x
    ? ((W = (e, t) => {
        (l(
          w,
          {
            artifactType: `pdf`,
            importKind: `pdf`,
            originatingTurn: a == null ? f : a(),
            threadId: x,
          },
          { annotationModeEnabled: o, startSource: t },
        ),
          j ?? d?.(_, !0),
          M(e),
          ie(null),
          ae(null),
          ne(``),
          oe(null),
          ce(null),
          de(!1));
      }),
      (t[89] = j),
      (t[90] = a),
      (t[91] = o),
      (t[92] = d),
      (t[93] = f),
      (t[94] = _),
      (t[95] = w),
      (t[96] = x),
      (t[97] = W))
    : (W = t[97]);
  let G = W,
    K;
  t[98] !== j || t[99] !== L || t[100] !== G || t[101] !== v || t[102] !== F
    ? ((K = (e, t) => {
        if (j != null || L != null || !Ve(e)) return;
        let n = Tt({ pageElement: t, pageSize: v }) ?? (F?.selectionKind === `text` ? null : F);
        n != null && (e.preventDefault(), e.stopPropagation(), G(n, `ask_codex_shortcut`));
      }),
      (t[98] = j),
      (t[99] = L),
      (t[100] = G),
      (t[101] = v),
      (t[102] = F),
      (t[103] = K))
    : (K = t[103]);
  let it = (0, X.useEffectEvent)(K),
    q;
  t[104] !== o || t[105] !== k || t[106] !== it
    ? ((q = () => {
        if (k == null || o) return;
        let e = k.parentElement;
        if (e == null) return;
        let t = (t) => {
          it(t, e);
        };
        return (
          e.ownerDocument.addEventListener(`keydown`, t, { capture: !0 }),
          () => {
            e.ownerDocument.removeEventListener(`keydown`, t, { capture: !0 });
          }
        );
      }),
      (t[104] = o),
      (t[105] = k),
      (t[106] = it),
      (t[107] = q))
    : (q = t[107]);
  let at;
  (t[108] !== o || t[109] !== k
    ? ((at = [o, k]), (t[108] = o), (t[109] = k), (t[110] = at))
    : (at = t[110]),
    (0, X.useEffect)(q, at));
  let ot;
  t[111] !== j || t[112] !== L || t[113] !== G || t[114] !== U
    ? ((ot = (e) => {
        ((j != null || L != null) && !U()) || G(e, `annotation_mode_pointer`);
      }),
      (t[111] = j),
      (t[112] = L),
      (t[113] = G),
      (t[114] = U),
      (t[115] = ot))
    : (ot = t[115]);
  let st = ot,
    ct;
  t[116] !== o || t[117] !== v
    ? ((ct = (e) => {
        if (!o || !e.isPrimary || e.button !== 0) return;
        let t = Me(e, v);
        t != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.ownerDocument.getSelection()?.removeAllRanges(),
          e.currentTarget.setPointerCapture(e.pointerId),
          ie(null),
          ae(null),
          ce(null),
          re({
            pointerId: e.pointerId,
            start: t,
            current: t,
            clientStart: { x: e.clientX, y: e.clientY },
            clientCurrent: { x: e.clientX, y: e.clientY },
          }));
      }),
      (t[116] = o),
      (t[117] = v),
      (t[118] = ct))
    : (ct = t[118]);
  let lt = ct,
    ut;
  t[119] !== j || t[120] !== P || t[121] !== L || t[122] !== rt || t[123] !== v
    ? ((ut = (e) => {
        if (P == null) {
          if (j != null || L != null) {
            ae(null);
            return;
          }
          ae(rt(e.clientX, e.clientY, !1));
          return;
        }
        if (e.pointerId !== P.pointerId) return;
        let t = Me(e, v);
        t != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          re((n) =>
            n == null || n.pointerId !== e.pointerId
              ? n
              : { ...n, current: t, clientCurrent: { x: e.clientX, y: e.clientY } },
          ));
      }),
      (t[119] = j),
      (t[120] = P),
      (t[121] = L),
      (t[122] = rt),
      (t[123] = v),
      (t[124] = ut))
    : (ut = t[124]);
  let dt = ut,
    ft;
  t[125] !== j ||
  t[126] !== P ||
  t[127] !== rt ||
  t[128] !== st ||
  t[129] !== G ||
  t[130] !== v ||
  t[131] !== U
    ? ((ft = (e) => {
        if (P == null || e.pointerId !== P.pointerId) return;
        let t = Me(e, v) ?? P.current;
        (e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.hasPointerCapture(e.pointerId) &&
            e.currentTarget.releasePointerCapture(e.pointerId));
        let n = { ...P, current: t, clientCurrent: { x: e.clientX, y: e.clientY } },
          r = Ot(n),
          i = Dt(n, r);
        if (!r) {
          let t = rt(e.clientX, e.clientY, !0);
          if (t != null) {
            (re(null), st(t));
            return;
          }
        }
        if (j != null && i.kind === `point`) {
          (U(), re(null));
          return;
        }
        (G(i, `annotation_mode_pointer`), re(null));
      }),
      (t[125] = j),
      (t[126] = P),
      (t[127] = rt),
      (t[128] = st),
      (t[129] = G),
      (t[130] = v),
      (t[131] = U),
      (t[132] = ft))
    : (ft = t[132]);
  let pt = ft,
    mt;
  t[133] !== n ||
  t[134] !== H ||
  t[135] !== p ||
  t[136] !== j ||
  t[137] !== L ||
  t[138] !== a ||
  t[139] !== o ||
  t[140] !== fe ||
  t[141] !== c ||
  t[142] !== u ||
  t[143] !== f ||
  t[144] !== m ||
  t[145] !== h ||
  t[146] !== _ ||
  t[147] !== v ||
  t[148] !== y ||
  t[149] !== w ||
  t[150] !== x ||
  t[151] !== S
    ? ((mt = async (e, t) => {
        let { submitDirectly: r } = t === void 0 ? {} : t,
          i = r !== void 0 && r,
          l = e.body.trim();
        if (L != null) {
          if (l.length === 0 || fe) return;
          (u((e) =>
            e.map((e) =>
              sn(e) === L ? { ...e, content: [{ content_type: `text`, text: l }] } : e,
            ),
          ),
            H());
          return;
        }
        j == null ||
          l.length === 0 ||
          fe ||
          (await (async () => {
            pe(!0);
            let t = Xt({ anchor: j, pageSize: v }),
              r = crypto.randomUUID(),
              d;
            try {
              d = await tn({
                anchor: j,
                commentId: r,
                markerLabel: String(c),
                page: m,
                pageNumber: _,
                pageSize: v,
              });
            } catch {
              d = void 0;
            }
            let g = s({
                body: l,
                line: c,
                metadata: t,
                pageCount: h,
                pageNumber: _,
                path: y,
                screenshot: d,
                title: S,
              }),
              b = n || !i ? `saved` : `direct`;
            (ee(w, N, { commentType: t.kind, submitMode: b }),
              C(
                w,
                {
                  artifactType: `pdf`,
                  importKind: `pdf`,
                  originatingTurn: a == null ? f : a(),
                  threadId: x,
                },
                {
                  annotationModeEnabled: o,
                  annotationTargetKind: t.kind,
                  submitMode: b,
                  submitSource: e.submitSource,
                },
              ),
              !n && i
                ? _e.dispatchHostMessage({
                    type: `pdf-direct-comment`,
                    body: l,
                    comment: g,
                    conversationId: p,
                    sessionId: r,
                  })
                : u((e) => [...e, g]),
              H());
          })().finally(() => {
            pe(!1);
          }));
      }),
      (t[133] = n),
      (t[134] = H),
      (t[135] = p),
      (t[136] = j),
      (t[137] = L),
      (t[138] = a),
      (t[139] = o),
      (t[140] = fe),
      (t[141] = c),
      (t[142] = u),
      (t[143] = f),
      (t[144] = m),
      (t[145] = h),
      (t[146] = _),
      (t[147] = v),
      (t[148] = y),
      (t[149] = w),
      (t[150] = x),
      (t[151] = S),
      (t[152] = mt))
    : (mt = t[152]);
  let ht = mt,
    gt = !o && `pointer-events-none`,
    _t;
  t[153] === gt
    ? (_t = t[154])
    : ((_t = b(`absolute inset-0 z-[3]`, gt)), (t[153] = gt), (t[154] = _t));
  let J;
  t[155] === o ? (J = t[156]) : ((J = o ? { cursor: Ae } : void 0), (t[155] = o), (t[156] = J));
  let vt, yt;
  t[157] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = () => {
        (re(null), ae(null));
      }),
      (yt = () => ae(null)),
      (t[157] = vt),
      (t[158] = yt))
    : ((vt = t[157]), (yt = t[158]));
  let bt;
  if (t[159] !== R || t[160] !== j || t[161] !== L || t[162] !== d || t[163] !== _) {
    let e;
    (t[165] !== j || t[166] !== L || t[167] !== d || t[168] !== _
      ? ((e = (e) =>
          (0, Z.jsx)(
            Ut,
            {
              comment: e,
              isSelected: sn(e) === L,
              onEdit: (e) => {
                (j != null && d?.(_, !1),
                  M(null),
                  ie(null),
                  ae(null),
                  ne(``),
                  de(!1),
                  ce(null),
                  oe(e));
              },
              onPreviewChange: ce,
            },
            sn(e),
          )),
        (t[165] = j),
        (t[166] = L),
        (t[167] = d),
        (t[168] = _),
        (t[169] = e))
      : (e = t[169]),
      (bt = R.map(e)),
      (t[159] = R),
      (t[160] = j),
      (t[161] = L),
      (t[162] = d),
      (t[163] = _),
      (t[164] = bt));
  } else bt = t[164];
  let xt;
  t[170] !== L || t[171] !== Se || t[172] !== k
    ? ((xt = Se == null || L != null ? null : (0, Z.jsx)(Wt, { comment: Se, layer: k })),
      (t[170] = L),
      (t[171] = Se),
      (t[172] = k),
      (t[173] = xt))
    : (xt = t[173]);
  let St;
  t[174] !== j || t[175] !== L || t[176] !== I || t[177] !== v
    ? ((St =
        I != null && j == null && L == null
          ? (0, Z.jsx)(ke, {
              paddingPx: 4,
              pageSize: v,
              rect: I.rect,
              testId: `artifact-pdf-element-hover-highlight`,
            })
          : null),
      (t[174] = j),
      (t[175] = L),
      (t[176] = I),
      (t[177] = v),
      (t[178] = St))
    : (St = t[178]);
  let Ct;
  t[179] !== j ||
  t[180] !== T ||
  t[181] !== G ||
  t[182] !== v ||
  t[183] !== w ||
  t[184] !== F ||
  t[185] !== x
    ? ((Ct =
        F != null && j == null
          ? (0, Z.jsx)(Ce, {
              anchor: F.askForEditAnchor,
              label: T.formatMessage({
                id: `artifactPdfPreview.askForChange`,
                defaultMessage: `Ask for change`,
                description: `Button label for starting a contextual PDF annotation from selected text`,
              }),
              pageSize: v,
              rect: F.rect,
              testId: `artifact-pdf-ask-for-edit-button`,
              onClick: () => G(F, `ask_codex_button`),
              onShown: () => ue(w, { artifactType: `pdf`, importKind: `pdf`, threadId: x }),
            })
          : null),
      (t[179] = j),
      (t[180] = T),
      (t[181] = G),
      (t[182] = v),
      (t[183] = w),
      (t[184] = F),
      (t[185] = x),
      (t[186] = Ct))
    : (Ct = t[186]);
  let wt;
  t[187] !== P || t[188] !== v
    ? ((wt = P == null ? null : (0, Z.jsx)(qt, { rect: be(P.start, P.current), pageSize: v })),
      (t[187] = P),
      (t[188] = v),
      (t[189] = wt))
    : (wt = t[189]);
  let kt;
  t[190] !== j || t[191] !== c || t[192] !== v
    ? ((kt = j == null ? null : (0, Z.jsx)(Gt, { anchor: j, label: c, pageSize: v })),
      (t[190] = j),
      (t[191] = c),
      (t[192] = v),
      (t[193] = kt))
    : (kt = t[193]);
  let At;
  t[194] !== De ||
  t[195] !== Pe ||
  t[196] !== V ||
  t[197] !== n ||
  t[198] !== H ||
  t[199] !== he ||
  t[200] !== ve ||
  t[201] !== ht ||
  t[202] !== u
    ? ((At =
        De == null || Pe == null || V == null
          ? null
          : (0, Z.jsx)(B, {
              ref: D,
              style: { left: Pe.x, top: Pe.y, height: je, width: 294 },
              onPointerDown: Ht,
              children: (0, Z.jsx)(
                Be,
                {
                  allowImageAttachments: !1,
                  defaultCreateSubmitMode: n ? `saved` : `direct`,
                  inputAriaLabel: he,
                  keyboardEventTarget: typeof window > `u` ? void 0 : window,
                  placeholder: ve,
                  session: V,
                  windowHeight: je,
                  onCancel: H,
                  onDelete: (e) => {
                    (u((t) => t.filter((t) => sn(t) !== e)), H());
                  },
                  onDirectSubmit: (e) => {
                    ht(e, { submitDirectly: !n });
                  },
                  onEscape: H,
                  onBodyChange: V.target.mode === `create` ? ze : void 0,
                  onLightDismissibilityChange: un,
                  onMounted: un,
                  onSubmit: (e) => {
                    ht(e);
                  },
                },
                V.sessionId,
              ),
            })),
      (t[194] = De),
      (t[195] = Pe),
      (t[196] = V),
      (t[197] = n),
      (t[198] = H),
      (t[199] = he),
      (t[200] = ve),
      (t[201] = ht),
      (t[202] = u),
      (t[203] = At))
    : (At = t[203]);
  let jt;
  return (
    t[204] !== lt ||
    t[205] !== dt ||
    t[206] !== pt ||
    t[207] !== _t ||
    t[208] !== J ||
    t[209] !== bt ||
    t[210] !== xt ||
    t[211] !== St ||
    t[212] !== Ct ||
    t[213] !== wt ||
    t[214] !== kt ||
    t[215] !== At
      ? ((jt = (0, Z.jsxs)(`div`, {
          ref: A,
          className: _t,
          "data-testid": `artifact-pdf-comment-layer`,
          style: J,
          onPointerDown: lt,
          onPointerMove: dt,
          onPointerUp: pt,
          onPointerCancel: vt,
          onPointerLeave: yt,
          children: [bt, xt, St, Ct, wt, kt, At],
        })),
        (t[204] = lt),
        (t[205] = dt),
        (t[206] = pt),
        (t[207] = _t),
        (t[208] = J),
        (t[209] = bt),
        (t[210] = xt),
        (t[211] = St),
        (t[212] = Ct),
        (t[213] = wt),
        (t[214] = kt),
        (t[215] = At),
        (t[216] = jt))
      : (jt = t[216]),
    jt
  );
}
function Ht(e) {
  return e.stopPropagation();
}
function Ut(e) {
  let t = (0, ln.c)(46),
    { comment: n, isSelected: r, onEdit: i, onPreviewChange: a } = e,
    o = g(),
    s = n.localPdfCommentMetadata;
  if (s == null) return null;
  let c;
  t[0] === n ? (c = t[1]) : ((c = sn(n)), (t[0] = n), (t[1] = c));
  let l = c,
    u;
  t[2] !== n.position.line || t[3] !== o
    ? ((u = o.formatMessage(
        {
          id: `artifactPdfPreview.commentMarkerLabel`,
          defaultMessage: `PDF annotation {commentNumber}`,
          description: `Accessible label for a placed PDF annotation marker`,
        },
        { commentNumber: n.position.line },
      )),
      (t[2] = n.position.line),
      (t[3] = o),
      (t[4] = u))
    : (u = t[4]);
  let d = u,
    f;
  t[5] !== l || t[6] !== a ? ((f = () => a(l)), (t[5] = l), (t[6] = a), (t[7] = f)) : (f = t[7]);
  let p = f,
    m;
  t[8] === a ? (m = t[9]) : ((m = () => a(null)), (t[8] = a), (t[9] = m));
  let h = m;
  if (s.kind === `region`) {
    let e;
    t[10] !== s.nearbyText ||
    t[11] !== s.pageRect ||
    t[12] !== s.pageSize ||
    t[13] !== s.selectedText ||
    t[14] !== s.selectionKind ||
    t[15] !== s.selectionRects
      ? ((e =
          s.selectionKind == null
            ? (0, Z.jsx)(qt, { rect: s.pageRect, pageSize: s.pageSize })
            : (0, Z.jsx)(Kt, {
                bordered: !0,
                anchor: {
                  kind: `region`,
                  nearbyText: s.nearbyText,
                  rect: s.pageRect,
                  selectedText: s.selectedText,
                  selectionKind: s.selectionKind,
                  selectionRects: s.selectionRects,
                },
                pageSize: s.pageSize,
                testId: `artifact-pdf-comment-region-outline`,
              })),
        (t[10] = s.nearbyText),
        (t[11] = s.pageRect),
        (t[12] = s.pageSize),
        (t[13] = s.selectedText),
        (t[14] = s.selectionKind),
        (t[15] = s.selectionRects),
        (t[16] = e))
      : (e = t[16]);
    let a = n.position.line,
      o;
    t[17] !== l || t[18] !== i
      ? ((o = () => i(l)), (t[17] = l), (t[18] = i), (t[19] = o))
      : (o = t[19]);
    let c;
    t[20] === s.pageRect ? (c = t[21]) : ((c = kt(s.pageRect)), (t[20] = s.pageRect), (t[21] = c));
    let u;
    t[22] !== n.position.line ||
    t[23] !== d ||
    t[24] !== h ||
    t[25] !== r ||
    t[26] !== s.pageSize ||
    t[27] !== p ||
    t[28] !== o ||
    t[29] !== c
      ? ((u = (0, Z.jsx)(Jt, {
          ariaLabel: d,
          isSelected: r,
          label: a,
          onClick: o,
          onPreviewHide: h,
          onPreviewShow: p,
          point: c,
          pageSize: s.pageSize,
        })),
        (t[22] = n.position.line),
        (t[23] = d),
        (t[24] = h),
        (t[25] = r),
        (t[26] = s.pageSize),
        (t[27] = p),
        (t[28] = o),
        (t[29] = c),
        (t[30] = u))
      : (u = t[30]);
    let f;
    return (
      t[31] !== e || t[32] !== u
        ? ((f = (0, Z.jsxs)(Z.Fragment, { children: [e, u] })),
          (t[31] = e),
          (t[32] = u),
          (t[33] = f))
        : (f = t[33]),
      f
    );
  }
  let _;
  t[34] !== l || t[35] !== i
    ? ((_ = () => i(l)), (t[34] = l), (t[35] = i), (t[36] = _))
    : (_ = t[36]);
  let v;
  return (
    t[37] !== n.position.line ||
    t[38] !== d ||
    t[39] !== h ||
    t[40] !== r ||
    t[41] !== s.pagePoint ||
    t[42] !== s.pageSize ||
    t[43] !== p ||
    t[44] !== _
      ? ((v = (0, Z.jsx)(Jt, {
          ariaLabel: d,
          isSelected: r,
          label: n.position.line,
          onClick: _,
          onPreviewHide: h,
          onPreviewShow: p,
          point: s.pagePoint,
          pageSize: s.pageSize,
        })),
        (t[37] = n.position.line),
        (t[38] = d),
        (t[39] = h),
        (t[40] = r),
        (t[41] = s.pagePoint),
        (t[42] = s.pageSize),
        (t[43] = p),
        (t[44] = _),
        (t[45] = v))
      : (v = t[45]),
    v
  );
}
function Wt(e) {
  let t = (0, ln.c)(9),
    { comment: n, layer: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = Zt(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === n ? (o = t[3]) : ((o = $t(n)), (t[2] = n), (t[3] = o));
  let s = o;
  if (a == null) return null;
  let c;
  return (
    t[4] !== a.pageSize || t[5] !== a.point || t[6] !== s || t[7] !== r
      ? ((c = (0, Z.jsx)(z, {
          body: s,
          layer: r,
          pageSize: a.pageSize,
          point: a.point,
          testId: `artifact-pdf-comment-preview`,
        })),
        (t[4] = a.pageSize),
        (t[5] = a.point),
        (t[6] = s),
        (t[7] = r),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function Gt(e) {
  let t = (0, ln.c)(16),
    { anchor: n, label: r, pageSize: i } = e;
  if (n.kind === `region`) {
    let e;
    t[0] !== n || t[1] !== i
      ? ((e =
          n.selectionKind == null
            ? (0, Z.jsx)(qt, { rect: n.rect, pageSize: i })
            : (0, Z.jsx)(Kt, {
                bordered: !0,
                anchor: n,
                pageSize: i,
                testId: `artifact-pdf-comment-region-outline`,
              })),
        (t[0] = n),
        (t[1] = i),
        (t[2] = e))
      : (e = t[2]);
    let a;
    t[3] === n.rect ? (a = t[4]) : ((a = kt(n.rect)), (t[3] = n.rect), (t[4] = a));
    let o;
    t[5] !== r || t[6] !== i || t[7] !== a
      ? ((o = (0, Z.jsx)(Jt, { draft: !0, label: r, point: a, pageSize: i })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = o))
      : (o = t[8]);
    let s;
    return (
      t[9] !== e || t[10] !== o
        ? ((s = (0, Z.jsxs)(Z.Fragment, { children: [e, o] })),
          (t[9] = e),
          (t[10] = o),
          (t[11] = s))
        : (s = t[11]),
      s
    );
  }
  let a;
  return (
    t[12] !== n.point || t[13] !== r || t[14] !== i
      ? ((a = (0, Z.jsx)(Jt, { draft: !0, label: r, point: n.point, pageSize: i })),
        (t[12] = n.point),
        (t[13] = r),
        (t[14] = i),
        (t[15] = a))
      : (a = t[15]),
    a
  );
}
function Kt(e) {
  let t = (0, ln.c)(17),
    { anchor: n, bordered: r, pageSize: i, testId: a } = e,
    o = r !== void 0 && r;
  if (n.selectionKind === `text`) {
    let e;
    t[0] !== n.rect || t[1] !== n.selectionRects
      ? ((e =
          n.selectionRects == null || n.selectionRects.length === 0 ? [n.rect] : n.selectionRects),
        (t[0] = n.rect),
        (t[1] = n.selectionRects),
        (t[2] = e))
      : (e = t[2]);
    let r = e,
      o;
    if (t[3] !== i || t[4] !== a || t[5] !== r) {
      let e;
      (t[7] !== i || t[8] !== a
        ? ((e = (e, t) =>
            (0, Z.jsx)(
              ke,
              { paddingX: 4, paddingY: 0, pageSize: i, rect: e, testId: a },
              `${e.x}:${e.y}:${e.width}:${e.height}:${t}`,
            )),
          (t[7] = i),
          (t[8] = a),
          (t[9] = e))
        : (e = t[9]),
        (o = r.map(e)),
        (t[3] = i),
        (t[4] = a),
        (t[5] = r),
        (t[6] = o));
    } else o = t[6];
    let s;
    return (
      t[10] === o
        ? (s = t[11])
        : ((s = (0, Z.jsx)(Z.Fragment, { children: o })), (t[10] = o), (t[11] = s)),
      s
    );
  }
  let s;
  return (
    t[12] !== n.rect || t[13] !== o || t[14] !== i || t[15] !== a
      ? ((s = (0, Z.jsx)(ke, { bordered: o, paddingPx: 4, pageSize: i, rect: n.rect, testId: a })),
        (t[12] = n.rect),
        (t[13] = o),
        (t[14] = i),
        (t[15] = a),
        (t[16] = s))
      : (s = t[16]),
    s
  );
}
function qt(e) {
  let t = (0, ln.c)(3),
    { pageSize: n, rect: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, Z.jsx)(R, {
          pageSize: n,
          rect: r,
          testId: `artifact-pdf-comment-region-outline`,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Jt(e) {
  let t = (0, ln.c)(10),
    {
      ariaLabel: n,
      draft: r,
      isSelected: i,
      label: a,
      onClick: o,
      onPreviewHide: s,
      onPreviewShow: c,
      pageSize: l,
      point: u,
    } = e,
    d = r !== void 0 && r,
    f = i !== void 0 && i,
    p;
  return (
    t[0] !== n ||
    t[1] !== d ||
    t[2] !== f ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l ||
    t[8] !== u
      ? ((p = (0, Z.jsx)(Ue, {
          ariaLabel: n,
          draft: d,
          draftTestId: `artifact-pdf-comment-draft-marker`,
          isSelected: f,
          label: a,
          pageSize: l,
          point: u,
          testId: `artifact-pdf-comment-marker`,
          onClick: o,
          onPreviewHide: s,
          onPreviewShow: c,
        })),
        (t[0] = n),
        (t[1] = d),
        (t[2] = f),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = u),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
function Yt({
  anchor: e,
  body: t,
  conversationId: n,
  pageNumber: r,
  pageSize: i,
  path: a,
  target: o,
  title: s,
}) {
  let c = e.kind === `region` ? e.rect : { x: e.point.x, y: e.point.y, width: 1, height: 1 },
    l = e.kind === `region` ? { x: e.rect.x + e.rect.width, y: e.rect.y } : e.point;
  return {
    sessionId:
      o.mode === `edit`
        ? `pdf-comment-edit:${o.commentId}`
        : e.kind === `region`
          ? [`pdf-comment`, r, `region`, e.rect.x, e.rect.y, e.rect.width, e.rect.height].join(`:`)
          : [`pdf-comment`, r, `point`, e.point.x, e.point.y].join(`:`),
    conversationId: n,
    target: o,
    anchorState: {
      anchor: {
        kind: `region`,
        pageUrl: a,
        frameUrl: null,
        title: s,
        elementPath: `pdf-page-${r}`,
        point: { xPercent: i.width === 0 ? 0 : (l.x / i.width) * 100, y: l.y },
        rect: c,
        isFixed: !1,
        role: null,
        name: null,
        selector: null,
        framePath: [],
        nearbyText: null,
      },
      viewportRect: c,
      viewportPoint: l,
      viewportSize: i,
    },
    body: t,
    cwd: null,
    placementStrategy: `anchored`,
    previewAlignment: `end`,
    surfaceMode: `editor`,
  };
}
function Xt({ anchor: e, pageSize: t }) {
  return e.kind === `region`
    ? {
        kind: `region`,
        pageRect: e.rect,
        pageSize: t,
        nearbyText: e.nearbyText,
        selectedText: e.selectedText,
        selectionKind: e.selectionKind,
        selectionRects: e.selectionRects,
      }
    : { kind: `point`, pagePoint: e.point, pageSize: t };
}
function Zt(e) {
  let t = e.localPdfCommentMetadata;
  return t == null
    ? null
    : t.kind === `region`
      ? { pageSize: t.pageSize, point: kt(t.pageRect) }
      : { pageSize: t.pageSize, point: t.pagePoint };
}
function Qt(e) {
  let t = e.localPdfCommentMetadata;
  return t == null
    ? null
    : t.kind === `region`
      ? {
          kind: `region`,
          nearbyText: t.nearbyText,
          rect: t.pageRect,
          selectedText: t.selectedText,
          selectionKind: t.selectionKind,
          selectionRects: t.selectionRects,
        }
      : { kind: `point`, point: t.pagePoint };
}
function $t(e) {
  return e.content.flatMap((e) => (e.content_type === `text` ? [e.text] : [])).join(`
`);
}
function en({ anchor: e, layer: t, pageSize: n }) {
  return e.kind === `region` && e.selectionKind != null
    ? Ee({ layer: t, pageSize: n, rect: e.rect })
    : Ne({ layer: t, markerPoint: e.kind === `region` ? kt(e.rect) : e.point, pageSize: n });
}
async function tn({
  anchor: e,
  commentId: t,
  markerLabel: n,
  page: r,
  pageNumber: i,
  pageSize: a,
}) {
  let o = nn(e, a),
    s = Math.min(2, Math.max(1, 1200 / o.width)),
    c = document.createElement(`canvas`);
  if (
    ((c.width = Math.ceil(a.width * s)),
    (c.height = Math.ceil(a.height * s)),
    c.getContext(`2d`) == null)
  )
    throw Error(`Unable to create PDF screenshot canvas context`);
  await r.render({ canvas: c, viewport: r.getViewport({ scale: s }) }).promise;
  let l = document.createElement(`canvas`);
  ((l.width = Math.ceil(o.width * s)), (l.height = Math.ceil(o.height * s)));
  let u = l.getContext(`2d`);
  if (u == null) throw Error(`Unable to create PDF crop canvas context`);
  return (
    u.drawImage(c, o.x * s, o.y * s, o.width * s, o.height * s, 0, 0, l.width, l.height),
    an({ anchor: e, context: u, crop: o, markerLabel: n, scale: s }),
    {
      commentId: t,
      dataUrl: l.toDataURL(`image/png`),
      height: l.height,
      pageNumber: i,
      width: l.width,
    }
  );
}
function nn(e, t) {
  if (e.kind === `region`) {
    let n = Math.max(24, Math.min(72, Math.min(e.rect.width, e.rect.height) * 0.25));
    return rn(
      {
        x: e.rect.x - n,
        y: e.rect.y - n,
        width: e.rect.width + n * 2,
        height: e.rect.height + n * 2,
      },
      t,
    );
  }
  return rn({ x: e.point.x - 180, y: e.point.y - 120, width: 360, height: 240 }, t);
}
function rn(e, t) {
  let n = Math.min(Math.max(e.width, 1), t.width),
    r = Math.min(Math.max(e.height, 1), t.height);
  return { x: cn(e.x, 0, t.width - n), y: cn(e.y, 0, t.height - r), width: n, height: r };
}
function an({ anchor: e, context: t, crop: n, markerLabel: r, scale: i }) {
  if (
    (t.save(),
    (t.strokeStyle = Te),
    (t.fillStyle = Te),
    (t.lineWidth = 3),
    (t.font = `bold 14px sans-serif`),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    e.kind === `region`)
  ) {
    let a = (e.rect.x - n.x) * i,
      o = (e.rect.y - n.y) * i,
      s = e.rect.width * i,
      c = e.rect.height * i;
    (t.strokeRect(a, o, s, c), on(t, r, a + s, o));
  } else on(t, r, (e.point.x - n.x) * i, (e.point.y - n.y) * i);
  t.restore();
}
function on(e, t, n, r) {
  (e.beginPath(),
    e.arc(n, r, 11, 0, Math.PI * 2),
    e.fill(),
    (e.lineWidth = 2),
    (e.strokeStyle = `#fff`),
    e.stroke(),
    (e.fillStyle = `#fff`),
    e.fillText(t, n, r + 0.5));
}
function sn(e) {
  return `${e.localPdfContext?.path ?? ``}:${e.localPdfContext?.pageNumber ?? 0}:${e.position.line}:${e.content.map(
    (e) => (e.content_type === `text` ? e.text : ``),
  ).join(`
`)}`;
}
function cn(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var ln,
  X,
  Z,
  un,
  dn = e(() => {
    ((ln = I()),
      A(),
      ye(),
      h(),
      a(),
      (X = t(i(), 1)),
      x(),
      He(),
      H(),
      O(),
      v(),
      L(),
      S(),
      V(),
      ze(),
      Bt(),
      (Z = ie()),
      (un = () => {}));
  });
function fn(e) {
  let t = (0, pn.c)(5),
    { deferMs: n, page: r } = e,
    i = (0, mn.useRef)(null),
    a,
    o;
  (t[0] !== n || t[1] !== r
    ? ((a = () => {
        let e = i.current;
        if (e == null) return;
        let t = e;
        t.innerHTML = ``;
        let a = !1,
          o = null,
          s = null,
          c = async function () {
            let e = await lt();
            if (a) return;
            o = new e.TextLayer({
              container: t,
              textContentSource: r.streamTextContent({ includeMarkedContent: !0 }),
              viewport: r.getViewport({ scale: 1 }),
            });
            try {
              await o.render();
            } catch {
              return;
            }
            if (a) return;
            let n = document.createElement(`div`);
            ((n.className = `endOfContent`), t.append(n));
          };
        return (
          (s = setTimeout(() => {
            c();
          }, n)),
          () => {
            ((a = !0), s != null && clearTimeout(s), o?.cancel(), (t.innerHTML = ``));
          }
        );
      }),
      (o = [n, r]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3])),
    (0, mn.useEffect)(a, o));
  let s;
  return (
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, hn.jsx)(`div`, { ref: i, className: `textLayer` })), (t[4] = s))
      : (s = t[4]),
    s
  );
}
var pn,
  mn,
  hn,
  gn = e(() => {
    ((pn = I()), (mn = t(i(), 1)), gt(), (hn = ie()));
  });
function _n(e) {
  let t = (0, Cn.c)(36),
    { onBeforeZoom: n, pageViewportSize: r, pageWidth: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { kind: `page-width` }), (t[0] = a))
    : (a = t[0]);
  let [o, s] = (0, wn.useState)(a),
    [c, l] = (0, wn.useState)(!1),
    [u, d] = (0, wn.useState)(0),
    f = (0, wn.useRef)(null),
    p = (0, wn.useRef)(0),
    m = (0, wn.useRef)(null),
    h;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => {
        (l(!0),
          f.current != null && window.clearTimeout(f.current),
          (f.current = window.setTimeout(() => {
            ((f.current = null), l(!1), d(vn));
          }, 120)));
      }),
      (t[1] = h))
    : (h = t[1]);
  let g = h,
    _,
    v;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => () => {
        (f.current != null && window.clearTimeout(f.current),
          m.current != null && window.clearTimeout(m.current));
      }),
      (v = []),
      (t[2] = _),
      (t[3] = v))
    : ((_ = t[2]), (v = t[3])),
    (0, wn.useEffect)(_, v));
  let y;
  t[4] === n
    ? (y = t[5])
    : ((y = (e) => {
        (n({ kind: `center` }), g(), s(e));
      }),
      (t[4] = n),
      (t[5] = y));
  let b = y,
    x;
  t[6] !== r || t[7] !== i
    ? ((x = (e) => yn({ pageViewportSize: r, pageWidth: i, resize: e })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = x))
    : (x = t[8]);
  let S = x,
    C;
  t[9] === b
    ? (C = t[10])
    : ((C = () => {
        b({ kind: `page-width` });
      }),
      (t[9] = b),
      (t[10] = C));
  let w = C,
    T;
  t[11] === b
    ? (T = t[12])
    : ((T = (e) => {
        b({ kind: `percentage`, value: Sn(e / 100) });
      }),
      (t[11] = b),
      (t[12] = T));
  let E = T,
    D;
  t[13] !== S || t[14] !== n
    ? ((D = () => {
        (n({ kind: `center` }), g(), s((e) => ({ kind: `percentage`, value: xn(S(e), `out`) })));
      }),
      (t[13] = S),
      (t[14] = n),
      (t[15] = D))
    : (D = t[15]);
  let O = D,
    k;
  t[16] !== S || t[17] !== n
    ? ((k = () => {
        (n({ kind: `center` }), g(), s((e) => ({ kind: `percentage`, value: xn(S(e), `in`) })));
      }),
      (t[16] = S),
      (t[17] = n),
      (t[18] = k))
    : (k = t[18]);
  let A = k,
    j;
  t[19] !== S || t[20] !== n
    ? ((j = (e) => {
        if (
          !e.ctrlKey ||
          (e.preventDefault(), e.deltaY === 0) ||
          (m.current != null && window.clearTimeout(m.current),
          (m.current = window.setTimeout(() => {
            ((p.current = 0), (m.current = null));
          }, An)),
          (p.current += e.deltaY),
          Math.abs(p.current) < kn)
        )
          return;
        let t = p.current > 0 ? `out` : `in`;
        ((p.current = 0),
          n({ clientX: e.clientX, clientY: e.clientY, kind: `point` }),
          g(),
          s((e) => ({ kind: `percentage`, value: xn(S(e), t) })));
      }),
      (t[19] = S),
      (t[20] = n),
      (t[21] = j))
    : (j = t[21]);
  let ee = j,
    M;
  t[22] !== S || t[23] !== o
    ? ((M = Math.round(S(o) * 100)), (t[22] = S), (t[23] = o), (t[24] = M))
    : (M = t[24]);
  let te;
  return (
    t[25] !== O ||
    t[26] !== w ||
    t[27] !== ee ||
    t[28] !== A ||
    t[29] !== c ||
    t[30] !== o ||
    t[31] !== b ||
    t[32] !== E ||
    t[33] !== M ||
    t[34] !== u
      ? ((te = {
          beginScaleChange: g,
          decreaseZoom: O,
          fitToWidth: w,
          handleWheel: ee,
          increaseZoom: A,
          isZooming: c,
          resize: o,
          setResize: b,
          setZoomPercent: E,
          zoomEndTick: u,
          zoomPercent: M,
        }),
        (t[25] = O),
        (t[26] = w),
        (t[27] = ee),
        (t[28] = A),
        (t[29] = c),
        (t[30] = o),
        (t[31] = b),
        (t[32] = E),
        (t[33] = M),
        (t[34] = u),
        (t[35] = te))
      : (te = t[35]),
    te
  );
}
function vn(e) {
  return e + 1;
}
function yn({ pageViewportSize: e, pageWidth: t, resize: n }) {
  if (n.kind === `percentage`) return Sn(n.value);
  let r = e?.width ?? Tn.width;
  return t == null || t <= 0 || r <= 0 ? 1 : Sn(t / r);
}
function bn({ pageViewportSize: e, pageWidth: t, resize: n }) {
  let r = e ?? Tn,
    i = r.width / r.height,
    a =
      n.kind === `page-width` && t != null && t > 0
        ? t
        : r.width * yn({ pageViewportSize: e, pageWidth: t, resize: n });
  return { height: Math.round(a / i), width: Math.round(a) };
}
function xn(e, t) {
  let n = Sn(e);
  if (t === `in`) {
    for (let e of jn) if (e > n + On) return e;
    return jn[jn.length - 1];
  }
  for (let e = jn.length - 1; e >= 0; --e) {
    let t = jn[e];
    if (t < n - On) return t;
  }
  return jn[0];
}
function Sn(e) {
  return Math.min(Dn, Math.max(En, e));
}
var Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn = e(() => {
    ((Cn = I()),
      (wn = t(i(), 1)),
      (Tn = { height: 792, width: 612 }),
      (En = 0.3),
      (Dn = 8),
      (On = 1e-4),
      (kn = 5),
      (An = 200),
      (jn = [En, 0.4, 0.5, 0.67, 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5, 6, 7, Dn]));
  });
function Nn(e) {
  return typeof e == `object` && !!e && `name` in e && e.name === `RenderingCancelledException`;
}
var Pn,
  Fn,
  In,
  Ln,
  Rn = e(() => {
    ((Pn = I()),
      (Fn = t(i(), 1)),
      _t(),
      wt(),
      dn(),
      gn(),
      Mn(),
      (In = ie()),
      (Ln = (0, Fn.memo)(function (e) {
        let t = (0, Pn.c)(72),
          {
            commentLayer: n,
            currentPage: r,
            pageNumber: i,
            pageSelector: a,
            pageViewportSize: o,
            pageWidth: s,
            pdfDocument: c,
            resize: l,
            renderRequestKey: u,
            scrollRootRef: d,
            isZooming: f,
            onRenderError: p,
            onRendered: m,
            onViewportReady: h,
            zoomEndTick: g,
          } = e,
          _ = (0, Fn.useRef)(null),
          v = (0, Fn.useRef)(null),
          [y, b] = (0, Fn.useState)(null),
          [x, S] = (0, Fn.useState)(null),
          [C, w] = (0, Fn.useState)(!1),
          T = y?.pdfDocument === c,
          E = T ? y.page : null,
          D = T ? y.viewportSize : null,
          O = D ?? o,
          k;
        t[0] !== s || t[1] !== l || t[2] !== O
          ? ((k = bn({ pageViewportSize: O, pageWidth: s, resize: l })),
            (t[0] = s),
            (t[1] = l),
            (t[2] = O),
            (t[3] = k))
          : (k = t[3]);
        let A = k,
          j = D != null && D.width > 0 ? A.width / D.width : 1,
          ee = Math.abs(r - i),
          M = C || ee <= 2,
          te = C || ee <= 2,
          N = C ? 50 : 50 + ee * 40,
          ne = N + ee * 60,
          P;
        t[4] !== i || t[5] !== c
          ? ((P = () => {
              let e = !1;
              return (
                b(null),
                S(null),
                (async function () {
                  try {
                    let t = await c.getPage(i);
                    if (e) return;
                    let n = t.getViewport({ scale: 1 });
                    b({
                      page: t,
                      pdfDocument: c,
                      viewportSize: { height: n.height, width: n.width },
                    });
                  } catch {
                    e || (b(null), S(c));
                  }
                })(),
                () => {
                  e = !0;
                }
              );
            }),
            (t[4] = i),
            (t[5] = c),
            (t[6] = P))
          : (P = t[6]);
        let re;
        (t[7] !== i || t[8] !== c || t[9] !== u
          ? ((re = [i, c, u]), (t[7] = i), (t[8] = c), (t[9] = u), (t[10] = re))
          : (re = t[10]),
          (0, Fn.useEffect)(P, re));
        let F, ie;
        (t[11] !== r || t[12] !== x || t[13] !== C || t[14] !== p || t[15] !== i || t[16] !== c
          ? ((F = () => {
              x !== c || (!C && r !== i) || p?.();
            }),
            (ie = [r, x, C, p, i, c]),
            (t[11] = r),
            (t[12] = x),
            (t[13] = C),
            (t[14] = p),
            (t[15] = i),
            (t[16] = c),
            (t[17] = F),
            (t[18] = ie))
          : ((F = t[17]), (ie = t[18])),
          (0, Fn.useEffect)(F, ie));
        let I, ae;
        (t[19] !== D || t[20] !== h
          ? ((I = () => {
              D != null && h?.();
            }),
            (ae = [D, h]),
            (t[19] = D),
            (t[20] = h),
            (t[21] = I),
            (t[22] = ae))
          : ((I = t[21]), (ae = t[22])),
          (0, Fn.useLayoutEffect)(I, ae));
        let L, oe;
        (t[23] === d
          ? ((L = t[24]), (oe = t[25]))
          : ((oe = () => {
              let e = v.current;
              if (e == null) return;
              if (typeof IntersectionObserver > `u`) {
                w(!0);
                return;
              }
              let t = new IntersectionObserver(
                (e) => {
                  let t = e[0];
                  t != null && w(t.isIntersecting || t.intersectionRatio > 0);
                },
                { root: d.current, rootMargin: `200px 0px`, threshold: 0.01 },
              );
              return (
                t.observe(e),
                () => {
                  t.disconnect();
                }
              );
            }),
            (L = [d]),
            (t[23] = d),
            (t[24] = L),
            (t[25] = oe)),
          (0, Fn.useEffect)(oe, L));
        let se;
        t[26] !== A.height ||
        t[27] !== A.width ||
        t[28] !== C ||
        t[29] !== f ||
        t[30] !== p ||
        t[31] !== m ||
        t[32] !== E ||
        t[33] !== M
          ? ((se = () => {
              let e = _.current;
              if (e == null) return;
              if (E == null || !M) {
                ((e.width = 0), (e.height = 0));
                return;
              }
              if (f) return;
              let t = E.getViewport({ scale: 1 });
              if (t.width <= 0 || A.width <= 0 || A.height <= 0) return;
              let n = !1,
                r = null,
                i = window.devicePixelRatio || 1,
                a = Math.ceil(A.width * i),
                o = Math.ceil(A.height * i);
              ((e.width = a), (e.height = o), e.getContext(`2d`)?.clearRect(0, 0, a, o));
              try {
                ((r = E.render({ canvas: e, viewport: E.getViewport({ scale: a / t.width }) })),
                  r.promise.then(
                    () => {
                      !n && C && m?.();
                    },
                    (e) => {
                      !n && C && !Nn(e) && p?.();
                    },
                  ));
              } catch (e) {
                C && !Nn(e) && p?.();
                return;
              }
              return () => {
                ((n = !0), r?.cancel());
              };
            }),
            (t[26] = A.height),
            (t[27] = A.width),
            (t[28] = C),
            (t[29] = f),
            (t[30] = p),
            (t[31] = m),
            (t[32] = E),
            (t[33] = M),
            (t[34] = se))
          : (se = t[34]);
        let ce;
        (t[35] !== A.height ||
        t[36] !== A.width ||
        t[37] !== C ||
        t[38] !== f ||
        t[39] !== p ||
        t[40] !== m ||
        t[41] !== E ||
        t[42] !== u ||
        t[43] !== M ||
        t[44] !== g
          ? ((ce = [A.height, A.width, C, f, p, m, E, u, M, g]),
            (t[35] = A.height),
            (t[36] = A.width),
            (t[37] = C),
            (t[38] = f),
            (t[39] = p),
            (t[40] = m),
            (t[41] = E),
            (t[42] = u),
            (t[43] = M),
            (t[44] = g),
            (t[45] = ce))
          : (ce = t[45]),
          (0, Fn.useEffect)(se, ce));
        let le = D == null ? void 0 : ``,
          ue = E?.userUnit ?? 1,
          de;
        t[46] !== A.height || t[47] !== A.width || t[48] !== j || t[49] !== ue
          ? ((de = { "--scale-factor": j, "--user-unit": ue, height: A.height, width: A.width }),
            (t[46] = A.height),
            (t[47] = A.width),
            (t[48] = j),
            (t[49] = ue),
            (t[50] = de))
          : (de = t[50]);
        let fe = de,
          pe;
        t[51] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((pe = (0, In.jsx)(`canvas`, { ref: _, className: `absolute inset-0 size-full` })),
            (t[51] = pe))
          : (pe = t[51]);
        let me;
        t[52] !== ne ||
        t[53] !== f ||
        t[54] !== E ||
        t[55] !== a ||
        t[56] !== c ||
        t[57] !== d ||
        t[58] !== te ||
        t[59] !== N
          ? ((me =
              E == null || f || !te
                ? null
                : (0, In.jsxs)(In.Fragment, {
                    children: [
                      (0, In.jsx)(fn, { page: E, deferMs: N }),
                      (0, In.jsx)(bt, {
                        deferMs: ne,
                        page: E,
                        pageSelector: a,
                        pdfDocument: c,
                        scrollRootRef: d,
                      }),
                    ],
                  })),
            (t[52] = ne),
            (t[53] = f),
            (t[54] = E),
            (t[55] = a),
            (t[56] = c),
            (t[57] = d),
            (t[58] = te),
            (t[59] = N),
            (t[60] = me))
          : (me = t[60]);
        let he;
        t[61] !== n || t[62] !== D || t[63] !== E || t[64] !== i
          ? ((he =
              E == null || D == null || n == null
                ? null
                : (0, In.jsx)(
                    Vt,
                    {
                      annotationBatchingEnabled: n.annotationBatchingEnabled,
                      comments: n.comments,
                      conversationId: n.conversationId,
                      getOriginatingTurn: n.getOriginatingTurn,
                      isCommentMode: n.isCommentMode,
                      nextCommentNumber: n.nextCommentNumber,
                      onCommentsChange: n.onCommentsChange,
                      onDraftActiveChange: n.onDraftActiveChange,
                      originatingTurn: n.originatingTurn,
                      page: E,
                      pageCount: n.pageCount,
                      pageNumber: i,
                      pageSize: D,
                      path: n.path,
                      threadId: n.threadId,
                      title: n.title,
                    },
                    n.isCommentMode ? `comment` : `browse`,
                  )),
            (t[61] = n),
            (t[62] = D),
            (t[63] = E),
            (t[64] = i),
            (t[65] = he))
          : (he = t[65]);
        let ge;
        return (
          t[66] !== i || t[67] !== le || t[68] !== fe || t[69] !== me || t[70] !== he
            ? ((ge = (0, In.jsxs)(`div`, {
                ref: v,
                className: `pdfPreviewPage relative shrink-0 overflow-hidden border border-default bg-white shadow-sm`,
                "data-artifact-pdf-page": !0,
                "data-page-number": i,
                "data-page-viewport-ready": le,
                style: fe,
                children: [pe, me, he],
              })),
              (t[66] = i),
              (t[67] = le),
              (t[68] = fe),
              (t[69] = me),
              (t[70] = he),
              (t[71] = ge))
            : (ge = t[71]),
          ge
        );
      })));
  });
function zn({ anchor: e, container: t, pageSelector: n }) {
  let r = t.getBoundingClientRect(),
    i = e.kind === `point` ? e.clientX : r.left + r.width / 2,
    a = e.kind === `point` ? e.clientY : r.top + r.height / 2,
    o = Vn({ anchorClientX: i, anchorClientY: a, container: t, pageSelector: n });
  if (o == null) return null;
  let s = Number(o.dataset.pageNumber);
  if (!Number.isFinite(s)) return null;
  let c = o.getBoundingClientRect();
  return c.width <= 0 || c.height <= 0
    ? null
    : {
        anchorContainerOffsetX: i - r.left,
        anchorContainerOffsetY: a - r.top,
        pageNumber: s,
        ratioX: Gn((i - c.left) / c.width),
        ratioY: Gn((a - c.top) / c.height),
      };
}
function Bn({ anchorState: e, container: t, pageSelector: n }) {
  let r = Hn({ container: t, pageNumber: e.pageNumber, pageSelector: n });
  if (r == null) return !1;
  let i = t.getBoundingClientRect(),
    a = r.getBoundingClientRect(),
    o = a.left + a.width * e.ratioX,
    s = a.top + a.height * e.ratioY,
    c = i.left + e.anchorContainerOffsetX,
    l = i.top + e.anchorContainerOffsetY,
    u = t.currentCSSZoom || 1;
  return ((t.scrollLeft += (o - c) / u), (t.scrollTop += (s - l) / u), !0);
}
function Vn({ anchorClientX: e, anchorClientY: t, container: n, pageSelector: r }) {
  let i = document.elementFromPoint(e, t),
    a = i instanceof HTMLElement ? i.closest(r) : null;
  if (a != null && n.contains(a)) return a;
  let o = null,
    s = 1 / 0;
  for (let i of Un(n, r)) {
    let n = i.getBoundingClientRect(),
      r = Wn({ max: n.bottom, min: n.top, value: t }) + Wn({ max: n.right, min: n.left, value: e });
    r < s && ((s = r), (o = i));
  }
  return o;
}
function Hn({ container: e, pageNumber: t, pageSelector: n }) {
  return Un(e, n).find((e) => Number(e.dataset.pageNumber) === t) ?? null;
}
function Un(e, t) {
  return Array.from(e.querySelectorAll(t));
}
function Wn({ max: e, min: t, value: n }) {
  return n < t ? t - n : n > e ? n - e : 0;
}
function Gn(e) {
  return Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0;
}
var Kn = e(() => {});
function qn(e) {
  let t = (0, Qn.c)(25),
    {
      annotationBatchingEnabled: n,
      annotationsEnabled: r,
      chromeMode: i,
      fileDataUrl: a,
      getAnnotationOriginatingTurn: o,
      headerRightContent: s,
      hostId: c,
      importKind: l,
      initialPage: u,
      onBeforeOpen: f,
      onDocumentReady: p,
      onError: m,
      onPageChange: h,
      onReady: g,
      originatingTurn: _,
      path: v,
      previewRequestKey: y,
      refreshQueryCacheKey: b,
      title: x,
    } = e,
    S = r === void 0 || r,
    C = i === void 0 ? `default` : i,
    w = l === void 0 ? `pdf` : l,
    T = `${a}\0${y ?? `initial`}`,
    E;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(`section`, {
        className: `flex h-full min-h-0 flex-col bg-surface-secondary`,
        children: $e(`error`),
      })),
      (t[0] = E))
    : (E = t[0]);
  let D;
  t[1] !== n ||
  t[2] !== S ||
  t[3] !== C ||
  t[4] !== a ||
  t[5] !== o ||
  t[6] !== s ||
  t[7] !== c ||
  t[8] !== w ||
  t[9] !== u ||
  t[10] !== f ||
  t[11] !== p ||
  t[12] !== m ||
  t[13] !== h ||
  t[14] !== g ||
  t[15] !== _ ||
  t[16] !== v ||
  t[17] !== y ||
  t[18] !== b ||
  t[19] !== x
    ? ((D = (0, $.jsx)(Jn, {
        annotationBatchingEnabled: n,
        annotationsEnabled: S,
        chromeMode: C,
        fileDataUrl: a,
        getAnnotationOriginatingTurn: o,
        headerRightContent: s,
        hostId: c,
        importKind: w,
        initialPage: u,
        onBeforeOpen: f,
        onDocumentReady: p,
        onError: m,
        onPageChange: h,
        onReady: g,
        originatingTurn: _,
        path: v,
        previewRequestKey: y,
        refreshQueryCacheKey: b,
        title: x,
      })),
      (t[1] = n),
      (t[2] = S),
      (t[3] = C),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = w),
      (t[9] = u),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x),
      (t[20] = D))
    : (D = t[20]);
  let O;
  return (
    t[21] !== m || t[22] !== T || t[23] !== D
      ? ((O = (0, $.jsx)(d, {
          name: `PdfPreviewPanel`,
          onError: m,
          resetKey: T,
          fallback: E,
          children: D,
        })),
        (t[21] = m),
        (t[22] = T),
        (t[23] = D),
        (t[24] = O))
      : (O = t[24]),
    O
  );
}
function Jn(e) {
  let t = (0, Qn.c)(221),
    {
      annotationBatchingEnabled: n,
      annotationsEnabled: i,
      chromeMode: a,
      fileDataUrl: s,
      getAnnotationOriginatingTurn: l,
      headerRightContent: u,
      hostId: d,
      importKind: h,
      initialPage: v,
      onBeforeOpen: b,
      onDocumentReady: x,
      onError: S,
      onPageChange: C,
      onReady: w,
      originatingTurn: T,
      path: E,
      previewRequestKey: O,
      refreshQueryCacheKey: A,
      title: M,
    } = e,
    N = r(P),
    re = o(se),
    F = o(k),
    ie = o(ne),
    I = g(),
    L = (0, Q.useRef)(null),
    le = (0, Q.useRef)(!1),
    ue = (0, Q.useRef)(!1),
    fe = (0, Q.useRef)(!1),
    he = (0, Q.useRef)(null),
    ge = (0, Q.useRef)(s),
    _e = (0, Q.useRef)(null),
    ye;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((ye = new Set()), (t[0] = ye)) : (ye = t[0]);
  let be = (0, Q.useRef)(ye),
    [R, xe] = (0, Q.useState)(!1),
    [Ce, we] = (0, Q.useState)(null),
    Te;
  t[1] === N.value ? (Te = t[2]) : ((Te = ve(N.value)), (t[1] = N.value), (t[2] = Te));
  let z = Te,
    Ee;
  t[3] === z ? (Ee = t[4]) : ((Ee = z ?? _({ entrypoint: `home` })), (t[3] = z), (t[4] = Ee));
  let B = Ee,
    De = (0, Q.useRef)(n),
    ke,
    Ae;
  (t[5] === n
    ? ((ke = t[6]), (Ae = t[7]))
    : ((ke = () => {
        De.current = n;
      }),
      (Ae = [n]),
      (t[5] = n),
      (t[6] = ke),
      (t[7] = Ae)),
    (0, Q.useEffect)(ke, Ae));
  let V = m(Se, B),
    je;
  t[8] !== B || t[9] !== N
    ? ((je = (e) => {
        Re(N, B, e);
      }),
      (t[8] = B),
      (t[9] = N),
      (t[10] = je))
    : (je = t[10]);
  let Me = je,
    Ne;
  t[11] !== B || t[12] !== d || t[13] !== E
    ? ((Ne = { conversationId: B, hostId: d, path: E }),
      (t[11] = B),
      (t[12] = d),
      (t[13] = E),
      (t[14] = Ne))
    : (Ne = t[14]);
  let Pe = m(j, Ne),
    Fe;
  t[15] !== B || t[16] !== d || t[17] !== E || t[18] !== N
    ? ((Fe = (e) => {
        te(N, { conversationId: B, hostId: d, path: E }, e);
      }),
      (t[15] = B),
      (t[16] = d),
      (t[17] = E),
      (t[18] = N),
      (t[19] = Fe))
    : (Fe = t[19]);
  let Ie = Fe,
    Le;
  t[20] !== n || t[21] !== Pe || t[22] !== V
    ? ((Le = n ? [...V, ...Pe] : V), (t[20] = n), (t[21] = Pe), (t[22] = V), (t[23] = Le))
    : (Le = t[23]);
  let H = Le,
    ze;
  t[24] !== n || t[25] !== Ie || t[26] !== Me
    ? ((ze = (e) => {
        if (n) {
          Ie(e);
          return;
        }
        Me(e);
      }),
      (t[24] = n),
      (t[25] = Ie),
      (t[26] = Me),
      (t[27] = ze))
    : (ze = t[27]);
  let Be = ze,
    Ve;
  if (t[28] !== H || t[29] !== E) {
    let e;
    (t[31] === E
      ? (e = t[32])
      : ((e = (e) => ce(e) && e.localPdfContext?.path === E), (t[31] = E), (t[32] = e)),
      (Ve = H.filter(e)),
      (t[28] = H),
      (t[29] = E),
      (t[30] = Ve));
  } else Ve = t[30];
  let He = Ve,
    U;
  if (t[33] !== Pe || t[34] !== E) {
    let e;
    (t[36] === E
      ? (e = t[37])
      : ((e = (e) => ce(e) && e.localPdfContext?.path === E), (t[36] = E), (t[37] = e)),
      (U = Pe.filter(e)),
      (t[33] = Pe),
      (t[34] = E),
      (t[35] = U));
  } else U = t[35];
  let Ue = U,
    We;
  t[38] === He ? (We = t[39]) : ((We = Math.max(0, ...He.map(Xn))), (t[38] = He), (t[39] = We));
  let Ke = We + 1,
    Ye,
    Ze;
  (t[40] !== E || t[41] !== Me
    ? ((Ye = () => () => {
        De.current ||
          Me((e) => {
            let t = e.filter((e) => !(ce(e) && e.localPdfContext?.path === E));
            return t.length === e.length ? e : t;
          });
      }),
      (Ze = [E, Me]),
      (t[40] = E),
      (t[41] = Me),
      (t[42] = Ye),
      (t[43] = Ze))
    : ((Ye = t[42]), (Ze = t[43])),
    (0, Q.useEffect)(Ye, Ze));
  let et;
  t[44] === s ? (et = t[45]) : ((et = { fileDataUrl: s }), (t[44] = s), (t[45] = et));
  let {
      loadedFileDataUrl: tt,
      loadState: W,
      loadStateFileDataUrl: G,
      numPages: K,
      pageViewportSize: it,
      pdfDocument: q,
    } = ct(et),
    at = it != null && Ce != null,
    ot;
  t[46] !== v || t[47] !== K || t[48] !== C || t[49] !== at
    ? ((ot = {
        containerRef: L,
        initialPage: v,
        isPageLayoutReady: at,
        onPageChange: C,
        pageSelector: `[data-artifact-pdf-page]`,
        totalPages: K,
      }),
      (t[46] = v),
      (t[47] = K),
      (t[48] = C),
      (t[49] = at),
      (t[50] = ot))
    : (ot = t[50]);
  let { currentPage: st, goToNextPage: lt, goToPreviousPage: ut } = rt(ot),
    dt;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (e) => {
        let t = L.current;
        if (t == null) {
          he.current = null;
          return;
        }
        he.current = zn({ anchor: e, container: t, pageSelector: `[data-artifact-pdf-page]` });
      }),
      (t[51] = dt))
    : (dt = t[51]);
  let ft = dt,
    pt;
  t[52] !== it || t[53] !== Ce
    ? ((pt = { onBeforeZoom: ft, pageViewportSize: it, pageWidth: Ce }),
      (t[52] = it),
      (t[53] = Ce),
      (t[54] = pt))
    : (pt = t[54]);
  let {
      beginScaleChange: mt,
      fitToWidth: ht,
      handleWheel: gt,
      isZooming: _t,
      resize: J,
      setZoomPercent: vt,
      zoomPercent: yt,
      zoomEndTick: bt,
    } = _n(pt),
    xt;
  t[55] !== st || t[56] !== ht || t[57] !== J
    ? ((xt = () => {
        let e =
          J.kind === `page-width`
            ? null
            : L.current?.querySelector(`[data-artifact-pdf-page][data-page-number="${st}"]`);
        (ht(),
          e != null &&
            window.requestAnimationFrame(() => {
              e.scrollIntoView({ block: `center`, inline: `center` });
            }));
      }),
      (t[55] = st),
      (t[56] = ht),
      (t[57] = J),
      (t[58] = xt))
    : (xt = t[58]);
  let St = xt,
    Ct;
  t[59] === mt
    ? (Ct = t[60])
    : ((Ct = (e) => {
        if (e.contentRect.width <= 0) return;
        let t = Math.max(0, Math.floor(e.contentRect.width) - 48),
          n = _e.current;
        n !== t && (n != null && (ft({ kind: `center` }), mt()), (_e.current = t), we(t));
      }),
      (t[59] = mt),
      (t[60] = Ct));
  let wt = ae(Ct),
    Tt;
  t[61] !== K || t[62] !== q
    ? ((Tt = () => {
        let e = he.current,
          t = L.current;
        e == null ||
          t == null ||
          q == null ||
          K < 1 ||
          (Bn({
            anchorState: { ...e, pageNumber: Math.min(e.pageNumber, K) },
            container: t,
            pageSelector: `[data-artifact-pdf-page][data-page-viewport-ready]`,
          }) &&
            (he.current = null));
      }),
      (t[61] = K),
      (t[62] = q),
      (t[63] = Tt))
    : (Tt = t[63]);
  let Et = Tt,
    Dt;
  t[64] === Et
    ? (Dt = t[65])
    : ((Dt = () => {
        Et();
      }),
      (t[64] = Et),
      (t[65] = Dt));
  let Ot;
  (t[66] !== it || t[67] !== Ce || t[68] !== J || t[69] !== Et
    ? ((Ot = [it, Ce, J, Et]), (t[66] = it), (t[67] = Ce), (t[68] = J), (t[69] = Et), (t[70] = Ot))
    : (Ot = t[70]),
    (0, Q.useLayoutEffect)(Dt, Ot));
  let kt, At;
  (t[71] === s
    ? ((kt = t[72]), (At = t[73]))
    : ((kt = () => {
        ge.current !== s && ((ge.current = s), ft({ kind: `center` }));
      }),
      (At = [ft, s]),
      (t[71] = s),
      (t[72] = kt),
      (t[73] = At)),
    (0, Q.useLayoutEffect)(kt, At));
  let jt;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((jt = () => {
        ((le.current = !1), xe(!1));
      }),
      (t[74] = jt))
    : (jt = t[74]);
  let Mt;
  (t[75] === s ? (Mt = t[76]) : ((Mt = [s]), (t[75] = s), (t[76] = Mt)), (0, Q.useEffect)(jt, Mt));
  let Nt;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nt = () => {
        ((ue.current = !1), (fe.current = !1));
      }),
      (t[77] = Nt))
    : (Nt = t[77]);
  let Pt;
  (t[78] !== s || t[79] !== O
    ? ((Pt = [s, O]), (t[78] = s), (t[79] = O), (t[80] = Pt))
    : (Pt = t[80]),
    (0, Q.useEffect)(Nt, Pt));
  let Ft;
  t[81] === gt
    ? (Ft = t[82])
    : ((Ft = (e) => {
        let t = L.current;
        t !== e &&
          (t?.removeEventListener(`wheel`, gt),
          (L.current = e),
          e?.addEventListener(`wheel`, gt, { passive: !1 }));
      }),
      (t[81] = gt),
      (t[82] = Ft));
  let It = Ft,
    Y = W === `ready` && q != null && tt === s,
    Lt = Y,
    Rt = Y ? q : null,
    zt;
  t[83] !== l || t[84] !== K || t[85] !== T || t[86] !== N || t[87] !== z
    ? ((zt = () => {
        le.current = !0;
        let e = l == null ? T : l();
        ee(N, c, {
          pageCount: K,
          threadId: z ?? void 0,
          turnId: e?.turnId,
          inputMessageId: e?.inputMessageId ?? void 0,
          messageId: e?.messageId ?? void 0,
        });
      }),
      (t[83] = l),
      (t[84] = K),
      (t[85] = T),
      (t[86] = N),
      (t[87] = z),
      (t[88] = zt))
    : (zt = t[88]);
  let Bt = (0, Q.useEffectEvent)(zt),
    Vt;
  t[89] !== K || t[90] !== w
    ? ((Vt = () => {
        fe.current || !Number.isSafeInteger(K) || K <= 0 || ((fe.current = !0), w?.(K));
      }),
      (t[89] = K),
      (t[90] = w),
      (t[91] = Vt))
    : (Vt = t[91]);
  let Ht = y(Vt),
    Ut;
  t[92] === x
    ? (Ut = t[93])
    : ((Ut = () => {
        ue.current || ((ue.current = !0), x?.());
      }),
      (t[92] = x),
      (t[93] = Ut));
  let Wt = y(Ut),
    Gt;
  t[94] === S
    ? (Gt = t[95])
    : ((Gt = () => {
        fe.current || ((fe.current = !0), S?.());
      }),
      (t[94] = S),
      (t[95] = Gt));
  let Kt = y(Gt),
    qt;
  t[96] !== Bt || t[97] !== Lt
    ? ((qt = () => {
        !Lt || le.current || Bt();
      }),
      (t[96] = Bt),
      (t[97] = Lt),
      (t[98] = qt))
    : (qt = t[98]);
  let Jt;
  (t[99] === Lt ? (Jt = t[100]) : ((Jt = [Lt]), (t[99] = Lt), (t[100] = Jt)),
    (0, Q.useEffect)(qt, Jt));
  let Yt;
  t[101] !== Y || t[102] !== Wt
    ? ((Yt = () => {
        !Y || ue.current || Wt();
      }),
      (t[101] = Y),
      (t[102] = Wt),
      (t[103] = Yt))
    : (Yt = t[103]);
  let Xt;
  (t[104] !== Y || t[105] !== O || t[106] !== Wt
    ? ((Xt = [Y, O, Wt]), (t[104] = Y), (t[105] = O), (t[106] = Wt), (t[107] = Xt))
    : (Xt = t[107]),
    (0, Q.useEffect)(Yt, Xt));
  let Zt;
  t[108] !== s || t[109] !== W || t[110] !== G || t[111] !== Kt
    ? ((Zt = () => {
        W !== `error` || G !== s || fe.current || Kt();
      }),
      (t[108] = s),
      (t[109] = W),
      (t[110] = G),
      (t[111] = Kt),
      (t[112] = Zt))
    : (Zt = t[112]);
  let Qt;
  (t[113] !== s || t[114] !== W || t[115] !== G || t[116] !== O || t[117] !== Kt
    ? ((Qt = [s, W, G, O, Kt]),
      (t[113] = s),
      (t[114] = W),
      (t[115] = G),
      (t[116] = O),
      (t[117] = Kt),
      (t[118] = Qt))
    : (Qt = t[118]),
    (0, Q.useEffect)(Zt, Qt));
  let $t;
  t[119] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($t = (e, t) => {
        if (t) {
          be.current.add(e);
          return;
        }
        be.current.delete(e);
      }),
      (t[119] = $t))
    : ($t = t[119]);
  let en = $t,
    tn,
    nn;
  (t[120] === R
    ? ((tn = t[121]), (nn = t[122]))
    : ((tn = () => {
        if (!R) {
          be.current.clear();
          return;
        }
        let e = (e) => {
          e.defaultPrevented ||
            e.key !== `Escape` ||
            be.current.size > 0 ||
            (e.preventDefault(), e.stopPropagation(), xe(!1));
        };
        return (
          window.addEventListener(`keydown`, e),
          () => {
            window.removeEventListener(`keydown`, e);
          }
        );
      }),
      (nn = [R]),
      (t[120] = R),
      (t[121] = tn),
      (t[122] = nn)),
    (0, Q.useEffect)(tn, nn));
  let rn;
  t[123] === I
    ? (rn = t[124])
    : ((rn = I.formatMessage({
        id: `artifactPdfPreview.annotate`,
        defaultMessage: `Annotate`,
        description: `Tooltip text for the PDF annotation button`,
      })),
      (t[123] = I),
      (t[124] = rn));
  let an = rn,
    on;
  t[125] === I
    ? (on = t[126])
    : ((on = I.formatMessage({
        id: `artifactPdfPreview.annotationMode`,
        defaultMessage: `Annotating`,
        description: `Label shown when PDF annotation mode is active`,
      })),
      (t[125] = I),
      (t[126] = on));
  let sn = on,
    [cn, ln] = (0, Q.useState)(!1),
    X = F && re && ie,
    Z;
  t[127] !== l || t[128] !== X || t[129] !== R || t[130] !== T || t[131] !== N || t[132] !== z
    ? ((Z = () => {
        (ln(!1),
          R ||
            (X && pe(N),
            f(N, {
              artifactType: `pdf`,
              importKind: `pdf`,
              originatingTurn: l == null ? T : l(),
              threadId: z,
            })),
          xe(Yn));
      }),
      (t[127] = l),
      (t[128] = X),
      (t[129] = R),
      (t[130] = T),
      (t[131] = N),
      (t[132] = z),
      (t[133] = Z))
    : (Z = t[133]);
  let un;
  t[134] !== an || t[135] !== sn || t[136] !== R || t[137] !== Z
    ? ((un = (0, $.jsx)(nt, { active: R, activeLabel: sn, label: an, onClick: Z })),
      (t[134] = an),
      (t[135] = sn),
      (t[136] = R),
      (t[137] = Z),
      (t[138] = un))
    : (un = t[138]);
  let dn = un,
    fn;
  t[139] !== n ||
  t[140] !== B ||
  t[141] !== l ||
  t[142] !== R ||
  t[143] !== Ke ||
  t[144] !== K ||
  t[145] !== T ||
  t[146] !== E ||
  t[147] !== He ||
  t[148] !== Be ||
  t[149] !== z ||
  t[150] !== M
    ? ((fn = {
        comments: He,
        annotationBatchingEnabled: n,
        conversationId: B,
        getOriginatingTurn: l,
        isCommentMode: R,
        nextCommentNumber: Ke,
        onCommentsChange: Be,
        onDraftActiveChange: en,
        originatingTurn: T,
        pageCount: K,
        path: E,
        threadId: z,
        title: M,
      }),
      (t[139] = n),
      (t[140] = B),
      (t[141] = l),
      (t[142] = R),
      (t[143] = Ke),
      (t[144] = K),
      (t[145] = T),
      (t[146] = E),
      (t[147] = He),
      (t[148] = Be),
      (t[149] = z),
      (t[150] = M),
      (t[151] = fn))
    : (fn = t[151]);
  let pn = fn,
    mn;
  t[152] !== an ||
  t[153] !== dn ||
  t[154] !== i ||
  t[155] !== a ||
  t[156] !== st ||
  t[157] !== St ||
  t[158] !== lt ||
  t[159] !== ut ||
  t[160] !== u ||
  t[161] !== d ||
  t[162] !== h ||
  t[163] !== X ||
  t[164] !== cn ||
  t[165] !== R ||
  t[166] !== Y ||
  t[167] !== K ||
  t[168] !== b ||
  t[169] !== T ||
  t[170] !== E ||
  t[171] !== J ||
  t[172] !== N ||
  t[173] !== vt ||
  t[174] !== z ||
  t[175] !== M ||
  t[176] !== yt
    ? ((mn = Y
        ? (0, $.jsx)(D, {
            hideMetadata: a === `standalone`,
            title: Zn(M),
            centerContent: (0, $.jsx)(oe, {
              currentPage: st,
              onNextPage: lt,
              onPreviousPage: ut,
              totalPages: K,
            }),
            rightContent: (0, $.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-1 overflow-hidden [@container_(max-width:300px)]:gap-0.5`,
              children: [
                i
                  ? (0, $.jsx)(Ge, {
                      onDismiss: () => {
                        pe(N);
                      },
                      open: X,
                      children: (0, $.jsx)(`span`, {
                        className: `inline-flex`,
                        children: (0, $.jsx)(p, {
                          tooltipContent: an,
                          open: !R && !X && cn,
                          onOpenChange: (e) => {
                            R || X || ln(e);
                          },
                          children: dn,
                        }),
                      }),
                    })
                  : null,
                (0, $.jsx)(de, {
                  triggerTestId: `pdf-preview-zoom-trigger`,
                  zoomPercent: yt,
                  zoomOptions: me,
                  onZoomPercentChange: vt,
                  fitOption: { selected: J.kind === `page-width`, onSelect: St },
                }),
                a === "default"
                  ? (0, $.jsxs)($.Fragment, {
                      children: [
                        (0, $.jsx)(Xe, {
                          analyticsMetadata: {
                            artifactType: `pdf`,
                            importKind: h,
                            originatingTurn: T,
                            threadId: z,
                          },
                          hostId: d,
                          path: E,
                        }),
                        (0, $.jsx)(Je, {
                          analyticsContext: {
                            threadId: z,
                            turnId: T?.turnId ?? null,
                            inputMessageId: T?.inputMessageId ?? null,
                            messageId: T?.messageId ?? null,
                          },
                          getAnalyticsContext: () =>
                            qe(N, { hostId: d, originatingTurn: T, path: E, threadId: z }),
                          hostId: d,
                          onBeforeOpen: b,
                          path: E,
                          showLabel: !0,
                        }),
                      ],
                    })
                  : null,
                u,
              ],
            }),
          })
        : null),
      (t[152] = an),
      (t[153] = dn),
      (t[154] = i),
      (t[155] = a),
      (t[156] = st),
      (t[157] = St),
      (t[158] = lt),
      (t[159] = ut),
      (t[160] = u),
      (t[161] = d),
      (t[162] = h),
      (t[163] = X),
      (t[164] = cn),
      (t[165] = R),
      (t[166] = Y),
      (t[167] = K),
      (t[168] = b),
      (t[169] = T),
      (t[170] = E),
      (t[171] = J),
      (t[172] = N),
      (t[173] = vt),
      (t[174] = z),
      (t[175] = M),
      (t[176] = yt),
      (t[177] = mn))
    : (mn = t[177]);
  let hn;
  t[178] !== n ||
  t[179] !== i ||
  t[180] !== B ||
  t[181] !== d ||
  t[182] !== Y ||
  t[183] !== E ||
  t[184] !== Ue ||
  t[185] !== A ||
  t[186] !== Ie
    ? ((hn =
        Y && i && n
          ? (0, $.jsx)(`div`, {
              className: `pointer-events-none absolute inset-x-0 top-14 z-20 flex justify-center`,
              children: (0, $.jsx)(Qe, {
                annotationCount: Ue.length,
                conversationId: B,
                hostId: d,
                onDismissAnnotations: () => Ie([]),
                path: E,
                refreshQueryCacheKey: A,
              }),
            })
          : null),
      (t[178] = n),
      (t[179] = i),
      (t[180] = B),
      (t[181] = d),
      (t[182] = Y),
      (t[183] = E),
      (t[184] = Ue),
      (t[185] = A),
      (t[186] = Ie),
      (t[187] = hn))
    : (hn = t[187]);
  let gn = Y ? `min-h-0 flex-1 overflow-auto bg-surface-secondary` : `hidden`,
    vn;
  t[188] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vn = { paddingBottom: Oe }), (t[188] = vn))
    : (vn = t[188]);
  let yn;
  t[189] !== i ||
  t[190] !== pn ||
  t[191] !== st ||
  t[192] !== _t ||
  t[193] !== K ||
  t[194] !== it ||
  t[195] !== Ce ||
  t[196] !== O ||
  t[197] !== Rt ||
  t[198] !== Kt ||
  t[199] !== Ht ||
  t[200] !== J ||
  t[201] !== Et ||
  t[202] !== bt
    ? ((yn =
        Rt == null
          ? null
          : Array.from({ length: K }, (e, t) => {
              let n = t + 1;
              return (0, $.jsx)(
                Ln,
                {
                  commentLayer: i ? pn : null,
                  currentPage: st,
                  isZooming: _t,
                  onRenderError: Kt,
                  onRendered: Ht,
                  onViewportReady: Et,
                  pdfDocument: Rt,
                  pageSelector: `[data-artifact-pdf-page]`,
                  pageViewportSize: it,
                  pageNumber: n,
                  pageWidth: Ce,
                  resize: J,
                  renderRequestKey: O,
                  scrollRootRef: L,
                  zoomEndTick: bt,
                },
                n,
              );
            })),
      (t[189] = i),
      (t[190] = pn),
      (t[191] = st),
      (t[192] = _t),
      (t[193] = K),
      (t[194] = it),
      (t[195] = Ce),
      (t[196] = O),
      (t[197] = Rt),
      (t[198] = Kt),
      (t[199] = Ht),
      (t[200] = J),
      (t[201] = Et),
      (t[202] = bt),
      (t[203] = yn))
    : (yn = t[203]);
  let bn;
  t[204] === yn
    ? (bn = t[205])
    : ((bn = (0, $.jsx)(`div`, {
        className: `flex min-h-full w-max min-w-full flex-col items-center gap-6 px-6`,
        children: yn,
      })),
      (t[204] = yn),
      (t[205] = bn));
  let xn;
  t[206] !== wt || t[207] !== bn
    ? ((xn = (0, $.jsx)(`div`, { ref: wt, className: `min-h-full pt-6`, style: vn, children: bn })),
      (t[206] = wt),
      (t[207] = bn),
      (t[208] = xn))
    : (xn = t[208]);
  let Sn;
  t[209] !== It || t[210] !== gn || t[211] !== xn || t[212] !== M
    ? ((Sn = (0, $.jsx)(`div`, {
        ref: It,
        "aria-label": M,
        className: gn,
        "data-testid": `artifact-pdf-preview-panel`,
        children: xn,
      })),
      (t[209] = It),
      (t[210] = gn),
      (t[211] = xn),
      (t[212] = M),
      (t[213] = Sn))
    : (Sn = t[213]);
  let Cn;
  t[214] === W ? (Cn = t[215]) : ((Cn = $e(W)), (t[214] = W), (t[215] = Cn));
  let wn;
  return (
    t[216] !== mn || t[217] !== hn || t[218] !== Sn || t[219] !== Cn
      ? ((wn = (0, $.jsxs)(`section`, {
          className: `relative flex h-full min-h-0 flex-col bg-surface-secondary`,
          children: [mn, hn, Sn, Cn],
        })),
        (t[216] = mn),
        (t[217] = hn),
        (t[218] = Sn),
        (t[219] = Cn),
        (t[220] = wn))
      : (wn = t[220]),
    wn
  );
}
function Yn(e) {
  return !e;
}
function Xn(e) {
  return e.position.line;
}
function Zn(e) {
  return e.replace(/\.pdf$/i, ``);
}
var Qn, Q, $;
e(() => {
  ((Qn = I()),
    A(),
    h(),
    a(),
    (Q = t(i(), 1)),
    x(),
    tt(),
    xe(),
    le(),
    u(),
    n(),
    v(),
    fe(),
    ge(),
    Ie(),
    w(),
    S(),
    Ze(),
    he(),
    Ke(),
    Ye(),
    st(),
    et(),
    F(),
    We(),
    M(),
    gt(),
    Rn(),
    Kn(),
    Mn(),
    ($ = ie()));
})();
export { qn as PdfPreviewPanel };
//# sourceMappingURL=pdf-preview-panel-9569314b064c.js.map
