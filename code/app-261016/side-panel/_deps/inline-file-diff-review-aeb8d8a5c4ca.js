import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  FBt as i,
  LNt as a,
  OB as o,
  PBt as s,
  Qst as c,
  Rv as l,
  XOt as u,
  Y3 as d,
  Z3 as f,
  ZSt as p,
  iCt as m,
  lX as h,
  nB as g,
  okt as _,
  rB as v,
  tkt as y,
  uX as b,
  zv as x,
} from "./app-shared-2feb3d4c6fcc.js";
import { BVr as S, Iyt as C, Vyt as w, XHr as T } from "./app-initial-ad16eaadf81f.js";
import { n as E, t as D } from "./file-diff-232655eefd3e.js";
function O(e) {
  let t = (0, M.c)(26),
    { canAccept: n, canEdit: r, compact: i, newFile: a, oldFile: o, onAction: s, onViewportReady: c } = e,
    l = n === void 0 || n;
  if (j(o.contents) || j(a.contents)) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(y, {
          id: `inlineFileDiffReview.tooLarge`,
          defaultMessage: `Change is too large to preview`,
          description: `Message shown when an inline file review exceeds the safe rendering limit`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] !== l || t[2] !== r || t[3] !== s
        ? ((n = (0, P.jsxs)(`div`, {
            className: `flex h-full flex-col items-center justify-center gap-3 px-4 text-sm text-codex-description`,
            children: [e, (0, P.jsx)(A, { canAccept: l, canEdit: r, onAction: s })],
          })),
          (t[1] = l),
          (t[2] = r),
          (t[3] = s),
          (t[4] = n))
        : (n = t[4]),
      n
    );
  }
  if (i) {
    let e;
    t[5] === o.contents
      ? (e = t[6])
      : ((e = (0, P.jsx)(`del`, {
          className: `block bg-[var(--color-codex-diff-deleted)] px-3 py-2 break-words whitespace-pre-wrap no-underline`,
          children: o.contents,
        })),
        (t[5] = o.contents),
        (t[6] = e));
    let n;
    t[7] === a.contents
      ? (n = t[8])
      : ((n = (0, P.jsx)(`ins`, {
          className: `block bg-[var(--color-codex-diff-added)] px-3 py-2 break-words whitespace-pre-wrap no-underline`,
          children: a.contents,
        })),
        (t[7] = a.contents),
        (t[8] = n));
    let i;
    t[9] !== e || t[10] !== n
      ? ((i = (0, P.jsxs)(`div`, {
          className: `divide-y divide-border-subtle font-mono [font-size:var(--diffs-font-size)] [line-height:var(--diffs-line-height)]`,
          children: [e, n],
        })),
        (t[9] = e),
        (t[10] = n),
        (t[11] = i))
      : (i = t[11]);
    let c;
    t[12] !== l || t[13] !== r || t[14] !== s
      ? ((c = (0, P.jsx)(`div`, {
          className: `sticky bottom-0 z-10 flex justify-end border-t border-default bg-surface px-3 py-2`,
          children: (0, P.jsx)(A, { canAccept: l, canEdit: r, onAction: s }),
        })),
        (t[12] = l),
        (t[13] = r),
        (t[14] = s),
        (t[15] = c))
      : (c = t[15]);
    let u;
    return (
      t[16] !== i || t[17] !== c
        ? ((u = (0, P.jsxs)(`div`, {
            className: `max-h-80 overflow-y-auto rounded-lg border border-default bg-surface`,
            children: [i, c],
          })),
          (t[16] = i),
          (t[17] = c),
          (t[18] = u))
        : (u = t[18]),
      u
    );
  }
  let u;
  return (
    t[19] !== l || t[20] !== r || t[21] !== a || t[22] !== o || t[23] !== s || t[24] !== c
      ? ((u = (0, P.jsx)(k, {
          canAccept: l,
          canEdit: r,
          newFile: a,
          oldFile: o,
          onAction: s,
          onViewportReady: c,
        })),
        (t[19] = l),
        (t[20] = r),
        (t[21] = a),
        (t[22] = o),
        (t[23] = s),
        (t[24] = c),
        (t[25] = u))
      : (u = t[25]),
    u
  );
}
function k(e) {
  let n = (0, M.c)(21),
    { canAccept: r, canEdit: i, newFile: a, oldFile: o, onAction: s, onViewportReady: l } = e,
    u = t(c),
    d = m(w),
    f = (0, N.useRef)(!1),
    p;
  n[0] !== a || n[1] !== o ? ((p = T(o, a)), (n[0] = a), (n[1] = o), (n[2] = p)) : (p = n[2]);
  let h = d ? `wrap` : `scroll`,
    g;
  n[3] === l
    ? (g = n[4])
    : ((g = (e) => {
        if (f.current || e.shadowRoot?.querySelector(`[data-diff]`) == null) return;
        let t = e.closest(`[data-inline-file-diff-review-viewport]`);
        t != null && ((f.current = !0), l?.(t));
      }),
      (n[3] = l),
      (n[4] = g));
  let _;
  n[5] !== p || n[6] !== h || n[7] !== g
    ? ((_ = (0, P.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto pe-4 pt-4 pb-4`,
        "data-inline-file-diff-review-viewport": ``,
        children: (0, P.jsx)(D, {
          className: `relative overflow-clip [contain:content] [--codex-diffs-surface:var(--color-surface)] [--diffs-min-number-column-width:1ch]`,
          diffStyle: `unified`,
          expandUnchanged: !0,
          fileDiff: p,
          hunkSeparators: `simple`,
          overflow: h,
          onPostRender: g,
        }),
      })),
      (n[5] = p),
      (n[6] = h),
      (n[7] = g),
      (n[8] = _))
    : (_ = n[8]);
  let v;
  n[9] !== u || n[10] !== d ? ((v = () => u.set(w, !d)), (n[9] = u), (n[10] = d), (n[11] = v)) : (v = n[11]);
  let y;
  n[12] !== r || n[13] !== i || n[14] !== s || n[15] !== v || n[16] !== d
    ? ((y = (0, P.jsx)(`div`, {
        className: `flex shrink-0 justify-end border-t border-default bg-surface px-4 py-2`,
        children: (0, P.jsx)(A, { canAccept: r, canEdit: i, onAction: s, onToggleWrap: v, wrapLines: d }),
      })),
      (n[12] = r),
      (n[13] = i),
      (n[14] = s),
      (n[15] = v),
      (n[16] = d),
      (n[17] = y))
    : (y = n[17]);
  let b;
  return (
    n[18] !== _ || n[19] !== y
      ? ((b = (0, P.jsxs)(`div`, { className: `relative flex h-full min-h-0 flex-col`, children: [_, y] })),
        (n[18] = _),
        (n[19] = y),
        (n[20] = b))
      : (b = n[20]),
    b
  );
}
function A(e) {
  let t = (0, M.c)(29),
    { canAccept: n, canEdit: i, onAction: a, onToggleWrap: o, wrapLines: s } = e,
    c = _(),
    u;
  t[0] !== c || t[1] !== s
    ? ((u = s
        ? c.formatMessage({
            id: `codex.review.wrap.disable`,
            defaultMessage: `Disable word wrap`,
            description: `Menu item to disable word wrap in diff view`,
          })
        : c.formatMessage({
            id: `codex.review.wrap.enable`,
            defaultMessage: `Enable word wrap`,
            description: `Menu item to enable word wrap in diff view`,
          })),
      (t[0] = c),
      (t[1] = s),
      (t[2] = u))
    : (u = t[2]);
  let f = u,
    p;
  t[3] !== o || t[4] !== f || t[5] !== s
    ? ((p =
        o == null
          ? null
          : (0, P.jsx)(g, {
              tooltipContent: f,
              children: (0, P.jsx)(d, {
                "aria-label": f,
                color: `outline`,
                onClick: o,
                size: `toolbar`,
                uniform: !0,
                children: s
                  ? (0, P.jsx)(r, { "aria-hidden": !1, asset: b })
                  : (0, P.jsx)(r, { "aria-hidden": !1, asset: l }),
              }),
            })),
      (t[3] = o),
      (t[4] = f),
      (t[5] = s),
      (t[6] = p))
    : (p = t[6]);
  let m = !i,
    h;
  t[7] === a ? (h = t[8]) : ((h = () => a(`edit`)), (t[7] = a), (t[8] = h));
  let v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, P.jsx)(y, {
        id: `inlineFileDiffReview.edit`,
        defaultMessage: `Edit`,
        description: `Button label for editing the proposed file content from an inline review`,
      })),
      (t[9] = v))
    : (v = t[9]);
  let x;
  t[10] !== m || t[11] !== h
    ? ((x = (0, P.jsx)(d, { color: `outline`, disabled: m, onClick: h, size: `toolbar`, children: v })),
      (t[10] = m),
      (t[11] = h),
      (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] === a ? (S = t[14]) : ((S = () => a(`reject`)), (t[13] = a), (t[14] = S));
  let C;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, P.jsx)(y, {
        id: `inlineFileDiffReview.reject`,
        defaultMessage: `Reject`,
        description: `Button label for rejecting proposed file content from an inline review`,
      })),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] === S
    ? (w = t[17])
    : ((w = (0, P.jsx)(d, {
        className: `!text-danger`,
        color: `outline`,
        onClick: S,
        size: `toolbar`,
        children: C,
      })),
      (t[16] = S),
      (t[17] = w));
  let T = !n,
    E;
  t[18] === a ? (E = t[19]) : ((E = () => a(`accept`)), (t[18] = a), (t[19] = E));
  let D;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, P.jsx)(y, {
        id: `inlineFileDiffReview.accept`,
        defaultMessage: `Accept`,
        description: `Button label for accepting proposed file content from an inline review`,
      })),
      (t[20] = D))
    : (D = t[20]);
  let O;
  t[21] !== T || t[22] !== E
    ? ((O = (0, P.jsx)(d, {
        className: `!text-chart-green`,
        color: `outline`,
        disabled: T,
        onClick: E,
        size: `toolbar`,
        children: D,
      })),
      (t[21] = T),
      (t[22] = E),
      (t[23] = O))
    : (O = t[23]);
  let k;
  return (
    t[24] !== O || t[25] !== p || t[26] !== x || t[27] !== w
      ? ((k = (0, P.jsxs)(`div`, {
          className: `flex min-w-0 flex-wrap items-center justify-end gap-2 font-sans`,
          children: [p, x, w, O],
        })),
        (t[24] = O),
        (t[25] = p),
        (t[26] = x),
        (t[27] = w),
        (t[28] = k))
      : (k = t[28]),
    k
  );
}
function j(e) {
  return (
    e.length > F ||
    e.split(
      `
`,
      5001,
    ).length > I
  );
}
var M, N, P, F, I;
function L() {
  return (L = e(() => {
    ((M = s()),
      x(),
      h(),
      S(),
      p(),
      (N = i()),
      u(),
      f(),
      o(),
      v(),
      C(),
      E(),
      n(),
      (P = a()),
      (F = 262144),
      (I = 5e3));
  }))();
}
export { L as n, O as t };
//# sourceMappingURL=inline-file-diff-review-aeb8d8a5c4ca.js.map
