import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  ADt as r,
  AO as i,
  CO as a,
  Ext as o,
  IDt as s,
  Kat as c,
  Mz as l,
  NV as u,
  Nz as d,
  TJ as f,
  TO as p,
  VDt as m,
  _Mt as h,
  _xt as g,
  cz as _,
  eZ as v,
  gMt as y,
  jDt as b,
  qat as x,
  sz as S,
  t3 as C,
  vzt as w,
  xMt as T,
} from "./app-shared-bbfeca5e5737.js";
import { _F as E, co as D, eF as O, hF as k, lo as A, tF as j } from "./app-initial-5851df3f6cb1.js";
import { n as M, t as N } from "./cloud-settings-toolbar-4cc3387176b2.js";
function P(e) {
  let t = (0, F.c)(22),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ selectedTab: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, I.jsx)(O, { slug: `codex-cloud` })), (t[3] = i))
    : (i = t[3]);
  let a = r !== `environments` && `invisible`,
    o;
  t[4] === a ? (o = t[5]) : ((o = y(`col-start-1 row-start-1`, a)), (t[4] = a), (t[5] = o));
  let c = r !== `environments`,
    l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, I.jsx)(s, {
        id: `settings.codexCloud.description`,
        defaultMessage: `Set up cloud environments with the repositories, tools, and settings Codex needs to work on your projects`,
        description: `Purpose of Codex Cloud environments, which configure the repositories, tools, and settings available to Codex`,
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== o || t[8] !== c
    ? ((u = (0, I.jsx)(`div`, { className: o, "aria-hidden": c, children: l })),
      (t[7] = o),
      (t[8] = c),
      (t[9] = u))
    : (u = t[9]);
  let d = r !== `personal-vault` && `invisible`,
    f;
  t[10] === d ? (f = t[11]) : ((f = y(`col-start-1 row-start-1`, d)), (t[10] = d), (t[11] = f));
  let p = r !== `personal-vault`,
    m;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, I.jsx)(s, {
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
      ? ((_ = (0, I.jsx)(k, { ...n, title: i, subtitle: g })), (t[19] = n), (t[20] = g), (t[21] = _))
      : (_ = t[21]),
    _
  );
}
var F, I;
function L() {
  return (L = e(() => {
    ((F = w()), h(), b(), E(), j(), (I = T()));
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
      ? ((c = (0, V.jsxs)(S, {
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
    ((B = w()), _(), (V = T()));
  }))();
}
function U(e) {
  let t = (0, W.c)(14),
    { children: n, search: r, selectedTab: i } = e,
    a = m(),
    c = o(),
    l;
  t[0] === a
    ? (l = t[1])
    : ((l = a.formatMessage({
        id: `settings.codexCloud.tabs`,
        defaultMessage: `Codex Cloud settings`,
        description: `Accessible label for the Codex Cloud settings tabs`,
      })),
      (t[0] = a),
      (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = {
        key: `environments`,
        name: (0, G.jsx)(s, {
          id: `settings.codexCloud.environments`,
          defaultMessage: `Environments`,
          description: `Tab showing Codex Cloud environments`,
        }),
      }),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = [
        u,
        {
          key: `personal-vault`,
          name: (0, G.jsx)(s, {
            id: `personalVault.title`,
            defaultMessage: `Personal vault`,
            description: `Settings destination for the signed-in user's cloud environment secrets`,
          }),
        },
      ]),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] === c
    ? (f = t[5])
    : ((f = (e) =>
        void c(e === `environments` ? `/settings/codex-cloud` : `/settings/codex-cloud?tab=personal-vault`)),
      (t[4] = c),
      (t[5] = f));
  let p;
  t[6] !== i || t[7] !== l || t[8] !== f
    ? ((p = (0, G.jsx)(D, { ariaLabel: l, selectedKey: i, tabs: d, variant: `toolbar`, onSelect: f })),
      (t[6] = i),
      (t[7] = l),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let h = r == null ? null : n,
    g;
  return (
    t[10] !== r || t[11] !== p || t[12] !== h
      ? ((g = (0, G.jsx)(N, { layout: `tabs`, search: r, navigation: p, children: h })),
        (t[10] = r),
        (t[11] = p),
        (t[12] = h),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = w()), b(), g(), A(), M(), (G = T()));
  }))();
}
function q(e) {
  let n = (0, J.c)(36),
    {
      signedIn: r,
      filter: i,
      searchQuery: o,
      importDisabled: d,
      onSearchQueryChange: f,
      onFilterChange: h,
      onImport: g,
      onAdd: _,
    } = e,
    y = i === void 0 ? `all` : i,
    b = o === void 0 ? `` : o,
    x = d === void 0 || d,
    S = m(),
    C;
  n[0] !== S || n[1] !== f || n[2] !== b || n[3] !== r
    ? ((C = r
        ? {
            id: `personal-vault-search`,
            inputRole: `searchbox`,
            label: S.formatMessage({
              id: `personalVault.search`,
              defaultMessage: `Search personal vault`,
              description: `Search personal vault entries by key`,
            }),
            placeholder: S.formatMessage({
              id: `personalVault.searchPlaceholder`,
              defaultMessage: `Search`,
              description: `Placeholder for searching personal vault keys`,
            }),
            searchQuery: b,
            onSearchQueryChange: (e) => f?.(e),
            disabled: f == null,
          }
        : null),
      (n[0] = S),
      (n[1] = f),
      (n[2] = b),
      (n[3] = r),
      (n[4] = C))
    : (C = n[4]);
  let w;
  n[5] === S
    ? (w = n[6])
    : ((w = S.formatMessage({
        id: `personalVault.filters`,
        defaultMessage: `Vault entry type`,
        description: `Accessible label for filters in the personal vault`,
      })),
      (n[5] = S),
      (n[6] = w));
  let T = h == null,
    E = X[y],
    D;
  n[7] === E ? (D = n[8]) : ((D = (0, Y.jsx)(s, { ...E })), (n[7] = E), (n[8] = D));
  let O;
  n[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = (0, Y.jsx)(u, {})), (n[9] = O)) : (O = n[9]);
  let k;
  n[10] !== w || n[11] !== T || n[12] !== D
    ? ((k = (0, Y.jsxs)(t, {
        "aria-label": w,
        disabled: T,
        color: `outline`,
        size: `toolbar`,
        children: [D, O],
      })),
      (n[10] = w),
      (n[11] = T),
      (n[12] = D),
      (n[13] = k))
    : (k = n[13]);
  let A;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = [`all`, `not_sensitive`, `sensitive`]), (n[14] = A))
    : (A = n[14]);
  let j;
  n[15] === h
    ? (j = n[16])
    : ((j = A.map((e) =>
        (0, Y.jsx)(
          p.RadioItem,
          { value: e, onSelect: () => h?.(e), children: (0, Y.jsx)(s, { ...X[e] }) },
          e,
        ),
      )),
      (n[15] = h),
      (n[16] = j));
  let M;
  n[17] !== y || n[18] !== j
    ? ((M = (0, Y.jsx)(p.RadioGroup, { value: y, children: j })), (n[17] = y), (n[18] = j), (n[19] = M))
    : (M = n[19]);
  let N;
  n[20] !== k || n[21] !== M
    ? ((N = (0, Y.jsx)(a, { triggerButton: k, children: M })), (n[20] = k), (n[21] = M), (n[22] = N))
    : (N = n[22]);
  let P;
  n[23] !== x || n[24] !== g
    ? ((P =
        c?.localPersonalSecrets == null
          ? null
          : (0, Y.jsx)(t, {
              color: `secondary`,
              size: `toolbar`,
              disabled: x || g == null,
              onClick: g,
              children: (0, Y.jsx)(s, {
                id: `personalVault.importAction`,
                defaultMessage: `Import`,
                description: `Open the dialog for importing local environment variables into the personal vault`,
              }),
            })),
      (n[23] = x),
      (n[24] = g),
      (n[25] = P))
    : (P = n[25]);
  let F = _ == null,
    I,
    L;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Y.jsx)(l, { asset: v })),
      (L = (0, Y.jsx)(s, {
        id: `personalVault.addEntry`,
        defaultMessage: `Add`,
        description: `Open the form for adding a personal vault entry`,
      })),
      (n[26] = I),
      (n[27] = L))
    : ((I = n[26]), (L = n[27]));
  let R;
  n[28] !== _ || n[29] !== F
    ? ((R = (0, Y.jsxs)(t, { color: `primary`, disabled: F, size: `toolbar`, onClick: _, children: [I, L] })),
      (n[28] = _),
      (n[29] = F),
      (n[30] = R))
    : (R = n[30]);
  let z;
  return (
    n[31] !== N || n[32] !== P || n[33] !== R || n[34] !== C
      ? ((z = (0, Y.jsxs)(U, { selectedTab: `personal-vault`, search: C, children: [N, P, R] })),
        (n[31] = N),
        (n[32] = P),
        (n[33] = R),
        (n[34] = C),
        (n[35] = z))
      : (z = n[35]),
    z
  );
}
var J, Y, X;
function Z() {
  return (Z = e(() => {
    ((J = w()),
      n(),
      b(),
      C(),
      i(),
      d(),
      f(),
      x(),
      K(),
      (Y = T()),
      (X = r({
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
//# sourceMappingURL=toolbar-a0209b4d281a.js.map
