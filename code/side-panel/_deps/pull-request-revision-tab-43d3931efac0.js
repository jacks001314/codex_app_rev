import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as n,
  Cpn as r,
  GL as i,
  JG as a,
  MMt as o,
  N3t as s,
  O3t as c,
  Opn as l,
  Spn as u,
  WL as d,
  ZG as f,
  hmn as p,
  jMt as m,
  kMt as h,
  kmn as g,
  qMt as _,
} from "./app-initial-f094ef01c64d.js";
import { i as v, n as y, r as b } from "./pull-request-revision-queries-822a229a11df.js";
import { i as x, u as S } from "./pull-request-code-review-navigation-c0a64db532da.js";
import { n as C, t as w } from "./pull-request-code-review-c745f0e9b91d.js";
import {
  a as T,
  i as E,
  n as D,
  o as O,
  t as k,
} from "./revision-review-unavailable-message-adbe72fc0fd9.js";
function A(e) {
  let t = (0, M.c)(38),
    { request: n, snapshot: i, commitSha: o, onSelect: c } = e,
    l = s(S, n),
    u;
  t[0] !== i.headRevision || t[1] !== i.mergeBaseRevision
    ? ((u = { baseRevision: i.mergeBaseRevision, headRevision: i.headRevision }),
      (t[0] = i.headRevision),
      (t[1] = i.mergeBaseRevision),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== n || t[4] !== u
    ? ((d = { ...n, comparison: u }), (t[3] = n), (t[4] = u), (t[5] = d))
    : (d = t[5]);
  let f = s(S, d),
    p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, P.jsx)(r, {
        id: `pullRequestRevision.allChanges`,
        defaultMessage: `All PR changes`,
        description: `Review all changes in the selected pull request`,
      })),
      (t[6] = p))
    : (p = t[6]);
  let m = p,
    h;
  t[7] === l ? (h = t[8]) : ((h = j(l)), (t[7] = l), (t[8] = h));
  let g;
  t[9] === o
    ? (g = t[10])
    : ((g =
        o == null
          ? m
          : (0, P.jsx)(r, {
              id: `codex.review.source.local.selectedCommit`,
              defaultMessage: `Commit`,
              description: `Source button label when the Codex review shows one selected commit`,
            })),
      (t[9] = o),
      (t[10] = g));
  let _ = o == null ? `true` : void 0,
    v;
  t[11] === c ? (v = t[12]) : ((v = () => c(null)), (t[11] = c), (t[12] = v));
  let y;
  t[13] === f ? (y = t[14]) : ((y = j(f)), (t[13] = f), (t[14] = y));
  let b = o == null,
    x;
  t[15] !== y || t[16] !== b
    ? ((x = (0, P.jsx)(T, { diffStats: y, isSelected: b, label: m, showDiffStats: !0 })),
      (t[15] = y),
      (t[16] = b),
      (t[17] = x))
    : (x = t[17]);
  let C;
  t[18] !== x || t[19] !== _ || t[20] !== v
    ? ((C = (0, P.jsx)(a.Item, { "aria-current": _, onSelect: v, children: x })),
      (t[18] = x),
      (t[19] = _),
      (t[20] = v),
      (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, P.jsx)(a.Separator, {})), (t[22] = w))
    : (w = t[22]);
  let D;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, P.jsx)(T, {
        diffStats: null,
        isSelected: !1,
        label: (0, P.jsx)(r, {
          id: `codex.review.source.local.commits`,
          defaultMessage: `Commits`,
          description: `Dropdown submenu label in the Codex review header for choosing a commit to review. Keep it short for a compact menu item.`,
        }),
        showDiffStats: !1,
      })),
      (t[23] = D))
    : (D = t[23]);
  let O;
  if (t[24] !== o || t[25] !== c || t[26] !== i.commits) {
    let e;
    (t[28] !== o || t[29] !== c
      ? ((e = (e) => {
          let t = `${e.sha.slice(0, 7)} ${e.title}`;
          return (0, P.jsx)(
            a.Item,
            {
              "aria-current": e.sha === o ? `true` : void 0,
              disabled: e.parentSha == null,
              onSelect: () => c(e.sha),
              tooltipText: e.title,
              tooltipOpenWhen: `trigger-overflows`,
              children: (0, P.jsx)(T, {
                diffStats: null,
                isSelected: e.sha === o,
                label: t,
                showDiffStats: !1,
              }),
            },
            e.sha,
          );
        }),
        (t[28] = o),
        (t[29] = c),
        (t[30] = e))
      : (e = t[30]),
      (O = i.commits.map(e)),
      (t[24] = o),
      (t[25] = c),
      (t[26] = i.commits),
      (t[27] = O));
  } else O = t[27];
  let k;
  t[31] === O
    ? (k = t[32])
    : ((k = (0, P.jsx)(a.FlyoutSubmenuItem, {
        label: D,
        children: (0, P.jsx)(`div`, { className: `max-h-80 overflow-y-auto`, children: O }),
      })),
      (t[31] = O),
      (t[32] = k));
  let A;
  return (
    t[33] !== C || t[34] !== k || t[35] !== h || t[36] !== g
      ? ((A = (0, P.jsxs)(E, { diffStats: h, label: g, children: [C, w, k] })),
        (t[33] = C),
        (t[34] = k),
        (t[35] = h),
        (t[36] = g),
        (t[37] = A))
      : (A = t[37]),
    A
  );
}
function j(e) {
  return e == null
    ? null
    : {
        additions: (0, N.default)(e, (e) => e.additions),
        deletions: (0, N.default)(e, (e) => e.deletions),
      };
}
var M,
  N,
  P,
  F = e(() => {
    ((M = g()), (N = t(_(), 1)), c(), u(), f(), O(), x(), (P = p()));
  }),
  I,
  L,
  R;
