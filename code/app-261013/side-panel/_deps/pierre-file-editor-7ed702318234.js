import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $nt as r,
  Bpt as i,
  CS as a,
  Ez as o,
  Fat as s,
  HDt as c,
  IDt as l,
  Ixt as u,
  KDt as d,
  LR as f,
  LT as p,
  M2 as m,
  Mz as h,
  NR as g,
  NV as _,
  Nz as v,
  PR as y,
  Pat as b,
  Pxt as x,
  RT as S,
  Rnt as C,
  SO as w,
  TJ as ee,
  Tkt as te,
  VDt as T,
  VR as ne,
  Vxt as E,
  Wnt as D,
  _Mt as O,
  _Pt as re,
  _kt as ie,
  _lt as ae,
  bht as oe,
  bkt as se,
  bz as ce,
  cE as le,
  cf as ue,
  cz as de,
  gMt as fe,
  hPt as pe,
  hot as me,
  i3 as he,
  int as k,
  j2 as ge,
  jDt as _e,
  kz as ve,
  ldt as ye,
  lot as be,
  oE as xe,
  qft as Se,
  r3 as Ce,
  rnt as we,
  rst as Te,
  sf as Ee,
  sz as A,
  t3 as De,
  vMt as Oe,
  vht as ke,
  vkt as Ae,
  vzt as je,
  wkt as Me,
  xMt as Ne,
  xO as Pe,
  xht as Fe,
  xkt as Ie,
  xz as j,
  yMt as Le,
  ykt as Re,
  yzt as ze,
  zxt as Be,
} from "./app-shared-bbfeca5e5737.js";
import {
  AVt as Ve,
  Ayt as He,
  Crt as Ue,
  Cwr as We,
  DBr as M,
  DWt as Ge,
  EWt as Ke,
  Eyt as qe,
  GA as Je,
  Hir as Ye,
  JZn as Xe,
  KA as Ze,
  KIr as Qe,
  MTt as $e,
  OBr as N,
  OVt as et,
  Ovt as tt,
  Srt as nt,
  UQn as rt,
  UZn as it,
  VJn as at,
  VZn as ot,
  Vir as st,
  XDr as ct,
  bLr as lt,
  cRr as ut,
  dnn as dt,
  eDn as ft,
  eDr as pt,
  eOr as mt,
  fnn as ht,
  gwr as gt,
  hRr as _t,
  hWn as vt,
  iNr as yt,
  iRr as bt,
  inr as xt,
  jTt as St,
  l7n as Ct,
  nDr as wt,
  qA as Tt,
  rNr as Et,
  rRr as Dt,
  rnr as Ot,
  tDn as kt,
  u7n as At,
  unn as jt,
  vwr as Mt,
  wvt as Nt,
  xLr as Pt,
  yLr as Ft,
  yjn as It,
} from "./app-initial-5851df3f6cb1.js";
import { Uc as Lt, by as Rt, od as P, sd as zt, xy as Bt } from "./app-primary-fe8a450b3b04.js";
import { i as Vt, n as Ht, r as Ut, t as Wt } from "./text-file-storage-b2e57fb6ac22.js";
import {
  _ as F,
  g as I,
  h as Gt,
  m as Kt,
  n as qt,
  p as Jt,
  r as Yt,
} from "./codex-diff-css-681a898586a0.js";
import { i as Xt, r as L } from "./file-diff-presentation-b6cc0ce0d4c4.js";
import { n as Zt, t as Qt } from "./renderFileChildren-4eb3bc301162.js";
import { i as $t, n as en, t as tn } from "./register-pierre-themes-26873099a398.js";
import { n as nn, r as rn } from "./artifact-preview-header-b624a4e82866.js";
import {
  d as an,
  f as on,
  l as sn,
  n as cn,
  p as ln,
  t as un,
  u as dn,
} from "./use-diff-annotations-1d5c03397aea.js";
import {
  a as fn,
  c as pn,
  i as mn,
  l as hn,
  n as gn,
  o as _n,
  r as vn,
  s as yn,
  t as bn,
} from "./review-file-source-breadcrumb-987458adbcad.js";
import { n as xn, t as Sn } from "./editor-a3c5f1bc275b.js";
import { n as R, t as Cn } from "./inline-file-diff-review-2b36b4184acf.js";
function wn(e, t) {
  typeof e == `function` ? e(t) : e != null && (e.current = t);
}
function Tn(e) {
  return {
    instance: void 0,
    items: void 0,
    controlled: e,
    managedOptions: void 0,
    disableFlushSync: !1,
    slotCoordinator: void 0,
  };
}
function En(e, t) {
  let {
      className: n,
      containerRef: r,
      disableWorkerPool: i = !1,
      editorOptions: a,
      getEditStateKey: o,
      initialItems: s,
      items: c,
      onItemEditChange: l,
      onItemEditComplete: u,
      onScroll: d,
      onSelectedLinesChange: f,
      options: p,
      renderAnnotation: m,
      renderCodeViewFooter: h,
      renderCodeViewHeader: g,
      renderCustomHeader: _,
      renderGutterUtility: v,
      renderHeaderFilenameSuffix: y,
      renderHeaderMetadata: b,
      renderHeaderPrefix: x,
      selectedLines: S,
      style: C,
    } = e,
    w = c !== void 0,
    ee = Gt(),
    te = (0, B.useContext)(en),
    T = (0, B.useRef)(Tn(w)),
    ne = _ != null,
    E = m != null,
    D = v != null,
    O = ne || x != null || y != null || b != null,
    re = O || E || D,
    ie = g != null,
    ae = h != null,
    oe = F((e) => {
      f?.(e);
    }),
    se = S !== void 0,
    ce = F((e, t, n) => {
      if (ee == null) throw Error(`CodeView: EditContext is not attached`);
      let r = { ...a, ...t };
      return ee(e, r, n);
    }),
    le = F((e, t) => {
      l?.(e, t);
    }),
    ue = F((e, t, n) => u?.(e, t, n) ?? `reject`),
    de = (0, B.useMemo)(
      () =>
        An({
          options: p,
          hasCustomHeader: ne,
          hasGutterRenderer: D,
          hasCodeViewHeader: ie,
          hasCodeViewFooter: ae,
          onSelectedLinesChange: f == null ? void 0 : oe,
          controlledSelection: se,
          getEditStateKey: o,
          createEditor: ee == null ? void 0 : ce,
          onItemEditChange: l == null ? void 0 : le,
          onItemEditComplete: u == null ? void 0 : ue,
        }),
      [ee, se, ce, le, ue, oe, ae, ie, ne, D, o, l, u, f, p],
    ),
    [fe] = (0, B.useState)(() => z()),
    [, pe] = (0, B.useState)({}),
    me = F((e) => {
      (T.current.instance != null &&
        (e == null || e !== T.current.instance.getContainerElement()) &&
        (T.current.instance.cleanUp(), fe.publish(void 0), (T.current = Tn(w))),
        e != null &&
          e !== T.current.instance?.getContainerElement() &&
          ((T.current.instance = new Ft(de, i ? void 0 : te, !0)), T.current.instance.setup(e)),
        wn(r, e));
    }),
    he = F((e) => {
      T.current.disableFlushSync
        ? fe.publish(e)
        : (0, V.flushSync)(() => {
            fe.publish(e);
          });
    }),
    k = (0, B.useMemo)(() => {
      if (O || E || D || ie || ae)
        return {
          hasHeaderRenderers: O,
          hasAnnotationRenderer: E,
          hasGutterRenderer: D,
          onSnapshotChange: he,
        };
    }, [he, E, D, O, ie, ae]);
  return (
    Pn(() => (d == null ? void 0 : T.current.instance?.subscribeToScroll(d))),
    Pn(() => {
      let { instance: e, controlled: t, items: n, managedOptions: r, slotCoordinator: i } = T.current;
      if (e != null)
        try {
          T.current.disableFlushSync = !0;
          let a = !1;
          if ((M(de, r) || ((T.current.managedOptions = de), e.setOptions(de), (a = !0)), t !== w)) {
            console.error(
              `CodeView: cannot switch between controlled and uncontrolled modes. Remount with a new key instead.`,
            );
            return;
          }
          if (w)
            c !== n &&
              (On(n, c)
                ? (T.current.items = c)
                : Dn(n, c)
                  ? ((T.current.items = c), e.addItems(c.slice(n.length)))
                  : ((T.current.items = c), e.setItems(c), (a = !0)));
          else if (n == null) {
            let t = s ?? [];
            ((T.current.items = t), t.length > 0 && (e.setItems(t), (a = !0)));
          }
          S !== void 0 && e.setSelectedLines(S, { notify: !1 });
          let o = e.setSlotCoordinator(k),
            l = !1;
          (k !== i && ((k == null || i == null) && (l = !0), (T.current.slotCoordinator = k)),
            (a || o) && e.render(!0),
            o && k == null && fe.publish(void 0),
            l && pe({}));
        } finally {
          T.current.disableFlushSync = !1;
        }
    }),
    (0, B.useImperativeHandle)(
      t,
      () => ({
        addItems(e) {
          let { controlled: t, instance: n } = T.current;
          (kn(t, `addItems`),
            n == null
              ? console.error(`CodeView.addItems: no valid instance to append items with`, e)
              : n.addItems(e));
        },
        getItem(e) {
          let { instance: t } = T.current;
          if (t == null) {
            console.error(`CodeView.getItem: no valid instance exists`, e);
            return;
          }
          return t.getItem(e);
        },
        removeItem(e) {
          let { controlled: t, instance: n } = T.current;
          return (
            kn(t, `removeItem`),
            n == null
              ? (console.error(`CodeView.removeItem: no valid instance to remove item from`, e), !1)
              : n.removeItem(e)
          );
        },
        updateItem(e) {
          let { controlled: t, instance: n } = T.current;
          return (
            kn(t, `updateItem`),
            n == null
              ? (console.error(`CodeView.updateItem: no valid instance to update item with`, e), !1)
              : n.updateItem(e)
          );
        },
        updateItemId(e, t) {
          let { controlled: n, instance: r } = T.current;
          return (
            kn(n, `updateItemId`),
            r == null
              ? (console.error(`CodeView.updateItemId: no valid instance to update item id with`, e, t), !1)
              : r.updateItemId(e, t)
          );
        },
        scrollTo(e) {
          let { instance: t } = T.current;
          t == null ? console.error(`CodeView.scrollTo: no valid instance to scroll with`, e) : t.scrollTo(e);
        },
        setSelectedLines(e) {
          let { instance: t } = T.current;
          t == null
            ? console.error(`CodeView.setSelectedLines: no valid instance to update selection with`, e)
            : (t.setSelectedLines(e, { notify: !1 }), oe(e));
        },
        getSelectedLines() {
          let { instance: e } = T.current;
          return e == null
            ? (console.error(`CodeView.getSelectedLines: no valid instance exists`), null)
            : e.getSelectedLines();
        },
        clearSelectedLines() {
          let { instance: e } = T.current;
          e == null
            ? console.error(`CodeView.clearSelectedLines: no valid instance to update selection with`)
            : (e.clearSelectedLines({ notify: !1 }), oe(null));
        },
        getEditor(e) {
          let { instance: t } = T.current;
          if (t == null) {
            console.error(`CodeView.getEditor: no valid instance exists`, e);
            return;
          }
          return t.getEditor(e);
        },
        getInstance() {
          return T.current.instance;
        },
      }),
      [oe],
    ),
    (0, Nn.jsxs)(Nn.Fragment, {
      children: [
        (0, Nn.jsx)(`div`, { ref: me, className: n, style: C }),
        (re || ie || ae) &&
          (0, Nn.jsx)(H, {
            managedContentStore: fe,
            renderCustomHeader: _,
            renderHeaderPrefix: x,
            renderHeaderFilenameSuffix: y,
            renderHeaderMetadata: b,
            renderAnnotation: m,
            renderGutterUtility: v,
            renderCodeViewHeader: g,
            renderCodeViewFooter: h,
          }),
      ],
    })
  );
}
function Dn(e, t) {
  if (e == null || t.length <= e.length) return !1;
  if (e.length === 0) return !0;
  for (let n = 0; n < e.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function On(e, t) {
  if (e == null || e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function kn(e, t) {
  if (e)
    throw Error(
      `CodeView.${t} cannot be used when CodeView is controlled. Use initialItems for imperative item updates.`,
    );
}
function z() {
  let e,
    t = new Set();
  return {
    getSnapshot() {
      return e;
    },
    publish(n) {
      if (!Pt(e, n)) {
        e = n;
        for (let e of t) e();
      }
    },
    subscribe(e) {
      return (
        t.add(e),
        () => {
          t.delete(e);
        }
      );
    },
  };
}
function An({
  options: e,
  hasCustomHeader: t,
  hasGutterRenderer: n,
  hasCodeViewHeader: r,
  hasCodeViewFooter: i,
  onSelectedLinesChange: a,
  controlledSelection: o,
  getEditStateKey: s,
  createEditor: c,
  onItemEditChange: l,
  onItemEditComplete: u,
}) {
  let d = { ...e, controlledSelection: o, onSelectedLinesChange: a, createEditor: c };
  return (
    s != null && (d.getEditStateKey = s),
    l != null && (d.onItemEditChange = l),
    u != null && (d.onItemEditComplete = u),
    t && (d.renderCustomHeader = Mn),
    n && (d.renderGutterUtility = Mn),
    r && (d.renderCodeViewHeader = Mn),
    i && (d.renderCodeViewFooter = Mn),
    d
  );
}
function jn({
  renderedItem: e,
  renderCustomHeader: t,
  renderHeaderPrefix: n,
  renderHeaderFilenameSuffix: r,
  renderHeaderMetadata: i,
  renderAnnotation: a,
  renderGutterUtility: o,
}) {
  if (e.type === `diff`) {
    let { item: s, instance: c } = e;
    return Xt({
      fileDiff: s.fileDiff,
      renderCustomHeader: t == null ? void 0 : () => t(s),
      renderHeaderPrefix: n == null ? void 0 : () => n(s),
      renderHeaderFilenameSuffix: r == null ? void 0 : () => r(s),
      renderHeaderMetadata: i == null ? void 0 : () => i(s),
      renderAnnotation: a == null ? void 0 : (e) => a(e, s),
      lineAnnotations: s.annotations,
      renderGutterUtility: o == null ? void 0 : (e) => o(e, s),
      getHoveredLine: c.getHoveredLine,
      getAnnotationSlotName: c.getAnnotationSlotName,
    });
  }
  {
    let { item: s, instance: c } = e;
    return Zt({
      file: s.file,
      renderCustomHeader: t == null ? void 0 : () => t(s),
      renderHeaderPrefix: n == null ? void 0 : () => n(s),
      renderHeaderFilenameSuffix: r == null ? void 0 : () => r(s),
      renderHeaderMetadata: i == null ? void 0 : () => i(s),
      renderAnnotation: a == null ? void 0 : (e) => a(e, s),
      lineAnnotations: s.annotations,
      renderGutterUtility: o == null ? void 0 : (e) => o(e, s),
      getHoveredLine: c.getHoveredLine,
      getAnnotationSlotName: c.getAnnotationSlotName,
    });
  }
}
function Mn() {}
var B, V, Nn, Pn, Fn, H;
function In() {
  return (In = e(() => {
    (N(),
      lt(),
      I(),
      Kt(),
      L(),
      Qt(),
      $t(),
      (B = ze()),
      (V = Le()),
      (Nn = Ne()),
      (Pn = typeof window > `u` ? B.useEffect : B.useLayoutEffect),
      (Fn = (0, B.forwardRef)(En)),
      (H = (0, B.memo)(function ({
        managedContentStore: e,
        renderCustomHeader: t,
        renderHeaderPrefix: n,
        renderHeaderFilenameSuffix: r,
        renderHeaderMetadata: i,
        renderAnnotation: a,
        renderGutterUtility: o,
        renderCodeViewHeader: s,
        renderCodeViewFooter: c,
      }) {
        "use no memo";
        let l = F((t) => e.subscribe(t)),
          u = F(() => e.getSnapshot()),
          d = (0, B.useSyncExternalStore)(l, u, u),
          f = ``;
        for (let e of d?.items ?? []) f += `${e.id}:${e.version}:${e.type}`;
        let p = (0, B.useMemo)(
            () =>
              d?.items?.map((e) =>
                (0, V.createPortal)(
                  jn({
                    renderedItem: e,
                    renderCustomHeader: t,
                    renderHeaderPrefix: n,
                    renderHeaderFilenameSuffix: r,
                    renderHeaderMetadata: i,
                    renderAnnotation: a,
                    renderGutterUtility: o,
                  }),
                  e.element,
                  e.id,
                ),
              ),
            [t, n, r, i, a, o, f],
          ),
          m = (0, B.useMemo)(
            () => (s != null && d?.header != null ? (0, V.createPortal)(s(), d.header) : null),
            [s, d?.header],
          ),
          h = (0, B.useMemo)(
            () => (c != null && d?.footer != null ? (0, V.createPortal)(c(), d.footer) : null),
            [c, d?.footer],
          );
        return (0, Nn.jsxs)(Nn.Fragment, { children: [p, m, h] });
      })));
  }))();
}
function Ln(e) {
  let t = (0, Rn.c)(37),
    {
      canRedo: r,
      canUndo: i,
      hasSaveError: a,
      isSaving: s,
      onRedo: c,
      onToggleVim: u,
      onUndo: d,
      vimMode: f,
    } = e,
    m = T(),
    g;
  t[0] === m
    ? (g = t[1])
    : ((g = m.formatMessage({
        id: `textFileEditor.undo`,
        defaultMessage: `Undo`,
        description: `Tooltip for undoing the latest text editor change`,
      })),
      (t[0] = m),
      (t[1] = g));
  let _ = g,
    v;
  t[2] === m
    ? (v = t[3])
    : ((v = m.formatMessage({
        id: `textFileEditor.redo`,
        defaultMessage: `Redo`,
        description: `Tooltip for redoing the latest text editor change`,
      })),
      (t[2] = m),
      (t[3] = v));
  let y = v;
  if (!i && !r && !s && !a && f == null) return null;
  let b;
  t[4] === !1
    ? (b = t[5])
    : ((b = fe(
        `absolute right-4 bottom-4 z-10 flex items-center gap-px rounded-lg border border-default bg-surface-elevated-secondary/90 p-1 shadow-sm`,
        !1,
      )),
      (t[4] = !1),
      (t[5] = b));
  let x = !i,
    S;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, U.jsx)(h, { "aria-hidden": !1, asset: ge })), (t[6] = S))
    : (S = t[6]);
  let C;
  t[7] !== d || t[8] !== x || t[9] !== _
    ? ((C = (0, U.jsx)(n, {
        "aria-label": _,
        color: `ghost`,
        disabled: x,
        onClick: d,
        size: `toolbar`,
        uniform: !0,
        children: S,
      })),
      (t[7] = d),
      (t[8] = x),
      (t[9] = _),
      (t[10] = C))
    : (C = t[10]);
  let w;
  t[11] !== C || t[12] !== _
    ? ((w = (0, U.jsx)(A, { tooltipContent: _, children: C })), (t[11] = C), (t[12] = _), (t[13] = w))
    : (w = t[13]);
  let ee = !r,
    te;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, U.jsx)(h, { className: `-scale-x-100`, "aria-hidden": !1, asset: ge })), (t[14] = te))
    : (te = t[14]);
  let ne;
  t[15] !== c || t[16] !== y || t[17] !== ee
    ? ((ne = (0, U.jsx)(n, {
        "aria-label": y,
        color: `ghost`,
        disabled: ee,
        onClick: c,
        size: `toolbar`,
        uniform: !0,
        children: te,
      })),
      (t[15] = c),
      (t[16] = y),
      (t[17] = ee),
      (t[18] = ne))
    : (ne = t[18]);
  let E;
  t[19] !== y || t[20] !== ne
    ? ((E = (0, U.jsx)(A, { tooltipContent: y, children: ne })), (t[19] = y), (t[20] = ne), (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== u || t[23] !== f ? ((D = null), (t[22] = u), (t[23] = f), (t[24] = D)) : (D = t[24]);
  let O;
  t[25] === s
    ? (O = t[26])
    : ((O = s
        ? (0, U.jsxs)(`div`, {
            className: `flex items-center gap-1 px-2 text-xs leading-none text-codex-description`,
            children: [
              (0, U.jsx)(Ce, { className: `icon-2xs` }),
              (0, U.jsx)(l, {
                id: `textFileEditor.saving`,
                defaultMessage: `Saving…`,
                description: `Status shown while the text file editor is saving`,
              }),
            ],
          })
        : null),
      (t[25] = s),
      (t[26] = O));
  let re;
  t[27] !== a || t[28] !== s
    ? ((re =
        !s && a
          ? (0, U.jsxs)(`div`, {
              className: `flex items-center gap-1 px-2 text-xs leading-none text-danger`,
              children: [
                (0, U.jsx)(o, {
                  className: `shrink-0`,
                  "aria-hidden": !1,
                  legacyIcon: Rt,
                  asset16: p,
                  legacyClassName: `icon-2xs`,
                }),
                (0, U.jsx)(l, {
                  id: `textFileEditor.saveFailed`,
                  defaultMessage: `Save failed`,
                  description: `Status shown when the text file editor could not save`,
                }),
              ],
            })
          : null),
      (t[27] = a),
      (t[28] = s),
      (t[29] = re))
    : (re = t[29]);
  let ie;
  return (
    t[30] !== E || t[31] !== D || t[32] !== O || t[33] !== re || t[34] !== b || t[35] !== w
      ? ((ie = (0, U.jsxs)(`div`, { className: b, children: [w, E, D, O, re] })),
        (t[30] = E),
        (t[31] = D),
        (t[32] = O),
        (t[33] = re),
        (t[34] = b),
        (t[35] = w),
        (t[36] = ie))
      : (ie = t[36]),
    ie
  );
}
var Rn, U;
function zn() {
  return (zn = e(() => {
    ((Rn = je()), m(), S(), O(), _e(), De(), v(), he(), ve(), de(), Bt(), (U = Ne()));
  }))();
}
var Bn;
function Vn() {
  return (Vn = e(() => {
    (Et(), (Bn = yt(`workspaceFileDiffViewMode`, `unified`)));
  }))();
}
var Hn, Un;
function Wn() {
  return (Wn = e(() => {
    (Te(),
      s(),
      Ye(),
      (Hn = st({
        method: `blame-file`,
        getParams: ({ operationSource: e, path: t, root: n }) => ({
          cwd: Se(n),
          operationSource: e,
          path: t,
        }),
        getOptions: () => ({ staleTime: b.FIVE_SECONDS }),
      })),
      (Un = Hn.fromTarget$));
  }))();
}
function Gn(e) {
  return {
    lineNumber: e.end.line + (e.end.character === 0 && e.end.line > e.start.line ? 0 : 1),
    startLine: e.start.line + 1,
  };
}
function Kn() {
  return (Kn = e(() => {}))();
}
var qn, Jn, Yn;
function Xn() {
  return (Xn = e(() => {
    (Dt(),
      (qn = 512),
      (Jn = 262144),
      (Yn = class {
        dateFormatter;
        getEditor;
        getSavedContent;
        blameLines = new Map();
        blameResult = null;
        events = null;
        fileRoot = null;
        inlineBlame = null;
        mappedCurrentContent = null;
        mappedSavedContent = null;
        savedLineRanges = null;
        scheduled = !1;
        surface = null;
        constructor({ getEditor: e, getSavedContent: t, locale: n }) {
          ((this.getEditor = e),
            (this.getSavedContent = t),
            (this.dateFormatter = new Intl.DateTimeFormat(n, { dateStyle: `medium` })));
        }
        attach = (e) => {
          if ((this.detach(), e == null)) return;
          this.surface = e;
          let t = new AbortController();
          this.events = t;
          let n = { signal: t.signal },
            r = e.ownerDocument;
          return (
            r.addEventListener(`selectionchange`, this.schedule, n),
            r.addEventListener(`keyup`, this.schedule, n),
            r.addEventListener(`pointerup`, this.schedule, n),
            this.schedule(),
            () => {
              this.surface === e && this.detach();
            }
          );
        };
        setFileRoot(e) {
          (this.fileRoot !== e && (this.clear(), (this.fileRoot = e)), this.schedule());
        }
        setBlameResult(e) {
          (this.blameResult !== e &&
            ((this.blameResult = e),
            (this.blameLines = new Map(e?.type === `success` ? e.lines.map((e) => [e.lineNumber, e]) : []))),
            this.schedule());
        }
        setLocale(e) {
          this.dateFormatter.resolvedOptions().locale !== e &&
            ((this.dateFormatter = new Intl.DateTimeFormat(e, { dateStyle: `medium` })), this.schedule());
        }
        schedule = () => {
          if (this.scheduled || this.events?.signal.aborted !== !1) return;
          this.scheduled = !0;
          let e = this.events;
          queueMicrotask(() => {
            ((this.scheduled = !1), this.events === e && e?.signal.aborted === !1 && this.render());
          });
        };
        detach() {
          (this.events?.abort(),
            (this.events = null),
            (this.surface = null),
            (this.fileRoot = null),
            this.clear());
        }
        render() {
          let e = this.fileRoot?.shadowRoot ?? this.surface?.querySelector(`diffs-container`)?.shadowRoot,
            t = this.getSavedContent();
          if (e == null || t == null || this.blameResult?.type !== `success`) {
            this.clear();
            return;
          }
          let n = this.getEditor(),
            r = n?.getFile(),
            i = n?.getViewState().selections?.at(-1);
          if (r == null || i == null) {
            this.clear();
            return;
          }
          let a = (i.direction < 0 ? i.start.line : i.end.line) + 1,
            o = this.getSavedLineNumber(r.contents, t, a),
            s = o == null ? null : (this.blameLines.get(o) ?? null);
          if (s?.author == null || s.commitSha.length === 0 || /^0+$/.test(s.commitSha)) {
            this.clear();
            return;
          }
          let c = e.querySelector(
            `[data-code]:not([data-deletions]) [data-content] > [data-line="${a}"]:not([data-line-type="change-deletion"])`,
          );
          if (c == null) {
            this.clear();
            return;
          }
          this.inlineBlame?.parentElement !== c &&
            (this.clear(),
            (this.inlineBlame = c.ownerDocument.createElement(`span`)),
            (this.inlineBlame.contentEditable = `false`),
            this.inlineBlame.setAttribute(`aria-hidden`, `true`),
            c.append(this.inlineBlame));
          let l = s.authorTime == null ? null : this.dateFormatter.format(s.authorTime * 1e3),
            u = [s.author, s.summary, s.commitSha.slice(0, 8), l]
              .filter((e) => e != null && e.length > 0)
              .join(` · `);
          this.inlineBlame.setAttribute(`data-pierre-editor-inline-blame`, u);
        }
        getSavedLineNumber(e, t, n) {
          if (e === t) return n;
          if (e.length > Jn || t.length > Jn) return null;
          if (this.mappedCurrentContent !== e || this.mappedSavedContent !== t) {
            ((this.mappedCurrentContent = e), (this.mappedSavedContent = t), (this.savedLineRanges = []));
            let n = ut(t, e, { maxEditLength: qn });
            if (n == null) return null;
            let r = 1,
              i = 1;
            for (let e of n)
              e.added
                ? (r += e.count)
                : e.removed
                  ? (i += e.count)
                  : (this.savedLineRanges.push({ currentStart: r, lineCount: e.count, savedStart: i }),
                    (r += e.count),
                    (i += e.count));
          }
          let r = this.savedLineRanges?.find(({ currentStart: e, lineCount: t }) => n >= e && n < e + t);
          return r == null ? null : r.savedStart + n - r.currentStart;
        }
        clear() {
          (this.inlineBlame?.remove(), (this.inlineBlame = null));
        }
      }));
  }))();
}
function Zn(e) {
  let t = (0, er.c)(30),
    { count: n, activeIndex: r, previousIndex: i, nextIndex: a, onNavigate: o } = e,
    s = T(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `files.diff.navigateChanges`,
        defaultMessage: `Navigate changes`,
        description: `Accessible label for previous and next change controls in the editable file comparison`,
      })),
      (t[0] = s),
      (t[1] = c));
  let u = i < 0,
    d;
  t[2] === s
    ? (d = t[3])
    : ((d = s.formatMessage({
        id: `files.diff.previousChange`,
        defaultMessage: `Previous change`,
        description: `Navigate to the preceding changed section in the editable file comparison`,
      })),
      (t[2] = s),
      (t[3] = d));
  let f;
  t[4] !== o || t[5] !== i ? ((f = () => o(i)), (t[4] = o), (t[5] = i), (t[6] = f)) : (f = t[6]);
  let p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, W.jsx)(h, { asset: Ee })), (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== u || t[9] !== d || t[10] !== f
    ? ((m = (0, W.jsx)(xe, {
        uniform: !0,
        disabled: u,
        "aria-label": d,
        onMouseDown: $n,
        onClick: f,
        children: p,
      })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = m))
    : (m = t[11]);
  let g;
  t[12] !== r || t[13] !== n
    ? ((g = (0, W.jsx)(`span`, {
        className: `flex min-w-0 items-center gap-2 text-xs text-secondary tabular-nums select-none`,
        role: `status`,
        "aria-atomic": !0,
        children:
          r < 0
            ? (0, W.jsx)(l, {
                id: `files.diff.changeCount`,
                defaultMessage: `{count, plural, one {# change} other {# changes}}`,
                description: `Number of changed sections in the editable file comparison when the caret is outside a change`,
                values: { count: n },
              })
            : (0, W.jsx)(l, {
                id: `files.diff.changePosition`,
                defaultMessage: `{position} of {count}`,
                description: `Position of the changed section containing the caret in the editable file comparison`,
                values: { position: r + 1, count: n },
              }),
      })),
      (t[12] = r),
      (t[13] = n),
      (t[14] = g))
    : (g = t[14]);
  let v = a < 0,
    y;
  t[15] === s
    ? (y = t[16])
    : ((y = s.formatMessage({
        id: `files.diff.nextChange`,
        defaultMessage: `Next change`,
        description: `Navigate to the next changed section in the editable file comparison`,
      })),
      (t[15] = s),
      (t[16] = y));
  let b;
  t[17] !== a || t[18] !== o ? ((b = () => o(a)), (t[17] = a), (t[18] = o), (t[19] = b)) : (b = t[19]);
  let x;
  t[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = (0, W.jsx)(_, {})), (t[20] = x)) : (x = t[20]);
  let S;
  t[21] !== b || t[22] !== v || t[23] !== y
    ? ((S = (0, W.jsx)(xe, {
        uniform: !0,
        disabled: v,
        "aria-label": y,
        onMouseDown: Qn,
        onClick: b,
        children: x,
      })),
      (t[21] = b),
      (t[22] = v),
      (t[23] = y),
      (t[24] = S))
    : (S = t[24]);
  let C;
  return (
    t[25] !== c || t[26] !== S || t[27] !== m || t[28] !== g
      ? ((C = (0, W.jsxs)(le, { label: c, children: [m, g, S] })),
        (t[25] = c),
        (t[26] = S),
        (t[27] = m),
        (t[28] = g),
        (t[29] = C))
      : (C = t[29]),
    C
  );
}
function Qn(e) {
  return e.preventDefault();
}
function $n(e) {
  return e.preventDefault();
}
var er, W;
function tr() {
  return (tr = e(() => {
    ((er = je()), ue(), _e(), v(), ee(), a(), (W = Ne()));
  }))();
}
function nr(e, t) {
  if (e.length > G || t.contents.length > G) return { status: `too-large` };
  let n = { ...t, contents: e, cacheKey: void 0 },
    r = { ...t, cacheKey: void 0 },
    i = bt(t.name, t.name, e, t.contents, void 0, void 0, { timeout: rr });
  if (i == null) return { status: `too-complex` };
  let a = _t(i, { oldFile: n, newFile: r });
  if (a == null) return { status: `too-complex` };
  if (a.hunks.length === 0) {
    let n = a.additionLines.length;
    ((a.splitLineCount = n),
      (a.unifiedLineCount = n),
      a.hunks.push({
        collapsedBefore: 0,
        additionStart: 1,
        additionCount: n,
        additionLines: 0,
        additionLineIndex: 0,
        deletionStart: 1,
        deletionCount: n,
        deletionLines: 0,
        deletionLineIndex: 0,
        hunkContent: [{ type: `context`, lines: n, additionLineIndex: 0, deletionLineIndex: 0 }],
        splitLineStart: 0,
        splitLineCount: n,
        unifiedLineStart: 0,
        unifiedLineCount: n,
        noEOFCRAdditions: !t.contents.endsWith(`
`),
        noEOFCRDeletions: !e.endsWith(`
`),
      }));
  }
  return ((a.lang = t.lang), { status: `ready`, fileDiff: a });
}
var G, rr;
function ir() {
  return (ir = e(() => {
    (Qe(), Dt(), (G = 2097152), (rr = 25));
  }))();
}
var ar;
function or() {
  return (or = e(() => {
    (on(),
      (ar = class {
        isSwitching = !1;
        replaceItem(e, t) {
          this.isSwitching = !0;
          try {
            e.removeItem(t.id);
          } finally {
            this.isSwitching = !1;
          }
          e.addItems([t]);
        }
        snapshot = null;
        clear() {
          this.snapshot = null;
        }
        capture(e) {
          if (e == null) return;
          this.restore(e);
          let t = e.getEditState();
          t != null &&
            (this.snapshot = {
              contents: t.document.getText(),
              undo: [...t.document.history.undoStack],
              redo: [...t.document.history.redoStack],
              view: e.getViewState(),
            });
        }
        restore(e) {
          let t = this.snapshot,
            n = e.getEditState();
          if (t == null || n == null || ((this.snapshot = null), t.contents !== n.document.getText()))
            return !1;
          if (n.type === `file`) {
            let e = (e) => ({
              ...e,
              lineAnnotationsBefore: e.lineAnnotationsBefore?.map(({ side: e, ...t }) => t),
              lineAnnotationsAfter: e.lineAnnotationsAfter?.map(({ side: e, ...t }) => t),
            });
            (n.document.history.undoStack.splice(0, n.document.history.undoStack.length, ...t.undo.map(e)),
              n.document.history.redoStack.splice(0, n.document.history.redoStack.length, ...t.redo.map(e)));
          } else {
            let e = (e) => ({
              ...e,
              lineAnnotationsBefore: e.lineAnnotationsBefore?.map(dn),
              lineAnnotationsAfter: e.lineAnnotationsAfter?.map(dn),
            });
            (n.document.history.undoStack.splice(0, n.document.history.undoStack.length, ...t.undo.map(e)),
              n.document.history.redoStack.splice(0, n.document.history.redoStack.length, ...t.redo.map(e)));
          }
          return (e.setViewState(t.view), !0);
        }
      }));
  }))();
}
function sr(e) {
  return { baseContent: e, kind: `ready` };
}
function cr({ document: e, diskContent: t, localContent: n }) {
  return t === e.baseContent
    ? e.kind === `ready`
      ? e
      : sr(e.baseContent)
    : n === t
      ? sr(t)
      : { baseContent: e.baseContent, diskContent: t, kind: `conflict` };
}
function lr(e, t) {
  return e.kind === `ready`
    ? null
    : t === e.baseContent
      ? { newContent: e.diskContent, oldContent: t }
      : { newContent: t, oldContent: e.diskContent };
}
function ur({ action: e, content: t, document: n }) {
  let r = lr(n, t);
  return r == null || n.kind === `ready`
    ? null
    : { content: e === `reject` ? r.oldContent : r.newContent, document: sr(n.diskContent) };
}
var K;
function dr() {
  return (dr = e(() => {
    K = 10485760;
  }))();
}
function fr({ content: e, endOffset: t, instruction: n, startOffset: r }) {
  let i = e.slice(r, t),
    a = n.trim();
  return r >= t || a.length === 0 || i.trim().length === 0 || i.length > gr
    ? null
    : { content: e, endOffset: t, instruction: a, selectedText: i, startOffset: r };
}
async function pr({ filePath: e, hostId: t, request: n, signal: r }) {
  let { content: i, endOffset: a, instruction: o, selectedText: s, startOffset: c } = n,
    l = y(e),
    u = (0, mr.default)(c - (_r - s.length) / 2, 0, Math.max(0, i.length - _r)),
    d = await nt({
      hostId: t === `durable` ? null : t,
      cwd:
        t !== `durable` && ke(l) ? (oe(l) || Fe(l) ? hr.default.win32 : hr.default.posix).dirname(l) : null,
      instructions: vr,
      input: `File: ${e}\n\nInstruction:\n${o}\n\n<selected_text>\n${s}\n</selected_text>\n\n<document_context>\n${i.slice(u, u + _r)}\n</document_context>`,
      preserveOutputWhitespace: !0,
      signal: r,
      threadSource: `inline_edit`,
    }).catch(() => null);
  if (r.aborted || d == null || d === s || d.length > gr) return null;
  let f = `${i.slice(0, c)}${d}${i.slice(a)}`;
  return new Blob([f]).size > 10485760 ? null : { newContent: f, replacementText: d };
}
var mr, hr, gr, _r, vr;
function yr() {
  return (yr = e(() => {
    ((mr = t(d(), 1)),
      (hr = t(ye(), 1)),
      Te(),
      dr(),
      f(),
      Ue(),
      (gr = 32768),
      (_r = 131072),
      (vr = `Rewrite only the selected text according to the user's instruction. Use the provided document excerpt only as context. Preserve the file's language, style, indentation, and line endings. Return only the replacement text, without Markdown fences or an explanation.`));
  }))();
}
var br, xr, Sr, Cr, wr;
function Tr() {
  return (Tr = e(() => {
    (Te(),
      yr(),
      dr(),
      Ht(),
      (br = {
        externalReview: null,
        file: null,
        fileRevision: 0,
        hasLoadError: !1,
        isReadOnly: !1,
        isSelectionEditPending: !1,
        selectionReview: null,
      }),
      (xr = 20971520),
      (Sr = 3e3),
      (Cr = 550),
      (wr = class {
        options;
        abortController = new AbortController();
        autosaveTimeoutId = null;
        baseMtimeMs = null;
        diskReadRevision = 0;
        externalSyncRevision = 0;
        hasPendingExternalChange = !1;
        isClosing = !1;
        lastDraft;
        lastReportedUnsavedChanges = null;
        pendingEditorChange = null;
        pendingEditorChangeTimeoutId = null;
        maySaveReadOnlyReviewResolution = !1;
        reviewDiskSnapshot = null;
        savedContent = null;
        savePromise = null;
        selectionEdit = null;
        state = br;
        constructor(e) {
          ((this.options = e), (this.lastDraft = e.initialDraft));
        }
        getSavedContent() {
          return this.savedContent;
        }
        async start() {
          let e;
          try {
            e = await this.readFile();
          } catch {
            this.isClosing || this.failLoad();
            return;
          }
          if (this.isClosing) return;
          let t = this.options.initialDraft,
            n = t?.content ?? e.content,
            r = t == null ? e.sizeBytes : new Blob([n]).size;
          if (r > 20971520 || (t != null && new Blob([t.savedContent]).size > 20971520)) {
            this.failLoad();
            return;
          }
          ((this.savedContent = t?.savedContent ?? e.content),
            (this.baseMtimeMs = e.mtimeMs),
            (this.state = { ...br, file: this.createFile(n), isReadOnly: r > K }),
            e.content !== this.savedContent && this.applyDiskSnapshot(e),
            this.emitState(),
            this.options.onLoad?.(),
            this.scheduleAutosave(),
            this.hasPendingExternalChange && (await this.syncExternalChange()));
        }
        dispose({ discardUnsavedChanges: e = !1 } = {}) {
          if (!this.isClosing) {
            if (((this.isClosing = !0), this.cancelSelectionEdit(), this.clearAutosaveTimeout(), e)) {
              (this.abortController.abort(),
                this.clearPendingEditorChange(),
                (this.lastDraft = null),
                this.options.onDraftChange(null));
              return;
            }
            this.saveUntilClean().then(() => {
              (this.emitDraft(), this.clearAutosaveTimeout(), this.abortController.abort());
            });
          }
        }
        updateContent(e) {
          let t = this.state.file;
          t == null ||
            this.abortController.signal.aborted ||
            this.state.isReadOnly ||
            (this.clearPendingEditorChange(),
            e !== t.contents &&
              (this.cancelSelectionEdit(),
              (t.contents = e),
              (this.maySaveReadOnlyReviewResolution = !1),
              this.options.onEdit?.()),
            this.syncPendingExternalChange(),
            this.isClosing || this.scheduleAutosave(),
            this.emitState());
        }
        completeEdit(e) {
          return this.abortController.signal.aborted
            ? `reject`
            : (this.updateContent(e.contents), (e.cacheKey = crypto.randomUUID()), `accept`);
        }
        markPotentiallyDirty() {
          this.isClosing ||
            this.state.isReadOnly ||
            (this.clearAutosaveTimeout(),
            this.reportUnsavedChanges(!0),
            this.clearPendingEditorChange(),
            (this.pendingEditorChange = i()),
            (this.pendingEditorChangeTimeoutId = setTimeout(() => {
              (this.clearPendingEditorChange(),
                this.emitState(),
                this.syncPendingExternalChange(),
                this.isClosing || this.scheduleAutosave());
            }, Cr)));
        }
        async requestSelectionEdit({ content: e, endOffset: t, instruction: n, startOffset: r }) {
          if (
            (this.updateContent(e),
            this.state.file?.contents !== e ||
              this.reviewDiskSnapshot != null ||
              this.isClosing ||
              this.state.isReadOnly)
          )
            return `failed`;
          let i = fr({ content: e, endOffset: t, instruction: n, startOffset: r });
          if (i == null) return `failed`;
          this.cancelSelectionEdit();
          let a = new AbortController();
          ((this.selectionEdit = { abortController: a, kind: `pending` }), this.emitState());
          let o = await pr({
            filePath: this.options.filePath,
            hostId: this.options.cloudFileAccess?.requestClient.hostId ?? this.options.hostId,
            request: i,
            signal: a.signal,
          });
          return a.signal.aborted
            ? `canceled`
            : ((this.selectionEdit = null),
              o == null
                ? (this.emitState(), `failed`)
                : ((this.selectionEdit = { kind: `review`, ...o, oldContent: e }),
                  this.emitState(),
                  `created`));
        }
        async syncExternalChange() {
          if (this.isClosing) return;
          if (this.savedContent == null || this.pendingEditorChange != null) {
            this.hasPendingExternalChange = !0;
            return;
          }
          this.hasPendingExternalChange = !1;
          let e = ++this.externalSyncRevision,
            t = ++this.diskReadRevision,
            n = await this.readFile().catch(() => null);
          if (!(this.isClosing || this.abortController.signal.aborted)) {
            if (this.pendingEditorChange != null) {
              this.hasPendingExternalChange = !0;
              return;
            }
            if (e === this.externalSyncRevision) {
              if (t !== this.diskReadRevision) return this.syncExternalChange();
              if (n == null) {
                this.options.onLoadError();
                return;
              }
              (this.applyDiskSnapshot(n), this.emitState());
            }
          }
        }
        resolveExternalChange(e) {
          let t = this.state.file?.contents,
            n = this.getDocument();
          if (t == null || n == null || this.isClosing) return !1;
          let r = ur({ action: e, content: t, document: n });
          if (r == null) return !1;
          let i = this.isContentReadOnly(r.content, t);
          ((this.savedContent = r.document.baseContent),
            (this.baseMtimeMs = this.reviewDiskSnapshot?.mtimeMs ?? null),
            (this.reviewDiskSnapshot = null),
            (this.maySaveReadOnlyReviewResolution = i && r.content !== r.document.baseContent));
          let a = r.content !== t;
          return (
            a && this.replaceFile(r.content),
            (this.state = { ...this.state, isReadOnly: i }),
            this.emitState(),
            this.scheduleAutosave(),
            a
          );
        }
        resolveSelectionEdit(e) {
          let t = this.selectionEdit;
          if (t?.kind !== `review` || this.isClosing || this.state.file?.contents !== t.oldContent)
            return null;
          switch (((this.selectionEdit = null), this.emitState(), e)) {
            case `accept`:
              return t.replacementText;
            case `edit`:
            case `reject`:
              return null;
          }
        }
        async saveUntilClean() {
          await this.waitForPendingEditorChange();
          let e = await this.save();
          return e && this.hasUnsavedChanges ? this.saveUntilClean() : e;
        }
        async save() {
          let e = this.state.file?.contents,
            t = this.savedContent;
          if (
            e == null ||
            t == null ||
            this.reviewDiskSnapshot != null ||
            (this.state.isReadOnly && e !== t && !this.maySaveReadOnlyReviewResolution)
          )
            return !1;
          if ((this.clearAutosaveTimeout(), this.savePromise != null))
            return (await this.savePromise) ? this.save() : !1;
          if (e === t) return (this.emitState(), !0);
          let n = Vt({
            cloudFileAccess: this.options.cloudFileAccess,
            content: e,
            expectedMtimeMs: this.baseMtimeMs,
            filePath: this.options.filePath,
            hostId: this.options.hostId,
          })
            .then(async (n) => {
              if (this.abortController.signal.aborted) return !1;
              if ((++this.diskReadRevision, n.outcome === `saved`))
                return this.savedContent !== t || this.reviewDiskSnapshot != null
                  ? (await this.syncExternalChange(), this.savedContent === e)
                  : ((this.savedContent = e),
                    (this.baseMtimeMs = n.mtimeMs),
                    (this.maySaveReadOnlyReviewResolution = !1),
                    (this.reviewDiskSnapshot = null),
                    !0);
              let r = ++this.diskReadRevision,
                i;
              try {
                i = await this.readFile();
              } catch (e) {
                if (r === this.diskReadRevision) throw e;
                return !1;
              }
              return this.abortController.signal.aborted || r !== this.diskReadRevision
                ? !1
                : i.content === e
                  ? ((this.savedContent = e),
                    (this.baseMtimeMs = i.mtimeMs),
                    (this.maySaveReadOnlyReviewResolution = !1),
                    (this.reviewDiskSnapshot = null),
                    !0)
                  : (this.applyDiskSnapshot(i), !1);
            })
            .catch(
              () => (
                !this.isClosing && !this.abortController.signal.aborted && this.options.onSaveError(),
                !1
              ),
            );
          ((this.savePromise = n), this.emitState());
          let r = await n;
          return (
            this.savePromise === n && (this.savePromise = null),
            this.emitState(),
            r && this.hasUnsavedChanges && this.scheduleAutosave(),
            r
          );
        }
        readFile() {
          return Ut({
            cloudFileAccess: this.options.cloudFileAccess,
            filePath: this.options.filePath,
            hostId: this.options.hostId,
            maximumSizeBytes: xr,
            requireTextContent: !0,
            signal: this.abortController.signal,
          });
        }
        applyDiskSnapshot(e) {
          let t = this.state.file?.contents,
            n = this.getDocument();
          if (t == null || n == null) return;
          if (
            this.options.reloadCleanExternalChanges &&
            n.kind === `ready` &&
            t === n.baseContent &&
            e.content !== t
          ) {
            (this.cancelSelectionEdit(),
              (this.savedContent = e.content),
              (this.baseMtimeMs = e.mtimeMs),
              (this.reviewDiskSnapshot = null),
              this.replaceFile(e.content),
              (this.state = { ...this.state, isReadOnly: e.sizeBytes > K }));
            return;
          }
          let r = cr({ document: n, diskContent: e.content, localContent: t });
          ((this.maySaveReadOnlyReviewResolution = !1),
            r.kind === `conflict`
              ? (this.cancelSelectionEdit(), this.options.onExternalConflict(), (this.reviewDiskSnapshot = e))
              : ((this.savedContent = r.baseContent),
                (this.baseMtimeMs = e.mtimeMs),
                (this.reviewDiskSnapshot = null),
                t === e.content && (this.state = { ...this.state, isReadOnly: e.sizeBytes > K })),
            this.scheduleAutosave());
        }
        emitState() {
          if (
            (this.reportUnsavedChanges(this.hasUnsavedChanges || this.savePromise != null), this.isClosing)
          ) {
            this.emitDraft();
            return;
          }
          let e = this.state.file?.contents,
            t = this.getDocument(),
            n = e == null || t == null ? null : lr(t, e);
          (this.emitDraft(),
            this.options.onStateChange({
              ...this.state,
              externalReview:
                n == null || e == null
                  ? null
                  : {
                      isReadOnly: this.isContentReadOnly(n.newContent, e),
                      newFile: this.createFile(n.newContent),
                      oldFile: this.createFile(n.oldContent),
                    },
              isSelectionEditPending: this.selectionEdit?.kind === `pending`,
              selectionReview:
                this.selectionEdit?.kind === `review`
                  ? {
                      isReadOnly: !1,
                      newFile: this.createFile(this.selectionEdit.newContent),
                      oldFile: this.createFile(this.selectionEdit.oldContent),
                    }
                  : null,
            }));
        }
        failLoad() {
          (this.options.onLoadError(), (this.state = { ...this.state, hasLoadError: !0 }), this.emitState());
        }
        reportUnsavedChanges(e) {
          e !== this.lastReportedUnsavedChanges &&
            ((this.lastReportedUnsavedChanges = e), this.options.onUnsavedChangesChange(e));
        }
        emitDraft() {
          if (this.abortController.signal.aborted) return;
          let e = this.state.file,
            t = this.savedContent;
          if (e == null || t == null) return;
          let n =
            this.reviewDiskSnapshot != null || e.contents !== t
              ? { content: e.contents, savedContent: t }
              : null;
          (n?.content !== this.lastDraft?.content || n?.savedContent !== this.lastDraft?.savedContent) &&
            ((this.lastDraft = n), this.options.onDraftChange(n));
        }
        replaceFile(e) {
          this.state = { ...this.state, file: this.createFile(e), fileRevision: this.state.fileRevision + 1 };
        }
        createFile(e) {
          return {
            cacheKey: `${this.options.hostId}:${this.options.filePath}:${e.length}:${at(e)}`,
            contents: e,
            lang: this.options.language,
            name: this.options.filePath,
          };
        }
        scheduleAutosave() {
          (this.clearAutosaveTimeout(),
            !(
              !this.hasUnsavedChanges ||
              this.savedContent == null ||
              this.reviewDiskSnapshot != null ||
              (this.state.isReadOnly && !this.maySaveReadOnlyReviewResolution)
            ) &&
              (this.autosaveTimeoutId = setTimeout(() => {
                ((this.autosaveTimeoutId = null), this.save());
              }, Sr)));
        }
        clearAutosaveTimeout() {
          this.autosaveTimeoutId != null &&
            (clearTimeout(this.autosaveTimeoutId), (this.autosaveTimeoutId = null));
        }
        clearPendingEditorChange() {
          (this.pendingEditorChangeTimeoutId != null &&
            (clearTimeout(this.pendingEditorChangeTimeoutId), (this.pendingEditorChangeTimeoutId = null)),
            this.pendingEditorChange?.resolve(void 0),
            (this.pendingEditorChange = null));
        }
        syncPendingExternalChange() {
          this.hasPendingExternalChange && ((this.hasPendingExternalChange = !1), this.syncExternalChange());
        }
        cancelSelectionEdit() {
          (this.selectionEdit?.kind === `pending` && this.selectionEdit.abortController.abort(),
            (this.selectionEdit = null));
        }
        async waitForPendingEditorChange() {
          for (; this.pendingEditorChange != null;) await this.pendingEditorChange.promise;
        }
        get hasUnsavedChanges() {
          return this.pendingEditorChange == null
            ? this.state.file != null && this.savedContent != null
              ? this.reviewDiskSnapshot != null || this.state.file.contents !== this.savedContent
              : this.options.initialDraft != null &&
                this.options.initialDraft.content !== this.options.initialDraft.savedContent
            : !0;
        }
        isContentReadOnly(e, t) {
          return e === t
            ? this.state.isReadOnly
            : e === this.reviewDiskSnapshot?.content
              ? this.reviewDiskSnapshot.sizeBytes > K
              : new Blob([e]).size > K;
        }
        getDocument() {
          return this.savedContent == null
            ? null
            : this.reviewDiskSnapshot == null
              ? sr(this.savedContent)
              : {
                  baseContent: this.savedContent,
                  diskContent: this.reviewDiskSnapshot.content,
                  kind: `conflict`,
                };
        }
      }));
  }))();
}
function q() {
  return new kr();
}
function Er(e) {
  switch (e) {
    case -1:
      return `backward`;
    case 0:
      return `none`;
    case 1:
      return `forward`;
  }
}
var Dr, Or, J, kr;
function Ar() {
  return (Ar = e(() => {
    (Re(),
      (Dr = Oe()),
      _e(),
      zt(),
      (Or = Ne()),
      (J = 8),
      (kr = class {
        events = null;
        selectionEdit = null;
        selectionEditMarker = null;
        selectionEditResume = null;
        toolbar = null;
        selectionState = `dismissed`;
        shiftKeyDown = !1;
        stopPositioning = null;
        surface = null;
        attach = (e) => {
          if ((this.detach(), e == null)) return;
          ((this.surface = e), (this.selectionState = `tracking`));
          let t = new AbortController();
          this.events = t;
          let n = { capture: !0, signal: t.signal },
            r = (e) => {
              let t = e.composedPath()[0];
              return t instanceof HTMLElement && t.closest(`[data-search-panel]`) != null;
            };
          return (
            e.addEventListener(
              `keydown`,
              (e) => {
                if (r(e)) return;
                this.shiftKeyDown = e.shiftKey;
                let t = [`Alt`, `Control`, `Meta`, `Shift`].includes(e.key),
                  n = (e.metaKey || e.ctrlKey) && [`c`, `v`].includes(e.key.toLowerCase()),
                  i =
                    e.shiftKey &&
                    [
                      `ArrowLeft`,
                      `ArrowRight`,
                      `ArrowUp`,
                      `ArrowDown`,
                      `Home`,
                      `End`,
                      `PageUp`,
                      `PageDown`,
                    ].includes(e.key);
                if (t || n || i) {
                  this.toolbar?.widget.toggleAttribute(`hidden`, !0);
                  return;
                }
                this.dismiss();
              },
              n,
            ),
            e.addEventListener(
              `keyup`,
              (e) => {
                r(e) || ((this.shiftKeyDown = e.shiftKey), this.openSelectionAction());
              },
              n,
            ),
            document.addEventListener(`pointercancel`, this.dismiss, n),
            document.addEventListener(`pointerdown`, this.onPointerDown, n),
            document.addEventListener(`selectionchange`, this.syncSelection, n),
            document.addEventListener(`pointerup`, this.onPointerUp, { signal: t.signal }),
            this.selectionEditResume != null &&
              requestAnimationFrame(() => {
                this.events === t &&
                  this.selectionEditResume != null &&
                  this.surface === e &&
                  this.openSelectionAction();
              }),
            () => {
              this.surface === e && this.detach();
            }
          );
        };
        render({
          context: e,
          intl: t,
          onAddSelectedTextToChat: n,
          onCommentSelectedRange: r,
          onClearEditorSelection: i,
          onEditSelectedText: a,
        }) {
          let o = e.getSelectionText(),
            s = document.createElement(`span`);
          s.hidden = !0;
          let l = this.surface?.parentElement;
          if (o.trim().length === 0 || l == null) return (this.removeToolbar(), queueMicrotask(e.close), s);
          let u = () => ({ start: { ...e.selection.start }, end: { ...e.selection.end } }),
            d = this.surface?.ownerDocument.getSelection();
          this.removeToolbar();
          let f = document.createElement(`div`);
          ((f.hidden = this.shiftKeyDown),
            (f.dataset.pierreSelectionActions = ``),
            (f.className = `pointer-events-none absolute z-20 max-w-[calc(100%_-_1rem)]`),
            (f.style.visibility = `hidden`),
            l.append(f));
          let p = (0, Dr.createRoot)(f);
          ((this.toolbar = {
            closeSelectionAction: e.close,
            domRange: d?.rangeCount ? d.getRangeAt(0).cloneRange() : null,
            onClearEditorSelection: i,
            root: p,
            widget: f,
          }),
            (this.selectionState = `tracking`));
          let m = this.selectionEditResume;
          ((this.selectionEditResume = null),
            p.render(
              (0, Or.jsx)(c, {
                value: t,
                children: (0, Or.jsx)(P, {
                  selectedText: o,
                  onAddSelectedText:
                    n == null
                      ? void 0
                      : () => {
                          let t = e.getSelectionText(),
                            r = u();
                          (this.dismiss(), n(t, r));
                        },
                  onCommentSelectedText:
                    r == null
                      ? void 0
                      : () => {
                          let e = u();
                          (this.dismiss(), r(e));
                        },
                  onEditSelectedText: async (n) => {
                    let r = m?.mode === `edit` && this.selectionEdit != null ? this.selectionEdit : null,
                      i = r?.context ?? e,
                      o = r?.range ?? u(),
                      s = i.textDocument.getText(),
                      c = { context: i, instruction: n, range: o };
                    ((this.selectionEdit = c),
                      (this.selectionEditMarker = {
                        ...o,
                        message: t.formatMessage({
                          id: `pierreFileEditor.selectionEditPending`,
                          defaultMessage: `Edit in progress`,
                          description: `Status shown for a selected range while a model edit is being generated`,
                        }),
                        severity: `hint`,
                      }));
                    let l = a({
                        content: s,
                        endOffset: i.textDocument.offsetAt(o.end),
                        instruction: n,
                        startOffset: i.textDocument.offsetAt(o.start),
                      }),
                      d = this.surface?.ownerDocument.getSelection(),
                      f = this.toolbar?.domRange;
                    d != null && f != null && (d.removeAllRanges(), d.addRange(f));
                    let p = await l;
                    if (this.selectionEdit !== c) return `handled`;
                    switch (p) {
                      case `canceled`:
                        return ((this.selectionEdit = null), this.dismiss(), `handled`);
                      case `created`:
                        return (this.dismiss(), `handled`);
                      case `failed`:
                        return ((this.selectionEdit = null), `retry`);
                    }
                  },
                  resume: m,
                }),
              }),
            ));
          let h = this.getEditorRoot()?.querySelector(`[data-selection-range]`);
          if (h != null) {
            let e = { contextElement: h, getBoundingClientRect: () => this.getSelectionRect(f) };
            this.stopPositioning = Me(
              e,
              f,
              () => {
                this.position(e, f);
              },
              { animationFrame: !0 },
            );
          }
          return s;
        }
        syncSelectionEditMarker(e, t) {
          let n = this.selectionEditMarker;
          n != null && (e.setMarkers(t ? [n] : []), t || (this.selectionEditMarker = null));
        }
        resolveSelectionEdit(e, t, n) {
          let r = this.selectionEdit;
          if (t === `accept`) {
            if (n == null) return (this.cancelSelectionEdit(), !0);
            let t = e.getEditState()?.document;
            if (r == null || t == null) return !1;
            this.selectionEdit = null;
            let i = t.offsetAt(r.range.start);
            e.applyEdits([{ newText: n, range: r.range }]);
            let a = t.positionAt(i + n.length);
            return (
              t.setLastUndoSelectionsAfter([{ direction: 0, end: a, start: a }]),
              e.setSelections([{ direction: `none`, end: a, start: a }]),
              !0
            );
          }
          return (
            r != null &&
            (t === `reject` && (this.selectionEdit = null),
            this.dismiss(),
            (this.selectionEditResume =
              t === `edit` ? { instruction: r.instruction, mode: `edit` } : { mode: `actions-focused` }),
            e.setSelections([
              { direction: Er(r.context.selection.direction), end: r.range.end, start: r.range.start },
            ]),
            !0)
          );
        }
        cancelSelectionEdit() {
          ((this.selectionEdit = null), (this.selectionEditResume = null), this.dismiss());
        }
        dismiss = () => {
          this.selectionState = `dismissed`;
          let e = this.toolbar?.closeSelectionAction;
          (this.removeToolbar(), e?.());
        };
        removeToolbar() {
          (this.stopPositioning?.(), (this.stopPositioning = null));
          let e = this.toolbar;
          ((this.toolbar = null), e != null && (e.widget.remove(), queueMicrotask(() => e.root.unmount())));
        }
        detach() {
          (this.events?.abort(),
            (this.events = null),
            (this.surface = null),
            (this.shiftKeyDown = !1),
            this.dismiss());
        }
        onPointerDown = (e) => {
          this.shiftKeyDown = e.shiftKey;
          let t = e.composedPath();
          if (!(this.toolbar != null && t.includes(this.toolbar.widget))) {
            if (this.surface != null && t.includes(this.surface)) {
              if (
                t.some((e) => e instanceof HTMLElement && e.hasAttribute(`data-pierre-editor-annotation`))
              ) {
                (this.toolbar?.onClearEditorSelection?.(), this.dismiss());
                return;
              }
              (this.toolbar?.widget.toggleAttribute(`hidden`, !0), (this.selectionState = `dragging`));
              return;
            }
            (this.toolbar?.onClearEditorSelection?.(), this.dismiss());
          }
        };
        syncSelection = () => {
          let e = this.surface;
          this.selectionState === `tracking` &&
            e != null &&
            queueMicrotask(() => {
              if (
                this.selectionState !== `tracking` ||
                this.surface !== e ||
                (this.getEditorRoot()?.activeElement ?? e.ownerDocument.activeElement)?.closest(
                  `[data-search-panel]`,
                ) != null
              )
                return;
              let t = e.ownerDocument.getSelection(),
                n = t?.rangeCount ? t.getRangeAt(0) : null,
                r = this.toolbar?.domRange;
              this.toolbar?.widget.contains(e.ownerDocument.activeElement) ||
                ((n == null ||
                  r == null ||
                  r.startContainer !== n.startContainer ||
                  r.startOffset !== n.startOffset ||
                  r.endContainer !== n.endContainer ||
                  r.endOffset !== n.endOffset) &&
                  (n != null &&
                  e.matches(`:focus-within`) &&
                  this.getEditorRoot()?.querySelector(`[data-selection-range]`) != null
                    ? this.openSelectionAction()
                    : (e.ownerDocument.activeElement?.closest(`[data-codex-composer-root]`) != null &&
                        this.toolbar?.onClearEditorSelection?.(),
                      this.dismiss(),
                      (this.selectionState = `tracking`))));
            });
        };
        onPointerUp = (e) => {
          if (
            this.selectionState !== `dragging` ||
            ((this.selectionState = `tracking`), e.pointerType !== `mouse`)
          )
            return;
          let t = this.events;
          requestAnimationFrame(() => {
            this.events === t && this.selectionState === `tracking` && this.openSelectionAction(!0);
          });
        };
        openSelectionAction(e = !1) {
          this.shiftKeyDown ||
            (e && this.getEditorRoot()?.querySelector(`[data-selection-range]`) == null) ||
            this.toolbar?.widget.toggleAttribute(`hidden`, !1);
        }
        getEditorRoot() {
          return this.surface?.querySelector(`diffs-container`)?.shadowRoot ?? null;
        }
        getSelectionRect(e) {
          let t = this.surface,
            n = this.getEditorRoot(),
            r = n?.querySelector(`[data-content]`);
          if (t == null || n == null || r == null) return new DOMRect();
          let i = Array.from(n.querySelectorAll(`[data-selection-range]`), (e) => e.getBoundingClientRect());
          if (i.length === 0) return new DOMRect();
          let a = Math.min(...i.map((e) => e.top)),
            o = Math.max(...i.map((e) => e.bottom)),
            s = Math.max(t.getBoundingClientRect().left + J, r.getBoundingClientRect().left);
          return new DOMRect(s, a, e.getBoundingClientRect().width, o - a);
        }
        async position(e, t) {
          let n = this.surface;
          if (n == null || e.getBoundingClientRect().height === 0) {
            t.style.visibility = `hidden`;
            return;
          }
          let r = { boundary: n, padding: J },
            { x: i, y: a, middlewareData: o } = await te(e, t, { middleware: [se(4), ie(r), Ie(r), Ae(r)] });
          this.toolbar?.widget === t &&
            Object.assign(t.style, {
              left: `${i}px`,
              top: `${a}px`,
              visibility: o.hide?.referenceHidden ? `hidden` : `visible`,
            });
        }
      }));
  }))();
}
function jr(e, t) {
  e.logProductEvent(k, { fileExtension: Nr(t) });
}
function Mr(e, { hostId: t, path: n }) {
  let r = Y.get(e);
  r ?? ((r = new Map()), Y.set(e, r));
  let i = `${t}\0${n}`,
    a = r.get(i);
  (a != null && clearTimeout(a),
    r.set(
      i,
      setTimeout(() => {
        (r.delete(i), e.logProductEvent(we, { fileExtension: Nr(n) }));
      }, Pr),
    ));
}
function Nr(e) {
  let t = Ot(e);
  return t == null ? `none` : Fr.has(t) ? t : `other`;
}
var Pr, Fr, Y;
function Ir() {
  return (Ir = e(() => {
    (C(),
      xt(),
      (Pr = 2e3),
      (Fr = new Set(
        `bash.bat.bazel.bzl.c.c++.c++m.cc.cjs.cmd.cpp.cs.css.csx.cts.go.gql.graphql.h.h++.hh.hpp.htm.html.hxx.ini.java.js.json.json5.jsonc.jsonl.jsx.kt.kts.less.lua.markdown.md.mdx.mjs.mts.ndjson.php.php4.php5.phtml.pl.ps1.psd1.psm1.py.pyi.pyw.r.rb.rs.sass.scss.sh.sql.swift.tex.toml.ts.tsx.txt.vue.webmanifest.xhtml.xml.yaml.yml.zsh`.split(
          `.`,
        ),
      )),
      (Y = new WeakMap()));
  }))();
}
function Lr(e) {
  let t = (0, Jr.c)(26),
    [n, r] = (0, X.useState)(null),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(`div`, { ref: r, className: `contents` })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== e.filePath || t[2] !== e.headerActions || t[3] !== e.hostId
    ? ((a =
        e.headerActions ??
        (0, Z.jsx)(nn, { hostId: e.hostId, path: e.filePath, showLabel: !0, variant: `viewer` })),
      (t[1] = e.filePath),
      (t[2] = e.headerActions),
      (t[3] = e.hostId),
      (t[4] = a))
    : (a = t[4]);
  let o;
  t[5] === a ? (o = t[6]) : ((o = (0, Z.jsxs)(Z.Fragment, { children: [i, a] })), (t[5] = a), (t[6] = o));
  let s;
  t[7] !== e.cwd ||
  t[8] !== e.filePath ||
  t[9] !== e.hostId ||
  t[10] !== e.onSelectFile ||
  t[11] !== e.workspaceRoot ||
  t[12] !== o
    ? ((s = (0, Z.jsx)(bn, {
        cwd: e.cwd,
        hostId: e.hostId,
        onSelectFile: e.onSelectFile,
        path: e.filePath,
        trailingContent: o,
        workspaceRoot: e.workspaceRoot,
      })),
      (t[7] = e.cwd),
      (t[8] = e.filePath),
      (t[9] = e.hostId),
      (t[10] = e.onSelectFile),
      (t[11] = e.workspaceRoot),
      (t[12] = o),
      (t[13] = s))
    : (s = t[13]);
  let c = s,
    l;
  t[14] !== n || t[15] !== e
    ? ((l = (0, Z.jsx)(
        Rr,
        { ...e, navigationContainer: n },
        JSON.stringify([e.tabId, e.hostId, e.filePath, e.language]),
      )),
      (t[14] = n),
      (t[15] = e),
      (t[16] = l))
    : (l = t[16]);
  let u;
  t[17] !== e.sidePane || t[18] !== l
    ? ((u = (0, Z.jsxs)(`div`, { className: `flex h-full min-h-0 flex-1`, children: [l, e.sidePane] })),
      (t[17] = e.sidePane),
      (t[18] = l),
      (t[19] = u))
    : (u = t[19]);
  let d = u,
    f;
  t[20] !== d || t[21] !== c || t[22] !== e.renderSlots
    ? ((f =
        e.renderSlots == null
          ? (0, Z.jsxs)(Z.Fragment, { children: [c, d] })
          : e.renderSlots({
              headerRows: [{ id: `file-navigation`, height: `content`, content: c }],
              content: d,
            })),
      (t[20] = d),
      (t[21] = c),
      (t[22] = e.renderSlots),
      (t[23] = f))
    : (f = t[23]);
  let p;
  return (
    t[24] === f
      ? (p = t[25])
      : ((p = (0, Z.jsx)(`div`, { className: `flex h-full min-h-0 flex-col`, children: f })),
        (t[24] = f),
        (t[25] = p)),
    p
  );
}
function Rr(e) {
  let t = (0, Jr.c)(427),
    {
      column: n,
      commentProps: i,
      comparisonBase: a,
      revealFirstChange: o,
      onFirstChangeRevealHandled: s,
      contentActions: c,
      renderContent: d,
      onDocumentChange: f,
      reloadCleanExternalChanges: p,
      conversationId: m,
      cwd: h,
      filePath: _,
      hostId: v,
      initialDraft: y,
      initialCommentRange: b,
      initialScrollTop: x,
      isActive: S,
      language: C,
      line: w,
      onAddSelectedTextToChat: ee,
      onDiscardChange: te,
      onDraftChange: D,
      onLoadError: O,
      onLineRevealHandled: ie,
      onOpenLocation: se,
      panelId: ce,
      onSaveChange: le,
      onSaveError: ue,
      onScrollChange: de,
      onScrollFlushChange: pe,
      onUnsavedChangesChange: he,
      workspaceRoot: k,
      workspaceRoots: ge,
      vim: _e,
      navigationContainer: ve,
    } = e,
    ye = S === void 0 || S,
    be = te === void 0 ? ni : te,
    xe = D === void 0 ? ni : D,
    we = le === void 0 ? ni : le,
    Te = pe === void 0 ? ni : pe,
    Ee = he === void 0 ? ni : he,
    A = u(gt),
    De = E(Bn),
    Oe = E(tt),
    Ae = r(ae.diffMarkerStyle),
    je = E(et),
    Me = ge ?? je,
    Ne = Be(ft, v),
    Fe = wt(Je),
    Ie = E(Ze),
    Le = Fe && Ie,
    Re;
  t[0] !== v || t[1] !== A.value
    ? ((Re = v === `durable` ? Mt(A.value) : null), (t[0] = v), (t[1] = A.value), (t[2] = Re))
    : (Re = t[2]);
  let ze = Be(Wt, Re),
    Ve = r(ae.codeFontSize) === !0,
    Ue = dt(),
    We = ht(Ue),
    M = T(),
    Ke = r(ae.lightCodeThemeId),
    qe = r(ae.darkCodeThemeId),
    Ye = r(ae.codeFontSize),
    Qe;
  t[3] === Ye ? (Qe = t[4]) : ((Qe = Math.round(Ye * Qr)), (t[3] = Ye), (t[4] = Qe));
  let $e = Qe,
    N = (0, X.useRef)(null),
    nt = (0, X.useRef)(null),
    at = (0, X.useRef)(!1),
    st = (0, X.useRef)(null),
    ct = (0, X.useRef)(null),
    lt = (0, X.useRef)(!1),
    ut = (0, X.useRef)(null),
    pt = (0, X.useRef)(x),
    _t = (0, X.useRef)(x == null),
    yt = (0, X.useRef)(null),
    bt = (0, X.useRef)(0),
    xt = (0, X.useRef)(null),
    Tt = (0, X.useRef)(0),
    Et = (0, X.useRef)(w),
    Dt = (0, X.useRef)(x ?? 0),
    Ot = (0, X.useRef)(null),
    kt = (0, X.useRef)(null),
    At = (0, X.useRef)(null),
    jt = (0, X.useRef)(y),
    Nt = (0, X.useRef)(null),
    Pt = (0, X.useRef)(!1),
    Ft = (0, X.useRef)(null),
    It = (0, X.useRef)(null),
    Rt = (0, X.useRef)(null),
    [P, zt] = (0, X.useState)(br),
    Bt;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Bt = { canRedo: !1, canUndo: !1, fileRevision: br.fileRevision }), (t[5] = Bt))
    : (Bt = t[5]);
  let [Vt, Ht] = (0, X.useState)(Bt),
    Ut,
    [F] = (0, X.useState)(Gr),
    [I] = (0, X.useState)(Wr),
    Gt = (0, X.useRef)(void 0),
    Kt;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Kt = { base: void 0, status: null }), (t[6] = Kt))
    : (Kt = t[6]);
  let [Yt, Xt] = (0, X.useState)(Kt),
    L = Yt.base === a ? Yt.status : null,
    Zt;
  t[7] === h ? (Zt = t[8]) : ((Zt = h == null ? null : Se(h)), (t[7] = h), (t[8] = Zt));
  let Qt;
  t[9] !== h || t[10] !== _ || t[11] !== k || t[12] !== Me
    ? ((Qt = k ?? Ct({ cwd: h, path: _, workspaceRoots: Me })),
      (t[9] = h),
      (t[10] = _),
      (t[11] = k),
      (t[12] = Me),
      (t[13] = Qt))
    : (Qt = t[13]);
  let $t;
  t[14] !== i || t[15] !== m || t[16] !== _ || t[17] !== Zt || t[18] !== Qt
    ? (($t = { cwd: Zt, diffPath: _, workspaceRoot: Qt, conversationId: m, enableComments: !1, ...i }),
      (t[14] = i),
      (t[15] = m),
      (t[16] = _),
      (t[17] = Zt),
      (t[18] = Qt),
      (t[19] = $t))
    : ($t = t[19]);
  let { annotations: en, annotationKeys: tn, addDraftComment: nn, renderCommentAnnotation: rn } = cn($t),
    on;
  t[20] === en ? (on = t[21]) : ((on = an(en)), (t[20] = en), (t[21] = on));
  let un = on,
    pn = (0, X.useRef)(null),
    mn,
    gn;
  (t[22] !== nn || t[23] !== tn || t[24] !== b
    ? ((mn = () => {
        if (b == null || pn.current === b) return;
        pn.current = b;
        let { lineNumber: e, startLine: t } = Gn(b);
        tn.has(sn(`additions`, e)) || nn({ side: `additions`, lineNumber: e, startLine: t });
      }),
      (gn = [nn, tn, b]),
      (t[22] = nn),
      (t[23] = tn),
      (t[24] = b),
      (t[25] = mn),
      (t[26] = gn))
    : ((mn = t[25]), (gn = t[26])),
    (0, X.useEffect)(mn, gn));
  let _n;
  t[27] === rn
    ? (_n = t[28])
    : ((_n = function (e) {
        return (0, Z.jsx)(`div`, {
          className: `select-text`,
          "data-pierre-editor-annotation": !0,
          children: rn(dn(e)),
        });
      }),
      (t[27] = rn),
      (t[28] = _n));
  let yn = _n,
    bn;
  t[29] !== M || t[30] !== A
    ? ((bn = () => {
        A.get(me).danger(
          M.formatMessage({
            id: `pierreFileEditor.selectionEditError`,
            defaultMessage: `Could not edit selection`,
            description: `Toast shown when a model could not generate an edit for selected text`,
          }),
          { errorAnalytics: { toastId: `pierreFileEditor.selectionEditError` } },
        );
      }),
      (t[29] = M),
      (t[30] = A),
      (t[31] = bn))
    : (bn = t[31]);
  let xn = bn,
    Sn;
  t[32] === _
    ? (Sn = t[33])
    : ((Sn = () => {
        let e = N.current?.getEditor(_);
        return e?.getEditState() == null ? void 0 : e;
      }),
      (t[32] = _),
      (t[33] = Sn));
  let R = j(Sn),
    wn;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wn = { count: 0, activeIndex: -1, previousIndex: -1, nextIndex: -1 }), (t[34] = wn))
    : (wn = t[34]);
  let [Tn, En] = (0, X.useState)(wn),
    Dn;
  t[35] === R
    ? (Dn = t[36])
    : ((Dn = () => {
        let e = R()?.getEditState();
        return e?.type === `file-diff` ? e.diffSession.hunks.flatMap(Ur).filter(Hr) : void 0;
      }),
      (t[35] = R),
      (t[36] = Dn));
  let On = j(Dn),
    kn;
  t[37] !== On || t[38] !== R || t[39] !== ye
    ? ((kn = () => {
        if (!ye) return;
        let e = On(),
          t = R(),
          n = t?.getViewState().selections?.at(-1),
          r = (n?.direction === -1 ? n.start : n?.end)?.line ?? -1,
          i = (t?.getEditState()?.document.lineCount ?? 1 / 0) - 1,
          a =
            e?.findIndex(
              (e) =>
                r >= Math.min(e.additionLineIndex, i) &&
                r < Math.min(e.additionLineIndex, i) + Math.max(1, e.additions),
            ) ?? -1,
          o = e?.length ?? 0,
          s = e?.findLastIndex((e, t) => (a < 0 || t < a) && e.additionLineIndex < r) ?? -1,
          c = e?.findIndex((e, t) => t > a && e.additionLineIndex > r) ?? -1;
        En((e) =>
          e.count === o && e.activeIndex === a && e.previousIndex === s && e.nextIndex === c
            ? e
            : { count: o, activeIndex: a, previousIndex: s, nextIndex: c },
        );
      }),
      (t[37] = On),
      (t[38] = R),
      (t[39] = ye),
      (t[40] = kn))
    : (kn = t[40]);
  let z = j(kn),
    An;
  t[41] !== P.fileRevision || t[42] !== z
    ? ((An = (e, t, n) => {
        (Rt.current?.updateContent(e.contents),
          z(),
          Ht({ canRedo: t, canUndo: n, fileRevision: P.fileRevision }));
      }),
      (t[41] = P.fileRevision),
      (t[42] = z),
      (t[43] = An))
    : (An = t[43]);
  let jn = j(An),
    Mn;
  t[44] !== nn ||
  t[45] !== tn ||
  t[46] !== i?.enableComments ||
  t[47] !== R ||
  t[48] !== M ||
  t[49] !== ee ||
  t[50] !== F ||
  t[51] !== xn
    ? ((Mn = (e) =>
        F.render({
          context: e,
          intl: M,
          onAddSelectedTextToChat: ee,
          onCommentSelectedRange:
            i?.enableComments === !0
              ? (e) => {
                  let { lineNumber: t, startLine: n } = Gn(e);
                  tn.has(sn(`additions`, t)) ||
                    (R()?.setSelections([]), nn({ side: `additions`, lineNumber: t, startLine: n }));
                }
              : void 0,
          onClearEditorSelection: () => R()?.setSelections([]),
          onEditSelectedText: async (e) => {
            let t = Rt.current;
            if (t == null) return `failed`;
            let n = await t.requestSelectionEdit(e);
            return (n === `failed` && xn(), n);
          },
        })),
      (t[44] = nn),
      (t[45] = tn),
      (t[46] = i?.enableComments),
      (t[47] = R),
      (t[48] = M),
      (t[49] = ee),
      (t[50] = F),
      (t[51] = xn),
      (t[52] = Mn))
    : (Mn = t[52]);
  let B = j(Mn),
    V = P.file?.contents ?? null,
    Nn = (0, X.useRef)(P.fileRevision),
    Pn;
  t[53] !== V || t[54] !== P.file || t[55] !== P.isReadOnly || t[56] !== _ || t[57] !== un
    ? ((Pn =
        P.file == null || V == null
          ? null
          : { annotations: un, edit: !P.isReadOnly, file: { ...P.file, contents: V }, id: _, type: `file` }),
      (t[53] = V),
      (t[54] = P.file),
      (t[55] = P.isReadOnly),
      (t[56] = _),
      (t[57] = un),
      (t[58] = Pn))
    : (Pn = t[58]);
  let H = Pn,
    In;
  t[59] !== H || t[60] !== a || t[61] !== I || t[62] !== P.fileRevision || t[63] !== _ || t[64] !== un
    ? ((In = (e) => {
        let t = e !== void 0 && e,
          n = N.current;
        if (n == null || H == null) return;
        let r = n.getItem(_),
          i = Nn.current === P.fileRevision,
          o = Gt.current !== a,
          s = H;
        if (t || !i || o || r == null) {
          let e = a == null ? null : nr(a, H.file);
          (Xt({ base: a, status: e?.status ?? null }),
            e?.status === `ready` &&
              (s = { id: _, type: `diff`, edit: H.edit, fileDiff: e.fileDiff, annotations: un.map(dn) }));
        } else
          r?.type === `diff`
            ? (s = { ...r, edit: H.edit, annotations: un.map(dn) })
            : r?.type === `file` && (s = { ...H, file: r.file });
        if (r == null) n.addItems([s]);
        else if (o || r.type !== s.type) {
          (i ? I.capture(n.getEditor(_)) : I.clear(),
            At.current?.shadowRoot?.activeElement != null && (ut.current = P.fileRevision));
          let e = nt.current;
          (e != null &&
            (Ot.current = {
              fileRevision: P.fileRevision,
              scrollLeft: e.scrollLeft,
              scrollTop: n.getInstance()?.getScrollTop() ?? 0,
            }),
            I.replaceItem(n, s));
        } else n.updateItem({ ...s, version: (r?.version ?? 0) + 1 });
        ((Gt.current = a), (Nn.current = P.fileRevision));
      }),
      (t[59] = H),
      (t[60] = a),
      (t[61] = I),
      (t[62] = P.fileRevision),
      (t[63] = _),
      (t[64] = un),
      (t[65] = In))
    : (In = t[65]);
  let Rn = j(In),
    U;
  t[66] === Rn
    ? (U = t[67])
    : ((U = () => {
        Rn();
      }),
      (t[66] = Rn),
      (t[67] = U));
  let zn;
  (t[68] !== a || t[69] !== P.fileRevision || t[70] !== P.isReadOnly || t[71] !== un || t[72] !== Rn
    ? ((zn = [a, P.fileRevision, P.isReadOnly, un, Rn]),
      (t[68] = a),
      (t[69] = P.fileRevision),
      (t[70] = P.isReadOnly),
      (t[71] = un),
      (t[72] = Rn),
      (t[73] = zn))
    : (zn = t[73]),
    (0, X.useLayoutEffect)(U, zn));
  let Vn, Hn, Wn, Kn, qn;
  if (
    t[74] !== h ||
    t[75] !== P.externalReview ||
    t[76] !== P.file ||
    t[77] !== P.isReadOnly ||
    t[78] !== P.selectionReview ||
    t[79] !== _ ||
    t[80] !== Le ||
    t[81] !== Ne ||
    t[82] !== k
  ) {
    Vn = h == null && k == null && !ke(_) ? null : g(h ?? k ?? ``, _, oe(h ?? k ?? _) || oe(_));
    let e = Vn == null ? null : Yr.default.posix.dirname(Vn);
    ((Kn = Be),
      (qn = Un),
      (Hn =
        Le &&
        e != null &&
        Ne != null &&
        P.file != null &&
        !P.isReadOnly &&
        P.externalReview == null &&
        P.selectionReview == null),
      (Wn = e == null || Ne == null ? null : { cwd: Se(e), hostConfig: Ne }),
      (t[74] = h),
      (t[75] = P.externalReview),
      (t[76] = P.file),
      (t[77] = P.isReadOnly),
      (t[78] = P.selectionReview),
      (t[79] = _),
      (t[80] = Le),
      (t[81] = Ne),
      (t[82] = k),
      (t[83] = Vn),
      (t[84] = Hn),
      (t[85] = Wn),
      (t[86] = Kn),
      (t[87] = qn));
  } else ((Vn = t[83]), (Hn = t[84]), (Wn = t[85]), (Kn = t[86]), (qn = t[87]));
  let Jn = Vn ?? _,
    Xn;
  t[88] !== Hn || t[89] !== Wn || t[90] !== Jn
    ? ((Xn = { enabled: Hn, lookup: Wn, operationSource: `review_model`, path: Jn }),
      (t[88] = Hn),
      (t[89] = Wn),
      (t[90] = Jn),
      (t[91] = Xn))
    : (Xn = t[91]);
  let { data: Qn } = Kn(qn, Xn),
    $n = Le ? Qn : null,
    er;
  t[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((er = () => Rt.current?.getSavedContent() ?? null), (t[92] = er))
    : (er = t[92]);
  let W = j(er),
    tr;
  t[93] !== R || t[94] !== W || t[95] !== M.locale
    ? ((tr = () => new Yn({ getEditor: R, getSavedContent: W, locale: M.locale })),
      (t[93] = R),
      (t[94] = W),
      (t[95] = M.locale),
      (t[96] = tr))
    : (tr = t[96]);
  let [G] = (0, X.useState)(tr),
    rr;
  t[97] !== !1 || t[98] !== _e || t[99] !== Ve
    ? ((rr = (e) => !1), (t[97] = !1), (t[98] = _e), (t[99] = Ve), (t[100] = rr))
    : (rr = t[100]);
  let ir = j(rr),
    ar;
  t[101] !== G || t[102] !== ir || t[103] !== F || t[104] !== z
    ? ((ar = (e) => {
        let t = F.attach(e),
          n = G.attach(e);
        if (e == null) return;
        let r = new AbortController(),
          i = () => {
            queueMicrotask(() => {
              r.signal.aborted || z();
            });
          };
        (e.ownerDocument.addEventListener(`selectionchange`, i, { signal: r.signal }),
          e.addEventListener(`keyup`, i, { signal: r.signal }),
          e.addEventListener(`pointerup`, i, { signal: r.signal }));
        let a = Ge(e, ir);
        return () => {
          (r.abort(), a(), n?.(), t?.());
        };
      }),
      (t[101] = G),
      (t[102] = ir),
      (t[103] = F),
      (t[104] = z),
      (t[105] = ar))
    : (ar = t[105]);
  let or = j(ar),
    sr,
    cr;
  (t[106] !== G || t[107] !== $n || t[108] !== M.locale
    ? ((sr = () => {
        (G.setLocale(M.locale), G.setBlameResult($n ?? null));
      }),
      (cr = [G, $n, M.locale]),
      (t[106] = G),
      (t[107] = $n),
      (t[108] = M.locale),
      (t[109] = sr),
      (t[110] = cr))
    : ((sr = t[109]), (cr = t[110])),
    (0, X.useLayoutEffect)(sr, cr));
  let lr = j(xe),
    ur = j(O),
    K = j(ie ?? ni),
    dr = j(s ?? ni),
    fr;
  t[111] !== _ || t[112] !== v || t[113] !== A
    ? ((fr = () => {
        Mr(A.get(mt), { hostId: v, path: _ });
      }),
      (t[111] = _),
      (t[112] = v),
      (t[113] = A),
      (t[114] = fr))
    : (fr = t[114]);
  let pr = j(fr),
    mr;
  t[115] !== _ || t[116] !== A
    ? ((mr = () => {
        jr(A.get(mt), _);
      }),
      (t[115] = _),
      (t[116] = A),
      (t[117] = mr))
    : (mr = t[117]);
  let hr = j(mr),
    gr = j(be),
    _r = j(we),
    vr = j(ue),
    yr;
  t[118] !== _ || t[119] !== f
    ? ((yr = (e, t, n) => {
        f?.(
          e.file == null
            ? null
            : {
                filePath: _,
                content: e.file.contents,
                isReadOnly: e.isReadOnly,
                hasConflict: e.externalReview != null || e.selectionReview != null,
                isDirty: e.file.contents !== t.getSavedContent(),
                onChange: (e) => t.updateContent(e),
                onSave: n,
              },
        );
      }),
      (t[118] = _),
      (t[119] = f),
      (t[120] = yr))
    : (yr = t[120]);
  let xr = j(yr),
    Sr = j(de ?? ni),
    Cr = j(Te),
    Tr;
  t[121] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tr = (e) => {
        let t = N.current?.getInstance();
        if (t == null) return;
        let n = Math.max(0, t.getScrollHeight() + $r - t.getHeight());
        t.getScrollTop() !== Math.min(Math.max(e, 0), n) &&
          t.scrollTo({ behavior: `instant`, position: e, type: `position` });
      }),
      (t[121] = Tr))
    : (Tr = t[121]);
  let q = j(Tr),
    Er;
  t[122] !== Sr || t[123] !== de
    ? ((Er = () => {
        if (de == null) return;
        let e = st.current?.querySelector(`[data-inline-file-diff-review-viewport]`),
          t =
            !_t.current && pt.current != null
              ? pt.current
              : (e?.scrollTop ?? N.current?.getInstance()?.getScrollTop() ?? Dt.current);
        Sr(t);
      }),
      (t[122] = Sr),
      (t[123] = de),
      (t[124] = Er))
    : (Er = t[124]);
  let Dr = j(Er),
    Or;
  t[125] !== P.file || t[126] !== q
    ? ((Or = () => {
        if (_t.current || yt.current != null) return;
        let e = () => {
          yt.current = -1;
          let t = pt.current,
            n = N.current?.getInstance();
          if (t == null || n == null) {
            yt.current = null;
            return;
          }
          (q(t), (bt.current += 1));
          let r = n.getScrollHeight() + $r - n.getHeight();
          xt.current === r ? (Tt.current += 1) : ((xt.current = r), (Tt.current = 0));
          let i = Math.min(t, Math.max(r, 0)),
            a = Math.abs(n.getScrollTop() - i) <= 1,
            o = Tt.current >= ti,
            s = bt.current >= ei;
          if ((P.file != null && a && o) || s) {
            ((_t.current = !0), (yt.current = null));
            return;
          }
          yt.current = requestAnimationFrame(e);
        };
        e();
      }),
      (t[125] = P.file),
      (t[126] = q),
      (t[127] = Or))
    : (Or = t[127]);
  let J = j(Or),
    kr;
  t[128] !== I || t[129] !== _ || t[130] !== Rn || t[131] !== J
    ? ((kr = (e) => {
        (e ?? I.capture(N.current?.getEditor(_)), (N.current = e), e != null && (Rn(!0), J()));
      }),
      (t[128] = I),
      (t[129] = _),
      (t[130] = Rn),
      (t[131] = J),
      (t[132] = kr))
    : (kr = t[132]);
  let Ar = j(kr),
    Nr;
  t[133] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nr = () => {
        yt.current != null && (cancelAnimationFrame(yt.current), (yt.current = null));
      }),
      (t[133] = Nr))
    : (Nr = t[133]);
  let Pr = j(Nr),
    Fr;
  t[134] === Pr
    ? (Fr = t[135])
    : ((Fr = () => {
        ((_t.current = !0), Pr());
      }),
      (t[134] = Pr),
      (t[135] = Fr));
  let Y = j(Fr),
    Ir = j(Ee),
    Lr;
  t[136] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Lr = (e) => {
        e.nativeEvent.composedPath().some(qr) && Rt.current?.markPotentiallyDirty();
      }),
      (t[136] = Lr))
    : (Lr = t[136]);
  let Rr = Lr,
    ri;
  t[137] !== _e || t[138] !== Ve
    ? ((ri = (e) => {
        Rr(e);
      }),
      (t[137] = _e),
      (t[138] = Ve),
      (t[139] = ri))
    : (ri = t[139]);
  let ii = ri,
    ai,
    oi;
  (t[140] !== ze ||
  t[141] !== _ ||
  t[142] !== gr ||
  t[143] !== xr ||
  t[144] !== lr ||
  t[145] !== ur ||
  t[146] !== _r ||
  t[147] !== vr ||
  t[148] !== pr ||
  t[149] !== hr ||
  t[150] !== Ir ||
  t[151] !== v ||
  t[152] !== C ||
  t[153] !== p ||
  t[154] !== A ||
  t[155] !== F
    ? ((ai = () => {
        let e = () => t.saveUntilClean(),
          t = new wr({
            reloadCleanExternalChanges: p,
            cloudFileAccess: ze,
            filePath: _,
            hostId: v,
            initialDraft: jt.current ?? null,
            language: C,
            onDraftChange: lr,
            onEdit: pr,
            onExternalConflict: () => F.cancelSelectionEdit(),
            onLoad: hr,
            onLoadError: ur,
            onSaveError: vr,
            onStateChange: (n) => {
              (zt(n), xr(n, t, e));
            },
            onUnsavedChangesChange: (t) => Ir(t, e),
          });
        ((Rt.current = t), gr(() => t.dispose({ discardUnsavedChanges: !0 })), _r(e));
        let n = () => t.dispose();
        (window.addEventListener(`pagehide`, n), t.start());
        let r;
        if (p && A.value.routeKind === `chatgpt-thread`) {
          let e = A.value.conversationId,
            n = !1,
            i = null;
          r = A.watch((r) => {
            let { get: a } = r,
              o = a(ot, e);
            if (Xe(o)) {
              let t = a(it, e);
              ((i = n ? (t ?? i) : t), (n = !0));
              return;
            }
            if (!n) return;
            n = !1;
            let s = A.get(rt, e);
            o === `idle` && s?.result === `completed` && s.requestId === i && t.syncExternalChange();
          });
        }
        return () => {
          (r?.(), window.removeEventListener(`pagehide`, n), gr(null), _r(null), n());
        };
      }),
      (oi = [p, ze, _, gr, xr, lr, ur, _r, vr, pr, hr, Ir, v, C, A, F]),
      (t[140] = ze),
      (t[141] = _),
      (t[142] = gr),
      (t[143] = xr),
      (t[144] = lr),
      (t[145] = ur),
      (t[146] = _r),
      (t[147] = vr),
      (t[148] = pr),
      (t[149] = hr),
      (t[150] = Ir),
      (t[151] = v),
      (t[152] = C),
      (t[153] = p),
      (t[154] = A),
      (t[155] = F),
      (t[156] = ai),
      (t[157] = oi))
    : ((ai = t[156]), (oi = t[157])),
    (0, X.useEffect)(ai, oi));
  let si, ci;
  (t[158] !== Pr || t[159] !== Dr || t[160] !== Cr || t[161] !== J
    ? ((si = () => (
        Cr(Dr),
        J(),
        () => {
          (Dr(), Cr(null), Pr());
        }
      )),
      (ci = [Pr, Dr, Cr, J]),
      (t[158] = Pr),
      (t[159] = Dr),
      (t[160] = Cr),
      (t[161] = J),
      (t[162] = si),
      (t[163] = ci))
    : ((si = t[162]), (ci = t[163])),
    (0, X.useLayoutEffect)(si, ci));
  let Q = P.selectionReview ?? P.externalReview,
    li = Vt.fileRevision === P.fileRevision,
    ui;
  t[164] === V ? (ui = t[165]) : ((ui = Kr(V)), (t[164] = V), (t[165] = ui));
  let di = ui,
    fi;
  t[166] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fi = () => st.current?.closest(`[role="tabpanel"]`) ?? null), (t[166] = fi))
    : (fi = t[166]);
  let pi = fi,
    mi;
  t[167] !== _ || t[168] !== R || t[169] !== K || t[170] !== z
    ? ((mi = () => {
        let e = R(),
          t = N.current,
          n = kt.current;
        e != null &&
          t != null &&
          At.current != null &&
          n != null &&
          ((kt.current = null),
          e.setSelections([
            {
              direction: `none`,
              end: { character: n.character, line: n.line },
              start: { character: n.character, line: n.line },
            },
          ]),
          z(),
          t.scrollTo({
            align: `center`,
            behavior: `instant`,
            id: _,
            lineNumber: n.line + 1,
            side: `additions`,
            type: `line`,
          }),
          n.focus && e.focus({ preventScroll: !0 }),
          n.handledLine != null && K(n.handledLine));
      }),
      (t[167] = _),
      (t[168] = R),
      (t[169] = K),
      (t[170] = z),
      (t[171] = mi))
    : (mi = t[171]);
  let $ = j(mi),
    hi;
  t[172] === R
    ? (hi = t[173])
    : ((hi = () => {
        R()?.focus({ preventScroll: !0 });
      }),
      (t[172] = R),
      (t[173] = hi));
  let gi = hi,
    _i;
  t[174] !== _ || t[175] !== R || t[176] !== Y || t[177] !== z
    ? ((_i = (e) => {
        (Y(), (Ot.current = null));
        let t = R(),
          n = t?.getEditState();
        if (t != null && n != null) {
          let r = { line: Math.min(e.additionLineIndex, n.document.lineCount - 1), character: 0 };
          t.setSelections([{ start: r, end: r, direction: `none` }]);
        }
        (N.current?.scrollTo({
          type: `line`,
          id: _,
          side: e.additions > 0 ? `additions` : `deletions`,
          lineNumber: (e.additions > 0 ? e.additionLineIndex : e.deletionLineIndex) + 1,
          align: `center`,
          behavior: `instant`,
        }),
          z());
      }),
      (t[174] = _),
      (t[175] = R),
      (t[176] = Y),
      (t[177] = z),
      (t[178] = _i))
    : (_i = t[178]);
  let vi = j(_i),
    yi;
  t[179] !== Q ||
  t[180] !== L ||
  t[181] !== _ ||
  t[182] !== R ||
  t[183] !== dr ||
  t[184] !== ye ||
  t[185] !== w ||
  t[186] !== vi
    ? ((yi = () => {
        if (!lt.current || !ye || Q != null) return;
        if (w != null || L === `too-large` || L === `too-complex`) {
          ((lt.current = !1), dr());
          return;
        }
        let e = N.current,
          t = e?.getItem(_);
        if (e == null || t?.type !== `diff`) return;
        let n = R()?.getEditState();
        if (t.edit && n?.type !== `file-diff`) return;
        let r = (n?.type === `file-diff` ? n.diffSession.hunks : t.fileDiff.hunks).flatMap(Vr).find(Br);
        ((lt.current = !1), r != null && vi(r), dr());
      }),
      (t[179] = Q),
      (t[180] = L),
      (t[181] = _),
      (t[182] = R),
      (t[183] = dr),
      (t[184] = ye),
      (t[185] = w),
      (t[186] = vi),
      (t[187] = yi))
    : (yi = t[187]);
  let bi = j(yi),
    xi,
    Si;
  (t[188] !== o || t[189] !== bi
    ? ((xi = () => {
        ((lt.current = !!o), bi());
      }),
      (Si = [o, bi]),
      (t[188] = o),
      (t[189] = bi),
      (t[190] = xi),
      (t[191] = Si))
    : ((xi = t[190]), (Si = t[191])),
    (0, X.useLayoutEffect)(xi, Si));
  let Ci;
  t[192] !== dr || t[193] !== Y
    ? ((Ci = () => {
        (Y(), lt.current && ((lt.current = !1), dr()));
      }),
      (t[192] = dr),
      (t[193] = Y),
      (t[194] = Ci))
    : (Ci = t[194]);
  let wi = Ci,
    Ti;
  t[195] !== R || t[196] !== Y
    ? ((Ti = () => {
        (Y(),
          At.current?.shadowRoot?.querySelector(`[data-search-panel] [data-search-close]`)?.click(),
          (It.current = {
            didNavigate: !1,
            state: R()?.getViewState(),
            scrollTop: N.current?.getInstance()?.getScrollTop() ?? null,
          }));
      }),
      (t[195] = R),
      (t[196] = Y),
      (t[197] = Ti))
    : (Ti = t[197]);
  let Ei = j(Ti),
    Di;
  t[198] !== P.file || t[199] !== R || t[200] !== di || t[201] !== $ || t[202] !== F || t[203] !== Y
    ? ((Di = (e, t, n) => {
        if ((Y(), P.file == null)) {
          n && (Nt.current = e);
          return;
        }
        let r = di();
        if (r == null) return;
        let i = hn(e, r);
        (F.dismiss(), R()?.setSelections([]));
        let a = i - 1;
        ((kt.current = { character: 0, line: a, focus: t }), $());
      }),
      (t[198] = P.file),
      (t[199] = R),
      (t[200] = di),
      (t[201] = $),
      (t[202] = F),
      (t[203] = Y),
      (t[204] = Di))
    : (Di = t[204]);
  let Oi = j(Di),
    ki;
  t[205] === Oi
    ? (ki = t[206])
    : ((ki = (e) => {
        ((It.current = null), Oi(e, !0, !0));
      }),
      (t[205] = Oi),
      (t[206] = ki));
  let Ai = j(ki),
    ji;
  t[207] !== R || t[208] !== Oi
    ? ((ji = (e) => {
        let t = It.current,
          n = R();
        (t != null &&
          (t.state == null &&
            n != null &&
            ((t.scrollTop = N.current?.getInstance()?.getScrollTop() ?? null),
            (t.state = n.getViewState()),
            t.state.selections ??
              (t.state.selections = [
                { direction: 0, end: { character: 0, line: 0 }, start: { character: 0, line: 0 } },
              ])),
          (t.didNavigate = !0)),
          Oi(e, !1, !1));
      }),
      (t[207] = R),
      (t[208] = Oi),
      (t[209] = ji))
    : (ji = t[209]);
  let Mi = j(ji),
    Ni;
  t[210] !== R || t[211] !== q || t[212] !== F || t[213] !== z
    ? ((Ni = () => {
        Nt.current = null;
        let e = It.current;
        if (((It.current = null), e == null || !e.didNavigate)) return;
        ((kt.current = null), F.dismiss());
        let t = R(),
          n = t?.getViewState().view;
        (t == null || n == null
          ? t?.setSelections([])
          : t.setViewState({
              selections: e.state?.selections,
              view: { scrollLeft: e.state?.view?.scrollLeft ?? n.scrollLeft },
            }),
          z(),
          e.scrollTop != null && q(e.scrollTop));
      }),
      (t[210] = R),
      (t[211] = q),
      (t[212] = F),
      (t[213] = z),
      (t[214] = Ni))
    : (Ni = t[214]);
  let Pi = j(Ni),
    Fi,
    Ii;
  (t[215] !== P.file || t[216] !== P.isReadOnly || t[217] !== Oi
    ? ((Fi = () => {
        let e = Nt.current;
        P.file != null &&
          e != null &&
          ((Nt.current = null), !P.isReadOnly && ((Pt.current = !0), Oi(e, !0, !0)));
      }),
      (Ii = [P.file, P.isReadOnly, Oi]),
      (t[215] = P.file),
      (t[216] = P.isReadOnly),
      (t[217] = Oi),
      (t[218] = Fi),
      (t[219] = Ii))
    : ((Fi = t[218]), (Ii = t[219])),
    (0, X.useEffect)(Fi, Ii));
  let Li;
  t[220] !== Q ||
  t[221] !== P.isReadOnly ||
  t[222] !== P.isSelectionEditPending ||
  t[223] !== R ||
  t[224] !== F
    ? ((Li = () => {
        let e = R();
        e != null && !P.isReadOnly && Q == null && F.syncSelectionEditMarker(e, P.isSelectionEditPending);
      }),
      (t[220] = Q),
      (t[221] = P.isReadOnly),
      (t[222] = P.isSelectionEditPending),
      (t[223] = R),
      (t[224] = F),
      (t[225] = Li))
    : (Li = t[225]);
  let Ri;
  (t[226] !== Q ||
  t[227] !== P.file ||
  t[228] !== P.isReadOnly ||
  t[229] !== P.isSelectionEditPending ||
  t[230] !== R ||
  t[231] !== F
    ? ((Ri = [Q, R, P.file, P.isReadOnly, P.isSelectionEditPending, F]),
      (t[226] = Q),
      (t[227] = P.file),
      (t[228] = P.isReadOnly),
      (t[229] = P.isSelectionEditPending),
      (t[230] = R),
      (t[231] = F),
      (t[232] = Ri))
    : (Ri = t[232]),
    (0, X.useEffect)(Li, Ri));
  let zi, Bi;
  (t[233] !== n ||
  t[234] !== P.file ||
  t[235] !== P.isReadOnly ||
  t[236] !== _ ||
  t[237] !== R ||
  t[238] !== K ||
  t[239] !== w ||
  t[240] !== $ ||
  t[241] !== F ||
  t[242] !== Y
    ? ((zi = () => {
        if (
          (w == null && !Pt.current) ||
          (Pt.current || (kt.current = null), w !== Et.current && ((at.current = !0), Y()), P.file == null)
        )
          return;
        if (Pt.current) {
          ((Pt.current = !1), Y());
          return;
        }
        if (w == null || (pt.current != null && !at.current)) return;
        if (P.isReadOnly) {
          let e = N.current;
          if (e == null) return;
          (e.scrollTo({ align: `start`, behavior: `instant`, id: _, lineNumber: w, type: `line` }), K(w));
          return;
        }
        let e = P.file.contents.split(`
`),
          t = Math.min(Math.max(w - 1, 0), e.length - 1),
          r = Math.min(Math.max((n ?? 1) - 1, 0), e[t]?.length ?? 0),
          i = requestAnimationFrame(() => {
            ((kt.current = { character: r, line: t, focus: !1, handledLine: w }),
              F.dismiss(),
              R()?.setSelections([]),
              $());
          });
        return () => cancelAnimationFrame(i);
      }),
      (Bi = [n, R, P.file, P.isReadOnly, _, K, w, $, F, Y]),
      (t[233] = n),
      (t[234] = P.file),
      (t[235] = P.isReadOnly),
      (t[236] = _),
      (t[237] = R),
      (t[238] = K),
      (t[239] = w),
      (t[240] = $),
      (t[241] = F),
      (t[242] = Y),
      (t[243] = zi),
      (t[244] = Bi))
    : ((zi = t[243]), (Bi = t[244])),
    (0, X.useEffect)(zi, Bi));
  let Vi, Hi;
  (t[245] !== _ || t[246] !== v
    ? ((Vi = (e) => {
        e.hostId === v && e.path === _ && Rt.current?.syncExternalChange();
      }),
      (Hi = [_, v]),
      (t[245] = _),
      (t[246] = v),
      (t[247] = Vi),
      (t[248] = Hi))
    : ((Vi = t[247]), (Hi = t[248])),
    re(`open-file-changed`, Vi, Hi));
  let Ui;
  t[249] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ui = (e) => {
        let t = nt.current;
        t != null && e.scrollTo(t.scrollLeft, N.current?.getInstance()?.getScrollTop() ?? 0);
      }),
      (t[249] = Ui))
    : (Ui = t[249]);
  let Wi = j(Ui),
    Gi;
  t[250] !== P.fileRevision ||
  t[251] !== P.selectionReview ||
  t[252] !== R ||
  t[253] !== q ||
  t[254] !== F ||
  t[255] !== xn
    ? ((Gi = (e) => {
        let t = e === `edit` ? null : nt.current,
          n =
            P.selectionReview == null
              ? st.current?.querySelector(`[data-inline-file-diff-review-viewport]`)
              : null,
          r = n?.scrollLeft ?? t?.scrollLeft ?? 0,
          i = n?.scrollTop ?? N.current?.getInstance()?.getScrollTop() ?? 0;
        t != null && (t.scrollTo({ left: r }), q(i));
        let a = Rt.current;
        if (P.selectionReview != null) {
          ((Ot.current = t == null ? null : { fileRevision: P.fileRevision, scrollLeft: r, scrollTop: i }),
            (ut.current = null));
          let n = (0, Xr.flushSync)(() => a?.resolveSelectionEdit(e)),
            o = R();
          (o == null || !F.resolveSelectionEdit(o, e, n ?? null)) && xn();
        } else {
          let n = a?.resolveExternalChange(e) ?? !1;
          ((Ot.current =
            t == null || !n ? null : { fileRevision: P.fileRevision + 1, scrollLeft: r, scrollTop: i }),
            (ut.current = e === `edit` ? P.fileRevision + +!!n : null));
        }
      }),
      (t[250] = P.fileRevision),
      (t[251] = P.selectionReview),
      (t[252] = R),
      (t[253] = q),
      (t[254] = F),
      (t[255] = xn),
      (t[256] = Gi))
    : (Gi = t[256]);
  let Ki = Gi,
    qi;
  t[257] !== We || t[258] !== qe || t[259] !== Ke
    ? ((qi = We === `light` ? He(Ke, `light`) : He(qe, `dark`)),
      (t[257] = We),
      (t[258] = qe),
      (t[259] = Ke),
      (t[260] = qi))
    : (qi = t[260]);
  let Ji = qi,
    Yi;
  t[261] !== I || t[262] !== P.fileRevision
    ? ((Yi = (e) => {
        e != null &&
          I.restore(e) &&
          Ht({ canRedo: e.canRedo, canUndo: e.canUndo, fileRevision: P.fileRevision });
      }),
      (t[261] = I),
      (t[262] = P.fileRevision),
      (t[263] = Yi))
    : (Yi = t[263]);
  let Xi = j(Yi),
    Zi;
  t[264] !== G ||
  t[265] !== P.fileRevision ||
  t[266] !== P.isSelectionEditPending ||
  t[267] !== R ||
  t[268] !== $ ||
  t[269] !== bi ||
  t[270] !== F ||
  t[271] !== z
    ? ((Zi = () => {
        ($(), bi(), G.schedule(), z());
        let e = R();
        e != null &&
          (F.syncSelectionEditMarker(e, P.isSelectionEditPending),
          ut.current === P.fileRevision && ((ut.current = null), e.focus()));
      }),
      (t[264] = G),
      (t[265] = P.fileRevision),
      (t[266] = P.isSelectionEditPending),
      (t[267] = R),
      (t[268] = $),
      (t[269] = bi),
      (t[270] = F),
      (t[271] = z),
      (t[272] = Zi))
    : (Zi = t[272]);
  let Qi = j(Zi),
    $i;
  t[273] !== G ||
  t[274] !== Q ||
  t[275] !== n ||
  t[276] !== P.fileRevision ||
  t[277] !== P.isReadOnly ||
  t[278] !== R ||
  t[279] !== w ||
  t[280] !== Xi ||
  t[281] !== J ||
  t[282] !== $ ||
  t[283] !== bi ||
  t[284] !== q ||
  t[285] !== z
    ? (($i = (e, t, r) => {
        if ((G.setFileRoot(r === `unmount` ? null : e), r === `unmount`)) {
          At.current === e && (At.current = null);
          return;
        }
        ((At.current = e), Xi(R()), z(), P.isReadOnly && w != null && n != null && Lt(e, w, n));
        let i = nt.current;
        if (!(i != null && !_t.current && pt.current != null && (J(), !_t.current))) {
          if (Q == null) {
            let e = Ot.current,
              t = e?.fileRevision === P.fileRevision && i != null;
            t && (i.scrollTo({ left: e.scrollLeft }), q(e.scrollTop), (Ot.current = null));
            let n = ut.current === P.fileRevision && R() != null;
            if ((n && ((ut.current = null), R()?.focus()), t || n)) return;
          }
          ($(), bi());
        }
      }),
      (t[273] = G),
      (t[274] = Q),
      (t[275] = n),
      (t[276] = P.fileRevision),
      (t[277] = P.isReadOnly),
      (t[278] = R),
      (t[279] = w),
      (t[280] = Xi),
      (t[281] = J),
      (t[282] = $),
      (t[283] = bi),
      (t[284] = q),
      (t[285] = z),
      (t[286] = $i))
    : ($i = t[286]);
  let ea = j($i),
    ta = Ji.name,
    na;
  t[287] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((na = qt({
        includeDiffHeader: !1,
        includeSimpleLineSeparators: !1,
        rootSelector: `:is([data-file], [data-diff])`,
        surface: `var(--color-surface)`,
      })),
      (t[287] = na))
    : (na = t[287]);
  let ra = `${na}
      :is([data-file], [data-diff]) {
        /* Keep offsetTop-positioned editor overlays aligned with code rows. */
        --diffs-line-height: round(
          nearest,
          calc(var(--diffs-font-size, 12px) * ${Qr}),
          1px
        );
        line-height: var(--diffs-line-height);
        --diffs-editor-line-highlight-bg: var(
          --color-codex-editor-line-highlight
        );
        --diffs-editor-line-number-active-bg: var(
          --diffs-editor-line-highlight-bg
        );
        --diffs-editor-line-highlight-border: transparent;
      }
      [data-line][data-editor-active-line] {
        --diffs-line-bg: var(--diffs-editor-line-highlight-bg);
      }
      [data-selection-range] {
        opacity: 0.5;
      }
      [data-content] > [data-line] > [data-pierre-editor-inline-blame]::after {
        content: attr(data-pierre-editor-inline-blame);
        color: var(--color-text-tertiary);
        margin-inline-start: var(--padding-row-x);
        pointer-events: none;
        user-select: none;
        white-space: nowrap;
      }
      [data-search] {
        min-width: 0;
      }
      
      [data-marker-range][data-marker-hint] {
        z-index: -10 !important;
        border-radius: 2px;
        background-color: color-mix(
          in srgb,
          var(--color-chart-purple) 32%,
          transparent
        ) !important;
        mask-image: none !important;
      }
      [data-selection-action-popover] {
        display: none !important;
      }
    `,
    ia;
  t[288] !== We || t[289] !== Ji.name || t[290] !== ra
    ? ((ia = { disableFileHeader: !0, overflow: `wrap`, theme: ta, themeType: We, unsafeCSS: ra }),
      (t[288] = We),
      (t[289] = Ji.name),
      (t[290] = ra),
      (t[291] = ia))
    : (ia = t[291]);
  let aa = ia,
    oa = k ?? h,
    sa;
  t[292] !== _ || t[293] !== oa || t[294] !== Me
    ? ((sa = Ct({ cwd: oa, path: _, workspaceRoots: Me })),
      (t[292] = _),
      (t[293] = oa),
      (t[294] = Me),
      (t[295] = sa))
    : (sa = t[295]);
  let ca = sa,
    la;
  t[296] !== h || t[297] !== _ || t[298] !== v || t[299] !== w || t[300] !== A
    ? ((la = () => St(A, { cwd: h == null ? null : Se(h), hostId: v, line: ct.current ?? w, path: _ })),
      (t[296] = h),
      (t[297] = _),
      (t[298] = v),
      (t[299] = w),
      (t[300] = A),
      (t[301] = la))
    : (la = t[301]);
  let ua = la,
    da;
  if (P.hasLoadError) {
    let e;
    (t[302] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`div`, {
          className: `flex h-full items-center justify-center text-sm text-codex-description`,
          children: (0, Z.jsx)(l, {
            id: `pierreFileEditor.loadError`,
            defaultMessage: `Could not open file`,
            description: `Message shown when the Pierre file editor cannot open a file`,
          }),
        })),
        (t[302] = e))
      : (e = t[302]),
      (da = e));
  } else if (H == null) {
    let e;
    (t[303] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`div`, {
          className: `flex h-full items-center justify-center`,
          children: (0, Z.jsx)(Ce, {}),
        })),
        (t[303] = e))
      : (e = t[303]),
      (da = e));
  } else {
    let e = ye && Q == null,
      n = H.file.contents,
      r;
    t[304] === _ ? (r = t[305]) : ((r = vt(_)), (t[304] = _), (t[305] = r));
    let i = ca ?? h ?? ``,
      a;
    t[306] !== _ || t[307] !== i ? ((a = ne(i, _)), (t[306] = _), (t[307] = i), (t[308] = a)) : (a = t[308]);
    let o;
    t[309] !== H.file.contents || t[310] !== v || t[311] !== ca || t[312] !== r || t[313] !== a
      ? ((o = { contents: n, hostId: v, languageId: r, path: a, workspaceRoot: ca }),
        (t[309] = H.file.contents),
        (t[310] = v),
        (t[311] = ca),
        (t[312] = r),
        (t[313] = a),
        (t[314] = o))
      : (o = t[314]);
    let s;
    t[315] !== Q ||
    t[316] !== Ar ||
    t[317] !== or ||
    t[318] !== !1 ||
    t[319] !== I.isSwitching ||
    t[320] !== De ||
    t[321] !== Ae ||
    t[322] !== $e ||
    t[323] !== P.file?.contents ||
    t[324] !== P.isReadOnly ||
    t[325] !== P.isSelectionEditPending ||
    t[326] !== aa ||
    t[327] !== R ||
    t[328] !== Qi ||
    t[329] !== jn ||
    t[330] !== ea ||
    t[331] !== ii ||
    t[332] !== yn ||
    t[333] !== B ||
    t[334] !== Xi ||
    t[335] !== _e ||
    t[336] !== Ve ||
    t[337] !== Oe
      ? ((s = (e) =>
          (0, Z.jsx)(Jt, {
            createEditor: zr,
            children: (0, Z.jsx)(`div`, {
              ref: Q == null && !P.isReadOnly ? or : void 0,
              className: `h-full`,
              "aria-busy": P.isSelectionEditPending,
              "data-codex-escape-boundary": void 0,
              "data-pierre-editor-surface": P.isReadOnly ? void 0 : ``,
              onBeforeInputCapture: ii,
              onCompositionEndCapture: Rr,
              onCutCapture: ii,
              onKeyDownCapture: (e) => {
                R();
                let t = e.key.toLowerCase();
                (e.key === `Tab` || ((e.metaKey || e.ctrlKey) && (t === `y` || t === `z`))) && Rr(e);
              },
              onBlurCapture: () => {},
              onPointerDownCapture: () => {},
              onPasteCapture: ii,
              children: (0, Z.jsx)(Fn, {
                ref: Ar,
                className: fe(`h-full overflow-auto pe-4`, Zr),
                containerRef: nt,
                disableWorkerPool: !0,
                editorOptions: {
                  enabledSelectionAction: !0,
                  renderSelectionAction: B,
                  onAttach: (e) => {
                    (Xi(e), Qi());
                  },
                },
                onItemEditChange: (e) => jn(e.file, e.editor.canRedo, e.editor.canUndo),
                onItemEditComplete: (e) => {
                  if (I.isSwitching) return `reject`;
                  let t = `file` in e ? e.file : e.newFile;
                  return t == null ? `reject` : (Rt.current?.completeEdit(t) ?? `reject`);
                },
                onScroll: (e) => {
                  Dt.current = e;
                },
                options: {
                  ...aa,
                  ...e.fileOptions,
                  diffStyle: De === `split` ? `split` : `unified`,
                  expandUnchanged: !0,
                  diffIndicators: Ae === `symbols` ? `classic` : `bars`,
                  lineDiffType: Oe ? `word-alt` : `none`,
                  itemMetrics: { lineHeight: $e, spacing: 0 },
                  layout: { gap: 0, paddingBottom: $r, paddingTop: 0 },
                  onPostRender: ea,
                  useTokenTransformer: !P.isReadOnly,
                },
                renderAnnotation: yn,
              }),
            }),
          })),
        (t[315] = Q),
        (t[316] = Ar),
        (t[317] = or),
        (t[318] = !1),
        (t[319] = I.isSwitching),
        (t[320] = De),
        (t[321] = Ae),
        (t[322] = $e),
        (t[323] = P.file?.contents),
        (t[324] = P.isReadOnly),
        (t[325] = P.isSelectionEditPending),
        (t[326] = aa),
        (t[327] = R),
        (t[328] = Qi),
        (t[329] = jn),
        (t[330] = ea),
        (t[331] = ii),
        (t[332] = yn),
        (t[333] = B),
        (t[334] = Xi),
        (t[335] = _e),
        (t[336] = Ve),
        (t[337] = Oe),
        (t[338] = s))
      : (s = t[338]);
    let c;
    (t[339] !== ua || t[340] !== se || t[341] !== ce || t[342] !== e || t[343] !== o || t[344] !== s
      ? ((c = (0, Z.jsx)(vn, {
          getFallbackContextMenuItems: ua,
          isActive: e,
          languageFile: o,
          onOpenLocation: se,
          panelId: ce,
          withContextMenu: !0,
          children: s,
        })),
        (t[339] = ua),
        (t[340] = se),
        (t[341] = ce),
        (t[342] = e),
        (t[343] = o),
        (t[344] = s),
        (t[345] = c))
      : (c = t[345]),
      (da = c));
  }
  let fa;
  t[346] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fa = (e) => {
        Rt.current?.updateContent(e);
      }),
      (t[346] = fa))
    : (fa = t[346]);
  let pa = j(fa),
    ma;
  t[347] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ma = () => Rt.current?.saveUntilClean() ?? Promise.resolve(!1)), (t[347] = ma))
    : (ma = t[347]);
  let ha = j(ma),
    ga;
  t[348] !== V || t[349] !== P.isReadOnly || t[350] !== d || t[351] !== ha || t[352] !== pa
    ? ((ga = V == null || P.isReadOnly ? null : d?.({ content: V, onChange: pa, onSave: ha })),
      (t[348] = V),
      (t[349] = P.isReadOnly),
      (t[350] = d),
      (t[351] = ha),
      (t[352] = pa),
      (t[353] = ga))
    : (ga = t[353]);
  let _a = ga,
    va;
  t[354] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((va = (e) => {
        It.current != null &&
          e.relatedTarget instanceof HTMLInputElement &&
          e.relatedTarget === Ft.current &&
          e.nativeEvent.composedPath().some(qr) &&
          e.relatedTarget.focus({ preventScroll: !0 });
      }),
      (t[354] = va))
    : (va = t[354]);
  let ya = de == null ? void 0 : Dr,
    ba;
  t[355] !== Q ||
  t[356] !== Tn ||
  t[357] !== L ||
  t[358] !== _a ||
  t[359] !== P.isReadOnly ||
  t[360] !== On ||
  t[361] !== ve ||
  t[362] !== vi
    ? ((ba =
        ve != null && L === `ready` && !P.isReadOnly && Q == null && _a == null
          ? (0, Xr.createPortal)(
              (0, Z.jsx)(Zn, {
                ...Tn,
                onNavigate: (e) => {
                  let t = On()?.[e];
                  t != null && vi(t);
                },
              }),
              ve,
            )
          : null),
      (t[355] = Q),
      (t[356] = Tn),
      (t[357] = L),
      (t[358] = _a),
      (t[359] = P.isReadOnly),
      (t[360] = On),
      (t[361] = ve),
      (t[362] = vi),
      (t[363] = ba))
    : (ba = t[363]);
  let xa;
  t[364] === P.isReadOnly
    ? (xa = t[365])
    : ((xa = P.isReadOnly
        ? (0, Z.jsx)(`div`, {
            className: `shrink-0 px-4 pt-3`,
            children: (0, Z.jsx)(`div`, {
              className: `flex items-center rounded-lg border border-default px-3 py-2 text-sm text-secondary`,
              children: (0, Z.jsx)(l, {
                id: `textFileEditor.largeFileReadOnly`,
                defaultMessage: `Large file opened read-only`,
                description: `Banner shown when a text file is too large for in-place editing`,
              }),
            }),
          })
        : null),
      (t[364] = P.isReadOnly),
      (t[365] = xa));
  let Sa;
  t[366] === L
    ? (Sa = t[367])
    : ((Sa =
        L === `too-large` || L === `too-complex`
          ? (0, Z.jsx)(`div`, {
              className: `shrink-0 px-4 pt-3`,
              children: (0, Z.jsx)(`div`, {
                className: `flex items-center rounded-lg border border-default px-3 py-2 text-sm text-secondary`,
                role: `status`,
                children: (0, Z.jsx)(l, {
                  id: `files.diff.highlightsUnavailable`,
                  defaultMessage: `This comparison is too large to highlight`,
                  description: `The file remains editable but its changes cannot be highlighted within the editor's processing limit`,
                }),
              }),
            })
          : null),
      (t[366] = L),
      (t[367] = Sa));
  let Ca;
  t[368] !== Q ||
  t[369] !== We ||
  t[370] !== Ei ||
  t[371] !== Pi ||
  t[372] !== Ji.name ||
  t[373] !== _a ||
  t[374] !== $e ||
  t[375] !== P.file ||
  t[376] !== P.fileRevision ||
  t[377] !== P.hasLoadError ||
  t[378] !== P.isReadOnly ||
  t[379] !== gi ||
  t[380] !== di ||
  t[381] !== Ai ||
  t[382] !== Mi
    ? ((Ca =
        _a == null && Q == null && !P.hasLoadError && !P.isReadOnly
          ? (0, Z.jsx)(fn, {
              alignWithPaddedPierreFile: !0,
              appearance: `pierre`,
              getKeyboardOwner: pi,
              getLineCount: di,
              inputRef: Ft,
              onCancelPreview: Pi,
              onGoToLine: Ai,
              onOpen: Ei,
              onPreviewLine: Mi,
              pierreThemeKey: `${We}:${Ji.name}:${P.file == null ? `loading` : `loaded`}:${P.fileRevision}:${$e}`,
              restoreFocus: gi,
            })
          : null),
      (t[368] = Q),
      (t[369] = We),
      (t[370] = Ei),
      (t[371] = Pi),
      (t[372] = Ji.name),
      (t[373] = _a),
      (t[374] = $e),
      (t[375] = P.file),
      (t[376] = P.fileRevision),
      (t[377] = P.hasLoadError),
      (t[378] = P.isReadOnly),
      (t[379] = gi),
      (t[380] = di),
      (t[381] = Ai),
      (t[382] = Mi),
      (t[383] = Ca))
    : (Ca = t[383]);
  let wa;
  t[384] === Ca
    ? (wa = t[385])
    : ((wa = (0, Z.jsx)(Z.Fragment, { children: Ca })), (t[384] = Ca), (t[385] = wa));
  let Ta;
  t[386] !== Q ||
  t[387] !== !1 ||
  t[388] !== _a ||
  t[389] !== Vt.canRedo ||
  t[390] !== Vt.canUndo ||
  t[391] !== R ||
  t[392] !== li ||
  t[393] !== A ||
  t[394] !== _e ||
  t[395] !== Ut ||
  t[396] !== Ve
    ? ((Ta =
        _a == null && Q == null
          ? (0, Z.jsx)(Ln, {
              canRedo: li && Vt.canRedo,
              canUndo: li && Vt.canUndo,
              hasSaveError: !1,
              isSaving: !1,
              onRedo: () => R()?.redo(),
              onToggleVim: void 0,
              onUndo: () => R()?.undo(),
              vimMode: Ut,
            })
          : null),
      (t[386] = Q),
      (t[387] = !1),
      (t[388] = _a),
      (t[389] = Vt.canRedo),
      (t[390] = Vt.canUndo),
      (t[391] = R),
      (t[392] = li),
      (t[393] = A),
      (t[394] = _e),
      (t[395] = Ut),
      (t[396] = Ve),
      (t[397] = Ta))
    : (Ta = t[397]);
  let Ea = Q != null && `pointer-events-none opacity-0`,
    Da;
  t[398] === Ea ? (Da = t[399]) : ((Da = fe(`h-full`, Ea)), (t[398] = Ea), (t[399] = Da));
  let Oa = Q != null,
    ka;
  t[400] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ka = (e) => {
        ((ct.current = ln(e.nativeEvent.composedPath())),
          (ct.current == null || window.getSelection()?.toString()) && e.stopPropagation());
      }),
      (t[400] = ka))
    : (ka = t[400]);
  let Aa = _a ?? da,
    ja;
  t[401] !== Da || t[402] !== Oa || t[403] !== Aa
    ? ((ja = (0, Z.jsx)(`div`, { className: Da, inert: Oa, onContextMenuCapture: ka, children: Aa })),
      (t[401] = Da),
      (t[402] = Oa),
      (t[403] = Aa),
      (t[404] = ja))
    : (ja = t[404]);
  let Ma;
  t[405] !== ua || t[406] !== ja
    ? ((Ma = (0, Z.jsx)(Pe, { getItems: ua, children: ja })), (t[405] = ua), (t[406] = ja), (t[407] = Ma))
    : (Ma = t[407]);
  let Na;
  t[408] !== Q || t[409] !== Wi || t[410] !== Ki
    ? ((Na =
        Q == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: `absolute inset-0`,
              children: (0, Z.jsx)(Cn, {
                canEdit: !Q.isReadOnly,
                newFile: Q.newFile,
                oldFile: Q.oldFile,
                onAction: Ki,
                onViewportReady: Wi,
              }),
            })),
      (t[408] = Q),
      (t[409] = Wi),
      (t[410] = Ki),
      (t[411] = Na))
    : (Na = t[411]);
  let Pa;
  t[412] === c
    ? (Pa = t[413])
    : ((Pa =
        c == null
          ? null
          : (0, Z.jsx)(`div`, { className: `absolute top-2 right-4 z-10 flex gap-1`, children: c })),
      (t[412] = c),
      (t[413] = Pa));
  let Fa;
  t[414] !== wa || t[415] !== Ta || t[416] !== Ma || t[417] !== Na || t[418] !== Pa
    ? ((Fa = (0, Z.jsxs)(`div`, {
        className: `relative min-h-0 flex-1 overflow-hidden`,
        children: [wa, Ta, Ma, Na, Pa],
      })),
      (t[414] = wa),
      (t[415] = Ta),
      (t[416] = Ma),
      (t[417] = Na),
      (t[418] = Pa),
      (t[419] = Fa))
    : (Fa = t[419]);
  let Ia;
  return (
    t[420] !== wi || t[421] !== Fa || t[422] !== ya || t[423] !== ba || t[424] !== xa || t[425] !== Sa
      ? ((Ia = (0, Z.jsxs)(`div`, {
          ref: st,
          className: `flex min-h-0 min-w-0 flex-1 flex-col`,
          onFocusCapture: va,
          onKeyDownCapture: wi,
          onPointerDownCapture: wi,
          onScrollEndCapture: ya,
          onWheelCapture: wi,
          children: [ba, xa, Sa, Fa],
        })),
        (t[420] = wi),
        (t[421] = Fa),
        (t[422] = ya),
        (t[423] = ba),
        (t[424] = xa),
        (t[425] = Sa),
        (t[426] = Ia))
      : (Ia = t[426]),
    Ia
  );
}
function zr(e, t, n) {
  return new Sn(e, t, n);
}
function Br(e) {
  return e.type === `change`;
}
function Vr(e) {
  return e.hunkContent;
}
function Hr(e) {
  return e.type === `change`;
}
function Ur(e) {
  return e.hunkContent;
}
function Wr() {
  return new ar();
}
function Gr() {
  return q();
}
function Kr(e) {
  let t;
  return () => (e == null ? null : ((t ??= yn(e)), t));
}
function qr(e) {
  return e instanceof HTMLElement && e.isContentEditable && e.dataset.content != null;
}
var Jr, Yr, X, Xr, Z, Zr, Qr, $r, ei, ti, ni;
function ri() {
  return (ri = e(() => {
    ((Jr = je()),
      xn(),
      In(),
      Kt(),
      O(),
      x(),
      (Yr = t(ye(), 1)),
      Te(),
      (X = ze()),
      (Xr = Le()),
      _e(),
      rn(),
      It(),
      w(),
      he(),
      be(),
      Yt(),
      on(),
      Nt(),
      un(),
      zn(),
      R(),
      Vn(),
      pn(),
      _n(),
      $e(),
      Wn(),
      Ke(),
      pe(),
      Xn(),
      Tt(),
      tr(),
      ir(),
      or(),
      Tr(),
      Ar(),
      ct(),
      Ve(),
      mn(),
      At(),
      gn(),
      We(),
      kt(),
      D(),
      pt(),
      Ir(),
      Ht(),
      qe(),
      jt(),
      f(),
      ce(),
      tn(),
      (Z = Ne()),
      (Zr = `[--diffs-dark:currentColor] [--diffs-light:currentColor] [--diffs-min-number-column-width:1ch] [--diffs-editor-selection-bg:var(--color-background-info-soft)]`),
      (Qr = 1.8),
      ($r = 16),
      (ei = 120),
      (ti = 30),
      (ni = () => {}));
  }))();
}
export {
  zn as S,
  Gn as _,
  jr as a,
  Bn as b,
  pr as c,
  K as d,
  sr as f,
  ur as g,
  cr as h,
  Mr as i,
  yr as l,
  dr as m,
  ri as n,
  xr as o,
  lr as p,
  Ir as r,
  Tr as s,
  Lr as t,
  fr as u,
  Kn as v,
  Ln as x,
  Vn as y,
};
//# sourceMappingURL=pierre-file-editor-7ed702318234.js.map
