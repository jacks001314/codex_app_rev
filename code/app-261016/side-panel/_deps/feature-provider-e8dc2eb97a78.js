import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $O as n,
  $St as r,
  BY as i,
  Bst as a,
  DB as o,
  FBt as s,
  Fb as c,
  JE as l,
  LNt as u,
  OB as d,
  PBt as f,
  Pb as p,
  SCt as m,
  TCt as h,
  XOt as g,
  Y3 as _,
  YOt as v,
  Z3 as y,
  ZSt as b,
  _D as x,
  ast as S,
  e6 as C,
  ek as w,
  fD as T,
  iCt as E,
  ist as D,
  mCt as O,
  mD as k,
  nB as A,
  nCt as j,
  okt as M,
  pD as N,
  qE as P,
  rB as F,
  tCt as I,
  tkt as L,
  zY as R,
  zst as z,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BVr as ee,
  Dor as te,
  Eor as ne,
  Lqn as re,
  MKr as ie,
  MOr as B,
  Q2n as ae,
  Z2n as oe,
  lBr as se,
  la as ce,
  mQn as le,
  oa as ue,
  uBr as de,
  zOr as V,
} from "./app-initial-ad16eaadf81f.js";
import { Jc as H, qc as fe } from "./app-primary-3e00728c2a4c.js";
import { n as pe } from "./gate-c0654fbd7860.js";
function me(e, t, n) {
  let r = e.entries.slice(0, e.index + 1);
  return (ge(r.at(-1), t) || r.push(t), ge(r.at(-1), n) || r.push(n), { entries: r, index: r.length - 1 });
}
function he(e, t) {
  let n = e.index + t,
    r = e.entries[n];
  return r == null ? null : { history: { entries: e.entries, index: n }, location: r };
}
function ge(e, t) {
  return (
    e?.path === t.path && e.position.line === t.position.line && e.position.character === t.position.character
  );
}
var U;
function _e() {
  return (_e = e(() => {
    (b(),
      V(),
      (U = m(B, (e) => ({ entries: [], index: -1 }), void 0, {
        excludeFieldsFromKey: [`contents`, `languageId`, `path`],
      })));
  }))();
}
function ve(e, t) {
  let n = Number.parseInt(e.dataset.char ?? ``, 10),
    r = fe(t);
  return Number.isInteger(n) && r != null ? { element: e, position: { character: n, line: r } } : null;
}
function ye(e, t, n, r, i = 0) {
  K(t);
  let { contents: a } = n;
  t.hoverRequestVersion += 1;
  let { hoverRequestVersion: o } = t;
  t.hoverTimeout = {
    element: r.element,
    timeout: setTimeout(() => {
      ((t.hoverTimeout = null),
        e.set(t.hoverTarget$, { ...r, contents: a, requestVersion: o, retryCount: i }));
    }, we),
  };
}
function be(e, t) {
  K(t);
  let n = e.get(t.hoverTarget$);
  n != null && (delete n.element.dataset.languageSymbolHighlight, e.set(t.hoverTarget$, null));
}
function xe(e, t) {
  t ? (e.dataset.languageSymbolHighlight = ``) : delete e.dataset.languageSymbolHighlight;
}
function W(e, t, n) {
  (delete n.dataset.languageSymbolHighlight,
    t.hoverTimeout?.element === n && K(t),
    e.get(t.hoverTarget$)?.element === n && e.set(t.hoverTarget$, null));
}
async function Se(e, t, n, r, i, a) {
  let o = Symbol();
  ((t.locationRequest = o), e.set(t.locationList$, null));
  let s = (await D.lsp?.locations({ ...n, kind: r, position: i.position })) ?? [];
  t.locationRequest === o &&
    ((t.locationRequest = null),
    s.length === 1 && s[0] != null
      ? Ce(e, n, i, s[0], a)
      : s.length > 1 && e.set(t.locationList$, { kind: r, locations: s, target: i }));
}
function Ce(e, t, n, r, i) {
  (e.set(U, t, (e) =>
    me(e, { path: t.path, position: n.position }, { path: r.path, position: r.range.start }),
  ),
    i(r));
}
function G(e, t) {
  ((t.locationRequest = null), e.set(t.locationList$, null));
}
function K(e) {
  e.hoverTimeout != null && (clearTimeout(e.hoverTimeout.timeout), (e.hoverTimeout = null));
}
var we, Te, Ee, De;
function q() {
  return (q = e(() => {
    (b(),
      S(),
      V(),
      a(),
      _e(),
      (we = 300),
      (Te = h(
        B,
        (e, { signal: t }) => ({
          contextTarget$: t(null),
          hoverRequestVersion: 0,
          hoverTarget$: t(null),
          hoverTimeout: null,
          locationList$: t(null),
          locationRequest: null,
        }),
        { autoDispose: !0 },
      )),
      (Ee = O(
        B,
        (e) => ({
          enabled: D?.lsp != null,
          queryFn: async () =>
            (await D?.lsp?.capabilities({
              hostId: e.hostId,
              languageId: e.languageId,
              path: e.path,
              workspaceRoot: e.workspaceRoot,
            })) ?? null,
          queryKey: [`review-file-language-capabilities`, e.hostId, e.languageId, e.workspaceRoot ?? e.path],
          staleTime: z.FIVE_SECONDS,
        }),
        { excludeFieldsFromKey: [`contents`] },
      )),
      (De = O(
        B,
        ({ contentsHash: e, languageFile: t, surfaceId: n }, { get: r }) => {
          let i = r(r(Te, n).hoverTarget$);
          return {
            enabled: D?.lsp != null && i != null && i.contents === t.contents,
            queryFn: async () =>
              i == null || D?.lsp == null ? null : D.lsp.hover({ ...t, position: i.position }),
            queryKey: [
              `review-file-language-hover`,
              t.hostId,
              t.languageId,
              t.path,
              t.workspaceRoot,
              e,
              i?.requestVersion,
              i?.position.line,
              i?.position.character,
            ],
            staleTime: z.FIVE_SECONDS,
          };
        },
        { key: ({ contentsHash: e, surfaceId: t }) => `${t}\0${e}` },
      )));
  }))();
}
function Oe(e) {
  return Ae.filter(({ kind: e }) => e === `definition` || e === `references`).map(
    ({ kind: t, message: n }) => ({ id: t, message: n, enabled: !1, tooltipMessage: e }),
  );
}
function ke({ scope: e, surface: t, languageFile: n, locationKinds: r, onOpenLocation: i }) {
  let a = e.get(t.contextTarget$);
  return a == null
    ? []
    : Ae.filter(({ kind: e }) => r.includes(e)).map(({ kind: r, message: o }) => ({
        id: r,
        message: o,
        onSelect: () => {
          e.get(t.contextTarget$) === a &&
            (e.set(t.contextTarget$, null), W(e, t, a.element), Se(e, t, n, r, a, i).catch(() => {}));
        },
      }));
}
var J, Ae;
function je() {
  return (je = e(() => {
    (g(),
      q(),
      (J = v({
        goToDefinition: {
          id: `review.fileLanguage.contextMenu.goToDefinition`,
          defaultMessage: `Go to Definition`,
          description: `Context menu action for opening a symbol definition in the file viewer`,
        },
        goToImplementations: {
          id: `review.fileLanguage.contextMenu.goToImplementations`,
          defaultMessage: `Go to Implementations`,
          description: `Context menu action for opening symbol implementations in the file viewer`,
        },
        goToReferences: {
          id: `review.fileLanguage.contextMenu.goToReferences`,
          defaultMessage: `Go to References`,
          description: `Context menu action for opening symbol references in the file viewer`,
        },
        goToTypeDefinition: {
          id: `review.fileLanguage.contextMenu.goToTypeDefinition`,
          defaultMessage: `Go to Type Definition`,
          description: `Context menu action for opening a symbol type definition in the file viewer`,
        },
      })),
      (Ae = [
        { kind: `definition`, message: J.goToDefinition },
        { kind: `typeDefinition`, message: J.goToTypeDefinition },
        { kind: `implementation`, message: J.goToImplementations },
        { kind: `references`, message: J.goToReferences },
      ]));
  }))();
}
function Me(e) {
  let t = (0, Ne.c)(10),
    {
      children: i,
      getFallbackItems: a,
      languageFile: o,
      locationKinds: s,
      onOpenLocation: c,
      surface: l,
    } = e,
    u = r(B),
    d;
  t[0] !== a || t[1] !== o || t[2] !== s || t[3] !== c || t[4] !== u || t[5] !== l
    ? ((d = () => {
        let e = ke({ scope: u, surface: l, languageFile: o, locationKinds: s, onOpenLocation: c });
        return e.length > 0 ? e : (a?.() ?? []);
      }),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s),
      (t[3] = c),
      (t[4] = u),
      (t[5] = l),
      (t[6] = d))
    : (d = t[6]);
  let f;
  return (
    t[7] !== i || t[8] !== d
      ? ((f = (0, Pe.jsx)(n, { getItems: d, children: i })), (t[7] = i), (t[8] = d), (t[9] = f))
      : (f = t[9]),
    f
  );
}
var Ne, Pe;
function Fe() {
  return (Fe = e(() => {
    ((Ne = f()), b(), w(), V(), je(), (Pe = u()));
  }))();
}
function Ie(e) {
  let t = (0, Le.c)(8),
    { hover: n, language: r } = e,
    i;
  t[0] !== n.signature || t[1] !== r
    ? ((i = (0, Re.jsx)(p, {
        content: n.signature,
        language: r,
        shouldWrapCode: !0,
        showActionBar: !1,
        variant: `hover`,
      })),
      (t[0] = n.signature),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === n.documentation
    ? (a = t[4])
    : ((a =
        n.documentation == null
          ? null
          : (0, Re.jsx)(ce, {
              className: `text-secondary`,
              externalResourcePolicy: `restricted`,
              textStyle: { kind: `small` },
              children: n.documentation,
            })),
      (t[3] = n.documentation),
      (t[4] = a));
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = (0, Re.jsxs)(`div`, { className: `flex flex-col gap-2 select-text`, children: [i, a] })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var Le, Re;
function ze() {
  return (ze = e(() => {
    ((Le = f()), c(), ue(), (Re = u()));
  }))();
}
function Be(e) {
  let t = (0, We.c)(6),
    { languageFile: n, onOpenLocation: r, surface: i } = e,
    a = E(i.locationList$);
  if (a == null) return null;
  let o = `${a.kind}:${a.target.position.line}:${a.target.position.character}`,
    s;
  return (
    t[0] !== n || t[1] !== a || t[2] !== r || t[3] !== i || t[4] !== o
      ? ((s = (0, Y.jsx)(Ve, { languageFile: n, locationList: a, onOpenLocation: r, surface: i }, o)),
        (t[0] = n),
        (t[1] = a),
        (t[2] = r),
        (t[3] = i),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Ve(e) {
  let t = (0, We.c)(71),
    { languageFile: n, locationList: a, onOpenLocation: s, surface: c } = e,
    l = r(B),
    u = M(),
    [d, f] = (0, Ge.useState)(100),
    p,
    m,
    h,
    g,
    v,
    y,
    b,
    x,
    S;
  t[0] !== u ||
  t[1] !== n.workspaceRoot ||
  t[2] !== a.kind ||
  t[3] !== a.locations.length ||
  t[4] !== a.target.element ||
  t[5] !== l ||
  t[6] !== c
    ? ((b = Ue(a.kind)),
      (x = { count: a.locations.length }),
      (S = n.workspaceRoot ?? void 0),
      (m = T),
      (g = !0),
      t[16] !== l || t[17] !== c
        ? ((v = (e) => {
            e || G(l, c);
          }),
          (t[16] = l),
          (t[17] = c),
          (t[18] = v))
        : (v = t[18]),
      t[19] === a.target.element
        ? (y = t[20])
        : ((y = (0, Y.jsx)(N, { virtualRef: { current: a.target.element } })),
          (t[19] = a.target.element),
          (t[20] = y)),
      (p = k),
      (h = u.formatMessage(b, x)),
      (t[0] = u),
      (t[1] = n.workspaceRoot),
      (t[2] = a.kind),
      (t[3] = a.locations.length),
      (t[4] = a.target.element),
      (t[5] = l),
      (t[6] = c),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S))
    : ((p = t[7]),
      (m = t[8]),
      (h = t[9]),
      (g = t[10]),
      (v = t[11]),
      (y = t[12]),
      (b = t[13]),
      (x = t[14]),
      (S = t[15]));
  let C;
  t[21] !== b || t[22] !== x
    ? ((C = (0, Y.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, Y.jsx)(L, { ...b, values: x }),
      })),
      (t[21] = b),
      (t[22] = x),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] === u
    ? (w = t[25])
    : ((w = u.formatMessage({
        id: `review.fileLanguage.locations.close`,
        defaultMessage: `Close locations`,
        description: `Accessible label for closing the file viewer symbol locations card`,
      })),
      (t[24] = u),
      (t[25] = w));
  let E;
  t[26] !== l || t[27] !== c
    ? ((E = () => {
        G(l, c);
      }),
      (t[26] = l),
      (t[27] = c),
      (t[28] = E))
    : (E = t[28]);
  let D;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Y.jsx)(o, { asset: i })), (t[29] = D))
    : (D = t[29]);
  let O;
  t[30] !== w || t[31] !== E
    ? ((O = (0, Y.jsx)(_, {
        "aria-label": w,
        color: `ghostSecondary`,
        onClick: E,
        size: `icon`,
        children: D,
      })),
      (t[30] = w),
      (t[31] = E),
      (t[32] = O))
    : (O = t[32]);
  let A;
  t[33] !== C || t[34] !== O
    ? ((A = (0, Y.jsxs)(`div`, {
        className: `flex items-center justify-between border-b border-default px-3 py-2`,
        children: [C, O],
      })),
      (t[33] = C),
      (t[34] = O),
      (t[35] = A))
    : (A = t[35]);
  let j;
  if (
    t[36] !== u ||
    t[37] !== n ||
    t[38] !== a.locations ||
    t[39] !== a.target ||
    t[40] !== s ||
    t[41] !== l ||
    t[42] !== c ||
    t[43] !== d ||
    t[44] !== S
  ) {
    let e;
    (t[46] !== u ||
    t[47] !== n ||
    t[48] !== a.target ||
    t[49] !== s ||
    t[50] !== l ||
    t[51] !== c ||
    t[52] !== S
      ? ((e = (e) => {
          let t = ne(e.path, S),
            r = e.range.start.line + 1,
            i = e.range.start.character + 1;
          return (0, Y.jsxs)(
            `button`,
            {
              "aria-label": u.formatMessage(
                {
                  id: `review.fileLanguage.locations.open`,
                  defaultMessage: `Open {path}, line {line}, column {column}`,
                  description: `Accessible label for a location in the file viewer symbol locations card`,
                },
                { column: i, line: r, path: t },
              ),
              className: `flex cursor-interaction items-center gap-3 rounded-lg px-2 py-1.5 text-start text-sm hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover focus:outline-none`,
              onClick: () => {
                (G(l, c), Ce(l, n, a.target, e, s));
              },
              type: `button`,
              children: [
                (0, Y.jsx)(P, { className: `flex-1 font-mono text-default`, text: t }),
                (0, Y.jsx)(`span`, {
                  className: `shrink-0 font-mono text-xs text-secondary`,
                  children: (0, Y.jsx)(L, {
                    id: `review.fileLanguage.locations.lineAndColumn`,
                    defaultMessage: `{line}:{column}`,
                    description: `Line and column shown for a symbol location in the file viewer`,
                    values: { column: i, line: r },
                  }),
                }),
              ],
            },
            `${e.path}:${r}:${i}`,
          );
        }),
        (t[46] = u),
        (t[47] = n),
        (t[48] = a.target),
        (t[49] = s),
        (t[50] = l),
        (t[51] = c),
        (t[52] = S),
        (t[53] = e))
      : (e = t[53]),
      (j = a.locations.slice(0, d).map(e)),
      (t[36] = u),
      (t[37] = n),
      (t[38] = a.locations),
      (t[39] = a.target),
      (t[40] = s),
      (t[41] = l),
      (t[42] = c),
      (t[43] = d),
      (t[44] = S),
      (t[45] = j));
  } else j = t[45];
  let F;
  t[54] !== a.locations.length || t[55] !== d
    ? ((F =
        d < a.locations.length
          ? (0, Y.jsx)(_, {
              color: `ghostSecondary`,
              onClick: () => {
                f(He);
              },
              children: (0, Y.jsx)(L, {
                id: `review.fileLanguage.locations.loadMore`,
                defaultMessage: `Load more locations`,
                description: `Button to reveal the next page of symbol references or definitions in the file viewer`,
              }),
            })
          : null),
      (t[54] = a.locations.length),
      (t[55] = d),
      (t[56] = F))
    : (F = t[56]);
  let I;
  t[57] !== j || t[58] !== F
    ? ((I = (0, Y.jsxs)(`div`, {
        className: `flex max-h-72 flex-col overflow-y-auto p-1`,
        children: [j, F],
      })),
      (t[57] = j),
      (t[58] = F),
      (t[59] = I))
    : (I = t[59]);
  let R;
  t[60] !== p || t[61] !== h || t[62] !== A || t[63] !== I
    ? ((R = (0, Y.jsxs)(p, {
        "aria-label": h,
        align: `start`,
        className: `overflow-hidden`,
        disablePadding: !0,
        side: `top`,
        size: `large`,
        children: [A, I],
      })),
      (t[60] = p),
      (t[61] = h),
      (t[62] = A),
      (t[63] = I),
      (t[64] = R))
    : (R = t[64]);
  let z;
  return (
    t[65] !== m || t[66] !== R || t[67] !== g || t[68] !== v || t[69] !== y
      ? ((z = (0, Y.jsxs)(m, { open: g, onOpenChange: v, children: [y, R] })),
        (t[65] = m),
        (t[66] = R),
        (t[67] = g),
        (t[68] = v),
        (t[69] = y),
        (t[70] = z))
      : (z = t[70]),
    z
  );
}
function He(e) {
  return e + 100;
}
function Ue(e) {
  switch (e) {
    case `definition`:
      return X.definitions;
    case `implementation`:
      return X.implementations;
    case `references`:
      return X.references;
    case `typeDefinition`:
      return X.typeDefinitions;
  }
}
var We, Ge, Y, X;
function Ke() {
  return (Ke = e(() => {
    ((We = f()),
      R(),
      b(),
      (Ge = s()),
      g(),
      y(),
      d(),
      l(),
      x(),
      te(),
      V(),
      q(),
      (Y = u()),
      (X = v({
        definitions: {
          id: `review.fileLanguage.locations.definitions`,
          defaultMessage: `{count, plural, one {# definition} other {# definitions}}`,
          description: `Title for the file viewer card listing symbol definitions`,
        },
        implementations: {
          id: `review.fileLanguage.locations.implementations`,
          defaultMessage: `{count, plural, one {# implementation} other {# implementations}}`,
          description: `Title for the file viewer card listing symbol implementations`,
        },
        references: {
          id: `review.fileLanguage.locations.references`,
          defaultMessage: `{count, plural, one {# reference} other {# references}}`,
          description: `Title for the file viewer card listing symbol references`,
        },
        typeDefinitions: {
          id: `review.fileLanguage.locations.typeDefinitions`,
          defaultMessage: `{count, plural, one {# type definition} other {# type definitions}}`,
          description: `Title for the file viewer card listing symbol type definitions`,
        },
      })));
  }))();
}
function qe(e) {
  let t = (0, Ze.c)(46),
    {
      definitionNavigationEnabled: n,
      getTarget: i,
      enabled: a,
      isActive: o,
      languageFile: s,
      onOpenLocation: c,
      panelId: l,
      surface: u,
      surfaceRef: d,
    } = e,
    f = i === void 0 ? ve : i,
    p = r(B),
    m = j(U, s),
    h;
  t[0] !== n || t[1] !== f || t[2] !== s || t[3] !== c || t[4] !== p || t[5] !== u || t[6] !== d
    ? ((h = function (e) {
        if (!n || c == null || d.current == null) return !1;
        let t = Ye(d.current, e),
          r = t?.focusNode instanceof HTMLElement ? t.focusNode : (t?.focusNode?.parentElement ?? null),
          i = r?.closest(`[data-char]`),
          a = r?.closest(`[data-line]`);
        if (i == null || a == null || !Z(i, d.current)) return !1;
        let o = f(i, a);
        return o != null && (W(p, u, o.element), Se(p, u, s, `definition`, o, c).catch(Je), !0);
      }),
      (t[0] = n),
      (t[1] = f),
      (t[2] = s),
      (t[3] = c),
      (t[4] = p),
      (t[5] = u),
      (t[6] = d),
      (t[7] = h))
    : (h = t[7]);
  let g = h,
    _;
  t[8] !== s || t[9] !== c || t[10] !== p
    ? ((_ = function (e) {
        if (c == null) return;
        let t = he(p.get(U, s), e);
        t != null &&
          (p.set(U, s, t.history),
          c({ path: t.location.path, range: { end: t.location.position, start: t.location.position } }));
      }),
      (t[8] = s),
      (t[9] = c),
      (t[10] = p),
      (t[11] = _))
    : (_ = t[11]);
  let v = _,
    y;
  t[12] !== o || t[13] !== l || t[14] !== d
    ? ((y = function (e) {
        if (!o) return !1;
        if (e?.originPanel != null) return l == null || e.originPanel === l;
        if (l == null) return !0;
        let t = d.current,
          n = t?.closest(`[role="tabpanel"]`);
        return (
          t != null &&
          (Z(document.activeElement, t) ||
            (n != null && document.activeElement === n) ||
            Z(H(document.activeElement)?.focusNode ?? null, t))
        );
      }),
      (t[12] = o),
      (t[13] = l),
      (t[14] = d),
      (t[15] = y))
    : (y = t[15]);
  let b = y,
    x;
  t[16] !== l || t[17] !== d
    ? ((x = function (e, t) {
        if (t?.originPanel != null || l == null) return !0;
        let n = d.current;
        if (n == null) return !1;
        let r = e.composedPath()[0] ?? e.target ?? document.activeElement,
          i = n.closest(`[role="tabpanel"]`);
        return (r instanceof Node && Z(r, n)) || (i != null && r === i) || Z(H(r)?.focusNode ?? null, n);
      }),
      (t[16] = l),
      (t[17] = d),
      (t[18] = x))
    : (x = t[18]);
  let S = x,
    C;
  t[19] === g
    ? (C = t[20])
    : ((C = () => {
        g(document.activeElement);
      }),
      (t[19] = g),
      (t[20] = C));
  let w;
  t[21] !== b || t[22] !== d
    ? ((w = (e) => {
        let t = d.current;
        return b(e) && t != null && Ye(t, document.activeElement) != null;
      }),
      (t[21] = b),
      (t[22] = d),
      (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] === g
    ? (T = t[25])
    : ((T = (e) => {
        let t = g(e.composedPath()[0] ?? e.target ?? document.activeElement);
        return (t && e.stopPropagation(), t);
      }),
      (t[24] = g),
      (t[25] = T));
  let E;
  (t[26] !== n || t[27] !== w || t[28] !== T
    ? ((E = { enabled: n, isActive: w, keyboardHandler: T }),
      (t[26] = n),
      (t[27] = w),
      (t[28] = T),
      (t[29] = E))
    : (E = t[29]),
    ae(`file.goToDefinition`, C, E));
  let D;
  t[30] === v
    ? (D = t[31])
    : ((D = () => {
        v(-1);
      }),
      (t[30] = v),
      (t[31] = D));
  let O = a && c != null && m.index > 0,
    k;
  t[32] === S ? (k = t[33]) : ((k = (e, t) => (S(e, t) ? void 0 : !1)), (t[32] = S), (t[33] = k));
  let A;
  (t[34] !== b || t[35] !== O || t[36] !== k
    ? ((A = { enabled: O, isActive: b, keyboardHandler: k }),
      (t[34] = b),
      (t[35] = O),
      (t[36] = k),
      (t[37] = A))
    : (A = t[37]),
    ae(`file.navigateBack`, D, A));
  let M;
  t[38] === v
    ? (M = t[39])
    : ((M = () => {
        v(1);
      }),
      (t[38] = v),
      (t[39] = M));
  let N = a && c != null && m.index < m.entries.length - 1,
    P;
  t[40] === S ? (P = t[41]) : ((P = (e, t) => (S(e, t) ? void 0 : !1)), (t[40] = S), (t[41] = P));
  let F;
  return (
    t[42] !== b || t[43] !== N || t[44] !== P
      ? ((F = { enabled: N, isActive: b, keyboardHandler: P }),
        (t[42] = b),
        (t[43] = N),
        (t[44] = P),
        (t[45] = F))
      : (F = t[45]),
    ae(`file.navigateForward`, M, F),
    null
  );
}
function Je() {}
function Z(e, t) {
  let n = e;
  for (; n != null;) {
    if (t.contains(n)) return !0;
    let e = n.getRootNode();
    n = e instanceof ShadowRoot ? e.host : null;
  }
  return !1;
}
function Ye(e, t) {
  let n = H(t);
  if (Xe(n, e)) return n;
  if (!(t instanceof Node) || (!Z(t, e) && t !== e.closest(`[role="tabpanel"]`))) return null;
  let r = e.querySelector(ie);
  if (r == null) return null;
  let i = H(r);
  return Xe(i, e) ? i : null;
}
function Xe(e, t) {
  let n = e?.focusNode,
    r = (n instanceof HTMLElement ? n : n?.parentElement)?.closest(`[data-char]`);
  return r?.closest(`[data-line]`) != null && Z(r, t);
}
var Ze;
function Qe() {
  return (Qe = e(() => {
    ((Ze = f()), ee(), b(), oe(), V(), q(), _e());
  }))();
}
function $e(e) {
  let t = (0, at.c)(11),
    {
      children: n,
      getFallbackContextMenuItems: r,
      getTarget: i,
      isActive: a,
      languageFile: o,
      onOpenLocation: s,
      panelId: c,
      withContextMenu: l,
    } = e,
    u = i === void 0 ? ve : i,
    d = a === void 0 || a,
    f = l !== void 0 && l,
    p = (0, Q.useId)(),
    m = j(de, `1932174607`) && d,
    h;
  return (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== u ||
    t[3] !== d ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== p ||
    t[8] !== m ||
    t[9] !== f
      ? ((h = (0, $.jsx)(et, {
          enabled: m,
          getFallbackContextMenuItems: r,
          getTarget: u,
          isActive: d,
          languageFile: o,
          onOpenLocation: s,
          panelId: c,
          surfaceId: p,
          withContextMenu: f,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = u),
        (t[3] = d),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c),
        (t[7] = p),
        (t[8] = m),
        (t[9] = f),
        (t[10] = h))
      : (h = t[10]),
    h
  );
}
function et(e) {
  let t = (0, at.c)(90),
    {
      children: n,
      enabled: i,
      getFallbackContextMenuItems: a,
      getTarget: o,
      isActive: s,
      languageFile: c,
      onOpenLocation: l,
      panelId: u,
      surfaceId: d,
      withContextMenu: f,
    } = e,
    p = r(B),
    m = I(Te, d),
    h = (0, Q.useRef)(null),
    g;
  t[0] !== p || t[1] !== m
    ? ((g = () => () => {
        (p.set(m.contextTarget$, null), be(p, m), G(p, m));
      }),
      (t[0] = p),
      (t[1] = m),
      (t[2] = g))
    : (g = t[2]);
  let _;
  (t[3] !== i ||
  t[4] !== o ||
  t[5] !== c.contents ||
  t[6] !== c.hostId ||
  t[7] !== c.languageId ||
  t[8] !== c.path ||
  t[9] !== c.workspaceRoot ||
  t[10] !== p ||
  t[11] !== m
    ? ((_ = [p, m, i, o, c.contents, c.path, c.hostId, c.languageId, c.workspaceRoot]),
      (t[3] = i),
      (t[4] = o),
      (t[5] = c.contents),
      (t[6] = c.hostId),
      (t[7] = c.languageId),
      (t[8] = c.path),
      (t[9] = c.workspaceRoot),
      (t[10] = p),
      (t[11] = m),
      (t[12] = _))
    : (_ = t[12]),
    (0, Q.useEffect)(g, _));
  let v;
  t[13] === i ? (v = t[14]) : ((v = { enabled: i }), (t[13] = i), (t[14] = v));
  let { data: y } = j(Ee, c, v),
    b = i && y?.hover === !0,
    x = i && (y === void 0 || b),
    S,
    C,
    w,
    T,
    E;
  if (
    t[15] !== y?.locationKinds ||
    t[16] !== n ||
    t[17] !== i ||
    t[18] !== o ||
    t[19] !== b ||
    t[20] !== x ||
    t[21] !== c ||
    t[22] !== l ||
    t[23] !== p ||
    t[24] !== m ||
    t[25] !== d
  ) {
    ((T = i ? (y?.locationKinds ?? []) : []),
      (C = l != null && T.includes(`definition`)),
      (S = l != null && T.length > 0));
    let e;
    t[31] !== c || t[32] !== l || t[33] !== p || t[34] !== m
      ? ((e = function (e, t) {
          l != null && (W(p, m, t.element), Se(p, m, c, e, t, l).catch(tt));
        }),
        (t[31] = c),
        (t[32] = l),
        (t[33] = p),
        (t[34] = m),
        (t[35] = e))
      : (e = t[35]);
    let r = e,
      a = function (e, t) {
        if (!C || !(t.metaKey || t.ctrlKey) || (`side` in e && e.side === `deletions`)) return;
        let n = e.tokenElement.closest(`[data-line]`),
          i = n == null ? null : o(e.tokenElement, n);
        i != null && (t.preventDefault(), r(`definition`, i));
      },
      s;
    t[36] !== o || t[37] !== b || t[38] !== c || t[39] !== p || t[40] !== m || t[41] !== d
      ? ((s = function (e) {
          if (`side` in e && e.side === `deletions`) return;
          let t = e.tokenElement.closest(`[data-line]`),
            n = t == null ? null : o(e.tokenElement, t);
          if (n == null) return;
          let r = p.get(m.hoverTarget$);
          if (
            r?.contents === c.contents &&
            r.position.line === n.position.line &&
            r.position.character === n.position.character
          ) {
            let { data: e, isLoading: t } = p.get(De, {
              contentsHash: le(c.contents),
              languageFile: c,
              surfaceId: d,
            });
            if (e != null || t || (b && r.retryCount < 2)) {
              r.element !== n.element && (K(m), p.set(m.hoverTarget$, { ...r, ...n }));
              return;
            }
          }
          ye(p, m, c, n);
        }),
        (t[36] = o),
        (t[37] = b),
        (t[38] = c),
        (t[39] = p),
        (t[40] = m),
        (t[41] = d),
        (t[42] = s))
      : (s = t[42]);
    let u = s,
      f;
    t[43] !== p || t[44] !== m
      ? ((f = function (e) {
          m.hoverTimeout?.element === e.tokenElement &&
            p.get(m.hoverTarget$)?.element !== e.tokenElement &&
            K(m);
        }),
        (t[43] = p),
        (t[44] = m),
        (t[45] = f))
      : (f = t[45]);
    let h = f,
      g;
    (t[46] !== S || t[47] !== o || t[48] !== p || t[49] !== m.contextTarget$
      ? ((g = function (e) {
          let t = S ? nt(e.nativeEvent.composedPath(), o) : null;
          p.set(m.contextTarget$, t);
        }),
        (t[46] = S),
        (t[47] = o),
        (t[48] = p),
        (t[49] = m.contextTarget$),
        (t[50] = g))
      : (g = t[50]),
      (w = g),
      (E = n({
        definitionNavigationEnabled: C,
        fileOptions: {
          onTokenClick: C ? a : void 0,
          onTokenEnter: x ? u : void 0,
          onTokenLeave: x ? h : void 0,
        },
        getContextMenuItems: () =>
          l == null ? [] : ke({ scope: p, surface: m, languageFile: c, locationKinds: T, onOpenLocation: l }),
        onContextMenu: w,
      })),
      (t[15] = y?.locationKinds),
      (t[16] = n),
      (t[17] = i),
      (t[18] = o),
      (t[19] = b),
      (t[20] = x),
      (t[21] = c),
      (t[22] = l),
      (t[23] = p),
      (t[24] = m),
      (t[25] = d),
      (t[26] = S),
      (t[27] = C),
      (t[28] = w),
      (t[29] = T),
      (t[30] = E));
  } else ((S = t[26]), (C = t[27]), (w = t[28]), (T = t[29]), (E = t[30]));
  let D = E,
    O = f ? `h-full` : `contents`,
    k = f && S ? w : void 0,
    A;
  t[51] !== D || t[52] !== O || t[53] !== k
    ? ((A = (0, $.jsx)(`div`, { ref: h, className: O, onContextMenu: k, children: D })),
      (t[51] = D),
      (t[52] = O),
      (t[53] = k),
      (t[54] = A))
    : (A = t[54]);
  let M = A,
    N;
  t[55] !== S ||
  t[56] !== a ||
  t[57] !== c ||
  t[58] !== T ||
  t[59] !== l ||
  t[60] !== m ||
  t[61] !== M ||
  t[62] !== f
    ? ((N =
        f && S
          ? (0, $.jsx)(Me, {
              getFallbackItems: a,
              languageFile: c,
              locationKinds: T,
              onOpenLocation: l,
              surface: m,
              children: M,
            })
          : M),
      (t[55] = S),
      (t[56] = a),
      (t[57] = c),
      (t[58] = T),
      (t[59] = l),
      (t[60] = m),
      (t[61] = M),
      (t[62] = f),
      (t[63] = N))
    : (N = t[63]);
  let P;
  t[64] !== C ||
  t[65] !== i ||
  t[66] !== o ||
  t[67] !== s ||
  t[68] !== c ||
  t[69] !== l ||
  t[70] !== u ||
  t[71] !== m
    ? ((P = (0, $.jsx)(qe, {
        definitionNavigationEnabled: C,
        getTarget: o,
        enabled: i,
        isActive: s,
        languageFile: c,
        onOpenLocation: l,
        panelId: u,
        surface: m,
        surfaceRef: h,
      })),
      (t[64] = C),
      (t[65] = i),
      (t[66] = o),
      (t[67] = s),
      (t[68] = c),
      (t[69] = l),
      (t[70] = u),
      (t[71] = m),
      (t[72] = P))
    : (P = t[72]);
  let F;
  t[73] !== i || t[74] !== o || t[75] !== b || t[76] !== c || t[77] !== m || t[78] !== d
    ? ((F = i
        ? (0, $.jsx)(it, {
            languageFile: c,
            getTarget: o,
            retryEnabled: b,
            surface: m,
            surfaceId: d,
            surfaceRef: h,
          })
        : null),
      (t[73] = i),
      (t[74] = o),
      (t[75] = b),
      (t[76] = c),
      (t[77] = m),
      (t[78] = d),
      (t[79] = F))
    : (F = t[79]);
  let L;
  t[80] !== i || t[81] !== c || t[82] !== l || t[83] !== m
    ? ((L = !i || l == null ? null : (0, $.jsx)(Be, { languageFile: c, onOpenLocation: l, surface: m })),
      (t[80] = i),
      (t[81] = c),
      (t[82] = l),
      (t[83] = m),
      (t[84] = L))
    : (L = t[84]);
  let R;
  return (
    t[85] !== F || t[86] !== L || t[87] !== N || t[88] !== P
      ? ((R = (0, $.jsxs)($.Fragment, { children: [N, P, F, L] })),
        (t[85] = F),
        (t[86] = L),
        (t[87] = N),
        (t[88] = P),
        (t[89] = R))
      : (R = t[89]),
    R
  );
}
function tt() {}
function nt(e, t) {
  let n = e.find((e) => e instanceof HTMLElement && e.dataset.char != null),
    r = e.find((e) => e instanceof HTMLElement && e.dataset.line != null);
  return n == null || r == null ? null : t(n, r);
}
function rt(e, t) {
  if (e == null) return null;
  let n = [e];
  for (let e = 0; e < n.length; e += 1) {
    let r = n[e],
      i = r?.querySelector(`[data-char]:hover`),
      a = i?.closest(`[data-line]`);
    if (i != null && a != null) return t(i, a);
    for (let e of r?.querySelectorAll(`*`) ?? []) e.shadowRoot != null && n.push(e.shadowRoot);
  }
  return null;
}
function it(e) {
  let n = (0, at.c)(46),
    { getTarget: i, languageFile: a, retryEnabled: o, surface: s, surfaceId: c, surfaceRef: l } = e,
    u = r(B),
    d = E(s.hoverTarget$),
    f;
  n[0] === a.contents ? (f = n[1]) : ((f = le(a.contents)), (n[0] = a.contents), (n[1] = f));
  let p = f,
    m;
  n[2] !== p || n[3] !== a || n[4] !== c
    ? ((m = { contentsHash: p, languageFile: a, surfaceId: c }),
      (n[2] = p),
      (n[3] = a),
      (n[4] = c),
      (n[5] = m))
    : (m = n[5]);
  let { data: h, isLoading: g } = j(De, m),
    _;
  n[6] === a.path ? (_ = n[7]) : ((_ = re(a.path)), (n[6] = a.path), (n[7] = _));
  let v = _,
    y = h == null && !g && o && d != null && d.retryCount < 2,
    b,
    x;
  (n[8] !== i ||
  n[9] !== h ||
  n[10] !== d ||
  n[11] !== a ||
  n[12] !== o ||
  n[13] !== u ||
  n[14] !== s ||
  n[15] !== l
    ? ((b = () => {
        if (h === void 0 || h != null || !o || d == null || d.retryCount >= 2) return;
        let e = setTimeout(() => {
          if (u.get(s.hoverTarget$) !== d) return;
          let e = d.element.closest(`[data-line]`),
            t = rt(l.current, i) ?? (d.element.isConnected && e != null ? i(d.element, e) : null);
          t?.position.line === d.position.line &&
            t.position.character === d.position.character &&
            ye(u, s, a, t, d.retryCount + 1);
        }, ot);
        return () => clearTimeout(e);
      }),
      (x = [h, d, i, a, o, u, s, l]),
      (n[8] = i),
      (n[9] = h),
      (n[10] = d),
      (n[11] = a),
      (n[12] = o),
      (n[13] = u),
      (n[14] = s),
      (n[15] = l),
      (n[16] = b),
      (n[17] = x))
    : ((b = n[16]), (x = n[17])),
    (0, Q.useEffect)(b, x));
  let S, C;
  (n[18] !== i ||
  n[19] !== h ||
  n[20] !== d ||
  n[21] !== g ||
  n[22] !== y ||
  n[23] !== u ||
  n[24] !== s ||
  n[25] !== l
    ? ((S = () => {
        if ((h == null && !g && !y) || d == null || d.element.isConnected) return;
        let e = rt(l.current, i);
        e?.position.line === d.position.line &&
          e.position.character === d.position.character &&
          (K(s), u.set(s.hoverTarget$, { ...d, element: e.element }));
      }),
      (C = [i, h, d, g, y, u, s, l]),
      (n[18] = i),
      (n[19] = h),
      (n[20] = d),
      (n[21] = g),
      (n[22] = y),
      (n[23] = u),
      (n[24] = s),
      (n[25] = l),
      (n[26] = S),
      (n[27] = C))
    : ((S = n[26]), (C = n[27])),
    (0, Q.useEffect)(S, C));
  let w, T;
  if (
    (n[28] !== h || n[29] !== d || n[30] !== g || n[31] !== y || n[32] !== a.contents
      ? ((w = () => {
          if ((h == null && !g && !y) || d == null || d.contents !== a.contents) return;
          let e = d.element;
          return (
            xe(e, !0),
            () => {
              xe(e, !1);
            }
          );
        }),
        (T = [h, d, g, y, a.contents]),
        (n[28] = h),
        (n[29] = d),
        (n[30] = g),
        (n[31] = y),
        (n[32] = a.contents),
        (n[33] = w),
        (n[34] = T))
      : ((w = n[33]), (T = n[34])),
    (0, Q.useEffect)(w, T),
    (h == null && !g && !y) || d == null || d.contents !== a.contents)
  )
    return null;
  let D;
  n[35] !== d.element || n[36] !== u || n[37] !== s
    ? ((D = (e) => {
        e || W(u, s, d.element);
      }),
      (n[35] = d.element),
      (n[36] = u),
      (n[37] = s),
      (n[38] = D))
    : (D = n[38]);
  let O;
  n[39] !== h || n[40] !== v
    ? ((O = (0, $.jsx)(`div`, {
        className: `p-3`,
        children:
          h == null
            ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 text-sm text-secondary select-none`,
                role: `status`,
                children: [
                  (0, $.jsx)(t, { as: `span`, className: `icon-xxs` }),
                  (0, $.jsx)(L, {
                    id: `review.fileLanguage.hover.loading`,
                    defaultMessage: `Loading type information…`,
                    description: `Status shown in a code hover while type information is loading from a language server`,
                  }),
                ],
              })
            : (0, $.jsx)(Ie, { hover: h, language: v === `tsx` ? `typescript` : v }),
      })),
      (n[39] = h),
      (n[40] = v),
      (n[41] = O))
    : (O = n[41]);
  let k;
  return (
    n[42] !== d.element || n[43] !== D || n[44] !== O
      ? ((k = (0, $.jsx)(A, {
          disableHoverOpen: !0,
          interactive: !0,
          open: !0,
          onOpenChange: D,
          triggerElement: d.element,
          side: `top`,
          tooltipContent: O,
          variant: `rich`,
          children: null,
        })),
        (n[42] = d.element),
        (n[43] = D),
        (n[44] = O),
        (n[45] = k))
      : (k = n[45]),
    k
  );
}
var at, Q, $, ot;
function st() {
  return (st = e(() => {
    ((at = f()),
      b(),
      (Q = s()),
      g(),
      C(),
      F(),
      V(),
      se(),
      Fe(),
      je(),
      q(),
      pe(),
      ze(),
      Ke(),
      Qe(),
      ($ = u()),
      (ot = 500));
  }))();
}
export { ve as a, je as i, st as n, q as o, Oe as r, $e as t };
//# sourceMappingURL=feature-provider-e8dc2eb97a78.js.map
