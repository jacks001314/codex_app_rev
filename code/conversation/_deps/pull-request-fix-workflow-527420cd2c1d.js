import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AJ as r,
  AMt as i,
  Amn as a,
  B6t as o,
  B7 as s,
  B7t as c,
  BUt as l,
  C$t as u,
  Cpn as d,
  Den as f,
  GY as p,
  H4t as m,
  HUt as h,
  JA as g,
  JG as _,
  Jit as v,
  Jrt as y,
  KG as b,
  Kit as x,
  MMt as S,
  N3t as C,
  O3t as w,
  Opn as ee,
  QKt as T,
  QXt as E,
  S$t as D,
  Spn as O,
  V7 as k,
  Vnn as A,
  WTt as j,
  WY as M,
  Xdt as N,
  Xrt as P,
  YKt as F,
  YUt as I,
  Yrt as te,
  ZG as L,
  Zrt as R,
  a3t as z,
  apt as B,
  c6t as V,
  cFt as H,
  dj as U,
  e0t as W,
  eZt as G,
  eit as ne,
  fj as K,
  g2t as re,
  gMt as ie,
  hA as ae,
  hMt as q,
  hmn as oe,
  idt as J,
  iit as se,
  jMt as Y,
  jXt as ce,
  kMt as le,
  kXt as ue,
  kmn as de,
  m6t as fe,
  nFt as pe,
  nWt as me,
  nit as he,
  o3t as ge,
  og as _e,
  opt as ve,
  qKt as ye,
  rTt as be,
  rit as xe,
  sg as Se,
  tit as Ce,
  uj as we,
  v2t as Te,
  vg as Ee,
  vit as De,
  yg as Oe,
  yit as ke,
  zJ as Ae,
} from "./app-initial-f094ef01c64d.js";
import { Dd as je, Dw as Me, Ed as Ne, Ew as Pe, kw as Fe } from "./app-primary-4c40d73a1074.js";
import { n as Ie, t as Le } from "./segmented-toggle-30e6111a9bfb.js";
import { a as Re, o as ze, t as Be, u as Ve } from "./pull-request-actions-7f7377d4b593.js";
import { o as He, s as Ue } from "./pull-request-detail-model-6c8655a9e7d6.js";
import { n as We, t as Ge } from "./pull-request-status-label-5a6c4f7bce5d.js";
function Ke(e, { action: t, item: n, surface: r }) {
  G(e, D, { action: t, surface: r, state: qe(n), isAuthor: n.isAuthor });
}
function qe(e) {
  return `canonical` in e
    ? e.state === `closed`
      ? `closed`
      : _e({
          canMerge: e.canMerge,
          ciStatus: e.ciStatus,
          hasMergeConflicts: e.mergeBlocker === `conflicts`,
          status: e.state === `merged` ? `merged` : e.isDraft ? `draft` : `open`,
        })
    : e.state;
}
function Je(e, { item: t, surface: n }) {
  G(e, u, { surface: n, state: t.state, isAuthor: t.isAuthor });
}
var Ye = e(() => {
  (W(), E(), Se());
});
function Xe(e) {
  let t = (0, Ze.c)(78),
    {
      allowManualMergeWhenAutoMergeEnabled: n,
      autoMergeDisabled: r,
      color: i,
      isAutoMergeDisabling: a,
      isAutoMergeEnabled: o,
      isAutoMergeEnabling: s,
      isAutoMergePending: c,
      isDraft: l,
      isMergePending: u,
      mergeDisabled: f,
      mergeDisabledMessage: p,
      menuItem: m,
      open: h,
      size: g,
      onAutoMergeChange: v,
      onMerge: y,
      onOpenChange: S,
    } = e,
    C = n !== void 0 && n,
    w = i === void 0 ? `secondary` : i,
    T = m !== void 0 && m,
    E = g === void 0 ? `medium` : g,
    D = ee(),
    O = E === `medium` ? `w-full justify-center py-3` : void 0;
  if (u || s || a) {
    let e;
    if (u) {
      let n;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, X.jsx)(d, {
            id: `pullRequestsPage.detail.actions.merging`,
            defaultMessage: `Merging…`,
            description: `Status shown while a pull request is being merged`,
          })),
          (t[0] = n))
        : (n = t[0]),
        (e = n));
    } else if (s) {
      let n;
      (t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, X.jsx)(d, {
            id: `pullRequestsPage.detail.actions.enablingAutoMerge`,
            defaultMessage: `Enabling auto-merge…`,
            description: `Status shown while pull request auto-merge is being enabled`,
          })),
          (t[1] = n))
        : (n = t[1]),
        (e = n));
    } else {
      let n;
      (t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, X.jsx)(d, {
            id: `pullRequestsPage.detail.actions.disablingAutoMerge`,
            defaultMessage: `Disabling auto-merge…`,
            description: `Status shown while pull request auto-merge is being disabled`,
          })),
          (t[2] = n))
        : (n = t[2]),
        (e = n));
    }
    let n;
    return (
      t[3] !== O || t[4] !== w || t[5] !== e || t[6] !== T || t[7] !== E
        ? ((n = T
            ? (0, X.jsx)(_.Item, {
                LeftIcon: Y,
                "aria-busy": !0,
                "aria-live": `polite`,
                disabled: !0,
                focusableWhenDisabled: !0,
                children: e,
              })
            : (0, X.jsxs)(le, {
                "aria-live": `polite`,
                className: O,
                color: w,
                disabled: !0,
                role: `status`,
                size: E,
                children: [(0, X.jsx)(Y, { "aria-hidden": !0, className: `icon-sm` }), e],
              })),
          (t[3] = O),
          (t[4] = w),
          (t[5] = e),
          (t[6] = T),
          (t[7] = E),
          (t[8] = n))
        : (n = t[8]),
      n
    );
  }
  let k = T && !C && o,
    A;
  t[9] !== C ||
  t[10] !== o ||
  t[11] !== c ||
  t[12] !== l ||
  t[13] !== u ||
  t[14] !== T ||
  t[15] !== f ||
  t[16] !== p ||
  t[17] !== y ||
  t[18] !== k
    ? ((A =
        !k && (!o || C)
          ? (0, X.jsx)(_.Item, {
              disabled: l || f || c || u,
              focusableWhenDisabled: f && p != null,
              tooltipText: f ? p : void 0,
              onSelect: (e) => {
                (T && e.preventDefault(), y());
              },
              children: (0, X.jsx)(d, {
                id: `pullRequestsPage.detail.actions.merge.menuItem`,
                defaultMessage: `Merge`,
                description: `Menu item that merges the selected pull request`,
              }),
            })
          : null),
      (t[9] = C),
      (t[10] = o),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u),
      (t[14] = T),
      (t[15] = f),
      (t[16] = p),
      (t[17] = y),
      (t[18] = k),
      (t[19] = A))
    : (A = t[19]);
  let j = k ? J : void 0,
    M;
  t[20] !== o || t[21] !== T || t[22] !== v
    ? ((M = (e) => {
        (T && e.preventDefault(), v(!o));
      }),
      (t[20] = o),
      (t[21] = T),
      (t[22] = v),
      (t[23] = M))
    : (M = t[23]);
  let N;
  t[24] === o
    ? (N = t[25])
    : ((N = o
        ? (0, X.jsx)(d, {
            id: `pullRequestsPage.detail.actions.disableAutoMerge`,
            defaultMessage: `Disable auto-merge`,
            description: `Button label for disabling pull request auto-merge`,
          })
        : (0, X.jsx)(d, {
            id: `pullRequestsPage.detail.actions.autoMerge.menuItem`,
            defaultMessage: `Enable auto-merge`,
            description: `Menu item that enables auto-merge for a pull request`,
          })),
      (t[24] = o),
      (t[25] = N));
  let P;
  t[26] !== r || t[27] !== k || t[28] !== j || t[29] !== M || t[30] !== N
    ? ((P = (0, X.jsx)(_.Item, {
        LeftIcon: j,
        disabled: r,
        focusableWhenDisabled: k,
        onSelect: M,
        children: N,
      })),
      (t[26] = r),
      (t[27] = k),
      (t[28] = j),
      (t[29] = M),
      (t[30] = N),
      (t[31] = P))
    : (P = t[31]);
  let F;
  t[32] !== A || t[33] !== P
    ? ((F = (0, X.jsxs)(X.Fragment, { children: [A, P] })), (t[32] = A), (t[33] = P), (t[34] = F))
    : (F = t[34]);
  let I = F;
  if (T) {
    let e;
    return (
      t[35] !== I || t[36] !== k
        ? ((e = k
            ? I
            : (0, X.jsx)(_.FlyoutSubmenuItem, {
                LeftIcon: J,
                contentWidth: `menu`,
                label: (0, X.jsx)(d, {
                  id: `pullRequestsPage.detail.actions.merge.trigger`,
                  defaultMessage: `Merge`,
                  description: `Button label that opens pull request merge actions`,
                }),
                children: I,
              })),
          (t[35] = I),
          (t[36] = k),
          (t[37] = e))
        : (e = t[37]),
      e
    );
  }
  if (o && !C) {
    let e;
    t[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(d, {
          id: `pullRequestsPage.detail.actions.autoMerge.tooltip`,
          defaultMessage: `Your branch will be merged when all requirements are met`,
          description: `Tooltip explaining when an auto-merge pull request will be merged`,
        })),
        (t[38] = e))
      : (e = t[38]);
    let n;
    t[39] === v ? (n = t[40]) : ((n = () => v(!1)), (t[39] = v), (t[40] = n));
    let i;
    t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, X.jsx)(d, {
          id: `pullRequestsPage.detail.actions.disableAutoMerge`,
          defaultMessage: `Disable auto-merge`,
          description: `Button label for disabling pull request auto-merge`,
        })),
        (t[41] = i))
      : (i = t[41]);
    let a;
    return (
      t[42] !== r || t[43] !== O || t[44] !== w || t[45] !== E || t[46] !== n
        ? ((a = (0, X.jsx)(x, {
            side: `bottom`,
            tooltipClassName: `rounded-[20px] px-5 py-3 text-base leading-5`,
            tooltipContent: e,
            tooltipMaxWidth: `253px`,
            variant: `rich`,
            children: (0, X.jsx)(le, {
              className: O,
              color: w,
              disabled: r,
              size: E,
              onClick: n,
              children: i,
            }),
          })),
          (t[42] = r),
          (t[43] = O),
          (t[44] = w),
          (t[45] = E),
          (t[46] = n),
          (t[47] = a))
        : (a = t[47]),
      a
    );
  }
  let te = l || (f && r) || void 0,
    L = l || c || (f && r),
    R,
    z,
    B;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, X.jsx)(Ee, { "aria-hidden": !0, className: `icon-sm` })),
      (z = (0, X.jsx)(d, {
        id: `pullRequestsPage.detail.actions.merge.trigger`,
        defaultMessage: `Merge`,
        description: `Button label that opens pull request merge actions`,
      })),
      (B = (0, X.jsx)(De, { "aria-hidden": !0, className: `icon-2xs opacity-70` })),
      (t[48] = R),
      (t[49] = z),
      (t[50] = B))
    : ((R = t[48]), (z = t[49]), (B = t[50]));
  let V;
  t[51] !== O || t[52] !== w || t[53] !== E || t[54] !== te || t[55] !== L
    ? ((V = (0, X.jsxs)(le, {
        "aria-hidden": te,
        className: O,
        color: w,
        disabled: L,
        size: E,
        children: [R, z, B],
      })),
      (t[51] = O),
      (t[52] = w),
      (t[53] = E),
      (t[54] = te),
      (t[55] = L),
      (t[56] = V))
    : (V = t[56]);
  let H = V;
  if (l || (f && r)) {
    let e, n, r, i;
    if (t[57] !== D || t[58] !== l || t[59] !== H || t[60] !== p) {
      i = Symbol.for(`react.early_return_sentinel`);
      bb0: {
        let t = l
          ? D.formatMessage({
              id: `pullRequestsPage.detail.actions.merge.disabled.draft`,
              defaultMessage: `Mark as "Ready for review" to merge`,
              description: `Tooltip explaining why a draft pull request cannot be merged`,
            })
          : p;
        if (t == null) {
          i = H;
          break bb0;
        }
        ((e = x),
          (r = t),
          (n = D.formatMessage(
            {
              id: `pullRequestsPage.detail.actions.merge.disabled.label`,
              defaultMessage: `Merge unavailable: {reason}`,
              description: `Accessible label for a disabled merge button that includes the reason it is unavailable`,
            },
            { reason: t },
          )));
      }
      ((t[57] = D),
        (t[58] = l),
        (t[59] = H),
        (t[60] = p),
        (t[61] = e),
        (t[62] = n),
        (t[63] = r),
        (t[64] = i));
    } else ((e = t[61]), (n = t[62]), (r = t[63]), (i = t[64]));
    if (i !== Symbol.for(`react.early_return_sentinel`)) return i;
    let a = E === `medium` ? `inline-flex w-full` : `inline-flex`,
      o;
    t[65] !== H || t[66] !== n || t[67] !== a
      ? ((o = (0, X.jsx)(`span`, {
          "aria-label": n,
          "aria-disabled": `true`,
          className: a,
          role: `button`,
          tabIndex: 0,
          children: H,
        })),
        (t[65] = H),
        (t[66] = n),
        (t[67] = a),
        (t[68] = o))
      : (o = t[68]);
    let s;
    return (
      t[69] !== e || t[70] !== r || t[71] !== o
        ? ((s = (0, X.jsx)(e, { tooltipContent: r, children: o })),
          (t[69] = e),
          (t[70] = r),
          (t[71] = o),
          (t[72] = s))
        : (s = t[72]),
      s
    );
  }
  let U;
  return (
    t[73] !== I || t[74] !== H || t[75] !== S || t[76] !== h
      ? ((U = (0, X.jsx)(b, {
          align: `end`,
          open: h,
          triggerButton: H,
          onOpenChange: S,
          children: I,
        })),
        (t[73] = I),
        (t[74] = H),
        (t[75] = S),
        (t[76] = h),
        (t[77] = U))
      : (U = t[77]),
    U
  );
}
var Ze,
  X,
  Qe = e(() => {
    ((Ze = de()), O(), i(), L(), N(), S(), v(), ke(), Oe(), (X = oe()));
  });
