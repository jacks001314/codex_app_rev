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
  Cot as r,
  Pxt as i,
  USt as a,
  Zxt as o,
  fPt as s,
  nSt as c,
  pPt as l,
  vzt as u,
  wot as d,
  xMt as f,
  yzt as p,
  zSt as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as g,
  DBr as _,
  DLr as v,
  ELr as y,
  EVr as b,
  Nzr as x,
  OBr as S,
  ORr as C,
  RVr as w,
  Svt as T,
  TLr as E,
  XVr as D,
  b1t as O,
  bgt as k,
  dEr as A,
  eDr as j,
  egt as M,
  fEr as N,
  fzr as P,
  gwr as F,
  hLr as I,
  mLr as ee,
  nDr as L,
  nRr as te,
  pEr as ne,
  pLr as re,
  tRr as ie,
  wLr as ae,
  wvt as oe,
  y1t as se,
} from "./app-initial-5851df3f6cb1.js";
import {
  _ as R,
  a as ce,
  c as le,
  d as ue,
  f as de,
  g as fe,
  h as pe,
  l as me,
  m as he,
  n as ge,
  o as _e,
  r as ve,
  s as ye,
  u as be,
} from "./codex-diff-css-681a898586a0.js";
import { i as xe, n as Se, t as Ce } from "./register-pierre-themes-26873099a398.js";
function z({
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
  getAnnotationSlotName: f = x,
}) {
  let p = n?.(e),
    m = r?.(e),
    h = i?.(e),
    g = a?.(e);
  return (0, B.jsxs)(B.Fragment, {
    children: [
      p == null
        ? (0, B.jsxs)(B.Fragment, {
            children: [
              m != null && (0, B.jsx)(`div`, { slot: `header-prefix`, children: m }),
              h != null && (0, B.jsx)(`div`, { slot: `header-filename-suffix`, children: h }),
              g != null && (0, B.jsx)(`div`, { slot: `header-metadata`, children: g }),
            ],
          })
        : (0, B.jsx)(`div`, { slot: b, children: p }),
      o != null && l?.map((e, t) => (0, B.jsx)(`div`, { slot: f(e), children: o(e) }, t)),
      t != null &&
        c != null &&
        d != null &&
        t.map((t) => {
          if (t == null) return;
          let n = we(t, e);
          return (0, B.jsx)(`div`, { slot: n, style: be, children: c(t, d) }, n);
        }),
      s != null && (0, B.jsx)(`div`, { slot: `gutter-utility-slot`, style: me, children: s(u) }),
    ],
  });
}
function we(e, t) {
  let n = re(e, t);
  return n == null
    ? void 0
    : I({ hunkIndex: n.hunkIndex, lineIndex: n.lineIndex, conflictIndex: e.conflictIndex });
}
var B;
function V() {
  return (V = e(() => {
    (D(), ee(), ue(), (B = f()));
  }))();
}
function Te({
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
  let v = _e(),
    b = s !== void 0,
    S = (0, U.useContext)(Se),
    C = pe(),
    w = R((e) => h?.(e)),
    T = h == null ? void 0 : w,
    E = (0, U.useRef)(null),
    D = R((r) => {
      let i = g?.(r) ?? `reject`;
      return (
        i === `accept` &&
          (E.current = {
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
    O = g == null ? void 0 : D,
    k = Ee({ acceptedCache: E, fileDiff: e, newFile: n, oldFile: t, parseDiffOptions: r?.parseDiffOptions }),
    A = (0, U.useRef)(null),
    j = (0, U.useRef)(null),
    M = (0, U.useRef)(null),
    N = (0, U.useRef)(null),
    P = R(() => {
      if (C == null) throw Error(`FileDiff: EditContext is not attached`);
      return C(`file-diff`, i ?? {}, a);
    }),
    F = R((e) => {
      if ((M.current?.(), (M.current = null), e != null)) {
        let t = j.current;
        if (A.current != null) {
          if (t?.fileContainer === e && t.simpleVirtualizer === v && t.poolManager === S) {
            A.current.resume();
            return;
          }
          (A.current.cleanUp(), (N.current = null));
        }
        ((j.current = { fileContainer: e, simpleVirtualizer: v, poolManager: S }),
          v == null
            ? (A.current = new y(
                H({
                  controlledSelection: b,
                  hasCustomHeader: f,
                  hasGutterRenderUtility: d,
                  onEditChange: T,
                  onEditComplete: O,
                  options: r,
                }),
                p ? void 0 : S,
                !0,
              ))
            : (A.current = new ae(
                H({
                  controlledSelection: b,
                  hasCustomHeader: f,
                  hasGutterRenderUtility: d,
                  onEditChange: T,
                  onEditComplete: O,
                  options: r,
                }),
                v,
                l,
                p ? void 0 : S,
                !0,
              )),
          m && N.current == null && (N.current = ke(A.current, P)),
          A.current.hydrate({ fileDiff: k, fileContainer: e, lineAnnotations: o, prerenderedHTML: c }));
      } else {
        if (A.current == null)
          throw Error(`useFileDiffInstance: A FileDiff instance should exist when unmounting`);
        let e = A.current,
          t = () => {
            (e.cleanUp(), (A.current = null), (j.current = null), (N.current = null));
          };
        u != null && !m && N.current == null ? (e.suspend(), (M.current = u(t))) : t();
      }
    });
  return (
    Ae(() => {
      let { current: e } = A;
      if (e == null) return;
      let t = H({
          controlledSelection: b,
          hasCustomHeader: f,
          hasGutterRenderUtility: d,
          onEditChange: T,
          onEditComplete: O,
          options: r,
        }),
        n = t !== void 0 && !_(e.options, t);
      if ((e.setOptions(t), !m && N.current != null)) {
        let { current: e } = N;
        ((N.current = null), e());
      }
      let i = Oe(k, o, E);
      (e.render({ forceRender: n, fileDiff: i.fileDiff, lineAnnotations: i.lineAnnotations }),
        s !== void 0 && e.setSelectedLines(s),
        m && N.current == null && (N.current = ke(e, P)));
    }),
    {
      fileDiff: k,
      ref: F,
      getHoveredLine: (0, U.useCallback)(() => A.current?.getHoveredLine(), []),
      getAnnotationSlotName: (0, U.useCallback)((e) => A.current?.getAnnotationSlotName(e) ?? x(e), []),
    }
  );
}
function Ee({ acceptedCache: e, fileDiff: t, newFile: n, oldFile: r, parseDiffOptions: i }) {
  return (0, U.useMemo)(() => {
    if (t != null) return t;
    let { current: a } = e,
      o = a?.filePair;
    if (a != null && o != null) {
      if (De(r, n, o.stale) || De(r, n, o.installed)) return o.fileDiff;
      a.filePair = null;
    }
    return te(r ?? null, n ?? null, i);
  }, [e, t, r, n, i]);
}
function De(e, t, n) {
  return P(e ?? void 0, n.oldFile ?? void 0) && P(t ?? void 0, n.newFile ?? void 0);
}
function Oe(e, t, n) {
  let { current: r } = n;
  if (r == null) return { fileDiff: e, lineAnnotations: t };
  let { fileDiff: i, annotations: a } = r,
    o = e;
  i != null && (C(e, i.stale) ? (o = i.installed) : (r.fileDiff = null));
  let s = t;
  return (
    a != null && (t === a.stale ? (s = a.installed) : (r.annotations = null)),
    r.fileDiff == null && r.annotations == null && r.filePair == null && (n.current = null),
    { fileDiff: o, lineAnnotations: s }
  );
}
function H({
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
        renderCustomHeader: n ? de : e?.renderCustomHeader,
        renderGutterUtility: r ? de : e?.renderGutterUtility,
        onEditChange: i,
        onEditComplete: a,
      }
    : e;
}
function ke(e, t) {
  let n = t();
  try {
    return n.edit(e);
  } catch (e) {
    throw (n.cleanUp(), e);
  }
}
var U, Ae;
function je() {
  return (je = e(() => {
    (S(),
      ie(),
      v(),
      E(),
      fe(),
      he(),
      ue(),
      xe(),
      ce(),
      (U = p()),
      (Ae = typeof window > `u` ? U.useEffect : U.useLayoutEffect));
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
  onEditComplete: b,
}) {
  let {
      ref: x,
      getHoveredLine: S,
      getAnnotationSlotName: C,
    } = Te({
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
      onEditComplete: b,
    }),
    T = z({
      fileDiff: e,
      renderCustomHeader: f,
      renderHeaderPrefix: p,
      renderHeaderFilenameSuffix: m,
      renderHeaderMetadata: h,
      renderAnnotation: d,
      renderGutterUtility: g,
      lineAnnotations: o,
      getHoveredLine: S,
      getAnnotationSlotName: C,
    });
  return (0, W.jsx)(w, { ref: x, className: c, style: l, children: le(T, u) });
}
var W;
function G() {
  return (G = e(() => {
    (D(), V(), ye(), je(), (W = f()));
  }))();
}
var Ne = n((e, t) => {
  var n = O();
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
    i[i.length - 1] > Be ||
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
var K, Be;
function q() {
  return (q = e(() => {
    ((K = t(Ne(), 1)), (Be = 1e6));
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
    ((Ue = t(se(), 1)),
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
      let { parser: t } = await s(
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
        await s(
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
        await s(
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
        await s(
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
        await s(
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
    l();
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
    n = h(at, e.reviewPath),
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
    s = L(i != null && `1894478438`),
    c = s || n,
    l;
  t[6] === c ? (l = t[7]) : ((l = { enabled: c }), (t[6] = c), (t[7] = l));
  let { data: u } = h($, o, l),
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
  let m = p,
    g = f === e.fileDiff ? void 0 : 3,
    _;
  return (
    t[18] !== m || t[19] !== e || t[20] !== g
      ? ((_ = (0, Q.jsx)(X, { ...e, fileDiff: m, collapsedContextThreshold: g })),
        (t[18] = m),
        (t[19] = e),
        (t[20] = g),
        (t[21] = _))
      : (_ = t[21]),
    _
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
    i = L(`1894478438`),
    a;
  t[0] === i ? (a = t[1]) : ((a = { enabled: i }), (t[0] = i), (t[1] = a));
  let { data: o } = h($, n, a),
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
    g,
    _,
    v,
    y,
    b;
  if (t[0] !== e) {
    let {
      alignCommentGutter: x,
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
      theme: I,
      themeType: ee,
      useReviewLineInfoSeparators: L,
      collapsedContextThreshold: te,
      ...ne
    } = e;
    ((m = x),
      (n = S),
      (i = C),
      (h = w),
      (g = T),
      (a = D),
      (o = O),
      (s = k),
      (c = A),
      (l = j),
      (u = M),
      (d = N),
      (p = P),
      (_ = F),
      (b = I),
      (v = ee),
      (y = L),
      (r = te),
      (f = ne),
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
      (t[15] = g),
      (t[16] = _),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b));
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
      (g = t[15]),
      (_ = t[16]),
      (v = t[17]),
      (y = t[18]),
      (b = t[19]));
  let x = m !== void 0 && m,
    S = h === void 0 ? `bars` : h,
    C = g === void 0 ? `line-info` : g,
    w = _ === void 0 ? `scroll` : _,
    T = v === void 0 ? `system` : v,
    E = y !== void 0 && y,
    D = (0, rt.useContext)(A),
    O;
  t[20] === D ? (O = t[21]) : ((O = D == null ? void 0 : (e) => N(D, e)), (t[20] = D), (t[21] = O));
  let k = c != null,
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
  t[25] !== x || t[26] !== E
    ? ((M = ge({
        alignCommentGutter: x,
        includeDiffHeader: !0,
        includeSimpleLineSeparators: !0,
        rootSelector: it,
        surface: `var(--codex-diffs-surface)`,
        useReviewLineInfoSeparators: E,
      })),
      (t[25] = x),
      (t[26] = E),
      (t[27] = M))
    : (M = t[27]);
  let P;
  t[28] !== r ||
  t[29] !== S ||
  t[30] !== C ||
  t[31] !== o ||
  t[32] !== c ||
  t[33] !== w ||
  t[34] !== f ||
  t[35] !== M ||
  t[36] !== k ||
  t[37] !== j ||
  t[38] !== b ||
  t[39] !== T
    ? ((P = {
        overflow: w,
        hunkSeparators: C,
        collapsedContextThreshold: r,
        themeType: T,
        theme: b,
        disableFileHeader: !0,
        diffIndicators: S,
        enableGutterUtility: k,
        lineDiffType: o,
        onGutterUtilityClick: c,
        onPostRender: j,
        unsafeCSS: M,
        ...f,
      }),
      (t[28] = r),
      (t[29] = S),
      (t[30] = C),
      (t[31] = o),
      (t[32] = c),
      (t[33] = w),
      (t[34] = f),
      (t[35] = M),
      (t[36] = k),
      (t[37] = j),
      (t[38] = b),
      (t[39] = T),
      (t[40] = P))
    : (P = t[40]);
  let F;
  t[41] !== i || t[42] !== a || t[43] !== s || t[44] !== d || t[45] !== p || t[46] !== P || t[47] !== O
    ? ((F = (0, Q.jsx)(Me, {
        deferCleanup: O,
        fileDiff: i,
        lineAnnotations: a,
        metrics: s,
        renderAnnotation: d,
        selectedLines: p,
        options: P,
      })),
      (t[41] = i),
      (t[42] = a),
      (t[43] = s),
      (t[44] = d),
      (t[45] = p),
      (t[46] = P),
      (t[47] = O),
      (t[48] = F))
    : (F = t[48]);
  let I;
  return (
    t[49] !== n || t[50] !== F
      ? ((I = (0, Q.jsx)(`div`, { className: n, children: F })), (t[49] = n), (t[50] = F), (t[51] = I))
      : (I = t[51]),
    I
  );
}
var Z, rt, Q, it, at, $;
function ot() {
  return (ot = e(() => {
    ((Z = u()),
      G(),
      m(),
      i(),
      (rt = p()),
      ne(),
      k(),
      ve(),
      oe(),
      d(),
      g(),
      j(),
      q(),
      qe(),
      Ce(),
      Ze(),
      (Q = f()),
      (it = `:is([data-diff], [data-file])`),
      (at = c(F, (e, { get: t }) => {
        if (!t(T)) return !1;
        let n = t(M)?.location;
        return n?.domain !== `diff` || n.path !== e || n.hunkId === `path`;
      })),
      ($ = o(r, (e) => ({
        queryKey: [`diff-context-parser`, e],
        queryFn: e == null ? a : () => Xe(e),
        staleTime: 1 / 0,
      }))));
  }))();
}
export { z as i, ot as n, V as r, Qe as t };
//# sourceMappingURL=file-diff-presentation-b6cc0ce0d4c4.js.map
