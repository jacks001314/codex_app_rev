const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./docx-preview-ef5f124f273f.js", "./rolldown-runtime-c05d78c594d1.js"]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Rt as n,
  A3t as r,
  AMt as i,
  Amn as a,
  B6t as o,
  Cpn as s,
  Ctn as c,
  F3t as l,
  JZ as u,
  Jit as d,
  Kit as f,
  N3t as p,
  O3t as m,
  Opn as ee,
  QRt as h,
  Rlt as te,
  Rpn as ne,
  Spn as re,
  Trn as g,
  UZ as _,
  Xdt as v,
  YZ as ie,
  _mn as y,
  _zt as b,
  a3t as ae,
  aH as oe,
  bmn as x,
  dH as S,
  eQ as C,
  f$ as w,
  fH as T,
  fQ as se,
  gRt as ce,
  gmn as le,
  h$ as ue,
  hH as E,
  hmn as de,
  kMt as fe,
  kmn as D,
  krn as O,
  l$ as pe,
  lW as me,
  mH as k,
  mrn as A,
  o3t as he,
  pH as ge,
  pmn as j,
  qZ as _e,
  rrn as ve,
  sH as M,
  sW as ye,
  uH as be,
  uQ as xe,
  xRt as N,
  xmn as Se,
  xpn as P,
  xtn as Ce,
  yRt as we,
  yzt as Te,
  zpn as F,
} from "./app-initial-f094ef01c64d.js";
import {
  $v as Ee,
  Bv as De,
  Dw as I,
  Ew as Oe,
  Fv as ke,
  Iv as L,
  Jv as Ae,
  Kv as je,
  Lv as Me,
  Qv as R,
  Qy as Ne,
  Rv as z,
  Uv as Pe,
  Vv as B,
  Wv as Fe,
  Xv as Ie,
  Yv as V,
  Zv as Le,
  ay as Re,
  eb as H,
  ey as U,
  iy as ze,
  kw as Be,
  ny as Ve,
  oy as He,
  qv as Ue,
  ry as We,
  sy as Ge,
  ty as Ke,
  zv as qe,
} from "./app-primary-4c40d73a1074.js";
import {
  i as Je,
  n as Ye,
  r as Xe,
  s as Ze,
  t as W,
  u as Qe,
} from "./presentation-annotation-cursor-coachmark-ede276f159dd.js";
import { n as $e, t as et } from "./artifact-originating-turn-1d99e170e424.js";
import { n as tt, r as nt, t as rt } from "./artifact-preview-header-abbff5f8a3ae.js";
import { n as it, t as at } from "./artifact-annotation-batch-controls-b9f12cd27bf6.js";
import { n as ot, t as st } from "./artifact-preview-status-ce3d7c794ec8.js";
var ct = e(() => {});
function lt({ anchor: e, editorScale: t, layer: n, pageSize: r }) {
  return e.kind === `region` && e.selectionKind != null
    ? Ae({ editorScale: t, layer: n, pageSize: r, rect: e.rect })
    : V({
        editorScale: t,
        layer: n,
        markerPoint: e.kind === `region` ? U(e.rect) : e.point,
        pageSize: r,
      });
}
var ut = e(() => {
  Ve();
});
function dt(e) {
  return e.askForEditAnchor?.point ?? Ue(e.rect);
}
function ft(e) {
  return (
    Math.abs(e.clientCurrent.x - e.clientStart.x) >= 3 ||
    Math.abs(e.clientCurrent.y - e.clientStart.y) >= 3
  );
}
function pt(e, t = !1) {
  let n = Ee(e.start, e.current);
  return !t && n.width < 8 && n.height < 8
    ? { kind: `point`, point: e.current }
    : { kind: `region`, rect: n };
}
var mt = e(() => {
  (ct(), Ve());
});
function ht({
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
    l = e.kind === `region` ? (e.selectionKind == null ? U(e.rect) : dt(e)) : e.point;
  return {
    sessionId:
      o.mode === `edit`
        ? `docx-comment-edit:${o.commentId}`
        : e.kind === `region`
          ? [`docx-comment`, r, `region`, e.rect.x, e.rect.y, e.rect.width, e.rect.height].join(`:`)
          : [`docx-comment`, r, `point`, e.point.x, e.point.y].join(`:`),
    conversationId: n,
    target: o,
    anchorState: {
      anchor: {
        kind: `region`,
        pageUrl: a,
        frameUrl: null,
        title: s,
        elementPath: `docx-page-${r}`,
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
function gt({ anchor: e, pageCount: t, pageNumber: n, pageSize: r }) {
  return e.kind === `region`
    ? e.selectionKind == null
      ? {
          target: {
            type: `document-page-region`,
            anchorPoint: U(e.rect),
            pageCount: t,
            pageNumber: n,
            pageSize: r,
            rect: e.rect,
          },
        }
      : {
          contentPreview: e.contentPreview,
          target: {
            type: `document-element-selection`,
            selectionKind: e.selectionKind,
            anchorPoint: dt(e),
            pageCount: t,
            pageNumber: n,
            pageSize: r,
            rect: e.rect,
            selectionRects: e.selectionRects,
            selectedText: e.selectedText,
            nearbyText: e.nearbyText,
          },
        }
    : {
        target: {
          type: `document-page-point`,
          pageCount: t,
          pageNumber: n,
          pageSize: r,
          point: e.point,
        },
      };
}
function _t(e, t) {
  return e.kind === `region` && e.selectionKind != null
    ? `Page ${t} ${e.selectionKind}`
    : e.kind === `region`
      ? `Page ${t} region`
      : `Page ${t} point`;
}
function vt(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-point` ||
    t?.type === `document-page-region` ||
    t?.type === `document-element-selection`
    ? t.pageNumber
    : null;
}
function yt(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-point` ||
    t?.type === `document-page-region` ||
    t?.type === `document-element-selection`
    ? t.pageSize
    : null;
}
function bt(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-region`
    ? { kind: `region`, rect: t.rect }
    : t?.type === `document-element-selection`
      ? {
          kind: `region`,
          ...(t.selectionKind === `text`
            ? { askForEditAnchor: { placement: `above`, point: t.anchorPoint } }
            : {}),
          rect: t.rect,
          contentPreview: e.localArtifactAnnotationMetadata?.contentPreview,
          selectionRects: t.selectionRects,
          selectionKind: t.selectionKind,
          selectedText: t.selectedText,
          nearbyText: t.nearbyText,
        }
      : t?.type === `document-page-point`
        ? { kind: `point`, point: t.point }
        : null;
}
function xt(e) {
  return e.content.flatMap((e) => (e.content_type === `text` ? [e.text] : [])).join(`
`);
}
function St(e) {
  return [e.position.path, e.position.line, e.localArtifactAnnotationContext?.label ?? ``].join(
    `:`,
  );
}
var Ct = e(() => {
  (mt(), Ve());
});
function wt(e) {
  let t = (0, G.c)(9),
    {
      bordered: n,
      borderWidth: r,
      paddingPx: i,
      paddingX: a,
      paddingY: o,
      pageSize: s,
      rect: c,
      testId: l,
    } = e,
    u = n !== void 0 && n,
    d = r === void 0 ? +!!u : r,
    f = i === void 0 ? 0 : i,
    p = a === void 0 ? f : a,
    m = o === void 0 ? f : o,
    ee;
  return (
    t[0] !== d ||
    t[1] !== u ||
    t[2] !== f ||
    t[3] !== p ||
    t[4] !== m ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l
      ? ((ee = (0, K.jsx)(z, {
          bordered: u,
          borderWidth: d,
          paddingPx: f,
          paddingX: p,
          paddingY: m,
          pageSize: s,
          rect: c,
          testId: l,
        })),
        (t[0] = d),
        (t[1] = u),
        (t[2] = f),
        (t[3] = p),
        (t[4] = m),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = ee))
      : (ee = t[8]),
    ee
  );
}
function Tt(e) {
  let t = (0, G.c)(39),
    { comment: n, isSelected: r, onEdit: i, onPreviewChange: a, zoomScale: o } = e,
    s = ee(),
    c,
    l,
    u,
    d,
    f,
    p;
  if (t[0] !== n || t[1] !== s) {
    p = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      c = bt(n);
      let e;
      if (
        (t[8] === n ? (e = t[9]) : ((e = yt(n)), (t[8] = n), (t[9] = e)),
        (d = e),
        c == null || d == null)
      ) {
        p = null;
        break bb0;
      }
      let r;
      (t[10] === n ? (r = t[11]) : ((r = St(n)), (t[10] = n), (t[11] = r)), (u = r));
      let i;
      (t[12] !== n.position.line || t[13] !== s
        ? ((i = s.formatMessage(
            {
              id: `artifactDocxPreview.commentMarkerLabel`,
              defaultMessage: `Document annotation {commentNumber}`,
              description: `Accessible label for a placed DOCX annotation marker`,
            },
            { commentNumber: n.position.line },
          )),
          (t[12] = n.position.line),
          (t[13] = s),
          (t[14] = i))
        : (i = t[14]),
        (l = i),
        (f = c.kind === `region` ? U(c.rect) : c.point));
    }
    ((t[0] = n),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p));
  } else ((c = t[2]), (l = t[3]), (u = t[4]), (d = t[5]), (f = t[6]), (p = t[7]));
  if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
  let m = f,
    h;
  t[15] !== u || t[16] !== a
    ? ((h = () => a(u)), (t[15] = u), (t[16] = a), (t[17] = h))
    : (h = t[17]);
  let te = h,
    ne;
  t[18] === a ? (ne = t[19]) : ((ne = () => a(null)), (t[18] = a), (t[19] = ne));
  let re = ne,
    g;
  t[20] !== c || t[21] !== d
    ? ((g =
        c.kind === `region`
          ? c.selectionKind == null
            ? (0, K.jsx)(De, {
                pageSize: d,
                rect: c.rect,
                testId: `artifact-docx-comment-region-outline`,
              })
            : (0, K.jsx)(Ot, {
                bordered: !0,
                pageSize: d,
                anchor: c,
                testId: `artifact-docx-comment-region-outline`,
              })
          : null),
      (t[20] = c),
      (t[21] = d),
      (t[22] = g))
    : (g = t[22]);
  let _;
  t[23] !== u || t[24] !== i
    ? ((_ = () => i(u)), (t[23] = u), (t[24] = i), (t[25] = _))
    : (_ = t[25]);
  let v;
  t[26] !== n.position.line ||
  t[27] !== l ||
  t[28] !== re ||
  t[29] !== r ||
  t[30] !== d ||
  t[31] !== m ||
  t[32] !== te ||
  t[33] !== _ ||
  t[34] !== o
    ? ((v = (0, K.jsx)(qe, {
        ariaLabel: l,
        isSelected: r,
        label: n.position.line,
        pageSize: d,
        point: m,
        testId: `artifact-docx-comment-marker`,
        zoomScale: o,
        onClick: _,
        onPreviewHide: re,
        onPreviewShow: te,
      })),
      (t[26] = n.position.line),
      (t[27] = l),
      (t[28] = re),
      (t[29] = r),
      (t[30] = d),
      (t[31] = m),
      (t[32] = te),
      (t[33] = _),
      (t[34] = o),
      (t[35] = v))
    : (v = t[35]);
  let ie;
  return (
    t[36] !== g || t[37] !== v
      ? ((ie = (0, K.jsxs)(K.Fragment, { children: [g, v] })),
        (t[36] = g),
        (t[37] = v),
        (t[38] = ie))
      : (ie = t[38]),
    ie
  );
}
function Et(e) {
  let t = (0, G.c)(14),
    { comment: n, layer: r } = e,
    i,
    a,
    o;
  if (t[0] !== n) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = bt(n);
      if (((i = yt(n)), e == null || i == null)) {
        o = null;
        break bb0;
      }
      a = e.kind === `region` ? U(e.rect) : e.point;
    }
    ((t[0] = n), (t[1] = i), (t[2] = a), (t[3] = o));
  } else ((i = t[1]), (a = t[2]), (o = t[3]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s = a,
    c;
  t[4] === n ? (c = t[5]) : ((c = St(n)), (t[4] = n), (t[5] = c));
  let l;
  t[6] === n ? (l = t[7]) : ((l = xt(n)), (t[6] = n), (t[7] = l));
  let u;
  return (
    t[8] !== r || t[9] !== i || t[10] !== s || t[11] !== c || t[12] !== l
      ? ((u = (0, K.jsx)(
          L,
          { body: l, layer: r, pageSize: i, point: s, testId: `artifact-docx-comment-preview` },
          c,
        )),
        (t[8] = r),
        (t[9] = i),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
function Dt(e) {
  let t = (0, G.c)(18),
    { anchor: n, label: r, pageSize: i, zoomScale: a } = e;
  if (n.kind === `region`) {
    let e;
    t[0] !== n || t[1] !== i
      ? ((e =
          n.selectionKind == null
            ? (0, K.jsx)(De, {
                pageSize: i,
                rect: n.rect,
                testId: `artifact-docx-comment-region-outline`,
              })
            : (0, K.jsx)(Ot, {
                bordered: !0,
                pageSize: i,
                anchor: n,
                testId: `artifact-docx-comment-region-outline`,
              })),
        (t[0] = n),
        (t[1] = i),
        (t[2] = e))
      : (e = t[2]);
    let o;
    t[3] === n.rect ? (o = t[4]) : ((o = U(n.rect)), (t[3] = n.rect), (t[4] = o));
    let s;
    t[5] !== r || t[6] !== i || t[7] !== o || t[8] !== a
      ? ((s = (0, K.jsx)(qe, {
          draft: !0,
          draftTestId: `artifact-docx-comment-draft-marker`,
          label: r,
          pageSize: i,
          point: o,
          testId: `artifact-docx-comment-marker`,
          zoomScale: a,
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = o),
        (t[8] = a),
        (t[9] = s))
      : (s = t[9]);
    let c;
    return (
      t[10] !== e || t[11] !== s
        ? ((c = (0, K.jsxs)(K.Fragment, { children: [e, s] })),
          (t[10] = e),
          (t[11] = s),
          (t[12] = c))
        : (c = t[12]),
      c
    );
  }
  let o;
  return (
    t[13] !== n.point || t[14] !== r || t[15] !== i || t[16] !== a
      ? ((o = (0, K.jsx)(qe, {
          draft: !0,
          draftTestId: `artifact-docx-comment-draft-marker`,
          label: r,
          pageSize: i,
          point: n.point,
          testId: `artifact-docx-comment-marker`,
          zoomScale: a,
        })),
        (t[13] = n.point),
        (t[14] = r),
        (t[15] = i),
        (t[16] = a),
        (t[17] = o))
      : (o = t[17]),
    o
  );
}
function Ot(e) {
  let t = (0, G.c)(18),
    { bordered: n, pageSize: r, anchor: i, testId: a } = e,
    o = n !== void 0 && n;
  if (i.selectionKind === `text`) {
    let e;
    t[0] !== i.rect || t[1] !== i.selectionRects
      ? ((e =
          i.selectionRects == null || i.selectionRects.length === 0 ? [i.rect] : i.selectionRects),
        (t[0] = i.rect),
        (t[1] = i.selectionRects),
        (t[2] = e))
      : (e = t[2]);
    let n = e,
      o;
    if (t[3] !== r || t[4] !== a || t[5] !== n) {
      let e;
      (t[7] !== r || t[8] !== a
        ? ((e = (e, t) =>
            (0, K.jsx)(
              wt,
              { paddingX: 4, paddingY: 0, pageSize: r, rect: e, testId: a },
              `${e.x}:${e.y}:${e.width}:${e.height}:${t}`,
            )),
          (t[7] = r),
          (t[8] = a),
          (t[9] = e))
        : (e = t[9]),
        (o = n.map(e)),
        (t[3] = r),
        (t[4] = a),
        (t[5] = n),
        (t[6] = o));
    } else o = t[6];
    let s;
    return (
      t[10] === o
        ? (s = t[11])
        : ((s = (0, K.jsx)(K.Fragment, { children: o })), (t[10] = o), (t[11] = s)),
      s
    );
  }
  let s = o ? (i.selectionKind === `paragraph` ? 2 : 1) : 0,
    c;
  return (
    t[12] !== i.rect || t[13] !== o || t[14] !== r || t[15] !== s || t[16] !== a
      ? ((c = (0, K.jsx)(wt, {
          bordered: o,
          borderWidth: s,
          paddingPx: 4,
          pageSize: r,
          rect: i.rect,
          testId: a,
        })),
        (t[12] = i.rect),
        (t[13] = o),
        (t[14] = r),
        (t[15] = s),
        (t[16] = a),
        (t[17] = c))
      : (c = t[17]),
    c
  );
}
var G,
  K,
  q = e(() => {
    ((G = D()), re(), ct(), Ct(), B(), Ve(), (K = de()));
  });
function kt({ pageElement: e, pageSize: t }) {
  let n = e.ownerDocument.getSelection();
  if (n == null || n.isCollapsed || n.rangeCount === 0 || !Rt(n, e)) return null;
  let r = Vt(n.toString());
  if (r.length === 0) return null;
  let i = n.getRangeAt(0);
  if (!e.contains(i.commonAncestorContainer)) return null;
  let a = Array.from(i.getClientRects()),
    o = Le({ clientRects: a, pageElement: e, pageSize: t });
  if (o == null) return null;
  let s = R({ clientRects: a, pageElement: e, pageSize: t });
  return {
    askForEditAnchor: Ke({ clientRects: a, pageElement: e, pageSize: t, selection: n }) ?? void 0,
    contentPreview: { type: `text`, text: r },
    kind: `region`,
    rect: o,
    ...(s.length <= 1 ? {} : { selectionRects: s }),
    selectedText: r,
    selectionKind: `text`,
  };
}
function At({
  clientX: e,
  clientY: t,
  includePreviewMetadata: n,
  layerElement: r,
  pageElement: i,
  pageSize: a,
  selectionKindFilter: o,
}) {
  let s = (i.ownerDocument.elementsFromPoint?.(e, t) ?? []).find(
    (e) => e !== r && !r.contains(e) && i.contains(e),
  );
  return s == null
    ? null
    : jt({
        includePreviewMetadata: n,
        pageElement: i,
        pageSize: a,
        selectionKindFilter: o,
        target: s,
      });
}
function jt({
  includePreviewMetadata: e,
  pageElement: t,
  pageSize: n,
  selectionKindFilter: r,
  target: i,
}) {
  let a = J(i, t);
  if (a == null || (r != null && !r(a.selectionKind))) return null;
  let o = Le({ clientRects: [a.element.getBoundingClientRect()], pageElement: t, pageSize: n });
  if (o == null) return null;
  let s = e ? zt(a.element) : ``,
    c = e ? Mt({ element: a.element, nearbyText: s, selectionKind: a.selectionKind }) : null;
  return {
    askForEditAnchor:
      a.selectionKind === `image` || a.selectionKind === `drawing`
        ? { alignment: `end`, placement: `below`, point: { x: o.x + o.width, y: o.y + o.height } }
        : void 0,
    contentPreview: c ?? void 0,
    kind: `region`,
    rect: o,
    selectionKind: a.selectionKind,
    ...(s.length === 0 ? {} : { nearbyText: s }),
  };
}
function J(e, t) {
  let n = It(e, t, (e) => e.matches(`img`));
  if (n != null) return { element: n, selectionKind: `image` };
  let r = It(e, t, Lt);
  if (r != null) return { element: r, selectionKind: `drawing` };
  let i = It(e, t, (e) => e.matches(`table`));
  if (i != null) return { element: i, selectionKind: `table` };
  let a = It(e, t, (e) => e.matches(`p`));
  return a == null ? null : { element: a, selectionKind: `paragraph` };
}
function Mt({ element: e, nearbyText: t, selectionKind: n }) {
  if (n === `image` || n === `drawing`) {
    let t = Nt(e);
    if (t != null) return t;
  }
  return t.length === 0 ? null : { type: `text`, text: t };
}
function Nt(e) {
  let t = Pt(e);
  if (t != null) {
    let e = t.currentSrc.trim() || t.getAttribute(`src`)?.trim() || t.src.trim();
    if (e) {
      let n = t.alt.trim();
      return { type: `image`, src: e, ...(n.length === 0 ? {} : { alt: n }) };
    }
  }
  let n = Ft(e);
  return n == null
    ? null
    : {
        type: `image`,
        src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(n))}`,
      };
}
function Pt(e) {
  return e instanceof HTMLImageElement ? e : e.querySelector(`img`);
}
function Ft(e) {
  return e instanceof SVGSVGElement ? e : e.querySelector(`svg`);
}
function It(e, t, n) {
  let r = e;
  for (; r != null && r !== t;) {
    if (n(r)) return r;
    r = r.parentElement;
  }
  return null;
}
function Lt(e) {
  return (
    e.matches(`svg`) ||
    (e instanceof HTMLElement &&
      e.tagName === `DIV` &&
      e.style.display === `inline-block` &&
      e.style.position === `relative` &&
      e.querySelector(`img, svg`) != null)
  );
}
function Rt(e, t) {
  return (
    e.anchorNode != null &&
    e.focusNode != null &&
    t.contains(e.anchorNode) &&
    t.contains(e.focusNode)
  );
}
function zt(e) {
  let t = [];
  return (Bt(e, t), Vt(t.join(` `)));
}
function Bt(e, t) {
  if (e.nodeType === Node.TEXT_NODE) {
    let n = Vt(e.textContent ?? ``);
    n.length > 0 && t.push(n);
    return;
  }
  for (let n of e.childNodes) Bt(n, t);
}
function Vt(e) {
  return e.replace(/\s+/g, ` `).trim().slice(0, 500);
}
var Ht = e(() => {
  (ct(), mt());
});
function Ut(e) {
  let t = (0, Yt.c)(263),
    {
      annotationBatchingEnabled: n,
      comments: i,
      conversationId: a,
      getOriginatingTurn: o,
      isCommentMode: s,
      nextCommentNumber: c,
      onCommentsChange: l,
      onTouchCancel: d,
      onTouchEnd: f,
      onTouchMove: p,
      onTouchStart: m,
      onWheel: h,
      originatingTurn: te,
      pageCount: re,
      pageNumber: g,
      pageSize: _,
      path: v,
      threadId: y,
      title: b,
      zoomScale: oe,
    } = e,
    x = oe === void 0 ? 1 : oe,
    S = r(ae),
    C = ee(),
    w = Te(),
    [T, se] = (0, Y.useState)(null),
    ce = (0, Y.useRef)(null),
    { shake: le } = Re(ce),
    ue = (0, Y.useRef)(!1),
    [E, de] = (0, Y.useState)(null),
    [fe, D] = (0, Y.useState)(null),
    [O, pe] = (0, Y.useState)(null),
    [me, k] = (0, Y.useState)(null),
    A = 1 / Math.max(x, 2 ** -52),
    [he, ge] = (0, Y.useState)(``),
    [j, ve] = (0, Y.useState)(null),
    [M, ye] = (0, Y.useState)(null),
    [be, xe] = (0, Y.useState)(null),
    [N, P] = (0, Y.useState)(!1),
    we;
  if (t[0] !== i || t[1] !== g || t[2] !== v) {
    let e;
    (t[4] !== g || t[5] !== v
      ? ((e = (e) => e.localArtifactAnnotationContext?.path === v && vt(e) === g),
        (t[4] = g),
        (t[5] = v),
        (t[6] = e))
      : (e = t[6]),
      (we = i.filter(e)),
      (t[0] = i),
      (t[1] = g),
      (t[2] = v),
      (t[3] = we));
  } else we = t[3];
  let F = we,
    I;
  t[7] !== F || t[8] !== be
    ? ((I = be == null ? null : (F.find((e) => St(e) === be) ?? null)),
      (t[7] = F),
      (t[8] = be),
      (t[9] = I))
    : (I = t[9]);
  let Oe = I,
    L,
    Ae,
    R,
    Ne;
  t[10] !== F || t[11] !== E || t[12] !== fe || t[13] !== M || t[14] !== _
    ? ((R = M == null ? null : (F.find((e) => St(e) === M) ?? null)),
      (Ae = R == null ? null : bt(R)),
      (L = E ?? Ae),
      (Ne = E == null ? ((R == null ? null : (yt(R) ?? _)) ?? _) : (fe ?? _)),
      (t[10] = F),
      (t[11] = E),
      (t[12] = fe),
      (t[13] = M),
      (t[14] = _),
      (t[15] = L),
      (t[16] = Ae),
      (t[17] = R),
      (t[18] = Ne))
    : ((L = t[15]), (Ae = t[16]), (R = t[17]), (Ne = t[18]));
  let z = Ne,
    B;
  bb0: {
    if (E != null) {
      let e;
      (t[19] !== z ||
      t[20] !== a ||
      t[21] !== E ||
      t[22] !== he ||
      t[23] !== g ||
      t[24] !== v ||
      t[25] !== b
        ? ((e = ht({
            anchor: E,
            body: he,
            conversationId: a,
            pageNumber: g,
            pageSize: z,
            path: v,
            target: { mode: `create` },
            title: b,
          })),
          (t[19] = z),
          (t[20] = a),
          (t[21] = E),
          (t[22] = he),
          (t[23] = g),
          (t[24] = v),
          (t[25] = b),
          (t[26] = e))
        : (e = t[26]),
        (B = e));
      break bb0;
    }
    if (Ae == null || R == null || M == null) {
      B = null;
      break bb0;
    }
    let e;
    (t[27] !== z ||
    t[28] !== a ||
    t[29] !== Ae ||
    t[30] !== R ||
    t[31] !== M ||
    t[32] !== g ||
    t[33] !== v ||
    t[34] !== b
      ? ((e = ht({
          anchor: Ae,
          body: xt(R),
          conversationId: a,
          pageNumber: g,
          pageSize: z,
          path: v,
          target: { mode: `edit`, commentId: M },
          title: b,
        })),
        (t[27] = z),
        (t[28] = a),
        (t[29] = Ae),
        (t[30] = R),
        (t[31] = M),
        (t[32] = g),
        (t[33] = v),
        (t[34] = b),
        (t[35] = e))
      : (e = t[35]),
      (B = e));
  }
  let V = B,
    Le;
  if (t[36] !== L || t[37] !== z || t[38] !== A || t[39] !== T || t[40] !== w || t[41] !== x) {
    let e = L == null ? null : lt({ anchor: L, editorScale: A, layer: T, pageSize: z });
    ((Le = e == null || T == null ? null : qt(T, e, w, x)),
      (t[36] = L),
      (t[37] = z),
      (t[38] = A),
      (t[39] = T),
      (t[40] = w),
      (t[41] = x),
      (t[42] = Le));
  } else Le = t[42];
  let H = Le,
    U;
  t[43] !== T || t[44] !== _ || t[45] !== O || t[46] !== w
    ? ((U =
        O == null
          ? null
          : Kt({ anchor: O.askForEditAnchor ?? je(O.rect), layer: T, pageSize: _, windowZoom: w })),
      (t[43] = T),
      (t[44] = _),
      (t[45] = O),
      (t[46] = w),
      (t[47] = U))
    : (U = t[47]);
  let ze = U,
    Be = L != null,
    Ve;
  t[48] === C
    ? (Ve = t[49])
    : ((Ve = C.formatMessage({
        id: `artifactDocxPreview.commentInput`,
        defaultMessage: `Document annotation comment`,
        description: `Aria label for the DOCX annotation comment input`,
      })),
      (t[48] = C),
      (t[49] = Ve));
  let Ue = Ve,
    Ge;
  t[50] === C
    ? (Ge = t[51])
    : ((Ge = C.formatMessage({
        id: `artifactAnnotationComment.placeholder`,
        defaultMessage: `Describe a change or ask a question`,
        description: `Placeholder text for an artifact annotation comment editor`,
      })),
      (t[50] = C),
      (t[51] = Ge));
  let Ke = Ge,
    qe;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = () => {
        (de(null), D(null), pe(null), k(null), ge(``), ye(null), P(!1));
      }),
      (t[52] = qe))
    : (qe = t[52]);
  let Je = qe,
    Ye;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (e) => {
        (ge(e), P(!1));
      }),
      (t[53] = Ye))
    : (Ye = t[53]);
  let Xe = Ye,
    Ze;
  t[54] !== V || t[55] !== he || t[56] !== N || t[57] !== le
    ? ((Ze = () =>
        V == null
          ? !1
          : V.target.mode === `create` && he.trim().length > 0
            ? N
              ? (Je(), !0)
              : (P(!0), le(), !1)
            : (Je(), !0)),
      (t[54] = V),
      (t[55] = he),
      (t[56] = N),
      (t[57] = le),
      (t[58] = Ze))
    : (Ze = t[58]);
  let W = Ze,
    Qe;
  t[59] !== L || t[60] !== z || t[61] !== A || t[62] !== T || t[63] !== w || t[64] !== x
    ? ((Qe = () => {
        if (L == null || T == null) return;
        let e = lt({ anchor: L, editorScale: A, layer: T, pageSize: z });
        if (e == null) return;
        let t = ce.current;
        if (t == null) return;
        let n = qt(T, e, w, x);
        ((t.style.left = `${n.x}px`), (t.style.top = `${n.y}px`));
      }),
      (t[59] = L),
      (t[60] = z),
      (t[61] = A),
      (t[62] = T),
      (t[63] = w),
      (t[64] = x),
      (t[65] = Qe))
    : (Qe = t[65]);
  let $e = (0, Y.useEffectEvent)(Qe),
    et;
  t[66] !== $e || t[67] !== Be || t[68] !== T
    ? ((et = () => {
        if (!Be || T == null) return;
        let e = T.ownerDocument,
          t = e.defaultView,
          n = () => {
            $e();
          };
        (e.addEventListener(`scroll`, n, { capture: !0 }), t?.addEventListener(`resize`, n));
        let r = typeof ResizeObserver > `u` ? null : new ResizeObserver(n);
        return (
          r?.observe(T),
          n(),
          () => {
            (e.removeEventListener(`scroll`, n, { capture: !0 }),
              t?.removeEventListener(`resize`, n),
              r?.disconnect());
          }
        );
      }),
      (t[66] = $e),
      (t[67] = Be),
      (t[68] = T),
      (t[69] = et))
    : (et = t[69]);
  let tt;
  (t[70] !== z.height ||
  t[71] !== z.width ||
  t[72] !== A ||
  t[73] !== Be ||
  t[74] !== T ||
  t[75] !== w
    ? ((tt = [z.height, z.width, A, Be, T, w]),
      (t[70] = z.height),
      (t[71] = z.width),
      (t[72] = A),
      (t[73] = Be),
      (t[74] = T),
      (t[75] = w),
      (t[76] = tt))
    : (tt = t[76]),
    (0, Y.useEffect)(et, tt));
  let nt;
  t[77] !== T?.ownerDocument || t[78] !== W
    ? ((nt = (e) => {
        let t = e.target;
        (t instanceof Node && ce.current?.contains(t)) ||
          (e.preventDefault(),
          e.stopPropagation(),
          W() &&
            (t instanceof Node ? t.ownerDocument : T?.ownerDocument)
              ?.getSelection()
              ?.removeAllRanges());
      }),
      (t[77] = T?.ownerDocument),
      (t[78] = W),
      (t[79] = nt))
    : (nt = t[79]);
  let rt = (0, Y.useEffectEvent)(nt),
    it;
  t[80] !== V?.target.mode || t[81] !== rt || t[82] !== s || t[83] !== T
    ? ((it = () => {
        if (s || V?.target.mode !== `create` || T == null) return;
        let e = T.ownerDocument,
          t = (e) => {
            rt(e);
          };
        return (
          e.addEventListener(`pointerdown`, t, { capture: !0 }),
          () => {
            e.removeEventListener(`pointerdown`, t, { capture: !0 });
          }
        );
      }),
      (t[80] = V?.target.mode),
      (t[81] = rt),
      (t[82] = s),
      (t[83] = T),
      (t[84] = it))
    : (it = t[84]);
  let at = V?.target.mode,
    ot;
  (t[85] !== s || t[86] !== T || t[87] !== at
    ? ((ot = [at, s, T]), (t[85] = s), (t[86] = T), (t[87] = at), (t[88] = ot))
    : (ot = t[88]),
    (0, Y.useEffect)(it, ot));
  let st;
  t[89] !== E || t[90] !== M || t[91] !== s || t[92] !== T || t[93] !== _ || t[94] !== W
    ? ((st = () => {
        if (s || T == null) return;
        let e = T.parentElement;
        if (e == null) return;
        let t = kt({ pageElement: e, pageSize: _ });
        if (t == null) {
          pe(null);
          return;
        }
        ((E != null || M != null) && !W()) ||
          (pe(t), de(null), D(null), ge(``), ye(null), xe(null), P(!1));
      }),
      (t[89] = E),
      (t[90] = M),
      (t[91] = s),
      (t[92] = T),
      (t[93] = _),
      (t[94] = W),
      (t[95] = st))
    : (st = t[95]);
  let ct = (0, Y.useEffectEvent)(st),
    ut;
  t[96] !== s || t[97] !== T || t[98] !== ct
    ? ((ut = () => {
        if (T == null || s) return;
        let e = T.parentElement;
        if (e == null) return;
        let t = () => {
          ct();
        };
        return (
          e.addEventListener(`mouseup`, t),
          e.addEventListener(`keyup`, t),
          () => {
            (e.removeEventListener(`mouseup`, t), e.removeEventListener(`keyup`, t));
          }
        );
      }),
      (t[96] = s),
      (t[97] = T),
      (t[98] = ct),
      (t[99] = ut))
    : (ut = t[99]);
  let dt;
  (t[100] !== s || t[101] !== T
    ? ((dt = [s, T]), (t[100] = s), (t[101] = T), (t[102] = dt))
    : (dt = t[102]),
    (0, Y.useEffect)(ut, dt));
  let mt;
  t[103] !== E || t[104] !== M || t[105] !== s || t[106] !== T || t[107] !== _ || t[108] !== W
    ? ((mt = (e) => {
        if (s || T == null || e.defaultPrevented) return;
        let t = e.target;
        if (t instanceof Node && T.contains(t)) return;
        let n = T.parentElement;
        if (n == null) return;
        let r = At({
          clientX: e.clientX,
          clientY: e.clientY,
          includePreviewMetadata: !0,
          layerElement: T,
          pageElement: n,
          pageSize: _,
          selectionKindFilter: Gt,
        });
        r != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          !((E != null || M != null) && !W()) &&
            (n.ownerDocument.getSelection()?.removeAllRanges(),
            pe(r),
            de(null),
            D(null),
            ge(``),
            ye(null),
            xe(null),
            P(!1)));
      }),
      (t[103] = E),
      (t[104] = M),
      (t[105] = s),
      (t[106] = T),
      (t[107] = _),
      (t[108] = W),
      (t[109] = mt))
    : (mt = t[109]);
  let Ct = (0, Y.useEffectEvent)(mt),
    Ot;
  t[110] !== s || t[111] !== T || t[112] !== Ct
    ? ((Ot = () => {
        if (T == null || s) return;
        let e = T.parentElement;
        if (e == null) return;
        let t = (e) => {
          Ct(e);
        };
        return (
          e.addEventListener(`click`, t),
          () => {
            e.removeEventListener(`click`, t);
          }
        );
      }),
      (t[110] = s),
      (t[111] = T),
      (t[112] = Ct),
      (t[113] = Ot))
    : (Ot = t[113]);
  let G;
  (t[114] !== s || t[115] !== T
    ? ((G = [s, T]), (t[114] = s), (t[115] = T), (t[116] = G))
    : (G = t[116]),
    (0, Y.useEffect)(Ot, G));
  let K;
  t[117] !== s || t[118] !== T || t[119] !== _
    ? ((K = (e, t, n) => {
        if (!s || T == null) return null;
        let r = T.parentElement;
        return r == null
          ? null
          : At({
              clientX: e,
              clientY: t,
              includePreviewMetadata: n,
              layerElement: T,
              pageElement: r,
              pageSize: _,
            });
      }),
      (t[117] = s),
      (t[118] = T),
      (t[119] = _),
      (t[120] = K))
    : (K = t[120]);
  let q = K,
    jt;
  t[121] !== o || t[122] !== s || t[123] !== te || t[124] !== _ || t[125] !== S || t[126] !== y
    ? ((jt = (e, t) => {
        (u(
          S,
          {
            artifactType: `document`,
            importKind: `docx`,
            originatingTurn: o == null ? te : o(),
            threadId: y,
          },
          { annotationModeEnabled: s, startSource: t },
        ),
          de(e),
          D(_),
          pe(null),
          k(null),
          ge(``),
          ye(null),
          xe(null),
          P(!1));
      }),
      (t[121] = o),
      (t[122] = s),
      (t[123] = te),
      (t[124] = _),
      (t[125] = S),
      (t[126] = y),
      (t[127] = jt))
    : (jt = t[127]);
  let J = jt,
    Mt;
  t[128] !== E || t[129] !== M || t[130] !== J || t[131] !== _ || t[132] !== O
    ? ((Mt = (e, t) => {
        if (E != null || M != null || !We(e)) return;
        let n = kt({ pageElement: t, pageSize: _ }) ?? (O?.selectionKind === `text` ? null : O);
        n != null && (e.preventDefault(), e.stopPropagation(), J(n, `ask_codex_shortcut`));
      }),
      (t[128] = E),
      (t[129] = M),
      (t[130] = J),
      (t[131] = _),
      (t[132] = O),
      (t[133] = Mt))
    : (Mt = t[133]);
  let Nt = (0, Y.useEffectEvent)(Mt),
    Pt;
  t[134] !== T || t[135] !== Nt
    ? ((Pt = () => {
        if (T == null) return;
        let e = T.parentElement;
        if (e == null) return;
        let t = (t) => {
          Nt(t, e);
        };
        return (
          e.ownerDocument.addEventListener(`keydown`, t, { capture: !0 }),
          () => {
            e.ownerDocument.removeEventListener(`keydown`, t, { capture: !0 });
          }
        );
      }),
      (t[134] = T),
      (t[135] = Nt),
      (t[136] = Pt))
    : (Pt = t[136]);
  let Ft;
  (t[137] === T ? (Ft = t[138]) : ((Ft = [T]), (t[137] = T), (t[138] = Ft)),
    (0, Y.useEffect)(Pt, Ft));
  let It;
  t[139] !== E || t[140] !== M || t[141] !== J || t[142] !== W
    ? ((It = (e) => {
        ((E != null || M != null) && !W()) || J(e, `annotation_mode_pointer`);
      }),
      (t[139] = E),
      (t[140] = M),
      (t[141] = J),
      (t[142] = W),
      (t[143] = It))
    : (It = t[143]);
  let Lt = It,
    Rt;
  t[144] !== s || t[145] !== _
    ? ((Rt = (e) => {
        if (!s || !e.isPrimary || e.pointerType === `touch` || e.button !== 0) return;
        let t = Ie(e, _);
        t != null &&
          ((ue.current = !1),
          e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.setPointerCapture(e.pointerId),
          pe(null),
          k(null),
          xe(null),
          ve({
            pointerId: e.pointerId,
            start: t,
            current: t,
            clientStart: { x: e.clientX, y: e.clientY },
            clientCurrent: { x: e.clientX, y: e.clientY },
          }));
      }),
      (t[144] = s),
      (t[145] = _),
      (t[146] = Rt))
    : (Rt = t[146]);
  let zt = Rt,
    Bt;
  t[147] !== E || t[148] !== j || t[149] !== M || t[150] !== q || t[151] !== _
    ? ((Bt = (e) => {
        if (j == null) {
          if (E != null || M != null) {
            k(null);
            return;
          }
          k(q(e.clientX, e.clientY, !1));
          return;
        }
        if (e.pointerId !== j.pointerId) return;
        let t = Ie(e, _);
        t != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          ve((n) =>
            n == null || n.pointerId !== e.pointerId
              ? n
              : { ...n, current: t, clientCurrent: { x: e.clientX, y: e.clientY } },
          ));
      }),
      (t[147] = E),
      (t[148] = j),
      (t[149] = M),
      (t[150] = q),
      (t[151] = _),
      (t[152] = Bt))
    : (Bt = t[152]);
  let Vt = Bt,
    Ht;
  t[153] !== E ||
  t[154] !== j ||
  t[155] !== q ||
  t[156] !== Lt ||
  t[157] !== J ||
  t[158] !== _ ||
  t[159] !== W
    ? ((Ht = (e) => {
        if (j == null || e.pointerId !== j.pointerId) return;
        let t = Ie(e, _) ?? j.current;
        (e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.hasPointerCapture(e.pointerId) &&
            e.currentTarget.releasePointerCapture(e.pointerId));
        let n = { ...j, current: t, clientCurrent: { x: e.clientX, y: e.clientY } },
          r = ft(n),
          i = pt(n, r);
        if (((ue.current = r), !r)) {
          let t = q(e.clientX, e.clientY, !0);
          if (t != null) {
            ((ue.current = !0), ve(null), Lt(t));
            return;
          }
        }
        if (E != null && i.kind === `point`) {
          (W(), ve(null));
          return;
        }
        (J(i, `annotation_mode_pointer`), ve(null));
      }),
      (t[153] = E),
      (t[154] = j),
      (t[155] = q),
      (t[156] = Lt),
      (t[157] = J),
      (t[158] = _),
      (t[159] = W),
      (t[160] = Ht))
    : (Ht = t[160]);
  let Ut = Ht,
    Jt;
  t[161] !== q || t[162] !== Lt || t[163] !== J || t[164] !== _
    ? ((Jt = (e) => {
        if (ue.current) {
          ((ue.current = !1), e.preventDefault(), e.stopPropagation());
          return;
        }
        let t = q(e.clientX, e.clientY, !0);
        if (t != null) {
          (e.preventDefault(), e.stopPropagation(), Lt(t));
          return;
        }
        e.detail === 0 &&
          (e.preventDefault(),
          e.stopPropagation(),
          J({ kind: `point`, point: { x: _.width / 2, y: _.height / 2 } }, `ask_codex_button`));
      }),
      (t[161] = q),
      (t[162] = Lt),
      (t[163] = J),
      (t[164] = _),
      (t[165] = Jt))
    : (Jt = t[165]);
  let Qt = Jt,
    $t;
  t[166] !== n ||
  t[167] !== a ||
  t[168] !== E ||
  t[169] !== fe ||
  t[170] !== M ||
  t[171] !== o ||
  t[172] !== s ||
  t[173] !== c ||
  t[174] !== l ||
  t[175] !== te ||
  t[176] !== re ||
  t[177] !== g ||
  t[178] !== _ ||
  t[179] !== v ||
  t[180] !== S ||
  t[181] !== y ||
  t[182] !== b
    ? (($t = (e, t) => {
        let { submitDirectly: r } = t === void 0 ? {} : t,
          i = r !== void 0 && r,
          u = e.body.trim();
        if (M != null) {
          if (u.length === 0) return;
          (l((e) =>
            e.map((e) =>
              St(e) === M ? { ...e, content: [{ content_type: `text`, text: u }] } : e,
            ),
          ),
            Je());
          return;
        }
        if (E == null || u.length === 0) return;
        let d = gt({ anchor: E, pageCount: re, pageNumber: g, pageSize: fe ?? _ }),
          f = Ce({
            artifactKind: `document`,
            body: u,
            label: _t(E, g),
            line: c,
            metadata: d,
            path: v,
            title: b,
          }),
          p = n || !i ? `saved` : `direct`;
        (ie(
          S,
          {
            artifactType: `document`,
            importKind: `docx`,
            originatingTurn: o == null ? te : o(),
            threadId: y,
          },
          {
            annotationModeEnabled: s,
            annotationTargetKind: d.target.type,
            submitMode: p,
            submitSource: e.submitSource,
          },
        ),
          !n && i
            ? Se.dispatchHostMessage({
                type: `artifact-direct-comment`,
                body: u,
                comment: f,
                conversationId: a,
                sessionId: crypto.randomUUID(),
              })
            : l((e) => [...e, f]),
          Je());
      }),
      (t[166] = n),
      (t[167] = a),
      (t[168] = E),
      (t[169] = fe),
      (t[170] = M),
      (t[171] = o),
      (t[172] = s),
      (t[173] = c),
      (t[174] = l),
      (t[175] = te),
      (t[176] = re),
      (t[177] = g),
      (t[178] = _),
      (t[179] = v),
      (t[180] = S),
      (t[181] = y),
      (t[182] = b),
      (t[183] = $t))
    : ($t = t[183]);
  let en = $t,
    tn = s ? `pointer-events-auto` : `pointer-events-none`,
    nn;
  t[184] === tn
    ? (nn = t[185])
    : ((nn = ne(`absolute inset-0 z-[3]`, tn)), (t[184] = tn), (t[185] = nn));
  let rn;
  t[186] === s ? (rn = t[187]) : ((rn = s ? { cursor: Pe } : void 0), (t[186] = s), (t[187] = rn));
  let an, on;
  t[188] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((an = () => {
        (ve(null), k(null));
      }),
      (on = () => k(null)),
      (t[188] = an),
      (t[189] = on))
    : ((an = t[188]), (on = t[189]));
  let sn;
  t[190] !== Qt || t[191] !== C || t[192] !== s
    ? ((sn = s
        ? (0, X.jsx)(`button`, {
            type: `button`,
            "aria-label": C.formatMessage({
              id: `artifactDocxPreview.addAnnotation`,
              defaultMessage: `Add document annotation`,
              description: `Accessible label for the overlay that adds a DOCX document annotation`,
            }),
            className: `cursor-inherit absolute inset-0 border-0 bg-transparent p-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
            onClick: Qt,
          })
        : null),
      (t[190] = Qt),
      (t[191] = C),
      (t[192] = s),
      (t[193] = sn))
    : (sn = t[193]);
  let cn;
  if (t[194] !== F || t[195] !== M || t[196] !== x) {
    let e;
    (t[198] !== M || t[199] !== x
      ? ((e = (e) =>
          (0, X.jsx)(
            Tt,
            {
              comment: e,
              isSelected: St(e) === M,
              onEdit: (e) => {
                (de(null), D(null), ge(``), P(!1), xe(null), k(null), ye(e));
              },
              onPreviewChange: xe,
              zoomScale: x,
            },
            St(e),
          )),
        (t[198] = M),
        (t[199] = x),
        (t[200] = e))
      : (e = t[200]),
      (cn = F.map(e)),
      (t[194] = F),
      (t[195] = M),
      (t[196] = x),
      (t[197] = cn));
  } else cn = t[197];
  let ln;
  t[201] !== M || t[202] !== Oe || t[203] !== T
    ? ((ln = Oe == null || M != null ? null : (0, X.jsx)(Et, { comment: Oe, layer: T })),
      (t[201] = M),
      (t[202] = Oe),
      (t[203] = T),
      (t[204] = ln))
    : (ln = t[204]);
  let un;
  t[205] !== E || t[206] !== M || t[207] !== me || t[208] !== _
    ? ((un =
        me != null && E == null && M == null
          ? (0, X.jsx)(wt, {
              paddingPx: 4,
              pageSize: _,
              rect: me.rect,
              testId: `artifact-docx-element-hover-highlight`,
            })
          : null),
      (t[205] = E),
      (t[206] = M),
      (t[207] = me),
      (t[208] = _),
      (t[209] = un))
    : (un = t[209]);
  let dn;
  t[210] !== E ||
  t[211] !== C ||
  t[212] !== J ||
  t[213] !== _ ||
  t[214] !== S ||
  t[215] !== O ||
  t[216] !== ze ||
  t[217] !== y ||
  t[218] !== x
    ? ((dn =
        O != null && E == null
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                O.selectionKind === `text`
                  ? null
                  : (0, X.jsx)(wt, {
                      bordered: !0,
                      paddingPx: 4,
                      pageSize: _,
                      rect: O.rect,
                      testId: `artifact-docx-selection-outline`,
                    }),
                (0, X.jsx)(ke, {
                  anchor: ze ?? void 0,
                  label: C.formatMessage({
                    id: `artifactDocxPreview.askForChange`,
                    defaultMessage: `Ask for change`,
                    description: `Button label for starting a contextual DOCX annotation from the selected document element`,
                  }),
                  pageSize: _,
                  rect: O.rect,
                  testId: `artifact-docx-ask-for-edit-button`,
                  zoomScale: x,
                  onClick: () => J(O, `ask_codex_button`),
                  onShown: () =>
                    _e(S, { artifactType: `document`, importKind: `docx`, threadId: y }),
                }),
              ],
            })
          : null),
      (t[210] = E),
      (t[211] = C),
      (t[212] = J),
      (t[213] = _),
      (t[214] = S),
      (t[215] = O),
      (t[216] = ze),
      (t[217] = y),
      (t[218] = x),
      (t[219] = dn))
    : (dn = t[219]);
  let fn;
  t[220] !== j || t[221] !== _
    ? ((fn =
        j == null
          ? null
          : (0, X.jsx)(De, {
              pageSize: _,
              rect: Ee(j.start, j.current),
              testId: `artifact-docx-comment-region-outline`,
            })),
      (t[220] = j),
      (t[221] = _),
      (t[222] = fn))
    : (fn = t[222]);
  let pn;
  t[223] !== E || t[224] !== fe || t[225] !== c || t[226] !== _ || t[227] !== x
    ? ((pn =
        E == null
          ? null
          : (0, X.jsx)(Dt, { anchor: E, label: c, pageSize: fe ?? _, zoomScale: x })),
      (t[223] = E),
      (t[224] = fe),
      (t[225] = c),
      (t[226] = _),
      (t[227] = x),
      (t[228] = pn))
    : (pn = t[228]);
  let mn;
  t[229] !== V ||
  t[230] !== H ||
  t[231] !== n ||
  t[232] !== Ue ||
  t[233] !== Ke ||
  t[234] !== en ||
  t[235] !== T ||
  t[236] !== l ||
  t[237] !== d ||
  t[238] !== f ||
  t[239] !== p ||
  t[240] !== m ||
  t[241] !== h ||
  t[242] !== w
    ? ((mn =
        H == null || V == null || T == null
          ? null
          : (0, Xt.createPortal)(
              (0, X.jsx)(Me, {
                ref: ce,
                "data-testid": `artifact-docx-comment-editor-frame`,
                style: { position: `fixed`, left: H.x, top: H.y, height: Fe * w, width: 294 * w },
                onPointerDown: Wt,
                onTouchCancel: (e) => {
                  (e.stopPropagation(), d?.());
                },
                onTouchEnd: (e) => {
                  (e.stopPropagation(), f?.());
                },
                onTouchMove: (e) => {
                  (e.stopPropagation(), p?.(e));
                },
                onTouchStart: (e) => {
                  (e.stopPropagation(), m?.(e));
                },
                onWheel: (e) => {
                  (e.stopPropagation(), h?.(e));
                },
                children: (0, X.jsx)(`div`, {
                  style: {
                    height: Fe,
                    transform: `scale(${w})`,
                    transformOrigin: `top left`,
                    width: 294,
                  },
                  children: (0, X.jsx)(
                    He,
                    {
                      allowImageAttachments: !1,
                      defaultCreateSubmitMode: n ? `saved` : `direct`,
                      inputAriaLabel: Ue,
                      keyboardEventTarget: typeof window > `u` ? void 0 : window,
                      placeholder: Ke,
                      session: V,
                      windowHeight: Fe,
                      onCancel: Je,
                      onDelete: (e) => {
                        (l((t) => t.filter((t) => St(t) !== e)), Je());
                      },
                      onEscape: Je,
                      onBodyChange: V.target.mode === `create` ? Xe : void 0,
                      onLightDismissibilityChange: Zt,
                      onMounted: Zt,
                      onDirectSubmit: (e) => {
                        en(e, { submitDirectly: !n });
                      },
                      onSubmit: en,
                    },
                    V.sessionId,
                  ),
                }),
              }),
              T.ownerDocument.body,
            )),
      (t[229] = V),
      (t[230] = H),
      (t[231] = n),
      (t[232] = Ue),
      (t[233] = Ke),
      (t[234] = en),
      (t[235] = T),
      (t[236] = l),
      (t[237] = d),
      (t[238] = f),
      (t[239] = p),
      (t[240] = m),
      (t[241] = h),
      (t[242] = w),
      (t[243] = mn))
    : (mn = t[243]);
  let hn;
  return (
    t[244] !== zt ||
    t[245] !== Vt ||
    t[246] !== Ut ||
    t[247] !== d ||
    t[248] !== f ||
    t[249] !== p ||
    t[250] !== m ||
    t[251] !== h ||
    t[252] !== nn ||
    t[253] !== rn ||
    t[254] !== sn ||
    t[255] !== cn ||
    t[256] !== ln ||
    t[257] !== un ||
    t[258] !== dn ||
    t[259] !== fn ||
    t[260] !== pn ||
    t[261] !== mn
      ? ((hn = (0, X.jsxs)(`div`, {
          ref: se,
          className: nn,
          "data-testid": `artifact-docx-comment-layer`,
          style: rn,
          onPointerDown: zt,
          onPointerMove: Vt,
          onPointerUp: Ut,
          onPointerCancel: an,
          onPointerLeave: on,
          onTouchCancel: d,
          onTouchEnd: f,
          onTouchMove: p,
          onTouchStart: m,
          onWheel: h,
          children: [sn, cn, ln, un, dn, fn, pn, mn],
        })),
        (t[244] = zt),
        (t[245] = Vt),
        (t[246] = Ut),
        (t[247] = d),
        (t[248] = f),
        (t[249] = p),
        (t[250] = m),
        (t[251] = h),
        (t[252] = nn),
        (t[253] = rn),
        (t[254] = sn),
        (t[255] = cn),
        (t[256] = ln),
        (t[257] = un),
        (t[258] = dn),
        (t[259] = fn),
        (t[260] = pn),
        (t[261] = mn),
        (t[262] = hn))
      : (hn = t[262]),
    hn
  );
}
function Wt(e) {
  return e.stopPropagation();
}
function Gt(e) {
  return e === `image` || e === `drawing`;
}
function Kt({ anchor: e, layer: t, pageSize: n, windowZoom: r }) {
  if (t == null || n.width <= 0) return e;
  let i = Jt(t);
  if (i == null) return e;
  let a = t.getBoundingClientRect();
  if (a.width <= 0) return e;
  let o = Math.max(a.left, i.left),
    s = Math.min(a.right, i.right);
  if (s <= o) return e;
  let c = 16 * r,
    l = Math.min(s, o + c),
    u = Math.max(l, s - c),
    d = a.left + (e.point.x / n.width) * a.width,
    f = Math.min(Math.max(d, l), u),
    p = ((f - o) / (s - o)) * 100,
    m = p <= 20 ? `start` : p >= 80 ? `end` : e.alignment;
  return { ...e, alignment: m, point: { ...e.point, x: ((f - a.left) / a.width) * n.width } };
}
function qt(e, t, n, r) {
  let i = e.getBoundingClientRect(),
    a = i.left + t.x * r * n,
    o = i.top + t.y * r * n,
    s = Jt(e);
  if (s == null) return { x: a, y: o };
  let c = 16 * n,
    l = s.left + c,
    u = Math.max(l, s.right - 294 * n - c),
    d = s.top + c,
    f = Math.max(d, s.bottom - Fe * n - c);
  return { x: Math.min(Math.max(a, l), u), y: Math.min(Math.max(o, d), f) };
}
function Jt(e) {
  let t = e.ownerDocument,
    n = t.defaultView;
  if (n == null) return null;
  for (let r = e.parentElement?.parentElement; r != null && r !== t.body; r = r.parentElement) {
    let e = n.getComputedStyle(r),
      t = e.overflowX || e.overflow;
    if (![`auto`, `clip`, `hidden`, `overlay`, `scroll`].includes(t)) continue;
    let i = r.getBoundingClientRect();
    return i.width > 0 ? i : null;
  }
  return null;
}
var Yt,
  Y,
  Xt,
  X,
  Zt,
  Qt = e(() => {
    ((Yt = D()),
      F(),
      m(),
      o(),
      (Y = t(a(), 1)),
      (Xt = t(j(), 1)),
      re(),
      b(),
      Ge(),
      ze(),
      x(),
      he(),
      _(),
      ct(),
      ut(),
      mt(),
      Ct(),
      q(),
      Ht(),
      B(),
      Ve(),
      (X = de()),
      (Zt = () => {}));
  });
function $t(e) {
  let t = nn.safeParse(e);
  return (
    t.success && t.data.parts.some((e) => en(e.body) || en(e.rootElement) || e.notes?.some(en))
  );
}
function en(e) {
  return (
    e != null &&
    (e.type === `inserted` ||
      e.type === `deleted` ||
      e.type === `deletedText` ||
      e.children?.some(en) === !0)
  );
}
var tn,
  nn,
  rn = e(() => {
    (ve(),
      (tn = g({
        type: O(),
        get children() {
          return A(tn).optional();
        },
      })),
      (nn = g({
        parts: A(g({ body: tn.optional(), rootElement: tn.optional(), notes: A(tn).optional() })),
      })));
  });
function an(e) {
  let t = (0, Cn.c)(162),
    {
      annotationBatchingEnabled: n,
      bytes: i,
      chromeMode: a,
      disableAnnotations: o,
      disableFileActions: c,
      getAnnotationOriginatingTurn: u,
      headerRightContent: d,
      headerTitleContent: m,
      headerZoomLeadingContent: re,
      hostId: g,
      onBeforeOpen: _,
      onImportError: v,
      onReady: ie,
      originatingTurn: y,
      path: b,
      ref: ae,
      refreshQueryCacheKey: x,
      title: S,
    } = e,
    w = a === void 0 ? `default` : a,
    T = o !== void 0 && o,
    le = c !== void 0 && c,
    E = r(ce),
    de = ee(),
    [D, O] = (0, Z.useState)(!0),
    me = l(ue),
    k = (0, Z.use)(Mn),
    A = Te(),
    he = (0, Z.useRef)(null),
    ge = (0, Z.useRef)(null),
    j;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => {
        ge.current != null && (window.cancelAnimationFrame(ge.current), (ge.current = null));
      }),
      (t[0] = j))
    : (j = t[0]);
  let _e = j,
    ve;
  t[1] !== ie || t[2] !== A
    ? ((ve = (e) => {
        let t = he.current;
        (t != null && yn(e, t, ge, A) && (he.current = null), ie?.());
      }),
      (t[1] = ie),
      (t[2] = A),
      (t[3] = ve))
    : (ve = t[3]);
  let ye = ve,
    xe;
  t[4] !== i || t[5] !== k || t[6] !== ye || t[7] !== v
    ? ((xe = { bytes: i, onImportError: v, onPagesRendered: ye, renderer: k, renderChanges: !1 }),
      (t[4] = i),
      (t[5] = k),
      (t[6] = ye),
      (t[7] = v),
      (t[8] = xe))
    : (xe = t[8]);
  let N = sn(xe),
    Se;
  t[9] !== i || t[10] !== N.hasRedlines || t[11] !== k || t[12] !== ye || t[13] !== v
    ? ((Se = {
        bytes: i,
        enabled: N.hasRedlines,
        onImportError: v,
        onPagesRendered: ye,
        renderer: k,
        renderChanges: !0,
      }),
      (t[9] = i),
      (t[10] = N.hasRedlines),
      (t[11] = k),
      (t[12] = ye),
      (t[13] = v),
      (t[14] = Se))
    : (Se = t[14]);
  let P = sn(Se),
    { bodyContainerRef: Ce, styleContainerRef: F } = P,
    { bodyContainerRef: Ee, styleContainerRef: De } = N,
    I = D && N.hasRedlines ? P : N,
    ke = I === P ? N : P,
    { bodyContainerElementRef: L, loadState: Ae, pageElements: je, totalPages: Me } = I,
    { bodyContainerElementRef: R } = ke,
    Ne;
  t[15] === E.value ? (Ne = t[16]) : ((Ne = we(E.value)), (t[15] = E.value), (t[16] = Ne));
  let z = Ne,
    Pe;
  t[17] === z ? (Pe = t[18]) : ((Pe = z ?? h({ entrypoint: `home` })), (t[17] = z), (t[18] = Pe));
  let B = Pe,
    Fe = (0, Z.useRef)(n),
    Ie,
    V;
  (t[19] === n
    ? ((Ie = t[20]), (V = t[21]))
    : ((Ie = () => {
        Fe.current = n;
      }),
      (V = [n]),
      (t[19] = n),
      (t[20] = Ie),
      (t[21] = V)),
    (0, Z.useEffect)(Ie, V));
  let Le = p(Oe, B),
    Re;
  t[22] !== B || t[23] !== E
    ? ((Re = (e) => {
        Be(E, B, e);
      }),
      (t[22] = B),
      (t[23] = E),
      (t[24] = Re))
    : (Re = t[24]);
  let H = Re,
    U;
  t[25] !== B || t[26] !== g || t[27] !== b
    ? ((U = { conversationId: B, hostId: g, path: b }),
      (t[25] = B),
      (t[26] = g),
      (t[27] = b),
      (t[28] = U))
    : (U = t[28]);
  let ze = p(C, U),
    Ve;
  t[29] !== B || t[30] !== g || t[31] !== b || t[32] !== E
    ? ((Ve = (e) => {
        se(E, { conversationId: B, hostId: g, path: b }, e);
      }),
      (t[29] = B),
      (t[30] = g),
      (t[31] = b),
      (t[32] = E),
      (t[33] = Ve))
    : (Ve = t[33]);
  let He = Ve,
    Ue,
    We,
    Ge,
    Ke;
  if (t[34] !== n || t[35] !== ze || t[36] !== Le || t[37] !== b || t[38] !== He || t[39] !== H) {
    let e = n ? [...Le, ...ze] : Le,
      r;
    (t[44] !== n || t[45] !== He || t[46] !== H
      ? ((r = (e) => {
          if (n) {
            He(e);
            return;
          }
          H(e);
        }),
        (t[44] = n),
        (t[45] = He),
        (t[46] = H),
        (t[47] = r))
      : (r = t[47]),
      (Ge = r));
    let i;
    (t[48] === b ? (i = t[49]) : ((i = (e) => Sn(e, b)), (t[48] = b), (t[49] = i)),
      (Ue = e.filter(i)));
    let a;
    if (t[50] !== ze || t[51] !== b) {
      let e;
      (t[53] === b ? (e = t[54]) : ((e = (e) => Sn(e, b)), (t[53] = b), (t[54] = e)),
        (a = ze.filter(e)),
        (t[50] = ze),
        (t[51] = b),
        (t[52] = a));
    } else a = t[52];
    ((We = a),
      (Ke = Ze(Ue)),
      (t[34] = n),
      (t[35] = ze),
      (t[36] = Le),
      (t[37] = b),
      (t[38] = He),
      (t[39] = H),
      (t[40] = Ue),
      (t[41] = We),
      (t[42] = Ge),
      (t[43] = Ke));
  } else ((Ue = t[40]), (We = t[41]), (Ge = t[42]), (Ke = t[43]));
  let qe = Ke,
    {
      handleTouchCancel: Je,
      handleTouchEnd: Ye,
      handleTouchMove: Qe,
      handleTouchStart: $e,
      handleWheel: nt,
      fitToWidth: it,
      isZoomToFitSelected: st,
      previewStyle: ct,
      resizeRef: lt,
      setZoomPercent: ut,
      zoomPercent: dt,
    } = cn(L),
    ft = Ae === `ready`,
    pt;
  t[55] !== L || t[56] !== A
    ? ((pt = (e) => {
        let t = L.current;
        if (t == null || !yn(t, e, ge, A)) {
          he.current = e;
          return;
        }
        he.current = null;
      }),
      (t[55] = L),
      (t[56] = A),
      (t[57] = pt))
    : (pt = t[57]);
  let mt = pt,
    ht,
    gt;
  (t[58] === mt
    ? ((ht = t[59]), (gt = t[60]))
    : ((ht = () => ({ navigateToPage: mt })),
      (gt = [mt]),
      (t[58] = mt),
      (t[59] = ht),
      (t[60] = gt)),
    (0, Z.useImperativeHandle)(ae, ht, gt));
  let _t, vt;
  (t[61] !== b || t[62] !== H
    ? ((_t = () => () => {
        (_e(),
          !Fe.current &&
            H((e) => {
              let t = e.filter((e) => !Sn(e, b));
              return t.length === e.length ? e : t;
            }));
      }),
      (vt = [_e, b, H]),
      (t[61] = b),
      (t[62] = H),
      (t[63] = _t),
      (t[64] = vt))
    : ((_t = t[63]), (vt = t[64])),
    (0, Z.useEffect)(_t, vt));
  let yt;
  t[65] === E
    ? (yt = t[66])
    : ((yt = () => {
        pe(E);
      }),
      (t[65] = E),
      (t[66] = yt));
  let bt = ft && !T && me,
    xt;
  t[67] === F
    ? (xt = t[68])
    : ((xt = (0, Q.jsx)(`div`, { ref: F, "aria-hidden": !0, className: `hidden` })),
      (t[67] = F),
      (t[68] = xt));
  let St;
  t[69] === De
    ? (St = t[70])
    : ((St = (0, Q.jsx)(`div`, { ref: De, "aria-hidden": !0, className: `hidden` })),
      (t[69] = De),
      (t[70] = St));
  let Ct;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (0, Q.jsx)(`style`, { children: En })), (t[71] = Ct))
    : (Ct = t[71]);
  let wt;
  t[72] !== L ||
  t[73] !== w ||
  t[74] !== N.hasRedlines ||
  t[75] !== le ||
  t[76] !== it ||
  t[77] !== d ||
  t[78] !== m ||
  t[79] !== re ||
  t[80] !== g ||
  t[81] !== R ||
  t[82] !== de ||
  t[83] !== ft ||
  t[84] !== st ||
  t[85] !== _ ||
  t[86] !== y ||
  t[87] !== b ||
  t[88] !== E ||
  t[89] !== He ||
  t[90] !== H ||
  t[91] !== ut ||
  t[92] !== D ||
  t[93] !== z ||
  t[94] !== S ||
  t[95] !== dt
    ? ((wt = ft
        ? (0, Q.jsx)(oe, {
            hideMetadata: w === `standalone`,
            title: gn(S),
            leftContent: m,
            centerContent: null,
            rightContent: (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                re,
                N.hasRedlines
                  ? (0, Q.jsx)(f, {
                      tooltipContent: D
                        ? (0, Q.jsx)(s, { ...Nn.hideRedlines })
                        : (0, Q.jsx)(s, { ...Nn.showRedlines }),
                      children: (0, Q.jsx)(fe, {
                        "aria-label": de.formatMessage(Nn.showRedlines),
                        "aria-pressed": D,
                        color: D ? `secondary` : `ghost`,
                        size: `toolbar`,
                        uniform: !0,
                        onClick: () => {
                          let e = L.current,
                            t = R.current;
                          (e != null &&
                            t != null &&
                            t.scrollTo({ top: e.scrollTop, left: e.scrollLeft }),
                            _e(),
                            H((e) => e.filter((e) => !Sn(e, b))),
                            He([]),
                            e?.ownerDocument.getSelection()?.removeAllRanges(),
                            O(on));
                        },
                        children: (0, Q.jsx)(te, {}),
                      }),
                    })
                  : null,
                (0, Q.jsx)(M, {
                  triggerTestId: `docx-preview-zoom-trigger`,
                  zoomPercent: dt,
                  zoomOptions: be,
                  onZoomPercentChange: ut,
                  fitOption: { selected: st, onSelect: it },
                }),
                w === "default" && !le
                  ? (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(rt, {
                          analyticsMetadata: {
                            artifactType: `document`,
                            importKind: `docx`,
                            originatingTurn: y,
                            threadId: z,
                          },
                          hostId: g,
                          path: b,
                        }),
                        (0, Q.jsx)(tt, {
                          analyticsContext: {
                            threadId: z,
                            turnId: y?.turnId ?? null,
                            inputMessageId: y?.inputMessageId ?? null,
                            messageId: y?.messageId ?? null,
                          },
                          getAnalyticsContext: () =>
                            et(E, { hostId: g, originatingTurn: y, path: b, threadId: z }),
                          hostId: g,
                          onBeforeOpen: _,
                          path: b,
                          showLabel: !0,
                        }),
                      ],
                    })
                  : null,
                d,
              ],
            }),
          })
        : null),
      (t[72] = L),
      (t[73] = w),
      (t[74] = N.hasRedlines),
      (t[75] = le),
      (t[76] = it),
      (t[77] = d),
      (t[78] = m),
      (t[79] = re),
      (t[80] = g),
      (t[81] = R),
      (t[82] = de),
      (t[83] = ft),
      (t[84] = st),
      (t[85] = _),
      (t[86] = y),
      (t[87] = b),
      (t[88] = E),
      (t[89] = He),
      (t[90] = H),
      (t[91] = ut),
      (t[92] = D),
      (t[93] = z),
      (t[94] = S),
      (t[95] = dt),
      (t[96] = wt))
    : (wt = t[96]);
  let Tt;
  t[97] !== n ||
  t[98] !== B ||
  t[99] !== T ||
  t[100] !== g ||
  t[101] !== ft ||
  t[102] !== b ||
  t[103] !== We ||
  t[104] !== x ||
  t[105] !== He
    ? ((Tt =
        ft && !T && n
          ? (0, Q.jsx)(`div`, {
              className: `pointer-events-none absolute inset-x-0 top-14 z-20 flex justify-center`,
              children: (0, Q.jsx)(at, {
                annotationCount: We.length,
                conversationId: B,
                hostId: g,
                onDismissAnnotations: () => He([]),
                path: b,
                refreshQueryCacheKey: x,
              }),
            })
          : null),
      (t[97] = n),
      (t[98] = B),
      (t[99] = T),
      (t[100] = g),
      (t[101] = ft),
      (t[102] = b),
      (t[103] = We),
      (t[104] = x),
      (t[105] = He),
      (t[106] = Tt))
    : (Tt = t[106]);
  let Et;
  t[107] !== I || t[108] !== ke
    ? ((Et = [I, ke]), (t[107] = I), (t[108] = ke), (t[109] = Et))
    : (Et = t[109]);
  let Dt;
  t[110] !== I ||
  t[111] !== Ee ||
  t[112] !== ft ||
  t[113] !== Ce ||
  t[114] !== P ||
  t[115] !== Et ||
  t[116] !== S
    ? ((Dt = Et.map((e) => {
        let t = e !== I || !ft;
        return (0, Q.jsx)(
          `div`,
          {
            ref: e === P ? Ce : Ee,
            "aria-hidden": t,
            "aria-label": S,
            className: ne(Tn, `absolute inset-0`, t && `invisible`),
            "data-testid": e === I ? `docx-preview-panel` : void 0,
            inert: t,
          },
          e === P ? `redlines` : `clean`,
        );
      })),
      (t[110] = I),
      (t[111] = Ee),
      (t[112] = ft),
      (t[113] = Ce),
      (t[114] = P),
      (t[115] = Et),
      (t[116] = S),
      (t[117] = Dt))
    : (Dt = t[117]);
  let Ot;
  t[118] !== Je ||
  t[119] !== Ye ||
  t[120] !== Qe ||
  t[121] !== $e ||
  t[122] !== nt ||
  t[123] !== ct ||
  t[124] !== lt ||
  t[125] !== Dt
    ? ((Ot = (0, Q.jsx)(`div`, {
        ref: lt,
        className: `relative min-h-0 flex-1`,
        onTouchCancel: Je,
        onTouchEnd: Ye,
        onTouchMove: Qe,
        onTouchStart: $e,
        onWheel: nt,
        style: ct,
        children: Dt,
      })),
      (t[118] = Je),
      (t[119] = Ye),
      (t[120] = Qe),
      (t[121] = $e),
      (t[122] = nt),
      (t[123] = ct),
      (t[124] = lt),
      (t[125] = Dt),
      (t[126] = Ot))
    : (Ot = t[126]);
  let G;
  t[127] !== n ||
  t[128] !== B ||
  t[129] !== T ||
  t[130] !== Ue ||
  t[131] !== u ||
  t[132] !== Je ||
  t[133] !== Ye ||
  t[134] !== Qe ||
  t[135] !== $e ||
  t[136] !== nt ||
  t[137] !== ft ||
  t[138] !== qe ||
  t[139] !== y ||
  t[140] !== je ||
  t[141] !== b ||
  t[142] !== Ge ||
  t[143] !== z ||
  t[144] !== S ||
  t[145] !== Me ||
  t[146] !== dt
    ? ((G =
        ft && !T
          ? je.map((e, t) => {
              let r = t + 1;
              return (0, wn.createPortal)(
                (0, Q.jsx)(Ut, {
                  annotationBatchingEnabled: n,
                  comments: Ue,
                  conversationId: B,
                  getOriginatingTurn: u,
                  isCommentMode: !1,
                  nextCommentNumber: qe,
                  onCommentsChange: Ge,
                  onTouchCancel: Je,
                  onTouchEnd: Ye,
                  onTouchMove: Qe,
                  onTouchStart: $e,
                  onWheel: nt,
                  originatingTurn: y,
                  pageCount: Me,
                  pageNumber: r,
                  pageSize: xn(e, dt),
                  path: b,
                  threadId: z,
                  title: S,
                  zoomScale: dt / 100,
                }),
                e,
                `${b}:${r}:browse`,
              );
            })
          : null),
      (t[127] = n),
      (t[128] = B),
      (t[129] = T),
      (t[130] = Ue),
      (t[131] = u),
      (t[132] = Je),
      (t[133] = Ye),
      (t[134] = Qe),
      (t[135] = $e),
      (t[136] = nt),
      (t[137] = ft),
      (t[138] = qe),
      (t[139] = y),
      (t[140] = je),
      (t[141] = b),
      (t[142] = Ge),
      (t[143] = z),
      (t[144] = S),
      (t[145] = Me),
      (t[146] = dt),
      (t[147] = G))
    : (G = t[147]);
  let K;
  t[148] === Ae ? (K = t[149]) : ((K = ot(Ae)), (t[148] = Ae), (t[149] = K));
  let q;
  t[150] !== xt ||
  t[151] !== St ||
  t[152] !== wt ||
  t[153] !== Tt ||
  t[154] !== Ot ||
  t[155] !== G ||
  t[156] !== K
    ? ((q = (0, Q.jsxs)(`section`, {
        className: `relative flex h-full min-h-0 flex-col bg-surface-secondary`,
        children: [xt, St, Ct, wt, Tt, Ot, G, K],
      })),
      (t[150] = xt),
      (t[151] = St),
      (t[152] = wt),
      (t[153] = Tt),
      (t[154] = Ot),
      (t[155] = G),
      (t[156] = K),
      (t[157] = q))
    : (q = t[157]);
  let kt;
  return (
    t[158] !== yt || t[159] !== bt || t[160] !== q
      ? ((kt = (0, Q.jsx)(W, {
          contentSelector: `[data-testid='docx-preview-panel']`,
          message: Xe.document,
          onDismiss: yt,
          open: bt,
          children: q,
        })),
        (t[158] = yt),
        (t[159] = bt),
        (t[160] = q),
        (t[161] = kt))
      : (kt = t[161]),
    kt
  );
}
function on(e) {
  return !e;
}
function sn(e) {
  let t = (0, Cn.c)(21),
    {
      bytes: n,
      enabled: r,
      onImportError: i,
      onPagesRendered: a,
      renderer: o,
      renderChanges: s,
    } = e,
    c = r === void 0 || r,
    l = (0, Z.useRef)(null),
    u = (0, Z.useRef)(null),
    d = (0, Z.useRef)(0),
    f = (0, Z.useRef)(!1),
    [p, m] = (0, Z.useState)(o == null ? `error` : `loading`),
    ee;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((ee = []), (t[0] = ee)) : (ee = t[0]);
  let [h, te] = (0, Z.useState)(ee),
    [ne, re] = (0, Z.useState)(!1),
    [g, _] = (0, Z.useState)(0),
    v;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => {
        let e = l.current,
          t = u.current;
        e == null || t == null || (hn({ bodyContainer: e, styleContainer: t }), te([]), _(0));
      }),
      (t[1] = v))
    : (v = t[1]);
  let ie = v,
    y;
  t[2] !== n || t[3] !== c || t[4] !== i || t[5] !== a || t[6] !== s || t[7] !== o
    ? ((y = () => {
        let e = l.current,
          t = u.current;
        if (!c || e == null || t == null || f.current) return;
        if (((f.current = !0), ie(), o == null)) {
          (m(`error`), i?.());
          return;
        }
        let r = d.current + 1;
        ((d.current = r),
          m(`loading`),
          ln({ bytes: n, bodyContainer: e, renderer: o, renderChanges: s, styleContainer: t }).then(
            (n) => {
              if (d.current !== r) return;
              if (n == null) {
                (hn({ bodyContainer: e, styleContainer: t }), m(`error`), i?.());
                return;
              }
              let o = vn(e);
              (re(n), te(o), _(Math.max(o.length, 1)), m(`ready`), (s || !n) && a(e));
            },
          ));
      }),
      (t[2] = n),
      (t[3] = c),
      (t[4] = i),
      (t[5] = a),
      (t[6] = s),
      (t[7] = o),
      (t[8] = y))
    : (y = t[8]);
  let b = y,
    ae;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = () => {
        ((d.current += 1), (f.current = !1), ie());
      }),
      (t[9] = ae))
    : (ae = t[9]);
  let oe = ae,
    x;
  t[10] === b
    ? (x = t[11])
    : ((x = (e) => {
        if (e == null) {
          (oe(), (l.current = null));
          return;
        }
        ((l.current = e), b());
      }),
      (t[10] = b),
      (t[11] = x));
  let S = x,
    C;
  t[12] === b
    ? (C = t[13])
    : ((C = (e) => {
        if (e == null) {
          (oe(), (u.current = null));
          return;
        }
        ((u.current = e), b());
      }),
      (t[12] = b),
      (t[13] = C));
  let w = C,
    T;
  return (
    t[14] !== ne || t[15] !== p || t[16] !== h || t[17] !== S || t[18] !== w || t[19] !== g
      ? ((T = {
          bodyContainerElementRef: l,
          bodyContainerRef: S,
          hasRedlines: ne,
          loadState: p,
          pageElements: h,
          styleContainerRef: w,
          totalPages: g,
        }),
        (t[14] = ne),
        (t[15] = p),
        (t[16] = h),
        (t[17] = S),
        (t[18] = w),
        (t[19] = g),
        (t[20] = T))
      : (T = t[20]),
    T
  );
}
function cn(e) {
  let t = (0, Z.useRef)(null),
    [n, r] = (0, Z.useState)(null),
    [i, a] = (0, Z.useState)({ kind: `fit-width` }),
    o =
      i.kind === `fit-width`
        ? (_n({ bodyContainer: e.current, bodyContainerWidth: n, zoomPercent: Dn }) ?? Dn)
        : i.zoomPercent,
    s = me((t) => {
      let n = Math.floor(e.current?.clientWidth || t.contentRect.width);
      r((e) => (e === n ? e : n));
    }),
    c = () => {
      t.current = null;
    };
  return {
    fitToWidth: () => {
      let t = i.kind === `fit-width` ? null : bn(e.current);
      _n({ bodyContainer: e.current, bodyContainerWidth: n, zoomPercent: o }) != null &&
        (a({ kind: `fit-width` }),
        t != null &&
          window.requestAnimationFrame(() => {
            t.scrollIntoView({ block: `center`, inline: `center` });
          }));
    },
    handleTouchCancel: c,
    handleTouchEnd: c,
    handleTouchMove: (e) => {
      let n = t.current;
      if (e.touches.length !== 2 || n == null) return;
      e.preventDefault();
      let r = k(
        e.touches[0].clientX,
        e.touches[0].clientY,
        e.touches[1].clientX,
        e.touches[1].clientY,
      );
      r <= 0 ||
        n.distance <= 0 ||
        a({
          kind: `percentage`,
          zoomPercent: T({
            initialDistance: n.distance,
            initialZoomPercent: n.zoomPercent,
            nextDistance: r,
          }),
        });
    },
    handleTouchStart: (e) => {
      if (e.touches.length !== 2) {
        c();
        return;
      }
      (e.preventDefault(),
        (t.current = {
          distance: k(
            e.touches[0].clientX,
            e.touches[0].clientY,
            e.touches[1].clientX,
            e.touches[1].clientY,
          ),
          zoomPercent: o,
        }));
    },
    handleWheel: (e) => {
      e.ctrlKey &&
        (e.preventDefault(),
        a((t) => ({
          kind: `percentage`,
          zoomPercent: ge(t.kind === `percentage` ? t.zoomPercent : o, e.deltaY),
        })));
    },
    isZoomToFitSelected: i.kind === `fit-width`,
    previewStyle: { "--codex-docx-preview-zoom": `${o / 100}` },
    resizeRef: s,
    setZoomPercent: (e) => {
      a({ kind: `percentage`, zoomPercent: S(e) });
    },
    zoomPercent: o,
  };
}
async function ln({
  bytes: e,
  bodyContainer: t,
  renderer: n,
  renderChanges: r,
  styleContainer: i,
}) {
  try {
    let a = { ...An, renderChanges: r },
      o = await n.parseAsync(e, a);
    if (un(o)) return null;
    let s = $t(o);
    return (await n.renderDocument(o, t, i, a), mn(t), s);
  } catch {
    return null;
  }
}
function un(e) {
  return (
    !pn(e) || !Array.isArray(e.parts) || e.parts.some((e) => !pn(e) || jn.some((t) => dn(e[t])))
  );
}
function dn(e) {
  return Array.isArray(e)
    ? e.some(dn)
    : pn(e)
      ? e.type === `symbol`
        ? !fn(e.char)
        : dn(e.children)
      : !1;
}
function fn(e) {
  if (typeof e != `string` || !/^[\da-f]{1,6}$/i.test(e)) return !1;
  let t = Number.parseInt(e, 16);
  return t <= 1114111 && (t < 55296 || t > 57343);
}
function pn(e) {
  return typeof e == `object` && !!e;
}
function mn(e) {
  for (let t of e.querySelectorAll(`a[href]`)) {
    let e = t.getAttribute(`href`);
    if (e != null) {
      try {
        let t = new URL(e, window.location.href).protocol;
        if (t === `http:` || t === `https:`) continue;
      } catch {}
      t.removeAttribute(`href`);
    }
  }
}
function hn({ bodyContainer: e, styleContainer: t }) {
  (e.replaceChildren(), t.replaceChildren());
}
function gn(e) {
  return e.replace(/\.docx$/i, ``);
}
function _n({ bodyContainer: e, bodyContainerWidth: t, zoomPercent: n }) {
  if (e == null) return null;
  let r = e.querySelector(kn);
  if (r == null) return null;
  let i = r.parentElement ?? e,
    a = window.getComputedStyle(i),
    o = Number.parseFloat(a.paddingLeft) + Number.parseFloat(a.paddingRight),
    s = Math.max(1, (e.clientWidth || t || i.clientWidth) - (Number.isFinite(o) ? o : 0)),
    c = Number.parseFloat(window.getComputedStyle(r).width),
    l = c > 0 ? c : r.getBoundingClientRect().width / Math.max(n / 100, 2 ** -52);
  return !Number.isFinite(l) || l <= 0 ? null : S(Math.round((s / l) * 100));
}
function vn(e) {
  return Array.from(e.querySelectorAll(kn));
}
function yn(e, t, n, r) {
  if (!Number.isInteger(t) || t < 1) return !1;
  let i = vn(e)[t - 1];
  if (i == null) return !1;
  n.current != null && (window.cancelAnimationFrame(n.current), (n.current = null));
  let a = On,
    o = () => {
      let t = e.getBoundingClientRect(),
        s = i.getBoundingClientRect(),
        c = e.scrollTop + (s.top - t.top) / Math.max(r, 2 ** -52);
      if ((e.scrollTo({ top: c }), --a, a > 0)) {
        n.current = window.requestAnimationFrame(o);
        return;
      }
      n.current = null;
    };
  return ((n.current = window.requestAnimationFrame(o)), !0);
}
function bn(e) {
  if (e == null) return null;
  let t = vn(e);
  if (t.length === 0) return null;
  let n = e.getBoundingClientRect(),
    r = n.top + n.height / 2,
    i = t[0],
    a = 1 / 0;
  for (let e of t) {
    let t = e.getBoundingClientRect(),
      n = t.top + t.height / 2,
      o = Math.abs(n - r);
    o < a && ((i = e), (a = o));
  }
  return i;
}
function xn(e, t) {
  let n = window.getComputedStyle(e),
    r = Number.parseFloat(n.width),
    i = Number.parseFloat(n.height),
    a = e.getBoundingClientRect(),
    o = Math.max(t / 100, 2 ** -52);
  return {
    height: Number.isFinite(i) && i > 0 ? i : a.height / o,
    width: Number.isFinite(r) && r > 0 ? r : a.width / o,
  };
}
function Sn(e, t) {
  return (
    c(e) &&
    e.localArtifactAnnotationContext?.artifactKind === `document` &&
    e.localArtifactAnnotationContext.path === t
  );
}
var Cn, Z, wn, Q, $, Tn, En, Dn, On, kn, An, jn, Mn, Nn;
e(() => {
  ((Cn = D()),
    F(),
    m(),
    o(),
    (Z = t(a(), 1)),
    (wn = t(j(), 1)),
    re(),
    b(),
    I(),
    i(),
    v(),
    d(),
    n(),
    ye(),
    N(),
    H(),
    it(),
    xe(),
    Qe(),
    Je(),
    $e(),
    nt(),
    st(),
    E(),
    Qt(),
    rn(),
    Ye(),
    w(),
    (Q = de()),
    y(),
    ($ = `codex-docx-preview`),
    (Tn = `h-full min-h-0 overflow-auto bg-surface-secondary overscroll-contain`),
    (En = `
  .${$}-wrapper {
    min-height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.875rem;
    padding: 1.5rem 1.5rem ${Ne};
    background: var(--color-surface-secondary) !important;
  }

  .${$}-wrapper > section.${$} {
    margin: 0 !important;
    border: 1px solid var(--color-border);
    background: white !important;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    transform-origin: top center;
    border-radius: 0;
    zoom: var(--codex-docx-preview-zoom, 1);
    position: relative;
    overflow: hidden;
  }

  /* Preserve document text colors instead of the app's dark-mode selection foreground. */
  .${$}::selection,
  .${$} ::selection {
    color: currentColor;
  }

  .${$} ins {
    background: var(--color-codex-diff-added);
    text-decoration: underline;
  }

  .${$} del {
    background: var(--color-codex-diff-deleted);
    text-decoration: line-through;
  }

  :root:where(
    [data-codex-window-type="browser"],
    [data-codex-window-type="chrome-extension"],
    [data-codex-window-type="electron"]
  ) .${$}-wrapper > section.${$} {
    border-color: transparent;
    box-shadow: var(--elevation-prominent);
  }

  .${$} [data-paged-annotation-ask-for-edit="true"],
  .${$} [data-paged-annotation-ask-for-edit="true"] * {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif !important;
    font-size: 12px !important;
    letter-spacing: -0.3px !important;
    line-height: 18px !important;
    white-space: nowrap !important;
  }

  .${$} [data-paged-annotation-ask-for-edit-label="true"] {
    font-weight: 400 !important;
  }

  .${$} [data-paged-annotation-ask-for-edit-shortcut="true"] {
    font-weight: 500 !important;
  }
`),
    (Dn = 75),
    (On = 12),
    (kn = `section.${$}`),
    (An = { className: $, renderAltChunks: !1, useBase64URL: !0 }),
    (jn = [`body`, `rootElement`, `notes`, `comments`]),
    (Mn = le(
      () =>
        import(`./docx-preview-ef5f124f273f.js`).then(
          (e) => e,
          () => null,
        ),
      __vite__mapDeps([0, 1]),
      import.meta.url,
    )),
    (Nn = P({
      showRedlines: {
        id: `artifactTab.docx.showRedlines`,
        defaultMessage: `Show redlines`,
        description: `Tooltip and accessible label for toggling tracked insertions and deletions in a Word document preview`,
      },
      hideRedlines: {
        id: `artifactTab.docx.hideRedlines`,
        defaultMessage: `Hide redlines`,
        description: `Tooltip for hiding tracked insertions and deletions to show the clean version of a Word document preview`,
      },
    })));
})();
export { an as DocxPreviewPanel };
//# sourceMappingURL=docx-preview-panel-7d038fc9f715.js.map