e(() => {
  ((I = g()),
    c(),
    u(),
    n(),
    i(),
    o(),
    C(),
    y(),
    F(),
    D(),
    (L = p()),
    (R = function (e) {
      let t = (0, I.c)(44),
        { request: n, tabState: i, setTabState: a } = e,
        o = s(v, n),
        { data: c, error: u, isFetching: f, refetch: p } = s(b, n),
        g = i.snapshot ?? (c?.status === `success` ? c.snapshot : null),
        _ = l(),
        y;
      t[0] !== p || t[1] !== a || t[2] !== g || t[3] !== i.commitSha
        ? ((y = async () => {
            g != null && a({ snapshot: g, commitSha: i.commitSha });
            let e = await p();
            e.data?.status === `success` && a({ snapshot: e.data.snapshot, commitSha: null });
          }),
          (t[0] = p),
          (t[1] = a),
          (t[2] = g),
          (t[3] = i.commitSha),
          (t[4] = y))
        : (y = t[4]);
      let x = y;
      if (g == null || o !== `available`) {
        let e;
        return (
          t[5] !== o || t[6] !== c || t[7] !== u?.message || t[8] !== _ || t[9] !== f || t[10] !== x
            ? ((e =
                f || o === `loading`
                  ? (0, L.jsx)(`div`, {
                      className: `flex h-full items-center justify-center`,
                      role: `status`,
                      children: (0, L.jsx)(m, {}),
                    })
                  : (0, L.jsx)(d, {
                      className: `h-full`,
                      title: _.formatMessage({
                        id: `pullRequestDetail.code.unavailable`,
                        defaultMessage: `Changes unavailable`,
                        description: `Error title for an unavailable pull request diff`,
                      }),
                      description: k(_, o) ?? (c?.status === `error` ? c.error : u?.message),
                      actions:
                        o === `available`
                          ? (0, L.jsx)(h, {
                              color: `secondary`,
                              onClick: () => void x(),
                              children: (0, L.jsx)(r, {
                                id: `pullRequestDetail.code.retry`,
                                defaultMessage: `Try again`,
                                description: `Action to retry loading a pull request diff`,
                              }),
                            })
                          : void 0,
                    })),
              (t[5] = o),
              (t[6] = c),
              (t[7] = u?.message),
              (t[8] = _),
              (t[9] = f),
              (t[10] = x),
              (t[11] = e))
            : (e = t[11]),
          e
        );
      }
      let S;
      if (t[12] !== g.commits || t[13] !== i.commitSha) {
        let e;
        (t[15] === i.commitSha
          ? (e = t[16])
          : ((e = (e) => e.sha === i.commitSha), (t[15] = i.commitSha), (t[16] = e)),
          (S = g.commits.find(e)),
          (t[12] = g.commits),
          (t[13] = i.commitSha),
          (t[14] = S));
      } else S = t[14];
      let C = S,
        T = C?.parentSha ?? g.mergeBaseRevision,
        E = C?.sha ?? g.headRevision,
        D;
      t[17] !== T || t[18] !== E
        ? ((D = { baseRevision: T, headRevision: E }), (t[17] = T), (t[18] = E), (t[19] = D))
        : (D = t[19]);
      let O;
      t[20] !== n || t[21] !== D
        ? ((O = { ...n, comparison: D }), (t[20] = n), (t[21] = D), (t[22] = O))
        : (O = t[22]);
      let j = O,
        M = `${j.comparison.baseRevision}:${j.comparison.headRevision}`,
        N;
      t[23] === x ? (N = t[24]) : ((N = () => void x()), (t[23] = x), (t[24] = N));
      let P = C?.sha ?? null,
        F;
      t[25] !== a || t[26] !== g
        ? ((F = (e) => a({ snapshot: g, commitSha: e })), (t[25] = a), (t[26] = g), (t[27] = F))
        : (F = t[27]);
      let R;
      t[28] !== j || t[29] !== g || t[30] !== F || t[31] !== P
        ? ((R = (0, L.jsx)(A, { request: j, snapshot: g, commitSha: P, onSelect: F })),
          (t[28] = j),
          (t[29] = g),
          (t[30] = F),
          (t[31] = P),
          (t[32] = R))
        : (R = t[32]);
      let z;
      t[33] === c
        ? (z = t[34])
        : ((z =
            c?.status === `error`
              ? (0, L.jsx)(`span`, { role: `alert`, children: c.error })
              : null),
          (t[33] = c),
          (t[34] = z));
      let B;
      t[35] !== R || t[36] !== z
        ? ((B = (0, L.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [R, z],
          })),
          (t[35] = R),
          (t[36] = z),
          (t[37] = B))
        : (B = t[37]);
      let V;
      return (
        t[38] !== f || t[39] !== j || t[40] !== B || t[41] !== M || t[42] !== N
          ? ((V = (0, L.jsx)(
              w,
              {
                request: j,
                baseBranch: null,
                headBranch: null,
                headRevision: j.comparison.headRevision,
                onRefresh: N,
                isRefreshing: f,
                sourceControl: B,
              },
              M,
            )),
            (t[38] = f),
            (t[39] = j),
            (t[40] = B),
            (t[41] = M),
            (t[42] = N),
            (t[43] = V))
          : (V = t[43]),
        V
      );
    }));
})();
export { R as PullRequestRevisionTab };
//# sourceMappingURL=pull-request-revision-tab-43d3931efac0.js.map
