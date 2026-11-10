import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  $wt as i,
  Axt as a,
  CH as o,
  CU as s,
  Cgt as c,
  Cv as l,
  DB as u,
  Dgt as d,
  Dk as f,
  Dwt as p,
  Ev as m,
  Ext as h,
  FBt as g,
  FNt as _,
  FTt as v,
  ITt as y,
  LNt as b,
  MB as x,
  MNt as S,
  NFt as C,
  NL as w,
  NNt as T,
  Nk as E,
  Nwt as D,
  OB as O,
  OH as k,
  Owt as A,
  PBt as j,
  Pk as M,
  Qst as N,
  Rrt as ee,
  TY as P,
  Tv as te,
  Twt as ne,
  Txt as F,
  Uz as re,
  VJ as ie,
  Vrt as I,
  Wz as ae,
  XO as L,
  XOt as R,
  Xj as oe,
  Y3 as se,
  YO as z,
  Yst as ce,
  Z3 as B,
  ZSt as le,
  b2 as ue,
  ck as de,
  dM as fe,
  gxt as pe,
  hxt as me,
  iCt as he,
  iFt as V,
  jB as H,
  jFt as ge,
  jwt as _e,
  kH as ve,
  kJ as ye,
  kk as be,
  kxt as xe,
  lB as Se,
  m7 as Ce,
  mV as we,
  nB as Te,
  oTt as Ee,
  okt as De,
  qrt as Oe,
  rB as U,
  rk as ke,
  sct as Ae,
  tk as je,
  tkt as W,
  uB as G,
  wv as K,
  y2 as Me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ar as Ne,
  $i as Pe,
  A3t as Fe,
  CI as Ie,
  CMr as Le,
  Cd as Re,
  Cjr as ze,
  D3t as Be,
  Fm as q,
  Gu as Ve,
  Hm as He,
  Ju as Ue,
  KBr as We,
  Ku as Ge,
  Li as Ke,
  Lm as qe,
  NNn as Je,
  PNn as Ye,
  QZ as Xe,
  Qar as Ze,
  Qi as Qe,
  Ri as $e,
  Sd as et,
  T3t as tt,
  Um as nt,
  W3n as rt,
  Whr as it,
  Wu as at,
  XAr as ot,
  Xu as st,
  Yh as ct,
  ZAr as lt,
  ZZ as ut,
  Zu as dt,
  ah as ft,
  bd as pt,
  dd as mt,
  fd as ht,
  fxr as gt,
  gTr as _t,
  gxr as vt,
  hTr as yt,
  iTn as bt,
  ih as xt,
  k3t as St,
  nh as Ct,
  oTn as wt,
  pd as J,
  vd as Tt,
  wI as Et,
  xjr as Dt,
  xln as Ot,
  yMr as kt,
  yd as At,
  z3n as jt,
} from "./app-initial-ad16eaadf81f.js";
import {
  Bu as Mt,
  Em as Nt,
  Fu as Pt,
  Iu as Ft,
  Ku as It,
  Lu as Lt,
  Ru as Rt,
  Tm as zt,
  Vu as Bt,
  qu as Vt,
  zu as Ht,
} from "./app-primary-3e00728c2a4c.js";
import { n as Ut, t as Wt } from "./arrow-rotate-ccw-714acacf5c21.js";
import { o as Gt, t as Kt } from "./style-526fd4f4e29c.js";
import {
  a as qt,
  c as Jt,
  i as Yt,
  n as Xt,
  o as Zt,
  r as Qt,
  s as $t,
  t as en,
} from "./design-editor-state-d716163b60e0.js";
import { n as tn, t as nn } from "./range-slider-d313bf266f03.js";
function rn({ baselineDesignGroup: e, commentText: t, designEditorState: n, isDesignSubmissionMode: r }) {
  let i = t.trim();
  return {
    designDraft: !r || n == null ? null : an(n, e, i),
    hasCommentText: i.length > 0,
    trimmedCommentText: i,
  };
}
function an(e, t, n) {
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
    s = cn(e.text, t?.text);
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
      provenance: ln(i, e.provenance, t?.provenance ?? []),
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
function on(e, t) {
  return e == null || t == null
    ? e === t
    : (e.comment ?? ``) !== (t.comment ?? ``) ||
        !sn(e.text, t.text) ||
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
function sn(e, t) {
  return e == null || t == null ? e === t : e.previousValue === t.previousValue && e.value === t.value;
}
function cn(e, t) {
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
function ln(e, t, n) {
  let r = new Map(n.map((e) => [e.property, e]));
  for (let e of t) r.set(e.property, e);
  return e.flatMap((e) => {
    let t = r.get(e.property);
    return t == null ? [] : [t];
  });
}
function un(e, t, n, r, i, a, o, s) {
  let c = n.trim(),
    l = dn(c, o, s);
  switch (e) {
    case `create`:
      return h(n, r) && a.length === 0 && l;
    case `edit`:
      return c === t.trim() && pn(i, a) && l;
    case `design`:
      return o == null ? c.length === 0 && l : l;
  }
}
function dn(e, t, n) {
  if (n == null) return t == null;
  let r = an(n, t, e);
  return t == null
    ? r == null ||
        (r.declarations.length === 0 &&
          r.text == null &&
          r.annotationControlChanges?.every((e) => {
            let t = n.annotationControls?.controls.find((t) => t.callback === e.callback);
            return e.previousValue == null && t != null && e.value === yt(t);
          }) === !0)
    : on(r, t);
}
function fn({ baselineDesignGroup: e, designDraft: t, designEditorState: n, isDesignEditorOpen: r }) {
  return n != null && (r || t != null || e != null);
}
function pn(e, t) {
  return (
    e.length === t.length &&
    e.every((e, n) => {
      let r = t[n];
      return r != null && e.dataUrl === r.dataUrl && e.filename === r.filename && e.localPath === r.localPath;
    })
  );
}
function mn() {
  return (mn = e(() => {
    (_t(), F());
  }))();
}
function hn({
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
  let l = rn({
      baselineDesignGroup: o,
      commentText: n,
      designEditorState: s,
      isDesignSubmissionMode: s != null,
    }),
    u = fn({
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
function gn({ targetMode: e, reason: t, isLightDismissible: n, isLightDismissArmed: r }) {
  return (e === `design` && t !== `outside`) || n || r ? `dismiss` : `shake`;
}
function _n() {
  return (_n = e(() => {
    mn();
  }))();
}
var vn, yn, bn;
function xn() {
  return (xn = e(() => {
    ((vn = `_selectionChip_1ppdg_1`),
      (yn = `_regionSelectionLabel_1ppdg_14`),
      (bn = { selectionChip: vn, regionSelectionLabel: yn }));
  }))();
}
function Sn(e) {
  let t = (0, Tn.c)(10),
    { anchors: n, onSelectionHoverChange: r, onRemove: i } = e,
    a = De(),
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
        let o = e.kind === `element` ? Ze(e.role, e.elementPath) : null,
          s =
            e.kind === `region`
              ? a.formatMessage(
                  {
                    id: `browserSidebarCommentOverlay.selectedAreaLabel`,
                    defaultMessage: `Area {number}`,
                    description: `Short label for a selected rectangular page area in a browser annotation`,
                  },
                  { number: n.slice(0, t + 1).filter(wn).length },
                )
              : e.immediateText?.trim() || e.title;
        return (0, En.jsxs)(
          `span`,
          {
            className: S(
              bn.selectionChip,
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
                ? (0, En.jsx)(`span`, {
                    className: S(
                      bn.regionSelectionLabel,
                      `min-w-0 truncate rounded-md border border-dotted px-1.5 py-px text-[11px] leading-[14px] font-medium text-secondary`,
                    ),
                    children: s,
                  })
                : o == null
                  ? null
                  : (0, En.jsx)(`span`, {
                      className: `inline-flex shrink-0 items-center rounded-md border border-default bg-text/5 px-1.5 py-px font-mono text-[11px] leading-[14px] font-medium text-secondary`,
                      children: o,
                    }),
              e.kind === `region` || s === o
                ? null
                : (0, En.jsx)(`span`, { className: `min-w-0 truncate text-secondary`, children: s }),
              i == null
                ? null
                : (0, En.jsx)(`button`, {
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
                    onMouseDown: Cn,
                    onClick: () => {
                      i(t);
                    },
                    children: (0, En.jsx)(z, { "aria-hidden": !0, className: `icon-2xs` }),
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
      ? ((c = (0, En.jsx)(`div`, {
          "aria-label": o,
          className: `horizontal-scroll-fade-mask hide-scrollbar flex min-w-0 flex-nowrap gap-1.5 overflow-x-auto overflow-y-hidden overscroll-x-contain pe-1 pb-1 [--edge-fade-distance:2rem]`,
          "data-browser-comment-annotation-selections": !0,
          role: `list`,
          style: Dn,
          children: s,
        })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Cn(e) {
  e.preventDefault();
}
function wn(e) {
  return e.kind === `region`;
}
var Tn, En, Dn;
function On() {
  return (On = e(() => {
    ((Tn = j()),
      T(),
      R(),
      Gt(),
      L(),
      xn(),
      (En = b()),
      (Dn = { "--browser-sidebar-annotation-selection-color": Kt }));
  }))();
}
function kn({ canEditDesign: e, showAdjustEntry: t }) {
  return t && e;
}
function An(e, t) {
  return t.property === `font-family`
    ? Mn([t.value, t.previousValue], Nn)
    : t.property === `font-weight`
      ? Mn(
          [t.value],
          Pn.map((e) => ({ value: e })),
        )
      : t.property === `flex-direction`
        ? Mn(
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
          ? Mn(
              [t.value],
              jn(t.value, `flex-start`, [
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
            ? Mn(
                [t.value],
                jn(t.value, `stretch`, [
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
function jn(e, t, n) {
  return e === `normal` ? n.map((n) => (n.value === t ? { ...n, value: e } : n)) : n;
}
function Mn(e, t) {
  let n = new Set(t.map((e) => e.value)),
    r = e.flatMap((e) => (e.trim().length === 0 || n.has(e) ? [] : (n.add(e), [{ value: e }])));
  return r.length === 0 ? t : [...r, ...t];
}
var Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    ((Nn = [
      { label: `Inter`, value: `"Inter Variable", Arial, sans-serif` },
      { label: `System`, value: `system-ui, sans-serif` },
      { label: `Arial`, value: `Arial, sans-serif` },
      { label: `Serif`, value: `Georgia, "Times New Roman", serif` },
      { label: `Mono`, value: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace` },
    ]),
      (Pn = [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`]));
  }))();
}
var In, Ln;
function Rn() {
  return (Rn = e(() => {
    ((In = `_numericInput_1hft5_1`), (Ln = { numericInput: In }));
  }))();
}
function zn(e) {
  let t = (0, Y.c)(131),
    {
      canEditAnnotationControls: n,
      dropdownPortalContainer: r,
      editorState: i,
      defaultExpandedSpacingGroups: a,
      isEditable: o,
      onControlDragActiveChange: c,
      onControlEditingActiveChange: d,
      onScrubActiveChange: f,
      onUpdate: p,
    } = e,
    m = De(),
    h = he(Le),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = new Set()), (t[0] = g)) : (g = t[0]);
  let _;
  t[1] === i.id ? (_ = t[2]) : ((_ = { editorId: i.id, callbacks: g }), (t[1] = i.id), (t[2] = _));
  let v = (0, Xr.useRef)(_),
    y;
  t[3] === m
    ? (y = t[4])
    : ((y = m.formatMessage({
        id: `browserSidebarDesignEditor.dragStylingControls`,
        defaultMessage: `Move styling controls`,
        description: `Accessible label for the browser design styling controls drag handle`,
      })),
      (t[3] = m),
      (t[4] = y));
  let b = y,
    x;
  t[5] === i.annotationControls?.controlsHeading
    ? (x = t[6])
    : ((x =
        i.annotationControls?.controlsHeading ??
        (0, X.jsx)(W, {
          id: `browserSidebarDesignEditor.annotationControls.heading`,
          defaultMessage: `Webpage controls`,
          description: `Fallback heading for annotation controls supplied by the webpage, shown in the grip bar when replacing built-in controls or above the webpage section when extending them`,
        })),
      (t[5] = i.annotationControls?.controlsHeading),
      (t[6] = x));
  let C = x,
    w = (0, Xr.useId)(),
    T;
  t[7] === i.anchor.frameUrl
    ? (T = t[8])
    : ((T = URL.parse(i.anchor.frameUrl ?? ``)), (t[7] = i.anchor.frameUrl), (t[8] = T));
  let E = T,
    D;
  t[9] !== i.anchor.pageUrl || t[10] !== E
    ? ((D = E?.hostname ? E : URL.parse(i.anchor.pageUrl)),
      (t[9] = i.anchor.pageUrl),
      (t[10] = E),
      (t[11] = D))
    : (D = t[11]);
  let O = D,
    k = O?.hostname === `localhost` ? O.host : O?.hostname || i.anchor.pageUrl,
    A;
  t[12] !== i.anchor.kind || t[13] !== i.elementTagName || t[14] !== i.targetLabel
    ? ((A =
        i.elementTagName ?? (i.anchor.kind === `element` ? i.targetLabel.split(`:`, 1)[0]?.trim() : void 0)),
      (t[12] = i.anchor.kind),
      (t[13] = i.elementTagName),
      (t[14] = i.targetLabel),
      (t[15] = A))
    : (A = t[15]);
  let j = A,
    M;
  t[16] !== a?.margin || t[17] !== a?.padding
    ? ((M = () => ({ margin: a?.margin === !0, padding: a?.padding === !0 })),
      (t[16] = a?.margin),
      (t[17] = a?.padding),
      (t[18] = M))
    : (M = t[18]);
  let [N, ee] = (0, Xr.useState)(M),
    [P, te] = (0, Xr.useState)(!1),
    ne;
  t[19] === i ? (ne = t[20]) : ((ne = () => kr(i)), (t[19] = i), (t[20] = ne));
  let [F, re] = (0, Xr.useState)(ne),
    ie;
  t[21] !== i.annotationControlChanges ||
  t[22] !== i.annotationControls ||
  t[23] !== i.id ||
  t[24] !== i.targetLabel
    ? ((ie =
        i.annotationControls == null
          ? null
          : {
              id: i.id,
              targetLabel: i.targetLabel,
              annotationControls: i.annotationControls,
              annotationControlChanges: i.annotationControlChanges,
            }),
      (t[21] = i.annotationControlChanges),
      (t[22] = i.annotationControls),
      (t[23] = i.id),
      (t[24] = i.targetLabel),
      (t[25] = ie))
    : (ie = t[25]);
  let I = ie,
    ae = I != null && I.annotationControls.controls.length > 0,
    L = ae && i.annotationControls?.controlsMode === `replace`,
    R = i.anchor.kind !== `virtual` && !L,
    oe;
  t[26] !== i || t[27] !== R
    ? ((oe = R ? vr(i) : null), (t[26] = i), (t[27] = R), (t[28] = oe))
    : (oe = t[28]);
  let z = oe,
    ce,
    B,
    le,
    ue,
    de,
    fe,
    pe,
    me,
    V;
  if (
    t[29] !== I ||
    t[30] !== n ||
    t[31] !== C ||
    t[32] !== w ||
    t[33] !== b ||
    t[34] !== r ||
    t[35] !== i ||
    t[36] !== j ||
    t[37] !== N ||
    t[38] !== ae ||
    t[39] !== m ||
    t[40] !== o ||
    t[41] !== P ||
    t[42] !== F ||
    t[43] !== c ||
    t[44] !== d ||
    t[45] !== f ||
    t[46] !== p ||
    t[47] !== h ||
    t[48] !== L ||
    t[49] !== R ||
    t[50] !== z ||
    t[51] !== k
  ) {
    let e = Sr(yr(R ? i.declarations : [])),
      a;
    t[61] !== i || t[62] !== p
      ? ((a = (e) => {
          p(e(i));
        }),
        (t[61] = i),
        (t[62] = p),
        (t[63] = a))
      : (a = t[63]);
    let g = a,
      _;
    t[64] !== I || t[65] !== n || t[66] !== i || t[67] !== o || t[68] !== p || t[69] !== h
      ? ((_ = (e, t) => {
          if (!o || !n || I == null) return;
          let r = Xt(I, e, t);
          p({ ...i, annotationControlChanges: r.annotationControlChanges });
          let a = I.annotationControls.controls.find((t) => t.callback === e),
            s =
              I.annotationControlChanges?.find((t) => t.callback === e)?.value ??
              (a == null ? void 0 : (a.currentValue ?? yt(a))),
            c = r.annotationControlChanges?.find((t) => t.callback === e)?.value;
          (v.current.editorId !== i.id && (v.current = { editorId: i.id, callbacks: new Set() }),
            a != null &&
              c !== s &&
              !v.current.callbacks.has(e) &&
              (v.current.callbacks.add(e),
              h.logProductEvent(Ce, {
                feature: `custom-controls`,
                interactionType: `edited`,
                controlType: a.type,
              })));
        }),
        (t[64] = I),
        (t[65] = n),
        (t[66] = i),
        (t[67] = o),
        (t[68] = p),
        (t[69] = h),
        (t[70] = _))
      : (_ = t[70]);
    let y = _;
    me = `-mx-4 flex min-w-0 flex-col`;
    let x = L ? w : void 0,
      T;
    t[71] !== C || t[72] !== j || t[73] !== L
      ? ((T = L
          ? C
          : j != null &&
            (0, X.jsx)(W, {
              id: `browserSidebarDesignEditor.targetTag`,
              defaultMessage: `<{tag}>`,
              description: `The annotated element's HTML tag name enclosed in angle brackets, shown in the annotation editor's drag bar`,
              values: { tag: j },
            })),
        (t[71] = C),
        (t[72] = j),
        (t[73] = L),
        (t[74] = T))
      : (T = t[74]);
    let E;
    t[75] === T ? (E = t[76]) : ((E = (0, X.jsx)(`bdi`, { children: T })), (t[75] = T), (t[76] = E));
    let D;
    t[77] !== x || t[78] !== E
      ? ((D = (0, X.jsx)(ut, {
          id: x,
          className: `font-medium text-secondary`,
          animateOnGroupHover: !0,
          children: E,
        })),
        (t[77] = x),
        (t[78] = E),
        (t[79] = D))
      : (D = t[79]);
    let O;
    (t[80] === b
      ? (O = t[81])
      : ((O = (0, X.jsx)(s, { "aria-label": b, className: `rotate-90 text-tertiary` })),
        (t[80] = b),
        (t[81] = O)),
      t[82] !== b || t[83] !== D || t[84] !== O
        ? ((V = (0, X.jsxs)(`div`, {
            className: `group flex min-w-0 cursor-grab touch-none items-center justify-between gap-3 bg-text/5 px-4 py-1.5 text-xs select-none active:cursor-grabbing`,
            "data-browser-sidebar-design-drag-handle": !0,
            title: b,
            children: [D, O],
          })),
          (t[82] = b),
          (t[83] = D),
          (t[84] = O),
          (t[85] = V))
        : (V = t[85]),
      (fe = `max-h-[216px] min-w-0 overflow-y-auto`),
      (pe = !0),
      (ce = $t),
      t[86] !== I ||
      t[87] !== n ||
      t[88] !== C ||
      t[89] !== w ||
      t[90] !== r ||
      t[91] !== y ||
      t[92] !== ae ||
      t[93] !== m ||
      t[94] !== o ||
      t[95] !== c ||
      t[96] !== d ||
      t[97] !== f ||
      t[98] !== L ||
      t[99] !== k
        ? ((B = ae
            ? (0, X.jsxs)(`section`, {
                className: `col-span-2 grid min-w-0 grid-cols-subgrid gap-x-3 gap-y-1.5`,
                "aria-labelledby": w,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: S(
                      `col-span-2 flex min-w-0 flex-col gap-1 pt-0.5 select-none`,
                      L ? `pb-1.5` : `pb-1`,
                    ),
                    children: [
                      L
                        ? null
                        : (0, X.jsx)(`h3`, {
                            id: w,
                            className: `text-sm font-medium wrap-anywhere text-default`,
                            children: (0, X.jsx)(`bdi`, { children: C }),
                          }),
                      (0, X.jsxs)(`div`, {
                        className: `flex min-w-0 items-center gap-1 text-xs text-secondary`,
                        children: [
                          (0, X.jsx)(`p`, {
                            children: (0, X.jsx)(W, {
                              id: `browserSidebarDesignEditor.annotationControls.websiteDomainAttribution`,
                              defaultMessage: `Controls provided by {websiteDomain}`,
                              description: `Disclosure above annotation controls supplied by a website. websiteDomain is the domain of the website providing these controls, such as example.com, or the host including the port for localhost, such as localhost:3000`,
                              values: { websiteDomain: k },
                            }),
                          }),
                          (0, X.jsx)(Te, {
                            cloneCustomTrigger: !0,
                            portalContainer: r,
                            side: `top`,
                            variant: `rich`,
                            tooltipContent: (0, X.jsx)(`p`, {
                              className: `p-3 text-xs`,
                              children: (0, X.jsx)(W, {
                                id: `browserSidebarDesignEditor.annotationControls.previewSharingWithWebsiteDomain`,
                                defaultMessage: `Your selections are shared with {websiteDomain} as you adjust these controls, before you send.`,
                                description: `Tooltip explaining that the website receives annotation control selections as the user adjusts them, before sending the annotation to ChatGPT. websiteDomain is the receiving website's domain, such as example.com, or the host including the port for localhost, such as localhost:3000. This refers only to control values, not annotation text or attachments`,
                                values: { websiteDomain: k },
                              }),
                            }),
                            children: (0, X.jsx)(se, {
                              "aria-label": m.formatMessage({
                                id: `browserSidebarDesignEditor.annotationControls.previewSharingLabel`,
                                defaultMessage: `How control values are shared`,
                                description: `Accessible label for the info icon showing a tooltip about sharing webpage annotation control values during preview`,
                              }),
                              color: `ghostTertiary`,
                              size: `inline`,
                              children: (0, X.jsx)(`span`, {
                                className: `inline-flex`,
                                children: (0, X.jsx)(u, { asset: l }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, X.jsx)(Qt, {
                    dropdownPortalContainer: r,
                    editorState: I,
                    isEditable: o && n,
                    onControlDragActiveChange: c,
                    onControlEditingActiveChange: d,
                    onReset: y,
                    onScrubActiveChange: f,
                    onValueChange: y,
                  }),
                ],
              })
            : null),
          (t[86] = I),
          (t[87] = n),
          (t[88] = C),
          (t[89] = w),
          (t[90] = r),
          (t[91] = y),
          (t[92] = ae),
          (t[93] = m),
          (t[94] = o),
          (t[95] = c),
          (t[96] = d),
          (t[97] = f),
          (t[98] = L),
          (t[99] = k),
          (t[100] = B))
        : (B = t[100]),
      (le = ae && (z != null || e.length > 0) ? (0, X.jsx)(Wn, { variant: `section` }) : null),
      t[101] !== r || t[102] !== o || t[103] !== z || t[104] !== g
        ? ((ue =
            z == null
              ? null
              : (0, X.jsx)(Hn, {
                  dropdownPortalContainer: r,
                  isEditable: o,
                  isEdited: z.value !== z.previousValue,
                  value: z.value,
                  onReset: () => {
                    g(hr);
                  },
                  onValueChange: (e) => {
                    g((t) => mr(t, e));
                  },
                })),
          (t[101] = r),
          (t[102] = o),
          (t[103] = z),
          (t[104] = g),
          (t[105] = ue))
        : (ue = t[105]));
    let A;
    (t[106] !== r ||
    t[107] !== N ||
    t[108] !== o ||
    t[109] !== P ||
    t[110] !== F ||
    t[111] !== c ||
    t[112] !== d ||
    t[113] !== f ||
    t[114] !== z ||
    t[115] !== g
      ? ((A = (e, t) =>
          (0, X.jsx)(
            Un,
            {
              dropdownPortalContainer: r,
              expandedSpacingGroups: N,
              isFlexSpacingExpanded: P,
              isEditable: o,
              lockedRelationships: F,
              sectionGroup: e,
              showDivider: t > 0 || z != null,
              onControlDragActiveChange: c,
              onControlEditingActiveChange: d,
              onDimensionLockToggle: () => {
                re(Vn);
              },
              onDimensionValueChange: (e, t) => {
                g((n) => (F.dimensions ? pr(n, e, t) : lr(n, e, { value: t })));
              },
              onSpacingExpandToggle: (e) => {
                ee((t) => ({ ...t, [e]: !t[e] }));
              },
              onFlexSpacingExpandToggle: () => {
                te(Bn);
              },
              onSpacingLockToggle: (e, t) => {
                let n = Or(e, t),
                  r = !F[n];
                (re((e) => ({ ...e, [n]: r })), r && g((n) => dr(n, e, t)));
              },
              onSpacingValueChange: (e, t, n) => {
                g((r) => (Mr(F, e, t) ? fr(r, e, t, n) : lr(r, t, { value: n })));
              },
              onDeclarationValueChange: (e, t) => {
                g((n) => lr(n, e, { value: t }));
              },
              onScrubActiveChange: f,
              onDeclarationReset: (e) => {
                let t = Er(e);
                g((n) => (t != null && Mr(F, t, e) ? _r(n, t, e) : gr(n, e)));
              },
            },
            e.id,
          )),
        (t[106] = r),
        (t[107] = N),
        (t[108] = o),
        (t[109] = P),
        (t[110] = F),
        (t[111] = c),
        (t[112] = d),
        (t[113] = f),
        (t[114] = z),
        (t[115] = g),
        (t[116] = A))
      : (A = t[116]),
      (de = e.map(A)),
      (t[29] = I),
      (t[30] = n),
      (t[31] = C),
      (t[32] = w),
      (t[33] = b),
      (t[34] = r),
      (t[35] = i),
      (t[36] = j),
      (t[37] = N),
      (t[38] = ae),
      (t[39] = m),
      (t[40] = o),
      (t[41] = P),
      (t[42] = F),
      (t[43] = c),
      (t[44] = d),
      (t[45] = f),
      (t[46] = p),
      (t[47] = h),
      (t[48] = L),
      (t[49] = R),
      (t[50] = z),
      (t[51] = k),
      (t[52] = ce),
      (t[53] = B),
      (t[54] = le),
      (t[55] = ue),
      (t[56] = de),
      (t[57] = fe),
      (t[58] = pe),
      (t[59] = me),
      (t[60] = V));
  } else
    ((ce = t[52]),
      (B = t[53]),
      (le = t[54]),
      (ue = t[55]),
      (de = t[56]),
      (fe = t[57]),
      (pe = t[58]),
      (me = t[59]),
      (V = t[60]));
  let H;
  t[117] !== ce || t[118] !== B || t[119] !== le || t[120] !== ue || t[121] !== de
    ? ((H = (0, X.jsxs)(ce, { children: [B, le, ue, de] })),
      (t[117] = ce),
      (t[118] = B),
      (t[119] = le),
      (t[120] = ue),
      (t[121] = de),
      (t[122] = H))
    : (H = t[122]);
  let ge;
  t[123] !== fe || t[124] !== pe || t[125] !== H
    ? ((ge = (0, X.jsx)(`div`, {
        className: fe,
        "data-browser-sidebar-design-scroll-container": pe,
        children: H,
      })),
      (t[123] = fe),
      (t[124] = pe),
      (t[125] = H),
      (t[126] = ge))
    : (ge = t[126]);
  let _e;
  return (
    t[127] !== me || t[128] !== V || t[129] !== ge
      ? ((_e = (0, X.jsxs)(`div`, { className: me, children: [V, ge] })),
        (t[127] = me),
        (t[128] = V),
        (t[129] = ge),
        (t[130] = _e))
      : (_e = t[130]),
    _e
  );
}
function Bn(e) {
  return !e;
}
function Vn(e) {
  return { ...e, dimensions: !e.dimensions };
}
function Hn(e) {
  let t = (0, Y.c)(14),
    { dropdownPortalContainer: n, isEditable: r, isEdited: i, value: a, onReset: o, onValueChange: s } = e,
    c = De(),
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
    d;
  t[2] !== c || t[3] !== r || t[4] !== s || t[5] !== a
    ? ((d = r
        ? (0, X.jsx)(`span`, {
            className: S(ei, ni, `flex min-h-7 min-w-0 items-center px-3`),
            children: (0, X.jsx)(`input`, {
              "aria-label": c.formatMessage({
                id: `browserSidebarDesignEditor.textProperty`,
                defaultMessage: `Text`,
                description: `Property label for editable text in the in-app browser design edit card`,
              }),
              className: S(ti, `h-7 w-full text-start text-xs`),
              "data-browser-sidebar-design-content-input": !0,
              value: a,
              onChange: (e) => {
                s(e.target.value);
              },
            }),
          })
        : (0, X.jsx)(`span`, {
            className: S(ei, ni, `block min-h-7 truncate px-3 py-1 text-end font-mono text-xs text-default`),
            title: a,
            children: a,
          })),
      (t[2] = c),
      (t[3] = r),
      (t[4] = s),
      (t[5] = a),
      (t[6] = d))
    : (d = t[6]);
  let f = d,
    p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(`span`, {
        className: `flex min-h-7 min-w-0 items-center truncate overflow-hidden text-sm text-secondary`,
        children: (0, X.jsx)(W, {
          id: `browserSidebarDesignEditor.textProperty`,
          defaultMessage: `Text`,
          description: `Property label for editable text in the in-app browser design edit card`,
        }),
      })),
      (t[7] = p))
    : (p = t[7]);
  let m = r && i,
    h;
  return (
    t[8] !== n || t[9] !== o || t[10] !== u || t[11] !== m || t[12] !== f
      ? ((h = (0, X.jsxs)(`div`, {
          className: `contents`,
          children: [
            p,
            (0, X.jsx)(Gn, {
              dropdownPortalContainer: n,
              showReset: m,
              resetLabel: u,
              onReset: o,
              children: f,
            }),
          ],
        })),
        (t[8] = n),
        (t[9] = o),
        (t[10] = u),
        (t[11] = m),
        (t[12] = f),
        (t[13] = h))
      : (h = t[13]),
    h
  );
}
function Un(e) {
  let t = (0, Y.c)(23),
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
  t[0] === c ? (b = t[1]) : ((b = c ? (0, X.jsx)(Wn, {}) : null), (t[0] = c), (t[1] = b));
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
              return (0, X.jsx)(Kn, {
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
              return (0, X.jsx)(Zn, {
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
              return (0, X.jsx)(Jn, {
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
              return (0, X.jsx)(Xn, {
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
            children: [t > 0 && xr(e) && !xr(s.sections[t - 1]) ? (0, X.jsx)(Wn, {}) : null, c],
          },
          br(e),
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
function Wn(e) {
  let t = (0, Y.c)(4),
    { variant: n } = e,
    r = (n === void 0 ? `row` : n) === `section` ? `-mx-4 my-1 border-default` : `my-0.5 border-subtle`,
    i;
  t[0] === r ? (i = t[1]) : ((i = S(`col-span-2 border-t`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = (0, X.jsx)(`span`, { "aria-hidden": `true`, className: i })), (t[2] = i), (t[3] = a)),
    a
  );
}
function Gn(e) {
  let t = (0, Y.c)(15),
    {
      children: n,
      dropdownPortalContainer: r,
      isScrubbable: i,
      scrubPeerProperty: a,
      scrubProperty: o,
      showReset: s,
      resetLabel: c,
      onReset: l,
    } = e,
    d = i !== void 0 && i ? `` : void 0,
    f;
  t[0] !== r || t[1] !== l || t[2] !== c || t[3] !== s
    ? ((f = s
        ? (0, X.jsx)(Te, {
            cloneCustomTrigger: !0,
            portalContainer: r,
            tooltipContent: c,
            children: (0, X.jsx)(se, {
              "aria-label": c,
              className: `absolute end-full top-1/2 me-1 h-5 w-5 shrink-0 -translate-y-1/2`,
              color: `ghost`,
              size: `iconSm`,
              type: `button`,
              uniform: !0,
              onClick: l,
              children: (0, X.jsx)(`span`, {
                className: `inline-flex`,
                children: (0, X.jsx)(u, { asset: te }),
              }),
            }),
          })
        : null),
      (t[0] = r),
      (t[1] = l),
      (t[2] = c),
      (t[3] = s),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] === n
    ? (p = t[6])
    : ((p = (0, X.jsx)(`span`, { className: `flex max-w-full min-w-0 justify-end`, children: n })),
      (t[5] = n),
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
    t[10] !== a || t[11] !== o || t[12] !== d || t[13] !== m
      ? ((h = (0, X.jsx)(`span`, {
          className: `flex min-w-0 justify-end ps-6`,
          "data-browser-sidebar-design-scrub-value-cell": d,
          "data-browser-sidebar-design-scrub-peer-property": a,
          "data-browser-sidebar-design-scrub-property": o,
          children: m,
        })),
        (t[10] = a),
        (t[11] = o),
        (t[12] = d),
        (t[13] = m),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
function Kn(e) {
  let t = (0, Y.c)(33),
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
    g = De(),
    _ = h ? `w-full pe-9` : m && `ms-1 ps-3`,
    v;
  t[0] === _
    ? (v = t[1])
    : ((v = S(`relative flex min-h-7 min-w-0 items-center text-sm text-secondary`, _)),
      (t[0] = _),
      (t[1] = v));
  let y;
  t[2] !== r.property || t[3] !== g
    ? ((y = Yr(g, r.property)), (t[2] = r.property), (t[3] = g), (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] !== r.property || t[6] !== g
    ? ((b = Yr(g, r.property)), (t[5] = r.property), (t[6] = g), (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== r.property || t[9] !== m
    ? ((x = (0, X.jsx)(`span`, {
        className: `block truncate`,
        children: (0, X.jsx)(sr, { property: r.property, spacingAxisOnly: m }),
      })),
      (t[8] = r.property),
      (t[9] = m),
      (t[10] = x))
    : (x = t[10]);
  let C;
  t[11] !== i || t[12] !== b || t[13] !== x
    ? ((C = (0, X.jsx)(Te, {
        delayOpen: !0,
        openWhen: `trigger-overflows`,
        portalContainer: i,
        tooltipContent: b,
        children: x,
      })),
      (t[11] = i),
      (t[12] = b),
      (t[13] = x),
      (t[14] = C))
    : (C = t[14]);
  let w;
  t[15] !== n || t[16] !== v || t[17] !== y || t[18] !== C
    ? ((w = (0, X.jsxs)(`span`, {
        className: v,
        "data-browser-sidebar-design-scrub-label": !0,
        "data-browser-sidebar-design-scrub-clone-label": y,
        children: [n, C],
      })),
      (t[15] = n),
      (t[16] = v),
      (t[17] = y),
      (t[18] = C),
      (t[19] = w))
    : (w = t[19]);
  let T;
  t[20] !== r ||
  t[21] !== i ||
  t[22] !== o ||
  t[23] !== s ||
  t[24] !== c ||
  t[25] !== l ||
  t[26] !== d ||
  t[27] !== p ||
  t[28] !== u
    ? ((T = (0, X.jsx)(qn, {
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
      (t[29] = T))
    : (T = t[29]);
  let E;
  return (
    t[30] !== T || t[31] !== w
      ? ((E = (0, X.jsxs)(`div`, { className: `contents`, children: [w, T] })),
        (t[30] = T),
        (t[31] = w),
        (t[32] = E))
      : (E = t[32]),
    E
  );
}
function qn(e) {
  let t = (0, Y.c)(20),
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
    d = De(),
    f;
  t[0] !== n.property || t[1] !== d
    ? ((f = d.formatMessage(
        {
          id: `browserSidebarDesignEditor.resetProperty`,
          defaultMessage: `Reset {property}`,
          description: `Accessible label for resetting a design tweak property in the in-app browser design edit card`,
        },
        { property: Yr(d, n.property) },
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
        ? (0, X.jsx)(er, {
            declaration: n,
            dropdownPortalContainer: r,
            isEdited: n.value !== n.previousValue,
            onControlDragActiveChange: a,
            onControlEditingActiveChange: o,
            onScrubActiveChange: c,
            onValueChange: u,
          })
        : (0, X.jsx)(`span`, {
            className: S(
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
      ? ((g = (0, X.jsx)(Gn, {
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
function Jn(e) {
  let t = (0, Y.c)(67),
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
    p = De(),
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
    let e = n.map(Yn),
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
    (t[20] === s ? (x = t[21]) : ((x = Or(s, `vertical`)), (t[20] = s), (t[21] = x)), (y = x));
    let C;
    (t[22] === s ? (C = t[23]) : ((C = Or(s, `horizontal`)), (t[22] = s), (t[23] = C)), (m = C));
    let w;
    (t[24] !== p || t[25] !== o || t[26] !== s || t[27] !== y
      ? ((w = o[y]
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
        (t[28] = w))
      : (w = t[28]),
      (b = w));
    let T;
    (t[29] !== m || t[30] !== p || t[31] !== o || t[32] !== s
      ? ((T = o[m]
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
        (t[33] = T))
      : (T = t[33]),
      (h = T),
      (g = `contents`));
    let D;
    t[34] === s
      ? (D = t[35])
      : ((D = (0, X.jsx)(`span`, { className: `truncate`, children: (0, X.jsx)(sr, { property: s }) })),
        (t[34] = s),
        (t[35] = D));
    let O = a && `rotate-90`,
      k;
    t[36] === O
      ? (k = t[37])
      : ((k = S(`icon-2xs shrink-0 text-tertiary transition-transform`, O)), (t[36] = O), (t[37] = k));
    let A;
    (t[38] === k ? (A = t[39]) : ((A = (0, X.jsx)(E, { className: k })), (t[38] = k), (t[39] = A)),
      t[40] !== u || t[41] !== l || t[42] !== A || t[43] !== D
        ? ((_ = (0, X.jsx)(`span`, {
            className: `flex min-h-7 min-w-0 items-center pe-2`,
            "data-browser-sidebar-design-scrub-label": !0,
            children: (0, X.jsxs)(`button`, {
              "aria-label": u,
              className: `-ms-1 inline-flex min-w-0 cursor-interaction items-center gap-1 rounded px-1 py-0.5 text-start text-sm text-secondary hover:bg-primary-ghost-hover`,
              type: `button`,
              onClick: l,
              children: [D, A],
            }),
          })),
          (t[40] = u),
          (t[41] = l),
          (t[42] = A),
          (t[43] = D),
          (t[44] = _))
        : (_ = t[44]),
      (v = a
        ? (0, X.jsx)(`span`, { "aria-hidden": `true` })
        : i
          ? (0, X.jsx)(ir, { declarations: n, property: s, onScrubActiveChange: d, onValueChange: f })
          : (0, X.jsx)(`span`, {
              className: S(
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
  let C;
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
    ? ((C = a
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(Qn, {
                dropdownPortalContainer: r,
                first: Dr(n, s, `top`),
                isEditable: i,
                isLocked: o[y],
                isNested: !0,
                second: Dr(n, s, `bottom`),
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
              (0, X.jsx)(Qn, {
                dropdownPortalContainer: r,
                first: Dr(n, s, `left`),
                isEditable: i,
                isLocked: o[m],
                isNested: !0,
                second: Dr(n, s, `right`),
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
      (t[63] = C))
    : (C = t[63]);
  let w;
  return (
    t[64] !== x || t[65] !== C
      ? ((w = (0, X.jsxs)(X.Fragment, { children: [x, C] })), (t[64] = x), (t[65] = C), (t[66] = w))
      : (w = t[66]),
    w
  );
}
function Yn(e) {
  return e.value;
}
function Xn(e) {
  let t = (0, Y.c)(34),
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
    d = De(),
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
    ? ((m = (0, X.jsx)(`span`, { className: `truncate`, children: (0, X.jsx)(sr, { property: `gap` }) })),
      (t[3] = m))
    : (m = t[3]);
  let h = a && `rotate-90`,
    g;
  t[4] === h
    ? (g = t[5])
    : ((g = S(`icon-2xs shrink-0 text-tertiary transition-transform`, h)), (t[4] = h), (t[5] = g));
  let _;
  t[6] === g ? (_ = t[7]) : ((_ = (0, X.jsx)(E, { className: g })), (t[6] = g), (t[7] = _));
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
          ? (0, X.jsx)(ar, { columnGap: n, rowGap: o, onScrubActiveChange: l, onValueChange: u })
          : (0, X.jsxs)(`span`, {
              className: S(
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
              (0, X.jsx)(Kn, {
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
              (0, X.jsx)(Kn, {
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
  let C;
  return (
    t[31] !== b || t[32] !== x
      ? ((C = (0, X.jsxs)(X.Fragment, { children: [b, x] })), (t[31] = b), (t[32] = x), (t[33] = C))
      : (C = t[33]),
    C
  );
}
function Zn(e) {
  let t = (0, Y.c)(14),
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
    d = De(),
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
      ? ((m = (0, X.jsx)(Qn, {
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
function Qn(e) {
  let t = (0, Y.c)(39),
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
    ? ((m = (0, X.jsx)($n, { dropdownPortalContainer: n, isLocked: a, label: s, onClick: l })),
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
    ? ((v = (0, X.jsx)(Kn, {
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
    ? ((S = (0, X.jsx)(Kn, {
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
function $n(e) {
  let t = (0, Y.c)(12),
    { dropdownPortalContainer: n, isLocked: r, label: i, onClick: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(`svg`, {
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
      (t[0] = o))
    : (o = t[0]);
  let s = r
      ? `!border-transparent !bg-[color-mix(in_srgb,var(--color-surface)_86%,var(--color-text-info)_14%)] !text-info shadow-sm enabled:hover:!bg-[color-mix(in_srgb,var(--color-surface)_80%,var(--color-text-info)_20%)] enabled:active:!bg-[color-mix(in_srgb,var(--color-surface)_76%,var(--color-text-info)_24%)] data-[state=open]:!bg-[color-mix(in_srgb,var(--color-surface)_80%,var(--color-text-info)_20%)] [&_svg]:!text-info`
      : `!border-transparent !bg-surface !text-secondary shadow-sm enabled:hover:!bg-[color-mix(in_srgb,var(--color-surface)_92%,var(--color-text))] enabled:hover:!text-default enabled:active:!bg-[color-mix(in_srgb,var(--color-surface)_88%,var(--color-text)_12%)] enabled:active:!text-default data-[state=open]:!bg-[color-mix(in_srgb,var(--color-surface)_92%,var(--color-text))] data-[state=open]:!text-default`,
    c;
  t[1] === s
    ? (c = t[2])
    : ((c = S(`absolute top-1/2 right-0 z-10 h-3.5 w-3.5 -translate-y-1/2 !rounded-full p-0`, s)),
      (t[1] = s),
      (t[2] = c));
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsx)(Ie, { className: `icon-3xs` })), (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] !== i || t[5] !== a || t[6] !== c
    ? ((u = (0, X.jsx)(se, {
        "aria-label": i,
        className: c,
        color: `ghost`,
        size: `iconSm`,
        uniform: !0,
        onClick: a,
        children: l,
      })),
      (t[4] = i),
      (t[5] = a),
      (t[6] = c),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== n || t[9] !== i || t[10] !== u
      ? ((d = (0, X.jsxs)(`span`, {
          className: `absolute top-0 -right-1.5 z-10 h-[62px] w-9`,
          children: [
            o,
            (0, X.jsx)(Te, { cloneCustomTrigger: !0, portalContainer: n, tooltipContent: i, children: u }),
          ],
        })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function er(e) {
  let t = (0, Y.c)(52),
    {
      declaration: n,
      dropdownPortalContainer: r,
      isEdited: i,
      onControlDragActiveChange: a,
      onControlEditingActiveChange: o,
      onScrubActiveChange: s,
      onValueChange: c,
    } = e,
    l = De(),
    u;
  t[0] === n ? (u = t[1]) : ((u = Lr(n)), (t[0] = n), (t[1] = u));
  let d = u;
  if (Hr(n.property)) {
    let e;
    t[2] !== n.property || t[3] !== l
      ? ((e = Yr(l, n.property)), (t[2] = n.property), (t[3] = l), (t[4] = e))
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
        ? ((s = (0, X.jsx)(cr, {
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
      ? ((e = Yr(l, n.property)), (t[14] = n.property), (t[15] = l), (t[16] = e))
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
        ? ((r = (0, X.jsx)(tr, {
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
  if (Ur(n)) {
    let e;
    t[25] !== n.property || t[26] !== l
      ? ((e = Yr(l, n.property)), (t[25] = n.property), (t[26] = l), (t[27] = e))
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
        ? ((r = (0, X.jsx)(nr, {
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
    ? ((f = Yr(l, n.property)), (t[36] = n.property), (t[37] = l), (t[38] = f))
    : (f = t[38]);
  let p = n.property,
    m;
  t[39] !== n || t[40] !== l ? ((m = An(l, n)), (t[39] = n), (t[40] = l), (t[41] = m)) : (m = t[41]);
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
      ? ((h = (0, X.jsx)(rr, {
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
function tr(e) {
  let t = (0, Y.c)(15),
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
    ? ((l = S(ei, ri, `flex min-h-7 min-w-0 items-center px-3`)), (t[0] = l))
    : (l = t[0]);
  let u = !r && `text-tertiary`,
    d;
  t[1] === u
    ? (d = t[2])
    : ((d = S(ti, ii, `h-7 w-full truncate text-start text-xs`, u)), (t[1] = u), (t[2] = d));
  let f;
  t[3] !== i || t[4] !== o ? ((f = Kr(o, i)), (t[3] = i), (t[4] = o), (t[5] = f)) : (f = t[5]);
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
          children: (0, X.jsx)(or, {
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
            formatScrubValue: Br,
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
function nr(e) {
  let t = (0, Y.c)(27),
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
    ? ((l = S(ei, ri, `flex min-h-7 min-w-0 items-center gap-1 px-3`)), (t[0] = l))
    : (l = t[0]);
  let u = !r && `text-tertiary`,
    d;
  t[1] === u
    ? (d = t[2])
    : ((d = S(ti, ii, `h-7 w-full truncate text-start text-xs`, u)), (t[1] = u), (t[2] = d));
  let f;
  t[3] === o ? (f = t[4]) : ((f = zr(o) ?? ``), (t[3] = o), (t[4] = f));
  let p;
  t[5] !== i || t[6] !== a || t[7] !== o
    ? ((p = zr(i ?? ``) ?? Ir(a, i ?? o) ?? void 0), (t[5] = i), (t[6] = a), (t[7] = o), (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== i || t[10] !== o
    ? ((m = Fr(o) ?? Fr(i ?? ``) ?? 0), (t[9] = i), (t[10] = o), (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === c
    ? (h = t[13])
    : ((h = (e) => {
        c(e.length === 0 ? `` : `${e}px`);
      }),
      (t[12] = c),
      (t[13] = h));
  let g;
  t[14] !== n ||
  t[15] !== s ||
  t[16] !== a ||
  t[17] !== d ||
  t[18] !== f ||
  t[19] !== p ||
  t[20] !== m ||
  t[21] !== h ||
  t[22] !== o
    ? ((g = (0, X.jsx)(or, {
        ariaLabel: n,
        className: d,
        inputMode: `decimal`,
        property: a,
        step: `any`,
        title: o,
        type: `number`,
        value: f,
        placeholder: p,
        scrubStep: 1,
        scrubValue: m,
        formatScrubValue: Br,
        onScrubActiveChange: s,
        onValueChange: h,
      })),
      (t[14] = n),
      (t[15] = s),
      (t[16] = a),
      (t[17] = d),
      (t[18] = f),
      (t[19] = p),
      (t[20] = m),
      (t[21] = h),
      (t[22] = o),
      (t[23] = g))
    : (g = t[23]);
  let _;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(`span`, {
        className: `shrink-0 font-mono text-xs text-tertiary`,
        children: (0, X.jsx)(W, {
          id: `browserSidebarDesignEditor.pixelUnit`,
          defaultMessage: `px`,
          description: `Pixel unit label shown beside numeric design edit fields`,
        }),
      })),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  return (
    t[25] === g
      ? (v = t[26])
      : ((v = (0, X.jsxs)(`span`, { className: l, children: [g, _] })), (t[25] = g), (t[26] = v)),
    v
  );
}
function rr(e) {
  let t = (0, Y.c)(72),
    {
      ariaLabel: n,
      isEdited: r,
      placeholderValue: i,
      portalContainer: a,
      property: o,
      suggestions: s,
      value: c,
      onOpenChange: l,
      onValueChange: u,
    } = e,
    d;
  if (t[0] !== s || t[1] !== c) {
    let e;
    (t[3] === c ? (e = t[4]) : ((e = (e) => e.value === c), (t[3] = c), (t[4] = e)),
      (d = s.find(e)),
      (t[0] = s),
      (t[1] = c),
      (t[2] = d));
  } else d = t[2];
  let f = d;
  if (o === `font-family`) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = S(ei, ni, `flex min-h-7 min-w-0 items-center overflow-hidden`)), (t[5] = e))
      : (e = t[5]);
    let o = !r && `text-tertiary`,
      d;
    t[6] === o
      ? (d = t[7])
      : ((d = S(ti, `h-7 min-w-0 flex-1 truncate px-3 text-start text-xs`, o)), (t[6] = o), (t[7] = d));
    let f;
    t[8] === u
      ? (f = t[9])
      : ((f = (e) => {
          u(e.target.value);
        }),
        (t[8] = u),
        (t[9] = f));
    let p;
    t[10] !== n || t[11] !== i || t[12] !== d || t[13] !== f || t[14] !== c
      ? ((p = (0, X.jsx)(`input`, {
          "aria-label": n,
          className: d,
          dir: `ltr`,
          value: c,
          placeholder: i,
          title: c,
          onChange: f,
        })),
        (t[10] = n),
        (t[11] = i),
        (t[12] = d),
        (t[13] = f),
        (t[14] = c),
        (t[15] = p))
      : (p = t[15]);
    let m;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = (0, X.jsx)(E, { className: `icon-2xs rotate-90` })), (t[16] = m))
      : (m = t[16]);
    let h;
    t[17] === n
      ? (h = t[18])
      : ((h = (0, X.jsx)(`button`, {
          "aria-label": n,
          className: `flex h-7 w-7 shrink-0 cursor-interaction items-center justify-center border-l border-subtle text-tertiary hover:bg-primary-ghost-hover`,
          "data-browser-sidebar-design-no-drag": !0,
          type: `button`,
          children: m,
        })),
        (t[17] = n),
        (t[18] = h));
    let g;
    if (t[19] !== u || t[20] !== s || t[21] !== c) {
      let e;
      (t[23] !== u || t[24] !== c
        ? ((e = (e) =>
            (0, X.jsx)(
              ke.Item,
              {
                rightIconAsset: e.value === c ? Me : void 0,
                onSelect: () => {
                  u(e.value);
                },
                children: e.label ?? e.value,
              },
              `${e.label ?? e.value}-${e.value}`,
            )),
          (t[23] = u),
          (t[24] = c),
          (t[25] = e))
        : (e = t[25]),
        (g = s.map(e)),
        (t[19] = u),
        (t[20] = s),
        (t[21] = c),
        (t[22] = g));
    } else g = t[22];
    let _;
    t[26] === g
      ? (_ = t[27])
      : ((_ = (0, X.jsx)(ke.Section, {
          className: `flex max-h-[220px] flex-col overflow-y-auto`,
          children: g,
        })),
        (t[26] = g),
        (t[27] = _));
    let v;
    t[28] !== l || t[29] !== a || t[30] !== _ || t[31] !== h
      ? ((v = (0, X.jsx)(je, {
          align: `end`,
          contentWidth: `sm`,
          portalContainer: a,
          onOpenChange: l,
          triggerButton: h,
          children: _,
        })),
        (t[28] = l),
        (t[29] = a),
        (t[30] = _),
        (t[31] = h),
        (t[32] = v))
      : (v = t[32]);
    let y;
    return (
      t[33] !== v || t[34] !== p
        ? ((y = (0, X.jsxs)(`span`, { className: e, children: [p, v] })),
          (t[33] = v),
          (t[34] = p),
          (t[35] = y))
        : (y = t[35]),
      y
    );
  }
  if (s.length === 0) {
    let e;
    t[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = S(ei, `flex min-h-7 w-full min-w-0 items-center px-3`)), (t[36] = e))
      : (e = t[36]);
    let a = !r && `text-tertiary`,
      o;
    t[37] === a
      ? (o = t[38])
      : ((o = S(ti, `h-7 w-full truncate text-start text-xs`, a)), (t[37] = a), (t[38] = o));
    let s;
    t[39] === u
      ? (s = t[40])
      : ((s = (e) => {
          u(e.target.value);
        }),
        (t[39] = u),
        (t[40] = s));
    let l;
    return (
      t[41] !== n || t[42] !== i || t[43] !== o || t[44] !== s || t[45] !== c
        ? ((l = (0, X.jsx)(`span`, {
            className: e,
            children: (0, X.jsx)(`input`, {
              "aria-label": n,
              className: o,
              dir: `ltr`,
              value: c,
              placeholder: i,
              title: c,
              onChange: s,
            }),
          })),
          (t[41] = n),
          (t[42] = i),
          (t[43] = o),
          (t[44] = s),
          (t[45] = c),
          (t[46] = l))
        : (l = t[46]),
      l
    );
  }
  let p;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = S(
        ei,
        ni,
        `flex min-h-7 min-w-0 cursor-interaction items-center gap-2 overflow-hidden px-3 text-start`,
      )),
      (t[47] = p))
    : (p = t[47]);
  let m = f?.label ?? (c.length === 0 ? i : c),
    h = r ? `text-default` : `text-tertiary`,
    g;
  t[48] === h
    ? (g = t[49])
    : ((g = S(`min-w-0 flex-1 truncate font-mono text-xs`, h)), (t[48] = h), (t[49] = g));
  let _ = f?.label ?? (c || i),
    v;
  t[50] !== g || t[51] !== _
    ? ((v = (0, X.jsx)(`span`, { className: g, children: _ })), (t[50] = g), (t[51] = _), (t[52] = v))
    : (v = t[52]);
  let y;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, X.jsx)(E, { className: `icon-2xs shrink-0 rotate-90 text-tertiary` })), (t[53] = y))
    : (y = t[53]);
  let b;
  t[54] !== n || t[55] !== m || t[56] !== v
    ? ((b = (0, X.jsxs)(`button`, {
        "aria-label": n,
        className: p,
        title: m,
        type: `button`,
        children: [v, y],
      })),
      (t[54] = n),
      (t[55] = m),
      (t[56] = v),
      (t[57] = b))
    : (b = t[57]);
  let x;
  if (t[58] !== u || t[59] !== s || t[60] !== c) {
    let e;
    (t[62] !== u || t[63] !== c
      ? ((e = (e) =>
          (0, X.jsx)(
            ke.Item,
            {
              rightIconAsset: e.value === c ? Me : void 0,
              onSelect: () => {
                u(e.value);
              },
              children: e.label ?? e.value,
            },
            `${e.label ?? e.value}-${e.value}`,
          )),
        (t[62] = u),
        (t[63] = c),
        (t[64] = e))
      : (e = t[64]),
      (x = s.map(e)),
      (t[58] = u),
      (t[59] = s),
      (t[60] = c),
      (t[61] = x));
  } else x = t[61];
  let C;
  t[65] === x
    ? (C = t[66])
    : ((C = (0, X.jsx)(ke.Section, {
        className: `flex max-h-[220px] flex-col overflow-y-auto`,
        children: x,
      })),
      (t[65] = x),
      (t[66] = C));
  let w;
  return (
    t[67] !== l || t[68] !== a || t[69] !== C || t[70] !== b
      ? ((w = (0, X.jsx)(je, {
          align: `end`,
          contentWidth: `sm`,
          portalContainer: a,
          onOpenChange: l,
          triggerButton: b,
          children: C,
        })),
        (t[67] = l),
        (t[68] = a),
        (t[69] = C),
        (t[70] = b),
        (t[71] = w))
      : (w = t[71]),
    w
  );
}
function ir(e) {
  let t = (0, Y.c)(9),
    { declarations: n, property: r, onScrubActiveChange: i, onValueChange: a } = e,
    o = De(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = S(ei, `-ms-6 grid min-h-7 w-[calc(100%+1.5rem)] grid-cols-4 overflow-hidden`)), (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== n || t[2] !== o || t[3] !== i || t[4] !== a || t[5] !== r
    ? ((c = Qr.map((e, t) => {
        let s = Dr(n, r, e);
        if (s == null)
          return (0, X.jsx)(
            `span`,
            {
              className: S(
                `flex min-h-7 items-center justify-center font-mono text-xs text-tertiary`,
                t > 0 && `border-l border-subtle`,
              ),
            },
            `${r}-${e}`,
          );
        let c = zr(s.value),
          l = s.value.length === 0 || c != null;
        return (0, X.jsx)(
          or,
          {
            ariaLabel: Yr(o, s.property),
            className: S(
              ti,
              l && ii,
              `min-h-7 w-full px-1 text-center text-xs`,
              t > 0 && `border-l border-subtle`,
              s.value === s.previousValue && `text-tertiary`,
            ),
            inputMode: l ? `decimal` : void 0,
            property: s.property,
            formatScrubValue: Br,
            scrubStep: l ? 1 : void 0,
            scrubValue: l ? (Fr(s.value) ?? Fr(s.placeholderValue ?? ``) ?? 0) : null,
            step: l ? `any` : void 0,
            title: s.value,
            type: l ? `number` : void 0,
            placeholder:
              zr(s.placeholderValue ?? ``) ?? Ir(s.property, s.placeholderValue ?? s.value) ?? void 0,
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
function ar(e) {
  let t = (0, Y.c)(7),
    { columnGap: n, rowGap: r, onScrubActiveChange: i, onValueChange: a } = e,
    o = De(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = S(ei, `grid min-h-7 w-full grid-cols-2 overflow-hidden`)), (t[0] = s))
    : (s = t[0]);
  let c;
  return (
    t[1] !== n || t[2] !== o || t[3] !== i || t[4] !== a || t[5] !== r
      ? ((c = (0, X.jsx)(`span`, {
          className: s,
          "data-browser-sidebar-design-scrub-value-cell": !0,
          children: [n, r].map((e, t) => {
            let n = zr(e.value),
              r = e.value.length === 0 || n != null || Ir(e.property, e.value) != null;
            return (0, X.jsx)(
              or,
              {
                ariaLabel: Yr(o, e.property),
                className: S(
                  ti,
                  r && ii,
                  `min-h-7 w-full px-1 text-center text-xs`,
                  t > 0 && `border-l border-subtle`,
                  e.value === e.previousValue && `text-tertiary`,
                ),
                formatScrubValue: Br,
                inputMode: r ? `decimal` : void 0,
                property: e.property,
                scrubStep: r ? 1 : void 0,
                scrubValue: r
                  ? (Fr(e.value) ??
                    Fr(e.placeholderValue ?? ``) ??
                    Number(Ir(e.property, e.placeholderValue ?? e.value) ?? `0`))
                  : null,
                step: r ? `any` : void 0,
                title: e.value,
                type: r ? `number` : void 0,
                placeholder:
                  zr(e.placeholderValue ?? ``) ?? Ir(e.property, e.placeholderValue ?? e.value) ?? void 0,
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
function or(e) {
  let t = (0, Y.c)(42),
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
    b = (0, Xr.useRef)(null),
    x = (0, Xr.useRef)(!1),
    C;
  t[0] !== d || t[1] !== f || t[2] !== h
    ? ((C = (e) => {
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
      (t[3] = C))
    : (C = t[3]);
  let w = C,
    T;
  t[4] !== i || t[5] !== v || t[6] !== y || t[7] !== c || t[8] !== l || t[9] !== u || t[10] !== d
    ? ((T = (e) => {
        let t = b.current;
        if (t == null || t.pointerId !== e.pointerId || d == null || i == null) return;
        let n = t.startClientY - e.clientY;
        if ((e.preventDefault(), !t.hasScrubbed && Math.abs(n) < si)) return;
        if (!t.hasScrubbed) {
          let n = e.currentTarget.ownerDocument.body.style;
          ((n.cursor = ai), (n.userSelect = `none`), (t.hasScrubbed = !0), v?.(c, e.currentTarget));
        }
        let r = Math.trunc(n / oi),
          a = Vr(t.startValue + r * d, u, l);
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
      (t[11] = T))
    : (T = t[11]);
  let E = T,
    D;
  t[12] === v
    ? (D = t[13])
    : ((D = (e) => {
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
      (t[13] = D));
  let O = D,
    k;
  t[14] === O
    ? (k = t[15])
    : ((k = (e) => {
        let t = b.current;
        t != null &&
          t.pointerId === e.pointerId &&
          (e.currentTarget.hasPointerCapture?.(e.pointerId) === !0 &&
            e.currentTarget.releasePointerCapture(e.pointerId),
          t.hasScrubbed && e.preventDefault(),
          O(e.currentTarget));
      }),
      (t[14] = O),
      (t[15] = k));
  let A = k,
    j;
  t[16] === O
    ? (j = t[17])
    : ((j = (e) => {
        O(e.currentTarget);
      }),
      (t[16] = O),
      (t[17] = j));
  let M = j,
    N;
  t[18] === h
    ? (N = t[19])
    : ((N = (e) => {
        h === `number` &&
          e.currentTarget.ownerDocument.activeElement === e.currentTarget &&
          e.currentTarget.blur();
      }),
      (t[18] = h),
      (t[19] = N));
  let ee = N,
    P;
  t[20] === r
    ? (P = t[21])
    : ((P = S(r, `touch-none cursor-text hover:cursor-ns-resize active:cursor-ns-resize`)),
      (t[20] = r),
      (t[21] = P));
  let te;
  t[22] === y
    ? (te = t[23])
    : ((te = (e) => {
        y(e.target.value);
      }),
      (t[22] = y),
      (t[23] = te));
  let ne;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (e) => {
        x.current && ((x.current = !1), e.preventDefault());
      }),
      (t[24] = ne))
    : (ne = t[24]);
  let F;
  return (
    t[25] !== n ||
    t[26] !== M ||
    t[27] !== w ||
    t[28] !== A ||
    t[29] !== E ||
    t[30] !== ee ||
    t[31] !== a ||
    t[32] !== o ||
    t[33] !== s ||
    t[34] !== g ||
    t[35] !== p ||
    t[36] !== P ||
    t[37] !== te ||
    t[38] !== m ||
    t[39] !== h ||
    t[40] !== _
      ? ((F = (0, X.jsx)(`input`, {
          "aria-label": n,
          className: P,
          dir: `ltr`,
          inputMode: a,
          max: o,
          min: s,
          step: p,
          title: m,
          type: h,
          placeholder: g,
          value: _,
          onChange: te,
          onClick: ne,
          onLostPointerCapture: M,
          onPointerCancel: A,
          onPointerDown: w,
          onPointerMove: E,
          onPointerUp: A,
          onWheel: ee,
        })),
        (t[25] = n),
        (t[26] = M),
        (t[27] = w),
        (t[28] = A),
        (t[29] = E),
        (t[30] = ee),
        (t[31] = a),
        (t[32] = o),
        (t[33] = s),
        (t[34] = g),
        (t[35] = p),
        (t[36] = P),
        (t[37] = te),
        (t[38] = m),
        (t[39] = h),
        (t[40] = _),
        (t[41] = F))
      : (F = t[41]),
    F
  );
}
function sr(e) {
  let t = (0, Y.c)(26),
    { property: n, spacingAxisOnly: r } = e;
  if (r !== void 0 && r) {
    if (n === `margin-top` || n === `padding-top`) {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
          ? ((e = (0, X.jsx)(W, {
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
      t[22] === n ? (e = t[23]) : ((e = Jr(n)), (t[22] = n), (t[23] = e));
      let r;
      return (
        t[24] === e ? (r = t[25]) : ((r = (0, X.jsx)(X.Fragment, { children: e })), (t[24] = e), (t[25] = r)),
        r
      );
    }
  }
}
function cr(e) {
  let t = (0, Y.c)(23),
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
    ? ((u = S(ei, ni, `flex min-h-7 min-w-0 items-center gap-2 px-2`)), (t[0] = u))
    : (u = t[0]);
  let d = o || i,
    f;
  t[1] === d ? (f = t[2]) : ((f = qr(d)), (t[1] = d), (t[2] = f));
  let p;
  t[3] !== n || t[4] !== s || t[5] !== c || t[6] !== l || t[7] !== a || t[8] !== f
    ? ((p = (0, X.jsx)(qt, {
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
    : ((h = S(ti, `h-7 w-full truncate text-start text-xs`, m)), (t[10] = m), (t[11] = h));
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
function lr(e, t, n) {
  return { ...e, declarations: e.declarations.map((e) => (e.property === t ? { ...e, ...n } : e)) };
}
function ur(e, t) {
  return {
    ...e,
    declarations: e.declarations.map((e) => {
      let n = t.find((t) => t.property === e.property);
      return n == null ? e : { ...e, value: n.value };
    }),
  };
}
function dr(e, t, n) {
  let [r, i] = Nr(t, n),
    a = e.declarations.find((e) => e.property === r);
  return a == null
    ? e
    : ur(e, [
        { property: r, value: a.value },
        { property: i, value: a.value },
      ]);
}
function fr(e, t, n, r) {
  let i = Pr(t, n);
  return i == null
    ? lr(e, n, { value: r })
    : ur(e, [
        { property: n, value: r },
        { property: i, value: r },
      ]);
}
function pr(e, t, n) {
  let r = e.declarations.find((e) => e.property === t),
    i = t === `width` ? `height` : `width`,
    a = e.declarations.find((e) => e.property === i),
    o = r == null ? null : Fr(r.value),
    s = a == null ? null : Fr(a.value),
    c = Fr(n);
  return o == null || s == null || c == null || o === 0
    ? lr(e, t, { value: n })
    : ur(e, [
        { property: t, value: n },
        { property: i, value: `${Br((s / o) * c)}px` },
      ]);
}
function mr(e, t) {
  let n = vr(e);
  return n == null ? e : { ...e, text: { previousValue: n.previousValue, value: t } };
}
function hr(e) {
  let t = vr(e);
  return t == null ? e : mr(e, t.previousValue);
}
function gr(e, t) {
  let n = e.declarations.find((e) => e.property === t);
  return n == null ? e : lr(e, t, { value: n.previousValue });
}
function _r(e, t, n) {
  let r = e.declarations.find((e) => e.property === n),
    i = Pr(t, n);
  return r == null || i == null
    ? gr(e, n)
    : ur(e, [
        { property: n, value: r.previousValue },
        { property: i, value: r.previousValue },
      ]);
}
function vr(e) {
  return e.text ?? null;
}
function yr(e) {
  let t = new Map(e.map((e) => [e.property, e])),
    n = [],
    r = new Set();
  for (let i of e) {
    if (r.has(i.property)) continue;
    if (Gr(i.property)) {
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
    let e = Er(i.property);
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
function br(e) {
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
function xr(e) {
  return (
    e?.kind === `flex-spacing` ||
    (e?.kind === `declaration` &&
      (e.declaration.property === `align-items` ||
        e.declaration.property === `flex-direction` ||
        e.declaration.property === `justify-content`))
  );
}
function Sr(e) {
  let t = [];
  for (let n of [`color`, `font`, `border`, `layout`, `other`]) {
    let r = e.filter((e) => Cr(e) === n).sort(wr);
    r.length > 0 && t.push({ id: n, sections: r });
  }
  return t;
}
function Cr(e) {
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
function wr(e, t) {
  return Tr(e) - Tr(t);
}
function Tr(e) {
  if (e.kind === `dimensions`) return 0;
  if (e.kind === `spacing`) return e.property === `padding` ? 1 : 2;
  if (e.kind === `flex-spacing`) return $r.indexOf(`gap`);
  let t = $r.indexOf(e.declaration.property);
  return t < 0 ? $r.length : t;
}
function Er(e) {
  return e.startsWith(`padding-`) ? `padding` : e.startsWith(`margin-`) ? `margin` : null;
}
function Dr(e, t, n) {
  return e.find((e) => e.property === `${t}-${n}`) ?? null;
}
function Or(e, t) {
  return `${e}-${t}`;
}
function kr(e) {
  return {
    dimensions: !1,
    "margin-horizontal": Ar(e.declarations, `margin`, `horizontal`),
    "margin-vertical": Ar(e.declarations, `margin`, `vertical`),
    "padding-horizontal": Ar(e.declarations, `padding`, `horizontal`),
    "padding-vertical": Ar(e.declarations, `padding`, `vertical`),
  };
}
function Ar(e, t, n) {
  let [r, i] = Nr(t, n),
    a = e.find((e) => e.property === r),
    o = e.find((e) => e.property === i);
  return a != null && o != null && a.value.trim() !== `0` && Fr(a.value) !== 0 && jr(a.value, o.value);
}
function jr(e, t) {
  if (e.trim() === t.trim()) return !0;
  let n = Fr(e),
    r = Fr(t);
  return n != null && r != null && n === r;
}
function Mr(e, t, n) {
  return n === `${t}-top` || n === `${t}-bottom`
    ? e[Or(t, `vertical`)]
    : n === `${t}-left` || n === `${t}-right`
      ? e[Or(t, `horizontal`)]
      : !1;
}
function Nr(e, t) {
  return t === `vertical` ? [`${e}-top`, `${e}-bottom`] : [`${e}-left`, `${e}-right`];
}
function Pr(e, t) {
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
function Fr(e) {
  let t = zr(e);
  return t == null ? null : Number(t);
}
function Ir(e, t) {
  return Gr(e) && t.trim() === `normal` ? `0` : null;
}
function Lr(e) {
  return (
    e.placeholderValue ?? (e.value.length === 0 && e.previousValue.length > 0 ? e.previousValue : void 0)
  );
}
function Rr(e) {
  if (e.trim().length === 0) return 0;
  let t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function zr(e) {
  return e.trim().match(/^(-?\d+(?:\.\d+)?)px$/)?.[1] ?? null;
}
function Br(e) {
  return String(Number.isInteger(e) ? e : Number(e.toFixed(2)));
}
function Vr(e, t, n) {
  return t != null && e < t ? t : n != null && e > n ? n : e;
}
function Hr(e) {
  return e === `color` || e.endsWith(`-color`);
}
function Ur(e) {
  return (
    Wr(e.property) &&
    (e.value.length === 0 ||
      zr(e.placeholderValue ?? ``) != null ||
      zr(e.value) != null ||
      Ir(e.property, e.value) != null ||
      Ir(e.property, e.placeholderValue ?? ``) != null)
  );
}
function Wr(e) {
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
function Gr(e) {
  return e === `column-gap` || e === `gap` || e === `row-gap`;
}
function Kr(e, t) {
  return e.trim().length === 0 && t != null ? Rr(t) : Rr(e);
}
function qr(e) {
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
function Jr(e) {
  let t = e.replaceAll(`-`, ` `);
  return `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
}
function Yr(e, t) {
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
      return Jr(t);
  }
}
var Y, Xr, X, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si;
function ci() {
  return (ci = e(() => {
    ((Y = j()),
      ee(),
      m(),
      ue(),
      K(),
      T(),
      le(),
      _t(),
      (Xr = g()),
      R(),
      Fn(),
      Jt(),
      B(),
      de(),
      O(),
      P(),
      Xe(),
      U(),
      M(),
      Et(),
      kt(),
      Zt(),
      Yt(),
      en(),
      Rn(),
      (X = b()),
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
      (ii = Ln.numericInput),
      (ai = `url("${w(`<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 1 11 4H9v4H7V4H5l3-3Z' fill='#475569'/><path d='M8 15 5 12h2V8h2v4h2l-3 3Z' fill='#475569'/></svg>`)}") 8 8, ns-resize`),
      (oi = 4),
      (si = oi));
  }))();
}
function li(e) {
  return [e.anchor, ...(e.additionalAnchors ?? [])].flatMap((e) => {
    if (e.kind !== `element` && e.kind !== `virtual`) return [];
    let t = a(e.elementName),
      n = xe(e.elementMetadata);
    return t == null && (n == null || Object.keys(n).length === 0)
      ? []
      : [{ elementName: t, elementMetadata: n }];
  });
}
function ui() {
  return (ui = e(() => {
    Ae();
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
      isSurfaceOverflowing: n,
      isVisible: r,
      maxHeight: i,
      metadataGroups: a,
      onExpandedSizeChange: o,
      onScrollReviewStateChange: s,
      onToggle: c,
      scrollReviewState: l,
      tooltipPortalContainer: u,
      viewportRef: d,
      windowWidth: f,
    } = e,
    p = De(),
    m = (0, Ci.useId)(),
    h = ae(),
    g = (0, Ci.useRef)(null),
    _ = (0, Ci.useRef)(null),
    v = (0, Ci.useRef)(null),
    b = (0, Ci.useRef)(!1),
    x = i == null ? void 0 : Math.min(Di, Math.max(Ei, i)),
    [C, w] = (0, Ci.useState)(),
    [T, E] = (0, Ci.useState)(!1),
    D;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { isCollapsed: !1, toggleSource: null }), (t[0] = D))
    : (D = t[0]);
  let [O, A] = (0, Ci.useState)(D),
    { isCollapsed: j, toggleSource: M } = O,
    N = a.reduce(vi, 0) >= 3,
    ee = N && (j || (l === `complete` && !n && !T)),
    P;
  t[1] !== j || t[2] !== o || t[3] !== x || t[4] !== d
    ? ((P = () => {
        if (j) return;
        let e = g.current,
          t = _.current,
          n = d.current;
        if (e == null || t == null || n == null) return;
        let r,
          i = () => {
            E(x != null && n.scrollHeight > n.clientHeight + 1);
            let i = x == null ? t.offsetHeight : Math.min(t.offsetHeight, x);
            if (i > 0) {
              let t = {
                width: x == null ? Math.ceil(e.getBoundingClientRect().width) : e.offsetWidth,
                height: i + e.offsetHeight - e.clientHeight,
              };
              (t.width !== r?.width || t.height !== r?.height) && ((r = t), w(t.height), o?.(t));
            }
          };
        i();
        let a = new (t.ownerDocument.defaultView?.ResizeObserver ?? ResizeObserver)(i);
        return (a.observe(t), x != null && a.observe(n), () => a.disconnect());
      }),
      (t[1] = j),
      (t[2] = o),
      (t[3] = x),
      (t[4] = d),
      (t[5] = P))
    : (P = t[5]);
  let te;
  (t[6] !== j || t[7] !== n || t[8] !== o || t[9] !== x || t[10] !== d || t[11] !== f
    ? ((te = [j, n, o, x, d, f]),
      (t[6] = j),
      (t[7] = n),
      (t[8] = o),
      (t[9] = x),
      (t[10] = d),
      (t[11] = f),
      (t[12] = te))
    : (te = t[12]),
    (0, Ci.useLayoutEffect)(P, te));
  let ne = (0, Ci.useEffectEvent)(s),
    F;
  t[13] !== j || t[14] !== r || t[15] !== ne || t[16] !== l
    ? ((F = () => {
        let e = _.current,
          t = v.current;
        if (r && !j && l !== `complete` && e != null && t != null) return di(e, ne, t);
      }),
      (t[13] = j),
      (t[14] = r),
      (t[15] = ne),
      (t[16] = l),
      (t[17] = F))
    : (F = t[17]);
  let re;
  (t[18] !== j || t[19] !== r || t[20] !== l
    ? ((re = [j, r, l]), (t[18] = j), (t[19] = r), (t[20] = l), (t[21] = re))
    : (re = t[21]),
    (0, Ci.useEffect)(F, re));
  let ie;
  t[22] !== j || t[23] !== c || t[24] !== d
    ? ((ie = (e, t) => {
        if (j === e) return !1;
        let n = d.current;
        return (e && n != null && (n.scrollTop = 0), A({ isCollapsed: e, toggleSource: t }), c(), !0);
      }),
      (t[22] = j),
      (t[23] = c),
      (t[24] = d),
      (t[25] = ie))
    : (ie = t[25]);
  let I = ie,
    L;
  t[26] !== ee || t[27] !== I
    ? ((L = (e) => ee && I(e, `pointer`)), (t[26] = ee), (t[27] = I), (t[28] = L))
    : (L = t[28]);
  let R = (0, Ci.useEffectEvent)(L),
    z;
  t[29] !== N || t[30] !== R
    ? ((z = () => {
        let e = g.current;
        if (!N || e == null) return;
        let t = null,
          n = !1,
          r = new mi(),
          i = (e) => {
            if (!(e.ctrlKey || e.shiftKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX))) {
              if (!r.isContinuation(e)) {
                if (!R(e.deltaY < 0)) return;
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
              if (Math.abs(i) < wi || Math.abs(i) <= Math.abs(e) || !R(i > 0)) return;
              ((n = !0), (b.current = !0));
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
      (t[30] = R),
      (t[31] = z))
    : (z = t[31]);
  let ce;
  (t[32] === N ? (ce = t[33]) : ((ce = [N]), (t[32] = N), (t[33] = ce)), (0, Ci.useEffect)(z, ce));
  let B = ee && `touch-pan-x touch-pinch-zoom`,
    le;
  t[34] === B
    ? (le = t[35])
    : ((le = S(`relative overflow-clip bg-surface-secondary select-none`, B)), (t[34] = B), (t[35] = le));
  let ue;
  t[36] !== C || t[37] !== j || t[38] !== M
    ? ((ue = M == null ? {} : { height: j ? 50 : (C ?? `auto`) }),
      (t[36] = C),
      (t[37] = j),
      (t[38] = M),
      (t[39] = ue))
    : (ue = t[39]);
  let de, fe;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (e) => {
        b.current && e.detail > 0 && ((b.current = !1), e.preventDefault(), e.stopPropagation());
      }),
      (fe = () => {
        b.current = !1;
      }),
      (t[40] = de),
      (t[41] = fe))
    : ((de = t[40]), (fe = t[41]));
  let pe = M == null ? `auto` : (C ?? `auto`),
    me;
  t[42] === pe ? (me = t[43]) : ((me = { height: pe }), (t[42] = pe), (t[43] = me));
  let he;
  t[44] !== h || t[45] !== M
    ? ((he = h || M !== `pointer` ? { duration: 0 } : oe), (t[44] = h), (t[45] = M), (t[46] = he))
    : (he = t[46]);
  let V;
  t[47] !== j || t[48] !== M || t[49] !== x
    ? ((V = S(x == null ? `contents` : [M != null && `h-full`, j ? `overflow-hidden` : `overflow-y-auto`])),
      (t[47] = j),
      (t[48] = M),
      (t[49] = x),
      (t[50] = V))
    : (V = t[50]);
  let H;
  t[51] === p
    ? (H = t[52])
    : ((H = p.formatMessage({
        id: `annotationCommentEditor.metadata.label`,
        defaultMessage: `Annotation metadata`,
        description: `Accessible label for the read-only metadata included with the selected browser element's annotation`,
      })),
      (t[51] = p),
      (t[52] = H));
  let ge;
  t[53] === x ? (ge = t[54]) : ((ge = x == null ? void 0 : { maxHeight: x }), (t[53] = x), (t[54] = ge));
  let _e;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Z.jsx)(W, {
        id: `annotationCommentEditor.metadata.sourceTooltip`,
        defaultMessage: `This metadata is provided by the webpage and included with your annotation`,
        description: `Tooltip on the tag icon explaining where an annotation's extra metadata comes from and that it is included when the annotation is submitted`,
      })),
      (t[55] = _e))
    : (_e = t[55]);
  let ve;
  t[56] === p
    ? (ve = t[57])
    : ((ve = p.formatMessage({
        id: `annotationCommentEditor.metadata.sourceLabel`,
        defaultMessage: `About annotation metadata`,
        description: `Accessible label for the tag icon that shows a tooltip about the source of an annotation's metadata`,
      })),
      (t[56] = p),
      (t[57] = ve));
  let be;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, Z.jsx)(ye, {})), (t[58] = be))
    : (be = t[58]);
  let xe;
  t[59] === ve
    ? (xe = t[60])
    : ((xe = (0, Z.jsx)(se, {
        className: `relative z-10 mt-0.5 shrink-0`,
        "aria-label": ve,
        color: `ghostTertiary`,
        size: `inline`,
        children: be,
      })),
      (t[59] = ve),
      (t[60] = xe));
  let Se;
  t[61] !== xe || t[62] !== u
    ? ((Se = (0, Z.jsx)(Te, {
        align: `start`,
        cloneCustomTrigger: !0,
        portalContainer: u,
        side: `top`,
        tooltipContent: _e,
        children: xe,
      })),
      (t[61] = xe),
      (t[62] = u),
      (t[63] = Se))
    : (Se = t[63]);
  let Ce;
  t[64] !== a || t[65] !== m
    ? ((Ce = (0, Z.jsx)(yi, { id: m, ref: v, metadataGroups: a })), (t[64] = a), (t[65] = m), (t[66] = Ce))
    : (Ce = t[66]);
  let we;
  t[67] !== N || t[68] !== j || t[69] !== m || t[70] !== l || t[71] !== I
    ? ((we = N
        ? (0, Z.jsxs)(se, {
            className: S(`text-xs`, j ? `absolute inset-0` : `mt-3`),
            "aria-controls": m,
            "aria-expanded": !j,
            "data-browser-sidebar-design-drag-handle": j ? `` : void 0,
            color: `ghostTertiary`,
            disabled: !j && l !== `complete`,
            focusRing: j ? `inset` : `default`,
            size: `inline`,
            onClick: (e) => {
              I(!j, e.detail === 0 ? `keyboard` : `pointer`);
            },
            children: [
              (0, Z.jsx)(`span`, {
                className: j ? `sr-only` : void 0,
                children: j
                  ? (0, Z.jsx)(W, {
                      id: `annotationCommentEditor.metadata.showMore`,
                      defaultMessage: `Show more`,
                      description: `Button label for expanding the annotation metadata list to show all fields`,
                    })
                  : (0, Z.jsx)(W, {
                      id: `annotationCommentEditor.metadata.showLess`,
                      defaultMessage: `Show less`,
                      description: `Button label for collapsing the annotation metadata list to a compact preview`,
                    }),
              }),
              j ? null : (0, Z.jsx)(k, { className: `rotate-180` }),
            ],
          })
        : null),
      (t[67] = N),
      (t[68] = j),
      (t[69] = m),
      (t[70] = l),
      (t[71] = I),
      (t[72] = we))
    : (we = t[72]);
  let Ee;
  t[73] !== Ce || t[74] !== we
    ? ((Ee = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col items-start`,
        children: [Ce, we],
      })),
      (t[73] = Ce),
      (t[74] = we),
      (t[75] = Ee))
    : (Ee = t[75]);
  let Oe;
  t[76] !== Se || t[77] !== Ee
    ? ((Oe = (0, Z.jsxs)(`div`, {
        ref: _,
        className: `relative flex items-start gap-3 px-4 py-2.5`,
        children: [Se, Ee],
      })),
      (t[76] = Se),
      (t[77] = Ee),
      (t[78] = Oe))
    : (Oe = t[78]);
  let U;
  t[79] !== V || t[80] !== H || t[81] !== ge || t[82] !== Oe || t[83] !== d
    ? ((U = (0, Z.jsx)(`div`, {
        ref: d,
        className: V,
        role: `region`,
        "aria-label": H,
        style: ge,
        children: Oe,
      })),
      (t[79] = V),
      (t[80] = H),
      (t[81] = ge),
      (t[82] = Oe),
      (t[83] = d),
      (t[84] = U))
    : (U = t[84]);
  let ke;
  return (
    t[85] !== le || t[86] !== ue || t[87] !== me || t[88] !== he || t[89] !== U
      ? ((ke = (0, Z.jsx)(y.section, {
          ref: g,
          className: le,
          animate: ue,
          "data-browser-comment-metadata": !0,
          initial: !1,
          onClickCapture: de,
          onPointerDownCapture: fe,
          style: me,
          transition: he,
          children: U,
        })),
        (t[85] = le),
        (t[86] = ue),
        (t[87] = me),
        (t[88] = he),
        (t[89] = U),
        (t[90] = ke))
      : (ke = t[90]),
    ke
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
    ((Si = j()),
      T(),
      v(),
      (Ci = g()),
      R(),
      B(),
      P(),
      U(),
      re(),
      fe(),
      hi(),
      (Z = b()),
      (wi = 8),
      (Ti = 400),
      (Ei = 68),
      (Di = 240));
  }))();
}
function ki(e) {
  let t = (0, Ai.c)(37),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]))
    : (({
        bodyRef: r,
        bodyHeight: n,
        bodyPosition: s,
        children: i,
        metadataHeader: a,
        viewportRef: l,
        viewportMaxHeight: c,
        viewportTransform: u,
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
      (t[8] = l),
      (t[9] = u));
  let d = s === void 0 ? `relative` : s,
    f = c == null ? `overflow-visible` : `pointer-events-auto overflow-y-auto`,
    p;
  t[10] === f ? (p = t[11]) : ((p = S(`w-fit max-w-full shrink-0`, f)), (t[10] = f), (t[11] = p));
  let m;
  t[12] !== c || t[13] !== u
    ? ((m = { maxHeight: c, transform: u }), (t[12] = c), (t[13] = u), (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] === a
    ? (h = t[16])
    : ((h =
        a == null
          ? null
          : (0, ji.jsx)(`div`, {
              className: `pointer-events-none absolute inset-0 bg-surface-secondary`,
              "aria-hidden": !0,
            })),
      (t[15] = a),
      (t[16] = h));
  let g = a != null && `overflow-hidden rounded-[inherit] bg-inherit shadow-md`,
    _;
  t[17] !== d || t[18] !== g ? ((_ = S(d, g)), (t[17] = d), (t[18] = g), (t[19] = _)) : (_ = t[19]);
  let v;
  t[20] === n ? (v = t[21]) : ((v = { height: n }), (t[20] = n), (t[21] = v));
  let y;
  t[22] !== r || t[23] !== i || t[24] !== _ || t[25] !== v
    ? ((y = (0, ji.jsx)(`div`, { ref: r, className: _, style: v, children: i })),
      (t[22] = r),
      (t[23] = i),
      (t[24] = _),
      (t[25] = v),
      (t[26] = y))
    : (y = t[26]);
  let b;
  t[27] !== a || t[28] !== o || t[29] !== h || t[30] !== y
    ? ((b = (0, ji.jsxs)(Pt, { ...o, children: [h, a, y] })),
      (t[27] = a),
      (t[28] = o),
      (t[29] = h),
      (t[30] = y),
      (t[31] = b))
    : (b = t[31]);
  let x;
  return (
    t[32] !== b || t[33] !== p || t[34] !== m || t[35] !== l
      ? ((x = (0, ji.jsx)(`div`, {
          ref: l,
          className: p,
          "data-browser-comment-editor-surface": !0,
          style: m,
          children: b,
        })),
        (t[32] = b),
        (t[33] = p),
        (t[34] = m),
        (t[35] = l),
        (t[36] = x))
      : (x = t[36]),
    x
  );
}
var Ai, ji;
function Mi() {
  return (Mi = e(() => {
    ((Ai = j()), T(), Ft(), (ji = b()));
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
      isRevealing: a,
      isVisible: o,
      scrollReviewState: s,
      onScrollReviewStateChange: c,
      ...l
    } = e,
    u = (0, Ri.useEffectEvent)(c),
    d;
  t[0] !== n || t[1] !== a || t[2] !== o || t[3] !== u || t[4] !== s
    ? ((d = () => {
        if (o && !a && s !== `complete`) return di(n.view.dom, u);
      }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o),
      (t[3] = u),
      (t[4] = s),
      (t[5] = d))
    : (d = t[5]);
  let f;
  if (
    (t[6] !== n || t[7] !== a || t[8] !== o || t[9] !== s
      ? ((f = [n, a, o, s]), (t[6] = n), (t[7] = a), (t[8] = o), (t[9] = s), (t[10] = f))
      : (f = t[10]),
    (0, Ri.useEffect)(d, f),
    r == null)
  )
    return (0, zi.jsx)(ft, { ...l, composerController: n });
  let p, m;
  t[11] === a
    ? ((p = t[12]), (m = t[13]))
    : ((p = (e) => {
        a && (e.preventDefault(), e.stopPropagation());
      }),
      (m = (e) => {
        a && (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), e.stopPropagation());
      }),
      (t[11] = a),
      (t[12] = p),
      (t[13] = m));
  let h = a
      ? (0, zi.jsx)(`div`, {
          className: S(`invisible col-start-1 row-start-1`, l.className),
          "aria-hidden": !0,
          inert: !0,
          children: (0, zi.jsx)(`div`, {
            ref: (e) => {
              if (e != null) {
                e.replaceChildren(
                  i
                    .fromSchema(r.originalDocument.type.schema)
                    .serializeFragment(r.originalDocument.content, { document: e.ownerDocument }),
                );
                for (let t of e.querySelectorAll(`p:empty`))
                  t.appendChild(e.ownerDocument.createElement(`br`));
              }
            },
            className: S(`ProseMirror`, Pi.SizingText),
          }),
        })
      : null,
    g = l.ariaLabel ?? l.placeholder,
    _ = a ? `` : l.placeholder,
    v;
  t[14] !== n || t[15] !== l || t[16] !== g || t[17] !== _
    ? ((v = (0, zi.jsx)(`div`, {
        className: `col-start-1 row-start-1 min-w-0`,
        children: (0, zi.jsx)(ft, { ...l, composerController: n, ariaLabel: g, placeholder: _ }),
      })),
      (t[14] = n),
      (t[15] = l),
      (t[16] = g),
      (t[17] = _),
      (t[18] = v))
    : (v = t[18]);
  let y;
  return (
    t[19] !== p || t[20] !== m || t[21] !== h || t[22] !== v
      ? ((y = (0, zi.jsxs)(`div`, {
          className: `grid min-w-0 grid-cols-1`,
          onClickCapture: p,
          onKeyDownCapture: m,
          children: [h, v],
        })),
        (t[19] = p),
        (t[20] = m),
        (t[21] = h),
        (t[22] = v),
        (t[23] = y))
      : (y = t[23]),
    y
  );
}
var Li, Ri, zi;
function Bi() {
  return (Bi = e(() => {
    ((Li = j()), T(), Ee(), (Ri = g()), q(), Fi(), (zi = b()));
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
        i.setSelection(_e.atEnd(i.doc)),
        i.setMeta(`addToHistory`, !1),
        t === r && i.setMeta(Gi, `ready`),
        e.dispatch(i));
    },
    c = new p({
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
    e.updateState(ne.create({ schema: e.state.schema, plugins: [...e.state.plugins, c] })),
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
    ((Hi = t(it(), 1)),
      D(),
      (Ui = 50),
      (Wi = 150),
      (Gi = new A(`page-comment-handoff`)),
      (Ki = ct(`grapheme`)));
  }))();
}
function Ji(e) {
  let t = (0, Yi.c)(10),
    { originalText: n, isRevealing: r, tooltipPortalContainer: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Xi.jsx)(`p`, {
        children: (0, Xi.jsx)(W, {
          id: `browserSidebarCommentOverlay.pagePromptExplanation`,
          defaultMessage: `The webpage suggested the following prompt. ChatGPT will receive only the text you submit.`,
          description: `Explanation above the original webpage-provided suggestion in an annotation tooltip, clarifying that the user controls the submitted prompt even after editing the suggestion`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === n
    ? (o = t[2])
    : ((o = (0, Xi.jsxs)(`div`, {
        className: `flex flex-col gap-2 p-3`,
        children: [
          a,
          (0, Xi.jsx)(`blockquote`, {
            className: `border-s-2 border-border ps-3 break-words whitespace-pre-wrap text-secondary`,
            children: n,
          }),
        ],
      })),
      (t[1] = n),
      (t[2] = o));
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, Xi.jsx)(ie, {})), (t[3] = s)) : (s = t[3]);
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = (0, Xi.jsxs)(se, {
        className: `max-w-full`,
        color: `ghostTertiary`,
        size: `compact`,
        type: `button`,
        children: [
          s,
          (0, Xi.jsx)(`span`, {
            className: `truncate`,
            children: r
              ? (0, Xi.jsx)(W, {
                  id: `browserSidebarCommentOverlay.fromThisPageInProgress`,
                  defaultMessage: `From the webpage…`,
                  description: `Visible footer attribution while a webpage-provided annotation prompt is being inserted; the ellipsis indicates that the handoff is still in progress`,
                })
              : (0, Xi.jsx)(W, {
                  id: `browserSidebarCommentOverlay.fromThisPage`,
                  defaultMessage: `From the webpage`,
                  description: `Footer attribution for a draft or saved annotation whose initial text was supplied by the webpage; its tooltip shows the original page-provided text even after the user edits the annotation`,
                }),
          }),
        ],
      })),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== o || t[7] !== c || t[8] !== i
      ? ((l = (0, Xi.jsx)(`div`, {
          className: `min-w-0`,
          children: (0, Xi.jsx)(Te, {
            cloneCustomTrigger: !0,
            align: `end`,
            closeOnTriggerBlur: !1,
            color: `default`,
            delayOpen: !0,
            disablePadding: !0,
            portalContainer: i,
            selectable: !0,
            side: `left`,
            sideOffset: 16,
            tooltipClassName: `overflow-y-auto`,
            tooltipMaxWidth: `min(20rem, var(--radix-tooltip-content-available-width, 100vw), calc(100vw - 16px))`,
            tooltipContent: o,
            children: c,
          }),
        })),
        (t[6] = o),
        (t[7] = c),
        (t[8] = i),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
var Yi, Xi;
function Zi() {
  return (Zi = e(() => {
    ((Yi = j()), R(), B(), P(), U(), (Xi = b()));
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
      o = r.annotationControlChanges?.find((e) => e.callback === n)?.value ?? a.currentValue ?? yt(a);
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
    ? ((u = (0, ea.jsx)(nn, { min: a.min, max: a.max, step: a.step, value: c, readOnly: !0, tabIndex: -1 })),
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
    (($i = j()), _t(), tn(), (ea = b()));
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
  let t = (0, Ta.c)(50),
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
      animatedSurfaceHeight: T,
      metadataAnchor: E,
      reservedTrayHeight: D,
      keyboardEventTarget: O,
      onSubmit: k,
      onDirectSubmit: A,
      onDesignChangeDelete: j,
      onDesignChangeUpdate: M,
      onDesignControlInteractionChange: N,
      onAnnotationSelectionHoverChange: ee,
      onAnnotationSelectionRemove: P,
      onTweaksEditorOpenChange: te,
      onDelete: ne,
      onCancel: F,
      onEscape: re,
      onMounted: ie,
      onBodyChange: I,
      onAttachmentPreviewOpenChange: ae,
      onDictationBusyChange: L,
      onLightDismissibilityChange: R,
      onRepositionInteractionChange: oe,
    } = e,
    se = n !== void 0 && n,
    z = r === void 0 || r,
    ce = a === void 0 || a,
    B = o === void 0 || o,
    le = s === void 0 || s,
    ue = c !== void 0 && c,
    de = l !== void 0 && l,
    fe = u === void 0 ? `saved` : u,
    pe = d === void 0 ? `composer` : d,
    me = f !== void 0 && f,
    he = p === void 0 || p,
    V = b === void 0 || b;
  if (_.surfaceMode === `preview`) {
    let e;
    return (
      t[0] !== ie || t[1] !== _ || t[2] !== V || t[3] !== x
        ? ((e = (0, $.jsx)(sa, { session: _, showAdjustEntry: V, windowHeight: x, onMounted: ie })),
          (t[0] = ie),
          (t[1] = _),
          (t[2] = V),
          (t[3] = x),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let H;
  return (
    t[5] !== le ||
    t[6] !== ue ||
    t[7] !== de ||
    t[8] !== B ||
    t[9] !== T ||
    t[10] !== y ||
    t[11] !== ce ||
    t[12] !== v ||
    t[13] !== pe ||
    t[14] !== fe ||
    t[15] !== me ||
    t[16] !== m ||
    t[17] !== i ||
    t[18] !== se ||
    t[19] !== z ||
    t[20] !== h ||
    t[21] !== he ||
    t[22] !== O ||
    t[23] !== C ||
    t[24] !== w ||
    t[25] !== E ||
    t[26] !== ee ||
    t[27] !== P ||
    t[28] !== ae ||
    t[29] !== I ||
    t[30] !== F ||
    t[31] !== ne ||
    t[32] !== j ||
    t[33] !== M ||
    t[34] !== N ||
    t[35] !== L ||
    t[36] !== A ||
    t[37] !== re ||
    t[38] !== R ||
    t[39] !== ie ||
    t[40] !== oe ||
    t[41] !== k ||
    t[42] !== te ||
    t[43] !== g ||
    t[44] !== D ||
    t[45] !== _ ||
    t[46] !== V ||
    t[47] !== x ||
    t[48] !== S
      ? ((H = (0, $.jsx)(
          ca,
          {
            enableRichText: se,
            enableSuggestions: z,
            dictationProductSurface: i,
            autoFocus: ce,
            session: _,
            isVisible: he,
            browserTabId: v,
            annotationSelectionAnchors: y,
            defaultDesignEditorOpen: me,
            defaultExpandedSpacingGroups: m,
            showAdjustEntry: V,
            windowHeight: x,
            windowWidth: S,
            maxSurfaceHeight: C,
            maxSurfaceWidth: w,
            animatedSurfaceHeight: T,
            metadataAnchor: E,
            reservedTrayHeight: D,
            keyboardEventTarget: O,
            onSubmit: k,
            onDirectSubmit: A,
            onDesignChangeDelete: j,
            onDesignChangeUpdate: M,
            onDesignControlInteractionChange: N,
            onAnnotationSelectionHoverChange: ee,
            onAnnotationSelectionRemove: P,
            onTweaksEditorOpenChange: te,
            onDelete: ne,
            onCancel: F,
            onEscape: re,
            onMounted: ie,
            onBodyChange: I,
            onAttachmentPreviewOpenChange: ae,
            onDictationBusyChange: L,
            onLightDismissibilityChange: R,
            onRepositionInteractionChange: oe,
            allowImageAttachments: B,
            allowDirectSubmit: le,
            allowDirectSubmitOnEdit: ue,
            allowEmptySubmit: de,
            defaultCreateSubmitMode: fe,
            createSubmitButtonSize: pe,
            inputAriaLabel: h,
            placeholder: g,
          },
          _.sessionId,
        )),
        (t[5] = le),
        (t[6] = ue),
        (t[7] = de),
        (t[8] = B),
        (t[9] = T),
        (t[10] = y),
        (t[11] = ce),
        (t[12] = v),
        (t[13] = pe),
        (t[14] = fe),
        (t[15] = me),
        (t[16] = m),
        (t[17] = i),
        (t[18] = se),
        (t[19] = z),
        (t[20] = h),
        (t[21] = he),
        (t[22] = O),
        (t[23] = C),
        (t[24] = w),
        (t[25] = E),
        (t[26] = ee),
        (t[27] = P),
        (t[28] = ae),
        (t[29] = I),
        (t[30] = F),
        (t[31] = ne),
        (t[32] = j),
        (t[33] = M),
        (t[34] = N),
        (t[35] = L),
        (t[36] = A),
        (t[37] = re),
        (t[38] = R),
        (t[39] = ie),
        (t[40] = oe),
        (t[41] = k),
        (t[42] = te),
        (t[43] = g),
        (t[44] = D),
        (t[45] = _),
        (t[46] = V),
        (t[47] = x),
        (t[48] = S),
        (t[49] = H))
      : (H = t[49]),
    H
  );
}
function sa(e) {
  let t = (0, Ta.c)(34),
    { session: n, showAdjustEntry: r, windowHeight: i, onMounted: a } = e,
    o = De(),
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
  let h = Mt,
    g;
  t[3] === n.previewAlignment
    ? (g = t[4])
    : ((g = S(`flex h-full w-full`, ya(n.previewAlignment))), (t[3] = n.previewAlignment), (t[4] = g));
  let _ = d ? `items-start py-2` : `items-center`,
    v;
  t[5] === _ ? (v = t[6]) : ((v = S(ja, _)), (t[5] = _), (t[6] = v));
  let y;
  t[7] === i ? (y = t[8]) : ((y = { height: i }), (t[7] = i), (t[8] = y));
  let b = d ? `items-start` : `items-center`,
    x;
  t[9] === b ? (x = t[10]) : ((x = S(`flex min-w-0 gap-2`, b)), (t[9] = b), (t[10] = x));
  let C;
  t[11] === l
    ? (C = t[12])
    : ((C = l
        ? (0, $.jsx)(`span`, {
            "aria-hidden": `true`,
            "data-testid": `annotation-comment-preview-tweak-icon`,
            className: `flex shrink-0 items-center justify-center pt-0.5 text-codex-description`,
            children: (0, $.jsx)(Qe, { className: `icon-sm` }),
          })
        : null),
      (t[11] = l),
      (t[12] = C));
  let w = d
      ? `overflow-hidden whitespace-pre-wrap break-words`
      : `overflow-hidden text-ellipsis whitespace-nowrap`,
    T;
  t[13] === w ? (T = t[14]) : ((T = S(Ma, w)), (t[13] = w), (t[14] = T));
  let E;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { fontSize: `var(--codex-chat-font-size)` }), (t[15] = E))
    : (E = t[15]);
  let D = s.length > 0 ? va(s) : u,
    O;
  t[16] !== T || t[17] !== E || t[18] !== D
    ? ((O = (0, $.jsx)(`div`, { className: T, style: E, children: D })),
      (t[16] = T),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] !== C || t[21] !== O || t[22] !== x
    ? ((k = (0, $.jsxs)(`div`, { className: x, children: [C, O] })),
      (t[20] = C),
      (t[21] = O),
      (t[22] = x),
      (t[23] = k))
    : (k = t[23]);
  let A;
  t[24] !== k || t[25] !== v || t[26] !== y
    ? ((A = (0, $.jsx)(`div`, { ref: f, className: v, style: y, children: k })),
      (t[24] = k),
      (t[25] = v),
      (t[26] = y),
      (t[27] = A))
    : (A = t[27]);
  let j;
  t[28] !== A || t[29] !== g
    ? ((j = (0, $.jsx)(`div`, { className: g, children: A })), (t[28] = A), (t[29] = g), (t[30] = j))
    : (j = t[30]);
  let M;
  return (
    t[31] !== j || t[32] !== h
      ? ((M = (0, $.jsx)(`div`, {
          className: `pointer-events-none flex h-full w-full overflow-visible bg-transparent text-default`,
          style: h,
          children: j,
        })),
        (t[31] = j),
        (t[32] = h),
        (t[33] = M))
      : (M = t[33]),
    M
  );
}
function ca({
  enableRichText: e,
  enableSuggestions: t,
  dictationProductSurface: r,
  autoFocus: i,
  session: a,
  isVisible: s,
  browserTabId: c,
  annotationSelectionAnchors: l,
  windowHeight: u,
  windowWidth: p,
  maxSurfaceHeight: m,
  maxSurfaceWidth: h,
  animatedSurfaceHeight: g,
  metadataAnchor: _,
  reservedTrayHeight: v,
  defaultDesignEditorOpen: y = !1,
  defaultExpandedSpacingGroups: b,
  showAdjustEntry: x = !0,
  keyboardEventTarget: w,
  onSubmit: T,
  onDirectSubmit: E,
  onDesignChangeDelete: D,
  onDesignChangeUpdate: O,
  onDesignControlInteractionChange: k,
  onAnnotationSelectionHoverChange: A,
  onAnnotationSelectionRemove: j,
  onTweaksEditorOpenChange: M,
  onDelete: ee,
  onCancel: P,
  onEscape: te,
  onMounted: ne,
  onBodyChange: F,
  onAttachmentPreviewOpenChange: re,
  onDictationBusyChange: ie,
  onLightDismissibilityChange: I,
  onRepositionInteractionChange: L,
  allowImageAttachments: R = !0,
  allowDirectSubmit: oe,
  allowDirectSubmitOnEdit: z,
  allowEmptySubmit: B,
  defaultCreateSubmitMode: le,
  createSubmitButtonSize: ue,
  inputAriaLabel: de,
  placeholder: fe,
}) {
  let V = n(N),
    H = De(),
    ge = ae(),
    _e = g != null,
    ye = ze(`2460218704`),
    be = he(lt),
    xe = he(Ne),
    Ce = a.siteAnnotationFeaturesEnabled !== !1,
    Ee = ma(a),
    U = a.draftBody ?? Ee,
    ke = Ce && c != null && a.pageInitialComment?.text.length ? a.pageInitialComment : void 0,
    [Ae, je] = (0, Q.useState)(() => a.target.mode !== `create` || ke?.shouldReveal !== !0 || ge),
    G = ke != null && !Ae,
    K = a.target.mode === `create` && ke != null,
    [Me, Pe] = (0, Q.useState)(() => (K ? `pending` : `complete`)),
    Fe = l != null && l.length > 1,
    Ie = x && !Fe,
    Le = x ? ga(a) : null,
    [{ commentEditor: q, pageCommentHandoff: We }] = (0, Q.useState)(() => {
      let n = Ct({ enableRichText: e, enableSuggestions: t });
      return G
        ? (n.setText(Ee), { commentEditor: n, pageCommentHandoff: Vi(n.view, () => je(!0)) })
        : { commentEditor: n, pageCommentHandoff: null };
    }),
    Ge = (0, Q.useCallback)(() => {
      q.view.isDestroyed || q.destroy();
    }, [q]);
  xt(Ge, q);
  let [Je, Xe] = (0, Q.useState)(U),
    [Ze, $e] = (0, Q.useState)(() => a.attachedImages ?? []),
    [et, nt] = (0, Q.useState)(() => (x ? (a.designEditorState ?? Le ?? null) : null)),
    [it] = (0, Q.useState)(() => ({
      withSiteControls: Le,
      withoutSiteControls:
        Le == null ? null : { ...Le, annotationControls: void 0, annotationControlChanges: void 0 },
    })),
    at = Ce ? it.withSiteControls : it.withoutSiteControls,
    [ot, st] = (0, Q.useState)(() => et != null && (y || a.target.mode === `design` || Le != null)),
    ct = l?.[0],
    ut = et?.anchor,
    ft =
      l == null ||
      (ct?.kind === `virtual` && ut?.kind === `virtual` && pe(ct, ut)) ||
      (ct?.kind === `element` &&
        ut?.kind === `element` &&
        ct.pageUrl === ut.pageUrl &&
        ct.frameUrl === ut.frameUrl &&
        ct.framePath.length === ut.framePath.length &&
        ct.framePath.every((e, t) => e === ut.framePath[t]) &&
        (ct.runtimeElementId != null || ut.runtimeElementId != null
          ? ct.runtimeElementId === ut.runtimeElementId
          : (ct.selector ?? ct.elementPath) === (ut.selector ?? ut.elementPath)) &&
        (ct.documentContext?.documentId ?? null) === (ut.documentContext?.documentId ?? null) &&
        (ct.documentContext?.tabId ?? null) === (ut.documentContext?.tabId ?? null)),
    gt = Ie && et != null && ft ? et : null,
    _t = ha(gt, Ce),
    yt = (!xe && !be) || (ut != null && d(ut.pageUrl)),
    bt = kn({ canEditDesign: _t != null, showAdjustEntry: Ie && yt }),
    J =
      _t != null &&
      ((yt && ot) ||
        (!yt &&
          ((a.target.mode === `edit` && Le != null) ||
            (Ce && a.pageRequestedDesignEditor === !0) ||
            _t.annotationControls?.controlsMode === `extend` ||
            (_t.annotationControls?.controls.length ?? 0) > 0))),
    Tt = Ce && (ye || ke != null) && a.anchorState != null ? li(a.anchorState) : void 0,
    Et = Tt != null && Tt.length > 0,
    Dt = (0, Q.useRef)(null),
    [kt, jt] = (0, Q.useState)(() => (K ? `pending` : `complete`)),
    Nt = K && Me === `required`,
    Pt = K && Et && kt === `required`,
    Ft = Nt || Pt,
    It = K && (Me === `pending` || (Et && kt === `pending`)),
    Bt = G || It || Ft,
    [Vt, Ut] = (0, Q.useState)(),
    [Gt, Kt] = (0, Q.useState)(!1),
    [qt, Jt] = (0, Q.useState)(),
    [Yt, Xt] = (0, Q.useState)(),
    [Zt, Qt] = (0, Q.useState)(!1),
    [$t, en] = (0, Q.useState)(!1),
    [tn, nn] = (0, Q.useState)(!1),
    [sn, cn] = (0, Q.useState)(!1),
    [ln, dn] = (0, Q.useState)(null),
    [pn, mn] = (0, Q.useState)(null),
    [gn, _n] = (0, Q.useState)(!1),
    [vn, yn] = (0, Q.useState)(null),
    bn = (0, Q.useRef)({ property: null, hasFocusedInput: !1, isControlEditing: !1, isDragging: !1 }),
    [xn, Cn] = (0, Q.useState)(!1),
    [wn, Tn] = (0, Q.useState)({ x: 0, y: 0 }),
    En = (e) => {
      (Cn(e), re?.(e));
    },
    Dn = (e) => {
      (e.preventDefault(), q.focus());
    },
    [On, An] = (0, Q.useState)(!1),
    [jn, Mn] = (0, Q.useState)(!1),
    Nn = he(wt),
    Pn = (0, Q.useRef)(U),
    Fn = (0, Q.useRef)(a.attachedImages ?? []),
    In = (0, Q.useRef)(null),
    Ln = (0, Q.useRef)(null),
    Rn = (0, Q.useRef)(gt);
  Rn.current = gt;
  let Bn = (0, Q.useRef)(null),
    Vn = (0, Q.useRef)(null),
    Hn = (0, Q.useRef)(null),
    Un = (0, Q.useRef)(null),
    Wn = (0, Q.useRef)(null),
    Gn = (0, Q.useRef)(null),
    Kn = (0, Q.useRef)(null),
    qn = (0, Q.useRef)(null),
    Jn = (0, Q.useRef)(0),
    Yn = (0, Q.useRef)(null),
    Xn = (0, Q.useRef)(null),
    Zn = (0, Q.useRef)(!1),
    Qn = (0, Q.useRef)(null),
    { data: $n } = he(vt),
    er = (0, Q.useMemo)(() => {
      if ($n?.roots.length) return $n.roots;
      if (a.cwd != null) return [a.cwd];
    }, [a.cwd, $n?.roots]),
    tr = At(q),
    nr = qe(q),
    rr = null;
  !G && tr.ui?.active === !0 ? (rr = `at`) : !G && nr.ui?.active === !0 && (rr = `skill`);
  let ir = J,
    ar = (K && tn) || (a.target.mode === `edit` && ke != null),
    or = J || Et || ar,
    sr = ke != null || a.target.mode === `edit` || tn || J,
    cr = Fe && (a.target.mode === `edit` || (a.target.mode === `create` && j != null)),
    { hasCommentText: lr } = rn({
      baselineDesignGroup: at,
      commentText: Je,
      designEditorState: _t,
      isDesignSubmissionMode: ir,
    }),
    { designDraft: ur } = rn({
      baselineDesignGroup: at,
      commentText: Je,
      designEditorState: _t,
      isDesignSubmissionMode: _t != null,
    }),
    dr = fn({ baselineDesignGroup: at, designDraft: ur, designEditorState: _t, isDesignEditorOpen: J }),
    fr = Ve(),
    pr = fr === !0,
    {
      getIsDictationStarting: mr,
      isDictationStarting: hr,
      isDictating: gr,
      isTranscribing: _r,
      canRetryDictation: vr,
      retryDictation: yr,
      waveformCanvasRef: br,
      startDictation: xr,
      stopDictation: Sr,
      transcriptionAction: Cr,
    } = dt({
      productSurface: r,
      enabled: pr && !G,
      getSurroundingText: () => q.getText(),
      onTranscriptInsert: (e) => {
        q.view.isDestroyed || q.appendText(e);
      },
      onTranscriptSend: (e) => {
        if (q.view.isDestroyed) return;
        q.appendText(e);
        let t = q.getText().trim();
        if (t.length === 0 || Bt) return;
        let n = {
          body: t,
          submitSource: `dictation`,
          ...(Fn.current.length === 0 ? {} : { attachedImages: Fn.current }),
        };
        if (a.target.mode === `create` && le === `direct`) {
          E(n);
          return;
        }
        Si(`saved`, `dictation`);
      },
      onStartError: () => {
        V.get(Oe).danger(
          H.formatMessage({
            id: `composer.dictation.startError`,
            defaultMessage: `Unable to start dictation`,
            description: `Toast text shown when dictation could not be started`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.startError` } },
        );
      },
      onTranscribeError: () => {
        V.get(Oe).danger(
          H.formatMessage({
            id: `composer.dictation.transcribeError`,
            defaultMessage: `Unable to transcribe audio`,
            description: `Toast text shown when dictation audio transcription fails`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.transcribeError` } },
        );
      },
      onUnsupported: () => {
        V.get(Oe).danger(
          H.formatMessage({
            id: `composer.dictation.unsupported`,
            defaultMessage: `Dictation is not available on this device`,
            description: `Toast text shown when dictation is not supported on the current device`,
          }),
          { errorAnalytics: { toastId: `composer.dictation.unsupported` } },
        );
      },
    }),
    wr = gr || _r,
    Tr = R && Ze.length > 0,
    Er = sr || Tr,
    Dr = ke == null && a.target.mode !== `edit` && !tn && !Tr,
    Or = !J && (Er || cr),
    kr = Or && !sr,
    Ar = Er && !wr ? 120 : 44,
    jr = v ?? Math.min(Math.max(u - 120, 0), 88),
    Mr = Et ? _ : void 0,
    Nr = m ?? Math.max(1, u - jr),
    Pr;
  wr ? (Pr = Yt) : Mr == null && !J && !Or && (Pr = 120);
  let Fr;
  Mr != null &&
    ((Nr = Math.min(Nr, Math.max(1, Mr.maxBottom - Mr.minTop))),
    (Fr = Math.min(Nr, Math.max(0, Mr.bodyTop - Mr.minTop + (qt ?? Ar)))));
  let Ir = K ? Math.ceil(Nr) : Nr,
    Lr = (Et || K || m != null) && ln != null && ln > Ir,
    Rr = rt(),
    { skills: zr } = Ye(er),
    Br = (0, Q.useCallback)(
      (e, t, n = Rn.current) => {
        (ie?.(hr || gr || _r),
          I(
            !hr && !gr && !_r && un(a.target.mode, Ee, e, ke?.text, a.attachedImages ?? [], t, at, ha(n, Ce)),
          ));
      },
      [Ce, at, ie, I, hr, gr, _r, ke?.text, a.attachedImages, Ee, a.target.mode],
    );
  (0, Q.useEffect)(() => {
    Br(Pn.current, Fn.current);
  }, [Br]);
  let Vr = (0, Q.useCallback)(
      (e, t = Un.current) => {
        let n = J && xa(e, Wn.current, t, K);
        cn((e) => (e === n ? e : n));
      },
      [K, J],
    ),
    Hr = (0, Q.useCallback)(
      (e) => {
        if (((Un.current = e), e == null)) {
          cn(!1);
          return;
        }
        Vr(Pn.current, e);
      },
      [Vr],
    ),
    Ur = (0, Q.useCallback)(() => {
      let e = q.getText();
      if (Pn.current === e) return;
      ((Pn.current = e),
        Xe(e),
        F?.(e),
        nn(a.target.mode !== `edit` && ba(e, q.view.state.doc.childCount > 1, Wn.current, Bn.current, K)),
        Vr(e),
        Br(e, Fn.current));
      let t = ha(Rn.current, Ce);
      ir && t != null && O?.(an(t, at, e.trim()));
    }, [Ce, at, q, K, ir, F, O, a.target.mode, Vr, Br]);
  ((0, Q.useEffect)(
    () =>
      K
        ? Ot(q.view, (e) => {
            e &&
              (We == null || We.isComplete()) &&
              queueMicrotask(() => {
                q.view.dom.isConnected && (0, Da.flushSync)(Ur);
              });
          })
        : Ot(q.view, Ur),
    [q, Ur, K, We],
  ),
    (0, Q.useEffect)(() => {
      q.syncMentionMetadata({ skills: zr, apps: Rr });
    }, [Rr, zr, q]),
    (0, Q.useLayoutEffect)(() => {
      if (Gn.current === a.sessionId) return;
      Gn.current = a.sessionId;
      let e = a.attachedImages ?? [];
      ((We == null || We.isComplete()) && (K ? q.setText(U) : q.setPromptText(U)),
        (Pn.current = U),
        (Fn.current = e),
        F?.(U),
        Xe(U),
        $e(e),
        en(!1),
        Qt(!1),
        (qn.current = null),
        nn(
          a.target.mode !== `edit` &&
            ba(U, (We?.originalDocument ?? q.view.state.doc).childCount > 1, Wn.current, Bn.current, K),
        ),
        Br(U, e));
    }, [q, K, We, a.attachedImages, U, a.sessionId, a.target.mode, F, Br]),
    C(
      `browser-sidebar-comment-overlay-insert-text`,
      (e) => {
        if (
          c == null ||
          a.conversationId == null ||
          e.browserTabId !== c ||
          e.conversationId !== a.conversationId ||
          e.sessionId !== a.sessionId
        )
          return;
        let t = Kn.current;
        (t?.sessionId === e.sessionId && t.sequence >= e.sequence) ||
          ((Kn.current = { sequence: e.sequence, sessionId: e.sessionId }),
          We?.finish(),
          q.focus(),
          q.insertTextAtSelection(e.text));
      },
      [c, q, We, a.conversationId, a.sessionId],
    ),
    (0, Q.useEffect)(() => {
      !K || ge ? We?.finish() : s && We?.start();
    }, [K, s, We, ge]),
    (0, Q.useLayoutEffect)(() => {
      if (wr) return;
      let e = Bn.current,
        t = Vn.current,
        n = Hn.current,
        r = In.current;
      if (e == null || t == null || n == null || r == null) return;
      let i = () => {
        if (K && !e.contains(q.view.dom)) return;
        let i = e.getBoundingClientRect(),
          o = n.getBoundingClientRect(),
          s = t.getBoundingClientRect(),
          c = _e ? s.height : i.bottom - s.top;
        (Jt(c), Xt(_e ? t.offsetHeight : n.offsetHeight));
        let l = Vt != null && (K ? Math.abs(Vt.width - i.width) <= 1 : Vt.width === Math.ceil(i.width)),
          u = _e ? s.height : i.height;
        Et && Vt != null && (Gt || l) && (u = Vt.height + s.height);
        let d = Math.max(0, u - c),
          f = { width: Math.ceil(o.width), height: Math.ceil(u) };
        dn(f.height);
        let p = h ?? r.getBoundingClientRect().width,
          m = Math.ceil(Math.max(1, Math.min(me.width, p) - (n.offsetWidth - n.clientWidth))),
          g =
            !Et ||
            Gt ||
            (K
              ? i.width > 0 &&
                Math.abs(i.width - m) <= 1 &&
                Vt != null &&
                Math.abs(Vt.width - m) <= 1 &&
                Math.abs(i.height - u) <= 1 &&
                Lr === f.height > Ir
              : Math.ceil(i.width) === m &&
                Vt?.width === m &&
                Math.ceil(i.height) === f.height &&
                Lr === f.height > Ir);
        Et && g && Kt(!0);
        let _ = [
          a.sessionId,
          f,
          or ? { width: me.width, height: J ? Math.max(me.height, f.height) : f.height } : void 0,
          d,
          g,
        ];
        (0, Ea.default)(qn.current, _) || ((qn.current = _), ne(..._));
      };
      i();
      let o = new (e.ownerDocument.defaultView?.ResizeObserver ?? ResizeObserver)(() => {
        Et || K ? (0, Da.flushSync)(i) : i();
      });
      return (o.observe(t), _e || (o.observe(e), o.observe(n)), () => o.disconnect());
    }, [q, Vt, _e, K, Et, Gt, J, wr, Lr, or, h, ne, a.sessionId, Ir, p]),
    (0, Q.useEffect)(() => {
      if (!gn) return;
      let e = Hn.current;
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
    }, [gn]));
  let Wr = (0, Q.useEffectEvent)(() => {
    ((bn.current = { property: null, hasFocusedInput: !1, isControlEditing: !1, isDragging: !1 }),
      k?.({ property: null, isEditingControl: !1 }));
  });
  (0, Q.useEffect)(
    () => () => {
      (Wr(),
        Yn.current != null && globalThis.clearTimeout(Yn.current),
        Xn.current != null && globalThis.clearTimeout(Xn.current));
    },
    [],
  );
  let Gr = (0, Q.useEffectEvent)((e) => {
    if (xn) return;
    let t = q.view.dom,
      n = t.ownerDocument.activeElement;
    (!e || n == null || Ln.current !== n || t.contains(n)) &&
      (G ? t.focus({ preventScroll: !0 }) : q.focus());
  });
  (0, Q.useEffect)(() => {
    let e = w ?? q.view.dom.ownerDocument.defaultView;
    if (!i || e == null) return;
    let t = (t) => {
        e.requestAnimationFrame(() => {
          Gr(t);
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
  }, [i, q, w]);
  let Kr = H.formatMessage({
      id: `browserSidebarCommentOverlay.comment`,
      defaultMessage: `Comment`,
      description: `Primary action for creating a new browser comment`,
    }),
    qr = H.formatMessage({
      id: `browserSidebarCommentOverlay.scrollToBottom`,
      defaultMessage: `Scroll to bottom`,
      description: `Action replacing submit until the user has scrolled to the bottom of the initial annotation prompt provided by a webpage`,
    }),
    Jr = H.formatMessage({
      id: `browserSidebarCommentOverlay.addTweaks`,
      defaultMessage: `Add`,
      description: `Primary action for adding browser tweaks`,
    }),
    Yr = H.formatMessage({
      id: `browserSidebarCommentOverlay.send.tooltip`,
      defaultMessage: `Send`,
      description: `Action label shown in the browser comment submit tooltip for sending a comment`,
    }),
    Y = H.formatMessage({
      id: `browserSidebarCommentOverlay.delete`,
      defaultMessage: `Delete`,
      description: `Delete action for the browser comment overlay`,
    }),
    Xr = H.formatMessage({
      id: `browserSidebarCommentOverlay.tweak`,
      defaultMessage: `Adjust`,
      description: `Accessible label for opening browser design adjustment controls from the comment editor`,
    }),
    X =
      fe ??
      (ir &&
      (_t?.annotationControls?.controlsMode !== `replace` || _t.annotationControls.controls.length === 0)
        ? H.formatMessage({
            id: `browserSidebarCommentOverlay.tweaksPlaceholder`,
            defaultMessage: `Describe these changes...`,
            description: `Placeholder text for the browser tweaks editor comment field`,
          })
        : H.formatMessage({
            id: `browserSidebarCommentOverlay.placeholder`,
            defaultMessage: `Add a comment…`,
            description: `Placeholder text for the browser comment editor`,
          })),
    Zr = a.target.mode === `edit` ? a.target.commentId : null,
    Qr = fr == null || fr,
    $r = Zr == null && !sr && !lr && !Ft && fr == null,
    ei = !gr && Qr && (hr || sr || (!lr && !Ft)),
    ti = !$r && !hr && !gr && (Ft || sr || lr || !pr),
    ni = dr ? (at == null ? ur != null || lr : !on(ur, at)) : B || lr,
    ri = G || It || (!Ft && !ni),
    ii = f(),
    ai = w?.document.body === document.body ? null : (w?.document.body ?? null),
    oi = Zr == null && oe && jn && Nn,
    si = ii ? `⏎` : `Enter`,
    ci = ii ? `⌘⏎` : `Ctrl+Enter`,
    ui = oe ? le : `saved`,
    di = ui === `direct` ? !oi : oi,
    fi = di ? (0, $.jsx)(we, {}) : (0, $.jsx)(o, {});
  (ir && (Kr = di ? Yr : Jr), Ft && ((Kr = qr), (fi = (0, $.jsx)(ve, {}))));
  let pi;
  Nt && Pt
    ? (pi = (0, $.jsx)(W, {
        id: `browserSidebarCommentOverlay.reviewPromptAndMetadataBeforeSubmitting`,
        defaultMessage: `Review the full prompt and metadata before submitting`,
        description: `Tooltip for the scroll-to-bottom action when both the webpage-supplied annotation prompt and metadata still need review`,
      }))
    : Pt
      ? (pi = (0, $.jsx)(W, {
          id: `browserSidebarCommentOverlay.reviewMetadataBeforeSubmitting`,
          defaultMessage: `Review all metadata before submitting`,
          description: `Tooltip for the scroll-to-bottom action when only the webpage-supplied annotation metadata still needs review`,
        }))
      : Nt &&
        (pi = (0, $.jsx)(W, {
          id: `browserSidebarCommentOverlay.reviewPromptBeforeSubmitting`,
          defaultMessage: `Review the full prompt before submitting`,
          description: `Tooltip for the scroll-to-bottom action when only the webpage-supplied annotation prompt still needs review`,
        }));
  let mi = at?.status === `queued` ? at : null,
    hi = Zr != null || J || mi != null,
    _i = sr && !gr && (hi || ke != null),
    vi = hi
      ? (0, $.jsx)(se, {
          color: `outline`,
          size: `composer`,
          tabIndex: _i ? void 0 : -1,
          onClick: () => {
            P();
          },
          children: (0, $.jsx)(W, {
            id: `browserSidebarCommentOverlay.cancel`,
            defaultMessage: `Cancel`,
            description: `Cancel action for the browser comment overlay`,
          }),
        })
      : null,
    yi =
      pn == null || et == null
        ? null
        : pn.rows.flatMap((e) => {
            let t = la(et.declarations, e.property);
            return t == null ? [] : [{ row: e, value: t }];
          }),
    bi = (0, Q.useCallback)(
      (e) =>
        new Promise((t) => {
          let n = new FileReader(),
            r = e.name.trim().length > 0 ? e.name : void 0,
            i = St(e, window.electronBridge?.getPathForFile) ?? void 0;
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
    xi = (0, Q.useCallback)(
      (e) => {
        R &&
          !G &&
          Promise.all(e.map((e) => bi(e))).then((e) => {
            let t = e.filter((e) => e != null);
            if (t.length === 0) return;
            let n = [...Fn.current, ...t];
            ((Fn.current = n), $e(n), Br(Pn.current, n));
          });
      },
      [R, G, bi, Br],
    );
  function Si(e, t = `button`) {
    if (Bt) return;
    let n = ha(Rn.current, Ce),
      r = hn({
        submitMode: e,
        submitSource: t,
        commentText: q.getText(),
        attachedImages: Fn.current,
        allowImageAttachments: R,
        allowEmptySubmit: B,
        baselineDesignGroup: at,
        designEditorState: n,
        isDesignEditorOpen: J,
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
  let Ci = ui === `direct` ? `saved` : `direct`,
    Z = () => {
      if (Ft) {
        for (let e of [Nt ? q.view.dom.parentElement : null, Pt ? Dt.current : null])
          e?.scrollTo({ top: e.scrollHeight, behavior: ge ? `instant` : `smooth` });
        return;
      }
      Si(oi ? Ci : ui, `button`);
    };
  ((0, Q.useEffect)(() => {
    if (!R) return;
    let e = (e) => {
      xi(e);
    };
    return (
      q.addPastedImagesHandler(e),
      () => {
        q.removePastedImagesHandler(e);
      }
    );
  }, [xi, R, q]),
    Ue({
      enabled: pr && !G,
      getIsDictationStarting: mr,
      isDictationStarting: hr,
      isDictating: gr,
      isTranscribing: _r,
      startDictation: xr,
      stopDictation: Sr,
      keyboardEventTarget: w,
      shouldHandleDictation: () => q.view.dom.contains(q.view.dom.ownerDocument.activeElement),
    }),
    (0, Q.useEffect)(() => {
      if (w == null || Zr != null) return;
      let e = () => {
          let e = w.document.activeElement;
          Mn(e != null && q.view.dom.contains(e));
        },
        t = () => {
          w.requestAnimationFrame(e);
        },
        n = () => {
          Mn(!1);
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
    }, [q, Zr, w]));
  let wi = (e) => {
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
          t != null && t !== window && Se();
          return;
        }
        if (
          e.nativeEvent.composedPath().includes(q.view.dom) &&
          q.view.someProp(`handleKeyDown`, (t) => t(q.view, e.nativeEvent))
        ) {
          (e.preventDefault(), e.stopPropagation());
          return;
        }
        if ((e.preventDefault(), e.stopPropagation(), n)) {
          n.blur();
          return;
        }
        te();
        return;
      }
      let r = e.nativeEvent.composedPath();
      if (
        e.key === `Enter` &&
        !e.altKey &&
        !e.shiftKey &&
        (e.metaKey || e.ctrlKey) &&
        r.includes(e.currentTarget) &&
        (ir || jn || r.includes(q.view.dom))
      ) {
        if ((e.preventDefault(), e.stopPropagation(), e.repeat)) return;
        Si(Zr != null && oe && z ? `direct` : Zr != null || !oe ? `saved` : Ci, `keyboard`);
        return;
      }
      if (
        ir &&
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
    Ti = (e) => {
      if (G) return;
      let t = q.view.dom,
        n = t.ownerDocument.defaultView;
      n != null && e.target instanceof n.Node && (t.contains(e.target) || (e.preventDefault(), t.focus()));
    },
    Ei = () => {
      ((Jn.current = 0), An(!1));
    },
    Di = () => {
      Yn.current != null && (globalThis.clearTimeout(Yn.current), (Yn.current = null));
    },
    Oi = () => {
      Xn.current != null && (globalThis.clearTimeout(Xn.current), (Xn.current = null));
    },
    Ai = () => {
      _t != null && (Di(), en(!1), Tn({ x: 0, y: 0 }), st(!0), M?.(!0));
    },
    ji = () => {
      if ((Di(), st(!1), cn(!1), M?.(!1), Qt(!1), !Dr)) {
        en(!1);
        return;
      }
      (en(!0),
        (Yn.current = globalThis.setTimeout(() => {
          (en(!1), (Yn.current = null));
        }, Qa)));
    },
    Mi = (e) => {
      if (J) {
        ji();
        return;
      }
      if (Zt || $t) return;
      (Di(), en(!1));
      let t = e.currentTarget.ownerDocument.defaultView;
      if (typeof t?.matchMedia == `function` && t.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        Ai();
        return;
      }
      (Qt(!0),
        Ai(),
        globalThis.setTimeout(() => {
          Qt(!1);
        }, Qa));
    },
    Ni = (e) => {
      let t = an(e, at, Pn.current.trim());
      ((Rn.current = e), nt(e), Br(Pn.current, Fn.current, e), O?.(t));
    },
    Pi = () => {
      let e = bn.current;
      k?.({
        property: e.property,
        isEditingControl: e.hasFocusedInput || e.isControlEditing || e.isDragging || e.property != null,
      });
    },
    Fi = (e) => {
      ((bn.current.isDragging = e), _n(e), Pi());
    },
    Li = (e) => {
      ((bn.current.isControlEditing = e), Pi());
    },
    Ri = (e, t) => {
      ((bn.current.property = t?.type === `range` ? null : e), (bn.current.isDragging = e != null), Pi());
      let n = In.current?.getBoundingClientRect();
      if (e == null) {
        (Oi(),
          _n(!1),
          (Xn.current = globalThis.setTimeout(() => {
            (mn(null), yn(null), (Xn.current = null));
          }, $a)));
        return;
      }
      if ((Oi(), t == null || n == null)) {
        (_n(!1), mn(null));
        return;
      }
      if (t.type === `range`) {
        let r = t.parentElement?.getBoundingClientRect();
        r != null &&
          (mn(null),
          yn({
            callback: e,
            rect: { height: r.height, left: r.left - n.left, top: r.top - n.top, width: r.width },
          }),
          _n(!0));
        return;
      }
      yn(null);
      let r = t.closest(`[data-browser-sidebar-design-scrub-value-cell]`);
      if (r == null) {
        (_n(!1), mn(null));
        return;
      }
      let i = r.dataset.browserSidebarDesignScrubPeerProperty,
        a =
          i == null
            ? null
            : (Array.from(
                Bn.current?.querySelectorAll(`[data-browser-sidebar-design-scrub-property]`) ?? [],
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
        (_n(!1), mn(null));
        return;
      }
      let c = Math.min(...s.map((e) => e.rowLeft)),
        l = Math.max(...s.map((e) => e.rowRight)),
        u = Math.min(...s.map((e) => e.rowTop)),
        d = Math.max(...s.map((e) => e.rowBottom));
      (_n(!0),
        mn({
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
    zi = bt,
    Bi = (e) => {
      pt(e, { onAtMention: tr.handleMentionEvent, onSkillMention: nr.handleMentionEvent });
    },
    Hi = c != null && !J,
    Ui = (e) => {
      Zn.current = !1;
      let t = ua(e);
      if ((!J && !Hi) || !e.isPrimary || e.button !== 0 || Hn.current == null || t == null) return;
      let n = Hn.current.getBoundingClientRect(),
        r = wr ? (In.current?.getBoundingClientRect().height ?? n.height) : n.height,
        i = e.currentTarget.ownerDocument.defaultView,
        a = J ? 0 : jr;
      ((Qn.current = {
        baseLeft: n.left - wn.x,
        baseTop: n.bottom - r - a - wn.y,
        captureTarget: t,
        cardHeight: r + a,
        cardWidth: n.width,
        dragged: !1,
        offsetX: wn.x,
        offsetY: wn.y,
        pointerId: e.pointerId,
        reportsRepositionInteraction: c != null,
        startClientX: e.clientX,
        startClientY: e.clientY,
        viewportHeight: i?.innerHeight ?? 1 / 0,
        viewportWidth: i?.innerWidth ?? 1 / 0,
      }),
        c != null && L?.(!0),
        t.setPointerCapture(e.pointerId));
    },
    Wi = (e) => {
      let t = Qn.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = e.clientX - t.startClientX,
        r = e.clientY - t.startClientY;
      if (!t.dragged && Math.hypot(n, r) <= Za) return;
      ((t.dragged = !0), (Zn.current = !0));
      let i = t.offsetX + n,
        a = t.offsetY + r,
        o = Xa - t.baseLeft,
        s = t.viewportWidth - t.cardWidth - Xa - t.baseLeft,
        c = Xa - t.baseTop,
        l = t.viewportHeight - t.cardHeight - Xa - t.baseTop;
      (e.preventDefault(),
        Tn({ x: s < o ? i : Math.min(Math.max(i, o), s), y: l < c ? a : Math.min(Math.max(a, c), l) }));
    },
    Gi = (e) => {
      let t = Qn.current;
      t?.pointerId === e.pointerId &&
        ((Qn.current = null),
        t.reportsRepositionInteraction && L?.(!1),
        t.captureTarget.hasPointerCapture(e.pointerId) && t.captureTarget.releasePointerCapture(e.pointerId));
    },
    Ki = `translate3d(${wn.x}px, ${wn.y}px, 0px)`;
  return (0, $.jsx)(`form`, {
    className: `pointer-events-none relative flex h-full w-full flex-col overflow-visible bg-transparent text-default`,
    "aria-busy": G,
    style: { ...Mt, transform: J ? void 0 : Ki, top: Mr?.minTop, height: Fr },
    onFocusCapture: (e) => {
      Ln.current = e.target;
    },
    onKeyDownCapture: wi,
    onSubmit: (e) => {
      if ((e.preventDefault(), Zr == null)) {
        Si(ui, `button`);
        return;
      }
      Si(`saved`, `button`);
    },
    children: (0, $.jsxs)(`div`, {
      ref: In,
      className: S(ka, Mr == null ? `absolute` : `relative mt-auto shrink-0`, wr && `justify-end`),
      style: { top: Mr == null ? jr : void 0, height: Pr },
      children: [
        (0, $.jsx)(`div`, {
          className: Oa,
          style: { height: jr },
          children:
            rr != null && jr > 0
              ? (0, $.jsxs)(`div`, {
                  "data-browser-comment-editor-tray-surface": !0,
                  className: `pointer-events-auto max-h-full w-full`,
                  children: [
                    rr === `at`
                      ? (0, $.jsx)(Re, {
                          className: `max-h-full w-full`,
                          chromeVariant: `default`,
                          hostId: ce,
                          keyboardEventTarget: w,
                          onAddContext: tr.addMention,
                          onRequestClose: tr.closeAutocomplete,
                          onUpdateSelectedMention: tr.setSelectedMention,
                          query: tr.ui?.query ?? ``,
                          fileSearchRootPaths: er ?? [],
                          skillRoots: er,
                          source: tr.ui?.source ?? null,
                        })
                      : null,
                    rr === `skill`
                      ? (0, $.jsx)(He, {
                          className: `max-h-full w-full`,
                          query: nr.ui?.query ?? ``,
                          keyboardEventTarget: w,
                          onUpdateSelectedMention: nr.setSelectedMention,
                          onAddMention: nr.addMention,
                          onRequestClose: nr.closeAutocomplete,
                          cwd: a.cwd ?? void 0,
                          roots: er,
                          chromeVariant: `default`,
                        })
                      : null,
                  ],
                })
              : null,
        }),
        (0, $.jsxs)(ki, {
          ref: Bn,
          className: S(
            `relative max-w-full shrink-0`,
            { "w-[344px]": or, "w-[294px]": !or },
            On && `bg-surface-elevated ring-ring`,
            gn ? `opacity-0 duration-relaxed` : `duration-basic`,
          ),
          bodyRef: Vn,
          bodyPosition: _e ? `static` : `relative`,
          bodyHeight: wr || (!J && !Or) ? Ar : void 0,
          metadataHeader: Et
            ? (0, $.jsx)(
                gi,
                {
                  isSurfaceOverflowing: Lr,
                  isVisible: s && !G && Gt,
                  maxHeight: K ? (Fr ?? Nr) - (qt ?? Ar) : void 0,
                  metadataGroups: Tt,
                  onExpandedSizeChange: Ut,
                  onScrollReviewStateChange: jt,
                  onToggle: () => q.focus(),
                  scrollReviewState: K ? kt : `complete`,
                  tooltipPortalContainer: ai,
                  viewportRef: Dt,
                  windowWidth: p,
                },
                a.sessionId,
              )
            : null,
          viewportRef: Hn,
          viewportMaxHeight: Lr ? Nr : void 0,
          viewportTransform: J ? Ki : void 0,
          isRevealingPageComment: G,
          style: { height: wr ? void 0 : g, transition: ge || (Et && !Gt) ? `none` : void 0 },
          onDragEnter: (e) => {
            R &&
              tt(e.dataTransfer) &&
              (e.preventDefault(),
              e.stopPropagation(),
              (e.dataTransfer.dropEffect = `copy`),
              (Jn.current += 1),
              An(!0));
          },
          onDragOver: (e) => {
            R &&
              tt(e.dataTransfer) &&
              (e.preventDefault(), e.stopPropagation(), (e.dataTransfer.dropEffect = `copy`), On || An(!0));
          },
          onDragLeave: (e) => {
            R &&
              tt(e.dataTransfer) &&
              (e.preventDefault(),
              e.stopPropagation(),
              (Jn.current = Math.max(0, Jn.current - 1)),
              Jn.current === 0 && An(!1));
          },
          onDrop: (e) => {
            if (!R || !tt(e.dataTransfer)) return;
            (e.preventDefault(), e.stopPropagation());
            let t = Be(e.dataTransfer);
            (t.length > 0 && xi(t), Ei());
          },
          onClickCapture: (e) => {
            Zn.current && e.detail > 0 && ((Zn.current = !1), e.preventDefault(), e.stopPropagation());
          },
          onLostPointerCapture: Gi,
          onPointerCancel: Gi,
          onPointerDown: Ui,
          onPointerMove: Wi,
          onPointerUp: Gi,
          children: [
            zi
              ? (0, $.jsx)(se, {
                  "aria-label": Xr,
                  "data-browser-sidebar-design-editor-toggle": !0,
                  className: `absolute top-2 left-3 z-10`,
                  color: J ? `secondary` : `ghost`,
                  size: `composer`,
                  disabled: G,
                  title: Xr,
                  type: `button`,
                  uniform: !0,
                  onClick: Mi,
                  children: (0, $.jsx)(`span`, {
                    className: ia.DesignEditorEntry,
                    "data-animation-state": J ? void 0 : $t ? `entering` : Zt ? `exiting` : `visible`,
                    "data-browser-sidebar-design-editor-entry-enter": !J && $t ? `` : void 0,
                    children: (0, $.jsx)(Qe, { className: `icon-sm origin-center` }),
                  }),
                })
              : null,
            Tr
              ? (0, $.jsx)(`div`, {
                  "data-browser-comment-editor-attachment-row": !0,
                  className: S(
                    `absolute right-3 flex gap-1.5 overflow-x-auto pb-1`,
                    Ua,
                    bt ? `left-12` : `left-3`,
                  ),
                  children: Ze.map((e, t) =>
                    (0, $.jsx)(
                      Ke,
                      {
                        src: e.dataUrl,
                        filename: e.filename,
                        previewPortalContainer: w?.document.body ?? null,
                        onPreviewCloseAutoFocus: Dn,
                        onPreviewOpenChange: En,
                        onRemove: () => {
                          let e = Fn.current.filter((e, n) => n !== t);
                          ((Fn.current = e), $e(e), Br(Pn.current, e));
                        },
                      },
                      `${e.filename ?? `image`}-${t}`,
                    ),
                  ),
                })
              : null,
            cr
              ? (0, $.jsx)(`div`, {
                  className: S(`min-w-0 pe-3`, bt ? `ps-12` : `ps-3`, Tr ? `pt-24` : `pt-2`),
                  children: (0, $.jsx)(Sn, {
                    anchors: l,
                    onSelectionHoverChange: A,
                    onRemove: a.target.mode === `create` ? j : void 0,
                  }),
                })
              : null,
            J && _t != null
              ? (0, $.jsxs)(`div`, {
                  "data-browser-comment-design-editor-stack": !0,
                  className: S(Ya, Tr ? Ga : `pt-2`, sn ? `gap-0` : `gap-2`),
                  children: [
                    (0, $.jsx)(`div`, {
                      ref: Hr,
                      "data-browser-comment-design-prompt-shell": !0,
                      className: S(
                        `translate-y-0.5 transition-[height,min-height,max-height] duration-[140ms] ease-enter-snappy motion-reduce:transition-none`,
                        G && `transition-none`,
                        zi && `ms-8`,
                        sn ? S(qa, !ye && `max-h-[84px]`) : `h-7 min-h-0 overflow-hidden`,
                      ),
                      children: (0, $.jsx)(`div`, {
                        className: S(`min-h-0`, !sn && `h-full`),
                        children: (0, $.jsx)(Ii, {
                          className: S(
                            Rt,
                            sn && (ye ? Ja : `!h-auto !max-h-[84px] overflow-y-auto pb-2`),
                            !sn &&
                              `!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap`,
                          ),
                          composerController: q,
                          handoff: We,
                          isRevealing: G,
                          isVisible: s,
                          scrollReviewState: K ? Me : `complete`,
                          onScrollReviewStateChange: Pe,
                          disableAutoFocus: !i,
                          ariaLabel: de,
                          minHeight: `1.5rem`,
                          placeholder: X,
                          onSuggestionHandler: Bi,
                          onSubmit: () => Si(ui, `keyboard`),
                        }),
                      }),
                    }),
                    (0, $.jsx)(`div`, {
                      className: `contents`,
                      inert: G,
                      onFocusCapture: (e) => {
                        ((bn.current.hasFocusedInput = e.target.matches(
                          `input:not([type='range']), textarea, select`,
                        )),
                          Pi());
                      },
                      onBlurCapture: () => {
                        ((bn.current.hasFocusedInput = !1), Pi());
                      },
                      children: (0, $.jsx)(
                        zn,
                        {
                          canEditAnnotationControls: ye && Ce,
                          defaultExpandedSpacingGroups: b,
                          dropdownPortalContainer: w?.document.body ?? null,
                          editorState: _t,
                          isEditable: !0,
                          onControlDragActiveChange: Fi,
                          onControlEditingActiveChange: Li,
                          onScrubActiveChange: Ri,
                          onUpdate: Ni,
                        },
                        _t.id,
                      ),
                    }),
                  ],
                })
              : (0, $.jsx)($.Fragment, {
                  children: (0, $.jsx)(`div`, {
                    "data-browser-comment-editor-input-shell": !0,
                    inert: gr || _r,
                    role: `presentation`,
                    className: S(
                      (gr || _r) && `invisible`,
                      Or
                        ? S(
                            `min-w-0`,
                            sr ? `pb-[52px]` : `pb-2`,
                            bt && !Zt ? (kr ? S(`ps-12`, Ka) : `ps-12 pe-4`) : kr ? S(`ps-4`, Ka) : `px-4`,
                            Tr && !cr ? Ga : `pt-2`,
                          )
                        : S(
                            Ht,
                            G && `transition-none`,
                            bt && !Zt ? `left-12` : `left-4`,
                            Tr ? Wa : `top-2`,
                            Er
                              ? bt && !Zt
                                ? `bottom-[52px] w-[calc(100%-64px)]`
                                : `bottom-[52px] w-[calc(100%-32px)]`
                              : bt && !Zt
                                ? `bottom-2 w-[calc(100%-92px)]`
                                : `bottom-2 w-[calc(100%-60px)]`,
                          ),
                    ),
                    onMouseDown: Ti,
                    children: (0, $.jsx)(`div`, {
                      className: S(
                        Or
                          ? S(`min-h-0`, cr && kr ? `-translate-y-0.5` : `translate-y-0.5`)
                          : `h-full min-h-0 translate-y-0.5`,
                      ),
                      children: (0, $.jsx)(Ii, {
                        className: S(
                          Rt,
                          Or && (ye ? Ha : `!max-h-[180px] overflow-y-auto`),
                          !sr &&
                            !Tr &&
                            `!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap`,
                        ),
                        composerController: q,
                        handoff: We,
                        isRevealing: G,
                        isVisible: s,
                        scrollReviewState: K ? Me : `complete`,
                        onScrollReviewStateChange: Pe,
                        disableAutoFocus: !i,
                        ariaLabel: de,
                        minHeight: `1.5rem`,
                        placeholder: X,
                        onSuggestionHandler: Bi,
                        onSubmit: Zr == null ? () => Si(ui, `keyboard`) : () => Si(`saved`, `keyboard`),
                      }),
                    }),
                  }),
                }),
            (0, $.jsx)(`span`, {
              ref: (e) => {
                ((Wn.current = e), e != null && K && Vr(Pn.current));
              },
              "aria-hidden": `true`,
              className: Aa,
              style: { fontSize: `var(--codex-chat-font-size)` },
              children: Je,
            }),
            J
              ? (0, $.jsx)(`div`, {
                  "data-browser-sidebar-design-footer-divider": !0,
                  className: `pointer-events-none absolute inset-x-0 bottom-12 border-t border-border/60`,
                })
              : null,
            (0, $.jsxs)(`div`, {
              "data-browser-comment-editor-footer-actions": !0,
              "aria-hidden": !_i,
              className: S(
                Lt,
                `justify-between gap-1.5`,
                _i ? `scale-100 opacity-100` : `invisible pointer-events-none scale-95 opacity-0`,
              ),
              children: [
                (0, $.jsxs)(`div`, {
                  className: S(`flex min-w-0 items-center gap-1.5`, Zr == null && (ei ? `me-16` : `me-7`)),
                  children: [
                    Zr != null && ee != null
                      ? (0, $.jsx)(se, {
                          "aria-label": Y,
                          color: `ghostMuted`,
                          size: `composer`,
                          onClick: () => {
                            ee(Zr);
                          },
                          uniform: !0,
                          children: (0, $.jsx)(zt, { className: `icon-sm` }),
                        })
                      : Zr == null && mi != null && D != null
                        ? (0, $.jsx)(se, {
                            "aria-label": Y,
                            color: `ghostMuted`,
                            size: `composer`,
                            onClick: () => {
                              D(mi.id);
                            },
                            uniform: !0,
                            children: (0, $.jsx)(zt, { className: `icon-sm` }),
                          })
                        : null,
                    Zr == null ? vi : null,
                    ke == null
                      ? null
                      : (0, $.jsx)(Ji, { originalText: ke.text, isRevealing: G, tooltipPortalContainer: ai }),
                  ],
                }),
                Zr == null
                  ? null
                  : (0, $.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-1.5`,
                      children: [
                        ei
                          ? (0, $.jsx)(mt, {
                              hasDictationShortcut: !0,
                              isVisible: Qr,
                              isStarting: hr,
                              isTranscribing: _r,
                              canRetryDictation: vr,
                              disabled: fr == null,
                              retryDictation: yr,
                              startDictation: xr,
                              stopDictation: Sr,
                              tooltipPortalContainer: ai,
                            })
                          : null,
                        vi,
                        (0, $.jsx)(se, {
                          color: `primary`,
                          disabled: Bt || !ni,
                          size: `composer`,
                          type: `submit`,
                          children: (0, $.jsx)(W, {
                            id: `browserSidebarCommentOverlay.save`,
                            defaultMessage: `Save`,
                            description: `Primary action for editing an existing browser comment`,
                          }),
                        }),
                      ],
                    }),
              ],
            }),
            wr
              ? (0, $.jsx)(`div`, {
                  "data-browser-comment-editor-dictation-overlay": !0,
                  className: `absolute inset-0 z-20 flex flex-col justify-center bg-surface-elevated-secondary`,
                  children: (0, $.jsx)(ht, {
                    transcriptionAction: Cr,
                    waveformCanvasRef: br,
                    stopDictation: Sr,
                    noBottomMargin: !0,
                    tooltipPortalContainer: ai,
                  }),
                })
              : null,
            Zr == null
              ? (0, $.jsxs)(`div`, {
                  className: `absolute right-2 bottom-2 flex items-center gap-2`,
                  children: [
                    ei
                      ? (0, $.jsx)(mt, {
                          hasDictationShortcut: !0,
                          isVisible: Qr,
                          isStarting: hr,
                          isTranscribing: _r,
                          canRetryDictation: vr,
                          disabled: G || $r,
                          retryDictation: yr,
                          startDictation: xr,
                          stopDictation: Sr,
                          tooltipPortalContainer: ai,
                        })
                      : null,
                    ti
                      ? (0, $.jsx)(Te, {
                          cloneCustomTrigger: K,
                          delayOpen: Ft,
                          side: K ? `right` : `top`,
                          sideOffset: 4,
                          portalContainer: ai,
                          open: ir && !Ft ? !1 : void 0,
                          tooltipContent:
                            pi ??
                            (0, $.jsxs)(`div`, {
                              className: `space-y-1`,
                              children: [
                                (0, $.jsx)(pa, {
                                  keysLabel: si,
                                  children: ui === `direct` ? (0, $.jsx)(fa, {}) : (0, $.jsx)(da, {}),
                                }),
                                oe
                                  ? (0, $.jsx)(pa, {
                                      keysLabel: ci,
                                      children: ui === `direct` ? (0, $.jsx)(da, {}) : (0, $.jsx)(fa, {}),
                                    })
                                  : null,
                              ],
                            }),
                          children: (0, $.jsx)(se, {
                            "aria-label": Kr,
                            color: Ft ? `secondary` : `primary`,
                            "data-browser-comment-submit": !0,
                            radius: `full`,
                            size: ue,
                            disabled: ri,
                            type: `button`,
                            uniform: !0,
                            onMouseDown: (e) => {
                              e.preventDefault();
                            },
                            onClick: Z,
                            children: fi,
                          }),
                        })
                      : null,
                  ],
                })
              : null,
          ],
        }),
        vn != null && _t != null ? (0, $.jsx)(Qi, { ...vn, editorState: _t }) : null,
        pn != null && yi != null && yi.length === pn.rows.length
          ? (0, $.jsxs)(`div`, {
              "aria-hidden": `true`,
              className: `pointer-events-none absolute z-20`,
              "data-browser-comment-design-scrub-clone": !0,
              style: { height: pn.rect.height, left: pn.rect.left, top: pn.rect.top, width: pn.rect.width },
              children: [
                (0, $.jsx)(`span`, {
                  className: `absolute -top-2 -right-3 -bottom-2 -left-3 rounded-xl bg-surface-elevated-secondary shadow-md ring-1 ring-border-subtle`,
                }),
                yi.map(({ row: e, value: t }) =>
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
                              children: (0, $.jsx)(Wt, { className: `icon-2xs` }),
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
      ? ((t = (0, $.jsx)(W, {
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
      ? ((t = (0, $.jsx)(W, {
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
  t[2] === r ? (a = t[3]) : ((a = (0, $.jsx)(H, { keysLabel: r })), (t[2] = r), (t[3] = a));
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
  return Vt(e).map((e, t) => {
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
    ((Ta = j()),
      T(),
      (Ea = t(V(), 1)),
      le(),
      Ae(),
      _n(),
      mn(),
      c(),
      (Q = g()),
      (Da = _()),
      R(),
      jt(),
      On(),
      It(),
      ci(),
      Bt(),
      ui(),
      Oi(),
      Mi(),
      Bi(),
      qi(),
      Zi(),
      et(),
      $e(),
      J(),
      Fe(),
      nt(),
      Tt(),
      st(),
      Ge(),
      at(),
      B(),
      P(),
      x(),
      I(),
      U(),
      G(),
      re(),
      Ut(),
      Pe(),
      Nt(),
      be(),
      bt(),
      ge(),
      q(),
      r(),
      gt(),
      ot(),
      We(),
      Je(),
      Dt(),
      ta(),
      aa(),
      ($ = b()),
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
export { _n as i, eo as n, gn as r, oa as t };
//# sourceMappingURL=annotation-comment-editor-card-cfcadbd19454.js.map
