import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DB as t,
  LNt as n,
  MNt as r,
  NNt as i,
  NSt as a,
  OB as o,
  PBt as s,
  TY as c,
  USt as l,
  XOt as u,
  Y3 as d,
  YOt as f,
  Z3 as p,
  ast as m,
  ck as h,
  ist as g,
  kH as _,
  nB as v,
  nQ as y,
  okt as b,
  rB as x,
  rk as S,
  tQ as C,
  tk as w,
  tkt as T,
} from "./app-shared-2feb3d4c6fcc.js";
import { LF as E, QF as D, RF as O, do as k, eI as A, uo as j } from "./app-initial-ad16eaadf81f.js";
import { n as M, t as N } from "./cloud-settings-toolbar-f4dd9fd3b411.js";
function P(e) {
  let t = (0, F.c)(22),
    n,
    i;
  t[0] === e
    ? ((n = t[1]), (i = t[2]))
    : (({ selectedTab: i, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = i));
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, I.jsx)(E, { slug: `codex-cloud` })), (t[3] = a))
    : (a = t[3]);
  let o = i !== `environments` && `invisible`,
    s;
  t[4] === o ? (s = t[5]) : ((s = r(`col-start-1 row-start-1`, o)), (t[4] = o), (t[5] = s));
  let c = i !== `environments`,
    l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, I.jsx)(T, {
        id: `settings.codexCloud.description`,
        defaultMessage: `Set up cloud environments with the repositories, tools, and settings Codex needs to work on your projects`,
        description: `Purpose of Codex Cloud environments, which configure the repositories, tools, and settings available to Codex`,
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== s || t[8] !== c
    ? ((u = (0, I.jsx)(`div`, { className: s, "aria-hidden": c, children: l })),
      (t[7] = s),
      (t[8] = c),
      (t[9] = u))
    : (u = t[9]);
  let d = i !== `personal-vault` && `invisible`,
    f;
  t[10] === d ? (f = t[11]) : ((f = r(`col-start-1 row-start-1`, d)), (t[10] = d), (t[11] = f));
  let p = i !== `personal-vault`,
    m;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, I.jsx)(T, {
        id: `personalVault.description`,
        defaultMessage: `Save your own environment variables and network secrets for cloud environments in this workspace`,
        description: `Purpose of the personal vault, whose entries belong to the signed-in user in the current workspace`,
      })),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] !== f || t[14] !== p
    ? ((h = (0, I.jsx)(`div`, { className: f, "aria-hidden": p, children: m })),
      (t[13] = f),
      (t[14] = p),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] !== h || t[17] !== u
    ? ((g = (0, I.jsxs)(`div`, { className: `grid`, children: [u, h] })),
      (t[16] = h),
      (t[17] = u),
      (t[18] = g))
    : (g = t[18]);
  let _;
  return (
    t[19] !== n || t[20] !== g
      ? ((_ = (0, I.jsx)(D, { ...n, title: a, subtitle: g })), (t[19] = n), (t[20] = g), (t[21] = _))
      : (_ = t[21]),
    _
  );
}
var F, I;
function L() {
  return (L = e(() => {
    ((F = s()), i(), u(), A(), O(), (I = n()));
  }))();
}
function R(e) {
  let t = (0, B.c)(13),
    { items: n, moreLabel: r } = e;
  if (n.length === 0) return null;
  let i;
  t[0] === n ? (i = t[1]) : ((i = n.map(z)), (t[0] = n), (t[1] = i));
  let a;
  t[2] === i
    ? (a = t[3])
    : ((a = (0, V.jsx)(`ul`, { className: `flex flex-col gap-1`, tabIndex: 0, children: i })),
      (t[2] = i),
      (t[3] = a));
  let o;
  t[4] === n[0].name
    ? (o = t[5])
    : ((o = (0, V.jsx)(`span`, { className: `truncate`, children: n[0].name })),
      (t[4] = n[0].name),
      (t[5] = o));
  let s;
  t[6] !== n.length || t[7] !== r
    ? ((s = n.length > 1 ? (0, V.jsx)(`span`, { className: `shrink-0`, children: r }) : null),
      (t[6] = n.length),
      (t[7] = r),
      (t[8] = s))
    : (s = t[8]);
  let c;
  return (
    t[9] !== a || t[10] !== o || t[11] !== s
      ? ((c = (0, V.jsxs)(v, {
          className: `flex max-w-full min-w-0 items-center gap-2 text-xs font-normal text-secondary select-none`,
          triggerAsChild: !1,
          closeOnTriggerClick: !1,
          interactive: !0,
          keyboardNavigation: !0,
          scaleAvailableSizeWithZoom: !0,
          scrollable: !0,
          tooltipContent: a,
          children: [o, s],
        })),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s),
        (t[12] = c))
      : (c = t[12]),
    c
  );
}
function z(e) {
  let { id: t, name: n } = e;
  return (0, V.jsx)(`li`, { children: n }, t);
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = s()), x(), (V = n()));
  }))();
}
function U(e) {
  let t = (0, W.c)(14),
    { children: n, search: r, selectedTab: i } = e,
    a = b(),
    o = l(),
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = a.formatMessage({
        id: `settings.codexCloud.tabs`,
        defaultMessage: `Codex Cloud settings`,
        description: `Accessible label for the Codex Cloud settings tabs`,
      })),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = {
        key: `environments`,
        name: (0, G.jsx)(T, {
          id: `settings.codexCloud.environments`,
          defaultMessage: `Environments`,
          description: `Tab showing Codex Cloud environments`,
        }),
      }),
      (t[2] = c))
    : (c = t[2]);
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = [
        c,
        {
          key: `personal-vault`,
          name: (0, G.jsx)(T, {
            id: `personalVault.title`,
            defaultMessage: `Personal vault`,
            description: `Settings destination for the signed-in user's cloud environment secrets`,
          }),
        },
      ]),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === o
    ? (d = t[5])
    : ((d = (e) =>
        void o(e === `environments` ? `/settings/codex-cloud` : `/settings/codex-cloud?tab=personal-vault`)),
      (t[4] = o),
      (t[5] = d));
  let f;
  t[6] !== i || t[7] !== s || t[8] !== d
    ? ((f = (0, G.jsx)(j, { ariaLabel: s, selectedKey: i, tabs: u, variant: `toolbar`, onSelect: d })),
      (t[6] = i),
      (t[7] = s),
      (t[8] = d),
      (t[9] = f))
    : (f = t[9]);
  let p = r == null ? null : n,
    m;
  return (
    t[10] !== r || t[11] !== f || t[12] !== p
      ? ((m = (0, G.jsx)(N, { layout: `tabs`, search: r, navigation: f, children: p })),
        (t[10] = r),
        (t[11] = f),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = s()), u(), a(), k(), M(), (G = n()));
  }))();
}
function q(e) {
  let n = (0, J.c)(36),
    {
      signedIn: r,
      filter: i,
      searchQuery: a,
      importDisabled: o,
      onSearchQueryChange: s,
      onFilterChange: c,
      onImport: l,
      onAdd: u,
    } = e,
    f = i === void 0 ? `all` : i,
    p = a === void 0 ? `` : a,
    m = o === void 0 || o,
    h = b(),
    v;
  n[0] !== h || n[1] !== s || n[2] !== p || n[3] !== r
    ? ((v = r
        ? {
            id: `personal-vault-search`,
            inputRole: `searchbox`,
            label: h.formatMessage({
              id: `personalVault.search`,
              defaultMessage: `Search personal vault`,
              description: `Search personal vault entries by key`,
            }),
            placeholder: h.formatMessage({
              id: `personalVault.searchPlaceholder`,
              defaultMessage: `Search`,
              description: `Placeholder for searching personal vault keys`,
            }),
            searchQuery: p,
            onSearchQueryChange: (e) => s?.(e),
            disabled: s == null,
          }
        : null),
      (n[0] = h),
      (n[1] = s),
      (n[2] = p),
      (n[3] = r),
      (n[4] = v))
    : (v = n[4]);
  let x;
  n[5] === h
    ? (x = n[6])
    : ((x = h.formatMessage({
        id: `personalVault.filters`,
        defaultMessage: `Vault entry type`,
        description: `Accessible label for filters in the personal vault`,
      })),
      (n[5] = h),
      (n[6] = x));
  let C = c == null,
    E = X[f],
    D;
  n[7] === E ? (D = n[8]) : ((D = (0, Y.jsx)(T, { ...E })), (n[7] = E), (n[8] = D));
  let O;
  n[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = (0, Y.jsx)(_, {})), (n[9] = O)) : (O = n[9]);
  let k;
  n[10] !== x || n[11] !== C || n[12] !== D
    ? ((k = (0, Y.jsxs)(d, {
        "aria-label": x,
        disabled: C,
        color: `outline`,
        size: `toolbar`,
        children: [D, O],
      })),
      (n[10] = x),
      (n[11] = C),
      (n[12] = D),
      (n[13] = k))
    : (k = n[13]);
  let A;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = [`all`, `not_sensitive`, `sensitive`]), (n[14] = A))
    : (A = n[14]);
  let j;
  n[15] === c
    ? (j = n[16])
    : ((j = A.map((e) =>
        (0, Y.jsx)(
          S.RadioItem,
          { value: e, onSelect: () => c?.(e), children: (0, Y.jsx)(T, { ...X[e] }) },
          e,
        ),
      )),
      (n[15] = c),
      (n[16] = j));
  let M;
  n[17] !== f || n[18] !== j
    ? ((M = (0, Y.jsx)(S.RadioGroup, { value: f, children: j })), (n[17] = f), (n[18] = j), (n[19] = M))
    : (M = n[19]);
  let N;
  n[20] !== k || n[21] !== M
    ? ((N = (0, Y.jsx)(w, { triggerButton: k, children: M })), (n[20] = k), (n[21] = M), (n[22] = N))
    : (N = n[22]);
  let P;
  n[23] !== m || n[24] !== l
    ? ((P =
        g?.localPersonalSecrets == null
          ? null
          : (0, Y.jsx)(d, {
              color: `secondary`,
              size: `toolbar`,
              disabled: m || l == null,
              onClick: l,
              children: (0, Y.jsx)(T, {
                id: `personalVault.importAction`,
                defaultMessage: `Import`,
                description: `Open the dialog for importing local environment variables into the personal vault`,
              }),
            })),
      (n[23] = m),
      (n[24] = l),
      (n[25] = P))
    : (P = n[25]);
  let F = u == null,
    I,
    L;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Y.jsx)(t, { asset: y })),
      (L = (0, Y.jsx)(T, {
        id: `personalVault.addEntry`,
        defaultMessage: `Add`,
        description: `Open the form for adding a personal vault entry`,
      })),
      (n[26] = I),
      (n[27] = L))
    : ((I = n[26]), (L = n[27]));
  let R;
  n[28] !== u || n[29] !== F
    ? ((R = (0, Y.jsxs)(d, { color: `primary`, disabled: F, size: `toolbar`, onClick: u, children: [I, L] })),
      (n[28] = u),
      (n[29] = F),
      (n[30] = R))
    : (R = n[30]);
  let z;
  return (
    n[31] !== N || n[32] !== P || n[33] !== R || n[34] !== v
      ? ((z = (0, Y.jsxs)(U, { selectedTab: `personal-vault`, search: v, children: [N, P, R] })),
        (n[31] = N),
        (n[32] = P),
        (n[33] = R),
        (n[34] = v),
        (n[35] = z))
      : (z = n[35]),
    z
  );
}
var J, Y, X;
function Z() {
  return (Z = e(() => {
    ((J = s()),
      C(),
      u(),
      p(),
      h(),
      o(),
      c(),
      m(),
      K(),
      (Y = n()),
      (X = f({
        all: {
          id: `personalVault.filterAll`,
          defaultMessage: `All types`,
          description: `Show all personal vault entries`,
        },
        not_sensitive: {
          id: `personalVault.filterVariables`,
          defaultMessage: `Environment Variables`,
          description: `Show only ordinary environment variables in the personal vault`,
        },
        sensitive: {
          id: `personalVault.networkSecrets`,
          defaultMessage: `Network secrets`,
          description: `Personal vault entries substituted by the network proxy`,
        },
      })));
  }))();
}
export { R as a, L as c, K as i, Z as n, H as o, U as r, P as s, q as t };
//# sourceMappingURL=toolbar-da8b436f1d67.js.map
