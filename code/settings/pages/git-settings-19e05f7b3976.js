import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $At as n,
  $G as r,
  A3t as i,
  AMt as a,
  Amn as o,
  B6t as s,
  B7t as c,
  BF as l,
  BS as u,
  CW as d,
  Cpn as f,
  DJt as p,
  EJt as m,
  HF as h,
  Hu as g,
  JK as _,
  JS as v,
  O3t as y,
  O8t as b,
  Opn as ee,
  QG as te,
  QKt as x,
  Qu as S,
  Spn as C,
  TW as w,
  VS as T,
  Vu as ne,
  XS as E,
  Xu as D,
  YKt as re,
  Zu as O,
  _Jt as k,
  a3t as ie,
  aYt as A,
  d3t as ae,
  hmn as j,
  jXt as M,
  kMt as N,
  kXt as P,
  kmn as F,
  mJt as I,
  njt as L,
  o3t as R,
  qK as z,
  qKt as B,
  qu as V,
  s3t as H,
  sYt as oe,
  wW as U,
  xpn as W,
} from "./app-initial-f094ef01c64d.js";
import { n as G, t as se } from "./segmented-toggle-30e6111a9bfb.js";
import { n as ce, o as le } from "./pull-request-fix-automation-d39ed4e2b4ea.js";
function ue(e) {
  let t = (0, K.c)(47),
    {
      ariaLabel: n,
      children: r,
      onSaved: a,
      placeholder: o,
      rows: s,
      setting: c,
      subtitle: l,
      title: u,
    } = e,
    d = s === void 0 ? 6 : s,
    f = i(ie),
    p = ee(),
    m = x(c),
    [g, _] = (0, q.useState)(null),
    [v, y] = (0, q.useState)(!1),
    b = (0, q.useRef)(null),
    te = (0, q.useRef)(null),
    S = (0, q.useRef)(null),
    C = `git-instructions-${c.key}`,
    w;
  t[0] === C ? (w = t[1]) : ((w = { id: C }), (t[0] = C), (t[1] = w));
  let T;
  t[2] !== f || t[3] !== c
    ? ((T = (e) => re(f, c, e)), (t[2] = f), (t[3] = c), (t[4] = T))
    : (T = t[4]);
  let ne;
  t[5] === a
    ? (ne = t[6])
    : ((ne = (e, t) => {
        (b.current === t && (b.current = null),
          _((e) => (e === t ? null : e)),
          y(!0),
          a?.(t),
          S.current != null && window.clearTimeout(S.current),
          (S.current = window.setTimeout(() => {
            ((S.current = null), y(!1));
          }, pe)));
      }),
      (t[5] = a),
      (t[6] = ne));
  let E;
  t[7] !== p || t[8] !== f
    ? ((E = (e, t) => {
        ((te.current = t),
          f.get(M).danger(
            p.formatMessage({
              id: `settings.git.instructions.autoSave.error`,
              defaultMessage: `Failed to save instructions`,
              description: `Error shown when automatically saving git instructions fails`,
            }),
          ));
      }),
      (t[7] = p),
      (t[8] = f),
      (t[9] = E))
    : (E = t[9]);
  let D;
  t[10] !== w || t[11] !== T || t[12] !== ne || t[13] !== E
    ? ((D = { scope: w, mutationFn: T, onSuccess: ne, onError: E }),
      (t[10] = w),
      (t[11] = T),
      (t[12] = ne),
      (t[13] = E),
      (t[14] = D))
    : (D = t[14]);
  let O = ae(D),
    k = g ?? m,
    A = g != null && g !== m,
    j;
  t[15] === O
    ? (j = t[16])
    : ((j = () => {
        b.current != null && b.current !== te.current && O.mutate(b.current);
      }),
      (t[15] = O),
      (t[16] = j));
  let N = (0, q.useEffectEvent)(j),
    P;
  t[17] !== g || t[18] !== N || t[19] !== m
    ? ((P = () => {
        if (g == null || g === m) return;
        let e = window.setTimeout(() => N(), fe);
        return () => window.clearTimeout(e);
      }),
      (t[17] = g),
      (t[18] = N),
      (t[19] = m),
      (t[20] = P))
    : (P = t[20]);
  let F;
  (t[21] !== g || t[22] !== m ? ((F = [g, m]), (t[21] = g), (t[22] = m), (t[23] = F)) : (F = t[23]),
    (0, q.useEffect)(P, F));
  let I;
  t[24] === N
    ? (I = t[25])
    : ((I = () => () => {
        (S.current != null && window.clearTimeout(S.current), N());
      }),
      (t[24] = N),
      (t[25] = I));
  let L;
  (t[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((L = []), (t[26] = L)) : (L = t[26]),
    (0, q.useEffect)(I, L));
  let R;
  t[27] === O
    ? (R = t[28])
    : ((R = () => {
        b.current != null && !O.isPending && ((te.current = null), O.mutate(b.current));
      }),
      (t[27] = O),
      (t[28] = R));
  let z = R,
    B = A && !O.isPending,
    V;
  t[29] === z
    ? (V = t[30])
    : ((V = (e) => {
        (e.preventDefault(), z());
      }),
      (t[29] = z),
      (t[30] = V));
  let H;
  (t[31] !== B || t[32] !== V
    ? ((H = { accelerator: `CmdOrCtrl+S`, enabled: B, onKeyDown: V }),
      (t[31] = B),
      (t[32] = V),
      (t[33] = H))
    : (H = t[33]),
    h(H));
  let oe = `idle`;
  O.isPending ? (oe = `saving`) : A ? (oe = `dirty`) : v && (oe = `saved`);
  let U;
  t[34] === m
    ? (U = t[35])
    : ((U = (e) => {
        (y(!1),
          S.current != null && (window.clearTimeout(S.current), (S.current = null)),
          (te.current = null),
          (b.current = e === m ? null : e),
          _(b.current));
      }),
      (t[34] = m),
      (t[35] = U));
  let W;
  return (
    t[36] !== oe ||
    t[37] !== n ||
    t[38] !== r ||
    t[39] !== k ||
    t[40] !== o ||
    t[41] !== d ||
    t[42] !== z ||
    t[43] !== l ||
    t[44] !== U ||
    t[45] !== u
      ? ((W = (0, J.jsx)(de, {
          actionState: oe,
          ariaLabel: n,
          currentValue: k,
          onChange: U,
          onSave: z,
          placeholder: o,
          rows: d,
          subtitle: l,
          title: u,
          children: r,
        })),
        (t[36] = oe),
        (t[37] = n),
        (t[38] = r),
        (t[39] = k),
        (t[40] = o),
        (t[41] = d),
        (t[42] = z),
        (t[43] = l),
        (t[44] = U),
        (t[45] = u),
        (t[46] = W))
      : (W = t[46]),
    W
  );
}
function de(e) {
  let t = (0, K.c)(24),
    {
      actionState: n,
      ariaLabel: r,
      children: i,
      currentValue: a,
      onChange: o,
      onSave: s,
      placeholder: c,
      rows: l,
      subtitle: u,
      title: d,
    } = e,
    p = l === void 0 ? 6 : l,
    m = null;
  if (n === `dirty` || n === `saving`) {
    let e = n === `saving`,
      r = n === `saving`,
      i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, J.jsx)(f, {
          id: `settings.git.instructions.autoSave.save`,
          defaultMessage: `Save`,
          description: `Button that immediately saves pending git instruction changes`,
        })),
        (t[0] = i))
      : (i = t[0]);
    let a;
    (t[1] !== s || t[2] !== e || t[3] !== r
      ? ((a = (0, J.jsx)(N, {
          color: `secondary`,
          disabled: e,
          loading: r,
          onClick: s,
          size: `toolbar`,
          children: i,
        })),
        (t[1] = s),
        (t[2] = e),
        (t[3] = r),
        (t[4] = a))
      : (a = t[4]),
      (m = a));
  } else if (n === `saved`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsxs)(`span`, {
          className: `flex items-center gap-2 text-xs text-secondary`,
          "aria-live": `polite`,
          children: [
            (0, J.jsx)(z, { className: `icon-2xs` }),
            (0, J.jsx)(f, {
              id: `settings.git.instructions.autoSave.saved`,
              defaultMessage: `Saved`,
              description: `Status shown after git instruction changes are automatically saved`,
            }),
          ],
        })),
        (t[5] = e))
      : (e = t[5]),
      (m = e));
  }
  let h;
  t[6] !== m || t[7] !== u || t[8] !== d
    ? ((h = (0, J.jsx)(O.Header, { title: d, subtitle: u, actions: m })),
      (t[6] = m),
      (t[7] = u),
      (t[8] = d),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === o
    ? (g = t[11])
    : ((g = (e) => {
        o(e.target.value);
      }),
      (t[10] = o),
      (t[11] = g));
  let _;
  t[12] !== r || t[13] !== a || t[14] !== c || t[15] !== p || t[16] !== g
    ? ((_ = (0, J.jsx)(U, { value: a, onChange: g, placeholder: c, "aria-label": r, rows: p })),
      (t[12] = r),
      (t[13] = a),
      (t[14] = c),
      (t[15] = p),
      (t[16] = g),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] !== i || t[19] !== _
    ? ((v = (0, J.jsxs)(O.Content, { children: [i, _] })), (t[18] = i), (t[19] = _), (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== h || t[22] !== v
      ? ((y = (0, J.jsxs)(O, { children: [h, v] })), (t[21] = h), (t[22] = v), (t[23] = y))
      : (y = t[23]),
    y
  );
}
var K,
  q,
  J,
  fe,
  pe,
  me = e(() => {
    ((K = F()),
      H(),
      y(),
      (q = t(o(), 1)),
      C(),
      a(),
      w(),
      P(),
      _(),
      l(),
      R(),
      B(),
      S(),
      (J = j()),
      (fe = 3e3),
      (pe = 3e3));
  });
function he() {
  let e = (0, ge.c)(10),
    t = i(ie),
    r = ee(),
    a = oe(n),
    o = x(c.reviewMode);
  if (!a) return null;
  let s, l;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, _e.jsx)(f, {
        id: `settings.git.reviewMode.label`,
        defaultMessage: `Disable Git-Based Review`,
        description: `Label for the Git Review mode setting`,
      })),
      (l = (0, _e.jsx)(f, {
        id: `settings.git.reviewMode.description`,
        defaultMessage: `Only show "Last Turn" in the Review panel and disable Unstaged/Staged/Branch to avoid git operations`,
        description: `Description for the Git Review mode setting`,
      })),
      (e[0] = s),
      (e[1] = l))
    : ((s = e[0]), (l = e[1]));
  let u;
  e[2] === r
    ? (u = e[3])
    : ((u = r.formatMessage({
        id: `settings.git.reviewMode.ariaLabel`,
        defaultMessage: `Disable Git-Based Review`,
        description: `Accessible label for the Git-Based Review toggle`,
      })),
      (e[2] = r),
      (e[3] = u));
  let d = o === `last-turn-only`,
    p;
  e[4] === t
    ? (p = e[5])
    : ((p = (e) => {
        re(t, c.reviewMode, e ? `last-turn-only` : `full`);
      }),
      (e[4] = t),
      (e[5] = p));
  let m;
  return (
    e[6] !== u || e[7] !== d || e[8] !== p
      ? ((m = (0, _e.jsx)(V, {
          label: s,
          description: l,
          control: (0, _e.jsx)(te, { ariaLabel: u, checked: d, onChange: p }),
        })),
        (e[6] = u),
        (e[7] = d),
        (e[8] = p),
        (e[9] = m))
      : (m = e[9]),
    m
  );
}
var ge,
  _e,
  ve = e(() => {
    ((ge = F()), y(), s(), C(), r(), L(), R(), B(), D(), A(), (_e = j()));
  }),
  Y,
  ye = e(() => {
    (C(),
      (Y = W({
        branchPrefix: {
          id: `settings.git.branchPrefix.label`,
          defaultMessage: `Branch prefix`,
          description: `Label for git branch prefix setting`,
        },
        alwaysForcePush: {
          id: `settings.git.forcePush.label`,
          defaultMessage: `Always force push`,
          description: `Label for a Git setting that makes ChatGPT use --force-with-lease when pushing`,
        },
        createDraftPullRequests: {
          id: `settings.git.createDraftPullRequest.label`,
          defaultMessage: `Create draft pull requests`,
          description: `Label for create draft pull requests toggle`,
        },
        pullRequestMergeMethod: {
          id: `settings.git.pullRequestMergeMethod.label`,
          defaultMessage: `Pull request merge method`,
          description: `Label for the setting that chooses between GitHub merge-commit and squash-merge strategies`,
        },
        merge: {
          id: `settings.git.pullRequestMergeMethod.merge`,
          defaultMessage: `Merge`,
          description: `Option selecting GitHub's merge-commit strategy, which preserves the pull request's commits and creates a merge commit`,
        },
        squash: {
          id: `settings.git.pullRequestMergeMethod.squash`,
          defaultMessage: `Squash`,
          description: `Option selecting GitHub's squash-merge strategy, which combines the pull request's commits into one commit`,
        },
        commitInstructions: {
          id: `settings.git.commitInstructions.label`,
          defaultMessage: `Commit instructions`,
          description: `Heading for guidance that shapes the Git commit messages generated by ChatGPT`,
        },
        pullRequestInstructions: {
          id: `settings.git.prInstructions.label`,
          defaultMessage: `Pull request instructions`,
          description: `Label for pull request instructions`,
        },
      })));
  });
