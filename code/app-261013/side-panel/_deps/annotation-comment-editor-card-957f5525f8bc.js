import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $yt as r,
  AO as i,
  CO as a,
  Cot as o,
  DV as s,
  EH as c,
  G_ as l,
  HNt as u,
  IDt as d,
  Ixt as f,
  Iz as p,
  JR as m,
  J_ as h,
  K_ as g,
  Lz as _,
  MV as v,
  Mz as y,
  NV as b,
  Nz as x,
  PCt as S,
  Pxt as C,
  Rnt as w,
  Sj as T,
  TJ as E,
  TO as D,
  VCt as O,
  VDt as k,
  Vq as A,
  Vxt as ee,
  WI as j,
  YO as M,
  YR as te,
  ZO as N,
  _Mt as P,
  _Pt as ne,
  _wt as re,
  b0 as ie,
  bO as ae,
  cCt as oe,
  cht as se,
  crt as ce,
  cz as F,
  ebt as le,
  fCt as I,
  fht as ue,
  gMt as L,
  gwt as de,
  hPt as R,
  hot as fe,
  hz as z,
  iot as pe,
  jDt as B,
  kq as me,
  lCt as he,
  lbt as ge,
  lot as _e,
  m5 as ve,
  mCt as ye,
  mbt as be,
  mz as xe,
  nk as V,
  oCt as Se,
  pbt as Ce,
  q_ as we,
  rst as Te,
  sj as Ee,
  srt as De,
  sz as Oe,
  t3 as H,
  tk as U,
  ubt as ke,
  vB as Ae,
  vzt as je,
  wot as W,
  xMt as G,
  y0 as Me,
  yMt as Ne,
  yO as Pe,
  yzt as Fe,
} from "./app-shared-bbfeca5e5737.js";
import {
  AEr as Ie,
  BF as Le,
  Cm as K,
  Dnr as Re,
  Gxt as ze,
  Hu as Be,
  Im as Ve,
  Ju as He,
  Jxt as Ue,
  Kbr as We,
  Ku as Ge,
  MEr as Ke,
  Qxn as qe,
  Rm as Je,
  Sm as Ye,
  Ui as Xe,
  Uu as Ze,
  Uxt as Qe,
  VF as $e,
  Wi as et,
  Wu as tt,
  XDr as nt,
  Xxn as rt,
  Yu as it,
  _d as at,
  _m as ot,
  a0n as st,
  a1 as ct,
  aa as lt,
  bd as ut,
  dAn as dt,
  dd as ft,
  eDr as pt,
  eOr as mt,
  fAn as ht,
  gd as gt,
  hm as q,
  i1 as _t,
  ia as vt,
  kEr as yt,
  kan as bt,
  kh as xt,
  ld as St,
  nDr as Ct,
  oFr as wt,
  qbr as Tt,
  qdr as Et,
  qxt as Dt,
  u0n as Ot,
  ud as kt,
  vd as At,
  xd as jt,
  zm as Mt,
} from "./app-initial-5851df3f6cb1.js";
import {
  Au as Nt,
  Du as Pt,
  Eu as Ft,
  Fu as It,
  Iu as Lt,
  Ou as Rt,
  Tu as zt,
  fm as Bt,
  ku as Vt,
  pm as Ht,
  wu as Ut,
} from "./app-primary-fe8a450b3b04.js";
import { n as Wt, t as Gt } from "./arrow-rotate-ccw-1e98531dace1.js";
import { o as Kt, t as qt } from "./style-9afbb349e873.js";
import {
  a as Jt,
  c as Yt,
  i as Xt,
  n as Zt,
  o as Qt,
  r as $t,
  s as en,
  t as tn,
} from "./design-editor-state-3b004a56ead0.js";
import { n as nn, t as rn } from "./range-slider-a8d456738691.js";
function an({ baselineDesignGroup: e, commentText: t, designEditorState: n, isDesignSubmissionMode: r }) {
  let i = t.trim();
  return {
    designDraft: !r || n == null ? null : on(n, e, i),
    hasCommentText: i.length > 0,
    trimmedCommentText: i,
  };
}
function on(e, t, n) {
  let r = new Map((t?.declarations ?? []).map((e) => [e.property, e])),
    i = e.declarations.flatMap((e) => {
      let t = r.get(e.property);
      return t == null
        ? e.value === e.previousValue
          ? []
          : [e]
        : e.value === t.previousValue
          ? []
          : [{ ...t, value: e.value }];
    }),
    a = new Map((t?.annotationControlChanges ?? []).map((e) => [e.callback, e])),
    o = (e.annotationControlChanges ?? []).flatMap((e) => {
      let t = a.get(e.callback),
        n = t == null ? e.previousValue : t.previousValue;
      return e.value === n ? [] : [{ callback: e.callback, previousValue: n, value: e.value }];
    }),
    s = ln(e.text, t?.text);
  if (i.length === 0 && o.length === 0 && s == null) return null;
  let c = new Date().toISOString(),
    l = { ...e.anchor };
  return (
    t?.annotationControls != null &&
      t.anchor.kind === `element` &&
      l.kind === `element` &&
      (l.runtimeElementId = t.anchor.runtimeElementId),
    {
      id: e.id,
      anchor: l,
      annotationControls: e.annotationControls,
      annotationControlChanges: o.length === 0 ? void 0 : o,
      ...(n.length === 0 ? {} : { comment: n }),
      text: s,
      declarations: i,
      draftAttribute: e.draftAttribute,
      markerViewportPoint: e.markerViewportPoint,
      provenance: un(i, e.provenance, t?.provenance ?? []),
      selector: e.selector,
      targetLabel: e.targetLabel,
      elementTagName: e.elementTagName,
      themeVariant: e.themeVariant,
      viewportSize: e.viewportSize,
      createdAt: t?.createdAt ?? c,
      updatedAt: c,
      status: t?.status ?? `current`,
    }
  );
}
function sn(e, t) {
  return e == null || t == null
    ? e === t
    : (e.comment ?? ``) !== (t.comment ?? ``) ||
        !cn(e.text, t.text) ||
        e.declarations.length !== t.declarations.length ||
        e.annotationControlChanges?.length !== t.annotationControlChanges?.length
      ? !1
      : e.declarations.every((e, n) => {
          let r = t.declarations[n];
          return (
            r != null &&
            e.property === r.property &&
            e.previousValue === r.previousValue &&
            e.value === r.value
          );
        }) &&
        (e.annotationControlChanges?.every((e, n) => {
          let r = t.annotationControlChanges?.[n];
          return (
            r != null &&
            e.callback === r.callback &&
            e.previousValue === r.previousValue &&
            e.value === r.value
          );
        }) ??
          !0);
}
function cn(e, t) {
  return e == null || t == null ? e === t : e.previousValue === t.previousValue && e.value === t.value;
}
function ln(e, t) {
  return e == null
    ? t
    : t == null
      ? e.value === e.previousValue
        ? void 0
        : e
      : e.value === t.previousValue
        ? void 0
        : { ...t, value: e.value };
}
function un(e, t, n) {
  let r = new Map(n.map((e) => [e.property, e]));
  for (let e of t) r.set(e.property, e);
  return e.flatMap((e) => {
    let t = r.get(e.property);
    return t == null ? [] : [t];
  });
}
function dn(e, t, n, r, i, a, o, s) {
  let c = n.trim(),
    l = fn(c, o, s);
  switch (e) {
    case `create`:
      return ke(n, r) && a.length === 0 && l;
    case `edit`:
      return c === t.trim() && mn(i, a) && l;
    case `design`:
      return o == null ? c.length === 0 && l : l;
  }
}
function fn(e, t, n) {
  if (n == null) return t == null;
  let r = on(n, t, e);
  return t == null
    ? r == null ||
        (r.declarations.length === 0 &&
          r.text == null &&
          r.annotationControlChanges?.every((e) => {
            let t = n.annotationControls?.controls.find((t) => t.callback === e.callback);
            return e.previousValue == null && t != null && e.value === We(t);
          }) === !0)
    : sn(r, t);
}
function pn({ baselineDesignGroup: e, designDraft: t, designEditorState: n, isDesignEditorOpen: r }) {
  return n != null && (r || t != null || e != null);
}
function mn(e, t) {
  return (
    e.length === t.length &&
    e.every((e, n) => {
      let r = t[n];
      return r != null && e.dataUrl === r.dataUrl && e.filename === r.filename && e.localPath === r.localPath;
    })
  );
}
function hn() {
  return (hn = e(() => {
    (Tt(), ge());
  }))();
}
function gn({
  submitMode: e,
  submitSource: t,
  commentText: n,
  attachedImages: r,
  allowImageAttachments: i,
  allowEmptySubmit: a,
  baselineDesignGroup: o,
  designEditorState: s,
  isDesignEditorOpen: c,
}) {
  let l = an({
      baselineDesignGroup: o,
      commentText: n,
      designEditorState: s,
      isDesignSubmissionMode: s != null,
    }),
    u = pn({
      baselineDesignGroup: o,
      designDraft: l.designDraft,
      designEditorState: s,
      isDesignEditorOpen: c,
    });
  if (e === `saved`) {
    if (!a && l.designDraft == null && !l.hasCommentText)
      return u && o != null ? { type: `delete-design`, groupId: o.id } : { type: `noop` };
  } else if (!l.hasCommentText && (!u || l.designDraft == null)) return { type: `noop` };
  return {
    type: `submit`,
    payload: {
      body: l.trimmedCommentText,
      submitSource: t,
      ...(!i || r.length === 0 ? {} : { attachedImages: r }),
      ...(u ? { designChange: l.designDraft } : {}),
    },
  };
}
function _n({ targetMode: e, reason: t, isLightDismissible: n, isLightDismissArmed: r }) {
  return (e === `design` && t !== `outside`) || n || r ? `dismiss` : `shake`;
}
function vn() {
  return (vn = e(() => {
    hn();
  }))();
}
var yn, bn, xn;
function Sn() {
  return (Sn = e(() => {
    ((yn = `_selectionChip_1ppdg_1`),
      (bn = `_regionSelectionLabel_1ppdg_14`),
      (xn = { selectionChip: yn, regionSelectionLabel: bn }));
  }))();
}
function Cn(e) {
  let t = (0, En.c)(10),
    { anchors: n, onSelectionHoverChange: r, onRemove: i } = e,
    a = k(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `browserSidebarCommentOverlay.selectedItems`,
        defaultMessage: `Selected items`,
        description: `Accessible label for the elements and areas included in a browser annotation`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== r
    ? ((s = n.map((e, t) => {
        let o = e.kind === `element` ? Re(e.role, e.elementPath) : null,
          s =
            e.kind === `region`
              ? a.formatMessage(
                  {
                    id: `browserSidebarCommentOverlay.selectedAreaLabel`,
                    defaultMessage: `Area {number}`,
                    description: `Short label for a selected rectangular page area in a browser annotation`,
                  },
                  { number: n.slice(0, t + 1).filter(Tn).length },
                )
              : e.immediateText?.trim() || e.title;
        return (0, Dn.jsxs)(
          `span`,
          {
            className: L(
              xn.selectionChip,
              `composer-attachment-surface flex h-6 min-w-0 shrink-0 items-center gap-1 rounded-lg border py-0.5 pe-0.5 text-xs text-default select-none`,
              n.length > 1 ? `max-w-[calc(100%_-_3rem)]` : `max-w-full`,
              e.kind === `region` || o != null ? `ps-0.5` : `ps-1`,
            ),
            "data-browser-comment-annotation-selection": !0,
            role: `listitem`,
            title: s,
            onMouseEnter: () => {
              r?.(t);
            },
            onMouseLeave: () => {
              r?.(null);
            },
            children: [
              e.kind === `region`
                ? (0, Dn.jsx)(`span`, {
                    className: L(
                      xn.regionSelectionLabel,
                      `min-w-0 truncate rounded-md border border-dotted px-1.5 py-px text-[11px] leading-[14px] font-medium text-secondary`,
                    ),
                    children: s,
                  })
                : o == null
                  ? null
                  : (0, Dn.jsx)(`span`, {
                      className: `inline-flex shrink-0 items-center rounded-md border border-default bg-text/5 px-1.5 py-px font-mono text-[11px] leading-[14px] font-medium text-secondary`,
                      children: o,
                    }),
              e.kind === `region` || s === o
                ? null
                : (0, Dn.jsx)(`span`, { className: `min-w-0 truncate text-secondary`, children: s }),
              i == null
                ? null
                : (0, Dn.jsx)(`button`, {
                    "aria-label": a.formatMessage(
                      {
                        id: `browserSidebarCommentOverlay.removeAnnotationSelection`,
                        defaultMessage: `Remove {label} from annotation`,
                        description: `Accessible label for removing an element or area from a browser annotation`,
                      },
                      { label: s },
                    ),
                    className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-md text-tertiary outline-none hover:bg-primary-ghost-hover hover:text-default focus-visible:ring-2 focus-visible:ring-ring`,
                    type: `button`,
                    onMouseDown: wn,
                    onClick: () => {
                      i(t);
                    },
                    children: (0, Dn.jsx)(Pe, { "aria-hidden": !0, className: `icon-2xs` }),
                  }),
            ],
          },
          `${e.kind}:${e.selector ?? e.elementPath}:${e.rect.x}:${e.rect.y}:${t}`,
        );
      })),
      (t[2] = n),
      (t[3] = a),
      (t[4] = i),
      (t[5] = r),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, Dn.jsx)(`div`, {
          "aria-label": o,
          className: `horizontal-scroll-fade-mask hide-scrollbar flex min-w-0 flex-nowrap gap-1.5 overflow-x-auto overflow-y-hidden overscroll-x-contain pe-1 pb-1 [--edge-fade-distance:2rem]`,
          "data-browser-comment-annotation-selections": !0,
          role: `list`,
          style: On,
          children: s,
        })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function wn(e) {
  e.preventDefault();
}
function Tn(e) {
  return e.kind === `region`;
}
var En, Dn, On;
function kn() {
  return (kn = e(() => {
    ((En = je()),
      P(),
      B(),
      Kt(),
      ae(),
      Sn(),
      (Dn = G()),
      (On = { "--browser-sidebar-annotation-selection-color": qt }));
  }))();
}
function An({ canEditDesign: e, showAdjustEntry: t }) {
  return t && e;
}
function jn(e, t) {
  return t.property === `font-family`
    ? Nn([t.value, t.previousValue], Pn)
    : t.property === `font-weight`
      ? Nn(
          [t.value],
          Fn.map((e) => ({ value: e })),
        )
      : t.property === `flex-direction`
        ? Nn(
            [t.value],
            [
              {
                label: e.formatMessage({
                  id: `browserSidebarDesignEditor.horizontalFlexDirection`,
                  defaultMessage: `Horizontal`,
                  description: `Dropdown label for a horizontal browser tweak editor flex direction`,
                }),
                value: `row`,
              },
              {
                label: e.formatMessage({
                  id: `browserSidebarDesignEditor.horizontalReverseFlexDirection`,
                  defaultMessage: `Horizontal reverse`,
                  description: `Dropdown label for a reversed horizontal browser tweak editor flex direction`,
                }),
                value: `row-reverse`,
              },
              {
                label: e.formatMessage({
                  id: `browserSidebarDesignEditor.verticalFlexDirection`,
                  defaultMessage: `Vertical`,
                  description: `Dropdown label for a vertical browser tweak editor flex direction`,
                }),
                value: `column`,
              },
              {
                label: e.formatMessage({
                  id: `browserSidebarDesignEditor.verticalReverseFlexDirection`,
                  defaultMessage: `Vertical reverse`,
                  description: `Dropdown label for a reversed vertical browser tweak editor flex direction`,
                }),
                value: `column-reverse`,
              },
            ],
          )
        : t.property === `justify-content`
          ? Nn(
              [t.value],
              Mn(t.value, `flex-start`, [
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.startDistribution`,
                    defaultMessage: `Start`,
                    description: `Dropdown label for start distribution in the browser tweak editor`,
                  }),
                  value: `flex-start`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.centerDistribution`,
                    defaultMessage: `Center`,
                    description: `Dropdown label for centered distribution in the browser tweak editor`,
                  }),
                  value: `center`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.endDistribution`,
                    defaultMessage: `End`,
                    description: `Dropdown label for end distribution in the browser tweak editor`,
                  }),
                  value: `flex-end`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.spaceBetweenDistribution`,
                    defaultMessage: `Space between`,
                    description: `Dropdown label for space-between distribution in the browser tweak editor`,
                  }),
                  value: `space-between`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.spaceAroundDistribution`,
                    defaultMessage: `Space around`,
                    description: `Dropdown label for space-around distribution in the browser tweak editor`,
                  }),
                  value: `space-around`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.spaceEvenlyDistribution`,
                    defaultMessage: `Space evenly`,
                    description: `Dropdown label for space-evenly distribution in the browser tweak editor`,
                  }),
                  value: `space-evenly`,
                },
              ]),
            )
          : t.property === `align-items`
            ? Nn(
                [t.value],
                Mn(t.value, `stretch`, [
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.startAlignment`,
                      defaultMessage: `Start`,
                      description: `Dropdown label for start alignment in the browser tweak editor`,
                    }),
                    value: `flex-start`,
                  },
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.centerAlignment`,
                      defaultMessage: `Center`,
                      description: `Dropdown label for centered alignment in the browser tweak editor`,
                    }),
                    value: `center`,
                  },
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.endAlignment`,
                      defaultMessage: `End`,
                      description: `Dropdown label for end alignment in the browser tweak editor`,
                    }),
                    value: `flex-end`,
                  },
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.stretchAlignment`,
                      defaultMessage: `Stretch`,
                      description: `Dropdown label for stretched alignment in the browser tweak editor`,
                    }),
                    value: `stretch`,
                  },
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.baselineAlignment`,
                      defaultMessage: `Baseline`,
                      description: `Dropdown label for baseline alignment in the browser tweak editor`,
                    }),
                    value: `baseline`,
                  },
                ]),
              )
            : [];
}
function Mn(e, t, n) {
  return e === `normal` ? n.map((n) => (n.value === t ? { ...n, value: e } : n)) : n;
}
function Nn(e, t) {
  let n = new Set(t.map((e) => e.value)),
    r = e.flatMap((e) => (e.trim().length === 0 || n.has(e) ? [] : (n.add(e), [{ value: e }])));
  return r.length === 0 ? t : [...r, ...t];
}
var Pn, Fn;
function In() {
  return (In = e(() => {
    ((Pn = [
      { label: `Inter`, value: `"Inter Variable", Arial, sans-serif` },
      { label: `System`, value: `system-ui, sans-serif` },
      { label: `Arial`, value: `Arial, sans-serif` },
      { label: `Serif`, value: `Georgia, "Times New Roman", serif` },
      { label: `Mono`, value: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace` },
    ]),
      (Fn = [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`]));
  }))();
}
var Ln, Rn;
function zn() {
  return (zn = e(() => {
    ((Ln = `_numericInput_1hft5_1`), (Rn = { numericInput: Ln }));
  }))();
}
function Bn(e) {
  let t = (0, J.c)(131),
    {
      canEditAnnotationControls: r,
      dropdownPortalContainer: i,
      editorState: a,
      defaultExpandedSpacingGroups: o,
      isEditable: s,
      onControlDragActiveChange: u,
      onControlEditingActiveChange: f,
      onScrubActiveChange: p,
      onUpdate: m,
    } = e,
    h = k(),
    g = ee(mt),
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = new Set()), (t[0] = _)) : (_ = t[0]);
  let v;
  t[1] === a.id ? (v = t[2]) : ((v = { editorId: a.id, callbacks: _ }), (t[1] = a.id), (t[2] = v));
  let b = (0, Y.useRef)(v),
    x;
  t[3] === h
    ? (x = t[4])
    : ((x = h.formatMessage({
        id: `browserSidebarDesignEditor.dragStylingControls`,
        defaultMessage: `Move styling controls`,
        description: `Accessible label for the browser design styling controls drag handle`,
      })),
      (t[3] = h),
      (t[4] = x));
  let S = x,
    C;
  t[5] === a.annotationControls?.controlsHeading
    ? (C = t[6])
    : ((C =
        a.annotationControls?.controlsHeading ??
        (0, X.jsx)(d, {
          id: `browserSidebarDesignEditor.annotationControls.heading`,
          defaultMessage: `Webpage controls`,
          description: `Fallback heading for annotation controls supplied by the webpage, shown in the grip bar when replacing built-in controls or above the webpage section when extending them`,
        })),
      (t[5] = a.annotationControls?.controlsHeading),
      (t[6] = C));
  let w = C,
    T = (0, Y.useId)(),
    E;
  t[7] === a.anchor.frameUrl
    ? (E = t[8])
    : ((E = URL.parse(a.anchor.frameUrl ?? ``)), (t[7] = a.anchor.frameUrl), (t[8] = E));
  let D = E,
    O;
  t[9] !== a.anchor.pageUrl || t[10] !== D
    ? ((O = D?.hostname ? D : URL.parse(a.anchor.pageUrl)),
      (t[9] = a.anchor.pageUrl),
      (t[10] = D),
      (t[11] = O))
    : (O = t[11]);
  let A = O,
    j = A?.hostname === `localhost` ? A.host : A?.hostname || a.anchor.pageUrl,
    M;
  t[12] !== a.anchor.kind || t[13] !== a.elementTagName || t[14] !== a.targetLabel
    ? ((M =
        a.elementTagName ?? (a.anchor.kind === `element` ? a.targetLabel.split(`:`, 1)[0]?.trim() : void 0)),
      (t[12] = a.anchor.kind),
      (t[13] = a.elementTagName),
      (t[14] = a.targetLabel),
      (t[15] = M))
    : (M = t[15]);
  let te = M,
    N;
  t[16] !== o?.margin || t[17] !== o?.padding
    ? ((N = () => ({ margin: o?.margin === !0, padding: o?.padding === !0 })),
      (t[16] = o?.margin),
      (t[17] = o?.padding),
      (t[18] = N))
    : (N = t[18]);
  let [P, ne] = (0, Y.useState)(N),
    [re, ie] = (0, Y.useState)(!1),
    ae;
  t[19] === a ? (ae = t[20]) : ((ae = () => Ar(a)), (t[19] = a), (t[20] = ae));
  let [oe, se] = (0, Y.useState)(ae),
    ce;
  t[21] !== a.annotationControlChanges ||
  t[22] !== a.annotationControls ||
  t[23] !== a.id ||
  t[24] !== a.targetLabel
    ? ((ce =
        a.annotationControls == null
          ? null
          : {
              id: a.id,
              targetLabel: a.targetLabel,
              annotationControls: a.annotationControls,
              annotationControlChanges: a.annotationControlChanges,
            }),
      (t[21] = a.annotationControlChanges),
      (t[22] = a.annotationControls),
      (t[23] = a.id),
      (t[24] = a.targetLabel),
      (t[25] = ce))
    : (ce = t[25]);
  let F = ce,
    le = F != null && F.annotationControls.controls.length > 0,
    I = le && a.annotationControls?.controlsMode === `replace`,
    ue = a.anchor.kind !== `virtual` && !I,
    de;
  t[26] !== a || t[27] !== ue
    ? ((de = ue ? yr(a) : null), (t[26] = a), (t[27] = ue), (t[28] = de))
    : (de = t[28]);
  let R = de,
    fe,
    z,
    pe,
    B,
    me,
    he,
    ge,
    _e,
    ye;
  if (
    t[29] !== F ||
    t[30] !== r ||
    t[31] !== w ||
    t[32] !== T ||
    t[33] !== S ||
    t[34] !== i ||
    t[35] !== a ||
    t[36] !== te ||
    t[37] !== P ||
    t[38] !== le ||
    t[39] !== h ||
    t[40] !== s ||
    t[41] !== re ||
    t[42] !== oe ||
    t[43] !== u ||
    t[44] !== f ||
    t[45] !== p ||
    t[46] !== m ||
    t[47] !== g ||
    t[48] !== I ||
    t[49] !== ue ||
    t[50] !== R ||
    t[51] !== j
  ) {
    let e = Cr(br(ue ? a.declarations : [])),
      o;
    t[61] !== a || t[62] !== m
      ? ((o = (e) => {
          m(e(a));
        }),
        (t[61] = a),
        (t[62] = m),
        (t[63] = o))
      : (o = t[63]);
    let _ = o,
      v;
    t[64] !== F || t[65] !== r || t[66] !== a || t[67] !== s || t[68] !== m || t[69] !== g
      ? ((v = (e, t) => {
          if (!s || !r || F == null) return;
          let n = Zt(F, e, t);
          m({ ...a, annotationControlChanges: n.annotationControlChanges });
          let i = F.annotationControls.controls.find((t) => t.callback === e),
            o =
              F.annotationControlChanges?.find((t) => t.callback === e)?.value ??
              (i == null ? void 0 : (i.currentValue ?? We(i))),
            c = n.annotationControlChanges?.find((t) => t.callback === e)?.value;
          (b.current.editorId !== a.id && (b.current = { editorId: a.id, callbacks: new Set() }),
            i != null &&
              c !== o &&
              !b.current.callbacks.has(e) &&
              (b.current.callbacks.add(e),
              g.logProductEvent(ve, {
                feature: `custom-controls`,
                interactionType: `edited`,
                controlType: i.type,
              })));
        }),
        (t[64] = F),
        (t[65] = r),
        (t[66] = a),
        (t[67] = s),
        (t[68] = m),
        (t[69] = g),
        (t[70] = v))
      : (v = t[70]);
    let x = v;
    _e = `-mx-4 flex min-w-0 flex-col`;
    let C = I ? T : void 0,
      E;
    t[71] !== w || t[72] !== te || t[73] !== I
      ? ((E = I
          ? w
          : te != null &&
            (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.targetTag`,
              defaultMessage: `<{tag}>`,
              description: `The annotated element's HTML tag name enclosed in angle brackets, shown in the annotation editor's drag bar`,
              values: { tag: te },
            })),
        (t[71] = w),
        (t[72] = te),
        (t[73] = I),
        (t[74] = E))
      : (E = t[74]);
    let D;
    t[75] === E ? (D = t[76]) : ((D = (0, X.jsx)(`bdi`, { children: E })), (t[75] = E), (t[76] = D));
    let O;
    t[77] !== C || t[78] !== D
      ? ((O = (0, X.jsx)(_t, {
          id: C,
          className: `font-medium text-secondary`,
          animateOnGroupHover: !0,
          children: D,
        })),
        (t[77] = C),
        (t[78] = D),
        (t[79] = O))
      : (O = t[79]);
    let k;
    (t[80] === S
      ? (k = t[81])
      : ((k = (0, X.jsx)(c, { "aria-label": S, className: `rotate-90 text-tertiary` })),
        (t[80] = S),
        (t[81] = k)),
      t[82] !== S || t[83] !== O || t[84] !== k
        ? ((ye = (0, X.jsxs)(`div`, {
            className: `group flex min-w-0 cursor-grab touch-none items-center justify-between gap-3 bg-text/5 px-4 py-1.5 text-xs select-none active:cursor-grabbing`,
            "data-browser-sidebar-design-drag-handle": !0,
            title: S,
            children: [O, k],
          })),
          (t[82] = S),
          (t[83] = O),
          (t[84] = k),
          (t[85] = ye))
        : (ye = t[85]),
      (he = `max-h-[216px] min-w-0 overflow-y-auto`),
      (ge = !0),
      (fe = en),
      t[86] !== F ||
      t[87] !== r ||
      t[88] !== w ||
      t[89] !== T ||
      t[90] !== i ||
      t[91] !== x ||
      t[92] !== le ||
      t[93] !== h ||
      t[94] !== s ||
      t[95] !== u ||
      t[96] !== f ||
      t[97] !== p ||
      t[98] !== I ||
      t[99] !== j
        ? ((z = le
            ? (0, X.jsxs)(`section`, {
                className: `col-span-2 grid min-w-0 grid-cols-subgrid gap-x-3 gap-y-1.5`,
                "aria-labelledby": T,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: L(
                      `col-span-2 flex min-w-0 flex-col gap-1 pt-0.5 select-none`,
                      I ? `pb-1.5` : `pb-1`,
                    ),
                    children: [
                      I
                        ? null
                        : (0, X.jsx)(`h3`, {
                            id: T,
                            className: `text-sm font-medium wrap-anywhere text-default`,
                            children: (0, X.jsx)(`bdi`, { children: w }),
                          }),
                      (0, X.jsxs)(`div`, {
                        className: `flex min-w-0 items-center gap-1 text-xs text-secondary`,
                        children: [
                          (0, X.jsx)(`p`, {
                            children: (0, X.jsx)(d, {
                              id: `browserSidebarDesignEditor.annotationControls.websiteDomainAttribution`,
                              defaultMessage: `Controls provided by {websiteDomain}`,
                              description: `Disclosure above annotation controls supplied by a website. websiteDomain is the domain of the website providing these controls, such as example.com, or the host including the port for localhost, such as localhost:3000`,
                              values: { websiteDomain: j },
                            }),
                          }),
                          (0, X.jsx)(Oe, {
                            cloneCustomTrigger: !0,
                            portalContainer: i,
                            side: `top`,
                            variant: `rich`,
                            tooltipContent: (0, X.jsx)(`p`, {
                              className: `p-3 text-xs`,
                              children: (0, X.jsx)(d, {
                                id: `browserSidebarDesignEditor.annotationControls.previewSharingWithWebsiteDomain`,
                                defaultMessage: `Your selections are shared with {websiteDomain} as you adjust these controls, before you send.`,
                                description: `Tooltip explaining that the website receives annotation control selections as the user adjusts them, before sending the annotation to ChatGPT. websiteDomain is the receiving website's domain, such as example.com, or the host including the port for localhost, such as localhost:3000. This refers only to control values, not annotation text or attachments`,
                                values: { websiteDomain: j },
                              }),
                            }),
                            children: (0, X.jsx)(n, {
                              "aria-label": h.formatMessage({
                                id: `browserSidebarDesignEditor.annotationControls.previewSharingLabel`,
                                defaultMessage: `How control values are shared`,
                                description: `Accessible label for the info icon showing a tooltip about sharing webpage annotation control values during preview`,
                              }),
                              color: `ghostTertiary`,
                              size: `inline`,
                              children: (0, X.jsx)(`span`, {
                                className: `inline-flex`,
                                children: (0, X.jsx)(y, { asset: l }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, X.jsx)($t, {
                    dropdownPortalContainer: i,
                    editorState: F,
                    isEditable: s && r,
                    onControlDragActiveChange: u,
                    onControlEditingActiveChange: f,
                    onReset: x,
                    onScrubActiveChange: p,
                    onValueChange: x,
                  }),
                ],
              })
            : null),
          (t[86] = F),
          (t[87] = r),
          (t[88] = w),
          (t[89] = T),
          (t[90] = i),
          (t[91] = x),
          (t[92] = le),
          (t[93] = h),
          (t[94] = s),
          (t[95] = u),
          (t[96] = f),
          (t[97] = p),
          (t[98] = I),
          (t[99] = j),
          (t[100] = z))
        : (z = t[100]),
      (pe = le && (R != null || e.length > 0) ? (0, X.jsx)(Gn, { variant: `section` }) : null),
      t[101] !== i || t[102] !== s || t[103] !== R || t[104] !== _
        ? ((B =
            R == null
              ? null
              : (0, X.jsx)(Un, {
                  dropdownPortalContainer: i,
                  isEditable: s,
                  isEdited: R.value !== R.previousValue,
                  value: R.value,
                  onReset: () => {
                    _(gr);
                  },
                  onValueChange: (e) => {
                    _((t) => hr(t, e));
                  },
                })),
          (t[101] = i),
          (t[102] = s),
          (t[103] = R),
          (t[104] = _),
          (t[105] = B))
        : (B = t[105]));
    let A;
    (t[106] !== i ||
    t[107] !== P ||
    t[108] !== s ||
    t[109] !== re ||
    t[110] !== oe ||
    t[111] !== u ||
    t[112] !== f ||
    t[113] !== p ||
    t[114] !== R ||
    t[115] !== _
      ? ((A = (e, t) =>
          (0, X.jsx)(
            Wn,
            {
              dropdownPortalContainer: i,
              expandedSpacingGroups: P,
              isFlexSpacingExpanded: re,
              isEditable: s,
              lockedRelationships: oe,
              sectionGroup: e,
              showDivider: t > 0 || R != null,
              onControlDragActiveChange: u,
              onControlEditingActiveChange: f,
              onDimensionLockToggle: () => {
                se(Hn);
              },
              onDimensionValueChange: (e, t) => {
                _((n) => (oe.dimensions ? mr(n, e, t) : ur(n, e, { value: t })));
              },
              onSpacingExpandToggle: (e) => {
                ne((t) => ({ ...t, [e]: !t[e] }));
              },
              onFlexSpacingExpandToggle: () => {
                ie(Vn);
              },
              onSpacingLockToggle: (e, t) => {
                let n = kr(e, t),
                  r = !oe[n];
                (se((e) => ({ ...e, [n]: r })), r && _((n) => fr(n, e, t)));
              },
              onSpacingValueChange: (e, t, n) => {
                _((r) => (Nr(oe, e, t) ? pr(r, e, t, n) : ur(r, t, { value: n })));
              },
              onDeclarationValueChange: (e, t) => {
                _((n) => ur(n, e, { value: t }));
              },
              onScrubActiveChange: p,
              onDeclarationReset: (e) => {
                let t = Dr(e);
                _((n) => (t != null && Nr(oe, t, e) ? vr(n, t, e) : _r(n, e)));
              },
            },
            e.id,
          )),
        (t[106] = i),
        (t[107] = P),
        (t[108] = s),
        (t[109] = re),
        (t[110] = oe),
        (t[111] = u),
        (t[112] = f),
        (t[113] = p),
        (t[114] = R),
        (t[115] = _),
        (t[116] = A))
      : (A = t[116]),
      (me = e.map(A)),
      (t[29] = F),
      (t[30] = r),
      (t[31] = w),
      (t[32] = T),
      (t[33] = S),
      (t[34] = i),
      (t[35] = a),
      (t[36] = te),
      (t[37] = P),
      (t[38] = le),
      (t[39] = h),
      (t[40] = s),
      (t[41] = re),
      (t[42] = oe),
      (t[43] = u),
      (t[44] = f),
      (t[45] = p),
      (t[46] = m),
      (t[47] = g),
      (t[48] = I),
      (t[49] = ue),
      (t[50] = R),
      (t[51] = j),
      (t[52] = fe),
      (t[53] = z),
      (t[54] = pe),
      (t[55] = B),
      (t[56] = me),
      (t[57] = he),
      (t[58] = ge),
      (t[59] = _e),
      (t[60] = ye));
  } else
    ((fe = t[52]),
      (z = t[53]),
      (pe = t[54]),
      (B = t[55]),
      (me = t[56]),
      (he = t[57]),
      (ge = t[58]),
      (_e = t[59]),
      (ye = t[60]));
  let be;
  t[117] !== fe || t[118] !== z || t[119] !== pe || t[120] !== B || t[121] !== me
    ? ((be = (0, X.jsxs)(fe, { children: [z, pe, B, me] })),
      (t[117] = fe),
      (t[118] = z),
      (t[119] = pe),
      (t[120] = B),
      (t[121] = me),
      (t[122] = be))
    : (be = t[122]);
  let xe;
  t[123] !== he || t[124] !== ge || t[125] !== be
    ? ((xe = (0, X.jsx)(`div`, {
        className: he,
        "data-browser-sidebar-design-scroll-container": ge,
        children: be,
      })),
      (t[123] = he),
      (t[124] = ge),
      (t[125] = be),
      (t[126] = xe))
    : (xe = t[126]);
  let V;
  return (
    t[127] !== _e || t[128] !== ye || t[129] !== xe
      ? ((V = (0, X.jsxs)(`div`, { className: _e, children: [ye, xe] })),
        (t[127] = _e),
        (t[128] = ye),
        (t[129] = xe),
        (t[130] = V))
      : (V = t[130]),
    V
  );
}
function Vn(e) {
  return !e;
}
function Hn(e) {
  return { ...e, dimensions: !e.dimensions };
}
function Un(e) {
  let t = (0, J.c)(14),
    { dropdownPortalContainer: n, isEditable: r, isEdited: i, value: a, onReset: o, onValueChange: s } = e,
    c = k(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage(
        {
          id: `browserSidebarDesignEditor.resetProperty`,
          defaultMessage: `Reset {property}`,
          description: `Accessible label for resetting a design tweak property in the in-app browser design edit card`,
        },
        {
          property: c.formatMessage({
            id: `browserSidebarDesignEditor.textProperty`,
            defaultMessage: `Text`,
            description: `Property label for editable text in the in-app browser design edit card`,
          }),
        },
      )),
      (t[0] = c),
      (t[1] = l));
  let u = l,
    f;
  t[2] !== c || t[3] !== r || t[4] !== s || t[5] !== a
    ? ((f = r
        ? (0, X.jsx)(`span`, {
            className: L(ei, ni, `flex min-h-7 min-w-0 items-center px-3`),
            children: (0, X.jsx)(`input`, {
              "aria-label": c.formatMessage({
                id: `browserSidebarDesignEditor.textProperty`,
                defaultMessage: `Text`,
                description: `Property label for editable text in the in-app browser design edit card`,
              }),
              className: L(ti, `h-7 w-full text-start text-xs`),
              "data-browser-sidebar-design-content-input": !0,
              value: a,
              onChange: (e) => {
                s(e.target.value);
              },
            }),
          })
        : (0, X.jsx)(`span`, {
            className: L(ei, ni, `block min-h-7 truncate px-3 py-1 text-end font-mono text-xs text-default`),
            title: a,
            children: a,
          })),
      (t[2] = c),
      (t[3] = r),
      (t[4] = s),
      (t[5] = a),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(`span`, {
        className: `flex min-h-7 min-w-0 items-center truncate overflow-hidden text-sm text-secondary`,
        children: (0, X.jsx)(d, {
          id: `browserSidebarDesignEditor.textProperty`,
          defaultMessage: `Text`,
          description: `Property label for editable text in the in-app browser design edit card`,
        }),
      })),
      (t[7] = m))
    : (m = t[7]);
  let h = r && i,
    g;
  return (
    t[8] !== n || t[9] !== o || t[10] !== u || t[11] !== h || t[12] !== p
      ? ((g = (0, X.jsxs)(`div`, {
          className: `contents`,
          children: [
            m,
            (0, X.jsx)(Kn, {
              dropdownPortalContainer: n,
              showReset: h,
              resetLabel: u,
              onReset: o,
              children: p,
            }),
          ],
        })),
        (t[8] = n),
        (t[9] = o),
        (t[10] = u),
        (t[11] = h),
        (t[12] = p),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
function Wn(e) {
  let t = (0, J.c)(23),
    {
      dropdownPortalContainer: n,
      expandedSpacingGroups: r,
      isFlexSpacingExpanded: i,
      isEditable: a,
      lockedRelationships: o,
      sectionGroup: s,
      showDivider: c,
      onControlDragActiveChange: l,
      onControlEditingActiveChange: u,
      onDeclarationValueChange: d,
      onDeclarationReset: f,
      onDimensionLockToggle: p,
      onDimensionValueChange: m,
      onFlexSpacingExpandToggle: h,
      onScrubActiveChange: g,
      onSpacingExpandToggle: _,
      onSpacingLockToggle: v,
      onSpacingValueChange: y,
    } = e,
    b;
  t[0] === c ? (b = t[1]) : ((b = c ? (0, X.jsx)(Gn, {}) : null), (t[0] = c), (t[1] = b));
  let x;
  t[2] !== n ||
  t[3] !== r ||
  t[4] !== a ||
  t[5] !== i ||
  t[6] !== o ||
  t[7] !== l ||
  t[8] !== u ||
  t[9] !== f ||
  t[10] !== d ||
  t[11] !== p ||
  t[12] !== m ||
  t[13] !== h ||
  t[14] !== g ||
  t[15] !== _ ||
  t[16] !== v ||
  t[17] !== y ||
  t[18] !== s.sections
    ? ((x = s.sections.map((e, t) => {
        let c = (() => {
          switch (e.kind) {
            case `declaration`:
              return (0, X.jsx)(qn, {
                declaration: e.declaration,
                dropdownPortalContainer: n,
                isEditable: a,
                onControlDragActiveChange: l,
                onControlEditingActiveChange: u,
                onReset: () => {
                  f(e.declaration.property);
                },
                onScrubActiveChange: g,
                onValueChange: (t) => {
                  d(e.declaration.property, t);
                },
              });
            case `dimensions`:
              return (0, X.jsx)(Qn, {
                dropdownPortalContainer: n,
                height: e.height,
                isEditable: a,
                isLocked: o.dimensions,
                width: e.width,
                onLockToggle: p,
                onReset: f,
                onValueChange: m,
                onScrubActiveChange: g,
              });
            case `spacing`:
              return (0, X.jsx)(Yn, {
                declarations: e.declarations,
                dropdownPortalContainer: n,
                isEditable: a,
                isExpanded: r[e.property],
                lockedRelationships: o,
                property: e.property,
                onDeclarationReset: f,
                onExpandToggle: () => {
                  _(e.property);
                },
                onLockToggle: (t) => {
                  v(e.property, t);
                },
                onValueChange: (t, n) => {
                  y(e.property, t, n);
                },
                onScrubActiveChange: g,
              });
            case `flex-spacing`:
              return (0, X.jsx)(Zn, {
                columnGap: e.columnGap,
                dropdownPortalContainer: n,
                isEditable: a,
                isExpanded: i,
                rowGap: e.rowGap,
                onDeclarationReset: f,
                onExpandToggle: h,
                onScrubActiveChange: g,
                onValueChange: d,
              });
          }
        })();
        return (0, X.jsxs)(
          `div`,
          {
            className: `contents`,
            children: [t > 0 && Sr(e) && !Sr(s.sections[t - 1]) ? (0, X.jsx)(Gn, {}) : null, c],
          },
          xr(e),
        );
      })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a),
      (t[5] = i),
      (t[6] = o),
      (t[7] = l),
      (t[8] = u),
      (t[9] = f),
      (t[10] = d),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = s.sections),
      (t[19] = x))
    : (x = t[19]);
  let S;
  return (
    t[20] !== b || t[21] !== x
      ? ((S = (0, X.jsxs)(X.Fragment, { children: [b, x] })), (t[20] = b), (t[21] = x), (t[22] = S))
      : (S = t[22]),
    S
  );
}
function Gn(e) {
  let t = (0, J.c)(4),
    { variant: n } = e,
    r = (n === void 0 ? `row` : n) === `section` ? `-mx-4 my-1 border-default` : `my-0.5 border-subtle`,
    i;
  t[0] === r ? (i = t[1]) : ((i = L(`col-span-2 border-t`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = (0, X.jsx)(`span`, { "aria-hidden": `true`, className: i })), (t[2] = i), (t[3] = a)),
    a
  );
}
function Kn(e) {
  let t = (0, J.c)(15),
    {
      children: r,
      dropdownPortalContainer: i,
      isScrubbable: a,
      scrubPeerProperty: o,
      scrubProperty: s,
      showReset: c,
      resetLabel: l,
      onReset: u,
    } = e,
    d = a !== void 0 && a ? `` : void 0,
    f;
  t[0] !== i || t[1] !== u || t[2] !== l || t[3] !== c
    ? ((f = c
        ? (0, X.jsx)(Oe, {
            cloneCustomTrigger: !0,
            portalContainer: i,
            tooltipContent: l,
            children: (0, X.jsx)(n, {
              "aria-label": l,
              className: `absolute end-full top-1/2 me-1 h-5 w-5 shrink-0 -translate-y-1/2`,
              color: `ghost`,
              size: `iconSm`,
              type: `button`,
              uniform: !0,
              onClick: u,
              children: (0, X.jsx)(`span`, {
                className: `inline-flex`,
                children: (0, X.jsx)(y, { asset: we }),
              }),
            }),
          })
        : null),
      (t[0] = i),
      (t[1] = u),
      (t[2] = l),
      (t[3] = c),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] === r
    ? (p = t[6])
    : ((p = (0, X.jsx)(`span`, { className: `flex max-w-full min-w-0 justify-end`, children: r })),
      (t[5] = r),
      (t[6] = p));
  let m;
  t[7] !== f || t[8] !== p
    ? ((m = (0, X.jsxs)(`span`, {
        className: `relative inline-flex max-w-full justify-end`,
        children: [f, p],
      })),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h;
  return (
    t[10] !== o || t[11] !== s || t[12] !== d || t[13] !== m
      ? ((h = (0, X.jsx)(`span`, {
          className: `flex min-w-0 justify-end ps-6`,
          "data-browser-sidebar-design-scrub-value-cell": d,
          "data-browser-sidebar-design-scrub-peer-property": o,
          "data-browser-sidebar-design-scrub-property": s,
          children: m,
        })),
        (t[10] = o),
        (t[11] = s),
        (t[12] = d),
        (t[13] = m),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
function qn(e) {
  let t = (0, J.c)(33),
    {
      connector: n,
      declaration: r,
      dropdownPortalContainer: i,
      isNested: a,
      isEditable: o,
      onControlDragActiveChange: s,
      onControlEditingActiveChange: c,
      onReset: l,
      scrubPeerProperty: u,
      onScrubActiveChange: d,
      showsRelationshipConnector: f,
      onValueChange: p,
    } = e,
    m = a !== void 0 && a,
    h = f !== void 0 && f,
    g = k(),
    _ = h ? `w-full pe-9` : m && `ms-1 ps-3`,
    v;
  t[0] === _
    ? (v = t[1])
    : ((v = L(`relative flex min-h-7 min-w-0 items-center text-sm text-secondary`, _)),
      (t[0] = _),
      (t[1] = v));
  let y;
  t[2] !== r.property || t[3] !== g
    ? ((y = Xr(g, r.property)), (t[2] = r.property), (t[3] = g), (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] !== r.property || t[6] !== g
    ? ((b = Xr(g, r.property)), (t[5] = r.property), (t[6] = g), (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== r.property || t[9] !== m
    ? ((x = (0, X.jsx)(`span`, {
        className: `block truncate`,
        children: (0, X.jsx)(cr, { property: r.property, spacingAxisOnly: m }),
      })),
      (t[8] = r.property),
      (t[9] = m),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] !== i || t[12] !== b || t[13] !== x
    ? ((S = (0, X.jsx)(Oe, {
        delayOpen: !0,
        openWhen: `trigger-overflows`,
        portalContainer: i,
        tooltipContent: b,
        children: x,
      })),
      (t[11] = i),
      (t[12] = b),
      (t[13] = x),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== n || t[16] !== v || t[17] !== y || t[18] !== S
    ? ((C = (0, X.jsxs)(`span`, {
        className: v,
        "data-browser-sidebar-design-scrub-label": !0,
        "data-browser-sidebar-design-scrub-clone-label": y,
        children: [n, S],
      })),
      (t[15] = n),
      (t[16] = v),
      (t[17] = y),
      (t[18] = S),
      (t[19] = C))
    : (C = t[19]);
  let w;
  t[20] !== r ||
  t[21] !== i ||
  t[22] !== o ||
  t[23] !== s ||
  t[24] !== c ||
  t[25] !== l ||
  t[26] !== d ||
  t[27] !== p ||
  t[28] !== u
    ? ((w = (0, X.jsx)(Jn, {
        declaration: r,
        dropdownPortalContainer: i,
        isEditable: o,
        onControlDragActiveChange: s,
        onControlEditingActiveChange: c,
        onReset: l,
        onScrubActiveChange: d,
        scrubPeerProperty: u,
        onValueChange: p,
      })),
      (t[20] = r),
      (t[21] = i),
      (t[22] = o),
      (t[23] = s),
      (t[24] = c),
      (t[25] = l),
      (t[26] = d),
      (t[27] = p),
      (t[28] = u),
      (t[29] = w))
    : (w = t[29]);
  let T;
  return (
    t[30] !== w || t[31] !== C
      ? ((T = (0, X.jsxs)(`div`, { className: `contents`, children: [C, w] })),
        (t[30] = w),
        (t[31] = C),
        (t[32] = T))
      : (T = t[32]),
    T
  );
}
function Jn(e) {
  let t = (0, J.c)(20),
    {
      declaration: n,
      dropdownPortalContainer: r,
      isEditable: i,
      onControlDragActiveChange: a,
      onControlEditingActiveChange: o,
      onReset: s,
      onScrubActiveChange: c,
      scrubPeerProperty: l,
      onValueChange: u,
    } = e,
    d = k(),
    f;
  t[0] !== n.property || t[1] !== d
    ? ((f = d.formatMessage(
        {
          id: `browserSidebarDesignEditor.resetProperty`,
          defaultMessage: `Reset {property}`,
          description: `Accessible label for resetting a design tweak property in the in-app browser design edit card`,
        },
        { property: Xr(d, n.property) },
      )),
      (t[0] = n.property),
      (t[1] = d),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m = i && n.value !== n.previousValue,
    h;
  t[3] !== n || t[4] !== r || t[5] !== i || t[6] !== a || t[7] !== o || t[8] !== c || t[9] !== u
    ? ((h = i
        ? (0, X.jsx)(tr, {
            declaration: n,
            dropdownPortalContainer: r,
            isEdited: n.value !== n.previousValue,
            onControlDragActiveChange: a,
            onControlEditingActiveChange: o,
            onScrubActiveChange: c,
            onValueChange: u,
          })
        : (0, X.jsx)(`span`, {
            className: L(
              ei,
              `block min-h-7 w-full truncate px-3 py-1 text-end font-mono text-xs text-default`,
            ),
            dir: `ltr`,
            title: n.value,
            children: n.value,
          })),
      (t[3] = n),
      (t[4] = r),
      (t[5] = i),
      (t[6] = a),
      (t[7] = o),
      (t[8] = c),
      (t[9] = u),
      (t[10] = h))
    : (h = t[10]);
  let g;
  return (
    t[11] !== n.property ||
    t[12] !== r ||
    t[13] !== i ||
    t[14] !== s ||
    t[15] !== p ||
    t[16] !== l ||
    t[17] !== m ||
    t[18] !== h
      ? ((g = (0, X.jsx)(Kn, {
          dropdownPortalContainer: r,
          isScrubbable: i,
          scrubPeerProperty: l,
          scrubProperty: n.property,
          showReset: m,
          resetLabel: p,
          onReset: s,
          children: h,
        })),
        (t[11] = n.property),
        (t[12] = r),
        (t[13] = i),
        (t[14] = s),
        (t[15] = p),
        (t[16] = l),
        (t[17] = m),
        (t[18] = h),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
function Yn(e) {
  let t = (0, J.c)(67),
    {
      declarations: n,
      dropdownPortalContainer: r,
      isEditable: i,
      isExpanded: a,
      lockedRelationships: o,
      property: s,
      onDeclarationReset: c,
      onExpandToggle: l,
      onLockToggle: u,
      onScrubActiveChange: d,
      onValueChange: f,
    } = e,
    p = k(),
    m,
    h,
    g,
    _,
    v,
    y,
    b;
  if (
    t[0] !== n ||
    t[1] !== p ||
    t[2] !== i ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== l ||
    t[6] !== d ||
    t[7] !== f ||
    t[8] !== s
  ) {
    let e = n.map(Xn),
      r = e.length > 0 && e.every((t) => t === e[0]) ? e[0] : null,
      c;
    t[16] !== p || t[17] !== a || t[18] !== s
      ? ((c = a
          ? p.formatMessage(
              {
                id: `browserSidebarDesignEditor.collapseSpacing`,
                defaultMessage: `Collapse {property}`,
                description: `Accessible label for collapsing margin or padding rows in the design edit card`,
              },
              { property: s },
            )
          : p.formatMessage(
              {
                id: `browserSidebarDesignEditor.expandSpacing`,
                defaultMessage: `Expand {property}`,
                description: `Accessible label for expanding margin or padding rows in the design edit card`,
              },
              { property: s },
            )),
        (t[16] = p),
        (t[17] = a),
        (t[18] = s),
        (t[19] = c))
      : (c = t[19]);
    let u = c,
      x;
    (t[20] === s ? (x = t[21]) : ((x = kr(s, `vertical`)), (t[20] = s), (t[21] = x)), (y = x));
    let S;
    (t[22] === s ? (S = t[23]) : ((S = kr(s, `horizontal`)), (t[22] = s), (t[23] = S)), (m = S));
    let C;
    (t[24] !== p || t[25] !== o || t[26] !== s || t[27] !== y
      ? ((C = o[y]
          ? p.formatMessage(
              {
                id: `browserSidebarDesignEditor.unlockSpacingVertical`,
                defaultMessage: `Unlock {property} vertical values`,
                description: `Accessible label for unlinking top and bottom spacing values in the design edit card`,
              },
              { property: s },
            )
          : p.formatMessage(
              {
                id: `browserSidebarDesignEditor.lockSpacingVertical`,
                defaultMessage: `Lock {property} vertical values`,
                description: `Accessible label for linking top and bottom spacing values in the design edit card`,
              },
              { property: s },
            )),
        (t[24] = p),
        (t[25] = o),
        (t[26] = s),
        (t[27] = y),
        (t[28] = C))
      : (C = t[28]),
      (b = C));
    let w;
    (t[29] !== m || t[30] !== p || t[31] !== o || t[32] !== s
      ? ((w = o[m]
          ? p.formatMessage(
              {
                id: `browserSidebarDesignEditor.unlockSpacingHorizontal`,
                defaultMessage: `Unlock {property} horizontal values`,
                description: `Accessible label for unlinking left and right spacing values in the design edit card`,
              },
              { property: s },
            )
          : p.formatMessage(
              {
                id: `browserSidebarDesignEditor.lockSpacingHorizontal`,
                defaultMessage: `Lock {property} horizontal values`,
                description: `Accessible label for linking left and right spacing values in the design edit card`,
              },
              { property: s },
            )),
        (t[29] = m),
        (t[30] = p),
        (t[31] = o),
        (t[32] = s),
        (t[33] = w))
      : (w = t[33]),
      (h = w),
      (g = `contents`));
    let T;
    t[34] === s
      ? (T = t[35])
      : ((T = (0, X.jsx)(`span`, { className: `truncate`, children: (0, X.jsx)(cr, { property: s }) })),
        (t[34] = s),
        (t[35] = T));
    let E = a && `rotate-90`,
      D;
    t[36] === E
      ? (D = t[37])
      : ((D = L(`icon-2xs shrink-0 text-tertiary transition-transform`, E)), (t[36] = E), (t[37] = D));
    let O;
    (t[38] === D ? (O = t[39]) : ((O = (0, X.jsx)(U, { className: D })), (t[38] = D), (t[39] = O)),
      t[40] !== u || t[41] !== l || t[42] !== O || t[43] !== T
        ? ((_ = (0, X.jsx)(`span`, {
            className: `flex min-h-7 min-w-0 items-center pe-2`,
            "data-browser-sidebar-design-scrub-label": !0,
            children: (0, X.jsxs)(`button`, {
              "aria-label": u,
              className: `-ms-1 inline-flex min-w-0 cursor-interaction items-center gap-1 rounded px-1 py-0.5 text-start text-sm text-secondary hover:bg-primary-ghost-hover`,
              type: `button`,
              onClick: l,
              children: [T, O],
            }),
          })),
          (t[40] = u),
          (t[41] = l),
          (t[42] = O),
          (t[43] = T),
          (t[44] = _))
        : (_ = t[44]),
      (v = a
        ? (0, X.jsx)(`span`, { "aria-hidden": `true` })
        : i
          ? (0, X.jsx)(ar, { declarations: n, property: s, onScrubActiveChange: d, onValueChange: f })
          : (0, X.jsx)(`span`, {
              className: L(
                ei,
                `block min-h-7 w-full truncate px-3 py-1 text-end font-mono text-xs text-default`,
              ),
              dir: `ltr`,
              title: r ?? e.join(` `),
              children: r ?? e.join(` `),
            })),
      (t[0] = n),
      (t[1] = p),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = l),
      (t[6] = d),
      (t[7] = f),
      (t[8] = s),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b));
  } else ((m = t[9]), (h = t[10]), (g = t[11]), (_ = t[12]), (v = t[13]), (y = t[14]), (b = t[15]));
  let x;
  t[45] !== g || t[46] !== _ || t[47] !== v
    ? ((x = (0, X.jsxs)(`div`, { className: g, children: [_, v] })),
      (t[45] = g),
      (t[46] = _),
      (t[47] = v),
      (t[48] = x))
    : (x = t[48]);
  let S;
  t[49] !== n ||
  t[50] !== r ||
  t[51] !== m ||
  t[52] !== h ||
  t[53] !== i ||
  t[54] !== a ||
  t[55] !== o ||
  t[56] !== c ||
  t[57] !== u ||
  t[58] !== d ||
  t[59] !== f ||
  t[60] !== s ||
  t[61] !== y ||
  t[62] !== b
    ? ((S = a
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)($n, {
                dropdownPortalContainer: r,
                first: Or(n, s, `top`),
                isEditable: i,
                isLocked: o[y],
                isNested: !0,
                second: Or(n, s, `bottom`),
                lockLabel: b,
                onLockToggle: () => {
                  u(`vertical`);
                },
                onReset: (e) => {
                  c(e);
                },
                onValueChange: f,
                onScrubActiveChange: d,
              }),
              (0, X.jsx)($n, {
                dropdownPortalContainer: r,
                first: Or(n, s, `left`),
                isEditable: i,
                isLocked: o[m],
                isNested: !0,
                second: Or(n, s, `right`),
                lockLabel: h,
                onLockToggle: () => {
                  u(`horizontal`);
                },
                onReset: (e) => {
                  c(e);
                },
                onValueChange: f,
                onScrubActiveChange: d,
              }),
            ],
          })
        : null),
      (t[49] = n),
      (t[50] = r),
      (t[51] = m),
      (t[52] = h),
      (t[53] = i),
      (t[54] = a),
      (t[55] = o),
      (t[56] = c),
      (t[57] = u),
      (t[58] = d),
      (t[59] = f),
      (t[60] = s),
      (t[61] = y),
      (t[62] = b),
      (t[63] = S))
    : (S = t[63]);
  let C;
  return (
    t[64] !== x || t[65] !== S
      ? ((C = (0, X.jsxs)(X.Fragment, { children: [x, S] })), (t[64] = x), (t[65] = S), (t[66] = C))
      : (C = t[66]),
    C
  );
}
function Xn(e) {
  return e.value;
}
function Zn(e) {
  let t = (0, J.c)(34),
    {
      columnGap: n,
      dropdownPortalContainer: r,
      isEditable: i,
      isExpanded: a,
      rowGap: o,
      onDeclarationReset: s,
      onExpandToggle: c,
      onScrubActiveChange: l,
      onValueChange: u,
    } = e,
    d = k(),
    f;
  t[0] !== d || t[1] !== a
    ? ((f = a
        ? d.formatMessage({
            id: `browserSidebarDesignEditor.collapseFlexSpacing`,
            defaultMessage: `Collapse spacing`,
            description: `Accessible label for collapsing flex spacing controls in the design edit card`,
          })
        : d.formatMessage({
            id: `browserSidebarDesignEditor.expandFlexSpacing`,
            defaultMessage: `Expand spacing`,
            description: `Accessible label for expanding flex spacing controls in the design edit card`,
          })),
      (t[0] = d),
      (t[1] = a),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(`span`, { className: `truncate`, children: (0, X.jsx)(cr, { property: `gap` }) })),
      (t[3] = m))
    : (m = t[3]);
  let h = a && `rotate-90`,
    g;
  t[4] === h
    ? (g = t[5])
    : ((g = L(`icon-2xs shrink-0 text-tertiary transition-transform`, h)), (t[4] = h), (t[5] = g));
  let _;
  t[6] === g ? (_ = t[7]) : ((_ = (0, X.jsx)(U, { className: g })), (t[6] = g), (t[7] = _));
  let v;
  t[8] !== p || t[9] !== c || t[10] !== _
    ? ((v = (0, X.jsx)(`span`, {
        className: `flex min-h-7 min-w-0 items-center pe-2`,
        "data-browser-sidebar-design-scrub-label": !0,
        children: (0, X.jsxs)(`button`, {
          "aria-label": p,
          className: `-ms-1 inline-flex min-w-0 cursor-interaction items-center gap-1 rounded px-1 py-0.5 text-start text-sm text-secondary hover:bg-primary-ghost-hover`,
          type: `button`,
          onClick: c,
          children: [m, _],
        }),
      })),
      (t[8] = p),
      (t[9] = c),
      (t[10] = _),
      (t[11] = v))
    : (v = t[11]);
  let y;
  t[12] !== n || t[13] !== i || t[14] !== a || t[15] !== l || t[16] !== u || t[17] !== o
    ? ((y = a
        ? (0, X.jsx)(`span`, { "aria-hidden": `true` })
        : i
          ? (0, X.jsx)(or, { columnGap: n, rowGap: o, onScrubActiveChange: l, onValueChange: u })
          : (0, X.jsxs)(`span`, {
              className: L(
                ei,
                `block min-h-7 w-full truncate px-3 py-1 text-end font-mono text-xs text-default`,
              ),
              dir: `ltr`,
              children: [n.value, ` `, o.value],
            })),
      (t[12] = n),
      (t[13] = i),
      (t[14] = a),
      (t[15] = l),
      (t[16] = u),
      (t[17] = o),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== v || t[20] !== y
    ? ((b = (0, X.jsxs)(`div`, { className: `contents`, children: [v, y] })),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] !== n ||
  t[23] !== r ||
  t[24] !== i ||
  t[25] !== a ||
  t[26] !== s ||
  t[27] !== l ||
  t[28] !== u ||
  t[29] !== o
    ? ((x = a
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(qn, {
                declaration: n,
                dropdownPortalContainer: r,
                isEditable: i,
                onReset: () => {
                  s(n.property);
                },
                onScrubActiveChange: l,
                onValueChange: (e) => {
                  u(n.property, e);
                },
              }),
              (0, X.jsx)(qn, {
                declaration: o,
                dropdownPortalContainer: r,
                isEditable: i,
                onReset: () => {
                  s(o.property);
                },
                onScrubActiveChange: l,
                onValueChange: (e) => {
                  u(o.property, e);
                },
              }),
            ],
          })
        : null),
      (t[22] = n),
      (t[23] = r),
      (t[24] = i),
      (t[25] = a),
      (t[26] = s),
      (t[27] = l),
      (t[28] = u),
      (t[29] = o),
      (t[30] = x))
    : (x = t[30]);
  let S;
  return (
    t[31] !== b || t[32] !== x
      ? ((S = (0, X.jsxs)(X.Fragment, { children: [b, x] })), (t[31] = b), (t[32] = x), (t[33] = S))
      : (S = t[33]),
    S
  );
}
function Qn(e) {
  let t = (0, J.c)(14),
    {
      dropdownPortalContainer: n,
      height: r,
      isEditable: i,
      isLocked: a,
      width: o,
      onLockToggle: s,
      onReset: c,
      onScrubActiveChange: l,
      onValueChange: u,
    } = e,
    d = k(),
    f;
  t[0] !== d || t[1] !== a
    ? ((f = a
        ? d.formatMessage({
            id: `browserSidebarDesignEditor.unlockDimensionRatio`,
            defaultMessage: `Unlock width and height ratio`,
            description: `Accessible label for unlinking width and height controls in the design edit card`,
          })
        : d.formatMessage({
            id: `browserSidebarDesignEditor.lockDimensionRatio`,
            defaultMessage: `Lock width and height ratio`,
            description: `Accessible label for linking width and height controls in the design edit card`,
          })),
      (t[0] = d),
      (t[1] = a),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== a ||
    t[7] !== p ||
    t[8] !== s ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== u ||
    t[12] !== o
      ? ((m = (0, X.jsx)($n, {
          dropdownPortalContainer: n,
          first: o,
          isEditable: i,
          isLocked: a,
          second: r,
          lockLabel: p,
          onLockToggle: s,
          onReset: c,
          onScrubActiveChange: l,
          onValueChange: u,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a),
        (t[7] = p),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u),
        (t[12] = o),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function $n(e) {
  let t = (0, J.c)(39),
    {
      dropdownPortalContainer: n,
      first: r,
      isEditable: i,
      isLocked: a,
      isNested: o,
      lockLabel: s,
      second: c,
      onLockToggle: l,
      onReset: u,
      onScrubActiveChange: d,
      onValueChange: f,
    } = e,
    p = o !== void 0 && o;
  if (r == null || c == null) return null;
  let m;
  t[0] !== n || t[1] !== a || t[2] !== s || t[3] !== l
    ? ((m = (0, X.jsx)(er, { dropdownPortalContainer: n, isLocked: a, label: s, onClick: l })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = s),
      (t[3] = l),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== r.property || t[6] !== u
    ? ((h = () => {
        u(r.property);
      }),
      (t[5] = r.property),
      (t[6] = u),
      (t[7] = h))
    : (h = t[7]);
  let g = a && p ? c.property : void 0,
    _;
  t[8] !== r.property || t[9] !== f
    ? ((_ = (e) => {
        f(r.property, e);
      }),
      (t[8] = r.property),
      (t[9] = f),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  t[11] !== n ||
  t[12] !== r ||
  t[13] !== i ||
  t[14] !== p ||
  t[15] !== d ||
  t[16] !== m ||
  t[17] !== h ||
  t[18] !== g ||
  t[19] !== _
    ? ((v = (0, X.jsx)(qn, {
        connector: m,
        declaration: r,
        dropdownPortalContainer: n,
        isEditable: i,
        isNested: p,
        onReset: h,
        onScrubActiveChange: d,
        scrubPeerProperty: g,
        showsRelationshipConnector: !0,
        onValueChange: _,
      })),
      (t[11] = n),
      (t[12] = r),
      (t[13] = i),
      (t[14] = p),
      (t[15] = d),
      (t[16] = m),
      (t[17] = h),
      (t[18] = g),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y;
  t[21] !== u || t[22] !== c.property
    ? ((y = () => {
        u(c.property);
      }),
      (t[21] = u),
      (t[22] = c.property),
      (t[23] = y))
    : (y = t[23]);
  let b = a && p ? r.property : void 0,
    x;
  t[24] !== f || t[25] !== c.property
    ? ((x = (e) => {
        f(c.property, e);
      }),
      (t[24] = f),
      (t[25] = c.property),
      (t[26] = x))
    : (x = t[26]);
  let S;
  t[27] !== n ||
  t[28] !== i ||
  t[29] !== p ||
  t[30] !== d ||
  t[31] !== c ||
  t[32] !== y ||
  t[33] !== b ||
  t[34] !== x
    ? ((S = (0, X.jsx)(qn, {
        declaration: c,
        dropdownPortalContainer: n,
        isEditable: i,
        isNested: p,
        onReset: y,
        onScrubActiveChange: d,
        scrubPeerProperty: b,
        showsRelationshipConnector: !0,
        onValueChange: x,
      })),
      (t[27] = n),
      (t[28] = i),
      (t[29] = p),
      (t[30] = d),
      (t[31] = c),
      (t[32] = y),
      (t[33] = b),
      (t[34] = x),
      (t[35] = S))
    : (S = t[35]);
  let C;
  return (
    t[36] !== S || t[37] !== v
      ? ((C = (0, X.jsxs)(X.Fragment, { children: [v, S] })), (t[36] = S), (t[37] = v), (t[38] = C))
      : (C = t[38]),
    C
  );
}
function er(e) {
  let t = (0, J.c)(12),
    { dropdownPortalContainer: r, isLocked: i, label: a, onClick: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(`svg`, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute inset-0 h-full w-full text-tertiary`,
        fill: `none`,
        viewBox: `0 0 36 62`,
        children: (0, X.jsx)(`path`, {
          d: `M28 14H2M28 14V48M28 48H2`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.2`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c = i
      ? `!border-transparent !bg-[color-mix(in_srgb,var(--color-surface)_86%,var(--color-text-info)_14%)] !text-info shadow-sm enabled:hover:!bg-[color-mix(in_srgb,var(--color-surface)_80%,var(--color-text-info)_20%)] enabled:active:!bg-[color-mix(in_srgb,var(--color-surface)_76%,var(--color-text-info)_24%)] data-[state=open]:!bg-[color-mix(in_srgb,var(--color-surface)_80%,var(--color-text-info)_20%)] [&_svg]:!text-info`
      : `!border-transparent !bg-surface !text-secondary shadow-sm enabled:hover:!bg-[color-mix(in_srgb,var(--color-surface)_92%,var(--color-text))] enabled:hover:!text-default enabled:active:!bg-[color-mix(in_srgb,var(--color-surface)_88%,var(--color-text)_12%)] enabled:active:!text-default data-[state=open]:!bg-[color-mix(in_srgb,var(--color-surface)_92%,var(--color-text))] data-[state=open]:!text-default`,
    l;
  t[1] === c
    ? (l = t[2])
    : ((l = L(`absolute top-1/2 right-0 z-10 h-3.5 w-3.5 -translate-y-1/2 !rounded-full p-0`, c)),
      (t[1] = c),
      (t[2] = l));
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(Le, { className: `icon-3xs` })), (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] !== a || t[5] !== o || t[6] !== l
    ? ((d = (0, X.jsx)(n, {
        "aria-label": a,
        className: l,
        color: `ghost`,
        size: `iconSm`,
        uniform: !0,
        onClick: o,
        children: u,
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = l),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== r || t[9] !== a || t[10] !== d
      ? ((f = (0, X.jsxs)(`span`, {
          className: `absolute top-0 -right-1.5 z-10 h-[62px] w-9`,
          children: [
            s,
            (0, X.jsx)(Oe, { cloneCustomTrigger: !0, portalContainer: r, tooltipContent: a, children: d }),
          ],
        })),
        (t[8] = r),
        (t[9] = a),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function tr(e) {
  let t = (0, J.c)(52),
    {
      declaration: n,
      dropdownPortalContainer: r,
      isEdited: i,
      onControlDragActiveChange: a,
      onControlEditingActiveChange: o,
      onScrubActiveChange: s,
      onValueChange: c,
    } = e,
    l = k(),
    u;
  t[0] === n ? (u = t[1]) : ((u = Rr(n)), (t[0] = n), (t[1] = u));
  let d = u;
  if (Ur(n.property)) {
    let e;
    t[2] !== n.property || t[3] !== l
      ? ((e = Xr(l, n.property)), (t[2] = n.property), (t[3] = l), (t[4] = e))
      : (e = t[4]);
    let s;
    return (
      t[5] !== n.value ||
      t[6] !== r ||
      t[7] !== i ||
      t[8] !== a ||
      t[9] !== o ||
      t[10] !== c ||
      t[11] !== d ||
      t[12] !== e
        ? ((s = (0, X.jsx)(lr, {
            ariaLabel: e,
            isEdited: i,
            placeholderValue: d,
            portalContainer: r,
            value: n.value,
            onDragActiveChange: a,
            onEditingActiveChange: o,
            onValueChange: c,
          })),
          (t[5] = n.value),
          (t[6] = r),
          (t[7] = i),
          (t[8] = a),
          (t[9] = o),
          (t[10] = c),
          (t[11] = d),
          (t[12] = e),
          (t[13] = s))
        : (s = t[13]),
      s
    );
  }
  if (n.property === `opacity`) {
    let e;
    t[14] !== n.property || t[15] !== l
      ? ((e = Xr(l, n.property)), (t[14] = n.property), (t[15] = l), (t[16] = e))
      : (e = t[16]);
    let r;
    return (
      t[17] !== n.property ||
      t[18] !== n.value ||
      t[19] !== i ||
      t[20] !== s ||
      t[21] !== c ||
      t[22] !== d ||
      t[23] !== e
        ? ((r = (0, X.jsx)(nr, {
            ariaLabel: e,
            isEdited: i,
            placeholderValue: d,
            property: n.property,
            value: n.value,
            onScrubActiveChange: s,
            onValueChange: c,
          })),
          (t[17] = n.property),
          (t[18] = n.value),
          (t[19] = i),
          (t[20] = s),
          (t[21] = c),
          (t[22] = d),
          (t[23] = e),
          (t[24] = r))
        : (r = t[24]),
      r
    );
  }
  if (Wr(n)) {
    let e;
    t[25] !== n.property || t[26] !== l
      ? ((e = Xr(l, n.property)), (t[25] = n.property), (t[26] = l), (t[27] = e))
      : (e = t[27]);
    let r;
    return (
      t[28] !== n.property ||
      t[29] !== n.value ||
      t[30] !== i ||
      t[31] !== s ||
      t[32] !== c ||
      t[33] !== d ||
      t[34] !== e
        ? ((r = (0, X.jsx)(rr, {
            ariaLabel: e,
            isEdited: i,
            placeholderValue: d,
            property: n.property,
            value: n.value,
            onScrubActiveChange: s,
            onValueChange: c,
          })),
          (t[28] = n.property),
          (t[29] = n.value),
          (t[30] = i),
          (t[31] = s),
          (t[32] = c),
          (t[33] = d),
          (t[34] = e),
          (t[35] = r))
        : (r = t[35]),
      r
    );
  }
  let f;
  t[36] !== n.property || t[37] !== l
    ? ((f = Xr(l, n.property)), (t[36] = n.property), (t[37] = l), (t[38] = f))
    : (f = t[38]);
  let p = n.property,
    m;
  t[39] !== n || t[40] !== l ? ((m = jn(l, n)), (t[39] = n), (t[40] = l), (t[41] = m)) : (m = t[41]);
  let h;
  return (
    t[42] !== n.property ||
    t[43] !== n.value ||
    t[44] !== r ||
    t[45] !== i ||
    t[46] !== o ||
    t[47] !== c ||
    t[48] !== d ||
    t[49] !== f ||
    t[50] !== m
      ? ((h = (0, X.jsx)(ir, {
          ariaLabel: f,
          portalContainer: r,
          property: p,
          suggestions: m,
          isEdited: i,
          placeholderValue: d,
          value: n.value,
          onOpenChange: o,
          onValueChange: c,
        })),
        (t[42] = n.property),
        (t[43] = n.value),
        (t[44] = r),
        (t[45] = i),
        (t[46] = o),
        (t[47] = c),
        (t[48] = d),
        (t[49] = f),
        (t[50] = m),
        (t[51] = h))
      : (h = t[51]),
    h
  );
}
function nr(e) {
  let t = (0, J.c)(15),
    {
      ariaLabel: n,
      isEdited: r,
      placeholderValue: i,
      property: a,
      value: o,
      onScrubActiveChange: s,
      onValueChange: c,
    } = e,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = L(ei, ri, `flex min-h-7 min-w-0 items-center px-3`)), (t[0] = l))
    : (l = t[0]);
  let u = !r && `text-tertiary`,
    d;
  t[1] === u
    ? (d = t[2])
    : ((d = L(ti, ii, `h-7 w-full truncate text-start text-xs`, u)), (t[1] = u), (t[2] = d));
  let f;
  t[3] !== i || t[4] !== o ? ((f = qr(o, i)), (t[3] = i), (t[4] = o), (t[5] = f)) : (f = t[5]);
  let p;
  return (
    t[6] !== n ||
    t[7] !== s ||
    t[8] !== c ||
    t[9] !== i ||
    t[10] !== a ||
    t[11] !== d ||
    t[12] !== f ||
    t[13] !== o
      ? ((p = (0, X.jsx)(`span`, {
          className: l,
          children: (0, X.jsx)(sr, {
            ariaLabel: n,
            className: d,
            inputMode: `decimal`,
            max: `1`,
            min: `0`,
            property: a,
            step: `0.01`,
            title: o,
            type: `number`,
            placeholder: i,
            value: o,
            scrubMax: 1,
            scrubMin: 0,
            scrubStep: 0.01,
            scrubValue: f,
            formatScrubValue: Vr,
            onScrubActiveChange: s,
            onValueChange: c,
          }),
        })),
        (t[6] = n),
        (t[7] = s),
        (t[8] = c),
        (t[9] = i),
        (t[10] = a),
        (t[11] = d),
        (t[12] = f),
        (t[13] = o),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function rr(e) {
  let t = (0, J.c)(27),
    {
      ariaLabel: n,
      isEdited: r,
      placeholderValue: i,
      property: a,
      value: o,
      onScrubActiveChange: s,
      onValueChange: c,
    } = e,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = L(ei, ri, `flex min-h-7 min-w-0 items-center gap-1 px-3`)), (t[0] = l))
    : (l = t[0]);
  let u = !r && `text-tertiary`,
    f;
  t[1] === u
    ? (f = t[2])
    : ((f = L(ti, ii, `h-7 w-full truncate text-start text-xs`, u)), (t[1] = u), (t[2] = f));
  let p;
  t[3] === o ? (p = t[4]) : ((p = Br(o) ?? ``), (t[3] = o), (t[4] = p));
  let m;
  t[5] !== i || t[6] !== a || t[7] !== o
    ? ((m = Br(i ?? ``) ?? Lr(a, i ?? o) ?? void 0), (t[5] = i), (t[6] = a), (t[7] = o), (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== i || t[10] !== o
    ? ((h = Ir(o) ?? Ir(i ?? ``) ?? 0), (t[9] = i), (t[10] = o), (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === c
    ? (g = t[13])
    : ((g = (e) => {
        c(e.length === 0 ? `` : `${e}px`);
      }),
      (t[12] = c),
      (t[13] = g));
  let _;
  t[14] !== n ||
  t[15] !== s ||
  t[16] !== a ||
  t[17] !== f ||
  t[18] !== p ||
  t[19] !== m ||
  t[20] !== h ||
  t[21] !== g ||
  t[22] !== o
    ? ((_ = (0, X.jsx)(sr, {
        ariaLabel: n,
        className: f,
        inputMode: `decimal`,
        property: a,
        step: `any`,
        title: o,
        type: `number`,
        value: p,
        placeholder: m,
        scrubStep: 1,
        scrubValue: h,
        formatScrubValue: Vr,
        onScrubActiveChange: s,
        onValueChange: g,
      })),
      (t[14] = n),
      (t[15] = s),
      (t[16] = a),
      (t[17] = f),
      (t[18] = p),
      (t[19] = m),
      (t[20] = h),
      (t[21] = g),
      (t[22] = o),
      (t[23] = _))
    : (_ = t[23]);
  let v;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(`span`, {
        className: `shrink-0 font-mono text-xs text-tertiary`,
        children: (0, X.jsx)(d, {
          id: `browserSidebarDesignEditor.pixelUnit`,
          defaultMessage: `px`,
          description: `Pixel unit label shown beside numeric design edit fields`,
        }),
      })),
      (t[24] = v))
    : (v = t[24]);
  let y;
  return (
    t[25] === _
      ? (y = t[26])
      : ((y = (0, X.jsxs)(`span`, { className: l, children: [_, v] })), (t[25] = _), (t[26] = y)),
    y
  );
}
function ir(e) {
  let t = (0, J.c)(72),
    {
      ariaLabel: n,
      isEdited: r,
      placeholderValue: i,
      portalContainer: o,
      property: s,
      suggestions: c,
      value: l,
      onOpenChange: u,
      onValueChange: d,
    } = e,
    f;
  if (t[0] !== c || t[1] !== l) {
    let e;
    (t[3] === l ? (e = t[4]) : ((e = (e) => e.value === l), (t[3] = l), (t[4] = e)),
      (f = c.find(e)),
      (t[0] = c),
      (t[1] = l),
      (t[2] = f));
  } else f = t[2];
  let p = f;
  if (s === `font-family`) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = L(ei, ni, `flex min-h-7 min-w-0 items-center overflow-hidden`)), (t[5] = e))
      : (e = t[5]);
    let s = !r && `text-tertiary`,
      f;
    t[6] === s
      ? (f = t[7])
      : ((f = L(ti, `h-7 min-w-0 flex-1 truncate px-3 text-start text-xs`, s)), (t[6] = s), (t[7] = f));
    let p;
    t[8] === d
      ? (p = t[9])
      : ((p = (e) => {
          d(e.target.value);
        }),
        (t[8] = d),
        (t[9] = p));
    let m;
    t[10] !== n || t[11] !== i || t[12] !== f || t[13] !== p || t[14] !== l
      ? ((m = (0, X.jsx)(`input`, {
          "aria-label": n,
          className: f,
          dir: `ltr`,
          value: l,
          placeholder: i,
          title: l,
          onChange: p,
        })),
        (t[10] = n),
        (t[11] = i),
        (t[12] = f),
        (t[13] = p),
        (t[14] = l),
        (t[15] = m))
      : (m = t[15]);
    let h;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, X.jsx)(U, { className: `icon-2xs rotate-90` })), (t[16] = h))
      : (h = t[16]);
    let g;
    t[17] === n
      ? (g = t[18])
      : ((g = (0, X.jsx)(`button`, {
          "aria-label": n,
          className: `flex h-7 w-7 shrink-0 cursor-interaction items-center justify-center border-l border-subtle text-tertiary hover:bg-primary-ghost-hover`,
          "data-browser-sidebar-design-no-drag": !0,
          type: `button`,
          children: h,
        })),
        (t[17] = n),
        (t[18] = g));
    let _;
    if (t[19] !== d || t[20] !== c || t[21] !== l) {
      let e;
      (t[23] !== d || t[24] !== l
        ? ((e = (e) =>
            (0, X.jsx)(
              D.Item,
              {
                rightIconAsset: e.value === l ? Me : void 0,
                onSelect: () => {
                  d(e.value);
                },
                children: e.label ?? e.value,
              },
              `${e.label ?? e.value}-${e.value}`,
            )),
          (t[23] = d),
          (t[24] = l),
          (t[25] = e))
        : (e = t[25]),
        (_ = c.map(e)),
        (t[19] = d),
        (t[20] = c),
        (t[21] = l),
        (t[22] = _));
    } else _ = t[22];
    let v;
    t[26] === _
      ? (v = t[27])
      : ((v = (0, X.jsx)(D.Section, {
          className: `flex max-h-[220px] flex-col overflow-y-auto`,
          children: _,
        })),
        (t[26] = _),
        (t[27] = v));
    let y;
    t[28] !== u || t[29] !== o || t[30] !== v || t[31] !== g
      ? ((y = (0, X.jsx)(a, {
          align: `end`,
          contentWidth: `sm`,
          portalContainer: o,
          onOpenChange: u,
          triggerButton: g,
          children: v,
        })),
        (t[28] = u),
        (t[29] = o),
        (t[30] = v),
        (t[31] = g),
        (t[32] = y))
      : (y = t[32]);
    let b;
    return (
      t[33] !== y || t[34] !== m
        ? ((b = (0, X.jsxs)(`span`, { className: e, children: [m, y] })),
          (t[33] = y),
          (t[34] = m),
          (t[35] = b))
        : (b = t[35]),
      b
    );
  }
  if (c.length === 0) {
    let e;
    t[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = L(ei, `flex min-h-7 w-full min-w-0 items-center px-3`)), (t[36] = e))
      : (e = t[36]);
    let a = !r && `text-tertiary`,
      o;
    t[37] === a
      ? (o = t[38])
      : ((o = L(ti, `h-7 w-full truncate text-start text-xs`, a)), (t[37] = a), (t[38] = o));
    let s;
    t[39] === d
      ? (s = t[40])
      : ((s = (e) => {
          d(e.target.value);
        }),
        (t[39] = d),
        (t[40] = s));
    let c;
    return (
      t[41] !== n || t[42] !== i || t[43] !== o || t[44] !== s || t[45] !== l
        ? ((c = (0, X.jsx)(`span`, {
            className: e,
            children: (0, X.jsx)(`input`, {
              "aria-label": n,
              className: o,
              dir: `ltr`,
              value: l,
              placeholder: i,
              title: l,
              onChange: s,
            }),
          })),
          (t[41] = n),
          (t[42] = i),
          (t[43] = o),
          (t[44] = s),
          (t[45] = l),
          (t[46] = c))
        : (c = t[46]),
      c
    );
  }
  let m;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = L(
        ei,
        ni,
        `flex min-h-7 min-w-0 cursor-interaction items-center gap-2 overflow-hidden px-3 text-start`,
      )),
      (t[47] = m))
    : (m = t[47]);
  let h = p?.label ?? (l.length === 0 ? i : l),
    g = r ? `text-default` : `text-tertiary`,
    _;
  t[48] === g
    ? (_ = t[49])
    : ((_ = L(`min-w-0 flex-1 truncate font-mono text-xs`, g)), (t[48] = g), (t[49] = _));
  let v = p?.label ?? (l || i),
    y;
  t[50] !== _ || t[51] !== v
    ? ((y = (0, X.jsx)(`span`, { className: _, children: v })), (t[50] = _), (t[51] = v), (t[52] = y))
    : (y = t[52]);
  let b;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(U, { className: `icon-2xs shrink-0 rotate-90 text-tertiary` })), (t[53] = b))
    : (b = t[53]);
  let x;
  t[54] !== n || t[55] !== h || t[56] !== y
    ? ((x = (0, X.jsxs)(`button`, {
        "aria-label": n,
        className: m,
        title: h,
        type: `button`,
        children: [y, b],
      })),
      (t[54] = n),
      (t[55] = h),
      (t[56] = y),
      (t[57] = x))
    : (x = t[57]);
  let S;
  if (t[58] !== d || t[59] !== c || t[60] !== l) {
    let e;
    (t[62] !== d || t[63] !== l
      ? ((e = (e) =>
          (0, X.jsx)(
            D.Item,
            {
              rightIconAsset: e.value === l ? Me : void 0,
              onSelect: () => {
                d(e.value);
              },
              children: e.label ?? e.value,
            },
            `${e.label ?? e.value}-${e.value}`,
          )),
        (t[62] = d),
        (t[63] = l),
        (t[64] = e))
      : (e = t[64]),
      (S = c.map(e)),
      (t[58] = d),
      (t[59] = c),
      (t[60] = l),
      (t[61] = S));
  } else S = t[61];
  let C;
  t[65] === S
    ? (C = t[66])
    : ((C = (0, X.jsx)(D.Section, { className: `flex max-h-[220px] flex-col overflow-y-auto`, children: S })),
      (t[65] = S),
      (t[66] = C));
  let w;
  return (
    t[67] !== u || t[68] !== o || t[69] !== C || t[70] !== x
      ? ((w = (0, X.jsx)(a, {
          align: `end`,
          contentWidth: `sm`,
          portalContainer: o,
          onOpenChange: u,
          triggerButton: x,
          children: C,
        })),
        (t[67] = u),
        (t[68] = o),
        (t[69] = C),
        (t[70] = x),
        (t[71] = w))
      : (w = t[71]),
    w
  );
}
function ar(e) {
  let t = (0, J.c)(9),
    { declarations: n, property: r, onScrubActiveChange: i, onValueChange: a } = e,
    o = k(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = L(ei, `-ms-6 grid min-h-7 w-[calc(100%+1.5rem)] grid-cols-4 overflow-hidden`)), (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== n || t[2] !== o || t[3] !== i || t[4] !== a || t[5] !== r
    ? ((c = Qr.map((e, t) => {
        let s = Or(n, r, e);
        if (s == null)
          return (0, X.jsx)(
            `span`,
            {
              className: L(
                `flex min-h-7 items-center justify-center font-mono text-xs text-tertiary`,
                t > 0 && `border-l border-subtle`,
              ),
            },
            `${r}-${e}`,
          );
        let c = Br(s.value),
          l = s.value.length === 0 || c != null;
        return (0, X.jsx)(
          sr,
          {
            ariaLabel: Xr(o, s.property),
            className: L(
              ti,
              l && ii,
              `min-h-7 w-full px-1 text-center text-xs`,
              t > 0 && `border-l border-subtle`,
              s.value === s.previousValue && `text-tertiary`,
            ),
            inputMode: l ? `decimal` : void 0,
            property: s.property,
            formatScrubValue: Vr,
            scrubStep: l ? 1 : void 0,
            scrubValue: l ? (Ir(s.value) ?? Ir(s.placeholderValue ?? ``) ?? 0) : null,
            step: l ? `any` : void 0,
            title: s.value,
            type: l ? `number` : void 0,
            placeholder:
              Br(s.placeholderValue ?? ``) ?? Lr(s.property, s.placeholderValue ?? s.value) ?? void 0,
            value: l ? (c ?? ``) : s.value,
            onScrubActiveChange: i,
            onValueChange: (e) => {
              a(s.property, l && e.length > 0 ? `${e}px` : e);
            },
          },
          s.property,
        );
      })),
      (t[1] = n),
      (t[2] = o),
      (t[3] = i),
      (t[4] = a),
      (t[5] = r),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] === c
      ? (l = t[8])
      : ((l = (0, X.jsx)(`span`, {
          className: s,
          "data-browser-sidebar-design-scrub-value-cell": !0,
          children: c,
        })),
        (t[7] = c),
        (t[8] = l)),
    l
  );
}
function or(e) {
  let t = (0, J.c)(7),
    { columnGap: n, rowGap: r, onScrubActiveChange: i, onValueChange: a } = e,
    o = k(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = L(ei, `grid min-h-7 w-full grid-cols-2 overflow-hidden`)), (t[0] = s))
    : (s = t[0]);
  let c;
  return (
    t[1] !== n || t[2] !== o || t[3] !== i || t[4] !== a || t[5] !== r
      ? ((c = (0, X.jsx)(`span`, {
          className: s,
          "data-browser-sidebar-design-scrub-value-cell": !0,
          children: [n, r].map((e, t) => {
            let n = Br(e.value),
              r = e.value.length === 0 || n != null || Lr(e.property, e.value) != null;
            return (0, X.jsx)(
              sr,
              {
                ariaLabel: Xr(o, e.property),
                className: L(
                  ti,
                  r && ii,
                  `min-h-7 w-full px-1 text-center text-xs`,
                  t > 0 && `border-l border-subtle`,
                  e.value === e.previousValue && `text-tertiary`,
                ),
                formatScrubValue: Vr,
                inputMode: r ? `decimal` : void 0,
                property: e.property,
                scrubStep: r ? 1 : void 0,
                scrubValue: r
                  ? (Ir(e.value) ??
                    Ir(e.placeholderValue ?? ``) ??
                    Number(Lr(e.property, e.placeholderValue ?? e.value) ?? `0`))
                  : null,
                step: r ? `any` : void 0,
                title: e.value,
                type: r ? `number` : void 0,
                placeholder:
                  Br(e.placeholderValue ?? ``) ?? Lr(e.property, e.placeholderValue ?? e.value) ?? void 0,
                value: r ? (n ?? ``) : e.value,
                onScrubActiveChange: i,
                onValueChange: (t) => {
                  a(e.property, r && t.length > 0 ? `${t}px` : t);
                },
              },
              e.property,
            );
          }),
        })),
        (t[1] = n),
        (t[2] = o),
        (t[3] = i),
        (t[4] = a),
        (t[5] = r),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function sr(e) {
  let t = (0, J.c)(42),
    {
      ariaLabel: n,
      className: r,
      formatScrubValue: i,
      inputMode: a,
      max: o,
      min: s,
      property: c,
      scrubMax: l,
      scrubMin: u,
      scrubStep: d,
      scrubValue: f,
      step: p,
      title: m,
      type: h,
      placeholder: g,
      value: _,
      onScrubActiveChange: v,
      onValueChange: y,
    } = e,
    b = (0, Y.useRef)(null),
    x = (0, Y.useRef)(!1),
    S;
  t[0] !== d || t[1] !== f || t[2] !== h
    ? ((S = (e) => {
        if (
          h !== `number` ||
          d == null ||
          f == null ||
          !Number.isFinite(f) ||
          e.button !== 0 ||
          !e.isPrimary ||
          e.pointerType === `touch`
        )
          return;
        let { body: t, documentElement: n } = e.currentTarget.ownerDocument,
          r = t.style,
          i = n.style,
          a = e.currentTarget.closest(`[data-browser-sidebar-design-scroll-container]`),
          o = e.currentTarget.style.cursor,
          s = r.cursor,
          c = r.overscrollBehavior,
          l = i.overscrollBehavior,
          u = a?.style.overflowY ?? ``,
          p = a?.style.overscrollBehavior ?? ``;
        (e.preventDefault(),
          e.currentTarget.focus(),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          (e.currentTarget.dataset.scrubbing = `true`),
          (e.currentTarget.style.cursor = ai),
          (r.cursor = ai),
          (r.overscrollBehavior = `none`),
          (i.overscrollBehavior = `none`),
          a != null && ((a.style.overflowY = `hidden`), (a.style.overscrollBehavior = `none`)),
          (b.current = {
            hasScrubbed: !1,
            lastValue: f,
            pointerId: e.pointerId,
            previousBodyCursor: s,
            previousBodyOverscrollBehavior: c,
            previousBodyUserSelect: r.userSelect,
            previousDocumentOverscrollBehavior: l,
            previousScrollContainerOverflowY: u,
            previousScrollContainerOverscrollBehavior: p,
            previousTargetCursor: o,
            scrollContainer: a,
            startClientY: e.clientY,
            startValue: f,
          }));
      }),
      (t[0] = d),
      (t[1] = f),
      (t[2] = h),
      (t[3] = S))
    : (S = t[3]);
  let C = S,
    w;
  t[4] !== i || t[5] !== v || t[6] !== y || t[7] !== c || t[8] !== l || t[9] !== u || t[10] !== d
    ? ((w = (e) => {
        let t = b.current;
        if (t == null || t.pointerId !== e.pointerId || d == null || i == null) return;
        let n = t.startClientY - e.clientY;
        if ((e.preventDefault(), !t.hasScrubbed && Math.abs(n) < si)) return;
        if (!t.hasScrubbed) {
          let n = e.currentTarget.ownerDocument.body.style;
          ((n.cursor = ai), (n.userSelect = `none`), (t.hasScrubbed = !0), v?.(c, e.currentTarget));
        }
        let r = Math.trunc(n / oi),
          a = Hr(t.startValue + r * d, u, l);
        if (a === t.lastValue) {
          e.preventDefault();
          return;
        }
        ((t.lastValue = a), e.preventDefault(), y(i(a)));
      }),
      (t[4] = i),
      (t[5] = v),
      (t[6] = y),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = w))
    : (w = t[11]);
  let T = w,
    E;
  t[12] === v
    ? (E = t[13])
    : ((E = (e) => {
        let t = b.current;
        if (t != null) {
          if (e != null) {
            let n = e.ownerDocument.body.style,
              r = e.ownerDocument.documentElement.style;
            ((n.cursor = t.previousBodyCursor),
              (n.overscrollBehavior = t.previousBodyOverscrollBehavior),
              (n.userSelect = t.previousBodyUserSelect),
              (r.overscrollBehavior = t.previousDocumentOverscrollBehavior),
              (e.style.cursor = t.previousTargetCursor),
              delete e.dataset.scrubbing);
          }
          (t.scrollContainer != null &&
            ((t.scrollContainer.style.overflowY = t.previousScrollContainerOverflowY),
            (t.scrollContainer.style.overscrollBehavior = t.previousScrollContainerOverscrollBehavior)),
            t.hasScrubbed && ((x.current = !0), v?.(null, e)),
            (b.current = null));
        }
      }),
      (t[12] = v),
      (t[13] = E));
  let D = E,
    O;
  t[14] === D
    ? (O = t[15])
    : ((O = (e) => {
        let t = b.current;
        t != null &&
          t.pointerId === e.pointerId &&
          (e.currentTarget.hasPointerCapture?.(e.pointerId) === !0 &&
            e.currentTarget.releasePointerCapture(e.pointerId),
          t.hasScrubbed && e.preventDefault(),
          D(e.currentTarget));
      }),
      (t[14] = D),
      (t[15] = O));
  let k = O,
    A;
  t[16] === D
    ? (A = t[17])
    : ((A = (e) => {
        D(e.currentTarget);
      }),
      (t[16] = D),
      (t[17] = A));
  let ee = A,
    j;
  t[18] === h
    ? (j = t[19])
    : ((j = (e) => {
        h === `number` &&
          e.currentTarget.ownerDocument.activeElement === e.currentTarget &&
          e.currentTarget.blur();
      }),
      (t[18] = h),
      (t[19] = j));
  let M = j,
    te;
  t[20] === r
    ? (te = t[21])
    : ((te = L(r, `touch-none cursor-text hover:cursor-ns-resize active:cursor-ns-resize`)),
      (t[20] = r),
      (t[21] = te));
  let N;
  t[22] === y
    ? (N = t[23])
    : ((N = (e) => {
        y(e.target.value);
      }),
      (t[22] = y),
      (t[23] = N));
  let P;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => {
        x.current && ((x.current = !1), e.preventDefault());
      }),
      (t[24] = P))
    : (P = t[24]);
  let ne;
  return (
    t[25] !== n ||
    t[26] !== ee ||
    t[27] !== C ||
    t[28] !== k ||
    t[29] !== T ||
    t[30] !== M ||
    t[31] !== a ||
    t[32] !== o ||
    t[33] !== s ||
    t[34] !== g ||
    t[35] !== p ||
    t[36] !== te ||
    t[37] !== N ||
    t[38] !== m ||
    t[39] !== h ||
    t[40] !== _
      ? ((ne = (0, X.jsx)(`input`, {
          "aria-label": n,
          className: te,
          dir: `ltr`,
          inputMode: a,
          max: o,
          min: s,
          step: p,
          title: m,
          type: h,
          placeholder: g,
          value: _,
          onChange: N,
          onClick: P,
          onLostPointerCapture: ee,
          onPointerCancel: k,
          onPointerDown: C,
          onPointerMove: T,
          onPointerUp: k,
          onWheel: M,
        })),
        (t[25] = n),
        (t[26] = ee),
        (t[27] = C),
        (t[28] = k),
        (t[29] = T),
        (t[30] = M),
        (t[31] = a),
        (t[32] = o),
        (t[33] = s),
        (t[34] = g),
        (t[35] = p),
        (t[36] = te),
        (t[37] = N),
        (t[38] = m),
        (t[39] = h),
        (t[40] = _),
        (t[41] = ne))
      : (ne = t[41]),
    ne
  );
}
function cr(e) {
  let t = (0, J.c)(26),
    { property: n, spacingAxisOnly: r } = e;
  if (r !== void 0 && r) {
    if (n === `margin-top` || n === `padding-top`) {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.topSpacingProperty`,
              defaultMessage: `Top`,
              description: `Compact property label for top margin or padding in the in-app browser design edit card`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    if (n === `margin-bottom` || n === `padding-bottom`) {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.bottomSpacingProperty`,
              defaultMessage: `Bottom`,
              description: `Compact property label for bottom margin or padding in the in-app browser design edit card`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    if (n === `margin-left` || n === `padding-left`) {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.leftSpacingProperty`,
              defaultMessage: `Left`,
              description: `Compact property label for left margin or padding in the in-app browser design edit card`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    if (n === `margin-right` || n === `padding-right`) {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.rightSpacingProperty`,
              defaultMessage: `Right`,
              description: `Compact property label for right margin or padding in the in-app browser design edit card`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
  switch (n) {
    case `color`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.textColorProperty`,
              defaultMessage: `Text color`,
              description: `Property label for text color in the in-app browser design edit card`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `background-color`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.backgroundProperty`,
              defaultMessage: `Background`,
              description: `Property label for background color in the in-app browser design edit card`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `font-family`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.fontProperty`,
              defaultMessage: `Font`,
              description: `Property label for font family in the in-app browser design edit card`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `font-size`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.fontSizeProperty`,
              defaultMessage: `Font size`,
              description: `Property label for font size in the in-app browser design edit card`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `font-weight`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.fontWeightProperty`,
              defaultMessage: `Font weight`,
              description: `Property label for font weight in the in-app browser design edit card`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `border-radius`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.borderRadiusProperty`,
              defaultMessage: `Border radius`,
              description: `Property label for border radius in the in-app browser design edit card`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `border-color`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.borderColorProperty`,
              defaultMessage: `Border color`,
              description: `Property label for border color in the in-app browser design edit card`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `border-width`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.borderWidthProperty`,
              defaultMessage: `Border width`,
              description: `Property label for border width in the in-app browser design edit card`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    case `width`: {
      let e;
      return (
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.widthProperty`,
              defaultMessage: `Width`,
              description: `Property label for width in the in-app browser design edit card`,
            })),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
    case `height`: {
      let e;
      return (
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.heightProperty`,
              defaultMessage: `Height`,
              description: `Property label for height in the in-app browser design edit card`,
            })),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    case `flex-direction`: {
      let e;
      return (
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.flexDirectionProperty`,
              defaultMessage: `Layout direction`,
              description: `Property label for flex direction in the in-app browser design edit card`,
            })),
            (t[14] = e))
          : (e = t[14]),
        e
      );
    }
    case `justify-content`: {
      let e;
      return (
        t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.justifyContentProperty`,
              defaultMessage: `Distribution`,
              description: `Property label for justify-content in the in-app browser design edit card`,
            })),
            (t[15] = e))
          : (e = t[15]),
        e
      );
    }
    case `align-items`: {
      let e;
      return (
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.alignItemsProperty`,
              defaultMessage: `Alignment`,
              description: `Property label for align-items in the in-app browser design edit card`,
            })),
            (t[16] = e))
          : (e = t[16]),
        e
      );
    }
    case `gap`: {
      let e;
      return (
        t[17] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.gapProperty`,
              defaultMessage: `Spacing`,
              description: `Property label for flex gap in the in-app browser design edit card`,
            })),
            (t[17] = e))
          : (e = t[17]),
        e
      );
    }
    case `row-gap`: {
      let e;
      return (
        t[18] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.rowGapProperty`,
              defaultMessage: `Vertical`,
              description: `Property label for row gap in the in-app browser design edit card`,
            })),
            (t[18] = e))
          : (e = t[18]),
        e
      );
    }
    case `column-gap`: {
      let e;
      return (
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.columnGapProperty`,
              defaultMessage: `Horizontal`,
              description: `Property label for column gap in the in-app browser design edit card`,
            })),
            (t[19] = e))
          : (e = t[19]),
        e
      );
    }
    case `padding`: {
      let e;
      return (
        t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.paddingProperty`,
              defaultMessage: `Padding`,
              description: `Property label for padding in the in-app browser design edit card`,
            })),
            (t[20] = e))
          : (e = t[20]),
        e
      );
    }
    case `margin`: {
      let e;
      return (
        t[21] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(d, {
              id: `browserSidebarDesignEditor.marginProperty`,
              defaultMessage: `Margin`,
              description: `Property label for margin in the in-app browser design edit card`,
            })),
            (t[21] = e))
          : (e = t[21]),
        e
      );
    }
    default: {
      let e;
      t[22] === n ? (e = t[23]) : ((e = Yr(n)), (t[22] = n), (t[23] = e));
      let r;
      return (
        t[24] === e ? (r = t[25]) : ((r = (0, X.jsx)(X.Fragment, { children: e })), (t[24] = e), (t[25] = r)),
        r
      );
    }
  }
}
function lr(e) {
  let t = (0, J.c)(23),
    {
      ariaLabel: n,
      isEdited: r,
      placeholderValue: i,
      portalContainer: a,
      value: o,
      onDragActiveChange: s,
      onEditingActiveChange: c,
      onValueChange: l,
    } = e,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = L(ei, ni, `flex min-h-7 min-w-0 items-center gap-2 px-2`)), (t[0] = u))
    : (u = t[0]);
  let d = o || i,
    f;
  t[1] === d ? (f = t[2]) : ((f = Jr(d)), (t[1] = d), (t[2] = f));
  let p;
  t[3] !== n || t[4] !== s || t[5] !== c || t[6] !== l || t[7] !== a || t[8] !== f
    ? ((p = (0, X.jsx)(Jt, {
        ariaLabel: n,
        portalContainer: a,
        value: f,
        onDragActiveChange: s,
        onEditingActiveChange: c,
        onValueChange: l,
      })),
      (t[3] = n),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = a),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m = !r && `text-tertiary`,
    h;
  t[10] === m
    ? (h = t[11])
    : ((h = L(ti, `h-7 w-full truncate text-start text-xs`, m)), (t[10] = m), (t[11] = h));
  let g;
  t[12] === l
    ? (g = t[13])
    : ((g = (e) => {
        l(e.target.value);
      }),
      (t[12] = l),
      (t[13] = g));
  let _;
  t[14] !== n || t[15] !== i || t[16] !== h || t[17] !== g || t[18] !== o
    ? ((_ = (0, X.jsx)(`input`, {
        "aria-label": n,
        className: h,
        dir: `ltr`,
        value: o,
        placeholder: i,
        title: o,
        onChange: g,
      })),
      (t[14] = n),
      (t[15] = i),
      (t[16] = h),
      (t[17] = g),
      (t[18] = o),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  return (
    t[20] !== p || t[21] !== _
      ? ((v = (0, X.jsxs)(`span`, { className: u, children: [p, _] })), (t[20] = p), (t[21] = _), (t[22] = v))
      : (v = t[22]),
    v
  );
}
function ur(e, t, n) {
  return { ...e, declarations: e.declarations.map((e) => (e.property === t ? { ...e, ...n } : e)) };
}
function dr(e, t) {
  return {
    ...e,
    declarations: e.declarations.map((e) => {
      let n = t.find((t) => t.property === e.property);
      return n == null ? e : { ...e, value: n.value };
    }),
  };
}
function fr(e, t, n) {
  let [r, i] = Pr(t, n),
    a = e.declarations.find((e) => e.property === r);
  return a == null
    ? e
    : dr(e, [
        { property: r, value: a.value },
        { property: i, value: a.value },
      ]);
}
function pr(e, t, n, r) {
  let i = Fr(t, n);
  return i == null
    ? ur(e, n, { value: r })
    : dr(e, [
        { property: n, value: r },
        { property: i, value: r },
      ]);
}
function mr(e, t, n) {
  let r = e.declarations.find((e) => e.property === t),
    i = t === `width` ? `height` : `width`,
    a = e.declarations.find((e) => e.property === i),
    o = r == null ? null : Ir(r.value),
    s = a == null ? null : Ir(a.value),
    c = Ir(n);
  return o == null || s == null || c == null || o === 0
    ? ur(e, t, { value: n })
    : dr(e, [
        { property: t, value: n },
        { property: i, value: `${Vr((s / o) * c)}px` },
      ]);
}
function hr(e, t) {
  let n = yr(e);
  return n == null ? e : { ...e, text: { previousValue: n.previousValue, value: t } };
}
function gr(e) {
  let t = yr(e);
  return t == null ? e : hr(e, t.previousValue);
}
function _r(e, t) {
  let n = e.declarations.find((e) => e.property === t);
  return n == null ? e : ur(e, t, { value: n.previousValue });
}
function vr(e, t, n) {
  let r = e.declarations.find((e) => e.property === n),
    i = Fr(t, n);
  return r == null || i == null
    ? _r(e, n)
    : dr(e, [
        { property: n, value: r.previousValue },
        { property: i, value: r.previousValue },
      ]);
}
function yr(e) {
  return e.text ?? null;
}
function br(e) {
  let t = new Map(e.map((e) => [e.property, e])),
    n = [],
    r = new Set();
  for (let i of e) {
    if (r.has(i.property)) continue;
    if (Kr(i.property)) {
      let e = t.get(`row-gap`),
        i = t.get(`column-gap`);
      if (e != null && i != null) {
        (r.add(`gap`),
          r.add(e.property),
          r.add(i.property),
          n.push({ kind: `flex-spacing`, columnGap: i, rowGap: e }));
        continue;
      }
    }
    let e = Dr(i.property);
    if (e != null) {
      let i = [];
      for (let n of Zr) {
        let a = t.get(`${e}-${n}`);
        a != null && (i.push(a), r.add(a.property));
      }
      n.push({ kind: `spacing`, declarations: i, property: e });
      continue;
    }
    if (i.property === `width` || i.property === `height`) {
      let e = t.get(`width`),
        i = t.get(`height`);
      if (e != null && i != null) {
        (r.add(e.property), r.add(i.property), n.push({ kind: `dimensions`, height: i, width: e }));
        continue;
      }
    }
    (r.add(i.property), n.push({ kind: `declaration`, declaration: i }));
  }
  return n;
}
function xr(e) {
  switch (e.kind) {
    case `declaration`:
      return e.declaration.property;
    case `dimensions`:
      return `dimensions`;
    case `spacing`:
      return e.property;
    case `flex-spacing`:
      return `flex-spacing`;
  }
}
function Sr(e) {
  return (
    e?.kind === `flex-spacing` ||
    (e?.kind === `declaration` &&
      (e.declaration.property === `align-items` ||
        e.declaration.property === `flex-direction` ||
        e.declaration.property === `justify-content`))
  );
}
function Cr(e) {
  let t = [];
  for (let n of [`color`, `font`, `border`, `layout`, `other`]) {
    let r = e.filter((e) => wr(e) === n).sort(Tr);
    r.length > 0 && t.push({ id: n, sections: r });
  }
  return t;
}
function wr(e) {
  return e.kind === `dimensions` || e.kind === `flex-spacing` || e.kind === `spacing`
    ? `layout`
    : e.declaration.property === `color` ||
        e.declaration.property === `background-color` ||
        e.declaration.property === `opacity`
      ? `color`
      : e.declaration.property.startsWith(`font-`)
        ? `font`
        : e.declaration.property.startsWith(`border-`)
          ? `border`
          : e.declaration.property === `align-items` ||
              e.declaration.property === `flex-direction` ||
              e.declaration.property === `justify-content`
            ? `layout`
            : `other`;
}
function Tr(e, t) {
  return Er(e) - Er(t);
}
function Er(e) {
  if (e.kind === `dimensions`) return 0;
  if (e.kind === `spacing`) return e.property === `padding` ? 1 : 2;
  if (e.kind === `flex-spacing`) return $r.indexOf(`gap`);
  let t = $r.indexOf(e.declaration.property);
  return t < 0 ? $r.length : t;
}
function Dr(e) {
  return e.startsWith(`padding-`) ? `padding` : e.startsWith(`margin-`) ? `margin` : null;
}
function Or(e, t, n) {
  return e.find((e) => e.property === `${t}-${n}`) ?? null;
}
function kr(e, t) {
  return `${e}-${t}`;
}
function Ar(e) {
  return {
    dimensions: !1,
    "margin-horizontal": jr(e.declarations, `margin`, `horizontal`),
    "margin-vertical": jr(e.declarations, `margin`, `vertical`),
    "padding-horizontal": jr(e.declarations, `padding`, `horizontal`),
    "padding-vertical": jr(e.declarations, `padding`, `vertical`),
  };
}
function jr(e, t, n) {
  let [r, i] = Pr(t, n),
    a = e.find((e) => e.property === r),
    o = e.find((e) => e.property === i);
  return a != null && o != null && a.value.trim() !== `0` && Ir(a.value) !== 0 && Mr(a.value, o.value);
}
function Mr(e, t) {
  if (e.trim() === t.trim()) return !0;
  let n = Ir(e),
    r = Ir(t);
  return n != null && r != null && n === r;
}
function Nr(e, t, n) {
  return n === `${t}-top` || n === `${t}-bottom`
    ? e[kr(t, `vertical`)]
    : n === `${t}-left` || n === `${t}-right`
      ? e[kr(t, `horizontal`)]
      : !1;
}
function Pr(e, t) {
  return t === `vertical` ? [`${e}-top`, `${e}-bottom`] : [`${e}-left`, `${e}-right`];
}
function Fr(e, t) {
  return t === `${e}-top`
    ? `${e}-bottom`
    : t === `${e}-bottom`
      ? `${e}-top`
      : t === `${e}-left`
        ? `${e}-right`
        : t === `${e}-right`
          ? `${e}-left`
          : null;
}
function Ir(e) {
  let t = Br(e);
  return t == null ? null : Number(t);
}
function Lr(e, t) {
  return Kr(e) && t.trim() === `normal` ? `0` : null;
}
function Rr(e) {
  return (
    e.placeholderValue ?? (e.value.length === 0 && e.previousValue.length > 0 ? e.previousValue : void 0)
  );
}
function zr(e) {
  if (e.trim().length === 0) return 0;
  let t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Br(e) {
  return e.trim().match(/^(-?\d+(?:\.\d+)?)px$/)?.[1] ?? null;
}
function Vr(e) {
  return String(Number.isInteger(e) ? e : Number(e.toFixed(2)));
}
function Hr(e, t, n) {
  return t != null && e < t ? t : n != null && e > n ? n : e;
}
function Ur(e) {
  return e === `color` || e.endsWith(`-color`);
}
function Wr(e) {
  return (
    Gr(e.property) &&
    (e.value.length === 0 ||
      Br(e.placeholderValue ?? ``) != null ||
      Br(e.value) != null ||
      Lr(e.property, e.value) != null ||
      Lr(e.property, e.placeholderValue ?? ``) != null)
  );
}
function Gr(e) {
  return (
    e === `font-size` ||
    e === `border-radius` ||
    e === `border-width` ||
    e === `column-gap` ||
    e === `gap` ||
    e === `height` ||
    e === `row-gap` ||
    e === `width` ||
    e.startsWith(`margin-`) ||
    e.startsWith(`padding-`)
  );
}
function Kr(e) {
  return e === `column-gap` || e === `gap` || e === `row-gap`;
}
function qr(e, t) {
  return e.trim().length === 0 && t != null ? zr(t) : zr(e);
}
function Jr(e) {
  let t = e?.trim() ?? ``,
    n = t.match(/^#([\da-f]{3}|[\da-f]{6})$/i);
  if (n != null) {
    let e = n[1];
    return e.length === 3
      ? `#${e
          .split(``)
          .map((e) => `${e}${e}`)
          .join(``)}`
      : `#${e}`;
  }
  let r = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);
  return r == null
    ? `#000000`
    : `#${r
        .slice(1, 4)
        .map((e) => Math.min(255, Number(e)).toString(16).padStart(2, `0`))
        .join(``)}`;
}
function Yr(e) {
  let t = e.replaceAll(`-`, ` `);
  return `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
}
function Xr(e, t) {
  switch (t) {
    case `color`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.textColorProperty`,
        defaultMessage: `Text color`,
        description: `Property label for text color in the in-app browser design edit card`,
      });
    case `background-color`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.backgroundProperty`,
        defaultMessage: `Background`,
        description: `Property label for background color in the in-app browser design edit card`,
      });
    case `font-family`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.fontProperty`,
        defaultMessage: `Font`,
        description: `Property label for font family in the in-app browser design edit card`,
      });
    case `font-size`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.fontSizeProperty`,
        defaultMessage: `Font size`,
        description: `Property label for font size in the in-app browser design edit card`,
      });
    case `font-weight`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.fontWeightProperty`,
        defaultMessage: `Font weight`,
        description: `Property label for font weight in the in-app browser design edit card`,
      });
    case `border-radius`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.borderRadiusProperty`,
        defaultMessage: `Border radius`,
        description: `Property label for border radius in the in-app browser design edit card`,
      });
    case `border-color`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.borderColorProperty`,
        defaultMessage: `Border color`,
        description: `Property label for border color in the in-app browser design edit card`,
      });
    case `border-width`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.borderWidthProperty`,
        defaultMessage: `Border width`,
        description: `Property label for border width in the in-app browser design edit card`,
      });
    case `width`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.widthProperty`,
        defaultMessage: `Width`,
        description: `Property label for width in the in-app browser design edit card`,
      });
    case `height`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.heightProperty`,
        defaultMessage: `Height`,
        description: `Property label for height in the in-app browser design edit card`,
      });
    case `flex-direction`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.flexDirectionProperty`,
        defaultMessage: `Layout direction`,
        description: `Property label for flex direction in the in-app browser design edit card`,
      });
    case `justify-content`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.justifyContentProperty`,
        defaultMessage: `Distribution`,
        description: `Property label for justify-content in the in-app browser design edit card`,
      });
    case `align-items`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.alignItemsProperty`,
        defaultMessage: `Alignment`,
        description: `Property label for align-items in the in-app browser design edit card`,
      });
    case `gap`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.gapProperty`,
        defaultMessage: `Spacing`,
        description: `Property label for flex gap in the in-app browser design edit card`,
      });
    case `row-gap`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.rowGapProperty`,
        defaultMessage: `Vertical`,
        description: `Property label for row gap in the in-app browser design edit card`,
      });
    case `column-gap`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.columnGapProperty`,
        defaultMessage: `Horizontal`,
        description: `Property label for column gap in the in-app browser design edit card`,
      });
    case `padding`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.paddingProperty`,
        defaultMessage: `Padding`,
        description: `Property label for padding in the in-app browser design edit card`,
      });
    case `margin`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.marginProperty`,
        defaultMessage: `Margin`,
        description: `Property label for margin in the in-app browser design edit card`,
      });
    default:
      return Yr(t);
  }
}
var J, Y, X, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si;
function ci() {
  return (ci = e(() => {
    ((J = je()),
      w(),
      h(),
      ie(),
      g(),
      P(),
      C(),
      Tt(),
      (Y = Fe()),
      B(),
      In(),
      Yt(),
      H(),
      i(),
      x(),
      E(),
      ct(),
      F(),
      V(),
      $e(),
      nt(),
      Qt(),
      Xt(),
      tn(),
      zn(),
      (X = G()),
      (Zr = [`top`, `bottom`, `left`, `right`]),
      (Qr = [`top`, `right`, `bottom`, `left`]),
      ($r = [
        `color`,
        `background-color`,
        `opacity`,
        `font-family`,
        `font-size`,
        `font-weight`,
        `border-radius`,
        `border-color`,
        `border-width`,
        `flex-direction`,
        `justify-content`,
        `align-items`,
        `gap`,
        `column-gap`,
        `row-gap`,
      ]),
      (ei = `min-w-0 rounded-lg border border-primary-outline bg-primary-soft text-default shadow-sm outline-none transition-colors focus-within:border-ring focus-within:ring-1 focus-within:ring-ring`),
      (ti = `min-w-0 appearance-none border-0 bg-transparent font-mono text-default outline-none ring-0 placeholder:text-tertiary focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0`),
      (ni = `w-48 max-w-full`),
      (ri = `w-[112px]`),
      (ii = Rn.numericInput),
      (ai = `url("${j(`<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 1 11 4H9v4H7V4H5l3-3Z' fill='#475569'/><path d='M8 15 5 12h2V8h2v4h2l-3 3Z' fill='#475569'/></svg>`)}") 8 8, ns-resize`),
      (oi = 4),
      (si = oi));
  }))();
}
function li(e) {
  return [e.anchor, ...(e.additionalAnchors ?? [])].flatMap((e) => {
    if (e.kind !== `element` && e.kind !== `virtual`) return [];
    let t = be(e.elementName),
      n = Ce(e.elementMetadata);
    return t == null && (n == null || Object.keys(n).length === 0)
      ? []
      : [{ elementName: t, elementMetadata: n }];
  });
}
function ui() {
  return (ui = e(() => {
    Te();
  }))();
}
function di(e, t, n) {
  let r = e.parentElement;
  if (r == null) return;
  let i = () => {
      e.isConnected &&
        r.clientHeight !== 0 &&
        r.clientWidth !== 0 &&
        ((n == null
          ? r.scrollHeight - r.clientHeight - r.scrollTop
          : n.getBoundingClientRect().bottom - r.getBoundingClientRect().bottom) <= 1
          ? (o(), t(`complete`))
          : t(`required`));
    },
    a = new (e.ownerDocument.defaultView?.ResizeObserver ?? ResizeObserver)(i),
    o = () => {
      (a.disconnect(), r.removeEventListener(`scroll`, i));
    };
  return (r.addEventListener(`scroll`, i, { passive: !0 }), a.observe(r), a.observe(n ?? e), i(), o);
}
var fi, pi, mi;
function hi() {
  return (hi = e(() => {
    ((fi = 200),
      (pi = 8),
      (mi = class {
        activeSwipe = null;
        begin(e, t) {
          let n = Math.abs(e.deltaY);
          this.activeSwipe = {
            firstEventTimestamp: e.timeStamp,
            hasDecelerated: !1,
            idleMs: t,
            lastDeltaY: n,
            lastEventTimestamp: e.timeStamp,
            peakDeltaY: n,
          };
        }
        isContinuation(e) {
          let t = this.activeSwipe;
          if (t == null) return !1;
          let n = Math.abs(e.deltaY),
            r = e.timeStamp - t.firstEventTimestamp >= fi && t.hasDecelerated && n > t.lastDeltaY + pi;
          return e.timeStamp - t.lastEventTimestamp < t.idleMs && !r
            ? ((t.peakDeltaY = Math.max(t.peakDeltaY, n)),
              (t.hasDecelerated ||= n * 2 <= t.peakDeltaY),
              (t.lastDeltaY = n),
              (t.lastEventTimestamp = e.timeStamp),
              !0)
            : ((this.activeSwipe = null), !1);
        }
      }));
  }))();
}
function gi(e) {
  let t = (0, Si.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ metadataGroups: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = JSON.stringify(n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== n || t[6] !== r || t[7] !== i
      ? ((a = (0, Z.jsx)(_i, { metadataGroups: n, ...r }, i)), (t[5] = n), (t[6] = r), (t[7] = i), (t[8] = a))
      : (a = t[8]),
    a
  );
}
function _i(e) {
  let t = (0, Si.c)(91),
    {
      isSurfaceOverflowing: r,
      isVisible: i,
      maxHeight: a,
      metadataGroups: o,
      onExpandedSizeChange: s,
      onScrollReviewStateChange: c,
      onToggle: l,
      scrollReviewState: u,
      tooltipPortalContainer: f,
      viewportRef: p,
      windowWidth: m,
    } = e,
    h = k(),
    g = (0, Ci.useId)(),
    _ = te(),
    y = (0, Ci.useRef)(null),
    b = (0, Ci.useRef)(null),
    x = (0, Ci.useRef)(null),
    S = (0, Ci.useRef)(!1),
    C = a == null ? void 0 : Math.min(Di, Math.max(Ei, a)),
    [w, T] = (0, Ci.useState)(),
    [E, D] = (0, Ci.useState)(!1),
    O;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { isCollapsed: !1, toggleSource: null }), (t[0] = O))
    : (O = t[0]);
  let [A, ee] = (0, Ci.useState)(O),
    { isCollapsed: j, toggleSource: M } = A,
    N = o.reduce(vi, 0) >= 3,
    P = N && (j || (u === `complete` && !r && !E)),
    ne;
  t[1] !== j || t[2] !== s || t[3] !== C || t[4] !== p
    ? ((ne = () => {
        if (j) return;
        let e = y.current,
          t = b.current,
          n = p.current;
        if (e == null || t == null || n == null) return;
        let r,
          i = () => {
            D(C != null && n.scrollHeight > n.clientHeight + 1);
            let i = C == null ? t.offsetHeight : Math.min(t.offsetHeight, C);
            if (i > 0) {
              let t = {
                width: C == null ? Math.ceil(e.getBoundingClientRect().width) : e.offsetWidth,
                height: i + e.offsetHeight - e.clientHeight,
              };
              (t.width !== r?.width || t.height !== r?.height) && ((r = t), T(t.height), s?.(t));
            }
          };
        i();
        let a = new (t.ownerDocument.defaultView?.ResizeObserver ?? ResizeObserver)(i);
        return (a.observe(t), C != null && a.observe(n), () => a.disconnect());
      }),
      (t[1] = j),
      (t[2] = s),
      (t[3] = C),
      (t[4] = p),
      (t[5] = ne))
    : (ne = t[5]);
  let ie;
  (t[6] !== j || t[7] !== r || t[8] !== s || t[9] !== C || t[10] !== p || t[11] !== m
    ? ((ie = [j, r, s, C, p, m]),
      (t[6] = j),
      (t[7] = r),
      (t[8] = s),
      (t[9] = C),
      (t[10] = p),
      (t[11] = m),
      (t[12] = ie))
    : (ie = t[12]),
    (0, Ci.useLayoutEffect)(ne, ie));
  let ae = (0, Ci.useEffectEvent)(c),
    oe;
  t[13] !== j || t[14] !== i || t[15] !== ae || t[16] !== u
    ? ((oe = () => {
        let e = b.current,
          t = x.current;
        if (i && !j && u !== `complete` && e != null && t != null) return di(e, ae, t);
      }),
      (t[13] = j),
      (t[14] = i),
      (t[15] = ae),
      (t[16] = u),
      (t[17] = oe))
    : (oe = t[17]);
  let se;
  (t[18] !== j || t[19] !== i || t[20] !== u
    ? ((se = [j, i, u]), (t[18] = j), (t[19] = i), (t[20] = u), (t[21] = se))
    : (se = t[21]),
    (0, Ci.useEffect)(oe, se));
  let ce;
  t[22] !== j || t[23] !== l || t[24] !== p
    ? ((ce = (e, t) => {
        if (j === e) return !1;
        let n = p.current;
        return (e && n != null && (n.scrollTop = 0), ee({ isCollapsed: e, toggleSource: t }), l(), !0);
      }),
      (t[22] = j),
      (t[23] = l),
      (t[24] = p),
      (t[25] = ce))
    : (ce = t[25]);
  let F = ce,
    le;
  t[26] !== P || t[27] !== F
    ? ((le = (e) => P && F(e, `pointer`)), (t[26] = P), (t[27] = F), (t[28] = le))
    : (le = t[28]);
  let I = (0, Ci.useEffectEvent)(le),
    ue;
  t[29] !== N || t[30] !== I
    ? ((ue = () => {
        let e = y.current;
        if (!N || e == null) return;
        let t = null,
          n = !1,
          r = new mi(),
          i = (e) => {
            if (!(e.ctrlKey || e.shiftKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX))) {
              if (!r.isContinuation(e)) {
                if (!I(e.deltaY < 0)) return;
                r.begin(e, Ti);
              }
              (e.preventDefault(), e.stopPropagation());
            }
          },
          a = (e) => {
            ((t = e.touches.length === 1 ? (e.touches[0] ?? null) : null), (n = !1));
          },
          o = (e) => {
            let r = e.touches[0];
            if (t == null || e.touches.length !== 1 || r == null || r.identifier !== t.identifier) {
              t = null;
              return;
            }
            if (!n) {
              let e = r.clientX - t.clientX,
                i = r.clientY - t.clientY;
              if (Math.abs(i) < wi || Math.abs(i) <= Math.abs(e) || !I(i > 0)) return;
              ((n = !0), (S.current = !0));
            }
            (e.preventDefault(), e.stopPropagation());
          },
          s = () => {
            t = null;
          };
        return (
          e.addEventListener(`wheel`, i, { passive: !1 }),
          e.addEventListener(`touchstart`, a, { passive: !0 }),
          e.addEventListener(`touchmove`, o, { passive: !1 }),
          e.addEventListener(`touchend`, s),
          e.addEventListener(`touchcancel`, s),
          () => {
            (e.removeEventListener(`wheel`, i),
              e.removeEventListener(`touchstart`, a),
              e.removeEventListener(`touchmove`, o),
              e.removeEventListener(`touchend`, s),
              e.removeEventListener(`touchcancel`, s));
          }
        );
      }),
      (t[29] = N),
      (t[30] = I),
      (t[31] = ue))
    : (ue = t[31]);
  let de;
  (t[32] === N ? (de = t[33]) : ((de = [N]), (t[32] = N), (t[33] = de)), (0, Ci.useEffect)(ue, de));
  let R = P && `touch-pan-x touch-pinch-zoom`,
    fe;
  t[34] === R
    ? (fe = t[35])
    : ((fe = L(`relative overflow-clip bg-surface-secondary select-none`, R)), (t[34] = R), (t[35] = fe));
  let z;
  t[36] !== w || t[37] !== j || t[38] !== M
    ? ((z = M == null ? {} : { height: j ? 50 : (w ?? `auto`) }),
      (t[36] = w),
      (t[37] = j),
      (t[38] = M),
      (t[39] = z))
    : (z = t[39]);
  let pe, B;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (e) => {
        S.current && e.detail > 0 && ((S.current = !1), e.preventDefault(), e.stopPropagation());
      }),
      (B = () => {
        S.current = !1;
      }),
      (t[40] = pe),
      (t[41] = B))
    : ((pe = t[40]), (B = t[41]));
  let he = M == null ? `auto` : (w ?? `auto`),
    ge;
  t[42] === he ? (ge = t[43]) : ((ge = { height: he }), (t[42] = he), (t[43] = ge));
  let _e;
  t[44] !== _ || t[45] !== M
    ? ((_e = _ || M !== `pointer` ? { duration: 0 } : Ee), (t[44] = _), (t[45] = M), (t[46] = _e))
    : (_e = t[46]);
  let ve;
  t[47] !== j || t[48] !== M || t[49] !== C
    ? ((ve = L(C == null ? `contents` : [M != null && `h-full`, j ? `overflow-hidden` : `overflow-y-auto`])),
      (t[47] = j),
      (t[48] = M),
      (t[49] = C),
      (t[50] = ve))
    : (ve = t[50]);
  let ye;
  t[51] === h
    ? (ye = t[52])
    : ((ye = h.formatMessage({
        id: `annotationCommentEditor.metadata.label`,
        defaultMessage: `Annotation metadata`,
        description: `Accessible label for the read-only metadata included with the selected browser element's annotation`,
      })),
      (t[51] = h),
      (t[52] = ye));
  let be;
  t[53] === C ? (be = t[54]) : ((be = C == null ? void 0 : { maxHeight: C }), (t[53] = C), (t[54] = be));
  let xe;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, Z.jsx)(d, {
        id: `annotationCommentEditor.metadata.sourceTooltip`,
        defaultMessage: `This metadata is provided by the webpage and included with your annotation`,
        description: `Tooltip on the tag icon explaining where an annotation's extra metadata comes from and that it is included when the annotation is submitted`,
      })),
      (t[55] = xe))
    : (xe = t[55]);
  let V;
  t[56] === h
    ? (V = t[57])
    : ((V = h.formatMessage({
        id: `annotationCommentEditor.metadata.sourceLabel`,
        defaultMessage: `About annotation metadata`,
        description: `Accessible label for the tag icon that shows a tooltip about the source of an annotation's metadata`,
      })),
      (t[56] = h),
      (t[57] = V));
  let Se;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, Z.jsx)(me, {})), (t[58] = Se))
    : (Se = t[58]);
  let Ce;
  t[59] === V
    ? (Ce = t[60])
    : ((Ce = (0, Z.jsx)(n, {
        className: `relative z-10 mt-0.5 shrink-0`,
        "aria-label": V,
        color: `ghostTertiary`,
        size: `inline`,
        children: Se,
      })),
      (t[59] = V),
      (t[60] = Ce));
  let we;
  t[61] !== Ce || t[62] !== f
    ? ((we = (0, Z.jsx)(Oe, {
        align: `start`,
        cloneCustomTrigger: !0,
        portalContainer: f,
        side: `top`,
        tooltipContent: xe,
        children: Ce,
      })),
      (t[61] = Ce),
      (t[62] = f),
      (t[63] = we))
    : (we = t[63]);
  let Te;
  t[64] !== o || t[65] !== g
    ? ((Te = (0, Z.jsx)(yi, { id: g, ref: x, metadataGroups: o })), (t[64] = o), (t[65] = g), (t[66] = Te))
    : (Te = t[66]);
  let De;
  t[67] !== N || t[68] !== j || t[69] !== g || t[70] !== u || t[71] !== F
    ? ((De = N
        ? (0, Z.jsxs)(n, {
            className: L(`text-xs`, j ? `absolute inset-0` : `mt-3`),
            "aria-controls": g,
            "aria-expanded": !j,
            "data-browser-sidebar-design-drag-handle": j ? `` : void 0,
            color: `ghostTertiary`,
            disabled: !j && u !== `complete`,
            focusRing: j ? `inset` : `default`,
            size: `inline`,
            onClick: (e) => {
              F(!j, e.detail === 0 ? `keyboard` : `pointer`);
            },
            children: [
              (0, Z.jsx)(`span`, {
                className: j ? `sr-only` : void 0,
                children: j
                  ? (0, Z.jsx)(d, {
                      id: `annotationCommentEditor.metadata.showMore`,
                      defaultMessage: `Show more`,
                      description: `Button label for expanding the annotation metadata list to show all fields`,
                    })
                  : (0, Z.jsx)(d, {
                      id: `annotationCommentEditor.metadata.showLess`,
                      defaultMessage: `Show less`,
                      description: `Button label for collapsing the annotation metadata list to a compact preview`,
                    }),
              }),
              j ? null : (0, Z.jsx)(v, { className: `rotate-180` }),
            ],
          })
        : null),
      (t[67] = N),
      (t[68] = j),
      (t[69] = g),
      (t[70] = u),
      (t[71] = F),
      (t[72] = De))
    : (De = t[72]);
  let H;
  t[73] !== Te || t[74] !== De
    ? ((H = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col items-start`,
        children: [Te, De],
      })),
      (t[73] = Te),
      (t[74] = De),
      (t[75] = H))
    : (H = t[75]);
  let U;
  t[76] !== we || t[77] !== H
    ? ((U = (0, Z.jsxs)(`div`, {
        ref: b,
        className: `relative flex items-start gap-3 px-4 py-2.5`,
        children: [we, H],
      })),
      (t[76] = we),
      (t[77] = H),
      (t[78] = U))
    : (U = t[78]);
  let ke;
  t[79] !== ve || t[80] !== ye || t[81] !== be || t[82] !== U || t[83] !== p
    ? ((ke = (0, Z.jsx)(`div`, {
        ref: p,
        className: ve,
        role: `region`,
        "aria-label": ye,
        style: be,
        children: U,
      })),
      (t[79] = ve),
      (t[80] = ye),
      (t[81] = be),
      (t[82] = U),
      (t[83] = p),
      (t[84] = ke))
    : (ke = t[84]);
  let Ae;
  return (
    t[85] !== fe || t[86] !== z || t[87] !== ge || t[88] !== _e || t[89] !== ke
      ? ((Ae = (0, Z.jsx)(re.section, {
          ref: y,
          className: fe,
          animate: z,
          "data-browser-comment-metadata": !0,
          initial: !1,
          onClickCapture: pe,
          onPointerDownCapture: B,
          style: ge,
          transition: _e,
          children: ke,
        })),
        (t[85] = fe),
        (t[86] = z),
        (t[87] = ge),
        (t[88] = _e),
        (t[89] = ke),
        (t[90] = Ae))
      : (Ae = t[90]),
    Ae
  );
}
function vi(e, t) {
  let { elementName: n, elementMetadata: r } = t;
  return e + (n == null ? 0 : 1) + (r == null ? 0 : Object.keys(r).length);
}
function yi(e) {
  let t = (0, Si.c)(6),
    { id: n, ref: r, metadataGroups: i } = e,
    a;
  t[0] === i ? (a = t[1]) : ((a = i.map(bi)), (t[0] = i), (t[1] = a));
  let o;
  return (
    t[2] !== n || t[3] !== r || t[4] !== a
      ? ((o = (0, Z.jsx)(`div`, {
          id: n,
          ref: r,
          className: `flex w-full min-w-0 flex-col gap-2`,
          children: a,
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function bi(e, t) {
  let { elementName: n, elementMetadata: r } = e;
  return (0, Z.jsxs)(
    `div`,
    {
      className: `flex min-w-0 flex-col gap-2 text-sm leading-5`,
      children: [
        n == null
          ? null
          : (0, Z.jsx)(`h3`, {
              className: `min-w-0 font-medium wrap-anywhere whitespace-pre-wrap text-default`,
              children: (0, Z.jsx)(`bdi`, {
                className: `select-text`,
                "data-browser-sidebar-design-no-drag": !0,
                children: n,
              }),
            }),
        r != null && Object.keys(r).length > 0
          ? (0, Z.jsx)(`dl`, {
              className: `grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-2`,
              children: Object.entries(r).map(xi),
            })
          : null,
      ],
    },
    t,
  );
}
function xi(e) {
  let [t, n] = e;
  return (0, Z.jsxs)(
    `div`,
    {
      className: `contents`,
      children: [
        (0, Z.jsx)(`dt`, {
          className: `max-w-28 min-w-0 wrap-anywhere whitespace-pre-wrap text-secondary`,
          children: (0, Z.jsx)(`bdi`, {
            className: `select-text`,
            "data-browser-sidebar-design-no-drag": !0,
            children: t,
          }),
        }),
        (0, Z.jsx)(`dd`, {
          className: `min-w-0 font-medium wrap-anywhere whitespace-pre-wrap text-default`,
          children: (0, Z.jsx)(`bdi`, {
            className: `select-text`,
            "data-browser-sidebar-design-no-drag": !0,
            children: n === `` ? JSON.stringify(n) : String(n),
          }),
        }),
      ],
    },
    t,
  );
}
var Si, Ci, Z, wi, Ti, Ei, Di;
function Oi() {
  return (Oi = e(() => {
    ((Si = je()),
      P(),
      de(),
      (Ci = Fe()),
      B(),
      H(),
      E(),
      F(),
      m(),
      T(),
      hi(),
      (Z = G()),
      (wi = 8),
      (Ti = 400),
      (Ei = 68),
      (Di = 240));
  }))();
}
function ki(e) {
  let t = (0, Ai.c)(35),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]), (l = t[8]))
    : (({
        bodyRef: r,
        bodyHeight: n,
        children: i,
        metadataHeader: a,
        viewportRef: c,
        viewportMaxHeight: s,
        viewportTransform: l,
        ...o
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l));
  let u = s == null ? `overflow-visible` : `pointer-events-auto overflow-y-auto`,
    d;
  t[9] === u ? (d = t[10]) : ((d = L(`w-fit max-w-full shrink-0`, u)), (t[9] = u), (t[10] = d));
  let f;
  t[11] !== s || t[12] !== l
    ? ((f = { maxHeight: s, transform: l }), (t[11] = s), (t[12] = l), (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] === a
    ? (p = t[15])
    : ((p =
        a == null
          ? null
          : (0, ji.jsx)(`div`, {
              className: `pointer-events-none absolute inset-0 bg-surface-secondary`,
              "aria-hidden": !0,
            })),
      (t[14] = a),
      (t[15] = p));
  let m = a != null && `overflow-hidden rounded-[inherit] bg-inherit shadow-md`,
    h;
  t[16] === m ? (h = t[17]) : ((h = L(`relative`, m)), (t[16] = m), (t[17] = h));
  let g;
  t[18] === n ? (g = t[19]) : ((g = { height: n }), (t[18] = n), (t[19] = g));
  let _;
  t[20] !== r || t[21] !== i || t[22] !== h || t[23] !== g
    ? ((_ = (0, ji.jsx)(`div`, { ref: r, className: h, style: g, children: i })),
      (t[20] = r),
      (t[21] = i),
      (t[22] = h),
      (t[23] = g),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  t[25] !== a || t[26] !== o || t[27] !== p || t[28] !== _
    ? ((v = (0, ji.jsxs)(Ut, { ...o, children: [p, a, _] })),
      (t[25] = a),
      (t[26] = o),
      (t[27] = p),
      (t[28] = _),
      (t[29] = v))
    : (v = t[29]);
  let y;
  return (
    t[30] !== d || t[31] !== f || t[32] !== v || t[33] !== c
      ? ((y = (0, ji.jsx)(`div`, {
          ref: c,
          className: d,
          "data-browser-comment-editor-surface": !0,
          style: f,
          children: v,
        })),
        (t[30] = d),
        (t[31] = f),
        (t[32] = v),
        (t[33] = c),
        (t[34] = y))
      : (y = t[34]),
    y
  );
}
var Ai, ji;
function Mi() {
  return (Mi = e(() => {
    ((Ai = je()), P(), zt(), (ji = G()));
  }))();
}
var Ni, Pi;
function Fi() {
  return (Fi = e(() => {
    ((Ni = `_SizingText_iroz8_1`), (Pi = { SizingText: Ni }));
  }))();
}
function Ii(e) {
  let t = (0, Li.c)(24),
    {
      composerController: n,
      handoff: r,
      isRevealing: i,
      isVisible: a,
      scrollReviewState: o,
      onScrollReviewStateChange: s,
      ...c
    } = e,
    l = (0, Ri.useEffectEvent)(s),
    u;
  t[0] !== n || t[1] !== i || t[2] !== a || t[3] !== l || t[4] !== o
    ? ((u = () => {
        if (a && !i && o !== `complete`) return di(n.view.dom, l);
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = l),
      (t[4] = o),
      (t[5] = u))
    : (u = t[5]);
  let d;
  if (
    (t[6] !== n || t[7] !== i || t[8] !== a || t[9] !== o
      ? ((d = [n, i, a, o]), (t[6] = n), (t[7] = i), (t[8] = a), (t[9] = o), (t[10] = d))
      : (d = t[10]),
    (0, Ri.useEffect)(u, d),
    r == null)
  )
    return (0, zi.jsx)(Mt, { ...c, composerController: n });
  let f, p;
  t[11] === i
    ? ((f = t[12]), (p = t[13]))
    : ((f = (e) => {
        i && (e.preventDefault(), e.stopPropagation());
      }),
      (p = (e) => {
        i && (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), e.stopPropagation());
      }),
      (t[11] = i),
      (t[12] = f),
      (t[13] = p));
  let m = i
      ? (0, zi.jsx)(`div`, {
          className: L(`invisible col-start-1 row-start-1`, c.className),
          "aria-hidden": !0,
          inert: !0,
          children: (0, zi.jsx)(`div`, {
            ref: (e) => {
              if (e != null) {
                e.replaceChildren(
                  S.fromSchema(r.originalDocument.type.schema).serializeFragment(r.originalDocument.content, {
                    document: e.ownerDocument,
                  }),
                );
                for (let t of e.querySelectorAll(`p:empty`))
                  t.appendChild(e.ownerDocument.createElement(`br`));
              }
            },
            className: L(`ProseMirror`, Pi.SizingText),
          }),
        })
      : null,
    h = c.ariaLabel ?? c.placeholder,
    g = i ? `` : c.placeholder,
    _;
  t[14] !== n || t[15] !== c || t[16] !== h || t[17] !== g
    ? ((_ = (0, zi.jsx)(`div`, {
        className: `col-start-1 row-start-1 min-w-0`,
        children: (0, zi.jsx)(Mt, { ...c, composerController: n, ariaLabel: h, placeholder: g }),
      })),
      (t[14] = n),
      (t[15] = c),
      (t[16] = h),
      (t[17] = g),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== f || t[20] !== p || t[21] !== m || t[22] !== _
      ? ((v = (0, zi.jsxs)(`div`, {
          className: `grid min-w-0 grid-cols-1`,
          onClickCapture: f,
          onKeyDownCapture: p,
          children: [m, _],
        })),
        (t[19] = f),
        (t[20] = p),
        (t[21] = m),
        (t[22] = _),
        (t[23] = v))
      : (v = t[23]),
    v
  );
}
var Li, Ri, zi;
function Bi() {
  return (Bi = e(() => {
    ((Li = je()), P(), O(), (Ri = Fe()), q(), Fi(), (zi = G()));
  }))();
}
function Vi(e, t) {
  let n = e.state.doc,
    r = n.content.size - 1,
    i = [];
  (n.descendants((e, t) => {
    if (e.text != null)
      for (let { index: n, segment: r } of Ki?.segment(e.text) ?? [{ index: 0, segment: e.text }])
        i.push(t + n + r.length);
    else e.isInline && i.push(t + e.nodeSize);
  }),
    i.at(-1) !== r && i.push(r));
  let a = Math.min((i.length / Wi) * 1e3, 1450),
    o = (0, Hi.default)(i, 4).map((e) => e[e.length - 1]),
    s = (t) => {
      let i = e.state.tr,
        a = i.doc.content.size - 1;
      (i.replaceRange(a, a, n.slice(a, t)),
        i.setSelection(I.atEnd(i.doc)),
        i.setMeta(`addToHistory`, !1),
        t === r && i.setMeta(Gi, `ready`),
        e.dispatch(i));
    },
    c = new oe({
      key: Gi,
      state: {
        init: () => `pending`,
        apply: (e, t) => {
          let n = e.getMeta(Gi);
          return n === `revealing` ? `revealing` : n === `ready` ? `ready` : t;
        },
      },
      props: {
        editable: (e) => Gi.getState(e) === `ready`,
        attributes: (e) => ({
          tabindex: `0`,
          "aria-readonly": Gi.getState(e) === `ready` ? `false` : `true`,
        }),
      },
      view: () => {
        let e = null,
          n = () => {
            (e?.(), (e = null));
          };
        return {
          update: (i, c) => {
            let l = Gi.getState(i.state);
            if (l !== Gi.getState(c)) {
              if (l === `revealing`) {
                let t = i.dom.ownerDocument.defaultView;
                if (t == null) {
                  s(r);
                  return;
                }
                let n = t.performance.now(),
                  c = 0,
                  l = (r) => {
                    if (e == null) return;
                    let i = Ui + (c / Math.max(1, o.length - 1)) ** 0.8 * a;
                    (r - n >= i && (s(o[c]), (c += 1)), e != null && (u = t.requestAnimationFrame(l)));
                  },
                  u = t.requestAnimationFrame(l);
                e = () => t.cancelAnimationFrame(u);
              } else l === `ready` && (n(), t());
            }
          },
          destroy: n,
        };
      },
    });
  return (
    e.updateState(Se.create({ schema: e.state.schema, plugins: [...e.state.plugins, c] })),
    {
      originalDocument: n,
      isComplete: () => Gi.getState(e.state) === `ready`,
      start: () => {
        Gi.getState(e.state) === `pending` && e.dispatch(e.state.tr.setMeta(Gi, `revealing`));
      },
      finish: () => {
        !e.isDestroyed && Gi.getState(e.state) !== `ready` && s(r);
      },
    }
  );
}
var Hi, Ui, Wi, Gi, Ki;
function qi() {
  return (qi = e(() => {
    ((Hi = t(Et(), 1)),
      ye(),
      (Ui = 50),
      (Wi = 150),
      (Gi = new he(`page-comment-handoff`)),
      (Ki = xt(`grapheme`)));
  }))();
}
function Ji(e) {
  let t = (0, Yi.c)(10),
    { originalText: r, isRevealing: i, tooltipPortalContainer: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Xi.jsx)(`p`, {
        children: (0, Xi.jsx)(d, {
          id: `browserSidebarCommentOverlay.pagePromptExplanation`,
          defaultMessage: `The webpage suggested the following prompt. ChatGPT will receive only the text you submit.`,
          description: `Explanation above the original webpage-provided suggestion in an annotation tooltip, clarifying that the user controls the submitted prompt even after editing the suggestion`,
        }),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === r
    ? (s = t[2])
    : ((s = (0, Xi.jsxs)(`div`, {
        className: `flex flex-col gap-2 p-3`,
        children: [
          o,
          (0, Xi.jsx)(`blockquote`, {
            className: `border-s-2 border-border ps-3 break-words whitespace-pre-wrap text-secondary`,
            children: r,
          }),
        ],
      })),
      (t[1] = r),
      (t[2] = s));
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = (0, Xi.jsx)(A, {})), (t[3] = c)) : (c = t[3]);
  let l;
  t[4] === i
    ? (l = t[5])
    : ((l = (0, Xi.jsxs)(n, {
        className: `max-w-full`,
        color: `ghostTertiary`,
        size: `compact`,
        type: `button`,
        children: [
          c,
          (0, Xi.jsx)(`span`, {
            className: `truncate`,
            children: i
              ? (0, Xi.jsx)(d, {
                  id: `browserSidebarCommentOverlay.fromThisPageInProgress`,
                  defaultMessage: `From the webpage…`,
                  description: `Visible footer attribution while a webpage-provided annotation prompt is being inserted; the ellipsis indicates that the handoff is still in progress`,
                })
              : (0, Xi.jsx)(d, {
                  id: `browserSidebarCommentOverlay.fromThisPage`,
                  defaultMessage: `From the webpage`,
                  description: `Footer attribution for a draft or saved annotation whose initial text was supplied by the webpage; its tooltip shows the original page-provided text even after the user edits the annotation`,
                }),
          }),
        ],
      })),
      (t[4] = i),
      (t[5] = l));
  let u;
  return (
    t[6] !== s || t[7] !== l || t[8] !== a
      ? ((u = (0, Xi.jsx)(`div`, {
          className: `min-w-0`,
          children: (0, Xi.jsx)(Oe, {
            cloneCustomTrigger: !0,
            align: `end`,
            closeOnTriggerBlur: !1,
            color: `default`,
            delayOpen: !0,
            disablePadding: !0,
            portalContainer: a,
            selectable: !0,
            side: `left`,
            sideOffset: 16,
            tooltipClassName: `overflow-y-auto`,
            tooltipMaxWidth: `min(20rem, var(--radix-tooltip-content-available-width, 100vw), calc(100vw - 16px))`,
            tooltipContent: s,
            children: l,
          }),
        })),
        (t[6] = s),
        (t[7] = l),
        (t[8] = a),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Yi, Xi;
function Zi() {
  return (Zi = e(() => {
    ((Yi = je()), B(), H(), E(), F(), (Xi = G()));
  }))();
}
function Qi(e) {
  let t = (0, $i.c)(20),
    { callback: n, editorState: r, rect: i } = e,
    a,
    o,
    s;
  if (t[0] !== n || t[1] !== r.annotationControlChanges || t[2] !== r.annotationControls?.controls) {
    s = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((a = r.annotationControls?.controls.find((e) => e.callback === n)), a?.type !== `range`)) {
        s = null;
        break bb0;
      }
      o = r.annotationControlChanges?.find((e) => e.callback === n)?.value ?? a.currentValue ?? We(a);
    }
    ((t[0] = n),
      (t[1] = r.annotationControlChanges),
      (t[2] = r.annotationControls?.controls),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s));
  } else ((a = t[3]), (o = t[4]), (s = t[5]));
  if (s !== Symbol.for(`react.early_return_sentinel`)) return s;
  let c = o;
  if (typeof c != `number`) return null;
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, ea.jsx)(`span`, {
        className: `absolute -top-2 -right-3 -bottom-2 -left-3 rounded-xl bg-surface-elevated-secondary shadow-md ring-1 ring-border-subtle`,
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== a.max || t[8] !== a.min || t[9] !== a.step || t[10] !== c
    ? ((u = (0, ea.jsx)(rn, { min: a.min, max: a.max, step: a.step, value: c, readOnly: !0, tabIndex: -1 })),
      (t[7] = a.max),
      (t[8] = a.min),
      (t[9] = a.step),
      (t[10] = c),
      (t[11] = u))
    : (u = t[11]);
  let d;
  t[12] === c
    ? (d = t[13])
    : ((d = (0, ea.jsx)(`span`, {
        className: `min-w-6 shrink-0 text-end font-mono text-xs text-secondary tabular-nums`,
        children: c,
      })),
      (t[12] = c),
      (t[13] = d));
  let f;
  t[14] !== u || t[15] !== d
    ? ((f = (0, ea.jsxs)(`span`, {
        className: `relative flex h-full w-full min-w-0 items-center gap-2`,
        children: [u, d],
      })),
      (t[14] = u),
      (t[15] = d),
      (t[16] = f))
    : (f = t[16]);
  let p;
  return (
    t[17] !== i || t[18] !== f
      ? ((p = (0, ea.jsxs)(`div`, {
          "aria-hidden": `true`,
          className: `pointer-events-none absolute z-20`,
          style: i,
          children: [l, f],
        })),
        (t[17] = i),
        (t[18] = f),
        (t[19] = p))
      : (p = t[19]),
    p
  );
}
var $i, ea;
function ta() {
  return (ta = e(() => {
    (($i = je()), Tt(), nn(), (ea = G()));
  }))();
}
var na, ra, ia;
function aa() {
  return (aa = e(() => {
    ((na = `_DesignEditorEntry_1qftj_1`),
      (ra = `_designEditorEntry_1qftj_51`),
      (ia = { DesignEditorEntry: na, designEditorEntry: ra }));
  }))();
}
function oa(e) {
  let t = (0, Ta.c)(49),
    {
      enableRichText: n,
      enableSuggestions: r,
      dictationProductSurface: i,
      autoFocus: a,
      allowImageAttachments: o,
      allowDirectSubmit: s,
      allowDirectSubmitOnEdit: c,
      allowEmptySubmit: l,
      defaultCreateSubmitMode: u,
      createSubmitButtonSize: d,
      defaultDesignEditorOpen: f,
      isVisible: p,
      defaultExpandedSpacingGroups: m,
      inputAriaLabel: h,
      placeholder: g,
      session: _,
      browserTabId: v,
      annotationSelectionAnchors: y,
      showAdjustEntry: b,
      windowHeight: x,
      windowWidth: S,
      maxSurfaceHeight: C,
      maxSurfaceWidth: w,
      metadataAnchor: T,
      reservedTrayHeight: E,
      keyboardEventTarget: D,
      onSubmit: O,
      onDirectSubmit: k,
      onDesignChangeDelete: A,
      onDesignChangeUpdate: ee,
      onDesignControlInteractionChange: j,
      onAnnotationSelectionHoverChange: M,
      onAnnotationSelectionRemove: te,
      onTweaksEditorOpenChange: N,
      onDelete: P,
      onCancel: ne,
      onEscape: re,
      onMounted: ie,
      onBodyChange: ae,
      onAttachmentPreviewOpenChange: oe,
      onDictationBusyChange: se,
      onLightDismissibilityChange: ce,
      onRepositionInteractionChange: F,
    } = e,
    le = n !== void 0 && n,
    I = r === void 0 || r,
    ue = a === void 0 || a,
    L = o === void 0 || o,
    de = s === void 0 || s,
    R = c !== void 0 && c,
    fe = l !== void 0 && l,
    z = u === void 0 ? `saved` : u,
    pe = d === void 0 ? `composer` : d,
    B = f !== void 0 && f,
    me = p === void 0 || p,
    he = b === void 0 || b;
  if (_.surfaceMode === `preview`) {
    let e;
    return (
      t[0] !== ie || t[1] !== _ || t[2] !== he || t[3] !== x
        ? ((e = (0, $.jsx)(sa, { session: _, showAdjustEntry: he, windowHeight: x, onMounted: ie })),
          (t[0] = ie),
          (t[1] = _),
          (t[2] = he),
          (t[3] = x),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let ge;
  return (
    t[5] !== de ||
    t[6] !== R ||
    t[7] !== fe ||
    t[8] !== L ||
    t[9] !== y ||
    t[10] !== ue ||
    t[11] !== v ||
    t[12] !== pe ||
    t[13] !== z ||
    t[14] !== B ||
    t[15] !== m ||
    t[16] !== i ||
    t[17] !== le ||
    t[18] !== I ||
    t[19] !== h ||
    t[20] !== me ||
    t[21] !== D ||
    t[22] !== C ||
    t[23] !== w ||
    t[24] !== T ||
    t[25] !== M ||
    t[26] !== te ||
    t[27] !== oe ||
    t[28] !== ae ||
    t[29] !== ne ||
    t[30] !== P ||
    t[31] !== A ||
    t[32] !== ee ||
    t[33] !== j ||
    t[34] !== se ||
    t[35] !== k ||
    t[36] !== re ||
    t[37] !== ce ||
    t[38] !== ie ||
    t[39] !== F ||
    t[40] !== O ||
    t[41] !== N ||
    t[42] !== g ||
    t[43] !== E ||
    t[44] !== _ ||
    t[45] !== he ||
    t[46] !== x ||
    t[47] !== S
      ? ((ge = (0, $.jsx)(
          ca,
          {
            enableRichText: le,
            enableSuggestions: I,
            dictationProductSurface: i,
            autoFocus: ue,
            session: _,
            isVisible: me,
            browserTabId: v,
            annotationSelectionAnchors: y,
            defaultDesignEditorOpen: B,
            defaultExpandedSpacingGroups: m,
            showAdjustEntry: he,
            windowHeight: x,
            windowWidth: S,
            maxSurfaceHeight: C,
            maxSurfaceWidth: w,
            metadataAnchor: T,
            reservedTrayHeight: E,
            keyboardEventTarget: D,
            onSubmit: O,
            onDirectSubmit: k,
            onDesignChangeDelete: A,
            onDesignChangeUpdate: ee,
            onDesignControlInteractionChange: j,
            onAnnotationSelectionHoverChange: M,
            onAnnotationSelectionRemove: te,
            onTweaksEditorOpenChange: N,
            onDelete: P,
            onCancel: ne,
            onEscape: re,
            onMounted: ie,
            onBodyChange: ae,
            onAttachmentPreviewOpenChange: oe,
            onDictationBusyChange: se,
            onLightDismissibilityChange: ce,
            onRepositionInteractionChange: F,
            allowImageAttachments: L,
            allowDirectSubmit: de,
            allowDirectSubmitOnEdit: R,
            allowEmptySubmit: fe,
            defaultCreateSubmitMode: z,
            createSubmitButtonSize: pe,
            inputAriaLabel: h,
            placeholder: g,
          },
          _.sessionId,
        )),
        (t[5] = de),
        (t[6] = R),
        (t[7] = fe),
        (t[8] = L),
        (t[9] = y),
        (t[10] = ue),
        (t[11] = v),
        (t[12] = pe),
        (t[13] = z),
        (t[14] = B),
        (t[15] = m),
        (t[16] = i),
        (t[17] = le),
        (t[18] = I),
        (t[19] = h),
        (t[20] = me),
        (t[21] = D),
        (t[22] = C),
        (t[23] = w),
        (t[24] = T),
        (t[25] = M),
        (t[26] = te),
        (t[27] = oe),
        (t[28] = ae),
        (t[29] = ne),
        (t[30] = P),
        (t[31] = A),
        (t[32] = ee),
        (t[33] = j),
        (t[34] = se),
        (t[35] = k),
        (t[36] = re),
        (t[37] = ce),
        (t[38] = ie),
        (t[39] = F),
        (t[40] = O),
        (t[41] = N),
        (t[42] = g),
        (t[43] = E),
        (t[44] = _),
        (t[45] = he),
        (t[46] = x),
        (t[47] = S),
        (t[48] = ge))
      : (ge = t[48]),
    ge
  );
}
function sa(e) {
  let t = (0, Ta.c)(34),
    { session: n, showAdjustEntry: r, windowHeight: i, onMounted: a } = e,
    o = k(),
    s = ma(n),
    c = r ? n.designChange : null,
    l = c != null,
    u =
      s.length > 0
        ? s
        : l
          ? o.formatMessage(
              {
                id: `browserSidebarCommentOverlay.previewTweaksCount`,
                defaultMessage: `{count, plural, one {# adjustment} other {# adjustments}}`,
                description: `Fallback preview text for a browser sidebar annotation that only includes design adjustments`,
              },
              { count: _a(c) },
            )
          : ``,
    d = /\r?\n/.test(u),
    f = (0, Q.useRef)(null),
    p = (0, Q.useRef)(null),
    m;
  (t[0] !== a || t[1] !== n.sessionId
    ? ((m = () => {
        let e = f.current;
        if (e == null) return;
        let t = e.getBoundingClientRect(),
          r = { width: Math.ceil(t.width), height: Math.ceil(t.height) },
          i = p.current;
        (i?.width !== r.width || i?.height !== r.height) && ((p.current = r), a(n.sessionId, r));
      }),
      (t[0] = a),
      (t[1] = n.sessionId),
      (t[2] = m))
    : (m = t[2]),
    (0, Q.useLayoutEffect)(m, [a, u, n.sessionId, l, i]));
  let h = Vt,
    g;
  t[3] === n.previewAlignment
    ? (g = t[4])
    : ((g = L(`flex h-full w-full`, ya(n.previewAlignment))), (t[3] = n.previewAlignment), (t[4] = g));
  let _ = d ? `items-start py-2` : `items-center`,
    v;
  t[5] === _ ? (v = t[6]) : ((v = L(ja, _)), (t[5] = _), (t[6] = v));
  let y;
  t[7] === i ? (y = t[8]) : ((y = { height: i }), (t[7] = i), (t[8] = y));
  let b = d ? `items-start` : `items-center`,
    x;
  t[9] === b ? (x = t[10]) : ((x = L(`flex min-w-0 gap-2`, b)), (t[9] = b), (t[10] = x));
  let S;
  t[11] === l
    ? (S = t[12])
    : ((S = l
        ? (0, $.jsx)(`span`, {
            "aria-hidden": `true`,
            "data-testid": `annotation-comment-preview-tweak-icon`,
            className: `flex shrink-0 items-center justify-center pt-0.5 text-codex-description`,
            children: (0, $.jsx)(vt, { className: `icon-sm` }),
          })
        : null),
      (t[11] = l),
      (t[12] = S));
  let C = d
      ? `overflow-hidden whitespace-pre-wrap break-words`
      : `overflow-hidden text-ellipsis whitespace-nowrap`,
    w;
  t[13] === C ? (w = t[14]) : ((w = L(Ma, C)), (t[13] = C), (t[14] = w));
  let T;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { fontSize: `var(--codex-chat-font-size)` }), (t[15] = T))
    : (T = t[15]);
  let E = s.length > 0 ? va(s) : u,
    D;
  t[16] !== w || t[17] !== T || t[18] !== E
    ? ((D = (0, $.jsx)(`div`, { className: w, style: T, children: E })),
      (t[16] = w),
      (t[17] = T),
      (t[18] = E),
      (t[19] = D))
    : (D = t[19]);
  let O;
  t[20] !== S || t[21] !== D || t[22] !== x
    ? ((O = (0, $.jsxs)(`div`, { className: x, children: [S, D] })),
      (t[20] = S),
      (t[21] = D),
      (t[22] = x),
      (t[23] = O))
    : (O = t[23]);
  let A;
  t[24] !== O || t[25] !== v || t[26] !== y
    ? ((A = (0, $.jsx)(`div`, { ref: f, className: v, style: y, children: O })),
      (t[24] = O),
      (t[25] = v),
      (t[26] = y),
      (t[27] = A))
    : (A = t[27]);
  let ee;
  t[28] !== A || t[29] !== g
    ? ((ee = (0, $.jsx)(`div`, { className: g, children: A })), (t[28] = A), (t[29] = g), (t[30] = ee))
    : (ee = t[30]);
  let j;
  return (
    t[31] !== ee || t[32] !== h
      ? ((j = (0, $.jsx)(`div`, {
          className: `pointer-events-none flex h-full w-full overflow-visible bg-transparent text-default`,
          style: h,
          children: ee,
        })),
        (t[31] = ee),
        (t[32] = h),
        (t[33] = j))
      : (j = t[33]),
    j
  );
}
function ca({
  enableRichText: e,
  enableSuggestions: t,
  dictationProductSurface: i,
  autoFocus: a,
  session: c,
  isVisible: l,
  browserTabId: u,
  annotationSelectionAnchors: p,
  windowHeight: m,
  windowWidth: h,
  maxSurfaceHeight: g,
  maxSurfaceWidth: _,
  metadataAnchor: v,
  reservedTrayHeight: y,
  defaultDesignEditorOpen: x = !1,
  defaultExpandedSpacingGroups: S,
  showAdjustEntry: C = !0,
  keyboardEventTarget: w,
  onSubmit: T,
  onDirectSubmit: E,
  onDesignChangeDelete: D,
  onDesignChangeUpdate: O,
  onDesignControlInteractionChange: A,
  onAnnotationSelectionHoverChange: j,
  onAnnotationSelectionRemove: N,
  onTweaksEditorOpenChange: P,
  onDelete: re,
  onCancel: ie,
  onEscape: ae,
  onMounted: oe,
  onBodyChange: se,
  onAttachmentPreviewOpenChange: F,
  onDictationBusyChange: I,
  onLightDismissibilityChange: de,
  onRepositionInteractionChange: R,
  allowImageAttachments: z = !0,
  allowDirectSubmit: B,
  allowDirectSubmitOnEdit: me,
  allowEmptySubmit: he,
  defaultCreateSubmitMode: ge,
  createSubmitButtonSize: _e,
  inputAriaLabel: ve,
  placeholder: ye,
}) {
  let be = f(o),
    V = k(),
    Se = te(),
    Ce = Ct(`2460218704`),
    we = ee(Ie),
    Te = ee(Ke),
    Ee = c.siteAnnotationFeaturesEnabled !== !1,
    De = ma(c),
    H = c.draftBody ?? De,
    U = Ee && u != null && c.pageInitialComment?.text.length ? c.pageInitialComment : void 0,
    [ke, je] = (0, Q.useState)(() => c.target.mode !== `create` || U?.shouldReveal !== !0 || Se),
    W = U != null && !ke,
    G = c.target.mode === `create` && U != null,
    [Me, Ne] = (0, Q.useState)(() => (G ? `pending` : `complete`)),
    Pe = p != null && p.length > 1,
    Fe = C && !Pe,
    Le = C ? ga(c) : null,
    [{ commentEditor: K, pageCommentHandoff: Re }] = (0, Q.useState)(() => {
      let n = Ve({ enableRichText: e, enableSuggestions: t });
      return W
        ? (n.setText(De), { commentEditor: n, pageCommentHandoff: Vi(n.view, () => je(!0)) })
        : { commentEditor: n, pageCommentHandoff: null };
    }),
    Be = (0, Q.useCallback)(() => {
      K.view.isDestroyed || K.destroy();
    }, [K]);
  Je(Be, K);
  let [He, Ue] = (0, Q.useState)(H),
    [We, $e] = (0, Q.useState)(() => c.attachedImages ?? []),
    [et, tt] = (0, Q.useState)(() => (C ? (c.designEditorState ?? Le ?? null) : null)),
    [nt] = (0, Q.useState)(() => ({
      withSiteControls: Le,
      withoutSiteControls:
        Le == null ? null : { ...Le, annotationControls: void 0, annotationControlChanges: void 0 },
    })),
    rt = Ee ? nt.withSiteControls : nt.withoutSiteControls,
    [st, ct] = (0, Q.useState)(() => et != null && (x || c.target.mode === `design` || Le != null)),
    lt = p?.[0],
    ut = et?.anchor,
    dt =
      p == null ||
      (lt?.kind === `virtual` && ut?.kind === `virtual` && le(lt, ut)) ||
      (lt?.kind === `element` &&
        ut?.kind === `element` &&
        lt.pageUrl === ut.pageUrl &&
        lt.frameUrl === ut.frameUrl &&
        lt.framePath.length === ut.framePath.length &&
        lt.framePath.every((e, t) => e === ut.framePath[t]) &&
        (lt.runtimeElementId != null || ut.runtimeElementId != null
          ? lt.runtimeElementId === ut.runtimeElementId
          : (lt.selector ?? lt.elementPath) === (ut.selector ?? ut.elementPath)) &&
        (lt.documentContext?.documentId ?? null) === (ut.documentContext?.documentId ?? null) &&
        (lt.documentContext?.tabId ?? null) === (ut.documentContext?.tabId ?? null)),
    ft = Fe && et != null && dt ? et : null,
    pt = ha(ft, Ee),
    mt = (!Te && !we) || (ut != null && ue(ut.pageUrl)),
    gt = An({ canEditDesign: pt != null, showAdjustEntry: Fe && mt }),
    q =
      pt != null &&
      ((mt && st) ||
        (!mt &&
          ((c.target.mode === `edit` && Le != null) ||
            (Ee && c.pageRequestedDesignEditor === !0) ||
            pt.annotationControls?.controlsMode === `extend` ||
            (pt.annotationControls?.controls.length ?? 0) > 0))),
    _t = Ee && (Ce || U != null) && c.anchorState != null ? li(c.anchorState) : void 0,
    yt = _t != null && _t.length > 0,
    xt = (0, Q.useRef)(null),
    [wt, Tt] = (0, Q.useState)(() => (G ? `pending` : `complete`)),
    Et = G && Me === `required`,
    Mt = G && yt && wt === `required`,
    Nt = Et || Mt,
    It = G && (Me === `pending` || (yt && wt === `pending`)),
    Lt = W || It || Nt,
    [zt, Ht] = (0, Q.useState)(),
    [Ut, Wt] = (0, Q.useState)(!1),
    [Kt, qt] = (0, Q.useState)(),
    [Jt, Yt] = (0, Q.useState)(),
    [Xt, Zt] = (0, Q.useState)(!1),
    [Qt, $t] = (0, Q.useState)(!1),
    [en, tn] = (0, Q.useState)(!1),
    [nn, rn] = (0, Q.useState)(!1),
    [cn, ln] = (0, Q.useState)(null),
    [un, fn] = (0, Q.useState)(null),
    [mn, hn] = (0, Q.useState)(!1),
    [_n, vn] = (0, Q.useState)(null),
    yn = (0, Q.useRef)({ property: null, hasFocusedInput: !1, isControlEditing: !1, isDragging: !1 }),
    [bn, xn] = (0, Q.useState)(!1),
    [Sn, wn] = (0, Q.useState)({ x: 0, y: 0 }),
    Tn = (e) => {
      (xn(e), F?.(e));
    },
    En = (e) => {
      (e.preventDefault(), K.focus());
    },
    [Dn, On] = (0, Q.useState)(!1),
    [kn, jn] = (0, Q.useState)(!1),
    Mn = ee(qe),
    Nn = (0, Q.useRef)(H),
    Pn = (0, Q.useRef)(c.attachedImages ?? []),
    Fn = (0, Q.useRef)(null),
    In = (0, Q.useRef)(null),
    Ln = (0, Q.useRef)(ft);
  Ln.current = ft;
  let Rn = (0, Q.useRef)(null),
    zn = (0, Q.useRef)(null),
    Vn = (0, Q.useRef)(null),
    Hn = (0, Q.useRef)(null),
    Un = (0, Q.useRef)(null),
    Wn = (0, Q.useRef)(null),
    Gn = (0, Q.useRef)(null),
    Kn = (0, Q.useRef)(null),
    qn = (0, Q.useRef)(0),
    Jn = (0, Q.useRef)(null),
    Yn = (0, Q.useRef)(null),
    Xn = (0, Q.useRef)(!1),
    Zn = (0, Q.useRef)(null),
    { data: Qn } = ce(`workspace-root-options`, { params: { hostId: pe } }),
    $n = (0, Q.useMemo)(() => {
      if (Qn?.roots.length) return Qn.roots;
      if (c.cwd != null) return [c.cwd];
    }, [c.cwd, Qn?.roots]),
    er = at(K),
    tr = ot(K),
    nr = null;
  !W && er.ui?.active === !0 ? (nr = `at`) : !W && tr.ui?.active === !0 && (nr = `skill`);
  let rr = q,
    ir = (G && en) || (c.target.mode === `edit` && U != null),
    ar = q || yt || ir,
    or = U != null || c.target.mode === `edit` || en || q,
    sr = Pe && (c.target.mode === `edit` || (c.target.mode === `create` && N != null)),
    { hasCommentText: cr } = an({
      baselineDesignGroup: rt,
      commentText: He,
      designEditorState: pt,
      isDesignSubmissionMode: rr,
    }),
    { designDraft: lr } = an({
      baselineDesignGroup: rt,
      commentText: He,
      designEditorState: pt,
      isDesignSubmissionMode: pt != null,
    }),
    ur = pn({ baselineDesignGroup: rt, designDraft: lr, designEditorState: pt, isDesignEditorOpen: q }),
    dr = Ze(),
    fr = dr === !0,
    {
      getIsDictationStarting: pr,
      isDictationStarting: mr,
      isDictating: hr,
      isTranscribing: gr,
      canRetryDictation: _r,
      retryDictation: vr,
      waveformCanvasRef: yr,
      startDictation: br,
      stopDictation: xr,
      transcriptionAction: Sr,
    } = it({
      productSurface: i,
      enabled: fr && !W,
      getSurroundingText: () => K.getText(),
      onTranscriptInsert: (e) => {
        K.view.isDestroyed || K.appendText(e);
      },
      onTranscriptSend: (e) => {
        if (K.view.isDestroyed) return;
        K.appendText(e);
        let t = K.getText().trim();
        if (t.length === 0 || Lt) return;
        let n = {
          body: t,
          submitSource: `dictation`,
          ...(Pn.current.length === 0 ? {} : { attachedImages: Pn.current }),
        };
        if (c.target.mode === `create` && ge === `direct`) {
          E(n);
          return;
        }
        bi(`saved`, `dictation`);
      },
      onStartError: () => {
        be.get(fe).danger(
          V.formatMessage({
            id: `composer.dictation.startError`,
            defaultMessage: `Unable to start dictation`,
            description: `Toast text shown when dictation could not be started`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.startError` } },
        );
      },
      onTranscribeError: () => {
        be.get(fe).danger(
          V.formatMessage({
            id: `composer.dictation.transcribeError`,
            defaultMessage: `Unable to transcribe audio`,
            description: `Toast text shown when dictation audio transcription fails`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.transcribeError` } },
        );
      },
      onUnsupported: () => {
        be.get(fe).danger(
          V.formatMessage({
            id: `composer.dictation.unsupported`,
            defaultMessage: `Dictation is not available on this device`,
            description: `Toast text shown when dictation is not supported on the current device`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.unsupported` } },
        );
      },
    }),
    Cr = hr || gr,
    wr = z && We.length > 0,
    Tr = or || wr,
    Er = U == null && c.target.mode !== `edit` && !en && !wr,
    Dr = !q && (Tr || sr),
    Or = Dr && !or,
    kr = Tr && !Cr ? 120 : 44,
    Ar = y ?? Math.min(Math.max(m - 120, 0), 88),
    jr = yt ? v : void 0,
    Mr = g ?? Math.max(1, m - Ar),
    Nr;
  Cr ? (Nr = Jt) : jr == null && !q && !Dr && (Nr = 120);
  let Pr;
  jr != null &&
    ((Mr = Math.min(Mr, Math.max(1, jr.maxBottom - jr.minTop))),
    (Pr = Math.min(Mr, Math.max(0, jr.bodyTop - jr.minTop + (Kt ?? kr)))));
  let Fr = G ? Math.ceil(Mr) : Mr,
    Ir = (yt || G || g != null) && cn != null && cn > Fr,
    Lr = Ot(),
    { skills: Rr } = ht($n),
    zr = (0, Q.useCallback)(
      (e, t, n = Ln.current) => {
        (I?.(mr || hr || gr),
          de(
            !mr && !hr && !gr && dn(c.target.mode, De, e, U?.text, c.attachedImages ?? [], t, rt, ha(n, Ee)),
          ));
      },
      [Ee, rt, I, de, mr, hr, gr, U?.text, c.attachedImages, De, c.target.mode],
    );
  (0, Q.useEffect)(() => {
    zr(Nn.current, Pn.current);
  }, [zr]);
  let Br = (0, Q.useCallback)(
      (e, t = Hn.current) => {
        let n = q && xa(e, Un.current, t, G);
        rn((e) => (e === n ? e : n));
      },
      [G, q],
    ),
    Vr = (0, Q.useCallback)(
      (e) => {
        if (((Hn.current = e), e == null)) {
          rn(!1);
          return;
        }
        Br(Nn.current, e);
      },
      [Br],
    ),
    Hr = (0, Q.useCallback)(() => {
      let e = K.getText();
      if (Nn.current === e) return;
      ((Nn.current = e),
        Ue(e),
        se?.(e),
        tn(c.target.mode !== `edit` && ba(e, K.view.state.doc.childCount > 1, Un.current, Rn.current, G)),
        Br(e),
        zr(e, Pn.current));
      let t = ha(Ln.current, Ee);
      rr && t != null && O?.(on(t, rt, e.trim()));
    }, [Ee, rt, K, G, rr, se, O, c.target.mode, Br, zr]);
  ((0, Q.useEffect)(
    () =>
      G
        ? bt(K.view, (e) => {
            e &&
              (Re == null || Re.isComplete()) &&
              queueMicrotask(() => {
                K.view.dom.isConnected && (0, Da.flushSync)(Hr);
              });
          })
        : bt(K.view, Hr),
    [K, Hr, G, Re],
  ),
    (0, Q.useEffect)(() => {
      K.syncMentionMetadata({ skills: Rr, apps: Lr });
    }, [Lr, Rr, K]),
    (0, Q.useLayoutEffect)(() => {
      if (Wn.current === c.sessionId) return;
      Wn.current = c.sessionId;
      let e = c.attachedImages ?? [];
      ((Re == null || Re.isComplete()) && (G ? K.setText(H) : K.setPromptText(H)),
        (Nn.current = H),
        (Pn.current = e),
        se?.(H),
        Ue(H),
        $e(e),
        $t(!1),
        Zt(!1),
        (Kn.current = null),
        tn(
          c.target.mode !== `edit` &&
            ba(H, (Re?.originalDocument ?? K.view.state.doc).childCount > 1, Un.current, Rn.current, G),
        ),
        zr(H, e));
    }, [K, G, Re, c.attachedImages, H, c.sessionId, c.target.mode, se, zr]),
    ne(
      `browser-sidebar-comment-overlay-insert-text`,
      (e) => {
        if (
          u == null ||
          c.conversationId == null ||
          e.browserTabId !== u ||
          e.conversationId !== c.conversationId ||
          e.sessionId !== c.sessionId
        )
          return;
        let t = Gn.current;
        (t?.sessionId === e.sessionId && t.sequence >= e.sequence) ||
          ((Gn.current = { sequence: e.sequence, sessionId: e.sessionId }),
          Re?.finish(),
          K.focus(),
          K.insertTextAtSelection(e.text));
      },
      [u, K, Re, c.conversationId, c.sessionId],
    ),
    (0, Q.useEffect)(() => {
      !G || Se ? Re?.finish() : l && Re?.start();
    }, [G, l, Re, Se]),
    (0, Q.useLayoutEffect)(() => {
      if (Cr) return;
      let e = Rn.current,
        t = zn.current,
        n = Vn.current,
        i = Fn.current;
      if (e == null || t == null || n == null || i == null) return;
      let a = () => {
        if (G && !e.contains(K.view.dom)) return;
        let a = e.getBoundingClientRect(),
          o = n.getBoundingClientRect(),
          s = t.getBoundingClientRect(),
          l = a.bottom - s.top;
        (qt(l), Yt(n.offsetHeight));
        let u = zt != null && (G ? Math.abs(zt.width - a.width) <= 1 : zt.width === Math.ceil(a.width)),
          d = yt && zt != null && (Ut || u) ? zt.height + s.height : a.height,
          f = Math.max(0, d - l),
          p = { width: Math.ceil(o.width), height: Math.ceil(d) };
        ln(p.height);
        let m = _ ?? i.getBoundingClientRect().width,
          h = Math.ceil(Math.max(1, Math.min(r.width, m) - (n.offsetWidth - n.clientWidth))),
          g =
            !yt ||
            Ut ||
            (G
              ? a.width > 0 &&
                Math.abs(a.width - h) <= 1 &&
                zt != null &&
                Math.abs(zt.width - h) <= 1 &&
                Math.abs(a.height - d) <= 1 &&
                Ir === p.height > Fr
              : Math.ceil(a.width) === h &&
                zt?.width === h &&
                Math.ceil(a.height) === p.height &&
                Ir === p.height > Fr);
        yt && g && Wt(!0);
        let v = [
          c.sessionId,
          p,
          ar ? { width: r.width, height: q ? Math.max(r.height, p.height) : p.height } : void 0,
          f,
          g,
        ];
        (0, Ea.default)(Kn.current, v) || ((Kn.current = v), oe(...v));
      };
      a();
      let o = new (e.ownerDocument.defaultView?.ResizeObserver ?? ResizeObserver)(() => {
        yt || G ? (0, Da.flushSync)(a) : a();
      });
      return (o.observe(e), o.observe(t), o.observe(n), () => o.disconnect());
    }, [K, zt, G, yt, Ut, q, Cr, Ir, ar, _, oe, c.sessionId, Fr, h]),
    (0, Q.useEffect)(() => {
      if (!mn) return;
      let e = Vn.current;
      if (e == null) return;
      let t = (e) => {
        e.preventDefault();
      };
      return (
        e.addEventListener(`wheel`, t, { capture: !0, passive: !1 }),
        () => {
          e.removeEventListener(`wheel`, t, !0);
        }
      );
    }, [mn]));
  let Ur = (0, Q.useEffectEvent)(() => {
    ((yn.current = { property: null, hasFocusedInput: !1, isControlEditing: !1, isDragging: !1 }),
      A?.({ property: null, isEditingControl: !1 }));
  });
  (0, Q.useEffect)(
    () => () => {
      (Ur(),
        Jn.current != null && globalThis.clearTimeout(Jn.current),
        Yn.current != null && globalThis.clearTimeout(Yn.current));
    },
    [],
  );
  let Wr = (0, Q.useEffectEvent)((e) => {
    if (bn) return;
    let t = K.view.dom,
      n = t.ownerDocument.activeElement;
    (!e || n == null || In.current !== n || t.contains(n)) &&
      (W ? t.focus({ preventScroll: !0 }) : K.focus());
  });
  (0, Q.useEffect)(() => {
    let e = w ?? K.view.dom.ownerDocument.defaultView;
    if (!a || e == null) return;
    let t = (t) => {
        e.requestAnimationFrame(() => {
          Wr(t);
        });
      },
      n = e.document.hasFocus(),
      r = () => {
        (t(n), (n = !0));
      };
    return (
      w?.addEventListener(`focus`, r),
      t(!1),
      () => {
        w?.removeEventListener(`focus`, r);
      }
    );
  }, [a, K, w]);
  let Gr = V.formatMessage({
      id: `browserSidebarCommentOverlay.comment`,
      defaultMessage: `Comment`,
      description: `Primary action for creating a new browser comment`,
    }),
    Kr = V.formatMessage({
      id: `browserSidebarCommentOverlay.scrollToBottom`,
      defaultMessage: `Scroll to bottom`,
      description: `Action replacing submit until the user has scrolled to the bottom of the initial annotation prompt provided by a webpage`,
    }),
    qr = V.formatMessage({
      id: `browserSidebarCommentOverlay.addTweaks`,
      defaultMessage: `Add`,
      description: `Primary action for adding browser tweaks`,
    }),
    Jr = V.formatMessage({
      id: `browserSidebarCommentOverlay.send.tooltip`,
      defaultMessage: `Send`,
      description: `Action label shown in the browser comment submit tooltip for sending a comment`,
    }),
    Yr = V.formatMessage({
      id: `browserSidebarCommentOverlay.delete`,
      defaultMessage: `Delete`,
      description: `Delete action for the browser comment overlay`,
    }),
    Xr = V.formatMessage({
      id: `browserSidebarCommentOverlay.tweak`,
      defaultMessage: `Adjust`,
      description: `Accessible label for opening browser design adjustment controls from the comment editor`,
    }),
    J =
      ye ??
      (rr &&
      (pt?.annotationControls?.controlsMode !== `replace` || pt.annotationControls.controls.length === 0)
        ? V.formatMessage({
            id: `browserSidebarCommentOverlay.tweaksPlaceholder`,
            defaultMessage: `Describe these changes...`,
            description: `Placeholder text for the browser tweaks editor comment field`,
          })
        : V.formatMessage({
            id: `browserSidebarCommentOverlay.placeholder`,
            defaultMessage: `Add a comment…`,
            description: `Placeholder text for the browser comment editor`,
          })),
    Y = c.target.mode === `edit` ? c.target.commentId : null,
    X = dr == null || dr,
    Zr = Y == null && !or && !cr && !Nt && dr == null,
    Qr = !hr && X && (mr || or || (!cr && !Nt)),
    $r = !Zr && !mr && !hr && (Nt || or || cr || !fr),
    ei = ur ? (rt == null ? lr != null || cr : !sn(lr, rt)) : he || cr,
    ti = W || It || (!Nt && !ei),
    ni = M(),
    ri = w?.document.body === document.body ? null : (w?.document.body ?? null),
    ii = Y == null && B && kn && Mn,
    ai = ni ? `⏎` : `Enter`,
    oi = ni ? `⌘⏎` : `Ctrl+Enter`,
    si = B ? ge : `saved`,
    ci = si === `direct` ? !ii : ii,
    ui = ci ? (0, $.jsx)(Ae, {}) : (0, $.jsx)(s, {});
  (rr && (Gr = ci ? Jr : qr), Nt && ((Gr = Kr), (ui = (0, $.jsx)(b, {}))));
  let di;
  Et && Mt
    ? (di = (0, $.jsx)(d, {
        id: `browserSidebarCommentOverlay.reviewPromptAndMetadataBeforeSubmitting`,
        defaultMessage: `Review the full prompt and metadata before submitting`,
        description: `Tooltip for the scroll-to-bottom action when both the webpage-supplied annotation prompt and metadata still need review`,
      }))
    : Mt
      ? (di = (0, $.jsx)(d, {
          id: `browserSidebarCommentOverlay.reviewMetadataBeforeSubmitting`,
          defaultMessage: `Review all metadata before submitting`,
          description: `Tooltip for the scroll-to-bottom action when only the webpage-supplied annotation metadata still needs review`,
        }))
      : Et &&
        (di = (0, $.jsx)(d, {
          id: `browserSidebarCommentOverlay.reviewPromptBeforeSubmitting`,
          defaultMessage: `Review the full prompt before submitting`,
          description: `Tooltip for the scroll-to-bottom action when only the webpage-supplied annotation prompt still needs review`,
        }));
  let fi = rt?.status === `queued` ? rt : null,
    pi = Y != null || q || fi != null,
    mi = or && !hr && (pi || U != null),
    hi = pi
      ? (0, $.jsx)(n, {
          color: `outline`,
          size: `composer`,
          tabIndex: mi ? void 0 : -1,
          onClick: () => {
            ie();
          },
          children: (0, $.jsx)(d, {
            id: `browserSidebarCommentOverlay.cancel`,
            defaultMessage: `Cancel`,
            description: `Cancel action for the browser comment overlay`,
          }),
        })
      : null,
    _i =
      un == null || et == null
        ? null
        : un.rows.flatMap((e) => {
            let t = la(et.declarations, e.property);
            return t == null ? [] : [{ row: e, value: t }];
          }),
    vi = (0, Q.useCallback)(
      (e) =>
        new Promise((t) => {
          let n = new FileReader(),
            r = e.name.trim().length > 0 ? e.name : void 0,
            i = Dt(e, window.electronBridge?.getPathForFile) ?? void 0;
          ((n.onload = (e) => {
            let n = e.target?.result;
            if (typeof n != `string`) {
              t(null);
              return;
            }
            t({ dataUrl: n, filename: r, localPath: i });
          }),
            (n.onerror = () => {
              t(null);
            }),
            n.readAsDataURL(e));
        }),
      [],
    ),
    yi = (0, Q.useCallback)(
      (e) => {
        z &&
          !W &&
          Promise.all(e.map((e) => vi(e))).then((e) => {
            let t = e.filter((e) => e != null);
            if (t.length === 0) return;
            let n = [...Pn.current, ...t];
            ((Pn.current = n), $e(n), zr(Nn.current, n));
          });
      },
      [z, W, vi, zr],
    );
  function bi(e, t = `button`) {
    if (Lt) return;
    let n = ha(Ln.current, Ee),
      r = gn({
        submitMode: e,
        submitSource: t,
        commentText: K.getText(),
        attachedImages: Pn.current,
        allowImageAttachments: z,
        allowEmptySubmit: he,
        baselineDesignGroup: rt,
        designEditorState: n,
        isDesignEditorOpen: q,
      });
    switch (r.type) {
      case `noop`:
        return;
      case `delete-design`:
        D?.(r.groupId);
        return;
      case `submit`:
        e === `direct` ? E(r.payload) : T(r.payload);
    }
  }
  let xi = si === `direct` ? `saved` : `direct`,
    Si = () => {
      if (Nt) {
        for (let e of [Et ? K.view.dom.parentElement : null, Mt ? xt.current : null])
          e?.scrollTo({ top: e.scrollHeight, behavior: Se ? `instant` : `smooth` });
        return;
      }
      bi(ii ? xi : si, `button`);
    };
  ((0, Q.useEffect)(() => {
    if (!z) return;
    let e = (e) => {
      yi(e);
    };
    return (
      K.addPastedImagesHandler(e),
      () => {
        K.removePastedImagesHandler(e);
      }
    );
  }, [yi, z, K]),
    Ge({
      enabled: fr && !W,
      getIsDictationStarting: pr,
      isDictationStarting: mr,
      isDictating: hr,
      isTranscribing: gr,
      startDictation: br,
      stopDictation: xr,
      keyboardEventTarget: w,
      shouldHandleDictation: () => K.view.dom.contains(K.view.dom.ownerDocument.activeElement),
    }),
    (0, Q.useEffect)(() => {
      if (w == null || Y != null) return;
      let e = () => {
          let e = w.document.activeElement;
          jn(e != null && K.view.dom.contains(e));
        },
        t = () => {
          w.requestAnimationFrame(e);
        },
        n = () => {
          jn(!1);
        };
      return (
        e(),
        w.document.addEventListener(`focusin`, t),
        w.document.addEventListener(`focusout`, t),
        w.addEventListener(`blur`, n),
        () => {
          (w.document.removeEventListener(`focusin`, t),
            w.document.removeEventListener(`focusout`, t),
            w.removeEventListener(`blur`, n));
        }
      );
    }, [K, Y, w]));
  let Ci = (e) => {
      if (e.defaultPrevented || e.nativeEvent.isComposing) return;
      let t = e.currentTarget.ownerDocument.defaultView,
        n =
          t != null &&
          (e.target instanceof t.HTMLInputElement || e.target instanceof t.HTMLTextAreaElement) &&
          e.target.dataset.browserSidebarDesignContentInput === `true`
            ? e.target
            : null;
      if (e.key === `Escape`) {
        if (t != null && e.target instanceof t.Node && !e.currentTarget.contains(e.target)) return;
        if (
          Array.from(e.currentTarget.querySelectorAll(`[aria-describedby]`)).some((t) =>
            t
              .getAttribute(`aria-describedby`)
              ?.split(/\s+/)
              .some(
                (t) => e.currentTarget.ownerDocument.getElementById(t)?.getAttribute(`role`) === `tooltip`,
              ),
          )
        ) {
          t != null && t !== window && xe();
          return;
        }
        if (
          e.nativeEvent.composedPath().includes(K.view.dom) &&
          K.view.someProp(`handleKeyDown`, (t) => t(K.view, e.nativeEvent))
        ) {
          (e.preventDefault(), e.stopPropagation());
          return;
        }
        if ((e.preventDefault(), e.stopPropagation(), n)) {
          n.blur();
          return;
        }
        ae();
        return;
      }
      let r = e.nativeEvent.composedPath();
      if (
        e.key === `Enter` &&
        !e.altKey &&
        !e.shiftKey &&
        (e.metaKey || e.ctrlKey) &&
        r.includes(e.currentTarget) &&
        (rr || kn || r.includes(K.view.dom))
      ) {
        if ((e.preventDefault(), e.stopPropagation(), e.repeat)) return;
        bi(Y != null && B && me ? `direct` : Y != null || !B ? `saved` : xi, `keyboard`);
        return;
      }
      if (
        rr &&
        e.key === `Enter` &&
        t != null &&
        e.target instanceof t.HTMLInputElement &&
        e.target.type === `text` &&
        e.currentTarget.contains(e.target)
      ) {
        e.preventDefault();
        return;
      }
    },
    Z = (e) => {
      if (W) return;
      let t = K.view.dom,
        n = t.ownerDocument.defaultView;
      n != null && e.target instanceof n.Node && (t.contains(e.target) || (e.preventDefault(), t.focus()));
    },
    wi = () => {
      ((qn.current = 0), On(!1));
    },
    Ti = () => {
      Jn.current != null && (globalThis.clearTimeout(Jn.current), (Jn.current = null));
    },
    Ei = () => {
      Yn.current != null && (globalThis.clearTimeout(Yn.current), (Yn.current = null));
    },
    Di = () => {
      pt != null && (Ti(), $t(!1), wn({ x: 0, y: 0 }), ct(!0), P?.(!0));
    },
    Oi = () => {
      if ((Ti(), ct(!1), rn(!1), P?.(!1), Zt(!1), !Er)) {
        $t(!1);
        return;
      }
      ($t(!0),
        (Jn.current = globalThis.setTimeout(() => {
          ($t(!1), (Jn.current = null));
        }, Qa)));
    },
    Ai = (e) => {
      if (q) {
        Oi();
        return;
      }
      if (Xt || Qt) return;
      (Ti(), $t(!1));
      let t = e.currentTarget.ownerDocument.defaultView;
      if (typeof t?.matchMedia == `function` && t.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        Di();
        return;
      }
      (Zt(!0),
        Di(),
        globalThis.setTimeout(() => {
          Zt(!1);
        }, Qa));
    },
    ji = (e) => {
      let t = on(e, rt, Nn.current.trim());
      ((Ln.current = e), tt(e), zr(Nn.current, Pn.current, e), O?.(t));
    },
    Mi = () => {
      let e = yn.current;
      A?.({
        property: e.property,
        isEditingControl: e.hasFocusedInput || e.isControlEditing || e.isDragging || e.property != null,
      });
    },
    Ni = (e) => {
      ((yn.current.isDragging = e), hn(e), Mi());
    },
    Pi = (e) => {
      ((yn.current.isControlEditing = e), Mi());
    },
    Fi = (e, t) => {
      ((yn.current.property = t?.type === `range` ? null : e), (yn.current.isDragging = e != null), Mi());
      let n = Fn.current?.getBoundingClientRect();
      if (e == null) {
        (Ei(),
          hn(!1),
          (Yn.current = globalThis.setTimeout(() => {
            (fn(null), vn(null), (Yn.current = null));
          }, $a)));
        return;
      }
      if ((Ei(), t == null || n == null)) {
        (hn(!1), fn(null));
        return;
      }
      if (t.type === `range`) {
        let r = t.parentElement?.getBoundingClientRect();
        r != null &&
          (fn(null),
          vn({
            callback: e,
            rect: { height: r.height, left: r.left - n.left, top: r.top - n.top, width: r.width },
          }),
          hn(!0));
        return;
      }
      vn(null);
      let r = t.closest(`[data-browser-sidebar-design-scrub-value-cell]`);
      if (r == null) {
        (hn(!1), fn(null));
        return;
      }
      let i = r.dataset.browserSidebarDesignScrubPeerProperty,
        a =
          i == null
            ? null
            : (Array.from(
                Rn.current?.querySelectorAll(`[data-browser-sidebar-design-scrub-property]`) ?? [],
              ).find((e) => e.dataset.browserSidebarDesignScrubProperty === i) ?? null),
        o = a == null || a === r ? [r] : [r, a],
        s = o.flatMap((n) => {
          let i = n.parentElement?.querySelector(`[data-browser-sidebar-design-scrub-label]`) ?? null,
            a = n.querySelector(`input`)?.parentElement ?? null,
            o = n.querySelector(`button`),
            s = n.dataset.browserSidebarDesignScrubProperty ?? e,
            c = i?.getBoundingClientRect(),
            l = a?.getBoundingClientRect(),
            u = o?.getBoundingClientRect(),
            d = n.getBoundingClientRect(),
            f =
              (n === r ? t.getAttribute(`aria-label`)?.trim() : null) ??
              i?.dataset.browserSidebarDesignScrubCloneLabel ??
              i?.textContent?.trim();
          return c == null || l == null || f == null || f.length === 0
            ? []
            : [
                {
                  controlRect: l,
                  label: f,
                  labelRect: c,
                  property: s,
                  resetRect: u,
                  rowBottom: Math.max(c.bottom, d.bottom, u?.bottom ?? -1 / 0),
                  rowLeft: Math.min(c.left, d.left, u?.left ?? 1 / 0),
                  rowRight: Math.max(c.right, d.right, u?.right ?? -1 / 0),
                  rowTop: Math.min(c.top, d.top, u?.top ?? 1 / 0),
                },
              ];
        });
      if (s.length !== o.length) {
        (hn(!1), fn(null));
        return;
      }
      let c = Math.min(...s.map((e) => e.rowLeft)),
        l = Math.max(...s.map((e) => e.rowRight)),
        u = Math.min(...s.map((e) => e.rowTop)),
        d = Math.max(...s.map((e) => e.rowBottom));
      (hn(!0),
        fn({
          rect: { height: d - u, left: c - n.left, top: u - n.top, width: l - c },
          rows: s.map((e) => ({
            controlRect: {
              height: e.controlRect.height,
              left: e.controlRect.left - c,
              top: e.controlRect.top - u,
              width: e.controlRect.width,
            },
            label: e.label,
            labelRect: {
              height: e.labelRect.height,
              left: e.labelRect.left - c,
              top: e.labelRect.top - u,
              width: e.labelRect.width,
            },
            property: e.property,
            resetRect:
              e.resetRect == null
                ? void 0
                : {
                    height: e.resetRect.height,
                    left: e.resetRect.left - c,
                    top: e.resetRect.top - u,
                    width: e.resetRect.width,
                  },
          })),
        }));
    },
    Li = gt,
    Ri = (e) => {
      At(e, { onAtMention: er.handleMentionEvent, onSkillMention: tr.handleMentionEvent });
    },
    zi = u != null && !q,
    Bi = (e) => {
      Xn.current = !1;
      let t = ua(e);
      if ((!q && !zi) || !e.isPrimary || e.button !== 0 || Vn.current == null || t == null) return;
      let n = Vn.current.getBoundingClientRect(),
        r = Cr ? (Fn.current?.getBoundingClientRect().height ?? n.height) : n.height,
        i = e.currentTarget.ownerDocument.defaultView,
        a = q ? 0 : Ar;
      ((Zn.current = {
        baseLeft: n.left - Sn.x,
        baseTop: n.bottom - r - a - Sn.y,
        captureTarget: t,
        cardHeight: r + a,
        cardWidth: n.width,
        dragged: !1,
        offsetX: Sn.x,
        offsetY: Sn.y,
        pointerId: e.pointerId,
        reportsRepositionInteraction: u != null,
        startClientX: e.clientX,
        startClientY: e.clientY,
        viewportHeight: i?.innerHeight ?? 1 / 0,
        viewportWidth: i?.innerWidth ?? 1 / 0,
      }),
        u != null && R?.(!0),
        t.setPointerCapture(e.pointerId));
    },
    Hi = (e) => {
      let t = Zn.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = e.clientX - t.startClientX,
        r = e.clientY - t.startClientY;
      if (!t.dragged && Math.hypot(n, r) <= Za) return;
      ((t.dragged = !0), (Xn.current = !0));
      let i = t.offsetX + n,
        a = t.offsetY + r,
        o = Xa - t.baseLeft,
        s = t.viewportWidth - t.cardWidth - Xa - t.baseLeft,
        c = Xa - t.baseTop,
        l = t.viewportHeight - t.cardHeight - Xa - t.baseTop;
      (e.preventDefault(),
        wn({ x: s < o ? i : Math.min(Math.max(i, o), s), y: l < c ? a : Math.min(Math.max(a, c), l) }));
    },
    Ui = (e) => {
      let t = Zn.current;
      t?.pointerId === e.pointerId &&
        ((Zn.current = null),
        t.reportsRepositionInteraction && R?.(!1),
        t.captureTarget.hasPointerCapture(e.pointerId) && t.captureTarget.releasePointerCapture(e.pointerId));
    },
    Wi = `translate3d(${Sn.x}px, ${Sn.y}px, 0px)`;
  return (0, $.jsx)(`form`, {
    className: `pointer-events-none relative flex h-full w-full flex-col overflow-visible bg-transparent text-default`,
    "aria-busy": W,
    style: { ...Vt, transform: q ? void 0 : Wi, top: jr?.minTop, height: Pr },
    onFocusCapture: (e) => {
      In.current = e.target;
    },
    onKeyDownCapture: Ci,
    onSubmit: (e) => {
      if ((e.preventDefault(), Y == null)) {
        bi(si, `button`);
        return;
      }
      bi(`saved`, `button`);
    },
    children: (0, $.jsxs)(`div`, {
      ref: Fn,
      className: L(ka, jr == null ? `absolute` : `relative mt-auto shrink-0`, Cr && `justify-end`),
      style: { top: jr == null ? Ar : void 0, height: Nr },
      children: [
        (0, $.jsx)(`div`, {
          className: Oa,
          style: { height: Ar },
          children:
            nr != null && Ar > 0
              ? (0, $.jsxs)(`div`, {
                  "data-browser-comment-editor-tray-surface": !0,
                  className: `pointer-events-auto max-h-full w-full`,
                  children: [
                    nr === `at`
                      ? (0, $.jsx)(jt, {
                          className: `max-h-full w-full`,
                          chromeVariant: `default`,
                          hostId: pe,
                          keyboardEventTarget: w,
                          onAddContext: er.addMention,
                          onRequestClose: er.closeAutocomplete,
                          onUpdateSelectedMention: er.setSelectedMention,
                          query: er.ui?.query ?? ``,
                          fileSearchRootPaths: $n ?? [],
                          skillRoots: $n,
                          source: er.ui?.source ?? null,
                        })
                      : null,
                    nr === `skill`
                      ? (0, $.jsx)(Ye, {
                          className: `max-h-full w-full`,
                          query: tr.ui?.query ?? ``,
                          keyboardEventTarget: w,
                          onUpdateSelectedMention: tr.setSelectedMention,
                          onAddMention: tr.addMention,
                          onRequestClose: tr.closeAutocomplete,
                          cwd: c.cwd ?? void 0,
                          roots: $n,
                          chromeVariant: `default`,
                        })
                      : null,
                  ],
                })
              : null,
        }),
        (0, $.jsxs)(ki, {
          ref: Rn,
          className: L(
            `relative max-w-full shrink-0`,
            { "w-[344px]": ar, "w-[294px]": !ar },
            Dn && `bg-surface-elevated ring-ring`,
            mn ? `opacity-0 duration-relaxed` : `duration-basic`,
          ),
          bodyRef: zn,
          bodyHeight: Cr || (!q && !Dr) ? kr : void 0,
          metadataHeader: yt
            ? (0, $.jsx)(
                gi,
                {
                  isSurfaceOverflowing: Ir,
                  isVisible: l && !W && Ut,
                  maxHeight: G ? (Pr ?? Mr) - (Kt ?? kr) : void 0,
                  metadataGroups: _t,
                  onExpandedSizeChange: Ht,
                  onScrollReviewStateChange: Tt,
                  onToggle: () => K.focus(),
                  scrollReviewState: G ? wt : `complete`,
                  tooltipPortalContainer: ri,
                  viewportRef: xt,
                  windowWidth: h,
                },
                c.sessionId,
              )
            : null,
          viewportRef: Vn,
          viewportMaxHeight: Ir ? Mr : void 0,
          viewportTransform: q ? Wi : void 0,
          isRevealingPageComment: W,
          style: { transition: Se || (yt && !Ut) ? `none` : void 0 },
          onDragEnter: (e) => {
            z &&
              Qe(e.dataTransfer) &&
              (e.preventDefault(),
              e.stopPropagation(),
              (e.dataTransfer.dropEffect = `copy`),
              (qn.current += 1),
              On(!0));
          },
          onDragOver: (e) => {
            z &&
              Qe(e.dataTransfer) &&
              (e.preventDefault(), e.stopPropagation(), (e.dataTransfer.dropEffect = `copy`), Dn || On(!0));
          },
          onDragLeave: (e) => {
            z &&
              Qe(e.dataTransfer) &&
              (e.preventDefault(),
              e.stopPropagation(),
              (qn.current = Math.max(0, qn.current - 1)),
              qn.current === 0 && On(!1));
          },
          onDrop: (e) => {
            if (!z || !Qe(e.dataTransfer)) return;
            (e.preventDefault(), e.stopPropagation());
            let t = ze(e.dataTransfer);
            (t.length > 0 && yi(t), wi());
          },
          onClickCapture: (e) => {
            Xn.current && e.detail > 0 && ((Xn.current = !1), e.preventDefault(), e.stopPropagation());
          },
          onLostPointerCapture: Ui,
          onPointerCancel: Ui,
          onPointerDown: Bi,
          onPointerMove: Hi,
          onPointerUp: Ui,
          children: [
            Li
              ? (0, $.jsx)(n, {
                  "aria-label": Xr,
                  "data-browser-sidebar-design-editor-toggle": !0,
                  className: `absolute top-2 left-3 z-10`,
                  color: q ? `secondary` : `ghost`,
                  size: `composer`,
                  disabled: W,
                  title: Xr,
                  type: `button`,
                  uniform: !0,
                  onClick: Ai,
                  children: (0, $.jsx)(`span`, {
                    className: ia.DesignEditorEntry,
                    "data-animation-state": q ? void 0 : Qt ? `entering` : Xt ? `exiting` : `visible`,
                    "data-browser-sidebar-design-editor-entry-enter": !q && Qt ? `` : void 0,
                    children: (0, $.jsx)(vt, { className: `icon-sm origin-center` }),
                  }),
                })
              : null,
            wr
              ? (0, $.jsx)(`div`, {
                  "data-browser-comment-editor-attachment-row": !0,
                  className: L(
                    `absolute right-3 flex gap-1.5 overflow-x-auto pb-1`,
                    Ua,
                    gt ? `left-12` : `left-3`,
                  ),
                  children: We.map((e, t) =>
                    (0, $.jsx)(
                      Xe,
                      {
                        src: e.dataUrl,
                        filename: e.filename,
                        previewPortalContainer: w?.document.body ?? null,
                        onPreviewCloseAutoFocus: En,
                        onPreviewOpenChange: Tn,
                        onRemove: () => {
                          let e = Pn.current.filter((e, n) => n !== t);
                          ((Pn.current = e), $e(e), zr(Nn.current, e));
                        },
                      },
                      `${e.filename ?? `image`}-${t}`,
                    ),
                  ),
                })
              : null,
            sr
              ? (0, $.jsx)(`div`, {
                  className: L(`min-w-0 pe-3`, gt ? `ps-12` : `ps-3`, wr ? `pt-24` : `pt-2`),
                  children: (0, $.jsx)(Cn, {
                    anchors: p,
                    onSelectionHoverChange: j,
                    onRemove: c.target.mode === `create` ? N : void 0,
                  }),
                })
              : null,
            q && pt != null
              ? (0, $.jsxs)(`div`, {
                  "data-browser-comment-design-editor-stack": !0,
                  className: L(Ya, wr ? Ga : `pt-2`, nn ? `gap-0` : `gap-2`),
                  children: [
                    (0, $.jsx)(`div`, {
                      ref: Vr,
                      "data-browser-comment-design-prompt-shell": !0,
                      className: L(
                        `translate-y-0.5 transition-[height,min-height,max-height] duration-[140ms] ease-enter-snappy motion-reduce:transition-none`,
                        W && `transition-none`,
                        Li && `ms-8`,
                        nn ? L(qa, !Ce && `max-h-[84px]`) : `h-7 min-h-0 overflow-hidden`,
                      ),
                      children: (0, $.jsx)(`div`, {
                        className: L(`min-h-0`, !nn && `h-full`),
                        children: (0, $.jsx)(Ii, {
                          className: L(
                            Pt,
                            nn && (Ce ? Ja : `!h-auto !max-h-[84px] overflow-y-auto pb-2`),
                            !nn &&
                              `!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap`,
                          ),
                          composerController: K,
                          handoff: Re,
                          isRevealing: W,
                          isVisible: l,
                          scrollReviewState: G ? Me : `complete`,
                          onScrollReviewStateChange: Ne,
                          disableAutoFocus: !a,
                          ariaLabel: ve,
                          minHeight: `1.5rem`,
                          placeholder: J,
                          onSuggestionHandler: Ri,
                          onSubmit: () => bi(si, `keyboard`),
                        }),
                      }),
                    }),
                    (0, $.jsx)(`div`, {
                      className: `contents`,
                      inert: W,
                      onFocusCapture: (e) => {
                        ((yn.current.hasFocusedInput = e.target.matches(
                          `input:not([type='range']), textarea, select`,
                        )),
                          Mi());
                      },
                      onBlurCapture: () => {
                        ((yn.current.hasFocusedInput = !1), Mi());
                      },
                      children: (0, $.jsx)(
                        Bn,
                        {
                          canEditAnnotationControls: Ce && Ee,
                          defaultExpandedSpacingGroups: S,
                          dropdownPortalContainer: w?.document.body ?? null,
                          editorState: pt,
                          isEditable: !0,
                          onControlDragActiveChange: Ni,
                          onControlEditingActiveChange: Pi,
                          onScrubActiveChange: Fi,
                          onUpdate: ji,
                        },
                        pt.id,
                      ),
                    }),
                  ],
                })
              : (0, $.jsx)($.Fragment, {
                  children: (0, $.jsx)(`div`, {
                    "data-browser-comment-editor-input-shell": !0,
                    inert: hr || gr,
                    role: `presentation`,
                    className: L(
                      (hr || gr) && `invisible`,
                      Dr
                        ? L(
                            `min-w-0`,
                            or ? `pb-[52px]` : `pb-2`,
                            gt && !Xt ? (Or ? L(`ps-12`, Ka) : `ps-12 pe-4`) : Or ? L(`ps-4`, Ka) : `px-4`,
                            wr && !sr ? Ga : `pt-2`,
                          )
                        : L(
                            Rt,
                            W && `transition-none`,
                            gt && !Xt ? `left-12` : `left-4`,
                            wr ? Wa : `top-2`,
                            Tr
                              ? gt && !Xt
                                ? `bottom-[52px] w-[calc(100%-64px)]`
                                : `bottom-[52px] w-[calc(100%-32px)]`
                              : gt && !Xt
                                ? `bottom-2 w-[calc(100%-92px)]`
                                : `bottom-2 w-[calc(100%-60px)]`,
                          ),
                    ),
                    onMouseDown: Z,
                    children: (0, $.jsx)(`div`, {
                      className: L(
                        Dr
                          ? L(`min-h-0`, sr && Or ? `-translate-y-0.5` : `translate-y-0.5`)
                          : `h-full min-h-0 translate-y-0.5`,
                      ),
                      children: (0, $.jsx)(Ii, {
                        className: L(
                          Pt,
                          Dr && (Ce ? Ha : `!max-h-[180px] overflow-y-auto`),
                          !or &&
                            !wr &&
                            `!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap`,
                        ),
                        composerController: K,
                        handoff: Re,
                        isRevealing: W,
                        isVisible: l,
                        scrollReviewState: G ? Me : `complete`,
                        onScrollReviewStateChange: Ne,
                        disableAutoFocus: !a,
                        ariaLabel: ve,
                        minHeight: `1.5rem`,
                        placeholder: J,
                        onSuggestionHandler: Ri,
                        onSubmit: Y == null ? () => bi(si, `keyboard`) : () => bi(`saved`, `keyboard`),
                      }),
                    }),
                  }),
                }),
            (0, $.jsx)(`span`, {
              ref: (e) => {
                ((Un.current = e), e != null && G && Br(Nn.current));
              },
              "aria-hidden": `true`,
              className: Aa,
              style: { fontSize: `var(--codex-chat-font-size)` },
              children: He,
            }),
            q
              ? (0, $.jsx)(`div`, {
                  "data-browser-sidebar-design-footer-divider": !0,
                  className: `pointer-events-none absolute inset-x-0 bottom-12 border-t border-border/60`,
                })
              : null,
            (0, $.jsxs)(`div`, {
              "data-browser-comment-editor-footer-actions": !0,
              "aria-hidden": !mi,
              className: L(
                Ft,
                `justify-between gap-1.5`,
                mi ? `scale-100 opacity-100` : `invisible pointer-events-none scale-95 opacity-0`,
              ),
              children: [
                (0, $.jsxs)(`div`, {
                  className: L(`flex min-w-0 items-center gap-1.5`, Y == null && (Qr ? `me-16` : `me-7`)),
                  children: [
                    Y != null && re != null
                      ? (0, $.jsx)(n, {
                          "aria-label": Yr,
                          color: `ghostMuted`,
                          size: `composer`,
                          onClick: () => {
                            re(Y);
                          },
                          uniform: !0,
                          children: (0, $.jsx)(Bt, { className: `icon-sm` }),
                        })
                      : Y == null && fi != null && D != null
                        ? (0, $.jsx)(n, {
                            "aria-label": Yr,
                            color: `ghostMuted`,
                            size: `composer`,
                            onClick: () => {
                              D(fi.id);
                            },
                            uniform: !0,
                            children: (0, $.jsx)(Bt, { className: `icon-sm` }),
                          })
                        : null,
                    Y == null ? hi : null,
                    U == null
                      ? null
                      : (0, $.jsx)(Ji, { originalText: U.text, isRevealing: W, tooltipPortalContainer: ri }),
                  ],
                }),
                Y == null
                  ? null
                  : (0, $.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-1.5`,
                      children: [
                        Qr
                          ? (0, $.jsx)(St, {
                              hasDictationShortcut: !0,
                              isVisible: X,
                              isStarting: mr,
                              isTranscribing: gr,
                              canRetryDictation: _r,
                              disabled: dr == null,
                              retryDictation: vr,
                              startDictation: br,
                              stopDictation: xr,
                              tooltipPortalContainer: ri,
                            })
                          : null,
                        hi,
                        (0, $.jsx)(n, {
                          color: `primary`,
                          disabled: Lt || !ei,
                          size: `composer`,
                          type: `submit`,
                          children: (0, $.jsx)(d, {
                            id: `browserSidebarCommentOverlay.save`,
                            defaultMessage: `Save`,
                            description: `Primary action for editing an existing browser comment`,
                          }),
                        }),
                      ],
                    }),
              ],
            }),
            Cr
              ? (0, $.jsx)(`div`, {
                  "data-browser-comment-editor-dictation-overlay": !0,
                  className: `absolute inset-0 z-20 flex flex-col justify-center bg-surface-elevated-secondary`,
                  children: (0, $.jsx)(kt, {
                    transcriptionAction: Sr,
                    waveformCanvasRef: yr,
                    stopDictation: xr,
                    noBottomMargin: !0,
                    tooltipPortalContainer: ri,
                  }),
                })
              : null,
            Y == null
              ? (0, $.jsxs)(`div`, {
                  className: `absolute right-2 bottom-2 flex items-center gap-2`,
                  children: [
                    Qr
                      ? (0, $.jsx)(St, {
                          hasDictationShortcut: !0,
                          isVisible: X,
                          isStarting: mr,
                          isTranscribing: gr,
                          canRetryDictation: _r,
                          disabled: W || Zr,
                          retryDictation: vr,
                          startDictation: br,
                          stopDictation: xr,
                          tooltipPortalContainer: ri,
                        })
                      : null,
                    $r
                      ? (0, $.jsx)(Oe, {
                          cloneCustomTrigger: G,
                          delayOpen: Nt,
                          side: G ? `right` : `top`,
                          sideOffset: 4,
                          portalContainer: ri,
                          open: rr && !Nt ? !1 : void 0,
                          tooltipContent:
                            di ??
                            (0, $.jsxs)(`div`, {
                              className: `space-y-1`,
                              children: [
                                (0, $.jsx)(pa, {
                                  keysLabel: ai,
                                  children: si === `direct` ? (0, $.jsx)(fa, {}) : (0, $.jsx)(da, {}),
                                }),
                                B
                                  ? (0, $.jsx)(pa, {
                                      keysLabel: oi,
                                      children: si === `direct` ? (0, $.jsx)(da, {}) : (0, $.jsx)(fa, {}),
                                    })
                                  : null,
                              ],
                            }),
                          children: (0, $.jsx)(n, {
                            "aria-label": Gr,
                            color: Nt ? `secondary` : `primary`,
                            "data-browser-comment-submit": !0,
                            radius: `full`,
                            size: _e,
                            disabled: ti,
                            type: `button`,
                            uniform: !0,
                            onMouseDown: (e) => {
                              e.preventDefault();
                            },
                            onClick: Si,
                            children: ui,
                          }),
                        })
                      : null,
                  ],
                })
              : null,
          ],
        }),
        _n != null && pt != null ? (0, $.jsx)(Qi, { ..._n, editorState: pt }) : null,
        un != null && _i != null && _i.length === un.rows.length
          ? (0, $.jsxs)(`div`, {
              "aria-hidden": `true`,
              className: `pointer-events-none absolute z-20`,
              "data-browser-comment-design-scrub-clone": !0,
              style: { height: un.rect.height, left: un.rect.left, top: un.rect.top, width: un.rect.width },
              children: [
                (0, $.jsx)(`span`, {
                  className: `absolute -top-2 -right-3 -bottom-2 -left-3 rounded-xl bg-surface-elevated-secondary shadow-md ring-1 ring-border-subtle`,
                }),
                _i.map(({ row: e, value: t }) =>
                  (0, $.jsxs)(
                    Q.Fragment,
                    {
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `absolute flex min-w-0 items-center text-sm text-secondary`,
                          style: {
                            height: e.labelRect.height,
                            left: e.labelRect.left,
                            top: e.labelRect.top,
                            width: e.labelRect.width,
                          },
                          children: (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: e.label }),
                        }),
                        e.resetRect == null
                          ? null
                          : (0, $.jsx)(`span`, {
                              className: `absolute flex items-center justify-center text-secondary`,
                              style: {
                                height: e.resetRect.height,
                                left: e.resetRect.left,
                                top: e.resetRect.top,
                                width: e.resetRect.width,
                              },
                              children: (0, $.jsx)(Gt, { className: `icon-2xs` }),
                            }),
                        (0, $.jsxs)(`span`, {
                          className: `absolute flex min-w-0 items-center gap-1 rounded-lg border border-ring bg-primary-soft px-3 text-default shadow-sm ring-1 ring-ring`,
                          style: {
                            height: e.controlRect.height,
                            left: e.controlRect.left,
                            top: e.controlRect.top,
                            width: e.controlRect.width,
                          },
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `min-w-0 flex-1 truncate text-start font-mono text-xs text-default`,
                              dir: `ltr`,
                              children: t.value,
                            }),
                            t.unit == null
                              ? null
                              : (0, $.jsx)(`span`, {
                                  className: `shrink-0 font-mono text-xs text-tertiary`,
                                  children: t.unit,
                                }),
                          ],
                        }),
                      ],
                    },
                    e.property,
                  ),
                ),
              ],
            })
          : null,
      ],
    }),
  });
}
function la(e, t) {
  let n = e.find((e) => e.property === t);
  if (n == null) return null;
  let r = /^(-?\d+(?:\.\d+)?)px$/.exec(n.value.trim());
  return r == null ? { value: n.value } : { unit: `px`, value: r[1] };
}
function ua(e) {
  let t = e.target,
    n = e.currentTarget.ownerDocument.defaultView;
  return e.defaultPrevented ||
    n == null ||
    !(t instanceof n.Element) ||
    !e.currentTarget.contains(t) ||
    (e.pointerType === `touch` &&
      t.closest(
        `[data-browser-comment-metadata], [data-browser-sidebar-design-scroll-container], [data-browser-comment-annotation-selections], [data-browser-comment-editor-attachment-row]`,
      ) != null) ||
    t.closest(
      [
        `a`,
        `button:not([data-browser-sidebar-design-drag-handle])`,
        `input`,
        `select`,
        `textarea`,
        `[contenteditable='true']`,
        `[data-browser-comment-annotation-selection]`,
        `[data-browser-sidebar-design-no-drag]`,
        `[role='button']`,
        `[role='combobox']`,
        `[role='menuitem']`,
      ].join(`,`),
    ) != null
    ? null
    : (t.closest(`button[data-browser-sidebar-design-drag-handle]`) ?? e.currentTarget);
}
function da() {
  let e = (0, Ta.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(d, {
          id: `browserSidebarCommentOverlay.add.tooltip`,
          defaultMessage: `Add`,
          description: `Action label shown in the browser comment submit tooltip for saving a pending comment`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function fa() {
  let e = (0, Ta.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(d, {
          id: `browserSidebarCommentOverlay.send.tooltip`,
          defaultMessage: `Send`,
          description: `Action label shown in the browser comment submit tooltip for sending a comment`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function pa(e) {
  let t = (0, Ta.c)(7),
    { children: n, keysLabel: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = (0, $.jsx)(`span`, { children: n })), (t[0] = n), (t[1] = i));
  let a;
  t[2] === r ? (a = t[3]) : ((a = (0, $.jsx)(p, { keysLabel: r })), (t[2] = r), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, $.jsxs)(`div`, { className: `flex items-center justify-between gap-2`, children: [i, a] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function ma(e) {
  return e.body.length > 0 ? e.body : (e.designChange?.comment ?? ``);
}
function ha(e, t) {
  return e == null || t ? e : { ...e, annotationControls: void 0, annotationControlChanges: void 0 };
}
function ga(e) {
  return e.designChange == null
    ? null
    : e.designChange.comment != null || e.body.trim().length === 0
      ? e.designChange
      : { ...e.designChange, comment: e.body };
}
function _a(e) {
  return Math.max(e.declarations.length + (e.text == null ? 0 : 1), 1);
}
function va(e) {
  return Lt(e).map((e, t) => {
    switch (e.type) {
      case `text`:
        return e.text;
      case `mention`:
        return (0, $.jsx)(`strong`, { className: Na, children: e.label }, `comment-preview-mention-${t}`);
    }
  });
}
function ya(e) {
  switch (e) {
    case `start`:
      return `justify-start`;
    case `end`:
      return `justify-end`;
    case `center`:
      return `justify-center`;
  }
}
function ba(e, t, n, r, i) {
  let a = e.trim();
  if (a.length === 0) return !1;
  if (t) return !0;
  let o = wa(e, n, i),
    s = Sa(r, i);
  return s == null || o == null ? a.length >= Ba : o + za > s;
}
function xa(e, t, n, r) {
  if (e.trim().length === 0) return !1;
  if (/\r?\n/.test(e)) return !0;
  let i = wa(e, t, r),
    a = Ca(n, r);
  return a == null || i == null ? !1 : i + Va > a;
}
function Sa(e, t) {
  if (e == null) return null;
  let n = t ? Math.min(e.offsetWidth, 294) : e.getBoundingClientRect().width;
  if (n === 0) return null;
  let r = e.querySelector(`[data-browser-comment-submit]`),
    i = (t ? r?.offsetWidth : r?.getBoundingClientRect().width) ?? Pa,
    a = e.querySelector(`[data-browser-sidebar-design-editor-toggle]`) == null ? 0 : Ia;
  return n - La - Ra - a - i - Fa;
}
function Ca(e, t) {
  if (e == null) return null;
  let n = t ? e.offsetWidth : e.getBoundingClientRect().width;
  return n === 0 ? null : n;
}
function wa(e, t, n) {
  return t == null
    ? null
    : (t.textContent !== e && (t.textContent = e), n ? t.offsetWidth : t.getBoundingClientRect().width);
}
var Ta,
  Ea,
  Q,
  Da,
  $,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a;
function eo() {
  return (eo = e(() => {
    ((Ta = je()),
      P(),
      (Ea = t(u(), 1)),
      C(),
      Te(),
      vn(),
      hn(),
      se(),
      (Q = Fe()),
      (Da = Ne()),
      B(),
      st(),
      kn(),
      It(),
      ci(),
      Nt(),
      ui(),
      Oi(),
      Mi(),
      Bi(),
      qi(),
      Zi(),
      ut(),
      et(),
      ft(),
      Ue(),
      K(),
      gt(),
      He(),
      tt(),
      Be(),
      H(),
      E(),
      _(),
      _e(),
      F(),
      z(),
      m(),
      Wt(),
      lt(),
      Ht(),
      N(),
      rt(),
      R(),
      q(),
      W(),
      yt(),
      wt(),
      dt(),
      pt(),
      De(),
      ta(),
      aa(),
      ($ = G()),
      (Oa = `pointer-events-none absolute inset-x-0 bottom-full flex flex-col justify-end pb-2`),
      (ka = `pointer-events-none inset-x-0 flex flex-col overflow-visible bg-transparent`),
      (Aa = `pointer-events-none absolute top-0 left-0 whitespace-pre text-base leading-normal font-sans opacity-0`),
      (ja = `box-border flex h-full w-fit max-w-full overflow-hidden rounded-[22px] bg-surface-elevated-secondary px-4 shadow-md ring-1 ring-border-subtle`),
      (Ma = `min-w-0 max-w-full text-base leading-6 font-sans text-default`),
      (Na = `font-semibold`),
      (Pa = 28),
      (Fa = 8),
      (Ia = 32),
      (La = 16),
      (Ra = 8),
      (za = 12),
      (Ba = 40),
      (Va = 4),
      (Ha = `!max-h-42 overflow-y-auto`),
      (Ua = `top-3`),
      (Wa = `top-24`),
      (Ga = `pt-24`),
      (Ka = `pe-[52px]`),
      (qa = `min-h-[48px] overflow-hidden`),
      (Ja = `!h-auto !max-h-44 overflow-y-auto pb-2`),
      (Ya = `flex min-h-0 flex-col px-4 pb-12`),
      (Xa = 8),
      (Za = 4),
      (Qa = 90),
      ($a = 150));
  }))();
}
export { vn as i, eo as n, _n as r, oa as t };
//# sourceMappingURL=annotation-comment-editor-card-957f5525f8bc.js.map
