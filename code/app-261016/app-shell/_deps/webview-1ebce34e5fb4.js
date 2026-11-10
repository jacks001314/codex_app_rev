import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t, FNt as n, PBt as r, gB as i, hB as a } from "./app-shared-2feb3d4c6fcc.js";
import { N7t as o, P7t as s } from "./app-initial-ad16eaadf81f.js";
function c(e) {
  let t = (0, f.c)(52),
    {
      adoptionLease: n,
      adoptedWebContentsId: r,
      bounds: a,
      browserTabId: s,
      children: c,
      clipBounds: h,
      conversationId: g,
      hostKind: _,
      presentationSlot: v,
      initialUrl: y,
      isPrewarmedEmptyTab: b,
      isExiting: x,
      isVisible: S,
      opacity: C,
      scale: w,
      shouldBootstrapWhenHidden: T,
      shouldDisposeOnUnmount: E,
      shouldPaint: D,
      webviewRef: O,
      windowZoom: k,
    } = e,
    A = _ === void 0 ? `right-panel` : _,
    j = v === void 0 ? A : v,
    M = b !== void 0 && b,
    N = x !== void 0 && x,
    P = (0, p.useRef)(null),
    F = (0, p.useId)(),
    I = (0, p.useRef)(!1),
    L = (0, p.useRef)(!1),
    R;
  t[0] !== s || t[1] !== g
    ? ((R = o.pages.getMountGeneration(g, s)), (t[0] = s), (t[1] = g), (t[2] = R))
    : (R = t[2]);
  let z = (0, p.useRef)(R),
    B;
  t[3] !== s || t[4] !== g ? ((B = () => d(g, s)), (t[3] = s), (t[4] = g), (t[5] = B)) : (B = t[5]);
  let V = i(B),
    H;
  t[6] !== s || t[7] !== g
    ? ((H = () => o.pages.getCursorOverlayHost(g, s)), (t[6] = s), (t[7] = g), (t[8] = H))
    : (H = t[8]);
  let U = (0, p.useSyncExternalStore)(o.subscribe, H, l),
    W,
    G;
  (t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = () => (
        (L.current = !0),
        () => {
          L.current = !1;
        }
      )),
      (G = []),
      (t[9] = W),
      (t[10] = G))
    : ((W = t[9]), (G = t[10])),
    (0, p.useLayoutEffect)(W, G));
  let K = (S || N) && a != null,
    q,
    J;
  (t[11] !== s || t[12] !== g || t[13] !== V || t[14] !== K || t[15] !== F || t[16] !== T
    ? ((q = () => {
        let e = d(g, s);
        if (
          u({ hasManagedWebview: P.current != null, isPresented: K, shouldBootstrapWhenHidden: T }) === `skip`
        ) {
          ((I.current = !1), (z.current = o.pages.getMountGeneration(g, s)));
          return;
        }
        let t = o.pages.claimMountGeneration(g, s, F, K);
        return (
          (z.current = t),
          (I.current = !0),
          () => {
            ((I.current = !1),
              queueMicrotask(() => {
                if (L.current && V() === e && I.current) return;
                let n = o.pages.releaseMountGeneration(g, s, F, t);
                z.current === t && (z.current = n);
              }));
          }
        );
      }),
      (J = [s, g, V, K, F, T]),
      (t[11] = s),
      (t[12] = g),
      (t[13] = V),
      (t[14] = K),
      (t[15] = F),
      (t[16] = T),
      (t[17] = q),
      (t[18] = J))
    : ((q = t[17]), (J = t[18])),
    (0, p.useLayoutEffect)(q, J));
  let Y, X;
  (t[19] !== s || t[20] !== g || t[21] !== V || t[22] !== F || t[23] !== j || t[24] !== E || t[25] !== O
    ? ((Y = () => {
        let e = d(g, s);
        return () => {
          let t = P.current,
            n = z.current,
            r = E?.() ?? !1;
          queueMicrotask(() => {
            let i = V();
            (L.current && i === e) ||
              o.pages.hasOtherMountGenerationClaim(g, s, F, n) ||
              (t != null &&
                (r && o.pages.getHost(g, s) === t && o.pages.getMountGeneration(g, s) === n && !t.isPainted()
                  ? o.pages.disposeHost(g, s, `web`)
                  : o.pages.detachElectronWebview(t, O, j, n),
                P.current === t && (P.current = null)));
          });
        };
      }),
      (X = [s, g, V, j, F, E, O]),
      (t[19] = s),
      (t[20] = g),
      (t[21] = V),
      (t[22] = F),
      (t[23] = j),
      (t[24] = E),
      (t[25] = O),
      (t[26] = Y),
      (t[27] = X))
    : ((Y = t[26]), (X = t[27])),
    (0, p.useLayoutEffect)(Y, X));
  let Z, Q;
  if (
    (t[28] !== r ||
    t[29] !== n ||
    t[30] !== a ||
    t[31] !== s ||
    t[32] !== h ||
    t[33] !== g ||
    t[34] !== A ||
    t[35] !== y ||
    t[36] !== N ||
    t[37] !== K ||
    t[38] !== M ||
    t[39] !== F ||
    t[40] !== C ||
    t[41] !== j ||
    t[42] !== w ||
    t[43] !== T ||
    t[44] !== D ||
    t[45] !== O ||
    t[46] !== k
      ? ((Z = () => {
          P.current?.disposed && (P.current = null);
          let e = P.current,
            t = u({ hasManagedWebview: e != null, isPresented: K, shouldBootstrapWhenHidden: T });
          if (t === `skip`) {
            if (e != null) {
              let t = z.current;
              o.pages.hasOtherMountGenerationClaim(g, s, F, t) || o.pages.detachElectronWebview(e, O, j, t);
            }
            P.current === e && (P.current = null);
            return;
          }
          if (A === `hidden-browser-use` && o.pages.hasPresentedMount(g, s)) return;
          let i = o.pages.getWebview(g, s, y, { adoptionLease: n, adoptedWebContentsId: r, hostKind: A });
          ((P.current = i),
            o.pages.setPrewarmedEmptyWebview(i, M),
            o.pages.syncElectronWebview(
              i,
              {
                bounds: a,
                clipBounds: h,
                isExiting: N,
                isVisible: K,
                mountGeneration: z.current,
                opacity: C,
                scale: w,
                shouldBootstrap: t === `bootstrap` || (!K && T && !i.hasRegisteredNativeHost()),
                shouldPaint: D,
                windowZoom: k,
              },
              O,
              j,
            ));
        }),
        (Q = [s, g, A, j, y, M, n, r, a, h, N, K, F, C, w, D, T, O, k]),
        (t[28] = r),
        (t[29] = n),
        (t[30] = a),
        (t[31] = s),
        (t[32] = h),
        (t[33] = g),
        (t[34] = A),
        (t[35] = y),
        (t[36] = N),
        (t[37] = K),
        (t[38] = M),
        (t[39] = F),
        (t[40] = C),
        (t[41] = j),
        (t[42] = w),
        (t[43] = T),
        (t[44] = D),
        (t[45] = O),
        (t[46] = k),
        (t[47] = Z),
        (t[48] = Q))
      : ((Z = t[47]), (Q = t[48])),
    (0, p.useLayoutEffect)(Z, Q),
    U == null || c == null)
  )
    return null;
  let $;
  return (
    t[49] !== c || t[50] !== U
      ? (($ = (0, m.createPortal)(c, U)), (t[49] = c), (t[50] = U), (t[51] = $))
      : ($ = t[51]),
    $
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
    ((f = r()), (p = t()), (m = n()), a(), s());
  }))();
}
export { h as n, c as t };
//# sourceMappingURL=webview-1ebce34e5fb4.js.map
