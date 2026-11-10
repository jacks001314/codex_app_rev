const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pdf_viewer-ba68e1320819.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CS as n,
  Cot as r,
  FD as i,
  IDt as a,
  Iot as o,
  Ixt as s,
  JS as c,
  Lot as l,
  ND as u,
  P5 as d,
  Pxt as f,
  Rnt as p,
  VDt as ee,
  Vxt as m,
  YO as h,
  ZO as g,
  bz as _,
  cz as v,
  fPt as y,
  fdt as b,
  gPt as x,
  hPt as S,
  hot as te,
  jDt as C,
  lot as ne,
  pPt as w,
  rst as T,
  sz as E,
  t3 as D,
  tE as O,
  udt as k,
  vzt as A,
  wot as j,
  xMt as M,
  xz as re,
  yzt as N,
  z7 as ie,
  zxt as ae,
} from "./app-shared-bbfeca5e5737.js";
import {
  $dr as oe,
  CTt as P,
  Cgt as se,
  Cwr as ce,
  DTt as F,
  Eb as le,
  Egt as ue,
  Fb as de,
  Fwt as fe,
  Gy as pe,
  HCn as me,
  Iwt as I,
  Lb as he,
  Lwt as L,
  OTr as ge,
  Pwt as _e,
  QDr as ve,
  Rb as R,
  WCn as z,
  XDr as ye,
  Xht as B,
  _an as V,
  _gt as H,
  afr as U,
  bgt as be,
  cfr as xe,
  gan as Se,
  gwr as Ce,
  jTr as W,
  jwt as we,
  pgt as Te,
  sgt as Ee,
  wTt as De,
  xTt as Oe,
  xwr as ke,
  yTt as Ae,
  yan as je,
} from "./app-initial-5851df3f6cb1.js";
import {
  $u as Me,
  Hu as Ne,
  Ku as Pe,
  Mu as Fe,
  Nu as Ie,
  Uu as Le,
  Xu as Re,
  Zu as ze,
  ju as Be,
  qu as Ve,
} from "./app-primary-fe8a450b3b04.js";
import { a as G, t as He } from "./PopcornManualEditHeaderControls-e0458d509e7c.js";
import {
  c as Ue,
  i as We,
  l as Ge,
  n as Ke,
  o as qe,
  s as Je,
  u as Ye,
} from "./artifact-annotation-batch-controls-58c22049fec2.js";
import { i as Xe, n as Ze, r as Qe, t as $e } from "./use-annotation-mode-exit-4d0f0fd2e6a2.js";
import { n as et, t as tt } from "./annotation-mode-icon-c9f59d42793c.js";
import { n as nt, t as rt } from "./annotation-mode-analytics-883da7ddba89.js";
import { n as it, t as at } from "./layout-7a4e7177e626.js";
import { r as ot } from "./artifact-accessories-fe3be839fff5.js";
import { n as st, t as ct } from "./presentation-annotation-coachmark-1ba238d606f8.js";
import { n as K, t as lt } from "./menu-items-b78a5ea99a11.js";
import { n as ut, t as dt } from "./header-b4e8c147ec9e.js";
import { n as q, t as ft } from "./artifact-originating-turn-4517ac8fac03.js";
import { n as pt, r as mt, t as ht } from "./artifact-preview-header-b624a4e82866.js";
import { n as gt, t as _t } from "./artifact-preview-status-c9c48d8baae3.js";
import { o as vt, t as yt } from "./artifact-preview-zoom-be9e5386c42a.js";
import {
  a as bt,
  c as xt,
  i as St,
  l as Ct,
  r as wt,
  s as Tt,
  t as Et,
} from "./paged-thumbnail-rail-layout-6efffdc811e2.js";
import { n as Dt, t as Ot } from "./annotation-comment-editor-card-957f5525f8bc.js";
import { n as kt, r as At, t as jt } from "./document-73e48c5158c9.js";
function Mt(e) {
  return `${e.localPdfContext?.path ?? ``}:${e.localPdfContext?.pageNumber ?? 0}:${e.position.line}`;
}
function Nt(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `num` in e &&
    typeof e.num == `number` &&
    `gen` in e &&
    typeof e.gen == `number`
  );
}
var Pt;
function J() {
  return (J = e(() => {
    Pt = class {
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
        if (!Nt(t)) return null;
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
function Ft(e) {
  let t = (0, It.c)(8),
    { deferMs: n, page: r, pageSelector: i, pdfDocument: a, scrollRootRef: o } = e,
    s = (0, Lt.useRef)(null),
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
            let e = await jt(),
              n = await r.getAnnotations();
            if (c || n.length === 0) return;
            let s = r.getViewport({ scale: 1 }),
              l = new Pt({ pageSelector: i, pdfDocument: a, scrollRootRef: o });
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
    (0, Lt.useEffect)(c, l));
  let u;
  return (
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, Rt.jsx)(`div`, { ref: s, className: `annotationLayer` })), (t[7] = u))
      : (u = t[7]),
    u
  );
}
var It, Lt, Rt;
function zt() {
  return (zt = e(() => {
    ((It = A()), (Lt = N()), kt(), J(), (Rt = M()));
  }))();
}
function Bt(e) {
  let t = (0, Qt.c)(91),
    {
      ref: n,
      annotationBatchingEnabled: i,
      annotationSourcePath: a,
      comments: o,
      editingDisabled: c,
      getOriginatingTurn: l,
      isCommentMode: u,
      nextCommentNumber: f,
      onCommentsChange: p,
      onDraftActiveChange: m,
      onFocusAnnotation: h,
      onInteractionChange: g,
      onStarted: _,
      onSendBatch: v,
      requestEditsEnabled: y,
      originatingTurn: b,
      conversationId: S,
      page: C,
      pageCount: ne,
      pageNumber: w,
      pageSize: T,
      path: E,
      threadId: D,
      title: O,
    } = e,
    A = c !== void 0 && c,
    j = y !== void 0 && y,
    M = s(r),
    N = ee(),
    ie = j || i,
    ae;
  t[0] === A ? (ae = t[1]) : ((ae = () => A), (t[0] = A), (t[1] = ae));
  let oe = re(ae),
    P = (0, Y.useRef)(null),
    se;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = () => (
        (P.current = Symbol()),
        () => {
          P.current = null;
        }
      )),
      (t[2] = se))
    : (se = t[2]);
  let ce;
  (t[3] !== S || t[4] !== C || t[5] !== w || t[6] !== E
    ? ((ce = [S, C, w, E]), (t[3] = S), (t[4] = C), (t[5] = w), (t[6] = E), (t[7] = ce))
    : (ce = t[7]),
    (0, Y.useEffect)(se, ce));
  let F;
  if (t[8] !== o || t[9] !== w) {
    F = [];
    for (let e of o) {
      if (e.localPdfContext?.pageNumber !== w) continue;
      let t = Wt(e),
        n = e.localPdfCommentMetadata;
      t != null &&
        n != null &&
        F.push({ id: Mt(e), label: e.position.line, body: Gt(e), anchor: t, pageSize: n.pageSize });
    }
    ((t[8] = o), (t[9] = w), (t[10] = F));
  } else F = t[10];
  let le;
  t[11] !== o || t[12] !== p
    ? ((le = (e, t) => {
        p((n) => Tt(n, o, e, t, Mt));
      }),
      (t[11] = o),
      (t[12] = p),
      (t[13] = le))
    : (le = t[13]);
  let ue = le,
    de = `${S}:${E}:${w}`,
    pe;
  t[14] !== N || t[15] !== j
    ? ((pe = j
        ? N.formatMessage({
            id: `artifactViewer.requestEdits`,
            defaultMessage: `Request edits`,
            description: `Button label for requesting edits to an artifact`,
          })
        : N.formatMessage({
            id: `artifactPdfPreview.askForChange`,
            defaultMessage: `Ask for change`,
            description: `Button label for starting a contextual PDF annotation from selected text`,
          })),
      (t[14] = N),
      (t[15] = j),
      (t[16] = pe))
    : (pe = t[16]);
  let me;
  t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((me = Ie()), (t[17] = me)) : (me = t[17]);
  let he;
  t[18] === N
    ? (he = t[19])
    : ((he = (e) =>
        N.formatMessage(
          {
            id: `artifactPdfPreview.commentMarkerLabel`,
            defaultMessage: `PDF annotation {commentNumber}`,
            description: `Accessible label for a placed PDF annotation marker`,
          },
          { commentNumber: e },
        )),
      (t[18] = N),
      (t[19] = he));
  let ge;
  t[20] !== u || t[21] !== m || t[22] !== w || t[23] !== M
    ? ((ge = (e) => {
        (e && !u && nt(M, { surface: `file_artifact` }), m?.(w, e));
      }),
      (t[20] = u),
      (t[21] = m),
      (t[22] = w),
      (t[23] = M),
      (t[24] = ge))
    : (ge = t[24]);
  let _e;
  t[25] !== l || t[26] !== u || t[27] !== _ || t[28] !== b || t[29] !== M || t[30] !== D
    ? ((_e = (e) => {
        (I(
          M,
          { artifactType: `pdf`, importKind: `pdf`, originatingTurn: l == null ? b : l(), threadId: D },
          { annotationModeEnabled: u, startSource: e },
        ),
          _?.());
      }),
      (t[25] = l),
      (t[26] = u),
      (t[27] = _),
      (t[28] = b),
      (t[29] = M),
      (t[30] = D),
      (t[31] = _e))
    : (_e = t[31]);
  let R;
  t[32] !== M || t[33] !== D
    ? ((R = () => fe(M, { artifactType: `pdf`, importKind: `pdf`, threadId: D })),
      (t[32] = M),
      (t[33] = D),
      (t[34] = R))
    : (R = t[34]);
  let z;
  t[35] !== ie || t[36] !== ue || t[37] !== v
    ? ((z = ie
        ? (e, t) => {
            (ue(e, t), v?.());
          }
        : void 0),
      (t[35] = ie),
      (t[36] = ue),
      (t[37] = v),
      (t[38] = z))
    : (z = t[38]);
  let ye;
  t[39] === p
    ? (ye = t[40])
    : ((ye = (e) => p((t) => t.filter((t) => Mt(t) !== e))), (t[39] = p), (t[40] = ye));
  let B;
  t[41] !== a ||
  t[42] !== ie ||
  t[43] !== S ||
  t[44] !== l ||
  t[45] !== u ||
  t[46] !== oe ||
  t[47] !== f ||
  t[48] !== p ||
  t[49] !== v ||
  t[50] !== b ||
  t[51] !== C ||
  t[52] !== ne ||
  t[53] !== w ||
  t[54] !== E ||
  t[55] !== M ||
  t[56] !== D ||
  t[57] !== O
    ? ((B = async (e) => {
        let { anchor: t, pageSize: n, body: r, submitMode: i, submitSource: o } = e,
          s = P.current,
          c = Ut({ anchor: t, pageSize: n }),
          ee = crypto.randomUUID(),
          m;
        try {
          m = await Kt({
            anchor: t,
            commentId: ee,
            markerLabel: String(f),
            page: C,
            pageNumber: w,
            pageSize: n,
          });
        } catch {
          m = void 0;
        }
        if (oe() || s == null || P.current !== s) return `canceled`;
        let h = k({
          body: r,
          line: f,
          metadata: c,
          pageCount: ne,
          pageNumber: w,
          path: E,
          screenshot: m,
          sourcePath: a,
          title: O,
        });
        return (
          ve(M, d, { commentType: c.kind, submitMode: i }),
          L(
            M,
            { artifactType: `pdf`, importKind: `pdf`, originatingTurn: l == null ? b : l(), threadId: D },
            { annotationModeEnabled: u, annotationTargetKind: c.kind, submitMode: i, submitSource: o },
          ),
          i === `direct` && !ie
            ? x.dispatchHostMessage({
                type: `pdf-direct-comment`,
                body: r,
                comment: h,
                conversationId: S,
                sessionId: ee,
              })
            : (p((e) => [...e, h]), i === `direct` && v?.()),
          `submitted`
        );
      }),
      (t[41] = a),
      (t[42] = ie),
      (t[43] = S),
      (t[44] = l),
      (t[45] = u),
      (t[46] = oe),
      (t[47] = f),
      (t[48] = p),
      (t[49] = v),
      (t[50] = b),
      (t[51] = C),
      (t[52] = ne),
      (t[53] = w),
      (t[54] = E),
      (t[55] = M),
      (t[56] = D),
      (t[57] = O),
      (t[58] = B))
    : (B = t[58]);
  let V;
  t[59] !== N || t[60] !== M
    ? ((V = () =>
        M.get(te).danger(
          N.formatMessage({
            id: `artifactAnnotationComment.submitError`,
            defaultMessage: `Unable to submit annotation`,
            description: `Toast shown when preparing an annotation for saving or sending fails`,
          }),
          { errorAnalytics: { toastId: `artifactAnnotationComment.submitError` } },
        )),
      (t[59] = N),
      (t[60] = M),
      (t[61] = V))
    : (V = t[61]);
  let H;
  t[62] !== ie || t[63] !== S || t[64] !== N || t[65] !== w || t[66] !== E || t[67] !== F || t[68] !== O
    ? ((H = (e) => {
        let t = e.body;
        if (e.target.mode === `edit`) {
          let n = e.target.annotationId;
          t = F.find((e) => e.id === n)?.body ?? e.body;
        }
        let n = Ht({
          anchor: e.anchor,
          body: t,
          conversationId: S,
          pageNumber: w,
          pageSize: e.pageSize,
          path: E,
          target: e.target.mode === `edit` ? { mode: `edit`, commentId: e.target.annotationId } : e.target,
          title: O,
        });
        return (0, $t.jsx)(
          Ot,
          {
            allowImageAttachments: !1,
            allowDirectSubmitOnEdit: ie,
            createSubmitButtonSize: `formatToolbar`,
            defaultCreateSubmitMode: ie ? `saved` : `direct`,
            inputAriaLabel: N.formatMessage({
              id: `artifactPdfPreview.commentInput`,
              defaultMessage: `PDF annotation comment`,
              description: `Aria label for the PDF annotation comment input`,
            }),
            keyboardEventTarget: typeof window > `u` ? void 0 : window,
            placeholder: N.formatMessage({
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
            onLightDismissibilityChange: en,
            onMounted: en,
            onSubmit: e.onSubmit,
          },
          n.sessionId,
        );
      }),
      (t[62] = ie),
      (t[63] = S),
      (t[64] = N),
      (t[65] = w),
      (t[66] = E),
      (t[67] = F),
      (t[68] = O),
      (t[69] = H))
    : (H = t[69]);
  let U;
  return (
    t[70] !== ue ||
    t[71] !== A ||
    t[72] !== u ||
    t[73] !== f ||
    t[74] !== h ||
    t[75] !== g ||
    t[76] !== T ||
    t[77] !== F ||
    t[78] !== n ||
    t[79] !== he ||
    t[80] !== ge ||
    t[81] !== _e ||
    t[82] !== R ||
    t[83] !== z ||
    t[84] !== ye ||
    t[85] !== B ||
    t[86] !== V ||
    t[87] !== H ||
    t[88] !== de ||
    t[89] !== pe
      ? ((U = (0, $t.jsx)(
          Ne,
          {
            ref: n,
            theme: `codex`,
            records: F,
            onFocusAnnotation: h,
            onInteractionChange: g,
            pageSize: T,
            isAnnotationMode: u,
            editingDisabled: A,
            nextAnnotationNumber: f,
            askForEditLabel: pe,
            shortcutLabel: me,
            getAnnotationMarkerLabel: he,
            onDraftActiveChange: ge,
            onStarted: _e,
            onPillShown: R,
            onEdit: ue,
            onEditDirectSubmit: z,
            onDelete: ye,
            onCreate: B,
            onCreateError: V,
            renderPreviewBody: Vt,
            renderEditor: H,
          },
          de,
        )),
        (t[70] = ue),
        (t[71] = A),
        (t[72] = u),
        (t[73] = f),
        (t[74] = h),
        (t[75] = g),
        (t[76] = T),
        (t[77] = F),
        (t[78] = n),
        (t[79] = he),
        (t[80] = ge),
        (t[81] = _e),
        (t[82] = R),
        (t[83] = z),
        (t[84] = ye),
        (t[85] = B),
        (t[86] = V),
        (t[87] = H),
        (t[88] = de),
        (t[89] = pe),
        (t[90] = U))
      : (U = t[90]),
    U
  );
}
function Vt(e) {
  return (0, $t.jsx)(Be, { body: e });
}
function Ht({
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
function Ut({ anchor: e, pageSize: t }) {
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
function Wt(e) {
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
function Gt(e) {
  return e.content.flatMap((e) => (e.content_type === `text` ? [e.text] : [])).join(`
`);
}
async function Kt({ anchor: e, commentId: t, markerLabel: n, page: r, pageNumber: i, pageSize: a }) {
  let o = qt(e, a),
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
    Yt({ anchor: e, context: u, crop: o, markerLabel: n, scale: s }),
    { commentId: t, dataUrl: l.toDataURL(`image/png`), height: l.height, pageNumber: i, width: l.width }
  );
}
function qt(e, t) {
  if (e.kind === `region`) {
    let n = Math.max(24, Math.min(72, Math.min(e.rect.width, e.rect.height) * 0.25));
    return Jt(
      { x: e.rect.x - n, y: e.rect.y - n, width: e.rect.width + n * 2, height: e.rect.height + n * 2 },
      t,
    );
  }
  return Jt({ x: e.point.x - 180, y: e.point.y - 120, width: 360, height: 240 }, t);
}
function Jt(e, t) {
  let n = Math.min(Math.max(e.width, 1), t.width),
    r = Math.min(Math.max(e.height, 1), t.height);
  return { x: Zt(e.x, 0, t.width - n), y: Zt(e.y, 0, t.height - r), width: n, height: r };
}
function Yt({ anchor: e, context: t, crop: n, markerLabel: r, scale: i }) {
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
    (t.strokeRect(a, o, s, c), Xt(t, r, a + s, o));
  } else Xt(t, r, (e.point.x - n.x) * i, (e.point.y - n.y) * i);
  t.restore();
}
function Xt(e, t, n, r) {
  (e.beginPath(),
    e.arc(n, r, 11, 0, Math.PI * 2),
    e.fill(),
    (e.lineWidth = 2),
    (e.strokeStyle = `#fff`),
    e.stroke(),
    (e.fillStyle = `#fff`),
    e.fillText(t, n, r + 0.5));
}
function Zt(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var Qt, Y, $t, en;
function tn() {
  return (tn = e(() => {
    ((Qt = A()),
      p(),
      Me(),
      Re(),
      Le(),
      f(),
      T(),
      (Y = N()),
      C(),
      Dt(),
      rt(),
      ne(),
      S(),
      ye(),
      j(),
      _(),
      we(),
      Fe(),
      ($t = M()),
      (en = () => {}));
  }))();
}
function nn(e) {
  let t = (0, rn.c)(6),
    { deferMs: n, page: r, search: i } = e,
    a = (0, an.useRef)(null),
    o,
    s;
  (t[0] !== n || t[1] !== r || t[2] !== i
    ? ((o = () => {
        let e = a.current;
        if (e == null) return;
        let t = e;
        t.innerHTML = ``;
        let o = !1,
          s = null,
          c,
          l = null,
          u = async function () {
            let e = await jt();
            if (o) return;
            s = new e.TextLayer({
              container: t,
              textContentSource: r.streamTextContent({ includeMarkedContent: !0 }),
              viewport: r.getViewport({ scale: 1 }),
            });
            try {
              await s.render();
            } catch {
              return;
            }
            if (o) return;
            c = i?.registerTextLayer(r.pageNumber - 1, s);
            let n = document.createElement(`div`);
            ((n.className = `endOfContent`), t.append(n));
          };
        return (
          (l = setTimeout(() => {
            u();
          }, n)),
          () => {
            ((o = !0), l != null && clearTimeout(l), c?.(), s?.cancel(), (t.innerHTML = ``));
          }
        );
      }),
      (s = [n, r, i]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = s))
    : ((o = t[3]), (s = t[4])),
    (0, an.useEffect)(o, s));
  let c;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, on.jsx)(`div`, { ref: a, className: `textLayer` })), (t[5] = c))
      : (c = t[5]),
    c
  );
}
var rn, an, on;
function sn() {
  return (sn = e(() => {
    ((rn = A()), (an = N()), kt(), (on = M()));
  }))();
}
function cn(e) {
  let t = (0, hn.c)(36),
    { onBeforeZoom: n, pageViewportSize: r, pageWidth: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = { kind: `page-width` }), (t[0] = a)) : (a = t[0]);
  let [o, s] = (0, gn.useState)(a),
    [c, l] = (0, gn.useState)(!1),
    [u, d] = (0, gn.useState)(0),
    f = (0, gn.useRef)(null),
    p = (0, gn.useRef)(null),
    ee = (0, gn.useRef)(null),
    m;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        (l(!0),
          f.current != null && window.clearTimeout(f.current),
          (f.current = window.setTimeout(() => {
            ((f.current = null), l(!1), d(ln));
          }, 120)));
      }),
      (t[1] = m))
    : (m = t[1]);
  let h = m,
    g,
    _;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => () => {
        (f.current != null && window.clearTimeout(f.current),
          ee.current != null && window.clearTimeout(ee.current));
      }),
      (_ = []),
      (t[2] = g),
      (t[3] = _))
    : ((g = t[2]), (_ = t[3])),
    (0, gn.useEffect)(g, _));
  let v;
  t[4] === n
    ? (v = t[5])
    : ((v = (e) => {
        (n({ kind: `center` }), h(), s(e));
      }),
      (t[4] = n),
      (t[5] = v));
  let y = v,
    b;
  t[6] !== r || t[7] !== i
    ? ((b = (e) => un({ pageViewportSize: r, pageWidth: i, resize: e })), (t[6] = r), (t[7] = i), (t[8] = b))
    : (b = t[8]);
  let x = b,
    S;
  t[9] === y
    ? (S = t[10])
    : ((S = () => {
        y({ kind: `page-width` });
      }),
      (t[9] = y),
      (t[10] = S));
  let te = S,
    C;
  t[11] === y
    ? (C = t[12])
    : ((C = (e) => {
        y({ kind: `percentage`, value: mn(e / 100) });
      }),
      (t[11] = y),
      (t[12] = C));
  let ne = C,
    w;
  t[13] !== x || t[14] !== n
    ? ((w = () => {
        (n({ kind: `center` }), h(), s((e) => ({ kind: `percentage`, value: fn(x(e), `out`) })));
      }),
      (t[13] = x),
      (t[14] = n),
      (t[15] = w))
    : (w = t[15]);
  let T = w,
    E;
  t[16] !== x || t[17] !== n
    ? ((E = () => {
        (n({ kind: `center` }), h(), s((e) => ({ kind: `percentage`, value: fn(x(e), `in`) })));
      }),
      (t[16] = x),
      (t[17] = n),
      (t[18] = E))
    : (E = t[18]);
  let D = E,
    O;
  t[19] !== x || t[20] !== n
    ? ((O = (e) => {
        e.ctrlKey &&
          (e.preventDefault(),
          e.deltaY !== 0 &&
            (ee.current != null && window.clearTimeout(ee.current),
            (ee.current = window.setTimeout(() => {
              ((p.current = null), (ee.current = null));
            }, wn)),
            n({ clientX: e.clientX, clientY: e.clientY, kind: `point` }),
            h(),
            s((t) => {
              let n = x(t),
                r = Math.max(-20, Math.min(Sn, e.deltaY)),
                i = mn((p.current?.rawZoom ?? n) * Math.exp(-r * xn));
              return ((p.current = { rawZoom: i }), { kind: `percentage`, value: pn(i) });
            })));
      }),
      (t[19] = x),
      (t[20] = n),
      (t[21] = O))
    : (O = t[21]);
  let k = O,
    A;
  t[22] !== x || t[23] !== o
    ? ((A = Math.round(x(o) * 100)), (t[22] = x), (t[23] = o), (t[24] = A))
    : (A = t[24]);
  let j;
  return (
    t[25] !== T ||
    t[26] !== te ||
    t[27] !== k ||
    t[28] !== D ||
    t[29] !== c ||
    t[30] !== o ||
    t[31] !== y ||
    t[32] !== ne ||
    t[33] !== A ||
    t[34] !== u
      ? ((j = {
          beginScaleChange: h,
          decreaseZoom: T,
          fitToWidth: te,
          handleWheel: k,
          increaseZoom: D,
          isZooming: c,
          resize: o,
          setResize: y,
          setZoomPercent: ne,
          zoomEndTick: u,
          zoomPercent: A,
        }),
        (t[25] = T),
        (t[26] = te),
        (t[27] = k),
        (t[28] = D),
        (t[29] = c),
        (t[30] = o),
        (t[31] = y),
        (t[32] = ne),
        (t[33] = A),
        (t[34] = u),
        (t[35] = j))
      : (j = t[35]),
    j
  );
}
function ln(e) {
  return e + 1;
}
function un({ pageViewportSize: e, pageWidth: t, resize: n }) {
  if (n.kind === `percentage`) return mn(n.value);
  let r = (e?.width ?? _n.width) * X;
  return t == null || t <= 0 || r <= 0 ? 1 : Math.min(1, t / r);
}
function dn({ pageViewportSize: e, pageWidth: t, resize: n }) {
  let r = e ?? _n,
    i = r.width / r.height,
    a = r.width * X * un({ pageViewportSize: e, pageWidth: t, resize: n });
  return { height: Math.round(a / i), width: Math.round(a) };
}
function fn(e, t) {
  let n = mn(e);
  if (t === `in`) {
    for (let e of Z) if (e > n + bn) return e;
    return Z[Z.length - 1];
  }
  for (let e = Z.length - 1; e >= 0; --e) {
    let t = Z[e];
    if (t < n - bn) return t;
  }
  return Z[0];
}
function pn(e) {
  for (let t of Z) if (Math.abs(e - t) <= t * Cn) return t;
  return e;
}
function mn(e) {
  return Math.min(yn, Math.max(vn, e));
}
var hn, gn, _n, X, vn, yn, bn, xn, Sn, Cn, wn, Z;
function Tn() {
  return (Tn = e(() => {
    ((hn = A()),
      (gn = N()),
      (_n = { height: 792, width: 612 }),
      (X = 96 / 72),
      (vn = 0.3),
      (yn = 8),
      (bn = 1e-4),
      (xn = 0.005),
      (Sn = 20),
      (Cn = 0.02),
      (wn = 200),
      (Z = [vn, 0.4, 0.5, 0.67, 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5, 6, 7, yn]));
  }))();
}
function En(e) {
  return typeof e == `object` && !!e && `name` in e && e.name === `RenderingCancelledException`;
}
var Dn, On, kn, An;
function jn() {
  return (jn = e(() => {
    ((Dn = A()),
      (On = N()),
      C(),
      zt(),
      tn(),
      sn(),
      Tn(),
      (kn = M()),
      (An = (0, On.memo)(function (e) {
        let t = (0, Dn.c)(88),
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
          b = (0, On.useRef)(null),
          x = (0, On.useRef)(null),
          [S, te] = (0, On.useState)(null),
          [C, ne] = (0, On.useState)(null),
          [w, T] = (0, On.useState)(!1),
          E = S?.pdfDocument === c && S.pageNumber === i,
          D = E ? S.page : null,
          O = E ? S.viewportSize : null,
          k = O ?? o,
          A;
        t[0] !== s || t[1] !== l || t[2] !== k
          ? ((A = dn({ pageViewportSize: k, pageWidth: s, resize: l })),
            (t[0] = s),
            (t[1] = l),
            (t[2] = k),
            (t[3] = A))
          : (A = t[3]);
        let j = A,
          M = O != null && O.width > 0 ? j.width / O.width : 1,
          re = Math.abs(r - i),
          N = w || re <= 2,
          ie = w || re <= 2,
          ae = w ? 50 : 50 + re * 40,
          oe = ae + re * 60,
          P,
          se;
        (t[4] !== i || t[5] !== c || t[6] !== u
          ? ((P = () => {
              let e = !1;
              return (
                (async function () {
                  try {
                    let t = await c.getPage(i);
                    if (e) return;
                    let n = t.getViewport({ scale: 1 });
                    te({
                      page: t,
                      pageNumber: i,
                      pdfDocument: c,
                      viewportSize: { height: n.height, width: n.width },
                    });
                  } catch {
                    e || ne({ pdfDocument: c, pageNumber: i, renderRequestKey: u });
                  }
                })(),
                () => {
                  e = !0;
                }
              );
            }),
            (se = [i, c, u]),
            (t[4] = i),
            (t[5] = c),
            (t[6] = u),
            (t[7] = P),
            (t[8] = se))
          : ((P = t[7]), (se = t[8])),
          (0, On.useEffect)(P, se));
        let ce, F;
        (t[9] !== r || t[10] !== C || t[11] !== w || t[12] !== m || t[13] !== i || t[14] !== c || t[15] !== u
          ? ((ce = () => {
              C?.pdfDocument !== c ||
                C.pageNumber !== i ||
                C.renderRequestKey !== u ||
                (!w && r !== i) ||
                m?.();
            }),
            (F = [r, C, w, m, i, c, u]),
            (t[9] = r),
            (t[10] = C),
            (t[11] = w),
            (t[12] = m),
            (t[13] = i),
            (t[14] = c),
            (t[15] = u),
            (t[16] = ce),
            (t[17] = F))
          : ((ce = t[16]), (F = t[17])),
          (0, On.useEffect)(ce, F));
        let le, ue;
        (t[18] !== O || t[19] !== g
          ? ((le = () => {
              O != null && g?.();
            }),
            (ue = [O, g]),
            (t[18] = O),
            (t[19] = g),
            (t[20] = le),
            (t[21] = ue))
          : ((le = t[20]), (ue = t[21])),
          (0, On.useLayoutEffect)(le, ue));
        let de, fe;
        (t[22] === d
          ? ((de = t[23]), (fe = t[24]))
          : ((fe = () => {
              let e = x.current;
              if (e == null) return;
              if (typeof IntersectionObserver > `u`) {
                T(!0);
                return;
              }
              let t = new IntersectionObserver(
                (e) => {
                  let t = e[0];
                  t != null && T(t.isIntersecting || t.intersectionRatio > 0);
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
            (de = [d]),
            (t[22] = d),
            (t[23] = de),
            (t[24] = fe)),
          (0, On.useEffect)(fe, de));
        let pe;
        t[25] !== j.height ||
        t[26] !== j.width ||
        t[27] !== w ||
        t[28] !== p ||
        t[29] !== m ||
        t[30] !== h ||
        t[31] !== D ||
        t[32] !== N
          ? ((pe = () => {
              let e = b.current;
              if (e == null) return;
              if (D == null || !N) {
                ((e.width = 0), (e.height = 0), D?.cleanup());
                return;
              }
              if (p) return;
              let t = D.getViewport({ scale: 1 });
              if (t.width <= 0 || j.width <= 0 || j.height <= 0) return;
              let n = !1,
                r = null,
                i = window.devicePixelRatio || 1,
                a = Math.ceil(j.width * i),
                o = Math.ceil(j.height * i);
              ((e.width = a), (e.height = o), e.getContext(`2d`)?.clearRect(0, 0, a, o));
              try {
                ((r = D.render({ canvas: e, viewport: D.getViewport({ scale: a / t.width }) })),
                  r.promise.then(
                    () => {
                      !n && w && h?.();
                    },
                    (e) => {
                      !n && w && !En(e) && m?.();
                    },
                  ));
              } catch (e) {
                w && !En(e) && m?.();
                return;
              }
              return () => {
                ((n = !0), r?.cancel());
              };
            }),
            (t[25] = j.height),
            (t[26] = j.width),
            (t[27] = w),
            (t[28] = p),
            (t[29] = m),
            (t[30] = h),
            (t[31] = D),
            (t[32] = N),
            (t[33] = pe))
          : (pe = t[33]);
        let me;
        (t[34] !== j.height ||
        t[35] !== j.width ||
        t[36] !== w ||
        t[37] !== p ||
        t[38] !== m ||
        t[39] !== h ||
        t[40] !== D ||
        t[41] !== u ||
        t[42] !== N ||
        t[43] !== v
          ? ((me = [j.height, j.width, w, p, m, h, D, u, N, v]),
            (t[34] = j.height),
            (t[35] = j.width),
            (t[36] = w),
            (t[37] = p),
            (t[38] = m),
            (t[39] = h),
            (t[40] = D),
            (t[41] = u),
            (t[42] = N),
            (t[43] = v),
            (t[44] = me))
          : (me = t[44]),
          (0, On.useEffect)(pe, me));
        let I = _ == null ? void 0 : 0,
          he;
        t[45] !== y || t[46] !== _ || t[47] !== i
          ? ((he =
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
            (t[48] = he))
          : (he = t[48]);
        let L;
        t[49] !== O || t[50] !== _ || t[51] !== i
          ? ((L =
              _ == null
                ? void 0
                : (e) => {
                    e.key === `Enter` &&
                      e.target === e.currentTarget &&
                      O != null &&
                      (e.preventDefault(), _(i, O.width / 2, O.height / 2));
                  }),
            (t[49] = O),
            (t[50] = _),
            (t[51] = i),
            (t[52] = L))
          : (L = t[52]);
        let ge;
        t[53] !== O || t[54] !== _ || t[55] !== i
          ? ((ge =
              _ == null
                ? void 0
                : (e) => {
                    if (
                      O == null ||
                      (e.target instanceof Element && e.target.closest(`a,button,input`)) ||
                      window.getSelection()?.toString()
                    )
                      return;
                    let t = e.currentTarget.getBoundingClientRect();
                    t.width > 0 &&
                      t.height > 0 &&
                      _(
                        i,
                        ((e.clientX - t.left) / t.width) * O.width,
                        ((e.clientY - t.top) / t.height) * O.height,
                      );
                  }),
            (t[53] = O),
            (t[54] = _),
            (t[55] = i),
            (t[56] = ge))
          : (ge = t[56]);
        let _e = O == null ? void 0 : ``,
          ve = D?.userUnit ?? 1,
          R;
        t[57] !== j.height || t[58] !== j.width || t[59] !== M || t[60] !== ve
          ? ((R = { "--scale-factor": M, "--user-unit": ve, height: j.height, width: j.width }),
            (t[57] = j.height),
            (t[58] = j.width),
            (t[59] = M),
            (t[60] = ve),
            (t[61] = R))
          : (R = t[61]);
        let z = R,
          ye;
        t[62] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((ye = (0, kn.jsx)(`canvas`, { ref: b, className: `absolute inset-0 size-full` })), (t[62] = ye))
          : (ye = t[62]);
        let B;
        t[63] !== oe ||
        t[64] !== p ||
        t[65] !== D ||
        t[66] !== a ||
        t[67] !== c ||
        t[68] !== d ||
        t[69] !== f ||
        t[70] !== ie ||
        t[71] !== ae
          ? ((B =
              D == null || p || !ie
                ? null
                : (0, kn.jsxs)(kn.Fragment, {
                    children: [
                      (0, kn.jsx)(nn, { search: f, page: D, deferMs: ae }),
                      (0, kn.jsx)(Ft, {
                        deferMs: oe,
                        page: D,
                        pageSelector: a,
                        pdfDocument: c,
                        scrollRootRef: d,
                      }),
                    ],
                  })),
            (t[63] = oe),
            (t[64] = p),
            (t[65] = D),
            (t[66] = a),
            (t[67] = c),
            (t[68] = d),
            (t[69] = f),
            (t[70] = ie),
            (t[71] = ae),
            (t[72] = B))
          : (B = t[72]);
        let V;
        t[73] !== n || t[74] !== O || t[75] !== D || t[76] !== i
          ? ((V =
              D == null || O == null || n == null
                ? null
                : (0, kn.jsx)(
                    Bt,
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
                      page: D,
                      pageCount: n.pageCount,
                      pageNumber: i,
                      pageSize: O,
                      path: n.path,
                      threadId: n.threadId,
                      title: n.title,
                    },
                    n.requestEditsEnabled || n.isCommentMode ? `comment` : `browse`,
                  )),
            (t[73] = n),
            (t[74] = O),
            (t[75] = D),
            (t[76] = i),
            (t[77] = V))
          : (V = t[77]);
        let H;
        return (
          t[78] !== i ||
          t[79] !== I ||
          t[80] !== he ||
          t[81] !== L ||
          t[82] !== ge ||
          t[83] !== _e ||
          t[84] !== z ||
          t[85] !== B ||
          t[86] !== V
            ? ((H = (0, kn.jsxs)(`div`, {
                ref: x,
                className: `pdfPreviewPage relative shrink-0 overflow-hidden border border-default bg-white shadow-sm`,
                "data-artifact-pdf-page": !0,
                "data-page-number": i,
                role: `group`,
                tabIndex: I,
                "aria-label": he,
                onKeyDown: L,
                onClick: ge,
                "data-page-viewport-ready": _e,
                style: z,
                children: [ye, B, V],
              })),
              (t[78] = i),
              (t[79] = I),
              (t[80] = he),
              (t[81] = L),
              (t[82] = ge),
              (t[83] = _e),
              (t[84] = z),
              (t[85] = B),
              (t[86] = V),
              (t[87] = H))
            : (H = t[87]),
          H
        );
      })));
  }))();
}
var Mn;
function Nn() {
  return (Nn = e(() => {
    (kt(),
      J(),
      w(),
      (Mn = class e {
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
          await jt();
          let {
              EventBus: i,
              PDFFindController: a,
              FindState: o,
            } = await y(
              async () => {
                let {
                  EventBus: e,
                  PDFFindController: t,
                  FindState: n,
                } = await import(`./pdf_viewer-ba68e1320819.js`);
                return { EventBus: e, PDFFindController: t, FindState: n };
              },
              __vite__mapDeps([0, 1, 2, 3]),
              import.meta.url,
            ),
            s = new i(),
            c = new a({
              eventBus: s,
              linkService: new Pt({ pdfDocument: t, pageSelector: n, scrollRootRef: r }),
            });
          return new e(t, s, c, o.PENDING);
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
function Pn(e) {
  let t = (0, Fn.c)(20),
    { children: n, title: r, pdfDocument: i, pageSelector: a, scrollRootRef: o } = e,
    c = s(Ce),
    l = (0, In.useRef)(null),
    [u, d] = (0, In.useState)(null),
    [f, p] = (0, In.useState)(null),
    ee = u?.pdfDocument === i ? u : null,
    m,
    g;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        l.current?.focus({ preventScroll: !0 });
      }),
      (g = []),
      (t[0] = m),
      (t[1] = g))
    : ((m = t[0]), (g = t[1])),
    (0, In.useLayoutEffect)(m, g));
  let _, v;
  if (
    (t[2] !== a || t[3] !== i || t[4] !== c || t[5] !== o || t[6] !== r
      ? ((_ = () => {
          let e = l.current;
          if (e == null || i == null) return;
          let t = !1,
            n = null,
            s = {
              title: r,
              containsFocus: () => e.contains(e.ownerDocument.activeElement),
              focus: () => e.focus({ preventScroll: !0 }),
              getController: () => (
                (n ??= Mn.create({ pdfDocument: i, pageSelector: a, scrollRootRef: o })
                  .then((e) => (t || d(e), e))
                  .catch((e) => {
                    throw (t || p(e), e);
                  })),
                n
              ),
            },
            u = ue(c, s),
            f = () => H(c, s);
          return (
            e.addEventListener(`focusin`, f),
            s.containsFocus() && f(),
            () => {
              ((t = !0), e.removeEventListener(`focusin`, f), u());
            }
          );
        }),
        (v = [i, a, o, c, r]),
        (t[2] = a),
        (t[3] = i),
        (t[4] = c),
        (t[5] = o),
        (t[6] = r),
        (t[7] = _),
        (t[8] = v))
      : ((_ = t[7]), (v = t[8])),
    (0, In.useEffect)(_, v),
    f != null)
  )
    throw f;
  let y;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (e) => {
        e.target instanceof HTMLElement &&
          e.target.closest(`input, textarea, button, a, [contenteditable=true]`) == null &&
          l.current?.focus({ preventScroll: !0 });
      }),
      (t[9] = y))
    : (y = t[9]);
  let b;
  t[10] !== i || t[11] !== c
    ? ((b = (e) => {
        if (e.key === `Escape` && c.get(Te) && c.get(Ee) === `file`) {
          (e.preventDefault(), e.stopPropagation(), B(c));
          return;
        }
        (h() ? e.metaKey : e.ctrlKey) &&
          !e.altKey &&
          !e.shiftKey &&
          e.key.toLowerCase() === `f` &&
          i != null &&
          (e.preventDefault(), e.stopPropagation(), se(c));
      }),
      (t[10] = i),
      (t[11] = c),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] !== ee || t[14] !== n ? ((x = n(ee)), (t[13] = ee), (t[14] = n), (t[15] = x)) : (x = t[15]);
  let S;
  return (
    t[16] !== b || t[17] !== x || t[18] !== r
      ? ((S = (0, Ln.jsx)(`section`, {
          ref: l,
          className: `relative flex h-full min-h-0 flex-col bg-background-artifact-preview outline-none`,
          "aria-label": r,
          tabIndex: -1,
          onPointerDownCapture: y,
          onKeyDown: b,
          children: x,
        })),
        (t[16] = b),
        (t[17] = x),
        (t[18] = r),
        (t[19] = S))
      : (S = t[19]),
    S
  );
}
var Fn, In, Ln;
function Rn() {
  return (Rn = e(() => {
    ((Fn = A()), f(), (In = N()), be(), g(), ce(), Nn(), (Ln = M()));
  }))();
}
function zn(e) {
  let t = (0, Hn.c)(8),
    { pageNumber: n, pdfDocument: r } = e,
    i = (0, Un.useRef)(null),
    a = (0, Un.useRef)(null),
    [o, s] = (0, Un.useState)(Bn),
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
    (0, Un.useEffect)(c, l));
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
              !s && !Vn(t) && ((e.width = 0), (e.height = 0));
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
    (0, Un.useEffect)(u, d));
  let f;
  return (
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Wn.jsx)(`div`, {
          ref: a,
          className: `relative aspect-3/4 w-full bg-surface-secondary`,
          children: (0, Wn.jsx)(`canvas`, {
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
function Bn() {
  return typeof IntersectionObserver > `u`;
}
function Vn(e) {
  return typeof e == `object` && !!e && `name` in e && e.name === `RenderingCancelledException`;
}
var Hn, Un, Wn;
function Gn() {
  return (Gn = e(() => {
    ((Hn = A()), (Un = N()), (Wn = M()));
  }))();
}
function Kn({ anchor: e, container: t, pageSelector: n }) {
  let r = t.getBoundingClientRect(),
    i = e.kind === `point` ? e.clientX : r.left + r.width / 2,
    a = e.kind === `point` ? e.clientY : r.top + r.height / 2,
    o = Jn({ anchorClientX: i, anchorClientY: a, container: t, pageSelector: n });
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
        ratioX: Qn((i - c.left) / c.width),
        ratioY: Qn((a - c.top) / c.height),
      };
}
function qn({ anchorState: e, container: t, pageSelector: n }) {
  let r = Yn({ container: t, pageNumber: e.pageNumber, pageSelector: n });
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
function Jn({ anchorClientX: e, anchorClientY: t, container: n, pageSelector: r }) {
  let i = document.elementFromPoint(e, t),
    a = i instanceof HTMLElement ? i.closest(r) : null;
  if (a != null && n.contains(a)) return a;
  let o = null,
    s = 1 / 0;
  for (let i of Xn(n, r)) {
    let n = i.getBoundingClientRect(),
      r = Zn({ max: n.bottom, min: n.top, value: t }) + Zn({ max: n.right, min: n.left, value: e });
    r < s && ((s = r), (o = i));
  }
  return o;
}
function Yn({ container: e, pageNumber: t, pageSelector: n }) {
  return Xn(e, n).find((e) => Number(e.dataset.pageNumber) === t) ?? null;
}
function Xn(e, t) {
  return Array.from(e.querySelectorAll(t));
}
function Zn({ max: e, min: t, value: n }) {
  return n < t ? t - n : n > e ? n - e : 0;
}
function Qn(e) {
  return Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0;
}
function $n(e) {
  let t = (0, ur.c)(61),
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
      getAnnotationOriginatingTurn: ee,
      headerFavoriteAction: m,
      headerMenuContent: h,
      headerPlacement: g,
      headerRightContent: _,
      headerTitleContent: v,
      environmentId: y,
      hostId: b,
      importKind: x,
      initialPage: S,
      libraryFile: te,
      onBeforeOpen: C,
      onBatchAction: ne,
      onClose: w,
      onRefresh: T,
      onDownload: E,
      onShare: D,
      onDocumentReady: O,
      onError: k,
      onPageChange: A,
      onSourceClick: j,
      onReady: M,
      originatingTurn: re,
      path: N,
      previewRequestKey: ie,
      refreshQueryCacheKey: ae,
      renderLayout: oe,
      tabId: P,
      title: se,
      versionHistoryEnabled: ce,
    } = e,
    F = r !== void 0 && r,
    le = o === void 0 || o,
    ue = s === void 0 ? `default` : s,
    de = l !== void 0 && l,
    fe = g === void 0 ? `overlay` : g,
    pe = x === void 0 ? `pdf` : x,
    I = ce !== void 0 && ce,
    [he, L] = (0, Q.useState)(0),
    ge = `${ie ?? `initial`}:${he}`,
    _e = `${b}\0${N}\0${p}\0${ge}`,
    ve;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((ve = () => L(er)), (t[0] = ve)) : (ve = t[0]);
  let R;
  t[1] !== T || t[2] !== _e
    ? ((R = (0, $.jsx)(tr, { onRefresh: T, onRetry: ve }, _e)), (t[1] = T), (t[2] = _e), (t[3] = R))
    : (R = t[3]);
  let z = R,
    ye = `${b}\0${N}\0${p}\0${ge}`,
    B;
  t[4] !== u || t[5] !== z
    ? ((B =
        u == null
          ? gt(`error`, `pdf`, z)
          : (0, $.jsx)(`div`, { className: `min-h-0 flex-1`, children: gt(`error`, `pdf`, z) })),
      (t[4] = u),
      (t[5] = z),
      (t[6] = B))
    : (B = t[6]);
  let V;
  t[7] !== u || t[8] !== oe || t[9] !== B
    ? ((V = (0, $.jsx)(`section`, {
        className: `flex h-full min-h-0 flex-col bg-background-artifact-preview`,
        children: (0, $.jsx)(at, { renderLayout: oe, header: u, content: B }),
      })),
      (t[7] = u),
      (t[8] = oe),
      (t[9] = B),
      (t[10] = V))
    : (V = t[10]);
  let H = F || n,
    U;
  t[11] !== i ||
  t[12] !== a ||
  t[13] !== le ||
  t[14] !== ue ||
  t[15] !== c ||
  t[16] !== de ||
  t[17] !== y ||
  t[18] !== u ||
  t[19] !== p ||
  t[20] !== d ||
  t[21] !== f ||
  t[22] !== ee ||
  t[23] !== m ||
  t[24] !== h ||
  t[25] !== fe ||
  t[26] !== _ ||
  t[27] !== v ||
  t[28] !== b ||
  t[29] !== pe ||
  t[30] !== S ||
  t[31] !== te ||
  t[32] !== ne ||
  t[33] !== C ||
  t[34] !== w ||
  t[35] !== O ||
  t[36] !== E ||
  t[37] !== k ||
  t[38] !== A ||
  t[39] !== M ||
  t[40] !== T ||
  t[41] !== D ||
  t[42] !== j ||
  t[43] !== re ||
  t[44] !== N ||
  t[45] !== ie ||
  t[46] !== ae ||
  t[47] !== oe ||
  t[48] !== F ||
  t[49] !== ge ||
  t[50] !== z ||
  t[51] !== H ||
  t[52] !== P ||
  t[53] !== se ||
  t[54] !== I
    ? ((U = (0, $.jsx)(nr, {
        environmentId: y,
        annotationBatchingEnabled: H,
        requestEditsEnabled: F,
        annotationHandleRef: i,
        annotationSourcePath: a,
        annotationsEnabled: le,
        chromeMode: ue,
        downloadControl: c,
        downloadPending: de,
        fallbackHeader: u,
        fileInfoOwnerId: d,
        fileInfoSource: f,
        fileDataUrl: p,
        getAnnotationOriginatingTurn: ee,
        headerFavoriteAction: m,
        headerMenuContent: h,
        headerPlacement: fe,
        headerRightContent: _,
        headerTitleContent: v,
        hostId: b,
        importKind: pe,
        initialPage: S,
        libraryFile: te,
        onBeforeOpen: C,
        onBatchAction: ne,
        onClose: w,
        onRefresh: T,
        onDownload: E,
        onShare: D,
        onDocumentReady: O,
        onError: k,
        onPageChange: A,
        onSourceClick: j,
        onReady: M,
        originatingTurn: re,
        path: N,
        previewRequestKey: ie,
        refreshQueryCacheKey: ae,
        renderLayout: oe,
        requestKey: ge,
        retryButton: z,
        tabId: P,
        title: se,
        versionHistoryEnabled: I,
      })),
      (t[11] = i),
      (t[12] = a),
      (t[13] = le),
      (t[14] = ue),
      (t[15] = c),
      (t[16] = de),
      (t[17] = y),
      (t[18] = u),
      (t[19] = p),
      (t[20] = d),
      (t[21] = f),
      (t[22] = ee),
      (t[23] = m),
      (t[24] = h),
      (t[25] = fe),
      (t[26] = _),
      (t[27] = v),
      (t[28] = b),
      (t[29] = pe),
      (t[30] = S),
      (t[31] = te),
      (t[32] = ne),
      (t[33] = C),
      (t[34] = w),
      (t[35] = O),
      (t[36] = E),
      (t[37] = k),
      (t[38] = A),
      (t[39] = M),
      (t[40] = T),
      (t[41] = D),
      (t[42] = j),
      (t[43] = re),
      (t[44] = N),
      (t[45] = ie),
      (t[46] = ae),
      (t[47] = oe),
      (t[48] = F),
      (t[49] = ge),
      (t[50] = z),
      (t[51] = H),
      (t[52] = P),
      (t[53] = se),
      (t[54] = I),
      (t[55] = U))
    : (U = t[55]);
  let be;
  return (
    t[56] !== k || t[57] !== ye || t[58] !== V || t[59] !== U
      ? ((be = (0, $.jsx)(me, {
          name: `PdfPreviewPanel`,
          onError: k,
          resetKey: ye,
          fallback: V,
          children: U,
        })),
        (t[56] = k),
        (t[57] = ye),
        (t[58] = V),
        (t[59] = U),
        (t[60] = be))
      : (be = t[60]),
    be
  );
}
function er(e) {
  return e + 1;
}
function tr(e) {
  let n = (0, ur.c)(9),
    { onRefresh: r, onRetry: i } = e,
    o;
  n[0] === r
    ? (o = n[1])
    : ((o = { mutationFn: async () => r?.(), networkMode: `always` }), (n[0] = r), (n[1] = o));
  let { isPending: s, mutate: c } = l(o),
    u;
  n[2] !== c || n[3] !== i
    ? ((u = () => {
        c(void 0, {
          onSuccess: (e) => {
            e !== !1 && i();
          },
        });
      }),
      (n[2] = c),
      (n[3] = i),
      (n[4] = u))
    : (u = n[4]);
  let d;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(a, {
        id: `artifactPdfPreview.retry`,
        defaultMessage: `Retry`,
        description: `Button that reloads a PDF after its preview failed to load or render`,
      })),
      (n[5] = d))
    : (d = n[5]);
  let f;
  return (
    n[6] !== s || n[7] !== u
      ? ((f = (0, $.jsx)(t, { color: `secondary`, loading: s, onClick: u, children: d })),
        (n[6] = s),
        (n[7] = u),
        (n[8] = f))
      : (f = n[8]),
    f
  );
}
function nr(e) {
  let t = (0, ur.c)(359),
    {
      annotationBatchingEnabled: n,
      requestEditsEnabled: r,
      annotationHandleRef: a,
      annotationSourcePath: o,
      annotationsEnabled: l,
      chromeMode: u,
      downloadControl: d,
      downloadPending: f,
      fallbackHeader: p,
      fileInfoOwnerId: h,
      fileInfoSource: g,
      fileDataUrl: _,
      getAnnotationOriginatingTurn: v,
      headerFavoriteAction: y,
      headerMenuContent: x,
      headerPlacement: S,
      headerRightContent: te,
      headerTitleContent: C,
      environmentId: ne,
      hostId: w,
      importKind: T,
      initialPage: D,
      libraryFile: k,
      onBeforeOpen: A,
      onBatchAction: j,
      onClose: M,
      onRefresh: N,
      onDownload: P,
      onShare: se,
      onDocumentReady: ce,
      onError: ue,
      onPageChange: de,
      onSourceClick: fe,
      onReady: me,
      originatingTurn: I,
      path: L,
      previewRequestKey: R,
      refreshQueryCacheKey: z,
      renderLayout: ye,
      requestKey: B,
      retryButton: V,
      tabId: H,
      title: U,
      versionHistoryEnabled: be,
    } = e,
    W = s(Ce),
    we = ae(h == null ? null : le, h ?? ``),
    Te = m(De),
    Ee = m(Ae),
    Me = m(F),
    Ne = ee(),
    Pe = (0, Q.useRef)(null),
    Fe = (0, Q.useRef)(!1),
    Ie = (0, Q.useRef)(!1),
    Le = (0, Q.useRef)(!1),
    Re = (0, Q.useRef)(null),
    ze = (0, Q.useRef)(_),
    Be = (0, Q.useRef)(null),
    [G, qe] = (0, Q.useState)(!1),
    [Je, Ye] = (0, Q.useState)(cr),
    [Xe, $e] = (0, Q.useState)(!1),
    [et, rt] = (0, Q.useState)(null),
    it = we?.phase === `open` ? 312 : 0,
    ot = et == null ? null : Math.max(0, et - it),
    st;
  t[0] === W.value ? (st = t[1]) : ((st = ke(W.value)), (t[0] = W.value), (t[1] = st));
  let K = st,
    ut;
  t[2] === K ? (ut = t[3]) : ((ut = K ?? ge({ entrypoint: `home` })), (t[2] = K), (t[3] = ut));
  let q = ut,
    mt = (0, Q.useRef)(n),
    _t,
    vt;
  (t[4] === n
    ? ((_t = t[5]), (vt = t[6]))
    : ((_t = () => {
        mt.current = n;
      }),
      (vt = [n]),
      (t[4] = n),
      (t[5] = _t),
      (t[6] = vt)),
    (0, Q.useEffect)(_t, vt));
  let bt = ae(Se, q),
    xt;
  t[7] !== q || t[8] !== W
    ? ((xt = (e) => {
        je(W, q, e);
      }),
      (t[7] = q),
      (t[8] = W),
      (t[9] = xt))
    : (xt = t[9]);
  let wt = xt,
    Tt;
  t[10] !== q || t[11] !== w || t[12] !== L
    ? ((Tt = { conversationId: q, hostId: w, path: L }), (t[10] = q), (t[11] = w), (t[12] = L), (t[13] = Tt))
    : (Tt = t[13]);
  let Dt = ae(oe, Tt),
    Ot;
  t[14] !== q || t[15] !== w || t[16] !== L
    ? ((Ot = { conversationId: q, hostId: w, path: L }), (t[14] = q), (t[15] = w), (t[16] = L), (t[17] = Ot))
    : (Ot = t[17]);
  let kt = ae(Ge, Ot),
    jt = r && kt,
    Mt;
  t[18] === Je.size
    ? (Mt = t[19])
    : ((Mt = () => {
        Je.size === 0 && qe(!1);
      }),
      (t[18] = Je.size),
      (t[19] = Mt));
  let Nt = re(Mt),
    Pt;
  t[20] !== q || t[21] !== w || t[22] !== L || t[23] !== r || t[24] !== W
    ? ((Pt = () => r && W.get(Ge, { conversationId: q, hostId: w, path: L })),
      (t[20] = q),
      (t[21] = w),
      (t[22] = L),
      (t[23] = r),
      (t[24] = W),
      (t[25] = Pt))
    : (Pt = t[25]);
  let J = re(Pt),
    Ft;
  t[26] !== q || t[27] !== w || t[28] !== L || t[29] !== W
    ? ((Ft = (e) => {
        xe(W, { conversationId: q, hostId: w, path: L }, e);
      }),
      (t[26] = q),
      (t[27] = w),
      (t[28] = L),
      (t[29] = W),
      (t[30] = Ft))
    : (Ft = t[30]);
  let It = Ft,
    Lt;
  t[31] !== n || t[32] !== Dt || t[33] !== bt
    ? ((Lt = n ? [...bt, ...Dt] : bt), (t[31] = n), (t[32] = Dt), (t[33] = bt), (t[34] = Lt))
    : (Lt = t[34]);
  let Rt = Lt,
    zt;
  t[35] !== n || t[36] !== J || t[37] !== It || t[38] !== wt
    ? ((zt = (e) => {
        if (!J()) {
          if (n) {
            It(e);
            return;
          }
          wt(e);
        }
      }),
      (t[35] = n),
      (t[36] = J),
      (t[37] = It),
      (t[38] = wt),
      (t[39] = zt))
    : (zt = t[39]);
  let Bt = zt,
    Vt;
  if (t[40] !== Rt || t[41] !== L) {
    let e;
    (t[43] === L
      ? (e = t[44])
      : ((e = (e) => b(e) && e.localPdfContext?.path === L), (t[43] = L), (t[44] = e)),
      (Vt = Array.from(new Map(Rt.filter(e).map(sr)).values())),
      (t[40] = Rt),
      (t[41] = L),
      (t[42] = Vt));
  } else Vt = t[42];
  let Ht = Vt,
    Ut;
  if (t[45] !== Dt || t[46] !== L) {
    let e;
    (t[48] === L
      ? (e = t[49])
      : ((e = (e) => b(e) && e.localPdfContext?.path === L), (t[48] = L), (t[49] = e)),
      (Ut = Dt.filter(e)),
      (t[45] = Dt),
      (t[46] = L),
      (t[47] = Ut));
  } else Ut = t[47];
  let Wt = Ut,
    Gt;
  t[50] === Ht ? (Gt = t[51]) : ((Gt = Ht.map(or)), (t[50] = Ht), (t[51] = Gt));
  let Kt = Math.max(0, ...Gt) + 1,
    qt,
    Jt;
  (t[52] !== L || t[53] !== wt
    ? ((qt = () => () => {
        mt.current ||
          wt((e) => {
            let t = e.filter((e) => !(b(e) && e.localPdfContext?.path === L));
            return t.length === e.length ? e : t;
          });
      }),
      (Jt = [L, wt]),
      (t[52] = L),
      (t[53] = wt),
      (t[54] = qt),
      (t[55] = Jt))
    : ((qt = t[54]), (Jt = t[55])),
    (0, Q.useEffect)(qt, Jt));
  let Yt;
  t[56] !== _ || t[57] !== B
    ? ((Yt = { fileDataUrl: _, requestKey: B }), (t[56] = _), (t[57] = B), (t[58] = Yt))
    : (Yt = t[58]);
  let {
      loadedFileDataUrl: Xt,
      loadState: Zt,
      loadStateFileDataUrl: Qt,
      numPages: Y,
      pageViewportSize: $t,
      pdfDocument: en,
    } = At(Yt),
    [tn, nn] = (0, Q.useState)(0),
    rn = `${B}:${tn}`,
    [an, on] = (0, Q.useState)(null),
    sn = en != null && an?.pdfDocument === en && an.requestKey === rn,
    ln;
  t[59] !== Xe || t[60] !== Y
    ? ((ln = Et({ isDocked: Xe, totalPages: Y })), (t[59] = Xe), (t[60] = Y), (t[61] = ln))
    : (ln = t[61]);
  let un = ln,
    dn = $t != null && ot != null,
    fn;
  t[62] !== D || t[63] !== Y || t[64] !== de || t[65] !== dn
    ? ((fn = {
        containerRef: Pe,
        initialPage: D,
        isPageLayoutReady: dn,
        onPageChange: de,
        pageSelector: `[data-artifact-pdf-page]`,
        totalPages: Y,
      }),
      (t[62] = D),
      (t[63] = Y),
      (t[64] = de),
      (t[65] = dn),
      (t[66] = fn))
    : (fn = t[66]);
  let { currentPage: pn, goToPage: mn } = Ct(fn),
    hn;
  t[67] === Wt ? (hn = t[68]) : ((hn = Wt.flatMap(ar)), (t[67] = Wt), (t[68] = hn));
  let gn;
  t[69] === mn ? (gn = t[70]) : ((gn = (e) => mn(e, `instant`)), (t[69] = mn), (t[70] = gn));
  let _n;
  t[71] !== a || t[72] !== jt || t[73] !== hn || t[74] !== gn
    ? ((_n = { ref: a, editingDisabled: jt, annotations: hn, onNavigateToPage: gn }),
      (t[71] = a),
      (t[72] = jt),
      (t[73] = hn),
      (t[74] = gn),
      (t[75] = _n))
    : (_n = t[75]);
  let X = Ve(_n),
    vn;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vn = (e) => {
        let t = Pe.current;
        if (t == null) {
          Re.current = null;
          return;
        }
        Re.current = Kn({ anchor: e, container: t, pageSelector: `[data-artifact-pdf-page]` });
      }),
      (t[76] = vn))
    : (vn = t[76]);
  let yn = vn,
    bn;
  t[77] !== ot || t[78] !== $t
    ? ((bn = { onBeforeZoom: yn, pageViewportSize: $t, pageWidth: ot }),
      (t[77] = ot),
      (t[78] = $t),
      (t[79] = bn))
    : (bn = t[79]);
  let {
      beginScaleChange: xn,
      fitToWidth: Sn,
      handleWheel: Cn,
      isZooming: wn,
      resize: Z,
      setZoomPercent: Tn,
      zoomPercent: En,
      zoomEndTick: Dn,
    } = cn(bn),
    On;
  t[80] !== pn || t[81] !== Sn || t[82] !== Z.kind
    ? ((On = () => {
        let e =
          Z.kind === `page-width`
            ? null
            : Pe.current?.querySelector(`[data-artifact-pdf-page][data-page-number="${pn}"]`);
        (Sn(),
          e != null &&
            window.requestAnimationFrame(() => {
              e.scrollIntoView({ block: `center`, inline: `center` });
            }));
      }),
      (t[80] = pn),
      (t[81] = Sn),
      (t[82] = Z.kind),
      (t[83] = On))
    : (On = t[83]);
  let kn = On,
    jn;
  t[84] === xn
    ? (jn = t[85])
    : ((jn = (e) => {
        if (e.contentRect.width <= 0) return;
        let t = Math.max(0, Math.floor(e.contentRect.width) - 48),
          n = Be.current;
        n !== t && (n != null && (yn({ kind: `center` }), xn()), (Be.current = t), rt(t));
      }),
      (t[84] = xn),
      (t[85] = jn));
  let Mn = i(jn),
    Nn;
  t[86] !== Y || t[87] !== en
    ? ((Nn = () => {
        let e = Re.current,
          t = Pe.current;
        e == null ||
          t == null ||
          en == null ||
          Y < 1 ||
          (qn({
            anchorState: { ...e, pageNumber: Math.min(e.pageNumber, Y) },
            container: t,
            pageSelector: `[data-artifact-pdf-page][data-page-viewport-ready]`,
          }) &&
            (Re.current = null));
      }),
      (t[86] = Y),
      (t[87] = en),
      (t[88] = Nn))
    : (Nn = t[88]);
  let Fn = Nn,
    In;
  t[89] === Fn
    ? (In = t[90])
    : ((In = () => {
        Fn();
      }),
      (t[89] = Fn),
      (t[90] = In));
  let Ln;
  (t[91] !== ot || t[92] !== $t || t[93] !== Z || t[94] !== Fn
    ? ((Ln = [ot, $t, Z, Fn]), (t[91] = ot), (t[92] = $t), (t[93] = Z), (t[94] = Fn), (t[95] = Ln))
    : (Ln = t[95]),
    (0, Q.useLayoutEffect)(In, Ln));
  let Rn, Bn;
  (t[96] === _
    ? ((Rn = t[97]), (Bn = t[98]))
    : ((Rn = () => {
        ze.current !== _ && ((ze.current = _), yn({ kind: `center` }));
      }),
      (Bn = [yn, _]),
      (t[96] = _),
      (t[97] = Rn),
      (t[98] = Bn)),
    (0, Q.useLayoutEffect)(Rn, Bn));
  let Vn;
  t[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vn = () => {
        ((Fe.current = !1), qe(!1));
      }),
      (t[99] = Vn))
    : (Vn = t[99]);
  let Hn;
  (t[100] === _ ? (Hn = t[101]) : ((Hn = [_]), (t[100] = _), (t[101] = Hn)), (0, Q.useEffect)(Vn, Hn));
  let Un;
  t[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Un = () => {
        ((Ie.current = !1), (Le.current = !1));
      }),
      (t[102] = Un))
    : (Un = t[102]);
  let Wn;
  (t[103] !== _ || t[104] !== B ? ((Wn = [_, B]), (t[103] = _), (t[104] = B), (t[105] = Wn)) : (Wn = t[105]),
    (0, Q.useEffect)(Un, Wn));
  let Gn;
  t[106] === Cn
    ? (Gn = t[107])
    : ((Gn = (e) => {
        let t = Pe.current;
        t !== e &&
          (t?.removeEventListener(`wheel`, Cn),
          (Pe.current = e),
          e?.addEventListener(`wheel`, Cn, { passive: !1 }));
      }),
      (t[106] = Cn),
      (t[107] = Gn));
  let Jn = Gn,
    Yn = Zt === `ready` && en != null && Xt === _,
    Xn = Yn || be || k != null,
    Zn = Yn,
    Qn = Yn ? en : null,
    $n;
  t[108] !== v || t[109] !== Y || t[110] !== I || t[111] !== W || t[112] !== K
    ? (($n = () => {
        Fe.current = !0;
        let e = v == null ? I : v();
        ve(W, ie, {
          pageCount: Y,
          threadId: K ?? void 0,
          turnId: e?.turnId,
          inputMessageId: e?.inputMessageId ?? void 0,
          messageId: e?.messageId ?? void 0,
        });
      }),
      (t[108] = v),
      (t[109] = Y),
      (t[110] = I),
      (t[111] = W),
      (t[112] = K),
      (t[113] = $n))
    : ($n = t[113]);
  let er = (0, Q.useEffectEvent)($n),
    nr;
  t[114] !== Y || t[115] !== me
    ? ((nr = () => {
        Le.current || !Number.isSafeInteger(Y) || Y <= 0 || ((Le.current = !0), me?.(Y));
      }),
      (t[114] = Y),
      (t[115] = me),
      (t[116] = nr))
    : (nr = t[116]);
  let fr = re(nr),
    pr;
  t[117] === ce
    ? (pr = t[118])
    : ((pr = () => {
        Ie.current || ((Ie.current = !0), ce?.());
      }),
      (t[117] = ce),
      (t[118] = pr));
  let mr = re(pr),
    hr;
  t[119] === ue
    ? (hr = t[120])
    : ((hr = () => {
        Le.current || ((Le.current = !0), ue?.());
      }),
      (t[119] = ue),
      (t[120] = hr));
  let gr = re(hr),
    _r;
  t[121] !== en || t[122] !== rn || t[123] !== gr
    ? ((_r = () => {
        (on({ pdfDocument: en, requestKey: rn }), gr());
      }),
      (t[121] = en),
      (t[122] = rn),
      (t[123] = gr),
      (t[124] = _r))
    : (_r = t[124]);
  let vr = _r,
    yr;
  t[125] !== er || t[126] !== Zn
    ? ((yr = () => {
        Zn && !Fe.current && er();
      }),
      (t[125] = er),
      (t[126] = Zn),
      (t[127] = yr))
    : (yr = t[127]);
  let br;
  (t[128] === Zn ? (br = t[129]) : ((br = [Zn]), (t[128] = Zn), (t[129] = br)), (0, Q.useEffect)(yr, br));
  let xr;
  t[130] !== Yn || t[131] !== mr
    ? ((xr = () => {
        Yn && !Ie.current && mr();
      }),
      (t[130] = Yn),
      (t[131] = mr),
      (t[132] = xr))
    : (xr = t[132]);
  let Sr;
  (t[133] !== Yn || t[134] !== R || t[135] !== mr
    ? ((Sr = [Yn, R, mr]), (t[133] = Yn), (t[134] = R), (t[135] = mr), (t[136] = Sr))
    : (Sr = t[136]),
    (0, Q.useEffect)(xr, Sr));
  let Cr;
  t[137] !== _ || t[138] !== Zt || t[139] !== Qt || t[140] !== gr
    ? ((Cr = () => {
        Zt !== `error` || Qt !== _ || Le.current || gr();
      }),
      (t[137] = _),
      (t[138] = Zt),
      (t[139] = Qt),
      (t[140] = gr),
      (t[141] = Cr))
    : (Cr = t[141]);
  let wr;
  (t[142] !== _ || t[143] !== Zt || t[144] !== Qt || t[145] !== R || t[146] !== gr
    ? ((wr = [_, Zt, Qt, R, gr]),
      (t[142] = _),
      (t[143] = Zt),
      (t[144] = Qt),
      (t[145] = R),
      (t[146] = gr),
      (t[147] = wr))
    : (wr = t[147]),
    (0, Q.useEffect)(Cr, wr));
  let Tr;
  t[148] === Ne
    ? (Tr = t[149])
    : ((Tr = Ne.formatMessage({
        id: `artifactViewer.requestEdits`,
        defaultMessage: `Request edits`,
        description: `Button label for requesting edits to an artifact`,
      })),
      (t[148] = Ne),
      (t[149] = Tr));
  let Er = Tr,
    [Dr, Or] = (0, Q.useState)(!1),
    kr = Ee && Te && Me,
    Ar;
  t[150] !== X ||
  t[151] !== v ||
  t[152] !== J ||
  t[153] !== kr ||
  t[154] !== G ||
  t[155] !== I ||
  t[156] !== r ||
  t[157] !== W ||
  t[158] !== K
    ? ((Ar = () => {
        J() ||
          (Or(!1),
          G ||
            (nt(W, { surface: `file_artifact`, entrySource: `button` }),
            kr && Oe(W),
            _e(W, {
              artifactType: `pdf`,
              importKind: `pdf`,
              originatingTurn: v == null ? I : v(),
              threadId: K,
            })),
          !(r && G && !X.dismissAnnotationEditor()) && qe(ir));
      }),
      (t[150] = X),
      (t[151] = v),
      (t[152] = J),
      (t[153] = kr),
      (t[154] = G),
      (t[155] = I),
      (t[156] = r),
      (t[157] = W),
      (t[158] = K),
      (t[159] = Ar))
    : (Ar = t[159]);
  let jr = Ar,
    Mr;
  t[160] === W
    ? (Mr = t[161])
    : ((Mr = () => {
        Oe(W);
      }),
      (t[160] = W),
      (t[161] = Mr));
  let Nr = !G && !kr && Dr,
    Pr;
  t[162] !== kr || t[163] !== G
    ? ((Pr = (e) => {
        G || kr || Or(e);
      }),
      (t[162] = kr),
      (t[163] = G),
      (t[164] = Pr))
    : (Pr = t[164]);
  let Fr;
  t[165] === G ? (Fr = t[166]) : ((Fr = (0, $.jsx)(tt, { active: G })), (t[165] = G), (t[166] = Fr));
  let Ir;
  t[167] !== Er || t[168] !== jt || t[169] !== G || t[170] !== Fr || t[171] !== jr
    ? ((Ir = (0, $.jsx)(He, {
        label: Er,
        pressed: G,
        disabled: jt,
        size: `default`,
        variant: `annotation`,
        onClick: jr,
        children: Fr,
      })),
      (t[167] = Er),
      (t[168] = jt),
      (t[169] = G),
      (t[170] = Fr),
      (t[171] = jr),
      (t[172] = Ir))
    : (Ir = t[172]);
  let Lr;
  t[173] !== Er || t[174] !== Nr || t[175] !== Pr || t[176] !== Ir
    ? ((Lr = (0, $.jsx)(`span`, {
        className: `inline-flex`,
        children: (0, $.jsx)(E, {
          openWhen: `visibility-target-hidden`,
          tooltipContent: Er,
          open: Nr,
          onOpenChange: Pr,
          children: Ir,
        }),
      })),
      (t[173] = Er),
      (t[174] = Nr),
      (t[175] = Pr),
      (t[176] = Ir),
      (t[177] = Lr))
    : (Lr = t[177]);
  let Rr;
  t[178] !== kr || t[179] !== Mr || t[180] !== Lr
    ? ((Rr = (0, $.jsx)(ct, { onDismiss: Mr, open: kr, children: Lr })),
      (t[178] = kr),
      (t[179] = Mr),
      (t[180] = Lr),
      (t[181] = Rr))
    : (Rr = t[181]);
  let zr = Rr,
    Br = l && G,
    Vr;
  t[182] !== J || t[183] !== r
    ? ((Vr = () => {
        r && !J() && qe(!0);
      }),
      (t[182] = J),
      (t[183] = r),
      (t[184] = Vr))
    : (Vr = t[184]);
  let Hr;
  t[185] !== q ||
  t[186] !== w ||
  t[187] !== Ne ||
  t[188] !== J ||
  t[189] !== Nt ||
  t[190] !== j ||
  t[191] !== L ||
  t[192] !== W
    ? ((Hr = () => {
        J() || Ue(W, Ne, { conversationId: q, hostId: w, path: L }, j, Nt);
      }),
      (t[185] = q),
      (t[186] = w),
      (t[187] = Ne),
      (t[188] = J),
      (t[189] = Nt),
      (t[190] = j),
      (t[191] = L),
      (t[192] = W),
      (t[193] = Hr))
    : (Hr = t[193]);
  let Ur;
  t[194] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ur = (e, t) => {
        Ye((n) => {
          if (n.has(e) === t) return n;
          let r = new Set(n);
          return (t ? r.add(e) : r.delete(e), r);
        });
      }),
      (t[194] = Ur))
    : (Ur = t[194]);
  let Wr;
  t[195] !== n ||
  t[196] !== X.onFocusAnnotation ||
  t[197] !== X.onPageHandleChange ||
  t[198] !== o ||
  t[199] !== jt ||
  t[200] !== q ||
  t[201] !== v ||
  t[202] !== Kt ||
  t[203] !== Y ||
  t[204] !== I ||
  t[205] !== L ||
  t[206] !== Ht ||
  t[207] !== r ||
  t[208] !== Bt ||
  t[209] !== Br ||
  t[210] !== Vr ||
  t[211] !== Hr ||
  t[212] !== K ||
  t[213] !== U
    ? ((Wr = {
        comments: Ht,
        requestEditsEnabled: r,
        annotationBatchingEnabled: n,
        annotationSourcePath: o,
        editingDisabled: jt,
        conversationId: q,
        getOriginatingTurn: v,
        isCommentMode: Br,
        nextCommentNumber: Kt,
        onCommentsChange: Bt,
        onStarted: Vr,
        onSendBatch: Hr,
        onAnnotationHandleChange: X.onPageHandleChange,
        onFocusAnnotation: X.onFocusAnnotation,
        onInteractionChange: Ur,
        originatingTurn: I,
        pageCount: Y,
        path: L,
        threadId: K,
        title: U,
      }),
      (t[195] = n),
      (t[196] = X.onFocusAnnotation),
      (t[197] = X.onPageHandleChange),
      (t[198] = o),
      (t[199] = jt),
      (t[200] = q),
      (t[201] = v),
      (t[202] = Kt),
      (t[203] = Y),
      (t[204] = I),
      (t[205] = L),
      (t[206] = Ht),
      (t[207] = r),
      (t[208] = Bt),
      (t[209] = Br),
      (t[210] = Vr),
      (t[211] = Hr),
      (t[212] = K),
      (t[213] = U),
      (t[214] = Wr))
    : (Wr = t[214]);
  let Gr = Wr,
    Kr;
  t[215] !== h || t[216] !== g || t[217] !== y || t[218] !== k
    ? ((Kr = (e) =>
        (0, $.jsx)(lt, { favoriteAction: y, file: k, fileInfoOwnerId: h, fileInfoSource: g, children: e })),
      (t[215] = h),
      (t[216] = g),
      (t[217] = y),
      (t[218] = k),
      (t[219] = Kr))
    : (Kr = t[219]);
  let qr = Kr,
    Jr;
  t[220] === k
    ? (Jr = t[221])
    : ((Jr = k == null ? void 0 : (0, $.jsx)(he, { libraryFileId: k.libraryFileId })),
      (t[220] = k),
      (t[221] = Jr));
  let Yr = Jr,
    Xr;
  t[222] === k
    ? (Xr = t[223])
    : ((Xr = k == null ? void 0 : (0, $.jsx)(he, { libraryFileId: k.libraryFileId, variant: `text` })),
      (t[222] = k),
      (t[223] = Xr));
  let Zr = Xr,
    Qr;
  t[224] === U ? (Qr = t[225]) : ((Qr = lr(U)), (t[224] = U), (t[225] = Qr));
  let $r = Qr,
    ei;
  t[226] !== u ||
  t[227] !== ne ||
  t[228] !== x ||
  t[229] !== C ||
  t[230] !== w ||
  t[231] !== T ||
  t[232] !== Yr ||
  t[233] !== A ||
  t[234] !== I ||
  t[235] !== L ||
  t[236] !== qr ||
  t[237] !== W ||
  t[238] !== H ||
  t[239] !== K ||
  t[240] !== U ||
  t[241] !== $r ||
  t[242] !== Zr
    ? ((ei =
        C ??
        (u === "default"
          ? (0, $.jsx)(pt, {
              tabId: H,
              environmentId: ne,
              analyticsContext: {
                threadId: K,
                turnId: I?.turnId ?? null,
                inputMessageId: I?.inputMessageId ?? null,
                messageId: I?.messageId ?? null,
              },
              downloadAnalyticsMetadata: {
                artifactType: `pdf`,
                importKind: T,
                originatingTurn: I,
                threadId: K,
              },
              getAnalyticsContext: () => ft(W, { hostId: w, originatingTurn: I, path: L, threadId: K }),
              hostId: w,
              libraryBreadcrumb: Yr,
              tooltipBreadcrumb: Zr,
              onBeforeOpen: A,
              path: L,
              renderMenuItems: qr,
              showDownloadAction: !1,
              title: $r,
              variant: `title`,
              children: x,
            })
          : (0, $.jsx)(O, {
              fileName: U,
              libraryBreadcrumb: Yr,
              tooltipBreadcrumb: Zr,
              title: $r,
              children: qr(null),
            }))),
      (t[226] = u),
      (t[227] = ne),
      (t[228] = x),
      (t[229] = C),
      (t[230] = w),
      (t[231] = T),
      (t[232] = Yr),
      (t[233] = A),
      (t[234] = I),
      (t[235] = L),
      (t[236] = qr),
      (t[237] = W),
      (t[238] = H),
      (t[239] = K),
      (t[240] = U),
      (t[241] = $r),
      (t[242] = Zr),
      (t[243] = ei))
    : (ei = t[243]);
  let ti = ei,
    ni;
  t[244] !== u ||
  t[245] !== ne ||
  t[246] !== w ||
  t[247] !== T ||
  t[248] !== A ||
  t[249] !== P ||
  t[250] !== I ||
  t[251] !== L ||
  t[252] !== W ||
  t[253] !== H ||
  t[254] !== K
    ? ((ni =
        u === "default"
          ? (0, $.jsx)(ht, {
              tabId: H,
              environmentId: ne,
              onBeforeOpen: A,
              analyticsContext: {
                threadId: K,
                turnId: I?.turnId ?? null,
                inputMessageId: I?.inputMessageId ?? null,
                messageId: I?.messageId ?? null,
              },
              getAnalyticsContext: () => ft(W, { hostId: w, originatingTurn: I, path: L, threadId: K }),
              analyticsMetadata: { artifactType: `pdf`, importKind: T, originatingTurn: I, threadId: K },
              hostId: w,
              onDownload: P,
              path: L,
            })
          : void 0),
      (t[244] = u),
      (t[245] = ne),
      (t[246] = w),
      (t[247] = T),
      (t[248] = A),
      (t[249] = P),
      (t[250] = I),
      (t[251] = L),
      (t[252] = W),
      (t[253] = H),
      (t[254] = K),
      (t[255] = ni))
    : (ni = t[255]);
  let ri = ni,
    ii;
  if (
    t[256] !== zr ||
    t[257] !== l ||
    t[258] !== u ||
    t[259] !== ri ||
    t[260] !== d ||
    t[261] !== f ||
    t[262] !== p ||
    t[263] !== kn ||
    t[264] !== S ||
    t[265] !== te ||
    t[266] !== J ||
    t[267] !== G ||
    t[268] !== k ||
    t[269] !== M ||
    t[270] !== P ||
    t[271] !== se ||
    t[272] !== L ||
    t[273] !== Z.kind ||
    t[274] !== Tn ||
    t[275] !== Xn ||
    t[276] !== H ||
    t[277] !== ti ||
    t[278] !== $r ||
    t[279] !== be ||
    t[280] !== En
  ) {
    if (((ii = p), Xn)) {
      let e;
      t[282] === S ? (e = t[283]) : ((e = S === `overlay` ? pe(`pdf`) : void 0), (t[282] = S), (t[283] = e));
      let n;
      t[284] !== J || t[285] !== G
        ? ((n = G
            ? () => {
                J() || qe(!1);
              }
            : void 0),
          (t[284] = J),
          (t[285] = G),
          (t[286] = n))
        : (n = t[286]);
      let r = l ? zr : null,
        i = Z.kind === `page-width`,
        a;
      t[287] !== kn || t[288] !== i
        ? ((a = { selected: i, onSelect: kn }), (t[287] = kn), (t[288] = i), (t[289] = a))
        : (a = t[289]);
      let o;
      t[290] !== Tn || t[291] !== a || t[292] !== En
        ? ((o = (0, $.jsx)(c, {
            triggerTestId: `pdf-preview-zoom-trigger`,
            zoomPercent: En,
            zoomOptions: yt,
            onZoomPercentChange: Tn,
            fitOption: a,
          })),
          (t[290] = Tn),
          (t[291] = a),
          (t[292] = En),
          (t[293] = o))
        : (o = t[293]);
      let s;
      t[294] !== te || t[295] !== n || t[296] !== r || t[297] !== o
        ? ((s = {
            editingControls: null,
            onExitAnnotationMode: n,
            annotationControl: r,
            annotationControlOwnsTooltip: !0,
            commentsControl: null,
            zoomControl: o,
            navigationControl: null,
            supplementalActions: te,
          }),
          (t[294] = te),
          (t[295] = n),
          (t[296] = r),
          (t[297] = o),
          (t[298] = s))
        : (s = t[298]);
      let p;
      (t[299] !== u || t[300] !== P
        ? ((p =
            u === `standalone` && P != null
              ? () => {
                  P();
                }
              : void 0),
          (t[299] = u),
          (t[300] = P),
          (t[301] = p))
        : (p = t[301]),
        (ii = (0, $.jsx)(dt, {
          enabled: be || k != null,
          actions: ti,
          placement: e,
          downloadControl: d ?? ri,
          downloadFileName: L,
          downloadPending: f,
          controls: s,
          onClose: M,
          onDownload: p,
          onShare: se,
          tabId: H,
          title: $r,
        })));
    }
    ((t[256] = zr),
      (t[257] = l),
      (t[258] = u),
      (t[259] = ri),
      (t[260] = d),
      (t[261] = f),
      (t[262] = p),
      (t[263] = kn),
      (t[264] = S),
      (t[265] = te),
      (t[266] = J),
      (t[267] = G),
      (t[268] = k),
      (t[269] = M),
      (t[270] = P),
      (t[271] = se),
      (t[272] = L),
      (t[273] = Z.kind),
      (t[274] = Tn),
      (t[275] = Xn),
      (t[276] = H),
      (t[277] = ti),
      (t[278] = $r),
      (t[279] = be),
      (t[280] = En),
      (t[281] = ii));
  } else ii = t[281];
  let ai = G && !jt && Je.size === 0,
    oi;
  t[302] !== X || t[303] !== J
    ? ((oi = () => {
        !J() && X.dismissAnnotationEditor() && qe(!1);
      }),
      (t[302] = X),
      (t[303] = J),
      (t[304] = oi))
    : (oi = t[304]);
  let si;
  (t[305] !== ai || t[306] !== oi
    ? ((si = { active: ai, onExit: oi }), (t[305] = ai), (t[306] = oi), (t[307] = si))
    : (si = t[307]),
    Ze(si));
  let ci;
  t[308] !== it ||
  t[309] !== Je.size ||
  t[310] !== n ||
  t[311] !== X ||
  t[312] !== l ||
  t[313] !== Gr ||
  t[314] !== q ||
  t[315] !== pn ||
  t[316] !== _ ||
  t[317] !== ot ||
  t[318] !== mn ||
  t[319] !== vr ||
  t[320] !== sn ||
  t[321] !== S ||
  t[322] !== w ||
  t[323] !== J ||
  t[324] !== G ||
  t[325] !== Yn ||
  t[326] !== Xe ||
  t[327] !== wn ||
  t[328] !== Zt ||
  t[329] !== Y ||
  t[330] !== Nt ||
  t[331] !== j ||
  t[332] !== N ||
  t[333] !== fe ||
  t[334] !== Mn ||
  t[335] !== $t ||
  t[336] !== L ||
  t[337] !== Wt.length ||
  t[338] !== ii ||
  t[339] !== Qn ||
  t[340] !== z ||
  t[341] !== ye ||
  t[342] !== rn ||
  t[343] !== fr ||
  t[344] !== Z ||
  t[345] !== Fn ||
  t[346] !== V ||
  t[347] !== It ||
  t[348] !== Jn ||
  t[349] !== Xn ||
  t[350] !== un ||
  t[351] !== U ||
  t[352] !== Dn
    ? ((ci = (e) =>
        (0, $.jsxs)($.Fragment, {
          children: [
            Yn && !sn && l && n
              ? (0, $.jsx)(Qe, {
                  children: (0, $.jsx)(Ke, {
                    annotationCount: Wt.length,
                    isAnnotating: G,
                    isAnnotationInteractionActive: Je.size > 0,
                    conversationId: q,
                    hostId: w,
                    onBatchAction: j,
                    onAnnotationsSubmitted: Nt,
                    onDismissAnnotations: (e) =>
                      J() || !X.dismissAnnotationEditor(e) ? !1 : (It([]), qe(!1), !0),
                    onNavigate: X.onNavigate,
                    onRefresh: N,
                    path: L,
                    refreshQueryCacheKey: z,
                  }),
                })
              : null,
            Qn == null || sn
              ? null
              : (0, $.jsx)(St, {
                  currentPage: pn,
                  isDocked: Xe,
                  onDockedChange: $e,
                  onPageSelect: mn,
                  renderThumbnail: (e) => (0, $.jsx)(zn, { pageNumber: e, pdfDocument: Qn }),
                  totalPages: Y,
                }),
            (0, $.jsx)(at, {
              headerPlacement: Yn && !sn && Xn && S === `overlay` ? `overlay` : void 0,
              renderLayout: ye,
              header: ii,
              content: (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(`div`, {
                    ref: Jn,
                    "aria-label": U,
                    className:
                      Yn && !sn ? `min-h-0 flex-1 overflow-auto bg-background-artifact-preview` : `hidden`,
                    "data-testid": `artifact-pdf-preview-panel`,
                    style: un,
                    children: (0, $.jsx)(`div`, {
                      ref: Mn,
                      className: S === `overlay` ? `min-h-full pt-24 pb-6` : `min-h-full pt-6 pb-6`,
                      children: (0, $.jsx)(`div`, {
                        className: `flex min-h-full w-max min-w-full flex-col items-center gap-6`,
                        style: {
                          paddingInlineStart: dr,
                          paddingInlineEnd: dr + (Z.kind === `page-width` ? it : 0),
                        },
                        children:
                          Qn == null
                            ? null
                            : Array.from({ length: Y }, (t, n) => {
                                let r = n + 1;
                                return (0, $.jsx)(
                                  An,
                                  {
                                    commentLayer: l ? Gr : null,
                                    currentPage: pn,
                                    onSourceClick: fe,
                                    isZooming: wn,
                                    onRenderError: vr,
                                    onRendered: fr,
                                    onViewportReady: Fn,
                                    search: e,
                                    pdfDocument: Qn,
                                    pageSelector: `[data-artifact-pdf-page]`,
                                    pageViewportSize: $t,
                                    pageNumber: r,
                                    pageWidth: ot,
                                    resize: Z,
                                    renderRequestKey: rn,
                                    scrollRootRef: Pe,
                                    zoomEndTick: Dn,
                                  },
                                  r,
                                );
                              }),
                      }),
                    }),
                  }),
                  gt(
                    sn ? `error` : Zt,
                    `pdf`,
                    sn
                      ? (0, $.jsx)(
                          tr,
                          {
                            onRetry: () => {
                              ((Le.current = !1), nn(rr));
                            },
                          },
                          `${w}\0${L}\0${_}\0${rn}`,
                        )
                      : V,
                  ),
                ],
              }),
            }),
          ],
        })),
      (t[308] = it),
      (t[309] = Je.size),
      (t[310] = n),
      (t[311] = X),
      (t[312] = l),
      (t[313] = Gr),
      (t[314] = q),
      (t[315] = pn),
      (t[316] = _),
      (t[317] = ot),
      (t[318] = mn),
      (t[319] = vr),
      (t[320] = sn),
      (t[321] = S),
      (t[322] = w),
      (t[323] = J),
      (t[324] = G),
      (t[325] = Yn),
      (t[326] = Xe),
      (t[327] = wn),
      (t[328] = Zt),
      (t[329] = Y),
      (t[330] = Nt),
      (t[331] = j),
      (t[332] = N),
      (t[333] = fe),
      (t[334] = Mn),
      (t[335] = $t),
      (t[336] = L),
      (t[337] = Wt.length),
      (t[338] = ii),
      (t[339] = Qn),
      (t[340] = z),
      (t[341] = ye),
      (t[342] = rn),
      (t[343] = fr),
      (t[344] = Z),
      (t[345] = Fn),
      (t[346] = V),
      (t[347] = It),
      (t[348] = Jn),
      (t[349] = Xn),
      (t[350] = un),
      (t[351] = U),
      (t[352] = Dn),
      (t[353] = ci))
    : (ci = t[353]);
  let li;
  return (
    t[354] !== _ || t[355] !== Qn || t[356] !== ci || t[357] !== U
      ? ((li = (0, $.jsx)(We, {
          children: (0, $.jsx)(
            Pn,
            {
              title: U,
              pdfDocument: Qn,
              pageSelector: `[data-artifact-pdf-page]`,
              scrollRootRef: Pe,
              children: ci,
            },
            _,
          ),
        })),
        (t[354] = _),
        (t[355] = Qn),
        (t[356] = ci),
        (t[357] = U),
        (t[358] = li))
      : (li = t[358]),
    li
  );
}
function rr(e) {
  return e + 1;
}
function ir(e) {
  return !e;
}
function ar(e) {
  let t = e.localPdfContext?.pageNumber;
  return t == null ? [] : [{ id: Mt(e), pageNumber: t }];
}
function or(e) {
  return e.position.line;
}
function sr(e) {
  return [Mt(e), e];
}
function cr() {
  return new Set();
}
function lr(e) {
  return e.replace(/\.pdf$/i, ``);
}
var ur, Q, $, dr;
function fr() {
  return (fr = e(() => {
    ((ur = A()),
      p(),
      Pe(),
      Xe(),
      $e(),
      G(),
      o(),
      f(),
      T(),
      (Q = N()),
      C(),
      K(),
      de(),
      ut(),
      rt(),
      et(),
      V(),
      D(),
      z(),
      v(),
      W(),
      R(),
      ye(),
      u(),
      ce(),
      _(),
      n(),
      it(),
      ot(),
      we(),
      qe(),
      Ye(),
      U(),
      Je(),
      q(),
      mt(),
      xt(),
      _t(),
      vt(),
      st(),
      P(),
      bt(),
      wt(),
      kt(),
      jn(),
      Rn(),
      Gn(),
      Tn(),
      ($ = M()),
      (dr = 24));
  }))();
}
fr();
export { $n as PdfPreviewPanel };
//# sourceMappingURL=pdf-preview-panel-41c0d7080ba1.js.map