function $e(e) {
  let t = (0, et.c)(64),
    {
      allowedMergeMethods: n,
      autoMergeDisabled: r,
      autoMergeEnabled: i,
      error: a,
      isAutoMergeDisabling: o,
      isAutoMergeEnabling: s,
      isAutoMergePending: c,
      isDraft: l,
      isMergePending: u,
      isPending: f,
      mergeDisabled: p,
      mergeDisabledMessage: m,
      mergeMethod: h,
      mergeOpen: g,
      onAutoMergeChange: _,
      onMerge: v,
      onMergeMethodChange: b,
      onMergeOpenChange: x,
    } = e,
    S = ee(),
    C = n == null || n.length > 1,
    w;
  t[0] !== a || t[1] !== g
    ? ((w =
        a == null || g
          ? null
          : (0, Z.jsx)(`span`, {
              className: `max-w-48 truncate text-xs text-danger`,
              role: `alert`,
              children: a,
            })),
      (t[0] = a),
      (t[1] = g),
      (t[2] = w))
    : (w = t[2]);
  let T;
  t[3] === x
    ? (T = t[4])
    : ((T = () => {
        x(!0);
      }),
      (t[3] = x),
      (t[4] = T));
  let E;
  t[5] !== r ||
  t[6] !== i ||
  t[7] !== o ||
  t[8] !== s ||
  t[9] !== c ||
  t[10] !== l ||
  t[11] !== u ||
  t[12] !== p ||
  t[13] !== m ||
  t[14] !== _ ||
  t[15] !== T
    ? ((E = (0, Z.jsx)(Xe, {
        allowManualMergeWhenAutoMergeEnabled: !0,
        autoMergeDisabled: r,
        color: `primary`,
        isAutoMergeDisabling: o,
        isAutoMergeEnabled: i,
        isAutoMergeEnabling: s,
        isAutoMergePending: c,
        isDraft: l,
        isMergePending: u,
        mergeDisabled: p,
        mergeDisabledMessage: m,
        size: `toolbar`,
        onAutoMergeChange: _,
        onMerge: T,
      })),
      (t[5] = r),
      (t[6] = i),
      (t[7] = o),
      (t[8] = s),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = p),
      (t[13] = m),
      (t[14] = _),
      (t[15] = T),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] !== f || t[18] !== x
    ? ((D = (e) => {
        f || x(e);
      }),
      (t[17] = f),
      (t[18] = x),
      (t[19] = D))
    : (D = t[19]);
  let O;
  t[20] !== f || t[21] !== v
    ? ((O = (e) => {
        (e.preventDefault(), f || v());
      }),
      (t[20] = f),
      (t[21] = v),
      (t[22] = O))
    : (O = t[22]);
  let k;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(xe, {
        className: `sr-only`,
        children: (0, Z.jsx)(d, {
          id: `pullRequestDetail.merge.title`,
          defaultMessage: `Merge pull request`,
          description: `Title for the pull request merge confirmation`,
        }),
      })),
      (t[23] = k))
    : (k = t[23]);
  let A;
  t[24] === C
    ? (A = t[25])
    : ((A = (0, Z.jsx)(he, {
        className: `sr-only`,
        children: C
          ? (0, Z.jsx)(d, {
              id: `pullRequestDetail.merge.description`,
              defaultMessage: `Choose a merge method and confirm.`,
              description: `Accessible description for pull request merge confirmation when multiple merge methods are available`,
            })
          : (0, Z.jsx)(d, {
              id: `pullRequestDetail.merge.description.singleMethod`,
              defaultMessage: `Confirm the selected merge method.`,
              description: `Accessible description for pull request merge confirmation when the repository permits only one merge method`,
            }),
      })),
      (t[24] = C),
      (t[25] = A));
  let j;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(R, {
        children: (0, Z.jsx)(P, {
          title: (0, Z.jsx)(d, {
            id: `pullRequestDetail.merge.title`,
            defaultMessage: `Merge pull request`,
            description: `Title for the pull request merge confirmation`,
          }),
          subtitle: (0, Z.jsx)(d, {
            id: `pullRequestDetail.merge.subtitle`,
            defaultMessage: `GitHub will merge only if the displayed head commit still matches.`,
            description: `Safety explanation in the pull request merge confirmation`,
          }),
        }),
      })),
      (t[26] = j))
    : (j = t[26]);
  let M;
  t[27] !== n || t[28] !== C || t[29] !== S || t[30] !== h || t[31] !== b
    ? ((M = C
        ? (0, Z.jsx)(R, {
            children: (0, Z.jsx)(Le, {
              ariaLabel: S.formatMessage({
                id: `pullRequestDetail.merge.method`,
                defaultMessage: `Merge method`,
                description: `Accessible label for choosing how GitHub combines a pull request's commits when merging`,
              }),
              options: [
                {
                  id: `squash`,
                  label: (0, Z.jsx)(d, {
                    id: `pullRequestDetail.merge.squash`,
                    defaultMessage: `Squash`,
                    description: `GitHub squash-merge option that combines the pull request's commits into one commit`,
                  }),
                },
                {
                  id: `merge`,
                  label: (0, Z.jsx)(d, {
                    id: `pullRequestDetail.merge.commit`,
                    defaultMessage: `Merge commit`,
                    description: `GitHub merge-commit option that preserves the pull request's commits and creates a merge commit`,
                  }),
                },
              ].filter((e) => {
                let { id: t } = e;
                return n == null || n.includes(t);
              }),
              selectedId: h,
              onSelect: b,
            }),
          })
        : null),
      (t[27] = n),
      (t[28] = C),
      (t[29] = S),
      (t[30] = h),
      (t[31] = b),
      (t[32] = M))
    : (M = t[32]);
  let N;
  t[33] === a
    ? (N = t[34])
    : ((N =
        a == null
          ? null
          : (0, Z.jsx)(R, {
              children: (0, Z.jsx)(`div`, {
                className: `text-sm text-danger`,
                role: `alert`,
                children: a,
              }),
            })),
      (t[33] = a),
      (t[34] = N));
  let F;
  t[35] === x
    ? (F = t[36])
    : ((F = () => {
        x(!1);
      }),
      (t[35] = x),
      (t[36] = F));
  let I;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Z.jsx)(d, {
        id: `pullRequestDetail.merge.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel merging a pull request`,
      })),
      (t[37] = I))
    : (I = t[37]);
  let L;
  t[38] !== f || t[39] !== F
    ? ((L = (0, Z.jsx)(le, { color: `secondary`, disabled: f, onClick: F, children: I })),
      (t[38] = f),
      (t[39] = F),
      (t[40] = L))
    : (L = t[40]);
  let z;
  t[41] === h
    ? (z = t[42])
    : ((z =
        h === `squash`
          ? (0, Z.jsx)(d, {
              id: `pullRequestDetail.merge.confirmSquash`,
              defaultMessage: `Squash and merge`,
              description: `Button to confirm combining a pull request's commits into one commit and merging it`,
            })
          : (0, Z.jsx)(d, {
              id: `pullRequestDetail.merge.confirmMergeCommit`,
              defaultMessage: `Create merge commit`,
              description: `Button to confirm merging a pull request while preserving its individual commits and creating a merge commit`,
            })),
      (t[41] = h),
      (t[42] = z));
  let B;
  t[43] !== f || t[44] !== z
    ? ((B = (0, Z.jsx)(le, { color: `primary`, loading: f, type: `submit`, children: z })),
      (t[43] = f),
      (t[44] = z),
      (t[45] = B))
    : (B = t[45]);
  let V;
  t[46] !== L || t[47] !== B
    ? ((V = (0, Z.jsx)(R, { children: (0, Z.jsxs)(te, { children: [L, B] }) })),
      (t[46] = L),
      (t[47] = B),
      (t[48] = V))
    : (V = t[48]);
  let H;
  t[49] !== f || t[50] !== N || t[51] !== V || t[52] !== O || t[53] !== A || t[54] !== M
    ? ((H = (0, Z.jsxs)(y, {
        as: `form`,
        "aria-busy": f,
        onSubmit: O,
        children: [k, A, j, M, N, V],
      })),
      (t[49] = f),
      (t[50] = N),
      (t[51] = V),
      (t[52] = O),
      (t[53] = A),
      (t[54] = M),
      (t[55] = H))
    : (H = t[55]);
  let U;
  t[56] !== g || t[57] !== H || t[58] !== D
    ? ((U = (0, Z.jsx)(Ce, { open: g, showDialogClose: !1, onOpenChange: D, children: H })),
      (t[56] = g),
      (t[57] = H),
      (t[58] = D),
      (t[59] = U))
    : (U = t[59]);
  let W;
  return (
    t[60] !== w || t[61] !== U || t[62] !== E
      ? ((W = (0, Z.jsxs)(Z.Fragment, { children: [w, E, U] })),
        (t[60] = w),
        (t[61] = U),
        (t[62] = E),
        (t[63] = W))
      : (W = t[63]),
    W
  );
}
var et,
  Z,
  tt = e(() => {
    ((et = de()), O(), i(), se(), ne(), Ie(), Qe(), (Z = oe()));
  });
