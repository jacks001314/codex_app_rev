import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { xMt as t, yzt as n } from "./app-shared-bbfeca5e5737.js";
import {
  ARr as r,
  DBr as i,
  MRr as a,
  NRr as o,
  Nzr as s,
  OBr as c,
  RVr as l,
  XVr as u,
  fzr as d,
  jRr as f,
} from "./app-initial-5851df3f6cb1.js";
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
} from "./codex-diff-css-681a898586a0.js";
import { n as C, t as w } from "./renderFileChildren-4eb3bc301162.js";
import { i as T, n as E } from "./register-pierre-themes-26873099a398.js";
function D({
  file: e,
  options: t,
  editorOptions: n,
  editStateKey: o,
  lineAnnotations: c,
  selectedLines: l,
  prerenderedHTML: u,
  metrics: d,
  hasGutterRenderUtility: f,
  hasCustomHeader: m,
  disableWorkerPool: h,
  edit: g,
  onEditChange: _,
  onEditComplete: v,
}) {
  let b = x(),
    S = l !== void 0,
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
      return w(`file`, n ?? {}, o);
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
                hasGutterRenderUtility: f,
                onEditChange: D,
                onEditComplete: F,
                options: t,
              }),
              h ? void 0 : C,
              !0,
            ))
          : (I.current = new r(
              k({
                controlledSelection: S,
                hasCustomHeader: m,
                hasGutterRenderUtility: f,
                onEditChange: D,
                onEditComplete: F,
                options: t,
              }),
              b,
              d,
              h ? void 0 : C,
              !0,
            )),
          g && L.current == null && (L.current = A(I.current, R)),
          I.current.hydrate({ file: e, fileContainer: n, lineAnnotations: c, prerenderedHTML: u }));
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
          hasGutterRenderUtility: f,
          onEditChange: D,
          onEditComplete: F,
          options: t,
        }),
        a = r !== void 0 && !i(n.options, r);
      if ((n.setOptions(r), !g && L.current != null)) {
        let { current: e } = L;
        ((L.current = null), e());
      }
      let o = O(e, c, N);
      (n.render({ file: o.file, lineAnnotations: o.lineAnnotations, forceRender: a }),
        l !== void 0 && n.setSelectedLines(l),
        g && L.current == null && (L.current = A(n, R)));
    }),
    {
      ref: z,
      getHoveredLine: (0, j.useCallback)(() => I.current?.getHoveredLine(), []),
      getAnnotationSlotName: (0, j.useCallback)((e) => I.current?.getAnnotationSlotName(e) ?? s(e), []),
    }
  );
}
function O(e, t, n) {
  let { current: r } = n;
  if (r == null) return { file: e, lineAnnotations: t };
  let { file: i, annotations: a } = r,
    o = e;
  i != null && (d(e, i.stale) ? (o = i.installed) : (r.file = null));
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
    (c(),
      o(),
      f(),
      v(),
      b(),
      g(),
      T(),
      m(),
      (j = n()),
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
  metrics: o,
  className: s,
  style: c,
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
      metrics: o,
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
  return (0, F.jsx)(l, { ref: S, className: s, style: c, children: h(E, g) });
}
var F;
function I() {
  return (I = e(() => {
    (u(), w(), S(), N(), (F = t()));
  }))();
}
export { I as n, P as t };
//# sourceMappingURL=File-f16a49bb19bf.js.map
