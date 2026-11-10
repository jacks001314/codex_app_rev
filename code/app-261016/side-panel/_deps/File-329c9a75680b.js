import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t, LNt as n } from "./app-shared-2feb3d4c6fcc.js";
import {
  DUr as r,
  DWr as i,
  EUr as a,
  MKr as o,
  SGr as s,
  TUr as c,
  WKr as l,
  oWr as u,
  wUr as d,
  xGr as f,
} from "./app-initial-ad16eaadf81f.js";
import {
  _ as p,
  a as m,
  c as h,
  d as g,
  f as _,
  g as v,
  h as y,
  m as b,
  o as x,
  s as S,
} from "./codex-diff-css-38be692bb624.js";
import { n as C, t as w } from "./renderFileChildren-516d08134e55.js";
import { i as T, n as E } from "./register-pierre-themes-8ff08e47faf4.js";
function D({
  file: e,
  options: t,
  editorOptions: n,
  editStateKey: r,
  lineAnnotations: o,
  selectedLines: s,
  prerenderedHTML: c,
  metrics: l,
  hasGutterRenderUtility: u,
  hasCustomHeader: m,
  disableWorkerPool: h,
  edit: g,
  onEditChange: _,
  onEditComplete: v,
}) {
  let b = x(),
    S = s !== void 0,
    C = (0, j.useContext)(E),
    w = y(),
    T = p((e) => _?.(e)),
    D = _ == null ? void 0 : T,
    N = (0, j.useRef)(null),
    P = p((e) => {
      let t = v?.(e) ?? `reject`;
      return (
        t === `accept` &&
          (N.current = {
            file: { installed: e.file, stale: e.originalFile },
            annotations: { installed: e.lineAnnotations, stale: e.originalLineAnnotations },
          }),
        t
      );
    }),
    F = v == null ? void 0 : P,
    I = (0, j.useRef)(null),
    L = (0, j.useRef)(null),
    R = p(() => {
      if (w == null) throw Error(`File: EditContext is not attached`);
      return w(`file`, n ?? {}, r);
    }),
    z = p((n) => {
      if (n != null) {
        if (I.current != null)
          throw Error(`File: An instance should not already exist when a node is created`);
        (b == null
          ? (I.current = new a(
              k({
                controlledSelection: S,
                hasCustomHeader: m,
                hasGutterRenderUtility: u,
                onEditChange: D,
                onEditComplete: F,
                options: t,
              }),
              h ? void 0 : C,
              !0,
            ))
          : (I.current = new d(
              k({
                controlledSelection: S,
                hasCustomHeader: m,
                hasGutterRenderUtility: u,
                onEditChange: D,
                onEditComplete: F,
                options: t,
              }),
              b,
              l,
              h ? void 0 : C,
              !0,
            )),
          g && L.current == null && (L.current = A(I.current, R)),
          I.current.hydrate({ file: e, fileContainer: n, lineAnnotations: o, prerenderedHTML: c }));
      } else {
        if (I.current == null) throw Error(`File: A File instance should exist when unmounting`);
        (I.current.cleanUp(), (I.current = null), (L.current = null));
      }
    });
  return (
    M(() => {
      let { current: n } = I;
      if (n == null) return;
      let r = k({
          controlledSelection: S,
          hasCustomHeader: m,
          hasGutterRenderUtility: u,
          onEditChange: D,
          onEditComplete: F,
          options: t,
        }),
        i = r !== void 0 && !f(n.options, r);
      if ((n.setOptions(r), !g && L.current != null)) {
        let { current: e } = L;
        ((L.current = null), e());
      }
      let a = O(e, o, N);
      (n.render({ file: a.file, lineAnnotations: a.lineAnnotations, forceRender: i }),
        s !== void 0 && n.setSelectedLines(s),
        g && L.current == null && (L.current = A(n, R)));
    }),
    {
      ref: z,
      getHoveredLine: (0, j.useCallback)(() => I.current?.getHoveredLine(), []),
      getAnnotationSlotName: (0, j.useCallback)((e) => I.current?.getAnnotationSlotName(e) ?? i(e), []),
    }
  );
}
function O(e, t, n) {
  let { current: r } = n;
  if (r == null) return { file: e, lineAnnotations: t };
  let { file: i, annotations: a } = r,
    o = e;
  i != null && (u(e, i.stale) ? (o = i.installed) : (r.file = null));
  let s = t;
  return (
    a != null && (t === a.stale ? (s = a.installed) : (r.annotations = null)),
    r.file == null && r.annotations == null && (n.current = null),
    { file: o, lineAnnotations: s }
  );
}
function k({
  options: e,
  controlledSelection: t,
  hasCustomHeader: n,
  hasGutterRenderUtility: r,
  onEditChange: i,
  onEditComplete: a,
}) {
  return t || r || n || i != null || a != null
    ? {
        ...e,
        controlledSelection: t,
        renderCustomHeader: n ? _ : e?.renderCustomHeader,
        renderGutterUtility: r ? _ : e?.renderGutterUtility,
        onEditChange: i,
        onEditComplete: a,
      }
    : e;
}
function A(e, t) {
  let n = t();
  try {
    return n.edit(e);
  } catch (e) {
    throw (n.cleanUp(), e);
  }
}
var j, M;
function N() {
  return (N = e(() => {
    (s(),
      r(),
      c(),
      v(),
      b(),
      g(),
      T(),
      m(),
      (j = t()),
      (M = typeof window > `u` ? j.useEffect : j.useLayoutEffect));
  }))();
}
function P({
  file: e,
  lineAnnotations: t,
  selectedLines: n,
  options: r,
  editorOptions: i,
  editStateKey: a,
  metrics: s,
  className: c,
  style: l,
  renderAnnotation: u,
  renderCustomHeader: d,
  renderHeaderPrefix: f,
  renderHeaderFilenameSuffix: p,
  renderHeaderMetadata: m,
  prerenderedHTML: g,
  renderGutterUtility: _,
  disableWorkerPool: v = !1,
  edit: y = !1,
  onEditChange: b,
  onEditComplete: x,
}) {
  let {
      ref: S,
      getHoveredLine: w,
      getAnnotationSlotName: T,
    } = D({
      file: e,
      options: r,
      editorOptions: i,
      editStateKey: a,
      metrics: s,
      lineAnnotations: t,
      selectedLines: n,
      prerenderedHTML: g,
      hasGutterRenderUtility: _ != null,
      hasCustomHeader: d != null,
      disableWorkerPool: v,
      edit: y,
      onEditChange: b,
      onEditComplete: x,
    }),
    E = C({
      file: e,
      renderAnnotation: u,
      renderCustomHeader: d,
      renderHeaderPrefix: f,
      renderHeaderFilenameSuffix: p,
      renderHeaderMetadata: m,
      renderGutterUtility: _,
      lineAnnotations: t,
      getHoveredLine: w,
      getAnnotationSlotName: T,
    });
  return (0, F.jsx)(o, { ref: S, className: c, style: l, children: h(E, g) });
}
var F;
function I() {
  return (I = e(() => {
    (l(), w(), S(), N(), (F = n()));
  }))();
}
export { I as n, P as t };
//# sourceMappingURL=File-329c9a75680b.js.map