function nt(e) {
  let t = (0, it.c)(24),
    { disabled: n, menuItems: r, pendingStatus: i, status: a, onStatusChange: o } = e,
    s = n !== void 0 && n,
    c = r !== void 0 && r,
    l = i === void 0 ? null : i,
    u = ee();
  if (c) {
    let e;
    return (
      t[0] !== s || t[1] !== o || t[2] !== l || t[3] !== a
        ? ((e = (0, Q.jsx)(rt, {
            disabled: s,
            keepOpenOnSelect: !0,
            pendingStatus: l,
            status: a,
            onStatusChange: o,
          })),
          (t[0] = s),
          (t[1] = o),
          (t[2] = l),
          (t[3] = a),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let d;
  t[5] === u
    ? (d = t[6])
    : ((d = u.formatMessage({
        id: `pullRequestSidePanel.status.change`,
        defaultMessage: `Change pull request status`,
        description: `Accessible label for the pull request status dropdown`,
      })),
      (t[5] = u),
      (t[6] = d));
  let f = l != null,
    p;
  t[7] === a ? (p = t[8]) : ((p = (0, Q.jsx)(Ge, { status: a })), (t[7] = a), (t[8] = p));
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(q, { "aria-hidden": !1, asset: B })), (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== s || t[11] !== d || t[12] !== f || t[13] !== p
    ? ((h = (0, Q.jsxs)(le, {
        className: `-ms-2`,
        "aria-label": d,
        color: `ghostActive`,
        disabled: s,
        loading: f,
        size: `default`,
        children: [p, m],
      })),
      (t[10] = s),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] !== s || t[16] !== o || t[17] !== l || t[18] !== a
    ? ((g = (0, Q.jsx)(rt, {
        disabled: s,
        keepOpenOnSelect: !1,
        pendingStatus: l,
        status: a,
        onStatusChange: o,
      })),
      (t[15] = s),
      (t[16] = o),
      (t[17] = l),
      (t[18] = a),
      (t[19] = g))
    : (g = t[19]);
  let _;
  return (
    t[20] !== s || t[21] !== h || t[22] !== g
      ? ((_ = (0, Q.jsx)(b, { contentWidth: `xs`, disabled: s, triggerButton: h, children: g })),
        (t[20] = s),
        (t[21] = h),
        (t[22] = g),
        (t[23] = _))
      : (_ = t[23]),
    _
  );
}
function rt(e) {
  let t = (0, it.c)(43),
    { disabled: n, keepOpenOnSelect: r, pendingStatus: i, status: a, onStatusChange: o } = e,
    s = i === `draft` || void 0,
    c = n || a === `closed` || a === `draft`,
    l = i === `draft`,
    u;
  t[0] !== i || t[1] !== a
    ? ((u =
        i === `draft`
          ? (0, Q.jsx)(Y, { className: `icon-xs` })
          : a === `draft` && (0, Q.jsx)(q, { "aria-hidden": !1, asset: Ne })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = u))
    : (u = t[2]);
  let f;
  t[3] !== r || t[4] !== o
    ? ((f = (e) => {
        (r && e.preventDefault(), o(`draft`));
      }),
      (t[3] = r),
      (t[4] = o),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(d, {
        id: `pullRequestSidePanel.status.draft`,
        defaultMessage: `Draft`,
        description: `Draft pull request status option`,
      })),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== s || t[8] !== c || t[9] !== l || t[10] !== u || t[11] !== f
    ? ((m = (0, Q.jsx)(_.Item, {
        "aria-busy": s,
        disabled: c,
        focusableWhenDisabled: l,
        rightIcon: u,
        onSelect: f,
        children: p,
      })),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u),
      (t[11] = f),
      (t[12] = m))
    : (m = t[12]);
  let h = i === `open` || void 0,
    g = n || a === `open`,
    v = i === `open`,
    y;
  t[13] !== i || t[14] !== a
    ? ((y =
        i === `open`
          ? (0, Q.jsx)(Y, { className: `icon-xs` })
          : a === `open` && (0, Q.jsx)(q, { "aria-hidden": !1, asset: Ne })),
      (t[13] = i),
      (t[14] = a),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] !== r || t[17] !== o
    ? ((b = (e) => {
        (r && e.preventDefault(), o(`open`));
      }),
      (t[16] = r),
      (t[17] = o),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(d, {
        id: `pullRequestSidePanel.status.open`,
        defaultMessage: `Ready for review`,
        description: `Ready for review pull request status option`,
      })),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== v || t[21] !== y || t[22] !== b || t[23] !== h || t[24] !== g
    ? ((S = (0, Q.jsx)(_.Item, {
        "aria-busy": h,
        disabled: g,
        focusableWhenDisabled: v,
        rightIcon: y,
        onSelect: b,
        children: x,
      })),
      (t[20] = v),
      (t[21] = y),
      (t[22] = b),
      (t[23] = h),
      (t[24] = g),
      (t[25] = S))
    : (S = t[25]);
  let C = i === `closed` || void 0,
    w = n || a === `closed`,
    ee = i === `closed`,
    T;
  t[26] !== i || t[27] !== a
    ? ((T =
        i === `closed`
          ? (0, Q.jsx)(Y, { className: `icon-xs` })
          : a === `closed` && (0, Q.jsx)(q, { "aria-hidden": !1, asset: Ne })),
      (t[26] = i),
      (t[27] = a),
      (t[28] = T))
    : (T = t[28]);
  let E;
  t[29] !== r || t[30] !== o
    ? ((E = (e) => {
        (r && e.preventDefault(), o(`closed`));
      }),
      (t[29] = r),
      (t[30] = o),
      (t[31] = E))
    : (E = t[31]);
  let D;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(d, {
        id: `pullRequestSidePanel.status.close`,
        defaultMessage: `Closed`,
        description: `Closed pull request status option`,
      })),
      (t[32] = D))
    : (D = t[32]);
  let O;
  t[33] !== C || t[34] !== w || t[35] !== ee || t[36] !== T || t[37] !== E
    ? ((O = (0, Q.jsx)(_.Item, {
        "aria-busy": C,
        disabled: w,
        focusableWhenDisabled: ee,
        rightIcon: T,
        onSelect: E,
        children: D,
      })),
      (t[33] = C),
      (t[34] = w),
      (t[35] = ee),
      (t[36] = T),
      (t[37] = E),
      (t[38] = O))
    : (O = t[38]);
  let k;
  return (
    t[39] !== S || t[40] !== O || t[41] !== m
      ? ((k = (0, Q.jsxs)(Q.Fragment, { children: [m, S, O] })),
        (t[39] = S),
        (t[40] = O),
        (t[41] = m),
        (t[42] = k))
      : (k = t[42]),
    k
  );
}
var it,
  Q,
  at = e(() => {
    ((it = de()), je(), ve(), O(), i(), L(), ie(), S(), We(), (Q = oe()));
  });