function be() {
  let e = (0, xe.c)(49),
    t = i(ie),
    n = ee(),
    r = x(c.pullRequestWatchAutoMerge),
    a = x(c.pullRequestWatchInstructions),
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { id: `pull-request-watch-preferences` }), (e[0] = o))
    : (o = e[0]);
  let s;
  e[1] === t
    ? (s = e[2])
    : ((s = async (e) => {
        (await le(e), await p(t.queryClient, I(`list-automations`)));
      }),
      (e[1] = t),
      (e[2] = s));
  let l;
  e[3] !== n || e[4] !== t
    ? ((l = () => {
        t.get(M).danger(
          n.formatMessage({
            id: `settings.git.pullRequestWatch.updateActive.error`,
            defaultMessage: `Failed to update active pull request watchers`,
            description: `Toast shown when saved pull request watch preferences cannot be applied to active watchers`,
          }),
        );
      }),
      (e[3] = n),
      (e[4] = t),
      (e[5] = l))
    : (l = e[5]);
  let u;
  e[6] !== s || e[7] !== l
    ? ((u = { scope: o, mutationFn: s, onError: l }), (e[6] = s), (e[7] = l), (e[8] = u))
    : (u = e[8]);
  let d = ae(u),
    m;
  e[9] === d
    ? (m = e[10])
    : ((m = (e) => {
        d.mutate(e);
      }),
      (e[9] = d),
      (e[10] = m));
  let h = m,
    g;
  e[11] === t
    ? (g = e[12])
    : ((g = (e) => re(t, c.pullRequestWatchAutoMerge, e)), (e[11] = t), (e[12] = g));
  let _;
  e[13] !== a || e[14] !== n || e[15] !== t || e[16] !== h
    ? ((_ = (e, r) => {
        (h({ autoMerge: r, instructions: a }),
          t.get(M).success(
            r
              ? n.formatMessage({
                  id: `settings.git.pullRequestWatch.autoMerge.enabled`,
                  defaultMessage: `Automatic PR merging enabled`,
                  description: `Toast shown when automatic merging for watched pull requests is enabled`,
                })
              : n.formatMessage({
                  id: `settings.git.pullRequestWatch.autoMerge.disabled`,
                  defaultMessage: `Automatic PR merging disabled`,
                  description: `Toast shown when automatic merging for watched pull requests is disabled`,
                }),
          ));
      }),
      (e[13] = a),
      (e[14] = n),
      (e[15] = t),
      (e[16] = h),
      (e[17] = _))
    : (_ = e[17]);
  let v;
  e[18] !== n || e[19] !== t
    ? ((v = () => {
        t.get(M).danger(
          n.formatMessage({
            id: `settings.git.pullRequestWatch.autoMerge.error`,
            defaultMessage: `Failed to save automatic PR merging`,
            description: `Toast shown when automatic merging for watched pull requests cannot be saved`,
          }),
        );
      }),
      (e[18] = n),
      (e[19] = t),
      (e[20] = v))
    : (v = e[20]);
  let y;
  e[21] !== g || e[22] !== _ || e[23] !== v
    ? ((y = { mutationFn: g, onSuccess: _, onError: v }),
      (e[21] = g),
      (e[22] = _),
      (e[23] = v),
      (e[24] = y))
    : (y = e[24]);
  let b = ae(y),
    S;
  e[25] !== r || e[26] !== h
    ? ((S = (e) => {
        h({ autoMerge: r, instructions: e });
      }),
      (e[25] = r),
      (e[26] = h),
      (e[27] = S))
    : (S = e[27]);
  let C;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(f, {
        id: `settings.git.pullRequestWatch.title`,
        defaultMessage: `Watch and fix pull requests`,
        description: `Title for settings that control watching and automatically fixing pull requests`,
      })),
      (e[28] = C))
    : (C = e[28]);
  let w;
  e[29] === n
    ? (w = e[30])
    : ((w = n.formatMessage({
        id: `settings.git.pullRequestWatch.instructions.placeholder`,
        defaultMessage: `For example: Comment /merge after checks pass and approve unrelated Chromatic changes…`,
        description: `Placeholder example for custom instructions that control pull request monitoring and merging`,
      })),
      (e[29] = n),
      (e[30] = w));
  let T;
  e[31] === n
    ? (T = e[32])
    : ((T = n.formatMessage({
        id: `settings.git.pullRequestWatch.instructions.ariaLabel`,
        defaultMessage: `Pull request watch instructions`,
        description: `Accessible label for custom instructions that control pull request monitoring`,
      })),
      (e[31] = n),
      (e[32] = T));
  let E, D;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(f, {
        id: `settings.git.pullRequestWatch.autoMerge.label`,
        defaultMessage: `Auto-merge when ready`,
        description: `Label for automatically merging watched pull requests after all merge requirements pass`,
      })),
      (D = (0, X.jsx)(f, {
        id: `settings.git.pullRequestWatch.autoMerge.description`,
        defaultMessage: `Continue watching until the pull request is merged`,
        description: `Description explaining that automatic pull request monitoring continues until the pull request merges`,
      })),
      (e[33] = E),
      (e[34] = D))
    : ((E = e[33]), (D = e[34]));
  let O = b.isPending,
    k;
  e[35] === b ? (k = e[36]) : ((k = (e) => b.mutate(e)), (e[35] = b), (e[36] = k));
  let A;
  e[37] === n
    ? (A = e[38])
    : ((A = n.formatMessage({
        id: `settings.git.pullRequestWatch.autoMerge.ariaLabel`,
        defaultMessage: `Auto-merge when ready`,
        description: `Accessible label for automatically merging watched pull requests`,
      })),
      (e[37] = n),
      (e[38] = A));
  let j;
  e[39] !== r || e[40] !== b.isPending || e[41] !== k || e[42] !== A
    ? ((j = (0, X.jsx)(ne, {
        children: (0, X.jsx)(V, {
          label: E,
          description: D,
          control: (0, X.jsx)(te, { checked: r, disabled: O, onChange: k, ariaLabel: A }),
        }),
      })),
      (e[39] = r),
      (e[40] = b.isPending),
      (e[41] = k),
      (e[42] = A),
      (e[43] = j))
    : (j = e[43]);
  let N;
  return (
    e[44] !== w || e[45] !== T || e[46] !== j || e[47] !== S
      ? ((N = (0, X.jsx)(ue, {
          onSaved: S,
          setting: c.pullRequestWatchInstructions,
          title: C,
          placeholder: w,
          ariaLabel: T,
          rows: 5,
          children: j,
        })),
        (e[44] = w),
        (e[45] = T),
        (e[46] = j),
        (e[47] = S),
        (e[48] = N))
      : (N = e[48]),
    N
  );
}
var xe,
  X,
  Se = e(() => {
    ((xe = F()), H(), y(), s(), C(), P(), r(), ce(), m(), R(), B(), me(), D(), g(), k(), (X = j()));
  });
