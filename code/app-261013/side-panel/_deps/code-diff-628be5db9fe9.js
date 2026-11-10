import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $W as n,
  AH as r,
  AO as i,
  BR as a,
  BV as o,
  CO as s,
  Cot as c,
  Cwt as l,
  Cz as u,
  IDt as d,
  Ixt as f,
  LR as p,
  NR as m,
  Pxt as h,
  RR as g,
  Rxt as _,
  Swt as v,
  TJ as y,
  TO as b,
  Tz as x,
  UT as S,
  VDt as ee,
  Vxt as te,
  WT as C,
  _Mt as w,
  _wt as T,
  bz as E,
  cSt as ne,
  cz as D,
  gMt as O,
  gwt as re,
  iO as ie,
  iot as k,
  jDt as ae,
  nk as oe,
  rO as se,
  rst as A,
  sz as ce,
  t3 as le,
  tH as ue,
  tk as de,
  vzt as fe,
  wot as pe,
  xMt as j,
  xz as me,
  yzt as M,
  zxt as he,
} from "./app-shared-bbfeca5e5737.js";
import {
  $3n as ge,
  $lr as N,
  Cwr as P,
  EEt as F,
  FPn as I,
  Gvt as L,
  HCn as _e,
  Hvt as ve,
  Lvt as R,
  Ovt as ye,
  PPn as be,
  Qvt as xe,
  TEt as Se,
  Uvt as Ce,
  VJn as we,
  WCn as z,
  X$n as Te,
  X7t as Ee,
  Z7t as De,
  Zvt as Oe,
  cVt as ke,
  e6n as Ae,
  eur as B,
  far as je,
  gwr as Me,
  h1 as V,
  hp as H,
  inr as Ne,
  lVt as Pe,
  m1 as Fe,
  mp as Ie,
  nnr as Le,
  nrr as Re,
  oFr as ze,
  par as Be,
  q$n as U,
  rrr as Ve,
  sFr as He,
  sVt as Ue,
  tnr as We,
  uar as Ge,
  wvt as Ke,
  xvt as qe,
  zvt as Je,
} from "./app-initial-5851df3f6cb1.js";
import { nh as Ye, rh as Xe } from "./app-primary-fe8a450b3b04.js";
import { a as W, o as Ze, r as Qe, t as $e } from "./codex-diff-css-681a898586a0.js";
import { a as et, i as tt } from "./register-pierre-themes-26873099a398.js";
import { f as nt, l as rt, n as it, p as at, t as ot } from "./use-diff-annotations-1d5c03397aea.js";
import {
  _ as st,
  a as ct,
  c as lt,
  d as ut,
  f as dt,
  g as ft,
  h as pt,
  l as mt,
  m as G,
  o as ht,
  p as gt,
  r as _t,
  s as vt,
  t as yt,
  u as bt,
  v as xt,
} from "./review-preferences-model-4ff078b4c04e.js";
import { n as St, t as Ct } from "./file-diff-61a6fffbd4c1.js";
import { n as wt, r as Tt, t as Et } from "./full-content-metadata-4cfa7aef5857.js";
import { n as Dt, t as Ot } from "./undo-51919964621b.js";
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
        we(
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
    ? ((f = (0, Y.jsx)(K, { ...n }, d)), (t[3] = n), (t[4] = d), (t[5] = f))
    : (f = t[5]);
  let p = f,
    m = s ? `binary` : l ? `rename-without-changes` : `empty`,
    h;
  t[6] === m ? (h = t[7]) : ((h = (0, Y.jsx)(Mt, { kind: m })), (t[6] = m), (t[7] = h));
  let g = h,
    _,
    v;
  t[8] !== r || t[9] !== c || t[10] !== u
    ? ((_ = Le(r)),
      (v = We({ filePath: r, imagePreviewMode: _, isDeletion: c, richPreviewEnabled: u })),
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
        ? ((e = (0, Y.jsx)(pt, { className: n.diffViewClassName, path: i, fallback: p })),
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
        ? ((i = (0, Y.jsx)(st, {
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
        ? ((e = (0, Y.jsx)(gt, {
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
function K(e) {
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
  let [d] = (0, J.useState)(u),
    f;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, Y.jsx)(q, {})), (t[11] = f)) : (f = t[11]);
  let p = r && `[overflow-anchor:none]`,
    m;
  t[12] !== n || t[13] !== p
    ? ((m = O(`relative overflow-clip [contain:content]`, p, n)), (t[12] = n), (t[13] = p), (t[14] = m))
    : (m = t[14]);
  let h = s === `split` ? `split` : `unified`,
    g = c ? `wrap` : `scroll`,
    _ = i ?? `simple`,
    v;
  t[15] !== d || t[16] !== a || t[17] !== m || t[18] !== h || t[19] !== g || t[20] !== _
    ? ((v = (0, Y.jsx)(Ct, {
        className: m,
        diffStyle: h,
        overflow: g,
        hunkSeparators: _,
        ...a,
        fileDiff: d,
      })),
      (t[15] = d),
      (t[16] = a),
      (t[17] = m),
      (t[18] = h),
      (t[19] = g),
      (t[20] = _),
      (t[21] = v))
    : (v = t[21]);
  let y;
  return (
    t[22] !== l || t[23] !== v
      ? ((y = (0, Y.jsx)(_e, { name: `FileDiff`, fallback: f, resetKey: l, children: v })),
        (t[22] = l),
        (t[23] = v),
        (t[24] = y))
      : (y = t[24]),
    y
  );
}
function q() {
  let e = (0, Nt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(`div`, {
          className: `flex items-center bg-surface px-3 py-4 text-sm text-secondary`,
          children: (0, Y.jsx)(d, {
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
function Mt(e) {
  let t = (0, Nt.c)(2),
    { kind: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Y.jsx)(Ie, {
          className: `h-full bg-surface-tertiary py-4 empty:hidden`,
          children:
            n === `binary`
              ? (0, Y.jsx)(d, {
                  id: `wham.diff.binaryFile`,
                  defaultMessage: `Binary file not shown`,
                  description: `Text shown when a binary file is not shown.`,
                })
              : n === `rename-without-changes`
                ? (0, Y.jsx)(d, {
                    id: `codex.diff.fileRenamedWithoutChanges`,
                    defaultMessage: `File renamed without changes`,
                    description: `Text shown when a file was renamed without content changes.`,
                  })
                : (0, Y.jsx)(d, {
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
var Nt, J, Y;
function Pt() {
  return (Pt = e(() => {
    ((Nt = fe()), w(), (J = M()), ae(), z(), H(), St(), At(), xt(), ft(), G(), Ne(), (Y = j()));
  }))();
}
function Ft(e) {
  let n = (0, X.c)(32),
    { action: r, className: i, color: a, disabled: o, size: s, scope: c, onClick: l } = e,
    u = a === void 0 ? `ghost` : a,
    d = o !== void 0 && o,
    f = s === void 0 ? `composerSm` : s,
    p = ee(),
    m;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, It.jsx)(Ot, { className: `icon-2xs` })), (n[0] = m))
    : (m = n[0]);
  let h = m;
  if (r === `stage`) {
    let e;
    (n[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, It.jsx)(Fe, { className: `icon-2xs` })), (n[1] = e))
      : (e = n[1]),
      (h = e));
  } else if (r === `unstage`) {
    let e;
    (n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, It.jsx)(S, { className: `icon-2xs` })), (n[2] = e))
      : (e = n[2]),
      (h = e));
  }
  let g;
  if (c === `file`) {
    if (r === `stage`) {
      let e;
      (n[3] === p
        ? (e = n[4])
        : ((e = p.formatMessage({
            id: `diff.actionButton.stageFile`,
            defaultMessage: `Stage file`,
            description: `Tooltip to stage a file using a git action`,
          })),
          (n[3] = p),
          (n[4] = e)),
        (g = e));
    } else if (r === `unstage`) {
      let e;
      (n[5] === p
        ? (e = n[6])
        : ((e = p.formatMessage({
            id: `diff.actionButton.unstageFile`,
            defaultMessage: `Unstage file`,
            description: `Tooltip to unstage a file using a git action`,
          })),
          (n[5] = p),
          (n[6] = e)),
        (g = e));
    } else {
      let e;
      (n[7] === p
        ? (e = n[8])
        : ((e = p.formatMessage({
            id: `diff.actionButton.revertFile`,
            defaultMessage: `Revert file`,
            description: `Tooltip to revert a file using a git action`,
          })),
          (n[7] = p),
          (n[8] = e)),
        (g = e));
    }
  } else if (c === `hunk`) {
    if (r === `stage`) {
      let e;
      (n[9] === p
        ? (e = n[10])
        : ((e = p.formatMessage({
            id: `diff.actionButton.stageHunk`,
            defaultMessage: `Stage`,
            description: `Tooltip to stage a hunk using a git action`,
          })),
          (n[9] = p),
          (n[10] = e)),
        (g = e));
    } else if (r === `unstage`) {
      let e;
      (n[11] === p
        ? (e = n[12])
        : ((e = p.formatMessage({
            id: `diff.actionButton.unstageHunk`,
            defaultMessage: `Unstage`,
            description: `Tooltip to unstage a hunk using a git action`,
          })),
          (n[11] = p),
          (n[12] = e)),
        (g = e));
    } else {
      let e;
      (n[13] === p
        ? (e = n[14])
        : ((e = p.formatMessage({
            id: `diff.actionButton.revertHunk`,
            defaultMessage: `Revert`,
            description: `Tooltip to revert a hunk using a git action`,
          })),
          (n[13] = p),
          (n[14] = e)),
        (g = e));
    }
  } else if (c === `section`) {
    if (r === `stage`) {
      let e;
      (n[15] === p
        ? (e = n[16])
        : ((e = p.formatMessage({
            id: `diff.actionButton.stageSection`,
            defaultMessage: `Stage all`,
            description: `Tooltip to stage a section using a git action`,
          })),
          (n[15] = p),
          (n[16] = e)),
        (g = e));
    } else if (r === `unstage`) {
      let e;
      (n[17] === p
        ? (e = n[18])
        : ((e = p.formatMessage({
            id: `diff.actionButton.unstageSection`,
            defaultMessage: `Unstage all`,
            description: `Tooltip to unstage a section using a git action`,
          })),
          (n[17] = p),
          (n[18] = e)),
        (g = e));
    } else {
      let e;
      (n[19] === p
        ? (e = n[20])
        : ((e = p.formatMessage({
            id: `diff.actionButton.revertSection`,
            defaultMessage: `Revert all`,
            description: `Tooltip to revert a section using a git action`,
          })),
          (n[19] = p),
          (n[20] = e)),
        (g = e));
    }
  }
  let _;
  n[21] !== i || n[22] !== u || n[23] !== d || n[24] !== h || n[25] !== l || n[26] !== f || n[27] !== g
    ? ((_ = (0, It.jsx)(t, {
        className: i,
        color: u,
        disabled: d,
        size: f,
        uniform: !0,
        "aria-label": g,
        onClick: l,
        children: h,
      })),
      (n[21] = i),
      (n[22] = u),
      (n[23] = d),
      (n[24] = h),
      (n[25] = l),
      (n[26] = f),
      (n[27] = g),
      (n[28] = _))
    : (_ = n[28]);
  let v;
  return (
    n[29] !== _ || n[30] !== g
      ? ((v = (0, It.jsx)(ce, { tooltipContent: g, children: _ })), (n[29] = _), (n[30] = g), (n[31] = v))
      : (v = n[31]),
    v
  );
}
var X, It;
function Lt() {
  return (Lt = e(() => {
    ((X = fe()), ae(), le(), D(), C(), V(), Dt(), (It = j()));
  }))();
}
async function Rt(e, t) {
  let n = e.get($t, t.key),
    r = Xt.get(n);
  if (n.fullDiffMetadata$.get() != null || n.fullContentUnavailable$.get()) return;
  if (r != null && r.snapshotGeneration === t.snapshotGeneration) {
    r.primeDiffHighlightCache = t.primeDiffHighlightCache;
    return;
  }
  let i = { primeDiffHighlightCache: t.primeDiffHighlightCache, snapshotGeneration: t.snapshotGeneration };
  (Xt.set(n, i), n.fullContentLoadFailed$.set(!1), n.fullContentUnavailable$.set(!1));
  let a = () => {
    let n = t.getSnapshotGeneration?.();
    return n == null || n === i.snapshotGeneration
      ? null
      : Rt(e, { ...t, getSnapshotGeneration: void 0, snapshotGeneration: n });
  };
  try {
    let e = await (t.fullContentLoader?.load() ??
      Vt({
        diff: t.diff,
        hostConfig: t.hostConfig,
        ignoreWhitespace: t.ignoreWhitespace,
        nextFallbackToDisk: t.nextFallbackToDisk,
        snapshotGeneration: t.snapshotGeneration,
        workspaceRoot: t.workspaceRoot,
      }));
    if (Xt.get(n) !== i) return;
    switch (e.type) {
      case `success`: {
        let t = i.primeDiffHighlightCache;
        for (; t != null;) {
          if ((await t(e.metadata).catch(() => {}), Xt.get(n) !== i)) return;
          if (i.primeDiffHighlightCache === t) break;
          t = i.primeDiffHighlightCache;
        }
        Xt.get(n) === i && n.fullDiffMetadata$.set(e.metadata);
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
    if (Xt.get(n) === i) {
      let e = a();
      if (e != null) return await e;
      n.fullContentLoadFailed$.set(!0);
    }
  } finally {
    Xt.get(n) === i && Xt.delete(n);
  }
}
function zt({
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
  let a = Yt.exec(n.revision),
    o = a?.[1],
    s = a?.[2];
  if (o == null || s == null) return;
  let c = n.previousPath ?? n.path,
    l = n.path,
    u = Z({
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
  let d = Ht({
    cwd: i,
    hostConfig: e,
    maxObjectBytes: Jt,
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
      }, qt);
    }));
}
function Bt({
  diff: e,
  fullContentLoader: t,
  hostConfig: n,
  ignoreWhitespace: r,
  loadFullFilesEnabled: i,
  nextFallbackToDisk: a,
  snapshotGeneration: o,
  workspaceRoot: s,
}) {
  return `${t?.key ?? e.metadata.cacheKey ?? `${e.metadata.name}:${e.metadata.prevObjectId ?? `none`}:${e.metadata.newObjectId ?? `none`}:${e.additions}:${e.deletions}`}:${e.metadata.prevName ?? ``}:${e.metadata.name}:${s ?? ``}:${Ge(n)}:${a ? `next-disk-fallback` : `next-object-only`}:${r ? `ignore-whitespace` : `exact-whitespace`}:${i ? `full` : `partial`}:${o ?? `unversioned`}`;
}
async function Vt({
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
    p = Z({
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
  let h = (await m) ?? (await Ht({ cwd: a, hostConfig: t, requests: u, snapshotGeneration: i })),
    g = (e) => (e == null ? wt() : (h[e] ?? Wt())),
    _ = g(d),
    v = g(f);
  if ((_.type === `error` && Gt(_.error)) || (v.type === `error` && Gt(v.error)))
    return { type: `unavailable` };
  if (_.type === `error` || v.type === `error`) return { type: `error` };
  let y = Et(e.metadata, _.lines, v.lines, { ignoreWhitespace: n });
  return y == null ? { type: `unavailable` } : { type: `success`, metadata: y };
}
function Z({
  hostConfig: e,
  nextObjectId: t,
  nextFallbackToDisk: n,
  nextPath: r,
  prevObjectId: i,
  prevPath: a,
  snapshotGeneration: o,
  workspaceRoot: s,
}) {
  return JSON.stringify([Ge(e), s, o ?? null, a, r, i, t, n]);
}
function Ht({ cwd: e, hostConfig: t, maxObjectBytes: n, requests: r, snapshotGeneration: i }) {
  let a = JSON.stringify([Ge(t), e, n ?? null, i ?? null]),
    o = Zt.get(a);
  if (o == null) {
    ((o = { cwd: e, hostConfig: t, maxObjectBytes: n, snapshotGeneration: i, waiters: [] }), Zt.set(a, o));
    let r = o;
    setTimeout(() => {
      Zt.get(a) === r && Ut(a, r);
    }, Kt);
  }
  let s = o;
  return new Promise((e, t) => {
    s.waiters.push({ reject: t, requests: r, resolve: e });
  });
}
async function Ut(e, t) {
  let n = 0;
  try {
    for (; n < t.waiters.length;) {
      let e = n,
        r = 0;
      for (; e < t.waiters.length && (e === n || r + (t.waiters[e]?.requests.length ?? 0) <= 4);)
        ((r += t.waiters[e]?.requests.length ?? 0), (e += 1));
      let i = t.waiters.slice(n, e),
        a = await Be(`git`).request({
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
function Wt() {
  return { type: `error`, error: { type: `unknown` } };
}
function Gt(e) {
  switch (e.type) {
    case `unknown`:
      return !1;
    case `not-found`:
    case `too-large`:
      return !0;
  }
}
var Kt, qt, Jt, Yt, Xt, Zt, Qt, $t;
function en() {
  return (en = e(() => {
    (h(),
      A(),
      pe(),
      je(),
      Ve(),
      L(),
      Tt(),
      (Kt = 40),
      (qt = 1e4),
      (Jt = Math.min(Je, R / 2)),
      (Yt = /^(?:branch|commit|staged|unstaged):[A-Z]:\d{6}:([0-9a-f]+):\d{6}:([0-9a-f]+)$/),
      (Xt = new WeakMap()),
      (Zt = new Map()),
      (Qt = new Map()),
      ($t = ne(
        c,
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
  let n = (0, rn.c)(22),
    { onCopyPath: i, onOpen: a, onToggle: o, open: c, openLabel: l } = e,
    u = ee(),
    f;
  n[0] === u
    ? (f = n[1])
    : ((f = u.formatMessage({
        id: `codex.diff.fileHeader.actions`,
        defaultMessage: `File actions`,
        description: `Accessible label for the diff file actions menu`,
      })),
      (n[0] = u),
      (n[1] = f));
  let p;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = (0, Q.jsx)(r, {})), (n[2] = p)) : (p = n[2]);
  let m;
  n[3] === f
    ? (m = n[4])
    : ((m = (0, Q.jsx)(t, { "aria-label": f, color: `ghostTertiary`, size: `iconCircleSm`, children: p })),
      (n[3] = f),
      (n[4] = m));
  let h;
  n[5] === i
    ? (h = n[6])
    : ((h =
        i == null
          ? null
          : (0, Q.jsx)(b.Item, {
              onSelect: i,
              children: (0, Q.jsx)(d, {
                id: `codex.diff.fileHeader.menu.copyPath`,
                defaultMessage: `Copy path`,
                description: `Menu item to copy the path of a diff file`,
              }),
            })),
      (n[5] = i),
      (n[6] = h));
  let g;
  n[7] !== a || n[8] !== l
    ? ((g =
        a == null
          ? null
          : (0, Q.jsx)(b.Item, {
              onSelect: a,
              children:
                l ??
                (0, Q.jsx)(d, {
                  id: `codex.diff.fileHeader.menu.openFile`,
                  defaultMessage: `Open in editor`,
                  description: `Menu item to open a diff file in the editor`,
                }),
            })),
      (n[7] = a),
      (n[8] = l),
      (n[9] = g))
    : (g = n[9]);
  let _;
  n[10] === o ? (_ = n[11]) : ((_ = () => o()), (n[10] = o), (n[11] = _));
  let v;
  n[12] === c
    ? (v = n[13])
    : ((v = (0, Q.jsx)(d, {
        id: `codex.diff.fileHeader.menu.toggle`,
        defaultMessage: `{expanded, select, true {Collapse file} other {Expand file}}`,
        description: `Menu item to expand or collapse a file diff`,
        values: { expanded: c },
      })),
      (n[12] = c),
      (n[13] = v));
  let y;
  n[14] !== _ || n[15] !== v
    ? ((y = (0, Q.jsx)(b.Item, { onSelect: _, children: v })), (n[14] = _), (n[15] = v), (n[16] = y))
    : (y = n[16]);
  let x;
  return (
    n[17] !== m || n[18] !== h || n[19] !== g || n[20] !== y
      ? ((x = (0, Q.jsx)(`div`, {
          className: `shrink-0`,
          role: `presentation`,
          onClick: nn,
          children: (0, Q.jsxs)(s, {
            align: `end`,
            contentWidth: `menu`,
            triggerButton: m,
            children: [h, g, y],
          }),
        })),
        (n[17] = m),
        (n[18] = h),
        (n[19] = g),
        (n[20] = y),
        (n[21] = x))
      : (x = n[21]),
    x
  );
}
function nn(e) {
  return e.stopPropagation();
}
var rn, Q;
function an() {
  return (an = e(() => {
    ((rn = fe()), ae(), le(), i(), y(), (Q = j()));
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
    ((hn = fe()), (gn = M()), (_n = `wham-toggle-all-diffs`));
  }))();
}
function yn(e) {
  let t = (0, Hn.c)(212),
    {
      containerClassName: n,
      diffViewClassName: r,
      diff: i,
      viewType: o,
      stickyHeader: s,
      hunkSeparators: c,
      enableComments: l,
      allowCommentDrafts: u,
      comments: d,
      modelComments: p,
      readonlyComments: h,
      submittingCommentKeys: _,
      onCommentsChange: y,
      commentAuthorLabel: b,
      commentAuthorAvatarUrl: S,
      onReadonlyCommentReply: te,
      renderReadonlyComment: C,
      renderReadonlyCommentActions: w,
      renderReadonlyCommentBody: T,
      open: E,
      diffViewWrap: ne,
      showHunkActions: D,
      showFileActions: re,
      fileActionsDisabled: ie,
      onHunkAction: k,
      onPostRender: ae,
      hunkActionsVariant: oe,
      cwd: A,
      workspaceRoot: ce,
      richPreviewEnabled: le,
      roundedCorners: ue,
      background: de,
      diffSurface: fe,
      disableNativeContextMenu: pe,
      onRequestChanges: j,
      onCopyPath: M,
      onToggleWrap: ge,
      onDirectFileToggle: N,
      onOpenChange: P,
      expandScope: F,
      conversationId: I,
      hostConfig: L,
      hostId: _e,
      loadFullContent: ve,
      fullContentLoader: R,
      showPartialWhileLoadingFullContent: ye,
      fullContentNextFallbackToDisk: be,
      fullContentIgnoreWhitespace: xe,
      reviewPath: Se,
      getFullContentSnapshotGeneration: Ce,
      fullContentSnapshotGeneration: we,
      metrics: z,
      displayPathOverride: Te,
      isLoading: De,
      openFilePathOverride: Oe,
      onLoadRetry: ke,
      showLoadError: Ae,
      headerEndContent: je,
      headerEndContentOpenOnClick: V,
      headerOpenAction: H,
      headerVariant: Ne,
      showHeaderDiffStats: Fe,
      preserveHeaderPositionOnToggle: Ie,
    } = e,
    Le = l !== void 0 && l,
    ze = u === void 0 ? Le : u,
    Be = ne !== void 0 && ne,
    U = D !== void 0 && D,
    Ve = re === void 0 ? U : re,
    He = ie !== void 0 && ie,
    We = oe === void 0 ? `unstaged` : oe,
    Ge = ce === void 0 ? null : ce,
    Ke = le !== void 0 && le,
    Je = ue === void 0 || ue,
    Ye = de === void 0 || de,
    W = fe === void 0 ? `main` : fe,
    Qe = pe !== void 0 && pe,
    et = ve === void 0 || ve,
    tt = ye !== void 0 && ye,
    nt = be !== void 0 && be,
    rt = xe !== void 0 && xe,
    it = De !== void 0 && De,
    ot = Ae !== void 0 && Ae,
    st = Ne === void 0 ? `default` : Ne,
    ft = Fe === void 0 || Fe,
    pt = Ie !== void 0 && Ie,
    G = f(Me),
    ht = Ze() == null ? v : Un.Fragment,
    gt = st === `full-review`,
    [_t, yt] = (0, Un.useState)(Be),
    [bt, xt] = (0, Un.useState)(!1),
    St = (0, Un.useRef)(null),
    Ct = (0, Un.useRef)(null),
    wt = (0, Un.useRef)(xn),
    { platform: Tt } = B(),
    Et = mn(P, F),
    Dt = ee(),
    Ot = x(),
    kt = i.metadata.type === `deleted`,
    At = i.metadata.name,
    jt;
  t[0] !== A || t[1] !== At
    ? ((jt = At && At !== `/dev/null` ? Re(At, A ?? void 0) : At), (t[0] = A), (t[1] = At), (t[2] = jt))
    : (jt = t[2]);
  let K = jt,
    q = Te ?? K ?? At ?? ``,
    Mt;
  t[3] === q ? (Mt = t[4]) : ((Mt = q && !g(q) ? q : null), (t[3] = q), (t[4] = Mt));
  let Nt = Mt,
    J,
    Y;
  t[5] !== A || t[6] !== i.metadata.prevName || t[7] !== i.metadata.type
    ? ((J =
        (i.metadata.type === `rename-pure` || i.metadata.type === `rename-changed`) &&
        i.metadata.prevName != null
          ? Re(i.metadata.prevName, A ?? void 0)
          : null),
      (Y = J == null ? null : (a(J).split(`/`).pop() ?? J)),
      (t[5] = A),
      (t[6] = i.metadata.prevName),
      (t[7] = i.metadata.type),
      (t[8] = J),
      (t[9] = Y))
    : ((J = t[8]), (Y = t[9]));
  let Pt = Y,
    Ft;
  bb0: {
    if (Oe !== void 0) {
      if (Oe == null) {
        Ft = null;
        break bb0;
      }
      let e = Tt === `windows`,
        n;
      (t[10] !== Oe || t[11] !== e
        ? ((n = m(``, Oe, e)), (t[10] = Oe), (t[11] = e), (t[12] = n))
        : (n = t[12]),
        (Ft = n));
      break bb0;
    }
    if (K === `/dev/null` || !A) {
      Ft = K;
      break bb0;
    }
    let e = Tt === `windows`,
      n;
    (t[13] !== A || t[14] !== e || t[15] !== K
      ? ((n = m(A, K, e)), (t[13] = A), (t[14] = e), (t[15] = K), (t[16] = n))
      : (n = t[16]),
      (Ft = n));
  }
  let X = Ft,
    It;
  t[17] === q ? (It = t[18]) : ((It = a(q).split(`/`).pop() ?? q), (t[17] = q), (t[18] = It));
  let Lt = It,
    Rt = J == null ? q : `${J}${qn}${q}`,
    zt = Pt == null ? Lt : `${Pt}${qn}${Lt}`,
    Bt;
  t[19] !== Lt || t[20] !== q || t[21] !== Pt || t[22] !== J
    ? ((Bt =
        J == null || Pt == null
          ? [{ fileName: Lt, path: q }]
          : [
              { fileName: Pt, path: J },
              { fileName: Lt, path: q },
            ]),
      (t[19] = Lt),
      (t[20] = q),
      (t[21] = Pt),
      (t[22] = J),
      (t[23] = Bt))
    : (Bt = t[23]);
  let Vt = Bt,
    Z = _e ?? L?.id,
    Ht,
    Ut;
  (t[24] === Be
    ? ((Ht = t[25]), (Ut = t[26]))
    : ((Ht = () => {
        yt(Be);
      }),
      (Ut = [Be]),
      (t[24] = Be),
      (t[25] = Ht),
      (t[26] = Ut)),
    (0, Un.useEffect)(Ht, Ut));
  let Wt = A ?? null,
    Gt;
  t[27] !== Z || t[28] !== X || t[29] !== Wt
    ? ((Gt = { cwd: Wt, hostId: Z, openPath: X }), (t[27] = Z), (t[28] = X), (t[29] = Wt), (t[30] = Gt))
    : (Gt = t[30]);
  let Kt = he(vt, Gt),
    qt;
  t[31] !== A || t[32] !== Z || t[33] !== X || t[34] !== G
    ? ((qt = async () => {
        try {
          return await lt(G, { cwd: A ?? null, hostId: Z, openPath: X });
        } catch {
          return null;
        }
      }),
      (t[31] = A),
      (t[32] = Z),
      (t[33] = X),
      (t[34] = G),
      (t[35] = qt))
    : (qt = t[35]);
  let Jt = me(qt),
    Yt = !!X && X !== `/dev/null`,
    Xt;
  t[36] !== M || t[37] !== X
    ? ((Xt = () => {
        if (X && X !== `/dev/null`) {
          if (M) {
            M(X);
            return;
          }
          se(X);
        }
      }),
      (t[36] = M),
      (t[37] = X),
      (t[38] = Xt))
    : (Xt = t[38]);
  let Zt = Xt,
    Qt;
  t[39] === Nt
    ? (Qt = t[40])
    : ((Qt =
        Nt == null
          ? void 0
          : () => {
              se(Nt);
            }),
      (t[39] = Nt),
      (t[40] = Qt));
  let $t = Qt,
    en;
  t[41] === ge
    ? (en = t[42])
    : ((en = () => {
        if (ge) {
          ge();
          return;
        }
        yt(bn);
      }),
      (t[41] = ge),
      (t[42] = en));
  let tn = en,
    nn = kt ? (i.firstDeletionLine ?? 1) : (i.firstAdditionLine ?? 1),
    rn;
  t[43] !== A || t[44] !== Z || t[45] !== X || t[46] !== G
    ? ((rn = (e) => {
        let { lineNumber: t, event: n } = e;
        X && Vn(n) && ut(G, { path: X, line: t, cwd: A ?? null, hostId: Z });
      }),
      (t[43] = A),
      (t[44] = Z),
      (t[45] = X),
      (t[46] = G),
      (t[47] = rn))
    : (rn = t[47]);
  let Q = me(rn),
    an;
  t[48] !== A || t[49] !== nn || t[50] !== Z || t[51] !== X || t[52] !== G
    ? ((an = (e, t, n) => {
        if (!X) return;
        let r = St.current ?? nn;
        ((St.current = null),
          dt(G, {
            cwd: A ?? null,
            hostId: Z,
            line: r,
            openPath: X,
            appPath: n,
            persistPreferred: t,
            target: e,
          }));
      }),
      (t[48] = A),
      (t[49] = nn),
      (t[50] = Z),
      (t[51] = X),
      (t[52] = G),
      (t[53] = an))
    : (an = t[53]);
  let on = me(an),
    sn;
  t[54] !== A || t[55] !== nn || t[56] !== Z || t[57] !== Jt || t[58] !== X || t[59] !== Kt || t[60] !== G
    ? ((sn = () => {
        X &&
          Jt().then((e) => {
            let { primaryTarget: t } = mt({ data: e, preferredTargetOverride: Kt });
            ut(G, { cwd: A ?? null, hostId: Z, line: nn, path: X, target: t?.target, appPath: t?.appPath });
          });
      }),
      (t[54] = A),
      (t[55] = nn),
      (t[56] = Z),
      (t[57] = Jt),
      (t[58] = X),
      (t[59] = Kt),
      (t[60] = G),
      (t[61] = sn))
    : (sn = t[61]);
  let cn = sn,
    ln;
  t[62] === Q
    ? (ln = t[63])
    : ((ln = (e) => {
        Q(e);
      }),
      (t[62] = Q),
      (t[63] = ln));
  let un = ln,
    dn;
  t[64] === Q
    ? (dn = t[65])
    : ((dn = (e) => {
        Q(e);
      }),
      (t[64] = Q),
      (t[65] = dn));
  let fn = dn,
    pn;
  t[66] !== Et || t[67] !== N || t[68] !== P || t[69] !== E || t[70] !== pt || t[71] !== Ot
    ? ((pn = (e) => {
        let t = !E;
        if ((pt && e != null && Xe(e.currentTarget, Ot), e?.altKey)) {
          Et(t);
          return;
        }
        (P(t), N?.(t));
      }),
      (t[66] = Et),
      (t[67] = N),
      (t[68] = P),
      (t[69] = E),
      (t[70] = pt),
      (t[71] = Ot),
      (t[72] = pn))
    : (pn = t[72]);
  let hn = me(pn),
    gn;
  t[73] !== A || t[74] !== nn || t[75] !== Z || t[76] !== X || t[77] !== G || t[78] !== hn
    ? ((gn = (e) => {
        (e.stopPropagation(), hn(e));
      }),
      (t[73] = A),
      (t[74] = nn),
      (t[75] = Z),
      (t[76] = X),
      (t[77] = G),
      (t[78] = hn),
      (t[79] = gn))
    : (gn = t[79]);
  let _n = me(gn),
    vn;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vn = () => {
        wt.current();
      }),
      (t[80] = vn))
    : (vn = t[80]);
  let yn = vn,
    Cn;
  t[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Cn = (e) => {
        let t = typeof e.nativeEvent.composedPath == `function` ? e.nativeEvent.composedPath() : [e.target];
        St.current = at(t);
      }),
      (t[81] = Cn))
    : (Cn = t[81]);
  let wn = Cn,
    Tn;
  t[82] !== A || t[83] !== L || t[84] !== kt || t[85] !== X
    ? ((Tn = !kt && A != null && L != null && X != null ? { cwd: A, hostConfig: L, path: X } : null),
      (t[82] = A),
      (t[83] = L),
      (t[84] = kt),
      (t[85] = X),
      (t[86] = Tn))
    : (Tn = t[86]);
  let Dn;
  t[87] !== Yt ||
  t[88] !== A ||
  t[89] !== nn ||
  t[90] !== H ||
  t[91] !== Z ||
  t[92] !== kt ||
  t[93] !== X ||
  t[94] !== G
    ? ((Dn =
        Yt && !kt && X != null
          ? () => {
              let e = St.current,
                t = { scope: G, path: X, cwd: A ?? null, hostId: Z, line: e ?? nn, openInSidePanel: !0 };
              return Ue(t)
                ? () => {
                    ((St.current = null), H == null ? Pe(t) : H.onClick(e ?? void 0));
                  }
                : null;
            }
          : void 0),
      (t[87] = Yt),
      (t[88] = A),
      (t[89] = nn),
      (t[90] = H),
      (t[91] = Z),
      (t[92] = kt),
      (t[93] = X),
      (t[94] = G),
      (t[95] = Dn))
    : (Dn = t[95]);
  let On;
  t[96] === o
    ? (On = t[97])
    : ((On =
        o === `auto`
          ? (e) =>
              Ee({
                axis: `width`,
                target: e,
                onChange: (e) => {
                  let { width: t } = e;
                  return xt(t >= 800);
                },
              })
          : void 0),
      (t[96] = o),
      (t[97] = On));
  let kn = Je && (gt ? `rounded-b-lg` : `rounded-lg`),
    An = gt && E && `pb-0.5`,
    jn;
  t[98] !== n || t[99] !== kn || t[100] !== An
    ? ((jn = O(`group/file-diff flex flex-col overflow-clip`, kn, An, n)),
      (t[98] = n),
      (t[99] = kn),
      (t[100] = An),
      (t[101] = jn))
    : (jn = t[101]);
  let Mn;
  t[102] !== Ye || t[103] !== W
    ? ((Mn = $e(Ye, W)), (t[102] = Ye), (t[103] = W), (t[104] = Mn))
    : (Mn = t[104]);
  let Nn = `var(--codex-diffs-surface-override, ${Mn})`,
    Pn = Ye ? `var(--codex-diffs-surface)` : void 0,
    Fn;
  t[105] !== Nn || t[106] !== Pn
    ? ((Fn = { "--codex-diffs-surface": Nn, backgroundColor: Pn }),
      (t[105] = Nn),
      (t[106] = Pn),
      (t[107] = Fn))
    : (Fn = t[107]);
  let In;
  t[108] !== V || t[109] !== N || t[110] !== P || t[111] !== E
    ? ((In = (e) => {
        (e.stopPropagation(), V != null && (P(V), V !== E && N?.(V)));
      }),
      (t[108] = V),
      (t[109] = N),
      (t[110] = P),
      (t[111] = E),
      (t[112] = In))
    : (In = t[112]);
  let Ln;
  t[113] !== i.metadata.name || t[114] !== k
    ? ((Ln = (e) => {
        k?.({ path: i.metadata.name, action: e, scope: `file` });
      }),
      (t[113] = i.metadata.name),
      (t[114] = k),
      (t[115] = Ln))
    : (Ln = t[115]);
  let Rn = Yt,
    zn;
  t[116] === Dt
    ? (zn = t[117])
    : ((zn = Dt.formatMessage({
        id: `diff.fileHeader.toggle`,
        defaultMessage: `Toggle file diff`,
        description: `Button label for toggling the file diff section`,
      })),
      (t[116] = Dt),
      (t[117] = zn));
  let Bn;
  t[118] !== i ||
  t[119] !== He ||
  t[120] !== $t ||
  t[121] !== _n ||
  t[122] !== cn ||
  t[123] !== zt ||
  t[124] !== Rt ||
  t[125] !== Vt ||
  t[126] !== je ||
  t[127] !== H ||
  t[128] !== st ||
  t[129] !== We ||
  t[130] !== it ||
  t[131] !== E ||
  t[132] !== Ve ||
  t[133] !== ft ||
  t[134] !== s ||
  t[135] !== In ||
  t[136] !== Ln ||
  t[137] !== Rn ||
  t[138] !== zn ||
  t[139] !== hn ||
  t[140] !== K
    ? ((Bn = (0, $.jsx)(Sn, {
        diff: i,
        displayFileName: zt,
        displayPath: Rt,
        displayPathParts: Vt,
        onFileNameClick: _n,
        onOpenInEditor: cn,
        headerEndContent: je,
        onHeaderEndContentClick: In,
        headerOpenAction: H,
        fileActionsDisabled: He,
        onCopyPath: $t,
        onFileToggle: hn,
        onFileAction: Ln,
        open: E,
        stickyHeader: s,
        showOpenInButton: Rn,
        showDiffStats: ft,
        toggleAriaLabel: zn,
        workspaceRelativePath: K,
        showFileActions: Ve,
        hunkActionsVariant: We,
        headerVariant: st,
        isLoading: it,
      })),
      (t[118] = i),
      (t[119] = He),
      (t[120] = $t),
      (t[121] = _n),
      (t[122] = cn),
      (t[123] = zt),
      (t[124] = Rt),
      (t[125] = Vt),
      (t[126] = je),
      (t[127] = H),
      (t[128] = st),
      (t[129] = We),
      (t[130] = it),
      (t[131] = E),
      (t[132] = Ve),
      (t[133] = ft),
      (t[134] = s),
      (t[135] = In),
      (t[136] = Ln),
      (t[137] = Rn),
      (t[138] = zn),
      (t[139] = hn),
      (t[140] = K),
      (t[141] = Bn))
    : (Bn = t[141]);
  let Wn;
  t[142] !== ze ||
  t[143] !== bt ||
  t[144] !== Yt ||
  t[145] !== S ||
  t[146] !== b ||
  t[147] !== d ||
  t[148] !== I ||
  t[149] !== A ||
  t[150] !== i ||
  t[151] !== r ||
  t[152] !== Le ||
  t[153] !== rt ||
  t[154] !== R ||
  t[155] !== nt ||
  t[156] !== we ||
  t[157] !== Ce ||
  t[158] !== un ||
  t[159] !== fn ||
  t[160] !== cn ||
  t[161] !== L ||
  t[162] !== We ||
  t[163] !== c ||
  t[164] !== it ||
  t[165] !== et ||
  t[166] !== z ||
  t[167] !== p ||
  t[168] !== y ||
  t[169] !== k ||
  t[170] !== ke ||
  t[171] !== ae ||
  t[172] !== te ||
  t[173] !== j ||
  t[174] !== E ||
  t[175] !== X ||
  t[176] !== h ||
  t[177] !== C ||
  t[178] !== w ||
  t[179] !== T ||
  t[180] !== Se ||
  t[181] !== Ke ||
  t[182] !== U ||
  t[183] !== ot ||
  t[184] !== tt ||
  t[185] !== _ ||
  t[186] !== gt ||
  t[187] !== o ||
  t[188] !== Ge ||
  t[189] !== _t
    ? ((Wn = E
        ? (0, $.jsx)(En, {
            canOpenFile: Yt,
            comments: d,
            modelComments: p,
            conversationId: I,
            cwd: A,
            workspaceRoot: Ge,
            diff: i,
            diffViewClassName: r,
            enableComments: Le,
            allowCommentDrafts: ze,
            handleLineClick: un,
            handleLineNumberClick: fn,
            hostConfig: L,
            hoveredLineRef: Ct,
            hunkActionsVariant: We,
            hunkSeparators: c,
            loadFullContent: et,
            fullContentLoader: R,
            showPartialWhileLoadingFullContent: tt,
            fullContentNextFallbackToDisk: nt,
            fullContentIgnoreWhitespace: rt,
            reviewPath: Se,
            getFullContentSnapshotGeneration: Ce,
            fullContentSnapshotGeneration: we,
            readonlyComments: h,
            submittingCommentKeys: _,
            onCommentsChange: y,
            commentAuthorLabel: b,
            commentAuthorAvatarUrl: S,
            isLoading: it,
            onReadonlyCommentReply: te,
            renderReadonlyComment: C,
            renderReadonlyCommentActions: w,
            renderReadonlyCommentBody: T,
            onLoadRetry: ke,
            onHunkAction: k,
            onPostRender: ae,
            onOpenInEditor: cn,
            onRequestChanges: j,
            openFilePath: X ?? null,
            open: E,
            requestChangesRef: wt,
            richPreviewEnabled: Ke,
            showHunkActions: U,
            showLoadError: ot,
            useReviewLineInfoSeparators: gt,
            viewType: qe(o, i, bt),
            wrapLines: _t,
            metrics: z,
          })
        : null),
      (t[142] = ze),
      (t[143] = bt),
      (t[144] = Yt),
      (t[145] = S),
      (t[146] = b),
      (t[147] = d),
      (t[148] = I),
      (t[149] = A),
      (t[150] = i),
      (t[151] = r),
      (t[152] = Le),
      (t[153] = rt),
      (t[154] = R),
      (t[155] = nt),
      (t[156] = we),
      (t[157] = Ce),
      (t[158] = un),
      (t[159] = fn),
      (t[160] = cn),
      (t[161] = L),
      (t[162] = We),
      (t[163] = c),
      (t[164] = it),
      (t[165] = et),
      (t[166] = z),
      (t[167] = p),
      (t[168] = y),
      (t[169] = k),
      (t[170] = ke),
      (t[171] = ae),
      (t[172] = te),
      (t[173] = j),
      (t[174] = E),
      (t[175] = X),
      (t[176] = h),
      (t[177] = C),
      (t[178] = w),
      (t[179] = T),
      (t[180] = Se),
      (t[181] = Ke),
      (t[182] = U),
      (t[183] = ot),
      (t[184] = tt),
      (t[185] = _),
      (t[186] = gt),
      (t[187] = o),
      (t[188] = Ge),
      (t[189] = _t),
      (t[190] = Wn))
    : (Wn = t[190]);
  let Gn;
  t[191] !== ht || t[192] !== Wn
    ? ((Gn = (0, $.jsx)(ht, { children: Wn })), (t[191] = ht), (t[192] = Wn), (t[193] = Gn))
    : (Gn = t[193]);
  let Kn;
  t[194] !== On || t[195] !== jn || t[196] !== Fn || t[197] !== Bn || t[198] !== Gn
    ? ((Kn = (0, $.jsxs)(`div`, {
        ref: On,
        onContextMenu: wn,
        className: jn,
        style: Fn,
        children: [Bn, Gn],
      })),
      (t[194] = On),
      (t[195] = jn),
      (t[196] = Fn),
      (t[197] = Bn),
      (t[198] = Gn),
      (t[199] = Kn))
    : (Kn = t[199]);
  let Jn;
  return (
    t[200] !== Yt ||
    t[201] !== Qe ||
    t[202] !== on ||
    t[203] !== Zt ||
    t[204] !== $t ||
    t[205] !== tn ||
    t[206] !== Jt ||
    t[207] !== Kt ||
    t[208] !== Tn ||
    t[209] !== Dn ||
    t[210] !== Kn
      ? ((Jn = (0, $.jsx)(ct, {
          canOpenFile: Yt,
          githubFileLookup: Tn,
          loadOpenTargets: Jt,
          preferredTargetOverride: Kt,
          onRequestChanges: yn,
          onCopyPath: Zt,
          onCopyRelativePath: $t,
          onToggleWrap: tn,
          getOpenInNewTab: Dn,
          handleOpenInTarget: on,
          disableNative: Qe,
          children: Kn,
        })),
        (t[200] = Yt),
        (t[201] = Qe),
        (t[202] = on),
        (t[203] = Zt),
        (t[204] = $t),
        (t[205] = tn),
        (t[206] = Jt),
        (t[207] = Kt),
        (t[208] = Tn),
        (t[209] = Dn),
        (t[210] = Kn),
        (t[211] = Jn))
      : (Jn = t[211]),
    Jn
  );
}
function bn(e) {
  return !e;
}
function xn() {}
function Sn(e) {
  let n = (0, Hn.c)(115),
    {
      diff: r,
      displayFileName: i,
      displayPath: a,
      displayPathParts: s,
      fileActionsDisabled: c,
      headerEndContent: l,
      onHeaderEndContentClick: u,
      headerOpenAction: d,
      headerVariant: f,
      hunkActionsVariant: p,
      isLoading: m,
      onCopyPath: h,
      onFileAction: g,
      onFileNameClick: _,
      onOpenInEditor: v,
      onFileToggle: y,
      open: b,
      showDiffStats: x,
      showOpenInButton: S,
      showFileActions: ee,
      stickyHeader: te,
      toggleAriaLabel: C,
      workspaceRelativePath: w,
    } = e,
    T = f === `full-review`,
    E;
  n[0] === b ? (E = n[1]) : ((E = U.reviewFileToggle(b)), (n[0] = b), (n[1] = E));
  let ne = T ? `text-tertiary hover:text-default` : `text-default`,
    D;
  n[2] === ne ? (D = n[3]) : ((D = O(`bg-transparent`, ne)), (n[2] = ne), (n[3] = D));
  let re = T ? `ghostMuted` : `ghost`,
    ie = T ? `iconMd` : `toolbar`,
    k;
  n[4] === y
    ? (k = n[5])
    : ((k = (e) => {
        (e.stopPropagation(), y(e));
      }),
      (n[4] = y),
      (n[5] = k));
  let ae = b ? `rotate-90` : `rotate-0`,
    oe;
  n[6] === ae
    ? (oe = n[7])
    : ((oe = O(`ease-basic icon-2xs transition-transform duration-basic motion-reduce:transition-none`, ae)),
      (n[6] = ae),
      (n[7] = oe));
  let se;
  n[8] === oe ? (se = n[9]) : ((se = (0, $.jsx)(de, { className: oe })), (n[8] = oe), (n[9] = se));
  let A;
  n[10] !== E || n[11] !== D || n[12] !== re || n[13] !== ie || n[14] !== k || n[15] !== se || n[16] !== C
    ? ((A = (0, $.jsx)(t, {
        ...E,
        className: D,
        color: re,
        size: ie,
        uniform: !0,
        "aria-label": C,
        onClick: k,
        children: se,
      })),
      (n[10] = E),
      (n[11] = D),
      (n[12] = re),
      (n[13] = ie),
      (n[14] = k),
      (n[15] = se),
      (n[16] = C),
      (n[17] = A))
    : (A = n[17]);
  let le = A,
    ue;
  n[18] !== r || n[19] !== a || n[20] !== l || n[21] !== x || n[22] !== T
    ? ((ue = x
        ? (0, $.jsx)(
            `span`,
            {
              className: O(`flex shrink-0 items-center`, T ? `ms-1 me-1` : l != null && `me-2`),
              children: (0, $.jsx)(Se, { linesAdded: r.additions, linesRemoved: r.deletions }),
            },
            a,
          )
        : null),
      (n[18] = r),
      (n[19] = a),
      (n[20] = l),
      (n[21] = x),
      (n[22] = T),
      (n[23] = ue))
    : (ue = n[23]);
  let fe = ue,
    pe = te && `z-10 sticky top-[var(--pane-overlay-header-height,0px)]`,
    j;
  n[24] === pe
    ? (j = n[25])
    : ((j = O(`cursor-interaction select-none focus-visible:outline-none`, pe)), (n[24] = pe), (n[25] = j));
  let me;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = { backgroundColor: `var(--codex-diffs-surface)` }), (n[26] = me))
    : (me = n[26]);
  let M;
  n[27] === T
    ? (M = n[28])
    : ((M = T ? void 0 : { backgroundColor: `var(--codex-diffs-header-surface)` }), (n[27] = T), (n[28] = M));
  let he;
  n[29] !== m || n[30] !== T
    ? ((he = O(
        `group/diff-header text-size-chat @container/diff-header relative flex items-center gap-2`,
        T
          ? O(`border-b border-default py-2 ps-3 pe-2`, m ? `mb-2` : `mb-px`)
          : `px-[var(--codex-diffs-header-padding-x,1rem)] py-[var(--codex-diffs-header-padding-y,0.25rem)] hover:bg-background-primary-ghost-hover/30`,
      )),
      (n[29] = m),
      (n[30] = T),
      (n[31] = he))
    : (he = n[31]);
  let ge = T ? `gap-0.5` : `gap-2`,
    N;
  n[32] === ge
    ? (N = n[33])
    : ((N = O(`text-size-chat flex min-w-0 flex-1 items-center text-default`, ge)),
      (n[32] = ge),
      (n[33] = N));
  let P = T && `gap-2 ps-1`,
    F;
  n[34] === P ? (F = n[35]) : ((F = O(`flex min-w-0 items-center`, P)), (n[34] = P), (n[35] = F));
  let I;
  n[36] !== a || n[37] !== T
    ? ((I = T ? (0, $.jsx)(Mn, { path: a }) : null), (n[36] = a), (n[37] = T), (n[38] = I))
    : (I = n[38]);
  let L;
  n[39] === a
    ? (L = n[40])
    : ((L = (0, $.jsx)(`span`, { className: `font-mono`, children: a })), (n[39] = a), (n[40] = L));
  let _e;
  n[41] !== b || n[42] !== T
    ? ((_e = T ? U.reviewFileToggle(b) : void 0), (n[41] = b), (n[42] = T), (n[43] = _e))
    : (_e = n[43]);
  let ve = !T && `pe-[6px]`,
    R;
  n[44] === ve
    ? (R = n[45])
    : ((R = O(`min-w-0 cursor-interaction truncate text-start text-default select-text [direction:rtl]`, ve)),
      (n[44] = ve),
      (n[45] = R));
  let ye = !w || w === `/dev/null`,
    be = T ? b : void 0,
    xe;
  n[46] === i
    ? (xe = n[47])
    : ((xe = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-default [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:hidden`,
        children: i,
      })),
      (n[46] = i),
      (n[47] = xe));
  let Ce;
  n[48] !== a || n[49] !== s || n[50] !== T
    ? ((Ce = T
        ? (0, $.jsx)(`span`, {
            className: `hidden min-w-0 truncate text-tertiary [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:inline`,
            children: s.map(Cn),
          })
        : (0, $.jsx)(`span`, {
            className: `hidden min-w-0 truncate [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:inline`,
            children: a,
          })),
      (n[48] = a),
      (n[49] = s),
      (n[50] = T),
      (n[51] = Ce))
    : (Ce = n[51]);
  let we;
  n[52] !== _ || n[53] !== _e || n[54] !== R || n[55] !== ye || n[56] !== be || n[57] !== xe || n[58] !== Ce
    ? ((we = (0, $.jsxs)(`button`, {
        ..._e,
        type: `button`,
        className: R,
        disabled: ye,
        onClick: _,
        "aria-expanded": be,
        children: [xe, Ce],
      })),
      (n[52] = _),
      (n[53] = _e),
      (n[54] = R),
      (n[55] = ye),
      (n[56] = be),
      (n[57] = xe),
      (n[58] = Ce),
      (n[59] = we))
    : (we = n[59]);
  let z;
  n[60] !== L || n[61] !== we || n[62] !== T
    ? ((z = (0, $.jsx)(ce, {
        disabled: T,
        tooltipContent: L,
        delayDuration: 200,
        openWhen: `trigger-overflows`,
        children: we,
      })),
      (n[60] = L),
      (n[61] = we),
      (n[62] = T),
      (n[63] = z))
    : (z = n[63]);
  let Te;
  n[64] !== b || n[65] !== T
    ? ((Te = T
        ? (0, $.jsx)(o, {
            className: O(`text-tertiary opacity-0 group-hover/diff-header:opacity-100`, b && `rotate-90`),
          })
        : null),
      (n[64] = b),
      (n[65] = T),
      (n[66] = Te))
    : (Te = n[66]);
  let Ee;
  n[67] !== F || n[68] !== I || n[69] !== z || n[70] !== Te
    ? ((Ee = (0, $.jsxs)(`div`, { className: F, children: [I, z, Te] })),
      (n[67] = F),
      (n[68] = I),
      (n[69] = z),
      (n[70] = Te),
      (n[71] = Ee))
    : (Ee = n[71]);
  let De;
  n[72] !== N || n[73] !== Ee
    ? ((De = (0, $.jsx)(`div`, { className: N, children: Ee })), (n[72] = N), (n[73] = Ee), (n[74] = De))
    : (De = n[74]);
  let Oe;
  n[75] !== c || n[76] !== p || n[77] !== g || n[78] !== ee || n[79] !== T
    ? ((Oe = ee
        ? (0, $.jsx)(In, { disabled: c, onFileAction: g, useMutedButtonStyle: T, variant: p })
        : null),
      (n[75] = c),
      (n[76] = p),
      (n[77] = g),
      (n[78] = ee),
      (n[79] = T),
      (n[80] = Oe))
    : (Oe = n[80]);
  let ke;
  n[81] !== l || n[82] !== u || n[83] !== T
    ? ((ke =
        l == null
          ? null
          : (0, $.jsx)(`span`, {
              className: T ? `flex items-center` : `contents`,
              role: `presentation`,
              onClick: u,
              children: l,
            })),
      (n[81] = l),
      (n[82] = u),
      (n[83] = T),
      (n[84] = ke))
    : (ke = n[84]);
  let Ae;
  n[85] !== d || n[86] !== v || n[87] !== S || n[88] !== T
    ? ((Ae =
        S && (!T || d != null)
          ? (0, $.jsx)(wn, { headerOpenAction: d, onOpenInEditor: v, useMutedButtonStyle: T })
          : null),
      (n[85] = d),
      (n[86] = v),
      (n[87] = S),
      (n[88] = T),
      (n[89] = Ae))
    : (Ae = n[89]);
  let B;
  n[90] !== h || n[91] !== y || n[92] !== v || n[93] !== b || n[94] !== S || n[95] !== T
    ? ((B = T ? (0, $.jsx)(tn, { onCopyPath: h, onOpen: S ? v : void 0, onToggle: y, open: b }) : null),
      (n[90] = h),
      (n[91] = y),
      (n[92] = v),
      (n[93] = b),
      (n[94] = S),
      (n[95] = T),
      (n[96] = B))
    : (B = n[96]);
  let je = T ? null : le,
    Me;
  n[97] !== fe || n[98] !== Oe || n[99] !== ke || n[100] !== Ae || n[101] !== B || n[102] !== je
    ? ((Me = (0, $.jsxs)(`div`, {
        className: `ms-auto flex shrink-0 items-center gap-1`,
        children: [fe, Oe, ke, Ae, B, je],
      })),
      (n[97] = fe),
      (n[98] = Oe),
      (n[99] = ke),
      (n[100] = Ae),
      (n[101] = B),
      (n[102] = je),
      (n[103] = Me))
    : (Me = n[103]);
  let V;
  n[104] !== he || n[105] !== De || n[106] !== Me
    ? ((V = (0, $.jsxs)(`div`, { className: he, children: [De, Me] })),
      (n[104] = he),
      (n[105] = De),
      (n[106] = Me),
      (n[107] = V))
    : (V = n[107]);
  let H;
  n[108] !== M || n[109] !== V
    ? ((H = (0, $.jsx)(`div`, { style: M, children: V })), (n[108] = M), (n[109] = V), (n[110] = H))
    : (H = n[110]);
  let Ne;
  return (
    n[111] !== y || n[112] !== j || n[113] !== H
      ? ((Ne = (0, $.jsx)(`div`, { onClick: y, role: `presentation`, className: j, style: me, children: H })),
        (n[111] = y),
        (n[112] = j),
        (n[113] = H),
        (n[114] = Ne))
      : (Ne = n[114]),
    Ne
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
  let r = (0, Hn.c)(30),
    { headerOpenAction: i, onOpenInEditor: a, useMutedButtonStyle: o } = e,
    s = ee(),
    c;
  r[0] !== i?.ariaLabel || r[1] !== s
    ? ((c =
        i?.ariaLabel ??
        s.formatMessage({
          id: `codex.diff.fileHeader.openInIcon`,
          defaultMessage: `Open file`,
          description: `Accessible label for the icon button in the diff file header that opens the current file`,
        })),
      (r[0] = i?.ariaLabel),
      (r[1] = s),
      (r[2] = c))
    : (c = r[2]);
  let l = c,
    u;
  r[3] === s
    ? (u = r[4])
    : ((u = s.formatMessage({
        id: `codex.diff.fileHeader.openIn.tooltip`,
        defaultMessage: `Open in editor`,
        description: `Tooltip for the icon button in the diff file header that opens the current file`,
      })),
      (r[3] = s),
      (r[4] = u));
  let d = u,
    f = i == null && `opacity-0 transition-opacity duration-200 group-hover/file-diff:opacity-100`,
    p;
  r[5] === f ? (p = r[6]) : ((p = O(`flex shrink-0 items-center`, f)), (r[5] = f), (r[6] = p));
  let m = i?.tooltip ?? d,
    h = o ? `ghostTertiary` : `ghost`,
    g = o ? `iconCircleSm` : `toolbar`,
    _;
  r[7] !== i?.onClick || r[8] !== a
    ? ((_ = () => (i?.onClick ?? a)()), (r[7] = i?.onClick), (r[8] = a), (r[9] = _))
    : (_ = r[9]);
  let v;
  r[10] === o
    ? (v = r[11])
    : ((v = o ? (0, $.jsx)(n, {}) : (0, $.jsx)(be, { className: `icon-2xs` })), (r[10] = o), (r[11] = v));
  let y;
  r[12] !== l || r[13] !== h || r[14] !== g || r[15] !== _ || r[16] !== v
    ? ((y = (0, $.jsx)(t, { color: h, size: g, uniform: !0, "aria-label": l, onClick: _, children: v })),
      (r[12] = l),
      (r[13] = h),
      (r[14] = g),
      (r[15] = _),
      (r[16] = v),
      (r[17] = y))
    : (y = r[17]);
  let b;
  r[18] !== y || r[19] !== m
    ? ((b = (0, $.jsx)(ce, { tooltipContent: m, children: y })), (r[18] = y), (r[19] = m), (r[20] = b))
    : (b = r[20]);
  let x;
  r[21] !== i || r[22] !== a || r[23] !== d || r[24] !== o
    ? ((x =
        i != null && !o
          ? (0, $.jsx)(ce, {
              tooltipContent: d,
              children: (0, $.jsx)(t, {
                color: `ghost`,
                size: `toolbar`,
                uniform: !0,
                "aria-label": d,
                onClick: a,
                children: (0, $.jsx)(ue, {}),
              }),
            })
          : null),
      (r[21] = i),
      (r[22] = a),
      (r[23] = d),
      (r[24] = o),
      (r[25] = x))
    : (x = r[25]);
  let S;
  return (
    r[26] !== b || r[27] !== x || r[28] !== p
      ? ((S = (0, $.jsxs)(`div`, { className: p, role: `presentation`, onClick: Tn, children: [b, x] })),
        (r[26] = b),
        (r[27] = x),
        (r[28] = p),
        (r[29] = S))
      : (S = r[29]),
    S
  );
}
function Tn(e) {
  return e.stopPropagation();
}
function En(e) {
  let t = (0, Hn.c)(153),
    {
      canOpenFile: n,
      comments: r,
      modelComments: i,
      conversationId: a,
      cwd: o,
      workspaceRoot: s,
      diff: l,
      diffViewClassName: u,
      enableComments: d,
      allowCommentDrafts: p,
      handleLineClick: m,
      handleLineNumberClick: h,
      hostConfig: g,
      hoveredLineRef: v,
      hunkActionsVariant: y,
      hunkSeparators: b,
      loadFullContent: x,
      fullContentLoader: S,
      showPartialWhileLoadingFullContent: ee,
      fullContentNextFallbackToDisk: C,
      fullContentIgnoreWhitespace: w,
      reviewPath: E,
      getFullContentSnapshotGeneration: ne,
      fullContentSnapshotGeneration: D,
      metrics: O,
      readonlyComments: re,
      submittingCommentKeys: ie,
      onCommentsChange: ae,
      commentAuthorLabel: oe,
      commentAuthorAvatarUrl: se,
      isLoading: A,
      onReadonlyCommentReply: ce,
      renderReadonlyComment: le,
      renderReadonlyCommentActions: ue,
      renderReadonlyCommentBody: de,
      onLoadRetry: fe,
      onHunkAction: pe,
      onPostRender: j,
      onOpenInEditor: me,
      onRequestChanges: M,
      openFilePath: he,
      open: ge,
      requestChangesRef: N,
      richPreviewEnabled: P,
      showHunkActions: F,
      showLoadError: I,
      useReviewLineInfoSeparators: L,
      viewType: _e,
      wrapLines: R,
    } = e,
    be = f(c),
    xe = Ze(),
    Se = et(),
    we = te(ye),
    z = te(_t),
    [Te, Ee] = (0, Un.useState)(null),
    De;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = () => {
        Ee(null);
      }),
      (t[0] = De))
    : (De = t[0]);
  let Oe = De,
    ke = He(k),
    Ae = (0, Un.useRef)(null),
    B = g ?? ke,
    je = l.additions + l.deletions,
    Me;
  t[1] === l ? (Me = t[2]) : ((Me = ve(l)), (t[1] = l), (t[2] = Me));
  let V = Me,
    H = je > Wn,
    Ne = H || !we ? `none` : `word-alt`,
    Pe = l.additions === 0 && l.deletions === 0,
    Fe = l.metadata.type === `new`,
    Ie = l.metadata.type === `deleted`,
    Le = Pe && l.metadata.type === `rename-pure`,
    Re = V,
    ze = o ?? void 0,
    Be;
  t[3] !== l ||
  t[4] !== w ||
  t[5] !== S ||
  t[6] !== C ||
  t[7] !== D ||
  t[8] !== z ||
  t[9] !== B ||
  t[10] !== ze
    ? ((Be = Bt({
        diff: l,
        fullContentLoader: S,
        hostConfig: B,
        ignoreWhitespace: w,
        loadFullFilesEnabled: z,
        nextFallbackToDisk: C,
        snapshotGeneration: D,
        workspaceRoot: ze,
      })),
      (t[3] = l),
      (t[4] = w),
      (t[5] = S),
      (t[6] = C),
      (t[7] = D),
      (t[8] = z),
      (t[9] = B),
      (t[10] = ze),
      (t[11] = Be))
    : (Be = t[11]);
  let U = _($t, Be),
    Ve = te(U.fullDiffMetadata$),
    Ue = te(U.fullContentLoadFailed$),
    We = te(U.fullContentUnavailable$),
    Ge =
      x &&
      z &&
      (o != null || S != null) &&
      ge &&
      l.metadata.isPartial &&
      !l.isBinary &&
      !l.isGitlink &&
      !Fe &&
      !Ie &&
      !Pe &&
      !Re &&
      Ve == null &&
      !Ue &&
      !We,
    Ke;
  t[12] !== o ||
  t[13] !== l ||
  t[14] !== H ||
  t[15] !== U.key ||
  t[16] !== w ||
  t[17] !== S ||
  t[18] !== C ||
  t[19] !== D ||
  t[20] !== ne ||
  t[21] !== O ||
  t[22] !== B ||
  t[23] !== be ||
  t[24] !== Se
    ? ((Ke = () => {
        Rt(be, {
          diff: l,
          fullContentLoader: S,
          getSnapshotGeneration: ne,
          hostConfig: B,
          ignoreWhitespace: w,
          key: U.key,
          nextFallbackToDisk: C,
          primeDiffHighlightCache:
            Se == null || H ? void 0 : (e) => Se.primeDiffHighlightCache({ ...e, cacheKey: kt(e, O) }),
          snapshotGeneration: ne?.() ?? D,
          workspaceRoot: o ?? void 0,
        });
      }),
      (t[12] = o),
      (t[13] = l),
      (t[14] = H),
      (t[15] = U.key),
      (t[16] = w),
      (t[17] = S),
      (t[18] = C),
      (t[19] = D),
      (t[20] = ne),
      (t[21] = O),
      (t[22] = B),
      (t[23] = be),
      (t[24] = Se),
      (t[25] = Ke))
    : (Ke = t[25]);
  let qe = Ke,
    Je = (0, Un.useEffectEvent)(qe),
    Ye;
  t[26] !== Je || t[27] !== Ge
    ? ((Ye = () => {
        if (!Ge) return;
        let e = Ae.current;
        if (e == null) return;
        let t = new IntersectionObserver((e) => {
          e.some(On) && (t.disconnect(), Je());
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (t[26] = Je),
      (t[27] = Ge),
      (t[28] = Ye))
    : (Ye = t[28]);
  let Xe;
  (t[29] !== o ||
  t[30] !== l ||
  t[31] !== H ||
  t[32] !== U.key ||
  t[33] !== w ||
  t[34] !== C ||
  t[35] !== D ||
  t[36] !== ne ||
  t[37] !== O ||
  t[38] !== B ||
  t[39] !== be ||
  t[40] !== Ge ||
  t[41] !== Se
    ? ((Xe = [o, H, l, w, C, D, ne, U.key, O, B, be, Ge, Se]),
      (t[29] = o),
      (t[30] = l),
      (t[31] = H),
      (t[32] = U.key),
      (t[33] = w),
      (t[34] = C),
      (t[35] = D),
      (t[36] = ne),
      (t[37] = O),
      (t[38] = B),
      (t[39] = be),
      (t[40] = Ge),
      (t[41] = Se),
      (t[42] = Xe))
    : (Xe = t[42]),
    (0, Un.useEffect)(Ye, Xe));
  let W = Ve ?? l.metadata,
    Qe;
  t[43] !== V || t[44] !== Ve
    ? ((Qe = Ve == null ? V : Ce(Ve)), (t[43] = V), (t[44] = Ve), (t[45] = Qe))
    : (Qe = t[45]);
  let $e = Qe,
    tt;
  t[46] !== H || t[47] !== W
    ? ((tt = H ? { ...W, lang: `text` } : W), (t[46] = H), (t[47] = W), (t[48] = tt))
    : (tt = t[48]);
  let nt = tt,
    at = y === `staged` ? null : he,
    ot;
  t[49] !== o || t[50] !== l || t[51] !== y || t[52] !== at || t[53] !== B.id
    ? ((ot = Rn({ diff: l, openFilePath: at, cwd: o, hostId: B.id, hunkActionsVariant: y })),
      (t[49] = o),
      (t[50] = l),
      (t[51] = y),
      (t[52] = at),
      (t[53] = B.id),
      (t[54] = ot))
    : (ot = t[54]);
  let st = ot,
    ct;
  t[55] !== p ||
  t[56] !== se ||
  t[57] !== oe ||
  t[58] !== r ||
  t[59] !== a ||
  t[60] !== o ||
  t[61] !== l.metadata.name ||
  t[62] !== d ||
  t[63] !== i ||
  t[64] !== ae ||
  t[65] !== ce ||
  t[66] !== re ||
  t[67] !== le ||
  t[68] !== ue ||
  t[69] !== de ||
  t[70] !== ie ||
  t[71] !== s
    ? ((ct = {
        cwd: o,
        diffPath: l.metadata.name,
        workspaceRoot: s,
        enableComments: d,
        allowCommentDrafts: p,
        comments: r,
        modelComments: i,
        readonlyComments: re,
        submittingCommentKeys: ie,
        onCommentsChange: ae,
        commentAuthorLabel: oe,
        commentAuthorAvatarUrl: se,
        onReadonlyCommentReply: ce,
        renderReadonlyComment: le,
        renderReadonlyCommentActions: ue,
        renderReadonlyCommentBody: de,
        onSelectionClear: Oe,
        conversationId: a,
      }),
      (t[55] = p),
      (t[56] = se),
      (t[57] = oe),
      (t[58] = r),
      (t[59] = a),
      (t[60] = o),
      (t[61] = l.metadata.name),
      (t[62] = d),
      (t[63] = i),
      (t[64] = ae),
      (t[65] = ce),
      (t[66] = re),
      (t[67] = le),
      (t[68] = ue),
      (t[69] = de),
      (t[70] = ie),
      (t[71] = s),
      (t[72] = ct))
    : (ct = t[72]);
  let { annotations: lt, annotationKeys: ut, addDraftComment: dt, renderCommentAnnotation: ft } = it(ct),
    pt;
  bb0: {
    if (!F || Fe || Ie) {
      let e;
      (t[73] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[73] = e)) : (e = t[73]), (pt = e));
      break bb0;
    }
    let e;
    (t[74] !== l.metadata.hunks || t[75] !== l.metadata.name
      ? ((e = []),
        l.metadata.hunks.forEach((t, n) => {
          let r = fn(t);
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
      (pt = e));
  }
  let mt = pt,
    G;
  t[77] !== lt || t[78] !== d || t[79] !== mt || t[80] !== F
    ? ((G = []),
      F && G.push(...mt),
      d && G.push(...lt),
      (t[77] = lt),
      (t[78] = d),
      (t[79] = mt),
      (t[80] = F),
      (t[81] = G))
    : (G = t[81]);
  let ht = G,
    gt;
  t[82] === v
    ? (gt = t[83])
    : ((gt = (e) => {
        let { annotationSide: t, lineNumber: n } = e;
        v.current = { lineNumber: n, side: t };
      }),
      (t[82] = v),
      (t[83] = gt));
  let vt = gt,
    yt;
  t[84] === v
    ? (yt = t[85])
    : ((yt = () => {
        v.current = null;
      }),
      (t[84] = v),
      (t[85] = yt));
  let bt = yt,
    xt;
  t[86] !== dt || t[87] !== p || t[88] !== ut || t[89] !== W || t[90] !== v || t[91] !== M
    ? ((xt = () => {
        if (!p) return;
        let e = v.current;
        if (!e) return;
        let t = rt(e.side, e.lineNumber);
        ut.has(t) ||
          (dt({
            side: e.side,
            lineNumber: e.lineNumber,
            localDiffHunk: on(W, { side: e.side, start: e.lineNumber, end: e.lineNumber }),
          }),
          M?.());
      }),
      (t[86] = dt),
      (t[87] = p),
      (t[88] = ut),
      (t[89] = W),
      (t[90] = v),
      (t[91] = M),
      (t[92] = xt))
    : (xt = t[92]);
  let St = xt,
    Ct,
    wt;
  (t[93] !== St || t[94] !== N
    ? ((Ct = () => (
        (N.current = St),
        () => {
          N.current === St && (N.current = Dn);
        }
      )),
      (wt = [St, N]),
      (t[93] = St),
      (t[94] = N),
      (t[95] = Ct),
      (t[96] = wt))
    : ((Ct = t[95]), (wt = t[96])),
    (0, Un.useEffect)(Ct, wt));
  let Tt;
  t[97] !== y || t[98] !== pe || t[99] !== ft
    ? ((Tt = (e) => {
        let t = e.metadata;
        return t
          ? t.kind === `hunk-actions`
            ? (0, $.jsx)(Ln, { path: t.path, hunkIndex: t.hunkIndex, onHunkAction: pe, variant: y })
            : ft(e)
          : null;
      }),
      (t[97] = y),
      (t[98] = pe),
      (t[99] = ft),
      (t[100] = Tt))
    : (Tt = t[100]);
  let Et = Tt,
    Dt;
  t[101] !== dt || t[102] !== p || t[103] !== ut || t[104] !== W
    ? ((Dt = (e) => {
        if (!p) return;
        let t = e,
          n = t.endSide ?? t.side;
        if (n == null) return;
        window.requestAnimationFrame(() => {
          Ee({ ...t });
        });
        let r = t.endSide != null && t.endSide !== t.side,
          i = r ? t.end : Math.max(t.start, t.end),
          a = rt(n, i);
        ut.has(a) ||
          dt({
            side: n,
            lineNumber: i,
            ...(t.start !== t.end || r ? { startLine: r ? t.start : Math.min(t.start, t.end) } : {}),
            ...(r && t.side != null ? { startSide: t.side } : {}),
            localDiffHunk: on(W, t),
          });
      }),
      (t[101] = dt),
      (t[102] = p),
      (t[103] = ut),
      (t[104] = W),
      (t[105] = Dt))
    : (Dt = t[105]);
  let Ot = Dt,
    At = A || (Ge && !ee),
    K;
  t[106] !== p ||
  t[107] !== ht ||
  t[108] !== n ||
  t[109] !== l ||
  t[110] !== u ||
  t[111] !== d ||
  t[112] !== nt ||
  t[113] !== Ue ||
  t[114] !== qe ||
  t[115] !== Ot ||
  t[116] !== m ||
  t[117] !== vt ||
  t[118] !== bt ||
  t[119] !== h ||
  t[120] !== Pe ||
  t[121] !== b ||
  t[122] !== st ||
  t[123] !== Ie ||
  t[124] !== Le ||
  t[125] !== Ne ||
  t[126] !== at ||
  t[127] !== O ||
  t[128] !== fe ||
  t[129] !== me ||
  t[130] !== j ||
  t[131] !== Et ||
  t[132] !== $e ||
  t[133] !== E ||
  t[134] !== P ||
  t[135] !== Te ||
  t[136] !== F ||
  t[137] !== I ||
  t[138] !== At ||
  t[139] !== L ||
  t[140] !== _e ||
  t[141] !== xe ||
  t[142] !== R
    ? ((K = At
        ? (0, $.jsx)(An, { diff: l, lines: jn(l) })
        : I
          ? (0, $.jsx)(Pn, { onRetry: fe })
          : $e
            ? (0, $.jsx)(kn, { canOpenFile: n, onOpenInEditor: me })
            : (0, $.jsxs)($.Fragment, {
                children: [
                  Ue ? (0, $.jsx)(Fn, { onRetry: qe }) : null,
                  (0, $.jsx)(jt, {
                    diffViewProps: {
                      diffViewClassName: u,
                      disableScrollAnchor: xe != null,
                      fileDiff: nt,
                      metrics: O,
                      viewType: _e,
                      wrapLines: R,
                      hunkSeparators: b,
                      reviewPath: E,
                      lineDiffType: Ne,
                      expansionLineCount: 20,
                      enableLineSelection: p,
                      onLineEnter: vt,
                      onLineLeave: bt,
                      onLineClick: m,
                      onLineNumberClick: h,
                      onLineSelected: Ee,
                      onLineSelectionChange: Ee,
                      selectedLines: Te,
                      lineAnnotations: ht,
                      renderAnnotation: F || d ? Et : void 0,
                      onGutterUtilityClick: p ? Ot : void 0,
                      onPostRender: j,
                      useReviewLineInfoSeparators: L,
                    },
                    filePath: l.metadata.name,
                    previewPath: at,
                    imagePreview: st,
                    hasNoChanges: Pe,
                    isRenameWithoutChanges: Le,
                    isBinary: l.isBinary,
                    isDeletion: Ie,
                    richPreviewEnabled: P,
                  }),
                ],
              })),
      (t[106] = p),
      (t[107] = ht),
      (t[108] = n),
      (t[109] = l),
      (t[110] = u),
      (t[111] = d),
      (t[112] = nt),
      (t[113] = Ue),
      (t[114] = qe),
      (t[115] = Ot),
      (t[116] = m),
      (t[117] = vt),
      (t[118] = bt),
      (t[119] = h),
      (t[120] = Pe),
      (t[121] = b),
      (t[122] = st),
      (t[123] = Ie),
      (t[124] = Le),
      (t[125] = Ne),
      (t[126] = at),
      (t[127] = O),
      (t[128] = fe),
      (t[129] = me),
      (t[130] = j),
      (t[131] = Et),
      (t[132] = $e),
      (t[133] = E),
      (t[134] = P),
      (t[135] = Te),
      (t[136] = F),
      (t[137] = I),
      (t[138] = At),
      (t[139] = L),
      (t[140] = _e),
      (t[141] = xe),
      (t[142] = R),
      (t[143] = K))
    : (K = t[143]);
  let q = K;
  if (xe != null) {
    let e;
    return (
      t[144] !== q || t[145] !== bt
        ? ((e = (0, $.jsx)(`div`, {
            ref: Ae,
            className: `relative overflow-hidden`,
            onMouseLeave: bt,
            children: q,
          })),
          (t[144] = q),
          (t[145] = bt),
          (t[146] = e))
        : (e = t[146]),
      e
    );
  }
  let Mt, Nt, J;
  t[147] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = { height: `auto`, opacity: 1 }),
      (Nt = { height: 0, opacity: 0 }),
      (J = { duration: 0, ease: `easeInOut` }),
      (t[147] = Mt),
      (t[148] = Nt),
      (t[149] = J))
    : ((Mt = t[147]), (Nt = t[148]), (J = t[149]));
  let Y;
  return (
    t[150] !== q || t[151] !== bt
      ? ((Y = (0, $.jsx)(T.div, {
          ref: Ae,
          initial: !1,
          animate: Mt,
          exit: Nt,
          transition: J,
          className: `relative overflow-hidden`,
          onMouseLeave: bt,
          children: q,
        })),
        (t[150] = q),
        (t[151] = bt),
        (t[152] = Y))
      : (Y = t[152]),
    Y
  );
}
function Dn() {}
function On(e) {
  return e.isIntersecting;
}
function kn(e) {
  let n = (0, Hn.c)(6),
    { canOpenFile: r, onOpenInEditor: i } = e,
    a;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: (0, $.jsx)(d, {
          id: `codex.diff.openInEditorPrompt.singleLine`,
          defaultMessage: `This file is too large to display here.`,
          description: `Single-line prompt shown in the diff view when a file is too large to render in-panel`,
        }),
      })),
      (n[0] = a))
    : (a = n[0]);
  let o;
  n[1] !== r || n[2] !== i
    ? ((o = r
        ? (0, $.jsx)(t, {
            className: `shrink-0 px-1.5`,
            color: `ghost`,
            size: `toolbar`,
            onClick: i,
            children: (0, $.jsx)(d, {
              id: `codex.diff.openInEditorPrompt.openButton`,
              defaultMessage: `Open in editor`,
              description: `Button label shown in the large-diff prompt to open the file in an editor`,
            }),
          })
        : null),
      (n[1] = r),
      (n[2] = i),
      (n[3] = o))
    : (o = n[3]);
  let s;
  return (
    n[4] === o
      ? (s = n[5])
      : ((s = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-2 bg-surface-tertiary px-3 py-2 text-size-chat text-codex-description`,
          children: [a, o],
        })),
        (n[4] = o),
        (n[5] = s)),
    s
  );
}
function An(e) {
  let t = (0, Hn.c)(4),
    { diff: n, lines: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(d, {
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
            children: [i, (0, $.jsx)(ge, { lines: r, minWidth: 42, maxWidth: 96, seed: a })],
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
  let n = (0, Hn.c)(5),
    { onRetry: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(d, {
        id: `codex.review.diff.loadFailedAfterRetrying`,
        defaultMessage: `Diff failed to load after retrying`,
        description: `Placeholder text shown when a review file diff failed to load after automatic retries`,
      })),
      (n[0] = i))
    : (i = n[0]);
  let a;
  n[1] === r
    ? (a = n[2])
    : ((a =
        r == null
          ? null
          : (0, $.jsx)(t, {
              className: `shrink-0 text-default`,
              color: `outline`,
              onClick: r,
              size: `default`,
              children: (0, $.jsx)(d, {
                id: `codex.common.retry`,
                defaultMessage: `Retry`,
                description: `Retry button`,
              }),
            })),
      (n[1] = r),
      (n[2] = a));
  let o;
  return (
    n[3] === a
      ? (o = n[4])
      : ((o = (0, $.jsxs)(Ie, { className: `gap-2 bg-surface py-4`, children: [i, a] })),
        (n[3] = a),
        (n[4] = o)),
    o
  );
}
function Fn(e) {
  let n = (0, Hn.c)(4),
    { onRetry: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, {
        className: `text-secondary`,
        children: (0, $.jsx)(d, {
          id: `codex.review.diff.fullContentLoadFailed`,
          defaultMessage: `Full file content failed to load`,
          description: `Inline notice shown when a partial diff could not be expanded to full file content`,
        }),
      })),
      (n[0] = i))
    : (i = n[0]);
  let a;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(d, {
        id: `codex.common.retry`,
        defaultMessage: `Retry`,
        description: `Retry button`,
      })),
      (n[1] = a))
    : (a = n[1]);
  let o;
  return (
    n[2] === r
      ? (o = n[3])
      : ((o = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-2 bg-surface px-3 py-2 text-sm`,
          children: [
            i,
            (0, $.jsx)(t, {
              className: `shrink-0`,
              color: `outline`,
              onClick: r,
              size: `default`,
              children: a,
            }),
          ],
        })),
        (n[2] = r),
        (n[3] = o)),
    o
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
    d;
  t[0] !== l || t[1] !== u
    ? ((d = O(`flex items-center`, l, u)), (t[0] = l), (t[1] = u), (t[2] = d))
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
    ? ((p = (0, $.jsx)(Ft, { action: `revert`, color: s, disabled: n, size: c, scope: `file`, onClick: f })),
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
    ? ((h = (0, $.jsx)(Ft, { scope: `file`, action: o, color: s, disabled: n, size: c, onClick: m })),
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
function Ln(e) {
  let t = (0, Hn.c)(15),
    { path: n, hunkIndex: r, onHunkAction: i, variant: a } = e,
    o = a === `staged` ? `unstage` : `stage`,
    s;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((s = (0, $.jsx)(Ft, {
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
    ? ((l = (0, $.jsx)(Ft, { scope: `hunk`, action: o, onClick: c })), (t[9] = o), (t[10] = c), (t[11] = l))
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
    ((Hn = fe()),
      W(),
      tt(),
      xe(),
      w(),
      l(),
      re(),
      h(),
      (Un = M()),
      ae(),
      Te(),
      u(),
      le(),
      y(),
      H(),
      Ae(),
      D(),
      Pt(),
      Qe(),
      L(),
      At(),
      Ke(),
      ke(),
      N(),
      oe(),
      I(),
      yt(),
      pe(),
      P(),
      ze(),
      Ye(),
      ie(),
      De(),
      p(),
      E(),
      F(),
      Lt(),
      en(),
      an(),
      bt(),
      dn(),
      nt(),
      Ve(),
      ht(),
      ot(),
      vn(),
      ($ = j()),
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
      (Xn = Oe()));
  }))();
}
export { en as a, mn as i, Zn as n, zt as o, vn as r, yn as t };
//# sourceMappingURL=code-diff-628be5db9fe9.js.map
