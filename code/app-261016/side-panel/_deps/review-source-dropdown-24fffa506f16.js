import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  A0 as i,
  CH as a,
  CK as o,
  Ct as s,
  DB as c,
  Dv as l,
  FBt as u,
  JE as d,
  LNt as f,
  LU as p,
  MNt as m,
  NNt as h,
  OB as g,
  OE as _,
  OH as v,
  Ov as y,
  PBt as b,
  Qst as x,
  St as S,
  TE as C,
  TY as w,
  XOt as T,
  XS as E,
  ZJ as D,
  ZSt as O,
  al as k,
  ck as A,
  dO as j,
  e6 as M,
  hU as ee,
  iCt as N,
  k0 as te,
  lO as P,
  n2 as ne,
  nB as re,
  okt as ie,
  ol as F,
  qE as ae,
  rB as I,
  rU as oe,
  rk as L,
  t2 as se,
  tkt as R,
  wt as ce,
  xt as z,
  zE as le,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Byt as ue,
  Fyt as de,
  Iyt as B,
  J_t as V,
  Lgt as H,
  Lyt as fe,
  MOr as pe,
  Pgt as me,
  Pyt as he,
  Vyt as ge,
  _It as U,
  _vt as _e,
  eyt as W,
  fCt as G,
  gIt as ve,
  mR as K,
  myt as ye,
  pCt as q,
  pR as be,
  q_t as J,
  yvt as Y,
  zOr as xe,
} from "./app-initial-ad16eaadf81f.js";
import { Gl as X, Kl as Se, Wl as Ce } from "./app-primary-3e00728c2a4c.js";
import { r as we, t as Te } from "./review-preferences-model-ed5ca3d17e0f.js";
import { n as Ee, t as De } from "./auto-diff-ea82773d8d5c.js";
var Oe, ke;
function Ae() {
  return (Ae = e(() => {
    (u(),
      (Oe = f()),
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
  let r = J(n);
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
    V();
  }))();
}
function Fe(e) {
  let t = (0, Re.c)(20),
    { entries: n, onSelectPath: r } = e,
    i = ie(),
    [a, o] = (0, ze.useState)(``),
    [s, u] = (0, ze.useState)(!1),
    d;
  t[0] === i
    ? (d = t[1])
    : ((d = i.formatMessage({
        id: `codex.review.jumpToFile`,
        defaultMessage: `Jump to file`,
        description: `Button label for opening diff file jump search`,
      })),
      (t[0] = i),
      (t[1] = d));
  let f = d,
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (e) => {
        (e && o(``), u(e));
      }),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(c, { className: `text-codex-description`, "aria-hidden": !1, asset: l })), (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] === f
    ? (h = t[5])
    : ((h = (0, Z.jsx)(_, { "aria-label": f, color: `toolbar`, uniform: !0, children: m })),
      (t[4] = f),
      (t[5] = h));
  let g;
  t[6] !== f || t[7] !== h
    ? ((g = (0, Z.jsx)(re, { tooltipContent: f, delayOpen: !0, children: h })),
      (t[6] = f),
      (t[7] = h),
      (t[8] = g))
    : (g = t[8]);
  let v;
  t[9] === r
    ? (v = t[10])
    : ((v = (e) => {
        (r(e), u(!1));
      }),
      (t[9] = r),
      (t[10] = v));
  let y;
  t[11] !== n || t[12] !== f || t[13] !== a || t[14] !== v
    ? ((y = (0, Z.jsx)(Ie, { entries: n, label: f, onQueryChange: o, onSelectPath: v, query: a })),
      (t[11] = n),
      (t[12] = f),
      (t[13] = a),
      (t[14] = v),
      (t[15] = y))
    : (y = t[15]);
  let b;
  return (
    t[16] !== s || t[17] !== g || t[18] !== y
      ? ((b = (0, Z.jsx)(Ce, {
          open: s,
          onOpenChange: p,
          align: `end`,
          contentWidth: `panelWide`,
          contentMaxHeight: `list`,
          triggerButton: g,
          children: y,
        })),
        (t[16] = s),
        (t[17] = g),
        (t[18] = y),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
function Ie(e) {
  let t = (0, Re.c)(22),
    { entries: n, label: r, onQueryChange: i, onSelectPath: a, query: o } = e,
    s,
    c,
    l,
    u,
    d;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o) {
    let e = je(n, o);
    ((c = X.Root),
      (u = r),
      t[10] !== r || t[11] !== i || t[12] !== o
        ? ((d = (0, Z.jsx)(X.Input, { placeholder: r, value: o, onValueChange: i })),
          (t[10] = r),
          (t[11] = i),
          (t[12] = o),
          (t[13] = d))
        : (d = t[13]),
      (s = X.List),
      (l =
        e.length === 0
          ? (0, Z.jsx)(L.Message, {
              compact: !0,
              children: (0, Z.jsx)(R, {
                id: `codex.review.jumpToFile.empty`,
                defaultMessage: `No matching files`,
                description: `Empty state for review file jump search`,
              }),
            })
          : e.map((e) =>
              (0, Z.jsx)(
                X.Item,
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
      (t[7] = l),
      (t[8] = u),
      (t[9] = d));
  } else ((s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]), (d = t[9]));
  let f;
  t[14] !== s || t[15] !== l
    ? ((f = (0, Z.jsx)(s, { children: l })), (t[14] = s), (t[15] = l), (t[16] = f))
    : (f = t[16]);
  let p;
  return (
    t[17] !== c || t[18] !== u || t[19] !== d || t[20] !== f
      ? ((p = (0, Z.jsxs)(c, { label: u, children: [d, f] })),
        (t[17] = c),
        (t[18] = u),
        (t[19] = d),
        (t[20] = f),
        (t[21] = p))
      : (p = t[21]),
    p
  );
}
function Le(e) {
  let t = (0, Re.c)(9),
    { displayPath: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = Ne(n)), (t[0] = n), (t[1] = r));
  let { fileName: i, parentPath: a } = r,
    o;
  t[2] === i
    ? (o = t[3])
    : ((o = (0, Z.jsx)(`span`, { className: `shrink-0 text-default`, children: i })), (t[2] = i), (t[3] = o));
  let s;
  t[4] === a
    ? (s = t[5])
    : ((s =
        a.length > 0
          ? (0, Z.jsx)(ae, { className: `min-w-0 flex-1 text-codex-description`, text: a })
          : null),
      (t[4] = a),
      (t[5] = s));
  let c;
  return (
    t[6] !== o || t[7] !== s
      ? ((c = (0, Z.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [o, s] })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
var Re, ze, Z;
function Be() {
  return (Be = e(() => {
    ((Re = b()), y(), (ze = u()), T(), Se(), A(), g(), d(), I(), E(), Pe(), (Z = f()));
  }))();
}
function Ve() {
  let e = (0, He.c)(5),
    t = n(pe),
    r = N(Y),
    i;
  e[0] === t ? (i = e[1]) : ((i = (e) => H(t, e)), (e[0] = t), (e[1] = i));
  let a;
  return (
    e[2] !== r || e[3] !== i
      ? ((a = (0, Ue.jsx)(Fe, { entries: r, onSelectPath: i })), (e[2] = r), (e[3] = i), (e[4] = a))
      : (a = e[4]),
    a
  );
}
var He, Ue;
function We() {
  return (We = e(() => {
    ((He = b()), O(), xe(), Be(), _e(), me(), (Ue = f()));
  }))();
}
function Ge(e) {
  let n = (0, Ze.c)(93),
    {
      copyGitApplyCommandDisabled: r,
      diffControls: i,
      onClickCopyGitApplyCommand: a,
      onRefreshGitQueries: o,
      refreshGitQueriesDisabled: s,
      showCopyGitApplyCommand: l,
      showHideImports: u,
      showHideWhitespace: d,
      showLoadFullFiles: f,
      showRefreshGitQueries: p,
    } = e,
    m = u === void 0 || u,
    h = d === void 0 || d,
    g = f === void 0 || f,
    v = ie(),
    y = N(ye),
    [b, x] = (0, Qe.useState)(!1),
    [S, w] = (0, Qe.useState)(!1),
    T = (0, Qe.useRef)(null),
    E = (0, Qe.useRef)(!1),
    O;
  n[0] === S
    ? (O = n[1])
    : ((O = (e, t) => {
        let n = e.contentRect.width > 0 && e.contentRect.height > 0;
        if ((w(n), n)) {
          S || x(!1);
          return;
        }
        let r = t.ownerDocument,
          i = r.activeElement,
          a = T.current;
        (E.current &&
          r.hasFocus() &&
          (t.contains(i) || i === r.body) &&
          a != null &&
          a.getClientRects().length > 0 &&
          a.focus(),
          (E.current = !1));
      }),
      (n[0] = S),
      (n[1] = O));
  let k = j(O),
    A;
  n[2] === v
    ? (A = n[3])
    : ((A = v.formatMessage({
        id: `codex.review.refreshGitQueries`,
        defaultMessage: `Refresh`,
        description: `Menu item to refresh git queries for the current repository`,
      })),
      (n[2] = v),
      (n[3] = A));
  let M = A,
    ee;
  n[4] === v
    ? (ee = n[5])
    : ((ee = v.formatMessage({
        id: `codex.review.wrap.label`,
        defaultMessage: `Word wrap`,
        description: `Toggle for wrapping long lines in the diff view`,
      })),
      (n[4] = v),
      (n[5] = ee));
  let P = ee,
    ne;
  n[6] !== i.expanded || n[7] !== v
    ? ((ne = i.expanded
        ? v.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.collapse`,
            defaultMessage: `Collapse all diffs`,
            description: `Menu item to collapse all diffs in the review options menu`,
          })
        : v.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.expand`,
            defaultMessage: `Expand all diffs`,
            description: `Menu item to expand all diffs in the review options menu`,
          })),
      (n[6] = i.expanded),
      (n[7] = v),
      (n[8] = ne))
    : (ne = n[8]);
  let F = ne,
    ae;
  n[9] === v
    ? (ae = n[10])
    : ((ae = v.formatMessage({
        id: `codex.review.header.moreOptions`,
        defaultMessage: `Changes options`,
        description: `Accessible label for the options menu in the Changes tab showing local diffs`,
      })),
      (n[9] = v),
      (n[10] = ae));
  let I = ae,
    oe;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = () => {
        x(!1);
      }),
      (n[11] = oe))
    : (oe = n[11]);
  let se = oe,
    R = y ? `hidden [@container_review-header_(min-width:625px)]:contents` : `contents`,
    ce;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, Q.jsx)(c, { className: `text-codex-description`, "aria-hidden": !1, asset: te })),
      (n[12] = ce))
    : (ce = n[12]);
  let z;
  n[13] === R
    ? (z = n[14])
    : ((z = (0, Q.jsx)(`span`, { className: R, children: ce })), (n[13] = R), (n[14] = z));
  let ue;
  n[15] === y
    ? (ue = n[16])
    : ((ue = y
        ? (0, Q.jsx)(`span`, {
            className: `contents [@container_review-header_(min-width:625px)]:hidden`,
            children: (0, Q.jsx)(t, { className: `icon-xs` }),
          })
        : null),
      (n[15] = y),
      (n[16] = ue));
  let de;
  n[17] !== I || n[18] !== y || n[19] !== z || n[20] !== ue
    ? ((de = (0, Q.jsxs)(_, {
        ref: T,
        "aria-label": I,
        "aria-busy": y,
        color: `toolbar`,
        uniform: !0,
        children: [z, ue],
      })),
      (n[17] = I),
      (n[18] = y),
      (n[19] = z),
      (n[20] = ue),
      (n[21] = de))
    : (de = n[21]);
  let B;
  n[22] !== I || n[23] !== de
    ? ((B = (0, Q.jsx)(re, { tooltipContent: I, delayOpen: !0, children: de })),
      (n[22] = I),
      (n[23] = de),
      (n[24] = B))
    : (B = n[24]);
  let V;
  n[25] !== i ||
  n[26] !== S ||
  n[27] !== F ||
  n[28] !== v ||
  n[29] !== o ||
  n[30] !== s ||
  n[31] !== M ||
  n[32] !== p ||
  n[33] !== P
    ? ((V = S
        ? null
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              p
                ? (0, Q.jsx)(L.Item, {
                    onSelect: (e) => {
                      (e.preventDefault(), o?.(), se());
                    },
                    LeftIcon: ve,
                    disabled: s || !o,
                    children: M,
                  })
                : null,
              (0, Q.jsx)(L.CheckboxItem, {
                checked: i.wrap,
                closeOnSelect: !0,
                onCheckedChange: i.onToggleWrap,
                leftIcon: (0, Q.jsx)(D, {}),
                children: P,
              }),
              (0, Q.jsx)(L.Item, {
                onSelect: (e) => {
                  (e.preventDefault(), i.onSelectDiffMode($e[i.diffMode]), se());
                },
                leftIcon:
                  i.diffMode === `auto`
                    ? (0, Q.jsx)(De, { "aria-hidden": `true` })
                    : (0, Q.jsx)(c, { asset: et[i.diffMode] }),
                children: Je(v, i.diffMode),
              }),
              (0, Q.jsx)(L.Item, {
                onSelect: (e) => {
                  (e.preventDefault(), i.onToggleExpanded(), se());
                },
                LeftIcon: i.expanded ? be : ke,
                children: F,
              }),
              (0, Q.jsx)(L.Separator, {}),
            ],
          })),
      (n[25] = i),
      (n[26] = S),
      (n[27] = F),
      (n[28] = v),
      (n[29] = o),
      (n[30] = s),
      (n[31] = M),
      (n[32] = p),
      (n[33] = P),
      (n[34] = V))
    : (V = n[34]);
  let H;
  n[35] !== r ||
  n[36] !== i.hideImports ||
  n[37] !== i.hideWhitespace ||
  n[38] !== i.loadFullFilesEnabled ||
  n[39] !== i.onToggleHideImports ||
  n[40] !== i.onToggleHideWhitespace ||
  n[41] !== i.onToggleLoadFullFiles ||
  n[42] !== i.onToggleRichPreview ||
  n[43] !== i.onToggleWordDiffs ||
  n[44] !== i.richPreviewEnabled ||
  n[45] !== i.wordDiffsEnabled ||
  n[46] !== a ||
  n[47] !== l ||
  n[48] !== m ||
  n[49] !== h ||
  n[50] !== g
    ? ((H = (0, Q.jsx)(Xe, {
        onClose: se,
        wordDiffsEnabled: i.wordDiffsEnabled,
        showCopyGitApplyCommand: l,
        showHideImports: m,
        showHideWhitespace: h,
        showLoadFullFiles: g,
        copyGitApplyCommandDisabled: r,
        onClickCopyGitApplyCommand: a,
        richPreviewEnabled: i.richPreviewEnabled,
        onToggleRichPreview: i.onToggleRichPreview,
        onToggleWordDiffs: i.onToggleWordDiffs,
        hideWhitespace: i.hideWhitespace,
        onToggleHideWhitespace: i.onToggleHideWhitespace,
        hideImports: i.hideImports,
        onToggleHideImports: i.onToggleHideImports,
        loadFullFilesEnabled: i.loadFullFilesEnabled,
        onToggleLoadFullFiles: i.onToggleLoadFullFiles,
      })),
      (n[35] = r),
      (n[36] = i.hideImports),
      (n[37] = i.hideWhitespace),
      (n[38] = i.loadFullFilesEnabled),
      (n[39] = i.onToggleHideImports),
      (n[40] = i.onToggleHideWhitespace),
      (n[41] = i.onToggleLoadFullFiles),
      (n[42] = i.onToggleRichPreview),
      (n[43] = i.onToggleWordDiffs),
      (n[44] = i.richPreviewEnabled),
      (n[45] = i.wordDiffsEnabled),
      (n[46] = a),
      (n[47] = l),
      (n[48] = m),
      (n[49] = h),
      (n[50] = g),
      (n[51] = H))
    : (H = n[51]);
  let fe;
  n[52] !== b || n[53] !== B || n[54] !== V || n[55] !== H
    ? ((fe = (0, Q.jsxs)(le, {
        open: b,
        onOpenChange: x,
        align: `end`,
        contentWidth: `menu`,
        triggerButton: B,
        children: [V, H],
      })),
      (n[52] = b),
      (n[53] = B),
      (n[54] = V),
      (n[55] = H),
      (n[56] = fe))
    : (fe = n[56]);
  let pe;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Q.jsx)(Ve, {})), (n[57] = pe))
    : (pe = n[57]);
  let me, he;
  n[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (e) => {
        !e.currentTarget.contains(e.relatedTarget) &&
          (e.relatedTarget != null || e.currentTarget.getClientRects().length > 0) &&
          (E.current = !1);
      }),
      (he = (e) => {
        E.current = e.currentTarget.contains(e.target) && e.target.matches(`:focus-visible`);
      }),
      (n[58] = me),
      (n[59] = he))
    : ((me = n[58]), (he = n[59]));
  let ge;
  n[60] !== y || n[61] !== o || n[62] !== s || n[63] !== M || n[64] !== p
    ? ((ge = p
        ? (0, Q.jsx)(Ye, { Icon: y ? t : ve, busy: y, label: M, onClick: () => o?.(), disabled: s || !o })
        : null),
      (n[60] = y),
      (n[61] = o),
      (n[62] = s),
      (n[63] = M),
      (n[64] = p),
      (n[65] = ge))
    : (ge = n[65]);
  let U = i.wrap ? `selected` : `default`,
    _e = i.wrap ? void 0 : `text-tertiary`,
    W;
  n[66] === _e ? (W = n[67]) : ((W = (0, Q.jsx)(D, { className: _e })), (n[66] = _e), (n[67] = W));
  let G;
  n[68] !== i.onToggleWrap || n[69] !== i.wrap || n[70] !== U || n[71] !== W || n[72] !== P
    ? ((G = (0, Q.jsx)(C, {
        "aria-label": P,
        "aria-pressed": i.wrap,
        variant: U,
        uniform: !0,
        onClick: i.onToggleWrap,
        children: W,
      })),
      (n[68] = i.onToggleWrap),
      (n[69] = i.wrap),
      (n[70] = U),
      (n[71] = W),
      (n[72] = P),
      (n[73] = G))
    : (G = n[73]);
  let K;
  n[74] !== G || n[75] !== P
    ? ((K = (0, Q.jsx)(re, { tooltipContent: P, children: G })), (n[74] = G), (n[75] = P), (n[76] = K))
    : (K = n[76]);
  let q = i.expanded ? be : ke,
    J;
  n[77] !== i.onToggleExpanded || n[78] !== F || n[79] !== q
    ? ((J = (0, Q.jsx)(Ye, { Icon: q, label: F, onClick: i.onToggleExpanded })),
      (n[77] = i.onToggleExpanded),
      (n[78] = F),
      (n[79] = q),
      (n[80] = J))
    : (J = n[80]);
  let Y;
  n[81] !== i.diffMode || n[82] !== i.onSelectDiffMode
    ? ((Y = (0, Q.jsx)(qe, { diffMode: i.diffMode, onSelectDiffMode: i.onSelectDiffMode })),
      (n[81] = i.diffMode),
      (n[82] = i.onSelectDiffMode),
      (n[83] = Y))
    : (Y = n[83]);
  let xe;
  n[84] !== k || n[85] !== ge || n[86] !== K || n[87] !== J || n[88] !== Y
    ? ((xe = (0, Q.jsxs)(`div`, {
        ref: k,
        className: `hidden items-center gap-1.5 [@container_review-header_(min-width:625px)]:flex`,
        onBlurCapture: me,
        onFocusCapture: he,
        children: [ge, K, J, Y],
      })),
      (n[84] = k),
      (n[85] = ge),
      (n[86] = K),
      (n[87] = J),
      (n[88] = Y),
      (n[89] = xe))
    : (xe = n[89]);
  let X;
  return (
    n[90] !== fe || n[91] !== xe
      ? ((X = (0, Q.jsxs)(Q.Fragment, { children: [fe, pe, xe] })), (n[90] = fe), (n[91] = xe), (n[92] = X))
      : (X = n[92]),
    X
  );
}
function Ke(e) {
  let t = (0, Ze.c)(73),
    {
      copyGitApplyCommandDisabled: r,
      expanded: i,
      onClickCopyGitApplyCommand: a,
      onRefreshGitQueries: o,
      onToggleExpanded: s,
      refreshGitQueriesDisabled: l,
      showCopyGitApplyCommand: u,
      showHideImports: d,
      showHideWhitespace: f,
      showLoadFullFiles: p,
      showRichPreview: m,
      showRefreshGitQueries: h,
    } = e,
    g = d === void 0 || d,
    v = f === void 0 || f,
    y = p === void 0 || p,
    b = m === void 0 || m,
    S = n(x),
    C = ie(),
    w = N(he),
    T = N(de),
    E = N(we),
    O = N(fe),
    k = N(ue),
    A = N(ge),
    [j, M] = (0, Qe.useState)(!1),
    ee;
  t[0] === C
    ? (ee = t[1])
    : ((ee = C.formatMessage({
        id: `codex.review.refreshGitQueries`,
        defaultMessage: `Refresh`,
        description: `Menu item to refresh git queries for the current repository`,
      })),
      (t[0] = C),
      (t[1] = ee));
  let P = ee,
    ne;
  t[2] !== i || t[3] !== C
    ? ((ne = i
        ? C.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.collapse`,
            defaultMessage: `Collapse all diffs`,
            description: `Menu item to collapse all diffs in the review options menu`,
          })
        : C.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.expand`,
            defaultMessage: `Expand all diffs`,
            description: `Menu item to expand all diffs in the review options menu`,
          })),
      (t[2] = i),
      (t[3] = C),
      (t[4] = ne))
    : (ne = t[4]);
  let F = ne,
    ae;
  t[5] === C
    ? (ae = t[6])
    : ((ae = C.formatMessage({
        id: `codex.review.header.moreOptions`,
        defaultMessage: `Changes options`,
        description: `Accessible label for the options menu in the Changes tab showing local diffs`,
      })),
      (t[5] = C),
      (t[6] = ae));
  let I = ae,
    oe;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = () => {
        M(!1);
      }),
      (t[7] = oe))
    : (oe = t[7]);
  let se = oe,
    ce;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, Q.jsx)(c, { "aria-hidden": !1, asset: te })), (t[8] = ce))
    : (ce = t[8]);
  let z;
  t[9] === I
    ? (z = t[10])
    : ((z = (0, Q.jsx)(_, { "aria-label": I, color: `toolbar`, uniform: !0, children: ce })),
      (t[9] = I),
      (t[10] = z));
  let B;
  t[11] !== I || t[12] !== z
    ? ((B = (0, Q.jsx)(re, { tooltipContent: I, delayOpen: !0, children: z })),
      (t[11] = I),
      (t[12] = z),
      (t[13] = B))
    : (B = t[13]);
  let V;
  t[14] !== o || t[15] !== l || t[16] !== P || t[17] !== h
    ? ((V = h
        ? (0, Q.jsx)(L.Item, {
            onSelect: (e) => {
              (e.preventDefault(), o?.(), se());
            },
            LeftIcon: ve,
            disabled: l || !o,
            children: P,
          })
        : null),
      (t[14] = o),
      (t[15] = l),
      (t[16] = P),
      (t[17] = h),
      (t[18] = V))
    : (V = t[18]);
  let H;
  t[19] === S ? (H = t[20]) : ((H = (e) => S.set(ge, e === !0)), (t[19] = S), (t[20] = H));
  let pe, me;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Q.jsx)(D, {})),
      (me = (0, Q.jsx)(R, {
        id: `codex.review.wrap.label`,
        defaultMessage: `Word wrap`,
        description: `Toggle for wrapping long lines in the diff view`,
      })),
      (t[21] = pe),
      (t[22] = me))
    : ((pe = t[21]), (me = t[22]));
  let U;
  t[23] !== H || t[24] !== A
    ? ((U = (0, Q.jsx)(L.CheckboxItem, {
        checked: A,
        closeOnSelect: !0,
        onCheckedChange: H,
        leftIcon: pe,
        children: me,
      })),
      (t[23] = H),
      (t[24] = A),
      (t[25] = U))
    : (U = t[25]);
  let _e;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Q.jsx)(L.Separator, {})), (t[26] = _e))
    : (_e = t[26]);
  let W;
  t[27] !== O || t[28] !== S
    ? ((W = () => {
        S.set(fe, !O);
      }),
      (t[27] = O),
      (t[28] = S),
      (t[29] = W))
    : (W = t[29]);
  let G;
  t[30] !== S || t[31] !== k
    ? ((G = () => {
        S.set(ue, !k);
      }),
      (t[30] = S),
      (t[31] = k),
      (t[32] = G))
    : (G = t[32]);
  let K;
  t[33] !== T || t[34] !== S
    ? ((K = () => {
        S.set(de, !T);
      }),
      (t[33] = T),
      (t[34] = S),
      (t[35] = K))
    : (K = t[35]);
  let ye;
  t[36] !== w || t[37] !== S
    ? ((ye = () => {
        S.set(he, !w);
      }),
      (t[36] = w),
      (t[37] = S),
      (t[38] = ye))
    : (ye = t[38]);
  let q;
  t[39] !== E || t[40] !== S
    ? ((q = () => {
        S.set(we, !E);
      }),
      (t[39] = E),
      (t[40] = S),
      (t[41] = q))
    : (q = t[41]);
  let J;
  t[42] !== r ||
  t[43] !== w ||
  t[44] !== T ||
  t[45] !== E ||
  t[46] !== a ||
  t[47] !== O ||
  t[48] !== u ||
  t[49] !== g ||
  t[50] !== v ||
  t[51] !== y ||
  t[52] !== b ||
  t[53] !== W ||
  t[54] !== G ||
  t[55] !== K ||
  t[56] !== ye ||
  t[57] !== q ||
  t[58] !== k
    ? ((J = (0, Q.jsx)(Xe, {
        onClose: se,
        wordDiffsEnabled: k,
        showCopyGitApplyCommand: u,
        showHideImports: g,
        showHideWhitespace: v,
        showLoadFullFiles: y,
        showRichPreview: b,
        copyGitApplyCommandDisabled: r,
        onClickCopyGitApplyCommand: a,
        richPreviewEnabled: O,
        onToggleRichPreview: W,
        onToggleWordDiffs: G,
        hideWhitespace: T,
        onToggleHideWhitespace: K,
        hideImports: w,
        onToggleHideImports: ye,
        loadFullFilesEnabled: E,
        onToggleLoadFullFiles: q,
      })),
      (t[42] = r),
      (t[43] = w),
      (t[44] = T),
      (t[45] = E),
      (t[46] = a),
      (t[47] = O),
      (t[48] = u),
      (t[49] = g),
      (t[50] = v),
      (t[51] = y),
      (t[52] = b),
      (t[53] = W),
      (t[54] = G),
      (t[55] = K),
      (t[56] = ye),
      (t[57] = q),
      (t[58] = k),
      (t[59] = J))
    : (J = t[59]);
  let Y;
  t[60] !== j || t[61] !== B || t[62] !== V || t[63] !== U || t[64] !== J
    ? ((Y = (0, Q.jsxs)(le, {
        open: j,
        onOpenChange: M,
        align: `end`,
        contentWidth: `menu`,
        triggerButton: B,
        children: [V, U, _e, J],
      })),
      (t[60] = j),
      (t[61] = B),
      (t[62] = V),
      (t[63] = U),
      (t[64] = J),
      (t[65] = Y))
    : (Y = t[65]);
  let xe = i ? be : ke,
    X;
  t[66] !== F || t[67] !== s || t[68] !== xe
    ? ((X = (0, Q.jsx)(Ye, { Icon: xe, label: F, onClick: s })),
      (t[66] = F),
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
    o = ie(),
    s;
  t[0] !== n || t[1] !== a || t[2] !== o
    ? ((s = Je(o, n, a)), (t[0] = n), (t[1] = a), (t[2] = o), (t[3] = s))
    : (s = t[3]);
  let l = s,
    u;
  t[4] !== n || t[5] !== a || t[6] !== r
    ? ((u = () => r(!a && n === `split` ? `unified` : $e[n])), (t[4] = n), (t[5] = a), (t[6] = r), (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === n
    ? (d = t[9])
    : ((d = n === `auto` ? (0, Q.jsx)(De, { "aria-hidden": `true` }) : (0, Q.jsx)(c, { asset: et[n] })),
      (t[8] = n),
      (t[9] = d));
  let f;
  t[10] !== l || t[11] !== u || t[12] !== d
    ? ((f = (0, Q.jsx)(_, { "aria-label": l, color: `toolbar`, uniform: !0, onClick: u, children: d })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f))
    : (f = t[13]);
  let p;
  return (
    t[14] !== l || t[15] !== f
      ? ((p = (0, Q.jsx)(re, { tooltipContent: l, children: f })), (t[14] = l), (t[15] = f), (t[16] = p))
      : (p = t[16]),
    p
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
    ? ((u = (0, Q.jsx)(_, {
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
      ? ((d = (0, Q.jsx)(re, { tooltipContent: i, children: u })), (t[8] = i), (t[9] = u), (t[10] = d))
      : (d = t[10]),
    d
  );
}
function Xe(e) {
  let t = (0, Ze.c)(33),
    {
      onClose: n,
      wordDiffsEnabled: r,
      showCopyGitApplyCommand: i,
      showHideImports: a,
      showHideWhitespace: s,
      showLoadFullFiles: l,
      showRichPreview: u,
      copyGitApplyCommandDisabled: d,
      onClickCopyGitApplyCommand: f,
      richPreviewEnabled: m,
      onToggleRichPreview: h,
      onToggleWordDiffs: g,
      hideWhitespace: _,
      onToggleHideWhitespace: v,
      hideImports: y,
      onToggleHideImports: b,
      loadFullFilesEnabled: x,
      onToggleLoadFullFiles: S,
    } = e,
    C = a === void 0 || a,
    w = s === void 0 || s,
    T = l === void 0 || l,
    E = u === void 0 || u,
    D;
  t[0] !== x || t[1] !== S || t[2] !== T
    ? ((D = T
        ? (0, Q.jsx)(L.CheckboxItem, {
            checked: x,
            closeOnSelect: !0,
            onCheckedChange: S,
            leftIcon: (0, Q.jsx)(ee, {}),
            children: (0, Q.jsx)(R, {
              id: `codex.review.loadFullFiles.enable`,
              defaultMessage: `Load full files`,
              description: `Menu item to load full file contents for partial diffs`,
            }),
          })
        : null),
      (t[0] = x),
      (t[1] = S),
      (t[2] = T),
      (t[3] = D))
    : (D = t[3]);
  let O;
  t[4] !== h || t[5] !== m || t[6] !== E
    ? ((O = E
        ? (0, Q.jsx)(L.CheckboxItem, {
            checked: m,
            closeOnSelect: !0,
            onCheckedChange: h,
            leftIcon: (0, Q.jsx)(o, {}),
            children: (0, Q.jsx)(R, {
              id: `codex.review.richPreview.label`,
              defaultMessage: `Rich preview`,
              description: `Toggle for rendered file previews in the diff view`,
            }),
          })
        : null),
      (t[4] = h),
      (t[5] = m),
      (t[6] = E),
      (t[7] = O))
    : (O = t[7]);
  let k, A;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(c, { asset: F })),
      (A = (0, Q.jsx)(R, {
        id: `codex.review.wordDiffs.label`,
        defaultMessage: `Word diffs`,
        description: `Toggle for highlighting individual changed words in the diff view`,
      })),
      (t[8] = k),
      (t[9] = A))
    : ((k = t[8]), (A = t[9]));
  let j;
  t[10] !== g || t[11] !== r
    ? ((j = (0, Q.jsx)(L.CheckboxItem, {
        checked: r,
        closeOnSelect: !0,
        onCheckedChange: g,
        leftIcon: k,
        children: A,
      })),
      (t[10] = g),
      (t[11] = r),
      (t[12] = j))
    : (j = t[12]);
  let M;
  t[13] !== _ || t[14] !== v || t[15] !== w
    ? ((M = w
        ? (0, Q.jsx)(L.CheckboxItem, {
            checked: _,
            closeOnSelect: !0,
            onCheckedChange: v,
            leftIcon: (0, Q.jsx)(p, {}),
            children: (0, Q.jsx)(R, {
              id: `codex.review.whitespace.hide`,
              defaultMessage: `Hide white space`,
              description: `Menu item to hide whitespace-only diff changes`,
            }),
          })
        : null),
      (t[13] = _),
      (t[14] = v),
      (t[15] = w),
      (t[16] = M))
    : (M = t[16]);
  let N;
  t[17] !== y || t[18] !== b || t[19] !== C
    ? ((N = C
        ? (0, Q.jsx)(L.CheckboxItem, {
            checked: y,
            closeOnSelect: !0,
            onCheckedChange: b,
            leftIcon: (0, Q.jsx)(oe, {}),
            children: (0, Q.jsx)(R, {
              id: `codex.review.imports.hide`,
              defaultMessage: `Hide imports`,
              description: `Menu item to hide top-level import-only diff changes`,
            }),
          })
        : null),
      (t[17] = y),
      (t[18] = b),
      (t[19] = C),
      (t[20] = N))
    : (N = t[20]);
  let te;
  t[21] !== d || t[22] !== f || t[23] !== n || t[24] !== i
    ? ((te = i
        ? (0, Q.jsx)(L.Item, {
            onSelect: (e) => {
              (e.preventDefault(), f?.(), n());
            },
            disabled: d || !f,
            leftIconAsset: se,
            children: (0, Q.jsx)(R, {
              id: `codex.review.copyGitApplyCommand`,
              defaultMessage: `Copy git apply command`,
              description: `Menu item to copy a git apply command`,
            }),
          })
        : null),
      (t[21] = d),
      (t[22] = f),
      (t[23] = n),
      (t[24] = i),
      (t[25] = te))
    : (te = t[25]);
  let P;
  return (
    t[26] !== M || t[27] !== N || t[28] !== te || t[29] !== D || t[30] !== O || t[31] !== j
      ? ((P = (0, Q.jsxs)(Q.Fragment, { children: [D, O, j, M, N, te] })),
        (t[26] = M),
        (t[27] = N),
        (t[28] = te),
        (t[29] = D),
        (t[30] = O),
        (t[31] = j),
        (t[32] = P))
      : (P = t[32]),
    P
  );
}
var Ze, Qe, Q, $e, et;
function tt() {
  return (tt = e(() => {
    ((Ze = b()),
      ne(),
      i(),
      s(),
      z(),
      k(),
      O(),
      (Qe = u()),
      T(),
      A(),
      g(),
      w(),
      M(),
      I(),
      Ee(),
      B(),
      U(),
      Ae(),
      K(),
      P(),
      r(),
      E(),
      We(),
      Te(),
      W(),
      (Q = f()),
      ($e = { unified: `split`, split: `auto`, auto: `unified` }),
      (et = { unified: S, split: ce }));
  }))();
}
function nt(e) {
  let n = (0, at.c)(28),
    {
      children: r,
      ariaLabel: i,
      icon: a,
      contentWidth: o,
      diffStats: s,
      label: c,
      isLoading: l,
      onOpenChange: u,
      open: d,
      reviewV2Enabled: f,
    } = e,
    p = l !== void 0 && l,
    h = f === void 0 || f,
    g = i ?? c,
    _ = a == null ? `trigger-overflows` : void 0,
    y = h ? `gap-3` : `gap-1.5 truncate`,
    b;
  n[0] === y ? (b = n[1]) : ((b = m(`flex max-w-full min-w-0 items-center`, y)), (n[0] = y), (n[1] = b));
  let x;
  n[2] === c
    ? (x = n[3])
    : ((x = (0, $.jsx)(`span`, {
        "data-tooltip-overflow-target": !0,
        className: `min-w-0 truncate`,
        children: c,
      })),
      (n[2] = c),
      (n[3] = x));
  let S;
  n[4] === s
    ? (S = n[5])
    : ((S =
        s == null
          ? null
          : (0, $.jsx)(`span`, {
              "data-viewer-header-collapsible": !0,
              children: (0, $.jsx)(rt, { ...s, reviewV2Enabled: !0 }),
            })),
      (n[4] = s),
      (n[5] = S));
  let w;
  n[6] !== b || n[7] !== x || n[8] !== S
    ? ((w = (0, $.jsxs)(`span`, { className: b, children: [x, S] })),
      (n[6] = b),
      (n[7] = x),
      (n[8] = S),
      (n[9] = w))
    : (w = n[9]);
  let T;
  n[10] === p
    ? (T = n[11])
    : ((T = p ? (0, $.jsx)(t, { className: `icon-xxs` }) : (0, $.jsx)(v, {})), (n[10] = p), (n[11] = T));
  let E;
  n[12] !== i || n[13] !== a || n[14] !== p || n[15] !== T || n[16] !== w
    ? ((E = (0, $.jsxs)(C, {
        variant: `dropdown`,
        allowShrink: !0,
        "aria-busy": p,
        "aria-label": i,
        children: [a, w, T],
      })),
      (n[12] = i),
      (n[13] = a),
      (n[14] = p),
      (n[15] = T),
      (n[16] = w),
      (n[17] = E))
    : (E = n[17]);
  let D;
  n[18] !== E || n[19] !== g || n[20] !== _
    ? ((D = (0, $.jsx)(re, { side: `bottom`, tooltipContent: g, openWhen: _, children: E })),
      (n[18] = E),
      (n[19] = g),
      (n[20] = _),
      (n[21] = D))
    : (D = n[21]);
  let O = o ?? (h ? `menuWide` : `menuBounded`),
    k;
  return (
    n[22] !== r || n[23] !== u || n[24] !== d || n[25] !== D || n[26] !== O
      ? ((k = (0, $.jsx)(le, { onOpenChange: u, open: d, triggerButton: D, contentWidth: O, children: r })),
        (n[22] = r),
        (n[23] = u),
        (n[24] = d),
        (n[25] = D),
        (n[26] = O),
        (n[27] = k))
      : (k = n[27]),
    k
  );
}
function rt(e) {
  let t = (0, at.c)(6),
    { additions: n, deletions: r, reviewV2Enabled: i } = e;
  if (n === 0 && r === 0) return null;
  let a = i ? `text-sm` : `text-size-chat`,
    o;
  t[0] === a ? (o = t[1]) : ((o = m(`me-1 shrink-0 select-none`, a)), (t[0] = a), (t[1] = o));
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
    { diffStats: n, isSelected: r, label: i, showDiffStats: o, showSelectionIndicator: s } = e,
    c = s === void 0 || s,
    l;
  t[0] !== r || t[1] !== c
    ? ((l = c ? (0, $.jsx)(L.ItemIcon, { size: `xs`, children: r ? (0, $.jsx)(a, {}) : null }) : null),
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
  t[5] !== n || t[6] !== o
    ? ((d =
        o &&
        n != null &&
        (n.additions === 0 && n.deletions === 0
          ? (0, $.jsx)(`span`, {
              "aria-hidden": !0,
              className: `shrink-0 text-codex-description`,
              children: ot,
            })
          : (0, $.jsx)(G, { className: `shrink-0`, linesAdded: n.additions, linesRemoved: n.deletions }))),
      (t[5] = n),
      (t[6] = o),
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
    ((at = b()), h(), A(), w(), M(), I(), q(), E(), ($ = f()), (ot = `—`));
  }))();
}
export { qe as a, tt as c, st as i, nt as n, Ke as o, it as r, Ge as s, rt as t };
//# sourceMappingURL=review-source-dropdown-24fffa506f16.js.map