function Ce() {
  let e = (0, we.c)(21),
    t = i(ie),
    n = ee(),
    r = x(b.reviewDelivery),
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(f, {
        id: `settings.general.reviewDelivery.label`,
        defaultMessage: `Review delivery`,
        description: `Label for choosing whether a requested code review appears in the current chat or in a separate review chat`,
      })),
      (o = (0, Z.jsx)(f, {
        id: `settings.general.reviewDelivery.description`,
        defaultMessage: `Start /review in the current chat when possible or launch a separate review chat`,
        description: `Explains that the setting chooses between starting /review in the current chat and opening a separate review chat`,
      })),
      (e[0] = a),
      (e[1] = o))
    : ((a = e[0]), (o = e[1]));
  let s = r ?? `inline`,
    c;
  e[2] === t
    ? (c = e[3])
    : ((c = (e) => {
        re(t, b.reviewDelivery, e);
      }),
      (e[2] = t),
      (e[3] = c));
  let l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(f, { ...Q.inline })), (e[4] = l))
    : (l = e[4]);
  let u;
  e[5] === n ? (u = e[6]) : ((u = n.formatMessage(Q.inline)), (e[5] = n), (e[6] = u));
  let d;
  e[7] === u
    ? (d = e[8])
    : ((d = { id: `inline`, label: l, ariaLabel: u }), (e[7] = u), (e[8] = d));
  let p;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(f, { ...Q.detached })), (e[9] = p))
    : (p = e[9]);
  let m;
  e[10] === n ? (m = e[11]) : ((m = n.formatMessage(Q.detached)), (e[10] = n), (e[11] = m));
  let h;
  e[12] === m
    ? (h = e[13])
    : ((h = { id: `detached`, label: p, ariaLabel: m }), (e[12] = m), (e[13] = h));
  let g;
  e[14] !== d || e[15] !== h ? ((g = [d, h]), (e[14] = d), (e[15] = h), (e[16] = g)) : (g = e[16]);
  let _;
  return (
    e[17] !== g || e[18] !== s || e[19] !== c
      ? ((_ = (0, Z.jsx)(V, {
          label: a,
          description: o,
          control: (0, Z.jsx)(se, { selectedId: s, onSelect: c, options: g }),
        })),
        (e[17] = g),
        (e[18] = s),
        (e[19] = c),
        (e[20] = _))
      : (_ = e[20]),
    _
  );
}
var we,
  Z,
  Q,
  Te = e(() => {
    ((we = F()),
      y(),
      s(),
      C(),
      G(),
      R(),
      B(),
      D(),
      (Z = j()),
      (Q = W({
        inline: {
          id: `settings.general.reviewDelivery.inline`,
          defaultMessage: `Inline`,
          description: `Option label for starting a requested code review in the current chat when possible`,
        },
        detached: {
          id: `settings.general.reviewDelivery.detached`,
          defaultMessage: `Detached`,
          description: `Option label for opening a requested code review in a separate review chat instead of the current chat`,
        },
      })));
  });
