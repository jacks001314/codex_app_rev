import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Mz as a,
  Nz as o,
  Pxt as s,
  VDt as c,
  Vxt as l,
  cz as u,
  jDt as d,
  lY as f,
  ov as p,
  sv as m,
  sz as h,
  t3 as g,
  uY as _,
  vzt as v,
  wot as y,
  xMt as b,
  yzt as x,
} from "./app-shared-bbfeca5e5737.js";
import { KIr as S, kvt as C, nRr as w, wvt as T } from "./app-initial-5851df3f6cb1.js";
import { n as E, t as D } from "./file-diff-61a6fffbd4c1.js";
function O(e) {
  let t = (0, M.c)(26),
    { canAccept: n, canEdit: i, compact: a, newFile: o, oldFile: s, onAction: c, onViewportReady: l } = e,
    u = n === void 0 || n;
  if (j(s.contents) || j(o.contents)) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(r, {
          id: `inlineFileDiffReview.tooLarge`,
          defaultMessage: `Change is too large to preview`,
          description: `Message shown when an inline file review exceeds the safe rendering limit`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] !== u || t[2] !== i || t[3] !== c
        ? ((n = (0, P.jsxs)(`div`, {
            className: `flex h-full flex-col items-center justify-center gap-3 px-4 text-sm text-codex-description`,
            children: [e, (0, P.jsx)(A, { canAccept: u, canEdit: i, onAction: c })],
          })),
          (t[1] = u),
          (t[2] = i),
          (t[3] = c),
          (t[4] = n))
        : (n = t[4]),
      n
    );
  }
  if (a) {
    let e;
    t[5] === s.contents
      ? (e = t[6])
      : ((e = (0, P.jsx)(`del`, {
          className: `block bg-[var(--color-codex-diff-deleted)] px-3 py-2 break-words whitespace-pre-wrap no-underline`,
          children: s.contents,
        })),
        (t[5] = s.contents),
        (t[6] = e));
    let n;
    t[7] === o.contents
      ? (n = t[8])
      : ((n = (0, P.jsx)(`ins`, {
          className: `block bg-[var(--color-codex-diff-added)] px-3 py-2 break-words whitespace-pre-wrap no-underline`,
          children: o.contents,
        })),
        (t[7] = o.contents),
        (t[8] = n));
    let r;
    t[9] !== e || t[10] !== n
      ? ((r = (0, P.jsxs)(`div`, {
          className: `divide-y divide-border-subtle font-mono [font-size:var(--diffs-font-size)] [line-height:var(--diffs-line-height)]`,
          children: [e, n],
        })),
        (t[9] = e),
        (t[10] = n),
        (t[11] = r))
      : (r = t[11]);
    let a;
    t[12] !== u || t[13] !== i || t[14] !== c
      ? ((a = (0, P.jsx)(`div`, {
          className: `sticky bottom-0 z-10 flex justify-end border-t border-default bg-surface px-3 py-2`,
          children: (0, P.jsx)(A, { canAccept: u, canEdit: i, onAction: c }),
        })),
        (t[12] = u),
        (t[13] = i),
        (t[14] = c),
        (t[15] = a))
      : (a = t[15]);
    let l;
    return (
      t[16] !== r || t[17] !== a
        ? ((l = (0, P.jsxs)(`div`, {
            className: `max-h-80 overflow-y-auto rounded-lg border border-default bg-surface`,
            children: [r, a],
          })),
          (t[16] = r),
          (t[17] = a),
          (t[18] = l))
        : (l = t[18]),
      l
    );
  }
  let d;
  return (
    t[19] !== u || t[20] !== i || t[21] !== o || t[22] !== s || t[23] !== c || t[24] !== l
      ? ((d = (0, P.jsx)(k, {
          canAccept: u,
          canEdit: i,
          newFile: o,
          oldFile: s,
          onAction: c,
          onViewportReady: l,
        })),
        (t[19] = u),
        (t[20] = i),
        (t[21] = o),
        (t[22] = s),
        (t[23] = c),
        (t[24] = l),
        (t[25] = d))
      : (d = t[25]),
    d
  );
}
function k(e) {
  let t = (0, M.c)(21),
    { canAccept: r, canEdit: a, newFile: o, oldFile: s, onAction: c, onViewportReady: u } = e,
    d = i(n),
    f = l(C),
    p = (0, N.useRef)(!1),
    m;
  t[0] !== o || t[1] !== s ? ((m = w(s, o)), (t[0] = o), (t[1] = s), (t[2] = m)) : (m = t[2]);
  let h = f ? `wrap` : `scroll`,
    g;
  t[3] === u
    ? (g = t[4])
    : ((g = (e) => {
        if (p.current || e.shadowRoot?.querySelector(`[data-diff]`) == null) return;
        let t = e.closest(`[data-inline-file-diff-review-viewport]`);
        t != null && ((p.current = !0), u?.(t));
      }),
      (t[3] = u),
      (t[4] = g));
  let _;
  t[5] !== m || t[6] !== h || t[7] !== g
    ? ((_ = (0, P.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto pe-4 pt-4 pb-4`,
        "data-inline-file-diff-review-viewport": ``,
        children: (0, P.jsx)(D, {
          className: `relative overflow-clip [contain:content] [--codex-diffs-surface:var(--color-surface)] [--diffs-min-number-column-width:1ch]`,
          diffStyle: `unified`,
          expandUnchanged: !0,
          fileDiff: m,
          hunkSeparators: `simple`,
          overflow: h,
          onPostRender: g,
        }),
      })),
      (t[5] = m),
      (t[6] = h),
      (t[7] = g),
      (t[8] = _))
    : (_ = t[8]);
  let v;
  t[9] !== d || t[10] !== f ? ((v = () => d.set(C, !f)), (t[9] = d), (t[10] = f), (t[11] = v)) : (v = t[11]);
  let y;
  t[12] !== r || t[13] !== a || t[14] !== c || t[15] !== v || t[16] !== f
    ? ((y = (0, P.jsx)(`div`, {
        className: `flex shrink-0 justify-end border-t border-default bg-surface px-4 py-2`,
        children: (0, P.jsx)(A, { canAccept: r, canEdit: a, onAction: c, onToggleWrap: v, wrapLines: f }),
      })),
      (t[12] = r),
      (t[13] = a),
      (t[14] = c),
      (t[15] = v),
      (t[16] = f),
      (t[17] = y))
    : (y = t[17]);
  let b;
  return (
    t[18] !== _ || t[19] !== y
      ? ((b = (0, P.jsxs)(`div`, { className: `relative flex h-full min-h-0 flex-col`, children: [_, y] })),
        (t[18] = _),
        (t[19] = y),
        (t[20] = b))
      : (b = t[20]),
    b
  );
}
function A(e) {
  let n = (0, M.c)(29),
    { canAccept: i, canEdit: o, onAction: s, onToggleWrap: l, wrapLines: u } = e,
    d = c(),
    f;
  n[0] !== d || n[1] !== u
    ? ((f = u
        ? d.formatMessage({
            id: `codex.review.wrap.disable`,
            defaultMessage: `Disable word wrap`,
            description: `Menu item to disable word wrap in diff view`,
          })
        : d.formatMessage({
            id: `codex.review.wrap.enable`,
            defaultMessage: `Enable word wrap`,
            description: `Menu item to enable word wrap in diff view`,
          })),
      (n[0] = d),
      (n[1] = u),
      (n[2] = f))
    : (f = n[2]);
  let m = f,
    g;
  n[3] !== l || n[4] !== m || n[5] !== u
    ? ((g =
        l == null
          ? null
          : (0, P.jsx)(h, {
              tooltipContent: m,
              children: (0, P.jsx)(t, {
                "aria-label": m,
                color: `outline`,
                onClick: l,
                size: `toolbar`,
                uniform: !0,
                children: u
                  ? (0, P.jsx)(a, { "aria-hidden": !1, asset: _ })
                  : (0, P.jsx)(a, { "aria-hidden": !1, asset: p }),
              }),
            })),
      (n[3] = l),
      (n[4] = m),
      (n[5] = u),
      (n[6] = g))
    : (g = n[6]);
  let v = !o,
    y;
  n[7] === s ? (y = n[8]) : ((y = () => s(`edit`)), (n[7] = s), (n[8] = y));
  let b;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, P.jsx)(r, {
        id: `inlineFileDiffReview.edit`,
        defaultMessage: `Edit`,
        description: `Button label for editing the proposed file content from an inline review`,
      })),
      (n[9] = b))
    : (b = n[9]);
  let x;
  n[10] !== v || n[11] !== y
    ? ((x = (0, P.jsx)(t, { color: `outline`, disabled: v, onClick: y, size: `toolbar`, children: b })),
      (n[10] = v),
      (n[11] = y),
      (n[12] = x))
    : (x = n[12]);
  let S;
  n[13] === s ? (S = n[14]) : ((S = () => s(`reject`)), (n[13] = s), (n[14] = S));
  let C;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, P.jsx)(r, {
        id: `inlineFileDiffReview.reject`,
        defaultMessage: `Reject`,
        description: `Button label for rejecting proposed file content from an inline review`,
      })),
      (n[15] = C))
    : (C = n[15]);
  let w;
  n[16] === S
    ? (w = n[17])
    : ((w = (0, P.jsx)(t, {
        className: `!text-danger`,
        color: `outline`,
        onClick: S,
        size: `toolbar`,
        children: C,
      })),
      (n[16] = S),
      (n[17] = w));
  let T = !i,
    E;
  n[18] === s ? (E = n[19]) : ((E = () => s(`accept`)), (n[18] = s), (n[19] = E));
  let D;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, P.jsx)(r, {
        id: `inlineFileDiffReview.accept`,
        defaultMessage: `Accept`,
        description: `Button label for accepting proposed file content from an inline review`,
      })),
      (n[20] = D))
    : (D = n[20]);
  let O;
  n[21] !== T || n[22] !== E
    ? ((O = (0, P.jsx)(t, {
        className: `!text-chart-green`,
        color: `outline`,
        disabled: T,
        onClick: E,
        size: `toolbar`,
        children: D,
      })),
      (n[21] = T),
      (n[22] = E),
      (n[23] = O))
    : (O = n[23]);
  let k;
  return (
    n[24] !== O || n[25] !== g || n[26] !== x || n[27] !== w
      ? ((k = (0, P.jsxs)(`div`, {
          className: `flex min-w-0 flex-wrap items-center justify-end gap-2 font-sans`,
          children: [g, x, w, O],
        })),
        (n[24] = O),
        (n[25] = g),
        (n[26] = x),
        (n[27] = w),
        (n[28] = k))
      : (k = n[28]),
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
    ((M = v()),
      m(),
      f(),
      S(),
      s(),
      (N = x()),
      d(),
      g(),
      o(),
      u(),
      T(),
      E(),
      y(),
      (P = b()),
      (F = 262144),
      (I = 5e3));
  }))();
}
export { L as n, O as t };
//# sourceMappingURL=inline-file-diff-review-2b36b4184acf.js.map
