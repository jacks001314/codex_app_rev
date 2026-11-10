import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  Hln as r,
  Iun as i,
  Kln as a,
  Lun as o,
  Nun as s,
  Pun as c,
  Rpn as l,
  Uln as u,
  Yln as d,
  dun as f,
  eun as p,
  fun as m,
  hmn as h,
  jun as g,
  kun as _,
  lun as v,
  nun as y,
  pmn as b,
  pun as x,
  qln as S,
  run as C,
  tun as w,
  uun as T,
  zpn as E,
} from "./app-initial-f094ef01c64d.js";
import { a as D, f as O, i as k, s as A } from "./spreadsheet-utils-f093c7495702.js";
import { i as ee, o as j, r as M } from "./address-utils-78b2f3f83431.js";
import {
  J as N,
  Q as te,
  X as P,
  Y as F,
  Z as ne,
  n as re,
  t as I,
} from "./workbook-92b6031c5f2c.js";
import { p as L, u as R } from "./src-3e2a99fe4a1d.js";
import { t as ie, yt as ae } from "./src-c48c04e5744b.js";
import {
  $ as z,
  A as oe,
  C as se,
  D as B,
  E as ce,
  I as V,
  J as le,
  K as H,
  L as ue,
  M as de,
  N as fe,
  O as pe,
  S as me,
  T as he,
  U as ge,
  X as _e,
  _ as ve,
  a as ye,
  b as be,
  c as xe,
  ct as Se,
  d as Ce,
  et as we,
  f as Te,
  g as Ee,
  h as De,
  i as Oe,
  it as ke,
  j as Ae,
  k as je,
  l as Me,
  lt as Ne,
  m as Pe,
  n as Fe,
  o as Ie,
  ot as Le,
  p as Re,
  r as ze,
  rt as Be,
  t as Ve,
  u as He,
  v as Ue,
  w as We,
  x as Ge,
  y as Ke,
} from "./artifact-source-bootstrap-b7ba40702025.js";
import {
  a as qe,
  i as Je,
  n as Ye,
  o as Xe,
  r as Ze,
  t as Qe,
} from "./PopcornChartHoverTooltip-adcf79d91386.js";
import {
  a as $e,
  c as et,
  d as tt,
  f as nt,
  h as rt,
  l as it,
  m as at,
  p as ot,
  s as st,
  y as ct,
} from "./drawing-frame-geometry-edc4f489bcf8.js";
import {
  c as lt,
  i as U,
  n as ut,
  o as dt,
  r as ft,
  s as pt,
  t as mt,
  u as W,
} from "./freeze-panes-7a2ff30d4631.js";
import { n as ht, r as gt, t as _t } from "./modifiers.esm-667a798d9391.js";
import {
  $ as vt,
  A as yt,
  At as bt,
  Bt as xt,
  C as St,
  D as Ct,
  Dt as wt,
  E as Tt,
  Et,
  F as Dt,
  Ft as Ot,
  Ht as kt,
  I as At,
  It as jt,
  J as Mt,
  K as Nt,
  L as Pt,
  Lt as Ft,
  N as It,
  O as Lt,
  P as Rt,
  Q as zt,
  R as Bt,
  Rt as Vt,
  S as Ht,
  St as Ut,
  T as Wt,
  Tt as Gt,
  U as Kt,
  V as qt,
  Vt as Jt,
  Wt as Yt,
  X as Xt,
  Y as Zt,
  Z as Qt,
  _ as $t,
  _t as en,
  a as tn,
  b as nn,
  bt as rn,
  c as an,
  ct as on,
  d as sn,
  dt as cn,
  f as ln,
  h as un,
  ht as dn,
  i as fn,
  it as pn,
  j as mn,
  jt as hn,
  k as gn,
  kt as _n,
  l as vn,
  lt as yn,
  m as bn,
  mt as xn,
  n as Sn,
  o as Cn,
  ot as wn,
  p as Tn,
  pt as En,
  q as Dn,
  r as On,
  rt as kn,
  s as An,
  t as jn,
  tt as Mn,
  u as Nn,
  v as Pn,
  vt as Fn,
  w as In,
  wt as Ln,
  x as Rn,
  xt as zn,
  y as Bn,
  yt as Vn,
  z as Hn,
  zt as Un,
} from "./popcorn-electron-surface-style-7137a19cf884.js";
import { n as Wn, t as Gn } from "./annotation-scopes-fbb81b16f7b1.js";
import {
  _ as Kn,
  a as qn,
  b as Jn,
  c as Yn,
  d as Xn,
  f as Zn,
  g as Qn,
  h as $n,
  i as er,
  l as tr,
  m as nr,
  o as rr,
  p as ir,
  r as ar,
  s as or,
  t as sr,
  u as cr,
  v as lr,
  x as ur,
  y as dr,
} from "./workbook-review-utils-d8be1d1971f7.js";
function fr(e) {
  return {
    workbookVersion: e.meta.workbookVersion,
    showFormulas: e.meta.showFormulas,
    canUndo: e.meta.canUndo,
    canRedo: e.meta.canRedo,
    activeSheetName: e.navigation.activeSheetName,
    sheetNames: [...e.navigation.sheetNames],
    activeCell: { ...e.selection.activeCell },
    selectedAddress: e.selection.selectedAddress,
    selectionRect: { ...e.selection.selectionRect },
    selectionRanges: e.selection.selectionRanges.map((e) => ({ ...e })),
    activeRangeIndex: e.selection.activeRangeIndex,
    selectAllStage: e.selection.selectAllStage,
    isDraggingSelection: e.selection.isDraggingSelection,
    fillPreviewRect: e.selection.fillPreviewRect ? { ...e.selection.fillPreviewRect } : null,
    formulaInput: e.editor.formulaInput,
    editorMode: e.editor.editorMode,
    zoom: e.viewport.zoom,
    columnWidths: [...e.viewport.columnWidths],
    rowHeights: [...e.viewport.rowHeights],
    rowIndexRemap: e.viewport.rowIndexRemap ? [...e.viewport.rowIndexRemap] : null,
    freezePanes: { ...e.viewport.freezePanes },
    resizeGuide: e.viewport.resizeGuide ? { ...e.viewport.resizeGuide } : null,
    tableFilters: { ...e.overlays.tableFilters },
    tableSorts: { ...e.overlays.tableSorts },
    selectedFloatingElement: e.floating.selectedFloatingElement
      ? {
          ...e.floating.selectedFloatingElement,
          logicalBounds: { ...e.floating.selectedFloatingElement.logicalBounds },
        }
      : null,
    formatting: { ...e.formatting },
  };
}
var pr = e(() => {});
function mr({ controller: e, children: t }) {
  return (0, vr.jsx)(yr.Provider, { value: e, children: t });
}
function hr() {
  let e = (0, _r.useContext)(yr);
  if (!e) throw Error(`PopcornEditorProvider is required`);
  return e;
}
function gr() {
  let e = hr(),
    t = (0, _r.useSyncExternalStore)(
      (t) => e.subscribe(t),
      () => e.getState(),
      () => e.getState(),
    );
  return (0, _r.useMemo)(() => fr(t), [t]);
}
var _r,
  vr,
  yr,
  br = e(() => {
    ((_r = t(n())), pr(), (vr = h()), (yr = (0, _r.createContext)(null)));
  });
function xr(e) {
  let t = [],
    n = [],
    r = [];
  for (let i of e)
    (t.push(...(i.toolbarActions ?? [])),
      n.push(...(i.panels ?? [])),
      r.push(...(i.viewportOverlays ?? [])));
  return { toolbarActions: t, panels: n, viewportOverlays: r };
}
var Sr,
  Cr = e(() => {
    Sr = `popcorn-workbook-inspector`;
  });
function wr(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Tr({
  threads: e,
  camera: t,
  freezePanes: n,
  columnWidths: r,
  rowHeights: i,
  isEditing: a,
  nativeCommentStyle: o = !1,
  renderCommentThread: s,
  annotationMarkerPositions: c = [],
  collisionBoundaryElement: l = null,
  onSelectedCommentThreadChange: u,
  onReply: d,
  onResolve: f,
  onReopen: p,
  onDeleteThread: m,
  onToggleReaction: h,
  onEditComment: g,
  onDeleteComment: _,
}) {
  let [v, y] = (0, Er.useState)(null);
  (0, Er.useEffect)(() => {
    v && (e.some((e) => e.threadId === v && (!o || a || e.status !== `resolved`)) || y(null));
  }, [a, o, v, e]);
  let b = (0, Er.useMemo)(() => {
    let s = new Map();
    return e
      .filter((e) => !o || a || e.status !== `resolved`)
      .map((e) => {
        let a = o ? e.target.endCol : e.target.startCol,
          c = dt({
            camera: t,
            worldX: 40 + r.slice(0, a).reduce((e, t) => e + t, 0),
            worldY: 20 + i.slice(0, e.target.startRow).reduce((e, t) => e + t, 0),
            width: r[a] ?? 0,
            height: i[e.target.startRow] ?? 0,
            freezePanes: n,
            columnWidths: r,
            rowHeights: i,
          })[0];
        if (!c || c.width <= 0 || c.height <= 0) return null;
        let l =
            e.target.startAddress === e.target.endAddress
              ? e.target.startAddress
              : `${e.target.startAddress}:${e.target.endAddress}`,
          u = `${e.sheetName}:${l}`,
          d = s.get(u) ?? 0;
        s.set(u, d + 1);
        let f = _n({ left: c.x, top: c.y, width: c.width, height: c.height });
        return {
          thread: e,
          rect: c,
          markerPosition: { left: f.left, top: f.top + d * Or },
          targetRef: l,
        };
      })
      .filter((e) => e != null);
  }, [t, r, n, a, o, i, e]);
  if (s != null) {
    let e = [...c];
    return (0, Dr.jsx)(Dr.Fragment, {
      children: b.map(({ thread: t, markerPosition: n }) => {
        let r = hn(n, e);
        return (
          e.push(r),
          (0, Dr.jsx)(
            Er.Fragment,
            {
              children: s({ threadId: t.threadId, markerPosition: r, collisionBoundaryElement: l }),
            },
            t.threadId,
          )
        );
      }),
    });
  }
  return (0, Dr.jsx)(Dr.Fragment, {
    children: b.map(({ thread: e, rect: n, markerPosition: r, targetRef: i }) => {
      let s = v === e.threadId,
        c = wr(Math.round(t.k * 14), 14, 22),
        l = wr(Math.round(t.k * 6), 5, 10),
        b = o
          ? (0, Dr.jsx)(
              `button`,
              {
                type: `button`,
                "data-testid": `popcorn-workbook-thread-trigger-${e.threadId}`,
                "aria-label": `Open comment thread for ${e.label}`,
                className: `pointer-events-auto absolute z-[24] flex items-center justify-center overflow-visible rounded-full border border-white bg-chart-green p-0 text-white shadow-sm`,
                style: { ...r, width: 26, height: 26, transform: `translate(-50%, -50%)` },
                onMouseDown: (e) => {
                  e.stopPropagation();
                },
                onClick: (t) => {
                  if ((t.stopPropagation(), u != null)) {
                    u(e.threadId);
                    return;
                  }
                  y((t) => (t === e.threadId ? null : e.threadId));
                },
                children: (0, Dr.jsx)(z, { className: `size-4` }),
              },
              e.threadId,
            )
          : (0, Dr.jsx)(
              `button`,
              {
                type: `button`,
                "data-testid": `popcorn-workbook-thread-trigger-${e.threadId}`,
                "aria-label": `Open comment thread for ${e.label}`,
                className: `pointer-events-auto absolute z-[24] overflow-visible border-0 bg-transparent p-0`,
                style: { left: n.x + Math.max(0, n.width - c), top: n.y, width: c, height: c },
                onMouseDown: (e) => {
                  e.stopPropagation();
                },
                onClick: (t) => {
                  (t.stopPropagation(), y((t) => (t === e.threadId ? null : e.threadId)));
                },
                children: (0, Dr.jsx)(`span`, {
                  "aria-hidden": `true`,
                  className: `absolute right-0 top-0`,
                  style: {
                    width: 0,
                    height: 0,
                    borderTop: `${l}px solid ${e.status === `resolved` ? `#94A3B8` : `#339CFF`}`,
                    borderLeft: `${l}px solid transparent`,
                  },
                }),
              },
              e.threadId,
            );
      return o && u != null
        ? b
        : (0, Dr.jsx)(
            Hn,
            {
              open: s,
              onOpenChange: (t) => {
                y(t ? e.threadId : null);
              },
              trigger: b,
              content: (0, Dr.jsx)(Bt, {
                targetPrimaryLabel: i,
                targetSecondaryLabel: e.sheetName,
                status: e.status,
                resolvedByName: e.resolvedBy?.displayName ?? null,
                resolvedAt: e.resolvedAt,
                comments: e.comments,
                isEditing: a,
                viewerAuthorId: e.viewerAuthorId,
                onReply: d
                  ? (t) => {
                      d(e.threadId, t);
                    }
                  : void 0,
                onResolve: f
                  ? () => {
                      f(e.threadId);
                    }
                  : void 0,
                onReopen: p
                  ? () => {
                      p(e.threadId);
                    }
                  : void 0,
                onDeleteThread: m
                  ? () => {
                      m(e.threadId);
                    }
                  : void 0,
                onToggleReaction: h
                  ? (t, n) => {
                      h(e.threadId, t, n);
                    }
                  : void 0,
                onEditComment: g
                  ? (t, n) => {
                      g(e.threadId, t, n);
                    }
                  : void 0,
                onDeleteComment: _
                  ? (t) => {
                      _(e.threadId, t);
                    }
                  : void 0,
              }),
            },
            e.threadId,
          );
    }),
  });
}
var Er,
  Dr,
  Or,
  kr = e(() => {
    ((Er = t(n())), A(), Ne(), U(), bt(), qt(), (Dr = h()), (Or = 16));
  });
async function Ar(e) {
  return (await e.requestExport()).workbookProto;
}
async function jr(e, t, n) {
  return e.requestCellState(t, n);
}
async function Mr(e, t, n, r) {
  return t.trim() ? e.requestFindMatches(t, r) : { query: t, matches: [], total: 0 };
}
function Nr(e, t) {
  return e.getState().overlays.chartSelectionHighlights.map((e) => ({ ...e }));
}
var Pr = e(() => {});
function Fr({ getCamera: e, overlayHtmlLayerRef: t }) {
  let n = (0, Ir.useRef)(!1),
    r = (0, Ir.useRef)(null),
    i = (0, Ir.useCallback)((e = 520) => {
      ((n.current = !0),
        r.current != null && window.clearTimeout(r.current),
        (r.current = window.setTimeout(() => {
          ((n.current = !1), (r.current = null));
        }, e)));
    }, []);
  return (
    (0, Ir.useEffect)(
      () => () => {
        r.current != null && (window.clearTimeout(r.current), (r.current = null));
      },
      [],
    ),
    {
      programmaticViewportUpdateRef: n,
      markProgrammaticViewportUpdate: i,
      updateOverlayTransform: (0, Ir.useCallback)(() => {
        let e = t.current;
        e && (e.style.transform = `translate(0px, 0px)`);
      }, [t]),
    }
  );
}
var Ir,
  Lr = e(() => {
    Ir = t(n());
  });
function Rr() {
  Vr ||= (Ee(), !0);
}
function zr() {
  return Te() && Vr;
}
function Br() {
  return (
    (Hr ??= Promise.all([
      Re(),
      Promise.resolve().then(() => {
        Rr();
      }),
    ]).then(() => {})),
    Hr
  );
}
var Vr,
  Hr,
  Ur = e(() => {
    (De(), Pe(), (Vr = !1), (Hr = null));
  });
function Wr(e) {
  let t = [0];
  for (let n = 0; n < e.length; n += 1) t[n + 1] = (t[n] ?? 0) + (e[n] ?? 0);
  return t;
}
function Gr(e, t) {
  return e?.width === t.width && e?.height === t.height && e?.dpr === t.dpr;
}
var Kr,
  qr = e(() => {
    (A(),
      U(),
      Ur(),
      Ue(),
      Ie(),
      lr(),
      (Kr = class {
        #e = { current: null };
        #t = { current: null };
        #n = { current: { width: 0, height: 0, dpr: 0 } };
        #r = ve(`viewport`);
        #i;
        #a = () => {
          this.scheduleViewportCanvasSync();
        };
        #o;
        #s = null;
        #c = null;
        #l = null;
        #u = null;
        #d = null;
        #f = `rgba(2, 133, 255, 0.16)`;
        #p;
        #m = !1;
        #h = !1;
        #g = typeof document > `u` || zr();
        #_ = !0;
        #v = null;
        #y = null;
        #b = !1;
        #x = null;
        #S = null;
        #C = 0;
        constructor(e) {
          ((this.#w = e.controller),
            (this.#p = e.accentStroke),
            (this.#_ = e.isEditing ?? !0),
            (this.#C = Math.max(0, e.bottomScrollReservePx ?? 0)),
            (this.#o = new ye({
              enabled: !0,
              initialCamera: { x: 0, y: 0, k: this.#D().zoom },
              minZoom: 0.25,
              maxZoom: 4,
              getViewportSize: () => {
                let e = this.#s;
                return {
                  width: e?.clientWidth ?? this.#n.current.width,
                  height: e?.clientHeight ?? this.#n.current.height,
                };
              },
              getWorldSize: () => {
                let e = this.#D(),
                  t = e.columnWidths.reduce((e, t) => e + t, 0),
                  n = e.rowHeights.reduce((e, t) => e + t, 0);
                return { width: t + 40, height: n + 20 };
              },
              requestDraw: () => {
                let e = this.#o.getCamera();
                (this.#w.setViewportCamera(e), this.scheduleViewportRedraw());
              },
              screenToWorldPoint: (e, t, n) => {
                let r = this.#D();
                return lt({
                  camera: e,
                  screenX: t,
                  screenY: n,
                  freezePanes: r.freezePanes,
                  columnWidths: r.columnWidths,
                  rowHeights: r.rowHeights,
                });
              },
              clampCamera: (e) => {
                let t = this.#D(),
                  n = this.#s;
                return ut({
                  camera: e,
                  viewportWidth: n?.clientWidth ?? this.#n.current.width,
                  viewportHeight: n?.clientHeight ?? this.#n.current.height,
                  freezePanes: t.freezePanes,
                  columnWidths: t.columnWidths,
                  rowHeights: t.rowHeights,
                  minZoom: 0.25,
                  maxZoom: 4,
                  bottomScrollReservePx: this.#C,
                });
              },
              onCameraSettled: (e) => {
                (this.#w.setViewportCamera(e), this.#w.setZoom(e.k));
              },
            })));
          let t = this.#w.getState();
          ((this.#i = this.#w.subscribe(() => {
            let e = this.#w.getState(),
              n = e.viewport !== t.viewport,
              r = e.navigation !== t.navigation,
              i = e.selection !== t.selection,
              a = e.meta !== t.meta,
              o =
                n ||
                r ||
                a ||
                i ||
                e.editor !== t.editor ||
                e.overlays !== t.overlays ||
                e.floating !== t.floating;
            ((t = e), o && (n && this.#o.setCamera(this.#w.getViewportCamera()), this.#E()));
          })),
            this.#o.setCamera(this.#w.getViewportCamera(), { settled: !0 }),
            typeof document < `u` &&
              Br().then(() => {
                ((this.#g = !0), this.syncViewportCanvases(), this.scheduleViewportRedraw());
              }));
        }
        #w;
        setAccentStroke(e) {
          this.#p !== e &&
            ((this.#p = e), this.#w.setViewportAccentStroke(e), this.scheduleViewportRedraw());
        }
        setAccentFill(e) {
          this.#f !== e && ((this.#f = e), this.scheduleViewportRedraw());
        }
        setEditingEnabled(e) {
          this.#_ !== e && ((this.#_ = e), this.scheduleViewportRedraw());
        }
        setBottomScrollReservePx(e) {
          let t = Math.max(0, e);
          this.#C !== t && ((this.#C = t), this.#o.setCamera(this.#o.getCamera(), { settled: !0 }));
        }
        setOverlaySelectionStateProvider(e) {
          this.#v = e;
        }
        setRangeHighlightsProvider(e) {
          ((this.#y = e), this.scheduleViewportRedraw());
        }
        setSuppressCellSelection(e) {
          this.#b !== e && ((this.#b = e), this.scheduleViewportRedraw());
        }
        setDrawingSelectionProvider(e) {
          this.#x = e;
        }
        setDrawingOcclusionProvider(e) {
          this.#S = e;
        }
        attachHost(e) {
          this.#s !== e &&
            (this.#T(),
            (this.#s = e),
            this.#o.attach(e),
            e &&
              (typeof ResizeObserver < `u` &&
                ((this.#c = new ResizeObserver(() => {
                  this.scheduleViewportCanvasSync();
                })),
                this.#c.observe(e)),
              window.addEventListener(`resize`, this.#a),
              this.scheduleViewportCanvasSync()));
        }
        attachCanvas(e) {
          ((this.#e.current = e), this.scheduleViewportCanvasSync());
        }
        attachOverlayCanvas(e) {
          ((this.#t.current = e), (this.#h = !1), this.scheduleViewportCanvasSync());
        }
        getCamera() {
          return this.#o.getCamera();
        }
        subscribeToCameraChanges(e) {
          return this.#o.subscribeToCameraChanges(e);
        }
        shouldSuppressMouseInteractions() {
          return this.#o.shouldSuppressMouseInteractions();
        }
        setCamera(e, t) {
          this.#o.setCamera(e, t);
        }
        zoomTo(e, t) {
          this.#o.zoomTo(e, t);
        }
        panByScroll(e, t) {
          this.#o.panByScroll(e, t);
        }
        revealCell(e, t, n) {
          return this.revealSelectionRect(
            { r1: e, c1: t, r2: e, c2: t },
            { paddingPx: n?.paddingPx },
          );
        }
        revealSelectionRect(e, t) {
          let n = this.#s,
            r = this.#D(),
            i = this.#o.getCamera(),
            a = Math.max(i.k, 2 ** -52),
            o = n?.clientWidth ?? this.#n.current.width,
            s = n?.clientHeight ?? this.#n.current.height,
            c = o / a - 40,
            l = (s - this.#C) / a - 20;
          if (c <= 0 || l <= 0) return;
          let u = Wr(r.columnWidths),
            d = Wr(r.rowHeights),
            f = Math.max(0, Math.min(e.c1, r.columnWidths.length - 1)),
            p = Math.max(0, Math.min(e.r1, r.rowHeights.length - 1)),
            m = Math.max(
              f,
              Math.min(e.c2 + (t?.trailingContextCols ?? 0), r.columnWidths.length - 1),
            ),
            h = Math.max(
              p,
              Math.min(e.r2 + (t?.trailingContextRows ?? 0), r.rowHeights.length - 1),
            ),
            g = u[f] ?? 0,
            _ = u[m + 1] ?? g,
            v = d[p] ?? 0,
            y = d[h + 1] ?? v,
            b = (t?.paddingPx ?? 24) / a,
            x = u[r.freezePanes.columnCount] ?? 0,
            S = d[r.freezePanes.rowCount] ?? 0,
            C = Math.max(0, c - x),
            w = Math.max(0, l - S),
            T = -i.x / a,
            E = -i.y / a;
          if (m >= r.freezePanes.columnCount) {
            let e = Math.max(g, x),
              t = Math.max(0, _ - e),
              n = x + T + C - b,
              r = x + T + b;
            t >= C - b * 2 || e < r
              ? (T = Math.max(0, e - x - b))
              : _ > n && (T = Math.max(0, _ - x - C + b));
          }
          if (h >= r.freezePanes.rowCount) {
            let e = Math.max(v, S),
              t = Math.max(0, y - e),
              n = S + E + w - b,
              r = S + E + b;
            t >= w - b * 2 || e < r
              ? (E = Math.max(0, e - S - b))
              : y > n && (E = Math.max(0, y - S - w + b));
          }
          let D = { x: -T * a, y: -E * a, k: a };
          return D.x === i.x && D.y === i.y && D.k === i.k
            ? !1
            : (this.#o.setCamera(D, { settled: !0 }), !0);
        }
        scheduleViewportRedraw() {
          this.#l ??= window.requestAnimationFrame(() => {
            ((this.#l = null), this.runViewportRedraw());
          });
        }
        scheduleViewportCanvasSync() {
          (this.#u != null && cancelAnimationFrame(this.#u),
            (this.#u = requestAnimationFrame(() => {
              this.#u = null;
              let e = this.syncViewportCanvases();
              if ((this.#l != null && (cancelAnimationFrame(this.#l), (this.#l = null)), e)) {
                this.#E();
                return;
              }
              this.runViewportRedraw();
            })));
        }
        syncViewportCanvases() {
          let e = this.#s;
          if (!e) return !1;
          let t = e.clientWidth,
            n = e.clientHeight,
            r = window.devicePixelRatio || 1,
            i = { width: t, height: n, dpr: r },
            a = t > 0 ? Math.round(t * r) : 0,
            o = n > 0 ? Math.round(n * r) : 0,
            s = `${t}px`,
            c = `${n}px`,
            l = this.#t.current;
          l &&
            (l.width !== a && (l.width = a),
            l.height !== o && (l.height = o),
            l.style.width !== s && (l.style.width = s),
            l.style.height !== c && (l.style.height = c));
          let u = this.#e.current;
          (u &&
            (u.width !== a && (u.width = a),
            u.height !== o && (u.height = o),
            u.style.width !== s && (u.style.width = s),
            u.style.height !== c && (u.style.height = c)),
            (this.#n.current = { ...i }));
          let d = !1;
          return (
            u &&
              !this.#m &&
              t > 0 &&
              n > 0 &&
              (this.#w.attachViewportCanvas(u, { width: t, height: n, dpr: r }),
              (this.#m = !0),
              (this.#d = { ...i }),
              (d = !0)),
            l &&
              !this.#h &&
              t > 0 &&
              n > 0 &&
              (this.#w.attachViewportOverlayCanvas(l, { width: t, height: n, dpr: r }),
              (this.#h = !0)),
            Gr(this.#d, i) ||
              (this.#w.resizeViewportCanvas({ width: t, height: n, dpr: r }),
              (this.#d = { ...i }),
              (d = !0)),
            d
          );
        }
        runViewportRedraw() {
          if (!this.#g) return;
          let e = this.#o.getCamera();
          (this.#w.requestViewportRedraw(),
            this.#r.debug(`worker-redraw`, {
              activeSheetName: this.#D().activeSheetName,
              selection: this.#D().selectedAddress,
              viewportMetrics: this.#n.current,
              zoom: e.k,
            }),
            this.#E());
        }
        destroy() {
          (this.#l != null && (cancelAnimationFrame(this.#l), (this.#l = null)),
            this.#u != null && (cancelAnimationFrame(this.#u), (this.#u = null)),
            this.#T(),
            this.#o.destroy(),
            (this.#e.current = null),
            (this.#t.current = null),
            (this.#m = !1),
            (this.#h = !1),
            (this.#d = null),
            this.#i());
        }
        #T() {
          (this.#c?.disconnect(),
            (this.#c = null),
            this.#o.attach(null),
            this.#s && window.removeEventListener(`resize`, this.#a),
            (this.#s = null));
        }
        #E() {
          let e = this.#D(),
            t = { mergedCells: this.#w.getState().overlays.mergedCells },
            n = !!e.selectedFloatingElement || this.#b;
          dr({
            overlayCanvas: this.#t.current,
            camera: this.#o.getCamera(),
            viewportMetrics: this.#n.current,
            syncViewportCanvases: () => this.syncViewportCanvases(),
            activeCell: e.activeCell,
            selectionRect: e.selectionRect,
            fillPreviewRect: e.fillPreviewRect,
            selectionStart: this.#v?.().selectionStart,
            selectionEnd: this.#v?.().selectionEnd,
            rangeHighlights: [...(this.#y?.() ?? [])],
            drawingSelection: this.#x?.() ?? null,
            drawingOcclusionRects: [...(this.#S?.() ?? [])],
            viewColWidths: e.columnWidths,
            rowHeights: e.rowHeights,
            freezePanes: e.freezePanes,
            accentFill: this.#f,
            accentStroke: this.#p,
            sheet: t,
            resizeGuide: e.resizeGuide,
            showFillHandle: this.#_,
            showDrawingHandles: this.#_,
            suppressCellSelection: n,
          });
        }
        #D() {
          let e = this.#w.getState();
          return {
            workbookVersion: e.meta.workbookVersion,
            showFormulas: e.meta.showFormulas,
            activeSheetName: e.navigation.activeSheetName,
            activeCell: e.selection.activeCell,
            selectedAddress: e.selection.selectedAddress,
            selectionRect: e.selection.selectionRect,
            fillPreviewRect: e.selection.fillPreviewRect,
            zoom: e.viewport.zoom,
            columnWidths: e.viewport.columnWidths,
            rowHeights: e.viewport.rowHeights,
            freezePanes: e.viewport.freezePanes,
            resizeGuide: e.viewport.resizeGuide,
            selectedFloatingElement: e.floating.selectedFloatingElement
              ? {
                  logicalBounds: e.floating.selectedFloatingElement.logicalBounds,
                  rotation: e.floating.selectedFloatingElement.rotation,
                }
              : null,
          };
        }
      }));
  });
function Jr({
  rowIndex: e,
  colIndex: t,
  zoom: n,
  viewColWidths: r,
  rowHeights: i,
  initialValue: a,
  onFocus: o,
  onChange: s,
  onCommit: c,
  onCancel: l,
  viewport: u,
  accentColor: d,
  camera: f,
  freezePanes: p,
  sheetName: m,
}) {
  let h = (0, ni.useRef)(null),
    g = (0, ni.useRef)(!1),
    _ = (0, ni.useRef)(null),
    v = (0, ni.useRef)(!1),
    [y, b] = (0, ni.useState)(0),
    x = (0, ni.useMemo)(() => Yr(r), [r]),
    S = (0, ni.useMemo)(() => Yr(i), [i]),
    C = 40 + (x[t] ?? 0),
    w = 20 + (S[e] ?? 0),
    T = Math.max(r[t] ?? 0, ii),
    E = Math.max(i[e] ?? 0, ii),
    D =
      dt({
        camera: f,
        worldX: C,
        worldY: w,
        width: T,
        height: E,
        freezePanes: p,
        columnWidths: r,
        rowHeights: i,
      })[0] ?? null,
    O = (u.scrollLeft + u.width) / Math.max(n, ai),
    k = (u.scrollTop + u.height) / Math.max(n, ai),
    A = Xr(r, t),
    ee = Xr(i, e),
    j = Math.max(0, Math.min(O - (C + T), A - T)),
    M = Math.max(0, Math.min(k - (w + E), ee - E)),
    N = T + j,
    te = E + M,
    P = (0, ni.useMemo)(() => Zr({ sizes: r, startIndex: t, baseSize: T, limit: N }), [T, t, r, N]),
    F = (0, ni.useMemo)(
      () => Zr({ sizes: i, startIndex: e, baseSize: E, limit: te }),
      [E, te, i, e],
    ),
    [ne, re] = (0, ni.useState)(P[0] ?? T),
    [I, L] = (0, ni.useState)(F[0] ?? E);
  (Mt(() => {
    re(P[0] ?? T);
  }, [T, P]),
    Mt(() => {
      L(F[0] ?? E);
    }, [E, F]),
    Mt(() => {
      let n = h.current,
        r = `${m}:${e}:${t}`,
        i = _.current !== r;
      (i && ((_.current = r), (v.current = !1)),
        !(!n || g.current || (!i && v.current)) &&
          ((n.textContent = a), n.focus(), $r(n), b((e) => e + 1)));
    }, [t, a, e, m]),
    Mt(() => {
      let e = h.current;
      if (!e) return;
      let t = Math.max(e.scrollWidth, e.clientWidth) / Math.max(n, ai),
        r = Math.max(e.scrollHeight, e.clientHeight) / Math.max(n, ai),
        i = Qr(P, t),
        a = Qr(F, r);
      (i && Math.abs(i - ne) > 0.5 && re(i), a && Math.abs(a - I) > 0.5 && L(a));
    }, [F, I, ne, y, P, n]));
  let R = (0, ni.useCallback)(() => {
      v.current = !0;
      let e = h.current?.textContent ?? ``;
      (s?.(e), b((e) => e + 1));
    }, [s]),
    ie = (0, ni.useCallback)(() => {
      g.current || ((g.current = !0), c?.(h.current?.textContent ?? ``, { source: `blur` }));
    }, [c]),
    ae = (0, ni.useCallback)(
      (e) => {
        if ((e.stopPropagation(), !(e.nativeEvent.isComposing || e.keyCode === 229))) {
          if (g.current) {
            e.preventDefault();
            return;
          }
          if (e.key === `Escape`) {
            (e.preventDefault(), (g.current = !0), l?.());
            return;
          }
          if (e.key === `Enter` && e.altKey) {
            e.preventDefault();
            let t = h.current;
            if (t == null) return;
            let n = window.getSelection();
            if (
              n == null ||
              n.rangeCount === 0 ||
              !t.contains(n.getRangeAt(0).commonAncestorContainer)
            )
              (t.append(`
`),
                $r(t));
            else {
              let e = n.getRangeAt(0);
              e.deleteContents();
              let t = document.createTextNode(`
`);
              (e.insertNode(t),
                e.setStartAfter(t),
                e.collapse(!0),
                n.removeAllRanges(),
                n.addRange(e));
            }
            R();
            return;
          }
          (e.key === `Enter` || e.key.startsWith(`Arrow`)) &&
            (e.preventDefault(),
            (g.current = !0),
            c?.(h.current?.textContent ?? ``, {
              source: `keyboard`,
              keyboardInput: {
                key: e.key,
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey,
                shiftKey: e.shiftKey,
              },
            }));
        }
      },
      [R, l, c],
    ),
    z = (0, ni.useCallback)((e) => {
      e.stopPropagation();
    }, []),
    oe = ei(d, 0.1);
  return D
    ? (0, ri.jsx)(`div`, {
        "data-testid": `popcorn-cell-edit-overlay`,
        className: `border-token-border pointer-events-auto absolute z-30 overflow-hidden border bg-white`,
        style: {
          left: D.x,
          top: D.y,
          width: ne * n,
          height: I * n,
          outline: oe ? `2px solid ${oe}` : void 0,
        },
        onMouseDown: z,
        onPointerDown: z,
        children: (0, ri.jsx)(`div`, {
          ref: h,
          role: `textbox`,
          "aria-label": `Cell editor`,
          "aria-multiline": `true`,
          "data-testid": `popcorn-cell-editor-input`,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          spellCheck: !1,
          className: `text-token-text-primary h-full w-full px-[6px] text-[13px] break-words whitespace-pre-wrap focus:outline-none`,
          onInput: R,
          onFocus: o,
          onBlur: ie,
          onKeyDown: ae,
        }),
      })
    : null;
}
function Yr(e) {
  let t = [0];
  for (let n = 0; n < e.length; n += 1) t[n + 1] = (t[n] ?? 0) + (e[n] ?? 0);
  return t;
}
function Xr(e, t) {
  let n = 0;
  for (let r = t; r < e.length; r += 1) n += Math.max(e[r] ?? 0, 0);
  return n;
}
function Zr({ sizes: e, startIndex: t, baseSize: n, limit: r }) {
  let i = [],
    a = Math.max(n, ii);
  i.push(a);
  let o = a;
  for (let n = t + 1; n < e.length; n += 1) {
    let t = Math.max(e[n] ?? 0, 0);
    if (!(t <= 0) && ((o += t), i.push(Math.min(o, r)), o >= r - 0.5)) break;
  }
  return i;
}
function Qr(e, t) {
  for (let n of e) if (n >= t - 0.5) return n;
  return e[e.length - 1] ?? null;
}
function $r(e) {
  if (typeof window > `u` || !window.getSelection) return;
  let t = window.getSelection();
  if (!t) return;
  let n = document.createRange();
  (n.selectNodeContents(e), n.collapse(!1), t.removeAllRanges(), t.addRange(n));
}
function ei(e, t) {
  let n = ti(e);
  return n ? `rgba(${n.r}, ${n.g}, ${n.b}, ${t})` : null;
}
function ti(e) {
  let t = e.match(/^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/i);
  return t ? { r: Number(t[1] ?? 0), g: Number(t[2] ?? 0), b: Number(t[3] ?? 0) } : null;
}
var ni,
  ri,
  ii,
  ai,
  oi = e(() => {
    (A(), (ni = t(n())), U(), Dn(), (ri = h()), (ii = 24), (ai = 1e-4));
  });
function si({ open: e, values: t, selectedValue: n, targetBounds: r, onSelect: i, onClose: a }) {
  let o = (0, ci.useRef)(null);
  return (
    (0, ci.useEffect)(() => {
      if (!e) return;
      let t = (e) => {
          let t = e.target;
          t instanceof Node && (o.current?.contains(t) || a());
        },
        n = (e) => {
          e.key === `Escape` && a();
        };
      return (
        window.addEventListener(`pointerdown`, t, !0),
        window.addEventListener(`keydown`, n),
        () => {
          (window.removeEventListener(`pointerdown`, t, !0),
            window.removeEventListener(`keydown`, n));
        }
      );
    }, [a, e]),
    !e || !r || t.length === 0
      ? null
      : (0, li.jsx)(`div`, {
          ref: o,
          "data-testid": `popcorn-data-validation-overlay`,
          className: `border-token-border-light bg-token-bg-primary pointer-events-auto absolute z-30 w-48 overflow-hidden rounded-xl border shadow-lg`,
          style: { left: r.x, top: r.y + r.height + 4 },
          onMouseDown: (e) => {
            e.stopPropagation();
          },
          children: (0, li.jsx)(`div`, {
            className: `max-h-56 overflow-auto py-1`,
            children: t.map((e) =>
              (0, li.jsx)(
                `button`,
                {
                  type: `button`,
                  className: l(
                    `text-token-text-primary hover:bg-token-bg-secondary flex w-full items-center px-3 py-1.5 text-left text-sm`,
                    e === n && `bg-token-bg-secondary font-medium`,
                  ),
                  onClick: (t) => {
                    (t.preventDefault(), t.stopPropagation(), i(e));
                  },
                  children: (0, li.jsx)(`span`, { className: `block truncate`, children: e }),
                },
                e,
              ),
            ),
          }),
        })
  );
}
var ci,
  li,
  ui = e(() => {
    ((ci = t(n())), E(), (li = h()));
  });
function di(e, t) {
  return Math.max(0, Math.min(t, e));
}
function fi({
  hostRef: e,
  camera: t,
  freezePanes: n,
  columnWidths: r,
  rowHeights: i,
  onCommit: a,
}) {
  let [o, s] = (0, pi.useState)(null),
    [c, l] = (0, pi.useState)(null),
    [u, d] = (0, pi.useState)(null),
    f = (0, pi.useMemo)(() => mt(r), [r]),
    p = (0, pi.useMemo)(() => mt(i), [i]),
    m = o ?? n,
    h = (0, pi.useMemo)(() => ft({ freezePanes: m, columnWidths: r, rowHeights: i }), [r, m, i]),
    g = Math.max(t.k, 1e-4),
    _ = h.freezeLineX * g,
    v = h.freezeLineY * g,
    y = 40 * g,
    b = 20 * g,
    x = u === `column` || c?.axis === `column` ? gi : hi,
    S = u === `row` || c?.axis === `row` ? gi : hi,
    C = (0, pi.useCallback)(
      (n, a) => {
        let o = e.current;
        if (!o) return a.baseFreezePanes;
        let { screenX: s, screenY: c } = Ze(o, n.clientX, n.clientY);
        if (a.axis === `column` && s <= 40 * g) return { ...a.baseFreezePanes, columnCount: 0 };
        if (a.axis === `row` && c <= 20 * g) return { ...a.baseFreezePanes, rowCount: 0 };
        let l = lt({
          camera: t,
          screenX: s,
          screenY: c,
          freezePanes: a.baseFreezePanes,
          columnWidths: r,
          rowHeights: i,
        });
        return a.axis === `column`
          ? { ...a.baseFreezePanes, columnCount: di(pt(f, Math.max(0, l.x - 40)), r.length) }
          : { ...a.baseFreezePanes, rowCount: di(pt(p, Math.max(0, l.y - 20)), i.length) };
      },
      [t, f, r.length, e, i, p, g],
    );
  (0, pi.useEffect)(() => {
    if (!c) return;
    let e = (e) => {
        s(C(e, c));
      },
      t = (e) => {
        let t = C(e, c);
        (s(null), l(null), (t.rowCount !== n.rowCount || t.columnCount !== n.columnCount) && a(t));
      };
    return (
      window.addEventListener(`mousemove`, e),
      window.addEventListener(`mouseup`, t),
      () => {
        (window.removeEventListener(`mousemove`, e), window.removeEventListener(`mouseup`, t));
      }
    );
  }, [c, n, a, C]);
  let w = (0, pi.useCallback)(
    (e) => (t) => {
      (t.preventDefault(), t.stopPropagation());
      let r = { ...n };
      (l({ axis: e, baseFreezePanes: r }), s(r));
    },
    [n],
  );
  return (0, mi.jsxs)(`div`, {
    className: `pointer-events-none absolute inset-0 z-30`,
    children: [
      (m.columnCount > 0 || c?.axis === `column`) &&
        (0, mi.jsxs)(mi.Fragment, {
          children: [
            (0, mi.jsx)(`div`, {
              "aria-hidden": `true`,
              "data-testid": `popcorn-freeze-column-line`,
              className: `absolute top-0 bottom-0`,
              style: { left: _ - _i / 2, width: _i, backgroundColor: x },
            }),
            (0, mi.jsx)(`div`, {
              "data-testid": `popcorn-freeze-column-handle`,
              className: `pointer-events-auto absolute top-0 bottom-0`,
              style: {
                left: _ - vi / 2,
                width: vi,
                cursor: c?.axis === `column` ? `grabbing` : `grab`,
              },
              onMouseEnter: () => {
                d(`column`);
              },
              onMouseLeave: () => {
                d((e) => (e === `column` ? null : e));
              },
              onMouseDown: w(`column`),
            }),
          ],
        }),
      (m.rowCount > 0 || c?.axis === `row`) &&
        (0, mi.jsxs)(mi.Fragment, {
          children: [
            (0, mi.jsx)(`div`, {
              "aria-hidden": `true`,
              "data-testid": `popcorn-freeze-row-line`,
              className: `absolute start-0 end-0`,
              style: { top: v - _i / 2, height: _i, backgroundColor: S },
            }),
            (0, mi.jsx)(`div`, {
              "data-testid": `popcorn-freeze-row-handle`,
              className: `pointer-events-auto absolute start-0 end-0`,
              style: {
                top: v - vi / 2,
                height: vi,
                cursor: c?.axis === `row` ? `grabbing` : `grab`,
              },
              onMouseEnter: () => {
                d(`row`);
              },
              onMouseLeave: () => {
                d((e) => (e === `row` ? null : e));
              },
              onMouseDown: w(`row`),
            }),
          ],
        }),
      m.columnCount === 0 && c?.axis !== `column`
        ? (0, mi.jsx)(`div`, {
            "data-testid": `popcorn-freeze-column-parked-handle`,
            className: `pointer-events-auto absolute`,
            style: { left: y - vi / 2, top: 0, width: vi, height: 20 * g, cursor: `grab` },
            onMouseEnter: () => {
              d(`column`);
            },
            onMouseLeave: () => {
              d((e) => (e === `column` ? null : e));
            },
            onMouseDown: w(`column`),
            children: (0, mi.jsx)(`div`, {
              className: `absolute`,
              style: { left: (vi - _i) / 2, top: 0, width: _i, height: 20 * g, backgroundColor: x },
            }),
          })
        : null,
      m.rowCount === 0 && c?.axis !== `row`
        ? (0, mi.jsx)(`div`, {
            "data-testid": `popcorn-freeze-row-parked-handle`,
            className: `pointer-events-auto absolute`,
            style: { left: 0, top: b - vi / 2, width: 40 * g, height: vi, cursor: `grab` },
            onMouseEnter: () => {
              d(`row`);
            },
            onMouseLeave: () => {
              d((e) => (e === `row` ? null : e));
            },
            onMouseDown: w(`row`),
            children: (0, mi.jsx)(`div`, {
              className: `absolute`,
              style: { left: 0, top: (vi - _i) / 2, width: 40 * g, height: _i, backgroundColor: S },
            }),
          })
        : null,
    ],
  });
}
var pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi = e(() => {
    ((pi = t(n())),
      A(),
      U(),
      Je(),
      (mi = h()),
      (hi = `rgba(15, 23, 42, 0.32)`),
      (gi = `rgba(96, 165, 250, 0.95)`),
      (_i = 1),
      (vi = 18));
  });
function bi({ className: e }) {
  return (0, G.jsx)(`svg`, {
    viewBox: `0 0 16 16`,
    fill: `currentColor`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e,
    "aria-hidden": `true`,
    children: (0, G.jsx)(`path`, {
      d: `M4.4707 5.8623C4.73038 5.60262 5.15142 5.60262 5.4111 5.8623L8 8.45117L10.5889 5.8623L10.6992 5.77246C10.9709 5.59336 11.34 5.62322 11.5791 5.8623C11.8182 6.10138 11.848 6.47052 11.6689 6.74219L11.5791 6.85254L8.49512 9.93652C8.22175 10.2099 7.77825 10.2099 7.50488 9.93652L4.4209 6.85254C4.16122 6.59286 4.16122 6.17198 4.4209 5.91211L4.4707 5.8623Z`,
    }),
  });
}
function xi({ className: e }) {
  return (0, G.jsx)(`svg`, {
    viewBox: `0 0 16 16`,
    fill: `currentColor`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e,
    "aria-hidden": `true`,
    children: (0, G.jsx)(`path`, {
      d: `M7.50488 6.06348C7.76455 5.804 8.18545 5.804 8.44531 6.06348L11.5293 9.14746L11.6191 9.25781C11.7982 9.52948 11.7684 9.89862 11.5293 10.1377C11.2902 10.3768 10.921 10.4066 10.6494 10.2275L10.5391 10.1377L8 7.59863L5.46094 10.1377C5.18757 10.411 4.74407 10.411 4.4707 10.1377C4.19733 9.86429 4.19733 9.42079 4.4707 9.14746L7.50488 6.06348Z`,
    }),
  });
}
function Si({
  btn: e,
  isOpen: t,
  onOpen: n,
  onClose: r,
  zoom: a,
  values: u,
  selectedValues: d,
  onToggleValue: f,
  onSelectAll: p,
  onSort: m,
  filterSortTitle: h,
  filterHeaderLabel: g,
  noDiscreteValuesLabel: v,
  selectAllLabel: y,
  sortAZLabel: b,
  sortZALabel: x,
  portalContainerElement: S,
}) {
  let C = Math.min(e.width, Ti),
    w = Math.min(e.height, Ei),
    T = e.left + Math.max(0, e.width - C - Di),
    E = e.top + Math.max(0, (e.height - w) / 2),
    {
      refs: D,
      floatingStyles: O,
      update: k,
    } = i({
      placement: `bottom-end`,
      middleware: [s(6), _(), c({ padding: 8 })],
      whileElementsMounted: o,
    }),
    A = (0, Ci.useCallback)(
      (e) => {
        D.setReference(e);
      },
      [D],
    ),
    ee = (0, Ci.useCallback)(
      (e) => {
        D.setFloating(e);
      },
      [D],
    );
  return (
    (0, Ci.useEffect)(() => {
      t && k?.();
    }, [e.height, e.left, e.top, e.width, t, k, a]),
    (0, Ci.useEffect)(() => {
      if (!t) return;
      let e = (e) => {
          let t = e.target;
          if (!(t instanceof Node)) return;
          let n = D.reference.current,
            i = D.floating.current;
          (n && n.contains(t)) || (i && i.contains(t)) || r();
        },
        n = (e) => {
          e.key === `Escape` && r();
        };
      return (
        window.addEventListener(`pointerdown`, e, { capture: !0 }),
        window.addEventListener(`keydown`, n),
        () => {
          (window.removeEventListener(`pointerdown`, e, !0),
            window.removeEventListener(`keydown`, n));
        }
      );
    }, [t, r, D.floating, D.reference]),
    (0, G.jsxs)(`div`, {
      className: `pointer-events-auto absolute`,
      style: { left: T, top: E, width: C, height: w },
      children: [
        (0, G.jsx)(`div`, {
          className: `flex h-full items-center justify-end`,
          children: (0, G.jsxs)(`button`, {
            ref: A,
            type: `button`,
            "data-testid": `popcorn-filter-button-${e.tableId}-${e.colIdx}`,
            "data-popcorn-filter-button": `true`,
            className: `border-token-border-default bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary inline-flex items-center gap-0.5 rounded-[2px] border text-[10px] leading-none outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border`,
            title: h,
            "aria-expanded": t,
            "aria-haspopup": `dialog`,
            onClick: (e) => {
              (e.preventDefault(), e.stopPropagation(), t ? r() : n());
            },
            children: [
              e.isFiltered
                ? (0, G.jsx)(`svg`, {
                    "aria-hidden": `true`,
                    width: `10`,
                    height: `10`,
                    viewBox: `0 0 24 24`,
                    fill: `currentColor`,
                    children: (0, G.jsx)(`path`, { d: `M3 4h18l-7 8v6l-4 2v-8L3 4z` }),
                  })
                : null,
              e.isSorted
                ? e.sortDir === `asc`
                  ? (0, G.jsx)(xi, { className: `size-3` })
                  : (0, G.jsx)(bi, { className: `size-3` })
                : null,
              !e.isFiltered && !e.isSorted
                ? (0, G.jsx)(`svg`, {
                    "aria-hidden": `true`,
                    width: `10`,
                    height: `10`,
                    viewBox: `0 0 24 24`,
                    fill: `currentColor`,
                    children: (0, G.jsx)(`path`, { d: `M7 10l5 5 5-5z` }),
                  })
                : null,
            ],
          }),
        }),
        t && S
          ? (0, wi.createPortal)(
              (0, G.jsxs)(`div`, {
                ref: ee,
                "data-testid": `popcorn-filter-menu-${e.tableId}-${e.colIdx}`,
                "data-popcorn-filter-menu": `true`,
                role: `dialog`,
                "aria-label": h,
                className: `border-token-border-light bg-token-bg-primary text-token-text-primary mt-1 w-56 rounded-md border text-xs shadow-lg`,
                style: { ...O, zIndex: 1e3, pointerEvents: `auto` },
                onMouseDown: (e) => {
                  e.stopPropagation();
                },
                onMouseUp: (e) => {
                  e.stopPropagation();
                },
                onClick: (e) => {
                  e.stopPropagation();
                },
                children: [
                  (0, G.jsxs)(`div`, {
                    className: `flex items-center justify-between border-b p-2 font-medium`,
                    children: [
                      (0, G.jsx)(`span`, { children: g }),
                      (0, G.jsx)(`button`, {
                        type: `button`,
                        className: `text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-text-primary rounded px-1 text-[11px] outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border`,
                        onClick: (e) => {
                          (e.preventDefault(), e.stopPropagation(), p());
                        },
                        children: y,
                      }),
                    ],
                  }),
                  (0, G.jsxs)(`div`, {
                    className: `max-h-48 space-y-1 overflow-auto p-2`,
                    children: [
                      u.map((e) =>
                        (0, G.jsxs)(
                          `label`,
                          {
                            className: `hover:bg-token-list-hover-background focus-within:bg-token-list-hover-background flex items-center gap-2 rounded px-1 py-0.5`,
                            children: [
                              (0, G.jsx)(`input`, {
                                type: `checkbox`,
                                checked: !d || d.has(e),
                                className: `focus:ring-token-focus-border`,
                                onChange: () => f(e),
                              }),
                              (0, G.jsx)(`span`, {
                                className: `text-token-text-primary truncate`,
                                title: e,
                                children: e,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                      u.length === 0
                        ? (0, G.jsx)(`div`, { className: `text-token-text-secondary`, children: v })
                        : null,
                    ],
                  }),
                  (0, G.jsx)(`div`, {
                    className: `flex items-center gap-2 border-t p-2`,
                    children: (0, G.jsxs)(`div`, {
                      className: `ms-auto flex items-center gap-2`,
                      children: [
                        (0, G.jsx)(`button`, {
                          type: `button`,
                          "aria-pressed": e.isSorted && e.sortDir === `asc`,
                          className: l(
                            `border-token-border-default hover:bg-token-list-hover-background flex-1 rounded border px-2 py-1 outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border`,
                            e.isSorted && e.sortDir === `asc`
                              ? `bg-token-interactive-bg-secondary-selected`
                              : null,
                          ),
                          onClick: (e) => {
                            (e.preventDefault(), e.stopPropagation(), m(`asc`), r());
                          },
                          children: b,
                        }),
                        (0, G.jsx)(`button`, {
                          type: `button`,
                          "aria-pressed": e.isSorted && e.sortDir === `desc`,
                          className: l(
                            `border-token-border-default hover:bg-token-list-hover-background flex-1 rounded border px-2 py-1 outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border`,
                            e.isSorted && e.sortDir === `desc`
                              ? `bg-token-interactive-bg-secondary-selected`
                              : null,
                          ),
                          onClick: (e) => {
                            (e.preventDefault(), e.stopPropagation(), m(`desc`), r());
                          },
                          children: x,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              S,
            )
          : null,
      ],
    })
  );
}
var Ci,
  wi,
  G,
  Ti,
  Ei,
  Di,
  Oi = e(() => {
    (g(), E(), (Ci = t(n())), (wi = t(b())), (G = h()), (Ti = 22), (Ei = 20), (Di = 4));
  });
function ki(e) {
  let t = e.split(`:`),
    n = t[0] ?? `A1`,
    r = t[1] ?? t[0] ?? `A1`;
  return { c1: k(n), r1: O(n), c2: k(r), r2: O(r) };
}
var Ai = e(() => {
  A();
});
function ji(e, t, n, r, i, a, o, s, c) {
  return (0, Mi.useMemo)(() => {
    let l = [];
    for (let u of e.tables ?? []) {
      if (!u.ref || (!u.autoFilter && !u.hasAutoFilter)) continue;
      let { c1: d, r1: f, c2: p, r2: m } = ki(u.ref),
        h = Math.min(d, p),
        g = Math.max(d, p),
        _ = Math.min(f, m);
      if (Math.max(0, Math.min(1, u.headerRowCount ?? 1)) === 0) continue;
      let v = _,
        y = 20 + (i[v] ?? 0);
      for (let i = h; i <= g; i += 1) {
        let d = dt({
          camera: s,
          worldX: 40 + (r[i] ?? 0),
          worldY: y,
          width: t[i] ?? 0,
          height: n[v] ?? 0,
          freezePanes: c,
          columnWidths: t,
          rowHeights: n,
        })[0];
        if (!d || d.width <= 0 || d.height <= 0) continue;
        let f = `${e.name}:${u.id ?? 0}:${i}`,
          p = !!a[f]?.length,
          m = o[`${e.name}:${u.id ?? 0}`],
          h = !!(m && m.colIdx === i);
        l.push({
          key: f,
          left: d.x,
          top: d.y,
          width: d.width,
          height: d.height,
          tableId: u.id ?? 0,
          colIdx: i,
          isFiltered: p,
          isSorted: h,
          sortDir: h ? m?.dir : void 0,
        });
      }
    }
    return l;
  }, [a, o, r, n, i, e, t, s, c]);
}
var Mi,
  Ni = e(() => {
    (A(), (Mi = t(n())), U(), Ai());
  });
function Pi(e) {
  let t = [0];
  for (let n = 0; n < e.length; n += 1) t[n + 1] = (t[n] ?? 0) + (e[n] ?? 0);
  return t;
}
function Fi({
  sheetName: e,
  tables: t,
  filterOptionsByColumn: n,
  viewColWidths: r,
  rowHeights: i,
  zoom: a,
  camera: o,
  freezePanes: s,
  activeFilters: c,
  activeSortByTable: l,
  onSetFilterValues: u,
  onSetSort: d,
  portalContainerElement: f,
}) {
  let [p, m] = (0, Ii.useState)(null),
    h = (0, Ii.useMemo)(() => Pi(r), [r]),
    g = (0, Ii.useMemo)(() => Pi(i), [i]),
    _ = ji({ name: e, tables: t }, r, i, h, g, c, l, o, s),
    v = (0, Ii.useCallback)(() => {
      m(null);
    }, []);
  return _.length === 0
    ? null
    : (0, Li.jsx)(Li.Fragment, {
        children: _.map((t) => {
          let r = p?.tableId === t.tableId && p?.colIdx === t.colIdx,
            i = n[`${e}:${t.tableId}:${t.colIdx}`] ?? [];
          return (0, Li.jsx)(
            Si,
            {
              btn: t,
              isOpen: r,
              onOpen: () => {
                m({ tableId: t.tableId, colIdx: t.colIdx });
              },
              onClose: v,
              zoom: a,
              values: i,
              selectedValues: c[`${e}:${t.tableId}:${t.colIdx}`]
                ? new Set(c[`${e}:${t.tableId}:${t.colIdx}`])
                : void 0,
              onToggleValue: (n) => {
                let r = `${e}:${t.tableId}:${t.colIdx}`,
                  a = new Set(c[r] ?? i);
                if ((a.has(n) ? a.delete(n) : a.add(n), a.size === i.length)) {
                  u(t.tableId, t.colIdx, null);
                  return;
                }
                u(t.tableId, t.colIdx, [...a]);
              },
              onSelectAll: () => {
                u(t.tableId, t.colIdx, null);
              },
              onSort: (e) => {
                d(t.tableId, { colIdx: t.colIdx, dir: e });
              },
              filterSortTitle: Ri.filterSortTitle,
              filterHeaderLabel: Ri.filterHeaderLabel,
              noDiscreteValuesLabel: Ri.noDiscreteValuesLabel,
              selectAllLabel: Ri.selectAllLabel,
              sortAZLabel: Ri.sortAZLabel,
              sortZALabel: Ri.sortZALabel,
              portalContainerElement: f,
            },
            t.key,
          );
        }),
      });
}
var Ii,
  Li,
  Ri,
  zi = e(() => {
    ((Ii = t(n())),
      Oi(),
      Ni(),
      (Li = h()),
      (Ri = {
        filterSortTitle: `Filter & sort`,
        filterHeaderLabel: `Filter`,
        noDiscreteValuesLabel: `No discrete values`,
        selectAllLabel: `Select all`,
        sortAZLabel: `Sort A→Z`,
        sortZALabel: `Sort Z→A`,
      }));
  });
function Bi(e, t) {
  let n = 0;
  for (let r = 0; r < t; r += 1) n += e[r] ?? 0;
  return n;
}
function Vi(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Hi(e) {
  return Vi(e, 0, 1);
}
function Ui(e) {
  let t = e.axis === `horizontal`,
    n = Math.max(e.zoom, 2 ** -52),
    r = t ? e.columnWidths : e.rowHeights,
    i = r.reduce((e, t) => e + t, 0),
    a = t ? 0 : Math.max(0, e.bottomScrollReservePx ?? 0) / n,
    o = Bi(r, t ? e.freezePanes.columnCount : e.freezePanes.rowCount),
    s = t ? 40 : 20,
    c = t ? e.viewportWidth : e.viewportHeight,
    l = o * n,
    u = t ? e.verticalVisible : e.horizontalVisible,
    d = s + l + Yi,
    f = Math.max(0, c - d - Yi - (u ? 10 : 0));
  if (f <= 0) return null;
  let p = Math.max(0, c / n - s),
    m = Math.max(0, p - o),
    h = Math.max(0, i + a - o),
    g = Math.max(0, h - m);
  if (g <= 0 || h <= 0 || m <= 0) return null;
  let _ = Vi(t ? e.scrollLeft : e.scrollTop, 0, g),
    v = g > 0 ? _ / g : 0,
    y = Vi(f * Hi(m / h), Xi, f),
    b = Math.max(0, f - y) * v,
    x = d + b,
    S = Vi(y + (Math.max(y, f * Zi) - y) * (1 - v), Xi, f),
    C = Math.max(0, f - S),
    w = Vi(C * Qi + b * (1 - Qi), 0, C);
  return {
    axis: e.axis,
    visible: !0,
    trackStart: d,
    trackLength: f,
    thickness: Ji,
    maxScroll: g,
    actualThumbStart: x,
    actualThumbLength: y,
    displayThumbStart: d + w,
    displayThumbLength: S,
    edgeInset: $i,
  };
}
function Wi(e) {
  let t = at(e.camera),
    n = Ui({
      axis: `horizontal`,
      viewportWidth: e.viewportWidth,
      viewportHeight: e.viewportHeight,
      zoom: e.camera.k,
      scrollLeft: t.left,
      scrollTop: t.top,
      columnWidths: e.columnWidths,
      rowHeights: e.rowHeights,
      freezePanes: e.freezePanes,
      horizontalVisible: !1,
      verticalVisible: !1,
    }),
    r = Ui({
      axis: `vertical`,
      viewportWidth: e.viewportWidth,
      viewportHeight: e.viewportHeight,
      zoom: e.camera.k,
      scrollLeft: t.left,
      scrollTop: t.top,
      columnWidths: e.columnWidths,
      rowHeights: e.rowHeights,
      freezePanes: e.freezePanes,
      horizontalVisible: !1,
      verticalVisible: !1,
      bottomScrollReservePx: e.bottomScrollReservePx,
    }),
    i = n != null,
    a = r != null;
  return {
    horizontal: Ui({
      axis: `horizontal`,
      viewportWidth: e.viewportWidth,
      viewportHeight: e.viewportHeight,
      zoom: e.camera.k,
      scrollLeft: t.left,
      scrollTop: t.top,
      columnWidths: e.columnWidths,
      rowHeights: e.rowHeights,
      freezePanes: e.freezePanes,
      horizontalVisible: i,
      verticalVisible: a,
    }),
    vertical: Ui({
      axis: `vertical`,
      viewportWidth: e.viewportWidth,
      viewportHeight: e.viewportHeight,
      zoom: e.camera.k,
      scrollLeft: t.left,
      scrollTop: t.top,
      columnWidths: e.columnWidths,
      rowHeights: e.rowHeights,
      freezePanes: e.freezePanes,
      horizontalVisible: i,
      verticalVisible: a,
      bottomScrollReservePx: e.bottomScrollReservePx,
    }),
  };
}
function Gi(e) {
  let t = Math.max(0, e.metrics.trackLength - e.snapshot.displayThumbLength),
    n = Vi(
      e.snapshot.displayThumbStart -
        e.snapshot.trackStart +
        (e.metrics.actualThumbStart - e.snapshot.actualThumbStart),
      0,
      t,
    );
  return {
    displayThumbStart: e.metrics.trackStart + n,
    displayThumbLength: e.snapshot.displayThumbLength,
    edgeInset: e.snapshot.edgeInset,
  };
}
function Ki(e, t) {
  let n = Vi(t - e.displayThumbStart, 0, e.displayThumbLength);
  return (e.displayThumbLength > 0 ? n / e.displayThumbLength : 0) * e.actualThumbLength;
}
function qi(e) {
  let t = Math.max(0, e.metrics.trackLength - e.metrics.actualThumbLength);
  return t <= 0 || e.metrics.maxScroll <= 0
    ? 0
    : (Vi(e.pointerPos - e.metrics.trackStart - e.grabOffset, 0, t) / t) * e.metrics.maxScroll;
}
var Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea = e(() => {
    (ct(), A(), (Ji = 6), (Yi = 4), (Xi = 28), (Zi = 0.8), (Qi = 0.8), ($i = 4));
  });
function ta(e, t, n) {
  return e
    ? !t || t.axis !== n
      ? e
      : { ...e, ...Gi({ metrics: e, snapshot: t.snapshot }) }
    : null;
}
function na({
  host: e,
  camera: t,
  viewportSizeStore: n,
  columnWidths: r,
  rowHeights: i,
  freezePanes: a,
  bottomScrollReservePx: o,
  onSetLogicalScroll: s,
}) {
  let { width: c, height: l } = (0, ra.useSyncExternalStore)(
      n.subscribe,
      n.getSnapshot,
      n.getSnapshot,
    ),
    [u, d] = (0, ra.useState)(null),
    [f, p] = (0, ra.useState)(!1),
    m = (0, ra.useRef)(t),
    h = (0, ra.useRef)(null),
    g = (0, ra.useCallback)(() => {
      (p(!0),
        h.current != null && window.clearTimeout(h.current),
        (h.current = window.setTimeout(() => {
          (p(!1), (h.current = null));
        }, ca)));
    }, []),
    _ = (0, ra.useMemo)(
      () =>
        Wi({
          camera: t,
          viewportWidth: c,
          viewportHeight: l,
          columnWidths: r,
          rowHeights: i,
          freezePanes: a,
          bottomScrollReservePx: o,
        }),
      [o, t, r, a, i, l, c],
    ),
    v = (0, ra.useMemo)(() => ta(_.vertical, u, `vertical`), [u, _.vertical]),
    y = (0, ra.useMemo)(() => ta(_.horizontal, u, `horizontal`), [u, _.horizontal]),
    b = f || u != null;
  return (
    (0, ra.useEffect)(
      () => () => {
        h.current != null && window.clearTimeout(h.current);
      },
      [],
    ),
    (0, ra.useEffect)(() => {
      let e = m.current,
        n = e.x !== t.x || e.y !== t.y || e.k !== t.k;
      ((m.current = t), n && g());
    }, [g, t]),
    (0, ra.useEffect)(() => {
      if (!u || !e) return;
      let t = (t) => {
          if (t.pointerId !== u.pointerId) return;
          let n = xe(e, t.clientX, t.clientY),
            r = u.axis === `horizontal` ? n.x : n.y,
            i = u.axis === `horizontal` ? _.horizontal : _.vertical;
          if (!i) return;
          let a = qi({ metrics: i, pointerPos: r, grabOffset: u.grabOffset });
          (u.axis === `horizontal` ? s({ left: a }) : s({ top: a }), t.preventDefault());
        },
        n = (t) => {
          if (`pointerId` in t && t.pointerId !== u.pointerId) return;
          let n = u.axis === `horizontal` ? _.horizontal : _.vertical;
          if (n && `clientX` in t && e) {
            let r = xe(e, t.clientX, t.clientY),
              i = qi({
                metrics: n,
                pointerPos: u.axis === `horizontal` ? r.x : r.y,
                grabOffset: u.grabOffset,
              });
            u.axis === `horizontal` ? s({ left: i, settled: !0 }) : s({ top: i, settled: !0 });
          }
          (d(null), g());
        };
      return (
        window.addEventListener(`pointermove`, t, { passive: !1 }),
        window.addEventListener(`pointerup`, n),
        window.addEventListener(`pointercancel`, n),
        window.addEventListener(`blur`, n),
        () => {
          (window.removeEventListener(`pointermove`, t),
            window.removeEventListener(`pointerup`, n),
            window.removeEventListener(`pointercancel`, n),
            window.removeEventListener(`blur`, n));
        }
      );
    }, [g, u, e, s, _.horizontal, _.vertical]),
    (0, ia.jsxs)(ia.Fragment, {
      children: [
        v
          ? (0, ia.jsx)(`div`, {
              "data-testid": `popcorn-scrollbar-vertical`,
              className: `pointer-events-auto absolute`,
              style: {
                top: v.displayThumbStart,
                right: v.edgeInset,
                width: v.thickness,
                height: v.displayThumbLength,
                borderRadius: oa,
                background: aa,
                opacity: +!!b,
                pointerEvents: b ? `auto` : `none`,
                transition: `opacity ${sa}ms ease`,
                touchAction: `none`,
              },
              onPointerDown: (t) => {
                !e ||
                  !_.vertical ||
                  (t.preventDefault(),
                  t.stopPropagation(),
                  g(),
                  d({
                    axis: `vertical`,
                    pointerId: t.pointerId,
                    grabOffset: Ki(_.vertical, xe(e, t.clientX, t.clientY).y),
                    snapshot: {
                      trackStart: _.vertical.trackStart,
                      actualThumbStart: _.vertical.actualThumbStart,
                      displayThumbStart: _.vertical.displayThumbStart,
                      displayThumbLength: _.vertical.displayThumbLength,
                      edgeInset: _.vertical.edgeInset,
                    },
                  }));
              },
            })
          : null,
        y
          ? (0, ia.jsx)(`div`, {
              "data-testid": `popcorn-scrollbar-horizontal`,
              className: `pointer-events-auto absolute`,
              style: {
                left: y.displayThumbStart,
                bottom: y.edgeInset,
                width: y.displayThumbLength,
                height: y.thickness,
                borderRadius: oa,
                background: aa,
                opacity: +!!b,
                pointerEvents: b ? `auto` : `none`,
                transition: `opacity ${sa}ms ease`,
                touchAction: `none`,
              },
              onPointerDown: (t) => {
                !e ||
                  !_.horizontal ||
                  (t.preventDefault(),
                  t.stopPropagation(),
                  g(),
                  d({
                    axis: `horizontal`,
                    pointerId: t.pointerId,
                    grabOffset: Ki(_.horizontal, xe(e, t.clientX, t.clientY).x),
                    snapshot: {
                      trackStart: _.horizontal.trackStart,
                      actualThumbStart: _.horizontal.actualThumbStart,
                      displayThumbStart: _.horizontal.displayThumbStart,
                      displayThumbLength: _.horizontal.displayThumbLength,
                      edgeInset: _.horizontal.edgeInset,
                    },
                  }));
              },
            })
          : null,
      ],
    })
  );
}
var ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la = e(() => {
    ((ra = t(n())),
      Me(),
      ea(),
      (ia = h()),
      (aa = `rgba(0, 0, 0, 0.35)`),
      (oa = 9999),
      (sa = 160),
      (ca = 700));
  });
function ua(e) {
  let t = Math.max(e.zoom, 2 ** -52),
    n = e.start + pa,
    r = e.end - pa;
  return e.pointer < n
    ? -Math.max(ma / t, Math.min(ha / t, (n - e.pointer) / t))
    : e.pointer > r
      ? Math.max(ma / t, Math.min(ha / t, (e.pointer - r) / t))
      : 0;
}
function da(e) {
  return {
    deltaLeft: ua({
      pointer: e.clientX,
      start: e.containerRect.left,
      end: e.containerRect.right,
      zoom: e.zoom,
    }),
    deltaTop: ua({
      pointer: e.clientY,
      start: e.containerRect.top,
      end: e.containerRect.bottom,
      zoom: e.zoom,
    }),
  };
}
function fa(e) {
  let t = null,
    n = null,
    r = !0,
    i = () => {
      if (((t = null), !r || !n)) return;
      let a = e.containerRef.current;
      if (!a) return;
      let o = da({
        clientX: n.clientX,
        clientY: n.clientY,
        containerRect: a.getBoundingClientRect(),
        zoom: e.getZoom(),
      });
      ((o.deltaLeft !== 0 || o.deltaTop !== 0) &&
        (e.panViewportBy(o.deltaLeft, o.deltaTop), e.onAutoScrollFrame(n.clientX, n.clientY)),
        r && (t = window.requestAnimationFrame(i)));
    },
    a = () => {
      t != null || !r || (t = window.requestAnimationFrame(i));
    };
  return {
    updatePointer(e, t) {
      ((n = { clientX: e, clientY: t }), a());
    },
    stop() {
      ((r = !1), (n = null), t != null && (window.cancelAnimationFrame(t), (t = null)));
    },
  };
}
var pa,
  ma,
  ha,
  ga = e(() => {
    ((pa = 24), (ma = 2), (ha = 24));
  });
function _a(e) {
  let { logicalX: t, logicalY: n, viewColWidths: r, rowHeights: i } = e,
    a = 4 / Math.max(e.zoom, 1e-4);
  if (n >= 0 && n <= 20 && t > 40) {
    let e = t - 40,
      n = 0;
    for (let t = 0; t < r.length; t += 1)
      if (((n += r[t] ?? 0), Math.abs(n - e) <= a))
        return { type: `col`, index: t, cursor: `col-resize`, boundaryPos: 40 + n, tolerance: a };
  }
  if (t >= 0 && t <= 40 && n > 20) {
    let e = n - 20,
      t = 0;
    for (let n = 0; n < i.length; n += 1)
      if (((t += i[n] ?? 0), Math.abs(t - e) <= a))
        return { type: `row`, index: n, cursor: `row-resize`, boundaryPos: 20 + t, tolerance: a };
  }
  return null;
}
var va = e(() => {
  A();
});
function ya(e, t) {
  return e === t
    ? !0
    : e == null || t == null
      ? !1
      : e.r1 === t.r1 && e.c1 === t.c1 && e.r2 === t.r2 && e.c2 === t.c2;
}
function ba(e, t) {
  return (
    e.isDragging === t.isDragging &&
    e.rangeAddress === t.rangeAddress &&
    e.rows === t.rows &&
    e.cols === t.cols &&
    ya(e.rect, t.rect)
  );
}
function xa() {
  let e = Ca,
    t = new Set();
  return {
    getSnapshot: () => e,
    subscribe: (e) => (
      t.add(e),
      () => {
        t.delete(e);
      }
    ),
    publish: (n) => {
      if (!ba(e, n)) {
        e = n;
        for (let e of t) e();
      }
    },
  };
}
function Sa(e, t) {
  let n = {
      r1: Math.min(e.r1, e.r2),
      c1: Math.min(e.c1, e.c2),
      r2: Math.max(e.r1, e.r2),
      c2: Math.max(e.c1, e.c2),
    },
    r = n.r2 - n.r1 + 1,
    i = n.c2 - n.c1 + 1,
    a = `${D(n.c1)}${n.r1 + 1}`,
    o = `${D(n.c2)}${n.r2 + 1}`;
  return { isDragging: t, rect: n, rangeAddress: a === o ? a : `${a}:${o}`, rows: r, cols: i };
}
var Ca,
  wa,
  Ta = e(() => {
    (A(),
      (Ca = Object.freeze({ isDragging: !1, rect: null, rangeAddress: ``, rows: 1, cols: 1 })),
      (wa = { getSnapshot: () => Ca, subscribe: () => () => {} }));
  });
function Ea(e, t, n, r, i, a, o) {
  let s = t.current;
  if (!s || n.current) return null;
  let c = r(),
    l = lt({
      camera: c,
      ...Ze(s, e.clientX, e.clientY),
      freezePanes: o,
      columnWidths: i,
      rowHeights: a,
    }),
    u = l.x,
    d = l.y,
    f = _a({ logicalX: u, logicalY: d, zoom: c.k, viewColWidths: i, rowHeights: a });
  try {
    s.style.cursor = f?.cursor ?? ``;
  } catch {}
  return f?.cursor ?? null;
}
var Da = e(() => {
  (U(), Je(), va());
});
function Oa(e) {
  let t = lt({
    camera: e.camera,
    screenX: e.screenX,
    screenY: e.screenY,
    freezePanes: e.freezePanes,
    columnWidths: e.columnWidths,
    rowHeights: e.rowHeights,
  });
  return t.x > 40 && t.y > 20;
}
var ka = e(() => {
  (A(), U());
});
function Aa(e) {
  return e.key.length === 1;
}
var ja = e(() => {});
function Ma({
  controller: e,
  snapshot: t,
  runtime: n,
  hostRef: r,
  canvasRef: i,
  resizingRef: a,
  workerPointerDragActiveRef: o,
  selectionStartRef: s,
  selectionEndRef: c,
  selectionDraggedRef: l,
  dataValidationTargetsRef: u,
  hyperlinkTargetsRef: d,
  hyperlinksEnabled: f,
  viewportLogger: p,
  annotationEnabled: m,
  drawingEnabled: h,
  annotationMode: g,
  drawingMode: _,
  annotationEditorSession: v,
  annotationEditorSessionRef: y,
  annotationEditorRef: b,
  annotationEditorLightDismissArmedRef: x,
  activeDrawingStrokeRef: S,
  workbookActiveReviewTarget: C,
  isEditing: w,
  inputFocused: T,
  floatingTextEdit: E,
  activeCellEditor: D,
  selectionBounds: O,
  selectedFloatingElement: k,
  toolbarRequested: A,
  setToolbarRequested: ee,
  onAnnotationModeChange: j,
  onDrawingModeChange: M,
  cleanupDrawingSession: N,
  queueAnnotationDraftOpen: te,
  addPendingAnnotation: P,
  openCreateAnnotationEditor: F,
  closeAnnotationEditor: ne,
  blockAnnotationEditorTransitionWhileDictationBusy: re,
  requestAnnotationEditorDismiss: I,
  beginDrawingSession: L,
  startWorkerViewportPointerDrag: R,
  isClipboardShortcut: ie,
  navigateFindMatches: ae,
  setFindQuery: z,
  setActiveFindIndex: oe,
  setFindOpen: se,
  activeDataValidationAddress: B,
  setActiveDataValidationAddress: ce,
  camera: V,
  reviewTools: le,
  onCellEditorBlur: H,
  onCellEditorChange: ue,
  onInteractionAttempt: de,
}) {
  let fe = (0, K.useRef)(0),
    pe = (0, K.useRef)(null),
    me = (0, K.useCallback)(
      (e) => {
        (m &&
          v &&
          e.target instanceof Element &&
          !e.target.closest(`[data-testid='popcorn-annotation-editor']`) &&
          !e.target.closest(`[data-popcorn-annotation-marker='true']`) &&
          !e.target.closest(`[data-popcorn-ask-for-edit='true']`) &&
          e.target !== i.current &&
          I(),
          !(
            e.target instanceof Element &&
            (e.target.closest(`[data-testid='popcorn-edit-toolbar']`) ||
              e.target.closest(`[data-popcorn-edit-toolbar-root='true']`))
          ) && ee(!1));
      },
      [v, m, i, I, ee],
    ),
    he = (0, K.useCallback)(
      (n) => {
        if (!Wt(n.target) && !ie(n)) {
          if (
            m &&
            !g &&
            !_ &&
            !t.isDraggingSelection &&
            !T &&
            !E.isActive &&
            !D &&
            !v &&
            !n.repeat &&
            (n.metaKey || n.ctrlKey) &&
            !n.altKey &&
            !n.shiftKey &&
            n.key.toLowerCase() === `i` &&
            C?.type === `workbook-range` &&
            C.rows === 1 &&
            C.cols === 1
          ) {
            (n.preventDefault(), n.stopPropagation(), F(C, `ask_codex_shortcut`));
            return;
          }
          if (
            m &&
            le?.annotation?.onRequestLink &&
            !D &&
            !T &&
            !E.isActive &&
            !v &&
            !_ &&
            (n.metaKey || n.ctrlKey) &&
            !n.altKey &&
            !n.shiftKey &&
            n.key.toLowerCase() === `l`
          ) {
            if (!C) return;
            let e = {
              requestId: En(`selection-link`),
              artifactKind: `workbook`,
              label: Xn(C),
              target: C,
            };
            (P({
              annotationId: e.requestId,
              artifactKind: e.artifactKind,
              label: e.label,
              body: ``,
              target: e.target,
            }),
              le.annotation.onRequestLink(e),
              n.preventDefault(),
              n.stopPropagation());
            return;
          }
          if (n.key === `Escape` && S.current) {
            (N(), n.preventDefault(), n.stopPropagation());
            return;
          }
          if (n.key === `Escape` && _) {
            (M?.(!1), n.preventDefault(), n.stopPropagation());
            return;
          }
          if (n.key === `Escape` && g && !v) {
            (j?.(!1), n.preventDefault(), n.stopPropagation());
            return;
          }
          if (
            !w &&
            t.editorMode === `grid` &&
            !n.nativeEvent.isComposing &&
            n.keyCode !== 229 &&
            !n.metaKey &&
            !n.ctrlKey &&
            !n.altKey &&
            !g &&
            Aa(n)
          ) {
            (n.preventDefault(), n.stopPropagation());
            return;
          }
          if (
            (Tt(n) &&
              !D &&
              !T &&
              !E.isActive &&
              !v &&
              !g &&
              !_ &&
              (n.key === `Backspace` || n.key === `Delete`) &&
              de?.(`delete-selection`),
            !(!w && (n.key === `Backspace` || n.key === `Delete`)))
          ) {
            if (n.key === `/` && !n.metaKey && !n.ctrlKey && !n.altKey) {
              if (!w) return;
              let e = !!O;
              (ee(e), e && (n.preventDefault(), n.stopPropagation()));
              return;
            }
            if (n.key === `Escape` && A) {
              (ee(!1), n.preventDefault(), n.stopPropagation());
              return;
            }
            if (
              !(
                !w &&
                k &&
                (n.key === `Backspace` || n.key === `Delete` || n.key.startsWith(`Arrow`))
              )
            ) {
              if (
                n.target === n.currentTarget &&
                !n.nativeEvent.isComposing &&
                n.keyCode !== 229 &&
                !n.metaKey &&
                !n.ctrlKey &&
                !n.altKey &&
                !g &&
                Aa(n)
              ) {
                pe.current ?? (fe.current += 1);
                let t = `${pe.current ?? ``}${n.key}`;
                ((pe.current = t),
                  e.openCellEditor(t) && (n.preventDefault(), n.stopPropagation()));
                return;
              }
              if (
                n.key === `Escape` &&
                (t.selectionRect.r1 !== t.selectionRect.r2 ||
                  t.selectionRect.c1 !== t.selectionRect.c2)
              ) {
                (e.collapseSelectionToActiveCell(),
                  e.setIsDraggingSelection(!1),
                  e.setResizeGuide(null),
                  n.preventDefault(),
                  n.stopPropagation());
                return;
              }
              e.handleKeyboardEvent({
                key: n.key,
                metaKey: n.metaKey,
                ctrlKey: n.ctrlKey,
                altKey: n.altKey,
                shiftKey: n.shiftKey,
              }) &&
                (n.preventDefault(),
                n.stopPropagation(),
                (s.current = null),
                (c.current = null),
                e.setIsDraggingSelection(!1),
                e.setResizeGuide(null),
                p.debug(`keyboard`, { key: n.key, selection: t.selectedAddress }));
            }
          }
        }
      },
      [
        D,
        S,
        P,
        v,
        m,
        g,
        N,
        e,
        _,
        E.isActive,
        T,
        ie,
        w,
        j,
        M,
        de,
        F,
        le,
        k,
        O,
        c,
        s,
        t.editorMode,
        t.isDraggingSelection,
        t.selectedAddress,
        t.selectionRect.c1,
        t.selectionRect.c2,
        t.selectionRect.r1,
        t.selectionRect.r2,
        A,
        p,
        C,
        ee,
      ],
    ),
    ge = (0, K.useCallback)(
      (e) => {
        let s = r.current,
          c = i.current;
        if (_ && h) {
          (c && (c.style.cursor = `crosshair`), s && (s.style.cursor = `crosshair`));
          return;
        }
        if (g && m) {
          let e = y.current ? `` : Ln;
          (c && (c.style.cursor = e), s && (s.style.cursor = e));
          return;
        }
        let l = Ea(e, r, a, () => n.getCamera(), t.columnWidths, t.rowHeights, t.freezePanes);
        if (o.current || !s || !c) return;
        let u = Ze(s, e.clientX, e.clientY);
        if (!k) {
          let e =
              !w &&
              f &&
              d.current.some(
                (e) =>
                  u.screenX >= e.cssBounds.x &&
                  u.screenX <= e.cssBounds.x + e.cssBounds.width &&
                  u.screenY >= e.cssBounds.y &&
                  u.screenY <= e.cssBounds.y + e.cssBounds.height,
              ),
            r =
              w &&
              ur({
                ...u,
                selectionRect: t.selectionRect,
                colWidths: t.columnWidths,
                rowHeights: t.rowHeights,
                camera: n.getCamera(),
                freezePanes: t.freezePanes,
              }),
            i = e ? `pointer` : r ? `crosshair` : (l ?? ``);
          ((c.style.cursor = i), (s.style.cursor = i));
          return;
        }
        if (!w) {
          ((c.style.cursor = l ?? ``), (s.style.cursor = l ?? ``));
          return;
        }
        let p = lt({
            camera: n.getCamera(),
            ...u,
            freezePanes: t.freezePanes,
            columnWidths: t.columnWidths,
            rowHeights: t.rowHeights,
          }),
          v = {
            left: k.logicalBounds.x,
            top: k.logicalBounds.y,
            width: k.logicalBounds.width,
            height: k.logicalBounds.height,
            rotation: k.rotation,
          },
          b = et(v, p, n.getCamera().k),
          x = k.kind === `xlsx-shape` && it(v, p, n.getCamera().k),
          S = b ? tt(b) : x ? nt() : null;
        ((c.style.cursor = S ?? ``), (s.style.cursor = S ?? ``));
      },
      [
        y,
        m,
        g,
        i,
        h,
        _,
        r,
        f,
        d,
        w,
        a,
        n,
        k,
        t.columnWidths,
        t.freezePanes,
        t.rowHeights,
        t.selectionRect,
        o,
      ],
    ),
    _e = (0, K.useCallback)(
      (i) => {
        try {
          r.current?.focus({ preventScroll: !0 });
        } catch {}
        let a = Ze(i.currentTarget, i.clientX, i.clientY),
          o = lt({
            camera: n.getCamera(),
            ...a,
            freezePanes: t.freezePanes,
            columnWidths: t.columnWidths,
            rowHeights: t.rowHeights,
          });
        if (m && !g && y.current && !I()) {
          (i.preventDefault(), i.stopPropagation());
          return;
        }
        if (_ && h) {
          (i.preventDefault(), i.stopPropagation(), L(i));
          return;
        }
        if (g && m) {
          if (re()) {
            (i.preventDefault(), i.stopPropagation());
            return;
          }
          let e = y.current,
            n = b.current?.querySelector(`textarea`)?.value ?? e?.body ?? ``,
            r =
              (v?.mode ?? e?.mode) === `create`
                ? n.trim().length === 0
                  ? `close`
                  : `keep`
                : `replace`;
          if (
            (e != null && r === `replace` && ne(),
            k &&
              st(
                {
                  left: k.logicalBounds.x,
                  top: k.logicalBounds.y,
                  width: k.logicalBounds.width,
                  height: k.logicalBounds.height,
                  rotation: k.rotation,
                },
                o,
              ))
          ) {
            if ((i.preventDefault(), i.stopPropagation(), r === `keep`)) {
              I();
              return;
            }
            if (r === `close`) {
              I();
              return;
            }
            let e = er({
              sheetName: t.activeSheetName,
              selectedFloatingElement: k,
              anchorPoint: { x: o.x, y: o.y },
            });
            if (!e) return;
            F(e, `annotation_mode_pointer`);
            return;
          }
          te({
            kind: `range`,
            anchorPoint: { x: o.x, y: o.y },
            getSelectionSummary: () => {
              let e = s.current,
                t = c.current;
              return e == null || t == null
                ? null
                : Sa({ r1: e.row, c1: e.col, r2: t.row, c2: t.col }, !1);
            },
            draftClickAction: r,
            draftBody: r === `keep` ? n : void 0,
            wasDraftLightDismissArmed: e?.mode === `create` ? x.current : void 0,
            shouldOpenDraftOnRelease: () => r === `replace` || l.current,
          });
        }
        if (!(g && m) && E.handleCanvasMouseDown(i)) return;
        if (n.shouldSuppressMouseInteractions()) {
          (i.preventDefault(), i.stopPropagation());
          return;
        }
        let d = u.current.find(
          (e) =>
            a.screenX >= e.cssBounds.x &&
            a.screenX <= e.cssBounds.x + e.cssBounds.width &&
            a.screenY >= e.cssBounds.y &&
            a.screenY <= e.cssBounds.y + e.cssBounds.height,
        );
        if (d) {
          (i.preventDefault(), i.stopPropagation(), e.setSelectedAddress(d.addr), ce(d.addr));
          try {
            r.current?.focus({ preventScroll: !0 });
          } catch {}
          return;
        }
        (i.preventDefault(), R(i));
      },
      [
        y,
        b,
        m,
        g,
        L,
        ne,
        e,
        u,
        h,
        _,
        E,
        r,
        F,
        te,
        I,
        n,
        l,
        k,
        t.activeSheetName,
        t.columnWidths,
        t.freezePanes,
        t.rowHeights,
        R,
        ce,
      ],
    ),
    ve = (0, K.useCallback)(
      (e) => {
        (_ && h) ||
          (g && m) ||
          y.current ||
          E.isActive ||
          (e.preventDefault(), R(e, { completeImmediately: !0 }));
      },
      [y, m, g, re, h, _, E.isActive, R],
    ),
    ye = (0, K.useCallback)(
      (i) => {
        if (_ && h) {
          (i.preventDefault(), i.stopPropagation());
          return;
        }
        if (g && m) {
          (i.preventDefault(), i.stopPropagation());
          return;
        }
        if (E.handleCanvasDoubleClick(i)) return;
        if (n.shouldSuppressMouseInteractions()) {
          (i.preventDefault(), i.stopPropagation());
          return;
        }
        let a = Ze(i.currentTarget, i.clientX, i.clientY),
          o = lt({
            camera: n.getCamera(),
            ...a,
            freezePanes: t.freezePanes,
            columnWidths: t.columnWidths,
            rowHeights: t.rowHeights,
          }),
          s = _a({
            logicalX: o.x,
            logicalY: o.y,
            zoom: n.getCamera().k,
            viewColWidths: t.columnWidths,
            rowHeights: t.rowHeights,
          });
        if (s) {
          de?.(s.type === `col` ? `autofit-column` : `autofit-row`);
          return;
        }
        if (
          Oa({
            camera: n.getCamera(),
            ...a,
            freezePanes: t.freezePanes,
            columnWidths: t.columnWidths,
            rowHeights: t.rowHeights,
          }) &&
          (de?.(`double-click-content`), w && e.openCellEditor(t.formulaInput))
        ) {
          (i.preventDefault(), i.stopPropagation());
          try {
            r.current?.focus({ preventScroll: !0 });
          } catch {}
        }
      },
      [m, g, e, h, _, E, r, w, de, n, t.columnWidths, t.formulaInput, t.freezePanes, t.rowHeights],
    ),
    be = (0, K.useCallback)(() => {
      if (_ && h) {
        (i.current && (i.current.style.cursor = `crosshair`),
          r.current && (r.current.style.cursor = `crosshair`));
        return;
      }
      if (g && m) {
        let e = y.current ? `` : Ln;
        (i.current && (i.current.style.cursor = e), r.current && (r.current.style.cursor = e));
        return;
      }
      (!a.current && i.current && (i.current.style.cursor = `default`),
        !a.current && r.current && (r.current.style.cursor = `default`));
    }, [y, m, g, i, h, _, r, a]),
    xe = (0, K.useCallback)((e) => {
      e.stopPropagation();
    }, []),
    Se = (0, K.useCallback)(
      (e) => {
        (z(e), oe(0));
      },
      [oe, z],
    ),
    Ce = (0, K.useCallback)(() => {
      ae(-1);
    }, [ae]),
    we = (0, K.useCallback)(() => {
      ae(1);
    }, [ae]),
    Te = (0, K.useCallback)(() => {
      (se(!1), z(``), oe(0));
    }, [oe, se, z]),
    Ee = (0, K.useCallback)(
      (t, n, r) => {
        e.dispatch({ type: `set-table-filter-values`, tableId: t, colIdx: n, values: r });
      },
      [e],
    ),
    De = (0, K.useCallback)(
      (t, n) => {
        e.dispatch({ type: `set-table-sort`, tableId: t, sort: n });
      },
      [e],
    ),
    Oe = (0, K.useCallback)(
      ({ left: e, top: t, settled: r }) => {
        let i = at(n.getCamera());
        n.setCamera(
          { x: -((e ?? i.left) * V.k), y: -((t ?? i.top) * V.k), k: V.k },
          r ? { settled: !0 } : void 0,
        );
      },
      [V.k, n],
    ),
    ke = (0, K.useCallback)(
      (t) => {
        ((pe.current = null), ue?.(t), w && e.updateFormulaInput(t));
      },
      [e, w, ue],
    ),
    Ae = (0, K.useCallback)(
      (t, n) => {
        if (((pe.current = null), H?.(), w)) {
          if (n.source === `keyboard`) {
            (e.updateFormulaInput(t),
              e.handleKeyboardEvent(n.keyboardInput),
              r.current?.focus({ preventScroll: !0 }));
            return;
          }
          e.commitCellEdit(t);
        }
      },
      [e, r, w, H],
    ),
    je = (0, K.useCallback)(() => {
      ((pe.current = null),
        H?.(),
        w && (e.cancelCellEdit(), r.current?.focus({ preventScroll: !0 })));
    }, [e, r, w, H]),
    Me = (0, K.useCallback)(
      (t) => {
        B && (e.setSelectedAddress(B), e.updateFormulaInput(t), e.commitFormulaInput(t), ce(null));
      },
      [B, e, ce],
    ),
    Ne = (0, K.useCallback)(() => {
      ce(null);
    }, [ce]),
    Pe = (0, K.useCallback)(
      (t, n) => {
        e.replyToCommentThread(t, n);
      },
      [e],
    ),
    Fe = (0, K.useCallback)(
      (t) => {
        e.resolveCommentThread(t);
      },
      [e],
    ),
    Ie = (0, K.useCallback)(
      (t) => {
        e.reopenCommentThread(t);
      },
      [e],
    ),
    Le = (0, K.useCallback)(
      (t) => {
        e.deleteCommentThread(t);
      },
      [e],
    ),
    Re = (0, K.useCallback)(
      (t, n, r) => {
        e.toggleCommentReaction(t, n, r);
      },
      [e],
    ),
    ze = (0, K.useCallback)(
      (t, n, r) => {
        e.editThreadComment(t, n, r);
      },
      [e],
    ),
    Be = (0, K.useCallback)(
      (t, n) => {
        e.deleteThreadComment(t, n);
      },
      [e],
    ),
    Ve = (0, K.useCallback)(
      (t) => {
        e.dispatch({ type: `set-freeze-panes`, freezePanes: t });
      },
      [e],
    );
  return {
    cellEditorSessionKey: fe.current,
    handleHostMouseDownCapture: me,
    handleHostKeyDown: he,
    handleHostMouseMove: ge,
    handleCanvasMouseDown: _e,
    handleCanvasTouchTap: ve,
    handleCanvasDoubleClick: ye,
    handleCanvasMouseLeave: be,
    handleOverlayMouseDown: xe,
    handleFindQueryChange: Se,
    handleFindNavigatePrevious: Ce,
    handleFindNavigateNext: we,
    handleFindClose: Te,
    handleSetTableFilterValues: Ee,
    handleSetTableSort: De,
    handleSetLogicalScroll: Oe,
    handleCellEditChange: ke,
    handleCellEditCommit: Ae,
    handleCellEditCancel: je,
    handleDataValidationSelect: Me,
    handleDataValidationClose: Ne,
    handleReplyToCommentThread: Pe,
    handleResolveCommentThread: Fe,
    handleReopenCommentThread: Ie,
    handleDeleteCommentThread: Le,
    handleToggleCommentReaction: Re,
    handleEditThreadComment: ze,
    handleDeleteThreadComment: Be,
    handleFreezePanesCommit: Ve,
  };
}
var K,
  Na = e(() => {
    ((K = t(n())),
      U(),
      Jn(),
      Ta(),
      ct(),
      vt(),
      Zn(),
      $e(),
      In(),
      ot(),
      Da(),
      Je(),
      va(),
      ka(),
      ja());
  });
function Pa({
  controller: e,
  snapshot: t,
  reviewTools: n,
  annotationMode: r,
  drawingMode: i,
  drawingCommitToken: a = 0,
  runtime: o,
  hostRef: s,
  canvasRef: c,
  overlayCanvasRef: l,
  selectionSummary: u,
  colOffsets: d,
  rowOffsets: f,
  camera: p,
  annotationRangeHighlightColor: m,
  mergedCells: h,
  annotationsEnabled: g = !0,
  drawingAnnotationsEnabled: _ = !0,
  onAnnotationDictationBusyChange: v,
  commentThreadsEnabled: y = !0,
}) {
  let b = g && n?.annotation != null && n.annotation.enabled !== !1,
    x = (() => {
      let e = n && n.annotation;
      if (!(!y || e == null || e.createCommentThreads !== !0)) return e.renderCommentThread;
    })(),
    S = _ && n?.drawing != null && n.drawing.enabled !== !1,
    [C, w] = (0, q.useState)(null),
    T = (0, q.useRef)(C);
  T.current = C;
  let E = (0, q.useRef)(!1),
    D = (0, q.useRef)(null),
    O = (0, q.useRef)(!1),
    k = (0, q.useRef)(!1),
    A = (0, q.useRef)(null),
    ee = (0, q.useRef)(null),
    j = (0, q.useRef)(null),
    [M, N] = (0, q.useState)(0),
    [te, P] = (0, q.useState)(null),
    F = (0, q.useRef)(null);
  F.current = te;
  let [ne, re] = (0, q.useState)([]),
    I = (0, q.useRef)([]);
  I.current = ne;
  let L = (0, q.useRef)(null),
    R = (0, q.useRef)(null),
    ie = (0, q.useRef)(a),
    [ae, z] = (0, q.useState)(null),
    oe = (0, q.useCallback)((e) => {
      (A.current === e && (A.current = null),
        z((t) => (t === e ? null : t)),
        w((t) => (t?.mode === `edit` && t.annotationId === e ? null : t)));
    }, []),
    se = (0, q.useCallback)(() => {
      ((A.current = null), z(null), w(null));
    }, []),
    B = (0, q.useCallback)(() => (k.current ? ((O.current = !1), on(D.current), !0) : !1), []),
    ce = (0, q.useCallback)(
      (e) =>
        B()
          ? !1
          : ((O.current = !1),
            n?.annotation?.defaultCreateSubmitMode === `direct`
              ? (z(null), w({ mode: `create`, intent: `ask`, target: e.target, body: `` }), !0)
              : (z(e.annotationId),
                w({ mode: `edit`, annotationId: e.annotationId, target: e.target, body: e.body }),
                !0)),
      [B, n?.annotation?.defaultCreateSubmitMode],
    ),
    V = (0, q.useCallback)(
      (n) => {
        let r = A.current != null;
        return (
          (A.current = null),
          n.target.sheetName === t.activeSheetName && !r
            ? ce(n)
            : B() || !t.sheetNames.includes(n.target.sheetName)
              ? !1
              : ((A.current = n.annotationId), e.setActiveSheetName(n.target.sheetName), !0)
        );
      },
      [B, e, ce, t.activeSheetName, t.sheetNames],
    ),
    {
      annotations: le,
      addPendingAnnotation: H,
      updatePendingAnnotation: ue,
      dismissAnnotation: de,
    } = kn(n?.annotation?.handleRef, {
      artifactKey: n?.annotation?.artifactKey,
      artifactKind: `workbook`,
      initialAnnotations:
        n?.annotation?.initialAnnotations ?? n?.annotation?.initialPendingAnnotations,
      onFocusAnnotation: V,
      onDismissAnnotation: (e) => {
        (oe(e), n?.annotation?.onDismiss?.(e));
      },
      onDismissAllAnnotations: se,
    }),
    { drawings: fe, addPendingDrawing: pe } = Mn(n?.drawing?.handleRef),
    me = (0, q.useMemo)(
      () => le.filter((e) => e.target.sheetName === t.activeSheetName),
      [le, t.activeSheetName],
    ),
    he = (0, q.useMemo)(() => Wn(me), [me]),
    ge = (0, q.useMemo)(
      () => fe.filter((e) => e.target.sheetName === t.activeSheetName),
      [fe, t.activeSheetName],
    ),
    _e = (0, q.useCallback)((e) => {
      P((t) => {
        let n = typeof e == `function` ? e(t) : e;
        return ((F.current = n), n);
      });
    }, []),
    ve = (0, q.useCallback)(() => {
      (ee.current?.(), (ee.current = null));
    }, []),
    ye = (0, q.useCallback)(() => {
      try {
        s.current?.focus({ preventScroll: !0 });
      } catch {}
    }, [s]),
    be = (0, q.useCallback)(() => {
      ((A.current = null), (k.current = !1), v?.(!1), (O.current = !1), w(null), ye());
    }, [ye, v]),
    xe = (0, q.useCallback)(
      (e) => {
        ((k.current = e), v?.(e), (O.current = !1));
      },
      [v],
    ),
    Se = (0, q.useCallback)(() => {
      B() || be();
    }, [B, be]),
    Ce = (0, q.useCallback)(() => {
      if (B()) return !1;
      let e = T.current;
      return e?.mode === `create` && e.body.trim().length > 0
        ? O.current
          ? (Se(), !0)
          : ((O.current = !0), on(D.current), !1)
        : (Se(), !0);
    }, [B, Se]),
    we = (0, q.useCallback)(() => {
      (R.current?.(), (R.current = null));
    }, []),
    Te = (0, q.useCallback)(() => {
      ((L.current = null), (I.current = []), re([]));
    }, []),
    Ee = (0, q.useCallback)(
      (e) => {
        let n = W({
          camera: o.getCamera(),
          worldX: e.x,
          worldY: e.y,
          freezePanes: t.freezePanes,
          columnWidths: t.columnWidths,
          rowHeights: t.rowHeights,
        });
        return { x: n.x, y: n.y };
      },
      [o, t.columnWidths, t.freezePanes, t.rowHeights],
    ),
    De = (0, q.useCallback)(
      (e) => {
        e == null ||
          e.points.length === 0 ||
          !S ||
          !i ||
          ((L.current = t.activeSheetName), (I.current = [...I.current, e]), re(I.current));
      },
      [S, i, t.activeSheetName],
    ),
    Oe = (0, q.useCallback)(
      (e) => {
        if (e.length === 0) return;
        let r = zn(e),
          i = zn(e.map((e) => ({ ...e, points: e.points.map(Ee) }))),
          a = s.current,
          o = c.current;
        if (!r || !i || !a || !o) return;
        let u = e.reduce((e, t) => Math.max(e, t.strokeWidth), 0),
          p = Ut({
            left: i.left - u / 2,
            top: i.top - u / 2,
            width: i.width + u,
            height: i.height + u,
          }),
          m = { width: a.clientWidth, height: a.clientHeight },
          h = Vn(p, m),
          g = or({
            logicalBounds: r,
            colOffsets: d,
            rowOffsets: f,
            columnWidths: t.columnWidths,
            rowHeights: t.rowHeights,
          }),
          _ = ar({
            sheetName: t.activeSheetName,
            logicalBounds: r,
            viewportBounds: h,
            rangeAddress: g.rangeAddress,
            coveredCells: g.coveredCells,
          }),
          v = En(`drawing`),
          y = Yn(_);
        pe({ drawingId: v, artifactKind: `workbook`, label: y, target: _, strokes: e });
        let b = { x: h.left + h.width / 2, y: h.top + h.height / 2 };
        Fn({
          cropRect: h,
          viewportSize: m,
          baseCanvas: o,
          overlayCanvases: [l.current],
          strokes: e,
          projectPoint: Ee,
        })
          .then((t) => {
            let r = { ...t, commentId: v },
              i = {
                drawingId: v,
                artifactKind: `workbook`,
                label: y,
                target: _,
                strokes: e,
                screenshot: r,
                browserCompatible: rn({
                  drawingId: v,
                  screenshot: r,
                  markerViewportPoint: b,
                  viewportSize: m,
                }),
              };
            return n?.drawing?.onSubmit?.(i);
          })
          .catch((e) => {
            console.error(`Failed to capture workbook drawing screenshot`, e);
          });
      },
      [pe, c, d, S, i, I, s, l, Ee, n?.drawing, f, t.activeSheetName, t.columnWidths, t.rowHeights],
    ),
    ke = (0, q.useCallback)(
      (e) => {
        (ye(), we());
        let n = (n, r) => {
            let i = lt({
              camera: o.getCamera(),
              ...Ze(e.currentTarget, n, r),
              freezePanes: t.freezePanes,
              columnWidths: t.columnWidths,
              rowHeights: t.rowHeights,
            });
            return { x: i.x, y: i.y };
          },
          r = (e, t) => {
            let r = n(e, t);
            _e((e) => {
              if (!e) return e;
              let t = e.points[e.points.length - 1];
              return t && Math.hypot(r.x - t.x, r.y - t.y) < 0.5
                ? e
                : { ...e, points: [...e.points, r] };
            });
          };
        _e({ color: en, strokeWidth: 3, points: [n(e.clientX, e.clientY)] });
        let i = (e) => {
            r(e.clientX, e.clientY);
          },
          a = (e) => {
            let t = F.current;
            (we(), _e(null), e && De(t));
          },
          s = () => {
            a(!0);
          },
          c = () => {
            a(!1);
          };
        (window.addEventListener(`mousemove`, i),
          window.addEventListener(`mouseup`, s, { once: !0 }),
          window.addEventListener(`blur`, c, { once: !0 }),
          (R.current = () => {
            (window.removeEventListener(`mousemove`, i),
              window.removeEventListener(`mouseup`, s),
              window.removeEventListener(`blur`, c));
          }));
      },
      [we, De, ye, o, t.columnWidths, t.freezePanes, t.rowHeights, _e],
    ),
    Ae = (0, q.useCallback)(() => {
      let e = j.current;
      if (!b || !r || !e) {
        j.current = null;
        return;
      }
      if (B()) {
        j.current = null;
        return;
      }
      if (t.isDraggingSelection) {
        window.requestAnimationFrame(() => {
          N((e) => e + 1);
        });
        return;
      }
      j.current = null;
      let i = e.kind === `range` ? (e.selectionSummary ?? u) : u,
        a =
          e.kind === `floating`
            ? er({
                sheetName: t.activeSheetName,
                selectedFloatingElement: e.selectedFloatingElement,
                anchorPoint: e.anchorPoint,
              })
            : rr({ sheetName: t.activeSheetName, selectionSummary: i, anchorPoint: e.anchorPoint });
      a &&
        (n?.annotation?.onStart?.(`annotation_mode_pointer`, { annotationMode: r }),
        (O.current = !1),
        w({ mode: `create`, intent: `ask`, target: a, body: `` }));
    }, [b, r, B, u, t.activeSheetName, t.isDraggingSelection, n?.annotation]),
    je = (0, q.useCallback)(
      (e) => {
        if (!b || !r || B()) return;
        (ve(), (j.current = e));
        let t = (t) => {
            if ((ve(), !t)) {
              j.current = null;
              return;
            }
            if (
              e.kind === `range` &&
              e.draftClickAction != null &&
              e.draftClickAction !== `replace` &&
              e.shouldOpenDraftOnRelease?.() === !1
            ) {
              ((j.current = null),
                e.draftClickAction === `keep` && e.wasDraftLightDismissArmed !== !0
                  ? (w((t) => {
                      if (t?.mode !== `create` || e.draftBody == null) return t;
                      let n = { ...t, body: e.draftBody };
                      return ((T.current = n), n);
                    }),
                    (O.current = !0),
                    on(D.current))
                  : Ce());
              return;
            }
            if (e.kind === `range`) {
              let t = e.getSelectionSummary?.();
              t != null &&
                (j.current = {
                  kind: `range`,
                  anchorPoint: e.anchorPoint,
                  selectionSummary: t,
                  draftClickAction: e.draftClickAction,
                  draftBody: e.draftBody,
                  wasDraftLightDismissArmed: e.wasDraftLightDismissArmed,
                  shouldOpenDraftOnRelease: e.shouldOpenDraftOnRelease,
                });
            }
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                N((e) => e + 1);
              });
            });
          },
          n = () => {
            t(!0);
          },
          i = () => {
            t(!1);
          };
        (window.addEventListener(`mouseup`, n, { once: !0 }),
          window.addEventListener(`blur`, i, { once: !0 }),
          (ee.current = () => {
            (window.removeEventListener(`mouseup`, n), window.removeEventListener(`blur`, i));
          }));
      },
      [b, r, B, ve, Ce],
    ),
    Me = (0, q.useCallback)(
      (e, t, i = `ask`) => {
        B() ||
          (n?.annotation?.onStart?.(t, { annotationMode: r }),
          (O.current = !1),
          w({ mode: `create`, intent: i, target: e, body: `` }));
      },
      [r, B, n?.annotation],
    ),
    Ne = (0, q.useCallback)(
      async (t = `saved`, i = `button`, a, o, s = !1) => {
        let c = o ?? T.current;
        if (!c?.target) return;
        let l = (a ?? c.body).trim();
        if (l.length === 0) return;
        if (c.mode === `edit`) {
          (ue(c.annotationId, { body: l }),
            n?.annotation?.onUpdate?.({
              annotationId: c.annotationId,
              artifactKind: `workbook`,
              label: Xn(c.target),
              body: l,
              target: c.target,
            }),
            be());
          return;
        }
        let u = {
          annotationId: En(`annotation`),
          artifactKind: `workbook`,
          label: Xn(c.target),
          body: l,
          target: c.target,
        };
        if (c.intent === `comment`) {
          let r = n?.annotation?.commentAuthor;
          if (!y || !n?.annotation?.createCommentThreads || r == null) return;
          let i = c.target;
          if (i.type !== `workbook-range` || E.current) return;
          E.current = !0;
          let a = s ? `@ChatGPT ${l}` : l,
            o = await e
              .addCommentThread(i.sheetName, i.rangeAddress, a, { author: r })
              .catch(() => null);
          if (((E.current = !1), o == null)) return;
          let d = s ? t : `direct`;
          (be(),
            n.annotation?.onCommentSubmitted?.({ ...u, annotationId: o, assignedToChatGpt: s }, d));
          return;
        }
        (H(u),
          t === `direct`
            ? (n?.annotation?.onDirectSubmit ?? n?.annotation?.onSubmit)?.(u)
            : n?.annotation?.onSubmit?.(u),
          n?.annotation?.onSubmitted?.(u, t, i, { annotationMode: r }),
          be());
      },
      [H, r, be, y, e, n?.annotation, ue],
    ),
    Pe = (0, q.useCallback)(
      (e, t, r, i) => {
        let a = n?.annotation?.defaultCreateSubmitMode ?? `direct`;
        Ne(i ? (a === `direct` ? `saved` : `direct`) : a, r, t, {
          mode: `create`,
          intent: `ask`,
          target: e,
          body: t,
        });
      },
      [n?.annotation?.defaultCreateSubmitMode, Ne],
    ),
    Fe = (0, q.useCallback)(() => {
      B() ||
        (C?.mode === `edit` &&
          (de(C.annotationId), z((e) => (e === C.annotationId ? null : e)), be()));
    }, [C, B, be, de]);
  ((0, q.useEffect)(() => {
    ((!b || !r) && ((j.current = null), ve()), b || (C?.mode !== `edit` && w(null)));
  }, [b, C?.mode, r, ve]),
    (0, q.useEffect)(() => {
      if (a === ie.current) return;
      ie.current = a;
      let e = I.current;
      if (e.length === 0) {
        Te();
        return;
      }
      (Oe(e), Te());
    }, [Te, a, Oe]),
    (0, q.useEffect)(() => {
      (S && i) || (we(), _e(null), I.current.length > 0 && Te());
    }, [we, Te, S, i, _e]),
    (0, q.useEffect)(() => {
      L.current == null || L.current === t.activeSheetName || Te();
    }, [Te, t.activeSheetName]),
    (0, q.useEffect)(() => {
      if (!C) return;
      if (C.target.sheetName !== t.activeSheetName) {
        (z(null), w(null));
        return;
      }
      let e = (e) => {
        let t = e.target;
        t instanceof Node &&
          (D.current?.contains(t) ||
            (t instanceof HTMLElement && t.closest(`[data-popcorn-annotation-marker='true']`)) ||
            s.current?.contains(t) ||
            Ce());
      };
      return (
        document.addEventListener(`mousedown`, e, !0),
        () => {
          document.removeEventListener(`mousedown`, e, !0);
        }
      );
    }, [C, s, Ce, t.activeSheetName]),
    (0, q.useEffect)(() => {
      let e = A.current;
      if (e == null) return;
      let n = le.find((t) => t.annotationId === e);
      !b || n == null || !t.sheetNames.includes(n.target.sheetName)
        ? (A.current = null)
        : n.target.sheetName === t.activeSheetName && ((A.current = null), ce(n));
    }, [b, ce, le, t]),
    (0, q.useEffect)(
      () => () => {
        A.current = null;
      },
      [e, n?.annotation?.artifactKey],
    ),
    (0, q.useEffect)(() => {
      M <= 0 || Ae();
    }, [M, Ae]),
    (0, q.useEffect)(() => {
      let e = s.current,
        t = c.current;
      if (!e || !t) return;
      let n = S && i ? `crosshair` : b && r && !C ? Ln : ``;
      return (
        (e.style.cursor = n),
        (t.style.cursor = n),
        () => {
          (e.style.cursor === n && (e.style.cursor = ``),
            t.style.cursor === n && (t.style.cursor = ``));
        }
      );
    }, [C, b, r, c, S, i, s]),
    (0, q.useEffect)(
      () => () => {
        (ve(), we());
      },
      [ve, we],
    ));
  let Ie = (0, q.useMemo)(
      () =>
        C?.target
          ? cr({
              target: C.target,
              camera: p,
              freezePanes: t.freezePanes,
              columnWidths: t.columnWidths,
              rowHeights: t.rowHeights,
              sheet: { mergedCells: h },
            })
          : null,
      [C?.target, p, h, t.columnWidths, t.freezePanes, t.rowHeights],
    ),
    Le = (0, q.useMemo)(
      () =>
        C?.target
          ? tr({
              target: C.target,
              camera: p,
              freezePanes: t.freezePanes,
              columnWidths: t.columnWidths,
              rowHeights: t.rowHeights,
              sheet: { mergedCells: h },
            })
          : null,
      [C?.target, p, h, t.columnWidths, t.freezePanes, t.rowHeights],
    ),
    Re = (0, q.useMemo)(
      () =>
        me
          .map((e) => ({
            annotation: e,
            stackIndex: he.get(e.annotationId) ?? 0,
            bounds: cr({
              target: e.target,
              camera: p,
              freezePanes: t.freezePanes,
              columnWidths: t.columnWidths,
              rowHeights: t.rowHeights,
              sheet: { mergedCells: h },
            }),
            anchorBounds: tr({
              target: e.target,
              camera: p,
              freezePanes: t.freezePanes,
              columnWidths: t.columnWidths,
              rowHeights: t.rowHeights,
              sheet: { mergedCells: h },
            }),
          }))
          .filter((e) => e.bounds != null && e.anchorBounds != null),
      [Le, Ie, he, p, h, me, t.columnWidths, t.freezePanes, t.rowHeights],
    ),
    ze = (0, q.useMemo)(
      () =>
        ae == null || C?.mode === `edit`
          ? null
          : (Re.find(({ annotation: e }) => e.annotationId === ae) ?? null),
      [C?.mode, ae, Re],
    ),
    Be = (0, q.useMemo)(
      () => (!b || !r || C?.mode !== `create` ? null : Gn(le, C.target)),
      [C, b, r, le],
    );
  return {
    annotationEnabled: b,
    renderCommentThread: x,
    drawingEnabled: S,
    annotationEditorSession: C,
    annotationEditorSessionRef: T,
    annotationEditorLightDismissArmedRef: O,
    annotationEditorRef: D,
    annotationEditorAnchorBounds: Le,
    annotationHighlightBounds: Ie,
    annotationRangeHighlights: (0, q.useMemo)(() => {
      let e = C?.mode === `edit` ? C.annotationId : null,
        n = [];
      for (let t of me)
        t.annotationId === e ||
          t.target.type !== `workbook-range` ||
          n.push(qn({ rect: t.target.rect, color: m }));
      return (
        C?.target.type === `workbook-range` &&
          !t.isDraggingSelection &&
          n.push(qn({ rect: C.target.rect, color: m })),
        n
      );
    }, [C, m, t.isDraggingSelection, me]),
    addPendingAnnotation: H,
    pendingAnnotationMarkers: Re,
    hoveredAnnotationMarker: ze,
    draftAnnotationMarkerNumber: Be,
    activeDrawingStroke: te,
    activeDrawingStrokeRef: F,
    draftDrawingStrokes: ne,
    visiblePendingDrawings: ge,
    closeAnnotationEditor: Se,
    blockAnnotationEditorTransitionWhileDictationBusy: B,
    requestAnnotationEditorDismiss: Ce,
    deleteAnnotationEditor: Fe,
    submitAnnotationEditor: Ne,
    submitSelectionAskChat: Pe,
    beginDrawingSession: ke,
    cleanupDrawingSession: we,
    queueAnnotationDraftOpen: je,
    openCreateAnnotationEditor: Me,
    projectWorkbookDrawingPointToViewport: Ee,
    handleAnnotationEditorChange: (0, q.useCallback)((e) => {
      O.current = !1;
      let t = T.current;
      if (!t) return;
      let n = { ...t, body: e };
      ((T.current = n), w(n));
    }, []),
    handleAnnotationEditorDictationBusyChange: xe,
    getAnnotationMarkerMouseEnterHandler: (0, q.useCallback)(
      (e) => () => {
        z(e);
      },
      [],
    ),
    getAnnotationMarkerMouseLeaveHandler: (0, q.useCallback)(
      (e) => () => {
        z((t) => (t === e ? null : t));
      },
      [],
    ),
    getAnnotationMarkerFocusHandler: (0, q.useCallback)(
      (e) => () => {
        z(e);
      },
      [],
    ),
    getAnnotationMarkerBlurHandler: (0, q.useCallback)(
      (e) => () => {
        z((t) => (t === e ? null : t));
      },
      [],
    ),
    getAnnotationMarkerClickHandler: (0, q.useCallback)(
      (e) => () => {
        n?.annotation?.defaultCreateSubmitMode !== `direct` && V(e);
      },
      [V, n?.annotation?.defaultCreateSubmitMode],
    ),
  };
}
var q,
  Fa = e(() => {
    ((q = t(n())), U(), vt(), xn(), Zn(), Je());
  });
function Ia(e) {
  return e.snapshot.editorMode === `grid` && !e.inputFocused;
}
function La(e) {
  return e.selectedFloatingElement?.kind === `xlsx-chart`;
}
function Ra(e) {
  if (typeof document > `u` || !e) return !1;
  let t = document.activeElement;
  return t != null && e.contains(t);
}
function za(e) {
  return (
    e instanceof Element &&
    e.closest(
      `input, textarea, [role='textbox'], [contenteditable]:not([contenteditable='false'])`,
    ) != null
  );
}
function Ba(e) {
  return (
    Ia({ snapshot: e.snapshot, inputFocused: e.inputFocused }) && Ra(e.container) && !za(e.target)
  );
}
function Va(e) {
  return e.clipboardData;
}
function Ha(e) {
  let t = Va(e);
  if (!t) return null;
  let n = t.getData(`text/html`),
    r = t.getData(`text/plain`),
    i = t.getData(`application/x-oai-popcorn-selection+json`) || t.getData(`application/json`);
  if (i)
    try {
      let e = JSON.parse(i);
      if (Array.isArray(e.values) && Array.isArray(e.formulas))
        return { ...e, html: n || e.html, plainText: r || e.plainText };
    } catch {}
  return Xa && r === Xa.plainText && (!n || n === Xa.html)
    ? Xa.payload
    : n
      ? Qn(n, r || void 0)
      : r
        ? Kn(r)
        : null;
}
async function Ua(e) {
  let t = Va(e);
  if (!t) return null;
  let n = t.items;
  if (n && n.length > 0)
    for (let e of Array.from(n)) {
      if (e.kind !== `file` || !e.type.startsWith(`image/`)) continue;
      let t = e.getAsFile();
      if (t) return { bytes: await t.arrayBuffer(), contentType: t.type || `image/png` };
    }
  let r = t.files;
  if (r && r.length > 0) {
    for (let e of Array.from(r))
      if (e.type.startsWith(`image/`))
        return { bytes: await e.arrayBuffer(), contentType: e.type || `image/png` };
  }
  return null;
}
async function Wa(e) {
  let t = await e.requestSelectedFloatingRasterPayload();
  if (
    !t ||
    typeof navigator > `u` ||
    !navigator.clipboard ||
    typeof navigator.clipboard.write != `function` ||
    typeof ClipboardItem > `u`
  )
    return !1;
  let n = new Blob([t.bytes], { type: t.contentType || `image/png` });
  return (await navigator.clipboard.write([new ClipboardItem({ [n.type || `image/png`]: n })]), !0);
}
function Ga(e) {
  let t = e.html ?? ir(e.values),
    { html: n, ...r } = e,
    i = {
      "text/plain": new Blob([e.plainText], { type: `text/plain` }),
      "text/html": new Blob([t], { type: `text/html` }),
    };
  return {
    html: t,
    baseData: i,
    richData: {
      ...i,
      [Ya]: new Blob([JSON.stringify(r)], { type: Ya }),
      "application/json": new Blob([JSON.stringify(r)], { type: `application/json` }),
    },
  };
}
async function Ka(e, t) {
  let n = await e.requestClipboardPayload(t);
  if (!n) return !1;
  let { html: r, baseData: i, richData: a } = Ga(n);
  if (
    ((Xa = { payload: n, html: r, plainText: n.plainText }),
    typeof navigator < `u` &&
      navigator.clipboard &&
      typeof navigator.clipboard.write == `function` &&
      typeof ClipboardItem < `u`)
  )
    try {
      return (await navigator.clipboard.write([new ClipboardItem(a)]), !0);
    } catch {
      try {
        return (await navigator.clipboard.write([new ClipboardItem(i)]), !0);
      } catch {}
    }
  return typeof navigator < `u` &&
    navigator.clipboard &&
    typeof navigator.clipboard.writeText == `function`
    ? (await navigator.clipboard.writeText(n.plainText), !0)
    : !1;
}
function qa(e) {
  let { controller: t, snapshot: n, inputFocused: r, containerRef: i } = e,
    a = (0, Ja.useCallback)(
      (e, a) =>
        Ba({ container: i.current, inputFocused: r, snapshot: n, target: e.target })
          ? n.selectedFloatingElement
            ? La(n) && a === `copy`
              ? (e.preventDefault(), e.stopPropagation(), Wa(t).catch(() => {}), !0)
              : !1
            : (e.preventDefault(), e.stopPropagation(), Ka(t, a).catch(() => {}), !0)
          : !1,
      [i, t, r, n],
    ),
    o = (0, Ja.useCallback)(
      (e) => {
        a(e, `copy`);
      },
      [a],
    ),
    s = (0, Ja.useCallback)(
      (e) => {
        a(e, `cut`);
      },
      [a],
    ),
    c = (0, Ja.useCallback)(
      (e) => {
        Ba({ container: i.current, inputFocused: r, snapshot: n, target: e.target }) &&
          (e.preventDefault(),
          e.stopPropagation(),
          (async () => {
            let n = await Ua(e);
            if (n) {
              t.pasteRasterClipboardData(n);
              return;
            }
            let r = Ha(e);
            r && t.dispatch({ type: `paste-clipboard-data`, clipboard: r });
          })().catch(() => {}));
      },
      [i, t, r, n],
    );
  return (
    (0, Ja.useEffect)(() => {
      let e = (e) => {
          a(e, `copy`);
        },
        o = (e) => {
          a(e, `cut`);
        },
        s = (e) => {
          Ba({ container: i.current, inputFocused: r, snapshot: n, target: e.target }) &&
            (e.preventDefault(),
            e.stopPropagation(),
            (async () => {
              let n = await Ua(e);
              if (n) {
                t.pasteRasterClipboardData(n);
                return;
              }
              let r = Ha(e);
              r && t.dispatch({ type: `paste-clipboard-data`, clipboard: r });
            })().catch(() => {}));
        };
      return (
        window.addEventListener(`copy`, e, !0),
        window.addEventListener(`cut`, o, !0),
        window.addEventListener(`paste`, s, !0),
        () => {
          (window.removeEventListener(`copy`, e, !0),
            window.removeEventListener(`cut`, o, !0),
            window.removeEventListener(`paste`, s, !0));
        }
      );
    }, [i, t, r, n, a]),
    { onCopy: o, onCut: s, onPaste: c }
  );
}
var Ja,
  Ya,
  Xa,
  Za = e(() => {
    ((Ja = t(n())), nr(), (Ya = `application/x-oai-popcorn-selection+json`), (Xa = null));
  });
function Qa(e) {
  let { selectionRect: t, colOffsets: n, rowOffsets: r } = e;
  if (!t || n.length === 0 || r.length === 0) return null;
  let i = Math.min(t.r1, t.r2),
    a = Math.max(t.r1, t.r2),
    o = Math.min(t.c1, t.c2),
    s = Math.max(t.c1, t.c2);
  if (i < 0 || o < 0 || a + 1 >= r.length || s + 1 >= n.length) return null;
  let c = 40 + (n[o] ?? 0),
    l = 20 + (r[i] ?? 0),
    u = (n[s + 1] ?? 0) - (n[o] ?? 0),
    d = (r[a + 1] ?? 0) - (r[i] ?? 0);
  return !Number.isFinite(u) || !Number.isFinite(d)
    ? null
    : { left: c, top: l, width: u, height: d };
}
function $a(e) {
  return (0, eo.useMemo)(() => Qa(e), [e.colOffsets, e.rowOffsets, e.selectionRect]);
}
var eo,
  to = e(() => {
    (A(), (eo = t(n())));
  });
function no(e, t) {
  return e ? xe(e, t.clientX, t.clientY) : { x: t.clientX, y: t.clientY };
}
function ro(e) {
  let t = (0, io.useRef)(null),
    [n, r] = (0, io.useState)(0),
    i = (0, io.useRef)(null),
    a = (0, io.useMemo)(
      () =>
        new ze(
          {
            onPointerDown: (t, n) => {
              e.controller.textPointerDown(t, n);
            },
            onPointerMove: (t) => {
              e.controller.textPointerMove(t);
            },
            onPointerUp: () => {
              e.controller.textPointerUp();
            },
            onSelectWordAtPoint: (t) => {
              e.controller.textSelectWordAtPoint(t);
            },
            onSelectParagraphAtPoint: (t) => {
              e.controller.textSelectParagraphAtPoint(t);
            },
            onActivateBlockEnd: (t) => {
              e.controller.textActivateFloatingShapeText(t);
            },
            onClear: () => {
              e.controller.textClearFloatingShapeText();
            },
            onKeyDown: (t) => {
              e.controller.textHandleKeyDown(t);
            },
            onBeforeInput: (t) => {
              e.controller.textHandleBeforeInput(t);
            },
            onInput: (t) => {
              e.controller.textHandleInput(t);
            },
            onCompositionEnd: (t) => {
              e.controller.textHandleCompositionEnd(t);
            },
          },
          {
            onChange: () => {
              r((e) => e + 1);
            },
          },
        ),
      [e.controller],
    ),
    o = (0, io.useCallback)(() => {
      let n = t.current,
        r = e.canvasRef.current,
        i = e.hostRef.current;
      if (!n) return;
      let o = r?.clientWidth ?? i?.clientWidth ?? 0,
        s = r?.clientHeight ?? i?.clientHeight ?? 0;
      if (o <= 0 || s <= 0) return;
      let c = window.devicePixelRatio || 1;
      ((n.width = Math.max(1, Math.round(o * c))),
        (n.height = Math.max(1, Math.round(s * c))),
        (n.style.width = `${o}px`),
        (n.style.height = `${s}px`));
      let l = n.getContext(`2d`);
      l && (l.setTransform(c, 0, 0, c, 0, 0), l.clearRect(0, 0, o, s), a.drawOverlay(l));
    }, [e.canvasRef, e.hostRef, a]);
  ((0, io.useEffect)(
    () => (
      a.attachContainer(e.hostRef.current),
      () => {
        (i.current?.(), a.dispose());
      }
    ),
    [e.hostRef, a],
  ),
    (0, io.useEffect)(() => {
      a.updateState({
        state: e.isEditing ? e.editorState.textEditState : null,
        blocks: e.editorState.textLayoutBlocks,
      });
    }, [e.editorState.textEditState, e.editorState.textLayoutBlocks, e.isEditing, a]),
    (0, io.useEffect)(() => {
      e.isEditing || (i.current?.(), a.clear());
    }, [e.isEditing, a]),
    (0, io.useEffect)(() => {
      o();
    }, [e.editorState.textEditState, e.editorState.textLayoutBlocks, o, n]),
    (0, io.useEffect)(() => {
      let t = e.canvasRef.current,
        n = e.hostRef.current,
        r = t ?? n;
      if (!r || typeof ResizeObserver > `u`) return;
      let i = new ResizeObserver(() => {
        o();
      });
      return (
        i.observe(r),
        () => {
          i.disconnect();
        }
      );
    }, [e.canvasRef, e.hostRef, o]));
  let s = (0, io.useCallback)(
      (e) => {
        ((t.current = e), o());
      },
      [o],
    ),
    c = (0, io.useCallback)(() => {
      i.current?.();
      let t = (t) => {
          a.pointerMove(no(e.canvasRef.current, t));
        },
        n = () => {
          (a.pointerUp(), i.current?.());
        };
      ((i.current = () => {
        (window.removeEventListener(`mousemove`, t),
          window.removeEventListener(`mouseup`, n),
          (i.current = null));
      }),
        window.addEventListener(`mousemove`, t),
        window.addEventListener(`mouseup`, n));
    }, [e.canvasRef, a]),
    l = (0, io.useCallback)(
      (t) => {
        if (!e.isEditing || !a.isActive()) return !1;
        let n = no(e.canvasRef.current, t);
        return (
          t.detail >= 3
            ? a.selectParagraphAtPoint(n)
            : t.detail === 2
              ? a.selectWordAtPoint(n)
              : a.tryPointerDown(n, { shiftKey: t.shiftKey })
        )
          ? (t.preventDefault(), t.stopPropagation(), c(), !0)
          : (a.clear(), !1);
      },
      [e.canvasRef, c, a],
    ),
    u = (0, io.useCallback)(
      (t) =>
        e.isEditing
          ? a.isActive()
            ? (t.preventDefault(), t.stopPropagation(), !0)
            : e.selectedFloatingElement?.kind !== `xlsx-shape` ||
                !a.activateBlockEnd(e.selectedFloatingElement.id)
              ? !1
              : (t.preventDefault(), t.stopPropagation(), !0)
          : !1,
      [e.isEditing, e.selectedFloatingElement, a],
    );
  return {
    isActive: a.isActive(),
    clear: () => {
      a.clear();
    },
    handleCanvasMouseDown: l,
    handleCanvasDoubleClick: u,
    setTextOverlayCanvasNode: s,
  };
}
var io,
  ao = e(() => {
    ((io = t(n())), Oe(), Me());
  });
function oo(e) {
  if (
    e.next.activeSheetName !== e.previous.activeSheetName ||
    e.next.isDraggingSelection ||
    !so(e.previous, e.next)
  )
    return null;
  if (co(e.next.selectionRect))
    return { type: `cell`, row: e.next.activeCell.row, col: e.next.activeCell.col };
  let t = uo({
    previousRect: e.previous.selectionRect,
    nextRect: e.next.selectionRect,
    activeCell: e.next.activeCell,
  });
  return t
    ? { type: `cell`, row: t.row, col: t.col }
    : {
        type: `range`,
        selectionRect: { ...e.next.selectionRect },
        trailingContextRows: 1,
        trailingContextCols: 1,
      };
}
function so(e, t) {
  return (
    e.selectedAddress !== t.selectedAddress ||
    e.activeCell.row !== t.activeCell.row ||
    e.activeCell.col !== t.activeCell.col ||
    e.selectionRect.r1 !== t.selectionRect.r1 ||
    e.selectionRect.c1 !== t.selectionRect.c1 ||
    e.selectionRect.r2 !== t.selectionRect.r2 ||
    e.selectionRect.c2 !== t.selectionRect.c2
  );
}
function co(e) {
  return e.r1 === e.r2 && e.c1 === e.c2;
}
function lo(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function uo(e) {
  let t = [];
  if (
    (e.previousRect.r1 !== e.nextRect.r1 && t.push(`top`),
    e.previousRect.r2 !== e.nextRect.r2 && t.push(`bottom`),
    e.previousRect.c1 !== e.nextRect.c1 && t.push(`left`),
    e.previousRect.c2 !== e.nextRect.c2 && t.push(`right`),
    t.length !== 1)
  )
    return null;
  switch (t[0]) {
    case `top`:
      return { row: e.nextRect.r1, col: lo(e.activeCell.col, e.nextRect.c1, e.nextRect.c2) };
    case `bottom`:
      return { row: e.nextRect.r2, col: lo(e.activeCell.col, e.nextRect.c1, e.nextRect.c2) };
    case `left`:
      return { row: lo(e.activeCell.row, e.nextRect.r1, e.nextRect.r2), col: e.nextRect.c1 };
    case `right`:
      return { row: lo(e.activeCell.row, e.nextRect.r1, e.nextRect.r2), col: e.nextRect.c2 };
    default:
      return null;
  }
}
var fo = e(() => {});
function po(e) {
  let t = (0, mo.useRef)({
    activeSheetName: e.snapshot.activeSheetName,
    activeCell: { ...e.snapshot.activeCell },
    selectedAddress: e.snapshot.selectedAddress,
    selectionRect: { ...e.snapshot.selectionRect },
    isDraggingSelection: e.snapshot.isDraggingSelection,
  });
  (0, mo.useEffect)(() => {
    let n = {
        activeSheetName: e.snapshot.activeSheetName,
        activeCell: { ...e.snapshot.activeCell },
        selectedAddress: e.snapshot.selectedAddress,
        selectionRect: { ...e.snapshot.selectionRect },
        isDraggingSelection: e.snapshot.isDraggingSelection,
      },
      r = t.current;
    if (((t.current = n), e.suppressReveal || e.snapshot.selectedFloatingElement)) return;
    let i = oo({ previous: r, next: n });
    if (i) {
      if (i.type === `cell`) {
        e.runtime.revealCell(i.row, i.col);
        return;
      }
      e.runtime.revealSelectionRect(i.selectionRect, {
        trailingContextRows: i.trailingContextRows,
        trailingContextCols: i.trailingContextCols,
      });
    }
  }, [
    e.runtime,
    e.snapshot.activeCell.col,
    e.snapshot.activeCell.row,
    e.snapshot.activeSheetName,
    e.snapshot.isDraggingSelection,
    e.snapshot.selectedAddress,
    e.snapshot.selectedFloatingElement,
    e.snapshot.selectionRect.c1,
    e.snapshot.selectionRect.c2,
    e.snapshot.selectionRect.r1,
    e.snapshot.selectionRect.r2,
    e.suppressReveal,
  ]);
}
var mo,
  ho = e(() => {
    ((mo = t(n())), fo());
  });
function go(e, t, n) {
  if (n <= 0 || e <= 0) return 0;
  if (e >= (t[n] ?? 0)) return n - 1;
  let r = 0;
  for (; r < n && (t[r + 1] ?? 0) <= e;) r += 1;
  return Math.max(0, Math.min(r, n - 1));
}
function _o() {
  let e = { width: 0, height: 0 },
    t = new Set();
  return {
    subscribe(e) {
      return (
        t.add(e),
        () => {
          t.delete(e);
        }
      );
    },
    getSnapshot() {
      return e;
    },
    setSnapshot(n) {
      if (!(e.width === n.width && e.height === n.height)) {
        e = n;
        for (let e of t) e();
      }
    },
  };
}
function vo(e, t, n) {
  return e >= n.left && e <= n.left + n.width && t >= n.top && t <= n.top + n.height;
}
function yo(e, t) {
  return t.row < e.row
    ? t.col < e.col
      ? `top-left`
      : `top-right`
    : t.col < e.col
      ? `bottom-left`
      : `bottom-right`;
}
function bo({
  controller: e,
  snapshot: t,
  accentFill: n,
  accentStroke: r,
  inputFocused: i,
  formulaHighlightRects: a = [],
  onCellEditorFocus: o,
  onCellEditorBlur: s,
  onCellEditorChange: c,
  onInteractionAttempt: l,
  onHyperlinkClick: u,
  onSelectedCommentThreadChange: d,
  viewportOverlays: f = [],
  findRequestToken: p = 0,
  artifactSearchEnabled: m = !0,
  isEditing: h = !0,
  annotationMode: g = !1,
  onAnnotationModeChange: _,
  onAnnotationDictationBusyChange: v,
  drawingMode: y = !1,
  onDrawingModeChange: b,
  drawingCommitToken: x = 0,
  reviewTools: S,
  annotationsEnabled: C = !0,
  drawingAnnotationsEnabled: w = !0,
  commentThreadsEnabled: T = !0,
  bottomScrollReservePx: E = 0,
  manualEditUiEnabled: D = !1,
  onUserSelection: O,
  panelControls: k,
  portalContainerElement: A,
}) {
  let ee = ve(`viewport`),
    j = (0, J.useRef)(null),
    [M, N] = (0, J.useState)(null),
    te = (0, J.useRef)(null);
  te.current ||= _o();
  let P = te.current,
    F = (0, J.useSyncExternalStore)(P.subscribe, P.getSnapshot, P.getSnapshot),
    ne = (0, J.useRef)(null),
    re = (0, J.useRef)(null),
    I = (0, J.useRef)(null),
    L = (0, J.useRef)(null),
    R = (0, J.useRef)(null),
    ie = (0, J.useRef)(!1),
    ae = (0, J.useRef)(null),
    z = (0, J.useRef)(!1),
    oe = (0, J.useRef)(new Set()),
    se = (0, J.useRef)(null),
    B = (0, J.useSyncExternalStore)(
      (e) => {
        let t = M?.ownerDocument.defaultView;
        if (!M || !t?.MutationObserver) return () => {};
        let n = new t.MutationObserver(e);
        return (
          n.observe(M.ownerDocument.documentElement, {
            attributeFilter: [`class`, `data-theme`, `style`],
            attributes: !0,
          }),
          n.observe(M, { attributeFilter: [`class`, `data-theme`, `style`], attributes: !0 }),
          () => {
            n.disconnect();
          }
        );
      },
      () => Ot(M),
      () => Ot(null),
    ),
    ce = (0, J.useMemo)(() => (Un(n) ? jt(B) : n), [n, B]),
    V = (0, J.useMemo)(() => (Un(r) ? Ft(B) : r), [r, B]),
    le = (0, J.useRef)(null);
  le.current ||= new Kr({ controller: e, accentStroke: V, isEditing: h, bottomScrollReservePx: E });
  let H = le.current,
    ue = (0, J.useCallback)(() => H.getCamera(), [H]),
    de = (0, J.useCallback)((e) => H.subscribeToCameraChanges(e), [H]),
    fe = (0, J.useRef)(a),
    pe = (0, J.useRef)(t.selectedFloatingElement?.logicalBounds ?? null),
    { updateOverlayTransform: me } = Fr({ getCamera: ue, overlayHtmlLayerRef: I }),
    [he, ge] = (0, J.useState)(!1),
    [_e, ye] = (0, J.useState)(!1),
    [xe, Se] = (0, J.useState)(``),
    [Ce, we] = (0, J.useState)(0),
    [Te, Ee] = (0, J.useState)(0),
    [De, Oe] = (0, J.useState)(!1),
    [ke, Ae] = (0, J.useState)({ matches: [], total: 0 }),
    [je, Me] = (0, J.useState)(null),
    [Ne, Pe] = (0, J.useState)(!1),
    [Fe, Ie] = (0, J.useState)(null),
    [Le, Re] = (0, J.useState)(`bottom-right`),
    ze = (0, J.useRef)(null),
    Be = (0, J.useRef)(null),
    Ve = (0, J.useRef)(!1),
    He = (0, J.useRef)(null),
    Ue = (0, J.useSyncExternalStore)(
      (t) => e.subscribe(t),
      () => e.getState(),
      () => e.getState(),
    ),
    We = (0, J.useRef)(Ue.overlays.dataValidationTargets),
    Ge = (0, J.useRef)(Ue.overlays.hyperlinkTargets ?? []),
    Ke = (0, J.useRef)(Ue.floating.chartHoverTargets);
  (0, J.useEffect)(() => {
    if (!be() || typeof window > `u`) return;
    let t = e,
      n = () => {
        let e = ne.current;
        if (!e)
          return {
            canvasClientSize: null,
            canvasRectSize: null,
            canvasRectStretch: null,
            canvasBitmapSize: null,
            canvasBitmapScale: null,
          };
        let t = e.getBoundingClientRect(),
          n = e.clientWidth,
          r = e.clientHeight,
          i = window.devicePixelRatio || 1,
          a = Math.max(1, Math.round(n * i)),
          o = Math.max(1, Math.round(r * i));
        return {
          canvasClientSize: { width: n, height: r },
          canvasRectSize: { width: t.width, height: t.height },
          canvasRectStretch:
            n > 0 && r > 0
              ? {
                  scaleX: t.width / n,
                  scaleY: t.height / r,
                  deltaWidth: t.width - n,
                  deltaHeight: t.height - r,
                }
              : null,
          canvasBitmapSize: { width: e.width, height: e.height },
          canvasBitmapScale:
            a > 0 && o > 0
              ? {
                  scaleX: e.width / a,
                  scaleY: e.height / o,
                  deltaWidth: e.width - a,
                  deltaHeight: e.height - o,
                }
              : null,
        };
      },
      r = {
        getDataValidationTargets: () =>
          We.current.map((e) => ({ ...e, cssBounds: { ...e.cssBounds } })),
        getCamera: () => ({ ...H.getCamera() }),
        getResizeMetrics: () => ({
          ...n(),
          controllerResizeState: t.getResizeDebugState?.() ?? null,
        }),
        resetResizeMetrics: () => {
          t.resetResizeDebugState?.();
        },
        openDataValidationAtAddress: (t) => {
          (e.setSelectedAddress(t), Me(t));
          try {
            j.current?.focus({ preventScroll: !0 });
          } catch {}
        },
      };
    return (
      (window.__POPCORN_VIEWPORT_DEBUG__ = r),
      () => {
        window.__POPCORN_VIEWPORT_DEBUG__ === r && delete window.__POPCORN_VIEWPORT_DEBUG__;
      }
    );
  }, [e, H]);
  let Je = (0, J.useSyncExternalStore)(de, ue, ue),
    Ye = Ue.viewport.camera;
  (0, J.useEffect)(() => {
    H.setCamera(Ye);
  }, [Ye.k, Ye.x, Ye.y, H]);
  let Xe = e.getSelectionSummarySource(),
    $e = (0, J.useSyncExternalStore)(Xe.subscribe, Xe.getSnapshot, Xe.getSnapshot),
    tt = (0, J.useMemo)(() => {
      if (!h || t.editorMode !== `editCell`) return null;
      let e = j.current,
        n = rt(Je);
      return {
        row: t.activeCell.row,
        col: t.activeCell.col,
        address: t.selectedAddress,
        initialValue: t.formulaInput,
        viewport: {
          scrollLeft: n.left,
          scrollTop: n.top,
          width: e?.clientWidth ?? 0,
          height: e?.clientHeight ?? 0,
        },
      };
    }, [Je, t.activeCell.col, t.activeCell.row, t.editorMode, t.formulaInput, t.selectedAddress]),
    nt = (0, J.useMemo)(() => {
      let e = [0];
      for (let n = 0; n < t.columnWidths.length; n += 1)
        e[n + 1] = (e[n] ?? 0) + (t.columnWidths[n] ?? 0);
      return e;
    }, [t.columnWidths]),
    at = (0, J.useMemo)(() => {
      let e = [0];
      for (let n = 0; n < t.rowHeights.length; n += 1)
        e[n + 1] = (e[n] ?? 0) + (t.rowHeights[n] ?? 0);
      return e;
    }, [t.rowHeights]),
    ot = $a({ selectionRect: t.selectionRect, colOffsets: nt, rowOffsets: at });
  po({ snapshot: t, runtime: H, suppressReveal: !!t.selectedFloatingElement });
  let ct = Ue.overlays,
    U = Ue.floating.selectedFloatingElement,
    ut = (0, J.useMemo)(() => {
      let e = 40 * Je.k,
        t = 20 * Je.k,
        n = Math.max(0, F.width - e),
        r = Math.max(0, F.height - t);
      return n <= 0 || r <= 0 ? null : { left: e, top: t, width: n, height: r };
    }, [Je.k, F.height, F.width]),
    dt = (0, J.useMemo)(
      () => sr({ snapshot: t, selectionSummary: $e, selectedFloatingElement: U }),
      [$e, U, t],
    ),
    {
      annotationEnabled: ft,
      renderCommentThread: pt,
      drawingEnabled: mt,
      annotationEditorSession: W,
      annotationEditorSessionRef: ht,
      annotationEditorLightDismissArmedRef: gt,
      annotationEditorRef: _t,
      annotationEditorAnchorBounds: vt,
      annotationHighlightBounds: yt,
      annotationRangeHighlights: bt,
      addPendingAnnotation: xt,
      pendingAnnotationMarkers: St,
      hoveredAnnotationMarker: Ct,
      draftAnnotationMarkerNumber: Tt,
      activeDrawingStroke: Dt,
      activeDrawingStrokeRef: kt,
      draftDrawingStrokes: At,
      visiblePendingDrawings: Mt,
      closeAnnotationEditor: Nt,
      blockAnnotationEditorTransitionWhileDictationBusy: Pt,
      requestAnnotationEditorDismiss: It,
      deleteAnnotationEditor: Lt,
      submitAnnotationEditor: Rt,
      submitSelectionAskChat: zt,
      beginDrawingSession: Bt,
      cleanupDrawingSession: Vt,
      queueAnnotationDraftOpen: Ht,
      openCreateAnnotationEditor: Ut,
      projectWorkbookDrawingPointToViewport: Wt,
      handleAnnotationEditorChange: Kt,
      handleAnnotationEditorDictationBusyChange: qt,
      getAnnotationMarkerMouseEnterHandler: Jt,
      getAnnotationMarkerMouseLeaveHandler: Yt,
      getAnnotationMarkerFocusHandler: Xt,
      getAnnotationMarkerBlurHandler: Zt,
      getAnnotationMarkerClickHandler: Qt,
    } = Pa({
      controller: e,
      snapshot: t,
      reviewTools: S,
      annotationMode: g,
      drawingMode: y,
      drawingCommitToken: x,
      runtime: H,
      hostRef: j,
      canvasRef: ne,
      overlayCanvasRef: re,
      selectionSummary: $e,
      colOffsets: nt,
      rowOffsets: at,
      camera: Je,
      annotationRangeHighlightColor: V,
      mergedCells: ct.mergedCells,
      annotationsEnabled: C,
      drawingAnnotationsEnabled: w,
      onAnnotationDictationBusyChange: v,
      commentThreadsEnabled: T,
    }),
    $t =
      W?.mode === `edit`
        ? (St.find(({ annotation: e }) => e.annotationId === W.annotationId)?.stackIndex ?? 0)
        : 0,
    en = (() => {
      if (pt != null) return St.map(({ anchorBounds: e, stackIndex: t }) => _n(e, `top-right`, t));
    })(),
    tn = (0, J.useMemo)(
      () => (!vt || $t === 0 ? vt : { ..._n(vt, `top-right`, $t), width: 0, height: 0 }),
      [vt, $t],
    ),
    nn = (0, J.useMemo)(
      () =>
        !m || ke.matches.length === 0
          ? null
          : (ke.matches[Math.max(0, Math.min(Te, ke.matches.length - 1))] ?? null),
      [Te, m, ke.matches],
    ),
    rn = (0, J.useMemo)(() => {
      if (!nn) return [];
      let e = $n(nn.address);
      return [
        {
          r1: e.row,
          c1: e.col,
          r2: e.row,
          c2: e.col,
          color: V,
          fillAlpha: 0.08,
          borderWidthPx: 1,
          borderRadiusPx: 0,
        },
      ];
    }, [V, nn]),
    an = (0, J.useMemo)(() => [...a, ...rn], [rn, a]),
    on = ro({
      controller: e,
      editorState: Ue.editor,
      selectedFloatingElement: U,
      hostRef: j,
      canvasRef: ne,
      isEditing: h,
    }),
    sn = (0, J.useMemo)(
      () => rr({ sheetName: t.activeSheetName, selectionSummary: $e }),
      [$e, t.activeSheetName],
    ),
    cn = U ? dt : sn,
    ln = (0, J.useMemo)(
      () =>
        cn
          ? cr({
              target: cn,
              camera: Je,
              freezePanes: t.freezePanes,
              columnWidths: t.columnWidths,
              rowHeights: t.rowHeights,
              sheet: { mergedCells: ct.mergedCells },
            })
          : null,
      [Je, ct.mergedCells, cn, t.columnWidths, t.freezePanes, t.rowHeights],
    ),
    un = (0, J.useMemo)(() => {
      if (!cn) return null;
      switch (cn.type) {
        case `workbook-range`:
          return `${cn.type}:${cn.sheetName}:${cn.rangeAddress}`;
        case `workbook-floating-element`:
          return `${cn.type}:${cn.sheetName}:${cn.elementId}`;
      }
    }, [cn]),
    fn =
      D &&
      he &&
      ft &&
      cn &&
      (S?.annotation?.onDirectSubmit != null || S?.annotation?.onSubmit != null)
        ? {
            defaultSubmitMode: S?.annotation?.defaultCreateSubmitMode,
            savedSubmitDisabled: S?.annotation?.savedSubmitDisabled,
            onAskForEditShown: S.annotation.onAskForEditShown,
            startAskChat: (e) => {
              S.annotation?.onStart?.(e, { annotationMode: g });
            },
            submitAskChat: (e, t, n) => {
              zt(cn, e, t, n);
            },
          }
        : null,
    mn = cn?.type === `workbook-range` && cn.rows === 1 && cn.cols === 1,
    hn =
      T && cn?.type === `workbook-range` && S?.annotation?.createCommentThreads === !0
        ? S.annotation.onCommentDraftOpen
        : void 0,
    gn = (() => {
      if (W?.mode === `create` && T && S?.annotation?.createCommentThreads === !0)
        return S.annotation;
    })(),
    vn = (() => {
      if (!(gn == null || W?.mode !== `create` || W.intent !== `comment`))
        return gn.nativeFileCommentPlaceholder ?? `Add a comment to the file`;
    })(),
    yn = (() => {
      if (!(W?.mode !== `create` || gn == null || gn.renderCommentComposer == null))
        return gn.renderCommentComposer({
          value: W.body,
          initialAssignedToChatGpt: W.intent !== `comment`,
          onChange: Kt,
          onCancel: Nt,
          onSubmit: ({ body: e, assignedToChatGpt: t, submitMode: n, submitSource: r }) => {
            Rt(n, r, e, void 0, t);
          },
        });
    })(),
    bn = (() => {
      if (W == null) return;
      if (W.mode === `edit`) return W.annotationId;
      let { intent: e, target: t } = W,
        n = t.type === `workbook-range` ? t.rangeAddress : t.elementId;
      return `${e}:${t.sheetName}:${t.type}:${n}`;
    })(),
    xn =
      !D &&
      ft &&
      !g &&
      !y &&
      !t.isDraggingSelection &&
      !i &&
      !on.isActive &&
      !tt &&
      !W &&
      (!mn || Fe === un);
  (0, J.useEffect)(() => {
    ((ze.current = null), Ie(null));
  }, [ft, t.activeSheetName]);
  let Sn = (0, J.useCallback)(() => {
      Be.current != null && (clearTimeout(Be.current), (Be.current = null));
    }, []),
    Cn = (0, J.useCallback)(() => {
      (Sn(),
        (Be.current = setTimeout(() => {
          ((Be.current = null), Pe(!1));
        }, xo)));
    }, [Sn]);
  ((0, J.useEffect)(
    () => () => {
      Sn();
    },
    [Sn],
  ),
    (0, J.useEffect)(() => {
      if (!xn || ln == null || un == null) {
        ((Ve.current = !1), Sn(), Pe(!1));
        return;
      }
      let e = He.current,
        t = e != null && vo(e.x, e.y, ln);
      if (((Ve.current = t), Pe(!0), t)) {
        Sn();
        return;
      }
      Cn();
    }, [Sn, Cn, ln, un, xn]),
    (0, J.useEffect)(() => {
      ((We.current = []), (Ge.current = []), (Ke.current = []), Me(null));
    }, [t.activeSheetName]),
    (0, J.useEffect)(() => {
      ((We.current = Ue.overlays.dataValidationTargets),
        (Ge.current = Ue.overlays.hyperlinkTargets ?? []),
        (Ke.current = Ue.floating.chartHoverTargets));
    }, [
      Ue.overlays.dataValidationTargets,
      Ue.overlays.hyperlinkTargets,
      Ue.floating.chartHoverTargets,
    ]),
    (0, J.useEffect)(() => {
      if (u) return e.subscribeHyperlinkClicks(u);
    }, [e, u]),
    (0, J.useEffect)(() => {
      if (ft)
        return e.subscribeCellClicks((e) => {
          if (e.sheetName !== t.activeSheetName) return;
          if (h && e.clicks === 2) {
            ((ze.current = null), Ie(null));
            return;
          }
          let n = `workbook-range:${e.sheetName}:${e.address}`;
          if (ze.current === n) {
            Ie(n);
            return;
          }
          ((ze.current = n), Ie(null));
        });
    }, [ft, e, h, t.activeSheetName]),
    (0, J.useEffect)(() => {
      H.setAccentFill(ce);
    }, [ce, H]),
    (0, J.useEffect)(() => {
      H.setAccentStroke(V);
    }, [V, H]),
    (0, J.useEffect)(() => {
      (H.setEditingEnabled(h), e.setEditingEnabled(h));
    }, [e, h, H]),
    (0, J.useEffect)(() => {
      H.setBottomScrollReservePx(E);
    }, [E, H]),
    (0, J.useEffect)(
      () => (
        H.setOverlaySelectionStateProvider(() => ({
          selectionStart: L.current,
          selectionEnd: R.current,
        })),
        () => {
          H.setOverlaySelectionStateProvider(null);
        }
      ),
      [H],
    ),
    (0, J.useEffect)(
      () => (
        H.setRangeHighlightsProvider(() => {
          let e = fe.current,
            t = bt.length > 0 ? [...e, ...bt] : e;
          if (!ft || !g) return t;
          let n = L.current,
            r = R.current;
          return n == null || r == null || (n.row === r.row && n.col === r.col)
            ? t
            : [
                ...t,
                qn({
                  rect: {
                    r1: Math.min(n.row, r.row),
                    c1: Math.min(n.col, r.col),
                    r2: Math.max(n.row, r.row),
                    c2: Math.max(n.col, r.col),
                  },
                  color: V,
                }),
              ];
        }),
        () => {
          H.setRangeHighlightsProvider(null);
        }
      ),
      [ft, g, bt, V, H, R, L],
    ),
    (0, J.useEffect)(() => {
      H.setSuppressCellSelection(ft && (g || W?.target.type === `workbook-range`));
    }, [W?.target.type, ft, g, H]),
    (0, J.useEffect)(
      () => (
        H.setDrawingSelectionProvider(() => pe.current),
        () => {
          H.setDrawingSelectionProvider(null);
        }
      ),
      [H],
    ),
    (0, J.useEffect)(
      () => (
        H.setDrawingOcclusionProvider(() => []),
        () => {
          H.setDrawingOcclusionProvider(null);
        }
      ),
      [H],
    ),
    (0, J.useEffect)(() => {
      ((fe.current = an), H.scheduleViewportRedraw());
    }, [H, an]),
    (0, J.useEffect)(() => {
      ((pe.current = t.selectedFloatingElement?.logicalBounds ?? null), H.scheduleViewportRedraw());
    }, [H, t.selectedFloatingElement]),
    qa({ controller: e, snapshot: t, inputFocused: i, containerRef: j }),
    (0, J.useEffect)(
      () => () => {
        (Vt(), H.destroy());
      },
      [Vt, H],
    ),
    (0, J.useEffect)(() => {
      !m || p <= 0 || (ye(!0), we((e) => e + 1));
    }, [m, p]),
    (0, J.useEffect)(() => {
      m || (ye(!1), Se(``), Ee(0), Ae({ matches: [], total: 0 }));
    }, [m]),
    (0, J.useEffect)(() => {
      Ee(0);
    }, [xe, t.activeSheetName, t.workbookVersion]),
    (0, J.useEffect)(() => {
      if (!m) {
        Ae({ matches: [], total: 0 });
        return;
      }
      let n = !1;
      return (
        Mr(e, xe, t.activeSheetName, { focusFirstMatch: !0 }).then((e) => {
          n || Ae({ matches: e.matches.map((e) => ({ address: e.address })), total: e.total });
        }),
        () => {
          n = !0;
        }
      );
    }, [e, m, xe, t.activeSheetName, t.workbookVersion]),
    (0, J.useEffect)(() => {
      Me(null);
    }, [t.activeSheetName, t.workbookVersion]));
  let Tn = (0, J.useCallback)(
      (t) => {
        let n = $n(t);
        e.focusCell(n.row, n.col);
      },
      [e],
    ),
    En = (0, J.useCallback)(
      (e) => {
        ke.matches.length !== 0 &&
          Ee((t) => {
            let n = ke.matches.length,
              r = (t + e + n) % n,
              i = ke.matches[r];
            return (i && Tn(i.address), r);
          });
      },
      [Tn, ke.matches],
    ),
    Dn = (0, J.useMemo)(
      () =>
        !m || !xe.trim()
          ? ``
          : ke.total === 0
            ? `No results`
            : `${Math.min(Te + 1, ke.total)} of ${ke.total}`,
      [Te, m, xe, ke.total],
    ),
    On = je == null ? null : (We.current.find((e) => e.addr === je) ?? null),
    kn = (0, J.useMemo)(() => {
      let e = Ue.overlays.activeDataValidation;
      return je && e?.address === je ? e : null;
    }, [je, Ue.overlays.activeDataValidation]);
  ((0, J.useEffect)(() => {
    me();
  }, [Je, me]),
    (0, J.useEffect)(() => {
      if (!M) {
        P.setSnapshot({ width: 0, height: 0 });
        return;
      }
      let e = () => {
        P.setSnapshot({ width: M.clientWidth, height: M.clientHeight });
      };
      if ((e(), typeof ResizeObserver > `u`)) return;
      let t = new ResizeObserver(() => {
        e();
      });
      return (
        t.observe(M),
        () => {
          t.disconnect();
        }
      );
    }, [M, P]),
    (0, J.useEffect)(() => {
      D || ge(!1);
    }, [D, t.selectionRect.r1, t.selectionRect.c1, t.selectionRect.r2, t.selectionRect.c2]),
    (0, J.useEffect)(() => {
      t.isDraggingSelection && ge(!1);
    }, [t.isDraggingSelection]),
    (0, J.useEffect)(() => {
      (tt || i) && ge(!1);
    }, [tt, i]));
  let An = (0, J.useCallback)(
      (e) => {
        ((j.current = e), N(e), H.attachHost(e));
      },
      [H],
    ),
    jn = (0, J.useCallback)(
      (e) => {
        ((ne.current = e), H.attachCanvas(e));
      },
      [H],
    ),
    Mn = (0, J.useCallback)(
      (e) => {
        ((re.current = e), H.attachOverlayCanvas(e));
      },
      [H],
    ),
    Nn = (0, J.useCallback)((e) => {
      if (!(e.metaKey || e.ctrlKey) || e.altKey) return !1;
      let t = e.key.toLowerCase();
      return t === `c` || t === `x` || t === `v`;
    }, []),
    Pn = (0, J.useCallback)(
      (n, r) => {
        try {
          j.current?.focus({ preventScroll: !0 });
        } catch {}
        n.button === 0 && Ie(null);
        let i = (e, t) => {
            let n = ne.current;
            return n ? Ze(n, e, t) : { screenX: e, screenY: t };
          },
          a = i(n.clientX, n.clientY),
          o = lt({
            camera: H.getCamera(),
            screenX: a.screenX,
            screenY: a.screenY,
            freezePanes: t.freezePanes,
            columnWidths: t.columnWidths,
            rowHeights: t.rowHeights,
          }),
          s = _a({
            logicalX: o.x,
            logicalY: o.y,
            zoom: H.getCamera().k,
            viewColWidths: t.columnWidths,
            rowHeights: t.rowHeights,
          }),
          c = !1,
          d = (e, n) => {
            let r = i(e, n),
              a = lt({
                camera: H.getCamera(),
                screenX: r.screenX,
                screenY: r.screenY,
                freezePanes: t.freezePanes,
                columnWidths: t.columnWidths,
                rowHeights: t.rowHeights,
              }),
              o = a.x >= 0 && a.x <= 40 && a.y >= 0 && a.y <= 20,
              s = a.y >= 0 && a.y <= 20 && a.x > 40,
              c = a.x >= 0 && a.x <= 40 && a.y > 20;
            if (
              o ||
              s ||
              c ||
              (h &&
                !U &&
                ur({
                  screenX: r.screenX,
                  screenY: r.screenY,
                  selectionRect: t.selectionRect,
                  colWidths: t.columnWidths,
                  rowHeights: t.rowHeights,
                  camera: H.getCamera(),
                  freezePanes: t.freezePanes,
                }))
            )
              return null;
            if (U) {
              let e = {
                left: U.logicalBounds.x,
                top: U.logicalBounds.y,
                width: U.logicalBounds.width,
                height: U.logicalBounds.height,
                rotation: U.rotation,
              };
              if (
                st(e, a) ||
                et(e, a, H.getCamera().k) != null ||
                (U.kind === `xlsx-shape` && it(e, a, H.getCamera().k))
              )
                return null;
            }
            return {
              row: go(a.y - 20, at, t.rowHeights.length),
              col: go(a.x - 40, nt, t.columnWidths.length),
            };
          },
          f = (e, n) => {
            let r = i(e, n),
              a = lt({
                camera: H.getCamera(),
                screenX: r.screenX,
                screenY: r.screenY,
                freezePanes: t.freezePanes,
                columnWidths: t.columnWidths,
                rowHeights: t.rowHeights,
              });
            return {
              row: go(a.y - 20, at, t.rowHeights.length),
              col: go(a.x - 40, nt, t.columnWidths.length),
            };
          },
          p = d(n.clientX, n.clientY);
        if (
          ((L.current = p),
          (R.current = p),
          (ie.current = !1),
          H.scheduleViewportRedraw(),
          e.handleViewportPointerDown({
            ...a,
            button: n.button,
            detail: n.detail,
            altKey: n.altKey,
            shiftKey: n.shiftKey,
            ctrlKey: n.ctrlKey,
            activateHyperlinks: u != null && !g && !y,
          }),
          r?.completeImmediately)
        ) {
          (e.handleViewportPointerUp({
            ...i(n.clientX, n.clientY),
            button: n.button,
            altKey: n.altKey,
            shiftKey: n.shiftKey,
            ctrlKey: n.ctrlKey,
          }),
            Re(`bottom-right`),
            (L.current = null),
            (R.current = null),
            (ie.current = !1),
            D && (O?.(), ge(!0)),
            H.scheduleViewportRedraw());
          return;
        }
        ((z.current = !0), Oe(!0));
        let m = fa({
            containerRef: j,
            getZoom: () => H.getCamera().k,
            panViewportBy: (e, t) => {
              H.panByScroll(e, t);
            },
            onAutoScrollFrame: (t, n) => {
              (L.current && ((R.current = f(t, n)), H.scheduleViewportRedraw()),
                e.handleViewportPointerMove({
                  ...i(t, n),
                  buttons: 1,
                  altKey: !1,
                  shiftKey: !1,
                  ctrlKey: !1,
                }));
            },
          }),
          _ = (t) => {
            if (!z.current) return;
            let r = i(t.clientX, t.clientY);
            (s &&
              n.button === 0 &&
              !c &&
              Math.abs(s.type === `col` ? r.screenX - a.screenX : r.screenY - a.screenY) >= 1 &&
              ((c = !0), l?.(s.type === `col` ? `resize-column` : `resize-row`)),
              L.current &&
                ((ie.current = !0),
                (R.current = f(t.clientX, t.clientY)),
                H.scheduleViewportRedraw()),
              m.updatePointer(t.clientX, t.clientY),
              e.handleViewportPointerMove({
                ...r,
                buttons: t.buttons,
                altKey: t.altKey,
                shiftKey: t.shiftKey,
                ctrlKey: t.ctrlKey,
              }));
          },
          v = () => {
            ((z.current = !1),
              Oe(!1),
              (L.current = null),
              (R.current = null),
              (ie.current = !1),
              H.scheduleViewportRedraw(),
              m.stop(),
              window.removeEventListener(`mousemove`, _),
              window.removeEventListener(`mouseup`, b),
              window.removeEventListener(`blur`, x));
          },
          b = (t) => {
            (ie.current && L.current != null && R.current != null
              ? Re(yo(L.current, R.current))
              : Re(`bottom-right`),
              e.handleViewportPointerUp({
                ...i(t.clientX, t.clientY),
                button: t.button,
                altKey: t.altKey,
                shiftKey: t.shiftKey,
                ctrlKey: t.ctrlKey,
              }),
              D && (O?.(), ge(!0)),
              v());
          },
          x = () => {
            (e.cancelViewportPointer(), v());
          };
        (window.addEventListener(`mousemove`, _),
          window.addEventListener(`mouseup`, b),
          window.addEventListener(`blur`, x));
      },
      [
        nt,
        e,
        g,
        y,
        h,
        D,
        l,
        u,
        O,
        at,
        H,
        U,
        ge,
        t.columnWidths,
        t.freezePanes,
        t.rowHeights,
        t.selectionRect,
      ],
    ),
    {
      cellEditorSessionKey: Fn,
      handleHostMouseDownCapture: In,
      handleHostKeyDown: Ln,
      handleHostMouseMove: Rn,
      handleCanvasMouseDown: zn,
      handleCanvasTouchTap: Bn,
      handleCanvasDoubleClick: Vn,
      handleCanvasMouseLeave: Hn,
      handleOverlayMouseDown: Wn,
      handleFindQueryChange: Gn,
      handleFindNavigatePrevious: Kn,
      handleFindNavigateNext: Jn,
      handleFindClose: Yn,
      handleSetTableFilterValues: Xn,
      handleSetTableSort: Zn,
      handleSetLogicalScroll: Qn,
      handleCellEditChange: er,
      handleCellEditCommit: tr,
      handleCellEditCancel: nr,
      handleDataValidationSelect: ir,
      handleDataValidationClose: ar,
      handleReplyToCommentThread: or,
      handleResolveCommentThread: lr,
      handleReopenCommentThread: dr,
      handleDeleteCommentThread: fr,
      handleToggleCommentReaction: pr,
      handleEditThreadComment: mr,
      handleDeleteThreadComment: hr,
      handleFreezePanesCommit: gr,
    } = Ma({
      controller: e,
      snapshot: t,
      runtime: H,
      hostRef: j,
      canvasRef: ne,
      resizingRef: ae,
      workerPointerDragActiveRef: z,
      selectionStartRef: L,
      selectionEndRef: R,
      selectionDraggedRef: ie,
      dataValidationTargetsRef: We,
      hyperlinkTargetsRef: Ge,
      hyperlinksEnabled: u != null,
      viewportLogger: ee,
      annotationEnabled: ft,
      drawingEnabled: mt,
      annotationMode: g,
      drawingMode: y,
      annotationEditorSession: W,
      annotationEditorSessionRef: ht,
      annotationEditorRef: _t,
      annotationEditorLightDismissArmedRef: gt,
      activeDrawingStrokeRef: kt,
      workbookActiveReviewTarget: dt,
      isEditing: h,
      inputFocused: i,
      floatingTextEdit: on,
      activeCellEditor: tt,
      selectionBounds: ot,
      selectedFloatingElement: U,
      toolbarRequested: he,
      setToolbarRequested: ge,
      onAnnotationModeChange: _,
      onDrawingModeChange: b,
      cleanupDrawingSession: Vt,
      queueAnnotationDraftOpen: Ht,
      addPendingAnnotation: xt,
      openCreateAnnotationEditor: Ut,
      closeAnnotationEditor: Nt,
      blockAnnotationEditorTransitionWhileDictationBusy: Pt,
      requestAnnotationEditorDismiss: It,
      beginDrawingSession: Bt,
      startWorkerViewportPointerDrag: Pn,
      isClipboardShortcut: Nn,
      navigateFindMatches: En,
      setFindQuery: Se,
      setActiveFindIndex: Ee,
      setFindOpen: ye,
      activeDataValidationAddress: je,
      setActiveDataValidationAddress: Me,
      camera: Je,
      reviewTools: S,
      onCellEditorBlur: s,
      onCellEditorChange: c,
      onInteractionAttempt: l,
    }),
    _r = (0, J.useCallback)((e) => {
      let t = Ze(e.currentTarget, e.clientX, e.clientY),
        n = { x: t.screenX, y: t.screenY };
      return ((He.current = n), n);
    }, []),
    vr = (0, J.useCallback)(
      (e) => {
        let t = _r(e);
        if (!xn || ln == null) return;
        let n = vo(t.x, t.y, ln);
        if (Ve.current !== n) {
          if (((Ve.current = n), n)) {
            (Sn(), Pe(!0));
            return;
          }
          Cn();
        }
      },
      [Sn, Cn, ln, xn, _r],
    ),
    yr = (0, J.useCallback)(
      (e) => {
        (vr(e), In(e));
      },
      [In, vr],
    ),
    br = (0, J.useCallback)(
      (e) => {
        (Rn(e), vr(e));
      },
      [Rn, vr],
    ),
    xr = (0, J.useCallback)(() => {
      ((He.current = null), xn && ((Ve.current = !1), Cn()));
    }, [Cn, xn]),
    Sr = (0, J.useCallback)((e) => {
      if (e.pointerType === `touch`) {
        if ((oe.current.add(e.pointerId), oe.current.size !== 1)) {
          se.current = null;
          return;
        }
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {}
        se.current = {
          pointerId: e.pointerId,
          startClientX: e.clientX,
          startClientY: e.clientY,
          moved: !1,
        };
      }
    }, []),
    Cr = (0, J.useCallback)((e) => {
      if (e.pointerType !== `touch`) return;
      let t = se.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = e.clientX - t.startClientX,
        r = e.clientY - t.startClientY;
      Math.hypot(n, r) > So && (t.moved = !0);
    }, []),
    wr = (0, J.useCallback)(
      (e) => {
        if (e.pointerType !== `touch`) return;
        let t = se.current;
        if (
          (oe.current.delete(e.pointerId),
          (se.current = null),
          t == null || t.pointerId !== e.pointerId || t.moved || oe.current.size > 0)
        ) {
          if (e.currentTarget.hasPointerCapture?.(e.pointerId))
            try {
              e.currentTarget.releasePointerCapture(e.pointerId);
            } catch {}
          return;
        }
        if ((Bn(e), e.currentTarget.hasPointerCapture?.(e.pointerId)))
          try {
            e.currentTarget.releasePointerCapture(e.pointerId);
          } catch {}
      },
      [Bn],
    ),
    Er = (0, J.useCallback)((e) => {
      if (
        e.pointerType === `touch` &&
        !(e.type === `pointerleave` && e.currentTarget.hasPointerCapture?.(e.pointerId)) &&
        (oe.current.delete(e.pointerId),
        se.current?.pointerId === e.pointerId && (se.current = null),
        e.currentTarget.hasPointerCapture?.(e.pointerId))
      )
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
    }, []),
    Dr = ft && g && t.isDraggingSelection,
    Or = vt;
  return (
    Dr ? (Or = null) : W?.target.type === `workbook-range` && (Or = yt),
    (0, Y.jsx)(`div`, {
      className: `relative h-full`,
      children: (0, Y.jsx)(`div`, {
        ref: An,
        "data-testid": `popcorn-viewport-host`,
        role: `presentation`,
        className: `relative h-full overflow-hidden focus:outline-none focus-visible:outline-none`,
        tabIndex: -1,
        style: { touchAction: `none` },
        onMouseDownCapture: yr,
        onKeyDown: Ln,
        onMouseMove: br,
        onMouseLeave: xr,
        children: (0, Y.jsxs)(`div`, {
          className: `relative sticky start-0 top-0 h-full`,
          children: [
            (0, Y.jsx)(`canvas`, {
              ref: jn,
              "aria-label": `Spreadsheet canvas`,
              className: `absolute top-0 left-0 focus:outline-none focus-visible:outline-none`,
              tabIndex: -1,
              onMouseDown: zn,
              onPointerDown: Sr,
              onPointerMove: Cr,
              onPointerUp: wr,
              onPointerCancel: Er,
              onPointerLeave: Er,
              onDoubleClick: Vn,
              onMouseLeave: Hn,
            }),
            tt
              ? (0, Y.jsx)(`div`, {
                  "data-testid": `popcorn-cell-editor-layer`,
                  className: `pointer-events-none absolute inset-0 z-0`,
                  children: (0, Y.jsx)(
                    Jr,
                    {
                      rowIndex: tt.row,
                      colIndex: tt.col,
                      zoom: Je.k,
                      viewColWidths: t.columnWidths,
                      rowHeights: t.rowHeights,
                      initialValue: tt.initialValue,
                      onFocus: o,
                      onChange: er,
                      onCommit: tr,
                      onCancel: nr,
                      viewport: tt.viewport,
                      accentColor: V,
                      camera: Je,
                      freezePanes: t.freezePanes,
                      sheetName: t.activeSheetName,
                    },
                    Fn,
                  ),
                })
              : null,
            (0, Y.jsx)(`canvas`, {
              ref: Mn,
              "data-testid": `popcorn-selection-layer`,
              className: `pointer-events-none absolute top-0 left-0 z-10 focus:outline-none focus-visible:outline-none`,
              tabIndex: -1,
            }),
            (0, Y.jsx)(`canvas`, {
              ref: on.setTextOverlayCanvasNode,
              className: `pointer-events-none absolute top-0 left-0 z-[15] focus:outline-none focus-visible:outline-none`,
              tabIndex: -1,
            }),
            (0, Y.jsxs)(`div`, {
              ref: I,
              "data-testid": `popcorn-overlay`,
              className: `pointer-events-none absolute inset-0 z-20`,
              onMouseDown: Wn,
              children: [
                m
                  ? (0, Y.jsx)(qe, {
                      open: _e,
                      query: xe,
                      summary: Dn,
                      focusToken: Ce,
                      onQueryChange: Gn,
                      onNavigatePrevious: Kn,
                      onNavigateNext: Jn,
                      onClose: Yn,
                    })
                  : null,
                ct.sheetTables.length > 0
                  ? (0, Y.jsx)(Fi, {
                      sheetName: t.activeSheetName,
                      tables: ct.sheetTables,
                      filterOptionsByColumn: ct.tableFilterOptions,
                      viewColWidths: t.columnWidths,
                      rowHeights: t.rowHeights,
                      zoom: Je.k,
                      camera: Je,
                      freezePanes: t.freezePanes,
                      activeFilters: t.tableFilters,
                      activeSortByTable: t.tableSorts,
                      onSetFilterValues: Xn,
                      onSetSort: Zn,
                      portalContainerElement: A,
                    })
                  : null,
                (0, Y.jsx)(na, {
                  host: M,
                  camera: Je,
                  viewportSizeStore: P,
                  columnWidths: t.columnWidths,
                  rowHeights: t.rowHeights,
                  freezePanes: t.freezePanes,
                  bottomScrollReservePx: E,
                  onSetLogicalScroll: Qn,
                }),
                (0, Y.jsx)(si, {
                  open: je != null,
                  values: kn?.values ?? [],
                  selectedValue: kn?.selectedValue ?? ``,
                  targetBounds: On?.cssBounds ?? null,
                  onSelect: ir,
                  onClose: ar,
                }),
                T
                  ? (0, Y.jsx)(Tr, {
                      threads: ct.commentThreads ?? [],
                      camera: Je,
                      freezePanes: t.freezePanes,
                      columnWidths: t.columnWidths,
                      rowHeights: t.rowHeights,
                      isEditing: h,
                      onSelectedCommentThreadChange: d,
                      nativeCommentStyle: S?.annotation?.createCommentThreads === !0,
                      renderCommentThread: pt,
                      annotationMarkerPositions: en,
                      collisionBoundaryElement: M,
                      onReply: or,
                      onResolve: lr,
                      onReopen: dr,
                      onDeleteThread: fr,
                      onToggleReaction: pr,
                      onEditComment: mr,
                      onDeleteComment: hr,
                    })
                  : null,
                Mt.length > 0
                  ? (0, Y.jsx)(dn, {
                      testId: `popcorn-drawing-overlay`,
                      strokes: Mt.flatMap((e) => e.strokes),
                      projectPoint: Wt,
                      clipBounds: ut,
                    })
                  : null,
                At.length > 0
                  ? (0, Y.jsx)(dn, {
                      testId: `popcorn-drawing-draft-overlay`,
                      strokes: At,
                      projectPoint: Wt,
                      clipBounds: ut,
                    })
                  : null,
                Dt
                  ? (0, Y.jsx)(dn, {
                      testId: `popcorn-drawing-active-overlay`,
                      strokes: [Dt],
                      projectPoint: Wt,
                      clipBounds: ut,
                    })
                  : null,
                St.map(({ annotation: e, bounds: t, anchorBounds: n, stackIndex: r }) => {
                  let i = _n(e.target.type === `workbook-range` ? t : n, `top-right`, r);
                  return (0, Y.jsxs)(
                    `div`,
                    {
                      children: [
                        e.target.type === `workbook-range`
                          ? null
                          : (0, Y.jsx)(Et, {
                              bounds: t,
                              fillOnly: !0,
                              testId: `popcorn-annotation-overlay-${e.annotationId}`,
                            }),
                        (0, Y.jsx)(wt, {
                          testId: `popcorn-annotation-marker-${e.annotationId}`,
                          markerNumber: e.annotationNumber,
                          position: i,
                          selected: W?.mode === `edit` && W.annotationId === e.annotationId,
                          title: e.label,
                          onMouseEnter: Jt(e.annotationId),
                          onMouseLeave: Yt(e.annotationId),
                          onFocus: Xt(e.annotationId),
                          onBlur: Zt(e.annotationId),
                          onClick: Qt(e),
                        }),
                      ],
                    },
                    e.annotationId,
                  );
                }),
                Ct
                  ? (0, Y.jsx)(pn, {
                      body: Ct.annotation.body,
                      markerPosition: _n(
                        Ct.annotation.target.type === `workbook-range`
                          ? Ct.bounds
                          : Ct.anchorBounds,
                        `top-right`,
                        Ct.stackIndex,
                      ),
                      containerElement: M,
                      testId: `popcorn-annotation-preview`,
                    })
                  : null,
                yt && !Dr && W?.target.type !== `workbook-range`
                  ? (0, Y.jsx)(Et, { bounds: yt, testId: `popcorn-annotation-highlight` })
                  : null,
                ft && g && W?.mode === `create` && Or && Tt != null
                  ? (0, Y.jsx)(wt, {
                      testId: `popcorn-annotation-draft-marker`,
                      markerNumber: Tt,
                      position: _n(Or),
                      draft: !0,
                    })
                  : null,
                xn && Ne && ln && cn
                  ? (0, Y.jsx)(Gt, {
                      bounds: ln,
                      containerElement: M,
                      assistantIcon: S?.annotation?.commentAssistantIcon,
                      label:
                        S?.annotation?.askForEditLabel ?? S?.annotation?.getAskForEditLabel?.(),
                      placement: Le,
                      shortcutScopeElement: M,
                      testId: `popcorn-workbook-ask-for-edit-button`,
                      onClick: (e) => {
                        Ut(cn, e);
                      },
                      onShown: S?.annotation?.onAskForEditShown,
                      onCommentClick:
                        hn &&
                        (() => {
                          (hn(), Ut(cn, `ask_codex_button`, `comment`));
                        }),
                    })
                  : null,
                tn
                  ? (0, Y.jsx)(
                      wn,
                      {
                        ref: _t,
                        anchorBounds: tn,
                        containerElement: M,
                        mode: W?.mode ?? `create`,
                        defaultCreateSubmitMode: S?.annotation?.defaultCreateSubmitMode,
                        savedSubmitDisabled:
                          W?.mode === `create` && W.intent === `comment`
                            ? S?.annotation?.commentSavedSubmitDisabled
                            : S?.annotation?.savedSubmitDisabled,
                        placement:
                          S?.annotation?.anchorEditorToSelection === !0 &&
                          W?.mode === `create` &&
                          W.target.type === `workbook-range` &&
                          !g
                            ? Le
                            : void 0,
                        dictationControls: S?.annotation?.dictationControls,
                        placeholder: vn,
                        isComment:
                          gn != null &&
                          ((W?.mode === `create` && W.intent === `comment`) || yn != null),
                        commentComposer: yn,
                        addCommentLabel: gn?.addCommentLabel,
                        nativeFileCommentLabel: gn?.nativeFileCommentLabel,
                        value: W?.body ?? ``,
                        onChange: Kt,
                        onCancel: Nt,
                        onDelete: Lt,
                        onDictationBusyChange: qt,
                        onSubmit: Rt,
                      },
                      yn == null ? void 0 : bn,
                    )
                  : null,
                f.map((a) =>
                  (0, Y.jsx)(
                    `div`,
                    {
                      children: a.render({
                        controller: e,
                        snapshot: t,
                        camera: Je,
                        inputFocused: i,
                        selectionBounds: D ? ln : ot,
                        selectionZoom: D ? 1 : t.zoom,
                        selectionSummary: $e,
                        accentFill: n,
                        accentStroke: r,
                        toolbarRequested: he,
                        canEdit: h,
                        dismissEditToolbar: () => ge(!1),
                        panelControls: k,
                        selectionActions: fn,
                        shortcutScopeElement: M,
                      }),
                    },
                    a.id,
                  ),
                ),
                S?.reviewBar != null &&
                  (0, Y.jsx)(`div`, {
                    className: `pointer-events-none absolute inset-x-0 bottom-4 z-30 flex justify-center px-4`,
                    children: (0, Y.jsx)(`div`, {
                      className: `pointer-events-auto max-w-full`,
                      children: S.reviewBar,
                    }),
                  }),
              ],
            }),
            (0, Y.jsx)(fi, {
              hostRef: j,
              camera: Je,
              freezePanes: t.freezePanes,
              columnWidths: t.columnWidths,
              rowHeights: t.rowHeights,
              onCommit: gr,
            }),
            (0, Y.jsx)(Qe, {
              canvasRef: ne,
              viewportRef: j,
              chartTargetsRef: Ke,
              getCamera: ue,
              selectedFloatingElement: U,
              suppressHover: De,
              freezePanes: t.freezePanes,
              columnWidths: t.columnWidths,
              rowHeights: t.rowHeights,
              subscribeToCameraChanges: de,
            }),
          ],
        }),
      }),
    })
  );
}
var J,
  Y,
  xo,
  So,
  Co = e(() => {
    (A(),
      (J = t(n())),
      kr(),
      U(),
      Jn(),
      ct(),
      vt(),
      Zn(),
      Vt(),
      $e(),
      Ue(),
      Ke(),
      nr(),
      Pr(),
      Lr(),
      Je(),
      qr(),
      oi(),
      Ye(),
      ui(),
      Xe(),
      yi(),
      zi(),
      la(),
      ga(),
      va(),
      Na(),
      Fa(),
      Za(),
      to(),
      ao(),
      ho(),
      (Y = h()),
      (xo = 2e3),
      (So = 8));
  });
function wo({
  title: e,
  widthPx: t = 360,
  topPx: n = 92,
  rightPx: r = 16,
  selfContained: i = !1,
  onClose: a,
  children: o,
}) {
  return (0, To.jsx)(`div`, {
    className: i
      ? `pointer-events-auto absolute overflow-y-auto`
      : `pointer-events-auto absolute overflow-hidden`,
    style: {
      right: r,
      top: n,
      width: t,
      maxWidth: `calc(100% - 32px)`,
      maxHeight: `calc(100% - ${n + 16}px)`,
    },
    "data-testid": `popcorn-floating-panel-${e.toLowerCase().replace(/\s+/g, `-`)}`,
    children: i
      ? o
      : (0, To.jsxs)(`section`, {
          className: `border-token-border-light bg-token-bg-primary flex max-h-full min-h-0 flex-col overflow-hidden rounded-2xl border shadow-2xl`,
          children: [
            (0, To.jsxs)(`header`, {
              className: `border-token-border-light flex items-center justify-between border-b px-3 py-2`,
              children: [
                (0, To.jsx)(`h2`, {
                  className: `text-token-text-primary text-sm font-medium`,
                  children: e,
                }),
                (0, To.jsx)(`button`, {
                  type: `button`,
                  className: `text-token-text-secondary hover:bg-token-bg-tertiary inline-flex size-8 items-center justify-center rounded-md`,
                  onClick: a,
                  "aria-label": `Close ${e}`,
                  children: (0, To.jsx)(le, { className: `size-4` }),
                }),
              ],
            }),
            (0, To.jsx)(`div`, { className: `min-h-0 overflow-auto p-3`, children: o }),
          ],
        }),
  });
}
var To,
  Eo = e(() => {
    (Ne(), (To = h()));
  });
function Do(e) {
  let t = e.trimStart();
  return { kind: `formula`, text: t.startsWith(`=`) ? t : `=${t}` };
}
function Oo(e) {
  return { kind: `text`, runs: [jo({ ...Fo, text: e })] };
}
function ko(e) {
  if (!Array.isArray(e) || e.length === 0) return [jo(Fo)];
  let t = [];
  for (let n of e) {
    if (!n) continue;
    let e = jo(n);
    e.text ||= ``;
    let r = t[t.length - 1];
    if (r && Mo(r, e)) {
      r.text += e.text;
      continue;
    }
    t.push(e);
  }
  return t.length > 0 ? t : [jo(Fo)];
}
function Ao(e) {
  return ko(e)
    .map((e) => e.text ?? ``)
    .join(``);
}
function jo(e) {
  return e
    ? {
        text: e.text ?? ``,
        textStyle: e.textStyle ? { ...e.textStyle } : void 0,
        hyperlink: e.hyperlink ? { ...e.hyperlink } : void 0,
        citations: e.citations ? [...e.citations] : [],
        id: e.id,
        reviewMarkIds: e.reviewMarkIds ? [...e.reviewMarkIds] : [],
      }
    : { ...Fo };
}
function Mo(e, t) {
  return (
    No(e.textStyle, t.textStyle) &&
    No(e.hyperlink, t.hyperlink) &&
    Po(e.citations, t.citations) &&
    Po(e.reviewMarkIds, t.reviewMarkIds)
  );
}
function No(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return e == null && t == null;
  if (typeof e != `object` || typeof t != `object`) return !1;
  let n = e,
    r = t,
    i = Object.keys(n),
    a = Object.keys(r);
  return i.length === a.length && i.every((e) => Reflect.get(n, e) === Reflect.get(r, e));
}
function Po(e, t) {
  return e === t
    ? !0
    : !e || !t
      ? !e && !t
      : e.length === t.length && e.every((e, n) => e === t[n]);
}
var Fo,
  Io = e(() => {
    ((Fo = { text: ``, citations: [], reviewMarkIds: [] }), Oo(``));
  });
function Lo(e) {
  return e.kind === `formula` ? e.text : Ao(e.runs);
}
var Ro = e(() => {
    Io();
  }),
  zo,
  Bo = e(() => {
    zo = JSON.parse(
      `[{"name":"STDEV","category":"compatibility","id":13,"description":"This function is available for compatibility with Excel 2007 and earlier. Estimates standard deviation based on a sample (ignores logical values and text in the sample)","example":"=STDEV(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers corresponding to a sample of a population and can be numbers or references that contain numbers","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VAR","category":"compatibility","id":47,"description":"This function is available for compatibility with Excel 2007 and earlier. Estimates variance based on a sample (ignores logical values and text in the sample)","example":"=VAR(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numeric arguments corresponding to a sample of a population","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"STDEVP","category":"compatibility","id":123,"description":"This function is available for compatibility with Excel 2007 and earlier. Calculates standard deviation based on the entire population given as arguments (ignores logical values and text)","example":"=STDEVP(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers corresponding to a population and can be numbers or references that contain numbers","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VARP","category":"compatibility","id":124,"description":"This function is available for compatibility with Excel 2007 and earlier. Calculates variance based on the entire population (ignores logical values and text in the population)","example":"=VARP(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numeric arguments corresponding to a population","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"RANK","category":"compatibility","id":132,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the rank of a number in a list of numbers: its size relative to other values in the list","example":"=RANK(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the number for which you want to find the rank","type":"number|range","optional":false},{"name":"ref","description":"Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored","type":"value|range","optional":false},{"name":"order","description":"Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value","type":"value|range","optional":true}]},{"name":"BETADIST","category":"compatibility","id":150,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the cumulative beta probability density function","example":"=BETADIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value between A and B at which to evaluate the function","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"a","description":"Is an optional lower bound to the interval of x. If omitted, A = 0","type":"value|range","optional":true},{"name":"b","description":"Is an optional upper bound to the interval of x. If omitted, B = 1","type":"value|range","optional":true}]},{"name":"BETAINV","category":"compatibility","id":152,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the cumulative beta probability density function (BETADIST)","example":"=BETAINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the beta distribution","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"a","description":"Is an optional lower bound to the interval of x. If omitted, A = 0","type":"value|range","optional":true},{"name":"b","description":"Is an optional upper bound to the interval of x. If omitted, B = 1","type":"value|range","optional":true}]},{"name":"BINOMDIST","category":"compatibility","id":153,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the individual term binomial distribution probability","example":"=BINOMDIST(10, A1, A1, A1)","parameters":[{"name":"numberS","description":"Is the number of successes in trials","type":"number|range","optional":false},{"name":"trials","description":"Is the number of independent trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"CHIDIST","category":"compatibility","id":154,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the right-tailed probability of the chi-squared distribution","example":"=CHIDIST(A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"CHIINV","category":"compatibility","id":155,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the right-tailed probability of the chi-squared distribution","example":"=CHIINV(A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"CONFIDENCE","category":"compatibility","id":157,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the confidence interval for a population mean, using a normal distribution","example":"=CONFIDENCE(A1, A1, A1)","parameters":[{"name":"alpha","description":"Is the significance level used to compute the confidence level, a number greater than 0 and less than 1","type":"value|range","optional":false},{"name":"standardDev","description":"Is the population standard deviation for the data range and is assumed to be known. Standard_dev must be greater than 0","type":"value|range","optional":false},{"name":"size","description":"Is the sample size","type":"value|range","optional":false}]},{"name":"CRITBINOM","category":"compatibility","id":158,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value","example":"=CRITBINOM(A1, A1, A1)","parameters":[{"name":"trials","description":"Is the number of Bernoulli trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"alpha","description":"Is the criterion value, a number between 0 and 1 inclusive","type":"value|range","optional":false}]},{"name":"EXPONDIST","category":"compatibility","id":160,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the exponential distribution","example":"=EXPONDIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value of the function, a nonnegative number","type":"value|range","optional":false},{"name":"lambda","description":"Is the parameter value, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"FDIST","category":"compatibility","id":161,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the (right-tailed) F probability distribution (degree of diversity) for two data sets","example":"=FDIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"FINV","category":"compatibility","id":162,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the (right-tailed) F probability distribution: if p = FDIST(x,...), then FINV(p,...) = x","example":"=FINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"FLOOR","category":"compatibility","id":165,"description":"Rounds a number down to the nearest multiple of significance","example":"=FLOOR(10, A1)","parameters":[{"name":"numberParam","description":"Is the numeric value you want to round","type":"number|range","optional":false},{"name":"significance","description":"Is the multiple to which you want to round. Number and Significance must either both be positive or both be negative","type":"value|range","optional":false}]},{"name":"GAMMADIST","category":"compatibility","id":166,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the gamma distribution","example":"=GAMMADIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number. If beta = 1, GAMMADIST returns the standard gamma distribution","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: return the cumulative distribution function = TRUE; return the probability mass function = FALSE or omitted","type":"value|range","optional":false}]},{"name":"GAMMAINV","category":"compatibility","id":167,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the gamma cumulative distribution: if p = GAMMADIST(x,...), then GAMMAINV(p,...) = x","example":"=GAMMAINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the gamma distribution, a number between 0 and 1, inclusive","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number. If beta = 1, GAMMAINV returns the inverse of the standard gamma distribution","type":"value|range","optional":false}]},{"name":"CEILING","category":"compatibility","id":168,"description":"Rounds a number up, to the nearest multiple of significance","example":"=CEILING(10, A1)","parameters":[{"name":"numberParam","description":"Is the value you want to round","type":"number|range","optional":false},{"name":"significance","description":"Is the multiple to which you want to round","type":"value|range","optional":false}]},{"name":"HYPGEOMDIST","category":"compatibility","id":169,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the hypergeometric distribution","example":"=HYPGEOMDIST(A1, 10, A1, 10)","parameters":[{"name":"sampleS","description":"Is the number of successes in the sample","type":"value|range","optional":false},{"name":"numberSample","description":"Is the size of the sample","type":"number|range","optional":false},{"name":"populationS","description":"Is the number of successes in the population","type":"value|range","optional":false},{"name":"numberPop","description":"Is the population size","type":"number|range","optional":false}]},{"name":"LOGNORMDIST","category":"compatibility","id":170,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the cumulative lognormal distribution of x, where ln(x) is normally distributed with parameters Mean and Standard_dev","example":"=LOGNORMDIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a positive number","type":"value|range","optional":false},{"name":"mean","description":"Is the mean of ln(x)","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of ln(x), a positive number","type":"value|range","optional":false}]},{"name":"LOGINV","category":"compatibility","id":171,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with parameters Mean and Standard_dev","example":"=LOGINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the lognormal distribution, a number between 0 and 1, inclusive","type":"value|range","optional":false},{"name":"mean","description":"Is the mean of ln(x)","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of ln(x), a positive number","type":"value|range","optional":false}]},{"name":"NEGBINOMDIST","category":"compatibility","id":172,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the negative binomial distribution, the probability that there will be Number_f failures before the Number_s-th success, with Probability_s probability of a success","example":"=NEGBINOMDIST(10, 10, A1)","parameters":[{"name":"numberF","description":"Is the number of failures","type":"number|range","optional":false},{"name":"numberS","description":"Is the threshold number of successes","type":"number|range","optional":false},{"name":"probabilityS","description":"Is the probability of a success; a number between 0 and 1","type":"value|range","optional":false}]},{"name":"NORMDIST","category":"compatibility","id":173,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the normal cumulative distribution for the specified mean and standard deviation","example":"=NORMDIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value for which you want the distribution","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"NORMSDIST","category":"compatibility","id":174,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the standard normal cumulative distribution (has a mean of zero and a standard deviation of one)","example":"=NORMSDIST(A1)","parameters":[{"name":"z","description":"Is the value for which you want the distribution","type":"value|range","optional":false}]},{"name":"NORMINV","category":"compatibility","id":175,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation","example":"=NORMINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false}]},{"name":"NORMSINV","category":"compatibility","id":176,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one)","example":"=NORMSINV(A1)","parameters":[{"name":"probability","description":"Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false}]},{"name":"POISSON","category":"compatibility","id":180,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the Poisson distribution","example":"=POISSON(A1, A1, A1)","parameters":[{"name":"x","description":"Is the number of events","type":"value|range","optional":false},{"name":"mean","description":"Is the expected numeric value, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative Poisson probability, use TRUE; for the Poisson probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"TDIST","category":"compatibility","id":181,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the Student's t-distribution","example":"=TDIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the numeric value at which to evaluate the distribution","type":"value|range","optional":false},{"name":"degFreedom","description":"Is an integer indicating the number of degrees of freedom that characterize the distribution","type":"value|range","optional":false},{"name":"tails","description":"Specifies the number of distribution tails to return: one-tailed distribution = 1; two-tailed distribution = 2","type":"value|range","optional":false}]},{"name":"WEIBULL","category":"compatibility","id":182,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the Weibull distribution","example":"=WEIBULL(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"CHITEST","category":"compatibility","id":186,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the test for independence: the value from the chi-squared distribution for the statistic and the appropriate degrees of freedom","example":"=CHITEST(A1:A5, A1:A5)","parameters":[{"name":"actualRange","description":"Is the range of data that contains observations to test against expected values","type":"range","optional":false},{"name":"expectedRange","description":"Is the range of data that contains the ratio of the product of row totals and column totals to the grand total","type":"range","optional":false}]},{"name":"COVAR","category":"compatibility","id":188,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns covariance, the average of the products of deviations for each data point pair in two data sets","example":"=COVAR({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false},{"name":"array2","description":"Is the second cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false}]},{"name":"FORECAST","category":"compatibility","id":189,"description":"This function is available for compatibility with Excel 2013 and earlier. Calculates, or predicts, a future value along a linear trend by using existing values","example":"=FORECAST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the data point for which you want to predict a value and must be a numeric value","type":"value|range","optional":false},{"name":"knownYs","description":"Is the dependent array or range of numeric data","type":"value|range","optional":false},{"name":"knownXs","description":"Is the independent array or range of numeric data. The variance of Known_x's must not be zero","type":"value|range","optional":false}]},{"name":"FTEST","category":"compatibility","id":190,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the result of an F-test, the two-tailed probability that the variances in Array1 and Array2 are not significantly different","example":"=FTEST({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first array or range of data and can be numbers or names, arrays, or references that contain numbers (blanks are ignored)","type":"array","optional":false},{"name":"array2","description":"Is the second array or range of data and can be numbers or names, arrays, or references that contain numbers (blanks are ignored)","type":"array","optional":false}]},{"name":"TTEST","category":"compatibility","id":196,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the probability associated with a Student's t-Test","example":"=TTEST({1,2;3,4}, {1,2;3,4}, A1, A1)","parameters":[{"name":"array1","description":"Is the first data set","type":"array","optional":false},{"name":"array2","description":"Is the second data set","type":"array","optional":false},{"name":"tails","description":"Specifies the number of distribution tails to return: one-tailed distribution = 1; two-tailed distribution = 2","type":"value|range","optional":false},{"name":"typeParam","description":"Is the kind of t-test: paired = 1, two-sample equal variance (homoscedastic) = 2, two-sample unequal variance = 3","type":"value|range","optional":false}]},{"name":"ZTEST","category":"compatibility","id":204,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the one-tailed P-value of a z-test","example":"=ZTEST({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data against which to test X","type":"array","optional":false},{"name":"x","description":"Is the value to test","type":"value|range","optional":false},{"name":"sigma","description":"Is the population (known) standard deviation. If omitted, the sample standard deviation is used","type":"value|range","optional":true}]},{"name":"QUARTILE","category":"compatibility","id":207,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the quartile of a data set","example":"=QUARTILE({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or cell range of numeric values for which you want the quartile value","type":"array","optional":false},{"name":"quart","description":"Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4","type":"value|range","optional":false}]},{"name":"PERCENTILE","category":"compatibility","id":208,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the k-th percentile of values in a range","example":"=PERCENTILE({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or range of data that defines relative standing","type":"array","optional":false},{"name":"k","description":"Is the percentile value that is between 0 through 1, inclusive","type":"value|range","optional":false}]},{"name":"PERCENTRANK","category":"compatibility","id":209,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the rank of a value in a data set as a percentage of the data set","example":"=PERCENTRANK({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data with numeric values that defines relative standing","type":"array","optional":false},{"name":"x","description":"Is the value for which you want to know the rank","type":"value|range","optional":false},{"name":"significance","description":"Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%)","type":"value|range","optional":true}]},{"name":"MODE","category":"compatibility","id":210,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the most frequently occurring, or repetitive, value in an array or range of data","example":"=MODE(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, or names, arrays, or references that contain numbers for which you want the mode","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"TINV","category":"compatibility","id":212,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the two-tailed inverse of the Student's t-distribution","example":"=TINV(A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is a positive integer indicating the number of degrees of freedom to characterize the distribution","type":"value|range","optional":false}]},{"name":"CONCATENATE","category":"compatibility","id":213,"description":"Joins several text strings into one text string","example":"=CONCATENATE(\\"text1\\", C1:C5, \\"text2\\", C1:C5)","parameters":[{"name":"text1","description":"Are 1 to 255 text strings to be joined into a single text string and can be text strings, numbers, or single-cell references","type":"string","optional":false},{"name":"text2","description":"Text string.","type":"string","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]}]`,
    );
  }),
  Vo,
  Ho = e(() => {
    Vo = [
      {
        name: `CUBEVALUE`,
        category: `cube`,
        id: 233,
        description: `Returns an aggregated value from the cube.`,
        example: `=CUBEVALUE(A1, C1:C5, A1, C1:C5)`,
        parameters: [
          {
            name: `connection`,
            description: `Is the name of a connection to an OLAP cube`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `memberExpression1`,
            description: `Is a slicer that determines the portion of the OLAP cube for which the aggregated value is to be retrieved`,
            type: `value|range`,
            optional: !0,
          },
          {
            name: `rest`,
            description: `Value, reference, or range.`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `CUBEMEMBER`,
        category: `cube`,
        id: 234,
        description: `Returns a member or tuple from the cube.`,
        example: `=CUBEMEMBER(A1, A1, A1)`,
        parameters: [
          {
            name: `connection`,
            description: `Is the name of a connection to an OLAP cube`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `memberExpression`,
            description: `Is the expression representing the name of a member or tuple in the OLAP cube`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `caption`,
            description: `Is the caption to be displayed in the cell`,
            type: `value|range`,
            optional: !0,
          },
        ],
      },
      {
        name: `CUBEMEMBERPROPERTY`,
        category: `cube`,
        id: 235,
        description: `Returns the value of a member property from the cube.`,
        example: `=CUBEMEMBERPROPERTY(A1, A1, A1)`,
        parameters: [
          {
            name: `connection`,
            description: `Is the name of a connection to an OLAP cube`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `memberExpression`,
            description: `Is the expression representing the name of a member in the OLAP cube`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `property`,
            description: `Is the property name`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `CUBERANKEDMEMBER`,
        category: `cube`,
        id: 236,
        description: `Returns the nth, or ranked, member in a set.`,
        example: `=CUBERANKEDMEMBER(A1, A1, A1)`,
        parameters: [
          {
            name: `connection`,
            description: `Is the name of a connection to an OLAP cube`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `setExpression`,
            description: `Is the set from which the element is to be retrieved`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `rank`,
            description: `Is the rank of the element to be retrieved`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `caption`,
            description: `Is the caption to be displayed in the cell`,
            type: `value|range`,
            optional: !0,
          },
        ],
      },
      {
        name: `CUBEKPIMEMBER`,
        category: `cube`,
        id: 329,
        description: `Returns a key performance indicator (KPI) property and displays the KPI name in the cell.`,
        example: `=CUBEKPIMEMBER(A1, A1, A1)`,
        parameters: [
          {
            name: `connection`,
            description: `Is the name of a connection to an OLAP cube`,
            type: `value|range`,
            optional: !1,
          },
          { name: `kpiName`, description: `Is the KPI name`, type: `value|range`, optional: !1 },
          {
            name: `kpiProperty`,
            description: `Is the KPI property`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `caption`,
            description: `Is the caption to be displayed in the cell`,
            type: `value|range`,
            optional: !0,
          },
        ],
      },
      {
        name: `CUBESET`,
        category: `cube`,
        id: 330,
        description: `Defines a calculated set of members or tuples by sending a set expression to the cube on the server, which creates the set, and then returns that set to Microsoft Excel.`,
        example: `=CUBESET(A1, A1, A1)`,
        parameters: [
          {
            name: `connection`,
            description: `Is the name of a connection to an OLAP cube`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `setExpression`,
            description: `Is the expression for the set`,
            type: `value|range`,
            optional: !1,
          },
          {
            name: `caption`,
            description: `Is the caption to be displayed in the cell`,
            type: `value|range`,
            optional: !0,
          },
          {
            name: `sortOrder`,
            description: `Is the sort order`,
            type: `value|range`,
            optional: !0,
          },
          { name: `sortBy`, description: `Is the sort by`, type: `value|range`, optional: !0 },
        ],
      },
      {
        name: `CUBESETCOUNT`,
        category: `cube`,
        id: 331,
        description: `Returns the number of items in a set.`,
        example: `=CUBESETCOUNT(A1)`,
        parameters: [
          {
            name: `setParam`,
            description: `Is the set whose elements are to be counted`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
    ];
  }),
  Uo,
  Wo = e(() => {
    Uo = JSON.parse(
      `[{"name":"DCOUNT","category":"database","id":41,"description":"Counts the cells containing numbers in the field (column) of records in the database that match the conditions you specify","example":"=DCOUNT(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DSUM","category":"database","id":42,"description":"Adds the numbers in the field (column) of records in the database that match the conditions you specify","example":"=DSUM(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DAVERAGE","category":"database","id":43,"description":"Returns the average of the values in a database field after filtering rows with a criteria table.","example":"=DAVERAGE(A1:C10, \\"Sales\\", E1:F2)","parameters":[{"name":"database","description":"Structured table (including headers) that holds the records to query.","type":"range","optional":false},{"name":"field","description":"Column to average, specified by header name (\\"Sales\\") or column index.","type":"string|number","optional":false},{"name":"criteria","description":"Criteria range with column labels and the filters to apply to the database.","type":"range","optional":false}]},{"name":"DMIN","category":"database","id":44,"description":"Returns the smallest number in the field (column) of records in the database that match the conditions you specify","example":"=DMIN(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DMAX","category":"database","id":45,"description":"Returns the largest number in the field (column) of records in the database that match the conditions you specify","example":"=DMAX(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DSTDEV","category":"database","id":46,"description":"Estimates the standard deviation based on a sample from selected database entries","example":"=DSTDEV(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DVAR","category":"database","id":48,"description":"Estimates variance based on a sample from selected database entries","example":"=DVAR(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DPRODUCT","category":"database","id":121,"description":"Multiplies the values in the field (column) of records in the database that match the conditions you specify","example":"=DPRODUCT(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DSTDEVP","category":"database","id":125,"description":"Calculates the standard deviation based on the entire population of selected database entries","example":"=DSTDEVP(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DVARP","category":"database","id":126,"description":"Calculates variance based on the entire population of selected database entries","example":"=DVARP(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DCOUNTA","category":"database","id":129,"description":"Counts nonblank cells in the field (column) of records in the database that match the conditions you specify","example":"=DCOUNTA(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DGET","category":"database","id":145,"description":"Extracts from a database a single record that matches the conditions you specify","example":"=DGET(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column's position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]}]`,
    );
  }),
  Go,
  Ko = e(() => {
    Go = JSON.parse(
      `[{"name":"DATE","category":"date-time","id":63,"description":"Returns the number that represents the date in Microsoft Excel date-time code","example":"=DATE(A1, A1, A1)","parameters":[{"name":"year","description":"Is a number from 1900 or 1904 (depending on the workbook's date system) to 9999","type":"value|range","optional":false},{"name":"month","description":"Is a number from 1 to 12 representing the month of the year","type":"value|range","optional":false},{"name":"day","description":"Is a number from 1 to 31 representing the day of the month","type":"value|range","optional":false}]},{"name":"TIME","category":"date-time","id":64,"description":"Converts hours, minutes, and seconds given as numbers to an Excel serial number, formatted with a time format","example":"=TIME(A1, A1, A1)","parameters":[{"name":"hour","description":"Is a number from 0 to 23 representing the hour","type":"value|range","optional":false},{"name":"minute","description":"Is a number from 0 to 59 representing the minute","type":"value|range","optional":false},{"name":"second","description":"Is a number from 0 to 59 representing the second","type":"value|range","optional":false}]},{"name":"DAY","category":"date-time","id":65,"description":"Returns the day of the month, a number from 1 to 31.","example":"=DAY(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel","type":"number|range","optional":false}]},{"name":"MONTH","category":"date-time","id":66,"description":"Returns the month, a number from 1 (January) to 12 (December).","example":"=MONTH(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel","type":"number|range","optional":false}]},{"name":"YEAR","category":"date-time","id":67,"description":"Returns the year of a date, an integer in the range 1900 - 9999.","example":"=YEAR(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel","type":"number|range","optional":false}]},{"name":"WEEKDAY","category":"date-time","id":68,"description":"Returns a number from 1 to 7 identifying the day of the week of a date.","example":"=WEEKDAY(10, A1)","parameters":[{"name":"serialNumber","description":"Is a number that represents a date","type":"number|range","optional":false},{"name":"returnType","description":"Is a number: for Sunday=1 through Saturday=7, use 1; for Monday=1 through Sunday=7, use 2; for Monday=0 through Sunday=6, use 3","type":"value|range","optional":true}]},{"name":"HOUR","category":"date-time","id":69,"description":"Returns the hour as a number from 0 (12:00 A.M.) to 23 (11:00 P.M.).","example":"=HOUR(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel, or text in time format, such as 16:48:00 or 4:48:00 PM","type":"number|range","optional":false}]},{"name":"MINUTE","category":"date-time","id":70,"description":"Returns the minute, a number from 0 to 59.","example":"=MINUTE(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:00 or 4:48:00 PM","type":"number|range","optional":false}]},{"name":"SECOND","category":"date-time","id":71,"description":"Returns the second, a number from 0 to 59.","example":"=SECOND(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:23 or 4:48:47 PM","type":"number|range","optional":false}]},{"name":"NOW","category":"date-time","id":72,"description":"Returns the current date and time formatted as a date and time.","example":"=NOW()","parameters":[]},{"name":"DATEVALUE","category":"date-time","id":106,"description":"Converts a date in the form of text to a number that represents the date in Microsoft Excel date-time code","example":"=DATEVALUE(DATE(2024, 1, 1))","parameters":[{"name":"dateText","description":"Is text that represents a date in a Microsoft Excel date format, between 1/1/1900 or 1/1/1904 (depending on the workbook's date system) and 12/31/9999","type":"string","optional":false}]},{"name":"TIMEVALUE","category":"date-time","id":107,"description":"Converts a text time to an Excel serial number for a time, a number from 0 (12:00:00 AM) to 0.999988426 (11:59:59 PM). Format the number with a time format after entering the formula","example":"=TIMEVALUE(TIME(9, 0, 0))","parameters":[{"name":"timeText","description":"Is a text string that gives a time in any one of the Microsoft Excel time formats (date information in the string is ignored)","type":"string","optional":false}]},{"name":"DAYS360","category":"date-time","id":134,"description":"Returns the number of days between two dates based on a 360-day year (twelve 30-day months)","example":"=DAYS360(DATE(2024, 1, 1), DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Start_date and end_date are the two dates between which you want to know the number of days","type":"date","optional":false},{"name":"endDate","description":"Start_date and end_date are the two dates between which you want to know the number of days","type":"date","optional":false},{"name":"method","description":"Is a logical value specifying the calculation method: U.S. (NASD) = FALSE or omitted; European = TRUE.","type":"value|range","optional":true}]},{"name":"TODAY","category":"date-time","id":135,"description":"Returns the current date formatted as a date.","example":"=TODAY()","parameters":[]},{"name":"EDATE","category":"date-time","id":302,"description":"Returns the serial number of the date that is the indicated number of months before or after the start date","example":"=EDATE(DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"months","description":"Is the number of months before or after start_date","type":"value|range","optional":false}]},{"name":"EOMONTH","category":"date-time","id":303,"description":"Returns the serial number of the last day of the month before or after a specified number of months","example":"=EOMONTH(DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"months","description":"Is the number of months before or after the start_date","type":"value|range","optional":false}]},{"name":"YEARFRAC","category":"date-time","id":304,"description":"Returns the year fraction representing the number of whole days between start_date and end_date","example":"=YEARFRAC(DATE(2024, 1, 1), DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"endDate","description":"Is a serial date number that represents the end date","type":"date","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"WEEKNUM","category":"date-time","id":318,"description":"Returns the week number in the year","example":"=WEEKNUM(10, A1)","parameters":[{"name":"serialNumber","description":"Is the date-time code used by Microsoft Excel for date and time calculation","type":"number|range","optional":false},{"name":"returnType","description":"Is a number (1 or 2) that determines the type of the return value","type":"value|range","optional":true}]},{"name":"WORKDAY","category":"date-time","id":323,"description":"Returns the serial number of the date before or after a specified number of workdays","example":"=WORKDAY(DATE(2024, 1, 1), A1, A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"days","description":"Is the number of nonweekend and non-holiday days before or after start_date","type":"value|range","optional":false},{"name":"holidays","description":"Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays","type":"value|range","optional":true}]},{"name":"NETWORKDAYS","category":"date-time","id":324,"description":"Returns the number of whole workdays between two dates","example":"=NETWORKDAYS(DATE(2024, 1, 1), DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"endDate","description":"Is a serial date number that represents the end date","type":"date","optional":false},{"name":"holidays","description":"Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays","type":"value|range","optional":true}]},{"name":"NETWORKDAYS.INTL","category":"date-time","id":372,"description":"Returns the number of whole workdays between two dates with custom weekend parameters","example":"=NETWORKDAYS.INTL(DATE(2024, 1, 1), DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"endDate","description":"Is a serial date number that represents the end date","type":"date","optional":false},{"name":"weekend","description":"Is a number or string specifying when weekends occur","type":"value|range","optional":true},{"name":"holidays","description":"Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays","type":"value|range","optional":true}]},{"name":"WORKDAY.INTL","category":"date-time","id":373,"description":"Returns the serial number of the date before or after a specified number of workdays with custom weekend parameters","example":"=WORKDAY.INTL(DATE(2024, 1, 1), A1, A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"days","description":"Is the number of nonweekend and non-holiday days before or after start_date","type":"value|range","optional":false},{"name":"weekend","description":"Is a number or string specifying when weekends occur","type":"value|range","optional":true},{"name":"holidays","description":"Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays","type":"value|range","optional":true}]},{"name":"DAYS","category":"date-time","id":420,"description":"Returns the number of days between the two dates.","example":"=DAYS(DATE(2024, 1, 1), DATE(2024, 1, 1))","parameters":[{"name":"endDate","description":"Start_date and end_date are the two dates between which you want to know the number of days","type":"date","optional":false},{"name":"startDate","description":"Start_date and end_date are the two dates between which you want to know the number of days","type":"date","optional":false}]},{"name":"ISOWEEKNUM","category":"date-time","id":431,"description":"Returns the ISO week number in the year for a given date","example":"=ISOWEEKNUM(DATE(2024, 1, 1))","parameters":[{"name":"date","description":"Is the date-time code used by Microsoft Excel for date and time calculation","type":"date","optional":false}]}]`,
    );
  }),
  qo,
  Jo = e(() => {
    qo = JSON.parse(
      `[{"name":"HEX2BIN","category":"engineering","id":237,"description":"Converts a Hexadecimal number to binary","example":"=HEX2BIN(10, A1)","parameters":[{"name":"numberParam","description":"Is the hexadecimal number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"HEX2DEC","category":"engineering","id":238,"description":"Converts a hexadecimal number to decimal","example":"=HEX2DEC(10)","parameters":[{"name":"numberParam","description":"Is the hexadecimal number you want to convert","type":"number|range","optional":false}]},{"name":"HEX2OCT","category":"engineering","id":239,"description":"Converts a hexadecimal number to octal","example":"=HEX2OCT(10, A1)","parameters":[{"name":"numberParam","description":"Is the hexadecimal number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"DEC2BIN","category":"engineering","id":240,"description":"Converts a decimal number to binary","example":"=DEC2BIN(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal integer you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"DEC2HEX","category":"engineering","id":241,"description":"Converts a decimal number to hexadecimal","example":"=DEC2HEX(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal integer you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"DEC2OCT","category":"engineering","id":242,"description":"Converts a decimal number to octal","example":"=DEC2OCT(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal integer you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"OCT2BIN","category":"engineering","id":243,"description":"Converts an octal number to binary","example":"=OCT2BIN(10, A1)","parameters":[{"name":"numberParam","description":"Is the octal number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"OCT2HEX","category":"engineering","id":244,"description":"Converts an octal number to hexadecimal","example":"=OCT2HEX(10, A1)","parameters":[{"name":"numberParam","description":"Is the octal number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"OCT2DEC","category":"engineering","id":245,"description":"Converts an octal number to decimal","example":"=OCT2DEC(10)","parameters":[{"name":"numberParam","description":"Is the octal number you want to convert","type":"number|range","optional":false}]},{"name":"BIN2DEC","category":"engineering","id":246,"description":"Converts a binary number to decimal","example":"=BIN2DEC(10)","parameters":[{"name":"numberParam","description":"Is the binary number you want to convert","type":"number|range","optional":false}]},{"name":"BIN2OCT","category":"engineering","id":247,"description":"Converts a binary number to octal","example":"=BIN2OCT(10, A1)","parameters":[{"name":"numberParam","description":"Is the binary number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"BIN2HEX","category":"engineering","id":248,"description":"Converts a binary number to hexadecimal","example":"=BIN2HEX(10, A1)","parameters":[{"name":"numberParam","description":"Is the binary number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"IMSUB","category":"engineering","id":249,"description":"Returns the difference of two complex numbers","example":"=IMSUB(10, 10)","parameters":[{"name":"inumber1","description":"Is the complex number from which to subtract inumber2","type":"number|range","optional":false},{"name":"inumber2","description":"Is the complex number to subtract from inumber1","type":"number|range","optional":false}]},{"name":"IMDIV","category":"engineering","id":250,"description":"Returns the quotient of two complex numbers","example":"=IMDIV(10, 10)","parameters":[{"name":"inumber1","description":"Is the complex numerator or dividend","type":"number|range","optional":false},{"name":"inumber2","description":"Is the complex denominator or divisor","type":"number|range","optional":false}]},{"name":"IMPOWER","category":"engineering","id":251,"description":"Returns a complex number raised to an integer power","example":"=IMPOWER(10, 10)","parameters":[{"name":"inumber","description":"Is a complex number you want to raise to a power","type":"number|range","optional":false},{"name":"numberParam","description":"Is the power to which you want to raise the complex number","type":"number|range","optional":false}]},{"name":"IMABS","category":"engineering","id":252,"description":"Returns the absolute value (modulus) of a complex number","example":"=IMABS(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the absolute value","type":"number|range","optional":false}]},{"name":"IMSQRT","category":"engineering","id":253,"description":"Returns the square root of a complex number","example":"=IMSQRT(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the square root","type":"number|range","optional":false}]},{"name":"IMLN","category":"engineering","id":254,"description":"Returns the natural logarithm of a complex number","example":"=IMLN(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the natural logarithm","type":"number|range","optional":false}]},{"name":"IMLOG2","category":"engineering","id":255,"description":"Returns the base-2 logarithm of a complex number","example":"=IMLOG2(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the base-2 logarithm","type":"number|range","optional":false}]},{"name":"IMLOG10","category":"engineering","id":256,"description":"Returns the base-10 logarithm of a complex number","example":"=IMLOG10(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the common logarithm","type":"number|range","optional":false}]},{"name":"IMSIN","category":"engineering","id":257,"description":"Returns the sine of a complex number","example":"=IMSIN(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the sine","type":"number|range","optional":false}]},{"name":"IMCOS","category":"engineering","id":258,"description":"Returns the cosine of a complex number","example":"=IMCOS(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the cosine","type":"number|range","optional":false}]},{"name":"IMEXP","category":"engineering","id":259,"description":"Returns the exponential of a complex number","example":"=IMEXP(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the exponential","type":"number|range","optional":false}]},{"name":"IMARGUMENT","category":"engineering","id":260,"description":"Returns the argument q, an angle expressed in radians","example":"=IMARGUMENT(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the argument","type":"number|range","optional":false}]},{"name":"IMCONJUGATE","category":"engineering","id":261,"description":"Returns the complex conjugate of a complex number","example":"=IMCONJUGATE(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the conjugate","type":"number|range","optional":false}]},{"name":"IMAGINARY","category":"engineering","id":262,"description":"Returns the imaginary coefficient of a complex number","example":"=IMAGINARY(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the imaginary coefficient","type":"number|range","optional":false}]},{"name":"IMREAL","category":"engineering","id":263,"description":"Returns the real coefficient of a complex number","example":"=IMREAL(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the real coefficient","type":"number|range","optional":false}]},{"name":"COMPLEX","category":"engineering","id":264,"description":"Converts real and imaginary coefficients into a complex number","example":"=COMPLEX(A1, A1, A1)","parameters":[{"name":"realNum","description":"Is the real coefficient of the complex number","type":"value|range","optional":false},{"name":"iNum","description":"Is the imaginary coefficient of the complex number","type":"value|range","optional":false},{"name":"suffix","description":"Is the suffix for the imaginary component of the complex number","type":"value|range","optional":true}]},{"name":"IMSUM","category":"engineering","id":265,"description":"Returns the sum of complex numbers","example":"=IMSUM(10, C1:C5, 10, C1:C5)","parameters":[{"name":"inumber1","description":"Are from 1 to 255 complex numbers to add","type":"number|range","optional":false},{"name":"inumber2","description":"Number or reference.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"IMPRODUCT","category":"engineering","id":266,"description":"Returns the product of 1 to 255 complex numbers","example":"=IMPRODUCT(10, C1:C5, 10, C1:C5)","parameters":[{"name":"inumber1","description":"Inumber1, Inumber2,... are from 1 to 255 complex numbers to multiply.","type":"number|range","optional":false},{"name":"inumber2","description":"Number or reference.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"DELTA","category":"engineering","id":271,"description":"Tests whether two numbers are equal","example":"=DELTA(10, 20)","parameters":[{"name":"number1","description":"Is the first number","type":"number|range","optional":false},{"name":"number2","description":"Is the second number","type":"number|range","optional":true}]},{"name":"GESTEP","category":"engineering","id":272,"description":"Tests whether a number is greater than a threshold value","example":"=GESTEP(10, A1)","parameters":[{"name":"numberParam","description":"Is the value to test against step","type":"number|range","optional":false},{"name":"step","description":"Is the threshold value","type":"value|range","optional":true}]},{"name":"ERF","category":"engineering","id":276,"description":"Returns the error function","example":"=ERF(A1, A1)","parameters":[{"name":"lowerLimit","description":"Is the lower bound for integrating ERF","type":"value|range","optional":false},{"name":"upperLimit","description":"Is the upper bound for integrating ERF","type":"value|range","optional":true}]},{"name":"ERFC","category":"engineering","id":277,"description":"Returns the complementary error function","example":"=ERFC(A1)","parameters":[{"name":"x","description":"Is the lower bound for integrating ERF","type":"value|range","optional":false}]},{"name":"BESSELJ","category":"engineering","id":278,"description":"Returns the Bessel function Jn(x)","example":"=BESSELJ(A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function","type":"value|range","optional":false},{"name":"n","description":"Is the order of the Bessel function","type":"value|range","optional":false}]},{"name":"BESSELK","category":"engineering","id":279,"description":"Returns the modified Bessel function Kn(x)","example":"=BESSELK(A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function","type":"value|range","optional":false},{"name":"n","description":"Is the order of the function","type":"value|range","optional":false}]},{"name":"BESSELY","category":"engineering","id":280,"description":"Returns the Bessel function Yn(x)","example":"=BESSELY(A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function","type":"value|range","optional":false},{"name":"n","description":"Is the order of the function","type":"value|range","optional":false}]},{"name":"BESSELI","category":"engineering","id":281,"description":"Returns the modified Bessel function In(x)","example":"=BESSELI(A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function","type":"value|range","optional":false},{"name":"n","description":"Is the order of the Bessel function","type":"value|range","optional":false}]},{"name":"CONVERT","category":"engineering","id":320,"description":"Converts a number from one measurement system to another","example":"=CONVERT(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the value in from_units to convert","type":"number|range","optional":false},{"name":"fromUnit","description":"Is the units for number","type":"value|range","optional":false},{"name":"toUnit","description":"Is the units for the result","type":"value|range","optional":false}]},{"name":"ERF.PRECISE","category":"engineering","id":392,"description":"Returns the error function","example":"=ERF.PRECISE(A1)","parameters":[{"name":"x","description":"Is the lower bound for integrating ERF.PRECISE","type":"value|range","optional":false}]},{"name":"ERFC.PRECISE","category":"engineering","id":393,"description":"Returns the complementary error function","example":"=ERFC.PRECISE(A1)","parameters":[{"name":"x","description":"Is the lower bound for integrating ERFC.PRECISE","type":"value|range","optional":false}]},{"name":"IMTAN","category":"engineering","id":403,"description":"Returns the tangent of a complex number","example":"=IMTAN(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the tangent","type":"number|range","optional":false}]},{"name":"IMCOT","category":"engineering","id":404,"description":"Returns the cotangent of a complex number","example":"=IMCOT(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the cotangent","type":"number|range","optional":false}]},{"name":"IMCSC","category":"engineering","id":405,"description":"Returns the cosecant of a complex number","example":"=IMCSC(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the cosecant","type":"number|range","optional":false}]},{"name":"IMCSCH","category":"engineering","id":406,"description":"Returns the hyperbolic cosecant of a complex number","example":"=IMCSCH(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the hyperbolic cosecant","type":"number|range","optional":false}]},{"name":"IMSEC","category":"engineering","id":407,"description":"Returns the secant of a complex number","example":"=IMSEC(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the secant","type":"number|range","optional":false}]},{"name":"IMSECH","category":"engineering","id":408,"description":"Returns the hyperbolic secant of a complex number","example":"=IMSECH(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the hyperbolic secant","type":"number|range","optional":false}]},{"name":"BITAND","category":"engineering","id":409,"description":"Returns a bitwise 'And' of two numbers","example":"=BITAND(10, 20)","parameters":[{"name":"number1","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"number2","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false}]},{"name":"BITOR","category":"engineering","id":410,"description":"Returns a bitwise 'Or' of two numbers","example":"=BITOR(10, 20)","parameters":[{"name":"number1","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"number2","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false}]},{"name":"BITXOR","category":"engineering","id":411,"description":"Returns a bitwise 'Exclusive Or' of two numbers","example":"=BITXOR(10, 20)","parameters":[{"name":"number1","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"number2","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false}]},{"name":"BITLSHIFT","category":"engineering","id":412,"description":"Returns a number shifted left by shift_amount bits","example":"=BITLSHIFT(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"shiftAmount","description":"Is the number of bits that you want to shift Number left by","type":"value|range","optional":false}]},{"name":"BITRSHIFT","category":"engineering","id":413,"description":"Returns a number shifted right by shift_amount bits","example":"=BITRSHIFT(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"shiftAmount","description":"Is the number of bits that you want to shift Number right by","type":"value|range","optional":false}]},{"name":"IMSINH","category":"engineering","id":440,"description":"Returns the hyperbolic sine of a complex number","example":"=IMSINH(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the hyperbolic sine","type":"number|range","optional":false}]},{"name":"IMCOSH","category":"engineering","id":441,"description":"Returns the hyperbolic cosine of a complex number","example":"=IMCOSH(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the hyperbolic cosine","type":"number|range","optional":false}]}]`,
    );
  }),
  Yo,
  Xo = e(() => {
    Yo = JSON.parse(
      `[{"name":"NPV","category":"financial","id":12,"description":"Returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values)","example":"=NPV(A1, A1:A5, C1:C5, C1:C5)","parameters":[{"name":"rate","description":"Is the rate of discount over the length of one period","type":"value|range","optional":false},{"name":"value1","description":"Are 1 to 254 payments and income, equally spaced in time and occurring at the end of each period","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"PV","category":"financial","id":54,"description":"Returns the present value of an investment: the total amount that a series of future payments is worth now","example":"=PV(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods in an investment","type":"value|range","optional":false},{"name":"pmt","description":"Is the payment made each period and cannot change over the life of the investment","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"FV","category":"financial","id":55,"description":"Returns the future value of an investment based on periodic, constant payments and a constant interest rate","example":"=FV(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods in the investment","type":"value|range","optional":false},{"name":"pmt","description":"Is the payment made each period; it cannot change over the life of the investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value, or the lump-sum amount that a series of future payments is worth now. If omitted, Pv = 0","type":"value|range","optional":true},{"name":"typeParam","description":"Is a value representing the timing of payment: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"NPER","category":"financial","id":56,"description":"Returns the number of periods for an investment based on periodic, constant payments and a constant interest rate","example":"=NPER(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"pmt","description":"Is the payment made each period; it cannot change over the life of the investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value, or the lump-sum amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, zero is used","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"PMT","category":"financial","id":57,"description":"Calculates the payment for a loan based on constant payments and a constant interest rate","example":"=PMT(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period for the loan. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payments for the loan","type":"value|range","optional":false},{"name":"pv","description":"Is the present value: the total amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made, 0 (zero) if omitted","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"RATE","category":"financial","id":58,"description":"Returns the interest rate per period of a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR","example":"=RATE(A1, A1, A1)","parameters":[{"name":"nper","description":"Is the total number of payment periods for the loan or investment","type":"value|range","optional":false},{"name":"pmt","description":"Is the payment made each period and cannot change over the life of the loan or investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value: the total amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, uses Fv = 0","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true},{"name":"guess","description":"Is your guess for what the rate will be; if omitted, Guess = 0.1 (10 percent)","type":"value|range","optional":true}]},{"name":"MIRR","category":"financial","id":59,"description":"Returns the internal rate of return for a series of periodic cash flows, considering both cost of investment and interest on reinvestment of cash","example":"=MIRR(A1:A5, A1, A1)","parameters":[{"name":"values","description":"Is an array or a reference to cells that contain numbers that represent a series of payments (negative) and income (positive) at regular periods","type":"value|range","optional":false},{"name":"financeRate","description":"Is the interest rate you pay on the money used in the cash flows","type":"value|range","optional":false},{"name":"reinvestRate","description":"Is the interest rate you receive on the cash flows as you reinvest them","type":"value|range","optional":false}]},{"name":"IRR","category":"financial","id":60,"description":"Returns the internal rate of return for a series of cash flows","example":"=IRR(A1:A5, A1)","parameters":[{"name":"values","description":"Is an array or a reference to cells that contain numbers for which you want to calculate the internal rate of return","type":"value|range","optional":false},{"name":"guess","description":"Is a number that you guess is close to the result of IRR; 0.1 (10 percent) if omitted","type":"value|range","optional":true}]},{"name":"SLN","category":"financial","id":108,"description":"Returns the straight-line depreciation of an asset for one period","example":"=SLN(A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false}]},{"name":"SYD","category":"financial","id":109,"description":"Returns the sum-of-years' digits depreciation of an asset for a specified period","example":"=SYD(A1, A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false},{"name":"per","description":"Is the period and must use the same units as Life","type":"value|range","optional":false}]},{"name":"DDB","category":"financial","id":110,"description":"Returns the depreciation of an asset for a specified period using the double-declining balance method or some other method you specify","example":"=DDB(A1, A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false},{"name":"period","description":"Is the period for which you want to calculate the depreciation. Period must use the same units as Life","type":"value|range","optional":false},{"name":"factor","description":"Is the rate at which the balance declines. If Factor is omitted, it is assumed to be 2 (the double-declining balance method)","type":"value|range","optional":true}]},{"name":"IPMT","category":"financial","id":116,"description":"Returns the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate","example":"=IPMT(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"per","description":"Is the period for which you want to find the interest and must be in the range 1 to Nper","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods in an investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value, or the lump-sum amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, Fv = 0","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value representing the timing of payment: at the end of the period = 0 or omitted, at the beginning of the period = 1","type":"value|range","optional":true}]},{"name":"PPMT","category":"financial","id":117,"description":"Returns the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate","example":"=PPMT(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"per","description":"Specifies the period and must be in the range 1 to nper","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods in an investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value: the total amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or cash balance you want to attain after the last payment is made","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"VDB","category":"financial","id":136,"description":"Returns the depreciation of an asset for any period you specify, including partial periods, using the double-declining balance method or some other method you specify","example":"=VDB(A1, A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false},{"name":"startPeriod","description":"Is the starting period for which you want to calculate the depreciation, in the same units as Life","type":"value|range","optional":false},{"name":"endPeriod","description":"Is the ending period for which you want to calculate the depreciation, in the same units as Life","type":"value|range","optional":false},{"name":"factor","description":"Is the rate at which the balance declines, 2 (double-declining balance) if omitted","type":"value|range","optional":true},{"name":"noSwitch","description":"Switch to straight-line depreciation when depreciation is greater than the declining balance = FALSE or omitted; do not switch = TRUE","type":"value|range","optional":true}]},{"name":"DB","category":"financial","id":146,"description":"Returns the depreciation of an asset for a specified period using the fixed-declining balance method","example":"=DB(A1, A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false},{"name":"period","description":"Is the period for which you want to calculate the depreciation. Period must use the same units as Life","type":"value|range","optional":false},{"name":"month","description":"Is the number of months in the first year. If month is omitted, it is assumed to be 12","type":"value|range","optional":true}]},{"name":"ISPMT","category":"financial","id":221,"description":"Returns the interest paid during a specific period of an investment","example":"=ISPMT(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"per","description":"Period for which you want to find the interest","type":"value|range","optional":false},{"name":"nper","description":"Number of payment periods in an investment","type":"value|range","optional":false},{"name":"pv","description":"Lump sum amount that a series of future payments is right now","type":"value|range","optional":false}]},{"name":"XIRR","category":"financial","id":282,"description":"Returns the internal rate of return for a schedule of cash flows","example":"=XIRR(A1:A5, DATE(2024, 1, 1), A1)","parameters":[{"name":"values","description":"Is a series of cash flows that correspond to a schedule of payments in dates","type":"value|range","optional":false},{"name":"dates","description":"Is a schedule of payment dates that corresponds to the cash flow payments","type":"date","optional":false},{"name":"guess","description":"Is a number that you guess is close to the result of XIRR","type":"value|range","optional":true}]},{"name":"XNPV","category":"financial","id":283,"description":"Returns the net present value for a schedule of cash flows","example":"=XNPV(A1, A1:A5, DATE(2024, 1, 1))","parameters":[{"name":"rate","description":"Is the discount rate to apply to the cash flows","type":"value|range","optional":false},{"name":"values","description":"Is a series of cash flows that correspond to a schedule of payments in dates","type":"value|range","optional":false},{"name":"dates","description":"Is a schedule of payment dates that corresponds to the cash flow payments","type":"date","optional":false}]},{"name":"PRICEMAT","category":"financial","id":284,"description":"Returns the price per $100 face value of a security that pays interest at maturity","example":"=PRICEMAT(A1, A1, TRUE, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"issue","description":"Is the security's issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"rate","description":"Is the security's interest rate at date of issue","type":"value|range","optional":false},{"name":"yld","description":"Is the security's annual yield","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"YIELDMAT","category":"financial","id":285,"description":"Returns the annual yield of a security that pays interest at maturity","example":"=YIELDMAT(A1, A1, TRUE, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"issue","description":"Is the security's issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"rate","description":"Is the security's interest rate at date of issue","type":"value|range","optional":false},{"name":"pr","description":"Is the security's price per $100 face value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"INTRATE","category":"financial","id":286,"description":"Returns the interest rate for a fully invested security","example":"=INTRATE(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"investment","description":"Is the amount invested in the security","type":"value|range","optional":false},{"name":"redemption","description":"Is the amount to be received at maturity","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"RECEIVED","category":"financial","id":287,"description":"Returns the amount received at maturity for a fully invested security","example":"=RECEIVED(A1, A1, A1, 10)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"investment","description":"Is the amount invested in the security","type":"value|range","optional":false},{"name":"discount","description":"Is the security's discount rate","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"DISC","category":"financial","id":288,"description":"Returns the discount rate for a security","example":"=DISC(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"pr","description":"Is the security's price per $100 face value","type":"value|range","optional":false},{"name":"redemption","description":"Is the security's redemption value per $100 face value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"PRICEDISC","category":"financial","id":289,"description":"Returns the price per $100 face value of a discounted security","example":"=PRICEDISC(A1, A1, 10, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"discount","description":"Is the security's discount rate","type":"value|range","optional":false},{"name":"redemption","description":"Is the security's redemption value per $100 face value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"YIELDDISC","category":"financial","id":290,"description":"Returns the annual yield for a discounted security. For example, a treasury bill","example":"=YIELDDISC(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"pr","description":"Is the security's price per $100 face value","type":"value|range","optional":false},{"name":"redemption","description":"Is the security's redemption value per $100 face value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"TBILLEQ","category":"financial","id":291,"description":"Returns the bond-equivalent yield for a treasury bill","example":"=TBILLEQ(A1, A1, 10)","parameters":[{"name":"settlement","description":"Is the Treasury bill's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the Treasury bill's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"discount","description":"Is the Treasury bill's discount rate","type":"value|range","optional":false}]},{"name":"TBILLPRICE","category":"financial","id":292,"description":"Returns the price per $100 face value for a treasury bill","example":"=TBILLPRICE(A1, A1, 10)","parameters":[{"name":"settlement","description":"Is the Treasury bill's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the Treasury bill's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"discount","description":"Is the Treasury bill's discount rate","type":"value|range","optional":false}]},{"name":"TBILLYIELD","category":"financial","id":293,"description":"Returns the yield for a treasury bill","example":"=TBILLYIELD(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the Treasury bill's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the Treasury bill's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"pr","description":"Is the Treasury Bill's price per $100 face value","type":"value|range","optional":false}]},{"name":"PRICE","category":"financial","id":294,"description":"Returns the price per $100 face value of a security that pays periodic interest","example":"=PRICE(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security's annual coupon rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security's annual yield","type":"value|range","optional":false},{"name":"redemption","description":"Is the security's redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"YIELD","category":"financial","id":295,"description":"Returns the yield on a security that pays periodic interest","example":"=YIELD(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security's annual coupon rate","type":"value|range","optional":false},{"name":"pr","description":"Is the security's price per $100 face value","type":"value|range","optional":false},{"name":"redemption","description":"Is the security's redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"DOLLARDE","category":"financial","id":296,"description":"Converts a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number","example":"=DOLLARDE(A1, A1)","parameters":[{"name":"fractionalDollar","description":"Is a number expressed as a fraction","type":"value|range","optional":false},{"name":"fraction","description":"Is the integer to use in the denominator of the fraction","type":"value|range","optional":false}]},{"name":"DOLLARFR","category":"financial","id":297,"description":"Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction","example":"=DOLLARFR(A1, A1)","parameters":[{"name":"decimalDollar","description":"Is a decimal number","type":"value|range","optional":false},{"name":"fraction","description":"Is the integer to use in the denominator of a fraction","type":"value|range","optional":false}]},{"name":"NOMINAL","category":"financial","id":298,"description":"Returns the annual nominal interest rate","example":"=NOMINAL(A1, A1)","parameters":[{"name":"effectRate","description":"Is the effective interest rate","type":"value|range","optional":false},{"name":"npery","description":"Is the number of compounding periods per year","type":"value|range","optional":false}]},{"name":"EFFECT","category":"financial","id":299,"description":"Returns the effective annual interest rate","example":"=EFFECT(A1, A1)","parameters":[{"name":"nominalRate","description":"Is the nominal interest rate","type":"value|range","optional":false},{"name":"npery","description":"Is the number of compounding periods per year","type":"value|range","optional":false}]},{"name":"CUMPRINC","category":"financial","id":300,"description":"Returns the cumulative principal paid on a loan between two periods","example":"=CUMPRINC(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods","type":"value|range","optional":false},{"name":"pv","description":"Is the present value","type":"value|range","optional":false},{"name":"startPeriod","description":"Is the first period in the calculation","type":"value|range","optional":false},{"name":"endPeriod","description":"Is the last period in the calculation","type":"value|range","optional":false},{"name":"typeParam","description":"Is the timing of the payment","type":"value|range","optional":false}]},{"name":"CUMIPMT","category":"financial","id":301,"description":"Returns the cumulative interest paid between two periods","example":"=CUMIPMT(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods","type":"value|range","optional":false},{"name":"pv","description":"Is the present value","type":"value|range","optional":false},{"name":"startPeriod","description":"Is the first period in the calculation","type":"value|range","optional":false},{"name":"endPeriod","description":"Is the last period in the calculation","type":"value|range","optional":false},{"name":"typeParam","description":"Is the timing of the payment","type":"value|range","optional":false}]},{"name":"COUPDAYBS","category":"financial","id":305,"description":"Returns the number of days from the beginning of the coupon period to the settlement date","example":"=COUPDAYBS(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPDAYS","category":"financial","id":306,"description":"Returns the number of days in the coupon period that contains the settlement date","example":"=COUPDAYS(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPDAYSNC","category":"financial","id":307,"description":"Returns the number of days from the settlement date to the next coupon date","example":"=COUPDAYSNC(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPNCD","category":"financial","id":308,"description":"Returns the next coupon date after the settlement date","example":"=COUPNCD(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPNUM","category":"financial","id":309,"description":"Returns the number of coupons payable between the settlement date and maturity date","example":"=COUPNUM(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPPCD","category":"financial","id":310,"description":"Returns the previous coupon date before the settlement date","example":"=COUPPCD(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"DURATION","category":"financial","id":311,"description":"Returns the annual duration of a security with periodic interest payments","example":"=DURATION(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"coupon","description":"Is the security's annual coupon rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security's annual yield","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"MDURATION","category":"financial","id":312,"description":"Returns the Macauley modified duration for a security with an assumed par value of $100","example":"=MDURATION(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"coupon","description":"Is the security's annual coupon rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security's annual yield","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"ODDLPRICE","category":"financial","id":313,"description":"Returns the price per $100 face value of a security with an odd last period","example":"=ODDLPRICE(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"lastInterest","description":"Is the security's last coupon date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security's interest rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security's annual yield","type":"value|range","optional":false},{"name":"redemption","description":"Is the security's redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"ODDLYIELD","category":"financial","id":314,"description":"Returns the yield of a security with an odd last period","example":"=ODDLYIELD(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"lastInterest","description":"Is the security's last coupon date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security's interest rate","type":"value|range","optional":false},{"name":"pr","description":"Is the security's price","type":"value|range","optional":false},{"name":"redemption","description":"Is the security's redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"ODDFPRICE","category":"financial","id":315,"description":"Returns the price per $100 face value of a security with an odd first period","example":"=ODDFPRICE(A1, A1, TRUE, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"issue","description":"Is the security's issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"firstCoupon","description":"Is the security's first coupon date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security's interest rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security's annual yield","type":"value|range","optional":false},{"name":"redemption","description":"Is the security's redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"ODDFYIELD","category":"financial","id":316,"description":"Returns the yield of a security with an odd first period","example":"=ODDFYIELD(A1, A1, TRUE, A1)","parameters":[{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"issue","description":"Is the security's issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"firstCoupon","description":"Is the security's first coupon date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security's interest rate","type":"value|range","optional":false},{"name":"pr","description":"Is the security's price","type":"value|range","optional":false},{"name":"redemption","description":"Is the security's redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"AMORLINC","category":"financial","id":319,"description":"Returns the prorated linear depreciation of an asset for each accounting period.","example":"=AMORLINC(A1, DATE(2024, 1, 1), A1, A1)","parameters":[{"name":"cost","description":"Is the cost of the asset","type":"value|range","optional":false},{"name":"datePurchased","description":"Is the date the asset is purchased","type":"date","optional":false},{"name":"firstPeriod","description":"Is the date of the end of the first period","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of life of the asset.","type":"value|range","optional":false},{"name":"period","description":"Is the period","type":"value|range","optional":false},{"name":"rate","description":"Is the rate of depreciation","type":"value|range","optional":false},{"name":"basis","description":"Year_basis : 0 for year of 360 days, 1 for actual, 3 for year of 365 days.","type":"value|range","optional":true}]},{"name":"ACCRINT","category":"financial","id":321,"description":"Returns the accrued interest for a security that pays periodic interest.","example":"=ACCRINT(TRUE, A1, A1, A1)","parameters":[{"name":"issue","description":"Is the security's issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"firstInterest","description":"Is the security's first interest date, expressed as a serial date number","type":"value|range","optional":false},{"name":"settlement","description":"Is the security's settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security's annual coupon rate","type":"value|range","optional":false},{"name":"par","description":"Is the security's par value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true},{"name":"_calcMethod","description":"Value, reference, or range.","type":"value|range","optional":true}]},{"name":"ACCRINTM","category":"financial","id":322,"description":"Returns the accrued interest for a security that pays interest at maturity","example":"=ACCRINTM(TRUE, A1, A1, A1)","parameters":[{"name":"issue","description":"Is the security's issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"settlement","description":"Is the security's maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security's annual coupon rate","type":"value|range","optional":false},{"name":"par","description":"Is the security's par value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"FVSCHEDULE","category":"financial","id":328,"description":"Returns the future value of an initial principal after applying a series of compound interest rates","example":"=FVSCHEDULE(A1, A1)","parameters":[{"name":"principal","description":"Is the present value","type":"value|range","optional":false},{"name":"schedule","description":"Is an array of interest rates to apply","type":"value|range","optional":false}]},{"name":"PDURATION","category":"financial","id":417,"description":"Returns the number of periods required by an investment to reach a specified value","example":"=PDURATION(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period.","type":"value|range","optional":false},{"name":"pv","description":"Is the present value of the investment","type":"value|range","optional":false},{"name":"fv","description":"Is the desired future value of the investment","type":"value|range","optional":false}]},{"name":"RRI","category":"financial","id":426,"description":"Returns an equivalent interest rate for the growth of an investment","example":"=RRI(A1, A1, A1)","parameters":[{"name":"nper","description":"Is the number of periods for the investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value of the investment","type":"value|range","optional":false},{"name":"fv","description":"Is the future value of the investment","type":"value|range","optional":false}]},{"name":"STOCKHISTORY","category":"financial","id":461,"description":"Returns an array of historical quote data for a symbol and date range you specify.","example":"=STOCKHISTORY(A1, DATE(2024, 1, 1), C1:C5, C1:C5)","parameters":[{"name":"stock","description":"Symbol of financial instrument to be considered or a Stock data type.","type":"value|range","optional":false},{"name":"startDate","description":"First date to return data from.","type":"date","optional":false},{"name":"endDate","description":"Last date to return data from.","type":"date","optional":true},{"name":"interval","description":"A number indicating the granularity of the data; 0 - Daily, 1 - Weekly, 2 - Monthly","type":"value|range","optional":true},{"name":"headers","description":"A logical value to add column header data; 0 - No column header, 1 - Show column header, 2 - Show instrument identifier and column header","type":"value|range","optional":true},{"name":"properties1","description":"A number indicating which column of data to return; 0 through 5","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]}]`,
    );
  }),
  Zo,
  Qo = e(() => {
    Zo = [
      {
        name: `ISNA`,
        category: `information`,
        id: 3,
        description: `Checks whether a value is #N/A, and returns TRUE or FALSE`,
        example: `=ISNA(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISERROR`,
        category: `information`,
        id: 4,
        description: `Checks whether a value is an error, and returns TRUE or FALSE`,
        example: `=ISERROR(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `NA`,
        category: `information`,
        id: 11,
        description: `Returns the error value #N/A (value not available)`,
        example: `=NA()`,
        parameters: [],
      },
      {
        name: `TYPE`,
        category: `information`,
        id: 79,
        description: `Returns an integer representing the data type of a value: number = 1; text = 2; logical value = 4; error value = 16; array = 64; compound data = 128`,
        example: `=TYPE(A1:A5)`,
        parameters: [
          { name: `value`, description: `Can be any value`, type: `value|range`, optional: !1 },
        ],
      },
      {
        name: `ISREF`,
        category: `information`,
        id: 86,
        description: `Checks whether a value is a reference, and returns TRUE or FALSE`,
        example: `=ISREF(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISERR`,
        category: `information`,
        id: 100,
        description: `Checks whether a value is an error other than #N/A, and returns TRUE or FALSE`,
        example: `=ISERR(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISTEXT`,
        category: `information`,
        id: 101,
        description: `Checks whether a value is text, and returns TRUE or FALSE`,
        example: `=ISTEXT(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISNUMBER`,
        category: `information`,
        id: 102,
        description: `Checks whether a value is a number, and returns TRUE or FALSE`,
        example: `=ISNUMBER(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISBLANK`,
        category: `information`,
        id: 103,
        description: `Checks whether a reference is to an empty cell, and returns TRUE or FALSE`,
        example: `=ISBLANK(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the cell or a name that refers to the cell you want to test`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `N`,
        category: `information`,
        id: 105,
        description: `Converts non-number value to a number, dates to serial numbers, TRUE to 1, anything else to 0 (zero)`,
        example: `=N(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the value you want converted`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISNONTEXT`,
        category: `information`,
        id: 122,
        description: `Checks whether a value is not text (blank cells are not text), and returns TRUE or FALSE`,
        example: `=ISNONTEXT(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the value you want tested: a cell; a formula; or a name referring to a cell, formula, or value`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISLOGICAL`,
        category: `information`,
        id: 128,
        description: `Checks whether a value is a logical value (TRUE or FALSE), and returns TRUE or FALSE`,
        example: `=ISLOGICAL(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ERROR.TYPE`,
        category: `information`,
        id: 148,
        description: `Returns a number matching an error value.`,
        example: `=ERROR.TYPE(A1)`,
        parameters: [
          {
            name: `errorVal`,
            description: `Is the error value for which you want the identifying number, and can be an actual error value or a reference to a cell containing an error value`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISEVEN`,
        category: `information`,
        id: 273,
        description: `Returns TRUE if the number is even`,
        example: `=ISEVEN(10)`,
        parameters: [
          {
            name: `numberParam`,
            description: `Is the value to test`,
            type: `number|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISODD`,
        category: `information`,
        id: 274,
        description: `Returns TRUE if the number is odd`,
        example: `=ISODD(10)`,
        parameters: [
          {
            name: `numberParam`,
            description: `Is the value to test`,
            type: `number|range`,
            optional: !1,
          },
        ],
      },
      {
        name: `SHEET`,
        category: `information`,
        id: 433,
        description: `Returns the sheet number of the referenced sheet`,
        example: `=SHEET(A1:A5)`,
        parameters: [
          {
            name: `value`,
            description: `Is the name of a sheet or a reference that you want the sheet number of. If omitted the number of the sheet containing the function is returned`,
            type: `value|range`,
            optional: !0,
          },
        ],
      },
      {
        name: `SHEETS`,
        category: `information`,
        id: 434,
        description: `Returns the number of sheets in a reference`,
        example: `=SHEETS(A1:A5)`,
        parameters: [
          {
            name: `reference`,
            description: `Is a reference for which you want to know the number of sheets it contains. If omitted the number of sheets in the workbook containing the function is returned`,
            type: `range`,
            optional: !0,
          },
        ],
      },
      {
        name: `ISFORMULA`,
        category: `information`,
        id: 436,
        description: `Checks whether a reference is to a cell containing a formula, and returns TRUE or FALSE`,
        example: `=ISFORMULA(A1:A5)`,
        parameters: [
          {
            name: `reference`,
            description: `Is a reference to the cell you want to test. Reference can be a cell reference, a formula, or name that refers to a cell`,
            type: `range`,
            optional: !1,
          },
        ],
      },
      {
        name: `ISOMITTED`,
        category: `information`,
        id: 481,
        description: `Checks whether the value is omitted, and returns TRUE or FALSE`,
        example: `=ISOMITTED(A1)`,
        parameters: [
          {
            name: `argument`,
            description: `Is the value you want to test, such as a LAMBDA parameter`,
            type: `value|range`,
            optional: !1,
          },
        ],
      },
    ];
  }),
  $o,
  es = e(() => {
    $o = JSON.parse(
      `[{"name":"IF","category":"logical","id":2,"description":"Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE","example":"=IF(TRUE, A1:A5)","parameters":[{"name":"logicalTest","description":"Is any value or expression that can be evaluated to TRUE or FALSE","type":"boolean","optional":false},{"name":"valueIfTrue","description":"Is the value that is returned if Logical_test is TRUE. If omitted, TRUE is returned. You can nest up to seven IF functions","type":"value|range","optional":true},{"name":"valueIfFalse","description":"Is the value that is returned if Logical_test is FALSE. If omitted, FALSE is returned","type":"value|range","optional":true}]},{"name":"TRUE","category":"logical","id":35,"description":"Returns the logical value TRUE","example":"=TRUE()","parameters":[]},{"name":"FALSE","category":"logical","id":36,"description":"Returns the logical value FALSE","example":"=FALSE()","parameters":[]},{"name":"AND","category":"logical","id":37,"description":"Checks whether all arguments are TRUE, and returns TRUE if all arguments are TRUE","example":"=AND(TRUE, C1:C5, TRUE, C1:C5)","parameters":[{"name":"logical1","description":"Are 1 to 255 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references","type":"boolean","optional":false},{"name":"logical2","description":"TRUE or FALSE.","type":"boolean","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"OR","category":"logical","id":38,"description":"Checks whether any of the arguments are TRUE, and returns TRUE or FALSE. Returns FALSE only if all arguments are FALSE","example":"=OR(TRUE, C1:C5, TRUE, C1:C5)","parameters":[{"name":"logical1","description":"Are 1 to 255 conditions that you want to test that can be either TRUE or FALSE","type":"boolean","optional":false},{"name":"logical2","description":"TRUE or FALSE.","type":"boolean","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"NOT","category":"logical","id":39,"description":"Changes FALSE to TRUE, or TRUE to FALSE","example":"=NOT(TRUE)","parameters":[{"name":"logical","description":"Is a value or expression that can be evaluated to TRUE or FALSE","type":"boolean","optional":false}]},{"name":"IFERROR","category":"logical","id":332,"description":"Returns value_if_error if expression is an error and the value of the expression itself otherwise","example":"=IFERROR(A1:A5, A1:A5)","parameters":[{"name":"value","description":"Is any value or expression or reference","type":"value|range","optional":false},{"name":"valueIfError","description":"Is any value or expression or reference","type":"value|range","optional":false}]},{"name":"XOR","category":"logical","id":416,"description":"Returns a logical 'Exclusive Or' of all arguments","example":"=XOR(TRUE, C1:C5, TRUE, C1:C5)","parameters":[{"name":"logical1","description":"Are 1 to 254 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references","type":"boolean","optional":false},{"name":"logical2","description":"TRUE or FALSE.","type":"boolean","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"IFNA","category":"logical","id":437,"description":"Returns the value you specify if the expression resolves to #N/A, otherwise returns the result of the expression","example":"=IFNA(A1:A5, A1:A5)","parameters":[{"name":"value","description":"Is any value or expression or reference","type":"value|range","optional":false},{"name":"valueIfNa","description":"Is any value or expression or reference","type":"value|range","optional":false}]},{"name":"IFS","category":"logical","id":447,"description":"Checks whether one or more conditions are met and returns a value corresponding to the first TRUE condition","example":"=IFS(TRUE, A1:A5, C1:C5, C1:C5)","parameters":[{"name":"logicalTest","description":"Is any value or expression that can be evaluated to TRUE or FALSE","type":"boolean","optional":false},{"name":"valueIfTrue","description":"Is the value returned if Logical_test is TRUE","type":"value|range","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SWITCH","category":"logical","id":448,"description":"Evaluates an expression against a list of values and returns the result corresponding to the first matching value. If there is no match, an optional default value is returned","example":"=SWITCH(A1, A1:A5, A1, C1:C5)","parameters":[{"name":"expression","description":"Is an expression to be evaluated","type":"value|range","optional":false},{"name":"value1","description":"Is a value to be compared with expression","type":"value|range","optional":false},{"name":"result1","description":"Is a result to be returned if the corresponding value matches expression","type":"value|range","optional":false},{"name":"defaultOrValue2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"result2","description":"Value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"LET","category":"logical","id":467,"description":"Assigns calculation results to names. Useful for storing intermediate calculations and values by defining names inside a formula. These names only apply within the scope of the LET function.","example":"=LET(A1, A1, A1, C1:C5)","parameters":[{"name":"name1","description":"The name, or a calculation which can make use of all names within the LET. Names must start with a letter, cannot be the output of a formula, or conflict with range syntax.","type":"value|range","optional":false},{"name":"nameValue1","description":"The value associated with the name.","type":"value|range","optional":false},{"name":"calculationOrName2","description":"Value, reference, or range.","type":"value|range","optional":false},{"name":"nameValue2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"LAMBDA","category":"logical","id":468,"description":"Creates a function value, which can be called within formulas","example":"=LAMBDA(A1, C1:C5, C1:C5)","parameters":[{"name":"parameterOrCalculation","description":"A parameter, or calculation, calculating the result of the function. Parameters cannot be calculated. The last argument to LAMBDA must always be a calculation. The calculation, which may use the parameters, will return a function that can then be called.","type":"value|range","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"MAKEARRAY","category":"logical","id":469,"description":"Returns a calculated array of a specified row and column size, by applying a LAMBDA function.","example":"=MAKEARRAY(A1, A1, A1)","parameters":[{"name":"rows","description":"Is the number of rows in the array. Must be greater than zero.","type":"value|range","optional":false},{"name":"columns","description":"Is the number of columns in the array. Must be greater than zero.","type":"value|range","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to create the array. The LAMBDA takes two parameters, row index and column index.","type":"value|range","optional":false}]},{"name":"MAP","category":"logical","id":476,"description":"Returns an array formed by 'mapping' each value in the array(s) to a new value by applying a lambda to create a new value.","example":"=MAP({1,2;3,4}, {1,2;3,4}, C1:C5, C1:C5)","parameters":[{"name":"array","description":"Is an array to be mapped","type":"array","optional":false},{"name":"lambdaOrArray2","description":"Is a LAMBDA which must be the last argument and must have a parameter for each array passed, or another array to be mapped","type":"array","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"REDUCE","category":"logical","id":477,"description":"Reduces an array to an accumulated value by applying a LAMBDA function to each value and returning the total value in the accumulator.","example":"=REDUCE(A1, {1,2;3,4}, A1)","parameters":[{"name":"initialValue","description":"Is the starting value for the accumulator","type":"value|range","optional":false},{"name":"array","description":"Is an array to be reduced","type":"array","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to reduce the array. The LAMBDA takes two parameters, accumulator and value.","type":"value|range","optional":false}]},{"name":"SCAN","category":"logical","id":478,"description":"Scans an array by applying a LAMBDA function to each value and returns an array that has each intermediate value","example":"=SCAN(A1, {1,2;3,4}, A1)","parameters":[{"name":"initialValue","description":"Is the the starting value for the accumulator","type":"value|range","optional":false},{"name":"array","description":"Is an array to be scanned","type":"array","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to scan the array. The LAMBDA takes two parameters, accumulator and value.","type":"value|range","optional":false}]},{"name":"BYROW","category":"logical","id":479,"description":"Applies a LAMBDA function to each row and returns an array of the results.","example":"=BYROW({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is an array to be separated by row","type":"array","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to scan the array. The LAMBDA takes two parameters, accumulator and value.","type":"value|range","optional":true}]},{"name":"BYCOL","category":"logical","id":480,"description":"Applies a LAMBDA function to each column and returns an array of the results.","example":"=BYCOL({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is an array to be separated by column","type":"array","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to scan the array. The LAMBDA takes two parameters, accumulator and value.","type":"value|range","optional":true}]}]`,
    );
  }),
  ts,
  ns = e(() => {
    ts = JSON.parse(
      `[{"name":"ROW","category":"lookup-reference","id":9,"description":"Returns the row number of a reference","example":"=ROW(A1:A5)","parameters":[{"name":"reference","description":"Is the cell or a single range of cells for which you want the row number; if omitted, returns the cell containing the ROW function","type":"range","optional":true}]},{"name":"COLUMN","category":"lookup-reference","id":10,"description":"Returns the column number of a reference","example":"=COLUMN(A1:A5)","parameters":[{"name":"reference","description":"Is the cell or range of contiguous cells for which you want the column number. If omitted, the cell containing the COLUMN function is used","type":"range","optional":true}]},{"name":"LOOKUP","category":"lookup-reference","id":29,"description":"Looks up a value either from a one-row or one-column range or from an array. Provided for backward compatibility","example":"=LOOKUP(A2:A10, A2:A10, A2:A10, {1,2;3,4})","parameters":[{"name":"lookupValue","description":"Is a value that LOOKUP searches for in Lookup_vector and can be a number, text, a logical value, or a name or reference to a value","type":"value|range","optional":false},{"name":"lookupVector","description":"Is a range that contains only one row or one column of text, numbers, or logical values, placed in ascending order","type":"value|range","optional":false},{"name":"resultVectorLookupValue","description":"Is a range that contains only one row or column, the same size as Lookup_vector","type":"value|range","optional":false},{"name":"array","description":"Is a value that LOOKUP searches for in Array and can be a number, text, a logical value, or a name or reference to a value is a range of cells that contain text, number, or logical values that you want to compare with Lookup_value","type":"array","optional":false}]},{"name":"INDEX","category":"lookup-reference","id":30,"description":"Returns a value or reference of the cell at the intersection of a particular row and column, in a given range","example":"=INDEX({1,2;3,4}, A1, A1:A5, A1)","parameters":[{"name":"array","description":"Is a range of cells or an array constant.","type":"array","optional":false},{"name":"rowNum","description":"Selects the row in Array or Reference from which to return a value. If omitted, Column_num is required","type":"value|range","optional":false},{"name":"columnNumReference","description":"Selects the column in Array or Reference from which to return a value. If omitted, Row_num is required","type":"range","optional":false},{"name":"rowNum2","description":"Is a reference to one or more cell ranges","type":"value|range","optional":false},{"name":"columnNum","description":"Selects the row in Array or Reference from which to return a value. If omitted, Column_num is required","type":"value|range","optional":true},{"name":"areaNum","description":"Selects the column in Array or Reference from which to return a value. If omitted, Row_num is required selects a range in Reference from which to return a value. The first area selected or entered is area 1, the second area is area 2, and so on","type":"value|range","optional":true}]},{"name":"MATCH","category":"lookup-reference","id":62,"description":"Returns the relative position of an item in an array that matches a specified value in a specified order","example":"=MATCH(A2:A10, {1,2;3,4}, A1)","parameters":[{"name":"lookupValue","description":"Is the value you use to find the value you want in the array, a number, text, or logical value, or a reference to one of these","type":"value|range","optional":false},{"name":"lookupArray","description":"Is a contiguous range of cells containing possible lookup values, an array of values, or a reference to an array","type":"array","optional":false},{"name":"matchType","description":"Is a number 1, 0, or -1 indicating which value to return.","type":"value|range","optional":true}]},{"name":"AREAS","category":"lookup-reference","id":73,"description":"Returns the number of areas in a reference. An area is a range of contiguous cells or a single cell","example":"=AREAS(A1:A5)","parameters":[{"name":"reference","description":"Is a reference to a cell or range of cells and can refer to multiple areas","type":"range","optional":false}]},{"name":"ROWS","category":"lookup-reference","id":74,"description":"Returns the number of rows in a reference or array","example":"=ROWS({1,2;3,4})","parameters":[{"name":"array","description":"Is an array, an array formula, or a reference to a range of cells for which you want the number of rows","type":"array","optional":false}]},{"name":"COLUMNS","category":"lookup-reference","id":75,"description":"Returns the number of columns in an array or reference","example":"=COLUMNS({1,2;3,4})","parameters":[{"name":"array","description":"Is an array or array formula, or a reference to a range of cells for which you want the number of columns","type":"array","optional":false}]},{"name":"OFFSET","category":"lookup-reference","id":76,"description":"Returns a reference to a range that is a given number of rows and columns from a given reference","example":"=OFFSET(A1:A5, A1, A1)","parameters":[{"name":"reference","description":"Is the reference from which you want to base the offset, a reference to a cell or range of adjacent cells","type":"range","optional":false},{"name":"rows","description":"Is the number of rows, up or down, that you want the upper-left cell of the result to refer to","type":"value|range","optional":false},{"name":"cols","description":"Is the number of columns, to the left or right, that you want the upper-left cell of the result to refer to","type":"value|range","optional":false},{"name":"height","description":"Is the height, in number of rows, that you want the result to be, the same height as Reference if omitted","type":"value|range","optional":true},{"name":"width","description":"Is the width, in number of columns, that you want the result to be, the same width as Reference if omitted","type":"value|range","optional":true}]},{"name":"TRANSPOSE","category":"lookup-reference","id":78,"description":"Converts a vertical range of cells to a horizontal range, or vice versa","example":"=TRANSPOSE({1,2;3,4})","parameters":[{"name":"array","description":"Is a range of cells on a worksheet or an array of values that you want to transpose","type":"array","optional":false}]},{"name":"CHOOSE","category":"lookup-reference","id":83,"description":"Chooses a value or action to perform from a list of values, based on an index number","example":"=CHOOSE(A1, A1:A5, C1:C5, C1:C5)","parameters":[{"name":"indexNum","description":"Specifies which value argument is selected. Index_num must be between 1 and 254, or a formula or a reference to a number between 1 and 254","type":"value|range","optional":false},{"name":"value1","description":"Are 1 to 254 numbers, cell references, defined names, formulas, functions, or text arguments from which CHOOSE selects","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"HLOOKUP","category":"lookup-reference","id":84,"description":"Looks for a value in the top row of a table or array of values and returns the value in the same column from a row you specify","example":"=HLOOKUP(A2:A10, {1,2;3,4}, A1)","parameters":[{"name":"lookupValue","description":"Is the value to be found in the first row of the table and can be a value, a reference, or a text string","type":"value|range","optional":false},{"name":"tableArray","description":"Is a table of text, numbers, or logical values in which data is looked up. Table_array can be a reference to a range or a range name","type":"array","optional":false},{"name":"rowIndexNum","description":"Is the row number in table_array from which the matching value should be returned. The first row of values in the table is row 1","type":"value|range","optional":false},{"name":"rangeLookup","description":"Is a logical value: to find the closest match in the top row (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE","type":"range","optional":true}]},{"name":"VLOOKUP","category":"lookup-reference","id":85,"description":"Looks for a value in the leftmost column of a table, and then returns a value in the same row from a column you specify. By default, the table must be sorted in an ascending order","example":"=VLOOKUP(A2:A10, {1,2;3,4}, A1)","parameters":[{"name":"lookupValue","description":"Is the value to be found in the first column of the table, and can be a value, a reference, or a text string","type":"value|range","optional":false},{"name":"tableArray","description":"Is a table of text, numbers, or logical values, in which data is retrieved. Table_array can be a reference to a range or a range name","type":"array","optional":false},{"name":"colIndexNum","description":"Is the column number in table_array from which the matching value should be returned. The first column of values in the table is column 1","type":"value|range","optional":false},{"name":"rangeLookup","description":"Is a logical value: to find the closest match in the first column (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE","type":"range","optional":true}]},{"name":"INDIRECT","category":"lookup-reference","id":111,"description":"Returns the reference specified by a text string","example":"=INDIRECT(\\"text\\", A1)","parameters":[{"name":"refText","description":"Is a reference to a cell that contains an A1- or R1C1-style reference, a name defined as a reference, or a reference to a cell as a text string","type":"string","optional":false},{"name":"a1","description":"Is a logical value that specifies the type of reference in Ref_text: R1C1-style = FALSE; A1-style = TRUE or omitted","type":"value|range","optional":true}]},{"name":"ADDRESS","category":"lookup-reference","id":133,"description":"Creates a cell reference as text, given specified row and column numbers","example":"=ADDRESS(A1, A1, A1)","parameters":[{"name":"rowNum","description":"Is the row number to use in the cell reference: Row_number = 1 for row 1","type":"value|range","optional":false},{"name":"columnNum","description":"Is the column number to use in the cell reference. For example, Column_number = 4 for column D","type":"value|range","optional":false},{"name":"absNum","description":"Specifies the reference type: absolute = 1; absolute row/relative column = 2; relative row/absolute column = 3; relative = 4","type":"value|range","optional":true},{"name":"a1","description":"Is a logical value that specifies the reference style: A1 style = 1 or TRUE; R1C1 style = 0 or FALSE","type":"value|range","optional":true},{"name":"sheetText","description":"Is text specifying the name of the worksheet to be used as the external reference","type":"string","optional":true}]},{"name":"GETPIVOTDATA","category":"lookup-reference","id":223,"description":"Extracts data stored in a PivotTable.","example":"=GETPIVOTDATA(A1, A1, C1:C5, C1:C5)","parameters":[{"name":"dataField","description":"Is the name of the data field to extract data from","type":"value|range","optional":false},{"name":"pivotTable","description":"Is a reference to a cell or range of cells in the PivotTable that contains the data you want to retrieve","type":"value|range","optional":false},{"name":"field","description":"Field to refer to","type":"value|range","optional":true},{"name":"item","description":"Field item to refer to","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"HYPERLINK","category":"lookup-reference","id":224,"description":"Creates a shortcut or jump that opens a document stored on your hard drive, a network server, or on the Internet","example":"=HYPERLINK(A1, A1)","parameters":[{"name":"linkLocation","description":"Is the text giving the path and file name to the document to be opened, a hard drive location, UNC address, or URL path","type":"value|range","optional":false},{"name":"friendlyName","description":"Is text or a number that is displayed in the cell. If omitted, the cell displays the Link_location text","type":"value|range","optional":true}]},{"name":"FORMULATEXT","category":"lookup-reference","id":435,"description":"Returns a formula as a string","example":"=FORMULATEXT(A1:A5)","parameters":[{"name":"reference","description":"Is a reference to a formula","type":"range","optional":false}]},{"name":"FIELDVALUE","category":"lookup-reference","id":449,"description":"Extracts a value from a field of a given record","example":"=FIELDVALUE(A1:A5, A1)","parameters":[{"name":"value","description":"The record from which you want to extract the field","type":"value|range","optional":false},{"name":"fieldName","description":"The names of the field or fields that you want to extract","type":"value|range","optional":false}]},{"name":"FILTER","category":"lookup-reference","id":450,"description":"Filter a range or array","example":"=FILTER({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"The range or array to filter","type":"array","optional":false},{"name":"include","description":"An array of booleans where TRUE represents a row or column to retain","type":"value|range","optional":false},{"name":"ifEmpty","description":"Returned if no items are retained","type":"value|range","optional":true}]},{"name":"SORT","category":"lookup-reference","id":451,"description":"Sorts a range or array","example":"=SORT({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The range or array to sort","type":"array","optional":false},{"name":"sortIndex","description":"A number indicating the row or column to sort by","type":"value|range","optional":true},{"name":"sortOrder","description":"A number indicating the desired sort order; 1 for ascending order (default), -1 for descending order","type":"value|range","optional":true},{"name":"byCol","description":"A logical value indicating the desired sort direction: FALSE to sort by row (default), TRUE to sort by column","type":"value|range","optional":true}]},{"name":"UNIQUE","category":"lookup-reference","id":452,"description":"Returns the unique values from a range or array.","example":"=UNIQUE({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The range or array from which to return unique rows or columns","type":"array","optional":false},{"name":"byCol","description":"Is a logical value: compare rows against each other and return the unique rows = FALSE or omitted; compare columns against each other and return the unique columns = TRUE","type":"value|range","optional":true},{"name":"exactlyOnce","description":"Is a logical value: return rows or columns that occur exactly once from the array = TRUE; return all distinct rows or columns from the array = FALSE or omitted","type":"value|range","optional":true}]},{"name":"XMATCH","category":"lookup-reference","id":456,"description":"Returns the relative position of an item in an array. By default, an exact match is required","example":"=XMATCH(A2:A10, {1,2;3,4}, A1)","parameters":[{"name":"lookupValue","description":"Is the value to search for","type":"value|range","optional":false},{"name":"lookupArray","description":"Is the array or range to search","type":"array","optional":false},{"name":"matchMode","description":"Specify how to match the lookup_value against the values in lookup_array","type":"value|range","optional":true},{"name":"searchMode","description":"Specify the search mode to use. By default, a first to last search will be used","type":"value|range","optional":true}]},{"name":"XLOOKUP","category":"lookup-reference","id":457,"description":"Searches a range or an array for a match and returns the corresponding item from a second range or array. By default, an exact match is used","example":"=XLOOKUP(A2:A10, {1,2;3,4}, {1,2;3,4})","parameters":[{"name":"lookupValue","description":"Is the value to search for","type":"value|range","optional":false},{"name":"lookupArray","description":"Is the array or range to search","type":"array","optional":false},{"name":"returnArray","description":"Is the array or range to return","type":"array","optional":false},{"name":"ifNotFound","description":"Returned if no match is found","type":"value|range","optional":true},{"name":"matchMode","description":"Specify how to match lookup_value against the values in lookup_array","type":"value|range","optional":true},{"name":"searchMode","description":"Specify the search mode to use. By default, a first to last search will be used","type":"value|range","optional":true}]},{"name":"SORTBY","category":"lookup-reference","id":458,"description":"Sorts a range or array based on the values in a corresponding range or array","example":"=SORTBY({1,2;3,4}, {1,2;3,4}, C1:C5, C1:C5)","parameters":[{"name":"array","description":"The range or array to sort","type":"array","optional":false},{"name":"byArray","description":"The range or array to sort on","type":"array","optional":false},{"name":"sortOrder","description":"A number indicating the desired sort order; 1 for ascending order (default), -1 for descending order","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"WRAPROWS","category":"lookup-reference","id":462,"description":"Wraps a row or column vector after a specified number of values.","example":"=WRAPROWS(A1, 10, A1)","parameters":[{"name":"vector","description":"The vector or reference to wrap.","type":"value|range","optional":false},{"name":"wrapCount","description":"The maximum number of values per row.","type":"value|range","optional":false},{"name":"padWith","description":"The value with which to pad. The default is #N/A.","type":"value|range","optional":true}]},{"name":"VSTACK","category":"lookup-reference","id":463,"description":"Vertically stacks arrays into one array.","example":"=VSTACK({1,2;3,4}, C1:C5, {1,2;3,4}, C1:C5)","parameters":[{"name":"array1","description":"An array or reference to be stacked.","type":"array","optional":false},{"name":"array2","description":"Array or spill range input.","type":"array","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"HSTACK","category":"lookup-reference","id":464,"description":"Horizontally stacks arrays into one array.","example":"=HSTACK({1,2;3,4}, C1:C5, {1,2;3,4}, C1:C5)","parameters":[{"name":"array1","description":"An array or reference to be stacked.","type":"array","optional":false},{"name":"array2","description":"Array or spill range input.","type":"array","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"CHOOSEROWS","category":"lookup-reference","id":465,"description":"Returns rows from an array or reference.","example":"=CHOOSEROWS({1,2;3,4}, A1, C1:C5, C1:C5)","parameters":[{"name":"array","description":"The array or reference containing the rows to be returned.","type":"array","optional":false},{"name":"rowNum1","description":"The number of the row to be returned.","type":"value|range","optional":false},{"name":"rowNum2","description":"Value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"CHOOSECOLS","category":"lookup-reference","id":466,"description":"Returns columns from an array or reference.","example":"=CHOOSECOLS({1,2;3,4}, A1, C1:C5, C1:C5)","parameters":[{"name":"array","description":"The array or reference containing the columns to be returned.","type":"array","optional":false},{"name":"colNum1","description":"The number of the column to be returned.","type":"value|range","optional":false},{"name":"colNum2","description":"Value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"TOCOL","category":"lookup-reference","id":473,"description":"Returns the array as one column.","example":"=TOCOL({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The array or reference to return as a column.","type":"array","optional":false},{"name":"ignore","description":"Whether to ignore certain types of values. By default, no values are ignored.","type":"value|range","optional":true},{"name":"scanByColumn","description":"Scan the array by column. By default, the array is scanned by row.","type":"value|range","optional":true}]},{"name":"TOROW","category":"lookup-reference","id":474,"description":"Returns the array as one row.","example":"=TOROW({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The array or reference to return as a row.","type":"array","optional":false},{"name":"ignore","description":"Whether to ignore certain types of values. By default, no values are ignored.","type":"value|range","optional":true},{"name":"scanByColumn","description":"Scan the array by column. By default, the array is scanned by row.","type":"value|range","optional":true}]},{"name":"WRAPCOLS","category":"lookup-reference","id":475,"description":"Wraps a row or column vector after a specified number of values.","example":"=WRAPCOLS(A1, 10, A1)","parameters":[{"name":"vector","description":"The vector or reference to wrap.","type":"value|range","optional":false},{"name":"wrapCount","description":"The maximum number of values per column.","type":"value|range","optional":false},{"name":"padWith","description":"The value with which to pad. The default is #N/A.","type":"value|range","optional":true}]},{"name":"EXPAND","category":"lookup-reference","id":482,"description":"Expands an array to the specified dimensions.","example":"=EXPAND({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"The array to expand.","type":"array","optional":false},{"name":"rows","description":"The number of rows in the expanded array. If missing, rows will not be expanded.","type":"value|range","optional":false},{"name":"columns","description":"The number of columns in the expanded array. If missing, columns will not be expanded.","type":"value|range","optional":true},{"name":"padWith","description":"The value with which to pad. The default is #N/A.","type":"value|range","optional":true}]},{"name":"TAKE","category":"lookup-reference","id":483,"description":"Returns rows or columns from array start or end.","example":"=TAKE({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"The array from which to take rows or columns.","type":"array","optional":false},{"name":"rows","description":"The number of rows to take. A negative value takes from the end of the array.","type":"value|range","optional":false},{"name":"columns","description":"The number of columns to take. A negative value takes from the end of the array.","type":"value|range","optional":true}]},{"name":"DROP","category":"lookup-reference","id":484,"description":"Drops rows or columns from array start or end.","example":"=DROP({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The array from which to drop rows or columns.","type":"array","optional":false},{"name":"rows","description":"The number of rows to drop. A negative value drops from the end of the array.","type":"value|range","optional":true},{"name":"columns","description":"The number of columns to drop. A negative value drops from the end of the array.","type":"value|range","optional":true}]},{"name":"PY","category":"lookup-reference","id":485,"description":"Executes Python code that returns a value into the cell (not yet supported in Granola).","example":"=PY(A1)","parameters":[{"name":"useCtrlEnterToCommitPythonCodeCreatesPythonFormulas","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"IMAGE","category":"lookup-reference","id":486,"description":"Returns an image from a given source","example":"=IMAGE(A1, \\"text\\")","parameters":[{"name":"source","description":"The path of the source that points to the image","type":"value|range","optional":false},{"name":"altText","description":"The alternative text that describes the image for accessibility","type":"string","optional":true},{"name":"sizing","description":"The setting that determines the dimensions in which the image will be rendered in the cell","type":"value|range","optional":true},{"name":"height","description":"The custom height of the image in pixels","type":"value|range","optional":true},{"name":"width","description":"The custom width of the image in pixels","type":"value|range","optional":true}]},{"name":"GROUPBY","category":"lookup-reference","id":487,"description":"Aggregate values by row fields","example":"=GROUPBY(A1, A1:A5, A1)","parameters":[{"name":"rowFields","description":"The range or array containing the row fields","type":"value|range","optional":false},{"name":"values","description":"The range or array containing the values to aggregate","type":"value|range","optional":false},{"name":"functionParam","description":"The function used to do the aggregations","type":"value|range","optional":false},{"name":"fieldHeaders","description":"A number between 0 and 3 that specifies whether the field data has headers and whether field headers should be returned in the results","type":"value|range","optional":true},{"name":"totalDepth","description":"Show totals for the row fields. 0 for none, 1 for grand totals, 2 for grand total and first level subtotals, etc","type":"value|range","optional":true},{"name":"sortOrder","description":"The column index to sort the row fields on. A negative index will sort in reverse order","type":"value|range","optional":true},{"name":"filterArray","description":"An array of booleans where TRUE represents a row to retain","type":"array","optional":true},{"name":"fieldRelationship","description":"The relationship of fields when multiple columns are supplied to the row_fields argument","type":"value|range","optional":true}]},{"name":"PIVOTBY","category":"lookup-reference","id":488,"description":"Aggregate values by rows and columns","example":"=PIVOTBY(A1, A1, A1:A5, A1)","parameters":[{"name":"rowFields","description":"The range or array containing the row fields","type":"value|range","optional":false},{"name":"colFields","description":"The range or array containing the column fields","type":"value|range","optional":false},{"name":"values","description":"The range or array containing the values to aggregate","type":"value|range","optional":false},{"name":"functionParam","description":"The function used to do the aggregations","type":"value|range","optional":false},{"name":"fieldHeaders","description":"A number between 0 and 3 that specifies whether the field data has headers and whether field headers should be returned in the results","type":"value|range","optional":true},{"name":"rowTotalDepth","description":"Show totals for the row fields. 0 for none, 1 for grand totals, 2 for grand total and first level subtotals, etc","type":"value|range","optional":true},{"name":"rowSortOrder","description":"The column index to sort the row fields on. A negative index will sort in reverse order","type":"value|range","optional":true},{"name":"colTotalDepth","description":"Show totals for the column fields. 0 for none, 1 for grand totals, 2 for grand total and first level subtotals, etc","type":"value|range","optional":true},{"name":"colSortOrder","description":"The column index to sort the column fields on. A negative index will sort in reverse order","type":"value|range","optional":true},{"name":"filterArray","description":"An array of booleans where TRUE represents a row to retain","type":"array","optional":true},{"name":"relativeTo","description":"Defines what PERCENTOF is calculated relative to. This","type":"value|range","optional":true}]},{"name":"TRIMRANGE","category":"lookup-reference","id":494,"description":"Trims a range to the last used cell in any direction.","example":"=TRIMRANGE(A1:A5, A1)","parameters":[{"name":"range","description":"The range to be trimmed","type":"range","optional":false},{"name":"rowTrimMode","description":"Row trim direction","type":"value|range","optional":true},{"name":"colTrimMode","description":"Column trim direction","type":"value|range","optional":true}]}]`,
    );
  }),
  rs,
  is = e(() => {
    rs = JSON.parse(
      `[{"name":"SUM","category":"math-trig","id":5,"description":"Adds all the numbers in a range of cells","example":"=SUM(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers to sum. Logical values and text are ignored in cells, included if typed as arguments","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SIN","category":"math-trig","id":16,"description":"Returns the sine of an angle","example":"=SIN(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the sine. Degrees * PI()/180 = radians","type":"number|range","optional":false}]},{"name":"COS","category":"math-trig","id":17,"description":"Returns the cosine of an angle","example":"=COS(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the cosine","type":"number|range","optional":false}]},{"name":"TAN","category":"math-trig","id":18,"description":"Returns the tangent of an angle","example":"=TAN(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the tangent. Degrees * PI()/180 = radians","type":"number|range","optional":false}]},{"name":"ATAN","category":"math-trig","id":19,"description":"Returns the arctangent of a number in radians, in the range -Pi/2 to Pi/2","example":"=ATAN(10)","parameters":[{"name":"numberParam","description":"Is the tangent of the angle you want","type":"number|range","optional":false}]},{"name":"PI","category":"math-trig","id":20,"description":"Returns the value of Pi, 3.14159265358979, accurate to 15 digits","example":"=PI()","parameters":[]},{"name":"SQRT","category":"math-trig","id":21,"description":"Returns the square root of a number","example":"=SQRT(10)","parameters":[{"name":"numberParam","description":"Is the number for which you want the square root","type":"number|range","optional":false}]},{"name":"EXP","category":"math-trig","id":22,"description":"Returns e raised to the power of a given number","example":"=EXP(10)","parameters":[{"name":"numberParam","description":"Is the exponent applied to the base e. The constant e equals 2.71828182845904, the base of the natural logarithm","type":"number|range","optional":false}]},{"name":"LN","category":"math-trig","id":23,"description":"Returns the natural logarithm of a number","example":"=LN(10)","parameters":[{"name":"numberParam","description":"Is the positive real number for which you want the natural logarithm","type":"number|range","optional":false}]},{"name":"LOG10","category":"math-trig","id":24,"description":"Returns the base-10 logarithm of a number","example":"=LOG10(10)","parameters":[{"name":"numberParam","description":"Is the positive real number for which you want the base-10 logarithm","type":"number|range","optional":false}]},{"name":"ABS","category":"math-trig","id":25,"description":"Returns the absolute value of a number, a number without its sign","example":"=ABS(10)","parameters":[{"name":"numberParam","description":"Is the real number for which you want the absolute value","type":"number|range","optional":false}]},{"name":"INT","category":"math-trig","id":26,"description":"Rounds a number down to the nearest integer","example":"=INT(10)","parameters":[{"name":"numberParam","description":"Is the real number you want to round down to an integer","type":"number|range","optional":false}]},{"name":"SIGN","category":"math-trig","id":27,"description":"Returns the sign of a number: 1 if the number is positive, zero if the number is zero, or -1 if the number is negative","example":"=SIGN(10)","parameters":[{"name":"numberParam","description":"Is any real number","type":"number|range","optional":false}]},{"name":"ROUND","category":"math-trig","id":28,"description":"Rounds a number to a specified number of digits","example":"=ROUND(10, A1)","parameters":[{"name":"numberParam","description":"Is the number you want to round","type":"number|range","optional":false},{"name":"numDigits","description":"Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero to the nearest integer","type":"value|range","optional":false}]},{"name":"MOD","category":"math-trig","id":40,"description":"Returns the remainder after a number is divided by a divisor","example":"=MOD(10, A1)","parameters":[{"name":"numberParam","description":"Is the number for which you want to find the remainder after the division is performed","type":"number|range","optional":false},{"name":"divisor","description":"Is the number by which you want to divide Number","type":"value|range","optional":false}]},{"name":"RAND","category":"math-trig","id":61,"description":"Returns a random number greater than or equal to 0 and less than 1, evenly distributed (changes on recalculation)","example":"=RAND()","parameters":[]},{"name":"ATAN2","category":"math-trig","id":80,"description":"Returns the arctangent of the specified x- and y- coordinates, in radians between -Pi and Pi, excluding -Pi","example":"=ATAN2(A1, A1)","parameters":[{"name":"xNum","description":"Is the x-coordinate of the point","type":"value|range","optional":false},{"name":"yNum","description":"Is the y-coordinate of the point","type":"value|range","optional":false}]},{"name":"ASIN","category":"math-trig","id":81,"description":"Returns the arcsine of a number in radians, in the range -Pi/2 to Pi/2","example":"=ASIN(10)","parameters":[{"name":"numberParam","description":"Is the sine of the angle you want and must be from -1 to 1","type":"number|range","optional":false}]},{"name":"ACOS","category":"math-trig","id":82,"description":"Returns the arccosine of a number, in radians in the range 0 to Pi. The arccosine is the angle whose cosine is Number","example":"=ACOS(10)","parameters":[{"name":"numberParam","description":"Is the cosine of the angle you want and must be from -1 to 1","type":"number|range","optional":false}]},{"name":"LOG","category":"math-trig","id":87,"description":"Returns the logarithm of a number to the base you specify","example":"=LOG(10, A1)","parameters":[{"name":"numberParam","description":"Is the positive real number for which you want the logarithm","type":"number|range","optional":false},{"name":"base","description":"Is the base of the logarithm; 10 if omitted","type":"value|range","optional":true}]},{"name":"MDETERM","category":"math-trig","id":113,"description":"Returns the matrix determinant of an array","example":"=MDETERM({1,2;3,4})","parameters":[{"name":"array","description":"Is a numeric array with an equal number of rows and columns, either a cell range or an array constant","type":"array","optional":false}]},{"name":"MINVERSE","category":"math-trig","id":114,"description":"Returns the inverse matrix for the matrix stored in an array","example":"=MINVERSE({1,2;3,4})","parameters":[{"name":"array","description":"Is a numeric array with an equal number of rows and columns, either a cell range or an array constant","type":"array","optional":false}]},{"name":"MMULT","category":"math-trig","id":115,"description":"Returns the matrix product of two arrays, an array with the same number of rows as array1 and columns as array2","example":"=MMULT({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first array of numbers to multiply and must have the same number of columns as Array2 has rows","type":"array","optional":false},{"name":"array2","description":"Array or spill range input.","type":"array","optional":false}]},{"name":"PRODUCT","category":"math-trig","id":119,"description":"Multiplies all the numbers given as arguments","example":"=PRODUCT(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, logical values, or text representations of numbers that you want to multiply","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"FACT","category":"math-trig","id":120,"description":"Returns the factorial of a number, equal to 1*2*3*...* Number","example":"=FACT(10)","parameters":[{"name":"numberParam","description":"Is the nonnegative number you want the factorial of","type":"number|range","optional":false}]},{"name":"TRUNC","category":"math-trig","id":127,"description":"Truncates a number to an integer by removing the decimal, or fractional, part of the number","example":"=TRUNC(10, A1)","parameters":[{"name":"numberParam","description":"Is the number you want to truncate","type":"number|range","optional":false},{"name":"numDigits","description":"Is a number specifying the precision of the truncation, 0 (zero) if omitted","type":"value|range","optional":true}]},{"name":"ROUNDUP","category":"math-trig","id":130,"description":"Rounds a number up, away from zero","example":"=ROUNDUP(10, A1)","parameters":[{"name":"numberParam","description":"Is any real number that you want rounded up","type":"number|range","optional":false},{"name":"numDigits","description":"Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer","type":"value|range","optional":false}]},{"name":"ROUNDDOWN","category":"math-trig","id":131,"description":"Rounds a number down, toward zero","example":"=ROUNDDOWN(10, A1)","parameters":[{"name":"numberParam","description":"Is any real number that you want rounded down","type":"number|range","optional":false},{"name":"numDigits","description":"Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer","type":"value|range","optional":false}]},{"name":"SUMPRODUCT","category":"math-trig","id":138,"description":"Returns the sum of the products of corresponding ranges or arrays","example":"=SUMPRODUCT({1,2;3,4}, C1:C5, C1:C5)","parameters":[{"name":"array1","description":"Are 2 to 255 arrays for which you want to multiply and then add components. All arrays must have the same dimensions","type":"array","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SINH","category":"math-trig","id":139,"description":"Returns the hyperbolic sine of a number","example":"=SINH(10)","parameters":[{"name":"numberParam","description":"Is any real number","type":"number|range","optional":false}]},{"name":"COSH","category":"math-trig","id":140,"description":"Returns the hyperbolic cosine of a number","example":"=COSH(10)","parameters":[{"name":"numberParam","description":"Is any real number","type":"number|range","optional":false}]},{"name":"TANH","category":"math-trig","id":141,"description":"Returns the hyperbolic tangent of a number","example":"=TANH(10)","parameters":[{"name":"numberParam","description":"Is any real number","type":"number|range","optional":false}]},{"name":"ASINH","category":"math-trig","id":142,"description":"Returns the inverse hyperbolic sine of a number","example":"=ASINH(10)","parameters":[{"name":"numberParam","description":"Is any real number equal to or greater than 1","type":"number|range","optional":false}]},{"name":"ACOSH","category":"math-trig","id":143,"description":"Returns the inverse hyperbolic cosine of a number","example":"=ACOSH(10)","parameters":[{"name":"numberParam","description":"Is any real number equal to or greater than 1","type":"number|range","optional":false}]},{"name":"ATANH","category":"math-trig","id":144,"description":"Returns the inverse hyperbolic tangent of a number","example":"=ATANH(10)","parameters":[{"name":"numberParam","description":"Is any real number between -1 and 1 excluding -1 and 1","type":"number|range","optional":false}]},{"name":"COMBIN","category":"math-trig","id":156,"description":"Returns the number of combinations for a given number of items","example":"=COMBIN(10, 10)","parameters":[{"name":"numberParam","description":"Is the total number of items","type":"number|range","optional":false},{"name":"numberChosen","description":"Is the number of items in each combination","type":"number|range","optional":false}]},{"name":"EVEN","category":"math-trig","id":159,"description":"Rounds a positive number up and negative number down to the nearest even integer","example":"=EVEN(10)","parameters":[{"name":"numberParam","description":"Is the value to round","type":"number|range","optional":false}]},{"name":"ODD","category":"math-trig","id":178,"description":"Rounds a positive number up and negative number down to the nearest odd integer","example":"=ODD(10)","parameters":[{"name":"numberParam","description":"Is the value to round","type":"number|range","optional":false}]},{"name":"SUMXMY2","category":"math-trig","id":183,"description":"Sums the squares of the differences in two corresponding ranges or arrays","example":"=SUMXMY2({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"arrayX","description":"Is the first range or array of values and can be a number or name, array, or reference that contains numbers","type":"array","optional":false},{"name":"arrayY","description":"Is the second range or array of values and can be a number or name, array, or reference that contains numbers","type":"array","optional":false}]},{"name":"SUMX2MY2","category":"math-trig","id":184,"description":"Sums the differences between the squares of two corresponding ranges or arrays","example":"=SUMX2MY2({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"arrayX","description":"Is the first range or array of numbers and can be a number or name, array, or reference that contains numbers","type":"array","optional":false},{"name":"arrayY","description":"Is the second range or array of numbers and can be a number or name, array, or reference that contains numbers","type":"array","optional":false}]},{"name":"SUMX2PY2","category":"math-trig","id":185,"description":"Returns the sum total of the sums of squares of numbers in two corresponding ranges or arrays","example":"=SUMX2PY2({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"arrayX","description":"Is the first range or array of numbers and can be a number or name, array, or reference that contains numbers","type":"array","optional":false},{"name":"arrayY","description":"Is the second range or array of numbers and can be a number or name, array, or reference that contains numbers","type":"array","optional":false}]},{"name":"SUMSQ","category":"math-trig","id":201,"description":"Returns the sum of the squares of the arguments. The arguments can be numbers, arrays, names, or references to cells that contain numbers","example":"=SUMSQ(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, arrays, names, or references to arrays for which you want the sum of the squares","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"POWER","category":"math-trig","id":214,"description":"Returns the result of a number raised to a power","example":"=POWER(10, A1)","parameters":[{"name":"numberParam","description":"Is the base number, any real number","type":"number|range","optional":false},{"name":"power","description":"Is the exponent, to which the base number is raised","type":"value|range","optional":false}]},{"name":"RADIANS","category":"math-trig","id":215,"description":"Converts degrees to radians","example":"=RADIANS(A1)","parameters":[{"name":"angle","description":"Is an angle in degrees that you want to convert","type":"value|range","optional":false}]},{"name":"DEGREES","category":"math-trig","id":216,"description":"Converts radians to degrees","example":"=DEGREES(A1)","parameters":[{"name":"angle","description":"Is the angle in radians that you want to convert","type":"value|range","optional":false}]},{"name":"SUBTOTAL","category":"math-trig","id":217,"description":"Returns a subtotal in a list or database","example":"=SUBTOTAL(A1, A1, C1:C5, C1:C5)","parameters":[{"name":"functionNum","description":"Is the number 1 to 11 that specifies the summary function for the subtotal.","type":"value|range","optional":false},{"name":"ref1","description":"Are 1 to 254 ranges or references for which you want the subtotal","type":"value|range","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SUMIF","category":"math-trig","id":218,"description":"Adds the cells specified by a given condition or criteria","example":"=SUMIF(A1:A5, \\">0\\", A1:A5)","parameters":[{"name":"range","description":"Is the range of cells you want evaluated","type":"range","optional":false},{"name":"criteria","description":"Is the condition or criteria in the form of a number, expression, or text that defines which cells will be added","type":"criteria","optional":false},{"name":"sumRange","description":"Are the actual cells to sum. If omitted, the cells in range are used","type":"range","optional":true}]},{"name":"ROMAN","category":"math-trig","id":222,"description":"Converts an Arabic numeral to Roman, as text","example":"=ROMAN(10, A1)","parameters":[{"name":"numberParam","description":"Is the Arabic numeral you want to convert","type":"number|range","optional":false},{"name":"form","description":"Is the number specifying the type of Roman numeral you want.","type":"value|range","optional":true}]},{"name":"SERIESSUM","category":"math-trig","id":267,"description":"Returns the sum of a power series based on the formula","example":"=SERIESSUM(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the input value to the power series","type":"value|range","optional":false},{"name":"n","description":"Is the initial power to which you want to raise x","type":"value|range","optional":false},{"name":"m","description":"Is the step by which to increase n for each term in the series","type":"value|range","optional":false},{"name":"coefficients","description":"Is a set of coefficients by which each successive power of x is multiplied","type":"value|range","optional":false}]},{"name":"FACTDOUBLE","category":"math-trig","id":268,"description":"Returns the double factorial of a number","example":"=FACTDOUBLE(10)","parameters":[{"name":"numberParam","description":"Is the value for which to return the double factorial","type":"number|range","optional":false}]},{"name":"SQRTPI","category":"math-trig","id":269,"description":"Returns the square root of (number * Pi)","example":"=SQRTPI(10)","parameters":[{"name":"numberParam","description":"Is the number by which p is multiplied","type":"number|range","optional":false}]},{"name":"QUOTIENT","category":"math-trig","id":270,"description":"Returns the integer portion of a division","example":"=QUOTIENT(A1, A1)","parameters":[{"name":"numerator","description":"Is the dividend","type":"value|range","optional":false},{"name":"denominator","description":"Is the divisor","type":"value|range","optional":false}]},{"name":"MROUND","category":"math-trig","id":275,"description":"Returns a number rounded to the desired multiple","example":"=MROUND(10, A1)","parameters":[{"name":"numberParam","description":"Is the value to round","type":"number|range","optional":false},{"name":"multiple","description":"Is the multiple to which you want to round number","type":"value|range","optional":false}]},{"name":"RANDBETWEEN","category":"math-trig","id":317,"description":"Returns a random number between the numbers you specify","example":"=RANDBETWEEN(A1, A1)","parameters":[{"name":"bottom","description":"Is the smallest integer RANDBETWEEN will return","type":"value|range","optional":false},{"name":"top","description":"Is the largest integer RANDBETWEEN will return","type":"value|range","optional":false}]},{"name":"GCD","category":"math-trig","id":325,"description":"Returns the greatest common divisor","example":"=GCD(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 values","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"MULTINOMIAL","category":"math-trig","id":326,"description":"Returns the multinomial of a set of numbers","example":"=MULTINOMIAL(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 values for which you want the multinomial","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"LCM","category":"math-trig","id":327,"description":"Returns the least common multiple","example":"=LCM(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 values for which you want the least common multiple","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SUMIFS","category":"math-trig","id":334,"description":"Adds the cells specified by a given set of conditions or criteria","example":"=SUMIFS(A1:A5, A1:A5, \\">0\\", C1:C5)","parameters":[{"name":"sumRange","description":"Are the actual cells to sum.","type":"range","optional":false},{"name":"criteriaRange","description":"Is the range of cells you want evaluated for the particular condition","type":"range","optional":false},{"name":"criteria","description":"Is the condition or criteria in the form of a number, expression, or text that defines which cells will be added","type":"criteria","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"AGGREGATE","category":"math-trig","id":337,"description":"","example":"=AGGREGATE(A1, A1, A1, C1:C5)","parameters":[{"name":"functionNum","description":"Value, reference, or range.","type":"value|range","optional":false},{"name":"options","description":"Value, reference, or range.","type":"value|range","optional":false},{"name":"ref1","description":"Value, reference, or range.","type":"value|range","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"ACOT","category":"math-trig","id":395,"description":"Returns the arccotangent of a number, in radians in the range 0 to Pi.","example":"=ACOT(10)","parameters":[{"name":"numberParam","description":"Is the cotangent of the angle you want","type":"number|range","optional":false}]},{"name":"ACOTH","category":"math-trig","id":396,"description":"Returns the inverse hyperbolic cotangent of a number","example":"=ACOTH(10)","parameters":[{"name":"numberParam","description":"Is the hyperbolic cotangent of the angle that you want","type":"number|range","optional":false}]},{"name":"COT","category":"math-trig","id":397,"description":"Returns the cotangent of an angle","example":"=COT(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the cotangent","type":"number|range","optional":false}]},{"name":"COTH","category":"math-trig","id":398,"description":"Returns the hyperbolic cotangent of a number","example":"=COTH(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the hyperbolic cotangent","type":"number|range","optional":false}]},{"name":"CSC","category":"math-trig","id":399,"description":"Returns the cosecant of an angle","example":"=CSC(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the cosecant","type":"number|range","optional":false}]},{"name":"CSCH","category":"math-trig","id":400,"description":"Returns the hyperbolic cosecant of an angle","example":"=CSCH(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the hyperbolic cosecant","type":"number|range","optional":false}]},{"name":"SEC","category":"math-trig","id":401,"description":"Returns the secant of an angle","example":"=SEC(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the secant","type":"number|range","optional":false}]},{"name":"SECH","category":"math-trig","id":402,"description":"Returns the hyperbolic secant of an angle","example":"=SECH(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the hyperbolic secant","type":"number|range","optional":false}]},{"name":"COMBINA","category":"math-trig","id":415,"description":"Returns the number of combinations with repetitions for a given number of items","example":"=COMBINA(10, 10)","parameters":[{"name":"numberParam","description":"Is the total number of items","type":"number|range","optional":false},{"name":"numberChosen","description":"Is the number of items in each combination","type":"number|range","optional":false}]},{"name":"BASE","category":"math-trig","id":418,"description":"Converts a number into a text representation with the given radix (base)","example":"=BASE(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the number that you want to convert","type":"number|range","optional":false},{"name":"radix","description":"Is the base Radix that you want to convert the number into","type":"value|range","optional":false},{"name":"minLength","description":"Is the minimum length of the returned string. If omitted leading zeros are not added","type":"value|range","optional":true}]},{"name":"DECIMAL","category":"math-trig","id":419,"description":"Converts a text representation of a number in a given base into a decimal number","example":"=DECIMAL(10, A1)","parameters":[{"name":"numberParam","description":"Is the number that you want to convert","type":"number|range","optional":false},{"name":"radix","description":"Is the base Radix of the number you are converting","type":"value|range","optional":false}]},{"name":"MUNIT","category":"math-trig","id":429,"description":"Returns the unit matrix for the specified dimension","example":"=MUNIT(A1)","parameters":[{"name":"dimension","description":"Is an integer specifying the dimension of the unit matrix that you want to return","type":"value|range","optional":false}]},{"name":"ARABIC","category":"math-trig","id":430,"description":"Converts a Roman numeral to Arabic","example":"=ARABIC(\\"text\\")","parameters":[{"name":"text","description":"Is the Roman numeral you want to convert","type":"string","optional":false}]},{"name":"CEILING.MATH","category":"math-trig","id":438,"description":"Rounds a number up, to the nearest integer or to the nearest multiple of significance","example":"=CEILING.MATH(10, A1)","parameters":[{"name":"numberParam","description":"Is the value you want to round","type":"number|range","optional":false},{"name":"significance","description":"Is the multiple to which you want to round","type":"value|range","optional":true},{"name":"mode","description":"When given and nonzero this function will round away from zero","type":"value|range","optional":true}]},{"name":"FLOOR.MATH","category":"math-trig","id":439,"description":"Rounds a number down, to the nearest integer or to the nearest multiple of significance","example":"=FLOOR.MATH(10, A1)","parameters":[{"name":"numberParam","description":"Is the value you want to round","type":"number|range","optional":false},{"name":"significance","description":"Is the multiple to which you want to round","type":"value|range","optional":true},{"name":"mode","description":"When given and nonzero this function will round towards zero","type":"value|range","optional":true}]},{"name":"RANDARRAY","category":"math-trig","id":459,"description":"Returns an array of random numbers","example":"=RANDARRAY(A1)","parameters":[{"name":"rows","description":"The number of rows in the returned array","type":"value|range","optional":true},{"name":"columns","description":"The number of columns in the returned array","type":"value|range","optional":true},{"name":"min","description":"The minimum number you would like returned","type":"value|range","optional":true},{"name":"max","description":"The maximum number you would like returned","type":"value|range","optional":true},{"name":"integer","description":"Return an integer or a decimal value. TRUE for an integer, FALSE for a decimal number","type":"value|range","optional":true}]},{"name":"SEQUENCE","category":"math-trig","id":460,"description":"Returns a sequence of numbers","example":"=SEQUENCE(A1, A1)","parameters":[{"name":"rows","description":"The number of rows to return","type":"value|range","optional":false},{"name":"columns","description":"The number of columns to return","type":"value|range","optional":true},{"name":"start","description":"The first number in the sequence","type":"value|range","optional":true},{"name":"step","description":"The amount to increment each subsequent value in the sequence","type":"value|range","optional":true}]},{"name":"PERCENTOF","category":"math-trig","id":470,"description":"Returns the percentage of a subset of a given data set","example":"=PERCENTOF(A1, A1)","parameters":[{"name":"dataSubset","description":"Is the subset","type":"value|range","optional":false},{"name":"dataAll","description":"Is the data set","type":"value|range","optional":false}]}]`,
    );
  }),
  as,
  os = e(() => {
    as = JSON.parse(
      `[{"name":"COUNT","category":"statistical","id":1,"description":"Counts the number of cells in a range that contain numbers","example":"=COUNT(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 arguments that can contain or refer to a variety of different types of data, but only numbers are counted","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"AVERAGE","category":"statistical","id":6,"description":"Returns the arithmetic mean of the supplied numbers, ignoring text and empty cells.","example":"=AVERAGE(A2:A6, 10, 12)","parameters":[{"name":"number1","description":"First number, reference, or range that contains values to average.","type":"number|range","optional":false},{"name":"number2","description":"Additional number, reference, or range to include in the mean.","type":"number|range","optional":true},{"name":"rest","description":"Optional extra arguments (up to 255 total) supplied as numbers or ranges.","type":"number|range","optional":false}]},{"name":"MIN","category":"statistical","id":7,"description":"Returns the smallest numeric value from the supplied numbers or ranges, ignoring text, logical values, and blanks.","example":"=MIN(A2:A10, 0, C2:C4)","parameters":[{"name":"number1","description":"First number, reference, or range that contains values to compare.","type":"number|range","optional":false},{"name":"number2","description":"Optional additional number, reference, or range.","type":"number|range","optional":true},{"name":"rest","description":"Optional extra numbers or ranges (up to 255 total arguments).","type":"number|range","optional":false}]},{"name":"MAX","category":"statistical","id":8,"description":"Returns the largest numeric value from the supplied numbers or ranges, ignoring text, logical values, and blanks.","example":"=MAX(A2:A10, 0, C2:C4)","parameters":[{"name":"number1","description":"First number, reference, or range that contains values to compare.","type":"number|range","optional":false},{"name":"number2","description":"Optional additional number, reference, or range.","type":"number|range","optional":true},{"name":"rest","description":"Optional extra numbers or ranges (up to 255 total arguments).","type":"number|range","optional":false}]},{"name":"LINEST","category":"statistical","id":50,"description":"Returns statistics that describe a linear trend matching known data points, by fitting a straight line using the least squares method","example":"=LINEST(A1, A1)","parameters":[{"name":"knownYs","description":"Is the set of y-values you already know in the relationship y = mx + b","type":"value|range","optional":false},{"name":"knownXs","description":"Is an optional set of x-values that you may already know in the relationship y = mx + b","type":"value|range","optional":true},{"name":"constParam","description":"Is a logical value: the constant b is calculated normally if Const = TRUE or omitted; b is set equal to 0 if Const = FALSE","type":"value|range","optional":true},{"name":"stats","description":"Is a logical value: return additional regression statistics = TRUE; return m-coefficients and the constant b = FALSE or omitted","type":"value|range","optional":true}]},{"name":"TREND","category":"statistical","id":51,"description":"Returns numbers in a linear trend matching known data points, using the least squares method","example":"=TREND(A1, A1)","parameters":[{"name":"knownYs","description":"Is a range or array of y-values you already know in the relationship y = mx + b","type":"value|range","optional":false},{"name":"knownXs","description":"Is an optional range or array of x-values that you know in the relationship y = mx + b, an array the same size as Known_y's","type":"value|range","optional":true},{"name":"newXs","description":"Is a range or array of new x-values for which you want TREND to return corresponding y-values","type":"value|range","optional":true},{"name":"constParam","description":"Is a logical value: the constant b is calculated normally if Const = TRUE or omitted; b is set equal to 0 if Const = FALSE","type":"value|range","optional":true}]},{"name":"LOGEST","category":"statistical","id":52,"description":"Returns statistics that describe an exponential curve matching known data points","example":"=LOGEST(A1, A1)","parameters":[{"name":"knownYs","description":"Is the set of y-values you already know in the relationship y = b*m^x","type":"value|range","optional":false},{"name":"knownXs","description":"Is an optional set of x-values that you may already know in the relationship y = b*m^x","type":"value|range","optional":true},{"name":"constParam","description":"Is a logical value: the constant b is calculated normally if Const = TRUE or omitted; b is set equal to 1 if Const = FALSE","type":"value|range","optional":true},{"name":"stats","description":"Is a logical value: return additional regression statistics = TRUE; return m-coefficients and the constant b = FALSE or omitted","type":"value|range","optional":true}]},{"name":"GROWTH","category":"statistical","id":53,"description":"Returns numbers in an exponential growth trend matching known data points","example":"=GROWTH(A1, A1)","parameters":[{"name":"knownYs","description":"Is the set of y-values you already know in the relationship y = b*m^x, an array or range of positive numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is an optional set of x-values that you may already know in the relationship y = b*m^x, an array or range the same size as Known_y's","type":"value|range","optional":true},{"name":"newXs","description":"Are new x-values for which you want GROWTH to return corresponding y-values","type":"value|range","optional":true},{"name":"constParam","description":"Is a logical value: the constant b is calculated normally if Const = TRUE; b is set equal to 1 if Const = FALSE or omitted","type":"value|range","optional":true}]},{"name":"COUNTA","category":"statistical","id":118,"description":"Counts the number of cells in a range that are not empty","example":"=COUNTA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 arguments representing the values and cells you want to count. Values can be any type of information","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"MEDIAN","category":"statistical","id":137,"description":"Returns the median, or the number in the middle of the set of given numbers","example":"=MEDIAN(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the median","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"FREQUENCY","category":"statistical","id":147,"description":"Calculates how often values occur within a range of values and then returns a vertical array of numbers having one more element than Bins_array","example":"=FREQUENCY({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"dataArray","description":"Is an array of or reference to a set of values for which you want to count frequencies (blanks and text are ignored)","type":"array","optional":false},{"name":"binsArray","description":"Is an array of or reference to intervals into which you want to group the values in data_array","type":"array","optional":false}]},{"name":"AVEDEV","category":"statistical","id":149,"description":"Returns the average of the absolute deviations of data points from their mean. Arguments can be numbers or names, arrays, or references that contain numbers","example":"=AVEDEV(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 arguments for which you want the average of the absolute deviations","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"GAMMALN","category":"statistical","id":151,"description":"Returns the natural logarithm of the gamma function","example":"=GAMMALN(A1)","parameters":[{"name":"x","description":"Is the value for which you want to calculate GAMMALN, a positive number","type":"value|range","optional":false}]},{"name":"FISHER","category":"statistical","id":163,"description":"Returns the Fisher transformation","example":"=FISHER(A1)","parameters":[{"name":"x","description":"Is the value for which you want the transformation, a number between -1 and 1, excluding -1 and 1","type":"value|range","optional":false}]},{"name":"FISHERINV","category":"statistical","id":164,"description":"Returns the inverse of the Fisher transformation: if y = FISHER(x), then FISHERINV(y) = x","example":"=FISHERINV(A1)","parameters":[{"name":"y","description":"Is the value for which you want to perform the inverse of the transformation","type":"value|range","optional":false}]},{"name":"STANDARDIZE","category":"statistical","id":177,"description":"Returns a normalized value from a distribution characterized by a mean and standard deviation","example":"=STANDARDIZE(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value you want to normalize","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false}]},{"name":"PERMUT","category":"statistical","id":179,"description":"Returns the number of permutations for a given number of objects that can be selected from the total objects","example":"=PERMUT(10, 10)","parameters":[{"name":"numberParam","description":"Is the total number of objects","type":"number|range","optional":false},{"name":"numberChosen","description":"Is the number of objects in each permutation","type":"number|range","optional":false}]},{"name":"CORREL","category":"statistical","id":187,"description":"Returns the correlation coefficient between two data sets","example":"=CORREL({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is a cell range of values. The values should be numbers, names, arrays, or references that contain numbers","type":"array","optional":false},{"name":"array2","description":"Is a second cell range of values. The values should be numbers, names, arrays, or references that contain numbers","type":"array","optional":false}]},{"name":"INTERCEPT","category":"statistical","id":191,"description":"Calculates the point at which a line will intersect the y-axis by using a best-fit regression line plotted through the known x-values and y-values","example":"=INTERCEPT(A1, A1)","parameters":[{"name":"knownYs","description":"Is the dependent set of observations or data and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is the independent set of observations or data and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false}]},{"name":"PEARSON","category":"statistical","id":192,"description":"Returns the Pearson product moment correlation coefficient, r","example":"=PEARSON({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is a set of independent values","type":"array","optional":false},{"name":"array2","description":"Is a set of dependent values","type":"array","optional":false}]},{"name":"RSQ","category":"statistical","id":193,"description":"Returns the square of the Pearson product moment correlation coefficient through the given data points","example":"=RSQ(A1, A1)","parameters":[{"name":"knownYs","description":"Is an array or range of data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is an array or range of data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false}]},{"name":"STEYX","category":"statistical","id":194,"description":"Returns the standard error of the predicted y-value for each x in a regression","example":"=STEYX(A1, A1)","parameters":[{"name":"knownYs","description":"Is an array or range of dependent data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is an array or range of independent data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false}]},{"name":"SLOPE","category":"statistical","id":195,"description":"Returns the slope of the linear regression line through the given data points","example":"=SLOPE(A1, A1)","parameters":[{"name":"knownYs","description":"Is an array or cell range of numeric dependent data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is the set of independent data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false}]},{"name":"PROB","category":"statistical","id":197,"description":"Returns the probability that values in a range are between two limits or equal to a lower limit","example":"=PROB(A1:A5, A1:A5, A1)","parameters":[{"name":"xRange","description":"Is the range of numeric values of x with which there are associated probabilities","type":"range","optional":false},{"name":"probRange","description":"Is the set of probabilities associated with values in X_range, values between 0 and 1 and excluding 0","type":"range","optional":false},{"name":"lowerLimit","description":"Is the lower bound on the value for which you want a probability","type":"value|range","optional":false},{"name":"upperLimit","description":"Is the optional upper bound on the value. If omitted, PROB returns the probability that X_range values are equal to Lower_limit","type":"value|range","optional":true}]},{"name":"DEVSQ","category":"statistical","id":198,"description":"Returns the sum of squares of deviations of data points from their sample mean","example":"=DEVSQ(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 arguments, or an array or array reference, on which you want DEVSQ to calculate","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"GEOMEAN","category":"statistical","id":199,"description":"Returns the geometric mean of an array or range of positive numeric data","example":"=GEOMEAN(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the mean","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"HARMEAN","category":"statistical","id":200,"description":"Returns the harmonic mean of a data set of positive numbers: the reciprocal of the arithmetic mean of reciprocals","example":"=HARMEAN(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the harmonic mean","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"KURT","category":"statistical","id":202,"description":"Returns the kurtosis of a data set","example":"=KURT(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the kurtosis","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SKEW","category":"statistical","id":203,"description":"Returns the skewness of a distribution: a characterization of the degree of asymmetry of a distribution around its mean","example":"=SKEW(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the skewness","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"LARGE","category":"statistical","id":205,"description":"Returns the k-th largest value in a data set. For example, the fifth largest number","example":"=LARGE({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or range of data for which you want to determine the k-th largest value","type":"array","optional":false},{"name":"k","description":"Is the position (from the largest) in the array or cell range of the value to return","type":"value|range","optional":false}]},{"name":"SMALL","category":"statistical","id":206,"description":"Returns the k-th smallest value in a data set. For example, the fifth smallest number","example":"=SMALL({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is an array or range of numerical data for which you want to determine the k-th smallest value","type":"array","optional":false},{"name":"k","description":"Is the position (from the smallest) in the array or range of the value to return","type":"value|range","optional":false}]},{"name":"TRIMMEAN","category":"statistical","id":211,"description":"Returns the mean of the interior portion of a set of data values","example":"=TRIMMEAN({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the range or array of values to trim and average","type":"array","optional":false},{"name":"percent","description":"Is the fractional number of data points to exclude from the top and bottom of the data set","type":"value|range","optional":false}]},{"name":"COUNTIF","category":"statistical","id":219,"description":"Counts the number of cells within a range that meet the given condition","example":"=COUNTIF(A1:A5, \\">0\\")","parameters":[{"name":"range","description":"Is the range of cells from which you want to count nonblank cells","type":"range","optional":false},{"name":"criteria","description":"Is the condition in the form of a number, expression, or text that defines which cells will be counted","type":"criteria","optional":false}]},{"name":"COUNTBLANK","category":"statistical","id":220,"description":"Counts the number of empty cells in a specified range of cells","example":"=COUNTBLANK(A1:A5)","parameters":[{"name":"range","description":"Is the range from which you want to count the empty cells","type":"range","optional":false}]},{"name":"AVERAGEA","category":"statistical","id":225,"description":"Returns the arithmetic mean while treating TRUE as 1, FALSE or text as 0, and numbers as-is.","example":"=AVERAGEA(A2:A5, TRUE, \\"5\\")","parameters":[{"name":"value1","description":"First value, reference, or range to evaluate (text and logical values are counted).","type":"value|range","optional":false},{"name":"value2","description":"Additional value, reference, or range to include in the average.","type":"value|range","optional":true},{"name":"rest","description":"Optional extra arguments (up to 255 total).","type":"value|range","optional":false}]},{"name":"MAXA","category":"statistical","id":226,"description":"Returns the largest value while treating TRUE as 1, FALSE or text as 0, and numbers as-is.","example":"=MAXA(A2:A6, TRUE, \\"5\\")","parameters":[{"name":"value1","description":"First value, reference, or range to evaluate (text/logical values are counted).","type":"value|range","optional":false},{"name":"value2","description":"Optional additional value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Optional extra arguments (up to 255 total).","type":"value|range","optional":false}]},{"name":"MINA","category":"statistical","id":227,"description":"Returns the smallest value while treating TRUE as 1, FALSE or text as 0, and numbers as-is.","example":"=MINA(A2:A6, FALSE, \\"5\\")","parameters":[{"name":"value1","description":"First value, reference, or range to evaluate (text/logical values are counted).","type":"value|range","optional":false},{"name":"value2","description":"Optional additional value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Optional extra arguments (up to 255 total).","type":"value|range","optional":false}]},{"name":"STDEVPA","category":"statistical","id":228,"description":"Calculates standard deviation based on an entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1","example":"=STDEVPA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 values corresponding to a population and can be values, names, arrays, or references that contain values","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VARPA","category":"statistical","id":229,"description":"Calculates variance based on the entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1","example":"=VARPA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 value arguments corresponding to a population","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"STDEVA","category":"statistical","id":230,"description":"Estimates standard deviation based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1","example":"=STDEVA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 values corresponding to a sample of a population and can be values or names or references to values","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VARA","category":"statistical","id":231,"description":"Estimates variance based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1","example":"=VARA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 value arguments corresponding to a sample of a population","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"COUNTIFS","category":"statistical","id":333,"description":"Counts the number of cells specified by a given set of conditions or criteria","example":"=COUNTIFS(A1:A5, \\">0\\", C1:C5, C1:C5)","parameters":[{"name":"criteriaRange","description":"Is the range of cells you want evaluated for the particular condition","type":"range","optional":false},{"name":"criteria","description":"Is the condition in the form of a number, expression, or text that defines which cells will be counted","type":"criteria","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"AVERAGEIF","category":"statistical","id":335,"description":"Calculates the mean of cells in a range that satisfy a single condition.","example":"=AVERAGEIF(A2:A10, \\">100\\", B2:B10)","parameters":[{"name":"range","description":"Cells that are tested against the criteria.","type":"range","optional":false},{"name":"criteria","description":"Condition such as \\">0\\" or \\"apples\\" that determines which cells qualify.","type":"criteria","optional":false},{"name":"averageRange","description":"Optional cells to average when they differ from range; range is used when omitted.","type":"range","optional":true}]},{"name":"AVERAGEIFS","category":"statistical","id":336,"description":"Calculates the mean of cells that satisfy multiple range/criteria pairs.","example":"=AVERAGEIFS(B2:B10, A2:A10, \\"=West\\", C2:C10, \\">0\\")","parameters":[{"name":"averageRange","description":"Cells whose values are averaged when every criteria pair is satisfied.","type":"range","optional":false},{"name":"criteriaRange1","description":"Cells evaluated against the first criteria.","type":"range","optional":false},{"name":"criteria1","description":"First condition, such as \\"=North\\" or \\">0\\".","type":"criteria","optional":false},{"name":"rest","description":"Optional additional pairs supplied as criteria_range2, criteria2, criteria_range3, criteria3, and so on.","type":"range|criteria","optional":false}]},{"name":"BINOM.DIST","category":"statistical","id":338,"description":"Returns the individual term binomial distribution probability","example":"=BINOM.DIST(10, A1, A1, A1)","parameters":[{"name":"numberS","description":"Is the number of successes in trials","type":"number|range","optional":false},{"name":"trials","description":"Is the number of independent trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"BINOM.INV","category":"statistical","id":339,"description":"Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value","example":"=BINOM.INV(A1, A1, A1)","parameters":[{"name":"trials","description":"Is the number of Bernoulli trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"alpha","description":"Is the criterion value, a number between 0 and 1 inclusive","type":"value|range","optional":false}]},{"name":"CONFIDENCE.NORM","category":"statistical","id":340,"description":"Returns the confidence interval for a population mean, using a normal distribution","example":"=CONFIDENCE.NORM(A1, A1, A1)","parameters":[{"name":"alpha","description":"Is the significance level used to compute the confidence level, a number greater than 0 and less than 1","type":"value|range","optional":false},{"name":"standardDev","description":"Is the population standard deviation for the data range and is assumed to be known. Standard_dev must be greater than 0","type":"value|range","optional":false},{"name":"size","description":"Is the sample size","type":"value|range","optional":false}]},{"name":"CONFIDENCE.T","category":"statistical","id":341,"description":"Returns the confidence interval for a population mean, using a Student's T distribution","example":"=CONFIDENCE.T(A1, A1, A1)","parameters":[{"name":"alpha","description":"Is the significance level used to compute the confidence level, a number greater than 0 and less than 1","type":"value|range","optional":false},{"name":"standardDev","description":"Is the population standard deviation for the data range and is assumed to be known. Standard_dev must be greater than 0","type":"value|range","optional":false},{"name":"size","description":"Is the sample size","type":"value|range","optional":false}]},{"name":"CHISQ.TEST","category":"statistical","id":342,"description":"Returns the test for independence: the value from the chi-squared distribution for the statistic and the appropriate degrees of freedom","example":"=CHISQ.TEST(A1:A5, A1:A5)","parameters":[{"name":"actualRange","description":"Is the range of data that contains observations to test against expected values","type":"range","optional":false},{"name":"expectedRange","description":"Is the range of data that contains the ratio of the product of row totals and column totals to the grand total","type":"range","optional":false}]},{"name":"F.TEST","category":"statistical","id":343,"description":"Returns the result of an F-test, the two-tailed probability that the variances in Array1 and Array2 are not significantly different","example":"=F.TEST({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first array or range of data and can be numbers or names, arrays, or references that contain numbers (blanks are ignored)","type":"array","optional":false},{"name":"array2","description":"Is the second array or range of data and can be numbers or names, arrays, or references that contain numbers (blanks are ignored)","type":"array","optional":false}]},{"name":"COVARIANCE.P","category":"statistical","id":344,"description":"Returns population covariance, the average of the products of deviations for each data point pair in two data sets","example":"=COVARIANCE.P({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false},{"name":"array2","description":"Is the second cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false}]},{"name":"COVARIANCE.S","category":"statistical","id":345,"description":"Returns sample covariance, the average of the products of deviations for each data point pair in two data sets","example":"=COVARIANCE.S({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false},{"name":"array2","description":"Is the second cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false}]},{"name":"EXPON.DIST","category":"statistical","id":346,"description":"Returns the exponential distribution","example":"=EXPON.DIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value of the function, a nonnegative number","type":"value|range","optional":false},{"name":"lambda","description":"Is the parameter value, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"GAMMA.DIST","category":"statistical","id":347,"description":"Returns the gamma distribution","example":"=GAMMA.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.DIST returns the standard gamma distribution","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: return the cumulative distribution function = TRUE; return the probability mass function = FALSE or omitted","type":"value|range","optional":false}]},{"name":"GAMMA.INV","category":"statistical","id":348,"description":"Returns the inverse of the gamma cumulative distribution: if p = GAMMA.DIST(x,...), then GAMMA.INV(p,...) = x","example":"=GAMMA.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the gamma distribution, a number between 0 and 1, inclusive","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.INV returns the inverse of the standard gamma distribution","type":"value|range","optional":false}]},{"name":"MODE.MULT","category":"statistical","id":349,"description":"Returns a vertical array of the most frequently occurring, or repetitive, values in an array or range of data. For a horizontal array, use =TRANSPOSE(MODE.MULT(number1,number2,...))","example":"=MODE.MULT(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, or names, arrays, or references that contain numbers for which you want the mode","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"MODE.SNGL","category":"statistical","id":350,"description":"Returns the most frequently occurring, or repetitive, value in an array or range of data","example":"=MODE.SNGL(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, or names, arrays, or references that contain numbers for which you want the mode","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"NORM.DIST","category":"statistical","id":351,"description":"Returns the normal distribution for the specified mean and standard deviation","example":"=NORM.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value for which you want the distribution","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"NORM.INV","category":"statistical","id":352,"description":"Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation","example":"=NORM.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false}]},{"name":"PERCENTILE.EXC","category":"statistical","id":353,"description":"Returns the k-th percentile of values in a range, where k is in the range 0..1, exclusive","example":"=PERCENTILE.EXC({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or range of data that defines relative standing","type":"array","optional":false},{"name":"k","description":"Is the percentile value that is between 0 through 1, inclusive","type":"value|range","optional":false}]},{"name":"PERCENTILE.INC","category":"statistical","id":354,"description":"Returns the k-th percentile of values in a range, where k is in the range 0..1, inclusive","example":"=PERCENTILE.INC({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or range of data that defines relative standing","type":"array","optional":false},{"name":"k","description":"Is the percentile value that is between 0 through 1, inclusive","type":"value|range","optional":false}]},{"name":"PERCENTRANK.EXC","category":"statistical","id":355,"description":"Returns the rank of a value in a data set as a percentage (0..1, exclusive) of the data set","example":"=PERCENTRANK.EXC({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data with numeric values that defines relative standing","type":"array","optional":false},{"name":"x","description":"Is the value for which you want to know the rank","type":"value|range","optional":false},{"name":"significance","description":"Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%)","type":"value|range","optional":true}]},{"name":"PERCENTRANK.INC","category":"statistical","id":356,"description":"Returns the rank of a value in a data set as a percentage (0..1, inclusive) of the data set","example":"=PERCENTRANK.INC({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data with numeric values that defines relative standing","type":"array","optional":false},{"name":"x","description":"Is the value for which you want to know the rank","type":"value|range","optional":false},{"name":"significance","description":"Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%)","type":"value|range","optional":true}]},{"name":"POISSON.DIST","category":"statistical","id":357,"description":"Returns the Poisson distribution","example":"=POISSON.DIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the number of events","type":"value|range","optional":false},{"name":"mean","description":"Is the expected numeric value, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative Poisson probability, use TRUE; for the Poisson probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"QUARTILE.EXC","category":"statistical","id":358,"description":"Returns the quartile of a data set, based on percentile values from 0..1, exclusive","example":"=QUARTILE.EXC({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or cell range of numeric values for which you want the quartile value","type":"array","optional":false},{"name":"quart","description":"Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4","type":"value|range","optional":false}]},{"name":"QUARTILE.INC","category":"statistical","id":359,"description":"Returns the quartile of a data set, based on percentile values from 0..1, inclusive","example":"=QUARTILE.INC({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or cell range of numeric values for which you want the quartile value","type":"array","optional":false},{"name":"quart","description":"Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4","type":"value|range","optional":false}]},{"name":"RANK.AVG","category":"statistical","id":360,"description":"Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the average rank is returned","example":"=RANK.AVG(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the number for which you want to find the rank","type":"number|range","optional":false},{"name":"ref","description":"Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored","type":"value|range","optional":false},{"name":"order","description":"Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value","type":"value|range","optional":true}]},{"name":"RANK.EQ","category":"statistical","id":361,"description":"Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the top rank of that set of values is returned","example":"=RANK.EQ(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the number for which you want to find the rank","type":"number|range","optional":false},{"name":"ref","description":"Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored","type":"value|range","optional":false},{"name":"order","description":"Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value","type":"value|range","optional":true}]},{"name":"STDEV.S","category":"statistical","id":362,"description":"Estimates standard deviation based on a sample (ignores logical values and text in the sample)","example":"=STDEV.S(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers corresponding to a sample of a population and can be numbers or references that contain numbers","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"STDEV.P","category":"statistical","id":363,"description":"Calculates standard deviation based on the entire population given as arguments (ignores logical values and text)","example":"=STDEV.P(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers corresponding to a population and can be numbers or references that contain numbers","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"T.DIST","category":"statistical","id":364,"description":"Returns the left-tailed Student's t-distribution","example":"=T.DIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the numeric value at which to evaluate the distribution","type":"value|range","optional":false},{"name":"degFreedom","description":"Is an integer indicating the number of degrees of freedom that characterize the distribution","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"T.DIST.2T","category":"statistical","id":365,"description":"Returns the two-tailed Student's t-distribution","example":"=T.DIST.2T(A1, A1)","parameters":[{"name":"x","description":"Is the numeric value at which to evaluate the distribution","type":"value|range","optional":false},{"name":"degFreedom","description":"Is an integer indicating the number of degrees of freedom that characterize the distribution","type":"value|range","optional":false}]},{"name":"T.DIST.RT","category":"statistical","id":366,"description":"Returns the right-tailed Student's t-distribution","example":"=T.DIST.RT(A1, A1)","parameters":[{"name":"x","description":"Is the numeric value at which to evaluate the distribution","type":"value|range","optional":false},{"name":"degFreedom","description":"Is an integer indicating the number of degrees of freedom that characterize the distribution","type":"value|range","optional":false}]},{"name":"T.INV","category":"statistical","id":367,"description":"Returns the left-tailed inverse of the Student's t-distribution","example":"=T.INV(A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is a positive integer indicating the number of degrees of freedom to characterize the distribution","type":"value|range","optional":false}]},{"name":"T.INV.2T","category":"statistical","id":368,"description":"Returns the two-tailed inverse of the Student's t-distribution","example":"=T.INV.2T(A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is a positive integer indicating the number of degrees of freedom to characterize the distribution","type":"value|range","optional":false}]},{"name":"VAR.S","category":"statistical","id":369,"description":"Estimates variance based on a sample (ignores logical values and text in the sample)","example":"=VAR.S(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numeric arguments corresponding to a sample of a population","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VAR.P","category":"statistical","id":370,"description":"Calculates variance based on the entire population (ignores logical values and text in the population)","example":"=VAR.P(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numeric arguments corresponding to a population","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"WEIBULL.DIST","category":"statistical","id":371,"description":"Returns the Weibull distribution","example":"=WEIBULL.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"BETA.DIST","category":"statistical","id":374,"description":"Returns the beta probability distribution function","example":"=BETA.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value between A and B at which to evaluate the function","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false},{"name":"a","description":"Is an optional lower bound to the interval of x. If omitted, A = 0","type":"value|range","optional":true},{"name":"b","description":"Is an optional upper bound to the interval of x. If omitted, B = 1","type":"value|range","optional":true}]},{"name":"BETA.INV","category":"statistical","id":375,"description":"Returns the inverse of the cumulative beta probability density function (BETA.DIST)","example":"=BETA.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the beta distribution","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"a","description":"Is an optional lower bound to the interval of x. If omitted, A = 0","type":"value|range","optional":true},{"name":"b","description":"Is an optional upper bound to the interval of x. If omitted, B = 1","type":"value|range","optional":true}]},{"name":"CHISQ.DIST","category":"statistical","id":376,"description":"Returns the left-tailed probability of the chi-squared distribution","example":"=CHISQ.DIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"CHISQ.DIST.RT","category":"statistical","id":377,"description":"Returns the right-tailed probability of the chi-squared distribution","example":"=CHISQ.DIST.RT(A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"CHISQ.INV","category":"statistical","id":378,"description":"Returns the inverse of the left-tailed probability of the chi-squared distribution","example":"=CHISQ.INV(A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"CHISQ.INV.RT","category":"statistical","id":379,"description":"Returns the inverse of the right-tailed probability of the chi-squared distribution","example":"=CHISQ.INV.RT(A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"F.DIST","category":"statistical","id":380,"description":"Returns the (left-tailed) F probability distribution (degree of diversity) for two data sets","example":"=F.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"F.DIST.RT","category":"statistical","id":381,"description":"Returns the (right-tailed) F probability distribution (degree of diversity) for two data sets","example":"=F.DIST.RT(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"F.INV","category":"statistical","id":382,"description":"Returns the inverse of the (left-tailed) F probability distribution: if p = F.DIST(x,...), then F.INV(p,...) = x","example":"=F.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"F.INV.RT","category":"statistical","id":383,"description":"Returns the inverse of the (right-tailed) F probability distribution: if p = F.DIST.RT(x,...), then F.INV.RT(p,...) = x","example":"=F.INV.RT(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"HYPGEOM.DIST","category":"statistical","id":384,"description":"Returns the hypergeometric distribution","example":"=HYPGEOM.DIST(A1, 10, A1, 10)","parameters":[{"name":"sampleS","description":"Is the number of successes in the sample","type":"value|range","optional":false},{"name":"numberSample","description":"Is the size of the sample","type":"number|range","optional":false},{"name":"populationS","description":"Is the number of successes in the population","type":"value|range","optional":false},{"name":"numberPop","description":"Is the population size","type":"number|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"LOGNORM.DIST","category":"statistical","id":385,"description":"Returns the lognormal distribution of x, where ln(x) is normally distributed with parameters Mean and Standard_dev","example":"=LOGNORM.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a positive number","type":"value|range","optional":false},{"name":"mean","description":"Is the mean of ln(x)","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of ln(x), a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"LOGNORM.INV","category":"statistical","id":386,"description":"Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with parameters Mean and Standard_dev","example":"=LOGNORM.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the lognormal distribution, a number between 0 and 1, inclusive","type":"value|range","optional":false},{"name":"mean","description":"Is the mean of ln(x)","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of ln(x), a positive number","type":"value|range","optional":false}]},{"name":"NEGBINOM.DIST","category":"statistical","id":387,"description":"Returns the negative binomial distribution, the probability that there will be Number_f failures before the Number_s-th success, with Probability_s probability of a success","example":"=NEGBINOM.DIST(10, 10, A1, A1)","parameters":[{"name":"numberF","description":"Is the number of failures","type":"number|range","optional":false},{"name":"numberS","description":"Is the threshold number of successes","type":"number|range","optional":false},{"name":"probabilityS","description":"Is the probability of a success; a number between 0 and 1","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"NORM.S.DIST","category":"statistical","id":388,"description":"Returns the standard normal distribution (has a mean of zero and a standard deviation of one)","example":"=NORM.S.DIST(A1, A1)","parameters":[{"name":"z","description":"Is the value for which you want the distribution","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"NORM.S.INV","category":"statistical","id":389,"description":"Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one)","example":"=NORM.S.INV(A1)","parameters":[{"name":"probability","description":"Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false}]},{"name":"T.TEST","category":"statistical","id":390,"description":"Returns the probability associated with a Student's t-Test","example":"=T.TEST({1,2;3,4}, {1,2;3,4}, A1, A1)","parameters":[{"name":"array1","description":"Is the first data set","type":"array","optional":false},{"name":"array2","description":"Is the second data set","type":"array","optional":false},{"name":"tails","description":"Specifies the number of distribution tails to return: one-tailed distribution = 1; two-tailed distribution = 2","type":"value|range","optional":false},{"name":"typeParam","description":"Is the kind of t-test: paired = 1, two-sample equal variance (homoscedastic) = 2, two-sample unequal variance = 3","type":"value|range","optional":false}]},{"name":"Z.TEST","category":"statistical","id":391,"description":"Returns the one-tailed P-value of a z-test","example":"=Z.TEST({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data against which to test X","type":"array","optional":false},{"name":"x","description":"Is the value to test","type":"value|range","optional":false},{"name":"sigma","description":"Is the population (known) standard deviation. If omitted, the sample standard deviation is used","type":"value|range","optional":true}]},{"name":"GAMMALN.PRECISE","category":"statistical","id":394,"description":"Returns the natural logarithm of the gamma function","example":"=GAMMALN.PRECISE(A1)","parameters":[{"name":"x","description":"Is the value for which you want to calculate GAMMALN.PRECISE, a positive number","type":"value|range","optional":false}]},{"name":"PERMUTATIONA","category":"statistical","id":414,"description":"Returns the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects","example":"=PERMUTATIONA(10, 10)","parameters":[{"name":"numberParam","description":"Is the total number of objects","type":"number|range","optional":false},{"name":"numberChosen","description":"Is the number of objects in each permutation","type":"number|range","optional":false}]},{"name":"BINOM.DIST.RANGE","category":"statistical","id":421,"description":"Returns the probability of a trial result using a binomial distribution","example":"=BINOM.DIST.RANGE(A1, A1, 10)","parameters":[{"name":"trials","description":"Is the number of independent trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial","type":"value|range","optional":false},{"name":"numberS","description":"Is the number of successes in trials","type":"number|range","optional":false},{"name":"numberS2","description":"If provided this function returns the probability that the number of successful trials shall lie between number_s and number_s2","type":"number|range","optional":true}]},{"name":"GAMMA","category":"statistical","id":422,"description":"Returns the Gamma function value","example":"=GAMMA(A1)","parameters":[{"name":"x","description":"Is the value for which you want to calculate Gamma","type":"value|range","optional":false}]},{"name":"SKEW.P","category":"statistical","id":423,"description":"Returns the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean","example":"=SKEW.P(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 254 numbers or names, arrays, or references that contain numbers for which you want the population skewness","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"GAUSS","category":"statistical","id":424,"description":"Returns 0.5 less than the standard normal cumulative distribution","example":"=GAUSS(A1)","parameters":[{"name":"x","description":"Is the value for which you want the distribution","type":"value|range","optional":false}]},{"name":"PHI","category":"statistical","id":425,"description":"Returns the value of the density function for a standard normal distribution","example":"=PHI(A1)","parameters":[{"name":"x","description":"Is the number for which you want the density of the standard normal distribution","type":"value|range","optional":false}]},{"name":"FORECAST.LINEAR","category":"statistical","id":442,"description":"Calculates, or predicts, a future value along a linear trend by using existing values","example":"=FORECAST.LINEAR(A1, A1, A1)","parameters":[{"name":"x","description":"Is the data point for which you want to predict a value and must be a numeric value","type":"value|range","optional":false},{"name":"knownYs","description":"Is the dependent array or range of numeric data","type":"value|range","optional":false},{"name":"knownXs","description":"Is the independent array or range of numeric data. The variance of Known_x's must not be zero","type":"value|range","optional":false}]},{"name":"MAXIFS","category":"statistical","id":443,"description":"Returns the maximum value from maxRange after applying one or more criteria ranges.","example":"=MAXIFS(B2:B20, A2:A20, \\"North\\", C2:C20, \\">1000\\")","parameters":[{"name":"maxRange","description":"Cells that contain the values to compare.","type":"range","optional":false},{"name":"criteriaRange1","description":"First range to test against the paired criteria.","type":"range","optional":false},{"name":"criteria1","description":"First condition, such as \\"=East\\" or \\">0\\".","type":"criteria","optional":false},{"name":"rest","description":"Optional additional pairs supplied as criteria_range2, criteria2, criteria_range3, criteria3, and so on.","type":"range|criteria","optional":false}]},{"name":"MINIFS","category":"statistical","id":444,"description":"Returns the minimum value from minRange after applying one or more criteria ranges.","example":"=MINIFS(B2:B20, A2:A20, \\"North\\", C2:C20, \\">0\\")","parameters":[{"name":"minRange","description":"Cells that contain the values to compare.","type":"range","optional":false},{"name":"criteriaRange1","description":"First range to test against the paired criteria.","type":"range","optional":false},{"name":"criteria1","description":"First condition, such as \\"=East\\" or \\">0\\".","type":"criteria","optional":false},{"name":"rest","description":"Optional additional pairs supplied as criteria_range2, criteria2, criteria_range3, criteria3, and so on.","type":"range|criteria","optional":false}]}]`,
    );
  }),
  ss,
  cs = e(() => {
    ss = JSON.parse(
      `[{"name":"DOLLAR","category":"text","id":14,"description":"Converts a number to text, using currency format","example":"=DOLLAR(10, A1)","parameters":[{"name":"numberParam","description":"Is a number, a reference to a cell containing a number, or a formula that evaluates to a number","type":"number|range","optional":false},{"name":"decimals","description":"Is the number of digits to the right of the decimal point. The number is rounded as necessary; if omitted, Decimals = 2","type":"value|range","optional":true}]},{"name":"FIXED","category":"text","id":15,"description":"Rounds a number to the specified number of decimals and returns the result as text with or without commas","example":"=FIXED(10, A1)","parameters":[{"name":"numberParam","description":"Is the number you want to round and convert to text","type":"number|range","optional":false},{"name":"decimals","description":"Is the number of digits to the right of the decimal point. If omitted, Decimals = 2","type":"value|range","optional":true},{"name":"noCommas","description":"Is a logical value: do not display commas in the returned text = TRUE; do display commas in the returned text = FALSE or omitted","type":"value|range","optional":true}]},{"name":"REPT","category":"text","id":31,"description":"Repeats text a given number of times. Use REPT to fill a cell with a number of instances of a text string","example":"=REPT(\\"text\\", TIME(9, 0, 0))","parameters":[{"name":"text","description":"Is the text you want to repeat","type":"string","optional":false},{"name":"numberTimes","description":"Is a positive number specifying the number of times to repeat text","type":"time","optional":false}]},{"name":"MID","category":"text","id":32,"description":"Returns the characters from the middle of a text string, given a starting position and length","example":"=MID(\\"text\\", A1, A1)","parameters":[{"name":"text","description":"Is the text string from which you want to extract the characters","type":"string","optional":false},{"name":"startNum","description":"Is the position of the first character you want to extract. The first character in Text is 1","type":"value|range","optional":false},{"name":"numChars","description":"Specifies how many characters to return from Text","type":"value|range","optional":false}]},{"name":"LEN","category":"text","id":33,"description":"Returns the number of characters in a text string","example":"=LEN(\\"text\\")","parameters":[{"name":"text","description":"Is the text whose length you want to find. Spaces count as characters","type":"string","optional":false}]},{"name":"VALUE","category":"text","id":34,"description":"Converts a text string that represents a number to a number","example":"=VALUE(\\"text\\")","parameters":[{"name":"text","description":"Is the text enclosed in quotation marks or a reference to a cell containing the text you want to convert","type":"string","optional":false}]},{"name":"TEXT","category":"text","id":49,"description":"Converts a value to text in a specific number format","example":"=TEXT(A1:A5, \\"#,##0.00\\")","parameters":[{"name":"value","description":"Is a number, a formula that evaluates to a numeric value, or a reference to a cell containing a numeric value","type":"value|range","optional":false},{"name":"formatText","description":"Is a number format in text form from the Category box on the Number tab in the Format Cells dialog box","type":"string","optional":false}]},{"name":"SEARCH","category":"text","id":77,"description":"Returns the number of the character at which a specific character or text string is first found, reading left to right (not case-sensitive)","example":"=SEARCH(\\"text\\", \\"text\\", A1)","parameters":[{"name":"findText","description":"Is the text you want to find. You can use the ? and * wildcard characters; use ~? and ~* to find the ? and * characters","type":"string","optional":false},{"name":"withinText","description":"Is the text in which you want to search for Find_text","type":"string","optional":false},{"name":"startNum","description":"Is the character number in Within_text, counting from the left, at which you want to start searching. If omitted, 1 is used","type":"value|range","optional":true}]},{"name":"CHAR","category":"text","id":88,"description":"Returns the character specified by the code number from the character set for your computer","example":"=CHAR(10)","parameters":[{"name":"numberParam","description":"Is a number between 1 and 255 specifying which character you want","type":"number|range","optional":false}]},{"name":"LOWER","category":"text","id":89,"description":"Converts all letters in a text string to lowercase","example":"=LOWER(\\"text\\")","parameters":[{"name":"text","description":"Is the text you want to convert to lowercase. Characters in Text that are not letters are not changed","type":"string","optional":false}]},{"name":"UPPER","category":"text","id":90,"description":"Converts a text string to all uppercase letters","example":"=UPPER(\\"text\\")","parameters":[{"name":"text","description":"Is the text you want converted to uppercase, a reference or a text string","type":"string","optional":false}]},{"name":"PROPER","category":"text","id":91,"description":"Converts a text string to proper case; the first letter in each word to uppercase, and all other letters to lowercase","example":"=PROPER(\\"text\\")","parameters":[{"name":"text","description":"Is text enclosed in quotation marks, a formula that returns text, or a reference to a cell containing text to partially capitalize","type":"string","optional":false}]},{"name":"LEFT","category":"text","id":92,"description":"Returns the specified number of characters from the start of a text string","example":"=LEFT(\\"text\\", A1)","parameters":[{"name":"text","description":"Is the text string containing the characters you want to extract","type":"string","optional":false},{"name":"numChars","description":"Specifies how many characters you want LEFT to extract; 1 if omitted","type":"value|range","optional":true}]},{"name":"RIGHT","category":"text","id":93,"description":"Returns the specified number of characters from the end of a text string","example":"=RIGHT(\\"text\\", A1)","parameters":[{"name":"text","description":"Is the text string that contains the characters you want to extract","type":"string","optional":false},{"name":"numChars","description":"Specifies how many characters you want to extract, 1 if omitted","type":"value|range","optional":true}]},{"name":"EXACT","category":"text","id":94,"description":"Checks whether two text strings are exactly the same, and returns TRUE or FALSE. EXACT is case-sensitive","example":"=EXACT(\\"text1\\", \\"text2\\")","parameters":[{"name":"text1","description":"Is the first text string","type":"string","optional":false},{"name":"text2","description":"Is the second text string","type":"string","optional":false}]},{"name":"TRIM","category":"text","id":95,"description":"Removes all spaces from a text string except for single spaces between words","example":"=TRIM(\\"text\\")","parameters":[{"name":"text","description":"Is the text from which you want spaces removed","type":"string","optional":false}]},{"name":"REPLACE","category":"text","id":96,"description":"Replaces part of a text string with a different text string","example":"=REPLACE(\\"text\\", A1, A1, \\"text\\")","parameters":[{"name":"oldText","description":"Is text in which you want to replace some characters","type":"string","optional":false},{"name":"startNum","description":"Is the position of the character in Old_text that you want to replace with New_text","type":"value|range","optional":false},{"name":"numChars","description":"Is the number of characters in Old_text that you want to replace","type":"value|range","optional":false},{"name":"newText","description":"Is the text that will replace characters in Old_text","type":"string","optional":false}]},{"name":"SUBSTITUTE","category":"text","id":97,"description":"Replaces existing text with new text in a text string","example":"=SUBSTITUTE(\\"text\\", \\"text\\", \\"text\\")","parameters":[{"name":"text","description":"Is the text or the reference to a cell containing text in which you want to substitute characters","type":"string","optional":false},{"name":"oldText","description":"Is the existing text you want to replace. If the case of Old_text does not match the case of text, SUBSTITUTE will not replace the text","type":"string","optional":false},{"name":"newText","description":"Is the text you want to replace Old_text with","type":"string","optional":false},{"name":"instanceNum","description":"Specifies which occurrence of Old_text you want to replace. If omitted, every instance of Old_text is replaced","type":"value|range","optional":true}]},{"name":"CODE","category":"text","id":98,"description":"Returns a numeric code for the first character in a text string, in the character set used by your computer","example":"=CODE(\\"text\\")","parameters":[{"name":"text","description":"Is the text for which you want the code of the first character","type":"string","optional":false}]},{"name":"FIND","category":"text","id":99,"description":"Returns the starting position of one text string within another text string. FIND is case-sensitive","example":"=FIND(\\"text\\", \\"text\\", A1)","parameters":[{"name":"findText","description":"Is the text you want to find. Use double quotes (empty text) to match the first character in Within_text; wildcard characters not allowed","type":"string","optional":false},{"name":"withinText","description":"Is the text containing the text you want to find","type":"string","optional":false},{"name":"startNum","description":"Specifies the character at which to start the search. The first character in Within_text is character number 1. If omitted, Start_num = 1","type":"value|range","optional":true}]},{"name":"T","category":"text","id":104,"description":"Checks whether a value is text, and returns the text if it is, or returns double quotes (empty text) if it is not","example":"=T(A1:A5)","parameters":[{"name":"value","description":"Is the value to test","type":"value|range","optional":false}]},{"name":"CLEAN","category":"text","id":112,"description":"Removes all nonprintable characters from text","example":"=CLEAN(\\"text\\")","parameters":[{"name":"text","description":"Is any worksheet information from which you want to remove nonprintable characters","type":"string","optional":false}]},{"name":"BAHTTEXT","category":"text","id":232,"description":"Converts a number to text (baht)","example":"=BAHTTEXT(10)","parameters":[{"name":"numberParam","description":"Is a number that you want to convert","type":"number|range","optional":false}]},{"name":"UNICHAR","category":"text","id":427,"description":"Returns the Unicode character referenced by the given numeric value","example":"=UNICHAR(10)","parameters":[{"name":"numberParam","description":"Is the Unicode number representing a character","type":"number|range","optional":false}]},{"name":"UNICODE","category":"text","id":428,"description":"Returns the number (code point) corresponding to the first character of the text","example":"=UNICODE(\\"text\\")","parameters":[{"name":"text","description":"Is the character that you want the Unicode value of","type":"string","optional":false}]},{"name":"NUMBERVALUE","category":"text","id":432,"description":"Converts text to number in a locale-independent manner","example":"=NUMBERVALUE(\\"text\\", A1)","parameters":[{"name":"text","description":"Is the string representing the number you want to convert","type":"string","optional":false},{"name":"decimalSeparator","description":"Is the character used as the decimal separator in the string","type":"value|range","optional":true},{"name":"groupSeparator","description":"Is the character used as the group separator in the string","type":"value|range","optional":true}]},{"name":"TEXTJOIN","category":"text","id":445,"description":"Concatenates a list or range of text strings using a delimiter","example":"=TEXTJOIN(\\",\\", A1, \\"text1\\", C1:C5)","parameters":[{"name":"delimiter","description":"Character or string to insert between each text item","type":"string","optional":false},{"name":"ignoreEmpty","description":"If TRUE(default), ignores empty cells","type":"value|range","optional":false},{"name":"text1","description":"Are 1 to 252 text strings or ranges to be joined","type":"string","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"CONCAT","category":"text","id":446,"description":"Concatenates a list or range of text strings","example":"=CONCAT(\\"text1\\", C1:C5, C1:C5)","parameters":[{"name":"text1","description":"Are 1 to 254 text strings or ranges to be joined to a single text string","type":"string","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"TEXTBEFORE","category":"text","id":453,"description":"Returns text that's before delimiting characters.","example":"=TEXTBEFORE(\\"text\\", \\",\\", A1)","parameters":[{"name":"text","description":"The text you want to search for the delimiter.","type":"string","optional":false},{"name":"delimiter","description":"The character or string to use as a delimiter.","type":"string","optional":false},{"name":"instanceNum","description":"The desired occurrence of delimiter. The default is 1. A negative number searches from the end.","type":"value|range","optional":true},{"name":"matchMode","description":"Searches the text for a delimiter match. By default, a case-sensitive match is done.","type":"value|range","optional":true},{"name":"matchEnd","description":"Whether to match the delimiter against the end of text. By default, they're not matched.","type":"value|range","optional":true},{"name":"ifNotFound","description":"Returned if no match is found. By default, #N/A is returned.","type":"value|range","optional":true}]},{"name":"TEXTAFTER","category":"text","id":454,"description":"Returns text that's after delimiting characters.","example":"=TEXTAFTER(\\"text\\", \\",\\", A1)","parameters":[{"name":"text","description":"The text you want to search for the delimiter.","type":"string","optional":false},{"name":"delimiter","description":"The character or string to use as a delimiter.","type":"string","optional":false},{"name":"instanceNum","description":"The desired occurrence of delimiter. The default is 1. A negative number searches from the end.","type":"value|range","optional":true},{"name":"matchMode","description":"Searches the text for a delimiter match. By default, a case-sensitive match is done.","type":"value|range","optional":true},{"name":"matchEnd","description":"Whether to match the delimiter against the end of text. By default, they're not matched.","type":"value|range","optional":true},{"name":"ifNotFound","description":"Returned if no match is found. By default, #N/A is returned.","type":"value|range","optional":true}]},{"name":"TEXTSPLIT","category":"text","id":455,"description":"Splits text into rows or columns using delimiters.","example":"=TEXTSPLIT(\\"text\\", \\",\\", \\",\\")","parameters":[{"name":"text","description":"The text to split","type":"string","optional":false},{"name":"colDelimiter","description":"Character or string to split columns by.","type":"string","optional":false},{"name":"rowDelimiter","description":"Character or string to split rows by.","type":"string","optional":true},{"name":"ignoreEmpty","description":"Whether to ignore empty cells. Defaults to TRUE.","type":"value|range","optional":true},{"name":"matchMode","description":"Searches the text for a delimiter match. By default, a case-sensitive match is done.","type":"value|range","optional":true},{"name":"padWith","description":"The value to use for padding. Defaults to an empty string.","type":"value|range","optional":true}]},{"name":"VALUETOTEXT","category":"text","id":471,"description":"Returns a text representation of a value","example":"=VALUETOTEXT(A1:A5, \\"#,##0.00\\")","parameters":[{"name":"value","description":"The value to represent as text","type":"value|range","optional":false},{"name":"format","description":"The format of the text","type":"string","optional":true}]},{"name":"ARRAYTOTEXT","category":"text","id":472,"description":"Returns a text representation of an array","example":"=ARRAYTOTEXT({1,2;3,4}, \\"#,##0.00\\")","parameters":[{"name":"array","description":"The array to represent as text","type":"array","optional":false},{"name":"format","description":"The format of the text","type":"string","optional":true}]},{"name":"TRANSLATE","category":"text","id":489,"description":"Translates a text string from one language into another language using the Microsoft Translation service","example":"=TRANSLATE(\\"text\\", A1)","parameters":[{"name":"text","description":"Is the text you want to translate","type":"string","optional":false},{"name":"sourceLanguage","description":"Specifies the source language your text is currently in. Expressed as a two-letter language code","type":"value|range","optional":true},{"name":"targetLanguage","description":"Specifies the language you want your text to be translated into. Expressed as a two-letter language code","type":"value|range","optional":true}]},{"name":"DETECTLANGUAGE","category":"text","id":490,"description":"Detects the language of a text string using the Microsoft Translation service","example":"=DETECTLANGUAGE(\\"text\\")","parameters":[{"name":"text","description":"Is the text you would like to detect the language for","type":"string","optional":false}]},{"name":"REGEXTEST","category":"text","id":491,"description":"Checks whether the input matches the pattern, and returns TRUE or FALSE","example":"=REGEXTEST(\\"text\\", A1, A1)","parameters":[{"name":"text","description":"Is the text you are searching within","type":"string","optional":false},{"name":"pattern","description":"The regular expression to be applied","type":"value|range","optional":false},{"name":"caseSensitivity","description":"Whether the match is case sensitive","type":"value|range","optional":true}]},{"name":"REGEXREPLACE","category":"text","id":492,"description":"Returns 'text', with 'replacement' in place of matches with 'pattern'","example":"=REGEXREPLACE(\\"text\\", A1, A1)","parameters":[{"name":"text","description":"The text you are searching within","type":"string","optional":false},{"name":"pattern","description":"The regular expression to be applied","type":"value|range","optional":false},{"name":"replacement","description":"The string that replaces the matching substring in text. Where $n appears in the string, where $n is a whole number, $n is replaced with the nth capture group","type":"value|range","optional":false},{"name":"occurrence","description":"Which occurrence to be replaced. If 0, all occurrences are replaced. A negative value means that number of occurrences from the end of the text.","type":"value|range","optional":true},{"name":"caseSensitivity","description":"Whether the match is case sensitive","type":"value|range","optional":true}]},{"name":"REGEXEXTRACT","category":"text","id":493,"description":"Extracts substrings of 'text' based on the provided REGEX 'pattern'","example":"=REGEXEXTRACT(\\"text\\", A1, A1)","parameters":[{"name":"text","description":"Is the text you are searching within","type":"string","optional":false},{"name":"pattern","description":"The regular expression to be applied","type":"value|range","optional":false},{"name":"returnMode","description":"Specify which matches to return","type":"value|range","optional":true},{"name":"caseSensitivity","description":"Whether the match is case sensitive","type":"value|range","optional":true}]}]`,
    );
  }),
  ls,
  us = e(() => {
    (Bo(),
      Ho(),
      Wo(),
      Ko(),
      Jo(),
      Xo(),
      Qo(),
      es(),
      ns(),
      is(),
      os(),
      cs(),
      (ls = [...zo, ...Vo, ...Uo, ...Go, ...qo, ...Yo, ...Zo, ...$o, ...ts, ...rs, ...as, ...ss]));
  });
function ds(e) {
  let t = te(e ?? ``),
    n = [],
    r = [],
    i = [],
    a = [],
    o = null,
    s;
  for (let c = 0; c < t.length; c += 1) {
    let l = t[c];
    if (!l || l.type === `EOF`) continue;
    let u = e.slice(l.start, l.end);
    if (l.type === `Whitespace`) {
      n.push({ kind: `ws`, from: l.start, to: l.end, text: u });
      continue;
    }
    if (l.type === `Identifier` && t[c + 1]?.type === `Bang`) {
      let e = Cs(u),
        t = { kind: `sheet_name`, from: l.start, to: l.end, text: u, norm: e };
      (n.push(t), r.push(ms(t.from, t.to)), (o = e));
      continue;
    }
    if (l.type === `Bang`) {
      let e = { kind: `op`, from: l.start, to: l.end, text: u };
      (n.push(e), r.push(ms(e.from, e.to)), (s = o ?? void 0), (o = null));
      continue;
    }
    let d = hs(t, c + 1),
      f = (l.type === `Identifier` || l.type === `Boolean`) && d?.type === `ParenOpen`;
    if (!f) {
      let a = gs(t, c, e, s);
      if (a) {
        (n.push(a.token),
          r.push(a.highlight),
          i.push(a.refSpan),
          (c = a.nextIndex - 1),
          (s = void 0));
        continue;
      }
    }
    s &&= void 0;
    let p = fs(l, u);
    (f && p.kind === `ident`
      ? ((p.norm = u.toUpperCase()), r.push({ kind: `func`, from: p.from, to: p.to }))
      : ps(p, r, a),
      n.push(p));
  }
  return { tokens: n, highlights: r, refs: i, errors: a.length > 0 ? a : void 0 };
}
function fs(e, t) {
  let n = { from: e.start, to: e.end, text: t };
  switch (e.type) {
    case `Number`:
      return { ...n, kind: `number` };
    case `String`:
      return { ...n, kind: `string` };
    case `Boolean`:
    case `Identifier`:
      return { ...n, kind: `ident` };
    case `Error`:
      return { ...n, kind: `error` };
    case `Operator`:
    case `ParenOpen`:
    case `ParenClose`:
    case `Comma`:
    case `Colon`:
    case `At`:
    case `Hash`:
    case `LBrace`:
    case `RBrace`:
    case `Semicolon`:
      return { ...n, kind: `op` };
    default:
      return { ...n, kind: `unknown` };
  }
}
function ps(e, t, n) {
  switch (e.kind) {
    case `string`:
      t.push({ kind: `string`, from: e.from, to: e.to });
      break;
    case `number`:
      t.push({ kind: `number`, from: e.from, to: e.to });
      break;
    case `error`:
      (t.push({ kind: `error`, from: e.from, to: e.to }),
        n.push({ from: e.from, to: e.to, code: e.text }));
      break;
    case `op`:
      t.push(ms(e.from, e.to));
      break;
    default:
      break;
  }
}
function ms(e, t) {
  return { kind: `dim`, from: e, to: t };
}
function hs(e, t) {
  for (let n = t; n < e.length; n += 1) {
    let t = e[n];
    if (!(!t || t.type === `Whitespace`)) return t;
  }
  return null;
}
function gs(e, t, n, r) {
  let i = e[t];
  if (!i || !Ts.has(i.type)) return null;
  let a = t + 1,
    o = !1;
  for (; a < e.length;) {
    let t = e[a];
    if (!t || t.type === `EOF` || t.type === `Whitespace`) break;
    if (t.type === `Colon`) {
      if (o) break;
      ((o = !0), (a += 1));
      continue;
    }
    if (!Es.has(t.type)) break;
    a += 1;
  }
  let s = e[a - 1];
  if (!s) return null;
  let c = n.slice(i.start, s.end);
  if (!c || !Ds.test(c)) return null;
  let l = _s(c, r);
  if (!l) return null;
  let u = { kind: `ref`, from: i.start, to: s.end, text: c, norm: l.a1 },
    d = ws(l.sheet, l.a1);
  return {
    token: u,
    highlight: {
      kind: `ref`,
      from: u.from,
      to: u.to,
      colorKey: d,
      ref: { a1: l.sheet ? `${l.sheet}!${l.a1}` : l.a1, sheet: l.sheet, abs: l.isAbsolute },
    },
    refSpan: { id: d, from: u.from, to: u.to, a1: l.a1, sheet: l.sheet },
    nextIndex: a,
  };
}
function _s(e, t) {
  let n = e.trim();
  if (!n) return null;
  let r = t?.trim() || void 0,
    i = n.indexOf(`:`);
  if (i === -1) {
    let e = vs(n, r, !1);
    return !e || e.kind !== `cell`
      ? null
      : { sheet: r, a1: bs(e.address), isAbsolute: e.address.absRow || e.address.absCol };
  }
  if (n.indexOf(`:`, i + 1) !== -1) return null;
  let a = n.slice(0, i),
    o = n.slice(i + 1);
  if (!a || !o) return null;
  let s = vs(a, r, !0),
    c = vs(o, r, !0);
  return !s || !c
    ? null
    : s.kind === `cell` && c.kind === `cell`
      ? { sheet: r, a1: `${bs(s.address)}:${bs(c.address)}`, isAbsolute: !1 }
      : s.kind === `column` && c.kind === `column`
        ? { sheet: r, a1: `${xs(s)}:${xs(c)}`, isAbsolute: !1 }
        : s.kind === `row` && c.kind === `row`
          ? { sheet: r, a1: `${Ss(s)}:${Ss(c)}`, isAbsolute: !1 }
          : null;
}
function vs(e, t, n) {
  let r = e.trim();
  if (!r) return null;
  let i = t ? { sheetName: t } : void 0,
    a = P(r, i);
  if (a) return { kind: `cell`, address: a, raw: r };
  if (!n) return null;
  let o = ne(r, i);
  if (o && o.kind === `WholeColumn`) return { kind: `column`, col: o.col, raw: r };
  let s = ys(r);
  return s ? { kind: `row`, row: s.row, abs: s.abs, raw: r } : null;
}
function ys(e) {
  let t = /^(\$?)(\d{1,7})$/.exec(e);
  if (!t) return null;
  let n = Number(t[2]);
  return !Number.isInteger(n) || n <= 0 ? null : { row: n, abs: t[1] === `$` };
}
function bs(e) {
  let t = N(e.col);
  return `${e.absCol ? `$${t}` : t}${e.absRow ? `$${e.row}` : String(e.row)}`;
}
function xs(e) {
  let t = N(e.col);
  return e.raw.startsWith(`$`) ? `$${t}` : t;
}
function Ss(e) {
  let t = String(e.row);
  return e.abs ? `$${t}` : t;
}
function Cs(e) {
  let t = e.trim();
  return (
    t.length >= 2 &&
      t.startsWith(`'`) &&
      t.endsWith(`'`) &&
      (t = t.slice(1, -1).replace(/''/g, `'`)),
    t
  );
}
function ws(e, t) {
  return `ref:${(e ?? `local`).toUpperCase()}:${t.replace(/\$/g, ``).toUpperCase()}`;
}
var Ts,
  Es,
  Ds,
  Os = e(() => {
    (F(),
      (Ts = new Set([`Identifier`, `Number`])),
      (Es = new Set([`Identifier`, `Number`])),
      (Ds = /^[A-Za-z0-9:$]+$/));
  });
function ks(e) {
  let t = e.formula ?? ``,
    n = js(e.caret ?? 0, t.length),
    r = ds(t).tokens,
    i = Rs(r, n),
    a = Ms(t, n, r),
    o = a.prefix.toUpperCase(),
    s = Vs.test(a.prefix),
    c = Ps(o),
    l = Fs(t, n),
    u = Ls(e.selectedFunctionName, c),
    d = l?.metadata ?? u ?? (c.length === 1 ? c[0] : void 0);
  if (d) {
    let e = l?.metadata === d ? l.argumentIndex : 0;
    return { kind: `parameters`, function: d, argumentIndex: e, parameter: Is(d.parameters, e) };
  }
  return !s || i || c.length === 0 ? null : { kind: `functions`, prefix: a.prefix, suggestions: c };
}
function As() {
  let e = new Map();
  for (let t of ls) e.set(t.name.toUpperCase(), t);
  return e;
}
function js(e, t) {
  return Number.isNaN(e) ? 0 : Math.min(Math.max(e, 0), t);
}
function Ms(e, t, n) {
  for (let r of n)
    if (r.kind === `ident` && r.from <= t && t <= r.to)
      return { prefix: e.slice(r.from, t), start: r.from };
  let r = Ns(e, t);
  return { prefix: e.slice(r, t), start: r };
}
function Ns(e, t) {
  let n = t;
  for (; n > 0;) {
    let t = e[n - 1] ?? ``;
    if (!Bs.test(t)) break;
    --n;
  }
  return n;
}
function Ps(e) {
  return e ? ls.filter((t) => t.name.toUpperCase().startsWith(e)) : ls.slice();
}
function Fs(e, t) {
  let n = te(e),
    r = [],
    i = null;
  for (let a of n) {
    if (a.start >= t) break;
    if (a.type !== `Whitespace`) {
      switch (a.type) {
        case `ParenOpen`:
          if (i && i.type === `Identifier`) {
            let t = e.slice(i.start, i.end).toUpperCase(),
              n = zs.get(t);
            r.push({ kind: `function`, frame: { name: t, metadata: n, argumentIndex: 0 } });
          } else r.push({ kind: `group` });
          break;
        case `ParenClose`:
          r.pop();
          break;
        case `Comma`:
          for (let e = r.length - 1; e >= 0; --e) {
            let t = r[e];
            if (!(!t || t.kind !== `function`)) {
              t.frame.argumentIndex += 1;
              break;
            }
          }
          break;
        default:
          break;
      }
      i = a;
    }
  }
  for (let e = r.length - 1; e >= 0; --e) {
    let t = r[e];
    if (!(!t || t.kind !== `function`)) return t.frame;
  }
}
function Is(e, t) {
  if (e.length !== 0) return t < e.length ? e[t] : e[e.length - 1];
}
function Ls(e, t) {
  if (!e) return;
  let n = e.trim().toUpperCase();
  if (n) return zs.get(n) ?? t.find((e) => e.name.toUpperCase() === n);
}
function Rs(e, t) {
  return e.some((e) => e.kind === `ref` && e.from <= t && t <= e.to);
}
var zs,
  Bs,
  Vs,
  Hs = e(() => {
    (us(), F(), Os(), (zs = As()), (Bs = /^[A-Za-z0-9_.]+$/), (Vs = /[A-Za-z]/));
  });
function Us(e, t, n) {
  for (let r of n)
    if (r.kind === `ident` && r.from <= t && t <= r.to)
      return { prefix: e.slice(r.from, t), start: r.from };
  let r = Ws(e, t);
  return { prefix: e.slice(r, t), start: r };
}
function Ws(e, t) {
  let n = /^[A-Za-z0-9_.]+$/,
    r = t;
  for (; r > 0;) {
    let t = e[r - 1] ?? ``;
    if (!n.test(t)) break;
    --r;
  }
  return r;
}
var Gs = e(() => {});
function Ks({
  result: e,
  position: t,
  selectedIndex: n,
  onSuggestionHover: r,
  onSuggestionSelect: i,
}) {
  if (e.kind === `functions`) {
    let a = e.suggestions;
    if (a.length === 0) return null;
    let o = Math.min(n, Math.max(a.length - 1, 0));
    return (0, X.jsx)(`div`, {
      className: `border-token-border bg-token-bg-primary absolute z-30 w-[430px] rounded-xl border p-2 shadow-xl`,
      style: { top: t.top, left: t.left },
      children: (0, X.jsx)(`ul`, {
        className: `scrollbar-hide max-h-[420px] space-y-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
        children: a.map((e, t) => {
          let n = t === o,
            a = e.description?.trim();
          return (0, X.jsx)(
            `li`,
            {
              children: (0, X.jsxs)(`button`, {
                type: `button`,
                className: l(
                  `w-full rounded-lg px-3 py-2 text-start`,
                  n ? `bg-token-bg-secondary` : `hover:bg-token-bg-secondary`,
                ),
                onMouseEnter: () => r(t),
                onFocus: () => r(t),
                onMouseDown: (e) => {
                  e.preventDefault();
                },
                onClick: () => i(e),
                children: [
                  (0, X.jsx)(`div`, {
                    className: `text-token-text-primary text-[14px] leading-5`,
                    children: e.name,
                  }),
                  a
                    ? (0, X.jsx)(`div`, {
                        className: l(
                          `grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-200`,
                          n
                            ? `mt-0.5 grid-rows-[1fr] opacity-100`
                            : `mt-0 grid-rows-[0fr] opacity-0`,
                        ),
                        children: (0, X.jsx)(`div`, {
                          className: `overflow-hidden`,
                          children: (0, X.jsx)(`div`, {
                            className: `text-token-text-secondary line-clamp-2 text-[14px] leading-5`,
                            children: a,
                          }),
                        }),
                      })
                    : null,
                ],
              }),
            },
            e.name,
          );
        }),
      }),
    });
  }
  let a = e.function,
    o = a.parameters ?? [];
  return (0, X.jsxs)(`div`, {
    className: `border-token-border bg-token-bg-primary absolute z-30 w-72 rounded-md border p-3 text-xs shadow-lg`,
    style: { top: t.top, left: t.left },
    children: [
      (0, X.jsx)(`div`, {
        className: `text-token-text-primary text-sm font-semibold`,
        children: a.name,
      }),
      (0, X.jsxs)(`div`, {
        className: `text-token-text-secondary mt-1 font-mono text-[11px]`,
        children: [
          (0, X.jsx)(`span`, { className: `text-token-text-primary`, children: a.name }),
          (0, X.jsx)(`span`, { children: `(` }),
          o.map((t, n) => {
            let r = n === e.argumentIndex,
              i = t.type ?? t.name;
            return (0, X.jsxs)(
              `span`,
              {
                className: l(
                  `rounded-sm px-0.5`,
                  r && `bg-green-500/30 font-semibold text-green-900`,
                ),
                children: [i, n < o.length - 1 ? `, ` : null],
              },
              `${a.name}-sig-${t.name}-${n}`,
            );
          }),
          (0, X.jsx)(`span`, {
            className: l(o.length === 0 && `text-token-text-tertiary`),
            children: `)`,
          }),
        ],
      }),
      (0, X.jsx)(`p`, {
        className: `text-token-text-secondary mt-1 mb-2 text-[11px]`,
        children: a.description,
      }),
      a.example
        ? (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary mb-2 font-mono text-[10px]`,
            children: a.example,
          })
        : null,
      (0, X.jsx)(`ul`, {
        className: `space-y-1`,
        children: o.map((t, n) => {
          let r = n === e.argumentIndex,
            i = t.type ?? t.name;
          return (0, X.jsxs)(
            `li`,
            {
              className: l(
                `rounded px-2 py-1`,
                r ? `bg-green-500/20 text-green-900` : `text-token-text-secondary`,
              ),
              children: [
                (0, X.jsx)(`span`, {
                  className: `text-token-text-primary font-semibold`,
                  children: t.name,
                }),
                (0, X.jsx)(`span`, {
                  className: `text-token-text-tertiary ms-1 text-[11px]`,
                  children: i,
                }),
                t.optional
                  ? (0, X.jsx)(`span`, {
                      className: `text-token-text-tertiary text-[10px] uppercase`,
                      children: `optional`,
                    })
                  : null,
                (0, X.jsx)(`div`, { className: `text-[11px]`, children: t.description }),
              ],
            },
            `${a.name}-${t.name}-${n}`,
          );
        }),
      }),
    ],
  });
}
var X,
  qs = e(() => {
    (E(), (X = h()));
  });
function Js({ text: e, tokenized: t, refColors: n }) {
  let r = [],
    i = 0;
  for (let a of t.tokens)
    (a.from > i && r.push((0, Qs.jsx)(`span`, { children: e.slice(i, a.from) }, `gap-${i}`)),
      r.push(
        (0, Qs.jsx)(
          Ys,
          { text: e.slice(a.from, a.to), highlight: Xs(a, t.highlights), refColors: n },
          `tok-${a.from}-${a.to}`,
        ),
      ),
      (i = a.to));
  return (
    i < e.length && r.push((0, Qs.jsx)(`span`, { children: e.slice(i, e.length) }, `trail-${i}`)),
    (0, Qs.jsx)(`pre`, {
      className: `m-0 font-mono text-xs break-words whitespace-pre-wrap`,
      style: { lineHeight: `inherit` },
      children: r,
    })
  );
}
function Ys({ text: e, highlight: t, refColors: n }) {
  if (!t) return (0, Qs.jsx)(`span`, { children: e });
  let { className: r, style: i } = Zs(t, n);
  return (0, Qs.jsx)(`span`, { className: r, style: i, children: e });
}
function Xs(e, t) {
  for (let n of t) if (n.from <= e.from && n.to >= e.to) return n;
  return null;
}
function Zs(e, t) {
  switch (e.kind) {
    case `func`:
      return { className: `text-token-text-accent font-semibold` };
    case `string`:
      return { className: `text-token-text-tertiary` };
    case `number`:
      return { className: `text-token-text-secondary` };
    case `error`:
      return { className: `text-token-text-critical` };
    case `ref`: {
      let n = e.colorKey ?? e.ref?.a1?.toUpperCase(),
        r = n ? t?.[n] : void 0;
      return { className: `font-semibold`, style: r ? { color: r } : void 0 };
    }
    default:
      return { className: `text-token-text-primary` };
  }
}
var Qs,
  $s = e(() => {
    (n(), (Qs = h()));
  });
function ec(e, t, n, r, i, a) {
  let o = t ?? { start: r.start, prefix: `` },
    s = n.slice(0, o.start),
    c = n.slice(r.end);
  (i(`formula`, `${s}${`${e.name}()`}${c}`, o.start + e.name.length + 1), a());
}
var tc = e(() => {});
function nc(e, t) {
  if (typeof window > `u` || typeof document > `u`) return null;
  let n = document.createElement(`div`),
    r = window.getComputedStyle(e),
    i =
      `boxSizing.width.height.overflowX.overflowY.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.tabSize.wordBreak`.split(
        `.`,
      );
  ((n.style.position = `absolute`),
    (n.style.visibility = `hidden`),
    (n.style.whiteSpace = `pre-wrap`),
    (n.style.wordWrap = `break-word`),
    (n.style.top = `${e.scrollTop}px`),
    (n.style.left = `${e.scrollLeft}px`));
  let a = n.style,
    o = r;
  for (let e of i) a[e] = o[e];
  ((n.textContent = e.value.slice(0, t)),
    e.selectionEnd === e.value.length && (n.textContent += `​`),
    document.body.appendChild(n));
  let s = document.createElement(`span`);
  ((s.textContent = e.value.slice(t) || `​`), n.appendChild(s));
  let { offsetTop: c, offsetLeft: l, offsetHeight: u } = s;
  document.body.removeChild(n);
  let d = e.getBoundingClientRect();
  return { top: d.top + c - e.scrollTop, left: d.left + l - e.scrollLeft, height: u };
}
var rc = e(() => {
    n();
  }),
  Z,
  ic,
  ac,
  oc = e(() => {
    (Hs(),
      Os(),
      E(),
      (Z = t(n())),
      Io(),
      Gs(),
      qs(),
      $s(),
      tc(),
      rc(),
      (ic = h()),
      (ac = (0, Z.forwardRef)(function (
        {
          value: e,
          onChange: t,
          onSubmit: n,
          onCancel: r,
          onFocus: i,
          onBlur: a,
          readOnly: o = !1,
          refColors: s,
          className: c,
          allowShiftEnterNewline: u = !0,
          inputId: d,
          inputLabel: f,
          inputTestId: p,
        },
        m,
      ) {
        let h = e.kind === `formula` ? e.text : Ao(e.runs),
          [g, _] = (0, Z.useState)(e.kind),
          [v, y] = (0, Z.useState)(h),
          [b, x] = (0, Z.useState)({ start: h.length, end: h.length }),
          [S, C] = (0, Z.useState)(!1),
          [w, T] = (0, Z.useState)(0),
          E = (0, Z.useRef)(null),
          D = (0, Z.useRef)(null),
          [O, k] = (0, Z.useState)(0),
          A = (0, Z.useRef)(e),
          ee = (0, Z.useRef)(t),
          j = (0, Z.useMemo)(() => (e.kind === `formula` ? e.text : Ao(e.runs)), [e]),
          M = S ? g : e.kind,
          N = S ? v : j;
        ((0, Z.useEffect)(() => {
          A.current = e;
        }, [e]),
          (0, Z.useEffect)(() => {
            ee.current = t;
          }, [t]));
        let te = (0, Z.useCallback)((e, t) => {
            let n = e === `formula` ? Do(t) : Oo(t);
            ((A.current = n), ee.current(n));
          }, []),
          P = (0, Z.useCallback)(
            (e, t, n) => {
              let r = e ?? (t.trimStart().startsWith(`=`) ? `formula` : `text`);
              (_(r),
                y(t),
                te(r, t),
                typeof n == `number` &&
                  requestAnimationFrame(() => {
                    (E.current?.setSelectionRange(n, n), x({ start: n, end: n }));
                  }));
            },
            [te],
          );
        (0, Z.useImperativeHandle)(
          m,
          () => ({
            focus: () => E.current?.focus(),
            setValue: (e) => {
              let t = e.kind === `formula` ? e.text : Ao(e.runs);
              (y(t), _(e.kind), (A.current = e));
            },
            getValue: () => A.current,
            insertReference: (e) => {
              let t = E.current;
              if (!t) return;
              let { selectionStart: n = 0, selectionEnd: r = 0 } = t,
                i = `${v.slice(0, n)}${e}${v.slice(r)}`;
              P(`formula`, i, n + e.length);
            },
            getCaretClientRect: () => {
              let e = E.current;
              if (!e) return null;
              let t = nc(e, e.selectionStart ?? 0);
              return t
                ? new DOMRect(
                    t.left,
                    t.top,
                    1,
                    t.height ?? (parseFloat(getComputedStyle(e).lineHeight) || 16),
                  )
                : null;
            },
          }),
          [P, v],
        );
        let F = (0, Z.useCallback)(
            (e) => {
              let t = e.target.value,
                n = t.trimStart(),
                r =
                  (n.startsWith(`=`) || g === `formula`) && n.startsWith(`=`) ? `formula` : `text`;
              (_(r), y(t), te(r, t), T(0));
            },
            [te, g],
          ),
          ne = (0, Z.useCallback)(() => {
            if (!S) return;
            let e = E.current;
            e && x({ start: e.selectionStart ?? 0, end: e.selectionEnd ?? 0 });
          }, [S]),
          re = (0, Z.useCallback)(() => {
            let t = j;
            (_(e.kind), y(t), x({ start: t.length, end: t.length }), C(!0), i?.());
          }, [j, i, e.kind]),
          I = (0, Z.useCallback)(() => {
            (C(!1), a?.());
          }, [a]),
          L = (0, Z.useCallback)(() => {
            let e = g === `formula` ? Do(v) : Oo(v);
            ((A.current = e), n?.(e), E.current?.blur());
          }, [v, g, n]),
          R = (0, Z.useCallback)(() => {
            r?.();
          }, [r]),
          ie = (0, Z.useMemo)(() => (M === `formula` ? ds(N) : null), [M, N]),
          ae = (0, Z.useMemo)(
            () => (g === `formula` ? Us(v, b.start, ie?.tokens ?? []) : null),
            [v, g, b.start, ie?.tokens],
          ),
          z = (0, Z.useMemo)(
            () => (g === `formula` ? ks({ formula: v, caret: b.start }) : null),
            [v, g, b.start],
          ),
          oe = z?.kind === `functions` ? z.suggestions.length : 0,
          se = (ae?.prefix?.trim().length ?? 0) >= 1,
          B = !o && g === `formula` && S && z?.kind === `functions` && se && oe > 0,
          ce = !o && g === `formula` && S && z?.kind === `parameters`,
          V = B ? Math.min(w, Math.max(oe - 1, 0)) : 0;
        (0, Z.useEffect)(() => {
          let e = D.current;
          e && k(e.offsetHeight + 4);
        }, [S, o, M, N]);
        let le = (0, Z.useCallback)(
            (e) => {
              if ((e.stopPropagation(), !o)) {
                if (B && z?.kind === `functions`) {
                  let t = z.suggestions,
                    n = t.length;
                  if (n > 0) {
                    if (e.key === `ArrowDown`) {
                      (e.preventDefault(), T((e) => (e + 1) % n));
                      return;
                    }
                    if (e.key === `ArrowUp`) {
                      (e.preventDefault(), T((e) => (e - 1 + n) % n));
                      return;
                    }
                    if (e.key === `Enter`) {
                      e.preventDefault();
                      let r = t[Math.min(V, n - 1)];
                      r && ec(r, ae, v, b, P, () => T(0));
                      return;
                    }
                  }
                }
                if (e.key === `Enter` && !e.shiftKey) {
                  (e.preventDefault(), L());
                  return;
                }
                (e.key === `Enter` && e.shiftKey && u && g === `text`) ||
                  (e.key === `Escape` && (e.preventDefault(), R()));
              }
            },
            [V, u, P, z, v, R, L, ae, g, o, b, B],
          ),
          H = M === `formula`,
          ue =
            M === `formula` && ie
              ? (0, ic.jsx)(Js, { text: N, tokenized: ie, refColors: s })
              : null,
          de = () => ({ left: 0, top: O }),
          fe = null;
        return (
          B && z?.kind === `functions`
            ? (fe = (0, ic.jsx)(Ks, {
                result: z,
                position: de(),
                selectedIndex: V,
                onSuggestionHover: (e) => T(e),
                onSuggestionSelect: (e) => ec(e, ae, v, b, P, () => T(0)),
              }))
            : ce &&
              z?.kind === `parameters` &&
              (fe = (0, ic.jsx)(Ks, {
                result: z,
                position: de(),
                selectedIndex: 0,
                onSuggestionHover: () => {},
                onSuggestionSelect: () => {},
              })),
          (0, ic.jsxs)(`div`, {
            ref: D,
            className: l(
              `border-token-border-heavy relative flex min-h-[30px] items-center rounded border`,
              `bg-token-bg-primary text-xs`,
              c,
            ),
            onKeyDown: (e) => {
              e.stopPropagation();
            },
            children: [
              (0, ic.jsx)(`textarea`, {
                ref: E,
                id: d,
                "aria-label": f,
                "data-testid": p,
                value: N,
                readOnly: o,
                spellCheck: !1,
                className: l(
                  `peer block w-full resize-none overflow-hidden border-0 bg-transparent text-xs outline-none`,
                  `focus:ring-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none`,
                  `px-1.5 py-0`,
                  M === `formula` ? `font-mono` : `font-sans`,
                  H ? `caret-token-text-primary text-transparent` : `text-token-text-primary`,
                ),
                rows: 1,
                style: {
                  height: 26,
                  lineHeight: `26px`,
                  color: H ? `transparent` : void 0,
                  boxShadow: `none`,
                  opacity: 1,
                  outline: `none`,
                },
                onChange: F,
                onSelect: ne,
                onFocus: re,
                onBlur: I,
                onKeyDown: le,
              }),
              (0, ic.jsx)(`div`, {
                className: l(
                  `pointer-events-none absolute inset-x-1.5 top-1/2 h-[26px] -translate-y-1/2 overflow-hidden text-xs leading-[26px]`,
                  `text-token-text-primary font-mono`,
                  M === `formula` ? `opacity-100` : `opacity-0`,
                ),
                style: { borderRadius: `inherit` },
                children: ue,
              }),
              fe,
            ],
          })
        );
      })));
  });
function sc(e) {
  let t = e.trimStart();
  return t.startsWith(`=`) ? Do(t) : Oo(e);
}
var cc = e(() => {
  Io();
});
function lc({
  controller: e,
  snapshot: t,
  onInteractionAttempt: n,
  onFxFocus: r,
  onFxBlur: i,
  refColors: a,
  isEditing: o = !0,
  showZoomSelect: s = !0,
}) {
  let c = (0, uc.useRef)(null),
    l = (0, uc.useRef)(!1),
    u = e.getSelectionSummarySource?.() ?? wa,
    d = (0, uc.useSyncExternalStore)(u.subscribe, u.getSnapshot, u.getSnapshot),
    f = (0, uc.useMemo)(
      () =>
        d.isDragging && (d.rows > 1 || d.cols > 1) ? `${d.rows}R x ${d.cols}C` : t.selectedAddress,
      [d, t.selectedAddress],
    ),
    p = (0, uc.useMemo)(() => sc(t.formulaInput), [t.formulaInput]);
  return (0, dc.jsxs)(`div`, {
    "data-testid": `popcorn-formula-bar`,
    className: `bg-token-bg-primary border-token-border-light flex h-10 items-center gap-2 border-b px-3 sm:px-4`,
    children: [
      (0, dc.jsx)(`div`, {
        className: `text-token-text-secondary flex w-[64px] items-center justify-start rounded-md py-1 ps-1 text-xs font-medium`,
        children: (0, dc.jsx)(`span`, { className: `block truncate`, children: f }),
      }),
      (0, dc.jsx)(`div`, { className: `bg-token-border-light h-8 w-px shrink-0` }),
      (0, dc.jsx)(`span`, {
        className: `inline-flex size-8 shrink-0`,
        onPointerDown: (e) => {
          e.button === 0 && n?.(`click-formula-bar`);
        },
        children: (0, dc.jsx)(`button`, {
          type: `button`,
          className: `text-token-text-secondary hover:bg-token-bg-primary hover:text-token-text-primary inline-flex size-8 items-center justify-center rounded-md disabled:pointer-events-none disabled:opacity-50`,
          "aria-label": `Insert function`,
          "data-testid": `popcorn-formula-picker`,
          disabled: !o,
          onClick: () => {
            c.current?.focus();
          },
          children: (0, dc.jsx)(we, { className: `size-4` }),
        }),
      }),
      (0, dc.jsx)(`div`, {
        className: `min-w-0 flex-1`,
        onPointerDown: (e) => {
          e.button === 0 && n?.(`click-formula-bar`);
        },
        children: (0, dc.jsx)(ac, {
          ref: c,
          inputId: `popcorn-formula-bar`,
          inputLabel: `Formula bar`,
          inputTestId: `popcorn-formula-input`,
          value: p,
          onChange: (t) => {
            o && e.updateFormulaInput(Lo(t));
          },
          onSubmit: (t) => {
            if (!o) return;
            let n = Lo(t);
            (e.updateFormulaInput(n), (l.current = !0), e.commitFormulaInput(n));
          },
          onFocus: o ? r : void 0,
          onBlur: () => {
            if (l.current) {
              ((l.current = !1), i?.());
              return;
            }
            (o && e.commitFormulaInput(), i?.());
          },
          readOnly: !o,
          refColors: a,
          allowShiftEnterNewline: !1,
          className: `rounded-md border-0 bg-transparent shadow-none`,
        }),
      }),
      s
        ? (0, dc.jsxs)(dc.Fragment, {
            children: [
              (0, dc.jsx)(`div`, { className: `bg-token-border-light mx-2 h-8 w-px shrink-0` }),
              (0, dc.jsx)(pe, {
                zoom: t.zoom,
                onZoomChange: (t) => {
                  e.setZoom(t);
                },
              }),
            ],
          })
        : null,
    ],
  });
}
var uc,
  dc,
  fc = e(() => {
    ((uc = t(n())), Ta(), Ro(), oc(), cc(), je(), Ne(), (dc = h()));
  });
function pc({
  sheetName: e,
  tabClassName: t,
  tabStyle: n,
  isActive: r,
  showsAppShellTabBackground: i,
  onClick: a,
  onDoubleClick: o,
  buttonRef: s,
  dragAttributes: c,
  dragListeners: u,
  isDragging: d = !1,
}) {
  return (0, _c.jsxs)(`button`, {
    ref: s ?? void 0,
    type: `button`,
    onClick: a,
    onDoubleClick: o,
    className: t,
    style: n,
    "data-testid": `popcorn-sheet-tab-${e}`,
    "data-dragging": d ? `true` : `false`,
    ...c,
    ...u,
    children: [
      i
        ? (0, _c.jsx)(`span`, {
            "aria-hidden": `true`,
            className: l(
              `pointer-events-none absolute inset-0 z-0 rounded-md`,
              `group-hover/tab:bg-[var(--app-shell-tab-background)]`,
              (r || d) && `bg-[var(--app-shell-tab-background)]`,
            ),
          })
        : null,
      (0, _c.jsx)(`span`, { className: `relative z-10 block min-w-0 truncate`, children: e }),
    ],
  });
}
function mc({
  sheetName: e,
  index: t,
  isActive: n,
  tabClassName: r,
  tabStyle: i,
  showsAppShellTabBackground: a,
  controller: o,
  snapshot: s,
  startRenameSheet: c,
  interactionsDisabled: l,
}) {
  let {
      attributes: u,
      listeners: d,
      setNodeRef: f,
      transform: p,
      transition: m,
      isDragging: h,
    } = Yt({ id: e, disabled: l }),
    g = {
      transform: y.Translate.toString(p),
      transition: h ? void 0 : m,
      opacity: +!h,
      zIndex: h ? 0 : void 0,
      position: `relative`,
      display: `inline-flex`,
    };
  return (0, _c.jsx)(Zt, {
    actions: [
      {
        kind: `item`,
        id: `view`,
        icon: _e,
        label: `View page`,
        disabled: l,
        onSelect: () => {
          l || o.setActiveSheetName(e);
        },
        testId: `popcorn-sheet-view-${t}`,
      },
      {
        kind: `item`,
        id: `rename`,
        icon: Be,
        label: `Rename`,
        disabled: l,
        onSelect: () => {
          c(t);
        },
        testId: `popcorn-sheet-rename-${t}`,
      },
      { kind: `separator`, id: `sheet-actions-separator` },
      {
        kind: `item`,
        id: `delete`,
        icon: Se,
        label: `Delete`,
        color: `danger`,
        disabled: l || s.sheetNames.length <= 1,
        onSelect: () => {
          o.deleteSheet(t);
        },
        testId: `popcorn-sheet-delete-${t}`,
      },
    ],
    trigger: (0, _c.jsx)(`div`, {
      ref: f,
      style: g,
      children: (0, _c.jsx)(pc, {
        sheetName: e,
        tabClassName: r,
        tabStyle: i,
        isActive: n,
        showsAppShellTabBackground: a,
        onClick: () => {
          l || o.setActiveSheetName(e);
        },
        onDoubleClick: () => {
          l || c(t);
        },
        dragAttributes: l ? void 0 : u,
        dragListeners: l ? void 0 : d,
        isDragging: h,
      }),
    }),
  });
}
function hc({
  controller: e,
  snapshot: t,
  accentFill: n,
  accentStroke: i,
  variant: o = `inline`,
  density: s = `regular`,
  addButtonPosition: c = `end`,
  isEditing: d = !0,
  interactionsDisabled: f = !1,
}) {
  let [m, h] = (0, gc.useState)(null),
    [g, _] = (0, gc.useState)(``),
    [v, y] = (0, gc.useState)(null),
    b = (0, gc.useRef)(null),
    x = (0, gc.useMemo)(
      () => t.sheetNames.indexOf(t.activeSheetName),
      [t.activeSheetName, t.sheetNames],
    ),
    C = w(p(a, { activationConstraint: { distance: 4 } })),
    T = o === `row`,
    E = s === `compact` || T,
    D = n != null && i != null ? { backgroundColor: n, color: i } : void 0,
    O = D == null,
    k = `group/tab relative flex h-7 max-w-39 shrink-0 items-center overflow-hidden rounded-lg bg-token-main-surface-primary px-2 py-1 text-sm font-normal touch-none`;
  if (!O) {
    let e = `inline-flex h-[30px] py-1.5`;
    (T ? (e = `flex h-6`) : E && (e = `inline-flex h-6`),
      (k = l(
        `max-w-[200px] shrink-0 items-center gap-1 overflow-hidden rounded-lg border border-transparent px-3 text-sm font-normal transition-colors touch-none`,
        e,
      )));
  }
  (0, gc.useEffect)(() => {
    m != null && (b.current?.focus(), b.current?.select());
  }, [m]);
  function A() {
    (h(null), _(``));
  }
  function ee() {
    if (f) {
      A();
      return;
    }
    if (m == null) return;
    let n = t.sheetNames[m];
    if (!n) {
      A();
      return;
    }
    let r = g.trim(),
      i = r.length > 0 ? r : n;
    (e.renameSheet(m, i), A());
  }
  function j(e) {
    if (f) return;
    let n = t.sheetNames[e];
    n && (h(e), _(n));
  }
  function M(n) {
    if ((y(null), f)) return;
    let r = typeof n.active.id == `string` ? n.active.id : null,
      i = typeof n.over?.id == `string` ? n.over.id : null;
    if (!r || !i || r === i) return;
    let a = t.sheetNames.indexOf(r),
      o = t.sheetNames.indexOf(i);
    a < 0 || o < 0 || a === o || e.moveSheet(a, o);
  }
  function N(e) {
    f || y(typeof e.active.id == `string` ? e.active.id : null);
  }
  function te() {
    y(null);
  }
  let P = d
    ? (0, _c.jsx)(`button`, {
        type: `button`,
        disabled: f,
        onClick: () => {
          f || e.addSheet();
        },
        className: O
          ? `text-token-text-secondary hover:bg-[var(--app-shell-tab-background)] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md`
          : l(
              `text-token-text-tertiary hover:text-token-text-primary hover:bg-token-bg-tertiary inline-flex shrink-0 items-center justify-center rounded-md`,
              E ? `size-6` : `h-[30px] w-[30px]`,
            ),
        style: O ? vc : void 0,
        "aria-label": `Add sheet`,
        "data-testid": `popcorn-add-sheet`,
        children: (0, _c.jsx)(ke, { className: `size-4` }),
      })
    : null;
  function F(e) {
    return O
      ? l(k, e ? `text-token-text-primary` : `text-token-text-secondary`)
      : l(
          k,
          e
            ? `bg-token-interactive-bg-accent-muted-context text-token-interactive-label-accent-default hover:bg-token-interactive-bg-accent-muted-hover`
            : `text-token-text-tertiary hover:bg-token-interactive-bg-secondary-hover hover:text-token-text-primary`,
        );
  }
  function ne(e) {
    return O ? vc : e ? D : void 0;
  }
  function re(e, t, n) {
    return (0, _c.jsxs)(
      `div`,
      {
        className: l(n, `cursor-text`),
        style: ne(t === x),
        children: [
          O
            ? (0, _c.jsx)(`span`, {
                "aria-hidden": `true`,
                className: l(
                  `pointer-events-none absolute inset-0 z-0 rounded-md`,
                  `group-hover/tab:bg-[var(--app-shell-tab-background)]`,
                  t === x && `bg-[var(--app-shell-tab-background)]`,
                ),
              })
            : null,
          (0, _c.jsx)(`input`, {
            ref: b,
            value: g,
            "aria-label": `Rename sheet`,
            onChange: (e) => _(e.target.value),
            onBlur: ee,
            onKeyDown: (e) => {
              if (e.key === `Enter`) {
                (e.preventDefault(), ee());
                return;
              }
              e.key === `Escape` && (e.preventDefault(), A());
            },
            className: `relative z-10 block w-full min-w-0 appearance-none border-0 bg-transparent p-0 text-sm leading-5 font-normal text-inherit shadow-none ring-0 outline-none focus:border-0 focus:shadow-none focus:ring-0 focus:outline-none`,
          }),
        ],
      },
      `${e}-${t}`,
    );
  }
  function I(n, r) {
    let i = r === x,
      a = F(i);
    return m === r
      ? re(n, r, a)
      : (0, _c.jsx)(
          mc,
          {
            sheetName: n,
            index: r,
            isActive: i,
            tabClassName: a,
            tabStyle: ne(i),
            showsAppShellTabBackground: O,
            controller: e,
            snapshot: t,
            startRenameSheet: j,
            interactionsDisabled: f,
          },
          `${n}-${r}`,
        );
  }
  function L(t, n) {
    let r = n === x;
    return (0, _c.jsx)(
      pc,
      {
        sheetName: t,
        onClick: () => {
          f || e.setActiveSheetName(t);
        },
        isActive: r,
        tabClassName: F(r),
        tabStyle: ne(r),
        showsAppShellTabBackground: O,
      },
      `${t}-${n}`,
    );
  }
  return (0, _c.jsxs)(`div`, {
    "data-testid": `popcorn-pages-bar`,
    className: l(
      `flex items-center gap-2`,
      o === `row`
        ? l(
            `bg-token-bg-primary border-token-border-light h-9 border-y`,
            O ? `px-2` : `px-3 sm:px-4`,
          )
        : `min-w-0 flex-1`,
    ),
    children: [
      c === `start` ? P : null,
      (0, _c.jsx)(`div`, {
        "data-testid": `popcorn-pages-scroll`,
        className: `hide-scrollbar min-w-0 flex-1 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
        children: d
          ? (0, _c.jsxs)(r, {
              sensors: C,
              collisionDetection: S,
              modifiers: [gt, ht],
              onDragStart: N,
              onDragCancel: te,
              onDragEnd: M,
              children: [
                (0, _c.jsx)(xt, {
                  items: t.sheetNames,
                  strategy: Jt,
                  children: (0, _c.jsx)(`div`, {
                    className: `flex min-w-max items-center gap-1`,
                    children: t.sheetNames.map((e, t) => I(e, t)),
                  }),
                }),
                (0, _c.jsx)(u, {
                  modifiers: [gt, ht],
                  children: v
                    ? (0, _c.jsx)(pc, {
                        sheetName: v,
                        tabClassName: l(k, `shadow-lg`),
                        tabStyle: ne(!0),
                        isActive: !0,
                        showsAppShellTabBackground: O,
                        isDragging: !0,
                      })
                    : null,
                }),
              ],
            })
          : (0, _c.jsx)(`div`, {
              className: `flex min-w-max items-center gap-1`,
              children: t.sheetNames.map((e, t) => L(e, t)),
            }),
      }),
      c === `end` ? P : null,
    ],
  });
}
var gc,
  _c,
  vc,
  yc = e(() => {
    (d(),
      _t(),
      kt(),
      C(),
      E(),
      (gc = t(n())),
      Xt(),
      Ne(),
      (_c = h()),
      (vc = {
        "--app-shell-tab-background": `color-mix(in srgb, var(--color-token-foreground) 5%, var(--color-token-main-surface-primary))`,
      }));
  });
function bc({
  controller: e,
  snapshot: t,
  accentFill: n,
  accentStroke: r,
  theme: i = `codex`,
  isEditing: a = !0,
  interactionsDisabled: o = !1,
}) {
  return (0, xc.jsx)(`div`, {
    style: i === `codex` ? fe : void 0,
    children: (0, xc.jsx)(hc, {
      controller: e,
      snapshot: t,
      accentFill: n,
      accentStroke: r,
      variant: `row`,
      addButtonPosition: `start`,
      isEditing: a,
      interactionsDisabled: o,
    }),
  });
}
var xc,
  Sc = e(() => {
    (V(), yc(), (xc = h()));
  });
function Cc({
  controller: e,
  snapshot: t,
  title: n,
  actions: r,
  reviewToolControl: i,
  headerTitleContent: a,
  centeredContent: o,
  headerRightContent: s,
  renderHeaderZoomControl: c,
  fileMenuContent: u,
  theme: d,
  onClose: f,
}) {
  let p = d === `codex`,
    m =
      c?.({
        onZoomPercentChange: (t) => {
          e.setZoom(t / 100);
        },
        triggerTestId: `popcorn-zoom-select`,
        zoomPercent: Math.round(t.zoom * 100),
      }) ?? (0, wc.jsx)(pe, { zoom: t.zoom, onZoomChange: (t) => e.setZoom(t) });
  return (0, wc.jsx)(oe, {
    testId: `popcorn-toolbar`,
    title: n,
    headerTitleContent: a,
    centeredContent: o,
    closeLabel: `Close spreadsheet`,
    onClose: f,
    compactTitle: p,
    fileMenuContent: u,
    icon: (0, wc.jsx)(Qt, { kind: `workbook`, children: (0, wc.jsx)(z, { className: `size-4` }) }),
    actions:
      p || r.length > 0 || i || s
        ? (0, wc.jsxs)(Ae, {
            compact: p,
            children: [
              i,
              p ? m : null,
              r.length > 0
                ? (0, wc.jsx)(`div`, {
                    className: `flex items-center gap-1`,
                    children: r.map((t) =>
                      (0, wc.jsx)(
                        `button`,
                        {
                          className: l(
                            Tc,
                            `text-token-text-primary`,
                            t.isActive ? `bg-token-bg-tertiary` : null,
                          ),
                          "data-testid": `popcorn-toolbar-action-${t.id}`,
                          type: `button`,
                          title: t.title,
                          "aria-label": t.ariaLabel ?? t.title ?? t.label,
                          onClick: () => t.onSelect(e),
                          children: t.icon ? (0, wc.jsx)(t.icon, { className: `size-4` }) : t.label,
                        },
                        t.id,
                      ),
                    ),
                  })
                : null,
              s,
            ],
          })
        : null,
  });
}
var wc,
  Tc,
  Ec = e(() => {
    (E(),
      zt(),
      de(),
      je(),
      Ne(),
      (wc = h()),
      (Tc = `text-token-text-primary hover:bg-token-bg-tertiary inline-flex size-8 items-center justify-center rounded-md`));
  });
function Dc({ title: e }) {
  return (0, Ac.jsx)(`div`, {
    className: `flex h-7 max-w-full items-center rounded-lg border border-default bg-primary-soft-alpha px-1.5`,
    children: (0, Ac.jsx)(`span`, { className: `max-w-52 min-w-0 truncate px-1`, children: e }),
  });
}
function Oc({
  annotationMode: e,
  annotationEnabled: t,
  formatPanelOpen: n,
  trailingContent: r,
  onAddSheet: i,
  onToggleAnnotation: a,
  onToggleFormatPanel: o,
}) {
  return (0, Ac.jsxs)(At, {
    ariaLabel: `Spreadsheet tools`,
    trailingContent: r,
    children: [
      (0, Ac.jsx)(kc, { onAddSheet: i }),
      (0, Ac.jsx)(Dt, {
        expanded: n,
        label: `Format`,
        onClick: o,
        pressed: n,
        testId: `popcorn-workbook-format-button`,
        children: (0, Ac.jsx)(H, { size: `compact` }),
      }),
      (0, Ac.jsx)(Dt, {
        activeLabel: `Annotation`,
        disabled: !t,
        label: `Annotation`,
        onClick: a,
        pressed: e,
        testId: `popcorn-workbook-annotation-button`,
        children: (0, Ac.jsx)(ue, { size: `compact` }),
      }),
    ],
  });
}
function kc({ onAddSheet: e }) {
  return (0, Ac.jsx)(It, {
    ariaLabel: `Insert`,
    primaryItems: jc,
    secondaryLabel: `New sheet`,
    secondaryItems: [
      { id: `blank-sheet`, label: `Blank sheet`, icon: z, onSelect: e },
      { id: `template`, label: `From template`, icon: mn, disabled: !0 },
      { id: `ask-chat`, label: `Ask chat`, icon: Ct, disabled: !0 },
    ],
    testId: `popcorn-workbook-insert-button`,
  });
}
var Ac,
  jc,
  Mc = e(() => {
    (Ne(),
      Pt(),
      Rt(),
      (Ac = h()),
      (jc = [
        { id: `image`, label: `Image`, icon: gn, disabled: !0 },
        { id: `chart`, label: `Chart`, icon: Lt, disabled: !0 },
        { id: `table`, label: `Table`, icon: Le, disabled: !0 },
        { id: `shape`, label: `Shape`, icon: yt, disabled: !0 },
      ]));
  }),
  Nc,
  Pc,
  Fc,
  Ic = e(() => {
    ((Nc = [2, 133, 255]),
      (Pc = `rgba(${Nc[0]}, ${Nc[1]}, ${Nc[2]}, 0.15)`),
      (Fc = `rgba(${Nc[0]}, ${Nc[1]}, ${Nc[2]}, 1)`));
  });
function Lc(e) {
  if (!e) return null;
  let t = e.replace(/\$|\s+/g, ``);
  if (!t) return null;
  let n = /[A-Za-z]/.test(t),
    r = /\d/.test(t);
  return n && r
    ? { kind: `cell`, row: O(t), col: k(t) }
    : n
      ? { kind: `column`, col: k(t) }
      : r
        ? { kind: `row`, row: O(t) }
        : null;
}
var Rc = e(() => {
  A();
});
function zc(e) {
  if (!e) return null;
  let t = (e.includes(`!`) ? e.slice(e.indexOf(`!`) + 1) : e).split(`:`),
    n = Lc(t[0] ?? ``),
    r = Lc(t[1] ?? t[0] ?? ``);
  return !n || !r
    ? null
    : n.kind === `cell` && r.kind === `cell`
      ? {
          r1: Math.min(n.row, r.row),
          r2: Math.max(n.row, r.row),
          c1: Math.min(n.col, r.col),
          c2: Math.max(n.col, r.col),
        }
      : n.kind === `column` && r.kind === `column`
        ? { r1: 0, r2: 1 / 0, c1: Math.min(n.col, r.col), c2: Math.max(n.col, r.col) }
        : n.kind === `row` && r.kind === `row`
          ? { r1: Math.min(n.row, r.row), r2: Math.max(n.row, r.row), c1: 0, c2: 1 / 0 }
          : null;
}
var Bc = e(() => {
  Rc();
});
function Vc({ sheetName: e, resetSelectionAddr: t, resetSheet: n }) {
  let [r, i] = (0, Hc.useState)(!1),
    [a, o] = (0, Hc.useState)([]),
    [s, c] = (0, Hc.useState)({}),
    l = (0, Hc.useMemo)(
      () =>
        a
          .map((e) => {
            let t = zc(e.ref),
              n = s[e.id];
            return !t || !n ? null : { ...t, color: n };
          })
          .filter((e) => e != null),
      [a, s],
    ),
    u = (0, Hc.useCallback)(() => {
      (i(!1), o([]), c({}));
    }, []),
    d = (0, Hc.useCallback)(
      (t) => {
        let n = t.trim();
        if (!n.startsWith(`=`)) {
          (o([]), c({}));
          return;
        }
        try {
          let t = ds(n),
            r = e ? e.trim().toUpperCase() : null,
            i = [],
            a = new Set(),
            s = {};
          for (let e of t.refs) {
            if (!e || a.has(e.id)) continue;
            let t = e.sheet?.toUpperCase();
            if (t && r && t !== r) continue;
            let n = Uc(i.length.toString());
            ((s[e.id] = n), i.push({ id: e.id, ref: e.a1 }), a.add(e.id));
          }
          (o(i), c(s));
        } catch {
          (o([]), c({}));
        }
      },
      [e],
    ),
    f = (0, Hc.useCallback)(
      (e) => {
        (i(!0), d(e));
      },
      [d],
    );
  return (
    (0, Hc.useEffect)(() => {
      (i(!1), o([]), c({}));
    }, [t, n]),
    {
      inputFocused: r,
      beginInputSession: f,
      endInputSession: u,
      updateFormulaReferences: d,
      formulaHighlightRects: l,
      refColors: s,
    }
  );
}
var Hc,
  Uc,
  Wc = e(() => {
    (ie(),
      R(),
      (Hc = t(n())),
      Os(),
      Bc(),
      (Uc = ae()
        .domain(Array.from({ length: 12 }, (e, t) => t.toString()))
        .range(L)));
  });
function Gc() {
  return typeof window > `u` ? null : window;
}
function Kc(e) {
  if (!be()) return () => {};
  let t = Gc();
  if (!t) return () => {};
  let n = {
    controller: e,
    controllerId: `id` in e && typeof e.id == `number` ? e.id : void 0,
    getSnapshot: () => fr(e.getState()),
    exportWorkbookProto: () => Ar(e),
    getCellState: void 0,
    captureState: void 0,
    requestWorkbookProto: () => Ar(e),
    requestCellState: (t, n) => jr(e, t, n),
    captureStateAsync: async () => {
      let n = fr(e.getState());
      return {
        snapshot: n,
        selectedCell:
          n.activeSheetName && n.selectedAddress
            ? await jr(e, n.activeSheetName, n.selectedAddress)
            : null,
        logCount: (t.__POPCORN_LOGS__ ?? []).length,
      };
    },
    getLogs: () => [...(t.__POPCORN_LOGS__ ?? [])],
    clearLogs: () => {
      t.__POPCORN_LOGS__ = [];
    },
  };
  return (
    (t.__POPCORN_DEVTOOLS__ = n),
    () => {
      t.__POPCORN_DEVTOOLS__ === n && delete t.__POPCORN_DEVTOOLS__;
    }
  );
}
var qc = e(() => {
  (Pr(), pr(), Ke());
});
function Jc() {
  let e = I.create(),
    t = e.worksheets.add(`Sheet1`);
  t.getRange(`A1:B4`).values = [
    [`Month`, `Revenue`],
    [`Jan`, 120],
    [`Feb`, 140],
    [`Mar`, 165],
  ];
  let n = t.charts.add(`ColumnClustered`, t.getRange(`A1:B4`), `Auto`);
  return (
    (n.title.text = `Quarterly revenue`),
    n.setPosition(t.getRange(`D2`)),
    (n.width = 360),
    (n.height = 240),
    e.recalculate(),
    e
  );
}
var Yc = e(() => {
  re();
});
function Xc(e, t) {
  return (
    e.length === t.length &&
    e.every((e, n) => {
      let r = t[n];
      return (
        r != null &&
        e.id === r.id &&
        e.url === r.url &&
        e.cssBounds.x === r.cssBounds.x &&
        e.cssBounds.y === r.cssBounds.y &&
        e.cssBounds.width === r.cssBounds.width &&
        e.cssBounds.height === r.cssBounds.height
      );
    })
  );
}
var Zc = e(() => {}),
  Qc = e(() => {});
function $c() {
  return new Worker(
    new URL(
      `` + new URL(`runtime.worker-c35dc56054a0.js`, import.meta.url).href,
      `` + import.meta.url,
    ),
    { type: `module`, name: `popcorn-workbook-worker` },
  );
}
var el = e(() => {
    (Qc(), Bc(), Yc(), Ai(), Ta(), va());
  }),
  tl,
  nl = e(() => {
    tl = {
      meta: { workbookVersion: 0, showFormulas: !1, canUndo: !1, canRedo: !1 },
      navigation: { activeSheetName: `Sheet1`, sheetNames: [`Sheet1`] },
      selection: {
        activeCell: { row: 0, col: 0 },
        selectedAddress: `A1`,
        selectionRect: { r1: 0, c1: 0, r2: 0, c2: 0 },
        selectionRanges: [{ r1: 0, c1: 0, r2: 0, c2: 0 }],
        activeRangeIndex: 0,
        selectAllStage: 0,
        isDraggingSelection: !1,
        fillPreviewRect: null,
      },
      editor: { formulaInput: ``, editorMode: `grid`, textLayoutBlocks: [], textEditState: null },
      viewport: {
        zoom: 1,
        columnWidths: [],
        rowHeights: [],
        rowIndexRemap: null,
        freezePanes: { rowCount: 0, columnCount: 0 },
        resizeGuide: null,
        camera: { x: 0, y: 0, k: 1 },
      },
      overlays: {
        awarenessSelections: [],
        awarenessDrawingSelections: [],
        mergedCells: [],
        sheetTables: [],
        tableFilterOptions: {},
        tableFilters: {},
        tableSorts: {},
        chartSelectionHighlights: [],
        activeDataValidation: null,
        dataValidationTargets: [],
        hyperlinkTargets: [],
        commentThreads: [],
        allCommentThreads: [],
      },
      floating: { selectedFloatingElement: null, chartHoverTargets: [] },
      find: { query: ``, matches: [], total: 0 },
      clipboard: { copyPayload: null, cutPayload: null },
      formatting: {
        sheetName: `Sheet1`,
        rangeAddress: `A1`,
        selectionKind: `cell`,
        bold: !1,
        italic: !1,
        fontSize: 11,
        fontColor: `#000000`,
        fillColor: null,
        horizontalAlignment: `general`,
      },
    };
  });
function rl(e = tl) {
  return new He(e);
}
var il = e(() => {
  (Ce(), nl());
});
function al() {
  if (
    !(
      typeof window < `u` &&
      typeof Worker < `u` &&
      typeof HTMLCanvasElement < `u` &&
      typeof OffscreenCanvas < `u`
    )
  )
    throw Error(`Popcorn workbook viewport requires Worker and OffscreenCanvas support.`);
}
function ol() {
  return $c();
}
function sl(e, t) {
  return e?.width === t?.width && e?.height === t?.height && e?.dpr === t?.dpr;
}
function cl(e) {
  return e ? { ...e } : null;
}
function ll(e) {
  return e ? { ...e } : null;
}
function ul(e, t, n) {
  ((n?.resizeIntrinsicBitmap ?? !0) &&
    ((e.width = Math.max(1, Math.round(t.width * t.dpr))),
    (e.height = Math.max(1, Math.round(t.height * t.dpr)))),
    (e.style.width = `${t.width}px`),
    (e.style.height = `${t.height}px`));
}
function dl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function fl(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (
      !r ||
      !i ||
      r.id !== i.id ||
      r.addr !== i.addr ||
      r.sheetName !== i.sheetName ||
      !dl(r.cssBounds, i.cssBounds)
    )
      return !1;
  }
  return !0;
}
function pl(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (
      !r ||
      !i ||
      r.kind !== i.kind ||
      r.x !== i.x ||
      r.y !== i.y ||
      r.width !== i.width ||
      r.height !== i.height ||
      r.cx !== i.cx ||
      r.cy !== i.cy ||
      r.rOuter !== i.rOuter ||
      r.rInner !== i.rInner ||
      r.startAngle !== i.startAngle ||
      r.endAngle !== i.endAngle ||
      r.seriesName !== i.seriesName ||
      r.category !== i.category ||
      r.value !== i.value ||
      r.color !== i.color ||
      r.anchorX !== i.anchorX ||
      r.anchorY !== i.anchorY ||
      r.elementId !== i.elementId ||
      r.seriesIndex !== i.seriesIndex
    )
      return !1;
  }
  return !0;
}
var ml,
  hl,
  gl = e(() => {
    (me(),
      he(),
      Ta(),
      Yc(),
      Zc(),
      Ue(),
      Ur(),
      el(),
      il(),
      (ml = 1),
      (hl = class {
        id = ml++;
        #e = ve(`workbook-main-controller`);
        #t = rl();
        #n = xa();
        #r = new Set();
        #i = new Set();
        #a = new Set();
        #o = new Set();
        #s;
        #c;
        #l = null;
        #u = null;
        #d = null;
        #f = null;
        #p = null;
        #m = null;
        #h = 1;
        #g = null;
        #_ = null;
        #v = null;
        #y = null;
        #b = null;
        #x = 0;
        #S = 0;
        #C = null;
        #w = [];
        #T;
        #E;
        #D;
        #O = !1;
        #k = !1;
        constructor(e = {}) {
          ((this.#E = e.onImportError), (this.#D = e.onImportReady));
          let t = e.bootstrapSource ? null : (e.workbookProto ?? (e.workbook ?? Jc()).toProto()),
            n = (e.workerFactory ?? ol)();
          ((this.#c = { x: 0, y: 0, k: e.initialZoom ?? 1 }),
            (this.#s = new Ge(
              n,
              (e) => this.#F(e),
              (e) => {
                let t = Error(e);
                if (!this.#k && this.#E) {
                  this.#E(t);
                  return;
                }
                throw t;
              },
            )),
            this.#e.debug(`bootstrap`, {
              controllerId: this.id,
              activeSheetName: e.workbook?.awareness.activeSheetName ?? t?.sheets[0]?.name ?? null,
              sheetNames: t?.sheets.map((e) => e.name),
              initialSelectedAddress: e.initialSelectedAddress,
              initialZoom: e.initialZoom,
            }));
          let r = {
            collectAllCommentThreads: e.collectAllCommentThreads ?? !1,
            externalImageAssets: e.externalImageAssets,
            initialCrdtState: e.initialCrdtState,
            initialSelectedAddress: e.initialSelectedAddress,
            initialZoom: e.initialZoom,
          };
          if (e.bootstrapSource) {
            let t = e.bootstrapSource;
            this.#s.bootstrap(
              { ...r, bootstrapSource: t },
              t.kind === `source-bytes` ? [t.bytes] : void 0,
            );
          } else t && this.#s.bootstrap({ ...r, workbookProto: t });
          this.#T = Br()
            .then(() => {
              let e = se();
              (this.#e.debug(`font-render-deps-ready`, {
                fontCount: e.length,
                fonts: e.map((e) => ({
                  family: e.family,
                  style: e.style,
                  weight: e.weight,
                  format: e.format,
                  src: e.src,
                })),
                fontDebug: We(),
              }),
                e.length !== 0 &&
                  (this.#s.dispatch({ kind: `install-font-faces`, fonts: e }),
                  this.#e.debug(`font-install-dispatched`, { fontCount: e.length })));
            })
            .catch(() => {});
        }
        subscribe(e) {
          return this.#t.subscribe(e);
        }
        getState() {
          return this.#t.getState();
        }
        getSnapshot() {
          return this.getState();
        }
        getSelectionSummarySource() {
          return this.#n;
        }
        dispatch(e) {
          this.#s.dispatch({ kind: `command`, command: e });
        }
        attachViewport(e) {
          return (
            al(),
            this.#T.then(() => {
              if (this.#O) return;
              let t = e.host.getBoundingClientRect(),
                n = window.devicePixelRatio || 1;
              this.attachViewportCanvas(e.canvas, { width: t.width, height: t.height, dpr: n });
            }),
            () => {}
          );
        }
        requestExport(e) {
          return this.#s.request({ kind: `export`, format: e?.format ?? `proto` }).then((e) => {
            if (e.kind !== `export`) throw Error(`Unexpected export response: ${e.kind}`);
            return e.result;
          });
        }
        requestCrdtSnapshot() {
          return this.#s.request({ kind: `crdt-snapshot` }).then((e) => {
            if (e.kind !== `crdt-snapshot`)
              throw Error(`Unexpected CRDT snapshot response: ${e.kind}`);
            return new Uint8Array(e.result);
          });
        }
        flushCrdtUpdates() {
          return this.#s.request({ kind: `flush-crdt-updates` }).then((e) => {
            if (e.kind !== `flush-crdt-updates`)
              throw Error(`Unexpected CRDT flush response: ${e.kind}`);
          });
        }
        loadInitialCrdtState(e) {
          return this.#s.request({ kind: `load-initial-crdt-state`, update: e }).then((e) => {
            if (e.kind !== `load-initial-crdt-state`)
              throw Error(`Unexpected initial CRDT load response: ${e.kind}`);
          });
        }
        applyCrdtUpdate(e) {
          return this.#s.request({ kind: `apply-crdt-update`, update: e }).then((e) => {
            if (e.kind !== `apply-crdt-update`)
              throw Error(`Unexpected CRDT apply response: ${e.kind}`);
          });
        }
        hydrateImageAssets(e) {
          return this.#s.request({ kind: `hydrate-image-assets`, assets: e }).then((e) => {
            if (e.kind !== `hydrate-image-assets`)
              throw Error(`Unexpected image hydration response: ${e.kind}`);
          });
        }
        subscribeCrdtUpdates(e) {
          return (
            this.#i.add(e),
            () => {
              this.#i.delete(e);
            }
          );
        }
        subscribeImageHydrationRequests(e) {
          return (
            this.#o.add(e),
            this.#w.length > 0 && e(this.#w),
            () => {
              this.#o.delete(e);
            }
          );
        }
        subscribeCellClicks(e) {
          return (
            this.#r.add(e),
            () => {
              this.#r.delete(e);
            }
          );
        }
        subscribeHyperlinkClicks(e) {
          return (
            this.#a.add(e),
            () => {
              this.#a.delete(e);
            }
          );
        }
        setPresenceSelections(e, t, n = {}) {
          this.#s.dispatch({
            kind: `set-presence-selections`,
            presenceId: e,
            selections: t,
            presenceKind: n.kind,
          });
        }
        clearPresenceSelections(e, t = {}) {
          this.#s.dispatch({
            kind: `clear-presence-selections`,
            presenceId: e,
            sheetName: t.sheetName,
          });
        }
        replaceFromProto(e) {
          return this.#s.request({ kind: `replace-from-proto`, workbookProto: e }).then((e) => {
            if (e.kind !== `replace-from-proto`)
              throw Error(`Unexpected replace response: ${e.kind}`);
          });
        }
        dispose() {
          this.#O ||
            ((this.#O = !0),
            this.#g?.bitmap.close(),
            (this.#g = null),
            this.#r.clear(),
            this.#i.clear(),
            this.#a.clear(),
            this.#o.clear(),
            this.#s.dispose());
        }
        setZoom(e) {
          this.dispatch({ type: `set-zoom`, zoom: e });
        }
        setSelectedAddress(e) {
          this.dispatch({ type: `set-selected-address`, address: e });
        }
        handleKeyboardEvent(e) {
          return (this.dispatch({ type: `handle-keyboard-event`, event: e }), !0);
        }
        updateFormulaInput(e) {
          if (this.#C) {
            this.#C.formulaInput = e;
            let t = this.#t.getState().editor;
            this.#t.patch({ editor: { ...t, formulaInput: e } });
          }
          this.dispatch({ type: `update-formula-input`, value: e });
        }
        commitFormulaInput(e) {
          this.dispatch({ type: `commit-formula-input`, value: e });
        }
        openCellEditor(e) {
          let t = this.#t.getState().editor,
            n = e ?? t.formulaInput;
          return (
            (this.#C = this.#C
              ? { ...this.#C, formulaInput: n }
              : { formulaInput: n, hasObservedWorkerGridState: t.editorMode !== `editCell` }),
            this.#t.patch({ editor: { ...t, formulaInput: n, editorMode: `editCell` } }),
            this.dispatch({ type: `open-cell-editor`, initialValue: e }),
            !0
          );
        }
        commitCellEdit(e) {
          return (this.dispatch({ type: `commit-cell-edit`, value: e }), !0);
        }
        cancelCellEdit() {
          this.dispatch({ type: `cancel-cell-edit` });
        }
        setActiveSheetName(e) {
          this.dispatch({ type: `set-active-sheet-name`, sheetName: e });
        }
        setSelectionRect(e) {
          this.dispatch({ type: `set-selection-rect`, selectionRect: e });
        }
        setIsDraggingSelection(e) {
          this.dispatch({ type: `set-is-dragging-selection`, isDraggingSelection: e });
        }
        setResizeGuide(e) {
          this.dispatch({ type: `set-resize-guide`, resizeGuide: e });
        }
        setColumnWidth(e, t) {
          this.dispatch({ type: `set-column-width`, index: e, width: t });
        }
        setRowHeight(e, t) {
          this.dispatch({ type: `set-row-height`, index: e, height: t });
        }
        autofitColumn(e) {
          this.dispatch({ type: `autofit-column`, index: e });
        }
        autofitRow(e) {
          this.dispatch({ type: `autofit-row`, index: e });
        }
        moveSheet(e, t) {
          this.dispatch({ type: `move-sheet`, fromIndex: e, toIndex: t });
        }
        renameSheet(e, t) {
          this.dispatch({ type: `rename-sheet`, index: e, nextName: t });
        }
        addSheet(e) {
          this.dispatch({ type: `add-sheet`, sheetName: e });
        }
        deleteSheet(e) {
          this.dispatch({ type: `delete-sheet`, index: e });
        }
        addCommentThread(e, t, n, r) {
          return this.#s
            .request({ kind: `add-comment-thread`, sheetName: e, address: t, body: n, options: r })
            .then((e) => {
              if (e.kind !== `add-comment-thread`)
                throw Error(`Unexpected add comment response: ${e.kind}`);
              return e.threadId;
            });
        }
        replyToCommentThread(e, t, n) {
          return (
            this.dispatch({ type: `reply-comment-thread`, threadId: e, body: t, author: n }), !0
          );
        }
        resolveCommentThread(e, t) {
          return (this.dispatch({ type: `resolve-comment-thread`, threadId: e, author: t }), !0);
        }
        reopenCommentThread(e) {
          return (this.dispatch({ type: `reopen-comment-thread`, threadId: e }), !0);
        }
        deleteCommentThread(e) {
          return (this.dispatch({ type: `delete-comment-thread`, threadId: e }), !0);
        }
        toggleCommentReaction(e, t, n) {
          return (
            this.dispatch({
              type: `toggle-comment-reaction`,
              threadId: e,
              commentId: t,
              reactionType: n,
            }),
            !0
          );
        }
        editThreadComment(e, t, n) {
          return (
            this.dispatch({ type: `edit-thread-comment`, threadId: e, commentId: t, body: n }), !0
          );
        }
        deleteThreadComment(e, t) {
          return (this.dispatch({ type: `delete-thread-comment`, threadId: e, commentId: t }), !0);
        }
        requestFindMatches(e, t) {
          return this.#s
            .request({ kind: `find-matches`, query: e, focusFirstMatch: t?.focusFirstMatch ?? !1 })
            .then((e) => {
              if (e.kind !== `find-matches`) throw Error(`Unexpected find response: ${e.kind}`);
              return e.result;
            });
        }
        requestCellState(e, t) {
          return this.#s.request({ kind: `inspect-cell`, sheetName: e, address: t }).then((e) => {
            if (e.kind !== `inspect-cell`) throw Error(`Unexpected inspect response: ${e.kind}`);
            return e.result;
          });
        }
        requestNavigationTarget(e, t, n) {
          return this.#s
            .request({
              kind: `navigation-target`,
              sheetName: e,
              objectId: t,
              ...(n == null ? {} : { objectKind: n }),
            })
            .then((e) => {
              if (e.kind !== `navigation-target`)
                throw Error(`Unexpected navigation response: ${e.kind}`);
              return e.result;
            });
        }
        requestClipboardPayload(e) {
          return this.#s.request({ kind: `clipboard-payload`, copyKind: e }).then((e) => {
            if (e.kind !== `clipboard-payload`)
              throw Error(`Unexpected clipboard response: ${e.kind}`);
            return e.result;
          });
        }
        requestSelectedFloatingRasterPayload() {
          return this.#s.request({ kind: `selected-floating-raster-payload` }).then((e) => {
            if (e.kind !== `selected-floating-raster-payload`)
              throw Error(`Unexpected floating raster response: ${e.kind}`);
            return e.result;
          });
        }
        pasteClipboardData(e) {
          return (this.dispatch({ type: `paste-clipboard-data`, clipboard: e }), !0);
        }
        pasteRasterClipboardData(e) {
          return (this.dispatch({ type: `paste-raster-clipboard-data`, clipboard: e }), !0);
        }
        recalculate() {
          this.dispatch({ type: `recalculate` });
        }
        runWorksheetEdit(e, t) {
          return (this.dispatch({ type: `run-worksheet-edit`, kind: e, options: t }), !0);
        }
        focusCell(e, t) {
          this.dispatch({ type: `focus-cell`, row: e, col: t });
        }
        collapseSelectionToActiveCell() {
          this.dispatch({ type: `collapse-selection-to-active-cell` });
        }
        setSelectedFloatingElement(e, t) {
          this.dispatch({
            type: `set-selected-floating-element`,
            selectedFloatingElement: e,
            sheetName: t?.sheetName,
          });
        }
        textActivateFloatingShapeText(e) {
          return (this.#s.dispatch({ kind: `text-activate-block-end`, blockId: e }), !0);
        }
        textClearFloatingShapeText() {
          this.#s.dispatch({ kind: `text-clear` });
        }
        textPointerDown(e, t) {
          return (
            this.#s.dispatch({ kind: `text-pointer-down`, point: e, shiftKey: t?.shiftKey }), !0
          );
        }
        textPointerMove(e) {
          return (this.#s.dispatch({ kind: `text-pointer-move`, point: e }), !0);
        }
        textPointerUp() {
          this.#s.dispatch({ kind: `text-pointer-up` });
        }
        textSelectWordAtPoint(e) {
          return (this.#s.dispatch({ kind: `text-select-word-at-point`, point: e }), !0);
        }
        textSelectParagraphAtPoint(e) {
          return (this.#s.dispatch({ kind: `text-select-paragraph-at-point`, point: e }), !0);
        }
        textHandleKeyDown(e) {
          return (this.#s.dispatch({ kind: `text-keydown`, event: e }), !0);
        }
        textHandleBeforeInput(e) {
          return (this.#s.dispatch({ kind: `text-before-input`, event: e }), !0);
        }
        textHandleInput(e) {
          return (this.#s.dispatch({ kind: `text-input`, event: e }), !0);
        }
        textHandleCompositionEnd(e) {
          this.#s.dispatch({ kind: `text-composition-end`, event: e });
        }
        attachViewportCanvas(e, t) {
          al();
          let n = { ...t },
            r = this.#l !== e;
          if (((this.#l = e), (this.#u = e.getContext(`2d`)), !this.#u))
            throw Error(`Workbook viewport canvas 2d context is unavailable.`);
          ((this.#f ??= { ...n }),
            (this.#p ??= { ...n }),
            this.#j(this.#f),
            this.#T.then(() => {
              if (!this.#O) {
                if (r) {
                  if (this.#l !== e) return;
                  this.#s.dispatch({
                    kind: `attach-canvas`,
                    width: n.width,
                    height: n.height,
                    dpr: n.dpr,
                  });
                  return;
                }
                this.resizeViewportCanvas(n);
              }
            }));
        }
        attachViewportOverlayCanvas(e, t) {
          let n = { ...t };
          ((this.#d = e), (this.#f ??= { ...n }), (this.#p ??= { ...n }), ul(e, n));
        }
        setEditingEnabled(e) {
          this.#s.dispatch({ kind: `set-editing-enabled`, isEditing: e });
        }
        setCollectAllCommentThreads(e) {
          this.#s.dispatch({
            kind: `set-collect-all-comment-threads`,
            collectAllCommentThreads: e,
          });
        }
        resizeViewportCanvas(e) {
          let t = { ...e };
          ((this.#p = t), this.#j(t), this.#A());
        }
        #A() {
          let e = this.#p;
          if (!e || this.#m || (sl(this.#g?.metrics ?? null, e) && this.#m == null)) return;
          let t = this.#h++;
          ((this.#m = { resizeId: t, metrics: { ...e }, requestedAtMs: performance.now() }),
            this.#s.dispatch({
              kind: `resize-viewport`,
              width: e.width,
              height: e.height,
              dpr: e.dpr,
              resizeId: t,
            }));
        }
        setViewportCamera(e) {
          ((this.#c = { ...e }), this.#s.dispatch({ kind: `set-camera`, camera: e }));
        }
        revealFloatingElementBounds(e) {
          let t = this.#f ?? this.#p;
          if (!t) return;
          let n = this.#c,
            r = e.x * n.k + n.x,
            i = e.y * n.k + n.y,
            a = (e.x + e.width) * n.k + n.x,
            o = (e.y + e.height) * n.k + n.y;
          (r >= 24 && i >= 24 && a <= t.width - 24 && o <= t.height - 24) ||
            this.setViewportCamera({
              ...n,
              x: -Math.max(0, e.x * n.k - 24),
              y: -Math.max(0, e.y * n.k - 24),
            });
        }
        handleViewportPointerDown(e) {
          this.#s.dispatch({ kind: `viewport-pointer-down`, ...e });
        }
        handleViewportPointerMove(e) {
          this.#s.dispatch({ kind: `viewport-pointer-move`, ...e });
        }
        handleViewportPointerUp(e) {
          this.#s.dispatch({ kind: `viewport-pointer-up`, ...e });
        }
        cancelViewportPointer() {
          this.#s.dispatch({ kind: `viewport-pointer-cancel` });
        }
        getViewportCamera() {
          return { ...this.#c };
        }
        setViewportAccentStroke(e) {}
        requestViewportRedraw() {
          this.#s.dispatch({ kind: `redraw` });
        }
        getResizeDebugState() {
          return {
            committedMetrics: cl(this.#f),
            requestedMetrics: cl(this.#p),
            inFlightResize: this.#m
              ? {
                  resizeId: this.#m.resizeId,
                  metrics: { ...this.#m.metrics },
                  requestedAtMs: this.#m.requestedAtMs,
                }
              : null,
            lastPresentedScaleMismatch: ll(this.#_),
            maxPresentedScaleMismatch: ll(this.#v),
            lastResizeFrameLatencyMs: this.#y,
            maxResizeFrameLatencyMs: this.#b,
            droppedStaleResizeFrameCount: this.#x,
            presentedResizeCount: this.#S,
          };
        }
        resetResizeDebugState() {
          ((this.#_ = null),
            (this.#v = null),
            (this.#y = null),
            (this.#b = null),
            (this.#x = 0),
            (this.#S = 0));
        }
        #j(e) {
          ((this.#f = { ...e }), this.#l && (ul(this.#l, e), this.#N()), this.#d && ul(this.#d, e));
        }
        destroy() {
          this.dispose();
        }
        #M(e) {
          let t = this.#f;
          if (((this.#S += 1), !t)) {
            this.#_ = null;
            return;
          }
          let n = {
            scaleX: t.width / Math.max(e.width, 1),
            scaleY: t.height / Math.max(e.height, 1),
            deltaWidth: t.width - e.width,
            deltaHeight: t.height - e.height,
          };
          ((this.#_ = n),
            Math.max(Math.abs(n.scaleX - 1), Math.abs(n.scaleY - 1)) >
              (this.#v
                ? Math.max(Math.abs(this.#v.scaleX - 1), Math.abs(this.#v.scaleY - 1))
                : -1) && (this.#v = n));
        }
        #N() {
          let e = this.#l,
            t = this.#u,
            n = this.#g,
            r = this.#f;
          !e ||
            !t ||
            !n ||
            !r ||
            (t.setTransform(1, 0, 0, 1, 0, 0),
            t.clearRect(0, 0, e.width, e.height),
            t.setTransform(r.dpr, 0, 0, r.dpr, 0, 0),
            t.drawImage(n.bitmap, 0, 0, n.metrics.width, n.metrics.height));
        }
        #P(e) {
          let t = { width: e.width, height: e.height, dpr: e.dpr },
            n = e.resizeId != null,
            r = n && this.#m?.resizeId === e.resizeId,
            i = !n || r,
            a = !this.#p || sl(this.#p, t);
          if (!i || !a) {
            (n && (this.#x += 1), e.bitmap.close(), r && ((this.#m = null), this.#A()));
            return;
          }
          if (
            (this.#g?.bitmap.close(),
            (this.#g = { bitmap: e.bitmap, metrics: t }),
            this.#M(t),
            r && this.#m)
          ) {
            let e = performance.now() - this.#m.requestedAtMs;
            ((this.#y = e),
              (this.#b = this.#b == null ? e : Math.max(this.#b, e)),
              (this.#m = null));
          }
          (this.#N(), r && this.#A());
        }
        #F(e) {
          this.#e.debug(`event`, {
            controllerId: this.id,
            kind: e.kind,
            state:
              e.kind === `navigation`
                ? e.state
                : e.kind === `selection`
                  ? { selectedAddress: e.state.selectedAddress, activeCell: e.state.activeCell }
                  : e.kind === `meta`
                    ? e.state
                    : void 0,
          });
          let t = this.#t.getState();
          switch (e.kind) {
            case `bootstrap-status`:
              e.status === `ready` && !this.#k && ((this.#k = !0), this.#D?.());
              return;
            case `crdt-update`: {
              let t = new Uint8Array(e.update);
              for (let e of this.#i) e(t);
              return;
            }
            case `cell-click`:
              for (let t of this.#r) t(e.click);
              return;
            case `hyperlink-click`:
              for (let t of this.#a) t(e.hyperlink);
              return;
            case `image-hydration-requests`:
              this.#w = e.requests;
              for (let t of this.#o) t(e.requests);
              return;
            case `meta`:
              this.#t.patch({ meta: e.state });
              return;
            case `navigation`:
              this.#t.patch({ navigation: e.state });
              return;
            case `selection`:
              (this.#t.patch({ selection: e.state }),
                this.#n.publish(Sa(e.state.selectionRect, e.state.isDraggingSelection)));
              return;
            case `editor`:
              if (this.#C) {
                if (e.state.editorMode === `grid`) {
                  this.#C.hasObservedWorkerGridState = !0;
                  return;
                }
                if (
                  e.state.editorMode !== `editCell` ||
                  !this.#C.hasObservedWorkerGridState ||
                  e.state.formulaInput !== this.#C.formulaInput
                )
                  return;
                this.#C = null;
              }
              this.#t.patch({ editor: e.state });
              return;
            case `viewport`:
              ((this.#c = { ...e.state.camera }),
                this.#t.patch({ viewport: { ...e.state, camera: { ...this.#c } } }));
              return;
            case `viewport-frame`:
              this.#P(e);
              return;
            case `overlays`:
              this.#t.patch({
                overlays: {
                  ...e.state,
                  allCommentThreads:
                    e.state.allCommentThreads ?? this.#t.getState().overlays.allCommentThreads,
                },
              });
              return;
            case `floating`:
              this.#t.patch({ floating: e.state });
              return;
            case `overlay-anchors`:
              if (
                fl(
                  this.#t.getState().overlays.dataValidationTargets,
                  e.state.dataValidationTargets,
                ) &&
                Xc(
                  this.#t.getState().overlays.hyperlinkTargets ?? [],
                  e.state.hyperlinkTargets ?? [],
                )
              )
                return;
              this.#t.patch({
                overlays: {
                  ...this.#t.getState().overlays,
                  dataValidationTargets: e.state.dataValidationTargets.map((e) => ({
                    ...e,
                    cssBounds: { ...e.cssBounds },
                  })),
                  hyperlinkTargets: e.state.hyperlinkTargets?.map((e) => ({
                    ...e,
                    cssBounds: { ...e.cssBounds },
                  })),
                },
              });
              return;
            case `hover`:
              if (pl(this.#t.getState().floating.chartHoverTargets, e.state.chartHoverTargets))
                return;
              this.#t.patch({
                floating: {
                  ...this.#t.getState().floating,
                  chartHoverTargets: e.state.chartHoverTargets.map((e) => ({ ...e })),
                },
              });
              return;
            case `find`:
              this.#t.patch({ find: e.state });
              return;
            case `clipboard`:
              this.#t.patch({ clipboard: e.state });
              return;
            case `formatting`:
              this.#t.patch({ formatting: e.state });
              return;
            default: {
              let n = e;
              throw (this.#t.replace(t), Error(`Unhandled workbook state event: ${n}`));
            }
          }
        }
      }));
  });
function _l({
  controller: e,
  plugins: t,
  title: n,
  fileMenuContent: r,
  headerTitleContent: i,
  headerCenterContent: a,
  headerRightContent: o,
  renderHeaderZoomControl: s,
  onClose: c,
  onInteractionAttempt: l,
  onHyperlinkClick: u,
  onSelectedCommentThreadChange: d,
  accentFill: f,
  accentStroke: p,
  theme: m,
  isEditing: h,
  reviewTools: g,
  bottomScrollReservePx: _,
  bottomSafeAreaPx: v,
  annotationHeaderButtonEnabled: y = !0,
  manualEditUiEnabled: b = !1,
  annotationsEnabled: x = !0,
  drawingAnnotationsEnabled: S = !0,
  artifactSearchEnabled: C = !0,
  commentThreadsEnabled: w = !0,
}) {
  let T = gr(),
    [E, D] = (0, yl.useState)(null),
    { toolbarActions: O, panels: k, viewportOverlays: A } = (0, yl.useMemo)(() => xr(t), [t]),
    ee = (0, yl.useMemo)(() => k.filter((e) => e.placement === `sidebar`), [k]),
    j = (0, yl.useMemo)(() => k.filter((e) => e.placement === `floating`), [k]),
    [M, N] = (0, yl.useState)(() => Object.fromEntries(j.map((e) => [e.id, e.defaultOpen ?? !1]))),
    [te, P] = (0, yl.useState)(!1),
    [F, ne] = (0, yl.useState)(0),
    re = x && g?.annotation != null && g.annotation.enabled !== !1,
    I = y && re,
    [L, R] = (0, yl.useState)(!1),
    [ie, ae] = (0, yl.useState)(!1),
    z = S && g?.drawing?.enabled !== !1,
    [oe, se] = (0, yl.useState)(!1),
    [B, ce] = (0, yl.useState)(0),
    V = b && h,
    le = Math.max(0, v ?? 0),
    H = Math.max(0, le - bl),
    ue = le > 0 ? 0 : _,
    {
      beginInputSession: de,
      endInputSession: fe,
      formulaHighlightRects: pe,
      inputFocused: me,
      refColors: he,
      updateFormulaReferences: ge,
    } = Vc({
      sheetName: T.activeSheetName,
      resetSelectionAddr: T.selectedAddress,
      resetSheet: `${T.activeSheetName}:${T.workbookVersion}`,
    });
  ((0, yl.useEffect)(() => Kc(e), [e]),
    (0, yl.useEffect)(() => {
      re || R(!1);
    }, [re]),
    (0, yl.useEffect)(() => {
      z || se(!1);
    }, [z]),
    (0, yl.useEffect)(() => {
      if (!L) return;
      let e = (e) => {
        if (
          e.key === `Escape` &&
          !(
            e.target instanceof HTMLElement &&
            e.target.closest(`[data-testid='popcorn-annotation-editor']`)
          )
        ) {
          if (ie) {
            (e.preventDefault(), e.stopPropagation());
            return;
          }
          R(!1);
        }
      };
      return (
        window.addEventListener(`keydown`, e, !0),
        () => {
          window.removeEventListener(`keydown`, e, !0);
        }
      );
    }, [ie, L]),
    (0, yl.useEffect)(() => {
      if (!oe) return;
      let e = (e) => {
        e.key === `Escape` && se(!1);
      };
      return (
        window.addEventListener(`keydown`, e, !0),
        () => {
          window.removeEventListener(`keydown`, e, !0);
        }
      );
    }, [oe]));
  let _e = (0, yl.useMemo)(
      () =>
        Nr(e, {
          activeSheetName: T.activeSheetName,
          selectedFloatingElement: T.selectedFloatingElement,
        }),
      [e, T.activeSheetName, T.selectedFloatingElement, T.workbookVersion],
    ),
    ve = (0, yl.useMemo)(() => [..._e, ...pe], [_e, pe]);
  (0, yl.useEffect)(() => {
    N((e) => {
      let t = {},
        n = !1;
      for (let r of j) {
        let i = e[r.id] ?? r.defaultOpen ?? !1;
        ((t[r.id] = i), Object.is(e[r.id], i) || (n = !0));
      }
      for (let r of Object.keys(e))
        if (!(r in t)) {
          n = !0;
          break;
        }
      return n ? t : e;
    });
  }, [j]);
  let ye = (0, yl.useMemo)(
      () =>
        j.flatMap((e) =>
          e.toolbarTrigger
            ? [
                {
                  id: e.id,
                  label: e.toolbarTrigger.label,
                  title: e.toolbarTrigger.title,
                  ariaLabel: e.toolbarTrigger.ariaLabel,
                  icon: e.toolbarTrigger.icon,
                  isActive: M[e.id] ?? !1,
                  onSelect: () => {
                    N((t) => ({ ...t, [e.id]: !(t[e.id] ?? !1) }));
                  },
                },
              ]
            : [],
        ),
      [M, j],
    ),
    be = {
      isPanelAvailable: (e) => j.some((t) => t.id === e),
      isPanelOpen: (e) => M[e] ?? !1,
      openPanel: (e) => {
        N((t) => ({ ...t, [e]: !0 }));
      },
      closePanel: (e) => {
        N((t) => ({ ...t, [e]: !1 }));
      },
      togglePanel: (e) => {
        N((t) => ({ ...t, [e]: !(t[e] ?? !1) }));
      },
    };
  return (0, Q.jsxs)(`div`, {
    ref: D,
    "data-testid": `popcorn-editor-surface`,
    className: `bg-token-bg-primary relative flex h-full min-h-0 flex-col`,
    onKeyDownCapture: (e) => {
      !(e.metaKey || e.ctrlKey) ||
        e.altKey ||
        e.key.toLowerCase() !== `f` ||
        (C && (e.preventDefault(), e.stopPropagation(), ne((e) => e + 1)));
    },
    children: [
      (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 overflow-hidden`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden`,
            children: [
              (0, Q.jsx)(Cc, {
                controller: e,
                snapshot: T,
                title: n,
                headerTitleContent: V
                  ? (0, Q.jsx)(Dc, { title: i ?? n.replace(/\.(xlsx|csv|tsv)$/i, ``) })
                  : i,
                centeredContent: V
                  ? (0, Q.jsx)(Oc, {
                      annotationMode: L,
                      annotationEnabled: re,
                      formatPanelOpen: be.isPanelOpen(Sr),
                      trailingContent: a,
                      onAddSheet: () => e.addSheet(),
                      onToggleAnnotation: () => {
                        if (ie) return;
                        let e = !L;
                        (e && (g?.annotation?.onModeEnabled?.(), se(!1)), R(e));
                      },
                      onToggleFormatPanel: () => be.togglePanel(Sr),
                    })
                  : void 0,
                actions: V ? [] : [...O, ...ye],
                reviewToolControl:
                  !V &&
                  ((g?.annotation && I) || (g?.drawing && z)
                    ? (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          g?.annotation && I
                            ? (0, Q.jsx)(yn, {
                                active: L,
                                onClick: () => {
                                  if (ie) return;
                                  let e = !L;
                                  (e && (g?.annotation?.onModeEnabled?.(), se(!1)), R(e));
                                },
                              })
                            : null,
                          g?.drawing && z
                            ? (0, Q.jsx)(cn, {
                                active: oe,
                                onClick: () => {
                                  ie ||
                                    se((e) => {
                                      let t = !e;
                                      return (t ? R(!1) : ce((e) => e + 1), t);
                                    });
                                },
                              })
                            : null,
                        ],
                      })
                    : null),
                headerRightContent: o,
                renderHeaderZoomControl: s,
                fileMenuContent: r,
                theme: m,
                onClose: c,
              }),
              (0, Q.jsx)(lc, {
                controller: e,
                snapshot: T,
                onInteractionAttempt: l,
                onFxFocus: () => {
                  de(T.formulaInput);
                },
                onFxBlur: () => {
                  fe();
                },
                refColors: he,
                accentColor: p,
                isEditing: h,
                showZoomSelect: m !== `codex`,
              }),
              (0, Q.jsx)(`div`, {
                className: `min-h-0 flex-1`,
                children: (0, Q.jsx)(`div`, {
                  className: `h-full min-h-0`,
                  children: (0, Q.jsx)(bo, {
                    controller: e,
                    snapshot: T,
                    accentFill: f,
                    accentStroke: p,
                    inputFocused: me,
                    formulaHighlightRects: ve,
                    onCellEditorFocus: () => {
                      de(T.formulaInput);
                    },
                    onCellEditorBlur: () => {
                      fe();
                    },
                    onCellEditorChange: (e) => {
                      ge(e);
                    },
                    onInteractionAttempt: l,
                    onHyperlinkClick: u,
                    onSelectedCommentThreadChange: d,
                    viewportOverlays: A,
                    findRequestToken: F,
                    artifactSearchEnabled: C,
                    isEditing: h,
                    annotationMode: L,
                    onAnnotationModeChange: R,
                    onAnnotationDictationBusyChange: ae,
                    drawingMode: oe,
                    onDrawingModeChange: se,
                    drawingCommitToken: B,
                    reviewTools: g,
                    bottomScrollReservePx: ue,
                    annotationsEnabled: x,
                    drawingAnnotationsEnabled: S,
                    commentThreadsEnabled: w,
                    manualEditUiEnabled: V,
                    onUserSelection: () => P(!0),
                    panelControls: be,
                    portalContainerElement: E,
                  }),
                }),
              }),
              (0, Q.jsx)(bc, {
                controller: e,
                snapshot: T,
                accentFill: m === `codex` ? void 0 : f,
                accentStroke: m === `codex` ? void 0 : p,
                theme: m,
                isEditing: h,
                interactionsDisabled: ie,
              }),
              H > 0
                ? (0, Q.jsx)(`div`, {
                    "aria-hidden": !0,
                    className: `shrink-0`,
                    "data-testid": `popcorn-bottom-safe-area`,
                    style: { height: H },
                  })
                : null,
            ],
          }),
          ee.length > 0
            ? (0, Q.jsx)(`aside`, {
                "data-testid": `popcorn-editor-sidebar`,
                className: `border-token-border-light min-h-0 w-[320px] shrink-0 border-s`,
                children: (0, Q.jsx)(`div`, {
                  className: `h-full overflow-auto p-3`,
                  children: ee.map((t) =>
                    (0, Q.jsxs)(
                      `section`,
                      {
                        className: `border-token-border-light bg-token-bg-primary mb-3 rounded-xl border p-3 last:mb-0`,
                        children: [
                          (0, Q.jsx)(`h3`, {
                            className: `text-token-text-primary mb-2 text-sm font-medium`,
                            children: t.title,
                          }),
                          t.render({
                            controller: e,
                            snapshot: T,
                            hasUserSelection: te,
                            closePanel: () => be.closePanel(t.id),
                          }),
                        ],
                      },
                      t.id,
                    ),
                  ),
                }),
              })
            : null,
        ],
      }),
      j.length > 0
        ? (0, Q.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0 z-40`,
            children: j.map((t, n) =>
              M[t.id]
                ? (0, Q.jsx)(
                    wo,
                    {
                      title: t.title,
                      widthPx: t.widthPx,
                      topPx: 96 + n * 24,
                      selfContained: t.selfContained,
                      onClose: () => {
                        N((e) => ({ ...e, [t.id]: !1 }));
                      },
                      children: t.render({
                        controller: e,
                        snapshot: T,
                        hasUserSelection: te,
                        closePanel: () => be.closePanel(t.id),
                      }),
                    },
                    t.id,
                  )
                : null,
            ),
          })
        : null,
    ],
  });
}
function vl({
  controller: e,
  controllerOptions: t,
  plugins: n = [],
  className: r,
  title: i = `New spreadsheet`,
  fileMenuContent: a,
  headerTitleContent: o,
  headerCenterContent: s,
  headerRightContent: c,
  renderHeaderZoomControl: u,
  onClose: d,
  onInteractionAttempt: f,
  onHyperlinkClick: p,
  onSelectedCommentThreadChange: m,
  accentFill: h,
  accentStroke: g,
  theme: _ = `web`,
  isEditing: v = !0,
  reviewTools: y,
  bottomScrollReservePx: b,
  bottomSafeAreaPx: x,
  annotationHeaderButtonEnabled: S = !0,
  manualEditUiEnabled: C = !1,
  annotationsEnabled: w = !0,
  drawingAnnotationsEnabled: T = !0,
  artifactSearchEnabled: E = !0,
  commentThreadsEnabled: D = !0,
}) {
  let O =
      h ??
      (_ === `codex`
        ? `var(--color-token-interactive-bg-accent-muted-context, rgba(51, 156, 255, 0.18))`
        : Pc),
    k = g ?? (_ === `codex` ? `var(--color-token-text-link-foreground, #339cff)` : Fc),
    A = B(
      e,
      (0, yl.useCallback)(() => {
        if (typeof window > `u`)
          throw Error(
            `Popcorn workbook editor requires an explicit controller outside the browser.`,
          );
        return new hl(t);
      }, [t]),
    );
  return A
    ? (0, Q.jsx)(`div`, {
        className: l(`no-drag`, r),
        "data-codex-popcorn-editor": !0,
        "data-popcorn-input-boundary": !0,
        "data-testid": `popcorn-editor-root`,
        style: { height: `100%`, minHeight: 0 },
        children: (0, Q.jsx)(mr, {
          controller: A,
          children: (0, Q.jsx)(_l, {
            controller: A,
            plugins: n,
            title: i,
            fileMenuContent: a,
            headerTitleContent: o,
            headerCenterContent: s,
            headerRightContent: c,
            renderHeaderZoomControl: u,
            onClose: d,
            onInteractionAttempt: f,
            onHyperlinkClick: p,
            onSelectedCommentThreadChange: m,
            accentFill: O,
            accentStroke: k,
            theme: _,
            isEditing: v,
            reviewTools: y,
            bottomScrollReservePx: b,
            bottomSafeAreaPx: x,
            annotationHeaderButtonEnabled: S,
            manualEditUiEnabled: C,
            annotationsEnabled: w,
            drawingAnnotationsEnabled: T,
            artifactSearchEnabled: E,
            commentThreadsEnabled: D,
          }),
        }),
      })
    : null;
}
var yl,
  Q,
  bl,
  xl = e(() => {
    (E(),
      (yl = t(n())),
      br(),
      Cr(),
      Co(),
      Eo(),
      fc(),
      Sc(),
      Ec(),
      Mc(),
      Ic(),
      Wc(),
      Vt(),
      ce(),
      vt(),
      qc(),
      Pr(),
      gl(),
      (Q = h()),
      (bl = 36));
  });
function Sl(e) {
  let {
      selectionBounds: t,
      isDragging: n,
      canEdit: r,
      hasActiveCellEditor: i,
      inputFocused: a,
      toolbarRequested: o,
      delayMs: s = 150,
    } = e,
    [c, l] = (0, Cl.useState)(!1),
    u = (0, Cl.useRef)(null);
  return (
    (0, Cl.useEffect)(() => {
      let e = () => {
        u.current != null &&
          typeof window < `u` &&
          (window.clearTimeout(u.current), (u.current = null));
      };
      return !(o && t && !n && r && !i && !a) || typeof window > `u`
        ? (e(), l(!1), e)
        : (e(),
          (u.current = window.setTimeout(() => {
            (l(!0), (u.current = null));
          }, s)),
          e);
    }, [r, s, i, a, n, t, o]),
    (0, Cl.useEffect)(
      () => () => {
        u.current != null &&
          typeof window < `u` &&
          (window.clearTimeout(u.current), (u.current = null));
      },
      [],
    ),
    c
  );
}
var Cl,
  wl = e(() => {
    Cl = t(n());
  });
function Tl({
  controller: e,
  snapshot: t,
  inputFocused: n,
  selectionBounds: r,
  selectionZoom: i,
  selectionSummary: a,
  toolbarRequested: o,
  canEdit: s,
  dismissEditToolbar: c,
  manualEditUiEnabled: l,
  panelControls: u,
  selectionActions: d,
  shortcutScopeElement: f,
  onAskSelectionContext: p,
}) {
  let m = Sl({
      selectionBounds: r,
      isDragging: t.isDraggingSelection,
      canEdit: s,
      hasActiveCellEditor: t.editorMode === `editCell`,
      inputFocused: n,
      toolbarRequested: o,
    }),
    h = t.selectedFloatingElement
      ? `${t.activeSheetName}:${t.selectedFloatingElement.id}`
      : `${t.formatting.sheetName}:${t.formatting.rangeAddress}`;
  return (0, El.jsx)(
    $t,
    {
      bounds: r,
      zoom: i,
      isVisible: m,
      selectionRangeAddress: t.selectedFloatingElement ? null : a.rangeAddress || null,
      runWorksheetEdit: (t, n) => e.runWorksheetEdit(t, n),
      formatting: t.formatting,
      manualEditUiEnabled: l,
      isInspectorOpen: u.isPanelOpen(Sr),
      selectionActions: d,
      selectionKey: h,
      shortcutScopeElement: f,
      onDismiss: c,
      onToggleInspector: () => u.togglePanel(Sr),
      onAskSelectionContext: p,
    },
    h,
  );
}
var El,
  Dl = e(() => {
    (Cr(), Pn(), wl(), (El = h()));
  });
function Ol({ controller: e, hasUserSelection: t, snapshot: n, onClose: r }) {
  let i = n.selectedFloatingElement,
    a = t ? (i ? Ml(i.kind) : n.formatting.selectionKind === `table` ? `Table` : `Cell`) : `Format`;
  return (0, $.jsxs)(`section`, {
    "aria-label": a,
    className: `flex max-h-full w-full flex-col gap-4 overflow-x-hidden overflow-y-auto rounded-3xl border border-token-border-default bg-token-main-surface-primary p-4 shadow-xl`,
    children: [
      (0, $.jsxs)(`header`, {
        className: `flex h-6 shrink-0 items-center justify-between gap-3`,
        children: [
          (0, $.jsx)(`h2`, {
            className: `truncate text-base font-semibold text-token-text-primary`,
            children: a,
          }),
          (0, $.jsx)(`button`, {
            type: `button`,
            "aria-label": `Close ${a}`,
            onClick: r,
            className: `flex size-6 cursor-pointer items-center justify-center rounded-full bg-token-bg-tertiary text-token-text-secondary transition-transform duration-100 hover:bg-token-bg-secondary hover:text-token-text-primary active:scale-[0.97]`,
            children: (0, $.jsx)(le, { className: `size-4` }),
          }),
        ],
      }),
      (0, $.jsx)(
        `div`,
        {
          className: `popcorn-inspector-panel-content`,
          children: t
            ? i
              ? (0, $.jsx)(`p`, {
                  className: `select-none text-sm text-token-text-secondary`,
                  children: `No editable styles are available for this component.`,
                })
              : (0, $.jsxs)(`div`, {
                  className: `flex flex-col gap-4`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-2`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `select-none text-sm text-token-text-secondary`,
                          children: `Typography`,
                        }),
                        (0, $.jsx)(kl, {
                          fontSize: n.formatting.fontSize,
                          onChange: (t) => {
                            e.runWorksheetEdit(`applyRangeFontSize`, {
                              rangeAddress: n.formatting.rangeAddress,
                              size: t,
                            });
                          },
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `grid grid-cols-4 gap-2`,
                          children: [
                            (0, $.jsx)(jl, {
                              label: `Bold`,
                              pressed: n.formatting.bold,
                              onClick: () => {
                                e.runWorksheetEdit(`toggleRangeBold`, {
                                  rangeAddress: n.formatting.rangeAddress,
                                  value: !n.formatting.bold,
                                });
                              },
                              children: (0, $.jsx)(`span`, {
                                className: `text-base font-bold`,
                                children: `B`,
                              }),
                            }),
                            (0, $.jsx)(jl, {
                              label: `Italic`,
                              pressed: n.formatting.italic,
                              onClick: () => {
                                e.runWorksheetEdit(`toggleRangeItalic`, {
                                  rangeAddress: n.formatting.rangeAddress,
                                  value: !n.formatting.italic,
                                });
                              },
                              children: (0, $.jsx)(`span`, {
                                className: `text-base italic`,
                                children: `I`,
                              }),
                            }),
                            (0, $.jsx)(jl, {
                              disabled: !0,
                              label: `Strikethrough`,
                              children: (0, $.jsx)(`span`, {
                                className: `text-base line-through`,
                                children: `S`,
                              }),
                            }),
                            (0, $.jsx)(jl, {
                              disabled: !0,
                              label: `Underline`,
                              children: (0, $.jsx)(`span`, {
                                className: `text-base underline`,
                                children: `U`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-2`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `select-none text-sm text-token-text-secondary`,
                          children: `Text color`,
                        }),
                        (0, $.jsx)(Al, {
                          color: n.formatting.fontColor,
                          onChange: (t) => {
                            t != null &&
                              e.runWorksheetEdit(`applyRangeFontColor`, {
                                rangeAddress: n.formatting.rangeAddress,
                                hex: t,
                              });
                          },
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-2`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `select-none text-sm text-token-text-secondary`,
                          children: `Cell fill`,
                        }),
                        (0, $.jsx)(Al, {
                          allowNone: !0,
                          color: n.formatting.fillColor,
                          onChange: (t) => {
                            e.runWorksheetEdit(`applyRangeFill`, {
                              rangeAddress: n.formatting.rangeAddress,
                              hex: t,
                            });
                          },
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-2`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `select-none text-sm text-token-text-secondary`,
                          children: `Layout`,
                        }),
                        (0, $.jsx)(`div`, {
                          className: `grid grid-cols-4 gap-2`,
                          children: Nl.map(({ value: t, label: r, icon: i }) =>
                            (0, $.jsx)(
                              jl,
                              {
                                label: r,
                                pressed: n.formatting.horizontalAlignment === t,
                                onClick: () => {
                                  e.runWorksheetEdit(`applyRangeHorizontalAlignment`, {
                                    rangeAddress: n.formatting.rangeAddress,
                                    horizontalAlignment: t,
                                  });
                                },
                                children: (0, $.jsx)(i, { className: `size-4` }),
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                })
            : (0, $.jsx)(`p`, {
                className: `select-none text-sm text-token-text-secondary`,
                children: `Select a component to change its styles`,
              }),
        },
        t ? (i?.id ?? `${n.formatting.sheetName}:${n.formatting.rangeAddress}`) : `empty`,
      ),
    ],
  });
}
function kl({ fontSize: e, onChange: t }) {
  return (0, $.jsxs)(f, {
    children: [
      (0, $.jsx)(m, {
        asChild: !0,
        children: (0, $.jsxs)(`button`, {
          type: `button`,
          className: `flex h-7 w-full cursor-pointer items-center gap-2 rounded-lg border border-token-border-default px-2 text-left text-sm hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover`,
          children: [
            (0, $.jsx)(`span`, {
              className: `min-w-0 flex-1 truncate text-token-text-primary`,
              children: e,
            }),
            (0, $.jsx)(`span`, { className: `text-token-text-tertiary`, children: `pt` }),
            (0, $.jsx)(ge, { className: `size-3 text-token-text-secondary` }),
          ],
        }),
      }),
      (0, $.jsx)(T, {
        children: (0, $.jsx)(v, {
          align: `end`,
          sideOffset: 6,
          className: `z-50`,
          children: (0, $.jsx)(Rn, { fontSize: e, onChange: t }),
        }),
      }),
    ],
  });
}
function Al({ allowNone: e = !1, color: t, onChange: n }) {
  let r = t == null ? null : (Bn.find((e) => St(e.value, t)) ?? null);
  return (0, $.jsxs)(f, {
    children: [
      (0, $.jsx)(m, {
        asChild: !0,
        children: (0, $.jsxs)(`button`, {
          type: `button`,
          className: `flex h-7 w-full cursor-pointer items-center gap-2 rounded-lg border border-token-border-default px-2 text-left text-sm hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover`,
          children: [
            t == null
              ? (0, $.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `flex size-4 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary`,
                  children: `×`,
                })
              : (0, $.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `size-4 rounded-full border border-token-border-light`,
                  style: { backgroundColor: t },
                }),
            (0, $.jsx)(`span`, {
              className: `min-w-0 flex-1 truncate text-token-text-primary`,
              children: t == null ? `No fill` : (r?.label ?? t),
            }),
            (0, $.jsx)(ge, { className: `size-3 text-token-text-secondary` }),
          ],
        }),
      }),
      (0, $.jsx)(T, {
        children: (0, $.jsx)(v, {
          align: `end`,
          sideOffset: 6,
          className: `z-50`,
          children: (0, $.jsx)(nn, { allowNone: e, color: t, onChange: n }),
        }),
      }),
    ],
  });
}
function jl({ children: e, disabled: t = !1, label: n, pressed: r = !1, onClick: i }) {
  return (0, $.jsx)(`button`, {
    type: `button`,
    "aria-label": n,
    "aria-pressed": r,
    "data-state": r ? `on` : `off`,
    disabled: t,
    onClick: i,
    className: l(
      `flex h-7 min-w-0 cursor-pointer items-center justify-center rounded-lg border border-token-border-default disabled:cursor-not-allowed disabled:opacity-40`,
      r ? `bg-info-soft text-info` : `text-default enabled:hover:bg-primary-ghost-hover`,
    ),
    children: e,
  });
}
function Ml(e) {
  switch (e) {
    case `xlsx-chart`:
      return `Chart`;
    case `xlsx-image`:
      return `Image`;
    case `xlsx-shape`:
      return `Shape`;
    default:
      return `Component`;
  }
}
var $,
  Nl,
  Pl = e(() => {
    (x(),
      E(),
      Ne(),
      Ht(),
      un(),
      Tn(),
      sn(),
      vn(),
      An(),
      ($ = h()),
      (Nl = [
        { value: `left`, label: `Align left`, icon: Nn },
        { value: `center`, label: `Align center`, icon: bn },
        { value: `right`, label: `Align right`, icon: an },
        { value: `justify`, label: `Justify`, icon: ln },
      ]));
  });
function Fl(e) {
  return {
    id: `popcorn-formatting`,
    panels: e?.manualEditUiEnabled
      ? [
          {
            id: Sr,
            title: `Format`,
            placement: `floating`,
            widthPx: 240,
            selfContained: !0,
            toolbarTrigger: { label: `Format`, ariaLabel: `Format`, icon: H },
            render: ({ closePanel: e, controller: t, hasUserSelection: n, snapshot: r }) =>
              (0, Il.createElement)(Ol, {
                controller: t,
                hasUserSelection: n,
                snapshot: r,
                onClose: e,
              }),
          },
        ]
      : void 0,
    viewportOverlays: [
      {
        id: `popcorn-formatting-toolbar`,
        render: (t) =>
          (0, Il.createElement)(Tl, {
            ...t,
            manualEditUiEnabled: e?.manualEditUiEnabled ?? !1,
            onAskSelectionContext: e?.onAskSelectionContext ?? null,
          }),
      },
    ],
  };
}
var Il,
  Ll = e(() => {
    ((Il = t(n())), Dl(), Ne(), Cr(), Pl());
  });
function Rl(e) {
  let t = [
    ...(e.plugins ?? []),
    Fl({ manualEditUiEnabled: e.manualEditUiEnabled === !0 && e.isEditing !== !1 }),
  ];
  return (0, zl.createElement)(vl, { ...e, plugins: t });
}
var zl,
  Bl = e(() => {
    ((zl = t(n())), xl(), Ll());
  });
function Vl() {
  return Ul.map((e) => [Hl(e.artifact), e.area, e.feature, e.summary]);
}
function Hl(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Ul,
  Wl = e(() => {
    Ul = [
      {
        artifact: `shared`,
        area: `Architecture`,
        feature: `Per-artifact worker bundles`,
        summary: `Workbook, presentation, and document each ship a dedicated worker bundle so hosts can scale them independently.`,
      },
      {
        artifact: `shared`,
        area: `Canvas runtime`,
        feature: `Worker-owned redraw loop`,
        summary: `Granola owns the render/cache path while Popcorn keeps the React shell thin and event-driven.`,
      },
      {
        artifact: `shared`,
        area: `Editing`,
        feature: `Canvas-native text sessions`,
        summary: `Presentation and document reuse the shared hidden-textarea bridge and Granola text-edit controller instead of contentEditable.`,
      },
      {
        artifact: `shared`,
        area: `Floating objects`,
        feature: `Shared selection overlays`,
        summary: `Charts, shapes, and images use the same hit-test and overlay direction across artifact lanes.`,
      },
      {
        artifact: `shared`,
        area: `Validation`,
        feature: `State-oriented devtools and receipts`,
        summary: `Each route exposes deterministic state capture for browser automation, smoke receipts, and manual debugging.`,
      },
      {
        artifact: `workbook`,
        area: `Core grid`,
        feature: `Formula editing and recalculation`,
        summary: `Formula bar edits, in-cell edits, and recalc all flow through the Granola workbook model and undo stack.`,
      },
      {
        artifact: `workbook`,
        area: `Analysis`,
        feature: `Tables, filters, and pivots`,
        summary: `Workbook demos include structured tables, filter menus, and a pivot table backed by a large data sheet.`,
      },
      {
        artifact: `workbook`,
        area: `Formatting`,
        feature: `Conditional formats and validation`,
        summary: `Color scales, rule-based highlights, validation dropdowns, and prompts render from workbook-native metadata.`,
      },
      {
        artifact: `workbook`,
        area: `Layout`,
        feature: `Freeze panes and Excel-like sizing`,
        summary: `Frozen headers, autofit, wrap-text cases, and explicit row/column sizing are part of the default workbook catalog.`,
      },
      {
        artifact: `workbook`,
        area: `Objects`,
        feature: `Charts, shapes, images, and sparklines`,
        summary: `The workbook showcase includes anchored charts plus floating shapes, images, and sparkline groups.`,
      },
      {
        artifact: `workbook`,
        area: `Productivity`,
        feature: `Clipboard, find, and undo/redo`,
        summary: `Browser-native clipboard, workbook search, and keyboard history are validated against the model rather than UI text.`,
      },
      {
        artifact: `presentation`,
        area: `Stage`,
        feature: `Thumbnails, stage, and notes`,
        summary: `The slide editor owns selected-slide state, thumbnails, a centered stage, and speaker notes per slide.`,
      },
      {
        artifact: `presentation`,
        area: `Canvas text`,
        feature: `Canvas text editing`,
        summary: `Double-click text editing, selection gestures, and undo all reuse the shared Granola text session.`,
      },
      {
        artifact: `presentation`,
        area: `Objects`,
        feature: `Shapes, connectors, and z-order`,
        summary: `Slides demonstrate cards, callouts, arrows, and routed connectors that can be selected, moved, and resized.`,
      },
      {
        artifact: `presentation`,
        area: `Data visuals`,
        feature: `Charts and tables`,
        summary: `The presentation catalog includes metric tables plus multiple chart types for selection and editing coverage.`,
      },
      {
        artifact: `presentation`,
        area: `Media`,
        feature: `Images and themed backgrounds`,
        summary: `Slides include image elements, varied backgrounds, and polished notes so the route exercises more than text boxes.`,
      },
      {
        artifact: `document`,
        area: `Structure`,
        feature: `Sections, headers, footers, and columns`,
        summary: `The document catalog spans multiple sections, page setups, headers/footers, and one-column versus two-column layouts.`,
      },
      {
        artifact: `document`,
        area: `Canvas text`,
        feature: `Pagination-aware text editing and find`,
        summary: `Document editing supports page navigation, find, wrapped-line selection, and canvas-native text mutations.`,
      },
      {
        artifact: `document`,
        area: `Rich text`,
        feature: `Headings, lists, spacing, and callouts`,
        summary: `The document demo uses styled text blocks, list-style sections, and floating callouts to exercise layout and text styles.`,
      },
      {
        artifact: `document`,
        area: `Embedded content`,
        feature: `Tables, shapes, and images`,
        summary: `Document pages include anchored tables, inline images, and floating shapes to drive object selection and pagination.`,
      },
    ];
  });
function Gl(e) {
  (e.format.autofitColumns(), e.format.autofitRows());
}
function Kl(e) {
  let t = e.worksheets.add(`Revenue`),
    n = t.getRange(`A1:G7`);
  ((n.values = [
    [`Quarter`, `North`, `South`, `West`, `East`, `Total`, `Delta`],
    [`Q1`, 120, 90, 80, 72, 362, 0.08],
    [`Q2`, 135, 100, 92, 88, 415, 0.12],
    [`Q3`, 150, 110, 105, 94, 459, 0.11],
    [`Q4`, 170, 128, 120, 109, 527, 0.15],
    [`Q5`, 182, 139, 126, 118, 565, 0.07],
    [`Q6`, 194, 147, 133, 121, 595, 0.05],
  ]),
    (t.getRange(`F2`).formulas = [[`=SUM(B2:E2)`]]),
    t.getRange(`F2:F7`).fillDown(),
    Gl(n),
    (t.getRange(`A1:G1`).format = _u),
    (t.getRange(`F2:F7`).format = { font: { bold: !0 } }),
    t.getRange(`G2:G7`).conditionalFormats.addColorScale(yu),
    (t.getRange(`F9:H13`).values = [
      [`Region`, `Owner`, `Status`],
      [`North`, `Ava`, `Done`],
      [`South`, `Noah`, `In progress`],
      [`West`, `Mia`, `Blocked`],
      [`East`, `Liam`, `Backlog`],
    ]));
  let r = t.tables.add(`F9:H13`, !0, `RegionalOwners`);
  ((r.showFilterButton = !0),
    (t.getRange(`A15`).values = [
      [`Merged viewport anchor test: scroll this block so A15 moves offscreen.`],
    ]),
    t.getRange(`A15:D18`).merge(),
    (t.getRange(`A15:D18`).format = {
      fill: `#E0F2FE`,
      font: { bold: !0, color: `#075985` },
      horizontalAlignment: `center`,
      verticalAlignment: `middle`,
      wrapText: !0,
    }),
    (t.getRange(`A15:D18`).format.rowHeightPx = 32),
    (t.getRange(`A15:D18`).format.columnWidthPx = 112));
  let i = t.charts.add(`ColumnClustered`, t.getRange(`A1:E7`), `Auto`);
  return (
    (i.title.text = `Regional revenue`),
    i.setPosition(t.getRange(`I2`)),
    (i.width = 460),
    (i.height = 280),
    t
  );
}
function ql() {
  return Array.from({ length: cu }, (e, t) => {
    let n = fu[t % fu.length],
      r = pu[(t * 3) % pu.length],
      i = mu[(t * 5) % mu.length],
      a = hu[(t * 7) % hu.length],
      o = 40 + ((t * 11) % 180),
      s = o * (90 + ((t * 17) % 45)),
      c = Number((((t * 13) % 28) / 100 + 0.18).toFixed(2)),
      l = gu[(t * 19) % gu.length],
      u = (t % 12) + 1,
      d = (t % 27) + 1;
    return [
      n,
      r,
      i,
      a,
      s,
      o,
      c,
      l,
      `2025-${String(u).padStart(2, `0`)}-${String(d).padStart(2, `0`)}`,
    ];
  });
}
function Jl(e) {
  let t = Math.imul(e ^ 2654435769, 2246822507);
  return ((t ^= t >>> 13), (t = Math.imul(t, 3266489909)), (t ^= t >>> 16), (t >>> 0) / 2 ** 32);
}
function Yl() {
  return Array.from({ length: lu }, (e, t) => {
    let n = new Date(uu + t * du).toISOString().slice(0, 10),
      r = Math.sin((t * Math.PI * 2) / 7),
      i = Jl(t * 17 + 3),
      a = Jl(t * 29 + 11),
      o = Jl(t * 43 + 19),
      s = Math.round(860 + t * 3.8 + r * 110 + (i - 0.5) * 120);
    return [
      n,
      s,
      Number((185 + r * 14 + (a - 0.5) * 32 + (s > 1250 ? 18 : 0)).toFixed(1)),
      Math.max(0, Math.round(8 + r * 3 + (o - 0.45) * 12)),
    ];
  });
}
function Xl(e) {
  let t = e.worksheets.add(`Data`),
    n = [`Region`, `Rep`, `Product`, `Quarter`, `Revenue`, `Units`, `Margin`, `Status`, `Date`],
    r = ql(),
    i = e.utils.toA1String(1, 1, r.length + 1, n.length);
  t.getRange(i).values = [n, ...r];
  let a = t.tables.add(i, !0, `SalesData`);
  return ((a.style = `TableStyleMedium2`), (a.showFilterButton = !0), Gl(t.getRange(`A1:I12`)), t);
}
function Zl(e) {
  let t = e.worksheets.add(`Daily logs`),
    n = [`Date`, `Requests`, `Latency ms`, `Errors`],
    r = Yl(),
    i = e.utils.toA1String(1, 1, r.length + 1, n.length),
    a = t.getRange(i);
  a.values = [n, ...r];
  let o = t.tables.add(i, !0, `DailyLogs`);
  ((o.style = `TableStyleMedium4`),
    (o.showFilterButton = !0),
    (t.getRange(`A1:D1`).format = vu),
    (t.getRange(`C2:C${r.length + 1}`).format.numberFormat = `0.0`),
    t.getRange(`B2:B${r.length + 1}`).conditionalFormats.addColorScale(bu),
    t.getRange(`D2:D${r.length + 1}`).conditionalFormats.addColorScale(yu),
    Gl(t.getRange(`A1:D14`)));
  let s = t.charts.add(`line`, a, `Auto`);
  return (
    (s.title.text = `Daily logs trend`),
    s.setPosition(t.getRange(`F2`)),
    (s.width = 720),
    (s.height = 360),
    t
  );
}
function Ql(e) {
  let t = e.worksheets.add(`Pivot`),
    n = e.pivotTables.add(`SalesPivot`, `Data!A1:I1501`, `Pivot!A3`),
    { hierarchies: r, rowHierarchies: i, columnHierarchies: a, dataHierarchies: o } = n;
  (i.add(r.getItem(`Region`)),
    i.add(r.getItem(`Product`)),
    a.add(r.getItem(`Quarter`)),
    o.add(r.getItem(`Revenue`)),
    o.add(r.getItem(`Units`)),
    (n.layout.emptyCellText = `--`),
    (n.layout.preserveFormatting = !0),
    (t.getRange(`A1:F2`).values = [
      [`Sales pivot`, `Backed by Data!A1:I1501`, ``, ``, ``, ``],
      [
        `Try selecting the pivot body to test formatting, copy, and navigation.`,
        ``,
        ``,
        ``,
        ``,
        ``,
      ],
    ]),
    (t.getRange(`A1:F2`).format = { wrapText: !0 }),
    Gl(t.getRange(`A1:F2`)));
}
function $l(e) {
  let t = e.worksheets.add(`Planning`);
  t.getRange(`A1:H9`).values = [
    [`Workstream`, `Owner`, `ETA`, `Priority`, `Confidence`, `Variance`, `Status`, `Notes`],
    [
      `Canvas worker`,
      `Ava`,
      `2026-04-01`,
      `P0`,
      0.88,
      0.05,
      `Done`,
      `Offscreen redraw path is in place.`,
    ],
    [
      `Clipboard`,
      `Noah`,
      `2026-04-02`,
      `P0`,
      0.62,
      -0.03,
      `In progress`,
      `Needs browser-system parity.`,
    ],
    [`Pivot chrome`, `Mia`, `2026-04-04`, `P1`, 0.57, 0.01, `Backlog`, `Toolbar hooks are ready.`],
    [
      `Undo/redo`,
      `Liam`,
      `2026-04-03`,
      `P0`,
      0.94,
      0.09,
      `Done`,
      `Granola keyboard bus already carries the mutations.`,
    ],
    [
      `Charts`,
      `Ivy`,
      `2026-04-05`,
      `P1`,
      0.71,
      0.12,
      `In progress`,
      `Series highlighting is now source-aware.`,
    ],
    [
      `Tables`,
      `Eli`,
      `2026-04-05`,
      `P1`,
      0.83,
      0.07,
      `Done`,
      `Sizing and styles should mirror Excel.`,
    ],
    [
      `Validation`,
      `Ava`,
      `2026-04-06`,
      `P1`,
      0.66,
      -0.02,
      `Blocked`,
      `Awaiting polished dropdown chrome.`,
    ],
    [
      `Docs/Slides core`,
      `Noah`,
      `2026-04-08`,
      `P2`,
      0.48,
      0.14,
      `Backlog`,
      `Shared floating selection runtime next.`,
    ],
  ];
  let n = t.tables.add(`A1:H9`, !0, `PlanTable`);
  ((n.style = `TableStyleMedium9`),
    (n.showFilterButton = !0),
    t.getRange(`E2:E9`).conditionalFormats.addColorScale(yu),
    t.getRange(`F2:F9`).conditionalFormats.add(`cellIs`, {
      operator: `greaterThan`,
      formula: 0.1,
      format: { fill: `#FEF3C7`, font: { color: `#92400E`, bold: !0 } },
    }),
    (t.getRange(`G2:G40`).dataValidation = xu),
    (t.getRange(`J1:N6`).values = [
      [`Scenario`, `North`, `South`, `West`, `East`],
      [`Base`, 362, 415, 459, 527],
      [`Stretch`, 380, 430, 490, 558],
      [`Downside`, 320, 390, 421, 480],
      [`AI assist`, 401, 445, 512, 590],
      [`Partner`, 387, 438, 501, 572],
    ]),
    Gl(t.getRange(`J1:N6`)),
    (t.getRange(`J1:N1`).format = vu),
    t.getRange(`J2:N6`).conditionalFormats.addColorScale(bu));
}
function eu(e) {
  let t = e.worksheets.add(`Freeze`);
  return (
    (t.getRange(`A1:H12`).values = [
      [`Region`, `Owner`, `Status`, `ETA`, `Revenue`, `Variance`, `Notes`, `Formula`],
      [
        `North`,
        `Ava`,
        `Done`,
        `2026-04-01`,
        362,
        0.08,
        `Frozen panes should keep headers and the first columns visible.`,
        `=E2*(1+F2)`,
      ],
      [
        `South`,
        `Noah`,
        `In progress`,
        `2026-04-02`,
        415,
        0.12,
        `Drag the freeze lines from the parked handles or existing boundaries.`,
        `=E3*(1+F3)`,
      ],
      [
        `West`,
        `Mia`,
        `Blocked`,
        `2026-04-03`,
        459,
        -0.02,
        `This sheet is the manual playground for scrolling and frozen headers.`,
        `=E4*(1+F4)`,
      ],
      [
        `East`,
        `Liam`,
        `Backlog`,
        `2026-04-04`,
        527,
        0.05,
        `The first two rows and first two columns start frozen.`,
        `=E5*(1+F5)`,
      ],
      ...Array.from({ length: 7 }, (e, t) => [
        fu[t % fu.length],
        pu[t % pu.length],
        gu[t % gu.length],
        `2026-04-${String(t + 5).padStart(2, `0`)}`,
        240 + t * 18,
        Number((((t % 5) - 2) * 0.03).toFixed(2)),
        `Row ${t + 6} adds more scrollable body content for freeze testing.`,
        `=E${t + 6}*(1+F${t + 6})`,
      ]),
    ]),
    (t.getRange(`A1:H2`).format = vu),
    (t.getRange(`G2:G12`).format = { wrapText: !0 }),
    (t.getRange(`H2:H12`).format = { font: { bold: !0 } }),
    t.getRange(`A1:H12`).format.autofitColumns(),
    (t.getRange(`G2:G12`).format.columnWidthPx = 280),
    t.getRange(`G2:G12`).format.autofitRows(),
    t.freezePanes.freezeRows(2),
    t.freezePanes.freezeColumns(2),
    t
  );
}
function tu(e) {
  let t = e.worksheets.add(`Layout`);
  ((t.getRange(`A1:D8`).values = [
    [`Case`, `Wrap`, `Height`, `Preview`],
    [
      `Single line`,
      `off`,
      `fixed`,
      `This line stays on one row and should clip when the column is narrow.`,
    ],
    [
      `Wrapped paragraph`,
      `on`,
      `auto`,
      `This is a longer sentence that should wrap naturally once the column gets narrow enough to require multiple lines.`,
    ],
    [
      `Multiline manual`,
      `on`,
      `fixed`,
      `First line
Second line
Third line`,
    ],
    [
      `Wide fixed column`,
      `off`,
      `auto`,
      `A deliberately wide column to compare against the wrapped cases.`,
    ],
    [
      `Narrow fixed column`,
      `on`,
      `fixed`,
      `Narrow column with forced wrap and explicit row height.`,
    ],
    [
      `Mixed style`,
      `on`,
      `auto`,
      `Bold headers, fills, and row auto-fit should all remain stable.`,
    ],
    [
      `Notes`,
      `on`,
      `auto`,
      `Popcorn should match Excel-like sizing rules as closely as Granola exposes today.`,
    ],
  ]),
    Gl(t.getRange(`A1:D8`)),
    (t.getRange(`A1:D1`).format = _u),
    (t.getRange(`D2:D8`).format = { wrapText: !0 }),
    (t.getRange(`D4:D4`).format.rowHeightPx = 72),
    (t.getRange(`D6:D6`).format.rowHeightPx = 56),
    t.getRange(`D2:D8`).format.autofitRows(),
    (t.getRange(`D2:D2`).format.wrapText = !1),
    (t.getRange(`D5:D5`).format.wrapText = !1),
    (t.getRange(`B2:C8`).format.horizontalAlignment = `center`),
    (t.getRange(`D2:D8`).format.columnWidthPx = 210),
    (t.getRange(`A2:A8`).format.columnWidthPx = 132),
    t.getRange(`D2:D8`).format.autofitRows());
}
function nu(e) {
  let t = e.worksheets.add(`Auto row height`);
  ((t.getRange(`A1:C9`).values = [
    [`Case`, `Cell to inspect`, `Expected result`],
    [
      `Instructions`,
      `Open this sheet after changing the auto row height code. The rows below spell out what should happen in the cell text itself.`,
      `Rows 3 and 7 should grow automatically; row 5 should stay fixed.`,
    ],
    [
      `Unset row height`,
      `B3 AUTO HEIGHT CHECK: this cell has wrapText=true and no explicit row height. Expected: row 3 grows tall enough to show this whole message without clipping. If only the first line is visible, unset auto row height is not working.`,
      `Row 3 should be much taller than the default row height.`,
    ],
    [`Spacer`, ``, ``],
    [
      `Custom row height`,
      `B5 FIXED HEIGHT CHECK: this cell also wraps, but row 5 has an explicit 24 px custom height. Expected: row 5 stays short so this long wrapped message is clipped or visibly constrained.`,
      `Row 5 should stay about 24 px high.`,
    ],
    [`Spacer`, ``, ``],
    [
      `Manual newlines`,
      `B7 AUTO HEIGHT CHECK:
Line 2 should be visible.
Line 3 should be visible.
Expected: row 7 grows to show every line.`,
      `Row 7 should grow to fit all newline-separated lines.`,
    ],
    [`Spacer`, ``, ``],
    [
      `No wrap`,
      `B9 NO WRAP CHECK: wrapText=false here, so the row should stay at the normal height even though the text is long.`,
      `Row 9 should stay normal height.`,
    ],
  ]),
    (t.getRange(`A1:C1`).format = _u),
    (t.getRange(`A1:C9`).format.verticalAlignment = `top`),
    (t.getRange(`A:A`).format.columnWidthPx = 150),
    (t.getRange(`B:B`).format.columnWidthPx = 280),
    (t.getRange(`C:C`).format.columnWidthPx = 220),
    (t.getRange(`B2:C7`).format.wrapText = !0),
    (t.getRange(`B9:C9`).format.wrapText = !1),
    (t.getRange(`5:5`).format.rowHeightPx = 24),
    (t.getRange(`A2:C9`).format.fill = `#F8FAFC`),
    (t.getRange(`A3:C3`).format.fill = `#DCFCE7`),
    (t.getRange(`A5:C5`).format.fill = `#FEF3C7`),
    (t.getRange(`A7:C7`).format.fill = `#DBEAFE`));
}
function ru(e) {
  let t = e.worksheets.add(`Catalog`),
    n = Vl();
  t.getRange(e.utils.toA1String(1, 1, n.length + 1, Su.length)).values = [Su, ...n];
  let r = t.tables.add(e.utils.toA1String(1, 1, n.length + 1, Su.length), !0, `FeatureCatalog`);
  ((r.style = `TableStyleMedium4`),
    (r.showFilterButton = !0),
    (t.getRange(`A1:D1`).format = vu),
    (t.getRange(`D2:D200`).format = { wrapText: !0 }),
    t.getRange(`B2:B200`).conditionalFormats.addCustom(`=$A2="Workbook"`, { fill: `#DBEAFE` }),
    t.getRange(`B2:B200`).conditionalFormats.addCustom(`=$A2="Presentation"`, { fill: `#EDE9FE` }),
    t.getRange(`B2:B200`).conditionalFormats.addCustom(`=$A2="Document"`, { fill: `#DCFCE7` }),
    Gl(t.getRange(`A1:D40`)),
    (t.getRange(`D2:D40`).format.columnWidthPx = 420),
    t.getRange(`D2:D40`).format.autofitRows());
}
function iu(e) {
  let t = e.worksheets.add(`Showcase`);
  ((t.getRange(`A1:H8`).values = [
    [`Artifact`, `Jan`, `Feb`, `Mar`, `Apr`, `Sparkline`, `Object demo`, `Notes`],
    [`Workbook`, 5, 7, 9, 11, ``, `Shape + image`, `Anchored workbook drawings`],
    [`Presentation`, 4, 6, 8, 10, ``, `Chart parity`, `Shared object primitives`],
    [`Document`, 3, 5, 6, 9, ``, `Inline media`, `Pagination-aware editing`],
    [`Shared`, 6, 8, 10, 12, ``, `Worker split`, `Shared text-edit runtime`],
  ]),
    (t.getRange(`A1:H1`).format = _u),
    (t.getRange(`H2:H5`).format = { wrapText: !0 }),
    t.getRange(`F2:F5`).sparklines.add(`line`, t.getRange(`B2:E5`), { markers: { show: !0 } }));
  let n = t.shapes.add({
    geometry: `upArrow`,
    anchor: {
      from: { row: 1, col: 6, rowOffsetPx: 6, colOffsetPx: 4 },
      extent: { widthPx: 170, heightPx: 120 },
    },
    fill: { type: `solid`, color: `#2563EB` },
    line: { width: 1, style: `solid`, fill: `#1D4ED8` },
  });
  ((n.text = `Flip me
vertically`),
    (n.text.color = `#FFFFFF`),
    (n.text.alignment = `center`),
    (n.text.verticalAlignment = `middle`),
    (n.text.wrap = `square`),
    t.shapes.add({
      geometry: `star5`,
      anchor: {
        from: { row: 4, col: 6, rowOffsetPx: 4, colOffsetPx: 18 },
        extent: { widthPx: 54, heightPx: 54 },
      },
      fill: {
        type: `gradient`,
        angleDeg: 90,
        stops: [
          { offset: 0, color: `accent2` },
          { offset: 1e5, color: `accent5` },
        ],
      },
      line: { width: 1, style: `solid`, fill: `text1` },
    }),
    t.images.add({
      dataUrl: Kt,
      anchor: {
        from: { row: 3, col: 6, rowOffsetPx: 10, colOffsetPx: 96 },
        extent: { widthPx: 44, heightPx: 44 },
      },
    }),
    Gl(t.getRange(`A1:H8`)),
    (t.getRange(`H2:H5`).format.columnWidthPx = 240),
    t.getRange(`H2:H5`).format.autofitRows());
}
function au(e) {
  let t = e.worksheets.add(`Shapes`);
  ((t.getRange(`A1:H6`).values = [
    [`Shape showcase`, `Fill`, `Line`, `Anchor`, `Notes`, ``, ``, ``],
    [
      `Rectangle`,
      `Solid accent`,
      `Dashed`,
      `Extent`,
      `Simple text box with dashed stroke.`,
      ``,
      ``,
      ``,
    ],
    [`Moon`, `Gradient`, `Solid`, `Two-cell`, `Two-cell anchor with gradient fill.`, ``, ``, ``],
    [`Hexagon`, `Solid accent`, `Solid`, `Extent`, `Badge-like label.`, ``, ``, ``],
    [`Chevron`, `Solid`, `Dashed`, `Extent`, `Directional callout.`, ``, ``, ``],
    [`Star`, `Gradient`, `Solid`, `Extent`, `High-contrast review marker.`, ``, ``, ``],
  ]),
    (t.getRange(`A1:E1`).format = vu),
    (t.getRange(`E2:E6`).format = { wrapText: !0 }),
    (t.getRange(`E2:E6`).format.columnWidthPx = 260),
    t.getRange(`E2:E6`).format.autofitRows());
  let n = t.shapes.add({
    geometry: `rect`,
    anchor: {
      from: { row: 1, col: 5, rowOffsetPx: 8, colOffsetPx: 12 },
      extent: { widthPx: 220, heightPx: 120 },
    },
    fill: `#DBEAFE`,
    line: { width: 1.5, style: `dashed`, fill: `#2563EB` },
  });
  ((n.text = `Dashed border`),
    (n.text.alignment = `center`),
    (n.text.verticalAlignment = `middle`),
    (n.text.wrap = `square`));
  let r = t.shapes.add({
    geometry: `moon`,
    anchor: {
      from: { row: 6, col: 5, rowOffsetPx: 4, colOffsetPx: 16 },
      to: { row: 12, col: 8, rowOffsetPx: 10, colOffsetPx: 26 },
    },
    fill: {
      type: `gradient`,
      angleDeg: 0,
      stops: [
        { offset: 0, color: `accent2` },
        { offset: 1e5, color: `accent5` },
      ],
    },
    line: { width: 1.5, style: `solid`, fill: `accent3` },
  });
  ((r.text = `Gradient moon`),
    (r.text.alignment = `center`),
    (r.text.verticalAlignment = `middle`),
    (r.text.wrap = `square`));
  let i = t.shapes.add({
    geometry: `hexagon`,
    anchor: {
      from: { row: 2, col: 9, rowOffsetPx: 6, colOffsetPx: 14 },
      extent: { widthPx: 180, heightPx: 120 },
    },
    fill: `accent4`,
    line: { width: 1.5, style: `solid`, fill: `accent6` },
  });
  ((i.text = `Badge`),
    (i.text.color = `#FFFFFF`),
    (i.text.alignment = `center`),
    (i.text.verticalAlignment = `middle`));
  let a = t.shapes.add({
    geometry: `chevron`,
    anchor: {
      from: { row: 7, col: 9, rowOffsetPx: 4, colOffsetPx: 8 },
      extent: { widthPx: 220, heightPx: 90 },
    },
    fill: `#FDE68A`,
    line: { width: 1.5, style: `dashed`, fill: `#D97706` },
  });
  ((a.text = `Review flow`), (a.text.alignment = `center`), (a.text.verticalAlignment = `middle`));
  let o = t.shapes.add({
    geometry: `upArrow`,
    anchor: {
      from: { row: 11, col: 9, rowOffsetPx: 8, colOffsetPx: 18 },
      extent: { widthPx: 170, heightPx: 150 },
    },
    fill: `#2563EB`,
    line: { width: 1.5, style: `solid`, fill: `#1D4ED8` },
  });
  ((o.text = `Flip me`),
    (o.text.color = `#FFFFFF`),
    (o.text.alignment = `center`),
    (o.text.verticalAlignment = `middle`),
    (o.text.wrap = `square`));
  let s = t.shapes.add({
    geometry: `star5`,
    anchor: {
      from: { row: 13, col: 5, rowOffsetPx: 4, colOffsetPx: 40 },
      extent: { widthPx: 150, heightPx: 140 },
    },
    fill: {
      type: `gradient`,
      angleDeg: 90,
      stops: [
        { offset: 0, color: `accent1` },
        { offset: 1e5, color: `accent5` },
      ],
    },
    line: { width: 1, style: `solid`, fill: `text1` },
  });
  ((s.text = `Marker`),
    (s.text.color = `#FFFFFF`),
    (s.text.alignment = `center`),
    (s.text.verticalAlignment = `middle`),
    Gl(t.getRange(`A1:E6`)));
}
function ou(e) {
  let t = e.worksheets.getItem(`Revenue`),
    n = e.worksheets.getItem(`Planning`),
    r = e.worksheets.getItem(`Freeze`);
  (e.comments.setSelf({
    id: `popcorn-demo-reviewer`,
    displayName: `Ava Reviewer`,
    initials: `AR`,
    email: `ava@example.com`,
  }),
    e.comments
      .addThread(
        { cell: t.getRange(`F4`) },
        `Please confirm the Q3 total before export. The regional numbers changed in yesterday's source refresh.`,
        { createdAt: `2026-04-18T09:15:00.000Z` },
      )
      .addReply(`Confirmed. The total now matches the pipeline snapshot.`, {
        author: {
          id: `popcorn-demo-owner`,
          displayName: `Noah Owner`,
          initials: `NO`,
          email: `noah@example.com`,
        },
        createdAt: `2026-04-18T10:02:00.000Z`,
      }));
  let i = e.comments.addThread(
    { range: n.getRange(`B4:D6`) },
    `These dates still assume the old launch sequence. We should update the dependency notes before sharing.`,
    {
      author: {
        id: `popcorn-demo-pm`,
        displayName: `Mia PM`,
        initials: `MP`,
        email: `mia@example.com`,
      },
      createdAt: `2026-04-17T14:30:00.000Z`,
    },
  );
  (i.addReply(`Tracked. I will revise the milestone owners after legal signs off.`, {
    createdAt: `2026-04-17T16:05:00.000Z`,
  }),
    i.resolve(
      { id: `popcorn-demo-pm`, displayName: `Mia PM`, initials: `MP`, email: `mia@example.com` },
      `2026-04-17T18:20:00.000Z`,
    ),
    e.comments.addThread(
      { cell: r.getRange(`C12`) },
      `This frozen-pane example is handy for manual viewport checks. Keep it in the fixture.`,
      {
        author: { id: `popcorn-demo-qa`, displayName: `Eli QA`, initials: `EQ` },
        createdAt: `2026-04-16T11:45:00.000Z`,
      },
    ));
}
function su() {
  let e = I.create();
  return (
    Kl(e),
    $l(e),
    eu(e),
    Xl(e),
    Zl(e),
    Ql(e),
    tu(e),
    nu(e),
    ru(e),
    iu(e),
    au(e),
    ou(e),
    e.worksheets.setActiveWorksheet(`Revenue`),
    e.recalculate(),
    e
  );
}
var cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu,
  yu,
  bu,
  xu,
  Su,
  Cu = e(() => {
    (re(),
      Nt(),
      Wl(),
      (cu = 1500),
      (lu = 182),
      (uu = Date.UTC(2025, 9, 1)),
      (du = 1440 * 60 * 1e3),
      (fu = [`North`, `South`, `West`, `East`]),
      (pu = [`Ava`, `Noah`, `Mia`, `Liam`, `Ivy`, `Eli`]),
      (mu = [`Core`, `Plus`, `AI`, `Ops`]),
      (hu = [`Q1`, `Q2`, `Q3`, `Q4`]),
      (gu = [`Backlog`, `In progress`, `Blocked`, `Done`]),
      (_u = { font: { bold: !0 }, fill: `#E5E7EB` }),
      (vu = { font: { bold: !0 }, fill: `#DBEAFE` }),
      (yu = { minColor: `#FECACA`, midColor: `#FDE68A`, maxColor: `#86EFAC` }),
      (bu = { minColor: `#DBEAFE`, midColor: `#93C5FD`, maxColor: `#1D4ED8` }),
      (xu = {
        allowBlank: !0,
        list: { inCellDropDown: !0, source: [...gu] },
        showInputMessage: !0,
        promptTitle: `Status`,
        prompt: `Pick one of the supported statuses.`,
      }),
      (Su = [`Artifact`, `Area`, `Feature`, `Summary`]));
  });
function wu() {
  return su().toProto();
}
function Tu({
  className: e,
  externalCrdtUpdates: t,
  headerTitleContent: n,
  headerCenterContent: r,
  headerRightContent: i,
  renderHeaderZoomControl: a,
  initialCrdtState: o,
  initialSelectedAddress: s,
  initialSourceBytes: c,
  initialSourceFormat: u,
  initialWorkbookProto: d,
  initialZoom: f,
  commentControllerRef: p,
  selectedCommentThreadId: m,
  onSelectedCommentThreadChange: h,
  onCommentThreadsChange: g,
  onControllerReady: _,
  onImportReady: v,
  onImportError: y,
  onCrdtDrain: b,
  onCrdtDrainAttemptFailed: x,
  onCrdtUpdate: S,
  onHyperlinkClick: C,
  onInteractionAttempt: w,
  resolveImageHydrationAssets: T,
  title: E = `codex-popcorn-demo.xlsx`,
  theme: D = `codex`,
  isEditing: O = !1,
  manualEditUiEnabled: k = !1,
  navigationCommand: A,
  reviewTools: ee,
  bottomScrollReservePx: j,
  bottomSafeAreaPx: M,
  annotationsEnabled: N = !1,
  drawingAnnotationsEnabled: te = !1,
  artifactSearchEnabled: P = !1,
  commentThreadsEnabled: F = !1,
  workerFactory: ne,
}) {
  let re = (0, Du.useRef)(c ?? null),
    I = (0, Du.useRef)(_),
    L = (0, Du.useRef)(v);
  ((I.current = _), (L.current = v));
  let R = tn({ initialCrdtState: o, externalCrdtUpdates: t }),
    ie = (0, Du.useRef)(d),
    ae = () => {
      if ((c == null) != (u == null))
        throw Error(`Workbook source bytes and source format must be provided together.`);
      let e = c != null && u != null ? { kind: `source-bytes`, format: u, bytes: Ve(c) } : void 0,
        t;
      return (
        (t = new hl({
          collectAllCommentThreads: F,
          externalImageAssets: T != null,
          initialCrdtState: R.initialCrdtState,
          initialSelectedAddress: s,
          initialZoom: f,
          workerFactory: ne,
          onImportError: y,
          onImportReady: () => {
            (I.current?.(t, re.current), L.current?.());
          },
          ...(e == null ? { workbookProto: d ?? wu() } : { bootstrapSource: e }),
        })),
        t
      );
    },
    z = (0, Du.useRef)(null),
    oe = (0, Du.useRef)(b),
    se = (0, Du.useRef)(x);
  ((oe.current = b), (se.current = x));
  let ce = (0, Du.useRef)({
      dispose: (e) => {
        (z.current ?? Promise.resolve()).then(
          () => {
            e.destroy();
          },
          () => void 0,
        );
      },
    }),
    V = (0, Du.useRef)((e) => {
      ((z.current = e), oe.current?.(e));
    }),
    le = (0, Du.useRef)(() => {
      se.current?.();
    }),
    H = B(void 0, ae, ce.current),
    { crdtPublishingReady: ue, restoreState: de } = Cn({
      artifactLabel: `Spreadsheet`,
      controller: H,
      externalCrdtUpdates: R.externalCrdtUpdates,
      onCrdtDrain: V.current,
      onCrdtDrainAttemptFailed: le.current,
      onCrdtUpdate: S,
    }),
    fe = (0, Du.useRef)(null),
    pe = (0, Du.useRef)(0),
    me = ee?.annotation?.artifactKey;
  return (
    (0, Du.useEffect)(() => {
      if (!H || !T) return;
      let e = !1,
        t = H.subscribeImageHydrationRequests((t) => {
          if (t.length === 0) return;
          let n = pe.current + 1;
          ((pe.current = n),
            T(t)
              .then((t) => {
                if (!(e || pe.current !== n || t.length === 0)) return H.hydrateImageAssets(t);
              })
              .catch(() => {}));
        });
      return () => {
        ((e = !0), (pe.current += 1), t());
      };
    }, [H, T]),
    (0, Du.useEffect)(() => {
      !H ||
        re.current != null ||
        O ||
        !N ||
        me == null ||
        (ie.current !== d && ((ie.current = d), H.replaceFromProto(d ?? su().toProto())));
    }, [me, N, H, d, O]),
    (0, Du.useEffect)(() => {
      H?.setCollectAllCommentThreads(F);
    }, [F, H]),
    (0, Du.useEffect)(() => {
      if (!(!F || p == null))
        return (
          (p.current = H),
          () => {
            p.current === H && (p.current = null);
          }
        );
    }, [p, F, H]),
    (0, Du.useEffect)(() => {
      if (!F || H == null || g == null) return;
      let e,
        t = () => {
          let t = H.getState().overlays.allCommentThreads;
          t !== e && ((e = t), g(t));
        };
      return (t(), H.subscribe(t));
    }, [F, H, g]),
    (0, Du.useEffect)(() => {
      if (!F || H == null || m == null) return;
      let e = H.getState(),
        t = e.overlays.allCommentThreads.find(({ threadId: e }) => e === m);
      t != null &&
        (e.navigation.activeSheetName !== t.sheetName && H.setActiveSheetName(t.sheetName),
        H.setSelectedAddress(t.target.startAddress));
    }, [F, H, m]),
    (0, Du.useEffect)(() => {
      if (!H || A == null) return;
      let e,
        t = !0,
        n = () => {
          (e?.(), (e = void 0));
        },
        r = (r) => {
          if (t) {
            if (r) {
              n();
              return;
            }
            e ??= H.subscribe(a);
          }
        },
        i = () => {
          if (A.requestId === fe.current) return !0;
          let n = H.getState().navigation;
          return n.sheetNames.includes(A.sheet)
            ? n.activeSheetName === A.sheet
              ? `range` in A
                ? (Eu({ controller: H, range: A.range, sheetName: A.sheet }),
                  (fe.current = A.requestId),
                  !0)
                : H.requestNavigationTarget(A.sheet, A.objectId, A.objectKind).then((e) => {
                    if (!t) return !0;
                    if (e?.kind === `range`)
                      Eu({ controller: H, range: e.ref, sheetName: A.sheet });
                    else if (e?.kind === `floating`) {
                      let t = {
                        id: e.id,
                        kind: e.floatingKind,
                        logicalBounds: { ...e.logicalBounds },
                        ...(e.rotation == null ? {} : { rotation: e.rotation }),
                        interactionState: `selected`,
                      };
                      (H.setSelectedFloatingElement(t, { sheetName: A.sheet }),
                        H.revealFloatingElementBounds(t.logicalBounds));
                    }
                    return ((fe.current = A.requestId), !0);
                  })
              : ((e ??= H.subscribe(a)), H.setActiveSheetName(A.sheet), !1)
            : !1;
        };
      function a() {
        let e = i();
        if (typeof e == `boolean`) {
          r(e);
          return;
        }
        e.then(r);
      }
      return (
        a(),
        () => {
          ((t = !1), n());
        }
      );
    }, [H, A]),
    H
      ? (0, Ou.jsxs)(`section`, {
          className: l(`no-drag relative h-full min-h-0 bg-token-bg-primary`, e),
          style: jn(D),
          "data-codex-popcorn-editor": !0,
          "data-testid": `popcorn-electron-workbook-panel`,
          children: [
            (0, Ou.jsx)(Rl, {
              className: `h-full min-h-0`,
              controller: H,
              headerTitleContent: n,
              headerCenterContent: r,
              headerRightContent: i,
              renderHeaderZoomControl: a,
              title: E,
              theme: D,
              isEditing: O && ue,
              manualEditUiEnabled: k,
              onInteractionAttempt: w,
              onHyperlinkClick: C,
              onSelectedCommentThreadChange: F ? h : void 0,
              reviewTools: ee,
              bottomScrollReservePx: j,
              bottomSafeAreaPx: M,
              annotationHeaderButtonEnabled: !1,
              annotationsEnabled: N,
              drawingAnnotationsEnabled: te,
              artifactSearchEnabled: P,
              commentThreadsEnabled: F,
            }),
            (0, Ou.jsx)(On, { artifactLabel: `Spreadsheet`, restoreState: de }),
          ],
        })
      : null
  );
}
function Eu({ controller: e, range: t, sheetName: n }) {
  let r = j(t);
  r &&
    (e.setActiveSheetName(n),
    e.setSelectedAddress(ee(r.bounds.startRow, r.bounds.startCol)),
    e.setSelectionRect({
      r1: r.bounds.startRow,
      c1: r.bounds.startCol,
      r2: r.bounds.endRow,
      c2: r.bounds.endCol,
    }));
}
var Du, Ou;
e(() => {
  (M(), E(), (Du = t(n())), Bl(), Fe(), ce(), Cu(), gl(), fn(), Sn(), (Ou = h()));
})();
export { Tu as PopcornElectronWorkbookPanel };
//# sourceMappingURL=PopcornElectronWorkbookPanel-5e847d6e6323.js.map
