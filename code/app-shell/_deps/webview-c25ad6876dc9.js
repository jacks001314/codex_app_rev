import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  KX as r,
  Qit as i,
  Zit as a,
  kmn as o,
  pmn as s,
  qX as c,
} from "./app-initial-f094ef01c64d.js";
function l(e) {
  let t = (0, p.c)(50),
    {
      adoptionLease: n,
      adoptedWebContentsId: a,
      bounds: o,
      browserTabId: s,
      children: c,
      clipBounds: l,
      conversationId: g,
      hostKind: _,
      initialUrl: v,
      isPrewarmedEmptyTab: y,
      isExiting: b,
      isVisible: x,
      opacity: S,
      scale: C,
      shouldBootstrapWhenHidden: w,
      shouldPaint: T,
      webviewRef: E,
      windowZoom: D,
    } = e,
    O = _ === void 0 ? `right-panel` : _,
    k = y !== void 0 && y,
    A = b !== void 0 && b,
    j = (0, m.useRef)(null),
    M = (0, m.useId)(),
    N = (0, m.useRef)(!1),
    P = (0, m.useRef)(!1),
    F;
  t[0] !== s || t[1] !== g
    ? ((F = r.pages.getMountGeneration(g, s)), (t[0] = s), (t[1] = g), (t[2] = F))
    : (F = t[2]);
  let I = (0, m.useRef)(F),
    L;
  t[3] !== s || t[4] !== g ? ((L = () => f(g, s)), (t[3] = s), (t[4] = g), (t[5] = L)) : (L = t[5]);
  let R = i(L),
    z;
  t[6] !== s || t[7] !== g
    ? ((z = () => r.pages.getCursorOverlayHost(g, s)), (t[6] = s), (t[7] = g), (t[8] = z))
    : (z = t[8]);
  let B = (0, m.useSyncExternalStore)(r.subscribe, z, u),
    V,
    H;
  (t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = () => (
        (P.current = !0),
        () => {
          P.current = !1;
        }
      )),
      (H = []),
      (t[9] = V),
      (t[10] = H))
    : ((V = t[9]), (H = t[10])),
    (0, m.useLayoutEffect)(V, H));
  let U = (x || A) && o != null,
    W,
    G;
  (t[11] !== s || t[12] !== g || t[13] !== R || t[14] !== U || t[15] !== M || t[16] !== w
    ? ((G = () => {
        let e = f(g, s);
        if (
          d({
            hasManagedWebview: j.current != null,
            isPresented: U,
            shouldBootstrapWhenHidden: w,
          }) === `skip`
        ) {
          ((N.current = !1), (I.current = r.pages.getMountGeneration(g, s)));
          return;
        }
        let t = r.pages.claimMountGeneration(g, s, M);
        return (
          (I.current = t),
          (N.current = !0),
          () => {
            ((N.current = !1),
              queueMicrotask(() => {
                if (P.current && R() === e && N.current) return;
                let n = r.pages.releaseMountGeneration(g, s, M, t);
                I.current === t && (I.current = n);
              }));
          }
        );
      }),
      (W = [s, g, R, U, M, w]),
      (t[11] = s),
      (t[12] = g),
      (t[13] = R),
      (t[14] = U),
      (t[15] = M),
      (t[16] = w),
      (t[17] = W),
      (t[18] = G))
    : ((W = t[17]), (G = t[18])),
    (0, m.useLayoutEffect)(G, W));
  let K, q;
  (t[19] !== s || t[20] !== g || t[21] !== R || t[22] !== O || t[23] !== M || t[24] !== E
    ? ((K = () => {
        let e = f(g, s);
        return () => {
          let t = j.current,
            n = I.current;
          queueMicrotask(() => {
            let i = R();
            (P.current && i === e) ||
              r.pages.hasOtherMountGenerationClaim(g, s, M, n) ||
              (t != null &&
                (r.pages.detachElectronWebview(t, E, O, n), j.current === t && (j.current = null)));
          });
        };
      }),
      (q = [s, g, R, O, M, E]),
      (t[19] = s),
      (t[20] = g),
      (t[21] = R),
      (t[22] = O),
      (t[23] = M),
      (t[24] = E),
      (t[25] = K),
      (t[26] = q))
    : ((K = t[25]), (q = t[26])),
    (0, m.useLayoutEffect)(K, q));
  let J, Y;
  if (
    (t[27] !== a ||
    t[28] !== n ||
    t[29] !== o ||
    t[30] !== s ||
    t[31] !== l ||
    t[32] !== g ||
    t[33] !== O ||
    t[34] !== v ||
    t[35] !== A ||
    t[36] !== U ||
    t[37] !== k ||
    t[38] !== M ||
    t[39] !== S ||
    t[40] !== C ||
    t[41] !== w ||
    t[42] !== T ||
    t[43] !== E ||
    t[44] !== D
      ? ((J = () => {
          j.current?.disposed && (j.current = null);
          let e = j.current,
            t = d({ hasManagedWebview: e != null, isPresented: U, shouldBootstrapWhenHidden: w });
          if (t === `skip`) {
            if (e != null) {
              let t = I.current;
              r.pages.hasOtherMountGenerationClaim(g, s, M, t) ||
                r.pages.detachElectronWebview(e, E, O, t);
            }
            j.current === e && (j.current = null);
            return;
          }
          let i = r.pages.getWebview(g, s, v, {
            adoptionLease: n,
            adoptedWebContentsId: a,
            hostKind: O,
          });
          ((j.current = i),
            r.pages.setPrewarmedEmptyWebview(i, k),
            r.pages.syncElectronWebview(
              i,
              {
                bounds: o,
                clipBounds: l,
                isExiting: A,
                isVisible: U,
                mountGeneration: I.current,
                opacity: S,
                scale: C,
                shouldBootstrap: t === `bootstrap`,
                shouldPaint: T,
                windowZoom: D,
              },
              E,
              O,
            ));
        }),
        (Y = [s, g, O, v, k, n, a, o, l, A, U, M, S, C, T, w, E, D]),
        (t[27] = a),
        (t[28] = n),
        (t[29] = o),
        (t[30] = s),
        (t[31] = l),
        (t[32] = g),
        (t[33] = O),
        (t[34] = v),
        (t[35] = A),
        (t[36] = U),
        (t[37] = k),
        (t[38] = M),
        (t[39] = S),
        (t[40] = C),
        (t[41] = w),
        (t[42] = T),
        (t[43] = E),
        (t[44] = D),
        (t[45] = J),
        (t[46] = Y))
      : ((J = t[45]), (Y = t[46])),
    (0, m.useLayoutEffect)(J, Y),
    B == null || c == null)
  )
    return null;
  let X;
  return (
    t[47] !== c || t[48] !== B
      ? ((X = (0, h.createPortal)(c, B)), (t[47] = c), (t[48] = B), (t[49] = X))
      : (X = t[49]),
    X
  );
}
function u() {
  return null;
}
function d({ hasManagedWebview: e, isPresented: t, shouldBootstrapWhenHidden: n }) {
  return t ? `sync` : n ? (e ? `sync` : `bootstrap`) : `skip`;
}
function f(e, t) {
  return `${e}\0${t}`;
}
var p,
  m,
  h,
  g = e(() => {
    ((p = o()), (m = t(n(), 1)), (h = t(s(), 1)), a(), c());
  });
export { g as n, l as t };
//# sourceMappingURL=webview-c25ad6876dc9.js.map