function Ee() {
  let e = (0, De.c)(135),
    t = i(ie),
    n = ee(),
    r = oe(`2764989143`),
    [a, o] = (0, Oe.useState)(null),
    s = x(c.branchPrefix),
    l = x(c.alwaysForcePush),
    p = x(c.createPullRequestAsDraft),
    m = x(c.pullRequestMergeMethod),
    g;
  e[0] === t ? (g = e[1]) : ((g = (e) => re(t, c.branchPrefix, e)), (e[0] = t), (e[1] = g));
  let _, y;
  e[2] !== n || e[3] !== t
    ? ((_ = () => {
        (o(null),
          t.get(M).success(
            n.formatMessage({
              id: `settings.git.branchPrefix.save.success`,
              defaultMessage: `Saved branch prefix`,
              description: `Toast shown when git branch prefix is saved`,
            }),
          ));
      }),
      (y = () => {
        t.get(M).danger(
          n.formatMessage({
            id: `settings.git.branchPrefix.save.error`,
            defaultMessage: `Failed to save branch prefix`,
            description: `Toast shown when git branch prefix save fails`,
          }),
        );
      }),
      (e[2] = n),
      (e[3] = t),
      (e[4] = _),
      (e[5] = y))
    : ((_ = e[4]), (y = e[5]));
  let b;
  e[6] !== g || e[7] !== _ || e[8] !== y
    ? ((b = { mutationFn: g, onSuccess: _, onError: y }),
      (e[6] = g),
      (e[7] = _),
      (e[8] = y),
      (e[9] = b))
    : (b = e[9]);
  let S = ae(b),
    C;
  e[10] === t ? (C = e[11]) : ((C = (e) => re(t, c.alwaysForcePush, e)), (e[10] = t), (e[11] = C));
  let w, T;
  e[12] !== n || e[13] !== t
    ? ((w = (e, r) => {
        r
          ? t.get(M).success(
              n.formatMessage({
                id: `settings.git.forcePush.save.enabled`,
                defaultMessage: `Always force push enabled`,
                description: `Toast shown when the always force push toggle is enabled`,
              }),
            )
          : t.get(M).success(
              n.formatMessage({
                id: `settings.git.forcePush.save.disabled`,
                defaultMessage: `Always force push disabled`,
                description: `Toast shown when the always force push toggle is disabled`,
              }),
            );
      }),
      (T = () => {
        t.get(M).danger(
          n.formatMessage({
            id: `settings.git.forcePush.save.error`,
            defaultMessage: `Failed to save force push setting`,
            description: `Toast shown when saving the always force push toggle fails`,
          }),
        );
      }),
      (e[12] = n),
      (e[13] = t),
      (e[14] = w),
      (e[15] = T))
    : ((w = e[14]), (T = e[15]));
  let E;
  e[16] !== C || e[17] !== w || e[18] !== T
    ? ((E = { mutationFn: C, onSuccess: w, onError: T }),
      (e[16] = C),
      (e[17] = w),
      (e[18] = T),
      (e[19] = E))
    : (E = e[19]);
  let D = ae(E),
    k;
  e[20] === t
    ? (k = e[21])
    : ((k = (e) => re(t, c.pullRequestMergeMethod, e)), (e[20] = t), (e[21] = k));
  let A, j;
  e[22] !== n || e[23] !== t
    ? ((j = () => {
        t.get(M).success(
          n.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.success`,
            defaultMessage: `Saved pull request merge method`,
            description: `Toast shown when the pull request merge method setting is saved`,
          }),
        );
      }),
      (A = () => {
        t.get(M).danger(
          n.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.error`,
            defaultMessage: `Failed to save pull request merge method`,
            description: `Toast shown when saving the pull request merge method setting fails`,
          }),
        );
      }),
      (e[22] = n),
      (e[23] = t),
      (e[24] = A),
      (e[25] = j))
    : ((A = e[24]), (j = e[25]));
  let N;
  e[26] !== A || e[27] !== k || e[28] !== j
    ? ((N = { mutationFn: k, onSuccess: j, onError: A }),
      (e[26] = A),
      (e[27] = k),
      (e[28] = j),
      (e[29] = N))
    : (N = e[29]);
  let P = ae(N),
    F;
  e[30] === t
    ? (F = e[31])
    : ((F = (e) => re(t, c.createPullRequestAsDraft, e)), (e[30] = t), (e[31] = F));
  let I, L;
  e[32] !== n || e[33] !== t
    ? ((I = (e, r) => {
        r
          ? t.get(M).success(
              n.formatMessage({
                id: `settings.git.createDraftPullRequest.save.enabled`,
                defaultMessage: `Create draft pull requests enabled`,
                description: `Toast shown when the draft pull request toggle is enabled`,
              }),
            )
          : t.get(M).success(
              n.formatMessage({
                id: `settings.git.createDraftPullRequest.save.disabled`,
                defaultMessage: `Create draft pull requests disabled`,
                description: `Toast shown when the draft pull request toggle is disabled`,
              }),
            );
      }),
      (L = () => {
        t.get(M).danger(
          n.formatMessage({
            id: `settings.git.createDraftPullRequest.save.error`,
            defaultMessage: `Failed to save draft pull request setting`,
            description: `Toast shown when saving the draft pull request toggle fails`,
          }),
        );
      }),
      (e[32] = n),
      (e[33] = t),
      (e[34] = I),
      (e[35] = L))
    : ((I = e[34]), (L = e[35]));
  let R;
  e[36] !== F || e[37] !== I || e[38] !== L
    ? ((R = { mutationFn: F, onSuccess: I, onError: L }),
      (e[36] = F),
      (e[37] = I),
      (e[38] = L),
      (e[39] = R))
    : (R = e[39]);
  let z = ae(R),
    B = s,
    H = a ?? B,
    U = a != null && a !== B,
    W = S.isPending,
    G = D.isPending,
    ce = z.isPending,
    le = P.isPending,
    de;
  e[40] !== H || e[41] !== W || e[42] !== U || e[43] !== S
    ? ((de = () => {
        !U || W || S.mutate(H);
      }),
      (e[40] = H),
      (e[41] = W),
      (e[42] = U),
      (e[43] = S),
      (e[44] = de))
    : (de = e[44]);
  let K = de,
    q;
  e[45] !== D || e[46] !== G
    ? ((q = (e) => {
        G || D.mutate(e);
      }),
      (e[45] = D),
      (e[46] = G),
      (e[47] = q))
    : (q = e[47]);
  let J = q,
    fe;
  e[48] !== z || e[49] !== ce
    ? ((fe = (e) => {
        ce || z.mutate(e);
      }),
      (e[48] = z),
      (e[49] = ce),
      (e[50] = fe))
    : (fe = e[50]);
  let pe = fe,
    me;
  e[51] !== le || e[52] !== m || e[53] !== P
    ? ((me = (e) => {
        le || (e !== m && P.mutate(e));
      }),
      (e[51] = le),
      (e[52] = m),
      (e[53] = P),
      (e[54] = me))
    : (me = e[54]);
  let ge = me,
    _e = U && !W,
    ve;
  e[55] === K
    ? (ve = e[56])
    : ((ve = (e) => {
        (e.preventDefault(), K());
      }),
      (e[55] = K),
      (e[56] = ve));
  let ye;
  (e[57] !== _e || e[58] !== ve
    ? ((ye = { accelerator: `CmdOrCtrl+S`, enabled: _e, onKeyDown: ve }),
      (e[57] = _e),
      (e[58] = ve),
      (e[59] = ye))
    : (ye = e[59]),
    h(ye));
  let xe;
  e[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, $.jsx)(u, { slug: `git-settings` })), (e[60] = xe))
    : (xe = e[60]);
  let X;
  e[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, $.jsx)(he, {})), (e[61] = X))
    : (X = e[61]);
  let Se, we;
  e[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, $.jsx)(f, { ...Y.branchPrefix })),
      (we = (0, $.jsx)(f, {
        id: `settings.git.branchPrefix.description`,
        defaultMessage: `Prefix used when ChatGPT creates new branches`,
        description: `Description for git branch prefix setting`,
      })),
      (e[62] = Se),
      (e[63] = we))
    : ((Se = e[62]), (we = e[63]));
  let Z;
  e[64] !== W || e[65] !== B
    ? ((Z = (e) => {
        if (W) return;
        let t = e.target.value;
        o(t === B ? null : t);
      }),
      (e[64] = W),
      (e[65] = B),
      (e[66] = Z))
    : (Z = e[66]);
  let Q;
  e[67] === n
    ? (Q = e[68])
    : ((Q = n.formatMessage({
        id: `settings.git.branchPrefix.placeholder`,
        defaultMessage: `codex/`,
        description: `Placeholder for git branch prefix input`,
      })),
      (e[67] = n),
      (e[68] = Q));
  let Te;
  e[69] === n
    ? (Te = e[70])
    : ((Te = n.formatMessage({
        id: `settings.git.branchPrefix.ariaLabel`,
        defaultMessage: `Branch prefix`,
        description: `Aria label for git branch prefix input`,
      })),
      (e[69] = n),
      (e[70] = Te));
  let Ee;
  e[71] !== H || e[72] !== K || e[73] !== W || e[74] !== Z || e[75] !== Q || e[76] !== Te
    ? ((Ee = (0, $.jsx)(V, {
        label: Se,
        description: we,
        control: (0, $.jsx)(`div`, {
          className: `w-56 max-w-full`,
          children: (0, $.jsx)(d, {
            value: H,
            onChange: Z,
            onBlur: K,
            placeholder: Q,
            "aria-label": Te,
            disabled: W,
          }),
        }),
      })),
      (e[71] = H),
      (e[72] = K),
      (e[73] = W),
      (e[74] = Z),
      (e[75] = Q),
      (e[76] = Te),
      (e[77] = Ee))
    : (Ee = e[77]);
  let ke;
  e[78] !== ge || e[79] !== n || e[80] !== le || e[81] !== r || e[82] !== m
    ? ((ke = r
        ? (0, $.jsx)(V, {
            label: (0, $.jsx)(f, { ...Y.pullRequestMergeMethod }),
            description: (0, $.jsx)(f, {
              id: `settings.git.pullRequestMergeMethod.description`,
              defaultMessage: `Choose how ChatGPT merges pull requests`,
              description: `Supporting text for the setting that controls which GitHub merge strategy ChatGPT uses for pull requests`,
            }),
            control: (0, $.jsx)(se, {
              ariaLabel: n.formatMessage({
                id: `settings.git.pullRequestMergeMethod.ariaLabel`,
                defaultMessage: `Pull request merge method`,
                description: `Accessible label for pull request merge method selector`,
              }),
              selectedId: m,
              onSelect: ge,
              options: [
                {
                  id: `merge`,
                  label: (0, $.jsx)(f, { ...Y.merge }),
                  ariaLabel: n.formatMessage(Y.merge),
                  disabled: le,
                },
                {
                  id: `squash`,
                  label: (0, $.jsx)(f, { ...Y.squash }),
                  ariaLabel: n.formatMessage(Y.squash),
                  disabled: le,
                },
              ],
            }),
          })
        : null),
      (e[78] = ge),
      (e[79] = n),
      (e[80] = le),
      (e[81] = r),
      (e[82] = m),
      (e[83] = ke))
    : (ke = e[83]);
  let Ae, je;
  e[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(f, { ...Y.alwaysForcePush })),
      (je = (0, $.jsx)(f, {
        id: `settings.git.forcePush.description`,
        defaultMessage: `Use --force-with-lease when pushing from ChatGPT`,
        description: `Explains that enabling this Git setting makes ChatGPT use --force-with-lease when it pushes`,
      })),
      (e[84] = Ae),
      (e[85] = je))
    : ((Ae = e[84]), (je = e[85]));
  let Me;
  e[86] === J
    ? (Me = e[87])
    : ((Me = (e) => {
        J(e);
      }),
      (e[86] = J),
      (e[87] = Me));
  let Ne;
  e[88] === n
    ? (Ne = e[89])
    : ((Ne = n.formatMessage({
        id: `settings.git.forcePush.ariaLabel`,
        defaultMessage: `Always force push`,
        description: `Accessible label for toggling whether ChatGPT uses --force-with-lease for Git pushes`,
      })),
      (e[88] = n),
      (e[89] = Ne));
  let Pe;
  e[90] !== l || e[91] !== G || e[92] !== Me || e[93] !== Ne
    ? ((Pe = (0, $.jsx)(V, {
        label: Ae,
        description: je,
        control: (0, $.jsx)(te, { checked: l, disabled: G, onChange: Me, ariaLabel: Ne }),
      })),
      (e[90] = l),
      (e[91] = G),
      (e[92] = Me),
      (e[93] = Ne),
      (e[94] = Pe))
    : (Pe = e[94]);
  let Fe, Ie;
  e[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, $.jsx)(f, { ...Y.createDraftPullRequests })),
      (Ie = (0, $.jsx)(f, {
        id: `settings.git.createDraftPullRequest.description`,
        defaultMessage: `Use draft pull requests by default when creating PRs from ChatGPT`,
        description: `Description for create draft pull requests toggle`,
      })),
      (e[95] = Fe),
      (e[96] = Ie))
    : ((Fe = e[95]), (Ie = e[96]));
  let Le;
  e[97] === pe
    ? (Le = e[98])
    : ((Le = (e) => {
        pe(e);
      }),
      (e[97] = pe),
      (e[98] = Le));
  let Re;
  e[99] === n
    ? (Re = e[100])
    : ((Re = n.formatMessage({
        id: `settings.git.createDraftPullRequest.ariaLabel`,
        defaultMessage: `Create draft pull requests`,
        description: `Aria label for create draft pull requests toggle`,
      })),
      (e[99] = n),
      (e[100] = Re));
  let ze;
  e[101] !== p || e[102] !== ce || e[103] !== Le || e[104] !== Re
    ? ((ze = (0, $.jsx)(V, {
        label: Fe,
        description: Ie,
        control: (0, $.jsx)(te, { checked: p, disabled: ce, onChange: Le, ariaLabel: Re }),
      })),
      (e[101] = p),
      (e[102] = ce),
      (e[103] = Le),
      (e[104] = Re),
      (e[105] = ze))
    : (ze = e[105]);
  let Be;
  e[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(Ce, {}) })), (e[106] = Be))
    : (Be = e[106]);
  let Ve;
  e[107] !== Ee || e[108] !== ke || e[109] !== Pe || e[110] !== ze
    ? ((Ve = (0, $.jsx)(O, {
        children: (0, $.jsx)(O.Content, {
          children: (0, $.jsxs)(ne, { children: [X, Ee, ke, Pe, ze, Be] }),
        }),
      })),
      (e[107] = Ee),
      (e[108] = ke),
      (e[109] = Pe),
      (e[110] = ze),
      (e[111] = Ve))
    : (Ve = e[111]);
  let He;
  e[112] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(be, {}) })), (e[112] = He))
    : (He = e[112]);
  let Ue, We;
  e[113] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (0, $.jsx)(f, { ...Y.commitInstructions })),
      (We = (0, $.jsx)(f, {
        id: `settings.git.commitInstructions.description`,
        defaultMessage: `Added to commit message generation prompts`,
        description: `Description for commit instructions`,
      })),
      (e[113] = Ue),
      (e[114] = We))
    : ((Ue = e[113]), (We = e[114]));
  let Ge;
  e[115] === n
    ? (Ge = e[116])
    : ((Ge = n.formatMessage({
        id: `settings.git.commitInstructions.placeholder`,
        defaultMessage: `Add commit message guidance…`,
        description: `Placeholder for commit instructions textarea`,
      })),
      (e[115] = n),
      (e[116] = Ge));
  let Ke;
  e[117] === n
    ? (Ke = e[118])
    : ((Ke = n.formatMessage({
        id: `settings.git.commitInstructions.ariaLabel`,
        defaultMessage: `Commit instructions`,
        description: `Aria label for commit instructions textarea`,
      })),
      (e[117] = n),
      (e[118] = Ke));
  let qe;
  e[119] !== Ge || e[120] !== Ke
    ? ((qe = (0, $.jsx)(ue, {
        setting: c.commitInstructions,
        title: Ue,
        subtitle: We,
        placeholder: Ge,
        ariaLabel: Ke,
      })),
      (e[119] = Ge),
      (e[120] = Ke),
      (e[121] = qe))
    : (qe = e[121]);
  let Je, Ye;
  e[122] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, $.jsx)(f, { ...Y.pullRequestInstructions })),
      (Ye = (0, $.jsx)(f, {
        id: `settings.git.prInstructions.description`,
        defaultMessage: `Added to PR title/description generation prompts`,
        description: `Description for pull request instructions`,
      })),
      (e[122] = Je),
      (e[123] = Ye))
    : ((Je = e[122]), (Ye = e[123]));
  let Xe;
  e[124] === n
    ? (Xe = e[125])
    : ((Xe = n.formatMessage({
        id: `settings.git.prInstructions.placeholder`,
        defaultMessage: `Add pull request guidance…`,
        description: `Placeholder for pull request instructions textarea`,
      })),
      (e[124] = n),
      (e[125] = Xe));
  let Ze;
  e[126] === n
    ? (Ze = e[127])
    : ((Ze = n.formatMessage({
        id: `settings.git.prInstructions.ariaLabel`,
        defaultMessage: `Pull request instructions`,
        description: `Aria label for pull request instructions textarea`,
      })),
      (e[126] = n),
      (e[127] = Ze));
  let Qe;
  e[128] !== Xe || e[129] !== Ze
    ? ((Qe = (0, $.jsx)(ue, {
        setting: c.pullRequestInstructions,
        title: Je,
        subtitle: Ye,
        placeholder: Xe,
        ariaLabel: Ze,
      })),
      (e[128] = Xe),
      (e[129] = Ze),
      (e[130] = Qe))
    : (Qe = e[130]);
  let $e;
  return (
    e[131] !== Ve || e[132] !== qe || e[133] !== Qe
      ? (($e = (0, $.jsxs)(v, { title: xe, children: [Ve, He, qe, Qe] })),
        (e[131] = Ve),
        (e[132] = qe),
        (e[133] = Qe),
        (e[134] = $e))
      : ($e = e[134]),
    $e
  );
}
var De, Oe, $;
e(() => {
  ((De = F()),
    H(),
    y(),
    s(),
    (Oe = t(o(), 1)),
    C(),
    G(),
    w(),
    P(),
    r(),
    l(),
    R(),
    B(),
    E(),
    me(),
    ve(),
    ye(),
    Se(),
    Te(),
    S(),
    D(),
    T(),
    g(),
    A(),
    ($ = j()));
})();
export { Ee as GitSettings };
//# sourceMappingURL=git-settings-19e05f7b3976.js.map
