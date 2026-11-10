import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CS as t,
  Cot as n,
  FS as r,
  IDt as i,
  IS as a,
  Ixt as o,
  Pxt as s,
  TJ as c,
  VDt as l,
  Vxt as u,
  _xt as d,
  cI as f,
  hot as p,
  jDt as m,
  lot as h,
  qG as g,
  sI as _,
  vzt as v,
  wot as y,
  wxt as b,
  xMt as x,
  yzt as S,
  zxt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  $2 as w,
  $H as T,
  $z as E,
  AI as D,
  Bar as O,
  Bz as k,
  C$n as A,
  Cwr as j,
  Dor as M,
  Ear as N,
  I2 as P,
  Jdt as ee,
  Jz as F,
  Kz as I,
  MI as te,
  Mz as L,
  Nsn as R,
  Nz as z,
  OI as ne,
  P2 as B,
  Pz as V,
  Q2 as H,
  Qz as re,
  Uz as ie,
  XHt as ae,
  XMr as oe,
  YHt as se,
  ZH as ce,
  aL as U,
  aor as le,
  cG as ue,
  cqt as de,
  dxn as fe,
  fH as pe,
  gwr as me,
  hln as W,
  iL as G,
  lG as he,
  lIr as K,
  mH as ge,
  mln as _e,
  n4 as ve,
  oer as ye,
  qdt as be,
  rL as xe,
  sG as Se,
  ser as Ce,
  sor as we,
  sqt as Te,
  tNr as Ee,
  uIr as De,
  uxn as Oe,
  w$n as ke,
  xsn as Ae,
  zz as je,
} from "./app-initial-5851df3f6cb1.js";
import { m as Me, p as Ne } from "./filename-menu-actions-c1dd81b47dd6.js";
import { n as Pe, t as Fe } from "./tree-scroll-3878c2f003ab.js";
function Ie(e) {
  let t = (0, q.c)(21),
    {
      pageId: r,
      knownRootPageId: i,
      onOpenPage: a,
      onCreatePage: s,
      onNavigate: c,
      navigationSession: d,
      focusActivePage: f,
    } = e,
    p = o(n),
    m = l(),
    h = u(M),
    g = C(I, r),
    _ = g.status === `ready` ? g.page.page_id : void 0;
  g.status === `loading` && (_ = i);
  let v = { kind: `root`, pageId: _ ?? r },
    y = C(F, v),
    b = (e, t, n, r) => {
      (a == null ? De(p, `/space/${e}`) : a(e, t, n, _, r), c?.());
    },
    x = {
      focusedPageId: g.status === `ready` ? r : _,
      selectedPageId: r,
      includeArtifacts: !1,
      expandOnOpen: !0,
      expansionContext: {
        accountId: h,
        tree: `page-root:${_}`,
        kind: `page`,
        navigationSession: d ?? `page-navigator`,
      },
      indentLevel: 0,
      onOpenPage: b,
      onNavigate: c,
      renderRow: (e, t, n) => (0, J.jsx)(Re, { ...t, expand: n, onOpenPage: b, onCreatePage: s }),
    },
    S;
  t[0] === m
    ? (S = t[1])
    : ((S = m.formatMessage({
        id: `codex.pageExplorer.pagesNavigation`,
        defaultMessage: `Pages`,
        description: `Navigation landmark for the current page's tree`,
      })),
      (t[0] = m),
      (t[1] = S));
  let w = Fe,
    T = _,
    E =
      y != null &&
      _ != null &&
      (0, J.jsxs)(pe, {
        children: [
          (0, J.jsx)(z, { ...x, pageIds: [_], source: v, tree: y, expandable: !1 }),
          (0, J.jsx)(L, {
            ...x,
            pageId: _,
            indentLevel: 1,
            loadChildren: y.nodesById.get(_)?.hasChildren !== !1 && !W(_),
          }),
        ],
      }),
    D = g.status === `error`,
    O = g.status === `loading` && _ == null,
    k;
  t[2] !== g.pageId || t[3] !== g.status || t[4] !== p
    ? ((k = () => {
        g.status !== `ready` && p.query.fetch(R, g.pageId).catch(Le);
      }),
      (t[2] = g.pageId),
      (t[3] = g.status),
      (t[4] = p),
      (t[5] = k))
    : (k = t[5]);
  let A;
  t[6] !== D || t[7] !== O || t[8] !== k
    ? ((A = (0, J.jsx)(je, { indentLevel: 0, isError: D, isLoading: O, onRetry: k })),
      (t[6] = D),
      (t[7] = O),
      (t[8] = k),
      (t[9] = A))
    : (A = t[9]);
  let j;
  t[10] !== w || t[11] !== f || t[12] !== d || t[13] !== r || t[14] !== T || t[15] !== E || t[16] !== A
    ? ((j = (0, J.jsxs)(w, {
        focusActivePage: f,
        pageId: r,
        rootPageId: T,
        navigationSession: d,
        children: [E, A],
      })),
      (t[10] = w),
      (t[11] = f),
      (t[12] = d),
      (t[13] = r),
      (t[14] = T),
      (t[15] = E),
      (t[16] = A),
      (t[17] = j))
    : (j = t[17]);
  let N;
  return (
    t[18] !== S || t[19] !== j
      ? ((N = (0, J.jsx)(`nav`, {
          className: `flex min-h-0 flex-1 flex-col sidebar-navigation select-none`,
          "aria-label": S,
          children: j,
        })),
        (t[18] = S),
        (t[19] = j),
        (t[20] = N))
      : (N = t[20]),
    N
  );
}
function Le() {}
function Re(e) {
  let t = (0, q.c)(25),
    r,
    i,
    a,
    s;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (s = t[4]))
    : (({ expand: r, onOpenPage: a, onCreatePage: i, ...s } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = s));
  let c = o(n),
    u = l(),
    { page: d, pageId: f } = s,
    m = C(T, d ?? f),
    h = C(ve, f),
    _;
  t[5] !== h || t[6] !== m || t[7] !== d || t[8] !== f
    ? ((_ = h == null && d?.access.can_write === !0 && !W(f) && !we(d) && m !== `request_changes`),
      (t[5] = h),
      (t[6] = m),
      (t[7] = d),
      (t[8] = f),
      (t[9] = _))
    : (_ = t[9]);
  let v = _,
    y;
  t[10] === u
    ? (y = t[11])
    : ((y = u.formatMessage({
        id: `codex.pageExplorer.addSubpage`,
        defaultMessage: `Add subpage`,
        description: `Action on a page tree row that creates a child beneath that page`,
      })),
      (t[10] = u),
      (t[11] = y));
  let b = y,
    x;
  t[12] !== v ||
  t[13] !== r ||
  t[14] !== u ||
  t[15] !== b ||
  t[16] !== i ||
  t[17] !== a ||
  t[18] !== d ||
  t[19] !== f ||
  t[20] !== c
    ? ((x = v
        ? (0, J.jsx)(Se, {
            isMenuOpen: !1,
            actionTooltipContent: b,
            action: (0, J.jsx)(ue, {
              ariaLabel: b,
              onClick: () => {
                if (!H(c, f)) return;
                if ((r(), i != null && d != null)) {
                  i(d);
                  return;
                }
                let e = c.get(M),
                  t = P(c, { parentPageId: f });
                (a(t.pageId),
                  t.completion.catch(() => {
                    c.get(M) === e &&
                      c
                        .get(p)
                        .danger(
                          u.formatMessage({
                            id: `codex.space.page.createError`,
                            defaultMessage: `Could not create page`,
                            description: `Toast displayed when creating a shared Page fails`,
                          }),
                          { errorAnalytics: { toastId: `codex.space.page.createError` } },
                        );
                  }));
              },
              children: (0, J.jsx)(g, {}),
            }),
          })
        : void 0),
      (t[12] = v),
      (t[13] = r),
      (t[14] = u),
      (t[15] = b),
      (t[16] = i),
      (t[17] = a),
      (t[18] = d),
      (t[19] = f),
      (t[20] = c),
      (t[21] = x))
    : (x = t[21]);
  let S;
  return (
    t[22] !== s || t[23] !== x
      ? ((S = (0, J.jsx)(re, { ...s, actions: x })), (t[22] = s), (t[23] = x), (t[24] = S))
      : (S = t[24]),
    S
  );
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = v()),
      s(),
      m(),
      K(),
      c(),
      h(),
      B(),
      w(),
      _e(),
      le(),
      ce(),
      ge(),
      E(),
      ie(),
      V(),
      k(),
      Ae(),
      y(),
      he(),
      Pe(),
      (J = x()));
  }))();
}
function ze(e) {
  let t = (0, Be.c)(18),
    n,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (o = t[2]), (s = t[3]))
    : (({ onClose: n, open: o, ...s } = e), (t[0] = e), (t[1] = n), (t[2] = o), (t[3] = s));
  let c = l(),
    u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(i, {
        id: `codex.pageExplorer.heading`,
        defaultMessage: `Pages`,
        description: `Heading of the page hierarchy navigation panel`,
      })),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === c
    ? (d = t[6])
    : ((d = c.formatMessage({
        id: `codex.pageExplorer.close`,
        defaultMessage: `Close pages`,
        description: `Close the page hierarchy and return focus to the filename menu`,
      })),
      (t[5] = c),
      (t[6] = d));
  let f;
  t[7] !== n || t[8] !== d
    ? ((f = (0, X.jsx)(a, { title: u, closeLabel: d, onClose: n })), (t[7] = n), (t[8] = d), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === s ? (p = t[11]) : ((p = (0, X.jsx)(Ie, { ...s, focusActivePage: !0 })), (t[10] = s), (t[11] = p));
  let m;
  t[12] !== f || t[13] !== p
    ? ((m = (0, X.jsxs)(`div`, {
        className: `pointer-events-auto flex min-h-0 flex-1 flex-col`,
        "data-page-explorer-panel": !0,
        children: [f, p],
      })),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== o || t[16] !== m
      ? ((h = (0, X.jsx)(`div`, {
          className: `${Me.width} absolute inset-y-0 start-0 z-10`,
          children: (0, X.jsx)(r, { initial: !1, open: o, size: `compact`, side: `start`, children: m }),
        })),
        (t[15] = o),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
var Be, X;
function Ve() {
  return (Ve = e(() => {
    ((Be = v()), m(), t(), Y(), Ne(), (X = x()));
  }))();
}
function He(e) {
  let t = (0, Ge.c)(47),
    { children: n, pageId: r, tabId: i } = e,
    a = o(me),
    s = b(),
    c = (0, Z.useRef)(null),
    l = u(O),
    d = u(de),
    f = u(M),
    p = u(oe),
    [m, h] = (0, Z.useState)(null),
    g = m?.accountId === f && m?.userId === p && m?.pageId === r ? m.rootPageId : void 0,
    v;
  t[0] !== f || t[1] !== r
    ? ((v = { accountId: f, pageId: r }), (t[0] = f), (t[1] = r), (t[2] = v))
    : (v = t[2]);
  let y = v,
    x = C(U, y),
    S = i ?? `route`,
    w;
  t[3] !== f || t[4] !== S
    ? ((w = { accountId: f, tabId: S }), (t[3] = f), (t[4] = S), (t[5] = w))
    : (w = t[5]);
  let T = w,
    E = C(G, T),
    D;
  t[6] !== l || t[7] !== i || t[8] !== d
    ? ((D = l && (i != null || !d) && !ee(`/space/:pageId`)), (t[6] = l), (t[7] = i), (t[8] = d), (t[9] = D))
    : (D = t[9]);
  let k = D,
    A = k && (i == null ? x : E),
    j;
  t[10] !== T || t[11] !== A || t[12] !== y || t[13] !== a || t[14] !== i
    ? ((j = () => {
        (A && c.current?.focus({ preventScroll: !0 }), i == null ? a.set(U, y, We) : a.set(G, T, Ue));
      }),
      (t[10] = T),
      (t[11] = A),
      (t[12] = y),
      (t[13] = a),
      (t[14] = i),
      (t[15] = j))
    : (j = t[15]);
  let N = j,
    P;
  t[16] === i
    ? (P = t[17])
    : ((P = (e) => {
        let t = c.current;
        if (e?.originBrowserTab != null || t == null || !t.checkVisibility()) return !1;
        if (e?.originPanel != null)
          return (
            t
              .closest(`[data-app-shell-tab-panel-controller]`)
              ?.getAttribute(`data-app-shell-tab-panel-controller`) === e.originPanel
          );
        let n = t.ownerDocument.activeElement,
          r = t.closest(`[role="tabpanel"]`);
        return (
          n?.closest(`[role="tabpanel"]`) === r ||
          (i != null &&
            n
              ?.closest(`[role="tab"][aria-selected="true"]`)
              ?.closest(`[data-tab-id]`)
              ?.getAttribute(`data-tab-id`) === i)
        );
      }),
      (t[16] = i),
      (t[17] = P));
  let F;
  (t[18] !== k || t[19] !== P
    ? ((F = { enabled: k, isActive: P }), (t[18] = k), (t[19] = P), (t[20] = F))
    : (F = t[20]),
    ke(`toggleFileTreePanel`, N, F));
  let I, L;
  if (t[21] !== n || t[22] !== k || t[23] !== N || t[24] !== A) {
    let e = k ? { open: A, onToggle: N, triggerRef: c } : null;
    ((I = `@container/page-explorer relative flex h-full min-h-0 min-w-0 flex-1 flex-col`),
      (L = n(e)),
      (t[21] = n),
      (t[22] = k),
      (t[23] = N),
      (t[24] = A),
      (t[25] = I),
      (t[26] = L));
  } else ((I = t[25]), (L = t[26]));
  let R;
  t[27] !== f ||
  t[28] !== k ||
  t[29] !== g ||
  t[30] !== s ||
  t[31] !== N ||
  t[32] !== A ||
  t[33] !== r ||
  t[34] !== a ||
  t[35] !== i ||
  t[36] !== p
    ? ((R =
        k &&
        (0, Q.jsx)(ze, {
          onClose: N,
          open: A,
          pageId: r,
          knownRootPageId: g,
          navigationSession: i == null ? `route` : JSON.stringify([a.value.clientThreadId, i]),
          onCreatePage:
            i == null
              ? void 0
              : (e) => {
                  let t = Oe(a, i);
                  t != null && ne(a, { parentPageId: e.page_id, tabId: i, target: t });
                },
          onOpenPage: (e, t, n, o, c) => {
            h({ accountId: f, userId: p, pageId: e, rootPageId: o });
            let l = { accountId: f, userId: p, pageId: e, title: n?.title ?? void 0, documentType: t };
            if (i == null)
              (a.set(U, { accountId: f, pageId: e }, !0),
                De(a, _(e), { state: { ...s.state, pagePreview: l, scrollPageToTop: e === r } }));
            else {
              let t = Oe(a, i);
              if (t != null) {
                let n = c?.openBeside && a.get(Ce);
                te(a, e, {
                  tabId: n ? void 0 : i,
                  besideTabId: n ? i : void 0,
                  target: t,
                  pagePreview: l,
                  blockId: e === r ? null : void 0,
                });
              }
            }
          },
        })),
      (t[27] = f),
      (t[28] = k),
      (t[29] = g),
      (t[30] = s),
      (t[31] = N),
      (t[32] = A),
      (t[33] = r),
      (t[34] = a),
      (t[35] = i),
      (t[36] = p),
      (t[37] = R))
    : (R = t[37]);
  let z;
  t[38] === R
    ? (z = t[39])
    : ((z = (0, Q.jsx)(`div`, {
        className: `pointer-events-none absolute inset-x-0 top-[var(--viewer-header-height)] bottom-0`,
        children: R,
      })),
      (t[38] = R),
      (t[39] = z));
  let B;
  t[40] !== z || t[41] !== I || t[42] !== L
    ? ((B = (0, Q.jsxs)(`div`, { className: I, children: [L, z] })),
      (t[40] = z),
      (t[41] = I),
      (t[42] = L),
      (t[43] = B))
    : (B = t[43]);
  let V = B,
    H;
  return (
    t[44] !== V || t[45] !== i
      ? ((H = i == null ? (0, Q.jsx)(se.ContentSurface, { children: V }) : V),
        (t[44] = V),
        (t[45] = i),
        (t[46] = H))
      : (H = t[46]),
    H
  );
}
function Ue(e) {
  return !e;
}
function We(e) {
  return !e;
}
var Ge, Z, Q;
function $() {
  return ($ = e(() => {
    ((Ge = v()),
      s(),
      f(),
      (Z = S()),
      d(),
      K(),
      ae(),
      Ee(),
      A(),
      N(),
      be(),
      D(),
      Ae(),
      Te(),
      ye(),
      j(),
      fe(),
      Ve(),
      xe(),
      (Q = x()));
  }))();
}
export { $ as n, He as t };
//# sourceMappingURL=layout-1350b9e499a1.js.map
