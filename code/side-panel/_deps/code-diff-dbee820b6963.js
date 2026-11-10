import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $V as n,
  A3t as r,
  AMt as i,
  Amn as a,
  B6t as o,
  Byt as s,
  Cpn as c,
  E$ as l,
  E6t as u,
  Eln as d,
  F3t as f,
  GK as p,
  H4t as m,
  H_ as h,
  JD as g,
  JU as _,
  Jit as v,
  KK as y,
  KL as b,
  KYt as x,
  Kit as ee,
  M3t as te,
  MH as S,
  N3t as ne,
  O3t as C,
  OW as w,
  Opn as re,
  QIt as T,
  QV as E,
  Qit as ie,
  R4t as ae,
  Rpn as D,
  Spn as O,
  T$ as oe,
  T6t as se,
  U4t as ce,
  U_ as k,
  WD as le,
  XIt as ue,
  YIt as de,
  ZV as fe,
  Zit as pe,
  _Ut as me,
  _zt as he,
  a3t as ge,
  aO as _e,
  b4t as ve,
  e4t as A,
  eH as ye,
  eO as j,
  fU as M,
  gRt as be,
  gUt as xe,
  gwt as N,
  hmn as P,
  iO as Se,
  jH as Ce,
  jln as we,
  kMt as F,
  kW as Te,
  kmn as I,
  lO as Ee,
  lUt as De,
  m1 as L,
  nO as Oe,
  nWt as ke,
  nln as Ae,
  o3t as R,
  oO as je,
  p1 as Me,
  pU as Ne,
  q4t as z,
  qL as Pe,
  qU as Fe,
  qYt as Ie,
  rO as Le,
  tWt as Re,
  u6t as B,
  uUt as V,
  vwt as ze,
  w$ as Be,
  w4t as H,
  xRt as U,
  yzt as Ve,
  zpn as W,
  zyt as He,
} from "./app-initial-f094ef01c64d.js";
import {
  FS as Ue,
  PS as We,
  dw as Ge,
  gw as Ke,
  iw as qe,
  oT as Je,
  ow as Ye,
  sT as G,
  xw as Xe,
} from "./app-primary-4c40d73a1074.js";
import {
  a as Ze,
  d as Qe,
  f as $e,
  o as et,
  r as tt,
  s as nt,
  t as rt,
  u as it,
} from "./review-preferences-model-c2edfefe5a2c.js";
import {
  a as at,
  c as ot,
  d as K,
  f as st,
  i as ct,
  l as lt,
  m as ut,
  n as dt,
  o as ft,
  p as pt,
  r as mt,
  s as ht,
  t as gt,
  u as _t,
} from "./use-code-diff-context-menu-6d352d781f8f.js";
import { n as vt, r as yt, t as bt } from "./full-content-metadata-afbc573bb0ec.js";
var xt,
  St,
  Ct = e(() => {
    (a(),
      (xt = P()),
      (St = (e) =>
        (0, xt.jsxs)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, xt.jsx)(`rect`, {
              x: 3.5,
              y: 4.5,
              width: 17,
              height: 15,
              rx: 3,
              stroke: `currentColor`,
              strokeWidth: 2,
            }),
            (0, xt.jsx)(`path`, {
              d: `M6 8C6 7.44772 6.44772 7 7 7H10.25C10.8023 7 11.25 7.44772 11.25 8V16C11.25 16.5523 10.8023 17 10.25 17H7C6.44772 17 6 16.5523 6 16V8Z`,
              fill: `#F84E63`,
              fillOpacity: 0.5,
            }),
            (0, xt.jsx)(`path`, {
              d: `M12.75 8C12.75 7.44772 13.1977 7 13.75 7H17C17.5523 7 18 7.44772 18 8V16C18 16.5523 17.5523 17 17 17H13.75C13.1977 17 12.75 16.5523 12.75 16V8Z`,
              fill: `#36D958`,
              fillOpacity: 0.5,
            }),
          ],
        })));
  }),
  wt,
  q,
  J = e(() => {
    (a(),
      (wt = P()),
      (q = (e) =>
        (0, wt.jsxs)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, wt.jsx)(`rect`, {
              x: 3.5,
              y: 4.5,
              width: 17,
              height: 15,
              rx: 3,
              stroke: `currentColor`,
              strokeWidth: 2,
            }),
            (0, wt.jsx)(`path`, {
              d: `M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8V10.25C18 10.8023 17.5523 11.25 17 11.25H7C6.44772 11.25 6 10.8023 6 10.25V8Z`,
              fill: `#F84E63`,
              fillOpacity: 0.5,
            }),
            (0, wt.jsx)(`path`, {
              d: `M6 13.75C6 13.1977 6.44772 12.75 7 12.75H17C17.5523 12.75 18 13.1977 18 13.75V16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16V13.75Z`,
              fill: `#36D958`,
              fillOpacity: 0.5,
            }),
          ],
        })));
  });
function Tt(e, t) {
  return [
    e.cacheKey ??
      [
        e.name,
        e.isPartial ? `partial` : `full`,
        e.additionLines.length,
        e.deletionLines.length,
        e.hunks.length,
        ...e.hunks.map(
          (e) =>
            `${e.additionStart}:${e.additionCount}:${e.additionLines}:${e.deletionStart}:${e.deletionCount}:${e.deletionLines}`,
        ),
        N(
          [...e.additionLines, ...e.deletionLines].join(`
`),
        ),
      ].join(`:`),
    t?.hunkLineCount,
    t?.lineHeight,
    t?.diffHeaderHeight,
    t?.hunkSeparatorHeight,
    t?.spacing,
    t?.paddingTop,
    t?.paddingBottom,
  ].join(`:`);
}
var Et = e(() => {
  ze();
});
function Dt(e) {
  let t = (0, Y.c)(22),
    {
      diffViewProps: n,
      filePath: r,
      previewPath: i,
      imagePreview: a,
      hasNoChanges: o,
      isBinary: s,
      isDeletion: c,
      isRenameWithoutChanges: l,
      richPreviewEnabled: u,
    } = e,
    d;
  t[0] === n ? (d = t[1]) : ((d = (0, X.jsx)(Ot, { ...n })), (t[0] = n), (t[1] = d));
  let f = d,
    p = s ? `binary` : l ? `rename-without-changes` : `empty`,
    m;
  t[2] === p ? (m = t[3]) : ((m = (0, X.jsx)(At, { kind: p })), (t[2] = p), (t[3] = m));
  let h = m,
    g,
    _;
  t[4] !== r || t[5] !== c || t[6] !== u
    ? ((g = ue(r)),
      (_ = de({ filePath: r, imagePreviewMode: g, isDeletion: c, richPreviewEnabled: u })),
      (t[4] = r),
      (t[5] = c),
      (t[6] = u),
      (t[7] = g),
      (t[8] = _))
    : ((g = t[7]), (_ = t[8]));
  let v = _;
  if (v === `markdown`) {
    let e;
    return (
      t[9] !== f || t[10] !== n.diffViewClassName || t[11] !== i
        ? ((e = (0, X.jsx)(K, { className: n.diffViewClassName, path: i, fallback: f })),
          (t[9] = f),
          (t[10] = n.diffViewClassName),
          (t[11] = i),
          (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  if (v === `image`) {
    let e = g === `always` ? h : f,
      r = g === `always`,
      i;
    return (
      t[13] !== n.diffViewClassName || t[14] !== a || t[15] !== e || t[16] !== r
        ? ((i = (0, X.jsx)(pt, {
            className: n.diffViewClassName,
            imagePreview: a,
            fallback: e,
            showMissingPreview: r,
          })),
          (t[13] = n.diffViewClassName),
          (t[14] = a),
          (t[15] = e),
          (t[16] = r),
          (t[17] = i))
        : (i = t[17]),
      i
    );
  }
  if (v === `pdf`) {
    let e;
    return (
      t[18] !== n.diffViewClassName || t[19] !== h || t[20] !== a
        ? ((e = (0, X.jsx)(lt, {
            className: n.diffViewClassName,
            imagePreview: a,
            fallback: h,
            showMissingPreview: !0,
          })),
          (t[18] = n.diffViewClassName),
          (t[19] = h),
          (t[20] = a),
          (t[21] = e))
        : (e = t[21]),
      e
    );
  }
  return o || s ? h : f;
}
function Ot(e) {
  let t = (0, Y.c)(25),
    n,
    r,
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]))
    : (({
        disableScrollAnchor: r,
        diffViewClassName: n,
        viewType: s,
        wrapLines: c,
        hunkSeparators: i,
        ...a
      } = e),
      (o = Tt(a.fileDiff, a.metrics)),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c));
  let l = o,
    u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(kt, {})), (t[8] = u))
    : (u = t[8]);
  let d = r && `[overflow-anchor:none]`,
    f;
  t[9] !== n || t[10] !== d
    ? ((f = D(`relative overflow-clip [contain:content]`, d, n)),
      (t[9] = n),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p = s === `split` ? `split` : `unified`,
    m = c ? `wrap` : `scroll`,
    h = i ?? `simple`,
    g;
  t[12] !== l || t[13] !== a.fileDiff
    ? ((g = { ...a.fileDiff, cacheKey: l }), (t[12] = l), (t[13] = a.fileDiff), (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== a || t[16] !== f || t[17] !== p || t[18] !== m || t[19] !== h || t[20] !== g
    ? ((_ = (0, X.jsx)(We, {
        className: f,
        diffStyle: p,
        overflow: m,
        hunkSeparators: h,
        ...a,
        fileDiff: g,
      })),
      (t[15] = a),
      (t[16] = f),
      (t[17] = p),
      (t[18] = m),
      (t[19] = h),
      (t[20] = g),
      (t[21] = _))
    : (_ = t[21]);
  let v;
  return (
    t[22] !== l || t[23] !== _
      ? ((v = (0, X.jsx)(b, { name: `FileDiff`, fallback: u, resetKey: l, children: _ })),
        (t[22] = l),
        (t[23] = _),
        (t[24] = v))
      : (v = t[24]),
    v
  );
}
function kt() {
  let e = (0, Y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(`div`, {
          className: `flex items-center bg-surface px-3 py-4 text-sm text-secondary`,
          children: (0, X.jsx)(c, {
            id: `codex.diff.renderFailed`,
            defaultMessage: `Diff failed to render`,
            description: `Placeholder text shown when a file diff renderer crashes`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function At(e) {
  let t = (0, Y.c)(2),
    { kind: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, X.jsx)(`div`, {
          className: `flex h-full justify-center bg-surface-tertiary py-4 text-sm text-secondary empty:hidden`,
          children:
            n === `binary`
              ? (0, X.jsx)(c, {
                  id: `wham.diff.binaryFile`,
                  defaultMessage: `Binary file not shown`,
                  description: `Text shown when a binary file is not shown.`,
                })
              : n === `rename-without-changes`
                ? (0, X.jsx)(c, {
                    id: `codex.diff.fileRenamedWithoutChanges`,
                    defaultMessage: `File renamed without changes`,
                    description: `Text shown when a file was renamed without content changes.`,
                  })
                : (0, X.jsx)(c, {
                    id: `wham.diff.noContent`,
                    defaultMessage: `No content`,
                    description: `Text shown when a file is empty.`,
                  }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Y,
  X,
  jt = e(() => {
    ((Y = I()), W(), O(), Pe(), Ue(), Et(), ut(), st(), _t(), T(), (X = P()));
  });
function Mt(e) {
  let t = (0, Nt.c)(32),
    { action: r, className: i, color: a, disabled: o, size: s, scope: c, onClick: l } = e,
    u = a === void 0 ? `ghost` : a,
    d = o !== void 0 && o,
    f = s === void 0 ? `composerSm` : s,
    p = re(),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Pt.jsx)(h, { className: `icon-2xs` })), (t[0] = m))
    : (m = t[0]);
  let g = m;
  if (r === `stage`) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Pt.jsx)(fe, { className: `icon-2xs` })), (t[1] = e))
      : (e = t[1]),
      (g = e));
  } else if (r === `unstage`) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Pt.jsx)(n, { className: `icon-2xs` })), (t[2] = e))
      : (e = t[2]),
      (g = e));
  }
  let _;
  if (c === `file`)
    if (r === `stage`) {
      let e;
      (t[3] === p
        ? (e = t[4])
        : ((e = p.formatMessage({
            id: `diff.actionButton.stageFile`,
            defaultMessage: `Stage file`,
            description: `Tooltip to stage a file using a git action`,
          })),
          (t[3] = p),
          (t[4] = e)),
        (_ = e));
    } else if (r === `unstage`) {
      let e;
      (t[5] === p
        ? (e = t[6])
        : ((e = p.formatMessage({
            id: `diff.actionButton.unstageFile`,
            defaultMessage: `Unstage file`,
            description: `Tooltip to unstage a file using a git action`,
          })),
          (t[5] = p),
          (t[6] = e)),
        (_ = e));
    } else {
      let e;
      (t[7] === p
        ? (e = t[8])
        : ((e = p.formatMessage({
            id: `diff.actionButton.revertFile`,
            defaultMessage: `Revert file`,
            description: `Tooltip to revert a file using a git action`,
          })),
          (t[7] = p),
          (t[8] = e)),
        (_ = e));
    }
  else if (c === `hunk`)
    if (r === `stage`) {
      let e;
      (t[9] === p
        ? (e = t[10])
        : ((e = p.formatMessage({
            id: `diff.actionButton.stageHunk`,
            defaultMessage: `Stage`,
            description: `Tooltip to stage a hunk using a git action`,
          })),
          (t[9] = p),
          (t[10] = e)),
        (_ = e));
    } else if (r === `unstage`) {
      let e;
      (t[11] === p
        ? (e = t[12])
        : ((e = p.formatMessage({
            id: `diff.actionButton.unstageHunk`,
            defaultMessage: `Unstage`,
            description: `Tooltip to unstage a hunk using a git action`,
          })),
          (t[11] = p),
          (t[12] = e)),
        (_ = e));
    } else {
      let e;
      (t[13] === p
        ? (e = t[14])
        : ((e = p.formatMessage({
            id: `diff.actionButton.revertHunk`,
            defaultMessage: `Revert`,
            description: `Tooltip to revert a hunk using a git action`,
          })),
          (t[13] = p),
          (t[14] = e)),
        (_ = e));
    }
  else if (c === `section`)
    if (r === `stage`) {
      let e;
      (t[15] === p
        ? (e = t[16])
        : ((e = p.formatMessage({
            id: `diff.actionButton.stageSection`,
            defaultMessage: `Stage all`,
            description: `Tooltip to stage a section using a git action`,
          })),
          (t[15] = p),
          (t[16] = e)),
        (_ = e));
    } else if (r === `unstage`) {
      let e;
      (t[17] === p
        ? (e = t[18])
        : ((e = p.formatMessage({
            id: `diff.actionButton.unstageSection`,
            defaultMessage: `Unstage all`,
            description: `Tooltip to unstage a section using a git action`,
          })),
          (t[17] = p),
          (t[18] = e)),
        (_ = e));
    } else {
      let e;
      (t[19] === p
        ? (e = t[20])
        : ((e = p.formatMessage({
            id: `diff.actionButton.revertSection`,
            defaultMessage: `Revert all`,
            description: `Tooltip to revert a section using a git action`,
          })),
          (t[19] = p),
          (t[20] = e)),
        (_ = e));
    }
  let v;
  t[21] !== i ||
  t[22] !== u ||
  t[23] !== d ||
  t[24] !== g ||
  t[25] !== l ||
  t[26] !== f ||
  t[27] !== _
    ? ((v = (0, Pt.jsx)(F, {
        className: i,
        color: u,
        disabled: d,
        size: f,
        uniform: !0,
        "aria-label": _,
        onClick: l,
        children: g,
      })),
      (t[21] = i),
      (t[22] = u),
      (t[23] = d),
      (t[24] = g),
      (t[25] = l),
      (t[26] = f),
      (t[27] = _),
      (t[28] = v))
    : (v = t[28]);
  let y;
  return (
    t[29] !== v || t[30] !== _
      ? ((y = (0, Pt.jsx)(ee, { tooltipContent: _, children: v })),
        (t[29] = v),
        (t[30] = _),
        (t[31] = y))
      : (y = t[31]),
    y
  );
}
var Nt,
  Pt,
  Ft = e(() => {
    ((Nt = I()), O(), i(), v(), ye(), E(), k(), (Pt = P()));
  });
