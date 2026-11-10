import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  LNt as r,
  PBt as i,
  XOt as a,
  Y3 as o,
  Z3 as s,
  ZSt as c,
  ck as l,
  e6 as u,
  nCt as d,
  okt as f,
  rk as p,
  tkt as m,
} from "./app-shared-2feb3d4c6fcc.js";
import { P$r as h, XEn as g, YEn as _ } from "./app-initial-ad16eaadf81f.js";
import { i as v, n as y, r as b } from "./pull-request-revision-queries-2036ad28d46d.js";
import { i as x, u as S } from "./pull-request-code-review-navigation-8765a5adf3d2.js";
import { i as C, r as w, t as T } from "./revision-review-unavailable-message-fb159f3486a9.js";
import { i as E, n as D, r as O } from "./review-source-dropdown-24fffa506f16.js";
function k(e) {
  let t = (0, j.c)(38),
    { request: n, snapshot: r, commitSha: i, onSelect: a } = e,
    o = d(S, n),
    s;
  t[0] !== r.headRevision || t[1] !== r.mergeBaseRevision
    ? ((s = { baseRevision: r.mergeBaseRevision, headRevision: r.headRevision }),
      (t[0] = r.headRevision),
      (t[1] = r.mergeBaseRevision),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== n || t[4] !== s ? ((c = { ...n, comparison: s }), (t[3] = n), (t[4] = s), (t[5] = c)) : (c = t[5]);
  let l = d(S, c),
    u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, N.jsx)(m, {
        id: `pullRequestRevision.allChanges`,
        defaultMessage: `All PR changes`,
        description: `Review all changes in the selected pull request`,
      })),
      (t[6] = u))
    : (u = t[6]);
  let f = u,
    h;
  t[7] === o ? (h = t[8]) : ((h = A(o)), (t[7] = o), (t[8] = h));
  let g;
  t[9] === i
    ? (g = t[10])
    : ((g =
        i == null
          ? f
          : (0, N.jsx)(m, {
              id: `codex.review.source.local.selectedCommit`,
              defaultMessage: `Commit`,
              description: `Source button label when the Codex review shows one selected commit`,
            })),
      (t[9] = i),
      (t[10] = g));
  let _ = i == null ? `true` : void 0,
    v;
  t[11] === a ? (v = t[12]) : ((v = () => a(null)), (t[11] = a), (t[12] = v));
  let y;
  t[13] === l ? (y = t[14]) : ((y = A(l)), (t[13] = l), (t[14] = y));
  let b = i == null,
    x;
  t[15] !== y || t[16] !== b
    ? ((x = (0, N.jsx)(O, { diffStats: y, isSelected: b, label: f, showDiffStats: !0 })),
      (t[15] = y),
      (t[16] = b),
      (t[17] = x))
    : (x = t[17]);
  let C;
  t[18] !== x || t[19] !== _ || t[20] !== v
    ? ((C = (0, N.jsx)(p.Item, { "aria-current": _, onSelect: v, children: x })),
      (t[18] = x),
      (t[19] = _),
      (t[20] = v),
      (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, N.jsx)(p.Separator, {})), (t[22] = w))
    : (w = t[22]);
  let T;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, N.jsx)(O, {
        diffStats: null,
        isSelected: !1,
        label: (0, N.jsx)(m, {
          id: `codex.review.source.local.commits`,
          defaultMessage: `Commits`,
          description: `Dropdown submenu label in the Codex review header for choosing a commit to review. Keep it short for a compact menu item.`,
        }),
        showDiffStats: !1,
      })),
      (t[23] = T))
    : (T = t[23]);
  let E;
  if (t[24] !== i || t[25] !== a || t[26] !== r.commits) {
    let e;
    (t[28] !== i || t[29] !== a
      ? ((e = (e) => {
          let t = `${e.sha.slice(0, 7)} ${e.title}`;
          return (0, N.jsx)(
            p.Item,
            {
              "aria-current": e.sha === i ? `true` : void 0,
              disabled: e.parentSha == null,
              onSelect: () => a(e.sha),
              tooltipText: e.title,
              tooltipOpenWhen: `trigger-overflows`,
              children: (0, N.jsx)(O, {
                diffStats: null,
                isSelected: e.sha === i,
                label: t,
                showDiffStats: !1,
              }),
            },
            e.sha,
          );
        }),
        (t[28] = i),
        (t[29] = a),
        (t[30] = e))
      : (e = t[30]),
      (E = r.commits.map(e)),
      (t[24] = i),
      (t[25] = a),
      (t[26] = r.commits),
      (t[27] = E));
  } else E = t[27];
  let k;
  t[31] === E
    ? (k = t[32])
    : ((k = (0, N.jsx)(p.FlyoutSubmenuItem, {
        label: T,
        children: (0, N.jsx)(`div`, { className: `max-h-80 overflow-y-auto`, children: E }),
      })),
      (t[31] = E),
      (t[32] = k));
  let M;
  return (
    t[33] !== C || t[34] !== k || t[35] !== h || t[36] !== g
      ? ((M = (0, N.jsxs)(D, { diffStats: h, label: g, children: [C, w, k] })),
        (t[33] = C),
        (t[34] = k),
        (t[35] = h),
        (t[36] = g),
        (t[37] = M))
      : (M = t[37]),
    M
  );
}
function A(e) {
  return e == null
    ? null
    : { additions: (0, M.default)(e, (e) => e.additions), deletions: (0, M.default)(e, (e) => e.deletions) };
}
var j, M, N;
function P() {
  return (P = e(() => {
    ((j = i()), (M = t(h(), 1)), c(), a(), l(), E(), x(), (N = r()));
  }))();
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = i()),
      c(),
      a(),
      s(),
      g(),
      u(),
      C(),
      y(),
      P(),
      (I = r()),
      (L = function (e) {
        let t = (0, F.c)(48),
          { request: r, renderSlots: i, tabState: a, setTabState: s } = e,
          c = d(v, r),
          { data: l, error: u, isFetching: p, refetch: h } = d(b, r),
          g = a.snapshot ?? (l?.status === `success` ? l.snapshot : null),
          y = f(),
          x;
        t[0] !== h || t[1] !== s || t[2] !== g || t[3] !== a.commitSha
          ? ((x = async () => {
              g != null && s({ snapshot: g, commitSha: a.commitSha });
              let e = await h();
              e.data?.status === `success` && s({ snapshot: e.data.snapshot, commitSha: null });
            }),
            (t[0] = h),
            (t[1] = s),
            (t[2] = g),
            (t[3] = a.commitSha),
            (t[4] = x))
          : (x = t[4]);
        let S = x;
        if (g == null || c !== `available`) {
          let e;
          t[5] !== c || t[6] !== l || t[7] !== u?.message || t[8] !== y || t[9] !== p || t[10] !== S
            ? ((e =
                p || c === `loading`
                  ? (0, I.jsx)(`div`, {
                      className: `flex h-full items-center justify-center`,
                      role: `status`,
                      children: (0, I.jsx)(n, {}),
                    })
                  : (0, I.jsx)(_, {
                      className: `h-full`,
                      title: y.formatMessage({
                        id: `pullRequestDetail.code.unavailable`,
                        defaultMessage: `Changes unavailable`,
                        description: `Error title for an unavailable pull request diff`,
                      }),
                      description: T(y, c) ?? (l?.status === `error` ? l.error : u?.message),
                      actions:
                        c === `available`
                          ? (0, I.jsx)(o, {
                              color: `secondary`,
                              onClick: () => void S(),
                              children: (0, I.jsx)(m, {
                                id: `pullRequestDetail.code.retry`,
                                defaultMessage: `Try again`,
                                description: `Action to retry loading a pull request diff`,
                              }),
                            })
                          : void 0,
                    })),
              (t[5] = c),
              (t[6] = l),
              (t[7] = u?.message),
              (t[8] = y),
              (t[9] = p),
              (t[10] = S),
              (t[11] = e))
            : (e = t[11]);
          let r = e,
            a;
          return (
            t[12] !== r || t[13] !== i
              ? ((a = i({ headerRows: [], content: r })), (t[12] = r), (t[13] = i), (t[14] = a))
              : (a = t[14]),
            a
          );
        }
        let C;
        if (t[15] !== g.commits || t[16] !== a.commitSha) {
          let e;
          (t[18] === a.commitSha
            ? (e = t[19])
            : ((e = (e) => e.sha === a.commitSha), (t[18] = a.commitSha), (t[19] = e)),
            (C = g.commits.find(e)),
            (t[15] = g.commits),
            (t[16] = a.commitSha),
            (t[17] = C));
        } else C = t[17];
        let E = C,
          D = E?.parentSha ?? g.mergeBaseRevision,
          O = E?.sha ?? g.headRevision,
          A;
        t[20] !== D || t[21] !== O
          ? ((A = { baseRevision: D, headRevision: O }), (t[20] = D), (t[21] = O), (t[22] = A))
          : (A = t[22]);
        let j;
        t[23] !== r || t[24] !== A
          ? ((j = { ...r, comparison: A }), (t[23] = r), (t[24] = A), (t[25] = j))
          : (j = t[25]);
        let M = j,
          N = `${M.comparison.baseRevision}:${M.comparison.headRevision}`,
          P;
        t[26] === S ? (P = t[27]) : ((P = () => void S()), (t[26] = S), (t[27] = P));
        let L = E?.sha ?? null,
          R;
        t[28] !== s || t[29] !== g
          ? ((R = (e) => s({ snapshot: g, commitSha: e })), (t[28] = s), (t[29] = g), (t[30] = R))
          : (R = t[30]);
        let z;
        t[31] !== M || t[32] !== g || t[33] !== R || t[34] !== L
          ? ((z = (0, I.jsx)(k, { request: M, snapshot: g, commitSha: L, onSelect: R })),
            (t[31] = M),
            (t[32] = g),
            (t[33] = R),
            (t[34] = L),
            (t[35] = z))
          : (z = t[35]);
        let B;
        t[36] === l
          ? (B = t[37])
          : ((B = l?.status === `error` ? (0, I.jsx)(`span`, { role: `alert`, children: l.error }) : null),
            (t[36] = l),
            (t[37] = B));
        let V;
        t[38] !== z || t[39] !== B
          ? ((V = (0, I.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [z, B] })),
            (t[38] = z),
            (t[39] = B),
            (t[40] = V))
          : (V = t[40]);
        let H;
        return (
          t[41] !== p || t[42] !== i || t[43] !== M || t[44] !== V || t[45] !== N || t[46] !== P
            ? ((H = (0, I.jsx)(
                w,
                {
                  request: M,
                  renderSlots: i,
                  baseBranch: null,
                  headBranch: null,
                  headRevision: M.comparison.headRevision,
                  onRefresh: P,
                  isRefreshing: p,
                  sourceControl: V,
                },
                N,
              )),
              (t[41] = p),
              (t[42] = i),
              (t[43] = M),
              (t[44] = V),
              (t[45] = N),
              (t[46] = P),
              (t[47] = H))
            : (H = t[47]),
          H
        );
      }));
  }))();
}
R();
export { L as PullRequestRevisionTab };
//# sourceMappingURL=pull-request-revision-tab-b6a1bc6f7fb8.js.map
