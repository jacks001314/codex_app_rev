const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./docx-preview-8513c2dacad2.js", "./rolldown-runtime-2d059c5e81f4.js"]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  BH as n,
  CS as r,
  Cot as i,
  Cz as a,
  EPt as o,
  FD as s,
  IDt as c,
  Ixt as l,
  JS as u,
  ND as d,
  Pxt as f,
  Qht as p,
  TJ as m,
  TLt as h,
  Tz as ee,
  VDt as te,
  Vxt as ne,
  _Mt as g,
  bz as _,
  cz as re,
  egt as v,
  fPt as ie,
  gMt as ae,
  gPt as y,
  hPt as b,
  hot as oe,
  jDt as x,
  lot as S,
  oE as se,
  pIt as C,
  pLt as w,
  pPt as T,
  rst as E,
  sz as ce,
  tE as le,
  vzt as D,
  wot as ue,
  xMt as de,
  xz as O,
  yMt as k,
  yzt as A,
  zxt as fe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $dr as j,
  CTt as M,
  Cwr as pe,
  ETt as me,
  Eb as he,
  Fb as N,
  Fwt as P,
  Gy as ge,
  Iwt as _e,
  Lb as ve,
  Lwt as ye,
  OTr as be,
  Rb as xe,
  _an as F,
  afr as I,
  bTt as Se,
  cfr as Ce,
  eDr as we,
  gan as Te,
  gwr as Ee,
  jTr as De,
  jwt as Oe,
  nDr as ke,
  xwr as Ae,
  yan as je,
} from "./app-initial-5851df3f6cb1.js";
import {
  $u as L,
  Bu as Me,
  Ku as Ne,
  Mu as Pe,
  Nu as Fe,
  Qu as R,
  Ru as Ie,
  Vu as z,
  Xu as Le,
  ju as Re,
  qu as ze,
  zu as Be,
} from "./app-primary-fe8a450b3b04.js";
import { a as Ve, t as He } from "./PopcornManualEditHeaderControls-e0458d509e7c.js";
import {
  c as Ue,
  i as We,
  l as Ge,
  n as Ke,
  o as B,
  s as qe,
  u as Je,
} from "./artifact-annotation-batch-controls-58c22049fec2.js";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./use-annotation-mode-exit-4d0f0fd2e6a2.js";
import { n as $e, t as et } from "./annotation-mode-icon-c9f59d42793c.js";
import { n as tt, t as nt } from "./annotation-mode-analytics-883da7ddba89.js";
import { n as rt, t as it } from "./layout-7a4e7177e626.js";
import { r as at } from "./artifact-accessories-fe3be839fff5.js";
import { o as ot, r as st } from "./artifact-annotation-comment-1c0552ac1d7a.js";
import {
  i as ct,
  n as lt,
  r as ut,
  t as dt,
} from "./presentation-annotation-cursor-coachmark-56b5e7213fcd.js";
import { n as ft, t as pt } from "./menu-items-b78a5ea99a11.js";
import { n as mt, t as ht } from "./header-b4e8c147ec9e.js";
import { n as gt, t as _t } from "./artifact-originating-turn-4517ac8fac03.js";
import { n as vt, r as yt, t as bt } from "./artifact-preview-header-b624a4e82866.js";
import { n as xt, t as St } from "./artifact-preview-status-c9c48d8baae3.js";
import { a as Ct, i as wt, n as Tt, o as Et, r as Dt } from "./artifact-preview-zoom-be9e5386c42a.js";
import {
  a as Ot,
  c as V,
  i as kt,
  l as At,
  n as jt,
  r as Mt,
  s as Nt,
  t as Pt,
} from "./paged-thumbnail-rail-layout-6efffdc811e2.js";
import { n as Ft, t as It } from "./annotation-comment-editor-card-957f5525f8bc.js";
function Lt({
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
    l = e.kind === `region` ? (e.selectionKind == null ? R(e.rect) : Me(e)) : e.point;
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
function Rt({ anchor: e, pageCount: t, pageNumber: n, pageSize: r }) {
  return e.kind === `region`
    ? e.selectionKind == null
      ? {
          target: {
            type: `document-page-region`,
            anchorPoint: R(e.rect),
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
            anchorPoint: Me(e),
            pageCount: t,
            pageNumber: n,
            pageSize: r,
            rect: e.rect,
            selectionRects: e.selectionRects,
            selectedText: e.selectedText,
            nearbyText: e.nearbyText,
          },
        }
    : { target: { type: `document-page-point`, pageCount: t, pageNumber: n, pageSize: r, point: e.point } };
}
function zt(e, t) {
  return e.kind === `region` && e.selectionKind != null
    ? `Page ${t} ${e.selectionKind}`
    : e.kind === `region`
      ? `Page ${t} region`
      : `Page ${t} point`;
}
function Bt(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-point` ||
    t?.type === `document-page-region` ||
    t?.type === `document-element-selection`
    ? t.pageNumber
    : null;
}
function H(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-point` ||
    t?.type === `document-page-region` ||
    t?.type === `document-element-selection`
    ? t.pageSize
    : null;
}
function Vt(e) {
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
function Ht(e) {
  return e.content.flatMap((e) => (e.content_type === `text` ? [e.text] : [])).join(`
`);
}
function U(e) {
  return [e.position.path, e.position.line, e.localArtifactAnnotationContext?.label ?? ``].join(`:`);
}
function Ut() {
  return (Ut = e(() => {
    (z(), L());
  }))();
}
function Wt(e) {
  let t = (0, Kt.c)(90),
    {
      ref: n,
      annotationBatchingEnabled: r,
      annotationSourcePath: a,
      comments: o,
      conversationId: s,
      editingDisabled: c,
      getOriginatingTurn: u,
      isCommentMode: d,
      nextCommentNumber: f,
      onCommentsChange: m,
      onFocusAnnotation: h,
      onInteractionChange: ne,
      onStarted: g,
      onSendBatch: _,
      requestEditsEnabled: re,
      onTouchCancel: v,
      onTouchEnd: ie,
      onTouchMove: ae,
      onTouchStart: b,
      onWheel: x,
      originatingTurn: S,
      pageCount: se,
      pageNumber: C,
      pageSize: w,
      path: T,
      threadId: E,
      title: ce,
      zoomScale: le,
    } = e,
    D = c !== void 0 && c,
    ue = re !== void 0 && re,
    de = le === void 0 ? 1 : le,
    O = l(i),
    k = te(),
    A = ue || r,
    fe = ee(),
    j;
  if (t[0] !== o || t[1] !== C || t[2] !== T) {
    j = [];
    for (let e of o) {
      if (e.localArtifactAnnotationContext?.path !== T || Bt(e) !== C) continue;
      let t = Vt(e),
        n = H(e);
      t != null &&
        n != null &&
        j.push({ id: U(e), label: e.position.line, body: Ht(e), anchor: t, pageSize: n });
    }
    ((t[0] = o), (t[1] = C), (t[2] = T), (t[3] = j));
  } else j = t[3];
  let M;
  t[4] !== o || t[5] !== m
    ? ((M = (e, t) => {
        m((n) => Nt(n, o, e, t, U));
      }),
      (t[4] = o),
      (t[5] = m),
      (t[6] = M))
    : (M = t[6]);
  let pe = M,
    me = `${s}:${T}:${C}`,
    he;
  t[7] !== d || t[8] !== O
    ? ((he = (e) => {
        e && !d && tt(O, { surface: `file_artifact` });
      }),
      (t[7] = d),
      (t[8] = O),
      (t[9] = he))
    : (he = t[9]);
  let N;
  t[10] === k
    ? (N = t[11])
    : ((N = k.formatMessage({
        id: `artifactDocxPreview.addAnnotation`,
        defaultMessage: `Add document annotation`,
        description: `Accessible label for the overlay that adds a DOCX document annotation`,
      })),
      (t[10] = k),
      (t[11] = N));
  let ge;
  t[12] !== k || t[13] !== ue
    ? ((ge = ue
        ? k.formatMessage({
            id: `artifactViewer.requestEdits`,
            defaultMessage: `Request edits`,
            description: `Button label for requesting edits to an artifact`,
          })
        : k.formatMessage({
            id: `artifactDocxPreview.askForChange`,
            defaultMessage: `Ask for change`,
            description: `Button label for starting a contextual DOCX annotation from the selected document element`,
          })),
      (t[12] = k),
      (t[13] = ue),
      (t[14] = ge))
    : (ge = t[14]);
  let ve;
  t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((ve = Fe()), (t[15] = ve)) : (ve = t[15]);
  let be;
  t[16] === k
    ? (be = t[17])
    : ((be = (e) =>
        k.formatMessage(
          {
            id: `artifactDocxPreview.commentMarkerLabel`,
            defaultMessage: `Document annotation {commentNumber}`,
            description: `Accessible label for a placed DOCX annotation marker`,
          },
          { commentNumber: e },
        )),
      (t[16] = k),
      (t[17] = be));
  let xe;
  t[18] !== A || t[19] !== s || t[20] !== k || t[21] !== C || t[22] !== T || t[23] !== j || t[24] !== ce
    ? ((xe = (e) => {
        let t = e.target.mode === `edit` ? e.target.annotationId : null,
          n = t == null ? e.body : (j.find((e) => e.id === t)?.body ?? e.body),
          r = Lt({
            anchor: e.anchor,
            body: n,
            conversationId: s,
            pageNumber: C,
            pageSize: e.pageSize,
            path: T,
            target: e.target.mode === `edit` ? { mode: `edit`, commentId: e.target.annotationId } : e.target,
            title: ce,
          });
        return (0, qt.jsx)(
          It,
          {
            allowImageAttachments: !1,
            allowDirectSubmitOnEdit: A,
            createSubmitButtonSize: `formatToolbar`,
            defaultCreateSubmitMode: A ? `saved` : `direct`,
            inputAriaLabel: k.formatMessage({
              id: `artifactDocxPreview.commentInput`,
              defaultMessage: `Document annotation comment`,
              description: `Aria label for the DOCX annotation comment input`,
            }),
            keyboardEventTarget: typeof window > `u` ? void 0 : window,
            placeholder: k.formatMessage({
              id: `artifactAnnotationComment.placeholder`,
              defaultMessage: `Describe a change or ask a question`,
              description: `Placeholder text for an artifact annotation comment editor`,
            }),
            session: { ...r, draftBody: e.body },
            windowHeight: 208,
            onCancel: e.onCancel,
            onDelete: e.onDelete,
            onEscape: e.onEscape,
            onBodyChange: e.onBodyChange,
            onDictationBusyChange: e.onDictationBusyChange,
            onLightDismissibilityChange: Jt,
            onMounted: Jt,
            onDirectSubmit: e.onDirectSubmit,
            onSubmit: e.onSubmit,
          },
          r.sessionId,
        );
      }),
      (t[18] = A),
      (t[19] = s),
      (t[20] = k),
      (t[21] = C),
      (t[22] = T),
      (t[23] = j),
      (t[24] = ce),
      (t[25] = xe))
    : (xe = t[25]);
  let F;
  t[26] !== a ||
  t[27] !== A ||
  t[28] !== s ||
  t[29] !== u ||
  t[30] !== d ||
  t[31] !== f ||
  t[32] !== m ||
  t[33] !== _ ||
  t[34] !== S ||
  t[35] !== se ||
  t[36] !== C ||
  t[37] !== T ||
  t[38] !== O ||
  t[39] !== E ||
  t[40] !== ce
    ? ((F = (e) => {
        let t = Rt({ anchor: e.anchor, pageCount: se, pageNumber: C, pageSize: e.pageSize }),
          n = p({
            artifactKind: `document`,
            body: e.body,
            label: zt(e.anchor, C),
            line: f,
            metadata: t,
            path: T,
            sourcePath: a,
            title: ce,
          });
        return (
          ye(
            O,
            {
              artifactType: `document`,
              importKind: `docx`,
              originatingTurn: u == null ? S : u(),
              threadId: E,
            },
            {
              annotationModeEnabled: d,
              annotationTargetKind: t.target.type,
              submitMode: e.submitMode,
              submitSource: e.submitSource,
            },
          ),
          e.submitMode === `direct` && !A
            ? y.dispatchHostMessage({
                type: `artifact-direct-comment`,
                body: e.body,
                comment: n,
                conversationId: s,
                sessionId: crypto.randomUUID(),
              })
            : (m((e) => [...e, n]), e.submitMode === `direct` && _?.()),
          `submitted`
        );
      }),
      (t[26] = a),
      (t[27] = A),
      (t[28] = s),
      (t[29] = u),
      (t[30] = d),
      (t[31] = f),
      (t[32] = m),
      (t[33] = _),
      (t[34] = S),
      (t[35] = se),
      (t[36] = C),
      (t[37] = T),
      (t[38] = O),
      (t[39] = E),
      (t[40] = ce),
      (t[41] = F))
    : (F = t[41]);
  let I;
  t[42] !== k || t[43] !== O
    ? ((I = () => {
        O.get(oe).danger(
          k.formatMessage({
            id: `artifactAnnotation.saveFailed`,
            defaultMessage: `Could not save annotation`,
            description: `Error when an artifact annotation cannot be saved or submitted`,
          }),
          { errorAnalytics: { toastId: `artifactAnnotation.saveFailed` } },
        );
      }),
      (t[42] = k),
      (t[43] = O),
      (t[44] = I))
    : (I = t[44]);
  let Se;
  t[45] !== A || t[46] !== pe || t[47] !== _
    ? ((Se = A
        ? (e, t) => {
            (pe(e, t), _?.());
          }
        : void 0),
      (t[45] = A),
      (t[46] = pe),
      (t[47] = _),
      (t[48] = Se))
    : (Se = t[48]);
  let Ce;
  t[49] === m
    ? (Ce = t[50])
    : ((Ce = (e) => {
        m((t) => t.filter((t) => U(t) !== e));
      }),
      (t[49] = m),
      (t[50] = Ce));
  let we;
  t[51] !== u || t[52] !== d || t[53] !== g || t[54] !== S || t[55] !== O || t[56] !== E
    ? ((we = (e) => {
        (_e(
          O,
          { artifactType: `document`, importKind: `docx`, originatingTurn: u == null ? S : u(), threadId: E },
          { annotationModeEnabled: d, startSource: e },
        ),
          g?.());
      }),
      (t[51] = u),
      (t[52] = d),
      (t[53] = g),
      (t[54] = S),
      (t[55] = O),
      (t[56] = E),
      (t[57] = we))
    : (we = t[57]);
  let Te;
  t[58] !== O || t[59] !== E
    ? ((Te = () => {
        P(O, { artifactType: `document`, importKind: `docx`, threadId: E });
      }),
      (t[58] = O),
      (t[59] = E),
      (t[60] = Te))
    : (Te = t[60]);
  let Ee;
  return (
    t[61] !== pe ||
    t[62] !== D ||
    t[63] !== d ||
    t[64] !== f ||
    t[65] !== h ||
    t[66] !== ne ||
    t[67] !== v ||
    t[68] !== ie ||
    t[69] !== ae ||
    t[70] !== b ||
    t[71] !== x ||
    t[72] !== w ||
    t[73] !== j ||
    t[74] !== n ||
    t[75] !== be ||
    t[76] !== xe ||
    t[77] !== F ||
    t[78] !== I ||
    t[79] !== Se ||
    t[80] !== Ce ||
    t[81] !== we ||
    t[82] !== Te ||
    t[83] !== me ||
    t[84] !== he ||
    t[85] !== N ||
    t[86] !== ge ||
    t[87] !== fe ||
    t[88] !== de
      ? ((Ee = (0, qt.jsx)(
          Ie,
          {
            ref: n,
            theme: `codex`,
            records: j,
            onFocusAnnotation: h,
            onInteractionChange: ne,
            onDraftActiveChange: he,
            pageSize: w,
            isAnnotationMode: d,
            editingDisabled: D,
            nextAnnotationNumber: f,
            zoomScale: de,
            windowZoom: fe,
            onTouchCancel: v,
            onTouchEnd: ie,
            onTouchMove: ae,
            onTouchStart: b,
            onWheel: x,
            addAnnotationLabel: N,
            askForEditLabel: ge,
            shortcutLabel: ve,
            getAnnotationMarkerLabel: be,
            renderPreviewBody: Gt,
            renderEditor: xe,
            onCreate: F,
            onCreateError: I,
            onEdit: pe,
            onEditDirectSubmit: Se,
            onDelete: Ce,
            onStarted: we,
            onPillShown: Te,
          },
          me,
        )),
        (t[61] = pe),
        (t[62] = D),
        (t[63] = d),
        (t[64] = f),
        (t[65] = h),
        (t[66] = ne),
        (t[67] = v),
        (t[68] = ie),
        (t[69] = ae),
        (t[70] = b),
        (t[71] = x),
        (t[72] = w),
        (t[73] = j),
        (t[74] = n),
        (t[75] = be),
        (t[76] = xe),
        (t[77] = F),
        (t[78] = I),
        (t[79] = Se),
        (t[80] = Ce),
        (t[81] = we),
        (t[82] = Te),
        (t[83] = me),
        (t[84] = he),
        (t[85] = N),
        (t[86] = ge),
        (t[87] = fe),
        (t[88] = de),
        (t[89] = Ee))
      : (Ee = t[89]),
    Ee
  );
}
function Gt(e) {
  return (0, qt.jsx)(Re, { body: e });
}
var Kt, qt, Jt;
function W() {
  return (W = e(() => {
    ((Kt = D()),
      Be(),
      Le(),
      f(),
      E(),
      x(),
      a(),
      Ft(),
      nt(),
      S(),
      b(),
      ue(),
      Oe(),
      Ut(),
      Pe(),
      (qt = de()),
      (Jt = () => {}));
  }))();
}
function Yt(e) {
  let t = (0, G.c)(4),
    { pageElement: n } = e,
    r = (0, Zt.useRef)(null),
    i,
    a;
  (t[0] === n
    ? ((i = t[1]), (a = t[2]))
    : ((i = () => {
        let e = r.current;
        if (e == null) return;
        let t = null,
          i = !1,
          a = () => {
            (t?.disconnect(), (t = null), (i = !1), (e.style.height = ``), e.replaceChildren());
          },
          o = () => {
            if (i || e.clientWidth <= 0) return;
            let r = n.cloneNode(!0);
            if (!(r instanceof HTMLElement)) return;
            ((i = !0), r.removeAttribute(`id`));
            for (let e of r.querySelectorAll(`[id]`)) e.removeAttribute(`id`);
            for (let e of r.querySelectorAll(`.popcorn-paged-annotation-layer`)) e.remove();
            for (let e of r.querySelectorAll(`button, input, select, textarea, [contenteditable]`))
              e.remove();
            for (let e of r.querySelectorAll(`a`)) (e.removeAttribute(`href`), e.removeAttribute(`tabindex`));
            (r.classList.add(`pointer-events-none`, `absolute`, `top-0`, `left-0`, `select-none`),
              (r.ariaHidden = `true`),
              (r.inert = !0),
              e.replaceChildren(r));
            let a = -1,
              o = -1,
              s = -1,
              c = () => {
                let t = e.clientWidth,
                  i = n.offsetWidth,
                  c = n.offsetHeight;
                if (t <= 0 || i <= 0 || c <= 0 || (t === a && i === o && c === s)) return;
                ((a = t), (o = i), (s = c));
                let l = t / i;
                ((e.style.height = `${c * l}px`),
                  (r.style.width = `${i}px`),
                  (r.style.height = `${c}px`),
                  (r.style.transform = `scale(${l})`),
                  (r.style.transformOrigin = `top left`));
              };
            (c(), typeof ResizeObserver < `u` && ((t = new ResizeObserver(c)), t.observe(e), t.observe(n)));
          };
        if (typeof IntersectionObserver > `u`) return (o(), () => t?.disconnect());
        let s = new IntersectionObserver(
          (e) => {
            e.some(Xt) ? o() : a();
          },
          { rootMargin: `160px 0px` },
        );
        return (
          s.observe(e),
          () => {
            (s.disconnect(), a());
          }
        );
      }),
      (a = [n]),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a)),
    (0, Zt.useEffect)(i, a));
  let o;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Qt.jsx)(`div`, {
          ref: r,
          className: `relative aspect-3/4 w-full overflow-hidden bg-white`,
        })),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function Xt(e) {
  return e.isIntersecting;
}
var G, Zt, Qt;
function $t() {
  return ($t = e(() => {
    ((G = D()), (Zt = A()), (Qt = de()));
  }))();
}
function en(e) {
  let t = nn.safeParse(e);
  return t.success && t.data.parts.some((e) => tn(e.body) || tn(e.rootElement) || e.notes?.some(tn));
}
function tn(e) {
  return (
    e != null &&
    (e.type === `inserted` || e.type === `deleted` || e.type === `deletedText` || e.children?.some(tn) === !0)
  );
}
var K, nn;
function rn() {
  return (rn = e(() => {
    (o(),
      (K = w({
        type: h(),
        get children() {
          return C(K).optional();
        },
      })),
      (nn = w({ parts: C(w({ body: K.optional(), rootElement: K.optional(), notes: C(K).optional() })) })));
  }))();
}
function an(e) {
  let t = (0, Dn.c)(270),
    {
      annotationBatchingEnabled: r,
      requestEditsEnabled: i,
      annotationHandleRef: a,
      annotationSourcePath: o,
      bytes: s,
      chromeMode: d,
      disableAnnotations: f,
      disableFileActions: p,
      downloadControl: m,
      downloadPending: h,
      fallbackHeader: g,
      fileInfoOwnerId: _,
      fileInfoSource: re,
      getAnnotationOriginatingTurn: v,
      headerPlacement: ie,
      headerRightContent: y,
      headerSupplementalActions: b,
      headerTitleContent: oe,
      headerFavoriteAction: x,
      headerZoomLeadingContent: S,
      environmentId: C,
      hostId: w,
      libraryFile: T,
      onBeforeOpen: E,
      onBatchAction: D,
      onClose: ue,
      onRefresh: de,
      onDownload: k,
      onShare: A,
      onImportError: M,
      onReady: pe,
      originatingTurn: N,
      path: P,
      ref: _e,
      refreshQueryCacheKey: ye,
      renderLayout: xe,
      tabId: F,
      title: I,
      versionHistoryEnabled: we,
    } = e,
    De = i !== void 0 && i,
    Oe = d === void 0 ? `default` : d,
    L = f !== void 0 && f,
    Me = p !== void 0 && p,
    Ne = h !== void 0 && h,
    Pe = ie === void 0 ? `overlay` : ie,
    Fe = we !== void 0 && we,
    R = l(Ee),
    Ie = fe(_ == null ? null : he, _ ?? ``)?.phase === `open` ? 312 : 0,
    z = De || r,
    Le = te(),
    Re = ke(`1292007209`),
    [Be, Ve] = (0, Y.useState)(!0),
    [B, qe] = (0, Y.useState)(!1),
    [Je, Ye] = (0, Y.useState)(un),
    Qe;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = (e, t) => {
        Ye((n) => {
          if (n.has(e) === t) return n;
          let r = new Set(n);
          return (t ? r.add(e) : r.delete(e), r);
        });
      }),
      (t[0] = Qe))
    : (Qe = t[0]);
  let $e = Qe,
    [nt, rt] = (0, Y.useState)(!1),
    at = ne(me),
    ot = (0, Y.use)(In),
    ct = ee(),
    lt = (0, Y.useRef)(null),
    ft = (0, Y.useRef)(null),
    mt = (0, Y.useRef)(jn),
    [gt, yt] = (0, Y.useState)(jn),
    St;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((St = (e) => {
        ((mt.current = e), yt((t) => (t === e ? t : e)));
      }),
      (t[1] = St))
    : (St = t[1]);
  let Ct = St,
    wt;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = () => {
        ft.current != null && (window.cancelAnimationFrame(ft.current), (ft.current = null));
      }),
      (t[2] = wt))
    : (wt = t[2]);
  let Tt = wt,
    Et;
  t[3] !== Ie || t[4] !== pe || t[5] !== ct
    ? ((Et = (e) => {
        let t = yn({
          bodyContainer: e,
          bodyContainerWidth: null,
          endViewportInset: Ie,
          thumbnailRailSafeInset: jt({ isDocked: !1, totalPages: Sn(e).length }),
          zoomPercent: mt.current,
        });
        t != null && Ct(t);
        let n = lt.current;
        (n != null && Cn(e, n, ft, ct) && (lt.current = null), pe?.());
      }),
      (t[3] = Ie),
      (t[4] = pe),
      (t[5] = ct),
      (t[6] = Et))
    : (Et = t[6]);
  let Dt = Et,
    Ot;
  t[7] !== s || t[8] !== ot || t[9] !== Dt || t[10] !== M
    ? ((Ot = { bytes: s, onImportError: M, onPagesRendered: Dt, renderer: ot, renderChanges: !1 }),
      (t[7] = s),
      (t[8] = ot),
      (t[9] = Dt),
      (t[10] = M),
      (t[11] = Ot))
    : (Ot = t[11]);
  let V = dn(Ot),
    Mt;
  t[12] !== s || t[13] !== V.hasRedlines || t[14] !== ot || t[15] !== Dt || t[16] !== M
    ? ((Mt = {
        bytes: s,
        enabled: V.hasRedlines,
        onImportError: M,
        onPagesRendered: Dt,
        renderer: ot,
        renderChanges: !0,
      }),
      (t[12] = s),
      (t[13] = V.hasRedlines),
      (t[14] = ot),
      (t[15] = Dt),
      (t[16] = M),
      (t[17] = Mt))
    : (Mt = t[17]);
  let Nt = dn(Mt),
    { bodyContainerRef: Ft, styleContainerRef: It } = Nt,
    { bodyContainerRef: Lt, styleContainerRef: Rt } = V,
    zt = Be && V.hasRedlines ? Nt : V,
    Bt = zt === Nt ? V : Nt,
    { bodyContainerElementRef: H, loadState: Vt, pageElements: Ht, totalPages: U } = zt,
    Ut = { isDocked: nt, totalPages: U },
    Gt = Pt(Ut),
    Kt = jt(Ut),
    { bodyContainerElementRef: qt } = Bt,
    Jt;
  t[18] === R.value ? (Jt = t[19]) : ((Jt = Ae(R.value)), (t[18] = R.value), (t[19] = Jt));
  let W = Jt,
    Xt;
  t[20] === W ? (Xt = t[21]) : ((Xt = W ?? be({ entrypoint: `home` })), (t[20] = W), (t[21] = Xt));
  let G = Xt,
    Zt = (0, Y.useRef)(z),
    Qt,
    $t;
  (t[22] === z
    ? ((Qt = t[23]), ($t = t[24]))
    : ((Qt = () => {
        Zt.current = z;
      }),
      ($t = [z]),
      (t[22] = z),
      (t[23] = Qt),
      (t[24] = $t)),
    (0, Y.useEffect)(Qt, $t));
  let en = fe(Te, G),
    tn;
  t[25] !== G || t[26] !== R
    ? ((tn = (e) => {
        je(R, G, e);
      }),
      (t[25] = G),
      (t[26] = R),
      (t[27] = tn))
    : (tn = t[27]);
  let K = tn,
    nn;
  t[28] !== G || t[29] !== w || t[30] !== P
    ? ((nn = { conversationId: G, hostId: w, path: P }), (t[28] = G), (t[29] = w), (t[30] = P), (t[31] = nn))
    : (nn = t[31]);
  let rn = fe(j, nn),
    an;
  t[32] !== G || t[33] !== w || t[34] !== P
    ? ((an = { conversationId: G, hostId: w, path: P }), (t[32] = G), (t[33] = w), (t[34] = P), (t[35] = an))
    : (an = t[35]);
  let pn = fe(Ge, an),
    q = De && pn,
    mn;
  t[36] === Je.size
    ? (mn = t[37])
    : ((mn = () => {
        Je.size === 0 && qe(!1);
      }),
      (t[36] = Je.size),
      (t[37] = mn));
  let hn = O(mn),
    gn;
  t[38] !== G || t[39] !== w || t[40] !== P || t[41] !== De || t[42] !== R
    ? ((gn = () => De && R.get(Ge, { conversationId: G, hostId: w, path: P })),
      (t[38] = G),
      (t[39] = w),
      (t[40] = P),
      (t[41] = De),
      (t[42] = R),
      (t[43] = gn))
    : (gn = t[43]);
  let J = O(gn),
    _n;
  t[44] !== G || t[45] !== w || t[46] !== P || t[47] !== R
    ? ((_n = (e) => {
        Ce(R, { conversationId: G, hostId: w, path: P }, e);
      }),
      (t[44] = G),
      (t[45] = w),
      (t[46] = P),
      (t[47] = R),
      (t[48] = _n))
    : (_n = t[48]);
  let bn = _n,
    xn = z ? [...en, ...rn] : en,
    wn;
  t[49] !== z || t[50] !== J || t[51] !== bn || t[52] !== K
    ? ((wn = (e) => {
        if (!J()) {
          if (z) {
            bn(e);
            return;
          }
          K(e);
        }
      }),
      (t[49] = z),
      (t[50] = J),
      (t[51] = bn),
      (t[52] = K),
      (t[53] = wn))
    : (wn = t[53]);
  let Z = wn,
    Mn;
  t[54] === P ? (Mn = t[55]) : ((Mn = (e) => En(e, P)), (t[54] = P), (t[55] = Mn));
  let Pn = Array.from(new Map(xn.filter(Mn).map(ln)).values()),
    Fn;
  t[56] === P ? (Fn = t[57]) : ((Fn = (e) => En(e, P)), (t[56] = P), (t[57] = Fn));
  let Rn = rn.filter(Fn),
    zn = st(Pn),
    {
      fitEndInset: Bn,
      fitToWidth: Vn,
      isZoomToFitSelected: Hn,
      previewStyle: Un,
      resizeRef: Wn,
      setZoomPercent: Gn,
      zoomPercent: Kn,
    } = fn(H, Ie, Kt, gt, Ct),
    Q = Vt === `ready`,
    qn = Q || Fe || T != null || oe != null,
    Jn;
  t[58] !== H || t[59] !== Q || t[60] !== U
    ? ((Jn = { containerRef: H, isPageLayoutReady: Q, pageSelector: Nn, totalPages: U }),
      (t[58] = H),
      (t[59] = Q),
      (t[60] = U),
      (t[61] = Jn))
    : (Jn = t[61]);
  let { currentPage: Yn, goToPage: Xn } = At(Jn),
    Zn = Rn.flatMap(cn),
    Qn;
  t[62] === Xn ? (Qn = t[63]) : ((Qn = (e) => Xn(e, `instant`)), (t[62] = Xn), (t[63] = Qn));
  let $n;
  t[64] !== a || t[65] !== q || t[66] !== Zn || t[67] !== Qn
    ? (($n = { ref: a, editingDisabled: q, annotations: Zn, onNavigateToPage: Qn }),
      (t[64] = a),
      (t[65] = q),
      (t[66] = Zn),
      (t[67] = Qn),
      (t[68] = $n))
    : ($n = t[68]);
  let $ = ze($n),
    er;
  t[69] !== H || t[70] !== ct
    ? ((er = (e) => {
        let t = H.current;
        if (t == null || !Cn(t, e, ft, ct)) {
          lt.current = e;
          return;
        }
        lt.current = null;
      }),
      (t[69] = H),
      (t[70] = ct),
      (t[71] = er))
    : (er = t[71]);
  let tr = er,
    nr,
    rr;
  (t[72] === tr
    ? ((nr = t[73]), (rr = t[74]))
    : ((nr = () => ({ navigateToPage: tr })), (rr = [tr]), (t[72] = tr), (t[73] = nr), (t[74] = rr)),
    (0, Y.useImperativeHandle)(_e, nr, rr));
  let ir, ar;
  (t[75] !== P || t[76] !== K
    ? ((ir = () => () => {
        (Tt(),
          !Zt.current &&
            K((e) => {
              let t = e.filter((e) => !En(e, P));
              return t.length === e.length ? e : t;
            }));
      }),
      (ar = [Tt, P, K]),
      (t[75] = P),
      (t[76] = K),
      (t[77] = ir),
      (t[78] = ar))
    : ((ir = t[77]), (ar = t[78])),
    (0, Y.useEffect)(ir, ar));
  let or;
  t[79] !== _ || t[80] !== re || t[81] !== x || t[82] !== T
    ? ((or = (e) =>
        (0, X.jsx)(pt, { favoriteAction: x, file: T, fileInfoOwnerId: _, fileInfoSource: re, children: e })),
      (t[79] = _),
      (t[80] = re),
      (t[81] = x),
      (t[82] = T),
      (t[83] = or))
    : (or = t[83]);
  let sr = or,
    cr;
  t[84] === T
    ? (cr = t[85])
    : ((cr = T == null ? void 0 : (0, X.jsx)(ve, { libraryFileId: T.libraryFileId })),
      (t[84] = T),
      (t[85] = cr));
  let lr = cr,
    ur;
  t[86] === T
    ? (ur = t[87])
    : ((ur = T == null ? void 0 : (0, X.jsx)(ve, { libraryFileId: T.libraryFileId, variant: `text` })),
      (t[86] = T),
      (t[87] = ur));
  let dr = ur,
    fr = N?.turnId ?? null,
    pr = N?.inputMessageId ?? null,
    mr = N?.messageId ?? null,
    hr;
  t[88] !== fr || t[89] !== pr || t[90] !== mr || t[91] !== W
    ? ((hr = { threadId: W, turnId: fr, inputMessageId: pr, messageId: mr }),
      (t[88] = fr),
      (t[89] = pr),
      (t[90] = mr),
      (t[91] = W),
      (t[92] = hr))
    : (hr = t[92]);
  let gr;
  t[93] !== w || t[94] !== N || t[95] !== P || t[96] !== R || t[97] !== W
    ? ((gr = () => _t(R, { hostId: w, originatingTurn: N, path: P, threadId: W })),
      (t[93] = w),
      (t[94] = N),
      (t[95] = P),
      (t[96] = R),
      (t[97] = W),
      (t[98] = gr))
    : (gr = t[98]);
  let _r;
  t[99] !== N || t[100] !== W
    ? ((_r = { artifactType: `document`, importKind: `docx`, originatingTurn: N, threadId: W }),
      (t[99] = N),
      (t[100] = W),
      (t[101] = _r))
    : (_r = t[101]);
  let vr;
  t[102] === I ? (vr = t[103]) : ((vr = vn(I)), (t[102] = I), (t[103] = vr));
  let yr;
  t[104] !== C ||
  t[105] !== w ||
  t[106] !== lr ||
  t[107] !== E ||
  t[108] !== P ||
  t[109] !== sr ||
  t[110] !== hr ||
  t[111] !== gr ||
  t[112] !== _r ||
  t[113] !== vr ||
  t[114] !== F ||
  t[115] !== dr
    ? ((yr = (0, X.jsx)(vt, {
        tabId: F,
        environmentId: C,
        analyticsContext: hr,
        getAnalyticsContext: gr,
        downloadAnalyticsMetadata: _r,
        hostId: w,
        libraryBreadcrumb: lr,
        tooltipBreadcrumb: dr,
        onBeforeOpen: E,
        path: P,
        renderMenuItems: sr,
        showDownloadAction: !1,
        title: vr,
        variant: `title`,
      })),
      (t[104] = C),
      (t[105] = w),
      (t[106] = lr),
      (t[107] = E),
      (t[108] = P),
      (t[109] = sr),
      (t[110] = hr),
      (t[111] = gr),
      (t[112] = _r),
      (t[113] = vr),
      (t[114] = F),
      (t[115] = dr),
      (t[116] = yr))
    : (yr = t[116]);
  let br = yr,
    xr;
  t[117] !== Oe ||
  t[118] !== Me ||
  t[119] !== C ||
  t[120] !== w ||
  t[121] !== E ||
  t[122] !== k ||
  t[123] !== N ||
  t[124] !== P ||
  t[125] !== R ||
  t[126] !== F ||
  t[127] !== W
    ? ((xr =
        Oe === "default" && !Me
          ? (0, X.jsx)(bt, {
              tabId: F,
              environmentId: C,
              onBeforeOpen: E,
              analyticsContext: {
                threadId: W,
                turnId: N?.turnId ?? null,
                inputMessageId: N?.inputMessageId ?? null,
                messageId: N?.messageId ?? null,
              },
              getAnalyticsContext: () => _t(R, { hostId: w, originatingTurn: N, path: P, threadId: W }),
              analyticsMetadata: {
                artifactType: `document`,
                importKind: `docx`,
                originatingTurn: N,
                threadId: W,
              },
              hostId: w,
              onDownload: k,
              path: P,
            })
          : void 0),
      (t[117] = Oe),
      (t[118] = Me),
      (t[119] = C),
      (t[120] = w),
      (t[121] = E),
      (t[122] = k),
      (t[123] = N),
      (t[124] = P),
      (t[125] = R),
      (t[126] = F),
      (t[127] = W),
      (t[128] = xr))
    : (xr = t[128]);
  let Sr = xr,
    Cr;
  t[129] !== q ||
  t[130] !== H ||
  t[131] !== V.hasRedlines ||
  t[132] !== qt ||
  t[133] !== Le ||
  t[134] !== J ||
  t[135] !== P ||
  t[136] !== bn ||
  t[137] !== K ||
  t[138] !== Be
    ? ((Cr = V.hasRedlines
        ? (0, X.jsx)(ce, {
            tooltipContent: Be
              ? (0, X.jsx)(c, { ...Ln.hideRedlines })
              : (0, X.jsx)(c, { ...Ln.showRedlines }),
            children: (0, X.jsx)(se, {
              "aria-label": Le.formatMessage(Ln.showRedlines),
              "aria-pressed": Be,
              disabled: q,
              uniform: !0,
              onClick: () => {
                if (J()) return;
                let e = H.current,
                  t = qt.current;
                (e != null && t != null && t.scrollTo({ top: e.scrollTop, left: e.scrollLeft }),
                  Tt(),
                  K((e) => e.filter((e) => !En(e, P))),
                  bn([]),
                  e?.ownerDocument.getSelection()?.removeAllRanges(),
                  Ve(sn));
              },
              children: (0, X.jsx)(n, {}),
            }),
          })
        : null),
      (t[129] = q),
      (t[130] = H),
      (t[131] = V.hasRedlines),
      (t[132] = qt),
      (t[133] = Le),
      (t[134] = J),
      (t[135] = P),
      (t[136] = bn),
      (t[137] = K),
      (t[138] = Be),
      (t[139] = Cr))
    : (Cr = t[139]);
  let wr = Cr,
    Tr = B && !q && Je.size === 0,
    Er;
  t[140] !== $ || t[141] !== J
    ? ((Er = () => {
        !J() && $.dismissAnnotationEditor() && qe(!1);
      }),
      (t[140] = $),
      (t[141] = J),
      (t[142] = Er))
    : (Er = t[142]);
  let Dr;
  (t[143] !== Tr || t[144] !== Er
    ? ((Dr = { active: Tr, onExit: Er }), (t[143] = Tr), (t[144] = Er), (t[145] = Dr))
    : (Dr = t[145]),
    Xe(Dr));
  let Or = dt,
    kr = ut,
    Ar;
  t[146] === R
    ? (Ar = t[147])
    : ((Ar = () => {
        Se(R);
      }),
      (t[146] = R),
      (t[147] = Ar));
  let jr = Q && !L && at,
    Mr;
  t[148] === It
    ? (Mr = t[149])
    : ((Mr = (0, X.jsx)(`div`, { ref: It, "aria-hidden": !0, className: `hidden` })),
      (t[148] = It),
      (t[149] = Mr));
  let Nr;
  t[150] === Rt
    ? (Nr = t[151])
    : ((Nr = (0, X.jsx)(`div`, { ref: Rt, "aria-hidden": !0, className: `hidden` })),
      (t[150] = Rt),
      (t[151] = Nr));
  let Pr;
  t[152] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pr = (0, X.jsx)(`style`, { children: An })), (t[152] = Pr))
    : (Pr = t[152]);
  let Fr;
  t[153] !== Je.size ||
  t[154] !== z ||
  t[155] !== B ||
  t[156] !== $ ||
  t[157] !== G ||
  t[158] !== L ||
  t[159] !== w ||
  t[160] !== J ||
  t[161] !== Q ||
  t[162] !== hn ||
  t[163] !== D ||
  t[164] !== de ||
  t[165] !== P ||
  t[166] !== Rn ||
  t[167] !== ye ||
  t[168] !== bn
    ? ((Fr =
        Q && !L && z
          ? (0, X.jsx)(Ze, {
              children: (0, X.jsx)(Ke, {
                annotationCount: Rn.length,
                isAnnotating: B,
                isAnnotationInteractionActive: Je.size > 0,
                conversationId: G,
                hostId: w,
                onBatchAction: D,
                onAnnotationsSubmitted: hn,
                onDismissAnnotations: (e) =>
                  J() || !$.dismissAnnotationEditor(e) ? !1 : (bn([]), qe(!1), !0),
                onNavigate: $.onNavigate,
                onRefresh: de,
                path: P,
                refreshQueryCacheKey: ye,
              }),
            })
          : null),
      (t[153] = Je.size),
      (t[154] = z),
      (t[155] = B),
      (t[156] = $),
      (t[157] = G),
      (t[158] = L),
      (t[159] = w),
      (t[160] = J),
      (t[161] = Q),
      (t[162] = hn),
      (t[163] = D),
      (t[164] = de),
      (t[165] = P),
      (t[166] = Rn),
      (t[167] = ye),
      (t[168] = bn),
      (t[169] = Fr))
    : (Fr = t[169]);
  let Ir;
  t[170] !== Yn || t[171] !== Xn || t[172] !== Q || t[173] !== nt || t[174] !== Ht || t[175] !== U
    ? ((Ir = Q
        ? (0, X.jsx)(kt, {
            currentPage: Yn,
            isDocked: nt,
            onDockedChange: rt,
            onPageSelect: Xn,
            renderThumbnail: (e) => {
              let t = Ht.at(e - 1);
              return t == null ? null : (0, X.jsx)(Yt, { pageElement: t });
            },
            totalPages: U,
          })
        : null),
      (t[170] = Yn),
      (t[171] = Xn),
      (t[172] = Q),
      (t[173] = nt),
      (t[174] = Ht),
      (t[175] = U),
      (t[176] = Ir))
    : (Ir = t[176]);
  let Lr = it,
    Rr = Q && qn && Pe === `overlay` ? `overlay` : void 0,
    zr;
  t[177] !== B ||
  t[178] !== q ||
  t[179] !== Oe ||
  t[180] !== V.hasRedlines ||
  t[181] !== L ||
  t[182] !== Me ||
  t[183] !== Sr ||
  t[184] !== m ||
  t[185] !== Ne ||
  t[186] !== g ||
  t[187] !== Vn ||
  t[188] !== Pe ||
  t[189] !== y ||
  t[190] !== b ||
  t[191] !== oe ||
  t[192] !== S ||
  t[193] !== Le ||
  t[194] !== J ||
  t[195] !== Hn ||
  t[196] !== lr ||
  t[197] !== T ||
  t[198] !== Re ||
  t[199] !== ue ||
  t[200] !== k ||
  t[201] !== A ||
  t[202] !== br ||
  t[203] !== P ||
  t[204] !== wr ||
  t[205] !== sr ||
  t[206] !== R ||
  t[207] !== Gn ||
  t[208] !== qn ||
  t[209] !== F ||
  t[210] !== I ||
  t[211] !== dr ||
  t[212] !== Fe ||
  t[213] !== Kn
    ? ((zr = qn
        ? (0, X.jsx)(ht, {
            enabled: Fe || T != null,
            placement: Pe === `overlay` ? ge(`docx`) : void 0,
            downloadControl: m ?? Sr,
            downloadFileName: P,
            downloadPending: Ne,
            onClose: ue,
            onDownload:
              Me && k != null
                ? () => {
                    k();
                  }
                : void 0,
            onShare: A,
            tabId: F,
            title: vn(I),
            actions:
              oe ??
              (Oe === "default" && !Me
                ? br
                : (0, X.jsx)(le, {
                    fileName: I,
                    libraryBreadcrumb: lr,
                    tooltipBreadcrumb: dr,
                    title: vn(I),
                    children: sr(null),
                  })),
            controls: {
              editingControls: null,
              onExitAnnotationMode: B
                ? () => {
                    J() || qe(!1);
                  }
                : void 0,
              annotationControl: L
                ? null
                : (0, X.jsx)(He, {
                    label: Le.formatMessage({
                      id: `artifactViewer.requestEdits`,
                      defaultMessage: `Request edits`,
                      description: `Button label for requesting edits to an artifact`,
                    }),
                    pressed: B,
                    disabled: q,
                    size: `default`,
                    variant: `annotation`,
                    onClick: () => {
                      J() || (B || tt(R, { surface: `file_artifact`, entrySource: `button` }), qe(on));
                    },
                    children: (0, X.jsx)(et, { active: B }),
                  }),
              commentsControl: null,
              zoomControl: (0, X.jsx)(u, {
                triggerTestId: `docx-preview-zoom-trigger`,
                zoomPercent: Kn,
                onZoomPercentChange: Gn,
                fitOption: { selected: Hn, onSelect: Vn },
              }),
              navigationControl: null,
              supplementalActions:
                S != null || (Re && V.hasRedlines) || y != null || b != null
                  ? (0, X.jsxs)(X.Fragment, { children: [S, Re ? wr : null, y, b] })
                  : null,
            },
          })
        : g),
      (t[177] = B),
      (t[178] = q),
      (t[179] = Oe),
      (t[180] = V.hasRedlines),
      (t[181] = L),
      (t[182] = Me),
      (t[183] = Sr),
      (t[184] = m),
      (t[185] = Ne),
      (t[186] = g),
      (t[187] = Vn),
      (t[188] = Pe),
      (t[189] = y),
      (t[190] = b),
      (t[191] = oe),
      (t[192] = S),
      (t[193] = Le),
      (t[194] = J),
      (t[195] = Hn),
      (t[196] = lr),
      (t[197] = T),
      (t[198] = Re),
      (t[199] = ue),
      (t[200] = k),
      (t[201] = A),
      (t[202] = br),
      (t[203] = P),
      (t[204] = wr),
      (t[205] = sr),
      (t[206] = R),
      (t[207] = Gn),
      (t[208] = qn),
      (t[209] = F),
      (t[210] = I),
      (t[211] = dr),
      (t[212] = Fe),
      (t[213] = Kn),
      (t[214] = zr))
    : (zr = t[214]);
  let Br;
  t[215] === Vt ? (Br = t[216]) : ((Br = xt(Vt, `docx`)), (t[215] = Vt), (t[216] = Br));
  let Vr = [zt, Bt].map((e) => {
      let t = e !== zt || !Q;
      return (0, X.jsx)(
        `div`,
        {
          ref: e === Nt ? Ft : Lt,
          "aria-hidden": t,
          "aria-label": I,
          className: ae(kn, `absolute inset-0`, t && `invisible`),
          "data-testid": e === zt ? `docx-preview-panel` : void 0,
          inert: t,
          style: { ...Gt, paddingInlineEnd: Bn || void 0 },
        },
        e === Nt ? `redlines` : `clean`,
      );
    }),
    Hr;
  t[217] !== Pe || t[218] !== Un || t[219] !== Wn || t[220] !== Br || t[221] !== Vr
    ? ((Hr = (0, X.jsxs)(`div`, {
        ref: Wn,
        className: `relative min-h-0 flex-1`,
        "data-viewer-header-placement": Pe,
        style: Un,
        children: [Br, Vr],
      })),
      (t[217] = Pe),
      (t[218] = Un),
      (t[219] = Wn),
      (t[220] = Br),
      (t[221] = Vr),
      (t[222] = Hr))
    : (Hr = t[222]);
  let Ur;
  t[223] !== Lr || t[224] !== xe || t[225] !== Rr || t[226] !== zr || t[227] !== Hr
    ? ((Ur = (0, X.jsx)(Lr, { headerPlacement: Rr, renderLayout: xe, header: zr, content: Hr })),
      (t[223] = Lr),
      (t[224] = xe),
      (t[225] = Rr),
      (t[226] = zr),
      (t[227] = Hr),
      (t[228] = Ur))
    : (Ur = t[228]);
  let Wr;
  t[229] !== z ||
  t[230] !== B ||
  t[231] !== $ ||
  t[232] !== o ||
  t[233] !== q ||
  t[234] !== G ||
  t[235] !== L ||
  t[236] !== Pn ||
  t[237] !== v ||
  t[238] !== w ||
  t[239] !== Le ||
  t[240] !== J ||
  t[241] !== Q ||
  t[242] !== zn ||
  t[243] !== hn ||
  t[244] !== D ||
  t[245] !== N ||
  t[246] !== Ht ||
  t[247] !== P ||
  t[248] !== De ||
  t[249] !== R ||
  t[250] !== Z ||
  t[251] !== W ||
  t[252] !== I ||
  t[253] !== U ||
  t[254] !== Kn
    ? ((Wr =
        Q && !L
          ? Ht.map((e, t) => {
              let n = t + 1;
              return (0, On.createPortal)(
                (0, X.jsx)(Wt, {
                  ref: (e) => {
                    $.onPageHandleChange(n, e);
                  },
                  annotationBatchingEnabled: z,
                  requestEditsEnabled: De,
                  annotationSourcePath: o,
                  comments: Pn,
                  conversationId: G,
                  getOriginatingTurn: v,
                  isCommentMode: B,
                  editingDisabled: q,
                  nextCommentNumber: zn,
                  onCommentsChange: Z,
                  onStarted: () => {
                    De && !J() && qe(!0);
                  },
                  onSendBatch: () => {
                    J() || Ue(R, Le, { conversationId: G, hostId: w, path: P }, D, hn);
                  },
                  onFocusAnnotation: $.onFocusAnnotation,
                  onInteractionChange: (e) => $e(n, e),
                  originatingTurn: N,
                  pageCount: U,
                  pageNumber: n,
                  pageSize: Tn(e, Kn),
                  path: P,
                  threadId: W,
                  title: I,
                  zoomScale: Kn / 100,
                }),
                e,
                `${P}:${n}:browse`,
              );
            })
          : null),
      (t[229] = z),
      (t[230] = B),
      (t[231] = $),
      (t[232] = o),
      (t[233] = q),
      (t[234] = G),
      (t[235] = L),
      (t[236] = Pn),
      (t[237] = v),
      (t[238] = w),
      (t[239] = Le),
      (t[240] = J),
      (t[241] = Q),
      (t[242] = zn),
      (t[243] = hn),
      (t[244] = D),
      (t[245] = N),
      (t[246] = Ht),
      (t[247] = P),
      (t[248] = De),
      (t[249] = R),
      (t[250] = Z),
      (t[251] = W),
      (t[252] = I),
      (t[253] = U),
      (t[254] = Kn),
      (t[255] = Wr))
    : (Wr = t[255]);
  let Gr;
  t[256] !== Mr ||
  t[257] !== Nr ||
  t[258] !== Pr ||
  t[259] !== Fr ||
  t[260] !== Ir ||
  t[261] !== Ur ||
  t[262] !== Wr
    ? ((Gr = (0, X.jsxs)(`section`, {
        className: `relative flex h-full min-h-0 flex-col bg-background-artifact-preview`,
        children: [Mr, Nr, Pr, Fr, Ir, Ur, Wr],
      })),
      (t[256] = Mr),
      (t[257] = Nr),
      (t[258] = Pr),
      (t[259] = Fr),
      (t[260] = Ir),
      (t[261] = Ur),
      (t[262] = Wr),
      (t[263] = Gr))
    : (Gr = t[263]);
  let Kr;
  if (t[264] !== Or || t[265] !== kr.document || t[266] !== Ar || t[267] !== jr || t[268] !== Gr) {
    let e = (0, X.jsx)(Or, {
      contentSelector: `[data-testid='docx-preview-panel']`,
      message: kr.document,
      onDismiss: Ar,
      open: jr,
      children: Gr,
    });
    ((Kr = (0, X.jsx)(We, { children: e })),
      (t[264] = Or),
      (t[265] = kr.document),
      (t[266] = Ar),
      (t[267] = jr),
      (t[268] = Gr),
      (t[269] = Kr));
  } else Kr = t[269];
  return Kr;
}
function on(e) {
  return !e;
}
function sn(e) {
  return !e;
}
function cn(e) {
  let t = Bt(e);
  return t == null ? [] : [{ id: U(e), pageNumber: t }];
}
function ln(e) {
  return [U(e), e];
}
function un() {
  return new Set();
}
function dn(e) {
  let t = (0, Dn.c)(21),
    { bytes: n, enabled: r, onImportError: i, onPagesRendered: a, renderer: o, renderChanges: s } = e,
    c = r === void 0 || r,
    l = (0, Y.useRef)(null),
    u = (0, Y.useRef)(null),
    d = (0, Y.useRef)(0),
    f = (0, Y.useRef)(!1),
    [p, m] = (0, Y.useState)(o == null ? `error` : `loading`),
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = []), (t[0] = h)) : (h = t[0]);
  let [ee, te] = (0, Y.useState)(h),
    [ne, g] = (0, Y.useState)(!1),
    [_, re] = (0, Y.useState)(0),
    v;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => {
        let e = l.current,
          t = u.current;
        e != null && t != null && (_n({ bodyContainer: e, styleContainer: t }), te([]), re(0));
      }),
      (t[1] = v))
    : (v = t[1]);
  let ie = v,
    ae;
  t[2] !== n || t[3] !== c || t[4] !== i || t[5] !== a || t[6] !== s || t[7] !== o
    ? ((ae = () => {
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
          pn({ bytes: n, bodyContainer: e, renderer: o, renderChanges: s, styleContainer: t }).then((n) => {
            if (d.current !== r) return;
            if (n == null) {
              (_n({ bodyContainer: e, styleContainer: t }), m(`error`), i?.());
              return;
            }
            let o = Sn(e);
            (g(n), te(o), re(Math.max(o.length, 1)), m(`ready`), (s || !n) && a(e));
          }));
      }),
      (t[2] = n),
      (t[3] = c),
      (t[4] = i),
      (t[5] = a),
      (t[6] = s),
      (t[7] = o),
      (t[8] = ae))
    : (ae = t[8]);
  let y = ae,
    b;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = () => {
        ((d.current += 1), (f.current = !1), ie());
      }),
      (t[9] = b))
    : (b = t[9]);
  let oe = b,
    x;
  t[10] === y
    ? (x = t[11])
    : ((x = (e) => {
        if (e == null) {
          (oe(), (l.current = null));
          return;
        }
        ((l.current = e), y());
      }),
      (t[10] = y),
      (t[11] = x));
  let S = x,
    se;
  t[12] === y
    ? (se = t[13])
    : ((se = (e) => {
        if (e == null) {
          (oe(), (u.current = null));
          return;
        }
        ((u.current = e), y());
      }),
      (t[12] = y),
      (t[13] = se));
  let C = se,
    w;
  return (
    t[14] !== ne || t[15] !== p || t[16] !== ee || t[17] !== S || t[18] !== C || t[19] !== _
      ? ((w = {
          bodyContainerElementRef: l,
          bodyContainerRef: S,
          hasRedlines: ne,
          loadState: p,
          pageElements: ee,
          styleContainerRef: C,
          totalPages: _,
        }),
        (t[14] = ne),
        (t[15] = p),
        (t[16] = ee),
        (t[17] = S),
        (t[18] = C),
        (t[19] = _),
        (t[20] = w))
      : (w = t[20]),
    w
  );
}
function fn(e, t, n, r, i) {
  let a = (0, Y.useRef)(null),
    o = (0, Y.useRef)(null),
    [c, l] = (0, Y.useState)(null),
    [u, d] = (0, Y.useState)({ kind: `fit-width` }),
    f =
      u.kind === `fit-width`
        ? yn({
            bodyContainer: e.current,
            bodyContainerWidth: c,
            endViewportInset: t,
            thumbnailRailSafeInset: n,
            zoomPercent: jn,
          })
        : null,
    p = u.kind === `fit-width` ? (f ?? r) : u.zoomPercent,
    m = s((r) => {
      let a = Math.floor(e.current?.clientWidth || r.contentRect.width),
        o = yn({
          bodyContainer: e.current,
          bodyContainerWidth: a,
          endViewportInset: t,
          thumbnailRailSafeInset: n,
          zoomPercent: p,
        });
      (o != null && i(o), l((e) => (e === a ? e : a)));
    }),
    h = O(() => {
      a.current = null;
    }),
    ee = (e) => {
      d({ kind: `percentage`, zoomPercent: Tt(e) });
    },
    te = () => {
      let r = u.kind === `fit-width` ? null : wn(e.current);
      yn({
        bodyContainer: e.current,
        bodyContainerWidth: c,
        endViewportInset: t,
        thumbnailRailSafeInset: n,
        zoomPercent: p,
      }) != null &&
        (d({ kind: `fit-width` }),
        r != null &&
          window.requestAnimationFrame(() => {
            r.scrollIntoView({ block: `center`, inline: `center` });
          }));
    },
    ne = O((e) => {
      e.ctrlKey &&
        (e.preventDefault(),
        d((t) => ({
          kind: `percentage`,
          zoomPercent: wt(t.kind === `percentage` ? t.zoomPercent : p, e.deltaY),
        })));
    }),
    g = O((e) => {
      if (e.touches.length !== 2) {
        h();
        return;
      }
      e.preventDefault();
      let t = e.touches.item(0),
        n = e.touches.item(1);
      t != null &&
        n != null &&
        (a.current = { distance: Ct(t.clientX, t.clientY, n.clientX, n.clientY), zoomPercent: p });
    }),
    _ = O((e) => {
      let t = a.current;
      if (e.touches.length !== 2 || t == null) return;
      e.preventDefault();
      let n = e.touches.item(0),
        r = e.touches.item(1);
      if (n == null || r == null) return;
      let i = Ct(n.clientX, n.clientY, r.clientX, r.clientY);
      i <= 0 ||
        t.distance <= 0 ||
        d({
          kind: `percentage`,
          zoomPercent: Dt({
            initialDistance: t.distance,
            initialZoomPercent: t.zoomPercent,
            nextDistance: i,
          }),
        });
    }),
    re = (0, Y.useCallback)(
      (e) => {
        let t = o.current;
        t !== e &&
          (t != null &&
            (t.removeEventListener(`touchcancel`, h, !0),
            t.removeEventListener(`touchend`, h, !0),
            t.removeEventListener(`touchmove`, _, !0),
            t.removeEventListener(`touchstart`, g, !0),
            t.removeEventListener(`wheel`, ne, !0)),
          (o.current = e),
          m(e),
          e != null &&
            (e.addEventListener(`touchcancel`, h, !0),
            e.addEventListener(`touchend`, h, !0),
            e.addEventListener(`touchmove`, _, { capture: !0, passive: !1 }),
            e.addEventListener(`touchstart`, g, { capture: !0, passive: !1 }),
            e.addEventListener(`wheel`, ne, { capture: !0, passive: !1 })));
      },
      [h, _, g, ne, m],
    );
  return {
    fitEndInset: u.kind === `fit-width` ? t : 0,
    fitToWidth: te,
    isZoomToFitSelected: u.kind === `fit-width`,
    previewStyle: { "--codex-docx-preview-zoom": `${p / 100}` },
    resizeRef: re,
    setZoomPercent: ee,
    zoomPercent: p,
  };
}
async function pn({ bytes: e, bodyContainer: t, renderer: n, renderChanges: r, styleContainer: i }) {
  try {
    let a = { ...Pn, renderChanges: r },
      o = await n.parseAsync(e, a);
    if (q(o)) return null;
    let s = en(o);
    return (await n.renderDocument(o, t, i, a), J(t), s);
  } catch {
    return null;
  }
}
function q(e) {
  return !gn(e) || !Array.isArray(e.parts) || e.parts.some((e) => !gn(e) || Fn.some((t) => mn(e[t])));
}
function mn(e) {
  return Array.isArray(e) ? e.some(mn) : gn(e) ? (e.type === `symbol` ? !hn(e.char) : mn(e.children)) : !1;
}
function hn(e) {
  if (typeof e != `string` || !/^[\da-f]{1,6}$/i.test(e)) return !1;
  let t = Number.parseInt(e, 16);
  return t <= 1114111 && (t < 55296 || t > 57343);
}
function gn(e) {
  return typeof e == `object` && !!e;
}
function J(e) {
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
function _n({ bodyContainer: e, styleContainer: t }) {
  (e.replaceChildren(), t.replaceChildren());
}
function vn(e) {
  return e.replace(/\.docx$/i, ``);
}
function yn({
  bodyContainer: e,
  bodyContainerWidth: t,
  endViewportInset: n,
  thumbnailRailSafeInset: r,
  zoomPercent: i,
}) {
  if (e == null) return null;
  let a = e.querySelector(Nn);
  if (a == null) return null;
  let o = a.parentElement ?? e,
    s = o === e ? 0 : bn(o),
    c = n + r + s,
    l = Math.max(1, (e.clientWidth || t || o.clientWidth) - c),
    u = Number.parseFloat(window.getComputedStyle(a).width),
    d = u > 0 ? u : a.getBoundingClientRect().width / Math.max(i / 100, 2 ** -52);
  return !Number.isFinite(d) || d <= 0 ? null : Math.min(100, Tt(Math.round((l / d) * 100)));
}
function bn(e) {
  return Math.max(xn(window.getComputedStyle(e)), xn(e.style));
}
function xn(e) {
  let t = Number.parseFloat(e.paddingInlineStart),
    n = Number.parseFloat(e.paddingInlineEnd),
    r = (Number.isFinite(t) ? t : 0) + (Number.isFinite(n) ? n : 0),
    i = Number.parseFloat(e.paddingLeft),
    a = Number.parseFloat(e.paddingRight),
    o = (Number.isFinite(i) ? i : 0) + (Number.isFinite(a) ? a : 0),
    s = e.paddingInline
      .split(` `)
      .map((e) => Number.parseFloat(e))
      .filter(Number.isFinite),
    c = s.length === 1 ? s[0] * 2 : (s[0] ?? 0) + (s[1] ?? 0);
  return Math.max(r, o, c);
}
function Sn(e) {
  return Array.from(e.querySelectorAll(Nn));
}
function Cn(e, t, n, r) {
  if (!Number.isInteger(t) || t < 1) return !1;
  let i = Sn(e)[t - 1];
  if (i == null) return !1;
  n.current != null && (window.cancelAnimationFrame(n.current), (n.current = null));
  let a = Mn,
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
function wn(e) {
  if (e == null) return null;
  let t = Sn(e);
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
function Tn(e, t) {
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
function En(e, t) {
  return (
    v(e) &&
    e.localArtifactAnnotationContext?.artifactKind === `document` &&
    e.localArtifactAnnotationContext.path === t
  );
}
var Dn, Y, On, X, Z, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln;
function Rn() {
  return (Rn = e(() => {
    ((Dn = D()),
      Ne(),
      Ye(),
      Qe(),
      Ve(),
      g(),
      f(),
      E(),
      (Y = A()),
      (On = k()),
      x(),
      a(),
      ft(),
      N(),
      mt(),
      nt(),
      $e(),
      F(),
      m(),
      re(),
      De(),
      xe(),
      d(),
      pe(),
      we(),
      _(),
      r(),
      rt(),
      at(),
      B(),
      Je(),
      I(),
      qe(),
      ot(),
      ct(),
      gt(),
      yt(),
      V(),
      St(),
      Et(),
      W(),
      Ut(),
      $t(),
      rn(),
      lt(),
      M(),
      Ot(),
      Mt(),
      (X = de()),
      T(),
      (Z = `codex-docx-preview`),
      (kn = `h-full min-h-0 overflow-auto bg-background-artifact-preview overscroll-contain`),
      (An = `
  .${Z}-wrapper {
    min-height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.875rem;
    padding: calc(var(--spacing) * 24) 1.5rem 1.5rem;
    background: var(--color-background-artifact-preview) !important;
  }

  [data-viewer-header-placement="inline"] .${Z}-wrapper {
    padding-top: calc(var(--spacing) * 6);
  }

  .${Z}-wrapper > section.${Z} {
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
  .${Z}::selection,
  .${Z} ::selection {
    color: currentColor;
  }

  .${Z} ins {
    background: var(--color-codex-diff-added);
    text-decoration: underline;
  }

  .${Z} del {
    background: var(--color-codex-diff-deleted);
    text-decoration: line-through;
  }

  :root:where(
    [data-codex-window-type="browser"],
    [data-codex-window-type="chrome-extension"],
    [data-codex-window-type="electron"]
  ) .${Z}-wrapper > section.${Z} {
    border-color: transparent;
    box-shadow: var(--elevation-prominent);
  }

  .${Z} [data-paged-annotation-ask-for-edit="true"],
  .${Z} [data-paged-annotation-ask-for-edit="true"] * {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif !important;
    font-size: 12px !important;
    letter-spacing: -0.3px !important;
    line-height: 18px !important;
    white-space: nowrap !important;
  }

  .${Z} [data-paged-annotation-ask-for-edit-label="true"] {
    font-weight: 400 !important;
  }

  .${Z} [data-paged-annotation-ask-for-edit-shortcut="true"] {
    font-weight: 500 !important;
  }
`),
      (jn = 75),
      (Mn = 12),
      (Nn = `section.${Z}`),
      (Pn = { className: Z, renderAltChunks: !1, useBase64URL: !0 }),
      (Fn = [`body`, `rootElement`, `notes`, `comments`]),
      (In = ie(
        () =>
          import(`./docx-preview-8513c2dacad2.js`).then(
            (e) => e,
            () => null,
          ),
        __vite__mapDeps([0, 1]),
        import.meta.url,
      )),
      (Ln = t({
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
  }))();
}
Rn();
export { an as DocxPreviewPanel };
//# sourceMappingURL=docx-preview-panel-1aa84738290d.js.map
