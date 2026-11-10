const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./docx-preview-8513c2dacad2.js", "./rolldown-runtime-2d059c5e81f4.js"]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CC as r,
  FBt as i,
  FNt as a,
  HFt as o,
  LNt as s,
  LU as c,
  MFt as l,
  MNt as u,
  NNt as d,
  OE as f,
  OFt as p,
  PBt as m,
  Qst as ee,
  TY as te,
  VRt as h,
  Vrt as g,
  XOt as _,
  XS as v,
  YOt as ne,
  ZSt as y,
  bB as re,
  dO as b,
  gB as x,
  hB as S,
  h_t as ie,
  iCt as C,
  jFt as w,
  kFt as T,
  kLt as E,
  kRt as D,
  lO as ae,
  nB as oe,
  nCt as se,
  okt as ce,
  p_t as le,
  qrt as ue,
  rB as de,
  sct as O,
  tkt as k,
  vB as A,
  wE as fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as j,
  Jkr as M,
  LOr as pe,
  MOr as me,
  Q8t as he,
  Qb as ge,
  Wkr as _e,
  Xhr as ve,
  Y8t as ye,
  agr as be,
  aln as xe,
  cln as Se,
  d8t as N,
  f8t as P,
  lx as Ce,
  ngr as we,
  o8t as Te,
  oln as Ee,
  pb as De,
  sx as Oe,
  t5t as ke,
  u8t as F,
  ux as Ae,
  xjr as je,
  zOr as Me,
} from "./app-initial-ad16eaadf81f.js";
import {
  Hu as I,
  Qu as Ne,
  Uu as Pe,
  Wu as Fe,
  Xu as Ie,
  Yu as L,
  Zu as Le,
  id as Re,
  ld as R,
  rd as z,
  sd as ze,
  ud as Be,
} from "./app-primary-3e00728c2a4c.js";
import { a as Ve, t as He } from "./PopcornManualEditHeaderControls-45cc4843f346.js";
import {
  c as Ue,
  i as We,
  l as Ge,
  n as Ke,
  o as B,
  s as qe,
  u as Je,
} from "./artifact-annotation-batch-controls-a9289185dbeb.js";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./use-annotation-mode-exit-12889926245c.js";
import { n as $e, t as et } from "./annotation-mode-icon-eafbc4a6687a.js";
import { n as tt, t as nt } from "./annotation-mode-analytics-dce005afe0df.js";
import { n as rt, t as it } from "./layout-21137ff640c7.js";
import { r as at } from "./artifact-accessories-af67956ed42b.js";
import { o as ot, r as st } from "./artifact-annotation-comment-3f969e43b1e7.js";
import {
  i as ct,
  n as lt,
  r as ut,
  t as dt,
} from "./presentation-annotation-cursor-coachmark-4559830c9cab.js";
import { n as ft, t as pt } from "./menu-items-83f6bf1513b1.js";
import { n as mt, t as ht } from "./header-8bb9b418457b.js";
import { n as gt, t as _t } from "./artifact-originating-turn-f3d50650c1c0.js";
import { n as vt, r as yt, t as bt } from "./artifact-preview-header-5bfab4685b80.js";
import { n as xt, t as St } from "./artifact-preview-status-5e6617ccf3e2.js";
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
} from "./paged-thumbnail-rail-layout-4a361b31ca3c.js";
import { n as Ft, t as It } from "./annotation-comment-editor-card-cfcadbd19454.js";
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
    l = e.kind === `region` ? (e.selectionKind == null ? R(e.rect) : Le(e)) : e.point;
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
            anchorPoint: Le(e),
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
    (Ne(), Be());
  }))();
}
function Wt(e) {
  let n = (0, Kt.c)(90),
    {
      ref: r,
      annotationBatchingEnabled: i,
      annotationSourcePath: a,
      comments: o,
      conversationId: s,
      editingDisabled: c,
      getOriginatingTurn: u,
      isCommentMode: d,
      nextCommentNumber: f,
      onCommentsChange: p,
      onFocusAnnotation: m,
      onInteractionChange: te,
      onStarted: h,
      onSendBatch: g,
      requestEditsEnabled: _,
      onTouchCancel: v,
      onTouchEnd: ne,
      onTouchMove: y,
      onTouchStart: b,
      onWheel: x,
      originatingTurn: S,
      pageCount: ie,
      pageNumber: C,
      pageSize: w,
      path: T,
      threadId: E,
      title: D,
      zoomScale: ae,
    } = e,
    oe = c !== void 0 && c,
    se = _ !== void 0 && _,
    de = ae === void 0 ? 1 : ae,
    O = t(ee),
    k = ce(),
    A = se || i,
    fe = re(),
    j;
  if (n[0] !== o || n[1] !== C || n[2] !== T) {
    j = [];
    for (let e of o) {
      if (e.localArtifactAnnotationContext?.path !== T || Bt(e) !== C) continue;
      let t = Vt(e),
        n = H(e);
      t != null &&
        n != null &&
        j.push({ id: U(e), label: e.position.line, body: Ht(e), anchor: t, pageSize: n });
    }
    ((n[0] = o), (n[1] = C), (n[2] = T), (n[3] = j));
  } else j = n[3];
  let M;
  n[4] !== o || n[5] !== p
    ? ((M = (e, t) => {
        p((n) => Nt(n, o, e, t, U));
      }),
      (n[4] = o),
      (n[5] = p),
      (n[6] = M))
    : (M = n[6]);
  let pe = M,
    me = `${s}:${T}:${C}`,
    he;
  n[7] !== d || n[8] !== O
    ? ((he = (e) => {
        e && !d && tt(O, { surface: `file_artifact` });
      }),
      (n[7] = d),
      (n[8] = O),
      (n[9] = he))
    : (he = n[9]);
  let ge;
  n[10] === k
    ? (ge = n[11])
    : ((ge = k.formatMessage({
        id: `artifactDocxPreview.addAnnotation`,
        defaultMessage: `Add document annotation`,
        description: `Accessible label for the overlay that adds a DOCX document annotation`,
      })),
      (n[10] = k),
      (n[11] = ge));
  let _e;
  n[12] !== k || n[13] !== se
    ? ((_e = se
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
      (n[12] = k),
      (n[13] = se),
      (n[14] = _e))
    : (_e = n[14]);
  let ve;
  n[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((ve = Fe()), (n[15] = ve)) : (ve = n[15]);
  let ye;
  n[16] === k
    ? (ye = n[17])
    : ((ye = (e) =>
        k.formatMessage(
          {
            id: `artifactDocxPreview.commentMarkerLabel`,
            defaultMessage: `Document annotation {commentNumber}`,
            description: `Accessible label for a placed DOCX annotation marker`,
          },
          { commentNumber: e },
        )),
      (n[16] = k),
      (n[17] = ye));
  let be;
  n[18] !== A || n[19] !== s || n[20] !== k || n[21] !== C || n[22] !== T || n[23] !== j || n[24] !== D
    ? ((be = (e) => {
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
            title: D,
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
      (n[18] = A),
      (n[19] = s),
      (n[20] = k),
      (n[21] = C),
      (n[22] = T),
      (n[23] = j),
      (n[24] = D),
      (n[25] = be))
    : (be = n[25]);
  let xe;
  n[26] !== a ||
  n[27] !== A ||
  n[28] !== s ||
  n[29] !== u ||
  n[30] !== d ||
  n[31] !== f ||
  n[32] !== p ||
  n[33] !== g ||
  n[34] !== S ||
  n[35] !== ie ||
  n[36] !== C ||
  n[37] !== T ||
  n[38] !== O ||
  n[39] !== E ||
  n[40] !== D
    ? ((xe = (e) => {
        let t = Rt({ anchor: e.anchor, pageCount: ie, pageNumber: C, pageSize: e.pageSize }),
          n = le({
            artifactKind: `document`,
            body: e.body,
            label: zt(e.anchor, C),
            line: f,
            metadata: t,
            path: T,
            sourcePath: a,
            title: D,
          });
        return (
          P(
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
            ? l.dispatchHostMessage({
                type: `artifact-direct-comment`,
                body: e.body,
                comment: n,
                conversationId: s,
                sessionId: crypto.randomUUID(),
              })
            : (p((e) => [...e, n]), e.submitMode === `direct` && g?.()),
          `submitted`
        );
      }),
      (n[26] = a),
      (n[27] = A),
      (n[28] = s),
      (n[29] = u),
      (n[30] = d),
      (n[31] = f),
      (n[32] = p),
      (n[33] = g),
      (n[34] = S),
      (n[35] = ie),
      (n[36] = C),
      (n[37] = T),
      (n[38] = O),
      (n[39] = E),
      (n[40] = D),
      (n[41] = xe))
    : (xe = n[41]);
  let Se;
  n[42] !== k || n[43] !== O
    ? ((Se = () => {
        O.get(ue).danger(
          k.formatMessage({
            id: `artifactAnnotation.saveFailed`,
            defaultMessage: `Could not save annotation`,
            description: `Error when an artifact annotation cannot be saved or submitted`,
          }),
          { errorAnalytics: { toastId: `artifactAnnotation.saveFailed` } },
        );
      }),
      (n[42] = k),
      (n[43] = O),
      (n[44] = Se))
    : (Se = n[44]);
  let Ce;
  n[45] !== A || n[46] !== pe || n[47] !== g
    ? ((Ce = A
        ? (e, t) => {
            (pe(e, t), g?.());
          }
        : void 0),
      (n[45] = A),
      (n[46] = pe),
      (n[47] = g),
      (n[48] = Ce))
    : (Ce = n[48]);
  let we;
  n[49] === p
    ? (we = n[50])
    : ((we = (e) => {
        p((t) => t.filter((t) => U(t) !== e));
      }),
      (n[49] = p),
      (n[50] = we));
  let Te;
  n[51] !== u || n[52] !== d || n[53] !== h || n[54] !== S || n[55] !== O || n[56] !== E
    ? ((Te = (e) => {
        (N(
          O,
          { artifactType: `document`, importKind: `docx`, originatingTurn: u == null ? S : u(), threadId: E },
          { annotationModeEnabled: d, startSource: e },
        ),
          h?.());
      }),
      (n[51] = u),
      (n[52] = d),
      (n[53] = h),
      (n[54] = S),
      (n[55] = O),
      (n[56] = E),
      (n[57] = Te))
    : (Te = n[57]);
  let Ee;
  n[58] !== O || n[59] !== E
    ? ((Ee = () => {
        F(O, { artifactType: `document`, importKind: `docx`, threadId: E });
      }),
      (n[58] = O),
      (n[59] = E),
      (n[60] = Ee))
    : (Ee = n[60]);
  let De;
  return (
    n[61] !== pe ||
    n[62] !== oe ||
    n[63] !== d ||
    n[64] !== f ||
    n[65] !== m ||
    n[66] !== te ||
    n[67] !== v ||
    n[68] !== ne ||
    n[69] !== y ||
    n[70] !== b ||
    n[71] !== x ||
    n[72] !== w ||
    n[73] !== j ||
    n[74] !== r ||
    n[75] !== ye ||
    n[76] !== be ||
    n[77] !== xe ||
    n[78] !== Se ||
    n[79] !== Ce ||
    n[80] !== we ||
    n[81] !== Te ||
    n[82] !== Ee ||
    n[83] !== me ||
    n[84] !== he ||
    n[85] !== ge ||
    n[86] !== _e ||
    n[87] !== fe ||
    n[88] !== de
      ? ((De = (0, qt.jsx)(
          L,
          {
            ref: r,
            theme: `codex`,
            records: j,
            onFocusAnnotation: m,
            onInteractionChange: te,
            onDraftActiveChange: he,
            pageSize: w,
            isAnnotationMode: d,
            editingDisabled: oe,
            nextAnnotationNumber: f,
            zoomScale: de,
            windowZoom: fe,
            onTouchCancel: v,
            onTouchEnd: ne,
            onTouchMove: y,
            onTouchStart: b,
            onWheel: x,
            addAnnotationLabel: ge,
            askForEditLabel: _e,
            shortcutLabel: ve,
            getAnnotationMarkerLabel: ye,
            renderPreviewBody: Gt,
            renderEditor: be,
            onCreate: xe,
            onCreateError: Se,
            onEdit: pe,
            onEditDirectSubmit: Ce,
            onDelete: we,
            onStarted: Te,
            onPillShown: Ee,
          },
          me,
        )),
        (n[61] = pe),
        (n[62] = oe),
        (n[63] = d),
        (n[64] = f),
        (n[65] = m),
        (n[66] = te),
        (n[67] = v),
        (n[68] = ne),
        (n[69] = y),
        (n[70] = b),
        (n[71] = x),
        (n[72] = w),
        (n[73] = j),
        (n[74] = r),
        (n[75] = ye),
        (n[76] = be),
        (n[77] = xe),
        (n[78] = Se),
        (n[79] = Ce),
        (n[80] = we),
        (n[81] = Te),
        (n[82] = Ee),
        (n[83] = me),
        (n[84] = he),
        (n[85] = ge),
        (n[86] = _e),
        (n[87] = fe),
        (n[88] = de),
        (n[89] = De))
      : (De = n[89]),
    De
  );
}
function Gt(e) {
  return (0, qt.jsx)(I, { body: e });
}
var Kt, qt, Jt;
function W() {
  return (W = e(() => {
    ((Kt = m()),
      Ie(),
      ze(),
      y(),
      O(),
      _(),
      A(),
      Ft(),
      nt(),
      g(),
      w(),
      n(),
      Te(),
      Ut(),
      Pe(),
      (qt = s()),
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
    ((G = m()), (Zt = i()), (Qt = s()));
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
      (K = D({
        type: h(),
        get children() {
          return E(K).optional();
        },
      })),
      (nn = D({ parts: E(D({ body: K.optional(), rootElement: K.optional(), notes: E(K).optional() })) })));
  }))();
}
function an(e) {
  let n = (0, Dn.c)(274),
    {
      annotationBatchingEnabled: i,
      requestEditsEnabled: a,
      annotationHandleRef: o,
      annotationSourcePath: s,
      bytes: l,
      chromeMode: d,
      disableAnnotations: p,
      disableFileActions: m,
      downloadControl: ee,
      downloadPending: te,
      fallbackHeader: h,
      fileInfoOwnerId: g,
      fileInfoSource: _,
      getAnnotationOriginatingTurn: v,
      headerPlacement: ne,
      headerRightContent: y,
      headerSupplementalActions: b,
      headerTitleContent: S,
      headerFavoriteAction: ie,
      headerZoomLeadingContent: w,
      environmentId: T,
      hostId: E,
      libraryFile: D,
      onBeforeOpen: ae,
      onBatchAction: le,
      onClose: ue,
      onRefresh: de,
      onDownload: O,
      onShare: A,
      onImportError: M,
      onReady: he,
      originatingTurn: N,
      path: P,
      ref: we,
      refreshQueryCacheKey: Te,
      renderLayout: Ee,
      tabId: Oe,
      title: F,
      versionHistoryEnabled: Ae,
    } = e,
    je = a !== void 0 && a,
    Me = d === void 0 ? `default` : d,
    I = p !== void 0 && p,
    Ne = m !== void 0 && m,
    Pe = te !== void 0 && te,
    Fe = ne === void 0 ? `overlay` : ne,
    Ie = Ae !== void 0 && Ae,
    L = t(me),
    Le = se(g == null ? null : ge, g ?? ``)?.phase === `open` ? 312 : 0,
    R = je || i,
    z = ce(),
    ze = j(`1292007209`),
    [Be, Ve] = (0, Y.useState)(!0),
    [B, qe] = (0, Y.useState)(!1),
    [Je, Ye] = (0, Y.useState)(un),
    Qe;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = (e, t) => {
        Ye((n) => {
          if (n.has(e) === t) return n;
          let r = new Set(n);
          return (t ? r.add(e) : r.delete(e), r);
        });
      }),
      (n[0] = Qe))
    : (Qe = n[0]);
  let $e = Qe,
    [nt, rt] = (0, Y.useState)(!1),
    at = C(ke),
    ot = (0, Y.use)(In),
    ct = re(),
    lt = (0, Y.useRef)(null),
    ft = (0, Y.useRef)(null),
    mt = (0, Y.useRef)(jn),
    [gt, yt] = (0, Y.useState)(jn),
    St;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((St = (e) => {
        ((mt.current = e), yt((t) => (t === e ? t : e)));
      }),
      (n[1] = St))
    : (St = n[1]);
  let Ct = St,
    wt;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = () => {
        ft.current != null && (window.cancelAnimationFrame(ft.current), (ft.current = null));
      }),
      (n[2] = wt))
    : (wt = n[2]);
  let Tt = wt,
    Et;
  n[3] !== Le || n[4] !== he || n[5] !== ct
    ? ((Et = (e) => {
        let t = yn({
          bodyContainer: e,
          bodyContainerWidth: null,
          endViewportInset: Le,
          thumbnailRailSafeInset: jt({ isDocked: !1, totalPages: Sn(e).length }),
          zoomPercent: mt.current,
        });
        t != null && Ct(t);
        let n = lt.current;
        (n != null && Cn(e, n, ft, ct) && (lt.current = null), he?.());
      }),
      (n[3] = Le),
      (n[4] = he),
      (n[5] = ct),
      (n[6] = Et))
    : (Et = n[6]);
  let Dt = Et,
    Ot;
  n[7] !== l || n[8] !== ot || n[9] !== Dt || n[10] !== M
    ? ((Ot = { bytes: l, onImportError: M, onPagesRendered: Dt, renderer: ot, renderChanges: !1 }),
      (n[7] = l),
      (n[8] = ot),
      (n[9] = Dt),
      (n[10] = M),
      (n[11] = Ot))
    : (Ot = n[11]);
  let V = dn(Ot),
    Mt;
  n[12] !== l || n[13] !== V.hasRedlines || n[14] !== ot || n[15] !== Dt || n[16] !== M
    ? ((Mt = {
        bytes: l,
        enabled: V.hasRedlines,
        onImportError: M,
        onPagesRendered: Dt,
        renderer: ot,
        renderChanges: !0,
      }),
      (n[12] = l),
      (n[13] = V.hasRedlines),
      (n[14] = ot),
      (n[15] = Dt),
      (n[16] = M),
      (n[17] = Mt))
    : (Mt = n[17]);
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
  n[18] === L.value ? (Jt = n[19]) : ((Jt = pe(L.value)), (n[18] = L.value), (n[19] = Jt));
  let W = Jt,
    Xt;
  n[20] === W ? (Xt = n[21]) : ((Xt = W ?? _e({ entrypoint: `home` })), (n[20] = W), (n[21] = Xt));
  let G = Xt,
    Zt = (0, Y.useRef)(R),
    Qt,
    $t;
  (n[22] === R
    ? ((Qt = n[23]), ($t = n[24]))
    : ((Qt = () => {
        Zt.current = R;
      }),
      ($t = [R]),
      (n[22] = R),
      (n[23] = Qt),
      (n[24] = $t)),
    (0, Y.useEffect)(Qt, $t));
  let en = se(xe, G),
    tn;
  n[25] !== G || n[26] !== L
    ? ((tn = (e) => {
        Se(L, G, e);
      }),
      (n[25] = G),
      (n[26] = L),
      (n[27] = tn))
    : (tn = n[27]);
  let K = tn,
    nn;
  n[28] !== G || n[29] !== E || n[30] !== P
    ? ((nn = { conversationId: G, hostId: E, path: P }), (n[28] = G), (n[29] = E), (n[30] = P), (n[31] = nn))
    : (nn = n[31]);
  let rn = se(ve, nn),
    an;
  n[32] !== G || n[33] !== E || n[34] !== P
    ? ((an = { conversationId: G, hostId: E, path: P }), (n[32] = G), (n[33] = E), (n[34] = P), (n[35] = an))
    : (an = n[35]);
  let pn = se(Ge, an),
    q = je && pn,
    mn;
  n[36] === Je.size
    ? (mn = n[37])
    : ((mn = () => {
        Je.size === 0 && qe(!1);
      }),
      (n[36] = Je.size),
      (n[37] = mn));
  let hn = x(mn),
    gn;
  n[38] !== G || n[39] !== E || n[40] !== P || n[41] !== je || n[42] !== L
    ? ((gn = () => je && L.get(Ge, { conversationId: G, hostId: E, path: P })),
      (n[38] = G),
      (n[39] = E),
      (n[40] = P),
      (n[41] = je),
      (n[42] = L),
      (n[43] = gn))
    : (gn = n[43]);
  let J = x(gn),
    _n;
  n[44] !== G || n[45] !== E || n[46] !== P || n[47] !== L
    ? ((_n = (e) => {
        be(L, { conversationId: G, hostId: E, path: P }, e);
      }),
      (n[44] = G),
      (n[45] = E),
      (n[46] = P),
      (n[47] = L),
      (n[48] = _n))
    : (_n = n[48]);
  let bn = _n,
    xn = R ? [...en, ...rn] : en,
    wn;
  n[49] !== R || n[50] !== J || n[51] !== bn || n[52] !== K
    ? ((wn = (e) => {
        if (!J()) {
          if (R) {
            bn(e);
            return;
          }
          K(e);
        }
      }),
      (n[49] = R),
      (n[50] = J),
      (n[51] = bn),
      (n[52] = K),
      (n[53] = wn))
    : (wn = n[53]);
  let Z = wn,
    Mn;
  n[54] === P ? (Mn = n[55]) : ((Mn = (e) => En(e, P)), (n[54] = P), (n[55] = Mn));
  let Pn = Array.from(new Map(xn.filter(Mn).map(ln)).values()),
    Fn;
  n[56] === P ? (Fn = n[57]) : ((Fn = (e) => En(e, P)), (n[56] = P), (n[57] = Fn));
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
    } = fn(H, Le, Kt, gt, Ct),
    Q = Vt === `ready`,
    qn = Q || Ie || D != null || S != null,
    Jn;
  n[58] !== H || n[59] !== Q || n[60] !== U
    ? ((Jn = { containerRef: H, isPageLayoutReady: Q, pageSelector: Nn, totalPages: U }),
      (n[58] = H),
      (n[59] = Q),
      (n[60] = U),
      (n[61] = Jn))
    : (Jn = n[61]);
  let { currentPage: Yn, goToPage: Xn } = At(Jn),
    Zn = Rn.flatMap(cn),
    Qn;
  n[62] === Xn ? (Qn = n[63]) : ((Qn = (e) => Xn(e, `instant`)), (n[62] = Xn), (n[63] = Qn));
  let $n;
  n[64] !== o || n[65] !== q || n[66] !== Zn || n[67] !== Qn
    ? (($n = { ref: o, editingDisabled: q, annotations: Zn, onNavigateToPage: Qn }),
      (n[64] = o),
      (n[65] = q),
      (n[66] = Zn),
      (n[67] = Qn),
      (n[68] = $n))
    : ($n = n[68]);
  let $ = Re($n),
    er;
  n[69] !== H || n[70] !== ct
    ? ((er = (e) => {
        let t = H.current;
        if (t == null || !Cn(t, e, ft, ct)) {
          lt.current = e;
          return;
        }
        lt.current = null;
      }),
      (n[69] = H),
      (n[70] = ct),
      (n[71] = er))
    : (er = n[71]);
  let tr = er,
    nr,
    rr;
  (n[72] === tr
    ? ((nr = n[73]), (rr = n[74]))
    : ((nr = () => ({ navigateToPage: tr })), (rr = [tr]), (n[72] = tr), (n[73] = nr), (n[74] = rr)),
    (0, Y.useImperativeHandle)(we, nr, rr));
  let ir, ar;
  (n[75] !== P || n[76] !== K
    ? ((ir = () => () => {
        (Tt(),
          !Zt.current &&
            K((e) => {
              let t = e.filter((e) => !En(e, P));
              return t.length === e.length ? e : t;
            }));
      }),
      (ar = [Tt, P, K]),
      (n[75] = P),
      (n[76] = K),
      (n[77] = ir),
      (n[78] = ar))
    : ((ir = n[77]), (ar = n[78])),
    (0, Y.useEffect)(ir, ar));
  let or;
  n[79] !== g || n[80] !== _ || n[81] !== ie || n[82] !== D
    ? ((or = (e) =>
        (0, X.jsx)(pt, { favoriteAction: ie, file: D, fileInfoOwnerId: g, fileInfoSource: _, children: e })),
      (n[79] = g),
      (n[80] = _),
      (n[81] = ie),
      (n[82] = D),
      (n[83] = or))
    : (or = n[83]);
  let sr = or,
    cr;
  n[84] === D
    ? (cr = n[85])
    : ((cr = D == null ? void 0 : (0, X.jsx)(Ce, { libraryFileId: D.libraryFileId })),
      (n[84] = D),
      (n[85] = cr));
  let lr = cr,
    ur;
  n[86] === D
    ? (ur = n[87])
    : ((ur = D == null ? void 0 : (0, X.jsx)(Ce, { libraryFileId: D.libraryFileId, variant: `text` })),
      (n[86] = D),
      (n[87] = ur));
  let dr = ur,
    fr = N?.turnId ?? null,
    pr = N?.inputMessageId ?? null,
    mr = N?.messageId ?? null,
    hr;
  n[88] !== fr || n[89] !== pr || n[90] !== mr || n[91] !== W
    ? ((hr = { threadId: W, turnId: fr, inputMessageId: pr, messageId: mr }),
      (n[88] = fr),
      (n[89] = pr),
      (n[90] = mr),
      (n[91] = W),
      (n[92] = hr))
    : (hr = n[92]);
  let gr;
  n[93] !== E || n[94] !== N || n[95] !== P || n[96] !== L || n[97] !== W
    ? ((gr = () => _t(L, { hostId: E, originatingTurn: N, path: P, threadId: W })),
      (n[93] = E),
      (n[94] = N),
      (n[95] = P),
      (n[96] = L),
      (n[97] = W),
      (n[98] = gr))
    : (gr = n[98]);
  let _r;
  n[99] !== N || n[100] !== W
    ? ((_r = { artifactType: `document`, importKind: `docx`, originatingTurn: N, threadId: W }),
      (n[99] = N),
      (n[100] = W),
      (n[101] = _r))
    : (_r = n[101]);
  let vr;
  n[102] === F ? (vr = n[103]) : ((vr = vn(F)), (n[102] = F), (n[103] = vr));
  let yr;
  n[104] !== T ||
  n[105] !== E ||
  n[106] !== lr ||
  n[107] !== ae ||
  n[108] !== P ||
  n[109] !== sr ||
  n[110] !== hr ||
  n[111] !== gr ||
  n[112] !== _r ||
  n[113] !== vr ||
  n[114] !== Oe ||
  n[115] !== dr
    ? ((yr = (0, X.jsx)(vt, {
        tabId: Oe,
        environmentId: T,
        analyticsContext: hr,
        getAnalyticsContext: gr,
        downloadAnalyticsMetadata: _r,
        hostId: E,
        libraryBreadcrumb: lr,
        tooltipBreadcrumb: dr,
        onBeforeOpen: ae,
        path: P,
        renderMenuItems: sr,
        showDownloadAction: !1,
        title: vr,
        variant: `title`,
      })),
      (n[104] = T),
      (n[105] = E),
      (n[106] = lr),
      (n[107] = ae),
      (n[108] = P),
      (n[109] = sr),
      (n[110] = hr),
      (n[111] = gr),
      (n[112] = _r),
      (n[113] = vr),
      (n[114] = Oe),
      (n[115] = dr),
      (n[116] = yr))
    : (yr = n[116]);
  let br = yr,
    xr;
  n[117] !== Me ||
  n[118] !== Ne ||
  n[119] !== T ||
  n[120] !== E ||
  n[121] !== ae ||
  n[122] !== O ||
  n[123] !== N ||
  n[124] !== P ||
  n[125] !== L ||
  n[126] !== Oe ||
  n[127] !== W
    ? ((xr =
        Me === "default" && !Ne
          ? (0, X.jsx)(bt, {
              tabId: Oe,
              environmentId: T,
              onBeforeOpen: ae,
              analyticsContext: {
                threadId: W,
                turnId: N?.turnId ?? null,
                inputMessageId: N?.inputMessageId ?? null,
                messageId: N?.messageId ?? null,
              },
              getAnalyticsContext: () => _t(L, { hostId: E, originatingTurn: N, path: P, threadId: W }),
              analyticsMetadata: {
                artifactType: `document`,
                importKind: `docx`,
                originatingTurn: N,
                threadId: W,
              },
              hostId: E,
              onDownload: O,
              path: P,
            })
          : void 0),
      (n[117] = Me),
      (n[118] = Ne),
      (n[119] = T),
      (n[120] = E),
      (n[121] = ae),
      (n[122] = O),
      (n[123] = N),
      (n[124] = P),
      (n[125] = L),
      (n[126] = Oe),
      (n[127] = W),
      (n[128] = xr))
    : (xr = n[128]);
  let Sr = xr,
    Cr;
  n[129] !== q ||
  n[130] !== H ||
  n[131] !== V.hasRedlines ||
  n[132] !== qt ||
  n[133] !== z ||
  n[134] !== J ||
  n[135] !== P ||
  n[136] !== bn ||
  n[137] !== K ||
  n[138] !== Be
    ? ((Cr = V.hasRedlines
        ? (0, X.jsx)(oe, {
            tooltipContent: Be
              ? (0, X.jsx)(k, { ...Ln.hideRedlines })
              : (0, X.jsx)(k, { ...Ln.showRedlines }),
            children: (0, X.jsx)(f, {
              "aria-label": z.formatMessage(Ln.showRedlines),
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
              children: (0, X.jsx)(c, {}),
            }),
          })
        : null),
      (n[129] = q),
      (n[130] = H),
      (n[131] = V.hasRedlines),
      (n[132] = qt),
      (n[133] = z),
      (n[134] = J),
      (n[135] = P),
      (n[136] = bn),
      (n[137] = K),
      (n[138] = Be),
      (n[139] = Cr))
    : (Cr = n[139]);
  let wr = Cr,
    Tr = B && !q && Je.size === 0,
    Er;
  n[140] !== $ || n[141] !== J
    ? ((Er = () => {
        !J() && $.dismissAnnotationEditor() && qe(!1);
      }),
      (n[140] = $),
      (n[141] = J),
      (n[142] = Er))
    : (Er = n[142]);
  let Dr;
  (n[143] !== Tr || n[144] !== Er
    ? ((Dr = { active: Tr, onExit: Er }), (n[143] = Tr), (n[144] = Er), (n[145] = Dr))
    : (Dr = n[145]),
    Xe(Dr));
  let Or;
  n[146] !== B || n[147] !== J || n[148] !== L
    ? ((Or = (e) => {
        J() || (B || tt(L, { surface: `file_artifact`, entrySource: e }), qe(on));
      }),
      (n[146] = B),
      (n[147] = J),
      (n[148] = L),
      (n[149] = Or))
    : (Or = n[149]);
  let kr = Or,
    Ar = dt,
    jr = ut,
    Mr;
  n[150] === L
    ? (Mr = n[151])
    : ((Mr = () => {
        ye(L);
      }),
      (n[150] = L),
      (n[151] = Mr));
  let Nr = Q && !I && at,
    Pr;
  n[152] === It
    ? (Pr = n[153])
    : ((Pr = (0, X.jsx)(`div`, { ref: It, "aria-hidden": !0, className: `hidden` })),
      (n[152] = It),
      (n[153] = Pr));
  let Fr;
  n[154] === Rt
    ? (Fr = n[155])
    : ((Fr = (0, X.jsx)(`div`, { ref: Rt, "aria-hidden": !0, className: `hidden` })),
      (n[154] = Rt),
      (n[155] = Fr));
  let Ir;
  n[156] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ir = (0, X.jsx)(`style`, { children: An })), (n[156] = Ir))
    : (Ir = n[156]);
  let Lr;
  n[157] !== Je.size ||
  n[158] !== R ||
  n[159] !== B ||
  n[160] !== $ ||
  n[161] !== G ||
  n[162] !== I ||
  n[163] !== E ||
  n[164] !== J ||
  n[165] !== Q ||
  n[166] !== hn ||
  n[167] !== le ||
  n[168] !== de ||
  n[169] !== P ||
  n[170] !== Rn ||
  n[171] !== Te ||
  n[172] !== bn
    ? ((Lr =
        Q && !I && R
          ? (0, X.jsx)(Ze, {
              children: (0, X.jsx)(Ke, {
                annotationCount: Rn.length,
                isAnnotating: B,
                isAnnotationInteractionActive: Je.size > 0,
                conversationId: G,
                hostId: E,
                onBatchAction: le,
                onAnnotationsSubmitted: hn,
                onDismissAnnotations: (e) =>
                  J() || !$.dismissAnnotationEditor(e) ? !1 : (bn([]), qe(!1), !0),
                onNavigate: $.onNavigate,
                onRefresh: de,
                path: P,
                refreshQueryCacheKey: Te,
              }),
            })
          : null),
      (n[157] = Je.size),
      (n[158] = R),
      (n[159] = B),
      (n[160] = $),
      (n[161] = G),
      (n[162] = I),
      (n[163] = E),
      (n[164] = J),
      (n[165] = Q),
      (n[166] = hn),
      (n[167] = le),
      (n[168] = de),
      (n[169] = P),
      (n[170] = Rn),
      (n[171] = Te),
      (n[172] = bn),
      (n[173] = Lr))
    : (Lr = n[173]);
  let Rr;
  n[174] !== Yn || n[175] !== Xn || n[176] !== Q || n[177] !== nt || n[178] !== Ht || n[179] !== U
    ? ((Rr = Q
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
      (n[174] = Yn),
      (n[175] = Xn),
      (n[176] = Q),
      (n[177] = nt),
      (n[178] = Ht),
      (n[179] = U),
      (n[180] = Rr))
    : (Rr = n[180]);
  let zr = it,
    Br = Q && qn && Fe === `overlay` ? `overlay` : void 0,
    Vr;
  n[181] !== B ||
  n[182] !== q ||
  n[183] !== Me ||
  n[184] !== V.hasRedlines ||
  n[185] !== I ||
  n[186] !== Ne ||
  n[187] !== Sr ||
  n[188] !== ee ||
  n[189] !== Pe ||
  n[190] !== h ||
  n[191] !== Vn ||
  n[192] !== Fe ||
  n[193] !== y ||
  n[194] !== b ||
  n[195] !== S ||
  n[196] !== w ||
  n[197] !== z ||
  n[198] !== J ||
  n[199] !== Hn ||
  n[200] !== lr ||
  n[201] !== D ||
  n[202] !== ze ||
  n[203] !== ue ||
  n[204] !== O ||
  n[205] !== A ||
  n[206] !== br ||
  n[207] !== P ||
  n[208] !== wr ||
  n[209] !== sr ||
  n[210] !== Gn ||
  n[211] !== qn ||
  n[212] !== Oe ||
  n[213] !== F ||
  n[214] !== kr ||
  n[215] !== dr ||
  n[216] !== Ie ||
  n[217] !== Kn
    ? ((Vr = qn
        ? (0, X.jsx)(ht, {
            enabled: Ie || D != null,
            placement: Fe === `overlay` ? De(`docx`) : void 0,
            downloadControl: ee ?? Sr,
            downloadFileName: P,
            downloadPending: Pe,
            onClose: ue,
            onDownload:
              Ne && O != null
                ? () => {
                    O();
                  }
                : void 0,
            onShare: A,
            tabId: Oe,
            title: vn(F),
            actions:
              S ??
              (Me === "default" && !Ne
                ? br
                : (0, X.jsx)(fe, {
                    fileName: F,
                    libraryBreadcrumb: lr,
                    tooltipBreadcrumb: dr,
                    title: vn(F),
                    children: sr(null),
                  })),
            controls: {
              editingControls: null,
              annotationCommand: { active: B, disabled: I || q, onToggle: () => kr(`keyboard_shortcut`) },
              onExitAnnotationMode: B
                ? () => {
                    J() || qe(!1);
                  }
                : void 0,
              annotationControl: I
                ? null
                : (0, X.jsx)(He, {
                    label: z.formatMessage({
                      id: `artifactViewer.requestEdits`,
                      defaultMessage: `Request edits`,
                      description: `Button label for requesting edits to an artifact`,
                    }),
                    pressed: B,
                    disabled: q,
                    size: `default`,
                    variant: `annotation`,
                    onClick: () => kr(`button`),
                    children: (0, X.jsx)(et, { active: B }),
                  }),
              commentsControl: null,
              zoomControl: (0, X.jsx)(r, {
                triggerTestId: `docx-preview-zoom-trigger`,
                zoomPercent: Kn,
                onZoomPercentChange: Gn,
                fitOption: { selected: Hn, onSelect: Vn },
              }),
              navigationControl: null,
              supplementalActions:
                w != null || (ze && V.hasRedlines) || y != null || b != null
                  ? (0, X.jsxs)(X.Fragment, { children: [w, ze ? wr : null, y, b] })
                  : null,
            },
          })
        : h),
      (n[181] = B),
      (n[182] = q),
      (n[183] = Me),
      (n[184] = V.hasRedlines),
      (n[185] = I),
      (n[186] = Ne),
      (n[187] = Sr),
      (n[188] = ee),
      (n[189] = Pe),
      (n[190] = h),
      (n[191] = Vn),
      (n[192] = Fe),
      (n[193] = y),
      (n[194] = b),
      (n[195] = S),
      (n[196] = w),
      (n[197] = z),
      (n[198] = J),
      (n[199] = Hn),
      (n[200] = lr),
      (n[201] = D),
      (n[202] = ze),
      (n[203] = ue),
      (n[204] = O),
      (n[205] = A),
      (n[206] = br),
      (n[207] = P),
      (n[208] = wr),
      (n[209] = sr),
      (n[210] = Gn),
      (n[211] = qn),
      (n[212] = Oe),
      (n[213] = F),
      (n[214] = kr),
      (n[215] = dr),
      (n[216] = Ie),
      (n[217] = Kn),
      (n[218] = Vr))
    : (Vr = n[218]);
  let Hr;
  n[219] === Vt ? (Hr = n[220]) : ((Hr = xt(Vt, `docx`)), (n[219] = Vt), (n[220] = Hr));
  let Ur = [zt, Bt].map((e) => {
      let t = e !== zt || !Q;
      return (0, X.jsx)(
        `div`,
        {
          ref: e === Nt ? Ft : Lt,
          "aria-hidden": t,
          "aria-label": F,
          className: u(kn, `absolute inset-0`, t && `invisible`),
          "data-testid": e === zt ? `docx-preview-panel` : void 0,
          inert: t,
          style: { ...Gt, paddingInlineEnd: Bn || void 0 },
        },
        e === Nt ? `redlines` : `clean`,
      );
    }),
    Wr;
  n[221] !== Fe || n[222] !== Un || n[223] !== Wn || n[224] !== Hr || n[225] !== Ur
    ? ((Wr = (0, X.jsxs)(`div`, {
        ref: Wn,
        className: `relative min-h-0 flex-1`,
        "data-viewer-header-placement": Fe,
        style: Un,
        children: [Hr, Ur],
      })),
      (n[221] = Fe),
      (n[222] = Un),
      (n[223] = Wn),
      (n[224] = Hr),
      (n[225] = Ur),
      (n[226] = Wr))
    : (Wr = n[226]);
  let Gr;
  n[227] !== zr || n[228] !== Ee || n[229] !== Br || n[230] !== Vr || n[231] !== Wr
    ? ((Gr = (0, X.jsx)(zr, { headerPlacement: Br, renderLayout: Ee, header: Vr, content: Wr })),
      (n[227] = zr),
      (n[228] = Ee),
      (n[229] = Br),
      (n[230] = Vr),
      (n[231] = Wr),
      (n[232] = Gr))
    : (Gr = n[232]);
  let Kr;
  n[233] !== R ||
  n[234] !== B ||
  n[235] !== $ ||
  n[236] !== s ||
  n[237] !== q ||
  n[238] !== G ||
  n[239] !== I ||
  n[240] !== Pn ||
  n[241] !== v ||
  n[242] !== E ||
  n[243] !== z ||
  n[244] !== J ||
  n[245] !== Q ||
  n[246] !== zn ||
  n[247] !== hn ||
  n[248] !== le ||
  n[249] !== N ||
  n[250] !== Ht ||
  n[251] !== P ||
  n[252] !== je ||
  n[253] !== L ||
  n[254] !== Z ||
  n[255] !== W ||
  n[256] !== F ||
  n[257] !== U ||
  n[258] !== Kn
    ? ((Kr =
        Q && !I
          ? Ht.map((e, t) => {
              let n = t + 1;
              return (0, On.createPortal)(
                (0, X.jsx)(Wt, {
                  ref: (e) => {
                    $.onPageHandleChange(n, e);
                  },
                  annotationBatchingEnabled: R,
                  requestEditsEnabled: je,
                  annotationSourcePath: s,
                  comments: Pn,
                  conversationId: G,
                  getOriginatingTurn: v,
                  isCommentMode: B,
                  editingDisabled: q,
                  nextCommentNumber: zn,
                  onCommentsChange: Z,
                  onStarted: () => {
                    je && !J() && qe(!0);
                  },
                  onSendBatch: () => {
                    J() || Ue(L, z, { conversationId: G, hostId: E, path: P }, le, hn);
                  },
                  onFocusAnnotation: $.onFocusAnnotation,
                  onInteractionChange: (e) => $e(n, e),
                  originatingTurn: N,
                  pageCount: U,
                  pageNumber: n,
                  pageSize: Tn(e, Kn),
                  path: P,
                  threadId: W,
                  title: F,
                  zoomScale: Kn / 100,
                }),
                e,
                `${P}:${n}:browse`,
              );
            })
          : null),
      (n[233] = R),
      (n[234] = B),
      (n[235] = $),
      (n[236] = s),
      (n[237] = q),
      (n[238] = G),
      (n[239] = I),
      (n[240] = Pn),
      (n[241] = v),
      (n[242] = E),
      (n[243] = z),
      (n[244] = J),
      (n[245] = Q),
      (n[246] = zn),
      (n[247] = hn),
      (n[248] = le),
      (n[249] = N),
      (n[250] = Ht),
      (n[251] = P),
      (n[252] = je),
      (n[253] = L),
      (n[254] = Z),
      (n[255] = W),
      (n[256] = F),
      (n[257] = U),
      (n[258] = Kn),
      (n[259] = Kr))
    : (Kr = n[259]);
  let qr;
  n[260] !== Pr ||
  n[261] !== Fr ||
  n[262] !== Ir ||
  n[263] !== Lr ||
  n[264] !== Rr ||
  n[265] !== Gr ||
  n[266] !== Kr
    ? ((qr = (0, X.jsxs)(`section`, {
        className: `relative flex h-full min-h-0 flex-col bg-background-artifact-preview`,
        children: [Pr, Fr, Ir, Lr, Rr, Gr, Kr],
      })),
      (n[260] = Pr),
      (n[261] = Fr),
      (n[262] = Ir),
      (n[263] = Lr),
      (n[264] = Rr),
      (n[265] = Gr),
      (n[266] = Kr),
      (n[267] = qr))
    : (qr = n[267]);
  let Jr;
  if (n[268] !== Ar || n[269] !== jr.document || n[270] !== Mr || n[271] !== Nr || n[272] !== qr) {
    let e = (0, X.jsx)(Ar, {
      contentSelector: `[data-testid='docx-preview-panel']`,
      message: jr.document,
      onDismiss: Mr,
      open: Nr,
      children: qr,
    });
    ((Jr = (0, X.jsx)(We, { children: e })),
      (n[268] = Ar),
      (n[269] = jr.document),
      (n[270] = Mr),
      (n[271] = Nr),
      (n[272] = qr),
      (n[273] = Jr));
  } else Jr = n[273];
  return Jr;
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
    ee;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((ee = []), (t[0] = ee)) : (ee = t[0]);
  let [te, h] = (0, Y.useState)(ee),
    [g, _] = (0, Y.useState)(!1),
    [v, ne] = (0, Y.useState)(0),
    y;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        let e = l.current,
          t = u.current;
        e != null && t != null && (_n({ bodyContainer: e, styleContainer: t }), h([]), ne(0));
      }),
      (t[1] = y))
    : (y = t[1]);
  let re = y,
    b;
  t[2] !== n || t[3] !== c || t[4] !== i || t[5] !== a || t[6] !== s || t[7] !== o
    ? ((b = () => {
        let e = l.current,
          t = u.current;
        if (!c || e == null || t == null || f.current) return;
        if (((f.current = !0), re(), o == null)) {
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
            (_(n), h(o), ne(Math.max(o.length, 1)), m(`ready`), (s || !n) && a(e));
          }));
      }),
      (t[2] = n),
      (t[3] = c),
      (t[4] = i),
      (t[5] = a),
      (t[6] = s),
      (t[7] = o),
      (t[8] = b))
    : (b = t[8]);
  let x = b,
    S;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => {
        ((d.current += 1), (f.current = !1), re());
      }),
      (t[9] = S))
    : (S = t[9]);
  let ie = S,
    C;
  t[10] === x
    ? (C = t[11])
    : ((C = (e) => {
        if (e == null) {
          (ie(), (l.current = null));
          return;
        }
        ((l.current = e), x());
      }),
      (t[10] = x),
      (t[11] = C));
  let w = C,
    T;
  t[12] === x
    ? (T = t[13])
    : ((T = (e) => {
        if (e == null) {
          (ie(), (u.current = null));
          return;
        }
        ((u.current = e), x());
      }),
      (t[12] = x),
      (t[13] = T));
  let E = T,
    D;
  return (
    t[14] !== g || t[15] !== p || t[16] !== te || t[17] !== w || t[18] !== E || t[19] !== v
      ? ((D = {
          bodyContainerElementRef: l,
          bodyContainerRef: w,
          hasRedlines: g,
          loadState: p,
          pageElements: te,
          styleContainerRef: E,
          totalPages: v,
        }),
        (t[14] = g),
        (t[15] = p),
        (t[16] = te),
        (t[17] = w),
        (t[18] = E),
        (t[19] = v),
        (t[20] = D))
      : (D = t[20]),
    D
  );
}
function fn(e, t, n, r, i) {
  let a = (0, Y.useRef)(null),
    o = (0, Y.useRef)(null),
    [s, c] = (0, Y.useState)(null),
    [l, u] = (0, Y.useState)({ kind: `fit-width` }),
    d =
      l.kind === `fit-width`
        ? yn({
            bodyContainer: e.current,
            bodyContainerWidth: s,
            endViewportInset: t,
            thumbnailRailSafeInset: n,
            zoomPercent: jn,
          })
        : null,
    f = l.kind === `fit-width` ? (d ?? r) : l.zoomPercent,
    p = b((r) => {
      let a = Math.floor(e.current?.clientWidth || r.contentRect.width),
        o = yn({
          bodyContainer: e.current,
          bodyContainerWidth: a,
          endViewportInset: t,
          thumbnailRailSafeInset: n,
          zoomPercent: f,
        });
      (o != null && i(o), c((e) => (e === a ? e : a)));
    }),
    m = x(() => {
      a.current = null;
    }),
    ee = (e) => {
      u({ kind: `percentage`, zoomPercent: Tt(e) });
    },
    te = () => {
      let r = l.kind === `fit-width` ? null : wn(e.current);
      yn({
        bodyContainer: e.current,
        bodyContainerWidth: s,
        endViewportInset: t,
        thumbnailRailSafeInset: n,
        zoomPercent: f,
      }) != null &&
        (u({ kind: `fit-width` }),
        r != null &&
          window.requestAnimationFrame(() => {
            r.scrollIntoView({ block: `center`, inline: `center` });
          }));
    },
    h = x((e) => {
      e.ctrlKey &&
        (e.preventDefault(),
        u((t) => ({
          kind: `percentage`,
          zoomPercent: wt(t.kind === `percentage` ? t.zoomPercent : f, e.deltaY),
        })));
    }),
    g = x((e) => {
      if (e.touches.length !== 2) {
        m();
        return;
      }
      e.preventDefault();
      let t = e.touches.item(0),
        n = e.touches.item(1);
      t != null &&
        n != null &&
        (a.current = { distance: Ct(t.clientX, t.clientY, n.clientX, n.clientY), zoomPercent: f });
    }),
    _ = x((e) => {
      let t = a.current;
      if (e.touches.length !== 2 || t == null) return;
      e.preventDefault();
      let n = e.touches.item(0),
        r = e.touches.item(1);
      if (n == null || r == null) return;
      let i = Ct(n.clientX, n.clientY, r.clientX, r.clientY);
      i <= 0 ||
        t.distance <= 0 ||
        u({
          kind: `percentage`,
          zoomPercent: Dt({
            initialDistance: t.distance,
            initialZoomPercent: t.zoomPercent,
            nextDistance: i,
          }),
        });
    }),
    v = (0, Y.useCallback)(
      (e) => {
        let t = o.current;
        t !== e &&
          (t != null &&
            (t.removeEventListener(`touchcancel`, m, !0),
            t.removeEventListener(`touchend`, m, !0),
            t.removeEventListener(`touchmove`, _, !0),
            t.removeEventListener(`touchstart`, g, !0),
            t.removeEventListener(`wheel`, h, !0)),
          (o.current = e),
          p(e),
          e != null &&
            (e.addEventListener(`touchcancel`, m, !0),
            e.addEventListener(`touchend`, m, !0),
            e.addEventListener(`touchmove`, _, { capture: !0, passive: !1 }),
            e.addEventListener(`touchstart`, g, { capture: !0, passive: !1 }),
            e.addEventListener(`wheel`, h, { capture: !0, passive: !1 })));
      },
      [m, _, g, h, p],
    );
  return {
    fitEndInset: l.kind === `fit-width` ? t : 0,
    fitToWidth: te,
    isZoomToFitSelected: l.kind === `fit-width`,
    previewStyle: { "--codex-docx-preview-zoom": `${f / 100}` },
    resizeRef: v,
    setZoomPercent: ee,
    zoomPercent: f,
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
    ie(e) &&
    e.localArtifactAnnotationContext?.artifactKind === `document` &&
    e.localArtifactAnnotationContext.path === t
  );
}
var Dn, Y, On, X, Z, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln;
function Rn() {
  return (Rn = e(() => {
    ((Dn = m()),
      z(),
      Ye(),
      Qe(),
      Ve(),
      d(),
      y(),
      O(),
      (Y = i()),
      (On = a()),
      _(),
      A(),
      ft(),
      Oe(),
      mt(),
      nt(),
      $e(),
      Ee(),
      te(),
      de(),
      M(),
      Ae(),
      ae(),
      Me(),
      je(),
      S(),
      v(),
      rt(),
      at(),
      B(),
      Je(),
      we(),
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
      he(),
      Ot(),
      Mt(),
      (X = s()),
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
      (In = p(
        () =>
          import(`./docx-preview-8513c2dacad2.js`).then(
            (e) => e,
            () => null,
          ),
        __vite__mapDeps([0, 1]),
        import.meta.url,
      )),
      (Ln = ne({
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
//# sourceMappingURL=docx-preview-panel-6967e12ab31c.js.map
