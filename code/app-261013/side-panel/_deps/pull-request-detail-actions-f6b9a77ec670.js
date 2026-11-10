import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  AO as r,
  CO as i,
  Cot as a,
  IDt as o,
  Ixt as s,
  Mz as c,
  Nz as l,
  Pft as u,
  Pxt as d,
  Rnt as f,
  TJ as p,
  TO as m,
  VDt as h,
  Wnt as g,
  XD as _,
  YD as v,
  b0 as y,
  cz as b,
  hot as x,
  i3 as S,
  iK as C,
  iet as w,
  jDt as T,
  lot as E,
  qnt as D,
  r3 as O,
  ret as k,
  rst as A,
  sz as j,
  t3 as M,
  vzt as N,
  wot as P,
  xMt as F,
  y0 as I,
  yzt as L,
  zxt as R,
} from "./app-shared-bbfeca5e5737.js";
import {
  C$n as z,
  QDr as B,
  XDr as V,
  bJ as H,
  sJ as U,
  w$n as ee,
  yJ as W,
} from "./app-initial-5851df3f6cb1.js";
import { a as te, c as ne, o as re, t as ie } from "./pull-request-actions-fc24d58eda26.js";
import { n as ae } from "./pull-request-detail-model-e2eec982b891.js";
function oe(e, { action: t, item: n, surface: r }) {
  B(e, k, { action: t, surface: r, state: G(n), isAuthor: n.isAuthor ?? void 0 });
}
function G(e) {
  return `canonical` in e
    ? e.state === `closed`
      ? `closed`
      : U({
          canMerge: e.canMerge,
          ciStatus: e.ciStatus,
          hasMergeConflicts: e.mergeBlocker === `conflicts`,
          status: e.state === `merged` ? `merged` : e.isDraft ? `draft` : `open`,
        })
    : e.state;
}
function K(e, { item: t, surface: n }) {
  B(e, w, { surface: n, state: t.state, isAuthor: t.isAuthor ?? void 0 });
}
function q() {
  return (q = e(() => {
    (f(), V());
  }))();
}
function se(e) {
  let n = (0, J.c)(66),
    {
      autoMergeDisabled: r,
      isAutoMergeDisabling: a,
      isAutoMergeEnabled: s,
      isAutoMergeEnabling: c,
      isAutoMergePending: l,
      isDraft: u,
      isMergePending: d,
      mergeDisabled: f,
      mergeDisabledMessage: p,
      menuItem: g,
      open: _,
      onAutoMergeChange: y,
      onMerge: b,
      onOpenChange: x,
    } = e,
    S = g !== void 0 && g,
    w = h();
  if (d || c || a) {
    let e;
    if (d) {
      let t;
      (n[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)(o, {
            id: `pullRequestsPage.detail.actions.merging`,
            defaultMessage: `Merging…`,
            description: `Status shown while a pull request is being merged`,
          })),
          (n[0] = t))
        : (t = n[0]),
        (e = t));
    } else if (c) {
      let t;
      (n[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)(o, {
            id: `pullRequestsPage.detail.actions.enablingAutoMerge`,
            defaultMessage: `Enabling auto-merge…`,
            description: `Status shown while pull request auto-merge is being enabled`,
          })),
          (n[1] = t))
        : (t = n[1]),
        (e = t));
    } else {
      let t;
      (n[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)(o, {
            id: `pullRequestsPage.detail.actions.disablingAutoMerge`,
            defaultMessage: `Disabling auto-merge…`,
            description: `Status shown while pull request auto-merge is being disabled`,
          })),
          (n[2] = t))
        : (t = n[2]),
        (e = t));
    }
    let r;
    return (
      n[3] !== e || n[4] !== S
        ? ((r = S
            ? (0, Y.jsx)(m.Item, {
                LeftIcon: O,
                "aria-busy": !0,
                "aria-live": `polite`,
                disabled: !0,
                focusableWhenDisabled: !0,
                children: e,
              })
            : (0, Y.jsxs)(t, {
                "aria-live": `polite`,
                className: `w-full justify-center py-3`,
                color: `secondary`,
                disabled: !0,
                role: `status`,
                size: `medium`,
                children: [(0, Y.jsx)(O, { "aria-hidden": !0, className: `icon-sm` }), e],
              })),
          (n[3] = e),
          (n[4] = S),
          (n[5] = r))
        : (r = n[5]),
      r
    );
  }
  let T = S && s,
    E;
  n[6] !== s ||
  n[7] !== l ||
  n[8] !== u ||
  n[9] !== d ||
  n[10] !== S ||
  n[11] !== f ||
  n[12] !== p ||
  n[13] !== b
    ? ((E = s
        ? null
        : (0, Y.jsx)(m.Item, {
            disabled: u || f || l || d,
            focusableWhenDisabled: f && p != null,
            tooltipText: f ? p : void 0,
            onSelect: (e) => {
              (S && e.preventDefault(), b());
            },
            children: (0, Y.jsx)(o, {
              id: `pullRequestsPage.detail.actions.merge.menuItem`,
              defaultMessage: `Merge`,
              description: `Menu item that merges the selected pull request`,
            }),
          })),
      (n[6] = s),
      (n[7] = l),
      (n[8] = u),
      (n[9] = d),
      (n[10] = S),
      (n[11] = f),
      (n[12] = p),
      (n[13] = b),
      (n[14] = E))
    : (E = n[14]);
  let D = T ? C : void 0,
    k;
  n[15] !== s || n[16] !== S || n[17] !== y
    ? ((k = (e) => {
        (S && e.preventDefault(), y(!s));
      }),
      (n[15] = s),
      (n[16] = S),
      (n[17] = y),
      (n[18] = k))
    : (k = n[18]);
  let A;
  n[19] === s
    ? (A = n[20])
    : ((A = s
        ? (0, Y.jsx)(o, {
            id: `pullRequestsPage.detail.actions.disableAutoMerge`,
            defaultMessage: `Disable auto-merge`,
            description: `Button label for disabling pull request auto-merge`,
          })
        : (0, Y.jsx)(o, {
            id: `pullRequestsPage.detail.actions.autoMerge.menuItem`,
            defaultMessage: `Enable auto-merge`,
            description: `Menu item that enables auto-merge for a pull request`,
          })),
      (n[19] = s),
      (n[20] = A));
  let M;
  n[21] !== r || n[22] !== T || n[23] !== D || n[24] !== k || n[25] !== A
    ? ((M = (0, Y.jsx)(m.Item, {
        LeftIcon: D,
        disabled: r,
        focusableWhenDisabled: T,
        onSelect: k,
        children: A,
      })),
      (n[21] = r),
      (n[22] = T),
      (n[23] = D),
      (n[24] = k),
      (n[25] = A),
      (n[26] = M))
    : (M = n[26]);
  let N;
  n[27] !== E || n[28] !== M
    ? ((N = (0, Y.jsxs)(Y.Fragment, { children: [E, M] })), (n[27] = E), (n[28] = M), (n[29] = N))
    : (N = n[29]);
  let P = N;
  if (S) {
    let e;
    return (
      n[30] !== P || n[31] !== T
        ? ((e = T
            ? P
            : (0, Y.jsx)(m.FlyoutSubmenuItem, {
                LeftIcon: C,
                contentWidth: `menu`,
                label: (0, Y.jsx)(o, {
                  id: `pullRequestsPage.detail.actions.merge.trigger`,
                  defaultMessage: `Merge`,
                  description: `Button label that opens pull request merge actions`,
                }),
                children: P,
              })),
          (n[30] = P),
          (n[31] = T),
          (n[32] = e))
        : (e = n[32]),
      e
    );
  }
  if (s) {
    let e;
    n[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(o, {
          id: `pullRequestsPage.detail.actions.autoMerge.tooltip`,
          defaultMessage: `Your branch will be merged when all requirements are met`,
          description: `Tooltip explaining when an auto-merge pull request will be merged`,
        })),
        (n[33] = e))
      : (e = n[33]);
    let i;
    n[34] === y ? (i = n[35]) : ((i = () => y(!1)), (n[34] = y), (n[35] = i));
    let a;
    n[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Y.jsx)(o, {
          id: `pullRequestsPage.detail.actions.disableAutoMerge`,
          defaultMessage: `Disable auto-merge`,
          description: `Button label for disabling pull request auto-merge`,
        })),
        (n[36] = a))
      : (a = n[36]);
    let s;
    return (
      n[37] !== r || n[38] !== i
        ? ((s = (0, Y.jsx)(j, {
            side: `bottom`,
            tooltipClassName: `rounded-[20px] px-5 py-3 text-base leading-5`,
            tooltipContent: e,
            tooltipMaxWidth: `253px`,
            variant: `rich`,
            children: (0, Y.jsx)(t, {
              className: `w-full justify-center py-3`,
              color: `secondary`,
              disabled: r,
              size: `medium`,
              onClick: i,
              children: a,
            }),
          })),
          (n[37] = r),
          (n[38] = i),
          (n[39] = s))
        : (s = n[39]),
      s
    );
  }
  let F = u || (f && r) || void 0,
    I = u || l || (f && r),
    L,
    R,
    z;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Y.jsx)(W, { "aria-hidden": !0, className: `icon-sm` })),
      (R = (0, Y.jsx)(o, {
        id: `pullRequestsPage.detail.actions.merge.trigger`,
        defaultMessage: `Merge`,
        description: `Button label that opens pull request merge actions`,
      })),
      (z = (0, Y.jsx)(v, { "aria-hidden": !0, className: `icon-2xs opacity-70` })),
      (n[40] = L),
      (n[41] = R),
      (n[42] = z))
    : ((L = n[40]), (R = n[41]), (z = n[42]));
  let B;
  n[43] !== F || n[44] !== I
    ? ((B = (0, Y.jsxs)(t, {
        "aria-hidden": F,
        className: `w-full justify-center py-3`,
        color: `secondary`,
        disabled: I,
        size: `medium`,
        children: [L, R, z],
      })),
      (n[43] = F),
      (n[44] = I),
      (n[45] = B))
    : (B = n[45]);
  let V = B;
  if (u || (f && r)) {
    let e, t, r, i;
    if (n[46] !== w || n[47] !== u || n[48] !== V || n[49] !== p) {
      i = Symbol.for(`react.early_return_sentinel`);
      bb0: {
        let n = u
          ? w.formatMessage({
              id: `pullRequestsPage.detail.actions.merge.disabled.draft`,
              defaultMessage: `Mark as "Ready for review" to merge`,
              description: `Tooltip explaining why a draft pull request cannot be merged`,
            })
          : p;
        if (n == null) {
          i = V;
          break bb0;
        }
        ((e = j),
          (r = n),
          (t = w.formatMessage(
            {
              id: `pullRequestsPage.detail.actions.merge.disabled.label`,
              defaultMessage: `Merge unavailable: {reason}`,
              description: `Accessible label for a disabled merge button that includes the reason it is unavailable`,
            },
            { reason: n },
          )));
      }
      ((n[46] = w),
        (n[47] = u),
        (n[48] = V),
        (n[49] = p),
        (n[50] = e),
        (n[51] = t),
        (n[52] = r),
        (n[53] = i));
    } else ((e = n[50]), (t = n[51]), (r = n[52]), (i = n[53]));
    if (i !== Symbol.for(`react.early_return_sentinel`)) return i;
    let a;
    n[54] !== V || n[55] !== t
      ? ((a = (0, Y.jsx)(`span`, {
          "aria-label": t,
          "aria-disabled": `true`,
          className: `inline-flex w-full`,
          role: `button`,
          tabIndex: 0,
          children: V,
        })),
        (n[54] = V),
        (n[55] = t),
        (n[56] = a))
      : (a = n[56]);
    let o;
    return (
      n[57] !== e || n[58] !== r || n[59] !== a
        ? ((o = (0, Y.jsx)(e, { tooltipContent: r, children: a })),
          (n[57] = e),
          (n[58] = r),
          (n[59] = a),
          (n[60] = o))
        : (o = n[60]),
      o
    );
  }
  let H;
  return (
    n[61] !== P || n[62] !== V || n[63] !== x || n[64] !== _
      ? ((H = (0, Y.jsx)(i, { align: `end`, open: _, triggerButton: V, onOpenChange: x, children: P })),
        (n[61] = P),
        (n[62] = V),
        (n[63] = x),
        (n[64] = _),
        (n[65] = H))
      : (H = n[65]),
    H
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = N()), T(), M(), r(), p(), S(), b(), _(), H(), (Y = F()));
  }))();
}
function ce(e) {
  let t = (0, Z.c)(40),
    { disabled: n, pendingStatus: r, status: i, onStatusChange: a } = e,
    s = r === `draft` || void 0,
    l = n || i === `closed` || i === `draft`,
    u = r === `draft`,
    d;
  t[0] !== r || t[1] !== i
    ? ((d =
        r === `draft`
          ? (0, Q.jsx)(O, { className: `icon-xs` })
          : i === `draft` && (0, Q.jsx)(c, { "aria-hidden": !1, asset: I })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === a
    ? (f = t[4])
    : ((f = (e) => {
        (e.preventDefault(), a(`draft`));
      }),
      (t[3] = a),
      (t[4] = f));
  let p;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(o, {
        id: `pullRequestSidePanel.status.draft`,
        defaultMessage: `Draft`,
        description: `Draft pull request status option`,
      })),
      (t[5] = p))
    : (p = t[5]);
  let h;
  t[6] !== s || t[7] !== l || t[8] !== u || t[9] !== d || t[10] !== f
    ? ((h = (0, Q.jsx)(m.Item, {
        "aria-busy": s,
        disabled: l,
        focusableWhenDisabled: u,
        rightIcon: d,
        onSelect: f,
        children: p,
      })),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = h))
    : (h = t[11]);
  let g = r === `open` || void 0,
    _ = n || i === `open`,
    v = r === `open`,
    y;
  t[12] !== r || t[13] !== i
    ? ((y =
        r === `open`
          ? (0, Q.jsx)(O, { className: `icon-xs` })
          : i === `open` && (0, Q.jsx)(c, { "aria-hidden": !1, asset: I })),
      (t[12] = r),
      (t[13] = i),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] === a
    ? (b = t[16])
    : ((b = (e) => {
        (e.preventDefault(), a(`open`));
      }),
      (t[15] = a),
      (t[16] = b));
  let x;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(o, {
        id: `pullRequestSidePanel.status.open`,
        defaultMessage: `Ready for review`,
        description: `Ready for review pull request status option`,
      })),
      (t[17] = x))
    : (x = t[17]);
  let S;
  t[18] !== v || t[19] !== y || t[20] !== b || t[21] !== g || t[22] !== _
    ? ((S = (0, Q.jsx)(m.Item, {
        "aria-busy": g,
        disabled: _,
        focusableWhenDisabled: v,
        rightIcon: y,
        onSelect: b,
        children: x,
      })),
      (t[18] = v),
      (t[19] = y),
      (t[20] = b),
      (t[21] = g),
      (t[22] = _),
      (t[23] = S))
    : (S = t[23]);
  let C = r === `closed` || void 0,
    w = n || i === `closed`,
    T = r === `closed`,
    E;
  t[24] !== r || t[25] !== i
    ? ((E =
        r === `closed`
          ? (0, Q.jsx)(O, { className: `icon-xs` })
          : i === `closed` && (0, Q.jsx)(c, { "aria-hidden": !1, asset: I })),
      (t[24] = r),
      (t[25] = i),
      (t[26] = E))
    : (E = t[26]);
  let D;
  t[27] === a
    ? (D = t[28])
    : ((D = (e) => {
        (e.preventDefault(), a(`closed`));
      }),
      (t[27] = a),
      (t[28] = D));
  let k;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(o, {
        id: `pullRequestSidePanel.status.close`,
        defaultMessage: `Closed`,
        description: `Closed pull request status option`,
      })),
      (t[29] = k))
    : (k = t[29]);
  let A;
  t[30] !== C || t[31] !== w || t[32] !== T || t[33] !== E || t[34] !== D
    ? ((A = (0, Q.jsx)(m.Item, {
        "aria-busy": C,
        disabled: w,
        focusableWhenDisabled: T,
        rightIcon: E,
        onSelect: D,
        children: k,
      })),
      (t[30] = C),
      (t[31] = w),
      (t[32] = T),
      (t[33] = E),
      (t[34] = D),
      (t[35] = A))
    : (A = t[35]);
  let j;
  return (
    t[36] !== S || t[37] !== A || t[38] !== h
      ? ((j = (0, Q.jsxs)(Q.Fragment, { children: [h, S, A] })),
        (t[36] = S),
        (t[37] = A),
        (t[38] = h),
        (t[39] = j))
      : (j = t[39]),
    j
  );
}
var Z, Q;
function le() {
  return (le = e(() => {
    ((Z = N()), y(), T(), r(), l(), S(), (Q = F()));
  }))();
}
function ue(e) {
  let t = (0, me.c)(6),
    { account: n, defaultMergeMenuOpen: r, detail: i, placement: a, workspaceRequest: o } = e,
    s = r !== void 0 && r;
  if (!i.isAuthor || i.state === `merged` || (a !== `status-menu` && i.state !== `open`)) return null;
  let c;
  return (
    t[0] !== n || t[1] !== s || t[2] !== i || t[3] !== a || t[4] !== o
      ? ((c = (0, ge.jsx)(de, {
          account: n,
          defaultMergeMenuOpen: s,
          detail: i,
          placement: a,
          workspaceRequest: o,
        })),
        (t[0] = n),
        (t[1] = s),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function de(e) {
  let t = (0, me.c)(69),
    { account: r, defaultMergeMenuOpen: i, detail: o, placement: c, workspaceRequest: l } = e,
    d = s(a),
    f = h(),
    p;
  t[0] !== r || t[1] !== o.pullRequest
    ? ((p = { account: r, pullRequest: o.pullRequest }), (t[0] = r), (t[1] = o.pullRequest), (t[2] = p))
    : (p = t[2]);
  let m = p,
    g = R(te, m),
    _ = R(ne, m),
    v = R(re, m),
    [y, b] = (0, he.useState)(i),
    [S, C] = (0, he.useState)(!1),
    w = n(u.pullRequestMergeMethod),
    T =
      o.state !== `open` ||
      o.mergeBlocker != null ||
      o.ciStatus === `failing` ||
      o.ciStatus === `pending` ||
      !o.canMerge ||
      g,
    E = _.isPending && _.variables?.action === `toggle-auto-merge` ? _.variables.enabled : null,
    O = _.isPending ? _.variables?.action : null,
    k = null;
  O === `mark-draft`
    ? (k = `draft`)
    : O === `close`
      ? (k = `closed`)
      : (O === `mark-ready` || O === `reopen` || O === `reopen-ready`) && (k = `open`);
  let A = E ?? o.isAutoMergeEnabled === !0,
    j = o.state !== `open` || (!A && o.isDraft) || g,
    M = S ? `squash` : (w ?? `merge`),
    N;
  t[3] !== o.allowedMergeMethods || t[4] !== M || t[5] !== S
    ? ((N =
        !S && o.allowedMergeMethods != null && !o.allowedMergeMethods.includes(M)
          ? (o.allowedMergeMethods[0] ?? M)
          : M),
      (t[3] = o.allowedMergeMethods),
      (t[4] = M),
      (t[5] = S),
      (t[6] = N))
    : (N = t[6]);
  let P = N,
    F = o.state === `closed` ? `closed` : o.isDraft ? `draft` : `open`,
    I;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        b(!0);
      }),
      (t[7] = I))
    : (I = t[7]);
  let L = c === `side-panel` && o.isAuthor === !0 && o.state === `open` && !o.isDraft && !A && !g,
    z;
  (t[8] === L ? (z = t[9]) : ((z = { enabled: L }), (t[8] = L), (t[9] = z)),
    ee(`git.mergePullRequest`, I, z));
  let B;
  t[10] === d
    ? (B = t[11])
    : ((B = function (e) {
        d.get(x).danger(e, { errorAnalytics: { toastId: `pullRequestDetailActions.showError` } });
      }),
      (t[10] = d),
      (t[11] = B));
  let V = B,
    H;
  t[12] !== f || t[13] !== w || t[14] !== d || t[15] !== S
    ? ((H = function () {
        S &&
          w !== `squash` &&
          D(d, u.pullRequestMergeMethod, `squash`).catch(() => {
            d.get(x).danger(
              f.formatMessage({
                id: `pullRequestDetail.actions.squashPreferenceError`,
                defaultMessage: `Couldn’t save squash as your default merge method`,
                description: `Toast shown when saving squash as the preferred pull request merge method fails after a successful pull request action`,
              }),
              { errorAnalytics: { toastId: `pullRequestDetail.actions.squashPreferenceError` } },
            );
          });
      }),
      (t[12] = f),
      (t[13] = w),
      (t[14] = d),
      (t[15] = S),
      (t[16] = H))
    : (H = t[16]);
  let U = H,
    W;
  t[17] !== o || t[18] !== m || t[19] !== d || t[20] !== V || t[21] !== F || t[22] !== l
    ? ((W = function (e) {
        let t = ae(F, e, o.isDraft);
        (oe(d, { action: fe(t), item: o, surface: `thread_side_panel` }),
          d
            .get(ne, m)
            .mutateAsync({ ...m, action: t, source: `pull_request_board`, workspaceRequest: l })
            .catch((e) => {
              V(e.message);
            }));
      }),
      (t[17] = o),
      (t[18] = m),
      (t[19] = d),
      (t[20] = V),
      (t[21] = F),
      (t[22] = l),
      (t[23] = W))
    : (W = t[23]);
  let ie = W,
    G;
  t[24] !== f || t[25] !== P || t[26] !== V
    ? ((G = function (e, t) {
        if (t && P === `merge` && /merge commits are not allowed on this repository/i.test(e.message)) {
          (C(!0),
            V(
              f.formatMessage({
                id: `pullRequestDetail.actions.repoRestrictionError`,
                defaultMessage: `Merge commits are disabled in this repository; try again with squash`,
                description: `Error shown when a repository disallows merge commits and the next pull request action will use squash`,
              }),
            ));
          return;
        }
        V(e.message);
      }),
      (t[24] = f),
      (t[25] = P),
      (t[26] = V),
      (t[27] = G))
    : (G = t[27]);
  let K = G,
    q;
  t[28] !== o ||
  t[29] !== f ||
  t[30] !== m ||
  t[31] !== P ||
  t[32] !== U ||
  t[33] !== d ||
  t[34] !== K ||
  t[35] !== l
    ? ((q = function (e) {
        (oe(d, {
          action: e ? `enable_auto_merge` : `disable_auto_merge`,
          item: o,
          surface: `thread_side_panel`,
        }),
          d
            .get(ne, m)
            .mutateAsync({
              ...m,
              action: `toggle-auto-merge`,
              enabled: e,
              mergeMethod: P,
              source: `pull_request_board`,
              workspaceRequest: l,
            })
            .then(() => {
              (e && U(),
                C(!1),
                d
                  .get(x)
                  .success(
                    f.formatMessage({
                      id: `pullRequestsPage.detail.actions.enableAutoMerge.success`,
                      defaultMessage: `Updated auto-merge`,
                      description: `Toast shown after updating auto-merge for the selected pull request`,
                    }),
                  ));
            })
            .catch((t) => {
              K(t, e);
            }));
      }),
      (t[28] = o),
      (t[29] = f),
      (t[30] = m),
      (t[31] = P),
      (t[32] = U),
      (t[33] = d),
      (t[34] = K),
      (t[35] = l),
      (t[36] = q))
    : (q = t[36]);
  let J = q,
    Y;
  t[37] !== o ||
  t[38] !== f ||
  t[39] !== m ||
  t[40] !== P ||
  t[41] !== U ||
  t[42] !== d ||
  t[43] !== K ||
  t[44] !== l
    ? ((Y = function () {
        (oe(d, { action: `merge`, item: o, surface: `thread_side_panel` }),
          d
            .get(re, m)
            .mutateAsync({
              expectedHeadRevision: o.headRevision,
              mergeMethod: P,
              source: `pull_request_board`,
              workspaceRequest: l,
            })
            .then(() => {
              (U(),
                C(!1),
                d
                  .get(x)
                  .success(
                    f.formatMessage({
                      id: `pullRequestsPage.detail.merge.success`,
                      defaultMessage: `Merged pull request`,
                      description: `Toast shown after merging the selected pull request from the PR side panel`,
                    }),
                  ));
            })
            .catch((e) => {
              K(e, !0);
            }));
      }),
      (t[37] = o),
      (t[38] = f),
      (t[39] = m),
      (t[40] = P),
      (t[41] = U),
      (t[42] = d),
      (t[43] = K),
      (t[44] = l),
      (t[45] = Y))
    : (Y = t[45]);
  let X = Y;
  if (c === `status-menu`) {
    let e;
    return (
      t[46] !== g || t[47] !== k || t[48] !== F || t[49] !== ie
        ? ((e = (0, ge.jsx)(ce, { disabled: g, pendingStatus: k, status: F, onStatusChange: ie })),
          (t[46] = g),
          (t[47] = k),
          (t[48] = F),
          (t[49] = ie),
          (t[50] = e))
        : (e = t[50]),
      e
    );
  }
  let Z = E === !1,
    Q = E === !0,
    le = _.isPending,
    ue = o.isDraft,
    de = v.isPending,
    $;
  t[51] !== o || t[52] !== f || t[53] !== g
    ? (($ = pe(o, g, f)), (t[51] = o), (t[52] = f), (t[53] = g), (t[54] = $))
    : ($ = t[54]);
  let _e = c === `merge-menu`,
    ve;
  return (
    t[55] !== j ||
    t[56] !== A ||
    t[57] !== o.isDraft ||
    t[58] !== T ||
    t[59] !== v.isPending ||
    t[60] !== y ||
    t[61] !== X ||
    t[62] !== Z ||
    t[63] !== Q ||
    t[64] !== $ ||
    t[65] !== _e ||
    t[66] !== J ||
    t[67] !== _.isPending
      ? ((ve = (0, ge.jsx)(se, {
          autoMergeDisabled: j,
          isAutoMergeDisabling: Z,
          isAutoMergeEnabled: A,
          isAutoMergeEnabling: Q,
          isAutoMergePending: le,
          isDraft: ue,
          isMergePending: de,
          mergeDisabled: T,
          mergeDisabledMessage: $,
          menuItem: _e,
          open: y,
          onAutoMergeChange: J,
          onMerge: X,
          onOpenChange: b,
        })),
        (t[55] = j),
        (t[56] = A),
        (t[57] = o.isDraft),
        (t[58] = T),
        (t[59] = v.isPending),
        (t[60] = y),
        (t[61] = X),
        (t[62] = Z),
        (t[63] = Q),
        (t[64] = $),
        (t[65] = _e),
        (t[66] = J),
        (t[67] = _.isPending),
        (t[68] = ve))
      : (ve = t[68]),
    ve
  );
}
function fe(e) {
  switch (e) {
    case `close`:
      return `close`;
    case `mark-draft`:
      return `mark_draft`;
    case `mark-ready`:
      return `mark_ready`;
    case `reopen`:
    case `reopen-ready`:
      return `reopen`;
  }
}
function pe(e, t, n) {
  return t
    ? n.formatMessage({
        id: `pullRequestDetail.actions.merge.disabled.pending`,
        defaultMessage: `Another pull request update is in progress`,
        description: `Tooltip explaining why the merge button is disabled while another pull request update is running`,
      })
    : e.state === `closed`
      ? n.formatMessage({
          id: `pullRequestDetail.actions.merge.disabled.closed`,
          defaultMessage: `Reopen this pull request before merging`,
          description: `Tooltip explaining why a closed pull request cannot be merged`,
        })
      : e.isDraft
        ? n.formatMessage({
            id: `pullRequestDetail.actions.merge.disabled.draft`,
            defaultMessage: `Mark this pull request ready for review before merging`,
            description: `Tooltip explaining why a draft pull request cannot be merged`,
          })
        : e.mergeBlocker === `conflicts`
          ? n.formatMessage({
              id: `pullRequestDetail.actions.merge.disabled.conflicts`,
              defaultMessage: `Resolve merge conflicts before merging`,
              description: `Tooltip explaining why a pull request with conflicts cannot be merged`,
            })
          : e.mergeBlocker === `unknown`
            ? n.formatMessage({
                id: `pullRequestDetail.actions.merge.disabled.unknown`,
                defaultMessage: `GitHub is still checking whether this can be merged`,
                description: `Tooltip explaining that GitHub has not finished determining whether a pull request can be merged`,
              })
            : e.ciStatus === `failing`
              ? n.formatMessage({
                  id: `pullRequestDetail.actions.merge.disabled.failingChecks`,
                  defaultMessage: `Fix failing checks before merging`,
                  description: `Tooltip explaining why a pull request with failing checks cannot be merged`,
                })
              : e.ciStatus === `pending`
                ? n.formatMessage({
                    id: `pullRequestDetail.actions.merge.disabled.pendingChecks`,
                    defaultMessage: `Wait for checks to finish before merging`,
                    description: `Tooltip explaining why a pull request with pending checks cannot be merged`,
                  })
                : e.canMerge
                  ? null
                  : n.formatMessage({
                      id: `pullRequestDetail.actions.merge.disabled.blocked`,
                      defaultMessage: `This pull request can’t be merged yet`,
                      description: `Fallback tooltip explaining why a pull request cannot be merged`,
                    });
}
var me, he, ge;
function $() {
  return ($ = e(() => {
    ((me = N()), d(), A(), (he = L()), T(), z(), E(), q(), P(), g(), ie(), X(), le(), (ge = F()));
  }))();
}
export { q as a, X as i, $ as n, oe as o, se as r, K as s, ue as t };
//# sourceMappingURL=pull-request-detail-actions-f6b9a77ec670.js.map
