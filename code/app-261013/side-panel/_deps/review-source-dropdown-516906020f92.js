import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  BH as n,
  CE as r,
  CS as i,
  Cot as a,
  DV as o,
  EG as s,
  FD as c,
  IDt as l,
  Ixt as u,
  M1 as d,
  MV as f,
  Mz as p,
  ND as m,
  Nz as h,
  Pxt as g,
  SS as _,
  TJ as v,
  TO as y,
  VDt as b,
  Vxt as x,
  X_ as ee,
  Y_ as te,
  Zq as ne,
  _Mt as S,
  cz as C,
  gMt as w,
  gt as T,
  hE as re,
  ht as E,
  i3 as D,
  j1 as ie,
  jDt as O,
  mt as k,
  n0 as A,
  nE as j,
  oE as M,
  pt as N,
  r3 as ae,
  sH as oe,
  sz as se,
  t0 as ce,
  vzt as P,
  wE as F,
  wot as I,
  xMt as L,
  xS as le,
  yH as ue,
  yzt as R,
} from "./app-shared-bbfeca5e5737.js";
import {
  B_t as z,
  Cht as B,
  Cvt as de,
  Cwr as V,
  EEt as H,
  Eht as U,
  Eq as W,
  OL as fe,
  Ovt as pe,
  Svt as me,
  TEt as G,
  Tq as he,
  Tvt as ge,
  a_t as K,
  czt as q,
  evt as _e,
  gwr as J,
  kL as ve,
  kvt as ye,
  r_t as Y,
  szt as be,
  wvt as xe,
} from "./app-initial-5851df3f6cb1.js";
import { Fl as X, Nl as Se, Pl as Ce } from "./app-primary-fe8a450b3b04.js";
import { r as we, t as Te } from "./review-preferences-model-4ff078b4c04e.js";
import { n as Ee, t as De } from "./auto-diff-9588425264f4.js";
var Oe, ke;
function Ae() {
  return (Ae = e(() => {
    (R(),
      (Oe = L()),
      (ke = (e) =>
        (0, Oe.jsxs)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Oe.jsx)(`path`, {
              d: `M12.8 8L19.8 8`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
            }),
            (0, Oe.jsx)(`path`, {
              d: `M12.8 12L19.8 12.002`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
            }),
            (0, Oe.jsx)(`path`, {
              d: `M12.8 16L16.8 16`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
            }),
            (0, Oe.jsx)(`path`, {
              d: `M6.24013 6V18`,
              stroke: `currentColor`,
              strokeWidth: 1.8,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, Oe.jsx)(`path`, {
              d: `M3.74022 7.50012L6.24022 5.00012L8.74022 7.50012`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, Oe.jsx)(`path`, {
              d: `M8.74022 16.5L6.24022 19L3.74022 16.5`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          ],
        })));
  }))();
}
function je(e, t) {
  let n = t.trim();
  if (n.length === 0) return [...e].sort(Me);
  let r = he(n);
  return e
    .map((e) => {
      let t = r(Ne(e.displayPath).fileName);
      return { entry: e, score: t > 0 ? t : r(e.displayPath) };
    })
    .filter(({ score: e }) => e > 0)
    .sort((e, t) => t.score - e.score)
    .map(({ entry: e }) => e);
}
function Me(e, t) {
  let n = Ne(e.displayPath),
    r = Ne(t.displayPath);
  return n.fileName.localeCompare(r.fileName) || n.parentPath.localeCompare(r.parentPath);
}
function Ne(e) {
  let t = e.lastIndexOf(`/`);
  return t === -1 ? { fileName: e, parentPath: `` } : { fileName: e.slice(t + 1), parentPath: e.slice(0, t) };
}
function Pe() {
  return (Pe = e(() => {
    W();
  }))();
}
function Fe(e) {
  let t = (0, Re.c)(20),
    { entries: n, onSelectPath: r } = e,
    i = b(),
    [a, o] = (0, ze.useState)(``),
    [s, c] = (0, ze.useState)(!1),
    l;
  t[0] === i
    ? (l = t[1])
    : ((l = i.formatMessage({
        id: `codex.review.jumpToFile`,
        defaultMessage: `Jump to file`,
        description: `Button label for opening diff file jump search`,
      })),
      (t[0] = i),
      (t[1] = l));
  let u = l,
    d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (e) => {
        (e && o(``), c(e));
      }),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(p, { className: `text-codex-description`, "aria-hidden": !1, asset: te })), (t[3] = f))
    : (f = t[3]);
  let m;
  t[4] === u
    ? (m = t[5])
    : ((m = (0, Z.jsx)(M, { "aria-label": u, color: `toolbar`, uniform: !0, children: f })),
      (t[4] = u),
      (t[5] = m));
  let h;
  t[6] !== u || t[7] !== m
    ? ((h = (0, Z.jsx)(se, { tooltipContent: u, delayOpen: !0, children: m })),
      (t[6] = u),
      (t[7] = m),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] === r
    ? (g = t[10])
    : ((g = (e) => {
        (r(e), c(!1));
      }),
      (t[9] = r),
      (t[10] = g));
  let _;
  t[11] !== n || t[12] !== u || t[13] !== a || t[14] !== g
    ? ((_ = (0, Z.jsx)(Ie, { entries: n, label: u, onQueryChange: o, onSelectPath: g, query: a })),
      (t[11] = n),
      (t[12] = u),
      (t[13] = a),
      (t[14] = g),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  return (
    t[16] !== s || t[17] !== h || t[18] !== _
      ? ((v = (0, Z.jsx)(Se, {
          open: s,
          onOpenChange: d,
          align: `end`,
          contentWidth: `panelWide`,
          contentMaxHeight: `list`,
          triggerButton: h,
          children: _,
        })),
        (t[16] = s),
        (t[17] = h),
        (t[18] = _),
        (t[19] = v))
      : (v = t[19]),
    v
  );
}
function Ie(e) {
  let t = (0, Re.c)(22),
    { entries: n, label: r, onQueryChange: i, onSelectPath: a, query: o } = e,
    s,
    c,
    u,
    d,
    f;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o) {
    let e = je(n, o);
    ((c = Ce.Root),
      (d = r),
      t[10] !== r || t[11] !== i || t[12] !== o
        ? ((f = (0, Z.jsx)(Ce.Input, { placeholder: r, value: o, onValueChange: i })),
          (t[10] = r),
          (t[11] = i),
          (t[12] = o),
          (t[13] = f))
        : (f = t[13]),
      (s = Ce.List),
      (u =
        e.length === 0
          ? (0, Z.jsx)(y.Message, {
              compact: !0,
              children: (0, Z.jsx)(l, {
                id: `codex.review.jumpToFile.empty`,
                defaultMessage: `No matching files`,
                description: `Empty state for review file jump search`,
              }),
            })
          : e.map((e) =>
              (0, Z.jsx)(
                Ce.Item,
                {
                  value: encodeURIComponent(e.path),
                  onSelect: () => a(e.path),
                  children: (0, Z.jsx)(Le, { displayPath: e.displayPath }),
                },
                e.path,
              ),
            )),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f));
  } else ((s = t[5]), (c = t[6]), (u = t[7]), (d = t[8]), (f = t[9]));
  let p;
  t[14] !== s || t[15] !== u
    ? ((p = (0, Z.jsx)(s, { children: u })), (t[14] = s), (t[15] = u), (t[16] = p))
    : (p = t[16]);
  let m;
  return (
    t[17] !== c || t[18] !== d || t[19] !== f || t[20] !== p
      ? ((m = (0, Z.jsxs)(c, { label: d, children: [f, p] })),
        (t[17] = c),
        (t[18] = d),
        (t[19] = f),
        (t[20] = p),
        (t[21] = m))
      : (m = t[21]),
    m
  );
}
function Le(e) {
  let t = (0, Re.c)(9),
    { displayPath: n } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = Ne(n)), (t[0] = n), (t[1] = i));
  let { fileName: a, parentPath: o } = i,
    s;
  t[2] === a
    ? (s = t[3])
    : ((s = (0, Z.jsx)(`span`, { className: `shrink-0 text-default`, children: a })), (t[2] = a), (t[3] = s));
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c =
        o.length > 0 ? (0, Z.jsx)(r, { className: `min-w-0 flex-1 text-codex-description`, text: o }) : null),
      (t[4] = o),
      (t[5] = c));
  let l;
  return (
    t[6] !== s || t[7] !== c
      ? ((l = (0, Z.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [s, c] })),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
var Re, ze, Z;
function Be() {
  return (Be = e(() => {
    ((Re = P()), ee(), (ze = R()), O(), X(), t(), h(), F(), C(), i(), Pe(), (Z = L()));
  }))();
}
function Ve() {
  let e = (0, He.c)(5),
    t = u(J),
    n = x(K),
    r;
  e[0] === t ? (r = e[1]) : ((r = (e) => U(t, e)), (e[0] = t), (e[1] = r));
  let i;
  return (
    e[2] !== n || e[3] !== r
      ? ((i = (0, Ue.jsx)(Fe, { entries: n, onSelectPath: r })), (e[2] = n), (e[3] = r), (e[4] = i))
      : (i = e[4]),
    i
  );
}
var He, Ue;
function We() {
  return (We = e(() => {
    ((He = P()), g(), V(), Be(), Y(), B(), (Ue = L()));
  }))();
}
function Ge(e) {
  let t = (0, Ze.c)(93),
    {
      copyGitApplyCommandDisabled: n,
      diffControls: r,
      onClickCopyGitApplyCommand: i,
      onRefreshGitQueries: a,
      refreshGitQueriesDisabled: o,
      showCopyGitApplyCommand: s,
      showHideImports: l,
      showHideWhitespace: u,
      showLoadFullFiles: d,
      showRefreshGitQueries: f,
    } = e,
    m = l === void 0 || l,
    h = u === void 0 || u,
    g = d === void 0 || d,
    _ = b(),
    v = x(_e),
    [ee, te] = (0, Qe.useState)(!1),
    [S, C] = (0, Qe.useState)(!1),
    w = (0, Qe.useRef)(null),
    T = (0, Qe.useRef)(!1),
    E;
  t[0] === S
    ? (E = t[1])
    : ((E = (e, t) => {
        let n = e.contentRect.width > 0 && e.contentRect.height > 0;
        if ((C(n), n)) {
          S || te(!1);
          return;
        }
        let r = t.ownerDocument,
          i = r.activeElement,
          a = w.current;
        (T.current &&
          r.hasFocus() &&
          (t.contains(i) || i === r.body) &&
          a != null &&
          a.getClientRects().length > 0 &&
          a.focus(),
          (T.current = !1));
      }),
      (t[0] = S),
      (t[1] = E));
  let D = c(E),
    O;
  t[2] === _
    ? (O = t[3])
    : ((O = _.formatMessage({
        id: `codex.review.refreshGitQueries`,
        defaultMessage: `Refresh`,
        description: `Menu item to refresh git queries for the current repository`,
      })),
      (t[2] = _),
      (t[3] = O));
  let k = O,
    A;
  t[4] === _
    ? (A = t[5])
    : ((A = _.formatMessage({
        id: `codex.review.wrap.label`,
        defaultMessage: `Word wrap`,
        description: `Toggle for wrapping long lines in the diff view`,
      })),
      (t[4] = _),
      (t[5] = A));
  let N = A,
    oe;
  t[6] !== r.expanded || t[7] !== _
    ? ((oe = r.expanded
        ? _.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.collapse`,
            defaultMessage: `Collapse all diffs`,
            description: `Menu item to collapse all diffs in the review options menu`,
          })
        : _.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.expand`,
            defaultMessage: `Expand all diffs`,
            description: `Menu item to expand all diffs in the review options menu`,
          })),
      (t[6] = r.expanded),
      (t[7] = _),
      (t[8] = oe))
    : (oe = t[8]);
  let ce = oe,
    P;
  t[9] === _
    ? (P = t[10])
    : ((P = _.formatMessage({
        id: `codex.review.header.moreOptions`,
        defaultMessage: `Changes options`,
        description: `Accessible label for the options menu in the Changes tab showing local diffs`,
      })),
      (t[9] = _),
      (t[10] = P));
  let F = P,
    I;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        te(!1);
      }),
      (t[11] = I))
    : (I = t[11]);
  let L = I,
    le = v ? `hidden [@container_review-header_(min-width:625px)]:contents` : `contents`,
    ue;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Q.jsx)(p, { className: `text-codex-description`, "aria-hidden": !1, asset: ie })),
      (t[12] = ue))
    : (ue = t[12]);
  let R;
  t[13] === le
    ? (R = t[14])
    : ((R = (0, Q.jsx)(`span`, { className: le, children: ue })), (t[13] = le), (t[14] = R));
  let z;
  t[15] === v
    ? (z = t[16])
    : ((z = v
        ? (0, Q.jsx)(`span`, {
            className: `contents [@container_review-header_(min-width:625px)]:hidden`,
            children: (0, Q.jsx)(ae, { className: `icon-xs` }),
          })
        : null),
      (t[15] = v),
      (t[16] = z));
  let B;
  t[17] !== F || t[18] !== v || t[19] !== R || t[20] !== z
    ? ((B = (0, Q.jsxs)(M, {
        ref: w,
        "aria-label": F,
        "aria-busy": v,
        color: `toolbar`,
        uniform: !0,
        children: [R, z],
      })),
      (t[17] = F),
      (t[18] = v),
      (t[19] = R),
      (t[20] = z),
      (t[21] = B))
    : (B = t[21]);
  let de;
  t[22] !== F || t[23] !== B
    ? ((de = (0, Q.jsx)(se, { tooltipContent: F, delayOpen: !0, children: B })),
      (t[22] = F),
      (t[23] = B),
      (t[24] = de))
    : (de = t[24]);
  let V;
  t[25] !== r ||
  t[26] !== S ||
  t[27] !== ce ||
  t[28] !== _ ||
  t[29] !== a ||
  t[30] !== o ||
  t[31] !== k ||
  t[32] !== f ||
  t[33] !== N
    ? ((V = S
        ? null
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              f
                ? (0, Q.jsx)(y.Item, {
                    onSelect: (e) => {
                      (e.preventDefault(), a?.(), L());
                    },
                    LeftIcon: be,
                    disabled: o || !a,
                    children: k,
                  })
                : null,
              (0, Q.jsx)(y.CheckboxItem, {
                checked: r.wrap,
                closeOnSelect: !0,
                onCheckedChange: r.onToggleWrap,
                leftIcon: (0, Q.jsx)(ne, {}),
                children: N,
              }),
              (0, Q.jsx)(y.Item, {
                onSelect: (e) => {
                  (e.preventDefault(), r.onSelectDiffMode($e[r.diffMode]), L());
                },
                leftIcon:
                  r.diffMode === `auto`
                    ? (0, Q.jsx)(De, { "aria-hidden": `true` })
                    : (0, Q.jsx)(p, { asset: et[r.diffMode] }),
                children: Je(_, r.diffMode),
              }),
              (0, Q.jsx)(y.Item, {
                onSelect: (e) => {
                  (e.preventDefault(), r.onToggleExpanded(), L());
                },
                LeftIcon: r.expanded ? fe : ke,
                children: ce,
              }),
              (0, Q.jsx)(y.Separator, {}),
            ],
          })),
      (t[25] = r),
      (t[26] = S),
      (t[27] = ce),
      (t[28] = _),
      (t[29] = a),
      (t[30] = o),
      (t[31] = k),
      (t[32] = f),
      (t[33] = N),
      (t[34] = V))
    : (V = t[34]);
  let H;
  t[35] !== n ||
  t[36] !== r.hideImports ||
  t[37] !== r.hideWhitespace ||
  t[38] !== r.loadFullFilesEnabled ||
  t[39] !== r.onToggleHideImports ||
  t[40] !== r.onToggleHideWhitespace ||
  t[41] !== r.onToggleLoadFullFiles ||
  t[42] !== r.onToggleRichPreview ||
  t[43] !== r.onToggleWordDiffs ||
  t[44] !== r.richPreviewEnabled ||
  t[45] !== r.wordDiffsEnabled ||
  t[46] !== i ||
  t[47] !== s ||
  t[48] !== m ||
  t[49] !== h ||
  t[50] !== g
    ? ((H = (0, Q.jsx)(Xe, {
        onClose: L,
        wordDiffsEnabled: r.wordDiffsEnabled,
        showCopyGitApplyCommand: s,
        showHideImports: m,
        showHideWhitespace: h,
        showLoadFullFiles: g,
        copyGitApplyCommandDisabled: n,
        onClickCopyGitApplyCommand: i,
        richPreviewEnabled: r.richPreviewEnabled,
        onToggleRichPreview: r.onToggleRichPreview,
        onToggleWordDiffs: r.onToggleWordDiffs,
        hideWhitespace: r.hideWhitespace,
        onToggleHideWhitespace: r.onToggleHideWhitespace,
        hideImports: r.hideImports,
        onToggleHideImports: r.onToggleHideImports,
        loadFullFilesEnabled: r.loadFullFilesEnabled,
        onToggleLoadFullFiles: r.onToggleLoadFullFiles,
      })),
      (t[35] = n),
      (t[36] = r.hideImports),
      (t[37] = r.hideWhitespace),
      (t[38] = r.loadFullFilesEnabled),
      (t[39] = r.onToggleHideImports),
      (t[40] = r.onToggleHideWhitespace),
      (t[41] = r.onToggleLoadFullFiles),
      (t[42] = r.onToggleRichPreview),
      (t[43] = r.onToggleWordDiffs),
      (t[44] = r.richPreviewEnabled),
      (t[45] = r.wordDiffsEnabled),
      (t[46] = i),
      (t[47] = s),
      (t[48] = m),
      (t[49] = h),
      (t[50] = g),
      (t[51] = H))
    : (H = t[51]);
  let U;
  t[52] !== ee || t[53] !== de || t[54] !== V || t[55] !== H
    ? ((U = (0, Q.jsxs)(re, {
        open: ee,
        onOpenChange: te,
        align: `end`,
        contentWidth: `menu`,
        triggerButton: de,
        children: [V, H],
      })),
      (t[52] = ee),
      (t[53] = de),
      (t[54] = V),
      (t[55] = H),
      (t[56] = U))
    : (U = t[56]);
  let W;
  t[57] === Symbol.for(`react.memo_cache_sentinel`) ? ((W = (0, Q.jsx)(Ve, {})), (t[57] = W)) : (W = t[57]);
  let pe, me;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (e) => {
        !e.currentTarget.contains(e.relatedTarget) &&
          (e.relatedTarget != null || e.currentTarget.getClientRects().length > 0) &&
          (T.current = !1);
      }),
      (me = (e) => {
        T.current = e.currentTarget.contains(e.target) && e.target.matches(`:focus-visible`);
      }),
      (t[58] = pe),
      (t[59] = me))
    : ((pe = t[58]), (me = t[59]));
  let G;
  t[60] !== v || t[61] !== a || t[62] !== o || t[63] !== k || t[64] !== f
    ? ((G = f
        ? (0, Q.jsx)(Ye, { Icon: v ? ae : be, busy: v, label: k, onClick: () => a?.(), disabled: o || !a })
        : null),
      (t[60] = v),
      (t[61] = a),
      (t[62] = o),
      (t[63] = k),
      (t[64] = f),
      (t[65] = G))
    : (G = t[65]);
  let he = r.wrap ? `selected` : `default`,
    ge = r.wrap ? void 0 : `text-tertiary`,
    K;
  t[66] === ge ? (K = t[67]) : ((K = (0, Q.jsx)(ne, { className: ge })), (t[66] = ge), (t[67] = K));
  let q;
  t[68] !== r.onToggleWrap || t[69] !== r.wrap || t[70] !== he || t[71] !== K || t[72] !== N
    ? ((q = (0, Q.jsx)(j, {
        "aria-label": N,
        "aria-pressed": r.wrap,
        variant: he,
        uniform: !0,
        onClick: r.onToggleWrap,
        children: K,
      })),
      (t[68] = r.onToggleWrap),
      (t[69] = r.wrap),
      (t[70] = he),
      (t[71] = K),
      (t[72] = N),
      (t[73] = q))
    : (q = t[73]);
  let J;
  t[74] !== q || t[75] !== N
    ? ((J = (0, Q.jsx)(se, { tooltipContent: N, children: q })), (t[74] = q), (t[75] = N), (t[76] = J))
    : (J = t[76]);
  let ve = r.expanded ? fe : ke,
    ye;
  t[77] !== r.onToggleExpanded || t[78] !== ce || t[79] !== ve
    ? ((ye = (0, Q.jsx)(Ye, { Icon: ve, label: ce, onClick: r.onToggleExpanded })),
      (t[77] = r.onToggleExpanded),
      (t[78] = ce),
      (t[79] = ve),
      (t[80] = ye))
    : (ye = t[80]);
  let Y;
  t[81] !== r.diffMode || t[82] !== r.onSelectDiffMode
    ? ((Y = (0, Q.jsx)(qe, { diffMode: r.diffMode, onSelectDiffMode: r.onSelectDiffMode })),
      (t[81] = r.diffMode),
      (t[82] = r.onSelectDiffMode),
      (t[83] = Y))
    : (Y = t[83]);
  let xe;
  t[84] !== D || t[85] !== G || t[86] !== J || t[87] !== ye || t[88] !== Y
    ? ((xe = (0, Q.jsxs)(`div`, {
        ref: D,
        className: `hidden items-center gap-1.5 [@container_review-header_(min-width:625px)]:flex`,
        onBlurCapture: pe,
        onFocusCapture: me,
        children: [G, J, ye, Y],
      })),
      (t[84] = D),
      (t[85] = G),
      (t[86] = J),
      (t[87] = ye),
      (t[88] = Y),
      (t[89] = xe))
    : (xe = t[89]);
  let X;
  return (
    t[90] !== U || t[91] !== xe
      ? ((X = (0, Q.jsxs)(Q.Fragment, { children: [U, W, xe] })), (t[90] = U), (t[91] = xe), (t[92] = X))
      : (X = t[92]),
    X
  );
}
function Ke(e) {
  let t = (0, Ze.c)(73),
    {
      copyGitApplyCommandDisabled: n,
      expanded: r,
      onClickCopyGitApplyCommand: i,
      onRefreshGitQueries: o,
      onToggleExpanded: s,
      refreshGitQueriesDisabled: c,
      showCopyGitApplyCommand: d,
      showHideImports: f,
      showHideWhitespace: m,
      showLoadFullFiles: h,
      showRichPreview: g,
      showRefreshGitQueries: _,
    } = e,
    v = f === void 0 || f,
    ee = m === void 0 || m,
    te = h === void 0 || h,
    S = g === void 0 || g,
    C = u(a),
    w = b(),
    T = x(me),
    E = x(de),
    D = x(we),
    O = x(ge),
    k = x(pe),
    A = x(ye),
    [j, N] = (0, Qe.useState)(!1),
    ae;
  t[0] === w
    ? (ae = t[1])
    : ((ae = w.formatMessage({
        id: `codex.review.refreshGitQueries`,
        defaultMessage: `Refresh`,
        description: `Menu item to refresh git queries for the current repository`,
      })),
      (t[0] = w),
      (t[1] = ae));
  let oe = ae,
    ce;
  t[2] !== r || t[3] !== w
    ? ((ce = r
        ? w.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.collapse`,
            defaultMessage: `Collapse all diffs`,
            description: `Menu item to collapse all diffs in the review options menu`,
          })
        : w.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.expand`,
            defaultMessage: `Expand all diffs`,
            description: `Menu item to expand all diffs in the review options menu`,
          })),
      (t[2] = r),
      (t[3] = w),
      (t[4] = ce))
    : (ce = t[4]);
  let P = ce,
    F;
  t[5] === w
    ? (F = t[6])
    : ((F = w.formatMessage({
        id: `codex.review.header.moreOptions`,
        defaultMessage: `Changes options`,
        description: `Accessible label for the options menu in the Changes tab showing local diffs`,
      })),
      (t[5] = w),
      (t[6] = F));
  let I = F,
    L;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = () => {
        N(!1);
      }),
      (t[7] = L))
    : (L = t[7]);
  let le = L,
    ue;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Q.jsx)(p, { "aria-hidden": !1, asset: ie })), (t[8] = ue))
    : (ue = t[8]);
  let R;
  t[9] === I
    ? (R = t[10])
    : ((R = (0, Q.jsx)(M, { "aria-label": I, color: `toolbar`, uniform: !0, children: ue })),
      (t[9] = I),
      (t[10] = R));
  let z;
  t[11] !== I || t[12] !== R
    ? ((z = (0, Q.jsx)(se, { tooltipContent: I, delayOpen: !0, children: R })),
      (t[11] = I),
      (t[12] = R),
      (t[13] = z))
    : (z = t[13]);
  let B;
  t[14] !== o || t[15] !== c || t[16] !== oe || t[17] !== _
    ? ((B = _
        ? (0, Q.jsx)(y.Item, {
            onSelect: (e) => {
              (e.preventDefault(), o?.(), le());
            },
            LeftIcon: be,
            disabled: c || !o,
            children: oe,
          })
        : null),
      (t[14] = o),
      (t[15] = c),
      (t[16] = oe),
      (t[17] = _),
      (t[18] = B))
    : (B = t[18]);
  let V;
  t[19] === C ? (V = t[20]) : ((V = (e) => C.set(ye, e === !0)), (t[19] = C), (t[20] = V));
  let H, U;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Q.jsx)(ne, {})),
      (U = (0, Q.jsx)(l, {
        id: `codex.review.wrap.label`,
        defaultMessage: `Word wrap`,
        description: `Toggle for wrapping long lines in the diff view`,
      })),
      (t[21] = H),
      (t[22] = U))
    : ((H = t[21]), (U = t[22]));
  let W;
  t[23] !== V || t[24] !== A
    ? ((W = (0, Q.jsx)(y.CheckboxItem, {
        checked: A,
        closeOnSelect: !0,
        onCheckedChange: V,
        leftIcon: H,
        children: U,
      })),
      (t[23] = V),
      (t[24] = A),
      (t[25] = W))
    : (W = t[25]);
  let G;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Q.jsx)(y.Separator, {})), (t[26] = G))
    : (G = t[26]);
  let he;
  t[27] !== O || t[28] !== C
    ? ((he = () => {
        C.set(ge, !O);
      }),
      (t[27] = O),
      (t[28] = C),
      (t[29] = he))
    : (he = t[29]);
  let K;
  t[30] !== C || t[31] !== k
    ? ((K = () => {
        C.set(pe, !k);
      }),
      (t[30] = C),
      (t[31] = k),
      (t[32] = K))
    : (K = t[32]);
  let q;
  t[33] !== E || t[34] !== C
    ? ((q = () => {
        C.set(de, !E);
      }),
      (t[33] = E),
      (t[34] = C),
      (t[35] = q))
    : (q = t[35]);
  let _e;
  t[36] !== T || t[37] !== C
    ? ((_e = () => {
        C.set(me, !T);
      }),
      (t[36] = T),
      (t[37] = C),
      (t[38] = _e))
    : (_e = t[38]);
  let J;
  t[39] !== D || t[40] !== C
    ? ((J = () => {
        C.set(we, !D);
      }),
      (t[39] = D),
      (t[40] = C),
      (t[41] = J))
    : (J = t[41]);
  let ve;
  t[42] !== n ||
  t[43] !== T ||
  t[44] !== E ||
  t[45] !== D ||
  t[46] !== i ||
  t[47] !== O ||
  t[48] !== d ||
  t[49] !== v ||
  t[50] !== ee ||
  t[51] !== te ||
  t[52] !== S ||
  t[53] !== he ||
  t[54] !== K ||
  t[55] !== q ||
  t[56] !== _e ||
  t[57] !== J ||
  t[58] !== k
    ? ((ve = (0, Q.jsx)(Xe, {
        onClose: le,
        wordDiffsEnabled: k,
        showCopyGitApplyCommand: d,
        showHideImports: v,
        showHideWhitespace: ee,
        showLoadFullFiles: te,
        showRichPreview: S,
        copyGitApplyCommandDisabled: n,
        onClickCopyGitApplyCommand: i,
        richPreviewEnabled: O,
        onToggleRichPreview: he,
        onToggleWordDiffs: K,
        hideWhitespace: E,
        onToggleHideWhitespace: q,
        hideImports: T,
        onToggleHideImports: _e,
        loadFullFilesEnabled: D,
        onToggleLoadFullFiles: J,
      })),
      (t[42] = n),
      (t[43] = T),
      (t[44] = E),
      (t[45] = D),
      (t[46] = i),
      (t[47] = O),
      (t[48] = d),
      (t[49] = v),
      (t[50] = ee),
      (t[51] = te),
      (t[52] = S),
      (t[53] = he),
      (t[54] = K),
      (t[55] = q),
      (t[56] = _e),
      (t[57] = J),
      (t[58] = k),
      (t[59] = ve))
    : (ve = t[59]);
  let Y;
  t[60] !== j || t[61] !== z || t[62] !== B || t[63] !== W || t[64] !== ve
    ? ((Y = (0, Q.jsxs)(re, {
        open: j,
        onOpenChange: N,
        align: `end`,
        contentWidth: `menu`,
        triggerButton: z,
        children: [B, W, G, ve],
      })),
      (t[60] = j),
      (t[61] = z),
      (t[62] = B),
      (t[63] = W),
      (t[64] = ve),
      (t[65] = Y))
    : (Y = t[65]);
  let xe = r ? fe : ke,
    X;
  t[66] !== P || t[67] !== s || t[68] !== xe
    ? ((X = (0, Q.jsx)(Ye, { Icon: xe, label: P, onClick: s })),
      (t[66] = P),
      (t[67] = s),
      (t[68] = xe),
      (t[69] = X))
    : (X = t[69]);
  let Se;
  return (
    t[70] !== Y || t[71] !== X
      ? ((Se = (0, Q.jsxs)(Q.Fragment, { children: [Y, X] })), (t[70] = Y), (t[71] = X), (t[72] = Se))
      : (Se = t[72]),
    Se
  );
}
function qe(e) {
  let t = (0, Ze.c)(17),
    { diffMode: n, onSelectDiffMode: r, includeAuto: i } = e,
    a = i === void 0 || i,
    o = b(),
    s;
  t[0] !== n || t[1] !== a || t[2] !== o
    ? ((s = Je(o, n, a)), (t[0] = n), (t[1] = a), (t[2] = o), (t[3] = s))
    : (s = t[3]);
  let c = s,
    l;
  t[4] !== n || t[5] !== a || t[6] !== r
    ? ((l = () => r(!a && n === `split` ? `unified` : $e[n])), (t[4] = n), (t[5] = a), (t[6] = r), (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === n
    ? (u = t[9])
    : ((u = n === `auto` ? (0, Q.jsx)(De, { "aria-hidden": `true` }) : (0, Q.jsx)(p, { asset: et[n] })),
      (t[8] = n),
      (t[9] = u));
  let d;
  t[10] !== c || t[11] !== l || t[12] !== u
    ? ((d = (0, Q.jsx)(M, { "aria-label": c, color: `toolbar`, uniform: !0, onClick: l, children: u })),
      (t[10] = c),
      (t[11] = l),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== c || t[15] !== d
      ? ((f = (0, Q.jsx)(se, { tooltipContent: c, children: d })), (t[14] = c), (t[15] = d), (t[16] = f))
      : (f = t[16]),
    f
  );
}
function Je(e, t, n = !0) {
  return t === `unified`
    ? e.formatMessage({
        id: `codex.review.switchToSplit`,
        defaultMessage: `Switch to split diff`,
        description: `Button label to switch to split diff view`,
      })
    : t === `split` && !n
      ? e.formatMessage({
          id: `codex.diffView.switchToUnified`,
          defaultMessage: `Switch to unified diff`,
          description: `Tooltip to switch to unified diff view`,
        })
      : t === `split`
        ? e.formatMessage({
            id: `codex.review.switchToAuto`,
            defaultMessage: `Switch to Auto diff`,
            description: `Select automatic layout: split for files with additions and removals, unified otherwise`,
          })
        : e.formatMessage({
            id: `codex.review.autoSwitchToUnified`,
            defaultMessage: `Auto diff: switch to unified diff`,
            description: `Automatic diff layout is selected; activate to switch to unified layout`,
          });
}
function Ye(e) {
  let t = (0, Ze.c)(11),
    { Icon: n, busy: r, label: i, onClick: a, disabled: o } = e,
    s = r !== void 0 && r,
    c = o !== void 0 && o,
    l;
  t[0] === n ? (l = t[1]) : ((l = (0, Q.jsx)(n, { className: `icon-xs` })), (t[0] = n), (t[1] = l));
  let u;
  t[2] !== s || t[3] !== c || t[4] !== i || t[5] !== a || t[6] !== l
    ? ((u = (0, Q.jsx)(M, {
        "aria-label": i,
        "aria-busy": s,
        color: `toolbar`,
        uniform: !0,
        onClick: a,
        disabled: c,
        children: l,
      })),
      (t[2] = s),
      (t[3] = c),
      (t[4] = i),
      (t[5] = a),
      (t[6] = l),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== i || t[9] !== u
      ? ((d = (0, Q.jsx)(se, { tooltipContent: i, children: u })), (t[8] = i), (t[9] = u), (t[10] = d))
      : (d = t[10]),
    d
  );
}
function Xe(e) {
  let t = (0, Ze.c)(33),
    {
      onClose: r,
      wordDiffsEnabled: i,
      showCopyGitApplyCommand: a,
      showHideImports: o,
      showHideWhitespace: c,
      showLoadFullFiles: u,
      showRichPreview: d,
      copyGitApplyCommandDisabled: f,
      onClickCopyGitApplyCommand: m,
      richPreviewEnabled: h,
      onToggleRichPreview: g,
      onToggleWordDiffs: v,
      hideWhitespace: b,
      onToggleHideWhitespace: x,
      hideImports: ee,
      onToggleHideImports: te,
      loadFullFilesEnabled: ne,
      onToggleLoadFullFiles: S,
    } = e,
    C = o === void 0 || o,
    w = c === void 0 || c,
    T = u === void 0 || u,
    re = d === void 0 || d,
    E;
  t[0] !== ne || t[1] !== S || t[2] !== T
    ? ((E = T
        ? (0, Q.jsx)(y.CheckboxItem, {
            checked: ne,
            closeOnSelect: !0,
            onCheckedChange: S,
            leftIcon: (0, Q.jsx)(ue, {}),
            children: (0, Q.jsx)(l, {
              id: `codex.review.loadFullFiles.enable`,
              defaultMessage: `Load full files`,
              description: `Menu item to load full file contents for partial diffs`,
            }),
          })
        : null),
      (t[0] = ne),
      (t[1] = S),
      (t[2] = T),
      (t[3] = E))
    : (E = t[3]);
  let D;
  t[4] !== g || t[5] !== h || t[6] !== re
    ? ((D = re
        ? (0, Q.jsx)(y.CheckboxItem, {
            checked: h,
            closeOnSelect: !0,
            onCheckedChange: g,
            leftIcon: (0, Q.jsx)(s, {}),
            children: (0, Q.jsx)(l, {
              id: `codex.review.richPreview.label`,
              defaultMessage: `Rich preview`,
              description: `Toggle for rendered file previews in the diff view`,
            }),
          })
        : null),
      (t[4] = g),
      (t[5] = h),
      (t[6] = re),
      (t[7] = D))
    : (D = t[7]);
  let ie, O;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Q.jsx)(p, { asset: _ })),
      (O = (0, Q.jsx)(l, {
        id: `codex.review.wordDiffs.label`,
        defaultMessage: `Word diffs`,
        description: `Toggle for highlighting individual changed words in the diff view`,
      })),
      (t[8] = ie),
      (t[9] = O))
    : ((ie = t[8]), (O = t[9]));
  let k;
  t[10] !== v || t[11] !== i
    ? ((k = (0, Q.jsx)(y.CheckboxItem, {
        checked: i,
        closeOnSelect: !0,
        onCheckedChange: v,
        leftIcon: ie,
        children: O,
      })),
      (t[10] = v),
      (t[11] = i),
      (t[12] = k))
    : (k = t[12]);
  let A;
  t[13] !== b || t[14] !== x || t[15] !== w
    ? ((A = w
        ? (0, Q.jsx)(y.CheckboxItem, {
            checked: b,
            closeOnSelect: !0,
            onCheckedChange: x,
            leftIcon: (0, Q.jsx)(n, {}),
            children: (0, Q.jsx)(l, {
              id: `codex.review.whitespace.hide`,
              defaultMessage: `Hide white space`,
              description: `Menu item to hide whitespace-only diff changes`,
            }),
          })
        : null),
      (t[13] = b),
      (t[14] = x),
      (t[15] = w),
      (t[16] = A))
    : (A = t[16]);
  let j;
  t[17] !== ee || t[18] !== te || t[19] !== C
    ? ((j = C
        ? (0, Q.jsx)(y.CheckboxItem, {
            checked: ee,
            closeOnSelect: !0,
            onCheckedChange: te,
            leftIcon: (0, Q.jsx)(oe, {}),
            children: (0, Q.jsx)(l, {
              id: `codex.review.imports.hide`,
              defaultMessage: `Hide imports`,
              description: `Menu item to hide top-level import-only diff changes`,
            }),
          })
        : null),
      (t[17] = ee),
      (t[18] = te),
      (t[19] = C),
      (t[20] = j))
    : (j = t[20]);
  let M;
  t[21] !== f || t[22] !== m || t[23] !== r || t[24] !== a
    ? ((M = a
        ? (0, Q.jsx)(y.Item, {
            onSelect: (e) => {
              (e.preventDefault(), m?.(), r());
            },
            disabled: f || !m,
            leftIconAsset: ce,
            children: (0, Q.jsx)(l, {
              id: `codex.review.copyGitApplyCommand`,
              defaultMessage: `Copy git apply command`,
              description: `Menu item to copy a git apply command`,
            }),
          })
        : null),
      (t[21] = f),
      (t[22] = m),
      (t[23] = r),
      (t[24] = a),
      (t[25] = M))
    : (M = t[25]);
  let N;
  return (
    t[26] !== A || t[27] !== j || t[28] !== M || t[29] !== E || t[30] !== D || t[31] !== k
      ? ((N = (0, Q.jsxs)(Q.Fragment, { children: [E, D, k, A, j, M] })),
        (t[26] = A),
        (t[27] = j),
        (t[28] = M),
        (t[29] = E),
        (t[30] = D),
        (t[31] = k),
        (t[32] = N))
      : (N = t[32]),
    N
  );
}
var Ze, Qe, Q, $e, et;
function tt() {
  return (tt = e(() => {
    ((Ze = P()),
      A(),
      d(),
      E(),
      N(),
      le(),
      g(),
      (Qe = R()),
      O(),
      t(),
      h(),
      v(),
      D(),
      C(),
      Ee(),
      xe(),
      q(),
      Ae(),
      ve(),
      m(),
      I(),
      i(),
      We(),
      Te(),
      z(),
      (Q = L()),
      ($e = { unified: `split`, split: `auto`, auto: `unified` }),
      (et = { unified: k, split: T }));
  }))();
}
function nt(e) {
  let t = (0, at.c)(22),
    {
      children: n,
      contentWidth: r,
      diffStats: i,
      label: a,
      onOpenChange: o,
      open: s,
      reviewV2Enabled: c,
    } = e,
    l = c === void 0 || c,
    u = l ? `gap-3` : `gap-1.5 truncate`,
    d;
  t[0] === u ? (d = t[1]) : ((d = w(`flex max-w-full min-w-0 items-center`, u)), (t[0] = u), (t[1] = d));
  let p;
  t[2] === a
    ? (p = t[3])
    : ((p = (0, $.jsx)(`span`, {
        "data-tooltip-overflow-target": !0,
        className: `min-w-0 truncate`,
        children: a,
      })),
      (t[2] = a),
      (t[3] = p));
  let m;
  t[4] === i
    ? (m = t[5])
    : ((m =
        i == null
          ? null
          : (0, $.jsx)(`span`, {
              "data-viewer-header-collapsible": !0,
              children: (0, $.jsx)(rt, { ...i, reviewV2Enabled: !0 }),
            })),
      (t[4] = i),
      (t[5] = m));
  let h;
  t[6] !== d || t[7] !== p || t[8] !== m
    ? ((h = (0, $.jsxs)(`span`, { className: d, children: [p, m] })),
      (t[6] = d),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = (0, $.jsx)(f, {})), (t[10] = g)) : (g = t[10]);
  let _;
  t[11] === h
    ? (_ = t[12])
    : ((_ = (0, $.jsxs)(j, { variant: `dropdown`, allowShrink: !0, children: [h, g] })),
      (t[11] = h),
      (t[12] = _));
  let v;
  t[13] !== a || t[14] !== _
    ? ((v = (0, $.jsx)(se, {
        side: `bottom`,
        tooltipContent: a,
        openWhen: `trigger-overflows`,
        children: _,
      })),
      (t[13] = a),
      (t[14] = _),
      (t[15] = v))
    : (v = t[15]);
  let y = r ?? (l ? `menuWide` : `menuBounded`),
    b;
  return (
    t[16] !== n || t[17] !== o || t[18] !== s || t[19] !== y || t[20] !== v
      ? ((b = (0, $.jsx)(re, { onOpenChange: o, open: s, triggerButton: v, contentWidth: y, children: n })),
        (t[16] = n),
        (t[17] = o),
        (t[18] = s),
        (t[19] = y),
        (t[20] = v),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
function rt(e) {
  let t = (0, at.c)(6),
    { additions: n, deletions: r, reviewV2Enabled: i } = e;
  if (n === 0 && r === 0) return null;
  let a = i ? `text-sm` : `text-size-chat`,
    o;
  t[0] === a ? (o = t[1]) : ((o = w(`me-1 shrink-0 select-none`, a)), (t[0] = a), (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== r || t[4] !== o
      ? ((s = (0, $.jsx)(G, { className: o, linesAdded: n, linesRemoved: r })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function it(e) {
  let t = (0, at.c)(12),
    { diffStats: n, isSelected: r, label: i, showDiffStats: a, showSelectionIndicator: s } = e,
    c = s === void 0 || s,
    l;
  t[0] !== r || t[1] !== c
    ? ((l = c ? (0, $.jsx)(y.ItemIcon, { size: `xs`, children: r ? (0, $.jsx)(o, {}) : null }) : null),
      (t[0] = r),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === i
    ? (u = t[4])
    : ((u = (0, $.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: i })),
      (t[3] = i),
      (t[4] = u));
  let d;
  t[5] !== n || t[6] !== a
    ? ((d =
        a &&
        n != null &&
        (n.additions === 0 && n.deletions === 0
          ? (0, $.jsx)(`span`, {
              "aria-hidden": !0,
              className: `shrink-0 text-codex-description`,
              children: ot,
            })
          : (0, $.jsx)(G, { className: `shrink-0`, linesAdded: n.additions, linesRemoved: n.deletions }))),
      (t[5] = n),
      (t[6] = a),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== l || t[9] !== u || t[10] !== d
      ? ((f = (0, $.jsxs)(`span`, {
          className: `flex min-w-0 flex-1 items-center gap-1.5`,
          children: [l, u, d],
        })),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var at, $, ot;
function st() {
  return (st = e(() => {
    ((at = P()), S(), t(), v(), C(), H(), i(), ($ = L()), (ot = `—`));
  }))();
}
export { qe as a, tt as c, st as i, nt as n, Ke as o, it as r, Ge as s, rt as t };
//# sourceMappingURL=review-source-dropdown-516906020f92.js.map
