import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { XT as t, ZT as n, _dn as r, fcn as i, vdn as a } from "./app-shared-7552fc8d5d82.js";
import { BUt as o, zUt as s } from "./app-initial-3916b423772b.js";
function c(e) {
  let t = (0, f.c)(51),
    {
      adoptionLease: r,
      adoptedWebContentsId: i,
      bounds: a,
      browserTabId: o,
      children: c,
      clipBounds: h,
      conversationId: g,
      hostKind: _,
      initialUrl: v,
      isPrewarmedEmptyTab: y,
      isExiting: b,
      isVisible: x,
      opacity: S,
      scale: C,
      shouldBootstrapWhenHidden: w,
      shouldDisposeOnUnmount: T,
      shouldPaint: E,
      webviewRef: D,
      windowZoom: O,
    } = e,
    k = _ === void 0 ? `right-panel` : _,
    A = y !== void 0 && y,
    j = b !== void 0 && b,
    M = (0, p.useRef)(null),
    N = (0, p.useId)(),
    P = (0, p.useRef)(!1),
    F = (0, p.useRef)(!1),
    I;
  t[0] !== o || t[1] !== g
    ? ((I = s.pages.getMountGeneration(g, o)), (t[0] = o), (t[1] = g), (t[2] = I))
    : (I = t[2]);
  let L = (0, p.useRef)(I),
    R;
  t[3] !== o || t[4] !== g ? ((R = () => d(g, o)), (t[3] = o), (t[4] = g), (t[5] = R)) : (R = t[5]);
  let z = n(R),
    B;
  t[6] !== o || t[7] !== g
    ? ((B = () => s.pages.getCursorOverlayHost(g, o)), (t[6] = o), (t[7] = g), (t[8] = B))
    : (B = t[8]);
  let V = (0, p.useSyncExternalStore)(s.subscribe, B, l),
    H,
    U;
  (t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = () => (
        (F.current = !0),
        () => {
          F.current = !1;
        }
      )),
      (U = []),
      (t[9] = H),
      (t[10] = U))
    : ((H = t[9]), (U = t[10])),
    (0, p.useLayoutEffect)(H, U));
  let W = (x || j) && a != null,
    G,
    K;
  (t[11] !== o || t[12] !== g || t[13] !== z || t[14] !== W || t[15] !== N || t[16] !== w
    ? ((K = () => {
        let e = d(g, o);
        if (
          u({
            hasManagedWebview: M.current != null,
            isPresented: W,
            shouldBootstrapWhenHidden: w,
          }) === `skip`
        ) {
          ((P.current = !1), (L.current = s.pages.getMountGeneration(g, o)));
          return;
        }
        let t = s.pages.claimMountGeneration(g, o, N, W);
        return (
          (L.current = t),
          (P.current = !0),
          () => {
            ((P.current = !1),
              queueMicrotask(() => {
                if (F.current && z() === e && P.current) return;
                let n = s.pages.releaseMountGeneration(g, o, N, t);
                L.current === t && (L.current = n);
              }));
          }
        );
      }),
      (G = [o, g, z, W, N, w]),
      (t[11] = o),
      (t[12] = g),
      (t[13] = z),
      (t[14] = W),
      (t[15] = N),
      (t[16] = w),
      (t[17] = G),
      (t[18] = K))
    : ((G = t[17]), (K = t[18])),
    (0, p.useLayoutEffect)(K, G));
  let q, J;
  (t[19] !== o ||
  t[20] !== g ||
  t[21] !== z ||
  t[22] !== k ||
  t[23] !== N ||
  t[24] !== T ||
  t[25] !== D
    ? ((q = () => {
        let e = d(g, o);
        return () => {
          let t = M.current,
            n = L.current,
            r = T?.() ?? !1;
          queueMicrotask(() => {
            let i = z();
            (F.current && i === e) ||
              s.pages.hasOtherMountGenerationClaim(g, o, N, n) ||
              (t != null &&
                (r &&
                s.pages.getHost(g, o) === t &&
                s.pages.getMountGeneration(g, o) === n &&
                !t.isPainted()
                  ? s.pages.disposeHost(g, o, `web`)
                  : s.pages.detachElectronWebview(t, D, k, n),
                M.current === t && (M.current = null)));
          });
        };
      }),
      (J = [o, g, z, k, N, T, D]),
      (t[19] = o),
      (t[20] = g),
      (t[21] = z),
      (t[22] = k),
      (t[23] = N),
      (t[24] = T),
      (t[25] = D),
      (t[26] = q),
      (t[27] = J))
    : ((q = t[26]), (J = t[27])),
    (0, p.useLayoutEffect)(q, J));
  let Y, X;
  if (
    (t[28] !== i ||
    t[29] !== r ||
    t[30] !== a ||
    t[31] !== o ||
    t[32] !== h ||
    t[33] !== g ||
    t[34] !== k ||
    t[35] !== v ||
    t[36] !== j ||
    t[37] !== W ||
    t[38] !== A ||
    t[39] !== N ||
    t[40] !== S ||
    t[41] !== C ||
    t[42] !== w ||
    t[43] !== E ||
    t[44] !== D ||
    t[45] !== O
      ? ((Y = () => {
          M.current?.disposed && (M.current = null);
          let e = M.current,
            t = u({ hasManagedWebview: e != null, isPresented: W, shouldBootstrapWhenHidden: w });
          if (t === `skip`) {
            if (e != null) {
              let t = L.current;
              s.pages.hasOtherMountGenerationClaim(g, o, N, t) ||
                s.pages.detachElectronWebview(e, D, k, t);
            }
            M.current === e && (M.current = null);
            return;
          }
          if (k === `hidden-browser-use` && s.pages.hasPresentedMount(g, o)) return;
          let n = s.pages.getWebview(g, o, v, {
            adoptionLease: r,
            adoptedWebContentsId: i,
            hostKind: k,
          });
          ((M.current = n),
            s.pages.setPrewarmedEmptyWebview(n, A),
            s.pages.syncElectronWebview(
              n,
              {
                bounds: a,
                clipBounds: h,
                isExiting: j,
                isVisible: W,
                mountGeneration: L.current,
                opacity: S,
                scale: C,
                shouldBootstrap: t === `bootstrap` || (!W && w && !n.hasRegisteredNativeHost()),
                shouldPaint: E,
                windowZoom: O,
              },
              D,
              k,
            ));
        }),
        (X = [o, g, k, v, A, r, i, a, h, j, W, N, S, C, E, w, D, O]),
        (t[28] = i),
        (t[29] = r),
        (t[30] = a),
        (t[31] = o),
        (t[32] = h),
        (t[33] = g),
        (t[34] = k),
        (t[35] = v),
        (t[36] = j),
        (t[37] = W),
        (t[38] = A),
        (t[39] = N),
        (t[40] = S),
        (t[41] = C),
        (t[42] = w),
        (t[43] = E),
        (t[44] = D),
        (t[45] = O),
        (t[46] = Y),
        (t[47] = X))
      : ((Y = t[46]), (X = t[47])),
    (0, p.useLayoutEffect)(Y, X),
    V == null || c == null)
  )
    return null;
  let Z;
  return (
    t[48] !== c || t[49] !== V
      ? ((Z = (0, m.createPortal)(c, V)), (t[48] = c), (t[49] = V), (t[50] = Z))
      : (Z = t[50]),
    Z
  );
}
function l() {
  return null;
}
function u({ hasManagedWebview: e, isPresented: t, shouldBootstrapWhenHidden: n }) {
  return t ? `sync` : n ? (e ? `sync` : `bootstrap`) : `skip`;
}
function d(e, t) {
  return `${e}\0${t}`;
}
var f, p, m;
function h() {
  return (h = e(() => {
    ((f = r()), (p = a()), (m = i()), t(), o());
  }))();
}
export { h as n, c as t };
//# sourceMappingURL=webview-22a11e8fd7ea.js.map
