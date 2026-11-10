import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  ADt as r,
  Cot as i,
  Ez as a,
  Gct as o,
  IDt as s,
  Iot as c,
  Ixt as l,
  JC as u,
  Lot as d,
  MO as f,
  Pft as p,
  Pxt as m,
  VDt as ee,
  Wnt as h,
  b0 as g,
  hot as _,
  ik as v,
  irt as y,
  iw as b,
  jDt as x,
  jO as te,
  kz as S,
  lot as C,
  qC as ne,
  qnt as w,
  rk as T,
  rst as E,
  srt as D,
  t3 as O,
  tw as k,
  vzt as A,
  wot as j,
  xMt as M,
  y0 as N,
  yzt as P,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as F,
  CWt as re,
  DPn as I,
  EPn as L,
  Ek as R,
  TPn as ie,
  Tk as z,
  VPr as B,
  Xd as V,
  Yd as ae,
  _F as H,
  aBt as U,
  bWt as W,
  eDr as G,
  eF as oe,
  hF as se,
  nBt as ce,
  nDr as le,
  tF as ue,
} from "./app-initial-5851df3f6cb1.js";
import { n as de, o as fe } from "./pull-request-fix-automation-21ee49fbf8d6.js";
function pe(e) {
  let t = (0, he.c)(45),
    {
      ariaLabel: n,
      children: r,
      onSaved: a,
      placeholder: o,
      rows: s,
      savedValue: c,
      save: u,
      saveScope: f,
      subtitle: p,
      title: m,
    } = e,
    h = s === void 0 ? 6 : s,
    g = l(i),
    v = ee(),
    [y, b] = (0, K.useState)(null),
    [x, te] = (0, K.useState)(!1),
    S = (0, K.useRef)(null),
    C = (0, K.useRef)(null),
    ne = (0, K.useRef)(null),
    w = (0, K.useRef)(null),
    T = `autosaving-instructions-${f}`,
    E;
  t[0] === T ? (E = t[1]) : ((E = { id: T }), (t[0] = T), (t[1] = E));
  let D;
  t[2] === u
    ? (D = t[3])
    : ((D = (e) => {
        let { value: t } = e;
        return u(t);
      }),
      (t[2] = u),
      (t[3] = D));
  let O;
  t[4] === a
    ? (O = t[5])
    : ((O = (e, t) => {
        (S.current === t && (S.current = null),
          b((e) => (e === t ? null : e)),
          te(!0),
          a?.(t.value),
          w.current != null && window.clearTimeout(w.current),
          (w.current = window.setTimeout(() => {
            ((w.current = null), te(!1));
          }, _e)));
      }),
      (t[4] = a),
      (t[5] = O));
  let k;
  t[6] !== v || t[7] !== g
    ? ((k = (e, t) => {
        ((ne.current = t),
          g
            .get(_)
            .danger(
              v.formatMessage({
                id: `settings.git.instructions.autoSave.error`,
                defaultMessage: `Failed to save instructions`,
                description: `Error shown when automatically saving custom instructions fails`,
              }),
              { errorAnalytics: { toastId: `settings.git.instructions.autoSave.error` } },
            ));
      }),
      (t[6] = v),
      (t[7] = g),
      (t[8] = k))
    : (k = t[8]);
  let A;
  t[9] !== E || t[10] !== D || t[11] !== O || t[12] !== k
    ? ((A = { scope: E, mutationFn: D, onSuccess: O, onError: k }),
      (t[9] = E),
      (t[10] = D),
      (t[11] = O),
      (t[12] = k),
      (t[13] = A))
    : (A = t[13]);
  let j = d(A),
    M = y?.value ?? c,
    N = y != null,
    P;
  t[14] === j
    ? (P = t[15])
    : ((P = () => {
        S.current != null &&
          S.current !== C.current &&
          S.current !== ne.current &&
          ((C.current = S.current), j.mutate(S.current));
      }),
      (t[14] = j),
      (t[15] = P));
  let F = (0, K.useEffectEvent)(P),
    I;
  t[16] !== y || t[17] !== F
    ? ((I = () => {
        if (y == null) return;
        let e = window.setTimeout(() => F(), ge);
        return () => window.clearTimeout(e);
      }),
      (t[16] = y),
      (t[17] = F),
      (t[18] = I))
    : (I = t[18]);
  let L;
  (t[19] === y ? (L = t[20]) : ((L = [y]), (t[19] = y), (t[20] = L)), (0, K.useEffect)(I, L));
  let R;
  t[21] === F
    ? (R = t[22])
    : ((R = () => () => {
        (w.current != null && window.clearTimeout(w.current), F());
      }),
      (t[21] = F),
      (t[22] = R));
  let ie;
  (t[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((ie = []), (t[23] = ie)) : (ie = t[23]),
    (0, K.useEffect)(R, ie));
  let z;
  t[24] === j
    ? (z = t[25])
    : ((z = () => {
        S.current != null &&
          !j.isPending &&
          ((ne.current = null), (C.current = S.current), j.mutate(S.current));
      }),
      (t[24] = j),
      (t[25] = z));
  let B = z,
    V = N && !j.isPending,
    ae;
  t[26] === B
    ? (ae = t[27])
    : ((ae = (e) => {
        (e.preventDefault(), B());
      }),
      (t[26] = B),
      (t[27] = ae));
  let H;
  (t[28] !== V || t[29] !== ae
    ? ((H = { accelerator: `CmdOrCtrl+S`, enabled: V, onKeyDown: ae }),
      (t[28] = V),
      (t[29] = ae),
      (t[30] = H))
    : (H = t[30]),
    re(H));
  let U = `idle`;
  j.isPending ? (U = `saving`) : N ? (U = `dirty`) : x && (U = `saved`);
  let W;
  t[31] !== j.isPending || t[32] !== c
    ? ((W = (e) => {
        (te(!1),
          w.current != null && (window.clearTimeout(w.current), (w.current = null)),
          (ne.current = null),
          (S.current = e === c && !j.isPending ? null : { value: e }),
          b(S.current));
      }),
      (t[31] = j.isPending),
      (t[32] = c),
      (t[33] = W))
    : (W = t[33]);
  let G;
  return (
    t[34] !== U ||
    t[35] !== n ||
    t[36] !== r ||
    t[37] !== M ||
    t[38] !== o ||
    t[39] !== h ||
    t[40] !== B ||
    t[41] !== p ||
    t[42] !== W ||
    t[43] !== m
      ? ((G = (0, q.jsx)(me, {
          actionState: U,
          ariaLabel: n,
          currentValue: M,
          onChange: W,
          onSave: B,
          placeholder: o,
          rows: h,
          subtitle: p,
          title: m,
          children: r,
        })),
        (t[34] = U),
        (t[35] = n),
        (t[36] = r),
        (t[37] = M),
        (t[38] = o),
        (t[39] = h),
        (t[40] = B),
        (t[41] = p),
        (t[42] = W),
        (t[43] = m),
        (t[44] = G))
      : (G = t[44]),
    G
  );
}
function me(e) {
  let n = (0, he.c)(24),
    {
      actionState: r,
      ariaLabel: i,
      children: o,
      currentValue: c,
      onChange: l,
      onSave: u,
      placeholder: d,
      rows: f,
      subtitle: p,
      title: m,
    } = e,
    ee = f === void 0 ? 6 : f,
    h = null;
  if (r === `dirty` || r === `saving`) {
    let e = r === `saving`,
      i = r === `saving`,
      a;
    n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, q.jsx)(s, {
          id: `settings.git.instructions.autoSave.save`,
          defaultMessage: `Save`,
          description: `Button that immediately saves pending custom instruction changes`,
        })),
        (n[0] = a))
      : (a = n[0]);
    let o;
    (n[1] !== u || n[2] !== e || n[3] !== i
      ? ((o = (0, q.jsx)(t, {
          color: `secondary`,
          disabled: e,
          loading: i,
          onClick: u,
          size: `toolbar`,
          children: a,
        })),
        (n[1] = u),
        (n[2] = e),
        (n[3] = i),
        (n[4] = o))
      : (o = n[4]),
      (h = o));
  } else if (r === `saved`) {
    let e;
    (n[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsxs)(`span`, {
          className: `flex items-center gap-2 text-xs text-secondary`,
          "aria-live": `polite`,
          children: [
            (0, q.jsx)(a, { "aria-hidden": !1, legacyIcon: T, asset16: N, legacyClassName: `icon-2xs` }),
            (0, q.jsx)(s, {
              id: `settings.git.instructions.autoSave.saved`,
              defaultMessage: `Saved`,
              description: `Status shown after custom instruction changes are automatically saved`,
            }),
          ],
        })),
        (n[5] = e))
      : (e = n[5]),
      (h = e));
  }
  let g;
  n[6] !== h || n[7] !== p || n[8] !== m
    ? ((g = (0, q.jsx)(z.Header, { title: m, subtitle: p, actions: h })),
      (n[6] = h),
      (n[7] = p),
      (n[8] = m),
      (n[9] = g))
    : (g = n[9]);
  let _;
  n[10] === l
    ? (_ = n[11])
    : ((_ = (e) => {
        l(e.target.value);
      }),
      (n[10] = l),
      (n[11] = _));
  let v;
  n[12] !== i || n[13] !== c || n[14] !== d || n[15] !== ee || n[16] !== _
    ? ((v = (0, q.jsx)(L, { value: c, onChange: _, placeholder: d, "aria-label": i, rows: ee })),
      (n[12] = i),
      (n[13] = c),
      (n[14] = d),
      (n[15] = ee),
      (n[16] = _),
      (n[17] = v))
    : (v = n[17]);
  let y;
  n[18] !== o || n[19] !== v
    ? ((y = (0, q.jsxs)(z.Content, { children: [o, v] })), (n[18] = o), (n[19] = v), (n[20] = y))
    : (y = n[20]);
  let b;
  return (
    n[21] !== g || n[22] !== y
      ? ((b = (0, q.jsxs)(z, { children: [g, y] })), (n[21] = g), (n[22] = y), (n[23] = b))
      : (b = n[23]),
    b
  );
}
var he, K, q, ge, _e;
function ve() {
  return (ve = e(() => {
    ((he = A()),
      g(),
      c(),
      m(),
      (K = P()),
      x(),
      O(),
      S(),
      I(),
      C(),
      v(),
      W(),
      j(),
      R(),
      (q = M()),
      (ge = 3e3),
      (_e = 3e3));
  }))();
}
function ye(e) {
  let t = (0, be.c)(11),
    r,
    a;
  t[0] === e ? ((r = t[1]), (a = t[2])) : (({ setting: a, ...r } = e), (t[0] = e), (t[1] = r), (t[2] = a));
  let o = l(i),
    s = n(a),
    c;
  t[3] !== o || t[4] !== a ? ((c = (e) => w(o, a, e)), (t[3] = o), (t[4] = a), (t[5] = c)) : (c = t[5]);
  let u;
  return (
    t[6] !== r || t[7] !== s || t[8] !== a.key || t[9] !== c
      ? ((u = (0, xe.jsx)(pe, { ...r, savedValue: s, save: c, saveScope: a.key })),
        (t[6] = r),
        (t[7] = s),
        (t[8] = a.key),
        (t[9] = c),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
var be, xe;
function J() {
  return (J = e(() => {
    ((be = A()), m(), j(), h(), ve(), (xe = M()));
  }))();
}
function Se() {
  let e = (0, Ce.c)(11),
    t = l(i),
    r = ee(),
    a = le(ce),
    o = n(p.reviewMode);
  if (!a) return null;
  let c, u;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Y.jsx)(s, {
        id: `settings.git.reviewMode.label`,
        defaultMessage: `Disable Git-based diffs`,
        description: `Label for the setting that limits the Changes tab to last-turn diffs`,
      })),
      (u = (0, Y.jsx)(s, {
        id: `settings.git.reviewMode.description`,
        defaultMessage: `Only show "Last Turn" in the Changes panel and disable Unstaged/Staged/Branch to avoid git operations`,
        description: `Description for the setting that limits the Changes tab to last-turn diffs`,
      })),
      (e[0] = c),
      (e[1] = u))
    : ((c = e[0]), (u = e[1]));
  let d;
  e[2] === r
    ? (d = e[3])
    : ((d = r.formatMessage({
        id: `settings.git.reviewMode.ariaLabel`,
        defaultMessage: `Disable Git-based diffs`,
        description: `Accessible label for the toggle that limits the Changes tab to last-turn diffs`,
      })),
      (e[2] = r),
      (e[3] = d));
  let f = o === `last-turn-only`,
    m;
  e[4] !== r || e[5] !== t
    ? ((m = (e) => {
        w(t, p.reviewMode, e ? `last-turn-only` : `full`).catch(() => {
          t.get(_).danger(
            r.formatMessage({
              id: `settings.git.reviewMode.saveError`,
              defaultMessage: `Could not save Git diff setting`,
              description: `Error toast when saving the setting that disables Git-based diffs fails`,
            }),
            { errorAnalytics: { toastId: `settings.git.reviewMode.saveError` } },
          );
        });
      }),
      (e[4] = r),
      (e[5] = t),
      (e[6] = m))
    : (m = e[6]);
  let h;
  return (
    e[7] !== d || e[8] !== f || e[9] !== m
      ? ((h = (0, Y.jsx)(k, {
          label: c,
          description: u,
          control: (0, Y.jsx)(te, { ariaLabel: d, checked: f, onChange: m }),
        })),
        (e[7] = d),
        (e[8] = f),
        (e[9] = m),
        (e[10] = h))
      : (h = e[10]),
    h
  );
}
var Ce, Y;
function we() {
  return (we = e(() => {
    ((Ce = A()), m(), E(), x(), C(), f(), U(), j(), h(), b(), G(), (Y = M()));
  }))();
}
var X;
function Te() {
  return (Te = e(() => {
    (x(),
      (X = r({
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
  }))();
}
function Ee() {
  let e = (0, De.c)(49),
    t = l(i),
    r = ee(),
    a = n(p.pullRequestWatchAutoMerge),
    o = n(p.pullRequestWatchInstructions),
    c;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { id: `pull-request-watch-preferences` }), (e[0] = c))
    : (c = e[0]);
  let u;
  e[1] === t
    ? (u = e[2])
    : ((u = async (e) => {
        (await fe(e), await B(t.queryClient, y(`list-automations`)));
      }),
      (e[1] = t),
      (e[2] = u));
  let f;
  e[3] !== r || e[4] !== t
    ? ((f = () => {
        t.get(_).danger(
          r.formatMessage({
            id: `settings.git.pullRequestWatch.updateActive.error`,
            defaultMessage: `Failed to update active pull request watchers`,
            description: `Toast shown when saved pull request watch preferences cannot be applied to active watchers`,
          }),
          { errorAnalytics: { toastId: `settings.git.pullRequestWatch.updateActive.error` } },
        );
      }),
      (e[3] = r),
      (e[4] = t),
      (e[5] = f))
    : (f = e[5]);
  let m;
  e[6] !== u || e[7] !== f
    ? ((m = { scope: c, mutationFn: u, onError: f }), (e[6] = u), (e[7] = f), (e[8] = m))
    : (m = e[8]);
  let h = d(m),
    g;
  e[9] === h
    ? (g = e[10])
    : ((g = (e) => {
        h.mutate(e);
      }),
      (e[9] = h),
      (e[10] = g));
  let v = g,
    b;
  e[11] === t ? (b = e[12]) : ((b = (e) => w(t, p.pullRequestWatchAutoMerge, e)), (e[11] = t), (e[12] = b));
  let x;
  e[13] !== o || e[14] !== r || e[15] !== t || e[16] !== v
    ? ((x = (e, n) => {
        (v({ autoMerge: n, instructions: o }),
          t
            .get(_)
            .success(
              n
                ? r.formatMessage({
                    id: `settings.git.pullRequestWatch.autoMerge.enabled`,
                    defaultMessage: `Automatic PR merging enabled`,
                    description: `Toast shown when automatic merging for watched pull requests is enabled`,
                  })
                : r.formatMessage({
                    id: `settings.git.pullRequestWatch.autoMerge.disabled`,
                    defaultMessage: `Automatic PR merging disabled`,
                    description: `Toast shown when automatic merging for watched pull requests is disabled`,
                  }),
            ));
      }),
      (e[13] = o),
      (e[14] = r),
      (e[15] = t),
      (e[16] = v),
      (e[17] = x))
    : (x = e[17]);
  let S;
  e[18] !== r || e[19] !== t
    ? ((S = () => {
        t.get(_).danger(
          r.formatMessage({
            id: `settings.git.pullRequestWatch.autoMerge.error`,
            defaultMessage: `Failed to save automatic PR merging`,
            description: `Toast shown when automatic merging for watched pull requests cannot be saved`,
          }),
          { errorAnalytics: { toastId: `settings.git.pullRequestWatch.autoMerge.error` } },
        );
      }),
      (e[18] = r),
      (e[19] = t),
      (e[20] = S))
    : (S = e[20]);
  let C;
  e[21] !== b || e[22] !== x || e[23] !== S
    ? ((C = { mutationFn: b, onSuccess: x, onError: S }), (e[21] = b), (e[22] = x), (e[23] = S), (e[24] = C))
    : (C = e[24]);
  let T = d(C),
    E;
  e[25] !== a || e[26] !== v
    ? ((E = (e) => {
        v({ autoMerge: a, instructions: e });
      }),
      (e[25] = a),
      (e[26] = v),
      (e[27] = E))
    : (E = e[27]);
  let D;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(s, {
        id: `settings.git.pullRequestWatch.title`,
        defaultMessage: `Watch and fix pull requests`,
        description: `Title for settings that control watching and automatically fixing pull requests`,
      })),
      (e[28] = D))
    : (D = e[28]);
  let O;
  e[29] === r
    ? (O = e[30])
    : ((O = r.formatMessage({
        id: `settings.git.pullRequestWatch.instructions.placeholder`,
        defaultMessage: `For example: Comment /merge after checks pass and approve unrelated Chromatic changes…`,
        description: `Placeholder example for custom instructions that control pull request monitoring and merging`,
      })),
      (e[29] = r),
      (e[30] = O));
  let A;
  e[31] === r
    ? (A = e[32])
    : ((A = r.formatMessage({
        id: `settings.git.pullRequestWatch.instructions.ariaLabel`,
        defaultMessage: `Pull request watch instructions`,
        description: `Accessible label for custom instructions that control pull request monitoring`,
      })),
      (e[31] = r),
      (e[32] = A));
  let j, M;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(s, {
        id: `settings.git.pullRequestWatch.autoMerge.label`,
        defaultMessage: `Auto-merge when ready`,
        description: `Label for automatically merging watched pull requests after all merge requirements pass`,
      })),
      (M = (0, Z.jsx)(s, {
        id: `settings.git.pullRequestWatch.autoMerge.description`,
        defaultMessage: `Continue watching until the pull request is merged`,
        description: `Description explaining that automatic pull request monitoring continues until the pull request merges`,
      })),
      (e[33] = j),
      (e[34] = M))
    : ((j = e[33]), (M = e[34]));
  let N = T.isPending,
    P;
  e[35] === T ? (P = e[36]) : ((P = (e) => T.mutate(e)), (e[35] = T), (e[36] = P));
  let F;
  e[37] === r
    ? (F = e[38])
    : ((F = r.formatMessage({
        id: `settings.git.pullRequestWatch.autoMerge.ariaLabel`,
        defaultMessage: `Auto-merge when ready`,
        description: `Accessible label for automatically merging watched pull requests`,
      })),
      (e[37] = r),
      (e[38] = F));
  let re;
  e[39] !== a || e[40] !== T.isPending || e[41] !== P || e[42] !== F
    ? ((re = (0, Z.jsx)(ne, {
        children: (0, Z.jsx)(k, {
          label: j,
          description: M,
          control: (0, Z.jsx)(te, { checked: a, disabled: N, onChange: P, ariaLabel: F }),
        }),
      })),
      (e[39] = a),
      (e[40] = T.isPending),
      (e[41] = P),
      (e[42] = F),
      (e[43] = re))
    : (re = e[43]);
  let I;
  return (
    e[44] !== O || e[45] !== A || e[46] !== re || e[47] !== E
      ? ((I = (0, Z.jsx)(ye, {
          onSaved: E,
          setting: p.pullRequestWatchInstructions,
          title: D,
          placeholder: O,
          ariaLabel: A,
          rows: 5,
          children: re,
        })),
        (e[44] = O),
        (e[45] = A),
        (e[46] = re),
        (e[47] = E),
        (e[48] = I))
      : (I = e[48]),
    I
  );
}
var De, Z;
function Oe() {
  return (Oe = e(() => {
    ((De = A()), c(), m(), E(), x(), C(), f(), de(), F(), j(), h(), J(), b(), u(), D(), (Z = M()));
  }))();
}
function ke() {
  let e = (0, Ae.c)(21),
    t = l(i),
    r = ee(),
    a = n(o.reviewDelivery),
    c,
    u;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(s, {
        id: `settings.general.reviewDelivery.label`,
        defaultMessage: `Review delivery`,
        description: `Label for choosing whether a requested code review appears in the current chat or in a separate review chat`,
      })),
      (u = (0, Q.jsx)(s, {
        id: `settings.general.reviewDelivery.description`,
        defaultMessage: `Start /review in the current chat when possible or launch a separate review chat`,
        description: `Explains that the setting chooses between starting /review in the current chat and opening a separate review chat`,
      })),
      (e[0] = c),
      (e[1] = u))
    : ((c = e[0]), (u = e[1]));
  let d = a ?? `inline`,
    f;
  e[2] === t
    ? (f = e[3])
    : ((f = (e) => {
        w(t, o.reviewDelivery, e).catch(() => {
          t.get(_).danger(
            (0, Q.jsx)(s, {
              id: `settings.general.reviewDelivery.saveError`,
              defaultMessage: `Could not save review delivery preference`,
              description: `Error toast shown when saving whether a code review starts inline or in a separate chat fails`,
            }),
            { errorAnalytics: { toastId: `settings.general.reviewDelivery.saveError` } },
          );
        });
      }),
      (e[2] = t),
      (e[3] = f));
  let p;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(s, { ...je.inline })), (e[4] = p))
    : (p = e[4]);
  let m;
  e[5] === r ? (m = e[6]) : ((m = r.formatMessage(je.inline)), (e[5] = r), (e[6] = m));
  let h;
  e[7] === m ? (h = e[8]) : ((h = { id: `inline`, label: p, ariaLabel: m }), (e[7] = m), (e[8] = h));
  let g;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(s, { ...je.detached })), (e[9] = g))
    : (g = e[9]);
  let v;
  e[10] === r ? (v = e[11]) : ((v = r.formatMessage(je.detached)), (e[10] = r), (e[11] = v));
  let y;
  e[12] === v ? (y = e[13]) : ((y = { id: `detached`, label: g, ariaLabel: v }), (e[12] = v), (e[13] = y));
  let b;
  e[14] !== h || e[15] !== y ? ((b = [h, y]), (e[14] = h), (e[15] = y), (e[16] = b)) : (b = e[16]);
  let x;
  return (
    e[17] !== b || e[18] !== d || e[19] !== f
      ? ((x = (0, Q.jsx)(k, {
          label: c,
          description: u,
          control: (0, Q.jsx)(ae, { selectedId: d, onSelect: f, options: b }),
        })),
        (e[17] = b),
        (e[18] = d),
        (e[19] = f),
        (e[20] = x))
      : (x = e[20]),
    x
  );
}
var Ae, Q, je;
function Me() {
  return (Me = e(() => {
    ((Ae = A()),
      m(),
      E(),
      x(),
      V(),
      C(),
      j(),
      h(),
      b(),
      (Q = M()),
      (je = r({
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
  }))();
}
function Ne() {
  let e = (0, Pe.c)(153),
    t = l(i),
    r = ee(),
    [a, o] = (0, Fe.useState)(null),
    c = n(p.branchPrefix),
    u = n(p.alwaysForcePush),
    f = n(p.createPullRequestAsDraft),
    m = n(p.pullRequestMergeMethod),
    h;
  e[0] === t ? (h = e[1]) : ((h = (e) => w(t, p.branchPrefix, e)), (e[0] = t), (e[1] = h));
  let g, v;
  e[2] !== r || e[3] !== t
    ? ((g = () => {
        (o(null),
          t
            .get(_)
            .success(
              r.formatMessage({
                id: `settings.git.branchPrefix.save.success`,
                defaultMessage: `Saved branch prefix`,
                description: `Toast shown when git branch prefix is saved`,
              }),
            ));
      }),
      (v = () => {
        t.get(_).danger(
          r.formatMessage({
            id: `settings.git.branchPrefix.save.error`,
            defaultMessage: `Failed to save branch prefix`,
            description: `Toast shown when git branch prefix save fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.branchPrefix.save.error` } },
        );
      }),
      (e[2] = r),
      (e[3] = t),
      (e[4] = g),
      (e[5] = v))
    : ((g = e[4]), (v = e[5]));
  let y;
  e[6] !== h || e[7] !== g || e[8] !== v
    ? ((y = { mutationFn: h, onSuccess: g, onError: v }), (e[6] = h), (e[7] = g), (e[8] = v), (e[9] = y))
    : (y = e[9]);
  let b = d(y),
    x;
  e[10] === t ? (x = e[11]) : ((x = (e) => w(t, p.alwaysForcePush, e)), (e[10] = t), (e[11] = x));
  let S, C;
  e[12] !== r || e[13] !== t
    ? ((S = (e, n) => {
        n
          ? t
              .get(_)
              .success(
                r.formatMessage({
                  id: `settings.git.forcePush.save.enabled`,
                  defaultMessage: `Always force push enabled`,
                  description: `Toast shown when the always force push toggle is enabled`,
                }),
              )
          : t
              .get(_)
              .success(
                r.formatMessage({
                  id: `settings.git.forcePush.save.disabled`,
                  defaultMessage: `Always force push disabled`,
                  description: `Toast shown when the always force push toggle is disabled`,
                }),
              );
      }),
      (C = () => {
        t.get(_).danger(
          r.formatMessage({
            id: `settings.git.forcePush.save.error`,
            defaultMessage: `Failed to save force push setting`,
            description: `Toast shown when saving the always force push toggle fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.forcePush.save.error` } },
        );
      }),
      (e[12] = r),
      (e[13] = t),
      (e[14] = S),
      (e[15] = C))
    : ((S = e[14]), (C = e[15]));
  let T;
  e[16] !== x || e[17] !== S || e[18] !== C
    ? ((T = { mutationFn: x, onSuccess: S, onError: C }), (e[16] = x), (e[17] = S), (e[18] = C), (e[19] = T))
    : (T = e[19]);
  let E = d(T),
    D;
  e[20] === t ? (D = e[21]) : ((D = (e) => w(t, p.pullRequestMergeMethod, e)), (e[20] = t), (e[21] = D));
  let O, A;
  e[22] !== r || e[23] !== t
    ? ((A = () => {
        t.get(_).success(
          r.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.success`,
            defaultMessage: `Saved pull request merge method`,
            description: `Toast shown when the pull request merge method setting is saved`,
          }),
        );
      }),
      (O = () => {
        t.get(_).danger(
          r.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.error`,
            defaultMessage: `Failed to save pull request merge method`,
            description: `Toast shown when saving the pull request merge method setting fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.pullRequestMergeMethod.save.error` } },
        );
      }),
      (e[22] = r),
      (e[23] = t),
      (e[24] = O),
      (e[25] = A))
    : ((O = e[24]), (A = e[25]));
  let j;
  e[26] !== O || e[27] !== D || e[28] !== A
    ? ((j = { mutationFn: D, onSuccess: A, onError: O }), (e[26] = O), (e[27] = D), (e[28] = A), (e[29] = j))
    : (j = e[29]);
  let M = d(j),
    N;
  e[30] === t ? (N = e[31]) : ((N = (e) => w(t, p.createPullRequestAsDraft, e)), (e[30] = t), (e[31] = N));
  let P, F;
  e[32] !== r || e[33] !== t
    ? ((P = (e, n) => {
        n
          ? t
              .get(_)
              .success(
                r.formatMessage({
                  id: `settings.git.createDraftPullRequest.save.enabled`,
                  defaultMessage: `Create draft pull requests enabled`,
                  description: `Toast shown when the draft pull request toggle is enabled`,
                }),
              )
          : t
              .get(_)
              .success(
                r.formatMessage({
                  id: `settings.git.createDraftPullRequest.save.disabled`,
                  defaultMessage: `Create draft pull requests disabled`,
                  description: `Toast shown when the draft pull request toggle is disabled`,
                }),
              );
      }),
      (F = () => {
        t.get(_).danger(
          r.formatMessage({
            id: `settings.git.createDraftPullRequest.save.error`,
            defaultMessage: `Failed to save draft pull request setting`,
            description: `Toast shown when saving the draft pull request toggle fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.createDraftPullRequest.save.error` } },
        );
      }),
      (e[32] = r),
      (e[33] = t),
      (e[34] = P),
      (e[35] = F))
    : ((P = e[34]), (F = e[35]));
  let I;
  e[36] !== N || e[37] !== P || e[38] !== F
    ? ((I = { mutationFn: N, onSuccess: P, onError: F }), (e[36] = N), (e[37] = P), (e[38] = F), (e[39] = I))
    : (I = e[39]);
  let L = d(I),
    R = c,
    B = a ?? R,
    V = a != null && a !== R,
    H = b.isPending,
    U = E.isPending,
    W = L.isPending,
    G = M.isPending,
    ce;
  e[40] !== B || e[41] !== H || e[42] !== V || e[43] !== b
    ? ((ce = () => {
        V && !H && b.mutate(B);
      }),
      (e[40] = B),
      (e[41] = H),
      (e[42] = V),
      (e[43] = b),
      (e[44] = ce))
    : (ce = e[44]);
  let le = ce,
    ue;
  e[45] !== E || e[46] !== U
    ? ((ue = (e) => {
        U || E.mutate(e);
      }),
      (e[45] = E),
      (e[46] = U),
      (e[47] = ue))
    : (ue = e[47]);
  let de = ue,
    fe;
  e[48] !== L || e[49] !== W
    ? ((fe = (e) => {
        W || L.mutate(e);
      }),
      (e[48] = L),
      (e[49] = W),
      (e[50] = fe))
    : (fe = e[50]);
  let pe = fe,
    me;
  e[51] !== G || e[52] !== m || e[53] !== M
    ? ((me = (e) => {
        G || (e !== m && M.mutate(e));
      }),
      (e[51] = G),
      (e[52] = m),
      (e[53] = M),
      (e[54] = me))
    : (me = e[54]);
  let he = me,
    K = V && !H,
    q;
  e[55] === le
    ? (q = e[56])
    : ((q = (e) => {
        (e.preventDefault(), le());
      }),
      (e[55] = le),
      (e[56] = q));
  let ge;
  (e[57] !== K || e[58] !== q
    ? ((ge = { accelerator: `CmdOrCtrl+S`, enabled: K, onKeyDown: q }),
      (e[57] = K),
      (e[58] = q),
      (e[59] = ge))
    : (ge = e[59]),
    re(ge));
  let _e;
  e[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(oe, { slug: `git-settings` })), (e[60] = _e))
    : (_e = e[60]);
  let ve;
  e[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsx)(Se, {})), (e[61] = ve))
    : (ve = e[61]);
  let be, xe;
  e[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(s, { ...X.branchPrefix })),
      (xe = (0, $.jsx)(s, {
        id: `settings.git.branchPrefix.description`,
        defaultMessage: `Prefix used when ChatGPT creates new branches`,
        description: `Description for git branch prefix setting`,
      })),
      (e[62] = be),
      (e[63] = xe))
    : ((be = e[62]), (xe = e[63]));
  let J;
  e[64] !== H || e[65] !== R
    ? ((J = (e) => {
        if (H) return;
        let t = e.target.value;
        o(t === R ? null : t);
      }),
      (e[64] = H),
      (e[65] = R),
      (e[66] = J))
    : (J = e[66]);
  let Ce;
  e[67] === r
    ? (Ce = e[68])
    : ((Ce = r.formatMessage({
        id: `settings.git.branchPrefix.placeholder`,
        defaultMessage: `codex/`,
        description: `Placeholder for git branch prefix input`,
      })),
      (e[67] = r),
      (e[68] = Ce));
  let Y;
  e[69] === r
    ? (Y = e[70])
    : ((Y = r.formatMessage({
        id: `settings.git.branchPrefix.ariaLabel`,
        defaultMessage: `Branch prefix`,
        description: `Aria label for git branch prefix input`,
      })),
      (e[69] = r),
      (e[70] = Y));
  let we;
  e[71] !== B || e[72] !== le || e[73] !== H || e[74] !== J || e[75] !== Ce || e[76] !== Y
    ? ((we = (0, $.jsx)(k, {
        label: be,
        description: xe,
        control: (0, $.jsx)(`div`, {
          className: `w-56 max-w-full`,
          children: (0, $.jsx)(ie, {
            value: B,
            onChange: J,
            onBlur: le,
            placeholder: Ce,
            "aria-label": Y,
            disabled: H,
          }),
        }),
      })),
      (e[71] = B),
      (e[72] = le),
      (e[73] = H),
      (e[74] = J),
      (e[75] = Ce),
      (e[76] = Y),
      (e[77] = we))
    : (we = e[77]);
  let Te, De;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(s, { ...X.pullRequestMergeMethod })),
      (De = (0, $.jsx)(s, {
        id: `settings.git.pullRequestMergeMethod.description`,
        defaultMessage: `Choose how ChatGPT merges pull requests`,
        description: `Supporting text for the setting that controls which GitHub merge strategy ChatGPT uses for pull requests`,
      })),
      (e[78] = Te),
      (e[79] = De))
    : ((Te = e[78]), (De = e[79]));
  let Z;
  e[80] === r
    ? (Z = e[81])
    : ((Z = r.formatMessage({
        id: `settings.git.pullRequestMergeMethod.ariaLabel`,
        defaultMessage: `Pull request merge method`,
        description: `Accessible label for pull request merge method selector`,
      })),
      (e[80] = r),
      (e[81] = Z));
  let Oe;
  e[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, $.jsx)(s, { ...X.merge })), (e[82] = Oe))
    : (Oe = e[82]);
  let Ae;
  e[83] === r ? (Ae = e[84]) : ((Ae = r.formatMessage(X.merge)), (e[83] = r), (e[84] = Ae));
  let Q;
  e[85] !== G || e[86] !== Ae
    ? ((Q = { id: `merge`, label: Oe, ariaLabel: Ae, disabled: G }), (e[85] = G), (e[86] = Ae), (e[87] = Q))
    : (Q = e[87]);
  let je;
  e[88] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(s, { ...X.squash })), (e[88] = je))
    : (je = e[88]);
  let Me;
  e[89] === r ? (Me = e[90]) : ((Me = r.formatMessage(X.squash)), (e[89] = r), (e[90] = Me));
  let Ne;
  e[91] !== G || e[92] !== Me
    ? ((Ne = { id: `squash`, label: je, ariaLabel: Me, disabled: G }),
      (e[91] = G),
      (e[92] = Me),
      (e[93] = Ne))
    : (Ne = e[93]);
  let Ie;
  e[94] !== Q || e[95] !== Ne ? ((Ie = [Q, Ne]), (e[94] = Q), (e[95] = Ne), (e[96] = Ie)) : (Ie = e[96]);
  let Le;
  e[97] !== he || e[98] !== m || e[99] !== Z || e[100] !== Ie
    ? ((Le = (0, $.jsx)(k, {
        label: Te,
        description: De,
        control: (0, $.jsx)(ae, { ariaLabel: Z, selectedId: m, onSelect: he, options: Ie }),
      })),
      (e[97] = he),
      (e[98] = m),
      (e[99] = Z),
      (e[100] = Ie),
      (e[101] = Le))
    : (Le = e[101]);
  let Re, ze;
  e[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (0, $.jsx)(s, { ...X.alwaysForcePush })),
      (ze = (0, $.jsx)(s, {
        id: `settings.git.forcePush.description`,
        defaultMessage: `Use --force-with-lease when pushing from ChatGPT`,
        description: `Explains that enabling this Git setting makes ChatGPT use --force-with-lease when it pushes`,
      })),
      (e[102] = Re),
      (e[103] = ze))
    : ((Re = e[102]), (ze = e[103]));
  let Be;
  e[104] === de
    ? (Be = e[105])
    : ((Be = (e) => {
        de(e);
      }),
      (e[104] = de),
      (e[105] = Be));
  let Ve;
  e[106] === r
    ? (Ve = e[107])
    : ((Ve = r.formatMessage({
        id: `settings.git.forcePush.ariaLabel`,
        defaultMessage: `Always force push`,
        description: `Accessible label for toggling whether ChatGPT uses --force-with-lease for Git pushes`,
      })),
      (e[106] = r),
      (e[107] = Ve));
  let He;
  e[108] !== u || e[109] !== U || e[110] !== Be || e[111] !== Ve
    ? ((He = (0, $.jsx)(k, {
        label: Re,
        description: ze,
        control: (0, $.jsx)(te, { checked: u, disabled: U, onChange: Be, ariaLabel: Ve }),
      })),
      (e[108] = u),
      (e[109] = U),
      (e[110] = Be),
      (e[111] = Ve),
      (e[112] = He))
    : (He = e[112]);
  let Ue, We;
  e[113] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (0, $.jsx)(s, { ...X.createDraftPullRequests })),
      (We = (0, $.jsx)(s, {
        id: `settings.git.createDraftPullRequest.description`,
        defaultMessage: `Use draft pull requests by default when creating PRs from ChatGPT`,
        description: `Description for create draft pull requests toggle`,
      })),
      (e[113] = Ue),
      (e[114] = We))
    : ((Ue = e[113]), (We = e[114]));
  let Ge;
  e[115] === pe
    ? (Ge = e[116])
    : ((Ge = (e) => {
        pe(e);
      }),
      (e[115] = pe),
      (e[116] = Ge));
  let Ke;
  e[117] === r
    ? (Ke = e[118])
    : ((Ke = r.formatMessage({
        id: `settings.git.createDraftPullRequest.ariaLabel`,
        defaultMessage: `Create draft pull requests`,
        description: `Aria label for create draft pull requests toggle`,
      })),
      (e[117] = r),
      (e[118] = Ke));
  let qe;
  e[119] !== f || e[120] !== W || e[121] !== Ge || e[122] !== Ke
    ? ((qe = (0, $.jsx)(k, {
        label: Ue,
        description: We,
        control: (0, $.jsx)(te, { checked: f, disabled: W, onChange: Ge, ariaLabel: Ke }),
      })),
      (e[119] = f),
      (e[120] = W),
      (e[121] = Ge),
      (e[122] = Ke),
      (e[123] = qe))
    : (qe = e[123]);
  let Je;
  e[124] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(ke, {}) })), (e[124] = Je))
    : (Je = e[124]);
  let Ye;
  e[125] !== we || e[126] !== Le || e[127] !== He || e[128] !== qe
    ? ((Ye = (0, $.jsx)(z, {
        children: (0, $.jsx)(z.Content, {
          children: (0, $.jsxs)(ne, { children: [ve, we, Le, He, qe, Je] }),
        }),
      })),
      (e[125] = we),
      (e[126] = Le),
      (e[127] = He),
      (e[128] = qe),
      (e[129] = Ye))
    : (Ye = e[129]);
  let Xe;
  e[130] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(Ee, {}) })), (e[130] = Xe))
    : (Xe = e[130]);
  let Ze, Qe;
  e[131] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (0, $.jsx)(s, { ...X.commitInstructions })),
      (Qe = (0, $.jsx)(s, {
        id: `settings.git.commitInstructions.description`,
        defaultMessage: `Added to commit message generation prompts`,
        description: `Description for commit instructions`,
      })),
      (e[131] = Ze),
      (e[132] = Qe))
    : ((Ze = e[131]), (Qe = e[132]));
  let $e;
  e[133] === r
    ? ($e = e[134])
    : (($e = r.formatMessage({
        id: `settings.git.commitInstructions.placeholder`,
        defaultMessage: `Add commit message guidance…`,
        description: `Placeholder for commit instructions textarea`,
      })),
      (e[133] = r),
      (e[134] = $e));
  let et;
  e[135] === r
    ? (et = e[136])
    : ((et = r.formatMessage({
        id: `settings.git.commitInstructions.ariaLabel`,
        defaultMessage: `Commit instructions`,
        description: `Aria label for commit instructions textarea`,
      })),
      (e[135] = r),
      (e[136] = et));
  let tt;
  e[137] !== $e || e[138] !== et
    ? ((tt = (0, $.jsx)(ye, {
        setting: p.commitInstructions,
        title: Ze,
        subtitle: Qe,
        placeholder: $e,
        ariaLabel: et,
      })),
      (e[137] = $e),
      (e[138] = et),
      (e[139] = tt))
    : (tt = e[139]);
  let nt, rt;
  e[140] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = (0, $.jsx)(s, { ...X.pullRequestInstructions })),
      (rt = (0, $.jsx)(s, {
        id: `settings.git.prInstructions.description`,
        defaultMessage: `Added to PR title/description generation prompts`,
        description: `Description for pull request instructions`,
      })),
      (e[140] = nt),
      (e[141] = rt))
    : ((nt = e[140]), (rt = e[141]));
  let it;
  e[142] === r
    ? (it = e[143])
    : ((it = r.formatMessage({
        id: `settings.git.prInstructions.placeholder`,
        defaultMessage: `Add pull request guidance…`,
        description: `Placeholder for pull request instructions textarea`,
      })),
      (e[142] = r),
      (e[143] = it));
  let at;
  e[144] === r
    ? (at = e[145])
    : ((at = r.formatMessage({
        id: `settings.git.prInstructions.ariaLabel`,
        defaultMessage: `Pull request instructions`,
        description: `Aria label for pull request instructions textarea`,
      })),
      (e[144] = r),
      (e[145] = at));
  let ot;
  e[146] !== it || e[147] !== at
    ? ((ot = (0, $.jsx)(ye, {
        setting: p.pullRequestInstructions,
        title: nt,
        subtitle: rt,
        placeholder: it,
        ariaLabel: at,
      })),
      (e[146] = it),
      (e[147] = at),
      (e[148] = ot))
    : (ot = e[148]);
  let st;
  return (
    e[149] !== Ye || e[150] !== tt || e[151] !== ot
      ? ((st = (0, $.jsxs)(se, { title: _e, children: [Ye, Xe, tt, ot] })),
        (e[149] = Ye),
        (e[150] = tt),
        (e[151] = ot),
        (e[152] = st))
      : (st = e[152]),
    st
  );
}
var Pe, Fe, $;
function Ie() {
  return (Ie = e(() => {
    ((Pe = A()),
      c(),
      m(),
      E(),
      (Fe = P()),
      x(),
      V(),
      I(),
      C(),
      f(),
      W(),
      j(),
      h(),
      H(),
      J(),
      we(),
      Te(),
      Oe(),
      Me(),
      R(),
      b(),
      ue(),
      u(),
      ($ = M()));
  }))();
}
Ie();
export { Ne as GitSettings };
//# sourceMappingURL=git-settings-98cfb7877613.js.map