async function Z(e, t) {
  let n = e.get(Xt, t.key),
    r = Jt.get(n);
  if (n.fullDiffMetadata$.get() != null || n.fullContentUnavailable$.get()) return;
  if (r != null && r.snapshotGeneration === t.snapshotGeneration) {
    r.primeDiffHighlightCache = t.primeDiffHighlightCache;
    return;
  }
  let i = {
    primeDiffHighlightCache: t.primeDiffHighlightCache,
    snapshotGeneration: t.snapshotGeneration,
  };
  (Jt.set(n, i), n.fullContentLoadFailed$.set(!1), n.fullContentUnavailable$.set(!1));
  let a = () => {
    let n = t.getSnapshotGeneration?.();
    return n == null || n === i.snapshotGeneration
      ? null
      : Z(e, { ...t, getSnapshotGeneration: void 0, snapshotGeneration: n });
  };
  try {
    let e = await (t.fullContentLoader?.load() ??
      Rt({
        diff: t.diff,
        hostConfig: t.hostConfig,
        ignoreWhitespace: t.ignoreWhitespace,
        nextFallbackToDisk: t.nextFallbackToDisk,
        snapshotGeneration: t.snapshotGeneration,
        workspaceRoot: t.workspaceRoot,
      }));
    if (Jt.get(n) !== i) return;
    switch (e.type) {
      case `success`: {
        let t = i.primeDiffHighlightCache;
        for (; t != null;) {
          if ((await t(e.metadata).catch(() => {}), Jt.get(n) !== i)) return;
          if (i.primeDiffHighlightCache === t) break;
          t = i.primeDiffHighlightCache;
        }
        Jt.get(n) === i && n.fullDiffMetadata$.set(e.metadata);
        break;
      }
      case `unavailable`:
        n.fullContentUnavailable$.set(!0);
        break;
      case `error`: {
        let e = a();
        if (e != null) return await e;
        n.fullContentLoadFailed$.set(!0);
        break;
      }
    }
  } catch {
    if (Jt.get(n) === i) {
      let e = a();
      if (e != null) return await e;
      n.fullContentLoadFailed$.set(!0);
    }
  } finally {
    Jt.get(n) === i && Jt.delete(n);
  }
}
function It({
  hostConfig: e,
  nextFallbackToDisk: t,
  reviewFile: n,
  snapshotGeneration: r,
  workspaceRoot: i,
}) {
  if (
    n.changeKind === `added` ||
    n.changeKind === `deleted` ||
    n.changeKind === `unmerged` ||
    n.changeKind === `untracked` ||
    n.additions == null ||
    n.deletions == null ||
    n.additions + n.deletions === 0 ||
    n.additions + n.deletions > 15e3
  )
    return;
  let a = qt.exec(n.revision),
    o = a?.[1],
    s = a?.[2];
  if (o == null || s == null) return;
  let c = n.previousPath ?? n.path,
    l = n.path,
    u = zt({
      hostConfig: e,
      nextObjectId: s,
      nextFallbackToDisk: t,
      nextPath: l,
      prevObjectId: o,
      prevPath: c,
      snapshotGeneration: r,
      workspaceRoot: i,
    });
  if (Q.has(u)) return;
  let d = Bt({
    cwd: i,
    hostConfig: e,
    maxObjectBytes: Kt,
    requests: [
      { fallbackToDisk: !1, oid: o, path: c },
      { fallbackToDisk: t, oid: s, path: l },
    ],
    snapshotGeneration: r,
  })
    .then((e) => (e.some((e) => e.type === `error` && e.error.type === `too-large`) ? null : e))
    .catch(() => null);
  (Q.set(u, d),
    d.then(() => {
      setTimeout(() => {
        Q.get(u) === d && Q.delete(u);
      }, Gt);
    }));
}
function Lt({
  diff: e,
  fullContentLoader: t,
  hostConfig: n,
  ignoreWhitespace: r,
  loadFullFilesEnabled: i,
  nextFallbackToDisk: a,
  snapshotGeneration: o,
  workspaceRoot: s,
}) {
  return `${t?.key ?? e.metadata.cacheKey ?? `${e.metadata.name}:${e.metadata.prevObjectId ?? `none`}:${e.metadata.newObjectId ?? `none`}:${e.additions}:${e.deletions}`}:${e.metadata.prevName ?? ``}:${e.metadata.name}:${s ?? ``}:${De(n)}:${a ? `next-disk-fallback` : `next-object-only`}:${r ? `ignore-whitespace` : `exact-whitespace`}:${i ? `full` : `partial`}:${o ?? `unversioned`}`;
}
async function Rt({
  diff: e,
  hostConfig: t,
  ignoreWhitespace: n,
  nextFallbackToDisk: r,
  snapshotGeneration: i,
  workspaceRoot: a,
}) {
  if (!a) return { type: `error` };
  let o = e.metadata.prevName ?? e.metadata.name,
    s = e.metadata.name,
    c = e.metadata.type !== `new` && o !== `/dev/null`,
    l = e.metadata.type !== `deleted` && s !== `/dev/null`;
  if (c && e.metadata.prevObjectId == null) return { type: `unavailable` };
  let u = [],
    d = c
      ? u.push({ path: o, oid: e.metadata.prevObjectId ?? null, fallbackToDisk: !1 }) - 1
      : null,
    f = l
      ? u.push({
          path: s,
          oid: e.metadata.newObjectId ?? null,
          fallbackToDisk: r || e.metadata.newObjectId == null,
        }) - 1
      : null,
    p = zt({
      hostConfig: t,
      nextObjectId: e.metadata.newObjectId,
      nextFallbackToDisk: r,
      nextPath: s,
      prevObjectId: e.metadata.prevObjectId,
      prevPath: o,
      snapshotGeneration: i,
      workspaceRoot: a,
    }),
    m = Q.get(p);
  m != null && Q.delete(p);
  let h = (await m) ?? (await Bt({ cwd: a, hostConfig: t, requests: u, snapshotGeneration: i })),
    g = (e) => (e == null ? vt() : (h[e] ?? Ht())),
    _ = g(d),
    v = g(f);
  if ((_.type === `error` && Ut(_.error)) || (v.type === `error` && Ut(v.error)))
    return { type: `unavailable` };
  if (_.type === `error` || v.type === `error`) return { type: `error` };
  let y = bt(e.metadata, _.lines, v.lines, { ignoreWhitespace: n });
  return y == null ? { type: `unavailable` } : { type: `success`, metadata: y };
}
function zt({
  hostConfig: e,
  nextObjectId: t,
  nextFallbackToDisk: n,
  nextPath: r,
  prevObjectId: i,
  prevPath: a,
  snapshotGeneration: o,
  workspaceRoot: s,
}) {
  return JSON.stringify([De(e), s, o ?? null, a, r, i, t, n]);
}
function Bt({ cwd: e, hostConfig: t, maxObjectBytes: n, requests: r, snapshotGeneration: i }) {
  let a = JSON.stringify([De(t), e, n ?? null, i ?? null]),
    o = Yt.get(a);
  if (o == null) {
    ((o = { cwd: e, hostConfig: t, maxObjectBytes: n, snapshotGeneration: i, waiters: [] }),
      Yt.set(a, o));
    let r = o;
    setTimeout(() => {
      Yt.get(a) === r && Vt(a, r);
    }, Wt);
  }
  let s = o;
  return new Promise((e, t) => {
    s.waiters.push({ reject: t, requests: r, resolve: e });
  });
}
async function Vt(e, t) {
  let n = 0;
  try {
    for (; n < t.waiters.length;) {
      let e = n,
        r = 0;
      for (; e < t.waiters.length && (e === n || r + (t.waiters[e]?.requests.length ?? 0) <= 4);)
        ((r += t.waiters[e]?.requests.length ?? 0), (e += 1));
      let i = t.waiters.slice(n, e),
        a = await me(`git`).request({
          method: `cat-file`,
          params: {
            cwd: t.cwd,
            hostConfig: t.hostConfig,
            maxObjectBytes: t.maxObjectBytes,
            operationSource: `thread_diff`,
            requests: i.flatMap((e) => e.requests),
            snapshotGeneration: t.snapshotGeneration,
          },
        }),
        o = 0;
      for (let e of i) (e.resolve(a.slice(o, o + e.requests.length)), (o += e.requests.length));
      n = e;
    }
  } catch (e) {
    let r = e instanceof Error ? e : Error(String(e));
    for (let e of t.waiters.slice(n)) e.reject(r);
  } finally {
    Yt.delete(e);
  }
}
function Ht() {
  return { type: `error`, error: { type: `unknown` } };
}
function Ut(e) {
  switch (e.type) {
    case `unknown`:
      return !1;
    case `not-found`:
    case `too-large`:
      return !0;
  }
}
var Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Q,
  Xt,
  Zt = e(() => {
    (C(),
      o(),
      V(),
      R(),
      xe(),
      ke(),
      _e(),
      yt(),
      (Wt = 40),
      (Gt = 1e4),
      (Kt = Math.min(Oe, j / 2)),
      (qt = /^(?:branch|commit|staged|unstaged):[A-Z]:\d{6}:([0-9a-f]+):\d{6}:([0-9a-f]+)$/),
      (Jt = new WeakMap()),
      (Yt = new Map()),
      (Q = new Map()),
      (Xt = B(ge, (e, { signal: t }) => ({
        fullDiffMetadata$: t(null),
        fullContentLoadFailed$: t(!1),
        fullContentUnavailable$: t(!1),
        key: e,
      }))));
  });
