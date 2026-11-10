const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pdf_viewer-1a8a21694c8e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CC as r,
  Dk as i,
  FBt as a,
  LNt as o,
  MFt as s,
  OFt as c,
  P7 as l,
  PBt as u,
  Qst as d,
  Rrt as f,
  Sft as p,
  Vrt as m,
  XOt as h,
  XS as g,
  Y3 as _,
  Z3 as v,
  ZSt as y,
  bft as b,
  dO as x,
  gB as S,
  hB as C,
  iCt as w,
  jFt as T,
  kFt as E,
  kk as D,
  lO as O,
  nB as k,
  nCt as A,
  okt as ee,
  qrt as te,
  rB as j,
  sct as M,
  tkt as N,
  vst as P,
  wE as F,
  yst as I,
  z9 as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $8t as re,
  J8t as ie,
  Jb as ae,
  Jkr as L,
  LOr as R,
  L_t as oe,
  MOr as se,
  O_t as ce,
  P_t as le,
  Q8t as ue,
  Qb as de,
  Wkr as fe,
  X8t as pe,
  Xhr as z,
  Yb as B,
  agr as me,
  aln as he,
  cln as V,
  d8t as ge,
  f8t as H,
  j_t as U,
  l8t as _e,
  lDn as W,
  lx as ve,
  n5t as ye,
  ngr as be,
  o8t as xe,
  oln as Se,
  pb as Ce,
  sDn as we,
  s_t as Te,
  sx as Ee,
  u8t as De,
  ux as G,
  vTn as Oe,
  v_t as ke,
  w_t as Ae,
  xMr as je,
  xTn as Me,
  yMr as Ne,
  zOr as Pe,
} from "./app-initial-ad16eaadf81f.js";
import {
  $u as Fe,
  Hu as Ie,
  Uu as Le,
  Wu as Re,
  cd as ze,
  ed as Be,
  id as Ve,
  rd as He,
  sd as K,
  ud as Ue,
} from "./app-primary-3e00728c2a4c.js";
import { a as We, t as Ge } from "./PopcornManualEditHeaderControls-45cc4843f346.js";
import {
  c as Ke,
  i as qe,
  l as Je,
  n as Ye,
  o as Xe,
  s as Ze,
  u as Qe,
} from "./artifact-annotation-batch-controls-a9289185dbeb.js";
import { i as $e, n as et, r as tt, t as nt } from "./use-annotation-mode-exit-12889926245c.js";
import { n as rt, t as it } from "./annotation-mode-icon-eafbc4a6687a.js";
import { n as at, t as ot } from "./annotation-mode-analytics-dce005afe0df.js";
import { n as st, t as ct } from "./layout-21137ff640c7.js";
import { r as q } from "./artifact-accessories-af67956ed42b.js";
import { n as lt, t as ut } from "./presentation-annotation-coachmark-c41c219bb3a0.js";
import { n as J, t as dt } from "./menu-items-83f6bf1513b1.js";
import { n as ft, t as pt } from "./header-8bb9b418457b.js";
import { n as mt, t as ht } from "./artifact-originating-turn-f3d50650c1c0.js";
import { n as gt, r as _t, t as vt } from "./artifact-preview-header-5bfab4685b80.js";
import { n as yt, t as bt } from "./artifact-preview-status-5e6617ccf3e2.js";
import { o as xt, t as St } from "./artifact-preview-zoom-be9e5386c42a.js";
import {
  a as Ct,
  c as wt,
  i as Tt,
  l as Et,
  r as Dt,
  s as Ot,
  t as kt,
} from "./paged-thumbnail-rail-layout-4a361b31ca3c.js";
import { n as At, t as jt } from "./annotation-comment-editor-card-cfcadbd19454.js";
import { n as Mt, r as Nt, t as Pt } from "./document-69997017193a.js";
function Ft(e) {
  return `${e.localPdfContext?.path ?? ``}:${e.localPdfContext?.pageNumber ?? 0}:${e.position.line}`;
}
function Y(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `num` in e &&
    typeof e.num == `number` &&
    `gen` in e &&
    typeof e.gen == `number`
  );
}
var It;
function Lt() {
  return (Lt = e(() => {
    It = class {
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
        if (!Y(t)) return null;
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
            this.scrollRootRef.current?.querySelector(`${this.pageSelector}[data-page-number="${e}"]`) ?? null
          )?.scrollIntoView({ block: `start`, inline: `nearest` });
      }
    };
  }))();
}
function Rt(e) {
  let t = (0, zt.c)(8),
    { deferMs: n, page: r, pageSelector: i, pdfDocument: a, scrollRootRef: o } = e,
    s = (0, Bt.useRef)(null),
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
            let e = await Pt(),
              n = await r.getAnnotations();
            if (c || n.length === 0) return;
            let s = r.getViewport({ scale: 1 }),
              l = new It({ pageSelector: i, pdfDocument: a, scrollRootRef: o });
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
            }).render({ annotations: n, div: t, linkService: l, page: r, renderForms: !1, viewport: s });
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
    (0, Bt.useEffect)(c, l));
  let u;
  return (
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, Vt.jsx)(`div`, { ref: s, className: `annotationLayer` })), (t[7] = u))
      : (u = t[7]),
    u
  );
}
var zt, Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    ((zt = u()), (Bt = a()), Mt(), Lt(), (Vt = o()));
  }))();
}
function Ut(e) {
  let n = (0, en.c)(91),
    {
      ref: r,
      annotationBatchingEnabled: i,
      annotationSourcePath: a,
      comments: o,
      editingDisabled: c,
      getOriginatingTurn: u,
      isCommentMode: f,
      nextCommentNumber: p,
      onCommentsChange: m,
      onDraftActiveChange: h,
      onFocusAnnotation: g,
      onInteractionChange: _,
      onStarted: v,
      onSendBatch: y,
      requestEditsEnabled: x,
      originatingTurn: C,
      conversationId: w,
      page: T,
      pageCount: E,
      pageNumber: D,
      pageSize: O,
      path: k,
      threadId: A,
      title: j,
    } = e,
    M = c !== void 0 && c,
    N = x !== void 0 && x,
    P = t(d),
    F = ee(),
    I = N || i,
    ne;
  n[0] === M ? (ne = n[1]) : ((ne = () => M), (n[0] = M), (n[1] = ne));
  let re = S(ne),
    ie = (0, tn.useRef)(null),
    ae;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = () => (
        (ie.current = Symbol()),
        () => {
          ie.current = null;
        }
      )),
      (n[2] = ae))
    : (ae = n[2]);
  let L;
  (n[3] !== w || n[4] !== T || n[5] !== D || n[6] !== k
    ? ((L = [w, T, D, k]), (n[3] = w), (n[4] = T), (n[5] = D), (n[6] = k), (n[7] = L))
    : (L = n[7]),
    (0, tn.useEffect)(ae, L));
  let R;
  if (n[8] !== o || n[9] !== D) {
    R = [];
    for (let e of o) {
      if (e.localPdfContext?.pageNumber !== D) continue;
      let t = qt(e),
        n = e.localPdfCommentMetadata;
      t != null &&
        n != null &&
        R.push({ id: Ft(e), label: e.position.line, body: Jt(e), anchor: t, pageSize: n.pageSize });
    }
    ((n[8] = o), (n[9] = D), (n[10] = R));
  } else R = n[10];
  let oe;
  n[11] !== o || n[12] !== m
    ? ((oe = (e, t) => {
        m((n) => Ot(n, o, e, t, Ft));
      }),
      (n[11] = o),
      (n[12] = m),
      (n[13] = oe))
    : (oe = n[13]);
  let se = oe,
    ce = `${w}:${k}:${D}`,
    le;
  n[14] !== F || n[15] !== N
    ? ((le = N
        ? F.formatMessage({
            id: `artifactViewer.requestEdits`,
            defaultMessage: `Request edits`,
            description: `Button label for requesting edits to an artifact`,
          })
        : F.formatMessage({
            id: `artifactPdfPreview.askForChange`,
            defaultMessage: `Ask for change`,
            description: `Button label for starting a contextual PDF annotation from selected text`,
          })),
      (n[14] = F),
      (n[15] = N),
      (n[16] = le))
    : (le = n[16]);
  let ue;
  n[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((ue = Re()), (n[17] = ue)) : (ue = n[17]);
  let de;
  n[18] === F
    ? (de = n[19])
    : ((de = (e) =>
        F.formatMessage(
          {
            id: `artifactPdfPreview.commentMarkerLabel`,
            defaultMessage: `PDF annotation {commentNumber}`,
            description: `Accessible label for a placed PDF annotation marker`,
          },
          { commentNumber: e },
        )),
      (n[18] = F),
      (n[19] = de));
  let fe;
  n[20] !== f || n[21] !== h || n[22] !== D || n[23] !== P
    ? ((fe = (e) => {
        (e && !f && at(P, { surface: `file_artifact` }), h?.(D, e));
      }),
      (n[20] = f),
      (n[21] = h),
      (n[22] = D),
      (n[23] = P),
      (n[24] = fe))
    : (fe = n[24]);
  let pe;
  n[25] !== u || n[26] !== f || n[27] !== v || n[28] !== C || n[29] !== P || n[30] !== A
    ? ((pe = (e) => {
        (ge(
          P,
          { artifactType: `pdf`, importKind: `pdf`, originatingTurn: u == null ? C : u(), threadId: A },
          { annotationModeEnabled: f, startSource: e },
        ),
          v?.());
      }),
      (n[25] = u),
      (n[26] = f),
      (n[27] = v),
      (n[28] = C),
      (n[29] = P),
      (n[30] = A),
      (n[31] = pe))
    : (pe = n[31]);
  let z;
  n[32] !== P || n[33] !== A
    ? ((z = () => De(P, { artifactType: `pdf`, importKind: `pdf`, threadId: A })),
      (n[32] = P),
      (n[33] = A),
      (n[34] = z))
    : (z = n[34]);
  let B;
  n[35] !== I || n[36] !== se || n[37] !== y
    ? ((B = I
        ? (e, t) => {
            (se(e, t), y?.());
          }
        : void 0),
      (n[35] = I),
      (n[36] = se),
      (n[37] = y),
      (n[38] = B))
    : (B = n[38]);
  let me;
  n[39] === m
    ? (me = n[40])
    : ((me = (e) => m((t) => t.filter((t) => Ft(t) !== e))), (n[39] = m), (n[40] = me));
  let he;
  n[41] !== a ||
  n[42] !== I ||
  n[43] !== w ||
  n[44] !== u ||
  n[45] !== f ||
  n[46] !== re ||
  n[47] !== p ||
  n[48] !== m ||
  n[49] !== y ||
  n[50] !== C ||
  n[51] !== T ||
  n[52] !== E ||
  n[53] !== D ||
  n[54] !== k ||
  n[55] !== P ||
  n[56] !== A ||
  n[57] !== j
    ? ((he = async (e) => {
        let { anchor: t, pageSize: n, body: r, submitMode: i, submitSource: o } = e,
          c = ie.current,
          d = Kt({ anchor: t, pageSize: n }),
          h = crypto.randomUUID(),
          g;
        try {
          g = await Yt({
            anchor: t,
            commentId: h,
            markerLabel: String(p),
            page: T,
            pageNumber: D,
            pageSize: n,
          });
        } catch {
          g = void 0;
        }
        if (re() || c == null || ie.current !== c) return `canceled`;
        let _ = b({
          body: r,
          line: p,
          metadata: d,
          pageCount: E,
          pageNumber: D,
          path: k,
          screenshot: g,
          sourcePath: a,
          title: j,
        });
        return (
          je(P, l, { commentType: d.kind, submitMode: i }),
          H(
            P,
            { artifactType: `pdf`, importKind: `pdf`, originatingTurn: u == null ? C : u(), threadId: A },
            { annotationModeEnabled: f, annotationTargetKind: d.kind, submitMode: i, submitSource: o },
          ),
          i === `direct` && !I
            ? s.dispatchHostMessage({
                type: `pdf-direct-comment`,
                body: r,
                comment: _,
                conversationId: w,
                sessionId: h,
              })
            : (m((e) => [...e, _]), i === `direct` && y?.()),
          `submitted`
        );
      }),
      (n[41] = a),
      (n[42] = I),
      (n[43] = w),
      (n[44] = u),
      (n[45] = f),
      (n[46] = re),
      (n[47] = p),
      (n[48] = m),
      (n[49] = y),
      (n[50] = C),
      (n[51] = T),
      (n[52] = E),
      (n[53] = D),
      (n[54] = k),
      (n[55] = P),
      (n[56] = A),
      (n[57] = j),
      (n[58] = he))
    : (he = n[58]);
  let V;
  n[59] !== F || n[60] !== P
    ? ((V = () =>
        P.get(te).danger(
          F.formatMessage({
            id: `artifactAnnotationComment.submitError`,
            defaultMessage: `Unable to submit annotation`,
            description: `Toast shown when preparing an annotation for saving or sending fails`,
          }),
          { errorAnalytics: { toastId: `artifactAnnotationComment.submitError` } },
        )),
      (n[59] = F),
      (n[60] = P),
      (n[61] = V))
    : (V = n[61]);
  let U;
  n[62] !== I || n[63] !== w || n[64] !== F || n[65] !== D || n[66] !== k || n[67] !== R || n[68] !== j
    ? ((U = (e) => {
        let t = e.body;
        if (e.target.mode === `edit`) {
          let n = e.target.annotationId;
          t = R.find((e) => e.id === n)?.body ?? e.body;
        }
        let n = Gt({
          anchor: e.anchor,
          body: t,
          conversationId: w,
          pageNumber: D,
          pageSize: e.pageSize,
          path: k,
          target: e.target.mode === `edit` ? { mode: `edit`, commentId: e.target.annotationId } : e.target,
          title: j,
        });
        return (0, nn.jsx)(
          jt,
          {
            allowImageAttachments: !1,
            allowDirectSubmitOnEdit: I,
            createSubmitButtonSize: `formatToolbar`,
            defaultCreateSubmitMode: I ? `saved` : `direct`,
            inputAriaLabel: F.formatMessage({
              id: `artifactPdfPreview.commentInput`,
              defaultMessage: `PDF annotation comment`,
              description: `Aria label for the PDF annotation comment input`,
            }),
            keyboardEventTarget: typeof window > `u` ? void 0 : window,
            placeholder: F.formatMessage({
              id: `artifactAnnotationComment.placeholder`,
              defaultMessage: `Describe a change or ask a question`,
              description: `Placeholder text for an artifact annotation comment editor`,
            }),
            session: { ...n, draftBody: e.body },
            windowHeight: 208,
            onCancel: e.onCancel,
            onDelete: e.onDelete,
            onDirectSubmit: e.onDirectSubmit,
            onEscape: e.onEscape,
            onBodyChange: e.onBodyChange,
            onDictationBusyChange: e.onDictationBusyChange,
            onLightDismissibilityChange: rn,
            onMounted: rn,
            onSubmit: e.onSubmit,
          },
          n.sessionId,
        );
      }),
      (n[62] = I),
      (n[63] = w),
      (n[64] = F),
      (n[65] = D),
      (n[66] = k),
      (n[67] = R),
      (n[68] = j),
      (n[69] = U))
    : (U = n[69]);
  let _e;
  return (
    n[70] !== se ||
    n[71] !== M ||
    n[72] !== f ||
    n[73] !== p ||
    n[74] !== g ||
    n[75] !== _ ||
    n[76] !== O ||
    n[77] !== R ||
    n[78] !== r ||
    n[79] !== de ||
    n[80] !== fe ||
    n[81] !== pe ||
    n[82] !== z ||
    n[83] !== B ||
    n[84] !== me ||
    n[85] !== he ||
    n[86] !== V ||
    n[87] !== U ||
    n[88] !== ce ||
    n[89] !== le
      ? ((_e = (0, nn.jsx)(
          Fe,
          {
            ref: r,
            theme: `codex`,
            records: R,
            onFocusAnnotation: g,
            onInteractionChange: _,
            pageSize: O,
            isAnnotationMode: f,
            editingDisabled: M,
            nextAnnotationNumber: p,
            askForEditLabel: le,
            shortcutLabel: ue,
            getAnnotationMarkerLabel: de,
            onDraftActiveChange: fe,
            onStarted: pe,
            onPillShown: z,
            onEdit: se,
            onEditDirectSubmit: B,
            onDelete: me,
            onCreate: he,
            onCreateError: V,
            renderPreviewBody: Wt,
            renderEditor: U,
          },
          ce,
        )),
        (n[70] = se),
        (n[71] = M),
        (n[72] = f),
        (n[73] = p),
        (n[74] = g),
        (n[75] = _),
        (n[76] = O),
        (n[77] = R),
        (n[78] = r),
        (n[79] = de),
        (n[80] = fe),
        (n[81] = pe),
        (n[82] = z),
        (n[83] = B),
        (n[84] = me),
        (n[85] = he),
        (n[86] = V),
        (n[87] = U),
        (n[88] = ce),
        (n[89] = le),
        (n[90] = _e))
      : (_e = n[90]),
    _e
  );
}
function Wt(e) {
  return (0, nn.jsx)(Ie, { body: e });
}
function Gt({
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
function Kt({ anchor: e, pageSize: t }) {
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
function qt(e) {
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
function Jt(e) {
  return e.content.flatMap((e) => (e.content_type === `text` ? [e.text] : [])).join(`
`);
}
async function Yt({ anchor: e, commentId: t, markerLabel: n, page: r, pageNumber: i, pageSize: a }) {
  let o = Xt(e, a),
    s = Math.min(2, Math.max(1, 1200 / o.width)),
    c = document.createElement(`canvas`);
  if (((c.width = Math.ceil(a.width * s)), (c.height = Math.ceil(a.height * s)), c.getContext(`2d`) == null))
    throw Error(`Unable to create PDF screenshot canvas context`);
  await r.render({ canvas: c, viewport: r.getViewport({ scale: s }) }).promise;
  let l = document.createElement(`canvas`);
  ((l.width = Math.ceil(o.width * s)), (l.height = Math.ceil(o.height * s)));
  let u = l.getContext(`2d`);
  if (u == null) throw Error(`Unable to create PDF crop canvas context`);
  return (
    u.drawImage(c, o.x * s, o.y * s, o.width * s, o.height * s, 0, 0, l.width, l.height),
    Qt({ anchor: e, context: u, crop: o, markerLabel: n, scale: s }),
    { commentId: t, dataUrl: l.toDataURL(`image/png`), height: l.height, pageNumber: i, width: l.width }
  );
}
function Xt(e, t) {
  if (e.kind === `region`) {
    let n = Math.max(24, Math.min(72, Math.min(e.rect.width, e.rect.height) * 0.25));
    return Zt(
      { x: e.rect.x - n, y: e.rect.y - n, width: e.rect.width + n * 2, height: e.rect.height + n * 2 },
      t,
    );
  }
  return Zt({ x: e.point.x - 180, y: e.point.y - 120, width: 360, height: 240 }, t);
}
function Zt(e, t) {
  let n = Math.min(Math.max(e.width, 1), t.width),
    r = Math.min(Math.max(e.height, 1), t.height);
  return { x: X(e.x, 0, t.width - n), y: X(e.y, 0, t.height - r), width: n, height: r };
}
function Qt({ anchor: e, context: t, crop: n, markerLabel: r, scale: i }) {
  if (
    (t.save(),
    (t.strokeStyle = ze),
    (t.fillStyle = ze),
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
    (t.strokeRect(a, o, s, c), $t(t, r, a + s, o));
  } else $t(t, r, (e.point.x - n.x) * i, (e.point.y - n.y) * i);
  t.restore();
}
function $t(e, t, n, r) {
  (e.beginPath(),
    e.arc(n, r, 11, 0, Math.PI * 2),
    e.fill(),
    (e.lineWidth = 2),
    (e.strokeStyle = `#fff`),
    e.stroke(),
    (e.fillStyle = `#fff`),
    e.fillText(t, n, r + 0.5));
}
function X(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var en, tn, nn, rn;
function an() {
  return (an = e(() => {
    ((en = u()),
      f(),
      Ue(),
      K(),
      Be(),
      y(),
      M(),
      (tn = a()),
      h(),
      At(),
      ot(),
      m(),
      T(),
      Ne(),
      n(),
      C(),
      xe(),
      Le(),
      (nn = o()),
      (rn = () => {}));
  }))();
}
function on(e) {
  let t = (0, sn.c)(10),
    { deferMs: n, page: r, search: i } = e,
    a = (0, cn.useRef)(null),
    o;
  t[0] === n ? (o = t[1]) : ((o = () => n), (t[0] = n), (t[1] = o));
  let s = (0, cn.useEffectEvent)(o),
    c;
  t[2] !== s || t[3] !== r || t[4] !== i
    ? ((c = () => {
        let e = a.current;
        if (e == null) return;
        let t = e;
        t.innerHTML = ``;
        let n = !1,
          o = null,
          c,
          l = null,
          u = async function () {
            let e = await Pt();
            if (n) return;
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
            if (n) return;
            c = i?.registerTextLayer(r.pageNumber - 1, o);
            let a = document.createElement(`div`);
            ((a.className = `endOfContent`), t.append(a));
          };
        return (
          (l = setTimeout(() => {
            u();
          }, s())),
          () => {
            ((n = !0), l != null && clearTimeout(l), c?.(), o?.cancel(), (t.innerHTML = ``));
          }
        );
      }),
      (t[2] = s),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c))
    : (c = t[5]);
  let l;
  (t[6] !== r || t[7] !== i ? ((l = [r, i]), (t[6] = r), (t[7] = i), (t[8] = l)) : (l = t[8]),
    (0, cn.useEffect)(c, l));
  let u;
  return (
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, ln.jsx)(`div`, { ref: a, className: `textLayer` })), (t[9] = u))
      : (u = t[9]),
    u
  );
}
var sn, cn, ln;
function un() {
  return (un = e(() => {
    ((sn = u()), (cn = a()), Mt(), (ln = o()));
  }))();
}
function dn(e) {
  let t = (0, vn.c)(36),
    { onBeforeZoom: n, pageViewportSize: r, pageWidth: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = { kind: `page-width` }), (t[0] = a)) : (a = t[0]);
  let [o, s] = (0, Z.useState)(a),
    [c, l] = (0, Z.useState)(!1),
    [u, d] = (0, Z.useState)(0),
    f = (0, Z.useRef)(null),
    p = (0, Z.useRef)(null),
    m = (0, Z.useRef)(null),
    h;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => {
        (l(!0),
          f.current != null && window.clearTimeout(f.current),
          (f.current = window.setTimeout(() => {
            ((f.current = null), l(!1), d(fn));
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
    (0, Z.useEffect)(_, v));
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
    ? ((x = (e) => pn({ pageViewportSize: r, pageWidth: i, resize: e })), (t[6] = r), (t[7] = i), (t[8] = x))
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
        b({ kind: `percentage`, value: _n(e / 100) });
      }),
      (t[11] = b),
      (t[12] = T));
  let E = T,
    D;
  t[13] !== S || t[14] !== n
    ? ((D = () => {
        (n({ kind: `center` }), g(), s((e) => ({ kind: `percentage`, value: hn(S(e), `out`) })));
      }),
      (t[13] = S),
      (t[14] = n),
      (t[15] = D))
    : (D = t[15]);
  let O = D,
    k;
  t[16] !== S || t[17] !== n
    ? ((k = () => {
        (n({ kind: `center` }), g(), s((e) => ({ kind: `percentage`, value: hn(S(e), `in`) })));
      }),
      (t[16] = S),
      (t[17] = n),
      (t[18] = k))
    : (k = t[18]);
  let A = k,
    ee;
  t[19] !== S || t[20] !== n
    ? ((ee = (e) => {
        e.ctrlKey &&
          (e.preventDefault(),
          e.deltaY !== 0 &&
            (m.current != null && window.clearTimeout(m.current),
            (m.current = window.setTimeout(() => {
              ((p.current = null), (m.current = null));
            }, Dn)),
            n({ clientX: e.clientX, clientY: e.clientY, kind: `point` }),
            g(),
            s((t) => {
              let n = S(t),
                r = Math.max(-20, Math.min(Tn, e.deltaY)),
                i = _n((p.current?.rawZoom ?? n) * Math.exp(-r * wn));
              return ((p.current = { rawZoom: i }), { kind: `percentage`, value: gn(i) });
            })));
      }),
      (t[19] = S),
      (t[20] = n),
      (t[21] = ee))
    : (ee = t[21]);
  let te = ee,
    j;
  t[22] !== S || t[23] !== o
    ? ((j = Math.round(S(o) * 100)), (t[22] = S), (t[23] = o), (t[24] = j))
    : (j = t[24]);
  let M;
  return (
    t[25] !== O ||
    t[26] !== w ||
    t[27] !== te ||
    t[28] !== A ||
    t[29] !== c ||
    t[30] !== o ||
    t[31] !== b ||
    t[32] !== E ||
    t[33] !== j ||
    t[34] !== u
      ? ((M = {
          beginScaleChange: g,
          decreaseZoom: O,
          fitToWidth: w,
          handleWheel: te,
          increaseZoom: A,
          isZooming: c,
          resize: o,
          setResize: b,
          setZoomPercent: E,
          zoomEndTick: u,
          zoomPercent: j,
        }),
        (t[25] = O),
        (t[26] = w),
        (t[27] = te),
        (t[28] = A),
        (t[29] = c),
        (t[30] = o),
        (t[31] = b),
        (t[32] = E),
        (t[33] = j),
        (t[34] = u),
        (t[35] = M))
      : (M = t[35]),
    M
  );
}
function fn(e) {
  return e + 1;
}
function pn({ pageViewportSize: e, pageWidth: t, resize: n }) {
  if (n.kind === `percentage`) return _n(n.value);
  let r = (e?.width ?? yn.width) * bn;
  return t == null || t <= 0 || r <= 0 ? 1 : Math.min(1, t / r);
}
function mn({ pageViewportSize: e, pageWidth: t, resize: n }) {
  let r = e ?? yn,
    i = r.width / r.height,
    a = r.width * bn * pn({ pageViewportSize: e, pageWidth: t, resize: n });
  return { height: Math.round(a / i), width: Math.round(a) };
}
function hn(e, t) {
  let n = _n(e);
  if (t === `in`) {
    for (let e of On) if (e > n + Cn) return e;
    return On[On.length - 1];
  }
  for (let e = On.length - 1; e >= 0; --e) {
    let t = On[e];
    if (t < n - Cn) return t;
  }
  return On[0];
}
function gn(e) {
  for (let t of On) if (Math.abs(e - t) <= t * En) return t;
  return e;
}
function _n(e) {
  return Math.min(Sn, Math.max(xn, e));
}
var vn, Z, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On;
function kn() {
  return (kn = e(() => {
    ((vn = u()),
      (Z = a()),
      (yn = { height: 792, width: 612 }),
      (bn = 96 / 72),
      (xn = 0.3),
      (Sn = 8),
      (Cn = 1e-4),
      (wn = 0.005),
      (Tn = 20),
      (En = 0.02),
      (Dn = 200),
      (On = [xn, 0.4, 0.5, 0.67, 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5, 6, 7, Sn]));
  }))();
}
function An(e) {
  return typeof e == `object` && !!e && `name` in e && e.name === `RenderingCancelledException`;
}
var jn, Mn, Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    ((jn = u()),
      (Mn = a()),
      h(),
      Ht(),
      an(),
      un(),
      kn(),
      (Nn = o()),
      (Pn = (0, Mn.memo)(function (e) {
        let t = (0, jn.c)(88),
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
            search: f,
            isZooming: p,
            onRenderError: m,
            onRendered: h,
            onViewportReady: g,
            onSourceClick: _,
            zoomEndTick: v,
          } = e,
          y = ee(),
          b = (0, Mn.useRef)(null),
          x = (0, Mn.useRef)(null),
          [S, C] = (0, Mn.useState)(null),
          [w, T] = (0, Mn.useState)(null),
          [E, D] = (0, Mn.useState)(!1),
          O = S?.pdfDocument === c && S.pageNumber === i,
          k = O ? S.page : null,
          A = O ? S.viewportSize : null,
          te = A ?? o,
          j;
        t[0] !== s || t[1] !== l || t[2] !== te
          ? ((j = mn({ pageViewportSize: te, pageWidth: s, resize: l })),
            (t[0] = s),
            (t[1] = l),
            (t[2] = te),
            (t[3] = j))
          : (j = t[3]);
        let M = j,
          N = A != null && A.width > 0 ? M.width / A.width : 1,
          P = Math.abs(r - i),
          F = E || P <= 2,
          I = E || P <= 2,
          ne = E ? 50 : 50 + P * 40,
          re = ne + P * 60,
          ie,
          ae;
        (t[4] !== i || t[5] !== c || t[6] !== u
          ? ((ie = () => {
              let e = !1;
              return (
                (async function () {
                  try {
                    let t = await c.getPage(i);
                    if (e) return;
                    let n = t.getViewport({ scale: 1 });
                    C({
                      page: t,
                      pageNumber: i,
                      pdfDocument: c,
                      viewportSize: { height: n.height, width: n.width },
                    });
                  } catch {
                    e || T({ pdfDocument: c, pageNumber: i, renderRequestKey: u });
                  }
                })(),
                () => {
                  e = !0;
                }
              );
            }),
            (ae = [i, c, u]),
            (t[4] = i),
            (t[5] = c),
            (t[6] = u),
            (t[7] = ie),
            (t[8] = ae))
          : ((ie = t[7]), (ae = t[8])),
          (0, Mn.useEffect)(ie, ae));
        let L, R;
        (t[9] !== r || t[10] !== w || t[11] !== E || t[12] !== m || t[13] !== i || t[14] !== c || t[15] !== u
          ? ((L = () => {
              w?.pdfDocument !== c ||
                w.pageNumber !== i ||
                w.renderRequestKey !== u ||
                (!E && r !== i) ||
                m?.();
            }),
            (R = [r, w, E, m, i, c, u]),
            (t[9] = r),
            (t[10] = w),
            (t[11] = E),
            (t[12] = m),
            (t[13] = i),
            (t[14] = c),
            (t[15] = u),
            (t[16] = L),
            (t[17] = R))
          : ((L = t[16]), (R = t[17])),
          (0, Mn.useEffect)(L, R));
        let oe, se;
        (t[18] !== A || t[19] !== g
          ? ((oe = () => {
              A != null && g?.();
            }),
            (se = [A, g]),
            (t[18] = A),
            (t[19] = g),
            (t[20] = oe),
            (t[21] = se))
          : ((oe = t[20]), (se = t[21])),
          (0, Mn.useLayoutEffect)(oe, se));
        let ce, le;
        (t[22] === d
          ? ((ce = t[23]), (le = t[24]))
          : ((le = () => {
              let e = x.current;
              if (e == null) return;
              if (typeof IntersectionObserver > `u`) {
                D(!0);
                return;
              }
              let t = new IntersectionObserver(
                (e) => {
                  let t = e[0];
                  t != null && D(t.isIntersecting || t.intersectionRatio > 0);
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
            (ce = [d]),
            (t[22] = d),
            (t[23] = ce),
            (t[24] = le)),
          (0, Mn.useEffect)(le, ce));
        let ue;
        t[25] !== M.height ||
        t[26] !== M.width ||
        t[27] !== E ||
        t[28] !== p ||
        t[29] !== m ||
        t[30] !== h ||
        t[31] !== k ||
        t[32] !== F
          ? ((ue = () => {
              let e = b.current;
              if (e == null) return;
              if (k == null || !F) {
                ((e.width = 0), (e.height = 0), k?.cleanup());
                return;
              }
              if (p) return;
              let t = k.getViewport({ scale: 1 });
              if (t.width <= 0 || M.width <= 0 || M.height <= 0) return;
              let n = !1,
                r = null,
                i = window.devicePixelRatio || 1,
                a = Math.ceil(M.width * i),
                o = Math.ceil(M.height * i);
              ((e.width = a), (e.height = o), e.getContext(`2d`)?.clearRect(0, 0, a, o));
              try {
                ((r = k.render({ canvas: e, viewport: k.getViewport({ scale: a / t.width }) })),
                  r.promise.then(
                    () => {
                      !n && E && h?.();
                    },
                    (e) => {
                      !n && E && !An(e) && m?.();
                    },
                  ));
              } catch (e) {
                E && !An(e) && m?.();
                return;
              }
              return () => {
                ((n = !0), r?.cancel());
              };
            }),
            (t[25] = M.height),
            (t[26] = M.width),
            (t[27] = E),
            (t[28] = p),
            (t[29] = m),
            (t[30] = h),
            (t[31] = k),
            (t[32] = F),
            (t[33] = ue))
          : (ue = t[33]);
        let de;
        (t[34] !== M.height ||
        t[35] !== M.width ||
        t[36] !== E ||
        t[37] !== p ||
        t[38] !== m ||
        t[39] !== h ||
        t[40] !== k ||
        t[41] !== u ||
        t[42] !== F ||
        t[43] !== v
          ? ((de = [M.height, M.width, E, p, m, h, k, u, F, v]),
            (t[34] = M.height),
            (t[35] = M.width),
            (t[36] = E),
            (t[37] = p),
            (t[38] = m),
            (t[39] = h),
            (t[40] = k),
            (t[41] = u),
            (t[42] = F),
            (t[43] = v),
            (t[44] = de))
          : (de = t[44]),
          (0, Mn.useEffect)(ue, de));
        let fe = _ == null ? void 0 : 0,
          pe;
        t[45] !== y || t[46] !== _ || t[47] !== i
          ? ((pe =
              _ == null
                ? void 0
                : y.formatMessage(
                    {
                      id: `latex.pdf.sourceNavigation`,
                      defaultMessage: `PDF page {page}. Click to locate source, or press Enter to locate the middle of this page`,
                      description: `Accessible label for a PDF page that supports navigating to its LaTeX source.`,
                    },
                    { page: i },
                  )),
            (t[45] = y),
            (t[46] = _),
            (t[47] = i),
            (t[48] = pe))
          : (pe = t[48]);
        let z;
        t[49] !== A || t[50] !== _ || t[51] !== i
          ? ((z =
              _ == null
                ? void 0
                : (e) => {
                    e.key === `Enter` &&
                      e.target === e.currentTarget &&
                      A != null &&
                      (e.preventDefault(), _(i, A.width / 2, A.height / 2));
                  }),
            (t[49] = A),
            (t[50] = _),
            (t[51] = i),
            (t[52] = z))
          : (z = t[52]);
        let B;
        t[53] !== A || t[54] !== _ || t[55] !== i
          ? ((B =
              _ == null
                ? void 0
                : (e) => {
                    if (
                      A == null ||
                      (e.target instanceof Element && e.target.closest(`a,button,input`)) ||
                      window.getSelection()?.toString()
                    )
                      return;
                    let t = e.currentTarget.getBoundingClientRect();
                    t.width > 0 &&
                      t.height > 0 &&
                      _(
                        i,
                        ((e.clientX - t.left) / t.width) * A.width,
                        ((e.clientY - t.top) / t.height) * A.height,
                      );
                  }),
            (t[53] = A),
            (t[54] = _),
            (t[55] = i),
            (t[56] = B))
          : (B = t[56]);
        let me = A == null ? void 0 : ``,
          he = k?.userUnit ?? 1,
          V;
        t[57] !== M.height || t[58] !== M.width || t[59] !== N || t[60] !== he
          ? ((V = { "--scale-factor": N, "--user-unit": he, height: M.height, width: M.width }),
            (t[57] = M.height),
            (t[58] = M.width),
            (t[59] = N),
            (t[60] = he),
            (t[61] = V))
          : (V = t[61]);
        let ge = V,
          H;
        t[62] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((H = (0, Nn.jsx)(`canvas`, { ref: b, className: `absolute inset-0 size-full` })), (t[62] = H))
          : (H = t[62]);
        let U;
        t[63] !== re ||
        t[64] !== p ||
        t[65] !== k ||
        t[66] !== a ||
        t[67] !== c ||
        t[68] !== d ||
        t[69] !== f ||
        t[70] !== I ||
        t[71] !== ne
          ? ((U =
              k == null || p || !I
                ? null
                : (0, Nn.jsxs)(Nn.Fragment, {
                    children: [
                      (0, Nn.jsx)(on, { search: f, page: k, deferMs: ne }),
                      (0, Nn.jsx)(Rt, {
                        deferMs: re,
                        page: k,
                        pageSelector: a,
                        pdfDocument: c,
                        scrollRootRef: d,
                      }),
                    ],
                  })),
            (t[63] = re),
            (t[64] = p),
            (t[65] = k),
            (t[66] = a),
            (t[67] = c),
            (t[68] = d),
            (t[69] = f),
            (t[70] = I),
            (t[71] = ne),
            (t[72] = U))
          : (U = t[72]);
        let _e;
        t[73] !== n || t[74] !== A || t[75] !== k || t[76] !== i
          ? ((_e =
              k == null || A == null || n == null
                ? null
                : (0, Nn.jsx)(
                    Ut,
                    {
                      ref: (e) => n.onAnnotationHandleChange?.(i, e),
                      annotationBatchingEnabled: n.annotationBatchingEnabled,
                      requestEditsEnabled: n.requestEditsEnabled,
                      annotationSourcePath: n.annotationSourcePath,
                      comments: n.comments,
                      conversationId: n.conversationId,
                      editingDisabled: n.editingDisabled,
                      getOriginatingTurn: n.getOriginatingTurn,
                      isCommentMode: n.isCommentMode,
                      nextCommentNumber: n.nextCommentNumber,
                      onCommentsChange: n.onCommentsChange,
                      onStarted: n.onStarted,
                      onSendBatch: n.onSendBatch,
                      onDraftActiveChange: n.onDraftActiveChange,
                      onFocusAnnotation: n.onFocusAnnotation,
                      onInteractionChange: (e) => n.onInteractionChange?.(i, e),
                      originatingTurn: n.originatingTurn,
                      page: k,
                      pageCount: n.pageCount,
                      pageNumber: i,
                      pageSize: A,
                      path: n.path,
                      threadId: n.threadId,
                      title: n.title,
                    },
                    n.requestEditsEnabled || n.isCommentMode ? `comment` : `browse`,
                  )),
            (t[73] = n),
            (t[74] = A),
            (t[75] = k),
            (t[76] = i),
            (t[77] = _e))
          : (_e = t[77]);
        let W;
        return (
          t[78] !== i ||
          t[79] !== fe ||
          t[80] !== pe ||
          t[81] !== z ||
          t[82] !== B ||
          t[83] !== me ||
          t[84] !== ge ||
          t[85] !== U ||
          t[86] !== _e
            ? ((W = (0, Nn.jsxs)(`div`, {
                ref: x,
                className: `pdfPreviewPage relative shrink-0 overflow-hidden border border-default bg-white shadow-sm`,
                "data-artifact-pdf-page": !0,
                "data-page-number": i,
                role: `group`,
                tabIndex: fe,
                "aria-label": pe,
                onKeyDown: z,
                onClick: B,
                "data-page-viewport-ready": me,
                style: ge,
                children: [H, U, _e],
              })),
              (t[78] = i),
              (t[79] = fe),
              (t[80] = pe),
              (t[81] = z),
              (t[82] = B),
              (t[83] = me),
              (t[84] = ge),
              (t[85] = U),
              (t[86] = _e),
              (t[87] = W))
            : (W = t[87]),
          W
        );
      })));
  }))();
}
var In;
function Ln() {
  return (Ln = e(() => {
    (Mt(),
      Lt(),
      E(),
      (In = class e {
        pdfDocument;
        eventBus;
        controller;
        snapshot = { query: ``, current: 0, total: 0, pending: !1 };
        listeners = new Set();
        constructor(e, t, n, r) {
          ((this.pdfDocument = e),
            (this.eventBus = t),
            (this.controller = n),
            t.on(`updatefindmatchescount`, ({ matchesCount: e }) => {
              this.update({ ...this.snapshot, ...e });
            }),
            t.on(`updatefindcontrolstate`, ({ state: e, matchesCount: t }) => {
              this.update({ ...this.snapshot, ...t, pending: e === r });
            }),
            n.setDocument(e));
        }
        static async create({ pdfDocument: t, pageSelector: n, scrollRootRef: r }) {
          await Pt();
          let {
              EventBus: i,
              PDFFindController: a,
              FindState: o,
            } = await c(
              async () => {
                let {
                  EventBus: e,
                  PDFFindController: t,
                  FindState: n,
                } = await import(`./pdf_viewer-1a8a21694c8e.js`);
                return { EventBus: e, PDFFindController: t, FindState: n };
              },
              __vite__mapDeps([0, 1, 2, 3]),
              import.meta.url,
            ),
            s = new i(),
            l = new a({
              eventBus: s,
              linkService: new It({ pdfDocument: t, pageSelector: n, scrollRootRef: r }),
            });
          return new e(t, s, l, o.PENDING);
        }
        getSnapshot = () => this.snapshot;
        subscribe = (e) => (this.listeners.add(e), () => this.listeners.delete(e));
        find(e, t) {
          if (t == null && e === this.snapshot.query) {
            this.reopen();
            return;
          }
          (this.update({ ...this.snapshot, query: e }),
            this.dispatchFind(t == null ? `` : `again`, t === `previous`));
        }
        reopen() {
          this.snapshot.query.length > 0 && this.dispatchFind(`highlightallchange`, !1);
        }
        dispatchFind(e, t) {
          this.eventBus.dispatch(`find`, {
            query: this.snapshot.query,
            type: e,
            findPrevious: t,
            caseSensitive: !1,
            entireWord: !1,
            highlightAll: !0,
            matchDiacritics: !1,
          });
        }
        close() {
          this.eventBus.dispatch(`findbarclose`, {});
        }
        registerTextLayer(e, t) {
          let n = () => {
              let n = this.controller.highlightMatches ? (this.controller.pageMatches?.[e] ?? []) : [],
                r = this.controller.pageMatchesLength?.[e] ?? [],
                i = this.controller.selected,
                a = 0,
                o = 0,
                s = null;
              for (let [c, l] of t.textDivs.entries()) {
                let u = t.textContentItemsStr[c];
                l.replaceChildren();
                let d = 0;
                for (; o < n.length && n[o] + r[o] <= a;) o += 1;
                for (let t = o; t < n.length && n[t] < a + u.length; t += 1) {
                  let o = n[t],
                    c = Math.max(0, o - a),
                    f = Math.min(u.length, o + r[t] - a);
                  if (c >= f) continue;
                  l.append(u.slice(d, c));
                  let p = document.createElement(`mark`);
                  ((p.className = `pdfFindMatch`),
                    (p.textContent = u.slice(c, f)),
                    i?.pageIdx === e && i.matchIdx === t && ((p.dataset.active = ``), (s ??= p)),
                    l.append(p),
                    (d = f));
                }
                (l.append(u.slice(d)), (a += u.length));
              }
              s != null &&
                i != null &&
                this.controller.scrollMatchIntoView({
                  element: s,
                  selectedLeft: 0,
                  pageIndex: e,
                  matchIndex: i.matchIdx,
                });
            },
            r = ({ pageIndex: t }) => {
              (t === -1 || t === e) && n();
            };
          return (
            this.eventBus.on(`updatetextlayermatches`, r),
            n(),
            () => {
              this.eventBus.off(`updatetextlayermatches`, r);
              for (let [e, n] of t.textDivs.entries()) n.textContent = t.textContentItemsStr[e];
            }
          );
        }
        update(e) {
          this.snapshot = e;
          for (let e of this.listeners) e();
        }
      }));
  }))();
}
function Rn(e) {
  let n = (0, zn.c)(20),
    { children: r, title: a, pdfDocument: o, pageSelector: s, scrollRootRef: c } = e,
    l = t(se),
    u = (0, Bn.useRef)(null),
    [d, f] = (0, Bn.useState)(null),
    [p, m] = (0, Bn.useState)(null),
    h = d?.pdfDocument === o ? d : null,
    g,
    _;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => {
        u.current?.focus({ preventScroll: !0 });
      }),
      (_ = []),
      (n[0] = g),
      (n[1] = _))
    : ((g = n[0]), (_ = n[1])),
    (0, Bn.useLayoutEffect)(g, _));
  let v, y;
  if (
    (n[2] !== s || n[3] !== o || n[4] !== l || n[5] !== c || n[6] !== a
      ? ((v = () => {
          let e = u.current;
          if (e == null || o == null) return;
          let t = !1,
            n = null,
            r = {
              title: a,
              containsFocus: () => e.contains(e.ownerDocument.activeElement),
              focus: () => e.focus({ preventScroll: !0 }),
              getController: () => (
                (n ??= In.create({ pdfDocument: o, pageSelector: s, scrollRootRef: c })
                  .then((e) => (t || f(e), e))
                  .catch((e) => {
                    throw (t || m(e), e);
                  })),
                n
              ),
            },
            i = oe(l, r),
            d = () => ce(l, r);
          return (
            e.addEventListener(`focusin`, d),
            r.containsFocus() && d(),
            () => {
              ((t = !0), e.removeEventListener(`focusin`, d), i());
            }
          );
        }),
        (y = [o, s, c, l, a]),
        (n[2] = s),
        (n[3] = o),
        (n[4] = l),
        (n[5] = c),
        (n[6] = a),
        (n[7] = v),
        (n[8] = y))
      : ((v = n[7]), (y = n[8])),
    (0, Bn.useEffect)(v, y),
    p != null)
  )
    throw p;
  let b;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (e) => {
        e.target instanceof HTMLElement &&
          e.target.closest(`input, textarea, button, a, [contenteditable=true]`) == null &&
          u.current?.focus({ preventScroll: !0 });
      }),
      (n[9] = b))
    : (b = n[9]);
  let x;
  n[10] !== o || n[11] !== l
    ? ((x = (e) => {
        if (e.key === `Escape` && l.get(Ae) && l.get(ke) === `file`) {
          (e.preventDefault(), e.stopPropagation(), Te(l));
          return;
        }
        (i() ? e.metaKey : e.ctrlKey) &&
          !e.altKey &&
          !e.shiftKey &&
          e.key.toLowerCase() === `f` &&
          o != null &&
          (e.preventDefault(), e.stopPropagation(), le(l));
      }),
      (n[10] = o),
      (n[11] = l),
      (n[12] = x))
    : (x = n[12]);
  let S;
  n[13] !== h || n[14] !== r ? ((S = r(h)), (n[13] = h), (n[14] = r), (n[15] = S)) : (S = n[15]);
  let C;
  return (
    n[16] !== x || n[17] !== S || n[18] !== a
      ? ((C = (0, Vn.jsx)(`section`, {
          ref: u,
          className: `relative flex h-full min-h-0 flex-col bg-background-artifact-preview outline-none`,
          "aria-label": a,
          tabIndex: -1,
          onPointerDownCapture: b,
          onKeyDown: x,
          children: S,
        })),
        (n[16] = x),
        (n[17] = S),
        (n[18] = a),
        (n[19] = C))
      : (C = n[19]),
    C
  );
}
var zn, Bn, Vn;
function Hn() {
  return (Hn = e(() => {
    ((zn = u()), y(), (Bn = a()), U(), D(), Pe(), Ln(), (Vn = o()));
  }))();
}
function Un(e) {
  let t = (0, Kn.c)(8),
    { pageNumber: n, pdfDocument: r } = e,
    i = (0, qn.useRef)(null),
    a = (0, qn.useRef)(null),
    [o, s] = (0, qn.useState)(Wn),
    c,
    l;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => {
        let e = a.current;
        if (e == null || typeof IntersectionObserver > `u`) return;
        let t = new IntersectionObserver(
          (e) => {
            let t = e[0];
            s(t != null && (t.isIntersecting || t.intersectionRatio > 0));
          },
          { rootMargin: `160px 0px` },
        );
        return (t.observe(e), () => t.disconnect());
      }),
      (l = []),
      (t[0] = c),
      (t[1] = l))
    : ((c = t[0]), (l = t[1])),
    (0, qn.useEffect)(c, l));
  let u, d;
  (t[2] !== o || t[3] !== n || t[4] !== r
    ? ((u = () => {
        let e = i.current,
          t = a.current;
        if (e == null || t == null) return;
        if (!o) {
          ((e.width = 0), (e.height = 0));
          return;
        }
        let s = !1,
          c = null;
        return (
          (async () => {
            try {
              let i = await r.getPage(n);
              if (s || t.clientWidth <= 0) return;
              let a = i.getViewport({ scale: 1 });
              t.style.aspectRatio = `${a.width} / ${a.height}`;
              let o = window.devicePixelRatio || 1,
                l = Math.ceil(t.clientWidth * o),
                u = i.getViewport({ scale: l / a.width });
              ((e.width = l),
                (e.height = Math.ceil(u.height)),
                (c = i.render({ canvas: e, viewport: u })),
                await c.promise);
            } catch (t) {
              !s && !Gn(t) && ((e.width = 0), (e.height = 0));
            }
          })(),
          () => {
            ((s = !0), c?.cancel());
          }
        );
      }),
      (d = [o, n, r]),
      (t[2] = o),
      (t[3] = n),
      (t[4] = r),
      (t[5] = u),
      (t[6] = d))
    : ((u = t[5]), (d = t[6])),
    (0, qn.useEffect)(u, d));
  let f;
  return (
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Jn.jsx)(`div`, {
          ref: a,
          className: `relative aspect-3/4 w-full bg-surface-secondary`,
          children: (0, Jn.jsx)(`canvas`, {
            ref: i,
            "aria-hidden": !0,
            className: `absolute inset-0 size-full`,
          }),
        })),
        (t[7] = f))
      : (f = t[7]),
    f
  );
}
function Wn() {
  return typeof IntersectionObserver > `u`;
}
function Gn(e) {
  return typeof e == `object` && !!e && `name` in e && e.name === `RenderingCancelledException`;
}
var Kn, qn, Jn;
function Yn() {
  return (Yn = e(() => {
    ((Kn = u()), (qn = a()), (Jn = o()));
  }))();
}
function Xn({ anchor: e, container: t, pageSelector: n }) {
  let r = t.getBoundingClientRect(),
    i = e.kind === `point` ? e.clientX : r.left + r.width / 2,
    a = e.kind === `point` ? e.clientY : r.top + r.height / 2,
    o = Qn({ anchorClientX: i, anchorClientY: a, container: t, pageSelector: n });
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
        ratioX: nr((i - c.left) / c.width),
        ratioY: nr((a - c.top) / c.height),
      };
}
function Zn({ anchorState: e, container: t, pageSelector: n }) {
  let r = $n({ container: t, pageNumber: e.pageNumber, pageSelector: n });
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
function Qn({ anchorClientX: e, anchorClientY: t, container: n, pageSelector: r }) {
  let i = document.elementFromPoint(e, t),
    a = i instanceof HTMLElement ? i.closest(r) : null;
  if (a != null && n.contains(a)) return a;
  let o = null,
    s = 1 / 0;
  for (let i of er(n, r)) {
    let n = i.getBoundingClientRect(),
      r = tr({ max: n.bottom, min: n.top, value: t }) + tr({ max: n.right, min: n.left, value: e });
    r < s && ((s = r), (o = i));
  }
  return o;
}
function $n({ container: e, pageNumber: t, pageSelector: n }) {
  return er(e, n).find((e) => Number(e.dataset.pageNumber) === t) ?? null;
}
function er(e, t) {
  return Array.from(e.querySelectorAll(t));
}
function tr({ max: e, min: t, value: n }) {
  return n < t ? t - n : n > e ? n - e : 0;
}
function nr(e) {
  return Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0;
}
function rr(e) {
  let t = (0, mr.c)(61),
    {
      annotationBatchingEnabled: n,
      requestEditsEnabled: r,
      annotationHandleRef: i,
      annotationSourcePath: a,
      annotationsEnabled: o,
      chromeMode: s,
      downloadControl: c,
      downloadPending: l,
      fallbackHeader: u,
      fileInfoOwnerId: d,
      fileInfoSource: f,
      fileDataUrl: p,
      getAnnotationOriginatingTurn: m,
      headerFavoriteAction: h,
      headerMenuContent: g,
      headerPlacement: _,
      headerRightContent: v,
      headerTitleContent: y,
      environmentId: b,
      hostId: x,
      importKind: S,
      initialPage: C,
      libraryFile: w,
      onBeforeOpen: T,
      onBatchAction: E,
      onClose: D,
      onRefresh: O,
      onDownload: k,
      onShare: A,
      onDocumentReady: ee,
      onError: te,
      onPageChange: j,
      onSourceClick: M,
      onReady: N,
      originatingTurn: P,
      path: F,
      previewRequestKey: I,
      refreshQueryCacheKey: ne,
      renderLayout: re,
      tabId: ie,
      title: ae,
      versionHistoryEnabled: L,
    } = e,
    R = r !== void 0 && r,
    oe = o === void 0 || o,
    se = s === void 0 ? `default` : s,
    ce = l !== void 0 && l,
    le = _ === void 0 ? `overlay` : _,
    ue = S === void 0 ? `pdf` : S,
    de = L !== void 0 && L,
    [fe, pe] = (0, Q.useState)(0),
    z = `${I ?? `initial`}:${fe}`,
    B = `${x}\0${F}\0${p}\0${z}`,
    me;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((me = () => pe(ir)), (t[0] = me)) : (me = t[0]);
  let he;
  t[1] !== O || t[2] !== B
    ? ((he = (0, $.jsx)(ar, { onRefresh: O, onRetry: me }, B)), (t[1] = O), (t[2] = B), (t[3] = he))
    : (he = t[3]);
  let V = he,
    ge = `${x}\0${F}\0${p}\0${z}`,
    H;
  t[4] !== u || t[5] !== V
    ? ((H =
        u == null
          ? yt(`error`, `pdf`, V)
          : (0, $.jsx)(`div`, { className: `min-h-0 flex-1`, children: yt(`error`, `pdf`, V) })),
      (t[4] = u),
      (t[5] = V),
      (t[6] = H))
    : (H = t[6]);
  let U;
  t[7] !== u || t[8] !== re || t[9] !== H
    ? ((U = (0, $.jsx)(`section`, {
        className: `flex h-full min-h-0 flex-col bg-background-artifact-preview`,
        children: (0, $.jsx)(ct, { renderLayout: re, header: u, content: H }),
      })),
      (t[7] = u),
      (t[8] = re),
      (t[9] = H),
      (t[10] = U))
    : (U = t[10]);
  let _e = R || n,
    W;
  t[11] !== i ||
  t[12] !== a ||
  t[13] !== oe ||
  t[14] !== se ||
  t[15] !== c ||
  t[16] !== ce ||
  t[17] !== b ||
  t[18] !== u ||
  t[19] !== p ||
  t[20] !== d ||
  t[21] !== f ||
  t[22] !== m ||
  t[23] !== h ||
  t[24] !== g ||
  t[25] !== le ||
  t[26] !== v ||
  t[27] !== y ||
  t[28] !== x ||
  t[29] !== ue ||
  t[30] !== C ||
  t[31] !== w ||
  t[32] !== E ||
  t[33] !== T ||
  t[34] !== D ||
  t[35] !== ee ||
  t[36] !== k ||
  t[37] !== te ||
  t[38] !== j ||
  t[39] !== N ||
  t[40] !== O ||
  t[41] !== A ||
  t[42] !== M ||
  t[43] !== P ||
  t[44] !== F ||
  t[45] !== I ||
  t[46] !== ne ||
  t[47] !== re ||
  t[48] !== R ||
  t[49] !== z ||
  t[50] !== V ||
  t[51] !== _e ||
  t[52] !== ie ||
  t[53] !== ae ||
  t[54] !== de
    ? ((W = (0, $.jsx)(or, {
        environmentId: b,
        annotationBatchingEnabled: _e,
        requestEditsEnabled: R,
        annotationHandleRef: i,
        annotationSourcePath: a,
        annotationsEnabled: oe,
        chromeMode: se,
        downloadControl: c,
        downloadPending: ce,
        fallbackHeader: u,
        fileInfoOwnerId: d,
        fileInfoSource: f,
        fileDataUrl: p,
        getAnnotationOriginatingTurn: m,
        headerFavoriteAction: h,
        headerMenuContent: g,
        headerPlacement: le,
        headerRightContent: v,
        headerTitleContent: y,
        hostId: x,
        importKind: ue,
        initialPage: C,
        libraryFile: w,
        onBeforeOpen: T,
        onBatchAction: E,
        onClose: D,
        onRefresh: O,
        onDownload: k,
        onShare: A,
        onDocumentReady: ee,
        onError: te,
        onPageChange: j,
        onSourceClick: M,
        onReady: N,
        originatingTurn: P,
        path: F,
        previewRequestKey: I,
        refreshQueryCacheKey: ne,
        renderLayout: re,
        requestKey: z,
        retryButton: V,
        tabId: ie,
        title: ae,
        versionHistoryEnabled: de,
      })),
      (t[11] = i),
      (t[12] = a),
      (t[13] = oe),
      (t[14] = se),
      (t[15] = c),
      (t[16] = ce),
      (t[17] = b),
      (t[18] = u),
      (t[19] = p),
      (t[20] = d),
      (t[21] = f),
      (t[22] = m),
      (t[23] = h),
      (t[24] = g),
      (t[25] = le),
      (t[26] = v),
      (t[27] = y),
      (t[28] = x),
      (t[29] = ue),
      (t[30] = C),
      (t[31] = w),
      (t[32] = E),
      (t[33] = T),
      (t[34] = D),
      (t[35] = ee),
      (t[36] = k),
      (t[37] = te),
      (t[38] = j),
      (t[39] = N),
      (t[40] = O),
      (t[41] = A),
      (t[42] = M),
      (t[43] = P),
      (t[44] = F),
      (t[45] = I),
      (t[46] = ne),
      (t[47] = re),
      (t[48] = R),
      (t[49] = z),
      (t[50] = V),
      (t[51] = _e),
      (t[52] = ie),
      (t[53] = ae),
      (t[54] = de),
      (t[55] = W))
    : (W = t[55]);
  let ve;
  return (
    t[56] !== te || t[57] !== ge || t[58] !== U || t[59] !== W
      ? ((ve = (0, $.jsx)(we, {
          name: `PdfPreviewPanel`,
          onError: te,
          resetKey: ge,
          fallback: U,
          children: W,
        })),
        (t[56] = te),
        (t[57] = ge),
        (t[58] = U),
        (t[59] = W),
        (t[60] = ve))
      : (ve = t[60]),
    ve
  );
}
function ir(e) {
  return e + 1;
}
function ar(e) {
  let t = (0, mr.c)(9),
    { onRefresh: n, onRetry: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = { mutationFn: async () => n?.(), networkMode: `always` }), (t[0] = n), (t[1] = i));
  let { isPending: a, mutate: o } = I(i),
    s;
  t[2] !== o || t[3] !== r
    ? ((s = () => {
        o(void 0, {
          onSuccess: (e) => {
            e !== !1 && r();
          },
        });
      }),
      (t[2] = o),
      (t[3] = r),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(N, {
        id: `artifactPdfPreview.retry`,
        defaultMessage: `Retry`,
        description: `Button that reloads a PDF after its preview failed to load or render`,
      })),
      (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] !== a || t[7] !== s
      ? ((l = (0, $.jsx)(_, { color: `secondary`, loading: a, onClick: s, children: c })),
        (t[6] = a),
        (t[7] = s),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function or(e) {
  let n = (0, mr.c)(367),
    {
      annotationBatchingEnabled: i,
      requestEditsEnabled: a,
      annotationHandleRef: o,
      annotationSourcePath: s,
      annotationsEnabled: c,
      chromeMode: l,
      downloadControl: u,
      downloadPending: d,
      fallbackHeader: f,
      fileInfoOwnerId: m,
      fileInfoSource: h,
      fileDataUrl: g,
      getAnnotationOriginatingTurn: _,
      headerFavoriteAction: v,
      headerMenuContent: y,
      headerPlacement: b,
      headerRightContent: C,
      headerTitleContent: T,
      environmentId: E,
      hostId: D,
      importKind: O,
      initialPage: te,
      libraryFile: j,
      onBeforeOpen: M,
      onBatchAction: N,
      onClose: P,
      onRefresh: I,
      onDownload: L,
      onShare: oe,
      onDocumentReady: ce,
      onError: le,
      onPageChange: ue,
      onSourceClick: B,
      onReady: ge,
      originatingTurn: H,
      path: U,
      previewRequestKey: W,
      refreshQueryCacheKey: be,
      renderLayout: xe,
      requestKey: Se,
      retryButton: we,
      tabId: Te,
      title: Ee,
      versionHistoryEnabled: De,
    } = e,
    G = t(se),
    ke = A(m == null ? null : de, m ?? ``),
    Ae = w(re),
    Me = w(ie),
    Ne = w(ye),
    Pe = ee(),
    Fe = (0, Q.useRef)(null),
    Ie = (0, Q.useRef)(!1),
    Le = (0, Q.useRef)(!1),
    Re = (0, Q.useRef)(!1),
    ze = (0, Q.useRef)(null),
    Be = (0, Q.useRef)(g),
    He = (0, Q.useRef)(null),
    [K, Ue] = (0, Q.useState)(!1),
    [We, Xe] = (0, Q.useState)(fr),
    [Ze, Qe] = (0, Q.useState)(!1),
    [$e, nt] = (0, Q.useState)(null),
    rt = ke?.phase === `open` ? 312 : 0,
    ot = $e == null ? null : Math.max(0, $e - rt),
    st;
  n[0] === G.value ? (st = n[1]) : ((st = R(G.value)), (n[0] = G.value), (n[1] = st));
  let q = st,
    lt;
  n[2] === q ? (lt = n[3]) : ((lt = q ?? fe({ entrypoint: `home` })), (n[2] = q), (n[3] = lt));
  let J = lt,
    ft = (0, Q.useRef)(i),
    mt,
    _t;
  (n[4] === i
    ? ((mt = n[5]), (_t = n[6]))
    : ((mt = () => {
        ft.current = i;
      }),
      (_t = [i]),
      (n[4] = i),
      (n[5] = mt),
      (n[6] = _t)),
    (0, Q.useEffect)(mt, _t));
  let bt = A(he, J),
    xt;
  n[7] !== J || n[8] !== G
    ? ((xt = (e) => {
        V(G, J, e);
      }),
      (n[7] = J),
      (n[8] = G),
      (n[9] = xt))
    : (xt = n[9]);
  let Ct = xt,
    wt;
  n[10] !== J || n[11] !== D || n[12] !== U
    ? ((wt = { conversationId: J, hostId: D, path: U }), (n[10] = J), (n[11] = D), (n[12] = U), (n[13] = wt))
    : (wt = n[13]);
  let Dt = A(z, wt),
    Ot;
  n[14] !== J || n[15] !== D || n[16] !== U
    ? ((Ot = { conversationId: J, hostId: D, path: U }), (n[14] = J), (n[15] = D), (n[16] = U), (n[17] = Ot))
    : (Ot = n[17]);
  let At = A(Je, Ot),
    jt = a && At,
    Mt;
  n[18] === We.size
    ? (Mt = n[19])
    : ((Mt = () => {
        We.size === 0 && Ue(!1);
      }),
      (n[18] = We.size),
      (n[19] = Mt));
  let Pt = S(Mt),
    Ft;
  n[20] !== J || n[21] !== D || n[22] !== U || n[23] !== a || n[24] !== G
    ? ((Ft = () => a && G.get(Je, { conversationId: J, hostId: D, path: U })),
      (n[20] = J),
      (n[21] = D),
      (n[22] = U),
      (n[23] = a),
      (n[24] = G),
      (n[25] = Ft))
    : (Ft = n[25]);
  let Y = S(Ft),
    It;
  n[26] !== J || n[27] !== D || n[28] !== U || n[29] !== G
    ? ((It = (e) => {
        me(G, { conversationId: J, hostId: D, path: U }, e);
      }),
      (n[26] = J),
      (n[27] = D),
      (n[28] = U),
      (n[29] = G),
      (n[30] = It))
    : (It = n[30]);
  let Lt = It,
    Rt;
  n[31] !== i || n[32] !== Dt || n[33] !== bt
    ? ((Rt = i ? [...bt, ...Dt] : bt), (n[31] = i), (n[32] = Dt), (n[33] = bt), (n[34] = Rt))
    : (Rt = n[34]);
  let zt = Rt,
    Bt;
  n[35] !== i || n[36] !== Y || n[37] !== Lt || n[38] !== Ct
    ? ((Bt = (e) => {
        if (!Y()) {
          if (i) {
            Lt(e);
            return;
          }
          Ct(e);
        }
      }),
      (n[35] = i),
      (n[36] = Y),
      (n[37] = Lt),
      (n[38] = Ct),
      (n[39] = Bt))
    : (Bt = n[39]);
  let Vt = Bt,
    Ht;
  if (n[40] !== zt || n[41] !== U) {
    let e;
    (n[43] === U
      ? (e = n[44])
      : ((e = (e) => p(e) && e.localPdfContext?.path === U), (n[43] = U), (n[44] = e)),
      (Ht = Array.from(new Map(zt.filter(e).map(dr)).values())),
      (n[40] = zt),
      (n[41] = U),
      (n[42] = Ht));
  } else Ht = n[42];
  let Ut = Ht,
    Wt;
  if (n[45] !== Dt || n[46] !== U) {
    let e;
    (n[48] === U
      ? (e = n[49])
      : ((e = (e) => p(e) && e.localPdfContext?.path === U), (n[48] = U), (n[49] = e)),
      (Wt = Dt.filter(e)),
      (n[45] = Dt),
      (n[46] = U),
      (n[47] = Wt));
  } else Wt = n[47];
  let Gt = Wt,
    Kt;
  n[50] === Ut ? (Kt = n[51]) : ((Kt = Ut.map(ur)), (n[50] = Ut), (n[51] = Kt));
  let qt = Math.max(0, ...Kt) + 1,
    Jt,
    Yt;
  (n[52] !== U || n[53] !== Ct
    ? ((Jt = () => () => {
        ft.current ||
          Ct((e) => {
            let t = e.filter((e) => !(p(e) && e.localPdfContext?.path === U));
            return t.length === e.length ? e : t;
          });
      }),
      (Yt = [U, Ct]),
      (n[52] = U),
      (n[53] = Ct),
      (n[54] = Jt),
      (n[55] = Yt))
    : ((Jt = n[54]), (Yt = n[55])),
    (0, Q.useEffect)(Jt, Yt));
  let Xt;
  n[56] !== g || n[57] !== Se
    ? ((Xt = { fileDataUrl: g, requestKey: Se }), (n[56] = g), (n[57] = Se), (n[58] = Xt))
    : (Xt = n[58]);
  let {
      loadedFileDataUrl: Zt,
      loadState: Qt,
      loadStateFileDataUrl: $t,
      numPages: X,
      pageViewportSize: en,
      pdfDocument: tn,
    } = Nt(Xt),
    [nn, rn] = (0, Q.useState)(0),
    an = `${Se}:${nn}`,
    [on, sn] = (0, Q.useState)(null),
    cn = tn != null && on?.pdfDocument === tn && on.requestKey === an,
    ln;
  n[59] !== Ze || n[60] !== X
    ? ((ln = kt({ isDocked: Ze, totalPages: X })), (n[59] = Ze), (n[60] = X), (n[61] = ln))
    : (ln = n[61]);
  let un = ln,
    fn = en != null && ot != null,
    pn;
  n[62] !== te || n[63] !== X || n[64] !== ue || n[65] !== fn
    ? ((pn = {
        containerRef: Fe,
        initialPage: te,
        isPageLayoutReady: fn,
        onPageChange: ue,
        pageSelector: `[data-artifact-pdf-page]`,
        totalPages: X,
      }),
      (n[62] = te),
      (n[63] = X),
      (n[64] = ue),
      (n[65] = fn),
      (n[66] = pn))
    : (pn = n[66]);
  let { currentPage: mn, goToPage: hn } = Et(pn),
    gn;
  n[67] === Gt ? (gn = n[68]) : ((gn = Gt.flatMap(lr)), (n[67] = Gt), (n[68] = gn));
  let _n;
  n[69] === hn ? (_n = n[70]) : ((_n = (e) => hn(e, `instant`)), (n[69] = hn), (n[70] = _n));
  let vn;
  n[71] !== o || n[72] !== jt || n[73] !== gn || n[74] !== _n
    ? ((vn = { ref: o, editingDisabled: jt, annotations: gn, onNavigateToPage: _n }),
      (n[71] = o),
      (n[72] = jt),
      (n[73] = gn),
      (n[74] = _n),
      (n[75] = vn))
    : (vn = n[75]);
  let Z = Ve(vn),
    yn;
  n[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yn = (e) => {
        let t = Fe.current;
        if (t == null) {
          ze.current = null;
          return;
        }
        ze.current = Xn({ anchor: e, container: t, pageSelector: `[data-artifact-pdf-page]` });
      }),
      (n[76] = yn))
    : (yn = n[76]);
  let bn = yn,
    xn;
  n[77] !== ot || n[78] !== en
    ? ((xn = { onBeforeZoom: bn, pageViewportSize: en, pageWidth: ot }),
      (n[77] = ot),
      (n[78] = en),
      (n[79] = xn))
    : (xn = n[79]);
  let {
      beginScaleChange: Sn,
      fitToWidth: Cn,
      handleWheel: wn,
      isZooming: Tn,
      resize: En,
      setZoomPercent: Dn,
      zoomPercent: On,
      zoomEndTick: kn,
    } = dn(xn),
    An;
  n[80] !== mn || n[81] !== Cn || n[82] !== En.kind
    ? ((An = () => {
        let e =
          En.kind === `page-width`
            ? null
            : Fe.current?.querySelector(`[data-artifact-pdf-page][data-page-number="${mn}"]`);
        (Cn(),
          e != null &&
            window.requestAnimationFrame(() => {
              e.scrollIntoView({ block: `center`, inline: `center` });
            }));
      }),
      (n[80] = mn),
      (n[81] = Cn),
      (n[82] = En.kind),
      (n[83] = An))
    : (An = n[83]);
  let jn = An,
    Mn;
  n[84] === Sn
    ? (Mn = n[85])
    : ((Mn = (e) => {
        if (e.contentRect.width <= 0) return;
        let t = Math.max(0, Math.floor(e.contentRect.width) - 48),
          n = He.current;
        n !== t && (n != null && (bn({ kind: `center` }), Sn()), (He.current = t), nt(t));
      }),
      (n[84] = Sn),
      (n[85] = Mn));
  let Nn = x(Mn),
    Fn;
  n[86] !== X || n[87] !== tn
    ? ((Fn = () => {
        let e = ze.current,
          t = Fe.current;
        e == null ||
          t == null ||
          tn == null ||
          X < 1 ||
          (Zn({
            anchorState: { ...e, pageNumber: Math.min(e.pageNumber, X) },
            container: t,
            pageSelector: `[data-artifact-pdf-page][data-page-viewport-ready]`,
          }) &&
            (ze.current = null));
      }),
      (n[86] = X),
      (n[87] = tn),
      (n[88] = Fn))
    : (Fn = n[88]);
  let In = Fn,
    Ln;
  n[89] === In
    ? (Ln = n[90])
    : ((Ln = () => {
        In();
      }),
      (n[89] = In),
      (n[90] = Ln));
  let zn;
  (n[91] !== ot || n[92] !== en || n[93] !== En || n[94] !== In
    ? ((zn = [ot, en, En, In]), (n[91] = ot), (n[92] = en), (n[93] = En), (n[94] = In), (n[95] = zn))
    : (zn = n[95]),
    (0, Q.useLayoutEffect)(Ln, zn));
  let Bn, Vn;
  (n[96] === g
    ? ((Bn = n[97]), (Vn = n[98]))
    : ((Bn = () => {
        Be.current !== g && ((Be.current = g), bn({ kind: `center` }));
      }),
      (Vn = [bn, g]),
      (n[96] = g),
      (n[97] = Bn),
      (n[98] = Vn)),
    (0, Q.useLayoutEffect)(Bn, Vn));
  let Hn;
  n[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Hn = () => {
        ((Ie.current = !1), Ue(!1));
      }),
      (n[99] = Hn))
    : (Hn = n[99]);
  let Wn;
  (n[100] === g ? (Wn = n[101]) : ((Wn = [g]), (n[100] = g), (n[101] = Wn)), (0, Q.useEffect)(Hn, Wn));
  let Gn;
  n[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gn = () => {
        ((Le.current = !1), (Re.current = !1));
      }),
      (n[102] = Gn))
    : (Gn = n[102]);
  let Kn;
  (n[103] !== g || n[104] !== Se
    ? ((Kn = [g, Se]), (n[103] = g), (n[104] = Se), (n[105] = Kn))
    : (Kn = n[105]),
    (0, Q.useEffect)(Gn, Kn));
  let qn;
  n[106] === wn
    ? (qn = n[107])
    : ((qn = (e) => {
        let t = Fe.current;
        t !== e &&
          (t?.removeEventListener(`wheel`, wn),
          (Fe.current = e),
          e?.addEventListener(`wheel`, wn, { passive: !1 }));
      }),
      (n[106] = wn),
      (n[107] = qn));
  let Jn = qn,
    Yn = Qt === `ready` && tn != null && Zt === g,
    Qn = Yn || De || j != null,
    $n = Yn,
    er = Yn ? tn : null,
    tr;
  n[108] !== _ || n[109] !== X || n[110] !== H || n[111] !== G || n[112] !== q
    ? ((tr = () => {
        Ie.current = !0;
        let e = _ == null ? H : _();
        je(G, ne, {
          pageCount: X,
          threadId: q ?? void 0,
          turnId: e?.turnId,
          inputMessageId: e?.inputMessageId ?? void 0,
          messageId: e?.messageId ?? void 0,
        });
      }),
      (n[108] = _),
      (n[109] = X),
      (n[110] = H),
      (n[111] = G),
      (n[112] = q),
      (n[113] = tr))
    : (tr = n[113]);
  let nr = (0, Q.useEffectEvent)(tr),
    rr;
  n[114] !== X || n[115] !== ge
    ? ((rr = () => {
        Re.current || !Number.isSafeInteger(X) || X <= 0 || ((Re.current = !0), ge?.(X));
      }),
      (n[114] = X),
      (n[115] = ge),
      (n[116] = rr))
    : (rr = n[116]);
  let ir = S(rr),
    or;
  n[117] === ce
    ? (or = n[118])
    : ((or = () => {
        Le.current || ((Le.current = !0), ce?.());
      }),
      (n[117] = ce),
      (n[118] = or));
  let gr = S(or),
    _r;
  n[119] === le
    ? (_r = n[120])
    : ((_r = () => {
        Re.current || ((Re.current = !0), le?.());
      }),
      (n[119] = le),
      (n[120] = _r));
  let vr = S(_r),
    yr;
  n[121] !== tn || n[122] !== an || n[123] !== vr
    ? ((yr = () => {
        (sn({ pdfDocument: tn, requestKey: an }), vr());
      }),
      (n[121] = tn),
      (n[122] = an),
      (n[123] = vr),
      (n[124] = yr))
    : (yr = n[124]);
  let br = yr,
    xr;
  n[125] !== nr || n[126] !== $n
    ? ((xr = () => {
        $n && !Ie.current && nr();
      }),
      (n[125] = nr),
      (n[126] = $n),
      (n[127] = xr))
    : (xr = n[127]);
  let Sr;
  (n[128] === $n ? (Sr = n[129]) : ((Sr = [$n]), (n[128] = $n), (n[129] = Sr)), (0, Q.useEffect)(xr, Sr));
  let Cr;
  n[130] !== Yn || n[131] !== gr
    ? ((Cr = () => {
        Yn && !Le.current && gr();
      }),
      (n[130] = Yn),
      (n[131] = gr),
      (n[132] = Cr))
    : (Cr = n[132]);
  let wr;
  (n[133] !== Yn || n[134] !== W || n[135] !== gr
    ? ((wr = [Yn, W, gr]), (n[133] = Yn), (n[134] = W), (n[135] = gr), (n[136] = wr))
    : (wr = n[136]),
    (0, Q.useEffect)(Cr, wr));
  let Tr;
  n[137] !== g || n[138] !== Qt || n[139] !== $t || n[140] !== vr
    ? ((Tr = () => {
        Qt !== `error` || $t !== g || Re.current || vr();
      }),
      (n[137] = g),
      (n[138] = Qt),
      (n[139] = $t),
      (n[140] = vr),
      (n[141] = Tr))
    : (Tr = n[141]);
  let Er;
  (n[142] !== g || n[143] !== Qt || n[144] !== $t || n[145] !== W || n[146] !== vr
    ? ((Er = [g, Qt, $t, W, vr]),
      (n[142] = g),
      (n[143] = Qt),
      (n[144] = $t),
      (n[145] = W),
      (n[146] = vr),
      (n[147] = Er))
    : (Er = n[147]),
    (0, Q.useEffect)(Tr, Er));
  let Dr;
  n[148] === Pe
    ? (Dr = n[149])
    : ((Dr = Pe.formatMessage({
        id: `artifactViewer.requestEdits`,
        defaultMessage: `Request edits`,
        description: `Button label for requesting edits to an artifact`,
      })),
      (n[148] = Pe),
      (n[149] = Dr));
  let Or = Dr,
    [, kr] = (0, Q.useState)(!1),
    Ar = Me && Ae && Ne,
    jr;
  n[150] !== Z ||
  n[151] !== _ ||
  n[152] !== Y ||
  n[153] !== Ar ||
  n[154] !== K ||
  n[155] !== H ||
  n[156] !== a ||
  n[157] !== G ||
  n[158] !== q
    ? ((jr = (e) => {
        Y() ||
          (kr(!1),
          K ||
            (at(G, { surface: `file_artifact`, entrySource: e }),
            Ar && pe(G),
            _e(G, {
              artifactType: `pdf`,
              importKind: `pdf`,
              originatingTurn: _ == null ? H : _(),
              threadId: q,
            })),
          !(a && K && !Z.dismissAnnotationEditor()) && Ue(cr));
      }),
      (n[150] = Z),
      (n[151] = _),
      (n[152] = Y),
      (n[153] = Ar),
      (n[154] = K),
      (n[155] = H),
      (n[156] = a),
      (n[157] = G),
      (n[158] = q),
      (n[159] = jr))
    : (jr = n[159]);
  let Mr = jr,
    Nr = A(Oe, `browser.toggleAnnotationMode`),
    Pr;
  n[160] === Mr ? (Pr = n[161]) : ((Pr = () => Mr(`button`)), (n[160] = Mr), (n[161] = Pr));
  let Fr;
  n[162] === K ? (Fr = n[163]) : ((Fr = (0, $.jsx)(it, { active: K })), (n[162] = K), (n[163] = Fr));
  let Ir;
  n[164] !== Or || n[165] !== jt || n[166] !== K || n[167] !== Pr || n[168] !== Fr
    ? ((Ir = (0, $.jsx)(Ge, {
        label: Or,
        pressed: K,
        disabled: jt,
        size: `default`,
        variant: `annotation`,
        onClick: Pr,
        children: Fr,
      })),
      (n[164] = Or),
      (n[165] = jt),
      (n[166] = K),
      (n[167] = Pr),
      (n[168] = Fr),
      (n[169] = Ir))
    : (Ir = n[169]);
  let Lr = Ir,
    Rr;
  n[170] === G
    ? (Rr = n[171])
    : ((Rr = () => {
        pe(G);
      }),
      (n[170] = G),
      (n[171] = Rr));
  let zr = jt ? null : Nr,
    Br;
  n[172] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Br = (0, $.jsx)(ae, {})), (n[172] = Br))
    : (Br = n[172]);
  let Vr = K || Ar,
    Hr;
  n[173] !== Lr || n[174] !== zr || n[175] !== Vr
    ? ((Hr = (0, $.jsxs)(`span`, {
        className: `inline-flex`,
        children: [
          (0, $.jsx)($.Fragment, {
            children: (0, $.jsx)(k, {
              side: `bottom`,
              shortcut: zr,
              tooltipContent: Br,
              triggerPopupOpen: Vr,
              children: Lr,
            }),
          }),
          null,
        ],
      })),
      (n[173] = Lr),
      (n[174] = zr),
      (n[175] = Vr),
      (n[176] = Hr))
    : (Hr = n[176]);
  let Ur;
  n[177] !== Ar || n[178] !== Rr || n[179] !== Hr
    ? ((Ur = (0, $.jsx)(ut, { onDismiss: Rr, open: Ar, children: Hr })),
      (n[177] = Ar),
      (n[178] = Rr),
      (n[179] = Hr),
      (n[180] = Ur))
    : (Ur = n[180]);
  let Wr = Ur,
    Gr = c && K,
    Kr;
  n[181] !== Y || n[182] !== a
    ? ((Kr = () => {
        a && !Y() && Ue(!0);
      }),
      (n[181] = Y),
      (n[182] = a),
      (n[183] = Kr))
    : (Kr = n[183]);
  let qr;
  n[184] !== J ||
  n[185] !== D ||
  n[186] !== Pe ||
  n[187] !== Y ||
  n[188] !== Pt ||
  n[189] !== N ||
  n[190] !== U ||
  n[191] !== G
    ? ((qr = () => {
        Y() || Ke(G, Pe, { conversationId: J, hostId: D, path: U }, N, Pt);
      }),
      (n[184] = J),
      (n[185] = D),
      (n[186] = Pe),
      (n[187] = Y),
      (n[188] = Pt),
      (n[189] = N),
      (n[190] = U),
      (n[191] = G),
      (n[192] = qr))
    : (qr = n[192]);
  let Jr;
  n[193] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Jr = (e, t) => {
        Xe((n) => {
          if (n.has(e) === t) return n;
          let r = new Set(n);
          return (t ? r.add(e) : r.delete(e), r);
        });
      }),
      (n[193] = Jr))
    : (Jr = n[193]);
  let Yr;
  n[194] !== i ||
  n[195] !== Z.onFocusAnnotation ||
  n[196] !== Z.onPageHandleChange ||
  n[197] !== s ||
  n[198] !== jt ||
  n[199] !== J ||
  n[200] !== _ ||
  n[201] !== qt ||
  n[202] !== X ||
  n[203] !== H ||
  n[204] !== U ||
  n[205] !== Ut ||
  n[206] !== a ||
  n[207] !== Vt ||
  n[208] !== Gr ||
  n[209] !== Kr ||
  n[210] !== qr ||
  n[211] !== q ||
  n[212] !== Ee
    ? ((Yr = {
        comments: Ut,
        requestEditsEnabled: a,
        annotationBatchingEnabled: i,
        annotationSourcePath: s,
        editingDisabled: jt,
        conversationId: J,
        getOriginatingTurn: _,
        isCommentMode: Gr,
        nextCommentNumber: qt,
        onCommentsChange: Vt,
        onStarted: Kr,
        onSendBatch: qr,
        onAnnotationHandleChange: Z.onPageHandleChange,
        onFocusAnnotation: Z.onFocusAnnotation,
        onInteractionChange: Jr,
        originatingTurn: H,
        pageCount: X,
        path: U,
        threadId: q,
        title: Ee,
      }),
      (n[194] = i),
      (n[195] = Z.onFocusAnnotation),
      (n[196] = Z.onPageHandleChange),
      (n[197] = s),
      (n[198] = jt),
      (n[199] = J),
      (n[200] = _),
      (n[201] = qt),
      (n[202] = X),
      (n[203] = H),
      (n[204] = U),
      (n[205] = Ut),
      (n[206] = a),
      (n[207] = Vt),
      (n[208] = Gr),
      (n[209] = Kr),
      (n[210] = qr),
      (n[211] = q),
      (n[212] = Ee),
      (n[213] = Yr))
    : (Yr = n[213]);
  let Xr = Yr,
    Zr;
  n[214] !== m || n[215] !== h || n[216] !== v || n[217] !== j
    ? ((Zr = (e) =>
        (0, $.jsx)(dt, { favoriteAction: v, file: j, fileInfoOwnerId: m, fileInfoSource: h, children: e })),
      (n[214] = m),
      (n[215] = h),
      (n[216] = v),
      (n[217] = j),
      (n[218] = Zr))
    : (Zr = n[218]);
  let Qr = Zr,
    $r;
  n[219] === j
    ? ($r = n[220])
    : (($r = j == null ? void 0 : (0, $.jsx)(ve, { libraryFileId: j.libraryFileId })),
      (n[219] = j),
      (n[220] = $r));
  let ei = $r,
    ti;
  n[221] === j
    ? (ti = n[222])
    : ((ti = j == null ? void 0 : (0, $.jsx)(ve, { libraryFileId: j.libraryFileId, variant: `text` })),
      (n[221] = j),
      (n[222] = ti));
  let ni = ti,
    ri;
  n[223] === Ee ? (ri = n[224]) : ((ri = pr(Ee)), (n[223] = Ee), (n[224] = ri));
  let ii = ri,
    ai;
  n[225] !== l ||
  n[226] !== E ||
  n[227] !== y ||
  n[228] !== T ||
  n[229] !== D ||
  n[230] !== O ||
  n[231] !== ei ||
  n[232] !== M ||
  n[233] !== H ||
  n[234] !== U ||
  n[235] !== Qr ||
  n[236] !== G ||
  n[237] !== Te ||
  n[238] !== q ||
  n[239] !== Ee ||
  n[240] !== ii ||
  n[241] !== ni
    ? ((ai =
        T ??
        (l === "default"
          ? (0, $.jsx)(gt, {
              tabId: Te,
              environmentId: E,
              analyticsContext: {
                threadId: q,
                turnId: H?.turnId ?? null,
                inputMessageId: H?.inputMessageId ?? null,
                messageId: H?.messageId ?? null,
              },
              downloadAnalyticsMetadata: {
                artifactType: `pdf`,
                importKind: O,
                originatingTurn: H,
                threadId: q,
              },
              getAnalyticsContext: () => ht(G, { hostId: D, originatingTurn: H, path: U, threadId: q }),
              hostId: D,
              libraryBreadcrumb: ei,
              tooltipBreadcrumb: ni,
              onBeforeOpen: M,
              path: U,
              renderMenuItems: Qr,
              showDownloadAction: !1,
              title: ii,
              variant: `title`,
              children: y,
            })
          : (0, $.jsx)(F, {
              fileName: Ee,
              libraryBreadcrumb: ei,
              tooltipBreadcrumb: ni,
              title: ii,
              children: Qr(null),
            }))),
      (n[225] = l),
      (n[226] = E),
      (n[227] = y),
      (n[228] = T),
      (n[229] = D),
      (n[230] = O),
      (n[231] = ei),
      (n[232] = M),
      (n[233] = H),
      (n[234] = U),
      (n[235] = Qr),
      (n[236] = G),
      (n[237] = Te),
      (n[238] = q),
      (n[239] = Ee),
      (n[240] = ii),
      (n[241] = ni),
      (n[242] = ai))
    : (ai = n[242]);
  let oi = ai,
    si;
  n[243] !== l ||
  n[244] !== E ||
  n[245] !== D ||
  n[246] !== O ||
  n[247] !== M ||
  n[248] !== L ||
  n[249] !== H ||
  n[250] !== U ||
  n[251] !== G ||
  n[252] !== Te ||
  n[253] !== q
    ? ((si =
        l === "default"
          ? (0, $.jsx)(vt, {
              tabId: Te,
              environmentId: E,
              onBeforeOpen: M,
              analyticsContext: {
                threadId: q,
                turnId: H?.turnId ?? null,
                inputMessageId: H?.inputMessageId ?? null,
                messageId: H?.messageId ?? null,
              },
              getAnalyticsContext: () => ht(G, { hostId: D, originatingTurn: H, path: U, threadId: q }),
              analyticsMetadata: { artifactType: `pdf`, importKind: O, originatingTurn: H, threadId: q },
              hostId: D,
              onDownload: L,
              path: U,
            })
          : void 0),
      (n[243] = l),
      (n[244] = E),
      (n[245] = D),
      (n[246] = O),
      (n[247] = M),
      (n[248] = L),
      (n[249] = H),
      (n[250] = U),
      (n[251] = G),
      (n[252] = Te),
      (n[253] = q),
      (n[254] = si))
    : (si = n[254]);
  let ci = si,
    li;
  if (
    n[255] !== Wr ||
    n[256] !== jt ||
    n[257] !== c ||
    n[258] !== l ||
    n[259] !== ci ||
    n[260] !== u ||
    n[261] !== d ||
    n[262] !== f ||
    n[263] !== jn ||
    n[264] !== b ||
    n[265] !== C ||
    n[266] !== Y ||
    n[267] !== K ||
    n[268] !== j ||
    n[269] !== P ||
    n[270] !== L ||
    n[271] !== oe ||
    n[272] !== U ||
    n[273] !== En.kind ||
    n[274] !== Dn ||
    n[275] !== Qn ||
    n[276] !== Te ||
    n[277] !== oi ||
    n[278] !== ii ||
    n[279] !== Mr ||
    n[280] !== De ||
    n[281] !== On
  ) {
    if (((li = f), Qn)) {
      let e;
      n[283] === b ? (e = n[284]) : ((e = b === `overlay` ? Ce(`pdf`) : void 0), (n[283] = b), (n[284] = e));
      let t;
      n[285] !== Y || n[286] !== K
        ? ((t = K
            ? () => {
                Y() || Ue(!1);
              }
            : void 0),
          (n[285] = Y),
          (n[286] = K),
          (n[287] = t))
        : (t = n[287]);
      let i = c ? Wr : null,
        a = !c || jt,
        o;
      n[288] === Mr ? (o = n[289]) : ((o = () => Mr(`keyboard_shortcut`)), (n[288] = Mr), (n[289] = o));
      let s;
      n[290] !== K || n[291] !== a || n[292] !== o
        ? ((s = { active: K, disabled: a, onToggle: o }),
          (n[290] = K),
          (n[291] = a),
          (n[292] = o),
          (n[293] = s))
        : (s = n[293]);
      let f = En.kind === `page-width`,
        p;
      n[294] !== jn || n[295] !== f
        ? ((p = { selected: f, onSelect: jn }), (n[294] = jn), (n[295] = f), (n[296] = p))
        : (p = n[296]);
      let m;
      n[297] !== Dn || n[298] !== p || n[299] !== On
        ? ((m = (0, $.jsx)(r, {
            triggerTestId: `pdf-preview-zoom-trigger`,
            zoomPercent: On,
            zoomOptions: St,
            onZoomPercentChange: Dn,
            fitOption: p,
          })),
          (n[297] = Dn),
          (n[298] = p),
          (n[299] = On),
          (n[300] = m))
        : (m = n[300]);
      let h;
      n[301] !== C || n[302] !== t || n[303] !== i || n[304] !== s || n[305] !== m
        ? ((h = {
            editingControls: null,
            onExitAnnotationMode: t,
            annotationControl: i,
            annotationControlOwnsTooltip: !0,
            annotationCommand: s,
            commentsControl: null,
            zoomControl: m,
            navigationControl: null,
            supplementalActions: C,
          }),
          (n[301] = C),
          (n[302] = t),
          (n[303] = i),
          (n[304] = s),
          (n[305] = m),
          (n[306] = h))
        : (h = n[306]);
      let g;
      (n[307] !== l || n[308] !== L
        ? ((g =
            l === `standalone` && L != null
              ? () => {
                  L();
                }
              : void 0),
          (n[307] = l),
          (n[308] = L),
          (n[309] = g))
        : (g = n[309]),
        (li = (0, $.jsx)(pt, {
          enabled: De || j != null,
          actions: oi,
          placement: e,
          downloadControl: u ?? ci,
          downloadFileName: U,
          downloadPending: d,
          controls: h,
          onClose: P,
          onDownload: g,
          onShare: oe,
          tabId: Te,
          title: ii,
        })));
    }
    ((n[255] = Wr),
      (n[256] = jt),
      (n[257] = c),
      (n[258] = l),
      (n[259] = ci),
      (n[260] = u),
      (n[261] = d),
      (n[262] = f),
      (n[263] = jn),
      (n[264] = b),
      (n[265] = C),
      (n[266] = Y),
      (n[267] = K),
      (n[268] = j),
      (n[269] = P),
      (n[270] = L),
      (n[271] = oe),
      (n[272] = U),
      (n[273] = En.kind),
      (n[274] = Dn),
      (n[275] = Qn),
      (n[276] = Te),
      (n[277] = oi),
      (n[278] = ii),
      (n[279] = Mr),
      (n[280] = De),
      (n[281] = On),
      (n[282] = li));
  } else li = n[282];
  let ui = K && !jt && We.size === 0,
    di;
  n[310] !== Z || n[311] !== Y
    ? ((di = () => {
        !Y() && Z.dismissAnnotationEditor() && Ue(!1);
      }),
      (n[310] = Z),
      (n[311] = Y),
      (n[312] = di))
    : (di = n[312]);
  let fi;
  (n[313] !== ui || n[314] !== di
    ? ((fi = { active: ui, onExit: di }), (n[313] = ui), (n[314] = di), (n[315] = fi))
    : (fi = n[315]),
    et(fi));
  let pi;
  n[316] !== rt ||
  n[317] !== We.size ||
  n[318] !== i ||
  n[319] !== Z ||
  n[320] !== c ||
  n[321] !== Xr ||
  n[322] !== J ||
  n[323] !== mn ||
  n[324] !== g ||
  n[325] !== ot ||
  n[326] !== hn ||
  n[327] !== br ||
  n[328] !== cn ||
  n[329] !== b ||
  n[330] !== D ||
  n[331] !== Y ||
  n[332] !== K ||
  n[333] !== Yn ||
  n[334] !== Ze ||
  n[335] !== Tn ||
  n[336] !== Qt ||
  n[337] !== X ||
  n[338] !== Pt ||
  n[339] !== N ||
  n[340] !== I ||
  n[341] !== B ||
  n[342] !== Nn ||
  n[343] !== en ||
  n[344] !== U ||
  n[345] !== Gt.length ||
  n[346] !== li ||
  n[347] !== er ||
  n[348] !== be ||
  n[349] !== xe ||
  n[350] !== an ||
  n[351] !== ir ||
  n[352] !== En ||
  n[353] !== In ||
  n[354] !== we ||
  n[355] !== Lt ||
  n[356] !== Jn ||
  n[357] !== Qn ||
  n[358] !== un ||
  n[359] !== Ee ||
  n[360] !== kn
    ? ((pi = (e) =>
        (0, $.jsxs)($.Fragment, {
          children: [
            Yn && !cn && c && i
              ? (0, $.jsx)(tt, {
                  children: (0, $.jsx)(Ye, {
                    annotationCount: Gt.length,
                    isAnnotating: K,
                    isAnnotationInteractionActive: We.size > 0,
                    conversationId: J,
                    hostId: D,
                    onBatchAction: N,
                    onAnnotationsSubmitted: Pt,
                    onDismissAnnotations: (e) =>
                      Y() || !Z.dismissAnnotationEditor(e) ? !1 : (Lt([]), Ue(!1), !0),
                    onNavigate: Z.onNavigate,
                    onRefresh: I,
                    path: U,
                    refreshQueryCacheKey: be,
                  }),
                })
              : null,
            er == null || cn
              ? null
              : (0, $.jsx)(Tt, {
                  currentPage: mn,
                  isDocked: Ze,
                  onDockedChange: Qe,
                  onPageSelect: hn,
                  renderThumbnail: (e) => (0, $.jsx)(Un, { pageNumber: e, pdfDocument: er }),
                  totalPages: X,
                }),
            (0, $.jsx)(ct, {
              headerPlacement: Yn && !cn && Qn && b === `overlay` ? `overlay` : void 0,
              renderLayout: xe,
              header: li,
              content: (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(`div`, {
                    ref: Jn,
                    "aria-label": Ee,
                    className:
                      Yn && !cn ? `min-h-0 flex-1 overflow-auto bg-background-artifact-preview` : `hidden`,
                    "data-testid": `artifact-pdf-preview-panel`,
                    style: un,
                    children: (0, $.jsx)(`div`, {
                      ref: Nn,
                      className: b === `overlay` ? `min-h-full pt-24 pb-6` : `min-h-full pt-6 pb-6`,
                      children: (0, $.jsx)(`div`, {
                        className: `flex min-h-full w-max min-w-full flex-col items-center gap-6`,
                        style: {
                          paddingInlineStart: hr,
                          paddingInlineEnd: hr + (En.kind === `page-width` ? rt : 0),
                        },
                        children:
                          er == null
                            ? null
                            : Array.from({ length: X }, (t, n) => {
                                let r = n + 1;
                                return (0, $.jsx)(
                                  Pn,
                                  {
                                    commentLayer: c ? Xr : null,
                                    currentPage: mn,
                                    onSourceClick: B,
                                    isZooming: Tn,
                                    onRenderError: br,
                                    onRendered: ir,
                                    onViewportReady: In,
                                    search: e,
                                    pdfDocument: er,
                                    pageSelector: `[data-artifact-pdf-page]`,
                                    pageViewportSize: en,
                                    pageNumber: r,
                                    pageWidth: ot,
                                    resize: En,
                                    renderRequestKey: an,
                                    scrollRootRef: Fe,
                                    zoomEndTick: kn,
                                  },
                                  r,
                                );
                              }),
                      }),
                    }),
                  }),
                  yt(
                    cn ? `error` : Qt,
                    `pdf`,
                    cn
                      ? (0, $.jsx)(
                          ar,
                          {
                            onRetry: () => {
                              ((Re.current = !1), rn(sr));
                            },
                          },
                          `${D}\0${U}\0${g}\0${an}`,
                        )
                      : we,
                  ),
                ],
              }),
            }),
          ],
        })),
      (n[316] = rt),
      (n[317] = We.size),
      (n[318] = i),
      (n[319] = Z),
      (n[320] = c),
      (n[321] = Xr),
      (n[322] = J),
      (n[323] = mn),
      (n[324] = g),
      (n[325] = ot),
      (n[326] = hn),
      (n[327] = br),
      (n[328] = cn),
      (n[329] = b),
      (n[330] = D),
      (n[331] = Y),
      (n[332] = K),
      (n[333] = Yn),
      (n[334] = Ze),
      (n[335] = Tn),
      (n[336] = Qt),
      (n[337] = X),
      (n[338] = Pt),
      (n[339] = N),
      (n[340] = I),
      (n[341] = B),
      (n[342] = Nn),
      (n[343] = en),
      (n[344] = U),
      (n[345] = Gt.length),
      (n[346] = li),
      (n[347] = er),
      (n[348] = be),
      (n[349] = xe),
      (n[350] = an),
      (n[351] = ir),
      (n[352] = En),
      (n[353] = In),
      (n[354] = we),
      (n[355] = Lt),
      (n[356] = Jn),
      (n[357] = Qn),
      (n[358] = un),
      (n[359] = Ee),
      (n[360] = kn),
      (n[361] = pi))
    : (pi = n[361]);
  let mi;
  return (
    n[362] !== g || n[363] !== er || n[364] !== pi || n[365] !== Ee
      ? ((mi = (0, $.jsx)(qe, {
          children: (0, $.jsx)(
            Rn,
            {
              title: Ee,
              pdfDocument: er,
              pageSelector: `[data-artifact-pdf-page]`,
              scrollRootRef: Fe,
              children: pi,
            },
            g,
          ),
        })),
        (n[362] = g),
        (n[363] = er),
        (n[364] = pi),
        (n[365] = Ee),
        (n[366] = mi))
      : (mi = n[366]),
    mi
  );
}
function sr(e) {
  return e + 1;
}
function cr(e) {
  return !e;
}
function lr(e) {
  let t = e.localPdfContext?.pageNumber;
  return t == null ? [] : [{ id: Ft(e), pageNumber: t }];
}
function ur(e) {
  return e.position.line;
}
function dr(e) {
  return [Ft(e), e];
}
function fr() {
  return new Set();
}
function pr(e) {
  return e.replace(/\.pdf$/i, ``);
}
var mr, Q, $, hr;
function gr() {
  return (gr = e(() => {
    ((mr = u()),
      f(),
      He(),
      $e(),
      nt(),
      We(),
      P(),
      y(),
      M(),
      (Q = a()),
      h(),
      J(),
      Ee(),
      ft(),
      Me(),
      ot(),
      rt(),
      B(),
      Se(),
      v(),
      W(),
      j(),
      L(),
      G(),
      Ne(),
      O(),
      Pe(),
      C(),
      g(),
      st(),
      q(),
      xe(),
      Xe(),
      Qe(),
      be(),
      Ze(),
      mt(),
      _t(),
      wt(),
      bt(),
      xt(),
      lt(),
      ue(),
      Ct(),
      Dt(),
      Mt(),
      Fn(),
      Hn(),
      Yn(),
      kn(),
      ($ = o()),
      (hr = 24));
  }))();
}
gr();
export { rr as PdfPreviewPanel };
//# sourceMappingURL=pdf-preview-panel-5d6a72cd03f2.js.map
