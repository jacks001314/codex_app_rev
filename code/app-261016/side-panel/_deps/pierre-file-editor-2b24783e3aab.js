import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $O as r,
  $St as i,
  BAt as a,
  Bst as o,
  DB as s,
  FBt as c,
  FE as l,
  FNt as u,
  Fgt as d,
  GAt as f,
  Igt as p,
  KOt as m,
  LAt as h,
  LNt as g,
  M4 as _,
  MNt as v,
  Mz as y,
  NFt as ee,
  NNt as b,
  Ngt as x,
  OB as te,
  OE as S,
  Oz as C,
  PBt as w,
  PNt as T,
  RAt as E,
  Rrt as D,
  TY as O,
  Tz as ne,
  Uf as re,
  VAt as ie,
  Vrt as ae,
  WAt as oe,
  Wf as se,
  XOt as ce,
  XS as le,
  Y3 as ue,
  Z3 as de,
  ZSt as k,
  cmt as fe,
  dkt as pe,
  e6 as A,
  ek as me,
  gB as j,
  hB as he,
  hit as ge,
  iCt as _e,
  irt as ve,
  j4 as ye,
  jFt as be,
  kH as xe,
  nB as Se,
  nCt as Ce,
  oit as M,
  okt as we,
  qrt as Te,
  rB as Ee,
  rrt as De,
  sct as Oe,
  skt as ke,
  tht as Ae,
  tkt as je,
  vT as Me,
  wB as Ne,
  wz as Pe,
  xB as Fe,
  xut as Ie,
  yT as Le,
  yft as Re,
  zAt as ze,
  zst as Be,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as Ve,
  ATn as He,
  BVr as N,
  Bbt as Ue,
  Byt as We,
  CAn as Ge,
  CMr as Ke,
  Cjr as qe,
  Git as Je,
  Gtr as Ye,
  Iyt as Xe,
  Ktr as Ze,
  L4n as Qe,
  MOr as $e,
  Man as et,
  Mj as tt,
  Nan as nt,
  Nj as P,
  Oar as rt,
  POr as it,
  QHr as at,
  R4n as ot,
  Rqn as st,
  SGr as ct,
  VPn as lt,
  Wbt as ut,
  Wit as dt,
  ZHr as ft,
  g0n as pt,
  g2n as mt,
  gcr as ht,
  hHr as gt,
  hcr as _t,
  j5t as vt,
  jTn as yt,
  jan as bt,
  jj as xt,
  k5t as St,
  kLr as Ct,
  kar as wt,
  lUr as Tt,
  m0n as Et,
  mHr as Dt,
  mQn as Ot,
  nUr as kt,
  o5t as At,
  pHr as jt,
  s5t as Mt,
  wAn as Nt,
  x0n as Pt,
  xGr as Ft,
  xjr as It,
  yMr as Lt,
  zOr as F,
} from "./app-initial-ad16eaadf81f.js";
import { Hy as Rt, Uy as zt, Xc as Bt, _d as Vt, vd as Ht } from "./app-primary-3e00728c2a4c.js";
import { i as Ut, n as I, r as L, t as Wt } from "./text-file-storage-5e6bd81a9c87.js";
import {
  _ as Gt,
  g as Kt,
  h as qt,
  m as Jt,
  n as Yt,
  p as Xt,
  r as R,
} from "./codex-diff-css-38be692bb624.js";
import { i as Zt, r as Qt } from "./file-diff-presentation-eb82cf883deb.js";
import { n as $t, t as en } from "./renderFileChildren-516d08134e55.js";
import { i as tn, n as nn, t as rn } from "./register-pierre-themes-8ff08e47faf4.js";
import { n as an, r as z } from "./artifact-preview-header-5bfab4685b80.js";
import {
  d as on,
  f as sn,
  l as cn,
  n as ln,
  p as un,
  t as dn,
  u as fn,
} from "./use-diff-annotations-a6f2dca78adc.js";
import {
  a as pn,
  i as mn,
  n as hn,
  o as gn,
  r as _n,
  s as vn,
  t as yn,
} from "./review-file-source-breadcrumb-e388ffd5fb4f.js";
import { n as bn, t as xn } from "./feature-provider-e8dc2eb97a78.js";
import { n as B, t as Sn } from "./editor-b9c6e6605cfe.js";
import { n as Cn, t as wn } from "./inline-file-diff-review-aeb8d8a5c4ca.js";
function Tn(e, t) {
  typeof e == `function` ? e(t) : e != null && (e.current = t);
}
function En(e) {
  return {
    instance: void 0,
    items: void 0,
    controlled: e,
    managedOptions: void 0,
    disableFlushSync: !1,
    slotCoordinator: void 0,
  };
}
function Dn(e, t) {
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
      renderHeaderMetadata: ee,
      renderHeaderPrefix: b,
      selectedLines: x,
      style: te,
    } = e,
    S = c !== void 0,
    C = qt(),
    w = (0, U.useContext)(nn),
    T = (0, U.useRef)(En(S)),
    E = _ != null,
    D = m != null,
    O = v != null,
    ne = E || b != null || y != null || ee != null,
    re = ne || D || O,
    ie = g != null,
    ae = h != null,
    oe = Gt((e) => {
      f?.(e);
    }),
    se = x !== void 0,
    ce = Gt((e, t, n) => {
      if (C == null) throw Error(`CodeView: EditContext is not attached`);
      let r = { ...a, ...t };
      return C(e, r, n);
    }),
    le = Gt((e, t) => {
      l?.(e, t);
    }),
    ue = Gt((e, t, n) => u?.(e, t, n) ?? `reject`),
    de = (0, U.useMemo)(
      () =>
        jn({
          options: p,
          hasCustomHeader: E,
          hasGutterRenderer: O,
          hasCodeViewHeader: ie,
          hasCodeViewFooter: ae,
          onSelectedLinesChange: f == null ? void 0 : oe,
          controlledSelection: se,
          getEditStateKey: o,
          createEditor: C == null ? void 0 : ce,
          onItemEditChange: l == null ? void 0 : le,
          onItemEditComplete: u == null ? void 0 : ue,
        }),
      [C, se, ce, le, ue, oe, ae, ie, E, O, o, l, u, f, p],
    ),
    [k] = (0, U.useState)(() => An()),
    [, fe] = (0, U.useState)({}),
    pe = Gt((e) => {
      (T.current.instance != null &&
        (e == null || e !== T.current.instance.getContainerElement()) &&
        (T.current.instance.cleanUp(), k.publish(void 0), (T.current = En(S))),
        e != null &&
          e !== T.current.instance?.getContainerElement() &&
          ((T.current.instance = new jt(de, i ? void 0 : w, !0)), T.current.instance.setup(e)),
        Tn(r, e));
    }),
    A = Gt((e) => {
      T.current.disableFlushSync
        ? k.publish(e)
        : (0, Nn.flushSync)(() => {
            k.publish(e);
          });
    }),
    me = (0, U.useMemo)(() => {
      if (ne || D || O || ie || ae)
        return {
          hasHeaderRenderers: ne,
          hasAnnotationRenderer: D,
          hasGutterRenderer: O,
          onSnapshotChange: A,
        };
    }, [A, D, O, ne, ie, ae]);
  return (
    Pn(() => (d == null ? void 0 : T.current.instance?.subscribeToScroll(d))),
    Pn(() => {
      let { instance: e, controlled: t, items: n, managedOptions: r, slotCoordinator: i } = T.current;
      if (e != null)
        try {
          T.current.disableFlushSync = !0;
          let a = !1;
          if ((Ft(de, r) || ((T.current.managedOptions = de), e.setOptions(de), (a = !0)), t !== S)) {
            console.error(
              `CodeView: cannot switch between controlled and uncontrolled modes. Remount with a new key instead.`,
            );
            return;
          }
          if (S)
            c !== n &&
              (V(n, c)
                ? (T.current.items = c)
                : On(n, c)
                  ? ((T.current.items = c), e.addItems(c.slice(n.length)))
                  : ((T.current.items = c), e.setItems(c), (a = !0)));
          else if (n == null) {
            let t = s ?? [];
            ((T.current.items = t), t.length > 0 && (e.setItems(t), (a = !0)));
          }
          x !== void 0 && e.setSelectedLines(x, { notify: !1 });
          let o = e.setSlotCoordinator(me),
            l = !1;
          (me !== i && ((me == null || i == null) && (l = !0), (T.current.slotCoordinator = me)),
            (a || o) && e.render(!0),
            o && me == null && k.publish(void 0),
            l && fe({}));
        } finally {
          T.current.disableFlushSync = !1;
        }
    }),
    (0, U.useImperativeHandle)(
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
    (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(`div`, { ref: pe, className: n, style: te }),
        (re || ie || ae) &&
          (0, W.jsx)(In, {
            managedContentStore: k,
            renderCustomHeader: _,
            renderHeaderPrefix: b,
            renderHeaderFilenameSuffix: y,
            renderHeaderMetadata: ee,
            renderAnnotation: m,
            renderGutterUtility: v,
            renderCodeViewHeader: g,
            renderCodeViewFooter: h,
          }),
      ],
    })
  );
}
function On(e, t) {
  if (e == null || t.length <= e.length) return !1;
  if (e.length === 0) return !0;
  for (let n = 0; n < e.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function V(e, t) {
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
function An() {
  let e,
    t = new Set();
  return {
    getSnapshot() {
      return e;
    },
    publish(n) {
      if (!gt(e, n)) {
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
function jn({
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
    t && (d.renderCustomHeader = H),
    n && (d.renderGutterUtility = H),
    r && (d.renderCodeViewHeader = H),
    i && (d.renderCodeViewFooter = H),
    d
  );
}
function Mn({
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
    return Zt({
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
    return $t({
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
function H() {}
var U, Nn, W, Pn, Fn, In;
function Ln() {
  return (Ln = e(() => {
    (ct(),
      Dt(),
      Kt(),
      Jt(),
      Qt(),
      en(),
      tn(),
      (U = c()),
      (Nn = u()),
      (W = g()),
      (Pn = typeof window > `u` ? U.useEffect : U.useLayoutEffect),
      (Fn = (0, U.forwardRef)(Dn)),
      (In = (0, U.memo)(function ({
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
        let l = Gt((t) => e.subscribe(t)),
          u = Gt(() => e.getSnapshot()),
          d = (0, U.useSyncExternalStore)(l, u, u),
          f = ``;
        for (let e of d?.items ?? []) f += `${e.id}:${e.version}:${e.type}`;
        let p = (0, U.useMemo)(
            () =>
              d?.items?.map((e) =>
                (0, Nn.createPortal)(
                  Mn({
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
          m = (0, U.useMemo)(
            () => (s != null && d?.header != null ? (0, Nn.createPortal)(s(), d.header) : null),
            [s, d?.header],
          ),
          h = (0, U.useMemo)(
            () => (c != null && d?.footer != null ? (0, Nn.createPortal)(c(), d.footer) : null),
            [c, d?.footer],
          );
        return (0, W.jsxs)(W.Fragment, { children: [p, m, h] });
      })));
  }))();
}
function Rn(e) {
  let t = (0, zn.c)(37),
    {
      canRedo: r,
      canUndo: i,
      hasSaveError: a,
      isSaving: o,
      onRedo: c,
      onToggleVim: l,
      onUndo: u,
      vimMode: d,
    } = e,
    f = we(),
    p;
  t[0] === f
    ? (p = t[1])
    : ((p = f.formatMessage({
        id: `textFileEditor.undo`,
        defaultMessage: `Undo`,
        description: `Tooltip for undoing the latest text editor change`,
      })),
      (t[0] = f),
      (t[1] = p));
  let m = p,
    h;
  t[2] === f
    ? (h = t[3])
    : ((h = f.formatMessage({
        id: `textFileEditor.redo`,
        defaultMessage: `Redo`,
        description: `Tooltip for redoing the latest text editor change`,
      })),
      (t[2] = f),
      (t[3] = h));
  let g = h;
  if (!i && !r && !o && !a && d == null) return null;
  let _;
  t[4] === !1
    ? (_ = t[5])
    : ((_ = v(
        `absolute right-4 bottom-4 z-10 flex items-center gap-px rounded-lg border border-default bg-surface-elevated-secondary/90 p-1 shadow-sm`,
        !1,
      )),
      (t[4] = !1),
      (t[5] = _));
  let y = !i,
    ee;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, G.jsx)(s, { "aria-hidden": !1, asset: ye })), (t[6] = ee))
    : (ee = t[6]);
  let b;
  t[7] !== u || t[8] !== y || t[9] !== m
    ? ((b = (0, G.jsx)(ue, {
        "aria-label": m,
        color: `ghost`,
        disabled: y,
        onClick: u,
        size: `toolbar`,
        uniform: !0,
        children: ee,
      })),
      (t[7] = u),
      (t[8] = y),
      (t[9] = m),
      (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] !== b || t[12] !== m
    ? ((x = (0, G.jsx)(Se, { tooltipContent: m, children: b })), (t[11] = b), (t[12] = m), (t[13] = x))
    : (x = t[13]);
  let te = !r,
    S;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, G.jsx)(s, { className: `-scale-x-100`, "aria-hidden": !1, asset: ye })), (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== c || t[16] !== g || t[17] !== te
    ? ((C = (0, G.jsx)(ue, {
        "aria-label": g,
        color: `ghost`,
        disabled: te,
        onClick: c,
        size: `toolbar`,
        uniform: !0,
        children: S,
      })),
      (t[15] = c),
      (t[16] = g),
      (t[17] = te),
      (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] !== g || t[20] !== C
    ? ((w = (0, G.jsx)(Se, { tooltipContent: g, children: C })), (t[19] = g), (t[20] = C), (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] !== l || t[23] !== d ? ((T = null), (t[22] = l), (t[23] = d), (t[24] = T)) : (T = t[24]);
  let E;
  t[25] === o
    ? (E = t[26])
    : ((E = o
        ? (0, G.jsxs)(`div`, {
            className: `flex items-center gap-1 px-2 text-xs leading-none text-codex-description`,
            children: [
              (0, G.jsx)(n, { className: `icon-2xs` }),
              (0, G.jsx)(je, {
                id: `textFileEditor.saving`,
                defaultMessage: `Saving…`,
                description: `Status shown while the text file editor is saving`,
              }),
            ],
          })
        : null),
      (t[25] = o),
      (t[26] = E));
  let D;
  t[27] !== a || t[28] !== o
    ? ((D =
        !o && a
          ? (0, G.jsxs)(`div`, {
              className: `flex items-center gap-1 px-2 text-xs leading-none text-danger`,
              children: [
                (0, G.jsx)(Fe, {
                  className: `shrink-0`,
                  "aria-hidden": !1,
                  legacyIcon: Rt,
                  asset16: Me,
                  legacyClassName: `icon-2xs`,
                }),
                (0, G.jsx)(je, {
                  id: `textFileEditor.saveFailed`,
                  defaultMessage: `Save failed`,
                  description: `Status shown when the text file editor could not save`,
                }),
              ],
            })
          : null),
      (t[27] = a),
      (t[28] = o),
      (t[29] = D))
    : (D = t[29]);
  let O;
  return (
    t[30] !== w || t[31] !== T || t[32] !== E || t[33] !== D || t[34] !== _ || t[35] !== x
      ? ((O = (0, G.jsxs)(`div`, { className: _, children: [x, w, T, E, D] })),
        (t[30] = w),
        (t[31] = T),
        (t[32] = E),
        (t[33] = D),
        (t[34] = _),
        (t[35] = x),
        (t[36] = O))
      : (O = t[36]),
    O
  );
}
var zn, G;
function Bn() {
  return (Bn = e(() => {
    ((zn = w()), _(), Le(), b(), ce(), de(), te(), A(), Ne(), Ee(), zt(), (G = g()));
  }))();
}
var Vn;
function Hn() {
  return (Hn = e(() => {
    (Ct(), (Vn = Ve(`workspaceFileDiffViewMode`, `unified`)));
  }))();
}
var Un, Wn;
function Gn() {
  return (Gn = e(() => {
    (Oe(),
      o(),
      ht(),
      (Un = _t({
        method: `blame-file`,
        getParams: ({ operationSource: e, path: t, root: n }) => ({
          cwd: fe(n),
          operationSource: e,
          path: t,
        }),
        getOptions: () => ({ staleTime: Be.FIVE_SECONDS }),
      })),
      (Wn = Un.fromTarget$));
  }))();
}
function Kn(e) {
  return {
    lineNumber: e.end.line + (e.end.character === 0 && e.end.line > e.start.line ? 0 : 1),
    startLine: e.start.line + 1,
  };
}
function qn() {
  return (qn = e(() => {}))();
}
var Jn, Yn, Xn;
function Zn() {
  return (Zn = e(() => {
    (ft(),
      (Jn = 512),
      (Yn = 262144),
      (Xn = class {
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
          if (e.length > Yn || t.length > Yn) return null;
          if (this.mappedCurrentContent !== e || this.mappedSavedContent !== t) {
            ((this.mappedCurrentContent = e), (this.mappedSavedContent = t), (this.savedLineRanges = []));
            let n = kt(t, e, { maxEditLength: Jn });
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
function Qn(e) {
  let t = (0, tr.c)(36),
    { count: n, activeIndex: r, previousIndex: i, nextIndex: a, onNavigate: o } = e,
    c = we(),
    u;
  t[0] === c
    ? (u = t[1])
    : ((u = c.formatMessage({
        id: `files.diff.navigateChanges`,
        defaultMessage: `Navigate changes`,
        description: `Accessible label for previous and next change controls in the editable file comparison`,
      })),
      (t[0] = c),
      (t[1] = u));
  let d = i < 0,
    f;
  t[2] === c
    ? (f = t[3])
    : ((f = c.formatMessage({
        id: `files.diff.previousChange`,
        defaultMessage: `Previous change`,
        description: `Navigate to the preceding changed section in the editable file comparison`,
      })),
      (t[2] = c),
      (t[3] = f));
  let p;
  t[4] !== o || t[5] !== i ? ((p = () => o(i)), (t[4] = o), (t[5] = i), (t[6] = p)) : (p = t[6]);
  let h;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, K.jsx)(s, { asset: re })), (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== d || t[9] !== f || t[10] !== p
    ? ((g = (0, K.jsx)(S, {
        uniform: !0,
        disabled: d,
        "aria-label": f,
        onMouseDown: er,
        onClick: p,
        children: h,
      })),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== r || t[13] !== n
    ? ((_ = (0, K.jsx)(`span`, {
        "aria-hidden": !0,
        children:
          r < 0
            ? (0, K.jsx)(m, { value: n })
            : (0, K.jsx)(je, {
                id: `files.diff.compactChangePosition`,
                defaultMessage: `{position}/{count}`,
                description: `Compact position and total count of changed sections in a file, for example 2/15`,
                values: { position: r + 1, count: n },
              }),
      })),
      (t[12] = r),
      (t[13] = n),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] !== r || t[16] !== n
    ? ((v = (0, K.jsx)(`span`, {
        className: `sr-only`,
        children:
          r < 0
            ? (0, K.jsx)(je, {
                id: `files.diff.changeCount`,
                defaultMessage: `{count, plural, one {# change} other {# changes}}`,
                description: `Number of changed sections in the editable file comparison when the caret is outside a change`,
                values: { count: n },
              })
            : (0, K.jsx)(je, {
                id: `files.diff.changePosition`,
                defaultMessage: `{position} of {count}`,
                description: `Position of the changed section containing the caret in the editable file comparison`,
                values: { position: r + 1, count: n },
              }),
      })),
      (t[15] = r),
      (t[16] = n),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== _ || t[19] !== v
    ? ((y = (0, K.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2 text-xs text-secondary tabular-nums select-none`,
        role: `status`,
        "aria-atomic": !0,
        children: [_, v],
      })),
      (t[18] = _),
      (t[19] = v),
      (t[20] = y))
    : (y = t[20]);
  let ee = a < 0,
    b;
  t[21] === c
    ? (b = t[22])
    : ((b = c.formatMessage({
        id: `files.diff.nextChange`,
        defaultMessage: `Next change`,
        description: `Navigate to the next changed section in the editable file comparison`,
      })),
      (t[21] = c),
      (t[22] = b));
  let x;
  t[23] !== a || t[24] !== o ? ((x = () => o(a)), (t[23] = a), (t[24] = o), (t[25] = x)) : (x = t[25]);
  let te;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, K.jsx)(xe, {})), (t[26] = te))
    : (te = t[26]);
  let C;
  t[27] !== ee || t[28] !== b || t[29] !== x
    ? ((C = (0, K.jsx)(S, {
        uniform: !0,
        disabled: ee,
        "aria-label": b,
        onMouseDown: $n,
        onClick: x,
        children: te,
      })),
      (t[27] = ee),
      (t[28] = b),
      (t[29] = x),
      (t[30] = C))
    : (C = t[30]);
  let w;
  return (
    t[31] !== u || t[32] !== C || t[33] !== g || t[34] !== y
      ? ((w = (0, K.jsxs)(l, { label: u, children: [g, y, C] })),
        (t[31] = u),
        (t[32] = C),
        (t[33] = g),
        (t[34] = y),
        (t[35] = w))
      : (w = t[35]),
    w
  );
}
function $n(e) {
  return e.preventDefault();
}
function er(e) {
  return e.preventDefault();
}
var tr, K;
function nr() {
  return (nr = e(() => {
    ((tr = w()), se(), ce(), te(), O(), le(), (K = g()));
  }))();
}
function rr(e, t) {
  if (e.length > ir || t.contents.length > ir) return { status: `too-large` };
  let n = { ...t, contents: e, cacheKey: void 0 },
    r = { ...t, cacheKey: void 0 },
    i = at(t.name, t.name, e, t.contents, void 0, void 0, { timeout: ar });
  if (i == null) return { status: `too-complex` };
  let a = Tt(i, { oldFile: n, newFile: r });
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
var ir, ar;
function or() {
  return (or = e(() => {
    (N(), ft(), (ir = 2097152), (ar = 25));
  }))();
}
var sr;
function cr() {
  return (cr = e(() => {
    (sn(),
      (sr = class {
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
              lineAnnotationsBefore: e.lineAnnotationsBefore?.map(fn),
              lineAnnotationsAfter: e.lineAnnotationsAfter?.map(fn),
            });
            (n.document.history.undoStack.splice(0, n.document.history.undoStack.length, ...t.undo.map(e)),
              n.document.history.redoStack.splice(0, n.document.history.redoStack.length, ...t.redo.map(e)));
          }
          return (e.setViewState(t.view), !0);
        }
      }));
  }))();
}
function lr(e) {
  return { baseContent: e, kind: `ready` };
}
function ur({ document: e, diskContent: t, localContent: n }) {
  return t === e.baseContent
    ? e.kind === `ready`
      ? e
      : lr(e.baseContent)
    : n === t
      ? lr(t)
      : { baseContent: e.baseContent, diskContent: t, kind: `conflict` };
}
function dr(e, t) {
  return e.kind === `ready`
    ? null
    : t === e.baseContent
      ? { newContent: e.diskContent, oldContent: t }
      : { newContent: t, oldContent: e.diskContent };
}
function fr({ action: e, content: t, document: n }) {
  let r = dr(n, t);
  return r == null || n.kind === `ready`
    ? null
    : { content: e === `reject` ? r.oldContent : r.newContent, document: lr(n.diskContent) };
}
var pr;
function mr() {
  return (mr = e(() => {
    pr = 10485760;
  }))();
}
function hr({ content: e, endOffset: t, instruction: n, startOffset: r }) {
  let i = e.slice(r, t),
    a = n.trim();
  return r >= t || a.length === 0 || i.trim().length === 0 || i.length > yr
    ? null
    : { content: e, endOffset: t, instruction: a, selectedText: i, startOffset: r };
}
async function gr({ filePath: e, hostId: t, request: n, signal: r }) {
  let { content: i, endOffset: a, instruction: o, selectedText: s, startOffset: c } = n,
    l = ne(e),
    u = (0, _r.default)(c - (br - s.length) / 2, 0, Math.max(0, i.length - br)),
    f = await dt({
      hostId: t === `durable` ? null : t,
      cwd: t !== `durable` && x(l) ? (d(l) || p(l) ? vr.default.win32 : vr.default.posix).dirname(l) : null,
      instructions: xr,
      input: `File: ${e}\n\nInstruction:\n${o}\n\n<selected_text>\n${s}\n</selected_text>\n\n<document_context>\n${i.slice(u, u + br)}\n</document_context>`,
      preserveOutputWhitespace: !0,
      signal: r,
      threadSource: `inline_edit`,
    }).catch(() => null);
  if (r.aborted || f == null || f === s || f.length > yr) return null;
  let m = `${i.slice(0, c)}${f}${i.slice(a)}`;
  return new Blob([m]).size > 10485760 ? null : { newContent: m, replacementText: f };
}
var _r, vr, yr, br, xr;
function Sr() {
  return (Sr = e(() => {
    ((_r = t(pe(), 1)),
      (vr = t(Re(), 1)),
      Oe(),
      mr(),
      C(),
      Je(),
      (yr = 32768),
      (br = 131072),
      (xr = `Rewrite only the selected text according to the user's instruction. Use the provided document excerpt only as context. Preserve the file's language, style, indentation, and line endings. Return only the replacement text, without Markdown fences or an explanation.`));
  }))();
}
var Cr, wr, Tr, q, Er;
function Dr() {
  return (Dr = e(() => {
    (Oe(),
      Sr(),
      mr(),
      I(),
      (Cr = {
        externalReview: null,
        file: null,
        fileRevision: 0,
        hasLoadError: !1,
        isReadOnly: !1,
        isSelectionEditPending: !1,
        selectionReview: null,
      }),
      (wr = 20971520),
      (Tr = 3e3),
      (q = 550),
      (Er = class {
        options;
        abortController = new AbortController();
        autosaveTimeoutId = null;
        baseMtimeMs = void 0;
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
        state = Cr;
        constructor(e) {
          ((this.options = e), (this.lastDraft = e.initialDraft));
        }
        getSavedContent() {
          return this.savedContent;
        }
        async start() {
          let e = await this.readFile().catch(() => null);
          if (this.isClosing) return;
          let t = this.options.initialDraft,
            n = t?.content ?? e?.content;
          if (n == null) {
            this.failLoad();
            return;
          }
          let r = t == null && e != null ? e.sizeBytes : new Blob([n]).size;
          if (r > 20971520 || (t != null && new Blob([t.savedContent]).size > 20971520)) {
            this.failLoad();
            return;
          }
          ((this.savedContent = t?.savedContent ?? n),
            (this.baseMtimeMs = t == null ? e?.mtimeMs : void 0),
            (this.state = { ...Cr, file: this.createFile(n), isReadOnly: r > pr }),
            e == null ? this.options.onLoadError() : this.applyDiskSnapshot(e),
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
            (this.pendingEditorChange = Ae()),
            (this.pendingEditorChangeTimeoutId = setTimeout(() => {
              (this.clearPendingEditorChange(),
                this.emitState(),
                this.syncPendingExternalChange(),
                this.isClosing || this.scheduleAutosave());
            }, q)));
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
          let i = hr({ content: e, endOffset: t, instruction: n, startOffset: r });
          if (i == null) return `failed`;
          this.cancelSelectionEdit();
          let a = new AbortController();
          ((this.selectionEdit = { abortController: a, kind: `pending` }), this.emitState());
          let o = await gr({
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
          let r = fr({ action: e, content: t, document: n });
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
          if (this.baseMtimeMs === void 0)
            return (await this.syncExternalChange(), this.baseMtimeMs !== void 0 && this.save());
          if ((this.clearAutosaveTimeout(), this.savePromise != null))
            return (await this.savePromise) ? this.save() : !1;
          if (e === t) return (this.emitState(), !0);
          let n = Ut({
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
          return L({
            cloudFileAccess: this.options.cloudFileAccess,
            filePath: this.options.filePath,
            hostId: this.options.hostId,
            maximumSizeBytes: wr,
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
            this.baseMtimeMs !== void 0 &&
            n.kind === `ready` &&
            t === n.baseContent &&
            e.content !== t
          ) {
            (this.cancelSelectionEdit(),
              (this.savedContent = e.content),
              (this.baseMtimeMs = e.mtimeMs),
              (this.reviewDiskSnapshot = null),
              this.replaceFile(e.content),
              (this.state = { ...this.state, isReadOnly: e.sizeBytes > pr }));
            return;
          }
          let r = ur({ document: n, diskContent: e.content, localContent: t });
          ((this.maySaveReadOnlyReviewResolution = !1),
            r.kind === `conflict`
              ? (this.cancelSelectionEdit(), this.options.onExternalConflict(), (this.reviewDiskSnapshot = e))
              : ((this.savedContent = r.baseContent),
                (this.baseMtimeMs = e.mtimeMs),
                (this.reviewDiskSnapshot = null),
                t === e.content && (this.state = { ...this.state, isReadOnly: e.sizeBytes > pr })),
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
            n = e == null || t == null ? null : dr(t, e);
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
            this.baseMtimeMs === void 0 || this.reviewDiskSnapshot != null || e.contents !== t
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
            cacheKey: `${this.options.hostId}:${this.options.filePath}:${e.length}:${Ot(e)}`,
            contents: e,
            lang: this.options.language,
            name: this.options.filePath,
          };
        }
        scheduleAutosave() {
          (this.clearAutosaveTimeout(),
            !(
              !this.hasUnsavedChanges ||
              this.baseMtimeMs === void 0 ||
              this.savedContent == null ||
              this.reviewDiskSnapshot != null ||
              (this.state.isReadOnly && !this.maySaveReadOnlyReviewResolution)
            ) &&
              (this.autosaveTimeoutId = setTimeout(() => {
                ((this.autosaveTimeoutId = null), this.save());
              }, Tr)));
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
              ? this.baseMtimeMs === void 0 ||
                this.reviewDiskSnapshot != null ||
                this.state.file.contents !== this.savedContent
              : this.options.initialDraft != null &&
                this.options.initialDraft.content !== this.options.initialDraft.savedContent
            : !0;
        }
        isContentReadOnly(e, t) {
          return e === t
            ? this.state.isReadOnly
            : e === this.reviewDiskSnapshot?.content
              ? this.reviewDiskSnapshot.sizeBytes > pr
              : new Blob([e]).size > pr;
        }
        getDocument() {
          return this.savedContent == null
            ? null
            : this.reviewDiskSnapshot == null
              ? lr(this.savedContent)
              : {
                  baseContent: this.savedContent,
                  diskContent: this.reviewDiskSnapshot.content,
                  kind: `conflict`,
                };
        }
      }));
  }))();
}
function Or() {
  return new Mr();
}
function kr(e) {
  switch (e) {
    case -1:
      return `backward`;
    case 0:
      return `none`;
    case 1:
      return `forward`;
  }
}
var J, Ar, jr, Mr;
function Nr() {
  return (Nr = e(() => {
    (ze(),
      (J = T()),
      ce(),
      Ht(),
      (Ar = g()),
      (jr = 8),
      (Mr = class {
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
          let c = this.surface?.parentElement;
          if (o.trim().length === 0 || c == null) return (this.removeToolbar(), queueMicrotask(e.close), s);
          let l = () => ({ start: { ...e.selection.start }, end: { ...e.selection.end } }),
            u = this.surface?.ownerDocument.getSelection();
          this.removeToolbar();
          let d = document.createElement(`div`);
          ((d.hidden = this.shiftKeyDown),
            (d.dataset.pierreSelectionActions = ``),
            (d.className = `pointer-events-none absolute z-20 max-w-[calc(100%_-_1rem)]`),
            (d.style.visibility = `hidden`),
            c.append(d));
          let f = (0, J.createRoot)(d);
          ((this.toolbar = {
            closeSelectionAction: e.close,
            domRange: u?.rangeCount ? u.getRangeAt(0).cloneRange() : null,
            onClearEditorSelection: i,
            root: f,
            widget: d,
          }),
            (this.selectionState = `tracking`));
          let p = this.selectionEditResume;
          ((this.selectionEditResume = null),
            f.render(
              (0, Ar.jsx)(ke, {
                value: t,
                children: (0, Ar.jsx)(Vt, {
                  selectedText: o,
                  onAddSelectedText:
                    n == null
                      ? void 0
                      : () => {
                          let t = e.getSelectionText(),
                            r = l();
                          (this.dismiss(), n(t, r));
                        },
                  onCommentSelectedText:
                    r == null
                      ? void 0
                      : () => {
                          let e = l();
                          (this.dismiss(), r(e));
                        },
                  onEditSelectedText: async (n) => {
                    let r = p?.mode === `edit` && this.selectionEdit != null ? this.selectionEdit : null,
                      i = r?.context ?? e,
                      o = r?.range ?? l(),
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
                    let u = a({
                        content: s,
                        endOffset: i.textDocument.offsetAt(o.end),
                        instruction: n,
                        startOffset: i.textDocument.offsetAt(o.start),
                      }),
                      d = this.surface?.ownerDocument.getSelection(),
                      f = this.toolbar?.domRange;
                    d != null && f != null && (d.removeAllRanges(), d.addRange(f));
                    let m = await u;
                    if (this.selectionEdit !== c) return `handled`;
                    switch (m) {
                      case `canceled`:
                        return ((this.selectionEdit = null), this.dismiss(), `handled`);
                      case `created`:
                        return (this.dismiss(), `handled`);
                      case `failed`:
                        return ((this.selectionEdit = null), `retry`);
                    }
                  },
                  resume: p,
                }),
              }),
            ));
          let m = this.getEditorRoot()?.querySelector(`[data-selection-range]`);
          if (m != null) {
            let e = { contextElement: m, getBoundingClientRect: () => this.getSelectionRect(d) };
            this.stopPositioning = oe(
              e,
              d,
              () => {
                this.position(e, d);
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
              { direction: kr(r.context.selection.direction), end: r.range.end, start: r.range.start },
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
            s = Math.max(t.getBoundingClientRect().left + jr, r.getBoundingClientRect().left);
          return new DOMRect(s, a, e.getBoundingClientRect().width, o - a);
        }
        async position(e, t) {
          let n = this.surface;
          if (n == null || e.getBoundingClientRect().height === 0) {
            t.style.visibility = `hidden`;
            return;
          }
          let r = { boundary: n, padding: jr },
            { x: i, y: o, middlewareData: s } = await f(e, t, { middleware: [a(4), h(r), ie(r), E(r)] });
          this.toolbar?.widget === t &&
            Object.assign(t.style, {
              left: `${i}px`,
              top: `${o}px`,
              visibility: s.hide?.referenceHidden ? `hidden` : `visible`,
            });
        }
      }));
  }))();
}
function Pr(e, t) {
  e.logProductEvent(ve, { fileExtension: Ir(t) });
}
function Fr(e, { hostId: t, path: n }) {
  let r = Rr.get(e);
  r ?? ((r = new Map()), Rr.set(e, r));
  let i = `${t}\0${n}`,
    a = r.get(i);
  (a != null && clearTimeout(a),
    r.set(
      i,
      setTimeout(() => {
        (r.delete(i), e.logProductEvent(De, { fileExtension: Ir(n) }));
      }, Y),
    ));
}
function Ir(e) {
  let t = rt(e);
  return t == null ? `none` : Lr.has(t) ? t : `other`;
}
var Y, Lr, Rr;
function zr() {
  return (zr = e(() => {
    (D(),
      wt(),
      (Y = 2e3),
      (Lr = new Set(
        `bash.bat.bazel.bzl.c.c++.c++m.cc.cjs.cmd.cpp.cs.css.csx.cts.go.gql.graphql.h.h++.hh.hpp.htm.html.hxx.ini.java.js.json.json5.jsonc.jsonl.jsx.kt.kts.less.lua.markdown.md.mdx.mjs.mts.ndjson.php.php4.php5.phtml.pl.ps1.psd1.psm1.py.pyi.pyw.r.rb.rs.sass.scss.sh.sql.swift.tex.toml.ts.tsx.txt.vue.webmanifest.xhtml.xml.yaml.yml.zsh`.split(
          `.`,
        ),
      )),
      (Rr = new WeakMap()));
  }))();
}
function Br(e) {
  let t = (0, Zr.c)(25),
    [n, r] = (0, X.useState)(null),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(`div`, { ref: r, className: `contents` })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== e.filePath || t[2] !== e.headerActions || t[3] !== e.hostId
    ? ((a =
        e.headerActions ??
        (0, Z.jsx)(an, { hostId: e.hostId, path: e.filePath, showLabel: !0, variant: `viewer` })),
      (t[1] = e.filePath),
      (t[2] = e.headerActions),
      (t[3] = e.hostId),
      (t[4] = a))
    : (a = t[4]);
  let o;
  t[5] !== e.cwd ||
  t[6] !== e.filePath ||
  t[7] !== e.headerLeadingActions ||
  t[8] !== e.hostId ||
  t[9] !== e.onSelectFile ||
  t[10] !== e.workspaceRoot ||
  t[11] !== a
    ? ((o = (0, Z.jsx)(yn, {
        cwd: e.cwd,
        headerLeadingActions: e.headerLeadingActions,
        hostId: e.hostId,
        onSelectFile: e.onSelectFile,
        path: e.filePath,
        pathActions: i,
        trailingContent: a,
        workspaceRoot: e.workspaceRoot,
      })),
      (t[5] = e.cwd),
      (t[6] = e.filePath),
      (t[7] = e.headerLeadingActions),
      (t[8] = e.hostId),
      (t[9] = e.onSelectFile),
      (t[10] = e.workspaceRoot),
      (t[11] = a),
      (t[12] = o))
    : (o = t[12]);
  let s = o,
    c;
  t[13] !== n || t[14] !== e
    ? ((c = (0, Z.jsx)(
        Vr,
        { ...e, navigationContainer: n },
        JSON.stringify([e.tabId, e.hostId, e.filePath, e.language]),
      )),
      (t[13] = n),
      (t[14] = e),
      (t[15] = c))
    : (c = t[15]);
  let l;
  t[16] !== e.sidePane || t[17] !== c
    ? ((l = (0, Z.jsxs)(`div`, { className: `flex h-full min-h-0 flex-1`, children: [c, e.sidePane] })),
      (t[16] = e.sidePane),
      (t[17] = c),
      (t[18] = l))
    : (l = t[18]);
  let u = l,
    d;
  t[19] !== u || t[20] !== s || t[21] !== e.renderSlots
    ? ((d =
        e.renderSlots == null
          ? (0, Z.jsxs)(Z.Fragment, { children: [s, u] })
          : e.renderSlots({
              headerRows: [{ id: `file-navigation`, height: `content`, content: s }],
              content: u,
            })),
      (t[19] = u),
      (t[20] = s),
      (t[21] = e.renderSlots),
      (t[22] = d))
    : (d = t[22]);
  let f;
  return (
    t[23] === d
      ? (f = t[24])
      : ((f = (0, Z.jsx)(`div`, { className: `flex h-full min-h-0 flex-col`, children: d })),
        (t[23] = d),
        (t[24] = f)),
    f
  );
}
function Vr(e) {
  let t = (0, Zr.c)(428),
    {
      column: a,
      commentProps: o,
      comparisonBase: s,
      revealFirstChange: c,
      onFirstChangeRevealHandled: l,
      contentActions: u,
      renderContent: f,
      onDocumentChange: p,
      reloadCleanExternalChanges: m,
      conversationId: h,
      cwd: g,
      filePath: _,
      hostId: b,
      initialDraft: te,
      initialCommentRange: S,
      initialScrollTop: C,
      isActive: w,
      language: T,
      line: E,
      onAddSelectedTextToChat: D,
      onDiscardChange: O,
      onDraftChange: ne,
      onLoadError: re,
      onLineRevealHandled: ie,
      onOpenLocation: ae,
      panelId: oe,
      onSaveChange: se,
      onSaveError: ce,
      onScrollChange: le,
      onScrollFlushChange: ue,
      onUnsavedChangesChange: de,
      workspaceRoot: k,
      workspaceRoots: pe,
      vim: A,
      navigationContainer: me,
    } = e,
    he = w === void 0 || w,
    ve = O === void 0 ? ai : O,
    ye = ne === void 0 ? ai : ne,
    be = se === void 0 ? ai : se,
    xe = ue === void 0 ? ai : ue,
    Se = de === void 0 ? ai : de,
    M = i($e),
    Ee = _e(Vn),
    De = _e(We),
    Oe = ge(Ie.diffMarkerStyle),
    ke = _e(St),
    Ae = pe ?? ke,
    Me = Ce(Ge, b),
    Ne = qe(xt),
    Fe = _e(tt),
    Le = Ne && Fe,
    Re;
  t[0] !== b || t[1] !== M.value
    ? ((Re = b === `durable` ? it(M.value) : null), (t[0] = b), (t[1] = M.value), (t[2] = Re))
    : (Re = t[2]);
  let ze = Ce(Wt, Re),
    Be = ge(Ie.codeFontSize) === !0,
    Ve = et(),
    He = nt(Ve),
    N = we(),
    Ue = ge(Ie.lightCodeThemeId),
    Je = ge(Ie.darkCodeThemeId),
    Xe = ge(Ie.codeFontSize),
    Ze;
  t[3] === Xe ? (Ze = t[4]) : ((Ze = Math.round(Xe * ti)), (t[3] = Xe), (t[4] = Ze));
  let Qe = Ze,
    P = (0, X.useRef)(null),
    rt = (0, X.useRef)(null),
    at = (0, X.useRef)(!1),
    ct = (0, X.useRef)(null),
    lt = (0, X.useRef)(null),
    dt = (0, X.useRef)(!1),
    ft = (0, X.useRef)(null),
    ht = (0, X.useRef)(C),
    gt = (0, X.useRef)(C == null),
    _t = (0, X.useRef)(null),
    vt = (0, X.useRef)(0),
    bt = (0, X.useRef)(null),
    Ct = (0, X.useRef)(0),
    wt = (0, X.useRef)(E),
    Tt = (0, X.useRef)(C ?? 0),
    Dt = (0, X.useRef)(null),
    Ot = (0, X.useRef)(null),
    kt = (0, X.useRef)(null),
    jt = (0, X.useRef)(te),
    Mt = (0, X.useRef)(null),
    Nt = (0, X.useRef)(!1),
    Ft = (0, X.useRef)(null),
    It = (0, X.useRef)(null),
    Lt = (0, X.useRef)(null),
    [F, Rt] = (0, X.useState)(Cr),
    zt;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = { canRedo: !1, canUndo: !1, fileRevision: Cr.fileRevision }), (t[5] = zt))
    : (zt = t[5]);
  let [Vt, Ht] = (0, X.useState)(zt),
    Ut,
    [I] = (0, X.useState)(Jr),
    [L] = (0, X.useState)(qr),
    Gt = (0, X.useRef)(void 0),
    Kt;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Kt = { base: void 0, status: null }), (t[6] = Kt))
    : (Kt = t[6]);
  let [qt, Jt] = (0, X.useState)(Kt),
    R = qt.base === s ? qt.status : null,
    Zt;
  t[7] === g ? (Zt = t[8]) : ((Zt = g == null ? null : fe(g)), (t[7] = g), (t[8] = Zt));
  let Qt;
  t[9] !== g || t[10] !== _ || t[11] !== k || t[12] !== Ae
    ? ((Qt = k ?? Ye({ cwd: g, path: _, workspaceRoots: Ae })),
      (t[9] = g),
      (t[10] = _),
      (t[11] = k),
      (t[12] = Ae),
      (t[13] = Qt))
    : (Qt = t[13]);
  let $t;
  t[14] !== o || t[15] !== h || t[16] !== _ || t[17] !== Zt || t[18] !== Qt
    ? (($t = { cwd: Zt, diffPath: _, workspaceRoot: Qt, conversationId: h, enableComments: !1, ...o }),
      (t[14] = o),
      (t[15] = h),
      (t[16] = _),
      (t[17] = Zt),
      (t[18] = Qt),
      (t[19] = $t))
    : ($t = t[19]);
  let { annotations: en, annotationKeys: tn, addDraftComment: nn, renderCommentAnnotation: rn } = ln($t),
    an;
  t[20] === en ? (an = t[21]) : ((an = on(en)), (t[20] = en), (t[21] = an));
  let z = an,
    sn = (0, X.useRef)(null),
    dn,
    pn;
  (t[22] !== nn || t[23] !== tn || t[24] !== S
    ? ((dn = () => {
        if (S == null || sn.current === S) return;
        sn.current = S;
        let { lineNumber: e, startLine: t } = Kn(S);
        tn.has(cn(`additions`, e)) || nn({ side: `additions`, lineNumber: e, startLine: t });
      }),
      (pn = [nn, tn, S]),
      (t[22] = nn),
      (t[23] = tn),
      (t[24] = S),
      (t[25] = dn),
      (t[26] = pn))
    : ((dn = t[25]), (pn = t[26])),
    (0, X.useEffect)(dn, pn));
  let mn;
  t[27] === rn
    ? (mn = t[28])
    : ((mn = function (e) {
        return (0, Z.jsx)(`div`, {
          className: `select-text`,
          "data-pierre-editor-annotation": !0,
          children: rn(fn(e)),
        });
      }),
      (t[27] = rn),
      (t[28] = mn));
  let hn = mn,
    gn;
  t[29] !== N || t[30] !== M
    ? ((gn = () => {
        M.get(Te).danger(
          N.formatMessage({
            id: `pierreFileEditor.selectionEditError`,
            defaultMessage: `Could not edit selection`,
            description: `Toast shown when a model could not generate an edit for selected text`,
          }),
          { errorAnalytics: { toastId: `pierreFileEditor.selectionEditError` } },
        );
      }),
      (t[29] = N),
      (t[30] = M),
      (t[31] = gn))
    : (gn = t[31]);
  let yn = gn,
    bn;
  t[32] === _
    ? (bn = t[33])
    : ((bn = () => {
        let e = P.current?.getEditor(_);
        return e?.getEditState() == null ? void 0 : e;
      }),
      (t[32] = _),
      (t[33] = bn));
  let B = j(bn),
    Sn;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Sn = { count: 0, activeIndex: -1, previousIndex: -1, nextIndex: -1 }), (t[34] = Sn))
    : (Sn = t[34]);
  let [Cn, Tn] = (0, X.useState)(Sn),
    En;
  t[35] === B
    ? (En = t[36])
    : ((En = () => {
        let e = B()?.getEditState();
        return e?.type === `file-diff` ? e.diffSession.hunks.flatMap(Kr).filter(Gr) : void 0;
      }),
      (t[35] = B),
      (t[36] = En));
  let Dn = j(En),
    On;
  t[37] !== Dn || t[38] !== B || t[39] !== he
    ? ((On = () => {
        if (!he) return;
        let e = Dn(),
          t = B(),
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
        Tn((e) =>
          e.count === o && e.activeIndex === a && e.previousIndex === s && e.nextIndex === c
            ? e
            : { count: o, activeIndex: a, previousIndex: s, nextIndex: c },
        );
      }),
      (t[37] = Dn),
      (t[38] = B),
      (t[39] = he),
      (t[40] = On))
    : (On = t[40]);
  let V = j(On),
    kn;
  t[41] !== F.fileRevision || t[42] !== V
    ? ((kn = (e, t, n) => {
        (Lt.current?.updateContent(e.contents),
          V(),
          Ht({ canRedo: t, canUndo: n, fileRevision: F.fileRevision }));
      }),
      (t[41] = F.fileRevision),
      (t[42] = V),
      (t[43] = kn))
    : (kn = t[43]);
  let An = j(kn),
    jn;
  t[44] !== nn ||
  t[45] !== tn ||
  t[46] !== o?.enableComments ||
  t[47] !== B ||
  t[48] !== N ||
  t[49] !== D ||
  t[50] !== I ||
  t[51] !== yn
    ? ((jn = (e) =>
        I.render({
          context: e,
          intl: N,
          onAddSelectedTextToChat: D,
          onCommentSelectedRange:
            o?.enableComments === !0
              ? (e) => {
                  let { lineNumber: t, startLine: n } = Kn(e);
                  tn.has(cn(`additions`, t)) ||
                    (B()?.setSelections([]), nn({ side: `additions`, lineNumber: t, startLine: n }));
                }
              : void 0,
          onClearEditorSelection: () => B()?.setSelections([]),
          onEditSelectedText: async (e) => {
            let t = Lt.current;
            if (t == null) return `failed`;
            let n = await t.requestSelectionEdit(e);
            return (n === `failed` && yn(), n);
          },
        })),
      (t[44] = nn),
      (t[45] = tn),
      (t[46] = o?.enableComments),
      (t[47] = B),
      (t[48] = N),
      (t[49] = D),
      (t[50] = I),
      (t[51] = yn),
      (t[52] = jn))
    : (jn = t[52]);
  let Mn = j(jn),
    H = F.file?.contents ?? null,
    U = (0, X.useRef)(F.fileRevision),
    Nn;
  t[53] !== H || t[54] !== F.file || t[55] !== F.isReadOnly || t[56] !== _ || t[57] !== z
    ? ((Nn =
        F.file == null || H == null
          ? null
          : { annotations: z, edit: !F.isReadOnly, file: { ...F.file, contents: H }, id: _, type: `file` }),
      (t[53] = H),
      (t[54] = F.file),
      (t[55] = F.isReadOnly),
      (t[56] = _),
      (t[57] = z),
      (t[58] = Nn))
    : (Nn = t[58]);
  let W = Nn,
    Pn;
  t[59] !== W || t[60] !== s || t[61] !== L || t[62] !== F.fileRevision || t[63] !== _ || t[64] !== z
    ? ((Pn = (e) => {
        let t = e !== void 0 && e,
          n = P.current;
        if (n == null || W == null) return;
        let r = n.getItem(_),
          i = U.current === F.fileRevision,
          a = Gt.current !== s,
          o = W;
        if (t || !i || a || r == null) {
          let e = s == null ? null : rr(s, W.file);
          (Jt({ base: s, status: e?.status ?? null }),
            e?.status === `ready` &&
              (o = { id: _, type: `diff`, edit: W.edit, fileDiff: e.fileDiff, annotations: z.map(fn) }));
        } else
          r?.type === `diff`
            ? (o = { ...r, edit: W.edit, annotations: z.map(fn) })
            : r?.type === `file` && (o = { ...W, file: r.file });
        if (r == null) n.addItems([o]);
        else if (a || r.type !== o.type) {
          (i ? L.capture(n.getEditor(_)) : L.clear(),
            kt.current?.shadowRoot?.activeElement != null && (ft.current = F.fileRevision));
          let e = rt.current;
          (e != null &&
            (Dt.current = {
              fileRevision: F.fileRevision,
              scrollLeft: e.scrollLeft,
              scrollTop: n.getInstance()?.getScrollTop() ?? 0,
            }),
            L.replaceItem(n, o));
        } else n.updateItem({ ...o, version: (r?.version ?? 0) + 1 });
        ((Gt.current = s), (U.current = F.fileRevision));
      }),
      (t[59] = W),
      (t[60] = s),
      (t[61] = L),
      (t[62] = F.fileRevision),
      (t[63] = _),
      (t[64] = z),
      (t[65] = Pn))
    : (Pn = t[65]);
  let In = j(Pn),
    Ln;
  t[66] === In
    ? (Ln = t[67])
    : ((Ln = () => {
        In();
      }),
      (t[66] = In),
      (t[67] = Ln));
  let zn;
  (t[68] !== s || t[69] !== F.fileRevision || t[70] !== F.isReadOnly || t[71] !== z || t[72] !== In
    ? ((zn = [s, F.fileRevision, F.isReadOnly, z, In]),
      (t[68] = s),
      (t[69] = F.fileRevision),
      (t[70] = F.isReadOnly),
      (t[71] = z),
      (t[72] = In),
      (t[73] = zn))
    : (zn = t[73]),
    (0, X.useLayoutEffect)(Ln, zn));
  let G, Bn, Hn, Un, Gn;
  if (
    t[74] !== g ||
    t[75] !== F.externalReview ||
    t[76] !== F.file ||
    t[77] !== F.isReadOnly ||
    t[78] !== F.selectionReview ||
    t[79] !== _ ||
    t[80] !== Le ||
    t[81] !== Me ||
    t[82] !== k
  ) {
    G = g == null && k == null && !x(_) ? null : Pe(g ?? k ?? ``, _, d(g ?? k ?? _) || d(_));
    let e = G == null ? null : Qr.default.posix.dirname(G);
    ((Un = Ce),
      (Gn = Wn),
      (Bn =
        Le &&
        e != null &&
        Me != null &&
        F.file != null &&
        !F.isReadOnly &&
        F.externalReview == null &&
        F.selectionReview == null),
      (Hn = e == null || Me == null ? null : { cwd: fe(e), hostConfig: Me }),
      (t[74] = g),
      (t[75] = F.externalReview),
      (t[76] = F.file),
      (t[77] = F.isReadOnly),
      (t[78] = F.selectionReview),
      (t[79] = _),
      (t[80] = Le),
      (t[81] = Me),
      (t[82] = k),
      (t[83] = G),
      (t[84] = Bn),
      (t[85] = Hn),
      (t[86] = Un),
      (t[87] = Gn));
  } else ((G = t[83]), (Bn = t[84]), (Hn = t[85]), (Un = t[86]), (Gn = t[87]));
  let qn = G ?? _,
    Jn;
  t[88] !== Bn || t[89] !== Hn || t[90] !== qn
    ? ((Jn = { enabled: Bn, lookup: Hn, operationSource: `review_model`, path: qn }),
      (t[88] = Bn),
      (t[89] = Hn),
      (t[90] = qn),
      (t[91] = Jn))
    : (Jn = t[91]);
  let { data: Yn } = Un(Gn, Jn),
    Zn = Le ? Yn : null,
    $n;
  t[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($n = () => Lt.current?.getSavedContent() ?? null), (t[92] = $n))
    : ($n = t[92]);
  let er = j($n),
    tr;
  t[93] !== B || t[94] !== er || t[95] !== N.locale
    ? ((tr = () => new Xn({ getEditor: B, getSavedContent: er, locale: N.locale })),
      (t[93] = B),
      (t[94] = er),
      (t[95] = N.locale),
      (t[96] = tr))
    : (tr = t[96]);
  let [K] = (0, X.useState)(tr),
    nr;
  t[97] !== !1 || t[98] !== A || t[99] !== Be
    ? ((nr = (e) => !1), (t[97] = !1), (t[98] = A), (t[99] = Be), (t[100] = nr))
    : (nr = t[100]);
  let ir = j(nr),
    ar;
  t[101] !== K || t[102] !== B || t[103] !== ir || t[104] !== I || t[105] !== V
    ? ((ar = (e) => {
        let t = I.attach(e),
          n = K.attach(e);
        if (e == null) return;
        let r = ot(e, (e, t) => {
            if (!Xr(e)) return null;
            let n = B(),
              r = n?.getEditState(),
              i = n?.getViewState().selections;
            if (r == null || i == null) return ``;
            let a = i.length - 1;
            for (let e of i)
              if (((a += r.document.offsetAt(e.end) - r.document.offsetAt(e.start)), a > t)) return ``;
            return i.map((e) => r.document.getText(e)).join(`
`);
          }),
          i = new AbortController(),
          a = () => {
            queueMicrotask(() => {
              i.signal.aborted || V();
            });
          };
        (e.ownerDocument.addEventListener(`selectionchange`, a, { signal: i.signal }),
          e.addEventListener(`keyup`, a, { signal: i.signal }),
          e.addEventListener(`pointerup`, a, { signal: i.signal }));
        let o = yt(e, ir);
        return () => {
          (i.abort(), o(), r(), n?.(), t?.());
        };
      }),
      (t[101] = K),
      (t[102] = B),
      (t[103] = ir),
      (t[104] = I),
      (t[105] = V),
      (t[106] = ar))
    : (ar = t[106]);
  let or = j(ar),
    sr,
    cr;
  (t[107] !== K || t[108] !== Zn || t[109] !== N.locale
    ? ((sr = () => {
        (K.setLocale(N.locale), K.setBlameResult(Zn ?? null));
      }),
      (cr = [K, Zn, N.locale]),
      (t[107] = K),
      (t[108] = Zn),
      (t[109] = N.locale),
      (t[110] = sr),
      (t[111] = cr))
    : ((sr = t[110]), (cr = t[111])),
    (0, X.useLayoutEffect)(sr, cr));
  let lr = j(ye),
    ur = j(re),
    dr = j(ie ?? ai),
    fr = j(l ?? ai),
    pr;
  t[112] !== _ || t[113] !== b || t[114] !== M
    ? ((pr = () => {
        Fr(M.get(Ke), { hostId: b, path: _ });
      }),
      (t[112] = _),
      (t[113] = b),
      (t[114] = M),
      (t[115] = pr))
    : (pr = t[115]);
  let mr = j(pr),
    hr;
  t[116] !== _ || t[117] !== M
    ? ((hr = () => {
        Pr(M.get(Ke), _);
      }),
      (t[116] = _),
      (t[117] = M),
      (t[118] = hr))
    : (hr = t[118]);
  let gr = j(hr),
    _r = j(ve),
    vr = j(be),
    yr = j(ce),
    br;
  t[119] !== _ || t[120] !== p
    ? ((br = (e, t, n) => {
        p?.(
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
      (t[119] = _),
      (t[120] = p),
      (t[121] = br))
    : (br = t[121]);
  let xr = j(br),
    Sr = j(le ?? ai),
    wr = j(xe),
    Tr;
  t[122] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tr = (e) => {
        let t = P.current?.getInstance();
        if (t == null) return;
        let n = Math.max(0, t.getScrollHeight() + ni - t.getHeight());
        t.getScrollTop() !== Math.min(Math.max(e, 0), n) &&
          t.scrollTo({ behavior: `instant`, position: e, type: `position` });
      }),
      (t[122] = Tr))
    : (Tr = t[122]);
  let q = j(Tr),
    Dr;
  t[123] !== Sr || t[124] !== le
    ? ((Dr = () => {
        if (le == null) return;
        let e = ct.current?.querySelector(`[data-inline-file-diff-review-viewport]`),
          t =
            !gt.current && ht.current != null
              ? ht.current
              : (e?.scrollTop ?? P.current?.getInstance()?.getScrollTop() ?? Tt.current);
        Sr(t);
      }),
      (t[123] = Sr),
      (t[124] = le),
      (t[125] = Dr))
    : (Dr = t[125]);
  let Or = j(Dr),
    kr;
  t[126] !== F.file || t[127] !== q
    ? ((kr = () => {
        if (gt.current || _t.current != null) return;
        let e = () => {
          _t.current = -1;
          let t = ht.current,
            n = P.current?.getInstance();
          if (t == null || n == null) {
            _t.current = null;
            return;
          }
          (q(t), (vt.current += 1));
          let r = n.getScrollHeight() + ni - n.getHeight();
          bt.current === r ? (Ct.current += 1) : ((bt.current = r), (Ct.current = 0));
          let i = Math.min(t, Math.max(r, 0)),
            a = Math.abs(n.getScrollTop() - i) <= 1,
            o = Ct.current >= ii,
            s = vt.current >= ri;
          if ((F.file != null && a && o) || s) {
            ((gt.current = !0), (_t.current = null));
            return;
          }
          _t.current = requestAnimationFrame(e);
        };
        e();
      }),
      (t[126] = F.file),
      (t[127] = q),
      (t[128] = kr))
    : (kr = t[128]);
  let J = j(kr),
    Ar;
  t[129] !== L || t[130] !== _ || t[131] !== In || t[132] !== J
    ? ((Ar = (e) => {
        (e ?? L.capture(P.current?.getEditor(_)), (P.current = e), e != null && (In(!0), J()));
      }),
      (t[129] = L),
      (t[130] = _),
      (t[131] = In),
      (t[132] = J),
      (t[133] = Ar))
    : (Ar = t[133]);
  let jr = j(Ar),
    Mr;
  t[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mr = () => {
        _t.current != null && (cancelAnimationFrame(_t.current), (_t.current = null));
      }),
      (t[134] = Mr))
    : (Mr = t[134]);
  let Nr = j(Mr),
    Ir;
  t[135] === Nr
    ? (Ir = t[136])
    : ((Ir = () => {
        ((gt.current = !0), Nr());
      }),
      (t[135] = Nr),
      (t[136] = Ir));
  let Y = j(Ir),
    Lr = j(Se),
    Rr;
  t[137] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Rr = (e) => {
        e.nativeEvent.composedPath().some(Xr) && Lt.current?.markPotentiallyDirty();
      }),
      (t[137] = Rr))
    : (Rr = t[137]);
  let zr = Rr,
    Br;
  t[138] !== A || t[139] !== Be
    ? ((Br = (e) => {
        zr(e);
      }),
      (t[138] = A),
      (t[139] = Be),
      (t[140] = Br))
    : (Br = t[140]);
  let Vr = Br,
    oi,
    si;
  (t[141] !== ze ||
  t[142] !== _ ||
  t[143] !== _r ||
  t[144] !== xr ||
  t[145] !== lr ||
  t[146] !== ur ||
  t[147] !== vr ||
  t[148] !== yr ||
  t[149] !== mr ||
  t[150] !== gr ||
  t[151] !== Lr ||
  t[152] !== b ||
  t[153] !== T ||
  t[154] !== m ||
  t[155] !== M ||
  t[156] !== I
    ? ((oi = () => {
        let e = () => t.saveUntilClean(),
          t = new Er({
            reloadCleanExternalChanges: m,
            cloudFileAccess: ze,
            filePath: _,
            hostId: b,
            initialDraft: jt.current ?? null,
            language: T,
            onDraftChange: lr,
            onEdit: mr,
            onExternalConflict: () => I.cancelSelectionEdit(),
            onLoad: gr,
            onLoadError: ur,
            onSaveError: yr,
            onStateChange: (n) => {
              (Rt(n), xr(n, t, e));
            },
            onUnsavedChangesChange: (t) => Lr(t, e),
          });
        ((Lt.current = t), _r(() => t.dispose({ discardUnsavedChanges: !0 })), vr(e));
        let n = () => t.dispose();
        (window.addEventListener(`pagehide`, n), t.start());
        let r;
        if (m && M.value.routeKind === `chatgpt-thread`) {
          let e = M.value.conversationId,
            n = !1,
            i = null;
          r = M.watch((r) => {
            let { get: a } = r,
              o = a(Et, e);
            if (Pt(o)) {
              let t = a(pt, e);
              ((i = n ? (t ?? i) : t), (n = !0));
              return;
            }
            if (!n) return;
            n = !1;
            let s = M.get(mt, e);
            o === `idle` && s?.result === `completed` && s.requestId === i && t.syncExternalChange();
          });
        }
        return () => {
          (r?.(), window.removeEventListener(`pagehide`, n), _r(null), vr(null), n());
        };
      }),
      (si = [m, ze, _, _r, xr, lr, ur, vr, yr, mr, gr, Lr, b, T, M, I]),
      (t[141] = ze),
      (t[142] = _),
      (t[143] = _r),
      (t[144] = xr),
      (t[145] = lr),
      (t[146] = ur),
      (t[147] = vr),
      (t[148] = yr),
      (t[149] = mr),
      (t[150] = gr),
      (t[151] = Lr),
      (t[152] = b),
      (t[153] = T),
      (t[154] = m),
      (t[155] = M),
      (t[156] = I),
      (t[157] = oi),
      (t[158] = si))
    : ((oi = t[157]), (si = t[158])),
    (0, X.useEffect)(oi, si));
  let ci, li;
  (t[159] !== Nr || t[160] !== Or || t[161] !== wr || t[162] !== J
    ? ((ci = () => (
        wr(Or),
        J(),
        () => {
          (Or(), wr(null), Nr());
        }
      )),
      (li = [Nr, Or, wr, J]),
      (t[159] = Nr),
      (t[160] = Or),
      (t[161] = wr),
      (t[162] = J),
      (t[163] = ci),
      (t[164] = li))
    : ((ci = t[163]), (li = t[164])),
    (0, X.useLayoutEffect)(ci, li));
  let Q = F.selectionReview ?? F.externalReview,
    ui = Vt.fileRevision === F.fileRevision,
    di;
  t[165] === H ? (di = t[166]) : ((di = Yr(H)), (t[165] = H), (t[166] = di));
  let fi = di,
    pi;
  t[167] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pi = () => ct.current?.closest(`[role="tabpanel"]`) ?? null), (t[167] = pi))
    : (pi = t[167]);
  let mi = pi,
    hi;
  t[168] !== _ || t[169] !== B || t[170] !== dr || t[171] !== V
    ? ((hi = () => {
        let e = B(),
          t = P.current,
          n = Ot.current;
        e != null &&
          t != null &&
          kt.current != null &&
          n != null &&
          ((Ot.current = null),
          e.setSelections([
            {
              direction: `none`,
              end: { character: n.character, line: n.line },
              start: { character: n.character, line: n.line },
            },
          ]),
          V(),
          t.scrollTo({
            align: `center`,
            behavior: `instant`,
            id: _,
            lineNumber: n.line + 1,
            side: `additions`,
            type: `line`,
          }),
          n.focus && e.focus({ preventScroll: !0 }),
          n.handledLine != null && dr(n.handledLine));
      }),
      (t[168] = _),
      (t[169] = B),
      (t[170] = dr),
      (t[171] = V),
      (t[172] = hi))
    : (hi = t[172]);
  let $ = j(hi),
    gi;
  t[173] === B
    ? (gi = t[174])
    : ((gi = () => {
        B()?.focus({ preventScroll: !0 });
      }),
      (t[173] = B),
      (t[174] = gi));
  let _i = gi,
    vi;
  t[175] !== _ || t[176] !== B || t[177] !== Y || t[178] !== V
    ? ((vi = (e) => {
        (Y(), (Dt.current = null));
        let t = B(),
          n = t?.getEditState();
        if (t != null && n != null) {
          let r = { line: Math.min(e.additionLineIndex, n.document.lineCount - 1), character: 0 };
          t.setSelections([{ start: r, end: r, direction: `none` }]);
        }
        (P.current?.scrollTo({
          type: `line`,
          id: _,
          side: e.additions > 0 ? `additions` : `deletions`,
          lineNumber: (e.additions > 0 ? e.additionLineIndex : e.deletionLineIndex) + 1,
          align: `center`,
          behavior: `instant`,
        }),
          V());
      }),
      (t[175] = _),
      (t[176] = B),
      (t[177] = Y),
      (t[178] = V),
      (t[179] = vi))
    : (vi = t[179]);
  let yi = j(vi),
    bi;
  t[180] !== Q ||
  t[181] !== R ||
  t[182] !== _ ||
  t[183] !== B ||
  t[184] !== fr ||
  t[185] !== he ||
  t[186] !== E ||
  t[187] !== yi
    ? ((bi = () => {
        if (!dt.current || !he || Q != null) return;
        if (E != null || R === `too-large` || R === `too-complex`) {
          ((dt.current = !1), fr());
          return;
        }
        let e = P.current,
          t = e?.getItem(_);
        if (e == null || t?.type !== `diff`) return;
        let n = B()?.getEditState();
        if (t.edit && n?.type !== `file-diff`) return;
        let r = (n?.type === `file-diff` ? n.diffSession.hunks : t.fileDiff.hunks).flatMap(Wr).find(Ur);
        ((dt.current = !1), r != null && yi(r), fr());
      }),
      (t[180] = Q),
      (t[181] = R),
      (t[182] = _),
      (t[183] = B),
      (t[184] = fr),
      (t[185] = he),
      (t[186] = E),
      (t[187] = yi),
      (t[188] = bi))
    : (bi = t[188]);
  let xi = j(bi),
    Si,
    Ci;
  (t[189] !== c || t[190] !== xi
    ? ((Si = () => {
        ((dt.current = !!c), xi());
      }),
      (Ci = [c, xi]),
      (t[189] = c),
      (t[190] = xi),
      (t[191] = Si),
      (t[192] = Ci))
    : ((Si = t[191]), (Ci = t[192])),
    (0, X.useLayoutEffect)(Si, Ci));
  let wi;
  t[193] !== fr || t[194] !== Y
    ? ((wi = () => {
        (Y(), dt.current && ((dt.current = !1), fr()));
      }),
      (t[193] = fr),
      (t[194] = Y),
      (t[195] = wi))
    : (wi = t[195]);
  let Ti = wi,
    Ei;
  t[196] !== B || t[197] !== Y
    ? ((Ei = () => {
        (Y(),
          kt.current?.shadowRoot?.querySelector(`[data-search-panel] [data-search-close]`)?.click(),
          (It.current = {
            didNavigate: !1,
            state: B()?.getViewState(),
            scrollTop: P.current?.getInstance()?.getScrollTop() ?? null,
          }));
      }),
      (t[196] = B),
      (t[197] = Y),
      (t[198] = Ei))
    : (Ei = t[198]);
  let Di = j(Ei),
    Oi;
  t[199] !== F.file || t[200] !== B || t[201] !== fi || t[202] !== $ || t[203] !== I || t[204] !== Y
    ? ((Oi = (e, t, n) => {
        if ((Y(), F.file == null)) {
          n && (Mt.current = e);
          return;
        }
        let r = fi();
        if (r == null) return;
        let i = vn(e, r);
        (I.dismiss(), B()?.setSelections([]));
        let a = i - 1;
        ((Ot.current = { character: 0, line: a, focus: t }), $());
      }),
      (t[199] = F.file),
      (t[200] = B),
      (t[201] = fi),
      (t[202] = $),
      (t[203] = I),
      (t[204] = Y),
      (t[205] = Oi))
    : (Oi = t[205]);
  let ki = j(Oi),
    Ai;
  t[206] === ki
    ? (Ai = t[207])
    : ((Ai = (e) => {
        ((It.current = null), ki(e, !0, !0));
      }),
      (t[206] = ki),
      (t[207] = Ai));
  let ji = j(Ai),
    Mi;
  t[208] !== B || t[209] !== ki
    ? ((Mi = (e) => {
        let t = It.current,
          n = B();
        (t != null &&
          (t.state == null &&
            n != null &&
            ((t.scrollTop = P.current?.getInstance()?.getScrollTop() ?? null),
            (t.state = n.getViewState()),
            t.state.selections ??
              (t.state.selections = [
                { direction: 0, end: { character: 0, line: 0 }, start: { character: 0, line: 0 } },
              ])),
          (t.didNavigate = !0)),
          ki(e, !1, !1));
      }),
      (t[208] = B),
      (t[209] = ki),
      (t[210] = Mi))
    : (Mi = t[210]);
  let Ni = j(Mi),
    Pi;
  t[211] !== B || t[212] !== q || t[213] !== I || t[214] !== V
    ? ((Pi = () => {
        Mt.current = null;
        let e = It.current;
        if (((It.current = null), e == null || !e.didNavigate)) return;
        ((Ot.current = null), I.dismiss());
        let t = B(),
          n = t?.getViewState().view;
        (t == null || n == null
          ? t?.setSelections([])
          : t.setViewState({
              selections: e.state?.selections,
              view: { scrollLeft: e.state?.view?.scrollLeft ?? n.scrollLeft },
            }),
          V(),
          e.scrollTop != null && q(e.scrollTop));
      }),
      (t[211] = B),
      (t[212] = q),
      (t[213] = I),
      (t[214] = V),
      (t[215] = Pi))
    : (Pi = t[215]);
  let Fi = j(Pi),
    Ii,
    Li;
  (t[216] !== F.file || t[217] !== F.isReadOnly || t[218] !== ki
    ? ((Ii = () => {
        let e = Mt.current;
        F.file != null &&
          e != null &&
          ((Mt.current = null), !F.isReadOnly && ((Nt.current = !0), ki(e, !0, !0)));
      }),
      (Li = [F.file, F.isReadOnly, ki]),
      (t[216] = F.file),
      (t[217] = F.isReadOnly),
      (t[218] = ki),
      (t[219] = Ii),
      (t[220] = Li))
    : ((Ii = t[219]), (Li = t[220])),
    (0, X.useEffect)(Ii, Li));
  let Ri;
  t[221] !== Q ||
  t[222] !== F.isReadOnly ||
  t[223] !== F.isSelectionEditPending ||
  t[224] !== B ||
  t[225] !== I
    ? ((Ri = () => {
        let e = B();
        e != null && !F.isReadOnly && Q == null && I.syncSelectionEditMarker(e, F.isSelectionEditPending);
      }),
      (t[221] = Q),
      (t[222] = F.isReadOnly),
      (t[223] = F.isSelectionEditPending),
      (t[224] = B),
      (t[225] = I),
      (t[226] = Ri))
    : (Ri = t[226]);
  let zi;
  (t[227] !== Q ||
  t[228] !== F.file ||
  t[229] !== F.isReadOnly ||
  t[230] !== F.isSelectionEditPending ||
  t[231] !== B ||
  t[232] !== I
    ? ((zi = [Q, B, F.file, F.isReadOnly, F.isSelectionEditPending, I]),
      (t[227] = Q),
      (t[228] = F.file),
      (t[229] = F.isReadOnly),
      (t[230] = F.isSelectionEditPending),
      (t[231] = B),
      (t[232] = I),
      (t[233] = zi))
    : (zi = t[233]),
    (0, X.useEffect)(Ri, zi));
  let Bi, Vi;
  (t[234] !== a ||
  t[235] !== F.file ||
  t[236] !== F.isReadOnly ||
  t[237] !== _ ||
  t[238] !== B ||
  t[239] !== dr ||
  t[240] !== E ||
  t[241] !== $ ||
  t[242] !== I ||
  t[243] !== Y
    ? ((Bi = () => {
        if (
          (E == null && !Nt.current) ||
          (Nt.current || (Ot.current = null), E !== wt.current && ((at.current = !0), Y()), F.file == null)
        )
          return;
        if (Nt.current) {
          ((Nt.current = !1), Y());
          return;
        }
        if (E == null || (ht.current != null && !at.current)) return;
        if (F.isReadOnly) {
          let e = P.current;
          if (e == null) return;
          (e.scrollTo({ align: `start`, behavior: `instant`, id: _, lineNumber: E, type: `line` }), dr(E));
          return;
        }
        let e = F.file.contents.split(`
`),
          t = Math.min(Math.max(E - 1, 0), e.length - 1),
          n = Math.min(Math.max((a ?? 1) - 1, 0), e[t]?.length ?? 0),
          r = requestAnimationFrame(() => {
            ((Ot.current = { character: n, line: t, focus: !1, handledLine: E }),
              I.dismiss(),
              B()?.setSelections([]),
              $());
          });
        return () => cancelAnimationFrame(r);
      }),
      (Vi = [a, B, F.file, F.isReadOnly, _, dr, E, $, I, Y]),
      (t[234] = a),
      (t[235] = F.file),
      (t[236] = F.isReadOnly),
      (t[237] = _),
      (t[238] = B),
      (t[239] = dr),
      (t[240] = E),
      (t[241] = $),
      (t[242] = I),
      (t[243] = Y),
      (t[244] = Bi),
      (t[245] = Vi))
    : ((Bi = t[244]), (Vi = t[245])),
    (0, X.useEffect)(Bi, Vi));
  let Hi, Ui;
  (t[246] !== _ || t[247] !== b
    ? ((Hi = (e) => {
        e.hostId === b && e.path === _ && Lt.current?.syncExternalChange();
      }),
      (Ui = [_, b]),
      (t[246] = _),
      (t[247] = b),
      (t[248] = Hi),
      (t[249] = Ui))
    : ((Hi = t[248]), (Ui = t[249])),
    ee(`open-file-changed`, Hi, Ui));
  let Wi;
  t[250] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Wi = (e) => {
        let t = rt.current;
        t != null && e.scrollTo(t.scrollLeft, P.current?.getInstance()?.getScrollTop() ?? 0);
      }),
      (t[250] = Wi))
    : (Wi = t[250]);
  let Gi = j(Wi),
    Ki;
  t[251] !== F.fileRevision ||
  t[252] !== F.selectionReview ||
  t[253] !== B ||
  t[254] !== q ||
  t[255] !== I ||
  t[256] !== yn
    ? ((Ki = (e) => {
        let t = e === `edit` ? null : rt.current,
          n =
            F.selectionReview == null
              ? ct.current?.querySelector(`[data-inline-file-diff-review-viewport]`)
              : null,
          r = n?.scrollLeft ?? t?.scrollLeft ?? 0,
          i = n?.scrollTop ?? P.current?.getInstance()?.getScrollTop() ?? 0;
        t != null && (t.scrollTo({ left: r }), q(i));
        let a = Lt.current;
        if (F.selectionReview != null) {
          ((Dt.current = t == null ? null : { fileRevision: F.fileRevision, scrollLeft: r, scrollTop: i }),
            (ft.current = null));
          let n = (0, $r.flushSync)(() => a?.resolveSelectionEdit(e)),
            o = B();
          (o == null || !I.resolveSelectionEdit(o, e, n ?? null)) && yn();
        } else {
          let n = a?.resolveExternalChange(e) ?? !1;
          ((Dt.current =
            t == null || !n ? null : { fileRevision: F.fileRevision + 1, scrollLeft: r, scrollTop: i }),
            (ft.current = e === `edit` ? F.fileRevision + +!!n : null));
        }
      }),
      (t[251] = F.fileRevision),
      (t[252] = F.selectionReview),
      (t[253] = B),
      (t[254] = q),
      (t[255] = I),
      (t[256] = yn),
      (t[257] = Ki))
    : (Ki = t[257]);
  let qi = Ki,
    Ji;
  t[258] !== He || t[259] !== Je || t[260] !== Ue
    ? ((Ji = He === `light` ? ut(Ue, `light`) : ut(Je, `dark`)),
      (t[258] = He),
      (t[259] = Je),
      (t[260] = Ue),
      (t[261] = Ji))
    : (Ji = t[261]);
  let Yi = Ji,
    Xi;
  t[262] !== L || t[263] !== F.fileRevision
    ? ((Xi = (e) => {
        e != null &&
          L.restore(e) &&
          Ht({ canRedo: e.canRedo, canUndo: e.canUndo, fileRevision: F.fileRevision });
      }),
      (t[262] = L),
      (t[263] = F.fileRevision),
      (t[264] = Xi))
    : (Xi = t[264]);
  let Zi = j(Xi),
    Qi;
  t[265] !== K ||
  t[266] !== F.fileRevision ||
  t[267] !== F.isSelectionEditPending ||
  t[268] !== B ||
  t[269] !== $ ||
  t[270] !== xi ||
  t[271] !== I ||
  t[272] !== V
    ? ((Qi = () => {
        ($(), xi(), K.schedule(), V());
        let e = B();
        e != null &&
          (I.syncSelectionEditMarker(e, F.isSelectionEditPending),
          ft.current === F.fileRevision && ((ft.current = null), e.focus()));
      }),
      (t[265] = K),
      (t[266] = F.fileRevision),
      (t[267] = F.isSelectionEditPending),
      (t[268] = B),
      (t[269] = $),
      (t[270] = xi),
      (t[271] = I),
      (t[272] = V),
      (t[273] = Qi))
    : (Qi = t[273]);
  let $i = j(Qi),
    ea;
  t[274] !== K ||
  t[275] !== Q ||
  t[276] !== a ||
  t[277] !== F.fileRevision ||
  t[278] !== F.isReadOnly ||
  t[279] !== B ||
  t[280] !== E ||
  t[281] !== Zi ||
  t[282] !== J ||
  t[283] !== $ ||
  t[284] !== xi ||
  t[285] !== q ||
  t[286] !== V
    ? ((ea = (e, t, n) => {
        if ((K.setFileRoot(n === `unmount` ? null : e), n === `unmount`)) {
          kt.current === e && (kt.current = null);
          return;
        }
        ((kt.current = e), Zi(B()), V(), F.isReadOnly && E != null && a != null && Bt(e, E, a));
        let r = rt.current;
        if (!(r != null && !gt.current && ht.current != null && (J(), !gt.current))) {
          if (Q == null) {
            let e = Dt.current,
              t = e?.fileRevision === F.fileRevision && r != null;
            t && (r.scrollTo({ left: e.scrollLeft }), q(e.scrollTop), (Dt.current = null));
            let n = ft.current === F.fileRevision && B() != null;
            if ((n && ((ft.current = null), B()?.focus()), t || n)) return;
          }
          ($(), xi());
        }
      }),
      (t[274] = K),
      (t[275] = Q),
      (t[276] = a),
      (t[277] = F.fileRevision),
      (t[278] = F.isReadOnly),
      (t[279] = B),
      (t[280] = E),
      (t[281] = Zi),
      (t[282] = J),
      (t[283] = $),
      (t[284] = xi),
      (t[285] = q),
      (t[286] = V),
      (t[287] = ea))
    : (ea = t[287]);
  let ta = j(ea),
    na = Yi.name,
    ra;
  t[288] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ra = Yt({
        includeDiffHeader: !1,
        includeSimpleLineSeparators: !1,
        rootSelector: `:is([data-file], [data-diff])`,
        surface: `var(--color-surface)`,
      })),
      (t[288] = ra))
    : (ra = t[288]);
  let ia = `${ra}
      :is([data-file], [data-diff]) {
        /* Keep offsetTop-positioned editor overlays aligned with code rows. */
        --diffs-line-height: round(
          nearest,
          calc(var(--diffs-font-size, 12px) * ${ti}),
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
    aa;
  t[289] !== He || t[290] !== Yi.name || t[291] !== ia
    ? ((aa = { disableFileHeader: !0, overflow: `wrap`, theme: na, themeType: He, unsafeCSS: ia }),
      (t[289] = He),
      (t[290] = Yi.name),
      (t[291] = ia),
      (t[292] = aa))
    : (aa = t[292]);
  let oa = aa,
    sa = k ?? g,
    ca;
  t[293] !== _ || t[294] !== sa || t[295] !== Ae
    ? ((ca = Ye({ cwd: sa, path: _, workspaceRoots: Ae })),
      (t[293] = _),
      (t[294] = sa),
      (t[295] = Ae),
      (t[296] = ca))
    : (ca = t[296]);
  let la = ca,
    ua;
  t[297] !== g || t[298] !== _ || t[299] !== b || t[300] !== E || t[301] !== M
    ? ((ua = () => At(M, { cwd: g == null ? null : fe(g), hostId: b, line: lt.current ?? E, path: _ })),
      (t[297] = g),
      (t[298] = _),
      (t[299] = b),
      (t[300] = E),
      (t[301] = M),
      (t[302] = ua))
    : (ua = t[302]);
  let da = ua,
    fa;
  if (F.hasLoadError) {
    let e;
    (t[303] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`div`, {
          className: `flex h-full items-center justify-center text-sm text-codex-description`,
          children: (0, Z.jsx)(je, {
            id: `pierreFileEditor.loadError`,
            defaultMessage: `Could not open file`,
            description: `Message shown when the Pierre file editor cannot open a file`,
          }),
        })),
        (t[303] = e))
      : (e = t[303]),
      (fa = e));
  } else if (W == null) {
    let e;
    (t[304] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`div`, {
          className: `flex h-full items-center justify-center`,
          children: (0, Z.jsx)(n, {}),
        })),
        (t[304] = e))
      : (e = t[304]),
      (fa = e));
  } else {
    let e = he && Q == null,
      n = W.file.contents,
      r;
    t[305] === _ ? (r = t[306]) : ((r = st(_)), (t[305] = _), (t[306] = r));
    let i = la ?? g ?? ``,
      a;
    t[307] !== _ || t[308] !== i ? ((a = y(i, _)), (t[307] = _), (t[308] = i), (t[309] = a)) : (a = t[309]);
    let o;
    t[310] !== W.file.contents || t[311] !== b || t[312] !== la || t[313] !== r || t[314] !== a
      ? ((o = { contents: n, hostId: b, languageId: r, path: a, workspaceRoot: la }),
        (t[310] = W.file.contents),
        (t[311] = b),
        (t[312] = la),
        (t[313] = r),
        (t[314] = a),
        (t[315] = o))
      : (o = t[315]);
    let s;
    t[316] !== Q ||
    t[317] !== jr ||
    t[318] !== or ||
    t[319] !== !1 ||
    t[320] !== L.isSwitching ||
    t[321] !== Ee ||
    t[322] !== Oe ||
    t[323] !== Qe ||
    t[324] !== F.file?.contents ||
    t[325] !== F.isReadOnly ||
    t[326] !== F.isSelectionEditPending ||
    t[327] !== oa ||
    t[328] !== B ||
    t[329] !== $i ||
    t[330] !== An ||
    t[331] !== ta ||
    t[332] !== Vr ||
    t[333] !== hn ||
    t[334] !== Mn ||
    t[335] !== Zi ||
    t[336] !== A ||
    t[337] !== Be ||
    t[338] !== De
      ? ((s = (e) =>
          (0, Z.jsx)(Xt, {
            createEditor: Hr,
            children: (0, Z.jsx)(`div`, {
              ref: Q == null && !F.isReadOnly ? or : void 0,
              className: `h-full`,
              "aria-busy": F.isSelectionEditPending,
              "data-codex-escape-boundary": void 0,
              "data-pierre-editor-surface": F.isReadOnly ? void 0 : ``,
              onBeforeInputCapture: Vr,
              onCompositionEndCapture: zr,
              onCutCapture: Vr,
              onKeyDownCapture: (e) => {
                B();
                let t = e.key.toLowerCase();
                (e.key === `Tab` || ((e.metaKey || e.ctrlKey) && (t === `y` || t === `z`))) && zr(e);
              },
              onBlurCapture: () => {},
              onPointerDownCapture: () => {},
              onPasteCapture: Vr,
              children: (0, Z.jsx)(Fn, {
                ref: jr,
                className: v(`h-full overflow-auto pe-4`, ei),
                containerRef: rt,
                disableWorkerPool: !0,
                editorOptions: {
                  enabledSelectionAction: !0,
                  renderSelectionAction: Mn,
                  onAttach: (e) => {
                    (Zi(e), $i());
                  },
                },
                onItemEditChange: (e) => An(e.file, e.editor.canRedo, e.editor.canUndo),
                onItemEditComplete: (e) => {
                  if (L.isSwitching) return `reject`;
                  let t = `file` in e ? e.file : e.newFile;
                  return t == null ? `reject` : (Lt.current?.completeEdit(t) ?? `reject`);
                },
                onScroll: (e) => {
                  Tt.current = e;
                },
                options: {
                  ...oa,
                  ...e.fileOptions,
                  diffStyle: Ee === `split` ? `split` : `unified`,
                  expandUnchanged: !0,
                  diffIndicators: Oe === `symbols` ? `classic` : `bars`,
                  lineDiffType: De ? `word-alt` : `none`,
                  itemMetrics: { lineHeight: Qe, spacing: 0 },
                  layout: { gap: 0, paddingBottom: ni, paddingTop: 0 },
                  onPostRender: ta,
                  useTokenTransformer: !F.isReadOnly,
                },
                renderAnnotation: hn,
              }),
            }),
          })),
        (t[316] = Q),
        (t[317] = jr),
        (t[318] = or),
        (t[319] = !1),
        (t[320] = L.isSwitching),
        (t[321] = Ee),
        (t[322] = Oe),
        (t[323] = Qe),
        (t[324] = F.file?.contents),
        (t[325] = F.isReadOnly),
        (t[326] = F.isSelectionEditPending),
        (t[327] = oa),
        (t[328] = B),
        (t[329] = $i),
        (t[330] = An),
        (t[331] = ta),
        (t[332] = Vr),
        (t[333] = hn),
        (t[334] = Mn),
        (t[335] = Zi),
        (t[336] = A),
        (t[337] = Be),
        (t[338] = De),
        (t[339] = s))
      : (s = t[339]);
    let c;
    (t[340] !== da || t[341] !== ae || t[342] !== oe || t[343] !== e || t[344] !== o || t[345] !== s
      ? ((c = (0, Z.jsx)(xn, {
          getFallbackContextMenuItems: da,
          isActive: e,
          languageFile: o,
          onOpenLocation: ae,
          panelId: oe,
          withContextMenu: !0,
          children: s,
        })),
        (t[340] = da),
        (t[341] = ae),
        (t[342] = oe),
        (t[343] = e),
        (t[344] = o),
        (t[345] = s),
        (t[346] = c))
      : (c = t[346]),
      (fa = c));
  }
  let pa;
  t[347] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pa = (e) => {
        Lt.current?.updateContent(e);
      }),
      (t[347] = pa))
    : (pa = t[347]);
  let ma = j(pa),
    ha;
  t[348] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ha = () => Lt.current?.saveUntilClean() ?? Promise.resolve(!1)), (t[348] = ha))
    : (ha = t[348]);
  let ga = j(ha),
    _a;
  t[349] !== H || t[350] !== F.isReadOnly || t[351] !== f || t[352] !== ga || t[353] !== ma
    ? ((_a = H == null || F.isReadOnly ? null : f?.({ content: H, onChange: ma, onSave: ga })),
      (t[349] = H),
      (t[350] = F.isReadOnly),
      (t[351] = f),
      (t[352] = ga),
      (t[353] = ma),
      (t[354] = _a))
    : (_a = t[354]);
  let va = _a,
    ya;
  t[355] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ya = (e) => {
        It.current != null &&
          e.relatedTarget instanceof HTMLInputElement &&
          e.relatedTarget === Ft.current &&
          e.nativeEvent.composedPath().some(Xr) &&
          e.relatedTarget.focus({ preventScroll: !0 });
      }),
      (t[355] = ya))
    : (ya = t[355]);
  let ba = le == null ? void 0 : Or,
    xa;
  t[356] !== Q ||
  t[357] !== Cn ||
  t[358] !== R ||
  t[359] !== va ||
  t[360] !== F.isReadOnly ||
  t[361] !== Dn ||
  t[362] !== me ||
  t[363] !== yi
    ? ((xa =
        me != null && R === `ready` && !F.isReadOnly && Q == null && va == null
          ? (0, $r.createPortal)(
              (0, Z.jsx)(Qn, {
                ...Cn,
                onNavigate: (e) => {
                  let t = Dn()?.[e];
                  t != null && yi(t);
                },
              }),
              me,
            )
          : null),
      (t[356] = Q),
      (t[357] = Cn),
      (t[358] = R),
      (t[359] = va),
      (t[360] = F.isReadOnly),
      (t[361] = Dn),
      (t[362] = me),
      (t[363] = yi),
      (t[364] = xa))
    : (xa = t[364]);
  let Sa;
  t[365] === F.isReadOnly
    ? (Sa = t[366])
    : ((Sa = F.isReadOnly
        ? (0, Z.jsx)(`div`, {
            className: `shrink-0 px-4 pt-3`,
            children: (0, Z.jsx)(`div`, {
              className: `flex items-center rounded-lg border border-default px-3 py-2 text-sm text-secondary`,
              children: (0, Z.jsx)(je, {
                id: `textFileEditor.largeFileReadOnly`,
                defaultMessage: `Large file opened read-only`,
                description: `Banner shown when a text file is too large for in-place editing`,
              }),
            }),
          })
        : null),
      (t[365] = F.isReadOnly),
      (t[366] = Sa));
  let Ca;
  t[367] === R
    ? (Ca = t[368])
    : ((Ca =
        R === `too-large` || R === `too-complex`
          ? (0, Z.jsx)(`div`, {
              className: `shrink-0 px-4 pt-3`,
              children: (0, Z.jsx)(`div`, {
                className: `flex items-center rounded-lg border border-default px-3 py-2 text-sm text-secondary`,
                role: `status`,
                children: (0, Z.jsx)(je, {
                  id: `files.diff.highlightsUnavailable`,
                  defaultMessage: `This comparison is too large to highlight`,
                  description: `The file remains editable but its changes cannot be highlighted within the editor's processing limit`,
                }),
              }),
            })
          : null),
      (t[367] = R),
      (t[368] = Ca));
  let wa;
  t[369] !== Q ||
  t[370] !== He ||
  t[371] !== Di ||
  t[372] !== Fi ||
  t[373] !== Yi.name ||
  t[374] !== va ||
  t[375] !== Qe ||
  t[376] !== F.file ||
  t[377] !== F.fileRevision ||
  t[378] !== F.hasLoadError ||
  t[379] !== F.isReadOnly ||
  t[380] !== _i ||
  t[381] !== fi ||
  t[382] !== ji ||
  t[383] !== Ni
    ? ((wa =
        va == null && Q == null && !F.hasLoadError && !F.isReadOnly
          ? (0, Z.jsx)(_n, {
              alignWithPaddedPierreFile: !0,
              appearance: `pierre`,
              getKeyboardOwner: mi,
              getLineCount: fi,
              inputRef: Ft,
              onCancelPreview: Fi,
              onGoToLine: ji,
              onOpen: Di,
              onPreviewLine: Ni,
              pierreThemeKey: `${He}:${Yi.name}:${F.file == null ? `loading` : `loaded`}:${F.fileRevision}:${Qe}`,
              restoreFocus: _i,
            })
          : null),
      (t[369] = Q),
      (t[370] = He),
      (t[371] = Di),
      (t[372] = Fi),
      (t[373] = Yi.name),
      (t[374] = va),
      (t[375] = Qe),
      (t[376] = F.file),
      (t[377] = F.fileRevision),
      (t[378] = F.hasLoadError),
      (t[379] = F.isReadOnly),
      (t[380] = _i),
      (t[381] = fi),
      (t[382] = ji),
      (t[383] = Ni),
      (t[384] = wa))
    : (wa = t[384]);
  let Ta;
  t[385] === wa
    ? (Ta = t[386])
    : ((Ta = (0, Z.jsx)(Z.Fragment, { children: wa })), (t[385] = wa), (t[386] = Ta));
  let Ea;
  t[387] !== Q ||
  t[388] !== !1 ||
  t[389] !== va ||
  t[390] !== Vt.canRedo ||
  t[391] !== Vt.canUndo ||
  t[392] !== B ||
  t[393] !== ui ||
  t[394] !== M ||
  t[395] !== A ||
  t[396] !== Ut ||
  t[397] !== Be
    ? ((Ea =
        va == null && Q == null
          ? (0, Z.jsx)(Rn, {
              canRedo: ui && Vt.canRedo,
              canUndo: ui && Vt.canUndo,
              hasSaveError: !1,
              isSaving: !1,
              onRedo: () => B()?.redo(),
              onToggleVim: void 0,
              onUndo: () => B()?.undo(),
              vimMode: Ut,
            })
          : null),
      (t[387] = Q),
      (t[388] = !1),
      (t[389] = va),
      (t[390] = Vt.canRedo),
      (t[391] = Vt.canUndo),
      (t[392] = B),
      (t[393] = ui),
      (t[394] = M),
      (t[395] = A),
      (t[396] = Ut),
      (t[397] = Be),
      (t[398] = Ea))
    : (Ea = t[398]);
  let Da = Q != null && `pointer-events-none opacity-0`,
    Oa;
  t[399] === Da ? (Oa = t[400]) : ((Oa = v(`h-full`, Da)), (t[399] = Da), (t[400] = Oa));
  let ka = Q != null,
    Aa;
  t[401] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Aa = (e) => {
        ((lt.current = un(e.nativeEvent.composedPath())),
          (lt.current == null || window.getSelection()?.toString()) && e.stopPropagation());
      }),
      (t[401] = Aa))
    : (Aa = t[401]);
  let ja = va ?? fa,
    Ma;
  t[402] !== Oa || t[403] !== ka || t[404] !== ja
    ? ((Ma = (0, Z.jsx)(`div`, { className: Oa, inert: ka, onContextMenuCapture: Aa, children: ja })),
      (t[402] = Oa),
      (t[403] = ka),
      (t[404] = ja),
      (t[405] = Ma))
    : (Ma = t[405]);
  let Na;
  t[406] !== da || t[407] !== Ma
    ? ((Na = (0, Z.jsx)(r, { getItems: da, children: Ma })), (t[406] = da), (t[407] = Ma), (t[408] = Na))
    : (Na = t[408]);
  let Pa;
  t[409] !== Q || t[410] !== Gi || t[411] !== qi
    ? ((Pa =
        Q == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: `absolute inset-0`,
              children: (0, Z.jsx)(wn, {
                canEdit: !Q.isReadOnly,
                newFile: Q.newFile,
                oldFile: Q.oldFile,
                onAction: qi,
                onViewportReady: Gi,
              }),
            })),
      (t[409] = Q),
      (t[410] = Gi),
      (t[411] = qi),
      (t[412] = Pa))
    : (Pa = t[412]);
  let Fa;
  t[413] === u
    ? (Fa = t[414])
    : ((Fa =
        u == null
          ? null
          : (0, Z.jsx)(`div`, { className: `absolute top-2 right-4 z-10 flex gap-1`, children: u })),
      (t[413] = u),
      (t[414] = Fa));
  let Ia;
  t[415] !== Ta || t[416] !== Ea || t[417] !== Na || t[418] !== Pa || t[419] !== Fa
    ? ((Ia = (0, Z.jsxs)(`div`, {
        className: `relative min-h-0 flex-1 overflow-hidden`,
        children: [Ta, Ea, Na, Pa, Fa],
      })),
      (t[415] = Ta),
      (t[416] = Ea),
      (t[417] = Na),
      (t[418] = Pa),
      (t[419] = Fa),
      (t[420] = Ia))
    : (Ia = t[420]);
  let La;
  return (
    t[421] !== Ti || t[422] !== Ia || t[423] !== ba || t[424] !== xa || t[425] !== Sa || t[426] !== Ca
      ? ((La = (0, Z.jsxs)(`div`, {
          ref: ct,
          className: `flex min-h-0 min-w-0 flex-1 flex-col`,
          onFocusCapture: ya,
          onKeyDownCapture: Ti,
          onPointerDownCapture: Ti,
          onScrollEndCapture: ba,
          onWheelCapture: Ti,
          children: [xa, Sa, Ca, Ia],
        })),
        (t[421] = Ti),
        (t[422] = Ia),
        (t[423] = ba),
        (t[424] = xa),
        (t[425] = Sa),
        (t[426] = Ca),
        (t[427] = La))
      : (La = t[427]),
    La
  );
}
function Hr(e, t, n) {
  return new Sn(e, t, n);
}
function Ur(e) {
  return e.type === `change`;
}
function Wr(e) {
  return e.hunkContent;
}
function Gr(e) {
  return e.type === `change`;
}
function Kr(e) {
  return e.hunkContent;
}
function qr() {
  return new sr();
}
function Jr() {
  return Or();
}
function Yr(e) {
  let t;
  return () => (e == null ? null : ((t ??= pn(e)), t));
}
function Xr(e) {
  return e instanceof HTMLElement && e.isContentEditable && e.dataset.content != null;
}
var Zr, Qr, X, $r, Z, ei, ti, ni, ri, ii, ai;
function oi() {
  return (oi = e(() => {
    ((Zr = w()),
      B(),
      Ln(),
      Jt(),
      b(),
      k(),
      (Qr = t(Re(), 1)),
      Oe(),
      (X = c()),
      ($r = u()),
      ce(),
      z(),
      lt(),
      me(),
      A(),
      ae(),
      R(),
      sn(),
      Xe(),
      dn(),
      Bn(),
      Cn(),
      Qe(),
      Hn(),
      gn(),
      mn(),
      Mt(),
      Gn(),
      He(),
      be(),
      Zn(),
      P(),
      nr(),
      or(),
      cr(),
      Dr(),
      Nr(),
      Lt(),
      vt(),
      bn(),
      Ze(),
      hn(),
      F(),
      Nt(),
      M(),
      It(),
      zr(),
      I(),
      Ue(),
      bt(),
      C(),
      he(),
      rn(),
      (Z = g()),
      (ei = `[--diffs-dark:currentColor] [--diffs-light:currentColor] [--diffs-min-number-column-width:1ch] [--diffs-editor-selection-bg:var(--color-background-info-soft)]`),
      (ti = 1.8),
      (ni = 16),
      (ri = 120),
      (ii = 30),
      (ai = () => {}));
  }))();
}
export {
  Bn as S,
  Kn as _,
  Pr as a,
  Vn as b,
  gr as c,
  pr as d,
  lr as f,
  fr as g,
  ur as h,
  Fr as i,
  Sr as l,
  mr as m,
  oi as n,
  wr as o,
  dr as p,
  zr as r,
  Dr as s,
  Br as t,
  hr as u,
  qn as v,
  Rn as x,
  Hn as y,
};
//# sourceMappingURL=pierre-file-editor-2b24783e3aab.js.map
