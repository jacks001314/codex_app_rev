import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ckt as t,
  Cz as n,
  Ixt as r,
  Pxt as i,
  Skt as a,
  Tz as o,
  VDt as s,
  Vxt as c,
  Z4 as l,
  _Mt as u,
  _wt as d,
  bkt as f,
  bz as p,
  dwt as m,
  gMt as h,
  gwt as g,
  jDt as _,
  uwt as v,
  vzt as y,
  wkt as b,
  xMt as x,
  xz as ee,
  yMt as S,
  ykt as C,
  yzt as w,
  zxt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Kt as E,
  Cwr as D,
  G8t as O,
  I3n as k,
  J3n as A,
  K8t as j,
  MCn as M,
  Own as N,
  PCn as P,
  QCr as te,
  RCn as ne,
  RCr as F,
  SCn as I,
  Y3n as re,
  Y8t as L,
  ZCr as R,
  aUt as z,
  b3n as ie,
  cCn as B,
  cwn as ae,
  dwn as V,
  eqt as H,
  ewr as U,
  fCn as W,
  fWt as G,
  gwr as K,
  jwn as q,
  lwr as J,
  mWt as oe,
  nwr as se,
  oUt as ce,
  pWt as le,
  q8t as ue,
  swr as de,
  twr as fe,
  uCn as pe,
  v3n as me,
  xCn as Y,
} from "./app-initial-5851df3f6cb1.js";
function he(e) {
  let t = (0, X.c)(19),
    { children: n } = e,
    i = r(K),
    a = c(R) === `left` ? `right` : `left`,
    o = c(P) === `split`,
    s = (0, Z.useContext)(Y),
    l = s?.dragState,
    u = s?.chatTabDragState,
    d = T(l?.sourceController.tabById$ ?? null, l?.draggedTab.tabId ?? null),
    f;
  t[0] !== u || t[1] !== a || t[2] !== l?.draggedTab || t[3] !== d || t[4] !== o
    ? ((f =
        o &&
        (u == null
          ? d != null && d.dndId === l?.draggedTab.dndId && G({ kind: `content`, tab: d }, a)
          : u.dropDestinations.includes(a) && u.canDrop(a))),
      (t[0] = u),
      (t[1] = a),
      (t[2] = l?.draggedTab),
      (t[3] = d),
      (t[4] = o),
      (t[5] = f))
    : (f = t[5]);
  let p = !f,
    m;
  t[6] !== a || t[7] !== i
    ? ((m = (e) => {
        let { draggedTab: t, sourceController: n } = e;
        return j(i, `tab_drag`, () => oe(i, { kind: `content`, tab: t }, a, n));
      }),
      (t[6] = a),
      (t[7] = i),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== a || t[10] !== m
    ? ((h = { destination: a, kind: `app-shell-tab-drop-target`, onDrop: m }),
      (t[9] = a),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g = h,
    _;
  t[12] !== p || t[13] !== g
    ? ((_ = { id: `unified-workspace-main-header`, disabled: p, data: g }),
      (t[12] = p),
      (t[13] = g),
      (t[14] = _))
    : (_ = t[14]);
  let { setNodeRef: v } = W(_),
    y;
  return (
    t[15] !== n || t[16] !== a || t[17] !== v
      ? ((y = (0, $.jsx)(`div`, {
          ref: v,
          className: `h-full min-w-0`,
          "data-app-shell-tab-row": !0,
          "data-unified-workspace-header-drop-target": a,
          children: n,
        })),
        (t[15] = n),
        (t[16] = a),
        (t[17] = v),
        (t[18] = y))
      : (y = t[18]),
    y
  );
}
function ge() {
  let e = (0, X.c)(36),
    t = r(K),
    { over: n } = pe(),
    i = (0, Z.useContext)(ue),
    a = (0, Z.useContext)(Y),
    o = a?.dragState ?? null,
    u = a?.chatTabDragState ?? null,
    d = T(o?.sourceController.tabById$ ?? null, o?.draggedTab.tabId ?? null),
    f = d?.dndId === o?.draggedTab.dndId ? d : null,
    p = c(me),
    m = s(),
    h;
  e[0] === m.locale ? (h = e[1]) : ((h = l(m.locale)), (e[0] = m.locale), (e[1] = h));
  let g = h,
    _ = a?.registerSelectionCapture,
    v;
  e[2] === t
    ? (v = e[3])
    : ((v = () => {
        let e = t.get(se),
          n = t.get(fe),
          r = t.get(U);
        return () => {
          (t.set(se, e), t.set(fe, n), t.set(U, r));
        };
      }),
      (e[2] = t),
      (e[3] = v));
  let y = ee(v),
    b,
    x;
  (e[4] !== y || e[5] !== _
    ? ((b = () => _?.(y)), (x = [y, _]), (e[4] = y), (e[5] = _), (e[6] = b), (e[7] = x))
    : ((b = e[6]), (x = e[7])),
    (0, Z.useLayoutEffect)(b, x));
  let S, C, w, E, D, O, k;
  if (
    e[8] !== u ||
    e[9] !== f ||
    e[10] !== g ||
    e[11] !== o ||
    e[12] !== p ||
    e[13] !== i ||
    e[14] !== n?.data
  ) {
    C = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let t = u?.dropDestinations ?? (f == null ? void 0 : N(f));
      if (i == null || (o == null && u == null) || t == null) {
        C = null;
        break bb0;
      }
      let r;
      e[22] !== u || e[23] !== f || e[24] !== p
        ? ((r = (e) =>
            (e !== `bottom` || p) &&
            (u == null ? f != null && G({ kind: `content`, tab: f }, e) : u.canDrop(e))),
          (e[22] = u),
          (e[23] = f),
          (e[24] = p),
          (e[25] = r))
        : (r = e[25]);
      let a = t.filter(r);
      if (a.length === 0) {
        C = null;
        break bb0;
      }
      let s = z(n?.data.current);
      ((S = Q.createPortal),
        (w = !0),
        (E = `pointer-events-none absolute inset-0 z-50`),
        (D = g),
        (O = a.map((e) => (0, $.jsx)(_e, { destination: e, hasBottomDestination: a.includes(`bottom`) }, e))),
        (k =
          s?.kind === `app-shell-tab-drop-target` && a.includes(s.destination)
            ? (0, $.jsx)(ve, { destination: s.destination, direction: g })
            : null));
    }
    ((e[8] = u),
      (e[9] = f),
      (e[10] = g),
      (e[11] = o),
      (e[12] = p),
      (e[13] = i),
      (e[14] = n?.data),
      (e[15] = S),
      (e[16] = C),
      (e[17] = w),
      (e[18] = E),
      (e[19] = D),
      (e[20] = O),
      (e[21] = k));
  } else ((S = e[15]), (C = e[16]), (w = e[17]), (E = e[18]), (D = e[19]), (O = e[20]), (k = e[21]));
  if (C !== Symbol.for(`react.early_return_sentinel`)) return C;
  let A;
  e[26] !== w || e[27] !== E || e[28] !== D || e[29] !== O || e[30] !== k
    ? ((A = (0, $.jsxs)(`div`, { "aria-hidden": w, className: E, dir: D, children: [O, k] })),
      (e[26] = w),
      (e[27] = E),
      (e[28] = D),
      (e[29] = O),
      (e[30] = k),
      (e[31] = A))
    : (A = e[31]);
  let j;
  return (
    e[32] !== i || e[33] !== S || e[34] !== A
      ? ((j = S(A, i)), (e[32] = i), (e[33] = S), (e[34] = A), (e[35] = j))
      : (j = e[35]),
    j
  );
}
function _e(e) {
  let t = (0, X.c)(20),
    { destination: n, hasBottomDestination: i } = e,
    a = r(K),
    o = (0, Z.useContext)(E),
    s = c(ie) ? (o ?? void 0) : void 0,
    l = `unified-workspace-${n}`,
    u;
  t[0] !== n || t[1] !== a
    ? ((u = (e) => {
        let { draggedTab: t, sourceController: r } = e;
        return j(a, `tab_drag`, () => oe(a, { kind: `content`, tab: t }, n, r));
      }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = u))
    : (u = t[2]);
  let f;
  t[3] !== n || t[4] !== u
    ? ((f = { destination: n, kind: `app-shell-tab-drop-target`, onDrop: u }),
      (t[3] = n),
      (t[4] = u),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m;
  t[6] !== l || t[7] !== p ? ((m = { id: l, data: p }), (t[6] = l), (t[7] = p), (t[8] = m)) : (m = t[8]);
  let { setNodeRef: g } = W(m),
    _;
  t[9] !== n || t[10] !== i
    ? ((_ = h(
        `pointer-events-none absolute z-50`,
        n === `bottom`
          ? `inset-x-0 bottom-0 h-1/4`
          : h(`top-0 w-1/4`, n === `left` ? `left-0` : `right-0`, i ? `bottom-1/4` : `bottom-0`),
      )),
      (t[9] = n),
      (t[10] = i),
      (t[11] = _))
    : (_ = t[11]);
  let v = n !== `bottom` && i ? s : void 0,
    y = n === `bottom` ? s : void 0,
    b;
  t[12] !== v || t[13] !== y
    ? ((b = { bottom: v, height: y }), (t[12] = v), (t[13] = y), (t[14] = b))
    : (b = t[14]);
  let x;
  return (
    t[15] !== n || t[16] !== g || t[17] !== _ || t[18] !== b
      ? ((x = (0, $.jsx)(d.div, {
          ref: g,
          "aria-hidden": !0,
          className: _,
          "data-unified-workspace-drop-target": n,
          dir: `ltr`,
          style: b,
        })),
        (t[15] = n),
        (t[16] = g),
        (t[17] = _),
        (t[18] = b),
        (t[19] = x))
      : (x = t[19]),
    x
  );
}
function ve(e) {
  let n = (0, X.c)(33),
    { destination: r, direction: i, surface: o } = e,
    { bottomPanelTargetHeight: s, contentPaneWidthRatio: l, mainContentWidth: u } = re(),
    p = (0, Z.useContext)(Y),
    g = c(te),
    _ = c(ne),
    v = o ?? (p?.chatTabDragState == null ? `content` : `chat`),
    y = g ? v === `content` && p?.dragState?.draggedTab.tabId === _ : v === `chat`,
    x = (0, Z.useContext)(E),
    S = c(ie),
    C = c(ae.tabIds$),
    w = p?.dragState?.sourceController === ae && C.length === 1,
    T = S && !w ? (x ?? void 0) : void 0,
    D;
  n[0] !== l || n[1] !== u ? ((D = [u, l]), (n[0] = l), (n[1] = u), (n[2] = D)) : (D = n[2]);
  let O;
  n[3] === y
    ? (O = n[4])
    : ((O = (e) => {
        let [t, n] = e,
          r = Math.min(t, de(n, t, `unified`));
        return y ? t - r : r;
      }),
      (n[3] = y),
      (n[4] = O));
  let k = m(D, O),
    A;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = {
        placement: `bottom-start`,
        strategy: `fixed`,
        middleware: [
          f(ye),
          a({
            apply(e) {
              let { elements: t, rects: n } = e;
              Object.assign(t.floating.style, {
                height: `${n.reference.height}px`,
                width: `${n.reference.width}px`,
              });
            },
          }),
        ],
        whileElementsMounted: b,
      }),
      (n[5] = A))
    : (A = n[5]);
  let { floatingStyles: j, refs: M } = t(A),
    N;
  n[6] === M
    ? (N = n[7])
    : ((N = (e) => {
        M.setReference(e);
      }),
      (n[6] = M),
      (n[7] = N));
  let P = ee(N),
    F;
  n[8] === M
    ? (F = n[9])
    : ((F = (e) => {
        M.setFloating(e);
      }),
      (n[8] = M),
      (n[9] = F));
  let I = ee(F),
    L = r === `bottom` && `inset-x-0 bottom-0`,
    R = r === `left` && `inset-y-0 left-0`,
    z = r === `right` && `inset-y-0 right-0`,
    B;
  n[10] !== L || n[11] !== R || n[12] !== z
    ? ((B = h(`pointer-events-none absolute`, L, R, z)), (n[10] = L), (n[11] = R), (n[12] = z), (n[13] = B))
    : (B = n[13]);
  let V = r === `bottom` ? void 0 : T,
    H = r === `bottom` ? s : void 0,
    U = r === `bottom` ? void 0 : k,
    W;
  n[14] !== V || n[15] !== H || n[16] !== U
    ? ((W = { bottom: V, height: H, width: U }), (n[14] = V), (n[15] = H), (n[16] = U), (n[17] = W))
    : (W = n[17]);
  let G;
  n[18] !== P || n[19] !== W || n[20] !== B
    ? ((G = (0, $.jsx)(d.div, { ref: P, "aria-hidden": !0, className: B, dir: `ltr`, style: W })),
      (n[18] = P),
      (n[19] = W),
      (n[20] = B),
      (n[21] = G))
    : (G = n[21]);
  let K;
  n[22] === r ? (K = n[23]) : ((K = (0, $.jsx)(be, { destination: r })), (n[22] = r), (n[23] = K));
  let q;
  n[24] !== r || n[25] !== i || n[26] !== j || n[27] !== I || n[28] !== K
    ? ((q = (0, Q.createPortal)(
        (0, $.jsx)(`div`, {
          ref: I,
          "aria-hidden": !0,
          className: `pointer-events-none z-50`,
          "data-unified-workspace-drop-indicator": r,
          dir: i,
          style: j,
          children: K,
        }),
        document.body,
      )),
      (n[24] = r),
      (n[25] = i),
      (n[26] = j),
      (n[27] = I),
      (n[28] = K),
      (n[29] = q))
    : (q = n[29]);
  let J;
  return (
    n[30] !== G || n[31] !== q
      ? ((J = (0, $.jsxs)($.Fragment, { children: [G, q] })), (n[30] = G), (n[31] = q), (n[32] = J))
      : (J = n[32]),
    J
  );
}
function ye(e) {
  let { rects: t } = e;
  return -t.reference.height;
}
function be(e) {
  let t = (0, X.c)(11),
    { destination: n } = e,
    r = o(),
    i = n === `bottom` && `border-t`,
    a = n === `left` && `border-r`,
    s = n === `right` && `border-l`,
    c;
  t[0] !== i || t[1] !== a || t[2] !== s
    ? ((c = h(`absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none`, i, a, s)),
      (t[0] = i),
      (t[1] = a),
      (t[2] = s),
      (t[3] = c))
    : (c = t[3]);
  let l = `calc(100% / ${r})`,
    u = `scale(${r})`,
    d = `calc(100% / ${r})`,
    f;
  t[4] !== l || t[5] !== u || t[6] !== d
    ? ((f = { height: l, transform: u, transformOrigin: `top left`, width: d }),
      (t[4] = l),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f))
    : (f = t[7]);
  let p;
  return (
    t[8] !== c || t[9] !== f
      ? ((p = (0, $.jsx)(`div`, { className: c, style: f })), (t[8] = c), (t[9] = f), (t[10] = p))
      : (p = t[10]),
    p
  );
}
var X, Z, Q, $;
function xe() {
  return (xe = e(() => {
    ((X = y()),
      B(),
      C(),
      u(),
      g(),
      v(),
      i(),
      (Z = w()),
      (Q = S()),
      _(),
      H(),
      A(),
      L(),
      F(),
      V(),
      ce(),
      I(),
      q(),
      J(),
      k(),
      n(),
      D(),
      O(),
      p(),
      le(),
      M(),
      ($ = x()));
  }))();
}
export { xe as i, ge as n, he as r, ve as t };
//# sourceMappingURL=drop-zones-aa6986de4c9a.js.map
