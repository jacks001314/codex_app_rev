import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  Fk as a,
  Ik as o,
  LNt as s,
  PBt as c,
  Qst as l,
  Vrt as u,
  XOt as d,
  Y3 as f,
  YOt as p,
  Ylt as m,
  Ypt as h,
  Z3 as g,
  ZSt as _,
  b2 as v,
  ew as y,
  hit as b,
  lit as x,
  lk as ee,
  oit as S,
  okt as te,
  qrt as C,
  sct as w,
  sw as T,
  tkt as E,
  uk as D,
  uw as O,
  vst as k,
  wB as A,
  xB as j,
  y2 as M,
  yst as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as N,
  Cjr as P,
  DTn as re,
  LF as ie,
  QF as ae,
  QLn as F,
  Qd as I,
  RF as L,
  ZLn as oe,
  Zd as R,
  cA as z,
  eI as B,
  sA as V,
  sLt as H,
  uLt as U,
  wTn as W,
  xjr as se,
} from "./app-initial-ad16eaadf81f.js";
function G(e) {
  let t = (0, K.c)(45),
    {
      ariaLabel: r,
      children: i,
      onSaved: a,
      placeholder: o,
      rows: s,
      savedValue: c,
      save: u,
      saveScope: d,
      subtitle: f,
      title: p,
    } = e,
    m = s === void 0 ? 6 : s,
    h = n(l),
    g = te(),
    [_, v] = (0, q.useState)(null),
    [y, b] = (0, q.useState)(!1),
    x = (0, q.useRef)(null),
    ee = (0, q.useRef)(null),
    S = (0, q.useRef)(null),
    w = (0, q.useRef)(null),
    T = `autosaving-instructions-${d}`,
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
        (x.current === t && (x.current = null),
          v((e) => (e === t ? null : e)),
          b(!0),
          a?.(t.value),
          w.current != null && window.clearTimeout(w.current),
          (w.current = window.setTimeout(() => {
            ((w.current = null), b(!1));
          }, ue)));
      }),
      (t[4] = a),
      (t[5] = O));
  let k;
  t[6] !== g || t[7] !== h
    ? ((k = (e, t) => {
        ((S.current = t),
          h
            .get(C)
            .danger(
              g.formatMessage({
                id: `settings.git.instructions.autoSave.error`,
                defaultMessage: `Failed to save instructions`,
                description: `Error shown when automatically saving custom instructions fails`,
              }),
              { errorAnalytics: { toastId: `settings.git.instructions.autoSave.error` } },
            ));
      }),
      (t[6] = g),
      (t[7] = h),
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
  let j = ne(A),
    M = _?.value ?? c,
    N = _ != null,
    P;
  t[14] === j
    ? (P = t[15])
    : ((P = () => {
        x.current != null &&
          x.current !== ee.current &&
          x.current !== S.current &&
          ((ee.current = x.current), j.mutate(x.current));
      }),
      (t[14] = j),
      (t[15] = P));
  let ie = (0, q.useEffectEvent)(P),
    ae;
  t[16] !== _ || t[17] !== ie
    ? ((ae = () => {
        if (_ == null) return;
        let e = window.setTimeout(() => ie(), le);
        return () => window.clearTimeout(e);
      }),
      (t[16] = _),
      (t[17] = ie),
      (t[18] = ae))
    : (ae = t[18]);
  let F;
  (t[19] === _ ? (F = t[20]) : ((F = [_]), (t[19] = _), (t[20] = F)), (0, q.useEffect)(ae, F));
  let I;
  t[21] === ie
    ? (I = t[22])
    : ((I = () => () => {
        (w.current != null && window.clearTimeout(w.current), ie());
      }),
      (t[21] = ie),
      (t[22] = I));
  let L;
  (t[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((L = []), (t[23] = L)) : (L = t[23]),
    (0, q.useEffect)(I, L));
  let oe;
  t[24] === j
    ? (oe = t[25])
    : ((oe = () => {
        x.current != null &&
          !j.isPending &&
          ((S.current = null), (ee.current = x.current), j.mutate(x.current));
      }),
      (t[24] = j),
      (t[25] = oe));
  let R = oe,
    z = N && !j.isPending,
    B;
  t[26] === R
    ? (B = t[27])
    : ((B = (e) => {
        (e.preventDefault(), R());
      }),
      (t[26] = R),
      (t[27] = B));
  let V;
  (t[28] !== z || t[29] !== B
    ? ((V = { accelerator: `CmdOrCtrl+S`, enabled: z, onKeyDown: B }), (t[28] = z), (t[29] = B), (t[30] = V))
    : (V = t[30]),
    re(V));
  let H = `idle`;
  j.isPending ? (H = `saving`) : N ? (H = `dirty`) : y && (H = `saved`);
  let U;
  t[31] !== j.isPending || t[32] !== c
    ? ((U = (e) => {
        (b(!1),
          w.current != null && (window.clearTimeout(w.current), (w.current = null)),
          (S.current = null),
          (x.current = e === c && !j.isPending ? null : { value: e }),
          v(x.current));
      }),
      (t[31] = j.isPending),
      (t[32] = c),
      (t[33] = U))
    : (U = t[33]);
  let W;
  return (
    t[34] !== H ||
    t[35] !== r ||
    t[36] !== i ||
    t[37] !== M ||
    t[38] !== o ||
    t[39] !== m ||
    t[40] !== R ||
    t[41] !== f ||
    t[42] !== U ||
    t[43] !== p
      ? ((W = (0, J.jsx)(ce, {
          actionState: H,
          ariaLabel: r,
          currentValue: M,
          onChange: U,
          onSave: R,
          placeholder: o,
          rows: m,
          subtitle: f,
          title: p,
          children: i,
        })),
        (t[34] = H),
        (t[35] = r),
        (t[36] = i),
        (t[37] = M),
        (t[38] = o),
        (t[39] = m),
        (t[40] = R),
        (t[41] = f),
        (t[42] = U),
        (t[43] = p),
        (t[44] = W))
      : (W = t[44]),
    W
  );
}
function ce(e) {
  let t = (0, K.c)(24),
    {
      actionState: n,
      ariaLabel: r,
      children: i,
      currentValue: o,
      onChange: s,
      onSave: c,
      placeholder: l,
      rows: u,
      subtitle: d,
      title: p,
    } = e,
    m = u === void 0 ? 6 : u,
    h = null;
  if (n === `dirty` || n === `saving`) {
    let e = n === `saving`,
      r = n === `saving`,
      i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, J.jsx)(E, {
          id: `settings.git.instructions.autoSave.save`,
          defaultMessage: `Save`,
          description: `Button that immediately saves pending custom instruction changes`,
        })),
        (t[0] = i))
      : (i = t[0]);
    let a;
    (t[1] !== c || t[2] !== e || t[3] !== r
      ? ((a = (0, J.jsx)(f, {
          color: `secondary`,
          disabled: e,
          loading: r,
          onClick: c,
          size: `toolbar`,
          children: i,
        })),
        (t[1] = c),
        (t[2] = e),
        (t[3] = r),
        (t[4] = a))
      : (a = t[4]),
      (h = a));
  } else if (n === `saved`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsxs)(`span`, {
          className: `flex items-center gap-2 text-xs text-secondary`,
          "aria-live": `polite`,
          children: [
            (0, J.jsx)(j, { "aria-hidden": !1, legacyIcon: a, asset16: M, legacyClassName: `icon-2xs` }),
            (0, J.jsx)(E, {
              id: `settings.git.instructions.autoSave.saved`,
              defaultMessage: `Saved`,
              description: `Status shown after custom instruction changes are automatically saved`,
            }),
          ],
        })),
        (t[5] = e))
      : (e = t[5]),
      (h = e));
  }
  let g;
  t[6] !== h || t[7] !== d || t[8] !== p
    ? ((g = (0, J.jsx)(V.Header, { title: p, subtitle: d, actions: h })),
      (t[6] = h),
      (t[7] = d),
      (t[8] = p),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] === s
    ? (_ = t[11])
    : ((_ = (e) => {
        s(e.target.value);
      }),
      (t[10] = s),
      (t[11] = _));
  let v;
  t[12] !== r || t[13] !== o || t[14] !== l || t[15] !== m || t[16] !== _
    ? ((v = (0, J.jsx)(F, { value: o, onChange: _, placeholder: l, "aria-label": r, rows: m })),
      (t[12] = r),
      (t[13] = o),
      (t[14] = l),
      (t[15] = m),
      (t[16] = _),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== i || t[19] !== v
    ? ((y = (0, J.jsxs)(V.Content, { children: [i, v] })), (t[18] = i), (t[19] = v), (t[20] = y))
    : (y = t[20]);
  let b;
  return (
    t[21] !== g || t[22] !== y
      ? ((b = (0, J.jsxs)(V, { children: [g, y] })), (t[21] = g), (t[22] = y), (t[23] = b))
      : (b = t[23]),
    b
  );
}
var K, q, J, le, ue;
function de() {
  return (de = e(() => {
    ((K = c()),
      v(),
      k(),
      _(),
      (q = i()),
      d(),
      g(),
      A(),
      N(),
      u(),
      o(),
      W(),
      r(),
      z(),
      (J = s()),
      (le = 3e3),
      (ue = 3e3));
  }))();
}
function fe(e) {
  let t = (0, pe.c)(11),
    r,
    i;
  t[0] === e ? ((r = t[1]), (i = t[2])) : (({ setting: i, ...r } = e), (t[0] = e), (t[1] = r), (t[2] = i));
  let a = n(l),
    o = b(i),
    s;
  t[3] !== a || t[4] !== i ? ((s = (e) => x(a, i, e)), (t[3] = a), (t[4] = i), (t[5] = s)) : (s = t[5]);
  let c;
  return (
    t[6] !== r || t[7] !== o || t[8] !== i.key || t[9] !== s
      ? ((c = (0, me.jsx)(G, { ...r, savedValue: o, save: s, saveScope: i.key })),
        (t[6] = r),
        (t[7] = o),
        (t[8] = i.key),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
var pe, me;
function he() {
  return (he = e(() => {
    ((pe = c()), _(), r(), S(), de(), (me = s()));
  }))();
}
function ge() {
  let e = (0, _e.c)(11),
    t = n(l),
    r = te(),
    i = P(H),
    a = b(h.reviewMode);
  if (!i) return null;
  let o, s;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(E, {
        id: `settings.git.reviewMode.label`,
        defaultMessage: `Disable Git-based diffs`,
        description: `Label for the setting that limits the Changes tab to last-turn diffs`,
      })),
      (s = (0, Y.jsx)(E, {
        id: `settings.git.reviewMode.description`,
        defaultMessage: `Only show "Last Turn" in the Changes panel and disable Unstaged/Staged/Branch to avoid git operations`,
        description: `Description for the setting that limits the Changes tab to last-turn diffs`,
      })),
      (e[0] = o),
      (e[1] = s))
    : ((o = e[0]), (s = e[1]));
  let c;
  e[2] === r
    ? (c = e[3])
    : ((c = r.formatMessage({
        id: `settings.git.reviewMode.ariaLabel`,
        defaultMessage: `Disable Git-based diffs`,
        description: `Accessible label for the toggle that limits the Changes tab to last-turn diffs`,
      })),
      (e[2] = r),
      (e[3] = c));
  let u = a === `last-turn-only`,
    d;
  e[4] !== r || e[5] !== t
    ? ((d = (e) => {
        x(t, h.reviewMode, e ? `last-turn-only` : `full`).catch(() => {
          t.get(C).danger(
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
      (e[6] = d))
    : (d = e[6]);
  let f;
  return (
    e[7] !== c || e[8] !== u || e[9] !== d
      ? ((f = (0, Y.jsx)(T, {
          label: o,
          description: s,
          control: (0, Y.jsx)(ee, { ariaLabel: c, checked: u, onChange: d }),
        })),
        (e[7] = c),
        (e[8] = u),
        (e[9] = d),
        (e[10] = f))
      : (f = e[10]),
    f
  );
}
var _e, Y;
function ve() {
  return (ve = e(() => {
    ((_e = c()), _(), w(), d(), u(), D(), U(), r(), S(), O(), se(), (Y = s()));
  }))();
}
var X;
function ye() {
  return (ye = e(() => {
    (d(),
      (X = p({
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
function be() {
  let e = (0, xe.c)(21),
    t = n(l),
    r = te(),
    i = b(m.reviewDelivery),
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(E, {
        id: `settings.general.reviewDelivery.label`,
        defaultMessage: `Review delivery`,
        description: `Label for choosing whether a requested code review appears in the current chat or in a separate review chat`,
      })),
      (o = (0, Z.jsx)(E, {
        id: `settings.general.reviewDelivery.description`,
        defaultMessage: `Start /review in the current chat when possible or launch a separate review chat`,
        description: `Explains that the setting chooses between starting /review in the current chat and opening a separate review chat`,
      })),
      (e[0] = a),
      (e[1] = o))
    : ((a = e[0]), (o = e[1]));
  let s = i ?? `inline`,
    c;
  e[2] === t
    ? (c = e[3])
    : ((c = (e) => {
        x(t, m.reviewDelivery, e).catch(() => {
          t.get(C).danger(
            (0, Z.jsx)(E, {
              id: `settings.general.reviewDelivery.saveError`,
              defaultMessage: `Could not save review delivery preference`,
              description: `Error toast shown when saving whether a code review starts inline or in a separate chat fails`,
            }),
            { errorAnalytics: { toastId: `settings.general.reviewDelivery.saveError` } },
          );
        });
      }),
      (e[2] = t),
      (e[3] = c));
  let u;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(E, { ...Q.inline })), (e[4] = u))
    : (u = e[4]);
  let d;
  e[5] === r ? (d = e[6]) : ((d = r.formatMessage(Q.inline)), (e[5] = r), (e[6] = d));
  let f;
  e[7] === d ? (f = e[8]) : ((f = { id: `inline`, label: u, ariaLabel: d }), (e[7] = d), (e[8] = f));
  let p;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(E, { ...Q.detached })), (e[9] = p))
    : (p = e[9]);
  let h;
  e[10] === r ? (h = e[11]) : ((h = r.formatMessage(Q.detached)), (e[10] = r), (e[11] = h));
  let g;
  e[12] === h ? (g = e[13]) : ((g = { id: `detached`, label: p, ariaLabel: h }), (e[12] = h), (e[13] = g));
  let _;
  e[14] !== f || e[15] !== g ? ((_ = [f, g]), (e[14] = f), (e[15] = g), (e[16] = _)) : (_ = e[16]);
  let v;
  return (
    e[17] !== _ || e[18] !== s || e[19] !== c
      ? ((v = (0, Z.jsx)(T, {
          label: a,
          description: o,
          control: (0, Z.jsx)(R, { selectedId: s, onSelect: c, options: _ }),
        })),
        (e[17] = _),
        (e[18] = s),
        (e[19] = c),
        (e[20] = v))
      : (v = e[20]),
    v
  );
}
var xe, Z, Q;
function Se() {
  return (Se = e(() => {
    ((xe = c()),
      _(),
      w(),
      d(),
      I(),
      u(),
      r(),
      S(),
      O(),
      (Z = s()),
      (Q = p({
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
function Ce() {
  let e = (0, we.c)(152),
    r = n(l),
    i = te(),
    [a, o] = (0, Te.useState)(null),
    s = b(h.branchPrefix),
    c = b(h.alwaysForcePush),
    u = b(h.createPullRequestAsDraft),
    d = b(h.pullRequestMergeMethod),
    f;
  e[0] === r ? (f = e[1]) : ((f = (e) => x(r, h.branchPrefix, e)), (e[0] = r), (e[1] = f));
  let p, m;
  e[2] !== i || e[3] !== r
    ? ((p = () => {
        (o(null),
          r
            .get(C)
            .success(
              i.formatMessage({
                id: `settings.git.branchPrefix.save.success`,
                defaultMessage: `Saved branch prefix`,
                description: `Toast shown when git branch prefix is saved`,
              }),
            ));
      }),
      (m = () => {
        r.get(C).danger(
          i.formatMessage({
            id: `settings.git.branchPrefix.save.error`,
            defaultMessage: `Failed to save branch prefix`,
            description: `Toast shown when git branch prefix save fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.branchPrefix.save.error` } },
        );
      }),
      (e[2] = i),
      (e[3] = r),
      (e[4] = p),
      (e[5] = m))
    : ((p = e[4]), (m = e[5]));
  let g;
  e[6] !== f || e[7] !== p || e[8] !== m
    ? ((g = { mutationFn: f, onSuccess: p, onError: m }), (e[6] = f), (e[7] = p), (e[8] = m), (e[9] = g))
    : (g = e[9]);
  let _ = ne(g),
    v;
  e[10] === r ? (v = e[11]) : ((v = (e) => x(r, h.alwaysForcePush, e)), (e[10] = r), (e[11] = v));
  let y, S;
  e[12] !== i || e[13] !== r
    ? ((y = (e, t) => {
        t
          ? r
              .get(C)
              .success(
                i.formatMessage({
                  id: `settings.git.forcePush.save.enabled`,
                  defaultMessage: `Always force push enabled`,
                  description: `Toast shown when the always force push toggle is enabled`,
                }),
              )
          : r
              .get(C)
              .success(
                i.formatMessage({
                  id: `settings.git.forcePush.save.disabled`,
                  defaultMessage: `Always force push disabled`,
                  description: `Toast shown when the always force push toggle is disabled`,
                }),
              );
      }),
      (S = () => {
        r.get(C).danger(
          i.formatMessage({
            id: `settings.git.forcePush.save.error`,
            defaultMessage: `Failed to save force push setting`,
            description: `Toast shown when saving the always force push toggle fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.forcePush.save.error` } },
        );
      }),
      (e[12] = i),
      (e[13] = r),
      (e[14] = y),
      (e[15] = S))
    : ((y = e[14]), (S = e[15]));
  let w;
  e[16] !== v || e[17] !== y || e[18] !== S
    ? ((w = { mutationFn: v, onSuccess: y, onError: S }), (e[16] = v), (e[17] = y), (e[18] = S), (e[19] = w))
    : (w = e[19]);
  let D = ne(w),
    O;
  e[20] === r ? (O = e[21]) : ((O = (e) => x(r, h.pullRequestMergeMethod, e)), (e[20] = r), (e[21] = O));
  let k, A;
  e[22] !== i || e[23] !== r
    ? ((A = () => {
        r.get(C).success(
          i.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.success`,
            defaultMessage: `Saved pull request merge method`,
            description: `Toast shown when the pull request merge method setting is saved`,
          }),
        );
      }),
      (k = () => {
        r.get(C).danger(
          i.formatMessage({
            id: `settings.git.pullRequestMergeMethod.save.error`,
            defaultMessage: `Failed to save pull request merge method`,
            description: `Toast shown when saving the pull request merge method setting fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.pullRequestMergeMethod.save.error` } },
        );
      }),
      (e[22] = i),
      (e[23] = r),
      (e[24] = k),
      (e[25] = A))
    : ((k = e[24]), (A = e[25]));
  let j;
  e[26] !== k || e[27] !== O || e[28] !== A
    ? ((j = { mutationFn: O, onSuccess: A, onError: k }), (e[26] = k), (e[27] = O), (e[28] = A), (e[29] = j))
    : (j = e[29]);
  let M = ne(j),
    N;
  e[30] === r ? (N = e[31]) : ((N = (e) => x(r, h.createPullRequestAsDraft, e)), (e[30] = r), (e[31] = N));
  let P, F;
  e[32] !== i || e[33] !== r
    ? ((P = (e, t) => {
        t
          ? r
              .get(C)
              .success(
                i.formatMessage({
                  id: `settings.git.createDraftPullRequest.save.enabled`,
                  defaultMessage: `Create draft pull requests enabled`,
                  description: `Toast shown when the draft pull request toggle is enabled`,
                }),
              )
          : r
              .get(C)
              .success(
                i.formatMessage({
                  id: `settings.git.createDraftPullRequest.save.disabled`,
                  defaultMessage: `Create draft pull requests disabled`,
                  description: `Toast shown when the draft pull request toggle is disabled`,
                }),
              );
      }),
      (F = () => {
        r.get(C).danger(
          i.formatMessage({
            id: `settings.git.createDraftPullRequest.save.error`,
            defaultMessage: `Failed to save draft pull request setting`,
            description: `Toast shown when saving the draft pull request toggle fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.createDraftPullRequest.save.error` } },
        );
      }),
      (e[32] = i),
      (e[33] = r),
      (e[34] = P),
      (e[35] = F))
    : ((P = e[34]), (F = e[35]));
  let I;
  e[36] !== N || e[37] !== P || e[38] !== F
    ? ((I = { mutationFn: N, onSuccess: P, onError: F }), (e[36] = N), (e[37] = P), (e[38] = F), (e[39] = I))
    : (I = e[39]);
  let L = ne(I),
    z = s,
    B = a ?? z,
    H = a != null && a !== z,
    U = _.isPending,
    W = D.isPending,
    se = L.isPending,
    G = M.isPending,
    ce;
  e[40] !== B || e[41] !== U || e[42] !== H || e[43] !== _
    ? ((ce = () => {
        H && !U && _.mutate(B);
      }),
      (e[40] = B),
      (e[41] = U),
      (e[42] = H),
      (e[43] = _),
      (e[44] = ce))
    : (ce = e[44]);
  let K = ce,
    q;
  e[45] !== D || e[46] !== W
    ? ((q = (e) => {
        W || D.mutate(e);
      }),
      (e[45] = D),
      (e[46] = W),
      (e[47] = q))
    : (q = e[47]);
  let J = q,
    le;
  e[48] !== L || e[49] !== se
    ? ((le = (e) => {
        se || L.mutate(e);
      }),
      (e[48] = L),
      (e[49] = se),
      (e[50] = le))
    : (le = e[50]);
  let ue = le,
    de;
  e[51] !== G || e[52] !== d || e[53] !== M
    ? ((de = (e) => {
        G || (e !== d && M.mutate(e));
      }),
      (e[51] = G),
      (e[52] = d),
      (e[53] = M),
      (e[54] = de))
    : (de = e[54]);
  let pe = de,
    me = H && !U,
    he;
  e[55] === K
    ? (he = e[56])
    : ((he = (e) => {
        (e.preventDefault(), K());
      }),
      (e[55] = K),
      (e[56] = he));
  let _e;
  (e[57] !== me || e[58] !== he
    ? ((_e = { accelerator: `CmdOrCtrl+S`, enabled: me, onKeyDown: he }),
      (e[57] = me),
      (e[58] = he),
      (e[59] = _e))
    : (_e = e[59]),
    re(_e));
  let Y;
  e[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, $.jsx)(ie, { slug: `git-settings` })), (e[60] = Y))
    : (Y = e[60]);
  let ve;
  e[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsx)(ge, {})), (e[61] = ve))
    : (ve = e[61]);
  let ye, xe;
  e[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(E, { ...X.branchPrefix })),
      (xe = (0, $.jsx)(E, {
        id: `settings.git.branchPrefix.description`,
        defaultMessage: `Prefix used when ChatGPT creates new branches`,
        description: `Description for git branch prefix setting`,
      })),
      (e[62] = ye),
      (e[63] = xe))
    : ((ye = e[62]), (xe = e[63]));
  let Z;
  e[64] !== U || e[65] !== z
    ? ((Z = (e) => {
        if (U) return;
        let t = e.target.value;
        o(t === z ? null : t);
      }),
      (e[64] = U),
      (e[65] = z),
      (e[66] = Z))
    : (Z = e[66]);
  let Q;
  e[67] === i
    ? (Q = e[68])
    : ((Q = i.formatMessage({
        id: `settings.git.branchPrefix.placeholder`,
        defaultMessage: `codex/`,
        description: `Placeholder for git branch prefix input`,
      })),
      (e[67] = i),
      (e[68] = Q));
  let Se;
  e[69] === i
    ? (Se = e[70])
    : ((Se = i.formatMessage({
        id: `settings.git.branchPrefix.ariaLabel`,
        defaultMessage: `Branch prefix`,
        description: `Aria label for git branch prefix input`,
      })),
      (e[69] = i),
      (e[70] = Se));
  let Ce;
  e[71] !== B || e[72] !== K || e[73] !== U || e[74] !== Z || e[75] !== Q || e[76] !== Se
    ? ((Ce = (0, $.jsx)(T, {
        label: ye,
        description: xe,
        control: (0, $.jsx)(`div`, {
          className: `w-56 max-w-full`,
          children: (0, $.jsx)(oe, {
            value: B,
            onChange: Z,
            onBlur: K,
            placeholder: Q,
            "aria-label": Se,
            disabled: U,
          }),
        }),
      })),
      (e[71] = B),
      (e[72] = K),
      (e[73] = U),
      (e[74] = Z),
      (e[75] = Q),
      (e[76] = Se),
      (e[77] = Ce))
    : (Ce = e[77]);
  let Ee, De;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, $.jsx)(E, { ...X.pullRequestMergeMethod })),
      (De = (0, $.jsx)(E, {
        id: `settings.git.pullRequestMergeMethod.description`,
        defaultMessage: `Choose how ChatGPT merges pull requests`,
        description: `Supporting text for the setting that controls which GitHub merge strategy ChatGPT uses for pull requests`,
      })),
      (e[78] = Ee),
      (e[79] = De))
    : ((Ee = e[78]), (De = e[79]));
  let Oe;
  e[80] === i
    ? (Oe = e[81])
    : ((Oe = i.formatMessage({
        id: `settings.git.pullRequestMergeMethod.ariaLabel`,
        defaultMessage: `Pull request merge method`,
        description: `Accessible label for pull request merge method selector`,
      })),
      (e[80] = i),
      (e[81] = Oe));
  let ke;
  e[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, $.jsx)(E, { ...X.merge })), (e[82] = ke))
    : (ke = e[82]);
  let Ae;
  e[83] === i ? (Ae = e[84]) : ((Ae = i.formatMessage(X.merge)), (e[83] = i), (e[84] = Ae));
  let je;
  e[85] !== G || e[86] !== Ae
    ? ((je = { id: `merge`, label: ke, ariaLabel: Ae, disabled: G }), (e[85] = G), (e[86] = Ae), (e[87] = je))
    : (je = e[87]);
  let Me;
  e[88] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, $.jsx)(E, { ...X.squash })), (e[88] = Me))
    : (Me = e[88]);
  let Ne;
  e[89] === i ? (Ne = e[90]) : ((Ne = i.formatMessage(X.squash)), (e[89] = i), (e[90] = Ne));
  let Pe;
  e[91] !== G || e[92] !== Ne
    ? ((Pe = { id: `squash`, label: Me, ariaLabel: Ne, disabled: G }),
      (e[91] = G),
      (e[92] = Ne),
      (e[93] = Pe))
    : (Pe = e[93]);
  let Fe;
  e[94] !== je || e[95] !== Pe ? ((Fe = [je, Pe]), (e[94] = je), (e[95] = Pe), (e[96] = Fe)) : (Fe = e[96]);
  let Ie;
  e[97] !== pe || e[98] !== d || e[99] !== Oe || e[100] !== Fe
    ? ((Ie = (0, $.jsx)(T, {
        label: Ee,
        description: De,
        control: (0, $.jsx)(R, { ariaLabel: Oe, selectedId: d, onSelect: pe, options: Fe }),
      })),
      (e[97] = pe),
      (e[98] = d),
      (e[99] = Oe),
      (e[100] = Fe),
      (e[101] = Ie))
    : (Ie = e[101]);
  let Le, Re;
  e[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (0, $.jsx)(E, { ...X.alwaysForcePush })),
      (Re = (0, $.jsx)(E, {
        id: `settings.git.forcePush.description`,
        defaultMessage: `Use --force-with-lease when pushing from ChatGPT`,
        description: `Explains that enabling this Git setting makes ChatGPT use --force-with-lease when it pushes`,
      })),
      (e[102] = Le),
      (e[103] = Re))
    : ((Le = e[102]), (Re = e[103]));
  let ze;
  e[104] === J
    ? (ze = e[105])
    : ((ze = (e) => {
        J(e);
      }),
      (e[104] = J),
      (e[105] = ze));
  let Be;
  e[106] === i
    ? (Be = e[107])
    : ((Be = i.formatMessage({
        id: `settings.git.forcePush.ariaLabel`,
        defaultMessage: `Always force push`,
        description: `Accessible label for toggling whether ChatGPT uses --force-with-lease for Git pushes`,
      })),
      (e[106] = i),
      (e[107] = Be));
  let Ve;
  e[108] !== c || e[109] !== W || e[110] !== ze || e[111] !== Be
    ? ((Ve = (0, $.jsx)(T, {
        label: Le,
        description: Re,
        control: (0, $.jsx)(ee, { checked: c, disabled: W, onChange: ze, ariaLabel: Be }),
      })),
      (e[108] = c),
      (e[109] = W),
      (e[110] = ze),
      (e[111] = Be),
      (e[112] = Ve))
    : (Ve = e[112]);
  let He, Ue;
  e[113] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, $.jsx)(E, { ...X.createDraftPullRequests })),
      (Ue = (0, $.jsx)(E, {
        id: `settings.git.createDraftPullRequest.description`,
        defaultMessage: `Use draft pull requests by default when creating PRs from ChatGPT`,
        description: `Description for create draft pull requests toggle`,
      })),
      (e[113] = He),
      (e[114] = Ue))
    : ((He = e[113]), (Ue = e[114]));
  let We;
  e[115] === ue
    ? (We = e[116])
    : ((We = (e) => {
        ue(e);
      }),
      (e[115] = ue),
      (e[116] = We));
  let Ge;
  e[117] === i
    ? (Ge = e[118])
    : ((Ge = i.formatMessage({
        id: `settings.git.createDraftPullRequest.ariaLabel`,
        defaultMessage: `Create draft pull requests`,
        description: `Aria label for create draft pull requests toggle`,
      })),
      (e[117] = i),
      (e[118] = Ge));
  let Ke;
  e[119] !== u || e[120] !== se || e[121] !== We || e[122] !== Ge
    ? ((Ke = (0, $.jsx)(T, {
        label: He,
        description: Ue,
        control: (0, $.jsx)(ee, { checked: u, disabled: se, onChange: We, ariaLabel: Ge }),
      })),
      (e[119] = u),
      (e[120] = se),
      (e[121] = We),
      (e[122] = Ge),
      (e[123] = Ke))
    : (Ke = e[123]);
  let qe;
  e[124] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(be, {}) })), (e[124] = qe))
    : (qe = e[124]);
  let Je;
  e[125] !== Ce || e[126] !== Ie || e[127] !== Ve || e[128] !== Ke
    ? ((Je = (0, $.jsx)(V, {
        children: (0, $.jsx)(V.Content, { children: (0, $.jsxs)(t, { children: [ve, Ce, Ie, Ve, Ke, qe] }) }),
      })),
      (e[125] = Ce),
      (e[126] = Ie),
      (e[127] = Ve),
      (e[128] = Ke),
      (e[129] = Je))
    : (Je = e[129]);
  let Ye, Xe;
  e[130] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (0, $.jsx)(E, { ...X.commitInstructions })),
      (Xe = (0, $.jsx)(E, {
        id: `settings.git.commitInstructions.description`,
        defaultMessage: `Added to commit message generation prompts`,
        description: `Description for commit instructions`,
      })),
      (e[130] = Ye),
      (e[131] = Xe))
    : ((Ye = e[130]), (Xe = e[131]));
  let Ze;
  e[132] === i
    ? (Ze = e[133])
    : ((Ze = i.formatMessage({
        id: `settings.git.commitInstructions.placeholder`,
        defaultMessage: `Add commit message guidance…`,
        description: `Placeholder for commit instructions textarea`,
      })),
      (e[132] = i),
      (e[133] = Ze));
  let Qe;
  e[134] === i
    ? (Qe = e[135])
    : ((Qe = i.formatMessage({
        id: `settings.git.commitInstructions.ariaLabel`,
        defaultMessage: `Commit instructions`,
        description: `Aria label for commit instructions textarea`,
      })),
      (e[134] = i),
      (e[135] = Qe));
  let $e;
  e[136] !== Ze || e[137] !== Qe
    ? (($e = (0, $.jsx)(fe, {
        setting: h.commitInstructions,
        title: Ye,
        subtitle: Xe,
        placeholder: Ze,
        ariaLabel: Qe,
      })),
      (e[136] = Ze),
      (e[137] = Qe),
      (e[138] = $e))
    : ($e = e[138]);
  let et, tt;
  e[139] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = (0, $.jsx)(E, { ...X.pullRequestInstructions })),
      (tt = (0, $.jsx)(E, {
        id: `settings.git.prInstructions.description`,
        defaultMessage: `Added to PR title/description generation prompts`,
        description: `Description for pull request instructions`,
      })),
      (e[139] = et),
      (e[140] = tt))
    : ((et = e[139]), (tt = e[140]));
  let nt;
  e[141] === i
    ? (nt = e[142])
    : ((nt = i.formatMessage({
        id: `settings.git.prInstructions.placeholder`,
        defaultMessage: `Add pull request guidance…`,
        description: `Placeholder for pull request instructions textarea`,
      })),
      (e[141] = i),
      (e[142] = nt));
  let rt;
  e[143] === i
    ? (rt = e[144])
    : ((rt = i.formatMessage({
        id: `settings.git.prInstructions.ariaLabel`,
        defaultMessage: `Pull request instructions`,
        description: `Aria label for pull request instructions textarea`,
      })),
      (e[143] = i),
      (e[144] = rt));
  let it;
  e[145] !== nt || e[146] !== rt
    ? ((it = (0, $.jsx)(fe, {
        setting: h.pullRequestInstructions,
        title: et,
        subtitle: tt,
        placeholder: nt,
        ariaLabel: rt,
      })),
      (e[145] = nt),
      (e[146] = rt),
      (e[147] = it))
    : (it = e[147]);
  let at;
  return (
    e[148] !== Je || e[149] !== $e || e[150] !== it
      ? ((at = (0, $.jsxs)(ae, { title: Y, children: [Je, $e, it] })),
        (e[148] = Je),
        (e[149] = $e),
        (e[150] = it),
        (e[151] = at))
      : (at = e[151]),
    at
  );
}
var we, Te, $;
function Ee() {
  return (Ee = e(() => {
    ((we = c()),
      k(),
      _(),
      w(),
      (Te = i()),
      d(),
      I(),
      N(),
      u(),
      D(),
      W(),
      r(),
      S(),
      B(),
      he(),
      ve(),
      ye(),
      Se(),
      z(),
      O(),
      L(),
      y(),
      ($ = s()));
  }))();
}
Ee();
export { Ce as GitSettings };
//# sourceMappingURL=git-settings-9a2480a749cd.js.map