function Qt(e, t) {
  if (t.side == null) return;
  let [n, r] = [$t(e, t.side, t.start), $t(e, t.endSide ?? t.side, t.end)].sort(
      (e, t) => e.section - t.section || e.additionLine - t.additionLine,
    ),
    i = [];
  for (let t = n.section; t <= r.section; t += 1) {
    let a = Math.floor(t / 2),
      o = e.hunks[a];
    if (t % 2 == 1) {
      i.push(en(e, o));
      continue;
    }
    if (e.isPartial) continue;
    let s = e.hunks[a - 1],
      c = s == null ? 0 : s.additionStart + Math.max(s.additionCount - 1, 0),
      l = s == null ? 0 : s.deletionStart + Math.max(s.deletionCount - 1, 0),
      u = o == null ? e.additionLines.length : o.additionStart - (o.additionCount === 0 ? 0 : 1),
      d = t === n.section ? Math.max(c, n.additionLine - 1 - nn) : c,
      f = t === r.section ? Math.min(u, r.additionLine + nn) : u,
      p = f - d;
    if (p <= 0) continue;
    let m = d + 1 + l - c;
    i.push(
      [
        `@@ -${m},${p} +${d + 1},${p} @@`,
        ...e.additionLines.slice(d, f).flatMap((t, n) => {
          let r = e.deletionLines[m - 1 + n];
          return r === t ? [` ${tn(t)}`] : [`-${tn(r)}`, `+${tn(t)}`];
        }),
      ].join(`
`),
    );
  }
  return i.length > 0
    ? i.join(`
`)
    : void 0;
}
function $t(e, t, n) {
  let r = 0;
  for (let [i, a] of e.hunks.entries()) {
    let e = t === `additions` ? a.additionStart : a.deletionStart,
      o = t === `additions` ? a.additionCount : a.deletionCount,
      s = e - (o === 0 ? 0 : 1);
    if (n <= s) return { section: i * 2, additionLine: n + r };
    if (n <= s + o) return { section: i * 2 + 1, additionLine: 0 };
    t === `deletions` &&
      (r =
        a.additionStart +
        Math.max(a.additionCount - 1, 0) -
        a.deletionStart -
        Math.max(a.deletionCount - 1, 0));
  }
  return { section: e.hunks.length * 2, additionLine: n + r };
}
function en(e, t) {
  let n = [
    tn(
      t.hunkSpecs ??
        `@@ -${t.deletionStart},${t.deletionCount} +${t.additionStart},${t.additionCount} @@`,
    ),
  ];
  for (let r of t.hunkContent) {
    if (r.type === `context`) {
      let t = e.additionLines.slice(r.additionLineIndex, r.additionLineIndex + r.lines);
      n.push(...t.map((e) => ` ${tn(e)}`));
      continue;
    }
    let t = e.deletionLines.slice(r.deletionLineIndex, r.deletionLineIndex + r.deletions),
      i = e.additionLines.slice(r.additionLineIndex, r.additionLineIndex + r.additions);
    n.push(...t.map((e) => `-${tn(e)}`), ...i.map((e) => `+${tn(e)}`));
  }
  return n.join(`
`);
}
function tn(e) {
  return e.replace(/\r?\n$/, ``);
}
var nn,
  rn = e(() => {
    nn = 3;
  });
function an(e) {
  let t = e.additionStart,
    n = e.deletionStart,
    r = null;
  for (let i of e.hunkContent) {
    if (i.type === `context`) {
      ((t += i.lines), (n += i.lines));
      continue;
    }
    let a = on({
        side: `additions`,
        start: t,
        count: i.additions,
        noEofLineNumber: e.noEOFCRAdditions ? e.additionStart + e.additionCount - 1 : null,
      }),
      o = on({
        side: `deletions`,
        start: n,
        count: i.deletions,
        noEofLineNumber: e.noEOFCRDeletions ? e.deletionStart + e.deletionCount - 1 : null,
      });
    ((t += i.additions), (n += i.deletions));
    let s = a ?? o;
    s != null && (r = s);
  }
  return r;
}
function on({ side: e, start: t, count: n, noEofLineNumber: r }) {
  if (n === 0) return null;
  let i = t + n - 1,
    a = i === r ? i - 1 : i;
  return a < t ? null : { side: e, lineNumber: a };
}
var sn = e(() => {});
function cn(e, t) {
  let n = (0, ln.c)(6),
    r,
    i;
  (n[0] !== e || n[1] !== t
    ? ((r = () => {
        let n = function (n) {
          let r = n.detail.scope;
          (t && r !== t) || (!t && r) || e(n.detail.open);
        };
        return (
          window.addEventListener(dn, n),
          () => {
            window.removeEventListener(dn, n);
          }
        );
      }),
      (i = [e, t]),
      (n[0] = e),
      (n[1] = t),
      (n[2] = r),
      (n[3] = i))
    : ((r = n[2]), (i = n[3])),
    (0, un.useEffect)(r, i));
  let a;
  return (
    n[4] === t
      ? (a = n[5])
      : ((a = (e) => {
          let n = new CustomEvent(dn, { detail: { open: e, scope: t } });
          window.dispatchEvent(n);
        }),
        (n[4] = t),
        (n[5] = a)),
    a
  );
}
var ln,
  un,
  dn,
  fn = e(() => {
    ((ln = I()), (un = t(a(), 1)), (dn = `wham-toggle-all-diffs`));
  });
