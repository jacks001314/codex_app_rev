const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dist-96cb58cd52bb.js",
      "./dist-15e5c1229202.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./dist-c49309ceeb35.js",
      "./dist-ad7e2bb8433e.js",
      "./dist-cf1fab96b747.js",
      "./dist-340268e76fe9.js",
      "./dist-a6da33db4bdb.js",
      "./dist-1714c9e08bb0.js",
      "./dist-b4e82344be81.js",
      "./dist-d7965aef2585.js",
      "./dist-aa599dcabaeb.js",
      "./dist-9a2f61daa4d5.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t, t as n } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as r,
  FBt as i,
  LNt as a,
  OFt as o,
  PBt as s,
  Qst as c,
  ZSt as l,
  cwt as u,
  iwt as d,
  kFt as f,
  mCt as p,
  nCt as m,
  yCt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AAr as g,
  Cjr as _,
  DWr as v,
  Iyt as y,
  MKr as b,
  MOr as x,
  Pyt as S,
  SGr as C,
  SUr as w,
  WKr as T,
  XHr as E,
  YHr as D,
  bHr as O,
  bKr as k,
  cHr as A,
  d_t as j,
  g0t as M,
  h0t as N,
  jAr as P,
  j_t as F,
  kAr as ee,
  lHr as te,
  oWr as I,
  sHr as ne,
  vHr as re,
  xGr as ie,
  xHr as ae,
  xjr as oe,
  yHr as se,
  zOr as ce,
} from "./app-initial-ad16eaadf81f.js";
import {
  _ as L,
  a as le,
  c as ue,
  d as de,
  f as R,
  g as fe,
  h as pe,
  l as me,
  m as he,
  n as ge,
  o as _e,
  r as ve,
  s as ye,
  u as be,
} from "./codex-diff-css-38be692bb624.js";
import { i as xe, n as Se, t as Ce } from "./register-pierre-themes-8ff08e47faf4.js";
function we({
  fileDiff: e,
  actions: t,
  renderCustomHeader: n,
  renderHeaderPrefix: r,
  renderHeaderFilenameSuffix: i,
  renderHeaderMetadata: a,
  renderAnnotation: o,
  renderGutterUtility: s,
  renderMergeConflictUtility: c,
  lineAnnotations: l,
  getHoveredLine: u,
  getInstance: d,
  getAnnotationSlotName: f = v,
}) {
  let p = n?.(e),
    m = r?.(e),
    h = i?.(e),
    g = a?.(e);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      p == null
        ? (0, z.jsxs)(z.Fragment, {
            children: [
              m != null && (0, z.jsx)(`div`, { slot: `header-prefix`, children: m }),
              h != null && (0, z.jsx)(`div`, { slot: `header-filename-suffix`, children: h }),
              g != null && (0, z.jsx)(`div`, { slot: `header-metadata`, children: g }),
            ],
          })
        : (0, z.jsx)(`div`, { slot: k, children: p }),
      o != null && l?.map((e, t) => (0, z.jsx)(`div`, { slot: f(e), children: o(e) }, t)),
      t != null &&
        c != null &&
        d != null &&
        t.map((t) => {
          if (t == null) return;
          let n = Te(t, e);
          return (0, z.jsx)(`div`, { slot: n, style: be, children: c(t, d) }, n);
        }),
      s != null && (0, z.jsx)(`div`, { slot: `gutter-utility-slot`, style: me, children: s(u) }),
    ],
  });
}
function Te(e, t) {
  let n = ne(e, t);
  return n == null
    ? void 0
    : te({ hunkIndex: n.hunkIndex, lineIndex: n.lineIndex, conflictIndex: e.conflictIndex });
}
var z;
function B() {
  return (B = e(() => {
    (T(), A(), de(), (z = a()));
  }))();
}
function Ee({
  fileDiff: e,
  oldFile: t,
  newFile: n,
  options: r,
  editorOptions: i,
  editStateKey: a,
  lineAnnotations: o,
  selectedLines: s,
  prerenderedHTML: c,
  metrics: l,
  deferCleanup: u,
  hasGutterRenderUtility: d,
  hasCustomHeader: f,
  disableWorkerPool: p,
  edit: m,
  onEditChange: h,
  onEditComplete: g,
}) {
  let _ = _e(),
    y = s !== void 0,
    b = (0, H.useContext)(Se),
    x = pe(),
    S = L((e) => h?.(e)),
    C = h == null ? void 0 : S,
    w = (0, H.useRef)(null),
    T = L((r) => {
      let i = g?.(r) ?? `reject`;
      return (
        i === `accept` &&
          (w.current = {
            fileDiff: { installed: r.fileDiff, stale: r.originalFileDiff },
            filePair:
              e == null
                ? {
                    fileDiff: r.fileDiff,
                    installed: { oldFile: r.oldFile, newFile: r.newFile },
                    stale: { oldFile: t ?? null, newFile: n ?? null },
                  }
                : null,
            annotations: { installed: r.lineAnnotations, stale: r.originalLineAnnotations },
          }),
        i
      );
    }),
    E = g == null ? void 0 : T,
    D = De({ acceptedCache: w, fileDiff: e, newFile: n, oldFile: t, parseDiffOptions: r?.parseDiffOptions }),
    k = (0, H.useRef)(null),
    A = (0, H.useRef)(null),
    j = (0, H.useRef)(null),
    M = (0, H.useRef)(null),
    N = L(() => {
      if (x == null) throw Error(`FileDiff: EditContext is not attached`);
      return x(`file-diff`, i ?? {}, a);
    }),
    P = L((e) => {
      if ((j.current?.(), (j.current = null), e != null)) {
        let t = A.current;
        if (k.current != null) {
          if (t?.fileContainer === e && t.simpleVirtualizer === _ && t.poolManager === b) {
            k.current.resume();
            return;
          }
          (k.current.cleanUp(), (M.current = null));
        }
        ((A.current = { fileContainer: e, simpleVirtualizer: _, poolManager: b }),
          _ == null
            ? (k.current = new O(
                V({
                  controlledSelection: y,
                  hasCustomHeader: f,
                  hasGutterRenderUtility: d,
                  onEditChange: C,
                  onEditComplete: E,
                  options: r,
                }),
                p ? void 0 : b,
                !0,
              ))
            : (k.current = new re(
                V({
                  controlledSelection: y,
                  hasCustomHeader: f,
                  hasGutterRenderUtility: d,
                  onEditChange: C,
                  onEditComplete: E,
                  options: r,
                }),
                _,
                l,
                p ? void 0 : b,
                !0,
              )),
          m && M.current == null && (M.current = Ae(k.current, N)),
          k.current.hydrate({ fileDiff: D, fileContainer: e, lineAnnotations: o, prerenderedHTML: c }));
      } else {
        if (k.current == null)
          throw Error(`useFileDiffInstance: A FileDiff instance should exist when unmounting`);
        let e = k.current,
          t = () => {
            (e.cleanUp(), (k.current = null), (A.current = null), (M.current = null));
          };
        u != null && !m && M.current == null ? (e.suspend(), (j.current = u(t))) : t();
      }
    });
  return (
    je(() => {
      let { current: e } = k;
      if (e == null) return;
      let t = V({
          controlledSelection: y,
          hasCustomHeader: f,
          hasGutterRenderUtility: d,
          onEditChange: C,
          onEditComplete: E,
          options: r,
        }),
        n = t !== void 0 && !ie(e.options, t);
      if ((e.setOptions(t), !m && M.current != null)) {
        let { current: e } = M;
        ((M.current = null), e());
      }
      let i = ke(D, o, w);
      (e.render({ forceRender: n, fileDiff: i.fileDiff, lineAnnotations: i.lineAnnotations }),
        s !== void 0 && e.setSelectedLines(s),
        m && M.current == null && (M.current = Ae(e, N)));
    }),
    {
      fileDiff: D,
      ref: P,
      getHoveredLine: (0, H.useCallback)(() => k.current?.getHoveredLine(), []),
      getAnnotationSlotName: (0, H.useCallback)((e) => k.current?.getAnnotationSlotName(e) ?? v(e), []),
    }
  );
}
function De({ acceptedCache: e, fileDiff: t, newFile: n, oldFile: r, parseDiffOptions: i }) {
  return (0, H.useMemo)(() => {
    if (t != null) return t;
    let { current: a } = e,
      o = a?.filePair;
    if (a != null && o != null) {
      if (Oe(r, n, o.stale) || Oe(r, n, o.installed)) return o.fileDiff;
      a.filePair = null;
    }
    return E(r ?? null, n ?? null, i);
  }, [e, t, r, n, i]);
}
function Oe(e, t, n) {
  return I(e ?? void 0, n.oldFile ?? void 0) && I(t ?? void 0, n.newFile ?? void 0);
}
function ke(e, t, n) {
  let { current: r } = n;
  if (r == null) return { fileDiff: e, lineAnnotations: t };
  let { fileDiff: i, annotations: a } = r,
    o = e;
  i != null && (w(e, i.stale) ? (o = i.installed) : (r.fileDiff = null));
  let s = t;
  return (
    a != null && (t === a.stale ? (s = a.installed) : (r.annotations = null)),
    r.fileDiff == null && r.annotations == null && r.filePair == null && (n.current = null),
    { fileDiff: o, lineAnnotations: s }
  );
}
function V({
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
        renderCustomHeader: n ? R : e?.renderCustomHeader,
        renderGutterUtility: r ? R : e?.renderGutterUtility,
        onEditChange: i,
        onEditComplete: a,
      }
    : e;
}
function Ae(e, t) {
  let n = t();
  try {
    return n.edit(e);
  } catch (e) {
    throw (n.cleanUp(), e);
  }
}
var H, je;
function U() {
  return (U = e(() => {
    (C(),
      D(),
      ae(),
      se(),
      fe(),
      he(),
      de(),
      xe(),
      le(),
      (H = i()),
      (je = typeof window > `u` ? H.useEffect : H.useLayoutEffect));
  }))();
}
function Me({
  fileDiff: e,
  options: t,
  editorOptions: n,
  editStateKey: r,
  metrics: i,
  deferCleanup: a,
  lineAnnotations: o,
  selectedLines: s,
  className: c,
  style: l,
  prerenderedHTML: u,
  renderAnnotation: d,
  renderCustomHeader: f,
  renderHeaderPrefix: p,
  renderHeaderFilenameSuffix: m,
  renderHeaderMetadata: h,
  renderGutterUtility: g,
  disableWorkerPool: _ = !1,
  edit: v = !1,
  onEditChange: y,
  onEditComplete: x,
}) {
  let {
      ref: S,
      getHoveredLine: C,
      getAnnotationSlotName: w,
    } = Ee({
      fileDiff: e,
      options: t,
      editorOptions: n,
      editStateKey: r,
      metrics: i,
      deferCleanup: a,
      lineAnnotations: o,
      selectedLines: s,
      prerenderedHTML: u,
      hasGutterRenderUtility: g != null,
      hasCustomHeader: f != null,
      disableWorkerPool: _,
      edit: v,
      onEditChange: y,
      onEditComplete: x,
    }),
    T = we({
      fileDiff: e,
      renderCustomHeader: f,
      renderHeaderPrefix: p,
      renderHeaderFilenameSuffix: m,
      renderHeaderMetadata: h,
      renderAnnotation: d,
      renderGutterUtility: g,
      lineAnnotations: o,
      getHoveredLine: C,
      getAnnotationSlotName: w,
    });
  return (0, W.jsx)(b, { ref: S, className: c, style: l, children: ue(T, u) });
}
var W;
function G() {
  return (G = e(() => {
    (T(), B(), ye(), U(), (W = a()));
  }))();
}
var Ne = n((e, t) => {
  var n = M();
  function r(e, t) {
    return n(e, t, !0);
  }
  t.exports = r;
});
function Pe(e, t, n, r) {
  if (t == null || n == null || e.isPartial || e.type === `new` || e.type === `deleted`) return e;
  let i = Fe(e.additionLines, t, n),
    a = Fe(e.deletionLines, t, n),
    o = e.hunks.filter(
      (t) =>
        r?.some(({ side: e, lineNumber: n }) => {
          let r = e === `additions` ? t.additionStart : t.deletionStart,
            i = e === `additions` ? t.additionCount : t.deletionCount;
          return n >= r && n < r + i;
        }) || !Le(e, t, i, a),
    );
  return o.length === e.hunks.length ? e : Re(e, o);
}
function Fe(e, t, n) {
  let r = new Set(),
    i = ze(e);
  return (
    i[i.length - 1] > q ||
      t.parse(e.join(``)).iterate({
        enter({ node: t }) {
          if (t.parent?.parent != null || !Ie(n, t)) return;
          let a = (0, K.default)(i, t.from) - 1,
            o = (0, K.default)(i, t.to - 1) - 1,
            s = t.to;
          for (
            let n = t.nextSibling;
            n != null &&
            !(
              n.from >= i[o + 1] ||
              n.to > i[o + 1] ||
              ![`LineComment`, `BlockComment`, `Comment`].includes(n.name) ||
              e[o].slice(s - i[o], n.from - i[o]).trim() !== ``
            );
            n = n.nextSibling
          )
            s = n.to;
          if (e[a].slice(0, t.from - i[a]).trim() !== `` || e[o].slice(s - i[o]).trim() !== ``) return !1;
          let c = !1;
          if (
            (t.toTree().iterate({
              enter({ type: e }) {
                e.isError && (c = !0);
              },
            }),
            c)
          )
            return !1;
          for (let e = a; e <= o; e += 1) r.add(e);
          return !1;
        },
      }),
    r
  );
}
function Ie(e, t) {
  switch (e) {
    case `javascript`:
    case `typescript`:
    case `tsx`:
    case `java`:
      return t.name === `ImportDeclaration`;
    case `python`:
      return t.name === `ImportStatement`;
    case `rust`:
      return (
        t.getChild(`Vis`) == null && (t.name === `UseDeclaration` || t.name === `ExternCrateDeclaration`)
      );
    case `go`:
      return t.name === `ImportDecl`;
  }
}
function Le(e, t, n, r) {
  let i = !1;
  for (let a of t.hunkContent)
    if (a.type !== `context`) {
      for (let t = a.additionLineIndex; t < a.additionLineIndex + a.additions; t += 1)
        if (n.has(t)) i = !0;
        else if (e.additionLines[t]?.trim() !== ``) return !1;
      for (let t = a.deletionLineIndex; t < a.deletionLineIndex + a.deletions; t += 1)
        if (r.has(t)) i = !0;
        else if (e.deletionLines[t]?.trim() !== ``) return !1;
    }
  return i;
}
function Re(e, t) {
  let n = [],
    r = [],
    i = [],
    a = 0,
    o = 0,
    s = 0;
  for (let c of t) {
    let t = n.length,
      l = r.length,
      u = c.hunkContent.map((t) => {
        let i = { ...t, additionLineIndex: n.length, deletionLineIndex: r.length };
        return (
          t.type === `context`
            ? (n.push(...e.additionLines.slice(t.additionLineIndex, t.additionLineIndex + t.lines)),
              r.push(...e.deletionLines.slice(t.deletionLineIndex, t.deletionLineIndex + t.lines)))
            : (n.push(...e.additionLines.slice(t.additionLineIndex, t.additionLineIndex + t.additions)),
              r.push(...e.deletionLines.slice(t.deletionLineIndex, t.deletionLineIndex + t.deletions))),
          i
        );
      }),
      d = c.additionStart - (c.additionCount === 0 ? 0 : 1),
      f = Math.max(d - a, 0);
    (i.push({
      ...c,
      additionLineIndex: t,
      deletionLineIndex: l,
      hunkContent: u,
      collapsedBefore: f,
      splitLineStart: o + f,
      unifiedLineStart: s + f,
    }),
      (a = d + c.additionCount),
      (o += f + c.splitLineCount),
      (s += f + c.unifiedLineCount));
  }
  return {
    ...e,
    additionLines: n,
    deletionLines: r,
    hunks: i,
    isPartial: !0,
    splitLineCount: o,
    unifiedLineCount: s,
    cacheKey: `${e.cacheKey ?? e.name}:hide-imports:${t.map((e) => e.additionStart).join(`,`)}`,
  };
}
function ze(e) {
  let t = [0];
  for (let n of e) t.push(t[t.length - 1] + n.length);
  return t;
}
var K, q;
function Be() {
  return (Be = e(() => {
    ((K = t(Ne(), 1)), (q = 1e6));
  }))();
}
function Ve(e, t) {
  if (t == null) return e;
  let n = He(e, `additions`, t),
    r = He(e, `deletions`, t);
  if (n.size === 0 && r.size === 0) return e;
  let i = [],
    a = 0,
    o = 0,
    s = 0,
    c = 0;
  for (let t = 0; t <= e.hunks.length; t += 1) {
    let l = e.hunks[t],
      u = l?.collapsedBefore ?? e.additionLines.length - a,
      d = 0;
    for (let t = 0; t < u; t += 1) {
      if (!n.has(a + t) && !r.has(o + t)) continue;
      let l = t;
      for (; t + 1 < u && (n.has(a + t + 1) || r.has(o + t + 1));) t += 1;
      let f = t - l + 1,
        p = a + l,
        m = o + l;
      (i.push({
        collapsedBefore: l - d,
        additionStart: p + 1,
        deletionStart: m + 1,
        additionLineIndex: p,
        deletionLineIndex: m,
        additionCount: f,
        deletionCount: f,
        additionLines: 0,
        deletionLines: 0,
        hunkContent: [{ type: `context`, lines: f, additionLineIndex: p, deletionLineIndex: m }],
        splitLineStart: s + l,
        unifiedLineStart: c + l,
        splitLineCount: f,
        unifiedLineCount: f,
        noEOFCRAdditions:
          p + f === e.additionLines.length &&
          !e.additionLines.at(-1)?.endsWith(`
`),
        noEOFCRDeletions:
          m + f === e.deletionLines.length &&
          !e.deletionLines.at(-1)?.endsWith(`
`),
      }),
        (d = t + 1));
    }
    l != null &&
      (i.push(d === 0 ? l : { ...l, collapsedBefore: u - d }),
      (a = l.additionLineIndex + l.additionCount),
      (o = l.deletionLineIndex + l.deletionCount),
      (s = l.splitLineStart + l.splitLineCount),
      (c = l.unifiedLineStart + l.unifiedLineCount));
  }
  return i.length === e.hunks.length
    ? e
    : { ...e, hunks: i, cacheKey: `${e.cacheKey ?? e.name}:structural-context` };
}
function He(e, t, n) {
  let r = t === `additions` ? e.additionLines : e.deletionLines,
    i = new Set(),
    a = [0];
  for (let e of r) a.push(a[a.length - 1] + e.length);
  if (a[a.length - 1] > We) return i;
  let o = [],
    s = [];
  for (let n of e.hunks)
    for (let e of n.hunkContent) {
      if (e.type !== `change` || e[t] === 0) continue;
      let n = t === `additions` ? e.additionLineIndex : e.deletionLineIndex;
      (o.push(a[n]), s.push(a[n + e[t]]));
    }
  return (
    o.length === 0 ||
      n.parse(r.join(``)).iterate({
        enter({ node: e }) {
          let t = (0, Ue.default)(s, e.from + 1);
          if (t === s.length || o[t] >= e.to) return !1;
          if (!Y.has(e.name) && !Ke.has(e.name)) return;
          let n = e.name === `ArrowFunction` ? e.getChild(`Arrow`) : e.firstChild,
            r = e.lastChild;
          if (n == null || r == null || n.type.isError || r.type.isError) return;
          let c = e.from;
          if (Y.has(e.name)) {
            let t = e.parent;
            c = t != null && !Y.has(t.name) ? t.from : e.from;
            for (let t = e.prevSibling; t != null; t = t.prevSibling)
              if (t.name === `Body` || t.name === `Block`) {
                c = t.nextSibling?.from ?? e.from;
                break;
              }
          }
          let l = (0, J.default)(a, c) - 1,
            u = (0, J.default)(a, n.to - 1) - 1;
          if (l !== (0, J.default)(a, e.to - 1) - 1) {
            i.add(l);
            for (let e = Math.max(l + 1, u - Ge + 2); e <= u; e += 1) i.add(e);
          }
        },
      }),
    i
  );
}
var Ue, J, We, Ge, Y, Ke;
function qe() {
  return (qe = e(() => {
    ((Ue = t(N(), 1)),
      (J = t(Ne(), 1)),
      (We = 1e6),
      (Ge = 8),
      (Y = new Set([
        `Body`,
        `Block`,
        `ClassBody`,
        `EnumBody`,
        `ConstructorBody`,
        `InterfaceBody`,
        `AnnotationTypeBody`,
        `ModuleBody`,
        `DeclarationList`,
        `FieldDeclarationList`,
        `OrderedFieldDeclarationList`,
        `EnumVariantList`,
        `MatchBlock`,
        `FieldInitializerList`,
        `StructBody`,
        `SwitchBlock`,
        `SelectBlock`,
        `LiteralValue`,
      ])),
      (Ke = new Set([
        `ObjectExpression`,
        `ArrayExpression`,
        `ArrayInitializer`,
        `TypeLiteral`,
        `DictionaryExpression`,
        `SetExpression`,
        `TupleExpression`,
        `ArrowFunction`,
        `ParenthesizedExpression`,
        `JSXElement`,
      ])));
  }))();
}
function Je(e) {
  let t = e.hunks.at(-1);
  if (!(
    e.isPartial ||
    t == null ||
    e.type === `new` ||
    e.type === `deleted` ||
    (t.additionLineIndex + t.additionCount === e.additionLines.length &&
      e.hunks.every((e) => e.collapsedBefore === 0))
  ))
    return Ye(e);
}
function Ye(e) {
  switch (e.name.split(`.`).at(-1)?.toLowerCase()) {
    case `ts`:
    case `mts`:
    case `cts`:
      return `typescript`;
    case `tsx`:
      return `tsx`;
    case `js`:
    case `jsx`:
    case `mjs`:
    case `cjs`:
      return `javascript`;
    case `py`:
    case `pyi`:
      return `python`;
    case `rs`:
      return `rust`;
    case `go`:
      return `go`;
    case `java`:
      return `java`;
    case void 0:
    default:
      return;
  }
}
async function Xe(e) {
  switch (e) {
    case `javascript`:
    case `typescript`:
    case `tsx`: {
      let { parser: t } = await o(
        async () => {
          let { parser: e } = await import(`./dist-96cb58cd52bb.js`);
          return { parser: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4]),
        import.meta.url,
      );
      return t.configure({ dialect: { typescript: `ts`, tsx: `ts jsx`, javascript: `jsx` }[e] });
    }
    case `python`:
      return (
        await o(
          async () => {
            let { parser: e } = await import(`./dist-cf1fab96b747.js`);
            return { parser: e };
          },
          __vite__mapDeps([5, 6, 2, 3, 4]),
          import.meta.url,
        )
      ).parser;
    case `rust`:
      return (
        await o(
          async () => {
            let { parser: e } = await import(`./dist-a6da33db4bdb.js`);
            return { parser: e };
          },
          __vite__mapDeps([7, 8, 2, 3, 4]),
          import.meta.url,
        )
      ).parser;
    case `go`:
      return (
        await o(
          async () => {
            let { parser: e } = await import(`./dist-b4e82344be81.js`);
            return { parser: e };
          },
          __vite__mapDeps([9, 10, 2, 3, 4]),
          import.meta.url,
        )
      ).parser;
    case `java`:
      return (
        await o(
          async () => {
            let { parser: e } = await import(`./dist-aa599dcabaeb.js`);
            return { parser: e };
          },
          __vite__mapDeps([11, 12, 2, 3, 4]),
          import.meta.url,
        )
      ).parser;
  }
}
function Ze() {
  return (Ze = e(() => {
    f();
  }))();
}
function Qe(e) {
  let t = (0, Z.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n =
          e.reviewPath == null
            ? (0, Q.jsx)(tt, { ...e })
            : (0, Q.jsx)(et, { ...e, reviewPath: e.reviewPath })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function $e(e) {
  return (e.hunkSeparators ?? `line-info`) === `line-info` && !e.expandUnchanged && e.loadDiffFiles == null
    ? Je(e.fileDiff)
    : void 0;
}
function et(e) {
  let t = (0, Z.c)(22),
    n = m(at, e.reviewPath),
    r;
  t[0] === e ? (r = t[1]) : ((r = $e(e)), (t[0] = e), (t[1] = r));
  let i = r,
    a;
  t[2] !== i || t[3] !== n || t[4] !== e.fileDiff
    ? ((a =
        i ??
        (n && !e.fileDiff.isPartial && e.fileDiff.type !== `new` && e.fileDiff.type !== `deleted`
          ? Ye(e.fileDiff)
          : void 0)),
      (t[2] = i),
      (t[3] = n),
      (t[4] = e.fileDiff),
      (t[5] = a))
    : (a = t[5]);
  let o = a,
    s = _(i != null && `1894478438`),
    c = s || n,
    l;
  t[6] === c ? (l = t[7]) : ((l = { enabled: c }), (t[6] = c), (t[7] = l));
  let { data: u } = m($, o, l),
    d;
  t[8] !== u || t[9] !== e.fileDiff || t[10] !== s
    ? ((d = s ? Ve(e.fileDiff, u) : e.fileDiff), (t[8] = u), (t[9] = e.fileDiff), (t[10] = s), (t[11] = d))
    : (d = t[11]);
  let f = d,
    p;
  t[12] !== f || t[13] !== n || t[14] !== o || t[15] !== u || t[16] !== e.lineAnnotations
    ? ((p = n ? Pe(f, u, o, e.lineAnnotations) : f),
      (t[12] = f),
      (t[13] = n),
      (t[14] = o),
      (t[15] = u),
      (t[16] = e.lineAnnotations),
      (t[17] = p))
    : (p = t[17]);
  let h = p,
    g = f === e.fileDiff ? void 0 : 3,
    v;
  return (
    t[18] !== h || t[19] !== e || t[20] !== g
      ? ((v = (0, Q.jsx)(X, { ...e, fileDiff: h, collapsedContextThreshold: g })),
        (t[18] = h),
        (t[19] = e),
        (t[20] = g),
        (t[21] = v))
      : (v = t[21]),
    v
  );
}
function tt(e) {
  let t = (0, Z.c)(5),
    n;
  t[0] === e ? (n = t[1]) : ((n = $e(e)), (t[0] = e), (t[1] = n));
  let r = n,
    i;
  return (
    t[2] !== r || t[3] !== e
      ? ((i = r == null ? (0, Q.jsx)(X, { ...e }) : (0, Q.jsx)(nt, { ...e, language: r })),
        (t[2] = r),
        (t[3] = e),
        (t[4] = i))
      : (i = t[4]),
    i
  );
}
function nt(e) {
  let t = (0, Z.c)(6),
    { language: n, ...r } = e,
    i = _(`1894478438`),
    a;
  t[0] === i ? (a = t[1]) : ((a = { enabled: i }), (t[0] = i), (t[1] = a));
  let { data: o } = m($, n, a),
    s = i ? Ve(r.fileDiff, o) : r.fileDiff,
    c = s === r.fileDiff ? void 0 : 3,
    l;
  return (
    t[2] !== s || t[3] !== r || t[4] !== c
      ? ((l = (0, Q.jsx)(X, { ...r, fileDiff: s, collapsedContextThreshold: c })),
        (t[2] = s),
        (t[3] = r),
        (t[4] = c),
        (t[5] = l))
      : (l = t[5]),
    l
  );
}
function X(e) {
  let t = (0, Z.c)(52),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    _,
    v,
    y,
    b,
    x;
  if (t[0] !== e) {
    let {
      alignCommentGutter: g,
      className: S,
      fileDiff: C,
      diffIndicators: w,
      hunkSeparators: T,
      reviewPath: E,
      lineAnnotations: D,
      lineDiffType: O,
      metrics: k,
      onGutterUtilityClick: A,
      onPostRender: j,
      onPostRenderInstance: M,
      renderAnnotation: N,
      selectedLines: P,
      overflow: F,
      theme: ee,
      themeType: te,
      useReviewLineInfoSeparators: I,
      collapsedContextThreshold: ne,
      ...re
    } = e;
    ((m = g),
      (n = S),
      (i = C),
      (h = w),
      (_ = T),
      (a = D),
      (o = O),
      (s = k),
      (c = A),
      (l = j),
      (u = M),
      (d = N),
      (p = P),
      (v = F),
      (x = ee),
      (y = te),
      (b = I),
      (r = ne),
      (f = re),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m),
      (t[14] = h),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x));
  } else
    ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]),
      (h = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (b = t[18]),
      (x = t[19]));
  let S = m !== void 0 && m,
    C = h === void 0 ? `bars` : h,
    w = _ === void 0 ? `line-info` : _,
    T = v === void 0 ? `scroll` : v,
    E = y === void 0 ? `system` : y,
    D = b !== void 0 && b,
    O = (0, rt.useContext)(ee),
    k;
  t[20] === O ? (k = t[21]) : ((k = O == null ? void 0 : (e) => g(O, e)), (t[20] = O), (t[21] = k));
  let A = c != null,
    j;
  t[22] !== l || t[23] !== u
    ? ((j = (e, t, n) => {
        (u?.(e, t, n), n !== `unmount` && l?.(e));
      }),
      (t[22] = l),
      (t[23] = u),
      (t[24] = j))
    : (j = t[24]);
  let M;
  t[25] !== S || t[26] !== D
    ? ((M = ge({
        alignCommentGutter: S,
        includeDiffHeader: !0,
        includeSimpleLineSeparators: !0,
        rootSelector: it,
        surface: `var(--codex-diffs-surface)`,
        useReviewLineInfoSeparators: D,
      })),
      (t[25] = S),
      (t[26] = D),
      (t[27] = M))
    : (M = t[27]);
  let N;
  t[28] !== r ||
  t[29] !== C ||
  t[30] !== w ||
  t[31] !== o ||
  t[32] !== c ||
  t[33] !== T ||
  t[34] !== f ||
  t[35] !== M ||
  t[36] !== A ||
  t[37] !== j ||
  t[38] !== x ||
  t[39] !== E
    ? ((N = {
        overflow: T,
        hunkSeparators: w,
        collapsedContextThreshold: r,
        themeType: E,
        theme: x,
        disableFileHeader: !0,
        diffIndicators: C,
        enableGutterUtility: A,
        lineDiffType: o,
        onGutterUtilityClick: c,
        onPostRender: j,
        unsafeCSS: M,
        ...f,
      }),
      (t[28] = r),
      (t[29] = C),
      (t[30] = w),
      (t[31] = o),
      (t[32] = c),
      (t[33] = T),
      (t[34] = f),
      (t[35] = M),
      (t[36] = A),
      (t[37] = j),
      (t[38] = x),
      (t[39] = E),
      (t[40] = N))
    : (N = t[40]);
  let P;
  t[41] !== i || t[42] !== a || t[43] !== s || t[44] !== d || t[45] !== p || t[46] !== N || t[47] !== k
    ? ((P = (0, Q.jsx)(Me, {
        deferCleanup: k,
        fileDiff: i,
        lineAnnotations: a,
        metrics: s,
        renderAnnotation: d,
        selectedLines: p,
        options: N,
      })),
      (t[41] = i),
      (t[42] = a),
      (t[43] = s),
      (t[44] = d),
      (t[45] = p),
      (t[46] = N),
      (t[47] = k),
      (t[48] = P))
    : (P = t[48]);
  let F;
  return (
    t[49] !== n || t[50] !== P
      ? ((F = (0, Q.jsx)(`div`, { className: n, children: P })), (t[49] = n), (t[50] = P), (t[51] = F))
      : (F = t[51]),
    F
  );
}
var Z, rt, Q, it, at, $;
function ot() {
  return (ot = e(() => {
    ((Z = s()),
      G(),
      d(),
      l(),
      (rt = i()),
      P(),
      F(),
      ve(),
      y(),
      r(),
      ce(),
      oe(),
      Be(),
      qe(),
      Ce(),
      Ze(),
      (Q = a()),
      (it = `:is([data-diff], [data-file])`),
      (at = h(x, (e, { get: t }) => {
        if (!t(S)) return !1;
        let n = t(j)?.location;
        return n?.domain !== `diff` || n.path !== e || n.hunkId === `path`;
      })),
      ($ = p(c, (e) => ({
        queryKey: [`diff-context-parser`, e],
        queryFn: e == null ? u : () => Xe(e),
        staleTime: 1 / 0,
      }))));
  }))();
}
export { we as i, ot as n, B as r, Qe as t };
//# sourceMappingURL=file-diff-presentation-eb82cf883deb.js.map
