import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  NSt as a,
  PBt as o,
  Qst as s,
  TY as c,
  VSt as l,
  Vrt as u,
  WK as d,
  XI as f,
  XOt as p,
  XS as m,
  ZI as h,
  ZSt as g,
  dC as _,
  iCt as v,
  nCt as y,
  okt as b,
  qrt as x,
  tkt as S,
  uC as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AB as w,
  BB as T,
  BL as E,
  BRr as D,
  Ddn as O,
  FK as k,
  GB as A,
  HL as j,
  IB as M,
  IK as N,
  JRt as P,
  Jlr as F,
  LB as I,
  MOr as ee,
  Mir as L,
  Nir as te,
  Olr as ne,
  PK as R,
  Q2n as re,
  QB as z,
  QVt as ie,
  S3 as B,
  Swn as V,
  T3 as H,
  UB as U,
  VL as ae,
  Xlr as oe,
  YRt as se,
  Z2n as ce,
  ZB as le,
  ZVt as ue,
  a3 as de,
  dH as fe,
  dL as pe,
  dW as me,
  gur as W,
  hL as he,
  hdn as G,
  jB as ge,
  kB as _e,
  lH as ve,
  lpn as ye,
  mlr as be,
  nHt as xe,
  npt as Se,
  pL as Ce,
  pW as we,
  r3 as Te,
  rHt as Ee,
  rpt as De,
  upn as K,
  wLr as Oe,
  x3 as ke,
  xwn as Ae,
  zOr as je,
} from "./app-initial-ad16eaadf81f.js";
import { m as Me, p as Ne } from "./filename-menu-actions-39e6b8a922f7.js";
import { n as Pe, t as Fe } from "./tree-scroll-3983f2b0617b.js";
function Ie(e) {
  let n = (0, q.c)(21),
    {
      pageId: r,
      knownRootPageId: i,
      onOpenPage: a,
      onCreatePage: o,
      onNavigate: c,
      navigationSession: l,
      focusActivePage: u,
    } = e,
    d = t(s),
    f = b(),
    p = v(W),
    m = y(U, r),
    h = m.status === `ready` ? m.page.page_id : void 0;
  m.status === `loading` && (h = i);
  let g = { kind: `root`, pageId: h ?? r },
    _ = y(A, g),
    x = (e, t, n, r) => {
      (a == null ? te(d, `/space/${e}`) : a(e, t, n, h, r), c?.());
    },
    S = {
      focusedPageId: m.status === `ready` ? r : h,
      selectedPageId: r,
      includeArtifacts: !1,
      expandOnOpen: !0,
      expansionContext: {
        accountId: p,
        tree: `page-root:${h}`,
        kind: `page`,
        navigationSession: l ?? `page-navigator`,
      },
      indentLevel: 0,
      onOpenPage: x,
      onNavigate: c,
      renderRow: (e, t, n) => (0, J.jsx)(Re, { ...t, expand: n, onOpenPage: x, onCreatePage: o }),
    },
    C;
  n[0] === f
    ? (C = n[1])
    : ((C = f.formatMessage({
        id: `codex.pageExplorer.pagesNavigation`,
        defaultMessage: `Pages`,
        description: `Navigation landmark for the current page's tree`,
      })),
      (n[0] = f),
      (n[1] = C));
  let T = Fe,
    E = h,
    D =
      _ != null &&
      h != null &&
      (0, J.jsxs)(ve, {
        children: [
          (0, J.jsx)(w, { ...S, pageIds: [h], source: g, tree: _, expandable: !1 }),
          (0, J.jsx)(_e, {
            ...S,
            pageId: h,
            indentLevel: 1,
            loadChildren: _.nodesById.get(h)?.hasChildren !== !1 && !K(h),
          }),
        ],
      }),
    k = m.status === `error`,
    j = m.status === `loading` && h == null,
    N;
  n[2] !== m.pageId || n[3] !== m.status || n[4] !== d
    ? ((N = () => {
        m.status !== `ready` && d.query.fetch(O, m.pageId).catch(Le);
      }),
      (n[2] = m.pageId),
      (n[3] = m.status),
      (n[4] = d),
      (n[5] = N))
    : (N = n[5]);
  let P;
  n[6] !== k || n[7] !== j || n[8] !== N
    ? ((P = (0, J.jsx)(M, { indentLevel: 0, isError: k, isLoading: j, onRetry: N })),
      (n[6] = k),
      (n[7] = j),
      (n[8] = N),
      (n[9] = P))
    : (P = n[9]);
  let F;
  n[10] !== T || n[11] !== u || n[12] !== l || n[13] !== r || n[14] !== E || n[15] !== D || n[16] !== P
    ? ((F = (0, J.jsxs)(T, {
        focusActivePage: u,
        pageId: r,
        rootPageId: E,
        navigationSession: l,
        children: [D, P],
      })),
      (n[10] = T),
      (n[11] = u),
      (n[12] = l),
      (n[13] = r),
      (n[14] = E),
      (n[15] = D),
      (n[16] = P),
      (n[17] = F))
    : (F = n[17]);
  let I;
  return (
    n[18] !== C || n[19] !== F
      ? ((I = (0, J.jsx)(`nav`, {
          className: `flex min-h-0 flex-1 flex-col sidebar-navigation select-none`,
          "aria-label": C,
          children: F,
        })),
        (n[18] = C),
        (n[19] = F),
        (n[20] = I))
      : (I = n[20]),
    I
  );
}
function Le() {}
function Re(e) {
  let n = (0, q.c)(25),
    r,
    i,
    a,
    o;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]), (o = n[4]))
    : (({ expand: r, onOpenPage: a, onCreatePage: i, ...o } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o));
  let c = t(s),
    l = b(),
    { page: u, pageId: f } = o,
    p = y(we, u ?? f),
    m = y(H, f),
    h;
  n[5] !== m || n[6] !== p || n[7] !== u || n[8] !== f
    ? ((h = m == null && u?.access.can_write === !0 && !K(f) && !oe(u) && p !== `request_changes`),
      (n[5] = m),
      (n[6] = p),
      (n[7] = u),
      (n[8] = f),
      (n[9] = h))
    : (h = n[9]);
  let g = h,
    _;
  n[10] === l
    ? (_ = n[11])
    : ((_ = l.formatMessage({
        id: `codex.pageExplorer.addSubpage`,
        defaultMessage: `Add subpage`,
        description: `Action on a page tree row that creates a child beneath that page`,
      })),
      (n[10] = l),
      (n[11] = _));
  let v = _,
    S;
  n[12] !== g ||
  n[13] !== r ||
  n[14] !== l ||
  n[15] !== v ||
  n[16] !== i ||
  n[17] !== a ||
  n[18] !== u ||
  n[19] !== f ||
  n[20] !== c
    ? ((S = g
        ? (0, J.jsx)(R, {
            isMenuOpen: !1,
            actionTooltipContent: v,
            action: (0, J.jsx)(k, {
              ariaLabel: v,
              onClick: () => {
                if (!ke(c, f)) return;
                if ((r(), i != null && u != null)) {
                  i(u);
                  return;
                }
                let e = c.get(W),
                  t = de(c, { parentPageId: f });
                (a(t.pageId),
                  t.completion.catch(() => {
                    c.get(W) === e &&
                      c
                        .get(x)
                        .danger(
                          l.formatMessage({
                            id: `codex.space.page.createError`,
                            defaultMessage: `Could not create page`,
                            description: `Toast displayed when creating a shared Page fails`,
                          }),
                          { errorAnalytics: { toastId: `codex.space.page.createError` } },
                        );
                  }));
              },
              children: (0, J.jsx)(d, {}),
            }),
          })
        : void 0),
      (n[12] = g),
      (n[13] = r),
      (n[14] = l),
      (n[15] = v),
      (n[16] = i),
      (n[17] = a),
      (n[18] = u),
      (n[19] = f),
      (n[20] = c),
      (n[21] = S))
    : (S = n[21]);
  let C;
  return (
    n[22] !== o || n[23] !== S
      ? ((C = (0, J.jsx)(le, { ...o, actions: S })), (n[22] = o), (n[23] = S), (n[24] = C))
      : (C = n[24]),
    C
  );
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = o()),
      g(),
      p(),
      L(),
      c(),
      u(),
      Te(),
      B(),
      ye(),
      F(),
      me(),
      fe(),
      z(),
      T(),
      ge(),
      I(),
      G(),
      n(),
      N(),
      Pe(),
      (J = i()));
  }))();
}
function ze(e) {
  let t = (0, Be.c)(18),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ onClose: n, open: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = b(),
    o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(S, {
        id: `codex.pageExplorer.heading`,
        defaultMessage: `Pages`,
        description: `Heading of the page hierarchy navigation panel`,
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === a
    ? (s = t[6])
    : ((s = a.formatMessage({
        id: `codex.pageExplorer.close`,
        defaultMessage: `Close pages`,
        description: `Close the page hierarchy and return focus to the filename menu`,
      })),
      (t[5] = a),
      (t[6] = s));
  let c;
  t[7] !== n || t[8] !== s
    ? ((c = (0, X.jsx)(_, { title: o, closeLabel: s, onClose: n })), (t[7] = n), (t[8] = s), (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] === i ? (l = t[11]) : ((l = (0, X.jsx)(Ie, { ...i, focusActivePage: !0 })), (t[10] = i), (t[11] = l));
  let u;
  t[12] !== c || t[13] !== l
    ? ((u = (0, X.jsxs)(`div`, {
        className: `pointer-events-auto flex min-h-0 flex-1 flex-col`,
        "data-page-explorer-panel": !0,
        children: [c, l],
      })),
      (t[12] = c),
      (t[13] = l),
      (t[14] = u))
    : (u = t[14]);
  let d;
  return (
    t[15] !== r || t[16] !== u
      ? ((d = (0, X.jsx)(`div`, {
          className: `${Me.width} absolute inset-y-0 start-0 z-10`,
          children: (0, X.jsx)(C, { initial: !1, open: r, size: `compact`, side: `start`, children: u }),
        })),
        (t[15] = r),
        (t[16] = u),
        (t[17] = d))
      : (d = t[17]),
    d
  );
}
var Be, X;
function Ve() {
  return (Ve = e(() => {
    ((Be = o()), p(), m(), Y(), Ne(), (X = i()));
  }))();
}
function He(e) {
  let n = (0, Ge.c)(47),
    { children: r, pageId: i, tabId: a } = e,
    o = t(ee),
    s = l(),
    c = (0, Z.useRef)(null),
    u = v(ne),
    d = v(ie),
    p = v(W),
    m = v(D),
    [h, g] = (0, Z.useState)(null),
    _ = h?.accountId === p && h?.userId === m && h?.pageId === i ? h.rootPageId : void 0,
    b;
  n[0] !== p || n[1] !== i
    ? ((b = { accountId: p, pageId: i }), (n[0] = p), (n[1] = i), (n[2] = b))
    : (b = n[2]);
  let x = b,
    S = y(j, x),
    C = a ?? `route`,
    w;
  n[3] !== p || n[4] !== C
    ? ((w = { accountId: p, tabId: C }), (n[3] = p), (n[4] = C), (n[5] = w))
    : (w = n[5]);
  let T = w,
    E = y(ae, T),
    O;
  n[6] !== u || n[7] !== a || n[8] !== d
    ? ((O = u && (a != null || !d) && !De(`/space/:pageId`)), (n[6] = u), (n[7] = a), (n[8] = d), (n[9] = O))
    : (O = n[9]);
  let k = O,
    A = k && (a == null ? S : E),
    M;
  n[10] !== T || n[11] !== A || n[12] !== x || n[13] !== o || n[14] !== a
    ? ((M = () => {
        (A && c.current?.focus({ preventScroll: !0 }), a == null ? o.set(j, x, We) : o.set(ae, T, Ue));
      }),
      (n[10] = T),
      (n[11] = A),
      (n[12] = x),
      (n[13] = o),
      (n[14] = a),
      (n[15] = M))
    : (M = n[15]);
  let N = M,
    F;
  n[16] === a
    ? (F = n[17])
    : ((F = (e) => {
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
          (a != null &&
            n
              ?.closest(`[role="tab"][aria-selected="true"]`)
              ?.closest(`[data-tab-id]`)
              ?.getAttribute(`data-tab-id`) === a)
        );
      }),
      (n[16] = a),
      (n[17] = F));
  let I;
  (n[18] !== k || n[19] !== F
    ? ((I = { enabled: k, isActive: F }), (n[18] = k), (n[19] = F), (n[20] = I))
    : (I = n[20]),
    re(`toggleFileTreePanel`, N, I));
  let L, R;
  if (n[21] !== r || n[22] !== k || n[23] !== N || n[24] !== A) {
    let e = k ? { open: A, onToggle: N, triggerRef: c } : null;
    ((L = `@container/page-explorer relative flex h-full min-h-0 min-w-0 flex-1 flex-col`),
      (R = r(e)),
      (n[21] = r),
      (n[22] = k),
      (n[23] = N),
      (n[24] = A),
      (n[25] = L),
      (n[26] = R));
  } else ((L = n[25]), (R = n[26]));
  let z;
  n[27] !== p ||
  n[28] !== k ||
  n[29] !== _ ||
  n[30] !== s ||
  n[31] !== N ||
  n[32] !== A ||
  n[33] !== i ||
  n[34] !== o ||
  n[35] !== a ||
  n[36] !== m
    ? ((z =
        k &&
        (0, Q.jsx)(ze, {
          onClose: N,
          open: A,
          pageId: i,
          knownRootPageId: _,
          navigationSession: a == null ? `route` : JSON.stringify([o.value.clientThreadId, a]),
          onCreatePage:
            a == null
              ? void 0
              : (e) => {
                  let t = Ae(o, a);
                  t != null && pe(o, { parentPageId: e.page_id, tabId: a, target: t });
                },
          onOpenPage: (e, t, n, r, c) => {
            g({ accountId: p, userId: m, pageId: e, rootPageId: r });
            let l = { accountId: p, userId: m, pageId: e, title: n?.title ?? void 0, documentType: t };
            if (a == null)
              (o.set(j, { accountId: p, pageId: e }, !0),
                te(o, f(e), { state: { ...s.state, pagePreview: l, scrollPageToTop: e === i } }));
            else {
              let t = Ae(o, a);
              if (t != null) {
                let n = c?.openBeside && o.get(Ee);
                he(o, e, {
                  tabId: n ? void 0 : a,
                  besideTabId: n ? a : void 0,
                  target: t,
                  pagePreview: l,
                  blockId: e === i ? null : void 0,
                });
              }
            }
          },
        })),
      (n[27] = p),
      (n[28] = k),
      (n[29] = _),
      (n[30] = s),
      (n[31] = N),
      (n[32] = A),
      (n[33] = i),
      (n[34] = o),
      (n[35] = a),
      (n[36] = m),
      (n[37] = z))
    : (z = n[37]);
  let B;
  n[38] === z
    ? (B = n[39])
    : ((B = (0, Q.jsx)(`div`, {
        className: `pointer-events-none absolute inset-x-0 top-[var(--viewer-header-height)] bottom-0`,
        children: z,
      })),
      (n[38] = z),
      (n[39] = B));
  let V;
  n[40] !== B || n[41] !== L || n[42] !== R
    ? ((V = (0, Q.jsxs)(`div`, { className: L, children: [R, B] })),
      (n[40] = B),
      (n[41] = L),
      (n[42] = R),
      (n[43] = V))
    : (V = n[43]);
  let H = V,
    U;
  return (
    n[44] !== H || n[45] !== a
      ? ((U = a == null ? (0, Q.jsx)(P.ContentSurface, { children: H }) : H),
        (n[44] = H),
        (n[45] = a),
        (n[46] = U))
      : (U = n[46]),
    U
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
    ((Ge = o()),
      g(),
      h(),
      (Z = r()),
      a(),
      L(),
      se(),
      Oe(),
      ce(),
      be(),
      Se(),
      Ce(),
      G(),
      ue(),
      xe(),
      je(),
      V(),
      Ve(),
      E(),
      (Q = i()));
  }))();
}
export { $ as n, He as t };
//# sourceMappingURL=layout-e024e43f5b5b.js.map