function ot(e) {
  let t = (0, ut.c)(7),
    {
      account: n,
      defaultMergeMenuOpen: r,
      detail: i,
      placement: a,
      source: o,
      workspaceRequest: s,
    } = e,
    c = r !== void 0 && r,
    l = o === void 0 ? `pull_requests_page` : o;
  if (
    !i.isAuthor ||
    i.state === `merged` ||
    (a !== `header` && a !== `status` && a !== `status-menu` && i.state !== `open`)
  )
    return null;
  let u;
  return (
    t[0] !== n || t[1] !== c || t[2] !== i || t[3] !== a || t[4] !== l || t[5] !== s
      ? ((u = (0, ft.jsx)(st, {
          account: n,
          defaultMergeMenuOpen: c,
          detail: i,
          placement: a,
          source: l,
          workspaceRequest: s,
        })),
        (t[0] = n),
        (t[1] = c),
        (t[2] = i),
        (t[3] = a),
        (t[4] = l),
        (t[5] = s),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function st(e) {
  let t = (0, ut.c)(101),
    {
      account: r,
      defaultMergeMenuOpen: i,
      detail: a,
      placement: o,
      source: s,
      workspaceRequest: l,
    } = e,
    u = n(z),
    d = ee(),
    f;
  t[0] !== r || t[1] !== a.pullRequest
    ? ((f = { account: r, pullRequest: a.pullRequest }),
      (t[0] = r),
      (t[1] = a.pullRequest),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m = C(Re, p),
    h = C(Ve, p),
    g = C(ze, p),
    [_, v] = (0, dt.useState)(i),
    [y, b] = (0, dt.useState)(null),
    [x, S] = (0, dt.useState)(!1),
    w = T(c.pullRequestMergeMethod),
    [E, D] = (0, dt.useState)(null),
    O =
      a.state !== `open` ||
      a.mergeBlocker != null ||
      a.ciStatus === `failing` ||
      a.ciStatus === `pending` ||
      !a.canMerge ||
      m,
    A = h.isPending && h.variables?.action === `toggle-auto-merge` ? h.variables.enabled : null,
    j = h.isPending ? h.variables?.action : null,
    M = null;
  j === `mark-draft`
    ? (M = `draft`)
    : j === `close`
      ? (M = `closed`)
      : (j === `mark-ready` || j === `reopen` || j === `reopen-ready`) && (M = `open`);
  let N = A ?? a.isAutoMergeEnabled === !0,
    P = a.state !== `open` || (!N && a.isDraft) || m,
    I = x ? `squash` : (y ?? w ?? `merge`),
    te;
  t[3] !== a.allowedMergeMethods || t[4] !== I || t[5] !== x
    ? ((te =
        !x && a.allowedMergeMethods != null && !a.allowedMergeMethods.includes(I)
          ? (a.allowedMergeMethods[0] ?? I)
          : I),
      (t[3] = a.allowedMergeMethods),
      (t[4] = I),
      (t[5] = x),
      (t[6] = te))
    : (te = t[6]);
  let L = te,
    R = a.state === `closed` ? `closed` : a.isDraft ? `draft` : `open`,
    B = s === `pull_request_board` ? `thread_side_panel` : `pull_request_page`,
    V;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = () => {
        (D(null), v(!0));
      }),
      (t[7] = V))
    : (V = t[7]);
  let H =
      (o === `header` || o === `side-panel`) &&
      a.isAuthor &&
      a.state === `open` &&
      !a.isDraft &&
      !N &&
      !m,
    U;
  (t[8] === H ? (U = t[9]) : ((U = { enabled: H }), (t[8] = H), (t[9] = U)),
    k(`git.mergePullRequest`, V, U));
  let W;
  t[10] !== o || t[11] !== u || t[12] !== s
    ? ((W = function (e) {
        (D(e), (s === `pull_request_board` || o === `status`) && u.get(ce).danger(e));
      }),
      (t[10] = o),
      (t[11] = u),
      (t[12] = s),
      (t[13] = W))
    : (W = t[13]);
  let G = W,
    ne;
  t[14] !== d || t[15] !== w || t[16] !== u || t[17] !== x
    ? ((ne = function () {
        !x ||
          w === `squash` ||
          F(u, c.pullRequestMergeMethod, `squash`).catch(() => {
            u.get(ce).danger(
              d.formatMessage({
                id: `pullRequestDetail.actions.squashPreferenceError`,
                defaultMessage: `Couldn’t save squash as your default merge method`,
                description: `Toast shown when saving squash as the preferred pull request merge method fails after a successful pull request action`,
              }),
            );
          });
      }),
      (t[14] = d),
      (t[15] = w),
      (t[16] = u),
      (t[17] = x),
      (t[18] = ne))
    : (ne = t[18]);
  let K = ne,
    re;
  t[19] !== a ||
  t[20] !== p ||
  t[21] !== u ||
  t[22] !== G ||
  t[23] !== s ||
  t[24] !== R ||
  t[25] !== B ||
  t[26] !== l
    ? ((re = function (e) {
        let t = He(R, e, a.isDraft);
        (D(null),
          Ke(u, { action: ct(t), item: a, surface: B }),
          u
            .get(Ve, p)
            .mutateAsync({ ...p, action: t, source: s, workspaceRequest: l })
            .catch((e) => {
              G(e.message);
            }));
      }),
      (t[19] = a),
      (t[20] = p),
      (t[21] = u),
      (t[22] = G),
      (t[23] = s),
      (t[24] = R),
      (t[25] = B),
      (t[26] = l),
      (t[27] = re))
    : (re = t[27]);
  let ie = re,
    ae;
  t[28] !== d || t[29] !== L || t[30] !== G
    ? ((ae = function (e, t) {
        if (
          t &&
          L === `merge` &&
          /merge commits are not allowed on this repository/i.test(e.message)
        ) {
          (S(!0),
            G(
              d.formatMessage({
                id: `pullRequestDetail.actions.repoRestrictionError`,
                defaultMessage: `Merge commits are disabled in this repository; try again with squash`,
                description: `Error shown when a repository disallows merge commits and the next pull request action will use squash`,
              }),
            ));
          return;
        }
        G(e.message);
      }),
      (t[28] = d),
      (t[29] = L),
      (t[30] = G),
      (t[31] = ae))
    : (ae = t[31]);
  let q = ae,
    oe;
  t[32] !== a ||
  t[33] !== d ||
  t[34] !== p ||
  t[35] !== L ||
  t[36] !== K ||
  t[37] !== u ||
  t[38] !== q ||
  t[39] !== s ||
  t[40] !== B ||
  t[41] !== l
    ? ((oe = function (e) {
        (D(null),
          Ke(u, { action: e ? `enable_auto_merge` : `disable_auto_merge`, item: a, surface: B }),
          u
            .get(Ve, p)
            .mutateAsync({
              ...p,
              action: `toggle-auto-merge`,
              enabled: e,
              mergeMethod: L,
              source: s,
              workspaceRequest: l,
            })
            .then(() => {
              (e && K(),
                S(!1),
                s === `pull_request_board` &&
                  u.get(ce).success(
                    d.formatMessage({
                      id: `pullRequestsPage.detail.actions.enableAutoMerge.success`,
                      defaultMessage: `Updated auto-merge`,
                      description: `Toast shown after updating auto-merge for the selected pull request`,
                    }),
                  ));
            })
            .catch((t) => {
              q(t, e);
            }));
      }),
      (t[32] = a),
      (t[33] = d),
      (t[34] = p),
      (t[35] = L),
      (t[36] = K),
      (t[37] = u),
      (t[38] = q),
      (t[39] = s),
      (t[40] = B),
      (t[41] = l),
      (t[42] = oe))
    : (oe = t[42]);
  let J = oe,
    se;
  t[43] !== a ||
  t[44] !== d ||
  t[45] !== p ||
  t[46] !== L ||
  t[47] !== K ||
  t[48] !== u ||
  t[49] !== q ||
  t[50] !== s ||
  t[51] !== B ||
  t[52] !== l
    ? ((se = function () {
        (D(null),
          Ke(u, { action: `merge`, item: a, surface: B }),
          u
            .get(ze, p)
            .mutateAsync({
              expectedHeadRevision: a.headRevision,
              mergeMethod: L,
              source: s,
              workspaceRequest: l,
            })
            .then(() => {
              (K(),
                S(!1),
                s === `pull_request_board`
                  ? u.get(ce).success(
                      d.formatMessage({
                        id: `pullRequestsPage.detail.merge.success`,
                        defaultMessage: `Merged pull request`,
                        description: `Toast shown after merging the selected pull request from the PR side panel`,
                      }),
                    )
                  : v(!1));
            })
            .catch((e) => {
              q(e, !0);
            }));
      }),
      (t[43] = a),
      (t[44] = d),
      (t[45] = p),
      (t[46] = L),
      (t[47] = K),
      (t[48] = u),
      (t[49] = q),
      (t[50] = s),
      (t[51] = B),
      (t[52] = l),
      (t[53] = se))
    : (se = t[53]);
  let Y = se;
  if (o === `status` || o === `status-menu`) {
    let e = o === `status-menu`,
      n;
    return (
      t[54] !== m || t[55] !== M || t[56] !== R || t[57] !== e || t[58] !== ie
        ? ((n = (0, ft.jsx)(nt, {
            disabled: m,
            menuItems: e,
            pendingStatus: M,
            status: R,
            onStatusChange: ie,
          })),
          (t[54] = m),
          (t[55] = M),
          (t[56] = R),
          (t[57] = e),
          (t[58] = ie),
          (t[59] = n))
        : (n = t[59]),
      n
    );
  }
  if (o === `side-panel` || o === `merge-menu`) {
    let e = A === !1,
      n = A === !0,
      r = h.isPending,
      i = a.isDraft,
      s = g.isPending,
      c;
    t[60] !== a || t[61] !== d || t[62] !== m
      ? ((c = lt(a, m, d)), (t[60] = a), (t[61] = d), (t[62] = m), (t[63] = c))
      : (c = t[63]);
    let l = o === `merge-menu`,
      u;
    return (
      t[64] !== P ||
      t[65] !== N ||
      t[66] !== a.isDraft ||
      t[67] !== O ||
      t[68] !== g.isPending ||
      t[69] !== _ ||
      t[70] !== Y ||
      t[71] !== e ||
      t[72] !== n ||
      t[73] !== c ||
      t[74] !== l ||
      t[75] !== J ||
      t[76] !== h.isPending
        ? ((u = (0, ft.jsx)(Xe, {
            autoMergeDisabled: P,
            isAutoMergeDisabling: e,
            isAutoMergeEnabled: N,
            isAutoMergeEnabling: n,
            isAutoMergePending: r,
            isDraft: i,
            isMergePending: s,
            mergeDisabled: O,
            mergeDisabledMessage: c,
            menuItem: l,
            open: _,
            onAutoMergeChange: J,
            onMerge: Y,
            onOpenChange: v,
          })),
          (t[64] = P),
          (t[65] = N),
          (t[66] = a.isDraft),
          (t[67] = O),
          (t[68] = g.isPending),
          (t[69] = _),
          (t[70] = Y),
          (t[71] = e),
          (t[72] = n),
          (t[73] = c),
          (t[74] = l),
          (t[75] = J),
          (t[76] = h.isPending),
          (t[77] = u))
        : (u = t[77]),
      u
    );
  }
  let le = a.allowedMergeMethods,
    ue = A === !1,
    de = A === !0,
    fe = h.isPending,
    pe = a.isDraft,
    me = g.isPending,
    he;
  t[78] !== a || t[79] !== d || t[80] !== m
    ? ((he = lt(a, m, d)), (t[78] = a), (t[79] = d), (t[80] = m), (t[81] = he))
    : (he = t[81]);
  let ge, _e;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (e) => {
        (b(e), S(!1));
      }),
      (_e = (e) => {
        (e && D(null), v(e));
      }),
      (t[82] = ge),
      (t[83] = _e))
    : ((ge = t[82]), (_e = t[83]));
  let ve;
  return (
    t[84] !== P ||
    t[85] !== N ||
    t[86] !== a.allowedMergeMethods ||
    t[87] !== a.isDraft ||
    t[88] !== E ||
    t[89] !== m ||
    t[90] !== O ||
    t[91] !== L ||
    t[92] !== g.isPending ||
    t[93] !== _ ||
    t[94] !== Y ||
    t[95] !== ue ||
    t[96] !== de ||
    t[97] !== he ||
    t[98] !== J ||
    t[99] !== h.isPending
      ? ((ve = (0, ft.jsx)($e, {
          allowedMergeMethods: le,
          autoMergeDisabled: P,
          autoMergeEnabled: N,
          error: E,
          isAutoMergeDisabling: ue,
          isAutoMergeEnabling: de,
          isAutoMergePending: fe,
          isDraft: pe,
          isMergePending: me,
          isPending: m,
          mergeDisabled: O,
          mergeDisabledMessage: he,
          mergeMethod: L,
          mergeOpen: _,
          onAutoMergeChange: J,
          onMerge: Y,
          onMergeMethodChange: ge,
          onMergeOpenChange: _e,
        })),
        (t[84] = P),
        (t[85] = N),
        (t[86] = a.allowedMergeMethods),
        (t[87] = a.isDraft),
        (t[88] = E),
        (t[89] = m),
        (t[90] = O),
        (t[91] = L),
        (t[92] = g.isPending),
        (t[93] = _),
        (t[94] = Y),
        (t[95] = ue),
        (t[96] = de),
        (t[97] = he),
        (t[98] = J),
        (t[99] = h.isPending),
        (t[100] = ve))
      : (ve = t[100]),
    ve
  );
}
function ct(e) {
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
function lt(e, t, n) {
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
var ut,
  dt,
  ft,
  pt = e(() => {
    ((ut = de()),
      w(),
      o(),
      (dt = t(a(), 1)),
      O(),
      s(),
      ue(),
      Ye(),
      ge(),
      ye(),
      Be(),
      tt(),
      Ue(),
      Qe(),
      at(),
      (ft = oe()));
  });
function mt({ repo: e, target: t }) {
  let n =
    e == null
      ? `Run GitHub CLI commands from that directory.`
      : `Pass \`--repo ${e}\` to GitHub CLI commands.`;
  return `Work only in the Git repository at \`${t.cwd}\`. Run local Git commands from that directory. ${n}`;
}
var ht = e(() => {});
function gt(e, t, n = e.value.routeConversationId, r) {
  let i = e.get(At),
    a = e.get(ae)?.pullRequestRepair?.pullRequestNumber ?? null;
  if (i != null && Dt(i, t) && (r == null || a == null || a === r))
    return (
      a == null &&
        r != null &&
        we(e, (e) => {
          e.pullRequestRepair = { target: i, pullRequestNumber: r };
        }),
      !1
    );
  if (
    (we(e, (e) => {
      ((e.pullRequestRepair = { target: t, pullRequestNumber: r ?? null }),
        (e.pullRequestChecks = []));
    }),
    i != null)
  ) {
    K(e, (e) => {
      e.pullRequestMergeConflict = null;
    });
    let t = e.get(kt);
    if (t != null && n != null) {
      let r = new Set(t.commentKeys);
      Fe(e, n, (e) => e.filter((e) => !r.has($(e))));
    }
    e.set(kt, null);
  }
  return i != null;
}
function $(e) {
  return e.reviewThreadId ?? I(e);
}
function _t(e) {
  return e.filter(
    (e) =>
      e.type === `review_comment` &&
      e.isResolved !== !0 &&
      e.line != null &&
      e.path != null &&
      e.side != null,
  );
}
function vt(e, { comment: t, conversationId: n, target: r, workspaceRoots: i }) {
  let a = M({
    cwd: r.root,
    path: t.position.path,
    workspaceRoots: i ?? (n == null ? [] : (e.get(j, n) ?? [])),
  });
  return t.localWorkspaceRoot === a ? t : { ...t, localWorkspaceRoot: a ?? r.root };
}
function yt({ baseBranch: e, headBranch: t, number: n, repo: r, target: i }) {
  return [
    `## Pull request comments:`,
    `Review ${r == null ? `PR ${n}` : `${r} PR ${n}`}${` (${t} -> ${e})`} and address the attached outstanding PR comments with the smallest safe changes.`,
    mt({ repo: r, target: i }),
    `Start from the attached unresolved review threads and comments.`,
    `Address every actionable comment without asking the user which ones to handle.`,
    `If a comment needs clarification, is already outdated, or should not be changed, explain that clearly instead of guessing.`,
    re,
    `Address all actionable attached PR feedback.`,
  ].join(`
`);
}
function bt({ baseBranch: e, conversationId: t, headBranch: n, prNumber: r }) {
  return (
    (t == null ? `missing-conversation` : null) ??
    (e == null || n == null ? `missing-pr-info` : null) ??
    (r == null ? `missing-pr-info` : null)
  );
}
function xt(e, { attached: t, commentAttachments: n, conversationId: r, target: i }) {
  return r == null || n.length === 0
    ? !1
    : (Fe(e, r, (a) => {
        let o = n.map((t) => vt(e, { comment: t, conversationId: r, target: i }));
        if (t) return Et(a, o);
        let s = new Set(o.map($)),
          c = a.filter((e) => !s.has($(e)));
        return c.length === a.length ? a : c;
      }),
      !0);
}
function St(
  e,
  {
    baseBranch: t,
    commentAttachments: n,
    conversationId: r,
    headBranch: i,
    number: a,
    repo: o,
    target: s,
  },
) {
  if (!xt(e, { attached: !1, commentAttachments: n, conversationId: r, target: s })) return !1;
  let c = e.get(kt);
  if (c != null) {
    let t = e.get(Pe, r),
      n = c.commentKeys.filter((e) => t.some((t) => $(t) === e));
    e.set(kt, n.length === 0 ? null : { ...c, commentKeys: n });
  }
  if (e.get(Pe, r).length === 0 && t != null && i != null && a != null) {
    let n = yt({ baseBranch: t, headBranch: i, number: a, repo: o, target: s });
    U(e, (e) => (e === n ? `` : e));
  }
  return !0;
}
function Ct(e, { commentAttachment: t, conversationId: n, guidance: r }) {
  if (n == null) return !1;
  let i = $(t),
    a = r.trim(),
    o = !1;
  return (
    Fe(e, n, (e) => {
      let t = e.map((e) =>
        $(e) !== i || (e.localPullRequestCommentGuidance ?? ``) === a
          ? e
          : ((o = !0), { ...e, localPullRequestCommentGuidance: a.length === 0 ? void 0 : a }),
      );
      return o ? t : e;
    }),
    !!o
  );
}
function wt(
  e,
  {
    baseBranch: t,
    comments: n,
    conversationId: r,
    focusComposer: i,
    headBranch: a,
    number: o,
    repo: s,
    target: c,
  },
) {
  let l = _t(n);
  if (t == null || r == null || a == null || o == null || l.length === 0) return !1;
  let u = l.map(Tt),
    d = e.get(jt);
  gt(e, c, r, o);
  let f = e.get(kt),
    p = e.get(Pe, r),
    m = f != null && f.commentKeys.some((e) => p.some((t) => $(t) === e));
  xt(e, { attached: !0, commentAttachments: u, conversationId: r, target: c });
  let h = m ? (f?.commentKeys ?? []) : [];
  e.set(kt, {
    commentKeys: Array.from(
      new Set([...h, ...u.map((t) => $(vt(e, { comment: t, conversationId: r, target: c })))]),
    ),
  });
  let g = yt({ baseBranch: t, headBranch: a, number: o, repo: s, target: c }),
    _ = !1;
  return (
    U(e, (e) => (e.trim().length > 0 && e !== d ? e : ((_ = !0), g))),
    e.set(jt, _ ? g : null),
    i && pe(),
    !0
  );
}
function Tt(e) {
  return {
    content: [
      {
        content_type: `text`,
        text: [e, ...(e.replies ?? [])].map((e) =>
          e.authorLogin == null ? e.body : `@${e.authorLogin}:\n${e.body}`,
        ).join(`

`),
      },
    ],
    position: {
      line: e.line,
      path: e.path,
      side: e.side,
      start_line: e.startLine ?? void 0,
      start_side: e.startSide ?? void 0,
    },
    reviewThreadId: e.reviewThreadId,
    type: `comment`,
  };
}
function Et(e, t) {
  let n = [...e],
    r = new Set(e.map($)),
    i = !1;
  for (let e of t) {
    let t = $(e);
    r.has(t) || (r.add(t), n.push(e), (i = !0));
  }
  return i ? n : e;
}
function Dt(e, t) {
  return e.hostId === t.hostId && f(e.root) === f(t.root);
}
var Ot,
  kt,
  At,
  jt,
  Mt = e(() => {
    ((Ot = t(A(), 1)),
      w(),
      Te(),
      be(),
      Me(),
      g(),
      H(),
      me(),
      p(),
      Ae(),
      m(),
      ht(),
      (kt = fe(r, null)),
      (At = V(r, ({ get: e }) => e(ae)?.pullRequestRepair?.target ?? null, {
        isEqual: Ot.default,
      })),
      (jt = fe(r, null)));
  });
function Nt({ baseBranch: e, headBranch: t, number: n, repo: r, target: i }) {
  return [
    l,
    `Review ${r == null ? `PR ${n}` : `${r} PR ${n}`}${` (${t} -> ${e})`} and make the smallest safe fix for the attached failing CI.`,
    i == null
      ? `Use GitHub CLI to inspect the pull request before choosing a checkout.`
      : mt({ repo: r, target: i }),
    "Start from the attached failing-check context. Then use `gh` to inspect the latest runs, annotations, and logs for those failures before changing code.",
    "Treat `gh` as the primary source of truth for workflow runs, job logs, annotations, and links to any external CI.",
    "Resolve the PR with `gh pr view` or `gh pr checks` and inspect failing GitHub Actions runs with `gh run view`, including logs.",
    "If `gh pr checks` rejects a requested JSON field, retry with the available fields instead of guessing.",
    `If a GitHub Actions run log is incomplete because the run is still in progress, fall back to the per-job logs that GitHub exposes.`,
    `If the failure can be diagnosed from GitHub, fix it directly.`,
    `If the failure requires external CI logs (for example Buildkite):`,
    "- first use `gh` to locate the external run or job URL and linked details",
    `- then check whether any installed skills or tools can access that CI system`,
    `- then check whether the required credentials, permissions, tokens, or MCP or tool access are actually available`,
    `- if anything is missing, stop and tell the user exactly what is missing and exactly what they can provide to unblock you`,
    `- otherwise fetch the external logs, diagnose the issue, and make the smallest safe fix`,
    `Do not guess without logs. Do not do unrelated refactors. Be explicit if blocked. After fixing, run the narrowest relevant verification, commit and push the fix, and summarize the root cause, fix, and result.`,
    re,
    `Use gh to inspect the failing CI and make the smallest safe fix. Once everything is fixed, commit and push it.`,
  ].join(`
`);
}
function Pt(e) {
  return e.link ?? `${e.workflow ?? ``}:${e.name}`;
}
function Ft(e, { attached: t, checks: n, pullRequestNumber: r, target: i }) {
  let a = n.filter((e) => e.status === `failing`);
  if (a.length === 0) return !1;
  if (t) gt(e, i, void 0, r);
  else {
    let t = e.get(At);
    if (t == null || !Dt(t, i)) return !1;
  }
  return (
    we(e, (e) => {
      if (!t) {
        let t = new Set(a.map(Pt));
        e.pullRequestChecks = e.pullRequestChecks.filter((e) => !t.has(Pt(e)));
        return;
      }
      let n = new Set(e.pullRequestChecks.map(Pt));
      e.pullRequestChecks.push(...a.filter((e) => !n.has(Pt(e))));
    }),
    !0
  );
}
function It(e, { baseBranch: t, checks: n, headBranch: r, number: i, repo: a, target: o }) {
  if (
    t == null ||
    r == null ||
    i == null ||
    !Ft(e, { attached: !0, checks: n, pullRequestNumber: i, target: o })
  )
    return !1;
  let s = Nt({ baseBranch: t, headBranch: r, number: i, repo: a, target: o });
  return (U(e, s), e.set(jt, s), pe(), !0);
}
function Lt(
  e,
  { baseBranch: t, conversationId: n, headBranch: r, pullRequestStatus: i, target: a },
) {
  if (t == null || r == null || i.number == null) return !1;
  let o = i.checks.filter((e) => e.status === `failing`),
    s = i.mergeBlocker === `conflicts`,
    c = _t(i.activityItems),
    u = c.length > 0;
  if ((u && n == null) || (s && i.url == null)) return !1;
  (u &&
    wt(e, {
      baseBranch: t,
      comments: c,
      conversationId: n,
      focusComposer: o.length === 0 && !s,
      headBranch: r,
      number: i.number,
      repo: i.repo,
      target: a,
    }),
    o.length > 0 &&
      It(e, { baseBranch: t, checks: o, headBranch: r, number: i.number, repo: i.repo, target: a }),
    s &&
      i.url != null &&
      zt(e, { baseBranch: t, headBranch: r, number: i.number, repo: i.repo, url: i.url }, a));
  let d = [
    l,
    `Review ${i.repo == null ? `PR ${i.number}` : `${i.repo} PR ${i.number}`} (${r} -> ${t}) and resolve every attached issue.`,
    mt({ repo: i.repo, target: a }),
    ...(o.length === 0 ? [] : [`Inspect and fix every attached failing CI check.`]),
    ...(s ? [`Resolve the attached pull request merge conflicts.`] : []),
    ...(u ? [`Address every actionable attached pull request review comment.`] : []),
    re,
    `Fix all attached pull request issues, run relevant verification, then commit and push the fixes.`,
  ].join(`
`);
  return (U(e, d), e.set(jt, d), !0);
}
function Rt({ baseBranch: e, headBranch: t, number: n, repo: r, target: i }) {
  return [
    l,
    `Review ${r == null ? `PR ${n}` : `${r} PR ${n}`}${` (${t} -> ${e})`} and resolve the attached merge conflict blocker with the smallest safe changes.`,
    mt({ repo: r, target: i }),
    "Start from the attached merge conflict context. Then use `gh pr view` and local git state to confirm the current merge blocker before changing code.",
    `Fetch the latest base branch, merge or rebase as appropriate for this repository, resolve the conflicts, and avoid unrelated refactors.`,
    `After resolving conflicts, run the narrowest relevant verification, commit and push the resolution, and summarize the conflict and result.`,
    re,
    `Resolve the PR merge conflicts, then commit and push the fix.`,
  ].join(`
`);
}
function zt(e, t, n) {
  if (t == null) return !1;
  gt(e, n, void 0, t.number);
  let r = Rt({
    baseBranch: t.baseBranch,
    headBranch: t.headBranch,
    number: t.number,
    repo: t.repo,
    target: n,
  });
  return (U(e, r), e.set(jt, r), Bt(e, t), pe(), !0);
}
function Bt(e, t) {
  K(e, (e) => {
    e.pullRequestMergeConflict = t;
  });
}
var Vt = e(() => {
  (Te(), g(), H(), h(), Mt(), ht());
});
export {
  Ye as C,
  Qe as S,
  Je as T,
  wt as _,
  Bt as a,
  pt as b,
  zt as c,
  _t as d,
  bt as f,
  Ct as g,
  St as h,
  Ft as i,
  Dt as l,
  At as m,
  Pt as n,
  It as o,
  Mt as p,
  Vt as r,
  Lt as s,
  Nt as t,
  $ as u,
  vt as v,
  Ke as w,
  Xe as x,
  ot as y,
};
//# sourceMappingURL=pull-request-fix-workflow-527420cd2c1d.js.map