function pn(e) {
  let t = (0, In.c)(206),
    {
      containerClassName: n,
      diffViewClassName: i,
      diff: a,
      viewType: o,
      stickyHeader: c,
      hunkSeparators: u,
      enableComments: d,
      allowCommentDrafts: f,
      comments: p,
      modelComments: m,
      readonlyComments: h,
      submittingCommentKeys: g,
      onCommentsChange: _,
      commentAuthorLabel: v,
      commentAuthorAvatarUrl: y,
      onReadonlyCommentReply: b,
      renderReadonlyComment: x,
      renderReadonlyCommentActions: ee,
      renderReadonlyCommentBody: te,
      open: S,
      diffViewWrap: C,
      showHunkActions: w,
      showFileActions: T,
      fileActionsDisabled: E,
      onHunkAction: O,
      onPostRender: oe,
      hunkActionsVariant: se,
      cwd: k,
      workspaceRoot: le,
      richPreviewEnabled: ue,
      roundedCorners: de,
      background: fe,
      diffSurface: pe,
      disableNativeContextMenu: me,
      onRequestChanges: he,
      onCopyPath: ge,
      onToggleWrap: _e,
      onDirectFileToggle: ve,
      onOpenChange: A,
      expandScope: ye,
      conversationId: j,
      hostConfig: M,
      loadFullContent: xe,
      fullContentLoader: N,
      showPartialWhileLoadingFullContent: P,
      fullContentNextFallbackToDisk: Se,
      fullContentIgnoreWhitespace: Ce,
      getFullContentSnapshotGeneration: F,
      fullContentSnapshotGeneration: Te,
      metrics: I,
      displayPathOverride: Ee,
      isLoading: De,
      openFilePathOverride: L,
      onLoadRetry: Oe,
      showLoadError: ke,
      headerEndContent: Ae,
      headerEndContentOpenOnClick: R,
      headerOpenAction: je,
      headerVariant: Pe,
      showHeaderDiffStats: Fe,
      preserveHeaderPositionOnToggle: Ie,
    } = e,
    Le = d !== void 0 && d,
    B = f === void 0 ? Le : f,
    V = C !== void 0 && C,
    ze = w !== void 0 && w,
    H = T === void 0 ? ze : T,
    U = E !== void 0 && E,
    W = se === void 0 ? `unstaged` : se,
    He = le === void 0 ? null : le,
    Ue = ue !== void 0 && ue,
    We = de === void 0 || de,
    Ge = fe === void 0 || fe,
    Je = pe === void 0 ? `main` : pe,
    Ye = me !== void 0 && me,
    G = xe === void 0 || xe,
    Xe = P !== void 0 && P,
    Ze = Se !== void 0 && Se,
    $e = Ce !== void 0 && Ce,
    et = De !== void 0 && De,
    tt = ke !== void 0 && ke,
    nt = Pe === void 0 ? `default` : Pe,
    rt = Fe === void 0 || Fe,
    it = Ie !== void 0 && Ie,
    K = r(be),
    st = Ke() == null ? we : Ln.Fragment,
    lt = nt === `full-review`,
    [ut, dt] = (0, Ln.useState)(V),
    ft = (0, Ln.useRef)(null),
    pt = (0, Ln.useRef)(null),
    _t = (0, Ln.useRef)(hn),
    { platform: vt } = s(),
    yt = cn(A, ye),
    bt = re(),
    xt = Ve(),
    St = a.metadata.type === `deleted`,
    Ct = a.metadata.name,
    wt;
  t[0] !== k || t[1] !== Ct
    ? ((wt = Ct && Ct !== `/dev/null` ? Re(Ct, k ?? void 0) : Ct),
      (t[0] = k),
      (t[1] = Ct),
      (t[2] = wt))
    : (wt = t[2]);
  let q = wt,
    J = Ee ?? q ?? Ct ?? ``,
    Tt;
  t[3] === J ? (Tt = t[4]) : ((Tt = J && !ce(J) ? J : null), (t[3] = J), (t[4] = Tt));
  let Et = Tt,
    Dt,
    Ot;
  t[5] !== k || t[6] !== a.metadata.prevName || t[7] !== a.metadata.type
    ? ((Dt =
        (a.metadata.type === `rename-pure` || a.metadata.type === `rename-changed`) &&
        a.metadata.prevName != null
          ? Re(a.metadata.prevName, k ?? void 0)
          : null),
      (Ot = Dt == null ? null : (z(Dt).split(`/`).pop() ?? Dt)),
      (t[5] = k),
      (t[6] = a.metadata.prevName),
      (t[7] = a.metadata.type),
      (t[8] = Dt),
      (t[9] = Ot))
    : ((Dt = t[8]), (Ot = t[9]));
  let kt = Ot,
    At;
  bb0: {
    if (L !== void 0) {
      if (L == null) {
        At = null;
        break bb0;
      }
      let e = vt === `windows`,
        n;
      (t[10] !== L || t[11] !== e
        ? ((n = ae(``, L, e)), (t[10] = L), (t[11] = e), (t[12] = n))
        : (n = t[12]),
        (At = n));
      break bb0;
    }
    if (q === `/dev/null` || !k) {
      At = q;
      break bb0;
    }
    let e = vt === `windows`,
      n;
    (t[13] !== k || t[14] !== e || t[15] !== q
      ? ((n = ae(k, q, e)), (t[13] = k), (t[14] = e), (t[15] = q), (t[16] = n))
      : (n = t[16]),
      (At = n));
  }
  let Y = At,
    X;
  t[17] === J ? (X = t[18]) : ((X = z(J).split(`/`).pop() ?? J), (t[17] = J), (t[18] = X));
  let jt = X,
    Mt = Dt == null ? J : `${Dt}${Hn}${J}`,
    Nt = kt == null ? jt : `${kt}${Hn}${jt}`,
    Pt;
  t[19] !== jt || t[20] !== J || t[21] !== kt || t[22] !== Dt
    ? ((Pt =
        Dt == null || kt == null
          ? [{ fileName: jt, path: J }]
          : [
              { fileName: kt, path: Dt },
              { fileName: jt, path: J },
            ]),
      (t[19] = jt),
      (t[20] = J),
      (t[21] = kt),
      (t[22] = Dt),
      (t[23] = Pt))
    : (Pt = t[23]);
  let Ft = Pt,
    Z = M?.id,
    It,
    Lt;
  (t[24] === V
    ? ((It = t[25]), (Lt = t[26]))
    : ((It = () => {
        dt(V);
      }),
      (Lt = [V]),
      (t[24] = V),
      (t[25] = It),
      (t[26] = Lt)),
    (0, Ln.useEffect)(It, Lt));
  let Rt = k ?? null,
    zt;
  t[27] !== Z || t[28] !== Y || t[29] !== Rt
    ? ((zt = { cwd: Rt, hostId: Z, openPath: Y }),
      (t[27] = Z),
      (t[28] = Y),
      (t[29] = Rt),
      (t[30] = zt))
    : (zt = t[30]);
  let Bt = ne(mt, zt),
    Vt;
  t[31] !== k || t[32] !== Z || t[33] !== Y || t[34] !== K
    ? ((Vt = async () => {
        try {
          return await ct(K, { cwd: k ?? null, hostId: Z, openPath: Y });
        } catch {
          return null;
        }
      }),
      (t[31] = k),
      (t[32] = Z),
      (t[33] = Y),
      (t[34] = K),
      (t[35] = Vt))
    : (Vt = t[35]);
  let Ht = ie(Vt),
    Ut = !!Y && Y !== `/dev/null`,
    Wt;
  t[36] !== ge || t[37] !== Y
    ? ((Wt = () => {
        if (!(!Y || Y === `/dev/null`)) {
          if (ge) {
            ge(Y);
            return;
          }
          Me(Y);
        }
      }),
      (t[36] = ge),
      (t[37] = Y),
      (t[38] = Wt))
    : (Wt = t[38]);
  let Gt = Wt,
    Kt;
  t[39] === Et
    ? (Kt = t[40])
    : ((Kt =
        Et == null
          ? void 0
          : () => {
              Me(Et);
            }),
      (t[39] = Et),
      (t[40] = Kt));
  let qt = Kt,
    Jt;
  t[41] === _e
    ? (Jt = t[42])
    : ((Jt = () => {
        if (_e) {
          _e();
          return;
        }
        dt(mn);
      }),
      (t[41] = _e),
      (t[42] = Jt));
  let Yt = Jt,
    Q = St ? (a.firstDeletionLine ?? 1) : (a.firstAdditionLine ?? 1),
    Xt;
  t[43] !== k || t[44] !== Z || t[45] !== Y || t[46] !== K
    ? ((Xt = (e) => {
        let { lineNumber: t, event: n } = e;
        Y && Fn(n) && ht(K, { path: Y, line: t, cwd: k ?? null, hostId: Z });
      }),
      (t[43] = k),
      (t[44] = Z),
      (t[45] = Y),
      (t[46] = K),
      (t[47] = Xt))
    : (Xt = t[47]);
  let Zt = ie(Xt),
    Qt;
  t[48] !== k || t[49] !== Q || t[50] !== Z || t[51] !== Y || t[52] !== K
    ? ((Qt = (e, t, n) => {
        if (!Y) return;
        let r = ft.current ?? Q;
        ((ft.current = null),
          ot(K, {
            cwd: k ?? null,
            hostId: Z,
            line: r,
            openPath: Y,
            appPath: n,
            persistPreferred: t,
            target: e,
          }));
      }),
      (t[48] = k),
      (t[49] = Q),
      (t[50] = Z),
      (t[51] = Y),
      (t[52] = K),
      (t[53] = Qt))
    : (Qt = t[53]);
  let $t = ie(Qt),
    en;
  t[54] !== k ||
  t[55] !== Q ||
  t[56] !== Z ||
  t[57] !== Ht ||
  t[58] !== Y ||
  t[59] !== Bt ||
  t[60] !== K
    ? ((en = () => {
        Y &&
          (async () => {
            let { primaryTarget: e } = at({ data: await Ht(), preferredTargetOverride: Bt });
            if (e != null) {
              ot(K, {
                cwd: k ?? null,
                hostId: Z,
                line: Q,
                openPath: Y,
                persistPreferred: !1,
                target: e.target,
                appPath: e.appPath,
              });
              return;
            }
            ht(K, { cwd: k ?? null, hostId: Z, line: Q, path: Y });
          })();
      }),
      (t[54] = k),
      (t[55] = Q),
      (t[56] = Z),
      (t[57] = Ht),
      (t[58] = Y),
      (t[59] = Bt),
      (t[60] = K),
      (t[61] = en))
    : (en = t[61]);
  let tn = en,
    nn;
  t[62] === Zt
    ? (nn = t[63])
    : ((nn = (e) => {
        Zt(e);
      }),
      (t[62] = Zt),
      (t[63] = nn));
  let rn = nn,
    an;
  t[64] === Zt
    ? (an = t[65])
    : ((an = (e) => {
        Zt(e);
      }),
      (t[64] = Zt),
      (t[65] = an));
  let on = an,
    sn;
  t[66] !== yt || t[67] !== ve || t[68] !== A || t[69] !== S || t[70] !== it || t[71] !== xt
    ? ((sn = (e) => {
        let t = !S;
        if ((it && e != null && Ne(e.currentTarget, xt), e?.altKey)) {
          yt(t);
          return;
        }
        (A(t), ve?.(t));
      }),
      (t[66] = yt),
      (t[67] = ve),
      (t[68] = A),
      (t[69] = S),
      (t[70] = it),
      (t[71] = xt),
      (t[72] = sn))
    : (sn = t[72]);
  let ln = ie(sn),
    un;
  t[73] !== k || t[74] !== Q || t[75] !== Z || t[76] !== Y || t[77] !== K || t[78] !== ln
    ? ((un = (e) => {
        (e.stopPropagation(), ln(e));
      }),
      (t[73] = k),
      (t[74] = Q),
      (t[75] = Z),
      (t[76] = Y),
      (t[77] = K),
      (t[78] = ln),
      (t[79] = un))
    : (un = t[79]);
  let dn = ie(un),
    fn;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fn = () => {
        _t.current();
      }),
      (t[80] = fn))
    : (fn = t[80]);
  let pn = fn,
    _n;
  t[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_n = (e) => {
        let t =
          typeof e.nativeEvent.composedPath == `function`
            ? e.nativeEvent.composedPath()
            : [e.target];
        ft.current = Qe(t);
      }),
      (t[81] = _n))
    : (_n = t[81]);
  let vn = _n,
    yn;
  t[82] !== k || t[83] !== M || t[84] !== St || t[85] !== Y
    ? ((yn =
        !St && k != null && M != null && Y != null ? { cwd: k, hostConfig: M, path: Y } : null),
      (t[82] = k),
      (t[83] = M),
      (t[84] = St),
      (t[85] = Y),
      (t[86] = yn))
    : (yn = t[86]);
  let xn;
  t[87] !== Ut ||
  t[88] !== k ||
  t[89] !== Q ||
  t[90] !== Z ||
  t[91] !== St ||
  t[92] !== Y ||
  t[93] !== K
    ? ((xn =
        Ut && !St && Y != null
          ? () => {
              let e = {
                scope: K,
                path: Y,
                cwd: k ?? null,
                hostId: Z,
                line: ft.current ?? Q,
                openInSidePanel: !0,
              };
              return Be(e)
                ? () => {
                    ((ft.current = null), l(e));
                  }
                : null;
            }
          : void 0),
      (t[87] = Ut),
      (t[88] = k),
      (t[89] = Q),
      (t[90] = Z),
      (t[91] = St),
      (t[92] = Y),
      (t[93] = K),
      (t[94] = xn))
    : (xn = t[94]);
  let Sn = We && `rounded-lg`,
    Cn = lt && S && `pb-0.5`,
    wn;
  t[95] !== n || t[96] !== Sn || t[97] !== Cn
    ? ((wn = D(`group/file-diff flex flex-col overflow-clip`, Sn, Cn, n)),
      (t[95] = n),
      (t[96] = Sn),
      (t[97] = Cn),
      (t[98] = wn))
    : (wn = t[98]);
  let Tn;
  t[99] !== Ge || t[100] !== Je
    ? ((Tn = qe(Ge, Je)), (t[99] = Ge), (t[100] = Je), (t[101] = Tn))
    : (Tn = t[101]);
  let En = `var(--codex-diffs-surface-override, ${Tn})`,
    Dn = Ge ? `var(--codex-diffs-surface)` : void 0,
    On;
  t[102] !== En || t[103] !== Dn
    ? ((On = { "--codex-diffs-surface": En, backgroundColor: Dn }),
      (t[102] = En),
      (t[103] = Dn),
      (t[104] = On))
    : (On = t[104]);
  let kn;
  t[105] !== R || t[106] !== ve || t[107] !== A || t[108] !== S
    ? ((kn = (e) => {
        (e.stopPropagation(), R != null && (A(R), R !== S && ve?.(R)));
      }),
      (t[105] = R),
      (t[106] = ve),
      (t[107] = A),
      (t[108] = S),
      (t[109] = kn))
    : (kn = t[109]);
  let An;
  t[110] !== a.metadata.name || t[111] !== O
    ? ((An = (e) => {
        O?.({ path: a.metadata.name, action: e, scope: `file` });
      }),
      (t[110] = a.metadata.name),
      (t[111] = O),
      (t[112] = An))
    : (An = t[112]);
  let jn = Ut,
    Mn;
  t[113] === bt
    ? (Mn = t[114])
    : ((Mn = bt.formatMessage({
        id: `diff.fileHeader.toggle`,
        defaultMessage: `Toggle file diff`,
        description: `Button label for toggling the file diff section`,
      })),
      (t[113] = bt),
      (t[114] = Mn));
  let Nn;
  t[115] !== a ||
  t[116] !== U ||
  t[117] !== qt ||
  t[118] !== dn ||
  t[119] !== tn ||
  t[120] !== Nt ||
  t[121] !== Mt ||
  t[122] !== Ft ||
  t[123] !== Ae ||
  t[124] !== je ||
  t[125] !== nt ||
  t[126] !== W ||
  t[127] !== et ||
  t[128] !== S ||
  t[129] !== H ||
  t[130] !== rt ||
  t[131] !== c ||
  t[132] !== kn ||
  t[133] !== An ||
  t[134] !== jn ||
  t[135] !== Mn ||
  t[136] !== ln ||
  t[137] !== q
    ? ((Nn = (0, $.jsx)(gn, {
        diff: a,
        displayFileName: Nt,
        displayPath: Mt,
        displayPathParts: Ft,
        onFileNameClick: dn,
        onOpenInEditor: tn,
        headerEndContent: Ae,
        onHeaderEndContentClick: kn,
        headerOpenAction: je,
        fileActionsDisabled: U,
        onCopyPath: qt,
        onFileToggle: ln,
        onFileAction: An,
        open: S,
        stickyHeader: c,
        showOpenInButton: jn,
        showDiffStats: rt,
        toggleAriaLabel: Mn,
        workspaceRelativePath: q,
        showFileActions: H,
        hunkActionsVariant: W,
        headerVariant: nt,
        isLoading: et,
      })),
      (t[115] = a),
      (t[116] = U),
      (t[117] = qt),
      (t[118] = dn),
      (t[119] = tn),
      (t[120] = Nt),
      (t[121] = Mt),
      (t[122] = Ft),
      (t[123] = Ae),
      (t[124] = je),
      (t[125] = nt),
      (t[126] = W),
      (t[127] = et),
      (t[128] = S),
      (t[129] = H),
      (t[130] = rt),
      (t[131] = c),
      (t[132] = kn),
      (t[133] = An),
      (t[134] = jn),
      (t[135] = Mn),
      (t[136] = ln),
      (t[137] = q),
      (t[138] = Nn))
    : (Nn = t[138]);
  let Pn;
  t[139] !== B ||
  t[140] !== Ut ||
  t[141] !== y ||
  t[142] !== v ||
  t[143] !== p ||
  t[144] !== j ||
  t[145] !== k ||
  t[146] !== a ||
  t[147] !== i ||
  t[148] !== Le ||
  t[149] !== $e ||
  t[150] !== N ||
  t[151] !== Ze ||
  t[152] !== Te ||
  t[153] !== F ||
  t[154] !== rn ||
  t[155] !== on ||
  t[156] !== tn ||
  t[157] !== M ||
  t[158] !== W ||
  t[159] !== u ||
  t[160] !== et ||
  t[161] !== G ||
  t[162] !== I ||
  t[163] !== m ||
  t[164] !== _ ||
  t[165] !== O ||
  t[166] !== Oe ||
  t[167] !== oe ||
  t[168] !== b ||
  t[169] !== he ||
  t[170] !== S ||
  t[171] !== Y ||
  t[172] !== h ||
  t[173] !== x ||
  t[174] !== ee ||
  t[175] !== te ||
  t[176] !== Ue ||
  t[177] !== ze ||
  t[178] !== tt ||
  t[179] !== Xe ||
  t[180] !== g ||
  t[181] !== lt ||
  t[182] !== o ||
  t[183] !== He ||
  t[184] !== ut
    ? ((Pn = S
        ? (0, $.jsx)(bn, {
            canOpenFile: Ut,
            comments: p,
            modelComments: m,
            conversationId: j,
            cwd: k,
            workspaceRoot: He,
            diff: a,
            diffViewClassName: i,
            enableComments: Le,
            allowCommentDrafts: B,
            handleLineClick: rn,
            handleLineNumberClick: on,
            hostConfig: M,
            hoveredLineRef: pt,
            hunkActionsVariant: W,
            hunkSeparators: u,
            loadFullContent: G,
            fullContentLoader: N,
            showPartialWhileLoadingFullContent: Xe,
            fullContentNextFallbackToDisk: Ze,
            fullContentIgnoreWhitespace: $e,
            getFullContentSnapshotGeneration: F,
            fullContentSnapshotGeneration: Te,
            readonlyComments: h,
            submittingCommentKeys: g,
            onCommentsChange: _,
            commentAuthorLabel: v,
            commentAuthorAvatarUrl: y,
            isLoading: et,
            onReadonlyCommentReply: b,
            renderReadonlyComment: x,
            renderReadonlyCommentActions: ee,
            renderReadonlyCommentBody: te,
            onLoadRetry: Oe,
            onHunkAction: O,
            onPostRender: oe,
            onOpenInEditor: tn,
            onRequestChanges: he,
            openFilePath: Y ?? null,
            open: S,
            requestChangesRef: _t,
            richPreviewEnabled: Ue,
            showHunkActions: ze,
            showLoadError: tt,
            useReviewLineInfoSeparators: lt,
            viewType: o,
            wrapLines: ut,
            metrics: I,
          })
        : null),
      (t[139] = B),
      (t[140] = Ut),
      (t[141] = y),
      (t[142] = v),
      (t[143] = p),
      (t[144] = j),
      (t[145] = k),
      (t[146] = a),
      (t[147] = i),
      (t[148] = Le),
      (t[149] = $e),
      (t[150] = N),
      (t[151] = Ze),
      (t[152] = Te),
      (t[153] = F),
      (t[154] = rn),
      (t[155] = on),
      (t[156] = tn),
      (t[157] = M),
      (t[158] = W),
      (t[159] = u),
      (t[160] = et),
      (t[161] = G),
      (t[162] = I),
      (t[163] = m),
      (t[164] = _),
      (t[165] = O),
      (t[166] = Oe),
      (t[167] = oe),
      (t[168] = b),
      (t[169] = he),
      (t[170] = S),
      (t[171] = Y),
      (t[172] = h),
      (t[173] = x),
      (t[174] = ee),
      (t[175] = te),
      (t[176] = Ue),
      (t[177] = ze),
      (t[178] = tt),
      (t[179] = Xe),
      (t[180] = g),
      (t[181] = lt),
      (t[182] = o),
      (t[183] = He),
      (t[184] = ut),
      (t[185] = Pn))
    : (Pn = t[185]);
  let Rn;
  t[186] !== st || t[187] !== Pn
    ? ((Rn = (0, $.jsx)(st, { children: Pn })), (t[186] = st), (t[187] = Pn), (t[188] = Rn))
    : (Rn = t[188]);
  let zn;
  t[189] !== wn || t[190] !== On || t[191] !== Nn || t[192] !== Rn
    ? ((zn = (0, $.jsxs)(`div`, {
        onContextMenu: vn,
        className: wn,
        style: On,
        children: [Nn, Rn],
      })),
      (t[189] = wn),
      (t[190] = On),
      (t[191] = Nn),
      (t[192] = Rn),
      (t[193] = zn))
    : (zn = t[193]);
  let Bn;
  return (
    t[194] !== Ut ||
    t[195] !== Ye ||
    t[196] !== $t ||
    t[197] !== Gt ||
    t[198] !== qt ||
    t[199] !== Yt ||
    t[200] !== Ht ||
    t[201] !== Bt ||
    t[202] !== yn ||
    t[203] !== xn ||
    t[204] !== zn
      ? ((Bn = (0, $.jsx)(gt, {
          canOpenFile: Ut,
          githubFileLookup: yn,
          loadOpenTargets: Ht,
          preferredTargetOverride: Bt,
          onRequestChanges: pn,
          onCopyPath: Gt,
          onCopyRelativePath: qt,
          onToggleWrap: Yt,
          getOpenInNewTab: xn,
          handleOpenInTarget: $t,
          disableNative: Ye,
          children: zn,
        })),
        (t[194] = Ut),
        (t[195] = Ye),
        (t[196] = $t),
        (t[197] = Gt),
        (t[198] = qt),
        (t[199] = Yt),
        (t[200] = Ht),
        (t[201] = Bt),
        (t[202] = yn),
        (t[203] = xn),
        (t[204] = zn),
        (t[205] = Bn))
      : (Bn = t[205]),
    Bn
  );
}
function mn(e) {
  return !e;
}
function hn() {}
function gn(e) {
  let t = (0, In.c)(123),
    {
      diff: n,
      displayFileName: r,
      displayPath: i,
      displayPathParts: a,
      fileActionsDisabled: o,
      headerEndContent: s,
      onHeaderEndContentClick: c,
      headerOpenAction: l,
      headerVariant: u,
      hunkActionsVariant: d,
      isLoading: f,
      onCopyPath: m,
      onFileAction: h,
      onFileNameClick: g,
      onOpenInEditor: _,
      onFileToggle: v,
      open: y,
      showDiffStats: b,
      showOpenInButton: x,
      showFileActions: te,
      stickyHeader: S,
      toggleAriaLabel: ne,
      workspaceRelativePath: C,
    } = e,
    w = re(),
    T = u === `full-review`,
    E;
  t[0] === w
    ? (E = t[1])
    : ((E = w.formatMessage({
        id: `codex.diff.fileHeader.copyPath`,
        defaultMessage: `Copy path`,
        description: `Accessible label and tooltip for copying the path of a file in the review header`,
      })),
      (t[0] = w),
      (t[1] = E));
  let ie = E,
    ae;
  t[2] === y ? (ae = t[3]) : ((ae = ve.reviewFileToggle(y)), (t[2] = y), (t[3] = ae));
  let O = T ? `text-tertiary hover:text-default` : `text-default`,
    oe;
  t[4] === O ? (oe = t[5]) : ((oe = D(`bg-transparent`, O)), (t[4] = O), (t[5] = oe));
  let se = T ? `ghostMuted` : `ghost`,
    ce = T ? `iconMd` : `toolbar`,
    k;
  t[6] === v
    ? (k = t[7])
    : ((k = (e) => {
        (e.stopPropagation(), v(e));
      }),
      (t[6] = v),
      (t[7] = k));
  let le = y ? `rotate-90` : `rotate-0`,
    ue;
  t[8] === le
    ? (ue = t[9])
    : ((ue = D(
        `ease-basic icon-2xs transition-transform duration-basic motion-reduce:transition-none`,
        le,
      )),
      (t[8] = le),
      (t[9] = ue));
  let de;
  t[10] === ue
    ? (de = t[11])
    : ((de = (0, $.jsx)(p, { className: ue })), (t[10] = ue), (t[11] = de));
  let fe;
  t[12] !== de ||
  t[13] !== ae ||
  t[14] !== oe ||
  t[15] !== se ||
  t[16] !== ce ||
  t[17] !== k ||
  t[18] !== ne
    ? ((fe = (0, $.jsx)(F, {
        ...ae,
        className: oe,
        color: se,
        size: ce,
        uniform: !0,
        "aria-label": ne,
        onClick: k,
        children: de,
      })),
      (t[12] = de),
      (t[13] = ae),
      (t[14] = oe),
      (t[15] = se),
      (t[16] = ce),
      (t[17] = k),
      (t[18] = ne),
      (t[19] = fe))
    : (fe = t[19]);
  let pe = fe,
    me;
  t[20] !== n || t[21] !== i || t[22] !== s || t[23] !== b || t[24] !== T
    ? ((me = b
        ? (0, $.jsx)(
            `span`,
            {
              className: D(`flex shrink-0 items-center`, T ? `ms-1 me-1` : s != null && `me-2`),
              children: (0, $.jsx)(Fe, { linesAdded: n.additions, linesRemoved: n.deletions }),
            },
            i,
          )
        : null),
      (t[20] = n),
      (t[21] = i),
      (t[22] = s),
      (t[23] = b),
      (t[24] = T),
      (t[25] = me))
    : (me = t[25]);
  let he = me,
    ge = S && `z-10 sticky top-0`,
    _e = T && S && `backdrop-blur-sm`,
    A;
  t[26] !== ge || t[27] !== _e
    ? ((A = D(`cursor-interaction select-none focus-visible:outline-none`, ge, _e)),
      (t[26] = ge),
      (t[27] = _e),
      (t[28] = A))
    : (A = t[28]);
  let ye =
      T && S
        ? `color-mix(in srgb, var(--codex-diffs-surface) 88%, transparent)`
        : `var(--codex-diffs-surface)`,
    j;
  t[29] === ye ? (j = t[30]) : ((j = { backgroundColor: ye }), (t[29] = ye), (t[30] = j));
  let M;
  t[31] === T
    ? (M = t[32])
    : ((M = T ? void 0 : { backgroundColor: `var(--codex-diffs-header-surface)` }),
      (t[31] = T),
      (t[32] = M));
  let be;
  t[33] !== f || t[34] !== S || t[35] !== T
    ? ((be = D(
        `group/diff-header text-size-chat @container/diff-header relative flex items-center gap-2`,
        T
          ? D(
              `py-1 ps-3 pe-2 hover:bg-primary-ghost-hover`,
              S
                ? `bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)] [.dark_&]:bg-[color-mix(in_srgb,var(--color-background-primary-soft-active)_88%,transparent)] [.electron-dark_&]:bg-[color-mix(in_srgb,var(--color-background-primary-soft-active)_88%,transparent)]`
                : `bg-surface [.dark_&]:bg-[var(--color-background-primary-soft-active)] [.electron-dark_&]:bg-[var(--color-background-primary-soft-active)]`,
              f ? `mb-2` : `mb-0.5`,
            )
          : `px-[var(--codex-diffs-header-padding-x,1rem)] py-[var(--codex-diffs-header-padding-y,0.25rem)] hover:bg-background-primary-ghost-hover/30`,
      )),
      (t[33] = f),
      (t[34] = S),
      (t[35] = T),
      (t[36] = be))
    : (be = t[36]);
  let xe = T ? `gap-0.5` : `gap-2`,
    N;
  t[37] === xe
    ? (N = t[38])
    : ((N = D(`text-size-chat flex min-w-0 flex-1 items-center text-default`, xe)),
      (t[37] = xe),
      (t[38] = N));
  let P = T && `gap-2 ps-1`,
    Se;
  t[39] === P
    ? (Se = t[40])
    : ((Se = D(`flex min-w-0 items-center`, P)), (t[39] = P), (t[40] = Se));
  let we;
  t[41] !== i || t[42] !== T
    ? ((we = T ? (0, $.jsx)(En, { path: i }) : null), (t[41] = i), (t[42] = T), (t[43] = we))
    : (we = t[43]);
  let Te;
  t[44] === i
    ? (Te = t[45])
    : ((Te = (0, $.jsx)(`span`, { className: `font-mono`, children: i })),
      (t[44] = i),
      (t[45] = Te));
  let I = !T && `pe-[6px]`,
    Ee;
  t[46] === I
    ? (Ee = t[47])
    : ((Ee = D(
        `min-w-0 cursor-interaction truncate text-start text-default select-text [direction:rtl]`,
        I,
      )),
      (t[46] = I),
      (t[47] = Ee));
  let De = !C || C === `/dev/null`,
    L;
  t[48] === r
    ? (L = t[49])
    : ((L = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-default [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:hidden`,
        children: r,
      })),
      (t[48] = r),
      (t[49] = L));
  let Oe;
  t[50] !== i || t[51] !== a || t[52] !== T
    ? ((Oe = T
        ? (0, $.jsx)(`span`, {
            className: `hidden min-w-0 truncate text-tertiary [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:inline`,
            children: a.map(_n),
          })
        : (0, $.jsx)(`span`, {
            className: `hidden min-w-0 truncate [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:inline`,
            children: i,
          })),
      (t[50] = i),
      (t[51] = a),
      (t[52] = T),
      (t[53] = Oe))
    : (Oe = t[53]);
  let ke;
  t[54] !== g || t[55] !== Ee || t[56] !== De || t[57] !== L || t[58] !== Oe
    ? ((ke = (0, $.jsxs)(`button`, {
        type: `button`,
        className: Ee,
        disabled: De,
        onClick: g,
        children: [L, Oe],
      })),
      (t[54] = g),
      (t[55] = Ee),
      (t[56] = De),
      (t[57] = L),
      (t[58] = Oe),
      (t[59] = ke))
    : (ke = t[59]);
  let Ae;
  t[60] !== Te || t[61] !== ke
    ? ((Ae = (0, $.jsx)(ee, {
        tooltipContent: Te,
        delayDuration: 200,
        openWhen: `trigger-overflows`,
        children: ke,
      })),
      (t[60] = Te),
      (t[61] = ke),
      (t[62] = Ae))
    : (Ae = t[62]);
  let R;
  t[63] !== Se || t[64] !== we || t[65] !== Ae
    ? ((R = (0, $.jsxs)(`div`, { className: Se, children: [we, Ae] })),
      (t[63] = Se),
      (t[64] = we),
      (t[65] = Ae),
      (t[66] = R))
    : (R = t[66]);
  let je = T ? he : null,
    Me;
  t[67] !== ie || t[68] !== m || t[69] !== T
    ? ((Me =
        T && m != null
          ? (0, $.jsx)(`span`, {
              className: `shrink-0 opacity-0 group-hover/diff-header:opacity-100 group-has-[:focus-visible]/diff-header:opacity-100`,
              children: (0, $.jsx)(Ce, {
                ariaLabel: ie,
                buttonText: ie,
                iconClassName: `icon-2xs`,
                iconOnly: !0,
                onCopy: m,
              }),
            })
          : null),
      (t[67] = ie),
      (t[68] = m),
      (t[69] = T),
      (t[70] = Me))
    : (Me = t[70]);
  let Ne;
  t[71] !== pe || t[72] !== T
    ? ((Ne = T
        ? (0, $.jsx)(`span`, {
            className: `shrink-0 opacity-0 group-hover/diff-header:opacity-100 group-has-[:focus-visible]/diff-header:opacity-100`,
            children: pe,
          })
        : null),
      (t[71] = pe),
      (t[72] = T),
      (t[73] = Ne))
    : (Ne = t[73]);
  let z;
  t[74] !== l || t[75] !== _ || t[76] !== x || t[77] !== T
    ? ((z =
        T && x
          ? (0, $.jsx)(`span`, {
              className: `shrink-0 opacity-0 group-hover/diff-header:opacity-100 group-has-[:focus-visible]/diff-header:opacity-100`,
              children: (0, $.jsx)(vn, {
                headerOpenAction: l,
                onOpenInEditor: _,
                useMutedButtonStyle: !0,
              }),
            })
          : null),
      (t[74] = l),
      (t[75] = _),
      (t[76] = x),
      (t[77] = T),
      (t[78] = z))
    : (z = t[78]);
  let Pe;
  t[79] !== N || t[80] !== R || t[81] !== je || t[82] !== Me || t[83] !== Ne || t[84] !== z
    ? ((Pe = (0, $.jsxs)(`div`, { className: N, children: [R, je, Me, Ne, z] })),
      (t[79] = N),
      (t[80] = R),
      (t[81] = je),
      (t[82] = Me),
      (t[83] = Ne),
      (t[84] = z),
      (t[85] = Pe))
    : (Pe = t[85]);
  let Ie = T ? `gap-0` : `gap-1`,
    Le;
  t[86] === Ie
    ? (Le = t[87])
    : ((Le = D(`ms-auto flex items-center`, Ie)), (t[86] = Ie), (t[87] = Le));
  let Re = T ? null : he,
    B;
  t[88] !== o || t[89] !== d || t[90] !== h || t[91] !== te || t[92] !== T
    ? ((B = te
        ? (0, $.jsx)(An, { disabled: o, onFileAction: h, useMutedButtonStyle: T, variant: d })
        : null),
      (t[88] = o),
      (t[89] = d),
      (t[90] = h),
      (t[91] = te),
      (t[92] = T),
      (t[93] = B))
    : (B = t[93]);
  let V;
  t[94] !== s || t[95] !== c || t[96] !== x || t[97] !== T
    ? ((V =
        s == null
          ? null
          : (0, $.jsx)(`span`, {
              className: D(T ? `flex items-center` : `contents`, T && x && `me-1`),
              role: `presentation`,
              onClick: c,
              children: s,
            })),
      (t[94] = s),
      (t[95] = c),
      (t[96] = x),
      (t[97] = T),
      (t[98] = V))
    : (V = t[98]);
  let ze;
  t[99] !== l || t[100] !== _ || t[101] !== x || t[102] !== T
    ? ((ze =
        x && !T
          ? (0, $.jsx)(vn, { headerOpenAction: l, onOpenInEditor: _, useMutedButtonStyle: T })
          : null),
      (t[99] = l),
      (t[100] = _),
      (t[101] = x),
      (t[102] = T),
      (t[103] = ze))
    : (ze = t[103]);
  let Be = T ? null : pe,
    H;
  t[104] !== Le || t[105] !== Re || t[106] !== B || t[107] !== V || t[108] !== ze || t[109] !== Be
    ? ((H = (0, $.jsxs)(`div`, { className: Le, children: [Re, B, V, ze, Be] })),
      (t[104] = Le),
      (t[105] = Re),
      (t[106] = B),
      (t[107] = V),
      (t[108] = ze),
      (t[109] = Be),
      (t[110] = H))
    : (H = t[110]);
  let U;
  t[111] !== be || t[112] !== Pe || t[113] !== H
    ? ((U = (0, $.jsxs)(`div`, { className: be, children: [Pe, H] })),
      (t[111] = be),
      (t[112] = Pe),
      (t[113] = H),
      (t[114] = U))
    : (U = t[114]);
  let Ve;
  t[115] !== M || t[116] !== U
    ? ((Ve = (0, $.jsx)(`div`, { style: M, children: U })),
      (t[115] = M),
      (t[116] = U),
      (t[117] = Ve))
    : (Ve = t[117]);
  let W;
  return (
    t[118] !== v || t[119] !== A || t[120] !== j || t[121] !== Ve
      ? ((W = (0, $.jsx)(`div`, {
          onClick: v,
          role: `presentation`,
          className: A,
          style: j,
          children: Ve,
        })),
        (t[118] = v),
        (t[119] = A),
        (t[120] = j),
        (t[121] = Ve),
        (t[122] = W))
      : (W = t[122]),
    W
  );
}
function _n(e, t) {
  let { fileName: n, path: r } = e;
  return (0, $.jsxs)(
    `span`,
    {
      children: [
        t > 0 ? (0, $.jsx)(`span`, { className: `text-default`, children: Hn }) : null,
        (0, $.jsx)(`span`, { children: r.slice(0, Math.max(0, r.length - n.length)) }),
        (0, $.jsx)(`span`, { className: `text-default`, children: n }),
      ],
    },
    `${r}:${t}`,
  );
}
function vn(e) {
  let t = (0, In.c)(24),
    { headerOpenAction: n, onOpenInEditor: r, useMutedButtonStyle: i } = e,
    a = re(),
    o;
  t[0] !== n?.ariaLabel || t[1] !== a
    ? ((o =
        n?.ariaLabel ??
        a.formatMessage({
          id: `codex.diff.fileHeader.openInIcon`,
          defaultMessage: `Open file`,
          description: `Accessible label for the icon button in the diff file header that opens the current file`,
        })),
      (t[0] = n?.ariaLabel),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] !== n?.tooltip || t[4] !== a
    ? ((c =
        n?.tooltip ??
        a.formatMessage({
          id: `codex.diff.fileHeader.openIn.tooltip`,
          defaultMessage: `Open in editor`,
          description: `Tooltip for the icon button in the diff file header that opens the current file`,
        })),
      (t[3] = n?.tooltip),
      (t[4] = a),
      (t[5] = c))
    : (c = t[5]);
  let l = c,
    u = n == null && `opacity-0 transition-opacity duration-200 group-hover/file-diff:opacity-100`,
    d;
  t[6] === u ? (d = t[7]) : ((d = D(`shrink-0`, u)), (t[6] = u), (t[7] = d));
  let f = i ? `text-tertiary hover:text-default` : void 0,
    p = i ? `ghostMuted` : `ghost`,
    m = i ? `iconMd` : `toolbar`,
    h;
  t[8] !== n || t[9] !== r
    ? ((h = (e) => {
        if ((e.stopPropagation(), n != null)) {
          n.onClick();
          return;
        }
        r();
      }),
      (t[8] = n),
      (t[9] = r),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(se, { className: `icon-2xs` })), (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== s || t[13] !== f || t[14] !== p || t[15] !== m || t[16] !== h
    ? ((_ = (0, $.jsx)(F, {
        className: f,
        color: p,
        size: m,
        uniform: !0,
        "aria-label": s,
        onClick: h,
        children: g,
      })),
      (t[12] = s),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] !== l || t[19] !== _
    ? ((v = (0, $.jsx)(ee, { tooltipContent: l, children: _ })),
      (t[18] = l),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== v || t[22] !== d
      ? ((y = (0, $.jsx)(`div`, { className: d, role: `presentation`, onClick: yn, children: v })),
        (t[21] = v),
        (t[22] = d),
        (t[23] = y))
      : (y = t[23]),
    y
  );
}
function yn(e) {
  return e.stopPropagation();
}
function bn(e) {
  let t = (0, In.c)(152),
    {
      canOpenFile: n,
      comments: i,
      modelComments: a,
      conversationId: o,
      cwd: s,
      workspaceRoot: c,
      diff: l,
      diffViewClassName: u,
      enableComments: p,
      allowCommentDrafts: m,
      handleLineClick: h,
      handleLineNumberClick: _,
      hostConfig: v,
      hoveredLineRef: y,
      hunkActionsVariant: b,
      hunkSeparators: x,
      loadFullContent: ee,
      fullContentLoader: S,
      showPartialWhileLoadingFullContent: ne,
      fullContentNextFallbackToDisk: C,
      fullContentIgnoreWhitespace: w,
      getFullContentSnapshotGeneration: re,
      fullContentSnapshotGeneration: T,
      metrics: E,
      readonlyComments: ie,
      submittingCommentKeys: ae,
      onCommentsChange: D,
      commentAuthorLabel: O,
      commentAuthorAvatarUrl: oe,
      isLoading: se,
      onReadonlyCommentReply: ce,
      renderReadonlyComment: k,
      renderReadonlyCommentActions: le,
      renderReadonlyCommentBody: ue,
      onLoadRetry: de,
      onHunkAction: fe,
      onPostRender: pe,
      onOpenInEditor: me,
      onRequestChanges: he,
      openFilePath: _e,
      open: ve,
      requestChangesRef: ye,
      richPreviewEnabled: j,
      showHunkActions: M,
      showLoadError: be,
      useReviewLineInfoSeparators: xe,
      viewType: N,
      wrapLines: P,
    } = e,
    Ce = r(ge),
    we = Ke(),
    F = Xe(),
    Te = f(g),
    I = f(tt),
    [Ee, De] = (0, Ln.useState)(null),
    L;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = () => {
        De(null);
      }),
      (t[0] = L))
    : (L = t[0]);
  let Oe = L,
    ke = Ie(A),
    Ae = (0, Ln.useRef)(null),
    R = v ?? ke,
    je = l.additions + l.deletions,
    Me;
  t[1] === l ? (Me = t[2]) : ((Me = Le(l)), (t[1] = l), (t[2] = Me));
  let Ne = Me,
    z = je > Rn,
    Pe = z || !Te ? `none` : `word-alt`,
    Fe = l.additions === 0 && l.deletions === 0,
    Re = l.metadata.type === `new`,
    B = l.metadata.type === `deleted`,
    V = Fe && l.metadata.type === `rename-pure`,
    ze = Ne,
    Be = s ?? void 0,
    H;
  t[3] !== l ||
  t[4] !== w ||
  t[5] !== S ||
  t[6] !== C ||
  t[7] !== T ||
  t[8] !== I ||
  t[9] !== R ||
  t[10] !== Be
    ? ((H = Lt({
        diff: l,
        fullContentLoader: S,
        hostConfig: R,
        ignoreWhitespace: w,
        loadFullFilesEnabled: I,
        nextFallbackToDisk: C,
        snapshotGeneration: T,
        workspaceRoot: Be,
      })),
      (t[3] = l),
      (t[4] = w),
      (t[5] = S),
      (t[6] = C),
      (t[7] = T),
      (t[8] = I),
      (t[9] = R),
      (t[10] = Be),
      (t[11] = H))
    : (H = t[11]);
  let U = te(Xt, H),
    Ve = f(U.fullDiffMetadata$),
    W = f(U.fullContentLoadFailed$),
    He = f(U.fullContentUnavailable$),
    Ue =
      ee &&
      I &&
      (s != null || S != null) &&
      ve &&
      l.metadata.isPartial &&
      !l.isBinary &&
      !l.isGitlink &&
      !Re &&
      !B &&
      !Fe &&
      !ze &&
      Ve == null &&
      !W &&
      !He,
    We;
  t[12] !== s ||
  t[13] !== l ||
  t[14] !== z ||
  t[15] !== U.key ||
  t[16] !== w ||
  t[17] !== S ||
  t[18] !== C ||
  t[19] !== T ||
  t[20] !== re ||
  t[21] !== E ||
  t[22] !== R ||
  t[23] !== Ce ||
  t[24] !== F
    ? ((We = () => {
        Z(Ce, {
          diff: l,
          fullContentLoader: S,
          getSnapshotGeneration: re,
          hostConfig: R,
          ignoreWhitespace: w,
          key: U.key,
          nextFallbackToDisk: C,
          primeDiffHighlightCache:
            F == null || z
              ? void 0
              : (e) => F.primeDiffHighlightCache({ ...e, cacheKey: Tt(e, E) }),
          snapshotGeneration: re?.() ?? T,
          workspaceRoot: s ?? void 0,
        });
      }),
      (t[12] = s),
      (t[13] = l),
      (t[14] = z),
      (t[15] = U.key),
      (t[16] = w),
      (t[17] = S),
      (t[18] = C),
      (t[19] = T),
      (t[20] = re),
      (t[21] = E),
      (t[22] = R),
      (t[23] = Ce),
      (t[24] = F),
      (t[25] = We))
    : (We = t[25]);
  let Ge = We,
    qe = (0, Ln.useEffectEvent)(Ge),
    Je;
  t[26] !== qe || t[27] !== Ue
    ? ((Je = () => {
        if (!Ue) return;
        let e = Ae.current;
        if (e == null) return;
        let t = new IntersectionObserver((e) => {
          e.some(Sn) && (t.disconnect(), qe());
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (t[26] = qe),
      (t[27] = Ue),
      (t[28] = Je))
    : (Je = t[28]);
  let Ye;
  (t[29] !== s ||
  t[30] !== l ||
  t[31] !== z ||
  t[32] !== U.key ||
  t[33] !== w ||
  t[34] !== C ||
  t[35] !== T ||
  t[36] !== re ||
  t[37] !== E ||
  t[38] !== R ||
  t[39] !== Ce ||
  t[40] !== Ue ||
  t[41] !== F
    ? ((Ye = [s, z, l, w, C, T, re, U.key, E, R, Ce, Ue, F]),
      (t[29] = s),
      (t[30] = l),
      (t[31] = z),
      (t[32] = U.key),
      (t[33] = w),
      (t[34] = C),
      (t[35] = T),
      (t[36] = re),
      (t[37] = E),
      (t[38] = R),
      (t[39] = Ce),
      (t[40] = Ue),
      (t[41] = F),
      (t[42] = Ye))
    : (Ye = t[42]),
    (0, Ln.useEffect)(Je, Ye));
  let G = Ve ?? l.metadata,
    Ze;
  t[43] !== Ne || t[44] !== Ve
    ? ((Ze = Ve == null ? Ne : Se(Ve)), (t[43] = Ne), (t[44] = Ve), (t[45] = Ze))
    : (Ze = t[45]);
  let Qe = Ze,
    $e;
  t[46] !== z || t[47] !== G
    ? (($e = z ? { ...G, lang: `text` } : G), (t[46] = z), (t[47] = G), (t[48] = $e))
    : ($e = t[48]);
  let rt = $e,
    it = b === `staged` ? null : _e,
    at;
  t[49] !== s || t[50] !== l || t[51] !== b || t[52] !== it || t[53] !== R.id
    ? ((at = Mn({ diff: l, openFilePath: it, cwd: s, hostId: R.id, hunkActionsVariant: b })),
      (t[49] = s),
      (t[50] = l),
      (t[51] = b),
      (t[52] = it),
      (t[53] = R.id),
      (t[54] = at))
    : (at = t[54]);
  let ot = at,
    K;
  t[55] !== m ||
  t[56] !== oe ||
  t[57] !== O ||
  t[58] !== i ||
  t[59] !== o ||
  t[60] !== s ||
  t[61] !== l.metadata.name ||
  t[62] !== p ||
  t[63] !== a ||
  t[64] !== D ||
  t[65] !== ce ||
  t[66] !== ie ||
  t[67] !== k ||
  t[68] !== le ||
  t[69] !== ue ||
  t[70] !== ae ||
  t[71] !== c
    ? ((K = {
        cwd: s,
        diffPath: l.metadata.name,
        workspaceRoot: c,
        enableComments: p,
        allowCommentDrafts: m,
        comments: i,
        modelComments: a,
        readonlyComments: ie,
        submittingCommentKeys: ae,
        onCommentsChange: D,
        commentAuthorLabel: O,
        commentAuthorAvatarUrl: oe,
        onReadonlyCommentReply: ce,
        renderReadonlyComment: k,
        renderReadonlyCommentActions: le,
        renderReadonlyCommentBody: ue,
        onSelectionClear: Oe,
        conversationId: o,
      }),
      (t[55] = m),
      (t[56] = oe),
      (t[57] = O),
      (t[58] = i),
      (t[59] = o),
      (t[60] = s),
      (t[61] = l.metadata.name),
      (t[62] = p),
      (t[63] = a),
      (t[64] = D),
      (t[65] = ce),
      (t[66] = ie),
      (t[67] = k),
      (t[68] = le),
      (t[69] = ue),
      (t[70] = ae),
      (t[71] = c),
      (t[72] = K))
    : (K = t[72]);
  let {
      annotations: st,
      annotationKeys: ct,
      addDraftComment: lt,
      renderCommentAnnotation: ut,
    } = et(K),
    dt;
  bb0: {
    if (!M || Re || B) {
      let e;
      (t[73] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[73] = e)) : (e = t[73]),
        (dt = e));
      break bb0;
    }
    let e;
    (t[74] !== l.metadata.hunks || t[75] !== l.metadata.name
      ? ((e = []),
        l.metadata.hunks.forEach((t, n) => {
          let r = an(t);
          r &&
            e.push({
              side: r.side,
              lineNumber: r.lineNumber,
              metadata: { kind: `hunk-actions`, path: l.metadata.name, hunkIndex: n },
            });
        }),
        (t[74] = l.metadata.hunks),
        (t[75] = l.metadata.name),
        (t[76] = e))
      : (e = t[76]),
      (dt = e));
  }
  let ft = dt,
    pt;
  t[77] !== st || t[78] !== p || t[79] !== ft || t[80] !== M
    ? ((pt = []),
      M && pt.push(...ft),
      p && pt.push(...st),
      (t[77] = st),
      (t[78] = p),
      (t[79] = ft),
      (t[80] = M),
      (t[81] = pt))
    : (pt = t[81]);
  let mt = pt,
    ht;
  t[82] === y
    ? (ht = t[83])
    : ((ht = (e) => {
        let { annotationSide: t, lineNumber: n } = e;
        y.current = { lineNumber: n, side: t };
      }),
      (t[82] = y),
      (t[83] = ht));
  let gt = ht,
    _t;
  t[84] === y
    ? (_t = t[85])
    : ((_t = () => {
        y.current = null;
      }),
      (t[84] = y),
      (t[85] = _t));
  let vt = _t,
    yt;
  t[86] !== lt || t[87] !== m || t[88] !== ct || t[89] !== G || t[90] !== y || t[91] !== he
    ? ((yt = () => {
        if (!m) return;
        let e = y.current;
        if (!e) return;
        let t = nt(e.side, e.lineNumber);
        ct.has(t) ||
          (lt({
            side: e.side,
            lineNumber: e.lineNumber,
            localDiffHunk: Qt(G, { side: e.side, start: e.lineNumber, end: e.lineNumber }),
          }),
          he?.());
      }),
      (t[86] = lt),
      (t[87] = m),
      (t[88] = ct),
      (t[89] = G),
      (t[90] = y),
      (t[91] = he),
      (t[92] = yt))
    : (yt = t[92]);
  let bt = yt,
    xt,
    St;
  (t[93] !== bt || t[94] !== ye
    ? ((xt = () => (
        (ye.current = bt),
        () => {
          ye.current === bt && (ye.current = xn);
        }
      )),
      (St = [bt, ye]),
      (t[93] = bt),
      (t[94] = ye),
      (t[95] = xt),
      (t[96] = St))
    : ((xt = t[95]), (St = t[96])),
    (0, Ln.useEffect)(xt, St));
  let Ct;
  t[97] !== b || t[98] !== fe || t[99] !== ut
    ? ((Ct = (e) => {
        let t = e.metadata;
        return t
          ? t.kind === `hunk-actions`
            ? (0, $.jsx)(jn, { path: t.path, hunkIndex: t.hunkIndex, onHunkAction: fe, variant: b })
            : ut(e)
          : null;
      }),
      (t[97] = b),
      (t[98] = fe),
      (t[99] = ut),
      (t[100] = Ct))
    : (Ct = t[100]);
  let wt = Ct,
    q;
  t[101] !== lt || t[102] !== m || t[103] !== ct || t[104] !== G
    ? ((q = (e) => {
        if (!m) return;
        let t = e,
          n = t.endSide ?? t.side;
        if (n == null) return;
        window.requestAnimationFrame(() => {
          De({ ...t });
        });
        let r = t.endSide != null && t.endSide !== t.side,
          i = r ? t.end : Math.max(t.start, t.end),
          a = nt(n, i);
        ct.has(a) ||
          lt({
            side: n,
            lineNumber: i,
            ...(t.start !== t.end || r
              ? { startLine: r ? t.start : Math.min(t.start, t.end) }
              : {}),
            ...(r && t.side != null ? { startSide: t.side } : {}),
            localDiffHunk: Qt(G, t),
          });
      }),
      (t[101] = lt),
      (t[102] = m),
      (t[103] = ct),
      (t[104] = G),
      (t[105] = q))
    : (q = t[105]);
  let J = q,
    Et = se || (Ue && !ne),
    Ot;
  t[106] !== m ||
  t[107] !== mt ||
  t[108] !== n ||
  t[109] !== l ||
  t[110] !== u ||
  t[111] !== p ||
  t[112] !== rt ||
  t[113] !== W ||
  t[114] !== Ge ||
  t[115] !== J ||
  t[116] !== h ||
  t[117] !== gt ||
  t[118] !== vt ||
  t[119] !== _ ||
  t[120] !== Fe ||
  t[121] !== x ||
  t[122] !== ot ||
  t[123] !== B ||
  t[124] !== V ||
  t[125] !== Pe ||
  t[126] !== it ||
  t[127] !== E ||
  t[128] !== de ||
  t[129] !== me ||
  t[130] !== pe ||
  t[131] !== wt ||
  t[132] !== Qe ||
  t[133] !== j ||
  t[134] !== Ee ||
  t[135] !== M ||
  t[136] !== be ||
  t[137] !== Et ||
  t[138] !== xe ||
  t[139] !== N ||
  t[140] !== we ||
  t[141] !== P
    ? ((Ot = Et
        ? (0, $.jsx)(wn, { diff: l, lines: Tn(l) })
        : be
          ? (0, $.jsx)(On, { onRetry: de })
          : Qe
            ? (0, $.jsx)(Cn, { canOpenFile: n, onOpenInEditor: me })
            : (0, $.jsxs)($.Fragment, {
                children: [
                  W ? (0, $.jsx)(kn, { onRetry: Ge }) : null,
                  (0, $.jsx)(Dt, {
                    diffViewProps: {
                      diffViewClassName: u,
                      disableScrollAnchor: we != null,
                      fileDiff: rt,
                      metrics: E,
                      viewType: N,
                      wrapLines: P,
                      hunkSeparators: x,
                      lineDiffType: Pe,
                      expansionLineCount: 20,
                      enableLineSelection: m,
                      onLineEnter: gt,
                      onLineLeave: vt,
                      onLineClick: h,
                      onLineNumberClick: _,
                      onLineSelected: De,
                      onLineSelectionChange: De,
                      selectedLines: Ee,
                      lineAnnotations: mt,
                      renderAnnotation: M || p ? wt : void 0,
                      onGutterUtilityClick: m ? J : void 0,
                      onPostRender: pe,
                      useReviewLineInfoSeparators: xe,
                    },
                    filePath: l.metadata.name,
                    previewPath: it,
                    imagePreview: ot,
                    hasNoChanges: Fe,
                    isRenameWithoutChanges: V,
                    isBinary: l.isBinary,
                    isDeletion: B,
                    richPreviewEnabled: j,
                  }),
                ],
              })),
      (t[106] = m),
      (t[107] = mt),
      (t[108] = n),
      (t[109] = l),
      (t[110] = u),
      (t[111] = p),
      (t[112] = rt),
      (t[113] = W),
      (t[114] = Ge),
      (t[115] = J),
      (t[116] = h),
      (t[117] = gt),
      (t[118] = vt),
      (t[119] = _),
      (t[120] = Fe),
      (t[121] = x),
      (t[122] = ot),
      (t[123] = B),
      (t[124] = V),
      (t[125] = Pe),
      (t[126] = it),
      (t[127] = E),
      (t[128] = de),
      (t[129] = me),
      (t[130] = pe),
      (t[131] = wt),
      (t[132] = Qe),
      (t[133] = j),
      (t[134] = Ee),
      (t[135] = M),
      (t[136] = be),
      (t[137] = Et),
      (t[138] = xe),
      (t[139] = N),
      (t[140] = we),
      (t[141] = P),
      (t[142] = Ot))
    : (Ot = t[142]);
  let kt = Ot;
  if (we != null) {
    let e;
    return (
      t[143] !== kt || t[144] !== vt
        ? ((e = (0, $.jsx)(`div`, {
            ref: Ae,
            className: `relative overflow-hidden`,
            onMouseLeave: vt,
            children: kt,
          })),
          (t[143] = kt),
          (t[144] = vt),
          (t[145] = e))
        : (e = t[145]),
      e
    );
  }
  let At, Y, X;
  t[146] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((At = { height: `auto`, opacity: 1 }),
      (Y = { height: 0, opacity: 0 }),
      (X = { duration: 0, ease: `easeInOut` }),
      (t[146] = At),
      (t[147] = Y),
      (t[148] = X))
    : ((At = t[146]), (Y = t[147]), (X = t[148]));
  let jt;
  return (
    t[149] !== kt || t[150] !== vt
      ? ((jt = (0, $.jsx)(d.div, {
          ref: Ae,
          initial: !1,
          animate: At,
          exit: Y,
          transition: X,
          className: `relative overflow-hidden`,
          onMouseLeave: vt,
          children: kt,
        })),
        (t[149] = kt),
        (t[150] = vt),
        (t[151] = jt))
      : (jt = t[151]),
    jt
  );
}
function xn() {}
function Sn(e) {
  return e.isIntersecting;
}
function Cn(e) {
  let t = (0, In.c)(6),
    { canOpenFile: n, onOpenInEditor: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: (0, $.jsx)(c, {
          id: `codex.diff.openInEditorPrompt.singleLine`,
          defaultMessage: `This file is too large to display here.`,
          description: `Single-line prompt shown in the diff view when a file is too large to render in-panel`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== n || t[2] !== r
    ? ((a = n
        ? (0, $.jsx)(F, {
            className: `shrink-0 px-1.5`,
            color: `ghost`,
            size: `toolbar`,
            onClick: r,
            children: (0, $.jsx)(c, {
              id: `codex.diff.openInEditorPrompt.openButton`,
              defaultMessage: `Open in editor`,
              description: `Button label shown in the large-diff prompt to open the file in an editor`,
            }),
          })
        : null),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-2 bg-surface-tertiary px-3 py-2 text-size-chat text-codex-description`,
          children: [i, a],
        })),
        (t[4] = a),
        (t[5] = o)),
    o
  );
}
function wn(e) {
  let t = (0, In.c)(4),
    { diff: n, lines: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(c, {
          id: `codex.review.diff.loading`,
          defaultMessage: `Loading diff`,
          description: `Placeholder text shown while a review file diff is loading`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a = `diff-loading-${n.metadata.name}-${n.additions}-${n.deletions}`,
    o;
  return (
    t[1] !== r || t[2] !== a
      ? ((o = (0, $.jsx)(`div`, {
          className: `bg-surface px-3 pt-2 pb-3 text-sm`,
          children: (0, $.jsxs)(`div`, {
            className: `w-full`,
            "aria-live": `polite`,
            role: `status`,
            children: [i, (0, $.jsx)(Je, { lines: r, minWidth: 42, maxWidth: 96, seed: a })],
          }),
        })),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function Tn(e) {
  return Math.min(Vn, Math.max(Bn, e.additions + e.deletions + 2 * zn));
}
function En(e) {
  let t = (0, In.c)(15),
    { path: n } = e,
    r,
    i,
    a;
  t[0] === n
    ? ((r = t[1]), (i = t[2]), (a = t[3]))
    : ((r = Gn.resolveIcon(`file-tree-icon-file`, n)),
      (a = `size-4 shrink-0`),
      (i = Dn(r.token)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  let o;
  t[4] === i ? (o = t[5]) : ((o = { color: i }), (t[4] = i), (t[5] = o));
  let s = r.viewBox ?? `0 0 16 16`,
    c = `#${r.name}`,
    l;
  t[6] === c ? (l = t[7]) : ((l = (0, $.jsx)(`use`, { href: c })), (t[6] = c), (t[7] = l));
  let u;
  t[8] !== s || t[9] !== l
    ? ((u = (0, $.jsx)(`svg`, {
        "aria-hidden": !0,
        className: `size-4 shrink-0`,
        viewBox: s,
        children: l,
      })),
      (t[8] = s),
      (t[9] = l),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== a || t[12] !== o || t[13] !== u
      ? ((d = (0, $.jsx)(`span`, { className: a, style: o, children: u })),
        (t[11] = a),
        (t[12] = o),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function Dn(e) {
  if (e == null) return `var(--color-text-tertiary)`;
  let t = Wn[e];
  return t == null
    ? `var(--color-text-tertiary)`
    : `var(--trees-file-icon-color-${e}, var(--trees-file-icon-color, ${Un[t]}))`;
}
function On(e) {
  let t = (0, In.c)(5),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(c, {
        id: `codex.review.diff.loadFailedAfterRetrying`,
        defaultMessage: `Diff failed to load after retrying`,
        description: `Placeholder text shown when a review file diff failed to load after automatic retries`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i =
        n == null
          ? null
          : (0, $.jsx)(F, {
              className: `shrink-0 text-default`,
              color: `outline`,
              onClick: n,
              size: `default`,
              children: (0, $.jsx)(c, {
                id: `codex.common.retry`,
                defaultMessage: `Retry`,
                description: `Retry button`,
              }),
            })),
      (t[1] = n),
      (t[2] = i));
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = (0, $.jsxs)(w, { className: `gap-2 bg-surface py-4`, children: [r, i] })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
function kn(e) {
  let t = (0, In.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(`span`, {
        className: `text-secondary`,
        children: (0, $.jsx)(c, {
          id: `codex.review.diff.fullContentLoadFailed`,
          defaultMessage: `Full file content failed to load`,
          description: `Inline notice shown when a partial diff could not be expanded to full file content`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(c, {
        id: `codex.common.retry`,
        defaultMessage: `Retry`,
        description: `Retry button`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-2 bg-surface px-3 py-2 text-sm`,
          children: [
            r,
            (0, $.jsx)(F, {
              className: `shrink-0`,
              color: `outline`,
              onClick: n,
              size: `default`,
              children: i,
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function An(e) {
  let t = (0, In.c)(23),
    { disabled: n, variant: r, onFileAction: i, useMutedButtonStyle: a } = e,
    o = r === `staged` ? `unstage` : `stage`,
    s = a ? `ghostTertiary` : `ghost`,
    c = a ? `iconMd` : void 0,
    l =
      a &&
      r === `unstaged` &&
      `gap-0.5 opacity-0 group-hover/diff-header:opacity-100 group-has-[:focus-visible]/diff-header:opacity-100`,
    u = !a && `opacity-0 group-hover/file-diff:opacity-100`,
    d;
  t[0] !== l || t[1] !== u
    ? ((d = D(`flex items-center`, l, u)), (t[0] = l), (t[1] = u), (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === i
    ? (f = t[4])
    : ((f = (e) => {
        (e.stopPropagation(), i?.(`revert`));
      }),
      (t[3] = i),
      (t[4] = f));
  let p;
  t[5] !== s || t[6] !== n || t[7] !== c || t[8] !== f
    ? ((p = (0, $.jsx)(Mt, {
        action: `revert`,
        color: s,
        disabled: n,
        size: c,
        scope: `file`,
        onClick: f,
      })),
      (t[5] = s),
      (t[6] = n),
      (t[7] = c),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== o || t[11] !== i
    ? ((m = (e) => {
        (e.stopPropagation(), i?.(o));
      }),
      (t[10] = o),
      (t[11] = i),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] !== o || t[14] !== s || t[15] !== n || t[16] !== c || t[17] !== m
    ? ((h = (0, $.jsx)(Mt, {
        scope: `file`,
        action: o,
        color: s,
        disabled: n,
        size: c,
        onClick: m,
      })),
      (t[13] = o),
      (t[14] = s),
      (t[15] = n),
      (t[16] = c),
      (t[17] = m),
      (t[18] = h))
    : (h = t[18]);
  let g;
  return (
    t[19] !== d || t[20] !== p || t[21] !== h
      ? ((g = (0, $.jsxs)(`div`, { className: d, children: [p, h] })),
        (t[19] = d),
        (t[20] = p),
        (t[21] = h),
        (t[22] = g))
      : (g = t[22]),
    g
  );
}
function jn(e) {
  let t = (0, In.c)(15),
    { path: n, hunkIndex: r, onHunkAction: i, variant: a } = e,
    o = a === `staged` ? `unstage` : `stage`,
    s;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((s = (0, $.jsx)(Mt, {
        action: `revert`,
        scope: `hunk`,
        onClick: (e) => {
          (e.stopPropagation(), i?.({ path: n, hunkIndex: r, action: `revert`, scope: `hunk` }));
        },
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = n),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== o || t[5] !== r || t[6] !== i || t[7] !== n
    ? ((c = (e) => {
        (e.stopPropagation(), i?.({ path: n, hunkIndex: r, action: o, scope: `hunk` }));
      }),
      (t[4] = o),
      (t[5] = r),
      (t[6] = i),
      (t[7] = n),
      (t[8] = c))
    : (c = t[8]);
  let l;
  t[9] !== o || t[10] !== c
    ? ((l = (0, $.jsx)(Mt, { scope: `hunk`, action: o, onClick: c })),
      (t[9] = o),
      (t[10] = c),
      (t[11] = l))
    : (l = t[11]);
  let u;
  return (
    t[12] !== s || t[13] !== l
      ? ((u = (0, $.jsxs)(`div`, {
          className: `pointer-events-none absolute -top-8.5 right-0.5 z-20 flex items-center gap-1 rounded-full bg-surface-secondary/90 px-0.5 py-0.5 opacity-0 shadow-sm ring-1 ring-border/60 transition-opacity group-hover/file-diff:pointer-events-auto group-hover/file-diff:opacity-100`,
          children: [s, l],
        })),
        (t[12] = s),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function Mn({ diff: e, openFilePath: t, cwd: n, hostId: r, hunkActionsVariant: i }) {
  let a = Nn(
      i === `unstaged`
        ? { cwd: n, hostId: r, path: e.oldPath, ref: `index` }
        : { cwd: n, hostId: r, path: e.oldPath, ref: `head` },
    ),
    o = i === `staged` ? Nn({ cwd: n, hostId: r, path: e.newPath, ref: `index` }) : Pn(t, r);
  return !a && !o ? null : { before: a, after: o };
}
function Nn({ cwd: e, hostId: t, path: n, ref: r }) {
  return !e || !n || n === `/dev/null` ? null : { kind: `git`, cwd: e, hostId: t, path: n, ref: r };
}
function Pn(e, t) {
  return !e || e === `/dev/null` ? null : { kind: `worktree`, path: e, hostId: t };
}
function Fn({ ctrlKey: e, metaKey: t }) {
  return e || t;
}
var In,
  Ln,
  $,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn = e(() => {
    ((In = I()),
      Ge(),
      je(),
      W(),
      Ae(),
      C(),
      (Ln = t(a(), 1)),
      O(),
      H(),
      he(),
      i(),
      S(),
      Te(),
      G(),
      v(),
      jt(),
      Ye(),
      _e(),
      Et(),
      le(),
      oe(),
      He(),
      y(),
      u(),
      rt(),
      R(),
      U(),
      x(),
      M(),
      L(),
      m(),
      pe(),
      _(),
      Ft(),
      $e(),
      Zt(),
      ft(),
      rn(),
      it(),
      ke(),
      sn(),
      dt(),
      Ze(),
      fn(),
      ($ = P()),
      (Rn = 2e3),
      (zn = 3),
      (Bn = 3),
      (Vn = 24),
      (Hn = ` -> `),
      (Un = {
        blue: `light-dark(#1a85d4, #69b1ff)`,
        cyan: `light-dark(#1ca1c7, #68cdf2)`,
        gray: `light-dark(#84848a, #adadb1)`,
        green: `light-dark(#199f43, #5ecc71)`,
        indigo: `light-dark(#693acf, #9d6afb)`,
        mauve: `light-dark(#594c5b, #79697b)`,
        orange: `light-dark(#d47628, #ffa359)`,
        pink: `light-dark(#d32a61, #ff678d)`,
        purple: `light-dark(#a631be, #d568ea)`,
        red: `light-dark(#d52c36, #ff6762)`,
        teal: `light-dark(#17a5af, #64d1db)`,
        vermilion: `light-dark(#ff8c5b, #d5512f)`,
        yellow: `light-dark(#d5a910, #ffd452)`,
      }),
      (Wn = {
        astro: `purple`,
        babel: `yellow`,
        bash: `green`,
        biome: `blue`,
        bootstrap: `indigo`,
        browserslist: `yellow`,
        bun: `mauve`,
        c: `blue`,
        claude: `orange`,
        cpp: `blue`,
        css: `indigo`,
        database: `purple`,
        default: `gray`,
        docker: `blue`,
        eslint: `indigo`,
        git: `vermilion`,
        go: `cyan`,
        graphql: `pink`,
        html: `orange`,
        image: `pink`,
        javascript: `yellow`,
        json: `orange`,
        markdown: `green`,
        mcp: `teal`,
        npm: `red`,
        oxc: `cyan`,
        postcss: `red`,
        prettier: `teal`,
        python: `blue`,
        react: `cyan`,
        ruby: `red`,
        rust: `orange`,
        sass: `pink`,
        svg: `orange`,
        svelte: `red`,
        svgo: `green`,
        swift: `orange`,
        table: `teal`,
        tailwind: `cyan`,
        terraform: `indigo`,
        text: `gray`,
        typescript: `blue`,
        vite: `purple`,
        vscode: `blue`,
        vue: `green`,
        wasm: `indigo`,
        webpack: `blue`,
        yml: `red`,
        zig: `orange`,
        zip: `orange`,
      }),
      (Gn = Ee()));
  });
export { Zt as a, J as c, cn as i, St as l, Kn as n, It as o, fn as r, q as s, pn as t, Ct as u };
//# sourceMappingURL=code-diff-dbee820b6963.js.map
