import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  JG as n,
  JU as r,
  KG as i,
  Rpn as a,
  Xdt as o,
  ZG as s,
  dlt as c,
  hmn as l,
  kMt as u,
  kmn as d,
  llt as f,
  qU as p,
  zpn as m,
} from "./app-initial-f094ef01c64d.js";
function h(e) {
  let t = (0, v.c)(22),
    { children: n, diffStats: r, label: o, onOpenChange: s, reviewV2Enabled: l } = e,
    d = l === void 0 || l,
    f = d && `gap-1.5`,
    p;
  t[0] === f
    ? (p = t[1])
    : ((p = a(`w-fit max-w-[320px] border-transparent px-1.5`, f)), (t[0] = f), (t[1] = p));
  let m = d ? `gap-3` : `gap-1.5 truncate`,
    h;
  t[2] === m
    ? (h = t[3])
    : ((h = a(`flex max-w-full min-w-0 items-center`, m)), (t[2] = m), (t[3] = h));
  let _;
  t[4] === o
    ? (_ = t[5])
    : ((_ = (0, y.jsx)(`span`, { className: `min-w-0 truncate`, children: o })),
      (t[4] = o),
      (t[5] = _));
  let b;
  t[6] !== r || t[7] !== d
    ? ((b = d && r != null ? (0, y.jsx)(g, { ...r, reviewV2Enabled: !0 }) : null),
      (t[6] = r),
      (t[7] = d),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] !== h || t[10] !== _ || t[11] !== b
    ? ((x = (0, y.jsxs)(`span`, { className: h, children: [_, b] })),
      (t[9] = h),
      (t[10] = _),
      (t[11] = b),
      (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, y.jsx)(c, {})), (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] !== p || t[15] !== x
    ? ((C = (0, y.jsxs)(u, {
        className: p,
        allowShrink: !0,
        color: `ghostActive`,
        size: `toolbar`,
        children: [x, S],
      })),
      (t[14] = p),
      (t[15] = x),
      (t[16] = C))
    : (C = t[16]);
  let w = d ? `menuWide` : `menuBounded`,
    T;
  return (
    t[17] !== n || t[18] !== s || t[19] !== C || t[20] !== w
      ? ((T = (0, y.jsx)(i, { onOpenChange: s, triggerButton: C, contentWidth: w, children: n })),
        (t[17] = n),
        (t[18] = s),
        (t[19] = C),
        (t[20] = w),
        (t[21] = T))
      : (T = t[21]),
    T
  );
}
function g(e) {
  let t = (0, v.c)(6),
    { additions: n, deletions: r, reviewV2Enabled: i } = e;
  if (n === 0 && r === 0) return null;
  let o = i ? `text-sm` : `text-size-chat`,
    s;
  t[0] === o ? (s = t[1]) : ((s = a(`me-1 shrink-0 select-none`, o)), (t[0] = o), (t[1] = s));
  let c;
  return (
    t[2] !== n || t[3] !== r || t[4] !== s
      ? ((c = (0, y.jsx)(p, { className: s, linesAdded: n, linesRemoved: r })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function _(e) {
  let t = (0, v.c)(12),
    { diffStats: r, isSelected: i, label: a, showDiffStats: o, showSelectionIndicator: s } = e,
    c = s === void 0 || s,
    l;
  t[0] !== i || t[1] !== c
    ? ((l = c
        ? (0, y.jsx)(n.ItemIcon, { size: `xs`, children: i ? (0, y.jsx)(f, {}) : null })
        : null),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === a
    ? (u = t[4])
    : ((u = (0, y.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: a })),
      (t[3] = a),
      (t[4] = u));
  let d;
  t[5] !== r || t[6] !== o
    ? ((d =
        o &&
        r != null &&
        (r.additions === 0 && r.deletions === 0
          ? (0, y.jsx)(`span`, {
              "aria-hidden": !0,
              className: `shrink-0 text-codex-description`,
              children: b,
            })
          : (0, y.jsx)(p, {
              className: `shrink-0`,
              linesAdded: r.additions,
              linesRemoved: r.deletions,
            }))),
      (t[5] = r),
      (t[6] = o),
      (t[7] = d))
    : (d = t[7]);
  let m;
  return (
    t[8] !== l || t[9] !== u || t[10] !== d
      ? ((m = (0, y.jsxs)(`span`, {
          className: `flex min-w-0 flex-1 items-center gap-1.5`,
          children: [l, u, d],
        })),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
var v,
  y,
  b,
  x = e(() => {
    ((v = d()), m(), t(), s(), o(), r(), (y = l()), (b = `—`));
  });
function S(e, t) {
  if (t !== `available`)
    return t === `loading`
      ? e.formatMessage({
          id: `pullRequestRevision.checking`,
          defaultMessage: `Checking review availability…`,
          description: `Status while checking exact-revision review support`,
        })
      : e.formatMessage({
          id: `pullRequestRevision.cliRequired`,
          defaultMessage: `Exact-revision review requires GitHub CLI signed in to this GitHub account on the selected host. The GitHub connector does not yet provide fixed-revision comparisons.`,
          description: `Explains why a connector-backed pull request cannot open an immutable code review`,
        });
}
var C = e(() => {});
export { _ as a, h as i, C as n, x as o, g as r, S as t };
//# sourceMappingURL=revision-review-unavailable-message-adbe72fc0fd9.js.map
