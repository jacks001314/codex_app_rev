import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AT as r,
  DU as i,
  FBt as a,
  FTt as o,
  HTt as s,
  IH as c,
  ITt as l,
  LNt as u,
  MNt as d,
  NNt as f,
  NO as p,
  Nk as m,
  Oz as h,
  PBt as g,
  PO as _,
  Pk as v,
  Qst as y,
  TCt as b,
  TY as x,
  VTt as ee,
  XG as S,
  XOt as te,
  Y3 as C,
  Yst as ne,
  Z3 as w,
  ZH as re,
  ZSt as T,
  bB as E,
  ck as D,
  gB as O,
  hB as ie,
  iCt as ae,
  jT as k,
  jz as oe,
  kz as se,
  nB as ce,
  nCt as le,
  okt as ue,
  rB as de,
  rk as fe,
  sct as pe,
  tCt as me,
  tk as he,
  tkt as A,
  vB as ge,
  wz as _e,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bcr as ve,
  Byt as ye,
  Dar as be,
  Dor as j,
  Ear as xe,
  Eor as M,
  Hpr as N,
  I7n as Se,
  Iyt as P,
  KBr as Ce,
  L7n as we,
  MOr as Te,
  N0 as F,
  Nyt as Ee,
  P0 as De,
  Rcr as I,
  Upr as Oe,
  Vcr as L,
  Yyt as ke,
  Zyt as Ae,
  _p as R,
  _tn as z,
  c5t as je,
  ebt as Me,
  fCt as Ne,
  gp as B,
  kar as V,
  l5t as Pe,
  lDn as Fe,
  lbt as Ie,
  mQn as Le,
  oRn as Re,
  pCt as ze,
  qBr as Be,
  rbt as Ve,
  sDn as He,
  sRn as H,
  tbt as Ue,
  u5t as We,
  ubt as Ge,
  vtn as Ke,
  w4n as U,
  x4n as qe,
  zOr as Je,
} from "./app-initial-ad16eaadf81f.js";
import { mh as Ye, ph as Xe } from "./app-primary-3e00728c2a4c.js";
import { a as Ze, o as Qe, r as W, t as $e } from "./codex-diff-css-38be692bb624.js";
import { a as et, i as tt } from "./register-pierre-themes-8ff08e47faf4.js";
import { f as nt, l as rt, n as it, p as at, t as ot } from "./use-diff-annotations-a6f2dca78adc.js";
import {
  _ as st,
  a as ct,
  c as lt,
  d as ut,
  f as dt,
  g as ft,
  h as pt,
  l as mt,
  m as ht,
  o as G,
  p as gt,
  r as _t,
  s as vt,
  t as yt,
  u as bt,
  v as xt,
} from "./review-preferences-model-ed5ca3d17e0f.js";
import { n as St, t as Ct } from "./file-diff-232655eefd3e.js";
import { n as wt, r as Tt, t as Et } from "./full-content-metadata-ec0b043a8339.js";
import { n as Dt, t as Ot } from "./undo-a5499b0bd547.js";
function kt(e, t) {
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
        Le(
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
function At() {
  return (At = e(() => {}))();
}
function jt(e) {
  let t = (0, Nt.c)(26),
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
  t[0] !== n.fileDiff || t[1] !== n.metrics
    ? ((d = kt(n.fileDiff, n.metrics)), (t[0] = n.fileDiff), (t[1] = n.metrics), (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== n || t[4] !== d
    ? ((f = (0, J.jsx)(Mt, { ...n }, d)), (t[3] = n), (t[4] = d), (t[5] = f))
    : (f = t[5]);
  let p = f,
    m = s ? `binary` : l ? `rename-without-changes` : `empty`,
    h;
  t[6] === m ? (h = t[7]) : ((h = (0, J.jsx)(q, { kind: m })), (t[6] = m), (t[7] = h));
  let g = h,
    _,
    v;
  t[8] !== r || t[9] !== c || t[10] !== u
    ? ((_ = be(r)),
      (v = xe({ filePath: r, imagePreviewMode: _, isDeletion: c, richPreviewEnabled: u })),
      (t[8] = r),
      (t[9] = c),
      (t[10] = u),
      (t[11] = _),
      (t[12] = v))
    : ((_ = t[11]), (v = t[12]));
  let y = v;
  if (y === `markdown`) {
    let e;
    return (
      t[13] !== p || t[14] !== n.diffViewClassName || t[15] !== i
        ? ((e = (0, J.jsx)(pt, { className: n.diffViewClassName, path: i, fallback: p })),
          (t[13] = p),
          (t[14] = n.diffViewClassName),
          (t[15] = i),
          (t[16] = e))
        : (e = t[16]),
      e
    );
  }
  if (y === `image`) {
    let e = _ === `always` ? g : p,
      r = _ === `always`,
      i;
    return (
      t[17] !== n.diffViewClassName || t[18] !== a || t[19] !== e || t[20] !== r
        ? ((i = (0, J.jsx)(st, {
            className: n.diffViewClassName,
            imagePreview: a,
            fallback: e,
            showMissingPreview: r,
          })),
          (t[17] = n.diffViewClassName),
          (t[18] = a),
          (t[19] = e),
          (t[20] = r),
          (t[21] = i))
        : (i = t[21]),
      i
    );
  }
  if (y === `pdf`) {
    let e;
    return (
      t[22] !== n.diffViewClassName || t[23] !== g || t[24] !== a
        ? ((e = (0, J.jsx)(gt, {
            className: n.diffViewClassName,
            imagePreview: a,
            fallback: g,
            showMissingPreview: !0,
          })),
          (t[22] = n.diffViewClassName),
          (t[23] = g),
          (t[24] = a),
          (t[25] = e))
        : (e = t[25]),
      e
    );
  }
  return o || s ? g : p;
}
function Mt(e) {
  let t = (0, Nt.c)(25),
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
      (o = kt(a.fileDiff, a.metrics)),
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
  t[8] !== l || t[9] !== a.fileDiff
    ? ((u = () => ({ ...a.fileDiff, cacheKey: l })), (t[8] = l), (t[9] = a.fileDiff), (t[10] = u))
    : (u = t[10]);
  let [f] = (0, Pt.useState)(u),
    p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = (0, J.jsx)(K, {})), (t[11] = p)) : (p = t[11]);
  let m = r && `[overflow-anchor:none]`,
    h;
  t[12] !== n || t[13] !== m
    ? ((h = d(`relative overflow-clip [contain:content]`, m, n)), (t[12] = n), (t[13] = m), (t[14] = h))
    : (h = t[14]);
  let g = s === `split` ? `split` : `unified`,
    _ = c ? `wrap` : `scroll`,
    v = i ?? `simple`,
    y;
  t[15] !== f || t[16] !== a || t[17] !== h || t[18] !== g || t[19] !== _ || t[20] !== v
    ? ((y = (0, J.jsx)(Ct, {
        className: h,
        diffStyle: g,
        overflow: _,
        hunkSeparators: v,
        ...a,
        fileDiff: f,
      })),
      (t[15] = f),
      (t[16] = a),
      (t[17] = h),
      (t[18] = g),
      (t[19] = _),
      (t[20] = v),
      (t[21] = y))
    : (y = t[21]);
  let b;
  return (
    t[22] !== l || t[23] !== y
      ? ((b = (0, J.jsx)(He, { name: `FileDiff`, fallback: p, resetKey: l, children: y })),
        (t[22] = l),
        (t[23] = y),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
function K() {
  let e = (0, Nt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(`div`, {
          className: `flex items-center bg-surface px-3 py-4 text-sm text-secondary`,
          children: (0, J.jsx)(A, {
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
function q(e) {
  let t = (0, Nt.c)(2),
    { kind: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, J.jsx)(B, {
          className: `h-full bg-surface-tertiary py-4 empty:hidden`,
          children:
            n === `binary`
              ? (0, J.jsx)(A, {
                  id: `wham.diff.binaryFile`,
                  defaultMessage: `Binary file not shown`,
                  description: `Text shown when a binary file is not shown.`,
                })
              : n === `rename-without-changes`
                ? (0, J.jsx)(A, {
                    id: `codex.diff.fileRenamedWithoutChanges`,
                    defaultMessage: `File renamed without changes`,
                    description: `Text shown when a file was renamed without content changes.`,
                  })
                : (0, J.jsx)(A, {
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
var Nt, Pt, J;
function Ft() {
  return (Ft = e(() => {
    ((Nt = g()), f(), (Pt = a()), te(), Fe(), R(), St(), At(), xt(), ft(), ht(), V(), (J = u()));
  }))();
}
function It(e) {
  let t = (0, Lt.c)(32),
    { action: n, className: i, color: a, disabled: o, size: s, scope: c, onClick: l } = e,
    u = a === void 0 ? `ghost` : a,
    d = o !== void 0 && o,
    f = s === void 0 ? `composerSm` : s,
    p = ue(),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsx)(Ot, { className: `icon-2xs` })), (t[0] = m))
    : (m = t[0]);
  let h = m;
  if (n === `stage`) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(F, { className: `icon-2xs` })), (t[1] = e))
      : (e = t[1]),
      (h = e));
  } else if (n === `unstage`) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(r, { className: `icon-2xs` })), (t[2] = e))
      : (e = t[2]),
      (h = e));
  }
  let g;
  if (c === `file`) {
    if (n === `stage`) {
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
        (g = e));
    } else if (n === `unstage`) {
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
        (g = e));
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
        (g = e));
    }
  } else if (c === `hunk`) {
    if (n === `stage`) {
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
        (g = e));
    } else if (n === `unstage`) {
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
        (g = e));
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
        (g = e));
    }
  } else if (c === `section`) {
    if (n === `stage`) {
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
        (g = e));
    } else if (n === `unstage`) {
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
        (g = e));
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
        (g = e));
    }
  }
  let _;
  t[21] !== i || t[22] !== u || t[23] !== d || t[24] !== h || t[25] !== l || t[26] !== f || t[27] !== g
    ? ((_ = (0, Y.jsx)(C, {
        className: i,
        color: u,
        disabled: d,
        size: f,
        uniform: !0,
        "aria-label": g,
        onClick: l,
        children: h,
      })),
      (t[21] = i),
      (t[22] = u),
      (t[23] = d),
      (t[24] = h),
      (t[25] = l),
      (t[26] = f),
      (t[27] = g),
      (t[28] = _))
    : (_ = t[28]);
  let v;
  return (
    t[29] !== _ || t[30] !== g
      ? ((v = (0, Y.jsx)(ce, { tooltipContent: g, children: _ })), (t[29] = _), (t[30] = g), (t[31] = v))
      : (v = t[31]),
    v
  );
}
var Lt, Y;
function Rt() {
  return (Rt = e(() => {
    ((Lt = g()), te(), w(), de(), k(), De(), Dt(), (Y = u()));
  }))();
}
async function zt(e, t) {
  let n = e.get($t, t.key),
    r = Z.get(n);
  if (n.fullDiffMetadata$.get() != null || n.fullContentUnavailable$.get()) return;
  if (r != null && r.snapshotGeneration === t.snapshotGeneration) {
    r.primeDiffHighlightCache = t.primeDiffHighlightCache;
    return;
  }
  let i = { primeDiffHighlightCache: t.primeDiffHighlightCache, snapshotGeneration: t.snapshotGeneration };
  (Z.set(n, i), n.fullContentLoadFailed$.set(!1), n.fullContentUnavailable$.set(!1));
  let a = () => {
    let n = t.getSnapshotGeneration?.();
    return n == null || n === i.snapshotGeneration
      ? null
      : zt(e, { ...t, getSnapshotGeneration: void 0, snapshotGeneration: n });
  };
  try {
    let e = await (t.fullContentLoader?.load() ??
      Ht({
        diff: t.diff,
        hostConfig: t.hostConfig,
        ignoreWhitespace: t.ignoreWhitespace,
        nextFallbackToDisk: t.nextFallbackToDisk,
        snapshotGeneration: t.snapshotGeneration,
        workspaceRoot: t.workspaceRoot,
      }));
    if (Z.get(n) !== i) return;
    switch (e.type) {
      case `success`: {
        let t = i.primeDiffHighlightCache;
        for (; t != null;) {
          if ((await t(e.metadata).catch(() => {}), Z.get(n) !== i)) return;
          if (i.primeDiffHighlightCache === t) break;
          t = i.primeDiffHighlightCache;
        }
        Z.get(n) === i && n.fullDiffMetadata$.set(e.metadata);
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
    if (Z.get(n) === i) {
      let e = a();
      if (e != null) return await e;
      n.fullContentLoadFailed$.set(!0);
    }
  } finally {
    Z.get(n) === i && Z.delete(n);
  }
}
function Bt({
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
  let a = Xt.exec(n.revision),
    o = a?.[1],
    s = a?.[2];
  if (o == null || s == null) return;
  let c = n.previousPath ?? n.path,
    l = n.path,
    u = Ut({
      hostConfig: e,
      nextObjectId: s,
      nextFallbackToDisk: t,
      nextPath: l,
      prevObjectId: o,
      prevPath: c,
      snapshotGeneration: r,
      workspaceRoot: i,
    });
  if (Qt.has(u)) return;
  let d = X({
    cwd: i,
    hostConfig: e,
    maxObjectBytes: Yt,
    requests: [
      { fallbackToDisk: !1, oid: o, path: c },
      { fallbackToDisk: t, oid: s, path: l },
    ],
    snapshotGeneration: r,
  })
    .then((e) => (e.some((e) => e.type === `error` && e.error.type === `too-large`) ? null : e))
    .catch(() => null);
  (Qt.set(u, d),
    d.then(() => {
      setTimeout(() => {
        Qt.get(u) === d && Qt.delete(u);
      }, Jt);
    }));
}
function Vt({
  diff: e,
  fullContentLoader: t,
  hostConfig: n,
  ignoreWhitespace: r,
  loadFullFilesEnabled: i,
  nextFallbackToDisk: a,
  snapshotGeneration: o,
  workspaceRoot: s,
}) {
  return `${t?.key ?? e.metadata.cacheKey ?? `${e.metadata.name}:${e.metadata.prevObjectId ?? `none`}:${e.metadata.newObjectId ?? `none`}:${e.additions}:${e.deletions}`}:${e.metadata.prevName ?? ``}:${e.metadata.name}:${s ?? ``}:${I(n)}:${a ? `next-disk-fallback` : `next-object-only`}:${r ? `ignore-whitespace` : `exact-whitespace`}:${i ? `full` : `partial`}:${o ?? `unversioned`}`;
}
async function Ht({
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
    d = c ? u.push({ path: o, oid: e.metadata.prevObjectId ?? null, fallbackToDisk: !1 }) - 1 : null,
    f = l
      ? u.push({
          path: s,
          oid: e.metadata.newObjectId ?? null,
          fallbackToDisk: r || e.metadata.newObjectId == null,
        }) - 1
      : null,
    p = Ut({
      hostConfig: t,
      nextObjectId: e.metadata.newObjectId,
      nextFallbackToDisk: r,
      nextPath: s,
      prevObjectId: e.metadata.prevObjectId,
      prevPath: o,
      snapshotGeneration: i,
      workspaceRoot: a,
    }),
    m = Qt.get(p);
  m != null && Qt.delete(p);
  let h = (await m) ?? (await X({ cwd: a, hostConfig: t, requests: u, snapshotGeneration: i })),
    g = (e) => (e == null ? wt() : (h[e] ?? Gt())),
    _ = g(d),
    v = g(f);
  if ((_.type === `error` && Kt(_.error)) || (v.type === `error` && Kt(v.error)))
    return { type: `unavailable` };
  if (_.type === `error` || v.type === `error`) return { type: `error` };
  let y = Et(e.metadata, _.lines, v.lines, { ignoreWhitespace: n });
  return y == null ? { type: `unavailable` } : { type: `success`, metadata: y };
}
function Ut({
  hostConfig: e,
  nextObjectId: t,
  nextFallbackToDisk: n,
  nextPath: r,
  prevObjectId: i,
  prevPath: a,
  snapshotGeneration: o,
  workspaceRoot: s,
}) {
  return JSON.stringify([I(e), s, o ?? null, a, r, i, t, n]);
}
function X({ cwd: e, hostConfig: t, maxObjectBytes: n, requests: r, snapshotGeneration: i }) {
  let a = JSON.stringify([I(t), e, n ?? null, i ?? null]),
    o = Zt.get(a);
  if (o == null) {
    ((o = { cwd: e, hostConfig: t, maxObjectBytes: n, snapshotGeneration: i, waiters: [] }), Zt.set(a, o));
    let r = o;
    setTimeout(() => {
      Zt.get(a) === r && Wt(a, r);
    }, qt);
  }
  let s = o;
  return new Promise((e, t) => {
    s.waiters.push({ reject: t, requests: r, resolve: e });
  });
}
async function Wt(e, t) {
  let n = 0;
  try {
    for (; n < t.waiters.length;) {
      let e = n,
        r = 0;
      for (; e < t.waiters.length && (e === n || r + (t.waiters[e]?.requests.length ?? 0) <= 4);)
        ((r += t.waiters[e]?.requests.length ?? 0), (e += 1));
      let i = t.waiters.slice(n, e),
        a = await L(`git`).request({
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
    Zt.delete(e);
  }
}
function Gt() {
  return { type: `error`, error: { type: `unknown` } };
}
function Kt(e) {
  switch (e.type) {
    case `unknown`:
      return !1;
    case `not-found`:
    case `too-large`:
      return !0;
  }
}
var qt, Jt, Yt, Xt, Z, Zt, Qt, $t;
function en() {
  return (en = e(() => {
    (T(),
      pe(),
      n(),
      ve(),
      j(),
      Ve(),
      Tt(),
      (qt = 40),
      (Jt = 1e4),
      (Yt = Math.min(Ae, ke / 2)),
      (Xt = /^(?:branch|commit|staged|unstaged):[A-Z]:\d{6}:([0-9a-f]+):\d{6}:([0-9a-f]+)$/),
      (Z = new WeakMap()),
      (Zt = new Map()),
      (Qt = new Map()),
      ($t = b(
        y,
        (e, { signal: t }) => ({
          fullDiffMetadata$: t(null),
          fullContentLoadFailed$: t(!1),
          fullContentUnavailable$: t(!1),
          key: e,
        }),
        { autoDispose: 6e4 },
      )));
  }))();
}
function tn(e) {
  let t = (0, rn.c)(22),
    { onCopyPath: n, onOpen: r, onToggle: a, open: o, openLabel: s } = e,
    c = ue(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `codex.diff.fileHeader.actions`,
        defaultMessage: `File actions`,
        description: `Accessible label for the diff file actions menu`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = (0, Q.jsx)(i, {})), (t[2] = u)) : (u = t[2]);
  let d;
  t[3] === l
    ? (d = t[4])
    : ((d = (0, Q.jsx)(C, { "aria-label": l, color: `ghostTertiary`, size: `iconCircleSm`, children: u })),
      (t[3] = l),
      (t[4] = d));
  let f;
  t[5] === n
    ? (f = t[6])
    : ((f =
        n == null
          ? null
          : (0, Q.jsx)(fe.Item, {
              onSelect: n,
              children: (0, Q.jsx)(A, {
                id: `codex.diff.fileHeader.menu.copyPath`,
                defaultMessage: `Copy path`,
                description: `Menu item to copy the path of a diff file`,
              }),
            })),
      (t[5] = n),
      (t[6] = f));
  let p;
  t[7] !== r || t[8] !== s
    ? ((p =
        r == null
          ? null
          : (0, Q.jsx)(fe.Item, {
              onSelect: r,
              children:
                s ??
                (0, Q.jsx)(A, {
                  id: `codex.diff.fileHeader.menu.openFile`,
                  defaultMessage: `Open in editor`,
                  description: `Menu item to open a diff file in the editor`,
                }),
            })),
      (t[7] = r),
      (t[8] = s),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === a ? (m = t[11]) : ((m = () => a()), (t[10] = a), (t[11] = m));
  let h;
  t[12] === o
    ? (h = t[13])
    : ((h = (0, Q.jsx)(A, {
        id: `codex.diff.fileHeader.menu.toggle`,
        defaultMessage: `{expanded, select, true {Collapse file} other {Expand file}}`,
        description: `Menu item to expand or collapse a file diff`,
        values: { expanded: o },
      })),
      (t[12] = o),
      (t[13] = h));
  let g;
  t[14] !== m || t[15] !== h
    ? ((g = (0, Q.jsx)(fe.Item, { onSelect: m, children: h })), (t[14] = m), (t[15] = h), (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== d || t[18] !== f || t[19] !== p || t[20] !== g
      ? ((_ = (0, Q.jsx)(`div`, {
          className: `shrink-0`,
          role: `presentation`,
          onClick: nn,
          children: (0, Q.jsxs)(he, {
            align: `end`,
            contentWidth: `menu`,
            triggerButton: d,
            children: [f, p, g],
          }),
        })),
        (t[17] = d),
        (t[18] = f),
        (t[19] = p),
        (t[20] = g),
        (t[21] = _))
      : (_ = t[21]),
    _
  );
}
function nn(e) {
  return e.stopPropagation();
}
var rn, Q;
function an() {
  return (an = e(() => {
    ((rn = g()), te(), w(), D(), x(), (Q = u()));
  }))();
}
function on(e, t) {
  if (t.side == null) return;
  let [n, r] = [sn(e, t.side, t.start), sn(e, t.endSide ?? t.side, t.end)].sort(
      (e, t) => e.section - t.section || e.additionLine - t.additionLine,
    ),
    i = [];
  for (let t = n.section; t <= r.section; t += 1) {
    let a = Math.floor(t / 2),
      o = e.hunks[a];
    if (t % 2 == 1) {
      i.push(cn(e, o));
      continue;
    }
    if (e.isPartial) continue;
    let s = e.hunks[a - 1],
      c = s == null ? 0 : s.additionStart + Math.max(s.additionCount - 1, 0),
      l = s == null ? 0 : s.deletionStart + Math.max(s.deletionCount - 1, 0),
      u = o == null ? e.additionLines.length : o.additionStart - (o.additionCount === 0 ? 0 : 1),
      d = t === n.section ? Math.max(c, n.additionLine - 1 - un) : c,
      f = t === r.section ? Math.min(u, r.additionLine + un) : u,
      p = f - d;
    if (p <= 0) continue;
    let m = d + 1 + l - c;
    i.push(
      [
        `@@ -${m},${p} +${d + 1},${p} @@`,
        ...e.additionLines.slice(d, f).flatMap((t, n) => {
          let r = e.deletionLines[m - 1 + n];
          return r === t ? [` ${ln(t)}`] : [`-${ln(r)}`, `+${ln(t)}`];
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
function sn(e, t, n) {
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
function cn(e, t) {
  let n = [
    ln(t.hunkSpecs ?? `@@ -${t.deletionStart},${t.deletionCount} +${t.additionStart},${t.additionCount} @@`),
  ];
  for (let r of t.hunkContent) {
    if (r.type === `context`) {
      let t = e.additionLines.slice(r.additionLineIndex, r.additionLineIndex + r.lines);
      n.push(...t.map((e) => ` ${ln(e)}`));
      continue;
    }
    let t = e.deletionLines.slice(r.deletionLineIndex, r.deletionLineIndex + r.deletions),
      i = e.additionLines.slice(r.additionLineIndex, r.additionLineIndex + r.additions);
    n.push(...t.map((e) => `-${ln(e)}`), ...i.map((e) => `+${ln(e)}`));
  }
  return n.join(`
`);
}
function ln(e) {
  return e.replace(/\r?\n$/, ``);
}
var un;
function dn() {
  return (dn = e(() => {
    un = 3;
  }))();
}
function fn(e) {
  let t = e.additionStart,
    n = e.deletionStart,
    r = null;
  for (let i of e.hunkContent) {
    if (i.type === `context`) {
      ((t += i.lines), (n += i.lines));
      continue;
    }
    let a = pn({
        side: `additions`,
        start: t,
        count: i.additions,
        noEofLineNumber: e.noEOFCRAdditions ? e.additionStart + e.additionCount - 1 : null,
      }),
      o = pn({
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
function pn({ side: e, start: t, count: n, noEofLineNumber: r }) {
  if (n === 0) return null;
  let i = t + n - 1,
    a = i === r ? i - 1 : i;
  return a < t ? null : { side: e, lineNumber: a };
}
function mn(e, t) {
  let n = (0, hn.c)(6),
    r,
    i;
  (n[0] !== e || n[1] !== t
    ? ((r = () => {
        let n = function (n) {
          let r = n.detail.scope;
          (t && r !== t) || ((t || !r) && e(n.detail.open));
        };
        return (
          window.addEventListener(_n, n),
          () => {
            window.removeEventListener(_n, n);
          }
        );
      }),
      (i = [e, t]),
      (n[0] = e),
      (n[1] = t),
      (n[2] = r),
      (n[3] = i))
    : ((r = n[2]), (i = n[3])),
    (0, gn.useEffect)(r, i));
  let a;
  return (
    n[4] === t
      ? (a = n[5])
      : ((a = (e) => {
          let n = new CustomEvent(_n, { detail: { open: e, scope: t } });
          window.dispatchEvent(n);
        }),
        (n[4] = t),
        (n[5] = a)),
    a
  );
}
var hn, gn, _n;
function vn() {
  return (vn = e(() => {
    ((hn = g()), (gn = a()), (_n = `wham-toggle-all-diffs`));
  }))();
}
function yn(e) {
  let n = (0, Hn.c)(216),
    {
      containerClassName: r,
      diffViewClassName: i,
      diff: a,
      viewType: o,
      stickyHeader: s,
      hunkSeparators: c,
      enableComments: l,
      allowCommentDrafts: u,
      comments: f,
      modelComments: m,
      readonlyComments: h,
      submittingCommentKeys: g,
      onCommentsChange: _,
      commentAuthorLabel: v,
      commentAuthorAvatarUrl: y,
      onReadonlyCommentReply: b,
      renderReadonlyComment: x,
      renderReadonlyCommentActions: S,
      renderReadonlyCommentBody: te,
      open: C,
      diffViewWrap: ne,
      showHunkActions: w,
      showFileActions: re,
      fileActionsDisabled: T,
      onHunkAction: D,
      onPostRender: ie,
      hunkActionsVariant: ae,
      cwd: k,
      workspaceRoot: ce,
      richPreviewEnabled: de,
      roundedCorners: fe,
      background: pe,
      diffSurface: me,
      disableNativeContextMenu: he,
      onRequestChanges: A,
      onCopyPath: ge,
      onToggleWrap: ve,
      onDirectFileToggle: ye,
      onOpenChange: be,
      expandScope: j,
      conversationId: xe,
      hostConfig: N,
      hostId: Se,
      languageFeatures: P,
      loadFullContent: Ce,
      fullContentLoader: we,
      showPartialWhileLoadingFullContent: F,
      fullContentNextFallbackToDisk: De,
      fullContentIgnoreWhitespace: I,
      reviewPath: L,
      getFullContentSnapshotGeneration: ke,
      fullContentSnapshotGeneration: Ae,
      metrics: R,
      displayPathOverride: Me,
      isLoading: Ne,
      openFilePathOverride: B,
      onLoadRetry: V,
      showLoadError: Pe,
      headerEndContent: Fe,
      headerEndContentOpenOnClick: Ie,
      headerOpenAction: Le,
      headerVariant: Re,
      showHeaderDiffStats: ze,
      preserveHeaderPositionOnToggle: Be,
    } = e,
    Ve = l !== void 0 && l,
    He = u === void 0 ? Ve : u,
    H = ne !== void 0 && ne,
    Ue = w !== void 0 && w,
    Ge = re === void 0 ? Ue : re,
    Ke = T !== void 0 && T,
    U = ae === void 0 ? `unstaged` : ae,
    qe = ce === void 0 ? null : ce,
    Je = de !== void 0 && de,
    Xe = fe === void 0 || fe,
    Ze = pe === void 0 || pe,
    W = me === void 0 ? `main` : me,
    et = he !== void 0 && he,
    tt = Ce === void 0 || Ce,
    nt = F !== void 0 && F,
    rt = De !== void 0 && De,
    it = I !== void 0 && I,
    ot = Ne !== void 0 && Ne,
    st = Pe !== void 0 && Pe,
    ft = Re === void 0 ? `default` : Re,
    pt = ze === void 0 || ze,
    ht = Be !== void 0 && Be,
    G = t(Te),
    gt = Qe() == null ? ee : Un.Fragment,
    _t = ft === `full-review`,
    [yt, bt] = (0, Un.useState)(H),
    [xt, St] = (0, Un.useState)(!1),
    Ct = (0, Un.useRef)(null),
    wt = (0, Un.useRef)(null),
    Tt = (0, Un.useRef)(xn),
    { platform: Et } = Oe(),
    Dt = mn(be, j),
    Ot = ue(),
    kt = E(),
    At = a.metadata.type === `deleted`,
    jt = a.metadata.name,
    Mt;
  n[0] !== k || n[1] !== jt
    ? ((Mt = jt && jt !== `/dev/null` ? M(jt, k ?? void 0) : jt), (n[0] = k), (n[1] = jt), (n[2] = Mt))
    : (Mt = n[2]);
  let K = Mt,
    q = Me ?? K ?? jt ?? ``,
    Nt;
  n[3] === q ? (Nt = n[4]) : ((Nt = q && !se(q) ? q : null), (n[3] = q), (n[4] = Nt));
  let Pt = Nt,
    J,
    Ft;
  n[5] !== k || n[6] !== a.metadata.prevName || n[7] !== a.metadata.type
    ? ((J =
        (a.metadata.type === `rename-pure` || a.metadata.type === `rename-changed`) &&
        a.metadata.prevName != null
          ? M(a.metadata.prevName, k ?? void 0)
          : null),
      (Ft = J == null ? null : (oe(J).split(`/`).pop() ?? J)),
      (n[5] = k),
      (n[6] = a.metadata.prevName),
      (n[7] = a.metadata.type),
      (n[8] = J),
      (n[9] = Ft))
    : ((J = n[8]), (Ft = n[9]));
  let It = Ft,
    Lt;
  bb0: {
    if (B !== void 0) {
      if (B == null) {
        Lt = null;
        break bb0;
      }
      let e = Et === `windows`,
        t;
      (n[10] !== B || n[11] !== e ? ((t = _e(``, B, e)), (n[10] = B), (n[11] = e), (n[12] = t)) : (t = n[12]),
        (Lt = t));
      break bb0;
    }
    if (K === `/dev/null` || !k) {
      Lt = K;
      break bb0;
    }
    let e = Et === `windows`,
      t;
    (n[13] !== k || n[14] !== e || n[15] !== K
      ? ((t = _e(k, K, e)), (n[13] = k), (n[14] = e), (n[15] = K), (n[16] = t))
      : (t = n[16]),
      (Lt = t));
  }
  let Y = Lt,
    Rt;
  n[17] === q ? (Rt = n[18]) : ((Rt = oe(q).split(`/`).pop() ?? q), (n[17] = q), (n[18] = Rt));
  let zt = Rt,
    Bt = J == null ? q : `${J}${qn}${q}`,
    Vt = It == null ? zt : `${It}${qn}${zt}`,
    Ht;
  n[19] !== zt || n[20] !== q || n[21] !== It || n[22] !== J
    ? ((Ht =
        J == null || It == null
          ? [{ fileName: zt, path: q }]
          : [
              { fileName: It, path: J },
              { fileName: zt, path: q },
            ]),
      (n[19] = zt),
      (n[20] = q),
      (n[21] = It),
      (n[22] = J),
      (n[23] = Ht))
    : (Ht = n[23]);
  let Ut = Ht,
    X = Se ?? N?.id,
    Wt,
    Gt;
  (n[24] === H
    ? ((Wt = n[25]), (Gt = n[26]))
    : ((Wt = () => {
        bt(H);
      }),
      (Gt = [H]),
      (n[24] = H),
      (n[25] = Wt),
      (n[26] = Gt)),
    (0, Un.useEffect)(Wt, Gt));
  let Kt = k ?? null,
    qt;
  n[27] !== X || n[28] !== Y || n[29] !== Kt
    ? ((qt = { cwd: Kt, hostId: X, openPath: Y }), (n[27] = X), (n[28] = Y), (n[29] = Kt), (n[30] = qt))
    : (qt = n[30]);
  let Jt = le(vt, qt),
    Yt;
  n[31] !== k || n[32] !== X || n[33] !== Y || n[34] !== G
    ? ((Yt = async () => {
        try {
          return await lt(G, { cwd: k ?? null, hostId: X, openPath: Y });
        } catch {
          return null;
        }
      }),
      (n[31] = k),
      (n[32] = X),
      (n[33] = Y),
      (n[34] = G),
      (n[35] = Yt))
    : (Yt = n[35]);
  let Xt = O(Yt),
    Z = !!Y && Y !== `/dev/null`,
    Zt;
  n[36] !== ge || n[37] !== Y
    ? ((Zt = () => {
        if (Y && Y !== `/dev/null`) {
          if (ge) {
            ge(Y);
            return;
          }
          p(Y);
        }
      }),
      (n[36] = ge),
      (n[37] = Y),
      (n[38] = Zt))
    : (Zt = n[38]);
  let Qt = Zt,
    $t;
  n[39] === Pt
    ? ($t = n[40])
    : (($t =
        Pt == null
          ? void 0
          : () => {
              p(Pt);
            }),
      (n[39] = Pt),
      (n[40] = $t));
  let en = $t,
    tn;
  n[41] === ve
    ? (tn = n[42])
    : ((tn = () => {
        if (ve) {
          ve();
          return;
        }
        bt(bn);
      }),
      (n[41] = ve),
      (n[42] = tn));
  let nn = tn,
    rn = At ? (a.firstDeletionLine ?? 1) : (a.firstAdditionLine ?? 1),
    Q;
  n[43] !== k || n[44] !== X || n[45] !== Y || n[46] !== G
    ? ((Q = (e) => {
        let { lineNumber: t, event: n } = e;
        !n.defaultPrevented && Y && Vn(n) && ut(G, { path: Y, line: t, cwd: k ?? null, hostId: X });
      }),
      (n[43] = k),
      (n[44] = X),
      (n[45] = Y),
      (n[46] = G),
      (n[47] = Q))
    : (Q = n[47]);
  let an = O(Q),
    on;
  n[48] !== k || n[49] !== rn || n[50] !== X || n[51] !== Y || n[52] !== G
    ? ((on = (e, t, n) => {
        if (!Y) return;
        let r = Ct.current ?? rn;
        ((Ct.current = null),
          dt(G, {
            cwd: k ?? null,
            hostId: X,
            line: r,
            openPath: Y,
            appPath: n,
            persistPreferred: t,
            target: e,
          }));
      }),
      (n[48] = k),
      (n[49] = rn),
      (n[50] = X),
      (n[51] = Y),
      (n[52] = G),
      (n[53] = on))
    : (on = n[53]);
  let sn = O(on),
    cn;
  n[54] !== k || n[55] !== rn || n[56] !== X || n[57] !== Xt || n[58] !== Y || n[59] !== Jt || n[60] !== G
    ? ((cn = () => {
        Y &&
          Xt().then((e) => {
            let { primaryTarget: t } = mt({ data: e, preferredTargetOverride: Jt });
            ut(G, { cwd: k ?? null, hostId: X, line: rn, path: Y, target: t?.target, appPath: t?.appPath });
          });
      }),
      (n[54] = k),
      (n[55] = rn),
      (n[56] = X),
      (n[57] = Xt),
      (n[58] = Y),
      (n[59] = Jt),
      (n[60] = G),
      (n[61] = cn))
    : (cn = n[61]);
  let ln = cn,
    un;
  n[62] === an
    ? (un = n[63])
    : ((un = (e) => {
        an(e);
      }),
      (n[62] = an),
      (n[63] = un));
  let dn = un,
    fn;
  n[64] === an
    ? (fn = n[65])
    : ((fn = (e) => {
        an(e);
      }),
      (n[64] = an),
      (n[65] = fn));
  let pn = fn,
    hn;
  n[66] !== Dt || n[67] !== ye || n[68] !== be || n[69] !== C || n[70] !== ht || n[71] !== kt
    ? ((hn = (e) => {
        let t = !C;
        if ((ht && e != null && Ye(e.currentTarget, kt), e?.altKey)) {
          Dt(t);
          return;
        }
        (be(t), ye?.(t));
      }),
      (n[66] = Dt),
      (n[67] = ye),
      (n[68] = be),
      (n[69] = C),
      (n[70] = ht),
      (n[71] = kt),
      (n[72] = hn))
    : (hn = n[72]);
  let gn = O(hn),
    _n;
  n[73] !== k || n[74] !== rn || n[75] !== X || n[76] !== Y || n[77] !== G || n[78] !== gn
    ? ((_n = (e) => {
        (e.stopPropagation(), gn(e));
      }),
      (n[73] = k),
      (n[74] = rn),
      (n[75] = X),
      (n[76] = Y),
      (n[77] = G),
      (n[78] = gn),
      (n[79] = _n))
    : (_n = n[79]);
  let vn = O(_n),
    yn;
  n[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yn = () => {
        Tt.current();
      }),
      (n[80] = yn))
    : (yn = n[80]);
  let Cn = yn,
    wn;
  n[81] === P
    ? (wn = n[82])
    : ((wn = (e) => {
        P?.onContextMenu(e);
        let t = typeof e.nativeEvent.composedPath == `function` ? e.nativeEvent.composedPath() : [e.target];
        Ct.current = at(t);
      }),
      (n[81] = P),
      (n[82] = wn));
  let Tn = wn,
    Dn = P?.getContextMenuItems,
    On;
  n[83] !== k || n[84] !== N || n[85] !== At || n[86] !== Y
    ? ((On = !At && k != null && N != null && Y != null ? { cwd: k, hostConfig: N, path: Y } : null),
      (n[83] = k),
      (n[84] = N),
      (n[85] = At),
      (n[86] = Y),
      (n[87] = On))
    : (On = n[87]);
  let kn;
  n[88] !== Z ||
  n[89] !== k ||
  n[90] !== rn ||
  n[91] !== Le ||
  n[92] !== X ||
  n[93] !== At ||
  n[94] !== Y ||
  n[95] !== G
    ? ((kn =
        Z && !At && Y != null
          ? () => {
              let e = Ct.current,
                t = { scope: G, path: Y, cwd: k ?? null, hostId: X, line: e ?? rn, openInSidePanel: !0 };
              return je(t)
                ? () => {
                    ((Ct.current = null), Le == null ? We(t) : Le.onClick(e ?? void 0));
                  }
                : null;
            }
          : void 0),
      (n[88] = Z),
      (n[89] = k),
      (n[90] = rn),
      (n[91] = Le),
      (n[92] = X),
      (n[93] = At),
      (n[94] = Y),
      (n[95] = G),
      (n[96] = kn))
    : (kn = n[96]);
  let An;
  n[97] === o
    ? (An = n[98])
    : ((An =
        o === `auto`
          ? (e) =>
              z({
                axis: `width`,
                target: e,
                onChange: (e) => {
                  let { width: t } = e;
                  return St(t >= 800);
                },
              })
          : void 0),
      (n[97] = o),
      (n[98] = An));
  let jn = Xe && (_t ? `rounded-b-lg` : `rounded-lg`),
    Mn = _t && C && `pb-0.5`,
    Nn;
  n[99] !== r || n[100] !== jn || n[101] !== Mn
    ? ((Nn = d(`group/file-diff flex flex-col overflow-clip`, jn, Mn, r)),
      (n[99] = r),
      (n[100] = jn),
      (n[101] = Mn),
      (n[102] = Nn))
    : (Nn = n[102]);
  let Pn;
  n[103] !== Ze || n[104] !== W
    ? ((Pn = $e(Ze, W)), (n[103] = Ze), (n[104] = W), (n[105] = Pn))
    : (Pn = n[105]);
  let Fn = `var(--codex-diffs-surface-override, ${Pn})`,
    In = Ze ? `var(--codex-diffs-surface)` : void 0,
    Ln;
  n[106] !== Fn || n[107] !== In
    ? ((Ln = { "--codex-diffs-surface": Fn, backgroundColor: In }),
      (n[106] = Fn),
      (n[107] = In),
      (n[108] = Ln))
    : (Ln = n[108]);
  let Rn;
  n[109] !== Ie || n[110] !== ye || n[111] !== be || n[112] !== C
    ? ((Rn = (e) => {
        (e.stopPropagation(), Ie != null && (be(Ie), Ie !== C && ye?.(Ie)));
      }),
      (n[109] = Ie),
      (n[110] = ye),
      (n[111] = be),
      (n[112] = C),
      (n[113] = Rn))
    : (Rn = n[113]);
  let zn;
  n[114] !== a.metadata.name || n[115] !== D
    ? ((zn = (e) => {
        D?.({ path: a.metadata.name, action: e, scope: `file` });
      }),
      (n[114] = a.metadata.name),
      (n[115] = D),
      (n[116] = zn))
    : (zn = n[116]);
  let Bn = Z,
    Wn;
  n[117] === Ot
    ? (Wn = n[118])
    : ((Wn = Ot.formatMessage({
        id: `diff.fileHeader.toggle`,
        defaultMessage: `Toggle file diff`,
        description: `Button label for toggling the file diff section`,
      })),
      (n[117] = Ot),
      (n[118] = Wn));
  let Gn;
  n[119] !== a ||
  n[120] !== Ke ||
  n[121] !== en ||
  n[122] !== vn ||
  n[123] !== ln ||
  n[124] !== Vt ||
  n[125] !== Bt ||
  n[126] !== Ut ||
  n[127] !== Fe ||
  n[128] !== Le ||
  n[129] !== ft ||
  n[130] !== U ||
  n[131] !== ot ||
  n[132] !== C ||
  n[133] !== Ge ||
  n[134] !== pt ||
  n[135] !== s ||
  n[136] !== Rn ||
  n[137] !== zn ||
  n[138] !== Bn ||
  n[139] !== Wn ||
  n[140] !== gn ||
  n[141] !== K
    ? ((Gn = (0, $.jsx)(Sn, {
        diff: a,
        displayFileName: Vt,
        displayPath: Bt,
        displayPathParts: Ut,
        onFileNameClick: vn,
        onOpenInEditor: ln,
        headerEndContent: Fe,
        onHeaderEndContentClick: Rn,
        headerOpenAction: Le,
        fileActionsDisabled: Ke,
        onCopyPath: en,
        onFileToggle: gn,
        onFileAction: zn,
        open: C,
        stickyHeader: s,
        showOpenInButton: Bn,
        showDiffStats: pt,
        toggleAriaLabel: Wn,
        workspaceRelativePath: K,
        showFileActions: Ge,
        hunkActionsVariant: U,
        headerVariant: ft,
        isLoading: ot,
      })),
      (n[119] = a),
      (n[120] = Ke),
      (n[121] = en),
      (n[122] = vn),
      (n[123] = ln),
      (n[124] = Vt),
      (n[125] = Bt),
      (n[126] = Ut),
      (n[127] = Fe),
      (n[128] = Le),
      (n[129] = ft),
      (n[130] = U),
      (n[131] = ot),
      (n[132] = C),
      (n[133] = Ge),
      (n[134] = pt),
      (n[135] = s),
      (n[136] = Rn),
      (n[137] = zn),
      (n[138] = Bn),
      (n[139] = Wn),
      (n[140] = gn),
      (n[141] = K),
      (n[142] = Gn))
    : (Gn = n[142]);
  let Kn;
  n[143] !== He ||
  n[144] !== xt ||
  n[145] !== Z ||
  n[146] !== y ||
  n[147] !== v ||
  n[148] !== f ||
  n[149] !== xe ||
  n[150] !== k ||
  n[151] !== a ||
  n[152] !== i ||
  n[153] !== Ve ||
  n[154] !== it ||
  n[155] !== we ||
  n[156] !== rt ||
  n[157] !== Ae ||
  n[158] !== ke ||
  n[159] !== dn ||
  n[160] !== pn ||
  n[161] !== ln ||
  n[162] !== N ||
  n[163] !== U ||
  n[164] !== c ||
  n[165] !== ot ||
  n[166] !== P ||
  n[167] !== tt ||
  n[168] !== R ||
  n[169] !== m ||
  n[170] !== _ ||
  n[171] !== D ||
  n[172] !== V ||
  n[173] !== ie ||
  n[174] !== b ||
  n[175] !== A ||
  n[176] !== C ||
  n[177] !== Y ||
  n[178] !== h ||
  n[179] !== x ||
  n[180] !== S ||
  n[181] !== te ||
  n[182] !== L ||
  n[183] !== Je ||
  n[184] !== Ue ||
  n[185] !== st ||
  n[186] !== nt ||
  n[187] !== g ||
  n[188] !== _t ||
  n[189] !== o ||
  n[190] !== qe ||
  n[191] !== yt
    ? ((Kn = C
        ? (0, $.jsx)(En, {
            languageFeatures: P,
            canOpenFile: Z,
            comments: f,
            modelComments: m,
            conversationId: xe,
            cwd: k,
            workspaceRoot: qe,
            diff: a,
            diffViewClassName: i,
            enableComments: Ve,
            allowCommentDrafts: He,
            handleLineClick: dn,
            handleLineNumberClick: pn,
            hostConfig: N,
            hoveredLineRef: wt,
            hunkActionsVariant: U,
            hunkSeparators: c,
            loadFullContent: tt,
            fullContentLoader: we,
            showPartialWhileLoadingFullContent: nt,
            fullContentNextFallbackToDisk: rt,
            fullContentIgnoreWhitespace: it,
            reviewPath: L,
            getFullContentSnapshotGeneration: ke,
            fullContentSnapshotGeneration: Ae,
            readonlyComments: h,
            submittingCommentKeys: g,
            onCommentsChange: _,
            commentAuthorLabel: v,
            commentAuthorAvatarUrl: y,
            isLoading: ot,
            onReadonlyCommentReply: b,
            renderReadonlyComment: x,
            renderReadonlyCommentActions: S,
            renderReadonlyCommentBody: te,
            onLoadRetry: V,
            onHunkAction: D,
            onPostRender: ie,
            onOpenInEditor: ln,
            onRequestChanges: A,
            openFilePath: Y ?? null,
            open: C,
            requestChangesRef: Tt,
            richPreviewEnabled: Je,
            showHunkActions: Ue,
            showLoadError: st,
            useReviewLineInfoSeparators: _t,
            viewType: Ee(o, a, xt),
            wrapLines: yt,
            metrics: R,
          })
        : null),
      (n[143] = He),
      (n[144] = xt),
      (n[145] = Z),
      (n[146] = y),
      (n[147] = v),
      (n[148] = f),
      (n[149] = xe),
      (n[150] = k),
      (n[151] = a),
      (n[152] = i),
      (n[153] = Ve),
      (n[154] = it),
      (n[155] = we),
      (n[156] = rt),
      (n[157] = Ae),
      (n[158] = ke),
      (n[159] = dn),
      (n[160] = pn),
      (n[161] = ln),
      (n[162] = N),
      (n[163] = U),
      (n[164] = c),
      (n[165] = ot),
      (n[166] = P),
      (n[167] = tt),
      (n[168] = R),
      (n[169] = m),
      (n[170] = _),
      (n[171] = D),
      (n[172] = V),
      (n[173] = ie),
      (n[174] = b),
      (n[175] = A),
      (n[176] = C),
      (n[177] = Y),
      (n[178] = h),
      (n[179] = x),
      (n[180] = S),
      (n[181] = te),
      (n[182] = L),
      (n[183] = Je),
      (n[184] = Ue),
      (n[185] = st),
      (n[186] = nt),
      (n[187] = g),
      (n[188] = _t),
      (n[189] = o),
      (n[190] = qe),
      (n[191] = yt),
      (n[192] = Kn))
    : (Kn = n[192]);
  let Jn;
  n[193] !== gt || n[194] !== Kn
    ? ((Jn = (0, $.jsx)(gt, { children: Kn })), (n[193] = gt), (n[194] = Kn), (n[195] = Jn))
    : (Jn = n[195]);
  let Yn;
  n[196] !== Tn || n[197] !== An || n[198] !== Nn || n[199] !== Ln || n[200] !== Gn || n[201] !== Jn
    ? ((Yn = (0, $.jsxs)(`div`, {
        ref: An,
        onContextMenu: Tn,
        className: Nn,
        style: Ln,
        children: [Gn, Jn],
      })),
      (n[196] = Tn),
      (n[197] = An),
      (n[198] = Nn),
      (n[199] = Ln),
      (n[200] = Gn),
      (n[201] = Jn),
      (n[202] = Yn))
    : (Yn = n[202]);
  let Xn;
  return (
    n[203] !== Z ||
    n[204] !== et ||
    n[205] !== sn ||
    n[206] !== Qt ||
    n[207] !== en ||
    n[208] !== nn ||
    n[209] !== Xt ||
    n[210] !== Jt ||
    n[211] !== Dn ||
    n[212] !== On ||
    n[213] !== kn ||
    n[214] !== Yn
      ? ((Xn = (0, $.jsx)(ct, {
          getAdditionalItems: Dn,
          canOpenFile: Z,
          githubFileLookup: On,
          loadOpenTargets: Xt,
          preferredTargetOverride: Jt,
          onRequestChanges: Cn,
          onCopyPath: Qt,
          onCopyRelativePath: en,
          onToggleWrap: nn,
          getOpenInNewTab: kn,
          handleOpenInTarget: sn,
          disableNative: et,
          children: Yn,
        })),
        (n[203] = Z),
        (n[204] = et),
        (n[205] = sn),
        (n[206] = Qt),
        (n[207] = en),
        (n[208] = nn),
        (n[209] = Xt),
        (n[210] = Jt),
        (n[211] = Dn),
        (n[212] = On),
        (n[213] = kn),
        (n[214] = Yn),
        (n[215] = Xn))
      : (Xn = n[215]),
    Xn
  );
}
function bn(e) {
  return !e;
}
function xn() {}
function Sn(e) {
  let t = (0, Hn.c)(115),
    {
      diff: n,
      displayFileName: r,
      displayPath: i,
      displayPathParts: a,
      fileActionsDisabled: o,
      headerEndContent: s,
      onHeaderEndContentClick: l,
      headerOpenAction: u,
      headerVariant: f,
      hunkActionsVariant: p,
      isLoading: h,
      onCopyPath: g,
      onFileAction: _,
      onFileNameClick: v,
      onOpenInEditor: y,
      onFileToggle: b,
      open: x,
      showDiffStats: ee,
      showOpenInButton: S,
      showFileActions: te,
      stickyHeader: ne,
      toggleAriaLabel: w,
      workspaceRelativePath: re,
    } = e,
    T = f === `full-review`,
    E;
  t[0] === x ? (E = t[1]) : ((E = qe.reviewFileToggle(x)), (t[0] = x), (t[1] = E));
  let D = T ? `text-tertiary hover:text-default` : `text-default`,
    O;
  t[2] === D ? (O = t[3]) : ((O = d(`bg-transparent`, D)), (t[2] = D), (t[3] = O));
  let ie = T ? `ghostMuted` : `ghost`,
    ae = T ? `iconMd` : `toolbar`,
    k;
  t[4] === b
    ? (k = t[5])
    : ((k = (e) => {
        (e.stopPropagation(), b(e));
      }),
      (t[4] = b),
      (t[5] = k));
  let oe = x ? `rotate-90` : `rotate-0`,
    se;
  t[6] === oe
    ? (se = t[7])
    : ((se = d(`ease-basic icon-2xs transition-transform duration-basic motion-reduce:transition-none`, oe)),
      (t[6] = oe),
      (t[7] = se));
  let le;
  t[8] === se ? (le = t[9]) : ((le = (0, $.jsx)(m, { className: se })), (t[8] = se), (t[9] = le));
  let ue;
  t[10] !== E || t[11] !== O || t[12] !== ie || t[13] !== ae || t[14] !== k || t[15] !== le || t[16] !== w
    ? ((ue = (0, $.jsx)(C, {
        ...E,
        className: O,
        color: ie,
        size: ae,
        uniform: !0,
        "aria-label": w,
        onClick: k,
        children: le,
      })),
      (t[10] = E),
      (t[11] = O),
      (t[12] = ie),
      (t[13] = ae),
      (t[14] = k),
      (t[15] = le),
      (t[16] = w),
      (t[17] = ue))
    : (ue = t[17]);
  let de = ue,
    fe;
  t[18] !== n || t[19] !== i || t[20] !== s || t[21] !== ee || t[22] !== T
    ? ((fe = ee
        ? (0, $.jsx)(
            `span`,
            {
              className: d(`flex shrink-0 items-center`, T ? `ms-1 me-1` : s != null && `me-2`),
              children: (0, $.jsx)(Ne, { linesAdded: n.additions, linesRemoved: n.deletions }),
            },
            i,
          )
        : null),
      (t[18] = n),
      (t[19] = i),
      (t[20] = s),
      (t[21] = ee),
      (t[22] = T),
      (t[23] = fe))
    : (fe = t[23]);
  let pe = fe,
    me = ne && `z-10 sticky top-[var(--pane-overlay-header-height,0px)]`,
    he;
  t[24] === me
    ? (he = t[25])
    : ((he = d(`cursor-interaction select-none focus-visible:outline-none`, me)), (t[24] = me), (t[25] = he));
  let A;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = { backgroundColor: `var(--codex-diffs-surface)` }), (t[26] = A))
    : (A = t[26]);
  let ge;
  t[27] === T
    ? (ge = t[28])
    : ((ge = T ? void 0 : { backgroundColor: `var(--codex-diffs-header-surface)` }),
      (t[27] = T),
      (t[28] = ge));
  let _e;
  t[29] !== h || t[30] !== T
    ? ((_e = d(
        `group/diff-header text-size-chat @container/diff-header relative flex items-center gap-2`,
        T
          ? d(`border-b border-default py-2 ps-3 pe-2`, h ? `mb-2` : `mb-px`)
          : `px-[var(--codex-diffs-header-padding-x,1rem)] py-[var(--codex-diffs-header-padding-y,0.25rem)] hover:bg-background-primary-ghost-hover/30`,
      )),
      (t[29] = h),
      (t[30] = T),
      (t[31] = _e))
    : (_e = t[31]);
  let ve = T ? `gap-0.5` : `gap-2`,
    ye;
  t[32] === ve
    ? (ye = t[33])
    : ((ye = d(`text-size-chat flex min-w-0 flex-1 items-center text-default`, ve)),
      (t[32] = ve),
      (t[33] = ye));
  let be = T && `gap-2 ps-1`,
    j;
  t[34] === be ? (j = t[35]) : ((j = d(`flex min-w-0 items-center`, be)), (t[34] = be), (t[35] = j));
  let xe;
  t[36] !== i || t[37] !== T
    ? ((xe = T ? (0, $.jsx)(Mn, { path: i }) : null), (t[36] = i), (t[37] = T), (t[38] = xe))
    : (xe = t[38]);
  let M;
  t[39] === i
    ? (M = t[40])
    : ((M = (0, $.jsx)(`span`, { className: `font-mono`, children: i })), (t[39] = i), (t[40] = M));
  let N;
  t[41] !== x || t[42] !== T
    ? ((N = T ? qe.reviewFileToggle(x) : void 0), (t[41] = x), (t[42] = T), (t[43] = N))
    : (N = t[43]);
  let Se = !T && `pe-[6px]`,
    P;
  t[44] === Se
    ? (P = t[45])
    : ((P = d(`min-w-0 cursor-interaction truncate text-start text-default select-text [direction:rtl]`, Se)),
      (t[44] = Se),
      (t[45] = P));
  let Ce = !re || re === `/dev/null`,
    we = T ? x : void 0,
    Te;
  t[46] === r
    ? (Te = t[47])
    : ((Te = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-default [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:hidden`,
        children: r,
      })),
      (t[46] = r),
      (t[47] = Te));
  let F;
  t[48] !== i || t[49] !== a || t[50] !== T
    ? ((F = T
        ? (0, $.jsx)(`span`, {
            className: `hidden min-w-0 truncate text-tertiary [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:inline`,
            children: a.map(Cn),
          })
        : (0, $.jsx)(`span`, {
            className: `hidden min-w-0 truncate [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:inline`,
            children: i,
          })),
      (t[48] = i),
      (t[49] = a),
      (t[50] = T),
      (t[51] = F))
    : (F = t[51]);
  let Ee;
  t[52] !== v || t[53] !== N || t[54] !== P || t[55] !== Ce || t[56] !== we || t[57] !== Te || t[58] !== F
    ? ((Ee = (0, $.jsxs)(`button`, {
        ...N,
        type: `button`,
        className: P,
        disabled: Ce,
        onClick: v,
        "aria-expanded": we,
        children: [Te, F],
      })),
      (t[52] = v),
      (t[53] = N),
      (t[54] = P),
      (t[55] = Ce),
      (t[56] = we),
      (t[57] = Te),
      (t[58] = F),
      (t[59] = Ee))
    : (Ee = t[59]);
  let De;
  t[60] !== M || t[61] !== Ee || t[62] !== T
    ? ((De = (0, $.jsx)(ce, {
        disabled: T,
        tooltipContent: M,
        delayDuration: 200,
        openWhen: `trigger-overflows`,
        children: Ee,
      })),
      (t[60] = M),
      (t[61] = Ee),
      (t[62] = T),
      (t[63] = De))
    : (De = t[63]);
  let I;
  t[64] !== x || t[65] !== T
    ? ((I = T
        ? (0, $.jsx)(c, {
            className: d(`text-tertiary opacity-0 group-hover/diff-header:opacity-100`, x && `rotate-90`),
          })
        : null),
      (t[64] = x),
      (t[65] = T),
      (t[66] = I))
    : (I = t[66]);
  let Oe;
  t[67] !== j || t[68] !== xe || t[69] !== De || t[70] !== I
    ? ((Oe = (0, $.jsxs)(`div`, { className: j, children: [xe, De, I] })),
      (t[67] = j),
      (t[68] = xe),
      (t[69] = De),
      (t[70] = I),
      (t[71] = Oe))
    : (Oe = t[71]);
  let L;
  t[72] !== ye || t[73] !== Oe
    ? ((L = (0, $.jsx)(`div`, { className: ye, children: Oe })), (t[72] = ye), (t[73] = Oe), (t[74] = L))
    : (L = t[74]);
  let ke;
  t[75] !== o || t[76] !== p || t[77] !== _ || t[78] !== te || t[79] !== T
    ? ((ke = te
        ? (0, $.jsx)(In, { disabled: o, onFileAction: _, useMutedButtonStyle: T, variant: p })
        : null),
      (t[75] = o),
      (t[76] = p),
      (t[77] = _),
      (t[78] = te),
      (t[79] = T),
      (t[80] = ke))
    : (ke = t[80]);
  let Ae;
  t[81] !== s || t[82] !== l || t[83] !== T
    ? ((Ae =
        s == null
          ? null
          : (0, $.jsx)(`span`, {
              className: T ? `flex items-center` : `contents`,
              role: `presentation`,
              onClick: l,
              children: s,
            })),
      (t[81] = s),
      (t[82] = l),
      (t[83] = T),
      (t[84] = Ae))
    : (Ae = t[84]);
  let R;
  t[85] !== u || t[86] !== y || t[87] !== S || t[88] !== T
    ? ((R =
        S && (!T || u != null)
          ? (0, $.jsx)(wn, { headerOpenAction: u, onOpenInEditor: y, useMutedButtonStyle: T })
          : null),
      (t[85] = u),
      (t[86] = y),
      (t[87] = S),
      (t[88] = T),
      (t[89] = R))
    : (R = t[89]);
  let z;
  t[90] !== g || t[91] !== b || t[92] !== y || t[93] !== x || t[94] !== S || t[95] !== T
    ? ((z = T ? (0, $.jsx)(tn, { onCopyPath: g, onOpen: S ? y : void 0, onToggle: b, open: x }) : null),
      (t[90] = g),
      (t[91] = b),
      (t[92] = y),
      (t[93] = x),
      (t[94] = S),
      (t[95] = T),
      (t[96] = z))
    : (z = t[96]);
  let je = T ? null : de,
    Me;
  t[97] !== pe || t[98] !== ke || t[99] !== Ae || t[100] !== R || t[101] !== z || t[102] !== je
    ? ((Me = (0, $.jsxs)(`div`, {
        className: `ms-auto flex shrink-0 items-center gap-1`,
        children: [pe, ke, Ae, R, z, je],
      })),
      (t[97] = pe),
      (t[98] = ke),
      (t[99] = Ae),
      (t[100] = R),
      (t[101] = z),
      (t[102] = je),
      (t[103] = Me))
    : (Me = t[103]);
  let B;
  t[104] !== _e || t[105] !== L || t[106] !== Me
    ? ((B = (0, $.jsxs)(`div`, { className: _e, children: [L, Me] })),
      (t[104] = _e),
      (t[105] = L),
      (t[106] = Me),
      (t[107] = B))
    : (B = t[107]);
  let V;
  t[108] !== ge || t[109] !== B
    ? ((V = (0, $.jsx)(`div`, { style: ge, children: B })), (t[108] = ge), (t[109] = B), (t[110] = V))
    : (V = t[110]);
  let Pe;
  return (
    t[111] !== b || t[112] !== he || t[113] !== V
      ? ((Pe = (0, $.jsx)(`div`, { onClick: b, role: `presentation`, className: he, style: A, children: V })),
        (t[111] = b),
        (t[112] = he),
        (t[113] = V),
        (t[114] = Pe))
      : (Pe = t[114]),
    Pe
  );
}
function Cn(e, t) {
  let { fileName: n, path: r } = e;
  return (0, $.jsxs)(
    `span`,
    {
      children: [
        t > 0 ? (0, $.jsx)(`span`, { className: `text-default`, children: qn }) : null,
        (0, $.jsx)(`span`, { children: r.slice(0, Math.max(0, r.length - n.length)) }),
        (0, $.jsx)(`span`, { className: `text-default`, children: n }),
      ],
    },
    `${r}:${t}`,
  );
}
function wn(e) {
  let t = (0, Hn.c)(30),
    { headerOpenAction: n, onOpenInEditor: r, useMutedButtonStyle: i } = e,
    a = ue(),
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
  t[3] === a
    ? (c = t[4])
    : ((c = a.formatMessage({
        id: `codex.diff.fileHeader.openIn.tooltip`,
        defaultMessage: `Open in editor`,
        description: `Tooltip for the icon button in the diff file header that opens the current file`,
      })),
      (t[3] = a),
      (t[4] = c));
  let l = c,
    u = n == null && `opacity-0 transition-opacity duration-200 group-hover/file-diff:opacity-100`,
    f;
  t[5] === u ? (f = t[6]) : ((f = d(`flex shrink-0 items-center`, u)), (t[5] = u), (t[6] = f));
  let p = n?.tooltip ?? l,
    m = i ? `ghostTertiary` : `ghost`,
    h = i ? `iconCircleSm` : `toolbar`,
    g;
  t[7] !== n?.onClick || t[8] !== r
    ? ((g = () => (n?.onClick ?? r)()), (t[7] = n?.onClick), (t[8] = r), (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] === i
    ? (_ = t[11])
    : ((_ = i ? (0, $.jsx)(S, {}) : (0, $.jsx)(Re, { className: `icon-2xs` })), (t[10] = i), (t[11] = _));
  let v;
  t[12] !== s || t[13] !== m || t[14] !== h || t[15] !== g || t[16] !== _
    ? ((v = (0, $.jsx)(C, { color: m, size: h, uniform: !0, "aria-label": s, onClick: g, children: _ })),
      (t[12] = s),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== v || t[19] !== p
    ? ((y = (0, $.jsx)(ce, { tooltipContent: p, children: v })), (t[18] = v), (t[19] = p), (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] !== n || t[22] !== r || t[23] !== l || t[24] !== i
    ? ((b =
        n != null && !i
          ? (0, $.jsx)(ce, {
              tooltipContent: l,
              children: (0, $.jsx)(C, {
                color: `ghost`,
                size: `toolbar`,
                uniform: !0,
                "aria-label": l,
                onClick: r,
                children: (0, $.jsx)(re, {}),
              }),
            })
          : null),
      (t[21] = n),
      (t[22] = r),
      (t[23] = l),
      (t[24] = i),
      (t[25] = b))
    : (b = t[25]);
  let x;
  return (
    t[26] !== y || t[27] !== b || t[28] !== f
      ? ((x = (0, $.jsxs)(`div`, { className: f, role: `presentation`, onClick: Tn, children: [y, b] })),
        (t[26] = y),
        (t[27] = b),
        (t[28] = f),
        (t[29] = x))
      : (x = t[29]),
    x
  );
}
function Tn(e) {
  return e.stopPropagation();
}
function En(e) {
  let n = (0, Hn.c)(154),
    {
      languageFeatures: r,
      canOpenFile: i,
      comments: a,
      modelComments: o,
      conversationId: s,
      cwd: c,
      workspaceRoot: u,
      diff: d,
      diffViewClassName: f,
      enableComments: p,
      allowCommentDrafts: m,
      handleLineClick: h,
      handleLineNumberClick: g,
      hostConfig: _,
      hoveredLineRef: v,
      hunkActionsVariant: b,
      hunkSeparators: x,
      loadFullContent: ee,
      fullContentLoader: S,
      showPartialWhileLoadingFullContent: te,
      fullContentNextFallbackToDisk: C,
      fullContentIgnoreWhitespace: w,
      reviewPath: re,
      getFullContentSnapshotGeneration: T,
      fullContentSnapshotGeneration: E,
      metrics: D,
      readonlyComments: O,
      submittingCommentKeys: ie,
      onCommentsChange: k,
      commentAuthorLabel: oe,
      commentAuthorAvatarUrl: se,
      isLoading: ce,
      onReadonlyCommentReply: le,
      renderReadonlyComment: ue,
      renderReadonlyCommentActions: de,
      renderReadonlyCommentBody: fe,
      onLoadRetry: pe,
      onHunkAction: he,
      onPostRender: A,
      onOpenInEditor: ge,
      onRequestChanges: _e,
      openFilePath: ve,
      open: be,
      requestChangesRef: j,
      richPreviewEnabled: xe,
      showHunkActions: M,
      showLoadError: N,
      useReviewLineInfoSeparators: Se,
      viewType: P,
      wrapLines: Ce,
    } = e,
    we = t(y),
    Te = Qe(),
    F = et(),
    Ee = ae(ye),
    De = ae(_t),
    [I, Oe] = (0, Un.useState)(null),
    L;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = () => {
        Oe(null);
      }),
      (n[0] = L))
    : (L = n[0]);
  let ke = L,
    Ae = Be(ne),
    R = (0, Un.useRef)(null),
    z = _ ?? Ae,
    je = d.additions + d.deletions,
    Ne;
  n[1] === d ? (Ne = n[2]) : ((Ne = Me(d)), (n[1] = d), (n[2] = Ne));
  let B = Ne,
    V = je > Wn,
    Pe = V || !Ee ? `none` : `word-alt`,
    Fe = d.additions === 0 && d.deletions === 0,
    Ie = d.metadata.type === `new`,
    Le = d.metadata.type === `deleted`,
    Re = Fe && d.metadata.type === `rename-pure`,
    ze = B,
    Ve = c ?? void 0,
    He;
  n[3] !== d ||
  n[4] !== w ||
  n[5] !== S ||
  n[6] !== C ||
  n[7] !== E ||
  n[8] !== De ||
  n[9] !== z ||
  n[10] !== Ve
    ? ((He = Vt({
        diff: d,
        fullContentLoader: S,
        hostConfig: z,
        ignoreWhitespace: w,
        loadFullFilesEnabled: De,
        nextFallbackToDisk: C,
        snapshotGeneration: E,
        workspaceRoot: Ve,
      })),
      (n[3] = d),
      (n[4] = w),
      (n[5] = S),
      (n[6] = C),
      (n[7] = E),
      (n[8] = De),
      (n[9] = z),
      (n[10] = Ve),
      (n[11] = He))
    : (He = n[11]);
  let H = me($t, He),
    We = ae(H.fullDiffMetadata$),
    Ge = ae(H.fullContentLoadFailed$),
    Ke = ae(H.fullContentUnavailable$),
    U =
      ee &&
      De &&
      (c != null || S != null) &&
      be &&
      d.metadata.isPartial &&
      !d.isBinary &&
      !d.isGitlink &&
      !Ie &&
      !Le &&
      !Fe &&
      !ze &&
      We == null &&
      !Ge &&
      !Ke,
    qe;
  n[12] !== c ||
  n[13] !== d ||
  n[14] !== V ||
  n[15] !== H.key ||
  n[16] !== w ||
  n[17] !== S ||
  n[18] !== C ||
  n[19] !== E ||
  n[20] !== T ||
  n[21] !== D ||
  n[22] !== z ||
  n[23] !== we ||
  n[24] !== F
    ? ((qe = () => {
        zt(we, {
          diff: d,
          fullContentLoader: S,
          getSnapshotGeneration: T,
          hostConfig: z,
          ignoreWhitespace: w,
          key: H.key,
          nextFallbackToDisk: C,
          primeDiffHighlightCache:
            F == null || V ? void 0 : (e) => F.primeDiffHighlightCache({ ...e, cacheKey: kt(e, D) }),
          snapshotGeneration: T?.() ?? E,
          workspaceRoot: c ?? void 0,
        });
      }),
      (n[12] = c),
      (n[13] = d),
      (n[14] = V),
      (n[15] = H.key),
      (n[16] = w),
      (n[17] = S),
      (n[18] = C),
      (n[19] = E),
      (n[20] = T),
      (n[21] = D),
      (n[22] = z),
      (n[23] = we),
      (n[24] = F),
      (n[25] = qe))
    : (qe = n[25]);
  let Je = qe,
    Ye = (0, Un.useEffectEvent)(Je),
    Xe;
  n[26] !== Ye || n[27] !== U
    ? ((Xe = () => {
        if (!U) return;
        let e = R.current;
        if (e == null) return;
        let t = new IntersectionObserver((e) => {
          e.some(On) && (t.disconnect(), Ye());
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (n[26] = Ye),
      (n[27] = U),
      (n[28] = Xe))
    : (Xe = n[28]);
  let Ze;
  (n[29] !== c ||
  n[30] !== d ||
  n[31] !== V ||
  n[32] !== H.key ||
  n[33] !== w ||
  n[34] !== C ||
  n[35] !== E ||
  n[36] !== T ||
  n[37] !== D ||
  n[38] !== z ||
  n[39] !== we ||
  n[40] !== U ||
  n[41] !== F
    ? ((Ze = [c, V, d, w, C, E, T, H.key, D, z, we, U, F]),
      (n[29] = c),
      (n[30] = d),
      (n[31] = V),
      (n[32] = H.key),
      (n[33] = w),
      (n[34] = C),
      (n[35] = E),
      (n[36] = T),
      (n[37] = D),
      (n[38] = z),
      (n[39] = we),
      (n[40] = U),
      (n[41] = F),
      (n[42] = Ze))
    : (Ze = n[42]),
    (0, Un.useEffect)(Xe, Ze));
  let W = We ?? d.metadata,
    $e;
  n[43] !== B || n[44] !== We
    ? (($e = We == null ? B : Ue(We)), (n[43] = B), (n[44] = We), (n[45] = $e))
    : ($e = n[45]);
  let tt = $e,
    nt;
  n[46] !== V || n[47] !== W
    ? ((nt = V ? { ...W, lang: `text` } : W), (n[46] = V), (n[47] = W), (n[48] = nt))
    : (nt = n[48]);
  let at = nt,
    ot = b === `staged` ? null : ve,
    st;
  n[49] !== c || n[50] !== d || n[51] !== b || n[52] !== ot || n[53] !== z.id
    ? ((st = Rn({ diff: d, openFilePath: ot, cwd: c, hostId: z.id, hunkActionsVariant: b })),
      (n[49] = c),
      (n[50] = d),
      (n[51] = b),
      (n[52] = ot),
      (n[53] = z.id),
      (n[54] = st))
    : (st = n[54]);
  let ct = st,
    lt;
  n[55] !== m ||
  n[56] !== se ||
  n[57] !== oe ||
  n[58] !== a ||
  n[59] !== s ||
  n[60] !== c ||
  n[61] !== d.metadata.name ||
  n[62] !== p ||
  n[63] !== o ||
  n[64] !== k ||
  n[65] !== le ||
  n[66] !== O ||
  n[67] !== ue ||
  n[68] !== de ||
  n[69] !== fe ||
  n[70] !== ie ||
  n[71] !== u
    ? ((lt = {
        cwd: c,
        diffPath: d.metadata.name,
        workspaceRoot: u,
        enableComments: p,
        allowCommentDrafts: m,
        comments: a,
        modelComments: o,
        readonlyComments: O,
        submittingCommentKeys: ie,
        onCommentsChange: k,
        commentAuthorLabel: oe,
        commentAuthorAvatarUrl: se,
        onReadonlyCommentReply: le,
        renderReadonlyComment: ue,
        renderReadonlyCommentActions: de,
        renderReadonlyCommentBody: fe,
        onSelectionClear: ke,
        conversationId: s,
      }),
      (n[55] = m),
      (n[56] = se),
      (n[57] = oe),
      (n[58] = a),
      (n[59] = s),
      (n[60] = c),
      (n[61] = d.metadata.name),
      (n[62] = p),
      (n[63] = o),
      (n[64] = k),
      (n[65] = le),
      (n[66] = O),
      (n[67] = ue),
      (n[68] = de),
      (n[69] = fe),
      (n[70] = ie),
      (n[71] = u),
      (n[72] = lt))
    : (lt = n[72]);
  let { annotations: ut, annotationKeys: dt, addDraftComment: ft, renderCommentAnnotation: pt } = it(lt),
    mt;
  bb0: {
    if (!M || Ie || Le) {
      let e;
      (n[73] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (n[73] = e)) : (e = n[73]), (mt = e));
      break bb0;
    }
    let e;
    (n[74] !== d.metadata.hunks || n[75] !== d.metadata.name
      ? ((e = []),
        d.metadata.hunks.forEach((t, n) => {
          let r = fn(t);
          r &&
            e.push({
              side: r.side,
              lineNumber: r.lineNumber,
              metadata: { kind: `hunk-actions`, path: d.metadata.name, hunkIndex: n },
            });
        }),
        (n[74] = d.metadata.hunks),
        (n[75] = d.metadata.name),
        (n[76] = e))
      : (e = n[76]),
      (mt = e));
  }
  let ht = mt,
    G;
  n[77] !== ut || n[78] !== p || n[79] !== ht || n[80] !== M
    ? ((G = []),
      M && G.push(...ht),
      p && G.push(...ut),
      (n[77] = ut),
      (n[78] = p),
      (n[79] = ht),
      (n[80] = M),
      (n[81] = G))
    : (G = n[81]);
  let gt = G,
    vt;
  n[82] === v
    ? (vt = n[83])
    : ((vt = (e) => {
        let { annotationSide: t, lineNumber: n } = e;
        v.current = { lineNumber: n, side: t };
      }),
      (n[82] = v),
      (n[83] = vt));
  let yt = vt,
    bt;
  n[84] === v
    ? (bt = n[85])
    : ((bt = () => {
        v.current = null;
      }),
      (n[84] = v),
      (n[85] = bt));
  let xt = bt,
    St;
  n[86] !== ft || n[87] !== m || n[88] !== dt || n[89] !== W || n[90] !== v || n[91] !== _e
    ? ((St = () => {
        if (!m) return;
        let e = v.current;
        if (!e) return;
        let t = rt(e.side, e.lineNumber);
        dt.has(t) ||
          (ft({
            side: e.side,
            lineNumber: e.lineNumber,
            localDiffHunk: on(W, { side: e.side, start: e.lineNumber, end: e.lineNumber }),
          }),
          _e?.());
      }),
      (n[86] = ft),
      (n[87] = m),
      (n[88] = dt),
      (n[89] = W),
      (n[90] = v),
      (n[91] = _e),
      (n[92] = St))
    : (St = n[92]);
  let Ct = St,
    wt,
    Tt;
  (n[93] !== Ct || n[94] !== j
    ? ((wt = () => (
        (j.current = Ct),
        () => {
          j.current === Ct && (j.current = Dn);
        }
      )),
      (Tt = [Ct, j]),
      (n[93] = Ct),
      (n[94] = j),
      (n[95] = wt),
      (n[96] = Tt))
    : ((wt = n[95]), (Tt = n[96])),
    (0, Un.useEffect)(wt, Tt));
  let Et;
  n[97] !== b || n[98] !== he || n[99] !== pt
    ? ((Et = (e) => {
        let t = e.metadata;
        return t
          ? t.kind === `hunk-actions`
            ? (0, $.jsx)(Ln, { path: t.path, hunkIndex: t.hunkIndex, onHunkAction: he, variant: b })
            : pt(e)
          : null;
      }),
      (n[97] = b),
      (n[98] = he),
      (n[99] = pt),
      (n[100] = Et))
    : (Et = n[100]);
  let Dt = Et,
    Ot;
  n[101] !== ft || n[102] !== m || n[103] !== dt || n[104] !== W
    ? ((Ot = (e) => {
        if (!m) return;
        let t = e,
          n = t.endSide ?? t.side;
        if (n == null) return;
        window.requestAnimationFrame(() => {
          Oe({ ...t });
        });
        let r = t.endSide != null && t.endSide !== t.side,
          i = r ? t.end : Math.max(t.start, t.end),
          a = rt(n, i);
        dt.has(a) ||
          ft({
            side: n,
            lineNumber: i,
            ...(t.start !== t.end || r ? { startLine: r ? t.start : Math.min(t.start, t.end) } : {}),
            ...(r && t.side != null ? { startSide: t.side } : {}),
            localDiffHunk: on(W, t),
          });
      }),
      (n[101] = ft),
      (n[102] = m),
      (n[103] = dt),
      (n[104] = W),
      (n[105] = Ot))
    : (Ot = n[105]);
  let At = Ot,
    Mt = ce || (U && !te),
    K;
  n[106] !== m ||
  n[107] !== gt ||
  n[108] !== i ||
  n[109] !== d ||
  n[110] !== f ||
  n[111] !== p ||
  n[112] !== at ||
  n[113] !== Ge ||
  n[114] !== Je ||
  n[115] !== At ||
  n[116] !== h ||
  n[117] !== yt ||
  n[118] !== xt ||
  n[119] !== g ||
  n[120] !== Fe ||
  n[121] !== x ||
  n[122] !== ct ||
  n[123] !== Le ||
  n[124] !== Re ||
  n[125] !== r?.fileOptions ||
  n[126] !== Pe ||
  n[127] !== ot ||
  n[128] !== D ||
  n[129] !== pe ||
  n[130] !== ge ||
  n[131] !== A ||
  n[132] !== Dt ||
  n[133] !== tt ||
  n[134] !== re ||
  n[135] !== xe ||
  n[136] !== I ||
  n[137] !== M ||
  n[138] !== N ||
  n[139] !== Mt ||
  n[140] !== Se ||
  n[141] !== P ||
  n[142] !== Te ||
  n[143] !== Ce
    ? ((K = Mt
        ? (0, $.jsx)(An, { diff: d, lines: jn(d) })
        : N
          ? (0, $.jsx)(Pn, { onRetry: pe })
          : tt
            ? (0, $.jsx)(kn, { canOpenFile: i, onOpenInEditor: ge })
            : (0, $.jsxs)($.Fragment, {
                children: [
                  Ge ? (0, $.jsx)(Fn, { onRetry: Je }) : null,
                  (0, $.jsx)(jt, {
                    diffViewProps: {
                      ...r?.fileOptions,
                      diffViewClassName: f,
                      disableScrollAnchor: Te != null,
                      fileDiff: at,
                      metrics: D,
                      viewType: P,
                      wrapLines: Ce,
                      hunkSeparators: x,
                      reviewPath: re,
                      lineDiffType: Pe,
                      expansionLineCount: 20,
                      enableLineSelection: m,
                      onLineEnter: yt,
                      onLineLeave: xt,
                      onLineClick: h,
                      onLineNumberClick: g,
                      onLineSelected: Oe,
                      onLineSelectionChange: Oe,
                      selectedLines: I,
                      lineAnnotations: gt,
                      renderAnnotation: M || p ? Dt : void 0,
                      onGutterUtilityClick: m ? At : void 0,
                      onPostRender: A,
                      useReviewLineInfoSeparators: Se,
                    },
                    filePath: d.metadata.name,
                    previewPath: ot,
                    imagePreview: ct,
                    hasNoChanges: Fe,
                    isRenameWithoutChanges: Re,
                    isBinary: d.isBinary,
                    isDeletion: Le,
                    richPreviewEnabled: xe,
                  }),
                ],
              })),
      (n[106] = m),
      (n[107] = gt),
      (n[108] = i),
      (n[109] = d),
      (n[110] = f),
      (n[111] = p),
      (n[112] = at),
      (n[113] = Ge),
      (n[114] = Je),
      (n[115] = At),
      (n[116] = h),
      (n[117] = yt),
      (n[118] = xt),
      (n[119] = g),
      (n[120] = Fe),
      (n[121] = x),
      (n[122] = ct),
      (n[123] = Le),
      (n[124] = Re),
      (n[125] = r?.fileOptions),
      (n[126] = Pe),
      (n[127] = ot),
      (n[128] = D),
      (n[129] = pe),
      (n[130] = ge),
      (n[131] = A),
      (n[132] = Dt),
      (n[133] = tt),
      (n[134] = re),
      (n[135] = xe),
      (n[136] = I),
      (n[137] = M),
      (n[138] = N),
      (n[139] = Mt),
      (n[140] = Se),
      (n[141] = P),
      (n[142] = Te),
      (n[143] = Ce),
      (n[144] = K))
    : (K = n[144]);
  let q = K;
  if (Te != null) {
    let e;
    return (
      n[145] !== q || n[146] !== xt
        ? ((e = (0, $.jsx)(`div`, {
            ref: R,
            className: `relative overflow-hidden`,
            onMouseLeave: xt,
            children: q,
          })),
          (n[145] = q),
          (n[146] = xt),
          (n[147] = e))
        : (e = n[147]),
      e
    );
  }
  let Nt, Pt, J;
  n[148] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nt = { height: `auto`, opacity: 1 }),
      (Pt = { height: 0, opacity: 0 }),
      (J = { duration: 0, ease: `easeInOut` }),
      (n[148] = Nt),
      (n[149] = Pt),
      (n[150] = J))
    : ((Nt = n[148]), (Pt = n[149]), (J = n[150]));
  let Ft;
  return (
    n[151] !== q || n[152] !== xt
      ? ((Ft = (0, $.jsx)(l.div, {
          ref: R,
          initial: !1,
          animate: Nt,
          exit: Pt,
          transition: J,
          className: `relative overflow-hidden`,
          onMouseLeave: xt,
          children: q,
        })),
        (n[151] = q),
        (n[152] = xt),
        (n[153] = Ft))
      : (Ft = n[153]),
    Ft
  );
}
function Dn() {}
function On(e) {
  return e.isIntersecting;
}
function kn(e) {
  let t = (0, Hn.c)(6),
    { canOpenFile: n, onOpenInEditor: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: (0, $.jsx)(A, {
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
        ? (0, $.jsx)(C, {
            className: `shrink-0 px-1.5`,
            color: `ghost`,
            size: `toolbar`,
            onClick: r,
            children: (0, $.jsx)(A, {
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
function An(e) {
  let t = (0, Hn.c)(4),
    { diff: n, lines: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(A, {
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
            children: [i, (0, $.jsx)(Se, { lines: r, minWidth: 42, maxWidth: 96, seed: a })],
          }),
        })),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function jn(e) {
  return Math.min(Kn, Math.max(Gn, e.additions + e.deletions + 6));
}
function Mn(e) {
  let t = (0, Hn.c)(15),
    { path: n } = e,
    r,
    i,
    a;
  t[0] === n
    ? ((r = t[1]), (i = t[2]), (a = t[3]))
    : ((r = Xn.resolveIcon(`file-tree-icon-file`, n)),
      (a = `size-4 shrink-0`),
      (i = Nn(r.token)),
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
    ? ((u = (0, $.jsx)(`svg`, { "aria-hidden": !0, className: `size-4 shrink-0`, viewBox: s, children: l })),
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
function Nn(e) {
  if (e == null) return `var(--color-text-tertiary)`;
  let t = Yn[e];
  return t == null
    ? `var(--color-text-tertiary)`
    : `var(--trees-file-icon-color-${e}, var(--trees-file-icon-color, ${Jn[t]}))`;
}
function Pn(e) {
  let t = (0, Hn.c)(5),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(A, {
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
          : (0, $.jsx)(C, {
              className: `shrink-0 text-default`,
              color: `outline`,
              onClick: n,
              size: `default`,
              children: (0, $.jsx)(A, {
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
      : ((a = (0, $.jsxs)(B, { className: `gap-2 bg-surface py-4`, children: [r, i] })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
function Fn(e) {
  let t = (0, Hn.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(`span`, {
        className: `text-secondary`,
        children: (0, $.jsx)(A, {
          id: `codex.review.diff.fullContentLoadFailed`,
          defaultMessage: `Full file content failed to load`,
          description: `Inline notice shown when a partial diff could not be expanded to full file content`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(A, {
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
            (0, $.jsx)(C, {
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
function In(e) {
  let t = (0, Hn.c)(23),
    { disabled: n, variant: r, onFileAction: i, useMutedButtonStyle: a } = e,
    o = r === `staged` ? `unstage` : `stage`,
    s = a ? `ghostTertiary` : `ghost`,
    c = a ? `iconMd` : void 0,
    l =
      a &&
      r === `unstaged` &&
      `gap-0.5 opacity-0 group-hover/diff-header:opacity-100 group-has-[:focus-visible]/diff-header:opacity-100`,
    u = !a && `opacity-0 group-hover/file-diff:opacity-100`,
    f;
  t[0] !== l || t[1] !== u
    ? ((f = d(`flex items-center`, l, u)), (t[0] = l), (t[1] = u), (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] === i
    ? (p = t[4])
    : ((p = (e) => {
        (e.stopPropagation(), i?.(`revert`));
      }),
      (t[3] = i),
      (t[4] = p));
  let m;
  t[5] !== s || t[6] !== n || t[7] !== c || t[8] !== p
    ? ((m = (0, $.jsx)(It, { action: `revert`, color: s, disabled: n, size: c, scope: `file`, onClick: p })),
      (t[5] = s),
      (t[6] = n),
      (t[7] = c),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== o || t[11] !== i
    ? ((h = (e) => {
        (e.stopPropagation(), i?.(o));
      }),
      (t[10] = o),
      (t[11] = i),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] !== o || t[14] !== s || t[15] !== n || t[16] !== c || t[17] !== h
    ? ((g = (0, $.jsx)(It, { scope: `file`, action: o, color: s, disabled: n, size: c, onClick: h })),
      (t[13] = o),
      (t[14] = s),
      (t[15] = n),
      (t[16] = c),
      (t[17] = h),
      (t[18] = g))
    : (g = t[18]);
  let _;
  return (
    t[19] !== f || t[20] !== m || t[21] !== g
      ? ((_ = (0, $.jsxs)(`div`, { className: f, children: [m, g] })),
        (t[19] = f),
        (t[20] = m),
        (t[21] = g),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
}
function Ln(e) {
  let t = (0, Hn.c)(15),
    { path: n, hunkIndex: r, onHunkAction: i, variant: a } = e,
    o = a === `staged` ? `unstage` : `stage`,
    s;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((s = (0, $.jsx)(It, {
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
    ? ((l = (0, $.jsx)(It, { scope: `hunk`, action: o, onClick: c })), (t[9] = o), (t[10] = c), (t[11] = l))
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
function Rn({ diff: e, openFilePath: t, cwd: n, hostId: r, hunkActionsVariant: i }) {
  let a = zn(
      i === `unstaged`
        ? { cwd: n, hostId: r, path: e.oldPath, ref: `index` }
        : { cwd: n, hostId: r, path: e.oldPath, ref: `head` },
    ),
    o = i === `staged` ? zn({ cwd: n, hostId: r, path: e.newPath, ref: `index` }) : Bn(t, r);
  return !a && !o ? null : { before: a, after: o };
}
function zn({ cwd: e, hostId: t, path: n, ref: r }) {
  return !e || !n || n === `/dev/null` ? null : { kind: `git`, cwd: e, hostId: t, path: n, ref: r };
}
function Bn(e, t) {
  return !e || e === `/dev/null` ? null : { kind: `worktree`, path: e, hostId: t };
}
function Vn({ ctrlKey: e, metaKey: t }) {
  return e || t;
}
var Hn, Un, $, Wn, Gn, Kn, qn, Jn, Yn, Xn;
function Zn() {
  return (Zn = e(() => {
    ((Hn = g()),
      Ze(),
      tt(),
      Ge(),
      f(),
      s(),
      o(),
      T(),
      (Un = a()),
      te(),
      U(),
      ge(),
      w(),
      x(),
      R(),
      we(),
      de(),
      Ft(),
      W(),
      Ve(),
      At(),
      P(),
      Pe(),
      N(),
      v(),
      H(),
      yt(),
      n(),
      Je(),
      Ce(),
      Xe(),
      _(),
      Ke(),
      h(),
      ie(),
      ze(),
      Rt(),
      en(),
      an(),
      bt(),
      dn(),
      nt(),
      j(),
      G(),
      ot(),
      vn(),
      ($ = u()),
      (Wn = 2e3),
      (Gn = 3),
      (Kn = 24),
      (qn = ` -> `),
      (Jn = {
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
      (Yn = {
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
      (Xn = Ie()));
  }))();
}
export { en as a, mn as i, Zn as n, Bt as o, vn as r, yn as t };
//# sourceMappingURL=code-diff-f5bc2cfbc049.js.map
